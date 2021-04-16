const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Mitr', ...defaultTheme.fontFamily.sans],
      pridi: ['Pridi', ...defaultTheme.fontFamily.serif],
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      transformOrigin: {
        0: '0%',
      },
      zIndex: {
        '-1': '-1',
      },
      maxWidth: {
        0: '0',
        '1/4': '25%',
        '1/3': '33.33%',
        '1/2': '50%',
        '3/4': '75%',
        290: '290px',
        full: '100%',
        min: 'min-content',
        max: 'max-content',
        prose: '65ch',
      },
      boxShadow: {
        dark: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: () => ({
        'hero-landing': "url('/images/landing/body.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  // https://tailwindcss.com/docs/plugins
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens'),
  ],
}
