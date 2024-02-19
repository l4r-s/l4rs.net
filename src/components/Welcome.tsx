import React, { lazy } from "react";
const Avatar = lazy(() => import("./Avatar"));

const Welcome: React.FC = () => {
  return (
      <div className="pt-12">
        <div className="font-bold text-center text-xl self-center">
          <a href="/">
            <Avatar />
          </a>
        </div>
        <div className="text-center mt-3 prose prose-sm">
          <p>
            <b className="text-primary prose-2xl">Hi!</b>, my name is Lars.
          </p>
          <p>I am a Software and Systems Engineer located in Switzerland.</p>
          <p className="mt-3 font-thin italic">
            <b className="text-primary">#</b>opensource{" "}
            <b className="text-primary">#</b>observability{" "}
            <b className="text-primary">#</b>ansible{" "}
            <b className="text-primary">#</b>python{" "}
            <b className="text-primary">#</b>prometheus{" "}
            <b className="text-primary">#</b>elk
          </p>
        </div>
      </div>
  );
};

export default Welcome;
