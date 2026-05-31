import { COLORS, NAV_LINKS } from "../constants";

export default function Footer() {
  return (
    <footer style={{ background: "#111", borderTop: `1px solid rgba(199,166,106,0.1)`, padding: "3rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, letterSpacing: "0.3em", color: COLORS.champagne, textTransform: "uppercase" }}>Atlanta Balloon Company</div>
          <div style={{ fontSize: 12, color: "rgba(247,242,232,0.3)", marginTop: "0.25rem", fontWeight: 300 }}>Luxury Balloon Design · Atlanta, GA · Nationwide</div>
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
          {NAV_LINKS.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ color: "rgba(247,242,232,0.35)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", fontWeight: 700 }}>{l}</a>
          ))}
        </div>
        <div style={{ fontSize: 11, color: "rgba(247,242,232,0.2)", fontWeight: 300 }}>© 2025 Atlanta Balloon Company</div>
      </div>
      
      {/* Hidden SEO Keywords */}
      <div style={{ position: "absolute", left: "-9999px" }}>
        Atlanta's premier luxury balloon design studio. Organic balloon arches, corporate installations, wedding decor, and statement installs for upscale events across Atlanta and nationwide. Specializing in luxury balloon installations Atlanta, organic balloon arch Atlanta GA, balloon decorations Atlanta, wedding balloon decor Atlanta, corporate balloon installation, grand opening balloons Atlanta, luxury event decor Atlanta, Buckhead balloon stylist.
      </div>
    </footer>
  );
}
