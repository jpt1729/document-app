/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'theme-1':'#FF6700',
        'theme-2':'#EBEBEB',
        'theme-3':'#C0C0C0',
        'theme-4':'#3A6EA5',
        'theme-5':'#004E98',
      }
    },
  },
  plugins: [],
};
