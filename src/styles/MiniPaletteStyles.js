export default {
  root: {
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover svg': {
      opacity: 1,
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

  delete: {},

  deleteIcon: {
    color: 'white',
    backgroundColor: '#eb3d30',
    width: 20,
    height: 20,
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
    opacity: 0,
    transition: 'all 0.3s ease-in-out',
  },
};
