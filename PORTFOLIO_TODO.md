# Portfolio checklist — Site 1 (Neon)

## Done in code

- [x] OG image (`app/opengraph-image.tsx`)
- [x] Favicon (`app/icon.tsx`)
- [x] `robots.txt` + `sitemap.xml`
- [x] `metadataBase` + Twitter card in `layout.tsx`
- [x] Footer badge → Portfolio Demo / Портфолио / Portföy
- [x] WhatsApp button (footer + floating FAB)
- [x] Telegram FAB (if `NEXT_PUBLIC_TELEGRAM_USERNAME` is set)
- [x] JSON-LD HealthClub schema
- [x] Styled 404 page
- [x] Footer map height fix
- [x] Hero mobile min-height tweak

## You do manually

1. **Deploy to Vercel** — see `VERCEL_DEPLOY.md`
2. **Set env on Vercel:** `NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app`
3. **Optional:** `NEXT_PUBLIC_TELEGRAM_USERNAME=your_bot` (enables Telegram buttons)
4. **Update portfolio link** in `portfolio-hub/src/data/projects.ts`
5. **Fiverr gallery:** 3–5 screenshots + 15–30 sec scroll video
6. **Real contacts** (optional): replace demo phone/email in `locales/*.json` and `lib/site.ts`
7. **Social links:** replace `#` in `Footer.tsx` socials when you have real URLs
