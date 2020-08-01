import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flex: '20% 0',
    height: '25%',
    cursor: 'pointer',
  },
};

const DraggableSwatch = props => {
  return (
    <div className={props.classes.root} style={{ backgroundColor: props.color }}>
      {props.name}
    </div>
  );
};

export default withStyles(styles)(DraggableSwatch);
