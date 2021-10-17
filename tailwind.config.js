module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'beaver': '#9e7f66',
        'shuttleGray': '#5c6779',
        'ebonyClay': '#242b37',
        'mirage': '#17192b',
        'codGrey': '#111111',
        'white': '#ffffff'
      },
      fontSize: {
        'headerMobile': '32px',
        'headerTablet': '48px',
        'headerDesktop': '64px',
        'subHeaderMobile': '32px',
        'subHeaderTablet': '40px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
