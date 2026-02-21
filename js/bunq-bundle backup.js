(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // src/js/shims/three.js
  var require_three = __commonJS({
    "src/js/shims/three.js"(exports, module) {
      var THREE5 = window.THREE;
      module.exports = THREE5;
    }
  });

  // src/js/shims/gsap.js
  var require_gsap = __commonJS({
    "src/js/shims/gsap.js"(exports, module) {
      var gsap8 = window.gsap;
      module.exports = gsap8;
      module.exports.default = gsap8;
    }
  });

  // src/js/shims/gsap-scrolltrigger.js
  var require_gsap_scrolltrigger = __commonJS({
    "src/js/shims/gsap-scrolltrigger.js"(exports, module) {
      var ScrollTrigger2 = window.ScrollTrigger;
      module.exports = ScrollTrigger2;
      module.exports.default = ScrollTrigger2;
    }
  });

  // src/js/shims/lenis.js
  var require_lenis = __commonJS({
    "src/js/shims/lenis.js"(exports, module) {
      var Lenis2 = window.Lenis;
      module.exports = Lenis2;
      module.exports.default = Lenis2;
    }
  });

  // src/js/shims/gsap-draggable.js
  var require_gsap_draggable = __commonJS({
    "src/js/shims/gsap-draggable.js"(exports, module) {
      var Draggable2 = window.Draggable;
      module.exports = Draggable2;
      module.exports.default = Draggable2;
    }
  });

  // src/js/modules.js
  var THREE4 = __toESM(require_three());

  // src/js/three-addons/libs/stats.module.js
  var Stats = function() {
    var mode = 0;
    var container2 = document.createElement("div");
    container2.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";
    container2.addEventListener("click", function(event) {
      event.preventDefault();
      showPanel(++mode % container2.children.length);
    }, false);
    function addPanel(panel) {
      container2.appendChild(panel.dom);
      return panel;
    }
    function showPanel(id) {
      for (var i = 0; i < container2.children.length; i++) {
        container2.children[i].style.display = i === id ? "block" : "none";
      }
      mode = id;
    }
    var beginTime = (performance || Date).now(), prevTime = beginTime, frames = 0;
    var fpsPanel = addPanel(new Stats.Panel("FPS", "#0ff", "#002"));
    var msPanel = addPanel(new Stats.Panel("MS", "#0f0", "#020"));
    if (self.performance && self.performance.memory) {
      var memPanel = addPanel(new Stats.Panel("MB", "#f08", "#201"));
    }
    showPanel(0);
    return {
      REVISION: 16,
      dom: container2,
      addPanel,
      showPanel,
      begin: function() {
        beginTime = (performance || Date).now();
      },
      end: function() {
        frames++;
        var time = (performance || Date).now();
        msPanel.update(time - beginTime, 200);
        if (time >= prevTime + 1e3) {
          fpsPanel.update(frames * 1e3 / (time - prevTime), 100);
          prevTime = time;
          frames = 0;
          if (memPanel) {
            var memory = performance.memory;
            memPanel.update(memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576);
          }
        }
        return time;
      },
      update: function() {
        beginTime = this.end();
      },
      // Backwards Compatibility
      domElement: container2,
      setMode: showPanel
    };
  };
  Stats.Panel = function(name, fg, bg) {
    var min = Infinity, max = 0, round = Math.round;
    var PR = round(window.devicePixelRatio || 1);
    var WIDTH = 80 * PR, HEIGHT = 48 * PR, TEXT_X = 3 * PR, TEXT_Y = 2 * PR, GRAPH_X = 3 * PR, GRAPH_Y = 15 * PR, GRAPH_WIDTH = 74 * PR, GRAPH_HEIGHT = 30 * PR;
    var canvas = document.createElement("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    canvas.style.cssText = "width:80px;height:48px";
    var context = canvas.getContext("2d");
    context.font = "bold " + 9 * PR + "px Helvetica,Arial,sans-serif";
    context.textBaseline = "top";
    context.fillStyle = bg;
    context.fillRect(0, 0, WIDTH, HEIGHT);
    context.fillStyle = fg;
    context.fillText(name, TEXT_X, TEXT_Y);
    context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);
    context.fillStyle = bg;
    context.globalAlpha = 0.9;
    context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);
    return {
      dom: canvas,
      update: function(value, maxValue) {
        min = Math.min(min, value);
        max = Math.max(max, value);
        context.fillStyle = bg;
        context.globalAlpha = 1;
        context.fillRect(0, 0, WIDTH, GRAPH_Y);
        context.fillStyle = fg;
        context.fillText(round(value) + " " + name + " (" + round(min) + "-" + round(max) + ")", TEXT_X, TEXT_Y);
        context.drawImage(canvas, GRAPH_X + PR, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT, GRAPH_X, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT);
        context.fillRect(GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, GRAPH_HEIGHT);
        context.fillStyle = bg;
        context.globalAlpha = 0.9;
        context.fillRect(GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, round((1 - value / maxValue) * GRAPH_HEIGHT));
      }
    };
  };
  var stats_module_default = Stats;

  // src/js/modules.js
  var import_gsap_3_127 = __toESM(require_gsap());
  var import_ScrollTrigger = __toESM(require_gsap_scrolltrigger());
  var import_lenis = __toESM(require_lenis());

  // src/js/settings.js
  var Config = {
    System: {
      desktopBreakpoint: 1024
    },
    Mountain: {
      snowCount: 500,
      snowArea: { x: 0.5, y: 0.5, z: 0.5 },
      screenWidth: 0.15,
      screenHeight: 0.15,
      screenLightIntensity: 500,
      videoSampleResolution: { w: 4, h: 4 },
      lightUpdateSkipThreshold: 0.1,
      // Skip if frame time > 100ms
      snowFallSpeed: 0.1,
      snowSway: 1e-3,
      snowWindX: 0.03,
      snowWindZ: 0.1,
      cameraFovDesktop: 25,
      cameraFovMobile: 40,
      bgPlaneHeightDesktop: 0.7,
      bgPlaneHeightMobile: 1
    },
    Grass: {
      planeSize: 30,
      scrollNormPerPixel: 5e-4,
      maxGrassCount: 25e3,
      mobileMaxGrassCount: 15e3,
      mobileDPR: 1,
      // Force lower resolution on mobile
      minDPR: 1,
      // Absolute minimum DPR
      bladeWidth: 0.3,
      bladeHeight: 1.2,
      maxWindOffset: 1,
      // Cap wind displacement to 1.2x height
      bladeSegments: 1,
      taperFactor: 0.05,
      camera: {
        fov: 75,
        near: 0.1,
        far: 1e3,
        position: [0, 20, 0],
        lookAt: [0, 0, 0]
      },
      uniforms: {
        turbulenceAmplitude: 0.5,
        turbulenceFrequency: 0.2,
        windStrength: 0.8,
        trailDecay: 0.1,
        diffusion: 0,
        advection: 1,
        injectionRadius: 0.03,
        injectionStrength: 10,
        injectionStrengthMax: 1,
        fieldResolution: 16,
        glowThreshold: 0.03,
        glowBoost: 0.2
      }
    }
  };

  // src/js/utils/disposables.js
  function initDisposables() {
    window._disposables = [];
    window.addDisposable = (callback) => {
      if (typeof callback === "function") {
        window._disposables.push(callback);
      }
    };
    window.cleanupOnLeave = () => {
      if (window._disposables && window._disposables.length) {
        console.log(
          `[Disposables] Cleaning up ${window._disposables.length} items...`
        );
        window._disposables.forEach((fn) => {
          try {
            fn();
          } catch (err) {
            console.warn("[Disposables] Error during cleanup:", err);
          }
        });
      }
      window._disposables = [];
    };
    console.log("[Utils] Disposable system initialized");
  }

  // src/js/utils/observers.js
  function initObserverHub() {
    const observers = /* @__PURE__ */ new Map();
    function getObserverKey(opts) {
      return JSON.stringify({
        root: opts.root ? opts.root.id || "window" : null,
        rootMargin: opts.rootMargin || "0px",
        threshold: opts.threshold || 0
      });
    }
    window.observeWith = (el, opts = {}, onIntersect) => {
      if (!el) return;
      if (!opts.threshold) opts.threshold = 0;
      if (!opts.rootMargin) opts.rootMargin = "0px";
      const key = getObserverKey(opts);
      let observer;
      if (observers.has(key)) {
        observer = observers.get(key);
      } else {
        observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.target._onIntersect) {
              entry.target._onIntersect(entry);
            }
          });
        }, opts);
        observers.set(key, observer);
      }
      el._onIntersect = onIntersect;
      observer.observe(el);
      if (window.addDisposable) {
        window.addDisposable(() => {
          if (el && observer) observer.unobserve(el);
          if (el) delete el._onIntersect;
        });
      }
      return observer;
    };
    console.log("[Utils] Observer Hub initialized");
  }

  // src/js/utils/visibility.js
  var import_gsap_3_12 = __toESM(require_gsap());
  function initPageVisibility(lenisInstance) {
    function handleVisibilityChange() {
      if (document.hidden) {
        console.log("[Visibility] Hidden - Pausing engine");
        import_gsap_3_12.default.ticker.sleep();
        if (lenisInstance) lenisInstance.stop();
      } else {
        console.log("[Visibility] Visible - Resuming engine");
        import_gsap_3_12.default.ticker.wake();
        if (lenisInstance) lenisInstance.start();
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange);
    if (window.addDisposable) {
      window.addDisposable(() => {
      });
    }
    console.log("[Utils] Page Visibility Manager initialized");
  }

  // src/js/utils/badge.js
  function initBadgeRemover() {
    if (window.__badgeRemoverInitialized) return;
    window.__badgeRemoverInitialized = true;
    const intervalTime = 100;
    const initialDuration = 2e3;
    const postLoadDuration = 2e3;
    const applyStyles = function(intervalId, phase) {
      const elements = document.getElementsByClassName("w-webflow-badge");
      let allStylesApplied = true;
      for (let element of elements) {
        element.style.setProperty("display", "none", "important");
        element.style.setProperty("opacity", "0", "important");
        element.style.setProperty("max-width", "0", "important");
        element.style.setProperty("max-height", "0", "important");
        const computedStyle = window.getComputedStyle(element);
        const isDisplayNone = computedStyle.display === "none";
        const isOpacityZero = computedStyle.opacity === "0";
        const isMaxWidthZero = computedStyle.maxWidth === "0px";
        const isMaxHeightZero = computedStyle.maxHeight === "0px";
        if (!(isDisplayNone && isOpacityZero && isMaxWidthZero && isMaxHeightZero)) {
          allStylesApplied = false;
        }
      }
      if (allStylesApplied && elements.length > 0) {
        console.log(`[BadgeRemover] Success in ${phase} phase`);
        clearInterval(intervalId);
      }
    };
    function startInitial() {
      const initialIntervalId = setInterval(
        () => applyStyles(initialIntervalId, "initial"),
        intervalTime
      );
      setTimeout(function() {
        clearInterval(initialIntervalId);
      }, initialDuration);
      applyStyles(initialIntervalId, "initial");
    }
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", startInitial);
    } else {
      startInitial();
    }
    window.addEventListener("load", function() {
      const postLoadIntervalId = setInterval(
        () => applyStyles(postLoadIntervalId, "post-load"),
        intervalTime
      );
      setTimeout(function() {
        clearInterval(postLoadIntervalId);
      }, postLoadDuration);
      applyStyles(postLoadIntervalId, "post-load");
    });
  }

  // src/js/utils/title.js
  function initPageTitleChanger() {
    const documentTitleStore = document.title;
    const documentTitleOnBlur = "Wait! There's still more \u{1F440}";
    window.addEventListener("focus", () => {
      document.title = documentTitleStore;
    });
    window.addEventListener("blur", () => {
      document.title = documentTitleOnBlur;
    });
    console.log("[Utils] Page Title Changer initialized");
  }

  // src/js/utils/QualityManager.js
  var QualityProfiles = {
    ULTRA: {
      tier: "ULTRA",
      grassCount: 24e3,
      windResolution: 64,
      bladeSegments: 1,
      maxDPR: 2,
      shadows: true,
      postProcessing: false,
      useDynamicLight: true,
      enableGrass: true,
      clumpSize: 3,
      clumpSpread: 2
    },
    HIGH: {
      tier: "HIGH",
      grassCount: 16384,
      windResolution: 64,
      bladeSegments: 1,
      maxDPR: 1.5,
      shadows: false,
      postProcessing: false,
      useDynamicLight: true,
      enableGrass: true,
      clumpSize: 5,
      clumpSpread: 4
    },
    MEDIUM: {
      tier: "MEDIUM",
      grassCount: 8196,
      windResolution: 32,
      bladeSegments: 1,
      maxDPR: 1,
      shadows: false,
      postProcessing: false,
      useDynamicLight: true,
      enableGrass: true,
      clumpSize: 10,
      clumpSpread: 5
    },
    LOW: {
      tier: "LOW",
      grassCount: 2048,
      windResolution: 16,
      bladeSegments: 1,
      maxDPR: 0.8,
      shadows: false,
      postProcessing: false,
      useDynamicLight: false,
      enableGrass: false,
      clumpSize: 15,
      clumpSpread: 7
    },
    POTATO: {
      tier: "POTATO",
      grassCount: 1024,
      windResolution: 16,
      bladeSegments: 1,
      maxDPR: 0.6,
      shadows: false,
      postProcessing: false,
      useDynamicLight: false,
      enableGrass: false,
      clumpSize: 15,
      clumpSpread: 12
    }
  };
  var QualityManager = class {
    constructor() {
      this.currentTier = "HIGH";
      this.listeners = /* @__PURE__ */ new Set();
      this.detectHardware();
    }
    get tier() {
      return this.currentTier;
    }
    detectHardware() {
      const isMobile = window.innerWidth < 768;
      const isRetina = window.devicePixelRatio > 1.5;
      if (isMobile) {
        this.setTier("MEDIUM");
      } else if (isRetina) {
        this.setTier("HIGH");
      } else {
        this.setTier("MEDIUM");
      }
      console.log(`[QualityManager] Initial Hardware Detection: ${this.currentTier}`);
    }
    setTier(tierName) {
      if (!QualityProfiles[tierName]) {
        console.warn(`[QualityManager] Invalid tier: ${tierName}`);
        return;
      }
      if (this.currentTier === tierName) return;
      this.currentTier = tierName;
      const profile = QualityProfiles[tierName];
      console.log(`[QualityManager] Setting Tier: ${tierName}`, profile);
      this.listeners.forEach((callback) => callback(profile));
    }
    getProfile() {
      return QualityProfiles[this.currentTier];
    }
    subscribe(callback) {
      this.listeners.add(callback);
      callback(this.getProfile());
      return () => this.listeners.delete(callback);
    }
    // Directions: -1 (Down), 1 (Up)
    adjustQuality(direction) {
      const tiers = ["POTATO", "LOW", "MEDIUM", "HIGH", "ULTRA"];
      const currentIndex = tiers.indexOf(this.currentTier);
      let newIndex = currentIndex + direction;
      newIndex = Math.max(0, Math.min(newIndex, tiers.length - 1));
      if (newIndex !== currentIndex) {
        this.setTier(tiers[newIndex]);
        return true;
      }
      return false;
    }
  };

  // src/js/utils/PerformanceMonitor.js
  var PerformanceMonitor = class {
    constructor(qualityManager2) {
      this.qm = qualityManager2;
      this.targetFPS = 60;
      this.frameBudget = 1e3 / this.targetFPS;
      this.frames = 0;
      this.timeAccum = 0;
      this.lastTime = performance.now();
      this.avgFrameTime = 0;
      this.avgInterval = 0;
      this.consecutiveBadFrames = 0;
      this.consecutiveGoodFrames = 0;
      this.cooldown = 0;
      this.isHidden = false;
      document.addEventListener("visibilitychange", () => {
        this.isHidden = document.hidden;
        if (!this.isHidden) {
          this.reset();
        }
      });
      console.log("[PerformanceMonitor] Initialized with GPU Load Estimation");
    }
    reset() {
      this.frames = 0;
      this.timeAccum = 0;
      this.lastTime = performance.now();
      this.consecutiveBadFrames = 0;
    }
    // Call this at the START of the frame (before rendering)
    beginFrame() {
      this.frameStart = performance.now();
    }
    // Call this at the END of the frame (after renderer.render)
    endFrame() {
      const now = performance.now();
      const cpuTime = now - this.frameStart;
      const interval = now - this.lastTime;
      this.lastTime = now;
      if (this.isHidden || interval > 500) return;
      this.avgFrameTime = this.avgFrameTime * 0.95 + cpuTime * 0.05;
      this.avgInterval = this.avgInterval * 0.95 + interval * 0.05;
      this.analyze(interval, cpuTime);
    }
    // Legacy support for simple update(dt) if needed, but we prefer explicit begin/end
    update(dt) {
    }
    analyze(interval, cpuTime) {
      if (this.isBenchmarking) {
        if (this.warmupFrames > 0) {
          this.warmupFrames--;
          return;
        }
        if (this.benchmarkData && this.benchmarkData.frameTimes) {
          this.benchmarkData.frameTimes.push(interval);
        }
        return;
      }
      if (this.cooldown > 0) {
        this.cooldown -= this.avgInterval;
        return;
      }
      const isLagging = this.avgInterval > 40;
      const isGPUBound = this.avgInterval - this.avgFrameTime > 8;
      if (isLagging) {
        this.consecutiveBadFrames++;
        this.consecutiveGoodFrames = 0;
        if (this.consecutiveBadFrames > 60) {
          console.warn(
            `[Performance] Downgrade! AvgInt: ${this.avgInterval.toFixed(
              1
            )}ms. GPU Bound: ${isGPUBound}`
          );
          const changed = this.qm.adjustQuality(-1);
          if (changed) {
            this.cooldown = 2e3;
            this.reset();
          } else {
            this.consecutiveBadFrames = 0;
          }
        }
      } else if (this.avgInterval < 16.8) {
        this.consecutiveGoodFrames++;
        this.consecutiveBadFrames = 0;
      }
    }
    // === ROBUST BENCHMARKING ===
    startBenchmark() {
      console.log("[Performance] Starting Pre-flight Benchmark...");
      this.isBenchmarking = true;
      this.benchmarkData = {
        frameTimes: [],
        startTime: performance.now()
      };
      this.warmupFrames = 30;
      this.reset();
    }
    endBenchmark() {
      this.isBenchmarking = false;
      const data = this.benchmarkData.frameTimes;
      const sampleCount = data.length;
      if (sampleCount < 10) {
        console.warn(
          "[Performance] Benchmark: Not enough samples (N=" + sampleCount + "), defaulting to MEDIUM."
        );
        this.qm.setTier("MEDIUM");
        return;
      }
      data.sort((a, b) => a - b);
      const median = data[Math.floor(sampleCount * 0.5)];
      const p90 = data[Math.floor(sampleCount * 0.9)];
      const medianFPS = 1e3 / median;
      console.log(
        `[Performance] Result: Median=${median.toFixed(
          1
        )}ms (~${medianFPS.toFixed(0)} FPS), P90=${p90.toFixed(1)}ms`
      );
      const cores = navigator.hardwareConcurrency || 4;
      let maxTier = "ULTRA";
      if (cores < 4) {
        console.log(
          `[Performance] Low core count (${cores}), capping at MEDIUM.`
        );
        maxTier = "MEDIUM";
      } else if (cores < 8) {
        maxTier = "HIGH";
      }
      let targetTier = "HIGH";
      if (medianFPS < 20) {
        targetTier = "POTATO";
      } else if (medianFPS < 35) {
        targetTier = "LOW";
      } else if (medianFPS < 50) {
        targetTier = "MEDIUM";
      } else {
        targetTier = "HIGH";
      }
      if (p90 > 60 && targetTier !== "POTATO") {
        console.warn("[Performance] High P90 detected (stutter). Downgrading.");
        const tiers2 = ["POTATO", "LOW", "MEDIUM", "HIGH", "ULTRA"];
        const idx = tiers2.indexOf(targetTier);
        if (idx > 0) targetTier = tiers2[idx - 1];
      }
      const tiers = ["POTATO", "LOW", "MEDIUM", "HIGH", "ULTRA"];
      const targetIdx = tiers.indexOf(targetTier);
      const maxIdx = tiers.indexOf(maxTier);
      if (targetIdx > maxIdx) {
        console.log(
          `[Performance] Capping ${targetTier} -> ${maxTier} due to hardware.`
        );
        targetTier = maxTier;
      }
      console.log(`[Performance] Final Benchmark Tier: ${targetTier}`);
      this.qm.setTier(targetTier);
    }
  };

  // src/js/utils/VideoLoader.js
  var VideoLoader = class {
    constructor() {
      this.videos = /* @__PURE__ */ new Map();
      this.progress = 0;
      this.totalProgress = 0;
      this.onProgress = null;
      this.onComplete = null;
      this.checkInterval = null;
    }
    /**
     * Start loading a list of videos.
     * @param {Array<{id: string, src: string}>} items
     */
    load(items) {
      if (!items || items.length === 0) {
        if (this.onComplete) this.onComplete();
        return;
      }
      items.forEach((item) => {
        const video = document.createElement("video");
        video.src = item.src;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.preload = "auto";
        video.crossOrigin = "anonymous";
        this.videos.set(item.id, {
          element: video,
          loaded: 0,
          ready: false,
          error: false
        });
        video.onerror = () => {
          console.error(
            `[VideoLoader] Failed to load ${item.id}: ${video.error ? video.error.message : "Unknown"}`
          );
          const vData = this.videos.get(item.id);
          if (vData) {
            vData.error = true;
            vData.loaded = 100;
            vData.ready = true;
          }
        };
        video.load();
      });
      this.startPolling();
    }
    getVideo(id) {
      const vData = this.videos.get(id);
      return vData ? vData.element : null;
    }
    isReady(id) {
      const vData = this.videos.get(id);
      return vData ? vData.ready : false;
    }
    checkBuffer(video) {
      if (!video) return 100;
      if (video.error) return 100;
      if (video.readyState < 2) return 0;
      let percentLoaded = 0;
      const duration = video.duration || 1;
      for (let i = 0; i < video.buffered.length; i++) {
        const start = video.buffered.start(i);
        const end = video.buffered.end(i);
        if (end > duration * 0.9) {
          percentLoaded = 100;
          break;
        }
        if (start <= 0.1) {
          percentLoaded = Math.min(100, end / duration * 100);
        }
      }
      if (video.readyState === 4 && percentLoaded < 20) {
        percentLoaded = Math.max(percentLoaded, 50);
      }
      return percentLoaded;
    }
    startPolling() {
      if (this.checkInterval) clearInterval(this.checkInterval);
      this.checkInterval = setInterval(() => {
        let total = 0;
        let allReady = true;
        this.videos.forEach((vData, id) => {
          if (vData.error) {
            total += 100;
            return;
          }
          const pct = this.checkBuffer(vData.element);
          vData.loaded = pct;
          total += pct;
          const isReadyState4 = vData.element.readyState === 4;
          const isBufferedEnough = pct >= 50;
          if (!vData.ready) {
            if (isBufferedEnough && isReadyState4 || pct >= 98) {
              vData.ready = true;
            } else {
              allReady = false;
            }
          }
        });
        this.progress = total / this.videos.size;
        if (this.onProgress) {
          this.onProgress(this.progress);
        }
        if (allReady) {
          this.finish();
        }
      }, 100);
    }
    finish() {
      if (this.checkInterval) {
        clearInterval(this.checkInterval);
        this.checkInterval = null;
      }
      if (this.onComplete) {
        this.onComplete();
      }
    }
    destroy() {
      if (this.checkInterval) clearInterval(this.checkInterval);
      this.videos.clear();
    }
  };

  // src/js/utils/liquidGL.js
  function debounce(fn, wait) {
    let t;
    return (...a) => {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(null, a), wait);
    };
  }
  function effectiveZ(el) {
    let node = el;
    while (node && node !== document.body) {
      const style = window.getComputedStyle(node);
      if (style.position !== "static" && style.zIndex !== "auto") {
        const z = parseInt(style.zIndex, 10);
        if (!isNaN(z)) return z;
      }
      node = node.parentElement;
    }
    return 0;
  }
  function compileShader(gl, type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src.trim());
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.error("Shader error", gl.getShaderInfoLog(s));
      gl.deleteShader(s);
      return null;
    }
    return s;
  }
  function createProgram(gl, vsSource, fsSource) {
    const vs = compileShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = compileShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return null;
    const p = gl.createProgram();
    gl.attachShader(p, vs);
    gl.attachShader(p, fs);
    gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
      console.error("Program link error", gl.getProgramInfoLog(p));
      return null;
    }
    return p;
  }
  var liquidGLRenderer = class {
    constructor(snapshotSelector, snapshotResolution = 1) {
      this.canvas = document.createElement("canvas");
      this.canvas.style.cssText = `position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;`;
      this.canvas.setAttribute("data-liquid-ignore", "");
      document.body.appendChild(this.canvas);
      const ctxAttribs = {
        alpha: true,
        premultipliedAlpha: true,
        preserveDrawingBuffer: true
      };
      this.gl = this.canvas.getContext("webgl2", ctxAttribs) || this.canvas.getContext("webgl", ctxAttribs) || this.canvas.getContext("experimental-webgl", ctxAttribs);
      if (!this.gl) throw new Error("liquidGL: WebGL unavailable");
      this.lenses = [];
      this.texture = null;
      this.textureWidth = 0;
      this.textureHeight = 0;
      this.scaleFactor = 1;
      this.startTime = Date.now();
      this._scrollUpdateCounter = 0;
      this._initGL();
      this.snapshotTarget = document.querySelector(snapshotSelector) || document.body;
      if (!this.snapshotTarget) this.snapshotTarget = document.body;
      this._isScrolling = false;
      let lastScrollY = window.scrollY;
      let scrollTimeout;
      const scrollCheck = () => {
        if (window.scrollY !== lastScrollY) {
          this._isScrolling = true;
          lastScrollY = window.scrollY;
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            this._isScrolling = false;
          }, 200);
        }
        requestAnimationFrame(scrollCheck);
      };
      requestAnimationFrame(scrollCheck);
      const onResize2 = debounce(() => {
        if (this._capturing || this._isScrolling) return;
        if (window.visualViewport && window.visualViewport.scale !== 1) {
          return;
        }
        this._dynamicNodes.forEach((node) => {
          const meta = this._dynMeta.get(node.el);
          if (meta) {
            meta.needsRecapture = true;
            meta.prevDrawRect = null;
            meta.lastCapture = null;
          }
        });
        this._resizeCanvas();
        this.lenses.forEach((l) => l.updateMetrics());
        this.captureSnapshot();
      }, 250);
      window.addEventListener("resize", onResize2, { passive: true });
      if ("ResizeObserver" in window) {
        new ResizeObserver(onResize2).observe(this.snapshotTarget);
      }
      this._dynamicNodes = [];
      this._dynMeta = /* @__PURE__ */ new WeakMap();
      this._lastDynamicUpdate = 0;
      const styleEl = document.createElement("style");
      styleEl.id = "liquid-gl-dynamic-styles";
      document.head.appendChild(styleEl);
      this._dynamicStyleSheet = styleEl.sheet;
      this._resizeCanvas();
      this.captureSnapshot();
      this._pendingReveal = [];
      this._videoNodes = Array.from(
        this.snapshotTarget.querySelectorAll("video")
      );
      this._videoNodes = this._videoNodes.filter((v) => !this._isIgnored(v));
      this._tmpCanvas = document.createElement("canvas");
      this._tmpCtx = this._tmpCanvas.getContext("2d");
      this.canvas.style.opacity = "0";
      this._snapshotResolution = Math.max(0.1, Math.min(3, snapshotResolution));
      this.useExternalTicker = false;
      this._workerEnabled = typeof OffscreenCanvas !== "undefined" && typeof Worker !== "undefined" && typeof ImageBitmap !== "undefined";
      if (this._workerEnabled) {
        const workerSrc = `
          /* dynamic-element worker (runs in its own thread) */
          self.onmessage = async (e) => {
            const { id, width, height, snap, dyn } = e.data;
            const off = new OffscreenCanvas(width, height);
            const ctx = off.getContext('2d');

            ctx.drawImage(snap, 0, 0, width, height);
            ctx.drawImage(dyn, 0, 0, width, height);

            const bmp = await off.transferToImageBitmap();
            self.postMessage({ id, bmp }, [bmp]);
          };
        `;
        const blob = new Blob([workerSrc], { type: "application/javascript" });
        this._dynWorker = new Worker(URL.createObjectURL(blob), {
          type: "module"
        });
        this._dynJobs = /* @__PURE__ */ new Map();
        this._dynWorker.onmessage = (e) => {
          const { id, bmp } = e.data;
          const meta = this._dynJobs.get(id);
          if (!meta) return;
          this._dynJobs.delete(id);
          const { x, y, w, h } = meta;
          const gl = this.gl;
          gl.bindTexture(gl.TEXTURE_2D, this.texture);
          gl.texSubImage2D(
            gl.TEXTURE_2D,
            0,
            x,
            y,
            gl.RGBA,
            gl.UNSIGNED_BYTE,
            bmp
          );
        };
      }
    }
    /* ----------------------------- */
    _initGL() {
      const vsSource = `
        attribute vec2 a_position;
        varying vec2 v_uv;
        void main(){
          v_uv = (a_position + 1.0) * 0.5;
          gl_Position = vec4(a_position, 0.0, 1.0);
        }`;
      const fsSource = `
        precision mediump float;
        varying vec2 v_uv;
        uniform sampler2D u_tex;
        uniform vec2  u_resolution;
        uniform vec2  u_textureResolution;
        uniform vec4  u_bounds;
        uniform float u_refraction;
        uniform float u_bevelDepth;
        uniform float u_bevelWidth;
        uniform float u_frost;
        uniform float u_radius;
        uniform float u_time;
        uniform bool  u_specular;
        uniform float u_revealProgress;
        uniform int   u_revealType;
        uniform float u_tiltX;
        uniform float u_tiltY;
        uniform float u_magnify;

        float udRoundBox( vec2 p, vec2 b, float r ) {
          return length(max(abs(p)-b+r,0.0))-r;
        }

        float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }

        float edgeFactor(vec2 uv, float radius_px){
          vec2 p_px = (uv - 0.5) * u_resolution;
          vec2 b_px = 0.5 * u_resolution;
          float d = -udRoundBox(p_px, b_px, radius_px);
          float bevel_px = u_bevelWidth * min(u_resolution.x, u_resolution.y);
          return 1.0 - smoothstep(0.0, bevel_px, d);
        }
        void main(){
          vec2 p = v_uv - 0.5;
          p.x *= u_resolution.x / u_resolution.y;

          float edge = edgeFactor(v_uv, u_radius);
          float min_dimension = min(u_resolution.x, u_resolution.y);
          float offsetAmt = (edge * u_refraction + pow(edge, 10.0) * u_bevelDepth);
          float centreBlend = smoothstep(0.15, 0.45, length(p));
          vec2 offset = normalize(p) * offsetAmt * centreBlend;

          float tiltRefractionScale = 0.05;
          vec2 tiltOffset = vec2(tan(radians(u_tiltY)), -tan(radians(u_tiltX))) * tiltRefractionScale;

          vec2 localUV = (v_uv - 0.5) / u_magnify + 0.5;
          vec2 flippedUV = vec2(localUV.x, 1.0 - localUV.y);
          vec2 mapped = u_bounds.xy + flippedUV * u_bounds.zw;
          vec2 refracted = mapped + offset - tiltOffset;

          float oob = max(max(-refracted.x, refracted.x - 1.0), max(-refracted.y, refracted.y - 1.0));
          float blend = 1.0 - smoothstep(0.0, 0.01, oob);
          vec2 sampleUV = mix(mapped, refracted, blend);

          vec4 baseCol   = texture2D(u_tex, mapped);

          vec2 texel = 1.0 / u_textureResolution;
          vec4 refrCol;

          if (u_frost > 0.0) {
              float radius = u_frost * 4.0;
              vec4 sum = vec4(0.0);
              const int SAMPLES = 16;

              for (int i = 0; i < SAMPLES; i++) {
                  float angle = random(v_uv + float(i)) * 6.283185;
                  float dist = sqrt(random(v_uv - float(i))) * radius;
                  vec2 offset = vec2(cos(angle), sin(angle)) * texel * dist;
                  sum += texture2D(u_tex, sampleUV + offset);
              }
              refrCol = sum / float(SAMPLES);
          } else {
              refrCol = texture2D(u_tex, sampleUV);
              refrCol += texture2D(u_tex, sampleUV + vec2( texel.x, 0.0));
              refrCol += texture2D(u_tex, sampleUV + vec2(-texel.x, 0.0));
              refrCol += texture2D(u_tex, sampleUV + vec2(0.0,  texel.y));
              refrCol += texture2D(u_tex, sampleUV + vec2(0.0, -texel.y));
              refrCol /= 5.0;
          }

          if (refrCol.a < 0.1) {
              refrCol = baseCol;
          }

          float diff = clamp(length(refrCol.rgb - baseCol.rgb) * 4.0, 0.0, 1.0);

          float antiHalo = (1.0 - centreBlend) * diff;

          vec4 final    = refrCol;

          vec2 p_px = (v_uv - 0.5) * u_resolution;
          vec2 b_px = 0.5 * u_resolution;
          float dmask = udRoundBox(p_px, b_px, u_radius);
          float inShape = 1.0 - step(0.0, dmask);

          if (u_specular) {
            vec2 lp1 = vec2(sin(u_time*0.2), cos(u_time*0.3))*0.6 + 0.5;
            vec2 lp2 = vec2(sin(u_time*-0.4+1.5), cos(u_time*0.25-0.5))*0.6 + 0.5;
            float h = 0.0;
            h += smoothstep(0.4,0.0,distance(v_uv, lp1))*0.1;
            h += smoothstep(0.5,0.0,distance(v_uv, lp2))*0.08;
            final.rgb += h;
          }

          if (u_revealType == 1) {
              final.rgb *= u_revealProgress;
              final.a  *= u_revealProgress;
          }

          final.rgb *= inShape;
          final.a   *= inShape;

          gl_FragColor = final;
        }`;
      this.program = createProgram(this.gl, vsSource, fsSource);
      const gl = this.gl;
      if (!this.program) throw new Error("liquidGL: Shader failed");
      const posBuf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
        gl.STATIC_DRAW
      );
      const posLoc = gl.getAttribLocation(this.program, "a_position");
      gl.enableVertexAttribArray(posLoc);
      gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
      this.u = {
        tex: gl.getUniformLocation(this.program, "u_tex"),
        res: gl.getUniformLocation(this.program, "u_resolution"),
        textureResolution: gl.getUniformLocation(
          this.program,
          "u_textureResolution"
        ),
        bounds: gl.getUniformLocation(this.program, "u_bounds"),
        refraction: gl.getUniformLocation(this.program, "u_refraction"),
        bevelDepth: gl.getUniformLocation(this.program, "u_bevelDepth"),
        bevelWidth: gl.getUniformLocation(this.program, "u_bevelWidth"),
        frost: gl.getUniformLocation(this.program, "u_frost"),
        radius: gl.getUniformLocation(this.program, "u_radius"),
        time: gl.getUniformLocation(this.program, "u_time"),
        specular: gl.getUniformLocation(this.program, "u_specular"),
        revealProgress: gl.getUniformLocation(this.program, "u_revealProgress"),
        revealType: gl.getUniformLocation(this.program, "u_revealType"),
        tiltX: gl.getUniformLocation(this.program, "u_tiltX"),
        tiltY: gl.getUniformLocation(this.program, "u_tiltY"),
        magnify: gl.getUniformLocation(this.program, "u_magnify")
      };
    }
    /* ----------------------------- */
    _resizeCanvas() {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      this.canvas.width = innerWidth * dpr;
      this.canvas.height = innerHeight * dpr;
      this.canvas.style.width = `${innerWidth}px`;
      this.canvas.style.height = `${innerHeight}px`;
      this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    }
    /* ----------------------------- */
    async captureSnapshot() {
      if (this._capturing || typeof html2canvas === "undefined") return;
      this._capturing = true;
      const undos = [];
      const attemptCapture = async (attempt = 1, maxAttempts = 3, delayMs = 500) => {
        try {
          const fullW = this.snapshotTarget.scrollWidth;
          const fullH = this.snapshotTarget.scrollHeight;
          const maxTex = this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE) || 8192;
          const MAX_MOBILE_DIM = 4096;
          const isMobileSafari = /iPad|iPhone|iPod/.test(navigator.userAgent);
          let scale = Math.min(
            this._snapshotResolution,
            maxTex / fullW,
            maxTex / fullH
          );
          if (isMobileSafari) {
            const over = Math.max(fullW, fullH) * scale / MAX_MOBILE_DIM;
            if (over > 1) scale = scale / over;
          }
          this.scaleFactor = Math.max(0.1, scale);
          this.canvas.style.visibility = "hidden";
          undos.push(() => this.canvas.style.visibility = "visible");
          const lensElements = this.lenses.flatMap((lens) => [lens.el, lens._shadowEl]).filter(Boolean);
          const ignoreElementsFunc = (element) => {
            if (!element || !element.hasAttribute) return false;
            if (element === this.canvas || lensElements.includes(element)) {
              return true;
            }
            const style = window.getComputedStyle(element);
            if (style.position === "fixed") {
              return true;
            }
            return element.hasAttribute("data-liquid-ignore") || element.closest("[data-liquid-ignore]");
          };
          const snapCanvas = await html2canvas(this.snapshotTarget, {
            allowTaint: false,
            useCORS: true,
            backgroundColor: null,
            removeContainer: true,
            width: fullW,
            height: fullH,
            scrollX: 0,
            scrollY: 0,
            scale,
            ignoreElements: ignoreElementsFunc
          });
          this._uploadTexture(snapCanvas);
          return true;
        } catch (e) {
          console.error("liquidGL snapshot failed on attempt " + attempt, e);
          if (attempt < maxAttempts) {
            console.log(
              `Retrying snapshot capture (${attempt + 1}/${maxAttempts})...`
            );
            await new Promise((resolve) => setTimeout(resolve, delayMs));
            return await attemptCapture(attempt + 1, maxAttempts, delayMs);
          } else {
            console.error("liquidGL: All snapshot attempts failed.", e);
            return false;
          }
        } finally {
          for (let i = undos.length - 1; i >= 0; i--) {
            undos[i]();
          }
          this._capturing = false;
        }
      };
      return await attemptCapture();
    }
    /* ----------------------------- */
    _uploadTexture(srcCanvas) {
      if (!srcCanvas) return;
      if (!(srcCanvas instanceof HTMLCanvasElement)) {
        const tmp = document.createElement("canvas");
        tmp.width = srcCanvas.width || 0;
        tmp.height = srcCanvas.height || 0;
        if (tmp.width === 0 || tmp.height === 0) return;
        try {
          const ctx = tmp.getContext("2d");
          ctx.drawImage(srcCanvas, 0, 0);
          srcCanvas = tmp;
        } catch (e) {
          console.warn(
            "liquidGL: Unable to convert OffscreenCanvas for upload",
            e
          );
          return;
        }
      }
      if (srcCanvas.width === 0 || srcCanvas.height === 0) return;
      this.staticSnapshotCanvas = srcCanvas;
      const gl = this.gl;
      if (!this.texture) this.texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, this.texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        srcCanvas
      );
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      this.textureWidth = srcCanvas.width;
      this.textureHeight = srcCanvas.height;
      this.render();
      if (this._pendingReveal.length) {
        this._pendingReveal.forEach((ln) => ln._reveal());
        this._pendingReveal.length = 0;
      }
    }
    /* ----------------------------- */
    addLens(element, options) {
      const lens = new liquidGLLens(this, element, options);
      this.lenses.push(lens);
      const maxZ = this._getMaxLensZ();
      if (maxZ > 0) {
        this.canvas.style.zIndex = maxZ - 1;
      }
      if (!this.texture) {
        this._pendingReveal.push(lens);
      } else {
        lens._reveal();
      }
      return lens;
    }
    /* ----------------------------- */
    render() {
      const gl = this.gl;
      if (!this.texture) return;
      if (this._isScrolling) {
        this._scrollUpdateCounter++;
      }
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(this.program);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, this.texture);
      gl.uniform1i(this.u.tex, 0);
      const time = (Date.now() - this.startTime) / 1e3;
      gl.uniform1f(this.u.time, time);
      this._updateDynamicVideos();
      this._updateDynamicNodes();
      this.lenses.forEach((lens) => {
        lens.updateMetrics();
        if (lens._mirrorActive && lens._mirrorClipUpdater) {
          lens._mirrorClipUpdater();
        }
        this._renderLens(lens);
      });
      this.lenses.forEach((ln) => {
        if (ln._mirrorActive && ln._mirrorCtx) {
          const mirror = ln._mirror;
          if (mirror.width !== this.canvas.width || mirror.height !== this.canvas.height) {
            mirror.width = this.canvas.width;
            mirror.height = this.canvas.height;
          }
          ln._mirrorCtx.drawImage(this.canvas, 0, 0);
        }
      });
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      this.lenses.forEach((ln) => {
        if (ln._mirrorActive && ln.rectPx) {
          const { left, top, width, height } = ln.rectPx;
          const expand = 2;
          const x = Math.max(0, Math.round(left * dpr) - expand);
          const y = Math.max(
            0,
            Math.round(this.canvas.height - (top + height) * dpr) - expand
          );
          const w = Math.min(
            this.canvas.width - x,
            Math.round(width * dpr) + expand * 2
          );
          const h = Math.min(
            this.canvas.height - y,
            Math.round(height * dpr) + expand * 2
          );
          if (w > 0 && h > 0) {
            gl.enable(gl.SCISSOR_TEST);
            gl.scissor(x, y, w, h);
            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.disable(gl.SCISSOR_TEST);
          }
        }
      });
    }
    /* ----------------------------- */
    _renderLens(lens) {
      const gl = this.gl;
      const rect = lens.rectPx;
      if (!rect) return;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      let overscrollY = 0;
      let overscrollX = 0;
      if (window.visualViewport) {
        overscrollX = window.visualViewport.offsetLeft;
        overscrollY = window.visualViewport.offsetTop;
      }
      const x = (rect.left + overscrollX) * dpr;
      const y = this.canvas.height - (rect.top + overscrollY + rect.height) * dpr;
      const w = rect.width * dpr;
      const h = rect.height * dpr;
      gl.viewport(x, y, w, h);
      gl.uniform2f(this.u.res, w, h);
      const docX = rect.left - this.snapshotTarget.getBoundingClientRect().left;
      const docY = rect.top - this.snapshotTarget.getBoundingClientRect().top;
      const leftUV = docX * this.scaleFactor / this.textureWidth;
      const topUV = docY * this.scaleFactor / this.textureHeight;
      const wUV = rect.width * this.scaleFactor / this.textureWidth;
      const hUV = rect.height * this.scaleFactor / this.textureHeight;
      gl.uniform4f(this.u.bounds, leftUV, topUV, wUV, hUV);
      gl.uniform2f(
        this.u.textureResolution,
        this.textureWidth,
        this.textureHeight
      );
      gl.uniform1f(this.u.refraction, lens.options.refraction);
      gl.uniform1f(this.u.bevelDepth, lens.options.bevelDepth);
      gl.uniform1f(this.u.bevelWidth, lens.options.bevelWidth);
      gl.uniform1f(this.u.frost, lens.options.frost);
      gl.uniform1f(this.u.radius, lens.radiusGl);
      gl.uniform1i(this.u.specular, lens.options.specular ? 1 : 0);
      gl.uniform1f(this.u.revealProgress, lens._revealProgress || 1);
      gl.uniform1i(this.u.revealType, lens.revealTypeIndex || 0);
      const mag = Math.max(
        1e-3,
        Math.min(
          3,
          lens.options.magnify !== void 0 ? lens.options.magnify : 1
        )
      );
      gl.uniform1f(this.u.magnify, mag);
      gl.uniform1f(this.u.tiltX, lens.tiltX || 0);
      gl.uniform1f(this.u.tiltY, lens.tiltY || 0);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
    /* ----------------------------- */
    _createRoundedRectPath(ctx, w, h, radii) {
      ctx.beginPath();
      ctx.moveTo(radii.tl, 0);
      ctx.lineTo(w - radii.tr, 0);
      ctx.arcTo(w, 0, w, radii.tr, radii.tr);
      ctx.lineTo(w, h - radii.br);
      ctx.arcTo(w, h, w - radii.br, h, radii.br);
      ctx.lineTo(radii.bl, h);
      ctx.arcTo(0, h, 0, h - radii.bl, radii.bl);
      ctx.lineTo(0, radii.tl);
      ctx.arcTo(0, 0, radii.tl, 0, radii.tl);
      ctx.closePath();
    }
    /* ----------------------------- */
    _updateDynamicVideos() {
      if (this._isScrolling && this._scrollUpdateCounter % 2 !== 0) return;
      if (!this.texture || !this.staticSnapshotCanvas || !this._videoNodes.length)
        return;
      const gl = this.gl;
      const snapRect = this.snapshotTarget.getBoundingClientRect();
      const maxLensZ = this._getMaxLensZ();
      this._videoNodes.forEach((vid) => {
        if (effectiveZ(vid) >= maxLensZ) {
          return;
        }
        if (this._isIgnored(vid) || vid.readyState < 2) return;
        const rect = vid.getBoundingClientRect();
        const texX = (rect.left - snapRect.left) * this.scaleFactor;
        const texY = (rect.top - snapRect.top) * this.scaleFactor;
        const texW = rect.width * this.scaleFactor;
        const texH = rect.height * this.scaleFactor;
        const drawW = Math.round(texW);
        const drawH = Math.round(texH);
        if (drawW <= 0 || drawH <= 0) return;
        if (this._tmpCanvas.width !== drawW || this._tmpCanvas.height !== drawH) {
          this._tmpCanvas.width = drawW;
          this._tmpCanvas.height = drawH;
        }
        try {
          this._tmpCtx.save();
          this._tmpCtx.clearRect(0, 0, drawW, drawH);
          const style = window.getComputedStyle(vid);
          const scaledRadii = {
            tl: parseFloat(style.borderTopLeftRadius) * this.scaleFactor,
            tr: parseFloat(style.borderTopRightRadius) * this.scaleFactor,
            br: parseFloat(style.borderBottomRightRadius) * this.scaleFactor,
            bl: parseFloat(style.borderBottomLeftRadius) * this.scaleFactor
          };
          if (Object.values(scaledRadii).some((r) => r > 0)) {
            this._createRoundedRectPath(this._tmpCtx, drawW, drawH, scaledRadii);
            this._tmpCtx.clip();
          }
          this._tmpCtx.drawImage(
            this.staticSnapshotCanvas,
            texX,
            texY,
            texW,
            texH,
            0,
            0,
            drawW,
            drawH
          );
          this._tmpCtx.drawImage(vid, 0, 0, drawW, drawH);
          this._tmpCtx.restore();
        } catch (e) {
          console.warn("liquidGL: Error drawing video frame", e);
          return;
        }
        const drawX = Math.round(texX);
        const drawY = Math.round(texY);
        if (drawW <= 0 || drawH <= 0) return;
        const maxW = this.textureWidth;
        const maxH = this.textureHeight;
        let dstX = drawX;
        let dstY = drawY;
        let srcX = 0, srcY = 0, updW = drawW, updH = drawH;
        if (dstX < 0) {
          srcX = -dstX;
          updW += dstX;
          dstX = 0;
        }
        if (dstY < 0) {
          srcY = -dstY;
          updH += dstY;
          dstY = 0;
        }
        if (dstX + updW > maxW) {
          updW = maxW - dstX;
        }
        if (dstY + updH > maxH) {
          updH = maxH - dstY;
        }
        if (updW <= 0 || updH <= 0) return;
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
        gl.texSubImage2D(
          gl.TEXTURE_2D,
          0,
          dstX,
          dstY,
          gl.RGBA,
          gl.UNSIGNED_BYTE,
          this._tmpCanvas
        );
      });
    }
    /* ----------------------------- */
    _updateDynamicNodes() {
      if (this._isScrolling && this._scrollUpdateCounter % 2 !== 0) return;
      const gl = this.gl;
      if (!this.texture || !this._dynMeta) return;
      const snapRect = this.snapshotTarget.getBoundingClientRect();
      const maxLensZ = this._getMaxLensZ();
      const lensRects = this.lenses.map((ln) => ln.rectPx).filter(Boolean);
      const rectsIntersect = (a, b) => a.left < b.left + b.width && a.left + a.width > b.left && a.top < b.top + b.height && a.top + a.height > b.top;
      if (!this._compositeCtx) {
        this._compositeCtx = document.createElement("canvas").getContext("2d");
      }
      const compositeVideos = (compositeCtx, dynamicElRect) => {
        this._videoNodes.forEach((vid) => {
          if (effectiveZ(vid) >= maxLensZ) return;
          const vidRect = vid.getBoundingClientRect();
          if (dynamicElRect.left < vidRect.right && dynamicElRect.right > vidRect.left && dynamicElRect.top < vidRect.bottom && dynamicElRect.bottom > vidRect.top) {
            const xInComposite = (vidRect.left - dynamicElRect.left) * this.scaleFactor;
            const yInComposite = (vidRect.top - dynamicElRect.top) * this.scaleFactor;
            const wInComposite = vidRect.width * this.scaleFactor;
            const hInComposite = vidRect.height * this.scaleFactor;
            compositeCtx.drawImage(
              vid,
              xInComposite,
              yInComposite,
              wInComposite,
              hInComposite
            );
          }
        });
      };
      this._dynamicNodes.forEach((node) => {
        const el = node.el;
        const meta = this._dynMeta.get(el);
        if (!meta) return;
        if (meta.needsRecapture && !meta._capturing && !this._isScrolling) {
          meta._capturing = true;
          html2canvas(el, {
            backgroundColor: null,
            scale: this.scaleFactor,
            useCORS: true,
            removeContainer: true,
            logging: false,
            ignoreElements: (n) => n.tagName === "CANVAS" || n.hasAttribute("data-liquid-ignore")
          }).then((cv) => {
            if (cv.width > 0 && cv.height > 0) {
              meta.lastCapture = cv;
              meta.needsRecapture = false;
            }
          }).catch((e) => {
            console.error("liquidGL: Dynamic element capture failed.", e);
          }).finally(() => {
            meta._capturing = false;
          });
        }
        if (meta.lastCapture) {
          if (meta.prevDrawRect && !(this._workerEnabled && meta._heavyAnim)) {
            const { x, y, w, h } = meta.prevDrawRect;
            if (w > 0 && h > 0) {
              const eraseCanvas = this._compositeCtx.canvas;
              if (eraseCanvas.width !== w || eraseCanvas.height !== h) {
                eraseCanvas.width = w;
                eraseCanvas.height = h;
              }
              this._compositeCtx.drawImage(
                this.staticSnapshotCanvas,
                x,
                y,
                w,
                h,
                0,
                0,
                w,
                h
              );
              gl.bindTexture(gl.TEXTURE_2D, this.texture);
              gl.texSubImage2D(
                gl.TEXTURE_2D,
                0,
                x,
                y,
                gl.RGBA,
                gl.UNSIGNED_BYTE,
                eraseCanvas
              );
            }
          }
          const rect = el.getBoundingClientRect();
          if (effectiveZ(el) >= maxLensZ || !document.contains(el) || rect.width === 0 || rect.height === 0) {
            meta.prevDrawRect = null;
            return;
          }
          if (!lensRects.some((lr) => rectsIntersect(rect, lr))) {
            meta.prevDrawRect = null;
            return;
          }
          const texX = (rect.left - snapRect.left) * this.scaleFactor;
          const texY = (rect.top - snapRect.top) * this.scaleFactor;
          const drawW = Math.round(rect.width * this.scaleFactor);
          const drawH = Math.round(rect.height * this.scaleFactor);
          const drawX = Math.round(texX);
          const drawY = Math.round(texY);
          if (drawW <= 0 || drawH <= 0) return;
          const maxW = this.textureWidth;
          const maxH = this.textureHeight;
          let dstX = drawX;
          let dstY = drawY;
          let srcX = 0, srcY = 0, updW = drawW, updH = drawH;
          if (dstX < 0) {
            srcX = -dstX;
            updW += dstX;
            dstX = 0;
          }
          if (dstY < 0) {
            srcY = -dstY;
            updH += dstY;
            dstY = 0;
          }
          if (dstX + updW > maxW) {
            updW = maxW - dstX;
          }
          if (dstY + updH > maxH) {
            updH = maxH - dstY;
          }
          if (updW <= 0 || updH <= 0) return;
          const compositeCanvas = this._compositeCtx.canvas;
          if (compositeCanvas.width !== drawW || compositeCanvas.height !== drawH) {
            compositeCanvas.width = drawW;
            compositeCanvas.height = drawH;
          }
          this._compositeCtx.clearRect(0, 0, drawW, drawH);
          this._compositeCtx.drawImage(
            this.staticSnapshotCanvas,
            texX,
            texY,
            rect.width * this.scaleFactor,
            rect.height * this.scaleFactor,
            0,
            0,
            drawW,
            drawH
          );
          compositeVideos(this._compositeCtx, rect);
          const style = window.getComputedStyle(el);
          this._compositeCtx.save();
          this._compositeCtx.translate(drawW / 2, drawH / 2);
          if (style.transform !== "none") {
            this._compositeCtx.transform(
              ...this._parseTransform(style.transform)
            );
          }
          this._compositeCtx.translate(-drawW / 2, -drawH / 2);
          this._compositeCtx.globalAlpha = parseFloat(style.opacity) || 1;
          this._compositeCtx.drawImage(meta.lastCapture, 0, 0, drawW, drawH);
          this._compositeCtx.restore();
          gl.bindTexture(gl.TEXTURE_2D, this.texture);
          gl.texSubImage2D(
            gl.TEXTURE_2D,
            0,
            dstX,
            dstY,
            gl.RGBA,
            gl.UNSIGNED_BYTE,
            compositeCanvas
          );
          if (this._workerEnabled && meta._heavyAnim) {
            const jobId = `${Date.now()}_${Math.random()}`;
            this._dynJobs.set(jobId, {
              x: dstX,
              y: dstY,
              w: updW,
              h: updH
            });
            Promise.all([
              createImageBitmap(
                this.staticSnapshotCanvas,
                dstX,
                dstY,
                updW,
                updH
              ),
              createImageBitmap(meta.lastCapture)
            ]).then(([snapBmp, dynBmp]) => {
              this._dynWorker.postMessage(
                {
                  id: jobId,
                  width: updW,
                  height: updH,
                  snap: snapBmp,
                  dyn: dynBmp
                },
                [snapBmp, dynBmp]
              );
            });
            meta.prevDrawRect = { x: dstX, y: dstY, w: updW, h: updH };
            return;
          }
          meta.prevDrawRect = { x: dstX, y: dstY, w: updW, h: updH };
        }
      });
    }
    _parseTransform(transform) {
      if (transform === "none") return [1, 0, 0, 1, 0, 0];
      const matrixMatch = transform.match(/matrix\((.+)\)/);
      if (matrixMatch) {
        const values = matrixMatch[1].split(",").map(parseFloat);
        return values;
      }
      const matrix3dMatch = transform.match(/matrix3d\((.+)\)/);
      if (matrix3dMatch) {
        const v = matrix3dMatch[1].split(",").map(parseFloat);
        return [v[0], v[1], v[4], v[5], v[12], v[13]];
      }
      return [1, 0, 0, 1, 0, 0];
    }
    /* ----------------------------- */
    _getMaxLensZ() {
      let maxZ = 0;
      this.lenses.forEach((ln) => {
        const z = effectiveZ(ln.el);
        if (z > maxZ) maxZ = z;
      });
      return maxZ;
    }
    /* ----------------------------- */
    addDynamicElement(el) {
      if (!el) return;
      if (typeof el === "string") {
        this.snapshotTarget.querySelectorAll(el).forEach((n) => this.addDynamicElement(n));
        return;
      }
      if (NodeList.prototype.isPrototypeOf(el) || Array.isArray(el)) {
        Array.from(el).forEach((n) => this.addDynamicElement(n));
        return;
      }
      if (!el.getBoundingClientRect) return;
      if (el.closest && el.closest("[data-liquid-ignore]")) return;
      if (this._dynamicNodes.some((n) => n.el === el)) return;
      this._dynamicNodes = this._dynamicNodes.filter((n) => !el.contains(n.el));
      const meta = {
        _capturing: false,
        prevDrawRect: null,
        lastCapture: null,
        needsRecapture: true,
        hoverClassName: null,
        _animating: false,
        _rafId: null,
        _lastCaptureTs: 0,
        _heavyAnim: false
      };
      this._dynMeta.set(el, meta);
      const setDirty = () => {
        const m = this._dynMeta.get(el);
        if (m && !m.needsRecapture) {
          m.needsRecapture = true;
          requestAnimationFrame(() => this.render());
        }
      };
      const findAppliedHoverStyles = (element) => {
        let cssText = "";
        for (const sheet of document.styleSheets) {
          try {
            for (const rule of sheet.cssRules) {
              if (!rule.selectorText || !rule.selectorText.includes(":hover")) {
                continue;
              }
              const baseSelector = rule.selectorText.split(":hover")[0];
              if (element.matches(baseSelector)) {
                cssText += rule.style.cssText;
              }
            }
          } catch (e) {
          }
        }
        return cssText;
      };
      const handleLeave = () => {
        const m = this._dynMeta.get(el);
        if (!m || !m.hoverClassName) return;
        el.classList.remove(m.hoverClassName);
        for (let i = this._dynamicStyleSheet.cssRules.length - 1; i >= 0; i--) {
          const rule = this._dynamicStyleSheet.cssRules[i];
          if (rule.selectorText === `.${m.hoverClassName}`) {
            this._dynamicStyleSheet.deleteRule(i);
            break;
          }
        }
        m.hoverClassName = null;
        setDirty();
      };
      el.addEventListener(
        "mouseenter",
        () => {
          const m = this._dynMeta.get(el);
          if (!m) return;
          const hoverCss = findAppliedHoverStyles(el);
          if (hoverCss) {
            const className = `lqgl-h-${Math.random().toString(36).substr(2, 9)}`;
            const rule = `.${className} { ${hoverCss} }`;
            try {
              this._dynamicStyleSheet.insertRule(
                rule,
                this._dynamicStyleSheet.cssRules.length
              );
              m.hoverClassName = className;
              el.classList.add(className);
            } catch (e) {
              console.error("liquidGL: Failed to insert hover style rule.", e);
            }
          }
          setDirty();
        },
        { passive: true }
      );
      el.addEventListener("mouseleave", handleLeave, { passive: true });
      el.addEventListener("transitionend", setDirty, { passive: true });
      const startRealtime = () => {
        const m = this._dynMeta.get(el);
        if (!m || m._animating) return;
        m._animating = true;
        m._heavyAnim = false;
        const step = (ts) => {
          const meta2 = this._dynMeta.get(el);
          if (!meta2 || !meta2._animating) return;
          if (meta2._heavyAnim && !meta2._capturing && ts - meta2._lastCaptureTs > 33) {
            meta2._lastCaptureTs = ts;
            meta2.needsRecapture = true;
          }
          if (meta2._heavyAnim) {
            meta2._rafId = requestAnimationFrame(step);
          } else {
            meta2._rafId = null;
          }
        };
        m._rafId = requestAnimationFrame(step);
      };
      const trackProperty = (prop) => {
        const m = this._dynMeta.get(el);
        if (!m) return;
        const low = (prop || "").toLowerCase();
        if (!(low.includes("transform") || low.includes("opacity"))) {
          const wasHeavy = m._heavyAnim;
          m._heavyAnim = true;
          if (m._animating && !wasHeavy && !m._rafId) {
            m._animating = false;
            startRealtime();
          }
        }
      };
      const transitionRunHandler = (e) => {
        trackProperty(e.propertyName);
        startRealtime();
      };
      el.addEventListener("transitionrun", transitionRunHandler, {
        passive: true
      });
      el.addEventListener("transitionstart", transitionRunHandler, {
        passive: true
      });
      el.addEventListener(
        "animationstart",
        () => {
          const m = this._dynMeta.get(el);
          if (m) m._heavyAnim = true;
          startRealtime();
        },
        { passive: true }
      );
      el.addEventListener(
        "animationiteration",
        () => {
          const m = this._dynMeta.get(el);
          if (m) {
            m._heavyAnim = true;
            if (!m._animating) startRealtime();
          }
        },
        { passive: true }
      );
      const stopRealtime = () => {
        const m = this._dynMeta.get(el);
        if (!m || !m._animating) return;
        m._animating = false;
        if (m._rafId) {
          cancelAnimationFrame(m._rafId);
          m._rafId = null;
        }
        m._heavyAnim = false;
        setDirty();
      };
      el.addEventListener("transitionend", stopRealtime, { passive: true });
      el.addEventListener("transitioncancel", stopRealtime, { passive: true });
      el.addEventListener("animationend", stopRealtime, { passive: true });
      el.addEventListener("animationcancel", stopRealtime, { passive: true });
      if (typeof MutationObserver !== "undefined") {
        const removalObserver = new MutationObserver(() => {
          if (!document.contains(el)) {
            handleLeave();
            removalObserver.disconnect();
            this._dynamicNodes = this._dynamicNodes.filter((n) => n.el !== el);
            this._dynMeta.delete(el);
          }
        });
        removalObserver.observe(document.body, {
          childList: true,
          subtree: true
        });
      }
      this._dynamicNodes.push({ el });
    }
    /* ----------------------------- */
    _isIgnored(el) {
      return !!(el && typeof el.closest === "function" && el.closest("[data-liquid-ignore]"));
    }
  };
  var liquidGLLens = class {
    constructor(renderer2, element, options) {
      this.renderer = renderer2;
      this.el = element;
      this.options = options;
      this._initCalled = false;
      this.rectPx = null;
      this.radiusGl = 0;
      this.radiusCss = 0;
      this.revealTypeIndex = this.options.reveal === "fade" ? 1 : 0;
      this._revealProgress = this.revealTypeIndex === 0 ? 1 : 0;
      this.tiltX = 0;
      this.tiltY = 0;
      this.originalShadow = this.el.style.boxShadow;
      this.originalOpacity = this.el.style.opacity;
      this.originalTransition = this.el.style.transition;
      this.el.style.transition = "none";
      this.el.style.opacity = 0;
      this.el.style.position = this.el.style.position === "static" ? "relative" : this.el.style.position;
      const bgCol = window.getComputedStyle(this.el).backgroundColor;
      const rgbaMatch = bgCol.match(/rgba?\(([^)]+)\)/);
      this._bgColorComponents = null;
      if (rgbaMatch) {
        const comps = rgbaMatch[1].split(/[ ,]+/).map(parseFloat);
        const [r, g, b, a = 1] = comps;
        this._bgColorComponents = { r, g, b, a };
        this.el.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0)`;
      }
      this.el.style.backdropFilter = "none";
      this.el.style.webkitBackdropFilter = "none";
      this.el.style.backgroundImage = "none";
      this.el.style.background = "transparent";
      this.el.style.pointerEvents = "none";
      this.updateMetrics();
      this.setShadow(this.options.shadow);
      if (this.options.tilt) this._bindTiltHandlers();
      if (typeof ResizeObserver !== "undefined" && !this._sizeObs) {
        this._sizeObs = new ResizeObserver(() => {
          this.updateMetrics();
          this.renderer.render();
        });
        this._sizeObs.observe(this.el);
      }
    }
    /* ----------------------------- */
    updateMetrics() {
      const rect = this._mirrorActive && this._baseRect ? this._baseRect : this.el.getBoundingClientRect();
      this.rectPx = {
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height
      };
      const style = window.getComputedStyle(this.el);
      const brRaw = style.borderTopLeftRadius.split(" ")[0];
      const isPct = brRaw.trim().endsWith("%");
      let brPx;
      if (isPct) {
        const pct = parseFloat(brRaw);
        brPx = Math.min(rect.width, rect.height) * pct / 100;
      } else {
        brPx = parseFloat(brRaw);
      }
      const maxAllowedCss = Math.min(rect.width, rect.height) * 0.5;
      this.radiusCss = Math.min(brPx, maxAllowedCss);
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      this.radiusGl = this.radiusCss * dpr;
      if (this._shadowSyncFn) {
        this._shadowSyncFn();
      }
    }
    /* ----------------------------- */
    _handleOverscrollCompensation() {
      let overscrollY = 0;
      let overscrollX = 0;
      if (window.visualViewport) {
        overscrollX = -window.visualViewport.offsetLeft;
        overscrollY = -window.visualViewport.offsetTop;
      } else {
        const bodyStyle = window.getComputedStyle(document.body);
        const htmlStyle = window.getComputedStyle(document.documentElement);
        if (bodyStyle.transform && bodyStyle.transform !== "none") {
          const matrix = new DOMMatrix(bodyStyle.transform);
          overscrollX = matrix.m41;
          overscrollY = matrix.m42;
        }
        if (overscrollY === 0 && overscrollX === 0 && htmlStyle.transform && htmlStyle.transform !== "none") {
          const matrix = new DOMMatrix(htmlStyle.transform);
          overscrollX = matrix.m41;
          overscrollY = matrix.m42;
        }
      }
      this._currentOverscrollX = overscrollX;
      this._currentOverscrollY = overscrollY;
      if (overscrollY !== 0 || overscrollX !== 0) {
        const compensationTransform = `translate(${-overscrollX}px, ${-overscrollY}px)`;
        let currentTransform = this.el.style.transform;
        currentTransform = currentTransform.replace(/translate\([^)]*\)\s*/g, "").trim();
        this.el.style.transform = compensationTransform + (currentTransform ? " " + currentTransform : "");
        if (this._shadowEl) {
          let shadowTransform = this._shadowEl.style.transform || "";
          shadowTransform = shadowTransform.replace(/translate\([^)]*\)\s*/g, "").trim();
          this._shadowEl.style.transform = compensationTransform + (shadowTransform ? " " + shadowTransform : "");
        }
      } else if (!this._tiltInteracting) {
        this.el.style.transform = this._savedTransform || "";
        if (this._shadowEl) {
          this._shadowEl.style.transform = "";
        }
      }
    }
    /* ----------------------------- */
    setTilt(enabled) {
      this.options.tilt = !!enabled;
      if (this.options.tilt) {
        this._bindTiltHandlers();
      } else {
        this._unbindTiltHandlers();
      }
    }
    /* ----------------------------- */
    setShadow(enabled) {
      this.options.shadow = !!enabled;
      const SHADOW_VAL = "0 10px 30px rgba(0,0,0,0.1), 0 0 0 0.5px rgba(0,0,0,0.05)";
      const syncShadow = () => {
        if (!this._shadowEl) return;
        const r = this._mirrorActive && this._baseRect ? this._baseRect : this.el.getBoundingClientRect();
        this._shadowEl.style.left = `${r.left}px`;
        this._shadowEl.style.top = `${r.top}px`;
        this._shadowEl.style.width = `${r.width}px`;
        this._shadowEl.style.height = `${r.height}px`;
        this._shadowEl.style.borderRadius = `${this.radiusCss}px`;
      };
      if (enabled) {
        this.el.style.boxShadow = SHADOW_VAL;
        if (!this._shadowEl) {
          this._shadowEl = document.createElement("div");
          Object.assign(this._shadowEl.style, {
            position: "fixed",
            pointerEvents: "none",
            zIndex: effectiveZ(this.el) - 2,
            boxShadow: SHADOW_VAL,
            willChange: "transform, width, height",
            opacity: this.revealTypeIndex === 1 ? 0 : 1
          });
          document.body.appendChild(this._shadowEl);
          this._shadowSyncFn = syncShadow;
          window.addEventListener("resize", this._shadowSyncFn, {
            passive: true
          });
        }
        syncShadow();
      } else {
        if (this._shadowEl) {
          window.removeEventListener("resize", this._shadowSyncFn);
          this._shadowEl.remove();
          this._shadowEl = null;
        }
        this.el.style.boxShadow = this.originalShadow;
      }
    }
    /* ----------------------------- */
    _reveal() {
      if (this.revealTypeIndex === 0) {
        this.el.style.opacity = this.originalOpacity || 1;
        this.renderer.canvas.style.opacity = "1";
        this._revealProgress = 1;
        this._TriggerInit();
        return;
      }
      if (this.renderer._revealAnimating) return;
      this.renderer._revealAnimating = true;
      const dur = 1e3;
      const start = performance.now();
      const animate2 = () => {
        const progress = Math.min(1, (performance.now() - start) / dur);
        this.renderer.lenses.forEach((ln) => {
          ln._revealProgress = progress;
          ln.el.style.opacity = (ln.originalOpacity || 1) * progress;
          if (ln._shadowEl) {
            ln._shadowEl.style.opacity = progress;
          }
        });
        this.renderer.canvas.style.opacity = String(progress);
        this.renderer.render();
        if (progress < 1) {
          requestAnimationFrame(animate2);
        } else {
          this.renderer._revealAnimating = false;
          this.renderer.lenses.forEach((ln) => {
            ln.el.style.transition = ln.originalTransition || "";
            ln._TriggerInit();
          });
        }
      };
      requestAnimationFrame(animate2);
    }
    /* ----------------------------- */
    _bindTiltHandlers() {
      if (this._tiltHandlersBound) return;
      if (this._savedTransform === void 0) {
        const currentTransform = this.el.style.transform;
        if (currentTransform && currentTransform.includes("translate")) {
          this._savedTransform = currentTransform.replace(/translate\([^)]*\)\s*/g, "").trim();
          if (this._savedTransform === "") this._savedTransform = "none";
        } else {
          this._savedTransform = currentTransform;
        }
      }
      if (this._savedTransformStyle === void 0) {
        this._savedTransformStyle = this.el.style.transformStyle;
      }
      this.el.style.transformStyle = "preserve-3d";
      const getMaxTilt = () => Number.isFinite(this.options.tiltFactor) ? this.options.tiltFactor : 5;
      this._applyTilt = (clientX, clientY) => {
        if (!this._tiltInteracting) {
          this._tiltInteracting = true;
          this.el.style.transition = "transform 0.12s cubic-bezier(0.33,1,0.68,1)";
          this._createMirrorCanvas();
          if (this._mirror) {
            this._mirror.style.transition = "transform 0.12s cubic-bezier(0.33,1,0.68,1)";
          }
          if (this._shadowEl) {
            this._shadowEl.style.transition = "transform 0.12s cubic-bezier(0.33,1,0.68,1)";
          }
        }
        const r = this._baseRect || this.el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        this._pivotOrigin = `${cx}px ${cy}px`;
        const pctX = (clientX - cx) / (r.width / 2);
        const pctY = (clientY - cy) / (r.height / 2);
        const maxTilt = getMaxTilt();
        const rotY = pctX * maxTilt;
        const rotX = -pctY * maxTilt;
        const baseTransform = this._savedTransform && this._savedTransform !== "none" ? this._savedTransform + " " : "";
        let overscrollCompensation = "";
        const bodyStyle = window.getComputedStyle(document.body);
        if (bodyStyle.transform && bodyStyle.transform !== "none") {
          const matrix = new DOMMatrix(bodyStyle.transform);
          const overscrollX = matrix.m41;
          const overscrollY = matrix.m42;
          if (overscrollX !== 0 || overscrollY !== 0) {
            overscrollCompensation = `translate(${-overscrollX}px, ${-overscrollY}px) `;
          }
        }
        const transformStr = `${overscrollCompensation}${baseTransform}perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        this.tiltX = rotX;
        this.tiltY = rotY;
        this.el.style.transformOrigin = `50% 50%`;
        this.el.style.transform = transformStr;
        if (this._mirror) {
          this._mirror.style.transformOrigin = this._pivotOrigin;
          this._mirror.style.transform = transformStr;
        }
        if (this._shadowEl) {
          this._shadowEl.style.transformOrigin = `50% 50%`;
          this._shadowEl.style.transform = transformStr;
        }
        this.renderer.render();
      };
      this._smoothReset = () => {
        this.el.style.transition = "transform 0.4s cubic-bezier(0.33,1,0.68,1)";
        this.el.style.transformOrigin = `50% 50%`;
        const baseRest = this._savedTransform && this._savedTransform !== "none" ? this._savedTransform + " " : "";
        let overscrollCompensation = "";
        const bodyStyle = window.getComputedStyle(document.body);
        if (bodyStyle.transform && bodyStyle.transform !== "none") {
          const matrix = new DOMMatrix(bodyStyle.transform);
          const overscrollX = matrix.m41;
          const overscrollY = matrix.m42;
          if (overscrollX !== 0 || overscrollY !== 0) {
            overscrollCompensation = `translate(${-overscrollX}px, ${-overscrollY}px) `;
          }
        }
        this.el.style.transform = `${overscrollCompensation}${baseRest}perspective(800px) rotateX(0deg) rotateY(0deg)`;
        this.tiltX = 0;
        this.tiltY = 0;
        this.renderer.render();
        if (this._mirror) {
          this._mirror.style.transition = "transform 0.4s cubic-bezier(0.33, 1, 0.68, 1)";
          this._mirror.style.transformOrigin = this._pivotOrigin || "50% 50%";
          this._mirror.style.transform = `${baseRest}perspective(800px) rotateX(0deg) rotateY(0deg)`;
          const clean = () => {
            this._destroyMirrorCanvas();
            this._resetCleanupTimer = null;
          };
          this._mirror.addEventListener("transitionend", clean, {
            once: true
          });
          this._resetCleanupTimer = setTimeout(clean, 350);
        }
        if (this._shadowEl) {
          this._shadowEl.style.transition = "transform 0.4s cubic-bezier(0.33,1,0.68,1)";
          this._shadowEl.style.transformOrigin = `50% 50%`;
          this._shadowEl.style.transform = `${baseRest}perspective(800px) rotateX(0deg) rotateY(0deg)`;
        }
      };
      this._onMouseEnter = (e) => {
        if (this._resetCleanupTimer) {
          clearTimeout(this._resetCleanupTimer);
          this._resetCleanupTimer = null;
          this._destroyMirrorCanvas();
          this.el.style.transition = "none";
          this.el.style.transform = this._savedTransform || "";
          void this.el.offsetHeight;
        }
        this._tiltInteracting = false;
        this._createMirrorCanvas();
        const r = this._baseRect || this.el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        this._applyTilt(cx, cy);
        if (e && typeof e.clientX === "number") {
          requestAnimationFrame(() => {
            this._applyTilt(e.clientX, e.clientY);
          });
        }
        document.addEventListener("mousemove", this._boundCheckLeave, {
          passive: true
        });
      };
      this._onMouseMove = (e) => this._applyTilt(e.clientX, e.clientY);
      this._onTouchStart = (e) => {
        this._tiltInteracting = false;
        this._createMirrorCanvas();
        if (e.touches && e.touches.length === 1) {
          const t = e.touches[0];
          this._applyTilt(t.clientX, t.clientY);
        }
      };
      this._onTouchMove = (e) => {
        if (e.touches && e.touches.length === 1) {
          const t = e.touches[0];
          this._applyTilt(t.clientX, t.clientY);
        }
      };
      this._onTouchEnd = () => {
        this._smoothReset();
      };
      this.el.addEventListener("mouseenter", this._onMouseEnter.bind(this), {
        passive: true
      });
      this.el.addEventListener("mousemove", this._onMouseMove.bind(this), {
        passive: true
      });
      this.el.addEventListener("touchstart", this._onTouchStart.bind(this), {
        passive: true
      });
      this.el.addEventListener("touchmove", this._onTouchMove.bind(this), {
        passive: true
      });
      this.el.addEventListener("touchend", this._onTouchEnd.bind(this), {
        passive: true
      });
      this._tiltActive = false;
      this._docPointerMove = (e) => {
        const x = e.clientX ?? (e.touches && e.touches[0].clientX);
        const y = e.clientY ?? (e.touches && e.touches[0].clientY);
        if (x === void 0 || y === void 0) return;
        const r = this.el.getBoundingClientRect();
        const inside = x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
        if (inside) {
          if (!this._tiltActive) {
            this._tiltActive = true;
            this._onMouseEnter({ clientX: x, clientY: y });
          } else {
            this._applyTilt(x, y);
          }
        } else if (this._tiltActive) {
          this._tiltActive = false;
          this._smoothReset();
        }
      };
      document.addEventListener("pointermove", this._docPointerMove, {
        passive: true
      });
      this._tiltHandlersBound = true;
    }
    _unbindTiltHandlers() {
      if (!this._tiltHandlersBound) return;
      this.el.removeEventListener("mouseenter", this._onMouseEnter.bind(this));
      this.el.removeEventListener("mousemove", this._onMouseMove.bind(this));
      document.removeEventListener("mousemove", this._boundCheckLeave);
      this.el.removeEventListener("touchstart", this._onTouchStart.bind(this));
      this.el.removeEventListener("touchmove", this._onTouchMove.bind(this));
      this.el.removeEventListener("touchend", this._onTouchEnd.bind(this));
      if (this._docPointerMove) {
        document.removeEventListener("pointermove", this._docPointerMove);
        this._docPointerMove = null;
      }
      this._tiltHandlersBound = false;
      this.el.style.transform = this._savedTransform || "";
      this.el.style.transformStyle = this._savedTransformStyle || "";
      this.renderer.render();
    }
    _createMirrorCanvas() {
      this._baseRect = this.el.getBoundingClientRect();
      if (this._mirror) return;
      this._mirror = document.createElement("canvas");
      Object.assign(this._mirror.style, {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: effectiveZ(this.el) - 1,
        willChange: "transform"
      });
      this._mirrorCtx = this._mirror.getContext("2d");
      document.body.appendChild(this._mirror);
      const updateClip = () => {
        if (this._mirrorActive) {
          this._baseRect = this._baseRect || this.el.getBoundingClientRect();
        }
        const r = this._baseRect || this.el.getBoundingClientRect();
        const radius = `${this.radiusCss}px`;
        this._mirror.style.clipPath = `inset(${r.top}px ${innerWidth - r.right}px ${innerHeight - r.bottom}px ${r.left}px round ${radius})`;
        this._mirror.style.webkitClipPath = this._mirror.style.clipPath;
      };
      updateClip();
      this._mirrorClipUpdater = updateClip;
      window.addEventListener("resize", updateClip, { passive: true });
      this._mirrorActive = true;
    }
    _destroyMirrorCanvas() {
      if (!this._mirror) return;
      window.removeEventListener("resize", this._mirrorClipUpdater);
      this._mirror.remove();
      this._mirror = this._mirrorCtx = null;
      this._baseRect = null;
      this._mirrorActive = false;
    }
    _TriggerInit() {
      if (this._initCalled) return;
      this._initCalled = true;
      if (this.options.on && this.options.on.init) {
        this.options.on.init(this);
      }
    }
  };
  var liquidGL = function(userOptions = {}) {
    const defaults = {
      target: ".liquidGL",
      snapshot: "body",
      resolution: 2,
      refraction: 0.01,
      bevelDepth: 0.08,
      bevelWidth: 0.15,
      frost: 0,
      shadow: true,
      specular: true,
      reveal: "fade",
      tilt: false,
      tiltFactor: 5,
      magnify: 1,
      on: {}
    };
    const options = { ...defaults, ...userOptions };
    if (typeof window.__liquidGLNoWebGL__ === "undefined") {
      const testCanvas = document.createElement("canvas");
      const testCtx = testCanvas.getContext("webgl2") || testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
      window.__liquidGLNoWebGL__ = !testCtx;
    }
    const noWebGL = window.__liquidGLNoWebGL__;
    if (noWebGL) {
      console.warn(
        "liquidGL: WebGL not available \u2013 falling back to CSS backdrop-filter."
      );
      const fallbackNodes = document.querySelectorAll(options.target);
      fallbackNodes.forEach((node) => {
        Object.assign(node.style, {
          background: "rgba(255, 255, 255, 0.07)",
          backdropFilter: "blur(12px)",
          webkitBackdropFilter: "blur(12px)"
        });
      });
      return fallbackNodes.length === 1 ? fallbackNodes[0] : Array.from(fallbackNodes);
    }
    let renderer2 = window.__liquidGLRenderer__;
    if (!renderer2) {
      renderer2 = new liquidGLRenderer(options.snapshot, options.resolution);
      window.__liquidGLRenderer__ = renderer2;
    }
    const nodeList = document.querySelectorAll(options.target);
    if (!nodeList || nodeList.length === 0) {
      console.warn(`liquidGL: Target element(s) '${options.target}' not found.`);
      return;
    }
    const instances = Array.from(nodeList).map(
      (el) => renderer2.addLens(el, options)
    );
    if (!renderer2._rafId && !renderer2.useExternalTicker) {
      const loop = () => {
        renderer2.render();
        renderer2._rafId = requestAnimationFrame(loop);
      };
      renderer2._rafId = requestAnimationFrame(loop);
    }
    return instances.length === 1 ? instances[0] : instances;
  };
  liquidGL.registerDynamic = function(elements) {
    const renderer2 = window.__liquidGLRenderer__;
    if (!renderer2 || !renderer2.addDynamicElement) return;
    renderer2.addDynamicElement(elements);
    if (renderer2.captureSnapshot) {
      renderer2.captureSnapshot();
    }
  };
  liquidGL.syncWith = function(config = {}) {
    const renderer2 = window.__liquidGLRenderer__;
    if (!renderer2) {
      console.warn(
        "liquidGL: Please initialize liquidGL *before* calling syncWith()."
      );
      return;
    }
    const G = window.gsap;
    const L = window.Lenis;
    const LS = window.LocomotiveScroll;
    const ST = G ? G.ScrollTrigger : null;
    let lenis2 = config.lenis;
    let loco = config.locomotiveScroll;
    const useGSAP = config.gsap !== false && G && ST;
    if (config.lenis !== false && L && !lenis2) {
      lenis2 = new L();
    }
    if (config.locomotiveScroll !== false && LS && !loco && document.querySelector("[data-scroll-container]")) {
      loco = new LS({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true
      });
    }
    if (useGSAP && ST) {
      if (loco) {
        loco.on("scroll", ST.update);
        ST.scrollerProxy(loco.el, {
          scrollTop(value) {
            return arguments.length ? loco.scrollTo(value, { duration: 0, disableLerp: true }) : loco.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight
            };
          },
          pinType: loco.el.style.transform ? "transform" : "fixed"
        });
        ST.addEventListener("refresh", () => loco.update());
        ST.refresh();
      } else if (lenis2) {
        lenis2.on("scroll", ST.update);
      }
    }
    if (renderer2._rafId) {
      cancelAnimationFrame(renderer2._rafId);
      renderer2._rafId = null;
    }
    renderer2.useExternalTicker = true;
    if (useGSAP) {
      G.ticker.add((time) => {
        if (lenis2) lenis2.raf(time * 1e3);
        renderer2.render();
      });
      G.ticker.lagSmoothing(0);
    } else {
      const loop = (time) => {
        if (lenis2) lenis2.raf(time);
        if (loco) loco.update();
        renderer2.render();
        renderer2._rafId = requestAnimationFrame(loop);
      };
      renderer2._rafId = requestAnimationFrame(loop);
    }
    return { lenis: lenis2, locomotiveScroll: loco };
  };

  // src/js/scenes/MountainScene.js
  var THREE = __toESM(require_three());

  // src/js/three-addons/loaders/GLTFLoader.js
  var import_three2 = __toESM(require_three());

  // src/js/three-addons/utils/BufferGeometryUtils.js
  var import_three = __toESM(require_three());
  function toTrianglesDrawMode(geometry, drawMode) {
    if (drawMode === import_three.TrianglesDrawMode) {
      console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.");
      return geometry;
    }
    if (drawMode === import_three.TriangleFanDrawMode || drawMode === import_three.TriangleStripDrawMode) {
      let index = geometry.getIndex();
      if (index === null) {
        const indices = [];
        const position = geometry.getAttribute("position");
        if (position !== void 0) {
          for (let i = 0; i < position.count; i++) {
            indices.push(i);
          }
          geometry.setIndex(indices);
          index = geometry.getIndex();
        } else {
          console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.");
          return geometry;
        }
      }
      const numberOfTriangles = index.count - 2;
      const newIndices = [];
      if (drawMode === import_three.TriangleFanDrawMode) {
        for (let i = 1; i <= numberOfTriangles; i++) {
          newIndices.push(index.getX(0));
          newIndices.push(index.getX(i));
          newIndices.push(index.getX(i + 1));
        }
      } else {
        for (let i = 0; i < numberOfTriangles; i++) {
          if (i % 2 === 0) {
            newIndices.push(index.getX(i));
            newIndices.push(index.getX(i + 1));
            newIndices.push(index.getX(i + 2));
          } else {
            newIndices.push(index.getX(i + 2));
            newIndices.push(index.getX(i + 1));
            newIndices.push(index.getX(i));
          }
        }
      }
      if (newIndices.length / 3 !== numberOfTriangles) {
        console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
      }
      const newGeometry = geometry.clone();
      newGeometry.setIndex(newIndices);
      newGeometry.clearGroups();
      return newGeometry;
    } else {
      console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", drawMode);
      return geometry;
    }
  }

  // src/js/three-addons/loaders/GLTFLoader.js
  var GLTFLoader = class extends import_three2.Loader {
    constructor(manager) {
      super(manager);
      this.dracoLoader = null;
      this.ktx2Loader = null;
      this.meshoptDecoder = null;
      this.pluginCallbacks = [];
      this.register(function(parser) {
        return new GLTFMaterialsClearcoatExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFTextureBasisUExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFTextureWebPExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFTextureAVIFExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMaterialsSheenExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMaterialsTransmissionExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMaterialsVolumeExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMaterialsIorExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMaterialsEmissiveStrengthExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMaterialsSpecularExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMaterialsIridescenceExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMaterialsAnisotropyExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMaterialsBumpExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFLightsExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMeshoptCompression(parser);
      });
      this.register(function(parser) {
        return new GLTFMeshGpuInstancing(parser);
      });
    }
    load(url, onLoad, onProgress, onError) {
      const scope = this;
      let resourcePath;
      if (this.resourcePath !== "") {
        resourcePath = this.resourcePath;
      } else if (this.path !== "") {
        const relativeUrl = import_three2.LoaderUtils.extractUrlBase(url);
        resourcePath = import_three2.LoaderUtils.resolveURL(relativeUrl, this.path);
      } else {
        resourcePath = import_three2.LoaderUtils.extractUrlBase(url);
      }
      this.manager.itemStart(url);
      const _onError = function(e) {
        if (onError) {
          onError(e);
        } else {
          console.error(e);
        }
        scope.manager.itemError(url);
        scope.manager.itemEnd(url);
      };
      const loader = new import_three2.FileLoader(this.manager);
      loader.setPath(this.path);
      loader.setResponseType("arraybuffer");
      loader.setRequestHeader(this.requestHeader);
      loader.setWithCredentials(this.withCredentials);
      loader.load(url, function(data) {
        try {
          scope.parse(data, resourcePath, function(gltf) {
            onLoad(gltf);
            scope.manager.itemEnd(url);
          }, _onError);
        } catch (e) {
          _onError(e);
        }
      }, onProgress, _onError);
    }
    setDRACOLoader(dracoLoader) {
      this.dracoLoader = dracoLoader;
      return this;
    }
    setDDSLoader() {
      throw new Error(
        'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
      );
    }
    setKTX2Loader(ktx2Loader) {
      this.ktx2Loader = ktx2Loader;
      return this;
    }
    setMeshoptDecoder(meshoptDecoder) {
      this.meshoptDecoder = meshoptDecoder;
      return this;
    }
    register(callback) {
      if (this.pluginCallbacks.indexOf(callback) === -1) {
        this.pluginCallbacks.push(callback);
      }
      return this;
    }
    unregister(callback) {
      if (this.pluginCallbacks.indexOf(callback) !== -1) {
        this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(callback), 1);
      }
      return this;
    }
    parse(data, path, onLoad, onError) {
      let json;
      const extensions = {};
      const plugins = {};
      const textDecoder = new TextDecoder();
      if (typeof data === "string") {
        json = JSON.parse(data);
      } else if (data instanceof ArrayBuffer) {
        const magic = textDecoder.decode(new Uint8Array(data, 0, 4));
        if (magic === BINARY_EXTENSION_HEADER_MAGIC) {
          try {
            extensions[EXTENSIONS.KHR_BINARY_GLTF] = new GLTFBinaryExtension(data);
          } catch (error) {
            if (onError) onError(error);
            return;
          }
          json = JSON.parse(extensions[EXTENSIONS.KHR_BINARY_GLTF].content);
        } else {
          json = JSON.parse(textDecoder.decode(data));
        }
      } else {
        json = data;
      }
      if (json.asset === void 0 || json.asset.version[0] < 2) {
        if (onError) onError(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
        return;
      }
      const parser = new GLTFParser(json, {
        path: path || this.resourcePath || "",
        crossOrigin: this.crossOrigin,
        requestHeader: this.requestHeader,
        manager: this.manager,
        ktx2Loader: this.ktx2Loader,
        meshoptDecoder: this.meshoptDecoder
      });
      parser.fileLoader.setRequestHeader(this.requestHeader);
      for (let i = 0; i < this.pluginCallbacks.length; i++) {
        const plugin = this.pluginCallbacks[i](parser);
        if (!plugin.name) console.error("THREE.GLTFLoader: Invalid plugin found: missing name");
        plugins[plugin.name] = plugin;
        extensions[plugin.name] = true;
      }
      if (json.extensionsUsed) {
        for (let i = 0; i < json.extensionsUsed.length; ++i) {
          const extensionName = json.extensionsUsed[i];
          const extensionsRequired = json.extensionsRequired || [];
          switch (extensionName) {
            case EXTENSIONS.KHR_MATERIALS_UNLIT:
              extensions[extensionName] = new GLTFMaterialsUnlitExtension();
              break;
            case EXTENSIONS.KHR_DRACO_MESH_COMPRESSION:
              extensions[extensionName] = new GLTFDracoMeshCompressionExtension(json, this.dracoLoader);
              break;
            case EXTENSIONS.KHR_TEXTURE_TRANSFORM:
              extensions[extensionName] = new GLTFTextureTransformExtension();
              break;
            case EXTENSIONS.KHR_MESH_QUANTIZATION:
              extensions[extensionName] = new GLTFMeshQuantizationExtension();
              break;
            default:
              if (extensionsRequired.indexOf(extensionName) >= 0 && plugins[extensionName] === void 0) {
                console.warn('THREE.GLTFLoader: Unknown extension "' + extensionName + '".');
              }
          }
        }
      }
      parser.setExtensions(extensions);
      parser.setPlugins(plugins);
      parser.parse(onLoad, onError);
    }
    parseAsync(data, path) {
      const scope = this;
      return new Promise(function(resolve, reject) {
        scope.parse(data, path, resolve, reject);
      });
    }
  };
  function GLTFRegistry() {
    let objects = {};
    return {
      get: function(key) {
        return objects[key];
      },
      add: function(key, object) {
        objects[key] = object;
      },
      remove: function(key) {
        delete objects[key];
      },
      removeAll: function() {
        objects = {};
      }
    };
  }
  var EXTENSIONS = {
    KHR_BINARY_GLTF: "KHR_binary_glTF",
    KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
    KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
    KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
    KHR_MATERIALS_IOR: "KHR_materials_ior",
    KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
    KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
    KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
    KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
    KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
    KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
    KHR_MATERIALS_VOLUME: "KHR_materials_volume",
    KHR_TEXTURE_BASISU: "KHR_texture_basisu",
    KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
    KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
    KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
    EXT_MATERIALS_BUMP: "EXT_materials_bump",
    EXT_TEXTURE_WEBP: "EXT_texture_webp",
    EXT_TEXTURE_AVIF: "EXT_texture_avif",
    EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
    EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
  };
  var GLTFLightsExtension = class {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_LIGHTS_PUNCTUAL;
      this.cache = { refs: {}, uses: {} };
    }
    _markDefs() {
      const parser = this.parser;
      const nodeDefs = this.parser.json.nodes || [];
      for (let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex++) {
        const nodeDef = nodeDefs[nodeIndex];
        if (nodeDef.extensions && nodeDef.extensions[this.name] && nodeDef.extensions[this.name].light !== void 0) {
          parser._addNodeRef(this.cache, nodeDef.extensions[this.name].light);
        }
      }
    }
    _loadLight(lightIndex) {
      const parser = this.parser;
      const cacheKey = "light:" + lightIndex;
      let dependency = parser.cache.get(cacheKey);
      if (dependency) return dependency;
      const json = parser.json;
      const extensions = json.extensions && json.extensions[this.name] || {};
      const lightDefs = extensions.lights || [];
      const lightDef = lightDefs[lightIndex];
      let lightNode;
      const color = new import_three2.Color(16777215);
      if (lightDef.color !== void 0) color.setRGB(lightDef.color[0], lightDef.color[1], lightDef.color[2], import_three2.LinearSRGBColorSpace);
      const range = lightDef.range !== void 0 ? lightDef.range : 0;
      switch (lightDef.type) {
        case "directional":
          lightNode = new import_three2.DirectionalLight(color);
          lightNode.target.position.set(0, 0, -1);
          lightNode.add(lightNode.target);
          break;
        case "point":
          lightNode = new import_three2.PointLight(color);
          lightNode.distance = range;
          break;
        case "spot":
          lightNode = new import_three2.SpotLight(color);
          lightNode.distance = range;
          lightDef.spot = lightDef.spot || {};
          lightDef.spot.innerConeAngle = lightDef.spot.innerConeAngle !== void 0 ? lightDef.spot.innerConeAngle : 0;
          lightDef.spot.outerConeAngle = lightDef.spot.outerConeAngle !== void 0 ? lightDef.spot.outerConeAngle : Math.PI / 4;
          lightNode.angle = lightDef.spot.outerConeAngle;
          lightNode.penumbra = 1 - lightDef.spot.innerConeAngle / lightDef.spot.outerConeAngle;
          lightNode.target.position.set(0, 0, -1);
          lightNode.add(lightNode.target);
          break;
        default:
          throw new Error("THREE.GLTFLoader: Unexpected light type: " + lightDef.type);
      }
      lightNode.position.set(0, 0, 0);
      lightNode.decay = 2;
      assignExtrasToUserData(lightNode, lightDef);
      if (lightDef.intensity !== void 0) lightNode.intensity = lightDef.intensity;
      lightNode.name = parser.createUniqueName(lightDef.name || "light_" + lightIndex);
      dependency = Promise.resolve(lightNode);
      parser.cache.add(cacheKey, dependency);
      return dependency;
    }
    getDependency(type, index) {
      if (type !== "light") return;
      return this._loadLight(index);
    }
    createNodeAttachment(nodeIndex) {
      const self2 = this;
      const parser = this.parser;
      const json = parser.json;
      const nodeDef = json.nodes[nodeIndex];
      const lightDef = nodeDef.extensions && nodeDef.extensions[this.name] || {};
      const lightIndex = lightDef.light;
      if (lightIndex === void 0) return null;
      return this._loadLight(lightIndex).then(function(light) {
        return parser._getNodeRef(self2.cache, lightIndex, light);
      });
    }
  };
  var GLTFMaterialsUnlitExtension = class {
    constructor() {
      this.name = EXTENSIONS.KHR_MATERIALS_UNLIT;
    }
    getMaterialType() {
      return import_three2.MeshBasicMaterial;
    }
    extendParams(materialParams, materialDef, parser) {
      const pending = [];
      materialParams.color = new import_three2.Color(1, 1, 1);
      materialParams.opacity = 1;
      const metallicRoughness = materialDef.pbrMetallicRoughness;
      if (metallicRoughness) {
        if (Array.isArray(metallicRoughness.baseColorFactor)) {
          const array = metallicRoughness.baseColorFactor;
          materialParams.color.setRGB(array[0], array[1], array[2], import_three2.LinearSRGBColorSpace);
          materialParams.opacity = array[3];
        }
        if (metallicRoughness.baseColorTexture !== void 0) {
          pending.push(parser.assignTexture(materialParams, "map", metallicRoughness.baseColorTexture, import_three2.SRGBColorSpace));
        }
      }
      return Promise.all(pending);
    }
  };
  var GLTFMaterialsEmissiveStrengthExtension = class {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_MATERIALS_EMISSIVE_STRENGTH;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const emissiveStrength = materialDef.extensions[this.name].emissiveStrength;
      if (emissiveStrength !== void 0) {
        materialParams.emissiveIntensity = emissiveStrength;
      }
      return Promise.resolve();
    }
  };
  var GLTFMaterialsClearcoatExtension = class {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_MATERIALS_CLEARCOAT;
    }
    getMaterialType(materialIndex) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
      return import_three2.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const pending = [];
      const extension = materialDef.extensions[this.name];
      if (extension.clearcoatFactor !== void 0) {
        materialParams.clearcoat = extension.clearcoatFactor;
      }
      if (extension.clearcoatTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "clearcoatMap", extension.clearcoatTexture));
      }
      if (extension.clearcoatRoughnessFactor !== void 0) {
        materialParams.clearcoatRoughness = extension.clearcoatRoughnessFactor;
      }
      if (extension.clearcoatRoughnessTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "clearcoatRoughnessMap", extension.clearcoatRoughnessTexture));
      }
      if (extension.clearcoatNormalTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "clearcoatNormalMap", extension.clearcoatNormalTexture));
        if (extension.clearcoatNormalTexture.scale !== void 0) {
          const scale = extension.clearcoatNormalTexture.scale;
          materialParams.clearcoatNormalScale = new import_three2.Vector2(scale, scale);
        }
      }
      return Promise.all(pending);
    }
  };
  var GLTFMaterialsIridescenceExtension = class {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_MATERIALS_IRIDESCENCE;
    }
    getMaterialType(materialIndex) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
      return import_three2.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const pending = [];
      const extension = materialDef.extensions[this.name];
      if (extension.iridescenceFactor !== void 0) {
        materialParams.iridescence = extension.iridescenceFactor;
      }
      if (extension.iridescenceTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "iridescenceMap", extension.iridescenceTexture));
      }
      if (extension.iridescenceIor !== void 0) {
        materialParams.iridescenceIOR = extension.iridescenceIor;
      }
      if (materialParams.iridescenceThicknessRange === void 0) {
        materialParams.iridescenceThicknessRange = [100, 400];
      }
      if (extension.iridescenceThicknessMinimum !== void 0) {
        materialParams.iridescenceThicknessRange[0] = extension.iridescenceThicknessMinimum;
      }
      if (extension.iridescenceThicknessMaximum !== void 0) {
        materialParams.iridescenceThicknessRange[1] = extension.iridescenceThicknessMaximum;
      }
      if (extension.iridescenceThicknessTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "iridescenceThicknessMap", extension.iridescenceThicknessTexture));
      }
      return Promise.all(pending);
    }
  };
  var GLTFMaterialsSheenExtension = class {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_MATERIALS_SHEEN;
    }
    getMaterialType(materialIndex) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
      return import_three2.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const pending = [];
      materialParams.sheenColor = new import_three2.Color(0, 0, 0);
      materialParams.sheenRoughness = 0;
      materialParams.sheen = 1;
      const extension = materialDef.extensions[this.name];
      if (extension.sheenColorFactor !== void 0) {
        const colorFactor = extension.sheenColorFactor;
        materialParams.sheenColor.setRGB(colorFactor[0], colorFactor[1], colorFactor[2], import_three2.LinearSRGBColorSpace);
      }
      if (extension.sheenRoughnessFactor !== void 0) {
        materialParams.sheenRoughness = extension.sheenRoughnessFactor;
      }
      if (extension.sheenColorTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "sheenColorMap", extension.sheenColorTexture, import_three2.SRGBColorSpace));
      }
      if (extension.sheenRoughnessTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "sheenRoughnessMap", extension.sheenRoughnessTexture));
      }
      return Promise.all(pending);
    }
  };
  var GLTFMaterialsTransmissionExtension = class {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_MATERIALS_TRANSMISSION;
    }
    getMaterialType(materialIndex) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
      return import_three2.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const pending = [];
      const extension = materialDef.extensions[this.name];
      if (extension.transmissionFactor !== void 0) {
        materialParams.transmission = extension.transmissionFactor;
      }
      if (extension.transmissionTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "transmissionMap", extension.transmissionTexture));
      }
      return Promise.all(pending);
    }
  };
  var GLTFMaterialsVolumeExtension = class {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_MATERIALS_VOLUME;
    }
    getMaterialType(materialIndex) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
      return import_three2.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const pending = [];
      const extension = materialDef.extensions[this.name];
      materialParams.thickness = extension.thicknessFactor !== void 0 ? extension.thicknessFactor : 0;
      if (extension.thicknessTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "thicknessMap", extension.thicknessTexture));
      }
      materialParams.attenuationDistance = extension.attenuationDistance || Infinity;
      const colorArray = extension.attenuationColor || [1, 1, 1];
      materialParams.attenuationColor = new import_three2.Color().setRGB(colorArray[0], colorArray[1], colorArray[2], import_three2.LinearSRGBColorSpace);
      return Promise.all(pending);
    }
  };
  var GLTFMaterialsIorExtension = class {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_MATERIALS_IOR;
    }
    getMaterialType(materialIndex) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
      return import_three2.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const extension = materialDef.extensions[this.name];
      materialParams.ior = extension.ior !== void 0 ? extension.ior : 1.5;
      return Promise.resolve();
    }
  };
  var GLTFMaterialsSpecularExtension = class {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_MATERIALS_SPECULAR;
    }
    getMaterialType(materialIndex) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
      return import_three2.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const pending = [];
      const extension = materialDef.extensions[this.name];
      materialParams.specularIntensity = extension.specularFactor !== void 0 ? extension.specularFactor : 1;
      if (extension.specularTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "specularIntensityMap", extension.specularTexture));
      }
      const colorArray = extension.specularColorFactor || [1, 1, 1];
      materialParams.specularColor = new import_three2.Color().setRGB(colorArray[0], colorArray[1], colorArray[2], import_three2.LinearSRGBColorSpace);
      if (extension.specularColorTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "specularColorMap", extension.specularColorTexture, import_three2.SRGBColorSpace));
      }
      return Promise.all(pending);
    }
  };
  var GLTFMaterialsBumpExtension = class {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.EXT_MATERIALS_BUMP;
    }
    getMaterialType(materialIndex) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
      return import_three2.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const pending = [];
      const extension = materialDef.extensions[this.name];
      materialParams.bumpScale = extension.bumpFactor !== void 0 ? extension.bumpFactor : 1;
      if (extension.bumpTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "bumpMap", extension.bumpTexture));
      }
      return Promise.all(pending);
    }
  };
  var GLTFMaterialsAnisotropyExtension = class {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_MATERIALS_ANISOTROPY;
    }
    getMaterialType(materialIndex) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
      return import_three2.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const pending = [];
      const extension = materialDef.extensions[this.name];
      if (extension.anisotropyStrength !== void 0) {
        materialParams.anisotropy = extension.anisotropyStrength;
      }
      if (extension.anisotropyRotation !== void 0) {
        materialParams.anisotropyRotation = extension.anisotropyRotation;
      }
      if (extension.anisotropyTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "anisotropyMap", extension.anisotropyTexture));
      }
      return Promise.all(pending);
    }
  };
  var GLTFTextureBasisUExtension = class {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_TEXTURE_BASISU;
    }
    loadTexture(textureIndex) {
      const parser = this.parser;
      const json = parser.json;
      const textureDef = json.textures[textureIndex];
      if (!textureDef.extensions || !textureDef.extensions[this.name]) {
        return null;
      }
      const extension = textureDef.extensions[this.name];
      const loader = parser.options.ktx2Loader;
      if (!loader) {
        if (json.extensionsRequired && json.extensionsRequired.indexOf(this.name) >= 0) {
          throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
        } else {
          return null;
        }
      }
      return parser.loadTextureImage(textureIndex, extension.source, loader);
    }
  };
  var GLTFTextureWebPExtension = class {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.EXT_TEXTURE_WEBP;
      this.isSupported = null;
    }
    loadTexture(textureIndex) {
      const name = this.name;
      const parser = this.parser;
      const json = parser.json;
      const textureDef = json.textures[textureIndex];
      if (!textureDef.extensions || !textureDef.extensions[name]) {
        return null;
      }
      const extension = textureDef.extensions[name];
      const source = json.images[extension.source];
      let loader = parser.textureLoader;
      if (source.uri) {
        const handler = parser.options.manager.getHandler(source.uri);
        if (handler !== null) loader = handler;
      }
      return this.detectSupport().then(function(isSupported) {
        if (isSupported) return parser.loadTextureImage(textureIndex, extension.source, loader);
        if (json.extensionsRequired && json.extensionsRequired.indexOf(name) >= 0) {
          throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
        }
        return parser.loadTexture(textureIndex);
      });
    }
    detectSupport() {
      if (!this.isSupported) {
        this.isSupported = new Promise(function(resolve) {
          const image = new Image();
          image.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
          image.onload = image.onerror = function() {
            resolve(image.height === 1);
          };
        });
      }
      return this.isSupported;
    }
  };
  var GLTFTextureAVIFExtension = class {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.EXT_TEXTURE_AVIF;
      this.isSupported = null;
    }
    loadTexture(textureIndex) {
      const name = this.name;
      const parser = this.parser;
      const json = parser.json;
      const textureDef = json.textures[textureIndex];
      if (!textureDef.extensions || !textureDef.extensions[name]) {
        return null;
      }
      const extension = textureDef.extensions[name];
      const source = json.images[extension.source];
      let loader = parser.textureLoader;
      if (source.uri) {
        const handler = parser.options.manager.getHandler(source.uri);
        if (handler !== null) loader = handler;
      }
      return this.detectSupport().then(function(isSupported) {
        if (isSupported) return parser.loadTextureImage(textureIndex, extension.source, loader);
        if (json.extensionsRequired && json.extensionsRequired.indexOf(name) >= 0) {
          throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
        }
        return parser.loadTexture(textureIndex);
      });
    }
    detectSupport() {
      if (!this.isSupported) {
        this.isSupported = new Promise(function(resolve) {
          const image = new Image();
          image.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=";
          image.onload = image.onerror = function() {
            resolve(image.height === 1);
          };
        });
      }
      return this.isSupported;
    }
  };
  var GLTFMeshoptCompression = class {
    constructor(parser) {
      this.name = EXTENSIONS.EXT_MESHOPT_COMPRESSION;
      this.parser = parser;
    }
    loadBufferView(index) {
      const json = this.parser.json;
      const bufferView = json.bufferViews[index];
      if (bufferView.extensions && bufferView.extensions[this.name]) {
        const extensionDef = bufferView.extensions[this.name];
        const buffer = this.parser.getDependency("buffer", extensionDef.buffer);
        const decoder = this.parser.options.meshoptDecoder;
        if (!decoder || !decoder.supported) {
          if (json.extensionsRequired && json.extensionsRequired.indexOf(this.name) >= 0) {
            throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
          } else {
            return null;
          }
        }
        return buffer.then(function(res) {
          const byteOffset = extensionDef.byteOffset || 0;
          const byteLength = extensionDef.byteLength || 0;
          const count = extensionDef.count;
          const stride = extensionDef.byteStride;
          const source = new Uint8Array(res, byteOffset, byteLength);
          if (decoder.decodeGltfBufferAsync) {
            return decoder.decodeGltfBufferAsync(count, stride, source, extensionDef.mode, extensionDef.filter).then(function(res2) {
              return res2.buffer;
            });
          } else {
            return decoder.ready.then(function() {
              const result = new ArrayBuffer(count * stride);
              decoder.decodeGltfBuffer(new Uint8Array(result), count, stride, source, extensionDef.mode, extensionDef.filter);
              return result;
            });
          }
        });
      } else {
        return null;
      }
    }
  };
  var GLTFMeshGpuInstancing = class {
    constructor(parser) {
      this.name = EXTENSIONS.EXT_MESH_GPU_INSTANCING;
      this.parser = parser;
    }
    createNodeMesh(nodeIndex) {
      const json = this.parser.json;
      const nodeDef = json.nodes[nodeIndex];
      if (!nodeDef.extensions || !nodeDef.extensions[this.name] || nodeDef.mesh === void 0) {
        return null;
      }
      const meshDef = json.meshes[nodeDef.mesh];
      for (const primitive of meshDef.primitives) {
        if (primitive.mode !== WEBGL_CONSTANTS.TRIANGLES && primitive.mode !== WEBGL_CONSTANTS.TRIANGLE_STRIP && primitive.mode !== WEBGL_CONSTANTS.TRIANGLE_FAN && primitive.mode !== void 0) {
          return null;
        }
      }
      const extensionDef = nodeDef.extensions[this.name];
      const attributesDef = extensionDef.attributes;
      const pending = [];
      const attributes = {};
      for (const key in attributesDef) {
        pending.push(this.parser.getDependency("accessor", attributesDef[key]).then((accessor) => {
          attributes[key] = accessor;
          return attributes[key];
        }));
      }
      if (pending.length < 1) {
        return null;
      }
      pending.push(this.parser.createNodeMesh(nodeIndex));
      return Promise.all(pending).then((results) => {
        const nodeObject = results.pop();
        const meshes = nodeObject.isGroup ? nodeObject.children : [nodeObject];
        const count = results[0].count;
        const instancedMeshes = [];
        for (const mesh of meshes) {
          const m = new import_three2.Matrix4();
          const p = new import_three2.Vector3();
          const q = new import_three2.Quaternion();
          const s = new import_three2.Vector3(1, 1, 1);
          const instancedMesh = new import_three2.InstancedMesh(mesh.geometry, mesh.material, count);
          for (let i = 0; i < count; i++) {
            if (attributes.TRANSLATION) {
              p.fromBufferAttribute(attributes.TRANSLATION, i);
            }
            if (attributes.ROTATION) {
              q.fromBufferAttribute(attributes.ROTATION, i);
            }
            if (attributes.SCALE) {
              s.fromBufferAttribute(attributes.SCALE, i);
            }
            instancedMesh.setMatrixAt(i, m.compose(p, q, s));
          }
          for (const attributeName in attributes) {
            if (attributeName === "_COLOR_0") {
              const attr = attributes[attributeName];
              instancedMesh.instanceColor = new import_three2.InstancedBufferAttribute(attr.array, attr.itemSize, attr.normalized);
            } else if (attributeName !== "TRANSLATION" && attributeName !== "ROTATION" && attributeName !== "SCALE") {
              mesh.geometry.setAttribute(attributeName, attributes[attributeName]);
            }
          }
          import_three2.Object3D.prototype.copy.call(instancedMesh, mesh);
          this.parser.assignFinalMaterial(instancedMesh);
          instancedMeshes.push(instancedMesh);
        }
        if (nodeObject.isGroup) {
          nodeObject.clear();
          nodeObject.add(...instancedMeshes);
          return nodeObject;
        }
        return instancedMeshes[0];
      });
    }
  };
  var BINARY_EXTENSION_HEADER_MAGIC = "glTF";
  var BINARY_EXTENSION_HEADER_LENGTH = 12;
  var BINARY_EXTENSION_CHUNK_TYPES = { JSON: 1313821514, BIN: 5130562 };
  var GLTFBinaryExtension = class {
    constructor(data) {
      this.name = EXTENSIONS.KHR_BINARY_GLTF;
      this.content = null;
      this.body = null;
      const headerView = new DataView(data, 0, BINARY_EXTENSION_HEADER_LENGTH);
      const textDecoder = new TextDecoder();
      this.header = {
        magic: textDecoder.decode(new Uint8Array(data.slice(0, 4))),
        version: headerView.getUint32(4, true),
        length: headerView.getUint32(8, true)
      };
      if (this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC) {
        throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
      } else if (this.header.version < 2) {
        throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
      }
      const chunkContentsLength = this.header.length - BINARY_EXTENSION_HEADER_LENGTH;
      const chunkView = new DataView(data, BINARY_EXTENSION_HEADER_LENGTH);
      let chunkIndex = 0;
      while (chunkIndex < chunkContentsLength) {
        const chunkLength = chunkView.getUint32(chunkIndex, true);
        chunkIndex += 4;
        const chunkType = chunkView.getUint32(chunkIndex, true);
        chunkIndex += 4;
        if (chunkType === BINARY_EXTENSION_CHUNK_TYPES.JSON) {
          const contentArray = new Uint8Array(data, BINARY_EXTENSION_HEADER_LENGTH + chunkIndex, chunkLength);
          this.content = textDecoder.decode(contentArray);
        } else if (chunkType === BINARY_EXTENSION_CHUNK_TYPES.BIN) {
          const byteOffset = BINARY_EXTENSION_HEADER_LENGTH + chunkIndex;
          this.body = data.slice(byteOffset, byteOffset + chunkLength);
        }
        chunkIndex += chunkLength;
      }
      if (this.content === null) {
        throw new Error("THREE.GLTFLoader: JSON content not found.");
      }
    }
  };
  var GLTFDracoMeshCompressionExtension = class {
    constructor(json, dracoLoader) {
      if (!dracoLoader) {
        throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
      }
      this.name = EXTENSIONS.KHR_DRACO_MESH_COMPRESSION;
      this.json = json;
      this.dracoLoader = dracoLoader;
      this.dracoLoader.preload();
    }
    decodePrimitive(primitive, parser) {
      const json = this.json;
      const dracoLoader = this.dracoLoader;
      const bufferViewIndex = primitive.extensions[this.name].bufferView;
      const gltfAttributeMap = primitive.extensions[this.name].attributes;
      const threeAttributeMap = {};
      const attributeNormalizedMap = {};
      const attributeTypeMap = {};
      for (const attributeName in gltfAttributeMap) {
        const threeAttributeName = ATTRIBUTES[attributeName] || attributeName.toLowerCase();
        threeAttributeMap[threeAttributeName] = gltfAttributeMap[attributeName];
      }
      for (const attributeName in primitive.attributes) {
        const threeAttributeName = ATTRIBUTES[attributeName] || attributeName.toLowerCase();
        if (gltfAttributeMap[attributeName] !== void 0) {
          const accessorDef = json.accessors[primitive.attributes[attributeName]];
          const componentType = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
          attributeTypeMap[threeAttributeName] = componentType.name;
          attributeNormalizedMap[threeAttributeName] = accessorDef.normalized === true;
        }
      }
      return parser.getDependency("bufferView", bufferViewIndex).then(function(bufferView) {
        return new Promise(function(resolve, reject) {
          dracoLoader.decodeDracoFile(bufferView, function(geometry) {
            for (const attributeName in geometry.attributes) {
              const attribute = geometry.attributes[attributeName];
              const normalized = attributeNormalizedMap[attributeName];
              if (normalized !== void 0) attribute.normalized = normalized;
            }
            resolve(geometry);
          }, threeAttributeMap, attributeTypeMap, import_three2.LinearSRGBColorSpace, reject);
        });
      });
    }
  };
  var GLTFTextureTransformExtension = class {
    constructor() {
      this.name = EXTENSIONS.KHR_TEXTURE_TRANSFORM;
    }
    extendTexture(texture, transform) {
      if ((transform.texCoord === void 0 || transform.texCoord === texture.channel) && transform.offset === void 0 && transform.rotation === void 0 && transform.scale === void 0) {
        return texture;
      }
      texture = texture.clone();
      if (transform.texCoord !== void 0) {
        texture.channel = transform.texCoord;
      }
      if (transform.offset !== void 0) {
        texture.offset.fromArray(transform.offset);
      }
      if (transform.rotation !== void 0) {
        texture.rotation = transform.rotation;
      }
      if (transform.scale !== void 0) {
        texture.repeat.fromArray(transform.scale);
      }
      texture.needsUpdate = true;
      return texture;
    }
  };
  var GLTFMeshQuantizationExtension = class {
    constructor() {
      this.name = EXTENSIONS.KHR_MESH_QUANTIZATION;
    }
  };
  var GLTFCubicSplineInterpolant = class extends import_three2.Interpolant {
    constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
      super(parameterPositions, sampleValues, sampleSize, resultBuffer);
    }
    copySampleValue_(index) {
      const result = this.resultBuffer, values = this.sampleValues, valueSize = this.valueSize, offset = index * valueSize * 3 + valueSize;
      for (let i = 0; i !== valueSize; i++) {
        result[i] = values[offset + i];
      }
      return result;
    }
    interpolate_(i1, t0, t, t1) {
      const result = this.resultBuffer;
      const values = this.sampleValues;
      const stride = this.valueSize;
      const stride2 = stride * 2;
      const stride3 = stride * 3;
      const td = t1 - t0;
      const p = (t - t0) / td;
      const pp = p * p;
      const ppp = pp * p;
      const offset1 = i1 * stride3;
      const offset0 = offset1 - stride3;
      const s2 = -2 * ppp + 3 * pp;
      const s3 = ppp - pp;
      const s0 = 1 - s2;
      const s1 = s3 - pp + p;
      for (let i = 0; i !== stride; i++) {
        const p0 = values[offset0 + i + stride];
        const m0 = values[offset0 + i + stride2] * td;
        const p1 = values[offset1 + i + stride];
        const m1 = values[offset1 + i] * td;
        result[i] = s0 * p0 + s1 * m0 + s2 * p1 + s3 * m1;
      }
      return result;
    }
  };
  var _q = new import_three2.Quaternion();
  var GLTFCubicSplineQuaternionInterpolant = class extends GLTFCubicSplineInterpolant {
    interpolate_(i1, t0, t, t1) {
      const result = super.interpolate_(i1, t0, t, t1);
      _q.fromArray(result).normalize().toArray(result);
      return result;
    }
  };
  var WEBGL_CONSTANTS = {
    FLOAT: 5126,
    //FLOAT_MAT2: 35674,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    LINEAR: 9729,
    REPEAT: 10497,
    SAMPLER_2D: 35678,
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    UNSIGNED_BYTE: 5121,
    UNSIGNED_SHORT: 5123
  };
  var WEBGL_COMPONENT_TYPES = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array
  };
  var WEBGL_FILTERS = {
    9728: import_three2.NearestFilter,
    9729: import_three2.LinearFilter,
    9984: import_three2.NearestMipmapNearestFilter,
    9985: import_three2.LinearMipmapNearestFilter,
    9986: import_three2.NearestMipmapLinearFilter,
    9987: import_three2.LinearMipmapLinearFilter
  };
  var WEBGL_WRAPPINGS = {
    33071: import_three2.ClampToEdgeWrapping,
    33648: import_three2.MirroredRepeatWrapping,
    10497: import_three2.RepeatWrapping
  };
  var WEBGL_TYPE_SIZES = {
    "SCALAR": 1,
    "VEC2": 2,
    "VEC3": 3,
    "VEC4": 4,
    "MAT2": 4,
    "MAT3": 9,
    "MAT4": 16
  };
  var ATTRIBUTES = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex"
  };
  var PATH_PROPERTIES = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences"
  };
  var INTERPOLATION = {
    CUBICSPLINE: void 0,
    // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
    // keyframe track will be initialized with a default interpolation type, then modified.
    LINEAR: import_three2.InterpolateLinear,
    STEP: import_three2.InterpolateDiscrete
  };
  var ALPHA_MODES = {
    OPAQUE: "OPAQUE",
    MASK: "MASK",
    BLEND: "BLEND"
  };
  function createDefaultMaterial(cache) {
    if (cache["DefaultMaterial"] === void 0) {
      cache["DefaultMaterial"] = new import_three2.MeshStandardMaterial({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: false,
        depthTest: true,
        side: import_three2.FrontSide
      });
    }
    return cache["DefaultMaterial"];
  }
  function addUnknownExtensionsToUserData(knownExtensions, object, objectDef) {
    for (const name in objectDef.extensions) {
      if (knownExtensions[name] === void 0) {
        object.userData.gltfExtensions = object.userData.gltfExtensions || {};
        object.userData.gltfExtensions[name] = objectDef.extensions[name];
      }
    }
  }
  function assignExtrasToUserData(object, gltfDef) {
    if (gltfDef.extras !== void 0) {
      if (typeof gltfDef.extras === "object") {
        Object.assign(object.userData, gltfDef.extras);
      } else {
        console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + gltfDef.extras);
      }
    }
  }
  function addMorphTargets(geometry, targets, parser) {
    let hasMorphPosition = false;
    let hasMorphNormal = false;
    let hasMorphColor = false;
    for (let i = 0, il = targets.length; i < il; i++) {
      const target = targets[i];
      if (target.POSITION !== void 0) hasMorphPosition = true;
      if (target.NORMAL !== void 0) hasMorphNormal = true;
      if (target.COLOR_0 !== void 0) hasMorphColor = true;
      if (hasMorphPosition && hasMorphNormal && hasMorphColor) break;
    }
    if (!hasMorphPosition && !hasMorphNormal && !hasMorphColor) return Promise.resolve(geometry);
    const pendingPositionAccessors = [];
    const pendingNormalAccessors = [];
    const pendingColorAccessors = [];
    for (let i = 0, il = targets.length; i < il; i++) {
      const target = targets[i];
      if (hasMorphPosition) {
        const pendingAccessor = target.POSITION !== void 0 ? parser.getDependency("accessor", target.POSITION) : geometry.attributes.position;
        pendingPositionAccessors.push(pendingAccessor);
      }
      if (hasMorphNormal) {
        const pendingAccessor = target.NORMAL !== void 0 ? parser.getDependency("accessor", target.NORMAL) : geometry.attributes.normal;
        pendingNormalAccessors.push(pendingAccessor);
      }
      if (hasMorphColor) {
        const pendingAccessor = target.COLOR_0 !== void 0 ? parser.getDependency("accessor", target.COLOR_0) : geometry.attributes.color;
        pendingColorAccessors.push(pendingAccessor);
      }
    }
    return Promise.all([
      Promise.all(pendingPositionAccessors),
      Promise.all(pendingNormalAccessors),
      Promise.all(pendingColorAccessors)
    ]).then(function(accessors) {
      const morphPositions = accessors[0];
      const morphNormals = accessors[1];
      const morphColors = accessors[2];
      if (hasMorphPosition) geometry.morphAttributes.position = morphPositions;
      if (hasMorphNormal) geometry.morphAttributes.normal = morphNormals;
      if (hasMorphColor) geometry.morphAttributes.color = morphColors;
      geometry.morphTargetsRelative = true;
      return geometry;
    });
  }
  function updateMorphTargets(mesh, meshDef) {
    mesh.updateMorphTargets();
    if (meshDef.weights !== void 0) {
      for (let i = 0, il = meshDef.weights.length; i < il; i++) {
        mesh.morphTargetInfluences[i] = meshDef.weights[i];
      }
    }
    if (meshDef.extras && Array.isArray(meshDef.extras.targetNames)) {
      const targetNames = meshDef.extras.targetNames;
      if (mesh.morphTargetInfluences.length === targetNames.length) {
        mesh.morphTargetDictionary = {};
        for (let i = 0, il = targetNames.length; i < il; i++) {
          mesh.morphTargetDictionary[targetNames[i]] = i;
        }
      } else {
        console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
      }
    }
  }
  function createPrimitiveKey(primitiveDef) {
    let geometryKey;
    const dracoExtension = primitiveDef.extensions && primitiveDef.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION];
    if (dracoExtension) {
      geometryKey = "draco:" + dracoExtension.bufferView + ":" + dracoExtension.indices + ":" + createAttributesKey(dracoExtension.attributes);
    } else {
      geometryKey = primitiveDef.indices + ":" + createAttributesKey(primitiveDef.attributes) + ":" + primitiveDef.mode;
    }
    if (primitiveDef.targets !== void 0) {
      for (let i = 0, il = primitiveDef.targets.length; i < il; i++) {
        geometryKey += ":" + createAttributesKey(primitiveDef.targets[i]);
      }
    }
    return geometryKey;
  }
  function createAttributesKey(attributes) {
    let attributesKey = "";
    const keys = Object.keys(attributes).sort();
    for (let i = 0, il = keys.length; i < il; i++) {
      attributesKey += keys[i] + ":" + attributes[keys[i]] + ";";
    }
    return attributesKey;
  }
  function getNormalizedComponentScale(constructor) {
    switch (constructor) {
      case Int8Array:
        return 1 / 127;
      case Uint8Array:
        return 1 / 255;
      case Int16Array:
        return 1 / 32767;
      case Uint16Array:
        return 1 / 65535;
      default:
        throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
    }
  }
  function getImageURIMimeType(uri) {
    if (uri.search(/\.jpe?g($|\?)/i) > 0 || uri.search(/^data\:image\/jpeg/) === 0) return "image/jpeg";
    if (uri.search(/\.webp($|\?)/i) > 0 || uri.search(/^data\:image\/webp/) === 0) return "image/webp";
    return "image/png";
  }
  var _identityMatrix = new import_three2.Matrix4();
  var GLTFParser = class {
    constructor(json = {}, options = {}) {
      this.json = json;
      this.extensions = {};
      this.plugins = {};
      this.options = options;
      this.cache = new GLTFRegistry();
      this.associations = /* @__PURE__ */ new Map();
      this.primitiveCache = {};
      this.nodeCache = {};
      this.meshCache = { refs: {}, uses: {} };
      this.cameraCache = { refs: {}, uses: {} };
      this.lightCache = { refs: {}, uses: {} };
      this.sourceCache = {};
      this.textureCache = {};
      this.nodeNamesUsed = {};
      let isSafari = false;
      let isFirefox = false;
      let firefoxVersion = -1;
      if (typeof navigator !== "undefined") {
        isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === true;
        isFirefox = navigator.userAgent.indexOf("Firefox") > -1;
        firefoxVersion = isFirefox ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1;
      }
      if (typeof createImageBitmap === "undefined" || isSafari || isFirefox && firefoxVersion < 98) {
        this.textureLoader = new import_three2.TextureLoader(this.options.manager);
      } else {
        this.textureLoader = new import_three2.ImageBitmapLoader(this.options.manager);
      }
      this.textureLoader.setCrossOrigin(this.options.crossOrigin);
      this.textureLoader.setRequestHeader(this.options.requestHeader);
      this.fileLoader = new import_three2.FileLoader(this.options.manager);
      this.fileLoader.setResponseType("arraybuffer");
      if (this.options.crossOrigin === "use-credentials") {
        this.fileLoader.setWithCredentials(true);
      }
    }
    setExtensions(extensions) {
      this.extensions = extensions;
    }
    setPlugins(plugins) {
      this.plugins = plugins;
    }
    parse(onLoad, onError) {
      const parser = this;
      const json = this.json;
      const extensions = this.extensions;
      this.cache.removeAll();
      this.nodeCache = {};
      this._invokeAll(function(ext) {
        return ext._markDefs && ext._markDefs();
      });
      Promise.all(this._invokeAll(function(ext) {
        return ext.beforeRoot && ext.beforeRoot();
      })).then(function() {
        return Promise.all([
          parser.getDependencies("scene"),
          parser.getDependencies("animation"),
          parser.getDependencies("camera")
        ]);
      }).then(function(dependencies) {
        const result = {
          scene: dependencies[0][json.scene || 0],
          scenes: dependencies[0],
          animations: dependencies[1],
          cameras: dependencies[2],
          asset: json.asset,
          parser,
          userData: {}
        };
        addUnknownExtensionsToUserData(extensions, result, json);
        assignExtrasToUserData(result, json);
        return Promise.all(parser._invokeAll(function(ext) {
          return ext.afterRoot && ext.afterRoot(result);
        })).then(function() {
          onLoad(result);
        });
      }).catch(onError);
    }
    /**
     * Marks the special nodes/meshes in json for efficient parse.
     */
    _markDefs() {
      const nodeDefs = this.json.nodes || [];
      const skinDefs = this.json.skins || [];
      const meshDefs = this.json.meshes || [];
      for (let skinIndex = 0, skinLength = skinDefs.length; skinIndex < skinLength; skinIndex++) {
        const joints = skinDefs[skinIndex].joints;
        for (let i = 0, il = joints.length; i < il; i++) {
          nodeDefs[joints[i]].isBone = true;
        }
      }
      for (let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex++) {
        const nodeDef = nodeDefs[nodeIndex];
        if (nodeDef.mesh !== void 0) {
          this._addNodeRef(this.meshCache, nodeDef.mesh);
          if (nodeDef.skin !== void 0) {
            meshDefs[nodeDef.mesh].isSkinnedMesh = true;
          }
        }
        if (nodeDef.camera !== void 0) {
          this._addNodeRef(this.cameraCache, nodeDef.camera);
        }
      }
    }
    /**
     * Counts references to shared node / Object3D resources. These resources
     * can be reused, or "instantiated", at multiple nodes in the scene
     * hierarchy. Mesh, Camera, and Light instances are instantiated and must
     * be marked. Non-scenegraph resources (like Materials, Geometries, and
     * Textures) can be reused directly and are not marked here.
     *
     * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
     */
    _addNodeRef(cache, index) {
      if (index === void 0) return;
      if (cache.refs[index] === void 0) {
        cache.refs[index] = cache.uses[index] = 0;
      }
      cache.refs[index]++;
    }
    /** Returns a reference to a shared resource, cloning it if necessary. */
    _getNodeRef(cache, index, object) {
      if (cache.refs[index] <= 1) return object;
      const ref = object.clone();
      const updateMappings = (original, clone) => {
        const mappings = this.associations.get(original);
        if (mappings != null) {
          this.associations.set(clone, mappings);
        }
        for (const [i, child] of original.children.entries()) {
          updateMappings(child, clone.children[i]);
        }
      };
      updateMappings(object, ref);
      ref.name += "_instance_" + cache.uses[index]++;
      return ref;
    }
    _invokeOne(func) {
      const extensions = Object.values(this.plugins);
      extensions.push(this);
      for (let i = 0; i < extensions.length; i++) {
        const result = func(extensions[i]);
        if (result) return result;
      }
      return null;
    }
    _invokeAll(func) {
      const extensions = Object.values(this.plugins);
      extensions.unshift(this);
      const pending = [];
      for (let i = 0; i < extensions.length; i++) {
        const result = func(extensions[i]);
        if (result) pending.push(result);
      }
      return pending;
    }
    /**
     * Requests the specified dependency asynchronously, with caching.
     * @param {string} type
     * @param {number} index
     * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
     */
    getDependency(type, index) {
      const cacheKey = type + ":" + index;
      let dependency = this.cache.get(cacheKey);
      if (!dependency) {
        switch (type) {
          case "scene":
            dependency = this.loadScene(index);
            break;
          case "node":
            dependency = this._invokeOne(function(ext) {
              return ext.loadNode && ext.loadNode(index);
            });
            break;
          case "mesh":
            dependency = this._invokeOne(function(ext) {
              return ext.loadMesh && ext.loadMesh(index);
            });
            break;
          case "accessor":
            dependency = this.loadAccessor(index);
            break;
          case "bufferView":
            dependency = this._invokeOne(function(ext) {
              return ext.loadBufferView && ext.loadBufferView(index);
            });
            break;
          case "buffer":
            dependency = this.loadBuffer(index);
            break;
          case "material":
            dependency = this._invokeOne(function(ext) {
              return ext.loadMaterial && ext.loadMaterial(index);
            });
            break;
          case "texture":
            dependency = this._invokeOne(function(ext) {
              return ext.loadTexture && ext.loadTexture(index);
            });
            break;
          case "skin":
            dependency = this.loadSkin(index);
            break;
          case "animation":
            dependency = this._invokeOne(function(ext) {
              return ext.loadAnimation && ext.loadAnimation(index);
            });
            break;
          case "camera":
            dependency = this.loadCamera(index);
            break;
          default:
            dependency = this._invokeOne(function(ext) {
              return ext != this && ext.getDependency && ext.getDependency(type, index);
            });
            if (!dependency) {
              throw new Error("Unknown type: " + type);
            }
            break;
        }
        this.cache.add(cacheKey, dependency);
      }
      return dependency;
    }
    /**
     * Requests all dependencies of the specified type asynchronously, with caching.
     * @param {string} type
     * @return {Promise<Array<Object>>}
     */
    getDependencies(type) {
      let dependencies = this.cache.get(type);
      if (!dependencies) {
        const parser = this;
        const defs = this.json[type + (type === "mesh" ? "es" : "s")] || [];
        dependencies = Promise.all(defs.map(function(def, index) {
          return parser.getDependency(type, index);
        }));
        this.cache.add(type, dependencies);
      }
      return dependencies;
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
     * @param {number} bufferIndex
     * @return {Promise<ArrayBuffer>}
     */
    loadBuffer(bufferIndex) {
      const bufferDef = this.json.buffers[bufferIndex];
      const loader = this.fileLoader;
      if (bufferDef.type && bufferDef.type !== "arraybuffer") {
        throw new Error("THREE.GLTFLoader: " + bufferDef.type + " buffer type is not supported.");
      }
      if (bufferDef.uri === void 0 && bufferIndex === 0) {
        return Promise.resolve(this.extensions[EXTENSIONS.KHR_BINARY_GLTF].body);
      }
      const options = this.options;
      return new Promise(function(resolve, reject) {
        loader.load(import_three2.LoaderUtils.resolveURL(bufferDef.uri, options.path), resolve, void 0, function() {
          reject(new Error('THREE.GLTFLoader: Failed to load buffer "' + bufferDef.uri + '".'));
        });
      });
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
     * @param {number} bufferViewIndex
     * @return {Promise<ArrayBuffer>}
     */
    loadBufferView(bufferViewIndex) {
      const bufferViewDef = this.json.bufferViews[bufferViewIndex];
      return this.getDependency("buffer", bufferViewDef.buffer).then(function(buffer) {
        const byteLength = bufferViewDef.byteLength || 0;
        const byteOffset = bufferViewDef.byteOffset || 0;
        return buffer.slice(byteOffset, byteOffset + byteLength);
      });
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
     * @param {number} accessorIndex
     * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
     */
    loadAccessor(accessorIndex) {
      const parser = this;
      const json = this.json;
      const accessorDef = this.json.accessors[accessorIndex];
      if (accessorDef.bufferView === void 0 && accessorDef.sparse === void 0) {
        const itemSize = WEBGL_TYPE_SIZES[accessorDef.type];
        const TypedArray = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
        const normalized = accessorDef.normalized === true;
        const array = new TypedArray(accessorDef.count * itemSize);
        return Promise.resolve(new import_three2.BufferAttribute(array, itemSize, normalized));
      }
      const pendingBufferViews = [];
      if (accessorDef.bufferView !== void 0) {
        pendingBufferViews.push(this.getDependency("bufferView", accessorDef.bufferView));
      } else {
        pendingBufferViews.push(null);
      }
      if (accessorDef.sparse !== void 0) {
        pendingBufferViews.push(this.getDependency("bufferView", accessorDef.sparse.indices.bufferView));
        pendingBufferViews.push(this.getDependency("bufferView", accessorDef.sparse.values.bufferView));
      }
      return Promise.all(pendingBufferViews).then(function(bufferViews) {
        const bufferView = bufferViews[0];
        const itemSize = WEBGL_TYPE_SIZES[accessorDef.type];
        const TypedArray = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
        const elementBytes = TypedArray.BYTES_PER_ELEMENT;
        const itemBytes = elementBytes * itemSize;
        const byteOffset = accessorDef.byteOffset || 0;
        const byteStride = accessorDef.bufferView !== void 0 ? json.bufferViews[accessorDef.bufferView].byteStride : void 0;
        const normalized = accessorDef.normalized === true;
        let array, bufferAttribute;
        if (byteStride && byteStride !== itemBytes) {
          const ibSlice = Math.floor(byteOffset / byteStride);
          const ibCacheKey = "InterleavedBuffer:" + accessorDef.bufferView + ":" + accessorDef.componentType + ":" + ibSlice + ":" + accessorDef.count;
          let ib = parser.cache.get(ibCacheKey);
          if (!ib) {
            array = new TypedArray(bufferView, ibSlice * byteStride, accessorDef.count * byteStride / elementBytes);
            ib = new import_three2.InterleavedBuffer(array, byteStride / elementBytes);
            parser.cache.add(ibCacheKey, ib);
          }
          bufferAttribute = new import_three2.InterleavedBufferAttribute(ib, itemSize, byteOffset % byteStride / elementBytes, normalized);
        } else {
          if (bufferView === null) {
            array = new TypedArray(accessorDef.count * itemSize);
          } else {
            array = new TypedArray(bufferView, byteOffset, accessorDef.count * itemSize);
          }
          bufferAttribute = new import_three2.BufferAttribute(array, itemSize, normalized);
        }
        if (accessorDef.sparse !== void 0) {
          const itemSizeIndices = WEBGL_TYPE_SIZES.SCALAR;
          const TypedArrayIndices = WEBGL_COMPONENT_TYPES[accessorDef.sparse.indices.componentType];
          const byteOffsetIndices = accessorDef.sparse.indices.byteOffset || 0;
          const byteOffsetValues = accessorDef.sparse.values.byteOffset || 0;
          const sparseIndices = new TypedArrayIndices(bufferViews[1], byteOffsetIndices, accessorDef.sparse.count * itemSizeIndices);
          const sparseValues = new TypedArray(bufferViews[2], byteOffsetValues, accessorDef.sparse.count * itemSize);
          if (bufferView !== null) {
            bufferAttribute = new import_three2.BufferAttribute(bufferAttribute.array.slice(), bufferAttribute.itemSize, bufferAttribute.normalized);
          }
          for (let i = 0, il = sparseIndices.length; i < il; i++) {
            const index = sparseIndices[i];
            bufferAttribute.setX(index, sparseValues[i * itemSize]);
            if (itemSize >= 2) bufferAttribute.setY(index, sparseValues[i * itemSize + 1]);
            if (itemSize >= 3) bufferAttribute.setZ(index, sparseValues[i * itemSize + 2]);
            if (itemSize >= 4) bufferAttribute.setW(index, sparseValues[i * itemSize + 3]);
            if (itemSize >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
          }
        }
        return bufferAttribute;
      });
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
     * @param {number} textureIndex
     * @return {Promise<THREE.Texture|null>}
     */
    loadTexture(textureIndex) {
      const json = this.json;
      const options = this.options;
      const textureDef = json.textures[textureIndex];
      const sourceIndex = textureDef.source;
      const sourceDef = json.images[sourceIndex];
      let loader = this.textureLoader;
      if (sourceDef.uri) {
        const handler = options.manager.getHandler(sourceDef.uri);
        if (handler !== null) loader = handler;
      }
      return this.loadTextureImage(textureIndex, sourceIndex, loader);
    }
    loadTextureImage(textureIndex, sourceIndex, loader) {
      const parser = this;
      const json = this.json;
      const textureDef = json.textures[textureIndex];
      const sourceDef = json.images[sourceIndex];
      const cacheKey = (sourceDef.uri || sourceDef.bufferView) + ":" + textureDef.sampler;
      if (this.textureCache[cacheKey]) {
        return this.textureCache[cacheKey];
      }
      const promise = this.loadImageSource(sourceIndex, loader).then(function(texture) {
        texture.flipY = false;
        texture.name = textureDef.name || sourceDef.name || "";
        if (texture.name === "" && typeof sourceDef.uri === "string" && sourceDef.uri.startsWith("data:image/") === false) {
          texture.name = sourceDef.uri;
        }
        const samplers = json.samplers || {};
        const sampler = samplers[textureDef.sampler] || {};
        texture.magFilter = WEBGL_FILTERS[sampler.magFilter] || import_three2.LinearFilter;
        texture.minFilter = WEBGL_FILTERS[sampler.minFilter] || import_three2.LinearMipmapLinearFilter;
        texture.wrapS = WEBGL_WRAPPINGS[sampler.wrapS] || import_three2.RepeatWrapping;
        texture.wrapT = WEBGL_WRAPPINGS[sampler.wrapT] || import_three2.RepeatWrapping;
        parser.associations.set(texture, { textures: textureIndex });
        return texture;
      }).catch(function() {
        return null;
      });
      this.textureCache[cacheKey] = promise;
      return promise;
    }
    loadImageSource(sourceIndex, loader) {
      const parser = this;
      const json = this.json;
      const options = this.options;
      if (this.sourceCache[sourceIndex] !== void 0) {
        return this.sourceCache[sourceIndex].then((texture) => texture.clone());
      }
      const sourceDef = json.images[sourceIndex];
      const URL2 = self.URL || self.webkitURL;
      let sourceURI = sourceDef.uri || "";
      let isObjectURL = false;
      if (sourceDef.bufferView !== void 0) {
        sourceURI = parser.getDependency("bufferView", sourceDef.bufferView).then(function(bufferView) {
          isObjectURL = true;
          const blob = new Blob([bufferView], { type: sourceDef.mimeType });
          sourceURI = URL2.createObjectURL(blob);
          return sourceURI;
        });
      } else if (sourceDef.uri === void 0) {
        throw new Error("THREE.GLTFLoader: Image " + sourceIndex + " is missing URI and bufferView");
      }
      const promise = Promise.resolve(sourceURI).then(function(sourceURI2) {
        return new Promise(function(resolve, reject) {
          let onLoad = resolve;
          if (loader.isImageBitmapLoader === true) {
            onLoad = function(imageBitmap) {
              const texture = new import_three2.Texture(imageBitmap);
              texture.needsUpdate = true;
              resolve(texture);
            };
          }
          loader.load(import_three2.LoaderUtils.resolveURL(sourceURI2, options.path), onLoad, void 0, reject);
        });
      }).then(function(texture) {
        if (isObjectURL === true) {
          URL2.revokeObjectURL(sourceURI);
        }
        texture.userData.mimeType = sourceDef.mimeType || getImageURIMimeType(sourceDef.uri);
        return texture;
      }).catch(function(error) {
        console.error("THREE.GLTFLoader: Couldn't load texture", sourceURI);
        throw error;
      });
      this.sourceCache[sourceIndex] = promise;
      return promise;
    }
    /**
     * Asynchronously assigns a texture to the given material parameters.
     * @param {Object} materialParams
     * @param {string} mapName
     * @param {Object} mapDef
     * @return {Promise<Texture>}
     */
    assignTexture(materialParams, mapName, mapDef, colorSpace) {
      const parser = this;
      return this.getDependency("texture", mapDef.index).then(function(texture) {
        if (!texture) return null;
        if (mapDef.texCoord !== void 0 && mapDef.texCoord > 0) {
          texture = texture.clone();
          texture.channel = mapDef.texCoord;
        }
        if (parser.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM]) {
          const transform = mapDef.extensions !== void 0 ? mapDef.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM] : void 0;
          if (transform) {
            const gltfReference = parser.associations.get(texture);
            texture = parser.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM].extendTexture(texture, transform);
            parser.associations.set(texture, gltfReference);
          }
        }
        if (colorSpace !== void 0) {
          texture.colorSpace = colorSpace;
        }
        materialParams[mapName] = texture;
        return texture;
      });
    }
    /**
     * Assigns final material to a Mesh, Line, or Points instance. The instance
     * already has a material (generated from the glTF material options alone)
     * but reuse of the same glTF material may require multiple threejs materials
     * to accommodate different primitive types, defines, etc. New materials will
     * be created if necessary, and reused from a cache.
     * @param  {Object3D} mesh Mesh, Line, or Points instance.
     */
    assignFinalMaterial(mesh) {
      const geometry = mesh.geometry;
      let material = mesh.material;
      const useDerivativeTangents = geometry.attributes.tangent === void 0;
      const useVertexColors = geometry.attributes.color !== void 0;
      const useFlatShading = geometry.attributes.normal === void 0;
      if (mesh.isPoints) {
        const cacheKey = "PointsMaterial:" + material.uuid;
        let pointsMaterial = this.cache.get(cacheKey);
        if (!pointsMaterial) {
          pointsMaterial = new import_three2.PointsMaterial();
          import_three2.Material.prototype.copy.call(pointsMaterial, material);
          pointsMaterial.color.copy(material.color);
          pointsMaterial.map = material.map;
          pointsMaterial.sizeAttenuation = false;
          this.cache.add(cacheKey, pointsMaterial);
        }
        material = pointsMaterial;
      } else if (mesh.isLine) {
        const cacheKey = "LineBasicMaterial:" + material.uuid;
        let lineMaterial = this.cache.get(cacheKey);
        if (!lineMaterial) {
          lineMaterial = new import_three2.LineBasicMaterial();
          import_three2.Material.prototype.copy.call(lineMaterial, material);
          lineMaterial.color.copy(material.color);
          lineMaterial.map = material.map;
          this.cache.add(cacheKey, lineMaterial);
        }
        material = lineMaterial;
      }
      if (useDerivativeTangents || useVertexColors || useFlatShading) {
        let cacheKey = "ClonedMaterial:" + material.uuid + ":";
        if (useDerivativeTangents) cacheKey += "derivative-tangents:";
        if (useVertexColors) cacheKey += "vertex-colors:";
        if (useFlatShading) cacheKey += "flat-shading:";
        let cachedMaterial = this.cache.get(cacheKey);
        if (!cachedMaterial) {
          cachedMaterial = material.clone();
          if (useVertexColors) cachedMaterial.vertexColors = true;
          if (useFlatShading) cachedMaterial.flatShading = true;
          if (useDerivativeTangents) {
            if (cachedMaterial.normalScale) cachedMaterial.normalScale.y *= -1;
            if (cachedMaterial.clearcoatNormalScale) cachedMaterial.clearcoatNormalScale.y *= -1;
          }
          this.cache.add(cacheKey, cachedMaterial);
          this.associations.set(cachedMaterial, this.associations.get(material));
        }
        material = cachedMaterial;
      }
      mesh.material = material;
    }
    getMaterialType() {
      return import_three2.MeshStandardMaterial;
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
     * @param {number} materialIndex
     * @return {Promise<Material>}
     */
    loadMaterial(materialIndex) {
      const parser = this;
      const json = this.json;
      const extensions = this.extensions;
      const materialDef = json.materials[materialIndex];
      let materialType;
      const materialParams = {};
      const materialExtensions = materialDef.extensions || {};
      const pending = [];
      if (materialExtensions[EXTENSIONS.KHR_MATERIALS_UNLIT]) {
        const kmuExtension = extensions[EXTENSIONS.KHR_MATERIALS_UNLIT];
        materialType = kmuExtension.getMaterialType();
        pending.push(kmuExtension.extendParams(materialParams, materialDef, parser));
      } else {
        const metallicRoughness = materialDef.pbrMetallicRoughness || {};
        materialParams.color = new import_three2.Color(1, 1, 1);
        materialParams.opacity = 1;
        if (Array.isArray(metallicRoughness.baseColorFactor)) {
          const array = metallicRoughness.baseColorFactor;
          materialParams.color.setRGB(array[0], array[1], array[2], import_three2.LinearSRGBColorSpace);
          materialParams.opacity = array[3];
        }
        if (metallicRoughness.baseColorTexture !== void 0) {
          pending.push(parser.assignTexture(materialParams, "map", metallicRoughness.baseColorTexture, import_three2.SRGBColorSpace));
        }
        materialParams.metalness = metallicRoughness.metallicFactor !== void 0 ? metallicRoughness.metallicFactor : 1;
        materialParams.roughness = metallicRoughness.roughnessFactor !== void 0 ? metallicRoughness.roughnessFactor : 1;
        if (metallicRoughness.metallicRoughnessTexture !== void 0) {
          pending.push(parser.assignTexture(materialParams, "metalnessMap", metallicRoughness.metallicRoughnessTexture));
          pending.push(parser.assignTexture(materialParams, "roughnessMap", metallicRoughness.metallicRoughnessTexture));
        }
        materialType = this._invokeOne(function(ext) {
          return ext.getMaterialType && ext.getMaterialType(materialIndex);
        });
        pending.push(Promise.all(this._invokeAll(function(ext) {
          return ext.extendMaterialParams && ext.extendMaterialParams(materialIndex, materialParams);
        })));
      }
      if (materialDef.doubleSided === true) {
        materialParams.side = import_three2.DoubleSide;
      }
      const alphaMode = materialDef.alphaMode || ALPHA_MODES.OPAQUE;
      if (alphaMode === ALPHA_MODES.BLEND) {
        materialParams.transparent = true;
        materialParams.depthWrite = false;
      } else {
        materialParams.transparent = false;
        if (alphaMode === ALPHA_MODES.MASK) {
          materialParams.alphaTest = materialDef.alphaCutoff !== void 0 ? materialDef.alphaCutoff : 0.5;
        }
      }
      if (materialDef.normalTexture !== void 0 && materialType !== import_three2.MeshBasicMaterial) {
        pending.push(parser.assignTexture(materialParams, "normalMap", materialDef.normalTexture));
        materialParams.normalScale = new import_three2.Vector2(1, 1);
        if (materialDef.normalTexture.scale !== void 0) {
          const scale = materialDef.normalTexture.scale;
          materialParams.normalScale.set(scale, scale);
        }
      }
      if (materialDef.occlusionTexture !== void 0 && materialType !== import_three2.MeshBasicMaterial) {
        pending.push(parser.assignTexture(materialParams, "aoMap", materialDef.occlusionTexture));
        if (materialDef.occlusionTexture.strength !== void 0) {
          materialParams.aoMapIntensity = materialDef.occlusionTexture.strength;
        }
      }
      if (materialDef.emissiveFactor !== void 0 && materialType !== import_three2.MeshBasicMaterial) {
        const emissiveFactor = materialDef.emissiveFactor;
        materialParams.emissive = new import_three2.Color().setRGB(emissiveFactor[0], emissiveFactor[1], emissiveFactor[2], import_three2.LinearSRGBColorSpace);
      }
      if (materialDef.emissiveTexture !== void 0 && materialType !== import_three2.MeshBasicMaterial) {
        pending.push(parser.assignTexture(materialParams, "emissiveMap", materialDef.emissiveTexture, import_three2.SRGBColorSpace));
      }
      return Promise.all(pending).then(function() {
        const material = new materialType(materialParams);
        if (materialDef.name) material.name = materialDef.name;
        assignExtrasToUserData(material, materialDef);
        parser.associations.set(material, { materials: materialIndex });
        if (materialDef.extensions) addUnknownExtensionsToUserData(extensions, material, materialDef);
        return material;
      });
    }
    /** When Object3D instances are targeted by animation, they need unique names. */
    createUniqueName(originalName) {
      const sanitizedName = import_three2.PropertyBinding.sanitizeNodeName(originalName || "");
      if (sanitizedName in this.nodeNamesUsed) {
        return sanitizedName + "_" + ++this.nodeNamesUsed[sanitizedName];
      } else {
        this.nodeNamesUsed[sanitizedName] = 0;
        return sanitizedName;
      }
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
     *
     * Creates BufferGeometries from primitives.
     *
     * @param {Array<GLTF.Primitive>} primitives
     * @return {Promise<Array<BufferGeometry>>}
     */
    loadGeometries(primitives) {
      const parser = this;
      const extensions = this.extensions;
      const cache = this.primitiveCache;
      function createDracoPrimitive(primitive) {
        return extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(primitive, parser).then(function(geometry) {
          return addPrimitiveAttributes(geometry, primitive, parser);
        });
      }
      const pending = [];
      for (let i = 0, il = primitives.length; i < il; i++) {
        const primitive = primitives[i];
        const cacheKey = createPrimitiveKey(primitive);
        const cached = cache[cacheKey];
        if (cached) {
          pending.push(cached.promise);
        } else {
          let geometryPromise;
          if (primitive.extensions && primitive.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION]) {
            geometryPromise = createDracoPrimitive(primitive);
          } else {
            geometryPromise = addPrimitiveAttributes(new import_three2.BufferGeometry(), primitive, parser);
          }
          cache[cacheKey] = { primitive, promise: geometryPromise };
          pending.push(geometryPromise);
        }
      }
      return Promise.all(pending);
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
     * @param {number} meshIndex
     * @return {Promise<Group|Mesh|SkinnedMesh>}
     */
    loadMesh(meshIndex) {
      const parser = this;
      const json = this.json;
      const extensions = this.extensions;
      const meshDef = json.meshes[meshIndex];
      const primitives = meshDef.primitives;
      const pending = [];
      for (let i = 0, il = primitives.length; i < il; i++) {
        const material = primitives[i].material === void 0 ? createDefaultMaterial(this.cache) : this.getDependency("material", primitives[i].material);
        pending.push(material);
      }
      pending.push(parser.loadGeometries(primitives));
      return Promise.all(pending).then(function(results) {
        const materials = results.slice(0, results.length - 1);
        const geometries = results[results.length - 1];
        const meshes = [];
        for (let i = 0, il = geometries.length; i < il; i++) {
          const geometry = geometries[i];
          const primitive = primitives[i];
          let mesh;
          const material = materials[i];
          if (primitive.mode === WEBGL_CONSTANTS.TRIANGLES || primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP || primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN || primitive.mode === void 0) {
            mesh = meshDef.isSkinnedMesh === true ? new import_three2.SkinnedMesh(geometry, material) : new import_three2.Mesh(geometry, material);
            if (mesh.isSkinnedMesh === true) {
              mesh.normalizeSkinWeights();
            }
            if (primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP) {
              mesh.geometry = toTrianglesDrawMode(mesh.geometry, import_three2.TriangleStripDrawMode);
            } else if (primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN) {
              mesh.geometry = toTrianglesDrawMode(mesh.geometry, import_three2.TriangleFanDrawMode);
            }
          } else if (primitive.mode === WEBGL_CONSTANTS.LINES) {
            mesh = new import_three2.LineSegments(geometry, material);
          } else if (primitive.mode === WEBGL_CONSTANTS.LINE_STRIP) {
            mesh = new import_three2.Line(geometry, material);
          } else if (primitive.mode === WEBGL_CONSTANTS.LINE_LOOP) {
            mesh = new import_three2.LineLoop(geometry, material);
          } else if (primitive.mode === WEBGL_CONSTANTS.POINTS) {
            mesh = new import_three2.Points(geometry, material);
          } else {
            throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + primitive.mode);
          }
          if (Object.keys(mesh.geometry.morphAttributes).length > 0) {
            updateMorphTargets(mesh, meshDef);
          }
          mesh.name = parser.createUniqueName(meshDef.name || "mesh_" + meshIndex);
          assignExtrasToUserData(mesh, meshDef);
          if (primitive.extensions) addUnknownExtensionsToUserData(extensions, mesh, primitive);
          parser.assignFinalMaterial(mesh);
          meshes.push(mesh);
        }
        for (let i = 0, il = meshes.length; i < il; i++) {
          parser.associations.set(meshes[i], {
            meshes: meshIndex,
            primitives: i
          });
        }
        if (meshes.length === 1) {
          if (meshDef.extensions) addUnknownExtensionsToUserData(extensions, meshes[0], meshDef);
          return meshes[0];
        }
        const group = new import_three2.Group();
        if (meshDef.extensions) addUnknownExtensionsToUserData(extensions, group, meshDef);
        parser.associations.set(group, { meshes: meshIndex });
        for (let i = 0, il = meshes.length; i < il; i++) {
          group.add(meshes[i]);
        }
        return group;
      });
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
     * @param {number} cameraIndex
     * @return {Promise<THREE.Camera>}
     */
    loadCamera(cameraIndex) {
      let camera;
      const cameraDef = this.json.cameras[cameraIndex];
      const params = cameraDef[cameraDef.type];
      if (!params) {
        console.warn("THREE.GLTFLoader: Missing camera parameters.");
        return;
      }
      if (cameraDef.type === "perspective") {
        camera = new import_three2.PerspectiveCamera(import_three2.MathUtils.radToDeg(params.yfov), params.aspectRatio || 1, params.znear || 1, params.zfar || 2e6);
      } else if (cameraDef.type === "orthographic") {
        camera = new import_three2.OrthographicCamera(-params.xmag, params.xmag, params.ymag, -params.ymag, params.znear, params.zfar);
      }
      if (cameraDef.name) camera.name = this.createUniqueName(cameraDef.name);
      assignExtrasToUserData(camera, cameraDef);
      return Promise.resolve(camera);
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
     * @param {number} skinIndex
     * @return {Promise<Skeleton>}
     */
    loadSkin(skinIndex) {
      const skinDef = this.json.skins[skinIndex];
      const pending = [];
      for (let i = 0, il = skinDef.joints.length; i < il; i++) {
        pending.push(this._loadNodeShallow(skinDef.joints[i]));
      }
      if (skinDef.inverseBindMatrices !== void 0) {
        pending.push(this.getDependency("accessor", skinDef.inverseBindMatrices));
      } else {
        pending.push(null);
      }
      return Promise.all(pending).then(function(results) {
        const inverseBindMatrices = results.pop();
        const jointNodes = results;
        const bones = [];
        const boneInverses = [];
        for (let i = 0, il = jointNodes.length; i < il; i++) {
          const jointNode = jointNodes[i];
          if (jointNode) {
            bones.push(jointNode);
            const mat = new import_three2.Matrix4();
            if (inverseBindMatrices !== null) {
              mat.fromArray(inverseBindMatrices.array, i * 16);
            }
            boneInverses.push(mat);
          } else {
            console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', skinDef.joints[i]);
          }
        }
        return new import_three2.Skeleton(bones, boneInverses);
      });
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
     * @param {number} animationIndex
     * @return {Promise<AnimationClip>}
     */
    loadAnimation(animationIndex) {
      const json = this.json;
      const parser = this;
      const animationDef = json.animations[animationIndex];
      const animationName = animationDef.name ? animationDef.name : "animation_" + animationIndex;
      const pendingNodes = [];
      const pendingInputAccessors = [];
      const pendingOutputAccessors = [];
      const pendingSamplers = [];
      const pendingTargets = [];
      for (let i = 0, il = animationDef.channels.length; i < il; i++) {
        const channel = animationDef.channels[i];
        const sampler = animationDef.samplers[channel.sampler];
        const target = channel.target;
        const name = target.node;
        const input = animationDef.parameters !== void 0 ? animationDef.parameters[sampler.input] : sampler.input;
        const output = animationDef.parameters !== void 0 ? animationDef.parameters[sampler.output] : sampler.output;
        if (target.node === void 0) continue;
        pendingNodes.push(this.getDependency("node", name));
        pendingInputAccessors.push(this.getDependency("accessor", input));
        pendingOutputAccessors.push(this.getDependency("accessor", output));
        pendingSamplers.push(sampler);
        pendingTargets.push(target);
      }
      return Promise.all([
        Promise.all(pendingNodes),
        Promise.all(pendingInputAccessors),
        Promise.all(pendingOutputAccessors),
        Promise.all(pendingSamplers),
        Promise.all(pendingTargets)
      ]).then(function(dependencies) {
        const nodes = dependencies[0];
        const inputAccessors = dependencies[1];
        const outputAccessors = dependencies[2];
        const samplers = dependencies[3];
        const targets = dependencies[4];
        const tracks = [];
        for (let i = 0, il = nodes.length; i < il; i++) {
          const node = nodes[i];
          const inputAccessor = inputAccessors[i];
          const outputAccessor = outputAccessors[i];
          const sampler = samplers[i];
          const target = targets[i];
          if (node === void 0) continue;
          if (node.updateMatrix) {
            node.updateMatrix();
          }
          const createdTracks = parser._createAnimationTracks(node, inputAccessor, outputAccessor, sampler, target);
          if (createdTracks) {
            for (let k = 0; k < createdTracks.length; k++) {
              tracks.push(createdTracks[k]);
            }
          }
        }
        return new import_three2.AnimationClip(animationName, void 0, tracks);
      });
    }
    createNodeMesh(nodeIndex) {
      const json = this.json;
      const parser = this;
      const nodeDef = json.nodes[nodeIndex];
      if (nodeDef.mesh === void 0) return null;
      return parser.getDependency("mesh", nodeDef.mesh).then(function(mesh) {
        const node = parser._getNodeRef(parser.meshCache, nodeDef.mesh, mesh);
        if (nodeDef.weights !== void 0) {
          node.traverse(function(o) {
            if (!o.isMesh) return;
            for (let i = 0, il = nodeDef.weights.length; i < il; i++) {
              o.morphTargetInfluences[i] = nodeDef.weights[i];
            }
          });
        }
        return node;
      });
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
     * @param {number} nodeIndex
     * @return {Promise<Object3D>}
     */
    loadNode(nodeIndex) {
      const json = this.json;
      const parser = this;
      const nodeDef = json.nodes[nodeIndex];
      const nodePending = parser._loadNodeShallow(nodeIndex);
      const childPending = [];
      const childrenDef = nodeDef.children || [];
      for (let i = 0, il = childrenDef.length; i < il; i++) {
        childPending.push(parser.getDependency("node", childrenDef[i]));
      }
      const skeletonPending = nodeDef.skin === void 0 ? Promise.resolve(null) : parser.getDependency("skin", nodeDef.skin);
      return Promise.all([
        nodePending,
        Promise.all(childPending),
        skeletonPending
      ]).then(function(results) {
        const node = results[0];
        const children = results[1];
        const skeleton = results[2];
        if (skeleton !== null) {
          node.traverse(function(mesh) {
            if (!mesh.isSkinnedMesh) return;
            mesh.bind(skeleton, _identityMatrix);
          });
        }
        for (let i = 0, il = children.length; i < il; i++) {
          node.add(children[i]);
        }
        return node;
      });
    }
    // ._loadNodeShallow() parses a single node.
    // skin and child nodes are created and added in .loadNode() (no '_' prefix).
    _loadNodeShallow(nodeIndex) {
      const json = this.json;
      const extensions = this.extensions;
      const parser = this;
      if (this.nodeCache[nodeIndex] !== void 0) {
        return this.nodeCache[nodeIndex];
      }
      const nodeDef = json.nodes[nodeIndex];
      const nodeName = nodeDef.name ? parser.createUniqueName(nodeDef.name) : "";
      const pending = [];
      const meshPromise = parser._invokeOne(function(ext) {
        return ext.createNodeMesh && ext.createNodeMesh(nodeIndex);
      });
      if (meshPromise) {
        pending.push(meshPromise);
      }
      if (nodeDef.camera !== void 0) {
        pending.push(parser.getDependency("camera", nodeDef.camera).then(function(camera) {
          return parser._getNodeRef(parser.cameraCache, nodeDef.camera, camera);
        }));
      }
      parser._invokeAll(function(ext) {
        return ext.createNodeAttachment && ext.createNodeAttachment(nodeIndex);
      }).forEach(function(promise) {
        pending.push(promise);
      });
      this.nodeCache[nodeIndex] = Promise.all(pending).then(function(objects) {
        let node;
        if (nodeDef.isBone === true) {
          node = new import_three2.Bone();
        } else if (objects.length > 1) {
          node = new import_three2.Group();
        } else if (objects.length === 1) {
          node = objects[0];
        } else {
          node = new import_three2.Object3D();
        }
        if (node !== objects[0]) {
          for (let i = 0, il = objects.length; i < il; i++) {
            node.add(objects[i]);
          }
        }
        if (nodeDef.name) {
          node.userData.name = nodeDef.name;
          node.name = nodeName;
        }
        assignExtrasToUserData(node, nodeDef);
        if (nodeDef.extensions) addUnknownExtensionsToUserData(extensions, node, nodeDef);
        if (nodeDef.matrix !== void 0) {
          const matrix = new import_three2.Matrix4();
          matrix.fromArray(nodeDef.matrix);
          node.applyMatrix4(matrix);
        } else {
          if (nodeDef.translation !== void 0) {
            node.position.fromArray(nodeDef.translation);
          }
          if (nodeDef.rotation !== void 0) {
            node.quaternion.fromArray(nodeDef.rotation);
          }
          if (nodeDef.scale !== void 0) {
            node.scale.fromArray(nodeDef.scale);
          }
        }
        if (!parser.associations.has(node)) {
          parser.associations.set(node, {});
        }
        parser.associations.get(node).nodes = nodeIndex;
        return node;
      });
      return this.nodeCache[nodeIndex];
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
     * @param {number} sceneIndex
     * @return {Promise<Group>}
     */
    loadScene(sceneIndex) {
      const extensions = this.extensions;
      const sceneDef = this.json.scenes[sceneIndex];
      const parser = this;
      const scene = new import_three2.Group();
      if (sceneDef.name) scene.name = parser.createUniqueName(sceneDef.name);
      assignExtrasToUserData(scene, sceneDef);
      if (sceneDef.extensions) addUnknownExtensionsToUserData(extensions, scene, sceneDef);
      const nodeIds = sceneDef.nodes || [];
      const pending = [];
      for (let i = 0, il = nodeIds.length; i < il; i++) {
        pending.push(parser.getDependency("node", nodeIds[i]));
      }
      return Promise.all(pending).then(function(nodes) {
        for (let i = 0, il = nodes.length; i < il; i++) {
          scene.add(nodes[i]);
        }
        const reduceAssociations = (node) => {
          const reducedAssociations = /* @__PURE__ */ new Map();
          for (const [key, value] of parser.associations) {
            if (key instanceof import_three2.Material || key instanceof import_three2.Texture) {
              reducedAssociations.set(key, value);
            }
          }
          node.traverse((node2) => {
            const mappings = parser.associations.get(node2);
            if (mappings != null) {
              reducedAssociations.set(node2, mappings);
            }
          });
          return reducedAssociations;
        };
        parser.associations = reduceAssociations(scene);
        return scene;
      });
    }
    _createAnimationTracks(node, inputAccessor, outputAccessor, sampler, target) {
      const tracks = [];
      const targetName = node.name ? node.name : node.uuid;
      const targetNames = [];
      if (PATH_PROPERTIES[target.path] === PATH_PROPERTIES.weights) {
        node.traverse(function(object) {
          if (object.morphTargetInfluences) {
            targetNames.push(object.name ? object.name : object.uuid);
          }
        });
      } else {
        targetNames.push(targetName);
      }
      let TypedKeyframeTrack;
      switch (PATH_PROPERTIES[target.path]) {
        case PATH_PROPERTIES.weights:
          TypedKeyframeTrack = import_three2.NumberKeyframeTrack;
          break;
        case PATH_PROPERTIES.rotation:
          TypedKeyframeTrack = import_three2.QuaternionKeyframeTrack;
          break;
        case PATH_PROPERTIES.position:
        case PATH_PROPERTIES.scale:
          TypedKeyframeTrack = import_three2.VectorKeyframeTrack;
          break;
        default:
          switch (outputAccessor.itemSize) {
            case 1:
              TypedKeyframeTrack = import_three2.NumberKeyframeTrack;
              break;
            case 2:
            case 3:
            default:
              TypedKeyframeTrack = import_three2.VectorKeyframeTrack;
              break;
          }
          break;
      }
      const interpolation = sampler.interpolation !== void 0 ? INTERPOLATION[sampler.interpolation] : import_three2.InterpolateLinear;
      const outputArray = this._getArrayFromAccessor(outputAccessor);
      for (let j = 0, jl = targetNames.length; j < jl; j++) {
        const track = new TypedKeyframeTrack(
          targetNames[j] + "." + PATH_PROPERTIES[target.path],
          inputAccessor.array,
          outputArray,
          interpolation
        );
        if (sampler.interpolation === "CUBICSPLINE") {
          this._createCubicSplineTrackInterpolant(track);
        }
        tracks.push(track);
      }
      return tracks;
    }
    _getArrayFromAccessor(accessor) {
      let outputArray = accessor.array;
      if (accessor.normalized) {
        const scale = getNormalizedComponentScale(outputArray.constructor);
        const scaled = new Float32Array(outputArray.length);
        for (let j = 0, jl = outputArray.length; j < jl; j++) {
          scaled[j] = outputArray[j] * scale;
        }
        outputArray = scaled;
      }
      return outputArray;
    }
    _createCubicSplineTrackInterpolant(track) {
      track.createInterpolant = function InterpolantFactoryMethodGLTFCubicSpline(result) {
        const interpolantType = this instanceof import_three2.QuaternionKeyframeTrack ? GLTFCubicSplineQuaternionInterpolant : GLTFCubicSplineInterpolant;
        return new interpolantType(this.times, this.values, this.getValueSize() / 3, result);
      };
      track.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
    }
  };
  function computeBounds(geometry, primitiveDef, parser) {
    const attributes = primitiveDef.attributes;
    const box = new import_three2.Box3();
    if (attributes.POSITION !== void 0) {
      const accessor = parser.json.accessors[attributes.POSITION];
      const min = accessor.min;
      const max = accessor.max;
      if (min !== void 0 && max !== void 0) {
        box.set(
          new import_three2.Vector3(min[0], min[1], min[2]),
          new import_three2.Vector3(max[0], max[1], max[2])
        );
        if (accessor.normalized) {
          const boxScale = getNormalizedComponentScale(WEBGL_COMPONENT_TYPES[accessor.componentType]);
          box.min.multiplyScalar(boxScale);
          box.max.multiplyScalar(boxScale);
        }
      } else {
        console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
        return;
      }
    } else {
      return;
    }
    const targets = primitiveDef.targets;
    if (targets !== void 0) {
      const maxDisplacement = new import_three2.Vector3();
      const vector = new import_three2.Vector3();
      for (let i = 0, il = targets.length; i < il; i++) {
        const target = targets[i];
        if (target.POSITION !== void 0) {
          const accessor = parser.json.accessors[target.POSITION];
          const min = accessor.min;
          const max = accessor.max;
          if (min !== void 0 && max !== void 0) {
            vector.setX(Math.max(Math.abs(min[0]), Math.abs(max[0])));
            vector.setY(Math.max(Math.abs(min[1]), Math.abs(max[1])));
            vector.setZ(Math.max(Math.abs(min[2]), Math.abs(max[2])));
            if (accessor.normalized) {
              const boxScale = getNormalizedComponentScale(WEBGL_COMPONENT_TYPES[accessor.componentType]);
              vector.multiplyScalar(boxScale);
            }
            maxDisplacement.max(vector);
          } else {
            console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
          }
        }
      }
      box.expandByVector(maxDisplacement);
    }
    geometry.boundingBox = box;
    const sphere = new import_three2.Sphere();
    box.getCenter(sphere.center);
    sphere.radius = box.min.distanceTo(box.max) / 2;
    geometry.boundingSphere = sphere;
  }
  function addPrimitiveAttributes(geometry, primitiveDef, parser) {
    const attributes = primitiveDef.attributes;
    const pending = [];
    function assignAttributeAccessor(accessorIndex, attributeName) {
      return parser.getDependency("accessor", accessorIndex).then(function(accessor) {
        geometry.setAttribute(attributeName, accessor);
      });
    }
    for (const gltfAttributeName in attributes) {
      const threeAttributeName = ATTRIBUTES[gltfAttributeName] || gltfAttributeName.toLowerCase();
      if (threeAttributeName in geometry.attributes) continue;
      pending.push(assignAttributeAccessor(attributes[gltfAttributeName], threeAttributeName));
    }
    if (primitiveDef.indices !== void 0 && !geometry.index) {
      const accessor = parser.getDependency("accessor", primitiveDef.indices).then(function(accessor2) {
        geometry.setIndex(accessor2);
      });
      pending.push(accessor);
    }
    if (import_three2.ColorManagement.workingColorSpace !== import_three2.LinearSRGBColorSpace && "COLOR_0" in attributes) {
      console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${import_three2.ColorManagement.workingColorSpace}" not supported.`);
    }
    assignExtrasToUserData(geometry, primitiveDef);
    computeBounds(geometry, primitiveDef, parser);
    return Promise.all(pending).then(function() {
      return primitiveDef.targets !== void 0 ? addMorphTargets(geometry, primitiveDef.targets, parser) : geometry;
    });
  }

  // src/js/three-addons/loaders/DRACOLoader.js
  var import_three3 = __toESM(require_three());
  var _taskCache = /* @__PURE__ */ new WeakMap();
  var DRACOLoader = class extends import_three3.Loader {
    constructor(manager) {
      super(manager);
      this.decoderPath = "";
      this.decoderConfig = {};
      this.decoderBinary = null;
      this.decoderPending = null;
      this.workerLimit = 4;
      this.workerPool = [];
      this.workerNextTaskID = 1;
      this.workerSourceURL = "";
      this.defaultAttributeIDs = {
        position: "POSITION",
        normal: "NORMAL",
        color: "COLOR",
        uv: "TEX_COORD"
      };
      this.defaultAttributeTypes = {
        position: "Float32Array",
        normal: "Float32Array",
        color: "Float32Array",
        uv: "Float32Array"
      };
    }
    setDecoderPath(path) {
      this.decoderPath = path;
      return this;
    }
    setDecoderConfig(config) {
      this.decoderConfig = config;
      return this;
    }
    setWorkerLimit(workerLimit) {
      this.workerLimit = workerLimit;
      return this;
    }
    load(url, onLoad, onProgress, onError) {
      const loader = new import_three3.FileLoader(this.manager);
      loader.setPath(this.path);
      loader.setResponseType("arraybuffer");
      loader.setRequestHeader(this.requestHeader);
      loader.setWithCredentials(this.withCredentials);
      loader.load(url, (buffer) => {
        this.parse(buffer, onLoad, onError);
      }, onProgress, onError);
    }
    parse(buffer, onLoad, onError = () => {
    }) {
      this.decodeDracoFile(buffer, onLoad, null, null, import_three3.SRGBColorSpace).catch(onError);
    }
    decodeDracoFile(buffer, callback, attributeIDs, attributeTypes, vertexColorSpace = import_three3.LinearSRGBColorSpace, onError = () => {
    }) {
      const taskConfig = {
        attributeIDs: attributeIDs || this.defaultAttributeIDs,
        attributeTypes: attributeTypes || this.defaultAttributeTypes,
        useUniqueIDs: !!attributeIDs,
        vertexColorSpace
      };
      return this.decodeGeometry(buffer, taskConfig).then(callback).catch(onError);
    }
    decodeGeometry(buffer, taskConfig) {
      const taskKey = JSON.stringify(taskConfig);
      if (_taskCache.has(buffer)) {
        const cachedTask = _taskCache.get(buffer);
        if (cachedTask.key === taskKey) {
          return cachedTask.promise;
        } else if (buffer.byteLength === 0) {
          throw new Error(
            "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
          );
        }
      }
      let worker;
      const taskID = this.workerNextTaskID++;
      const taskCost = buffer.byteLength;
      const geometryPending = this._getWorker(taskID, taskCost).then((_worker) => {
        worker = _worker;
        return new Promise((resolve, reject) => {
          worker._callbacks[taskID] = { resolve, reject };
          worker.postMessage({ type: "decode", id: taskID, taskConfig, buffer }, [buffer]);
        });
      }).then((message) => this._createGeometry(message.geometry));
      geometryPending.catch(() => true).then(() => {
        if (worker && taskID) {
          this._releaseTask(worker, taskID);
        }
      });
      _taskCache.set(buffer, {
        key: taskKey,
        promise: geometryPending
      });
      return geometryPending;
    }
    _createGeometry(geometryData) {
      const geometry = new import_three3.BufferGeometry();
      if (geometryData.index) {
        geometry.setIndex(new import_three3.BufferAttribute(geometryData.index.array, 1));
      }
      for (let i = 0; i < geometryData.attributes.length; i++) {
        const result = geometryData.attributes[i];
        const name = result.name;
        const array = result.array;
        const itemSize = result.itemSize;
        const attribute = new import_three3.BufferAttribute(array, itemSize);
        if (name === "color") {
          this._assignVertexColorSpace(attribute, result.vertexColorSpace);
          attribute.normalized = array instanceof Float32Array === false;
        }
        geometry.setAttribute(name, attribute);
      }
      return geometry;
    }
    _assignVertexColorSpace(attribute, inputColorSpace) {
      if (inputColorSpace !== import_three3.SRGBColorSpace) return;
      const _color = new import_three3.Color();
      for (let i = 0, il = attribute.count; i < il; i++) {
        _color.fromBufferAttribute(attribute, i).convertSRGBToLinear();
        attribute.setXYZ(i, _color.r, _color.g, _color.b);
      }
    }
    _loadLibrary(url, responseType) {
      const loader = new import_three3.FileLoader(this.manager);
      loader.setPath(this.decoderPath);
      loader.setResponseType(responseType);
      loader.setWithCredentials(this.withCredentials);
      return new Promise((resolve, reject) => {
        loader.load(url, resolve, void 0, reject);
      });
    }
    preload() {
      this._initDecoder();
      return this;
    }
    _initDecoder() {
      if (this.decoderPending) return this.decoderPending;
      const useJS = typeof WebAssembly !== "object" || this.decoderConfig.type === "js";
      const librariesPending = [];
      if (useJS) {
        librariesPending.push(this._loadLibrary("draco_decoder.js", "text"));
      } else {
        librariesPending.push(this._loadLibrary("draco_wasm_wrapper.js", "text"));
        librariesPending.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"));
      }
      this.decoderPending = Promise.all(librariesPending).then((libraries) => {
        const jsContent = libraries[0];
        if (!useJS) {
          this.decoderConfig.wasmBinary = libraries[1];
        }
        const fn = DRACOWorker.toString();
        const body = [
          "/* draco decoder */",
          jsContent,
          "",
          "/* worker */",
          fn.substring(fn.indexOf("{") + 1, fn.lastIndexOf("}"))
        ].join("\n");
        this.workerSourceURL = URL.createObjectURL(new Blob([body]));
      });
      return this.decoderPending;
    }
    _getWorker(taskID, taskCost) {
      return this._initDecoder().then(() => {
        if (this.workerPool.length < this.workerLimit) {
          const worker2 = new Worker(this.workerSourceURL);
          worker2._callbacks = {};
          worker2._taskCosts = {};
          worker2._taskLoad = 0;
          worker2.postMessage({ type: "init", decoderConfig: this.decoderConfig });
          worker2.onmessage = function(e) {
            const message = e.data;
            switch (message.type) {
              case "decode":
                worker2._callbacks[message.id].resolve(message);
                break;
              case "error":
                worker2._callbacks[message.id].reject(message);
                break;
              default:
                console.error('THREE.DRACOLoader: Unexpected message, "' + message.type + '"');
            }
          };
          this.workerPool.push(worker2);
        } else {
          this.workerPool.sort(function(a, b) {
            return a._taskLoad > b._taskLoad ? -1 : 1;
          });
        }
        const worker = this.workerPool[this.workerPool.length - 1];
        worker._taskCosts[taskID] = taskCost;
        worker._taskLoad += taskCost;
        return worker;
      });
    }
    _releaseTask(worker, taskID) {
      worker._taskLoad -= worker._taskCosts[taskID];
      delete worker._callbacks[taskID];
      delete worker._taskCosts[taskID];
    }
    debug() {
      console.log("Task load: ", this.workerPool.map((worker) => worker._taskLoad));
    }
    dispose() {
      for (let i = 0; i < this.workerPool.length; ++i) {
        this.workerPool[i].terminate();
      }
      this.workerPool.length = 0;
      if (this.workerSourceURL !== "") {
        URL.revokeObjectURL(this.workerSourceURL);
      }
      return this;
    }
  };
  function DRACOWorker() {
    let decoderConfig;
    let decoderPending;
    onmessage = function(e) {
      const message = e.data;
      switch (message.type) {
        case "init":
          decoderConfig = message.decoderConfig;
          decoderPending = new Promise(function(resolve) {
            decoderConfig.onModuleLoaded = function(draco) {
              resolve({ draco });
            };
            DracoDecoderModule(decoderConfig);
          });
          break;
        case "decode":
          const buffer = message.buffer;
          const taskConfig = message.taskConfig;
          decoderPending.then((module) => {
            const draco = module.draco;
            const decoder = new draco.Decoder();
            try {
              const geometry = decodeGeometry(draco, decoder, new Int8Array(buffer), taskConfig);
              const buffers = geometry.attributes.map((attr) => attr.array.buffer);
              if (geometry.index) buffers.push(geometry.index.array.buffer);
              self.postMessage({ type: "decode", id: message.id, geometry }, buffers);
            } catch (error) {
              console.error(error);
              self.postMessage({ type: "error", id: message.id, error: error.message });
            } finally {
              draco.destroy(decoder);
            }
          });
          break;
      }
    };
    function decodeGeometry(draco, decoder, array, taskConfig) {
      const attributeIDs = taskConfig.attributeIDs;
      const attributeTypes = taskConfig.attributeTypes;
      let dracoGeometry;
      let decodingStatus;
      const geometryType = decoder.GetEncodedGeometryType(array);
      if (geometryType === draco.TRIANGULAR_MESH) {
        dracoGeometry = new draco.Mesh();
        decodingStatus = decoder.DecodeArrayToMesh(array, array.byteLength, dracoGeometry);
      } else if (geometryType === draco.POINT_CLOUD) {
        dracoGeometry = new draco.PointCloud();
        decodingStatus = decoder.DecodeArrayToPointCloud(array, array.byteLength, dracoGeometry);
      } else {
        throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
      }
      if (!decodingStatus.ok() || dracoGeometry.ptr === 0) {
        throw new Error("THREE.DRACOLoader: Decoding failed: " + decodingStatus.error_msg());
      }
      const geometry = { index: null, attributes: [] };
      for (const attributeName in attributeIDs) {
        const attributeType = self[attributeTypes[attributeName]];
        let attribute;
        let attributeID;
        if (taskConfig.useUniqueIDs) {
          attributeID = attributeIDs[attributeName];
          attribute = decoder.GetAttributeByUniqueId(dracoGeometry, attributeID);
        } else {
          attributeID = decoder.GetAttributeId(dracoGeometry, draco[attributeIDs[attributeName]]);
          if (attributeID === -1) continue;
          attribute = decoder.GetAttribute(dracoGeometry, attributeID);
        }
        const attributeResult = decodeAttribute(draco, decoder, dracoGeometry, attributeName, attributeType, attribute);
        if (attributeName === "color") {
          attributeResult.vertexColorSpace = taskConfig.vertexColorSpace;
        }
        geometry.attributes.push(attributeResult);
      }
      if (geometryType === draco.TRIANGULAR_MESH) {
        geometry.index = decodeIndex(draco, decoder, dracoGeometry);
      }
      draco.destroy(dracoGeometry);
      return geometry;
    }
    function decodeIndex(draco, decoder, dracoGeometry) {
      const numFaces = dracoGeometry.num_faces();
      const numIndices = numFaces * 3;
      const byteLength = numIndices * 4;
      const ptr = draco._malloc(byteLength);
      decoder.GetTrianglesUInt32Array(dracoGeometry, byteLength, ptr);
      const index = new Uint32Array(draco.HEAPF32.buffer, ptr, numIndices).slice();
      draco._free(ptr);
      return { array: index, itemSize: 1 };
    }
    function decodeAttribute(draco, decoder, dracoGeometry, attributeName, attributeType, attribute) {
      const numComponents = attribute.num_components();
      const numPoints = dracoGeometry.num_points();
      const numValues = numPoints * numComponents;
      const byteLength = numValues * attributeType.BYTES_PER_ELEMENT;
      const dataType = getDracoDataType(draco, attributeType);
      const ptr = draco._malloc(byteLength);
      decoder.GetAttributeDataArrayForAllPoints(dracoGeometry, attribute, dataType, byteLength, ptr);
      const array = new attributeType(draco.HEAPF32.buffer, ptr, numValues).slice();
      draco._free(ptr);
      return {
        name: attributeName,
        array,
        itemSize: numComponents
      };
    }
    function getDracoDataType(draco, attributeType) {
      switch (attributeType) {
        case Float32Array:
          return draco.DT_FLOAT32;
        case Int8Array:
          return draco.DT_INT8;
        case Int16Array:
          return draco.DT_INT16;
        case Int32Array:
          return draco.DT_INT32;
        case Uint8Array:
          return draco.DT_UINT8;
        case Uint16Array:
          return draco.DT_UINT16;
        case Uint32Array:
          return draco.DT_UINT32;
      }
    }
  }

  // src/js/scenes/MountainScene.js
  var import_gsap_3_122 = __toESM(require_gsap());
  var MountainScene = class {
    // === LIFECYCLE ===
    constructor(renderer2, qualityManager2, externalVideo = null) {
      __publicField(this, "handleVisibilityChange", () => {
        if (document.hidden) {
          this.pauseVideo();
        } else {
          if (this.video && this.video.paused) {
            this.playVideo();
          }
        }
      });
      // === EVENTS ===
      __publicField(this, "resumeVideo", () => {
        this.playVideo();
      });
      console.log("[Mountain] Constructor called");
      this.renderer = renderer2;
      this.qm = qualityManager2;
      this.externalVideo = externalVideo;
      this.scene = new THREE.Scene();
      this.contentGroup = new THREE.Group();
      this.scene.add(this.contentGroup);
      this.snowCount = Config.Mountain.snowCount;
      this.snowArea = Config.Mountain.snowArea;
      this.snowFallSpeed = Config.Mountain.snowFallSpeed || 0.2;
      this.snowSway = Config.Mountain.snowSway || 5e-4;
      this.snowWindX = Config.Mountain.snowWindX || 0;
      this.snowWindZ = Config.Mountain.snowWindZ || 0;
      this.lightUpdateFrame = 0;
      this.snowUniforms = {
        time: { value: 0 },
        area: {
          value: new THREE.Vector3(
            this.snowArea.x,
            this.snowArea.y,
            this.snowArea.z
          )
        },
        fallSpeed: { value: this.snowFallSpeed },
        sway: { value: this.snowSway },
        wind: { value: new THREE.Vector3(this.snowWindX, 0, this.snowWindZ) }
      };
      this.mixer = null;
      this.snowSystem = null;
      this.video = null;
      this.tempColor = new THREE.Color();
      this.targetColor = new THREE.Color(0, 0, 0);
      this.currentColor = new THREE.Color(0, 0, 0);
      this.pixelBuffer = new Uint8ClampedArray(4);
      this.currentScaleDPR = 1;
      this.initCamera();
      this.init();
    }
    init() {
      console.log("[Mountain] init() started");
      this.initBackground();
      this.initScreen();
      this.initLoader();
      this.initSnow();
      if (this.qm) {
        this.qm.subscribe(this.onQualityChange.bind(this));
      }
      console.log("[Mountain] init() completed");
    }
    onQualityChange(profile) {
      this.targetDPR = profile.maxDPR;
      this.applyDPR(profile.maxDPR);
      if (this.snow && this.snow.geometry) {
        let ratio = 1;
        if (profile.tier === "LOW") ratio = 0.5;
        if (profile.tier === "POTATO") ratio = 0;
        const drawCount = Math.floor(this.snowCount * ratio);
        this.snow.geometry.setDrawRange(0, drawCount);
        this.snow.visible = drawCount > 0;
      }
    }
    dispose() {
      console.log("[Mountain] dispose() called");
      window.removeEventListener("click", this.resumeVideo);
      window.removeEventListener("touchstart", this.resumeVideo);
      if (this.video) {
        this.video.pause();
        this.video.src = "";
        this.video.load();
        if (this.video.parentNode) {
          this.video.parentNode.removeChild(this.video);
        }
      }
      if (this.screenMesh) {
        this.screenMesh.geometry.dispose();
        this.screenMesh.material.dispose();
      }
      if (this.scene.background) this.scene.background.dispose();
    }
    mount() {
      console.log("[Mountain] mount() called");
      window.addEventListener("click", this.resumeVideo, { once: true });
      window.addEventListener("touchstart", this.resumeVideo, { once: true });
      document.addEventListener("visibilitychange", this.handleVisibilityChange);
    }
    unmount() {
      console.log("[Mountain] unmount() called");
      window.removeEventListener("click", this.resumeVideo);
      window.removeEventListener("touchstart", this.resumeVideo);
      document.removeEventListener(
        "visibilitychange",
        this.handleVisibilityChange
      );
      this.pauseVideo();
    }
    // === INITIALIZATION ===
    initCamera() {
      const isMobile = window.innerWidth < 768;
      const fov = isMobile ? Config.Mountain.cameraFovMobile : Config.Mountain.cameraFovDesktop;
      this.camera = new THREE.PerspectiveCamera(
        fov,
        window.innerWidth / window.innerHeight,
        0.01,
        2e3
      );
      this.camera.position.set(0, 0, 0.01);
    }
    initBackground() {
      const isMobile = window.innerWidth < 768;
      const planeH = isMobile ? Config.Mountain.bgPlaneHeightMobile : Config.Mountain.bgPlaneHeightDesktop;
      const planeW = planeH * (window.innerWidth / window.innerHeight);
      const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;
      const fragmentShader = `
      varying vec2 vUv;
      uniform vec3 colorA;
      uniform vec3 colorB;
      uniform float uFade;

      // Simple pseudo-random noise function
      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      }

      void main() {
        // Gradient
        vec3 gradient = mix(colorB, colorA, vUv.y);
        
        // Dithering
        float noise = random(gl_FragCoord.xy) * (1.0/255.0) - (0.5/255.0);
        
        // Apply fade and output
        gl_FragColor = vec4((gradient + noise) * uFade, 1.0);
      }
    `;
      const colorBlack = new THREE.Color(0);
      const colorGrey = new THREE.Color(12303291);
      const material = new THREE.ShaderMaterial({
        uniforms: {
          colorA: { value: colorBlack },
          // Top
          colorB: { value: colorGrey },
          // Bottom
          uFade: { value: 0 }
          // Start fully black (faded out)
        },
        vertexShader,
        fragmentShader,
        depthWrite: false,
        side: THREE.DoubleSide
      });
      this.bgMesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material);
      this.bgMesh.scale.set(planeW, planeH, 1);
      this.bgMesh.position.z = -0.5;
      this.contentGroup.add(this.bgMesh);
    }
    initScreen() {
      const screenWidth = Config.Mountain.screenWidth;
      const screenHeight = Config.Mountain.screenHeight;
      const screenLightIntensity = Config.Mountain.screenLightIntensity;
      this.screenMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(screenWidth, screenHeight),
        new THREE.MeshBasicMaterial({ color: 16777215 })
      );
      this.contentGroup.add(this.screenMesh);
      if (this.externalVideo) {
        this.video = this.externalVideo;
        console.log("[Mountain] Using preloaded video element");
      } else {
        this.video = document.createElement("video");
        this.video.crossOrigin = "anonymous";
        this.video.src = `https://bunqlabs.github.io/bunq-labs-website-dec2025/assets/video/showreel-v2.mp4?t=${Date.now()}`;
        this.video.muted = true;
        this.video.playsInline = true;
        this.video.preload = "auto";
      }
      this.video.loop = true;
      this.video.removeEventListener("ended", this.onVideoEnded);
      this.onVideoEnded = () => {
        console.log("[Mountain] Video ended. Forcing replay (Loop Falback).");
        this.video.currentTime = 0;
        this.video.play().catch(() => {
        });
      };
      this.video.addEventListener("ended", this.onVideoEnded);
      const logVideo = (msg) => console.log(`[Video State] ${msg}`, {
        readyState: this.video.readyState,
        paused: this.video.paused,
        buffered: this.video.buffered.length > 0 ? this.video.buffered.end(this.video.buffered.length - 1) : 0,
        currentTime: this.video.currentTime
      });
      this.video.addEventListener(
        "waiting",
        () => logVideo("Waiting (Buffering?)")
      );
      this.video.addEventListener("stalled", () => logVideo("Stalled"));
      this.video.addEventListener("playing", () => logVideo("Playing"));
      this.video.addEventListener("pause", () => logVideo("Paused"));
      this.video.addEventListener(
        "canplaythrough",
        () => logVideo("Can Play Through")
      );
      this.video.style.position = "absolute";
      this.video.style.top = "0";
      this.video.style.left = "0";
      this.video.style.width = "1px";
      this.video.style.height = "1px";
      this.video.style.opacity = "0";
      this.video.style.pointerEvents = "none";
      this.video.style.zIndex = "-1000";
      document.body.appendChild(this.video);
      this.videoTexture = new THREE.VideoTexture(this.video);
      this.videoTexture.colorSpace = THREE.SRGBColorSpace;
      this.videoTexture.minFilter = THREE.LinearFilter;
      this.videoTexture.generateMipmaps = false;
      this.screenMesh.material = new THREE.MeshBasicMaterial({
        map: this.videoTexture,
        toneMapped: false
      });
      this.avgColorRT = new THREE.WebGLRenderTarget(1, 1, {
        format: THREE.RGBAFormat,
        type: THREE.UnsignedByteType,
        // Fix: HalfFloat causes readPixels mismatch
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        generateMipmaps: false
      });
      this.lightCvtScene = new THREE.Scene();
      this.lightCvtCamera = new THREE.OrthographicCamera(
        -0.5,
        0.5,
        0.5,
        -0.5,
        0,
        1
      );
      this.lightCvtMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 1),
        new THREE.ShaderMaterial({
          uniforms: { map: { value: this.videoTexture } },
          vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
          fragmentShader: `
                uniform sampler2D map;
                varying vec2 vUv;
                void main() {
                    vec4 color = vec4(0.0);
                    // Sample 5x5 grid
                    for(float x = 0.1; x < 1.0; x += 0.2) {
                        for(float y = 0.1; y < 1.0; y += 0.2) {
                            color += texture2D(map, vec2(x, y));
                        }
                    }
                    gl_FragColor = color / 25.0;
                }
            `
        })
      );
      this.lightCvtScene.add(this.lightCvtMesh);
      this.lightCvtScene.add(this.lightCvtMesh);
      this.lightUpdateInterval = 0.2;
      this.lightUpdateTimer = 0;
    }
    // === SCENE SETUP & UTILS ===
    initLoader() {
      const loader = new GLTFLoader();
      loader.setCrossOrigin("anonymous");
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath(
        "https://www.gstatic.com/draco/versioned/decoders/1.5.7/"
      );
      loader.setDRACOLoader(dracoLoader);
      this.mountainUniforms = {
        tDiffuse: { value: null },
        // Will set per texture if needed, but here we load one texture.
        uLightColor: { value: this.currentColor },
        // Shared Reference
        uStrength: { value: 1.2 }
      };
      const texLoader = new THREE.TextureLoader();
      texLoader.setCrossOrigin("anonymous");
      const mountainTex = texLoader.load(
        "https://bunqlabs.github.io/bunq-labs-website-dec2025/assets/textures/light_bake.webp",
        () => {
        }
      );
      mountainTex.colorSpace = THREE.LinearSRGBColorSpace;
      mountainTex.flipY = false;
      this.mountainUniforms.tDiffuse.value = mountainTex;
      loader.load(
        "https://bunqlabs.github.io/bunq-labs-website-dec2025/assets/models/mountain_export_optimised.glb",
        (gltf) => {
          const root = gltf.scene || gltf.scenes[0];
          root.traverse((obj) => {
            if (obj.isMesh) {
              obj.castShadow = false;
              obj.receiveShadow = false;
              obj.material = new THREE.ShaderMaterial({
                uniforms: this.mountainUniforms,
                // Use Shared
                vertexShader: `
                varying vec2 vUv;
                void main() {
                  vUv = uv;
                  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
              `,
                fragmentShader: `
                uniform sampler2D tDiffuse;
                uniform vec3 uLightColor; // Smoothed CPU color
                uniform float uStrength;
                varying vec2 vUv;

                void main() {
                  // 1. Read Mountain Texture (Grayscale/Base)
                  vec4 texColor = texture2D(tDiffuse, vUv);

                  // 2. Use Smoothed Light Color from Uniform
                  // We add a small base floor to lightColor so it's never pitch black
                  vec3 finalLight = uLightColor + vec3(0.15); 
                  
                  // Combine
                  gl_FragColor = vec4(texColor.rgb * finalLight * uStrength, 1.0);
                }
              `,
                side: THREE.DoubleSide
              });
            }
          });
          this.contentGroup.add(root);
        },
        void 0,
        (err) => console.error("[Mountain] Failed to load mountain GLB:", err)
      );
    }
    initSnow() {
      if (window.innerWidth < Config.System.desktopBreakpoint) {
        console.log("[Mountain] Snow disabled on mobile");
        return;
      }
      const snowGeo = new THREE.BufferGeometry();
      const snowPositions = new Float32Array(this.snowCount * 3);
      const snowSpeeds = new Float32Array(this.snowCount);
      const snowOffsets = new Float32Array(this.snowCount);
      for (let i = 0; i < this.snowCount; i++) {
        snowPositions[i * 3 + 0] = (Math.random() - 0.5) * this.snowArea.x;
        snowPositions[i * 3 + 1] = (Math.random() - 0.5) * this.snowArea.y;
        snowPositions[i * 3 + 2] = (Math.random() - 0.5) * this.snowArea.z;
        snowSpeeds[i] = 0.5 + Math.random();
        snowOffsets[i] = Math.random() * 100;
      }
      snowGeo.setAttribute(
        "position",
        new THREE.BufferAttribute(snowPositions, 3)
      );
      snowGeo.setAttribute("aSpeed", new THREE.BufferAttribute(snowSpeeds, 1));
      snowGeo.setAttribute("aOffset", new THREE.BufferAttribute(snowOffsets, 1));
      const snowMat = new THREE.ShaderMaterial({
        uniforms: this.snowUniforms,
        transparent: true,
        depthWrite: false,
        vertexShader: `
        uniform float time;
        uniform vec3 area;
        uniform float fallSpeed;
        uniform float sway;
        uniform vec3 wind;
        
        attribute float aSpeed;
        attribute float aOffset;
        
        void main() {
          vec3 pos = position;
          
          // 1. Gravity (Push Down)
          float yOffset = time * fallSpeed * aSpeed * 0.2; // 0.2 scaling to match previous feel
          
          // Wrap Y
          // We want pos.y to go from -area.y/2 to area.y/2
          float h = area.y;
          float y = pos.y - yOffset;
          y = mod(y + h * 0.5, h) - h * 0.5;
          pos.y = y;

          // 2. Sway (Sine wave based on time + offset)
          float swayVal = sin(time * 0.5 + aOffset) * sway;
          pos.x += swayVal + wind.x * time * 0.1;
          pos.z += cos(time * 0.3 + aOffset) * sway + wind.z * time * 0.1;

          // Wrap X/Z strictly to area? 
          // previous CPU code clamped them. 
          // For simplicity in shader, let's just let them drift or wrap them if needed.
          // Wrapping X/Z creates "popping", clamping makes them pile up.
          // Let's implement soft wrapping for X/Z if wind is strong, but for light sway it's fine.
          // WITH WIND: needed.
          
          if (wind.x != 0.0) {
             pos.x = mod(pos.x + area.x * 0.5, area.x) - area.x * 0.5;
          }
          if (wind.z != 0.0) {
             pos.z = mod(pos.z + area.z * 0.5, area.z) - area.z * 0.5;
          }

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = (1.5 * (1.0 / -mvPosition.z)); // Scale by distance
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
        fragmentShader: `
        void main() {
          // Simple circular particle
          vec2 coord = gl_PointCoord - vec2(0.5);
          if(length(coord) > 0.5) discard;
          
          gl_FragColor = vec4(1.0, 1.0, 1.0, 0.4); // White, 0.4 opacity
        }
      `
      });
      this.snow = new THREE.Points(snowGeo, snowMat);
      this.contentGroup.add(this.snow);
      this.snowGeo = snowGeo;
    }
    updatePerformanceConfig(width, height) {
    }
    applyDPR(targetDPR) {
      const dpr = Math.min(window.devicePixelRatio || 1, targetDPR);
      if (Math.abs(this.renderer.getPixelRatio() - dpr) > 0.01) {
        this.renderer.setPixelRatio(dpr);
      }
    }
    // onPerformanceDrop removed (Legacy)
    resize(width, height) {
      const isMobile = width < 768;
      this.camera.fov = isMobile ? Config.Mountain.cameraFovMobile : Config.Mountain.cameraFovDesktop;
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      if (this.bgMesh) {
        const planeH = isMobile ? Config.Mountain.bgPlaneHeightMobile : Config.Mountain.bgPlaneHeightDesktop;
        const planeW = planeH * (width / height);
        this.bgMesh.scale.set(planeW, planeH, 1);
      }
    }
    updateLightFromVideo(dt) {
      if (!this.video || this.video.paused) return;
      this.lightUpdateTimer += dt;
      if (this.lightUpdateTimer > this.lightUpdateInterval) {
        this.lightUpdateTimer = 0;
        const oldTarget = this.renderer.getRenderTarget();
        this.renderer.setRenderTarget(this.avgColorRT);
        this.renderer.render(this.lightCvtScene, this.lightCvtCamera);
        this.renderer.readRenderTargetPixels(
          this.avgColorRT,
          0,
          0,
          1,
          1,
          this.pixelBuffer
        );
        this.renderer.setRenderTarget(oldTarget);
        this.targetColor.r = this.pixelBuffer[0] / 255;
        this.targetColor.g = this.pixelBuffer[1] / 255;
        this.targetColor.b = this.pixelBuffer[2] / 255;
      }
      const lerpFactor = 4 * dt;
      this.currentColor.lerp(this.targetColor, lerpFactor);
    }
    updateSnow(time, dt) {
      if (this.snowUniforms) {
        this.snowUniforms.time.value = time;
      }
    }
    update(time, dt) {
      if (this.playing && this.video && !this.video.paused) {
        const ct = this.video.currentTime;
        if (ct < this.lastTime) {
          this.stuckTime = 0;
          this.lastTime = ct;
        } else if (Math.abs(ct - this.lastTime) < 0.01) {
          if (this.video.readyState >= 3) {
            this.stuckTime += dt;
            if (this.stuckTime > 0.5) {
              console.warn(
                `[Mountain] Video Watchdog: Stuck at ${ct.toFixed(2)}s (Ready: ${this.video.readyState}). Forcing play...`
              );
              this.video.play().catch(
                (e) => console.error("[Mountain] Watchdog play failed", e)
              );
              this.stuckTime = 0;
            }
          } else {
            this.stuckTime = 0;
          }
        } else {
          this.stuckTime = 0;
          this.lastTime = ct;
        }
      }
      this.updateLightFromVideo(dt);
      this.updateSnow(time, dt);
    }
    render() {
      this.renderer.render(this.scene, this.camera);
    }
    // === EVENTS ===
    // === VISIBILITY CONTROL ===
    playVideo() {
      if (this.video && this.video.paused && !document.hidden) {
        this.video.play().catch((e) => {
          console.error("[Mountain] Video Play failed:", e);
          if (e.name === "NotAllowedError") {
            console.warn("[Mountain] Autoplay blocked. Attempting mute...");
            this.video.muted = true;
            this.video.play().catch(
              (err) => console.error("[Mountain] Muted Autoplay also failed", err)
            );
          }
        });
        this.playing = true;
        this.lastTime = this.video.currentTime;
        this.stuckTime = 0;
      }
    }
    pauseVideo() {
      if (this.video && !this.video.paused) {
        this.video.pause();
      }
    }
    animateEntry() {
      console.log("[Mountain] animateEntry()");
      import_gsap_3_122.default.to(this.camera.position, {
        z: 0.65,
        duration: 3,
        ease: "power3.out",
        onUpdate: () => {
        }
      });
      if (this.bgMesh && this.bgMesh.material && this.bgMesh.material.uniforms.uFade) {
        import_gsap_3_122.default.to(this.bgMesh.material.uniforms.uFade, {
          value: 1,
          duration: 3,
          ease: "linear"
        });
      }
    }
    updateScroll(scrollY) {
      const visibleHeightAtDist0 = 0.3;
      const scrollRatio = scrollY / window.innerHeight;
      this.contentGroup.position.y = scrollRatio * visibleHeightAtDist0 * 0.5;
    }
  };

  // src/js/scenes/GrassScene.js
  var THREE3 = __toESM(require_three());

  // src/js/components/WindField.js
  var THREE2 = __toESM(require_three());
  var WindField = class {
    constructor(renderer2, size = 256, params = {}) {
      this.renderer = renderer2;
      this.size = size;
      this.params = {
        decay: params.decay ?? 0.95,
        diffusion: params.diffusion ?? 0.2,
        advection: params.advection ?? 1,
        injectionRadius: params.injectionRadius ?? 0.08,
        injectionStrength: params.injectionStrength ?? 1,
        injectionStrengthMax: params.injectionStrengthMax ?? 1
      };
      const isWebGL2 = renderer2.capabilities.isWebGL2 === true;
      const hasHalfFloat = isWebGL2 || renderer2.extensions.has("OES_texture_half_float");
      const hasHalfFloatLinear = isWebGL2 || renderer2.extensions.has("OES_texture_half_float_linear");
      const hasCBHalfFloat = renderer2.extensions.has("EXT_color_buffer_half_float");
      const hasCBFloat = isWebGL2 && renderer2.extensions.has("EXT_color_buffer_float") || renderer2.extensions.has("WEBGL_color_buffer_float");
      let rtType = THREE2.HalfFloatType;
      if (!hasHalfFloat || !(hasCBHalfFloat || isWebGL2)) {
        rtType = hasCBFloat ? THREE2.FloatType : THREE2.HalfFloatType;
      }
      const filter = hasHalfFloatLinear ? THREE2.LinearFilter : THREE2.NearestFilter;
      const options = {
        minFilter: filter,
        magFilter: filter,
        format: THREE2.RGBAFormat,
        type: rtType,
        depthBuffer: false,
        stencilBuffer: false
      };
      this.rtA = new THREE2.WebGLRenderTarget(size, size, options);
      this.rtB = new THREE2.WebGLRenderTarget(size, size, options);
      this.read = this.rtA;
      this.write = this.rtB;
      this.scene = new THREE2.Scene();
      this.camera = new THREE2.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      this.material = new THREE2.ShaderMaterial({
        uniforms: {
          tVelocity: { value: this.read.texture },
          resolution: { value: new THREE2.Vector2(size, size) },
          decay: { value: this.params.decay },
          diffusion: { value: this.params.diffusion },
          advection: { value: this.params.advection },
          dt: { value: 0.016 },
          brushPos: { value: new THREE2.Vector2(-1, -1) },
          brushDir: { value: new THREE2.Vector2(0, 0) },
          injectionRadius: { value: this.params.injectionRadius },
          injectionStrength: { value: this.params.injectionStrength },
          injectionStrengthMax: { value: this.params.injectionStrengthMax },
          texelSize: { value: new THREE2.Vector2(1 / size, 1 / size) }
        },
        vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
        fragmentShader: `
        precision highp float;
        varying vec2 vUv;
        uniform sampler2D tVelocity;
        uniform vec2 resolution;
        uniform vec2 texelSize;
        uniform float decay;
        uniform float diffusion;
        uniform float advection;
        uniform float dt;
        uniform vec2 brushPos;
        uniform vec2 brushDir;
        uniform float injectionRadius;
        uniform float injectionStrength;
        uniform float injectionStrengthMax;

        vec2 sampleVel(vec2 uv) {
          return texture2D(tVelocity, uv).xy;
        }

        void main() {
          vec2 velPrev = sampleVel(vUv);
          vec2 advUV = vUv - advection * dt * velPrev;
          vec2 adv = sampleVel(advUV);

          vec2 sum = adv;
          sum += sampleVel(vUv + vec2(texelSize.x, 0.0));
          sum += sampleVel(vUv - vec2(texelSize.x, 0.0));
          sum += sampleVel(vUv + vec2(0.0, texelSize.y));
          sum += sampleVel(vUv - vec2(0.0, texelSize.y));
          vec2 blurred = sum / 5.0;
          vec2 vel = mix(adv, blurred, clamp(diffusion, 0.0, 1.0));

          vel *= clamp(decay, 0.0, 1.0);

          if (brushPos.x >= 0.0 && brushPos.x <= 1.0 && brushPos.y >= 0.0 && brushPos.y <= 1.0) {
            vec2 diff = vUv - brushPos;
            float distSq = dot(diff, diff);
            float r = max(injectionRadius, 1e-5);
            float rSq = r * r;
            float w = exp(-0.5 * distSq / rSq);
            float s = min(injectionStrength, injectionStrengthMax);
            vel += brushDir * (s * w);
          }

          gl_FragColor = vec4(vel, 0.0, 1.0);
        }
      `,
        depthTest: false,
        depthWrite: false
      });
      this.mesh = new THREE2.Mesh(new THREE2.PlaneGeometry(2, 2), this.material);
      this.scene.add(this.mesh);
      this.clear();
    }
    clear() {
      const prevRT = this.renderer.getRenderTarget();
      this.renderer.setRenderTarget(this.rtA);
      this.renderer.clear(true, false, false);
      this.renderer.setRenderTarget(this.rtB);
      this.renderer.clear(true, false, false);
      this.renderer.setRenderTarget(prevRT);
    }
    update(mouseUv, mouseDir, dt) {
      this.material.uniforms.tVelocity.value = this.read.texture;
      this.material.uniforms.dt.value = dt;
      if (mouseUv && mouseUv.x >= 0 && mouseUv.y >= 0) {
        this.material.uniforms.brushPos.value.set(mouseUv.x, mouseUv.y);
        this.material.uniforms.brushDir.value.set(mouseDir.x, mouseDir.y);
      } else {
        this.material.uniforms.brushPos.value.set(-1, -1);
        this.material.uniforms.brushDir.value.set(0, 0);
      }
      const prev = this.renderer.getRenderTarget();
      this.renderer.setRenderTarget(this.write);
      this.renderer.render(this.scene, this.camera);
      this.renderer.setRenderTarget(prev);
      const tmp = this.read;
      this.read = this.write;
      this.write = tmp;
    }
    get texture() {
      return this.read.texture;
    }
    dispose() {
      this.rtA.dispose();
      this.rtB.dispose();
      this.mesh.geometry.dispose();
      this.material.dispose();
    }
  };

  // src/js/scenes/GrassScene.js
  var grassVertexShader = `
  uniform float time;
  uniform float turbulenceAmplitude;
  uniform float turbulenceFrequency;
  uniform float damping;
  uniform float windStrength;
  uniform vec2 planeExtent;
  uniform sampler2D windTex;
  uniform float glowThreshold;
  uniform float glowBoost;
  uniform float scrollOffsetZ;
  uniform float scrollOffsetNorm;
  
  // Clumping Uniforms
  uniform float uClumpSpread;

  attribute float aRandomSeed;
  attribute vec2 aBladeOffset; // Offset of this blade within the clump

  varying float vHeight;
  varying float vRandomSeed;
  varying float vGlow;

  // Rotation Matrix function
  mat2 rotate2d(float angle) {
      return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
  }

  void main() {
    vec3 basePos = instanceMatrix[3].xyz;

    float extentZ = planeExtent.y;
    float zNorm = basePos.z / max(extentZ, 1e-5);
    zNorm = fract(zNorm - scrollOffsetNorm + 0.5) - 0.5;
    float newZBase = zNorm * extentZ;
    float deltaZ = newZBase - basePos.z;

    vec2 uv = vec2(basePos.x, newZBase) / planeExtent + 0.5;
    uv = vec2(clamp(uv.x, 0.0, 1.0), clamp(uv.y, 0.0, 1.0));
    
    vec2 wind = texture2D(windTex, uv).xy;
    float windMag = length(wind);

    vec3 pos = position;
    
    // 1. Apply Clump Spread (xy offset)
    // We apply this BEFORE bending so the blade stays rooted relative to its offset
    pos.x += aBladeOffset.x * uClumpSpread;
    pos.z += aBladeOffset.y * uClumpSpread;

    float heightFactor = pos.y;
    vHeight = heightFactor;

    vRandomSeed = aRandomSeed;

    float randomAngle = aRandomSeed * 2.0 * 3.14159265359;
    vec2 bendDir = vec2(cos(randomAngle), sin(randomAngle));
    float bendAmount = damping * heightFactor;
    pos.x += bendDir.x * bendAmount;
    pos.z += bendDir.y * bendAmount;

    pos.x += wind.x * windStrength * heightFactor;
    pos.z += wind.y * windStrength * heightFactor;

    float glow = smoothstep(glowThreshold, glowThreshold * 3.0, windMag) * glowBoost;
    vGlow = glow * heightFactor;

    float tx = basePos.x;
    float tz = newZBase; 
    float turbulence = sin(tx * turbulenceFrequency + time) *
                       sin(tz * turbulenceFrequency + time) *
                       turbulenceAmplitude * heightFactor;
    pos.x += turbulence;
    pos.z += turbulence;

    vec4 worldPos = instanceMatrix * vec4(pos, 1.0);
    worldPos.z += deltaZ;
    
    gl_Position = projectionMatrix * modelViewMatrix * worldPos;
  }
`;
  var grassFragmentShader = `
  varying float vHeight;
  varying float vRandomSeed;
  varying float vGlow;
  void main() {
    vec3 bottomColor = vec3(0.0, 0.0, 0.0);
    float grayValue = vRandomSeed * 0.15 + 0.1;
    vec3 topColor = vec3(grayValue, grayValue, grayValue);
    vec3 baseColor = mix(bottomColor, topColor + 0.1, vHeight);

    vec3 glowColor = vec3(0.6, 0.6, 0.6);
    vec3 color = baseColor + vGlow * glowColor;

    gl_FragColor = vec4(color, 1.0);
  }
`;
  var GrassScene = class {
    // === LIFECYCLE ===
    constructor(renderer2, qualityManager2) {
      // === EVENTS ===
      __publicField(this, "onPointerMove", (e) => {
        if (window.innerWidth <= 1024) return;
        const t = e.touches && e.touches[0] || e.changedTouches && e.changedTouches[0] || e;
        this.updateMousePosition(t.clientX, t.clientY);
      });
      __publicField(this, "onTouchMove", (e) => {
        if (window.innerWidth <= 1024) return;
        const t = e.touches[0];
        if (t) {
          this.updateMousePosition(t.clientX, t.clientY);
        }
      });
      __publicField(this, "onPointerOut", (e) => {
        if (!e.relatedTarget) {
          this.isHovering = false;
          this.lastGroundPoint = null;
        }
      });
      this.renderer = renderer2;
      this.qm = qualityManager2;
      this.scene = new THREE3.Scene();
      this.raycaster = new THREE3.Raycaster();
      this.mouse = new THREE3.Vector2();
      this.isHovering = false;
      this.lastGroundPoint = null;
      this.targetScrollY = 0;
      this.currentScrollY = 0;
      this.scrollOffsetNormZ = 0;
      this.grassBasePositions = [];
      this.tempVec2 = new THREE3.Vector2();
      this.tempVec3 = new THREE3.Vector3();
      this.lastGroundPointVec = new THREE3.Vector3();
      this.currentScaleDPR = 1;
      this.maxGrassCount = Config.Grass.maxGrassCount;
      this.windResolution = 256;
      this.initCamera();
      this.init();
    }
    init() {
      this.initSystems();
      this.updateGroundToViewport();
      if (this.qm) {
        this.qm.subscribe(this.onQualityChange.bind(this));
      }
    }
    onQualityChange(profile) {
      console.log("[GrassScene] Quality update:", profile.tier);
      this.isEnabled = profile.enableGrass !== false;
      if (this.grass) {
        this.grass.visible = this.isEnabled;
      }
      if (!this.isEnabled) return;
      const newClumpSize = profile.clumpSize || 10;
      const needRebuild = this.currentClumpSize !== newClumpSize;
      this.currentClumpSize = newClumpSize;
      if (this.uniforms && this.uniforms.uClumpSpread) {
        this.uniforms.uClumpSpread.value = profile.clumpSpread || 3;
      }
      if (needRebuild) {
        console.log(
          "[GrassScene] Clump Size changed to",
          newClumpSize,
          "- Rebuilding Geometry..."
        );
        if (this.grass) {
          this.scene.remove(this.grass);
          this.grass.geometry.dispose();
        }
        this.initGrass();
        this.layoutGrass();
      } else if (this.grass) {
        const targetTotalBlades = Math.min(
          profile.grassCount,
          this.maxGrassCount
        );
        const targetClumps = Math.floor(
          targetTotalBlades / this.currentClumpSize
        );
        this.grass.count = targetClumps;
      }
      if (this.windResolution !== profile.windResolution) {
        this.windResolution = profile.windResolution;
        this.reinitWind(profile.windResolution);
      }
      if (this.windResolution !== profile.windResolution) {
        this.windResolution = profile.windResolution;
        this.reinitWind(profile.windResolution);
      }
      this.targetDPR = profile.maxDPR;
      this.applyDPR(profile.maxDPR);
    }
    reinitWind(resolution) {
      if (this.windField) {
        this.windField.dispose();
      }
      const u = Config.Grass.uniforms;
      this.windField = new WindField(this.renderer, resolution, {
        decay: u.decay,
        diffusion: u.diffusion,
        advection: u.advection,
        injectionRadius: u.injectionRadius,
        injectionStrength: u.injectionStrength,
        injectionStrengthMax: u.injectionStrengthMax
      });
      if (this.uniforms) {
        this.uniforms.windTex.value = this.windField.texture;
      }
    }
    dispose() {
      if (this.ground) {
        this.ground.geometry.dispose();
        this.ground.material.dispose();
      }
      if (this.grass) {
        this.grass.geometry.dispose();
        this.grass.material.dispose();
      }
      if (this.windField) {
        this.windField.dispose();
      }
    }
    mount() {
      window.addEventListener("pointermove", this.onPointerMove, {
        capture: true
      });
      window.addEventListener("touchstart", this.onTouchMove, { capture: true });
      window.addEventListener("touchmove", this.onTouchMove, { capture: true });
      window.addEventListener("pointerout", this.onPointerOut);
    }
    unmount() {
      window.removeEventListener("pointermove", this.onPointerMove, {
        capture: true
      });
      window.removeEventListener("pointerout", this.onPointerOut);
      window.removeEventListener("touchstart", this.onTouchMove, {
        capture: true
      });
      window.removeEventListener("touchmove", this.onTouchMove, {
        capture: true
      });
    }
    initCamera() {
      const cfg = Config.Grass.camera;
      this.camera = new THREE3.PerspectiveCamera(
        cfg.fov,
        window.innerWidth / window.innerHeight,
        cfg.near,
        cfg.far
      );
      this.camera.position.set(...cfg.position);
      this.camera.lookAt(...cfg.lookAt);
      this.camera.up.set(0, 0, -1);
    }
    initSystems() {
      console.log("[Grass] initSystems()");
      const planeSize = Config.Grass.planeSize;
      const groundGeometry = new THREE3.PlaneGeometry(planeSize, planeSize);
      groundGeometry.rotateX(-Math.PI / 2);
      const groundMaterial = new THREE3.MeshBasicMaterial({ color: 0 });
      this.ground = new THREE3.Mesh(groundGeometry, groundMaterial);
      this.scene.add(this.ground);
      this.initialAspect = window.innerWidth / window.innerHeight;
      const u = Config.Grass.uniforms;
      this.uniforms = {
        time: { value: 0 },
        turbulenceAmplitude: { value: u.turbulenceAmplitude },
        turbulenceFrequency: { value: u.turbulenceFrequency },
        damping: { value: u.damping },
        windStrength: { value: u.windStrength },
        planeExtent: { value: new THREE3.Vector2(planeSize, planeSize) },
        scrollOffsetZ: { value: 0 },
        scrollOffsetNorm: { value: 0 },
        windTex: { value: null },
        glowThreshold: { value: u.glowThreshold },
        glowBoost: { value: u.glowBoost },
        uClumpSpread: { value: 0.5 }
        // Default
      };
      const simRes = this.windResolution;
      this.windField = new WindField(this.renderer, simRes, {
        decay: Config.Grass.uniforms.decay,
        diffusion: Config.Grass.uniforms.diffusion,
        advection: u.advection,
        injectionRadius: u.injectionRadius,
        injectionStrength: u.injectionStrength,
        injectionStrengthMax: u.injectionStrengthMax
      });
      this.uniforms.windTex.value = this.windField.texture;
    }
    initGrass() {
      if (!this.currentClumpSize) this.currentClumpSize = 10;
      console.log(
        "[Grass] initGrass() with Clumping started. Size:",
        this.currentClumpSize
      );
      const bladeWidth = Config.Grass.bladeWidth;
      const bladeHeight = Config.Grass.bladeHeight;
      const bladeSegments = Config.Grass.bladeSegments;
      const taperFactor = Config.Grass.taperFactor;
      const clumpSize = this.currentClumpSize;
      const baseBladeGeo = new THREE3.PlaneGeometry(
        bladeWidth,
        bladeHeight,
        1,
        bladeSegments
      );
      const verts = baseBladeGeo.attributes.position.array;
      for (let i = 0; i < verts.length; i += 3) {
        if (verts[i + 1] > bladeHeight / 2 - 1e-3) {
          verts[i] *= taperFactor;
        }
      }
      baseBladeGeo.attributes.position.needsUpdate = true;
      baseBladeGeo.translate(0, bladeHeight / 2, 0);
      const bladeGeometries = [];
      for (let i = 0; i < clumpSize; i++) {
        const blade = baseBladeGeo.clone();
        const rot = Math.random() * Math.PI * 2;
        blade.rotateY(rot);
        const r = 0.5 * Math.sqrt(Math.random());
        const theta = Math.random() * 2 * Math.PI;
        const ox = r * Math.cos(theta);
        const oz = r * Math.sin(theta);
        const count = blade.attributes.position.count;
        const offsets = new Float32Array(count * 2);
        for (let k = 0; k < count; k++) {
          offsets[k * 2 + 0] = ox;
          offsets[k * 2 + 1] = oz;
        }
        blade.setAttribute("aBladeOffset", new THREE3.BufferAttribute(offsets, 2));
        bladeGeometries.push(blade);
      }
      const mergedGeo = new THREE3.BufferGeometry();
      let totalVerts = 0;
      let totalIndices = 0;
      bladeGeometries.forEach((g) => {
        totalVerts += g.attributes.position.count;
        totalIndices += g.index.count;
      });
      const mergedPos = new Float32Array(totalVerts * 3);
      const mergedOffset = new Float32Array(totalVerts * 2);
      const mergedUV = new Float32Array(totalVerts * 2);
      const mergedIndex = new Uint16Array(totalIndices);
      let vOffset = 0;
      let iOffset = 0;
      bladeGeometries.forEach((g) => {
        const p = g.attributes.position.array;
        const o = g.attributes.aBladeOffset.array;
        const uv = g.attributes.uv.array;
        const idx = g.index.array;
        const count = g.attributes.position.count;
        mergedPos.set(p, vOffset * 3);
        mergedOffset.set(o, vOffset * 2);
        mergedUV.set(uv, vOffset * 2);
        for (let j = 0; j < idx.length; j++) {
          mergedIndex[iOffset + j] = idx[j] + vOffset;
        }
        vOffset += count;
        iOffset += idx.length;
      });
      mergedGeo.setAttribute("position", new THREE3.BufferAttribute(mergedPos, 3));
      mergedGeo.setAttribute(
        "aBladeOffset",
        new THREE3.BufferAttribute(mergedOffset, 2)
      );
      mergedGeo.setAttribute("uv", new THREE3.BufferAttribute(mergedUV, 2));
      mergedGeo.setIndex(new THREE3.BufferAttribute(mergedIndex, 1));
      mergedGeo.computeVertexNormals();
      const isMobile = window.innerWidth < 768;
      const maxTotalBlades = isMobile ? Config.Grass.mobileMaxGrassCount : Config.Grass.maxGrassCount;
      const maxClumpCount = Math.ceil(maxTotalBlades / clumpSize);
      console.log(
        `[Grass Init] Clumping: Size=${clumpSize}, TotalBlades=${maxTotalBlades}, ClumpInstances=${maxClumpCount}`
      );
      const randomSeeds = new Float32Array(maxClumpCount);
      for (let i = 0; i < maxClumpCount; i++) randomSeeds[i] = Math.random();
      mergedGeo.setAttribute(
        "aRandomSeed",
        new THREE3.InstancedBufferAttribute(randomSeeds, 1)
      );
      const grassMaterial = new THREE3.ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: grassVertexShader,
        fragmentShader: grassFragmentShader,
        side: THREE3.DoubleSide
      });
      this.grass = new THREE3.InstancedMesh(
        mergedGeo,
        grassMaterial,
        maxClumpCount
      );
      this.grass.frustumCulled = false;
      this.scene.add(this.grass);
      this.grassBasePositions = new Array(maxClumpCount);
      for (let i = 0; i < maxClumpCount; i++) {
        this.grassBasePositions[i] = {
          x: Math.random() - 0.5,
          z: Math.random() - 0.5,
          rot: Math.random() * Math.PI * 2
        };
      }
      this.dummy = new THREE3.Object3D();
    }
    updatePerformanceConfig(width, height) {
    }
    applyDPR(targetDPR) {
      const dpr = Math.min(window.devicePixelRatio || 1, targetDPR);
      if (Math.abs(this.renderer.getPixelRatio() - dpr) > 0.01) {
        this.renderer.setPixelRatio(dpr);
      }
    }
    onPerformanceDrop(fps) {
      this.currentScaleDPR *= 0.8;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const aspect = width / height;
      const baseDPR = Math.max(0.6, Math.min(aspect, 1));
      this.applyDPR(baseDPR * this.currentScaleDPR);
    }
    resize(width, height) {
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.updateGroundToViewport();
      this.layoutGrass();
    }
    updateGroundToViewport() {
      const isMobile = window.innerWidth < 768;
      const aspect = isMobile ? this.initialAspect : this.camera.aspect;
      this.ground.scale.set(aspect, 1, 1);
    }
    updateScrollState(scrollY) {
      this.targetScrollY = scrollY;
    }
    layoutGrass() {
      const planeSize = Config.Grass.planeSize;
      const extentX = planeSize * this.ground.scale.x;
      const extentZ = planeSize * this.ground.scale.z;
      const grassCount = this.grass.count;
      for (let i = 0; i < grassCount; i++) {
        const base = this.grassBasePositions[i];
        const x = base.x * extentX;
        const z = base.z * extentZ;
        this.dummy.position.set(x, 0, z);
        this.dummy.rotation.y = base.rot;
        this.dummy.updateMatrix();
        this.grass.setMatrixAt(i, this.dummy.matrix);
      }
      this.grass.instanceMatrix.needsUpdate = true;
    }
    update(time, dt) {
      this.currentScrollY = this.targetScrollY;
      const aspect = window.innerWidth / window.innerHeight;
      const effectiveAspect = Math.min(aspect, 1.5);
      this.scrollOffsetNormZ = this.currentScrollY * Config.Grass.scrollNormPerPixel * effectiveAspect;
      this.scrollOffsetNormZ = this.scrollOffsetNormZ % 1;
      const planeSize = Config.Grass.planeSize;
      const extentZ = planeSize * this.ground.scale.z;
      this.uniforms.scrollOffsetZ.value = this.scrollOffsetNormZ * extentZ;
      this.uniforms.scrollOffsetNorm.value = this.scrollOffsetNormZ;
      this.uniforms.planeExtent.value.set(
        planeSize * this.ground.scale.x,
        extentZ
      );
      this.uniforms.time.value = time;
      let mouseUv = null;
      this.tempVec2.set(0, 0);
      const dir = this.tempVec2;
      if (this.isHovering) {
        this.raycaster.setFromCamera(this.mouse, this.camera);
        const hit = this.raycaster.intersectObject(this.ground, false);
        if (hit.length > 0) {
          const p = hit[0].point;
          const extentX = planeSize * this.ground.scale.x;
          const extentZReal = planeSize * this.ground.scale.z;
          const u = Math.min(Math.max(p.x / extentX + 0.5, 0), 1);
          const v = Math.min(Math.max(p.z / extentZReal + 0.5, 0), 1);
          mouseUv = { x: u, y: v };
          if (this.lastGroundPoint) {
            dir.set(p.x - this.lastGroundPoint.x, p.z - this.lastGroundPoint.z);
            const maxLen = Config.Grass.bladeHeight * Config.Grass.maxWindOffset;
            if (dir.length() > maxLen) {
              dir.setLength(maxLen);
            }
          } else {
            this.lastGroundPoint = this.lastGroundPointVec;
          }
          this.lastGroundPoint.copy(p);
        } else {
          this.lastGroundPoint = null;
        }
      } else {
        this.lastGroundPoint = null;
      }
      this.windField.update(mouseUv, dir, dt);
      this.uniforms.windTex.value = this.windField.texture;
    }
    render() {
      this.renderer.render(this.scene, this.camera);
    }
    updateMousePosition(clientX, clientY) {
      this.mouse.x = clientX / window.innerWidth * 2 - 1;
      this.mouse.y = -(clientY / window.innerHeight) * 2 + 1;
      this.isHovering = true;
    }
  };

  // src/js/components/ScrollBender.js
  var ScrollBender = class {
    constructor() {
      this.cache = [];
      this.resize();
      this.initEvents();
    }
    initEvents() {
      window.addEventListener("resize", () => this.resize());
    }
    resize() {
      this.cache = [];
      const els = document.querySelectorAll("[data-bend-on-scroll]");
      const docScroll = window.scrollY || document.documentElement.scrollTop;
      els.forEach((el) => {
        el.style.willChange = "transform";
        const rect = el.getBoundingClientRect();
        const top = rect.top + docScroll;
        let maxDeg = parseFloat(el.dataset.bendMax);
        if (isNaN(maxDeg)) maxDeg = -8;
        this.cache.push({
          el,
          top,
          height: rect.height,
          maxDeg
        });
      });
    }
    update(currentScrollY2) {
      if (!this.cache.length) return;
      if (window.innerWidth < 768) return;
      const viewportHeight = window.innerHeight;
      const zoneStart = viewportHeight * 0.5;
      const zoneHeight = viewportHeight * 0.5;
      for (let i = 0; i < this.cache.length; i++) {
        const item = this.cache[i];
        const elTopInViewport = item.top - currentScrollY2;
        const elCenterInViewport = elTopInViewport + item.height / 2;
        let angle = 0;
        if (elCenterInViewport > zoneStart) {
          const dist = elCenterInViewport - zoneStart;
          const ratio = Math.min(1, dist / zoneHeight);
          angle = ratio * item.maxDeg;
        }
        const lastAngle = item.lastAngle || 0;
        if (Math.abs(angle - lastAngle) > 0.1) {
          item.el.style.transform = `perspective(1000px) rotateX(${angle.toFixed(
            2
          )}deg)`;
          item.lastAngle = angle;
        }
      }
    }
  };

  // src/js/components/AudioManager.js
  var import_gsap_3_123 = __toESM(require_gsap());
  var AudioManager = class {
    constructor() {
      this.audio = null;
      this.isPlaying = false;
      this.isMuted = false;
      this.volume = 0.5;
      this.trackUrl = "https://bunqlabs.github.io/bunq-labs-website-dec2025/assets/audio/ambient_audio.mp4";
      this.init();
    }
    init() {
      this.audio = new Audio(this.trackUrl);
      this.audio.loop = true;
      this.audio.volume = 0;
      this.audio.preload = "auto";
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          this.fadeTo(0);
          if (this.audio) this.audio.pause();
        } else {
          if (this.isPlaying && !this.isMuted) {
            this.audio.play().catch(() => {
            });
            this.fadeTo(this.volume);
          }
        }
      });
    }
    unlock() {
      if (this.isPlaying) return;
      if (!this.audio) return;
      this.audio.play().then(() => {
        console.log("[Audio] Unlocked successfully.");
        this.isPlaying = true;
        this.fadeTo(this.volume);
        this.updateUI();
      }).catch((err) => {
        console.warn("[Audio] Autoplay blocked:", err.message);
      });
    }
    play() {
      if (!this.audio) return;
      if (this.audio.paused) {
        this.audio.play().then(() => {
          this.isPlaying = true;
          this.fadeTo(this.volume);
        }).catch((e) => console.warn(e));
      }
    }
    pause() {
      if (!this.audio) return;
      this.fadeTo(0, () => {
        this.audio.pause();
      });
    }
    setMute(shouldBeMuted) {
      this.isMuted = shouldBeMuted;
      if (this.isMuted) {
        this.fadeTo(0);
      } else {
        if (this.audio && this.audio.paused) {
          this.play();
        } else {
          this.fadeTo(this.volume);
        }
      }
      this.updateUI();
    }
    toggleMute() {
      this.isMuted = !this.isMuted;
      if (!this.isMuted) {
        if (this.audio.paused) {
          this.play();
        } else {
          this.fadeTo(this.volume);
        }
      } else {
        this.fadeTo(0);
      }
      this.updateUI();
      return this.isMuted;
    }
    fadeTo(val, onComplete) {
      import_gsap_3_123.default.to(this.audio, {
        volume: val,
        duration: 1.5,
        ease: "power1.inOut",
        onComplete
      });
    }
    updateUI() {
      const btn = document.getElementById("audio-toggle");
      if (btn) {
        const newText = this.isMuted ? "SOUND OFF" : "SOUND ON";
        btn.textContent = newText;
        btn.style.opacity = this.isMuted ? "0.5" : "1.0";
        if (typeof btn.__baseText !== "undefined") {
          btn.__baseText = newText;
        }
        if (btn.__widthLocked) {
          btn.__widthLocked = false;
          btn.style.width = "";
        }
      }
    }
  };

  // src/js/components/ClientLogoCycler.js
  var ClientLogoCycler = class {
    constructor() {
      this.logos = [
        "APTDC.png",
        "Ambrane.png",
        "Arthigamya.png",
        "Cosmo.png",
        "Creo.png",
        "FML.png",
        "Feemonk.png",
        "Kapil.png",
        "Nova nova.png",
        "Oneplus.png",
        "Pi.png",
        "Ramco.png",
        "Shlok.png",
        "Svayam.png",
        "Tedy.png"
      ];
      this.basePath = "https://bunqlabs.github.io/bunq-labs-website-dec2025/assets/images/client-logos/";
      this.cycleInterval = 3e3;
      this.intervalId = null;
      this.slots = [];
      this.activeLogos = /* @__PURE__ */ new Set();
    }
    init() {
      const elements = document.querySelectorAll("[data-client-logo]");
      if (elements.length === 0) {
        console.warn("[LogoCycler] No elements found with data-client-logo");
        return;
      }
      this.slots = Array.from(elements);
      this.slots.forEach((slot) => {
        const img = slot.querySelector("img");
        if (img) {
          const randomLogo = this.getUniqueRandomLogo();
          img.src = this.basePath + randomLogo;
          this.activeLogos.add(randomLogo);
          slot.dataset.currentLogo = randomLogo;
        }
      });
      this.preloadImages();
      this.startChecking();
    }
    preloadImages() {
      this.logos.forEach((logo) => {
        const img = new Image();
        img.src = this.basePath + logo;
      });
    }
    getUniqueRandomLogo() {
      const available = this.logos.filter((logo) => !this.activeLogos.has(logo));
      if (available.length === 0)
        return this.logos[Math.floor(Math.random() * this.logos.length)];
      const randomIndex = Math.floor(Math.random() * available.length);
      return available[randomIndex];
    }
    startChecking() {
      if (this.intervalId) clearInterval(this.intervalId);
      this.intervalId = setInterval(() => {
        if (document.hidden) return;
        this.cycleOneSlot();
      }, this.cycleInterval);
    }
    cycleOneSlot() {
      if (this.slots.length === 0) return;
      let slotIndex;
      let attempts = 0;
      do {
        slotIndex = Math.floor(Math.random() * this.slots.length);
        attempts++;
      } while (this.lastUpdatedSlotIndex === slotIndex && attempts < 5);
      this.lastUpdatedSlotIndex = slotIndex;
      const slot = this.slots[slotIndex];
      const img = slot.querySelector("img");
      if (!img) return;
      const currentLogo = slot.dataset.currentLogo;
      if (currentLogo) this.activeLogos.delete(currentLogo);
      const newLogo = this.getUniqueRandomLogo();
      slot.classList.add("changing");
      setTimeout(() => {
        const newLogo2 = this.getUniqueRandomLogo();
        if (currentLogo) this.activeLogos.delete(currentLogo);
        this.activeLogos.add(newLogo2);
        const tempImg = new Image();
        tempImg.onload = () => {
          if (slot.contains(img)) {
            img.src = this.basePath + newLogo2;
            slot.dataset.currentLogo = newLogo2;
            requestAnimationFrame(() => {
              slot.classList.remove("changing");
            });
          }
        };
        tempImg.onerror = () => {
          slot.classList.remove("changing");
        };
        tempImg.src = this.basePath + newLogo2;
      }, 500);
    }
    destroy() {
      if (this.intervalId) clearInterval(this.intervalId);
    }
  };

  // src/js/components/AcceleratingGlobe.js
  var import_gsap_3_124 = __toESM(require_gsap());
  var AcceleratingGlobe = class {
    constructor() {
      this.timelines = [];
      this.scrollHandler = null;
    }
    init() {
      const globes = document.querySelectorAll("[data-accelerating-globe]");
      if (globes.length === 0) return;
      globes.forEach((globe) => {
        const circles = globe.querySelectorAll(
          "[data-accelerating-globe-circle]"
        );
        if (circles.length < 8) return;
        const tl = import_gsap_3_124.default.timeline({
          repeat: -1,
          defaults: { duration: 1, ease: "none" }
        });
        const widths = [
          ["50%", "37.5%"],
          ["37.5%", "25%"],
          ["25%", "12.5%"],
          ["calc(12.5% + 1px)", "calc(0% + 1px)"],
          ["calc(0% + 1px)", "calc(12.5% + 1px)"],
          ["12.5%", "25%"],
          ["25%", "37.5%"],
          ["37.5%", "50%"]
        ];
        circles.forEach((el, i) => {
          const wIndex = i % 8;
          const [fromW, toW] = widths[wIndex];
          tl.fromTo(el, { width: fromW }, { width: toW }, i === 0 ? 0 : "<");
        });
        this.timelines.push(tl);
        if (window.observeWith) {
          window.observeWith(globe, { threshold: 0 }, (entry) => {
            if (entry.isIntersecting) {
              console.log("[AcceleratingGlobe] In View - PLAY");
              tl.play();
            } else {
              console.log("[AcceleratingGlobe] Out of View - PAUSE");
              tl.pause();
            }
          });
        }
      });
      const isMobile = window.innerWidth < Config.System.desktopBreakpoint;
      if (!isMobile) {
        let lastY = window.scrollY;
        let lastT = performance.now();
        let stopTimeout;
        this.scrollHandler = () => {
          if (this.timelines.length === 0) return;
          const now = performance.now();
          const dy = window.scrollY - lastY;
          const dt = now - lastT;
          lastY = window.scrollY;
          lastT = now;
          const velocity = dt > 0 ? dy / dt * 1e3 : 0;
          const boost = Math.abs(velocity * 5e-3);
          const targetScale = boost + 1;
          this.timelines.forEach((tl) => tl.timeScale(targetScale));
          clearTimeout(stopTimeout);
          stopTimeout = setTimeout(() => {
            this.timelines.forEach((tl) => {
              import_gsap_3_124.default.to(tl, {
                timeScale: 1,
                duration: 0.6,
                ease: "power2.out",
                overwrite: true
              });
            });
          }, 100);
        };
        window.addEventListener("scroll", this.scrollHandler, { passive: true });
      }
    }
    destroy() {
      if (this.scrollHandler) {
        window.removeEventListener("scroll", this.scrollHandler);
        this.scrollHandler = null;
      }
      if (this.timelines.length > 0) {
        this.timelines.forEach((tl) => tl.kill());
        this.timelines = [];
      }
    }
  };

  // src/js/components/FlickCards.js
  var import_gsap_3_125 = __toESM(require_gsap());
  var import_Draggable = __toESM(require_gsap_draggable());
  import_gsap_3_125.default.registerPlugin(import_Draggable.default);
  var FlickCards = class {
    constructor() {
      this.sliders = [];
    }
    init() {
      const sliders = document.querySelectorAll("[data-flick-cards-init]");
      if (sliders.length === 0) return;
      const leftBtn = document.getElementById("flick-control-left");
      const rightBtn = document.getElementById("flick-control-right");
      sliders.forEach((slider) => {
        const list = slider.querySelector("[data-flick-cards-list]");
        if (!list) return;
        const cards = Array.from(
          list.querySelectorAll("[data-flick-cards-item]")
        );
        const total = cards.length;
        if (total < 7) {
          console.warn("[FlickCards] Not minimum of 7 cards");
          return;
        }
        let activeIndex = 0;
        const sliderWidth = slider.offsetWidth;
        const threshold = 0.1;
        cards.forEach((card) => {
          const existingInfo = card.querySelector("[data-flick-cards-dragger]");
          if (existingInfo) existingInfo.remove();
        });
        const draggers = [];
        cards.forEach((card) => {
          const dragger = document.createElement("div");
          dragger.setAttribute("data-flick-cards-dragger", "");
          card.appendChild(dragger);
          draggers.push(dragger);
        });
        slider.setAttribute("data-flick-drag-status", "grab");
        const getConfig = (i, currentIndex) => {
          let diff = i - currentIndex;
          if (diff > total / 2) diff -= total;
          else if (diff < -total / 2) diff += total;
          switch (diff) {
            case 0:
              return { x: 0, y: 0, rot: 0, s: 1, o: 1, z: 5 };
            case 1:
              return { x: 25, y: 1, rot: 10, s: 0.9, o: 1, z: 4 };
            case -1:
              return { x: -25, y: 1, rot: -10, s: 0.9, o: 1, z: 4 };
            case 2:
              return { x: 45, y: 5, rot: 15, s: 0.8, o: 1, z: 3 };
            case -2:
              return { x: -45, y: 5, rot: -15, s: 0.8, o: 1, z: 3 };
            default:
              const dir = diff > 0 ? 1 : -1;
              return { x: 55 * dir, y: 5, rot: 20 * dir, s: 0.6, o: 0, z: 2 };
          }
        };
        const renderCards = (currentIndex) => {
          cards.forEach((card, i) => {
            const cfg = getConfig(i, currentIndex);
            let status;
            if (cfg.x === 0) status = "active";
            else if (cfg.x === 25) status = "2-after";
            else if (cfg.x === -25) status = "2-before";
            else if (cfg.x === 45) status = "3-after";
            else if (cfg.x === -45) status = "3-before";
            else status = "hidden";
            card.setAttribute("data-flick-cards-item-status", status);
            card.style.zIndex = cfg.z;
            const video = card.querySelector("video");
            if (video) {
              if (status === "active") {
                video.play().catch((e) => {
                });
              } else {
                video.pause();
              }
            }
            if (status === "active") {
              const desc = card.getAttribute("data-flick-cards-item-desc");
              const descEl = document.getElementById("work-desc");
              if (descEl && desc) {
                descEl.textContent = desc;
                HeadingSplitText.animateElement(descEl);
              }
            }
            import_gsap_3_125.default.to(card, {
              duration: 1,
              // ease: 'elastic.out(1.2, 1)',
              ease: "expo.out",
              xPercent: cfg.x,
              yPercent: cfg.y,
              rotation: cfg.rot,
              scale: cfg.s,
              opacity: cfg.o
            });
          });
        };
        renderCards(activeIndex);
        let pressClientX = 0;
        const draggableInstance = import_Draggable.default.create(draggers, {
          type: "x",
          edgeResistance: 0.8,
          bounds: { minX: -sliderWidth / 2, maxX: sliderWidth / 2 },
          inertia: false,
          onPress: function() {
            pressClientX = this.pointerEvent.clientX;
            slider.setAttribute("data-flick-drag-status", "grabbing");
          },
          onDrag: function() {
            const rawProgress = this.x / sliderWidth;
            const progress = Math.min(1, Math.abs(rawProgress));
            const direction = rawProgress > 0 ? -1 : 1;
            const nextIndex = (activeIndex + direction + total) % total;
            cards.forEach((card, i) => {
              const from = getConfig(i, activeIndex);
              const to = getConfig(i, nextIndex);
              const mix = (prop) => from[prop] + (to[prop] - from[prop]) * progress;
              import_gsap_3_125.default.set(card, {
                xPercent: mix("x"),
                yPercent: mix("y"),
                rotation: mix("rot"),
                scale: mix("s"),
                opacity: mix("o")
              });
            });
          },
          onRelease: function() {
            slider.setAttribute("data-flick-drag-status", "grab");
            const releaseClientX = this.pointerEvent.clientX;
            const dragDistance = Math.abs(releaseClientX - pressClientX);
            const raw = this.x / sliderWidth;
            let shift = 0;
            if (raw > threshold) shift = -1;
            else if (raw < -threshold) shift = 1;
            if (shift !== 0) {
              activeIndex = (activeIndex + shift + total) % total;
              renderCards(activeIndex);
            } else {
              renderCards(activeIndex);
            }
            import_gsap_3_125.default.to(this.target, {
              x: 0,
              duration: 0.3,
              ease: "power1.out"
            });
            if (dragDistance < 4) {
              this.target.style.pointerEvents = "none";
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  const el = document.elementFromPoint(
                    releaseClientX,
                    this.pointerEvent.clientY
                  );
                  if (el && el !== this.target) {
                    el.click();
                  }
                  this.target.style.pointerEvents = "auto";
                });
              });
            }
          }
        });
        const handleLeft = () => {
          activeIndex = (activeIndex - 1 + total) % total;
          renderCards(activeIndex);
        };
        const handleRight = () => {
          activeIndex = (activeIndex + 1) % total;
          renderCards(activeIndex);
        };
        if (leftBtn) leftBtn.addEventListener("click", handleLeft);
        if (rightBtn) rightBtn.addEventListener("click", handleRight);
        this.sliders.push({
          slider,
          draggables: draggableInstance,
          buttons: {
            left: leftBtn,
            right: rightBtn,
            handleLeft,
            handleRight
          }
        });
      });
    }
    destroy() {
      this.sliders.forEach((item) => {
        item.draggables.forEach((d) => d.kill());
        if (item.buttons) {
          if (item.buttons.left) {
            item.buttons.left.removeEventListener(
              "click",
              item.buttons.handleLeft
            );
          }
          if (item.buttons.right) {
            item.buttons.right.removeEventListener(
              "click",
              item.buttons.handleRight
            );
          }
        }
      });
      this.sliders = [];
    }
  };

  // src/js/components/Navigation.js
  var Navigation = class {
    constructor() {
      this.init();
    }
    init() {
      document.querySelectorAll('[data-navigation-toggle="toggle"]').forEach((toggleBtn) => {
        toggleBtn.addEventListener("click", () => {
          this.toggle();
        });
      });
      document.querySelectorAll('[data-navigation-toggle="close"]').forEach((closeBtn) => {
        closeBtn.addEventListener("click", () => {
          this.close();
        });
      });
      document.addEventListener("keydown", (e) => {
        if (e.keyCode === 27) {
          this.close();
        }
      });
    }
    toggle() {
      const navStatusEl = document.querySelector("[data-navigation-status]");
      if (!navStatusEl) return;
      if (navStatusEl.getAttribute("data-navigation-status") === "not-active") {
        this.open(navStatusEl);
      } else {
        this.close(navStatusEl);
      }
    }
    open(navStatusEl = document.querySelector("[data-navigation-status]")) {
      if (!navStatusEl) return;
      navStatusEl.setAttribute("data-navigation-status", "active");
    }
    close(navStatusEl = document.querySelector("[data-navigation-status]")) {
      if (!navStatusEl) return;
      if (navStatusEl.getAttribute("data-navigation-status") === "active") {
        navStatusEl.setAttribute("data-navigation-status", "not-active");
      }
    }
  };

  // src/js/components/TextScrambler.js
  var import_gsap_3_126 = __toESM(require_gsap());
  var TextScrambler = class {
    constructor() {
      this.lockedElements = /* @__PURE__ */ new Set();
      this.prefersReduced = false;
      this.CHARS = "!%#?*+-$=<>";
    }
    init() {
      this.prefersReduced = matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      this.boundRelockAll = this.relockAll.bind(this);
      this.boundPointerOver = this.handlePointerOver.bind(this);
      this.boundFocusIn = this.handleFocusIn.bind(this);
      this.boundResizeRef = this.boundResize.bind(this);
      window.addEventListener("resize", this.boundResizeRef, { passive: true });
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(
          () => requestAnimationFrame(this.boundRelockAll)
        );
      }
      document.addEventListener("pointerover", this.boundPointerOver, true);
      document.addEventListener("focusin", this.boundFocusIn);
    }
    lockWidth(el) {
      if (!el || el.__widthLocked) return;
      const cs = getComputedStyle(el);
      if (cs.display === "inline") el.style.display = "inline-block";
      if (cs.whiteSpace !== "nowrap") el.style.whiteSpace = "nowrap";
      const w = el.getBoundingClientRect().width;
      if (w > 0) {
        el.style.width = Math.ceil(w) + "px";
        el.__widthLocked = true;
        this.lockedElements.add(el);
      }
    }
    relockAll() {
      this.lockedElements.forEach((el) => {
        if (!document.contains(el)) {
          this.lockedElements.delete(el);
          return;
        }
        el.style.width = "";
        const w = el.getBoundingClientRect().width;
        if (w > 0) el.style.width = Math.ceil(w) + "px";
      });
    }
    boundResize() {
      requestAnimationFrame(this.boundRelockAll);
    }
    scrambleTo(el, finalText, duration = 0.5) {
      if (!el) return;
      this.lockWidth(el);
      if (!el.__baseText) {
        el.__baseText = (el.textContent || "").trim();
      }
      finalText = finalText || el.__baseText;
      if (this.prefersReduced) {
        el.textContent = finalText;
        return;
      }
      const startText = el.textContent;
      const length = Math.max(startText.length, finalText.length);
      const obj = { value: 0 };
      import_gsap_3_126.default.killTweensOf(obj);
      import_gsap_3_126.default.to(obj, {
        value: 1,
        duration,
        ease: "none",
        onUpdate: () => {
          const progress = obj.value;
          let result = "";
          for (let i = 0; i < length; i++) {
            if (progress * length > i) {
              result += finalText[i] || "";
            } else {
              result += this.CHARS[Math.floor(Math.random() * this.CHARS.length)];
            }
          }
          el.textContent = result;
        },
        onComplete: () => {
          el.textContent = finalText;
        }
      });
    }
    handlePointerOver(e) {
      const el = e.target.closest(".hover-scramble-text");
      if (!el) return;
      if (e.relatedTarget && el.contains(e.relatedTarget)) return;
      this.scrambleTo(el, el.__baseText || el.textContent.trim());
    }
    handleFocusIn(e) {
      const el = e.target.closest(".hover-scramble-text");
      if (!el) return;
      this.scrambleTo(el, el.__baseText || el.textContent.trim());
    }
    destroy() {
      window.removeEventListener("resize", this.boundResizeRef);
      document.removeEventListener("pointerover", this.boundPointerOver, true);
      document.removeEventListener("focusin", this.boundFocusIn);
      this.lockedElements.clear();
    }
  };

  // src/js/components/ServiceCards.js
  var ServiceCards = class {
    constructor() {
      this.boundHandleClick = this.handleClick.bind(this);
      this.isInitialized = false;
      this.init();
    }
    init() {
      if (this.isInitialized) return;
      document.addEventListener("click", this.boundHandleClick);
      this.isInitialized = true;
    }
    handleClick(e) {
      const card = e.target.closest(".service-card");
      if (!card) return;
      card.classList.toggle("is-flipped");
    }
    destroy() {
      document.removeEventListener("click", this.boundHandleClick);
      this.isInitialized = false;
    }
  };

  // src/js/components/CaseStudyNavigation.js
  var CaseStudyNavigation = class {
    constructor() {
      this.wrapper = null;
      this.indicators = [];
      this.sections = [];
      this.lenis = null;
      this.boundUpdate = null;
    }
    init(lenis2) {
      this.lenis = lenis2;
      this.wrapper = document.querySelector(".case-study_section-indicator-wrapper");
      this.sections = document.querySelectorAll(".case-study_section[data-section-name]");
      if (!this.wrapper || this.sections.length === 0) return;
      this.wrapper.innerHTML = "";
      this.indicators = [];
      this.sections.forEach((section, idx) => {
        const sectionId = section.id || `section-${idx + 1}`;
        section.id = sectionId;
        const link = document.createElement("a");
        link.className = "case-study_section-indicator";
        link.href = `#${sectionId}`;
        link.setAttribute("tabindex", "0");
        link.title = section.getAttribute("data-section-name");
        const numSpan = document.createElement("span");
        numSpan.textContent = idx + 1;
        link.appendChild(numSpan);
        const nameDiv = document.createElement("div");
        nameDiv.className = "case-study-section-indicator-name";
        nameDiv.textContent = section.getAttribute("data-section-name");
        link.appendChild(nameDiv);
        this.wrapper.appendChild(link);
        this.indicators.push({ link, section });
        link.addEventListener("click", (e) => {
          e.preventDefault();
          if (this.lenis) {
            this.lenis.scrollTo(section, { offset: 0 });
          } else {
            section.scrollIntoView({ behavior: "smooth" });
          }
        });
      });
      this.boundUpdate = this.updateIndicator.bind(this);
      window.addEventListener("scroll", this.boundUpdate, { passive: true });
      window.addEventListener("resize", this.boundUpdate, { passive: true });
      this.updateIndicator();
    }
    updateIndicator() {
      if (!this.sections.length) return;
      const scrollMiddle = window.scrollY + window.innerHeight / 2;
      let activeIndex = -1;
      this.sections.forEach((section, idx) => {
        const rect = section.getBoundingClientRect();
        const top = window.scrollY + rect.top;
        const bottom = window.scrollY + rect.bottom;
        if (scrollMiddle >= top && scrollMiddle < bottom) {
          activeIndex = idx;
        }
      });
      if (this.sections.length > 0) {
        const firstTop = window.scrollY + this.sections[0].getBoundingClientRect().top;
        const lastBottom = window.scrollY + this.sections[this.sections.length - 1].getBoundingClientRect().bottom;
        if (scrollMiddle < firstTop || scrollMiddle >= lastBottom) {
          activeIndex = -1;
        }
      }
      this.indicators.forEach((item, idx) => {
        if (idx === activeIndex) {
          item.link.classList.add("case-study-indicator-active");
        } else {
          item.link.classList.remove("case-study-indicator-active");
        }
      });
    }
    destroy() {
      if (this.boundUpdate) {
        window.removeEventListener("scroll", this.boundUpdate);
        window.removeEventListener("resize", this.boundUpdate);
      }
      this.indicators = [];
      this.sections = [];
      this.wrapper = null;
      this.lenis = null;
    }
  };

  // src/js/components/TestimonialsSwiper.js
  var TestimonialsSwiper = class {
    constructor() {
      this.swiper = null;
    }
    init() {
      if (typeof Swiper === "undefined") {
        console.warn("Swiper not loaded via CDN");
        return;
      }
      if (this.swiper) {
        this.swiper.destroy(true, true);
      }
      this.swiper = new Swiper(".testimonials_swiper", {
        loop: true,
        centeredSlides: true,
        spaceBetween: 0,
        wrapperClass: "testimonials_swiper-wrapper",
        slideClass: "testimonials_swiper-slide",
        navigation: {
          nextEl: ".testimonials_swiper-button-next",
          prevEl: ".testimonials_swiper-button-prev"
        },
        speed: 1e3,
        breakpoints: {
          0: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 3
          },
          992: {
            slidesPerView: 3
          }
        },
        // Ensure it updates on window resize
        resizeObserver: true
      });
    }
    destroy() {
      if (this.swiper) {
        this.swiper.destroy(true, true);
        this.swiper = null;
      }
    }
  };

  // src/js/components/HeadingSplitText.js
  var HeadingSplitText = class {
    constructor() {
      this.instances = [];
    }
    init(container2 = document) {
      const selectors = [".is-split"];
      const elements = container2.querySelectorAll(selectors.join(", "));
      document.fonts.ready.then(() => {
        elements.forEach((el) => {
          if (el.dataset.splitTextInitialized) return;
          el.dataset.splitTextInitialized = "true";
          const split = new SplitText(el, { type: "words" });
          const anim = import_gsap_3_127.default.from(split.words, {
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              // Trigger when top of element is at 85% of viewport height
              once: true
            },
            duration: 1,
            y: 20,
            opacity: 0,
            stagger: 0.1,
            ease: "power3.out"
          });
          this.instances.push({ split, anim, el });
        });
        import_ScrollTrigger.default.refresh();
      });
    }
    destroy() {
      this.instances.forEach(({ split, anim, el }) => {
        if (anim && anim.scrollTrigger) anim.scrollTrigger.kill();
        if (anim) anim.kill();
        if (split) split.revert();
        if (el) delete el.dataset.splitTextInitialized;
      });
      this.instances = [];
    }
    static animateElement(element) {
      if (!element) return;
      const split = new SplitText(element, { type: "words" });
      import_gsap_3_127.default.from(split.words, {
        duration: 1,
        y: 20,
        opacity: 0,
        stagger: 0.1,
        ease: "power3.out"
        // No ScrollTrigger, run immediately
      });
    }
  };

  // src/js/components/StatsCounter.js
  var StatsCounter = class {
    constructor() {
      this.selector = ".stats8_number";
      this.tweens = [];
    }
    init(container2 = document) {
      const elements = container2.querySelectorAll(this.selector);
      elements.forEach((el) => {
        if (el.dataset.statsInitialized) return;
        el.dataset.statsInitialized = "true";
        const rawText = el.textContent.trim();
        const match = rawText.match(/^([\d,.]+)(.*)$/);
        if (!match) return;
        const originalNumberStr = match[1];
        const suffix = match[2] || "";
        const parsedValue = parseFloat(originalNumberStr.replace(/,/g, ""));
        if (isNaN(parsedValue)) return;
        el.textContent = "0" + suffix;
        const proxy = { value: 0 };
        const tween = import_gsap_3_127.default.to(proxy, {
          value: parsedValue,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            // Start when top of element hits 85% of viewport
            toggleActions: "play none none none"
            // Play once
          },
          onUpdate: () => {
            const val = proxy.value;
            let currentVal;
            if (originalNumberStr.includes(".")) {
              const decimals = originalNumberStr.split(".")[1].length;
              currentVal = val.toFixed(decimals);
            } else {
              currentVal = Math.floor(val).toLocaleString("en-US");
            }
            el.textContent = currentVal + suffix;
          },
          onComplete: () => {
            el.textContent = rawText;
          }
        });
        this.tweens.push(tween);
      });
    }
    destroy() {
      if (this.tweens) {
        this.tweens.forEach((t) => {
          if (t.scrollTrigger) t.scrollTrigger.kill();
          t.kill();
        });
      }
      this.tweens = [];
    }
  };

  // src/js/modules.js
  window.gsap = import_gsap_3_127.default;
  window.ScrollTrigger = import_ScrollTrigger.default;
  var SplitText = window.SplitText;
  if (SplitText) {
    import_gsap_3_127.default.registerPlugin(import_ScrollTrigger.default, SplitText);
  } else {
    console.warn("SplitText not found! Check script loading.");
  }

  // src/js/main.js
  var barba = window.barba;
  var container = document.getElementById("webgl");
  var gradientEl = document.getElementById("webgl-gradient");
  var clock = new THREE4.Clock();
  var stats = new stats_module_default();
  var isDesktop = window.innerWidth >= Config.System.desktopBreakpoint;
  var isHome = false;
  var mountainEl = null;
  var lastWindowWidth = window.innerWidth;
  var mountainVisible = false;
  var lastMountainVisible = false;
  var transitionGlobalFade = false;
  var isTransitioning = false;
  var siteEntered = false;
  var currentScrollY = window.scrollY;
  var virtualScrollY = 0;
  var globalScrollOffset = 0;
  var lastRawScrollY = 0;
  initDisposables();
  initObserverHub();
  initBadgeRemover();
  initPageTitleChanger();
  var qualityManager = new QualityManager();
  var perfMonitor = new PerformanceMonitor(qualityManager);
  var lenis = new import_lenis.default({
    lerp: 0.05,
    smoothWheel: true
  });
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  window.scrollTo(0, 0);
  lenis.scrollTo(0, { immediate: true });
  lenis.stop();
  initPageVisibility(lenis);
  stats.showPanel(0);
  stats.dom.style.position = "fixed";
  stats.dom.style.left = "8px";
  stats.dom.style.top = "8px";
  stats.dom.style.zIndex = "2000";
  stats.dom.style.display = "none";
  document.body.appendChild(stats.dom);
  document.addEventListener("keydown", (e) => {
    if (e.shiftKey && (e.key === "D" || e.key === "d")) {
      stats.dom.style.display = stats.dom.style.display === "none" ? "block" : "none";
    }
  });
  var renderer = new THREE4.WebGLRenderer({
    antialias: window.devicePixelRatio < 2,
    powerPreference: "high-performance",
    alpha: !isDesktop
    // Alpha true on mobile for video background
  });
  renderer.outputColorSpace = THREE4.SRGBColorSpace;
  renderer.setScissorTest(false);
  container.appendChild(renderer.domElement);
  var videoLoader = new VideoLoader();
  var videoAssets = [
    {
      id: "showreel",
      src: "https://bunqlabs.github.io/bunq-labs-website-dec2025/assets/video/showreel-v2.mp4"
    }
  ];
  videoAssets.push({
    id: "website-bg",
    src: "https://bunqlabs.github.io/bunq-labs-website-dec2025/assets/video/website-bg.mp4"
  });
  videoLoader.load(videoAssets);
  var mountainScene;
  var grassScene;
  var scrollBender = new ScrollBender();
  var audioManager = new AudioManager();
  var clientLogoCycler = new ClientLogoCycler();
  var acceleratingGlobe = new AcceleratingGlobe();
  var flickCards = new FlickCards();
  var navigation = new Navigation();
  var serviceCards = new ServiceCards();
  var textScrambler = new TextScrambler();
  var caseStudyNavigation = new CaseStudyNavigation();
  var testimonialsSwiper = new TestimonialsSwiper();
  var headingSplitText = new HeadingSplitText();
  var statsCounter = new StatsCounter();
  if (isDesktop) {
    renderer.setSize(container.clientWidth, container.clientHeight);
    if (mountainScene)
      mountainScene.resize(container.clientWidth, container.clientHeight);
    if (grassScene)
      grassScene.resize(container.clientWidth, container.clientHeight);
  } else {
    renderer.setSize(container.clientWidth, container.clientHeight);
    if (mountainScene)
      mountainScene.resize(container.clientWidth, container.clientHeight);
  }
  textScrambler.init();
  var mountainConfig = { top: 0, height: 0, left: 0, width: 0 };
  function calcMountainConfig() {
    if (!mountainEl) {
      mountainConfig.height = 0;
      return;
    }
    const rect = mountainEl.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    mountainConfig.top = rect.top + scrollTop;
    mountainConfig.left = rect.left;
    mountainConfig.width = rect.width;
    mountainConfig.height = rect.height;
    mountainConfig.bottom = mountainConfig.top + rect.height;
  }
  var mountainObserver = new ResizeObserver(() => {
    calcMountainConfig();
  });
  function updateRouteState(namespace, container2) {
    console.log("[Route] Updating state for:", namespace);
    if (namespace === "home") {
      isHome = true;
      mountainEl = container2 ? container2.querySelector("#mountain-hero") : document.getElementById("mountain-hero");
      if (mountainEl) {
        console.log("[Route] Mountain Element found, mounting scene.");
        if (isDesktop && mountainScene) {
          mountainScene.mount();
          mountainObserver.observe(mountainEl);
        }
        calcMountainConfig();
        renderer.toneMapping = THREE4.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1;
        mountainVisible = true;
      }
      if (isDesktop && grassScene) {
        grassScene.mount();
      }
    } else {
      isHome = false;
      if (mountainEl) {
        mountainObserver.unobserve(mountainEl);
      }
      mountainEl = null;
      if (isDesktop) {
        if (mountainScene) mountainScene.unmount();
        renderer.toneMapping = THREE4.NoToneMapping;
        renderer.setScissorTest(false);
        if (grassScene) grassScene.mount();
      }
    }
  }
  function updateVirtualScroll() {
    const raw = lenis.scroll;
    virtualScrollY = globalScrollOffset + raw;
    currentScrollY = raw;
    lastRawScrollY = raw;
  }
  function onResize() {
    if (Math.abs(window.innerWidth - lastWindowWidth) < 2) return;
    lastWindowWidth = window.innerWidth;
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (isDesktop) {
      renderer.setSize(w, h);
      if (mountainScene) mountainScene.resize(w, h);
      if (grassScene) grassScene.resize(w, h);
    } else {
      renderer.setSize(w, h);
      if (mountainScene) mountainScene.resize(w, h);
    }
    scrollBender.resize();
    calcMountainConfig();
    const newIsDesktop = window.innerWidth >= Config.System.desktopBreakpoint;
    if (newIsDesktop !== isDesktop) {
      console.log("[Resize] Breakpoint crossed. Reloading...");
      window.location.reload();
    }
  }
  window.addEventListener("resize", onResize, { passive: true });
  document.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link && link.href) {
      if (link.href === window.location.href) {
        console.log("[Nav] Blocked reload on same link");
        e.preventDefault();
        e.stopPropagation();
        return;
      }
    }
  });
  document.addEventListener("click", (e) => {
    if (e.target && e.target.id === "audio-toggle") {
      audioManager.toggleMute();
    }
  });
  if (barba) {
    barba.init({
      debug: false,
      prevent: ({ el }) => {
        if (el && el.href && el.href === window.location.href) {
          return true;
        }
      },
      transitions: [
        {
          name: "fade",
          sync: false,
          // Ensure strictly sequential (Leave -> Remove -> Enter)
          leave(data) {
            document.body.classList.add("is-transitioning");
            window.cleanupOnLeave();
            globalScrollOffset = virtualScrollY;
            clientLogoCycler.destroy();
            acceleratingGlobe.destroy();
            flickCards.destroy();
            serviceCards.destroy();
            caseStudyNavigation.destroy();
            testimonialsSwiper.destroy();
            statsCounter.destroy();
            headingSplitText.destroy();
            return new Promise((resolve) => {
              try {
                let nextNs = data.next.namespace;
                if (!nextNs && data.next.url) {
                  const path = data.next.url.path || data.next.url.href;
                  if (path === "/" || path.endsWith("index.html") || path.endsWith("/")) {
                    nextNs = "home";
                  }
                }
                const goingToMountain = nextNs === "home";
                const comingFromMountain = mountainVisible;
                transitionGlobalFade = goingToMountain || comingFromMountain;
                const wrapper = document.querySelector(".main-wrapper");
                if (wrapper) wrapper.style.opacity = "0";
                if (transitionGlobalFade) {
                  const webgl = document.getElementById("webgl");
                  if (webgl) webgl.style.opacity = "0";
                }
                setTimeout(() => {
                  resolve();
                }, 1e3);
              } catch (err) {
                console.error(err);
                resolve();
              }
            });
          },
          beforeEnter(data) {
          },
          enter(data) {
            return new Promise((resolve) => {
              try {
                isTransitioning = true;
                lenis.scrollTo(0, { immediate: true });
                lastRawScrollY = 0;
                currentScrollY = 0;
                const ns = data.next.namespace || data.next.container && data.next.container.dataset.namespace;
                updateRouteState(ns, data.next.container);
                const delay = ns === "home" ? 2e3 : 1e3;
                const wrapper = document.querySelector(".main-wrapper");
                if (data.current.container && data.current.container.parentNode) {
                  data.current.container.parentNode.removeChild(
                    data.current.container
                  );
                }
                if (transitionGlobalFade) {
                }
                try {
                  headingSplitText.init(data.next.container);
                } catch (e) {
                  console.warn("[Transition] SplitText init failed", e);
                }
                setTimeout(() => {
                  if (wrapper) wrapper.style.opacity = "1";
                  if (transitionGlobalFade) {
                    const webgl = document.getElementById("webgl");
                    if (webgl) webgl.style.opacity = "1";
                  }
                  setTimeout(() => {
                    resolve();
                  }, 1e3);
                }, delay);
              } catch (err) {
                console.error(err);
                resolve();
              }
            });
          },
          after(data) {
            document.body.classList.remove("is-transitioning");
            isTransitioning = false;
            calcMountainConfig();
            scrollBender.resize();
            clientLogoCycler.init();
            acceleratingGlobe.init();
            flickCards.init();
            serviceCards.init();
            textScrambler.init();
            caseStudyNavigation.init(lenis);
            caseStudyNavigation.init(lenis);
            caseStudyNavigation.init(lenis);
            caseStudyNavigation.init(lenis);
            testimonialsSwiper.init();
            statsCounter.init();
          }
        }
      ]
    });
  }
  var initialWrapper = document.querySelector(".main-wrapper");
  if (initialWrapper) {
    initialWrapper.style.opacity = "1";
  }
  var initialWebgl = document.getElementById("webgl");
  if (initialWebgl) {
    initialWebgl.style.opacity = "1";
  }
  var initialCanvasContainer = document.getElementById("canvas-container");
  if (initialCanvasContainer) {
    import_gsap_3_127.default.set(initialCanvasContainer, { opacity: 1 });
  }
  var initialContainer = document.querySelector('[data-barba="container"]');
  var initialNs = initialContainer.dataset.namespace;
  updateRouteState(initialNs, initialContainer);
  clientLogoCycler.init();
  acceleratingGlobe.init();
  flickCards.init();
  serviceCards.init();
  textScrambler.init();
  caseStudyNavigation.init(lenis);
  testimonialsSwiper.init();
  headingSplitText.init();
  statsCounter.init();
  function animate(time) {
    perfMonitor.beginFrame();
    lenis.raf(time);
    stats.begin();
    requestAnimationFrame(animate);
    const t = time * 1e-3;
    const dt = clock.getDelta();
    updateVirtualScroll();
    renderer.setViewport(0, 0, container.clientWidth, container.clientHeight);
    renderer.setScissorTest(false);
    if (mountainScene) mountainScene.updateScroll(currentScrollY);
    mountainVisible = false;
    if (isTransitioning) {
      if (isHome) {
        mountainVisible = true;
      }
    } else if (isHome) {
      if (mountainEl && mountainConfig.height === 0) {
        mountainVisible = true;
      } else if (mountainEl) {
        const elTop = mountainConfig.top - currentScrollY;
        if (elTop + mountainConfig.height > 0 && elTop < window.innerHeight) {
          mountainVisible = true;
        }
      }
    }
    if (mountainVisible !== lastMountainVisible) {
      if (mountainVisible && siteEntered) {
        if (mountainScene) mountainScene.playVideo();
      } else {
        if (mountainScene) mountainScene.pauseVideo();
      }
      lastMountainVisible = mountainVisible;
    }
    if (isDesktop) {
      if (mountainVisible) {
        if (mountainScene) {
          mountainScene.update(t, dt);
          mountainScene.render();
          if (window.innerWidth >= Config.System.desktopBreakpoint && grassScene) {
            grassScene.updateScrollState(virtualScrollY);
          }
        }
      } else {
        if (window.innerWidth >= Config.System.desktopBreakpoint && grassScene) {
          grassScene.updateScrollState(virtualScrollY);
          grassScene.update(t, dt);
          grassScene.render();
        }
      }
    } else {
      if (mountainVisible && mountainScene) {
        mountainScene.update(t, dt);
        mountainScene.render();
      } else {
        renderer.clear();
      }
    }
    scrollBender.update(currentScrollY);
    if (gradientEl) {
      if (isHome) {
        const h = window.innerHeight;
        const opacity = Math.min(1, Math.max(0, currentScrollY / h));
        gradientEl.style.opacity = opacity;
      } else {
        gradientEl.style.opacity = 1;
      }
    }
    stats.end();
    perfMonitor.endFrame();
  }
  requestAnimationFrame(animate);
  var initialLoader = document.querySelector(".global-loader");
  var loaderBtn = document.getElementById("loader-button");
  var loaderBtnMute = document.getElementById("loader-button-mute");
  if (initialLoader && loaderBtn) {
    let onReady = function() {
      const showreelVideo = videoLoader.getVideo("showreel");
      const bgVideo = videoLoader.getVideo("website-bg");
      if (isDesktop) {
        mountainScene = new MountainScene(
          renderer,
          qualityManager,
          showreelVideo
        );
        grassScene = new GrassScene(renderer, qualityManager);
      } else {
        mountainScene = new MountainScene(
          renderer,
          qualityManager,
          showreelVideo
        );
        if (bgVideo && container) {
          bgVideo.id = "mobile-bg-video";
          bgVideo.className = "bg-video-mobile";
          container.appendChild(bgVideo);
          bgVideo.play().catch((e) => console.log("Mobile BG Autoplay fail", e));
        }
      }
      onResize();
      const currentContainer = document.querySelector('[data-barba="container"]');
      if (currentContainer) {
        const ns = currentContainer.dataset.namespace;
        updateRouteState(ns, currentContainer);
      }
      loaderBtn.textContent = "Calibrating...";
      perfMonitor.startBenchmark();
      setTimeout(() => {
        perfMonitor.endBenchmark();
        clearInterval(dotInterval);
        loaderBtn.textContent = "Click to Enter";
        loaderBtn.classList.remove("is-secondary");
        if (loaderBtnMute) {
          loaderBtnMute.style.display = "block";
        }
        loaderBtn.addEventListener(
          "click",
          () => {
            audioManager.unlock();
            enterSite();
          },
          { once: true }
        );
        if (loaderBtnMute) {
          loaderBtnMute.addEventListener(
            "click",
            () => {
              console.log("Entering without audio context");
              audioManager.setMute(true);
              enterSite();
            },
            { once: true }
          );
        }
      }, 800);
    }, enterSite = function() {
      siteEntered = true;
      if (mountainScene) {
        mountainScene.animateEntry();
        mountainScene.playVideo();
      }
      lenis.start();
      import_gsap_3_127.default.to(initialLoader, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.5
      });
    };
    let dots = 0;
    const dotInterval = setInterval(() => {
      dots = (dots + 1) % 4;
      loaderBtn.textContent = "Loading" + ".".repeat(dots);
    }, 1e3);
    videoLoader.onProgress = (progress) => {
    };
    videoLoader.onComplete = () => {
      onReady();
    };
  }
})();


