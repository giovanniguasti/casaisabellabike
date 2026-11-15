(() => {
  const photos = HARVEST_PHOTOS;
  if (!photos.length) return;

  const UI = {
    it: {
      tableEyebrow: "La raccolta, le pause, gli amici",
      tableTitle: "Il tavolo dei ricordi",
      tableIntro: "Scegli una stampa o apri il rullino per guardare tutte le fotografie.",
      open: "Apri il rullino · {total} foto",
      openPhoto: "Apri {original}: {title}",
      viewerTitle: "Il rullino",
      close: "Chiudi",
      closeLabel: "Chiudi il rullino (Esc)",
      previous: "Precedente",
      next: "Successiva",
      counter: "Foto {current} di {total}",
      thumbnails: "Miniature delle fotografie",
      thumbnail: "Foto {current} di {total}: {title} — {original}",
      help: "Frecce o swipe per sfogliare. Esc per chiudere.",
      error: "La fotografia non si è caricata.",
      retry: "Riprova"
    },
    en: {
      tableEyebrow: "The harvest, the breaks, the friends",
      tableTitle: "The table of memories",
      tableIntro: "Choose a print or open the film roll to see all the photographs.",
      open: "Open the film roll · {total} photos",
      openPhoto: "Open {original}: {title}",
      viewerTitle: "The film roll",
      close: "Close",
      closeLabel: "Close the film roll (Esc)",
      previous: "Previous",
      next: "Next",
      counter: "Photo {current} of {total}",
      thumbnails: "Photo thumbnails",
      thumbnail: "Photo {current} of {total}: {title} — {original}",
      help: "Use arrows or swipe to browse. Esc to close.",
      error: "The photograph could not be loaded.",
      retry: "Try again"
    }
  };

  const dialog = document.getElementById("photo-album");
  const table = document.getElementById("memory-table");
  const openButton = document.getElementById("open-album");
  const closeButton = document.getElementById("album-close");
  const previousButton = document.getElementById("album-prev");
  const nextButton = document.getElementById("album-next");
  const frame = document.getElementById("film-frame");
  const image = document.getElementById("film-image");
  const preview = document.getElementById("film-preview");
  const error = document.getElementById("film-error");
  const strip = document.getElementById("filmstrip");
  const counter = document.getElementById("album-counter");
  const caption = document.getElementById("album-caption");
  const original = document.getElementById("album-original");
  let current = 0;
  let opener = openButton;
  let scrollPosition = 0;
  let previousBodyTop = "";
  let thumbnails = [];
  let neighborImages = [];
  let gesture = null;

  const language = () => document.documentElement.lang === "en" ? "en" : "it";
  function text(key, values = {}) {
    return UI[language()][key].replace(/\{(\w+)\}/g, (_, name) => values[name]);
  }

  function makeThumbnail(photo) {
    const img = document.createElement("img");
    img.src = photo.thumbnail.src;
    img.width = photo.thumbnail.width;
    img.height = photo.thumbnail.height;
    img.loading = "lazy";
    img.decoding = "async";
    // The containing button supplies the translated accessible name.
    img.alt = "";
    return img;
  }

  const tilts = [-1.7, 1.2, -1, 1.8, -1.2, 0.8, -1.6, 1.2, -0.8, 1.5];
  photos.map((photo, index) => ({ photo, index }))
    .filter(({ photo }) => photo.table > 0)
    .sort((a, b) => a.photo.table - b.photo.table)
    .forEach(({ photo, index }, position) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "memory-print";
      button.dataset.photoIndex = index;
      button.dataset.wide = String([1, 2, 8, 9].includes(photo.table));
      button.style.setProperty("--tilt", `${tilts[position % tilts.length]}deg`);
      button.setAttribute("aria-haspopup", "dialog");
      button.setAttribute("aria-controls", dialog.id);
      button.append(makeThumbnail(photo));
      const title = document.createElement("span");
      title.className = "print-caption";
      button.append(title);
      button.addEventListener("click", () => open(index, button));
      table.append(button);
    });

  function buildFilmstrip() {
    if (thumbnails.length) return;
    photos.forEach((photo, index) => {
      const item = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.photoIndex = index;
      button.append(makeThumbnail(photo));
      button.addEventListener("click", () => show(index));
      item.append(button);
      strip.append(item);
      thumbnails.push(button);
    });
  }

  function translate() {
    document.querySelectorAll("[data-album-i18n]").forEach(el => {
      el.textContent = text(el.dataset.albumI18n);
    });
    openButton.textContent = text("open", { total: photos.length });
    closeButton.setAttribute("aria-label", text("closeLabel"));
    strip.setAttribute("aria-label", text("thumbnails"));
    document.querySelectorAll("[data-album-lang]").forEach(button => {
      button.setAttribute("aria-pressed", String(button.dataset.albumLang === language()));
    });
    table.querySelectorAll("button").forEach(button => {
      const photo = photos[Number(button.dataset.photoIndex)];
      button.querySelector(".print-caption").textContent = photo.title[language()];
      button.querySelector("img").alt = photo.alt[language()];
      button.setAttribute("aria-label", text("openPhoto", { original: photo.original, title: photo.title[language()] }));
    });
    thumbnails.forEach((button, index) => {
      button.setAttribute("aria-label", text("thumbnail", {
        current: index + 1, total: photos.length,
        title: photos[index].title[language()], original: photos[index].original
      }));
    });
    updateDescription();
  }

  function updateDescription() {
    const photo = photos[current];
    counter.textContent = text("counter", { current: current + 1, total: photos.length });
    caption.textContent = photo.caption[language()];
    original.textContent = photo.original;
    image.alt = photo.alt[language()];
  }

  function prefetchNeighbors(index) {
    // Only immediate neighbours, and only after the visible image has loaded.
    neighborImages = [];
    [index - 1, index + 1].filter(i => i >= 0 && i < photos.length).forEach(i => {
      const img = new Image();
      img.decoding = "async";
      img.src = photos[i].image.src;
      neighborImages.push(img);
    });
  }

  function show(index) {
    if (index < 0 || index >= photos.length) return;
    const thumbnailHadFocus = strip.contains(document.activeElement);
    const focusNeedsRecovery = error.contains(document.activeElement)
      || (index === 0 && document.activeElement === previousButton)
      || (index === photos.length - 1 && document.activeElement === nextButton);
    current = index;
    const photo = photos[index];
    updateDescription();
    previousButton.disabled = index === 0;
    nextButton.disabled = index === photos.length - 1;
    frame.setAttribute("aria-busy", "true");
    error.hidden = true;
    image.hidden = true;
    preview.src = photo.thumbnail.src;
    preview.width = photo.thumbnail.width;
    preview.height = photo.thumbnail.height;
    image.width = photo.image.width;
    image.height = photo.image.height;
    image.onload = () => {
      if (current !== index || !dialog.open) return;
      image.hidden = false;
      frame.setAttribute("aria-busy", "false");
      prefetchNeighbors(index);
    };
    image.onerror = () => {
      if (current !== index || !dialog.open) return;
      frame.setAttribute("aria-busy", "false");
      error.hidden = false;
    };
    image.src = photo.image.src;
    thumbnails.forEach((button, i) => {
      button.tabIndex = i === index ? 0 : -1;
      if (i === index) button.setAttribute("aria-current", "true");
      else button.removeAttribute("aria-current");
    });
    const active = thumbnails[index];
    if (thumbnailHadFocus || focusNeedsRecovery) active.focus({ preventScroll: true });
    // Scroll only the strip, without moving the dialog or the underlying page.
    const bounds = strip.getBoundingClientRect();
    const item = active.getBoundingClientRect();
    if (item.left < bounds.left) strip.scrollLeft -= bounds.left - item.left + 6;
    if (item.right > bounds.right) strip.scrollLeft += item.right - bounds.right + 6;
  }

  function open(index, source) {
    if (dialog.open) { show(index); return; }
    opener = source;
    scrollPosition = window.scrollY;
    previousBodyTop = document.body.style.top;
    document.body.style.top = `-${scrollPosition}px`;
    document.body.classList.add("album-open");
    buildFilmstrip();
    dialog.showModal();
    translate();
    show(index);
    closeButton.focus({ preventScroll: true });
  }

  dialog.addEventListener("close", () => {
    gesture = null;
    neighborImages = [];
    document.body.classList.remove("album-open");
    document.body.style.top = previousBodyTop;
    window.scrollTo({ top: scrollPosition, behavior: "instant" });
    (opener.isConnected ? opener : openButton).focus({ preventScroll: true });
  });
  closeButton.addEventListener("click", () => dialog.close());
  previousButton.addEventListener("click", () => show(current - 1));
  nextButton.addEventListener("click", () => show(current + 1));
  document.getElementById("album-retry").addEventListener("click", () => show(current));
  openButton.addEventListener("click", () => open(0, openButton));
  openButton.setAttribute("aria-controls", dialog.id);
  openButton.hidden = false;
  document.querySelectorAll("[data-album-lang]").forEach(button => {
    button.addEventListener("click", () => setLang(button.dataset.albumLang));
  });
  document.addEventListener("languagechange", translate);

  dialog.addEventListener("keydown", event => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === "Tab") {
      const focusable = [...dialog.querySelectorAll("button:not(:disabled)")]
        .filter(el => el.tabIndex >= 0 && el.getClientRects().length);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || !dialog.contains(document.activeElement))) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !dialog.contains(document.activeElement))) {
        event.preventDefault(); first.focus();
      }
    } else if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      if (event.key === "ArrowLeft") show(current - 1);
      if (event.key === "ArrowRight") show(current + 1);
      if (event.key === "Home") show(0);
      if (event.key === "End") show(photos.length - 1);
    }
    // Native dialog cancellation handles Escape and fires the close cleanup above.
  });

  frame.addEventListener("pointerdown", event => {
    if (event.pointerType !== "touch" || !event.isPrimary) { gesture = null; return; }
    gesture = { x: event.clientX, y: event.clientY, id: event.pointerId };
    frame.setPointerCapture(event.pointerId);
  });
  frame.addEventListener("pointercancel", () => { gesture = null; });
  frame.addEventListener("pointerup", event => {
    if (!gesture || gesture.id !== event.pointerId) return;
    const dx = event.clientX - gesture.x;
    const dy = event.clientY - gesture.y;
    gesture = null;
    if (Math.abs(dx) >= 48 && Math.abs(dx) > Math.abs(dy) * 1.25) {
      show(current + (dx < 0 ? 1 : -1));
    }
  });
  translate();
})();
