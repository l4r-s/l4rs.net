import { ImageResponse } from 'next/og';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || '👋 Hello, World!';
    const subtitle = searchParams.get('subtitle') || 'hilars.dev';
    
    return new ImageResponse(
        (
            <div
                style={{
                    color: 'black',
                    background: 'linear-gradient(to bottom, #f0f0f0, #ffffff)',
                    width: '100%',
                    height: '100%',
                    padding: '50px 200px',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <h1 style={{ fontSize: 40, margin: 0 }}>{title}</h1>
                <h2 style={{ fontSize: 20, margin: 0, color: '#555', marginTop: 10 }}>{subtitle}</h2>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        },
    );
}