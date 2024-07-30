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
        name: "R 1-02 Bases de Données Relationnelles 1",
        sname: "R1-02 BDR1",
        path: "R1-02",
        children: [
            "CM",
            {
                name: "TP",
                path: "TP",
                children: [
                    "TP1"
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
    while(cursor.html !== main){
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
    if (last.children.length !== 0) {
        const empty = document.createElement("span");
        empty.append(buildMenu(last.children));
        html.push(empty);
    }
    function make_page_href(pathprefix, path, desc) {
        let href = `${pathprefix}${path}/`;
        if (desc.children?.length) {
            desc = desc.children[0];
            href += `${desc.path ?? desc}/`;
        }
        return href;
    }
    function make_page_menu(pathprefix, path, pages) {
        const desc = pages.find((page)=>page === path || page.path === path);
        console.warn(pages, path);
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
    header.replaceChildren(module_html, type_html, ...html);
}
main.addEventListener('scroll', updateHeader);
updateHeader();


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
/*!*****************************************!*\
  !*** ./src/pages/R1-02/TP/TP1/index.ts ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _struct_menu_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../struct/menu.ts */ "./src/struct/menu.ts");


})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./src/pages/R1-02/TP/TP1/index.css ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*****************************************!*\
  !*** ./src/pages/R1-02/TP/TP1/index.md ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "pages/R1-02/TP/TP1/index.html");
})();

