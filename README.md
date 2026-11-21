# Casa Isabella Bike

Sito statico in italiano e inglese, senza framework, dipendenze applicative o fase di compilazione.

## Anteprima locale

Dalla cartella del repository:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Aprire http://127.0.0.1:8000/?lang=it oppure http://127.0.0.1:8000/?lang=en.

## Struttura

- `index.html`: presentazione e accesso alle tre esperienze.
- `ospitalita.html`: atmosfera della casa e vita condivisa.
- `bicicletta.html`: Cortona, strade bianche, boschi e ulivi.
- `raccolta-olive.html`: racconto fotografico della raccolta 2026.
- `contatti.html`: email e indicazioni per scrivere.
- `styles.css`: stili comuni e layout responsive.
- `script.js`: traduzioni, selezione della lingua e collegamenti tra pagine.

Le pagine si aprono direttamente. I collegamenti mantengono il parametro `lang`; la preferenza viene anche salvata in `localStorage`, quando disponibile. I testi italiani sono presenti nell'HTML anche senza JavaScript.

Le copie WebP della raccolta e le miniature sono in `images/raccolta-2026/`; la selezione di 40 foto è descritta in `FOTO-RACCOLTA.md`. Gli originali in `materiali/foto-originali/` restano esclusi da Git. Il piano e lo stato della revisione sono in `MILESTONES.md`.

Versione pubblica per prova d'uso: https://casaisabellabike.it, autorizzata da Giovanni con GC-20261115-07. Valutazione dell'usabilità e approvazione definitiva di testi, immagini e impaginazione restano da svolgere. Commit, controlli e tag della versione precedente sono in `CODEX-GPT.md`.

Il catalogo `percorsi.html` usa `percorsi-data.js` per i dati condivisi; i file GPX pubblicabili sono in `percorsi/`. Per ogni nuovo itinerario assegnare un numero unico stabile e aggiungere una voce al catalogo. La mappa legge lo stesso GPX disponibile al download. I file originali in `gpx/` restano locali. La mappa richiede Leaflet e tessere OpenStreetMap in rete; la posizione richiede HTTPS o localhost e il consenso del browser. Fonti, limiti e verifiche sono in `CODEX-GPT.md`.
