import { useState } from "react";
import { COLORS, NAV_LINKS } from "../constants";

export default function Nav({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled || menuOpen ? "rgba(19,19,19,0.97)" : "transparent",
      backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
      borderBottom: scrolled || menuOpen ? `1px solid rgba(199,166,106,0.2)` : "none",
      transition: "all 0.4s ease",
      padding: "0 2rem",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 0, zIndex: 150 }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, letterSpacing: "0.35em", color: COLORS.champagne, textTransform: "uppercase" }}>Atlanta</span>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 600, letterSpacing: "0.15em", color: COLORS.ivory, textTransform: "uppercase", lineHeight: 1.1 }}>Balloon Company</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="nav-menu-desktop">
          <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "2rem" }}>
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

        {/* Hamburger Toggle (Mobile Only) */}
        <button 
          className={`nav-toggle-mobile ${menuOpen ? "open" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <div className="nav-toggle-line" />
          <div className="nav-toggle-line" />
          <div className="nav-toggle-line" />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
        height: "100vh", width: "100vw",
        background: "rgba(17,17,17,0.98)",
        backdropFilter: "blur(20px)",
        zIndex: 140,
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "2.5rem",
        transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1)",
        pointerEvents: menuOpen ? "auto" : "none",
      }}>
        {NAV_LINKS.map((l) => (
          <a 
            key={l} 
            href={`#${l.toLowerCase()}`} 
            onClick={() => setMenuOpen(false)}
            style={{ 
              color: COLORS.ivory, 
              fontSize: 24, 
              fontFamily: "'Cormorant Garamond', serif",
              letterSpacing: "0.15em", 
              textTransform: "uppercase", 
              textDecoration: "none", 
              transition: "color 0.2s" 
            }}
            onMouseEnter={e => e.target.style.color = COLORS.champagne}
            onMouseLeave={e => e.target.style.color = COLORS.ivory}
          >{l}</a>
        ))}
        <a 
          href="#contact" 
          onClick={() => setMenuOpen(false)}
          style={{
            background: COLORS.emerald, 
            color: COLORS.ivory, 
            padding: "14px 36px",
            fontSize: 13, 
            letterSpacing: "0.2em", 
            textTransform: "uppercase", 
            textDecoration: "none",
            fontFamily: "'Lato', sans-serif", 
            fontWeight: 700, 
            marginTop: "1rem",
            border: `1px solid ${COLORS.champagne}`,
          }}
        >Book Now</a>
      </div>
    </nav>
  );
}
