/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

// The folders containing files importing twin.macro
const includedDirs = [
  path.resolve(__dirname, 'src/components'),
  path.resolve(__dirname, 'src/pages'),
  path.resolve(__dirname, 'src/styles'),
];

module.exports = function withTwin(nextConfig) {
  return {
    ...nextConfig,
    webpack(config, options) {
      const { dev, isServer } = options;
      config.module = config.module || {};
      config.module.rules = config.module.rules || [];
      config.module.rules.push({
        include: includedDirs,
        test: /\.(jsx|js)$/,
        use: [
          options.defaultLoaders.babel,
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                require.resolve('babel-plugin-macros'),
                [
                  require.resolve('babel-plugin-styled-components'),
                  { displayName: true, ssr: true },
                ],
              ],
              sourceMaps: dev,
            },
          },
        ],
      });

      if (!isServer) {
        config.resolve.fallback = {
          ...(config.resolve.fallback || {}),
          crypto: false,
          fs: false,
          module: false,
          os: false,
          path: false,
        };
      }

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      } else {
        return config;
      }
    },
  };
};
