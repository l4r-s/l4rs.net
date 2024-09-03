import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
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
          <div className="min-h-screen">
            {/* <ConfettiComponent /> */}
              {children}
            <Analytics />
            <SpeedInsights />
          </div>
      </body>
    </html>
  );
}
