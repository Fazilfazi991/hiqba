"use client";
import styles from "./Process.module.css";

const steps = [
    {
        number: "01",
        title: "Discovery",
        desc: "We dive deep into your brand's vision, goals, and audience to build a solid foundation."
    },
    {
        number: "02",
        title: "Strategy & Design",
        desc: "Our creative team crafts a bespoke strategy and visual identity that aligns with your objectives."
    },
    {
        number: "03",
        title: "Execution & Launch",
        desc: "We bring the vision to life with precision execution, ensuring a flawless launch and impact."
    }
];

export default function Process() {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Our Proven Process</h2>
            <p className={styles.subtitle}>A streamlined approach to delivering exceptional results, every time.</p>
            <div className={styles.steps}>
                {steps.map((step, index) => (
                    <div key={index} className={styles.step}>
                        <span className={styles.stepNumber}>{step.number}</span>
                        <h3 className={styles.stepTitle}>{step.title}</h3>
                        <p className={styles.stepDesc}>{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
