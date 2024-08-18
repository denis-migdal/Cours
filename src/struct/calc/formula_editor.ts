//TODO: webpack config...
import LISS from "../../../libs/LISS";
import { formatRaw, Formats } from "./format";
import { CalcSheet, Cell } from "./sheet";

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


export class CalcFormula extends LISS({
    css
}) {

    #input = document.createElement('pre');
    #sheet  !: CalcSheet;
    #cur_cell: Cell|null = null;
    #onInput: (ev: Event) => void;

    constructor() {
        super();

        this.content.append( this.#input );

        this.#input.addEventListener('focusout', () => {

            if( this.#cur_cell === null )
                return;

            //this.#sheet.cursor.content = this.#input.textContent!;
            this.#sheet.states.cell_edit.state = null;
        });

        this.#input.addEventListener('focusin', () => {

            if( this.#cur_cell === null )
                return;

            this.#sheet.states.cell_edit.state = this.#cur_cell;
            //this.#cur_cell!.textContent = this.#input.textContent!;
        });

        this.#input.addEventListener('input', () => {
            if( this.#cur_cell === null )
                return;

            this.#cur_cell!.textContent = formatRaw(this.#cur_cell, this.#input.textContent! );
            this.#cur_cell.dispatchEvent( new CustomEvent('input', {detail: true}) );
        });

        this.#onInput = (ev: Event) => {

            //@ts-ignore
            if( ev.detail === true)
                return;
            this.#input.textContent = formatRaw( this.#cur_cell!, this.#cur_cell!.textContent! );
        };
    }

    syncTo(sheet: CalcSheet) {

        this.#sheet = sheet;
        const cursor = this.#sheet.cursor;

        sheet.host.addEventListener('update', () => {
            // @ts-ignore
            this.#input.textContent = formatRaw(cursor.firstCell );
        })

        cursor.addEventListener('change', () => {

            const cells = cursor.cells;

            this.#input.toggleAttribute('contenteditable', ! sheet.isRO );

            if( cells.length === 0) {

                if( this.#cur_cell !== null )
                    this.#cur_cell.removeEventListener('input', this.#onInput);
                this.#cur_cell = null;

                this.#input.textContent = "";
                return;
            }

            this.#cur_cell = cells[0];
            this.#cur_cell.addEventListener('input', this.#onInput);
            
            this.#input.textContent = formatRaw( this.#cur_cell );
        });
    }

}

LISS.define('calc-formula', CalcFormula);