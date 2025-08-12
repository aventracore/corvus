# PulseTrack

Premium multi-page SaaS marketing site + demo dashboard built with Next.js App Router.

## Stack
- Next.js 14.2.3 (App Router)
- React 18.3.1
- TypeScript 5.3.x
- TailwindCSS 3.4.4, @tailwindcss/typography, @tailwindcss/forms
- Framer Motion 10.16.x
- Recharts 2.7.x (dynamically imported)
- next-seo 6.1.x
- next-sitemap 4.1.x
- react-hook-form 7.51.x, zod 3.23.x

## Getting started
```bash
npm install
npm run dev
```

Build & test:
```bash
npm run build
npm test
```

## Scripts
- `dev`: start dev server
- `build`: typecheck and production build
- `start`: start production server
- `test`: run smoke tests

## Theming
- Colors and tokens: `tailwind.config.js` and CSS variables in `app/globals.css`
- Typography: Inter via `app/layout.tsx`; fluid scale defined in `globals.css`
- Motion timings: components use easing `[0.16, 1, 0.3, 1]`; tweak inside components as needed

## Editing copy & assets
- Landing copy: `app/page.tsx`, components under `components/`
- Features/pricing/customers/about/contact: `app/(marketing)/*`
- Legal: `app/(legal)/*`
- Dashboard: `app/dashboard/page.tsx` and UI in `components/`
- Blog posts: add MDX files under `content/blog` and register in `content/blog/registry.ts`
- Case studies: edit `app/(marketing)/customers/page.tsx`

## Blog
MDX with ESM frontmatter. Add a post by creating `content/blog/my-post.mdx`:
```mdx
export const metadata = { title: 'My Post' }

# My Post
Content...
```
Then add to `content/blog/registry.ts` with slug, title, date, tags, excerpt, and `component: () => import('./my-post.mdx')`.

## Sitemap
Configure `siteUrl` in `next-sitemap.config.js`. Generate during build on Vercel using post-build hook or locally with `npx next-sitemap`.

## PWA
`public/manifest.json` provided. For a full PWA, add a service worker (not included to keep build stable).

## Accessibility
- All interactive elements tabbable with visible focus rings
- Accordions, nav, and controls use ARIA attributes
- Reduced motion honored for large animations

## Image credits
- Unsplash photographers: [Austin Distel], [Campaign Creators], [Brooke Cagle], [Christina Morillo]. Please replace or credit as needed.

## Deploy to Vercel
1. Import the repo in Vercel
2. Framework: Next.js
3. Deploy

## License
Commercial use permitted. © PulseTrack Inc.