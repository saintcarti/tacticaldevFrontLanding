import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { email, description } = (await request.json()) as {
      email?: string;
      description?: string;
    };

    const sanitizedEmail = email?.trim();
    const sanitizedDescription = description?.trim();

    if (!sanitizedEmail || !sanitizedDescription) {
      return NextResponse.json(
        { ok: false, error: "Email y descripcion son requeridos." },
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

    const subject = "Nuevo contacto desde TacticalDev";
    const text = `Correo: ${sanitizedEmail}\n\nMensaje:\n${sanitizedDescription}`;

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
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Solicitud invalida." },
      { status: 400 }
    );
  }
}
