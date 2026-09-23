"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from "react";

type DemoTab = "overview" | "devices" | "updates" | "safety";

const demoTabs: { id: DemoTab; label: string; number: string }[] = [
  { id: "overview", label: "Overview", number: "01" },
  { id: "devices", label: "Devices", number: "02" },
  { id: "updates", label: "Updates", number: "03" },
  { id: "safety", label: "Safety", number: "04" },
];

const demoDescriptions: Record<DemoTab, { title: string; description: string }> = {
  overview: {
    title: "Everything in view.",
    description:
      "A readable overview of devices, available updates, and scan history—without pressure to update everything.",
  },
  devices: {
    title: "Know what’s on the system.",
    description:
      "Review the device inventory and related driver packages using Windows’ own device information.",
  },
  updates: {
    title: "A recommendation is a conversation.",
    description:
      "See the source, applicability, and risk context before deciding whether an update plan makes sense.",
  },
  safety: {
    title: "The guardrails are visible.",
    description:
      "Understand what the current public build can do—and where it deliberately stops.",
  },
};

const guideMessages = [
  "Little reminder: public builds show you the plan; they don’t install drivers.",
  "Tortoise checks Windows Update instead of sending you to mystery driver sites.",
  "Not sure about a match? Tortoise would rather stop than guess.",
  "Your scan history lives on your machine by default.",
];

const workflowSteps = [
  {
    id: "01",
    label: "INVENTORY",
    title: "Map the machine",
    copy: "See devices, installed drivers, and their associations in one readable inventory.",
    caption: "Read-only discovery",
    icon: "device",
  },
  {
    id: "02",
    label: "COMPARE",
    title: "Ask Windows",
    copy: "Check recommended and optional driver updates through Windows Update, with managed policies in mind.",
    caption: "Windows as the source",
    icon: "windows",
  },
  {
    id: "03",
    label: "REVIEW",
    title: "Choose with context",
    copy: "Inspect a frozen plan, preflight checks, and risk notes before any approved next step.",
    caption: "You stay in control",
    icon: "plan",
  },
] as const;

const capabilities = [
  {
    id: "01 / SEE",
    title: "Driver & device inventory",
    copy: "Inventory Windows devices and driver-store packages, with device/package associations.",
    icon: "circles",
  },
  {
    id: "02 / CHECK",
    title: "Windows Update scan",
    copy: "Review recommended and optional driver updates, with managed-policy awareness.",
    icon: "scan",
  },
  {
    id: "03 / PLAN",
    title: "Explainable recommendations",
    copy: "Combine device, update, and risk information into reviewable plans.",
    icon: "plan",
  },
  {
    id: "04 / PREPARE",
    title: "History & diagnostics",
    copy: "Keep local scan history and export redacted diagnostics or recovery manifests.",
    icon: "history",
  },
] as const;

function BrandMark({ size = 38 }: { size?: number }) {
  return (
    <Image
      src="/tortoise-mark.svg"
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
      unoptimized
    />
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M4 12 12 4M5 4h7v7" />
    </svg>
  );
}

