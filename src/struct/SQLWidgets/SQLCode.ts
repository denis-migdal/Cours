import LISS, { ShadowCfg } from "LISS";

const hljs = require('highlight.js');

const css = `

    :host {

        white-space: pre;
    
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
        
        console.warn(content, Object.keys(vars));
        content = content.replaceAll(/(__[A-Z]+[0-9]*)/g, (_, name) => {
            console.warn("?", name);
            return vars[name].outerHTML
        });
        code.innerHTML = content.replaceAll(/(\$[A-Z]+[0-9]*)/g, (_, varname) => `<varname>${varname}</varname>`);

        this.content.replaceChildren(code);
    }

}

LISS.define("sql-code", SQLCode);