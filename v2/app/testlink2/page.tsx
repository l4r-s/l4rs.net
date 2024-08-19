import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

const title = "TEST LINK";
const description = "TEST LINK";

// export const metadata = {
//   title,
//   description,
//   author: "Lars",
//   date: "2024-08-17",
//   url: "https://hilars.dev/v2e",
//   image: "/og.png",
//   tags: ["Chrome Extensions", "Manifest V3", "Web Development", "Google Chrome"],
//   openGraph: {
//     type: "article",
//     title,
//     description,
//     url: "https://hilars.dev/v2e",
//     images: [
//       {
//         url: "/og.png",
//         width: 1200,
//         height: 630,
//         alt: title,
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title,
//     description,
//     images: [
//       {
//         url: "/og.png",
//         width: 1200,
//         height: 630,
//         alt: title,
//       },
//     ],
//   },
// };

export default function Page({ searchParams }: { searchParams: { [key: string]: string } }) {
  const reqHeaders = headers();

  // get referrer from headers this is the url of the page that the user was on before they were redirected to this page
  const referrer = reqHeaders.get('referer') || 'https://hilars.dev/v2e';

  // get referrer from search params (?r=myreferrer), this overrides the referrer from headers if it exists
  let customReferrer = searchParams.r || referrer;

  // Gumroad referrer must start with http:// or https:// but can be anything
  if (!customReferrer.startsWith('http://') && !customReferrer.startsWith('https://')) {
    customReferrer = `https://${customReferrer}`;
  }

  const url = `https://builditn0w.gumroad.com/l/chrome-manifest-v2-phaseout/BUILD?referrer=${encodeURIComponent(customReferrer)}`;
  redirect(url);
}

