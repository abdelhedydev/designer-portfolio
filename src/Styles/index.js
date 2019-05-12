const theme = {
  colors: {
    white: '#FFFF',
    black: '#0000',
    red: '#C42228',
    grey: '#404040',

  },

  breakPoints: {
    desktop: {
      type: 'desktop',
      minWidth: 1024,
    },
    tablet: {
      type: 'tablet',
      minWidth: 768,
      maxWidth: 1023.5,
    },
    mobile: {
      type: 'mobile',
      maxWidth: 767.5,
      minWidth: 320,
    },
  },
};

export default theme;
