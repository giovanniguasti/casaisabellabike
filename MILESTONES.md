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
- Creare una pagina dedicata alla raccolta: implementazione locale verificata il 15 novembre 2026, riutilizzando la sezione già realizzata. Approvazione finale e pubblicazione restano pendenti.
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

Stato: REALIZZAZIONE LOCALE VERIFICATA; approvazione finale di Giovanni e pubblicazione pendenti.

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
- [ ] Pubblicazione solo dopo autorizzazione separata e controllo successivo.

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

Incarico: GC-20261115-06. Stato: IMPLEMENTATO E VERIFICATO LOCALMENTE; selezione definitiva e revisione finale di Giovanni pendenti. Nessuna pubblicazione del sito.

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
- [ ] Autorizzazione separata e successiva pubblicazione.

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

## M4 — Visibilità e SEO

Stato: OBIETTIVO APPROVATO; attività e strumenti PROPOSTI.

Preparare i contenuti e la struttura con attenzione alla ricerca già nelle fasi precedenti. Procedere poi per passi approvati:
- [ ] Definire pubblico e ricerche pertinenti a Cortona, ospitalità, cicloturismo e raccolta olive.
- [ ] Esaminare indicizzabilità, titoli, descrizioni, gerarchia dei contenuti e collegamenti.
- [ ] Proporre gestione IT/EN, URL canonici, sitemap, robots.txt e metadati social coerenti con la struttura effettiva.
- [ ] Valutare dati strutturati solo sulla base di attività e informazioni confermate.
- [ ] Proporre configurazione di Google Search Console e presenza locale; accessi e modifiche esterne richiedono incarico specifico.
- [ ] Concordare come misurare visite pertinenti e richieste, senza introdurre automaticamente analytics o altri servizi.

Completamento: verifiche tecniche documentate e sistema di osservazione concordato. Nessuna promessa di posizionamento; risultati da valutare nel tempo.

## M5 — Qualità, rilascio e manutenzione

Stato: PROCEDURA PROPOSTA; approvazione esplicita della pubblicazione è un VINCOLO APPROVATO.

- [ ] Verificare mobile, tastiera, zoom, leggibilità, link e lingue per ogni intervento.
- [ ] Preservare semplicità e architettura statica finché adeguate; cambi architetturali da discutere.
- [ ] Presentare anteprima e riepilogo prima del rilascio.
- [ ] Ricevere autorizzazione alla pubblicazione e controllare il sito dopo il rilascio.
- [ ] Definire revisione periodica di contenuti stagionali e certificati.

Le proposte di consolidamento tecnico sono registrate in GPT-CODEX.md, voce GC-20261115-05. Richiedono discussione con Giovanni e non sono avviate da questo riallineamento; il resoconto distingue ciò che era già presente nel lavoro precedente da ciò che resta proposto.

## Riallineamento della collaborazione

Incarico approvato GC-20261115-01: integrare il lavoro già realizzato e i documenti del ramo chore/ignore-original-photos su `dev`, predisporre i file di scambio e pubblicare il resoconto su quel ramo, previa verifica dell'assenza di pubblicazione automatica da `dev`. M1 e M1.1 restano sottoposte alla revisione finale di Giovanni per testi, immagini e impaginazione. Non avviare M2, M3 oltre i contenuti già autorizzati, M4 o il consolidamento tecnico proposto. Nessuna autorizzazione a merge su `main` o pubblicazione del sito.

- [x] Lavoro applicativo salvato su dev; cronologia chore/ignore-original-photos integrata preservando il piano locale aggiornato.
- [x] GPT-CODEX.md e CODEX-GPT.md creati; revisione documentale autorizzata completata. MANIFEST.md segnalato come assente.
- [x] Verificata la pubblicazione configurata soltanto da main; push su dev eseguito e confrontato con il remoto, senza workflow o deployment da dev. Commit ed evidenze in CODEX-GPT.md.
- [ ] Revisione finale di Giovanni dei contenuti e dell'impaginazione del sito.
- [ ] Autorizzazione separata per merge su main e pubblicazione del sito.
