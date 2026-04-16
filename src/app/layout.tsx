import type { Metadata } from "next";
import { Manrope, Space_Grotesk, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import JsonLd from "@/components/JsonLd";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tacticaldev.cl"),
  title: {
    default: "TacticalDev | Software Empresarial · Chile",
    template: "%s | TacticalDev",
  },
  description:
    "Empresa chilena de desarrollo de software a medida, inteligencia artificial, apps móviles y arquitectura cloud para sistemas de misión crítica. Santiago de Chile.",
  keywords: [
    "desarrollo software chile",
    "empresa software santiago",
    "desarrollo web empresarial chile",
    "inteligencia artificial chile",
    "software a medida",
    "arquitectura cloud",
    "aplicaciones móviles chile",
    "TacticalDev",
  ],
  authors: [{ name: "TacticalDev Engineering Group" }],
  creator: "TacticalDev",
  publisher: "TacticalDev",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://tacticaldev.cl",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://tacticaldev.cl",
    siteName: "TacticalDev",
    title: "TacticalDev | Software Empresarial · Chile",
    description:
      "Empresa chilena de desarrollo de software a medida, IA, apps móviles y arquitectura cloud para sistemas de misión crítica.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "TacticalDev — Software Empresarial Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TacticalDev | Software Empresarial · Chile",
    description:
      "Desarrollo de software a medida, IA y cloud para equipos de misión crítica en Chile.",
    images: ["/opengraph-image"],
    creator: "@tacticaldevspa",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-theme="dark" className={cn("font-sans", geist.variable)}>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
