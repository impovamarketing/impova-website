import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Impova – Webdesign & SEO Agentur Landshut",
  description:
    "Website erstellen lassen oder Website-Relaunch in Landshut: professionell, bei Google gefunden, mit klarer Nutzerführung zur Anfrage.",
  keywords: [
    "Webdesign Landshut",
    "Webdesign Agentur Landshut",
    "SEO Agentur Landshut",
    "Website erstellen lassen Landshut",
    "Website Relaunch",
    "Professionelle Website erstellen lassen",
    "High-End Webdesign Landshut",
  ],
  authors: [{ name: "Impova" }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "Impova",
    title: "Impova – Webdesign & SEO Agentur Landshut",
    description:
      "Ich baue Websites für Unternehmen in Landshut, die professionell wirken, bei Google gefunden werden und Besucher zur Anfrage führen.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Impova – Webdesign & SEO Agentur Landshut",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Impova – Webdesign & SEO Agentur Landshut",
    description:
      "Websites für Unternehmen in Landshut, die professionell wirken, bei Google gefunden werden und Anfragen bringen.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Impova",
  image: `${siteUrl}/og-image.png`,
  url: siteUrl,
  description:
    "Webdesign, SEO und Conversion-Optimierung für Unternehmen in Landshut.",
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
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-base text-foreground">
        {children}
      </body>
    </html>
  );
}
