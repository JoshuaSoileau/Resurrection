import { Fragment } from 'react';
import Contact1 from 'sections/Contact1/Contact1';
import Hero1 from 'sections/Hero1/Hero1';
import ImagePlusTextFullBleed1 from 'sections/ImagePlusTextFullBleed1/ImagePlusTextFullBleed1';

const Types = {
  Contact1: Contact1,
  Hero1: Hero1,
  ImagePlusTextFullBleed1: ImagePlusTextFullBleed1,
};

export default function Builder({ type, ...props }) {
  const Component = Types[type] || Fragment;

  return <Component {...props} />;
}