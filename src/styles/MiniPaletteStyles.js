export default {
  root: {
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer',
    },
  },

  colors: {
    backgroundColor: '#dae1e4',
    borderRadius: '5px',
    overflow: 'hidden',
    height: '150px',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'stretch',
  },

  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position: 'relative',
  },

  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem',
  },

  miniSwatch: {
    flex: '20% 0',
    height: '25%',
  },
};
