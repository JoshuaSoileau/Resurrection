const SECTION_COLORS = {
  White: '',
  Gray: 'bg-gray-100',
  Charcoal: 'bg-gray-800',
  'Dark Green': 'bg-green-800',
};

const PROSE_COLORS = {
  White: '',
  Gray: '',
  Charcoal: '!prose-invert',
  'Dark Green': '!prose-invert',
};

export const getSectionColor = (color) => {
  return SECTION_COLORS[color] || SECTION_COLORS.White;
};

export const getProseColor = (bgColor) => {
  return PROSE_COLORS[bgColor] || PROSE_COLORS.White;
};
