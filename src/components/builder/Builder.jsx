import { Fragment } from 'react';
import Contact1 from 'sections/Contact1/Contact1';
import ContactEmailSignup from 'sections/ContactEmailSignup/ContactEmailSignup';
import FullscreenImageWithTextOnTop from 'sections/FullscreenImageWithTextOnTop/FullscreenImageWithTextOnTop';
import Hero1 from 'sections/Hero1/Hero1';
import ImageInThreeColumns from 'sections/ImageInThreeColumns/ImageInThreeColumns';
import ImagePlusTextFullBleed1 from 'sections/ImagePlusTextFullBleed1/ImagePlusTextFullBleed1';
import ImagePlusTextStylized from 'sections/ImagePlusTextStylized/ImagePlusTextStylized';
import Spacer from 'sections/Spacer/Spacer';
import TextCenteredPlusLine1 from 'sections/TextCenteredPlusLine1/TextCenteredPlusLine1';

const Types = {
  Contact1: Contact1,
  ContactEmailSignup: ContactEmailSignup,
  FullscreenImageWithTextOnTop: FullscreenImageWithTextOnTop,
  Hero1: Hero1,
  ImageInThreeColumns: ImageInThreeColumns,
  ImagePlusTextFullBleed1: ImagePlusTextFullBleed1,
  ImagePlusTextStylized: ImagePlusTextStylized,
  Spacer: Spacer,
  TextCenteredPlusLine1: TextCenteredPlusLine1,
};

export default function Builder({ type, ...props }) {
  const Component = Types[type] || Fragment;

  return <Component {...props} />;
}
