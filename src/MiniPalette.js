import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/MiniPaletteStyles';

class MiniPalette extends Component {
  constructor() {
    super();

    this.openDialog = this.openDialog.bind(this);
  }

  openDialog(e) {
    e.stopPropagation();
    this.props.openDialog(this.props.id);
  }

  render() {
    const { classes, paletteName, emoji, colors, handleClick } = this.props;

    const miniSwatches = colors.map(color => (
      <div
        className={classes.miniSwatch}
        style={{ backgroundColor: color.color }}
        key={color.name}
      ></div>
    ));

    return (
      <div onClick={handleClick} className={classes.root}>
        <div className={classes.delete}>
          <DeleteIcon
            className={classes.deleteIcon}
            onClick={this.openDialog}
          />
        </div>
        <div className={classes.colors}>{miniSwatches}</div>
        <h5 className={classes.title}>
          {paletteName}
          <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
