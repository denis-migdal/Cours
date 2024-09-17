
import pages, {root_path} from "./content";

/*
window.addEventListener('beforeprint', () => {
  //...
});
*/

//TODO: links...
const main   = document.querySelector("main")!;
const header = document.querySelector("header")!;

const titles = document.querySelectorAll<HTMLElement>("h1, h2, h3, h4");

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

function getTitlePrefix(s: Node) {

    if( s.level >= hid.length )
        return "";

    const idx = s.parent!.children.indexOf(s);

    const num = hid[s.level][idx];

    return `${num}. `;
}

function buildMenu(nodes: Node[]) {

    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.append( ... nodes.map( (s,idx) => {
        const item = document.createElement("a");
        item.textContent= `${getTitlePrefix(s)}${s.html.textContent}`;
        item.setAttribute("href", `#${s.html.id}`);
        return item;
    }) );

    return menu;
}

function updateHeader() {

    const last = searchCurHeader( htree, main.scrollTop)!;

    let headers = [];
    let cursor  = last;

    if( cursor !== null)
        while(cursor.html !== main) {
            headers.push(cursor);
            cursor = cursor.parent!;
        }

    const html = headers.reverse().map( (hnode,i) => {

        const h = hnode.html;
        const h_html = document.createElement("span");

        const link = document.createElement("a");
        link.textContent = `${getTitlePrefix(hnode)}${h.textContent}`;
        link.setAttribute('href', `#${h.id}`);

        const menu = buildMenu(hnode.parent!.children);
        h_html.append(link, menu);

        return h_html;
    });

    if( last !== null && last.children.length !== 0) {
        const empty = document.createElement("span");

        empty.append( buildMenu(last.children) );

        html.push(empty)
    }

    function make_page_href(pathprefix: string, path: string, desc: any) {

        // h4ck...
        if( path[0] === "/" )
            return `${root_path.slice(0,-6)}/${path}`;

        let href = `${pathprefix}${path}/`;

        while(desc.children?.length) {
            desc = desc.children[0];
            href += `${desc.path ?? desc}/`;
        }

        return href;
    }

    function make_page_menu(pathprefix: string, path: string, pages: any) {
        const desc = pages.find( (page: any) => page === path || page.path === path )!;
        
        const html = document.createElement("span");
        {
            const link = document.createElement("a");
            link.textContent = desc.sname ?? desc.name ?? desc;
            link.setAttribute('href', make_page_href(pathprefix, path, desc) );
    
            const menu = document.createElement("div");
            menu.classList.add("menu");
    
            menu.append( ... pages.map( (page:any) => {
                const item = document.createElement("a");
                item.textContent= page.name ?? page;

                item.setAttribute("href", make_page_href(pathprefix, page.path??page, page) );
                return item;
            }) );
    
            html.append(link, menu);
        }

        return html;
    }
    
    let curpage = window.location.pathname.slice(root_path.length).split('/');

    const module_html = make_page_menu(root_path, curpage[0], pages);

    const desc = pages.find( (page: any) => page.path === curpage[0] )!;
    const type_html   = make_page_menu(root_path + curpage[0] + "/", curpage[1], desc.children);

    const desc_type = desc.children.find( (page: any) => (page?.path ?? page) === curpage[1] )!;
    if( typeof desc_type !== "string") {
        // title num
        const desc2_idx = desc_type.children.findIndex( (page: any) => page?.path ?? page === curpage[2] )!;
        document.body.style.setProperty("--header_start_id", `${desc2_idx}`);
        // menu
        const session_html   = make_page_menu(root_path + curpage[0] + "/"+ curpage[1] + "/", curpage[2], desc_type.children);
        html[0] = session_html;
    }

    header.replaceChildren(module_html, type_html, ...html);
}

main.addEventListener('scroll', updateHeader);
updateHeader();