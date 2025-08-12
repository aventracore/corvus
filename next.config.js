const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    mdxOptions: {
      rehypePlugins: [require('rehype-prism-plus')],
    },
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'mdx'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'source.unsplash.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' }
    ],
  },
  experimental: {
    mdxRs: true,
  },
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias['next-mdx-import-source-file'] = require.resolve('./next-mdx-import-source-file.js');
    return config;
  }
};

module.exports = withMDX(nextConfig);