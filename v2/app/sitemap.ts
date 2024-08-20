import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hilars.dev',
      lastModified: '2024-08-17',
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://hilars.dev/blog',
      lastModified: '2024-08-17',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://hilars.dev/projects',
      lastModified: '2024-08-20',
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://hilars.dev/contact',
      lastModified: '2024-08-17',
      changeFrequency: 'yearly',
      priority: 0.5,
    },

    {
      url: 'https://hilars.dev/blog/the-end-of-manifest-v2-what-you-need-to-know-about-the-chrome-extension-transition',
      lastModified: '2024-08-17',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
   ]
}