import { useState } from "react";
import { COLORS, FAQS } from "../constants";
import AnimatedSection from "./AnimatedSection";

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(null);

  const handleFaqClick = (questionText, index) => {
    const isOpening = openFaq !== index;
    setOpenFaq(isOpening ? index : null);
    if (isOpening && window.gtag) {
      window.gtag("event", "faq_expand", {
        event_category: "FAQ",
        event_label: questionText,
      });
    }
  };

  return (
    <section id="faq" style={{ background: COLORS.charcoal, padding: "8rem 2rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            <div style={{ width: 24, height: 1, background: COLORS.champagne }} />
            <span style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: COLORS.champagne, fontWeight: 700 }}>Common Questions</span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, color: COLORS.ivory, marginBottom: "3rem" }}>
            FAQ
          </h2>
        </AnimatedSection>
        {FAQS.map((f, i) => (
          <AnimatedSection key={f.q} delay={i * 60}>
            <div style={{ borderTop: `1px solid rgba(199,166,106,0.15)` }}>
              <button
                onClick={() => handleFaqClick(f.q, i)}
                style={{
                  width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "1.75rem 0", background: "none", border: "none", cursor: "pointer",
                  color: COLORS.ivory, textAlign: "left",
                }}
              >
                <span style={{ fontSize: 17, fontWeight: 400, fontFamily: "'Cormorant Garamond', serif", paddingRight: "2rem" }}>{f.q}</span>
                <span style={{
                  fontSize: 22, color: COLORS.champagne, flexShrink: 0,
                  transform: openFaq === i ? "rotate(45deg)" : "rotate(0)",
                  transition: "transform 0.3s",
                }}>+</span>
              </button>
              <div style={{
                maxHeight: openFaq === i ? 200 : 0,
                overflow: "hidden", transition: "max-height 0.4s ease",
              }}>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(247,242,232,0.55)", paddingBottom: "1.75rem", fontWeight: 300 }}>{f.a}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
