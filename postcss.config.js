const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssEasyImport = require('postcss-easy-import');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssEasyImport,
    tailwindcss('./tailwind.config.js'),
    ...(process.env.NODE_ENV === `production`
      ? [
          purgecss({
            content: ['./pages/**/*.js', './components/**/*.js'],
            defaultExtractor: content =>
              content.match(/[A-Za-z0-9-_:/]+/g) || [],
          }),
          cssnano,
        ]
      : []),
    postcssPresetEnv,
    autoprefixer,
  ],
};
