import { ImageResponse } from "next/og";

export const alt =
  "Goodstead HR — an embedded people team for growing companies";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#202a35",
          color: "#f6f8f4",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 9999,
              backgroundColor: "#dae77a",
            }}
          />
          <div style={{ fontSize: 44, fontWeight: 600 }}>Goodstead HR</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              maxWidth: 980,
            }}
          >
            Your embedded people team, without the full-time hires.
          </div>
          <div style={{ fontSize: 30, color: "#d6dcd9" }}>
            Fractional HR leadership for growing companies
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
