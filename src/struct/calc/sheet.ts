//TODO: webpack config...
import LISS from "../../../libs/LISS";

//@ts-ignore
import css from "!!raw-loader!./index.css";

export type ValueType = string|number|Date|boolean;
export type RawContentType = ValueType|Formula;

type Cell = HTMLTableCellElement & {
    rawContent: RawContentType,
    format: (v: string|number) => string,
    formula: (r: number, c: number) => ValueType,
    is_ro: boolean
};

const hljs = require('highlight.js');
function highlight(str: string) {
    return hljs.highlight(str, { language: "excel" }).value;
}

function isActive(target: HTMLElement) {

    return target.matches(':focus');
/*
    let active = document.activeElement;

    while( active?.shadowRoot instanceof ShadowRoot )
        active = active.shadowRoot.activeElement;

    return active === target;*/
}

function onInput(ev: Event) {

    const target = ev.target as HTMLElement;

    /*
    if( ! isActive(target) ) {
        target.innerHTML = highlight(target.textContent!);
        return;
    }*/

    // https://stackoverflow.com/questions/21234741/place-caret-back-where-it-was-after-changing-innerhtml-of-a-contenteditable-elem

    let rrange = window.getSelection()!.getRangeAt(0);
    let c = rrange.startOffset;

    //let text = "";
    let length = 0;
    for(let i = 0; i < target.childNodes.length; ++i) {

        let child = target.childNodes[i];
        if( child.nodeType !== Node.TEXT_NODE)
            child = child.childNodes[0];

        if( rrange.startContainer === child ) {
            //text += p.childNodes[i].textContent!.slice(0, c);
            length += c;
            break;
        }
        //text += p.childNodes[i].textContent;
        length += target.childNodes[i].textContent!.length;
    }

    // Update innerHTML
    //target.innerHTML = highlight(target.textContent!);
    target.textContent = target.textContent;

    let child!: ChildNode;
    let i;
    for(i = 0; i < target.childNodes.length; ++i) {
        if( length <= target.childNodes[i].textContent!.length ) {
            child = target.childNodes[i];
            break;
        }
        length -= target.childNodes[i].textContent!.length;
    }

    if( child.nodeType !== Node.TEXT_NODE)
        child = child.childNodes[0];

    var range = document.createRange();
    var sel = window.getSelection()!;

    range.setStart(child, length);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
}

export function defaultFormat(value: RawContentType) {

    if( typeof value === "number")
        return `${+value.toPrecision(7)}`.replace('.', ',');

    if( typeof value === "boolean")
        return value ? 'VRAI' : 'FAUX';

    if( typeof value === "object" && value instanceof Date) {
        return value.toLocaleDateString("fr-FR");
    }
    
    if( typeof value === "object" && value instanceof Formula) {
        return value.toString(); //TODO...
    }

    return value;
}

