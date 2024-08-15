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
            this.#input.textContent = selection.plage_name ?? "";
        });
    }
}

LISS.define('calc-plage', PlageFormula);