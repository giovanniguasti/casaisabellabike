/* Profilo costruito dal GPX già caricato dalla scheda. Distanze in metri. */
function createRouteProfile(container, map, segments, language, photos = [], photoContainer = null) {
  const texts = {
    it: {title:'Profilo del percorso', altitude:'Altitudine (m)', grade:'Pendenza (%)', estimate:'La pendenza è una stima calcolata su circa 50 m di percorso.', hint:'Tocca o trascina sul grafico; usa le frecce della tastiera per spostare il cursore. Il simbolo viola indica il percorso; il punto blu indica la tua posizione GPS.', distance:'Distanza', elevation:'Altitudine', slope:'Pendenza stimata', missing:'non disponibile', play:'Play', pause:'Pausa', restart:'Riparti', cursor:'Cursore del percorso', axis:'Distanza dalla partenza (km)', end:'Arrivo raggiunto', photo:'Foto lungo il percorso', photoAt:'Foto lungo il percorso, circa {km} km dalla partenza', previousPhoto:'Foto precedente', nextPhoto:'Foto successiva', photoCount:'Foto {n} di {total}', galleryTitle:'Foto del percorso', galleryHint:'Seleziona una foto per vederla e trovare il punto sulla mappa.'},
    en: {title:'Route profile', altitude:'Elevation (m)', grade:'Gradient (%)', estimate:'Gradient is an estimate calculated over approximately 50 m of the route.', hint:'Tap or drag on the chart; use the arrow keys to move the cursor. The purple symbol marks the route; the blue dot marks your GPS location.', distance:'Distance', elevation:'Elevation', slope:'Estimated gradient', missing:'unavailable', play:'Play', pause:'Pause', restart:'Restart', cursor:'Route cursor', axis:'Distance from start (km)', end:'Finish reached', photo:'Photo along the route', photoAt:'Photo along the route, about {km} km from the start', previousPhoto:'Previous photo', nextPhoto:'Next photo', photoCount:'Photo {n} of {total}', galleryTitle:'Route photos', galleryHint:'Select a photo to see it and locate it on the map.'}
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
  let visiblePhoto = null, visiblePhotoIndex = 0;
  const highlight = L.polyline([], {color:'#612d75', weight:8, opacity:.85, interactive:false}).addTo(map);
  const routeCursor = L.marker([samples[0].lat, samples[0].lon], {icon:L.divIcon({className:'route-position-icon', html:'<span aria-hidden="true">◆</span>', iconSize:[28,28], iconAnchor:[14,14]}), keyboard:false}).addTo(map);
  const format = (n, decimals) => n.toLocaleString(language() === 'it' ? 'it-IT' : 'en-US', {minimumFractionDigits:decimals, maximumFractionDigits:decimals});
  const photoCues = photos.filter(p => Number.isFinite(p.distanceM) && p.distanceM >= 0 && p.distanceM <= total).slice().sort((a,b) => a.distanceM-b.distanceM);
  // Tutte le foto restano raggiungibili anche quando il Play le supera rapidamente.
  const gallery = document.createElement('section');
  gallery.className = 'route-photo-gallery';
  const galleryHeading = document.createElement('h3'), galleryHint = document.createElement('p'), galleryList = document.createElement('div');
  galleryList.className = 'route-photo-list';
  const galleryButtons = photoCues.map(photo => {
    const button = document.createElement('button'), image = document.createElement('img'), label = document.createElement('span');
    button.type = 'button'; image.alt = ''; image.loading = 'lazy'; image.decoding = 'async';
    image.onerror = () => { image.onerror = null; image.src = photo.src; };
    image.src = photo.src.startsWith('images/percorsi/') ? photo.src.replace('images/percorsi/', 'images/percorsi/miniature/') : photo.src;
    button.append(image, label); button.addEventListener('click', () => { seek(photo.distanceM); photoContainer.scrollIntoView({block:'nearest'}); });
    galleryList.append(button); return {photo, button, label};
  });
  gallery.append(galleryHeading, galleryHint, galleryList);
  if (photoCues.length && photoContainer) photoContainer.before(gallery);
  // Scatti a pochi metri condividono un indicatore e rimangono tutti visibili.
  const photoGroups = [];
  photoCues.forEach(photo => {
    const last = photoGroups[photoGroups.length - 1];
    if (last && photo.distanceM - last[0].distanceM <= 50) last.push(photo);
    else photoGroups.push([photo]);
  });
  const photoMarkers = photoGroups.map(group => {
    const photo = group[0], point = at(photo.distanceM);
    const icon = L.divIcon({className:'route-photo-icon', html:'<span aria-hidden="true">&#9635;</span>', iconSize:[30,30], iconAnchor:[15,15]});
    return {photo, marker:L.marker([point.lat,point.lon], {icon}).addTo(map).on('click', () => seek(photo.distanceM))};
  });
  function clearPhoto() { visiblePhoto = null; if (photoContainer) { photoContainer.hidden = true; photoContainer.replaceChildren(); } }
  function translatePhoto() {
    photoMarkers.forEach(({photo,marker}) => { const label = t('photoAt').replace('{km}', format(photo.distanceM/1000, 2)); marker.getElement()?.setAttribute('aria-label', label); marker.bindTooltip(label); });
    galleryHeading.textContent = t('galleryTitle'); galleryHint.textContent = t('galleryHint');
    galleryButtons.forEach(({photo,button,label}) => { label.textContent = `${photo.caption[language()]} \u00b7 ${format(photo.distanceM/1000, 2)} km`; button.setAttribute('aria-label', label.textContent); });
    if (!visiblePhoto || !photoContainer) return;
    const photo = visiblePhoto[visiblePhotoIndex], figure = photoContainer.querySelector('figure');
    photoContainer.querySelector('h3').textContent = t('photo');
    figure.querySelector('img').alt = photo.alt[language()];
    figure.querySelector('figcaption').textContent = `${photo.caption[language()]} \u00b7 ${format(photo.distanceM/1000, 2)} km`;
    if (visiblePhoto.length > 1) {
      photoContainer.querySelector('[data-photo-prev]').textContent = t('previousPhoto');
      photoContainer.querySelector('[data-photo-next]').textContent = t('nextPhoto');
      photoContainer.querySelector('[data-photo-count]').textContent = t('photoCount').replace('{n}', visiblePhotoIndex + 1).replace('{total}', visiblePhoto.length);
      photoContainer.querySelector('[data-photo-prev]').disabled = visiblePhotoIndex === 0;
      photoContainer.querySelector('[data-photo-next]').disabled = visiblePhotoIndex === visiblePhoto.length - 1;
    }
  }
  function renderPhoto() {
    const photo = visiblePhoto[visiblePhotoIndex], image = photoContainer.querySelector('img');
    image.src = photo.src; image.width = photo.width || 1440; image.height = photo.height || 1080;
    translatePhoto();
  }
  function showPhoto(photo) {
    if (!photoContainer) return;
    const group = photoGroups.find(g => g.includes(photo));
    const index = group.indexOf(photo);
    if (visiblePhoto === group) {
      if (visiblePhotoIndex !== index) { visiblePhotoIndex = index; renderPhoto(); }
      return;
    }
    visiblePhoto = group; visiblePhotoIndex = index;
    const heading = document.createElement('h3'), figure = document.createElement('figure'), image = document.createElement('img'), caption = document.createElement('figcaption');
    image.decoding = 'async'; figure.append(image, caption);
    photoContainer.replaceChildren(heading);
    if (group.length > 1) {
      const controls = document.createElement('div'); controls.className = 'route-photo-controls';
      const previous = document.createElement('button'), next = document.createElement('button'), count = document.createElement('span');
      previous.type = next.type = 'button'; previous.dataset.photoPrev = ''; next.dataset.photoNext = ''; count.dataset.photoCount = ''; count.setAttribute('aria-live', 'polite');
      previous.addEventListener('click', () => { if (visiblePhotoIndex > 0) { visiblePhotoIndex--; renderPhoto(); } });
      next.addEventListener('click', () => { if (visiblePhotoIndex < visiblePhoto.length - 1) { visiblePhotoIndex++; renderPhoto(); } });
      controls.append(previous, count, next); photoContainer.append(controls);
    }
    photoContainer.append(figure); photoContainer.hidden = false; renderPhoto();
  }
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
    const previous = current;
    if (previousTime !== null) current = Math.min(total, current + (time-previousTime)*0.25); // 250 m/s
    const crossed = photoCues.filter(photo => previous < photo.distanceM && current >= photo.distanceM);
    if (crossed.length) showPhoto(crossed[crossed.length-1]);
    previousTime = time; update(true);
    if (current >= total) { pause(); el('state').textContent = t('end'); } else frame = requestAnimationFrame(tick);
  }
  function play() { if (playing || current >= total) return; playing = true; previousTime = null; el('state').textContent = ''; el('play').disabled = true; el('pause').disabled = false; frame = requestAnimationFrame(tick); }
  function seek(d) { current = Math.max(0, Math.min(total, d)); previousTime = null; el('state').textContent = ''; if (!playing) el('play').disabled = current >= total; const nearby = photoCues.reduce((best, photo) => Math.abs(photo.distanceM-current) <= 50 && (!best || Math.abs(photo.distanceM-current) < Math.abs(best.distanceM-current)) ? photo : best, null); if (nearby) showPhoto(nearby); else clearPhoto(); update(true); }
  let pointerRect = null;
  function pointer(event) { const rect = pointerRect || chart.getBoundingClientRect(); const svgX = (event.clientX-rect.left)/rect.width*800; seek((svgX-60)/710*total); }
  chart.addEventListener('pointerdown', e => { if (e.button !== 0) return; pointerRect = chart.getBoundingClientRect(); chart.setPointerCapture(e.pointerId); chart.focus({preventScroll:true}); pointer(e); });
  chart.addEventListener('pointermove', e => { if (chart.hasPointerCapture(e.pointerId)) pointer(e); });
  chart.addEventListener('lostpointercapture', () => { pointerRect = null; });
  chart.addEventListener('keydown', e => { let next = current; if (e.key === 'ArrowRight' || e.key === 'ArrowUp') next += 50; else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') next -= 50; else if (e.key === 'Home') next = 0; else if (e.key === 'End') next = total; else if (e.key === 'PageUp') next += 500; else if (e.key === 'PageDown') next -= 500; else return; e.preventDefault(); seek(next); });
  container.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => { view = button.dataset.view; container.querySelectorAll('[data-view]').forEach(b => b.setAttribute('aria-pressed', String(b === button))); draw(); }));
  el('play').addEventListener('click', play); el('pause').addEventListener('click', pause);
  el('restart').addEventListener('click', () => { pause(); seek(0); play(); });
  function translate() {
    el('title').textContent = t('title'); container.querySelector('[data-view="altitude"]').textContent = t('altitude'); container.querySelector('[data-view="grade"]').textContent = t('grade');
    container.querySelector('.profile-tabs').setAttribute('aria-label',t('title')); el('estimate').textContent = t('estimate'); el('hint').textContent = t('hint'); el('x-label').textContent = t('axis'); chart.setAttribute('aria-label',t('cursor')); routeCursor.getElement()?.setAttribute('aria-label',t('cursor'));
    el('play').textContent = t('play'); el('pause').textContent = t('pause'); el('restart').textContent = t('restart'); if (current >= total) el('state').textContent = t('end'); draw();
    translatePhoto();
  }
  pause(); translate();
  return {translate, destroy() { pause(); clearPhoto(); gallery.remove(); photoMarkers.forEach(({marker}) => map.removeLayer(marker)); map.removeLayer(routeCursor); map.removeLayer(highlight); container.hidden = true; container.replaceChildren(); }};
}
