import { COLORS, NAV_LINKS } from "../constants";

export default function Nav({ scrolled }) {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(19,19,19,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? `1px solid rgba(199,166,106,0.2)` : "none",
      transition: "all 0.4s ease",
      padding: "0 2rem",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, letterSpacing: "0.35em", color: COLORS.champagne, textTransform: "uppercase" }}>Atlanta</span>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 600, letterSpacing: "0.15em", color: COLORS.ivory, textTransform: "uppercase", lineHeight: 1.1 }}>Balloon Company</span>
        </div>
        <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "2rem" }} className="nav-links">
            {NAV_LINKS.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} style={{ color: "rgba(247,242,232,0.7)", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = COLORS.champagne}
                onMouseLeave={e => e.target.style.color = "rgba(247,242,232,0.7)"}
              >{l}</a>
            ))}
          </div>
          <a href="#contact" style={{
            background: COLORS.emerald, color: COLORS.ivory, padding: "10px 22px",
            fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none",
            border: "none", cursor: "pointer", fontFamily: "'Lato', sans-serif", fontWeight: 700,
          }}>Book Now</a>
        </div>
      </div>
    </nav>
  );
}
