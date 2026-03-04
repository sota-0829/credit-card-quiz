import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "クレジットカード最適化診断";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
                    color: "white",
                    fontFamily: "sans-serif",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 80,
                        height: 80,
                        borderRadius: 20,
                        background: "rgba(59,130,246,0.2)",
                        border: "2px solid rgba(59,130,246,0.4)",
                        marginBottom: 32,
                        fontSize: 40,
                    }}
                >
                    💳
                </div>
                <div
                    style={{
                        fontSize: 56,
                        fontWeight: 900,
                        letterSpacing: "-0.02em",
                        textAlign: "center",
                        lineHeight: 1.2,
                        marginBottom: 16,
                    }}
                >
                    クレジットカード最適化診断
                </div>
                <div
                    style={{
                        fontSize: 24,
                        color: "#94a3b8",
                        textAlign: "center",
                        maxWidth: 700,
                        lineHeight: 1.5,
                    }}
                >
                    5つの質問であなたに最適な1枚を見つけよう
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginTop: 40,
                        padding: "12px 24px",
                        borderRadius: 999,
                        background: "rgba(59,130,246,0.15)",
                        border: "1px solid rgba(59,130,246,0.3)",
                        fontSize: 18,
                        color: "#60a5fa",
                        fontWeight: 700,
                    }}
                >
                    無料 · 30秒で完了
                </div>
            </div>
        ),
        { ...size }
    );
}
