// OLD
// @ts-nocheck

import LISS from "../../LISS/index";

const hljs = require('highlight.js');

// @ts-ignore
import css from "!!raw-loader!../code.css";
import { TPSheet } from "./sheet";
import { Formula } from "@Cours/struct/calc/formula_parser";

export class CellFromSheet extends LISS({
    attributes: ["cell", "sheet"],
    css: [css, `:host{ vertical-align:middle; } :host pre { display: inline-block; margin: 0; padding: 2px;}`]
}) {

    constructor() {
        super();

        const cell_content = document.createElement("pre");
        this.content.append(`${this.attrs.cell!} : `, cell_content);

        let sheet = document.querySelector(`tp-sheet[sheet="${this.attrs.sheet!}"]`)!

        sheet.addEventListener('change', (ev) => {
            const cell = LISS.getLISSSync<TPSheet>(sheet).sheet.getRange(this.attrs.cell!).cells[0];
            
            if( cell.rawContent instanceof Formula ) {
                
                cell_content.innerHTML = hljs.highlight(cell.rawContent.toString(), { language: "excel" }).value;
                return;
            }

            cell_content.textContent = cell.textContent;
        });
        //TODO: get content...
    }


}

LISS.define('tp-cell_from_sheet', CellFromSheet);