import sizes from './sizes';

export default {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexFlow: 'column',
  },

  swatches: {
    height: '90%',
    width: '100%',
    display: 'flex',
    alignItems: 'stretch',
    alignContent: 'start',
    flexWrap: 'wrap',
  },

  goBack: {
    flex: '20% 0',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'black',
    textDecoration: 'none',

    '& button': {
      padding: 0,
      width: 100,
      height: 30,
      cursor: 'pointer',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      fontSize: '1rem',
      color: 'white',
      textTransform: 'uppercase',
      border: 'none',
      outline: 'none',
      transition: '0.5s',
    },

    [sizes.down('lg')]: {
      flex: '25% 0',
      height: '33.33%',
    },

    [sizes.down('md')]: {
      flex: '50%',
      height: '20%',
    },

    [sizes.down('xs')]: {
      flex: '100%',
      height: '10%',
    },
  },
};
