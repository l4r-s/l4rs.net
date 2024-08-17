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
