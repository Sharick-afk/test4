const options = require("./config"); //options from config.js

const allPlugins = {
  typography: require("@tailwindcss/typography"),
  forms: require("@tailwindcss/forms"),
  containerQueries: require("@tailwindcss/container-queries"),
};

const plugins = Object.keys(allPlugins)
  .filter((k) => options.plugins[k])
  .map((k) => {
    if (k in options.plugins && options.plugins[k]) {
      return allPlugins[k];
    }
  });

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  darkMode: "class",
  theme: {
    extend: {
      maxWidth: {
        "container": "1056px",
        "container2": "1232px",
      },
      fontSize: {
        "title": "43px",
        "title2": "34px",
        "text": "15px",
      },
      colors: {
        "border-gray": "#D9D9D9",
        "gray": "#808080",
      },
      lineHeight: {
        "title": "48px",
        "text": "20px",
      },
      fontFamily: {
        "main": "TT Hoves",
      }
    },

  },
  plugins: plugins,
};