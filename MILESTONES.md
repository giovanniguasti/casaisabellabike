# Casa Isabella Bike — Milestones

Aggiornato: 15 novembre 2026.

## Regole e stati

La progettazione viene discussa con Giovanni; l'implementazione è affidata a Codex. Nessuna modifica al codice senza incarico esplicito. Il ramo GitHub `dev` è il riferimento condiviso tra Giovanni, ChatGPT e Codex locale: fetch/pull e push su `dev` sono autorizzati nell'ambito degli incarichi ricevuti, previa verifica che il push non pubblichi il sito. Merge su `main` e pubblicazioni richiedono autorizzazione esplicita di Giovanni. La creazione di questo piano non autorizza tutte le attività elencate.

Gli incarichi e le proposte sono registrati in `GPT-CODEX.md`; osservazioni, risultati e commit sono in `CODEX-GPT.md`. Una proposta non autorizza l'implementazione. `MANIFEST.md` non è presente: resta da discutere e creare con Giovanni, senza dedurne nuove decisioni.

- APPROVATO: obiettivo o vincolo confermato da Giovanni.
- PROPOSTA: dettaglio da discutere; non costituisce un incarico.
- DA VERIFICARE: informazione o risultato ancora da controllare.

L'approvazione dell'obiettivo o della struttura non equivale all'approvazione finale di testi, fotografie e impaginazione. Implementazione, verifica tecnica, approvazione finale di Giovanni e pubblicazione sono passaggi distinti. La struttura delle pagine può essere completata mentre i contenuti di ospitalità e bicicletta restano da definire in M3.

## Decisioni approvate

- Il sito unisce ospitalità, bicicletta e vita in campagna a Cortona.
- Gli ospiti partecipano alla raccolta delle olive. Lavoro, fatica, amicizia e convivialità aiutano a comprendere e gustare l'olio.
- Valorizzare le fotografie della raccolta e dei momenti conviviali 2026, inclusa la pizza preparata da Giovanni per 15 persone.
- Creare una pagina dedicata alla raccolta: implementazione verificata e pubblicata per prova d'uso il 15 novembre 2026 con autorizzazione GC-20261115-07. Approvazione definitiva dei contenuti ancora pendente.
- Homepage breve con accesso a pagine dedicate: Ospitalità, Bicicletta e territorio, La raccolta delle olive, Contatti. Decisione successiva che sostituisce la lunga homepage a sezioni.
- Contatti: inizialmente email e indicazioni su periodo, numero di persone ed esperienza desiderata; modulo da valutare separatamente.
- Incrementare la visibilità del sito tramite SEO.
- Conservare gli originali in materiali/foto-originali/, esclusi da Git; tenere tracciate le copie pubblicabili in images/.

## M0 — Visione e documentazione

Stato: IN CORSO. Creazione del piano approvata; formulazioni della visione ancora da consolidare.

- [x] Analisi iniziale del repository e del sito.
- [x] Prima versione di MILESTONES.md.
- [ ] Discutere e creare MANIFEST.md, distinguendo decisioni e proposte.
- [ ] Confermare offerta di ospitalità, pubblico e modalità di partecipazione alle attività stagionali.

Completamento: visione e vincoli esplicitamente approvati; nessun servizio inventato.

## M1 — Raccolta delle olive 2026

Stato: IMPLEMENTAZIONE VERIFICATA E PUBBLICATA PER PROVA D'USO (GC-20261115-07); approvazione definitiva di Giovanni ancora pendente.

Intervento locale e vincoli:
- Il racconto è in raccolta-olive.html, raggiungibile dalla homepage e dal menu. La homepage presenta soltanto un invito alla pagina; non ospita la galleria o il racconto completo.
- Testi IT/EN e racconto fotografico di lavoro, persone, pause e pizza, ora presentato con tavolo dei ricordi e rullino (GC-20261115-06, M1.2).
- Selezione locale ampliata per la revisione: 40 scatti distinti, elenco completo e motivi dei 9 scarti in FOTO-RACCOLTA.md. Le cinque fotografie precedenti restano incluse. WXEF0435.JPG esclusa su indicazione di Giovanni; originale preservato e nessuna copia pubblicabile utilizzata.
- JGUG3431.JPG è un duplicato esatto di FXQP3615.JPG: non usare entrambi.
- Originali preservati; copie WebP in images/raccolta-2026/, orientamento corretto e metadati rimossi.
- Dimensioni adattate al layout, senza ingrandire immagini piccole. Il precedente riferimento indicativo di circa 1 MB riguardava la prima selezione di cinque foto: non si applica all'album ampliato. Pesi su disco e caricamento iniziale sono distinti in M1.2.
- Layout mobile/desktop, testi alternativi, dimensioni dichiarate e caricamento differito; nessun carosello automatico.

