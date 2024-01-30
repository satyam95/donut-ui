import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      base: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        whiteAlpha: {
          50: "rgba(255, 255, 255, 0.04)",
          100: "rgba(255, 255, 255, 0.06)",
          200: "rgba(255, 255, 255, 0.08)",
          300: "rgba(255, 255, 255, 0.16)",
          400: "rgba(255, 255, 255, 0.24)",
          500: "rgba(255, 255, 255, 0.36)",
          600: "rgba(255, 255, 255, 0.48)",
          700: "rgba(255, 255, 255, 0.64)",
          800: "rgba(255, 255, 255, 0.80)",
          900: "rgba(255, 255, 255, 0.92)",
        },
        blackAlpha: {
          50: "rgba(0, 0, 0, 0.04)",
          100: "rgba(0, 0, 0, 0.06)",
          200: "rgba(0, 0, 0, 0.08)",
          300: "rgba(0, 0, 0, 0.16)",
          400: "rgba(0, 0, 0, 0.24)",
          500: "rgba(0, 0, 0, 0.36)",
          600: "rgba(0, 0, 0, 0.48)",
          700: "rgba(0, 0, 0, 0.64)",
          800: "rgba(0, 0, 0, 0.80)",
          900: "rgba(0, 0, 0, 0.92)",
        },
        gray: {
          50: "#F7FAFC",
          100: "#EDF2F7",
          200: "#E2E8F0",
          300: "#CBD5E0",
          400: "#A0AEC0",
          500: "#718096",
          600: "#4A5568",
          700: "#2D3748",
          800: "#1A202C",
          900: "#171923",
        },
        red: {
          50: "#FFF5F5",
          100: "#FED7D7",
          200: "#FEB2B2",
          300: "#FC8181",
          400: "#F56565",
          500: "#E53E3E",
          600: "#C53030",
          700: "#9B2C2C",
          800: "#822727",
          900: "#63171B",
        },
        orange: {
          50: "#FFFAF0",
          100: "#FEEBCB",
          200: "#FBD38D",
          300: "#F6AD55",
          400: "#ED8936",
          500: "#DD6B20",
          600: "#C05621",
          700: "#9C4221",
          800: "#7B341E",
          900: "#652B19",
        },
        yellow: {
          50: "#FFFFF0",
          100: "#FEFCBF",
          200: "#FAF089",
          300: "#F6E05E",
          400: "#ECC94B",
          500: "#D69E2E",
          600: "#B7791F",
          700: "#975A16",
          800: "#744210",
          900: "#5F370E",
        },
        green: {
          50: "#F0FFF4",
          100: "#C6F6D5",
          200: "#9AE6B4",
          300: "#68D391",
          400: "#48BB78",
          500: "#38A169",
          600: "#25855A",
          700: "#276749",
          800: "#22543D",
          900: "#1C4532",
        },
        teal: {
          50: "#E6FFFA",
          100: "#B2F5EA",
          200: "#81E6D9",
          300: "#4FD1C5",
          400: "#38B2AC",
          500: "#319795",
          600: "#2C7A7B",
          700: "#285E61",
          800: "#234E52",
          900: "#1D4044",
        },
        blue: {
          50: "#EBF8FF",
          100: "#BEE3F8",
          200: "#90CDF4",
          300: "#63B3ED",
          400: "#4299E1",
          500: "#3182CE",
          600: "#2B6CB0",
          700: "#2C5282",
          800: "#2A4365",
          900: "#1A365D",
        },
        cyan: {
          50: "#EDFDFD",
          100: "#C4F1F9",
          200: "#9DECF9",
          300: "#76E4F7",
          400: "#0BC5EA",
          500: "#00B5D8",
          600: "#00A3C4",
          700: "#0987A0",
          800: "#086F83",
          900: "#065666",
        },
        purple: {
          50: "#FAF5FF",
          100: "#E9D8FD",
          200: "#D6BCFA",
          300: "#B794F4",
          400: "#9F7AEA",
          500: "#805AD5",
          600: "#6B46C1",
          700: "#553C9A",
          800: "#44337A",
          900: "#322659",
        },
        pink: {
          50: "#FFF5F7",
          100: "#FED7E2",
          200: "#FBB6CE",
          300: "#F687B3",
          400: "#ED64A6",
          500: "#D53F8C",
          600: "#B83280",
          700: "#97266D",
          800: "#702459",
          900: "#521B41",
        },
      },
      boxShadow: {
        "dark-lg":
          "0px 15px 40px 0px rgba(0, 0, 0, 0.40), 0px 5px 10px 0px rgba(0, 0, 0, 0.20), 0px 0px 0px 1px rgba(0, 0, 0, 0.10)",
        inner: "0px 2px 4px 0px rgba(0, 0, 0, 0.06) inset",
        outline: "0px 0px 0px 3px rgba(63, 153, 225, 0.60)",
        "2xl": "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
        xl: "0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)",
        lg: "0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)",
        md: "0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)",
        base: "0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
        sm: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        xs: "0px 0px 0px 1px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
