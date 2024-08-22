import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { CSPostHogProvider } from '../providers'
import "../globals.css";

export default function V2eLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CSPostHogProvider>
          <div className="min-h-screen">
            {children}
            <Analytics />
            <SpeedInsights />
          </div>
        </CSPostHogProvider>
      </body>
    </html>
  );
}
