import "../../../../struct/menu.ts";

const hljs = require('highlight.js');
const language = "sql";

// highlight...
for(let pre of document.querySelectorAll('pre[lang="sql"][contenteditable]') ) {
    
    // @ts-ignore
    pre.addEventListener("keypress", (ev: KeyboardEvent) => {
        if( ev.code === "Enter" && ! ev.shiftKey ) {

            ev.preventDefault();
            (ev.target as HTMLElement)!.blur();
        }
    });

    pre.addEventListener("input", (ev) => {
        
        let p = ev.target as HTMLElement;

        if( document.activeElement !== p ) {
            p.innerHTML = hljs.highlight(p.textContent, { language }).value;
            return;
        }

        // https://stackoverflow.com/questions/21234741/place-caret-back-where-it-was-after-changing-innerhtml-of-a-contenteditable-elem

        let rrange = window.getSelection()!.getRangeAt(0);
        let c = rrange.startOffset;

        //let text = "";
        let length = 0;
        for(let i = 0; i < p.childNodes.length; ++i) {
            if( rrange.startContainer === p.childNodes[i] ) {
                //text += p.childNodes[i].textContent!.slice(0, c);
                length += c;
                break;
            }
            //text += p.childNodes[i].textContent;
            length += p.childNodes[i].textContent!.length;
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

        console.log( i, p.childNodes.length );
        console.log( child, length, child.textContent, child.textContent!.length );

        if( child.nodeType !== Node.TEXT_NODE)
            child = child.childNodes[0];

        //ISSUE when new keyword...

        var range = document.createRange();
        var sel = window.getSelection()!;
        //TODO: set REAL IDX
        range.setStart(child, length);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
        //console.log( getCaretCharacterOffsetWithin(ev.target)  );
    });
}



function getAnswersFields() {
    //TODO...
    return [ ...document.querySelectorAll("[contenteditable]") ];
}

const PAGE = window.location.pathname;
let answers: string[] = JSON.parse( localStorage.getItem(`answers:${PAGE}`) ?? "[]" );

const answers_fields = getAnswersFields();

for(let i = 0; i < answers_fields.length; ++i ) {

    if( answers[i] !== undefined ) {
        answers_fields[i].textContent = answers[i];
        answers_fields[i].dispatchEvent( new CustomEvent("input") );
    }

    answers_fields[i].addEventListener('input', () => {
        const answer_txt = answers_fields[i].textContent!;
        answers[i] = answer_txt;
        localStorage.setItem(`answers:${PAGE}`, JSON.stringify(answers) );
    });
}
// init...