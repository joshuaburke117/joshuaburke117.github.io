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

    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <nav className={`${styles.navbar} ${isVisible ? styles.visible : styles.hidden}`}>
        <button onClick={scrollToTop} className={styles.scrollButton}>Home</button>
        <ul className={styles.navLinks}>
            <li><Link href="#about-secton">About</Link></li>
            <li><Link href="#skills-secton">Skills</Link></li>
            <li><Link href="#experience-secton">Experience</Link></li>
            <li><Link href="#projects-secton">Projects</Link></li>
        </ul>
        </nav>

    )
}