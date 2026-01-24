"use client";
import styles from "./Team.module.css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
    {
        id: 1,
        name: "Alex Morgan",
        role: "Creative Director",
        bio: "Leading our design vision with over 15 years of experience in brand strategy.",
        image: "/images/team_1.png" // Placeholder
    },
    {
        id: 2,
        name: "Sarah Chen",
        role: "Lead Developer",
        bio: "Full-stack expert specializing in high-performance web applications and animations.",
        image: "/images/team_2.png" // Placeholder
    },
    {
        id: 3,
        name: "Michael Ross",
        role: "Print Specialist",
        bio: "Master of materials and textures, ensuring every physical product is perfect.",
        image: "/images/team_3.png" // Placeholder
    }
];

export default function Team() {
    const sectionRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        gsap.from((gridRef.current as any).children, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: gridRef.current,
                start: "top 75%",
            }
        });
    }, []);

    return (
        <section className={styles.section} ref={sectionRef} id="team">
            <h2 className={styles.title}>Meet The Experts</h2>
            <p className={styles.subtitle}>The creative minds behind your success.</p>

            <div className={styles.grid} ref={gridRef}>
                {teamMembers.map((member) => (
                    <div key={member.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            {/* Validating if image exists, otherwise fallback to color block in CSS or generic implementation */}
                            {/* Since these images might not exist yet, we can use a reliable placeholder service if needed, 
                                 but for now we assume they might be added or we rely on alt text/styling */}
                            <div style={{ width: '100%', height: '100%', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
                                [Image: {member.name}]
                            </div>
                        </div>
                        <div className={styles.info}>
                            <h3 className={styles.name}>{member.name}</h3>
                            <p className={styles.role}>{member.role}</p>
                            <p className={styles.bio}>{member.bio}</p>
                            <div className={styles.socials}>
                                <a href="#" className={styles.socialLink}>LI</a>
                                <a href="#" className={styles.socialLink}>TW</a>
                                <a href="#" className={styles.socialLink}>IG</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
