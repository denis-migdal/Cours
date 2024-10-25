import LISS, {html, ShadowCfg } from "LISS2/src/";
import { hl } from "struct/Code";

const css = `
    :host {
        & select {
            color-scheme: dark;
        }

        & iframe {
            background-color: white;
            width: 100%;
            height: fit-content;
        }

        & html-output {
            white-space: pre;
            font-family: Menlo, Monaco, Consolas, "Droid Sans Mono", "Courier New", monospace, "Droid Sans Fallback";
        }

        & web-option {
            display: none;
        }
    }
`;

//TODO: selector...

export class WebSystem extends LISS({css, shadow: ShadowCfg.NONE}) {

    constructor() {
        super();

        let html_code = this.content.querySelector('script[type="html"]')?.textContent!;
        if(html_code[0] === "\n") { // remove indentation...
            let i;
            for(i = 1; i < html_code.length; ++i )
                if( html_code[i] !== " ")
                    break;

            html_code = html_code.split('\n').slice(1,-1).map( l => l.slice(i-1) ).join('\n');
        }

        html_code = html_code.replaceAll(/\$([\w]*)/g, (_, name) => `__${name}`);

        const output_html = this.content.querySelector('html-output');
        //let code = html`<html-code></html-code>`;
        //code.textContent = html_code;
        //output_html?.append(code);
        let hl_code = hl(html_code, "html");

        hl_code = hl_code.replaceAll(/__([\w]*)/g, (_, name) => {

            let options = [...this.content.querySelectorAll(`web-option[for="${name}"]`)].map( o => `<option>${o.textContent}</option>`).join("");

            return `<select name='${name}'>${options}</select>`;
        });
        output_html!.innerHTML = hl_code;

        const selects = output_html!.querySelectorAll('select');
        const select_from_name: Record<string, HTMLSelectElement> = {};
        for(let select of selects)
            select_from_name[select.getAttribute('name')!] = select;

        function getHTMLCode() {
            // @ts-ignore
            return html_code.replaceAll(/__([\w]*)/g, (_, name) => {
                return select_from_name[name!].selectedOptions[0].textContent;
            });
        }

        for(let select of selects ) {
            select.addEventListener('change', () => {
                iframe.contentWindow!.document.open();
                iframe.contentWindow!.document.write( getHTMLCode() );
                iframe.contentWindow!.document.close();
            });
        }

        const output = this.content.querySelector('web-output');
        const iframe = document.createElement("iframe");
        output?.append( iframe );


        // https://stackoverflow.com/questions/8240101/set-content-of-iframe
        iframe.src = "about:blank";
        // iframe.srcdoc also possible
        iframe.contentWindow!.document.open();
        iframe.contentWindow!.document.write( getHTMLCode() );
        iframe.contentWindow!.document.close();
    }

}

LISS.define("web-system", WebSystem);