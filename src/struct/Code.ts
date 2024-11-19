import LISS, { ShadowCfg } from "LISS2/src";

const hljs = require('highlight.js');

export function hl(code: string, lang: string): string {
    return hljs.highlight(code, { language: lang }).value;
}

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

//TODO: attr lang ?

export default class Code extends LISS({
    css,
    shadow: ShadowCfg.NONE
}) {

    constructor(lang: string) {
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

        let content = this.host.textContent!.trim();

        if( this.content.firstChild?.nodeType === Node.COMMENT_NODE ) {
            content = this.host.innerHTML.slice(4,-3).trim();

            console.warn(content);

            let i = 0;
            // ([\w$_]+)\>
            content = content.replaceAll(/\<var\>(.*)\<\/var\>/g, (_, content) => {

                const name = `__VAR${i++}`;

                let elem = document.createElement('var');
                elem.textContent = content;
                vars[name] = elem;

                
                return name;
            });
            //TODO: replace vars too...

        }

        content = content.replaceAll(/\\(.)/g, (_, c) => c );
        content = hljs.highlight(content, { language: lang }).value;
        
        content = content.replaceAll(/(__[A-Z]+[0-9]*)/g, (_: unknown, name: string) => {
            return vars[name].outerHTML
        });

        code.innerHTML = content.replaceAll(/(\$[A-Z_]+[0-9]*)/g, (_: unknown, varname: string) => `<varname>${varname}</varname>`);

        this.content.replaceChildren(code);
    }
}

function generate(lang: string, cdata=false) {
    return class LCode extends Code {
        constructor() {
            super(lang);
        }
    }
}

//LISS.define("js-code", JSCode);
LISS.define("html-code", generate("html") );
LISS.define("css-code" , generate("css") );
LISS.define("py-code" , generate("python") );
LISS.define("js-code" , generate("javascript") );
LISS.define("shell-code", generate("bash") );
LISS.define("key-shortcut", generate("bash") );

//LISS.define("html-script", LISS({extends: Code, host: HTMLScriptElement, params: {lang: "html"} }) );