Criteri di completamento:
- [x] Anteprima locale e controllo IT/EN, menu, immagini e console.
- [x] Riepilogo dei pesi e delle modifiche: le cinque WebP precedenti, 1.188.286 byte, sono riutilizzate senza modifiche; selezione ampliata e prestazioni documentate in M1.2 e FOTO-RACCOLTA.md.
- [ ] Selezione, testi e impaginazione approvati da Giovanni; conferma delle foto pubblicabili.
- [x] Pubblicazione per prova d'uso autorizzata separatamente con GC-20261115-07 ed eseguita con controllo pubblico successivo; non equivale all'approvazione definitiva.

L'ampliamento del racconto fotografico è autorizzato da GC-20261115-06. Premi e certificazione restano esclusi: interventi separati da concordare in M2.

## M1.1 — Homepage breve e pagine dedicate

Stato: STRUTTURA IMPLEMENTATA E VERIFICATA; approvazione della struttura confermata da Giovanni, revisione finale di testi, fotografie e impaginazione pendente. Il completamento dei contenuti di ospitalità e bicicletta resta in M3. M2 non avviata.

- [x] Homepage con fotografia principale, breve identità, tre inviti visivi alle esperienze e pulsante Contattaci.
- [x] Pagine dedicate: Ospitalità, Bicicletta e territorio, La raccolta delle olive, Contatti.
- [x] Spostare il racconto della raccolta conservando immagini ottimizzate e traduzioni già realizzate.
- [x] Riutilizzare solo informazioni confermate nelle altre pagine; non inventare servizi, prezzi, itinerari o disponibilità.
- [x] Contatti con email visibile e suggerimento di indicare periodo, numero di persone ed esperienza; nessun modulo/backend.
- [x] Navigazione comune, ritorno alla home e lingua mantenuta tra pagine; sito statico.
- [x] Verificare apertura diretta delle pagine, link, lingue, layout mobile e desktop e console.
- [x] Presentare anteprima per approvazione, senza pubblicare.
- [x] Struttura multipagina approvata da Giovanni come direzione del progetto.
- [ ] Approvazione finale di Giovanni di testi, fotografie pubblicabili e impaginazione.

Verifiche locali del 15 novembre 2026: Chrome headless, cinque pagine in IT/EN a 1440×1000, 390×844, 320×568 e 844×390 (40 combinazioni); 50 combinazioni di navigazione con lingua conservata; tastiera con Tab, focus visibile, salto al contenuto e Invio su lingua e collegamenti. Titoli e descrizioni distinti per pagina e lingua, immagini caricate senza deformazioni, nessuna sovrapposizione del menu, nessun errore JavaScript; fotografie, CSS, JavaScript e pagine caricati correttamente. Screenshot desktop e mobile generati per tutte le pagine. Dispositivi fisici e altri browser non verificati.

Nella riorganizzazione multipagina è stata verificata tramite SHA-256 la preservazione di tutte le immagini esistenti, degli originali, di .gitignore e di CNAME. Nessun originale tracciato. Nel successivo riallineamento autorizzato su `dev` il piano locale più aggiornato è stato confrontato con chore/ignore-original-photos e preservato; .gitignore integra la stessa esclusione e il commento del ramo remoto. CNAME e impostazioni di hosting restano invariati. Commit e stato della sincronizzazione sono documentati in CODEX-GPT.md.

La collocazione futura di olio, premi e biologico nella pagina raccolta resta una proposta, non autorizza l'inserimento in questo intervento.

## M1.2 — Tavolo dei ricordi e rullino fotografico

Incarico di implementazione: GC-20261115-06. Stato: IMPLEMENTATO, VERIFICATO E PUBBLICATO PER PROVA D'USO con GC-20261115-07; selezione definitiva e revisione finale di Giovanni ancora pendenti.

