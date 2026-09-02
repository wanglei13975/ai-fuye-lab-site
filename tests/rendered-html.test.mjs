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
  assert.match(html, /In the US, Annual Pro is \$29\.99\/year and the limited Lifetime Pro offer is \$5\.99 through September 25, 2026/);
  assert.match(html, /\$29\.99\/year/);
  assert.match(html, /Free to start · Annual Pro \$29\.99\/year · limited Lifetime Pro \$5\.99 through September 25, 2026/);
  assert.match(html, /site_hero_us/);
  assert.match(html, /site_offer_us/);
  assert.match(html, /apple-itunes-app/);
  assert.match(html, /class="mobilePurchaseBar"/);
  assert.match(html, /site_mobile_cta/);
  assert.match(html, /Lifetime Pro \$5\.99/);
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
  assert.match(page, /View on the App Store/);
  assert.match(page, /site_hero_us/);
  assert.match(page, /site_offer_us/);
  assert.match(page, /\$29\.99\/year/);
  assert.match(page, /In the US, Annual Pro is \$29\.99\/year and the limited Lifetime Pro offer is \$5\.99 through September 25, 2026/);
  assert.match(page, /limited Lifetime Pro \$5\.99 through September 25, 2026/);
  assert.match(validation, /site_validation_us/);
  assert.match(layout, /AI Side Hustle Lab/);
});

test("renders the seven-day validation route with a direct App Store CTA", async () => {
  const response = await render("/validate");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Validate one AI service idea/);
  assert.match(html, /One customer\.<br\/>One sample\.<br\/>One decision\./);
  assert.match(html, /site_validation_us/);
  assert.match(html, /Annual Pro is \$29\.99\/year and the limited Lifetime Pro offer is \$5\.99 through September 25, 2026/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview|Building your site/);
});

test("keeps the GitHub Pages fallback in sync with the conversion offer", async () => {
  const githubPages = await readFile(new URL("../docs/index.html", import.meta.url), "utf8");
  const validationPage = await readFile(new URL("../docs/validate-ai-side-hustle/index.html", import.meta.url), "utf8");

  assert.match(githubPages, /github_pages_hero/);
  assert.match(githubPages, /github_pages_offer/);
  assert.match(githubPages, /Free to start · Annual Pro \$29\.99\/year · limited Lifetime Pro \$5\.99 through September 25, 2026/);
  assert.doesNotMatch(githubPages, /github_pages_home/);
  assert.match(validationPage, /Validate one AI service idea/);
  assert.match(validationPage, /github_validation_us/);
  assert.match(validationPage, /Annual Pro is \$29\.99\/year and the limited Lifetime Pro offer is \$5\.99 through September 25, 2026/);
});
