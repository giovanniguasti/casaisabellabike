# Casa Isabella Bike — Incarichi e decisioni

Fonte delle voci iniziali: incarico esplicito di Giovanni del 15 novembre 2026, che riporta le decisioni della discussione con ChatGPT. Il riferimento condiviso è il ramo `dev`. Questo documento registra gli incarichi; osservazioni e risultati di Codex vanno in `CODEX-GPT.md`. Visione e vincoli appartengono a `MANIFEST.md`, quando concordato; piano e avanzamento a `MILESTONES.md`.

Una **PROPOSTA** non autorizza l'implementazione. Le decisioni qui registrate non vengono riscritte autonomamente da Codex. Un obiettivo **APPROVATO** non certifica l'approvazione finale del risultato da parte di Giovanni.

## GC-20261115-01 — Riallineamento della collaborazione

- **Data:** 15 novembre 2026.
- **Stato:** APPROVATO.
- **Obiettivo e ambito:** eseguire l'incarico di riallineamento, predisporre i file di scambio e aggiornare il resoconto su `dev`. Leggere istruzioni e stato Git, confrontare lavoro locale e remoto, creare `dev` se manca e integrarvi il lavoro locale e MILESTONES.md/.gitignore del ramo chore/ignore-original-photos. Preservare gli aggiornamenti locali; niente reset distruttivi, force push o cancellazioni di lavoro.
- **Criteri di completamento:** confronto delle versioni, file GPT-CODEX.md e CODEX-GPT.md nella radice, commit e push su `dev` con resoconto di branch, commit, verifiche e punti aperti. Verificare prima che il push non pubblichi il sito; se lo pubblicasse, fermarsi prima del push. Non modificare l'hosting, non fare merge su `main` né pubblicazioni.
- **Punti da chiarire:** eventuale pubblicazione automatica da `dev` da verificare tecnicamente prima del push.

## GC-20261115-02 — Struttura del sito

- **Data:** 15 novembre 2026.
- **Stato:** APPROVATO.
- **Obiettivo e ambito:** homepage breve con accesso a Ospitalità, Bicicletta e territorio, La raccolta delle olive e Contatti. Riutilizzare il lavoro già svolto preservando fotografie ottimizzate e traduzioni. Riferimento: M1.1.
- **Criteri di completamento:** registrare in CODEX-GPT.md lo stato effettivo dell'implementazione, distinguendolo da verifica, revisione finale e pubblicazione.
- **Punti da chiarire:** i contenuti di dettaglio restano distinti dalla creazione delle pagine; riferimento M3.

## GC-20261115-03 — Fotografia esclusa

- **Data:** 15 novembre 2026.
- **Stato:** APPROVATO.
- **Obiettivo e ambito:** escludere WXEF0435.JPG, la foto della pizza risultata sbagliata, dal sito e dalla selezione attiva nelle milestone. Conservare l'originale. Il racconto testuale della pizza preparata per 15 persone può rimanere. Riferimento: M1.
- **Criteri di completamento:** nessun utilizzo della foto nel sito, nessuna inclusione nella selezione attiva, originale preservato e verifica documentata.
- **Punti da chiarire:** nessuno per l'esclusione richiesta; l'approvazione finale delle altre fotografie resta separata.

## GC-20261115-04 — Revisione documentale

- **Data:** 15 novembre 2026.
- **Stato:** APPROVATO.
- **Obiettivo e ambito:** confrontare MANIFEST.md, se esiste, e MILESTONES.md con le decisioni approvate. Eliminare istruzioni attive superate dalla struttura multipagina. Distinguere implementazione, verifica, approvazione di Giovanni e pubblicazione; distinguere struttura delle pagine e completamento dei contenuti.
- **Criteri di completamento:** stati aggiornati soltanto in base a lavoro verificato, preservazione degli aggiornamenti locali, riferimenti alle milestone nei file di scambio senza copiarne integralmente il contenuto. Se MANIFEST.md manca, segnalarlo senza inventare decisioni.
- **Punti da chiarire:** l'eventuale creazione e i contenuti di MANIFEST.md richiedono una discussione dedicata.

