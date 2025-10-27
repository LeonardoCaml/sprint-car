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
  applicationName: "Sprintcar - Centro Automotivo",
  title: {
    default: "Sprintcar - Centro Automotivou",
    template: "%s | Sprintcar - Centro Automotivo",
  },
  description:
    "A SprintCar oferece serviços completos para manter seu carro seguro e em perfeitas condições. Atendimento especializado para quem valoriza excelência e confiança.",
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
    siteName: "Sprintcar - Centro Automotivo",
    title: "Sprintcar - Centro Automotivo",
    description:
      "A SprintCar oferece serviços completos para manter seu carro seguro e em perfeitas condições. Atendimento especializado para quem valoriza excelência e confiança.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Sprintcar - Centro Automotivo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sprintcar - Centro Automotivo",
    description:
      "A SprintCar oferece serviços completos para manter seu carro seguro e em perfeitas condições. Atendimento especializado para quem valoriza excelência e confiança.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [{ url: "/favicon.png", sizes: "any" }],
    shortcut: ["/favicon.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#c62865ff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Sprintcar - Centro Automotivo",
    url: siteUrl,
    image: `${siteUrl}/logo.png`,
    description:
      "A SprintCar oferece serviços completos para manter seu carro seguro e em perfeitas condições. Atendimento especializado para quem valoriza excelência e confiança.",
    telephone: "+554831974041",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Coleira 834",
      addressLocality: "Tijucas",
      addressRegion: "SC",
      postalCode: "88200-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -27.231265932934903,
      longitude: -48.62082797116306,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "13:30",
        closes: "18:30",
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
