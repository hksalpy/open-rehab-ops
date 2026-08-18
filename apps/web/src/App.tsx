const equipment = [
  { label: 'Parallel Bars A', meta: 'Gait training · Gym 1', status: 'Available', tone: 'good' },
  { label: 'Cycle Ergometer 2', meta: 'Ergometer · Therapy Bay 3', status: 'In use', tone: 'info' },
  { label: 'Transfer Hoist B', meta: 'Transfer aid · Equipment Store', status: 'Service due', tone: 'warn' }
];

export function App() {
  return (
    <div className="shell">
      <header className="topbar">
        <a className="brand" href="#main" aria-label="OpenRehabOps home"><span aria-hidden="true">OR</span> OpenRehabOps</a>
        <nav aria-label="Primary"><a aria-current="page" href="#overview">Overview</a><a href="#equipment">Equipment</a><a href="#workflows">Workflows</a></nav>
        <span className="demo-label">Synthetic demo</span>
      </header>
      <main id="main">
        <section className="hero" id="overview">
          <div><p className="eyebrow">Clinic operations · Tuesday, 18 August</p><h1>A clearer view of rehabilitation operations.</h1><p>Coordinate equipment availability, service attention, and active workflows from one accessible workspace.</p></div>
          <button type="button">Register equipment</button>
        </section>
        <section className="metrics" aria-label="Operations summary">
          <article><span>Equipment</span><strong>3</strong><small>1 available</small></article>
          <article><span>Needs attention</span><strong>1</strong><small>Service due</small></article>
          <article><span>Active workflows</span><strong>1</strong><small>1 scheduled</small></article>
          <article><span>System status</span><strong className="status-word">Operational</strong><small>Demo services healthy</small></article>
        </section>
        <section className="panel" id="equipment">
          <div className="panel-heading"><div><p className="eyebrow">Equipment registry</p><h2>Today's equipment</h2></div><a href="#all">View all <span aria-hidden="true">→</span></a></div>
          <div className="equipment-list">
            {equipment.map((item) => <article className="equipment-row" key={item.label}><div className="equipment-icon" aria-hidden="true">+</div><div><h3>{item.label}</h3><p>{item.meta}</p></div><span className={`pill ${item.tone}`}>{item.status}</span></article>)}
          </div>
        </section>
        <section className="two-column" id="workflows">
          <article className="panel compact"><p className="eyebrow">Next workflow</p><h2>Mobility session setup</h2><p className="muted">Subject demo-subject-17 · Parallel Bars A</p><div className="timeline"><span>09:30</span><div><strong>Scheduled</strong><p>Gym 1 · Staff-owned operational task</p></div></div></article>
          <aside className="notice"><strong>Built for responsible evaluation</strong><p>This interface uses synthetic data. It does not provide diagnosis, treatment recommendations, emergency response, or medical-device control.</p><a href="/docs/privacy-and-safety.md">Read the safety guidance</a></aside>
        </section>
      </main>
      <footer>Early-stage reference implementation · Apache-2.0</footer>
    </div>
  );
}
