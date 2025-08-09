import {getInput, getOutput, LISS, WithBare, WithContent, WithOutput} from "@LISS/src/extensions"
import define from "@LISS/src/define";

import {db2} from "@sqlite/SQLite";

// ensure this is upgraded.
import "../SQLOutput";
import "../SQLSelector";

import SQLOutput, { Result, SQLExecutionResult } from "../SQLOutput";
import { SelectedQueries } from "../SQLSelector";

const css  = require("!!raw-loader!./index.css" ).default;

export class SQLInteractive extends LISS({
                                            html: "<slot/>",
                                            css,
                                        },
                                        WithBare, WithContent, WithOutput<SQLExecutionResult>) {
    
    constructor() {
        super();

        const sql_output = this.host.querySelector<SQLOutput>('sql-output')!;
        getInput<SQLExecutionResult>(sql_output).source = this._output;

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

        this._output.value = { queries: value.html, results };
        
        if( this.getAttribute("full-reset") === "true")
            db2.fullReset();
        else
            db2.reset();
    }

    static observedAttributes = ["full-reset", "option"];
}

define("sql-interactive", SQLInteractive)