import "./menu.ts";
import "./struct.ts";

// pour rendus :
import Rendu from "pages/TPEngine/Rendu.ts";
import {SUJET} from "pages/TPEngine/GUI/SujetTP.ts";

import { download } from "./utils/download.ts";

// TODO: fix hljs area (highlight fct ?)

for(let field of document.querySelectorAll('[contenteditable]') ) {

    // @ts-ignore
    field.addEventListener("keydown", (ev: KeyboardEvent) => {
        if(ev.code === "Tab") {
            ev.preventDefault();

            // https://stackoverflow.com/questions/2237497/make-the-tab-key-insert-a-tab-character-in-a-contenteditable-div-and-not-blur
            var doc = field.ownerDocument.defaultView!;
            var sel = doc.getSelection()!;
            var range = sel.getRangeAt(0);

            var tabNode = document.createTextNode("\t");
            range.insertNode(tabNode);

            range.setStartAfter(tabNode);
            range.setEndAfter(tabNode); 
            sel.removeAllRanges();
            sel.addRange(range);
        }
    });

    // @ts-ignore
    field.addEventListener("keypress", (ev: KeyboardEvent) => {
        
        if( ev.code === "Enter" && ! ev.shiftKey ) {

            ev.preventDefault();
            (ev.target as HTMLElement)!.blur();
        }
    });
}

const hljs = require('highlight.js');

// highlight...
for(let pre of document.querySelectorAll('pre[lang][contenteditable]') ) {

    const language = pre.getAttribute('lang');

    pre.setAttribute("spellcheck", "false");

    pre.addEventListener("input", (ev) => {
        
        let p = ev.target as HTMLElement;

        if( document.activeElement !== p ) {
            p.innerHTML = hljs.highlight(p.textContent, { language }).value;
            return;
        }

        // https://stackoverflow.com/questions/21234741/place-caret-back-where-it-was-after-changing-innerhtml-of-a-contenteditable-elem

        let rrange = window.getSelection()!.getRangeAt(0);
        let c = rrange.startOffset;

        console.warn(rrange.startContainer.nodeType, Node.TEXT_NODE);

        //let text = "";
        let length = 0;
        for(let i = 0; i < p.childNodes.length; ++i) {

            const child = p.childNodes[i];

            if( rrange.startContainer === child || rrange.startContainer === child.firstChild ) {
                length += c;
                break;
            }
            length += child.textContent!.length;
        }

        // Update innerHTML
        p.innerHTML = hljs.highlight(p.textContent, { language }).value;

        let child!: ChildNode;
        let i;
        for(i = 0; i < p.childNodes.length; ++i) {
            if( length <= p.childNodes[i].textContent!.length ) {
                child = p.childNodes[i];
                break;
            }
            length -= p.childNodes[i].textContent!.length;
        }

        if( child.nodeType !== Node.TEXT_NODE)
            child = child.childNodes[0];

        //ISSUE when new keyword...

        var range = document.createRange();
        var sel = window.getSelection()!;
        range.setStart(child, length);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
    });
}

const toolbar = document.createElement("span");
toolbar.classList.add("toolbar");

const import_btn = document.createElement('span');
import_btn.textContent = "[import]";

const file_upload = document.createElement('input');
file_upload.setAttribute('type', 'file');
import_btn.addEventListener('click', () => {
    file_upload.click();
});

file_upload.addEventListener('change', async () => {
    SUJET.rendu = await Rendu.loadFromArrayBuffer( await file_upload.files![0].arrayBuffer() );
});


const export_btn = document.createElement('span');
export_btn.textContent = "[export]";
export_btn.addEventListener('click', async () => {
    download( await SUJET.rendu.toArrayBuffer(), SUJET.filename);
});

toolbar.append(import_btn, export_btn);

document.body.append(toolbar);

addEventListener("message", (e) => {

    if( typeof e.data !== "number")
        return;

    SUJET.highlight(e.data);
})

//TODO: webpack config...
import LISS from "../../libs/LISS";

const TPConsignesContent = `<p>En vous aidant des supports de cours fournis (CM, slides, et cheat sheet), répondez aux différentes questions dans les champs prévus à cet effet.</p>
<p>À la fin de la séance de TP, vous exporterez les réponses via le bouton en haut à droite de la page, et déposerez le fichier ainsi obtenu sur Moodle.</p>
<p>⚠ Les exercices de ce TP ont un objectif pédagogique, rechercher les réponses sur Internet va à l'encontre de cet objectif.</p>
<p>💡 En cas de difficulté, n'hésitez pas à interroger votre encadrant de TP.</p>`;

class TPConsignes extends LISS({
    content: TPConsignesContent
}) {}

LISS.define('tp-consignes', TPConsignes);