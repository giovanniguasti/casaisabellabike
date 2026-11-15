# Casa Isabella Bike — Milestones

Aggiornato: 15 novembre 2026.

## Regole e stati

La progettazione viene discussa con Giovanni; l'implementazione è affidata a Codex. Nessuna modifica al codice senza incarico esplicito. Nessun merge, push delle modifiche applicative o pubblicazione senza autorizzazione esplicita. La creazione di questo piano non autorizza tutte le attività elencate.

- APPROVATO: obiettivo o vincolo confermato da Giovanni.
- PROPOSTA: dettaglio da discutere; non costituisce un incarico.
- DA VERIFICARE: informazione o risultato ancora da controllare.

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
- Impostazione iniziale superata: la raccolta va ora in una pagina dedicata, raggiungibile dalla homepage e dal menu. Riutilizzare il lavoro locale già fatto.
- Testi IT/EN e racconto fotografico di lavoro, persone, pause e pizza.
- Selezione locale per la revisione: BPUS6989.JPG, FXQP3615.JPG, IMG_1858.JPG, IMG_1857.JPG, NSOU7354.JPG. WXEF0435.JPG esclusa su indicazione di Giovanni; originale preservato e copia WebP rimossa.
- JGUG3431.JPG è un duplicato esatto di FXQP3615.JPG: non usare entrambi.
- Originali preservati; copie WebP in images/raccolta-2026/, orientamento corretto e metadati rimossi.
- Dimensioni adattate al layout, senza ingrandire immagini piccole; riferimento indicativo 1200 px lato lungo e 100–250 KB per foto, privilegiando la qualità. Circa 1 MB complessivo è un obiettivo indicativo, non un requisito rigido.
- Layout mobile/desktop, testi alternativi, dimensioni dichiarate e caricamento differito; nessun carosello automatico.

Criteri di completamento:
- [x] Anteprima locale e controllo IT/EN, menu, immagini e console.
- [x] Riepilogo dei pesi e delle modifiche: cinque WebP invariati, 1.188.286 byte complessivi, nella pagina raccolta-olive.html.
- [ ] Selezione, testi e impaginazione approvati da Giovanni; conferma delle foto pubblicabili.
- [ ] Pubblicazione solo dopo autorizzazione separata e controllo successivo.

Non includere ancora una galleria completa, i premi o la certificazione: interventi separati da concordare.

## M1.1 — Homepage breve e pagine dedicate

Stato: IMPLEMENTAZIONE LOCALE VERIFICATA; in attesa dell'approvazione di Giovanni. M2 non avviata.

- [x] Homepage con fotografia principale, breve identità, tre inviti visivi alle esperienze e pulsante Contattaci.
- [x] Pagine dedicate: Ospitalità, Bicicletta e territorio, La raccolta delle olive, Contatti.
- [x] Spostare il racconto della raccolta conservando immagini ottimizzate e traduzioni già realizzate.
- [x] Riutilizzare solo informazioni confermate nelle altre pagine; non inventare servizi, prezzi, itinerari o disponibilità.
- [x] Contatti con email visibile e suggerimento di indicare periodo, numero di persone ed esperienza; nessun modulo/backend.
- [x] Navigazione comune, ritorno alla home e lingua mantenuta tra pagine; sito statico.
- [x] Verificare apertura diretta delle pagine, link, lingue, layout mobile e desktop e console.
- [x] Presentare anteprima per approvazione, senza pubblicare.
- [ ] Approvazione finale di Giovanni di struttura, testi, fotografie pubblicabili e impaginazione.

Verifiche locali del 15 novembre 2026: Chrome headless, cinque pagine in IT/EN a 1440×1000, 390×844, 320×568 e 844×390 (40 combinazioni); 50 combinazioni di navigazione con lingua conservata; tastiera con Tab, focus visibile, salto al contenuto e Invio su lingua e collegamenti. Titoli e descrizioni distinti per pagina e lingua, immagini caricate senza deformazioni, nessuna sovrapposizione del menu, nessun errore JavaScript; fotografie, CSS, JavaScript e pagine caricati correttamente. Screenshot desktop e mobile generati per tutte le pagine. Dispositivi fisici e altri browser non verificati.

Preservazione verificata tramite SHA-256 di tutte le immagini esistenti, degli originali, di .gitignore e di CNAME. Nessun originale tracciato, nessuna modifica all'indice Git o alla configurazione di pubblicazione. Il piano remoto è stato letto con fetch e importato perché non esisteva un piano locale; nessun checkout o merge.

La collocazione futura di olio, premi e biologico nella pagina raccolta resta una proposta, non autorizza l'inserimento in questo intervento.

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

Stato: DIREZIONE APPROVATA; dettagli PROPOSTI.

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

## Primo incarico suggerito a Codex

M1.1 implementata e verificata localmente: sottoporre l'anteprima a Giovanni. Questa decisione sostituisce il precedente incarico limitato alla sezione nella homepage. Non avviare M2, M3 oltre la riorganizzazione dei contenuti confermati, o M4. Approvazione finale, push, merge e pubblicazione restano separati e non eseguiti.
