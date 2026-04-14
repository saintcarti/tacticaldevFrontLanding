﻿"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { navLinks } from "@/lib/constants";
import { AnimatedThemeToggler } from "@/registry/magicui/animated-theme-toggler";
import { useTheme } from "@/hooks/use-theme";
import { usePathname, useRouter } from "next/navigation";

// Fix: Component defined outside to prevent re-creation on every render
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const theme = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) return;
    
    if (pathname !== "/") {
      // If not on home page, navigate to home + anchor
      return;
    }

    event.preventDefault();
    
    const target = document.getElementById(href.slice(1));

    if (!target) return;

    const header = document.querySelector("header");
    let headerOffset = 0;
    if (header) {
      const navBar = header.firstElementChild;
      headerOffset = navBar ? navBar.getBoundingClientRect().height : header.getBoundingClientRect().height;
    }
    
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset + 50;

    window.scrollTo({ top, behavior: "smooth" });
    window.history.replaceState(null, "", href);
    setIsOpen(false);
  };

  const logoSrc = theme === "dark" ? "/logoTD.webp" : "/LogoTD_White.webp";

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 border-b border-line-soft bg-nav text-ink backdrop-blur shadow-[var(--td-nav-shadow)]"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href={pathname === "/" ? "#top" : "/"} className="flex items-center">
            <Image
              src={logoSrc}
              alt="TacticalDev"
              width={360}
              height={96}
              className="h-20 w-auto object-contain"
              priority
            />
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-ink/80 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={pathname === "/" ? link.href : `/${link.href}`}
                className="hover:text-ink transition-colors"
                onClick={(event) => handleAnchorClick(event, link.href)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-4 md:flex">
            <AnimatedThemeToggler className="group relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-line/60 bg-ink/10 text-ink transition-colors hover:bg-ink/20" />
            <Link
              href="https://wa.me/+56991338717"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-on-brand transition hover:bg-[#1fb85a]"
            >
              <span className="flex h-6 w-6 items-center justify-center">
                <WhatsAppIcon className="h-5 w-5 fill-white" />
              </span>
              WhatsApp
            </Link>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line/60 text-ink md:hidden"
            aria-label="Abrir menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="sr-only">Abrir menú</span>
            <div className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 bg-ink" />
              <span className="h-0.5 w-5 bg-ink" />
              <span className="h-0.5 w-5 bg-ink" />
            </div>
          </button>
        </div>
        <div
          className={`md:hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden border-t border-line/50 bg-surface transition-all duration-300 ease-out`}
        >
          <div className="flex flex-col gap-4 px-6 py-4 text-sm text-ink/80">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-ink"
                onClick={(event) => handleAnchorClick(event, link.href)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-between gap-3 rounded-xl border border-line/50 bg-ink/5 px-4 py-3">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ink/50">
                Tema
              </span>
              <AnimatedThemeToggler className="group relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-line/60 bg-ink/10 text-ink transition-colors hover:bg-ink/20" />
            </div>
            <Link
              href="https://wa.me/+56991338717"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-on-brand transition hover:bg-[#1fb85a]"
            >
              <span className="flex h-4 w-4 items-center justify-center">
                <WhatsAppIcon className="h-3.5 w-3.5 fill-white" />
              </span>
              WhatsApp
            </Link>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-line-soft/30">
          <div 
            className="h-full bg-gradient-to-r from-brand via-accent to-brand transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>
      <button
        type="button"
        aria-label="Cerrar menu"
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-30 bg-sand/70 backdrop-blur-sm transition-opacity duration-300 ease-out md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />
      <Link
        href="https://wa.me/+56991338717"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-transform hover:scale-110 active:scale-95 md:hidden"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon className="h-8 w-8 fill-white" />
      </Link>
    </>
  );
}