- [x] Sincronizzazione sicura di dev: fast-forward da c6299a8 a 989dd08, preservando i materiali locali non tracciati e leggendo l'incarico aggiornato in GPT-CODEX.md.
- [x] Esaminati tutti i 49 originali: selezionati 40 scatti distinti; esclusi WXEF0435.JPG, il duplicato esatto JGUG3431.JPG e altri 7 scatti per pertinenza o inquadrature simili. Originali preservati, scarti documentati senza cancellazioni.
- [x] Dieci stampe rappresentative con formati variati e leggere inclinazioni, senza sovrapposizioni; composizione semplice a due colonne su mobile. Invito esplicito al rullino e apertura sulla fotografia scelta.
- [x] Rullino modale manuale: immagine intera, frecce, miniature selezionabili, contatore, nome originale, alt e didascalie IT/EN; cambio lingua anche nel dialogo. Chiusura visibile ed Escape, focus contenuto e ripristinato, blocco dello scorrimento sottostante. Riduzione delle animazioni secondo la preferenza del dispositivo.
- [x] Dati fotografici centrali in raccolta-foto.js, usati da tavolo e rullino; ordine, scelta delle stampe, file ottimizzati e testi modificabili nello stesso elenco. Elenco per la revisione in FOTO-RACCOLTA.md.
- [x] Miniature separate dalle immagini grandi, orientamento applicato ai pixel e metadati rimossi. Nessuna immagine grande richiesta prima di aprire il rullino; foto corrente e al massimo due vicine all'apertura. Nessun framework o servizio esterno.
- [x] Verifiche in Chrome headless: 12 combinazioni di formato e lingua, tutte le 40 foto caricate, tutte le 10 stampe aperte sullo scatto corretto, tastiera, focus, miniature, limiti primo/ultimo, cambio lingua e assenza di errori JavaScript. Swipe e gesti brevi/verticali verificati con eventi touch del browser; nessuna prova su telefono fisico.
- [x] Verificata la ripresa dopo un caricamento bloccato intenzionalmente; cambio rapido di foto con rete rallentata e lingua mantenuta dal dialogo alla pagina Contatti. Verifiche di regressione delle altre quattro pagine in IT/EN.
- [x] Anteprima e screenshot desktop/mobile pronti per la revisione. Originali, cinque WebP preesistenti, homepage, pagine diverse dalla raccolta, stili comuni e CNAME preservati tramite SHA-256; nella logica comune è aggiunto soltanto l'evento di cambio lingua necessario al rullino.
- [ ] Selezione finale delle fotografie pubblicabili, testi e impaginazione approvati da Giovanni.
- [x] Autorizzazione separata GC-20261115-07 ricevuta per la candidata corrente e pubblicazione per prova d'uso verificata; le versioni future richiedono nuova autorizzazione.

Pesi delle copie utilizzate: 40 immagini grandi (35 nuove e 5 riutilizzate), 11.839.408 byte; 40 miniature, 1.347.262 byte; totale su disco 13.186.670 byte. Le sole miniature del tavolo pesano 292.546 byte.

Caricamento iniziale misurato a cache vuota, viewport 1440×1000: 367.440 byte di contenuti per HTML, CSS, JavaScript e miniature, zero foto grandi. Prima apertura su una foto centrale: soltanto corrente e due vicine, 725.186 byte complessivi per le tre immagini grandi; nessun caricamento integrale dell'album. I valori iniziali variano con viewport, cache e porzione visibile. Dettagli e commit in CODEX-GPT.md.

Limiti: test touch tramite Chrome DevTools, non su hardware reale; Safari, Firefox e lettori di schermo non verificati. L'incarico non ridisegna homepage o altre pagine e non completa la proposta generale GC-20261115-05.

## M2 — Olio, premi e coltivazione biologica

Stato: CONTENUTI RACCOLTI; struttura e implementazione PROPOSTE.

Informazioni fornite da Giovanni:
- Eleiva Cortonensis 2023, zona 6 Montagna cortonese: terzo premio olio fruttato.
- Eleiva Cortonensis 2024, zona 6 Montagna cortonese: primo premio olio fruttato.
- Eleiva Cortonensis 2024, finale tra tutte le zone: primo premio olio fruttato.

Documento esaminato: certificato IT-BIO-014.380-0005590.2026.002, intestato a Isabella Muzzarelli Verzoni, organismo QCertificazioni IT-BIO-014; validità riportata 11/11/2026–10/11/2029. Repertorio: olive da olio biologiche; sono presenti anche terreni in conversione. Non estendere automaticamente questa attestazione all'olio trasformato.

