module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#FF6363",
        secondary: "#4100FB",
        tertiary: "#FFD15C",
        blacked: "#070717",
        "gray-dark": "#696466",
        "gray-light": "#CBCBCB",
        "gray-lighter": "#F7F7F9",
        success: "#00845C",
        error: "#C70030",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};