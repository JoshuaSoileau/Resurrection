/* tslint:disable:@typescript-eslint/no-explicit-any react/prop-types react/jsx-key */

import { ComponentType, useEffect } from 'react';
import Builder from 'components/builder/Builder';

import LoadFonts from '../../../LoadFonts';

import GlobalStyles from './../../components/GlobalStyles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HomePreview: ComponentType<any> = ({ widgetsFor }) => {
  useEffect(() => {
    LoadFonts();
  }, []);

  return (
    <>
      <GlobalStyles />
      {widgetsFor('sections').map((section, index) => {
        const sectionAsJson = section?.toJS() || {};

        if (!sectionAsJson) return '';
        const { data } = sectionAsJson || {};
        if (!data) return '';
        const { type, ...props } = data;

        return (
          <Builder key={type + index} type={type} {...props} isAdmin={true} />
        );
      })}
    </>
  );
};

export default HomePreview;
