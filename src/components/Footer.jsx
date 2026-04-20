export default function Footer() {
  return (
    <footer
      style={{
        background: "#0a0a0a",
        padding: "60px 48px 48px",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <p
        style={{
          margin: 0,
          color: "#555555",
          fontSize: "clamp(28px, 8.5vw, 140px)",
          fontWeight: 100,
          letterSpacing: "0.05em",
          lineHeight: 1,
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          fontFamily: "system-ui, 'Segoe UI', sans-serif",
        }}
      >
        Rudraksh Sharma
      </p>
    </footer>
  );
}
