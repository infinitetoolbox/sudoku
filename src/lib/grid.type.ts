export type GridEmptyCellValue = 0;
export type GridCellValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type Grid = Array<Array<GridEmptyCellValue | GridCellValue>>;
