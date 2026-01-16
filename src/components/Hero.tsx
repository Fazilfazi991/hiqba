"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import Image from "next/image";

const slides = [
    {
        id: 1,
        image: "/images/slider-main.png",
        title: "HIQBA Services",
        description: "Your partner for printing, branding, and marketing excellence."
    },
    {
        id: 2,
        image: "/images/branding.png",
        title: "Premium Branding",
        description: "Elevate your identity with world-class design and aesthetics."
    },
    {
        id: 3,
        image: "/images/printing.png",
        title: "High-Quality Printing",
        description: "State-of-the-art printing solutions for all your business needs."
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1)),
            5000 // Change slide every 5 seconds
        );

        return () => {
            resetTimeout();
        };
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <section className={styles.hero}>
            {/* Slider Images */}
            <div className={styles.sliderContainer}>
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}
                    >
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className={styles.slideImage}
                            priority={index === 0}
                        />
                    </div>
                ))}
                <div className={styles.overlay}></div>
            </div>

            {/* Navigation Buttons */}
            <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevSlide} aria-label="Previous Slide">
                &#10094;
            </button>
            <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextSlide} aria-label="Next Slide">
                &#10095;
            </button>

            {/* Content Overlay */}
            <div className={styles.content}>
                <h1 className={styles.headline} key={currentSlide + "-title"}>
                    {slides[currentSlide].title}
                </h1>
                <p className={styles.subheadline} key={currentSlide + "-desc"}>
                    {slides[currentSlide].description}
                </p>
                <div className={styles.ctaContainer}>
                    <button className={`${styles.cta} hoverable`}>GET A QUOTE</button>
                </div>
            </div>
        </section>
    );
}
