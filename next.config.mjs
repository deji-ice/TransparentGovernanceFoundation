/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com", // Freepik hostname
      },
      {
        protocol: "https",
        hostname: "img.shutterstock.com", // Shutterstock hostname
      },
    ],
  },
};

export default nextConfig;
