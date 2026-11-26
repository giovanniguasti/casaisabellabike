# Casa Isabella Bike — Resoconto di Codex

Data: 15 novembre 2026. Riferimento condiviso: `dev`. Gli stati sotto riportati descrivono lavoro e verifiche di Codex; non attestano l'approvazione finale di Giovanni. Gli incarichi sono in `GPT-CODEX.md`, il piano in `MILESTONES.md`.

Aggiornamento più recente: **GC-20261115-07 — Pubblicazione per prova d'uso**, resoconto in fondo al documento. Candidata `25a85213df4db69636d860c2a6ce960687ceef93`; autorizzazione esplicita ricevuta e **pubblicazione riuscita e verificata** tramite merge `0cc5f2fef8c099b6cd18cabd59f5e0e279c090f7`. Il contenuto applicativo rimane quello di `3f7f0cbcbec4fafdd50e5d5990b934f12ae14826`. Valutazione d'uso e approvazione definitiva di Giovanni ancora pendenti; i resoconti precedenti descrivono lo stato storico al momento dei singoli incarichi.

## GC-20261115-01 — Riallineamento della collaborazione

### Attività e file

- Stato iniziale: feature/raccolta-olive-2026, lavoro multipagina ancora non committato; `dev` assente sia localmente sia sul remoto. Nessun AGENTS.md trovato nella radice, nelle directory superiori controllate o nei rami esaminati.
- Fetch del remoto e confronto con chore/ignore-original-photos, commit `84d552562779db31feab42ac0fda4d725baa32aa`. Quel ramo modifica solo .gitignore e MILESTONES.md rispetto a main.
- Creato `dev` dal lavoro locale, senza cambiare i file. Salvata l'implementazione esistente nel commit **`ab9dbb82843fd359180f8a146d97d201155a8d88`** (`Preserve local multipage site and 2026 harvest implementation on dev`).
- Integrazione della cronologia chore su `dev`; risolti i conflitti documentali confrontando le versioni. Conservato il piano locale più aggiornato e integrati commento ed esclusione di .gitignore dal remoto. Nessun reset, force push o intervento su main.
- Creati GPT-CODEX.md e CODEX-GPT.md; aggiornato MILESTONES.md. Nessun nuovo intervento applicativo in questo incarico. MANIFEST.md assente e non creato.
- ZIP delle foto e PDF della certificazione già presenti restano locali, non tracciati e fuori dai commit. Gli originali sono esclusi da Git; le cinque copie WebP pubblicabili sono tracciate.

### Pubblicazione: verifica prima del push

Letture autenticate delle API GitHub, senza modifiche alle impostazioni:

- `GET /repos/giovanniguasti/casaisabellabike/pages`: `build_type=legacy`, sorgente `main`, cartella `/`, dominio `casaisabellabike.it`.
- `GET /repos/giovanniguasti/casaisabellabike/environments/github-pages/deployment-branch-policies`: unico ramo ammesso `main`.
- `GET /repos/giovanniguasti/casaisabellabike/hooks`: nessun webhook.
- Workflow rilevato: solo pages-build-deployment dinamico; deploy recenti da main. Nessun workflow aggiunto nel repository.

Esito: **il push su dev non pubblica tramite l'hosting configurato**. CNAME, ramo predefinito e configurazione Pages rimangono invariati. La verifica va ripetuta se cambia la configurazione.

### Esito della sincronizzazione

- Primo push eseguito e verificato: `origin/dev` punta a **`46689dac457245b1f8fd664cd08396d43087240c`**, commit di integrazione dei documenti e dei file di scambio, discendente sia dal commit applicativo `ab9dbb82843fd359180f8a146d97d201155a8d88` sia da chore/ignore-original-photos.
- `dev` locale segue `origin/dev`. Nessun aggiornamento a main, rimasto a `e1363d6c3cd40cd0519546efc4d6ef4907bd03b9`; anche chore è rimasto invariato.
- Dopo il primo push, API GitHub: zero workflow run per `branch=dev` e zero deployment per `ref=dev`. Nessuna pubblicazione attivata.
- Il presente aggiornamento documentale registra quell'esito dopo la verifica. Per il commit più recente del resoconto consultare `git log -1 -- CODEX-GPT.md`; per il contenuto applicativo fare riferimento al commit di implementazione sopra indicato.

### Verifiche

- Snapshot SHA-256 prima del riallineamento e verifica della preservazione dei file applicativi, delle immagini e dei materiali locali. La sola modifica successiva a .gitignore integra il commento remoto e mantiene la regola `/materiali/foto-originali/`.
- Nessun originale, archivio ZIP o certificato nell'indice; nessun originale già tracciato. Nessuna copia pubblicabile della foto esclusa.
- Confermato il resoconto delle verifiche precedenti: 40 combinazioni pagina/lingua/formato e 50 percorsi di navigazione, tastiera e console senza errori JavaScript. Nessuna modifica al codice dopo quelle verifiche; non ripetuto il consolidamento tecnico proposto.
- Riapertura HTTP delle cinque pagine: tutte 200. Anteprima locale disponibile. `git diff --check` senza errori.

## GC-20261115-02 — Stato della struttura e dei contenuti

Riferimenti: M1, M1.1 e M3. Commit di implementazione: `ab9dbb82843fd359180f8a146d97d201155a8d88`.

