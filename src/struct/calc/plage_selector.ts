import { CalcSheet, Cell } from "./sheet";

export class PlageSelector {

    #updateSelection() {

        let selected_cells = this.#sheet.getRange( this.#orig_pos, this.#final_pos ).cells;

        this.#sheet.selection.clear(); // we add it...

        if( this.#isCtrl ) {

            // restore initial state...
            this.#sheet.selection.add(...this.#prev_selection);

            //TODO only orig_target...
            if(this.#sheet.selection.has( ...selected_cells ) )
                this.#sheet.selection.remove( ...selected_cells );
            else
                this.#sheet.selection.add( ...selected_cells );

            return;
        }

        console.log(selected_cells);
        this.#sheet.selection.add( ...selected_cells );
    }

    #isCtrl        !: boolean;
    #sheet          : CalcSheet;
    #orig_target   !: HTMLElement;
    #orig_pos      !: [number, number];
    #final_pos     !: [number, number];
    #prev_selection!: Cell[];

    #ev2pos(ev: MouseEvent): [number,number] {

        const cols = [...this.#sheet.tbody.children[0].children];
        let col_id;
        for(col_id = cols.length-1; col_id >= 0; --col_id) {
            if( ev.clientX >= cols[col_id].getBoundingClientRect().x )
                break;
        }
        
        const rows = [...this.#sheet.tbody.children].map( e => e.children[0] );
        let row_id;
        for(row_id = rows.length-1; row_id >= 0; --row_id) {
            if( ev.clientY >= rows[row_id].getBoundingClientRect().y )
                break;
        }

        return [row_id, col_id];
    }

    constructor(sheet: CalcSheet) {

        this.#sheet = sheet;

        const main = document.querySelector('main')!;

        const on_mouse_move = (ev: MouseEvent) => {

            this.#final_pos = this.#ev2pos(ev);

            this.#updateSelection();
        };

        // @ts-ignore
        sheet.content.addEventListener("mousedown", (ev:MouseEvent) => {

            const target = ev.target as HTMLElement;
            if( sheet.states.cell_edit.state === target )  // a cell being edited.
                return;
            if( ! ["TH", "TD"].includes( target.tagName ) )// ...
                return;

            if( target.tagName === "TH" && target.textContent === "" ) { // mousemove does nothing.

                this.#sheet.selection.clear();
                const ref = `A1:${this.#sheet.pos2ref(this.#sheet.nbRows, this.#sheet.nbCols)}`;
                this.#sheet.selection.add( ...this.#sheet.getCells(ref).cells );

                return;
            }

            this.#isCtrl         = ev.ctrlKey;
            this.#orig_target    = target;
            this.#orig_pos       = this.#ev2pos(ev); // Can be TH...
            this.#final_pos      = this.#orig_pos;
            this.#prev_selection = sheet.selection.cells.slice();

            this.#updateSelection();
            main.addEventListener('mousemove', on_mouse_move);

            document.addEventListener('mouseup', () => {
                main.removeEventListener('mousemove', on_mouse_move);
            }, {once: true});
            
        });
    }
}