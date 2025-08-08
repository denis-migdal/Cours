import {LISS} from "@LISS/src/extensions"
import define from "@LISS/src/define";

import { CalcSheet } from "../CalcSheet";
//import { load } from "./ods_loader";

const html = require('!!raw-loader!./index.html').default;

export class TPSheet extends LISS({html}) {

    static observedAttributes = ["sheet"]

    #sheet = this.content.querySelector<CalcSheet>("calc-sheet")!;

    constructor() {
        super();

        this.getAttribute('sheet');

        /*RENDU.addEventListener('change', async (ev) => {

            await load(this.#sheet, await RENDU.files["file"].content, this.attrs.sheet! );
            this.host.dispatchEvent(new CustomEvent('change') );
            
        });*/  
    }

    get sheet() {
        return this.#sheet;
    }
}

define('tp-sheet', TPSheet);