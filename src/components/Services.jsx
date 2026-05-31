import { COLORS, SERVICES } from "../constants";
import AnimatedSection from "./AnimatedSection";

export default function Services() {
  const handleServiceHover = (serviceTitle) => {
    if (window.gtag) {
      window.gtag("event", "service_view", {
        event_category: "Services",
        event_label: serviceTitle,
      });
    }
  };

  return (
    <section id="services" style={{ background: COLORS.charcoal, padding: "8rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            <div style={{ width: 24, height: 1, background: COLORS.champagne }} />
            <span style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: COLORS.champagne, fontWeight: 700 }}>What We Do</span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 400, color: COLORS.ivory, marginBottom: "4rem", maxWidth: 600 }}>
            Statement Installs.<br /><em style={{ color: COLORS.champagne }}>Crafted to Last.</em>
          </h2>
        </AnimatedSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1px", background: "rgba(199,166,106,0.1)" }}>
          {SERVICES.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 80}>
              <div
                style={{
                  background: COLORS.charcoal, padding: "3rem 2.5rem",
                  borderTop: `1px solid rgba(199,166,106,0.1)`,
                  transition: "background 0.3s",
                  cursor: "default",
                  height: "100%",
                  boxSizing: "border-box"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "#1e1e1e";
                  handleServiceHover(s.title);
                }}
                onMouseLeave={e => e.currentTarget.style.background = COLORS.charcoal}
              >
                <div style={{ fontSize: 24, color: COLORS.champagne, marginBottom: "1.5rem", fontFamily: "serif" }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 500, color: COLORS.ivory, marginBottom: "1rem" }}>{s.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(247,242,232,0.55)", marginBottom: "1.5rem", fontWeight: 300 }}>{s.desc}</p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {s.tags.map((t) => (
                    <span key={t} style={{
                      border: `1px solid rgba(4,106,78,0.5)`, color: COLORS.sage,
                      fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
                      padding: "4px 10px", fontWeight: 700,
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
