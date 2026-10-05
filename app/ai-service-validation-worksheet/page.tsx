import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "../components/PrintButton";

const appStoreUrl = "https://apps.apple.com/us/app/ai-side-hustle-lab/id6803422848?pt=128677255&ct=site_home_ai_q4_2026&mt=8";

export const metadata: Metadata = {
  title: "Free AI Service Validation Worksheet: 7-Day Test",
  description: "A printable, evidence-first worksheet for testing one small AI service idea, checking rights and costs, and deciding whether to continue.",
  alternates: { canonical: "/ai-service-validation-worksheet" },
};

const days = [
  ["01", "Name one customer", "Who has the problem? Describe one person or small team and the situation in which it happens.", "What have they already tried? What did you observe or hear directly?"],
  ["02", "Check the real need", "What outcome would make this task easier? Separate a repeated behavior from a polite opinion.", "What is still uncertain? What small question could clarify it?"],
  ["03", "Set the limits", "List the exact sample, delivery time, tools, direct cost, and revision limit.", "Can you verify permission for every image, voice, text, and brand asset? If not, do not use it."],
  ["04", "Make one small sample", "Use your own or authorized material. Make only enough work to show the proposed result.", "What did the sample take in time and cost? What would you change before sharing it?"],
  ["05", "Ask with permission", "Ask one suitable person if they are willing to review the sample. Make it easy to decline.", "What did they actually understand, use, or question? Do not treat praise as a purchase."],
  ["06", "Check delivery fit", "Write the handoff, turnaround, included revisions, and any rights or platform limits.", "After costs and time, is this small service still practical for you to deliver?"],
  ["07", "Choose a next step", "Continue, narrow the offer, or stop. Base the choice on observed need, sample usefulness, rights, and delivery effort.", "What is the strongest evidence? What would change your mind? No response is not demand."],
];

function DayCard({ day }: { day: (typeof days)[number] }) {
  const [number, title, prompt, evidenceHint] = day;
  return (
    <article className="worksheetCard">
      <span className="worksheetDay">DAY {number}</span>
      <h2>{title}</h2>
      <p>{prompt}</p>
      <p className="worksheetEvidence">Evidence / notes</p>
      <div className="worksheetLines" aria-hidden="true" />
      <p className="worksheetEvidenceHint">{evidenceHint}</p>
      <div className="worksheetLines short" aria-hidden="true" />
    </article>
  );
}

export default function WorksheetPage() {
  return (
    <main className="worksheet">
      <nav className="nav wrap">
        <Link className="brand" href="/" aria-label="AI Side Hustle Lab home"><span className="mark">AI</span> AI Side Hustle Lab</Link>
        <div className="navLinks"><Link href="/">Home</Link><Link href="/ai-side-hustle-ideas">Ideas</Link><Link href="/validate-ai-side-hustle">7-day route</Link><Link href="/support">Support</Link></div>
      </nav>
      <header className="worksheetHero wrap">
        <div>
          <p className="eyebrow">Free printable worksheet · no account required</p>
          <h1>Test one AI service idea before you build a business around it.</h1>
          <p className="lead">Use these seven prompts to check a real customer problem, make a small sample, verify rights and costs, and decide what to do next. This worksheet offers a method, not an income forecast.</p>
          <div className="heroActions worksheetControls"><PrintButton /><a className="textLink" href={appStoreUrl} target="_blank" rel="noreferrer">Save a plan in the free app <span>↗</span></a></div>
        </div>
        <aside className="validationAside" aria-label="Validation rule"><span>KEEP THE TEST SMALL</span><strong>One customer.<br />One sample.<br />One decision.</strong><p>Do not use private client material or publish AI output until you have the necessary rights and permission.</p></aside>
      </header>
      <section id="worksheet" className="worksheetSection wrap" aria-label="Seven-day worksheet">
        <div className="worksheetPage">{days.slice(0, 4).map((day) => <DayCard day={day} key={day[0]} />)}</div>
        <div className="worksheetPage">
          {days.slice(4).map((day) => <DayCard day={day} key={day[0]} />)}
          <article className="worksheetDecision"><p className="eyebrow">Decision</p><h2>Continue · narrow · stop</h2><p>Circle one. Write the evidence that led you there and the next action you can complete without making an unsupported promise.</p><div className="worksheetLines" aria-hidden="true" /></article>
        </div>
      </section>
      <section className="validationNote worksheetNote wrap"><p><b>Privacy and safety:</b> this is a static page. Nothing you write on a printed copy is sent to us. Get permission before contacting anyone or using their materials; avoid sharing personal or confidential information with AI services unless you have the right to do so.</p></section>
      <section className="validationOffer worksheetOffer wrap">
        <div><p className="eyebrow">Want to keep the plan on your phone?</p><h2>Start free with AI Side Hustle Lab.</h2></div>
        <div><p>The app can save one seven-day plan and keep its daily actions together. It does not guarantee customers or income. In the US, Annual Pro is $29.99/year and Lifetime Pro is $39.99 one-time; check the App Store for current terms.</p><a className="cta light" href={appStoreUrl} target="_blank" rel="noreferrer">View the App Store page <span>↗</span></a></div>
      </section>
      <footer className="wrap"><span>© 2026 AI Side Hustle Lab</span><div><Link href="/privacy">Privacy</Link><Link href="/support">Support</Link><Link href="/">Home</Link></div></footer>
    </main>
  );
}
