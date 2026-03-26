import type { Metadata } from "next";
import { Manrope, Space_Grotesk, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
  title: "TacticalDev",
  description:
    "Desarrollo y arquitectura de software de nivel empresarial para equipos de misión crítica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-theme="dark" className={cn("font-sans", geist.variable)}>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} min-h-screen bg-sand text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
