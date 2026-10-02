# freela-ontap-landing

Landing page and marketing site for [FreelaOnTap](https://freelaontap.com.br) — a marketplace
connecting freelancers to hospitality businesses (bars, restaurants, hotels, events) in Porto
Alegre/RS, Brazil. Built as the Final Challenge project for a squad at the Apple Developer Academy
(cohort S25). The iOS apps live in a separate repository, [`freela-ontap-ios`](https://github.com/FreelaOnTap/freela-ontap-ios).

Besides presenting the product, this site is the source of the URLs App Store Connect requires for
app review: Privacy Policy (`/privacidade`), Terms of Use (`/termos`), and a Support channel
(`/suporte`).

## Stack

React 19 + TypeScript, built with Vite, styled with Tailwind CSS v4. Routing is client-side via
React Router. Deployed on Vercel.

Design tokens (color, spacing, corner radius) are mirrored from the iOS app's Design System
(`FreelaOnTap/DesignSystem/Tokens/*.json` in `freela-ontap-ios`) so the site and the two apps read
as one product — see `src/index.css`. Freelancer-facing sections use the orange accent, Business-facing
sections use the blue accent, matching each product's own theming in the app.

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

- The App Store links in `src/config.ts` (`APP_STORE_LINKS`) are `null` until the apps ship — CTAs
  fall back to a `mailto:` link. Fill them in once the apps are live.
- The LGPD controller in `/privacidade` is described generically (the squad, not a registered legal
  entity) because the project doesn't have one yet — update it once it does.
- The illustration in the "product" section is a provisional placeholder, not the squad's mascot
  (still in production) — swap it once final art exists.
