"use client";

import styles from "@/styles/header.module.css";
import { useState, useEffect } from "react";
import clsx from "clsx";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  return (
    <header
      className={clsx(
        scrolled
          ? clsx(styles.headerContainer, styles.scrolled)
          : styles.headerContainer
      )}
    >
      <h3>Dotti Dorlini</h3>
      <ul>
        <li>Gallery</li>
        <li>About</li>
      </ul>
    </header>
  );
}
