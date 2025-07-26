// OLD
// @ts-nocheck

import LISS from "../../LISS/index";
import { CalcSheet } from "@Cours/struct/calc/sheet";
//import { RENDU } from "../rendu";
import { load } from "@Cours/struct/calc/loader_ods";

const content = `<calc-sheet ro="true" showgrid="false"></calc-sheet>`;

export class TPSheet extends LISS({
    attributes: ["sheet"],
    content,
    dependencies: [ LISS.whenDefined('calc-sheet') ]
}) {

    #sheet: CalcSheet;

    constructor() {
        super();

        this.#sheet = LISS.qsSync<CalcSheet>("calc-sheet", this.content);

        RENDU.addEventListener('change', async (ev) => {

            await load(this.#sheet, await RENDU.files["file"].content, this.attrs.sheet! );
            this.host.dispatchEvent(new CustomEvent('change') );
            
        });
        //TODO: get content...     
    }

    get sheet() {
        return this.#sheet;
    }
}

LISS.define('tp-sheet', TPSheet);