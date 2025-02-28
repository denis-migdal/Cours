// @ts-nocheck

import LISS, { ShadowCfg } from "../../LISS/index";

const hljs = require('highlight.js');

const css = `

    :host {

        white-space: pre;

        &.block {
            display: block;
            padding: 23px;
            line-height: 19px;
            border-radius: 3px;
            overflow: auto;
            background-color: #333;
            color: white !important;
            border: 1px solid #cccccc;
        }

        &.d4rk var {
            background-color: #202020;
        }
    
        & var {
            background-color: lightgrey;

            & varname {
                color: blue;
            }
        }
    }

`;
/* 
    font-family: monospace;
*/

export default class SQLCode extends LISS({
    css,
    shadow: ShadowCfg.NONE
}) {

    constructor() {
        super();

        // already init, was cloned.
        if(this.content.firstElementChild?.tagName === "CODE")
            return;

        const code = document.createElement("code");

        const vars: Record<string, HTMLElement> = {};

        const _vars = [...this.host.querySelectorAll('var')];
        for(let i = 0; i < _vars.length; ++i ) {
            const name = `__VAR${i}`;
            vars[name] = _vars[i];

            _vars[i].replaceWith(name);
        }

        let content = hljs.highlight(this.host.textContent, { language: "sql" }).value;
        
        content = content.replaceAll(/(__[A-Z]+[0-9]*)/g, (_, name) => {
            return vars[name].outerHTML
        });
        code.innerHTML = content.replaceAll(/(\$[A-Z_]+[0-9]*)/g, (_, varname) => `<varname>${varname}</varname>`);

        this.content.replaceChildren(code);
    }

}

LISS.define("sql-code", SQLCode);