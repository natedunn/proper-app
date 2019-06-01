const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssEasyImport = require('postcss-easy-import');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssEasyImport,
    tailwindcss('./tailwind.config.js'),
    postcssPresetEnv,
    autoprefixer,
  ],
};

// 'postcss-easy-import': {},
// 'tailwindcss',
// 'postcss-preset-env': {
//   browsers: ['last 2 versions', 'ie >= 10'],
//   features: {
//     'nesting-rules': true,
//   },
// },
// 'autoprefixer'
