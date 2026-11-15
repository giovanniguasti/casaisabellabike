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
