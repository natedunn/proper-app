const withCss = require('@zeit/next-css');
const withImages = require('next-images');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withCss(
  withMDX(
    withImages({
      pageExtensions: ['js', 'jsx', 'md', 'mdx'],
      webpack: config => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
          fs: 'empty',
        };

        return config;
      },
    })
  )
);
