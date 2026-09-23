import { BrandMark } from "@/components/brand-mark";
import { ProductPreview } from "@/components/product-preview";

const repository = "https://github.com/Superlapie/Tortoise";

const workflow = [
  {
    number: "01",
    title: "Take inventory",
    copy: "Inventory Windows devices, installed drivers, and the packages associated with them.",
    source: "WINDOWS DEVICE + DRIVER-STORE INVENTORY",
  },
  {
    number: "02",
    title: "Check with Windows",
    copy: "Check recommended and optional driver updates through Windows Update, with managed policies in view.",
    source: "WINDOWS UPDATE + POLICY AWARENESS",
  },
  {
    number: "03",
    title: "Read the details",
    copy: "Review the device match, source, version change, and risk before you choose what happens next.",
    source: "REVIEWABLE UPDATE PLAN",
  },
  {
    number: "04",
    title: "Keep the final say",
    copy: "The public build can prepare and simulate a plan. Driver installation stays disabled.",
    source: "PUBLIC BUILD · READ-ONLY",
  },
];

const capabilities = [
  {
    title: "A real inventory",
    copy: "See each Windows device alongside its installed driver package.",
  },
  {
    title: "Updates from Windows",
    copy: "Check recommended and optional drivers through Windows Update.",
  },
  {
    title: "Plans with guardrails",
    copy: "Review the match, versions, risk, staleness, and preflight checks before a plan proceeds.",
  },
  {
    title: "Local records",
    copy: "Keep scan history on your PC. Export redacted diagnostics when you need them.",
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
      <a href="#product">Product</a>
      <a href="#approach">How it works</a>
      <a href="#safety">Safety</a>
      <a href="#license">License</a>
      <a className={mobile ? "mobile-github-link" : "nav-github"} href={repository} target="_blank" rel="noreferrer">
        GitHub <Arrow />
      </a>
    </nav>
  );
}

