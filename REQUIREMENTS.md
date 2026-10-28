# PITBREAK — Codex Development Brief

Version: 1.0 | 2026-10-28 | Status: Implementation-ready specification

## 0. Instructions to Codex

You are implementing the PITBREAK initial independent storefront. Work in the existing GitHub repository `enshiken614-oss/my-first-project` on branch `main` (or a feature branch/PR if your environment requires). First inspect the repository, its current `index.html`, and available project settings. The current site is a rough V0.1 prototype, **not** an authoritative design specification. Preserve functioning work where useful, but refactor freely to deliver the requirements below.

**Start coding immediately**. Do not stop to ask about routine technical choices, CSS details, component names, or placeholder assets. Use sensible maintainable defaults and document them. Ask for approval only before actions involving money, real payment processing, live customer orders, domain purchases, irreversible deletion, or legal claims.

**Priority:** deliver a functional, polished, responsive English storefront shell that can be previewed/deployed without a backend. Then prepare a clearly separated checkout integration layer for later activation. Do not pretend that checkout, shipping, taxes, or inventory are operational before they are configured and tested.

## 1. Project and business context

- Consumer-facing brand: **PITBREAK**. This is a first-stage F1/motorsport meme collectible brand, **not** the eventual multi-creator marketplace. Do not mix a future platform's identity into this site.
- Slogan: **RACING MEMES. REAL COLLECTIBLES.**
- Product positioning: playful, compact, giftable fan-made collectibles based on motorsport internet culture; warm-lit miniature display scenes and blister-style packaging.
- Long-term company vision: help independent Chinese creators reach international customers through discovery, logistics, payments, and trust. This is background context only; **do not build a multi-vendor marketplace in this phase**.
- Primary audience: international English-reading motorsport fans arriving from Instagram/TikTok, especially mobile visitors.
- Proposed first target markets: **United States, United Kingdom, Netherlands, Italy, Japan, Mexico**. These are planned test markets, not verified shipping destinations.
- Instagram/TikTok brand handles and social links are **not yet verified**. Never fabricate social links or claim `@pitbreak` is available.
- Current source of truth: the creator has agreed to overseas promotion/sale and has products/inventory, but procurement price, commercial terms, exact product specs, and fulfillment commitments are unconfirmed. Do not invent them.

## 2. Design direction

- Minimalist, confident **black and white** visual identity; white backgrounds for clean product listings, darker hero or editorial sections, generous whitespace, bold modern typography, clear navigation.
- Avatar direction: black circular field with white **PB.**; wordmark **PITBREAK**. Do **not** regenerate or redesign the finalized logo. Use text-based wordmark until actual approved assets are provided.
- A small red accent may appear in marketing details but **not** in the avatar; avoid overusing racing checkers, gradients, neon colors, or generic car imagery.
- References for mood, **not for copying**: Good Luck Tess (clean/playful), wanefwan.store (typography), napqueenn1 (clear shipping information). Do not copy proprietary assets or layouts verbatim.
- Design should foreground authentic, colorful product photos (yellow banana figure, warm lighting, packaging). Never replace actual products with AI-imagined lookalikes.
- Tone: playful, concise, native-sounding English, not childish or corporate. Avoid false scarcity, fake reviews, unverified sales figures, or invented shipping promises.
- Mobile-first: strong 375px experience; responsive tablet and desktop layouts. Product photos and CTAs readable without zoom.

## 3. Initial product catalog / DROP 001

Implement a configurable catalog with exactly these three initial entries, ordered as below:

1. **Max Childhood Meme** — childhood toilet meme miniature, red/black blister packaging, warm-lit display.
2. **Lewis Hamilton Meme** — seated/strapped-chair meme miniature, blue/white/pink packaging, warm-lit display.
3. **Banana Leclerc** — banana-costume seated miniature, yellow packaging, warm-lit display.

For each product store: stable slug/id, display title, short description, long description (placeholder if not supplied), gallery image paths, price/currency (nullable), stock state (`coming_soon`/`available`/`sold_out`), dimensions/weight (nullable), shipping notes, SEO title/description, and `canPurchase` derived from verified configuration. Use data-driven components, not duplicated markup.

