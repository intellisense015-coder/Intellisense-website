# IntelliSense Cloud Website

**Website handoff and implementation notes**  
**Updated:** September 25, 2026  
**Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Motion for React

## 1. Project summary

The site presents IntelliSense Cloud as a software, AI, and product engineering partner. It combines a concise conversion-focused homepage with detailed service and product pages, customer proof, industry context, leadership content, a delivery model, and a server-backed contact form.

The visual system follows the supplied IntelliSense logo’s indigo/blue and cyan colors, with a light neutral canvas, restrained glass surfaces, soft shadows, and motion used to support hierarchy. Cards are intentionally borderless. There are no section eyebrow labels or a technology-stack logo wall.

## 2. Page flow and content architecture

### Homepage order

1. **Header and navigation** — fixed translucent navigation with Home, About, Products, Services, Industries, and Start Project. Section links use root-relative anchors, so the same header works on service and product detail routes.
2. **Hero** — one `<h1>` with “Build Smarter. Automate Faster. Scale with Intelligence.”, a two-sentence business proposition, three actions, and the supplied transparent robot artwork. The side callouts and “Software, AI and cloud engineering” line have been removed. Robot movement is a scroll-linked 2.5D turn; the single supplied view is not presented as a true 360-degree model.
3. **Client proof** — “Trusted by teams across industries” above a smooth, colored, infinite marquee using six client marks. The cards have no fill or borders and are 30% larger than the previous 205×88 px treatment.
4. **Capabilities** — eight focused cards linking to the service pages: AI Software, Custom Software, ERP / Operating Systems, App Engineering, AI Automations, Web Applications, AI & Data Systems, and Cloud & Infrastructure.
5. **Product showcase** — interactive AutoBiz/Solexa switcher using supplied product cover and dashboard imagery, with a direct link to each product page. The AutoBiz overlay label was removed.
6. **Industries** — Clothing & Retail, Legal Services, Industrial Gas & Chemical Production, E-commerce, and Commercial Real Estate. Each has a relevant image, short context, and an outcome statement.
7. **Leadership and founder story** — a quieter story-led block for Sohaib Asgher, titled Founder & CEO, with four short paragraphs about why the company exists; Minaal Rizwan appears separately as Co-Founder. Each portrait uses only its own half of the user-supplied composite image, without altering or re-encoding the source file.
8. **Delivery framework** — four steps from discovery and architecture to continuous optimization, followed by three engagement choices: project-based, dedicated team, and staff augmentation.
9. **Proof points** — four requested highlight cards. These figures and service claims need internal substantiation before being treated as audited performance guarantees.
10. **Contact** — “Let’s Talk What’s Next,” a direct email alternative, and a professional, borderless form on a flat translucent surface.
11. **Footer** — integrated into the page background, no curved/cutout section treatment, larger link and contact type, quick links, social links, animated floating mark, and the requested 2026 copyright line.

### Page routes

| Route | Purpose |
| --- | --- |
| `/` | Main company landing page |
| `/services/ai-software` | AI software discovery, assistants, document intelligence, evaluation, use cases, FAQs, CTA |
| `/services/custom-software` | Custom platforms, SaaS engineering, modernization, integration, use cases, FAQs, CTA |
| `/services/erp-os-systems` | ERP and operating workflows, data connections, migration, use cases, FAQs, CTA |
| `/services/app-engineering` | Product architecture, web/mobile engineering, quality, release practices, FAQs, CTA |
| `/services/ai-automations` | Workflow automation, human review, integration, governance, use cases, FAQs, CTA |
| `/services/web-apps` | Customer portals, internal dashboards, commerce, accessibility and SEO, FAQs, CTA |
| `/services/ai-data-systems` | Data integration, analytics, governance, AI over business information, FAQs, CTA |
| `/services/cloud-infrastructure` | Cloud architecture, DevOps, security foundations, resilience and observability, FAQs, CTA |
| `/products/autobiz` | AutoBiz overview, supplied feature screenshots, portfolio link, inquiry CTA |
| `/products/solexa` | Solexa overview, supplied inventory/operations screenshots, inquiry CTA |
| `/privacy` | Existing privacy page |

Each service route has distinct page metadata, one semantic H1, a service-specific lead, outcomes, capabilities, example use cases, implementation flow, FAQs, and a contact CTA. The reusable layout is in `src/app/services/[slug]/page.tsx`; research-informed content is in `src/lib/service-pages.ts`.

## 3. Design system and interaction behavior

### Color and surface use

- **Brand indigo/blue:** primary actions, active states, links, and selected metric emphasis.
- **Cyan:** supporting accents, robot lighting, and secondary emphasis.
- **Ink/navy:** headings and readable contrast.
- **Cool neutral background:** the page foundation and separation between major content regions.
- **Frosted glass:** translucent white surfaces with backdrop blur and soft shadows. Use sparingly enough to preserve readable text, especially on small screens.
- **Cards:** no borders. Use spacing, restrained tonal shifts, and soft shadow instead of outlines.
- **Client logos:** native/color assets on a transparent background, never grayscale-filtered.
- **Contact area:** flat translucent backdrop, no gradient, no border; fields use a neutral fill and a visible focus halo.

