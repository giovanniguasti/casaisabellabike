(() => {
  const copy = {
    it: {walk:'Passeggiata', mtb:'Mountain bike', distance:'circa 9,2 km', open:'Apri scheda', start:'Partenza', end:'Arrivo', loading:'Caricamento della mappa…', mapError:'Mappa non disponibile. Puoi comunque scaricare la traccia GPX.', locating:'Ricerca della posizione…', accuracy:'Accuratezza: circa {n} m', denied:'Permesso di posizione negato. Puoi continuare a usare la scheda.', unavailable:'Posizione non disponibile. Riprova quando vuoi.', unsupported:'Geolocalizzazione non disponibile in questo browser.', stopped:'Aggiornamento della posizione fermato.', speedTitle:'Velocit\u00e0 stimata', slower:'pi\u00f9 lento', faster:'pi\u00f9 veloce', speedUnknown:'grigio: velocit\u00e0 non disponibile', speedNote:'Stima su circa 50 m; scala relativa a questo percorso.', speedError:'Colori della velocit\u00e0 non disponibili.'},
    en: {walk:'Walk', mtb:'Mountain bike', distance:'about 9.2 km', open:'View route', start:'Start', end:'Finish', loading:'Loading map…', mapError:'Map unavailable. You can still download the GPX track.', locating:'Finding your location…', accuracy:'Accuracy: about {n} m', denied:'Location permission denied. You can still use this route.', unavailable:'Location unavailable. Try again when ready.', unsupported:'Geolocation is unavailable in this browser.', stopped:'Location updates stopped.', speedTitle:'Estimated speed', slower:'slower', faster:'faster', speedUnknown:'grey: speed unavailable', speedNote:'Estimated over about 50 m; scale relative to this route.', speedError:'Speed colours are unavailable.'}
  };
  const $ = id => document.getElementById(id);
  const layout = document.createElement('div'); layout.className = 'route-map-profile';
  const mapPanel = document.createElement('div'); mapPanel.className = 'route-map-panel';
  $('map').before(layout); layout.append(mapPanel); mapPanel.append($('map'), $('map-status'));
  $('map').classList.add('route-map-backing');
  const speedLegend = document.createElement('div'); speedLegend.className = 'route-speed-legend'; speedLegend.hidden = true; mapPanel.append(speedLegend);
  const profileContainer = document.createElement('section');
  profileContainer.id = 'profile'; profileContainer.hidden = true; layout.append(profileContainer);
  const controlsContainer = document.createElement('div'); controlsContainer.id = 'route-playback'; controlsContainer.hidden = true;
  const photoContainer = document.createElement('div');
  photoContainer.id = 'route-photo'; photoContainer.hidden = true;
  layout.after(controlsContainer, photoContainer);
  let speedScale = null, filter = 'all', selected = null, map = null, line = null, start = null, end = null, marker = null, accuracy = null, watch = null, lastAccuracy = null, statusKey = '', loadVersion = 0, profile = null, film = null;
  const lang = () => document.documentElement.lang === 'en' ? 'en' : 'it';
  const t = key => copy[lang()][key];
  function status(key) { statusKey = key; $('location-status').textContent = key === 'accuracy' ? t(key).replace('{n}', Math.round(lastAccuracy)) : (key ? t(key) : ''); }
  function stopWatch() { if (watch !== null) navigator.geolocation.clearWatch(watch); watch = null; $('stop').hidden = true; $('locate').hidden = false; }
  const speedColors = ['#154ea6','#2185c5','#53b5cf','#d6dce0','#f3b37c','#df6447','#ac2428'];
  function renderSpeedLegend() {
    if (!speedScale) { speedLegend.hidden = true; speedLegend.replaceChildren(); return; }
    speedLegend.hidden = false;
    if (speedScale.error) { speedLegend.textContent = t('speedError'); return; }
    const title = document.createElement('strong'), bar = document.createElement('div'), labels = document.createElement('div'), note = document.createElement('small');
    title.textContent = t('speedTitle'); bar.className = 'route-speed-bar'; bar.setAttribute('aria-hidden','true'); labels.className = 'route-speed-labels';
    const low = document.createElement('span'), high = document.createElement('span');
    const number = n => n.toLocaleString(lang() === 'it' ? 'it-IT' : 'en-US', {minimumFractionDigits:1,maximumFractionDigits:1});
    low.textContent = `${t('slower')} \u2264 ${number(speedScale.low)} km/h`; high.textContent = `${t('faster')} \u2265 ${number(speedScale.high)} km/h`;
    labels.append(low,high); note.textContent = t('speedNote') + (speedScale.unknown ? ' ' + t('speedUnknown') + '.' : '');
    speedLegend.replaceChildren(title,bar,labels,note);
  }
  function render() {
    const list = $('route-list'); list.replaceChildren();
    const visible = ROUTES.filter(r => filter === 'all' || r.category === filter);
    $('empty').hidden = visible.length > 0;
    visible.forEach(r => {
      const card = document.createElement('article'); card.className = 'path-card';
      const meta = document.createElement('p'); meta.className = 'eyebrow'; meta.textContent = t(r.category) + ' · ' + (lang() === 'it' ? 'circa ' + r.distance : 'about ' + r.distance.replace(',', '.')) + ' km';
      const title = document.createElement('h2'); title.textContent = r.number + ' · ' + r.name;
      const button = document.createElement('button'); button.className = 'button'; button.type = 'button'; button.textContent = t('open'); button.addEventListener('click', () => select(r));
      card.append(meta, title, button); list.append(card);
    });
    if (selected) { $('detail-category').textContent = t(selected.category); $('detail-distance').textContent = (lang() === 'it' ? 'circa ' + selected.distance : 'about ' + selected.distance.replace(',', '.')) + ' km'; }
    if (start) start.bindTooltip(t('start'), {permanent:true, direction:'top'}).getElement()?.setAttribute('aria-label', t('start'));
    if (end) end.bindTooltip(t('end'), {permanent:true, direction:'top'}).getElement()?.setAttribute('aria-label', t('end'));
    if (statusKey) status(statusKey);
    renderSpeedLegend();
    if (profile) profile.translate();
    if (film) film.translate();
  }
  async function select(route) {
    selected = route; const version = ++loadVersion;
    speedScale = null; renderSpeedLegend();
    stopWatch(); if (profile) { profile.destroy(); profile = null; } if (film) { film.destroy(); film = null; } status(''); $('route-detail').hidden = false; $('detail-title').textContent = route.number + ' · ' + route.name; $('download').href = route.gpx; render();
    $('route-detail').scrollIntoView({behavior:'smooth', block:'start'}); $('map-status').textContent = t('loading');
    if (!window.L) { $('map-status').textContent = t('mapError'); return; }
    if (!map) { map = L.map('map'); L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom:19, attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'}).addTo(map); }
    if (line) { map.removeLayer(line); map.removeLayer(start); map.removeLayer(end); line = start = end = null; }
    if (marker) { map.removeLayer(marker); map.removeLayer(accuracy); marker = accuracy = null; }
    try {
      const response = await fetch(route.gpx); if (!response.ok) throw Error('GPX');
      const xml = new DOMParser().parseFromString(await response.text(), 'application/xml');
      if (version !== loadVersion) return;
      const points = Array.from(xml.getElementsByTagName('trkseg'), seg => Array.from(seg.getElementsByTagName('trkpt'), p => {
        const elevation = p.getElementsByTagName('ele')[0]?.textContent.trim();
        return {lat:Number(p.getAttribute('lat')), lon:Number(p.getAttribute('lon')), ele:elevation && Number.isFinite(Number(elevation)) ? Number(elevation) : null};
      })).filter(s => s.length);
      const segments = points.map(seg => seg.map(p => [p.lat, p.lon]));
      if (!segments.length || segments.some(s => s.some(p => !p.every(Number.isFinite)))) throw Error('GPX');
      let speed = null;
      try { const speedResponse = await fetch(route.speed); if (speedResponse.ok) speed = await speedResponse.json(); } catch (_) { /* The route remains usable without speed data. */ }
      if (version !== loadVersion) return;
      const validSpeed = speed && Number.isFinite(speed.low) && Number.isFinite(speed.high) && speed.high > speed.low && Array.isArray(speed.segments) && speed.segments.length === segments.length && speed.segments.every((item, i) => {
        if (item.points !== segments[i].length || !Array.isArray(item.runs)) return false;
        let end = 0;
        for (const run of item.runs) { if (!Array.isArray(run) || run.length !== 3 || !Number.isInteger(run[0]) || !Number.isInteger(run[1]) || run[0] !== end || run[1] <= run[0] || run[1] >= item.points || !(run[2] === null || Number.isInteger(run[2]) && run[2] >= 0 && run[2] < speedColors.length)) return false; end = run[1]; }
        return end === item.points - 1;
      });
      if (validSpeed) {
        const colored = Array.from({length:speedColors.length+1}, () => []);
        speed.segments.forEach((item, i) => item.runs.forEach(([first,last,color]) => colored[color === null ? speedColors.length : color].push(segments[i].slice(first,last+1))));
        line = L.featureGroup();
        colored.forEach((parts,i) => { if (parts.length) L.polyline(parts, {color:i === speedColors.length ? '#737373' : speedColors[i], weight:5}).addTo(line); });
        line.addTo(map); speedScale = {low:speed.low, high:speed.high, unknown:colored[speedColors.length].length > 0};
      } else { line = L.polyline(segments, {color:'#737373', weight:5}).addTo(map); speedScale = {error:true}; }
      renderSpeedLegend();
      start = L.marker(segments[0][0], {title:t('start'), alt:t('start')}).addTo(map).bindTooltip(t('start'), {permanent:true, direction:'top'});
      const last = segments[segments.length-1]; end = L.marker(last[last.length-1], {title:t('end'), alt:t('end')}).addTo(map).bindTooltip(t('end'), {permanent:true, direction:'top'});
      map.invalidateSize(); map.fitBounds(line.getBounds(), {padding:[35,35]}); $('map-status').textContent = '';
      profile = createRouteProfile($('profile'), map, points, lang, route.photos || [], photoContainer, controlsContainer, distance => { if (film) film.seek(distance); });
      film = createRouteFilm(route, points, lang, validSpeed ? speed : null, distance => profile?.seek(distance, false), mapPanel, speedLegend);
    } catch (_) { $('map-status').textContent = t('mapError'); }
  }
  document.querySelectorAll('[data-filter]').forEach(b => b.addEventListener('click', () => { filter = b.dataset.filter; document.querySelectorAll('[data-filter]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); render(); }));
  $('locate').addEventListener('click', () => {
    if (!navigator.geolocation) { status('unsupported'); return; }
    if (!map || !line) { $('map-status').textContent = t('mapError'); return; }
    status('locating'); $('locate').hidden = true; $('stop').hidden = false;
    watch = navigator.geolocation.watchPosition(pos => {
      const point = [pos.coords.latitude, pos.coords.longitude]; lastAccuracy = pos.coords.accuracy;
      if (!marker) { marker = L.circleMarker(point, {radius:8, color:'#fff', weight:3, fillColor:'#1769aa', fillOpacity:1}).addTo(map); accuracy = L.circle(point, {radius:lastAccuracy, color:'#1769aa', fillOpacity:.12}).addTo(map); }
      else { marker.setLatLng(point); accuracy.setLatLng(point).setRadius(lastAccuracy); }
      if (film) film.setLocation(pos.coords);
      status('accuracy');
    }, err => { status(err.code === 1 ? 'denied' : 'unavailable'); if (err.code === 1) stopWatch(); }, {enableHighAccuracy:true, maximumAge:0, timeout:15000});
  });
  $('stop').addEventListener('click', () => { stopWatch(); if (film) film.setLocation(null); if (marker) { map.removeLayer(marker); map.removeLayer(accuracy); marker = accuracy = null; } status('stopped'); });
  document.addEventListener('languagechange', render); window.addEventListener('pagehide', stopWatch); render();
})();
