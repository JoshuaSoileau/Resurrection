import header from '../content/navigation/header.md';
import footer from '../content/navigation/footer.md';

const getNavigationItems = type => {
  const paths = {
    header: header,
    footer: footer,
  };
  console.log({ paths });

  const links = paths[type]?.attributes?.links || [];

  console.log({ links });
  return links;
};

export default getNavigationItems;
