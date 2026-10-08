# Mosaic Labs — studio v2

An evolution of the original website, built on the same Next.js, TypeScript, Tailwind, fonts, and supplied brand assets.

## Compare versions

The original checkout at `../mosaic-labs` stays on `main` (baseline commit `77a53c1`). This checkout uses branch `design/studio-v2`.

- Original preview: http://localhost:3040
- Redesigned preview: http://localhost:3041/en

```sh
npm ci
npm run dev -- --port 3041
npm run build
```

## Languages and content

Routes: `/en`, `/pt-br`, `/fr`, `/es`. The root redirects to `/en`. The language selector preserves the current section. Each locale has its own HTML language, title, description, canonical URL, and alternate-language links. Translations are in `lib/dictionaries/` and checked against one shared TypeScript shape.

Contact and product destinations are in `lib/site.ts`. To add a product, add its catalog entry there, then add a matching slug to `products.catalog` in **all four** translation files. The page renders the collection without changes to its section layout; add a custom product visual as needed.

The Lessonara interface is an explicitly labeled concept, not a screenshot of the live product.

## Design

Visual references were opened and captured in the browser: Killswitch, CoachBase, Mosaic Labs LLC, Outpost Labs, Evermade, Oddwork, and Mosaic.com. The redesign favors the quiet typography of CoachBase and product emphasis of Outpost, with a restrained brand composition instead of unrelated illustrations.

The supplied logo geometry, original raster wordmark, and exact four colors are retained. Interface typography is locally served Satoshi. Motion uses transforms on the original SVG shapes, subtle pointer response, scroll entrances, link and product hovers, and native expandable principles. Reduced-motion preferences disable decorative motion. Both light and dark modes are supported.

## Hosting

Ready for Vercel using its Next.js preset. No environment variables are needed. Add `mosaic-labs.co` to Vercel and apply its provided DNS records in Cloudflare when deploying. No infrastructure or DNS changes have been made.
