import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import DraggableSwatch from './DraggableSwatch';

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flex: 1,
    paddingTop: 64,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    height: '100vh',
    display: 'flex',
    flexWrap: 'wrap',
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class NewPaletteForm extends Component {
  constructor() {
    super();
    this.state = { open: true, currentColor: 'white', colors: [], newName: '' };

    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.addNewColor = this.addNewColor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', value =>
      this.state.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );

    ValidatorForm.addValidationRule('isColorUnique', value =>
      this.state.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  handleDrawerOpen() {
    this.setState({ open: true });
  }

  handleDrawerClose() {
    this.setState({ open: false });
  }

  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }

  addNewColor() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newName,
    };
    this.setState({ colors: [...this.state.colors, newColor] });
  }

  handleSubmit(e) {
    this.setState({ newName: e.target.value });
  }

  savePalette() {
    const newName = 'New Test Palette';

    const newPalette = {
      paletteName: newName,
      id: newName.toLowerCase().replace(/ /g, '-'),
      emoji: '🥒',
      colors: this.state.colors,
    };

    this.props.savePalette(newPalette);
    this.props.history.push('/');
  }

  render() {
    const { classes } = this.props;
    const { open, currentColor, colors, newName } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Persistent drawer
            </Typography>
            <Button variant="contained" color="primary" onClick={this.savePalette}>
              Save Palette
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <Typography variant="h4">Design Your Palette</Typography>
          <div>
            <Button variant="contained" color="secondary">
              Clear Palette
            </Button>
            <Button variant="contained" color="primary">
              Random Color
            </Button>
          </div>
          <ChromePicker color={currentColor} onChange={this.updateCurrentColor} />
          <ValidatorForm onSubmit={this.addNewColor}>
            <TextValidator
              value={newName}
              onChange={this.handleSubmit}
              validators={['required', 'isColorNameUnique', 'isColorUnique']}
              errorMessages={['Enter a color name', 'Name already taken', 'Color already used']}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: currentColor }}
              type="submit"
            >
              Add Color
            </Button>
          </ValidatorForm>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />

          {colors.map(color => (
            <DraggableSwatch color={color.color} name={color.name} />
          ))}
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(NewPaletteForm);
