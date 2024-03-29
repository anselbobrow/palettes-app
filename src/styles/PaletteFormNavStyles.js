import sizes from './sizes';
import { DRAWER_WIDTH as drawerWidth } from '../constants';

export default theme => ({
  root: {
    display: 'flex',
  },

  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: 'row',
    alignItems: 'center',
    height: 64,
  },

  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  titleCenter: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [sizes.down('md')]: {
      display: 'none',
    },
  },

  titleLeft: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    margin: '0 1rem',

    [sizes.down('md')]: {
      display: 'none',
    },
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  hide: {
    display: 'none',
  },

  navBtns: {
    width: '100%',
    margin: '0 0.5rem',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 2,
  },

  button: {
    margin: '0 0.5rem',
  },
});
