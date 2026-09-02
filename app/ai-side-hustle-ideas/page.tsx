import type { Metadata } from "next";
import Link from "next/link";

const appStoreUrl = "https://apps.apple.com/us/app/ai-side-hustle-lab/id6803422848?ct=site_ideas_us&mt=8";

export const metadata: Metadata = {
  title: "AI Side Hustle Ideas You Can Validate in 7 Days",
  description: "Three practical AI side-hustle ideas and a seven-day test for choosing one customer, making one sample, and checking whether the work is worth repeating.",
  alternates: { canonical: "/ai-side-hustle-ideas" },
};

const howToStructuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to validate an AI side-hustle idea in seven days",
  description: "A small, evidence-based route for testing one AI service idea before building a larger business around it.",
  totalTime: "P7D",
  tool: [{ "@type": "HowToTool", name: "AI Side Hustle Lab for iOS" }],
  step: [
    { "@type": "HowToStep", name: "Choose one customer", text: "Name one person or small team, one recurring problem, and one outcome they already care about." },
    { "@type": "HowToStep", name: "Make a small sample", text: "Set a narrow brief, record rights and inputs, and estimate the real time and tool cost before promising delivery." },
    { "@type": "HowToStep", name: "Ask for evidence", text: "Use a short conversation or review request to learn whether the sample is useful, understandable, and worth repeating." },
  ],
};

const ideas = [
  ["AI product scene images", "Help a small shop or maker turn existing product photos into a consistent set of sales visuals.", "Check the brief, asset rights, revision limit, and delivery format before quoting."],
  ["AI short-form video ads", "Turn one product message into a small set of vertical clips with a defined audience and call to action.", "Start with a short sample and confirm music, likeness, brand, and source-footage rights."],
  ["AI video translation and dubbing", "Test whether a creator or small business needs one short video adapted for another language or audience.", "Confirm voice, timing, pronunciation, subtitle, and usage rights before promising a finished version."],
];

export default function IdeasPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToStructuredData) }} />
      <nav className="nav wrap">
        <Link className="brand" href="/" aria-label="AI Side Hustle Lab home"><span className="mark">AI</span> AI Side Hustle Lab</Link>
        <div className="navLinks"><Link href="/">Home</Link><Link href="/validate">7-day route</Link><a href={appStoreUrl} target="_blank" rel="noreferrer">Get the app</a><Link href="/privacy">Privacy</Link><Link href="/support">Support</Link></div>
      </nav>
      <section className="validationHero wrap">
        <div>
          <p className="eyebrow">Start with a test, not a promise</p>
          <h1>AI side-hustle ideas you can validate before you build.</h1>
          <p className="lead">Pick one customer, make one small sample, check the economics, and decide whether to continue. The goal is useful evidence — not an income guarantee.</p>
          <div className="heroActions"><a className="cta" href={appStoreUrl} target="_blank" rel="noreferrer">Start free on the App Store <span>↗</span></a><Link className="textLink" href="/validate">See the seven-day route <span>→</span></Link></div>
        </div>
        <aside className="validationAside" aria-label="Validation rule"><span>THE FILTER</span><strong>One customer.<br />One sample.<br />One decision.</strong><p>If you cannot name the customer and the evidence, the idea is still only a guess.</p></aside>
      </section>
      <section className="validationSteps wrap">
        <div className="sectionHead"><div><p className="eyebrow">Three grounded starting points</p><h2>Choose a service with a visible result.</h2></div><p>These are starting hypotheses, not promises of demand. Keep the first delivery narrow enough to finish and review in one week.</p></div>
        <div className="validationGrid">{ideas.map(([title, copy, note], index) => <article className="validationStep" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p><small>{note}</small></article>)}</div>
      </section>
      <section className="validationOffer wrap">
        <div><p className="eyebrow">A seven-day decision</p><h2>Use small evidence to decide what not to build.</h2></div>
        <div><ul><li>Day 1–2: name the customer, outcome, and constraints</li><li>Day 3–4: make and review one deliberately small sample</li><li>Day 5–7: ask for evidence, check costs, and record a stop/continue decision</li></ul><a className="cta light" href={appStoreUrl} target="_blank" rel="noreferrer">Download free <span>↗</span></a></div>
      </section>
      <section className="validationNote wrap"><p><b>US purchase information:</b> AI Side Hustle Lab is free to start. Annual Pro is $29.99/year and the limited Lifetime Pro offer is $5.99 through September 25, 2026. The App Store is the source of truth for final availability and billing details.</p></section>
      <footer className="wrap"><span>© 2026 AI Side Hustle Lab</span><div><Link href="/">Home</Link><Link href="/privacy">Privacy</Link><Link href="/support">Support</Link></div></footer>
    </main>
  );
}