## GC-20261115-05 — Consolidamento tecnico

- **Data:** 15 novembre 2026.
- **Stato:** PROPOSTA.
- **Obiettivo e ambito:** registrare per la discussione con Giovanni, senza avviare automaticamente l'implementazione:
  - stile e logica condivisi tra le pagine;
  - gestione delle lingue robusta anche con localStorage indisponibile;
  - verifica della lingua nei collegamenti e nell'apertura diretta delle pagine;
  - ottimizzazione della fotografia iniziale e delle altre immagini utilizzate;
  - accessibilità: tastiera, focus, contrasto, zoom e riduzione delle animazioni;
  - README con anteprima locale, verifiche, rilascio e ripristino;
  - chiarimento della pagina bicicletta finché non esistono itinerari documentati.
- **Criteri di completamento:** proposta registrata e discussa con Giovanni prima di diventare uno o più incarichi approvati. Questa voce non autorizza modifiche applicative o verifiche aggiuntive di consolidamento.
- **Punti da chiarire:** priorità, ambito e criteri tecnici dei futuri incarichi; distinguere quanto già realizzato nei precedenti incarichi dalle attività ancora proposte. Le osservazioni di Codex vanno in CODEX-GPT.md.


## GC-20261115-06 — Tavolo dei ricordi e rullino fotografico

- **Data:** 15 novembre 2026.
- **Stato:** APPROVATO da Giovanni come nuovo incarico; risultato finale ancora da revisionare.
- **Obiettivo:** sostituire la disposizione affiancata delle cinque foto nella pagina raccolta con un tavolo dei ricordi che apre un rullino, usando molte più immagini disponibili localmente.
- **Ambito:** pagina raccolta, stili e logica necessari, copie ottimizzate e aggiornamento della relativa milestone. Homepage e altre pagine non vanno ridisegnate.
- **Selezione ampia:** esaminare tutti gli originali in materiali/foto-originali/ e partire da circa 30–40 scatti distinti pertinenti, anche di pause, paesaggio e forno. Non fermarsi alle cinque foto attuali; è preferibile una selezione ampia da sfoltire con Giovanni. Il numero non è un vincolo: documentare selezione e scarti. Escludere WXEF0435.JPG e duplicati esatti (FXQP3615.JPG/JGUG3431.JPG: usarne uno solo). Non cancellare originali. Non inventare date, cronologia, nomi o eventi.
- **Tavolo:** mosaico compatto di circa 8–12 stampe rappresentative con dimensioni variate, leggere inclinazioni e brevi didascalie, senza sovrapposizioni che nascondano foto o controlli. Un invito esplicito permette di aprire tutte le foto; selezionando una stampa si apre il rullino su quella foto. Su mobile usare una composizione semplice e leggibile. Non riprodurre tutte le immagini grandi in una lunga pagina.
- **Rullino:** visualizzatore modale con una foto per volta, immagine intera senza ritagli di persone, frecce, swipe sul telefono, frecce tastiera, miniature selezionabili, contatore e didascalie IT/EN. Avanzamento manuale, nessun autoplay. Chiusura con pulsante visibile ed Escape, focus contenuto nel dialogo e ripristinato al controllo di apertura; bloccare lo scorrimento sottostante. Ridurre/eliminare animazioni con prefers-reduced-motion.
- **Prestazioni:** miniature leggere separate dalle immagini grandi, WebP orientati correttamente e senza metadati nelle copie pubblicabili; originali preservati ed esclusi da Git. Non precaricare tutti i file grandi: caricare quello corrente e al massimo i vicini. Non applicare il precedente obiettivo indicativo di 1 MB all'intero album ampliato; riferire separatamente peso totale su disco e caricamento iniziale. Nessun framework o servizio esterno.
- **Manutenibilità:** elenco centrale dei dati fotografici con nome originale, file ottimizzati, alt e didascalie IT/EN, utilizzato da tavolo e rullino; rendere semplice togliere, aggiungere o riordinare scatti. Evitare didascalie speculative.
- **Verifica e consegna:** desktop/mobile, foto verticali/orizzontali, mouse/touch/tastiera, apertura sull'immagine corretta, miniature, limiti primo/ultimo scatto coerenti, chiusura/focus, cambio lingua, assenza di errori e caricamento progressivo. Documentare cosa verificato realmente e limiti dei test touch. Presentare anteprima e selezione completa con nomi originali per la revisione.
- **Sincronizzazione:** prima fetch/pull sicuro di dev, preservando modifiche locali; aggiornare MILESTONES.md e CODEX-GPT.md con risultati, selezione, pesi, verifiche e commit. Commit e push solo su dev, secondo l'autorizzazione vigente e senza pubblicazione; niente main, force push o modifiche all'hosting.
- **Punti aperti:** selezione definitiva e approvazione delle immagini pubblicabili restano a Giovanni; questa è un'anteprima ampia da rivedere.

