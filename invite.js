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
      signature: "高建 ♡ 齐超儒 敬上",
    },
    brideFamily: {
      stamp: "Family",
      title: "亲爱的 {name}：",
      paragraphs: [
        "谢谢你一直疼爱、陪伴和牵挂着超儒。那些来自家人的支持，安静却有力量，陪她走到了今天。",
        "婚礼这一天，我们想把这份喜悦认真交到你手里，也想让你看见她被爱包围、继续出发的样子。",
        "请你来现场，和我们一起把这份团圆与祝福留在 2026 年 8 月 22 日。",
      ],
      signature: "高建 ♡ 齐超儒 敬上",
    },
    groomFamily: {
      stamp: "Family",
      title: "亲爱的 {name}：",
      paragraphs: [
        "谢谢你一直关心、照顾和支持着高建。家人的祝福，是这段旅程里最踏实的底色。",
        "从小时候到今天，很多被记住的瞬间里，都有亲人的笑声、叮嘱和牵挂。",
        "这一次，我们想邀请你到现场，亲眼见证他和超儒开启新的家庭篇章。",
      ],
      signature: "高建 ♡ 齐超儒 敬上",
    },
    brideFriend: {
      stamp: "Friend",
      title: "亲爱的 {name}：",
      paragraphs: [
        "谢谢你陪超儒走过那些闪闪发光的日子。一起笑过、聊过、认真生活过的片段，都被悄悄收进了她的故事里。",
        "朋友的陪伴常常不用说太多，却总能在关键时刻给人底气和快乐。",
        "所以这一次，我们想邀请你继续坐在故事最近的位置，见证她走向新的幸福。",
      ],
      signature: "高建 ♡ 齐超儒",
    },
    groomFriend: {
      stamp: "Friend",
      title: "亲爱的 {name}：",
      paragraphs: [
        "谢谢你一路陪高建走到今天。那些一起并肩、玩笑、认真聊过未来的时刻，都成了他人生里很重要的坐标。",
        "真正的朋友，是很多话不用解释，也知道彼此会在重要时刻出现。",
        "这一次，我们想邀请你来到现场，继续做这个重要时刻的见证者。",
      ],
      signature: "高建 ♡ 齐超儒",
    },
    colleague: {
      stamp: "Colleague",
      title: "亲爱的 {name}：",
      paragraphs: [
        "谢谢你在工作与生活里给予高建的支持和信任。并肩做事的日子，也让很多关系拥有了更珍贵的情分。",
        "婚礼是生活里很柔软的一面，我们也希望把这份喜悦与你分享。",
        "诚挚邀请你来到现场，见证我们从工作之外，走进人生新章节的一天。",
      ],
      signature: "高建 ♡ 齐超儒 敬邀",
    },
    client: {
      stamp: "Guest",
      title: "尊敬的 {name}：",
      paragraphs: [
        "感谢你一直以来的支持与信任。因为工作相识，也因为一次次真诚往来，让这份关系有了更温暖的意义。",
        "婚礼这一天，我们希望把人生里的重要喜讯，也郑重分享给你。",
        "诚邀你莅临现场，与我们共同见证这份承诺与新的开始。",
      ],
      signature: "高建 ♡ 齐超儒 敬邀",
    },
    parentFriend: {
      stamp: "Guest",
      title: "亲爱的 {name}：",
      paragraphs: [
        "谢谢你一直以来对家人的照顾、支持与关心。长辈和朋友们的祝福，让这场婚礼多了一份踏实的温度。",
        "两个年轻人即将开启新的生活，我们也想把这份喜悦真诚地分享给你。",
        "诚邀你来到现场，与我们一起见证这一日的鲜花、晚风与约定。",
      ],
      signature: "高建 ♡ 齐超儒 敬邀",
    },
    fallback: {
      stamp: "Witness",
      title: "亲爱的 {name}：",
      paragraphs: [
        "谢谢你一直以来的陪伴与支持。那些一起笑过、聊过、走过的日子，已经悄悄变成我们故事里很重要的一部分。",
        "因为在我们的人生旅程里，你曾留下属于你的那一圈涟漪。",
        "所以今天，我们想邀请你继续见证下一章节。",
      ],
      signature: "新郎 ♡ 新娘",
    },
  };

  const relationCodeTemplates = {
    "00": letterTemplates.fallback,
    "01": {
      stamp: "Family",
      title: "亲爱的 {name}：",
      paragraphs: [
        "谢谢你一直在我们身边。家人的陪伴，是很多重要时刻里最踏实、也最不用多说的底气。",
        "从日常里的照顾、牵挂，到今天这份郑重的祝福，你都让我们的故事多了一份温暖的根。",
        "所以这一天，我们想把最重要的位置留给你，请你来到现场，见证我们成为新的家人。",
      ],
      signature: "高建 ♡ 齐超儒 敬上",
    },
    "02": {
      stamp: "Sister",
      title: "亲爱的 {name}：",
      paragraphs: [
        "姐姐像是人生里很早出现的一盏灯，见过我们的任性、认真，也见过我们慢慢长大的样子。",
        "很多关心不一定说得很满，却总在需要的时候稳稳地在场。谢谢你把爱藏在一次次提醒和照顾里。",
        "婚礼这一天，想请你继续站在离我们很近的位置，见证这份新的幸福正式启程。",
      ],
      signature: "高建 ♡ 齐超儒 敬上",
    },
    "03": {
      stamp: "Sister",
      title: "亲爱的 {name}：",
      paragraphs: [
        "妹妹的存在，总让家里的快乐多一点轻盈。谢谢你一路带来的笑声、陪伴和真诚祝福。",
        "我们想把人生里这个特别的瞬间，也认真分享给你，让你看见两个相爱的人走向新的生活。",
        "请你来到现场，替我们收下鲜花、掌声和那一天最明亮的快乐。",
      ],
      signature: "高建 ♡ 齐超儒 敬上",
    },
    "04": {
      stamp: "Brother",
      title: "亲爱的 {name}：",
      paragraphs: [
        "哥哥的陪伴常常很可靠，也很安静。那些照顾、支持和关键时刻的在场，我们一直都记在心里。",
        "从家人的牵挂到今天的祝福，你让这场婚礼多了一份踏实的力量。",
        "我们诚挚邀请你来到现场，见证我们把承诺说给彼此，也说给最重要的人听。",
      ],
      signature: "高建 ♡ 齐超儒 敬上",
    },
    "05": {
      stamp: "Brother",
      title: "亲爱的 {name}：",
      paragraphs: [
        "弟弟像是家里很鲜活的一部分，有玩笑、有陪伴，也有很多不必说出口的亲近。",
        "谢谢你一路以来的支持和祝福。我们希望这个重要的日子，也有你在现场一起热闹、一起开心。",
        "请你来见证这一刻，见证我们从恋人走向新的家庭。",
      ],
      signature: "高建 ♡ 齐超儒 敬上",
    },
    "06": {
      stamp: "Classmate",
      title: "亲爱的 {name}：",
      paragraphs: [
        "初中的日子好像已经很远，但那些一起长大的片段，偶尔想起还是很鲜活。",
        "谢谢你曾出现在我们青春很早的章节里。那些简单、热闹、带着少年气的记忆，都成了故事的一部分。",
        "这一次，想邀请你来到现场，见证我们在人生新的阶段里，认真走向彼此。",
      ],
      signature: "高建 ♡ 齐超儒",
    },
    "07": {
      stamp: "Classmate",
      title: "亲爱的 {name}：",
      paragraphs: [
        "高中像一段热烈又明亮的时光，很多并肩努力、开怀大笑的瞬间，到现在依然值得回头看。",
        "谢谢你曾陪我们走过那段青春。时间往前走，但老同学带来的亲切感一直很特别。",
        "婚礼这一天，想请你来现场，继续见证我们人生里又一个重要答案。",
      ],
      signature: "高建 ♡ 齐超儒",
    },
    "08": {
      stamp: "Classmate",
      title: "亲爱的 {name}：",
      paragraphs: [
        "大学里的相遇，总带着自由、热闹和一点点冒险。那些一起上课、聊天、生活过的片段，都很珍贵。",
        "谢谢你陪我们走过更靠近成年世界的一段路，也让青春有了更多可以被想起的画面。",
        "这一次，我们想邀请你来现场，见证我们把喜欢与承诺，认真写进未来。",
      ],
      signature: "高建 ♡ 齐超儒",
    },
    "09": {
      stamp: "Classmate",
      title: "亲爱的 {name}：",
      paragraphs: [
        "研究生阶段的相识，常常多了一份并肩前行的默契。一起讨论、赶路、面对压力的日子，都不算轻。",
        "也正因为如此，那些互相理解和支持，才显得格外难得。谢谢你成为这段经历里温暖的一部分。",
        "婚礼这一天，想邀请你来见证我们从各自努力的人生里，走向共同的下一程。",
      ],
      signature: "高建 ♡ 齐超儒",
    },
    "10": {
      stamp: "Friend",
      title: "亲爱的 {name}：",
      paragraphs: [
        "曾经一起工作的日子，让我们在很多具体的事情里认识彼此，也慢慢有了工作之外的情分。",
        "谢谢你曾经的并肩、支持和照应。那些共同经历过的忙碌与玩笑，都是很真实的缘分。",
        "这一次，想把婚礼的喜悦分享给你，请你来到现场，见证我们人生里的新章节。",
      ],
      signature: "高建 ♡ 齐超儒 敬邀",
    },
    "11": {
      stamp: "Colleague",
      title: "亲爱的 {name}：",
      paragraphs: [
        "谢谢你在现在的工作与生活里给予我们的支持。并肩做事的日子，让很多普通日常也有了温度。",
        "婚礼是工作之外更柔软的一面，我们也想把这份重要的喜讯，真诚地分享给你。",
        "诚挚邀请你来到现场，见证我们把生活翻到新的篇章。",
      ],
      signature: "高建 ♡ 齐超儒 敬邀",
    },
    "12": {
      stamp: "Old Friend",
      title: "亲爱的 {name}：",
      paragraphs: [
        "发小之间有一种很特别的默契：很多故事不用从头解释，很多糗事也不用再假装忘记。",
        "谢谢你陪我们走过那么早的时光。那些一起长大、一起玩闹的片段，早就变成很亲近的底色。",
        "这一次，想请你继续见证我们人生里的大事，来现场一起笑、一起闹，也一起祝福。",
      ],
      signature: "高建 ♡ 齐超儒",
    },
  };

  const missionWords = [
    "BRILLIANT",
    "RADIANT",
    "GRACEFUL",
    "GOLDEN",
    "KIND",
    "LOVELY",
    "SPARKLING",
    "WONDERFUL",
    "CHARMING",
    "STELLAR",
    "BELOVED",
    "GENEROUS",
  ];

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  const normalizeGuestName = (name) =>
    String(name || "")
      .replace(/[（(].*?[）)]/g, "")
      .replace(/\s+/g, "")
      .toLowerCase();

  const normalizeRelationCode = (code) => {
    const value = String(code || "").trim();
    if (!/^\d{1,2}$/.test(value)) return "";
    return value.padStart(2, "0");
  };

  const readInviteParams = () => {
    const params = new URLSearchParams(window.location.search);
    const hashQuery = window.location.hash.includes("?") ? window.location.hash.split("?").slice(1).join("?") : "";

    if (hashQuery) {
      new URLSearchParams(hashQuery).forEach((value, key) => {
        if (!params.has(key)) params.set(key, value);
      });
    }

    return {
      code: normalizeRelationCode(params.get("code") || params.get("relation")),
      debug: params.get("debug") === "1",
      name: String(params.get("name") || params.get("guest") || "").trim(),
    };
  };

  const inviteParams = readInviteParams();
  const witnessFlowScenes = [
    "#secret-letter",
    "#identity-check",
    "#identity-denied",
    "#personal-letter",
    "#hall-01",
    "#mission",
    "#mission-accepted",
  ];
  const unlockedWitnessScenes = new Set(["#secret-letter"]);

  const isWitnessFlowLocked = () => document.body.dataset.mode === "witness" && !inviteParams.debug;

  const updateWitnessNavState = () => {
    if (!isWitnessFlowLocked()) return;
    $$(".nav-drawer a").forEach((link) => {
      const target = link.getAttribute("href") || "";
      const isUnlocked = unlockedWitnessScenes.has(target);
      link.classList.toggle("is-locked", !isUnlocked);
      link.setAttribute("aria-disabled", String(!isUnlocked));
    });
  };

  const unlockWitnessScene = (selector) => {
    const target = $(selector);
    if (!target) return null;
    if (isWitnessFlowLocked() && witnessFlowScenes.includes(selector)) {
      unlockedWitnessScenes.add(selector);
    }
    target.hidden = false;
    target.dispatchEvent(new CustomEvent("witness:scene-unlocked", { bubbles: true }));
    updateWitnessNavState();
    return target;
  };

  const initWitnessFlow = () => {
    if (document.body.dataset.mode !== "witness") return;
    document.body.classList.toggle("is-debug-flow", inviteParams.debug);
    if (!isWitnessFlowLocked()) return;

    document.body.classList.add("is-locked-flow");
    witnessFlowScenes.forEach((selector, index) => {
      const scene = $(selector);
      if (!scene) return;
      scene.hidden = index !== 0;
    });
    updateWitnessNavState();
    if (window.location.hash && window.location.hash !== "#secret-letter") {
      history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
    window.setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }), 0);
  };

  const suspiciousIdentityNames = new Set(
    [
      "爸爸",
      "爸",
      "爹",
      "妈妈",
      "妈",
      "娘",
      "爷爷",
      "奶奶",
      "姥姥",
      "姥爷",
      "外公",
      "外婆",
      "祖父",
      "祖母",
      "老公",
      "老婆",
      "夫君",
      "夫人",
      "新郎",
      "新娘",
      "老丈人",
      "丈母娘",
      "岳父",
      "岳母",
    ].map((name) => normalizeGuestName(name))
  );

  const guestTypeByName = Object.entries(guestGroups).reduce((map, [type, names]) => {
    names.forEach((name) => {
      map.set(normalizeGuestName(name), type);
    });
    return map;
  }, new Map());

  const getLetterTemplate = (name) => {
    if (inviteParams.code && relationCodeTemplates[inviteParams.code]) {
      return relationCodeTemplates[inviteParams.code];
    }
    const type = guestTypeByName.get(normalizeGuestName(name));
    return letterTemplates[type] || letterTemplates.fallback;
  };

  const getNameHash = (name) =>
    Array.from(normalizeGuestName(name) || inviteData.guestName).reduce((total, char) => total + char.charCodeAt(0), 0);

  const looksLikeGuestName = (name) => /[\u4e00-\u9fffA-Za-z]/.test(normalizeGuestName(name));

  const renderMissionCode = (name) => {
    const codeNode = $("[data-mission-code]");
    if (!codeNode) return;
    const hash = getNameHash(name);
    const word = missionWords[hash % missionWords.length];
    codeNode.textContent = word.toLowerCase();
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
    renderMissionCode(value);
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
    setGuestName(inviteParams.name || inviteData.guestName);
  };

  const scrollToTarget = (selector, options = {}) => {
    const { unlock = true } = options;
    const target = unlock ? unlockWitnessScene(selector) : $(selector);
    if (!target) return;
    const stack = $(".screen-stack");
    if (stack?.contains(target)) {
      stack.scrollTo({
        top: target.offsetTop,
        left: 0,
        behavior: "smooth",
      });
      return;
    }
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
      const href = link.getAttribute("href") || "";
      if (isWitnessFlowLocked() && witnessFlowScenes.includes(href) && !unlockedWitnessScenes.has(href)) {
        event.preventDefault();
        link.classList.add("is-denied");
        window.setTimeout(() => link.classList.remove("is-denied"), 520);
        return;
      }
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
      position = normalizePosition(position);
      renderTrack();
    };

    const runAutoScroll = (timestamp) => {
      if (!lastFrameTime) lastFrameTime = timestamp;
      const elapsed = timestamp - lastFrameTime;
      lastFrameTime = timestamp;
      const pixelsPerMs = loopWidth ? loopWidth / 40000 : 0;
      position = normalizePosition(position - elapsed * pixelsPerMs);
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
    document.addEventListener("witness:scene-unlocked", (event) => {
      if (!event.target.contains(projector)) return;
      updateLoopWidth();
      start();
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
    const nameInput = $('input[name="guestName"]', form);
    const alertNode = $("[data-identity-alert]", form);

    const showIdentityAlert = (message) => {
      if (alertNode) {
        alertNode.textContent = message;
        alertNode.hidden = false;
      }
      form.classList.remove("is-alerting");
      void form.offsetWidth;
      form.classList.add("is-alerting");
      nameInput?.focus();
      window.setTimeout(() => form.classList.remove("is-alerting"), 620);
    };

    const clearIdentityAlert = () => {
      if (!alertNode) return;
      alertNode.hidden = true;
      alertNode.textContent = "";
    };

    nameInput?.addEventListener("input", clearIdentityAlert);

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
      const rawName = String(formData.get("guestName") || "");
      const guestName = rawName.trim();
      const normalizedName = normalizeGuestName(guestName);

      if (formData.get("identity") === "other") {
        const denied = $("#identity-denied");
        if (denied) denied.hidden = false;
        scrollToTarget("#identity-denied");
        return;
      }

      if (!normalizedName) {
        showIdentityAlert("这封信需要知道真正的收件人姓名，先写下你的名字吧。");
        return;
      }

      if (!looksLikeGuestName(guestName)) {
        showIdentityAlert("这个名字看起来不像真正的收件人。请认真写下你的名字，信封才会继续展开。");
        return;
      }

      if (suspiciousIdentityNames.has(normalizedName)) {
        showIdentityAlert("嗯？这个称呼有点可疑。请认真写下你的名字，不要趁机占便宜。");
        return;
      }

      clearIdentityAlert();
      setGuestName(guestName, {
        fallback: inviteData.guestName,
      });

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

  const bindPassphrase = () => {
    const opener = $("[data-passphrase-open]") || $("#identity-denied .sealed-envelope");
    const form = $("[data-passphrase-form]");
    if (!opener || !form) return;
    const layout = opener.closest(".denied-layout");

    const input = $('input[name="passphrase"]', form);
    const result = $("[data-passphrase-result]", form);
    const submitButton = $('button[type="submit"]', form);

    const showResult = (message, state) => {
      if (result) {
        result.textContent = message;
        result.dataset.state = state;
      }
      form.classList.remove("is-wrong", "is-unlocked");
      if (state === "wrong") {
        form.classList.add("is-wrong");
        window.setTimeout(() => form.classList.remove("is-wrong"), 620);
      }
      if (state === "success") form.classList.add("is-unlocked");
    };

    opener.addEventListener("click", () => {
      form.hidden = false;
      form.classList.add("is-open");
      layout?.classList.add("has-passphrase");
      showResult("纸缝里露出一行暗号：天官赐福。", "hint");
      window.setTimeout(() => input?.focus(), 140);
    });

    input?.addEventListener("input", () => {
      if (!result || result.dataset.state !== "wrong") return;
      showResult("可以继续对暗号。", "hint");
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const answer = normalizeGuestName(input?.value || "");
      if (answer !== normalizeGuestName("百无禁忌")) {
        showResult("封印轻轻晃了一下：似乎还差一点。可以继续作答，也可以请本人来开启。", "wrong");
        input?.focus();
        input?.select();
        return;
      }

      setGuestName("神秘人", {
        fallback: "神秘人",
      });
      opener.classList.add("is-unlocked");
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "信封开启中";
      }
      showResult("暗号正确。神秘人通行，信件正在为你展开。", "success");
      const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 160 : 920;
      window.setTimeout(() => scrollToTarget("#personal-letter"), delay);
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
  initWitnessFlow();
  bindRipple();
  bindNavigation();
  bindNames();
  bindProjector();
  bindIdentity();
  bindPassphrase();
  bindLightbox();
  bindRsvp();
  bindAmbientSound();
})();
