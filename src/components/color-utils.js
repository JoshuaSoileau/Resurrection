import tw from 'twin.macro';

const SECTION_COLORS = {
  White: '',
  Gray: tw`bg-gray-100`,
  Charcoal: tw`bg-gray-800`,
  'Dark Green': tw`bg-green-800`,
};

const PROSE_COLORS = {
  White: '',
  Gray: '',
  Charcoal: tw`!prose-invert`,
  'Dark Green': tw`!prose-invert`,
};

export const getSectionColor = color => {
  return SECTION_COLORS[color] || SECTION_COLORS.White;
};

export const getProseColor = bgColor => {
  return PROSE_COLORS[bgColor] || PROSE_COLORS.White;
};
