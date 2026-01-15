"use client";
import styles from "./Header.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.headerContainer}>
            <div className={styles.topBar}>
                <span>📞 +971 50 123 4567</span>
                <span>📧 info@hiqba.com</span>
                <span>📍 Dubai, UAE</span>
            </div>
            <header className={styles.header}>
                <div className={styles.logoContainer}>
                    <img src="/logo-new.png" alt="HIQBA Logo" className={styles.logoImage} />
                </div>

                <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
                    <span className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}></span>
                    <span className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}></span>
                    <span className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}></span>
                </button>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
                    <Link href="/" className={`${styles.navLink} hoverable`} onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link href="/" className={`${styles.navLink} hoverable`} onClick={() => setIsMenuOpen(false)}>Services</Link>
                    <Link href="/" className={`${styles.navLink} hoverable`} onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
                    <Link href="/" className={`${styles.navLink} hoverable`} onClick={() => setIsMenuOpen(false)}>About Us</Link>
                    <Link href="/" className={`${styles.navLink} hoverable`} onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    <Link href="/" className={`${styles.ctaButton} hoverable`} onClick={() => setIsMenuOpen(false)}>Get a Quote</Link>
                </nav>
            </header>
        </div>
    );
}
