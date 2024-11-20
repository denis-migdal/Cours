import LISS, { ShadowCfg } from "LISS2/src";
import { Constructor } from "LISS2/src/types";

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

        console.warn('start');

        // already init, was cloned.
        if(this.content.firstElementChild?.tagName === "CODE")
            return;

        const code = document.createElement("code");

        const vars: Record<string, HTMLElement> = {};

        let i = 0;
        const _vars = [...this.host.querySelectorAll('var')];
        for( ; i < _vars.length; ++i ) {
            const name = `__VAR${i}`;
            vars[name] = _vars[i];

            _vars[i].replaceWith(name);
        }

        let content = this.host.textContent!;

        let indent_offset = content.search(/[\S]/);
        if( indent_offset > 1 ) {
            --indent_offset;
            let indent = " ".repeat(indent_offset);
            content = content.replaceAll('\n' + indent, '\n');
        }
        
        content = content.trim();

        if( lang === "html" )
            content = content.replaceAll('[DOCTYPE]', '<!DOCTYPE html>');

        content = content.replaceAll(/\<var\>(.*?)\<\/var\>/g, (_, content) => {

            const name = `__VAR${i++}`;

            let elem = document.createElement('var');
            elem.textContent = content;
            vars[name] = elem;

            return name;
        });

        content = content.replaceAll(/\\(.)/g, (_, c) => c );
        content = hljs.highlight(content, { language: lang }).value;

        content = content.replaceAll(/(__[A-Z]+[0-9]*)/g, (_: unknown, name: string) => {
            return vars[name].outerHTML
        });

        code.innerHTML = content.replaceAll(/(\$[A-Z_]+[0-9]*)/g, (_: unknown, varname: string) => `<varname>${varname}</varname>`);

        console.log("?", code.innerHTML);

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

//TODO : ?
LISS.define("key-shortcut", generate("bash") );

const langs: Record<string,string> = {
    "html" : "html",
     "css" : "css",
      "py" : "python",
      "js" : "javascript",
   "shell" : "bash"
};

const lang_classes: Record<string, Constructor<Code>> = {};

for(let lang in langs)
    LISS.define(`${lang}-code`, lang_classes[lang] = generate(langs[lang]) );

const script_codes = [...document.querySelectorAll<HTMLElement>('script[type]')].filter( e => e.getAttribute('type')! in langs );
for(let script_code of script_codes ) {
    const lang  = script_code.getAttribute('type')!;
    const Klass = lang_classes[lang];

    const host = new (Klass as any).Host() as HTMLElement;
    const content = host.textContent = script_code.textContent!;

    console.warn(content);

    host.classList.add('d4rk'); //TODO: color scheme
    
    if( content.includes('\n') )
        host.classList.add('block');


    script_code.replaceWith( host );
}

//LISS.define("html-script", LISS({extends: Code, host: HTMLScriptElement, params: {lang: "html"} }) );

