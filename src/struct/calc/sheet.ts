//TODO: webpack config...
import LISS from "../../../libs/LISS";

//@ts-ignore
import css from "!!raw-loader!./index.css";

type Cell = HTMLTableCellElement & {
    rawContent: string|number|Date,
    format: (v: string|number) => string,
    formula: (r: number, c: number) => string|number,
    is_ro: boolean
};

export function defaultFormat(value: string|number|Date) {

    if( typeof value === "number")
        return `${value}`.replace('.', ',');

    if( typeof value === "object" && value instanceof Date) {
        return value.toLocaleDateString("fr-FR");
    }

    return value;
}

function parseInput( str: string ): Date|number|string {

    let test_number = Number( str.replace(',', '.') );
    if( ! Number.isNaN( test_number ) )
        return test_number;

    const parts = str.split('/');
    if(parts.length <= 3) {

        let test_date = new Date(
            +parts[2] ?? new Date().getFullYear(),
            +parts[1]-1,
            +parts[0]
        );

        if( test_date.toString() !== "Invalid Date" )
            return test_date;
    }

    return str;
}

export class CalcSheet extends LISS({
    css,
    attributes: ["cols", "rows", "ro"]
}) {

    #selection = new CellList(this, []);
    #cursor    = new CellList(this, []);

    get cursor() {
        return this.#cursor;
    }
    get selection() {
        return this.#selection;
    }

    constructor() {
        super();


        this.#cursor.addEventListener('change', (ev) => {

            for( let cell of this.content.querySelectorAll('.cursor') )
                cell.classList.remove('cursor');

            for( let cell of this.#cursor.cells )
                cell.classList.add('cursor');
        });

        this.#selection.addEventListener('change', (ev) => {

            for( let cell of this.content.querySelectorAll('.highlight') )
                cell.classList.remove('highlight');

            for( let cell of this.#selection.cells ) {

                cell.classList.add('highlight');
                const [row, col] = this.#cellPos(cell);
                this.#tbody.children[0].children[col].classList.add("highlight");
                this.#tbody.children[row].children[0].classList.add("highlight");
            }
        });

        //TODO: move out ?
        const formula_bar = document.createElement('div');

        ( async () => {

            const plage = await LISS.build("calc-plage");
            plage.syncTo(this);
            formula_bar.append( plage.host );

            const formula = await LISS.build("calc-formula");
            formula.syncTo(this);
            formula_bar.append( formula.host );

        })();
        this.content.append(formula_bar);

        this.#initGrid(+this.attrs.rows!, +this.attrs.cols!);

        this.content.addEventListener('click', (ev) => {

            const target = ev.target as HTMLElement;

            // todo: shift key + super key + ?

            if( target.tagName === "TH")
                throw new Error('not implemented');

            if( target.tagName !== "TD" )
                return;

            // the cell is being edited...
            if( target.hasAttribute('contenteditable') )
                return;

            console.warn('?');

            const cell = target as Cell;

            this.#selection.clear();
            this.#selection.add(cell);

            this.#cursor.clear();
            this.#cursor.add(cell);

            // this.#tbody.focus(); // ?
        });

        this.content.addEventListener("dblclick", (ev) => {

            let target = ev.target as HTMLElement;

            if( target.tagName !== "TD")
                return;

            if( this.attrs.ro !== "true" && (target as Cell).is_ro !== true ) {
                target.toggleAttribute("contenteditable", true);
                target.focus();
            }
        });

        // @ts-ignore
        this.content.addEventListener('keydown', (ev: KeyboardEvent) => {

            const target = ev.target as HTMLElement;
            if( ev.code !== "Enter" && target === this.#tbody ) {

                const cur = this.cursor.cells;

                if( cur.length > 0) {
                    cur[0].dispatchEvent( new CustomEvent("dblclick", {bubbles: true}) );
                    cur[0].textContent = "";
                }

                return;
            }


            if(ev.code === "Enter") {
                ev.preventDefault();

                const cur = this.cursor.cells;
                if( cur.length === 0)
                    return;

                let [row,col] = this.cellPos( cur[0] );

                ++row;
                if( row >= this.#tbody.children.length ) {
                    row = 1;
                    ++col;
                }
                if( col >= this.#tbody.children[row].children.length ) {
                    col = 1;
                }

                let next = (this.#tbody.children[row].children[col] as HTMLElement);

                this.#tbody.focus();
                next.dispatchEvent( new CustomEvent('click', {bubbles: true}) );
                
                //target.blur();
            }
        })

        this.content.addEventListener('focusin', (ev) => {

            if( ev.target.tagName !== "TD")
                return;

            const cell = ev.target as Cell;
            cell.textContent = defaultFormat(cell.rawContent);
        });

        this.content.addEventListener("focusout", ev => {

            const target = ev.target as Cell;

            if( ev.target.tagName !== "TD")
                return;

            target.toggleAttribute("contenteditable", false);

            new CellList(this, [target]).content = target.textContent!; // update...

            // leave
            this.#selection.clear();
            this.#cursor.clear();
        });
    }

    cellPos(cell: HTMLTableCellElement) {
        return this.#cellPos(cell);
    }

    #cellPos(cell: HTMLTableCellElement) {

        const col = [...cell.parentElement!.children].findIndex( c => c === cell);
        const row = [...cell.parentElement!.parentElement!.children].findIndex( r => r === cell.parentElement!);

        return [row, col] as const;
    }

    #tbody!: HTMLTableSectionElement;

    #initGrid(nbrows: number, nbcols: number) {

        const is_ro = this.attrs.ro === "true";

        const table = document.createElement('table');
        const tbody  = document.createElement('tbody');
        this.#tbody = tbody;

        this.#tbody.setAttribute('tabindex', '0');

        const col_html = document.createElement('tr');
        col_html.append( document.createElement('th') );

        for(let col = 0; col <  nbcols ; ++col) {
            const th = document.createElement('th');
            th.textContent = String.fromCharCode(65 + col);
            col_html.append(th);
        }
        tbody.append(col_html);

        for(let row = 0; row < nbrows; ++row) {
            const row_html = document.createElement('tr');
            const th = document.createElement('th');
            th.textContent = `${row+1}`;
            row_html.append(th);

            for(let col = 0; col <  nbcols ; ++col) {
                const cell = document.createElement('td') as Cell;
                //cell.toggleAttribute('contenteditable');
                cell.format = defaultFormat;
                row_html.append( cell );
            }
            tbody.append(row_html);
        }

        table.append(tbody);
        this.content.append(table);
    }

    getCells(cell: string): CellList;
    getCells(row_id: number, col_id: number): CellList;
    getCells(cell_or_rowid: number|string, col_id?: number) {

        let row_id = cell_or_rowid;
        if( typeof cell_or_rowid === "string") {

            if( cell_or_rowid.includes(':') ) {// range

                let [beg, end] = cell_or_rowid.split(':');

                const b_row_id = +beg[1];
                const b_col_id = beg.charCodeAt(0) + 1 - 65;

                const e_row_id = +end[1];
                const e_col_id = end.charCodeAt(0) + 1 - 65;

                const cells = new Array( (e_col_id-b_col_id) * (e_row_id - b_row_id) );
                let offset = 0;
                for(let r = b_row_id; r <=  e_row_id; ++r)
                    for(let c = b_col_id; c <=  e_col_id; ++c)
                        cells[offset++] = this.#tbody.children[r].children[c] as Cell;

                return new CellList(this, cells);
            }

            row_id = +cell_or_rowid[1];
            col_id = cell_or_rowid.charCodeAt(0) + 1 - 65;
        }

        const cell = this.#tbody.children[+row_id].children[col_id!] as Cell;
        return new CellList(this, [cell]);
    }

    #isUpdating: boolean = false;
    update() {
        if( this.#isUpdating === true )
            return;
        this.#isUpdating = true;

        window.requestAnimationFrame( () => {

            const cells = this.content.querySelectorAll('td');
            for(let cell of cells) {
                if( "formula" in cell)
                    new CellList(this, [cell]).content = (cell as any).formula( ...this.#cellPos(cell) );
            }

            this.#isUpdating = false;
        })
    }
}

export class CellList extends EventTarget {

    #sheet: CalcSheet;
    #cells: Cell[];
    constructor(sheet: CalcSheet, cells: Cell[]) {
        super();
        this.#cells = cells;
        this.#sheet = sheet;
    }

    get cells(): Cell[] {
        return this.#cells;
    }
    get sheet(): CalcSheet {
        return this.#sheet;
    }

    toggleClass(css_class: string, enforce?:boolean) {
        for(let cell of this.#cells)
            cell.classList.toggle(css_class, enforce);

        return this;
    }

    set formula(formula: (row: number, col: number) => (string|number) ) {

        for(let cell of this.#cells)
            cell.formula = formula;

        this.#sheet.update();
    }

    setFormat(format: (raw: string|number) => string) {

        for(let cell of this.#cells) {
            cell.format = format;
            cell.textContent = format( cell.rawContent);
        }
    
        return this;
    }

    get content(): (string|number)[] {
        let content = new Array(this.#cells.length);
        for(let i = 0; i < this.#cells.length; ++i)
            content[i] = this.#cells[i].rawContent!;

        return content;
    }

    set content(content: Date|string|number|(Date|string|number)[]) {

        if( Array.isArray(content) ) {
            for(let i = 0; i < content.length; ++i)
                new CellList(this.#sheet, [this.#cells[i]] ).content = content[i];

            return;
        }

        if( typeof content === 'string')
            content = parseInput(content);

        let type: string = typeof content;
        if( type === "object" && content instanceof Date )
            type="date";

        for(let cell of this.#cells) {
            cell.rawContent = content;
            cell.textContent = (cell as any).format(content);
            cell.setAttribute('data-type', type);
        }

        this.#sheet.update();
    }

    setRO(is_ro: boolean = true) {
        for(let cell of this.#cells)
            cell.is_ro = is_ro;
    
        return this;
    }

    add(...cells: Cell[]) {

        this.#cells.push(...cells)

        this.dispatchEvent( new CustomEvent("change") );
    }

    clear() {
        this.#cells.length = 0;

        this.dispatchEvent( new CustomEvent("change") );
    }
}

//TODO...
import "./formula_editor";
import "./plage_editor";

LISS.define('calc-sheet', CalcSheet);