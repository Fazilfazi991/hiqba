"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
    const heroRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 0.5,
                ease: "power3.out"
            });
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className={styles.hero} ref={heroRef}>
            <div className={styles.videoContainer}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.video}
                >
                    <source src="/videos/video1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.content} ref={textRef}>
                <h1 className={styles.headline}>A One-Stop Shop For All Your Printing Needs</h1>
                <p className={styles.subheadline}>Premium Branding, Printing, and Digital Solutions for the Modern Era.</p>
                <div className={styles.ctaContainer}>
                    <button className={`${styles.cta} hoverable`}>GET A QUOTE</button>
                    {/* Optional secondary button */}
                    {/* <button className={`${styles.ctaSecondary} hoverable`}>UPLOAD FILES</button> */}
                </div>
            </div>
        </section>
    );
}
