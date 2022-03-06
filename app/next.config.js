/** @type {import('next').NextConfig} */
const path = require('path');
const withImages = require('next-images');

module.exports = {
  experimental: {
    optimizeFonts: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
