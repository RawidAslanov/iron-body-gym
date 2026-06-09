# Deploy IRON BODY GYM (Site 1 — Neon) to Vercel

## Option A — Vercel website (easiest)

1. Push this folder to GitHub (new repo `iron-body-gym`).
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import repo.
3. Framework: **Next.js** (auto-detected).
4. Deploy. Default URL will be like `iron-body-gym-xxx.vercel.app`.
5. Optional: Settings → Domains → rename to `iron-body-gym.vercel.app` if free.
6. Update the URL in `portfolio-hub/src/data/projects.ts` after deploy.

## Option B — Vercel CLI

```powershell
cd "c:\Users\user\Desktop\gym site"
npx vercel
```

Follow prompts. Run `npx vercel --prod` for production.

## Before deploy checklist

- [ ] `npm run build` passes locally
- [ ] Add `metadataBase` in `app/layout.tsx` (your Vercel URL)
- [ ] OG image for Fiverr / social previews
- [ ] Favicon
- [ ] `robots.txt` + `sitemap.xml`

No env variables required for this static frontend demo.
