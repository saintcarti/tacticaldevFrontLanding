import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    const contactTo = process.env.CONTACT_TO;

    if (!gmailUser || !gmailPass || !contactTo) {
      const missing = [
        !gmailUser && "GMAIL_USER",
        !gmailPass && "GMAIL_APP_PASSWORD",
        !contactTo && "CONTACT_TO",
      ].filter(Boolean).join(", ");
      console.error("[contact] Missing env vars:", missing);
      return NextResponse.json(
        { ok: false, error: `Faltan variables: ${missing}` },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    await transporter.sendMail({
      from: `"TacticalDev" <${gmailUser}>`,
      to: contactTo,
      replyTo: sanitizedEmail,
      subject: `Nuevo contacto desde TacticalDev — ${sanitizedNombre}`,
      text: [
        `Nombre: ${sanitizedNombre}`,
        `Empresa: ${sanitizedEmpresa || "No especificada"}`,
        `Correo: ${sanitizedEmail}`,
        "",
        "Mensaje:",
        sanitizedDescription,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "No se pudo enviar el mensaje." },
      { status: 500 }
    );
  }
}
