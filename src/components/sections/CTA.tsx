"use client";

import { useState, type FormEvent } from "react";
import { Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function CTA() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      nombre: String(formData.get("nombre") ?? ""),
      empresa: String(formData.get("empresa") ?? ""),
      email: String(formData.get("email") ?? ""),
      description: String(formData.get("description") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? "No se pudo enviar el mensaje.");
      }

      form.reset();
      setStatus("success");
      setFeedback("Gracias, recibimos tu mensaje. Te contactaremos pronto.");
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error ? error.message : "No se pudo enviar el mensaje."
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-screen items-center overflow-hidden bg-background text-foreground transition-colors duration-300"
    >
      <Reveal className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 ease-out [&.is-visible]:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-background to-purple-600/10 dark:from-blue-900/20 dark:to-purple-900/20" />
        <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
      </Reveal>

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          {/* Left panel */}
          <Reveal className="opacity-0 translate-y-6 scale-[0.98] transition duration-700 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 [&.is-visible]:scale-100">
            <div className="rounded-3xl border border-border bg-secondary/50 px-7 py-10 shadow-2xl md:translate-x-[-0.25rem] backdrop-blur-sm">
              <div className="mb-4 h-1 w-16 overflow-hidden rounded-full">
                <span className="block h-full w-full bg-blue-500" />
              </div>
              <h2 className="text-3xl font-bold md:text-5xl tracking-tight">
                ¿Listo para escalar tu <br />
                <span className="text-blue-500">plataforma digital?</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Arquitectura y desarrollo de software para sistemas escalables, seguros y
                mantenibles. Implementación enfocada en el rendimiento real.
              </p>

              {/* Contacto alternativo */}
              <div className="mt-8 flex flex-col gap-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  O contáctanos directamente
                </p>
                <a
                  href="tel:+56984656126"
                  className="inline-flex items-center gap-3 text-foreground hover:text-blue-400 transition-colors min-h-[44px]"
                  aria-label="Llamar a TacticalDev"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-blue-500/10">
                    <Phone className="h-4 w-4 text-blue-400" />
                  </span>
                  <span className="text-base font-medium">+56 9 8465 6126</span>
                </a>
                <a
                  href="https://wa.me/+56984656126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[#25D366] hover:text-[#1fb85a] transition-colors min-h-[44px]"
                  aria-label="Contactar por WhatsApp"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-[#25D366]/10">
                    <WhatsAppIcon />
                  </span>
                  <span className="text-base font-medium">WhatsApp</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right panel — form */}
          <Reveal className="opacity-0 translate-y-6 transition duration-700 ease-out delay-100 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
            <form
              className="space-y-5 rounded-3xl border border-border bg-secondary/30 p-8 backdrop-blur-md"
              onSubmit={handleSubmit}
            >
              {/* Nombre + Empresa */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-foreground" htmlFor="cta-nombre">
                    Nombre
                  </label>
                  <input
                    id="cta-nombre"
                    name="nombre"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Tu nombre"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 min-h-[44px]"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground" htmlFor="cta-empresa">
                    Empresa
                  </label>
                  <input
                    id="cta-empresa"
                    name="empresa"
                    type="text"
                    autoComplete="organization"
                    placeholder="Tu empresa (opcional)"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 min-h-[44px]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-semibold text-foreground" htmlFor="cta-email">
                  Correo Electrónico
                </label>
                <input
                  id="cta-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="tu@email.com"
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 min-h-[44px]"
                />
              </div>

              {/* Descripción */}
              <div>
                <label className="text-sm font-semibold text-foreground" htmlFor="cta-description">
                  Descripción
                </label>
                <textarea
                  id="cta-description"
                  name="description"
                  required
                  rows={4}
                  placeholder="Cuéntanos sobre tu proyecto y objetivos."
                  className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 shadow-lg shadow-blue-500/20 min-h-[44px]"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
              </button>

              {/* Badge de confianza */}
              <p className="text-center text-xs text-muted-foreground">
                Respondemos en menos de 24 horas.
              </p>

              {feedback ? (
                <p
                  className={`text-sm ${
                    status === "success" ? "text-emerald-500" : "text-rose-500"
                  }`}
                >
                  {feedback}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