function parseInput( str: string ): RawContentType {

    if(str === 'VRAI')
        return true;
    if(str === 'FAUX')
        return false;

    if(str === '')
        return str;

    if(str[0] === "=") {
        return parse_formula(str);
    }

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

    removeHighlights() {
        for(let h of this.content.querySelectorAll('.range_highlight') )
            h.remove();
    }

    highlight(start: Cell, end: Cell, id: number) {
        const high = document.createElement('div');
        high.classList.add('range_highlight', `highlight_${id}`);

        const tbl_offset = this.content.querySelector('table')!.offsetTop;

        high.style.setProperty('top'   , `${tbl_offset + start.offsetTop - 1}px`);
        high.style.setProperty('height', `${end.offsetTop + end.clientHeight - start.offsetTop}px`);

        high.style.setProperty('left'   , `${start.offsetLeft - 1}px`);
        high.style.setProperty('width', `${end.offsetLeft + end.clientWidth - start.offsetLeft}px`);

        this.content.append(high);
    }

    relativeTo(cell: Cell, row_diff: number, col_diff: number) {
        
        let [row, col] = this.cellPos(cell);

        row += row_diff;
        col += col_diff;

        // for normal : get stuck inside grid.
        if( row < 1)
            row = 1;
        if( row >= this.#tbody.children.length )
            row = this.#tbody.children.length - 1;

        if( col < 1)
            col = 1;
        if( col >= this.#tbody.children[row].children.length )
            col = this.#tbody.children[row].children.length - 1;

        return this.#tbody.children[row].children[col] as Cell;
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

                if( this.#selection.cells.length !== 1)
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

            if( target.tagName === "TH")
                throw new Error('not implemented');

            // todo: shift key + super key + ?

            if( target.tagName !== "TD" )
                return;

            // the cell is being edited...
            if( target.hasAttribute('contenteditable') )
                return;

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
            if( target === this.#tbody ) {

                if( ev.key === "Control" || ev.key === "Shift") {
                    return; // ignore
                } if( ev.code === "Delete" ) {

                    this.cursor.deleteContent();

                    this.#cursor.dispatchEvent( new CustomEvent("change") );

                    return;
                } if( ev.code === "Enter" ) {
                    // handled elsewhere
                } else if( ev.code.startsWith('Arrow') ) {

                    ev.preventDefault();

                    const cur = this.cursor.cells;
                    if( cur.length === 0)
                        return;

                    let d_row = 0;
                    let d_col = 0;

                    if( ev.code === 'ArrowLeft')
                        --d_col;
                    if( ev.code === 'ArrowRight')
                        ++d_col;
                    if( ev.code === 'ArrowUp')
                        --d_row;
                    if( ev.code === 'ArrowDown')
                        ++d_row;

                    let next: Cell;
                    if( ev.ctrlKey ) {

                        let prev   = cur[0];
                        let cursor = this.relativeTo(prev, d_row, d_col);

                        if( prev.rawContent !== undefined && cursor.rawContent !== undefined) {

                            while( prev !== cursor && cursor.rawContent !== undefined) { // we reached the end.
                                prev   = cursor;
                                cursor = this.relativeTo(prev, d_row, d_col);
                            }
                            cursor = prev;
                        } else {
                            while( prev !== cursor && cursor.rawContent === undefined) { // we reached the end.
                                prev   = cursor;
                                cursor = this.relativeTo(prev, d_row, d_col);
                            }
                        }

                        next = cursor;
                    } else
                        next = this.relativeTo( cur[0], d_row, d_col);

                    this.#tbody.focus();
                    next.dispatchEvent( new CustomEvent('click', {bubbles: true}) );

                } else { // we start editing...

                    const cur = this.cursor.cells;

                    if( cur.length > 0) {
                        cur[0].dispatchEvent( new CustomEvent("dblclick", {bubbles: true}) );
                        cur[0].textContent = "";
                    }

                    return;
                }
            }

            if( target !== this.#tbody && ev.code === 'Enter' && ev.shiftKey )
                return; // default browser behavior.

            if(ev.code === "Enter") { //TODO: Enter is for current plage...
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
                return;
            }
        });

        const onInput2 = (ev: Event) => {
            this.removeHighlights();
            onInput(ev);
        }

        //TODO: here...
        this.content.addEventListener('focusin', (ev) => {

            const target = ev.target as HTMLElement;

            if( target.tagName !== "TD")
                return;

            console.warn('f-in');

            const cell = ev.target as Cell;

            if(cell.rawContent instanceof Formula) {

                const str = cell.rawContent.toString();
                const ranges = cell.rawContent.rangesToken;

                let children: (string|HTMLElement)[] = [str];

                let ranges_colors: Record<string, number> = {};
                let cur_offset = 0;

                for(let i = 0; i < ranges.length; ++i) {
                    let str = children[children.length-1] as string;

                    children[children.length-1] = str.slice(0, ranges[i].beg - cur_offset);

                    let s = document.createElement('span');

                    const range_name = ranges[i].value;
                    if( ! (range_name in ranges_colors) )
                        ranges_colors[range_name] = i%8;

                    s.classList.add('formula_highlight', `highlight_${ranges_colors[range_name]}`); //TODO...
                    s.textContent = ranges[i].value;
                    children.push( s ); // range...

                    children.push( str.slice(ranges[i].end - cur_offset) );
                    cur_offset = ranges[i].end;
                }

                for(let range in ranges_colors ) {

                    const cell = this.getCells(range).cells;

                    let beg = cell[0];
                    let end = cell[cell.length-1];

                    this.highlight(beg, end, ranges_colors[range]);
                }

                cell.replaceChildren( ...children );

                cell.addEventListener('input', onInput2 ); // remove colors...
            } else {
                cell.textContent = defaultFormat(cell.rawContent);
            }
        });
        //TODO input + remove (focusout)

        this.content.addEventListener("focusout", ev => {

            const target = ev.target as HTMLElement;

            if( target.tagName !== "TD")
                return;

            console.warn('f-out');

            const cell = target as Cell;

            this.removeHighlights();
            cell.removeEventListener("input", onInput2); // to be safe

            target.toggleAttribute("contenteditable", false);

            new CellList(this, [cell]).content = target.textContent!;
            this.update();

            // leave
            this.#selection.clear();
            this.#cursor.clear();
        });

        let t = this.#tbody.querySelectorAll('td');
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

            const cells = this.content.querySelectorAll<Cell>('td');
            for(let cell of cells) {

                if( cell.rawContent instanceof Formula ) {
                    let value = cell.rawContent.exec(this); //TODO...

                    //TODO: factorize...
                    let type: string = typeof value;
                    if( type === "object" && value instanceof Date )
                        type="date";

                    cell.textContent = (cell as any).format(value);
                    cell.setAttribute('data-type', type);
                }

                //TODO: remove...
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

    setFormat(format: (raw: ValueType) => string) {

        for(let cell of this.#cells) {
            cell.format = format;
            cell.textContent = format( cell.rawContent);
        }
    
        return this;
    }

    get content(): (RawContentType)[] {
        let content = new Array(this.#cells.length);
        for(let i = 0; i < this.#cells.length; ++i)
            content[i] = this.#cells[i].rawContent!;

        return content;
    }

    deleteContent() {

        for(let cell of this.#cells) {
            cell.rawContent = undefined as any;
            cell.textContent = "";
            cell.removeAttribute('data-type');
        }

        this.#sheet.update();
    }

    set content(content: RawContentType|(RawContentType)[]) {

        if( Array.isArray(content) ) {
            for(let i = 0; i < content.length; ++i)
                new CellList(this.#sheet, [this.#cells[i]] ).content = content[i];

            return;
        }

        if( typeof content === 'string')
            content = parseInput(content);

        for(let cell of this.#cells) {
            cell.rawContent = content;

            let value = content;
            if( content instanceof Formula)
                value = content.exec(this.#sheet); //TODO...

            let type: string = typeof value;
            if( type === "object" && value instanceof Date )
                type="date";

            cell.textContent = (cell as any).format(value);
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
import { Formula, parse_formula } from "./formula_parser";

LISS.define('calc-sheet', CalcSheet);