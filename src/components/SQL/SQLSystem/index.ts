import {LISS} from "@LISS/src/extensions"
import define from "@LISS/src/define";

import {db2} from "@sqlite/SQLite";

import "../SQLOutput";
// import SQLOutput from "../SQLOutput";

const css = require("!!raw-loader!./index.css").default;

// used in slides.
class SQLSystem extends LISS({
    css,
    mode: null
}) {

    //TODO
    //#output: SQLOutput;

    constructor() {
        super();

        const queries = this.content.querySelector('sql-queries')!.textContent!.split(';').slice(0,-1).map( s => s.trim() + ";" );

        let output_html = this.content.querySelector('sql-output');
        if( output_html === null)
            throw new Error('No output specified - auto-create not implemented');

        //TODO...
        //this.#output = LISS.getLISSSync(output_html);
        //this.#output.setQueriesTemplates(queries);

        const vars = [...this.content.querySelectorAll('sql-option')].map( e => JSON.parse(e.textContent!.trim()) );

        const exec_queries = vars.map( v => this.#generate_queries(queries, v) );
        for(let i = 0; i < vars.length; ++i) {
            let results = db2.exec_many(exec_queries[i]);
            //TODO
            //this.#output.addResult(vars[i], results);
            //db2.reset();
            db2.fullReset();
        }
        //TODO
        //this.#output.setActive(+this.getAttribute("active")!);
    }

    static observedAttributes = ["active"];

    override attributeChangedCallback(name: string,
                                      oldval: string|null,
                                      newval: string|null) {
        //TODO
        //this.#output.setActive(+newval!);
    }

    #generate_queries(queries: string[], vars: Record<string, any>) {
        return queries.map(
        q => q.replaceAll(/\$([\w]*)(\s?)/g, (_, name, end_space) => {
            const value = vars[name];

            if( value === undefined )
                return "";

            return `${value}${end_space}`;
        }) );
    }
}

define("sql-system", SQLSystem);