import { Fragment, ComponentType } from 'react';
import Hero1 from 'components/home/HeroSection/Hero1';
import Hero2 from 'components/home/HeroSection/Hero2';
import Hero3 from 'components/home/HeroSection/Hero3';
import Team1 from 'components/home/TeamSection/Team1';
import Team2 from 'components/home/TeamSection/Team2';
import Team3 from 'components/home/TeamSection/Team3';
import Contact1 from 'sections/Contact1/Contact1';

const HomePreview: ComponentType<any> = ({ entry, widgetsFor }) => {
  const Types = {
    Hero1: Hero1,
    Hero2: Hero2,
    Hero3: Hero3,
    Team1: Team1,
    Team2: Team2,
    Team3: Team3,
    Contact1: Contact1,
  };

  const sections = [];
  return widgetsFor('sections').map((section) => {
    const sectionAsJson = section?.toJS() || {};

    const { data } = sectionAsJson || {};
    const { type, ...props } = data;

    const Component = Types[type] || Fragment;

    return <Component {...props} />;
  });
};

export default HomePreview;