- [ ] Acquisire attestati/foto dei premi e verificare denominazioni.
- [ ] Completare eventuali foto di frantoio, olio nuovo e assaggio.
- [ ] Concordare testo e modalità di presentazione della certificazione, compresa l'eventuale pubblicazione del documento.
- [ ] Verificare documentazione del prodotto trasformato prima di dichiarare olio certificato biologico.

Completamento: contenuti documentati, approvati e distinti per annata; nessun premio attribuito al raccolto 2026.

## M3 — Casa, ospitalità e bicicletta

Stato: DIREZIONE E STRUTTURA DELLE PAGINE APPROVATE; contenuti di dettaglio incompleti e da concordare. Le pagine esistono con le sole informazioni confermate: questo non completa M3.

- [ ] Definire informazioni reali sulla casa e sui soggiorni.
- [ ] Scegliere fotografie e modalità di contatto.
- [ ] Decidere quali itinerari descrivere e con quali dati verificati.
- [ ] Valutare successivamente mappe e GPX, senza considerarli già approvati.

Completamento: il visitatore capisce cosa è disponibile, dove si trova e come chiedere informazioni.

## M3.1 — Album fotografici dell'ospitalità

Stato: OBIETTIVO APPROVATO da Giovanni il 15 novembre 2026; materiali e dettagli da definire prima di un incarico di implementazione.

Riutilizzare nella pagina Ospitalità il tavolo dei ricordi abbinato al rullino, già funzionante per la raccolta, per presentare camere e appartamenti. Il visitatore deve riconoscere chiaramente quali ambienti appartengono a ciascun alloggio.

- [ ] Raccogliere le fotografie originali e concordare nomi e raggruppamenti per appartamento; eventuali camere e spazi comuni identificati senza ambiguità.
- [ ] Confermare brevi descrizioni e didascalie IT/EN, senza dedurre capienza, dotazioni o servizi dalle sole foto.
- [ ] Definire la selezione e le immagini pubblicabili con Giovanni.
- [ ] Preparare un gruppo fotografico distinto per ogni appartamento, con tavolo e rullino dedicati; chiarire prima il raggruppamento di eventuali spazi comuni.
- [ ] Riutilizzare il componente esistente, mantenendo navigazione manuale, miniature, immagini intere, accessibilità e caricamento progressivo.
- [ ] Preservare gli originali esclusi da Git e generare copie ottimizzate.
- [ ] Verificare desktop/mobile, lingue e corretta associazione tra alloggio, immagini e testi; controllare che la raccolta continui a funzionare.
- [ ] Presentare anteprima e ottenere approvazione finale; pubblicazione con autorizzazione separata.

Organizzazione locale proposta: materiali/foto-originali/ospitalita/ con sottocartelle per appartamento. Nomi e struttura effettivi da confermare con i materiali. Questa milestone registra il lavoro futuro e non autorizza ad avviare la codifica senza il successivo incarico.

## M3.2 — Video per Bicicletta e territorio

Stato: OBIETTIVO APPROVATO da Giovanni il 15 novembre 2026; selezione, modalità di presentazione e parametri tecnici da concordare prima dell'implementazione.

Valorizzare nella pagina Bicicletta e territorio video pertinenti alle uscite e al paesaggio, preparando copie adatte al web senza modificare gli originali.

- [ ] Raccogliere gli originali localmente; cartella proposta materiali/video-originali/, da escludere da Git prima di aggiungere file.
- [ ] Far analizzare a Codex durata, dimensioni, risoluzione, orientamento, codec e presenza di audio dei file, verificando la disponibilità di FFmpeg/ffprobe.
- [ ] Scegliere con Giovanni i filmati, gli eventuali estratti e le copertine; preservare gli originali.
- [ ] Concordare come presentarli nella pagina Bicicletta: video autonomi o eventuale integrazione con foto/rullino restano alternative da discutere.
- [ ] Definire risoluzione, compressione, formato e peso in base ai materiali; MP4 compatibile e 720p/1080p sono opzioni da valutare, non requisiti fissi.
- [ ] Prevedere copertine leggere, controlli accessibili e riproduzione volontaria, evitando autoplay e download dei video pesanti all'apertura della pagina.
- [ ] Concordare gestione dell'audio e sottotitoli o alternative testuali quando necessari; testi IT/EN.
- [ ] Verificare qualità visiva, riproduzione e caricamento su desktop/mobile; documentare pesi originali/ottimizzati e limiti dei test.
- [ ] Valutare collocazione dei file e limiti dell'hosting prima di aggiungere video al repository; nessun servizio esterno o cambio hosting senza decisione condivisa.
- [ ] Presentare anteprima per approvazione; pubblicazione con autorizzazione separata.

