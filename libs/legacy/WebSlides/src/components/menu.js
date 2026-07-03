import { getTitlePrefix, searchCurPageHeader, generateMenuHTML, menu_page } from "@LISS/components/page/menu/";
function buildPageMenu(parent = null) {
    const h1 = document.querySelector('h1'); // osef (hidden)
    const root = {
        html: h1,
        href: `#${h1?.id}`,
        text: getTitlePrefix(1, 1) + h1?.textContent, //TODO: get...
        level: 1,
        parent: null,
        children: []
    };
    let curpos = root;
    const titles = document.querySelectorAll("frame-section, frame-subsection, frame-subsubsection");
    for (let title of titles) {
        const level = (title.tagName.length - 13) / 3 + 2; // h4cky
        while (level <= curpos.level)
            curpos = curpos.parent;
        let text = title.getAttribute('short') ?? title.getAttribute("name");
        title.id = text;
        const elem = {
            html: title,
            href: `#${text}`,
            text: getTitlePrefix(level, curpos.children.length) + text,
            level,
            children: [],
            parent: curpos
        };
        curpos.children.push(elem);
        curpos = elem;
    }
    return root;
}
const main = document.querySelector('main');
function updatePageMenu(menu) {
    const last = searchCurPageHeader(menu, main.scrollTop);
    const html = generateMenuHTML(last ?? menu);
    menu_page.replaceChildren(...html);
}
const menu = buildPageMenu();
updatePageMenu(menu);
main.addEventListener('scroll', () => updatePageMenu(menu));
//# sourceMappingURL=menu.js.map