import { useState, useRef } from "react";
import Link from "next/link";

export default function Menu() {
  const [hoverStyles, setHoverStyles] = useState({ left: 0, width: 0, visible: false });
  const menuRef = useRef(null);

  const handleMouseEnter = (e) => {
    const liRect = e.currentTarget.getBoundingClientRect();
    const menuRect = menuRef.current.getBoundingClientRect();
    setHoverStyles({
      left: liRect.left - menuRect.left + liRect.width / 2, // Center the span under the text
      width: liRect.width * 0.5, // Adjust the size as desired
      visible: true,
    });
  };

  const handleMouseLeave = () => {
    setHoverStyles((prev) => ({ ...prev, visible: false }));
  };

  return (
    <div style={{ position: "relative", padding: "1rem" }}>
      <ul
        ref={menuRef}
        style={{
          lineHeight: "15px",
          fontSize: "16px",
          fontWeight: "900",
          gap: "2.5rem",
          display: "flex",
          position: "relative",
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {["About", "Work", "For Brands", "For Creators", "Careers", "Feed"].map((text, index) => (
          <li
            key={index}
            style={{
              position: "relative",
              cursor: "pointer",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/">{text}</Link>
          </li>
        ))}
      </ul>
      <span
        style={{
          position: "absolute",
          bottom: "-5px", // Adjust distance from the text
          height: "5px", // Height of the span
          width: '5px',
          backgroundColor: "black",
          transition: "all 0.3s ease", // Smooth animation for movement and size
          transform: "translateX(-50%)",
          left: `${hoverStyles.left}px`,
          opacity: hoverStyles.visible ? 1 : 0, // Show/hide smoothly
          pointerEvents: "none", // Prevent interaction
        }}
      ></span>
    </div>
  );
}
