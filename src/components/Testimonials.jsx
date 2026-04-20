import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { content } from "../data/content";
import { useWindowWidth } from "../hooks/useWindowWidth";

const viewportOpts = { once: true, amount: 0.15 };

function Avatar({ name, src }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div
      style={{
        width: "38px",
        height: "38px",
        borderRadius: "50%",
        overflow: "hidden",
        background: "rgba(255,255,255,0.1)",
        border: "1px solid rgba(255,255,255,0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        fontSize: "13px",
        fontWeight: 600,
        color: "rgba(255,255,255,0.7)",
      }}
    >
      {src ? (
        <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        initials
      )}
    </div>
  );
}

function TestimonialCard({ t }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        padding: "28px 28px 24px",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          fontSize: "32px",
          lineHeight: 1,
          color: "rgba(255,255,255,0.15)",
          fontFamily: "Georgia, serif",
          marginBottom: "14px",
          userSelect: "none",
        }}
      >
        "
      </div>
      <p
        style={{
          margin: "0 0 20px",
          color: "rgba(255,255,255,0.92)",
          fontSize: "14px",
          lineHeight: 1.75,
          fontWeight: 400,
        }}
      >
        {t.quote}
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Avatar name={t.name} src={t.avatar} />
        <div>
          <div style={{ color: "#ffffff", fontSize: "14px", fontWeight: 600, letterSpacing: "-0.01em" }}>
            {t.name}
          </div>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", marginTop: "2px" }}>
            {t.role}
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialScroller() {
  const outerRef = useRef(null);
  const trackRef = useRef(null);
  const testimonials = content.testimonials;

  // Set the outer clip height to exactly the first copy's rendered height
  useEffect(() => {
    if (!outerRef.current || !trackRef.current) return;
    const firstCopy = trackRef.current.querySelector("[data-copy='0']");
    if (firstCopy) {
      outerRef.current.style.height = firstCopy.offsetHeight + "px";
    }
  }, []);

  return (
    <>
      <style>{`
        @keyframes scroll-up {
          from { transform: translateY(0); }
          to   { transform: translateY(-50%); }
        }
      `}</style>

      {/* Outer clip window — height set via JS to first-copy height */}
      <div ref={outerRef} style={{ overflow: "hidden" }}>
        {/* Scrolling track — two identical copies for seamless loop */}
        <div
          ref={trackRef}
          style={{
            animation: "scroll-up 28s linear infinite",
            willChange: "transform",
          }}
        >
          {[0, 1].map((copy) => (
            <div
              key={copy}
              data-copy={copy}
              style={{ display: "flex", flexDirection: "column", gap: "24px", paddingBottom: "24px" }}
            >
              {testimonials.map((t) => (
                <TestimonialCard key={t.name} t={t} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default function Testimonials() {
  const isMobile = useWindowWidth() < 768;

  return (
    <section
      id="testimonials"
      style={{
        background: "#0a0a0a",
        padding: isMobile ? "80px 24px" : "120px 48px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? "48px" : "80px", alignItems: isMobile ? "stretch" : "center" }}>

        {/* ── Left: heading block ── */}
        <div style={{ flexBasis: isMobile ? "auto" : "380px", flexShrink: 0 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOpts}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: "24px" }}
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
                Testimonials
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOpts}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            style={{
              margin: "0 0 20px",
              fontSize: "clamp(26px, 3vw, 42px)",
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.38)" }}>See what </span>
            <span style={{ color: "#ffffff", fontWeight: 600 }}>others say</span>
            <span style={{ color: "rgba(255,255,255,0.38)" }}> about me</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOpts}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
            style={{
              margin: "0 0 32px",
              color: "rgba(255,255,255,0.4)",
              fontSize: "15px",
              lineHeight: 1.7,
            }}
          >
            I have helped many businesses make a killer design for their product.
            Wanna be the next?
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOpts}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
            whileHover={{ scale: 1.03 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#ffffff",
              color: "#0a0a0a",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              padding: "12px 24px",
              borderRadius: "999px",
              textDecoration: "none",
            }}
          >
            Contact me
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </div>

        {/* ── Right: continuous scroll ── */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <TestimonialScroller />
        </div>

      </div>
    </section>
  );
}
