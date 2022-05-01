module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9677ce",
        grey: "#d4d4d8",
        border: "#999999",
        error: "#d93a3a",
        white: "#fff",
      },
      borderRadius: {
        DEFAULT: ".25rem",
      },
    },
  },
  plugins: [],
};
