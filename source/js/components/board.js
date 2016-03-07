import styles from '../../css/components/board.css';

export default React => {

  const Board = ({ children }, context) => {

    return (
      <div className={styles.base}>

        {children}

      </div>
    );

  };

  return Board;

};
