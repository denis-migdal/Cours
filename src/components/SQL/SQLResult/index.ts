import {LISS, WithBare, WithContent, WithInput} from "@LISS/src/extensions"
import define from "@LISS/src/define";
import { keepSpaces } from "@LISS/components/code/code-script";

export type SelectResult = Record<string, any>[];
export type Result = null|string|SelectResult;

const css = require("!!raw-loader!./index.css").default;

export default class SQLResult extends LISS({css},
                                            WithBare,
                                            WithContent,
                                            WithInput<Result>) {

    constructor() {
        super();

        this._input.listen( () => {

            const value = this._input.value;

            this.content.innerHTML = keepSpaces(this.#buildResult(value));
        });
    }


    #buildResult(result: Result) {

        if( result == null)
            return "";

        const sim_to     = undefined;
        const compare_to = null;
/*
    //TODO
        const query = this.#queriesTemplates[id];
        
        let sim_to = undefined;
        if( similar_to !== undefined)
            sim_to = _results[similar_to] as SelectResult;

        let compare_to = null; // same query
        if( Array.isArray(result) ) {
            compare_to = _results.filter( (v, i) => {
                if( i === id)
                    return false;
                return query === this.#queriesTemplates[i];
            }) as SelectResult[];

            if( compare_to.length === 0)
                compare_to = null;
        }*/

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

        let cols_highlight = [];
        if( sim_to !== undefined) {
            for(let i = 0; i < headers.length; ++i)
                if( headers[i] in sim_to[0])
                    cols_highlight.push( i );

            if( cols_highlight.length === headers.length)
                cols_highlight.length = 0;
        }

        const output = new OutputBuilder(colsizes, cols_highlight);

        output.addHLine()
              .addLine (headers)
              .addHLine();

        let key = headers[0]; //dirty...

        for(let j = 0; j < results.length; ++j) {
            let row = results[j];

            let highlights: boolean|Array<number> = false;

            /*if( sim_to !== undefined && cols_highlight.length === 0)
                highlights = sim_to.find( l => l[key] === result[j][key] ) !== undefined;*/

            if( compare_to !== null) {
/*
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
                }*/
            }

            output.addLine(row, highlights);
        }

        output.addHLine();
        
        return output.html;
    }

}

// TODO: highlight...
class OutputBuilder {

    #colsizes : number[];
    #colshight: number[];
    #html    : string = "";

    constructor(colsizes: number[], colshight: number[] = []) {
        this.#colsizes = colsizes;
        this.#colshight = colshight;
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

        for(let idx of this.#colshight)
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

define("sql-result", SQLResult);