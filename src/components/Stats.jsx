import { COLORS, STATS } from "../constants";
import AnimatedSection from "./AnimatedSection";

export default function Stats() {
  return (
    <section style={{ background: COLORS.forest, padding: "5rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2rem" }}>
        {STATS.map((s, i) => (
          <AnimatedSection key={s.label} delay={i * 100}>
            <div style={{ textAlign: "center", padding: "2rem 1rem" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 56, fontWeight: 500, color: COLORS.champagne, lineHeight: 1 }}>{s.number}</div>
              <div style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(247,242,232,0.5)", marginTop: "0.5rem", fontWeight: 700 }}>{s.label}</div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
