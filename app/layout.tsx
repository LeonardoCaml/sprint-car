import type React from "react";

import type { Metadata, Viewport } from "next";

import { Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/next";

import { Suspense } from "react";

import {
  GoogleTagManager,
  GoogleTagManagerNoScript,
} from "@/components/google-tag-manager";

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
        url: "/og-image.png",
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
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    shortcut: ["/favicon.ico"],
  },
};

export const viewport: Viewport = {
  themeColor: "#c62865ff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sprintcar - Centro Automotivo",
    url: siteUrl,
    logo: `${siteUrl}/og-image.png`,
    image: `${siteUrl}/og-image.png`,
  };

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
        <GoogleTagManager gtmId="GTM-TJV2S238" />
      </head>
      <body
        className={`${inter.className} font-sans antialiased overflow-x-hidden`}
      >
        <GoogleTagManagerNoScript gtmId="GTM-TJV2S238" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
