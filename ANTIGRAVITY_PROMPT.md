# Atlanta Balloon Company — Full Website Build Prompt
## For Google Antigravity 2.0 Cascade Agent

---

## YOUR MISSION

Build a production-ready, luxury event balloon company website using **React + Vite**, deployable to **Vercel**. The site uses **GoHighLevel (GHL)** to handle all form submissions and email automations, and **Google Analytics 4 (GA4)** for visitor tracking. Design is dark, editorial, and luxury — emerald green, champagne gold, and ivory on charcoal.

Do not stop until the project builds without errors, all integrations are wired up, and the site is ready for `vercel deploy`.

---

## TECH STACK

- **Framework**: React 18 + Vite 4
- **Styling**: Inline CSS-in-JS (no Tailwind, no external UI libraries)
- **Fonts**: Google Fonts — Cormorant Garamond (serif) + Lato (body)
- **Form handling**: GoHighLevel webhook via fetch POST
- **Analytics**: Google Analytics 4 via gtag.js
- **Deployment**: Vercel (static SPA)
- **Node**: 18+

---

## COLOR PALETTE

```js
const COLORS = {
  emerald:   "#046A4E",
  forest:    "#013B2D",
  champagne: "#C7A66A",
  ivory:     "#F7F2E8",
  charcoal:  "#2D2D2D",
  sage:      "#B7C7AE",
  dark:      "#111111",
};
```

Typography: Cormorant Garamond for headlines (large, italic champagne accents), Lato for body (300 body, 700 labels/buttons). Square button edges. Max content width 1200px.

---

## PROJECT STRUCTURE

```
atlanta-balloon-co/
├── index.html
├── vite.config.js
├── package.json
├── vercel.json
├── .env.example
├── public/favicon.svg
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx
    └── components/
        ├── Nav.jsx
        ├── Hero.jsx
        ├── Marquee.jsx
        ├── Stats.jsx
        ├── Services.jsx
        ├── Gallery.jsx
        ├── About.jsx
        ├── Faq.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        └── AnimatedSection.jsx
```

---

## SECTIONS TO BUILD

### Nav
Fixed top. Transparent on load, becomes rgba(17,17,17,0.97) + blur(12px) after 60px scroll. Left: "Atlanta" (champagne serif small) / "Balloon Company" (ivory serif). Right: nav links + emerald "Book Now" CTA. Mobile: hide links below 768px.

### Hero
Full viewport. Gradient background: `linear-gradient(160deg, #013B2D 0%, #2D2D2D 55%, #1a1a1a 100%)`. Decorative concentric circles top-right (champagne 10% opacity border). Grid texture overlay. Atlanta skyline SVG silhouette at bottom (8% opacity). H1 in Cormorant clamp(52px,8vw,110px): "Elevated Balloon / *Design* for / Unforgettable Events" — italic "Design" in champagne. Two CTAs: "Request a Quote" (emerald) and "Our Services" (champagne border).

### Marquee
Emerald bar. Infinitely scrolling keywords: Balloon Arches · Organic Installations · Wedding Decor · Corporate Installs · Grand Openings · Rooftop Events · Baby Showers · Bridal Showers · Luxury Birthdays · Atlanta & Nationwide. Duplicate 4x for seamless loop.

### Stats
Forest background. 4 columns: 500+ Events Installed / 12+ Cities Served / 100% Custom Palettes / 5★ Average Rating. Numbers in Cormorant 56px champagne.

### Services
Charcoal background. 6 cards in 3-column grid. Parent background rgba(199,166,106,0.1) with 1px gap creates hairline dividers. Card hover shifts to #1e1e1e. Services: (1) Luxury Balloon Installations, (2) Corporate & Brand Activations, (3) Wedding & Ceremony Decor, (4) Rooftop & Venue Installs, (5) Organic & Boho Balloon Arches, (6) Nationwide Destination Events.

### Gallery
#1a1a1a background. 6 color-block placeholders in asymmetric CSS grid (items 2 and 5 span 2 columns). Each has hover overlay (forest 85% opacity) with "View Project" text. Add GA4 event on click.

### About
Forest background. Two-column: text left, 2x2 decorative grid right. Messaging: luxury medium, not party-store decor. ATL / US "Based In / Serving" stat block.

### FAQ
Charcoal, max-width 800px. 5 accordion items with max-height CSS transition. Questions in Cormorant 17px, answers in Lato 15px 300-weight.

### Contact
Forest background. Two-column: contact info left, form right. Fields: Full Name, Email, Event Type & Date, Message. All required. GHL webhook integration (see below). GA4 event on success.

### Footer
#111 background. Nav links, company name, copyright. Hidden SEO keyword paragraph (position: absolute; left: -9999px) for crawlers.

### AnimatedSection utility
IntersectionObserver hook. On intersect: opacity 0→1 + translateY(32px)→0 in 0.8s ease. Accepts delay prop (ms).

---

## GOGIGHLEVEL FORM INTEGRATION

### .env.example
```
VITE_GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/YOUR_WEBHOOK_ID/webhook-trigger/YOUR_TRIGGER_ID
```

