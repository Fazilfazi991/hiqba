import styles from "./WhyUs.module.css";

const reasons = [
    {
        title: "Strategic Vision",
        desc: "We don't just design; we strategize. Every pixel serves a purpose, aligned with your business goals for maximum impact.",
        icon: "👁️"
    },
    {
        title: "Cross-Disciplinary",
        desc: "Bridging the gap between physical print and digital experiences. One partner for your entire brand ecosystem.",
        icon: "🌉"
    },
    {
        title: "Execution Excellence",
        desc: "From concept to final delivery, our process is rigorous, ensuring premium quality that stands the test of time.",
        icon: "💎"
    }
];

export default function WhyUs() {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Why Choose Hiqba?</h2>
            <p className={styles.intro}>
                We combine creative flair with technical precision to elevate your brand.
            </p>
            <div className={styles.grid}>
                {reasons.map((reason, index) => (
                    <div key={index} className={styles.card}>
                        <span className={styles.icon}>{reason.icon}</span>
                        <h3 className={styles.cardTitle}>{reason.title}</h3>
                        <p className={styles.cardDesc}>{reason.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
