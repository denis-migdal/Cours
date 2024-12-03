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
                    "TP2"
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTs7U0FFQTtTQUNBOztTQUVBO1NBQ0E7U0FDQTs7Ozs7VUN0QkE7VUFDQTtVQUNBO1VBQ0E7VUFDQSx5Q0FBeUMsd0NBQXdDO1VBQ2pGO1VBQ0E7VUFDQTs7Ozs7VUNQQTs7Ozs7VUNBQTtVQUNBO1VBQ0E7VUFDQSx1REFBdUQsaUJBQWlCO1VBQ3hFO1VBQ0EsZ0RBQWdELGFBQWE7VUFDN0Q7Ozs7O1VDTkE7Ozs7Ozs7Ozs7Ozs7QUNDd0I7Ozs7Ozs7Ozs7O0FDRHhCOzs7Ozs7Ozs7Ozs7O0FDQUEsaUVBQWUscUJBQXVCLHVDQUF1QyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L21lbnUudHMiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9wYWdlcy9SNS0wNi1WQ09EL0NNL0NNMS9pbmRleC50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9wYWdlcy9SNS0wNi1WQ09EL0NNL0NNMS9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvcGFnZXMvUjUtMDYtVkNPRC9DTS9DTTEvaW5kZXgubWQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgW1xuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiUiAxLTAxIFRhYmxldXIgZXQgUmVwb3J0aW5nXCIsXG4gICAgICAgIHNuYW1lOiBcIlIxLTAxIFRhYmxldXJcIixcbiAgICAgICAgcGF0aCA6IFwiUjEtMDFcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNNXCIsXG4gICAgICAgICAgICAgICAgcGF0aDogXCJDTVwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiQ00xXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQ00yXCJcbiAgICAgICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJUUFwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiVFBcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIlRQMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQMlwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIlIgMS0wMiBCYXNlcyBkZSBEb25uw6llcyBSZWxhdGlvbm5lbGxlcyAxXCIsXG4gICAgICAgIHNuYW1lOiBcIlIxLTAyIEJEUjFcIixcbiAgICAgICAgcGF0aCA6IFwiUjEtMDJcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIFwiQ01cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlNsaWRlc1wiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiU2xpZGVzXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgXCJDTTFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDTTJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDTTNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDTTRcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJUUFwiICxcbiAgICAgICAgICAgICAgICBwYXRoIDogXCJUUFwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiVFAxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFAyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFAzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFA0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFA1XCJcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJDaGVhdCBTaGVldFwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiL2Fzc2V0cy9zcWwvY2hlYXQgc2hlZXQuc3ZnXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lIDogXCJSIDMtMDMgVGVjaG5vbG9naWVzIFdlYlwiLFxuICAgICAgICBzbmFtZTogXCJSMy0wMyBXZWIxXCIsXG4gICAgICAgIHBhdGggOiBcIlIzLTAzXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJDTVwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiQ01cIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIkNNMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIkNNMlwiLFxuICAgICAgICAgICAgICAgICAgICBcIkNNM1wiLFxuICAgICAgICAgICAgICAgICAgICBcIkNNNFwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiVFBcIixcbiAgICAgICAgICAgICAgICBwYXRoOiBcIlRQXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgXCJUUDFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJUUDJcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNoZWF0IFNoZWV0IEhUTUxcIixcbiAgICAgICAgICAgICAgICBwYXRoOiBcIi9hc3NldHMvd2ViL0hUTUw1L2NoZWF0IHNoZWV0LnN2Z1wiXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJDaGVhdCBTaGVldCBDU1NcIixcbiAgICAgICAgICAgICAgICBwYXRoOiBcIi9hc3NldHMvd2ViL0NTUzMvY2hlYXQgc2hlZXQuc3ZnXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lIDogXCJSIDUtMDYtVkNPRCBEw6l2ZWxvcHBlbWVudCBMb2dpY2llbFwiLFxuICAgICAgICBzbmFtZTogXCJSNS0wNi1WQ09EIERldiBMb2dcIixcbiAgICAgICAgcGF0aCA6IFwiUjUtMDYtVkNPRFwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ01cIixcbiAgICAgICAgICAgICAgICBwYXRoOiBcIkNNXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgXCJDTTFcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cbl07XG5cbmV4cG9ydCBjb25zdCByb290X3BhdGggPSBbXCJsb2NhbGhvc3RcIiwgXCIxMjcuMC4wLjFcIl0uaW5jbHVkZXMobG9jYXRpb24uaG9zdG5hbWUpID8gXCIvZGlzdC9kZXYvcGFnZXMvXCIgOiBcIi9Db3Vycy9kaXN0L2Rldi9wYWdlcy9cIjsiLCIvLyBPQlNPTEVURSwgdXNlIHNrZWxldG9uIG1lbnVcblxuaW1wb3J0IHBhZ2VzLCB7cm9vdF9wYXRofSBmcm9tIFwiLi9jb250ZW50XCI7XG5cbi8qXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JlcHJpbnQnLCAoKSA9PiB7XG4gIC8vLi4uXG59KTtcbiovXG5cbi8vVE9ETzogbGlua3MuLi5cbmNvbnN0IG1haW4gICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpITtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIikhO1xuXG5jb25zdCB0aXRsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcImgxLCBoMiwgaDMsIGg0XCIpO1xuXG50eXBlIE5vZGUgPSB7XG4gICAgaHRtbCAgICA6IEhUTUxFbGVtZW50LFxuICAgIGxldmVsICAgOiBudW1iZXIsXG4gICAgcGFyZW50ICA6IG51bGx8Tm9kZSxcbiAgICBjaGlsZHJlbjogTm9kZVtdXG59O1xuXG5jb25zdCBodHJlZTogTm9kZSA9IHtcbiAgICBodG1sICAgIDogbWFpbixcbiAgICBsZXZlbCAgIDogMCxcbiAgICBwYXJlbnQgIDogbnVsbCxcbiAgICBjaGlsZHJlbjogW10sXG59O1xubGV0IGh0cmVlX2N1cnNvciA9IGh0cmVlO1xuZm9yKGxldCB0aXRsZSBvZiB0aXRsZXMpIHtcbiAgICBjb25zdCBsZXZlbCA9ICt0aXRsZS50YWdOYW1lLnNsaWNlKDEpO1xuICAgIFxuICAgIHdoaWxlKCBsZXZlbCA8PSBodHJlZV9jdXJzb3IubGV2ZWwgKVxuICAgICAgICBodHJlZV9jdXJzb3IgPSBodHJlZV9jdXJzb3IucGFyZW50ITtcblxuICAgIGNvbnN0IGVsZW06IE5vZGUgPSB7XG4gICAgICAgIGh0bWw6IHRpdGxlLFxuICAgICAgICBsZXZlbCxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICBwYXJlbnQ6IGh0cmVlX2N1cnNvclxuICAgIH07XG5cblxuICAgIGh0cmVlX2N1cnNvci5jaGlsZHJlbi5wdXNoKGVsZW0pO1xuXG4gICAgaHRyZWVfY3Vyc29yID0gZWxlbTtcbn1cblxuZnVuY3Rpb24gc2VhcmNoQ3VySGVhZGVyKGh0cmVlOiBOb2RlLCBwb3NpdGlvbjogbnVtYmVyKTogbnVsbCB8IE5vZGUge1xuXG4gICAgY29uc3QgaGVhZGVycyA9IGh0cmVlLmNoaWxkcmVuO1xuXG4gICAgZm9yKGxldCBpID0gaGVhZGVycy5sZW5ndGggLSAxOyBpID49IDA7IC0taSlcbiAgICAgICAgaWYoIGhlYWRlcnNbaV0uaHRtbC5vZmZzZXRUb3AgPD0gcG9zaXRpb24gKyAzMiApXG4gICAgICAgICAgICByZXR1cm4gc2VhcmNoQ3VySGVhZGVyKGhlYWRlcnNbaV0sIHBvc2l0aW9uKSA/PyBoZWFkZXJzW2ldO1xuXG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmNvbnN0IGhpZCA9IFtcbiAgICBbXSxcbiAgICBbXCJJXCIsIFwiSUlcIiwgXCJJSUlcIiwgXCJJVlwiXSxcbiAgICBbXCIxXCIsIFwiMlwiLFwiM1wiLFwiNVwiLFwiNlwiLFwiN1wiLFwiOFwiLFwiOVwiXSxcbiAgICBbXCJhXCIsIFwiYlwiLFwiY1wiLFwiZFwiLFwiZVwiLFwiZlwiLFwiZ1wiLFwiaFwiXSxcbl1cblxuZnVuY3Rpb24gZ2V0VGl0bGVQcmVmaXgoczogTm9kZSkge1xuXG4gICAgaWYoIHMubGV2ZWwgPj0gaGlkLmxlbmd0aCApXG4gICAgICAgIHJldHVybiBcIlwiO1xuXG4gICAgY29uc3QgaWR4ID0gcy5wYXJlbnQhLmNoaWxkcmVuLmluZGV4T2Yocyk7XG5cbiAgICBjb25zdCBudW0gPSBoaWRbcy5sZXZlbF1baWR4XTtcblxuICAgIHJldHVybiBgJHtudW19LiBgO1xufVxuXG5mdW5jdGlvbiBidWlsZE1lbnUobm9kZXM6IE5vZGVbXSkge1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICAgIG1lbnUuYXBwZW5kKCAuLi4gbm9kZXMubWFwKCAocyxpZHgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBpdGVtLnRleHRDb250ZW50PSBgJHtnZXRUaXRsZVByZWZpeChzKX0ke3MuaHRtbC50ZXh0Q29udGVudH1gO1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgYCMke3MuaHRtbC5pZH1gKTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSkgKTtcblxuICAgIHJldHVybiBtZW51O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVIZWFkZXIoKSB7XG5cbiAgICBjb25zdCBsYXN0ID0gc2VhcmNoQ3VySGVhZGVyKCBodHJlZSwgbWFpbi5zY3JvbGxUb3ApITtcblxuICAgIGxldCBoZWFkZXJzID0gW107XG4gICAgbGV0IGN1cnNvciAgPSBsYXN0O1xuXG4gICAgaWYoIGN1cnNvciAhPT0gbnVsbClcbiAgICAgICAgd2hpbGUoY3Vyc29yLmh0bWwgIT09IG1haW4pIHtcbiAgICAgICAgICAgIGhlYWRlcnMucHVzaChjdXJzb3IpO1xuICAgICAgICAgICAgY3Vyc29yID0gY3Vyc29yLnBhcmVudCE7XG4gICAgICAgIH1cblxuICAgIGNvbnN0IGh0bWwgPSBoZWFkZXJzLnJldmVyc2UoKS5tYXAoIChobm9kZSxpKSA9PiB7XG5cbiAgICAgICAgY29uc3QgaCA9IGhub2RlLmh0bWw7XG4gICAgICAgIGNvbnN0IGhfaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgbGluay50ZXh0Q29udGVudCA9IGAke2dldFRpdGxlUHJlZml4KGhub2RlKX0ke2gudGV4dENvbnRlbnR9YDtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgIyR7aC5pZH1gKTtcblxuICAgICAgICBjb25zdCBtZW51ID0gYnVpbGRNZW51KGhub2RlLnBhcmVudCEuY2hpbGRyZW4pO1xuICAgICAgICBoX2h0bWwuYXBwZW5kKGxpbmssIG1lbnUpO1xuXG4gICAgICAgIHJldHVybiBoX2h0bWw7XG4gICAgfSk7XG5cbiAgICBpZiggbGFzdCAhPT0gbnVsbCAmJiBsYXN0LmNoaWxkcmVuLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBjb25zdCBlbXB0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgICAgIGVtcHR5LmFwcGVuZCggYnVpbGRNZW51KGxhc3QuY2hpbGRyZW4pICk7XG5cbiAgICAgICAgaHRtbC5wdXNoKGVtcHR5KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VfcGFnZV9ocmVmKHBhdGhwcmVmaXg6IHN0cmluZywgcGF0aDogc3RyaW5nLCBkZXNjOiBhbnkpIHtcblxuICAgICAgICAvLyBoNGNrLi4uXG4gICAgICAgIGlmKCBwYXRoWzBdID09PSBcIi9cIiApXG4gICAgICAgICAgICByZXR1cm4gYCR7cm9vdF9wYXRoLnNsaWNlKDAsLTYpfS8ke3BhdGh9YDtcblxuICAgICAgICBsZXQgaHJlZiA9IGAke3BhdGhwcmVmaXh9JHtwYXRofS9gO1xuXG4gICAgICAgIHdoaWxlKGRlc2MuY2hpbGRyZW4/Lmxlbmd0aCkge1xuICAgICAgICAgICAgZGVzYyA9IGRlc2MuY2hpbGRyZW5bMF07XG4gICAgICAgICAgICBocmVmICs9IGAke2Rlc2MucGF0aCA/PyBkZXNjfS9gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGhyZWY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZV9wYWdlX21lbnUocGF0aHByZWZpeDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHBhZ2VzOiBhbnkpIHtcbiAgICAgICAgY29uc3QgZGVzYyA9IHBhZ2VzLmZpbmQoIChwYWdlOiBhbnkpID0+IHBhZ2UgPT09IHBhdGggfHwgcGFnZS5wYXRoID09PSBwYXRoICkhO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gZGVzYy5zbmFtZSA/PyBkZXNjLm5hbWUgPz8gZGVzYztcbiAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgbWFrZV9wYWdlX2hyZWYocGF0aHByZWZpeCwgcGF0aCwgZGVzYykgKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgICBcbiAgICAgICAgICAgIG1lbnUuYXBwZW5kKCAuLi4gcGFnZXMubWFwKCAocGFnZTphbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudD0gcGFnZS5uYW1lID8/IHBhZ2U7XG5cbiAgICAgICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgbWFrZV9wYWdlX2hyZWYocGF0aHByZWZpeCwgcGFnZS5wYXRoPz9wYWdlLCBwYWdlKSApO1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfSkgKTtcbiAgICBcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kKGxpbmssIG1lbnUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICAgIFxuICAgIGxldCBjdXJwYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKHJvb3RfcGF0aC5sZW5ndGgpLnNwbGl0KCcvJyk7XG5cbiAgICBjb25zdCBtb2R1bGVfaHRtbCA9IG1ha2VfcGFnZV9tZW51KHJvb3RfcGF0aCwgY3VycGFnZVswXSwgcGFnZXMpO1xuXG4gICAgY29uc3QgZGVzYyA9IHBhZ2VzLmZpbmQoIChwYWdlOiBhbnkpID0+IHBhZ2UucGF0aCA9PT0gY3VycGFnZVswXSApITtcbiAgICBjb25zdCB0eXBlX2h0bWwgICA9IG1ha2VfcGFnZV9tZW51KHJvb3RfcGF0aCArIGN1cnBhZ2VbMF0gKyBcIi9cIiwgY3VycGFnZVsxXSwgZGVzYy5jaGlsZHJlbik7XG5cbiAgICBjb25zdCBkZXNjX3R5cGUgPSBkZXNjLmNoaWxkcmVuLmZpbmQoIChwYWdlOiBhbnkpID0+IChwYWdlPy5wYXRoID8/IHBhZ2UpID09PSBjdXJwYWdlWzFdICkhO1xuICAgIGlmKCB0eXBlb2YgZGVzY190eXBlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIC8vIHRpdGxlIG51bVxuICAgICAgICBjb25zdCBkZXNjMl9pZHggPSBkZXNjX3R5cGUuY2hpbGRyZW4uZmluZEluZGV4KCAocGFnZTogYW55KSA9PiBwYWdlPy5wYXRoID8/IHBhZ2UgPT09IGN1cnBhZ2VbMl0gKSE7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoXCItLWhlYWRlcl9zdGFydF9pZFwiLCBgJHtkZXNjMl9pZHh9YCk7XG4gICAgICAgIC8vIG1lbnVcbiAgICAgICAgY29uc3Qgc2Vzc2lvbl9odG1sICAgPSBtYWtlX3BhZ2VfbWVudShyb290X3BhdGggKyBjdXJwYWdlWzBdICsgXCIvXCIrIGN1cnBhZ2VbMV0gKyBcIi9cIiwgY3VycGFnZVsyXSwgZGVzY190eXBlLmNoaWxkcmVuKTtcbiAgICAgICAgaHRtbFswXSA9IHNlc3Npb25faHRtbDtcbiAgICB9XG5cbiAgICBoZWFkZXIucmVwbGFjZUNoaWxkcmVuKG1vZHVsZV9odG1sLCB0eXBlX2h0bWwsIC4uLmh0bWwpO1xufVxuXG5jb25zdCBwID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpO1xuaWYoICEgcC5oYXMoJ2RzJykgKSB7XG4gICAgbWFpbi5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGVIZWFkZXIpO1xuICAgIHVwZGF0ZUhlYWRlcigpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJpbXBvcnQgTElTUyBmcm9tIFwiTElTU1wiO1xuaW1wb3J0IFwic3RydWN0L21lbnUudHNcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicGFnZXMvUjUtMDYtVkNPRC9DTS9DTTEvaW5kZXguaHRtbFwiOyJdLCJuYW1lcyI6WyJuYW1lIiwic25hbWUiLCJwYXRoIiwiY2hpbGRyZW4iLCJyb290X3BhdGgiLCJpbmNsdWRlcyIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJwYWdlcyIsIm1haW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoZWFkZXIiLCJ0aXRsZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaHRyZWUiLCJodG1sIiwibGV2ZWwiLCJwYXJlbnQiLCJodHJlZV9jdXJzb3IiLCJ0aXRsZSIsInRhZ05hbWUiLCJzbGljZSIsImVsZW0iLCJwdXNoIiwic2VhcmNoQ3VySGVhZGVyIiwicG9zaXRpb24iLCJoZWFkZXJzIiwiaSIsImxlbmd0aCIsIm9mZnNldFRvcCIsImhpZCIsImdldFRpdGxlUHJlZml4IiwicyIsImlkeCIsImluZGV4T2YiLCJudW0iLCJidWlsZE1lbnUiLCJub2RlcyIsIm1lbnUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwibWFwIiwiaXRlbSIsInRleHRDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiaWQiLCJ1cGRhdGVIZWFkZXIiLCJsYXN0Iiwic2Nyb2xsVG9wIiwiY3Vyc29yIiwicmV2ZXJzZSIsImhub2RlIiwiaCIsImhfaHRtbCIsImxpbmsiLCJlbXB0eSIsIm1ha2VfcGFnZV9ocmVmIiwicGF0aHByZWZpeCIsImRlc2MiLCJocmVmIiwibWFrZV9wYWdlX21lbnUiLCJmaW5kIiwicGFnZSIsImN1cnBhZ2UiLCJ3aW5kb3ciLCJwYXRobmFtZSIsInNwbGl0IiwibW9kdWxlX2h0bWwiLCJ0eXBlX2h0bWwiLCJkZXNjX3R5cGUiLCJkZXNjMl9pZHgiLCJmaW5kSW5kZXgiLCJib2R5Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsInNlc3Npb25faHRtbCIsInJlcGxhY2VDaGlsZHJlbiIsInAiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJoYXMiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==