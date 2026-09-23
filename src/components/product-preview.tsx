import { BrandMark } from "@/components/brand-mark";

type PreviewPage = "overview" | "devices" | "updates" | "safety";

const pages: { id: PreviewPage; label: string; icon: string }[] = [
  { id: "overview", label: "Overview", icon: "grid" },
  { id: "devices", label: "Devices", icon: "device" },
  { id: "updates", label: "Updates", icon: "updates" },
  { id: "safety", label: "Safety", icon: "shield" },
];

function PreviewIcon({ icon }: { icon: string }) {
  if (icon === "grid") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" /></svg>;
  }
  if (icon === "device") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="12" rx="1.5" /><path d="M8 20h8m-4-3v3" /></svg>;
  }
  if (icon === "updates") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 7v5h-5M4 17v-5h5" /><path d="M5 9a7 7 0 0 1 11.7-2L20 12M4 12l3.3 5A7 7 0 0 0 19 15" /></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 7 3v5c0 4.7-2.7 8-7 10-4.3-2-7-5.3-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></svg>;
}

function OverviewScreen() {
  return (
    <section className="screen-panel panel-overview" aria-labelledby="overview-heading">
      <div className="screen-heading">
        <div><span className="screen-kicker">WORKSPACE / OVERVIEW</span><h2 id="overview-heading">Overview</h2></div>
        <span className="screen-chip"><i /> NO LIVE SYSTEM DATA</span>
      </div>
      <div className="summary-grid">
        <article><span>DEVICES</span><strong>—</strong><small>Local inventory</small></article>
        <article><span>PROBLEM DEVICES</span><strong>—</strong><small>Windows device status</small></article>
        <article><span>RECOMMENDED</span><strong>—</strong><small>Windows Update</small></article>
        <article><span>OPTIONAL / RESTRICTED</span><strong>—</strong><small>Policy-aware results</small></article>
      </div>
      <div className="preview-message">
        <span className="message-index">01</span>
        <div><strong>Your machine stays yours.</strong><p>The desktop app fills this view after a local scan. This website preview never connects to your PC.</p></div>
        <span className="message-mark" aria-hidden="true">↗</span>
      </div>
    </section>
  );
}

function DevicesScreen() {
  return (
    <section className="screen-panel panel-devices" aria-labelledby="devices-heading">
      <div className="screen-heading">
        <div><span className="screen-kicker">WORKSPACE / DEVICE INVENTORY</span><h2 id="devices-heading">Devices</h2></div>
        <span className="screen-chip">LOCAL SCAN REQUIRED</span>
      </div>
      <div className="inventory-table">
        <div className="inventory-head"><span>DEVICE</span><span>CLASS</span><span>DRIVER</span><span>STATUS</span></div>
        <div className="inventory-empty">
          <span className="empty-symbol" aria-hidden="true"><i /><i /><i /></span>
          <strong>Nothing to guess at.</strong>
          <p>When you scan, Tortoise shows the device, manufacturer, driver version, status, and any associated update.</p>
        </div>
      </div>
      <div className="screen-footnote"><span className="footnote-rule" /> Windows device and driver-store inventory</div>
    </section>
  );
}

function UpdatesScreen() {
  return (
    <section className="screen-panel panel-updates" aria-labelledby="updates-heading">
      <div className="screen-heading">
        <div><span className="screen-kicker">WORKSPACE / UPDATE REVIEW</span><h2 id="updates-heading">Updates</h2></div>
        <span className="screen-chip source-chip"><i /> WINDOWS UPDATE</span>
      </div>
      <div className="update-panel">
        <div className="update-panel-top"><span className="update-symbol" aria-hidden="true">↗</span><span>THE SOURCE MATTERS</span><span className="optional-tag">RECOMMENDED + OPTIONAL</span></div>
        <h3>Only review what Windows says applies.</h3>
        <p>Tortoise groups applicable driver updates and shows the device match, classification, current and proposed versions, source, and risk context.</p>
        <div className="update-fields">
          <div><span>PROVIDER</span><b>Windows Update</b></div>
          <div><span>INSTALLATION</span><b>Disabled in public builds</b></div>
          <div><span>YOUR NEXT STEP</span><b>Review the plan</b></div>
        </div>
      </div>
      <div className="screen-footnote"><span className="footnote-rule" /> Managed update policies are respected</div>
    </section>
  );
}

function SafetyScreen() {
  return (
    <section className="screen-panel panel-safety" aria-labelledby="safety-heading">
      <div className="screen-heading">
        <div><span className="screen-kicker">WORKSPACE / SAFETY</span><h2 id="safety-heading">Safety first</h2></div>
        <span className="screen-chip safety-chip">PUBLIC BUILD</span>
      </div>
      <div className="safety-screen">
        <div className="safety-screen-main"><span>PUBLIC BUILD STATUS</span><strong>Driver installation<br />is disabled.</strong><p>Inventory, update checks, plan review, and simulation are available in this build.</p></div>
        <ul><li><i /> No silent installs</li><li><i /> No driver mirrors</li><li><i /> Unknown state fails closed</li></ul>
      </div>
      <div className="screen-footnote"><span className="footnote-rule" /> Read the full safety policy in the repository</div>
    </section>
  );
}

export function ProductPreview() {
  return (
    <div className="product-stage" id="product-preview">
      <div className="product-stage-label"><span>WINDOWS DESKTOP APP</span><span>SELECT A PAGE TO PREVIEW <i /></span></div>
      <fieldset className="desktop-window">
        <legend className="preview-legend">Interactive Tortoise app preview. Choose a screen to view.</legend>
        {pages.map((page, index) => (
          <input
            className="preview-radio"
            key={page.id}
            type="radio"
            name="tortoise-preview"
            id={`preview-${page.id}`}
            value={page.id}
            defaultChecked={index === 0}
          />
        ))}
        <div className="window-titlebar">
          <div className="window-app-name"><BrandMark size={23} /><span>Tortoise</span><small>0.1.0-alpha</small></div>
          <div className="window-controls" aria-hidden="true"><i /><i /><i /></div>
        </div>

        <div className="desktop-body">
          <aside className="desktop-sidebar">
            <div className="desktop-identity"><strong>Tortoise</strong><span>Transparent Windows<br />driver management.</span></div>
            <div className="desktop-nav">
              {pages.map((page) => (
                <label key={page.id} className="desktop-nav-item" htmlFor={`preview-${page.id}`}>
                  <PreviewIcon icon={page.icon} />{page.label}
                </label>
              ))}
            </div>
            <div className="desktop-sidebar-footer"><span className="sidebar-status-dot" /> LOCAL WORKSPACE<br /><span>WINDOWS 11 X64</span></div>
          </aside>

          <div className="desktop-main">
            <div className="desktop-safety-banner"><span>PUBLIC BUILD</span><i /> Read-only — driver installation is disabled</div>
            <div className="desktop-screen">
              <OverviewScreen />
              <DevicesScreen />
              <UpdatesScreen />
              <SafetyScreen />
            </div>
          </div>
        </div>
        <div className="window-statusbar"><span><i /> LOCAL WORKSPACE</span><span>ILLUSTRATIVE APP VIEW</span></div>
      </fieldset>
    </div>
  );
}
