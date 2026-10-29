# freela-ontap-landing

Landing page and marketing site for [Freela onTap](https://freelaontap.com.br) — a marketplace
connecting freelancers to hospitality businesses (bars, restaurants, cafés, nightclubs) in Porto
Alegre/RS and nearby cities, Brazil. Built as the Final Challenge project for a squad at the Apple Developer Academy
(cohort S25). The iOS apps live in a separate repository, [`freela-ontap-ios`](https://github.com/FreelaOnTap/freela-ontap-ios).

Besides presenting the product, this site is the source of the URLs App Store Connect requires for
app review: Privacy Policy (`/privacidade`), Terms of Use (`/termos`), and a Support channel
(`/suporte`).

## Stack

React 19 + TypeScript, built with Vite, styled with Tailwind CSS v4. Routing is client-side via
React Router. Deployed on Vercel.

Design tokens (color, spacing, corner radius) are mirrored from the iOS app's Design System
(`FreelaOnTap/DesignSystem/Tokens/*.json` in `freela-ontap-ios`) so the site and the two apps read
as one product — see `src/index.css`. The page swaps its accent per audience (orange for freelancers,
blue for businesses), matching each app's own theming, and the one full-bleed color block ("Começamos
por aqui") uses that app's tint. The audience comes from the URL: `/` is the freelancer version and `/?para=empresa`
the business one, so links sent to each side land on the right page.

## Local setup

```bash
npm install
npm run dev
```

```bash
npm run build   # type-check + production build
npm run lint    # oxlint
```

## Branching

Same Git Flow as `freela-ontap-ios`: `main` (shipped) and `dev` (integration) are long-lived;
everything else branches off `dev` and merges back via reviewed Pull Request.

GitHub's native branch protection isn't available on our plan for a private repo, so enforcement is
a versioned git hook instead:

```bash
git config core.hooksPath .githooks
```

This blocks direct pushes to `main`/`dev` and runs `npm run build` before anything leaves your
machine. Escape hatches: `SKIP_CHECKS=1 git push` and `ALLOW_PROTECTED_PUSH=1 git push origin main`.

## Interest list (Google Sheets)

The form at `#avise` sends each lead to a Google Apps Script web app bound to a private Google Sheet
owned by `freelaontap@gmail.com`. The sheet itself is never shared publicly: the script runs as its
owner and only appends rows, so the public endpoint can write but never read. Freelancers land on the
`freelancers` tab and businesses on `empresas`; the script writes the header row on first use.

The script validates every field again (the browser check can be bypassed), caps submissions at 30 a
minute, and prefixes cells that start with `=`, `+`, `-`, `@` or a digit with `'`, so nothing a
visitor types is ever evaluated as a formula.

Setup, once, signed in as `freelaontap@gmail.com`:

1. Open the sheet → **Extensions → Apps Script**, replace the editor's contents with
   [`google-apps-script/interest-leads.gs`](google-apps-script/interest-leads.gs), and save.
2. **Deploy → New deployment → Web app**, with *Execute as: Me* and *Who has access: Anyone*.
   Authorize when asked, and copy the `/exec` URL.
3. Set `LEADS_ENDPOINT` to that URL in Vercel (Production and Preview) and in `.env.local` for
   local work — see `.env.example` — then redeploy, since Vite bakes it in at build time (`vite.config.ts` exposes the `LEADS_` prefix
   besides Vite's default `VITE_`). Without it
   the form shows an error with the support e-mail.

After changing the script, ship it with **Deploy → Manage deployments → Edit → Version: New
version**. That keeps the same URL; a *new deployment* would get a new one.

Every lead records where it came from: `?origem=<campaign>` (or `utm_source`) on any link to the site
is saved in the *Origem* column — use it on the Tecnopuc QR codes and on each campaign link.

## Analytics (Microsoft Clarity)

Heatmaps and session recordings come from [Microsoft Clarity](https://clarity.microsoft.com), loaded by
`src/lib/clarity.ts` in production builds only, and only when `CLARITY_PROJECT_ID` is set (`vite.config.ts` exposes the
`CLARITY_` prefix, the same way it does `LEADS_`).

It runs **without cookies**: the project's Settings → Setup → Cookies toggle is off, and the loader
also sends `consentv2` denied before the tag loads, so a forgotten dashboard toggle still sets no
cookie. The trade-off is that every page view is its own session — Clarity can't tell a returning
visitor apart. That is why the site has no cookie banner; turning cookies on means adding one and
rewriting section 2 of `/privacidade`.

The interest form carries `data-clarity-mask="true"`, so nothing typed into it reaches a recording.

1. Create the project at clarity.microsoft.com and turn Cookies off in Settings → Setup.
2. Set `CLARITY_PROJECT_ID` in Vercel, **Production only** — preview deploys would otherwise
   pollute the data — then redeploy, since Vite bakes it in at build time.

## Agent skills

`.claude/skills/` holds design skills from [emilkowalski/skills](https://github.com/emilkowalski/skills)
(MIT, see `.claude/skills/LICENSE-emilkowalski-skills`), copied at commit `e8a175d`. Claude Code
loads them automatically in this repo:

- `apple-design` — Apple's interface and motion principles, translated for the web.
- `emil-design-eng` — UI polish, component and animation decisions.
- `mobile-native` — making the site feel native on a phone (most traffic comes from Instagram and QR codes).
- `break-ui` — stress-tests UI with worst-case data (long names, emoji, empty states).
- `animate` — builds an animation with the right curve, duration and reduced-motion fallback.
- `review-animations` — strict motion review; only runs when invoked by name.

To update, copy the folders again from upstream and bump the commit above.

## Agent readiness

The site is a static SPA, so the pieces agents read are generated or served around it:

- `src/lib/agentContent.ts` turns `src/content.ts` into one list of blocks, rendered three ways by
  `vite.config.ts`: visually hidden HTML inside `#root` of `index.html` (React replaces it on mount, so
  crawlers without JavaScript read the page and visitors see nothing new), `dist/index.md`, and the
  JSON-LD in `<head>`. Copy edits in `content.ts` reach all three on the next build.
- `middleware.ts` (Vercel Routing Middleware, logic in `src/lib/agentRouting.ts`) answers
  `Accept: text/markdown` on `/` with `index.md` and `Vary: Accept`, and returns a real 404 (Markdown or
  HTML) for any path that is not a client route. A new route in `src/main.tsx` also goes in
  `KNOWN_PAGE` (`agentRouting.ts`) and in `vercel.json` `rewrites`; a test keeps the two in sync.
- `public/llms.txt`, `sitemap.xml` and `robots.txt` are hand-written; update them with new pages.

```bash
npm test   # node:test, no extra dependencies
```

Check a deploy with `curl -sS -i -H 'Accept: text/markdown' https://www.freelaontap.com.br/` (and
`/some-path-that-does-not-exist`).

## Content notes

- Copy lives in `src/content.ts`, one block per audience, written with *tu* (the squad's choice for a
  Porto Alegre audience). Legal pages keep *você*.
- The App Store links live in `src/config.ts` (`APP_STORE_LINKS`); the store buttons and the partner
  section CTA read them. The Tecnopuc event line on the home page hides itself after `EVENT_ENDS_AT`.
- Shared job links (`/vaga/:id`) show the home page and never redirect: an automatic redirect to the App
  Store would leave the page before Safari can show the App Clip card. `appBannerContent` leaves the
  `apple-itunes-app` banner alone on those paths, so the one `index.html` serves stays.
- The page adapts to the visitor's phone (`detectPhoneOS`): iPhone gets the store button and no form
  (freelancer) or the help form (business); Android gets the waitlist form only; desktop gets the store
  button, a QR code and the form. The freelancer form is the Android waitlist, so it no longer asks for
  the phone OS and always sends `phone_os: android`.
- QR codes (`public/media/qr-*.svg`) encode the store URLs and were generated offline; regenerate them
  if `APP_STORE_LINKS` changes. The Smart App Banner ids are in `APP_STORE_IDS` (`src/config.ts`) and
  also hard-coded in `index.html`, which swaps to the business id when `?para=empresa` is present.
- The Freelancer App Clip (`com.freelaontap.freelancer.Clip`) opens from shared job links. The site side
  is the `appclips` key in `public/.well-known/apple-app-site-association` plus the clip attributes of the
  Smart App Banner in `index.html`. That file serves every route, so the attributes sit in every page's
  raw HTML and the inline script drops them on all routes but `/vaga/*`. The App Clip Experience for
  `https://www.freelaontap.com.br/vaga` is configured in App Store Connect, not here.
- App screens in "Como funciona" are exports from the Figma file (`public/media/screen-freelancer-*.webp`
  and `screen-business-*.webp`, 840px wide, status bar without the Dynamic Island because the bezel
  draws it); set each step's `image` in `src/content.ts` to a file under `public/media/`. The bezel
  color follows the audience: `iphone-bezel-freelancer.webp` and `iphone-bezel-business.webp`.
- The mascot lives in `public/media/mascot.webp` (freelancer) and `mascot-business.webp` (business), cropped from the transparent 2000px source at 480px tall — 3× its largest display size.
- The LGPD controller in `/privacidade` is described generically (the squad, not a registered legal
  entity) because the project doesn't have one yet — update it once it does.
