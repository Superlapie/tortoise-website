import Image from "next/image";
import { BrandMark } from "@/components/brand-mark";
import { ProductPreview } from "@/components/product-preview";

const repository = "https://github.com/Superlapie/Tortoise";

const chapters = [
  {
    id: "inventory",
    number: "01",
    title: "Know the machine",
    heading: "Start with what is actually installed.",
    copy: "Tortoise inventories Windows devices and the driver packages in the local driver store, so a recommendation has a real device to answer to.",
    source: "DEVICE + DRIVER-STORE INVENTORY",
  },
  {
    id: "source",
    number: "02",
    title: "Trace the source",
    heading: "Windows stays in the loop.",
    copy: "Driver offers come from Windows Update. Tortoise respects managed policies and shows where an offer came from.",
    source: "WINDOWS UPDATE · POLICY AWARE",
  },
  {
    id: "review",
    number: "03",
    title: "Read the plan",
    heading: "Make every match explain itself.",
    copy: "Compare the device, package, versions, and risk context. Frozen plans are checked for staleness and preflight before simulation.",
    source: "MATCH · VERSION · RISK · PREFLIGHT",
  },
  {
    id: "decision",
    number: "04",
    title: "Keep the decision",
    heading: "Nothing installs behind your back.",
    copy: "The public build can scan, prepare, and simulate a plan. Driver installation is disabled; the final call stays yours.",
    source: "PUBLIC BUILD · READ-ONLY",
  },
];

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8h9M8 3l5 5-5 5" />
    </svg>
  );
}

function SiteNav({ mobile = false }: { mobile?: boolean }) {
  return (
    <nav className={mobile ? "mobile-nav-links" : "primary-nav"} aria-label="Main navigation">
      <a href="#method">The method</a>
      <a href="#interface">The interface</a>
      <a href="#safety">Safety</a>
      <a href="#license">License</a>
      <a className={mobile ? "mobile-github-link" : "nav-github"} href={repository} target="_blank" rel="noreferrer">
        GitHub <Arrow />
      </a>
    </nav>
  );
}

function TopographicDrawing() {
  return (
    <svg className="hero-contours" viewBox="0 0 900 900" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1">
        <path d="M638 81c86 18 156 88 161 174 5 75-41 133-55 203-17 82 43 146 17 226-24 74-118 116-206 91-86-24-118-105-196-119-76-14-133 35-207 12-82-26-126-117-97-201 25-72 103-109 110-183 7-75-54-137-24-210C171 2 276-31 354 13c66 37 83 119 151 140 45 14 86-10 133-45Z" />
        <path d="M620 133c71 17 128 74 132 142 4 61-37 107-49 164-15 69 34 124 13 189-20 60-96 94-167 73-69-20-96-85-158-97-61-12-106 28-165 10-66-20-102-95-78-164 20-58 83-88 89-148 5-61-44-111-19-170 28-64 112-91 175-56 54 30 68 96 123 113 36 11 69-8 104-36Z" />
        <path d="M598 191c54 14 97 57 99 110 3 47-28 81-37 125-11 52 25 94 9 142-15 46-73 71-127 55-52-16-72-64-119-73-47-9-81 21-126 8-50-15-78-72-59-124 15-43 62-66 66-111 4-46-33-84-14-129 21-48 85-69 132-43 41 23 51 73 93 85 28 9 53-6 83-25Z" />
        <path d="M575 247c38 10 68 41 69 78 2 33-19 58-26 89-8 37 17 67 6 101-10 33-52 51-90 39-37-11-51-45-84-52-33-6-58 15-89 6-36-11-55-51-42-88 11-31 44-47 47-79 3-33-24-59-10-92 15-34 60-49 94-30 29 16 36 52 66 61 20 6 38-4 59-17Z" />
      </g>
    </svg>
  );
}

