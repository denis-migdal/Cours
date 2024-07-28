import LISS from "https://raw.githack.com/denis-migdal/LISS/main/index.js"

import {SQLTables} from "./sql-interactive.js";

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
    attributes: ["table", "header"],
    css: CSS
}) {
    constructor() {
        super();

        this.exec(`SELECT * FROM ${this.attrs.table};`)
    }

    exec(query) {

        const tableconfig = SQLTables[this.attrs.table];
        const db = tableconfig.db;

        this.data = db.selectObjects(query);

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

        this.rows = {};

        const tbody = document.createElement('tbody');
        for(let line of this.data) {

            const tr = document.createElement('tr');
            for(let colname of colnames) {
                const td = document.createElement('td');
                td.textContent = line[colname];
                tr.append(td);
            }
            tbody.append(tr);

            if( "ID" in line)
                this.rows[line.ID] = tr;
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
            this.cols[colname].classList.toggle('highlight', filter(colname));
    }

    highlightRow( filter ) {

        for(let ID in this.rows)
            this.rows[ID].classList.toggle('highlight', filter(ID));
    }
};


LISS.define("sql-dymtable", SQLDymTable)