import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "IRON BODY GYM — Premium Fitness Club";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #0a0a12 0%, #1a1035 50%, #0a1628 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 22,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#00C2FF",
            marginBottom: 24,
          }}
        >
          Premium Fitness · Brooklyn
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            marginBottom: 28,
          }}
        >
          IRON BODY GYM
        </div>
        <div style={{ fontSize: 32, color: "rgba(255,255,255,0.75)", maxWidth: 720 }}>
          Push your limits. Elite training. World-class coaches.
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 48,
          }}
        >
          {["HIIT", "Strength", "Boxing", "EN · RU · TR"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "10px 20px",
                borderRadius: 999,
                border: "1px solid rgba(124,58,255,0.5)",
                background: "rgba(124,58,255,0.15)",
                fontSize: 18,
                color: "#AAFF00",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
