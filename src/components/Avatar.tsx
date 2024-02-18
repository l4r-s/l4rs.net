import React from "react";

const Avatar: React.FC = () => {
  return (
    <div className="avatar">
    <div className="w-20 bg-gray-600 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="/me.png" />
  </div>
  </div>
  );
};

export default Avatar;