// === INLINE SCRIPTS ===

// --- faq-accordion ---
(function() {
document.addEventListener('DOMContentLoaded', () => {
  const rows = Array.from(document.querySelectorAll('.faq1_accordion'));
  const DEBUG = false;
  const log = (...a) => DEBUG && console.log('[FAQ]', ...a);
  const warn = (...a) => DEBUG && console.warn('[FAQ]', ...a);
  // --- Utilities ---
  const getAnswer = (row) => row.querySelector('.faq1_answer');
  const getToggle = (row) => row.querySelector('.faq1_question');
  // Ensure all are closed by default (even if HTML had .is-open)
  rows.forEach((row) => {
    const body = getAnswer(row);
    if (!body) return;
    row.classList.remove('is-open');
    row.setAttribute('aria-expanded', 'false');
    body.style.height = '0px';
  });
  // --- Open/Close with smooth height transition ---
  function closeRow(row) {
    const body = getAnswer(row);
    if (!body) return;
    // If it's already 0 or not open, nothing to do
    if (
      !row.classList.contains('is-open') &&
      (body.style.height === '0px' || body.offsetHeight === 0)
    )
      return;
    // If height is 'auto', lock current pixel height first to animate down
    if (
      getComputedStyle(body).height === 'auto' ||
      body.style.height === 'auto'
    ) {
      body.style.height = body.scrollHeight + 'px';
      body.getBoundingClientRect(); // reflow
    }
    body.style.height = '0px';
    row.classList.remove('is-open');
    row.setAttribute('aria-expanded', 'false');
    log('Closed', row);
  }
  function openRow(row) {
    const body = getAnswer(row);
    if (!body) return;
    // Start from current computed height (could be 0 or a number) then expand to scrollHeight
    const targetH = body.scrollHeight;
    body.style.height = targetH + 'px';
    row.classList.add('is-open');
    row.setAttribute('aria-expanded', 'true');
    log('Opened to', targetH, row);
  }
  function closeOthers(except) {
    rows.forEach((r) => {
      if (r !== except) closeRow(r);
    });
  }
  // After height transition completes, set to auto so dynamic content isn't clipped
  rows.forEach((row) => {
    const body = getAnswer(row);
    if (!body) return;
    body.addEventListener('transitionend', (ev) => {
      if (ev.propertyName !== 'height') return;
      if (row.classList.contains('is-open')) {
        body.style.height = 'auto';
      }
    });
  });
  // Keep open items sized correctly on resize (if any are open)
  window.addEventListener('resize', () => {
    document
      .querySelectorAll('.faq1_accordion.is-open .faq1_answer')
      .forEach((body) => {
        body.style.height = 'auto';
        const h = body.scrollHeight;
        body.style.height = h + 'px';
      });
  });
  // --- Exact match finder for Module by data-section ---
  function findExactTarget(sectionValue) {
    const modules = Array.from(document.getElementsByClassName('module'));
    return modules.find(
      (el) => el.getAttribute('data-section') === sectionValue,
    );
  }
  // --- Scrolling helper ---
  function scrollToEl(el, offset = 0) {
    const rect = el.getBoundingClientRect();
    const top = rect.top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
  // --- Open by section value (optionally without scrolling) ---
  function openAccordionBySection(
    sectionValue,
    { scroll = true, fromObserver = false } = {},
  ) {
    const row = rows.find(
      (r) => r.getAttribute('data-section') === sectionValue,
    );
    if (!row) return;
    if (!row.classList.contains('is-open')) {
      closeOthers(row);
      openRow(row);
    }
    if (scroll) {
      // pause observer reactions briefly to avoid feedback loops
      pauseObserver(700);
      const target = findExactTarget(sectionValue);
      if (target) {
        const FIXED_HEADER_OFFSET = 0; // adjust for sticky header height
        scrollToEl(target, FIXED_HEADER_OFFSET);
        target.setAttribute('tabindex', '-1');
        try {
          target.focus({ preventScroll: true });
        } catch {}
      }
    }
  }
  // --- Click wiring for toggles ---
  rows.forEach((row) => {
    const toggle = getToggle(row);
    const body = getAnswer(row);
    if (!toggle || !body) return;
    // A11y
    toggle.setAttribute('role', 'button');
    toggle.setAttribute('tabindex', toggle.getAttribute('tabindex') || '0');
    row.setAttribute('aria-expanded', 'false');
    // Click to open/close + scroll to matching .Module
    toggle.addEventListener('click', () => {
      const isOpen = row.classList.contains('is-open');
      if (isOpen) {
        closeRow(row);
      } else {
        closeOthers(row);
        openRow(row);
        const section = row.getAttribute('data-section');
        if (section != null) {
          pauseObserver(700);
          const target = findExactTarget(section);
          if (target) {
            const FIXED_HEADER_OFFSET = 0;
            scrollToEl(target, FIXED_HEADER_OFFSET);
            target.setAttribute('tabindex', '-1');
            try {
              target.focus({ preventScroll: true });
            } catch {}
          } else {
            warn('No .module found for section:', section);
          }
        }
      }
    });
    // Keyboard (Enter/Space)
    toggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle.click();
      }
    });
  });
  // --- IntersectionObserver: auto-open accordion for section in viewport ---
  let observerPausedUntil = 0;
  function pauseObserver(ms = 600) {
    observerPausedUntil = Date.now() + ms;
  }
  function isObserverPaused() {
    return Date.now() < observerPausedUntil;
  }
  function setupSectionObserver() {
    const modules = Array.from(document.getElementsByClassName('module'));
    if (!modules.length) {
      log('No .Module sections to observe.');
      return;
    }
    // Trigger when ~60% of a section is visible. Adjust as needed.
    const io = new IntersectionObserver(
      (entries) => {
        if (isObserverPaused()) return;
        // Find the most visible intersecting section
        let best = null;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (!best || entry.intersectionRatio > best.intersectionRatio) {
            best = entry;
          }
        }
        if (!best) return;
        const sectionValue = best.target.getAttribute('data-section');
        if (!sectionValue) return;
        // Open the matching accordion without scrolling (observer-driven)
        openAccordionBySection(sectionValue, {
          scroll: false,
          fromObserver: true,
        });
      },
      {
        root: null,
        threshold: [0.3, 0.6, 0.9], // multiple thresholds; we'll pick the highest visible one
        rootMargin: '0px 0px -20% 0px', // bias toward opening a bit before full center
      },
    );
    modules.forEach((m) => io.observe(m));
  }
  setupSectionObserver();
});

})();

