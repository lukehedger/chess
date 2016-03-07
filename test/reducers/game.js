import test from 'tape';
import reducer from '../../source/js/reducers/game'
import * as types from '../../source/js/constants/actions';
import * as constants from '../../source/js/constants/game';

test('Reducers:Game - game reducer default output', assert => {

  const state = {
    boardSize: constants.BOARD_SIZE,
    knightPosition: constants.KNIGHT_START_POSITION,
    knightMoves: []
  };

  const actual = reducer(undefined, {});
  const expected = state;

  assert.deepEqual(actual, expected,
    'reducer() should return initial state');

  assert.end();

});

test('Reducers:Game - game reducer drop output', assert => {

  const state = {
    knightPosition: [],
    knightMoves: []
  };

  const actual = reducer({}, {type: types.DROP, knightPosition: [], knightMoves: []});
  const expected = state;

  assert.deepEqual(actual, expected,
    'reducer() should return drop state');

  assert.end();

});
