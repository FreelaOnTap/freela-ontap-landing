# freela-ontap-landing

Landing page and marketing site for [FreelaOnTap](https://freelaontap.com.br) — a marketplace
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

## Interest list (Supabase)

The form at `#avise` writes to `public.interest_leads` in the apps' Supabase project. Visitors can
only insert — never read — rows; the team reads them from the dashboard.

1. Run [`supabase/interest_leads.sql`](supabase/interest_leads.sql) once in the project's SQL editor.
2. Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in Vercel (and in `.env.local` for local
   work — see `.env.example`). Without them the form shows an error with the support e-mail.

Every lead records where it came from: `?origem=<campaign>` (or `utm_source`) on any link to the site
is saved in `source` — use it on the Tecnopuc QR codes and on each campaign link.

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

## Content notes

- Copy lives in `src/content.ts`, one block per audience, written with *tu* (the squad's choice for a
  Porto Alegre audience). Legal pages keep *você*.
- The App Store links in `src/config.ts` (`APP_STORE_LINKS`) are `null` until App Review approves the
  apps — the store buttons render but go nowhere until then. The label switches from "Reservar" to
  "Baixar" on `DOWNLOAD_OPENS_AT` (Oct 23, 2026).
- App screens in "Como funciona" are placeholders: set each step's `image` in `src/content.ts` to a
  file under `public/media/`.
- The mascot lives in `public/media/mascot.webp` (freelancer) and `mascot-business.webp` (business), cropped from the transparent 2000px source at 480px tall — 3× its largest display size.
- The LGPD controller in `/privacidade` is described generically (the squad, not a registered legal
  entity) because the project doesn't have one yet — update it once it does.
