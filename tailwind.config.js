/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      textColor: {
        "gray-50": " #F9FAFB",
        "gray-200": "#EAECF0",
        "gray-300": "##D0D5DD",
        "gray-700": "#344054",
        "gray-500": "#667085",
        "gray-900": "#101828",
        "primary-50": "#F9F5FF",
        "primary-300": "#D6BBFB",
        "primary-500": "#9E77ED",
        "primary-600": "#7F56D9",
        "primary-700": "#6941C6;",
        "primary-800": "#53389E",
        "primary-900": "#7F56D9",
      },
      backgroundColor: {
        "primary-50": "#F9F5FF",
        "primary-600": "#7F56D9",
        "gray-50": " #F9FAFB",
      },
      borderColor: {
        "primary-300": "#D6BBFB",
        "primary-600": "#7F56D9",
      },
      accentColor: {
        "primary-600": "#7F56D9",
      },
    },
  },
  plugins: [],
};
