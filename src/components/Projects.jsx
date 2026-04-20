import { motion } from "framer-motion";
import { content } from "../data/content";
import { useWindowWidth } from "../hooks/useWindowWidth";

const viewportOpts = { once: true, amount: 0.15 };

function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOpts}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      whileHover={{ scale: 1.02 }}
      style={{
        display: "block",
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          width: "100%",
          aspectRatio: "16 / 10",
          borderRadius: "16px",
          overflow: "hidden",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          marginBottom: "16px",
          position: "relative",
        }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        ) : (
          /* Dark placeholder grid pattern */
          <div
            style={{
              width: "100%",
              height: "100%",
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.03) 39px, rgba(255,255,255,0.03) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.03) 39px, rgba(255,255,255,0.03) 40px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.12)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Coming soon
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(255,255,255,0.04)",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "999px",
              padding: "7px 18px",
            }}
          >
            View Project ↗
          </span>
        </motion.div>
      </div>

      {/* Title + year */}
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
        <span
          style={{
            color: "#ffffff",
            fontSize: "15px",
            fontWeight: 500,
            letterSpacing: "-0.01em",
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </span>
        <span
          style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: "13px",
            fontWeight: 400,
            flexShrink: 0,
          }}
        >
          {project.year}
        </span>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const projects = content.projects;
  const isMobile = useWindowWidth() < 768;

  return (
    <section
      id="portfolio"
      style={{
        background: "#0a0a0a",
        padding: isMobile ? "80px 24px" : "120px 48px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Pill label */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
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
            Portfolio
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
          fontSize: "clamp(32px, 4vw, 52px)",
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontWeight: 300,
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
        }}
      >
        <span style={{ color: "rgba(255,255,255,0.4)" }}>My Latest </span>
        <span style={{ color: "#ffffff", fontWeight: 600 }}>Projects</span>
      </motion.h2>

      {/* 2-column grid → 1-column on mobile */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
          gap: isMobile ? "40px" : "48px 40px",
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* Quote */}
      <motion.p
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOpts}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          margin: "96px 0 0",
          textAlign: "center",
          fontSize: "clamp(22px, 2.8vw, 38px)",
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontWeight: 300,
          letterSpacing: "-0.02em",
          lineHeight: 1.35,
        }}
      >
        <span style={{ color: "rgba(255,255,255,0.38)" }}>Building more than just </span>
        <span style={{ color: "#ffffff", fontWeight: 600 }}>products</span>
        <span style={{ color: "rgba(255,255,255,0.38)" }}>—creating </span>
        <span style={{ color: "#ffffff", fontWeight: 600 }}>experiences</span>
        <span style={{ color: "rgba(255,255,255,0.38)" }}> that resonate, inspire, and drive </span>
        <span style={{ color: "#ffffff", fontWeight: 600 }}>meaningful change.</span>
      </motion.p>
    </section>
  );
}
