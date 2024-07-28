//INIT
const sqlite3 = (await sqlite3InitModule()).oo1;
const db = new sqlite3.DB("/mydb.sqlite3",'ct');

db.exec('PRAGMA foreign_keys=ON;')

const SQLTables = {
    Users: {db,
            reset: () => {

            db.exec("drop table if exists Users");
            db.exec("CREATE TABLE IF NOT EXISTS Users(ID INTEGER PRIMARY KEY AUTOINCREMENT, Nom TEXT, Prenom TEXT, Age INT) STRICT;");            
            db.exec("INSERT INTO Users VALUES (NULL, 'Doe', 'John',  43);");
            db.exec("INSERT INTO Users VALUES (NULL, 'Durant', 'Paul',  9)");
            db.exec("INSERT INTO Users VALUES (NULL, 'Nescio', 'Nomen',  43)");
        }
    },
    Produits: {db, reset: () => {

            db.exec("drop table if exists Produits");
            db.exec("CREATE TABLE IF NOT EXISTS Produits(Date TEXT, Ref TEXT, Q INT) STRICT;");            
            db.exec("INSERT INTO Produits VALUES ('2023-01-01', 'Gomme', 10);");
            db.exec("INSERT INTO Produits VALUES ('2023-02-23', 'Gomme', 9)");
            db.exec("INSERT INTO Produits VALUES ('2023-06-13', 'Gomme', 24)");
            db.exec("INSERT INTO Produits VALUES ('2023-01-01', 'Crayon', 20);");
            db.exec("INSERT INTO Produits VALUES ('2023-02-23', 'Crayon', 18)");
            db.exec("INSERT INTO Produits VALUES ('2023-06-13', 'Crayon', 50)");

        }
    },
    Joins: {
        db,
        reset: () => {


            db.exec("drop table if exists T1");
            db.exec("CREATE TABLE IF NOT EXISTS T1(ID INTEGER PRIMARY KEY AUTOINCREMENT, T1 TEXT) STRICT;");            
            db.exec("INSERT INTO T1 (T1) VALUES ('1'), ('2'), ('3');");


            db.exec("drop table if exists T2");
            db.exec("CREATE TABLE IF NOT EXISTS T2(ID INT, T2 TEXT, FOREIGN KEY(ID) REFERENCES T1(ID) ) STRICT;");            
            db.exec("INSERT INTO T2 VALUES (1, '1'), (3, '2'), (3, '3'), (NULL, '4');");

        }

    }
};

for(let table in SQLTables )
    SQLTables[table].reset();

window.SQLTables = SQLTables;

export {SQLTables};

// LISS

import LISS from "https://raw.githack.com/denis-migdal/LISS/main/index.js"

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
            padding-top: 20px;
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
    slot:not([name="post"]) {
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
        position: absolute;
        top: 0px;
        left: 0px;

        font-size: 14px;
        line-height: 19px;

        width: 100%;
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
    attributes: ["table"],
}) {

    #result   = "";
    #query    = null;
    #options  = null;
    #input    = null;
    #selected = null;

    #selectQuery = null;

    constructor() {
        super();

        console.warn("upgrade");

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

                opt.append(desc);
            }

            this.#options.append( opt );
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

        console.warn("exec");

        let table_created  = [];
        let table_modified = false;

        // build queries to execute...

        let queries = this.#getQuery().split(';\n').slice(0,-1).map( q => q + ";");
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
                exec_queries.push(query);
                const tb_name = query.slice(13, query.indexOf(" ", 13) );
                exec_queries.push(`SELECT name, type, "notnull", dflt_value, pk, hidden\n        FROM pragma_table_xinfo('${tb_name}');`);
                show_table = false;
                if( ! table_created.includes(tb_name) )
                    table_created.push(tb_name);
                continue;
            }

            if( show_table )
                show();

            exec_queries.push(query);

            show();
            if( table_created.length === 0 )
                table_modified = true; // ?
        }

        const tableconfig = window.SQLTables[this.attrs["table"]];
        const db = tableconfig.db;

        const results = [];

        try {
            
            // Execute query list.
            for(let query of exec_queries) {

                if( query.startsWith("SELECT ") ) {
                    results.push( db.selectObjects(query) );
                    continue;
                }

                db.exec(query);
                results.push(null);
            }

        } catch(e) {

            console.log(e);

            const message = "Error:" + e.message.split(':').slice(2).join(':');
            results.push(message);

        } finally {


            console.warn("update results");

            this.updateResult(exec_queries, results);

            if( table_created.length > 0 )
                for(let tb_name of table_created)
                    db.exec(`DROP TABLE ${tb_name};`);

            if( table_modified )
                tableconfig.reset();
        }
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

        let compare = false;
        if(datas.length > 2 && datas[0] !== null && datas[datas.length-1] !== null)
            compare = true;

        for(let i = 0; i < datas.length; ++i) {

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

                if( ! compare) {
                    result_text += this.#line(row, colsizes);
                    continue;
                }

                // highlight changes
                    
                let compare_to = i === 0 ? datas[datas.length-1] : datas[0];
                let cmp_line = compare_to.find( e => e.ID === data[j].ID); // h4cky

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

                //TODO cmp cols...
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