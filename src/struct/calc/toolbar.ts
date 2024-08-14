import LISS from "../../../libs/LISS";
import { Format } from "./format";
import { CalcSheet } from "./sheet";

const content = `
    <select disabled><option>Libération Sans</option></select>
    <select class="font_size"></select>
    <span class='vbar'></span>
    <calc-toolbar-item name='bold'></calc-toolbar-item>
    <calc-toolbar-item name='italic'>X</calc-toolbar-item>
    <calc-toolbar-item name='underline'>X</calc-toolbar-item>
    <span class='vbar'></span>
    <calc-toolbar-item value='black' name='foreground_color'>X</calc-toolbar-item>
    <calc-toolbar-item value='yellow' name='background_color'>X</calc-toolbar-item>
    <span class='vbar'></span>
`;

const css = `
    :host {
        background-color: #cecece;
    }

    :host .vbar {
        display: inline-block;
        width: 1px;
        background-color: #ababab;
        height: 1em;
    }

    :host select {
        margin-top: -4px;
    }
`

const itemcss = `

    :host {
        position: relative;
    }

    :host([value]) {
        padding-right: 12px;
    }

    :host, :host > div {
        background-color: #cecece;
        border: 1px solid transparent;
    }

    :host {
        padding: 5px;
    }

    :host > div {
        width: 10px;
        height: calc( 1.2em - 1px );
        position: absolute;
        top: -1px;
        right: -1px;

        &::after {
            position: absolute;
            top: calc( ( 1.2em - 1px - 2px ) / 2 );
            right: 1px;
            content: "";
            width: 0; 
            height: 0;
            --size: 4px;
            border-left: var(--size) solid transparent;
            border-right: var(--size) solid transparent;
            
            border-top: var(--size) solid black;
        }
    }

    :host(:hover:not(.enabled)), :host(:hover:not(.enabled)) > div {
        background-color: #eaeaea;
        border: 1px solid #969696;
        border-radius: 2px;
    }

    :host(.enabled) {
        background-color: #b6b6b6;
        border: 1px solid #9b9b9b;
        border-radius: 2px;
    }
`;

export class CalcToolbarItem extends LISS({
    css: itemcss
}) {
    constructor() {
        super();

        const content = document.createElement('img');
        content.src = `../../../../assets/tableur/img/toolbar/${this.host.getAttribute('name')}.png`;

        if( ! this.host.hasAttribute('value') ) {
            this.content.append( content );
            return;
        }

        const span = document.createElement('div');

        span.addEventListener('click', (ev) => {
            ev.preventDefault();

            let color_picker = document.querySelector<HTMLInputElement>('input[type="color"]');
            if( color_picker === null ) {
                color_picker = document.createElement('input');
                color_picker.setAttribute("type", "color");
                color_picker.style.setProperty('display', 'none');
            }


            color_picker.dispatchEvent(new CustomEvent('cancel'));

            let cancel = false;
            color_picker.addEventListener('cancel', () => {
                cancel = true;
            }, {once: true});

            color_picker.addEventListener('change', (ev) => {
                if( cancel )
                    return;

                this.host.setAttribute('value', color_picker.value);
                this.host.dispatchEvent( new CustomEvent("click", {bubbles: true}) );

            }, {once: true});

            document.body.append(color_picker);
            color_picker.click();
        });

        this.content.append( content, span );
    }
}

LISS.define('calc-toolbar-item', CalcToolbarItem);

export class CalcToolbar extends LISS({
    content,
    css
}) {

    #btns: Record<string, HTMLElement> = {};

    constructor() {
        super();

        let font_sizes = [
            6, 7, 8, 9, 10, 10.5, 11, 12, 13, 14, 15, 16, 18, 20, 21, 22, 24, 26, 28, 32, 36, 40, 42, 44, 48, 54, 60, 66, 72, 80, 88, 96
        ];

        const btns = this.content.querySelectorAll<HTMLElement>('calc-toolbar-item');
        for(let btn of btns)
            this.#btns[btn.getAttribute('name')!] = btn;

        const font_sizes_select = this.content.querySelector<HTMLSelectElement>('.font_size')!;
        for(let font_size of font_sizes) {
            const option = new Option(`${font_size.toString().replace('.', ',')} pt`, `${font_size}pt`);
            font_sizes_select.append(option);
        }

        this.content.addEventListener('click', (ev) => {

            const elem = ev.target! as HTMLElement;
            if( elem.tagName !== 'CALC-TOOLBAR-ITEM')
                return;

            const n = elem.getAttribute('name')!;

            const value =  elem.hasAttribute('value')
                            ? elem.getAttribute('value')
                            : elem.classList.toggle('enabled');

            let format = new Format({[n]: value });
            format.applyTo( this.#sheet.selection );

        });

        font_sizes_select.addEventListener("change", () => {

            //TODO...
            let format = new Format({font_size: font_sizes_select.value});
            format.applyTo( this.#sheet.selection );
        });
    }

    #sheet!:CalcSheet;

    syncTo(sheet: CalcSheet) {

        this.#sheet = sheet;

        const update = () => {

            if( sheet.selection.cells.length === 0)
                return;

            const format = Format.extractFormat(sheet.selection);

            for(let name in this.#btns)
                this.#btns[name].classList.toggle('enabled', format.getProperty(name) === true )

            //TODO...
            const font_sizes_select = this.content.querySelector<HTMLSelectElement>('.font_size')!;
            font_sizes_select.value = format.getProperty('font_size');
            //TODO: update...
        }

        sheet.selection.addEventListener('change', (ev) => {
            update();
        });
        update();

    }

}

LISS.define('calc-toolbar', CalcToolbar);