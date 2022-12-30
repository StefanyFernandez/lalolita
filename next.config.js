const isProd = process.env.NODE_ENV === "production";

module.exports = {
  // Use the CDN in production and localhost for development.
  /* assetPrefix: isProd ? '../' : '../', */
  /* distDir: 'build', */
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  /* async redirects() {
    return [
      {
        source: '/',
        destination: '/en/home',
        permanent: false,
      },
    ];
  }, */
};
