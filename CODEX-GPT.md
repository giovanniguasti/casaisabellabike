# Casa Isabella Bike — Resoconto di Codex

Data: 15 novembre 2026. Riferimento condiviso: `dev`. Gli stati sotto riportati descrivono lavoro e verifiche di Codex; non attestano l'approvazione finale di Giovanni. Gli incarichi sono in `GPT-CODEX.md`, il piano in `MILESTONES.md`.

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
