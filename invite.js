(() => {
  const inviteData = {
    guestName: "亲友",
    date: "2026.08.22",
    time: "17:00 草坪仪式 · 18:00 百花厅晚宴",
    venue: "上海花园饭店 · 百花厅",
    address: "上海市黄浦区茂名南路58号",
    dresscode: "白色 / 黑色 / 香槟色",
    countdownTarget: "2026-08-22T17:00:00+08:00",
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

  const updateCountdown = () => {
    const target = new Date(inviteData.countdownTarget);
    const diff = target.getTime() - Date.now();
    const days = Math.max(0, Math.ceil(diff / 86400000));
    $$("[data-countdown-days]").forEach((node) => {
      node.textContent = String(days);
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
    $$('[data-field="address"]').forEach((node) => {
      node.textContent = inviteData.address;
    });
    $$('[data-field="dresscode"]').forEach((node) => {
      node.textContent = inviteData.dresscode;
    });

    updateCountdown();
    window.setInterval(updateCountdown, 60000);
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
        const target = button.getAttribute("data-next");
        button.classList.add("is-active");
        window.setTimeout(() => button.classList.remove("is-active"), 700);
        if (button.matches("[data-journey-start]")) {
          const coverScene = button.closest(".cover-scene");
          button.classList.add("is-launching");
          coverScene?.classList.add("is-launching");
          window.setTimeout(() => {
            button.classList.remove("is-launching");
            coverScene?.classList.remove("is-launching");
          }, 900);
          window.setTimeout(() => scrollToTarget(target), 540);
          return;
        }
        scrollToTarget(target);
      });
    });
  };

  const bindNames = () => {
    $$("[data-name-input]").forEach((input) => {
      input.addEventListener("input", () => {
        setGuestName(input.value, {
          fallback: "朋友",
          sourceInput: input,
        });
      });
    });
  };

  const bindProjector = () => {
    const projector = $("[data-projector]");
    if (!projector) return;

    const frames = $$("[data-projector-frame]", projector);
    const slides = frames
      .filter((frame) => frame.getAttribute("aria-hidden") !== "true")
      .map((frame) => Number(frame.dataset.projectorIndex) || 0);

    if (!slides.length) return;

    let activeIndex = 0;
    let timer = null;

    const setActiveSlide = (index) => {
      activeIndex = (index + slides.length) % slides.length;

      frames.forEach((frame) => {
        frame.classList.toggle("is-active", Number(frame.dataset.projectorIndex) === activeIndex);
      });
    };

    const start = () => {
      if (timer || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      timer = window.setInterval(() => setActiveSlide(activeIndex + 1), 3600);
    };

    const stop = () => {
      if (!timer) return;
      window.clearInterval(timer);
      timer = null;
    };

    frames.forEach((frame) => {
      frame.addEventListener("click", () => {
        setActiveSlide(Number(frame.dataset.projectorIndex) || 0);
      });
    });

    projector.addEventListener("pointerenter", stop);
    projector.addEventListener("pointerleave", start);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stop();
      else start();
    });

    setActiveSlide(0);
    start();
  };

  const bindIdentity = () => {
    const form = $("[data-identity-form]");
    if (!form) return;
    const submitButton = $('button[type="submit"]', form);

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
      if (form.classList.contains("is-verifying")) return;
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

      const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 120 : 1350;
      form.classList.add("is-verifying");
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "开启中";
      }

      window.setTimeout(() => {
        scrollToTarget("#personal-letter");
      }, delay);

      window.setTimeout(() => {
        form.classList.remove("is-verifying");
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = "确认身份";
        }
      }, delay + 720);
    });
  };

  const bindLightbox = () => {
    const modal = $("[data-lightbox-modal]");
    if (!modal) return;

    const title = $("[data-lightbox-title]", modal);
    const caption = $("[data-lightbox-caption]", modal);
    const image = $("[data-lightbox-image]", modal);
    const close = $(".lightbox-close", modal);

    $$("[data-lightbox]").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        title.textContent = trigger.getAttribute("data-lightbox") || "照片";
        caption.textContent = trigger.getAttribute("data-caption") || "";
        const src = trigger.getAttribute("data-lightbox-src") || "";
        if (image) {
          image.src = src;
          image.alt = trigger.getAttribute("data-lightbox") || "照片";
        }
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
  bindProjector();
  bindIdentity();
  bindLightbox();
  bindRsvp();
  bindAmbientSound();
})();
