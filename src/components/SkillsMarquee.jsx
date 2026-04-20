const SKILLS = [
  "Research",
  "Collaboration",
  "Innovation",
  "Execution",
  "Optimization",
];

// Duplicate enough times for a seamless loop at any viewport width
const ITEMS = [...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS];

export default function SkillsMarquee() {
  return (
    /* Width-constraint wrapper — matches project grid boundaries */
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 24px" }}>
    {/* Rounded bordered box */}
    <div
      style={{
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(255,255,255,0.03)",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      <div
        style={{
          padding: "24px 40px",
        }}
      >
        {/* Scrolling track — two identical copies for a seamless loop */}
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "marquee-scroll 22s linear infinite",
            willChange: "transform",
          }}
        >
          {[0, 1].map((copy) => (
            <div
              key={copy}
              style={{ display: "flex", alignItems: "center" }}
            >
              {ITEMS.map((skill, i) => (
                <span
                  key={i}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <span
                    style={{
                      color: "rgba(255,255,255,0.75)",
                      fontSize: "15px",
                      fontWeight: 400,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                      padding: "0 32px",
                    }}
                  >
                    {skill}
                  </span>
                  <span
                    style={{
                      color: "rgba(255,255,255,0.2)",
                      fontSize: "6px",
                      flexShrink: 0,
                    }}
                  >
                    ●
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