The existing stylesheet uses CSS custom properties near the top of `src/app/globals.css`. The final responsive overrides are at the end of the same file.

### Motion and accessibility

- The robot artwork shifts and rotates subtly based on scroll progress. This uses the existing Motion for React integration and does not load a large 3D model or WebGL runtime.
- Product tabs use hover, focus, and click state to update the authentic screenshot and details. Click remains available on touch devices.
- The client ticker runs as a linear, seamless marquee. Hover does not pause it; duplicated marks are hidden from assistive technology.
- Industry cards reveal outcome information on hover or keyboard focus; on narrow layouts that detail stays visible.
- Scroll-linked and CSS motion are reduced when `prefers-reduced-motion` is enabled. Keep keyboard focus indicators, labelled controls, descriptive image text, and status feedback in future edits.

## 4. Product and image assets

### AutoBiz

Assets from `autobiz.zip` are optimized as WebP and stored at `public/images/products/autobiz/`:

- `cover.webp`
- `dashboard.webp`
- `ai-chat.webp`
- `document-intelligence.webp`
- `documents.webp`
- `email.webp`
- `image-generation.webp`
- `integrations.webp`

The detail page uses the real supplied interface images. The AutoBiz CTA links to Minaal Rizwan’s supplied Upwork portfolio entry. Product copy is intentionally limited to the capabilities visible in the screenshots and the product information already supplied for the site.

### Solexa

All 14 screenshots from `solexa.zip` are extracted as optimized WebP under `public/images/products/solexa/`. The detail gallery features representative dashboard, operations, and inventory views. The archive also contains access, settings, and product identity screens for later use.

### Founder portraits

`public/images/founders/founders-pair.png` is a byte-for-byte copy of the supplied image. CSS clips and positions the original image into independent portraits: the right half for Sohaib Asgher and the left half for Minaal Rizwan. It has not been digitally retouched or enlarged. The provided file is 1774×887 pixels rather than a genuine 4K source, so the page preserves the supplied quality; upload separate 4K portraits later if true 4K detail is required.

### Industry images and credits

These are web-sourced Unsplash images and are separate from portfolio imagery. They are delivered through `next/image` optimization and are lazy-loaded below the fold.

