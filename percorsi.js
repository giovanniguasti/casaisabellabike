(() => {
  const copy = {
    it: {walk:'Passeggiata', mtb:'Mountain bike', distance:'circa 9,2 km', open:'Apri scheda', start:'Partenza', end:'Arrivo', loading:'Caricamento della mappa…', mapError:'Mappa non disponibile. Puoi comunque scaricare la traccia GPX.', locating:'Ricerca della posizione…', accuracy:'Accuratezza: circa {n} m', denied:'Permesso di posizione negato. Puoi continuare a usare la scheda.', unavailable:'Posizione non disponibile. Riprova quando vuoi.', unsupported:'Geolocalizzazione non disponibile in questo browser.', stopped:'Aggiornamento della posizione fermato.'},
    en: {walk:'Walk', mtb:'Mountain bike', distance:'about 9.2 km', open:'View route', start:'Start', end:'Finish', loading:'Loading map…', mapError:'Map unavailable. You can still download the GPX track.', locating:'Finding your location…', accuracy:'Accuracy: about {n} m', denied:'Location permission denied. You can still use this route.', unavailable:'Location unavailable. Try again when ready.', unsupported:'Geolocation is unavailable in this browser.', stopped:'Location updates stopped.'}
  };
  const $ = id => document.getElementById(id);
  let filter = 'all', selected = null, map = null, line = null, start = null, end = null, marker = null, accuracy = null, watch = null, lastAccuracy = null, statusKey = '', loadVersion = 0;
  const lang = () => document.documentElement.lang === 'en' ? 'en' : 'it';
  const t = key => copy[lang()][key];
  function status(key) { statusKey = key; $('location-status').textContent = key === 'accuracy' ? t(key).replace('{n}', Math.round(lastAccuracy)) : (key ? t(key) : ''); }
  function stopWatch() { if (watch !== null) navigator.geolocation.clearWatch(watch); watch = null; $('stop').hidden = true; $('locate').hidden = false; }
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
  }
  async function select(route) {
    selected = route; const version = ++loadVersion;
    stopWatch(); status(''); $('route-detail').hidden = false; $('detail-title').textContent = route.number + ' · ' + route.name; $('download').href = route.gpx; render();
    $('route-detail').scrollIntoView({behavior:'smooth', block:'start'}); $('map-status').textContent = t('loading');
    if (!window.L) { $('map-status').textContent = t('mapError'); return; }
    if (!map) { map = L.map('map'); L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom:19, attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'}).addTo(map); }
    if (line) { map.removeLayer(line); map.removeLayer(start); map.removeLayer(end); line = start = end = null; }
    if (marker) { map.removeLayer(marker); map.removeLayer(accuracy); marker = accuracy = null; }
    try {
      const response = await fetch(route.gpx); if (!response.ok) throw Error('GPX');
      const xml = new DOMParser().parseFromString(await response.text(), 'application/xml');
      if (version !== loadVersion) return;
      const segments = Array.from(xml.getElementsByTagName('trkseg'), seg => Array.from(seg.getElementsByTagName('trkpt'), p => [Number(p.getAttribute('lat')), Number(p.getAttribute('lon'))])).filter(s => s.length);
      if (!segments.length || segments.some(s => s.some(p => !p.every(Number.isFinite)))) throw Error('GPX');
      line = L.polyline(segments, {color:'#b44727', weight:5}).addTo(map);
      start = L.marker(segments[0][0], {title:t('start'), alt:t('start')}).addTo(map).bindTooltip(t('start'), {permanent:true, direction:'top'});
      const last = segments[segments.length-1]; end = L.marker(last[last.length-1], {title:t('end'), alt:t('end')}).addTo(map).bindTooltip(t('end'), {permanent:true, direction:'top'});
      map.invalidateSize(); map.fitBounds(line.getBounds(), {padding:[35,35]}); $('map-status').textContent = '';
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
      status('accuracy');
    }, err => { status(err.code === 1 ? 'denied' : 'unavailable'); if (err.code === 1) stopWatch(); }, {enableHighAccuracy:true, maximumAge:0, timeout:15000});
  });
  $('stop').addEventListener('click', () => { stopWatch(); if (marker) { map.removeLayer(marker); map.removeLayer(accuracy); marker = accuracy = null; } status('stopped'); });
  document.addEventListener('languagechange', render); window.addEventListener('pagehide', stopWatch); render();
})();
