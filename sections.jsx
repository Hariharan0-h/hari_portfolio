/* sections.jsx — Hariharan portfolio · content + section components
   Exports components to window for app.jsx to compose. */

/* ---------- icons ---------- */
const I = {
  github: (p) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 1.5A10.5 10.5 0 0 0 8.68 22c.53.1.72-.23.72-.5v-1.8c-2.92.63-3.54-1.4-3.54-1.4-.48-1.22-1.17-1.55-1.17-1.55-.96-.65.07-.64.07-.64 1.06.08 1.62 1.09 1.62 1.09.94 1.62 2.47 1.15 3.07.88.1-.68.37-1.15.67-1.42-2.33-.27-4.78-1.17-4.78-5.2 0-1.15.41-2.09 1.08-2.83-.11-.27-.47-1.34.1-2.8 0 0 .88-.28 2.88 1.08a9.9 9.9 0 0 1 5.24 0c2-1.36 2.88-1.08 2.88-1.08.57 1.46.21 2.53.1 2.8.67.74 1.08 1.68 1.08 2.83 0 4.04-2.46 4.93-4.8 5.19.38.33.71.97.71 1.96v2.9c0 .28.19.61.73.5A10.5 10.5 0 0 0 12 1.5Z"/></svg>),
  linkedin: (p) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M4.98 3.5A2.5 2.5 0 1 1 2.5 6 2.5 2.5 0 0 1 4.98 3.5ZM3 8.5h4v12H3v-12Zm6.5 0h3.83v1.64h.05A4.2 4.2 0 0 1 17.2 8.2c4.1 0 4.86 2.7 4.86 6.2v6.1h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.5h-4v-12Z"/></svg>),
  mail: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>),
  phone: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L16 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>),
  arrow: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" {...p}><path d="M5 12h14M13 6l6 6-6 6"/></svg>),
  arrowUR: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" {...p}><path d="M7 17 17 7M8 7h9v9"/></svg>),
  download: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"/></svg>),
  top: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" {...p}><path d="M12 19V5m0 0-6 6m6-6 6 6"/></svg>),
};

const LINKS = {
  github: "https://github.com/Hariharan0-h",
  linkedin: "https://www.linkedin.com/in/hariharan-m-075373246",
  email: "100hariharan@gmail.com",
  phone: "+91 96261 48605",
};

/* ---------- reveal wrapper ---------- */
function R({ as = "div", className = "", stagger = false, children, ...rest }) {
  const Tag = as;
  return <Tag className={`${stagger ? "stagger" : "reveal"} ${className}`} {...rest}>{children}</Tag>;
}

function Eyebrow({ idx, children }) {
  return (
    <div className="eyebrow">
      <span className="idx">{idx}</span>
      <span>{children}</span>
      <span className="ln" />
    </div>
  );
}

