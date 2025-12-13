/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: "export",
  images: {
    loader: 'custom',
    loaderFile: './src/imageLoader.js',
    formats: ['image/webp', 'image/avif'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Optimize bundle size
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
};

export default nextConfig;