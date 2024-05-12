import React, { lazy } from "react";
const Avatar = lazy(() => import("./Avatar"));

const Welcome: React.FC = () => {
  const hashTagEnabled = true;

  return (
    <div className="pt-12">
      <div className="font-bold text-center text-xl self-center">
        <a href="/" aria-label="Go to hilars.dev">
          <Avatar />
        </a>
      </div>
      <div className="text-center mt-3 prose prose-sm">
        <p>
          <b className="text-primary prose-2xl">Hi!</b>, my name is Lars.
        </p>
        <p>I am a Software and Systems Engineer located in Switzerland.</p>
        {hashTagEnabled && (
        <p className="mt-3 font-thin italic">
          <b className="text-primary">#</b>python{" "}
          <b className="text-primary">#</b>opensource{" "}
          <b className="text-primary">#</b>ansible{" "}
          <b className="text-primary">#</b>javascript{" "}
          <b className="text-primary">#</b>backend{" "}
          <b className="text-primary">#</b>artificial intelligence{" "}
          <b className="text-primary">#</b>linux
        </p>
        )}
      </div>
    </div>
  );
};

export default Welcome;