| Industry | Image description and source |
| --- | --- |
| Clothing & retail | Luca, [clothing store interior with racks of apparel](https://unsplash.com/photos/clothing-store-interior-with-racks-of-apparel-a-_PeeYVfQk) |
| Legal services | Vinícius Marçall, [professional working at a desk](https://unsplash.com/photos/a-person-types-on-a-laptop-at-a-desk-nHBfgBht998) |
| Industrial gas & chemical production | waa towaw, [illuminated industrial complex](https://unsplash.com/photos/industrial-complex-illuminated-at-night-against-dark-sky-M2PPBz3p5a8) |
| E-commerce | Guilherme Mendes, [packaging and warehouse](https://unsplash.com/photos/cardboard-boxes-and-packaging-supplies-in-a-warehouse-RVP3wAw9gJY) |
| Commercial real estate | Richard Williams, [modern commercial office buildings](https://unsplash.com/photos/modern-office-buildings-with-glass-windows-ouCp9PvYuuA) |

Unsplash pages list these images as free to use under the Unsplash License. Credits are recorded here for asset management. If the website moves to a self-hosted image library, download and serve the approved originals while retaining these source records.

## 5. SEO and accessibility

- The homepage and detail pages each use a single page-specific `<h1>` and a semantic H2/H3 hierarchy.
- Canonical URLs, page titles, descriptions, Open Graph fields, and social card metadata are set in Next.js metadata exports.
- Homepage JSON-LD includes `Organization`, `WebSite`, and `SoftwareApplication`; product pages use product-specific `SoftwareApplication`; service routes use `Service`.
- `src/app/sitemap.ts` includes the homepage, privacy route, all eight service routes, and both product pages. `src/app/robots.ts` publishes the sitemap and disallows `/api/`.
- The contact form has explicit labels, native input types and constraints, and an accessible status message. Navigation has a mobile toggle and a skip link.
- Image and layout containers reserve predictable dimensions to reduce layout shift.

Structured data must describe real business facts. Review performance claims, organization contact data, social URLs, and software details before publication. Do not add schema ratings, reviews, prices, or certifications unless they are verified.

## 6. Performance strategy

- Uses Next.js App Router, React Server Components where possible, and a small client surface for hero motion, product tabs, mobile navigation, and contact submission.
- Uses supplied WebP product/robot images and Next.js image optimization for industry photography. Below-fold images are lazy-loaded; the robot and product detail hero artwork receive priority as visible visual content.
- No Three.js/WebGL scene is loaded. The robot uses a supplied image and CSS/Motion 2.5D transforms, avoiding a heavy model download and GPU workload.
- Motion is transform/opacity oriented, and reduced-motion preferences are respected.
- Avoid adding large auto-playing video, icon kits, font bundles, or client-only page frameworks without a measured need.
- Measure mobile and desktop in PageSpeed Insights or Lighthouse before launch and use field data once available. Google’s recommended Core Web Vitals assessment is at the 75th percentile; targets are LCP ≤2.5 seconds, INP ≤200 ms, and CLS ≤0.1. No production field score is claimed by this handoff.

## 7. Security and operational setup

### Existing controls

- Security headers in `next.config.ts`: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy`, and HSTS; Next’s powered-by header is disabled.
- Per-request CSP in `src/proxy.ts` with a nonce for scripts, same-origin API/form restrictions, no object/embed, and frame ancestors disabled.
- Contact API validates same-origin requests, enforces JSON content type and a 16 KB body limit, validates fields with Zod, includes a honeypot, and caps accepted submissions at five per hour per IP.
- In production, rate limiting is fail-closed and requires Upstash Redis. Email is sent server-side through Resend; credentials are not exposed to the browser.
- Dependency versions are lockfile-pinned; run dependency/security review before production releases.

### Required production variables

Configure these as server-side deployment secrets. Do not prefix secret values with `NEXT_PUBLIC_`.

```env
NEXT_PUBLIC_SITE_URL=https://intellisense.cloud
RESEND_API_KEY=…
CONTACT_FROM_EMAIL=Intellisense Website <website@intellisense.cloud>
CONTACT_TO_EMAIL=info@intellisense.cloud
UPSTASH_REDIS_REST_URL=…
UPSTASH_REDIS_REST_TOKEN=…
```

The contact API intentionally returns an error if the production mailer or rate limiter is missing. Verify the sender domain, delivery, and rate-limit behavior in the deployed environment. Security controls reduce exposure but do not constitute a guarantee of complete security; review hosting configuration, dependency advisories, secrets, backups, and incident processes before launch.

## 8. Local development and checks

```bash
npm install
npm run dev
```

Before packaging or deployment:

```bash
npm run lint
npm run build
npm audit
```

If required build variables are absent locally, contact form submission will display the configured fallback message; set the values in a secure local `.env.local` for a full integration check. Never add `.env.local` or real API keys to the ZIP or repository.

## 9. Important content review before launch

1. Confirm the supplied client marks are approved for public display and that names/brand spellings are correct.
2. Verify the 99%, 24/7, 10x, and zero-downtime metrics. Replace or qualify any number the company cannot substantiate. “Zero downtime” should not be marketed as a guarantee.
3. Confirm “Founder & CEO” is Sohaib’s approved public title.
4. Confirm Solexa module descriptions reflect the current product release; the screenshots show the available evidence but are not a substitute for a product spec.
5. Confirm the AutoBiz portfolio link and the product’s access/contact process.
6. Configure Resend and Upstash production secrets; send a test enquiry from the production domain.
7. Test keyboard navigation, reduced-motion behavior, small-screen layouts, image loading, and live Core Web Vitals after deployment.
8. Review final legal/privacy language and any analytics/cookie requirements for the deployment markets.

## 10. Research notes

The website review was qualitative and focused on public information architecture and service-page patterns, not private conversion analytics. The common patterns applied here are capability-led navigation, a clear first-screen proposition and action, product/case-study proof, industry-specific context, a concise delivery narrative, and repeated low-friction contact paths. Arbisoft’s capability/service pages and case studies show the value of separating service detail from named industry examples; BairesDev’s public service pages cover full-cycle engineering and multiple specialist capabilities; Devsinc’s current home positions AI-native engineering within enterprise delivery. These observations informed structure but do not claim those firms’ conversion rates or guarantee comparable outcomes.

For service content, implementation themes draw on:

- [NIST AI Risk Management Framework](https://airc.nist.gov/airmf-resources/airmf/0-ai-rmf-1-0/) and its [Govern / Map / Measure / Manage Playbook](https://airc.nist.gov/airmf-resources/playbook/) for responsible AI lifecycle and governance language.
- [OWASP API Security Top 10](https://owasp.org/www-project-api-security/) for access-control, authentication, and API risk considerations.
- [Microsoft Power Automate approval workflows](https://learn.microsoft.com/en-us/power-automate/get-started-approvals) for human review in automation.
- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) for accessibility considerations.
- [Google web.dev Core Web Vitals](https://web.dev/articles/vitals) for performance targets and field-measurement guidance.

Competitor pages reviewed include [Arbisoft](https://arbisoft.com/core-capabilities), [BairesDev](https://www.bairesdev.com/solutions/), and [Devsinc](https://devsinc.com/). The recommendation is to use their public page structures as directional references, while building IntelliSense Cloud’s proof and messaging from verified company materials.
