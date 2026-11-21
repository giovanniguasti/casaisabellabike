/* Profilo costruito dal GPX già caricato dalla scheda. Distanze in metri. */
function createRouteProfile(container, map, segments, language) {
  const texts = {
    it: {title:'Profilo del percorso', altitude:'Altitudine (m)', grade:'Pendenza (%)', estimate:'La pendenza è una stima calcolata su circa 50 m di percorso.', hint:'Tocca o trascina sul grafico; usa le frecce della tastiera per spostare il cursore. Il simbolo viola indica il percorso; il punto blu indica la tua posizione GPS.', distance:'Distanza', elevation:'Altitudine', slope:'Pendenza stimata', missing:'non disponibile', play:'Play', pause:'Pausa', restart:'Riparti', cursor:'Cursore del percorso', axis:'Distanza dalla partenza (km)', end:'Arrivo raggiunto'},
    en: {title:'Route profile', altitude:'Elevation (m)', grade:'Gradient (%)', estimate:'Gradient is an estimate calculated over approximately 50 m of the route.', hint:'Tap or drag on the chart; use the arrow keys to move the cursor. The purple symbol marks the route; the blue dot marks your GPS location.', distance:'Distance', elevation:'Elevation', slope:'Estimated gradient', missing:'unavailable', play:'Play', pause:'Pause', restart:'Restart', cursor:'Route cursor', axis:'Distance from start (km)', end:'Finish reached'}
  };
  const t = k => texts[language()][k];
  const samples = [];
  let distance = 0;
  segments.forEach((segment, segmentIndex) => {
    let previous = null;
    segment.forEach(p => {
      if (previous) distance += map.distance([previous.lat, previous.lon], [p.lat, p.lon]);
      const last = samples[samples.length - 1];
      if (last && last.segment === segmentIndex && distance - last.distance < 0.001) {
        if (last.ele === null && p.ele !== null) last.ele = p.ele;
      } else samples.push({...p, distance, segment:segmentIndex});
      previous = p;
    });
  });
  const total = distance;
  if (!samples.length || total <= 0) { container.hidden = true; return {destroy(){}, translate(){}}; }
  const missing = {};
  samples.forEach(p => { if (p.ele === null) (missing[p.segment] ||= []).push(p.distance); });
  function at(d, segment) {
    d = Math.max(0, Math.min(total, d));
    let lo = segment === undefined ? 0 : bounds[segment][2], hi = segment === undefined ? samples.length - 1 : bounds[segment][3];
    while (lo < hi) { const mid = Math.floor((lo + hi) / 2); if (samples[mid].distance < d) lo = mid + 1; else hi = mid; }
    const b = samples[lo], a = samples[Math.max(segment === undefined ? 0 : bounds[segment][2], lo - 1)];
    if (b.distance === d || a.segment !== b.segment || b.distance === a.distance) return {...b};
    const f = (d - a.distance) / (b.distance - a.distance);
    return {lat:a.lat + (b.lat-a.lat)*f, lon:a.lon + (b.lon-a.lon)*f, ele:a.ele === null || b.ele === null ? null : a.ele + (b.ele-a.ele)*f, segment:a.segment, distance:d};
  }
  function grade(d) {
    const point = at(d);
    const group = bounds[point.segment];
    const left = Math.max(group[0], d - 25), right = Math.min(group[1], d + 25);
    if (right <= left) return null;
    const a = at(left, point.segment), b = at(right, point.segment);
    if (a.segment !== point.segment || b.segment !== point.segment || a.ele === null || b.ele === null) return null;
    // Do not bridge gaps with unknown elevations.
    const gaps = missing[point.segment] || [];
    let lo = 0, hi = gaps.length;
    while (lo < hi) { const mid = Math.floor((lo + hi) / 2); if (gaps[mid] <= left) lo = mid + 1; else hi = mid; }
    if (lo < gaps.length && gaps[lo] < right) return null;
    return 100 * (b.ele - a.ele) / (right - left);
  }
  const bounds = {};
  samples.forEach((p, i) => { if (!bounds[p.segment]) bounds[p.segment] = [p.distance, p.distance, i, i]; else { bounds[p.segment][1] = p.distance; bounds[p.segment][3] = i; } });
  container.innerHTML = `<h3 id="profile-title"></h3><div class="profile-tabs" role="group"><button type="button" data-view="altitude" aria-pressed="true"></button><button type="button" data-view="grade" aria-pressed="false"></button></div><p id="profile-estimate"></p><p id="profile-hint"></p><svg id="profile-chart" viewBox="0 0 800 260" role="slider" tabindex="0" aria-valuemin="0" aria-orientation="horizontal"><g id="profile-grid"></g><path id="profile-path"></path><line id="profile-cursor"></line><circle id="profile-dot" r="5"></circle><text id="profile-x-label" x="420" y="254" text-anchor="middle"></text></svg><div class="profile-readout" id="profile-readout"></div><div class="profile-controls"><button type="button" id="profile-play"></button><button type="button" id="profile-pause"></button><button type="button" id="profile-restart"></button></div><p id="profile-state" role="status"></p>`;
  container.hidden = false;
  const el = id => container.querySelector('#profile-' + id);
  const chart = el('chart'), path = el('path'), cursor = el('cursor'), dot = el('dot');
  let view = 'altitude', current = 0, frame = null, previousTime = null, playing = false;
  const highlight = L.polyline([], {color:'#612d75', weight:8, opacity:.85, interactive:false}).addTo(map);
  const routeCursor = L.marker([samples[0].lat, samples[0].lon], {icon:L.divIcon({className:'route-position-icon', html:'<span aria-hidden="true">◆</span>', iconSize:[28,28], iconAnchor:[14,14]}), keyboard:false}).addTo(map);
  const format = (n, decimals) => n.toLocaleString(language() === 'it' ? 'it-IT' : 'en-US', {minimumFractionDigits:decimals, maximumFractionDigits:decimals});
  const value = n => n === null ? t('missing') : format(n, 1);
  let yMin = 0, yMax = 1;
  const x = d => 60 + d / total * 710;
  const y = v => 215 - (v-yMin)/(yMax-yMin)*180;
  function draw() {
    const values = samples.map(p => view === 'altitude' ? p.ele : grade(p.distance));
    const valid = values.filter(v => v !== null && Number.isFinite(v));
    yMin = valid.length ? Math.min(...valid) : 0; yMax = valid.length ? Math.max(...valid) : 1;
    const pad = Math.max((yMax-yMin)*0.08, 1); yMin -= pad; yMax += pad;
    let d = '', drawing = false, previousSegment = -1;
    samples.forEach((p, i) => { const v = values[i]; if (v === null || !Number.isFinite(v)) { drawing = false; return; } d += (drawing && p.segment === previousSegment ? ' L' : ' M') + x(p.distance).toFixed(2) + ' ' + y(v).toFixed(2); drawing = true; previousSegment = p.segment; });
    path.setAttribute('d', d);
    let grid = '';
    for (let i=0; i<=4; i++) { const gy = 215-i*45, label = format(yMin+(yMax-yMin)*i/4, 0); grid += `<line x1="60" y1="${gy}" x2="770" y2="${gy}"/><text x="53" y="${gy+4}" text-anchor="end">${label}</text>`; }
    for (let i=0; i<=4; i++) { const gx=60+i*177.5; grid += `<text x="${gx}" y="235" text-anchor="middle">${format(total*i/4000, 1)}</text>`; }
    el('grid').innerHTML = grid;
    update(false);
  }
  function update(pan) {
    const p = at(current), g = grade(current), v = view === 'altitude' ? p.ele : g;
    routeCursor.setLatLng([p.lat,p.lon]);
    const group = bounds[p.segment], left = Math.max(group[0], current-25), right = Math.min(group[1], current+25);
    const first = at(left, p.segment), last = at(right, p.segment);
    highlight.setLatLngs([[first.lat,first.lon], ...samples.filter(s => s.segment === p.segment && s.distance > left && s.distance < right).map(s => [s.lat,s.lon]), [last.lat,last.lon]]);
    if (pan) map.panInside([p.lat,p.lon], {padding:[35,35], animate:false});
    cursor.setAttribute('x1', x(current)); cursor.setAttribute('x2', x(current)); cursor.setAttribute('y1', 35); cursor.setAttribute('y2', 215);
    dot.setAttribute('cx', x(current)); dot.setAttribute('cy', v === null ? 215 : y(v)); dot.style.display = v === null ? 'none' : '';
    const summary = `${t('distance')}: ${format(current/1000, 2)} km · ${t('elevation')}: ${value(p.ele)}${p.ele === null ? '' : ' m'} · ${t('slope')}: ${value(g)}${g === null ? '' : ' %'}`;
    el('readout').textContent = summary;
    chart.setAttribute('aria-valuemax', total.toFixed(0)); chart.setAttribute('aria-valuenow', current.toFixed(0)); chart.setAttribute('aria-valuetext', summary);
  }
  function pause() { playing = false; previousTime = null; if (frame !== null) cancelAnimationFrame(frame); frame = null; el('play').disabled = current >= total; el('pause').disabled = true; }
  function tick(time) {
    if (!playing) return;
    if (previousTime !== null) current = Math.min(total, current + (time-previousTime)*0.25); // 250 m/s
    previousTime = time; update(true);
    if (current >= total) { pause(); el('state').textContent = t('end'); } else frame = requestAnimationFrame(tick);
  }
  function play() { if (playing || current >= total) return; playing = true; previousTime = null; el('state').textContent = ''; el('play').disabled = true; el('pause').disabled = false; frame = requestAnimationFrame(tick); }
  function seek(d) { current = Math.max(0, Math.min(total, d)); previousTime = null; el('state').textContent = ''; if (!playing) el('play').disabled = current >= total; update(true); }
  function pointer(event) { const rect = chart.getBoundingClientRect(); const svgX = (event.clientX-rect.left)/rect.width*800; seek((svgX-60)/710*total); }
  chart.addEventListener('pointerdown', e => { if (e.button !== 0) return; chart.setPointerCapture(e.pointerId); chart.focus({preventScroll:true}); pointer(e); });
  chart.addEventListener('pointermove', e => { if (chart.hasPointerCapture(e.pointerId)) pointer(e); });
  chart.addEventListener('keydown', e => { let next = current; if (e.key === 'ArrowRight' || e.key === 'ArrowUp') next += 50; else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') next -= 50; else if (e.key === 'Home') next = 0; else if (e.key === 'End') next = total; else if (e.key === 'PageUp') next += 500; else if (e.key === 'PageDown') next -= 500; else return; e.preventDefault(); seek(next); });
  container.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => { view = button.dataset.view; container.querySelectorAll('[data-view]').forEach(b => b.setAttribute('aria-pressed', String(b === button))); draw(); }));
  el('play').addEventListener('click', play); el('pause').addEventListener('click', pause);
  el('restart').addEventListener('click', () => { pause(); seek(0); play(); });
  function translate() {
    el('title').textContent = t('title'); container.querySelector('[data-view="altitude"]').textContent = t('altitude'); container.querySelector('[data-view="grade"]').textContent = t('grade');
    container.querySelector('.profile-tabs').setAttribute('aria-label',t('title')); el('estimate').textContent = t('estimate'); el('hint').textContent = t('hint'); el('x-label').textContent = t('axis'); chart.setAttribute('aria-label',t('cursor')); routeCursor.getElement()?.setAttribute('aria-label',t('cursor'));
    el('play').textContent = t('play'); el('pause').textContent = t('pause'); el('restart').textContent = t('restart'); if (current >= total) el('state').textContent = t('end'); draw();
  }
  pause(); translate();
  return {translate, destroy() { pause(); map.removeLayer(routeCursor); map.removeLayer(highlight); container.hidden = true; container.replaceChildren(); }};
}
