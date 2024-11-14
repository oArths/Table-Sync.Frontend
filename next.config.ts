import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'date-fns'],
  },
};
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: true,
//   openAnalyzer: true
// })
 
// module.exports = withBundleAnalyzer(nextConfig)

export default nextConfig;
