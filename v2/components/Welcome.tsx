import React, { lazy } from "react";
const Avatar = lazy(() => import("./Avatar"));

const Welcome: React.FC = () => {
  const hashTagEnabled = true;

  return (
    <div className="pt-12">
      <div className="font-bold text-xl self-center bg-slate-200 py-4 rounded-r-md -ml-4">
        <a href="/" aria-label="Go to hilars.dev">
        <div className="ml-3">
          <Avatar />
        </div>
        </a>
      </div>
      <div className="mt-3 prose prose-sm">
        <p>
          <b className="text-primary prose-2xl">Hi!</b>, I&apos;m Lars.
        </p>
        <p>A passionate Software and Systems Engineer specializing in Python, JavaScript, and DevOps, based in Switzerland.</p>
        {hashTagEnabled && (
        <p className="mt-3 italic text-center">
          <b className="text-primary">#</b>python{" "}
          <b className="text-primary">#</b>backend{" "}
          <b className="text-primary">#</b>opensource{" "}
          <b className="text-primary">#</b>ansible{" "}
          <b className="text-primary">#</b>javascript{" "}
          <b className="text-primary">#</b>frontend{" "}
          <b className="text-primary">#</b>devops{" "}
          <b className="text-primary">#</b>automation{" "}
          <b className="text-primary">#</b>linux{" "}
        </p>
        )}
      </div>
    </div>
  );
};

export default Welcome;
