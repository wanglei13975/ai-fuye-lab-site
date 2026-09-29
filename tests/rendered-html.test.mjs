import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the public acquisition page with a live App Store route", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>AI Side Hustle Lab/);
  assert.match(html, /apps\.apple\.com\/us\/app\/ai/);
  assert.match(html, /id6803422848/);
  assert.match(html, /Download and start for free/);
  assert.match(html, /In the US, Annual Pro is \$29\.99\/year and Lifetime Pro is a \$39\.99 one-time purchase/);
  assert.match(html, /\$29\.99\/year/);
  assert.match(html, /Free to start · Annual Pro \$29\.99\/year · Lifetime Pro \$39\.99 one-time/);
  assert.match(html, /pt=128677255&amp;ct=site_home_ai_q4_2026&amp;mt=8/);
  assert.match(html, /apple-itunes-app" content="app-id=6803422848, ct=site_home_ai_q4_2026, pt=128677255, mt=8/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /"applicationCategory":"BusinessApplication"/);
  assert.match(html, /"price":"39\.99"/);
  assert.match(html, /class="mobilePurchaseBar"/);
  assert.match(html, /site_home_ai_q4_2026/);
  assert.match(html, /Lifetime Pro \$39\.99/);
  assert.doesNotMatch(html, /\$5\.99|September 25, 2026|Sep 25/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview|Building your site/);
});

test("keeps the support page aligned with the live app version", async () => {
  const support = await readFile(new URL("../app/support/page.tsx", import.meta.url), "utf8");
  const githubPages = await readFile(new URL("../docs/support/index.html", import.meta.url), "utf8");

  assert.match(support, /For AI Side Hustle Lab 1\.3/);
  assert.match(githubPages, /For AI Side Hustle Lab 1\.3/);
  assert.doesNotMatch(support, /For AI Side Hustle Lab 1\.2/);
  assert.doesNotMatch(githubPages, /For AI Side Hustle Lab 1\.2/);
});

test("keeps the App Store CTA and pricing explanation in the source", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
  const validation = await readFile(new URL("../app/validate/page.tsx", import.meta.url), "utf8");

  assert.match(page, /const appStoreBaseUrl = "https:\/\/apps\.apple\.com\/us\/app\//);
  assert.match(page, /const appStoreCampaignUrl = `\$\{appStoreBaseUrl\}\?pt=128677255&ct=site_home_ai_q4_2026&mt=8`/);
  assert.match(page, /View on the App Store/);
  assert.match(page, /downloadUrl: appStoreCampaignUrl/);
  assert.match(page, /site_home_ai_q4_2026/);
  assert.match(page, /\$29\.99\/year/);
  assert.match(page, /In the US, Annual Pro is \$29\.99\/year and Lifetime Pro is a \$39\.99 one-time purchase/);
  assert.match(page, /Lifetime Pro \$39\.99 one-time/);
  assert.match(validation, /pt=128677255&ct=site_home_ai_q4_2026&mt=8/);
  assert.match(layout, /AI Side Hustle Lab/);
  assert.match(layout, /summary_large_image/);
  assert.match(layout, /\$39\.99 one-time/);
  assert.doesNotMatch(`${page}\n${layout}`, /\$5\.99|September 25, 2026|Sep 25/);
});

test("renders the seven-day validation route with a direct App Store CTA", async () => {
  const response = await render("/validate");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Validate one AI service idea/);
  assert.match(html, /One customer\.<br\/>One sample\.<br\/>One decision\./);
  assert.match(html, /pt=128677255&amp;ct=site_home_ai_q4_2026&amp;mt=8/);
  assert.match(html, /Annual Pro is \$29\.99\/year and Lifetime Pro is a \$39\.99 one-time purchase/);
  assert.doesNotMatch(html, /\$5\.99|September 25, 2026/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview|Building your site/);
});

test("renders the high-intent AI ideas route with a seven-day guide and CTA", async () => {
  const response = await render("/ai-side-hustle-ideas");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /AI side-hustle ideas you can validate/);
  assert.match(html, /One customer\.<br\/>One sample\.<br\/>One decision\./);
  assert.match(html, /How to validate an AI side-hustle idea in seven days/);
  assert.match(html, /pt=128677255&amp;ct=site_home_ai_q4_2026&amp;mt=8/);
  assert.match(html, /Annual Pro is \$29\.99\/year and Lifetime Pro is a \$39\.99 one-time purchase/);
});

test("keeps the GitHub Pages fallback in sync with the conversion offer", async () => {
  const githubPages = await readFile(new URL("../docs/index.html", import.meta.url), "utf8");
  const validationPage = await readFile(new URL("../docs/validate-ai-side-hustle/index.html", import.meta.url), "utf8");
  const ideasPage = await readFile(new URL("../docs/ai-side-hustle-ideas/index.html", import.meta.url), "utf8");

  assert.match(githubPages, /pt=128677255&amp;ct=site_home_ai_q4_2026&amp;mt=8/);
  assert.match(githubPages, /application\/ld\+json/);
  assert.match(githubPages, /"price":"39\.99"/);
  assert.match(githubPages, /Free to start · Annual Pro \$29\.99\/year · Lifetime Pro \$39\.99 one-time/);
  assert.match(validationPage, /Validate one AI service idea/);
  assert.match(validationPage, /pt=128677255&amp;ct=site_home_ai_q4_2026&amp;mt=8/);
  assert.match(validationPage, /Annual Pro is \$29\.99\/year and Lifetime Pro is a \$39\.99 one-time purchase/);
  assert.match(validationPage, /twitter:card/);
  assert.match(ideasPage, /AI side-hustle ideas you can validate/);
  assert.match(ideasPage, /pt=128677255&amp;ct=site_home_ai_q4_2026&amp;mt=8/);
  assert.match(ideasPage, /application\/ld\+json/);
  assert.match(ideasPage, /twitter:card/);
  assert.doesNotMatch(`${githubPages}\n${validationPage}\n${ideasPage}`, /\$5\.99|September 25, 2026|Sep 25/);
});
