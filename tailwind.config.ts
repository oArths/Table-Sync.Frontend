import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--tajawal)"],
      },
      screens: {
        "laptop-md": "1024px",
        "laptop-lg": "1280px",
        "desktop": "1366px",
        "desktop-lg": "1440px",
        "desktop-xl": "1600px",
        "ultrawide": "1920px",
        "4k": "2560px",
      },
    },
    colors: {
      primary100: "rgb(19, 19, 20)",
      primary200: "rgb(31, 31, 33)",
      primary300: "rgb(40, 40, 42)",
      primary400: "rgb(73, 73, 75)",
      primary350: "rgba(40, 40, 42, 0.5)",
      primary430: "rgba(59, 59, 61, 0.3)",

      black100: "rgb(19, 19, 20)",
      black200: "rgb(31, 31, 33)",
      black300: "rgb(40, 40, 42)",
      black400: "rgb(73, 73, 75)",
      black350: "rgba(40, 40, 42, 0.5)",
      black430: "rgba(59, 59, 61, 0.3)",

      white: "rgb(255, 255, 255)",
      black: "rgb(0, 0, 0)",

      gray100: "rgb(73, 72, 72)",
      gray200: "rgb(99, 99, 99)",
      gray300: "rgb(144, 144, 144)",
      gray400: "rgb(180, 180, 180)",
      gray500: "rgb(212, 212, 212)",

      blue100: "rgb(0, 10, 21)",
      blue200: "rgb(0, 111, 238)",
      blue270: "rgba(0, 111, 238, 0.7)",

      green100: "rgb(24, 59, 42)",
      green200: "rgb(23, 186, 94)",
      green370: "rgba(23, 214, 106, 0.7)",

      yellow100: "rgb(68, 52, 29)",
      yellow200: "rgb(245, 165, 36)",
      yellow270: "rgba(245, 165, 36, 0.7)",

      red100: "rgb(238, 18, 18)",
      red200: "rgb(211, 47, 47)",
      red300: "rgb(255, 76, 76)",

      pink100: "rgb(68, 23, 41)",
      pink200: "rgb(242, 64, 127)",
    },
  },
  plugins: [],
};
export default config;
