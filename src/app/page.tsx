import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Marquee } from "@/components/Marquee";
import { VisibilityCheck } from "@/components/VisibilityCheck";
import { AdsPilot } from "@/components/AdsPilot";
import { Work } from "@/components/Work";
import { Testimonials } from "@/components/Testimonials";
import { Philosophy } from "@/components/Philosophy";
import { Services } from "@/components/Services";
import { Pipeline } from "@/components/Pipeline";
import { AIAutomation } from "@/components/AIAutomation";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.impova.de" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Impova", item: "https://www.impova.de" },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Problem />
        <VisibilityCheck />
        <Philosophy />
        <Marquee />
        <Work />
        <Testimonials index="04" />
        <Services />
        <AdsPilot />
        <Pipeline />
        <AIAutomation />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
