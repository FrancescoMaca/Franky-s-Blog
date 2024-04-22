import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        folder: 'url(\'/folder.svg\')',
        'folder-filled': 'url(\'/folder-filled.svg\')'
      },
      colors: {
        dark: '#212121',
        gray: '#676767',
        light: '#F8F2FF',
        accent: '#6E4BA6',
      },
      fontFamily: {
        main: ['Roboto Condensed']
      },
      fontSize: {
        mobile: '1rem',
        tablet: '1.5rem'
      }
    },
  },
  plugins: [],
};
export default config;
