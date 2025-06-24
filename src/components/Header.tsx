"use client";

import styles from "@/styles/header.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
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
      <Link className={styles.headerLink} href={"/"}><h3>Dotti Dorlini</h3></Link>
      <ul>
        <Link className={styles.headerLink} href={"/gallery"}><li>Gallery</li></Link>
        <Link className={styles.headerLink} href={"/about"}><li>About</li></Link>
      </ul>
    </header>
  );
}
