import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableSwatch from './DraggableSwatch';

const DraggableSwatchList = SortableContainer(({ colors, deleteColor }) => {
  return (
    <div
      style={{
        height: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 20%)',
        gridTemplateRows: 'repeat(4, 25%)',
      }}
    >
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

export default DraggableSwatchList;
