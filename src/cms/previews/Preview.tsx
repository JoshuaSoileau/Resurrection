import { ComponentType } from 'react';
import Builder from 'components/builder/Builder';

const HomePreview: ComponentType<any> = ({ entry, widgetsFor }) => {
  return widgetsFor('sections').map((section) => {
    const sectionAsJson = section?.toJS() || {};

    const { data } = sectionAsJson || {};
    const { type, ...props } = data;

    return <Builder type={type} {...props} />;
  });
};

export default HomePreview;
