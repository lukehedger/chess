import { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from '../../css/components/knight.css';

const cx = classNames.bind(styles);

export default React => {

  const Knight = ({ position }, context) => {

    const { [0]: x, [1]: y } = position;

    // figure out if the knight is on a black square
    const outline = (x + y) % 2 === 1;

    // calc absolute position based on `position`
    let style = {
      top: `${y * 12.5}%`,
      left: `${x * 12.5}%`
    };

    let className = cx({
      base: true,
      outline: outline
    });

    return (
      <div className={className} style={style} draggable>

        <div className={styles.icon}>&#9816;</div>

      </div>
    );

  };

  Knight.propTypes = {
    position: PropTypes.array.isRequired
  };

  return Knight;

};
