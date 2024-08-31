/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/v2e',  // The alias URL
        destination: '/chrome-v2-extension-list',  // The actual page
      },
       {
        source: '/v2e1',  // The alias URL
        destination: '/chrome-v2-extension-list',  // The actual page
      },
      {
        source: '/c2e',  // The alias URL used on twitter bio
        destination: '/chrome-v2-extension-list',  // The actual page
      },
      {
        source: '/cv2',  // The alias URL used on twitter bio
        destination: '/chrome-v2-extension-list',  // The actual page
      },
      {
        source: '/blog/how-to-create-custom-short-links-with-referrer-tracking-using-next-js',
        destination: '/blog/how-to-create-custom-short-links-with-referrer-tracking-using-nextjs',
      },
    ]
  },
}
export default nextConfig;
