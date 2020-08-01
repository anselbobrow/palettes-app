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
  },

  container: {
    maxWidth: `calc(3 * (${miniPaletteWidth}px + 4rem))`,
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
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

  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: `repeat(3, ${miniPaletteWidth}px)`,
    gap: '2rem',
  },

  newPalette: {
    color: 'white',
    border: '1px solid rgb(255, 255, 255, 0.8)',
  },
};
