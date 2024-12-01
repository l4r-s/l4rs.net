import React from "react";
import Image from "next/image";
import BlogHeader from "@/components/BlogHeader";
import ChromeExtensionListImg from "@/public/chrome_extension_list.png";

export const metadata = {
  metadataBase: new URL('https://hilars.dev'),
  title: "The End of Manifest V2: What You Need to Know About the Chrome Extension Transition",
  description: "Learn about the transition from Manifest V2 to Manifest V3 for Chrome extensions, the reasons behind it, and what it means for developers.",
  author: "Lars",
  date: "2024-08-17",
  url: "https://hilars.dev/blog/the-end-of-manifest-v2-what-you-need-to-know-about-the-chrome-extension-transition",
  image: "/api/og?title=The+End+of+Manifest+V2&subtitle=What+You+Need+to+Know+About+the+Chrome+Extension+Transition",
  tags: ["Chrome Extensions", "Manifest V3", "Web Development", "Google Chrome"],
  openGraph: {
    type: "article",
    title: "The End of Manifest V2: What You Need to Know About the Chrome Extension Transition",
    description: "Learn about the transition from Manifest V2 to Manifest V3 for Chrome extensions, the reasons behind it, and what it means for developers.",
    url: "https://hilars.dev/blog/the-end-of-manifest-v2-what-you-need-to-know-about-the-chrome-extension-transition",
    images: [
      {
        url: "/api/og?title=The+End+of+Manifest+V2&subtitle=What+You+Need+to+Know+About+the+Chrome+Extension+Transition",
        width: 1200,
        height: 630,
        alt: "The End of Manifest V2: What You Need to Know About the Chrome Extension Transition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The End of Manifest V2: What You Need to Know About the Chrome Extension Transition",
    description: "Learn about the transition from Manifest V2 to Manifest V3 for Chrome extensions, the reasons behind it, and what it means for developers.",
    images: [
      {
        url: "/api/og?title=The+End+of+Manifest+V2&subtitle=What+You+Need+to+Know+About+the+Chrome+Extension+Transition",
        width: 1200,
        height: 630,
        alt: "The End of Manifest V2: What You Need to Know About the Chrome Extension Transition",
      },
    ],
  },
};

const BlogPost: React.FC = () => {
  return (
    <div className="min-h-screen container my-20 lg:my-28">
      <BlogHeader
        title="The End of Manifest V2"
        subtitle="What You Need to Know About the Chrome Extension Transition"
        date="Aug 17 2024"
        crossPostUrl="https://medium.com/@buildItN0w/the-end-of-manifest-v2-what-you-need-to-know-about-the-chrome-extension-transition-c2f1b8a75b05"
        crossPostText="Medium"
        image={ChromeExtensionListImg}
      />

      <div className="divider divide-gray-400 mb-6 mt-0"></div>

      <div className="prose lg:prose-xl text-sm md:text-base text-left mx-auto">
        <p>
          The transition from Manifest V2 to Manifest V3 for Chrome extensions has created a huge buzz in the developer community. Google is phasing out Manifest V2 in favor of the more secure and efficient Manifest V3, which promises improvements in security, performance, and privacy. If you’re a developer or an entrepreneur working with Chrome extensions, this shift represents both a challenge and a major opportunity.
        </p>

        <p>
          Let’s dive into the details and explore what this transition means for you, especially with old Manifest V2 Chrome extensions being disabled.
        </p>

        <h2 className="text-xl">What Is Manifest V2 and Why Is It Being Deprecated?</h2>

        <p>
          Manifest V2 was the dominant specification for Chrome extensions for years, allowing developers to extend the capabilities of the Chrome browser in various ways. However, as the web has evolved, so have the needs for enhanced security and performance.
        </p>
        <p>
          This led to the introduction of Manifest V3, which addresses these concerns by implementing several improvements:
        </p>
        <ul>
          <li><span className="font-bold">More stringent permissions:</span> Extensions have limited access to user data unless explicitly granted permission.</li>
          <li><span className="font-bold">Enhanced privacy:</span> Content scripts and background pages are replaced with service workers, limiting persistent scripts that can run without user interaction.</li>
          <li><span className="font-bold">Improved performance:</span> Manifest V3 reduces the resource footprint of extensions, enhancing the overall browser performance.</li>
        </ul>
        <p>
          Google has already announced that <span className="font-bold">old Manifest V2 Chrome extensions will be disabled</span> starting in <span className="font-bold">June 2024</span> for pre-stable versions of Chrome, with full deprecation expected by <span className="font-bold">June 2025</span>.
          This means that if you’re still relying on a Manifest V2 extension, it’s time to migrate or risk having your extension become obsolete.
        </p>

        <h2 className="text-xl">The Impact of Old Manifest V2 Chrome Extensions Being Disabled</h2>
        <p>
          As of now, there are <span className="font-bold">5,000+ extensions</span> that still use Manifest V2 on the Chrome Web Store. The deprecation of these old V2 extensions will leave significant gaps in the market, especially in key categories like productivity, security, and utilities.
        </p>

        <p>
          For developers, this is a <span className="font-bold">huge opportunity</span> to step in and create new extensions or upgrade existing ones to Manifest V3, taking over the market spaces left by these deprecated V2 extensions.
        </p>

        <p>
          Many users may not even realize their favorite extensions are still on Manifest V2, and when these old extensions get disabled, they’ll be looking for alternatives. <span className="font-bold">Now is the time to act.</span>
        </p>

        <h2 className="text-xl">Key Dates for Manifest V2 Deprecation</h2>
        <ul>
          <li><span className="font-bold">June 2024:</span> Chrome will begin disabling Manifest V2 extensions on pre-stable channels (Beta, Dev, Canary).</li>
          <li><span className="font-bold">June 2025:</span> Full support for Manifest V2 will end, and all V2 extensions will be disabled on stable versions of Chrome.</li>
        </ul>

        {/* <h2 className="text-xl">Search Trends and User Interest</h2>
        <p>
          Search interest around the topic of Manifest V2 is growing as the deadline approaches. Users are actively searching for terms like <span className="font-bold">“old Manifest V2 Chrome extensions will be disabled”</span>, <span className="font-bold">“Manifest V2 Chrome extensions”</span>, and <span className="font-bold">“V2 Chrome extensions will be disabled”</span>.
          This search trend reflects increasing user awareness and concern over the transition.
        </p>
        <p>
          Keywords such as <span className="font-bold">“old V2 Chrome extensions will be disabled”</span> and <span className="font-bold">“Chrome manifest V2”</span> have also seen substantial growth, highlighting a growing awareness and opportunity for developers to step in with updated solutions. According to keyword data, search volumes like 100+ GSV (Global Search Volume) suggest that many users are actively looking for solutions and alternatives, making it a prime time for developers to capitalize on this interest.
        </p> */}

        <h2 className="text-xl">What Can Developers Do?</h2>
        <p>
          If you haven’t already, now is the time to migrate your extension from Manifest V2 to V3. Here’s how to get started:
        </p>
        <ul>
          <li><span className="font-bold">Review the Migration Guide:</span> Google provides a <a href="https://developer.chrome.com/docs/extensions/develop/migrate" className="link link-hover link-primary" target="_blank">detailed migration guide</a> to help developers convert their extensions to Manifest V3.</li>
          <li><span className="font-bold">Test Early:</span> Before the June 2024 deadline, ensure that your extension is fully functional in the latest versions of Chrome and that it adheres to the new Manifest V3 specifications.</li>
          <li><span className="font-bold">Innovate:</span> Consider leveraging this opportunity to build new extensions that solve existing problems or improve upon outdated V2 solutions. Many V2 extensions with large user bases are ripe for replacement or acquisition.</li>
        </ul>

        <h2 className="text-xl">Promote Your New Manifest V3 Extensions</h2>
        <p>
          Once you’ve transitioned to Manifest V3, make sure you promote your extension as a <span className="font-bold">secure, future-proof</span> alternative to V2 extensions.
          Highlight the security and performance improvements in your marketing materials to reassure users that your extension is aligned with the latest standards.
        </p>

        <p>
          Additionally, stay updated with changes in the Chrome Web Store to ensure that your extension remains compliant and featured in search results. Utilizing keywords such as <span className="font-bold">“Manifest V3 Chrome extension”</span> or <span className="font-bold">“Chrome extensions V2 to V3”</span> can help increase visibility.
        </p>

        <h2 className="text-xl">Ready to Take Advantage of This Opportunity?</h2>
        <div className="flex justify-center my-8">
          <Image
            src="/blog_v2_extensions.webp"
            alt="Chrome V2 Extension Monetization"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>



        <p>Now that you know the ins and outs of Manifest V2 deprecation, why not take it a step further?</p>
        <p>
          <span className="font-bold">Unlock a massive opportunity</span> with my curated list of <span className="font-bold">5,000+ Chrome extensions</span> that still use Manifest V2.
          These extensions are about to be phased out, leaving room for new developers to take their place.
        </p>
        <p className="block">
          💡 <span className="font-bold">Get the list now!</span><br />
          👉 <a href="/chrome-v2-extension-list" className="link link-hover link-primary" target="_blank">https://hilars.dev/chrome-v2-extension-list</a>
        </p>

        <p>
          Don’t miss out on this chance to dominate the Chrome Web Store with Manifest V3 extensions. Start building or updating your extensions today!
        </p>
      </div>

      {/* <div className="card card-side bg-base-100 shadow-xl hover:shadow-2xl cursor-pointer my-5">
        <figure>
          <Image
            src="/chrome_web_store.png"
            alt="The End of Manifest V2: What You Need to Know About the Chrome Extension Transition"
            width={250}
            height={250}
            className="w-40 md:w-60 lg:w-80 overflow-hidden"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title link link-hover">
            The End of Manifest V2
          </h2>
          <p>
            What You Need to Know About the Chrome Extension Transition
          </p>
          <div className="card-actions text-gray-400 mt-5">Aug 17 2024</div>
          <div className="card-actions justify-end">
            <a href="https://medium.com/@buildItN0w/the-end-of-manifest-v2-what-you-need-to-know-about-the-chrome-extension-transition-c2f1b8a75b05">
              <button className="btn btn-primary">Read The End of Manifest V2</button>
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default BlogPost;
