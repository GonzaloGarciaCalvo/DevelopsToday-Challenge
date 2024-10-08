/** @type {import('next').NextConfig} */
const nextConfig = {  
  eslint: {
    ignoreDuringBuilds: true,
  },  
  compiler: {
    styledComponents: true,
  },
/*   experimental: {
    missingSuspenseWithCSRBailout: false,
  }, */
};

export default nextConfig;
