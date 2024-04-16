/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.careerlauncher.com',
          port: '',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
          port: '',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'img.freepik.com',
          port: '',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'png.pngtree.com',
          port: '',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'ap-south-1.graphassets.com',
          port: '',
          pathname: '**',
        },
      ],
    },
  };
  
  export default nextConfig;