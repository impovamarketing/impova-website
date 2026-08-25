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
  title: "Impova – High-End Webdesign & SEO Agentur Landshut",
  description:
    "Premium Website erstellen lassen: High-End Webdesign & Performance-SEO für Unternehmen in Landshut. Kein Baukasten. Jetzt Projekt anfragen.",
  keywords: [
    "High-End Webdesign Landshut",
    "SEO Agentur Landshut",
    "Premium Website erstellen",
    "Webdesign Agentur Landshut",
    "Individuelle Webentwicklung",
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
    title: "Impova – High-End Webdesign & SEO Agentur Landshut",
    description:
      "Individuell entwickelte Websites für Unternehmen, die auf Performance und Rankings optimiert sind. Kein Baukasten, kein Theme.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Impova – High-End Webdesign & SEO Agentur Landshut",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Impova – High-End Webdesign & SEO Agentur Landshut",
    description:
      "Individuell entwickelte Websites für Unternehmen, die auf Performance und Rankings optimiert sind.",
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
    "High-End Webdesign & Performance-SEO Agentur für Unternehmen in Landshut.",
  areaServed: {
    "@type": "City",
    name: "Landshut",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Landshut",
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
