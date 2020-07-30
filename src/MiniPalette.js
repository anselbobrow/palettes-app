import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/MiniPaletteStyles';

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors, handleClick } = props;
  const miniSwatches = colors.map(color => (
    <div
      className={classes.miniSwatch}
      style={{ backgroundColor: color.color }}
      key={color.name}
    ></div>
  ));
  return (
    <div onClick={handleClick} className={classes.root}>
      <div className={classes.colors}>{miniSwatches}</div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
