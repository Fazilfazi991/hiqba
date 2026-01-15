"use client";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you! We'll be in touch soon.");
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Let's Start a Project</h2>
                <p className={styles.subtitle}>Ready to elevate your brand? Tell us about your vision.</p>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <input type="text" placeholder="Your Name" className={styles.input} required />
                        <input type="email" placeholder="Your Email" className={styles.input} required />
                    </div>
                    <input type="text" placeholder="Project Type / Subject" className={styles.input} required />
                    <textarea placeholder="Tell us more about your project..." className={styles.textarea} required></textarea>

                    <button type="submit" className={`${styles.submitBtn} hoverable`}>SEND MESSAGE</button>
                </form>
            </div>
        </section>
    );
}
