import { ImageResponse } from "next/og";

export const runtime = "nodejs";

const BRAND = {
  name: "Expert Panneau Solaire",
  domain: "www.expertpanneausolaire.ch",
  color: "#f59e0b",
  baseline: "Photovoltaïque & Autoconsommation en Suisse romande",
  cta: "Étude d'ensoleillement & Devis Pronovo gratuit",
};

function pretty(raw: string): string {
  return raw
    .split("-")
    .map((w) => (w.length > 1 ? w.charAt(0).toUpperCase() + w.slice(1) : w.toUpperCase()))
    .join(" ");
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get("q") || "").slice(0, 56);
  const sub = (searchParams.get("sub") || BRAND.baseline).slice(0, 110);
  const badge = (searchParams.get("badge") || "Suisse Romande • Pronovo 2026").slice(0, 40);
  const title = q ? pretty(q) : BRAND.name;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: "#0b0f19",
          backgroundImage: "radial-gradient(circle at 90% 10%, rgba(245, 158, 11, 0.15) 0%, transparent 50%), linear-gradient(135deg, #0b0f19 0%, #1e1b18 100%)",
          padding: "56px 64px",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", width: 14, height: 56, backgroundColor: BRAND.color, borderRadius: 4 }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", color: "#f8fafc", fontSize: 32, fontWeight: 800 }}>{BRAND.name}</div>
              <div style={{ display: "flex", color: "#94a3b8", fontSize: 20, marginTop: 2 }}>{BRAND.domain}</div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              backgroundColor: "rgba(245, 158, 11, 0.15)",
              border: "1px solid rgba(245, 158, 11, 0.4)",
              borderRadius: 9999,
              padding: "8px 20px",
              color: "#fbbf24",
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            {badge}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 1040 }}>
          <div
            style={{
              display: "flex",
              color: "#ffffff",
              fontSize: title.length > 36 ? 56 : 68,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              color: "#cbd5e1",
              fontSize: 26,
              fontWeight: 500,
              lineHeight: 1.35,
            }}
          >
            {sub}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: 24,
            width: "100%",
          }}
        >
          <div style={{ display: "flex", color: "#94a3b8", fontSize: 20, fontWeight: 500 }}>
            {BRAND.cta}
          </div>
          <div style={{ display: "flex", color: "#fbbf24", fontSize: 20, fontWeight: 700 }}>
            Les Pros du Solaire • Normes OIBT / ESTI
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: { "cache-control": "public, max-age=86400, s-maxage=604800" },
    },
  );
}
