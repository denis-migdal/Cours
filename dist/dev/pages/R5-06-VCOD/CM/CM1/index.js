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
                    "TP1"
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTs7U0FFQTtTQUNBOztTQUVBO1NBQ0E7U0FDQTs7Ozs7VUN0QkE7VUFDQTtVQUNBO1VBQ0E7VUFDQSx5Q0FBeUMsd0NBQXdDO1VBQ2pGO1VBQ0E7VUFDQTs7Ozs7VUNQQTs7Ozs7VUNBQTtVQUNBO1VBQ0E7VUFDQSx1REFBdUQsaUJBQWlCO1VBQ3hFO1VBQ0EsZ0RBQWdELGFBQWE7VUFDN0Q7Ozs7O1VDTkE7Ozs7Ozs7Ozs7Ozs7QUNDd0I7Ozs7Ozs7Ozs7O0FDRHhCOzs7Ozs7Ozs7Ozs7O0FDQUEsaUVBQWUscUJBQXVCLHVDQUF1QyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L21lbnUudHMiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9wYWdlcy9SNS0wNi1WQ09EL0NNL0NNMS9pbmRleC50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9wYWdlcy9SNS0wNi1WQ09EL0NNL0NNMS9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvcGFnZXMvUjUtMDYtVkNPRC9DTS9DTTEvaW5kZXgubWQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgW1xuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiUiAxLTAxIFRhYmxldXIgZXQgUmVwb3J0aW5nXCIsXG4gICAgICAgIHNuYW1lOiBcIlIxLTAxIFRhYmxldXJcIixcbiAgICAgICAgcGF0aCA6IFwiUjEtMDFcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNNXCIsXG4gICAgICAgICAgICAgICAgcGF0aDogXCJDTVwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiQ00xXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQ00yXCJcbiAgICAgICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJUUFwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiVFBcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIlRQMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQMlwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIlIgMS0wMiBCYXNlcyBkZSBEb25uw6llcyBSZWxhdGlvbm5lbGxlcyAxXCIsXG4gICAgICAgIHNuYW1lOiBcIlIxLTAyIEJEUjFcIixcbiAgICAgICAgcGF0aCA6IFwiUjEtMDJcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIFwiQ01cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlNsaWRlc1wiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiU2xpZGVzXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgXCJDTTFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDTTJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDTTNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDTTRcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJUUFwiICxcbiAgICAgICAgICAgICAgICBwYXRoIDogXCJUUFwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiVFAxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFAyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFAzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFA0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFA1XCJcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJDaGVhdCBTaGVldFwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiL2Fzc2V0cy9zcWwvY2hlYXQgc2hlZXQuc3ZnXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lIDogXCJSIDMtMDMgVGVjaG5vbG9naWVzIFdlYlwiLFxuICAgICAgICBzbmFtZTogXCJSMy0wMyBXZWIxXCIsXG4gICAgICAgIHBhdGggOiBcIlIzLTAzXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJDTVwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiQ01cIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIkNNMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIkNNMlwiLFxuICAgICAgICAgICAgICAgICAgICBcIkNNM1wiLFxuICAgICAgICAgICAgICAgICAgICBcIkNNNFwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiVFBcIixcbiAgICAgICAgICAgICAgICBwYXRoOiBcIlRQXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgXCJUUDFcIixcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJDaGVhdCBTaGVldCBIVE1MXCIsXG4gICAgICAgICAgICAgICAgcGF0aDogXCIvYXNzZXRzL3dlYi9IVE1MNS9jaGVhdCBzaGVldC5zdmdcIlxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ2hlYXQgU2hlZXQgQ1NTXCIsXG4gICAgICAgICAgICAgICAgcGF0aDogXCIvYXNzZXRzL3dlYi9DU1MzL2NoZWF0IHNoZWV0LnN2Z1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiUiA1LTA2LVZDT0QgRMOpdmVsb3BwZW1lbnQgTG9naWNpZWxcIixcbiAgICAgICAgc25hbWU6IFwiUjUtMDYtVkNPRCBEZXYgTG9nXCIsXG4gICAgICAgIHBhdGggOiBcIlI1LTA2LVZDT0RcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNNXCIsXG4gICAgICAgICAgICAgICAgcGF0aDogXCJDTVwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiQ00xXCJcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG5dO1xuXG5leHBvcnQgY29uc3Qgcm9vdF9wYXRoID0gW1wibG9jYWxob3N0XCIsIFwiMTI3LjAuMC4xXCJdLmluY2x1ZGVzKGxvY2F0aW9uLmhvc3RuYW1lKSA/IFwiL2Rpc3QvZGV2L3BhZ2VzL1wiIDogXCIvQ291cnMvZGlzdC9kZXYvcGFnZXMvXCI7IiwiLy8gT0JTT0xFVEUsIHVzZSBza2VsZXRvbiBtZW51XG5cbmltcG9ydCBwYWdlcywge3Jvb3RfcGF0aH0gZnJvbSBcIi4vY29udGVudFwiO1xuXG4vKlxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXByaW50JywgKCkgPT4ge1xuICAvLy4uLlxufSk7XG4qL1xuXG4vL1RPRE86IGxpbmtzLi4uXG5jb25zdCBtYWluICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKSE7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpITtcblxuY29uc3QgdGl0bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCJoMSwgaDIsIGgzLCBoNFwiKTtcblxudHlwZSBOb2RlID0ge1xuICAgIGh0bWwgICAgOiBIVE1MRWxlbWVudCxcbiAgICBsZXZlbCAgIDogbnVtYmVyLFxuICAgIHBhcmVudCAgOiBudWxsfE5vZGUsXG4gICAgY2hpbGRyZW46IE5vZGVbXVxufTtcblxuY29uc3QgaHRyZWU6IE5vZGUgPSB7XG4gICAgaHRtbCAgICA6IG1haW4sXG4gICAgbGV2ZWwgICA6IDAsXG4gICAgcGFyZW50ICA6IG51bGwsXG4gICAgY2hpbGRyZW46IFtdLFxufTtcbmxldCBodHJlZV9jdXJzb3IgPSBodHJlZTtcbmZvcihsZXQgdGl0bGUgb2YgdGl0bGVzKSB7XG4gICAgY29uc3QgbGV2ZWwgPSArdGl0bGUudGFnTmFtZS5zbGljZSgxKTtcbiAgICBcbiAgICB3aGlsZSggbGV2ZWwgPD0gaHRyZWVfY3Vyc29yLmxldmVsIClcbiAgICAgICAgaHRyZWVfY3Vyc29yID0gaHRyZWVfY3Vyc29yLnBhcmVudCE7XG5cbiAgICBjb25zdCBlbGVtOiBOb2RlID0ge1xuICAgICAgICBodG1sOiB0aXRsZSxcbiAgICAgICAgbGV2ZWwsXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgcGFyZW50OiBodHJlZV9jdXJzb3JcbiAgICB9O1xuXG5cbiAgICBodHJlZV9jdXJzb3IuY2hpbGRyZW4ucHVzaChlbGVtKTtcblxuICAgIGh0cmVlX2N1cnNvciA9IGVsZW07XG59XG5cbmZ1bmN0aW9uIHNlYXJjaEN1ckhlYWRlcihodHJlZTogTm9kZSwgcG9zaXRpb246IG51bWJlcik6IG51bGwgfCBOb2RlIHtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBodHJlZS5jaGlsZHJlbjtcblxuICAgIGZvcihsZXQgaSA9IGhlYWRlcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpXG4gICAgICAgIGlmKCBoZWFkZXJzW2ldLmh0bWwub2Zmc2V0VG9wIDw9IHBvc2l0aW9uICsgMzIgKVxuICAgICAgICAgICAgcmV0dXJuIHNlYXJjaEN1ckhlYWRlcihoZWFkZXJzW2ldLCBwb3NpdGlvbikgPz8gaGVhZGVyc1tpXTtcblxuICAgIHJldHVybiBudWxsO1xufVxuXG5jb25zdCBoaWQgPSBbXG4gICAgW10sXG4gICAgW1wiSVwiLCBcIklJXCIsIFwiSUlJXCIsIFwiSVZcIl0sXG4gICAgW1wiMVwiLCBcIjJcIixcIjNcIixcIjVcIixcIjZcIixcIjdcIixcIjhcIixcIjlcIl0sXG4gICAgW1wiYVwiLCBcImJcIixcImNcIixcImRcIixcImVcIixcImZcIixcImdcIixcImhcIl0sXG5dXG5cbmZ1bmN0aW9uIGdldFRpdGxlUHJlZml4KHM6IE5vZGUpIHtcblxuICAgIGlmKCBzLmxldmVsID49IGhpZC5sZW5ndGggKVxuICAgICAgICByZXR1cm4gXCJcIjtcblxuICAgIGNvbnN0IGlkeCA9IHMucGFyZW50IS5jaGlsZHJlbi5pbmRleE9mKHMpO1xuXG4gICAgY29uc3QgbnVtID0gaGlkW3MubGV2ZWxdW2lkeF07XG5cbiAgICByZXR1cm4gYCR7bnVtfS4gYDtcbn1cblxuZnVuY3Rpb24gYnVpbGRNZW51KG5vZGVzOiBOb2RlW10pIHtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG5cbiAgICBtZW51LmFwcGVuZCggLi4uIG5vZGVzLm1hcCggKHMsaWR4KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgaXRlbS50ZXh0Q29udGVudD0gYCR7Z2V0VGl0bGVQcmVmaXgocyl9JHtzLmh0bWwudGV4dENvbnRlbnR9YDtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGAjJHtzLmh0bWwuaWR9YCk7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pICk7XG5cbiAgICByZXR1cm4gbWVudTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlSGVhZGVyKCkge1xuXG4gICAgY29uc3QgbGFzdCA9IHNlYXJjaEN1ckhlYWRlciggaHRyZWUsIG1haW4uc2Nyb2xsVG9wKSE7XG5cbiAgICBsZXQgaGVhZGVycyA9IFtdO1xuICAgIGxldCBjdXJzb3IgID0gbGFzdDtcblxuICAgIGlmKCBjdXJzb3IgIT09IG51bGwpXG4gICAgICAgIHdoaWxlKGN1cnNvci5odG1sICE9PSBtYWluKSB7XG4gICAgICAgICAgICBoZWFkZXJzLnB1c2goY3Vyc29yKTtcbiAgICAgICAgICAgIGN1cnNvciA9IGN1cnNvci5wYXJlbnQhO1xuICAgICAgICB9XG5cbiAgICBjb25zdCBodG1sID0gaGVhZGVycy5yZXZlcnNlKCkubWFwKCAoaG5vZGUsaSkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGggPSBobm9kZS5odG1sO1xuICAgICAgICBjb25zdCBoX2h0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSBgJHtnZXRUaXRsZVByZWZpeChobm9kZSl9JHtoLnRleHRDb250ZW50fWA7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgYCMke2guaWR9YCk7XG5cbiAgICAgICAgY29uc3QgbWVudSA9IGJ1aWxkTWVudShobm9kZS5wYXJlbnQhLmNoaWxkcmVuKTtcbiAgICAgICAgaF9odG1sLmFwcGVuZChsaW5rLCBtZW51KTtcblxuICAgICAgICByZXR1cm4gaF9odG1sO1xuICAgIH0pO1xuXG4gICAgaWYoIGxhc3QgIT09IG51bGwgJiYgbGFzdC5jaGlsZHJlbi5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgZW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgICAgICBlbXB0eS5hcHBlbmQoIGJ1aWxkTWVudShsYXN0LmNoaWxkcmVuKSApO1xuXG4gICAgICAgIGh0bWwucHVzaChlbXB0eSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlX3BhZ2VfaHJlZihwYXRocHJlZml4OiBzdHJpbmcsIHBhdGg6IHN0cmluZywgZGVzYzogYW55KSB7XG5cbiAgICAgICAgLy8gaDRjay4uLlxuICAgICAgICBpZiggcGF0aFswXSA9PT0gXCIvXCIgKVxuICAgICAgICAgICAgcmV0dXJuIGAke3Jvb3RfcGF0aC5zbGljZSgwLC02KX0vJHtwYXRofWA7XG5cbiAgICAgICAgbGV0IGhyZWYgPSBgJHtwYXRocHJlZml4fSR7cGF0aH0vYDtcblxuICAgICAgICB3aGlsZShkZXNjLmNoaWxkcmVuPy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRlc2MgPSBkZXNjLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgaHJlZiArPSBgJHtkZXNjLnBhdGggPz8gZGVzY30vYDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBocmVmO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VfcGFnZV9tZW51KHBhdGhwcmVmaXg6IHN0cmluZywgcGF0aDogc3RyaW5nLCBwYWdlczogYW55KSB7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBwYWdlcy5maW5kKCAocGFnZTogYW55KSA9PiBwYWdlID09PSBwYXRoIHx8IHBhZ2UucGF0aCA9PT0gcGF0aCApITtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgbGluay50ZXh0Q29udGVudCA9IGRlc2Muc25hbWUgPz8gZGVzYy5uYW1lID8/IGRlc2M7XG4gICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIG1ha2VfcGFnZV9ocmVmKHBhdGhwcmVmaXgsIHBhdGgsIGRlc2MpICk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gICAgXG4gICAgICAgICAgICBtZW51LmFwcGVuZCggLi4uIHBhZ2VzLm1hcCggKHBhZ2U6YW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQ9IHBhZ2UubmFtZSA/PyBwYWdlO1xuXG4gICAgICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIG1ha2VfcGFnZV9ocmVmKHBhdGhwcmVmaXgsIHBhZ2UucGF0aD8/cGFnZSwgcGFnZSkgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH0pICk7XG4gICAgXG4gICAgICAgICAgICBodG1sLmFwcGVuZChsaW5rLCBtZW51KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICBcbiAgICBsZXQgY3VycGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zbGljZShyb290X3BhdGgubGVuZ3RoKS5zcGxpdCgnLycpO1xuXG4gICAgY29uc3QgbW9kdWxlX2h0bWwgPSBtYWtlX3BhZ2VfbWVudShyb290X3BhdGgsIGN1cnBhZ2VbMF0sIHBhZ2VzKTtcblxuICAgIGNvbnN0IGRlc2MgPSBwYWdlcy5maW5kKCAocGFnZTogYW55KSA9PiBwYWdlLnBhdGggPT09IGN1cnBhZ2VbMF0gKSE7XG4gICAgY29uc3QgdHlwZV9odG1sICAgPSBtYWtlX3BhZ2VfbWVudShyb290X3BhdGggKyBjdXJwYWdlWzBdICsgXCIvXCIsIGN1cnBhZ2VbMV0sIGRlc2MuY2hpbGRyZW4pO1xuXG4gICAgY29uc3QgZGVzY190eXBlID0gZGVzYy5jaGlsZHJlbi5maW5kKCAocGFnZTogYW55KSA9PiAocGFnZT8ucGF0aCA/PyBwYWdlKSA9PT0gY3VycGFnZVsxXSApITtcbiAgICBpZiggdHlwZW9mIGRlc2NfdHlwZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAvLyB0aXRsZSBudW1cbiAgICAgICAgY29uc3QgZGVzYzJfaWR4ID0gZGVzY190eXBlLmNoaWxkcmVuLmZpbmRJbmRleCggKHBhZ2U6IGFueSkgPT4gcGFnZT8ucGF0aCA/PyBwYWdlID09PSBjdXJwYWdlWzJdICkhO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1oZWFkZXJfc3RhcnRfaWRcIiwgYCR7ZGVzYzJfaWR4fWApO1xuICAgICAgICAvLyBtZW51XG4gICAgICAgIGNvbnN0IHNlc3Npb25faHRtbCAgID0gbWFrZV9wYWdlX21lbnUocm9vdF9wYXRoICsgY3VycGFnZVswXSArIFwiL1wiKyBjdXJwYWdlWzFdICsgXCIvXCIsIGN1cnBhZ2VbMl0sIGRlc2NfdHlwZS5jaGlsZHJlbik7XG4gICAgICAgIGh0bWxbMF0gPSBzZXNzaW9uX2h0bWw7XG4gICAgfVxuXG4gICAgaGVhZGVyLnJlcGxhY2VDaGlsZHJlbihtb2R1bGVfaHRtbCwgdHlwZV9odG1sLCAuLi5odG1sKTtcbn1cblxuY29uc3QgcCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKTtcbmlmKCAhIHAuaGFzKCdkcycpICkge1xuICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlSGVhZGVyKTtcbiAgICB1cGRhdGVIZWFkZXIoKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiaW1wb3J0IExJU1MgZnJvbSBcIkxJU1NcIjtcbmltcG9ydCBcInN0cnVjdC9tZW51LnRzXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInBhZ2VzL1I1LTA2LVZDT0QvQ00vQ00xL2luZGV4Lmh0bWxcIjsiXSwibmFtZXMiOlsibmFtZSIsInNuYW1lIiwicGF0aCIsImNoaWxkcmVuIiwicm9vdF9wYXRoIiwiaW5jbHVkZXMiLCJsb2NhdGlvbiIsImhvc3RuYW1lIiwicGFnZXMiLCJtYWluIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGVhZGVyIiwidGl0bGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImh0cmVlIiwiaHRtbCIsImxldmVsIiwicGFyZW50IiwiaHRyZWVfY3Vyc29yIiwidGl0bGUiLCJ0YWdOYW1lIiwic2xpY2UiLCJlbGVtIiwicHVzaCIsInNlYXJjaEN1ckhlYWRlciIsInBvc2l0aW9uIiwiaGVhZGVycyIsImkiLCJsZW5ndGgiLCJvZmZzZXRUb3AiLCJoaWQiLCJnZXRUaXRsZVByZWZpeCIsInMiLCJpZHgiLCJpbmRleE9mIiwibnVtIiwiYnVpbGRNZW51Iiwibm9kZXMiLCJtZW51IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsIm1hcCIsIml0ZW0iLCJ0ZXh0Q29udGVudCIsInNldEF0dHJpYnV0ZSIsImlkIiwidXBkYXRlSGVhZGVyIiwibGFzdCIsInNjcm9sbFRvcCIsImN1cnNvciIsInJldmVyc2UiLCJobm9kZSIsImgiLCJoX2h0bWwiLCJsaW5rIiwiZW1wdHkiLCJtYWtlX3BhZ2VfaHJlZiIsInBhdGhwcmVmaXgiLCJkZXNjIiwiaHJlZiIsIm1ha2VfcGFnZV9tZW51IiwiZmluZCIsInBhZ2UiLCJjdXJwYWdlIiwid2luZG93IiwicGF0aG5hbWUiLCJzcGxpdCIsIm1vZHVsZV9odG1sIiwidHlwZV9odG1sIiwiZGVzY190eXBlIiwiZGVzYzJfaWR4IiwiZmluZEluZGV4IiwiYm9keSIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJzZXNzaW9uX2h0bWwiLCJyZXBsYWNlQ2hpbGRyZW4iLCJwIiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwiaGFzIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=