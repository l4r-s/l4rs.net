import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { CSPostHogProvider } from '../providers'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/Sidebar";
import SidebarMobile from "@/components/SidebarMobile";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lars' Blog",
  description: "A passionate Software and Systems Engineer specializing in Python, JavaScript, Linux and DevOps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script defer src="https://umami.hilars.dev/script.js" data-website-id="78c5044e-c628-4213-952e-9ad2fa9452e9" />
      <body className={inter.className}>
        <CSPostHogProvider>
          <div className="font-sans min-h-screen flex flex-col">
            <div className="fixed md:hidden top-0 left-0 w-full z-50">
              <SidebarMobile />
            </div>
            <div className="flex flex-grow">
              <div className="hidden md:flex lg:flex md:w-60 lg:w-96 h-screen fixed top-0 overflow-y-auto">
                <Sidebar showMenu={true} />
              </div>
              <div className="flex-grow md:ml-60 lg:ml-96 overflow-y-auto flex justify-center items-start">
                <div className="block md:card bg-base-100 lg:m-10 md:m-5 md:shadow-xl w-full max-w-screen-lg">
                  {children}
                  <Analytics />
                  <SpeedInsights />
                </div>
              </div>
            </div>
          </div>
        </CSPostHogProvider>
      </body>
    </html>
  );
}