var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxFQUFFMEMsS0FBSyxDQUFDO0lBRXJFLE1BQU1DLGNBQWNULGVBQWUzRCwrQ0FBU0EsRUFBRWdFLE9BQU8sQ0FBQyxFQUFFLEVBQUU1RCxnREFBS0E7SUFFL0QsTUFBTXFELE9BQU9yRCxnREFBS0EsQ0FBQ3dELElBQUksQ0FBRSxDQUFDQyxPQUFjQSxLQUFLL0QsSUFBSSxLQUFLa0UsT0FBTyxDQUFDLEVBQUU7SUFDaEUsTUFBTUssWUFBY1YsZUFBZTNELCtDQUFTQSxHQUFHZ0UsT0FBTyxDQUFDLEVBQUUsR0FBRyxLQUFLQSxPQUFPLENBQUMsRUFBRSxFQUFFUCxLQUFLMUQsUUFBUTtJQUUxRlMsT0FBTzhELGVBQWUsQ0FBQ0YsYUFBYUMsY0FBY3pEO0FBQ3REO0FBRUFQLEtBQUtrRSxnQkFBZ0IsQ0FBQyxVQUFVMUI7QUFDaENBOzs7Ozs7O1NDbExBO1NBQ0E7O1NBRUE7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7O1NBRUE7U0FDQTs7U0FFQTtTQUNBO1NBQ0E7Ozs7O1VDdEJBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EseUNBQXlDLHdDQUF3QztVQUNqRjtVQUNBO1VBQ0E7Ozs7O1VDUEE7Ozs7O1VDQUE7VUFDQTtVQUNBO1VBQ0EsdURBQXVELGlCQUFpQjtVQUN4RTtVQUNBLGdEQUFnRCxhQUFhO1VBQzdEOzs7OztVQ05BOzs7Ozs7Ozs7Ozs7O0FDQW9DOzs7Ozs7Ozs7OztBQ0FwQzs7Ozs7Ozs7Ozs7OztBQ0FBLGlFQUFlLHFCQUF1QixrQ0FBa0MsRSIsInNvdXJjZXMiOlsid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jb250ZW50LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9tZW51LnRzIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvcGFnZXMvUjEtMDIvVFAvVFAxL2luZGV4LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3BhZ2VzL1IxLTAyL1RQL1RQMS9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvcGFnZXMvUjEtMDIvVFAvVFAxL2luZGV4Lm1kIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFtcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIlIgMS0wMiBCYXNlcyBkZSBEb25uw6llcyBSZWxhdGlvbm5lbGxlcyAxXCIsXG4gICAgICAgIHNuYW1lOiBcIlIxLTAyIEJEUjFcIixcbiAgICAgICAgcGF0aCA6IFwiUjEtMDJcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIFwiQ01cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlRQXCIgLFxuICAgICAgICAgICAgICAgIHBhdGggOiBcIlRQXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgXCJUUDFcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cbl07XG5cbmV4cG9ydCBjb25zdCByb290X3BhdGggPSBbXCJsb2NhbGhvc3RcIiwgXCIxMjcuMC4wLjFcIl0uaW5jbHVkZXMobG9jYXRpb24uaG9zdG5hbWUpID8gXCIvZGlzdC9kZXYvcGFnZXMvXCIgOiBcIi9Db3Vycy9kaXN0L2Rldi9wYWdlcy9cIjsiLCJcbmltcG9ydCBwYWdlcywge3Jvb3RfcGF0aH0gZnJvbSBcIi4vY29udGVudFwiO1xuXG4vKlxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXByaW50JywgKCkgPT4ge1xuICAvLy4uLlxufSk7XG4qL1xuXG4vL1RPRE86IGxpbmtzLi4uXG5jb25zdCBtYWluICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKSE7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpITtcblxuY29uc3QgdGl0bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCJoMSwgaDIsIGgzLCBoNFwiKTtcblxudHlwZSBOb2RlID0ge1xuICAgIGh0bWwgICAgOiBIVE1MRWxlbWVudCxcbiAgICBsZXZlbCAgIDogbnVtYmVyLFxuICAgIHBhcmVudCAgOiBudWxsfE5vZGUsXG4gICAgY2hpbGRyZW46IE5vZGVbXVxufTtcblxuY29uc3QgaHRyZWU6IE5vZGUgPSB7XG4gICAgaHRtbCAgICA6IG1haW4sXG4gICAgbGV2ZWwgICA6IDAsXG4gICAgcGFyZW50ICA6IG51bGwsXG4gICAgY2hpbGRyZW46IFtdLFxufTtcbmxldCBodHJlZV9jdXJzb3IgPSBodHJlZTtcbmZvcihsZXQgdGl0bGUgb2YgdGl0bGVzKSB7XG4gICAgY29uc3QgbGV2ZWwgPSArdGl0bGUudGFnTmFtZS5zbGljZSgxKTtcbiAgICBcbiAgICB3aGlsZSggbGV2ZWwgPD0gaHRyZWVfY3Vyc29yLmxldmVsIClcbiAgICAgICAgaHRyZWVfY3Vyc29yID0gaHRyZWVfY3Vyc29yLnBhcmVudCE7XG5cbiAgICBjb25zdCBlbGVtOiBOb2RlID0ge1xuICAgICAgICBodG1sOiB0aXRsZSxcbiAgICAgICAgbGV2ZWwsXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgcGFyZW50OiBodHJlZV9jdXJzb3JcbiAgICB9O1xuXG5cbiAgICBodHJlZV9jdXJzb3IuY2hpbGRyZW4ucHVzaChlbGVtKTtcblxuICAgIGh0cmVlX2N1cnNvciA9IGVsZW07XG59XG5cbmZ1bmN0aW9uIHNlYXJjaEN1ckhlYWRlcihodHJlZTogTm9kZSwgcG9zaXRpb246IG51bWJlcik6IG51bGwgfCBOb2RlIHtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBodHJlZS5jaGlsZHJlbjtcblxuICAgIGZvcihsZXQgaSA9IGhlYWRlcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpXG4gICAgICAgIGlmKCBoZWFkZXJzW2ldLmh0bWwub2Zmc2V0VG9wIDw9IHBvc2l0aW9uICsgMzIgKVxuICAgICAgICAgICAgcmV0dXJuIHNlYXJjaEN1ckhlYWRlcihoZWFkZXJzW2ldLCBwb3NpdGlvbikgPz8gaGVhZGVyc1tpXTtcblxuICAgIHJldHVybiBudWxsO1xufVxuXG5jb25zdCBoaWQgPSBbXG4gICAgW10sXG4gICAgW1wiSVwiLCBcIklJXCIsIFwiSUlJXCIsIFwiSVZcIl0sXG4gICAgW1wiMVwiLCBcIjJcIixcIjNcIixcIjVcIixcIjZcIixcIjdcIixcIjhcIixcIjlcIl0sXG4gICAgW1wiYVwiLCBcImJcIixcImNcIixcImRcIixcImVcIixcImZcIixcImdcIixcImhcIl0sXG5dXG5cbmZ1bmN0aW9uIGdldFRpdGxlUHJlZml4KHM6IE5vZGUpIHtcblxuICAgIGlmKCBzLmxldmVsID49IGhpZC5sZW5ndGggKVxuICAgICAgICByZXR1cm4gXCJcIjtcblxuICAgIGNvbnN0IGlkeCA9IHMucGFyZW50IS5jaGlsZHJlbi5pbmRleE9mKHMpO1xuXG4gICAgY29uc3QgbnVtID0gaGlkW3MubGV2ZWxdW2lkeF07XG5cbiAgICByZXR1cm4gYCR7bnVtfS4gYDtcbn1cblxuZnVuY3Rpb24gYnVpbGRNZW51KG5vZGVzOiBOb2RlW10pIHtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG5cbiAgICBtZW51LmFwcGVuZCggLi4uIG5vZGVzLm1hcCggKHMsaWR4KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgaXRlbS50ZXh0Q29udGVudD0gYCR7Z2V0VGl0bGVQcmVmaXgocyl9JHtzLmh0bWwudGV4dENvbnRlbnR9YDtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGAjJHtzLmh0bWwuaWR9YCk7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pICk7XG5cbiAgICByZXR1cm4gbWVudTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlSGVhZGVyKCkge1xuXG4gICAgY29uc3QgbGFzdCA9IHNlYXJjaEN1ckhlYWRlciggaHRyZWUsIG1haW4uc2Nyb2xsVG9wKSE7XG5cbiAgICBsZXQgaGVhZGVycyA9IFtdO1xuICAgIGxldCBjdXJzb3IgID0gbGFzdDtcblxuICAgIHdoaWxlKGN1cnNvci5odG1sICE9PSBtYWluKSB7XG4gICAgICAgIGhlYWRlcnMucHVzaChjdXJzb3IpO1xuICAgICAgICBjdXJzb3IgPSBjdXJzb3IucGFyZW50ITtcbiAgICB9XG5cbiAgICBjb25zdCBodG1sID0gaGVhZGVycy5yZXZlcnNlKCkubWFwKCAoaG5vZGUsaSkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGggPSBobm9kZS5odG1sO1xuICAgICAgICBjb25zdCBoX2h0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSBgJHtnZXRUaXRsZVByZWZpeChobm9kZSl9JHtoLnRleHRDb250ZW50fWA7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgYCMke2guaWR9YCk7XG5cbiAgICAgICAgY29uc3QgbWVudSA9IGJ1aWxkTWVudShobm9kZS5wYXJlbnQhLmNoaWxkcmVuKTtcbiAgICAgICAgaF9odG1sLmFwcGVuZChsaW5rLCBtZW51KTtcblxuICAgICAgICByZXR1cm4gaF9odG1sO1xuICAgIH0pO1xuXG4gICAgaWYoIGxhc3QuY2hpbGRyZW4ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IGVtcHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgICAgICAgZW1wdHkuYXBwZW5kKCBidWlsZE1lbnUobGFzdC5jaGlsZHJlbikgKTtcblxuICAgICAgICBodG1sLnB1c2goZW1wdHkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZV9wYWdlX2hyZWYocGF0aHByZWZpeDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIGRlc2M6IGFueSkge1xuXG4gICAgICAgIGxldCBocmVmID0gYCR7cGF0aHByZWZpeH0ke3BhdGh9L2A7XG5cbiAgICAgICAgaWYoZGVzYy5jaGlsZHJlbj8ubGVuZ3RoKSB7XG4gICAgICAgICAgICBkZXNjID0gZGVzYy5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIGhyZWYgKz0gYCR7ZGVzYy5wYXRoID8/IGRlc2N9L2A7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaHJlZjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlX3BhZ2VfbWVudShwYXRocHJlZml4OiBzdHJpbmcsIHBhdGg6IHN0cmluZywgcGFnZXM6IGFueSkge1xuICAgICAgICBjb25zdCBkZXNjID0gcGFnZXMuZmluZCggKHBhZ2U6IGFueSkgPT4gcGFnZSA9PT0gcGF0aCB8fCBwYWdlLnBhdGggPT09IHBhdGggKSE7XG5cbiAgICAgICAgY29uc29sZS53YXJuKHBhZ2VzLCBwYXRoKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgbGluay50ZXh0Q29udGVudCA9IGRlc2Muc25hbWUgPz8gZGVzYy5uYW1lID8/IGRlc2M7XG4gICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIG1ha2VfcGFnZV9ocmVmKHBhdGhwcmVmaXgsIHBhdGgsIGRlc2MpICk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gICAgXG4gICAgICAgICAgICBtZW51LmFwcGVuZCggLi4uIHBhZ2VzLm1hcCggKHBhZ2U6YW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQ9IHBhZ2UubmFtZSA/PyBwYWdlO1xuICAgICAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBtYWtlX3BhZ2VfaHJlZihwYXRocHJlZml4LCBwYWdlLnBhdGg/P3BhZ2UsIHBhZ2UpICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9KSApO1xuICAgIFxuICAgICAgICAgICAgaHRtbC5hcHBlbmQobGluaywgbWVudSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gICAgXG4gICAgbGV0IGN1cnBhZ2UgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc2xpY2Uocm9vdF9wYXRoLmxlbmd0aCkuc3BsaXQoJy8nKTtcblxuICAgIGNvbnN0IG1vZHVsZV9odG1sID0gbWFrZV9wYWdlX21lbnUocm9vdF9wYXRoLCBjdXJwYWdlWzBdLCBwYWdlcyk7XG5cbiAgICBjb25zdCBkZXNjID0gcGFnZXMuZmluZCggKHBhZ2U6IGFueSkgPT4gcGFnZS5wYXRoID09PSBjdXJwYWdlWzBdICkhO1xuICAgIGNvbnN0IHR5cGVfaHRtbCAgID0gbWFrZV9wYWdlX21lbnUocm9vdF9wYXRoICsgY3VycGFnZVswXSArIFwiL1wiLCBjdXJwYWdlWzFdLCBkZXNjLmNoaWxkcmVuKTtcblxuICAgIGhlYWRlci5yZXBsYWNlQ2hpbGRyZW4obW9kdWxlX2h0bWwsIHR5cGVfaHRtbCwgLi4uaHRtbCk7XG59XG5cbm1haW4uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlSGVhZGVyKTtcbnVwZGF0ZUhlYWRlcigpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHJ1Y3QvbWVudS50c1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwYWdlcy9SMS0wMi9UUC9UUDEvaW5kZXguaHRtbFwiOyJdLCJuYW1lcyI6WyJuYW1lIiwic25hbWUiLCJwYXRoIiwiY2hpbGRyZW4iLCJyb290X3BhdGgiLCJpbmNsdWRlcyIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJwYWdlcyIsIm1haW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoZWFkZXIiLCJ0aXRsZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaHRyZWUiLCJodG1sIiwibGV2ZWwiLCJwYXJlbnQiLCJodHJlZV9jdXJzb3IiLCJ0aXRsZSIsInRhZ05hbWUiLCJzbGljZSIsImVsZW0iLCJwdXNoIiwic2VhcmNoQ3VySGVhZGVyIiwicG9zaXRpb24iLCJoZWFkZXJzIiwiaSIsImxlbmd0aCIsIm9mZnNldFRvcCIsImhpZCIsImdldFRpdGxlUHJlZml4IiwicyIsImlkeCIsImluZGV4T2YiLCJudW0iLCJidWlsZE1lbnUiLCJub2RlcyIsIm1lbnUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwibWFwIiwiaXRlbSIsInRleHRDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiaWQiLCJ1cGRhdGVIZWFkZXIiLCJsYXN0Iiwic2Nyb2xsVG9wIiwiY3Vyc29yIiwicmV2ZXJzZSIsImhub2RlIiwiaCIsImhfaHRtbCIsImxpbmsiLCJlbXB0eSIsIm1ha2VfcGFnZV9ocmVmIiwicGF0aHByZWZpeCIsImRlc2MiLCJocmVmIiwibWFrZV9wYWdlX21lbnUiLCJmaW5kIiwicGFnZSIsImNvbnNvbGUiLCJ3YXJuIiwiY3VycGFnZSIsIndpbmRvdyIsInBhdGhuYW1lIiwic3BsaXQiLCJtb2R1bGVfaHRtbCIsInR5cGVfaHRtbCIsInJlcGxhY2VDaGlsZHJlbiIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9