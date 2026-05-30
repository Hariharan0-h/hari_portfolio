/* app.jsx — composes sections, applies theme tweaks, wires motion. */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "direction": "green",
  "accent": "auto",
  "fonts": "plex",
  "motion": "moderate",
  "density": "regular",
  "scanlines": false
}/*EDITMODE-END*/;

/* accent presets → [hex, "r,g,b", ink] */
const ACCENTS = {
  auto:   null,
  green:  ["#27e08a", "39,224,138", "#04130c"],
  cyan:   ["#38d6ff", "56,214,255", "#021318"],
  amber:  ["#ffb23e", "255,178,62", "#1a1206"],
  violet: ["#a78bff", "167,139,255", "#0c0716"],
  white:  ["#f3f4f6", "240,242,245", "#0a0a0b"],
};
const FONTS = {
  plex:      ["'IBM Plex Mono',ui-monospace,monospace", "'IBM Plex Sans',system-ui,sans-serif"],
  jetbrains: ["'JetBrains Mono',ui-monospace,monospace", "'IBM Plex Sans',system-ui,sans-serif"],
  space:     ["'Space Mono',ui-monospace,monospace", "'Space Grotesk',system-ui,sans-serif"],
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  /* apply theme / accent / fonts / density / motion to the root */
  React.useEffect(() => {
    const r = document.documentElement, b = document.body;
    /* suppress transitions during the swap so color changes apply instantly and
       can't get frozen mid-transition in a throttled/background frame */
    r.classList.add("no-trans");
    r.dataset.theme = t.direction;
    r.dataset.density = t.density;
    r.dataset.motion = t.motion;
    b.dataset.scanlines = t.scanlines ? "1" : "0";

    const a = ACCENTS[t.accent];
    if (a) {
      r.style.setProperty("--accent", a[0]);
      r.style.setProperty("--accent-glow", a[1]);
      r.style.setProperty("--accent-ink", a[2]);
    } else {
      r.style.removeProperty("--accent");
      r.style.removeProperty("--accent-glow");
      r.style.removeProperty("--accent-ink");
    }
    const f = FONTS[t.fonts] || FONTS.plex;
    r.style.setProperty("--font-mono", f[0]);
    r.style.setProperty("--font-sans", f[1]);
    void r.offsetWidth;
    const tid = setTimeout(() => r.classList.remove("no-trans"), 60);
    return () => clearTimeout(tid);
  }, [t]);

  /* scroll reveals + count-up + nav stuck — rect/scroll based (IntersectionObserver
     does not fire reliably in some embedded preview frames, so we poll on scroll). */
  React.useEffect(() => {
    const motion = document.documentElement.dataset.motion;
    const startCount = (el) => {
      el.dataset.done = "1";
      const to = parseFloat(el.dataset.to), dec = parseInt(el.dataset.dec || "0", 10);
      if (motion === "minimal") { el.textContent = dec ? to.toFixed(dec) : to.toLocaleString(); return; }
      const dur = 1400, t0 = performance.now(), ease = (x) => 1 - Math.pow(1 - x, 3);
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / dur), v = to * ease(p);
        el.textContent = dec ? v.toFixed(dec) : Math.round(v).toLocaleString();
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = dec ? to.toFixed(dec) : to.toLocaleString();
      };
      requestAnimationFrame(tick);
    };
    /* Force the final visible state without relying on a transition actually
       playing — CSS transitions are paused in throttled/background frames, which
       would otherwise leave .vis elements frozen at opacity 0. Restores the
       stylesheet transition afterwards so hover effects still animate. */
    const lock = (el) => {
      const kids = el.classList.contains("stagger") ? el.querySelectorAll(":scope > *") : [el];
      kids.forEach((n) => { n.style.transition = "none"; n.style.opacity = "1"; n.style.transform = "none"; });
      void el.offsetWidth;
      kids.forEach((n) => { n.style.transition = ""; n.style.transform = ""; });
    };
    const check = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      document.querySelectorAll(".reveal:not(.vis),.stagger:not(.vis)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > -40) { el.classList.add("vis"); setTimeout(() => lock(el), 780); }
      });
      document.querySelectorAll(".count:not([data-done])").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.85 && r.bottom > 0) startCount(el);
      });
    };
    const nav = document.getElementById("nav");
    const onScroll = () => { check(); if (nav) nav.dataset.stuck = window.scrollY > 12 ? "1" : "0"; };
    check();
    requestAnimationFrame(check);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", check);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(check);
    /* safety net: never leave content hidden if scroll never happens */
    const safety = setTimeout(() => document.querySelectorAll(".reveal,.stagger").forEach((e) => { e.classList.add("vis"); lock(e); }), 2400);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", check); clearTimeout(safety); };
  }, []);

  return (
    <div className="app">
      <Nav />
      <Hero />
      <main>
        <Impact />
        <Experience />
        <Projects />
        <Skills />
        <Cred />
        <Contact />
      </main>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Direction" />
        <TweakRadio label="Aesthetic" value={t.direction}
          options={[{ value: "green", label: "Green" }, { value: "slate", label: "Mono" }, { value: "amber", label: "Amber" }]}
          onChange={(v) => setTweak("direction", v)} />
        <TweakColor label="Accent" value={matchAccentSwatch(t.accent)}
          options={["auto", "green", "cyan", "amber", "violet", "white"].map(matchAccentSwatch)}
          onChange={(v) => setTweak("accent", swatchToKey(v))} />

        <TweakSection label="Typography" />
        <TweakSelect label="Font pairing" value={t.fonts}
          options={[{ value: "plex", label: "IBM Plex Mono / Sans" }, { value: "jetbrains", label: "JetBrains Mono / Plex" }, { value: "space", label: "Space Mono / Grotesk" }]}
          onChange={(v) => setTweak("fonts", v)} />

        <TweakSection label="Layout & Motion" />
        <TweakRadio label="Density" value={t.density}
          options={["compact", "regular", "comfy"]}
          onChange={(v) => setTweak("density", v)} />
        <TweakRadio label="Motion" value={t.motion}
          options={[{ value: "minimal", label: "Min" }, { value: "moderate", label: "Med" }, { value: "expressive", label: "Max" }]}
          onChange={(v) => setTweak("motion", v)} />
        <TweakToggle label="CRT scanlines" value={t.scanlines}
          onChange={(v) => setTweak("scanlines", v)} />
      </TweaksPanel>
    </div>
  );
}

/* map accent key → hex swatch for the color control (auto shown as theme accent) */
function matchAccentSwatch(key) {
  const map = { auto: "#7d8590", green: "#27e08a", cyan: "#38d6ff", amber: "#ffb23e", violet: "#a78bff", white: "#f3f4f6" };
  return map[key];
}
const SWATCH_TO_KEY = { "#7d8590": "auto", "#27e08a": "green", "#38d6ff": "cyan", "#ffb23e": "amber", "#a78bff": "violet", "#f3f4f6": "white" };
function swatchToKey(hex) { return SWATCH_TO_KEY[String(hex).toLowerCase()] || "auto"; }

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
