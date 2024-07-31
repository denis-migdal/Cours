import "../../../../struct/menu.ts";

const hljs = require('highlight.js');
const language = "sql";

for(let field of document.querySelectorAll('[contenteditable]') ) {

    // @ts-ignore
    field.addEventListener("keypress", (ev: KeyboardEvent) => {
        if( ev.code === "Enter" && ! ev.shiftKey ) {

            ev.preventDefault();
            (ev.target as HTMLElement)!.blur();
        }
    });
}

// highlight...
for(let pre of document.querySelectorAll('pre[lang="sql"][contenteditable]') ) {
    
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
    return [ ...document.querySelectorAll<HTMLElement>("[contenteditable]") ];
}

const answers_fields = getAnswersFields();

console.warn(answers_fields.length);

for(let i = 0; i < answers_fields.length; ++i ) {

    answers_fields[i].addEventListener('input', () => {
        const answer_txt = answers_fields[i].textContent!;
        (answers[i] ??= {}).text = answer_txt;
        localStorage.setItem(`answers:${PAGE}`, JSON.stringify(answers) );
        console.warn('ok');
    });
}
// init...

function download(data: any, filename: string, type: string = "plain/text") {
    const file = new Blob([data], {type});
    const a   = document.createElement("a");
    const url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);  
    }, 0); 
}


const PAGE = window.location.pathname;

let localAnswers = localStorage.getItem(`answers:${PAGE}`);

//TODO get real type...
let answers = answers_fields.map( e => { return { text: ""} } );

importAnswersFromText(localAnswers);

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
    
    let text = await file_upload.files![0].text();
    answers = JSON.parse(text);

    importAnswersFromText( text );
});


const export_btn = document.createElement('span');
export_btn.textContent = "[export]";

export_btn.addEventListener('click', () => {
    download( JSON.stringify(answers, null, "\t"), `${PAGE}.answers`);
});


toolbar.append(import_btn, export_btn);

const main = document.querySelector('main')!;
main.append(toolbar);


function importAnswersFromText(text: string|null) {
    
    if(text === null)
        return;

    answers = JSON.parse(text);

    for(let i = 0; i < answers_fields.length; ++i) {
        if( answers[i] === undefined || answers[i] === null )
            continue;
        
        answers_fields[i].textContent = answers[i].text;
        answers_fields[i].dispatchEvent( new CustomEvent("input") );

        answers_fields[i].classList.remove('wrong', 'correct', 'comment');
        if( "grade" in answers[i] )
            answers_fields[i].classList.add( answers[i].grade === 1 ? "correct" : 'wrong');
        if( "comments" in answers[i] ) {
            answers_fields[i].classList.add('comments');
            console.warn(answers[i].comments);
            answers_fields[i].setAttribute('comments', answers[i].comments);
        }
    }
}


addEventListener("message", (e) => {
    highlight(e.data);
})

function highlight(q_id: number) {

    document.querySelector(".answer_highlight")?.classList.remove("answer_highlight");

    const answer = answers_fields[q_id];
    answer.classList.add('answer_highlight');

    const main = document.querySelector('main');

    const vh = document.documentElement.clientHeight;
    const ah = answer.clientHeight;

    main.scrollTo({
        top: answer.offsetTop - (document.documentElement.clientHeight / 2 + ah / 2),
        behavior: "instant"
    })
    //TODO: scroll2middle...
}