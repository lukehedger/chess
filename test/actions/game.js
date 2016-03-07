import test from 'tape';
import * as actions from '../../source/js/actions/game';
import * as types from '../../source/js/constants/actions';

test('Actions:Game - drop action output', assert => {

  const knightPosition = [];
  const knightMoves = [];

  const actual = actions.drop(knightPosition, knightMoves);
  const expected = {type: types.DROP, knightPosition, knightMoves};

  assert.deepEqual(actual, expected,
    'drop() should create action to process dropped data');

  assert.end();

});
