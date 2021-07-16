module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        tStrongCyan: "hsl(172, 67%, 45%)",
        tVeryDarkCyan: "hsl(183, 100%, 15%)",
        tDarkGrayCyan: "hsl(186, 14%, 43%)",
        tGrayCyan: "hsl(184, 14%, 56%)",
        tLightGrayCyan: "hsl(185, 41%, 84%)",
        tLightCyan: "hsl(189, 41%, 97%)",
      },
      fontFamily: {
        'SpaceMono': ['Space Mono', 'monospace'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
