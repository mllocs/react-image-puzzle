import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import Piece from './Piece';

const Cell = (props) => {
  const { image, size, level, position, connectDropTarget, isOver } = props;
  const side = (size / level);
  const x = (position % level) * side;
  const y = Math.floor(position / level) * side;

  return connectDropTarget(
    <div className='piece'>
      <Piece
        position={position}
        image={image}
        size={size}
        side={side}
        x={x}
        y={y}
        isOver={isOver}
      />

      <style>{`
        .piece:hover {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
};

const squareTarget = {
  drop(props, monitor) {
    const item = monitor.getItem();
    const sourcePosition = item.position;
    const dropPosition = props.position;

    props.onSwap(sourcePosition, dropPosition);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

export default DropTarget('piece', squareTarget, collect)(Cell);
