// GC-20261115-06: ordine editoriale, non cronologico. Modificare qui selezione e testi.
// table: 0 = solo rullino; 1–10 = posizione della stampa sul tavolo.
const HARVEST_PHOTOS = [
  {
    "original": "BPUS6989.JPG",
    "image": {
      "src": "images/raccolta-2026/raccolta-ulivi-paesaggio.webp",
      "width": 1280,
      "height": 960
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/bpus6989.webp",
      "width": 480,
      "height": 360
    },
    "title": {
      "it": "Tra gli ulivi",
      "en": "Among the olive trees"
    },
    "caption": {
      "it": "La raccolta comincia tra gli ulivi, con le reti a terra.",
      "en": "The harvest begins among the olive trees, with nets spread on the ground."
    },
    "alt": {
      "it": "Reti stese sotto gli ulivi e persone al lavoro, con le colline sullo sfondo.",
      "en": "Nets spread beneath olive trees and people at work, with hills in the background."
    },
    "table": 1
  },
  {
    "original": "COXM8131.JPG",
    "image": {
      "src": "images/raccolta-2026/album/raccolta-reti-coxm8131.webp",
      "width": 1080,
      "height": 1440
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/coxm8131.webp",
      "width": 360,
      "height": 480
    },
    "title": {
      "it": "Le reti sotto i rami",
      "en": "Nets beneath the branches"
    },
    "caption": {
      "it": "Le reti sotto i rami",
      "en": "Nets beneath the branches"
    },
    "alt": {
      "it": "Una persona lavora con un attrezzo lungo sotto un ulivo, sulle reti stese a terra.",
      "en": "A person works with a long tool beneath an olive tree, on nets spread on the ground."
    },
    "table": 0
  },
  {
    "original": "FXQP3615.JPG",
    "image": {
      "src": "images/raccolta-2026/lavoro-tra-gli-ulivi.webp",
      "width": 1280,
      "height": 960
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/fxqp3615.webp",
      "width": 480,
      "height": 360
    },
    "title": {
      "it": "Il lavoro tra i rami",
      "en": "Working among the branches"
    },
    "caption": {
      "it": "Tra i rami, il lavoro e la fatica si condividono.",
      "en": "Among the branches, we share the work and the effort."
    },
    "alt": {
      "it": "Due persone raccolgono le olive con attrezzi lunghi tra i rami; a terra, reti e cassette rosse.",
      "en": "Two people gather olives using long tools among the branches, with nets and red crates on the ground."
    },
    "table": 4
  },
  {
    "original": "GYOB0507.JPG",
    "image": {
      "src": "images/raccolta-2026/album/insieme-sotto-ulivo-gyob0507.webp",
      "width": 1080,
      "height": 1440
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/gyob0507.webp",
      "width": 360,
      "height": 480
    },
    "title": {
      "it": "Sotto lo stesso ulivo",
      "en": "Under the same olive tree"
    },
    "caption": {
      "it": "Sotto lo stesso ulivo",
      "en": "Under the same olive tree"
    },
    "alt": {
      "it": "Persone al lavoro sotto un ulivo, con grandi reti verdi stese sul terreno.",
      "en": "People working beneath an olive tree, with large green nets spread on the ground."
    },
    "table": 0
  },
  {
    "original": "KTSX8584.JPG",
    "image": {
      "src": "images/raccolta-2026/album/raccolta-rami-ktsx8584.webp",
      "width": 1080,
      "height": 1440
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/ktsx8584.webp",
      "width": 360,
      "height": 480
    },
    "title": {
      "it": "Le olive tra i rami",
      "en": "Olives among the branches"
    },
    "caption": {
      "it": "Le olive tra i rami",
      "en": "Olives among the branches"
    },
    "alt": {
      "it": "Persone usano attrezzi lunghi tra i rami di un ulivo, sopra le reti verdi.",
      "en": "People use long tools among the branches of an olive tree, above green nets."
    },
    "table": 0
  },
  {
    "original": "NWLM3959.JPG",
    "image": {
      "src": "images/raccolta-2026/album/ulivi-casa-nwlm3959.webp",
      "width": 1080,
      "height": 1440
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/nwlm3959.webp",
      "width": 360,
      "height": 480
    },
    "title": {
      "it": "Tra la casa e gli ulivi",
      "en": "Between the house and the trees"
    },
    "caption": {
      "it": "Tra la casa e gli ulivi",
      "en": "Between the house and the trees"
    },
    "alt": {
      "it": "Una persona vista di spalle lavora con un attrezzo lungo, con una casa in pietra sullo sfondo.",
      "en": "A person seen from behind works with a long tool, with a stone house in the background."
    },
    "table": 0
  },
  {
    "original": "OJRF9360.JPG",
    "image": {
      "src": "images/raccolta-2026/album/attrezzo-ulivi-ojrf9360.webp",
      "width": 1080,
      "height": 1440
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/ojrf9360.webp",
      "width": 360,
      "height": 480
    },
    "title": {
      "it": "Uno sguardo verso i rami",
      "en": "Looking up into the branches"
    },
    "caption": {
      "it": "Uno sguardo verso i rami",
      "en": "Looking up into the branches"
    },
    "alt": {
      "it": "Una persona con maglietta verde solleva un attrezzo tra i rami, sopra le reti di raccolta.",
      "en": "A person in a green shirt lifts a tool into the branches, above the harvesting nets."
    },
    "table": 0
  },
  {
    "original": "XJGX0660.JPG",
    "image": {
      "src": "images/raccolta-2026/album/raccolta-sguardi-xjgx0660.webp",
      "width": 1080,
      "height": 1440
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/xjgx0660.webp",
      "width": 360,
      "height": 480
    },
    "title": {
      "it": "Gli occhi tra le foglie",
      "en": "Eyes among the leaves"
    },
    "caption": {
      "it": "Gli occhi tra le foglie",
      "en": "Eyes among the leaves"
    },
    "alt": {
      "it": "Una persona con maglietta verde guarda verso un ulivo tenendo un attrezzo lungo.",
      "en": "A person in a green shirt looks towards an olive tree while holding a long tool."
    },
    "table": 0
  },
  {
    "original": "SBYB5592.JPG",
    "image": {
      "src": "images/raccolta-2026/album/tre-persone-ulivi-sbyb5592.webp",
      "width": 1080,
      "height": 1440
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/sbyb5592.webp",
      "width": 360,
      "height": 480
    },
    "title": {
      "it": "Insieme tra gli ulivi",
      "en": "Together among the olive trees"
    },
    "caption": {
      "it": "Insieme tra gli ulivi",
      "en": "Together among the olive trees"
    },
    "alt": {
      "it": "Tre persone raccolgono le olive con attrezzi lunghi, su reti verdi al sole.",
      "en": "Three people gather olives with long tools, standing on green nets in the sun."
    },
    "table": 0
  },
  {
    "original": "TLPZ5945.JPG",
    "image": {
      "src": "images/raccolta-2026/album/reti-raccolta-tlpz5945.webp",
      "width": 1080,
      "height": 1440
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/tlpz5945.webp",
      "width": 360,
      "height": 480
    },
    "title": {
      "it": "Le reti e il lavoro insieme",
      "en": "Nets and shared work"
    },
    "caption": {
      "it": "Le reti e il lavoro insieme",
      "en": "Nets and shared work"
    },
    "alt": {
      "it": "Persone distribuite intorno a un ulivo, con le reti e i cavi sul terreno.",
      "en": "People around an olive tree, with nets and cables on the ground."
    },
    "table": 0
  },
  {
    "original": "DIFC5555.JPG",
    "image": {
      "src": "images/raccolta-2026/album/rami-luce-difc5555.webp",
      "width": 1080,
      "height": 1440
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/difc5555.webp",
      "width": 360,
      "height": 480
    },
    "title": {
      "it": "La luce tra le foglie",
      "en": "Light through the leaves"
    },
    "caption": {
      "it": "La luce tra le foglie",
      "en": "Light through the leaves"
    },
    "alt": {
      "it": "Persone lavorano ai rami di un ulivo, con la luce bassa del sole sul paesaggio.",
      "en": "People work among olive branches, with low sunlight across the landscape."
    },
    "table": 0
  },
  {
    "original": "GHXL1158.JPG",
    "image": {
      "src": "images/raccolta-2026/album/ulivi-colline-ghxl1158.webp",
      "width": 1080,
      "height": 1440
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/ghxl1158.webp",
      "width": 360,
      "height": 480
    },
    "title": {
      "it": "Il paesaggio intorno al lavoro",
      "en": "The landscape around the work"
    },
    "caption": {
      "it": "Il paesaggio intorno al lavoro",
      "en": "The landscape around the work"
    },
    "alt": {
      "it": "Persone tra le reti di raccolta, con ulivi e colline verdi sullo sfondo.",
      "en": "People among harvesting nets, with olive trees and green hills behind them."
    },
    "table": 0
  },
  {
    "original": "DYPS7507.JPG",
    "image": {
      "src": "images/raccolta-2026/album/pausa-uliveto-dyps7507.webp",
      "width": 1440,
      "height": 1080
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/dyps7507.webp",
      "width": 480,
      "height": 360
    },
    "title": {
      "it": "Un momento tra gli ulivi",
      "en": "A moment among the olive trees"
    },
    "caption": {
      "it": "Un momento tra gli ulivi",
      "en": "A moment among the olive trees"
    },
    "alt": {
      "it": "Tre persone si fermano sulle reti sotto gli ulivi, con gli attrezzi della raccolta.",
      "en": "Three people pause on the nets beneath olive trees, with harvesting tools."
    },
    "table": 0
  },
  {
    "original": "UJRA9461.JPG",
    "image": {
      "src": "images/raccolta-2026/album/sorrisi-uliveto-ujra9461.webp",
      "width": 1080,
      "height": 1440
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/ujra9461.webp",
      "width": 360,
      "height": 480
    },
    "title": {
      "it": "Anche il tempo di sorridere",
      "en": "Time for a smile, too"
    },
    "caption": {
      "it": "Anche il tempo di sorridere",
      "en": "Time for a smile, too"
    },
    "alt": {
      "it": "Tre persone sorridono tra gli ulivi, con un attrezzo lungo e le reti ai piedi.",
      "en": "Three people smile among the olive trees, with a long tool and nets at their feet."
    },
    "table": 0
  },
  {
    "original": "ADFW1147.JPG",
    "image": {
      "src": "images/raccolta-2026/album/sorrisi-olive-adfw1147.webp",
      "width": 1440,
      "height": 1080
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/adfw1147.webp",
      "width": 480,
      "height": 360
    },
    "title": {
      "it": "Tra le olive, un sorriso",
      "en": "A smile among the olives"
    },
    "caption": {
      "it": "Tra le olive, un sorriso",
      "en": "A smile among the olives"
    },
    "alt": {
      "it": "Due persone posano accanto alle olive su un banco metallico, con la campagna sullo sfondo.",
      "en": "Two people pose beside olives on a metal workbench, with countryside behind them."
    },
    "table": 5
  },
  {
    "original": "AKTE8453.JPG",
    "image": {
      "src": "images/raccolta-2026/album/olive-cassette-akte8453.webp",
      "width": 1440,
      "height": 1080
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/akte8453.webp",
      "width": 480,
      "height": 360
    },
    "title": {
      "it": "Le olive passano di mano",
      "en": "Olives passing from hand to hand"
    },
    "caption": {
      "it": "Le olive passano di mano",
      "en": "Olives passing from hand to hand"
    },
    "alt": {
      "it": "Un gruppo lavora intorno a un banco pieno di olive, con cassette rosse e un trattore vicino.",
      "en": "A group works around a bench full of olives, with red crates and a tractor nearby."
    },
    "table": 0
  },
  {
    "original": "OHXJ1727.JPG",
    "image": {
      "src": "images/raccolta-2026/album/banco-olive-ohxj1727.webp",
      "width": 1440,
      "height": 1080
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/ohxj1727.webp",
      "width": 480,
      "height": 360
    },
    "title": {
      "it": "Intorno alle olive raccolte",
      "en": "Around the gathered olives"
    },
    "caption": {
      "it": "Intorno alle olive raccolte",
      "en": "Around the gathered olives"
    },
    "alt": {
      "it": "Persone intorno a un banco metallico con olive e foglie, tra cassette rosse.",
      "en": "People around a metal workbench holding olives and leaves, among red crates."
    },
    "table": 0
  },
  {
    "original": "QFIU9033.JPG",
    "image": {
      "src": "images/raccolta-2026/album/mani-olive-qfiu9033.webp",
      "width": 1080,
      "height": 1440
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/qfiu9033.webp",
      "width": 360,
      "height": 480
    },
    "title": {
      "it": "Tante mani, un lavoro condiviso",
      "en": "Many hands, shared work"
    },
    "caption": {
      "it": "Tante mani, un lavoro condiviso",
      "en": "Many hands, shared work"
    },
    "alt": {
      "it": "Vista dall’alto di persone riunite intorno alle olive, accanto al trattore giallo.",
      "en": "A view from above of people gathered around olives beside a yellow tractor."
    },
    "table": 0
  },
  {
    "original": "IMG_1858.JPG",
    "image": {
      "src": "images/raccolta-2026/raccolta-insieme.webp",
      "width": 1280,
      "height": 960
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/img_1858.webp",
      "width": 480,
      "height": 360
    },
    "title": {
      "it": "Un sorriso durante la raccolta",
      "en": "A smile during the harvest"
    },
    "caption": {
      "it": "Un sorriso nel mezzo della raccolta.",
      "en": "A smile in the middle of the harvest."
    },
    "alt": {
      "it": "Tre persone sorridono intorno a un banco di lavoro durante la raccolta, con cassette e ulivi alle spalle.",
      "en": "Three people smile around a workbench during the harvest, with crates and olive trees behind them."
    },
    "table": 2
  },
  {
    "original": "DQET0289.JPG",
    "image": {
      "src": "images/raccolta-2026/album/reti-ripiegate-dqet0289.webp",
      "width": 1080,
      "height": 1440
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/dqet0289.webp",
      "width": 360,
      "height": 480
    },
    "title": {
      "it": "Le reti tra le braccia",
      "en": "Nets in our arms"
    },
    "caption": {
      "it": "Le reti tra le braccia",
      "en": "Nets in our arms"
    },
    "alt": {
      "it": "Una persona porta tra le braccia una grande rete verde ripiegata, davanti agli ulivi.",
      "en": "A person carries a large folded green net in their arms, in front of olive trees."
    },
    "table": 0
  },
  {
    "original": "OPHO5015.JPG",
    "image": {
      "src": "images/raccolta-2026/album/trattore-cassette-opho5015.webp",
      "width": 1440,
      "height": 1080
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/opho5015.webp",
      "width": 480,
      "height": 360
    },
    "title": {
      "it": "Il trattore e le cassette",
      "en": "The tractor and the crates"
    },
    "caption": {
      "it": "Il trattore e le cassette",
      "en": "The tractor and the crates"
    },
    "alt": {
      "it": "Due persone posano accanto al trattore giallo e a una pila di cassette rosse davanti alla casa.",
      "en": "Two people pose beside a yellow tractor and a stack of red crates outside the house."
    },
    "table": 9
  },
  {
    "original": "HNAD0505.JPG",
    "image": {
      "src": "images/raccolta-2026/album/trattore-uliveto-hnad0505.webp",
      "width": 1080,
      "height": 1440
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/hnad0505.webp",
      "width": 360,
      "height": 480
    },
    "title": {
      "it": "Una pausa sul trattore",
      "en": "A pause on the tractor"
    },
    "caption": {
      "it": "Una pausa sul trattore",
      "en": "A pause on the tractor"
    },
    "alt": {
      "it": "Due persone sul trattore giallo, con cassette rosse e ulivi sullo sfondo.",
      "en": "Two people on a yellow tractor, with red crates and olive trees in the background."
    },
    "table": 0
  },
  {
    "original": "IQRZ9366.JPG",
    "image": {
      "src": "images/raccolta-2026/album/trattore-luce-iqrz9366.webp",
      "width": 1440,
      "height": 1080
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/iqrz9366.webp",
      "width": 480,
      "height": 360
    },
    "title": {
      "it": "Tra le cassette e gli ulivi",
      "en": "Among crates and olive trees"
    },
    "caption": {
      "it": "Tra le cassette e gli ulivi",
      "en": "Among crates and olive trees"
    },
    "alt": {
      "it": "Una persona siede su un trattore giallo con rimorchio e cassette, tra gli ulivi nella luce bassa.",
      "en": "A person sits on a yellow tractor with a trailer and crates, among olive trees in low sunlight."
    },
    "table": 0
  },
  {
    "original": "XHUU5147.JPG",
    "image": {
      "src": "images/raccolta-2026/album/trattore-insieme-xhuu5147.webp",
      "width": 1080,
      "height": 1440
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/xhuu5147.webp",
      "width": 360,
      "height": 480
    },
    "title": {
      "it": "Insieme sul trattore",
      "en": "Together on the tractor"
    },
    "caption": {
      "it": "Insieme sul trattore",
      "en": "Together on the tractor"
    },
    "alt": {
      "it": "Due persone si trovano sul trattore giallo fermo tra gli ulivi, con le cassette sul rimorchio.",
      "en": "Two people on a yellow tractor standing among olive trees, with crates on the trailer."
    },
    "table": 0
  },
  {
    "original": "XHCS5687.JPG",
    "image": {
      "src": "images/raccolta-2026/album/sorrisi-trattore-xhcs5687.webp",
      "width": 1440,
      "height": 1080
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/xhcs5687.webp",
      "width": 480,
      "height": 360
    },
    "title": {
      "it": "Un sorriso accanto al volante",
      "en": "A smile beside the steering wheel"
    },
    "caption": {
      "it": "Un sorriso accanto al volante",
      "en": "A smile beside the steering wheel"
    },
    "alt": {
      "it": "Una persona sorride al volante di un trattore giallo, con un’altra persona accanto.",
      "en": "A person smiles at the wheel of a yellow tractor, with another person beside them."
    },
    "table": 0
  },
  {
    "original": "VAVF4482.JPG",
    "image": {
      "src": "images/raccolta-2026/album/trattore-controluce-vavf4482.webp",
      "width": 1080,
      "height": 1440
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/vavf4482.webp",
      "width": 360,
      "height": 480
    },
    "title": {
      "it": "Gli ulivi in controluce",
      "en": "Olive trees in the backlight"
    },
    "caption": {
      "it": "Gli ulivi in controluce",
      "en": "Olive trees in the backlight"
    },
    "alt": {
      "it": "Due persone su un trattore giallo tra gli ulivi, illuminati dal sole in controluce.",
      "en": "Two people on a yellow tractor among olive trees, lit by backlighting from the sun."
    },
    "table": 0
  },
  {
    "original": "GTFO1757.JPG",
    "image": {
      "src": "images/raccolta-2026/album/ritratto-ulivi-gtfo1757.webp",
      "width": 810,
      "height": 1440
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/gtfo1757.webp",
      "width": 270,
      "height": 480
    },
    "title": {
      "it": "Un ritratto tra gli ulivi",
      "en": "A portrait among the olive trees"
    },
    "caption": {
      "it": "Un ritratto tra gli ulivi",
      "en": "A portrait among the olive trees"
    },
    "alt": {
      "it": "Autoritratto con cappello e occhiali, con un rimorchio rosso e gli ulivi sullo sfondo.",
      "en": "A self-portrait with a hat and glasses, with a red trailer and olive trees in the background."
    },
    "table": 0
  },
  {
    "original": "IMG_1856.JPG",
    "image": {
      "src": "images/raccolta-2026/album/pausa-prato-img_1856.webp",
      "width": 1080,
      "height": 1440
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/img_1856.webp",
      "width": 360,
      "height": 480
    },
    "title": {
      "it": "Una pausa sul prato",
      "en": "A break on the lawn"
    },
    "caption": {
      "it": "Una pausa sul prato",
      "en": "A break on the lawn"
    },
    "alt": {
      "it": "Vista dall’alto di persone sulle sedie a sdraio e su tappetini nel prato accanto alla casa.",
      "en": "A view from above of people on deckchairs and mats on the lawn beside the house."
    },
    "table": 0
  },
  {
    "original": "IMG_1857.JPG",
    "image": {
      "src": "images/raccolta-2026/pausa-davanti-casa.webp",
      "width": 1280,
      "height": 960
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/img_1857.webp",
      "width": 480,
      "height": 360
    },
    "title": {
      "it": "Davanti a casa",
      "en": "Outside the house"
    },
    "caption": {
      "it": "Una pausa davanti a casa, con gli ulivi a pochi passi.",
      "en": "A break outside the house, just a few steps from the olive trees."
    },
    "alt": {
      "it": "Persone in pausa sul prato davanti alla casa in pietra, tra sedie, un tavolo e gli ulivi.",
      "en": "People taking a break on the lawn outside the stone house, among chairs, a table and olive trees."
    },
    "table": 6
  },
  {
    "original": "NZKY9045.JPG",
    "image": {
      "src": "images/raccolta-2026/album/sedia-sole-nzky9045.webp",
      "width": 1080,
      "height": 1440
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/nzky9045.webp",
      "width": 360,
      "height": 480
    },
    "title": {
      "it": "Una sedia al sole",
      "en": "A chair in the sun"
    },
    "caption": {
      "it": "Una sedia al sole",
      "en": "A chair in the sun"
    },
    "alt": {
      "it": "Una persona riposa su una sedia all’aperto, vicino al muro in pietra della casa.",
      "en": "A person rests in a chair outdoors, beside the stone wall of the house."
    },
    "table": 0
  },
  {
    "original": "IMG_1983.JPG",
    "image": {
      "src": "images/raccolta-2026/album/pausa-panorama-img_1983.webp",
      "width": 1440,
      "height": 1080
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/img_1983.webp",
      "width": 480,
      "height": 360
    },
    "title": {
      "it": "Il tempo di guardarsi intorno",
      "en": "Time to take in the view"
    },
    "caption": {
      "it": "Il tempo di guardarsi intorno",
      "en": "Time to take in the view"
    },
    "alt": {
      "it": "Una persona siede su un muretto in pietra guardando le colline coperte di boschi e ulivi.",
      "en": "A person sits on a stone wall looking towards hills covered in woodland and olive trees."
    },
    "table": 7
  },
  {
    "original": "IMG_1982.JPG",
    "image": {
      "src": "images/raccolta-2026/album/colline-boschi-img_1982.webp",
      "width": 1440,
      "height": 1080
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/img_1982.webp",
      "width": 480,
      "height": 360
    },
    "title": {
      "it": "I boschi e le colline",
      "en": "Woods and hills"
    },
    "caption": {
      "it": "I boschi e le colline",
      "en": "Woods and hills"
    },
    "alt": {
      "it": "Una valle verde con boschi, uliveti e case sparse sui versanti.",
      "en": "A green valley with woodland, olive groves and houses scattered across the slopes."
    },
    "table": 0
  },
  {
    "original": "IMG_1947.JPG",
    "image": {
      "src": "images/raccolta-2026/album/colline-nebbia-img_1947.webp",
      "width": 1440,
      "height": 1080
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/img_1947.webp",
      "width": 480,
      "height": 360
    },
    "title": {
      "it": "Le colline sopra la nebbia",
      "en": "Hills above the mist"
    },
    "caption": {
      "it": "Le colline sopra la nebbia",
      "en": "Hills above the mist"
    },
    "alt": {
      "it": "Colline e ulivi sopra uno strato di nebbia, sotto un cielo sfumato di arancio.",
      "en": "Hills and olive trees above a layer of mist, beneath an orange-tinted sky."
    },
    "table": 0
  },
  {
    "original": "IMG_1944.JPG",
    "image": {
      "src": "images/raccolta-2026/album/cielo-colline-img_1944.webp",
      "width": 1440,
      "height": 1080
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/img_1944.webp",
      "width": 480,
      "height": 360
    },
    "title": {
      "it": "Il cielo sulle colline",
      "en": "The sky above the hills"
    },
    "caption": {
      "it": "Il cielo sulle colline",
      "en": "The sky above the hills"
    },
    "alt": {
      "it": "Nuvole rosse e arancioni sopra le sagome scure delle colline e degli ulivi.",
      "en": "Red and orange clouds above the dark outlines of hills and olive trees."
    },
    "table": 8
  },
  {
    "original": "IMG_1840.JPG",
    "image": {
      "src": "images/raccolta-2026/album/casa-pietra-img_1840.webp",
      "width": 1440,
      "height": 1080
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/img_1840.webp",
      "width": 480,
      "height": 360
    },
    "title": {
      "it": "Dentro la casa in pietra",
      "en": "Inside the stone house"
    },
    "caption": {
      "it": "Dentro la casa in pietra",
      "en": "Inside the stone house"
    },
    "alt": {
      "it": "Una persona accanto a un lavello, in una stanza con pareti in pietra.",
      "en": "A person beside a sink in a room with stone walls."
    },
    "table": 0
  },
  {
    "original": "HKNG2931.JPG",
    "image": {
      "src": "images/raccolta-2026/album/fuoco-forno-hkng2931.webp",
      "width": 1440,
      "height": 1080
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/hkng2931.webp",
      "width": 480,
      "height": 360
    },
    "title": {
      "it": "Il fuoco nel forno",
      "en": "Fire in the oven"
    },
    "caption": {
      "it": "Il fuoco nel forno",
      "en": "Fire in the oven"
    },
    "alt": {
      "it": "Legna accesa e fiamme all’interno di un forno a legna, viste dall’apertura.",
      "en": "Burning wood and flames inside a wood-fired oven, seen through its opening."
    },
    "table": 10
  },
  {
    "original": "RVEW0183.JPG",
    "image": {
      "src": "images/raccolta-2026/album/insieme-forno-rvew0183.webp",
      "width": 1080,
      "height": 1440
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/rvew0183.webp",
      "width": 360,
      "height": 480
    },
    "title": {
      "it": "Insieme davanti al forno",
      "en": "Together by the oven"
    },
    "caption": {
      "it": "Insieme davanti al forno",
      "en": "Together by the oven"
    },
    "alt": {
      "it": "Due persone davanti a un forno acceso, in una stanza con pareti in pietra.",
      "en": "Two people in front of a glowing oven in a room with stone walls."
    },
    "table": 0
  },
  {
    "original": "NSOU7354.JPG",
    "image": {
      "src": "images/raccolta-2026/pizza-forno-acceso.webp",
      "width": 720,
      "height": 960
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/nsou7354.webp",
      "width": 360,
      "height": 480
    },
    "title": {
      "it": "Il forno acceso",
      "en": "The glowing oven"
    },
    "caption": {
      "it": "Il forno acceso, la pizza che prende forma.",
      "en": "The oven is glowing, the pizza taking shape."
    },
    "alt": {
      "it": "Una persona maneggia una pala da pizza davanti a un forno in pietra acceso.",
      "en": "A person handles a pizza peel in front of a glowing stone oven."
    },
    "table": 3
  },
  {
    "original": "OGRX1904.JPG",
    "image": {
      "src": "images/raccolta-2026/album/arco-forno-ogrx1904.webp",
      "width": 1080,
      "height": 1440
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/ogrx1904.webp",
      "width": 360,
      "height": 480
    },
    "title": {
      "it": "Il forno oltre l’arco",
      "en": "The oven beyond the arch"
    },
    "caption": {
      "it": "Il forno oltre l’arco",
      "en": "The oven beyond the arch"
    },
    "alt": {
      "it": "Una persona davanti a un forno acceso, vista attraverso un arco in pietra.",
      "en": "A person in front of a glowing oven, seen through a stone arch."
    },
    "table": 0
  },
  {
    "original": "DPTQ0841.JPG",
    "image": {
      "src": "images/raccolta-2026/album/tavola-aperto-dptq0841.webp",
      "width": 1080,
      "height": 1440
    },
    "thumbnail": {
      "src": "images/raccolta-2026/miniature/dptq0841.webp",
      "width": 360,
      "height": 480
    },
    "title": {
      "it": "La tavola all’aperto",
      "en": "The table outdoors"
    },
    "caption": {
      "it": "La tavola all’aperto",
      "en": "The table outdoors"
    },
    "alt": {
      "it": "Un tavolo apparecchiato con sedie all’aperto, vicino alla porta illuminata di una casa in pietra nel buio.",
      "en": "A table set outdoors with chairs, beside the lit doorway of a stone house in the dark."
    },
    "table": 0
  }
];
