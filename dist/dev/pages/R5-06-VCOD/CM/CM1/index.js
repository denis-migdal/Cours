/******/ var __webpack_modules__ = ({

/***/ "./src/struct/content.ts":
/*!*******************************!*\
  !*** ./src/struct/content.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   root_path: () => (/* binding */ root_path)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
    {
        name: "R 1-01 Tableur et Reporting",
        sname: "R1-01 Tableur",
        path: "R1-01",
        children: [
            {
                name: "CM",
                path: "CM",
                children: [
                    "CM1",
                    "CM2"
                ]
            },
            {
                name: "TP",
                path: "TP",
                children: [
                    "TP1",
                    "TP2"
                ]
            }
        ]
    },
    {
        name: "R 1-02 Bases de Données Relationnelles 1",
        sname: "R1-02 BDR1",
        path: "R1-02",
        children: [
            "CM",
            {
                name: "Slides",
                path: "Slides",
                children: [
                    "CM1",
                    "CM2",
                    "CM3",
                    "CM4"
                ]
            },
            {
                name: "TP",
                path: "TP",
                children: [
                    "TP1",
                    "TP2",
                    "TP3",
                    "TP4",
                    "TP5"
                ]
            },
            {
                name: "Cheat Sheet",
                path: "/assets/sql/cheat sheet.svg"
            }
        ]
    },
    {
        name: "R 3-03 Technologies Web",
        sname: "R3-03 Web1",
        path: "R3-03",
        children: [
            {
                name: "CM",
                path: "CM",
                children: [
                    "CM1",
                    "CM2",
                    "CM3",
                    "CM4"
                ]
            },
            {
                name: "TP",
                path: "TP",
                children: [
                    "TP1",
                    "TP2",
                    "TP3-4"
                ]
            },
            {
                name: "Cheat Sheet HTML",
                path: "/assets/web/HTML5/cheat sheet.svg"
            },
            {
                name: "Cheat Sheet CSS",
                path: "/assets/web/CSS3/cheat sheet.svg"
            }
        ]
    },
    {
        name: "R 5-06-VCOD Développement Logiciel",
        sname: "R5-06-VCOD Dev Log",
        path: "R5-06-VCOD",
        children: [
            {
                name: "CM",
                path: "CM",
                children: [
                    "CM1"
                ]
            }
        ]
    }
]);
const root_path = [
    "localhost",
    "127.0.0.1"
].includes(location.hostname) ? "/dist/dev/pages/" : "/Cours/dist/dev/pages/";


/***/ }),

