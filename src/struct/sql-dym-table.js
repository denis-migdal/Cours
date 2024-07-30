import LISS from "https://raw.githack.com/denis-migdal/LISS/main/index.js"

import {db2} from "./SQLite";

const CSS =
`:host {
    display: inline-block;
}

:host table {
    border-collapse: collapse;

    & caption {
        font-weight: bold;
        font-size: 20px;
        line-height: 26px;
        font-style: italic;
    }
    
    & .highlight {
        background-color: #8B8000;
        print-color-adjust: exact;
    }

    /* TODO: make style adoptable through LISS... */
    .high_1 {
        background-color: red;
    }
    .high_2 {
        background-color: blue;
    }
    .high_3 {
        background-color: green;
    }
    .high_null {
        background-color: orange;
    }
    .hide {
        display: none;
    }
    .cur {
        border : 4px solid yellow;
        opacity: 0.5;
    }
    .lowlight {
        opacity: 0.25;
    }

    & td, & th {
        padding: 5px 10px;
        text-align: left;
    }

    & td {
        font-size: 16px;
        line-height: 22px;
    }

    & th {
        font-size: 20px;
        line-height: 26px;
    }
    
    & > tbody > tr + tr > td {
        border-top: 1px solid;
    }
}`;

class SQLDymTable extends LISS({
    attributes: ["table", "header", "cols"],
    css: CSS
}) {
    constructor() {
        super();

        let cols = this.attrs.cols ?? "*";

        this.exec(`SELECT ${cols} FROM ${this.attrs.table};`)
    }

    get nbRows() {
        return this.rows.length;
    }
    getRow(rowid) {
        return this.rows[rowid];
    }

    exec(query) {

        this.data = db2.exec_one(query);

        const table = document.createElement('table');

        const caption = document.createElement('caption');

        if( this.attrs.header === null)
            caption.textContent = `Table ${this.attrs.table} :`;
        else
            caption.textContent = this.attrs.header;

        //TODO: colgroup (for highlight).

        const colgroup = document.createElement('colgroup');
        const thead = document.createElement('thead');
        const trhead = document.createElement('tr');

        this.cols = {};

        const colnames =  Object.keys(this.data[0]);
        for(let colname of colnames) {
            const col = document.createElement('col');
            //col.classList.add('highlight');
            colgroup.append(col);

            this.cols[colname] = col;

            const th = document.createElement('th');
            th.textContent = colname;
            trhead.append(th);
        }
        thead.append(trhead);

        this.rows = [];

        const tbody = document.createElement('tbody');
        for(let line of this.data) {

            const tr = document.createElement('tr');
            for(let colname of colnames) {
                const td = document.createElement('td');
                td.textContent = line[colname] ?? "N/A";
                tr.append(td);
            }
            tbody.append(tr);

            this.rows.push([line,tr]);
        }

        table.append(caption, colgroup, thead, tbody);
        this.content.replaceChildren(table);
    }

    groupBy( group_colname ) {

        const tbody = this.content.querySelector("tbody");

        let groups = {};

        for(let line of this.data) {
            const group = line[group_colname];
            (groups[group] ??= []).push( line );
        }

        let rows = [];
        for(let groupname in groups) {

            const group = groups[groupname];

            for(let i = 0; i < group.length; ++i) {

                const entry = group[i];
                const tr = document.createElement('tr');

                for(let col in group[i]) {

                    const cell = document.createElement('td');
                    cell.textContent = entry[col];

                    if( col === group_colname ){
                        if(i !== 0)
                            continue;

                        cell.setAttribute("rowspan", group.length);
                    }

                    tr.append(cell);
                }
                rows.push(tr);
            }
                
            rows.push(document.createElement("tr"));
        }

        tbody.replaceChildren(...rows);
    }

    highlightCol( filter ) {
        for(let colname in this.cols)
            this.#highlight(this.cols[colname], filter(colname) );
    }

    #highlight(target, highlight) { // target: HTMLElement, highlight: boolean|string|Record<string, boolean> ) {

        if( typeof highlight === "boolean")
            return target.classList.toggle('highlight', highlight);
        if( typeof highlight === "string" )
            return target.classList.add(highlight);
        
        for(let name in highlight)
            target.classList.toggle(name, highlight[name]);

    }

    highlightRow( filter ) {
        for(let i = 0; i < this.rows.length; ++i)
            this.#highlight( this.rows[i][1], filter(this.rows[i][0], i) );
    }

    highlightCells( filter ) {

        for(let i = 0; i < this.rows.length; ++i) {

            const [row_data, row_html] = this.rows[i];
            const cols = Object.keys(row_data);

            for(let j = 0; j < cols.length; ++j)
                this.#highlight( row_html.children[j] , filter(row_data, cols[j]) );
        }
    }
};


LISS.define("sql-dymtable", SQLDymTable)