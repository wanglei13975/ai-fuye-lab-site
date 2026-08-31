import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Privacy Policy", description: "AI Side Hustle Lab privacy policy" };

export default function PrivacyPage() {
  return <main>
    <nav className="nav wrap"><Link className="brand" href="/"><span className="mark">AI</span> AI Side Hustle Lab</Link><div className="navLinks"><Link href="/">Home</Link><Link href="/support">Support</Link></div></nav>
    <article className="legal wrap">
      <p className="eyebrow">Privacy Policy</p><h1>Privacy Policy</h1><p className="updated">Effective: August 18, 2026</p>
      <p>AI Side Hustle Lab respects your privacy. This policy explains how the app handles information. The current version does not require an account, use ad tracking, or upload your action plans or progress to a developer server.</p>
      <h2>1. Information we process</h2><p>The app stores your selected project, completed action items, viewed notices, and interface preferences locally on your device. This restores your progress; the developer does not collect these data.</p>
      <h2>2. Purchases and subscriptions</h2><p>In-app purchases are processed by Apple. The app receives StoreKit transaction status and entitlement information to unlock paid content. The developer never receives your full payment-card information. Apple’s privacy policy applies to Apple’s processing.</p>
      <h2>3. Third-party links</h2><p>Some guides link to open-source projects or tools. Clicking a link leaves the app, and the destination may process information under its own policies. Read the applicable terms and licenses before use.</p>
      <h2>4. Analytics, ads, and tracking</h2><p>The current version does not include third-party analytics or advertising SDKs, cross-app tracking, or a system permission for advertising tracking.</p>
      <h2>5. Retention and deletion</h2><p>Local progress remains until you clear it in the app’s settings or uninstall the app. Because the data is not uploaded, the developer cannot read or restore it remotely.</p>
      <h2>6. Children’s privacy</h2><p>This app is intended for people able to make independent commercial and purchase decisions; it is not designed specifically for children under 13. We do not knowingly collect children’s personal information.</p>
      <h2>7. Policy updates</h2><p>If the product’s data practices materially change, we will update this page and its effective date and, where appropriate, note the change in the app’s release information.</p>
      <h2>8. Contact and support</h2><p>For privacy or data questions, visit the <Link href="/support">support page</Link> for troubleshooting and contact guidance.</p>
    </article>
    <footer className="wrap"><span>© 2026 AI Side Hustle Lab</span><div><Link href="/">Home</Link><Link href="/support">Support</Link></div></footer>
  </main>;
}