/***/ "./src/struct/menu.ts":
/*!****************************!*\
  !*** ./src/struct/menu.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ "./src/struct/content.ts");
// OBSOLETE, use skeleton menu

/*
window.addEventListener('beforeprint', () => {
  //...
});
*/ //TODO: links...
const main = document.querySelector("main");
const header = document.querySelector("header");
const titles = document.querySelectorAll("h1, h2, h3, h4");
const htree = {
    html: main,
    level: 0,
    parent: null,
    children: []
};
let htree_cursor = htree;
for (let title of titles){
    const level = +title.tagName.slice(1);
    while(level <= htree_cursor.level)htree_cursor = htree_cursor.parent;
    const elem = {
        html: title,
        level,
        children: [],
        parent: htree_cursor
    };
    htree_cursor.children.push(elem);
    htree_cursor = elem;
}
function searchCurHeader(htree, position) {
    const headers = htree.children;
    for(let i = headers.length - 1; i >= 0; --i)if (headers[i].html.offsetTop <= position + 32) return searchCurHeader(headers[i], position) ?? headers[i];
    return null;
}
const hid = [
    [],
    [
        "I",
        "II",
        "III",
        "IV"
    ],
    [
        "1",
        "2",
        "3",
        "5",
        "6",
        "7",
        "8",
        "9"
    ],
    [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h"
    ]
];
function getTitlePrefix(s) {
    if (s.level >= hid.length) return "";
    const idx = s.parent.children.indexOf(s);
    const num = hid[s.level][idx];
    return `${num}. `;
}
function buildMenu(nodes) {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.append(...nodes.map((s, idx)=>{
        const item = document.createElement("a");
        item.textContent = `${getTitlePrefix(s)}${s.html.textContent}`;
        item.setAttribute("href", `#${s.html.id}`);
        return item;
    }));
    return menu;
}
function updateHeader() {
    const last = searchCurHeader(htree, main.scrollTop);
    let headers = [];
    let cursor = last;
    if (cursor !== null) while(cursor.html !== main){
        headers.push(cursor);
        cursor = cursor.parent;
    }
    const html = headers.reverse().map((hnode, i)=>{
        const h = hnode.html;
        const h_html = document.createElement("span");
        const link = document.createElement("a");
        link.textContent = `${getTitlePrefix(hnode)}${h.textContent}`;
        link.setAttribute('href', `#${h.id}`);
        const menu = buildMenu(hnode.parent.children);
        h_html.append(link, menu);
        return h_html;
    });
    if (last !== null && last.children.length !== 0) {
        const empty = document.createElement("span");
        empty.append(buildMenu(last.children));
        html.push(empty);
    }
    function make_page_href(pathprefix, path, desc) {
        // h4ck...
        if (path[0] === "/") return `${_content__WEBPACK_IMPORTED_MODULE_0__.root_path.slice(0, -6)}/${path}`;
        let href = `${pathprefix}${path}/`;
        while(desc.children?.length){
            desc = desc.children[0];
            href += `${desc.path ?? desc}/`;
        }
        return href;
    }
    function make_page_menu(pathprefix, path, pages) {
        const desc = pages.find((page)=>page === path || page.path === path);
        const html = document.createElement("span");
        {
            const link = document.createElement("a");
            link.textContent = desc.sname ?? desc.name ?? desc;
            link.setAttribute('href', make_page_href(pathprefix, path, desc));
            const menu = document.createElement("div");
            menu.classList.add("menu");
            menu.append(...pages.map((page)=>{
                const item = document.createElement("a");
                item.textContent = page.name ?? page;
                item.setAttribute("href", make_page_href(pathprefix, page.path ?? page, page));
                return item;
            }));
            html.append(link, menu);
        }
        return html;
    }
    let curpage = window.location.pathname.slice(_content__WEBPACK_IMPORTED_MODULE_0__.root_path.length).split('/');
    const module_html = make_page_menu(_content__WEBPACK_IMPORTED_MODULE_0__.root_path, curpage[0], _content__WEBPACK_IMPORTED_MODULE_0__["default"]);
    const desc = _content__WEBPACK_IMPORTED_MODULE_0__["default"].find((page)=>page.path === curpage[0]);
    const type_html = make_page_menu(_content__WEBPACK_IMPORTED_MODULE_0__.root_path + curpage[0] + "/", curpage[1], desc.children);
    const desc_type = desc.children.find((page)=>(page?.path ?? page) === curpage[1]);
    if (typeof desc_type !== "string") {
        // title num
        const desc2_idx = desc_type.children.findIndex((page)=>page?.path ?? page === curpage[2]);
        document.body.style.setProperty("--header_start_id", `${desc2_idx}`);
        // menu
        const session_html = make_page_menu(_content__WEBPACK_IMPORTED_MODULE_0__.root_path + curpage[0] + "/" + curpage[1] + "/", curpage[2], desc_type.children);
        html[0] = session_html;
    }
    header.replaceChildren(module_html, type_html, ...html);
}
const p = new URLSearchParams(location.search);
if (!p.has('ds')) {
    main.addEventListener('scroll', updateHeader);
    updateHeader();
}


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/publicPath */
/******/ (() => {
/******/ 	__webpack_require__.p = "";
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!**********************************************!*\
  !*** ./src/pages/R5-06-VCOD/CM/CM1/index.ts ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var struct_menu_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! struct/menu.ts */ "./src/struct/menu.ts");


})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!***********************************************!*\
  !*** ./src/pages/R5-06-VCOD/CM/CM1/index.css ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**********************************************!*\
  !*** ./src/pages/R5-06-VCOD/CM/CM1/index.md ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "pages/R5-06-VCOD/CM/CM1/index.html");
})();

