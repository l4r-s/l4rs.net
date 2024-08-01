import React from "react";
import Image from "next/image";

const Avatar: React.FC = () => {
  return (
    <div className="avatar">
      <div className="w-20 bg-gray-600 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <Image
          src="/me.webp"
          alt="Memoji of Lars"
          width={420}
          height={420}
          priority
        />
      </div>
    </div>
  );
};

export default Avatar;
