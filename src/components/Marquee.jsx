import { COLORS } from "../constants";

export default function Marquee() {
  return (
    <div style={{ background: COLORS.emerald, padding: "14px 0", overflow: "hidden", whiteSpace: "nowrap" }}>
      <div style={{
        display: "inline-block",
        animation: "marquee 30s linear infinite",
      }}>
        {Array(4).fill("Balloon Arches  ·  Organic Installations  ·  Wedding Décor  ·  Corporate Installs  ·  Grand Openings  ·  Rooftop Events  ·  Baby Showers  ·  Bridal Showers  ·  Luxury Birthdays  ·  Atlanta & Nationwide  ·  ").map((t, i) => (
          <span key={i} style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: COLORS.ivory, marginRight: "2rem", fontWeight: 700 }}>{t}</span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}
