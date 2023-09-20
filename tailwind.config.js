/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        royalblue: "#1f7cff",
        ghostwhite: "#f5f6fb",
        dimgray: "#575455",
        black: "#000",
        tomato: "#f75c4e",
        gray: "#070f18",
        aliceblue: "#eaecf2",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "31xl": "50px",
        "29xl": "48px",
      },
    },
    fontSize: {
      base: "16px",
      "17xl": "36px",
      xl: "20px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