export function LandingPage() {
  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#top" aria-label="Tortoise home">
            <BrandMark />
            <span>Tortoise</span>
            <span className="release-tag">0.1.0 alpha</span>
          </a>

          <SiteNav />

          <details className="mobile-menu">
            <summary>
              <span>Menu</span>
              <span className="menu-glyph" aria-hidden="true"><i /><i /></span>
            </summary>
            <SiteNav mobile />
          </details>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-grid page-width">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-rule" /> WINDOWS DRIVER CARE, MADE CLEAR</p>
              <h1 id="hero-title">Driver updates,<br />with the why<br /><em>included.</em></h1>
              <p className="hero-lede">
                Tortoise shows what is installed, what Windows recommends, and the reasoning and risk behind a plan—before anything changes.
              </p>
              <div className="hero-actions">
                <a className="button button-lime" href="#approach">See how it works <Arrow /></a>
                <a className="text-action" href={repository} target="_blank" rel="noreferrer">Read the source <span aria-hidden="true">↗</span></a>
              </div>
              <div className="hero-status">
                <span className="status-light" />
                <span>PUBLIC BUILD</span>
                <i />
                <span>READ-ONLY</span>
              </div>
            </div>

            <ProductPreview />
          </div>

          <div className="hero-baseline page-width" role="group" aria-label="Product facts">
            <span>BUILT FOR WINDOWS 11 X64</span>
            <span>LOCAL BY DEFAULT</span>
            <span>WINDOWS UPDATE AS THE SOURCE</span>
          </div>
        </section>

        <section className="product-intro section-light" id="product" aria-labelledby="product-title">
          <div className="page-width intro-grid">
            <div>
              <p className="eyebrow eyebrow-dark"><span className="eyebrow-rule" /> WHAT THE APP DOES</p>
              <h2 id="product-title">A driver is more<br /><em>than a version number.</em></h2>
            </div>
            <div className="intro-aside">
              <span className="section-index">ABOUT TORTOISE</span>
              <p>
                A driver can affect the parts of a PC you rely on every day. Tortoise shows the proposed update, its source, and the risk before you approve a plan.
              </p>
              <a className="underlined-link" href={`${repository}#status`} target="_blank" rel="noreferrer">See what works in the alpha <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="page-width capability-list">
            {capabilities.map((item) => (
              <article className="capability-row" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="approach-section" id="approach" aria-labelledby="approach-title">
          <div className="page-width">
            <div className="approach-heading">
              <div>
                <p className="eyebrow eyebrow-dark"><span className="eyebrow-rule" /> A FOUR-STEP WORKFLOW</p>
                <h2 id="approach-title">From device<br />to decision.</h2>
              </div>
              <p className="approach-lede">Every recommendation can be traced back to the machine and the update source that produced it.</p>
            </div>

            <div className="workflow-grid">
              {workflow.map((step) => (
                <article className="workflow-step" key={step.number}>
                  <div className="workflow-number"><span>{step.number}</span></div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                  <span className="workflow-source">{step.source}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="safety-section" id="safety" aria-labelledby="safety-title">
          <div className="page-width safety-layout">
            <div className="safety-heading">
              <p className="eyebrow"><span className="eyebrow-rule" /> SAFETY IS PART OF THE PRODUCT</p>
              <h2 id="safety-title">A driver tool<br />should know<br /><em>when to stop.</em></h2>
              <p>Tortoise prefers a clear refusal to a risky guess. Its safety policy is public, and the public build does not install drivers.</p>
              <a className="underlined-link light-link" href={`${repository}/blob/main/SAFETY.md`} target="_blank" rel="noreferrer">Read the safety policy <span aria-hidden="true">↗</span></a>
            </div>

            <div className="safety-detail">
              <div className="policy-label"><span>WHEN SOMETHING IS UNCERTAIN</span><span>THE PREFERRED ORDER</span></div>
              <ol className="policy-order">
                <li><span>01</span><strong>Refuse</strong></li>
                <li><span>02</span><strong>Warn</strong></li>
                <li><span>03</span><strong>Defer</strong></li>
                <li><span>04</span><strong>Hand off<br />to Windows</strong></li>
                <li className="policy-last"><span>05</span><strong>Risky<br />assumption</strong></li>
              </ol>
              <div className="public-build-note">
                <span className="read-only-stamp">PUBLIC<br />BUILD</span>
                <div><b>Read-only by default.</b><p>Inventory, scans, plan review, and simulation are available. Physical-machine driver mutation is not validated.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="workflow-outputs section-light" aria-labelledby="outputs-title">
          <div className="page-width outputs-layout">
            <div className="outputs-heading">
              <p className="eyebrow eyebrow-dark"><span className="eyebrow-rule" /> BUILT FOR CAREFUL WORK</p>
              <h2 id="outputs-title">Your scan history<br />stays <em>local.</em></h2>
              <p>Tortoise keeps scan history on your PC, then lets you choose what diagnostic detail to share.</p>
            </div>
            <div className="output-notes">
              <article><span aria-hidden="true" /><div><h3>Machine-local history</h3><p>Scan history is stored locally in SQLite by default.</p></div></article>
              <article><span aria-hidden="true" /><div><h3>Redacted diagnostics</h3><p>Export redacted diagnostics when you choose to share support details.</p></div></article>
              <article><span aria-hidden="true" /><div><h3>Recovery preparation</h3><p>Prepare a recovery manifest, with the limits of recovery made clear.</p></div></article>
            </div>
          </div>
        </section>

        <section className="license-section" id="license" aria-labelledby="license-title">
          <div className="page-width">
            <div className="license-heading">
              <p className="eyebrow eyebrow-dark"><span className="eyebrow-rule" /> PUBLIC SOURCE · DUAL LICENSE</p>
              <h2 id="license-title">Open to learn.<br /><em>Clear about business.</em></h2>
              <p>Tortoise is free for noncommercial use under PolyForm Noncommercial. Commercial use requires a separate paid license.</p>
            </div>

            <div className="license-options">
              <article className="license-option">
                <span className="option-number">NONCOMMERCIAL</span>
                <div><h3>Read it. Fork it. Learn from it.</h3><p>Personal, hobby, educational, and other qualifying noncommercial use is covered by the public license.</p></div>
                <a href={`${repository}/blob/main/LICENSE`} target="_blank" rel="noreferrer">Read PolyForm Noncommercial <span aria-hidden="true">↗</span></a>
              </article>
              <article className="license-option commercial-option">
                <span className="option-number">COMMERCIAL</span>
                <div><h3>Shipping or using it for business?</h3><p>Products, paid services, MSP workflows, client work, and commercial redistribution need a separate license.</p></div>
                <a href={`${repository}/discussions`} target="_blank" rel="noreferrer">Ask about a commercial license <span aria-hidden="true">↗</span></a>
              </article>
            </div>
            <p className="license-footnote">The source remains public. The commercial license grants rights beyond those in the PolyForm Noncommercial license.</p>
          </div>
        </section>

        <section className="closing-section" aria-labelledby="closing-title">
          <div className="page-width closing-layout">
            <div>
              <span className="closing-kicker">TORTOISE · WINDOWS DRIVER CARE</span>
              <h2 id="closing-title">Know before<br /><em>you approve.</em></h2>
            </div>
            <div className="closing-actions">
              <p>Explore the source, read the safety policy, or follow the project as it grows.</p>
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
            <a href={`${repository}/blob/main/SAFETY.md`} target="_blank" rel="noreferrer">Safety</a>
            <a href={`${repository}/blob/main/PRIVACY.md`} target="_blank" rel="noreferrer">Privacy</a>
            <a href={`${repository}/blob/main/COMMERCIAL.md`} target="_blank" rel="noreferrer">Commercial license</a>
          </div>
        </div>
        <div className="page-width footer-bottom"><span>© 2026 Superlapie</span><span>Built for Windows 11 x64</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </>
  );
}
