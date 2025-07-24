import {getInput, LISS} from "@LISS/src/extensions"
import define from "@LISS/src/define";
import { hl } from "@LISS/components/code/hl";

const css = require("!!raw-loader!./index.css").default;

export type SelectResult = Record<string, any>[];
export type Result = null|string|SelectResult;

import '../SQLQuery';
import SQLQuery from "../SQLQuery";

import '../SQLResult';
import SQLResult from "../SQLResult";

// can't use shadow, else won't be able to build...
export default class SQLOutput extends LISS({ css, html: "<slot/>" }){

    #queries = [...this.host.querySelectorAll<HTMLElement>("sql-query")];
    #results = [...this.host.querySelectorAll<HTMLElement>("sql-result")];

    #dynamic = this.#queries.length + this.#results.length === 0;

    setActive(id: number) {

        throw "called";

        for(let elem of this.host.querySelectorAll('.active') )
            elem.classList.remove('active');

        for(let query  of this.#queries)
            query.children [id]?.classList.add('active');
        for(let result of this.#results)
            result.children[id]?.classList.add('active');
    }

    #queriesTemplates!: string[];
    setQueriesTemplates( queries: string[] ) {
        this.#queriesTemplates = queries.map( query => {

            // code highlight
            query = query.replaceAll("$", "__");
            return hl(query, "sql");
        });

        if( ! this.#dynamic )
            return;

        const nb_q = this.#queriesTemplates.length;
        this.#queries.length = this.#results.length = nb_q;
        let content = new Array( nb_q * 2 );

        for(let i = 0; i < this.#queriesTemplates.length; ++i) {
            // todo similar_to="?"
            const sql_query = new SQLQuery();
            const sql_result = new SQLResult();

            sql_query.setAttribute ("q", `${i+1}`);
            sql_result.setAttribute("q", `${i+1}`);

            content[2*i  ] = this.#queries[i] = sql_query;
            content[2*i+1] = this.#results[i] = sql_result;
        }

        this.host.replaceChildren(...content);
    }

    // [Query]
    addResult( vars: Record<string, string>, results: Result[] ) {

        for(let query_out of this.#queries) {

            const id = +query_out.getAttribute('q')! - 1;


            let query_txt = this.#queriesTemplates[id];

            // vars placeholders
            query_txt = query_txt.replaceAll(/__([\w]*)/g, (_, name) => {

                let content = vars[name] ?? " ";
                return content.split("\n").map( e => `<span class="vars">${e}</span>`).join("\n");
            });

            getInput(query_out).value = query_txt;
        }

        for(let result_out of this.#results) {

            const id = +result_out.getAttribute('q')! - 1;

            //TODO: inputs cache...
            getInput(result_out).value = results[id];

            //TODO: highlight cells/lines/? (use meta ?)
            /*
            let sim_to = undefined;
            if( result_out.hasAttribute("similar_to") )
                sim_to = +result_out.getAttribute("similar_to")! - 1;

            result_out.innerHTML = this.#buildResult(results, id, sim_to);
            */
        }
    }

    //TODO: compare...
}

define("sql-output", SQLOutput);