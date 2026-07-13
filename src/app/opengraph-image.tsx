import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

// The preview card shown when the site is shared on LinkedIn, Slack, etc.
// Next renders this to a PNG at build time.

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
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          backgroundImage:
            "radial-gradient(circle at 50% 45%, rgba(239,68,68,0.28) 0%, rgba(0,0,0,0) 55%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
          }}
        >
          {profile.name}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            padding: "12px 30px",
            borderRadius: 999,
            background: "#ef4444",
            color: "#ffffff",
            fontSize: 30,
            fontWeight: 600,
          }}
        >
          {profile.role}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 30,
            color: "#a1a1aa",
          }}
        >
          Incoming Computer Science @ University of Waterloo
        </div>
      </div>
    ),
    size,
  );
}
