import footer from '../content/navigation/footer.md';
import header from '../content/navigation/header.md';

const getNavigationItems = (type) => {
  const paths = {
    footer: footer,
    header: header,
  };

  const links = paths[type]?.attributes?.links || [];

  return links;
};

export default getNavigationItems;
