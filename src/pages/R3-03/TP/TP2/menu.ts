const body = document.body;
const menu_area  = document.createElement('div')!;
const menu_pages = document.createElement('div')!;
const menu_page  = document.createElement('div')!;

menu_page.classList.add('menu_page');
menu_area.classList.add('menu_area');

// Build page menu
// Update page menu
// Submenu


menu_area.append(menu_pages, menu_page);
     body.prepend(menu_area);

menu_pages.append('p');
 menu_page.append('e');

type PageMenuNode = {
    html    : HTMLElement,
    level   : number,
    parent  : null|PageMenuNode,
    children: PageMenuNode[]
};

function buildPageMenu(parent: PageMenuNode|null = null) {
    
    const root: PageMenuNode = {
        html  : document.querySelector('h1')!,
        level : 1,
        parent: null,
        children: []
    }

    let curpos = root;

    const titles = document.querySelectorAll<HTMLElement>("h2, h3, h4");

    for(let title of titles) {
        const level = +title.tagName.slice(1);
    
        while( level <= curpos.level )
            curpos = curpos.parent!;

        const elem: PageMenuNode = {
            html: title,
            level,
            children: [],
            parent: curpos
        };

        curpos.children.push(elem);
        curpos = elem;
    }

    return root;
}

function searchCurPageHeader(htree: PageMenuNode, position: number): null | PageMenuNode {

    const headers = htree.children;

    for(let i = headers.length - 1; i >= 0; --i) {
        console.log( headers[i].html, headers[i].html.offsetTop, position + 2.5*14 );
        if( headers[i].html.offsetTop <= position + 2.5*14 + 5 )
            return searchCurPageHeader(headers[i], position) ?? headers[i];
    }

    return null;
}


const hid = [
    [],
    ["I", "II", "III", "IV"],
    ["1", "2","3","5","6","7","8","9"],
    ["a", "b","c","d","e","f","g","h"],
]

function getTitlePrefix(s: PageMenuNode) {

    if( s.level >= hid.length )
        return "";

    let idx = 1; //TODO...
    if( s.parent !== null)
        idx = s.parent!.children.indexOf(s);

    const num = hid[s.level][idx];
    return `${num}. `;
}


function buildMenu(nodes: PageMenuNode[]) {

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

function updatePageMenu() {

    //TODO: scale...
    let last = searchCurPageHeader( menu, document.documentElement.scrollTop)!;

    let headers = [];
    let cursor  = last;

    if( last === null)
        cursor = last = menu;

    while( cursor !== null) {
        headers.push(cursor);
        cursor = cursor.parent!;
    }

    const html = headers.reverse().map( (hnode,i) => {

        const h = hnode.html;
        const h_html = document.createElement("span");

        const link = document.createElement("a");
        link.textContent = `${getTitlePrefix(hnode)}${h.textContent}`;
        link.setAttribute('href', `#${h.id}`);
        
        h_html.append(link);

        if( hnode.parent !== null) {
            const menu = buildMenu(hnode.parent.children);
            h_html.append(menu);
        }

        return h_html;
    });

    console.warn(last, last?.children.length);

    if( last !== null && last.children.length !== 0) {
        const empty = document.createElement("span");

        empty.append( buildMenu(last.children) );

        html.push(empty)

        console.warn(empty);
    }


    /*
    function make_page_href(pathprefix: string, path: string, desc: any) {

        // h4ck...
        if( path[0] === "/" )
            throw new Error('not implemented');
            //return `${root_path.slice(0,-6)}/${path}`;

        let href = `${pathprefix}${path}/`;

        while(desc.children?.length) {
            desc = desc.children[0];
            href += `${desc.path ?? desc}/`;
        }

        return href;
    }

    /*
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
    }*/

    // module_html, type_html,
    
    menu_page.replaceChildren(...html);
}


const menu = buildPageMenu();

window.addEventListener('scroll', updatePageMenu);
updatePageMenu();
