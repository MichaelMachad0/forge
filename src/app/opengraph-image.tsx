import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#09090b",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(37,99,235,0.35), transparent 45%), radial-gradient(circle at 85% 75%, rgba(96,165,250,0.22), transparent 45%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 30,
            fontWeight: 600,
            color: "#60a5fa",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          {siteConfig.title}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 128,
            fontWeight: 700,
            color: "#fafafa",
            letterSpacing: -4,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            color: "#a1a1aa",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          {siteConfig.slogan}
        </div>
      </div>
    ),
    { ...size },
  );
}
