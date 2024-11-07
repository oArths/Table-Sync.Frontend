import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeOutUp: {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
        },
        colorOutUp: {
          "0%": {
            opacity: "0",
            backgroundColor: "rgb(40, 40, 42, 0.0)",
          },
          "100%": {
            opacity: "1",
            backgroundColor: "rgb(40, 40, 42, 0.5)",
          },
        },
        colorInDown: {
          "0%": {
            opacity: "1",
            backgroundColor: "rgb(40, 40, 42, 0.5)",
          },
          "100%": {
            opacity: "0",
            backgroundColor: "rgb(40, 40, 42, 0.0)",
          },
        },
      },
      animation: {
        fadeInDown: "fadeInDown 0.2s ease-out forwards",
        fadeOutUp: "fadeOutUp 0.2s ease-out forwards",
        colorOutUp: "colorOutUp 0.2s ease-out forwards",
        colorInDown: "colorInDown 0.3s ease-out forwards",
      },
      fontFamily: {
        sans: ["var(--tajawal)"],
      },
      screens: {
        laptop: "1000px",
        "laptop-md": "1024px",
        "laptop-lg": "1280px",
        desktop: "1366px",
        "desktop-lg": "1440px",
        "desktop-xl": "1600px",
        ultrawide: "1920px",
        "4k": "2560px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
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
      white: "rgb(245, 245, 245)",
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
  plugins: [require("tailwindcss-animate")],
};
export default config;
