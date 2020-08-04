import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/DraggableSwatchStyles';

const DraggableSwatch = SortableElement(({ classes, deleteColor, name }) => {
  const handleClick = () => {
    deleteColor(name);
  };

  return (
    <div className={classes.root}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
      </div>
    </div>
  );
});

export default withStyles(styles)(DraggableSwatch);
