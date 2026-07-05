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

  const guestGroups = {
    main: [
      "高永权",
      "阳菊英",
      "阳莹",
      "张敏",
      "伟鹏",
      "乐乐奶奶",
      "乐乐叔叔",
      "乐乐爷爷",
      "毛老师",
    ],
    brideFamily: ["乐乐婶婶", "齐熠儒", "韩慧娟", "王亚娜"],
    groomFamily: [
      "二姐",
      "大舅娘",
      "三舅舅",
      "三舅娘",
      "娇姐",
      "蔡梓涵",
      "姐夫",
      "轩轩",
      "高永山",
      "高永红",
      "高永红（小)",
      "高远庆",
      "王松",
      "高空",
      "高永如",
      "贾川云",
      "高紫馨",
      "孙恒军",
      "孙恒飞",
      "孙恒林",
      "孙恒团",
      "孙恒刚",
      "孙健",
      "孙恒举",
      "孙延明",
      "孙恒强",
      "高梅松",
      "李娟",
      "陆楠",
      "高兴",
      "李乐怡",
      "李乐怡（小）",
      "高永耀",
      "高雪梦",
      "王丽萍",
      "高郑龙",
      "王凤蕊",
      "高明明",
    ],
    brideFriend: [
      "白京津",
      "刘子亮",
      "陈雅冰",
      "姜拓",
      "葛娅楠",
      "胡振涛",
      "姚佳隆",
      "张杰",
      "叶熠",
      "徐莹",
      "Maggie",
      "唐龙",
      "王璐",
      "王晓航",
      "彭双艳",
      "椰子",
      "张丽娴",
      "沙倩倩",
      "师琪琪",
      "文章茂雅",
      "张欣怡",
      "吴大萌",
    ],
    groomFriend: [
      "熊威",
      "曹明昊",
      "冯立伟",
      "丁中兴",
      "曹志东",
      "东哥",
      "曹志东（东哥）",
      "杜骏翰",
      "刘鹏飞",
      "郝帅",
      "杜元舜",
      "程义",
      "hyacin",
      "阿里",
      "yanlin",
      "飞",
    ],
    colleague: [
      "老孔",
      "刘德金",
      "高远忠",
      "祖庄美",
      "周建明",
      "刘邦贞",
      "周国定",
      "隆国全",
      "王金海",
      "戴圆圆",
      "陈松",
      "华立鹏",
      "高丹",
      "潘洪力",
      "毛萍",
      "李同金",
      "赵工",
      "蒋永恒",
      "小贺",
    ],
    client: [
      "金苏航",
      "王佳敏",
      "张文军",
      "王荣洲",
      "杨亮亮",
      "张鹤平",
      "唐闯成",
      "钱惠忠",
      "陈圣",
      "顾云方",
      "徐金芝",
      "顾兴",
      "王京",
      "封平",
      "王军",
      "何小华",
      "杨孝保",
      "王建军",
      "张挺中",
      "戴波",
    ],
    parentFriend: ["罗艳", "陈林多", "黄阿姨", "涂涛涛", "谭先", "老潘", "曾林", "汪成胜"],
  };

  const letterTemplates = {
    main: {
      stamp: "Family",
      title: "亲爱的 {name}：",
      paragraphs: [
        "这一天能有你在，对我们来说格外珍贵。你见过我们最真实的样子，也一直把祝福放在很近的地方。",
        "从家人的惦念，到每一次认真帮忙和牵挂，你都让这场婚礼不只是仪式，更像一次温暖的团圆。",
        "所以这封信，想先把最郑重的邀请交给你：请来见证我们人生里很重要的一页。",
      ],
      signature: "高建 & 齐超儒 敬上",
    },
    brideFamily: {
      stamp: "Family",
      title: "亲爱的 {name}：",
      paragraphs: [
        "谢谢你一直疼爱、陪伴和牵挂着超儒。那些来自家人的支持，安静却有力量，陪她走到了今天。",
        "婚礼这一天，我们想把这份喜悦认真交到你手里，也想让你看见她被爱包围、继续出发的样子。",
        "请你来现场，和我们一起把这份团圆与祝福留在 2026 年 8 月 22 日。",
      ],
      signature: "高建 & 齐超儒 敬上",
    },
    groomFamily: {
      stamp: "Family",
      title: "亲爱的 {name}：",
      paragraphs: [
        "谢谢你一直关心、照顾和支持着高建。家人的祝福，是这段旅程里最踏实的底色。",
        "从小时候到今天，很多被记住的瞬间里，都有亲人的笑声、叮嘱和牵挂。",
        "这一次，我们想邀请你到现场，亲眼见证他和超儒开启新的家庭篇章。",
      ],
      signature: "高建 & 齐超儒 敬上",
    },
    brideFriend: {
      stamp: "Friend",
      title: "亲爱的 {name}：",
      paragraphs: [
        "谢谢你陪超儒走过那些闪闪发光的日子。一起笑过、聊过、认真生活过的片段，都被悄悄收进了她的故事里。",
        "朋友的陪伴常常不用说太多，却总能在关键时刻给人底气和快乐。",
        "所以这一次，我们想邀请你继续坐在故事最近的位置，见证她走向新的幸福。",
      ],
      signature: "高建 & 齐超儒 ♡",
    },
    groomFriend: {
      stamp: "Friend",
      title: "亲爱的 {name}：",
      paragraphs: [
        "谢谢你一路陪高建走到今天。那些一起并肩、玩笑、认真聊过未来的时刻，都成了他人生里很重要的坐标。",
        "真正的朋友，是很多话不用解释，也知道彼此会在重要时刻出现。",
        "这一次，我们想邀请你来到现场，继续做这个重要时刻的见证者。",
      ],
      signature: "高建 & 齐超儒 ♡",
    },
    colleague: {
      stamp: "Colleague",
      title: "亲爱的 {name}：",
      paragraphs: [
        "谢谢你在工作与生活里给予高建的支持和信任。并肩做事的日子，也让很多关系拥有了更珍贵的情分。",
        "婚礼是生活里很柔软的一面，我们也希望把这份喜悦与你分享。",
        "诚挚邀请你来到现场，见证我们从工作之外，走进人生新章节的一天。",
      ],
      signature: "高建 & 齐超儒 敬邀",
    },
    client: {
      stamp: "Guest",
      title: "尊敬的 {name}：",
      paragraphs: [
        "感谢你一直以来的支持与信任。因为工作相识，也因为一次次真诚往来，让这份关系有了更温暖的意义。",
        "婚礼这一天，我们希望把人生里的重要喜讯，也郑重分享给你。",
        "诚邀你莅临现场，与我们共同见证这份承诺与新的开始。",
      ],
      signature: "高建 & 齐超儒 敬邀",
    },
    parentFriend: {
      stamp: "Guest",
      title: "亲爱的 {name}：",
      paragraphs: [
        "谢谢你一直以来对家人的照顾、支持与关心。长辈和朋友们的祝福，让这场婚礼多了一份踏实的温度。",
        "两个年轻人即将开启新的生活，我们也想把这份喜悦真诚地分享给你。",
        "诚邀你来到现场，与我们一起见证这一日的鲜花、晚风与约定。",
      ],
      signature: "高建 & 齐超儒 敬邀",
    },
    fallback: {
      stamp: "Witness",
      title: "亲爱的 {name}：",
      paragraphs: [
        "谢谢你一直以来的陪伴与支持。那些一起笑过、聊过、走过的日子，已经悄悄变成我们故事里很重要的一部分。",
        "因为在我们的人生旅程里，你曾留下属于你的那一圈涟漪。",
        "所以今天，我们想邀请你继续见证下一章节。",
      ],
      signature: "新郎 & 新娘 ♡",
    },
  };

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  const normalizeGuestName = (name) =>
    String(name || "")
      .replace(/[（(].*?[）)]/g, "")
      .replace(/\s+/g, "")
      .toLowerCase();

  const guestTypeByName = Object.entries(guestGroups).reduce((map, [type, names]) => {
    names.forEach((name) => {
      map.set(normalizeGuestName(name), type);
    });
    return map;
  }, new Map());

  const getLetterTemplate = (name) => {
    const type = guestTypeByName.get(normalizeGuestName(name));
    return letterTemplates[type] || letterTemplates.fallback;
  };

  const renderPersonalLetter = (name) => {
    const value = name.trim() || inviteData.guestName;
    const template = getLetterTemplate(value);
    const stamp = $("[data-letter-stamp]");
    const greeting = $("[data-letter-greeting]");
    const copy = $("[data-letter-copy]");
    const signature = $("[data-letter-signature]");

    if (stamp) stamp.textContent = template.stamp;
    if (greeting) greeting.textContent = template.title.replace("{name}", value);
    if (copy) {
      copy.replaceChildren(
        ...template.paragraphs.map((paragraph) => {
          const node = document.createElement("p");
          node.textContent = paragraph;
          return node;
        })
      );
    }
    if (signature) signature.textContent = template.signature;
  };

  const setGuestName = (name, options = {}) => {
    const { fallback = inviteData.guestName, sourceInput = null, syncInputs = true } = options;
    const value = name.trim() || fallback;
    renderPersonalLetter(value);
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

  const redirectRemovedClassicAnchors = () => {
    if (document.body.dataset.mode !== "classic" || window.location.hash !== "#rsvp") return;
    history.replaceState(null, "", "#ending");
    window.setTimeout(() => scrollToTarget("#ending"), 0);
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

    const windowEl = $(".projector-window", projector);
    const track = $("[data-projector-track]", projector);
    const frames = $$("[data-projector-frame]", projector);
    const slides = frames
      .filter((frame) => frame.getAttribute("aria-hidden") !== "true")
      .map((frame) => Number(frame.dataset.projectorIndex) || 0);

    if (!slides.length) return;

    let activeIndex = 0;
    let timer = null;
    let position = 0;
    let loopWidth = 0;
    let autoFrame = null;
    let lastFrameTime = 0;
    let resumeTimer = null;
    let pointerId = null;
    let dragStartX = 0;
    let dragStartPosition = 0;
    let hasDragged = false;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const setActiveSlide = (index) => {
      activeIndex = (index + slides.length) % slides.length;

      frames.forEach((frame) => {
        frame.classList.toggle("is-active", Number(frame.dataset.projectorIndex) === activeIndex);
      });
    };

    const normalizePosition = (value) => {
      if (!loopWidth) return value;
      let normalized = value % loopWidth;
      if (normalized > 0) normalized -= loopWidth;
      return normalized;
    };

    const renderTrack = () => {
      if (!track) return;
      track.style.transform = `translate3d(${position}px, 0, 0)`;
    };

    const updateLoopWidth = () => {
      if (!track) return;
      const firstFrame = frames.find((frame) => frame.getAttribute("aria-hidden") !== "true");
      const firstDuplicate = frames.find((frame) => frame.getAttribute("aria-hidden") === "true");
      loopWidth = firstFrame && firstDuplicate ? firstDuplicate.offsetLeft - firstFrame.offsetLeft : track.scrollWidth / 2;
      position = normalizePosition(position || -loopWidth);
      renderTrack();
    };

    const runAutoScroll = (timestamp) => {
      if (!lastFrameTime) lastFrameTime = timestamp;
      const elapsed = timestamp - lastFrameTime;
      lastFrameTime = timestamp;
      const pixelsPerMs = loopWidth ? loopWidth / 40000 : 0;
      position = normalizePosition(position + elapsed * pixelsPerMs);
      renderTrack();
      autoFrame = window.requestAnimationFrame(runAutoScroll);
    };

    const start = () => {
      window.clearTimeout(resumeTimer);
      if (!autoFrame && track && !reduceMotion.matches) {
        lastFrameTime = 0;
        autoFrame = window.requestAnimationFrame(runAutoScroll);
      }
      if (timer || reduceMotion.matches) return;
      timer = window.setInterval(() => setActiveSlide(activeIndex + 1), 3600);
    };

    const stop = () => {
      window.clearTimeout(resumeTimer);
      if (autoFrame) {
        window.cancelAnimationFrame(autoFrame);
        autoFrame = null;
      }
      if (!timer) return;
      window.clearInterval(timer);
      timer = null;
    };

    const resumeSoon = () => {
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(start, 1200);
    };

    frames.forEach((frame) => {
      frame.addEventListener("click", () => {
        setActiveSlide(Number(frame.dataset.projectorIndex) || 0);
      });
    });

    window.addEventListener("resize", updateLoopWidth);
    windowEl?.addEventListener("pointerdown", (event) => {
      if (event.button !== undefined && event.button !== 0) return;
      pointerId = event.pointerId;
      dragStartX = event.clientX;
      dragStartPosition = position;
      hasDragged = false;
      stop();
    });

    windowEl?.addEventListener("pointermove", (event) => {
      if (event.pointerId !== pointerId) return;
      const deltaX = event.clientX - dragStartX;
      if (Math.abs(deltaX) > 6 && !hasDragged) {
        hasDragged = true;
        projector.classList.add("is-dragging");
        windowEl.setPointerCapture?.(pointerId);
      }
      position = normalizePosition(dragStartPosition + deltaX);
      renderTrack();
      if (hasDragged && event.cancelable) event.preventDefault();
    });

    const endDrag = (event) => {
      if (event.pointerId !== pointerId) return;
      pointerId = null;
      projector.classList.remove("is-dragging");
      windowEl.releasePointerCapture?.(event.pointerId);
      resumeSoon();
    };

    windowEl?.addEventListener("pointerup", endDrag);
    windowEl?.addEventListener("pointercancel", endDrag);
    windowEl?.addEventListener(
      "click",
      (event) => {
        if (!hasDragged) return;
        event.preventDefault();
        event.stopPropagation();
        hasDragged = false;
      },
      true,
    );
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stop();
      else start();
    });

    setActiveSlide(0);
    updateLoopWidth();
    projector.setAttribute("data-projector-ready", "");
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

    const openLightbox = (trigger) => {
      title.textContent = trigger.getAttribute("data-lightbox") || "照片";
      caption.textContent = trigger.getAttribute("data-caption") || "";
      const src = trigger.getAttribute("data-lightbox-src") || "";
      if (image) {
        image.src = src;
        image.alt = trigger.getAttribute("data-lightbox") || "照片";
      }
      modal.hidden = false;
    };

    $$("[data-lightbox]").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        openLightbox(trigger);
      });

      trigger.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        openLightbox(trigger);
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

    const audio = new Audio("./assets/如果我们不曾相遇-BGM.mp3");
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.72;
    let isPlaying = false;
    let shouldPlay = true;

    const setButtonState = (pressed) => {
      buttons.forEach((button) => {
        button.setAttribute("aria-pressed", String(pressed));
        button.setAttribute("aria-label", pressed ? "关闭音乐" : "开启音乐");
      });
    };

    const stop = () => {
      shouldPlay = false;
      audio.pause();
      isPlaying = false;
      setButtonState(false);
    };

    const removeDefaultStartListeners = () => {
      document.removeEventListener("pointerdown", startAfterGesture);
      document.removeEventListener("keydown", startAfterGesture);
      document.removeEventListener("touchstart", startAfterGesture);
    };

    const start = async () => {
      shouldPlay = true;
      try {
        await audio.play();
        isPlaying = true;
        setButtonState(true);
        removeDefaultStartListeners();
      } catch {
        isPlaying = false;
        setButtonState(false);
      }
    };

    const startAfterGesture = () => {
      if (!shouldPlay || isPlaying) return;
      start();
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        if (isPlaying) {
          stop();
          return;
        }
        start();
      });
    });

    document.addEventListener("pointerdown", startAfterGesture, { passive: true });
    document.addEventListener("keydown", startAfterGesture);
    document.addEventListener("touchstart", startAfterGesture, { passive: true });
    start();
  };

  applyInviteData();
  redirectRemovedClassicAnchors();
  bindRipple();
  bindNavigation();
  bindNames();
  bindProjector();
  bindIdentity();
  bindLightbox();
  bindRsvp();
  bindAmbientSound();
})();
