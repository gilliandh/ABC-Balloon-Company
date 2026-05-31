import { COLORS } from "../constants";

export default function Hero() {
  const handleCtaClick = (buttonLabel) => {
    if (window.gtag) {
      window.gtag("event", "cta_click", {
        event_category: "Engagement",
        event_label: buttonLabel,
      });
    }
  };

  return (
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end",
      position: "relative", overflow: "hidden",
      background: `linear-gradient(160deg, ${COLORS.forest} 0%, ${COLORS.charcoal} 55%, #1a1a1a 100%)`,
      padding: "0 2rem 8rem",
    }}>
      {/* Geometric accent */}
      <div style={{
        position: "absolute", top: "12%", right: "8%", width: 420, height: 420,
        border: `1px solid rgba(199,166,106,0.15)`, borderRadius: "50%", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "18%", right: "13%", width: 280, height: 280,
        border: `1px solid rgba(199,166,106,0.1)`, borderRadius: "50%", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        background: "repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(255,255,255,0.015) 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(255,255,255,0.015) 80px)",
        pointerEvents: "none",
      }} />

      {/* Skyline silhouette */}
      <svg style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%", opacity: 0.08 }} viewBox="0 0 1400 200" preserveAspectRatio="xMidYMax meet">
        <path d="M0,200 L0,140 L60,140 L60,100 L80,100 L80,80 L100,80 L100,60 L110,60 L110,40 L120,40 L120,60 L130,60 L130,80 L140,80 L140,100 L160,100 L160,140 L200,140 L200,160 L250,160 L250,120 L270,120 L270,90 L280,90 L280,70 L295,70 L295,50 L310,50 L310,70 L325,70 L325,90 L340,90 L340,120 L360,120 L360,160 L400,160 L400,130 L420,130 L420,100 L440,100 L440,80 L455,80 L455,55 L470,55 L470,80 L485,80 L485,100 L500,100 L500,130 L540,130 L540,150 L580,150 L580,110 L600,110 L600,85 L615,85 L615,65 L625,65 L625,45 L635,45 L635,30 L645,30 L645,45 L655,45 L655,65 L665,65 L665,85 L680,85 L680,110 L700,110 L700,150 L750,150 L750,130 L770,130 L770,105 L790,105 L790,130 L810,130 L810,150 L860,150 L860,120 L880,120 L880,95 L895,95 L895,75 L910,75 L910,55 L920,55 L920,75 L935,75 L935,95 L950,95 L950,120 L970,120 L970,150 L1020,150 L1020,140 L1060,140 L1060,115 L1080,115 L1080,90 L1095,90 L1095,70 L1110,70 L1110,50 L1125,50 L1125,70 L1140,70 L1140,90 L1155,90 L1155,115 L1175,115 L1175,140 L1220,140 L1220,160 L1260,160 L1260,130 L1280,130 L1280,110 L1300,110 L1300,130 L1320,130 L1320,160 L1400,160 L1400,200 Z" fill={COLORS.champagne} />
      </svg>

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
          <div style={{ width: 32, height: 1, background: COLORS.champagne }} />
          <span style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: COLORS.champagne, fontWeight: 700 }}>Atlanta's Premier Balloon Design Studio</span>
        </div>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(52px, 8vw, 110px)",
          fontWeight: 400,
          lineHeight: 0.95,
          color: COLORS.ivory,
          marginBottom: "2rem",
          maxWidth: 900,
        }}>
          Elevated Balloon<br />
          <em style={{ color: COLORS.champagne, fontStyle: "italic" }}>Design</em> for<br />
          Unforgettable Events
        </h1>
        <p style={{
          fontSize: 17, lineHeight: 1.7, color: "rgba(247,242,232,0.65)",
          maxWidth: 480, marginBottom: "3rem", fontWeight: 300,
        }}>
          Luxury balloon installations for weddings, corporate events, grand openings, and milestone celebrations — across Atlanta and nationwide.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="#contact" onClick={() => handleCtaClick("Request a Quote")} style={{
            background: COLORS.emerald, color: COLORS.ivory,
            padding: "16px 36px", fontSize: 12, letterSpacing: "0.22em",
            textTransform: "uppercase", textDecoration: "none", fontWeight: 700,
            display: "inline-block",
          }}>Request a Quote</a>
          <a href="#services" onClick={() => handleCtaClick("Our Services")} style={{
            border: `1px solid rgba(199,166,106,0.5)`, color: COLORS.champagne,
            padding: "16px 36px", fontSize: 12, letterSpacing: "0.22em",
            textTransform: "uppercase", textDecoration: "none", fontWeight: 700,
            display: "inline-block",
          }}>Our Services</a>
        </div>
      </div>
    </section>
  );
}
