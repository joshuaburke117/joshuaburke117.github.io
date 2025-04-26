"use client";

import { useEffect, useState } from "react";
import styles from "../page.module.css"; // Adjust path if needed!

export default function FadeHeaderText() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const opacity = Math.max(1 - scrollY / 300, 0);

  return (
    <h1 
      className={styles.headerText}
      style={{ opacity }}
    >
      Hi, my name is Joshua Burke,
    </h1>
  );
}
