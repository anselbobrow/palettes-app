export default {
  Navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh',
  },

  logo: {
    marginRight: '1rem',
    padding: '0 1rem',
    fontSize: '1.4rem',
    background: '#eceff1',
    fontFamily: 'Roboto, sans-serif',
    height: '100%',
    display: 'flex',
    alignItems: 'center',

    '& a': {
      color: 'black',
      textDecoration: 'none',
    },
  },

  sliderContainer: {
    '& span': {
      fontVariantNumeric: 'tabular-nums',
    },
  },

  slider: {
    minWidth: 200,
    maxWidth: 340,
    width: '30vw',
    margin: '0 10px',
    display: 'inline-block',

    '& .rc-slider-track': {
      background: 'transparent',
    },

    '& .rc-slider-rail': {
      height: 8,
    },

    '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover': {
      background: 'green',
      outline: 'none',
      border: '2px solid green',
      boxShadow: 'none',
      width: 13,
      height: 13,
      marginTop: '-3px',
    },
  },

  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem',
  },
};
