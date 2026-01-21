import Link from "next/link";
import { navLinks } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-sand/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#top" className="flex items-center gap-3 font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white">
            TD
          </span>
          <span className="text-sm font-semibold tracking-[0.2em]">TACTICALDEV</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-ink-3 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
        <Button href="#contact" size="sm">
          Schedule a Consultation
        </Button>
      </div>
    </header>
  );
}
