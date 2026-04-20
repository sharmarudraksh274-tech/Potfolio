import { motion } from "framer-motion";
import { content } from "../data/content";

const viewportOpts = { once: true, amount: 0.2 };

export default function Contact() {
  const { subtext, links } = content.contact;

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        /* fixes 1 & 2: bg image, full viewport width */
        backgroundImage: "url('/images/background.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        /* fix 3: fade top and bottom edges into black */
        maskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
      }}
    >
      {/* Dark overlay to ensure text legibility over the background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(5, 5, 10, 0.78)",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "140px 64px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOpts}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            margin: "0 0 24px",
            fontSize: "clamp(36px, 5vw, 72px)",
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontWeight: 300,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.5)" }}>Let's </span>
          <span style={{ color: "#ffffff", fontWeight: 600 }}>Get in Touch</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOpts}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{
            margin: "0 0 48px",
            color: "rgba(255,255,255,0.55)",
            fontSize: "17px",
            lineHeight: 1.7,
            maxWidth: "520px",
          }}
        >
          {subtext}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOpts}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}
        >
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.url}
              target={link.url.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 28px",
                borderRadius: "999px",
                fontSize: "15px",
                fontWeight: 600,
                letterSpacing: "-0.01em",
                textDecoration: "none",
                ...(i === 0
                  ? { background: "#ffffff", color: "#0a0a0a" }
                  : {
                      background: "rgba(255,255,255,0.1)",
                      color: "#ffffff",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }),
              }}
            >
              {link.label}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
