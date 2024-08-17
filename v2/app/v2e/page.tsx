import { redirect } from 'next/navigation';

const title = "Unlock Profitable Opportunities: 5,000+ Chrome V2 Extensions Ready for Rebuild!";
const description = "As of June 3, 2024, Chrome officially deprecated Extension Manifest V2, meaning thousands of extensions will soon stop working.";

export const metadata = {
  title,
  description,
  author: "Lars",
  date: "2024-08-17",
  url: "https://hilars.dev/v2e",
  image: "/blog_v2_extensions.webp",
  tags: ["Chrome Extensions", "Manifest V3", "Web Development", "Google Chrome"],
  openGraph: {
    type: "article",
    title,
    description,
    url: "https://hilars.dev/v2e",
    images: [
      {
        url: "/blog_v2_extensions.webp",
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
        url: "/blog_v2_extensions.webp",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
};

export default function Page() {
  redirect('https://builditn0w.gumroad.com/l/chrome-manifest-v2-phaseout/BUILD');
}
