/* eslint-disable @typescript-eslint/no-var-requires */
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
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
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
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        default:
          '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        none: 'none',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
        // Build on top of our existing colors
        ...Object.entries(theme('colors'))
          .map(([key, value]) => makeShadow(key, value))
          .reduce((acc, cur) => ({ ...acc, ...cur }), {}),
      }),
      colors: {
        code: {
          blue: '#93ddfd',
          green: '#b5f4a5',
          purple: '#d9a9ff',
          red: '#ff8383',
          white: '#fff',
          yellow: '#ffe484',
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
        // sans: [fonts?.sans?.name, ...defaultTheme.fontFamily.sans],
        // serif: [fonts?.serif?.name, ...defaultTheme.fontFamily.sans],
        ...otherFonts,
      },
      fontSize: () => ({
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
      maxWidth: (theme) => ({
        ...theme('spacing'),

        0: '0',
        '1/2': '50%',
        '1/3': '33.33%',
        '1/4': '25%',
        '1/6': '16.66%',
        '2/3': '66.66%',
        '3/4': '75%',

        full: '100%',
      }),
      minHeight: (theme) => ({ ...theme('spacing'), ...theme('screens') }),
      minWidth: (theme) => ({
        ...theme('spacing'),

        0: '0',
        '1/2': '50%',
        '1/3': '33.33%',
        '1/4': '25%',
        '1/6': '16.66%',
        '2/3': '66.66%',
        '3/4': '75%',

        full: '100%',
      }),
      screens: {
        '2xs': '360px',
        '3xs': '320px',
        xs: '480px',
      },
      spacing: (theme) => ({
        ...theme('screens'),
        '1/2': '50%',
        '100px': '100px',

        '100vh': '100vh',
        '100vw': '100vw',
        '10px': '10px',
        '10vh': '10vh',
        '10vw': '10vw',
        '12px': '12px',
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
        '2/3': '66.66%',
        '200px': '200px',
        '20px': '20px',
        '20vh': '20vh',
        '20vw': '20vw',

        '24px': '24px',
        '28px': '28px',
        '2px': '2px',
        '300px': '300px',
        '30vh': '30vh',
        '30vw': '30vw',

        '32px': '32px',
        '36px': '36px',
        '400px': '400px',
        '40vh': '40vh',
        '40vw': '40vw',
        '4px': '4px',
        '500px': '500px',
        '50vh': '50vh',
        '50vw': '50vw',
        '600px': '600px',

        '60vh': '60vh',
        '60vw': '60vw',
        '6px': '6px',
        '70vh': '70vh',
        '70vw': '70vw',
        '80vh': '80vh',
        '80vw': '80vw',
        '8px': '8px',
        '90vh': '90vh',
        '90vw': '90vw',
      }),
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
      typography: (theme) => ({
        default: {
          css: {
            a: {
              color: theme('colors.gray.900'),
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.200'),
              color: theme('colors.gray.900'),
            },
            code: {
              color: theme('colors.gray.900'),
            },
            color: theme('colors.gray.700'),
            h2: {
              color: theme('colors.gray.900'),
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              color: theme('colors.gray.900'),
              fontWeight: '600',
            },
            'ol li:before': {
              color: theme('colors.gray.500'),
              fontWeight: '600',
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
              color: theme('colors.gray.200'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.400'),
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
};
