import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        stapel: ['Stapel', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'dotted-line': 'linear-gradient(to bottom, #ccc 50%, rgba(255, 255, 255, 0) 0%)',
      },
      backgroundSize: {
        'dotted': '2px 20px',
      },
      boxShadow: {
        'massive': '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // customize this as needed
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;
