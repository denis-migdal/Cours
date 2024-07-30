import "../../../../struct/menu.ts";

const hljs = require('highlight.js');

const language = "sql";

for(let pre of document.querySelectorAll('pre[lang="sql"]') ) {
    
    // @ts-ignore
    pre.addEventListener("keypress", (ev: KeyboardEvent) => {
        if( ev.code === "Enter" && ! ev.shiftKey ) {

            ev.preventDefault();
            (ev.target as HTMLElement)!.blur();
        }
    });

    pre.addEventListener("input", (ev) => {
        
        let p = ev.target as HTMLElement;
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


function getCaretCharacterOffsetWithin(element) {
    var caretOffset = 0;
    var doc = element.ownerDocument || element.document;
    var win = doc.defaultView || doc.parentWindow;
    var sel;
    if (typeof win.getSelection != "undefined") {
        sel = win.getSelection();
        if (sel.rangeCount > 0) {
            var range = win.getSelection().getRangeAt(0);
            var preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(element);
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            caretOffset = preCaretRange.toString().length;
        }
    } else if ( (sel = doc.selection) && sel.type != "Control") {
        var textRange = sel.createRange();
        var preCaretTextRange = doc.body.createTextRange();
        preCaretTextRange.moveToElementText(element);
        preCaretTextRange.setEndPoint("EndToEnd", textRange);
        caretOffset = preCaretTextRange.text.length;
    }
    return caretOffset;
}