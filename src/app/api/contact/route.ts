import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { nombre, empresa, email, description } = (await request.json()) as {
      nombre?: string;
      empresa?: string;
      email?: string;
      description?: string;
    };

    const sanitizedNombre = nombre?.trim();
    const sanitizedEmpresa = empresa?.trim();
    const sanitizedEmail = email?.trim();
    const sanitizedDescription = description?.trim();

    if (!sanitizedNombre || !sanitizedEmail || !sanitizedDescription) {
      return NextResponse.json(
        { ok: false, error: "Nombre, email y descripción son requeridos." },
        { status: 400 }
      );
    }

    const from = process.env.CONTACT_FROM;
    const to = process.env.CONTACT_TO;

    if (!process.env.RESEND_API_KEY || !from || !to) {
      return NextResponse.json(
        { ok: false, error: "Faltan variables de entorno." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const subject = `Nuevo contacto desde TacticalDev — ${sanitizedNombre}`;
    const text = [
      `Nombre: ${sanitizedNombre}`,
      `Empresa: ${sanitizedEmpresa || "No especificada"}`,
      `Correo: ${sanitizedEmail}`,
      "",
      "Mensaje:",
      sanitizedDescription,
    ].join("\n");

    const { error } = await resend.emails.send({
      from,
      to: [to],
      subject,
      replyTo: sanitizedEmail,
      text,
    });

    if (error) {
      return NextResponse.json(
        { ok: false, error: "No se pudo enviar el correo." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Solicitud inválida." },
      { status: 400 }
    );
  }
}
