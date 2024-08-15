import LISS from "../../../libs/LISS";
import { CalcSheet, Cell, CellList, defaultFormat } from "./sheet";

export const Formats = {
    euros: function(this:Cell, value: number) {
        if(value === undefined)
            return '';

        const prec = +(this.getAttribute('precision') ?? 2);

        return value.toLocaleString(undefined, {
            minimumFractionDigits: prec,
            maximumFractionDigits: prec
            }) + '€';
        //.toFixed(2) + '€';
    },
    pourcent: function(this:Cell, value: number) {
        if(value === undefined)
            return '';

        const prec = +(this.getAttribute('precision') ?? 2);

        return (value * 100).toLocaleString(undefined, {
            minimumFractionDigits: prec,
            maximumFractionDigits: prec
            }) + '%';
        //.toFixed(2) + '€';
    },
    number: function(this:Cell, value: number) {
        if(value === undefined)
            return '';

        const prec = +(this.getAttribute('precision') ?? 2);

        return value.toLocaleString(undefined, {
            minimumFractionDigits: prec,
            maximumFractionDigits: prec
            });
    }
}

export class Format {

    #format: Record<string, any>;

    constructor(format: Record<string, any>) {
        this.#format = format;
    }

    applyTo(cell: Cell|CellList) {

        if( cell instanceof CellList) {

            for(let c of cell.cells)
                this.applyTo(c);

            return;
        }

        for(let name in this.#format) {
            let val = this.#format[name];

            if(name === 'format') {

                if( val === null) {

                    cell.format = defaultFormat;
                    cell.textContent = cell.format( cell.rawContent); //TODO: if fct
    
                    continue;
                }

                cell.format = val;
                cell.textContent = cell.format( cell.rawContent); //TODO: if fct

                continue;
            }

            if(name === 'precision') {
                cell.setAttribute('precision', val);
                cell.textContent = cell.format?.( cell.rawContent); //TODO: if fct
                continue;
            }

            if( name === 'span' ) {


                const sheet = LISS.getLISSSync( (cell.getRootNode() as ShadowRoot).host );
                
                if( val[0] === 1 && val[1] === 1) { // unmerge

                    let r = +cell.getAttribute('rowspan') ?? 0;
                    let c = +cell.getAttribute('colspan') ?? 0;

                    for(let i = 0; i < r; ++i)
                        for(let j = 0; j < c; ++j) {
                            const target = sheet.relativeTo(cell, i, j);
                            delete target.cell;
                            target.classList.remove('hidden');
                        }
                    cell.removeAttribute('rowspan');
                    cell.removeAttribute('colspan');

                    continue;
                }

                cell.setAttribute('rowspan', `${val[0]}`);
                cell.setAttribute('colspan', `${val[1]}`);

                for(let i = 0; i < val[0]; ++i)
                    for(let j = 0; j < val[1]; ++j) {
                        if(i === 0 && j === 0)
                            continue;

                        const target = sheet.relativeTo(cell, i, j);
                        target.cell = cell;
                        target.classList.add('hidden');
                    }

                continue;
            }

            if( typeof val === "boolean") {

                if( name.startsWith('align_') ) {
                    cell.classList.remove('align_left');
                    cell.classList.remove('align_center');
                    cell.classList.remove('align_right');
                }
                if( name.startsWith('valign_') ) {
                    cell.classList.remove('valign_top');
                    cell.classList.remove('valign_middle');
                    cell.classList.remove('valign_bottom');
                }

                cell.classList.toggle(name, val);

                continue;
            }

            cell.style.setProperty(`--${name}`, val);
        }
    }

    getProperty(name: string) {
        return this.#format[name];
    }
    hasProperty(name: string) {
        return name in this.#format;
    }

    static extractFormat(cell: Cell|CellList): Format {
        
        if( cell instanceof CellList) {

            const cells = cell.cells;

            let format = Format.extractFormat(cells[0]);

            for(let i = 1; i < cells.length; ++i) {
                let f2 = Format.extractFormat(cells[i]);

                for(let key in format.#format)
                    if( ! (key in f2.#format) || f2.#format[key] !== format.#format[key] )
                        delete format.#format[key];
            }

            return format;
        }
        
        let format = Object.fromEntries<any>( [...cell.classList.values()].map(e => [e, true]) );
        
        for(let i = 0; i < cell.style.length; ++i) {
            let name = cell.style.item(i);
            if( ! name.startsWith('--') )
                continue;
            format[name.slice(2)] = cell.style.getPropertyValue(name);
        }

        const colspan = +(cell.getAttribute('colspan') ?? 1);
        const rowspan = +(cell.getAttribute('rowspan') ?? 1);

        if( colspan > 1 || rowspan > 1 )
            format.span = [ rowspan, colspan ];

        if( ! ("font_size" in format) )
            format['font_size'] = '10pt';

        if( "format" in cell)
            format.format = cell.format;

        if( cell.hasAttribute('precision') )
            format.precision = cell.getAttribute('precision');

        return new Format(format);
    }
}