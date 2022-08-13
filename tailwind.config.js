/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        myShadow1: "4px -5px 0 0 #fff",
        myShadow2: "-4px -5px 0 0 #fff",
        myShadowNavigation: "0 0 10px 6px #00000020",
        cartShadow: "0 0 9px 0px #00000020",
      },
    },
  },
  plugins: [],
};
