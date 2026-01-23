"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleAnchorClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) return;
    event.preventDefault();
    const target = document.getElementById(href.slice(1));
    if (!target) return;

    const header = document.querySelector("header");
    const headerOffset =
      header instanceof HTMLElement ? header.getBoundingClientRect().height : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top, behavior: "smooth" });
    window.history.replaceState(null, "", href);
    setIsOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#020617]/95 text-white backdrop-blur shadow-[0_6px_18px_rgba(2,6,23,0.6)]"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="#top" className="flex items-center">
            <Image
              src="/logoTD.png"
              alt="TacticalDev"
              width={360}
              height={96}
              className="h-20 w-auto object-contain"
              priority
            />
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white"
                onClick={(event) => handleAnchorClick(event, link.href)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Link
              href="https://wa.me/+56982397352"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-[#020617] transition hover:bg-[#1fb85a]"
            >
              <span className="h-4 w-4">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 3.5a8.5 8.5 0 0 0-7.23 12.91L4 21l4.76-1.24A8.5 8.5 0 1 0 12 3.5Zm0 2a6.5 6.5 0 0 1 5.56 9.96l-.36.58-2.7.7-.63-.33a9.82 9.82 0 0 1-3.74-3.73l-.33-.64.71-2.7.58-.36A6.47 6.47 0 0 1 12 5.5Zm3.25 8.14c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.44.1-.13.2-.5.64-.61.77-.11.13-.23.15-.43.05-.2-.1-.86-.32-1.64-1.03-.6-.54-1.01-1.22-1.13-1.42-.12-.2-.01-.31.09-.41l.3-.35c.1-.11.13-.19.2-.32.07-.13.04-.24-.02-.34-.06-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.33h-.38c-.13 0-.33.05-.5.24-.17.2-.66.64-.66 1.56 0 .92.68 1.81.77 1.94.1.13 1.34 2.06 3.25 2.89.45.2.8.32 1.07.41.45.14.86.12 1.18.07.36-.05 1.18-.48 1.35-.95.17-.47.17-.87.12-.95-.05-.08-.18-.13-.38-.23Z" />
                </svg>
              </span>
              WhatsApp
            </Link>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white md:hidden"
            aria-label="Abrir menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="sr-only">Abrir menú</span>
            <div className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 bg-white" />
              <span className="h-0.5 w-5 bg-white" />
              <span className="h-0.5 w-5 bg-white" />
            </div>
          </button>
        </div>
        <div
          className={`md:hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden border-t border-white/10 bg-[#0b1224] transition-all duration-300 ease-out`}
        >
          <div className="flex flex-col gap-4 px-6 py-4 text-sm text-white/80">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white"
                onClick={(event) => handleAnchorClick(event, link.href)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://wa.me/+56982397352"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-[#020617] transition hover:bg-[#1fb85a]"
            >
              <span className="h-4 w-4">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 3.5a8.5 8.5 0 0 0-7.23 12.91L4 21l4.76-1.24A8.5 8.5 0 1 0 12 3.5Zm0 2a6.5 6.5 0 0 1 5.56 9.96l-.36.58-2.7.7-.63-.33a9.82 9.82 0 0 1-3.74-3.73l-.33-.64.71-2.7.58-.36A6.47 6.47 0 0 1 12 5.5Zm3.25 8.14c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.44.1-.13.2-.5.64-.61.77-.11.13-.23.15-.43.05-.2-.1-.86-.32-1.64-1.03-.6-.54-1.01-1.22-1.13-1.42-.12-.2-.01-.31.09-.41l.3-.35c.1-.11.13-.19.2-.32.07-.13.04-.24-.02-.34-.06-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.33h-.38c-.13 0-.33.05-.5.24-.17.2-.66.64-.66 1.56 0 .92.68 1.81.77 1.94.1.13 1.34 2.06 3.25 2.89.45.2.8.32 1.07.41.45.14.86.12 1.18.07.36-.05 1.18-.48 1.35-.95.17-.47.17-.87.12-.95-.05-.08-.18-.13-.38-.23Z" />
                </svg>
              </span>
              WhatsApp
            </Link>
          </div>
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
    </>
  );
}
