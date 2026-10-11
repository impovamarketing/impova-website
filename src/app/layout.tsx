import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { ORGANIZATION_ID } from "@/lib/seo";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.impova.de";

const TITLE = "Webdesign und lokale Sichtbarkeit in Landshut | Impova";
const DESCRIPTION =
  "Websites für lokale Unternehmen in Landshut und Niederbayern, die bei Google gefunden werden und Anfragen bringen. Persönlich betreut, 5,0 bei Google.";

// Kein Canonical im Layout: sonst erben Unterseiten ohne eigenen Canonical den der Startseite.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: "Tobias Springer" }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "Impova",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Impova: Webdesign und lokale Sichtbarkeit in Landshut",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationId = ORGANIZATION_ID;
const websiteId = `${siteUrl}/#website`;
const personId = `${siteUrl}/#person-tobias-springer`;

const sameAs = [
  "https://www.linkedin.com/in/tobias-springer-4400173b0/",
  "https://www.instagram.com/tobias.sprngr/",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": organizationId,
      name: "Impova",
      image: `${siteUrl}/og-image.png`,
      logo: `${siteUrl}/images/brand/logo-impova.png`,
      url: siteUrl,
      telephone: "+4915123819198",
      description:
        "Webdesign und lokale Sichtbarkeit für Unternehmen in Landshut und Niederbayern: Websites, die bei Google gefunden werden und Anfragen bringen.",
      areaServed: [
        {
          "@type": "City",
          name: "Landshut",
        },
        {
          "@type": "City",
          name: "Essenbach",
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hauptstraße 21a",
        postalCode: "84051",
        addressLocality: "Essenbach",
        addressRegion: "Bayern",
        addressCountry: "DE",
      },
      priceRange: "€€€€",
      founder: { "@id": personId },
      sameAs,
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: "Impova",
      url: siteUrl,
      inLanguage: "de-DE",
      publisher: { "@id": organizationId },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: "Tobias Springer",
      url: `${siteUrl}/ueber-mich`,
      jobTitle: "Gründer",
      worksFor: { "@id": organizationId },
      sameAs,
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta
          name="facebook-domain-verification"
          content="5rpyrg6xrbtd5l1u48thv7w48xnv77"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-base text-foreground">
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
        <CookieConsent />
      </body>
    </html>
  );
}
