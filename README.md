# IntelliSense Cloud website

Next.js App Router + TypeScript + Tailwind CSS v4 rebuild for `intellisense.cloud`.

## Run locally

1. Install Node.js 20.9 or newer.
2. Copy `.env.example` to `.env.local`.
3. Run `npm install` and `npm run dev`.
4. Visit `http://localhost:3000`.

The public site renders without external product APIs. Contact delivery uses a server-only Resend API key and Upstash Redis rate limiting. The production contact endpoint returns a configuration error until both are configured; it does not silently drop messages.

## Included experience

- Sticky frosted navigation, responsive layouts, WhatsApp link, glassmorphic cards, reduced-motion support, and a continuous client-logo strip.
- Scroll-linked robot turntable using the supplied front and side image views. This is a light image-based 2.5D effect. A GLB/GLTF model is needed for true geometric 3D rotation.
- Eight capability pages with separate metadata and internal links.
- AutoBiz and Solexa product showcase using the supplied portfolio screenshots.
- Industry cards, leadership vision statements, delivery workflow, engagement models, and contact form.
- Organization, SoftwareApplication, and WebSite JSON-LD; sitemap, robots rules, canonical metadata, and WebP product/leadership/robot assets.

## Production contact setup

Set these server environment variables in the deployment project:

- `NEXT_PUBLIC_SITE_URL=https://intellisense.cloud`
- `RESEND_API_KEY` — private Resend key; never add a `NEXT_PUBLIC_` prefix.
- `CONTACT_FROM_EMAIL` — sender on a domain verified with Resend.
- `CONTACT_TO_EMAIL=info@intellisense.cloud`
- `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` — production form rate limiting.

The API validates and bounds fields, requires same-origin JSON requests, checks a hidden honeypot, caps body size, applies a five-per-hour IP limit, uses a server-only email key, and avoids logging submitted content. Local development falls back to a process-local rate limit. In production the form fails closed if Redis is not configured.

## Security included

- Response headers for content-type sniffing, framing, referrer, browser permissions, opener isolation, and HTTPS transport.
- Per-request nonce Content Security Policy restricted to same-origin resources.
- Server-side input validation, origin check, size cap, honeypot, and rate limiting.
- No credentials or `.env` files are included.
- `poweredByHeader` disabled; `/api` excluded from the sitemap and crawling.

Before launch, configure HTTPS at the host, keep secrets in deployment environment settings, verify the sending domain, configure Upstash, and run a deployment security scan. Security depends on those hosting settings as well as this source.

## Content and assets

Product summaries follow the supplied website rebuild content. AutoBiz links to Minaal Rizwan's Upwork portfolio URL supplied with the brief. Client marks and robot/leadership images were extracted from the supplied logo PDF, website images ZIP, and portfolio ZIP. Replace any mark, portrait, image, or claim that is not approved for public display. Delivery metrics are requested draft copy; validate the actual service levels and evidence before launch.

## Performance targets

Use field data to keep Core Web Vitals in Google's “good” ranges at the 75th percentile: LCP ≤2.5s, INP ≤200ms, and CLS ≤0.1. The site uses local next-gen image assets, explicit image/card geometry, lazy loading for below-the-fold visuals, and scroll-linked transforms instead of loading an always-on WebGL runtime. These are implementation targets, not measured production results.
# Image notes

- The hero robot and The Cubicle logo are derived from assets supplied by IntelliSense Cloud.
- AutoBiz and Solexa product artwork uses images supplied in IntelliSense Cloud's Library.
- Industry photography is from Unsplash, not the company portfolio: Long Chung (clothing retail), Vitaly Gariev (legal services and e-commerce), Hazel J (industrial production), and T (@tanyabarrow, commercial real estate). Source pages: [retail](https://unsplash.com/photos/clothing-store-interior-with-racks-of-apparel-VeIViU2Suek), [legal](https://unsplash.com/photos/business-people-signing-a-contract-at-a-table-iPheGw7_UaI), [industrial](https://unsplash.com/photos/vast-industrial-complex-with-pipes-tanks-and-buildings-9KeG7W4cI5U), [e-commerce](https://unsplash.com/photos/woman-holding-credit-card-and-smartphone-for-online-shopping-S37tGF1Z1fY), [commercial property](https://unsplash.com/photos/large-brick-building-with-offices-to-let-signs-8E-1Dq6rGFc).
- Industry photos are displayed through the Unsplash image CDN and are optimized through Next.js Image.

## Website documentation

See [the detailed website handoff](docs/website-documentation.md) for page architecture, component behavior, content sources, SEO, performance, security setup, and launch review items.
