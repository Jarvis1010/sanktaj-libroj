/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.churchofjesuschrist.org",
        port: "",
        pathname: "/imgs/**",
      },
      {
        protocol: "https",
        hostname: "www.churchofjesuschrist.org",
        port: "",
        pathname: "/music/**",
      },
    ],
  },
};

export default nextConfig;
