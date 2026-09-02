import type { Metadata } from "next";
import Link from "next/link";

const appStoreUrl = "https://apps.apple.com/us/app/ai-side-hustle-lab/id6803422848?ct=site_validation_us&mt=8";

export const metadata: Metadata = {
  title: "Validate an AI Service Idea in 7 Days",
  description: "A practical seven-day route for testing one AI service idea with a real customer, a small sample, and clear stop conditions.",
  alternates: { canonical: "/validate" },
};

const steps = [
  ["01", "Choose one customer", "Name one person or small team, one recurring problem, and one outcome they already care about."],
  ["02", "Make a small sample", "Set a narrow brief, record rights and inputs, and estimate the real time and tool cost before promising delivery."],
  ["03", "Ask for evidence", "Use a short conversation or review request to learn whether the sample is useful, understandable, and worth repeating."],
];

export default function ValidatePage() {
  return (
    <main>
      <nav className="nav wrap">
        <Link className="brand" href="/" aria-label="AI Side Hustle Lab home"><span className="mark">AI</span> AI Side Hustle Lab</Link>
        <div className="navLinks"><Link href="/">Home</Link><Link href="/support">Support</Link><Link href="/privacy">Privacy</Link></div>
      </nav>
      <section className="validationHero wrap">
        <div>
          <p className="eyebrow">A practical first test</p>
          <h1>Validate one AI service idea before you build a whole business around it.</h1>
          <p className="lead">AI Side Hustle Lab turns one vague idea into a seven-day route: choose a customer, make a small sample, check the economics, and decide whether to continue.</p>
          <div className="heroActions"><a className="cta" href={appStoreUrl} target="_blank" rel="noreferrer">Start free on the App Store <span>↗</span></a><Link className="textLink" href="/">Back to the product site <span>→</span></Link></div>
        </div>
        <aside className="validationAside" aria-label="Seven-day validation rule"><span>THE RULE</span><strong>One customer.<br />One sample.<br />One decision.</strong><p>Do not confuse a polished idea with evidence that someone needs the result.</p></aside>
      </section>
      <section className="validationSteps wrap">
        <div className="sectionHead"><div><p className="eyebrow">The seven-day route</p><h2>Small evidence beats a big guess.</h2></div><p>Use the free start to choose a project. Pro adds the complete action routes and copyable client, quote, delivery, and stop-condition templates.</p></div>
        <div className="validationGrid">{steps.map(([number, title, copy]) => <article className="validationStep" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>
      <section className="validationOffer wrap">
        <div><p className="eyebrow">What the app helps you finish</p><h2>A plan you can evaluate at the end of the week.</h2></div>
        <div><ul><li>Fit, starting cost, time range, and rights reminders</li><li>Daily actions with explicit stop conditions</li><li>Templates for outreach, quotes, delivery, and review</li></ul><a className="cta light" href={appStoreUrl} target="_blank" rel="noreferrer">Download free <span>↗</span></a></div>
      </section>
      <section className="validationNote wrap"><p><b>US purchase information:</b> Annual Pro is currently available at $29.99/year. A limited Lifetime Pro offer may be shown by Apple through September 25, 2026; the App Store is the source of truth for product availability, price, and billing details. The app provides methods and risk notes, not an income guarantee.</p></section>
      <footer className="wrap"><span>© 2026 AI Side Hustle Lab</span><div><a href="/privacy">Privacy</a><a href="/support">Support</a></div></footer>
    </main>
  );
}
