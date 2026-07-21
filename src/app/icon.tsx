import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
          borderRadius: 14,
        }}
      >
        <div
          style={{
            fontSize: 34,
            fontWeight: 700,
            color: "#fafafa",
            fontFamily: "system-ui, sans-serif",
            letterSpacing: -1,
          }}
        >
          F
        </div>
      </div>
    ),
    { ...size },
  );
}
