import {db2} from "./SQLite";

// LISS

import LISS from "LISS";

const content = `
    <slot name="select"></slot>
    <slot name="options"></slot>
    <slot></slot>
    <slot name="pre"></slot>
    <div class="choices">
        <div class="options"></div>
        <div class="query"></div>
    </div>
    <pre class="hljs"><code><div class="result"></div></code></pre>
    <div class="spacing"></div>
    <slot name="post"></slot>`;

const css = `
    :host([option]) pre {
        margin: 0;
    }

    :host {
        font-size: 14px;
        line-height: 19px;
    }

    .selected, .highlight {
        background-color: gold;
    }
    :host .spacing {
        flex-grow: 1;
    }
    :host .query pre.hljs {
        padding-right: 0;

        & > code > div {
            padding-right: 0;
        }
    }
    :host pre.hljs {

        margin: 2px;

        & > code > div {
           padding: 8px;
        }
    }
    .options pre {
        position: relative;
        padding-bottom: 4px;
        padding-right: 25px;

        &.withdesc {
            padding-top: 0px;
        }
    }
    .options pre::after {
        content: ">";
        position: absolute;
        right: 0px;
        top: 0px;
        height: 100%;
        width: 25px;
        background-color: orange;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
    .options pre:hover {
        opacity: 0.5;
    }
    :host {
        /*display: inline-flex;*/
        display: flex;
        gap: 5px;
    }
    slot:not([name="post"]):not([name="pre"]) {
        display: none;
    }
    span.value {
        border: 1px solid black;
        padding-left: 5px;
        padding-right: 5px;
    }

    .option {
        cursor: pointer;
    }

    .error {
        background-color: #FFA07A !important;
    }

    .query > pre .value {
        position: relative;
        margin-right: 13px;
    }

    .query > pre .value::after {

        right: -18px;
        position: absolute;
        content: "🖉";
    }

    :host > pre.hljs {
        /*flex-grow: 1;*/
    }

    :host .desc {
        margin-left: -0.5em;
        /*position: absolute;
        top: 0px;
        left: 0px;*/

        font-size: 14px;
        line-height: 19px;

        width: calc(100% + 0.5em);
        border-left: none;
        border-top: none;
        padding-left: 5px;
        font-style: italic;

        box-sizing: border-box;

        background-color: lightgray;
        opacity: 0.6;
    }

    pre {
        padding: 0.5em;
        background-color: white;
        color: black;
    }

    code {
        font-family: Menlo, Monaco, Consolas, "Droid Sans Mono", "Courier New", monospace, "Droid Sans Fallback";
    }

    /* Tomorrow Theme */
    /* http://jmblog.github.com/color-themes-for-google-code-highlightjs */
    /* Original theme - https://github.com/chriskempson/tomorrow-theme */

    /* Tomorrow Comment */
    .hljs-comment,
    .hljs-quote {
        color: #8e908c;
    }

    /* Tomorrow Red */
    .hljs-variable,
    .hljs-template-variable,
    .hljs-tag,
    .hljs-name,
    .hljs-selector-id,
    .hljs-selector-class,
    .hljs-regexp,
    .hljs-deletion {
        color: #c82829;
    }

    /* Tomorrow Orange */
    .hljs-number,
    .hljs-built_in,
    .hljs-builtin-name,
    .hljs-literal,
    .hljs-type,
    .hljs-params,
    .hljs-meta,
    .hljs-link {
        color: #f5871f;
    }

    /* Tomorrow Yellow */
    .hljs-attribute {
        color: #eab700;
    }

    /* Tomorrow Green */
    .hljs-string,
    .hljs-symbol,
    .hljs-bullet,
    .hljs-addition {
        color: #718c00;
    }

    /* Tomorrow Blue */
    .hljs-title,
    .hljs-section {
        color: #4271ae;
    }

    /* Tomorrow Purple */
    .hljs-keyword,
    .hljs-selector-tag {
        color: #8959a8;
    }

    .hljs {
        display: block;
        overflow-x: auto;
        color: #4d4d4c;
        padding: 0.5em;
    }

    .hljs-emphasis {
        font-style: italic;
    }

    .hljs-strong {
        font-weight: bold;
    }
`;

/*
const styles = [...document.querySelectorAll('style')].map(s => {
    let style = new CSSStyleSheet();
    style.replaceSync(s.textContent);
    return style;
});*/