var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTs7U0FFQTtTQUNBOztTQUVBO1NBQ0E7U0FDQTs7Ozs7VUN0QkE7VUFDQTtVQUNBO1VBQ0E7VUFDQSx5Q0FBeUMsd0NBQXdDO1VBQ2pGO1VBQ0E7VUFDQTs7Ozs7VUNQQTs7Ozs7VUNBQTtVQUNBO1VBQ0E7VUFDQSx1REFBdUQsaUJBQWlCO1VBQ3hFO1VBQ0EsZ0RBQWdELGFBQWE7VUFDN0Q7Ozs7O1VDTkE7Ozs7Ozs7Ozs7Ozs7QUNDd0I7Ozs7Ozs7Ozs7O0FDRHhCOzs7Ozs7Ozs7Ozs7O0FDQUEsaUVBQWUscUJBQXVCLHVDQUF1QyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L21lbnUudHMiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9wYWdlcy9SNS0wNi1WQ09EL0NNL0NNMS9pbmRleC50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9wYWdlcy9SNS0wNi1WQ09EL0NNL0NNMS9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvcGFnZXMvUjUtMDYtVkNPRC9DTS9DTTEvaW5kZXgubWQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgW1xuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiUiAxLTAxIFRhYmxldXIgZXQgUmVwb3J0aW5nXCIsXG4gICAgICAgIHNuYW1lOiBcIlIxLTAxIFRhYmxldXJcIixcbiAgICAgICAgcGF0aCA6IFwiUjEtMDFcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNNXCIsXG4gICAgICAgICAgICAgICAgcGF0aDogXCJDTVwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiQ00xXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQ00yXCJcbiAgICAgICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJUUFwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiVFBcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIlRQMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQMlwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIlIgMS0wMiBCYXNlcyBkZSBEb25uw6llcyBSZWxhdGlvbm5lbGxlcyAxXCIsXG4gICAgICAgIHNuYW1lOiBcIlIxLTAyIEJEUjFcIixcbiAgICAgICAgcGF0aCA6IFwiUjEtMDJcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIFwiQ01cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlNsaWRlc1wiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiU2xpZGVzXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgXCJDTTFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDTTJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDTTNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDTTRcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJUUFwiICxcbiAgICAgICAgICAgICAgICBwYXRoIDogXCJUUFwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiVFAxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFAyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFAzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFA0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFA1XCJcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJDaGVhdCBTaGVldFwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiL2Fzc2V0cy9zcWwvY2hlYXQgc2hlZXQuc3ZnXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lIDogXCJSIDMtMDMgVGVjaG5vbG9naWVzIFdlYlwiLFxuICAgICAgICBzbmFtZTogXCJSMy0wMyBXZWIxXCIsXG4gICAgICAgIHBhdGggOiBcIlIzLTAzXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJDTVwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiQ01cIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIkNNMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIkNNMlwiLFxuICAgICAgICAgICAgICAgICAgICBcIkNNM1wiLFxuICAgICAgICAgICAgICAgICAgICBcIkNNNFwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiVFBcIixcbiAgICAgICAgICAgICAgICBwYXRoOiBcIlRQXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgXCJUUDFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJUUDJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJUUDMtNFwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ2hlYXQgU2hlZXQgSFRNTFwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiL2Fzc2V0cy93ZWIvSFRNTDUvY2hlYXQgc2hlZXQuc3ZnXCJcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNoZWF0IFNoZWV0IENTU1wiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiL2Fzc2V0cy93ZWIvQ1NTMy9jaGVhdCBzaGVldC5zdmdcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIlIgNS0wNi1WQ09EIETDqXZlbG9wcGVtZW50IExvZ2ljaWVsXCIsXG4gICAgICAgIHNuYW1lOiBcIlI1LTA2LVZDT0QgRGV2IExvZ1wiLFxuICAgICAgICBwYXRoIDogXCJSNS0wNi1WQ09EXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJDTVwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiQ01cIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIkNNMVwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IHJvb3RfcGF0aCA9IFtcImxvY2FsaG9zdFwiLCBcIjEyNy4wLjAuMVwiXS5pbmNsdWRlcyhsb2NhdGlvbi5ob3N0bmFtZSkgPyBcIi9kaXN0L2Rldi9wYWdlcy9cIiA6IFwiL0NvdXJzL2Rpc3QvZGV2L3BhZ2VzL1wiOyIsIi8vIE9CU09MRVRFLCB1c2Ugc2tlbGV0b24gbWVudVxuXG5pbXBvcnQgcGFnZXMsIHtyb290X3BhdGh9IGZyb20gXCIuL2NvbnRlbnRcIjtcblxuLypcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmVwcmludCcsICgpID0+IHtcbiAgLy8uLi5cbn0pO1xuKi9cblxuLy9UT0RPOiBsaW5rcy4uLlxuY29uc3QgbWFpbiAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikhO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKSE7XG5cbmNvbnN0IHRpdGxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFwiaDEsIGgyLCBoMywgaDRcIik7XG5cbnR5cGUgTm9kZSA9IHtcbiAgICBodG1sICAgIDogSFRNTEVsZW1lbnQsXG4gICAgbGV2ZWwgICA6IG51bWJlcixcbiAgICBwYXJlbnQgIDogbnVsbHxOb2RlLFxuICAgIGNoaWxkcmVuOiBOb2RlW11cbn07XG5cbmNvbnN0IGh0cmVlOiBOb2RlID0ge1xuICAgIGh0bWwgICAgOiBtYWluLFxuICAgIGxldmVsICAgOiAwLFxuICAgIHBhcmVudCAgOiBudWxsLFxuICAgIGNoaWxkcmVuOiBbXSxcbn07XG5sZXQgaHRyZWVfY3Vyc29yID0gaHRyZWU7XG5mb3IobGV0IHRpdGxlIG9mIHRpdGxlcykge1xuICAgIGNvbnN0IGxldmVsID0gK3RpdGxlLnRhZ05hbWUuc2xpY2UoMSk7XG4gICAgXG4gICAgd2hpbGUoIGxldmVsIDw9IGh0cmVlX2N1cnNvci5sZXZlbCApXG4gICAgICAgIGh0cmVlX2N1cnNvciA9IGh0cmVlX2N1cnNvci5wYXJlbnQhO1xuXG4gICAgY29uc3QgZWxlbTogTm9kZSA9IHtcbiAgICAgICAgaHRtbDogdGl0bGUsXG4gICAgICAgIGxldmVsLFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgIHBhcmVudDogaHRyZWVfY3Vyc29yXG4gICAgfTtcblxuXG4gICAgaHRyZWVfY3Vyc29yLmNoaWxkcmVuLnB1c2goZWxlbSk7XG5cbiAgICBodHJlZV9jdXJzb3IgPSBlbGVtO1xufVxuXG5mdW5jdGlvbiBzZWFyY2hDdXJIZWFkZXIoaHRyZWU6IE5vZGUsIHBvc2l0aW9uOiBudW1iZXIpOiBudWxsIHwgTm9kZSB7XG5cbiAgICBjb25zdCBoZWFkZXJzID0gaHRyZWUuY2hpbGRyZW47XG5cbiAgICBmb3IobGV0IGkgPSBoZWFkZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKVxuICAgICAgICBpZiggaGVhZGVyc1tpXS5odG1sLm9mZnNldFRvcCA8PSBwb3NpdGlvbiArIDMyIClcbiAgICAgICAgICAgIHJldHVybiBzZWFyY2hDdXJIZWFkZXIoaGVhZGVyc1tpXSwgcG9zaXRpb24pID8/IGhlYWRlcnNbaV07XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuY29uc3QgaGlkID0gW1xuICAgIFtdLFxuICAgIFtcIklcIiwgXCJJSVwiLCBcIklJSVwiLCBcIklWXCJdLFxuICAgIFtcIjFcIiwgXCIyXCIsXCIzXCIsXCI1XCIsXCI2XCIsXCI3XCIsXCI4XCIsXCI5XCJdLFxuICAgIFtcImFcIiwgXCJiXCIsXCJjXCIsXCJkXCIsXCJlXCIsXCJmXCIsXCJnXCIsXCJoXCJdLFxuXVxuXG5mdW5jdGlvbiBnZXRUaXRsZVByZWZpeChzOiBOb2RlKSB7XG5cbiAgICBpZiggcy5sZXZlbCA+PSBoaWQubGVuZ3RoIClcbiAgICAgICAgcmV0dXJuIFwiXCI7XG5cbiAgICBjb25zdCBpZHggPSBzLnBhcmVudCEuY2hpbGRyZW4uaW5kZXhPZihzKTtcblxuICAgIGNvbnN0IG51bSA9IGhpZFtzLmxldmVsXVtpZHhdO1xuXG4gICAgcmV0dXJuIGAke251bX0uIGA7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTWVudShub2RlczogTm9kZVtdKSB7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuXG4gICAgbWVudS5hcHBlbmQoIC4uLiBub2Rlcy5tYXAoIChzLGlkeCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGl0ZW0udGV4dENvbnRlbnQ9IGAke2dldFRpdGxlUHJlZml4KHMpfSR7cy5odG1sLnRleHRDb250ZW50fWA7XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBgIyR7cy5odG1sLmlkfWApO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9KSApO1xuXG4gICAgcmV0dXJuIG1lbnU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUhlYWRlcigpIHtcblxuICAgIGNvbnN0IGxhc3QgPSBzZWFyY2hDdXJIZWFkZXIoIGh0cmVlLCBtYWluLnNjcm9sbFRvcCkhO1xuXG4gICAgbGV0IGhlYWRlcnMgPSBbXTtcbiAgICBsZXQgY3Vyc29yICA9IGxhc3Q7XG5cbiAgICBpZiggY3Vyc29yICE9PSBudWxsKVxuICAgICAgICB3aGlsZShjdXJzb3IuaHRtbCAhPT0gbWFpbikge1xuICAgICAgICAgICAgaGVhZGVycy5wdXNoKGN1cnNvcik7XG4gICAgICAgICAgICBjdXJzb3IgPSBjdXJzb3IucGFyZW50ITtcbiAgICAgICAgfVxuXG4gICAgY29uc3QgaHRtbCA9IGhlYWRlcnMucmV2ZXJzZSgpLm1hcCggKGhub2RlLGkpID0+IHtcblxuICAgICAgICBjb25zdCBoID0gaG5vZGUuaHRtbDtcbiAgICAgICAgY29uc3QgaF9odG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gYCR7Z2V0VGl0bGVQcmVmaXgoaG5vZGUpfSR7aC50ZXh0Q29udGVudH1gO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGAjJHtoLmlkfWApO1xuXG4gICAgICAgIGNvbnN0IG1lbnUgPSBidWlsZE1lbnUoaG5vZGUucGFyZW50IS5jaGlsZHJlbik7XG4gICAgICAgIGhfaHRtbC5hcHBlbmQobGluaywgbWVudSk7XG5cbiAgICAgICAgcmV0dXJuIGhfaHRtbDtcbiAgICB9KTtcblxuICAgIGlmKCBsYXN0ICE9PSBudWxsICYmIGxhc3QuY2hpbGRyZW4ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IGVtcHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgICAgICAgZW1wdHkuYXBwZW5kKCBidWlsZE1lbnUobGFzdC5jaGlsZHJlbikgKTtcblxuICAgICAgICBodG1sLnB1c2goZW1wdHkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZV9wYWdlX2hyZWYocGF0aHByZWZpeDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIGRlc2M6IGFueSkge1xuXG4gICAgICAgIC8vIGg0Y2suLi5cbiAgICAgICAgaWYoIHBhdGhbMF0gPT09IFwiL1wiIClcbiAgICAgICAgICAgIHJldHVybiBgJHtyb290X3BhdGguc2xpY2UoMCwtNil9LyR7cGF0aH1gO1xuXG4gICAgICAgIGxldCBocmVmID0gYCR7cGF0aHByZWZpeH0ke3BhdGh9L2A7XG5cbiAgICAgICAgd2hpbGUoZGVzYy5jaGlsZHJlbj8ubGVuZ3RoKSB7XG4gICAgICAgICAgICBkZXNjID0gZGVzYy5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIGhyZWYgKz0gYCR7ZGVzYy5wYXRoID8/IGRlc2N9L2A7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaHJlZjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlX3BhZ2VfbWVudShwYXRocHJlZml4OiBzdHJpbmcsIHBhdGg6IHN0cmluZywgcGFnZXM6IGFueSkge1xuICAgICAgICBjb25zdCBkZXNjID0gcGFnZXMuZmluZCggKHBhZ2U6IGFueSkgPT4gcGFnZSA9PT0gcGF0aCB8fCBwYWdlLnBhdGggPT09IHBhdGggKSE7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSBkZXNjLnNuYW1lID8/IGRlc2MubmFtZSA/PyBkZXNjO1xuICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBtYWtlX3BhZ2VfaHJlZihwYXRocHJlZml4LCBwYXRoLCBkZXNjKSApO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuICAgIFxuICAgICAgICAgICAgbWVudS5hcHBlbmQoIC4uLiBwYWdlcy5tYXAoIChwYWdlOmFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50PSBwYWdlLm5hbWUgPz8gcGFnZTtcblxuICAgICAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBtYWtlX3BhZ2VfaHJlZihwYXRocHJlZml4LCBwYWdlLnBhdGg/P3BhZ2UsIHBhZ2UpICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9KSApO1xuICAgIFxuICAgICAgICAgICAgaHRtbC5hcHBlbmQobGluaywgbWVudSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gICAgXG4gICAgbGV0IGN1cnBhZ2UgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc2xpY2Uocm9vdF9wYXRoLmxlbmd0aCkuc3BsaXQoJy8nKTtcblxuICAgIGNvbnN0IG1vZHVsZV9odG1sID0gbWFrZV9wYWdlX21lbnUocm9vdF9wYXRoLCBjdXJwYWdlWzBdLCBwYWdlcyk7XG5cbiAgICBjb25zdCBkZXNjID0gcGFnZXMuZmluZCggKHBhZ2U6IGFueSkgPT4gcGFnZS5wYXRoID09PSBjdXJwYWdlWzBdICkhO1xuICAgIGNvbnN0IHR5cGVfaHRtbCAgID0gbWFrZV9wYWdlX21lbnUocm9vdF9wYXRoICsgY3VycGFnZVswXSArIFwiL1wiLCBjdXJwYWdlWzFdLCBkZXNjLmNoaWxkcmVuKTtcblxuICAgIGNvbnN0IGRlc2NfdHlwZSA9IGRlc2MuY2hpbGRyZW4uZmluZCggKHBhZ2U6IGFueSkgPT4gKHBhZ2U/LnBhdGggPz8gcGFnZSkgPT09IGN1cnBhZ2VbMV0gKSE7XG4gICAgaWYoIHR5cGVvZiBkZXNjX3R5cGUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgLy8gdGl0bGUgbnVtXG4gICAgICAgIGNvbnN0IGRlc2MyX2lkeCA9IGRlc2NfdHlwZS5jaGlsZHJlbi5maW5kSW5kZXgoIChwYWdlOiBhbnkpID0+IHBhZ2U/LnBhdGggPz8gcGFnZSA9PT0gY3VycGFnZVsyXSApITtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taGVhZGVyX3N0YXJ0X2lkXCIsIGAke2Rlc2MyX2lkeH1gKTtcbiAgICAgICAgLy8gbWVudVxuICAgICAgICBjb25zdCBzZXNzaW9uX2h0bWwgICA9IG1ha2VfcGFnZV9tZW51KHJvb3RfcGF0aCArIGN1cnBhZ2VbMF0gKyBcIi9cIisgY3VycGFnZVsxXSArIFwiL1wiLCBjdXJwYWdlWzJdLCBkZXNjX3R5cGUuY2hpbGRyZW4pO1xuICAgICAgICBodG1sWzBdID0gc2Vzc2lvbl9odG1sO1xuICAgIH1cblxuICAgIGhlYWRlci5yZXBsYWNlQ2hpbGRyZW4obW9kdWxlX2h0bWwsIHR5cGVfaHRtbCwgLi4uaHRtbCk7XG59XG5cbmNvbnN0IHAgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCk7XG5pZiggISBwLmhhcygnZHMnKSApIHtcbiAgICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZUhlYWRlcik7XG4gICAgdXBkYXRlSGVhZGVyKCk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsImltcG9ydCBMSVNTIGZyb20gXCJMSVNTXCI7XG5pbXBvcnQgXCJzdHJ1Y3QvbWVudS50c1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwYWdlcy9SNS0wNi1WQ09EL0NNL0NNMS9pbmRleC5odG1sXCI7Il0sIm5hbWVzIjpbIm5hbWUiLCJzbmFtZSIsInBhdGgiLCJjaGlsZHJlbiIsInJvb3RfcGF0aCIsImluY2x1ZGVzIiwibG9jYXRpb24iLCJob3N0bmFtZSIsInBhZ2VzIiwibWFpbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhlYWRlciIsInRpdGxlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJodHJlZSIsImh0bWwiLCJsZXZlbCIsInBhcmVudCIsImh0cmVlX2N1cnNvciIsInRpdGxlIiwidGFnTmFtZSIsInNsaWNlIiwiZWxlbSIsInB1c2giLCJzZWFyY2hDdXJIZWFkZXIiLCJwb3NpdGlvbiIsImhlYWRlcnMiLCJpIiwibGVuZ3RoIiwib2Zmc2V0VG9wIiwiaGlkIiwiZ2V0VGl0bGVQcmVmaXgiLCJzIiwiaWR4IiwiaW5kZXhPZiIsIm51bSIsImJ1aWxkTWVudSIsIm5vZGVzIiwibWVudSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmQiLCJtYXAiLCJpdGVtIiwidGV4dENvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsInVwZGF0ZUhlYWRlciIsImxhc3QiLCJzY3JvbGxUb3AiLCJjdXJzb3IiLCJyZXZlcnNlIiwiaG5vZGUiLCJoIiwiaF9odG1sIiwibGluayIsImVtcHR5IiwibWFrZV9wYWdlX2hyZWYiLCJwYXRocHJlZml4IiwiZGVzYyIsImhyZWYiLCJtYWtlX3BhZ2VfbWVudSIsImZpbmQiLCJwYWdlIiwiY3VycGFnZSIsIndpbmRvdyIsInBhdGhuYW1lIiwic3BsaXQiLCJtb2R1bGVfaHRtbCIsInR5cGVfaHRtbCIsImRlc2NfdHlwZSIsImRlc2MyX2lkeCIsImZpbmRJbmRleCIsImJvZHkiLCJzdHlsZSIsInNldFByb3BlcnR5Iiwic2Vzc2lvbl9odG1sIiwicmVwbGFjZUNoaWxkcmVuIiwicCIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsImhhcyIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9