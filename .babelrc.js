// In .babelrc.js
module.exports = {
  presets: [['next/babel', { 'preset-react': { runtime: 'automatic' } }]],
  plugins: [
    // ['babel-plugin-twin', { debug: true, exclude: ['node_modules'] }],
    'babel-plugin-macros',
    ['styled-components', { ssr: true }],
  ],
};
