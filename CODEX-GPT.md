# Casa Isabella Bike — Resoconto di Codex

Data: 15 novembre 2026. Riferimento condiviso: `dev`. Gli stati sotto riportati descrivono lavoro e verifiche di Codex; non attestano l'approvazione finale di Giovanni. Gli incarichi sono in `GPT-CODEX.md`, il piano in `MILESTONES.md`.

Aggiornamento più recente: **GC-20261115-07 — Pubblicazione per prova d'uso**, resoconto in fondo al documento. Candidata `25a85213df4db69636d860c2a6ce960687ceef93`; autorizzazione esplicita ricevuta, controlli locali superati, pubblicazione da eseguire. Il contenuto applicativo rimane quello di `3f7f0cbcbec4fafdd50e5d5990b934f12ae14826`.

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

Autorizzazione esplicita di Giovanni del 15 novembre 2026, registrata in GPT-CODEX.md e limitata alla candidata **`25a85213df4db69636d860c2a6ce960687ceef93`**. La prova pubblica non equivale all'approvazione definitiva dei contenuti. Stato di preparazione: controlli preliminari superati; deploy pubblico ancora da eseguire.

### Preparazione e verifiche prima del rilascio

- Stato locale iniziale: dev a 02cae72, nessuna modifica ai file tracciati; solo ZIP e certificato locali non tracciati. Fetch e fast-forward a 25a8521, preservando i nuovi piani M3.1/M3.2/M3.3. Questi aggiornamenti modificano soltanto MILESTONES.md e non introducono funzionalità future.
- Versione precedente di main: **`e1363d6c3cd40cd0519546efc4d6ef4907bd03b9`**. Tag annotato di ripristino creato: **`pre-usability-test-20261115-e1363d6`**. Il confronto conferma CNAME invariato.
- Controlli ripetuti sulla candidata con Chrome headless: cinque pagine in IT/EN a 1440×1000, 390×844, 320×568 e 844×390, 40 combinazioni; 50 combinazioni di navigazione, titoli e testi tradotti, lingua nei link e apertura diretta, tastiera e focus. Homepage breve con tre inviti; Contatti con mailto esatto `info@casaisabellabike.it` e nessun modulo.
- Rullino riprovato in 12 combinazioni di formato/lingua: tutte le 40 immagini e le 10 aperture dalle stampe, frecce e Home/End, miniature, chiusura con pulsante/Escape, focus contenuto e ripristinato, scroll bloccato. Swipe tramite eventi touch di Chrome, lingua nel dialogo e caricamento progressivo; nessun errore JavaScript o errore di rete inatteso. Test di errore volontario e Riprova superato.
- Controllati tutti i 102 file della candidata: nessun percorso materiali/, originale della raccolta, archivio ZIP, PDF, certificato, file .env o chiave privata. Ricerca di pattern di credenziali comuni senza rilevamenti; WXEF0435.JPG e JGUG3431.JPG assenti dall'elenco fotografico e dalle copie usate. Snapshot SHA-256 dei materiali locali e dei file precedenti prima del rilascio.
- API GitHub in sola lettura: Pages legacy da main `/`, dominio casaisabellabike.it, HTTPS attivo; main non protetto, nessun ruleset attivo. Nessuna impostazione modificata. Il sito pubblico precedente risponde HTTP 200 con la homepage monolitica, prima del deploy.

File modificati da questo incarico: soltanto GPT-CODEX.md, MILESTONES.md e CODEX-GPT.md per autorizzazione, stato e resoconto. Nessuna nuova funzionalità, conversione di immagini o modifica a dominio, CNAME o hosting.

### Pubblicazione, verifica pubblica e riallineamento

Da eseguire dopo questo commit documentale: salvare dev e tag sul remoto, integrare dev in main senza riscrivere la cronologia, attendere Pages e verificare pubblicamente la candidata. L'esito effettivo e i commit saranno registrati dopo le verifiche; nessun successo del rilascio è ancora attestato da questa fase di preparazione.

### Limiti e valutazione ancora aperta

Nessun problema bloccante rilevato nei controlli preliminari. Dispositivi fisici, Safari, Firefox e lettori di schermo non verificati; la prova touch è un'emulazione del browser. I contenuti introduttivi Ospitalità/Bicicletta rimangono quelli confermati, senza itinerari, disponibilità o servizi inventati. Valutazione dell'usabilità di Giovanni e approvazione definitiva di testi, fotografie e impaginazione ancora da svolgere. Le milestone future restano nel piano, non implementate.
