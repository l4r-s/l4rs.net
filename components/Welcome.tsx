import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import MeAvatar from "@/public/me.png";

const Welcome: React.FC = () => {
  const hashTagEnabled = true;

  return (
    <div className="pt-12 flex flex-col items-center">
      <div className="flex items-center justify-center bg-slate-300 py-4 px-6 rounded-full shadow-lg">
        <a href="/" aria-label="Go to hilars.dev" className="flex items-center space-x-3">
          <Avatar className="h-16 w-16">
            <AvatarImage src={MeAvatar.src} alt="Lars' Avatar" />
            <AvatarFallback>L</AvatarFallback>
          </Avatar>
          <div className="font-bold text-xl text-primary flex flex-col items-center">
            <span className="text-xs lg:text-base">Hi!</span>
            <span className="text-xs lg:text-base">I'm Lars 👋</span>
          </div>
        </a>
      </div>
      <div className="mt-6 prose prose-sm text-center">
        <p>A passionate Software and Systems Engineer specialized in DevOps, Systems Engineering, Python, JavaScript, Linux, and Automation.</p>
        {hashTagEnabled && (
          <p className="mt-3 italic">
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
