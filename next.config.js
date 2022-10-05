const fs = require('fs');
const blogPostsFolder = './src/content/pages';

const getPathsForPosts = () => {
  return fs
    .readdirSync(blogPostsFolder)
    .map((blogName) => {
      const trimmedName = blogName.substring(0, blogName.length - 3);

      console.log(trimmedName);
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
};

console.log(getPathsForPosts());

module.exports = {
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
    });
    return cfg;
  },
  async exportPathMap(defaultPathMap) {
    return {
      ...defaultPathMap,
      ...getPathsForPosts(),
    };
  },
};
