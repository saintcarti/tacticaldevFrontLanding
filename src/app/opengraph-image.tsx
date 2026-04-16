import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "TacticalDev — Software Empresarial Chile";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0b0d12",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(47,107,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(47,107,255,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Top-left glow */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "-80px",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(47,107,255,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Bottom-right glow */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-60px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%)",
          }}
        />

        {/* Top row: badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", zIndex: 10 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(47,107,255,0.15)",
              border: "1px solid rgba(47,107,255,0.4)",
              borderRadius: "999px",
              padding: "6px 16px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#2f6bff",
              }}
            />
            <span style={{ color: "#6fa8ff", fontSize: "14px", fontWeight: 600, letterSpacing: "0.12em" }}>
              TACTICAL DEV
            </span>
          </div>
          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "14px" }}>
            Santiago · Chile
          </span>
        </div>

        {/* Center content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", zIndex: 10 }}>
          {/* Accent line */}
          <div
            style={{
              width: "56px",
              height: "4px",
              borderRadius: "999px",
              background: "linear-gradient(90deg, #2f6bff, #6fa8ff)",
            }}
          />

          {/* Main headline */}
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Software Empresarial
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #2f6bff, #6fa8ff)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              de Misión Crítica.
            </span>
          </div>

          {/* Subtext */}
          <div
            style={{
              fontSize: "22px",
              color: "rgba(255,255,255,0.55)",
              fontWeight: 400,
              maxWidth: "720px",
              lineHeight: 1.5,
            }}
          >
            Arquitectura, IA y desarrollo a medida para sistemas que no pueden fallar.
          </div>
        </div>

        {/* Bottom row: services pills */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", zIndex: 10 }}>
          {["Software a Medida", "Inteligencia Artificial", "Cloud", "Desarrollo Móvil"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "999px",
                  padding: "8px 18px",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                {tag}
              </div>
            )
          )}
          <div style={{ flex: 1 }} />
          <span
            style={{
              color: "rgba(255,255,255,0.3)",
              fontSize: "15px",
              fontWeight: 500,
            }}
          >
            tacticaldev.cl
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
