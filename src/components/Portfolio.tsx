"use client";
import styles from "./Portfolio.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    { title: "Neon City", cat: "Branding", image: "/images/portfolio_brand_neon.png" },
    { title: "Aurum Estates", cat: "Web Design", image: "/images/portfolio_web_luxe.png" },
    { title: "Eco Box", cat: "Print", image: "/images/portfolio_print_eco.png" },
    { title: "Urban Flow", cat: "Video", image: "/images/category_photo.png" }, // Swapped
    { title: "Tech Start", cat: "Web Development", image: "/images/product_flyer.png" }, // Swapped
    { title: "Zen Spa", cat: "Social Media", image: "/images/product_bottle.png" }, // Swapped
];

export default function Portfolio() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(headerRef.current, {
                y: 30,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            if (gridRef.current) {
                gsap.from((gridRef.current as any).children, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 85%",
                    }
                });
            }
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className={styles.section} ref={sectionRef}>
            <div className={styles.header} ref={headerRef}>
                <h2 className={styles.title}>Selected Works</h2>
                <p className={styles.subtitle}>A showcase of our finest endeavors.</p>
            </div>
            <div className={styles.grid} ref={gridRef}>
                {projects.map((p, i) => (
                    <div key={i} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img
                                src={p.image}
                                alt={p.title}
                                className={styles.projectImage}
                            />
                        </div>
                        <div className={styles.projectInfo}>
                            <span className={styles.projectCat}>{p.cat}</span>
                            <h3 className={styles.projectTitle}>{p.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
