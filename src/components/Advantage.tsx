"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Advantage.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Advantage() {
    const sectionRef = useRef(null);
    const pathRef = useRef<SVGPathElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const path = pathRef.current;

        if (!section || !path) return;

        // Simple drawSVG-like effect using stroke-dasharray
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

        gsap.to(path, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top center",
                end: "bottom center",
                scrub: 1,
            },
        });
    }, []);

    return (
        <section className={styles.section} ref={sectionRef}>
            <div className={styles.swooshContainer}>
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1440 600"
                    preserveAspectRatio="none"
                >
                    <path
                        ref={pathRef}
                        d="M-100,300 C200,100 500,500 800,300 S1200,100 1600,300"
                        className={styles.swooshPath}
                    />
                </svg>
            </div>
            <div className={styles.content}>
                <h2 className={styles.headline}>The Hiqba Advantage</h2>
                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>10+</span>
                        <span className={styles.statLabel}>Years Experience</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>500+</span>
                        <span className={styles.statLabel}>Projects Delivered</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>100%</span>
                        <span className={styles.statLabel}>Quality Guarantee</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
