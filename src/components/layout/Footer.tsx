import Link from "next/link";
import { footerColumns } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-sand text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white">
              TD
            </span>
            <span className="text-sm font-semibold tracking-[0.2em]">
              TACTICALDEV
            </span>
          </div>
          <p className="text-sm text-white/70">
            El socio elegido para ingeniería de software empresarial de alto
            riesgo y arquitectura de nube estratégica.
          </p>
          <div className="flex gap-3 text-xs text-white/60">
            <Link href="#">LinkedIn</Link>
            <Link href="#">Dribbble</Link>
            <Link href="#">Medium</Link>
          </div>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title} className="space-y-3 text-sm">
            <p className="font-semibold text-white">{column.title}</p>
            <ul className="space-y-2 text-white/70">
              {column.links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/50">
        © 2024 TacticalDev Engineering Group. Todos los derechos reservados.
      </div>
    </footer>
  );
}
