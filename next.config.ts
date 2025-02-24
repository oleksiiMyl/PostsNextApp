import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    prependData: `@import "src/styles/variables.scss";`,
  },
};

export default nextConfig;
