import { ProductPreview } from "@/components/product-preview";

const repository = "https://github.com/Superlapie/Tortoise";

const stages = [
  {
    id: "device",
    index: "01",
    name: "Inventory",
    eyebrow: "THE MACHINE, AS IT IS",
    title: "Start with the device in front of you.",
    copy: "Tortoise reads Windows device and driver-store inventory, then associates packages with the hardware they serve.",
    note: "LOCAL DEVICE + PACKAGE RECORD",
  },
  {
    id: "source",
    index: "02",
    name: "Source",
    eyebrow: "NO DRIVER MIRRORS",
    title: "The offer comes from Windows Update.",
    copy: "Recommended and optional driver offers stay connected to their source. Managed update policy is respected.",
    note: "WINDOWS UPDATE · POLICY AWARE",
  },
  {
    id: "match",
    index: "03",
    name: "Match",
    eyebrow: "CHECK THE REASONING",
    title: "Compare before a plan can move forward.",
    copy: "Device match, package, version, source, risk context, staleness, and preflight checks belong in the same review.",
    note: "MATCH · VERSION · RISK · PREFLIGHT",
  },
  {
    id: "decision",
    index: "04",
    name: "Decision",
    eyebrow: "YOU KEEP THE LAST WORD",
    title: "A reviewable plan. No silent install.",
    copy: "The public build can prepare and simulate a plan. Driver installation stays disabled; no change happens behind your back.",
    note: "PUBLIC BUILD · MUTATION DISABLED",
  },
];

function ShellMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
      <path d="M26 10.5c0-4 2.8-6.5 6-6.5s6 2.5 6 6.5v5h-12v-5Z" fill="currentColor" />
      <path d="M16 19.5c4.2-3.7 10-5.5 16-5.5s11.8 1.8 16 5.5c6.7 5.9 10 13.8 10 21.1 0 8.1-4.4 14.8-11.5 18.7H17.5C10.4 55.4 6 48.7 6 40.6c0-7.3 3.3-15.2 10-21.1Z" fill="currentColor" />
      <path d="M32 16v40M10 31h44M17 20l15 11 15-11M17 54l15-11 15 11" stroke="#F2EEE3" strokeWidth="1.7" />
      <path d="M8 30c-3.9 0-6 2.4-6 5.5S4.1 41 8 41h2M56 30c3.9 0 6 2.4 6 5.5S59.9 41 56 41h-2M19 56l-3 5m29-5 3 5" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M28 6h8" stroke="#E2A16A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 12 12 4M5 4h7v7" /></svg>
  ) : (
    <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8h10m-4-4 4 4-4 4" /></svg>
  );
}

