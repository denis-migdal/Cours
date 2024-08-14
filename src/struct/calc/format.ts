import { Cell, CellList } from "./sheet";

export class Format {

    #format: Record<string, any>;

    constructor(format: Record<string, any>) {
        this.#format = format;
        console.log(format);
    }

    applyTo(cell: Cell|CellList) {

        if( cell instanceof CellList) {

            for(let c of cell.cells)
                this.applyTo(c);

            return;
        }


        for(let name in this.#format) {
            let val = this.#format[name];

            if( typeof val === "boolean") {

                cell.classList.toggle(name, val);

                continue;
            }

            cell.style.setProperty(`--${name}`, val);
        }
    }

    getProperty(name: string) {
        return this.#format[name];
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

        if( ! ("font_size" in format) )
            format['font_size'] = '10pt';

        return new Format(format);
    }
}