import { useState, useEffect } from "react";
import { content } from "../data/content";
import { useWindowWidth } from "../hooks/useWindowWidth";

// Maps nav link labels to their section IDs
const sectionMap = {
  Portfolio: "portfolio",
  About: "about",
  Career: "faq",
  Contact: "contact",
};

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const { name, links } = content.nav;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const width = useWindowWidth();
  const isMobile = width < 768;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  const bgAlpha = scrolled ? "0.92" : "0.4";
  const blurPx = scrolled ? "24px" : "8px";
  const borderAlpha = scrolled ? "0.1" : "0.05";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.4s ease, backdrop-filter 0.4s ease",
        background: `rgba(10, 10, 10, ${bgAlpha})`,
        backdropFilter: `blur(${blurPx})`,
        WebkitBackdropFilter: `blur(${blurPx})`,
        borderBottom: `1px solid rgba(255,255,255,${borderAlpha})`,
      }}
    >
      {/* Main bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: isMobile ? "16px 24px" : "18px 48px",
        }}
      >
        {/* Left: avatar + name */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="/images/rudraksh.jpg"
            alt={name}
            onError={(e) => { e.target.style.display = "none"; }}
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "1.5px solid rgba(255,255,255,0.2)",
            }}
          />
          <span
            style={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            {name}
          </span>
        </div>

        {/* Desktop nav links */}
        {!isMobile && (
          <ul
            style={{
              display: "flex",
              gap: "32px",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {links.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(sectionMap[link])}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "14px",
                    fontWeight: 600,
                    letterSpacing: "0.01em",
                    transition: "color 0.2s",
                    padding: 0,
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#fff")}
                  onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.65)")}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen((o) => !o)}
            style={{
              background: "none",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "8px",
              padding: "6px 10px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "20px",
                  height: "1.5px",
                  background: "#fff",
                  borderRadius: "2px",
                  transition: "opacity 0.2s",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        )}
      </div>

      {/* Mobile dropdown */}
      {isMobile && menuOpen && (
        <div
          style={{
            background: "rgba(10,10,10,0.97)",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {links.map((link) => (
            <button
              key={link}
              onClick={() => {
                scrollTo(sectionMap[link]);
                setMenuOpen(false);
              }}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "rgba(255,255,255,0.75)",
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "0.01em",
                textAlign: "left",
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                width: "100%",
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
