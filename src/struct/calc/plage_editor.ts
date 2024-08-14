//TODO: webpack config...
import LISS from "../../../libs/LISS";
import { CalcSheet, CellList, defaultFormat } from "./sheet";

//TODO: syntax highlight ;)

const css = `
    :host {
        display: block;
        line-height: 1rem;
        width: 100%;

        & pre {
            text-align: left;
            width: 100%;
            box-sizing: border-box;
            padding: 4px;
            margin: 0;
            background-color: white;
            border: 1px solid #c0c0c0;
            min-height: calc( 1rem + 8px + 2px );
            color: black;
            font-size: 10pt;
            font-family: 'Liberation Sans';
        }
    }
`;

export class PlageFormula extends LISS({
    css
}) {

    #input = document.createElement('pre');

    constructor() {
        super();

        this.content.append( this.#input );
        this.#input.toggleAttribute('contenteditable');

        this.#input.addEventListener('keydown', (ev) => {
            if(ev.code !== 'Enter')
                return;

            ev.stopImmediatePropagation();
            ev.preventDefault();

            const selected = this.#sheet.getCells(this.#input.textContent!).cells;

            this.#sheet.selection.clear();
            this.#sheet.selection.add( ...selected );

            this.#sheet.cursor.clear();
            this.#sheet.cursor.add( selected[0] );

            this.#input.blur();
        })

        //TODO....
        this.#input.toggleAttribute('disabled');
        /*this.#input.addEventListener('change', () => {

        });*/
    }

    #sheet!: CalcSheet;

    syncTo(sheet: CalcSheet) {

        this.#sheet = sheet;

        const selection = sheet.selection;

        selection.addEventListener('change', (_: any) => {

            let cell = selection.cells;
            if( cell.length === 0) {
                this.#input.textContent = "";
                return;
            }

            if( cell.length === 1 ) {
                this.#input.textContent = cellpos2cellname( ...sheet.cellPos(cell[0]) );
                return;
            }

            let cells = cell.map( c => this.#sheet.cellPos(c) ).sort( (a,b) => {
                if( a[0] !== b[0] )
                    return a[0] - b[0];
                return a[1] - b[1];
            });

            let min = cells[0];
            let max = cells[cells.length - 1];

            let nb_cols = max[1] - min[1] + 1;

            for(let i = 0; i < cells.length; ++i) {

                if( cells[i][0] !== Math.floor(i/nb_cols)+min[0] && cells[i][1] !== (i%nb_cols)+ min[1] ) {
                    this.#input.textContent = "";
                    return;
                }
            }

            this.#input.textContent = `${this.#sheet.pos2ref(...min)}:${this.#sheet.pos2ref(...max)}`;
        });
    }
}

export function cellpos2cellname(rowid: number, colid: number) {
    return `${String.fromCharCode(65+colid-1)}${rowid}`;
}

LISS.define('calc-plage', PlageFormula);