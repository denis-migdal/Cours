//TODO: better
import "./sqlite/sqlite3.js";
require("../pages/R 1-02 Bases de Données Relationnelles 1/CM/sqlite3.wasm");
//require("../../../struct/sqlite/sqlite3.wasm");

import * as s from "./sqlite/sqlite3.js";
const sqlite3 = (await s()).sqlite3.oo1;

// @ts-ignore
// const sqlite3 = (await sqlite3InitModule!()).oo1;
type TABLE_DESC = {
    schema      : Record<string, string>,
    constraints?: string,
    entries     : (null|string|number)[][]
};
type DB_DESC = Record<string, TABLE_DESC>;

function js2sql(value: null|string|number) {
    if(value === null)
        return "NULL";
    if( typeof value === "number")
        return `${value}`;
    if( typeof value === "string")
        return `'${value}'`;
    throw new Error('???');
}

//TODO merge queries...
class DB {

    readonly #desc: DB_DESC;
    readonly #db  : any;

    constructor(name: string, desc: DB_DESC) {

        this.#desc = desc;

        // add t for tracing.
        this.#db = new sqlite3.DB(name,'c'); 
        this.#db.exec('PRAGMA foreign_keys=ON;');

        this.fullReset();
    }

    resetTable(name: string) {

        const desc = this.#desc[name];

        this.#db.exec(`drop table if exists ${name}`);
        const cols = Object.entries(desc.schema).map( ([name, type]) => `${name} ${type}`).join(", ");
        let constraints = "";
        if( "constraints" in desc)
            constraints = `, ${desc.constraints}`; 
        this.#db.exec(`CREATE TABLE IF NOT EXISTS ${name}(${cols}${constraints}) STRICT;`);

        // Populate...
        const values = desc.entries.map( e => `(${ e.map(c => js2sql(c)).join(', ') })`).join(", ");
        this.#db.exec(`INSERT INTO ${name} VALUES ${values};`);
    }

    #created_table = new Set<string>();
    #updated_table = new Set<string>();

    reset() {

        for( let name of [...this.#created_table.values()].reverse() )
            this.#db.exec(`drop table if exists ${name};`);

        for(let name in this.#desc)
            if( this.#updated_table.has(name) )
                this.resetTable(name);

        this.#created_table.clear();
        this.#updated_table.clear();
    }

    fullReset() {
        for( let name of [...this.#created_table.values()].reverse() )
            this.#db.exec(`drop table if exists ${name}`);

        for(let table in this.#desc)
            this.resetTable(table);

        this.#created_table.clear();
        this.#updated_table.clear();
    }

    #extractTableNameFromSQL(sql: string) {

        const types = [
            "CREATE TABLE IF NOT EXISTS ",
            "CREATE TABLE ",
            "DROP TABLE ",
            "UPDATE ",
            "INSERT INTO ",
            "DELETE FROM "
        ];

        const sql_type = types.find( v => sql.startsWith(v) )!;

        const start_pos  = sql_type.length;
        let end_pos = start_pos;
        while( sql[end_pos] !== " " && sql[end_pos] !== ";" && sql[end_pos] !== "\n")
            ++end_pos;
    
        const table_name = sql.slice(start_pos, end_pos );
        return [ sql_type, table_name];
    }

    exec_one(sql: string) {

        if( sql.startsWith("SELECT ") )
            return this.#db.selectObjects(sql);

        this.#db.exec(sql);

        const [type, name] = this.#extractTableNameFromSQL(sql);

        if( name in this.#desc )
            this.#updated_table.add(name);
        else
            this.#created_table.add(name);

        return null;
    }

    exec_many(sql: string[]) {
        return sql.map( e => this.exec_one(e) );
    }
}

const db2 = new DB("BDR1_CM",
    {
        Users: {
            schema : {
                ID    : "INTEGER PRIMARY KEY AUTOINCREMENT",
                Nom   : "TEXT",
                Prenom: "TEXT",
                Age   : "INT"
            },
            entries: [
                [null, 'Doe',    'John',   43],
                [null, 'Durant', 'Paul',    9],
                [null, 'Nescio', 'Nomen',  43]
            ]
        },
        Produits: {
            schema : {
                Date: "TEXT",
                Ref : "TEXT",
                Q   : "INT"
            },
            entries: [
                ['2023-01-01', 'Gomme' , 10],
                ['2023-02-23', 'Gomme' ,  9],
                ['2023-06-13', 'Gomme' , 24],
                ['2023-01-01', 'Crayon', 20],
                ['2023-02-23', 'Crayon', 18],
                ['2023-06-13', 'Crayon', 50]
            ]
        },
        T1: {
            schema : {
                ID: "INTEGER PRIMARY KEY AUTOINCREMENT",
                T1: "TEXT"
            },
            entries: [
                [null, '1'],
                [null, '2'],
                [null, '3']
            ]
        },
        T2: {
            schema : {
                ID: "INT",
                T2: "TEXT"
            },
            constraints: "FOREIGN KEY(ID) REFERENCES T1(ID)",
            entries: [
                [1,    '1'],
                [3,    '2'],
                [3,    '3'],
                [null, '4']
            ]
        }
    });

export {db2};