function Nav() {
  return (
    <header className="site-header">
      <div className="header-rule" />
      <div className="nav-shell">
        <a className="brand-lockup" href="#top" aria-label="Tortoise home">
          <span className="brand-emblem"><ShellMark size={34} /></span>
          <span className="brand-name">Tortoise</span>
          <span className="brand-version">0.1.0—α</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#route">How it works</a>
          <a href="#interface">The tool</a>
          <a href="#safety">Safety</a>
          <a href="#license">License</a>
          <a className="source-link" href={repository} target="_blank" rel="noreferrer">Source <Arrow diagonal /></a>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span>Index</span><b aria-hidden="true">+</b></summary>
          <nav aria-label="Mobile navigation">
            <a href="#route">How it works</a><a href="#interface">The tool</a>
            <a href="#safety">Safety</a><a href="#license">License</a>
            <a href={repository} target="_blank" rel="noreferrer">Source ↗</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

function DecisionDrawing() {
  return (
    <figure className="decision-figure" aria-labelledby="drawing-caption">
      <svg className="decision-drawing" viewBox="0 0 720 560" role="img" aria-labelledby="drawing-title drawing-desc">
        <title id="drawing-title">The Tortoise driver decision route</title>
        <desc id="drawing-desc">An illustrated shell connects local device inventory and Windows Update to a plan that can be reviewed before any change.</desc>
        <defs>
          <pattern id="draft-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M28 0H0V28" fill="none" stroke="#F2EEE3" strokeOpacity=".075" strokeWidth=".6" />
          </pattern>
          <linearGradient id="shell-fill" x1="250" y1="150" x2="472" y2="398" gradientUnits="userSpaceOnUse">
            <stop stopColor="#71835B" />
            <stop offset="1" stopColor="#344B36" />
          </linearGradient>
        </defs>
        <rect x=".5" y=".5" width="719" height="559" fill="#192B20" stroke="#415545" />
        <rect x="1" y="1" width="718" height="558" fill="url(#draft-grid)" />
        <path d="M28 39h13m-13 0v13M692 39h-13m13 0v13M28 521h13m-13 0v-13m664 13h-13m13 0v-13" stroke="#AAB58A" strokeWidth="1" />
        <text x="34" y="29" fill="#BEC6AA" fontSize="10" letterSpacing="1.8" fontFamily="monospace">PLATE 01 / DECISION PATH</text>
        <text x="686" y="29" fill="#BEC6AA" fontSize="9" textAnchor="end" letterSpacing="1.3" fontFamily="monospace">LOCAL BY DEFAULT</text>

        <path className="trace-line trace-a" d="M180 174h87c25 0 37 17 49 41l22 44" fill="none" stroke="#D6A06E" strokeWidth="1.5" />
        <path className="trace-line trace-b" d="M540 174h-76c-24 0-40 15-53 39l-21 46" fill="none" stroke="#D6A06E" strokeWidth="1.5" />
        <path className="trace-line trace-c" d="M180 405h92c27 0 40-19 52-41l14-26" fill="none" stroke="#D6A06E" strokeWidth="1.5" />
        <path className="trace-line trace-d" d="M540 405h-74c-24 0-40-16-54-40l-18-28" fill="none" stroke="#D6A06E" strokeWidth="1.5" />
        <circle cx="338" cy="259" r="3" fill="#E8B687" /><circle cx="385" cy="259" r="3" fill="#E8B687" />
        <circle cx="324" cy="373" r="3" fill="#E8B687" /><circle cx="413" cy="373" r="3" fill="#E8B687" />

        <g className="diagram-shell">
          <path d="M358 168c-66 0-116 46-125 107-8 51 13 111 53 139l16 44h35l23-29 23 29h35l16-44c40-28 61-88 53-139-9-61-59-107-125-107Z" fill="url(#shell-fill)" stroke="#D7D1BB" strokeWidth="1.4" />
          <path d="M358 183c-50 0-91 33-102 80-10 43 6 91 38 117 19 15 42 21 64 21s45-6 64-21c32-26 48-74 38-117-11-47-52-80-102-80Z" fill="none" stroke="#D8D2BD" strokeOpacity=".8" strokeWidth="1.3" />
          <path d="M358 183v218M256 263h204M294 206l64 57 64-57M294 380l64-55 64 55" fill="none" stroke="#C7CBAE" strokeOpacity=".72" strokeWidth="1.2" />
          <path d="M358 183 294 206l-38 57 38 117 64 18 64-18 38-117-38-57-64-23Z" fill="none" stroke="#E1A671" strokeOpacity=".85" strokeWidth="1" />
          <circle cx="358" cy="263" r="5" fill="#E1A671" />
          <path d="M350 162c0-11 3-18 8-18s8 7 8 18v7h-16v-7Z" fill="#D5CBB0" />
          <path d="M350 455h16l-8 13-8-13Z" fill="#D5CBB0" />
        </g>

        <g className="diagram-label">
          <path d="M34 113h146v122H34z" fill="#EEE9DB" />
          <path d="M34 113h28v3H34z" fill="#D37450" />
          <text x="49" y="143" fill="#9B4F37" fontSize="9" letterSpacing="1.5" fontFamily="monospace">01 / INVENTORY</text>
          <text x="49" y="172" fill="#203025" fontSize="16" fontFamily="Georgia,serif">Device +</text>
          <text x="49" y="193" fill="#203025" fontSize="16" fontFamily="Georgia,serif">driver store</text>
          <text x="49" y="218" fill="#697368" fontSize="8" letterSpacing=".7" fontFamily="monospace">LOCAL READ</text>
        </g>
        <g className="diagram-label">
          <path d="M540 113h146v122H540z" fill="#EEE9DB" />
          <path d="M540 113h28v3h-28z" fill="#D37450" />
          <text x="555" y="143" fill="#9B4F37" fontSize="9" letterSpacing="1.5" fontFamily="monospace">02 / SOURCE</text>
          <text x="555" y="172" fill="#203025" fontSize="16" fontFamily="Georgia,serif">Windows</text>
          <text x="555" y="193" fill="#203025" fontSize="16" fontFamily="Georgia,serif">Update</text>
          <text x="555" y="218" fill="#697368" fontSize="8" letterSpacing=".7" fontFamily="monospace">POLICY AWARE</text>
        </g>
        <g className="diagram-label">
          <path d="M34 344h146v122H34z" fill="#EEE9DB" />
          <path d="M34 344h28v3H34z" fill="#D37450" />
          <text x="49" y="374" fill="#9B4F37" fontSize="9" letterSpacing="1.5" fontFamily="monospace">03 / PREFLIGHT</text>
          <text x="49" y="403" fill="#203025" fontSize="16" fontFamily="Georgia,serif">Match, risk,</text>
          <text x="49" y="424" fill="#203025" fontSize="16" fontFamily="Georgia,serif">staleness</text>
          <text x="49" y="449" fill="#697368" fontSize="8" letterSpacing=".7" fontFamily="monospace">FAIL CLOSED</text>
        </g>
        <g className="diagram-label">
          <path d="M540 344h146v122H540z" fill="#EEE9DB" />
          <path d="M540 344h28v3h-28z" fill="#D37450" />
          <text x="555" y="374" fill="#9B4F37" fontSize="9" letterSpacing="1.5" fontFamily="monospace">04 / REVIEW</text>
          <text x="555" y="403" fill="#203025" fontSize="16" fontFamily="Georgia,serif">A plan you</text>
          <text x="555" y="424" fill="#203025" fontSize="16" fontFamily="Georgia,serif">can question</text>
          <text x="555" y="449" fill="#697368" fontSize="8" letterSpacing=".7" fontFamily="monospace">NO AUTO-APPLY</text>
        </g>
        <text x="358" y="510" fill="#AFB89D" textAnchor="middle" fontSize="9" letterSpacing="1.8" fontFamily="monospace">NO SHORTCUTS THROUGH THE SHELL</text>
      </svg>
      <figcaption id="drawing-caption"><span>FIG. 01</span><span>One traceable route. Four chances to stop.</span></figcaption>
    </figure>
  );
}

function Hero() {
  return (
    <section className="hero page-shell" id="top" aria-labelledby="hero-title">
      <div className="hero-topline"><span>FIELD GUIDE&nbsp; / &nbsp;WINDOWS DRIVER CARE</span><span>EDITION 01&nbsp; · &nbsp;PUBLIC ALPHA</span></div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker"><i /> A SAFETY-FIRST WINDOWS TOOL</p>
          <h1 id="hero-title">A paper trail<br />for every<br /><em>driver change.</em></h1>
          <p className="hero-intro">See what’s installed, what Windows offers, and why a plan is safe to review—before anything changes.</p>
          <div className="hero-actions">
            <a className="primary-action" href="#route">Follow the decision <Arrow /></a>
            <a className="quiet-action" href={repository} target="_blank" rel="noreferrer">Read the source <Arrow diagonal /></a>
          </div>
          <div className="hero-footnote"><span className="footnote-seal"><ShellMark size={19} /></span><span>LOCAL BY DEFAULT</span><b aria-hidden="true">/</b><span>PUBLIC BUILD · READ-ONLY</span></div>
        </div>
        <DecisionDrawing />
      </div>
      <div className="hero-baseline"><span>01 — DEVICE</span><span>02 — SOURCE</span><span>03 — PLAN</span><span>04 — DECISION</span><a href="#route" aria-label="Scroll to the route section">↓</a></div>
    </section>
  );
}

function RouteSection() {
  return (
    <section className="route-section page-shell" id="route" aria-labelledby="route-title">
      <div className="section-heading route-heading">
        <div><p className="section-index"><span>01</span> / HOW TORTOISE WORKS</p><h2 id="route-title">Show the work<br />before the <em>change.</em></h2></div>
        <p className="heading-aside">An update isn’t just a version number. It has a device, a source, and a set of consequences. Tortoise keeps those details together.</p>
      </div>
      <fieldset className="route-explorer">
        <legend>Choose a step to inspect the decision</legend>
        {stages.map((stage, index) => <input className="route-radio" key={stage.id} type="radio" name="decision-route" id={`route-${stage.id}`} defaultChecked={index === 0} />)}
        <div className="route-tabs">
          {stages.map((stage) => <label key={stage.id} htmlFor={`route-${stage.id}`}><span>{stage.index}</span><b>{stage.name}</b><i aria-hidden="true">↗</i></label>)}
        </div>
        <div className="route-panels">
          {stages.map((stage) => (
            <article className={`route-panel route-panel-${stage.id}`} key={stage.id} aria-labelledby={`route-heading-${stage.id}`}>
              <div className="route-panel-copy"><span>{stage.eyebrow}</span><h3 id={`route-heading-${stage.id}`}>{stage.title}</h3><p>{stage.copy}</p></div>
              <div className="route-docket">
                <div className="docket-top"><span>TRACE / {stage.index}</span><span>TORTOISE</span></div>
                <div className="docket-stamp"><ShellMark size={65} /><span>{stage.index}</span></div>
                <div className="docket-foot"><i />{stage.note}</div>
              </div>
              <div className="route-panel-foot"><span>STEP {stage.index} OF 04</span><span>NO CHANGE WITHOUT REVIEW</span></div>
            </article>
          ))}
        </div>
      </fieldset>
      <div className="route-note"><span className="note-rule" /><p>Checks are recorded locally. Frozen plans are checked for staleness and preflight before simulation.</p><a href={`${repository}/blob/main/ARCHITECTURE.md`} target="_blank" rel="noreferrer">Read the architecture <Arrow diagonal /></a></div>
    </section>
  );
}

function ProductSection() {
  return (
    <section className="product-section" id="interface" aria-labelledby="product-title">
      <div className="page-shell">
        <div className="section-heading product-heading">
          <div><p className="section-index"><span>02</span> / THE WINDOWS APP</p><h2 id="product-title">A calmer view<br />of a complicated <em>machine.</em></h2></div>
          <div className="heading-aside"><p>Inventory, update review, safety status, and scan history—kept in a local workspace.</p><span className="illustration-label">INTERFACE STUDY&nbsp; · &nbsp;NO LIVE DEVICE DATA</span></div>
        </div>
        <div className="app-mount">
          <div className="app-mount-caption"><span>SPECIMEN 02-A&nbsp; / &nbsp;DESKTOP WORKSPACE</span><span>SELECT A VIEW INSIDE&nbsp; ↓</span></div>
          <ProductPreview />
          <div className="app-mount-footer"><span>THE PUBLIC BUILD CANNOT INSTALL DRIVERS</span><span>WINDOWS 11&nbsp; / &nbsp;X64</span></div>
        </div>
        <div className="product-records">
          <article><span>01 / HISTORY</span><h3>A record that stays local.</h3><p>Scan history lives in a local SQLite database on your PC.</p></article>
          <article><span>02 / DIAGNOSTICS</span><h3>Share only what you choose.</h3><p>Diagnostics are redacted JSON; inspect the contents before you share.</p></article>
          <article><span>03 / RECOVERY</span><h3>Prepare for the way back.</h3><p>Export a recovery manifest with explicit scope and limits.</p></article>
        </div>
      </div>
    </section>
  );
}

function SafetySection() {
  return (
    <section className="safety-section" id="safety" aria-labelledby="safety-title">
      <div className="page-shell safety-layout">
        <div className="safety-copy">
          <p className="section-index"><span>03</span> / A SAFETY CONSTITUTION</p>
          <h2 id="safety-title">Uncertain?<br /><em>Stop here.</em></h2>
          <p>Tortoise would rather pause than guess. The public build can inventory, scan, prepare, and simulate. Driver installation is disabled.</p>
          <a className="light-link" href={`${repository}/blob/main/SAFETY.md`} target="_blank" rel="noreferrer">Read the full safety policy <Arrow diagonal /></a>
        </div>
        <div className="safety-ledger">
          <div className="ledger-top"><span>WHEN A CHECK IS UNCERTAIN</span><span>THE PREFERRED ORDER</span></div>
          <ol>
            <li><span>01</span><strong>Refuse</strong></li>
            <li><span>02</span><strong>Warn</strong></li>
            <li><span>03</span><strong>Defer</strong></li>
            <li><span>04</span><strong>Hand off to Windows</strong></li>
            <li className="ledger-never"><span>05</span><strong>Risky assumption</strong></li>
          </ol>
          <div className="safety-stamp"><span>PUBLIC BUILD</span><strong>NO<br />INSTALL</strong><i>READ ONLY</i></div>
          <div className="ledger-bottom"><span>UNKNOWN STATE&nbsp; → &nbsp;FAIL CLOSED</span><span>NO SILENT CHANGES</span></div>
        </div>
      </div>
    </section>
  );
}

function LicenseSection() {
  return (
    <section className="license-section page-shell" id="license" aria-labelledby="license-title">
      <div className="license-intro"><p className="section-index"><span>04</span> / SOURCE &amp; USE</p><h2 id="license-title">Open source.<br /><em>Clear terms.</em></h2><p>Tortoise is free to use for noncommercial purposes. Commercial use requires a separate paid license.</p></div>
      <div className="license-register">
        <article className="license-row">
          <span className="license-number">A</span><div className="license-type"><span>POLYFORM NONCOMMERCIAL</span><h3>For personal, hobby, and qualifying educational use.</h3><p>Read, fork, modify, and contribute under the public license.</p></div>
          <a href={`${repository}/blob/main/LICENSE`} target="_blank" rel="noreferrer">Read the license <Arrow diagonal /></a>
        </article>
        <article className="license-row commercial-row">
          <span className="license-number">B</span><div className="license-type"><span>COMMERCIAL USE</span><h3>For business, services, and client work.</h3><p>A separate paid commercial license is required.</p></div>
          <a href={`${repository}/blob/main/COMMERCIAL.md`} target="_blank" rel="noreferrer">License details <Arrow diagonal /></a>
        </article>
      </div>
      <p className="license-footnote">The source is public; the commercial license grants rights beyond PolyForm Noncommercial.</p>
    </section>
  );
}

export function FieldManualPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <RouteSection />
        <ProductSection />
        <SafetySection />
        <LicenseSection />
        <section className="last-word page-shell" aria-labelledby="last-word-title">
          <div className="last-word-mark"><ShellMark size={56} /></div>
          <div><p className="section-index"><span>END OF FIELD GUIDE</span> / BEGIN WITH THE SOURCE</p><h2 id="last-word-title">Take the long view.</h2></div>
          <a className="primary-action" href={repository} target="_blank" rel="noreferrer">Explore Tortoise on GitHub <Arrow diagonal /></a>
        </section>
      </main>
      <footer className="site-footer">
        <div className="page-shell footer-main">
          <a className="brand-lockup footer-brand" href="#top"><span className="brand-emblem"><ShellMark size={31} /></span><span className="brand-name">Tortoise</span></a>
          <p>A safety-first Windows driver<br />inventory and update utility.</p>
          <nav aria-label="Project links"><a href={repository} target="_blank" rel="noreferrer">Repository <Arrow diagonal /></a><a href={`${repository}/blob/main/PRIVACY.md`} target="_blank" rel="noreferrer">Privacy <Arrow diagonal /></a><a href={`${repository}/blob/main/THREAT_MODEL.md`} target="_blank" rel="noreferrer">Threat model <Arrow diagonal /></a></nav>
        </div>
        <div className="page-shell footer-colophon"><span>© SUPERLAPIE</span><span>BUILT FOR WINDOWS 11&nbsp; / &nbsp;X64</span><a href="#top">RETURN TO INDEX ↑</a></div>
      </footer>
    </>
  );
}