- **Implementato e verificato:** index.html con fotografia iniziale preservata, breve identità, tre inviti visivi e Contattaci; ospitalita.html, bicicletta.html, raccolta-olive.html e contatti.html; traduzioni IT/EN, metadati specifici, navigazione comune, logo verso home e pagina corrente riconoscibile. Stili in styles.css, traduzioni e lingua in script.js; istruzioni di anteprima in README.md.
- **Raccolta:** racconto, didascalie e traduzioni già realizzati conservati; cinque WebP in images/raccolta-2026/, 1.188.286 byte complessivi. Nessuna galleria nella homepage.
- **Contenuti incompleti:** dettagli confermati della casa, capienza e modalità dei soggiorni, fotografie pertinenti degli interni; eventuali itinerari con dati verificati. Le pagine introduttive esistono ma M3 non è completata. Non inventati camere, dotazioni, prezzi, disponibilità o servizi bike.
- **Approvazione:** struttura multipagina approvata come direzione; revisione finale di testi, immagini pubblicabili e impaginazione ancora pendente. Il sito non è stato pubblicato con queste modifiche.

## GC-20261115-03 — Fotografia esclusa

WXEF0435.JPG non è usata nel sito né inclusa nella selezione attiva M1. La copia pizza-a-tavola.webp è assente. L'originale è conservato e verificato tramite SHA-256. Restano il testo approvato sulla pizza preparata da Giovanni per 15 persone e la foto pertinente del forno. Nessuna modifica agli originali.

## GC-20261115-04 — Revisione documentale

MILESTONES.md conserva gli aggiornamenti locali verificati e distingue struttura delle pagine, contenuti ancora incompleti, verifiche tecniche, revisione finale di Giovanni e pubblicazione. Rimossa l'istruzione attiva di collocare il racconto in homepage e aggiornato il vincolo sui push alla nuova autorizzazione limitata a dev. MANIFEST.md non risulta presente né nel lavoro locale né nei rami remoti esaminati: contenuti e creazione restano da concordare.

## Osservazioni su GC-20261115-05 — Proposta non avviata

Il consolidamento tecnico rimane **PROPOSTA** e non è stato implementato da questo incarico. Nel codice dei precedenti incarichi sono già presenti stili/logica condivisi, parametro lang nei collegamenti e protezione delle operazioni localStorage con try/catch; tastiera e navigazione IT/EN sono già state verificate. Ciò non equivale al completamento della proposta: indisponibilità effettiva dello storage, contrasto, zoom, riduzione delle animazioni, ulteriore ottimizzazione delle immagini, documentazione di rilascio/ripristino e formulazione della pagina bicicletta richiedono ambito concordato con Giovanni.

## Anteprima e punti aperti

Dalla radice del repository:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Aprire http://127.0.0.1:8000/?lang=it oppure http://127.0.0.1:8000/?lang=en. Se il server dell'anteprima è già attivo, aprire direttamente l'indirizzo. Screenshot delle cinque pagine in IT/EN, desktop 1440 px e mobile 390 px, prodotti nella precedente verifica locale; non sono artefatti permanenti su Git.

Restano aperti: approvazione finale di Giovanni, contenuti M3, definizione di MANIFEST.md e discussione della proposta tecnica. M2 e M4 non avviate. Altri browser e dispositivi fisici non verificati. Nessuna autorizzazione alla pubblicazione o al merge su main.

## GC-20261115-06 — Tavolo dei ricordi e rullino fotografico

Data: 15 novembre 2026. Riferimenti: M1 e nuova M1.2. **Implementato e verificato, selezione e risultato finale da revisionare con Giovanni.**

Commit di implementazione: **`3f7f0cbcbec4fafdd50e5d5990b934f12ae14826`**, `Add memories table and accessible photo roll with 40 harvest photos`. Il commit del presente aggiornamento documentale è identificabile con `git log -1 -- CODEX-GPT.md`.

### Sincronizzazione e ambito

All'inizio dev era a c6299a8, senza modifiche ai file tracciati. Dopo fetch, il remoto aveva aggiunto soltanto l'incarico in GPT-CODEX.md, commit 989dd08: eseguito fast-forward sicuro e letto il testo completo. I materiali non tracciati sono rimasti intatti. Nessun intervento su main, reset, force push o modifica all'hosting. GPT-CODEX.md è preservato senza riscrivere le decisioni.

Intervento limitato alla pagina raccolta e alle risorse necessarie. Il racconto IT/EN già approvato è invariato. Homepage, Ospitalità, Bicicletta, Contatti, stili comuni, fotografia iniziale e CNAME sono invariati; la proposta generale GC-20261115-05 resta distinta e non completata da questo incarico.

### Attività e file

- `raccolta-olive.html`: sostituita la precedente galleria lunga con il tavolo e il dialogo del rullino; collegamento esplicito a tutte le foto e messaggio bilingue per browser senza JavaScript.
- `raccolta-foto.js`: elenco centrale di 40 fotografie, con nome originale, percorsi/dimensioni delle copie, alt, didascalie e titoli brevi IT/EN. Ordine nell'array per il rullino, proprietà table per le 10 stampe; lo stesso elenco alimenta entrambe le viste.
- `ricordi.css`: stili della sola pagina raccolta, stampe con dimensioni variate e lievi inclinazioni, composizione mobile semplice, dialogo adattabile e preferenza di riduzione delle animazioni.
- `ricordi.js`: apertura sullo scatto scelto, immagine intera senza ritagli, precedente/successiva con limiti espliciti, miniature selezionabili, contatore, nome originale e lingua anche nel dialogo. Frecce tastiera, Home/End, swipe touch, Tab/Shift+Tab contenuti nel dialogo, chiusura visibile ed Escape, restituzione del focus e della posizione di scorrimento. Caricamento della foto corrente e al massimo dei due vicini; errore di caricamento con Riprova.
- `script.js`: aggiunto soltanto l'evento languagechange, necessario ad aggiornare tavolo e rullino con la lingua già gestita dal sito.
- `images/raccolta-2026/album/`: 35 nuove copie grandi WebP; riutilizzate senza modifiche le 5 precedenti. `images/raccolta-2026/miniature/`: 40 miniature WebP separate.
- `FOTO-RACCOLTA.md`: selezione completa numerata con nomi originali, stampe sul tavolo, scarti motivati e pesi. `MILESTONES.md`: aggiornata M1 e aggiunta M1.2 sulla base delle verifiche effettive, con revisione finale e pubblicazione ancora pendenti.

