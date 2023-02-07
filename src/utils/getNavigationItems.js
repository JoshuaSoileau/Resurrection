import header from '../content/navigation/header.md';
import footer from '../content/navigation/footer.md';

const getNavigationItems = type => {
  const paths = {
    header: header,
    footer: footer,
  };

  const links = paths[type]?.attributes?.links || [];

  return links;
};

export default getNavigationItems;