**Critical:** Existing user-supplied product screenshots were unclear video frames. Creator will reshoot authentic high-resolution photos/videos. Until then use tasteful **clearly labeled placeholders**, no generated fake product shots, and no misleading mock images. Build asset folders and a replacement workflow so real assets can be dropped in without layout changes. Use meaningful alt text and image aspect ratios. No arbitrary product prices or stock quantities.

## 4. Required pages and user flows

### Phase A — functional preview site (build now)

1. **Home `/`**
   - Header with PITBREAK wordmark, accessible nav, mobile menu, and cart affordance (cart may be disabled with explanatory tooltip while checkout is unavailable).
   - Hero: slogan **RACING MEMES. REAL COLLECTIBLES.**, DROP 001, short playful supporting copy, CTA **EXPLORE DROP 001**.
   - Three-product collection grid with real-photo placeholders, product names, status **COMING SOON**, and product-detail links.
   - Brand story / independent creator focus.
   - Planned destinations section explicitly labeling the six target countries as **planned, not yet available**.
   - Newsletter/social follow section only if actual destination/consent flow exists; otherwise show a non-interactive launch update message. No dead buttons.
   - Footer: contact placeholder policy, About, Shipping, FAQ, Returns, Privacy, Terms (policies must clearly say draft if not finalized; do not invent legal commitments).
2. **Collection `/collections/drop-001`** — grid, simple product cards, no fake filtering or review data.
3. **Product detail `/products/:slug`** — gallery, title, story, specifications with unknown values marked “Details coming soon”, availability, shipping note, disabled Add to Cart until commerce enabled. Use placeholders responsibly.
4. **About `/about`** — concise story of PITBREAK as an independent motorsport-inspired collectibles project, with a non-affiliation notice.
5. **Shipping `/shipping`** — six planned countries; rates, service, duties, timelines **TBC**, not promised. Show clear notice that checkout is not yet active.
6. **FAQ `/faq`** — only verifiable answers; launch status, product photos, shipping updates, how to follow launch; no invented return/refund policies.
7. **Contact `/contact`** — no fabricated email; provide configurable contact field and safe fallback (“Contact details coming soon”).
8. **Cart `/cart`** — ready UI and state architecture; no ability to place live orders until all commerce prerequisites are met.
9. **404** — branded and accessible.

Use friendly, descriptive routes, page titles, metadata, social preview fallback, and navigation that actually works.

### Phase B — direct checkout capability (prepare architecture, do not activate yet)

The **business requirement is direct purchase on the website**, not a permanent inquiry-only model. However, platform/processor choice (Shopify vs alternatives) was intentionally postponed, and prices, shipping rates, taxes, stock, and payment credentials are missing.

Build a clean `commerce` adapter/interface so a supported checkout provider can later be integrated without rewriting UI. Cart state should be modeled now; Add to Cart and Checkout must remain disabled or clearly in preview mode until the real provider is selected, configured, and verified. Do not collect card details or create fake payment screens. No live payment credentials in source code. Do not silently select Shopify/Stripe or imply the store can take orders today.

Before activation, require explicit confirmation of: business entity and payment eligibility, checkout provider, product prices/currencies, variants, inventory source, shipping destinations and rates, customs/tax handling, return/refund/privacy/terms policies, fulfillment workflow, customer support contact, and necessary rights/permissions for merchandise. Use an activation checklist in README.

## 5. Legal, accuracy, and content safeguards

- F1 names, driver names/likenesses, teams, logos, packaging artwork, and other third-party IP may require authorization for commercial use. The maker's permission to resell does **not** establish IP licenses. Do not assert official status, endorsement, licensing, or legal clearance. Include a clear independent/non-affiliation disclaimer; it is not a substitute for legal review.
- Do not use Formula 1 or team logos, official photography, copyrighted meme screenshots, or unlicensed third-party imagery as decorative assets.
- Do not make unverified “worldwide shipping”, “in stock”, “free shipping”, “limited edition”, “official”, or delivery-time claims.
- Product names are internal working titles; isolate them in data for easy legal/content review before sales launch.
- Only show factual data confirmed by the project owner. Use `TBC`/`Coming soon` for unknown fields.

## 6. Technical requirements

