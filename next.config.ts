import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  sassOptions: {
    additionalData: '@import "src/styles/variables.scss";',
  },
};

export default nextConfig;
