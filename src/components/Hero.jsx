import { useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { content } from "../data/content";
import { useWindowWidth } from "../hooks/useWindowWidth";

export default function Hero() {
  const { greeting, headline } = content.hero;
  const headlineLines = headline.split("\n");
  const width = useWindowWidth();
  const isMobile = width < 768;

  const rotation = useMotionValue(0);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      rotation.set(rotation.get() + delta * 0.3);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [rotation]);

  const slideUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
    }),
  };

  const imgSize = isMobile ? "min(82vw, 340px)" : "clamp(480px, 55vw, 700px)";

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile ? "100px 20px 60px" : "120px 24px 80px",
        overflow: "hidden",
      }}
    >
      {/* Greeting pill */}
      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={0.1}
        style={{
          display: "inline-flex",
          alignItems: "center",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "999px",
          padding: "6px 16px",
          marginBottom: "28px",
        }}
      >
        <span
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: isMobile ? "13px" : "14px",
            fontWeight: 400,
            letterSpacing: "0.02em",
          }}
        >
          {greeting}
        </span>
      </motion.div>

      {/* Headline */}
      <div style={{ textAlign: "center", marginBottom: isMobile ? "48px" : "72px" }}>
        {headlineLines.map((line, i) => (
          <motion.h1
            key={i}
            variants={slideUp}
            initial="hidden"
            animate="visible"
            custom={0.25 + i * 0.12}
            style={{
              margin: 0,
              lineHeight: 1.1,
              fontSize: isMobile ? "clamp(32px, 8vw, 52px)" : "clamp(36px, 5vw, 72px)",
              fontWeight: 300,
              color: "#ffffff",
              fontFamily: "'Georgia', 'Times New Roman', serif",
              letterSpacing: "-0.03em",
            }}
          >
            {line}
          </motion.h1>
        ))}
      </div>

      {/* Hero image — scroll-driven rotation */}
      <motion.div
        style={{
          rotate: rotation,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.img
          src="/images/hero-object.avif"
          alt="hero object"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
          style={{ width: imgSize, height: imgSize, objectFit: "contain", display: "block" }}
        />
        {/* Fallback placeholder */}
        <div
          style={{
            display: "none",
            width: imgSize,
            height: imgSize,
            borderRadius: "50%",
            background: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.18), rgba(255,255,255,0.04) 60%, transparent)",
            border: "1px solid rgba(255,255,255,0.1)",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </motion.div>
    </section>
  );
}
