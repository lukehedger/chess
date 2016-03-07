import { DROP } from '../constants/actions';
import * as Moves from '../services/moves';

export function drop (position, moves) {
  return {
    type: DROP,
    knightPosition: position,
    knightMoves: moves
  }
}

export function getMoves (coord) {

  // get available moves using service
  const knightMoves = Moves.calculate(coord);

  // thunk!
  return (dispatch, getState) => {
    return dispatch(drop(coord, knightMoves));
  }

}
