import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  sassOptions: {
    prependData: '@use "src/styles/variables.scss" as *;',
  },
};

export default nextConfig;