### Submit handler in Contact.jsx
```js
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("loading");

  const payload = {
    full_name: formData.name,
    email: formData.email,
    event_type: formData.event,
    message: formData.message,
    source: "Website Contact Form",
    tags: ["website-lead", "atlanta-balloon-co"],
  };

  try {
    const res = await fetch(import.meta.env.VITE_GHL_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      setStatus("success");
      if (window.gtag) window.gtag("event", "form_submit", {
        event_category: "Contact",
        event_label: "Quote Request",
      });
    } else {
      setStatus("error");
    }
  } catch (err) {
    console.error("GHL submission error:", err);
    setStatus("error");
  }
};
```

### Form states
- idle: normal form
- loading: button shows "Sending..." and is disabled
- success: replace form with thank-you card (emerald border, champagne icon, "Message Received" serif heading, "We'll be in touch within 24 hours" body)
- error: inline error message "Something went wrong. Please email us directly at hello@atlantaballoonco.com"

---

## GOOGLE ANALYTICS 4

Add to index.html head (user replaces G-XXXXXXXXXX with real ID):
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', { send_page_view: true });
</script>
```

Custom events to fire (always guard with `if (window.gtag)`):
- Hero CTA click: `gtag("event", "cta_click", { event_category: "Engagement", event_label: buttonLabel })`
- Form submit success: `gtag("event", "form_submit", { event_category: "Contact", event_label: "Quote Request" })`
- Gallery click: `gtag("event", "gallery_click", { event_category: "Gallery", event_label: itemLabel })`
- Service card hover: `gtag("event", "service_view", { event_category: "Services", event_label: serviceTitle })`

---

## SEO in index.html

```html
<title>Atlanta Balloon Company | Luxury Balloon Installations & Event Decor</title>
<meta name="description" content="Atlanta's premier luxury balloon design studio. Organic balloon arches, corporate installations, wedding decor, and statement installs for upscale events across Atlanta and nationwide." />
<meta name="keywords" content="luxury balloon installations Atlanta, organic balloon arch Atlanta GA, balloon decorations Atlanta, wedding balloon decor Atlanta, corporate balloon installation, grand opening balloons Atlanta, balloon company near me, luxury event decor Atlanta, Buckhead balloon stylist, balloon arch Atlanta, balloon garland Atlanta, upscale balloon decorations, event decor company Atlanta Georgia" />
<link rel="canonical" href="https://atlantaballooncompany.com" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Atlanta Balloon Company | Luxury Balloon Design Studio" />
<meta property="og:description" content="Elevated balloon installations for weddings, corporate events, and luxury celebrations. Based in Atlanta, serving clients nationwide." />
<meta property="og:url" content="https://atlantaballooncompany.com" />
```

Also include LocalBusiness JSON-LD schema with Atlanta address, coordinates, phone, hours, priceRange "$$$", areaServed including Atlanta city, Georgia state, and United States.

---

## vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## package.json
```json
{
  "name": "atlanta-balloon-company",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": { "dev": "vite", "build": "vite build", "preview": "vite preview" },
  "dependencies": { "react": "^18.2.0", "react-dom": "^18.2.0" },
  "devDependencies": { "@vitejs/plugin-react": "^4.0.0", "vite": "^4.4.0" }
}
```

---

## PLACEHOLDER CONTENT
- Phone: (404) 000-0000
- Email: hello@atlantaballoonco.com
- Hours: Monday–Saturday, 9am–6pm EST
- Instagram: @atlantaballooncompany
- Copyright: 2025 Atlanta Balloon Company

---

## README.md — GENERATE WITH THESE SECTIONS

1. Project overview
2. Local dev: `npm install && npm run dev`
3. Environment variables table (VITE_GHL_WEBHOOK_URL)
4. GHL Setup: Settings > Integrations > Webhooks > create webhook > copy URL > paste into Vercel env var. In GHL workflow: map contact fields, add tag "website-lead", send internal notification, send automated reply email to lead within 5 minutes.
5. GA4 Setup: analytics.google.com > New Property > copy G-XXXXXXXXXX > replace in index.html > redeploy. Mark form_submit as a Conversion in GA4.
6. Vercel deploy: push to GitHub > vercel.com > Import repo > Deploy. Or: `npm i -g vercel && vercel`.
7. Post-launch checklist:
   - [ ] Replace (404) 000-0000 with real phone
   - [ ] Replace hello@atlantaballoonco.com with real email
   - [ ] Add real gallery photos (swap color blocks for img tags with object-fit: cover)
   - [ ] Set VITE_GHL_WEBHOOK_URL in Vercel environment variables dashboard
   - [ ] Replace G-XXXXXXXXXX in index.html with real GA4 Measurement ID
   - [ ] Update canonical URL and og:url to real domain
   - [ ] Submit sitemap.xml to Google Search Console
   - [ ] Validate schema at validator.schema.org

---

## QUALITY GATES — VERIFY BEFORE DONE

1. `npm run build` exits with code 0, no warnings
2. All form states (idle/loading/success/error) render correctly
3. Nav transitions on scroll
4. All AnimatedSection components animate in on scroll
5. Marquee loops with no visible seam
6. Grid collapses to 1 column on mobile (768px breakpoint)
7. All `window.gtag` calls are guarded with `if (window.gtag)`
8. GHL fetch is fully wrapped in try/catch
9. No uncaught errors in browser console on production build preview

---

*This prompt is fully self-contained. Start immediately. Do not ask clarifying questions — make sensible decisions and build.*
