/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 1s linear",
      },
      screens: {
        xs: "320px",
      },
      colors: {
        theme: {
          amazonBG: "#131921",
          amazonYC: "#f3a847",
          amazonBT: "#f0c14b",
          purple1000: "#1c1650",
          purple900: "#2d2689",
          purple800: "#3225ae",
          purple700: "#3e2ad8",
          purple600: "#4836f5",
          purple: "#5A57FF",
          purple400: "#757dff",
          purple300: "#9caaff",
          purple200: "#c2cdff",
          purple100: "#dde4ff",
          purple50: "#ecf0ff",
        },
      },
    },
  },
  plugins: [],
};
