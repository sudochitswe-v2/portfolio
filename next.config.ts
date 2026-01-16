import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Enable static exports for GitHub Pages
  distDir: 'out', // Specify the output directory
  trailingSlash: true, // Add trailing slashes to URLs for GitHub Pages compatibility
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
