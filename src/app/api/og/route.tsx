import { ImageResponse } from 'next/og';
import { results } from '@/data/quiz';

export const runtime = 'edge';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const type = searchParams.get('result');

        // If no type or invalid type, return default image style
        const resultData = type && results[type as keyof typeof results]
            ? results[type as keyof typeof results]
            : null;

        const title = resultData ? `あなたの最適解は「${resultData.cardName}」` : 'クレジットカード最適化診断';
        const description = resultData ? resultData.title : '5つの質問であなたに最適な1枚を見つけよう';

        // Colors based on card type
        const colors = {
            REWARD: '#b45309', // amber-700
            STATUS: '#1e293b', // slate-800
            TRAVEL: '#2563eb', // blue-600
            CONVENIENCE: '#059669', // emerald-600
            AMAZON: '#e11d48', // rose-600
            PAYPAY: '#dc2626', // red-600
            GENERAL: '#475569', // slate-600
            GOLD: '#ca8a04', // yellow-600
            SPECIFIC: '#4f46e5', // indigo-600
            DEFAULT: '#3b82f6'  // blue-500
        };

        const activeColor = resultData ? colors[resultData.type] : colors.DEFAULT;

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#0f172a',
                        backgroundImage: 'radial-gradient(circle at 25% 25%, #1e293b 0%, #0f172a 100%)',
                        fontFamily: 'sans-serif',
                        padding: '60px',
                    }}
                >
                    {/* Background decoration */}
                    <div
                        style={{
                            position: 'absolute',
                            top: -150,
                            right: -150,
                            width: 500,
                            height: 500,
                            borderRadius: 250,
                            background: `${activeColor}20`,
                            filter: 'blur(80px)',
                        }}
                    />

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 100,
                            height: 100,
                            borderRadius: 24,
                            background: 'white',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                            marginBottom: 40,
                            fontSize: 50,
                        }}
                    >
                        💳
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}
                    >
                        <div
                            style={{
                                fontSize: 64,
                                fontWeight: 900,
                                color: 'white',
                                lineHeight: 1.1,
                                marginBottom: 24,
                                maxWidth: '900px',
                                wordBreak: 'keep-all',
                            }}
                        >
                            {title}
                        </div>

                        <div
                            style={{
                                fontSize: 32,
                                fontWeight: 700,
                                color: '#94a3b8',
                                background: 'rgba(255,255,255,0.05)',
                                padding: '12px 32px',
                                borderRadius: '100px',
                                border: '1px solid rgba(255,255,255,0.1)',
                            }}
                        >
                            {description}
                        </div>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            bottom: 60,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                            fontSize: 20,
                            color: '#64748b',
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                        }}
                    >
                        <div style={{ width: 8, height: 8, borderRadius: 4, background: activeColor }} />
                        CREDIT OPTIMIZER
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
