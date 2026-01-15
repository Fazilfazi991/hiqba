"use client";
import styles from "./ServiceGrid.module.css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
    { title: "Business Cards", desc: "Premium quality cards", image: "/images/product_cards.png" },
    { title: "Flyers & Brochures", desc: "Marketing essentials", image: "/images/product_flyer.png" },
    { title: "Customised Mugs", desc: "Personalized gifts", image: "/images/product_mug.png" },
    { title: "Hoodie Printing", desc: "Apparel branding", image: "/images/product_hoodie.png" },
    { title: "Embroidery Patch", desc: "Detailed stitching", image: "/images/product_embroidery.png" },
    { title: "UV Bottle Printing", desc: "Corporate gifts", image: "/images/product_bottle.png" },
    { title: "Pen Engraving", desc: "Elegant personalization", image: "/images/product_pen.png" },
    { title: "Key Duplication", desc: "Instant service", image: "/images/category_gifts.png" }, // Swapped to gifts
    { title: "Abaya Embroidery", desc: "Traditional designs", image: "/images/category_photo.png" }, // Swapped to photo (studio shot)
    { title: "Stamp Printing", desc: "Official documents", image: "/images/portfolio_print_eco.png" }, // Swapped to eco
    { title: "Rollup Banners", desc: "Event displays", image: "/images/category_printing.png" }, // Swapped to printing press
    { title: "Stickers & Labels", desc: "Product branding", image: "/images/portfolio_brand_neon.png" } // Swapped to neon
];

export default function ServiceGrid() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                y: 30,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            if (gridRef.current) {
                gsap.from(gridRef.current.children, {
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.05,
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
            <h2 className={styles.title} ref={titleRef}>The Creative Arena</h2>
            <div className={styles.grid} ref={gridRef}>
                {services.map((service, index) => (
                    <div key={index} className={`${styles.card} ${service.className} hoverable`}>
                        <div className={styles.background}>
                            {/* Using img for debugging */}
                            <img
                                src={service.image}
                                alt={service.title}
                                className={styles.bgImage}
                            />
                        </div>
                        <h3 className={styles.cardTitle}>{service.title}</h3>
                        <p className={styles.cardDesc}>{service.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
