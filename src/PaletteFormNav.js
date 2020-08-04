import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import SavePaletteForm from './SavePaletteForm';
import styles from './styles/PaletteFormNavStyles';

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);

    this.state = { formState: 'closed' };

    this.showFormName = this.showFormName.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.showEmojiPicker = this.showEmojiPicker.bind(this);
  }

  showFormName() {
    this.setState({ formState: 'name' });
  }

  showEmojiPicker() {
    this.setState({ formState: 'emoji' });
  }

  closeForm() {
    this.setState({ formState: 'closed' });
  }

  render() {
    const { classes, open, savePalette, handleDrawerOpen, palettes } = this.props;
    const { formState } = this.state;

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
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Create Palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <Link to="/">
              <Button className={classes.button} color="secondary" variant="contained">
                Go Back
              </Button>
            </Link>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={this.showFormName}
            >
              Save Palette
            </Button>
          </div>
        </AppBar>
        {formState !== 'closed' && (
          <SavePaletteForm
            showFormName={this.showFormName}
            showEmojiPicker={this.showEmojiPicker}
            closeForm={this.closeForm}
            savePalette={savePalette}
            palettes={palettes}
            formState={formState}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
