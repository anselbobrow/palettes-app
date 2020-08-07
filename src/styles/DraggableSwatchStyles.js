import chroma from 'chroma-js';
import sizes from './sizes';

export default {
  root: {
    cursor: 'pointer',
    position: 'relative',
    backgroundColor: props => props.color,
    color: props =>
      chroma.contrast(props.color, 'white') < 4.5 ? 'rgb(0, 0, 0, 0.8)' : 'rgb(255, 255, 255, 0.8)',
  },

  boxContent: {
    position: 'absolute',
    width: '100%',
    left: 0,
    bottom: 0,
    padding: '0.6rem',
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontSize: '0.75rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end', 
  },

  deleteIcon: {
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.3)',
    },
  },
};
