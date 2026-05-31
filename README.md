# Atlanta Balloon Company

## 1. Project Overview
Production-ready, luxury event balloon company website built using React + Vite. Deployed on Vercel, integrated with GoHighLevel for lead generation, and Google Analytics 4 for tracking. The design is dark, editorial, and luxury — emerald green, champagne gold, and ivory on charcoal.

## 2. Local Dev
```bash
npm install
npm run dev
```

## 3. Environment Variables
| Variable | Description |
|---|---|
| `VITE_GHL_WEBHOOK_URL` | The GoHighLevel webhook URL for contact form submissions. |

## 4. GHL Setup
- Settings > Integrations > Webhooks > create webhook > copy URL > paste into Vercel env var (`VITE_GHL_WEBHOOK_URL`).
- In GHL workflow: map contact fields, add tag "website-lead", send internal notification, send automated reply email to lead within 5 minutes.

## 5. GA4 Setup
- `analytics.google.com` > New Property > copy `G-XXXXXXXXXX` > replace in `index.html` > redeploy.
- Mark `form_submit` as a Conversion in GA4.

## 6. Vercel Deploy
- Push to GitHub > vercel.com > Import repo > Deploy.
- Or: `npm i -g vercel && vercel`.

## 7. Post-launch Checklist
- [ ] Replace `(404) 000-0000` with real phone
- [ ] Replace `hello@atlantaballoonco.com` with real email
- [ ] Add real gallery photos (swap color blocks for img tags with object-fit: cover)
- [ ] Set `VITE_GHL_WEBHOOK_URL` in Vercel environment variables dashboard
- [ ] Replace `G-XXXXXXXXXX` in `index.html` with real GA4 Measurement ID
- [ ] Update canonical URL and og:url to real domain
- [ ] Submit `sitemap.xml` to Google Search Console
- [ ] Validate schema at `validator.schema.org`
