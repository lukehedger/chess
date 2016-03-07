import { DROP } from '../constants/actions';
import { BOARD_SIZE, KNIGHT_START_POSITION } from '../constants/game';

const initialState = {
  boardSize: BOARD_SIZE,
  knightPosition: KNIGHT_START_POSITION,
  knightMoves: []
};

export default function game(state = initialState, action) {

  switch (action.type) {

    case DROP:
      return Object.assign({}, state, {
        knightPosition: action.knightPosition,
        knightMoves: action.knightMoves
      });

    default:
      return state;

  }

}
