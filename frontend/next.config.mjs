/** @type {import('next').NextConfig} */
const nextConfig = {  
  eslint: {
    ignoreDuringBuilds: true,
  },  
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
