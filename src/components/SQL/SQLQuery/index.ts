import {LISS, WithBare, WithContent, WithInput} from "@LISS/src/extensions"
import define from "@LISS/src/define";
import { keepSpaces } from "@LISS/components/code/code-script";

const css    = require("!!raw-loader!./index.css").default;
const theme  = require("!!raw-loader!@LISS/components/code/Tomorrow.css" ).default;

export default class SQLQuery extends LISS({css: [theme, css]},
                                            WithBare,
                                            WithContent,
                                            WithInput<string>) {

    constructor() {
        super();

        this._input.listen( () => {

            const value = this._input.value;
            this.content.textContent = "sqlite> ";
            if( value === null)
                return;

            console.warn(value);
            this.content.innerHTML += keepSpaces( value.replaceAll("\n", "\n   ...> ") + "\n" );
        });
    }
}

define("sql-query", SQLQuery);