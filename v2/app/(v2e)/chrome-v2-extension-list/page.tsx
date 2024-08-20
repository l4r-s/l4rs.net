import CategorySelector from './_components/counter';
import './style.css';
import Image from "next/image";
import { headers } from 'next/headers';

const title = "5,000+ Opportunities Waiting for You!";
const description = "Capitalize on Chrome's Manifest V2 Deprecation Before the Market Shifts!";
export const metadata = {
  title,
  description,
  author: "Lars",
  date: "2024-08-21",
  url: "https://hilars.dev/chrome-v2-extension-list",
  canonicalUrl: "https://hilars.dev/chrome-v2-extension-list", // Added canonical URL
  image: "/og_v2e_v2.png",
  tags: ["Chrome Extensions", "Manifest V3", "Web Development", "Google Chrome"],
  openGraph: {
    type: "article",
    title,
    description,
    url: "https://hilars.dev/chrome-v2-extension-list",
    images: [
      {
        url: "/og_v2e_v2.png",
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
        url: "/og_v2e_v2.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
};

export default function V2ExtensionList({ searchParams }: { searchParams: { [key: string]: string } }) {
  // Get referrer from headers
  const reqHeaders = headers();
  const referrer = reqHeaders.get('referer') || 'https://hilars.dev/chrome-v2-extension-list';

  // Get referrer from search params
  let customReferrer = searchParams.r || referrer;

  // Ensure the referrer starts with http:// or https://
  if (!customReferrer.startsWith('http://') && !customReferrer.startsWith('https://')) {
    customReferrer = `https://${customReferrer}`;
  }

  // Example usage of customReferrer
  const url = `https://builditn0w.gumroad.com/l/chrome-manifest-v2-phaseout/BUILD?referrer=${encodeURIComponent(customReferrer)}&wanted=true`;


  return (
    <div>
      <a href='https://xshot.me' target='_blank'>
        <div className="bg-[#ffce42] p-2 mb-6">
          <p className="text-gray-800 text-sm text-center">
            Coming Soon: <span className='font-semibold'>Transform Your X Post into Stunning Images Instantly</span> 🚀
          </p>
        </div>
      </a>
      <div className="min-h-screen flex items-center justify-center">
        <div className="m-4 max-w-8xl w-full">
          <Image
            src="/chrome_extension_list.png"
            alt="Turn Obsolete Extensions into Profitable Goldmines—5,000+ Opportunities Waiting for You!"
            width={800}
            height={1440}
            className="mx-auto"
            priority
          />
          <div className="flex flex-col lg:flex-row justify-center">
            <div className="lg:w-3/6 w-full mt-2 px-8 mx-2 bg-white shadow-lg rounded-lg">
              <div className="flex mb-16">
                <h1 className="text-3xl text-gray-800">
                  Turn Obsolete Extensions into Profitable Goldmines — <span className="font-bold">5,000+</span> Opportunities Waiting for You!
                </h1>
                <div>
                  <div className="flex items-center space-x-2 ml-4">
                    <span className="bg-gray-300 line-through text-sm font-semibold px-2 py-1 rounded-md text-gray-500">
                      $29.99
                    </span>
                    <span className="bg-[#ffce42] text-gray-800 text-2xl font-bold px-3 py-1 rounded-md shadow-lg">
                      $14.99
                    </span>
                  </div>
                  <div className="mt-4 mx-auto justify-end">
                    <a href={url} target="_blank">
                      <button className="w-full bg-[#4988f5] text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 block lg:hidden">
                        Buy Now
                      </button>
                    </a>
                    <div className="flex my-4">
                      <a href="https://www.producthunt.com/posts/v2-chrome-extension-list?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-v2-chrome-extension-list" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=481039&theme=light" alt="V2 Chrome Extension List - Discover outdated Chrome extensions that need to be rebuilt | Product Hunt" style={{ width: '250px', height: '54px' }} /></a>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Capitalize on Chrome's Manifest V2 Deprecation Before the Market Shifts!
              </h2>
              <p className="text-lg text-gray-600">
                As of June 3, 2024, Chrome officially deprecated Extension Manifest V2
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Thousands of extensions will soon stop working. Unlock a golden opportunity!
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Access a curated list of over <span className="font-bold">5,000 extensions</span> still relying on the outdated V2 Manifest.
                With ratings and install counts included, you can easily identify high-potential extensions
                ripe for rebuilding, giving you a head start to create profitable solutions.
              </p>
              <p className="text-lg text-gray-600 font-bold">
                Don't miss out—capitalize on this transition and find your next big idea!
              </p>
              <p className="text-lg text-gray-600 mb-6 font-bold">
                Rebuild an extension and attract users with the latest V3 standards.
              </p>

              <div className="bg-[#ffce42] p-6 rounded-md mb-6">
                <p className="text-gray-800 text-lg font-semibold">
                  Chrome extensions using Manifest V2 will soon become obsolete, creating a huge gap in the market.
                </p>
                <p className="text-gray-800 text-lg font-semibold">
                  Be the first to capitalize on this transition and find your next big idea!
                </p>
              </div>

              <Image
                src="/ph-2.1.png"
                alt="Turn Obsolete Extensions into Profitable Goldmines—5,000+ Opportunities Waiting for You!"
                width={800}
                height={1440}
                className="mx-auto"
                priority
              />

              <div className="my-4">
                <h2 className="text-xl text-center text-gray-800 mb-4">
                  Check out the Data below and see what you get! 👇
                </h2>
                <CategorySelector url={url} />
              </div>

              <a href={url} target="_blank">
                <button className="w-full bg-[#21a15f] text-white py-2 rounded-md hover:bg-[#1b834a] transition duration-300 my-12 font-bold text-xl p-8 hidden lg:block">
                  <span className="font-bold block">Don't miss out</span>
                  <span className="font-normal block">Unlock the full list now and start building profitable extensions today! 🚀</span>
                </button>
              </a>

            </div>

            {/* Right Column */}
            <div className="w-full lg:w-1/3 mt-4 lg:mt-0 bg-white lg:max-w-md p-6 shadow-md rounded-lg">
              {/* Button */}
              <a href={url} target="_blank">
                <button className="w-full bg-[#4988f5] text-white py-3 rounded-md text-center text-lg font-semibold mb-6 hover:bg-blue-700 hidden lg:block">
                  I want it!
                </button>
              </a>
              <a href={url} target="_blank">
                <button className="w-full bg-[#21a15f] text-white py-2 rounded-md hover:bg-[#1b834a] transition duration-300 mb-12 font-bold text-xl p-8 lg:hidden">
                  <span className="font-bold block">Don't miss out</span>
                  <span className="font-normal block">Unlock the full list now and start building profitable extensions today! 🚀</span>
                </button>
              </a>

              {/* Description */}
              <div className="bg-gray-100 p-4 rounded-md mb-6">
                <p className="text-gray-700">
                  A curated list of 5,000+ Chrome extensions still using the deprecated V2 Manifest. Includes ratings, install counts, and last updated dates to help you easily identify high-potential extensions for rebuilding and monetizing.
                </p>
              </div>

              {/* Info Sections */}
              <div className="border-t border-gray-300">
                <div className="py-4 border-b border-gray-300">
                  <p className="font-bold text-gray-800">Rating</p>
                  <p className="text-gray-600">Spot top-rated extensions for rebuilding</p>
                </div>

                <div className="py-4 border-b border-gray-300">
                  <p className="font-bold text-gray-800">Installs</p>
                  <p className="text-gray-600">Find High-traffic extensions with many users</p>
                </div>

                <div className="py-4 border-b border-gray-300">
                  <p className="font-bold text-gray-800">Last updated</p>
                  <p className="text-gray-600">Spot unmaintained extensions easily</p>
                </div>

                <div className="py-4 border-b border-gray-300">
                  <p className="font-bold text-gray-800">CSV File</p>
                  <p className="text-gray-600">Download the full list in CSV format</p>
                </div>

                <div className="py-4">
                  <p className="font-bold text-gray-800">Size</p>
                  <p className="text-gray-600">881 KB</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800 mr-2">Ratings</h2>
                <span className="text-sm text-gray-600 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#ffce42]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.078 3.316a1 1 0 00.95.69h3.482c.969 0 1.371 1.24.588 1.81l-2.818 2.047a1 1 0 00-.364 1.118l1.078 3.316c.3.921-.755 1.688-1.54 1.118L10 13.187l-2.818 2.047c-.784.57-1.839-.197-1.54-1.118l1.078-3.316a1 1 0 00-.364-1.118L3.538 8.743c-.783-.57-.38-1.81.588-1.81h3.482a1 1 0 00.95-.69l1.078-3.316z" />
                  </svg>
                  <span className="ml-1 text-gray-800">4.8</span>
                  <span className="ml-1 text-gray-600">(4 ratings)</span>
                </span>
              </div>

              <div className="space-y-2">
                {/* 5 Stars */}
                <div className="flex items-center">
                  <span className="text-sm w-16 text-gray-800">5 stars</span>
                  <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden border border-gray-300 mx-2">
                    <div
                      className="absolute top-0 left-0 h-full bg-[#4988f5]"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">75%</span>
                </div>

                {/* 4 Stars */}
                <div className="flex items-center">
                  <span className="text-sm w-16 text-gray-800">4 stars</span>
                  <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden border border-gray-300 mx-2">
                    <div
                      className="absolute top-0 left-0 h-full bg-[#4988f5]"
                      style={{ width: '25%' }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">25%</span>
                </div>

                {/* 3 Stars */}
                <div className="flex items-center">
                  <span className="text-sm w-16 text-gray-800">3 stars</span>
                  <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden border border-gray-300 mx-2">
                    <div
                      className="absolute top-0 left-0 h-full bg-[#4988f5]"
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">0%</span>
                </div>

                {/* 2 Stars */}
                <div className="flex items-center">
                  <span className="text-sm w-16 text-gray-800">2 stars</span>
                  <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden border border-gray-300 mx-2">
                    <div
                      className="absolute top-0 left-0 h-full bg-[#4988f5]"
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">0%</span>
                </div>

                {/* 1 Star */}
                <div className="flex items-center">
                  <span className="text-sm w-16 text-gray-800">1 star</span>
                  <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden border border-gray-300 mx-2">
                    <div
                      className="absolute top-0 left-0 h-full bg-[#4988f5]"
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">0%</span>
                </div>
              </div>

              <div className="justify-center mt-16">
                <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">What people say</h2>
                <div className='mx-auto my-4'>
                  <a href="https://x.com/umairs02/status/1824907298772242575" target="_blank">
                    <Image
                      src="/testimonial_1.png"
                      alt="Tweet @umairs02: That's an amazing offer for an amazing product!! Just checked it out."
                      width={350}
                      height={100}
                      className="mx-auto"
                      priority
                    />
                  </a>
                </div>

                <div className='mx-auto my-4'>
                  <a href="https://x.com/ThePeterMick/status/1824865229282394529" target="_blank">
                    <Image
                      src="/testimonial_2.png"
                      alt="Tweet @ThePeterMick: Super helpful 👌"
                      width={350}
                      height={100}
                      className="mx-auto"
                      priority
                    />
                  </a>
                </div>

                <div className='mx-auto my-4'>
                  <a href="https://x.com/shipixen/status/1825614236070085052" target="_blank">
                    <Image
                      src="/testimonial_3.png"
                      alt="Tweet @shipixen: Legendary stuff 🔥"
                      width={350}
                      height={100}
                      className="mx-auto"
                      priority
                    />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
