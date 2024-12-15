/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      tablet: '768px',
      desktop: '1440px',
    },
    extend: {
      colors: {
        'orange-true': '#D87D4A',
        'orange-pale': '#fbaf85',
        'white-true': '#FFFFFF',
        'grey-true': '#F1F1F1',
        'black-true': '#000000',
        'blackish': '#101010',
        'grey-white': '#FAFAFA',
        'error-color': '#CD2C2C',
      },
      spacing: {
        'nav-gap-space': '34px',
      }
    }
  },
  plugins: []
};
