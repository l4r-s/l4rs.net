import { ImageResponse } from 'next/og';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || '👋 Hello, World!';
    const subTitle = searchParams.get('subtitle') || '👋 Hello, World!';
    return new ImageResponse(
        (
            <div
                style={{
                    color: 'black',
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    padding: '50px 200px',
                    textAlign: 'left',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                }}
            >
                <h1 style={{ fontSize: 30, textAlign: 'left' }}>{title}</h1>
                <h2 style={{ fontSize: 20, textAlign: 'left' }}>{subTitle}</h2>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        },
    );
}