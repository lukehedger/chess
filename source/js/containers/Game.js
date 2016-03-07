import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// actions
import * as GameActions from '../actions/game';

// components
import createBoard from '../components/board';
import createSquare from '../components/square';
import createKnight from '../components/knight';

class GameContainer extends Component {

  componentWillMount() {

    const { gameActions, knightPosition } = this.props;
    const { getMoves } = gameActions;

    // init board with starting available moves
    getMoves(knightPosition);

  }

  render() {

    const { knightPosition } = this.props;

    const Board = createBoard(React);
    const squares = this.setupSquares([]);
    const Knight = createKnight(React);

    return (
      <Board>
        {squares}
        <Knight position={knightPosition} />
      </Board>
    );

  }

  renderSquare(i, x, y) {

    const { knightPosition, knightMoves, gameActions } = this.props;
    const { getMoves } = gameActions;

    const Square = createSquare(React);

    const fill = (x + y) % 2 === 1;
    const available = knightMoves.some( move => {
      return x === move[0] && y === move[1];
    });

    return (
      <Square key={i} onDrop={getMoves} available={available} fill={fill} x={x} y={y} />
    );

  }

  setupSquares(squares) {

    const { boardSize } = this.props;
    const renderSquare = this.renderSquare.bind(this);

    const maxSquares = boardSize[0] * boardSize[1];
    let i = 0;

    while (i < maxSquares) {
      let x = i % 8;
      let y = Math.floor(i / 8);
      squares.push(renderSquare(i, x, y));
      i++
    }

    return squares;

  }

}

function mapStateToProps(state) {

  const { boardSize, knightPosition, knightMoves } = state.game;

  return {
    boardSize,
    knightPosition,
    knightMoves
  };

}

function mapDispatchToProps(dispatch) {

  // group actions on `this.props`
  return {
    gameActions: bindActionCreators(GameActions, dispatch)
  };

}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
