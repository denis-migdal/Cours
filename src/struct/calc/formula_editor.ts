//TODO: webpack config...
import LISS from "../../../libs/LISS";
import { CalcSheet, CellList, defaultFormat } from "./sheet";

const hljs = require('highlight.js');

const css = `

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

    :host {
        display: block;
        line-height: 1rem;
        width: 100%;

        & pre {
            text-align: left;
            width: 100%;
            box-sizing: border-box;
            padding: 4px;
            margin: 0;
            background-color: white;
            border: 1px solid #c0c0c0;
            min-height: calc( 1rem + 8px + 2px );
            color: black;
            font-size: 10pt;
            font-family: 'Liberation Sans';
        }
    }
`;

export class CalcFormula extends LISS({
    css
}) {

    #input = document.createElement('pre');

    constructor() {
        super();

        this.content.append( this.#input );

        //TODO....
        this.#input.toggleAttribute('disabled');
        /*this.#input.addEventListener('change', () => {

        });*/
    }

    syncTo(sheet: CalcSheet) {

        const cursor = sheet.cursor;

        cursor.addEventListener('change', (_: any) => {

            let cell = cursor.cells;
            if( cell.length === 0) {
                this.#input.value = "";
                return;
            }
            
            if( cell[0].formula !== undefined ) {

                const formula = (cell[0].formula.toString as any)(...sheet.cellPos(cell[0]));
                
                this.#input.innerHTML = hljs.highlight(formula, { language: "excel" }).value;

                return;
            }
            this.#input.textContent = defaultFormat( cell[0].rawContent );
        });
    }

}

LISS.define('calc-formula', CalcFormula);