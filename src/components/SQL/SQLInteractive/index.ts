import {getInput, getOutput, LISS} from "@LISS/src/extensions"
import define from "@LISS/src/define";

import {db2} from "@sqlite/SQLite";

// ensure this is upgraded.
import "../SQLOutput";
import "../SQLSelector";

import SQLOutput, { Result, SQLExecutionResult } from "../SQLOutput";
import { SelectedQueries } from "../SQLSelector";

const css  = require("!!raw-loader!./index.css" ).default;

// used in CM.
class SQLInteractive extends LISS({
    html: "<slot/>",
    css,
}) {
    
    constructor() {
        super();

        this.#input_signal.listen( () => this.#onInputChange() );
        this.#onInputChange();
    }

    #input  = this.host.querySelector<HTMLElement>('sql-selector')!;
    #input_signal = getOutput<SelectedQueries>(this.#input);
    #onInputChange() {
        const value = this.#input_signal.value;

        if( value === null)
            return;

        let results = db2.exec_many(value.queries);

        this.updateResult(value.html, results);
        
        if( this.getAttribute("full-reset") === "true")
            db2.fullReset();
        else
            db2.reset();
    }

    static observedAttributes = ["full-reset", "option"];

    #output = this.host.querySelector<SQLOutput>('sql-output')!;
    #outputSignal = getInput<SQLExecutionResult>(this.#output);
    updateResult(queries: string[], results: Result[]) {

        this.#outputSignal.value = {
            queries,
            results
        };
    }
}

define("sql-interactive", SQLInteractive)