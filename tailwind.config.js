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
        highlight1: "#e74c32",
      },
    },
  },
  plugins: [],
};
