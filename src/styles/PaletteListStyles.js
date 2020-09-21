import sizes from './sizes';
const miniPaletteWidth = 240;

export default {
  root: {
    position: 'fixed',
    width: '100vw',
    overflow: 'scroll',
    backgroundColor: 'blue',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',

    '& h1': {
      color: 'white',
      fontSize: '2rem',
      margin: '1rem 0',
    },

    '& a': {
      textDecoration: 'none',
    },
  },

  container: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },

  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: `repeat(3, ${miniPaletteWidth}px)`,
    [sizes.down('md')]: {
      gridTemplateColumns: `repeat(2, ${miniPaletteWidth}px)`,
    },
    [sizes.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
    },
    gap: '2rem',
  },

  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& a, a:visited': {
      color: 'white',
    },
  },

  react: {
    [sizes.down('xs')]: {
      display: 'none',
    },
  },

  newPalette: {
    color: 'white',
    border: '1px solid rgb(255, 255, 255, 0.8)',
    textDecoration: 'none',
  },
};
