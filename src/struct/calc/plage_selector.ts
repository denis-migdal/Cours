import { CalcSheet, Cell } from "./sheet";

export class PlageSelector {

    static process_event(sheet: CalcSheet, ev: Event) {

        if( ev instanceof MouseEvent ) {
            
            const target = ev.target as HTMLElement;
            if( sheet.states.cell_edit.state === target ) // a cell being edited.
                return false;

            let to_add = new Array<Cell>();

            if(target.tagName === "TH") {

                let col_or_line = target.textContent!;

                if( col_or_line === "" ) {// select everything
                    const end = sheet.pos2ref(sheet.nbRows, sheet.nbCols);
                    col_or_line = `A1:${end}`;
                }

                to_add.push(... sheet.getCells(col_or_line).cells );

            } else if(target.tagName === "TD") {
                to_add.push(target as Cell);
            } else {
                return;
            }

            if( ev.ctrlKey ) {

                if(sheet.selection.has( ...to_add ) )
                    sheet.selection.remove( ...to_add );
                else
                    sheet.selection.add( ...to_add );

                return;
            }

            sheet.selection.clear(); // we add it...
            sheet.selection.add( ...to_add );

        }

        return false;
    }
}