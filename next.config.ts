

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  output: 'export',
  basePath: isProd ? '/kokeb_tech_solution' : '',
  assetPrefix: isProd ? '/kokeb_tech_solution/' : '',
  trailingSlash: true,
};

module.exports = nextConfig;
