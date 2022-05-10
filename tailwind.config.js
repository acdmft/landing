module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      fontFamily: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
      fontSize: {
        '10xl': '10rem'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [ "dracula", "corporate","emerald",]
  }
};
