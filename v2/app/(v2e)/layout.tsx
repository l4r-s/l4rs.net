import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { CSPostHogProvider } from '../providers'
import "../globals.css";
import UmamiScript from "../_components/umami";

export default function V2eLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UmamiScript websiteId="78c5044e-c628-4213-952e-9ad2fa9452e9" />
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
