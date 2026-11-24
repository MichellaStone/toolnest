# ToolNest MVP

A responsive, English-first Next.js 15 web app with eight working, client-side utilities.

## Run locally

Requires Node.js 20+.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Visit http://localhost:3000.

## Validate production build

```bash
npm run lint
npm run build
npm run start
```

## Included tools

- Profit margin + markup calculator
- Discount calculator
- Loan monthly payment calculator
- VAT / sales tax add and extract
- Word, character, sentence, reading-time counter
- UTM campaign URL builder
- QR code generator with SVG download
- Percentage and percentage-change calculator

## SEO

- Page-specific title and description metadata
- Canonical URLs for tools
- Auto-generated sitemap.xml and robots.txt
- Semantic headings and internal linking

**Before publishing:** set `NEXT_PUBLIC_SITE_URL` to your real HTTPS domain, and replace the placeholder domain in production. Add genuine tool-specific explanatory content and examples to improve search usefulness.

## Monetization

Ad slots are **placeholders only**; there are no ad scripts, analytics, affiliate links, or payment integration. Add advertising only after provider approval, compliance review, and required consent handling. Do not encourage ad clicks or use artificial traffic.

## Launch checklist

- [ ] Verify calculator results and content for your target use cases.
- [ ] Add real operator contact details and legally reviewed policies.
- [ ] Configure your production domain and HTTPS.
- [ ] Test keyboard navigation, mobile layouts, and accessibility.
- [ ] Set up consent management and analytics if needed.
- [ ] Apply for an ad network once the site has original, useful content.

## Notes

The current tools run locally in the browser. QR data is not sent to a QR generation API. This is an MVP, not a hosted service or an approved ad-monetization account.