Choose a simple, reliable stack based on the repository and deployment target. The current repo contains a static `index.html` and is compatible with GitHub Pages. **Prefer Vite + React + TypeScript** for component reuse and product/cart state, with a static-site deploy that works on GitHub Pages. If a simpler stack is demonstrably more appropriate, document why. Do not add unnecessary backend infrastructure.

- Mobile-first responsive layout, accessible semantic HTML, keyboard navigation, visible focus states, correct contrast, proper headings, accessible menu and gallery controls.
- Fast page load: minimal dependencies, compressed assets, lazy-loaded below-fold images, no heavy autoplay media.
- Reusable components: `Header`, `Footer`, `Hero`, `ProductCard`, `ProductGallery`, `StatusLabel`, `CountryList`, `FAQ`, `Cart`, `Layout`.
- Configurable data: products, destinations, social handles, contact info, policy copy, and commerce availability flags.
- Route support that works on static hosting (hash routing or appropriate SPA fallback for GitHub Pages; document tradeoff). Ensure deployed subpath `/my-first-project/` works.
- SEO: unique page titles/descriptions, canonical URL only when confirmed, OG fallback assets, robots/sitemap as appropriate; no false structured Product offers when no price/availability.
- Security: no secrets committed; no payment handling without audited provider; validate user input if forms are added.
- Quality: lint/build commands, basic tests for catalog/routes/cart availability behavior, no broken navigation, no console errors.
- README with installation, development, build, deployment, how to replace product photos, content edits, and commerce activation checklist.
- GitHub Actions deployment workflow for GitHub Pages **if repository permissions/settings allow**; otherwise document the exact manual steps. Do not claim the site is live until verified.

## 7. Content and UI acceptance criteria

- Website is fully English; internal README may include Chinese notes for owner.
- Exact headline/slogan **RACING MEMES. REAL COLLECTIBLES.** appears prominently.
- Exactly three DROP 001 products, each with its own working detail route and placeholder gallery.
- Target countries are **US, UK, Netherlands, Italy, Japan, Mexico** only, labeled planned; do not substitute Canada/Australia/Germany/Singapore from the old V0.1 prototype.
- Desktop and mobile menus, CTA links, product links, About, Shipping, FAQ, Contact, Cart and 404 all work.
- No invented prices, shipping fees, product dimensions, social handles, sales figures, reviews, or email addresses.
- No AI-generated imitation of product images.
- Cart/checkout UI cannot accidentally accept orders while commerce is disabled.
- Clear independent fan-project notice and no misleading official association.
- `npm install`, `npm run dev`, `npm run build` work (if Vite chosen).
- Site can be deployed to GitHub Pages and rendered correctly under repository base path.

## 8. Execution plan for Codex

1. Inspect current repository, identify existing code and deployment configuration, then write a concise implementation plan in the PR/commit notes.
2. Build/refactor the app shell, brand styles, responsive navigation and footer.
3. Create data-driven DROP 001 catalog, product cards and detail pages with honest placeholders.
4. Implement About, Shipping, FAQ, Contact, Cart and 404.
5. Add commerce adapter scaffold, feature flags, safe disabled purchase behavior.
6. Add SEO/accessibility/performance improvements and tests.
7. Set up GitHub Pages-compatible deployment and README.
8. Run lint/tests/build, fix issues, and report completed features, preview instructions, outstanding inputs, and any limitations.

## 9. Inputs pending from owner (do not block Phase A)

- New high-resolution real product photos and short vertical videos for all three products.
- Approved final logo asset files, if available (do not redraw).
- Product price, currency, dimensions, materials, packaging details, weight, inventory and variants.
- Confirmed social media handles/URLs and customer support contact.
- Checkout provider, shipping services/rates/destinations, tax/customs policies, fulfillment and return/refund/legal texts.
- Rights review/permissions for driver likenesses, trademarks, packaging art, memes and other third-party IP.
- Custom domain, if any.

## 10. Definition of done for Phase A

A user can open a publicly deployable, polished, responsive English PITBREAK site, navigate all required pages, view DROP 001's three products and their detail pages, understand that product photos/pricing/shipping are pending, and find clear planned-country information. The source is maintainable, builds cleanly, and has a documented path to later direct checkout. No false claims or live transactions occur.

**Deliver the working code, not only a mockup or a plan.**
