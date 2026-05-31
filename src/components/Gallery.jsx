import { COLORS, GALLERY_ITEMS } from "../constants";
import AnimatedSection from "./AnimatedSection";

export default function Gallery() {
  const handleGalleryClick = (itemLabel) => {
    if (window.gtag) {
      window.gtag("event", "gallery_click", {
        event_category: "Gallery",
        event_label: itemLabel,
      });
    }
  };

  return (
    <section id="gallery" style={{ background: "#1a1a1a", padding: "8rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
                <div style={{ width: 24, height: 1, background: COLORS.champagne }} />
                <span style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: COLORS.champagne, fontWeight: 700 }}>Portfolio</span>
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, color: COLORS.ivory }}>
                Recent <em style={{ color: COLORS.champagne }}>Installations</em>
              </h2>
            </div>
            <a href="#contact" style={{ color: COLORS.champagne, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", borderBottom: `1px solid rgba(199,166,106,0.4)`, paddingBottom: 2, fontWeight: 700 }}>
              View All Work →
            </a>
          </div>
        </AnimatedSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "auto", gap: "8px" }}>
          {GALLERY_ITEMS.map((item, i) => (
            <AnimatedSection key={item.label} delay={i * 60}>
              <div
                style={{
                  background: item.color,
                  aspectRatio: item.aspect === "tall" ? "3/4" : item.aspect === "wide" ? "4/3" : "1/1",
                  position: "relative", overflow: "hidden",
                  gridColumn: i === 1 || i === 4 ? "span 2" : "span 1",
                  display: "flex", alignItems: "flex-end",
                  cursor: "pointer",
                }}
                onMouseEnter={e => {
                  e.currentTarget.querySelector(".overlay").style.opacity = 1;
                }}
                onMouseLeave={e => {
                  e.currentTarget.querySelector(".overlay").style.opacity = 0;
                }}
                onClick={() => handleGalleryClick(item.label)}
              >
                {/* Pattern overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.08) 0%, transparent 60%)",
                }} />
                <div className="overlay" style={{
                  position: "absolute", inset: 0, background: "rgba(1,59,45,0.85)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  opacity: 0, transition: "opacity 0.35s ease",
                }}>
                  <span style={{ color: COLORS.champagne, fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700 }}>View Project</span>
                </div>
                <div style={{ position: "relative", zIndex: 1, padding: "1.25rem", width: "100%" }}>
                  <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(247,242,232,0.7)", fontWeight: 700 }}>{item.label}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
