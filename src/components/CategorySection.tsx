"use client";
import styles from "./CategorySection.module.css";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
    {
        title: "Digital & Offset Printing",
        link: "/services/printing",
        image: "/images/category_printing.png"
    },
    {
        title: "Photo Studio Services",
        link: "/services/photo-studio",
        image: "/images/category_photo.png"
    },
    {
        title: "Customised Printing",
        link: "/services/customised",
        image: "/images/category_gifts.png"
    }
];

export default function CategorySection() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            if (gridRef.current) {
                gsap.from(gridRef.current.children, {
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
            <h2 className={styles.title} ref={titleRef}>A One-Stop Shop For All Your Printing Needs</h2>
            <div className={styles.grid} ref={gridRef}>
                {categories.map((cat, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img src={cat.image} alt={cat.title} className={styles.categoryImage} />
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.cardTitle}>{cat.title}</h3>
                            <Link href={cat.link} className={styles.link}>
                                View Services <span>→</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
