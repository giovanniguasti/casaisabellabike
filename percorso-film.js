function createRouteFilm(route, segments, language, speed, onPosition, container, legend) {
  const copy = {
    it: {title:'Percorso', intro:'Una prova animata del percorso e delle sue fotografie. Richiede una connessione internet.', open:'Apri la vista 3D', loading:'Caricamento della vista 3D…', play:'Avvia', pause:'Pausa', restart:'Ricomincia', close:'Chiudi vista 3D', error:'La vista 3D non è disponibile. Controlla la connessione e riprova.', map:'Mappa del percorso. Seleziona il tracciato per avviare o fermare l?animazione. Da tastiera premi Invio o spazio.', photo:'Fotografia a', previous:'Foto precedente', next:'Foto successiva', count:'Foto {n} di {total}', reduced:'Animazione disattivata per rispettare le preferenze di movimento del dispositivo.'},
    en: {title:'Route', intro:'An animated preview of the route and its photographs. An internet connection is required.', open:'Open 3D view', loading:'Loading 3D view…', play:'Play', pause:'Pause', restart:'Restart', close:'Close 3D view', error:'The 3D view is unavailable. Check your connection and try again.', map:'Route map. Select the route to start or pause the animation. Press Enter or Space on the keyboard.', photo:'Photograph at', previous:'Previous photo', next:'Next photo', count:'Photo {n} of {total}', reduced:'Animation is disabled to respect your device’s motion preference.'}
  };
  copy.it.hint = 'Usa i comandi sulla mappa per avviare o fermare l’animazione.';
  copy.en.hint = 'Use the map controls to play or pause the animation.';
  copy.it.map = 'Mappa del percorso. Premi Invio o spazio per avviare o fermare l’animazione.';
  copy.en.map = 'Route map. Press Enter or Space to start or pause the animation.';
  const t = key => copy[language()][key];
  const section = document.createElement('section'); section.className = 'route-film';
  section.innerHTML = '<h3></h3><div class="film-view" hidden><div class="film-map" tabindex="0" role="region"></div><figure class="film-photo" hidden><div class="film-photo-controls" hidden><button type="button" class="film-photo-prev"></button><span></span><button type="button" class="film-photo-next"></button></div><img><figcaption></figcaption></figure></div><p class="film-status" role="status"></p>';
  const mapControls = document.createElement('div'); mapControls.className = 'film-map-controls';
  mapControls.innerHTML = '<button type="button" class="film-map-play"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4v16l13-8z"/></svg></button><button type="button" class="film-map-pause"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h5v16H5zm9 0h5v16h-5z"/></svg></button>';
  section.querySelector('.film-map').after(mapControls);
  const hint = document.createElement('p'); hint.className = 'film-hint'; section.querySelector('h3').after(hint);
  container.insertBefore(section, legend);
  const el = s => section.querySelector(s), view = el('.film-view'), mapNode = el('.film-map'), card = el('.film-photo'), status = el('.film-status');
  const samples = []; let distance = 0;
  const rad = Math.PI / 180;
  segments.forEach((seg, index) => { let previous = null; seg.forEach(p => { if (previous) { const a=previous.lat*rad, b=p.lat*rad, dlat=b-a, dlon=(p.lon-previous.lon)*rad; const h=Math.sin(dlat/2)**2+Math.cos(a)*Math.cos(b)*Math.sin(dlon/2)**2; distance+=12742000*Math.asin(Math.min(1,Math.sqrt(h))); } samples.push({coord:[p.lon,p.lat], distance, segment:index}); previous=p; }); });
  const photos = (route.photos || []).filter(p => Number.isFinite(p.distanceM) && p.distanceM >= 0 && p.distanceM <= distance).slice().sort((a,b)=>a.distanceM-b.distanceM);
  const groups = []; photos.forEach(photo => { const group = groups[groups.length-1]; if(group && photo.distanceM - group[0].distanceM <= 50) group.push(photo); else groups.push([photo]); });
  const segmentSamples = segments.map((_, i) => samples.filter(p => p.segment === i));
  const palette = ['#154ea6','#2185c5','#53b5cf','#d6dce0','#f3b37c','#df6447','#ac2428'];
  const runs = [];
  segments.forEach((segment, i) => {
    const entries = speed ? speed.segments[i].runs : [[0, segment.length-1, null]];
    entries.forEach(([a,b,color]) => { if(b > a) runs.push({points:segmentSamples[i].slice(a,b+1), color:color === null ? '#737373' : palette[color]}); });
  });
  let currentGroup = null, photoIndex = 0;
  let started = false;
  let map = null, frame = null, playing = false, progress = 0, last = null, hold = 0, nextPhoto = 0, currentPhoto = null, disposed = false, loading = false, generation = 0;
  function translate() {
    el('h3').textContent=t('title'); hint.textContent=t('hint'); mapNode.setAttribute('aria-label',t('map'));
    el('.film-map-play').setAttribute('aria-label',t('play')); el('.film-map-play').title=t('play'); el('.film-map-play').disabled=playing;
    el('.film-map-pause').setAttribute('aria-label',t('pause')); el('.film-map-pause').title=t('pause'); el('.film-map-pause').disabled=!playing;
    if (currentPhoto) { const photoControls=el('.film-photo-controls'); photoControls.hidden=!currentGroup || currentGroup.length<2; if (!photoControls.hidden) { el('.film-photo-prev').textContent=t('previous'); el('.film-photo-next').textContent=t('next'); photoControls.querySelector('span').textContent=t('count').replace('{n}',photoIndex+1).replace('{total}',currentGroup.length); el('.film-photo-prev').disabled=photoIndex===0; el('.film-photo-next').disabled=photoIndex===currentGroup.length-1; } el('.film-photo img').alt=currentPhoto.alt[language()]; el('.film-photo figcaption').textContent=currentPhoto.caption[language()]+' · '+(currentPhoto.distanceM/1000).toLocaleString(language()==='it'?'it-IT':'en-US',{maximumFractionDigits:2})+' km'; }
  }
  function stop() { playing=false; if (frame !== null) cancelAnimationFrame(frame); frame=null; last=null; translate(); }
  function close() { generation++; loading=false; stop(); if(map){map.remove();map=null;} view.hidden=true; card.hidden=true; status.textContent=''; }
  function pointAt(d) { let lo=0,hi=samples.length-1; while(lo<hi){const mid=(lo+hi)>>1; if(samples[mid].distance<d) lo=mid+1; else hi=mid;} const b=samples[lo],a=samples[Math.max(0,lo-1)]; const f=b.distance>a.distance && a.segment===b.segment ? (d-a.distance)/(b.distance-a.distance) : 1; return {index:lo,coord:[a.coord[0]+(b.coord[0]-a.coord[0])*f,a.coord[1]+(b.coord[1]-a.coord[1])*f]}; }
  function draw() {
    if (!map || !map.getSource('position')) return;
    const p=pointAt(progress), features=[], drawnDistance=started ? progress : distance;
    for (const run of runs) {
      if (run.points[0].distance >= drawnDistance) continue;
      const coordinates=[];
      for (const point of run.points) { if (point.distance > drawnDistance) break; coordinates.push(point.coord); }
      const last=coordinates.length-1;
      if (last >= 0 && coordinates.length < run.points.length && run.points[last].distance < drawnDistance) {
        const a=run.points[last], b=run.points[last+1], f=b.distance>a.distance ? (drawnDistance-a.distance)/(b.distance-a.distance) : 0;
        coordinates.push([a.coord[0]+(b.coord[0]-a.coord[0])*f,a.coord[1]+(b.coord[1]-a.coord[1])*f]);
      }
      if(coordinates.length>1) features.push({type:'Feature',properties:{color:run.color},geometry:{type:'LineString',coordinates}});
    }
    map.getSource('whole').setData({type:'FeatureCollection',features});
    map.getSource('position').setData({type:'Feature',geometry:{type:'Point',coordinates:p.coord}});
    if (started) map.jumpTo({center:p.coord});
  }
  function overview() { if (!map) return; const bounds = new maplibregl.LngLatBounds(); segments.forEach(seg => seg.forEach(p => bounds.extend([p.lon,p.lat]))); map.fitBounds(bounds, {padding:45, pitch:0, bearing:map.getBearing(), duration:0, maxZoom:15}); }
  function showPhoto(photo) { currentGroup=groups.find(group=>group.includes(photo)); photoIndex=currentGroup.indexOf(photo); currentPhoto=photo; el('.film-photo img').src=photo.src; card.hidden=false; translate(); }
  function tick(now) {
    if(!playing || !map) return; if(last===null) last=now; const dt=Math.min((now-last)/1000,0.1); last=now;
    if(hold>0){hold-=dt; if(hold<=0){card.hidden=true;currentPhoto=null;}} else {
      progress=Math.min(distance,progress+distance/45*dt);
      if(nextPhoto<photos.length && progress>=photos[nextPhoto].distanceM){const photo=photos[nextPhoto++]; progress=photo.distanceM; showPhoto(photo); hold=3.5;}
      draw(); onPosition(progress);
      if(progress>=distance && hold<=0){stop();started=false;draw();overview();return;}
    }
    frame=requestAnimationFrame(tick);
  }
  function start() { if(!map || !map.getSource('position') || playing) return; if(matchMedia('(prefers-reduced-motion: reduce)').matches){status.textContent=t('reduced');return;} if(!started || progress>=distance){progress=0;nextPhoto=0;hold=0;card.hidden=true;currentPhoto=null;started=true;map.jumpTo({zoom:14.3,pitch:60});draw();onPosition(progress);} status.textContent=''; playing=true; last=null; translate(); frame=requestAnimationFrame(tick); }
  function toggle() { if(playing) stop(); else start(); }
  function seek(d){stop();progress=Math.max(0,Math.min(distance,d));nextPhoto=photos.findIndex(p=>p.distanceM>progress);if(nextPhoto<0)nextPhoto=photos.length;hold=0;card.hidden=true;currentPhoto=null;draw();}
  let gpsMarker=null;
  function setLocation(coords){if(gpsMarker){gpsMarker.remove();gpsMarker=null;}if(coords && map){const dot=document.createElement('span');dot.className='film-gps';gpsMarker=new maplibregl.Marker({element:dot}).setLngLat([coords.longitude,coords.latitude]).addTo(map);}}
  function loadLibrary(){
    if(window.maplibregl) return Promise.resolve();
    if(window.routeFilmLibrary) return window.routeFilmLibrary;
    window.routeFilmLibrary = new Promise((resolve,reject)=>{const css=document.createElement('link');css.rel='stylesheet';css.href='https://unpkg.com/maplibre-gl@5.6.1/dist/maplibre-gl.css';document.head.append(css);const script=document.createElement('script');script.src='https://unpkg.com/maplibre-gl@5.6.1/dist/maplibre-gl.js';script.onload=resolve;script.onerror=()=>{window.routeFilmLibrary=null;reject(Error('library'));};document.head.append(script);});
    return window.routeFilmLibrary;
  }
  async function open(){
    if(loading) return; loading=true; const token=++generation; status.textContent=t('loading');
    try {
      await loadLibrary(); if(disposed || token!==generation) return;
      view.hidden=false;
      map=new maplibregl.Map({container:mapNode,center:samples[0].coord,zoom:14.3,pitch:60,bearing:-18,attributionControl:true,style:{version:8,sources:{osm:{type:'raster',tiles:['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],tileSize:256,maxzoom:19,attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'},terrain:{type:'raster-dem',tiles:['https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'],tileSize:256,maxzoom:15,encoding:'terrarium',attribution:'Elevation: <a href="https://registry.opendata.aws/terrain-tiles/">AWS Terrain Tiles</a>'}},layers:[{id:'osm',type:'raster',source:'osm'}],terrain:{source:'terrain',exaggeration:1.3}}});
      map.addControl(new maplibregl.NavigationControl(),'top-right');
      map.once('load', () => {
        if (disposed || token !== generation || !map) return;
        map.addSource('ortho', {
          type:'raster', tileSize:256,
          tiles:['https://www502.regione.toscana.it/ows_ofc/com.rt.wms.RTmap/wms?map=owsofc_rt&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&LAYERS=rt_ofc.5k24.32bit&STYLES=&FORMAT=image%2Fpng&TRANSPARENT=true&SRS=EPSG%3A3857&BBOX={bbox-epsg-3857}&WIDTH=256&HEIGHT=256'],
          attribution:'Ortofoto 2024/2025 &copy; <a href="https://www502.regione.toscana.it/geoscopio/servizi/wms/OFC_RT.htm">Regione Toscana</a>'
        });
        map.addLayer({id:'ortho', type:'raster', source:'ortho'});
      });
      map.once('load',()=>{if(disposed || token!==generation || !map)return; map.addSource('whole',{type:'geojson',data:{type:'FeatureCollection',features:[]}}); map.addLayer({id:'whole-outline',type:'line',source:'whole',paint:{'line-color':'#ffffff','line-width':8,'line-opacity':0.8}}); map.addLayer({id:'whole',type:'line',source:'whole',paint:{'line-color':['get','color'],'line-width':5}}); groups.forEach(group=>{const photo=group[0], button=document.createElement('button');button.type='button';button.className='film-photo-marker';button.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h3l1.5-2h7L17 6h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm8 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" fill="currentColor" fill-rule="evenodd"/></svg>';button.setAttribute('aria-label',photo.caption[language()]);button.addEventListener('click',event=>{event.stopPropagation();seek(photo.distanceM);onPosition(progress);showPhoto(photo);});new maplibregl.Marker({element:button}).setLngLat(pointAt(photo.distanceM).coord).addTo(map);}); map.addSource('position',{type:'geojson',data:{type:'Feature',geometry:{type:'Point',coordinates:samples[0].coord}}}); map.addLayer({id:'position',type:'circle',source:'position',paint:{'circle-radius':7,'circle-color':'#ef6b3b','circle-stroke-color':'#ffffff','circle-stroke-width':3}}); progress=0;nextPhoto=0;hold=0;started=false; const bounds=new maplibregl.LngLatBounds(); segments.forEach(seg=>seg.forEach(p=>bounds.extend([p.lon,p.lat]))); map.fitBounds(bounds,{padding:45,pitch:0,bearing:0,duration:0,maxZoom:15}); draw();status.textContent='';loading=false;});
    } catch(e) { if(token===generation && !disposed){close();status.textContent=t('error');} }
  }
  el('.film-photo-prev').addEventListener('click',()=>{if(currentGroup && photoIndex>0) showPhoto(currentGroup[photoIndex-1]);});
  el('.film-photo-next').addEventListener('click',()=>{if(currentGroup && photoIndex<currentGroup.length-1) showPhoto(currentGroup[photoIndex+1]);});
  el('.film-map-play').addEventListener('click',start); el('.film-map-pause').addEventListener('click',stop);
  mapNode.addEventListener('keydown',event=>{if(event.target!==mapNode)return;if(event.key==='Enter' || event.key===' '){event.preventDefault();toggle();}});
  translate(); open(); return {translate,seek,setLocation,destroy(){disposed=true;close();section.remove();}};
}
