"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [activeItem, setActiveItem] = useState(1);
  console.log(activeItem);

  const handleActiveItem = (index) => {
    setActiveItem(index);
  };

  return (
    <>
      <div className="mobile-menu fix mb-3 mean-container">
        <div className="mean-bar">
          <Link
            href="/#nav"
            className="meanmenu-reveal"
            style={{ right: 0, left: "auto", display: "inline" }}
          >
           
          </Link>
          <nav className="mean-nav">
            
          </nav>
        </div>
      </div>
    </>
  );
}
