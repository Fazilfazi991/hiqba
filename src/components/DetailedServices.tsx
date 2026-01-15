import styles from "./DetailedServices.module.css";

const serviceList = [
    { name: "Brand Strategy & Identity", desc: "Logo design, brand guidelines, and visual positioning." },
    { name: "UI/UX Design", desc: "User-centric interfaces for web and mobile applications." },
    { name: "Custom Web Development", desc: "Full-stack solutions using Next.js, React, and Node.js." },
    { name: "Large Format Printing", desc: "High-quality hoardings, banners, and exhibition stands." },
    { name: "Vehicle Branding", desc: "Fleet graphics that turn vehicles into mobile billboards." },
    { name: "Social Media Management", desc: "Content creation, scheduling, and community engagement." },
    { name: "SEO & Performance", desc: "Technical optimization to rank higher and load faster." },
];

export default function DetailedServices() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Services We Do</h2>
                <ul className={styles.serviceList}>
                    {serviceList.map((service, index) => (
                        <li key={index} className={`${styles.serviceItem} hoverable`}>
                            <span className={styles.serviceName}>{service.name}</span>
                            <span className={styles.serviceDesc}>{service.desc}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
