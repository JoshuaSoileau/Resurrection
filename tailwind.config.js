const defaultTheme = require('tailwindcss/defaultTheme');
const fonts = require('./fonts.json');

const otherFonts = fonts.reduce(
  (total, item) => ({
    ...total,
    [item.title]: [item.name],
  }),
  {}
);

let makeShadow = (name, rgb) => {
  let obj = {};

  obj[name + '-xs'] = `0 0 0 1px rgba(${rgb}, 0.05)`;
  obj[name + '-xs'] = `0 0 0 1px rgba(${rgb}, 0.05)`;
  obj[name + '-sm'] = `0 1px 2px 0 rgba(${rgb}, 0.05)`;
  obj[name] = `0 1px 3px 0 rgba(${rgb}, 0.1), 0 1px 2px 0 rgba(${rgb}, 0.06)`;
  obj[
    name + '-md'
  ] = `0 4px 6px -1px rgba(${rgb}, 0.1), 0 2px 4px -1px rgba(${rgb}, 0.06)`;
  obj[
    name + '-lg'
  ] = `0 10px 15px -3px rgba(${rgb}, 0.1), 0 4px 6px -2px rgba(${rgb}, 0.05)`;
  obj[
    name + '-xl'
  ] = `0 20px 25px -5px rgba(${rgb}, 0.1), 0 10px 10px -5px rgba(${rgb}, 0.04)`;
  obj[name + '-2xl'] = `0 25px 50px -12px rgba(${rgb}, 0.25)`;
  obj[name + '-inner'] = `inset 0 2px 4px 0 rgba(${rgb}, 0.06)`;
  return obj;
};

module.exports = {
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        reels: '9 / 16',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '3.5rem',
        '8xl': '4rem',
        '9xl': '4.5rem',
      },
      boxShadow: (theme) => ({
        xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        default:
          '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none',
        // Build on top of our existing colors
        ...Object.entries(theme('colors'))
          .map(([key, value]) => makeShadow(key, value))
          .reduce((acc, cur) => ({ ...acc, ...cur }), {}),
      }),
      colors: {
        code: {
          green: '#b5f4a5',
          yellow: '#ffe484',
          purple: '#d9a9ff',
          red: '#ff8383',
          blue: '#93ddfd',
          white: '#fff',
        },
        electric: '#db00ff',
        ribbon: '#0047ff',
        'royal-blue': {
          100: '#F0F1FC',
          200: '#D9DCF9',
          300: '#C2C7F5',
          400: '#959CED',
          500: '#6772E5',
          600: '#5D67CE',
          700: '#3E4489',
          800: '#2E3367',
          900: '#1F2245',
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      fontFamily: {
        // sans: [fonts?.sans?.name, ...defaultTheme.fontFamily.sans],
        // serif: [fonts?.serif?.name, ...defaultTheme.fontFamily.sans],
        ...otherFonts,
      },
      fontSize: (theme) => ({
        '2xs': ['0.7rem', '.85rem'],
      }),
      fontWeight: {
        100: '100',
        200: '200',
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
        900: '900',
      },
      height: (theme) => ({ ...theme('spacing'), ...theme('screens') }),
      minHeight: (theme) => ({ ...theme('spacing'), ...theme('screens') }),
      minWidth: (theme) => ({
        ...theme('spacing'),

        0: '0',
        '1/6': '16.66%',
        '1/4': '25%',
        '3/4': '75%',
        '1/2': '50%',
        '1/3': '33.33%',
        '2/3': '66.66%',

        full: '100%',
      }),
      maxWidth: (theme) => ({
        ...theme('spacing'),

        0: '0',
        '1/6': '16.66%',
        '1/4': '25%',
        '3/4': '75%',
        '1/2': '50%',
        '1/3': '33.33%',
        '2/3': '66.66%',

        full: '100%',
      }),
      screens: {
        '3xs': '320px',
        '2xs': '360px',
        xs: '480px',
      },
      spacing: (theme) => ({
        ...theme('screens'),
        '1/2': '50%',
        '2/3': '66.66%',

        '2px': '2px',
        '4px': '4px',
        '6px': '6px',
        '8px': '8px',
        '10px': '10px',
        '12px': '12px',
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '24px': '24px',
        '28px': '28px',
        '32px': '32px',
        '36px': '36px',

        '100px': '100px',
        '200px': '200px',
        '300px': '300px',
        '400px': '400px',
        '500px': '500px',
        '600px': '600px',

        '10vw': '10vw',
        '20vw': '20vw',
        '30vw': '30vw',
        '40vw': '40vw',
        '50vw': '50vw',
        '60vw': '60vw',
        '70vw': '70vw',
        '80vw': '80vw',
        '90vw': '90vw',
        '100vw': '100vw',

        '10vh': '10vh',
        '20vh': '20vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
        '100vh': '100vh',
      }),
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
      typography: (theme) => ({
        default: {
          css: {
            color: theme('colors.gray.700'),
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.900'),
            },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.400'),
            },
            code: {
              color: theme('colors.gray.900'),
            },
            a: {
              color: theme('colors.gray.900'),
            },
            pre: {
              color: theme('colors.gray.200'),
              backgroundColor: theme('colors.gray.800'),
            },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
            },
          },
        },
      }),
      width: (theme) => ({ ...theme('spacing'), ...theme('screens') }),
      zIndex: {
        '-1': -1,
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
