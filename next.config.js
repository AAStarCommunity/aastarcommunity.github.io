module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
      output: "export"

    });

    return config;
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/home",
  //     },
  //     {
  //       source: "/admin",
  //       destination: "/admin/index.html",
  //     },
  //   ];
  // },
};