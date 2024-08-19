import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

const title = "5,000+ Opportunities Waiting for You!";
const description = "As of June 3, 2024, Chrome officially deprecated Extension Manifest V2, meaning thousands of extensions will soon stop working.";

export const metadata = {
  title,
  description,
  author: "Lars",
  date: "2024-08-17",
  url: "https://hilars.dev/v2e",
  image: "/chrome_v2_extension_og_v2.png",
  tags: ["Chrome Extensions", "Manifest V3", "Web Development", "Google Chrome"],
  openGraph: {
    type: "article",
    title,
    description,
    url: "https://hilars.dev/v2e",
    images: [
      {
        url: "/chrome_v2_extension_og_v2.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      {
        url: "/chrome_v2_extension_og_v2.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
};

export default function Page() {
  const reqHeaders = headers();
  const referrer = reqHeaders.get('referer') || 'https://hilars.dev/v2e';
  const url = `https://builditn0w.gumroad.com/l/chrome-manifest-v2-phaseout/BUILD?referrer=${encodeURIComponent(referrer)}`;
  redirect(url);
}
