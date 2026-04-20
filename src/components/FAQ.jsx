import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { content } from "../data/content";
import { useWindowWidth } from "../hooks/useWindowWidth";

const viewportOpts = { once: true, amount: 0.15 };

function AccordionItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOpts}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      {/* Question row */}
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          padding: "22px 24px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            color: isOpen ? "#ffffff" : "rgba(255,255,255,0.75)",
            fontSize: "17px",
            fontWeight: 500,
            letterSpacing: "-0.01em",
            lineHeight: 1.3,
            transition: "color 0.2s",
          }}
        >
          {item.q}
        </span>

        {/* +/× icon */}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "rgba(255,255,255,0.6)",
            fontSize: "18px",
            lineHeight: 1,
            flexShrink: 0,
          }}
        >
          +
        </motion.span>
      </button>

      {/* Answer — animates height */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                margin: "0",
                padding: "0 24px 22px",
                color: "rgba(255,255,255,0.5)",
                fontSize: "15px",
                lineHeight: 1.75,
                fontWeight: 400,
              }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const isMobile = useWindowWidth() < 768;

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      style={{
        background: "#0a0a0a",
        padding: isMobile ? "80px 24px" : "120px 48px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Pill */}
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
            FAQ
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
          margin: "0 0 72px",
          fontSize: "clamp(28px, 3.5vw, 48px)",
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontWeight: 300,
          letterSpacing: "-0.02em",
          lineHeight: 1.2,
        }}
      >
        <span style={{ color: "rgba(255,255,255,0.38)" }}>Frequently Asked </span>
        <span style={{ color: "#ffffff", fontWeight: 600 }}>Questions</span>
      </motion.h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {content.faq.map((item, i) => (
          <AccordionItem
            key={i}
            item={item}
            index={i}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>
    </section>
  );
}
