// tslint:disable:no-expression-statement

import test from 'ava';
import { solver } from './solver';

import { NoSolutionError } from './errors/no-solution.error';
import { GRID_EMPTY_CELL_VALUE } from './grid.const';
import { Grid } from './grid.type';

test('should solve sudoku grid', t => {
  const grid: Grid = [
    [
      5,
      3,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      7,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE
    ],
    [
      6,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      1,
      9,
      5,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE
    ],
    [
      GRID_EMPTY_CELL_VALUE,
      9,
      8,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      6,
      GRID_EMPTY_CELL_VALUE
    ],
    [
      8,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      6,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      3
    ],
    [
      4,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      8,
      GRID_EMPTY_CELL_VALUE,
      3,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      1
    ],
    [
      7,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      2,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      6
    ],
    [
      GRID_EMPTY_CELL_VALUE,
      6,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      2,
      8,
      GRID_EMPTY_CELL_VALUE
    ],
    [
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      4,
      1,
      9,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      5
    ],
    [
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      8,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      7,
      9
    ]
  ];
  const expected: Grid[] = [
    [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ]
  ];

  t.deepEqual(solver(grid), expected);
});

test('should throw NoSolutionError error when no solution could be found for a given grid', t => {
  const grid: Grid = [
    [5, 1, 6, 8, 4, 9, 7, 3, 2],
    [
      3,
      GRID_EMPTY_CELL_VALUE,
      7,
      6,
      GRID_EMPTY_CELL_VALUE,
      5,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE
    ],
    [
      8,
      GRID_EMPTY_CELL_VALUE,
      9,
      7,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      6,
      5
    ],
    [
      1,
      3,
      5,
      GRID_EMPTY_CELL_VALUE,
      6,
      GRID_EMPTY_CELL_VALUE,
      9,
      GRID_EMPTY_CELL_VALUE,
      7
    ],
    [4, 7, 2, 5, 9, 1, GRID_EMPTY_CELL_VALUE, GRID_EMPTY_CELL_VALUE, 6],
    [
      9,
      6,
      8,
      3,
      7,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE,
      5,
      GRID_EMPTY_CELL_VALUE
    ],
    [2, 5, 3, 1, 8, 6, GRID_EMPTY_CELL_VALUE, 7, 4],
    [
      6,
      8,
      4,
      2,
      GRID_EMPTY_CELL_VALUE,
      7,
      5,
      GRID_EMPTY_CELL_VALUE,
      GRID_EMPTY_CELL_VALUE
    ],
    [
      7,
      9,
      1,
      GRID_EMPTY_CELL_VALUE,
      5,
      GRID_EMPTY_CELL_VALUE,
      6,
      GRID_EMPTY_CELL_VALUE,
      8
    ]
  ];

  t.throws(() => solver(grid), NoSolutionError);
});