class SQLInteractive extends LISS({
    content,
    css: [css],
    attributes: ["full-reset", "option"]
}) {

    #result   = "";
    #query    = null;
    #options  = null;
    #input    = null;
    #selected = null;

    #selectQuery = null;

    onAttrChanged(name, _old, value) {
        if(name !== "option")
            return;

        setOption(+value);
    }

    setOption(idx) {

        for(let i = 0; i < this.#options.children.length; ++i) {
            const opt = this.#options.children[i];
            opt.style.setProperty("display", i === idx ? null : "none");
            if( i === idx)
                opt.click();
        }
        this.#query.style.setProperty("display", "none");

        this.host.style.setProperty("flex-wrap", "wrap");

    }

    constructor() {
        super();

        this.#result   = this.content.querySelector(".result");
        this.#query    = this.content.querySelector(".query");
        this.#options  = this.content.querySelector(".options");
 
        let selectQuery = this.content.querySelector("slot[name='select']").assignedElements();
        if(selectQuery.length === 1)
            this.#selectQuery  = selectQuery[0].textContent;

        this.#options.addEventListener("click", (ev) => {

            let option = ev.target.closest(".option");
            if(option === null)
                return;
            ev.preventDefault();

            if(this.#selected !== null)
                this.#selected.classList.remove('selected');
            option.classList.add('selected');
            this.#selected = option;

            this.lastVars = {};

            const optsvalues = option.querySelectorAll('.value');
            for( let optsvalue of optsvalues) { // not optimal but it works

                this.lastVars[optsvalue.dataset.name] = optsvalue.textContent;

                const values = this.#input.querySelectorAll(`.value[data-name="${optsvalue.dataset.name}"]`);
                for(let value of values)
                    value.textContent = optsvalue.textContent;
            }

            this.#execQuery( );
        });

        let query = this.content.querySelector("slot:not([name])").assignedElements()[0];
        //TODO: find & replace...

        this.#input = query.cloneNode(true);

        this.#query.append(this.#input);

        let options = this.content.querySelector("slot[name='options']").assignedElements();

        const childNodes = [...this.#input.children[0].childNodes];

        for(let i = 0; i < childNodes.length; ++i) {

            const node = childNodes[i];
            if( node.nodeType !== Node.TEXT_NODE)
                continue;

            let text = node.textContent;
            let start = text.indexOf('$');
            if( start === -1)
                continue;

            let result = [];

            while( start !== -1) { // not optimal but it works...
                
                let end = text.slice(start+1).search(/[\W]/);
                
                if( end === -1) {
                    console.log( text, start, text.slice(start+1) );
                    throw new Error('End of SQL variable not found (you likely used a reserved keyword)');
                }
                end += start + 1;

                const value = document.createElement("span");
                value.classList.add("value");
                value.dataset.name = text.slice(start+1, end).toLowerCase();

                result.push(... text.slice(0, start), value );

                text = text.slice(end);
                start = text.indexOf('$');
            }

            result.push(text);

            node.replaceWith(...result);
        }

        let option_template = this.#input.cloneNode(true);

        const values = this.#input.querySelectorAll('.value');
        for(let value of values) {

            value.toggleAttribute('contenteditable');
            if( ! value.dataset.name.startsWith('m_') ) {
                value.addEventListener('keypress', (ev) => {

                    if(ev.key === "Enter") {
                        ev.preventDefault();
                        value.blur();
                        return;
                    }
                });
            }


            value.addEventListener('input', (ev) => {

                if(this.#selected !== null)
                    this.#selected.classList.remove('selected');
                this.#input.classList.add('selected');
                this.#selected = this.#input;

                const syncinputs = this.#input.querySelectorAll(`.value[data-name="${ev.target.dataset.name}"]`);
                for( let input of syncinputs ) {
                    if(input === ev.target)
                        continue;
                    input.textContent = ev.target.textContent;
                }

                this.#execQuery();
            });
        }

        for(let option of options) {

            const opt = option_template.cloneNode(true);
            opt.classList.add("option");

            const values = opt.querySelectorAll('.value');
            for(let value of values) {
                const name  = value.dataset.name;
                value.textContent = option.dataset[ name ];
            }

            if( option.textContent !== "") {
                opt.classList.add('withdesc');

                const desc = document.createElement('div');
                desc.classList.add("desc");
                desc.textContent = option.textContent.trim() + " :";

                opt.firstElementChild.before(desc);
            }

            this.#options.append( opt );
        }

        if( this.attrs.option !== null) {
            this.setOption(+this.attrs.option);
            return;
        }

        if( this.#selectQuery === null)
            this.#options.firstElementChild.click();
    }

    #getQuery() {

        let query = "";
        for(let elem of this.#input.firstElementChild.childNodes ) {

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


        let queries = this.#getQuery().split(';\n').slice(0,-1).map( q => q + ";");

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

            if( query.startsWith("SELECT ") ) {
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
        
        if( this.attrs["full-reset"] === "true")
            db2.fullReset();
        else
            db2.reset();
    }


    #hline(colsizes) {
        let result = '+';
        for(let colsize of colsizes)
            result += "".padEnd(colsize + 2, "-") + '+';

        return result;
    }

    #padRow(row, colsizes) {
        return row.map( (_, i) => row[i].padEnd(colsizes[i] + 1, " ") );
    }
    #rawline(row) {
        let result = "|";
        for(let i = 0; i < row.length; ++i)
            result += " " + row[i] + "|";

        result += "\n";
        return result;

    }

    #line(row, colsizes) {
        let result = "|";
        for(let i = 0; i < colsizes.length; ++i)
            result += " " + row[i].padEnd(colsizes[i] + 1, " ") + "|";

        result += "\n";
        return result;
    }

    updateResult(queries, datas) {

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
                ... data.map(entry => Object.values(entry).map(value => {
                        if( value === null )
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

                let cmp_line = compare_to.find( e => e[key] === data[j][key]); // h4cky

                console.warn(compare_to === datas[i]);

                row = this.#padRow(row, colsizes);

                if( cmp_line === undefined) {
                    row = row.map( c => `<strong><em>${c}</em></strong>`);
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

    #lastDatas = null;

    get lastDatas() {
        return this.#lastDatas;
    }
}

LISS.define("sql-interactive", SQLInteractive)