function DemoPanel({
  activeTab,
  explanationOpen,
  setExplanationOpen,
}: {
  activeTab: DemoTab;
  explanationOpen: boolean;
  setExplanationOpen: (value: boolean) => void;
}) {
  if (activeTab === "devices") {
    return (
      <section className="demo-panel" id="product-preview-panel" role="tabpanel" aria-labelledby="tab-devices">
        <div className="panel-intro">
          <div>
            <span className="app-overline">DEVICE INVENTORY</span>
            <h4>Know what’s on the system.</h4>
          </div>
          <span className="count-pill">EXAMPLE RECORDS</span>
        </div>
        <div className="device-table">
          <div className="table-labels"><span>DEVICE</span><span>DRIVER</span><span>STATUS</span></div>
          <div className="device-row"><span className="device-name"><i className="device-icon device-network">⌁</i><b>Network adapter</b></span><span>Installed package</span><span className="status-tag"><i /> Inventoried</span></div>
          <div className="device-row"><span className="device-name"><i className="device-icon device-display">▣</i><b>Display adapter</b></span><span>Installed package</span><span className="status-tag"><i /> Inventoried</span></div>
          <div className="device-row"><span className="device-name"><i className="device-icon device-audio">◖</i><b>Audio controller</b></span><span>Installed package</span><span className="status-tag"><i /> Inventoried</span></div>
        </div>
        <p className="panel-footnote">Example labels only. Tortoise reads device and driver-store inventory using Windows mechanisms.</p>
      </section>
    );
  }

  if (activeTab === "updates") {
    return (
      <section className="demo-panel" id="product-preview-panel" role="tabpanel" aria-labelledby="tab-updates">
        <div className="panel-intro">
          <div><span className="app-overline">WINDOWS UPDATE</span><h4>Recommendations, explained.</h4></div>
          <span className="count-pill count-pill-green">NO AUTO-INSTALL</span>
        </div>
        <article className="recommendation-card">
          <div className="recommendation-icon">↻</div>
          <div className="recommendation-main">
            <span className="recommendation-type">EXAMPLE RECOMMENDATION · OPTIONAL</span>
            <h5>Driver update available</h5>
            <p>Windows Update is the source. Tortoise surfaces the match, category, and risk context for review.</p>
            <button
              className="explain-toggle"
              type="button"
              aria-expanded={explanationOpen}
              aria-controls="why-recommended"
              onClick={() => setExplanationOpen(!explanationOpen)}
            >
              <span className="toggle-plus">+</span> Why was this recommended?
            </button>
            {explanationOpen && (
              <div className="why-explainer" id="why-recommended">
                Recommendations combine the installed device and driver information with updates Windows reports as applicable. Unknown safety-critical details should stop the flow for review.
              </div>
            )}
          </div>
          <span className="recommendation-arrow">↗</span>
        </article>
        <p className="panel-footnote">This is a site preview, not a real update offer or compatibility result.</p>
      </section>
    );
  }

  if (activeTab === "safety") {
    return (
      <section className="demo-panel" id="product-preview-panel" role="tabpanel" aria-labelledby="tab-safety">
        <div className="safety-preview">
          <div className="safety-seal"><span>✓</span></div>
          <div><span className="app-overline">PUBLIC BUILD STATUS</span><h4>Read-only by design.</h4><p>Scan, inventory, plan, and simulate. Driver installation is disabled in public builds.</p></div>
        </div>
        <div className="safety-checks"><div><span>✓</span> No silent installs</div><div><span>✓</span> No third-party driver mirrors</div><div><span>✓</span> Unknown state fails closed</div></div>
        <Link className="safety-preview-link" href="#safety">Read the safety approach <span>↘</span></Link>
      </section>
    );
  }

  return (
    <section className="demo-panel" id="product-preview-panel" role="tabpanel" aria-labelledby="tab-overview">
      <div className="overview-cards">
        <article className="metric-card metric-card-green">
          <div className="metric-top"><span>DEVICE INVENTORY</span><span className="metric-icon">⌘</span></div>
          <strong>Ready to review</strong><small>Inventory is shown from a sample scan</small>
          <div className="metric-line"><span /></div>
        </article>
        <article className="metric-card">
          <div className="metric-top"><span>UPDATE CHECK</span><span className="metric-icon metric-icon-gold">↻</span></div>
          <strong>Windows Update</strong><small>Recommendations with context</small>
          <div className="source-chip"><span /> SOURCE CONNECTED</div>
        </article>
      </div>
      <div className="activity-card">
        <div className="activity-head">
          <div><span className="app-overline">RECENT ACTIVITY</span><h4>A calm view of system changes</h4></div>
          <Link className="text-button" href="#product">View inventory <span>↗</span></Link>
        </div>
        <div className="activity-row"><span className="activity-symbol symbol-scan">⌕</span><div><b>Driver inventory</b><small>Example entry · Network adapter</small></div><span className="activity-state">INVENTORIED</span><time>Today</time></div>
        <div className="activity-row"><span className="activity-symbol symbol-check">✓</span><div><b>Windows Update check</b><small>Example entry · Review available recommendations</small></div><span className="activity-state state-warm">REVIEW FIRST</span><time>Today</time></div>
      </div>
    </section>
  );
}

