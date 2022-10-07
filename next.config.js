const withTM = require('next-transpile-modules')(['react-markdown']);
const fs = require('fs');
const blogPostsFolder = './src/content/pages';

const getPathsForPosts = () => {
  const value = fs
    .readdirSync(blogPostsFolder)
    .map((blogName) => {
      const trimmedName = blogName.substring(0, blogName.length - 3);

      return {
        [`/${trimmedName}`]: {
          page: '/',
          query: {
            slug: trimmedName,
          },
        },
      };
    })
    .reduce((acc, curr) => {
      return { ...acc, ...curr };
    }, {});

  return value;
};

module.exports = withTM({
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
    });
    return configuration;
  },
  async exportPathMap(defaultPathMap) {
    const value = {
      ...defaultPathMap,
      ...getPathsForPosts(),
    };

    console.log(value);
    return value;
  },
});
