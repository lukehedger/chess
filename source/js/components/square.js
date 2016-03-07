import { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from '../../css/components/square.css';

const cx = classNames.bind(styles);

export default React => {

  const Square = ({ onDrop, available, fill, x, y }, context) => {

    Square.onDrop = onDrop;
    Square.coordinates = [x, y];
    Square.available = available;

    let className = cx({
      base: true,
      available: available,
      filled: fill && !available
    });

    return (
      <div className={className} onDragOver={dragover} onDrop={drop}></div>
    );

  };

  const dragover = e => {

    e.preventDefault();

  }

  const drop = e => {

    e.preventDefault();

    // prevent illegal moves
    if (!Square.available) return;

    Square.onDrop(Square.coordinates);

  }

  Square.propTypes = {
    available: PropTypes.bool.isRequired,
    fill: PropTypes.bool.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  };

  return Square;

};
