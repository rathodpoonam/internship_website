'use client'
import { useState, useRef } from "react";
import Link from "next/link";

const Menu1 = () => {
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
        <div style={{ position: "relative" }}>
            <ul
                ref={menuRef}
                style={{
                    lineHeight: "22px",
                    fontSize: "15px",
                    fontWeight: "700",
                    gap: "0.8rem",
                    display: "flex",
                    position: "relative",
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    textTransform: 'capitalize'
                }}
            >
                {["All",
                    "Creative",
                    "Paid",
                    "Social Publishing",
                    "Gaming",
                    "Events",
                    "Creators",
                    "Social",
                    "Talent Management"].map((text, index) => (
                        <li
                            key={index}
                            style={{
                                position: "relative",
                                cursor: "pointer",
                                textTransform: 'capitalize'
                            }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link href="/" style={{
                                textTransform: 'capitalize'
                            }}>{text}</Link>
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
    )
}

export default Menu1
