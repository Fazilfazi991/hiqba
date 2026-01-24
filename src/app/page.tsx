import Hero from "@/components/Hero";
import About from "@/components/About";
import ServiceGrid from "@/components/ServiceGrid";
import Advantage from "@/components/Advantage";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import DetailedServices from "@/components/DetailedServices";
import ContactForm from "@/components/ContactForm";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--white)", minHeight: "100vh" }}>
      <Hero />
      <About />
      <ServiceGrid />
      <Advantage />
      <Portfolio />
      <Process />
      <WhyUs />
      <DetailedServices />
      <Team />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
