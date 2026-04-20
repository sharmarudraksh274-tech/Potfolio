import { motion } from "framer-motion";
import { content } from "../data/content";
import { useWindowWidth } from "../hooks/useWindowWidth";

const slideUp = {
  hidden: { opacity: 0, y: 48 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const viewportOpts = { once: true, amount: 0.15 };

export default function About() {
  const { bio, stats } = content.about;
  const width = useWindowWidth();
  const isMobile = width < 768;

  return (
    <section
      id="about"
      style={{
        background: "rgba(10, 10, 10, 0.85)",
        padding: isMobile ? "80px 24px" : "120px 48px",
        maxWidth: "1200px",
        margin: isMobile ? "-80px auto 0" : "-180px auto 0",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "40px" : "80px",
          alignItems: "flex-start",
        }}
      >
        {/* Photo card */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          custom={0}
          style={{ flexShrink: 0, width: isMobile ? "100%" : "auto" }}
        >
          <div
            style={{
              width: isMobile ? "100%" : "340px",
              height: isMobile ? "280px" : "440px",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            <img
              src="/images/rudraksh.jpg"
              alt="Rudraksh Sharma"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
              }}
            />
          </div>
        </motion.div>

        {/* Text content */}
        <div style={{ flex: 1, paddingTop: isMobile ? "0" : "8px" }}>
          {/* Pill */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            custom={0.1}
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "999px",
              padding: "5px 14px",
              marginBottom: "28px",
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", fontWeight: 400, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              About
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            custom={0.18}
            style={{
              margin: "0 0 28px",
              fontSize: isMobile ? "clamp(24px, 6vw, 36px)" : "clamp(28px, 3.2vw, 44px)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontWeight: 300,
              color: "rgba(255,255,255,0.45)",
            }}
          >
            I am a business strategist Turned Into a{" "}
            <span style={{ color: "#ffffff", fontWeight: 600 }}>Product Manager</span>
          </motion.h2>

          {/* Bio */}
          <motion.p
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            custom={0.26}
            style={{
              margin: "0 0 48px",
              fontSize: "15px",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.45)",
              fontWeight: 400,
            }}
          >
            {bio}
          </motion.p>

          {/* Stats grid */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            custom={0.34}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: isMobile ? "24px 32px" : "32px 48px",
            }}
          >
            {stats.map(({ label, value }) => (
              <div key={label}>
                <div style={{ fontSize: "clamp(28px, 6vw, 48px)", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "6px" }}>
                  {value}
                </div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", fontWeight: 400, letterSpacing: "0.02em" }}>
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
