import { ComponentType, useEffect } from 'react';
import Builder from 'components/builder/Builder';

import LoadFonts from '../../../LoadFonts';

import GlobalStyles from './../../components/GlobalStyles';

const HomePreview: ComponentType<any> = ({ entry, widgetsFor }) => {
  useEffect(() => {
    LoadFonts();
  }, []);

  return (
    <>
      <GlobalStyles />
      {widgetsFor('sections').map((section) => {
        const sectionAsJson = section?.toJS() || {};

        if (!sectionAsJson) return '';
        const { data } = sectionAsJson || {};
        if (!data) return '';
        const { type, ...props } = data;

        return <Builder type={type} {...props} isAdmin={true} />;
      })}
    </>
  );
};

export default HomePreview;