function WorkflowIcon({ icon }: { icon: (typeof workflowSteps)[number]["icon"] }) {
  if (icon === "windows") {
    return <div className="workflow-icon workflow-icon-windows" aria-hidden="true"><span /><span /><span /><span /></div>;
  }
  if (icon === "plan") {
    return <div className="workflow-icon workflow-icon-plan" aria-hidden="true"><span>✓</span><i /><i /></div>;
  }
  return <div className="workflow-icon workflow-icon-device" aria-hidden="true"><span className="device-chip" /><i /><i /><i /><i /></div>;
}

function CapabilityIcon({ icon }: { icon: (typeof capabilities)[number]["icon"] }) {
  if (icon === "scan") return <span className="cap-icon cap-icon-scan" aria-hidden="true">⌕</span>;
  if (icon === "history") return <span className="cap-icon cap-icon-history" aria-hidden="true">↺</span>;
  if (icon === "plan") return <span className="cap-icon cap-icon-plan" aria-hidden="true"><span /><i /><i /></span>;
  return <span className="cap-icon cap-icon-circles" aria-hidden="true"><i /><i /><i /></span>;
}

export function LandingPage() {
  const [activeTab, setActiveTab] = useState<DemoTab>("overview");
  const [explanationOpen, setExplanationOpen] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [guideOpen, setGuideOpen] = useState(false);
  const [guideIndex, setGuideIndex] = useState(-1);
  const [guideMessage, setGuideMessage] = useState(guideMessages[0]);
  const scanTimeout = useRef<number | null>(null);

  useEffect(() => () => {
    if (scanTimeout.current !== null) window.clearTimeout(scanTimeout.current);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const updateProgress = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
      root.style.setProperty("--scroll-progress", `${Math.min(100, Math.max(0, progress))}%`);
    };
    const updatePointer = (event: globalThis.PointerEvent) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });
    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("pointermove", updatePointer, { passive: true });
    }

    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => revealObserver.observe(item));

    const sectionNotes = new Map<string, string>([
      ["product", guideMessages[0]],
      ["workflow", guideMessages[1]],
      ["safety", guideMessages[2]],
      ["license", "For commercial use, check the licensing page before shipping anything."],
    ]);
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || guideOpen) return;
        const message = sectionNotes.get((entry.target as HTMLElement).id);
        if (message) setGuideMessage(message);
      });
    }, { rootMargin: "-35% 0px -45% 0px" });
    ["product", "workflow", "safety", "license"].forEach((id) => {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      window.removeEventListener("pointermove", updatePointer);
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, [guideOpen]);

  const activateTab = (tab: DemoTab, focus = false) => {
    setActiveTab(tab);
    setExplanationOpen(false);
    if (focus) document.getElementById(`tab-${tab}`)?.focus();
  };

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const current = demoTabs.findIndex((tab) => tab.id === activeTab);
    const directions: Record<string, number> = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    const move = directions[event.key];
    if (move === undefined) return;
    event.preventDefault();
    const next = (current + move + demoTabs.length) % demoTabs.length;
    activateTab(demoTabs[next].id, true);
  };

  const handleHeroPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    const image = event.currentTarget.querySelector<HTMLElement>(".hero-mascot");
    image?.style.setProperty("--tilt-x", `${(-y * 4).toFixed(2)}deg`);
    image?.style.setProperty("--tilt-y", `${(x * 5).toFixed(2)}deg`);
  };

  const handleHeroPointerLeave = (event: PointerEvent<HTMLDivElement>) => {
    const image = event.currentTarget.querySelector<HTMLElement>(".hero-mascot");
    image?.style.setProperty("--tilt-x", "0deg");
    image?.style.setProperty("--tilt-y", "0deg");
  };

  const handleScanPreview = () => {
    if (scanTimeout.current !== null) window.clearTimeout(scanTimeout.current);
    setScanComplete(true);
    scanTimeout.current = window.setTimeout(() => setScanComplete(false), 1500);
  };

  const toggleGuide = () => {
    const nextOpen = !guideOpen;
    setGuideOpen(nextOpen);
    if (nextOpen) {
      const nextIndex = (guideIndex + 1) % guideMessages.length;
      setGuideIndex(nextIndex);
      setGuideMessage(guideMessages[nextIndex]);
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="reading-progress" aria-hidden="true" />
        <div className="nav-shell mx-auto flex h-full items-center justify-between">
          <Link className="brand inline-flex items-center" href="#top" onClick={closeMenu} aria-label="Tortoise home">
            <BrandMark />
            <span>Tortoise</span>
            <span className="brand-beta">alpha</span>
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span />
          </button>
          <nav className={`primary-nav ${menuOpen ? "is-open" : ""}`} id="primary-nav" aria-label="Main navigation">
            <Link href="#product" onClick={closeMenu}>Product</Link>
            <Link href="#safety" onClick={closeMenu}>Safety</Link>
            <Link href="#license" onClick={closeMenu}>License</Link>
            <a className="nav-cta inline-flex items-center" href="https://github.com/superlapie/tortoise" target="_blank" rel="noreferrer">
              Explore on GitHub <ArrowIcon />
            </a>
          </nav>
        </div>
      </header>

      <main className="site-main relative z-[1]" id="main">
        <section className="hero section-wrap relative grid items-center" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow reveal"><span className="eyebrow-dot" /> WINDOWS DRIVER CARE · BUILT WITH CAUTION</div>
            <h1 className="reveal" id="hero-title">Driver updates,<br /><em>with the why</em><br />included.</h1>
            <p className="hero-lede reveal">Know what’s installed. Understand what Windows recommends. See the reasoning and risk before you decide what happens next.</p>
            <div className="hero-actions reveal flex flex-wrap items-center gap-3">
              <Link className="button button-primary inline-flex items-center" href="#product">See how it works <span aria-hidden="true">↓</span></Link>
              <a className="button button-quiet inline-flex items-center" href="https://github.com/superlapie/tortoise" target="_blank" rel="noreferrer">View the source <span aria-hidden="true">↗</span></a>
            </div>
            <div className="hero-footnote reveal"><span className="tiny-shield" aria-hidden="true">✓</span><span>Local by default <i>·</i> Public builds are read-only</span></div>
          </div>

          <div
            className="hero-visual reveal"
            role="group"
            onPointerMove={handleHeroPointerMove}
            onPointerLeave={handleHeroPointerLeave}
            aria-label="Tortoise mascot illustration"
          >
            <div className="hero-visual-glow" aria-hidden="true" />
            <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
            <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
            <div className="hero-mascot-wrap" data-parallax>
              <Image className="hero-mascot" src="/images/tortoise-hero.webp" alt="A sculpted green tortoise mascot with a shell patterned like connected devices." width={1100} height={1100} priority sizes="(max-width: 820px) 92vw, 54vw" />
            </div>
            <div className="float-note note-local" aria-hidden="true"><span className="note-icon note-icon-pulse"><span /></span><span><b>Private by default</b><small>Your inventory stays local</small></span></div>
            <div className="float-note note-source" aria-hidden="true"><span className="note-icon note-icon-windows"><span /><span /><span /><span /></span><span><b>Trusted source</b><small>Windows Update</small></span></div>
            <div className="hero-caption"><span className="caption-line" /> TAKE THE TIME TO GET IT RIGHT</div>
          </div>
          <Link className="scroll-cue" href="#signal" aria-label="Scroll to product principles"><span />SCROLL TO EXPLORE</Link>
        </section>

        <section className="signal-strip" id="signal" aria-label="Tortoise principles">
          <div className="signal-inner mx-auto grid grid-cols-3 items-center">
            <div><span className="signal-mark">01</span><span>See what’s already there</span></div>
            <div><span className="signal-mark">02</span><span>Use Windows’ own recommendations</span></div>
            <div><span className="signal-mark">03</span><span>Review before anything changes</span></div>
          </div>
        </section>

        <section className="product-section section-wrap" id="product" aria-labelledby="product-title">
          <div className="section-heading">
            <div className="section-copy"><div className="eyebrow"><span className="eyebrow-dot" /> A BETTER KIND OF DRIVER TOOL</div><h2 id="product-title">No mystery buttons.<br /><em>Just a clear picture.</em></h2></div>
            <p className="section-intro">Driver utilities often make big promises and hide the details. Tortoise starts with a transparent inventory, then explains what Windows has available and why it may matter.</p>
          </div>

          <div className="product-demo">
            <div className="demo-side-note">
              <div className="demo-index">01 <span>/ 04</span></div>
              <h3>{demoDescriptions[activeTab].title}</h3>
              <p>{demoDescriptions[activeTab].description}</p>
              <div className="demo-controls" role="tablist" aria-label="Product preview sections">
                {demoTabs.map((tab) => (
                  <button
                    className={`demo-tab ${activeTab === tab.id ? "is-active" : ""}`}
                    id={`tab-${tab.id}`}
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    aria-controls="product-preview-panel"
                    tabIndex={activeTab === tab.id ? 0 : -1}
                    onClick={() => activateTab(tab.id)}
                    onKeyDown={handleTabKeyDown}
                  >
                    <span>{tab.number}</span>{tab.label}<i>↗</i>
                  </button>
                ))}
              </div>
              <p className="demo-disclaimer"><span aria-hidden="true">ⓘ</span> Illustrative preview, not a live scan.</p>
            </div>

            <div className="app-stage">
              <div className="app-window">
                <div className="app-topbar">
                  <div className="window-controls" aria-hidden="true"><i /><i /><i /></div>
                  <div className="app-wordmark"><BrandMark size={20} /><span>Tortoise</span></div>
                  <div className="sample-badge"><span /> SAMPLE DATA</div>
                </div>
                <div className="app-body">
                  <aside className="app-sidebar" aria-label="Preview navigation">
                    <span className="sidebar-label">WORKSPACE</span>
                    {demoTabs.map((tab, index) => (
                      <div className={`sidebar-item ${activeTab === tab.id ? "active" : ""}`} key={tab.id}>
                        <span className={`side-icon icon-${tab.id}`}>{["◈", "⌘", "↻", "◇"][index]}</span>{tab.label}
                      </div>
                    ))}
                    <div className="sidebar-spacer" />
                    <div className="sidebar-profile"><span className="profile-orb">T</span><span>Local machine<small>Windows 11</small></span><span className="profile-dots">···</span></div>
                  </aside>

                  <div className="app-content">
                    <div className="app-page-head">
                      <div><span className="app-overline">{activeTab === "overview" ? "MONDAY · SAMPLE SCAN" : activeTab.toUpperCase()}</span><h3>{demoTabs.find((tab) => tab.id === activeTab)?.label}</h3></div>
                      <button className="scan-button" type="button" onClick={handleScanPreview}><span>{scanComplete ? "✓" : "↻"}</span>{scanComplete ? "Preview refreshed" : "Scan preview"}</button>
                    </div>
                    <DemoPanel activeTab={activeTab} explanationOpen={explanationOpen} setExplanationOpen={setExplanationOpen} />
                  </div>
                </div>
                <div className="app-statusbar"><span><i /> LOCAL WORKSPACE</span><span>ILLUSTRATIVE INTERFACE <b>•</b> NOT A PRODUCT SCREENSHOT</span></div>
              </div>
              <div className="stage-decoration stage-decoration-a" aria-hidden="true">T</div>
              <div className="stage-decoration stage-decoration-b" aria-hidden="true"><span /><span /><span /></div>
            </div>
          </div>
        </section>

        <section className="workflow-section" id="workflow" aria-labelledby="workflow-title">
          <div className="section-wrap workflow-wrap">
            <div className="workflow-heading">
              <div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> THE TORTOISE APPROACH</div>
              <h2 id="workflow-title">Good decisions<br /><em>start with good context.</em></h2>
              <p>Know what’s there. Understand what’s being suggested. Keep the final say.</p>
            </div>
            <div className="workflow-grid">
              {workflowSteps.map((step) => (
                <article className="workflow-card" data-reveal key={step.id}>
                  <div className="workflow-number">{step.id} <span>—</span> {step.label}</div>
                  <WorkflowIcon icon={step.icon} />
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                  <div className="workflow-bottom"><span>{step.caption}</span><b>↗</b></div>
                </article>
              ))}
            </div>
            <div className="workflow-thread" aria-hidden="true"><span /><span /></div>
          </div>
        </section>

        <section className="safety-section section-wrap" id="safety" aria-labelledby="safety-title">
          <div className="safety-topline"><div className="eyebrow"><span className="eyebrow-dot" /> THE MOST IMPORTANT FEATURE</div><span className="safety-stamp">SAFETY<br />FIRST</span></div>
          <div className="safety-main">
            <div className="safety-copy">
              <h2 id="safety-title">A driver tool should<br /><em>know when to stop.</em></h2>
              <p>Tortoise prefers a clear refusal to a risky guess. It uses supported Windows mechanisms, avoids arbitrary driver downloads, and blocks on unknown safety-critical state.</p>
              <a className="text-link" href="https://github.com/superlapie/tortoise/blob/main/SAFETY.md" target="_blank" rel="noreferrer">Read the safety policy <span>↗</span></a>
            </div>
            <div className="safety-visual" data-reveal>
              <div className="safety-flow-label">WHEN SOMETHING IS UNCERTAIN</div>
              <div className="safety-flow">
                <div className="flow-node flow-node-main"><span>01</span><b>REFUSE</b><i>First choice</i></div><div className="flow-arrow">→</div>
                <div className="flow-node"><span>02</span><b>WARN</b></div><div className="flow-arrow">→</div>
                <div className="flow-node"><span>03</span><b>DEFER</b></div><div className="flow-arrow">→</div>
                <div className="flow-node"><span>04</span><b>HAND OFF<br />TO WINDOWS</b></div>
              </div>
              <div className="safety-flow-foot"><span className="flow-dash" /> Never make a risky assumption.</div>
              <div className="public-build-card"><div className="public-build-icon">✓</div><div><span>PUBLIC BUILD</span><b>Driver installation is disabled</b><small>Read-only workflows are available today.</small></div><span className="public-build-state"><i /> SAFE MODE</span></div>
            </div>
          </div>
          <div className="safety-bottom">
            <div><span className="bottom-icon">01</span><span><b>No “update everything” button</b><small>Every recommendation stays reviewable.</small></span></div>
            <div><span className="bottom-icon">02</span><span><b>No third-party driver mirrors</b><small>Windows Update is the V1 install source.</small></span></div>
            <div><span className="bottom-icon">03</span><span><b>Recovery is prepared, not promised</b><small>Risk is reduced, never waved away.</small></span></div>
          </div>
        </section>

        <section className="capabilities-section" aria-labelledby="capabilities-title">
          <div className="section-wrap capabilities-wrap">
            <div className="capabilities-heading">
              <div><div className="eyebrow"><span className="eyebrow-dot" /> AVAILABLE IN THE ALPHA</div><h2 id="capabilities-title">Useful today.<br /><em>Careful by design.</em></h2></div>
              <p>Tortoise is early-stage software. The capabilities below reflect the current public build—not a promise of unattended driver installation.</p>
            </div>
            <div className="capability-grid">
              {capabilities.map((capability) => (
                <article className="capability-card" data-reveal key={capability.id}>
                  <CapabilityIcon icon={capability.icon} />
                  <div><span className="cap-label">{capability.id}</span><h3>{capability.title}</h3><p>{capability.copy}</p></div>
                  <span className="cap-arrow">↗</span>
                </article>
              ))}
            </div>
            <div className="alpha-note"><span className="alpha-note-dot" /><span><b>Alpha status:</b> real driver installation in the public build is disabled. Physical-machine mutation is not validated.</span><a href="https://github.com/superlapie/tortoise#status" target="_blank" rel="noreferrer">See current status <span>↗</span></a></div>
          </div>
        </section>

        <section className="license-section section-wrap" id="license" aria-labelledby="license-title">
          <div className="license-heading"><div className="eyebrow"><span className="eyebrow-dot" /> OPEN SOURCE, WITH CLEAR TERMS</div><h2 id="license-title">Start for free.<br /><em>License for business.</em></h2><p>Tortoise is public source under a simple dual-licensing model.</p></div>
          <div className="license-cards">
            <article className="license-card" data-reveal>
              <div className="license-card-top"><span className="license-icon license-icon-leaf">✳</span><span className="license-kicker">POLYFORM NONCOMMERCIAL</span></div>
              <h3>Free for noncommercial use.</h3>
              <p>Use Tortoise for personal learning, hobby projects, education, and other qualifying noncommercial purposes.</p>
              <ul><li>Read and learn from the source</li><li>Fork and experiment</li><li>Contribute improvements</li></ul>
              <a className="license-link" href="https://github.com/superlapie/tortoise/blob/main/LICENSE" target="_blank" rel="noreferrer">Read the license <span>↗</span></a>
            </article>
            <article className="license-card license-card-commercial" data-reveal>
              <div className="license-card-top"><span className="license-icon license-icon-briefcase">↗</span><span className="license-kicker">COMMERCIAL LICENSE</span></div>
              <h3>Using Tortoise commercially?</h3>
              <p>A separate paid license is required for commercial products, client work, MSP workflows, or commercial redistribution.</p>
              <ul><li>Terms scoped to your use case</li><li>Pricing agreed per customer</li><li>Ask before shipping if unsure</li></ul>
              <a className="license-link" href="https://github.com/superlapie/tortoise/blob/main/COMMERCIAL.md#how-to-get-a-commercial-license" target="_blank" rel="noreferrer">Explore commercial licensing <span>↗</span></a>
            </article>
          </div>
          <p className="license-footnote">The license text governs. This summary helps you find the right terms; it does not replace them.</p>
        </section>

        <section className="faq-section" aria-labelledby="faq-title">
          <div className="section-wrap faq-wrap">
            <div className="faq-intro"><div className="eyebrow"><span className="eyebrow-dot" /> GOOD QUESTIONS</div><h2 id="faq-title">Before you<br /><em>take the next step.</em></h2><p>Driver management deserves honest answers. Here are a few up front.</p></div>
            <div className="faq-list">
              <details className="faq-item"><summary><span>Can Tortoise install a driver today?</span><i /></summary><div className="faq-answer">No. Driver installation is disabled in public builds. The current app supports read-only inventory, Windows Update scans, recommendations, planning, and simulation. A real install path is restricted to the disposable-VM lab workflow.</div></details>
              <details className="faq-item"><summary><span>Where do updates come from?</span><i /></summary><div className="faq-answer">Tortoise uses Windows Update as its driver update source. It does not use third-party driver mirrors or scrapers.</div></details>
              <details className="faq-item"><summary><span>Does my driver inventory go to the cloud?</span><i /></summary><div className="faq-answer">Tortoise is local-only by default. Scan history is stored locally, and diagnostics export is redacted. See the privacy documentation for details.</div></details>
              <details className="faq-item"><summary><span>Can a business use the open-source version?</span><i /></summary><div className="faq-answer">Commercial use requires a separate paid license. That includes commercial products and services, MSP use for client machines, internal tools supporting commercial products, and paid client work. Exact scope and pricing are discussed per customer.</div></details>
              <div className="faq-more"><span>Still curious?</span><a href="https://github.com/superlapie/tortoise" target="_blank" rel="noreferrer">Browse the repository <span>↗</span></a></div>
            </div>
          </div>
        </section>

        <section className="closing-cta section-wrap" aria-labelledby="closing-title">
          <div className="closing-art" aria-hidden="true"><Image src="/images/tortoise-hero.webp" alt="" width={1100} height={1100} loading="lazy" sizes="(max-width: 600px) 90vw, 50vw" /></div>
          <div className="closing-copy"><span className="closing-overline">TAKE YOUR TIME. TAKE CONTROL.</span><h2 id="closing-title">Make the next<br /><em>driver decision</em><br />a better one.</h2><div className="closing-actions"><a className="button button-light" href="https://github.com/superlapie/tortoise" target="_blank" rel="noreferrer">Explore the source <span>↗</span></a><Link className="closing-text-link" href="#license">Understand the license <span>↓</span></Link></div></div>
          <div className="closing-stamp" aria-hidden="true">SLOW<br />IS<br />SMOOTH</div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main section-wrap">
          <div className="footer-branding"><Link className="brand brand-footer" href="#top"><BrandMark size={35} /><span>Tortoise</span></Link><p>Transparent Windows driver management.<br />Built with care. Local by default.</p></div>
          <div className="footer-links">
            <div><span>EXPLORE</span><Link href="#product">Product</Link><Link href="#safety">Safety approach</Link><Link href="#license">Licensing</Link></div>
            <div><span>PROJECT</span><a href="https://github.com/superlapie/tortoise" target="_blank" rel="noreferrer">GitHub repository ↗</a><a href="https://github.com/superlapie/tortoise/blob/main/README.md" target="_blank" rel="noreferrer">Documentation ↗</a><a href="https://github.com/superlapie/tortoise/blob/main/PRIVACY.md" target="_blank" rel="noreferrer">Privacy ↗</a></div>
          </div>
        </div>
        <div className="footer-bottom section-wrap"><span>© 2026 Superlapie · Tortoise is currently in alpha</span><Link href="#top">Back to the top ↑</Link><span>Designed for deliberate decisions.</span></div>
      </footer>

      <div className={`guide-widget ${guideOpen ? "is-open" : ""}`}>
        <div className="guide-bubble" id="guide-bubble" aria-live="polite" hidden={!guideOpen}><span className="guide-bubble-kicker"><span /> A NOTE FROM TORI</span><p>{guideMessage}</p></div>
        <button className="guide-button" type="button" aria-expanded={guideOpen} aria-controls="guide-bubble" aria-label={guideOpen ? "Close Tortoise tip" : "Open a Tortoise tip"} onClick={toggleGuide}>
          <svg viewBox="0 0 64 64" aria-hidden="true"><path className="guide-shell" d="M13 35c0-13 9-23 21-23 11 0 19 8 20 20 5-1 9 2 9 6s-4 7-9 6c-3 8-10 12-21 12H18c-5 0-8-3-8-8v-5c0-4 1-6 3-8Z" /><path className="guide-shell-line" d="M18 32c1-8 7-14 16-14 9 0 14 5 16 13M27 19v28M37 14l4 10M20 48l-3 6M47 48l3 6" /><circle className="guide-eye" cx="56" cy="34" r="1.6" /><path className="guide-foot" d="M14 49c-1 4-4 6-7 5M48 50c2 4 5 5 8 3" /></svg>
          <span className="guide-button-label">Tori</span><span className="guide-ping" aria-hidden="true" />
        </button>
      </div>
    </>
  );
}
