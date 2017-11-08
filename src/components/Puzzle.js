import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

/**
 * Shuffles the passed array and returns a new one
 *
 * @param  {Array} a
 * @return {Array}
 */
function shuffle(a) {
  const b = a.slice();

  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }

  return b;
}

class Puzzle extends React.Component {
  constructor(props) {
    super(props);

    const { level } = props;
    const cells = level * level;

    this.state = { positions: [...Array(cells).keys()] };
  }

  componentDidMount() {
    const { positions } = this.state;

    this.setState({ positions: shuffle(positions) });
  }

  onSwap(sourcePosition, dropPosition) {
    const oldPositions = this.state.positions.slice();
    const newPositions = [];
    let done = true;
    let p = 0;

    for (let i in oldPositions) {
      let value = oldPositions[i];
      let newValue = value;

      if (value === sourcePosition) {
        newValue = dropPosition;
      } else if (value === dropPosition) {
        newValue = sourcePosition;
      }

      newPositions.push(newValue);

      if (newValue !== p) {
        done = false;
      }

      p = p + 1;
    }

    this.setState({ positions: newPositions });

    if(done) {
      this.props.onDone();
    }
  }

  renderSquares() {
    const { image, size, level } = this.props;
    const { positions } = this.state;

    const squares = positions.map((i) => {
      return (
        <Cell
          key={i}
          size={size}
          image={image}
          level={level}
          position={i}
          onSwap={this.onSwap.bind(this)}
        />
      );
    })

    return squares;
  }

  render() {
    const { size } = this.props;

    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: 0,
          width: `${size}px`,
          height: `${size}px`
        }}>
        {this.renderSquares()}
      </div>
    );
  }
};

Puzzle.propTypes = {
  image: PropTypes.string.isRequired,
  size: PropTypes.number,
  level: PropTypes.number,
  onDone: PropTypes.func,
};

Puzzle.defaultProps = {
  size: 300,
  level: 3,
  onDone: () => {},
};

export default DragDropContext(HTML5Backend)(Puzzle);
