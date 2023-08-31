/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images-na.ssl-images-amazon.com",
      "m.media-amazon.com",
      "images-na.ssl-images-amazon.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
    ],
  },
};

module.exports = nextConfig;