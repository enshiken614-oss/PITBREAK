# PITBREAK — Phase A

An English, responsive, independent motorsport collectibles preview. React + TypeScript + Vite, with configurable products and a provider-neutral commerce boundary. No backend, analytics, forms, payment processing or live orders.

The owner's corrected repository is **enshiken614-oss/PITBREAK**. The uploaded brief's `my-first-project` name is superseded. Base path: `/PITBREAK/`.

## Local development

Node.js 24 and npm are recommended.

```sh
npm ci
npm run dev
npm run lint
npm test
npm run build
npx playwright install chromium
npm run test:e2e
npm run preview
```

Use the existing checkout; cloud tasks are already isolated, so no Git worktree is required. The development server serves `/PITBREAK/`. Dependencies/files survive a snapshot; running servers must be started again.

## Pages and deployment

Hash routes (`/PITBREAK/#/products/banana-leclerc`) work on GitHub Pages without a server rewrite. They support refreshes and shared links, at the cost of weaker per-page crawler/social-card support than prerendered routes. The app updates titles/descriptions and OG text on navigation, but social crawlers may only see the static fallback. No canonical origin is invented, no product offers are published, and no hash-route sitemap is generated. The SVG fallback is local; replace with an approved 1200×630 PNG for broader social-platform support.

In GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**. Allow Actions if disabled. Push `main`, or select **Actions → Deploy PITBREAK to GitHub Pages → Run workflow**. The workflow runs lint, unit tests, build and responsive Chromium tests before deploying `dist/`. Deployment needs repository Pages permissions and availability under your GitHub plan.

After the deployment succeeds, open **Settings → Pages → Visit site** on iPad Safari. Expected default URL: `https://enshiken614-oss.github.io/PITBREAK/` (not a live-site claim). Use Safari Share → Add to Home Screen if desired. Product deep link: `https://enshiken614-oss.github.io/PITBREAK/#/products/banana-leclerc`.

For another repository name, change `base` in `vite.config.ts`, the fallback OG image path in `index.html`, and both base URLs in `playwright.config.ts`. For the original requested name these become `/my-first-project/`.

## Content and images

- `src/data.ts`: three ordered catalog entries, working names, descriptions, nullable price/currency/specs, gallery paths and alt text; planned markets; nullable contact and verified social links; policy drafts.
- `src/components/`: reusable Header, Footer, Hero, ProductCard, ProductGallery, StatusLabel, CountryList and Layout. `src/pages/`: route content, FAQ and Cart. `src/App.tsx`: routing and cart provider.
- `src/style.css`: responsive layouts, keyboard focus and reduced-motion support.
- `src/commerce.ts`: cart reducer, readiness gates and CommerceAdapter interface. No checkout provider is selected. The preview adapter always rejects checkout, and products cannot be added while readiness is incomplete. Cart is in memory; no customer data is stored.

Place authentic, approved product images in `public/images/products/` (e.g. `banana-leclerc-front.webp`). Update the relevant `gallery` entries in `src/data.ts`, including meaningful alt text. Use optimized WebP/JPEG at about 800–1600px tall with a consistent 4:5 framing. Add multiple entries for gallery controls. Remove the placeholder caption from ProductGallery only when authentic photography is confirmed. Do not use generated product imitations. Existing SVGs explicitly identify themselves as placeholders. The editorial DROP graphic is typography, not product imagery or a redesigned logo.

The provided brief is retained in `REQUIREMENTS.md` for reference; pending facts are never treated as verified business claims. Contact is a safe fallback until configured. Policies are clearly drafts, not legal commitments.

## Commerce activation checklist — all require explicit confirmation

- [ ] Business entity and payment eligibility
- [ ] Checkout provider, credentials and verified server/provider integration
- [ ] Prices and currency
- [ ] Variants and final product specifications
- [ ] Inventory source and stock synchronization
- [ ] Shipping destinations, carriers and rates
- [ ] Customs and tax handling
- [ ] Final returns, refund, privacy and terms policies
- [ ] Fulfillment and order lifecycle
- [ ] Customer support contact
- [ ] Merchandise rights/permissions, including names, likenesses, logos, artwork and memes

Resale permission does not establish IP licensing. A non-affiliation notice does not replace legal review. Only after all prerequisites are verified should a real adapter, safe cart persistence, checkout flow and integration tests be implemented. Never collect card information in this frontend or commit credentials. Enabling flags alone is insufficient: previewAdapter cannot transact.

On this cloud machine, Chromium is already installed: run `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium npm run test:e2e` instead of downloading a browser. Browser tests use the production build, so run `npm run build` first.

## Validation

Unit tests cover catalog accuracy, planned markets and commerce gates/reducer. Browser tests cover pages, navigation, responsive overflow, image loading, disabled purchases, menu keyboard behavior, FAQ controls and browser runtime errors at phone/tablet/desktop sizes. No real transactions are tested or supported.
