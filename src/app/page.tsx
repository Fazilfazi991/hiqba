import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import ServiceGrid from "@/components/ServiceGrid";
import Advantage from "@/components/Advantage";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import DetailedServices from "@/components/DetailedServices";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--white)", minHeight: "100vh" }}>
      <Hero />
      <CategorySection />
      <ServiceGrid />
      <Advantage />
      <Portfolio />
      <Process />
      <WhyUs />
      <DetailedServices />
      <ContactForm />
      {/* Footer Placeholder */}
      <footer style={{ padding: "50px", textAlign: "center", color: "var(--text-secondary)", borderTop: "1px solid rgba(30, 33, 77, 0.1)", background: "var(--white)" }}>
        <p>© 2026 HIQBA. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
