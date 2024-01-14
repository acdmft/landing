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
      },
      // keyframes: {
      //   slideInFromLeft: {
      //     '0%, 100%': { transform: 'translateX' }
      //   } 
      // },
      // animation: {
      //   slideInFromLeft: 'slide-in-from-left'
      // }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [ "dracula", "corporate","emerald",]
  }
};
