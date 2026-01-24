"use client";
import styles from "./FAQ.module.css";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqData = [
    {
        question: "What services does Hiqba offer?",
        answer: "We offer a comprehensive range of services including branding, graphic design, web development, digital marketing, and high-quality printing solutions for businesses of all sizes."
    },
    {
        question: "Do you handle international projects?",
        answer: "Yes, we work with clients globally. Our digital solutions are available worldwide, and we can coordinate shipping for printing projects depending on the location."
    },
    {
        question: "What is your typical turnaround time?",
        answer: "Turnaround times vary by project. Standard branding packages typically take 2-3 weeks, while web development can take 4-8 weeks. Printing orders are usually processed within 3-5 business days."
    },
    {
        question: "Can you help with rebranding my existing business?",
        answer: "Absolutely. We specialize in rebranding. We analyze your current brand identity and market position to create a refreshed, modern look that aligns with your evolution."
    },
    {
        question: "How do I get a quote?",
        answer: "You can request a quote by clicking the 'Get a Quote' button on our homepage or by contacting us directly through our contact form. We'll respond within 24 hours."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const titleRef = useRef(null);
    const containerRef = useRef(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        gsap.from(titleRef.current, {
            y: 30,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 80%",
            }
        });

        gsap.from((containerRef.current as any).children, {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        });
    }, []);

    return (
        <section className={styles.section} id="faq">
            <div className={styles.container}>
                <h2 className={styles.title} ref={titleRef}>Frequently Asked Questions</h2>
                <div ref={containerRef}>
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ""}`}
                        >
                            <button
                                className={`${styles.question} ${activeIndex === index ? styles.active : ""}`}
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={activeIndex === index}
                            >
                                {item.question}
                                <span className={styles.icon}></span>
                            </button>
                            <div className={styles.answer} style={{ maxHeight: activeIndex === index ? "200px" : "0" }}>
                                <div className={styles.answerContent}>
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
