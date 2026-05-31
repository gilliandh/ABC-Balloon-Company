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
        <path d="M0,200 L0,170 L60,170 L60,160 L120,160 L120,150 L170,150 L200,160 L200,75 Q 225,65 250,75 L250,160 L290,160 L290,100 L310,100 L310,80 L320,80 L320,65 L330,65 L330,45 L333,15 L336,45 L336,65 L346,65 L346,80 L356,80 L356,100 L376,100 L376,160 L420,160 L420,90 L440,75 L460,90 L480,75 L500,90 L500,160 L540,160 L540,120 L560,105 L580,90 L600,75 L620,75 L620,160 L670,160 L670,150 L700,135 L735,130 L770,135 L800,150 L800,160 L840,160 L840,90 L878,50 L878,25 L882,25 L882,50 L920,90 L920,160 L960,160 L960,100 L1020,100 L1020,160 L1060,160 L1060,130 L1100,130 L1100,140 L1160,140 L1160,150 L1220,150 L1220,160 L1400,160 L1400,200 Z" fill={COLORS.champagne} />
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
