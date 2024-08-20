import React from "react";
import Image from "next/image";

const Projects: React.FC = () => {
  return (
    <div>
      <div className="min-h-screen container mt-8">
        <h1 className="text-4xl uppercase text-center">Projects 🚀</h1>
        <div className="divider divide-gray-400 mb-20"></div>

        <div className="card bg-base-100 w-5/6 shadow-xl mx-auto my-5">
          <figure>
            <Image
              src="/chrome_extension_list.png"
              alt="chrome extension list"
              width={2560}
              height={1440}
              priority
            />
          </figure>
          <div className="card-body">
            <a href="/chrome-v2-extension-list" target="_blank">
              <h2 className="card-title link link-hover">5,000+ Opportunities Waiting for You!</h2>
            </a>
            <p className="mt-2">
              <span className="block">As of June 3, 2024, Chrome officially deprecated Manifest V2—thousands of extensions are about to break!</span>
              <span className="block">I&apos;ve curated a list of 5,000+ obsolete V2 extensions complete with:</span>
            </p>
            <ul className="list-disc list-inside">
              <li>Install count ✅</li>
              <li>Ratings ✅</li>
              <li>Last Updated Date ✅</li>
            </ul>
            <div className="my-4 mx-auto">
              <a href="https://www.producthunt.com/posts/v2-chrome-extension-list?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-v2&#0045;chrome&#0045;extension&#0045;list" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=481039&theme=light" alt="V2&#0032;Chrome&#0032;Extension&#0032;List - 5&#0044;000&#0043;&#0032;Opportunities&#0032;Waiting&#0032;for&#0032;You&#0033; | Product Hunt" style={{ width: '250px', height: '54px' }} width="250" height="54" /></a>
            </div>


            <div className="card-actions justify-end">
              <a href="/chrome-v2-extension-list" target="_blank">
                <button className="btn btn-primary">Profit now!</button>
              </a>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-5/6 shadow-xl mx-auto my-5">
          <figure>
            <Image
              src="/xshot.png"
              alt="xshot preview"
              width={2560}
              height={1440}
              priority
            />
          </figure>
          <div className="card-body">
            <a href="https://xshot.me" target="_blank">
              <h2 className="card-title link link-hover">xshot.me</h2>
            </a>
            <p>Create perfect Image from any X Tweet.</p>
            <div className="card-actions justify-end">
              <a href="https://xshot.me" target="_blank">
                <button className="btn btn-primary">Check it out</button>
              </a>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-5/6 shadow-xl mx-auto my-5">
          <figure>
            <Image
              src="/wecontextify.png"
              alt="wecontextify preview"
              width={2560}
              height={1440}
              priority
            />
          </figure>
          <div className="card-body">
            <a href="https://wecontextify.com" target="_blank">
              <h2 className="card-title link link-hover">WeContextify.com</h2>
            </a>
            <p>Generate stunning, contextual aware Images</p>
            <div className="card-actions justify-end">
              <div className="card-actions justify-end">
                <a href="https://wecontextify.com" target="_blank">
                  <button className="btn btn-primary">Check it out</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-5/6 shadow-xl mx-auto my-5">
          <figure>
            <Image
              src="/imagegenpro.png"
              alt="xshot preview"
              width={2560}
              height={1440}
              priority
            />
          </figure>
          <div className="card-body">
            <a href="https://imagegenpro.com" target="_blank">
              <h2 className="card-title link link-hover">ImageGenPro.com</h2>
            </a>
            <p>Image generation Tools.</p>
            <div className="card-actions justify-end">
              <a href="https://imagegenpro.com" target="_blank">
                <button className="btn btn-primary">Check it out</button>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="card lg:card-side bg-base-100 shadow-xl my-5">
          <figure>
          <Image
              src="/imagegenpro.png"
              alt="xshot preview"
              width={2560}
              height={1440}
              priority
            />
          </figure>
          <div className="card-body min-w-60">
            <h2 className="card-title">ImageGenPro.com</h2>
            <p>Image generation Tools.</p>
            <p>Create perfect Image from any X Tweet.</p>
          </div>
        </div>

        <div className="card lg:card-side bg-base-100 shadow-xl my-5">
          <figure>
            <Image
              src="/imagegenpro.png"
              alt="xshot preview"
              width={2560}
              height={1440}
              priority
            />
          </figure>
          <div className="card-body min-w-60">
            <h2 className="card-title">ImageGenPro.com</h2>
            <p>Image generation Tools.</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
