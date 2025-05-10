'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./navbar.module.css";


export default function Navbar(){
    const [isVisible, setIsVisible] = useState(false);
    const handleScroll = () => {
        // Show the button when th euser scrolls down
        if (window.scrollY > 10){
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    
    useEffect(() => {
        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);
    
        // Remove the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
    }

    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <nav className={`${styles.navbar} ${isVisible ? styles.visible : styles.hidden}`}>
        <ul className={styles.navLinks}>
            <li><button onClick={scrollToTop} className={styles.scrollButton}>Home</button></li>
            <li><button onClick={() => scrollToSection("about-secton")} className={styles.scrollButton}>About</button></li>
            <li><button onClick={() => scrollToSection("skills-secton")} className={styles.scrollButton}>Skills</button></li>
            <li><button onClick={() => scrollToSection("experience-secton")} className={styles.scrollButton}>Experience</button></li>
            <li><button onClick={() => scrollToSection("projects-secton")} className={styles.scrollButton}>Projects</button></li>
        </ul>
        </nav>

    )
}