module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Roboto"],
      serif: ["Georgia"],
    },
    extend: {
      backgroundImage: {
        hero: "url('/mountaintop2.jpg')",
        quote: "url('/mountain2.jpg')",
      },
      colors: {
        highlight1: "#e9322e",
        highlight2: "#45433e",
      },
    },
  },
  plugins: [],
};