### Selezione e conservazione

Esaminati tutti i **49 originali**. Inclusi **40 scatti distinti**: lavoro tra gli ulivi, persone, reti e cassette, trattore, pause davanti alla casa, paesaggio, forno e tavola all'aperto. L'ordine è editoriale e non attribuisce date, nomi, ruoli o una cronologia alle fotografie.

Esclusi WXEF0435.JPG come richiesto e JGUG3431.JPG, duplicato esatto di FXQP3615.JPG verificato con SHA-256. Altri sette scatti non inclusi: IMG_1824.JPG, CVZI4831.JPG, HWYO7681.JPG, REFK3371.JPG, SHDD5304.JPG, TFHS1474.JPG e VMPI5800.JPG; motivi nel documento di selezione. Questi sette scatti restano disponibili per un'eventuale scelta diversa di Giovanni.

Tutti gli originali sono preservati tramite verifica SHA-256 e restano esclusi da Git. Orientamento EXIF applicato ai pixel, nessun ritaglio né ingrandimento; assenza di chunk EXIF, XMP e ICC verificata nelle 80 WebP utilizzate. Le cinque copie precedenti restano identiche. ZIP e certificato locali non sono inclusi nei commit.

### Pesi e caricamento progressivo

| Risorsa | Peso |
|---|---:|
| 40 immagini grandi, comprese le 5 precedenti | 11.839.408 byte |
| 40 miniature separate | 1.347.262 byte |
| Totale delle copie usate dall'album su disco | 13.186.670 byte |
| Sole miniature delle 10 stampe sul tavolo | 292.546 byte |
| Contenuti iniziali misurati nel browser, HTML incluso | 367.440 byte |

Misura iniziale: Chrome headless, cache disabilitata, viewport 1440×1000, server statico locale; zero immagini grandi prima dell'apertura. Il totale iniziale comprende HTML, CSS, JavaScript e miniature, senza equipararlo al peso su disco. Varia con viewport, cache e porzione visibile. Alla prima apertura su IMG_1858.JPG, richieste soltanto quella foto e le due vicine QFIU9033.JPG/DQET0289.JPG: 725.186 byte complessivi per le immagini grandi. Nessun caricamento iniziale dell'album completo. Le miniature del rullino vengono create soltanto alla prima apertura e hanno caricamento differito.

### Verifiche effettive e risultati

- Chrome headless: pagina raccolta IT/EN a 1440×1000, 1024×768, 768×1024, 390×844, 320×568 e 844×390: **12 combinazioni**, senza overflow orizzontale o sovrapposizione delle stampe. Controlli del dialogo visibili anche in orizzontale, foto verticali/orizzontali intere con object-fit: contain.
- Tutte le 40 fotografie grandi caricate e confrontate con percorso, nome originale, alt e didascalia attesi; tutte le 10 stampe aperte sullo scatto corretto. Miniature selezionabili, primo/ultimo scatto coerenti, nessun autoplay.
- Mouse reale tramite eventi del browser; tastiera con Invio, frecce, Home/End, Tab e Shift+Tab, focus visibile e contenuto, Escape e pulsante Chiudi. Verificati restituzione del focus al controllo di apertura, posizione di scorrimento ripristinata e blocco dello sfondo.
- Cambio IT/EN nel dialogo senza cambiare foto, didascalie e alt aggiornati, lingua mantenuta dal rullino alla pagina Contatti. Altre quattro pagine controllate in IT/EN: testi e link conservati, nessun dialogo aggiunto.
- Touch tramite Input.dispatchTouchEvent di Chrome: swipe nei due sensi, gesto breve senza avanzamento, movimento verticale senza avanzamento, limite iniziale. **Non è una prova su un telefono fisico.**
- Richiesta bloccata intenzionalmente: messaggio di errore accessibile e Riprova funzionanti, focus rimasto nel dialogo. Cambio rapido fra foto con rete rallentata: immagine e didascalia finali coerenti. Il blocco di rete intenzionale è escluso dal conteggio degli errori inattesi.
- Preferenza reduced-motion verificata: transizioni delle stampe disattivate. Nessun errore JavaScript, risposta HTTP inattesa fallita o errore di rete inatteso nei controlli. git diff --check superato.
- SHA-256 di tutti gli originali e dei file preesistenti fuori dall'ambito: preservati. Nessun originale già tracciato; dati senza WXEF0435.JPG o duplicati esatti. File mancanti, duplicati negli identificatori e dati fotografici incompleti non rilevati.

Screenshot del tavolo e del rullino in IT/EN, desktop 1440 px e mobile 390 px, disponibili localmente in `%TEMP%/casaisabella-ricordi-review/`. I test e gli artefatti temporanei non introducono dipendenze applicative nel repository.

### Anteprima, consegna e punti aperti

Anteprima: http://127.0.0.1:8000/raccolta-olive.html?lang=it oppure http://127.0.0.1:8000/raccolta-olive.html?lang=en. Dalla radice del repository, se non è già attiva: `python -m http.server 8000 --bind 127.0.0.1`.

Ramo di consegna: **dev**. Controllo autenticato della configurazione prima dell'invio: Pages legacy da main `/`, policy dell'ambiente github-pages limitata a main, nessun webhook. Il push su dev non attiva la pubblicazione configurata. Nessuna modifica a main o alle impostazioni di hosting.

