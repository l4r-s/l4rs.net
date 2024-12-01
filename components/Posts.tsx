import React from "react";
import Image from "next/image";
import KubernetesImg from "@/public/kubernetes.png";
import NextJsShortLinkImg from "@/public/blog-nextjs-shortlink.png";
import ChromeExtensionListImg from "@/public/chrome_extension_list.png";
import MyOwnVercelImg from "@/public/blog/my-own-vercel-how-i-deploy-this-website/pr-comment.png";
import F5BotImg from "@/public/blog/automating-keyword-management-with-f5bot/f5bot-logo.png";
import { Card, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

interface Props {
  title?: string;
  theme?: string;
}

const posts = [
  {
    title: "Automating Keyword Management with F5Bot",
    image: F5BotImg,
    link: "/blog/automating-keyword-management-with-f5bot",
    description: "Learn how I automated keyword management for F5Bot while ensuring responsible usage.",
    date: "Dec 1 2024",
    buttonText: "Read"
  },
  {
    title: "My Own Vercel - How I deploy this website",
    image: MyOwnVercelImg,
    link: "/blog/my-own-vercel-how-i-deploy-this-website",
    description: "Learn how I made my own Vercel-like preview deployments for this website.",
    date: "Oct 16 2024",
    buttonText: "Read"
  },
  {
    title: "How I setup my Kubernetes Cluster",
    image: KubernetesImg,
    link: "/blog/how-i-setup-my-k3s-kubernetes-cluster",
    description: "See how I setup my Kubernetes Cluster and how I use it to host my sideprojects.",
    date: "Aug 29 2024",
    buttonText: "Read"
  },
  {
    title: "How to Create Custom Short Links with Referrer Tracking Using Next.js",
    image: NextJsShortLinkImg,
    link: "/blog/how-to-create-custom-short-links-with-referrer-tracking-using-next-js",
    description: "Learn how to create custom short links with referrer tracking using Next.js to maintain accurate marketing and traffic data.",
    date: "Aug 18 2024",
    buttonText: "Read"
  },
  {
    title: "The End of Manifest V2",
    image: ChromeExtensionListImg,
    link: "/blog/the-end-of-manifest-v2-what-you-need-to-know-about-the-chrome-extension-transition",
    description: "What You Need to Know About the Chrome Extension Transition",
    date: "Aug 17 2024",
    buttonText: "Read"
  }
];

const Posts: React.FC<Props> = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">Latest Blog Posts</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {posts.map((post, index) => (
            <Card key={index} className="hover:shadow-2xl transition-shadow duration-300 ease-in-out overflow-hidden">
              <figure className="w-full h-60 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  priority
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </figure>
              <CardContent>
                <a href={post.link} className="no-underline hover:underline">
                  <CardTitle className="text-2xl font-semibold text-gray-900 mb-3">{post.title}</CardTitle>
                </a>
                <CardDescription className="text-gray-700 mb-4">{post.description}</CardDescription>
                <div className="text-sm text-gray-500 mb-4">{post.date}</div>
                <CardFooter className="flex justify-end">
                  <a href={post.link}>
                    <button className="px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-300">{post.buttonText}</button>
                  </a>
                </CardFooter>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
