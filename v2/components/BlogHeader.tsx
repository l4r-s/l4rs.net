import React from "react";

interface BlogHeaderProps {
  title: string;
  subtitle: string;
  date: string;
  crossPostUrl?: string;
  crossPostText?: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = (props) => {
  return (
    <div>
      <h1 className="text-4xl text-left">{props.title}</h1>
      <h2 className="text-2xl text-left">{props.subtitle}</h2>
      <div className="mt-5 flex flex-row text-sm">
        <h3 className="text-gray-400 text-left">{props.date}</h3>
        {props.crossPostUrl && props.crossPostText && (
          <h3 className="text-gray-400 text-left ml-auto">Cross posted on{" "}
            <a href={props.crossPostUrl}
              className="link link-hover link-primary" target="_blank">{props.crossPostText}</a></h3>
        )}
      </div>
    </div>
  );
};

export default BlogHeader;