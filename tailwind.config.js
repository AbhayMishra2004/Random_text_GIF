/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},

    screens: {
      'mobile': {'min': '320px', 'max': '480px'},

    }

    
  },
  plugins: [],
};
