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
          source: '/c2e',  // The alias URL
          destination: '/chrome-v2-extension-list',  // The actual page
        },
      ]
    },
  }
export default nextConfig;
