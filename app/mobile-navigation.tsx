"use client";

import { useRef } from "react";

export default function MobileNavigation() {
  const menu = useRef<HTMLDetailsElement>(null);
  function closeMenu() {
    if (menu.current) menu.current.open = false;
  }
  return (
    <details
      className="mobile-nav"
      ref={menu}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          closeMenu();
          menu.current?.querySelector("summary")?.focus();
        }
      }}
    >
      <summary aria-label="Toggle navigation">
        <span />
        <span />
        <span />
      </summary>
      <nav aria-label="Mobile navigation">
        <a href="#about" onClick={closeMenu}>
          About us
        </a>
        <a href="#services" onClick={closeMenu}>
          Our services
        </a>
        <a href="#clients" onClick={closeMenu}>
          Who we serve
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>
    </details>
  );
}
