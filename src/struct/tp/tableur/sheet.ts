import LISS from "LISS";
import { CalcSheet } from "struct/calc/sheet";
import { RENDU } from "../rendu";
import { load } from "struct/calc/loader_ods";

const content = `<calc-sheet ro="true"></calc-sheet>`;

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

            await load(this.#sheet, await RENDU.files["file"].file.arrayBuffer(), this.attrs.sheet! );
            this.host.dispatchEvent(new CustomEvent('change') );
            
        });
        //TODO: get content...     
    }

    get sheet() {
        return this.#sheet;
    }
}

LISS.define('tp-sheet', TPSheet);