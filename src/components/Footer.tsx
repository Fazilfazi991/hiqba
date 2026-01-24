"use client";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const footerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(footerRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 90%",
                }
            }
        );
    }, []);

    return (
        <footer className={styles.footer} ref={footerRef}>
            <div className={styles.grid}>
                {/* Brand Column */}
                <div className={styles.column}>
                    <Image
                        src="/images/logo.png"
                        alt="Hiqba Logo"
                        width={150}
                        height={50}
                        className={styles.logo}
                    />
                    <p className={styles.description}>
                        Where Vision Meets Execution. We provide premium branding, printing, and digital solutions for the modern era.
                    </p>
                    <div className={styles.socials}>
                        {/* Placeholder generic social icons */}
                        <a href="#" className={styles.socialIcon} aria-label="Facebook">FB</a>
                        <a href="#" className={styles.socialIcon} aria-label="Instagram">IG</a>
                        <a href="#" className={styles.socialIcon} aria-label="LinkedIn">LI</a>
                        <a href="#" className={styles.socialIcon} aria-label="Twitter">X</a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className={styles.column}>
                    <h3 className={styles.heading}>Quick Links</h3>
                    <Link href="#" className={styles.link}>Home</Link>
                    <Link href="#services" className={styles.link}>Services</Link>
                    <Link href="#about" className={styles.link}>About Us</Link>
                    <Link href="#portfolio" className={styles.link}>Portfolio</Link>
                    <Link href="#contact" className={styles.link}>Contact</Link>
                </div>

                {/* Services */}
                <div className={styles.column}>
                    <h3 className={styles.heading}>Services</h3>
                    <Link href="#" className={styles.link}>Branding & Design</Link>
                    <Link href="#" className={styles.link}>Digital Marketing</Link>
                    <Link href="#" className={styles.link}>Web Development</Link>
                    <Link href="#" className={styles.link}>High-Quality Printing</Link>
                    <Link href="#" className={styles.link}>Video Production</Link>
                </div>

                {/* Contact Info */}
                <div className={styles.column}>
                    <h3 className={styles.heading}>Contact Us</h3>
                    <div className={styles.contactInfo}>
                        <div className={styles.contactItem}>
                            <span>📍</span>
                            <span>Dubai, UAE</span>
                        </div>
                        <div className={styles.contactItem}>
                            <span>📞</span>
                            <span>+971 50 123 4567</span>
                        </div>
                        <div className={styles.contactItem}>
                            <span>✉️</span>
                            <span>info@hiqba.com</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.copyright}>
                <p>&copy; {new Date().getFullYear()} HIQBA. All Rights Reserved.</p>
                <div style={{ display: "flex", gap: "20px" }}>
                    <Link href="#" className={styles.link}>Privacy Policy</Link>
                    <Link href="#" className={styles.link}>Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
