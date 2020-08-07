import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableSwatch from './DraggableSwatch';
import styles from './styles/DraggableSwatchListStyles';

const DraggableSwatchList = SortableContainer(props => {
  const { classes, colors, deleteColor } = props;

  return (
    <div className={classes.root}>
      {colors.map((color, i) => (
        <DraggableSwatch
          key={color.name}
          index={i}
          color={color.color}
          name={color.name}
          deleteColor={deleteColor}
        />
      ))}
    </div>
  );
});

export default withStyles(styles)(DraggableSwatchList);
