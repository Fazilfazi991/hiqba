"use client";
import styles from "./About.module.css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(imageRef.current, {
                x: -50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            });

            gsap.from(contentRef.current, {
                x: 50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className={styles.section} ref={sectionRef} id="about">
            <div className={styles.imageContainer} ref={imageRef}>
                <Image
                    src="/images/marketing.png" // Using an existing image that fits
                    alt="About Hiqba"
                    width={800}
                    height={600}
                    className={styles.image}
                />
            </div>
            <div className={styles.content} ref={contentRef}>
                <h2 className={styles.title}>
                    We Are <span className={styles.highlight}>Hiqba</span>. <br />
                    Where Vision Meets Execution.
                </h2>
                <p className={styles.description}>
                    Founded on the belief that every brand deserves a unique identity, Hiqba has evolved into a premier creative agency in Dubai.
                    We bridge the gap between physical craftsmanship and digital innovation, offering a seamless experience from concept to reality.
                    Whether it's a high-end business card or a complete digital transformation, we treat every project with the same level of passion and precision.
                </p>
                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>500+</span>
                        <span className={styles.statLabel}>Happy Clients</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>1.2M</span>
                        <span className={styles.statLabel}>Prints Delivered</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
