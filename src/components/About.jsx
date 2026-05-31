import { COLORS } from "../constants";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="about" style={{ background: COLORS.forest, padding: "8rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "6rem", alignItems: "center" }}>
        <AnimatedSection>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            <div style={{ width: 24, height: 1, background: COLORS.champagne }} />
            <span style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: COLORS.champagne, fontWeight: 700 }}>Atlanta's Modern Balloon Studio</span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, color: COLORS.ivory, lineHeight: 1.1, marginBottom: "2rem" }}>
            Luxury Event Styling.<br /><em style={{ color: COLORS.champagne }}>Not Party-Store Décor.</em>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: "rgba(247,242,232,0.6)", marginBottom: "1.5rem", fontWeight: 300 }}>
            Atlanta Balloon Company was built on a single belief: balloons, when done right, are a luxury medium. We design editorial-quality installations that photograph beautifully, transform your venue, and leave your guests speechless.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: "rgba(247,242,232,0.6)", marginBottom: "2.5rem", fontWeight: 300 }}>
            From intimate Buckhead bridal showers to full-scale rooftop brand activations in Midtown, we bring the same level of craft and intentionality to every install — no matter the size.
          </p>
          <div style={{ display: "flex", gap: "2rem" }}>
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, color: COLORS.champagne }}>ATL</div>
              <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(247,242,232,0.4)", fontWeight: 700 }}>Based In</div>
            </div>
            <div style={{ width: 1, background: "rgba(199,166,106,0.2)" }} />
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, color: COLORS.champagne }}>US</div>
              <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(247,242,232,0.4)", fontWeight: 700 }}>Serving</div>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <div style={{ 
            position: "relative", 
            overflow: "hidden", 
            borderRadius: 4, 
            border: `1px solid rgba(199,166,106,0.25)`,
            aspectRatio: "4/3",
            width: "100%",
          }}>
            <img 
              src="/images/atlanta_skyline_balloons.png" 
              alt="Atlanta Skyline Luxury Balloon Installation" 
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
              }}
              onMouseEnter={e => e.target.style.transform = "scale(1.03)"}
              onMouseLeave={e => e.target.style.transform = "scale(1)"}
            />
            {/* Elegant glassmorphic overlay badge */}
            <div style={{
              position: "absolute", bottom: "1.5rem", left: "1.5rem",
              background: "rgba(1, 59, 45, 0.8)", backdropFilter: "blur(8px)",
              border: `1px solid rgba(199,166,106,0.3)`, padding: "10px 18px",
              color: COLORS.champagne, fontSize: 10, letterSpacing: "0.2em",
              textTransform: "uppercase", fontWeight: 700, pointerEvents: "none"
            }}>
              ✦ Midtown Rooftop
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
