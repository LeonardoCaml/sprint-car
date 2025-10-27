import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000") as string;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Oficina UP Bloco",
  title: {
    default: "Oficina UP Bloco - Mecânica Especializada em Caruaru",
    template: "%s | Oficina UP Bloco",
  },
  description:
    "Oficina mecânica em Caruaru especializada em motores flex e diesel leve. 17 anos de experiência com serviços de chassis, suspensão, freios e muito mais.",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Oficina UP Bloco",
    title:
      "Oficina UP Bloco — Especialistas em Mecânica Flex e Diesel em Caruaru",
    description:
      "Mais de 17 anos oferecendo serviços de qualidade em motores, freios, suspensão e chassis. Confiança e experiência em Caruaru.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Oficina UP Bloco — Mecânica em Caruaru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oficina UP Bloco — Mecânica Especializada em Caruaru",
    description:
      "Mecânica com 17 anos de experiência em Caruaru. Especialistas em motores flex e diesel leve, freios, suspensão e muito mais.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [{ url: "/favicon.png", sizes: "any" }],
    shortcut: ["/favicon.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#C62828",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Oficina UP Bloco",
    url: siteUrl,
    image: `${siteUrl}/logo.png`,
    description:
      "Oficina mecânica especializada em flex e diesel leve, com 17 anos de experiência em Caruaru. Serviços de chassis, suspensão e freios.",
    telephone: "+5581995320002",
    address: {
      "@type": "PostalAddress",
      streetAddress: "AV CAMPINA GRANDE, N 1095, BAIRRO BOA VISTA",
      addressLocality: "Caruaru",
      addressRegion: "PE",
      postalCode: "55038-228",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -8.280417162514299,
      longitude: -35.98345532275768,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "12:00",
      },
    ],
    priceRange: "$$",
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Manutenção de motores flex e diesel",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Revisão e freios ABS" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Suspensão e direção" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Diagnóstico via scanner" },
      },
    ],
  };

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
