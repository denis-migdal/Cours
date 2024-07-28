import "../../../struct/menu.js";

//TODO: better
import "../../../struct/sqlite/sqlite3.js";
require("./sqlite3.wasm");
//require("../../../struct/sqlite/sqlite3.wasm");

import "../../../struct/sql-interactive.js";
import "../../../struct/sql-dym-table.js";
import "../../../struct/anim-player.js";

/*
window.addEventListener('beforeprint', () => {
  //...
});
*/

//TODO: links...
const main   = document.querySelector("main")!;
const header = document.querySelector("header")!;

const titles = document.querySelectorAll<HTMLElement>("h1, h2, h3");

type Node = {
    html    : HTMLElement,
    level   : number,
    parent  : null|Node,
    children: Node[]
};

const htree: Node = {
    html    : main,
    level   : 0,
    parent  : null,
    children: [],
};
let htree_cursor = htree;
for(let title of titles) {
    const level = +title.tagName.slice(1);
    
    while( level <= htree_cursor.level )
        htree_cursor = htree_cursor.parent!;

    const elem: Node = {
        html: title,
        level,
        children: [],
        parent: htree_cursor
    };


    htree_cursor.children.push(elem);

    htree_cursor = elem;
}

function searchCurHeader(htree: Node, position: number): null | Node {

    const headers = htree.children;

    for(let i = headers.length - 1; i >= 0; --i)
        if( headers[i].html.offsetTop <= position + 32 )
            return searchCurHeader(headers[i], position) ?? headers[i];

    return null;
}

const hid = [
    [],
    ["I", "II", "III", "IV"],
    ["1", "2","3","5","6","7","8","9"],
    ["a", "b","c","d","e","f","g","h"],
]

function buildMenu(nodes: Node[]) {

    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.append( ... nodes.map( (s,idx) => {
        const item = document.createElement("a");
        item.textContent= `${hid[s.level][idx]}. ${s.html.textContent}`;
        item.setAttribute("href", `#${s.html.id}`);
        return item;
    }) );

    return menu;
}

function updateHeader() {

    const last = searchCurHeader( htree, main.scrollTop)!;

    let headers = [];
    let cursor  = last;

    while(cursor.html !== main) {
        headers.push(cursor);
        cursor = cursor.parent!;
    }

    const html = headers.reverse().map( (hnode,i) => {

        const h = hnode.html;
        const h_html = document.createElement("span");

        const link = document.createElement("a");
        link.textContent = h.textContent;
        link.setAttribute('href', `#${h.id}`);

        const menu = buildMenu(hnode.parent!.children);
        h_html.append(link, menu);

        return h_html;
    });

    if( last.children.length !== 0) {
        const empty = document.createElement("span");

        empty.append( buildMenu(last.children) );

        html.push(empty)
    }
    
    header.replaceChildren(...html);
}

main.addEventListener('scroll', updateHeader);
updateHeader();