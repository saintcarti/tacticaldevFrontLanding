"use client";

import { useState, type FormEvent } from "react";
import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
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
      setFeedback("Gracias, recibimos tu mensaje.");
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
          <Reveal className="opacity-0 translate-y-6 scale-[0.98] transition duration-700 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 [&.is-visible]:scale-100">
            <div className="rounded-3xl border border-border bg-secondary/50 px-7 py-10 shadow-2xl md:translate-x-[-0.25rem] backdrop-blur-sm">
              <div className="mb-4 h-1 w-16 overflow-hidden rounded-full">
                <span className="block h-full w-full bg-blue-500" />
              </div>
              <h2 className="text-3xl font-bold md:text-5xl tracking-tight">
                ¿Listo para escalar tu <br /><span className="text-blue-500">plataforma digital?</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Arquitectura y desarrollo de software para sistemas escalables, seguros y
                mantenibles. Implementación enfocada en el rendimiento real.
              </p>
              
            </div>
          </Reveal>

          <Reveal className="opacity-0 translate-y-6 transition duration-700 ease-out delay-100 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
            <form
              className="space-y-5 rounded-3xl border border-border bg-secondary/30 p-8 backdrop-blur-md"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="text-sm font-semibold text-foreground" htmlFor="cta-email">
                  Correo Electrónico
                </label>
                <input
                  id="cta-email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>
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
                  className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 shadow-lg shadow-blue-500/20"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
              </button>
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
