import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Philosophy } from "@/components/Philosophy";
import { Services } from "@/components/Services";
import { AIAutomation } from "@/components/AIAutomation";
import { Pipeline } from "@/components/Pipeline";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Philosophy />
        <Services />
        <AIAutomation />
        <Pipeline />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