Questa milestone pianifica il lavoro futuro; non autorizza ancora conversioni, modifiche applicative o pubblicazione. Il successivo incarico sarà definito dopo aver raccolto e analizzato i materiali.

## M3.3 — Salvaguardia del territorio e luoghi incantati

Stato: OBIETTIVO E TEMI APPROVATI da Giovanni il 15 novembre 2026; materiali, struttura e presentazione da concordare prima dell'implementazione.

Raccontare il territorio attraverso i suoi luoghi e il lavoro necessario a prendersene cura, collegando scoperta, memoria del paesaggio e cura degli uliveti.

Ambiti richiesti:
- **Percorsi:** itinerari per scoprire il territorio; coordinare i contenuti con M3 e Bicicletta e territorio, evitando schede duplicate.
- **Luoghi incantati:** laghetto, alberi secolari, ruscelli, ponti, case sparse, uliveti, castagni, corbezzoli e arnie; elenco aperto ad altri luoghi indicati da Giovanni.
- **Il lavoro di cura:** fotografie e video che mostrino quanto lavoro occorre per liberare un ulivo dalla vegetazione del bosco e recuperarlo, con contesto e racconto delle fasi effettivamente documentate.

Attività:
- [ ] Raccogliere con Giovanni nomi, storie, fotografie e video dei luoghi e degli interventi.
- [ ] Definire la collocazione: pagina dedicata o articolazione della pagina territorio; mantenere la homepage breve.
- [ ] Concordare le sezioni percorsi, luoghi e lavoro di cura, e i collegamenti con bicicletta, raccolta e olio.
- [ ] Verificare descrizioni, accessibilità e informazioni dei percorsi prima di pubblicarle; non dedurre età degli alberi, valore storico degli edifici, proprietà o libero accesso dalle sole immagini.
- [ ] Concordare per ciascun luogo se indicare posizione precisa o solo una descrizione, rispettando il luogo e le attività presenti.
- [ ] Selezionare un racconto del recupero di un ulivo: eventuali prima/durante/dopo soltanto con materiali autentici e riferiti allo stesso intervento. Descrivere il lavoro concreto senza generalizzare la rimozione del bosco come beneficio ambientale.
- [ ] Preparare copie ottimizzate e copertine dei video secondo il metodo da definire in M3.2, preservando gli originali; riproduzione volontaria.
- [ ] Concordare testi e didascalie IT/EN e la presentazione fotografica/video più adatta.
- [ ] Verificare anteprima, navigazione e prestazioni su desktop/mobile.
- [ ] Ottenere approvazione dei contenuti e dell'impaginazione; pubblicazione con autorizzazione separata.

Questa milestone pianifica il lavoro futuro; non autorizza ancora modifiche applicative, nuovi servizi o pubblicazione.

## M4 — Visibilità e SEO

Stato: OBIETTIVO E PRIORITÀ APPROVATI. Implementazione da avviare con Codex su `dev`.

### M4.1 — Verifica iniziale e sitemap

- [ ] Verificare per ogni pagina pubblica link interni, indicizzabilità, titoli, descrizioni, gerarchia dei contenuti e URL canonico.
- [ ] Aggiungere `sitemap.xml` con gli URL canonici delle pagine pubbliche effettive. Verificare se serve `robots.txt` e, se presente, che non blocchi le pagine da indicizzare e indichi la sitemap.
- [ ] Documentare le verifiche e preparare le istruzioni per verificare il dominio in Google Search Console, inviare la sitemap dopo la pubblicazione e controllare Home, Ospitalità e Percorsi con Controllo URL. L'accesso e le modifiche a servizi esterni richiedono un incarico specifico.

### M4.2 — Schede dei percorsi riconoscibili e condivisibili

- [ ] Partire da 01 · Parterre Torreone: URL stabile, link diretto dal catalogo, titolo e descrizione specifici. Esempio di titolo: «Parterre–Torreone: passeggiata a Cortona, mappa e GPX».
- [ ] Descrivere partenza, arrivo, fondo e punti di interesse solo con informazioni confermate. Mantenere mappa, profilo, Play, fotografie e download GPX.
- [ ] Definire gli URL distinti per italiano e inglese e, quando entrambe le versioni saranno disponibili su URL propri, le relative annotazioni `hreflang`. Coordinare sitemap, canonical e metadati per la condivisione.

