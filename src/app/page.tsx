import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MedicalVisibility from "@/components/MedicalVisibility";
import VideosSection from "@/components/VideosSection";
import DoctorsSection from "@/components/DoctorsSection";
import Testimonials from "@/components/Testimonials";
import NetworkSection from "@/components/NetworkSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <MedicalVisibility />
      <VideosSection />
      <DoctorsSection />
      <Testimonials />
      <NetworkSection />
      <CTA />
      <Footer />
    </main>
  );
}
