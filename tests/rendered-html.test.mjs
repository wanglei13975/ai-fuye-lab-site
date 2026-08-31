import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
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
  assert.match(html, /<title>AI副业实验室/);
  assert.match(html, /apps\.apple\.com\/us\/app\/ai/);
  assert.match(html, /id6803422848/);
  assert.match(html, /下载安装免费/);
  assert.match(html, /一次性买断和年度订阅/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview|Building your site/);
});

test("keeps the App Store CTA and pricing explanation in the source", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");

  assert.match(page, /const appStoreUrl = "https:\/\/apps\.apple\.com\/us\/app\//);
  assert.match(page, /前往 App Store/);
  assert.match(page, /具体价格以 App Store 页面显示为准/);
  assert.match(layout, /AI副业实验室/);
});
