# Mosaic Labs

Institutional website built with Next.js App Router, TypeScript, and Tailwind CSS 4. Original supplied brand assets and locally served Satoshi fonts. No database, forms, tracking, or transactional email service required.

## Run locally

Requires Node.js 20.9 or later.

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Validate

```sh
npm run typecheck
npm run build
```

## Content

Edit the email, domain, and product collection in `lib/site.ts`. Add product entries to the array to create additional cards. The Lessonara workspace is an explicitly labeled concept illustration, not a screenshot of the live product. Replace or extend its component for future products.

Official logo files are preserved in `public/brand`. The wordmark uses the supplied raster logo; it is not recreated in another typeface. Interface typography is Satoshi, downloaded from the official Fontshare CDN. The four logo colors are #1464C0, #EF6545, #F4B942, and #0B9E8A.

Light and dark mode follow the device preference until the visitor chooses a theme. The choice is saved locally. Motion respects the visitor's reduced-motion setting.

## Deploy to Vercel

Import this folder's repository into Vercel. Use the default Next.js preset, `npm run build`, and no environment variables. Add `mosaic-labs.co` to the Vercel project and apply the DNS records shown by Vercel in Cloudflare. This project does not modify DNS or provision infrastructure.

Before publishing, confirm the contact email in `lib/site.ts` and that the Lessonara destination is ready for visitors.
