import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Support", description: "AI Side Hustle Lab app, purchase restore, and local data support" };

export default function SupportPage() {
  return <main>
    <nav className="nav wrap"><Link className="brand" href="/"><span className="mark">AI</span> AI Side Hustle Lab</Link><div className="navLinks"><Link href="/">Home</Link><Link href="/privacy">Privacy</Link></div></nav>
    <article className="legal wrap">
      <p className="eyebrow">Support</p><h1>Support & help</h1><p className="updated">For AI Side Hustle Lab 1.1</p>
      <p>Start with the steps below. The app does not provide income guarantees, client matching, or managed services. Support covers app features, content access, purchase restoration, and local data.</p>
      <h2>Pro is still locked after purchase</h2><ol><li>Confirm that the device is signed in to the Apple Account used for the purchase.</li><li>Open the app’s “Me” tab and choose “Restore purchases”.</li><li>Keep the network available while Apple verifies the transaction.</li><li>If Apple shows a charge but access is not restored, use the App Store “Report a Problem” flow to check the transaction.</li></ol>
      <h2>Manage or cancel a subscription</h2><p>On iPhone, open Settings → your Apple Account → Subscriptions, then choose AI Side Hustle Lab. Apple manages billing, refund eligibility, and payment methods.</p>
      <h2>Clear local data</h2><p>Open the app’s “Me” tab and choose “Clear local plan”. Uninstalling the app also removes action progress stored on the device; the developer cannot restore deleted local data.</p>
      <h2>Content and results</h2><p>The guides provide execution frameworks, risk notes, and public-source leads. They are not financial, legal, tax, or employment advice. Results depend on demand, ability, time, platform rules, and execution; income is not guaranteed.</p>
      <h2>Still need help?</h2><p>Use the “App Support” link on the AI Side Hustle Lab App Store product page to reach this page. Contact the support address configured by the developer account before sending a review request. For your privacy, never send card numbers, Apple Account passwords, or complete transaction credentials.</p>
      <h2>Legal and privacy</h2><p>For local data, StoreKit transaction status, and third-party-link details, read the <Link href="/privacy">Privacy Policy</Link>.</p>
    </article>
    <footer className="wrap"><span>© 2026 AI Side Hustle Lab</span><div><Link href="/">Home</Link><Link href="/privacy">Privacy</Link></div></footer>
  </main>;
}
