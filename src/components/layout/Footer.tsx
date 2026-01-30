import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { footerColumns, socialLinks } from "@/lib/constants";

const socialIcons: Record<string, ReactNode> = {
  //LinkedIn: (
  //  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  //    <path d="M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5Zm-2 6h4v11h-4v-11Zm7 0h3.8v1.5h.05c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.63 4.79 6.05v5.5h-4v-4.88c0-1.16-.02-2.65-1.62-2.65-1.62 0-1.87 1.26-1.87 2.57v4.96h-4v-11Z" />
  //  </svg>
  //),
  ///Instagram: (
  ///  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  ///    <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-5 3.5A4.5 4.5 0 1 1 7.5 13 4.51 4.51 0 0 1 12 8.5Zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5Zm5.25-2.75a.75.75 0 1 1-.75.75.75.75 0 0 1 .75-.75Z" />
  ///  </svg>
  ///),
  Twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4 3h4.6l4.18 5.96L18.6 3H22l-7.02 8.86L22 21h-4.6l-4.5-6.45L7.1 21H3.7l7.45-9.4L4 3Zm4.75 2.6H7.4l9.9 13.8h1.36L8.75 5.6Z" />
    </svg>
  ),
  //TikTok: (
  //  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  //    <path d="M15.5 3c.6 2.3 2.3 4 4.5 4.5v3.2c-1.7 0-3.3-.6-4.5-1.6V16a5 5 0 1 1-5-5c.4 0 .9.1 1.3.2v3.3a2 2 0 1 0 1.7 2V3h2Z" />
  //  </svg>
  //),
};

export default function Footer() {
  return (
    <footer className="bg-sand text-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-13 md:grid-cols-[1.7fr_1fr_1fr_1fr]">
        <div className="space-y-2">
          <div className="flex items-center">
            <Image
              src="/logoTD.png"
              alt="TacticalDev"
              width={220}
              height={64}
              className="h-20 w-auto object-contain"
            />
          </div>
          <p className="text-sm text-ink/70">
            Soluciones de software empresarial construidas con precisión arquitectónica y enfoque en escala.
          </p>
          <div className="flex items-center gap-3 text-ink/60">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line/60 bg-ink/10 text-ink/70 transition hover:border-line/90 hover:bg-ink/20 hover:text-ink"
                aria-label={link.label}
              >
                <span className="h-4 w-4">{socialIcons[link.label]}</span>
              </Link>
            ))}
          </div>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title} className="space-y-3 text-sm">
            <p className="font-semibold text-ink">{column.title}</p>
            <ul className="space-y-2 text-ink/70">
              {column.links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line/60 px-6 py-6 text-center text-xs text-ink/50">
        (c) 2026 TacticalDev Engineering Group. Todos los derechos reservados.
      </div>
    </footer>
  );
}

