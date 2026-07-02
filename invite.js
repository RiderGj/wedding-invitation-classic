(() => {
  const inviteData = {
    guestName: "张三",
    date: "2026.08.22",
    time: "17:30",
    venue: "杭州柏悦酒店 宴会厅 三层",
    countdownTarget: "2026-08-22T17:30:00+08:00",
  };

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  const setGuestName = (name, options = {}) => {
    const { fallback = inviteData.guestName, sourceInput = null, syncInputs = true } = options;
    const value = name.trim() || fallback;
    $$("[data-guest-name]").forEach((node) => {
      node.textContent = value;
    });
    if (!syncInputs) return;
    $$("[data-name-input]").forEach((input) => {
      if (input === sourceInput) return;
      if (input.value !== value) input.value = value;
    });
  };

  const applyInviteData = () => {
    $$('[data-field="date"]').forEach((node) => {
      node.textContent = inviteData.date;
    });
    $$('[data-field="time"]').forEach((node) => {
      node.textContent = inviteData.time;
    });
    $$('[data-field="venue"]').forEach((node) => {
      node.textContent = inviteData.venue;
    });

    const target = new Date(inviteData.countdownTarget);
    const diff = target.getTime() - Date.now();
    const days = Math.max(0, Math.ceil(diff / 86400000));
    $$("[data-countdown-days]").forEach((node) => {
      node.textContent = String(days);
    });

    setGuestName(inviteData.guestName);
  };

  const scrollToTarget = (selector) => {
    const target = $(selector);
    if (!target) return;
    if (target.hidden) target.hidden = false;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const bindRipple = () => {
    document.addEventListener("click", (event) => {
      const target = event.target.closest(".ripple-target");
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const ripple = document.createElement("span");
      ripple.className = "click-ripple";
      ripple.style.left = `${event.clientX - rect.left}px`;
      ripple.style.top = `${event.clientY - rect.top}px`;
      target.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
    });
  };

  const bindNavigation = () => {
    const drawer = $(".nav-drawer");
    const menuButton = $(".menu-button");

    menuButton?.addEventListener("click", () => {
      const isOpen = drawer?.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(Boolean(isOpen)));
    });

    drawer?.addEventListener("click", (event) => {
      const link = event.target.closest("a");
      if (!link) return;
      drawer.classList.remove("is-open");
      menuButton?.setAttribute("aria-expanded", "false");
    });

    $$("[data-next]").forEach((button) => {
      button.addEventListener("click", () => {
        button.classList.add("is-active");
        window.setTimeout(() => button.classList.remove("is-active"), 700);
        scrollToTarget(button.getAttribute("data-next"));
      });
    });
  };

  const bindNames = () => {
    $$("[data-name-input]").forEach((input) => {
      input.addEventListener("input", () => {
        setGuestName(input.value, {
          fallback: "亲爱的朋友",
          sourceInput: input,
        });
      });
    });
  };

  const bindIdentity = () => {
    const form = $("[data-identity-form]");
    if (!form) return;

    $$('input[name="identity"]', form).forEach((radio) => {
      radio.closest("label")?.addEventListener("click", () => {
        radio.checked = true;
        if (radio.value === "other") {
          const denied = $("#identity-denied");
          if (denied) denied.hidden = false;
          window.setTimeout(() => scrollToTarget("#identity-denied"), 120);
        }
      });
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      setGuestName(String(formData.get("guestName") || ""), {
        fallback: inviteData.guestName,
      });

      if (formData.get("identity") === "other") {
        const denied = $("#identity-denied");
        if (denied) denied.hidden = false;
        scrollToTarget("#identity-denied");
        return;
      }

      scrollToTarget("#letter-opening");
    });
  };

  const bindLightbox = () => {
    const modal = $("[data-lightbox-modal]");
    if (!modal) return;

    const title = $("[data-lightbox-title]", modal);
    const caption = $("[data-lightbox-caption]", modal);
    const close = $(".lightbox-close", modal);

    $$("[data-lightbox]").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        title.textContent = trigger.getAttribute("data-lightbox") || "照片";
        caption.textContent = trigger.getAttribute("data-caption") || "";
        modal.hidden = false;
      });
    });

    close?.addEventListener("click", () => {
      modal.hidden = true;
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) modal.hidden = true;
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") modal.hidden = true;
    });
  };

  const bindRsvp = () => {
    $$("[data-rsvp-form]").forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const nameInput = $("[data-name-input]", form);
        if (nameInput) {
          setGuestName(nameInput.value, {
            fallback: inviteData.guestName,
          });
        }

        const result = $("[data-rsvp-result]", form);
        if (result) result.hidden = false;

        const mode = document.body.dataset.mode;
        const destination = mode === "witness" ? "#mission-accepted" : "#ending";
        window.setTimeout(() => scrollToTarget(destination), 850);
      });
    });
  };

  const bindAmbientSound = () => {
    const buttons = $$(".sound-button");
    if (!buttons.length) return;

    let context = null;
    let master = null;
    let oscillators = [];

    const stop = async () => {
      buttons.forEach((button) => {
        button.setAttribute("aria-pressed", "false");
        button.setAttribute("aria-label", "开启音乐");
      });

      oscillators.forEach((oscillator) => {
        try {
          oscillator.stop();
        } catch {
          /* already stopped */
        }
      });
      oscillators = [];

      if (context) {
        await context.close();
        context = null;
        master = null;
      }
    };

    const start = async () => {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      context = new AudioContext();
      master = context.createGain();
      master.gain.value = 0.018;
      master.connect(context.destination);

      [261.63, 392, 523.25].forEach((frequency, index) => {
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        oscillator.type = index === 1 ? "triangle" : "sine";
        oscillator.frequency.value = frequency;
        gain.gain.value = index === 1 ? 0.18 : 0.12;
        oscillator.connect(gain);
        gain.connect(master);
        oscillator.start();
        oscillators.push(oscillator);
      });

      buttons.forEach((button) => {
        button.setAttribute("aria-pressed", "true");
        button.setAttribute("aria-label", "关闭音乐");
      });
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        if (context) {
          stop();
          return;
        }
        start();
      });
    });
  };

  applyInviteData();
  bindRipple();
  bindNavigation();
  bindNames();
  bindIdentity();
  bindLightbox();
  bindRsvp();
  bindAmbientSound();
})();
