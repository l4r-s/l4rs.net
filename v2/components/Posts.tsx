import React from "react";
import Image from "next/image";

interface Props {
  title?: string;
  theme?: string;
}

const Posts: React.FC<Props> = () => {
  return (
    <div>
      <div className="min-h-screen container my-20 lg:my-28">
        <h1 className="text-4xl uppercase text-center">Latest Blog Posts</h1>
        <div className="divider divide-gray-400 mb-20"></div>

        <div className="card card-side bg-base-100 shadow-xl hover:shadow-2xl cursor-pointer my-5">
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
            <a href="/blog/the-end-of-manifest-v2-what-you-need-to-know-about-the-chrome-extension-transition">
              <h2 className="card-title link link-hover">
                The End of Manifest V2
              </h2>
            </a>
            <p>
              What You Need to Know About the Chrome Extension Transition
            </p>
            <div className="card-actions text-gray-400 mt-5">Aug 17 2024</div>
            <div className="card-actions justify-end">
              <a href="/blog/the-end-of-manifest-v2-what-you-need-to-know-about-the-chrome-extension-transition">
                <button className="btn btn-primary">Read The End of Manifest V2</button>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="card card-side bg-base-100 shadow-xl hover:shadow-2xl cursor-pointer my-5">
          <figure>
            <img
              src="https://media-exp1.licdn.com/dms/image/D5612AQFG4GGVZ1-LlQ/article-cover_image-shrink_600_2000/0/1667324699780?e=2147483647&v=beta&t=MERZD-vIso8L-dS2am_KbCo9dr4yiLIfSA4K_csxepo"
              alt="GCP Cloud run"
              className="w-40 md:w-60 lg:w-80 overflow-hidden"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">GCP Cloud Run deployment with Python</h2>
            <p>
              How I manage my Cloud run deployments in every region with Python!
            </p>
            <div className="card-actions text-gray-300 mt-5">Feb 17 2024</div>
          </div>
        </div> */}
      </div>
    </div >
  );
};

export default Posts;
