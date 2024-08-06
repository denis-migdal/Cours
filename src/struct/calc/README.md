Sheet
    - .nbRows / .nbCols
    - relativeTo(cell: Cell, row_diff: number, col_diff: number)
    - cellPos(Cell) -> [row_id, col_id]
    - getCells(range_str: string): CellList;
    - getCells(row_id: number, col_id: number): CellList;

    - pos2ref(number, number) -> string
    - ref2pos(string) -> [number, number]