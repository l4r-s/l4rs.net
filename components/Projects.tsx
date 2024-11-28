import React from "react";
import Image, { StaticImageData } from "next/image";
import ConfettiImg from "@/public/confetti.png"
import VPSStuffImg from "@/public/vps-stuff.png"
import ChromeExtensionListImg from "@/public/chrome_extension_list.png"
import XshotImg from "@/public/xshot_og_v3.png"
import WeContextifyImg from "@/public/wecontextify.png"
import StoppuhrTimerImg from "@/public/stoppuhr-timer.de.png"
import RealtimeBlue from "@/public/realtime-blue.png"
import PostCapture from "@/public/postcapture-com.png"

interface ProjectCardProps {
  title: string;
  children: React.ReactNode;
  image: StaticImageData;
  link: string;
  callToAction: string;
  badge?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, children, image, link, callToAction, badge }) => {
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
        <div className="flex">
          <a href={link} target="_blank">
            <h2 className="card-title link link-hover">
              {title}
            </h2>
          </a>
          {badge &&
            <div className={`mb-auto font-bold p-3 badge text-xs lg:text-base flex ml-2 ${badge === "Building" ? "badge-primary" : badge === "Active" ? "badge-success" : badge === "New" ? "badge-success" : badge === "Decommissioned" ? "badge-error" : badge === "Rebranded" ? "badge-warning" : ""}`}>
              {badge === "New" && <span className="flex items-center">{badge}&nbsp;🔥</span>}
              {badge === "Building" && <span>{badge}</span>}
              {badge === "Active" && <span>{badge}</span>}
              {badge === "Decommissioned" && <span>{badge}</span>}
              {badge === "Rebranded" && <span>{badge}</span>}
            </div>
          }
        </div>
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
      title: "realtime.blue",
      image: RealtimeBlue,
      link: "https://realtime.blue",
      callToAction: "Check it out",
      badge: "New",
      children: (
        <React.Fragment>
          <p className="mt-2">
            Track and Celebrate Your Bluesky Growth in Real-Time
          </p>
        </React.Fragment>
      ),
    },

    {
      title: "PostCapture.io",
      image: PostCapture,
      link: "https://postcapture.com",
      callToAction: "Check it out",
      badge: "New",
      children: (
        <React.Fragment>
          <p className="mt-2">
            Capture Your Posts in Stunning Detail
          </p>
          <p className="text-sm">
            Transform your Bluesky and X posts into beautiful, shareable screenshots with PostCapture.
          </p>
        </React.Fragment>
      ),
    },

    {
      title: "Monitor your VPS with ease 🚀",
      image: VPSStuffImg,
      link: "https://vps-stuff.com",
      callToAction: "Check it out",
      badge: "Building",
      children: (
        <React.Fragment>
          <p className="mt-2">
            No more complex setup. Install a single agent and start monitoring CPU, memory, disk, and network traffic in seconds.
          </p>
        </React.Fragment>
      ),
    },

    {
      title: "Highlight Your Confetti-Powered App! 🥳",
      image: ConfettiImg,
      link: "https://confettisaas.com",
      callToAction: "List your app!",
      badge: "Active",
      children: (
        <React.Fragment>
          <p className="mt-2">
            Every SaaS product should use Confetti to brighten up their users' day!
          </p>
        </React.Fragment>
      ),
    },

    {
      title: "5,000+ Opportunities Waiting for You!",
      image: ChromeExtensionListImg,
      link: "/chrome-v2-extension-list-product",
      callToAction: "Profit now!",
      badge: "Active",
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
      image: XshotImg,
      link: "https://xshot.me",
      callToAction: "Check it out",
      badge: "Rebranded",
      children: (
        <React.Fragment>
          <div className="mt-0">
            <p>Create perfect Image from any X Tweet.</p>
          </div>
        </React.Fragment>
      ),
    },
    {
      title: "WeContextify.com",
      image: WeContextifyImg,
      link: "https://wecontextify.com",
      callToAction: "Check it out",
      badge: "Decommissioned",
      children: <p>Generate stunning, contextual aware Images</p>,
    },

    {
      title: "Stoppuhr-timer.de",
      image: StoppuhrTimerImg,
      link: "https://stoppuhr-timer.de",
      callToAction: "Check it out",
      badge: "Active",
      children: <p>A simple stopwatch, timer and countdown for free use</p>,
    },

    // {
    //   title: "ImageGenPro.com",
    //   image: "/imagegenpro.png",
    //   link: "https://imagegenpro.com",
    //   callToAction: "Check it out",
    //   children: <p>Image generation Tools.</p>,
    // },
  ];

  return (
    <div className="min-h-screen container mt-8">
      <h1 className="text-4xl uppercase text-center">Projects 🚀</h1>
      <div className="divider divide-gray-400 mb-20"></div>
      {projects.map((project, index) => (
        <a key={index} href={project.link}>
          <ProjectCard {...project} />
        </a>
      ))}
    </div>
  );
};

export default Projects;
