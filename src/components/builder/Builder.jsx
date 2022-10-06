import { Fragment } from 'react';
import Contact1 from 'sections/Contact1/Contact1';

const Types = {
  Contact1: Contact1,
};

export default function Builder({ type, ...props }) {
  const Component = Types[type] || Fragment;

  return <Component {...props} />;
}
