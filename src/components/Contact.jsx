import { useState } from "react";
import { COLORS } from "../constants";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", eventType: "", eventDate: "", message: "" });
  const [status, setStatus] = useState("idle");

  const todayStr = (() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  })();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const payload = {
      full_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      event_type: formData.eventType,
      event_date: formData.eventDate,
      message: formData.message,
      source: "Website Contact Form",
      tags: ["website-lead", "atlanta-balloon-co"],
    };

    try {
      const webhookUrl = import.meta.env.VITE_GHL_WEBHOOK_URL || "https://services.leadconnectorhq.com/hooks/gsLg6IM3uj9S3b5pl7QW/webhook-trigger/13843881-ca0b-4d14-af4e-3265dd90031a";

      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      if (res.ok) {
        setStatus("success");
        if (window.gtag) {
          window.gtag("event", "form_submit", {
            event_category: "Contact",
            event_label: "Quote Request",
            event_type: formData.eventType,
            event_date: formData.eventDate,
          });
        }
      } else {
        setStatus("error");
        if (window.gtag) {
          window.gtag("event", "form_error", {
            event_category: "Contact",
            event_label: `HTTP error status ${res.status}`,
          });
        }
      }
    } catch (err) {
      console.error("GHL submission error:", err);
      setStatus("error");
      if (window.gtag) {
        window.gtag("event", "form_error", {
          event_category: "Contact",
          event_label: err.message || "Network Error",
        });
      }
    }
  };

  return (
    <section id="contact" style={{ background: COLORS.forest, padding: "8rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "6rem", alignItems: "start" }}>
        <AnimatedSection>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            <div style={{ width: 24, height: 1, background: COLORS.champagne }} />
            <span style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: COLORS.champagne, fontWeight: 700 }}>Get In Touch</span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, color: COLORS.ivory, lineHeight: 1.1, marginBottom: "2rem" }}>
            Book Your<br /><em style={{ color: COLORS.champagne }}>Statement Install</em>
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(247,242,232,0.55)", marginBottom: "3rem", fontWeight: 300 }}>
            Tell us about your event and we'll put together a custom proposal within 24 hours. Based in Atlanta — available nationwide.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { label: "Email", value: "hello@atlantaballoonco.com" },
              { label: "Phone", value: "(404) 000-0000" },
              { label: "Location", value: "Atlanta, Georgia — Available Nationwide" },
              { label: "Hours", value: "Mon–Sat, 9am–6pm EST" },
            ].map((c) => (
              <div key={c.label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: COLORS.champagne, fontWeight: 700, minWidth: 70, paddingTop: 2 }}>{c.label}</span>
                <span style={{ fontSize: 15, color: "rgba(247,242,232,0.65)", fontWeight: 300 }}>{c.value}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          {status === "success" ? (
            <div style={{ background: "rgba(4,106,78,0.15)", border: `1px solid rgba(4,106,78,0.4)`, padding: "3rem", textAlign: "center" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, color: COLORS.champagne, marginBottom: "1rem" }}>✦</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, color: COLORS.ivory, marginBottom: "1rem" }}>Message Received</h3>
              <p style={{ fontSize: 15, color: "rgba(247,242,232,0.55)", fontWeight: 300 }}>We'll be in touch within 24 hours with a custom proposal.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: COLORS.champagne, fontWeight: 700 }}>Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                  style={{
                    background: "rgba(255,255,255,0.04)", border: `1px solid rgba(199,166,106,0.2)`,
                    color: COLORS.ivory, padding: "14px 16px", fontSize: 15, fontFamily: "'Lato', sans-serif",
                    outline: "none", width: "100%", boxSizing: "border-box",
                  }}
                  onFocus={e => e.target.style.borderColor = "rgba(199,166,106,0.6)"}
                  onBlur={e => e.target.style.borderColor = "rgba(199,166,106,0.2)"}
                />
              </div>

              <div className="form-row">
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: COLORS.champagne, fontWeight: 700 }}>Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                    style={{
                      background: "rgba(255,255,255,0.04)", border: `1px solid rgba(199,166,106,0.2)`,
                      color: COLORS.ivory, padding: "14px 16px", fontSize: 15, fontFamily: "'Lato', sans-serif",
                      outline: "none", width: "100%", boxSizing: "border-box",
                    }}
                    onFocus={e => e.target.style.borderColor = "rgba(199,166,106,0.6)"}
                    onBlur={e => e.target.style.borderColor = "rgba(199,166,106,0.2)"}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: COLORS.champagne, fontWeight: 700 }}>Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="(404) 000-0000"
                    value={formData.phone}
                    onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                    style={{
                      background: "rgba(255,255,255,0.04)", border: `1px solid rgba(199,166,106,0.2)`,
                      color: COLORS.ivory, padding: "14px 16px", fontSize: 15, fontFamily: "'Lato', sans-serif",
                      outline: "none", width: "100%", boxSizing: "border-box",
                    }}
                    onFocus={e => e.target.style.borderColor = "rgba(199,166,106,0.6)"}
                    onBlur={e => e.target.style.borderColor = "rgba(199,166,106,0.2)"}
                  />
                </div>
              </div>

              <div className="form-row">
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: COLORS.champagne, fontWeight: 700 }}>Event Type</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Wedding, Gala"
                    value={formData.eventType}
                    onChange={e => setFormData(p => ({ ...p, eventType: e.target.value }))}
                    style={{
                      background: "rgba(255,255,255,0.04)", border: `1px solid rgba(199,166,106,0.2)`,
                      color: COLORS.ivory, padding: "14px 16px", fontSize: 15, fontFamily: "'Lato', sans-serif",
                      outline: "none", width: "100%", boxSizing: "border-box",
                    }}
                    onFocus={e => e.target.style.borderColor = "rgba(199,166,106,0.6)"}
                    onBlur={e => e.target.style.borderColor = "rgba(199,166,106,0.2)"}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: COLORS.champagne, fontWeight: 700 }}>Event Date</label>
                  <input
                    type="date"
                    required
                    min={todayStr}
                    className="form-date-input"
                    value={formData.eventDate}
                    onChange={e => setFormData(p => ({ ...p, eventDate: e.target.value }))}
                    style={{
                      background: "rgba(255,255,255,0.04)", border: `1px solid rgba(199,166,106,0.2)`,
                      color: COLORS.ivory, padding: "14px 16px", fontSize: 15, fontFamily: "'Lato', sans-serif",
                      outline: "none", width: "100%", boxSizing: "border-box",
                    }}
                    onFocus={e => e.target.style.borderColor = "rgba(199,166,106,0.6)"}
                    onBlur={e => e.target.style.borderColor = "rgba(199,166,106,0.2)"}
                  />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: COLORS.champagne, fontWeight: 700 }}>Tell Us About Your Event</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                  style={{
                    background: "rgba(255,255,255,0.04)", border: `1px solid rgba(199,166,106,0.2)`,
                    color: COLORS.ivory, padding: "14px 16px", fontSize: 15, fontFamily: "'Lato', sans-serif",
                    outline: "none", resize: "vertical", width: "100%", boxSizing: "border-box",
                  }}
                  onFocus={e => e.target.style.borderColor = "rgba(199,166,106,0.6)"}
                  onBlur={e => e.target.style.borderColor = "rgba(199,166,106,0.2)"}
                />
              </div>
              
              {status === "error" && (
                <div style={{ color: "#ff6b6b", fontSize: 14, marginTop: "0.5rem" }}>
                  Something went wrong. Please email us directly at hello@atlantaballoonco.com
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === "loading"}
                style={{
                  background: COLORS.emerald, color: COLORS.ivory,
                  padding: "16px 32px", fontSize: 12, letterSpacing: "0.25em",
                  textTransform: "uppercase", border: "none", 
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  fontFamily: "'Lato', sans-serif", fontWeight: 700, marginTop: "0.5rem",
                  transition: "background 0.2s",
                  opacity: status === "loading" ? 0.7 : 1,
                }}
                onMouseEnter={e => { if (status !== "loading") e.target.style.background = COLORS.forest }}
                onMouseLeave={e => { if (status !== "loading") e.target.style.background = COLORS.emerald }}
              >
                {status === "loading" ? "Sending..." : "Request Custom Proposal"}
              </button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
