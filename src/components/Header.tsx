"use client";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.topBar}>
                <span>📞 +971 50 123 4567</span>
                <span>📧 info@hiqba.com</span>
                <span>📍 Dubai, UAE</span>
            </div>
            <header className={styles.header}>
                <div className={styles.logoContainer}>
                    {/* <div className={styles.logo} style={{ fontSize: "1.5rem", fontWeight: "bold" }}>HIQBA</div> */}
                    <img src="/logo-new.png" alt="HIQBA Logo" className={styles.logoImage} />
                </div>
                <nav className={styles.nav}>
                    <Link href="/" className={`${styles.navLink} hoverable`}>Home</Link>
                    <Link href="/" className={`${styles.navLink} hoverable`}>Services</Link>
                    <Link href="/" className={`${styles.navLink} hoverable`}>Portfolio</Link>
                    <Link href="/" className={`${styles.navLink} hoverable`}>About Us</Link>
                    <Link href="/" className={`${styles.navLink} hoverable`}>Contact</Link>
                    <Link href="/" className={`${styles.ctaButton} hoverable`}>Get a Quote</Link>
                </nav>
            </header>
        </div>
    );
}
