import React from "react";
import Image from "next/image";

const ProjectCard = ({ title, children, image, link, callToAction }: { title: string, children: React.ReactNode, image: string, link: string, callToAction: string }) => {
  return (
    <div className="card bg-base-100 w-5/6 shadow-xl mx-auto my-12">
      <figure>
        <Image
          src={image}
          alt={`${title} preview`}
          width={2560}
          height={1440}
          priority
        />
      </figure>
      <div className="card-body">
        <a href={link} target="_blank">
          <h2 className="card-title link link-hover">{title}</h2>
        </a>
        {children}
        <div className="card-actions justify-end">
          <a href={link} target="_blank">
            <button className="btn btn-primary">{callToAction}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: "5,000+ Opportunities Waiting for You!",
      image: "/chrome_extension_list.png",
      link: "/chrome-v2-extension-list-product",
      callToAction: "Profit now!",
      children: (
        <React.Fragment>
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
        </React.Fragment>
      ),
    },
    {
      title: "xshot.me",
      image: "/xshot.png",
      link: "https://xshot.me",
      callToAction: "Check it out",
      children: <p>Create perfect Image from any X Tweet.</p>,
    },
    {
      title: "WeContextify.com",
      image: "/wecontextify.png",
      link: "https://wecontextify.com",
      callToAction: "Check it out",
      children: <p>Generate stunning, contextual aware Images</p>,
    },
    {
      title: "ImageGenPro.com",
      image: "/imagegenpro.png",
      link: "https://imagegenpro.com",
      callToAction: "Check it out",
      children: <p>Image generation Tools.</p>,
    },
  ];

  return (
    <div className="min-h-screen container mt-8">
      <h1 className="text-4xl uppercase text-center">Projects 🚀</h1>
      <div className="divider divide-gray-400 mb-20"></div>
      {projects.map((project, index) => (
        <a key={index} href={project.link} target="_blank">
          <ProjectCard {...project} />
        </a>
      ))}
    </div>
  );
};

export default Projects;
