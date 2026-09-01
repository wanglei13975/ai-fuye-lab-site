# AI Side Hustle Lab

Turn one vague AI side-hustle idea into a seven-day experiment you can actually evaluate.

[Download AI Side Hustle Lab on the US App Store](https://apps.apple.com/us/app/ai-side-hustle-lab/id6803422848?ct=github_readme&mt=8) · [Open the product site](https://wanglei13975.github.io/ai-fuye-lab-site/) · [Read the 7-day validation guide](https://gist.github.com/wanglei13975/346360e27033fb72dbf4739bfd9679bf)

> US Lifetime Pro is $5.99 through September 25, 2026, then returns to $39.99. Start free; Apple shows the final price and billing details.

AI Side Hustle Lab is an English-language iPhone app for people who want to test practical AI service ideas without confusing a plan with a promise of income. It helps you compare an idea against your available time, budget, skills, and camera preference, then turns the chosen idea into small daily actions.

## What is inside

- Guided experiments for AI product scene images, short-form video ads, and video translation/dubbing
- Startup cost and weekly time ranges, fit checks, rights reminders, and explicit stop conditions
- A seven-day action plan with one to three finishable tasks per day
- Copyable quote, outreach, delivery-checklist, and stop-condition templates in Pro
- Local-first progress: no account is required, and Apple handles purchases

Annual Pro is $29.99/year with automatic renewal. Lifetime Pro is $5.99 through September 25, 2026, then returns to a $39.99 one-time purchase. The App Store is the source of truth for the price and billing details. This app is not a job board, agency, investment product, or income guarantee.

Read the [privacy policy](https://wanglei13975.github.io/ai-fuye-lab-site/privacy/) or [support guide](https://wanglei13975.github.io/ai-fuye-lab-site/support/) before downloading.

## Development

This repository also contains the public product site, built with vinext and deployable to GitHub Pages.

A clean full-stack starter running on
[vinext](https://github.com/cloudflare/vinext), with optional Cloudflare D1 and
Drizzle support.

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
npm run build
```

This starter does not use `wrangler.jsonc`.

## Included Shape

- edit site code under `app/`
- `.openai/hosting.json` declares optional Sites D1 and R2 bindings
- `vite.config.ts` simulates declared bindings for local development
- `db/schema.ts` starts intentionally empty
- `examples/d1/` contains an optional D1 example surface
- `drizzle.config.ts` supports local migration generation when needed

## Workspace Auth Headers

Signed-in visitors receive both `oai-authenticated-user-id` and `oai-authenticated-user-email`. Private Sites require every visitor to sign in; public Sites may also have anonymous visitors, for whom neither header is present.

The user ID is stable for the same user on the same Site and different across Sites. Email and name are intended for display or contact purposes.

SIWC-authenticated workspace sites may also receive
`oai-authenticated-user-full-name` when the user's SIWC profile has a non-empty
`name` claim. The full-name value is percent-encoded UTF-8 and is accompanied by
`oai-authenticated-user-full-name-encoding: percent-encoded-utf-8`.

Treat the full name as optional and fall back to email when it is absent:

```tsx
import { headers } from "next/headers";

export default async function Home() {
  const requestHeaders = await headers();
  const userId = requestHeaders.get("oai-authenticated-user-id");
  const email = requestHeaders.get("oai-authenticated-user-email");
  const encodedFullName = requestHeaders.get("oai-authenticated-user-full-name");
  const fullName =
    encodedFullName &&
    requestHeaders.get("oai-authenticated-user-full-name-encoding") ===
      "percent-encoded-utf-8"
      ? decodeURIComponent(encodedFullName)
      : null;

  const displayName = fullName ?? email;
  // ...
}
```

## Optional Dispatch-Owned ChatGPT Sign-In

Import the ready-to-use helpers from `app/chatgpt-auth.ts` when the site needs
optional or required ChatGPT sign-in:

- Use `getChatGPTUser()` for optional signed-in UI.
- Use `requireChatGPTUser(returnTo)` for server-rendered pages that should send
  anonymous visitors through Sign in with ChatGPT.
- Use `chatGPTSignInPath(returnTo)` and `chatGPTSignOutPath(returnTo)` for
  browser links or actions.
- Pass a same-origin relative `returnTo` path for the destination after sign-in
  or sign-out. The helper validates and safely encodes it.
- Mark protected pages with `export const dynamic = "force-dynamic"` because
  they depend on per-request identity headers.

Dispatch owns `/signin-with-chatgpt`, `/signout-with-chatgpt`, `/callback`, the
OAuth cookies, and identity header injection. Do not implement app routes for
those reserved paths. Routes that do not import and call the helper remain
anonymous-compatible.

SIWC establishes identity only; it does not prove workspace membership. Use the
Sites hosting platform's access policy controls for workspace-wide restrictions,
or enforce explicit server-side membership or allowlist checks.

Use SIWC for account pages, user-specific dashboards, saved records, and write
actions tied to the current ChatGPT user. Leave public content anonymous.

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: verify the vinext build output
- `npm test`: build the starter and verify its rendered loading skeleton
- `npm run db:generate`: generate Drizzle migrations after schema changes

## Learn More

- [vinext Documentation](https://github.com/cloudflare/vinext)
- [Drizzle D1 Guide](https://orm.drizzle.team/docs/get-started/d1-new)
