const projects = [
  ["AI product scene images", "A seven-day route from clarifying the brief to delivery review."],
  ["AI short-form video ads", "Turn scripts, assets, editing, and delivery into an executable checklist."],
  ["AI video translation and dubbing", "Cover a sample, rights checks, pricing, and final delivery."],
];

const appStoreUrl = "https://apps.apple.com/us/app/ai-side-hustle-lab/id6803422848?ct=site_home_us&mt=8";

export default function Home() {
  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#top" aria-label="AI Side Hustle Lab home"><span className="mark">AI</span> AI Side Hustle Lab</a>
        <div className="navLinks"><a href="#projects">Guides</a><a href={appStoreUrl} target="_blank" rel="noreferrer">Get the app</a><a href="/privacy">Privacy</a><a href="/support">Support</a></div>
      </nav>
      <section className="hero wrap" id="top">
        <div>
          <p className="eyebrow">From idea to first real validation</p>
          <h1>Turn an AI side-hustle idea into steps you can take today.</h1>
          <p className="lead">Three curated project guides, seven-day action plans, and practical delivery templates. We provide methods and risk notes — never an income promise.</p>
          <div className="heroActions"><a className="cta" href={appStoreUrl} target="_blank" rel="noreferrer">View on the App Store <span>↗</span></a><a className="textLink" href="#projects">Explore the guides <span>→</span></a></div>
        </div>
        <aside className="routeCard" aria-label="Seven-day action plan example">
          <div className="cardTop"><span>Seven-day action plan</span><b>Day 1</b></div>
          <h2>Validate one real need first</h2>
          <p>Choose a clear scenario, talk to three potential clients, and record the problem they would pay to solve.</p>
          <div className="progress"><i /></div>
          <ul><li><span>✓</span>Define the target client</li><li><span>✓</span>Prepare interview questions</li><li><span>○</span>Record feedback and stop conditions</li></ul>
        </aside>
      </section>
      <section className="offer wrap" aria-label="App purchase information">
        <div><p className="eyebrow">AI Side Hustle Lab app</p><h2>Start free. Unlock Pro when you need it.</h2></div>
        <div className="offerBody"><p>Download and start for free. US Pro includes the complete project content and action routes: $29.99/year or $39.99 lifetime. Final pricing is shown by the App Store.</p><a className="cta light" href={appStoreUrl} target="_blank" rel="noreferrer">Download free <span>↗</span></a></div>
      </section>
      <section className="projectSection wrap" id="projects">
        <div className="sectionHead"><div><p className="eyebrow">The first three guides</p><h2>Not an inspiration list. A route to execution.</h2></div><p>Each project includes fit, starting cost, action steps, risks, stop conditions, and source notes.</p></div>
        <div className="grid">{projects.map(([title, copy], index) => <article className="project" key={title}><span className="number">0{index + 1}</span><h3>{title}</h3><p>{copy}</p><small>7-day route · risk notes · practical templates</small></article>)}</div>
      </section>
      <section className="promise wrap">
        <p className="eyebrow">Product boundaries</p><h2>More transparent information. Your decision stays yours.</h2>
        <div className="promiseGrid"><p><b>No income guarantees</b><br />Results depend on ability, demand, time, and execution. These guides are not financial or employment promises.</p><p><b>Traceable sources</b><br />Open-source tools are cited for information only. The app does not resell code, models, or third-party tutorials.</p><p><b>Local by default</b><br />Action progress stays on your device. No account is required, and we do not run cross-app tracking ads.</p></div>
      </section>
      <footer className="wrap"><span>© 2026 AI Side Hustle Lab</span><div><a href="/privacy">Privacy</a><a href="/support">Support</a></div></footer>
    </main>
  );
}
