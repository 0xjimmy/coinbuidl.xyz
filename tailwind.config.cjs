const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        flamingo: '#F2CDCD',
        mauve: '#DDB6F2',
        pink: '#F5C2E7',
        maroon: '#E8A2AF',
        red: '#F28FAD',
        peach: '#F8BD96',
        yellow: '#FAE3B0',
        green: '#ABE9B3',
        teal: '#B5E8E0',
        blue: '#96CDFB',
        sky: '#89DCEB',
        black: '#161320',
        white: '#D9E0EE',
      },
      fontFamily: {
        serif: ['Hind', 'sans-serif'],
      }
    }
  },

  plugins: []
};

module.exports = config;