### M4.3 — Ospitalità e visibilità locale

- [ ] Completare Ospitalità in coordinamento con M3 e M3.1: foto per appartamento, capienza, dotazioni e posizione confermate, collegamento per chiedere disponibilità.
- [ ] Valutare Google Business Profile dopo aver verificato l'idoneità della struttura. Valutare dati strutturati sulle sole informazioni confermate.

### M4.4 — Misurazione

- [ ] Verificare in Search Console copertura, impressioni e clic sulle pagine principali. Distinguere ricerche sul nome Casa Isabella Bike da ricerche come «passeggiate a Cortona», «percorsi MTB Cortona» e quelle legate all'ospitalità.
- [ ] Valutare nel tempo visite pertinenti e richieste di informazioni, senza introdurre automaticamente altri servizi di analisi.

**Prossimo incarico per Codex:** partire da M4.1. Presentare il riepilogo della verifica, i file proposti e i passi da completare in Search Console dopo il rilascio. La pubblicazione richiede autorizzazione separata.

## M5 — Qualità, rilascio e manutenzione

Stato: PROCEDURA PROPOSTA; approvazione esplicita della pubblicazione è un VINCOLO APPROVATO.

- [ ] Verificare mobile, tastiera, zoom, leggibilità, link e lingue per ogni intervento.
- [ ] Preservare semplicità e architettura statica finché adeguate; cambi architetturali da discutere.
- [ ] Presentare anteprima e riepilogo prima del rilascio.
- [ ] Ricevere autorizzazione alla pubblicazione e controllare il sito dopo il rilascio.
- [ ] Definire revisione periodica di contenuti stagionali e certificati.

Le proposte di consolidamento tecnico sono registrate in GPT-CODEX.md, voce GC-20261115-05. Richiedono discussione con Giovanni e non sono avviate da questo riallineamento; il resoconto distingue ciò che era già presente nel lavoro precedente da ciò che resta proposto.

## M5.1 — Pubblicazione per prova d'uso

Incarico GC-20261115-07, autorizzazione esplicita ricevuta il 15 novembre 2026. Candidata: `25a85213df4db69636d860c2a6ce960687ceef93`; nessuna modifica applicativa introdotta da questo rilascio. Stato: PUBBLICAZIONE RIUSCITA E VERIFICATA SUL DOMINIO PUBBLICO. L'autorizzazione alla prova pubblica non costituisce approvazione definitiva di tutti i contenuti; valutazione dell'usabilità di Giovanni ancora da svolgere.

- [x] Istruzioni e documenti letti; dev aggiornato in fast-forward, senza sovrascrivere modifiche locali. Conservati gli aggiornamenti alle milestone future.
- [x] Confronto con main e tag locale `pre-usability-test-20261115-e1363d6`, riferito al precedente main `e1363d6c3cd40cd0519546efc4d6ef4907bd03b9`.
- [x] Controlli locali: 40 combinazioni delle cinque pagine IT/EN/formato e 50 percorsi di navigazione; rullino verificato in 12 combinazioni, 40 fotografie caricate e 10 stampe aperte correttamente. Mailto, lingua, tastiera, focus e immagini funzionanti, nessun errore JavaScript.
- [x] File tracciati controllati: nessun originale locale, archivio ZIP, PDF, certificato o credenziale riconoscibile; WXEF0435.JPG e duplicato esatto esclusi. CNAME invariato; Pages legacy da main `/`, HTTPS invariato. Main non protetto e nessun ruleset attivo rilevato.
- [x] Autorizzazione limitata alla candidata registrata in GPT-CODEX.md.
- [x] Tag di ripristino salvato sul remoto; dev integrato in main senza riscrivere la cronologia nel commit `0cc5f2fef8c099b6cd18cabd59f5e0e279c090f7`. GitHub Pages: build e workflow completati con successo.
- [x] Versione pubblica verificata: cinque pagine e cinque file CSS/JS identici alla candidata, 40 combinazioni pagina/lingua/formato e 50 navigazioni; rullino in 12 combinazioni con tutte le 40 immagini. Sei URL di materiali esclusi restituiscono 404.
- [x] Dev e main riallineati al merge pubblicato, senza riscrivere la cronologia; il resoconto successivo modifica soltanto documenti e viene mantenuto condiviso sui due rami.
- [ ] Valutazione della facilità d'uso da parte di Giovanni.
- [ ] Approvazione definitiva di testi, immagini e impaginazione.

