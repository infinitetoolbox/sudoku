import cloneDeep from 'lodash.clonedeep';

import { NoSolutionError } from './errors/no-solution.error';
import {
  GRID_COLS_BOXES_NUMBER,
  GRID_COLS_NUMBER,
  GRID_EMPTY_CELL_VALUE,
  GRID_ROWS_BOXES_NUMBER,
  GRID_ROWS_NUMBER
} from './grid.const';
import { Grid, GridCellValue } from './grid.type';

export function solver(grid: Grid): Grid[] {
  const grids = solve(grid);
  if (grids.length === 0) {
    throw new NoSolutionError();
  }

  return grids;
}

export function solve(grid: Grid): Grid[] {
  const [row, column] = findNextEmptyCell(grid);
  if (row === -1 || column === -1) {
    return [grid];
  }

  let grids: Grid[] = [];
  let newGrid: Grid;
  for (let value: GridCellValue = 1; value <= 9; value++) {
    if (!isValid(grid, row, column, value as GridCellValue)) {
      continue;
    }

    newGrid = cloneDeep(grid);
    newGrid[row][column] = value as GridCellValue;

    grids = grids.concat(solve(newGrid));
  }

  return grids;
}

function isUsedInRow(grid: Grid, row: number, value: GridCellValue): boolean {
  return range(GRID_COLS_NUMBER).some(i => grid[row][i] === value);
}

function isUsedInColumn(
  grid: Grid,
  column: number,
  value: GridCellValue
): boolean {
  return range(GRID_ROWS_NUMBER).some(i => grid[i][column] === value);
}

function isUsedInBox(
  grid: Grid,
  row: number,
  column: number,
  value: GridCellValue
): boolean {
  const firstRow = Math.floor(row / GRID_ROWS_BOXES_NUMBER) * 3;
  const lastRow = firstRow + GRID_ROWS_BOXES_NUMBER;
  const firstColumn = Math.floor(column / GRID_COLS_BOXES_NUMBER) * 3;
  const lastColumn = firstColumn + GRID_COLS_BOXES_NUMBER;

  for (let i = firstRow; i < lastRow; i++) {
    for (let j = firstColumn; j < lastColumn; j++) {
      if (grid[i][j] === value) {
        return true;
      }
    }
  }

  return false;
}

function isValid(
  grid: Grid,
  row: number,
  column: number,
  value: GridCellValue
): boolean {
  return (
    !isUsedInRow(grid, row, value) &&
    !isUsedInColumn(grid, column, value) &&
    !isUsedInBox(grid, row, column, value)
  );
}

function findNextEmptyCell(grid: Grid): [number, number] {
  for (let i = 0; i < GRID_ROWS_NUMBER; i++) {
    for (let j = 0; j < GRID_COLS_NUMBER; j++) {
      if (grid[i][j] === GRID_EMPTY_CELL_VALUE) {
        return [i, j];
      }
    }
  }

  return [-1, -1];
}

function range(n: number): number[] {
  return Array.from(new Array(n).keys());
}
