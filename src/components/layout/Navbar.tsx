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
    <header
      className={`sticky top-0 z-40 border-b border-transparent shadow-[0_6px_12px_rgba(15,42,61,0.25)] ${
        isScrolled ? "bg-[#4f8f6a]/95 text-white backdrop-blur" : "hero-header-bg"
      }`}
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
        <nav
          className={`hidden items-center gap-6 text-sm md:flex ${
            isScrolled ? "text-white/80" : "text-ink-3"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isScrolled ? "hover:text-white" : "hover:text-ink"}
              onClick={(event) => handleAnchorClick(event, link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button href="#contact" size="sm">
            Agenda una consulta
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink md:hidden"
          aria-label="Abrir menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Abrir menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 bg-ink" />
            <span className="h-0.5 w-5 bg-ink" />
            <span className="h-0.5 w-5 bg-ink" />
          </div>
        </button>
      </div>
      <div
        className={`md:hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden border-t border-line bg-sand transition-all duration-300 ease-out`}
      >
        <div className="flex flex-col gap-4 px-6 py-4 text-sm text-ink-3">
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
          <Button href="#contact" size="sm">
            Agenda una consulta
          </Button>
        </div>
      </div>
    </header>
  );
}
