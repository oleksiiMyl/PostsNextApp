import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  sassOptions: {
    additionalData: '@use "src/styles/variables.scss" as *;',
  },
};

export default nextConfig;
