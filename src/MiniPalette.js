import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {};

function MiniPalette(props) {
  const { classes } = props;
  console.log(classes);
  return (
    <div>
      <h1 className={classes.main}>MiniPalette</h1>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
