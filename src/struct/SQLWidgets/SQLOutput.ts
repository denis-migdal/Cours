import LISS, { ShadowCfg } from "LISS";

const hljs = require('highlight.js');

const css = `
    :host {
        display: block;

        & .sql_query span.vars {
            background-color: gold;
        }

        & .sql_result span.highlight {
            background-color: gold;
            font-weight: bold;
            font-style: italic;
        }

        & :is(.sql_query, .sql_result) {

            /* overlay */
            display: grid;
            grid-template-columns: 1fr;

            & > * {
                margin: 0;
                grid-row-start: 1;
                grid-column-start: 1;
            }

            & > :not(.active) {
                visibility: hidden
            }
        }

        /*&.error {
            background-color: rgb(255, 160, 122) !important;
        }*/
    }
`;

export type SelectResult = Record<string, any>[];
export type Result = null|string|SelectResult;

export default class SQLOutput extends LISS({
    shadow: ShadowCfg.NONE,
    css
}){

    #queries = [...this.content.querySelectorAll(".sql_query" )];
    #results = [...this.content.querySelectorAll(".sql_result")];

    setActive(id: number) {

        for(let elem of this.content.querySelectorAll('.active') )
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
            return hljs.highlight(query, { language: "sql" }).value;
        });
    }

    // [Query]
    addResult( vars: Record<string, string>, results: Result[] ) {

        for(let query_out of this.#queries) {

            const id = +query_out.getAttribute('q')! - 1;
            
            let query = document.createElement("pre");
            let query_txt = this.#queriesTemplates[id];

            // vars placeholders
            query_txt = query_txt.replaceAll(/__([\w]*)/g, (_, name) => {

                let content = vars[name] ?? " ";
                return content.split("\n").map( e => `<span class="vars">${e}</span>`).join("\n");
            });

            //if sqlite>...
            query.innerHTML = "sqlite> " + query_txt.replaceAll("\n", "\n   ...> ") + "\n";

            query_out.append(query);
        }

        for(let result_out of this.#results) {

            const id = +result_out.getAttribute('q')! - 1;

            //TODO: highlight cells/lines/?
            let result = document.createElement("pre");
            result.innerHTML = this.#buildResult(results, id);

            result_out.append(result);
        }
    }

    //TODO: compare...
    #buildResult(_results: Result[], id: number) {

        const result = _results[id];

        const query = this.#queriesTemplates[id];
        
        let compare_to = null;
        if( Array.isArray(result) ) {
            compare_to = _results.filter( (v, i) => {
                if( i === id)
                    return false;
                return query === this.#queriesTemplates[i];
            }) as SelectResult[];
        }

        if(result === null)
            return "";

        if( ! Array.isArray(result) ) { // no update for now...
            this.host.classList.add('error');
            return result;
        }

        if( result.length === 0 ) {
            return "No row returned.\n";
        }

        const headers = Object.keys(result[0]);
        const results = [
            ... result.map(entry => Object.values(entry).map(value => {
                    if( value == null )
                        return 'N/A';
                    if(typeof value === 'string')
                        return `'${value}'`;
                    return value.toString()
                }) )   
        ];

        const colsizes = new Array(headers.length);
        for(let i = 0; i < colsizes.length; ++i) {
            colsizes[i] = headers[i].length;
            for(let row of results)
                if( row[i].length > colsizes[i] )
                    colsizes[i] = row[i].length;
        }

        const output = new OutputBuilder(colsizes);

        output.addHLine()
              .addLine (headers)
              .addHLine();

        let key = "ID";
        if( compare_to !== null && ! (key in result[0]) )
            key = "name"; // dirty...

        for(let j = 0; j < results.length; ++j) {
            let row = results[j];

            let highlights: boolean|Array<number> = false;
            if( compare_to !== null) {

                let lines = compare_to.map( res => res!.find( l => l[key] === result[j][key] ) );

                highlights = lines.includes(undefined);

                if( ! highlights ) {
                    highlights = [];
                    for(let i = 0; i < headers.length; ++i) {
                        const colname = headers[i];
                        if( lines.some( l => l![colname] !== result[j][colname] ) )
                            highlights.push( i );
                    }

                    if( ! highlights.length )
                        highlights = false;
                }
            }

            output.addLine(row, highlights);
        }

        output.addHLine();
        
        return output.html;
    }
}

LISS.define("sql-output", SQLOutput);

// TODO: highlight...
class OutputBuilder {

    #colsizes: number[];
    #html    : string = "";

    constructor(colsizes: number[]) {
        this.#colsizes = colsizes;
    }

    #addPaddedLine(line: string[], vsep = "|") {
        this.#html += `${vsep}${line.join(vsep)}${vsep}\n`;
    }

    #padLine(line: string[], char: string = " ") {

        let result = new Array(this.#colsizes.length);
        for(let i = 0; i < result.length; ++i)
            result[i] = char + (line[i] ?? "").padEnd(this.#colsizes[i] + 1, char);

        return result;
    }

    addLine(line: string[], highlight:boolean|number[] = false) {

        const row = this.#padLine(line); // cell highlight here.

        if( Array.isArray(highlight) )
            for(let idx of highlight)
                row[idx] = `<span class="highlight">${row[idx]}</span>`;

        let row_txt = `|${row.join('|')}|`;
        
        if( highlight === true)
            row_txt = `<span class="highlight">${row_txt}</span>`;

        this.#html += `${row_txt}\n`;

        return this;
    }

    addHLine() {
        this.#addPaddedLine( this.#padLine([], "-"), "+" );

        return this;
    }

    get html() {
        return this.#html;
    }
}