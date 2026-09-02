import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Marquee } from "@/components/Marquee";
import { Work } from "@/components/Work";
import { Philosophy } from "@/components/Philosophy";
import { Services } from "@/components/Services";
import { Pipeline } from "@/components/Pipeline";
import { AIAutomation } from "@/components/AIAutomation";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Philosophy />
        <Marquee />
        <Work />
        <Services />
        <Pipeline />
        <AIAutomation />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
