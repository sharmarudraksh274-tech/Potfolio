import { motion } from "framer-motion";
import { content } from "../data/content";
import { useWindowWidth } from "../hooks/useWindowWidth";

const viewportOpts = { once: true, amount: 0.2 };

const icons = {
  timer: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2.5 2.5" />
      <path d="M9.5 2.5h5" />
      <path d="M12 2.5V5" />
    </svg>
  ),
  chat: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  search: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  ),
};

export default function WhyMe() {
  const isMobile = useWindowWidth() < 768;

  return (
    <section
      style={{
        background: "#0a0a0a",
        padding: isMobile ? "80px 24px" : "120px 48px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Pill label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOpts}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "999px",
            padding: "5px 14px",
          }}
        >
          <span
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "13px",
              fontWeight: 400,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Why me?
          </span>
        </div>
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOpts}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        style={{
          textAlign: "center",
          margin: "0 0 64px",
          fontSize: "clamp(28px, 3.5vw, 48px)",
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontWeight: 300,
          letterSpacing: "-0.02em",
          lineHeight: 1.2,
        }}
      >
        <span style={{ color: "#ffffff", fontWeight: 600 }}>I'll help </span>
        <span style={{ color: "rgba(255,255,255,0.38)" }}>your product </span>
        <span style={{ color: "#ffffff", fontWeight: 600 }}>shine</span>
      </motion.h2>

      {/* 3-column cards → 1-column on mobile */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {content.whyMe.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOpts}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "32px 28px",
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.7)",
                marginBottom: "24px",
              }}
            >
              {icons[card.icon]}
            </div>

            {/* Title */}
            <div
              style={{
                color: "#ffffff",
                fontSize: "19px",
                fontWeight: 600,
                letterSpacing: "-0.01em",
                marginBottom: "12px",
              }}
            >
              {card.title}
            </div>

            {/* Description */}
            <div
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "15px",
                lineHeight: 1.75,
                fontWeight: 400,
              }}
            >
              {card.description}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
