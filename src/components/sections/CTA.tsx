import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0b1224] text-white"
    >
      <Reveal className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 ease-out [&.is-visible]:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1224] via-[#0a1630] to-[#102a5c]" />
        <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-[#2f6bff]/15 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#60A5FA]/10 blur-3xl" />
      </Reveal>

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="opacity-0 translate-y-6 scale-[0.98] transition duration-700 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 [&.is-visible]:scale-100">
            <div className="rounded-[var(--radius-card)] border border-white/10 bg-[#0f1e3a]/80 px-7 py-10 shadow-[0_28px_80px_rgba(2,6,23,0.55)] md:translate-x-[-0.25rem]">
              <div className="mb-4 h-1 w-16 overflow-hidden rounded-full">
                <span className="block h-full w-full bg-[#60A5FA]" />
              </div>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Listo para escalar tu plataforma web?
              </h2>
              <p className="mt-4 max-w-xl text-sm text-white/80 md:text-base">
                Arquitectura y desarrollo web para sistemas escalables, seguros y
                mantenibles. Implementación enfocada en performance real.
              </p>
              
            </div>
          </Reveal>

          <Reveal className="opacity-0 translate-y-6 transition duration-700 ease-out delay-100 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
            <form className="space-y-5 rounded-[var(--radius-card)] border border-white/10 bg-white/5 p-6 text-white/80">
              <div>
                <label className="text-sm font-semibold text-white" htmlFor="cta-email">
                  Correo
                </label>
                <input
                  id="cta-email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#0b1224] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#60A5FA]/80"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-white" htmlFor="cta-description">
                  Descripción
                </label>
                <textarea
                  id="cta-description"
                  name="description"
                  required
                  rows={4}
                  placeholder="Cuéntanos sobre tu plataforma web y objetivos."
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-[#0b1224] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#60A5FA]/80"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#60A5FA] px-5 py-3 text-sm font-semibold text-[#020617] transition hover:bg-[#93C5FD]"
              >
                Enviar
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
