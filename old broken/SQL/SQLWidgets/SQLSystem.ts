// @ts-nocheck

import LISS, { ShadowCfg } from "../../LISS/index";
import {db2} from "../SQLite";
import SQLOutput from "./SQLOutput";

const css = `
    :host {

        display: block;

        & sql-queries {
            display: none;
        }
        & sql-option {
            display: none;
        }
    }
`;

class SQLSystem extends LISS({
    attributes: ["active"],
    css,
    shadow: ShadowCfg.NONE,
    dependencies: [LISS.whenDefined('sql-output')]
}) {

    #output: SQLOutput;

    constructor() {
        super();

        const queries = this.content.querySelector('sql-queries')!.textContent!.split(';').slice(0,-1).map( s => s.trim() + ";" );

        let output_html = this.content.querySelector('sql-output');
        if( output_html === null)
            throw new Error('No output specified - auto-create not implemented');

        this.#output = LISS.getLISSSync(output_html);
        this.#output.setQueriesTemplates(queries);

        const vars = [...this.content.querySelectorAll('sql-option')].map( e => JSON.parse(e.textContent!.trim()) );

        const exec_queries = vars.map( v => this.#generate_queries(queries, v) );
        for(let i = 0; i < vars.length; ++i) {
            let results = db2.exec_many(exec_queries[i]);
            this.#output.addResult(vars[i], results);
            //db2.reset();
            db2.fullReset();
        }

        this.#output.setActive(+this.attrs.active!);
    }

    protected override onAttrChanged() {
        this.#output.setActive(+this.attrs.active!);
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


LISS.define("sql-system", SQLSystem);