## GC-20261115-07 — Pubblicazione della candidata per prova d'uso

- **Data:** 15 novembre 2026.
- **Stato:** APPROVATO: autorizzazione esplicita di Giovanni alla pubblicazione per provare la facilità d'uso sul sito pubblico. Non equivale all'approvazione definitiva di testi, fotografie o impaginazione.
- **Versione candidata autorizzata:** `25a85213df4db69636d860c2a6ce960687ceef93` di dev, con contenuto applicativo già implementato in `3f7f0cbcbec4fafdd50e5d5990b934f12ae14826`. Ammessi gli aggiornamenti documentali necessari a registrare autorizzazione, controlli ed esito di questo rilascio; nessuna nuova funzionalità.
- **Obiettivo e ambito:** preservare il lavoro locale, confrontare dev/main e creare un tag della versione precedente di main; superati i controlli richiesti, integrare dev in main senza riscrivere la cronologia e pubblicare tramite GitHub Pages esistente su https://casaisabellabike.it. Seguire eventuali protezioni/PR senza aggirarle. Non modificare dominio, CNAME o impostazioni di hosting.
- **Criteri di completamento:** verificare cinque pagine, navigazione, IT/EN e mantenimento della lingua, homepage breve, mailto, tavolo/rullino, immagini, tastiera e mobile; controllare l'esclusione di WXEF0435.JPG, originali, ZIP, certificati non approvati, credenziali e materiali locali dai file tracciati. Attendere Pages e verificare il sito pubblico. Aggiornare CODEX-GPT.md e MILESTONES.md distinguendo verifiche, autorizzazione, pubblicazione riuscita e valutazione d'uso ancora da svolgere; riportare commit e riferimento precedente e mantenere dev/main allineati preservando aggiornamenti concorrenti.
- **Ripristino autorizzato se necessario:** fermarsi in presenza di problemi bloccanti prima del rilascio. Se pubblicazione o uso pubblico presentano una regressione bloccante, non dichiarare successo e ripristinare la versione precedente tramite commit di revert, senza force push, riferendo l'esito.
- **Esclusioni:** album Ospitalità, video, salvaguardia del territorio, premi, biologico, SEO e altre milestone future restano nel piano e non vengono implementati da questo incarico.
- **Punti aperti:** valutazione dell'usabilità da parte di Giovanni e approvazione definitiva dei contenuti restano successive. Riferimenti tecnici ed esito effettivo sono nel resoconto GC-20261115-07, non costituiscono nuove autorizzazioni a rilasci futuri.

## GC-20261121-08 — Catalogo Percorsi e scheda pilota Parterre Torreone