// --- pointer-scrambler ---
(function() {
window.addEventListener('load', () => {
  if (!window.gsap || !window.ScrambleTextPlugin) {
    console.error('GSAP or ScrambleTextPlugin not loaded');
    return;
  }
  gsap.registerPlugin(ScrambleTextPlugin);
  /* -------- pointer scrambler (single attribute + mouse-follow) -------- */
  const CHARS = '!%#?*+-$=<>';
  const DUR_IN = 0.35;
  const DUR_OUT = 0.22;
  const FOLLOW_EASE = 0.4;
  const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pointer = document.querySelector('.pointer');
  if (!pointer) {
    console.warn('pointer scrambler: .pointer not found');
    return;
  }
  const label = pointer.querySelector('.pointer-text');
  if (!label) {
    console.warn('pointer scrambler: .pointer .pointer-text not found');
    return;
  }
  let tx = innerWidth * 0.5,
    ty = innerHeight * 0.5;
  let x = tx,
    y = ty;
  let offX = 0,
    offY = 0;
  function measure() {
    const b = pointer.getBoundingClientRect();
    offX = b.width * 0.5;
    offY = b.height * 0.5;
  }
  measure();
  addEventListener('resize', measure, { passive: true });
  if ('ResizeObserver' in window) new ResizeObserver(measure).observe(pointer);
  function onMove(e) {
    const p = e.touches ? e.touches[0] : e;
    tx = p.clientX;
    ty = p.clientY;
  }
  addEventListener('pointermove', onMove, { passive: true });
  addEventListener('touchstart', onMove, { passive: true });
  addEventListener('touchmove', onMove, { passive: true });
  (function raf() {
    const ease = prefersReduced ? 1 : FOLLOW_EASE;
    x += (tx - x) * ease;
    y += (ty - y) * ease;
    pointer.style.transform = `translate(${x - offX}px, ${y - offY}px)`;
    requestAnimationFrame(raf);
  })();
  function scrambleTo(text, dur) {
    gsap.killTweensOf(label);
    gsap.to(label, {
      duration: prefersReduced ? 0 : dur,
      scrambleText: {
        text,
        chars: CHARS,
        speed: 4,
        revealDelay: 0,
        tweenLength: false,
      },
      ease: 'none',
    });
  }
  const hasAttr = (node) => node?.closest('[pointer-scramble-text]');
  let activeTarget = null;
  label.textContent = '';
  label.__currentText = '';
  document.addEventListener(
    'pointerover',
    (e) => {
      const nextTarget = hasAttr(e.target);
      if (nextTarget === activeTarget) return;
      if (nextTarget) {
        const nextText = nextTarget.getAttribute('pointer-scramble-text') || '';
        if (nextText !== label.__currentText) {
          scrambleTo(nextText, DUR_IN);
          label.__currentText = nextText;
        }
        activeTarget = nextTarget;
      } else if (activeTarget) {
        scrambleTo('', DUR_OUT);
        label.__currentText = '';
        activeTarget = null;
      }
    },
    true,
  );
  document.addEventListener(
    'pointerout',
    (e) => {
      const fromTarget = hasAttr(e.target);
      if (!fromTarget) return;
      const into = e.relatedTarget || null;
      const nextTarget = hasAttr(into);
      if (nextTarget) {
        const nextText = nextTarget.getAttribute('pointer-scramble-text') || '';
        if (nextText !== label.__currentText) {
          scrambleTo(nextText, DUR_IN);
          label.__currentText = nextText;
        }
        activeTarget = nextTarget;
      } else {
        scrambleTo('', DUR_OUT);
        label.__currentText = '';
        activeTarget = null;
      }
    },
    true,
  );
  addEventListener('mouseleave', () => {
    if (label.__currentText) {
      scrambleTo('', DUR_OUT);
      label.__currentText = '';
      activeTarget = null;
    }
  });
});

})();

