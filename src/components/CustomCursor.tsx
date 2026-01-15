"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        // Use gsap.quickSetter for better performance
        const xSet = gsap.quickSetter(cursor, "x", "px");
        const ySet = gsap.quickSetter(cursor, "y", "px");
        const followerXSet = gsap.quickSetter(follower, "x", "px");
        const followerYSet = gsap.quickSetter(follower, "y", "px");

        const moveCursor = (e: MouseEvent) => {
            xSet(e.clientX);
            ySet(e.clientY);

            // Simple lag logic manually or use gsap to
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: "power2.out"
            });
        };

        window.addEventListener("mousemove", moveCursor);

        // Initial query
        const hoverables = document.querySelectorAll("a, button, .hoverable");

        const handleHoverStart = () => setIsHovering(true);
        const handleHoverEnd = () => setIsHovering(false);

        hoverables.forEach((el) => {
            el.addEventListener("mouseenter", handleHoverStart);
            el.addEventListener("mouseleave", handleHoverEnd);
        });

        // Observer for new elements (optional, or just use delegation logic if simpler, but explicit is reliable correctly)
        // For simplicity, we assume static interactive elements or specific ones. 
        // To be robust, event delegation on document is better.
        const handleOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };
        // window.addEventListener('mouseover', handleOver); // This might be too aggressive, stick to basic for now or use delegation on body mousemove check

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            // Clean up if we added individual listeners
            hoverables.forEach((el) => {
                el.removeEventListener("mouseenter", handleHoverStart);
                el.removeEventListener("mouseleave", handleHoverEnd);
            });
            // window.removeEventListener('mouseover', handleOver);
        };
    }, []);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (isHovering) {
            gsap.to(cursor, { scale: 0, duration: 0.2 });
            gsap.to(follower, {
                width: 60,
                height: 60,
                backgroundColor: "var(--primary-navy)",
                color: "var(--white)",
                mixBlendMode: "normal",
                border: "none",
                duration: 0.2,
            });
            if (follower) follower.innerText = "VIEW";
        } else {
            gsap.to(cursor, { scale: 1, duration: 0.2 });
            gsap.to(follower, {
                width: 30,
                height: 30,
                backgroundColor: "transparent",
                mixBlendMode: "normal",
                border: "1px solid var(--accent-cyan)",
                duration: 0.2,
            });
            if (follower) follower.innerText = "";
        }
    }, [isHovering]);

    return (
        <>
            <div ref={cursorRef} className={styles.cursor} />
            <div ref={followerRef} className={styles.follower} />
        </>
    );
}
