Sheet
    - .nbRows / .nbCols
    - relativeTo(cell: Cell, row_diff: number, col_diff: number)

    - if possible, use [pos] internally... (use TH textContent to convert?)

    - cellPos(Cell) -> [row_id, col_id]

    - getRange(from_pos, to_pos);

    - getCells(range_str: string): CellList;
    - getCells(row_id: number, col_id: number): CellList;

    - pos2ref(number, number) -> string
    - ref2pos(string) -> [number, number]