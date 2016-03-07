import test from 'tape';
import * as Service from '../../source/js/services/moves'
import * as constants from '../../source/js/constants/game';

test('Services:Moves - Move service calculate() output', assert => {

  const position = constants.KNIGHT_START_POSITION;
  const sample = [ [ 4, 8 ], [ 4, 6 ], [ 8, 8 ], [ 8, 6 ], [ 5, 9 ], [ 5, 5 ], [ 7, 9 ], [ 7, 5 ] ];

  const actual = Service.calculate(position);
  const expected = sample;

  assert.deepEqual(actual, expected,
    'calculate() should return possible moves for knight in given position');

  assert.end();

});
