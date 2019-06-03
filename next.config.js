const withCss = require('@zeit/next-css');
const withPurgeCss = require('next-purgecss');
const path = require('path');
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const withImages = require('next-images');

module.exports = withImages({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    return config;
  },
});

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:/]+/g) || [];
  }
}

// next.config.js
module.exports = phase =>
  phase !== PHASE_DEVELOPMENT_SERVER
    ? withCss(
        withPurgeCss({
          purgeCss: {
            extractors: [
              {
                extractor: TailwindExtractor,
                extensions: ['html', 'js', 'css'],
              },
            ],
          },
          cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: '[local]_[hash:base64:5]',
          },
          purgeCssPaths: ['pages/**/*', 'components/**/*', 'layouts/**/*'],
        })
      )
    : withCss();