Restano da Giovanni: selezione definitiva, eventuali rimozioni tramite i nomi originali, approvazione delle immagini pubblicabili, testi e impaginazione. Limiti tecnici: nessun test su dispositivo fisico, Safari, Firefox o lettore di schermo. M2, M3 oltre i contenuti già autorizzati e M4 non avviate; MANIFEST.md resta assente. Nessuna pubblicazione del sito autorizzata o eseguita.

## GC-20261115-07 — Pubblicazione per prova d'uso

Autorizzazione esplicita di Giovanni del 15 novembre 2026, registrata in GPT-CODEX.md e limitata alla candidata **`25a85213df4db69636d860c2a6ce960687ceef93`**. La prova pubblica non equivale all'approvazione definitiva dei contenuti. **Implementazione verificata, pubblicazione autorizzata e riuscita, controlli pubblici superati; valutazione d'uso di Giovanni ancora da svolgere.**

### Preparazione e verifiche prima del rilascio

- Stato locale iniziale: dev a 02cae72, nessuna modifica ai file tracciati; solo ZIP e certificato locali non tracciati. Fetch e fast-forward a 25a8521, preservando i nuovi piani M3.1/M3.2/M3.3. Questi aggiornamenti modificano soltanto MILESTONES.md e non introducono funzionalità future.
- Versione precedente di main: **`e1363d6c3cd40cd0519546efc4d6ef4907bd03b9`**. Tag annotato di ripristino creato: **`pre-usability-test-20261115-e1363d6`**. Il confronto conferma CNAME invariato.
- Controlli ripetuti sulla candidata con Chrome headless: cinque pagine in IT/EN a 1440×1000, 390×844, 320×568 e 844×390, 40 combinazioni; 50 combinazioni di navigazione, titoli e testi tradotti, lingua nei link e apertura diretta, tastiera e focus. Homepage breve con tre inviti; Contatti con mailto esatto `info@casaisabellabike.it` e nessun modulo.
- Rullino riprovato in 12 combinazioni di formato/lingua: tutte le 40 immagini e le 10 aperture dalle stampe, frecce e Home/End, miniature, chiusura con pulsante/Escape, focus contenuto e ripristinato, scroll bloccato. Swipe tramite eventi touch di Chrome, lingua nel dialogo e caricamento progressivo; nessun errore JavaScript o errore di rete inatteso. Test di errore volontario e Riprova superato.
- Controllati tutti i 102 file della candidata: nessun percorso materiali/, originale della raccolta, archivio ZIP, PDF, certificato, file .env o chiave privata. Ricerca di pattern di credenziali comuni senza rilevamenti; WXEF0435.JPG e JGUG3431.JPG assenti dall'elenco fotografico e dalle copie usate. Snapshot SHA-256 dei materiali locali e dei file precedenti prima del rilascio.
- API GitHub in sola lettura: Pages legacy da main `/`, dominio casaisabellabike.it, HTTPS attivo; main non protetto, nessun ruleset attivo. Nessuna impostazione modificata. Il sito pubblico precedente risponde HTTP 200 con la homepage monolitica, prima del deploy.

File modificati da questo incarico: soltanto GPT-CODEX.md, MILESTONES.md e CODEX-GPT.md per autorizzazione, stato e resoconto; README.md e FOTO-RACCOLTA.md aggiornati per distinguere la prova pubblica dalla revisione definitiva ancora aperta. Nessuna nuova funzionalità, conversione di immagini o modifica a dominio, CNAME o hosting.

### Pubblicazione, verifica pubblica e riallineamento

