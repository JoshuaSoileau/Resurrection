import tw from 'twin.macro';

const SECTION_COLORS = {
  White: '',
  Gray: tw`bg-gray-100`,
  Charcoal: tw`bg-gray-800`,
  'Dark Green': tw`bg-green-800`,
  Orange: tw`bg-orange-500`,
  Red: tw`bg-red-600`,
  Green: tw`bg-green-600`,
  Yellow: tw`bg-yellow-300`,
};

const PROSE_COLORS = {
  White: '',
  Gray: '',
  Charcoal: tw`prose-invert md:prose-invert lg:prose-invert`,
  'Dark Green': tw`prose-invert md:prose-invert lg:prose-invert`,
  Green: tw`prose-invert md:prose-invert lg:prose-invert`,
};

const OPACITY_VALUES = {
  0.1: tw`opacity-10`,
  0.2: tw`opacity-20`,
  0.3: tw`opacity-30`,
  0.4: tw`opacity-40`,
  0.5: tw`opacity-50`,
  0.6: tw`opacity-60`,
  0.7: tw`opacity-70`,
  0.8: tw`opacity-80`,
  0.9: tw`opacity-90`,
  1: '',
};

export const getSectionColor = color => {
  return SECTION_COLORS[color] || SECTION_COLORS.White;
};

export const getProseColor = bgColor => {
  return PROSE_COLORS[bgColor] || PROSE_COLORS.White;
};

export const getOpacityValue = opacity => OPACITY_VALUES[opacity] || '';
