import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import chroma from 'chroma-js';

const styles = {
  root: {
    cursor: 'pointer',
    position: 'relative',
    backgroundColor: props => props.color,
    color: props =>
      chroma.contrast(props.color, 'white') < 4.5 ? 'rgb(0, 0, 0, 0.8)' : 'rgb(255, 255, 255, 0.8)',
  },

  boxContent: {
    position: 'absolute',
    width: '100%',
    left: 0,
    bottom: 0,
    padding: '0.6rem',
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontSize: '0.75rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  deleteIcon: {
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.3)',
    },
  },
};

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
