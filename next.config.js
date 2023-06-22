/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/basepath",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/basepath",
        permanent: true,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