- **Stato:** APPROVATO per sviluppo su dev e anteprima; pubblicazione da autorizzare separatamente.
- **Catalogo:** accessibile da Bicicletta e territorio, categorie Passeggiate e Mountain bike, numerazione progressiva unica e stabile. Prima scheda: 01 · Parterre Torreone, Passeggiata anche se l'attività Garmin è classificata come ciclismo, circa 9,2 km, partenza e arrivo distinti e confermati accessibili da Giovanni.
- **Sorgente locale:** gpx/activity_25151801779.gpx. Usare la traccia integrale, preservare l'originale e creare una copia pubblicabile con coordinate e quote, rimuovendo orari, estensioni Garmin e dati dei sensori. Non aggiungere l'originale ai commit. Mappa e download devono rappresentare la stessa geometria. Non usare cortona-torreone.gpx, la prova tagliata.
- **Scheda:** mappa Leaflet con zoom, inquadratura della traccia completa, marcatori Partenza e Arrivo, vista cartografica e opzione Satellite. Verificare licenze, attribuzioni, limiti e requisiti dei fornitori. Se il satellite richiede account, costi o configurazione non autorizzata, consegnare la vista cartografica e documentare l'opzione da decidere.
- **Posizione:** avvio su richiesta e con permesso del browser; posizione e accuratezza visualizzate sul dispositivo senza registrarle né trasmettere esplicitamente le coordinate. Consentire di fermare l'aggiornamento e gestire rifiuto o indisponibilità lasciando utilizzabile la scheda. Pulsante Scarica GPX disponibile indipendentemente dalla mappa.
- **Consegna:** sito statico e bilingue. Verificare su desktop e mobile navigazione, filtri, traccia, zoom, marcatori, download e posizione consentita/rifiutata; indicare le verifiche simulate. Aggiornare MILESTONES.md e CODEX-GPT.md con esito effettivo, fornitori e istruzioni di anteprima. Sincronizzare e consegnare su dev; nessun merge su main o pubblicazione.

## GC-20261121-09 — Profilo altimetrico e riproduzione della traccia

Stato: approvato per sviluppo e anteprima su dev. Estende GC-20261121-08 sulla scheda pilota 01 · Parterre Torreone.

- Usare coordinate e quote del GPX integrale già previsto. Calcolare la distanza cumulativa lungo la traccia e stimare la pendenza firmata su una finestra di circa 50 m di percorso. Adattare la finestra ai bordi e gestire punti duplicati, quote mancanti e distanze nulle. Mostrare che la pendenza è stimata.
- Aggiungere sotto la mappa un profilo con asse della distanza in km e viste Altitudine (m) e Pendenza (%). Mostrare distanza, quota e pendenza al punto selezionato. Tocco, trascinamento e controllo a tastiera spostano lo stesso cursore su grafico e mappa.
- Aggiungere Play, Pausa e Riparti. Il cursore avanza a velocità costante rispetto alla distanza percorsa, indipendentemente dalla densità dei punti e dagli orari originali. Fermarsi all'arrivo. Distinguere il cursore dal GPS del visitatore e mantenere disponibile lo zoom manuale.
- Riutilizzare struttura, geometria e componenti della scheda esistente. Verificare desktop e mobile, IT/EN, tastiera, sincronizzazione dopo spostamento manuale, fine traccia e posizione GPS separata. Aggiornare MILESTONES.md e CODEX-GPT.md. Consegnare su dev con anteprima e verifiche. Merge su main e pubblicazione richiedono autorizzazione separata.

## GC-20261121-10 — Prima foto lungo Parterre Torreone

Stato: approvato per anteprima su dev. Sulla scheda 01 usare IMG_1982.JPG, disponibile tra i materiali locali dell'utente. Lo screenshot indicato da Giovanni colloca lo scatto sul cursore viola vicino a Le Contesse a circa 6,34 km dalla partenza. La distanza è stimata sull'asse del grafico e non deriva dall'EXIF. Ricavare la posizione dalla geometria della scheda a quella distanza cumulativa; non usare il pallino blu del GPS del visitatore.

Associare la foto al percorso in modo che sia facile aggiungerne altre. Mostrare una copia ottimizzata sotto la mappa quando il Play attraversa il punto, anche se un fotogramma lo salta. Rendere la foto visibile anche selezionando quel punto sul grafico. Il Play continua e la foto rimane visibile in pausa; azzerarla quando si ricomincia dall'inizio. Usare una dissolvenza discreta rispettando la preferenza di movimento ridotto. Preservare l'originale ed escluderlo da Git.

Verificare su desktop e mobile il passaggio in Play, la selezione sul grafico e il riavvio. Riferire in CODEX-GPT.md la distanza usata e l'anteprima su dev. Pubblicazione da autorizzare separatamente.
