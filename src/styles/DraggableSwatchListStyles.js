import sizes from './sizes';

export default {
  root: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 20%)',
    gridTemplateRows: 'repeat(4, 25%)',
    
    [sizes.down('lg')]: {
      gridTemplateColumns: 'repeat(4, 25%)',
      gridTemplateRows: 'repeat(5, 20%)',
    },

    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2, 50%)',
      gridTemplateRows: 'repeat(10, 10%)',
    },

    [sizes.down('xs')]: {
      gridTemplateColumns: '100%',
      gridTemplateRows: 'repeat(20, 5%)',
    },
  },
};
