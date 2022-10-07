import { ComponentType } from 'react';
import Builder from 'components/builder/Builder';

const HomePreview: ComponentType<any> = ({ entry, widgetsFor }) => {
  return widgetsFor('sections').map((section) => {
    const sectionAsJson = section?.toJS() || {};

    if (!sectionAsJson) return '';
    const { data } = sectionAsJson || {};
    if (!data) return '';
    const { type, ...props } = data;

    return <Builder type={type} {...props} isAdmin={true} />;
  });
};

export default HomePreview;
