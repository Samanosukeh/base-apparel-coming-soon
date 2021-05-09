module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#ffffff',
      primary: {
        'desaturated-red': 'hsl(0, 36%, 70%)',
        'soft-red': 'hsl(0, 93%, 68%)',
      },
      neutral: {
        'dark-grayish-red': '#413A3A'
      },
      gradient: {
        left: 'hsl(0, 80%, 86%)',
        right: 'hsl(0, 74%, 74%)',
      }
    },
    extend: {
      fontFamily: {
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
      }
    },
    screens: {
      'xs': '375px', // => @media (min-width: 640px) { ... }

      'sm': '640px', // => @media (min-width: 640px) { ... }

      'md': '768px', // => @media (min-width: 768px) { ... }

      'lg': '1024px', // => @media (min-width: 1024px) { ... }

      'xl': '1280px', // => @media (min-width: 1280px) { ... }

      '2xl': '1536px', // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