function HeroScene() {
  return (
    <section className="hero-scene" id="top" aria-labelledby="hero-title">
      <div className="hero-grid page-width">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-rule" /> WINDOWS 11 · DRIVER CARE</p>
          <h1 id="hero-title">See the change.<br /><em>Know the why.</em></h1>
          <p className="hero-lede">
            Tortoise traces a driver update from device to source to reviewable plan—before anything changes.
          </p>
          <div className="hero-actions">
            <a className="button button-lime" href="#method">Follow the decision <Arrow /></a>
            <a className="text-action" href={repository} target="_blank" rel="noreferrer">Explore the source <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-status">
            <span className="status-light" />
            <span>0.1.0 ALPHA</span><i />
            <span>PUBLIC BUILD · READ-ONLY</span>
          </div>
        </div>

        <figure className="hero-art">
          <div className="hero-art-ring" aria-hidden="true"><span>DEVICE / SOURCE / DECISION</span></div>
          <TopographicDrawing />
          <Image
            className="hero-tortoise"
            src="/tortoise-guide.webp"
            alt=""
            width={1100}
            height={1100}
            priority
            sizes="(max-width: 700px) 92vw, (max-width: 1200px) 60vw, 760px"
          />
          <figcaption className="hero-figure-caption"><span>FIELD GUIDE / 001</span><span>TAKE THE LONG VIEW</span></figcaption>
          <details className="guide-note">
            <summary><BrandMark size={30} /><span>Ask Tori</span><span className="guide-toggle" aria-hidden="true">+</span></summary>
            <div className="guide-answer">
              <span>TORI / FIELD NOTE</span>
              <p>First we check which device a driver belongs to. Then we check its source. Only then is there a plan to review.</p>
            </div>
          </details>
        </figure>
      </div>

      <div className="hero-footer page-width">
        <span>01 — A CAREFUL WAY TO UPDATE</span>
        <span>LOCAL BY DEFAULT</span>
        <a href="#method">SCROLL TO FOLLOW THE TRAIL <span aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}

function MethodSection() {
  return (
    <section className="method-section" id="method" aria-labelledby="method-title">
      <div className="page-width">
        <div className="method-heading">
          <div>
            <p className="eyebrow eyebrow-dark"><span className="eyebrow-rule" /> THE ROUTE FROM DEVICE TO DECISION</p>
            <h2 id="method-title">A reason at<br />every <em>turn.</em></h2>
          </div>
          <p>Driver care gets complicated fast. Tortoise makes each recommendation traceable, then lets you explore the steps in order—or jump straight to the question you have.</p>
        </div>

        <fieldset className="method-explorer">
          <legend>Choose a step to see what Tortoise checks</legend>
          {chapters.map((chapter, index) => (
            <input
              className="chapter-radio"
              key={chapter.id}
              type="radio"
              name="tortoise-method"
              id={"chapter-" + chapter.id}
              defaultChecked={index === 0}
            />
          ))}
          <div className="method-rail" aria-label="Workflow step selector">
            {chapters.map((chapter) => (
              <label className="method-step" key={chapter.id} htmlFor={"chapter-" + chapter.id}>
                <span className="method-step-index">{chapter.number}</span>
                <span className="method-step-title">{chapter.title}</span>
                <span className="method-step-mark" aria-hidden="true">↗</span>
              </label>
            ))}
          </div>
          <div className="method-readout">
            {chapters.map((chapter) => (
              <article className={"chapter-panel chapter-" + chapter.id} key={chapter.id} aria-labelledby={"heading-" + chapter.id}>
                <div className="chapter-panel-top"><span>{chapter.number} / 04</span><span>THE TORTOISE METHOD</span></div>
                <div className="chapter-panel-body">
                  <div className="chapter-orbit" aria-hidden="true">
                    <span className="orbit-line orbit-line-one" />
                    <span className="orbit-line orbit-line-two" />
                    <span className="orbit-core"><BrandMark size={55} /></span>
                    <span className="orbit-node orbit-node-one" />
                    <span className="orbit-node orbit-node-two" />
                    <span className="orbit-node orbit-node-three" />
                  </div>
                  <div className="chapter-copy">
                    <span className="chapter-kicker">{chapter.source}</span>
                    <h3 id={"heading-" + chapter.id}>{chapter.heading}</h3>
                    <p>{chapter.copy}</p>
                  </div>
                </div>
                <div className="chapter-panel-bottom"><span>PUBLIC SOURCE</span><span>REVIEW BEFORE ACTION <i /></span></div>
              </article>
            ))}
          </div>
        </fieldset>
      </div>
    </section>
  );
}

function ProductSection() {
  return (
    <section className="product-section" id="interface" aria-labelledby="interface-title">
      <div className="page-width">
        <div className="product-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-rule" /> THE WINDOWS DESKTOP APP</p>
            <h2 id="interface-title">Clarity, down<br />to the <em>interface.</em></h2>
          </div>
          <div className="product-heading-aside">
            <p>Inventory, update checks, plan review, and safety status live in one local workspace.</p>
            <span>ILLUSTRATIVE PREVIEW · NO DEVICE DATA</span>
          </div>
        </div>

        <div className="product-frame">
          <div className="product-frame-caption"><span>PRODUCT STUDY / 01</span><span>SELECT A VIEW INSIDE</span></div>
          <ProductPreview />
          <div className="product-frame-footer"><span>DESIGNED TO EXPLAIN, NOT AUTO-APPLY</span><span>WINDOWS 11 X64</span></div>
        </div>

        <div className="product-facts" role="list" aria-label="Product principles">
          <div role="listitem"><span>01</span><strong>Local history</strong><small>Scan history stays on your PC.</small></div>
          <div role="listitem"><span>02</span><strong>Redacted by design</strong><small>Choose what diagnostic detail to share.</small></div>
          <div role="listitem"><span>03</span><strong>Recovery prepared</strong><small>Export a recovery manifest with clear limits.</small></div>
        </div>
      </div>
    </section>
  );
}

function SafetySection() {
  return (
    <section className="safety-section" id="safety" aria-labelledby="safety-title">
      <div className="page-width safety-layout">
        <div className="safety-heading">
          <p className="eyebrow"><span className="eyebrow-rule" /> AN UPDATE CAN CHANGE A LOT</p>
          <h2 id="safety-title">If it isn’t sure,<br />it <em>stops.</em></h2>
          <p>The public build is read-only. It can inventory, scan, prepare a plan, and simulate it; physical-machine driver installation is disabled.</p>
          <a className="underlined-link light-link" href={repository + "/blob/main/SAFETY.md"} target="_blank" rel="noreferrer">Read the safety policy <span aria-hidden="true">↗</span></a>
        </div>

        <div className="safety-card">
          <div className="safety-card-top"><span>UNCERTAINTY POLICY</span><span>THE PREFERRED ORDER</span></div>
          <ol className="policy-order">
            <li><span>01</span><strong>Refuse</strong></li>
            <li><span>02</span><strong>Warn</strong></li>
            <li><span>03</span><strong>Defer</strong></li>
            <li><span>04</span><strong>Hand off<br />to Windows</strong></li>
            <li className="policy-last"><span>05</span><strong>Risky<br />assumption</strong></li>
          </ol>
          <div className="safety-seal"><span className="seal-check" aria-hidden="true">✓</span><span>PUBLIC BUILD</span><strong>Driver installation<br />disabled.</strong></div>
          <div className="safety-card-bottom"><span>UNKNOWN STATE → FAIL CLOSED</span><span>NO SILENT INSTALLS</span></div>
        </div>
      </div>
    </section>
  );
}

function LicenseSection() {
  return (
    <section className="license-section" id="license" aria-labelledby="license-title">
      <div className="page-width">
        <div className="license-heading">
          <p className="eyebrow eyebrow-dark"><span className="eyebrow-rule" /> PUBLIC SOURCE · DUAL LICENSE</p>
          <h2 id="license-title">Open to explore.<br /><em>Clear about use.</em></h2>
          <p>Tortoise is free for noncommercial use under PolyForm Noncommercial. Commercial use requires a separate paid license.</p>
        </div>
        <div className="license-options">
          <article className="license-option">
            <span className="option-number">01 / NONCOMMERCIAL</span>
            <div><h3>Read it. Fork it. Learn from it.</h3><p>Personal, hobby, educational, and other qualifying noncommercial use is covered by the public license.</p></div>
            <a href={repository + "/blob/main/LICENSE"} target="_blank" rel="noreferrer">Read PolyForm Noncommercial <span aria-hidden="true">↗</span></a>
          </article>
          <article className="license-option commercial-option">
            <span className="option-number">02 / COMMERCIAL</span>
            <div><h3>Using Tortoise for business?</h3><p>Commercial use needs a separate license from the author.</p></div>
            <a href={repository + "/discussions"} target="_blank" rel="noreferrer">Ask about a commercial license <span aria-hidden="true">↗</span></a>
          </article>
        </div>
        <p className="license-footnote">The source is public. The commercial license grants rights beyond those in PolyForm Noncommercial.</p>
      </div>
    </section>
  );
}

export function LandingPage() {
  return (
    <>
      <div className="reading-line" aria-hidden="true" />
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#top" aria-label="Tortoise home">
            <BrandMark />
            <span>Tortoise</span>
            <span className="release-tag">0.1.0 alpha</span>
          </a>
          <SiteNav />
          <details className="mobile-menu">
            <summary><span>Menu</span><span className="menu-glyph" aria-hidden="true"><i /><i /></span></summary>
            <SiteNav mobile />
          </details>
        </div>
      </header>

      <main id="main">
        <HeroScene />
        <MethodSection />
        <ProductSection />
        <SafetySection />
        <LicenseSection />

        <section className="closing-section" aria-labelledby="closing-title">
          <div className="page-width closing-layout">
            <div>
              <span className="closing-kicker">TORTOISE · WINDOWS DRIVER CARE</span>
              <h2 id="closing-title">Before you update,<br /><em>understand it.</em></h2>
            </div>
            <div className="closing-actions">
              <p>Follow the source, read the safety policy, or inspect the project itself.</p>
              <a className="button button-lime" href={repository} target="_blank" rel="noreferrer">Explore Tortoise on GitHub <Arrow /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-top">
          <a className="brand footer-brand" href="#top" aria-label="Tortoise home"><BrandMark size={34} /><span>Tortoise</span></a>
          <p>Know what is installed.<br />Know what changes before you approve it.</p>
          <div className="footer-links">
            <a href={repository} target="_blank" rel="noreferrer">Repository</a>
            <a href={repository + "/blob/main/SAFETY.md"} target="_blank" rel="noreferrer">Safety</a>
            <a href={repository + "/blob/main/PRIVACY.md"} target="_blank" rel="noreferrer">Privacy</a>
            <a href={repository + "/blob/main/COMMERCIAL.md"} target="_blank" rel="noreferrer">Commercial license</a>
          </div>
        </div>
        <div className="page-width footer-bottom"><span>© 2026 Superlapie</span><span>BUILT FOR WINDOWS 11 X64</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </>
  );
}
