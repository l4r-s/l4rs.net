import React from "react";
import Image, { StaticImageData } from "next/image";
import LarsAvatar from "@/public/me.png";

interface BlogHeaderProps {
  title: string;
  subtitle: string;
  date: string;
  image?: StaticImageData;
  imageAlt?: string;
  crossPostUrl?: string;
  crossPostText?: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({
  title,
  subtitle,
  date,
  image,
  imageAlt,
  crossPostUrl,
  crossPostText,
}) => {
  return (
    <div className="p-8 bg-white shadow-lg rounded-lg mb-16">
      {image && (
        <div className="overflow-hidden rounded-lg mb-6">
          <Image
            src={image}
            alt={imageAlt || title}
            className="w-full h-auto object-contain"
          />
        </div>
      )}
      <h1 className="text-5xl font-bold text-gray-800 mb-4">{title}</h1>
      <h2 className="text-3xl text-gray-600 mb-6">{subtitle}</h2>
      <div className="flex justify-between items-center">
        <div className="flex items-center text-sm text-gray-500">
          <Image
            src={LarsAvatar}
            alt="Lars Avatar"
            width={40}
            height={40}
            className="rounded-full mr-2"
          />
          <span>Written by Lars</span>
        </div>
        <div className="text-sm text-gray-500">
          <h3>{date}</h3>
          {crossPostUrl && crossPostText && (
            <h3>
              Cross posted on{" "}
              <a
                href={crossPostUrl}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {crossPostText}
              </a>
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;