import {LISS} from "@LISS/src/extensions"
import define from "@LISS/src/define";

import {db2} from "@sqlite/SQLite";
import Script, { raw2html, unindent } from "@LISS/components/code/code-script";

// ensure this is upgraded.
import "../SQLOutput";
import SQLOutput from "../SQLOutput";

const html = require("!!raw-loader!./index.html").default;
const css  = require("!!raw-loader!./index.css" ).default;

const theme  = require("!!raw-loader!@LISS/components/code/Tomorrow.css" ).default;

// used in CM.
class SQLInteractive extends LISS({
    html,
    css: [theme, css],
}) {

    #output = this.content.querySelector<SQLOutput>('sql-output')!;

    #result   = this.content.querySelector<HTMLElement>(".result" )!;
    #query    = this.content.querySelector<HTMLElement>(".query"  )!;
    #options  = this.content.querySelector<HTMLElement>(".options")!;

    #selectQuery: string     |null = null;
    #selected   : HTMLElement|null = null;

    #input      : HTMLElement;
    
    static observedAttributes = ["full-reset", "option"];

    override attributeChangedCallback(name: string,
                                      oldval: string|null,
                                      newval: string|null) {
        if(name !== "option")
            return;

        this.setOption(+newval!);
    }

    setOption(idx: number) {

        for(let i = 0; i < this.#options.children.length; ++i) {
            const opt = this.#options.children[i] as HTMLElement;
            opt.style.setProperty("display", i === idx ? null : "none");
            if( i === idx)
                opt.click();
        }
        this.#query.style.setProperty("display", "none");

        this.host.style.setProperty("flex-wrap", "wrap");
    }

    constructor() {
        super();

        let selectQuery = this.content.querySelector<HTMLSlotElement>("slot[name='select']")!.assignedElements();
        if(selectQuery.length === 1)
            this.#selectQuery  = selectQuery[0].textContent!;

        this.#options.addEventListener("click", (ev) => {

            const target = ev.target as HTMLElement;

            let option = target.closest<HTMLElement>(".option");
            if(option === null)
                return;
            ev.preventDefault();

            if(this.#selected !== null)
                this.#selected.classList.remove('selected');
            option.classList.add('selected');
            this.#selected = option;

            const optsvalues = option.querySelectorAll<HTMLElement>('.value');
            for( let optsvalue of optsvalues) { // not optimal but it works

                const values = this.#input.querySelectorAll(`.value[data-name="${optsvalue.dataset.name}"]`);
                for(let value of values)
                    value.textContent = optsvalue.textContent;
            }

            this.#execQuery( );
        });

        let query = this.content.querySelector<HTMLSlotElement>("slot:not([name])")!.assignedElements()[0];

        let options = this.content.querySelector<HTMLSlotElement>("slot[name='options']")!.assignedElements() as HTMLElement[];

        const raw = unindent(query.textContent!);

        const option_template = document.createElement('template');
        option_template.innerHTML = `<div class="code">${raw2html(raw, "sql")}</div>`;

        const vars = option_template.content.querySelectorAll<HTMLElement>("h");
        for(let i = 0; i < vars.length; ++i) {
            vars[i].classList.add('value');
            vars[i].dataset.name = vars[i].textContent!.slice(1).toLowerCase();
        }

        this.#input = option_template.content.cloneNode(true).childNodes[0] as HTMLElement;
        this.#query.append(this.#input);

        const values = this.#input.querySelectorAll<HTMLElement>('.value');
        for(let value of values) {

            value.toggleAttribute('contenteditable');
            if( ! value.dataset.name!.startsWith('m_') ) {
                value.addEventListener('keypress', (ev) => {

                    if(ev.key === "Enter") {
                        ev.preventDefault();
                        value.blur();
                        return;
                    }
                });
            }

            value.addEventListener('input', (ev) => {

                const target = ev.target as HTMLElement;

                if(this.#selected !== null)
                    this.#selected.classList.remove('selected');
                this.#input.classList.add('selected');
                this.#selected = this.#input;

                const syncinputs = this.#input.querySelectorAll(`.value[data-name="${target.dataset.name}"]`);
                for( let input of syncinputs ) {
                    if(input === ev.target)
                        continue;
                    input.textContent = target.textContent;
                }

                this.#execQuery();
            });
        }

        for(let option of options) {

            const opt = option_template.content.cloneNode(true).childNodes[0] as HTMLElement;
            opt.classList.add("option");

            const values = opt.querySelectorAll<HTMLElement>('.value');
            for(let value of values) {
                const name  = value.dataset.name!;
                value.textContent = option.dataset[ name ]!;
            }

            if( option.textContent !== "") {
                opt.classList.add('withdesc');

                const desc = document.createElement('div');
                desc.classList.add("desc");
                desc.textContent = option.textContent!.trim() + " :";

                opt.firstElementChild!.before(desc);
            }

            this.#options.append( opt );
        }

        const opt_attr = this.getAttribute('option');
        if( opt_attr !== null) {
            this.setOption(+opt_attr);
            return;
        }

        if( this.#selectQuery === null)
            (this.#options.firstElementChild! as HTMLElement).click();
    }

    #getQuery() {

        let query = "";

        for(let elem of this.#input!.childNodes ) {

            const content = elem.textContent;
            if(content === "" && elem instanceof HTMLElement && elem.classList.contains("value")) {
                if( query[query.length-1] === " " )
                    query = query.slice(0,-1);
            }
            query += elem.textContent;
        }

        return query;
    }

    #execQuery() {

        let queries = this.#getQuery().split(';')
                                      .slice(0,-1)
                                      .map( q => q.trim() + ";");

        // build queries to execute...

        const exec_queries = [];
        let show_table = true;

        let show_queries = null;
        if( this.#selectQuery !== null ) {
            show_queries = this.#selectQuery.split(';').slice(0,-1).map( q => q.trim() + ";");
        }

        const show = () => {
            show_table = false;
            if( show_queries === null )
                return;
            exec_queries.push(...show_queries);
        }

        for(let i = 0; i < queries.length; ++i) {
            const query = queries[i];

            if( query.startsWith("SELECT ") || query.startsWith("VALUES ") ) {
                exec_queries.push(query);
                continue;
            }

            if( query.startsWith("CREATE TABLE ") ) {

                let q = "CREATE TABLE ";
                if( query.startsWith("CREATE TABLE IF EXISTS ") )
                    q = "CREATE TABLE IF EXISTS ";

                exec_queries.push(query);
                const tb_name = query.slice(13, query.indexOf(" ", q.length) );
                exec_queries.push(`SELECT name, type, "notnull", dflt_value, pk, hidden\n        FROM pragma_table_xinfo('${tb_name}');`);
                show_table = false;
                continue;
            }

            if( show_table )
                show();

            exec_queries.push(query);

            show();
        }

        let results = db2.exec_many(exec_queries);
        this.updateResult(exec_queries, results);
        
        if( this.getAttribute("full-reset") === "true")
            db2.fullReset();
        else
            db2.reset();
    }


    #hline(colsizes: number[]) {
        let result = '+';
        for(let colsize of colsizes)
            result += "".padEnd(colsize + 2, "-") + '+';

        return result;
    }

    #padRow(row: string[], colsizes: number[]) {
        return row.map( (_, i) => row[i].padEnd(colsizes[i] + 1, " ") );
    }
    #rawline(row: string) {
        let result = "|";
        for(let i = 0; i < row.length; ++i)
            result += " " + row[i] + "|";

        result += "\n";
        return result;

    }

    #line(row: string[], colsizes: number[]) {
        let result = "|";
        for(let i = 0; i < colsizes.length; ++i)
            result += " " + row[i].padEnd(colsizes[i] + 1, " ") + "|";

        result += "\n";
        return result;
    }

    updateResult(queries: any[], datas: any[]) {

        this.#output.setQueriesTemplates(queries); //TODO: not ideal...
        this.#output.addResult({}, datas);

        this.#input.classList.remove('error');
        this.#result.classList.remove('error');
        let content = '';

        for(let i = 0; i < datas.length; ++i) {

            let compare_to = null;

            // correct select
            if( datas[i] !== null && typeof datas[i] !== "string") {

                // compare_to last or first
                for(let j = datas.length - 1; j > i; --j)
                    if( queries[j] === queries[i] && datas[j] !== null && typeof datas[j] !== "string" ) {
                        compare_to = datas[j];
                        break;
                    }
                
                if( compare_to === null) {

                    for(let j = 0; j < i; ++j)
                        if( queries[j] === queries[i] && datas[j] !== null && typeof datas[j] !== "string" ) {
                            compare_to = datas[j];
                            break;
                        }
                }
            }

            const query = queries[i];
            const data  = datas[i];

            content += `sqlite> ${query}\n`;

            if( data === null )
                continue;

            if( typeof data === "string") { // exception

                this.#input.classList.add('error');
                this.#result.classList.add('error');

                content += data;

                continue;
            }

            if( data.length === 0 ) {
                content += `No row returned.\n`;
                continue;
            }

            const headers = Object.keys(data[0]);
            const results = [
                ... data.map( (entry: any) => Object.values(entry).map(value => {
                        if( value === null )
                            return 'N/A';
                        if(typeof value === 'string')
                            return `'${value}'`;
                        return value!.toString()
                    }) )   
            ];
    
            const colsizes = new Array(headers.length);
            for(let i = 0; i < colsizes.length; ++i) {
                colsizes[i] = headers[i].length;
                for(let row of results)
                    if( row[i].length > colsizes[i] )
                        colsizes[i] = row[i].length;
            }
    
    
            let result_text = this.#hline(colsizes) + "\n";
            result_text +=  this.#line(headers, colsizes);
            result_text +=  this.#hline(colsizes) + "\n";
            for(let j = 0; j < results.length; ++j) {

                let row = results[j];

                if( compare_to === null) {
                    result_text += this.#line(row, colsizes);
                    continue;
                }

                // highlight changes

                let key = "ID";
                if( ! (key in data[j]) )
                    key = "name";

                let cmp_line = compare_to.find( (e:any) => e[key] === data[j][key]); // h4cky

                row = this.#padRow(row, colsizes);

                if( cmp_line === undefined) {
                    row = row.map( (c:any) => `<strong><em>${c}</em></strong>`);
                    let line = this.#rawline(row);
                    result_text += `<span class="highlight">${line}</span>`;
                    continue;
                }

                for(let i = 0; i < headers.length; ++i) {
                    const colname = headers[i];

                    if( data[j][colname] !== cmp_line[colname])
                        row[i] = `<span class=highlight><em><strong>${row[i]}</strong></em></span>`;
                    
                }

                result_text += this.#rawline(row);
            }
            result_text +=  this.#hline(colsizes);
    
            content += result_text + '\n';   
        }

        this.#result.innerHTML = content;

        this.#lastDatas = datas;

        this.host.dispatchEvent( new CustomEvent("change", {detail: {
            datas
        }}) );
    }

    #lastDatas: any[]|null = null;

    get lastDatas() {
        return this.#lastDatas;
    }
}

define("sql-interactive", SQLInteractive)