/* ============================ NAV ============================ */
function Nav() {
  return (
    <nav className="nav" id="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="brand"><span className="blink">❯</span>hariharan<span className="blink">_</span></a>
        <div className="nav-links">
          <a href="#impact"><span className="n">01</span>impact</a>
          <a href="#experience"><span className="n">02</span>experience</a>
          <a href="#projects"><span className="n">03</span>projects</a>
          <a href="#skills"><span className="n">04</span>skills</a>
          <a href="#contact"><span className="n">05</span>contact</a>
        </div>
        <div className="nav-right">
          <span className="status"><i className="dot" />available for work</span>
          <a className="btn btn-sm btn-ghost" href="#" onClick={(e)=>e.preventDefault()}>
            {I.download({ style: { width: 15, height: 15 } })} resume.pdf
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ============================ HERO ============================ */
function Hero() {
  return (
    <header className="hero wrap" id="top">
      <div className="hero-grid">
        <div>
          <R className="hero-pre"><span className="prompt">❯</span> whoami</R>
          <R as="h1" style={{ transitionDelay: ".05s" }}>Hariharan<span className="cursor" /></R>
          <R className="roles" stagger style={{ transitionDelay: ".1s" }}>
            <span className="role-tag"><b>+</b>Full Stack Developer</span>
            <span className="role-tag"><b>+</b>Scalable Systems</span>
            <span className="role-tag"><b>+</b>AI&nbsp;+&nbsp;Backend Engineering</span>
          </R>
          <R className="valueprop" style={{ transitionDelay: ".15s" }}>
            Built high-scale healthcare systems and AI-driven platforms serving{" "}
            <b>200+ concurrent users</b> with <b>99.9% uptime</b>.
          </R>
          <R className="hero-cta" style={{ transitionDelay: ".2s" }}>
            <a className="btn btn-primary" href="#projects">View Projects {I.arrow({ className: "arr", style: { width: 16, height: 16 } })}</a>
            <a className="btn btn-ghost" href="#experience">View Experience</a>
            <a className="btn btn-ghost" href="#contact">Contact</a>
          </R>
          <R className="hero-meta" style={{ transitionDelay: ".24s" }}>
            <a className="icon-btn" href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub">{I.github()}</a>
            <a className="icon-btn" href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">{I.linkedin()}</a>
            <a className="icon-btn" href={`mailto:${LINKS.email}`} aria-label="Email">{I.mail()}</a>
          </R>
        </div>

        <R className="term" style={{ transitionDelay: ".18s" }}>
          <div className="term-bar">
            <span className="lights"><i /><i /><i /></span>
            <span className="ttl">~/hariharan — profile.json</span>
          </div>
          <div className="term-body">
            <div className="cmd"><span className="prompt">❯</span>cat profile.json</div>
            <div className="code">{`{
  `}<span className="k">"role"</span><span className="p">: </span><span className="s">"Full Stack Developer"</span><span className="p">,</span>{`
  `}<span className="k">"focus"</span><span className="p">: </span><span className="s">"Scalable Backend · AI"</span><span className="p">,</span>{`
  `}<span className="k">"stack"</span><span className="p">: [</span><span className="s">"ASP.NET Core"</span><span className="p">, </span><span className="s">"Angular"</span><span className="p">, </span><span className="s">"React"</span><span className="p">],</span>{`
  `}<span className="k">"scale"</span><span className="p">: </span><span className="s">"200+ concurrent users"</span><span className="p">,</span>{`
  `}<span className="k">"uptime"</span><span className="p">: </span><span className="s">"99.9%"</span><span className="p">,</span>{`
  `}<span className="k">"records_per_day"</span><span className="p">: </span><span className="s">3000</span><span className="p">,</span>{`
  `}<span className="k">"open_to"</span><span className="p">: [</span><span className="s">"Full Stack"</span><span className="p">, </span><span className="s">"Backend"</span><span className="p">, </span><span className="s">"AI"</span><span className="p">]</span>{`
}`}</div>
            <div className="cmd" style={{ marginTop: 8 }}><span className="prompt">❯</span><span className="term-cursor" /></div>
          </div>
        </R>
      </div>
    </header>
  );
}

/* ============================ IMPACT ============================ */
const METRICS = [
  { n: 200, suf: "+", lbl: "concurrent users supported in production", tag: "scale" },
  { n: 40, suf: "%", lbl: "API performance improvement", tag: "perf", pre: "↑ " },
  { n: 3000, suf: "+", lbl: "surgical records processed daily", tag: "throughput" },
  { n: 99.9, suf: "%", lbl: "uptime across healthcare systems", tag: "reliability", dec: 1 },
];
function Impact() {
  return (
    <section id="impact">
      <div className="wrap">
        <R><Eyebrow idx="// 01">impact_highlights</Eyebrow></R>
        <R className="metrics stagger">
          {METRICS.map((m, i) => (
            <div className="metric" key={i}>
              <div className="top"><span>0{i + 1}</span><span>{m.tag}</span></div>
              <div className="num">
                {m.pre && <span className="u">{m.pre}</span>}
                <span className="count" data-to={m.n} data-dec={m.dec || 0}>0</span>
                <span className="u">{m.suf}</span>
              </div>
              <div className="lbl">{m.lbl}</div>
            </div>
          ))}
          <div className="metric metric-wide">
            <div className="mw-l">
              <span className="mw-badge">AI · automation</span>
              <div>
                <h3>AI-powered CI/CD automation</h3>
                <p>Autonomous pipeline turning commits into production-ready releases — engineered, not configured.</p>
              </div>
            </div>
            <a className="btn btn-sm btn-ghost" href="#projects">See the build {I.arrow({ className: "arr", style: { width: 15, height: 15 } })}</a>
          </div>
        </R>
      </div>
    </section>
  );
}

/* ============================ EXPERIENCE ============================ */
const XP_BULLETS = [
  ["Architected", <>Architected <b>ASP.NET Core</b> APIs handling <b>200+ concurrent users</b> with <b>99.9% uptime</b> under sustained production load.</>],
  ["Designed", <>Designed <b>15+ database schemas</b> in <b>Entity Framework</b> with strict ACID compliance and clean migration paths.</>],
  ["Built", <>Built <b>Angular</b> dashboards processing <b>3000+ surgical records/day</b> with real-time reporting.</>],
  ["Optimized", <>Reduced API latency by <b>40%</b> and improved query performance by <b>60%</b> through indexing and async I/O.</>],
  ["Engineered", <>Implemented <b>async pipelines</b> and repository patterns for high-throughput, maintainable backend systems.</>],
];
const XP_TAGS = ["ASP.NET Core", "C#", "Entity Framework", "Angular", "SQL Server", "Async I/O", "REST"];
function Experience() {
  return (
    <section id="experience" className="sec-line">
      <div className="wrap">
        <R><Eyebrow idx="// 02">experience</Eyebrow></R>
        <div className="xp">
          <R className="xp-rail">
            <div className="xp-node">
              <span className="xp-role">Full Stack Developer</span>
              <span className="xp-co">Aravind Eye Care Systems <span className="sub">· AuroiTech</span></span>
              <span className="xp-when"><i className="live" /> Sep 2024 — Present</span>
            </div>
          </R>
          <R className="xp-body">
            <div className="xp-list">
              {XP_BULLETS.map(([v, body], i) => (
                <div className="xp-item" key={i}>
                  <span className="mk">{String(i + 1).padStart(2, "0")}</span>
                  <p>{body}</p>
                </div>
              ))}
            </div>
            <div className="xp-tags">
              {XP_TAGS.map((t) => <span className="tag" key={t}>{t}</span>)}
            </div>
          </R>
        </div>
      </div>
    </section>
  );
}

/* ============================ PROJECTS ============================ */
const PROJECTS = [
  {
    kind: "AI Systems", stack: ["Python", "LLM", "CI/CD"], name: "AutoPilot CI/CD Pipeline", feat: true,
    bullets: [
      [<>Autonomous pipeline that converts <b>commits → production-ready releases</b> with zero hand-holding.</>],
      [<>AI-based validation workflows that <b>cut manual intervention</b> across the release path.</>],
      [<>End-to-end <b>system design + automation</b> — gating, testing, and deploy in one loop.</>],
      [<>Built for repeatability: deterministic, observable, <b>recovery-safe</b> runs.</>],
    ],
  },
  {
    kind: "Enterprise BI", stack: [".NET", "Angular", "SQL"], name: "BI Tool — DBMS",
    bullets: [
      [<>Enterprise analytics system with <b>optimized data pipelines</b>.</>],
      [<>Built for <b>performance, reporting & scalability</b> at volume.</>],
    ],
  },
  {
    kind: "SaaS", stack: ["Next.js", "Git API"], name: "Git Archeologist",
    bullets: [
      [<>Extracts insight from <b>git history</b> at the repo level.</>],
      [<>Surfaces <b>contribution patterns</b> teams can act on.</>],
    ],
  },
  {
    kind: "AI Product", stack: ["Python", "LLM"], name: "Odin AI Chatbot",
    bullets: [
      [<>Chat interface with an <b>inbuilt LLM</b> integration.</>],
      [<>Demonstrates real <b>AI product</b> wiring, not a demo wrapper.</>],
    ],
  },
  {
    kind: "Frontend", stack: ["Angular"], name: "Editor Component",
    bullets: [
      [<>Custom <b>MS Word-like</b> rich text editor.</>],
      [<>Advanced formatting, built as a reusable component.</>],
    ],
  },
  {
    kind: "Web App", stack: ["React.js"], name: "RedBlogs",
    bullets: [
      [<>Blogging platform with full <b>content management</b>.</>],
      [<>Authoring, publishing and feed in one app.</>],
    ],
  },
  {
    kind: "Mobile", stack: ["React Native"], name: "Iyal Green Farming App",
    bullets: [
      [<>Community platform for <b>sustainable agriculture</b>.</>],
      [<>Connects growers around shared practices.</>],
    ],
  },
];
function Projects() {
  return (
    <section id="projects" className="sec-line">
      <div className="wrap">
        <R><Eyebrow idx="// 03">selected_projects</Eyebrow></R>
        <R as="h2" className="sec-title">Systems I've shipped.</R>
        <R as="p" className="sec-sub" style={{ marginBottom: 38 }}>
          Problem → tech → outcome. Ownership of real systems, from AI automation to enterprise analytics.
        </R>
        <R className="proj-grid stagger">
          {PROJECTS.map((p, i) => (
            <article className={`card${p.feat ? " card-feat" : ""}`} key={i}>
              <div className="card-head">
                <span className="card-kind"><span className="idx">{String(i + 1).padStart(2, "0")}</span>{p.kind}</span>
              </div>
              <h3>{p.name}</h3>
              <div className="stack">{p.stack.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
              <ul className={p.feat ? "feat-body" : ""}>
                {p.bullets.map((b, j) => (
                  <li key={j}><span className="b">›</span><span>{b[0]}</span></li>
                ))}
              </ul>
              <div className="card-foot">
                <a className="card-link" href={LINKS.github} target="_blank" rel="noreferrer">
                  view source {I.arrowUR({ style: { width: 14, height: 14 } })}
                </a>
                <span className="card-tag">{p.kind.toLowerCase().replace(/ /g, "_")}</span>
              </div>
            </article>
          ))}
        </R>
      </div>
    </section>
  );
}

/* ============================ SKILLS ============================ */
const SKILLS = [
  { gi: "01", g: "Backend Engineering", items: [".NET Core", "ASP.NET Web API", "C#", "Entity Framework"] },
  { gi: "02", g: "Frontend Engineering", items: ["Angular", "React", "Next.js", "TypeScript"] },
  { gi: "03", g: "Data & Databases", items: ["SQL Server", "T-SQL", "Query Optimization"] },
  { gi: "04", g: "System Design", items: ["Async Processing", "Repository Pattern", "Dependency Injection"] },
  { gi: "05", g: "Tools & Practice", items: ["Git", "Agile", "API Design"] },
  { gi: "06", g: "AI & Platforms", items: ["LLM Integration", "Azure", "Google Cloud AI"] },
];
function Skills() {
  return (
    <section id="skills" className="sec-line">
      <div className="wrap">
        <R><Eyebrow idx="// 04">skills</Eyebrow></R>
        <R as="h2" className="sec-title" style={{ marginBottom: 32 }}>The stack, grouped.</R>
        <R className="skills-grid">
          {SKILLS.map((s) => (
            <div className="skill-group" key={s.gi}>
              <div className="gh"><span className="gi">{s.gi}</span>{s.g}<span className="gn">{s.items.length} items</span></div>
              <div className="skill-list">{s.items.map((it) => <span className="skill" key={it}>{it}</span>)}</div>
            </div>
          ))}
        </R>
      </div>
    </section>
  );
}

/* ============================ CRED: certs + hackathons + edu ============================ */
const CERTS = [
  ["Azure Fundamentals", "Microsoft"],
  ["Google Cloud AI & ML", "Google"],
  ["Google Analytics", "Google"],
  ["Claude Certifications", "Anthropic"],
  ["TalentNext", "Wipro"],
  ["Full Stack Courses", "Udemy"],
];
const HACKS = [
  { name: "Vinsup Tech Tournament", prize: "₹21,000", win: true },
  { name: "AMD Developer Hackathon 2026", prize: "" },
  { name: "HCL GUVI AI Summit", prize: "" },
  { name: "Devnovate Hackathon", prize: "" },
];
function Cred() {
  return (
    <section id="credentials" className="sec-line">
      <div className="wrap">
        <R><Eyebrow idx="// 05">credentials</Eyebrow></R>
        <R className="cred stagger">
          <div className="cred-block">
            <div className="bh"><span className="idx">$</span> hackathons — proof of initiative</div>
            <div className="hack-list">
              {HACKS.map((h, i) => (
                <div className={`hack${h.win ? " win" : ""}`} key={i}>
                  <span className="hk-mk">{h.win ? "WIN" : `0${i + 1}`}</span>
                  <span className="hk-name">{h.name}</span>
                  {h.win && <span className="win-badge">WINNER</span>}
                  {h.prize && <span className="hk-prize">{h.prize}</span>}
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div className="cred-block">
              <div className="bh"><span className="idx">$</span> certifications</div>
              <div className="cert-list">
                {CERTS.map(([c, m], i) => (
                  <div className="cert-item" key={i}><span className="mk">▪</span>{c}<span className="meta">{m}</span></div>
                ))}
              </div>
            </div>
            <div className="cred-block">
              <div className="bh"><span className="idx">$</span> education</div>
              <div className="edu-card">
                <span className="edu-deg">B.Tech IT — Honors</span>
                <span className="edu-school">Velammal College of Engineering</span>
                <div className="edu-stat"><span className="cg">8.39</span><span className="cl">/ 10 CGPA</span></div>
              </div>
            </div>
          </div>
        </R>
      </div>
    </section>
  );
}

/* ============================ CONTACT + FOOTER ============================ */
function Contact() {
  return (
    <section id="contact" className="sec-line">
      <div className="wrap contact">
        <R><Eyebrow idx="// 06">contact</Eyebrow></R>
        <R className="contact-inner">
          <div className="contact-top">
            <div>
              <h2>Let's build<br />something real.<span className="cursor" /></h2>
              <span className="open"><i className="dot" style={{ width: 7, height: 7 }} /> Open to Full Stack · Backend · AI Engineering roles</span>
            </div>
            <div className="contact-actions">
              <a className="btn btn-primary" href={`mailto:${LINKS.email}`}>{I.mail({ style: { width: 16, height: 16 } })} Email me</a>
              <a className="btn btn-ghost" href={LINKS.linkedin} target="_blank" rel="noreferrer">{I.linkedin({ style: { width: 16, height: 16 } })} LinkedIn</a>
              <a className="btn btn-ghost" href={LINKS.github} target="_blank" rel="noreferrer">{I.github({ style: { width: 16, height: 16 } })} GitHub</a>
            </div>
          </div>
          <div className="contact-rows">
            <a className="crow" href={`mailto:${LINKS.email}`}>{I.mail({ className: "ci" })}<span className="cl">email</span><span className="cv">{LINKS.email}</span></a>
            <a className="crow" href={`tel:${LINKS.phone.replace(/ /g, "")}`}>{I.phone({ className: "ci" })}<span className="cl">phone</span><span className="cv">{LINKS.phone}</span></a>
            <a className="crow" href={LINKS.github} target="_blank" rel="noreferrer">{I.github({ className: "ci" })}<span className="cl">github</span><span className="cv">Hariharan0-h</span></a>
            <a className="crow" href={LINKS.linkedin} target="_blank" rel="noreferrer">{I.linkedin({ className: "ci" })}<span className="cl">linkedin</span><span className="cv">hariharan-m</span></a>
          </div>
        </R>
        <footer className="foot">
          <span>© 2026 Hariharan · built from scratch in HTML</span>
          <a className="totop" href="#top">back to top {I.top({ style: { width: 14, height: 14 } })}</a>
        </footer>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, Impact, Experience, Projects, Skills, Cred, Contact });