// --- nav-toggle ---
(function() {
document.addEventListener('click', (e) => {
  const nav = document.querySelector('.navigation');
  if (!nav) return;
  // any click on a link inside the hamburger menu
  const link = e.target.closest('.hamburger-nav__a[href]');
  if (!link) return;
  nav.setAttribute('data-navigation-status', 'not-active');
});
// make sure that nav is always closed, no opened states between barba transitions
function closeMobileNav() {
  const nav = document.querySelector('.navigation');
  if (nav) nav.setAttribute('data-navigation-status', 'not-active');
}
document.addEventListener('click', (e) => {
  const link = e.target.closest('.hamburger-nav__a[href]');
  if (link) closeMobileNav();
});
// If barba is present, close on navigation start too
if (window.barba) {
  window.barba.hooks.beforeLeave(() => closeMobileNav());
  window.barba.hooks.beforeEnter(() => closeMobileNav());
}

})();

// --- custom-cursor ---
(function() {
function initDynamicCustomTextCursor() {
  let cursorItem = document.querySelector('.cursor');
  let cursorParagraph = cursorItem.querySelector('p');
  let targets = document.querySelectorAll('[data-cursor]');
  let xOffset = 6;
  let yOffset = 140;
  let cursorIsOnRight = false;
  let currentTarget = null;
  let lastText = '';
  // Position cursor relative to actual cursor position on page load
  gsap.set(cursorItem, { xPercent: xOffset, yPercent: yOffset });
  // Use GSAP quick.to for a more performative tween on the cursor
  let xTo = gsap.quickTo(cursorItem, 'x', { ease: 'power3' });
  let yTo = gsap.quickTo(cursorItem, 'y', { ease: 'power3' });
  // Function to get the width of the cursor element including a buffer
  const getCursorEdgeThreshold = () => {
    return cursorItem.offsetWidth + 16; // Cursor width + 16px margin
  };
  // On mousemove, call the quickTo functions to the actual cursor position
  window.addEventListener('mousemove', (e) => {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let scrollY = window.scrollY;
    let cursorX = e.clientX;
    let cursorY = e.clientY + scrollY; // Adjust cursorY to account for scroll
    // Default offsets
    let xPercent = xOffset;
    let yPercent = yOffset;
    // Adjust X offset dynamically based on cursor width
    let cursorEdgeThreshold = getCursorEdgeThreshold();
    if (cursorX > windowWidth - cursorEdgeThreshold) {
      cursorIsOnRight = true;
      xPercent = -100;
    } else {
      cursorIsOnRight = false;
    }
    // Adjust Y offset if in the bottom 10% of the current viewport
    if (cursorY > scrollY + windowHeight * 0.9) {
      yPercent = -120;
    }
    if (currentTarget) {
      let newText = currentTarget.getAttribute('data-cursor');
      if (newText !== lastText) {
        // Only update if the text is different
        cursorParagraph.innerHTML = newText;
        lastText = newText;
        // Recalculate edge awareness whenever the text changes
        cursorEdgeThreshold = getCursorEdgeThreshold();
      }
    }
    gsap.to(cursorItem, {
      xPercent: xPercent,
      yPercent: yPercent,
      duration: 0.9,
      ease: 'power3',
    });
    xTo(cursorX);
    yTo(cursorY - scrollY);
  });
  // Add a mouse enter listener for each link that has a data-cursor attribute
  targets.forEach((target) => {
    target.addEventListener('mouseenter', () => {
      currentTarget = target; // Set the current target
      let newText = target.getAttribute('data-cursor');
      // Update only if the text changes
      if (newText !== lastText) {
        cursorParagraph.innerHTML = newText;
        lastText = newText;
        // Recalculate edge awareness whenever the text changes
        let cursorEdgeThreshold = getCursorEdgeThreshold();
      }
    });
  });
}
// Initialize Dynamic Text Cursor (Edge Aware)
document.addEventListener('DOMContentLoaded', () => {
  initDynamicCustomTextCursor();
});

})();
