// Moves service - calcuates available moves for the Knight

import { KNIGHT_MOVES } from '../constants/game';

export function calculate(currentPosition) {

  const { [0]: x, [1]: y } = currentPosition;

  let moves = KNIGHT_MOVES.map( (el, i) => {
    return [ x + el[0], y + el[1] ]
  });

  return moves;

}