Le prove touch sono eseguite tramite Chrome DevTools: dispositivi fisici, Safari, Firefox e lettori di schermo restano non verificati. M2, M3.1, M3.2, M3.3, M4 e la proposta generale di consolidamento non vengono implementate da questo rilascio. Esito, commit e dettagli in CODEX-GPT.md.

Versione precedente: `pre-usability-test-20261115-e1363d6` → `e1363d6c3cd40cd0519546efc4d6ef4907bd03b9`. Il tag è disponibile su GitHub. Nessuna regressione bloccante rilevata e nessun revert necessario; un eventuale ripristino va eseguito tramite commit di revert, mai con force push. CNAME e configurazione Pages invariati.

## M5.2 — Rilascio degli aggiornamenti ai percorsi

Il 22 novembre 2026 GitHub Pages ha completato con successo il deploy del commit `89ae00d9218b2a0d589501ffd79364d1eb072153`. Il rilascio comprende il catalogo, i profili interattivi e il Play, la foto del percorso 01, il percorso **02 · Le Corchie** (7,8 km, sette foto), la galleria di miniature, mappa e profilo affiancati su desktop e la colorazione per velocità di entrambe le passeggiate. Verifiche funzionali precedenti al rilascio: Chrome desktop e mobile emulato. Il deploy è confermato da GitHub Actions; la prova diretta del dominio pubblico e dei dispositivi fisici resta da fare. [Esito del deploy](https://github.com/giovanniguasti/casaisabellabike/actions/runs/45026058610)

Prossimo incarico: M4.1, verifica SEO e sitemap.

## Riallineamento della collaborazione

Incarico di riallineamento GC-20261115-01 completato su `dev`, senza pubblicare il sito in quella fase. M1 e M1.1 restano sottoposte alla revisione definitiva di Giovanni per testi, immagini e impaginazione. La successiva autorizzazione GC-20261115-07 consente soltanto il rilascio della candidata identificata per prova d'uso, non nuove funzionalità o rilasci futuri. Non avviare M2, M3 oltre i contenuti già autorizzati, M4 o il consolidamento tecnico proposto.

- [x] Lavoro applicativo salvato su dev; cronologia chore/ignore-original-photos integrata preservando il piano locale aggiornato.
- [x] GPT-CODEX.md e CODEX-GPT.md creati; revisione documentale autorizzata completata. MANIFEST.md segnalato come assente.
- [x] Verificata la pubblicazione configurata soltanto da main; push su dev eseguito e confrontato con il remoto, senza workflow o deployment da dev. Commit ed evidenze in CODEX-GPT.md.
- [ ] Revisione finale di Giovanni dei contenuti e dell'impaginazione del sito.
- [x] Autorizzazione separata GC-20261115-07 ricevuta per merge della candidata in main e pubblicazione per prova d'uso. Esito in M5.1; nessuna approvazione definitiva implicita.

### Catalogo Percorsi — GC-20261121-08 (21 novembre 2026)

Implementato e pubblicato con il rilascio del 22 novembre: catalogo bilingue con filtri Passeggiate e Mountain bike, dati condivisi e numerazione stabile; scheda 01 Parterre Torreone, circa 9,2 km, mappa Leaflet/OpenStreetMap, GPX ripulito e posizione su richiesta. Copia integrale verificata punto per punto; originale preservato localmente. Verifiche desktop e mobile emulati, incluse geolocalizzazione concessa/negata e tessere bloccate simulate, descritte in `CODEX-GPT.md` insieme a fonti e attribuzioni. Satellite da concordare; verifica su dispositivi reali ancora aperta.

### Profilo e riproduzione — GC-20261121-09 (21 novembre 2026)

Implementati su dev i profili interattivi di altitudine e pendenza stimata, sincronizzati con cursore e tratto sulla mappa, e i controlli Play, Pausa e Riparti. Verificati in Chrome desktop e mobile emulato, IT/EN, con tastiera, touch simulato, GPS simulato e casi sintetici di dati incompleti; dettagli e limiti in `CODEX-GPT.md`. Anteprima: http://127.0.0.1:8000/percorsi.html?lang=it. Pubblicato con il rilascio del 22 novembre. Revisione su dispositivi fisici ancora aperta.
