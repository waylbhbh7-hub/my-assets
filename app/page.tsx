import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { ProjectsSection } from "@/components/projects-section";
import { ServiceRequestForm } from "@/components/service-request-form";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function PortfolioPage() {
  return (
    <main className="relative overflow-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ServiceRequestForm />
      <ContactSection />
      <Footer />
    </main>
  );
}