- Preparazione documentale e autorizzazione salvate su dev nel commit `b8008b428bc223b163bae5b2e901ff15379c23ad`. Tag annotato **`pre-usability-test-20261115-e1363d6`** salvato e verificato sul remoto: punta al precedente main **`e1363d6c3cd40cd0519546efc4d6ef4907bd03b9`**.
- Dev integrato in main con merge non distruttivo **`0cc5f2fef8c099b6cd18cabd59f5e0e279c090f7`**. API di main ricontrollata prima del push: nessuna protezione o ruleset che richiedesse PR; nessuna regola aggirata. Push ordinario, senza force push.
- **Prima pubblicazione riuscita:** build Pages per 0cc5f2f in stato built e [workflow pages build and deployment completato con success](https://github.com/giovanniguasti/casaisabellabike/actions/runs/43745053432). Il contenuto applicativo è identico alla candidata autorizzata: le sole differenze sono i documenti del rilascio.
- **Presenza della nuova versione verificata via HTTPS:** cinque HTML e cinque CSS/JS confrontati byte per byte con i blob della candidata; identici. Originali, archivio ZIP, PDF locale e due percorsi della foto esclusa controllati: tutti 404. Un 503 transitorio sull'URL della vecchia pizza, non usato dal sito, è stato ritentato fino a ottenere 404; nessun file escluso è stato esposto.
- **Controlli pubblici in Chrome:** ripetute 40 combinazioni delle cinque pagine IT/EN/formato e 50 navigazioni, con lingua mantenuta, email mailto corretta e tastiera. Ripetute le 12 combinazioni del rullino, tutte le 40 foto e le 10 stampe, miniature, primo/ultimo, chiusura, focus, scroll e cambio lingua. Touch emulato nei due sensi, gestione dell'errore intenzionale e Riprova, riduzione delle animazioni; zero errori JavaScript, HTTP o di rete inattesi nelle risorse in uso.
- **Prestazioni pubbliche:** zero immagini grandi prima di aprire il rullino; alla prima apertura centrale soltanto corrente e due vicine. Il server comprime HTML/CSS/JS: la misura iniziale del browser è 310.685 byte di risorse codificate, HTML incluso, nella stessa viewport 1440×1000; il peso dell'album su disco rimane invariato. Nessuna ottimizzazione aggiuntiva eseguita da questo incarico.
- **Riallineamento verificato:** dopo il primo deploy dev è avanzato in fast-forward al merge 0cc5f2f e il push è stato confermato; i due rami remoti risultavano identici prima di questo aggiornamento del resoconto. Gli aggiornamenti documentali successivi preservano quella cronologia e non modificano il codice applicativo. Il commit documentale più recente è identificabile con `git log -1 -- CODEX-GPT.md`.
- Nessuna regressione bloccante rilevata, nessun rollback necessario. Se richiesto da un problema bloccante successivo, usare un commit di revert del merge di rilascio, con il tag precedente come riferimento e risoluzione esplicita degli eventuali conflitti documentali; non usare reset o force push. Il tag non modifica l'hosting e il ripristino non è stato eseguito come test.

URL pubblici verificati:

- https://casaisabellabike.it/
- https://casaisabellabike.it/ospitalita.html
- https://casaisabellabike.it/bicicletta.html
- https://casaisabellabike.it/raccolta-olive.html
- https://casaisabellabike.it/contatti.html

Sono state controllate entrambe le lingue con `?lang=it` e `?lang=en`. Screenshot pubblici desktop/mobile in `%TEMP%/casaisabella-release-review/public/`; anteprima locale ancora disponibile su http://127.0.0.1:8000/. Nessun file temporaneo di test aggiunto a Git.

### Limiti e valutazione ancora aperta

Nessun problema bloccante rilevato nei controlli locali o pubblici. Dispositivi fisici, Safari, Firefox e lettori di schermo non verificati; la prova touch è un'emulazione del browser. Verificato il collegamento mailto, senza inviare messaggi né testarne il recapito. I contenuti introduttivi Ospitalità/Bicicletta rimangono quelli confermati, senza itinerari, disponibilità o servizi inventati. **Valutazione dell'usabilità di Giovanni e approvazione definitiva di testi, fotografie e impaginazione ancora da svolgere.** Album Ospitalità, video, salvaguardia del territorio, premi, biologico e SEO restano nel piano, non implementati. L'autorizzazione GC-20261115-07 non si estende a rilasci futuri.

## GC-20261121-08 — Percorsi, anteprima su dev

- Implementato il catalogo bilingue raggiungibile da Bicicletta e territorio, con filtri Passeggiate e Mountain bike e numeri unici stabili nel catalogo `percorsi-data.js`. Prima scheda 01 · Parterre Torreone, Passeggiata, circa 9,2 km; Giovanni ha confermato accessibilità e distinzione di partenza e arrivo.
- Traccia: `percorsi/01-parterre-torreone.gpx` deriva dall'integrale `gpx/activity_25151801779.gpx` locale, non tracciato. Confrontati tutti i 6.834 punti: coordinate e quote identiche, primo e ultimo punto distinti. La copia contiene solo GPX, traccia, nome, segmenti, punti e quote; rimossi orari, estensioni e sensori. `cortona-torreone.gpx` non usato. Mappa e download leggono lo stesso file.
- Mappa: Leaflet 1.9.4 da unpkg; tessere standard OpenStreetMap con attribuzione visibile. Politica: https://operations.osmfoundation.org/policies/tiles/ (nessuna disponibilità garantita, cache e richieste normali del browser, niente prefetch); dati https://www.openstreetmap.org/copyright. Leaflet: https://leafletjs.com/ (licenza BSD). La vista Satellite resta da concordare: il servizio Esri documentato richiede account e prevede tariffe oltre la soglia gratuita https://developers.arcgis.com/rest/static-basemap-tiles/ ; condizioni di contenuti e uso con software terzo da verificare https://www.esri.com/content/dam/arcgisonline/docs/tou_summary.pdf. Non è stata attivata.
- Verifiche locali con Chrome headless: viewport desktop 1440×900 e mobile 390×844 emulato, navigazione, filtri, IT/EN, apertura scheda, zoom, traccia, due marcatori, download e posizione concessa e negata. Coordinate, accuratezza (15 m), consenso/rifiuto e touch mobile sono simulati tramite browser; arresto aggiornamento verificato. Bloccando le tessere in modo simulato, traccia e marcatori restano visibili e download funziona. Nessun errore JavaScript osservato nella prova principale. Geolocalizzazione reale, hardware mobile, altri browser e lettori di schermo non verificati.
- Anteprima: dalla radice `python -m http.server 8000 --bind 127.0.0.1`, poi http://127.0.0.1:8000/percorsi.html?lang=it . La geolocalizzazione richiede contesto sicuro (localhost o HTTPS) e consenso. La posizione è trattata in memoria dal browser e non registrata dall'applicazione.
- GitHub Pages verificato via API: sorgente `main`, cartella `/`; push su dev non è la pubblicazione Pages. Nessun merge su main o pubblicazione autorizzati da questo incarico. Revisione dell'anteprima e scelta del satellite rimangono aperte.

## GC-20261121-09 — Profilo e riproduzione, anteprima su dev

- Aggiunti alla scheda il profilo di altitudine e quello di pendenza, con distanza cumulativa sul GPX integrale già usato dalla mappa. La pendenza è stimata tramite differenza di quota su una finestra centrata fino a 50 m, ridotta agli estremi del segmento; quote mancanti o finestre con lacune producono un valore non disponibile. I punti coincidenti vengono accorpati per il calcolo, senza modificare il GPX.
- Grafico accessibile da tastiera e utilizzabile con puntatore e touch: il cursore viola e il tratto evidenziato sulla mappa seguono la distanza selezionata. Il GPS rimane distinto in blu. Play avanza a 250 m di percorso al secondo; Pausa conserva il punto, Riparti torna alla partenza e avvia la riproduzione; all'arrivo si ferma. Spostare manualmente il cursore durante o prima della riproduzione usa il punto scelto. Lo zoom resta manuale.
- Verificato con Chrome headless in desktop 1440×900 e mobile 390×844 emulato, sia IT sia EN: viste, selezione di una salita, sincronizzazione immediata, frecce e fine da tastiera, Play/Pausa/ripresa/Riparti, arresto all'arrivo e GPS separato. Per la salita a circa 1,1 km, confronto indipendente con la geometria GPX: scarto del cursore inferiore a 1 m (arrotondamento della distanza letta); controllato il tratto evidenziato. Test touch di tap e trascinamento tramite emulazione; coordinate e permesso GPS simulati. Prova sintetica con punti duplicati, quote mancanti ed estremi: valori disponibili o indisponibili come previsto. Nessun errore JavaScript nella prova principale. Non provati dispositivi fisici, altri browser o lettori di schermo.
- Anteprima: http://127.0.0.1:8000/percorsi.html?lang=it (in inglese `?lang=en`); avvio dalla radice con `python -m http.server 8000 --bind 127.0.0.1`. Le tessere e Leaflet richiedono rete. GitHub Pages risulta ancora configurato su `main` e `/`; nessun merge o pubblicazione autorizzati con questo incarico.

## GC-20261121-10 — Prima foto lungo Parterre Torreone

- Associazione nel catalogo `percorsi-data.js` a **6.340 m** cumulativi dalla partenza: distanza stimata dallo screenshot indicato da Giovanni, non da EXIF. L'indicatore della foto è interpolato sulla geometria del GPX, indipendentemente dal GPS del visitatore; la sua selezione porta al punto e mostra la foto. È stata riutilizzata la copia WebP esistente `images/raccolta-2026/album/colline-boschi-img_1982.webp` (1440 × 1080, 480.818 byte), derivata da `materiali/foto-originali/IMG_1982.JPG`; originale preservato e non tracciato.
- La foto appare sotto la mappa quando Play attraversa il punto, anche se un fotogramma lo supera; rimane visibile in pausa, si azzera con Riparti ed è accessibile selezionando il punto sul grafico (tolleranza ±50 m). Se si seleziona manualmente un'altra posizione, la foto viene nascosta. Dati e didascalie IT/EN sono associati al percorso per aggiungere altre foto; dissolvenza disattivata con movimento ridotto.
- Verificati in Chrome headless su desktop 1440 × 900 e mobile 390 × 844 emulato, in IT/EN: selezione su grafico, indicatore, cambio lingua, normale passaggio in Play, permanenza in pausa, Riparti, caricamento dell'immagine, salto simulato di 5 secondi tra fotogrammi e movimento ridotto. Il touch mobile e il salto del tempo sono simulati; non verificati dispositivi fisici o altri browser. Nessun errore JavaScript rilevato nelle prove principali.
- Anteprima locale su dev: http://127.0.0.1:8000/percorsi.html?lang=it ; aprire la scheda e selezionare l'indicatore foto sulla mappa, oppure il grafico presso 6,34 km. Avvio dalla radice: `python -m http.server 8000 --bind 127.0.0.1`. Pubblicazione da autorizzare separatamente.


## GC-20261122-11 ? Escursione 02, anteprima su dev

- Aggiunta al catalogo come **02 ? Escursione 02**, categoria `walk`, titolo provvisorio. La distanza, calcolata sommando le distanze tra punti consecutivi all'interno di ciascun segmento, ? **7.842 m**, mostrata come circa 7,8 km. Il GPX ha un segmento e 7.339 punti.
- Partenza: **43,27858172 N, 12,01537672 E**, quota registrata 459,2 m; arrivo: **43,27863025 N, 12,01536365 E**, quota registrata 463,6 m. Sono punti distinti ma molto vicini (circa 5,5 m): nell'inquadratura iniziale i marcatori si sovrappongono; verificare gli estremi in anteprima prima della pubblicazione.
- La copia `percorsi/02-escursione-02.gpx` conserva ordine, segmenti, coordinate e quote dell'originale locale `gpx/activity_25161095745.gpx`, senza orari, estensioni o sensori. Confrontati tutti i punti e la struttura dei segmenti; originale preservato e non aggiunto a Git. Mappa e download usano la stessa copia.
- Verificati in Chrome headless, desktop 1440?900 IT e mobile 390?844 EN emulato: scheda e tracciato, profilo, vista pendenza, selezione estremi da tastiera, Play/Pausa, collegamento GPX e assenza di errori JavaScript. Il grafico misura 7.842 m. Non verificati dispositivi fisici n? altri browser.
- Anteprima locale: http://127.0.0.1:8000/percorsi.html?lang=it, aprire **02 ? Escursione 02**; se necessario avviare dalla radice `python -m http.server 8000 --bind 127.0.0.1`. Leaflet e tessere richiedono rete. Immagine dell'anteprima desktop: `C:/Users/giova/escursione-02-it.png`.
- GitHub Pages verificato via API: sorgente `main`, cartella `/`; la consegna su `dev` non pubblica il sito. Revisione dell'itinerario e pubblicazione restano in attesa di approvazione.


### GC-20261122-11 ? Foto IMG_2058 sul percorso 02

- Originale locale `gpx/foto/IMG_2058.JPG` conservato e non tracciato. EXIF: coordinate 43,26737222 N, 12,02382500 E, errore orizzontale indicato circa 3,0 m; scatto 22 novembre 2026 alle 10:40:40, fuso +01:00, coerente con 09:40:40 UTC del GPS.
- Proiezione sul segmento pi? vicino del GPX originale: **2.791 m** cumulativi dalla partenza, scarto **1,9 m**, posizione stimata 43,26736176 N, 12,02384285 E. Il passaggio corrisponde alle 09:40:45?46 UTC, circa sei secondi dopo lo scatto; al secondo dello scatto il punto registrato dista circa 3,1 m dalla foto. Il riscontro temporale e spaziale identifica lo stesso passaggio; le posizioni GPS restano stime.
- Copia `images/percorsi/02-img-2058.webp`, 1440?1080, 556.424 byte, senza EXIF, XMP o profilo ICC. La scheda riusa indicatore, selezione dal grafico e apparizione durante Play del percorso 01; foto associata a 2.791 m, senza modificare il GPX.
- Chrome headless su desktop 1440?900 IT e mobile 390?844 EN emulato: verificati indicatore, caricamento immagine, selezione da tastiera, comparsa in Play, Pausa e azzeramento con Riparti; nessun errore JavaScript osservato. Dispositivi fisici e altri browser non verificati.
- Anteprima: http://127.0.0.1:8000/percorsi.html?lang=it ; aprire **02 ? Escursione 02** e selezionare l'indicatore foto o il grafico a circa 2,79 km. Se necessario avviare dalla radice `python -m http.server 8000 --bind 127.0.0.1`. Screenshot desktop `C:/Users/giova/escursione-02-foto-it.png`. La pubblicazione rimane in attesa di autorizzazione.


### GC-20261122-11 ? Altre foto sul percorso 02

Aggiunte IMG_2059, IMG_2061, IMG_2062, IMG_2063, IMG_2065, IMG_2066 e IMG_2067; IMG_2058 era gi? presente e non ? duplicata. Gli originali in `gpx/foto/` restano locali. Le copie WebP in `images/percorsi/` sono orientate correttamente, fino a 1440 px, senza EXIF, XMP o ICC.

Confronto fra GPS delle foto e proiezione sui segmenti del GPX originale; distanze cumulative e scarti approssimati:

| Foto | Distanza | Scarto dalla traccia |
| --- | ---: | ---: |
| IMG_2058 | 2.791 m | 1,9 m |
| IMG_2059 | 2.962 m | 2,4 m |
| IMG_2061 | 3.443 m | 1,0 m |
| IMG_2062 | 3.490 m | 2,8 m |
| IMG_2063 | 3.488 m | 1,1 m |
| IMG_2065 | 3.658 m | 1,9 m |
| IMG_2066 | 3.728 m | 5,1 m |
| IMG_2067 | 3.776 m | 4,7 m |

Tutti gli orari di scatto con fuso +01:00 sono coerenti con il GPX del 22 novembre 2026: al secondo dello scatto il punto registrato ? entro circa 1?7 m dalle coordinate della foto. Per IMG_2059 l'errore orizzontale dichiarato dalla fotocamera ? circa 65 m: posizione indicativa, non precisione garantita dalla piccola distanza dalla traccia. Le altre foto riportano errori orizzontali di circa 3?9,5 m. I tempi del punto geometricamente pi? vicino differiscono dagli scatti da circa 2 a 22 secondi.

Scatti entro 50 m dal primo di un gruppo condividono un indicatore e sono mostrati insieme anche in Play, per evitare immagini sostituite troppo rapidamente: 2061/2063/2062 e 2066/2067. Ogni didascalia mantiene la propria distanza; selezionando il grafico si sceglie lo scatto pi? vicino. Il comportamento della foto del percorso 01 rimane verificato.

Verificati in Chrome headless desktop IT e mobile EN emulato: tutti gli otto file caricati tramite indicatori, gruppi, grafico da tastiera, Play, Pausa e Riparti; verificato il passaggio in Play di ciascun gruppo e la foto della scheda 01. Nessun errore JavaScript osservato. Dispositivi fisici e altri browser non verificati. Anteprima: http://127.0.0.1:8000/percorsi.html?lang=it ; aprire Escursione 02 e selezionare gli indicatori o il grafico. Pubblicazione in attesa di approvazione.


### GC-20261122-11 ? Nome e selezione foto aggiornati

Su richiesta di Giovanni, la passeggiata 02 si chiama **Le corchie**, anche nel nome interno del GPX scaricabile; il percorso del file rimane stabile e la geometria ? identica all'originale. IMG_2062 ? stata rimossa dalla scheda e la copia WebP dal sito; l'originale locale ? conservato. Restano sette foto, con IMG_2061 e IMG_2063 nello stesso gruppo.

Verificati in Chrome headless desktop IT e mobile EN emulato: nome nel catalogo e nella scheda, mappa, profilo e caricamento delle sette foto senza IMG_2062; geometria GPX confrontata con tutti i punti dell'originale. Nessun errore JavaScript osservato. Anteprima: http://127.0.0.1:8000/percorsi.html?lang=it ; pubblicazione in attesa di approvazione.


### GC-20261122-11 ? Accesso alle foto vicine

Segnalazione di Giovanni: IMG_2063 e IMG_2067 non erano facilmente visibili. Erano incluse dopo un'altra foto nello stesso gruppo, in una colonna sotto la mappa; durante la riproduzione il gruppo poteva inoltre essere sostituito rapidamente. I gruppi ora mostrano una foto per volta con contatore e pulsanti Foto precedente / Foto successiva sopra l'immagine. Selezionare l'indicatore del gruppo e usare i pulsanti; le didascalie mantengono le distanze individuali. Il Play continua e la foto resta in pausa.

Verificati in Chrome headless desktop IT e mobile EN emulato: entrambi i gruppi, apertura, passaggio a IMG_2063 e IMG_2067 e ritorno, caricamento dei file, selezione dal grafico e ripristino; nessun errore JavaScript osservato. Originali e modifiche locali di Giovanni a nomi e didascalie preservati. Anteprima: http://127.0.0.1:8000/percorsi.html?lang=it ; pubblicazione ancora in attesa di approvazione.


### GC-20261122-11 ? Foto sempre raggiungibili

Dopo una seconda segnalazione di Giovanni, aggiunta sotto la mappa una galleria con tutte le foto del percorso, sempre visibili e selezionabili senza attendere il Play: ogni miniatura apre la propria foto e sposta il cursore al relativo punto. Questo rende accessibili IMG_2063 e IMG_2067 anche quando i passaggi ravvicinati sono superati rapidamente. Restano disponibili Play, marcatori e comandi dei gruppi. Le miniature WebP sono copie ridotte senza metadati, complessivamente circa 72 kB.

Verificati in Chrome headless desktop IT e mobile EN emulato apertura diretta e caricamento di entrambe le immagini, sette miniature, cambio percorso e rimozione della galleria precedente; controllata anche visivamente l'immagine IMG_2067 nell'anteprima. Nessun errore JavaScript osservato. Screenshot: `C:/Users/giova/le-corchie-gallery-it.png`; anteprima http://127.0.0.1:8000/percorsi.html?lang=it. Le modifiche locali di Giovanni a `percorsi-data.js` restano nel suo file e non sono incluse in questo commit. Pubblicazione in attesa di approvazione.


### Anteprima ? Mappa e profilo affiancati

Su richiesta di Giovanni, nelle schede percorso mappa e profilo sono affiancati su schermi ampi; su schermi fino a 800 px sono disposti in verticale. Play, Pausa e Riparti sono immediatamente sotto entrambi; seguono galleria e foto selezionata. La struttura ? condivisa dai due percorsi.

Verificati in Chrome headless desktop 1440?900 IT e mobile 390?844 EN emulato: disposizione, Play/Pausa/Riparti, pendenza, cursore da tastiera, apertura foto e cambio tra percorsi; nessun errore JavaScript rilevato. Dispositivi fisici e altri browser non verificati. Anteprima: http://127.0.0.1:8000/percorsi.html?lang=it ; screenshot desktop `C:/Users/giova/le-corchie-layout-it.png`. La modifica ? proposta su dev per revisione e non ? pubblicata.


### Anteprima ? Colore della traccia in base alla velocit?

Su richiesta di Giovanni, la traccia di entrambe le passeggiate ? colorata dal blu (pi? lento) al rosso (pi? veloce), con legenda in km/h e scala relativa a ciascun percorso. Le velocit? sono stime da distanza e orari dei GPX originali, smussate su una finestra di circa 50 m; le soste possono influenzarle. Gli estremi della scala corrispondono approssimativamente al 10? e 90? percentile ponderati per distanza, con colori saturi oltre tali valori: 01 da 4,0 a 5,8 km/h, 02 da 2,7 a 5,2 km/h. Non usare i colori per confronti diretti tra percorsi senza leggere le rispettive legende.

I file `percorsi/01-velocita.json` e `percorsi/02-velocita.json` contengono intervalli di colore riferiti agli indici della geometria e valori di scala, senza orari o coordinate; rendono pubblicabili informazioni derivate sulla velocit?. Gli originali restano locali e i GPX scaricabili restano privi di orari e sensori. Su 01, lacune superiori a 30 secondi e stime oltre 20 km/h sono marcate come non disponibili e rese in grigio; se il file dei colori manca o non ? valido la traccia resta utilizzabile in grigio.

Verificati con Chrome headless desktop IT e mobile EN emulato: entrambe le schede, colori e legenda, Play/Pausa, foto, cambio percorso e ripiego con file velocit? bloccato; profilo e download disponibili e nessun errore JavaScript osservato. Non verificati dispositivi fisici o altri browser. Anteprima http://127.0.0.1:8000/percorsi.html?lang=it; screenshot `C:/Users/giova/le-corchie-velocita-it.png`. Modifica su dev per revisione; non pubblicata.

## Rilascio pubblico dei percorsi — 22 novembre 2026

Il 22 novembre 2026 GitHub Pages ha completato con successo il deploy del commit `89ae00d9218b2a0d589501ffd79364d1eb072153`. Il rilascio comprende il catalogo, i profili interattivi e il Play, la foto del percorso 01, il percorso **02 · Le Corchie** (7,8 km, sette foto), la galleria di miniature, mappa e profilo affiancati su desktop e la colorazione per velocità di entrambe le passeggiate. Verifiche funzionali precedenti al rilascio: Chrome desktop e mobile emulato. Il deploy è confermato da GitHub Actions; la prova diretta del dominio pubblico e dei dispositivi fisici resta da fare. [Esito del deploy](https://github.com/giovanniguasti/casaisabellabike/actions/runs/45026058610)

Questo esito aggiorna gli stati di anteprima riportati nelle sezioni precedenti. Il prossimo incarico resta M4.1.

## Via Romana — 26 novembre 2026

Aggiunta la passeggiata 04 · Via Romana dal file locale `gpx/activity_25207579090.gpx`: un segmento, 9.691 punti e circa 10,4 km. La copia `percorsi/04-via-romana.gpx` conserva coordinate e quote, senza orari, estensioni o sensori. La mappa e il download condividono questa copia; l'originale resta locale.

La colorazione usa `percorsi/04-velocita.json`, con velocità stimate su una finestra di circa 50 m e scala relativa da 3,2 a 6,3 km/h, basata sui percentili 10 e 90 ponderati per distanza. Intervalli con tempi mancanti, non crescenti, lacune oltre 30 secondi o stime oltre 20 km/h sono indicati come non disponibili. Verificati il confronto di tutti i punti e delle quote con l'originale e la copertura degli intervalli di velocità. Le stime possono risentire delle soste e del GPS. La modifica è locale; non è stata pubblicata né verificata in browser.
