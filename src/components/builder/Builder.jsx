import { Fragment } from 'react';
import BannerWithButton from 'sections/BannerWithButton/BannerWithButton';
import CalendarWithImage from 'sections/CalendarWithImage/CalendarWithImage';
import Contact1 from 'sections/Contact1/Contact1';
import ContactEmailSignup from 'sections/ContactEmailSignup/ContactEmailSignup';
import Footer1 from 'sections/Footer1/Footer1';
import FullscreenImageWithTextOnTop from 'sections/FullscreenImageWithTextOnTop/FullscreenImageWithTextOnTop';
import Hero1 from 'sections/Hero1/Hero1';
import ImageInThreeColumns from 'sections/ImageInThreeColumns/ImageInThreeColumns';
import ImageInThreeColumnsWithSpace from 'sections/ImageInThreeColumnsWithSpace/ImageInThreeColumnsWithSpace';
import ImagePlusTextFullBleed1 from 'sections/ImagePlusTextFullBleed1/ImagePlusTextFullBleed1';
import ImagePlusTextStylized from 'sections/ImagePlusTextStylized/ImagePlusTextStylized';
import Spacer from 'sections/Spacer/Spacer';
import Teams from 'sections/Teams/Teams';
import TextCenteredPlusLine1 from 'sections/TextCenteredPlusLine1/TextCenteredPlusLine1';
import YoutubeVideo from 'sections/YoutubeVideo/YoutubeVideo';

const Types = {
  BannerWithButton: BannerWithButton,
  CalendarWithImage: CalendarWithImage,
  Contact1: Contact1,
  ContactEmailSignup: ContactEmailSignup,
  Footer1: Footer1,
  FullscreenImageWithTextOnTop: FullscreenImageWithTextOnTop,
  Hero1: Hero1,
  ImageInThreeColumns: ImageInThreeColumns,
  ImageInThreeColumnsWithSpace: ImageInThreeColumnsWithSpace,
  ImagePlusTextFullBleed1: ImagePlusTextFullBleed1,
  ImagePlusTextStylized: ImagePlusTextStylized,
  Spacer: Spacer,
  Teams: Teams,
  TextCenteredPlusLine1: TextCenteredPlusLine1,
  YoutubeVideo: YoutubeVideo,
};

export default function Builder({ type, ...props }) {
  const Component = Types[type] || Fragment;

  return <Component {...props} />;
}
