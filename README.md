# Mosaic Labs - studio v3

Third design line, based on `design/studio-v2`. Original (`main`) and second version are preserved in their separate worktrees.

## Preview

- Original: http://localhost:3040
- V2: http://localhost:3041/pt-br
- V3: http://localhost:3042/pt-br

```sh
npm ci
npm run dev -- --port 3042
npm run build
```

## Design direction

Applied Leonxlnx Taste Skill (`skills/taste-skill/SKILL.md`) and its redesign guide. Design read: an independent product studio with a graphic, asymmetric composition. Dials: DESIGN_VARIANCE 8, MOTION_INTENSITY 6, VISUAL_DENSITY 3. This is a native CSS/Tailwind aesthetic, not an imitation of an official component design system.

Clash Grotesk display typography replaces Satoshi in headings. Satoshi remains for body/UI text; the supplied logo wordmark is untouched. Fonts are served locally from the official Fontshare source. Both themes stay consistent across the page. All four original logo colors are preserved in the official symbol; interface accents use the original blue.

The refined v3 restores four principles with pieces cropped directly from the original Mosaic mark, a compact email link, the two-row v2 footer, and subtle separators. The Lessonara section uses its actual logo geometry, locally served Geist typeface, green identity, and the supplied real sign-in screenshot with a restrained hover effect. Controls use pill corners. Layer scale: content 0, sticky nav 10, mobile menu 20, skip link 30.

Retained the moving original SVG pieces. Motion springs implement restrained pointer response and magnetic CTA feedback outside the React render cycle. Scroll entrances use IntersectionObserver. All decorative motion respects reduced-motion preferences.

## Content and languages

Routes remain `/en`, `/pt-br`, `/fr`, `/es`, with translated metadata, canonical URLs, language alternatives and a native selector. `/` redirects to `/en`. Anchors and primary navigation remain stable. Add new products in `lib/site.ts`, with a matching slug in `products.catalog` in all four dictionaries.

## Image asset

`public/images/lessonara-login.png` is the real sign-in screenshot supplied by the user. The logo and brand tokens come from the existing Lessonara project; the Latin Geist font was copied from its generated font assets. The previous generated editorial image is retained for history but is no longer displayed.

Generation prompt: “Use case: photorealistic-natural. Asset type: editorial still-life for the Lessonara education SaaS section of an independent product studio website. Create one refined real-looking editorial photograph, landscape 4:3 aspect ratio. Top-down crop with a slight angle: a navy cloth notebook opened to unmarked off-white paper, a graphite pencil, two simple small rounded-corner study cards in muted cobalt #1464C0 and coral #EF6545, a small mustard #F4B942 page tab, all carefully but naturally arranged on a cool light grey tabletop. Paper textures and gentle natural window shadows, restrained composition, tangible and understated, very high photographic quality, no contrived perfect symmetry. Focus is thoughtful lesson preparation, no people, no room, no office, no laptop or screen. The notebook and materials mostly occupy the lower-right and central frame, calm negative space in upper-left. No text, no letters, no logos, no software interface, no branded products, no watermarks, no gradients, no floating objects, no 3D CGI plastic sheen. This is conceptual editorial imagery rather than documentation of a real company’s workplace.”

## Hosting

Vercel Next.js preset, no environment variables. Contact remains contact@mosaic-labs.co. No DNS changes or deployments have been performed.
