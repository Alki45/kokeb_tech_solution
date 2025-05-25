const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/kokeb_tech_solution' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/kokeb_tech_solution/' : '',
  trailingSlash: true,
};


module.exports = nextConfig;
