/******/ var __webpack_modules__ = ({

/***/ "./src/pages/R1-01/CM/CM1/index.css":
/*!******************************************!*\
  !*** ./src/pages/R1-01/CM/CM1/index.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/R1-01/CM/CM1/index.md":
/*!*****************************************!*\
  !*** ./src/pages/R1-01/CM/CM1/index.md ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "pages/R1-01/CM/CM1/index.html");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/struct/calc/index.css":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/struct/calc/index.css ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host table {\n    border-collapse: collapse;\n    border-top-color: transparent;\n\n    & > tbody {\n        outline: 0px solid transparent;\n    }\n\n    & > tbody > tr:first-child {\n        border-top-color: transparent;\n        \n        & > th {\n            border-top-color: transparent;\n        }\n    }\n}\n\n:host :is(tr,th,td) {\n    border:1px solid #c0c0c0;\n }\n\n:host tr {\n    height: 0.45cm;\n    line-height: 0.45cm;\n}\n\n\n:host :is(td, th):not([contenteditable]) {\n    user-select: none;\n}\n/*\n:host td[contenteditable] {\n    user-select: text;\n}*/\n\n:host :is(td, th) {\n    color: black;\n    width: 2.26cm;\n    height: 0.45cm;\n\n    font-size: 10pt;\n\n    box-sizing: border-box;\n    font-family: 'Liberation Sans';\n}\n\n:host tr > th:first-child {\n    width: calc( 2.26cm / 2.5) ;\n}\n\n:host {\n    display: inline-flex;\n    flex-direction: column;\n}\n\n:host div.toolbar {\n    background-color: #cecece;\n    display: flex;\n    gap: 5px;\n    padding: 4px;\n\n    & > *:not(:first-child) {\n        flex: 1 1 0;\n    }\n    & > *:first-child {\n        width: calc( 1.5 * 2.26cm );\n    }\n}\n\n:host th {\n    background-color: #cecece;\n    border-color: #8a8a8a;\n    font-weight: normal;\n\n    &.highlight {\n        background-color: #398ee7;\n        color: white;\n    }\n}\n\n:host(.cell_edit) .cursor {\n    display: none;\n}\n\n:host(.recopy) {\n    cursor: cell;\n}\n\n:host {\n\n    .recopy {\n        position: absolute;\n        padding: 0;\n        box-sizing: border-box;\n        cursor: cell;\n        background-color: #398ee7;\n\n    }\n\n    .cursor {\n        position: absolute;\n        padding: 0;\n        box-sizing: border-box;\n        background: none;\n        border: 2px solid #398ee7;\n        pointer-events: none;\n    }\n}\n\n:host td {\n\n    --font_size: 10pt;\n    font-size: var(--font_size);\n    line-height: calc( var(--font_size) * 1.2 );\n\n    --indent: 0;\n\n    --border_color: black;\n    --background_color: white;\n    --foreground_color: black;\n    background-color: var(--background_color);\n    color           : var(--foreground_color);\n\n    white-space: pre;\n\n    vertical-align: bottom;\n\n    &:is([data-type=\"number\"],[data-type=\"date\"], [data-type=\"boolean\"]) {\n        text-align: right;\n    }\n\n    &[contenteditable] {\n        outline: 0px solid transparent;\n    }\n\n    &.hidden {\n        display: none;\n    }\n\n    &.ajuster {\n        word-break: break-all;\n        white-space: normal;\n    }\n\n    &.highlight {\n        background-color: #cde3f9;\n    }\n\n    /** style **/\n    &.italic {\n        font-style: italic;\n    }\n    &.bold {\n        font-weight: bold;\n    }\n    &.underline {\n        text-decoration: underline;\n    }\n    &.align_left {\n        padding-left: calc( var(--indent) * 10px);\n        text-align: left;\n    }\n    &.align_center {\n        text-align: center;\n    }\n    &.align_right {\n        padding-right: calc( var(--indent) * 10px);\n        text-align: right;\n    }\n    &.valign_top {\n        vertical-align: top;\n    }\n    &.valign_middle {\n        vertical-align: middle;\n    }\n    &.valign_bottom {\n        vertical-align: bottom;\n    }\n    /* https://stackoverflow.com/questions/1241757/applying-borders-to-a-single-table-cell-when-using-border-collapse */\n    &.border_top {\n        border-top: 1px double var(--border_color);\n    }\n    &.border_bottom {\n        border-bottom: 1px double var(--border_color);\n    }\n    &.border_left {\n        border-left: 1px double var(--border_color);\n    }\n    &.border_right {\n        border-right: 1px double var(--border_color);\n    }\n}\n\n:host {\n    position: relative;\n}\n\n:host .range_highlight {\n    position: absolute;\n    padding: 0;\n    box-sizing: border-box;\n\n    background: none;\n    border: 2px solid red;\n\n    border-color: var(--highlight_color);\n}\n\n:host .formula_highlight {\n    color: var(--highlight_color);\n}\n\n:host .highlight_0 {\n    --highlight_color: #fa0c0c;\n}\n\n:host .highlight_1 {\n    --highlight_color: #fa0cfa;\n}\n\n:host .highlight_2 {\n    --highlight_color: #0c840c;\n}\n\n:host .highlight_3 {\n    --highlight_color: #010180;\n}\n\n:host .highlight_4 {\n    --highlight_color: #871717;\n}\n\n:host .highlight_5 {\n    --highlight_color: #871787;\n}\n\n:host .highlight_6 {\n    --highlight_color: #84840c;\n}\n\n:host .highlight_7 {\n    --highlight_color: #0c0cfa;\n}\n\n\n.copy_highlight {\n    position: absolute;\n    border: 1px dashed black;\n    background: none;\n    pointer-events: none;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* Tomorrow Theme */\n/* http://jmblog.github.com/color-themes-for-google-code-highlightjs */\n/* Original theme - https://github.com/chriskempson/tomorrow-theme */\n\n/* Tomorrow Comment */\n.hljs-comment,\n.hljs-quote {\n\tcolor: #8e908c;\n}\n\n/* Tomorrow Red */\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-regexp,\n.hljs-deletion {\n\tcolor: #c82829;\n}\n\n/* Tomorrow Orange */\n.hljs-number,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-literal,\n.hljs-type,\n.hljs-params,\n.hljs-meta,\n.hljs-link {\n\tcolor: #f5871f;\n}\n\n/* Tomorrow Yellow */\n.hljs-attribute {\n\tcolor: #eab700;\n}\n\n/* Tomorrow Green */\n.hljs-string,\n.hljs-symbol,\n.hljs-bullet,\n.hljs-addition {\n\tcolor: #718c00;\n}\n\n/* Tomorrow Blue */\n.hljs-title,\n.hljs-section {\n\tcolor: #4271ae;\n}\n\n/* Tomorrow Purple */\n.hljs-keyword,\n.hljs-selector-tag {\n\tcolor: #8959a8;\n}\n\n.hljs {\n\tdisplay: block;\n\toverflow-x: auto;\n\tcolor: #4d4d4c;\n\tpadding: 0.5em;\n}\n\n.hljs-emphasis {\n\tfont-style: italic;\n}\n\n.hljs-strong {\n\tfont-weight: bold;\n}");

/***/ }),

/***/ "./libs/LISS/index.ts":
/*!****************************!*\
  !*** ./libs/LISS/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CstmEvent: () => (/* binding */ CstmEvent),
/* harmony export */   LISS_Auto: () => (/* binding */ LISS_Auto),
/* harmony export */   ShadowCfg: () => (/* binding */ ShadowCfg),
/* harmony export */   "default": () => (/* binding */ LISS)
/* harmony export */ });
// ================================================
// =============== LISS exported types ============
// ================================================
var ShadowCfg;
(function(ShadowCfg) {
    ShadowCfg["NONE"] = "none";
    ShadowCfg["OPEN"] = "open";
    ShadowCfg["CLOSE"] = "closed";
})(ShadowCfg || (ShadowCfg = {}));
// ================================================
// =============== LISS Class =====================
// ================================================
let __cstr_host = null;
// https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
const CAN_HAVE_SHADOW = [
    null,
    'article',
    'aside',
    'blockquote',
    'body',
    'div',
    'footer',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'header',
    'main',
    'nav',
    'p',
    'section',
    'span'
];
function _canHasShadow(tag) {
    return CAN_HAVE_SHADOW.includes(_element2tagname(tag));
}
function LISS({ extends: p_extends, host: p_host, dependancies: p_deps, attributes: p_attrs, params, content, css, shadow: p_shadow } = {}) {
    //TODO merge prop if extends LISS...
    const host = p_host ?? HTMLElement;
    const _extends = p_extends ?? Object;
    const attributes = p_attrs ?? [];
    const dependancies = p_deps ? [
        ...p_deps
    ] : [];
    const canHasShadow = _canHasShadow(host);
    const shadow = p_shadow ?? (canHasShadow ? "closed" : "none");
    if (!canHasShadow && shadow !== "none") throw new Error(`Host element ${_element2tagname(host)} does not support ShadowRoot`);
    // CONTENT processing
    if (content !== undefined) {
        dependancies.push((async ()=>{
            content = await content;
            if (content instanceof HTMLTemplateElement) content = content.innerHTML;
            if (typeof content === "string") {
                content = content.trim(); // Never return a text node of whitespace as the result
                if (content === '') content = undefined;
            }
            if (content instanceof Response) content = await content.text();
            return LISSBase.Parameters.content = content;
        })());
    }
    // CSS processing
    let stylesheets = [];
    if (css !== undefined) {
        if (!Array.isArray(css)) css = [
            css
        ];
        stylesheets = new Array(css.length);
        const fetch_css = async (css)=>{
            css = await css;
            if (css instanceof CSSStyleSheet) return css;
            if (css instanceof HTMLStyleElement) return css.sheet;
            let style = new CSSStyleSheet();
            if (typeof css === "string") {
                style.replace(css);
                return style;
            }
            //if( css instanceof Response )
            style.replace(await css.text());
            return style;
        };
        dependancies.push(...css.map(async (css, idx)=>stylesheets[idx] = await fetch_css(css)));
    }
    // @ts-ignore
    class LISSBase extends _extends {
        #host;
        constructor(){
            super();
            // h4ck, okay because JS is monothreaded.
            if (__cstr_host === null) throw new Error("Please do not directly call this constructor");
            this.#host = __cstr_host;
            __cstr_host = null;
        }
        get host() {
            return this.#host;
        }
        get attrs() {
            return this.#host.attrs;
        }
        setAttrDefault(attr, value) {
            return this.#host.setAttrDefault(attr, value);
        }
        get params() {
            return this.#host.params;
        }
        get content() {
            return this.#host.content;
        }
        static Parameters = {
            host,
            dependancies,
            attributes,
            params,
            content,
            stylesheets,
            shadow
        };
        onAttrChanged(_name, _oldValue, _newValue) {}
        get isInDOM() {
            return this.#host.isInDOM;
        }
        onDOMConnected() {}
        onDOMDisconnected() {}
    }
    return LISSBase;
}
//TODO: other options...
function extendsLISS(Liss, parameters) {
    // TODO: other options...
    const attrs = [
        ...Liss.Parameters.attributes,
        ...parameters.attributes
    ];
    const params = Object.assign({}, Liss.Parameters, {
        attributes: attrs
    });
    // @ts-ignore : because TS stupid
    class ExtendedLISS extends Liss {
        constructor(...t){
            // @ts-ignore : because TS stupid
            super(...t);
        }
        get attrs() {
            return super.attrs;
        }
        static Parameters = params;
    }
    return ExtendedLISS;
}
LISS.extendsLISS = extendsLISS;
// ================================================
// =============== LISSHost class =================
// ================================================
let id = 0;
function buildLISSHost(Liss, _params = {}) {
    const { host, attributes, content, stylesheets, shadow } = Liss.Parameters;
    const alreadyDeclaredCSS = new Set();
    const GET = Symbol('get');
    const SET = Symbol('set');
    const properties = Object.fromEntries(attributes.map((n)=>[
            n,
            {
                enumerable: true,
                get: function() {
                    return this[GET](n);
                },
                set: function(value) {
                    return this[SET](n, value);
                }
            }
        ]));
    class Attributes {
        #data;
        #defaults;
        #setter;
        [GET](name1) {
            return this.#data[name1] ?? this.#defaults[name1] ?? null;
        }
        [SET](name1, value) {
            return this.#setter(name1, value); // required to get a clean object when doing {...attrs}
        }
        constructor(data, defaults, setter){
            this.#data = data;
            this.#defaults = defaults;
            this.#setter = setter;
            Object.defineProperties(this, properties);
        }
    }
    // @ts-ignore : because TS is stupid.
    class LISSHostBase extends host {
        #params;
        #id = ++id;
        constructor(params = {}){
            super();
            this.#params = Object.assign({}, Liss.Parameters.params, _params, params);
            this.#waitInit = new Promise((resolve)=>{
                if (this.isInit) return resolve(this.#API);
                this.#resolve = resolve;
            });
        }
        /**** public API *************/ get isInit() {
            return this.#API !== null;
        }
        initialize(params = {}) {
            if (this.isInit) throw new Error('Element already initialized!');
            Object.assign(this.#params, params);
            const api = this.init();
            if (this.#isInDOM) api.onDOMConnected();
            return api;
        }
        get LISSSync() {
            if (!this.isInit) throw new Error('Accessing API before WebComponent initialization!');
            return this.#API;
        }
        get LISS() {
            return this.#waitInit;
        }
        /*** init ***/ #waitInit;
        #resolve = null;
        #API = null;
        #isInDOM = false;
        get isInDOM() {
            return this.#isInDOM;
        }
        disconnectedCallback() {
            this.#isInDOM = false;
            this.#API.onDOMDisconnected();
        }
        connectedCallback() {
            this.#isInDOM = true;
            if (!this.isInit) {
                this.init();
                return;
            }
            this.#API.onDOMConnected();
        }
        init() {
            customElements.upgrade(this);
            // shadow
            this.#content = this;
            if (shadow !== 'none') {
                this.#content = this.attachShadow({
                    mode: shadow
                });
                //@ts-ignore
                this.#content.addEventListener('click', onClickEvent);
                //@ts-ignore
                this.#content.addEventListener('dblclick', onClickEvent);
            }
            // attrs
            for (let obs of attributes)this.#attributes[obs] = this.getAttribute(obs);
            // css
            if (shadow !== 'none') this.#content.adoptedStyleSheets.push(sharedCSS);
            if (stylesheets.length) {
                if (shadow !== 'none') this.#content.adoptedStyleSheets.push(...stylesheets);
                else {
                    const cssselector = this.CSSSelector;
                    // if not yet inserted :
                    if (!alreadyDeclaredCSS.has(cssselector)) {
                        let style = document.createElement('style');
                        style.setAttribute('for', cssselector);
                        let html_stylesheets = "";
                        for (let style of stylesheets)for (let rule of style.cssRules)html_stylesheets += rule.cssText + '\n';
                        style.innerHTML = html_stylesheets.replace(':host', `:is(${cssselector})`);
                        document.head.append(style);
                        alreadyDeclaredCSS.add(cssselector);
                    }
                }
            }
            // content
            if (content !== undefined) {
                let template_elem = document.createElement('template');
                let str = content.replace(/\$\{(.+?)\}/g, (_, match)=>this.getAttribute(match) ?? '');
                template_elem.innerHTML = str;
                this.#content.append(...template_elem.content.childNodes);
            }
            // build
            // h4ck, okay because JS is monothreaded.
            __cstr_host = this;
            let obj = new Liss();
            /*if( obj instanceof Promise)
	    		obj = await obj;*/ this.#API = obj;
            // default slot
            if (this.hasShadow && this.#content.childNodes.length === 0) this.#content.append(document.createElement('slot'));
            if (this.#resolve !== null) this.#resolve(this.#API);
            return this.#API;
        }
        get params() {
            return this.#params;
        }
        /*** content ***/ #content = null;
        get content() {
            return this.#content;
        }
        getPart(name1) {
            return this.hasShadow ? this.#content?.querySelector(`::part(${name1})`) : this.#content?.querySelector(`[part="${name1}"]`);
        }
        getParts(name1) {
            return this.hasShadow ? this.#content?.querySelectorAll(`::part(${name1})`) : this.#content?.querySelectorAll(`[part="${name1}"]`);
        }
        get hasShadow() {
            return shadow !== 'none';
        }
        /*** CSS ***/ get CSSSelector() {
            return this.hasShadow ? this.tagName : `${this.tagName}[is="${this.getAttribute("is")}"]`;
        }
        /*** attrs ***/ #attrs_flag = false;
        #attributes = {};
        #attributesDefaults = {};
        #attrs = new Attributes(this.#attributes, this.#attributesDefaults, (name1, value)=>{
            this.#attributes[name1] = value;
            this.#attrs_flag = true; // do not trigger onAttrsChanged.
            if (value === null) this.removeAttribute(name1);
            else this.setAttribute(name1, value);
        });
        setAttrDefault(name1, value) {
            if (value === null) delete this.#attributesDefaults[name1];
            else this.#attributesDefaults[name1] = value;
        }
        get attrs() {
            return this.#attrs;
        }
        static observedAttributes = attributes;
        attributeChangedCallback(name1, oldValue, newValue) {
            if (this.#attrs_flag) {
                this.#attrs_flag = false;
                return;
            }
            this.#attributes[name1] = newValue;
            if (!this.isInit) return;
            if (this.#API.onAttrChanged(name1, oldValue, newValue) === false) {
                this.#attrs[name1] = oldValue; // revert the change.
            }
        }
    }
    return LISSHostBase;
}
// ================================================
// =============== LISS define ====================
// ================================================
const _DOMContentLoaded = new Promise((resolve)=>{
    if (document.readyState === "interactive" || document.readyState === "complete") return resolve();
    document.addEventListener('DOMContentLoaded', ()=>{
        resolve();
    }, true);
});
LISS.define = async function(tagname, ComponentClass, { dependancies, params } = {}) {
    dependancies ??= [];
    params ??= {};
    const Class = ComponentClass.Parameters.host;
    let LISSBase = ComponentClass;
    let htmltag = _element2tagname(Class) ?? undefined;
    await Promise.all([
        _DOMContentLoaded,
        ...dependancies,
        ...LISSBase.Parameters.dependancies
    ]);
    const LISSclass = buildLISSHost(ComponentClass, params);
    const opts = htmltag === undefined ? {} : {
        extends: htmltag
    };
    customElements.define(tagname, LISSclass, opts);
};
// ================================================
// =============== LISS ShadowRoot tools ==========
// ================================================
const sharedCSS = new CSSStyleSheet();
document.adoptedStyleSheets.push(sharedCSS);
LISS.insertGlobalCSSRules = function(css) {
    let css_style;
    if (css instanceof HTMLStyleElement) css_style = css.sheet;
    if (typeof css === "string") {
        css_style = new CSSStyleSheet();
        css_style.replaceSync(css);
    }
    for (let rule of css_style.cssRules)sharedCSS.insertRule(rule.cssText);
};
const DELEGATED_EVENTS = {
    "click": [],
    "dblclick": []
};
const ALREADY_PROCESSED = Symbol();
function onClickEvent(ev) {
    if (ev[ALREADY_PROCESSED] === true) return;
    ev[ALREADY_PROCESSED] = true;
    const handlers = DELEGATED_EVENTS[ev.type];
    for (let elem of ev.composedPath()){
        if (elem instanceof ShadowRoot || elem === document || elem === window) continue;
        var target = elem;
        for (let [selector, handler] of handlers){
            if (target.matches(selector)) handler(ev);
        }
    }
}
LISS.insertGlobalDelegatedListener = function(event_name, selector, handler) {
    DELEGATED_EVENTS[event_name].push([
        selector,
        handler
    ]);
};
document.addEventListener('click', onClickEvent);
document.addEventListener('dblclick', onClickEvent);
LISS.closest = function closest(selector, element) {
    while(true){
        var result = element.closest(selector);
        if (result !== null) return result;
        const root = element.getRootNode();
        if (!("host" in root)) return null;
        element = root.host;
    }
};
async function build(tagname, { params = {}, initialize = true, content = [], parent = undefined, id = undefined, classes = [], cssvars = {}, attrs = {}, data = {}, listeners = {} } = {}) {
    if (!initialize && parent === null) throw new Error("A parent must be given if initialize is false");
    let CustomClass = await customElements.whenDefined(tagname);
    let elem = new CustomClass(params);
    // Fix issue #2
    if (elem.tagName.toLowerCase() !== tagname) elem.setAttribute("is", tagname);
    if (id !== undefined) elem.id = id;
    if (classes.length > 0) elem.classList.add(...classes);
    for(let name1 in cssvars)elem.style.setProperty(`--${name1}`, cssvars[name1]);
    for(let name1 in attrs){
        let value = attrs[name1];
        if (typeof value === "boolean") elem.toggleAttribute(name1, value);
        else elem.setAttribute(name1, value);
    }
    for(let name1 in data){
        let value = data[name1];
        if (value === false) delete elem.dataset[name1];
        else if (value === true) elem.dataset[name1] = "";
        else elem.dataset[name1] = value;
    }
    if (!Array.isArray(content)) content = [
        content
    ];
    elem.replaceChildren(...content);
    for(let name1 in listeners)elem.addEventListener(name1, listeners[name1]);
    if (parent !== undefined) parent.append(elem);
    if (!elem.isInit && initialize) return await LISS.initialize(elem);
    return await LISS.getLISS(elem);
}
LISS.build = build;
LISS.whenDefined = async function(tagname, callback) {
    await customElements.whenDefined(tagname);
    if (callback !== undefined) callback();
    return;
};
LISS.whenAllDefined = async function(tagnames, callback) {
    await Promise.all(tagnames.map((t)=>customElements.whenDefined(t)));
    if (callback !== undefined) callback();
};
LISS.isDefined = function(name1) {
    return customElements.get(name1);
};
LISS.selector = function(name1) {
    if (name1 === undefined) return "";
    return `:is(${name1}, [is="${name1}"])`;
};
LISS.getLISS = async function(element) {
    await LISS.whenDefined(LISS.getName(element));
    return element.LISS; // ensure initialized.
};
LISS.getLISSSync = function(element) {
    if (!LISS.isDefined(LISS.getName(element))) throw new Error(`${name} hasn't been defined yet.`);
    let host = element;
    if (!host.isInit) throw new Error("Instance hasn't been initialized yet.");
    return host.LISSSync;
};
LISS.initialize = async function(element) {
    await LISS.whenDefined(LISS.getName(element));
    return await element.initialize(); // ensure initialization.
};
LISS.getName = function(element) {
    const name1 = element.getAttribute('is') ?? element.tagName.toLowerCase();
    if (!name1.includes('-')) throw new Error(`Element ${name1} is not a WebComponent`);
    return name1;
};
function _buildQS(selector, tagname_or_parent, parent = document) {
    if (tagname_or_parent !== undefined && typeof tagname_or_parent !== 'string') {
        parent = tagname_or_parent;
        tagname_or_parent = undefined;
    }
    return [
        `${selector}${LISS.selector(tagname_or_parent)}`,
        parent
    ];
}
async function qs(selector, tagname_or_parent, parent = document) {
    [selector, parent] = _buildQS(selector, tagname_or_parent, parent);
    let result = await LISS.qso(selector, parent);
    if (result === null) throw new Error(`Element ${selector} not found`);
    return result;
}
LISS.qs = qs;
async function qso(selector, tagname_or_parent, parent = document) {
    [selector, parent] = _buildQS(selector, tagname_or_parent, parent);
    const element = parent.querySelector(selector);
    if (element === null) return null;
    return await LISS.getLISS(element);
}
LISS.qso = qso;
async function qsa(selector, tagname_or_parent, parent = document) {
    [selector, parent] = _buildQS(selector, tagname_or_parent, parent);
    const elements = parent.querySelectorAll(selector);
    let idx = 0;
    const promises = new Array(elements.length);
    for (let element of elements)promises[idx++] = LISS.getLISS(element);
    return await Promise.all(promises);
}
LISS.qsa = qsa;
async function qsc(selector, tagname_or_parent, element) {
    const res = _buildQS(selector, tagname_or_parent, element);
    const result = res[1].closest(res[0]);
    if (result === null) return null;
    return await LISS.getLISS(result);
}
LISS.qsc = qsc;
function qsSync(selector, tagname_or_parent, parent = document) {
    [selector, parent] = _buildQS(selector, tagname_or_parent, parent);
    const element = parent.querySelector(selector);
    if (element === null) throw new Error(`Element ${selector} not found`);
    return LISS.getLISSSync(element);
}
LISS.qsSync = qsSync;
function qsaSync(selector, tagname_or_parent, parent = document) {
    [selector, parent] = _buildQS(selector, tagname_or_parent, parent);
    const elements = parent.querySelectorAll(selector);
    let idx = 0;
    const result = new Array(elements.length);
    for (let element of elements)result[idx++] = LISS.getLISSSync(element);
    return result;
}
LISS.qsaSync = qsaSync;
function qscSync(selector, tagname_or_parent, element) {
    const res = _buildQS(selector, tagname_or_parent, element);
    const result = res[1].closest(res[0]);
    if (result === null) return null;
    return LISS.getLISSSync(result);
}
LISS.qscSync = qscSync;
// ================================================
// =============== LISS Auto ======================
// ================================================
class LISS_Auto extends LISS({
    attributes: [
        "src"
    ]
}) {
    #known_tag = new Set();
    #directory;
    #sw;
    constructor(){
        super();
        this.#sw = new Promise(async (resolve)=>{
            await navigator.serviceWorker.register(`./sw.js`);
            if (navigator.serviceWorker.controller) resolve();
            navigator.serviceWorker.addEventListener('controllerchange', ()=>{
                resolve();
            });
        });
        const src = this.attrs.src;
        if (src === null) throw new Error("src attribute is missing.");
        this.#directory = src[0] === '.' ? `${window.location.pathname}/${src}` : src;
        new MutationObserver((mutations)=>{
            for (let mutation of mutations)for (let addition of mutation.addedNodes)if (addition instanceof Element) this.#addTag(addition.tagName);
        }).observe(document, {
            childList: true,
            subtree: true
        });
        for (let elem of document.querySelectorAll("*"))this.#addTag(elem.tagName);
    }
    resources() {
        return [
            "index.js",
            "index.html",
            "index.css"
        ];
    }
    defineWebComponent(tagname, files, opts) {
        const js = files["index.js"];
        const content = files["index.html"];
        let klass = null;
        if (js !== undefined) klass = js(opts);
        else if (content !== undefined) klass = class WebComponent extends LISS(opts) {
        };
        if (klass === null) throw new Error(`Missing files for WebComponent ${tagname}.`);
        return LISS.define(tagname, klass);
    }
    async #addTag(tagname) {
        tagname = tagname.toLowerCase();
        if (tagname === 'liss-auto' || tagname === 'bliss-auto' || !tagname.includes('-') || this.#known_tag.has(tagname)) return;
        this.#known_tag.add(tagname);
        await this.#sw; // ensure SW is installed.
        const filenames = this.resources();
        const resources = await Promise.all(filenames.map((file)=>file.endsWith('.js') ? _import(`${this.#directory}/${tagname}/${file}`, true) : _fetchText(`${this.#directory}/${tagname}/${file}`, true)));
        const files = {};
        for(let i = 0; i < filenames.length; ++i)if (resources[i] !== undefined) files[filenames[i]] = resources[i];
        const content = files["index.html"];
        const css = files["index.css"];
        const opts = {
            ...content !== undefined && {
                content
            },
            ...css !== undefined && {
                css
            }
        };
        return this.defineWebComponent(tagname, files, opts);
    }
}
LISS.define("liss-auto", LISS_Auto);
class CstmEvent extends CustomEvent {
    get type() {
        return super.type;
    }
    constructor(type, args){
        super(type, {
            detail: args
        });
    }
}
// ================================================
// =============== LISS internal tools ============
// ================================================
async function fetchResource(resource) {
    resource = await resource;
    if (!(resource instanceof Response)) resource = await fetch(resource);
    return await resource.text();
}
async function _fetchText(uri, isLissAuto = false) {
    const options = isLissAuto ? {
        headers: {
            "liss-auto": "true"
        }
    } : {};
    const response = await fetch(uri, options);
    if (response.status !== 200) return undefined;
    if (isLissAuto && response.headers.get("status") === "404") return undefined;
    return await response.text();
}
async function _import(uri, isLissAuto = false) {
    // test for the module existance.
    if (isLissAuto && await _fetchText(uri, isLissAuto) === undefined) return undefined;
    try {
        return (await import(/* webpackIgnore: true */ uri)).default;
    } catch (e) {
        console.log(e);
        return undefined;
    }
}
// from https://stackoverflow.com/questions/51000461/html-element-tag-name-from-constructor
const HTMLCLASS_REGEX = /HTML(\w+)Element/;
const elementNameLookupTable = {
    'UList': 'ul',
    'TableCaption': 'caption',
    'TableCell': 'td',
    'TableCol': 'col',
    'TableRow': 'tr',
    'TableSection': 'tbody',
    'Quote': 'q',
    'Paragraph': 'p',
    'OList': 'ol',
    'Mod': 'ins',
    'Media': 'video',
    'Image': 'img',
    'Heading': 'h1',
    'Directory': 'dir',
    'DList': 'dl',
    'Anchor': 'a'
};
function _element2tagname(Class) {
    if (Class === HTMLElement) return null;
    let htmltag = HTMLCLASS_REGEX.exec(Class.name)[1];
    return elementNameLookupTable[htmltag] ?? htmltag.toLowerCase();
}


/***/ }),

/***/ "./src/pages/R1-01/CM/CM1/index.ts":
/*!*****************************************!*\
  !*** ./src/pages/R1-01/CM/CM1/index.ts ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _struct_menu_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../struct/menu.ts */ "./src/struct/menu.ts");
/* harmony import */ var _struct_calc_sheet_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../struct/calc/sheet.ts */ "./src/struct/calc/sheet.ts");
/* harmony import */ var _libs_LISS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/LISS */ "./libs/LISS/index.ts");
/* harmony import */ var struct_calc_format_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! struct/calc/format.ts */ "./src/struct/calc/format.ts");


// 1


const s_formula = await _libs_LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_formula');
s_formula.getCells("A1:C1").format("bold", "align_center").content = [
    "Quantité",
    "Prix unitaire",
    "Prix total"
];
s_formula.getCells("A2:A4").content = [
    23,
    12,
    44
];
s_formula.getCells("B2:B4").format(struct_calc_format_ts__WEBPACK_IMPORTED_MODULE_3__.Formats.euros).content = [
    0.2,
    0.3,
    0.4
];
s_formula.getCells("C2:C4").format(struct_calc_format_ts__WEBPACK_IMPORTED_MODULE_3__.Formats.euros).content = [
    "=A2*B2",
    "=A3*B3",
    "=A4*B4"
];
/**/ const s_complex_formula = await _libs_LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_complex_formula');
s_complex_formula.getCells("A1:C1").format("bold", "align_center").content = [
    "X",
    "Y",
    "Formule"
];
s_complex_formula.getCells("A2:B4").content = [
    2,
    4,
    1,
    5,
    4,
    6
];
s_complex_formula.getCells("C2").content = `= A2*B2
 +A3*B3
 +A4*B4`;
/**/ const s_types = await _libs_LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_types');
s_types.getCells("A1:E1").format("bold", "align_center").content = [
    "Texte",
    "Nombre",
    "Booléen",
    "Date",
    "Formule"
];
s_types.getCells("A2:E2").content = [
    "Hello",
    2.3,
    true,
    new Date(),
    "=B2+2"
];
const s_cursor = await _libs_LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_cursor');
s_cursor.getCells("A1:H1").format("bold", "align_center").content = "*";
s_cursor.getCells("A4:H4").format("bold", "align_center").content = "*";
s_cursor.getCells("D1:E4").format("bold", "align_center").content = "*";
s_cursor.getCells("A1:A4").format("bold", "align_center").content = "*";
s_cursor.getCells("H1:H4", true).format("bold", "align_center").content = "*";
const s_$formula = [
    await _libs_LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet____formula'),
    await _libs_LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_x__formula'),
    await _libs_LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet__x_formula'),
    await _libs_LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_xx_formula')
];
for(let i = 0; i < s_$formula.length; ++i){
    const s_$form = s_$formula[i];
    s_$form.getCells("A1:D1").format("bold").content = [
        0,
        1,
        2,
        3
    ];
    s_$form.getCells("A2:A4").format("bold").content = [
        1,
        2,
        3
    ];
    let ref = "=A1";
    if (i === 1) ref = "=$A1";
    if (i === 2) ref = "=A$1";
    if (i === 3) ref = "=$A$1";
    s_$form.getCells("B2").content = ref;
    s_$form.getCells("A1:D4").format("align_center");
}
const sheet_recopie_motivation = await _libs_LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_recopie_motivation');
sheet_recopie_motivation.getCells("A1:D4").format("align_center").content = [
    "Conso/jour",
    "Crayons",
    "Gommes",
    "Total (jour)",
    "01/01",
    2,
    3,
    "=B2+C2",
    "02/01",
    4,
    1,
    "=C3+C3",
    "Total (prod)",
    "=B2+B3",
    "=C2+C3",
    "=D2+D3"
];
sheet_recopie_motivation.getCells("A1:D1").format("bold");
sheet_recopie_motivation.getCells("A2:A4").format("bold");
const sheet_recopie_motivation_empty = await _libs_LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_recopie_motivation_empty');
sheet_recopie_motivation_empty.getCells("A1:D4").format("align_center").content = [
    "Conso/jour",
    "Crayons",
    "Gommes",
    "Total (jour)",
    "01/01",
    2,
    3,
    undefined,
    "02/01",
    4,
    1,
    undefined,
    "Total (prod)",
    undefined,
    undefined,
    undefined
];
sheet_recopie_motivation_empty.getCells("A1:D1").format("bold");
sheet_recopie_motivation_empty.getCells("A2:A4").format("bold");
const sheet_recopie_incr = await _libs_LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_recopie_incr');
sheet_recopie_incr.getCells('A1:A2').content = [
    1,
    new Date()
];
// test
const c = `
<table id="un">
    <tbody>
        <tr><td>XXX</td></tr>
    </tbody>
</table>`;
const css = `
    td:not([contenteditable]) {
        user-select: none;
    }
`;
class X extends (0,_libs_LISS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    content: c,
    css
}) {
    constructor(){
        super();
        const td = this.content.querySelector('#un td');
        td.toggleAttribute('contenteditable');
        td.focus();
        td.textContent = "YYY";
    }
}
_libs_LISS__WEBPACK_IMPORTED_MODULE_2__["default"].define('test-test', X);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/struct/calc/format.ts":
/*!***********************************!*\
  !*** ./src/struct/calc/format.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Format: () => (/* binding */ Format),
/* harmony export */   FormatManager: () => (/* binding */ FormatManager),
/* harmony export */   Formats: () => (/* binding */ Formats)
/* harmony export */ });
/* harmony import */ var _libs_LISS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../libs/LISS */ "./libs/LISS/index.ts");
/* harmony import */ var _sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sheet */ "./src/struct/calc/sheet.ts");


class FormatManager {
    constructor(sheet){
        // @ts-ignore
        sheet.content.addEventListener('keydown', (ev)=>{
            if (!ev.ctrlKey) return;
            let changed = false;
            if (ev.key === 'b') {
                changed = true;
                sheet.selection.toggleFormat("bold");
            }
            if (ev.key === 'i') {
                changed = true;
                sheet.selection.toggleFormat("italic");
            }
            if (ev.key === 'u') {
                changed = true;
                sheet.selection.toggleFormat("underline");
            }
            if (ev.key === 'l') {
                changed = true;
                sheet.selection.toggleFormat("align_left");
            }
            if (ev.key === 'r') {
                changed = true;
                sheet.selection.toggleFormat("align_right");
            }
            if (ev.key === 'e') {
                changed = true;
                sheet.selection.toggleFormat("align_center");
            }
            if (ev.key === '4' && ev.shiftKey) {
                changed = true;
                sheet.selection.toggleFormat(Formats.euros);
            }
            if (ev.key === '5' && ev.shiftKey) {
                changed = true;
                sheet.selection.toggleFormat(Formats.pourcent);
            }
            if (ev.key === '1' && ev.shiftKey) {
                changed = true;
                sheet.selection.toggleFormat(Formats.number);
            }
            if (changed) {
                ev.preventDefault();
                sheet.selection.dispatchEvent(new CustomEvent("change"));
            }
        });
    /* TODO listen */ }
}
const Formats = {
    euros: function(value) {
        if (value === undefined) return '';
        const prec = +(this.getAttribute('precision') ?? 2);
        return value.toLocaleString(undefined, {
            minimumFractionDigits: prec,
            maximumFractionDigits: prec
        }) + '€';
    //.toFixed(2) + '€';
    },
    pourcent: function(value) {
        if (value === undefined) return '';
        const prec = +(this.getAttribute('precision') ?? 2);
        return (value * 100).toLocaleString(undefined, {
            minimumFractionDigits: prec,
            maximumFractionDigits: prec
        }) + '%';
    //.toFixed(2) + '€';
    },
    number: function(value) {
        if (value === undefined) return '';
        const prec = +(this.getAttribute('precision') ?? 2);
        return value.toLocaleString(undefined, {
            minimumFractionDigits: prec,
            maximumFractionDigits: prec
        });
    }
};
class Format {
    #format;
    constructor(format){
        this.#format = format;
    }
    applyTo(cell) {
        if (cell instanceof _sheet__WEBPACK_IMPORTED_MODULE_1__.CellList) {
            for (let c of cell.cells)this.applyTo(c);
            return;
        }
        for(let name in this.#format){
            let val = this.#format[name];
            if (name === 'format') {
                if (val === null) {
                    cell.format = _sheet__WEBPACK_IMPORTED_MODULE_1__.defaultFormat;
                    cell.textContent = cell.format(cell.rawContent); //TODO: if fct
                    continue;
                }
                cell.format = val;
                cell.textContent = cell.format(cell.rawContent); //TODO: if fct
                continue;
            }
            if (name === 'precision') {
                cell.setAttribute('precision', val);
                cell.textContent = cell.format?.(cell.rawContent); //TODO: if fct
                continue;
            }
            if (name === 'span') {
                const sheet = _libs_LISS__WEBPACK_IMPORTED_MODULE_0__["default"].getLISSSync(cell.getRootNode().host);
                if (val[0] === 1 && val[1] === 1) {
                    let r = +cell.getAttribute('rowspan') ?? 0;
                    let c = +cell.getAttribute('colspan') ?? 0;
                    for(let i = 0; i < r; ++i)for(let j = 0; j < c; ++j){
                        const target = sheet.relativeTo(cell, i, j);
                        delete target.cell;
                        target.classList.remove('hidden');
                    }
                    cell.removeAttribute('rowspan');
                    cell.removeAttribute('colspan');
                    continue;
                }
                cell.setAttribute('rowspan', `${val[0]}`);
                cell.setAttribute('colspan', `${val[1]}`);
                for(let i = 0; i < val[0]; ++i)for(let j = 0; j < val[1]; ++j){
                    if (i === 0 && j === 0) continue;
                    const target = sheet.relativeTo(cell, i, j);
                    target.cell = cell;
                    target.classList.add('hidden');
                }
                continue;
            }
            if (typeof val === "boolean") {
                if (name.startsWith('align_')) {
                    cell.classList.remove('align_left');
                    cell.classList.remove('align_center');
                    cell.classList.remove('align_right');
                }
                if (name.startsWith('valign_')) {
                    cell.classList.remove('valign_top');
                    cell.classList.remove('valign_middle');
                    cell.classList.remove('valign_bottom');
                }
                cell.classList.toggle(name, val);
                continue;
            }
            cell.style.setProperty(`--${name}`, val);
        }
    }
    getProperty(name) {
        return this.#format[name];
    }
    hasProperty(name) {
        return name in this.#format;
    }
    static extractFormat(cell) {
        if (cell instanceof _sheet__WEBPACK_IMPORTED_MODULE_1__.CellList) {
            const cells = cell.cells;
            let format = Format.extractFormat(cells[0]);
            for(let i = 1; i < cells.length; ++i){
                let f2 = Format.extractFormat(cells[i]);
                for(let key in format.#format)if (!(key in f2.#format) || f2.#format[key] !== format.#format[key]) delete format.#format[key];
            }
            return format;
        }
        let format = Object.fromEntries([
            ...cell.classList.values()
        ].map((e)=>[
                e,
                true
            ]));
        for(let i = 0; i < cell.style.length; ++i){
            let name = cell.style.item(i);
            if (!name.startsWith('--')) continue;
            format[name.slice(2)] = cell.style.getPropertyValue(name);
        }
        const colspan = +(cell.getAttribute('colspan') ?? 1);
        const rowspan = +(cell.getAttribute('rowspan') ?? 1);
        if (colspan > 1 || rowspan > 1) format.span = [
            rowspan,
            colspan
        ];
        if (!("font_size" in format)) format['font_size'] = '10pt';
        if ("format" in cell) format.format = cell.format;
        if (cell.hasAttribute('precision')) format.precision = cell.getAttribute('precision');
        return new Format(format);
    }
}


/***/ }),

/***/ "./src/struct/calc/formula_editor.ts":
/*!*******************************************!*\
  !*** ./src/struct/calc/formula_editor.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalcFormula: () => (/* binding */ CalcFormula)
/* harmony export */ });
/* harmony import */ var _libs_LISS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../libs/LISS */ "./libs/LISS/index.ts");
/* harmony import */ var _sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sheet */ "./src/struct/calc/sheet.ts");
//TODO: webpack config...


const css = `
    :host {
        display: block;
        line-height: 1rem;
        width: 100%;

        & pre {
            text-align: left;
            width: 100%;
            box-sizing: border-box;
            padding: 4px;
            margin: 0;
            background-color: white;
            border: 1px solid #c0c0c0;
            min-height: calc( 1rem + 8px + 2px );
            color: black;
            font-size: 10pt;
            font-family: 'Liberation Sans';
        }
    }
`;
class CalcFormula extends (0,_libs_LISS__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css
}) {
    #input = document.createElement('pre');
    #sheet;
    #cur_cell = null;
    #onInput;
    constructor(){
        super();
        this.content.append(this.#input);
        this.#input.addEventListener('focusout', ()=>{
            if (this.#cur_cell === null) return;
            this.#sheet.cursor.content = this.#input.textContent;
            this.#sheet.states.cell_edit.state = null;
        });
        this.#input.addEventListener('focusin', ()=>{
            if (this.#cur_cell === null) return;
            this.#sheet.states.cell_edit.state = this.#cur_cell;
        //this.#cur_cell!.textContent = this.#input.textContent!;
        });
        this.#input.addEventListener('input', ()=>{
            if (this.#cur_cell === null) return;
            this.#cur_cell.textContent = (0,_sheet__WEBPACK_IMPORTED_MODULE_1__.defaultFormat)(this.#input.textContent);
            this.#cur_cell.dispatchEvent(new CustomEvent('input', {
                detail: true
            }));
        });
        this.#onInput = (ev)=>{
            //@ts-ignore
            if (ev.detail === true) return;
            this.#input.textContent = (0,_sheet__WEBPACK_IMPORTED_MODULE_1__.defaultFormat)(this.#cur_cell.textContent);
        };
    }
    syncTo(sheet) {
        this.#sheet = sheet;
        const cursor = this.#sheet.cursor;
        cursor.addEventListener('change', (_)=>{
            const cells = cursor.cells;
            this.#input.toggleAttribute('contenteditable', cells.length !== 0);
            if (cells.length === 0) {
                if (this.#cur_cell !== null) this.#cur_cell.removeEventListener('input', this.#onInput);
                this.#cur_cell = null;
                this.#input.textContent = "";
                return;
            }
            this.#cur_cell = cells[0];
            this.#cur_cell.addEventListener('input', this.#onInput);
            this.#input.textContent = (0,_sheet__WEBPACK_IMPORTED_MODULE_1__.defaultFormat)(this.#cur_cell.rawContent);
        });
    }
}
_libs_LISS__WEBPACK_IMPORTED_MODULE_0__["default"].define('calc-formula', CalcFormula);


/***/ }),

/***/ "./src/struct/calc/formula_parser.ts":
/*!*******************************************!*\
  !*** ./src/struct/calc/formula_parser.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Formula: () => (/* binding */ Formula),
/* harmony export */   parse_formula: () => (/* binding */ parse_formula)
/* harmony export */ });
/* harmony import */ var _sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sheet */ "./src/struct/calc/sheet.ts");

class Formula {
    #str;
    #exec;
    #ranges;
    constructor(str, exec, ranges_token = []){
        this.#str = str;
        this.#exec = exec;
        this.#ranges = ranges_token;
    }
    relativeTo(sheet, drow, dcol) {
        let new_ranges = this.#ranges.map((r)=>{
            //TODO: if range...
            let pos = [
                ...sheet.cellPos(sheet.getCells(r.value).cells[0])
            ];
            if (r.value.lastIndexOf('$') <= 0) pos[0] += drow;
            if (r.value[0] !== '$') pos[1] += dcol;
            return `${String.fromCharCode(65 + pos[1] - 1)}${pos[0]}`;
        });
        let new_formula = "";
        let offset = 0;
        for(let i = 0; i < this.#ranges.length; ++i){
            new_formula += this.#str.slice(offset, this.#ranges[i].beg);
            new_formula += new_ranges[i];
            offset = this.#ranges[i].end;
        }
        new_formula += this.#str.slice(offset);
        //can be optimized...
        return parse_formula(new_formula);
    }
    get rangesToken() {
        return this.#ranges;
    }
    exec(sheet) {
        return this.#exec(sheet);
    }
    toString() {
        return this.#str;
    }
}
function extractToken(str, offset) {
    while([
        ' ',
        '\n',
        '\t'
    ].includes(str[offset]))++offset;
    let token = {
        beg: offset
    };
    if (str[offset] === '"') {
        token.type = "string";
        while(str[++offset] !== '"' && str[offset - 1] !== '\\'){
            if (offset + 1 >= str.length) throw new Error('Formula parsing error');
        }
        ++offset;
    } else if (str[offset] === ',' || str[offset] >= '0' && str[offset] <= '9') {
        token.type = "number";
        let hasComma = false;
        while(str[offset] === ',' || str[offset] >= '0' && str[offset] <= '9'){
            if (str[offset] === ',') {
                if (hasComma === true) throw new Error('Formula parsing error');
                hasComma = true;
            }
            ++offset;
        }
    } else if (str[offset] === '$' || str[offset] >= 'A' && str[offset] <= 'Z') {
        while(offset < str.length && (str[offset] === '$' || str[offset] >= 'A' && str[offset] <= 'Z' || str[offset] >= '0' && str[offset] <= '9'))++offset;
        token.type = str[offset] === '(' ? 'call' : 'range';
        if (str[offset] === '(') throw new Error('not implemented');
    } else {
        token.type = "op"; // only on char ???
        if (str[offset + 1] === '=') ++offset;
        else if (str[offset + 1] === '>') ++offset;
        ++offset;
    }
    token.end = offset;
    token.value = str.slice(token.beg, token.end);
    return token;
}
class Node {
    children;
    #fct;
    constructor(fct, ...children){
        this.children = children;
        if (children === undefined) throw new Error("WTF");
        this.#fct = fct;
    }
    eval(sheet) {
        const args = this.children.map((c)=>c.eval(sheet));
        return this.#fct(sheet, ...args);
    }
}
function toNumber(a) {
    if (a === undefined) return 0;
    return a;
}
const op_impl = {
    '%': (_, a)=>toNumber(a) / 100,
    'u.+': (_, a)=>+toNumber(a),
    'u.-': (_, a)=>-toNumber(a),
    '*': (_, a, b)=>toNumber(a) * toNumber(b),
    '/': (_, a, b)=>toNumber(a) / toNumber(b),
    '+': (_, a, b)=>toNumber(a) + toNumber(b),
    '-': (_, a, b)=>toNumber(a) - toNumber(b),
    '^': (_, a, b)=>Math.pow(toNumber(a), toNumber(b)),
    '&': (_, a, b)=>`${(0,_sheet__WEBPACK_IMPORTED_MODULE_0__.defaultFormat)(a)}${(0,_sheet__WEBPACK_IMPORTED_MODULE_0__.defaultFormat)(b)}`,
    '=': (_, a, b)=>a === b,
    '<>': (_, a, b)=>a !== b,
    '>': (_, a, b)=>a > b,
    '>=': (_, a, b)=>a >= b,
    '<': (_, a, b)=>a < b,
    '<=': (_, a, b)=>a <= b
};
// https://help.libreoffice.org/latest/en-US/text/scalc/01/04060199.html
const op_prio = [
    [
        ':'
    ],
    [
        '!'
    ],
    [
        '~'
    ],
    [
        'u.+',
        'u.-'
    ],
    [
        '%'
    ],
    [
        '^'
    ],
    [
        '*',
        '/'
    ],
    [
        '+',
        '-'
    ],
    [
        '&'
    ],
    [
        '=',
        '<>',
        '<',
        '<=',
        '>',
        '>='
    ] // compare
];
let ops = {};
for(let i = 0; i < op_prio.length; ++i)for (let op of op_prio[i])ops[op] = i;
function tokenlist2Tree(tokens) {
    if (tokens.length === 1) {
        if (tokens[0].type === "number") {
            const nb = +tokens[0].value.replace(',', '.');
            return new Node(()=>nb);
        }
        if (tokens[0].type === "string") {
            const str = tokens[0].value.slice(1, -1);
            return new Node(()=>str);
        }
        if (tokens[0].type === "range") {
            return new Node((sheet)=>{
                let raw = sheet.getCells(tokens[0].value).cells[0].rawContent;
                if (raw instanceof Formula) raw = raw.exec(sheet); // TODO: cache result
                return raw;
            });
        }
        throw new Error("???");
    }
    if (tokens[0].value === '(' && tokens[tokens.length - 1].value === ')') return tokenlist2Tree(tokens.slice(1, -1));
    let cur = {
        priority: op_prio.length,
        idx: -1
    };
    for(let i = tokens.length - 1; i >= 0; --i){
        if (tokens[i].type !== "op") continue;
        if (tokens[i].value === ')') {
            i = tokens.findIndex((t)=>t.type === 'op' && t.value === '(');
            if (i === 0) break;
            --i;
        }
        // asserts if unary op.
        if (tokens[i].value === '-' || tokens[i].value === '+') {
            if (i === 0 || tokens[i - 1].type === "op") {
                const u_op = `u.${tokens[i].value}`;
                tokens[i].value = u_op;
                const priority = ops[u_op];
                // priority is reversed + evaluated from right to left.
                if (priority <= cur.priority) {
                    cur.priority = priority;
                    cur.idx = i;
                }
                continue;
            }
        }
        const priority = ops[tokens[i].value];
        // priority is reversed.
        if (priority < cur.priority) {
            cur.priority = priority;
            cur.idx = i;
        }
    }
    if (cur.idx === -1) throw new Error('???');
    let op_token = tokens[cur.idx];
    if (op_token.value === '%') {
        const left = tokens.slice(0, cur.idx);
        const op = op_impl[op_token.value];
        return new Node(op, tokenlist2Tree(left));
    }
    if (op_token.value === 'u.-' || op_token.value === 'u.+') {
        const right = tokens.slice(cur.idx + 1);
        const op = op_impl[op_token.value];
        return new Node(op, tokenlist2Tree(right));
    }
    const left = tokens.slice(0, cur.idx);
    const right = tokens.slice(cur.idx + 1);
    const op = op_impl[op_token.value];
    return new Node(op, tokenlist2Tree(left), tokenlist2Tree(right));
}
function parse_formula(str) {
    let offset = 1;
    let tokens = new Array();
    while(offset < str.length){
        let curToken = extractToken(str, offset);
        tokens.push(curToken);
        offset = curToken.end;
    }
    const node = tokenlist2Tree(tokens);
    const ranges = tokens.filter((t)=>t.type === "range");
    return new Formula(str, (sheet)=>node.eval(sheet), ranges);
}


/***/ }),

/***/ "./src/struct/calc/plage_editor.ts":
/*!*****************************************!*\
  !*** ./src/struct/calc/plage_editor.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlageFormula: () => (/* binding */ PlageFormula)
/* harmony export */ });
/* harmony import */ var _libs_LISS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../libs/LISS */ "./libs/LISS/index.ts");
//TODO: webpack config...

//TODO: syntax highlight ;)
const css = `
    :host {
        display: block;
        line-height: 1rem;
        width: 100%;

        & pre {
            text-align: left;
            width: 100%;
            box-sizing: border-box;
            padding: 4px;
            margin: 0;
            background-color: white;
            border: 1px solid #c0c0c0;
            min-height: calc( 1rem + 8px + 2px );
            color: black;
            font-size: 10pt;
            font-family: 'Liberation Sans';
        }
    }
`;
class PlageFormula extends (0,_libs_LISS__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css
}) {
    #input = document.createElement('pre');
    constructor(){
        super();
        this.content.append(this.#input);
        this.#input.toggleAttribute('contenteditable');
        this.#input.addEventListener('keydown', (ev)=>{
            if (ev.code !== 'Enter') return;
            ev.stopImmediatePropagation();
            ev.preventDefault();
            const selected = this.#sheet.getCells(this.#input.textContent).cells;
            this.#sheet.selection.clear();
            this.#sheet.selection.add(...selected);
            this.#sheet.cursor.clear();
            this.#sheet.cursor.add(selected[0]);
            this.#input.blur();
        });
        //TODO....
        this.#input.toggleAttribute('disabled');
    /*this.#input.addEventListener('change', () => {

        });*/ }
    #sheet;
    syncTo(sheet) {
        this.#sheet = sheet;
        const selection = sheet.selection;
        selection.addEventListener('change', (_)=>{
            this.#input.textContent = selection.plage_name ?? "";
        });
    }
}
_libs_LISS__WEBPACK_IMPORTED_MODULE_0__["default"].define('calc-plage', PlageFormula);


/***/ }),

/***/ "./src/struct/calc/plage_selector.ts":
/*!*******************************************!*\
  !*** ./src/struct/calc/plage_selector.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlageSelector: () => (/* binding */ PlageSelector)
/* harmony export */ });
class PlageSelector {
    #updateSelection() {
        let selected_cells = this.#sheet.getRange(this.#orig_pos, this.#final_pos).cells;
        this.#sheet.selection.clear(); // we add it...
        if (this.#isCtrl) {
            // restore initial state...
            this.#sheet.selection.add(...this.#prev_selection);
            //TODO only orig_target...
            if (this.#sheet.selection.has(...selected_cells)) this.#sheet.selection.remove(...selected_cells);
            else this.#sheet.selection.add(...selected_cells);
            return;
        }
        this.#sheet.selection.add(...selected_cells);
    }
    #isCtrl;
    #sheet;
    #orig_target;
    #orig_pos;
    #final_pos;
    #prev_selection;
    #ev2pos(ev) {
        const cols = [
            ...this.#sheet.tbody.children[0].children
        ];
        let col_id;
        for(col_id = cols.length - 1; col_id >= 0; --col_id){
            if (ev.clientX >= cols[col_id].getBoundingClientRect().x) break;
        }
        const rows = [
            ...this.#sheet.tbody.children
        ].map((e)=>e.children[0]);
        let row_id;
        for(row_id = rows.length - 1; row_id >= 0; --row_id){
            if (ev.clientY >= rows[row_id].getBoundingClientRect().y) break;
        }
        return [
            row_id,
            col_id
        ];
    }
    constructor(sheet){
        this.#sheet = sheet;
        const main = document.querySelector('main');
        const on_mouse_move = (ev)=>{
            this.#final_pos = this.#ev2pos(ev);
            this.#updateSelection();
        };
        // @ts-ignore
        sheet.content.addEventListener("mousedown", (ev)=>{
            const target = ev.target;
            if (sheet.states.cell_edit.state === target) return;
            if (![
                "TH",
                "TD"
            ].includes(target.tagName)) return;
            if (target.tagName === "TH" && target.textContent === "") {
                this.#sheet.selection.clear();
                const ref = `A1:${this.#sheet.pos2ref(this.#sheet.nbRows, this.#sheet.nbCols)}`;
                this.#sheet.selection.add(...this.#sheet.getCells(ref).cells);
                return;
            }
            this.#isCtrl = ev.ctrlKey;
            this.#orig_target = target;
            this.#orig_pos = this.#ev2pos(ev); // Can be TH...
            this.#final_pos = this.#orig_pos;
            this.#prev_selection = sheet.selection.cells.slice();
            this.#updateSelection();
            main.addEventListener('mousemove', on_mouse_move);
            document.addEventListener('mouseup', ()=>{
                main.removeEventListener('mousemove', on_mouse_move);
            }, {
                once: true
            });
        });
    }
}


/***/ }),

/***/ "./src/struct/calc/sheet.ts":
/*!**********************************!*\
  !*** ./src/struct/calc/sheet.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalcSheet: () => (/* binding */ CalcSheet),
/* harmony export */   CellList: () => (/* binding */ CellList),
/* harmony export */   defaultFormat: () => (/* binding */ defaultFormat)
/* harmony export */ });
/* harmony import */ var _libs_LISS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../libs/LISS */ "./libs/LISS/index.ts");
/* harmony import */ var _raw_loader_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!raw-loader!./index.css */ "./node_modules/raw-loader/dist/cjs.js!./src/struct/calc/index.css");
/* harmony import */ var _formula_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formula_editor */ "./src/struct/calc/formula_editor.ts");
/* harmony import */ var _plage_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plage_editor */ "./src/struct/calc/plage_editor.ts");
/* harmony import */ var _formula_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formula_parser */ "./src/struct/calc/formula_parser.ts");
/* harmony import */ var _plage_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plage_selector */ "./src/struct/calc/plage_selector.ts");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./format */ "./src/struct/calc/format.ts");
//TODO: webpack config...

//@ts-ignore

function isActive(target) {
    return target.matches(':focus');
/*
    let active = document.activeElement;

    while( active?.shadowRoot instanceof ShadowRoot )
        active = active.shadowRoot.activeElement;

    return active === target;*/ }
function onInput(ev) {
    const target = ev.target;
    /*
    if( ! isActive(target) ) {
        target.innerHTML = highlight(target.textContent!);
        return;
    }*/ // https://stackoverflow.com/questions/21234741/place-caret-back-where-it-was-after-changing-innerhtml-of-a-contenteditable-elem
    let rrange = window.getSelection().getRangeAt(0);
    let c = rrange.startOffset;
    //let text = "";
    let length = 0;
    for(let i = 0; i < target.childNodes.length; ++i){
        let child = target.childNodes[i];
        if (child.nodeType !== Node.TEXT_NODE) child = child.childNodes[0];
        if (rrange.startContainer === child) {
            //text += p.childNodes[i].textContent!.slice(0, c);
            length += c;
            break;
        }
        //text += p.childNodes[i].textContent;
        length += target.childNodes[i].textContent.length;
    }
    // Update innerHTML
    //target.innerHTML = highlight(target.textContent!);
    target.textContent = target.textContent;
    let child;
    let i;
    for(i = 0; i < target.childNodes.length; ++i){
        if (length <= target.childNodes[i].textContent.length) {
            child = target.childNodes[i];
            break;
        }
        length -= target.childNodes[i].textContent.length;
    }
    if (child.nodeType !== Node.TEXT_NODE) child = child.childNodes[0];
    var range = document.createRange();
    var sel = window.getSelection();
    range.setStart(child, length);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
}
function defaultFormat(value, prec = null) {
    //TODO...
    if (typeof value === "number") return `${+value.toPrecision(7)}`.replace('.', ',');
    if (typeof value === "boolean") return value ? 'VRAI' : 'FAUX';
    if (value instanceof Date) {
        return value.toLocaleDateString("fr-FR");
    }
    if (value instanceof _formula_parser__WEBPACK_IMPORTED_MODULE_2__.Formula) {
        return value.toString();
    }
    return value;
}
function parseInput(str) {
    if (str === 'VRAI') return true;
    if (str === 'FAUX') return false;
    if (str.trim() === '') return str;
    if (str[0] === "=") {
        return (0,_formula_parser__WEBPACK_IMPORTED_MODULE_2__.parse_formula)(str);
    }
    let test_number = Number(str.replace(',', '.'));
    if (!Number.isNaN(test_number)) return test_number;
    const parts = str.split('/');
    if (parts.length <= 3) {
        let test_date = new Date(+parts[2] ?? new Date().getFullYear(), +parts[1] - 1, +parts[0]);
        if (test_date.toString() !== "Invalid Date") return test_date;
    }
    return str;
}
class State {
    #state = null;
    #target;
    #name;
    constructor(target, name){
        this.#target = target;
        this.#name = name;
    }
    get state() {
        return this.#state;
    }
    set state(state) {
        console.warn("state", this.#state, state);
        if (this.#state === state) return;
        let prev_state = this.#state;
        this.#state = state;
        if (prev_state !== null) this.#target.dispatchEvent(new CustomEvent(`${this.#name}_end`, {
            detail: prev_state
        }));
        if (state !== null) this.#target.dispatchEvent(new CustomEvent(`${this.#name}_start`, {
            detail: state
        }));
    }
}
const States = {
    "cell_edit": State,
    "recopy": State
};
class CalcSheet extends (0,_libs_LISS__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: _raw_loader_index_css__WEBPACK_IMPORTED_MODULE_1__["default"],
    attributes: [
        "cols",
        "rows",
        "ro"
    ]
}) {
    states = Object.fromEntries(Object.entries(States).map(([n, s])=>[
            n,
            new s(this.host, n)
        ]));
    #plage_selector = new _plage_selector__WEBPACK_IMPORTED_MODULE_3__.PlageSelector(this);
    //TODO: RO prop ?
    #selection = new CellList(this, []);
    #cursor = new CellList(this, []);
    #format_mngr = new _format__WEBPACK_IMPORTED_MODULE_4__.FormatManager(this);
    get cursor() {
        return this.#cursor;
    }
    get selection() {
        return this.#selection;
    }
    get content() {
        return super.content;
    }
    removeHighlights() {
        for (let h of this.content.querySelectorAll('.range_highlight'))h.remove();
    }
    removeCopyHighlight() {
        for (let h of this.content.querySelectorAll('.copy_highlight'))h.remove();
    }
    setRect(target, [x, y, w, h]) {
        const tbl_offset = this.content.querySelector('table').offsetTop;
        target.style.setProperty('top', `${tbl_offset + y}px`);
        target.style.setProperty('height', `${h}px`);
        target.style.setProperty('left', `${x}px`);
        target.style.setProperty('width', `${w}px`);
    }
    getRect(cells) {
        cells = "cells" in cells ? cells.cells : cells;
        const start = cells[0];
        const end = cells[cells.length - 1];
        return [
            start.offsetLeft,
            start.offsetTop,
            end.offsetLeft + end.clientWidth - start.offsetLeft,
            end.offsetTop + end.clientHeight - start.offsetTop + 1
        ];
    }
    highlight(start, end, id_or_classlist) {
        const high = document.createElement('div');
        if (typeof id_or_classlist === "number") high.classList.add('range_highlight', `highlight_${id_or_classlist}`);
        else high.classList.add(...id_or_classlist);
        this.setRect(high, this.getRect([
            start,
            end
        ]));
        this.content.append(high);
        return high;
    }
    relativeTo(cell, row_diff, col_diff) {
        let [row, col] = this.cellPos(cell);
        row += row_diff;
        col += col_diff;
        // for normal : get stuck inside grid.
        if (row < 1) row = 1;
        if (row >= this.#tbody.children.length) row = this.#tbody.children.length - 1;
        if (col < 1) col = 1;
        if (col >= this.#tbody.children[row].children.length) col = this.#tbody.children[row].children.length - 1;
        return this.#tbody.children[row].children[col];
    }
    //TODO: 2D...
    #pastebin = null;
    constructor(){
        super();
        const cursor = document.createElement('div');
        cursor.classList.add("cursor");
        this.content.append(cursor);
        const recopy = document.createElement('div');
        recopy.classList.add("recopy");
        this.content.append(recopy);
        const main = document.querySelector("main");
        let last_recopy_target = null;
        let last_recopy_dir = null;
        const on_recopy_move = (ev)=>{
            let cells = this.states.recopy.state.cells;
            const src = cells[cells.length - 1];
            let pos = src.getBoundingClientRect();
            let d_px = ev.clientX - (pos.x + pos.width / 2);
            let d_py = ev.clientY - (pos.y + pos.height / 2);
            let d_x = 0;
            let d_y = Math.sign(d_py);
            if (Math.abs(d_px) > Math.abs(d_py)) {
                d_x = Math.sign(d_px);
                d_y = 0;
            }
            let prev = src;
            let cur = src;
            let diff_x, diff_y;
            do {
                prev = cur;
                cur = this.relativeTo(prev, d_y, d_x);
                if (cur === prev) break;
                let pos_cur = cur.getBoundingClientRect();
                diff_x = ev.clientX - (pos_cur.x + pos_cur.width / 2);
                diff_y = ev.clientY - (pos_cur.y + pos_cur.height / 2);
            }while (diff_x * d_x + diff_y * d_y > 0)
            last_recopy_target = prev;
            last_recopy_dir = [
                d_x,
                d_y
            ];
            let beg = src;
            let end = prev;
            if (src.offsetLeft > prev.offsetLeft || src.offsetTop > prev.offsetTop) [beg, end] = [
                end,
                beg
            ];
            //TODO: highlight...
            this.removeHighlights(); //TODO...
            this.highlight(beg, end, 1); //TODO class...
        };
        recopy.addEventListener("mousedown", (ev)=>{
            ev.preventDefault();
            this.states.recopy.state = this.#selection;
            // @ts-ignore
            main.addEventListener("mousemove", on_recopy_move);
            document.addEventListener("mouseup", ()=>{
                let [d_x, d_y] = last_recopy_dir;
                let cells = this.states.recopy.state.cells;
                const src = cells[cells.length - 1];
                let nb = 0;
                if (last_recopy_target !== src) {
                    let cur = src;
                    do {
                        ++nb;
                        cur = this.relativeTo(cur, d_y, d_x);
                        let content = src;
                        if (typeof content.rawContent === "number") content = src.rawContent + nb * (d_x + d_y);
                        else if (content.rawContent instanceof Date) {
                            console.warn("is date", nb, d_x + d_y);
                            content = new Date(src.rawContent);
                            content.setDate(content.getDate() + nb * (d_x + d_y));
                        }
                        new CellList(this, [
                            cur
                        ]).content = content;
                        cur.className = src.className; //TODO: format...
                    }while (cur !== last_recopy_target)
                }
                this.removeHighlights(); //TODO...
                this.states.recopy.state = null;
                last_recopy_target = null;
                last_recopy_dir = null;
                // @ts-ignore
                main.removeEventListener("mousemove", on_recopy_move);
            }, {
                once: true
            });
        });
        this.host.addEventListener('recopy_start', ()=>{
            this.host.classList.add('recopy');
        });
        this.host.addEventListener('recopy_end', ()=>{
            this.host.classList.remove('recopy');
        });
        this.#cursor.addEventListener('change', (ev)=>{
            const cells = this.#cursor.cells;
            if (cells.length === 0) return;
            this.setRect(cursor, this.getRect(cells));
        });
        this.#selection.addEventListener('change', (ev)=>{
            for (let cell of this.content.querySelectorAll('.highlight'))cell.classList.remove('highlight');
            const cells = this.#selection.cells;
            if (cells.length === 0) return;
            for (let cell of cells){
                if (cells.length !== 1) cell.classList.add('highlight');
                const [row, col] = this.#cellPos(cell);
                this.#tbody.children[0].children[col].classList.add("highlight");
                this.#tbody.children[row].children[0].classList.add("highlight");
            }
            const [x, y, w, h] = this.getRect(cells);
            this.setRect(recopy, [
                x + w - 2,
                y + h - 2,
                5,
                5
            ]);
        // only if simple...
        // const last = cells[cells.length-1];
        // pointer...
        });
        //TODO: move out ?
        const formula_bar = document.createElement('div');
        formula_bar.classList.add('toolbar');
        (async ()=>{
            const plage = await _libs_LISS__WEBPACK_IMPORTED_MODULE_0__["default"].build("calc-plage");
            plage.syncTo(this);
            formula_bar.append(plage.host);
            const formula = await _libs_LISS__WEBPACK_IMPORTED_MODULE_0__["default"].build("calc-formula");
            formula.syncTo(this);
            formula_bar.append(formula.host);
        })();
        this.content.append(formula_bar);
        this.#initGrid(+this.attrs.rows, +this.attrs.cols);
        this.content.addEventListener('click', (ev)=>{
            const target = ev.target;
            this.removeHighlights(); //TODO: move...
            // the cell is being edited...
            if (target.hasAttribute('contenteditable')) return;
            if (target.tagName === "TD") {
                let cell = target;
                if ("cell" in cell) cell = cell.cell;
                //TODO: move...
                this.#cursor.clear();
                this.#cursor.add(cell);
            }
            if (target.tagName === "TH" && target.textContent !== "") {
                const cell = this.getCells(target.textContent).cells[0];
                this.#cursor.clear();
                this.#cursor.add(cell);
            }
        // this.#tbody.focus(); // ?
        });
        this.content.addEventListener("dblclick", (ev)=>{
            let target = ev.target;
            if (target.tagName !== "TD") return;
            if (this.attrs.ro !== "true" && target.is_ro !== true) {
                target.toggleAttribute("contenteditable", true);
                target.focus();
            }
        });
        // @ts-ignore
        this.content.addEventListener('keydown', (ev)=>{
            const target = ev.target;
            if (target === this.#tbody) {
                if (ev.code === "KeyV" && ev.ctrlKey && this.#pastebin !== null) {
                    ev.preventDefault();
                    const data = this.#pastebin.cells;
                    this.#selection.content = data;
                    // copy format... TODO utility thingy...
                    if (!ev.shiftKey || !ev.altKey) {
                        const src = this.#pastebin.cells;
                        const dst = this.#selection.cells;
                        for(let i = 0; i < src.length; ++i){
                            dst[i].className = src[i].className;
                        //TODO: add format...
                        }
                    }
                    return;
                }
                if ((ev.key === "c" || ev.key === "x") && ev.ctrlKey) {
                    ev.preventDefault();
                    let selection = this.#selection.cells; //TODO: as array...
                    let h = this.highlight(selection[0], selection[selection.length - 1], [
                        'copy_highlight'
                    ]);
                    // WHY ???
                    h.style.setProperty('top', `${selection[0].offsetTop}px`);
                    this.#pastebin = this.#selection.deepClone();
                    if (ev.key === "x") {
                        this.#selection.deleteFormat();
                        this.#selection.deleteContent();
                    }
                    return;
                }
                if (ev.key === "Control" || ev.key === "Shift" || ev.key === "Alt") {
                    return; // ignore
                }
                if (ev.code === "Delete") {
                    this.selection.deleteContent();
                    this.selection.dispatchEvent(new CustomEvent("change"));
                    return;
                }
                if (ev.code === "Enter") {
                // handled elsewhere
                } else if (ev.code.startsWith('Arrow')) {
                    ev.preventDefault();
                    const cur = this.cursor.cells;
                    if (cur.length === 0) return;
                    let d_row = 0;
                    let d_col = 0;
                    if (ev.code === 'ArrowLeft') --d_col;
                    if (ev.code === 'ArrowRight') ++d_col;
                    if (ev.code === 'ArrowUp') --d_row;
                    if (ev.code === 'ArrowDown') ++d_row;
                    let next;
                    if (ev.ctrlKey) {
                        let prev = cur[0];
                        let cursor = this.relativeTo(prev, d_row, d_col);
                        if (prev.rawContent !== undefined && cursor.rawContent !== undefined) {
                            while(prev !== cursor && cursor.rawContent !== undefined){
                                prev = cursor;
                                cursor = this.relativeTo(prev, d_row, d_col);
                            }
                            cursor = prev;
                        } else {
                            while(prev !== cursor && cursor.rawContent === undefined){
                                prev = cursor;
                                cursor = this.relativeTo(prev, d_row, d_col);
                            }
                        }
                        next = cursor;
                    } else next = this.relativeTo(cur[0], d_row, d_col);
                    this.#tbody.focus();
                    next.click();
                //next.dispatchEvent( new CustomEvent('click', {bubbles: true}) );
                } else if (ev.ctrlKey) {
                    return;
                } else {
                    const cur = this.cursor.cells;
                    if (cur.length > 0) {
                        cur[0].dispatchEvent(new CustomEvent("dblclick", {
                            bubbles: true
                        }));
                        cur[0].textContent = "";
                    }
                    return;
                }
            }
            if (target !== this.#tbody && ev.code === 'Enter' && ev.shiftKey) return; // default browser behavior.
            if (ev.code === "Enter") {
                ev.preventDefault();
                this.removeHighlights();
                const cur = this.cursor.cells;
                if (cur.length === 0) return;
                let [row, col] = this.cellPos(cur[0]);
                ++row;
                if (row >= this.#tbody.children.length) {
                    row = 1;
                    ++col;
                }
                if (col >= this.#tbody.children[row].children.length) {
                    col = 1;
                }
                let next = this.#tbody.children[row].children[col];
                this.#tbody.focus();
                next.click();
                //next.dispatchEvent( new CustomEvent('click', {bubbles: true}) );
                //target.blur();
                return;
            }
        });
        const onInput2 = (ev)=>{
            this.removeHighlights();
            // @ts-ignore
            if (ev.detail !== true) onInput(ev);
        };
        //TODO: here...
        this.content.addEventListener('focusin', (ev)=>{
            const target = ev.target;
            this.removeCopyHighlight(); // TODO: move to cell_edit_end ?
            if (target.tagName !== "TD") return;
            this.states.cell_edit.state = target;
        });
        //@ts-ignore
        this.host.addEventListener("cell_edit_start", (ev)=>{
            this.host.classList.toggle("cell_edit", true);
            const cell = ev.detail;
            if (cell.rawContent instanceof _formula_parser__WEBPACK_IMPORTED_MODULE_2__.Formula) {
                const str = cell.rawContent.toString();
                const ranges = cell.rawContent.rangesToken;
                let children = [
                    str
                ];
                let ranges_colors = {};
                let cur_offset = 0;
                for(let i = 0; i < ranges.length; ++i){
                    let str = children[children.length - 1];
                    children[children.length - 1] = str.slice(0, ranges[i].beg - cur_offset);
                    let s = document.createElement('span');
                    const range_name = ranges[i].value;
                    if (!(range_name in ranges_colors)) ranges_colors[range_name] = i % 8;
                    s.classList.add('formula_highlight', `highlight_${ranges_colors[range_name]}`); //TODO...
                    s.textContent = ranges[i].value;
                    children.push(s); // range...
                    children.push(str.slice(ranges[i].end - cur_offset));
                    cur_offset = ranges[i].end;
                }
                cell.replaceChildren(...children);
                for(let range in ranges_colors){
                    const cell = this.getCells(range).cells;
                    let beg = cell[0];
                    let end = cell[cell.length - 1];
                    this.highlight(beg, end, ranges_colors[range]);
                }
                cell.addEventListener('input', onInput2); // remove colors...
            } else {
                cell.textContent = defaultFormat(cell.rawContent);
            }
        });
        //@ts-ignore
        this.host.addEventListener("cell_edit_end", (ev)=>{
            this.host.classList.toggle("cell_edit", false);
            const cell = ev.detail;
            cell.removeEventListener("input", onInput2); // to be safe
            cell.toggleAttribute("contenteditable", false);
            new CellList(this, [
                cell
            ]).content = cell.textContent;
            this.update();
            // leave
            this.#selection.clear();
            this.#cursor.clear();
        });
        this.content.addEventListener("focusout", (ev)=>{
            const target = ev.target;
            this.removeHighlights(); // TODO: only cell_edit ??
            if (target.tagName !== "TD") return;
            this.states.cell_edit.state = null;
        });
        let t = this.#tbody.querySelectorAll('td');
    }
    cellPos(cell) {
        return this.#cellPos(cell);
    }
    #cellPos(cell) {
        if ("pos" in cell) return cell.pos;
        const col = [
            ...cell.parentElement.children
        ].findIndex((c)=>c === cell);
        const row = [
            ...cell.parentElement.parentElement.children
        ].findIndex((r)=>r === cell.parentElement);
        return [
            row,
            col
        ];
    }
    #tbody;
    get tbody() {
        return this.#tbody;
    }
    resize(nbrows, nbcols) {
        const col_html = document.createElement('tr');
        col_html.append(document.createElement('th'));
        const tbody = this.#tbody;
        tbody.replaceChildren();
        for(let col = 0; col < nbcols; ++col){
            const th = document.createElement('th');
            th.textContent = String.fromCharCode(65 + col);
            col_html.append(th);
        }
        tbody.append(col_html);
        for(let row = 0; row < nbrows; ++row){
            const row_html = document.createElement('tr');
            const th = document.createElement('th');
            th.textContent = `${row + 1}`;
            row_html.append(th);
            for(let col = 0; col < nbcols; ++col){
                const cell = document.createElement('td');
                //cell.toggleAttribute('contenteditable');
                cell.format = defaultFormat;
                row_html.append(cell);
            }
            tbody.append(row_html);
        }
    }
    #initGrid(nbrows, nbcols) {
        const is_ro = this.attrs.ro === "true";
        const table = document.createElement('table');
        const tbody = document.createElement('tbody');
        this.#tbody = tbody;
        this.#tbody.setAttribute('tabindex', '0');
        this.resize(nbrows, nbcols);
        table.append(tbody);
        this.content.append(table);
    }
    getRange(from, to = from) {
        let beg_row = from[0] || 1;
        let beg_col = from[1] || 1;
        let end_row = from[0] === 0 ? this.nbRows : to[0];
        let end_col = from[1] === 0 ? this.nbCols : to[1];
        if (end_row < beg_row) [beg_row, end_row] = [
            end_row,
            beg_row
        ];
        if (end_col < beg_col) [beg_col, end_col] = [
            end_col,
            beg_col
        ];
        const cells = new Array((end_row - beg_row + 1) * (end_col - beg_col + 1));
        let offset = 0;
        for(let i = beg_row; i <= end_row; ++i)for(let j = beg_col; j <= end_col; ++j)cells[offset++] = this.tbody.children[i].children[j];
        return new CellList(this, cells);
    }
    getCells(cell_or_rowid, col_id) {
        let row_id = cell_or_rowid;
        if (typeof cell_or_rowid === "string") {
            cell_or_rowid = cell_or_rowid.replaceAll('$', '');
            if (cell_or_rowid.includes(':')) {
                let [beg, end] = cell_or_rowid.split(':');
                const b_row_id = +beg[1];
                const b_col_id = beg.charCodeAt(0) + 1 - 65;
                const e_row_id = +end[1];
                const e_col_id = end.charCodeAt(0) + 1 - 65;
                const cells = new Array((e_col_id - b_col_id) * (e_row_id - b_row_id));
                let offset = 0;
                for(let r = b_row_id; r <= e_row_id; ++r)for(let c = b_col_id; c <= e_col_id; ++c)cells[offset++] = this.#tbody.children[r].children[c];
                return new CellList(this, cells);
            }
            // this is a full line...
            if (cell_or_rowid[0] >= '0' && cell_or_rowid[0] <= '9') {
                return this.getCells(`A${cell_or_rowid}:${this.pos2ref(+cell_or_rowid, this.nbCols)}`);
            } else if (cell_or_rowid[cell_or_rowid.length - 1] < '0' || cell_or_rowid[cell_or_rowid.length - 1] > '9') {
                console.warn(`${cell_or_rowid}1:${cell_or_rowid}${this.nbRows}`);
                return this.getCells(`${cell_or_rowid}1:${cell_or_rowid}${this.nbRows}`);
            }
            row_id = +cell_or_rowid[1];
            col_id = cell_or_rowid.charCodeAt(0) + 1 - 65;
        }
        const cell = this.#tbody.children[+row_id].children[col_id];
        return new CellList(this, [
            cell
        ]);
    }
    ref2pos(ref) {
        //TODO...
        const row = +ref[ref.length - 1];
        const col = ref.charCodeAt(0) - 65 + 1;
        return [
            row,
            col
        ];
    }
    pos2ref(row, col) {
        return `${String.fromCharCode(65 + col - 1)}${row}`;
    }
    get nbRows() {
        return this.#tbody.children.length - 1;
    }
    get nbCols() {
        return this.#tbody.firstElementChild.children.length - 1;
    }
    #isUpdating = false;
    update() {
        if (this.#isUpdating === true) return;
        this.#isUpdating = true;
        window.requestAnimationFrame(()=>{
            const cells = this.content.querySelectorAll('td');
            for (let cell of cells){
                if (cell.rawContent instanceof _formula_parser__WEBPACK_IMPORTED_MODULE_2__.Formula) {
                    let value = cell.rawContent.exec(this); //TODO...
                    //TODO: factorize...
                    let type = typeof value;
                    if (value instanceof Date) type = "date";
                    cell.textContent = cell.format(value);
                    cell.setAttribute('data-type', type);
                }
            }
            this.#isUpdating = false;
        });
    }
}
class CellList extends EventTarget {
    #sheet;
    #cells;
    constructor(sheet, cells){
        super();
        this.#cells = cells;
        this.#sheet = sheet;
    }
    get plage_name() {
        if (this.#cells.length === 0) return;
        if (this.#cells.length === 1) return this.#sheet.pos2ref(...this.#sheet.cellPos(this.#cells[0]));
        let cells = this.#cells.map((c)=>this.#sheet.cellPos(c)).sort((a, b)=>{
            if (a[0] !== b[0]) return a[0] - b[0];
            return a[1] - b[1];
        });
        let min = cells[0];
        let max = cells[cells.length - 1];
        let nb_cols = max[1] - min[1] + 1;
        for(let i = 0; i < cells.length; ++i)if (cells[i][0] !== Math.floor(i / nb_cols) + min[0] && cells[i][1] !== i % nb_cols + min[1]) return;
        return `${this.#sheet.pos2ref(...min)}:${this.#sheet.pos2ref(...max)}`;
    }
    get cells() {
        return this.#cells;
    }
    get sheet() {
        return this.#sheet;
    }
    toggleFormat(name) {
        let f = _format__WEBPACK_IMPORTED_MODULE_4__.Format.extractFormat(this);
        if (typeof name === "function") {
            let isFormat = f.getProperty("format") === name;
            this.format({
                format: isFormat ? null : name
            });
            return;
        }
        this.format({
            [name]: f.getProperty(name) !== true
        });
    }
    format(...f) {
        if (f.length > 1) {
            //TODO....
            f = Object.fromEntries(f.map((e)=>[
                    e,
                    true
                ]));
        } else f = f[0];
        if (typeof f === "function") f = {
            "format": f
        };
        if (typeof f === 'string') f = {
            [f]: true
        };
        if (!(f instanceof _format__WEBPACK_IMPORTED_MODULE_4__.Format)) f = new _format__WEBPACK_IMPORTED_MODULE_4__.Format(f);
        f.applyTo(this);
        return this;
    }
    get content() {
        let content = new Array(this.#cells.length);
        for(let i = 0; i < this.#cells.length; ++i)content[i] = this.#cells[i].rawContent;
        return content;
    }
    deleteFormat() {
        for (let cell of this.#cells)cell.className = '';
    }
    deleteContent() {
        for (let cell of this.#cells){
            cell.rawContent = undefined;
            cell.textContent = "";
            cell.removeAttribute('data-type');
        }
        this.#sheet.update();
    }
    set content(content) {
        if (Array.isArray(content)) {
            for(let i = 0; i < content.length; ++i)new CellList(this.#sheet, [
                this.#cells[i]
            ]).content = content[i];
            return;
        }
        if (typeof content === 'string') content = parseInput(content);
        let raw_val = content instanceof HTMLTableCellElement ? content.rawContent : content;
        for (let cell of this.#cells){
            if (content instanceof HTMLTableCellElement && content.rawContent instanceof _formula_parser__WEBPACK_IMPORTED_MODULE_2__.Formula) {
                let v = content.rawContent;
                const dst = this.#sheet.cellPos(cell);
                const src = this.#sheet.cellPos(content);
                const diff = [
                    dst[0] - src[0],
                    dst[1] - src[1]
                ];
                raw_val = v.relativeTo(this.#sheet, ...diff);
            }
            cell.rawContent = raw_val;
            let value = raw_val;
            if (raw_val instanceof _formula_parser__WEBPACK_IMPORTED_MODULE_2__.Formula) value = raw_val.exec(this.#sheet); //TODO...
            let type = typeof value;
            if (type === "object" && value instanceof Date) type = "date";
            cell.textContent = cell.format(value);
            cell.setAttribute('data-type', type);
        }
        this.#sheet.update();
    }
    setRO(is_ro = true) {
        for (let cell of this.#cells)cell.is_ro = is_ro;
        return this;
    }
    has(...cells) {
        for (let cell of cells)if (!this.#cells.includes(cell)) return false;
        return true;
    }
    remove(...cells) {
        this.#cells = this.#cells.filter((c)=>!cells.includes(c));
        this.dispatchEvent(new CustomEvent("change"));
    }
    add(...cells) {
        this.#cells.push(...cells);
        this.dispatchEvent(new CustomEvent("change"));
    }
    clear() {
        this.#cells.length = 0;
        this.dispatchEvent(new CustomEvent("change"));
    }
    deepClone() {
        let cells = this.#cells.map((c)=>{
            const clone = c.cloneNode(true);
            clone.rawContent = c.rawContent;
            clone.format = c.format;
            clone.pos = this.#sheet.cellPos(c);
            return clone;
        });
        return new CellList(this.#sheet, cells);
    }
}
//TODO...





_libs_LISS__WEBPACK_IMPORTED_MODULE_0__["default"].define('calc-sheet', CalcSheet);


/***/ }),

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
                    "TP1"
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
                name: "TP",
                path: "TP",
                children: [
                    "TP1",
                    "TP2",
                    "TP3",
                    "TP4",
                    "TP5"
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
/******/ /* webpack/runtime/async module */
/******/ (() => {
/******/ 	var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 	var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 	var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 	var resolveQueue = (queue) => {
/******/ 		if(queue && queue.d < 1) {
/******/ 			queue.d = 1;
/******/ 			queue.forEach((fn) => (fn.r--));
/******/ 			queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 		}
/******/ 	}
/******/ 	var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 		if(dep !== null && typeof dep === "object") {
/******/ 			if(dep[webpackQueues]) return dep;
/******/ 			if(dep.then) {
/******/ 				var queue = [];
/******/ 				queue.d = 0;
/******/ 				dep.then((r) => {
/******/ 					obj[webpackExports] = r;
/******/ 					resolveQueue(queue);
/******/ 				}, (e) => {
/******/ 					obj[webpackError] = e;
/******/ 					resolveQueue(queue);
/******/ 				});
/******/ 				var obj = {};
/******/ 				obj[webpackQueues] = (fn) => (fn(queue));
/******/ 				return obj;
/******/ 			}
/******/ 		}
/******/ 		var ret = {};
/******/ 		ret[webpackQueues] = x => {};
/******/ 		ret[webpackExports] = dep;
/******/ 		return ret;
/******/ 	}));
/******/ 	__webpack_require__.a = (module, body, hasAwait) => {
/******/ 		var queue;
/******/ 		hasAwait && ((queue = []).d = -1);
/******/ 		var depQueues = new Set();
/******/ 		var exports = module.exports;
/******/ 		var currentDeps;
/******/ 		var outerResolve;
/******/ 		var reject;
/******/ 		var promise = new Promise((resolve, rej) => {
/******/ 			reject = rej;
/******/ 			outerResolve = resolve;
/******/ 		});
/******/ 		promise[webpackExports] = exports;
/******/ 		promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 		module.exports = promise;
/******/ 		body((deps) => {
/******/ 			currentDeps = wrapDeps(deps);
/******/ 			var fn;
/******/ 			var getResult = () => (currentDeps.map((d) => {
/******/ 				if(d[webpackError]) throw d[webpackError];
/******/ 				return d[webpackExports];
/******/ 			}))
/******/ 			var promise = new Promise((resolve) => {
/******/ 				fn = () => (resolve(getResult));
/******/ 				fn.r = 0;
/******/ 				var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 				currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 			});
/******/ 			return fn.r ? promise : getResult();
/******/ 		}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 		queue && queue.d < 0 && (queue.d = 0);
/******/ 	};
/******/ })();
/******/ 
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
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module used 'module' so it can't be inlined
/******/ __webpack_require__("./src/pages/R1-01/CM/CM1/index.ts");
/******/ __webpack_require__("./src/pages/R1-01/CM/CM1/index.css");
/******/ var __webpack_exports__ = __webpack_require__("./src/pages/R1-01/CM/CM1/index.md");
/******/ var __webpack_exports__default = __webpack_exports__["default"];
/******/ export { __webpack_exports__default as default };
/******/ 

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3RCQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLElBQUk7VUFDSjtVQUNBO1VBQ0EsSUFBSTtVQUNKO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLENBQUM7VUFDRDtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsRUFBRTtVQUNGO1VBQ0Esc0dBQXNHO1VBQ3RHO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsR0FBRztVQUNIO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxHQUFHO1VBQ0g7VUFDQSxFQUFFO1VBQ0Y7VUFDQTs7Ozs7VUNoRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQSx5Q0FBeUMsd0NBQXdDO1VBQ2pGO1VBQ0E7VUFDQTs7Ozs7VUNQQTs7Ozs7VUNBQTtVQUNBO1VBQ0E7VUFDQSx1REFBdUQsaUJBQWlCO1VBQ3hFO1VBQ0EsZ0RBQWdELGFBQWE7VUFDN0Q7Ozs7O1VDTkE7Ozs7O1NFQUE7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00xL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTEvaW5kZXgubWQiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvaW5kZXguY3NzIiwid2VicGFjazovL0NvdXJzLy4vbGlicy9MSVNTL2luZGV4LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMS9pbmRleC50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9mb3JtYXQudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvZm9ybXVsYV9lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvZm9ybXVsYV9wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvcGxhZ2VfZWRpdG9yLnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL3BsYWdlX3NlbGVjdG9yLnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL3NoZWV0LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jb250ZW50LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9tZW51LnRzIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9hc3luYyBtb2R1bGUiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInBhZ2VzL1IxLTAxL0NNL0NNMS9pbmRleC5odG1sXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI6aG9zdCB0YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcbiAgICAmID4gdGJvZHkge1xcbiAgICAgICAgb3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICB9XFxuXFxuICAgICYgPiB0Ym9keSA+IHRyOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgXFxuICAgICAgICAmID4gdGgge1xcbiAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbjpob3N0IDppcyh0cix0aCx0ZCkge1xcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjMGMwYzA7XFxuIH1cXG5cXG46aG9zdCB0ciB7XFxuICAgIGhlaWdodDogMC40NWNtO1xcbiAgICBsaW5lLWhlaWdodDogMC40NWNtO1xcbn1cXG5cXG5cXG46aG9zdCA6aXModGQsIHRoKTpub3QoW2NvbnRlbnRlZGl0YWJsZV0pIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi8qXFxuOmhvc3QgdGRbY29udGVudGVkaXRhYmxlXSB7XFxuICAgIHVzZXItc2VsZWN0OiB0ZXh0O1xcbn0qL1xcblxcbjpob3N0IDppcyh0ZCwgdGgpIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogMi4yNmNtO1xcbiAgICBoZWlnaHQ6IDAuNDVjbTtcXG5cXG4gICAgZm9udC1zaXplOiAxMHB0O1xcblxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ0xpYmVyYXRpb24gU2Fucyc7XFxufVxcblxcbjpob3N0IHRyID4gdGg6Zmlyc3QtY2hpbGQge1xcbiAgICB3aWR0aDogY2FsYyggMi4yNmNtIC8gMi41KSA7XFxufVxcblxcbjpob3N0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbjpob3N0IGRpdi50b29sYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG5cXG4gICAgJiA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICAgICAgZmxleDogMSAxIDA7XFxuICAgIH1cXG4gICAgJiA+ICo6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgd2lkdGg6IGNhbGMoIDEuNSAqIDIuMjZjbSApO1xcbiAgICB9XFxufVxcblxcbjpob3N0IHRoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOGE4YThhO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcblxcbiAgICAmLmhpZ2hsaWdodCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk4ZWU3O1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxufVxcblxcbjpob3N0KC5jZWxsX2VkaXQpIC5jdXJzb3Ige1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG46aG9zdCgucmVjb3B5KSB7XFxuICAgIGN1cnNvcjogY2VsbDtcXG59XFxuXFxuOmhvc3Qge1xcblxcbiAgICAucmVjb3B5IHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgY3Vyc29yOiBjZWxsO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM5OGVlNztcXG5cXG4gICAgfVxcblxcbiAgICAuY3Vyc29yIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMzOThlZTc7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG46aG9zdCB0ZCB7XFxuXFxuICAgIC0tZm9udF9zaXplOiAxMHB0O1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRfc2l6ZSk7XFxuICAgIGxpbmUtaGVpZ2h0OiBjYWxjKCB2YXIoLS1mb250X3NpemUpICogMS4yICk7XFxuXFxuICAgIC0taW5kZW50OiAwO1xcblxcbiAgICAtLWJvcmRlcl9jb2xvcjogYmxhY2s7XFxuICAgIC0tYmFja2dyb3VuZF9jb2xvcjogd2hpdGU7XFxuICAgIC0tZm9yZWdyb3VuZF9jb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmRfY29sb3IpO1xcbiAgICBjb2xvciAgICAgICAgICAgOiB2YXIoLS1mb3JlZ3JvdW5kX2NvbG9yKTtcXG5cXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcXG5cXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG5cXG4gICAgJjppcyhbZGF0YS10eXBlPVxcXCJudW1iZXJcXFwiXSxbZGF0YS10eXBlPVxcXCJkYXRlXFxcIl0sIFtkYXRhLXR5cGU9XFxcImJvb2xlYW5cXFwiXSkge1xcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIH1cXG5cXG4gICAgJltjb250ZW50ZWRpdGFibGVdIHtcXG4gICAgICAgIG91dGxpbmU6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgfVxcblxcbiAgICAmLmhpZGRlbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgICYuYWp1c3RlciB7XFxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgICB9XFxuXFxuICAgICYuaGlnaGxpZ2h0IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjZGUzZjk7XFxuICAgIH1cXG5cXG4gICAgLyoqIHN0eWxlICoqL1xcbiAgICAmLml0YWxpYyB7XFxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIH1cXG4gICAgJi5ib2xkIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB9XFxuICAgICYudW5kZXJsaW5lIHtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB9XFxuICAgICYuYWxpZ25fbGVmdCB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoIHZhcigtLWluZGVudCkgKiAxMHB4KTtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIH1cXG4gICAgJi5hbGlnbl9jZW50ZXIge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgICYuYWxpZ25fcmlnaHQge1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyggdmFyKC0taW5kZW50KSAqIDEwcHgpO1xcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIH1cXG4gICAgJi52YWxpZ25fdG9wIHtcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIH1cXG4gICAgJi52YWxpZ25fbWlkZGxlIHtcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIH1cXG4gICAgJi52YWxpZ25fYm90dG9tIHtcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICAgIH1cXG4gICAgLyogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTI0MTc1Ny9hcHBseWluZy1ib3JkZXJzLXRvLWEtc2luZ2xlLXRhYmxlLWNlbGwtd2hlbi11c2luZy1ib3JkZXItY29sbGFwc2UgKi9cXG4gICAgJi5ib3JkZXJfdG9wIHtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBkb3VibGUgdmFyKC0tYm9yZGVyX2NvbG9yKTtcXG4gICAgfVxcbiAgICAmLmJvcmRlcl9ib3R0b20ge1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdWJsZSB2YXIoLS1ib3JkZXJfY29sb3IpO1xcbiAgICB9XFxuICAgICYuYm9yZGVyX2xlZnQge1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBkb3VibGUgdmFyKC0tYm9yZGVyX2NvbG9yKTtcXG4gICAgfVxcbiAgICAmLmJvcmRlcl9yaWdodCB7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBkb3VibGUgdmFyKC0tYm9yZGVyX2NvbG9yKTtcXG4gICAgfVxcbn1cXG5cXG46aG9zdCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuOmhvc3QgLnJhbmdlX2hpZ2hsaWdodCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcblxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWhpZ2hsaWdodF9jb2xvcik7XFxufVxcblxcbjpob3N0IC5mb3JtdWxhX2hpZ2hsaWdodCB7XFxuICAgIGNvbG9yOiB2YXIoLS1oaWdobGlnaHRfY29sb3IpO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzAge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogI2ZhMGMwYztcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF8xIHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICNmYTBjZmE7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfMiB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjMGM4NDBjO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzMge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzAxMDE4MDtcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF80IHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICM4NzE3MTc7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfNSB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjODcxNzg3O1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzYge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzg0ODQwYztcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF83IHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICMwYzBjZmE7XFxufVxcblxcblxcbi5jb3B5X2hpZ2hsaWdodCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogVG9tb3Jyb3cgVGhlbWUgKi9cXG4vKiBodHRwOi8vam1ibG9nLmdpdGh1Yi5jb20vY29sb3ItdGhlbWVzLWZvci1nb29nbGUtY29kZS1oaWdobGlnaHRqcyAqL1xcbi8qIE9yaWdpbmFsIHRoZW1lIC0gaHR0cHM6Ly9naXRodWIuY29tL2Nocmlza2VtcHNvbi90b21vcnJvdy10aGVtZSAqL1xcblxcbi8qIFRvbW9ycm93IENvbW1lbnQgKi9cXG4uaGxqcy1jb21tZW50LFxcbi5obGpzLXF1b3RlIHtcXG5cXHRjb2xvcjogIzhlOTA4YztcXG59XFxuXFxuLyogVG9tb3Jyb3cgUmVkICovXFxuLmhsanMtdmFyaWFibGUsXFxuLmhsanMtdGVtcGxhdGUtdmFyaWFibGUsXFxuLmhsanMtdGFnLFxcbi5obGpzLW5hbWUsXFxuLmhsanMtc2VsZWN0b3ItaWQsXFxuLmhsanMtc2VsZWN0b3ItY2xhc3MsXFxuLmhsanMtcmVnZXhwLFxcbi5obGpzLWRlbGV0aW9uIHtcXG5cXHRjb2xvcjogI2M4MjgyOTtcXG59XFxuXFxuLyogVG9tb3Jyb3cgT3JhbmdlICovXFxuLmhsanMtbnVtYmVyLFxcbi5obGpzLWJ1aWx0X2luLFxcbi5obGpzLWJ1aWx0aW4tbmFtZSxcXG4uaGxqcy1saXRlcmFsLFxcbi5obGpzLXR5cGUsXFxuLmhsanMtcGFyYW1zLFxcbi5obGpzLW1ldGEsXFxuLmhsanMtbGluayB7XFxuXFx0Y29sb3I6ICNmNTg3MWY7XFxufVxcblxcbi8qIFRvbW9ycm93IFllbGxvdyAqL1xcbi5obGpzLWF0dHJpYnV0ZSB7XFxuXFx0Y29sb3I6ICNlYWI3MDA7XFxufVxcblxcbi8qIFRvbW9ycm93IEdyZWVuICovXFxuLmhsanMtc3RyaW5nLFxcbi5obGpzLXN5bWJvbCxcXG4uaGxqcy1idWxsZXQsXFxuLmhsanMtYWRkaXRpb24ge1xcblxcdGNvbG9yOiAjNzE4YzAwO1xcbn1cXG5cXG4vKiBUb21vcnJvdyBCbHVlICovXFxuLmhsanMtdGl0bGUsXFxuLmhsanMtc2VjdGlvbiB7XFxuXFx0Y29sb3I6ICM0MjcxYWU7XFxufVxcblxcbi8qIFRvbW9ycm93IFB1cnBsZSAqL1xcbi5obGpzLWtleXdvcmQsXFxuLmhsanMtc2VsZWN0b3ItdGFnIHtcXG5cXHRjb2xvcjogIzg5NTlhODtcXG59XFxuXFxuLmhsanMge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdG92ZXJmbG93LXg6IGF1dG87XFxuXFx0Y29sb3I6ICM0ZDRkNGM7XFxuXFx0cGFkZGluZzogMC41ZW07XFxufVxcblxcbi5obGpzLWVtcGhhc2lzIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5obGpzLXN0cm9uZyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiOyIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgZXhwb3J0ZWQgdHlwZXMgPT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgQ1NTX1Jlc291cmNlID0gc3RyaW5nfFJlc3BvbnNlfEhUTUxTdHlsZUVsZW1lbnR8Q1NTU3R5bGVTaGVldDtcbmV4cG9ydCB0eXBlIENTU19Tb3VyY2UgICA9IENTU19SZXNvdXJjZSB8IFByb21pc2U8Q1NTX1Jlc291cmNlPjtcblxuZXhwb3J0IHR5cGUgSFRNTF9SZXNvdXJjZSA9IHN0cmluZ3xSZXNwb25zZXxIVE1MVGVtcGxhdGVFbGVtZW50O1xuZXhwb3J0IHR5cGUgSFRNTF9Tb3VyY2UgICA9IEhUTUxfUmVzb3VyY2UgfCBQcm9taXNlPEhUTUxfUmVzb3VyY2U+O1xuXG5leHBvcnQgdHlwZSBMSVNTT3B0aW9uczxFeHRlbmRzICAgIGV4dGVuZHMgQ2xhc3MsXG5cdFx0XHRcdFx0XHRIb3N0ICAgICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0XHRBdHRycyAgICAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdFx0UGFyYW1ldGVycyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+ID0ge1xuXG5cdGV4dGVuZHM/OiBDb25zdHJ1Y3RvcjxFeHRlbmRzPixcblx0aG9zdCAgID86IENvbnN0cnVjdG9yPEhvc3Q+LFxuXG5cdGRlcGVuZGFuY2llcz86IHJlYWRvbmx5IFByb21pc2U8YW55PltdLFxuXHRhdHRyaWJ1dGVzICA/OiByZWFkb25seSBBdHRyc1tdLFxuXHRwYXJhbXMgICAgICA/OiBSZWFkb25seTxQYXJhbWV0ZXJzPixcblxuXHRjb250ZW50PzogSFRNTF9Tb3VyY2UsXG5cdGNzcyAgICA/OiAgQ1NTX1NvdXJjZSB8IHJlYWRvbmx5IENTU19Tb3VyY2VbXSxcblx0c2hhZG93ID86ICBTaGFkb3dDZmcsXG59O1xuXG5leHBvcnQgZW51bSBTaGFkb3dDZmcge1xuXHROT05FID0gJ25vbmUnLFxuXHRPUEVOID0gJ29wZW4nLCBcblx0Q0xPU0U9ICdjbG9zZWQnXG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIENsYXNzID09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmxldCBfX2NzdHJfaG9zdCAgOiBhbnkgPSBudWxsO1xuXG50eXBlIENvbnN0cnVjdG9yPFQ+ID0gbmV3ICgpID0+IFQ7XG5pbnRlcmZhY2UgQ2xhc3Mge31cblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvYXR0YWNoU2hhZG93XG5jb25zdCBDQU5fSEFWRV9TSEFET1cgPSBbXG5cdG51bGwsICdhcnRpY2xlJywgJ2FzaWRlJywgJ2Jsb2NrcXVvdGUnLCAnYm9keScsICdkaXYnLFxuXHQnZm9vdGVyJywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2hlYWRlcicsICdtYWluJyxcblx0J25hdicsICdwJywgJ3NlY3Rpb24nLCAnc3Bhbidcblx0XG5dO1xuZnVuY3Rpb24gX2Nhbkhhc1NoYWRvdyh0YWc6IHR5cGVvZiBIVE1MRWxlbWVudCkge1xuXHRyZXR1cm4gQ0FOX0hBVkVfU0hBRE9XLmluY2x1ZGVzKCBfZWxlbWVudDJ0YWduYW1lKHRhZykgKTtcbn1cblxudHlwZSBSZXNvdXJjZSA9IFVSTHxSZXNwb25zZTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMSVNTPEV4dGVuZHMgICAgZXh0ZW5kcyBDbGFzcyAgICAgICAgICAgICAgPSBDbGFzcyxcblx0XHRcdFx0XHRcdFx0IEhvc3QgICAgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCAgICAgICAgPSBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHRcdFx0IEF0dHJzICAgICAgZXh0ZW5kcyBzdHJpbmcgICAgICAgICAgICAgPSBuZXZlcixcblx0XHRcdFx0XHRcdFx0IFBhcmFtZXRlcnMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4gPSB7fT4oe1xuXHRcdFx0XHRcdFx0XHRcdGV4dGVuZHMgICAgIDogcF9leHRlbmRzLFxuXHRcdFx0XHRcdFx0XHRcdGhvc3QgICAgICAgIDogcF9ob3N0LFxuXHRcdFx0XHRcdFx0XHRcdGRlcGVuZGFuY2llczogcF9kZXBzLFxuXHRcdFx0XHRcdFx0XHQgICAgYXR0cmlidXRlcyAgOiBwX2F0dHJzLFxuXHRcdFx0XHRcdFx0XHQgICAgcGFyYW1zLFxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQsXG5cdFx0XHRcdFx0XHRcdFx0Y3NzLFxuXHRcdFx0XHRcdFx0XHRcdHNoYWRvdyAgICAgIDogcF9zaGFkb3csXG5cdFx0XHRcdFx0XHRcdH06IExJU1NPcHRpb25zPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbWV0ZXJzPiA9IHt9KSB7XG5cblx0Ly9UT0RPIG1lcmdlIHByb3AgaWYgZXh0ZW5kcyBMSVNTLi4uXG5cblx0Y29uc3QgaG9zdCAgICAgICAgPSBwX2hvc3QgICAgPz8gSFRNTEVsZW1lbnQgYXMgQ29uc3RydWN0b3I8SG9zdD47XG5cdGNvbnN0IF9leHRlbmRzICAgID0gcF9leHRlbmRzID8/IE9iamVjdCAgICAgIGFzIHVua25vd24gYXMgQ29uc3RydWN0b3I8RXh0ZW5kcz47XG5cdGNvbnN0IGF0dHJpYnV0ZXMgID0gcF9hdHRycyAgID8/IFtdO1xuXHRjb25zdCBkZXBlbmRhbmNpZXM9IHBfZGVwcyAgICA/IFsuLi5wX2RlcHNdIDogW107XG5cdGNvbnN0IGNhbkhhc1NoYWRvdz0gX2Nhbkhhc1NoYWRvdyhob3N0KTtcblx0Y29uc3Qgc2hhZG93ICAgICAgPSBwX3NoYWRvdyAgPz8gKGNhbkhhc1NoYWRvdyA/IFNoYWRvd0NmZy5DTE9TRSA6IFNoYWRvd0NmZy5OT05FKTtcblxuXHRpZiggISBjYW5IYXNTaGFkb3cgJiYgc2hhZG93ICE9PSBTaGFkb3dDZmcuTk9ORSlcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEhvc3QgZWxlbWVudCAke19lbGVtZW50MnRhZ25hbWUoaG9zdCl9IGRvZXMgbm90IHN1cHBvcnQgU2hhZG93Um9vdGApO1xuXG5cdC8vIENPTlRFTlQgcHJvY2Vzc2luZ1xuXHRpZiggY29udGVudCAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0ZGVwZW5kYW5jaWVzLnB1c2goICggYXN5bmMgKCkgPT4ge1xuXG5cdFx0XHRjb250ZW50ID0gYXdhaXQgY29udGVudDtcblxuXHRcdFx0aWYoY29udGVudCBpbnN0YW5jZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQpXG5cdFx0XHRjb250ZW50ID0gY29udGVudC5pbm5lckhUTUw7XG5cblx0XHRcdGlmKCB0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikge1xuXG5cdFx0XHRcdGNvbnRlbnQgPSBjb250ZW50LnRyaW0oKTsgLy8gTmV2ZXIgcmV0dXJuIGEgdGV4dCBub2RlIG9mIHdoaXRlc3BhY2UgYXMgdGhlIHJlc3VsdFxuXHRcdFx0XHRpZihjb250ZW50ID09PSAnJylcblx0XHRcdFx0XHRjb250ZW50ID0gdW5kZWZpbmVkO1xuXG5cdFx0XHR9XG5cdFx0XHRpZiggY29udGVudCBpbnN0YW5jZW9mIFJlc3BvbnNlIClcblx0XHRcdFx0Y29udGVudCA9IGF3YWl0IGNvbnRlbnQudGV4dCgpO1xuXG5cdFx0XHRyZXR1cm4gTElTU0Jhc2UuUGFyYW1ldGVycy5jb250ZW50ID0gY29udGVudDtcblx0XHR9KSgpICk7XG5cdH1cblxuXHQvLyBDU1MgcHJvY2Vzc2luZ1xuXHRsZXQgc3R5bGVzaGVldHM6IHJlYWRvbmx5IENTU1N0eWxlU2hlZXRbXSA9IFtdO1xuXHRpZiggY3NzICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRpZiggISBBcnJheS5pc0FycmF5KGNzcykgKVxuXHRcdFx0Y3NzID0gW2NzcyBhcyBDU1NfU291cmNlXTtcblxuXHRcdHN0eWxlc2hlZXRzID0gbmV3IEFycmF5PENTU1N0eWxlU2hlZXQ+KGNzcy5sZW5ndGgpO1xuXG5cdFx0Y29uc3QgZmV0Y2hfY3NzID0gKGFzeW5jIChjc3M6IENTU19Tb3VyY2UpID0+IHtcblx0XHRcdGNzcyA9IGF3YWl0IGNzcztcblx0XHRcdGlmKGNzcyBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQpXG5cdFx0XHRcdHJldHVybiBjc3M7XG5cdFx0XHRpZiggY3NzIGluc3RhbmNlb2YgSFRNTFN0eWxlRWxlbWVudClcblx0XHRcdFx0cmV0dXJuIGNzcy5zaGVldCE7XG5cblx0XHRcdGxldCBzdHlsZSA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG5cdFx0XHRpZiggdHlwZW9mIGNzcyA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdFx0c3R5bGUucmVwbGFjZShjc3MpO1xuXHRcdFx0XHRyZXR1cm4gc3R5bGU7XG5cdFx0XHR9XG5cblx0XHRcdC8vaWYoIGNzcyBpbnN0YW5jZW9mIFJlc3BvbnNlIClcblx0XHRcdHN0eWxlLnJlcGxhY2UoYXdhaXQgY3NzLnRleHQoKSk7XG5cdFx0XHRyZXR1cm4gc3R5bGU7XG5cdFx0fSk7XG5cblx0XHRkZXBlbmRhbmNpZXMucHVzaCggLi4uY3NzLm1hcCggYXN5bmMgKGNzcywgaWR4KSA9PiAgKHN0eWxlc2hlZXRzIGFzIGFueSlbaWR4XSA9IGF3YWl0IGZldGNoX2Nzcyhjc3MpICkgKTtcblx0fVxuXG5cdHR5cGUgTEhvc3QgPSBMSVNTSG9zdDxMSVNTQmFzZT47XG5cblx0Ly8gQHRzLWlnbm9yZVxuXHRjbGFzcyBMSVNTQmFzZSBleHRlbmRzIF9leHRlbmRzIHtcblxuXHRcdHJlYWRvbmx5ICNob3N0OiBhbnk7IC8vIHByZXZlbnRzIGlzc3VlICMxLi4uXG5cblx0XHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdFx0c3VwZXIoKTtcblxuXHRcdFx0Ly8gaDRjaywgb2theSBiZWNhdXNlIEpTIGlzIG1vbm90aHJlYWRlZC5cblx0XHRcdGlmKCBfX2NzdHJfaG9zdCA9PT0gbnVsbCApXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBkbyBub3QgZGlyZWN0bHkgY2FsbCB0aGlzIGNvbnN0cnVjdG9yXCIpO1xuXHRcdFx0dGhpcy4jaG9zdCA9IF9fY3N0cl9ob3N0O1xuXHRcdFx0X19jc3RyX2hvc3QgPSBudWxsO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBnZXQgaG9zdCgpOiBIb3N0IHtcblx0XHRcdHJldHVybiB0aGlzLiNob3N0O1xuXHRcdH1cblx0XHRwcm90ZWN0ZWQgZ2V0IGF0dHJzKCkge1xuXHRcdFx0cmV0dXJuICh0aGlzLiNob3N0IGFzIExIb3N0KS5hdHRycztcblx0XHR9XG5cdFx0cHJvdGVjdGVkIHNldEF0dHJEZWZhdWx0KCBhdHRyOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuI2hvc3QgYXMgTEhvc3QpLnNldEF0dHJEZWZhdWx0KGF0dHIsIHZhbHVlKTtcblxuXHRcdH1cblx0XHRwcm90ZWN0ZWQgZ2V0IHBhcmFtcygpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkucGFyYW1zO1xuXHRcdH1cblx0XHRwcm90ZWN0ZWQgZ2V0IGNvbnRlbnQoKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuI2hvc3QgYXMgTEhvc3QpLmNvbnRlbnQhO1xuXHRcdH1cblxuXHRcdHN0YXRpYyByZWFkb25seSBQYXJhbWV0ZXJzID0ge1xuXHRcdFx0aG9zdCxcblx0XHRcdGRlcGVuZGFuY2llcyxcblx0XHRcdGF0dHJpYnV0ZXMsXG5cdFx0XHRwYXJhbXMsXG5cdFx0XHRjb250ZW50LFxuXHRcdFx0c3R5bGVzaGVldHMsXG5cdFx0XHRzaGFkb3csXG5cdFx0fTtcblxuXHRcdHByb3RlY3RlZCBvbkF0dHJDaGFuZ2VkKF9uYW1lOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdFx0X29sZFZhbHVlOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdFx0X25ld1ZhbHVlOiBzdHJpbmcpOiB2b2lkfGZhbHNlIHt9XG5cblx0XHRwcm90ZWN0ZWQgZ2V0IGlzSW5ET00oKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuI2hvc3QgYXMgTEhvc3QpLmlzSW5ET007XG5cdFx0fVxuXHRcdHByb3RlY3RlZCBvbkRPTUNvbm5lY3RlZCgpIHt9XG5cdFx0cHJvdGVjdGVkIG9uRE9NRGlzY29ubmVjdGVkKCkge31cblx0fVxuXG5cdHJldHVybiBMSVNTQmFzZTtcbn1cblxuLy9UT0RPOiBvdGhlciBvcHRpb25zLi4uXG5mdW5jdGlvbiBleHRlbmRzTElTUzxFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0QXR0cnMxICAgZXh0ZW5kcyBzdHJpbmcsXG5cdEF0dHJzMiAgIGV4dGVuZHMgc3RyaW5nLFxuXHRQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+LFxuXHRUIGV4dGVuZHMgTElTU1JldHVyblR5cGU8RXh0ZW5kcywgSG9zdCwgQXR0cnMxLCBQYXJhbXM+PihMaXNzOiBULCBwYXJhbWV0ZXJzOiB7YXR0cmlidXRlczogcmVhZG9ubHkgQXR0cnMyW119KSB7XG5cblx0Ly8gVE9ETzogb3RoZXIgb3B0aW9ucy4uLlxuXHRjb25zdCBhdHRycyA9IFsuLi5MaXNzLlBhcmFtZXRlcnMuYXR0cmlidXRlcywgLi4ucGFyYW1ldGVycy5hdHRyaWJ1dGVzIV07XG5cdGNvbnN0IHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIExpc3MuUGFyYW1ldGVycywge2F0dHJpYnV0ZXM6IGF0dHJzfSk7XG5cblx0Ly8gQHRzLWlnbm9yZSA6IGJlY2F1c2UgVFMgc3R1cGlkXG5cdGNsYXNzIEV4dGVuZGVkTElTUyBleHRlbmRzIExpc3Mge1xuXHRcdGNvbnN0cnVjdG9yKC4uLnQ6IGFueVtdKSB7XG5cdFx0XHQvLyBAdHMtaWdub3JlIDogYmVjYXVzZSBUUyBzdHVwaWRcblx0XHRcdHN1cGVyKC4uLnQpO1xuXHRcdH1cblxuXHRcdHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYXR0cnMoKSB7XG5cdFx0XHRyZXR1cm4gc3VwZXIuYXR0cnMgYXMgUmVjb3JkPEF0dHJzMnxBdHRyczEsIHN0cmluZ3xudWxsPjtcblx0XHR9XG5cblx0XHRzdGF0aWMgb3ZlcnJpZGUgUGFyYW1ldGVycyA9IHBhcmFtcztcblx0fVxuXG5cdHJldHVybiBFeHRlbmRlZExJU1M7XG59XG5MSVNTLmV4dGVuZHNMSVNTID0gZXh0ZW5kc0xJU1M7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgdHlwZSBoZWxwZXJzID09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBidWlsZExJU1NIb3N0UmV0dXJuVHlwZTxUPiAgPSBUIGV4dGVuZHMgTElTU1JldHVyblR5cGU8aW5mZXIgRXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5mZXIgSG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5mZXIgQXR0cnMgICBleHRlbmRzIHN0cmluZyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluZmVyIFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IFJldHVyblR5cGU8dHlwZW9mIGJ1aWxkTElTU0hvc3Q8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcywgVD4+IDogbmV2ZXI7XG5cbmV4cG9ydCB0eXBlIExJU1NSZXR1cm5UeXBlPFxuXHRFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0QXR0cnMgICBleHRlbmRzIHN0cmluZyxcblx0UGFyYW1zICBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pj4gPSBSZXR1cm5UeXBlPHR5cGVvZiBMSVNTPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXM+PjtcbmV4cG9ydCB0eXBlIExJU1NCYXNlPEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0XHRcdFx0XHQgSG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdCBBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdCBQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+PiA9IEluc3RhbmNlVHlwZTxMSVNTUmV0dXJuVHlwZTxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zPj47XG5leHBvcnQgdHlwZSBMSVNTSG9zdDxMSVNTIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55PiA+ID0gSW5zdGFuY2VUeXBlPGJ1aWxkTElTU0hvc3RSZXR1cm5UeXBlPENvbnN0cnVjdG9yPExJU1M+ICYge1BhcmFtZXRlcnM6IGFueX0+PjtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTU0hvc3QgY2xhc3MgPT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5sZXQgaWQgPSAwO1xuXG5mdW5jdGlvbiBidWlsZExJU1NIb3N0PEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0XHRcdFx0XHQgICBIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0ICAgQXR0cnMgICBleHRlbmRzIHN0cmluZyxcblx0XHRcdFx0XHQgICBQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+LFxuXHRcdFx0XHRcdCAgIFQgZXh0ZW5kcyBMSVNTUmV0dXJuVHlwZTxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zPj4oTGlzczogVCwgX3BhcmFtczogUGFydGlhbDxQYXJhbXM+ID0ge30pIHtcblx0Y29uc3Qge1xuXHRcdGhvc3QsXG5cdFx0YXR0cmlidXRlcyxcblx0XHRjb250ZW50LFxuXHRcdHN0eWxlc2hlZXRzLFxuXHRcdHNoYWRvdyxcblx0fSA9IExpc3MuUGFyYW1ldGVycztcblxuXHRjb25zdCBhbHJlYWR5RGVjbGFyZWRDU1MgPSBuZXcgU2V0KCk7XG5cblx0Y29uc3QgR0VUID0gU3ltYm9sKCdnZXQnKTtcblx0Y29uc3QgU0VUID0gU3ltYm9sKCdzZXQnKTtcblxuXHRjb25zdCBwcm9wZXJ0aWVzID0gT2JqZWN0LmZyb21FbnRyaWVzKCBhdHRyaWJ1dGVzLm1hcChuID0+IFtuLCB7XG5cblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24oKTogc3RyaW5nfG51bGwgICAgICB7IHJldHVybiAodGhpcyBhcyB1bmtub3duIGFzIEF0dHJpYnV0ZXMpW0dFVF0obik7IH0sXG5cdFx0c2V0OiBmdW5jdGlvbih2YWx1ZTogc3RyaW5nfG51bGwpIHsgcmV0dXJuICh0aGlzIGFzIHVua25vd24gYXMgQXR0cmlidXRlcylbU0VUXShuLCB2YWx1ZSk7IH1cblx0fV0pICk7XG5cblx0Y2xhc3MgQXR0cmlidXRlcyB7XG4gICAgICAgIFt4OiBzdHJpbmddOiBzdHJpbmd8bnVsbDtcblxuICAgICAgICAjZGF0YSAgICAgOiBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPjtcbiAgICAgICAgI2RlZmF1bHRzIDogUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD47XG4gICAgICAgICNzZXR0ZXIgICA6IChuYW1lOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKSA9PiB2b2lkO1xuXG4gICAgICAgIFtHRVRdKG5hbWU6IEF0dHJzKSB7XG4gICAgICAgIFx0cmV0dXJuIHRoaXMuI2RhdGFbbmFtZV0gPz8gdGhpcy4jZGVmYXVsdHNbbmFtZV0gPz8gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgW1NFVF0obmFtZTogQXR0cnMsIHZhbHVlOiBzdHJpbmd8bnVsbCl7XG4gICAgICAgIFx0cmV0dXJuIHRoaXMuI3NldHRlcihuYW1lLCB2YWx1ZSk7IC8vIHJlcXVpcmVkIHRvIGdldCBhIGNsZWFuIG9iamVjdCB3aGVuIGRvaW5nIHsuLi5hdHRyc31cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGEgICAgOiBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPixcblx0XHRcdFx0XHRkZWZhdWx0czogUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD4sXG4gICAgICAgIFx0XHRcdHNldHRlciAgOiAobmFtZTogQXR0cnMsIHZhbHVlOiBzdHJpbmd8bnVsbCkgPT4gdm9pZCkge1xuXG4gICAgICAgIFx0dGhpcy4jZGF0YSAgICAgPSBkYXRhO1xuXHRcdFx0dGhpcy4jZGVmYXVsdHMgPSBkZWZhdWx0cztcbiAgICAgICAgXHR0aGlzLiNzZXR0ZXIgPSBzZXR0ZXI7XG5cbiAgICAgICAgXHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCBwcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuXHR9XG5cblx0Ly8gQHRzLWlnbm9yZSA6IGJlY2F1c2UgVFMgaXMgc3R1cGlkLlxuXHRjbGFzcyBMSVNTSG9zdEJhc2UgZXh0ZW5kcyBob3N0IHtcblxuXHRcdHJlYWRvbmx5ICNwYXJhbXM6IFBhcmFtcztcblxuXHRcdHJlYWRvbmx5ICNpZCA9ICsraWQ7IC8vIGZvciBkZWJ1Z1xuXG5cdFx0Y29uc3RydWN0b3IocGFyYW1zOiBQYXJ0aWFsPFBhcmFtcz4gPSB7fSkge1xuXHRcdFx0c3VwZXIoKTtcblx0XHRcdHRoaXMuI3BhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIExpc3MuUGFyYW1ldGVycy5wYXJhbXMsIF9wYXJhbXMsIHBhcmFtcyk7XG5cblx0XHRcdHRoaXMuI3dhaXRJbml0ID0gbmV3IFByb21pc2UoIChyZXNvbHZlKSA9PiB7XG5cdFx0XHRcdGlmKHRoaXMuaXNJbml0KVxuXHRcdFx0XHRcdHJldHVybiByZXNvbHZlKHRoaXMuI0FQSSEpO1xuXHRcdFx0XHR0aGlzLiNyZXNvbHZlID0gcmVzb2x2ZTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKioqIHB1YmxpYyBBUEkgKioqKioqKioqKioqKi9cblxuXHRcdGdldCBpc0luaXQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4jQVBJICE9PSBudWxsO1xuXHRcdH1cblx0XHRpbml0aWFsaXplKHBhcmFtczogUGFydGlhbDxQYXJhbXM+ID0ge30pIHtcblxuXHRcdFx0aWYoIHRoaXMuaXNJbml0IClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFbGVtZW50IGFscmVhZHkgaW5pdGlhbGl6ZWQhJyk7XG5cblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcy4jcGFyYW1zLCBwYXJhbXMpO1xuXG5cdFx0XHRjb25zdCBhcGkgPSB0aGlzLmluaXQoKTtcblxuXHRcdFx0aWYoIHRoaXMuI2lzSW5ET00gKVxuXHRcdFx0XHQoYXBpIGFzIGFueSkub25ET01Db25uZWN0ZWQoKTtcblxuXHRcdFx0cmV0dXJuIGFwaTtcblx0XHR9XG5cblx0XHRnZXQgTElTU1N5bmMoKSB7XG5cdFx0XHRpZiggISB0aGlzLmlzSW5pdCApXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQWNjZXNzaW5nIEFQSSBiZWZvcmUgV2ViQ29tcG9uZW50IGluaXRpYWxpemF0aW9uIScpO1xuXHRcdFx0cmV0dXJuIHRoaXMuI0FQSSE7XG5cdFx0fVxuXHRcdGdldCBMSVNTKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuI3dhaXRJbml0O1xuXHRcdH1cblxuXHRcdC8qKiogaW5pdCAqKiovXG5cdFx0I3dhaXRJbml0OiBQcm9taXNlPEluc3RhbmNlVHlwZTxUPj47XG5cdFx0I3Jlc29sdmU6ICgodTogSW5zdGFuY2VUeXBlPFQ+KSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xuXHRcdCNBUEk6IEluc3RhbmNlVHlwZTxUPiB8IG51bGwgPSBudWxsO1xuXG5cdFx0I2lzSW5ET00gPSBmYWxzZTtcblx0XHRnZXQgaXNJbkRPTSgpIHtcblx0XHRcdHJldHVybiB0aGlzLiNpc0luRE9NO1xuXHRcdH1cblxuXHRcdGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuXHRcdFx0dGhpcy4jaXNJbkRPTSA9IGZhbHNlO1xuXHRcdFx0KHRoaXMuI0FQSSEgYXMgYW55KS5vbkRPTURpc2Nvbm5lY3RlZCgpO1xuXHRcdH1cblxuXHRcdGNvbm5lY3RlZENhbGxiYWNrKCkge1xuXG5cdFx0XHR0aGlzLiNpc0luRE9NID0gdHJ1ZTtcblx0XG5cdFx0XHRpZiggISB0aGlzLmlzSW5pdCApIHtcblx0XHRcdFx0dGhpcy5pbml0KCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0KHRoaXMuI0FQSSEgYXMgYW55KS5vbkRPTUNvbm5lY3RlZCgpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgaW5pdCgpIHtcblx0XHRcdFxuXHRcdFx0Y3VzdG9tRWxlbWVudHMudXBncmFkZSh0aGlzKTtcblx0XHRcdFxuXHRcdFx0Ly8gc2hhZG93XG5cdFx0XHR0aGlzLiNjb250ZW50ID0gdGhpcyBhcyB1bmtub3duIGFzIEhvc3Q7XG5cdFx0XHRpZiggc2hhZG93ICE9PSAnbm9uZScpIHtcblx0XHRcdFx0dGhpcy4jY29udGVudCA9IHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiBzaGFkb3d9KTtcblxuXHRcdFx0XHQvL0B0cy1pZ25vcmVcblx0XHRcdFx0dGhpcy4jY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tFdmVudCk7XG5cdFx0XHRcdC8vQHRzLWlnbm9yZVxuXHRcdFx0XHR0aGlzLiNjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgb25DbGlja0V2ZW50KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gYXR0cnNcblx0XHRcdGZvcihsZXQgb2JzIG9mIGF0dHJpYnV0ZXMhKVxuXHRcdFx0XHR0aGlzLiNhdHRyaWJ1dGVzW29ic10gPSB0aGlzLmdldEF0dHJpYnV0ZShvYnMpO1xuXG5cdFx0XHQvLyBjc3Ncblx0XHRcdGlmKCBzaGFkb3cgIT09ICdub25lJylcblx0XHRcdFx0KHRoaXMuI2NvbnRlbnQgYXMgU2hhZG93Um9vdCkuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc2hhcmVkQ1NTKTtcblx0XHRcdGlmKCBzdHlsZXNoZWV0cy5sZW5ndGggKSB7XG5cblx0XHRcdFx0aWYoIHNoYWRvdyAhPT0gJ25vbmUnKVxuXHRcdFx0XHRcdCh0aGlzLiNjb250ZW50IGFzIFNoYWRvd1Jvb3QpLmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKC4uLnN0eWxlc2hlZXRzKTtcblx0XHRcdFx0ZWxzZSB7XG5cblx0XHRcdFx0XHRjb25zdCBjc3NzZWxlY3RvciA9IHRoaXMuQ1NTU2VsZWN0b3I7XG5cblx0XHRcdFx0XHQvLyBpZiBub3QgeWV0IGluc2VydGVkIDpcblx0XHRcdFx0XHRpZiggISBhbHJlYWR5RGVjbGFyZWRDU1MuaGFzKGNzc3NlbGVjdG9yKSApIHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0bGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuXHRcdFx0XHRcdFx0c3R5bGUuc2V0QXR0cmlidXRlKCdmb3InLCBjc3NzZWxlY3Rvcik7XG5cblx0XHRcdFx0XHRcdGxldCBodG1sX3N0eWxlc2hlZXRzID0gXCJcIjtcblxuXHRcdFx0XHRcdFx0Zm9yKGxldCBzdHlsZSBvZiBzdHlsZXNoZWV0cylcblx0XHRcdFx0XHRcdFx0Zm9yKGxldCBydWxlIG9mIHN0eWxlLmNzc1J1bGVzKVxuXHRcdFx0XHRcdFx0XHRcdGh0bWxfc3R5bGVzaGVldHMgKz0gcnVsZS5jc3NUZXh0ICsgJ1xcbic7XG5cblx0XHRcdFx0XHRcdHN0eWxlLmlubmVySFRNTCA9IGh0bWxfc3R5bGVzaGVldHMucmVwbGFjZSgnOmhvc3QnLCBgOmlzKCR7Y3Nzc2VsZWN0b3J9KWApO1xuXG5cdFx0XHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZChzdHlsZSk7XG5cblx0XHRcdFx0XHRcdGFscmVhZHlEZWNsYXJlZENTUy5hZGQoY3Nzc2VsZWN0b3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBjb250ZW50XG5cdFx0XHRpZiggY29udGVudCAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRsZXQgdGVtcGxhdGVfZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cdFx0XHRcdGxldCBzdHIgPSAoY29udGVudCBhcyBzdHJpbmcpLnJlcGxhY2UoL1xcJFxceyguKz8pXFx9L2csIChfLCBtYXRjaCkgPT4gdGhpcy5nZXRBdHRyaWJ1dGUobWF0Y2gpPz8nJylcblx0ICAgIFx0XHR0ZW1wbGF0ZV9lbGVtLmlubmVySFRNTCA9IHN0cjtcblx0ICAgIFx0XHR0aGlzLiNjb250ZW50LmFwcGVuZCguLi50ZW1wbGF0ZV9lbGVtLmNvbnRlbnQuY2hpbGROb2Rlcyk7XG5cdCAgICBcdH1cblxuXHQgICAgXHQvLyBidWlsZFxuXG5cdCAgICBcdC8vIGg0Y2ssIG9rYXkgYmVjYXVzZSBKUyBpcyBtb25vdGhyZWFkZWQuXG5cdFx0XHRfX2NzdHJfaG9zdCAgID0gdGhpcztcblxuXHQgICAgXHRsZXQgb2JqID0gbmV3IExpc3MoKTtcblxuXHQgICAgXHQvKmlmKCBvYmogaW5zdGFuY2VvZiBQcm9taXNlKVxuXHQgICAgXHRcdG9iaiA9IGF3YWl0IG9iajsqL1xuXG5cdFx0XHR0aGlzLiNBUEkgPSBvYmogYXMgSW5zdGFuY2VUeXBlPFQ+O1xuXG5cdFx0XHQvLyBkZWZhdWx0IHNsb3Rcblx0XHRcdGlmKCB0aGlzLmhhc1NoYWRvdyAmJiB0aGlzLiNjb250ZW50LmNoaWxkTm9kZXMubGVuZ3RoID09PSAwIClcblx0XHRcdFx0dGhpcy4jY29udGVudC5hcHBlbmQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Nsb3QnKSApO1xuXG5cdFx0XHRpZiggdGhpcy4jcmVzb2x2ZSAhPT0gbnVsbClcblx0XHRcdFx0dGhpcy4jcmVzb2x2ZSh0aGlzLiNBUEkpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy4jQVBJO1xuXHRcdH1cblxuXHRcdGdldCBwYXJhbXMoKTogUGFyYW1zIHtcblx0XHRcdHJldHVybiB0aGlzLiNwYXJhbXM7XG5cdFx0fVxuXG5cblx0XHQvKioqIGNvbnRlbnQgKioqL1xuXHRcdCNjb250ZW50OiBIb3N0fFNoYWRvd1Jvb3R8bnVsbCA9IG51bGw7XG5cblx0XHRnZXQgY29udGVudCgpIHtcblx0XHRcdHJldHVybiB0aGlzLiNjb250ZW50O1xuXHRcdH1cblxuXHRcdGdldFBhcnQobmFtZTogc3RyaW5nKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5oYXNTaGFkb3dcblx0XHRcdFx0XHQ/IHRoaXMuI2NvbnRlbnQ/LnF1ZXJ5U2VsZWN0b3IoYDo6cGFydCgke25hbWV9KWApXG5cdFx0XHRcdFx0OiB0aGlzLiNjb250ZW50Py5xdWVyeVNlbGVjdG9yKGBbcGFydD1cIiR7bmFtZX1cIl1gKTtcblx0XHR9XG5cdFx0Z2V0UGFydHMobmFtZTogc3RyaW5nKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5oYXNTaGFkb3dcblx0XHRcdFx0XHQ/IHRoaXMuI2NvbnRlbnQ/LnF1ZXJ5U2VsZWN0b3JBbGwoYDo6cGFydCgke25hbWV9KWApXG5cdFx0XHRcdFx0OiB0aGlzLiNjb250ZW50Py5xdWVyeVNlbGVjdG9yQWxsKGBbcGFydD1cIiR7bmFtZX1cIl1gKTtcblx0XHR9XG5cblx0XHRwcm90ZWN0ZWQgZ2V0IGhhc1NoYWRvdygpOiBib29sZWFuIHtcblx0XHRcdHJldHVybiBzaGFkb3cgIT09ICdub25lJztcblx0XHR9XG5cblx0XHQvKioqIENTUyAqKiovXG5cblx0XHRnZXQgQ1NTU2VsZWN0b3IoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5oYXNTaGFkb3dcblx0XHRcdFx0XHQ/IHRoaXMudGFnTmFtZVxuXHRcdFx0XHRcdDogYCR7dGhpcy50YWdOYW1lfVtpcz1cIiR7dGhpcy5nZXRBdHRyaWJ1dGUoXCJpc1wiKX1cIl1gO1xuXHRcdH1cblxuXHRcdC8qKiogYXR0cnMgKioqL1xuXHRcdCNhdHRyc19mbGFnID0gZmFsc2U7XG5cblx0XHQjYXR0cmlidXRlcyAgICAgICAgID0ge30gYXMgUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD47XG5cdFx0I2F0dHJpYnV0ZXNEZWZhdWx0cyA9IHt9IGFzIFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuXHRcdCNhdHRycyA9IG5ldyBBdHRyaWJ1dGVzKFxuXHRcdFx0dGhpcy4jYXR0cmlidXRlcyxcblx0XHRcdHRoaXMuI2F0dHJpYnV0ZXNEZWZhdWx0cyxcblx0XHRcdChuYW1lOiBBdHRycywgdmFsdWU6c3RyaW5nfG51bGwpID0+IHtcblxuXHRcdFx0XHR0aGlzLiNhdHRyaWJ1dGVzW25hbWVdID0gdmFsdWU7XG5cblx0XHRcdFx0dGhpcy4jYXR0cnNfZmxhZyA9IHRydWU7IC8vIGRvIG5vdCB0cmlnZ2VyIG9uQXR0cnNDaGFuZ2VkLlxuXHRcdFx0XHRpZiggdmFsdWUgPT09IG51bGwpXG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHR0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0KSBhcyB1bmtub3duIGFzIFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuXG5cdFx0c2V0QXR0ckRlZmF1bHQobmFtZTogQXR0cnMsIHZhbHVlOiBzdHJpbmd8bnVsbCkge1xuXHRcdFx0aWYoIHZhbHVlID09PSBudWxsKVxuXHRcdFx0XHRkZWxldGUgdGhpcy4jYXR0cmlidXRlc0RlZmF1bHRzW25hbWVdO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHR0aGlzLiNhdHRyaWJ1dGVzRGVmYXVsdHNbbmFtZV0gPSB2YWx1ZTtcblx0XHR9XG5cblx0XHRnZXQgYXR0cnMoKTogUmVhZG9ubHk8UmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD4+IHtcblxuXHRcdFx0cmV0dXJuIHRoaXMuI2F0dHJzO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuXHRcdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lICAgIDogQXR0cnMsXG5cdFx0XHRcdFx0XHRcdFx0IG9sZFZhbHVlOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdFx0IG5ld1ZhbHVlOiBzdHJpbmcpIHtcblxuXHRcdFx0aWYodGhpcy4jYXR0cnNfZmxhZykge1xuXHRcdFx0XHR0aGlzLiNhdHRyc19mbGFnID0gZmFsc2U7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy4jYXR0cmlidXRlc1tuYW1lXSA9IG5ld1ZhbHVlO1xuXHRcdFx0aWYoICEgdGhpcy5pc0luaXQgKVxuXHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdGlmKCAodGhpcy4jQVBJISBhcyBhbnkpLm9uQXR0ckNoYW5nZWQobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0dGhpcy4jYXR0cnNbbmFtZV0gPSBvbGRWYWx1ZTsgLy8gcmV2ZXJ0IHRoZSBjaGFuZ2UuXG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiBMSVNTSG9zdEJhc2U7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgZGVmaW5lID09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgX0RPTUNvbnRlbnRMb2FkZWQgPSBuZXcgUHJvbWlzZTx2b2lkPiggKHJlc29sdmUpID0+IHtcblxuXHRpZihkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImludGVyYWN0aXZlXCIgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKVxuXHRcdHJldHVybiByZXNvbHZlKCk7XG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblx0XHRyZXNvbHZlKCk7XG5cdH0sIHRydWUpO1xufSk7XG5cbkxJU1MuZGVmaW5lID0gYXN5bmMgZnVuY3Rpb248RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdFx0XHQgSG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdFx0ICAgICBBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdFx0ICAgICBQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+LFxuXHRcdFx0XHRcdFx0ICAgXHQgVCBleHRlbmRzIExJU1NSZXR1cm5UeXBlPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXM+Pihcblx0XHRcdFx0XHRcdCAgIFx0dGFnbmFtZTogc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRDb21wb25lbnRDbGFzczogVCxcblx0XHRcdFx0XHRcdFx0e2RlcGVuZGFuY2llcywgcGFyYW1zfToge3BhcmFtcz86IFBhcnRpYWw8UGFyYW1zPiwgZGVwZW5kYW5jaWVzPzogcmVhZG9ubHkgUHJvbWlzZTxzdHJpbmc+W119ID0ge30pIHtcblxuXHRkZXBlbmRhbmNpZXM/Pz1bXTtcblx0cGFyYW1zICAgICAgPz89IHt9O1xuXG5cdGNvbnN0IENsYXNzID0gQ29tcG9uZW50Q2xhc3MuUGFyYW1ldGVycy5ob3N0O1xuXHRsZXQgTElTU0Jhc2U6IGFueSA9IENvbXBvbmVudENsYXNzO1xuXHRsZXQgaHRtbHRhZyA9IF9lbGVtZW50MnRhZ25hbWUoQ2xhc3MpPz91bmRlZmluZWQ7XG5cblx0YXdhaXQgUHJvbWlzZS5hbGwoW19ET01Db250ZW50TG9hZGVkLCAuLi5kZXBlbmRhbmNpZXMsIC4uLkxJU1NCYXNlLlBhcmFtZXRlcnMuZGVwZW5kYW5jaWVzXSk7XG5cblx0Y29uc3QgTElTU2NsYXNzID0gYnVpbGRMSVNTSG9zdDxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zLCBUPihDb21wb25lbnRDbGFzcywgcGFyYW1zKTtcblx0XG5cdGNvbnN0IG9wdHMgPSBodG1sdGFnID09PSB1bmRlZmluZWQgPyB7fVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgOiB7ZXh0ZW5kczogaHRtbHRhZ307XG5cdFxuXHRjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnbmFtZSwgTElTU2NsYXNzLCBvcHRzKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgU2hhZG93Um9vdCB0b29scyA9PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3Qgc2hhcmVkQ1NTID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbmRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHNoYXJlZENTUyk7XG5cbkxJU1MuaW5zZXJ0R2xvYmFsQ1NTUnVsZXMgPSBmdW5jdGlvbihjc3M6IHN0cmluZ3xIVE1MU3R5bGVFbGVtZW50KSB7XG5cblx0bGV0IGNzc19zdHlsZSE6IENTU1N0eWxlU2hlZXQ7XG5cblx0aWYoIGNzcyBpbnN0YW5jZW9mIEhUTUxTdHlsZUVsZW1lbnQgKVxuXHRcdGNzc19zdHlsZSA9IGNzcy5zaGVldCE7XG5cdGlmKCB0eXBlb2YgY3NzID09PSBcInN0cmluZ1wiKSB7XG5cdFx0Y3NzX3N0eWxlID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcblx0XHRjc3Nfc3R5bGUucmVwbGFjZVN5bmMoY3NzKTtcblx0fVxuXG5cdGZvcihsZXQgcnVsZSBvZiBjc3Nfc3R5bGUuY3NzUnVsZXMpXG5cdFx0c2hhcmVkQ1NTLmluc2VydFJ1bGUocnVsZS5jc3NUZXh0KTtcbn1cblxudHlwZSBEZWxlZ2F0ZWRIYW5kbGVyID0gW3N0cmluZywgKGV2OiBNb3VzZUV2ZW50KSA9PiB2b2lkXTtcbmNvbnN0IERFTEVHQVRFRF9FVkVOVFMgPSB7XG5cdFwiY2xpY2tcIjogW10gYXMgRGVsZWdhdGVkSGFuZGxlcltdLFxuXHRcImRibGNsaWNrXCI6IFtdIGFzIERlbGVnYXRlZEhhbmRsZXJbXVxufTtcblxuY29uc3QgQUxSRUFEWV9QUk9DRVNTRUQgPSBTeW1ib2woKTtcblxuZnVuY3Rpb24gb25DbGlja0V2ZW50KGV2OiBNb3VzZUV2ZW50KSB7XG5cblx0aWYoIChldiBhcyBhbnkpW0FMUkVBRFlfUFJPQ0VTU0VEXSA9PT0gdHJ1ZSApXG5cdFx0cmV0dXJuO1xuXHQoZXYgYXMgYW55KVtBTFJFQURZX1BST0NFU1NFRF0gPSB0cnVlO1xuXG5cdGNvbnN0IGhhbmRsZXJzID0gREVMRUdBVEVEX0VWRU5UU1tldi50eXBlIGFzIGtleW9mIHR5cGVvZiBERUxFR0FURURfRVZFTlRTXTtcblxuXHRmb3IobGV0IGVsZW0gb2YgZXYuY29tcG9zZWRQYXRoKCkgKSB7XG5cdFxuXHRcdGlmKCBlbGVtIGluc3RhbmNlb2YgU2hhZG93Um9vdCB8fCBlbGVtID09PSBkb2N1bWVudCB8fCBlbGVtID09PSB3aW5kb3cgKVxuXHRcdFx0Y29udGludWU7XG5cblx0XHR2YXIgdGFyZ2V0ID0gZWxlbSBhcyBFbGVtZW50O1xuXG5cdFx0Zm9yKGxldCBbc2VsZWN0b3IsIGhhbmRsZXJdIG9mIGhhbmRsZXJzKSB7XG5cdFx0XHRpZiggdGFyZ2V0Lm1hdGNoZXMoc2VsZWN0b3IpIClcblx0XHRcdFx0aGFuZGxlcihldik7XG5cdFx0fVxuXHR9XG59XG5cbkxJU1MuaW5zZXJ0R2xvYmFsRGVsZWdhdGVkTGlzdGVuZXIgPSBmdW5jdGlvbihldmVudF9uYW1lOiBrZXlvZiB0eXBlb2YgREVMRUdBVEVEX0VWRU5UUywgc2VsZWN0b3I6IHN0cmluZywgaGFuZGxlcjogKGV2OiBNb3VzZUV2ZW50KSA9PiB2b2lkICkge1xuXHRERUxFR0FURURfRVZFTlRTW2V2ZW50X25hbWVdLnB1c2goW3NlbGVjdG9yLCBoYW5kbGVyXSlcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrRXZlbnQpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBvbkNsaWNrRXZlbnQpO1xuXG5MSVNTLmNsb3Nlc3QgPSBmdW5jdGlvbiBjbG9zZXN0PEUgZXh0ZW5kcyBFbGVtZW50PihzZWxlY3Rvcjogc3RyaW5nLCBlbGVtZW50OiBFbGVtZW50KSB7XG5cblx0d2hpbGUodHJ1ZSkge1xuXHRcdHZhciByZXN1bHQgPSBlbGVtZW50LmNsb3Nlc3Q8RT4oc2VsZWN0b3IpO1xuXG5cdFx0aWYoIHJlc3VsdCAhPT0gbnVsbClcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cblx0XHRjb25zdCByb290ID0gZWxlbWVudC5nZXRSb290Tm9kZSgpO1xuXHRcdGlmKCAhIChcImhvc3RcIiBpbiByb290KSApXG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdGVsZW1lbnQgPSAocm9vdCBhcyBTaGFkb3dSb290KS5ob3N0O1xuXHR9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgaGVscGVycyA9PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBpbmZlclBhcmFtczxUPiA9IFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSwgaW5mZXIgUCBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pj4gPyBQIDogbmV2ZXI7XG5cbnR5cGUgQlVJTERfT1BUSU9OUzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4gPSBQYXJ0aWFsPHtcblx0XHRcdFx0XHQgIFx0cGFyYW1zICAgIDogUGFydGlhbDxpbmZlclBhcmFtczxUPj4sXG5cdFx0XHRcdFx0ICBcdGNvbnRlbnRcdCAgOiBzdHJpbmd8Tm9kZXxyZWFkb25seSBOb2RlW10sXG5cdFx0XHRcdFx0XHRpZCBcdFx0ICA6IHN0cmluZyxcblx0XHRcdFx0XHQgIFx0Y2xhc3Nlc1x0ICA6IHJlYWRvbmx5IHN0cmluZ1tdLFxuXHRcdFx0XHRcdCAgXHRjc3N2YXJzICAgOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+Pixcblx0XHRcdFx0XHQgIFx0YXR0cnMgXHQgIDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgc3RyaW5nfGJvb2xlYW4+Pixcblx0XHRcdFx0XHQgIFx0ZGF0YSBcdCAgOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmd8Ym9vbGVhbj4+LFxuXHRcdFx0XHRcdCAgXHRsaXN0ZW5lcnMgOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCAoZXY6IEV2ZW50KSA9PiB2b2lkPj5cblx0XHRcdFx0XHR9PiAmICh7XG5cdFx0XHRcdFx0XHRpbml0aWFsaXplOiBmYWxzZSxcblx0XHRcdFx0XHRcdHBhcmVudDogRWxlbWVudFxuXHRcdFx0XHRcdH18e1xuXHRcdFx0XHRcdFx0aW5pdGlhbGl6ZT86IHRydWUsXG5cdFx0XHRcdFx0XHRwYXJlbnQ/OiBFbGVtZW50XG5cdFx0XHRcdFx0fSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGJ1aWxkPFQgZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPih0YWduYW1lOiBULCBvcHRpb25zPzogQlVJTERfT1BUSU9OUzxDb21wb25lbnRzW1RdPik6IFByb21pc2U8Q29tcG9uZW50c1tUXT47XG5hc3luYyBmdW5jdGlvbiBidWlsZDxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4odGFnbmFtZTogc3RyaW5nLCBvcHRpb25zPzogQlVJTERfT1BUSU9OUzxUPik6IFByb21pc2U8VD47XG5hc3luYyBmdW5jdGlvbiBidWlsZDxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4odGFnbmFtZTogc3RyaW5nLCB7XG5cdFx0cGFyYW1zICAgID0ge30sXG5cdFx0aW5pdGlhbGl6ZT0gdHJ1ZSxcblx0XHRjb250ZW50ICAgPSBbXSxcblx0XHRwYXJlbnQgICAgPSB1bmRlZmluZWQsXG5cdFx0aWQgXHRcdCAgPSB1bmRlZmluZWQsXG5cdFx0Y2xhc3NlcyAgID0gW10sXG5cdFx0Y3NzdmFycyAgID0ge30sXG5cdFx0YXR0cnMgICAgID0ge30sXG5cdFx0ZGF0YSBcdCAgPSB7fSxcblx0XHRsaXN0ZW5lcnMgPSB7fVxuXHR9OiBCVUlMRF9PUFRJT05TPFQ+ID0ge30pOiBQcm9taXNlPFQ+IHtcblxuXHRpZiggISBpbml0aWFsaXplICYmIHBhcmVudCA9PT0gbnVsbClcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJBIHBhcmVudCBtdXN0IGJlIGdpdmVuIGlmIGluaXRpYWxpemUgaXMgZmFsc2VcIik7XG5cblx0bGV0IEN1c3RvbUNsYXNzID0gYXdhaXQgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQodGFnbmFtZSk7XG5cdGxldCBlbGVtID0gbmV3IEN1c3RvbUNsYXNzKHBhcmFtcykgYXMgTElTU0hvc3Q8VD47XG5cblx0Ly8gRml4IGlzc3VlICMyXG5cdGlmKCBlbGVtLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gdGFnbmFtZSApXG5cdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoXCJpc1wiLCB0YWduYW1lKTtcblxuXHRpZiggaWQgIT09IHVuZGVmaW5lZCApXG5cdFx0ZWxlbS5pZCA9IGlkO1xuXG5cdGlmKCBjbGFzc2VzLmxlbmd0aCA+IDApXG5cdFx0ZWxlbS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBjc3N2YXJzKVxuXHRcdGVsZW0uc3R5bGUuc2V0UHJvcGVydHkoYC0tJHtuYW1lfWAsIGNzc3ZhcnNbbmFtZV0pO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBhdHRycykge1xuXG5cdFx0bGV0IHZhbHVlID0gYXR0cnNbbmFtZV07XG5cdFx0aWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpXG5cdFx0XHRlbGVtLnRvZ2dsZUF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdFx0ZWxzZVxuXHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXHR9XG5cblx0Zm9yKGxldCBuYW1lIGluIGRhdGEpIHtcblxuXHRcdGxldCB2YWx1ZSA9IGRhdGFbbmFtZV07XG5cdFx0aWYoIHZhbHVlID09PSBmYWxzZSlcblx0XHRcdGRlbGV0ZSBlbGVtLmRhdGFzZXRbbmFtZV07XG5cdFx0ZWxzZSBpZih2YWx1ZSA9PT0gdHJ1ZSlcblx0XHRcdGVsZW0uZGF0YXNldFtuYW1lXSA9IFwiXCI7XG5cdFx0ZWxzZVxuXHRcdFx0ZWxlbS5kYXRhc2V0W25hbWVdID0gdmFsdWU7XG5cdH1cblxuXHRpZiggISBBcnJheS5pc0FycmF5KGNvbnRlbnQpIClcblx0XHRjb250ZW50ID0gW2NvbnRlbnQgYXMgYW55XTtcblx0ZWxlbS5yZXBsYWNlQ2hpbGRyZW4oLi4uY29udGVudCk7XG5cblx0Zm9yKGxldCBuYW1lIGluIGxpc3RlbmVycylcblx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgbGlzdGVuZXJzW25hbWVdKTtcblxuXHRpZiggcGFyZW50ICE9PSB1bmRlZmluZWQgKVxuXHRcdHBhcmVudC5hcHBlbmQoZWxlbSk7XG5cblx0aWYoICEgZWxlbS5pc0luaXQgJiYgaW5pdGlhbGl6ZSApXG5cdFx0cmV0dXJuIGF3YWl0IExJU1MuaW5pdGlhbGl6ZShlbGVtKTtcblxuXHRyZXR1cm4gYXdhaXQgTElTUy5nZXRMSVNTKGVsZW0pO1xufVxuTElTUy5idWlsZCA9IGJ1aWxkO1xuXG5cbkxJU1Mud2hlbkRlZmluZWQgICAgPSBhc3luYyBmdW5jdGlvbih0YWduYW1lOiBzdHJpbmcsIGNhbGxiYWNrPzogKCkgPT4gdm9pZCApIDogUHJvbWlzZTx2b2lkPiB7XG5cblx0YXdhaXQgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQodGFnbmFtZSk7XG5cblx0aWYoIGNhbGxiYWNrICE9PSB1bmRlZmluZWQpXG5cdFx0Y2FsbGJhY2soKTtcblxuXHRyZXR1cm47XG59XG5MSVNTLndoZW5BbGxEZWZpbmVkID0gYXN5bmMgZnVuY3Rpb24odGFnbmFtZXM6IHJlYWRvbmx5IHN0cmluZ1tdLCBjYWxsYmFjaz86ICgpID0+IHZvaWQgKSA6IFByb21pc2U8dm9pZD4ge1xuXG5cdGF3YWl0IFByb21pc2UuYWxsKCB0YWduYW1lcy5tYXAoIHQgPT4gY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQodCkgKSApXG5cblx0aWYoIGNhbGxiYWNrICE9PSB1bmRlZmluZWQpXG5cdFx0Y2FsbGJhY2soKTtcblxufVxuXG5MSVNTLmlzRGVmaW5lZCA9IGZ1bmN0aW9uKG5hbWU6IHN0cmluZykge1xuXHRyZXR1cm4gY3VzdG9tRWxlbWVudHMuZ2V0KG5hbWUpO1xufVxuXG5MSVNTLnNlbGVjdG9yID0gZnVuY3Rpb24obmFtZT86IHN0cmluZykge1xuXHRpZihuYW1lID09PSB1bmRlZmluZWQpIC8vIGp1c3QgYW4gaDRja1xuXHRcdHJldHVybiBcIlwiO1xuXHRyZXR1cm4gYDppcygke25hbWV9LCBbaXM9XCIke25hbWV9XCJdKWA7XG59XG5cbkxJU1MuZ2V0TElTUyAgICA9IGFzeW5jIGZ1bmN0aW9uPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PiggZWxlbWVudDogRWxlbWVudCApIHtcblxuXHRhd2FpdCBMSVNTLndoZW5EZWZpbmVkKCBMSVNTLmdldE5hbWUoZWxlbWVudCkgKTtcblxuXHRyZXR1cm4gKGVsZW1lbnQgYXMgTElTU0hvc3Q8VD4pLkxJU1M7IC8vIGVuc3VyZSBpbml0aWFsaXplZC5cbn1cbkxJU1MuZ2V0TElTU1N5bmM9IGZ1bmN0aW9uPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PiggZWxlbWVudDogRWxlbWVudCApIHtcblxuXHRpZiggISBMSVNTLmlzRGVmaW5lZCggTElTUy5nZXROYW1lKGVsZW1lbnQpICkgKVxuXHRcdHRocm93IG5ldyBFcnJvcihgJHtuYW1lfSBoYXNuJ3QgYmVlbiBkZWZpbmVkIHlldC5gKTtcblxuXHRsZXQgaG9zdCA9IGVsZW1lbnQgYXMgTElTU0hvc3Q8VD47XG5cblx0aWYoICEgaG9zdC5pc0luaXQgKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIkluc3RhbmNlIGhhc24ndCBiZWVuIGluaXRpYWxpemVkIHlldC5cIik7XG5cblx0cmV0dXJuIGhvc3QuTElTU1N5bmM7XG59XG5MSVNTLmluaXRpYWxpemUgPSBhc3luYyBmdW5jdGlvbjxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oIGVsZW1lbnQ6IEVsZW1lbnQpIHtcblxuXHRhd2FpdCBMSVNTLndoZW5EZWZpbmVkKCBMSVNTLmdldE5hbWUoZWxlbWVudCkgKTtcblxuXHRyZXR1cm4gYXdhaXQgKGVsZW1lbnQgYXMgTElTU0hvc3Q8VD4pLmluaXRpYWxpemUoKTsgLy8gZW5zdXJlIGluaXRpYWxpemF0aW9uLlxufVxuXG5MSVNTLmdldE5hbWUgPSBmdW5jdGlvbiggZWxlbWVudDogRWxlbWVudCApOiBzdHJpbmcge1xuXG5cdGNvbnN0IG5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaXMnKSA/PyBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblx0XG5cdGlmKCAhIG5hbWUuaW5jbHVkZXMoJy0nKSApXG5cdFx0dGhyb3cgbmV3IEVycm9yKGBFbGVtZW50ICR7bmFtZX0gaXMgbm90IGEgV2ViQ29tcG9uZW50YCk7XG5cblx0cmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIF9idWlsZFFTKHNlbGVjdG9yOiBzdHJpbmcsIHRhZ25hbWVfb3JfcGFyZW50Pzogc3RyaW5nIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LCBwYXJlbnQ6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cdFxuXHRpZiggdGFnbmFtZV9vcl9wYXJlbnQgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdGFnbmFtZV9vcl9wYXJlbnQgIT09ICdzdHJpbmcnKSB7XG5cdFx0cGFyZW50ID0gdGFnbmFtZV9vcl9wYXJlbnQ7XG5cdFx0dGFnbmFtZV9vcl9wYXJlbnQgPSB1bmRlZmluZWQ7XG5cdH1cblxuXHRyZXR1cm4gW2Ake3NlbGVjdG9yfSR7TElTUy5zZWxlY3Rvcih0YWduYW1lX29yX3BhcmVudCBhcyBzdHJpbmd8dW5kZWZpbmVkKX1gLCBwYXJlbnRdIGFzIGNvbnN0O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIFF1ZXJ5U2VsZWN0b3JzID09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmFzeW5jIGZ1bmN0aW9uIHFzPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPFQ+O1xuYXN5bmMgZnVuY3Rpb24gcXM8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8IENvbXBvbmVudHNbTl0gPjtcbmFzeW5jIGZ1bmN0aW9uIHFzPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsXG5cdFx0XHRcdFx0XHRwYXJlbnQgIDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblxuXHRbc2VsZWN0b3IsIHBhcmVudF0gPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIHBhcmVudCk7XG5cblx0bGV0IHJlc3VsdCA9IGF3YWl0IExJU1MucXNvPFQ+KHNlbGVjdG9yLCBwYXJlbnQpO1xuXHRpZihyZXN1bHQgPT09IG51bGwpXG5cdFx0dGhyb3cgbmV3IEVycm9yKGBFbGVtZW50ICR7c2VsZWN0b3J9IG5vdCBmb3VuZGApO1xuXG5cdHJldHVybiByZXN1bHQhXG59XG5MSVNTLnFzICA9IHFzXG5cbmFzeW5jIGZ1bmN0aW9uIHFzbzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTxUPjtcbmFzeW5jIGZ1bmN0aW9uIHFzbzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTwgQ29tcG9uZW50c1tOXSA+O1xuYXN5bmMgZnVuY3Rpb24gcXNvPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsXG5cdFx0XHRcdFx0XHRwYXJlbnQgIDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblxuXHRbc2VsZWN0b3IsIHBhcmVudF0gPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIHBhcmVudCk7XG5cblx0Y29uc3QgZWxlbWVudCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yPExJU1NIb3N0PFQ+PihzZWxlY3Rvcik7XG5cdGlmKCBlbGVtZW50ID09PSBudWxsIClcblx0XHRyZXR1cm4gbnVsbDtcblxuXHRyZXR1cm4gYXdhaXQgTElTUy5nZXRMSVNTKCBlbGVtZW50ICk7XG59XG5MSVNTLnFzbyA9IHFzb1xuXG5hc3luYyBmdW5jdGlvbiBxc2E8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8VFtdPjtcbmFzeW5jIGZ1bmN0aW9uIHFzYTxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTwgQ29tcG9uZW50c1tOXVtdID47XG5hc3luYyBmdW5jdGlvbiBxc2E8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRjb25zdCBlbGVtZW50cyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsPExJU1NIb3N0PFQ+PihzZWxlY3Rvcik7XG5cblx0bGV0IGlkeCA9IDA7XG5cdGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8VD4+KCBlbGVtZW50cy5sZW5ndGggKTtcblx0Zm9yKGxldCBlbGVtZW50IG9mIGVsZW1lbnRzKVxuXHRcdHByb21pc2VzW2lkeCsrXSA9IExJU1MuZ2V0TElTUyggZWxlbWVudCApO1xuXG5cdHJldHVybiBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59XG5MSVNTLnFzYSA9IHFzYTtcblxuYXN5bmMgZnVuY3Rpb24gcXNjPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgOiBFbGVtZW50KTogUHJvbWlzZTxUPjtcbmFzeW5jIGZ1bmN0aW9uIHFzYzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdGVsZW1lbnQgIDogRWxlbWVudCk6IFByb21pc2U8IENvbXBvbmVudHNbTl0gPjtcbmFzeW5jIGZ1bmN0aW9uIHFzYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudCxcblx0XHRcdFx0XHRcdGVsZW1lbnQgID86IEVsZW1lbnQpIHtcblxuXHRjb25zdCByZXMgPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIGVsZW1lbnQpO1xuXHRcblx0Y29uc3QgcmVzdWx0ID0gKHJlc1sxXSBhcyB1bmtub3duIGFzIEVsZW1lbnQpLmNsb3Nlc3Q8TElTU0hvc3Q8VD4+KHJlc1swXSk7XG5cdGlmKHJlc3VsdCA9PT0gbnVsbClcblx0XHRyZXR1cm4gbnVsbDtcblxuXHRyZXR1cm4gYXdhaXQgTElTUy5nZXRMSVNTKHJlc3VsdCk7XG59XG5MSVNTLnFzYyA9IHFzYztcblxuZnVuY3Rpb24gcXNTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBUO1xuZnVuY3Rpb24gcXNTeW5jPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBDb21wb25lbnRzW05dO1xuZnVuY3Rpb24gcXNTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsXG5cdFx0XHRcdFx0XHRwYXJlbnQgIDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblxuXHRbc2VsZWN0b3IsIHBhcmVudF0gPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIHBhcmVudCk7XG5cblx0Y29uc3QgZWxlbWVudCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yPExJU1NIb3N0PFQ+PihzZWxlY3Rvcik7XG5cblx0aWYoIGVsZW1lbnQgPT09IG51bGwgKVxuXHRcdHRocm93IG5ldyBFcnJvcihgRWxlbWVudCAke3NlbGVjdG9yfSBub3QgZm91bmRgKTtcblxuXHRyZXR1cm4gTElTUy5nZXRMSVNTU3luYyggZWxlbWVudCApO1xufVxuTElTUy5xc1N5bmMgPSBxc1N5bmM7XG5cbmZ1bmN0aW9uIHFzYVN5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFRbXTtcbmZ1bmN0aW9uIHFzYVN5bmM8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IENvbXBvbmVudHNbTl1bXTtcbmZ1bmN0aW9uIHFzYVN5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRjb25zdCBlbGVtZW50cyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsPExJU1NIb3N0PFQ+PihzZWxlY3Rvcik7XG5cblx0bGV0IGlkeCA9IDA7XG5cdGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxUPiggZWxlbWVudHMubGVuZ3RoICk7XG5cdGZvcihsZXQgZWxlbWVudCBvZiBlbGVtZW50cylcblx0XHRyZXN1bHRbaWR4KytdID0gTElTUy5nZXRMSVNTU3luYyggZWxlbWVudCApO1xuXG5cdHJldHVybiByZXN1bHQ7XG59XG5MSVNTLnFzYVN5bmMgPSBxc2FTeW5jO1xuXG5mdW5jdGlvbiBxc2NTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgOiBFbGVtZW50KTogVDtcbmZ1bmN0aW9uIHFzY1N5bmM8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA6IEVsZW1lbnQpOiBDb21wb25lbnRzW05dO1xuZnVuY3Rpb24gcXNjU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudCxcblx0XHRcdFx0XHRcdGVsZW1lbnQgID86IEVsZW1lbnQpIHtcblxuXHRjb25zdCByZXMgPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIGVsZW1lbnQpO1xuXHRcblx0Y29uc3QgcmVzdWx0ID0gKHJlc1sxXSBhcyB1bmtub3duIGFzIEVsZW1lbnQpLmNsb3Nlc3Q8TElTU0hvc3Q8VD4+KHJlc1swXSk7XG5cdGlmKHJlc3VsdCA9PT0gbnVsbClcblx0XHRyZXR1cm4gbnVsbDtcblxuXHRyZXR1cm4gTElTUy5nZXRMSVNTU3luYyhyZXN1bHQpO1xufVxuTElTUy5xc2NTeW5jID0gcXNjU3luYztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBBdXRvID09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgY2xhc3MgTElTU19BdXRvIGV4dGVuZHMgTElTUyh7YXR0cmlidXRlczogW1wic3JjXCJdfSkge1xuXG5cdHJlYWRvbmx5ICNrbm93bl90YWcgPSBuZXcgU2V0PHN0cmluZz4oKTtcblx0cmVhZG9ubHkgI2RpcmVjdG9yeTogc3RyaW5nO1xuXHRyZWFkb25seSAjc3c6IFByb21pc2U8dm9pZD47XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy4jc3cgPSBuZXcgUHJvbWlzZSggYXN5bmMgKHJlc29sdmUpID0+IHtcblx0XHRcdFxuXHRcdFx0YXdhaXQgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoYC4vc3cuanNgKTtcblxuXHRcdFx0aWYoIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXIgKVxuXHRcdFx0XHRyZXNvbHZlKCk7XG5cblx0XHRcdG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRyb2xsZXJjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cblx0XHRjb25zdCBzcmMgPSB0aGlzLmF0dHJzLnNyYztcblx0XHRpZihzcmMgPT09IG51bGwpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJzcmMgYXR0cmlidXRlIGlzIG1pc3NpbmcuXCIpO1xuXHRcdHRoaXMuI2RpcmVjdG9yeSA9IHNyY1swXSA9PT0gJy4nXG5cdFx0XHRcdFx0XHRcdFx0PyBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9LyR7c3JjfWBcblx0XHRcdFx0XHRcdFx0XHQ6IHNyYztcblxuXHRcdG5ldyBNdXRhdGlvbk9ic2VydmVyKCAobXV0YXRpb25zKSA9PiB7XG5cblx0XHRcdGZvcihsZXQgbXV0YXRpb24gb2YgbXV0YXRpb25zKVxuXHRcdFx0XHRmb3IobGV0IGFkZGl0aW9uIG9mIG11dGF0aW9uLmFkZGVkTm9kZXMpXG5cdFx0XHRcdFx0aWYoYWRkaXRpb24gaW5zdGFuY2VvZiBFbGVtZW50KVxuXHRcdFx0XHRcdFx0dGhpcy4jYWRkVGFnKGFkZGl0aW9uLnRhZ05hbWUpXG5cblx0XHR9KS5vYnNlcnZlKCBkb2N1bWVudCwgeyBjaGlsZExpc3Q6dHJ1ZSwgc3VidHJlZTp0cnVlIH0pO1xuXG5cblx0XHRmb3IoIGxldCBlbGVtIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpIClcblx0XHRcdHRoaXMuI2FkZFRhZyhlbGVtLnRhZ05hbWUpO1xuXHR9XG5cblxuICAgIHByb3RlY3RlZCByZXNvdXJjZXMoKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdFwiaW5kZXguanNcIixcblx0XHRcdFwiaW5kZXguaHRtbFwiLFxuXHRcdFx0XCJpbmRleC5jc3NcIlxuXHRcdF07XG4gICAgfVxuXG5cdHByb3RlY3RlZCBkZWZpbmVXZWJDb21wb25lbnQodGFnbmFtZTogc3RyaW5nLCBmaWxlczogUmVjb3JkPHN0cmluZywgYW55Piwgb3B0czogUGFydGlhbDx7Y29udGVudDogc3RyaW5nLCBjc3M6IHN0cmluZ30+KSB7XG5cblx0XHRjb25zdCBqcyA9IGZpbGVzW1wiaW5kZXguanNcIl07XG5cdFx0Y29uc3QgY29udGVudCA9IGZpbGVzW1wiaW5kZXguaHRtbFwiXTtcblxuXHRcdGxldCBrbGFzczogbnVsbHwgUmV0dXJuVHlwZTx0eXBlb2YgTElTUz4gPSBudWxsO1xuXHRcdGlmKCBqcyAhPT0gdW5kZWZpbmVkIClcblx0XHRcdGtsYXNzID0ganMob3B0cyk7XG5cdFx0ZWxzZSBpZiggY29udGVudCAhPT0gdW5kZWZpbmVkIClcblx0XHRcdGtsYXNzID0gY2xhc3MgV2ViQ29tcG9uZW50IGV4dGVuZHMgTElTUyhvcHRzKSB7fTtcblxuXHRcdGlmKGtsYXNzID09PSBudWxsKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIGZpbGVzIGZvciBXZWJDb21wb25lbnQgJHt0YWduYW1lfS5gKTtcblxuXHRcdHJldHVybiBMSVNTLmRlZmluZSh0YWduYW1lLCBrbGFzcyk7XG5cdH1cblxuXHRhc3luYyAjYWRkVGFnKHRhZ25hbWU6IHN0cmluZykge1xuXG5cdFx0dGFnbmFtZSA9IHRhZ25hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdGlmKCB0YWduYW1lID09PSAnbGlzcy1hdXRvJyB8fCB0YWduYW1lID09PSAnYmxpc3MtYXV0bycgfHwgISB0YWduYW1lLmluY2x1ZGVzKCctJykgfHwgdGhpcy4ja25vd25fdGFnLmhhcyggdGFnbmFtZSApIClcblx0XHRcdHJldHVybjtcblxuXHRcdHRoaXMuI2tub3duX3RhZy5hZGQodGFnbmFtZSk7XG5cblx0XHRhd2FpdCB0aGlzLiNzdzsgLy8gZW5zdXJlIFNXIGlzIGluc3RhbGxlZC5cblxuXHRcdGNvbnN0IGZpbGVuYW1lcyA9IHRoaXMucmVzb3VyY2VzKCk7XG5cdFx0Y29uc3QgcmVzb3VyY2VzID0gYXdhaXQgUHJvbWlzZS5hbGwoIGZpbGVuYW1lcy5tYXAoIGZpbGUgPT4gZmlsZS5lbmRzV2l0aCgnLmpzJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBfaW1wb3J0ICAgKGAke3RoaXMuI2RpcmVjdG9yeX0vJHt0YWduYW1lfS8ke2ZpbGV9YCwgdHJ1ZSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBfZmV0Y2hUZXh0KGAke3RoaXMuI2RpcmVjdG9yeX0vJHt0YWduYW1lfS8ke2ZpbGV9YCwgdHJ1ZSkgKSApO1xuXG5cdFx0Y29uc3QgZmlsZXM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgZmlsZW5hbWVzLmxlbmd0aDsgKytpKVxuXHRcdFx0aWYoIHJlc291cmNlc1tpXSAhPT0gdW5kZWZpbmVkKVxuXHRcdFx0XHRmaWxlc1tmaWxlbmFtZXNbaV1dID0gcmVzb3VyY2VzW2ldO1xuXG5cdFx0Y29uc3QgY29udGVudCA9IGZpbGVzW1wiaW5kZXguaHRtbFwiXTtcblx0XHRjb25zdCBjc3MgICAgID0gZmlsZXNbXCJpbmRleC5jc3NcIl07XG5cblx0XHRjb25zdCBvcHRzOiBQYXJ0aWFsPHtjb250ZW50OiBzdHJpbmcsIGNzczogc3RyaW5nfT4gPSB7XG5cdFx0XHQuLi5jb250ZW50ICE9PSB1bmRlZmluZWQgJiYge2NvbnRlbnR9LFxuXHRcdFx0Li4uY3NzICAgICAhPT0gdW5kZWZpbmVkICYmIHtjc3N9LFxuXHRcdH07XG5cblx0XHRyZXR1cm4gdGhpcy5kZWZpbmVXZWJDb21wb25lbnQodGFnbmFtZSwgZmlsZXMsIG9wdHMpO1xuXHRcdFxuXHR9XG59XG5MSVNTLmRlZmluZShcImxpc3MtYXV0b1wiLCBMSVNTX0F1dG8pO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudHMge1xuXHRcImxpc3MtYXV0b1wiOiBMSVNTX0F1dG9cbn07XG4vKlxuICogZGVjbGFyZSBtb2R1bGUgJyRMSVNTJyB7XG4gKiBcdFx0aW50ZXJmYWNlIENvbXBvbmVudHMge1xuICogXHRcdFx0XCJuYW1lXCI6IGNsYXNzXG4gKiBcdFx0fVxuICogfVxuICovXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgRXZlbnRzVGFyZ2V0ID09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBDc3RFdmVudDxFdmVudCBleHRlbmRzIHN0cmluZywgQXJncz4gPSBDdXN0b21FdmVudDxBcmdzPiAmIHt0eXBlOiBFdmVudH07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRzVGFyZ2V0PEV2ZW50cyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+e1xuXG5cdGFkZEV2ZW50TGlzdGVuZXI8RXZlbnQgZXh0ZW5kcyBFeGNsdWRlPGtleW9mIEV2ZW50cywgc3ltYm9sfG51bWJlcj4+KHR5cGU6IEV2ZW50LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGxpc3RlbmVyOiBudWxsfCAoKGV2OiBDc3RFdmVudDxFdmVudCwgRXZlbnRzW0V2ZW50XT4pID0+IHZvaWQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IG9wdGlvbnM/OiBib29sZWFufEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zKTogdm9pZDtcblxuXHRkaXNwYXRjaEV2ZW50PEV2ZW50IGV4dGVuZHMgRXhjbHVkZTxrZXlvZiBFdmVudHMsIHN5bWJvbHxudW1iZXI+PihldmVudDogQ3N0RXZlbnQ8RXZlbnQsIEV2ZW50c1tFdmVudF0+KTogYm9vbGVhbjtcblxuXHRyZW1vdmVFdmVudExpc3RlbmVyPEV2ZW50IGV4dGVuZHMgRXhjbHVkZTxrZXlvZiBFdmVudHMsIHN5bWJvbHxudW1iZXI+Pih0eXBlOiBFdmVudCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGlzdGVuZXI6IG51bGx8ICgoZXY6IENzdEV2ZW50PEV2ZW50LCBFdmVudHNbRXZlbnRdPikgPT4gdm9pZCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM/OiBib29sZWFufEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIENzdG1FdmVudDxFdmVudCBleHRlbmRzIHN0cmluZywgQXJncz4gZXh0ZW5kcyBDdXN0b21FdmVudDxBcmdzPiB7XG5cblx0b3ZlcnJpZGUgZ2V0IHR5cGUoKTogRXZlbnQgeyByZXR1cm4gc3VwZXIudHlwZSBhcyBFdmVudDsgfVxuXG5cdGNvbnN0cnVjdG9yKHR5cGU6IEV2ZW50LCBhcmdzOiBBcmdzKSB7XG5cdFx0c3VwZXIodHlwZSwge2RldGFpbDogYXJnc30pO1xuXHR9XG59XG5cbmV4cG9ydCB0eXBlIEV2ZW50c1RhcmdldENzdHI8RXZlbnRzIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+PiA9IENvbnN0cnVjdG9yPEV2ZW50c1RhcmdldDxFdmVudHM+PjtcblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIGludGVybmFsIHRvb2xzID09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoUmVzb3VyY2UocmVzb3VyY2U6IFJlc291cmNlfFByb21pc2U8UmVzb3VyY2U+KSB7XG5cblx0cmVzb3VyY2UgPSBhd2FpdCByZXNvdXJjZTtcblxuXHRpZiggISAocmVzb3VyY2UgaW5zdGFuY2VvZiBSZXNwb25zZSkgKVxuXHRcdHJlc291cmNlID0gYXdhaXQgZmV0Y2gocmVzb3VyY2UpO1xuXG5cdHJldHVybiBhd2FpdCByZXNvdXJjZS50ZXh0KCk7XG59XG5cblxuYXN5bmMgZnVuY3Rpb24gX2ZldGNoVGV4dCh1cmk6IHN0cmluZ3xVUkwsIGlzTGlzc0F1dG86IGJvb2xlYW4gPSBmYWxzZSkge1xuXG5cdGNvbnN0IG9wdGlvbnMgPSBpc0xpc3NBdXRvXG5cdFx0XHRcdFx0XHQ/IHtoZWFkZXJzOntcImxpc3MtYXV0b1wiOiBcInRydWVcIn19XG5cdFx0XHRcdFx0XHQ6IHt9O1xuXG5cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmksIG9wdGlvbnMpO1xuXHRpZihyZXNwb25zZS5zdGF0dXMgIT09IDIwMCApXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblxuXHRpZiggaXNMaXNzQXV0byAmJiByZXNwb25zZS5oZWFkZXJzLmdldChcInN0YXR1c1wiKSEgPT09IFwiNDA0XCIgKVxuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cblx0cmV0dXJuIGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIF9pbXBvcnQodXJpOiBzdHJpbmcsIGlzTGlzc0F1dG86IGJvb2xlYW4gPSBmYWxzZSkge1xuXG5cdC8vIHRlc3QgZm9yIHRoZSBtb2R1bGUgZXhpc3RhbmNlLlxuXHRpZihpc0xpc3NBdXRvICYmIGF3YWl0IF9mZXRjaFRleHQodXJpLCBpc0xpc3NBdXRvKSA9PT0gdW5kZWZpbmVkIClcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXG5cdHRyeSB7XG5cdFx0cmV0dXJuIChhd2FpdCBpbXBvcnQoLyogd2VicGFja0lnbm9yZTogdHJ1ZSAqLyB1cmkpKS5kZWZhdWx0O1xuXHR9IGNhdGNoKGUpIHtcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHR9XG59XG5cbi8vIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTEwMDA0NjEvaHRtbC1lbGVtZW50LXRhZy1uYW1lLWZyb20tY29uc3RydWN0b3JcbmNvbnN0IEhUTUxDTEFTU19SRUdFWCA9ICAvSFRNTChcXHcrKUVsZW1lbnQvO1xuY29uc3QgZWxlbWVudE5hbWVMb29rdXBUYWJsZSA9IHtcbiAgICAnVUxpc3QnOiAndWwnLFxuICAgICdUYWJsZUNhcHRpb24nOiAnY2FwdGlvbicsXG4gICAgJ1RhYmxlQ2VsbCc6ICd0ZCcsIC8vIHRoXG4gICAgJ1RhYmxlQ29sJzogJ2NvbCcsICAvLydjb2xncm91cCcsXG4gICAgJ1RhYmxlUm93JzogJ3RyJyxcbiAgICAnVGFibGVTZWN0aW9uJzogJ3Rib2R5JywgLy9bJ3RoZWFkJywgJ3Rib2R5JywgJ3Rmb290J10sXG4gICAgJ1F1b3RlJzogJ3EnLFxuICAgICdQYXJhZ3JhcGgnOiAncCcsXG4gICAgJ09MaXN0JzogJ29sJyxcbiAgICAnTW9kJzogJ2lucycsIC8vLCAnZGVsJ10sXG4gICAgJ01lZGlhJzogJ3ZpZGVvJywvLyAnYXVkaW8nXSxcbiAgICAnSW1hZ2UnOiAnaW1nJyxcbiAgICAnSGVhZGluZyc6ICdoMScsIC8vLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnXSxcbiAgICAnRGlyZWN0b3J5JzogJ2RpcicsXG4gICAgJ0RMaXN0JzogJ2RsJyxcbiAgICAnQW5jaG9yJzogJ2EnXG4gIH07XG5mdW5jdGlvbiBfZWxlbWVudDJ0YWduYW1lKENsYXNzOiB0eXBlb2YgSFRNTEVsZW1lbnQpOiBzdHJpbmd8bnVsbCB7XG5cblx0aWYoIENsYXNzID09PSBIVE1MRWxlbWVudCApXG5cdFx0cmV0dXJuIG51bGw7XG5cdFxuXHRsZXQgaHRtbHRhZyA9IEhUTUxDTEFTU19SRUdFWC5leGVjKENsYXNzLm5hbWUpIVsxXTtcblx0cmV0dXJuIGVsZW1lbnROYW1lTG9va3VwVGFibGVbaHRtbHRhZyBhcyBrZXlvZiB0eXBlb2YgZWxlbWVudE5hbWVMb29rdXBUYWJsZV0gPz8gaHRtbHRhZy50b0xvd2VyQ2FzZSgpXG59IiwiaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3RydWN0L21lbnUudHNcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3RydWN0L2NhbGMvc2hlZXQudHNcIjtcblxuLy8gMVxuXG5pbXBvcnQgTElTUyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbGlicy9MSVNTXCI7XG5pbXBvcnQgeyBGb3JtYXRzIH0gZnJvbSBcInN0cnVjdC9jYWxjL2Zvcm1hdC50c1wiO1xuXG5jb25zdCBzX2Zvcm11bGEgPSBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfZm9ybXVsYScpO1xuXG5zX2Zvcm11bGEuZ2V0Q2VsbHMoXCJBMTpDMVwiKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJRdWFudGl0w6lcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJQcml4IHVuaXRhaXJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUHJpeCB0b3RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuXG5zX2Zvcm11bGEuZ2V0Q2VsbHMoXCJBMjpBNFwiKS5jb250ZW50ID0gWzIzICAsIDEyLCA0NF07XG5zX2Zvcm11bGEuZ2V0Q2VsbHMoXCJCMjpCNFwiKS5mb3JtYXQoRm9ybWF0cy5ldXJvcykuY29udGVudCA9IFswLjIsIDAuMywgMC40XTtcblxuc19mb3JtdWxhLmdldENlbGxzKFwiQzI6QzRcIikuZm9ybWF0KEZvcm1hdHMuZXVyb3MpLmNvbnRlbnQgPSBbXG4gICAgXCI9QTIqQjJcIixcbiAgICBcIj1BMypCM1wiLFxuICAgIFwiPUE0KkI0XCJcbl07XG5cbi8qKi9cblxuXG5jb25zdCBzX2NvbXBsZXhfZm9ybXVsYSA9IGF3YWl0IExJU1MucXMoJyNzaGVldF9jb21wbGV4X2Zvcm11bGEnKTtcblxuc19jb21wbGV4X2Zvcm11bGEuZ2V0Q2VsbHMoXCJBMTpDMVwiKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJYXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm11bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuc19jb21wbGV4X2Zvcm11bGEuZ2V0Q2VsbHMoXCJBMjpCNFwiKS5jb250ZW50ID0gW1xuICAgIDIsIDQsXG4gICAgMSwgNSxcbiAgICA0LCA2XTtcblxuc19jb21wbGV4X2Zvcm11bGEuZ2V0Q2VsbHMoXCJDMlwiKS5jb250ZW50ID1cbmA9IEEyKkIyXG4gK0EzKkIzXG4gK0E0KkI0YDtcblxuLyoqL1xuXG5jb25zdCBzX3R5cGVzID0gYXdhaXQgTElTUy5xcygnI3NoZWV0X3R5cGVzJyk7XG5cblxuc190eXBlcy5nZXRDZWxscyhcIkExOkUxXCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRleHRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJOb21icmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkJvb2zDqWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJEYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGb3JtdWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuXG5zX3R5cGVzLmdldENlbGxzKFwiQTI6RTJcIikuY29udGVudCA9IFtcbiAgICBcIkhlbGxvXCIsXG4gICAgMi4zLFxuICAgIHRydWUsXG4gICAgbmV3IERhdGUoKSxcbiAgICBcIj1CMisyXCJcbl1cblxuXG5jb25zdCBzX2N1cnNvciA9IGF3YWl0IExJU1MucXMoJyNzaGVldF9jdXJzb3InKTtcblxuc19jdXJzb3IuZ2V0Q2VsbHMoXCJBMTpIMVwiKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpLmNvbnRlbnQgPSBcIipcIjtcbnNfY3Vyc29yLmdldENlbGxzKFwiQTQ6SDRcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gXCIqXCI7XG5cbnNfY3Vyc29yLmdldENlbGxzKFwiRDE6RTRcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gXCIqXCI7XG5cbnNfY3Vyc29yLmdldENlbGxzKFwiQTE6QTRcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gXCIqXCI7XG5zX2N1cnNvci5nZXRDZWxscyhcIkgxOkg0XCIsIHRydWUpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFwiKlwiO1xuXG5cbmNvbnN0IHNfJGZvcm11bGEgPSBbXG4gICAgYXdhaXQgTElTUy5xcygnI3NoZWV0X19fX2Zvcm11bGEnKSxcbiAgICBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfeF9fZm9ybXVsYScpLFxuICAgIGF3YWl0IExJU1MucXMoJyNzaGVldF9feF9mb3JtdWxhJyksXG4gICAgYXdhaXQgTElTUy5xcygnI3NoZWV0X3h4X2Zvcm11bGEnKVxuXVxuXG5mb3IobGV0IGkgPSAwOyBpIDwgc18kZm9ybXVsYS5sZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IHNfJGZvcm0gPSBzXyRmb3JtdWxhW2ldO1xuXG4gICAgc18kZm9ybS5nZXRDZWxscyhcIkExOkQxXCIpLmZvcm1hdChcImJvbGRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQgPSBbMCwgMSwgMiwgM107XG5cbiAgICBzXyRmb3JtLmdldENlbGxzKFwiQTI6QTRcIikuZm9ybWF0KFwiYm9sZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudCA9IFsxLCAyLCAzXTtcblxuICAgIGxldCByZWYgPSBcIj1BMVwiO1xuICAgIGlmKCBpID09PSAxKVxuICAgICAgICByZWYgPSBcIj0kQTFcIjtcbiAgICBpZiggaSA9PT0gMilcbiAgICAgICAgcmVmID0gXCI9QSQxXCI7XG4gICAgaWYoIGkgPT09IDMpXG4gICAgICAgIHJlZiA9IFwiPSRBJDFcIjtcblxuICAgIHNfJGZvcm0uZ2V0Q2VsbHMoXCJCMlwiKS5jb250ZW50ID0gcmVmO1xuXG4gICAgc18kZm9ybS5nZXRDZWxscyhcIkExOkQ0XCIpLmZvcm1hdChcImFsaWduX2NlbnRlclwiKVxufVxuXG5jb25zdCBzaGVldF9yZWNvcGllX21vdGl2YXRpb24gPSBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uJyk7XG5cbnNoZWV0X3JlY29waWVfbW90aXZhdGlvbi5nZXRDZWxscyhcIkExOkQ0XCIpLmZvcm1hdChcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gW1xuICAgIFwiQ29uc28vam91clwiLCBcIkNyYXlvbnNcIiwgXCJHb21tZXNcIiwgXCJUb3RhbCAoam91cilcIixcbiAgICBcIjAxLzAxXCIgICwgMiwgMywgXCI9QjIrQzJcIiwgXG4gICAgXCIwMi8wMVwiICAsIDQsIDEsIFwiPUMzK0MzXCIsIFxuICAgIFwiVG90YWwgKHByb2QpXCIgICwgXCI9QjIrQjNcIiwgXCI9QzIrQzNcIiwgXCI9RDIrRDNcIiwgXG5dO1xuc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uLmdldENlbGxzKFwiQTE6RDFcIikuZm9ybWF0KFwiYm9sZFwiKTtcbnNoZWV0X3JlY29waWVfbW90aXZhdGlvbi5nZXRDZWxscyhcIkEyOkE0XCIpLmZvcm1hdChcImJvbGRcIik7XG5cbmNvbnN0IHNoZWV0X3JlY29waWVfbW90aXZhdGlvbl9lbXB0eSA9IGF3YWl0IExJU1MucXMoJyNzaGVldF9yZWNvcGllX21vdGl2YXRpb25fZW1wdHknKTtcblxuc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uX2VtcHR5LmdldENlbGxzKFwiQTE6RDRcIikuZm9ybWF0KFwiYWxpZ25fY2VudGVyXCIpLmNvbnRlbnQgPSBbXG4gICAgXCJDb25zby9qb3VyXCIsIFwiQ3JheW9uc1wiLCBcIkdvbW1lc1wiLCBcIlRvdGFsIChqb3VyKVwiLFxuICAgIFwiMDEvMDFcIiAgLCAyLCAzLCB1bmRlZmluZWQsIFxuICAgIFwiMDIvMDFcIiAgLCA0LCAxLCB1bmRlZmluZWQsIFxuICAgIFwiVG90YWwgKHByb2QpXCIgICwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZFxuXTtcbnNoZWV0X3JlY29waWVfbW90aXZhdGlvbl9lbXB0eS5nZXRDZWxscyhcIkExOkQxXCIpLmZvcm1hdChcImJvbGRcIik7XG5zaGVldF9yZWNvcGllX21vdGl2YXRpb25fZW1wdHkuZ2V0Q2VsbHMoXCJBMjpBNFwiKS5mb3JtYXQoXCJib2xkXCIpO1xuXG5jb25zdCBzaGVldF9yZWNvcGllX2luY3IgPSBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfcmVjb3BpZV9pbmNyJyk7XG5cbnNoZWV0X3JlY29waWVfaW5jci5nZXRDZWxscygnQTE6QTInKS5jb250ZW50ID0gWyAxLCBuZXcgRGF0ZSgpIF07XG5cblxuLy8gdGVzdFxuY29uc3QgYyA9IGBcbjx0YWJsZSBpZD1cInVuXCI+XG4gICAgPHRib2R5PlxuICAgICAgICA8dHI+PHRkPlhYWDwvdGQ+PC90cj5cbiAgICA8L3Rib2R5PlxuPC90YWJsZT5gO1xuXG5jb25zdCBjc3MgPSBgXG4gICAgdGQ6bm90KFtjb250ZW50ZWRpdGFibGVdKSB7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIH1cbmA7XG5cbmNsYXNzIFggZXh0ZW5kcyBMSVNTKHtcbiAgICBjb250ZW50OiBjLCBjc3Ncbn0pIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBjb25zdCB0ZCA9IHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignI3VuIHRkJykhO1xuICAgICAgICB0ZC50b2dnbGVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuICAgICAgICB0ZC5mb2N1cygpO1xuICAgICAgICB0ZC50ZXh0Q29udGVudCA9IFwiWVlZXCI7XG4gICAgfVxufVxuXG5MSVNTLmRlZmluZSgndGVzdC10ZXN0JywgWCk7IiwiaW1wb3J0IExJU1MgZnJvbSBcIi4uLy4uLy4uL2xpYnMvTElTU1wiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0LCBDZWxsLCBDZWxsTGlzdCwgZGVmYXVsdEZvcm1hdCB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbmV4cG9ydCBjbGFzcyBGb3JtYXRNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBzaGVldC5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXY6IEtleWJvYXJkRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgaWYoICEgZXYuY3RybEtleSApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnYicpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KFwiYm9sZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdpJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJpdGFsaWNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAndScpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KFwidW5kZXJsaW5lXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ2wnKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcImFsaWduX2xlZnRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAncicpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KFwiYWxpZ25fcmlnaHRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnZScpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KFwiYWxpZ25fY2VudGVyXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJzQnICYmIGV2LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChGb3JtYXRzLmV1cm9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICc1JyAmJiBldi5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoRm9ybWF0cy5wb3VyY2VudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnMScgJiYgZXYuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KEZvcm1hdHMubnVtYmVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoY2hhbmdlZCkge1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICAgIC8qIFRPRE8gbGlzdGVuICovXG5cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBGb3JtYXRzID0ge1xuICAgIGV1cm9zOiBmdW5jdGlvbih0aGlzOkNlbGwsIHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYodmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiAnJztcblxuICAgICAgICBjb25zdCBwcmVjID0gKyh0aGlzLmdldEF0dHJpYnV0ZSgncHJlY2lzaW9uJykgPz8gMik7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjLFxuICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjXG4gICAgICAgICAgICB9KSArICfigqwnO1xuICAgICAgICAvLy50b0ZpeGVkKDIpICsgJ+KCrCc7XG4gICAgfSxcbiAgICBwb3VyY2VudDogZnVuY3Rpb24odGhpczpDZWxsLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmKHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gJyc7XG5cbiAgICAgICAgY29uc3QgcHJlYyA9ICsodGhpcy5nZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicpID8/IDIpO1xuXG4gICAgICAgIHJldHVybiAodmFsdWUgKiAxMDApLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjLFxuICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjXG4gICAgICAgICAgICB9KSArICclJztcbiAgICAgICAgLy8udG9GaXhlZCgyKSArICfigqwnO1xuICAgIH0sXG4gICAgbnVtYmVyOiBmdW5jdGlvbih0aGlzOkNlbGwsIHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYodmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiAnJztcblxuICAgICAgICBjb25zdCBwcmVjID0gKyh0aGlzLmdldEF0dHJpYnV0ZSgncHJlY2lzaW9uJykgPz8gMik7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjLFxuICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjXG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGb3JtYXQge1xuXG4gICAgI2Zvcm1hdDogUmVjb3JkPHN0cmluZywgYW55PjtcblxuICAgIGNvbnN0cnVjdG9yKGZvcm1hdDogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgICAgICB0aGlzLiNmb3JtYXQgPSBmb3JtYXQ7XG4gICAgfVxuXG4gICAgYXBwbHlUbyhjZWxsOiBDZWxsfENlbGxMaXN0KSB7XG5cbiAgICAgICAgaWYoIGNlbGwgaW5zdGFuY2VvZiBDZWxsTGlzdCkge1xuXG4gICAgICAgICAgICBmb3IobGV0IGMgb2YgY2VsbC5jZWxscylcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5VG8oYyk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgbmFtZSBpbiB0aGlzLiNmb3JtYXQpIHtcbiAgICAgICAgICAgIGxldCB2YWwgPSB0aGlzLiNmb3JtYXRbbmFtZV07XG5cbiAgICAgICAgICAgIGlmKG5hbWUgPT09ICdmb3JtYXQnKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggdmFsID09PSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY2VsbC5mb3JtYXQgPSBkZWZhdWx0Rm9ybWF0O1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gY2VsbC5mb3JtYXQoIGNlbGwucmF3Q29udGVudCk7IC8vVE9ETzogaWYgZmN0XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNlbGwuZm9ybWF0ID0gdmFsO1xuICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBjZWxsLmZvcm1hdCggY2VsbC5yYXdDb250ZW50KTsgLy9UT0RPOiBpZiBmY3RcblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihuYW1lID09PSAncHJlY2lzaW9uJykge1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdwcmVjaXNpb24nLCB2YWwpO1xuICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBjZWxsLmZvcm1hdD8uKCBjZWxsLnJhd0NvbnRlbnQpOyAvL1RPRE86IGlmIGZjdFxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiggbmFtZSA9PT0gJ3NwYW4nICkge1xuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBzaGVldCA9IExJU1MuZ2V0TElTU1N5bmMoIChjZWxsLmdldFJvb3ROb2RlKCkgYXMgU2hhZG93Um9vdCkuaG9zdCApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKCB2YWxbMF0gPT09IDEgJiYgdmFsWzFdID09PSAxKSB7IC8vIHVubWVyZ2VcblxuICAgICAgICAgICAgICAgICAgICBsZXQgciA9ICtjZWxsLmdldEF0dHJpYnV0ZSgncm93c3BhbicpID8/IDA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjID0gK2NlbGwuZ2V0QXR0cmlidXRlKCdjb2xzcGFuJykgPz8gMDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcjsgKytpKVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGM7ICsraikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHNoZWV0LnJlbGF0aXZlVG8oY2VsbCwgaSwgaik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRhcmdldC5jZWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ3Jvd3NwYW4nKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ2NvbHNwYW4nKTtcblxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgncm93c3BhbicsIGAke3ZhbFswXX1gKTtcbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsIGAke3ZhbFsxXX1gKTtcblxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB2YWxbMF07ICsraSlcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHZhbFsxXTsgKytqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpID09PSAwICYmIGogPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHNoZWV0LnJlbGF0aXZlVG8oY2VsbCwgaSwgaik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2VsbCA9IGNlbGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiggdHlwZW9mIHZhbCA9PT0gXCJib29sZWFuXCIpIHtcblxuICAgICAgICAgICAgICAgIGlmKCBuYW1lLnN0YXJ0c1dpdGgoJ2FsaWduXycpICkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2FsaWduX2xlZnQnKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdhbGlnbl9jZW50ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdhbGlnbl9yaWdodCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiggbmFtZS5zdGFydHNXaXRoKCd2YWxpZ25fJykgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWduX3RvcCcpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlnbl9taWRkbGUnKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZ25fYm90dG9tJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QudG9nZ2xlKG5hbWUsIHZhbCk7XG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2VsbC5zdHlsZS5zZXRQcm9wZXJ0eShgLS0ke25hbWV9YCwgdmFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFByb3BlcnR5KG5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy4jZm9ybWF0W25hbWVdO1xuICAgIH1cbiAgICBoYXNQcm9wZXJ0eShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5hbWUgaW4gdGhpcy4jZm9ybWF0O1xuICAgIH1cblxuICAgIHN0YXRpYyBleHRyYWN0Rm9ybWF0KGNlbGw6IENlbGx8Q2VsbExpc3QpOiBGb3JtYXQge1xuICAgICAgICBcbiAgICAgICAgaWYoIGNlbGwgaW5zdGFuY2VvZiBDZWxsTGlzdCkge1xuXG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IGNlbGwuY2VsbHM7XG5cbiAgICAgICAgICAgIGxldCBmb3JtYXQgPSBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxsc1swXSk7XG5cbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCBjZWxscy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGxldCBmMiA9IEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzW2ldKTtcblxuICAgICAgICAgICAgICAgIGZvcihsZXQga2V5IGluIGZvcm1hdC4jZm9ybWF0KVxuICAgICAgICAgICAgICAgICAgICBpZiggISAoa2V5IGluIGYyLiNmb3JtYXQpIHx8IGYyLiNmb3JtYXRba2V5XSAhPT0gZm9ybWF0LiNmb3JtYXRba2V5XSApXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZm9ybWF0LiNmb3JtYXRba2V5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IGZvcm1hdCA9IE9iamVjdC5mcm9tRW50cmllczxhbnk+KCBbLi4uY2VsbC5jbGFzc0xpc3QudmFsdWVzKCldLm1hcChlID0+IFtlLCB0cnVlXSkgKTtcbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjZWxsLnN0eWxlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgbmFtZSA9IGNlbGwuc3R5bGUuaXRlbShpKTtcbiAgICAgICAgICAgIGlmKCAhIG5hbWUuc3RhcnRzV2l0aCgnLS0nKSApXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBmb3JtYXRbbmFtZS5zbGljZSgyKV0gPSBjZWxsLnN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb2xzcGFuID0gKyhjZWxsLmdldEF0dHJpYnV0ZSgnY29sc3BhbicpID8/IDEpO1xuICAgICAgICBjb25zdCByb3dzcGFuID0gKyhjZWxsLmdldEF0dHJpYnV0ZSgncm93c3BhbicpID8/IDEpO1xuXG4gICAgICAgIGlmKCBjb2xzcGFuID4gMSB8fCByb3dzcGFuID4gMSApXG4gICAgICAgICAgICBmb3JtYXQuc3BhbiA9IFsgcm93c3BhbiwgY29sc3BhbiBdO1xuXG4gICAgICAgIGlmKCAhIChcImZvbnRfc2l6ZVwiIGluIGZvcm1hdCkgKVxuICAgICAgICAgICAgZm9ybWF0Wydmb250X3NpemUnXSA9ICcxMHB0JztcblxuICAgICAgICBpZiggXCJmb3JtYXRcIiBpbiBjZWxsKVxuICAgICAgICAgICAgZm9ybWF0LmZvcm1hdCA9IGNlbGwuZm9ybWF0O1xuXG4gICAgICAgIGlmKCBjZWxsLmhhc0F0dHJpYnV0ZSgncHJlY2lzaW9uJykgKVxuICAgICAgICAgICAgZm9ybWF0LnByZWNpc2lvbiA9IGNlbGwuZ2V0QXR0cmlidXRlKCdwcmVjaXNpb24nKTtcblxuICAgICAgICByZXR1cm4gbmV3IEZvcm1hdChmb3JtYXQpO1xuICAgIH1cbn0iLCIvL1RPRE86IHdlYnBhY2sgY29uZmlnLi4uXG5pbXBvcnQgTElTUyBmcm9tIFwiLi4vLi4vLi4vbGlicy9MSVNTXCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGwsIENlbGxMaXN0LCBkZWZhdWx0Rm9ybWF0IH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuY29uc3QgY3NzID0gYFxuICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAmIHByZSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xuICAgICAgICAgICAgbWluLWhlaWdodDogY2FsYyggMXJlbSArIDhweCArIDJweCApO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB0O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMaWJlcmF0aW9uIFNhbnMnO1xuICAgICAgICB9XG4gICAgfVxuYDtcblxuXG5leHBvcnQgY2xhc3MgQ2FsY0Zvcm11bGEgZXh0ZW5kcyBMSVNTKHtcbiAgICBjc3Ncbn0pIHtcblxuICAgICNpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xuICAgICNzaGVldCAgITogQ2FsY1NoZWV0O1xuICAgICNjdXJfY2VsbDogQ2VsbHxudWxsID0gbnVsbDtcbiAgICAjb25JbnB1dDogKGV2OiBFdmVudCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoIHRoaXMuI2lucHV0ICk7XG5cbiAgICAgICAgdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmKCB0aGlzLiNjdXJfY2VsbCA9PT0gbnVsbCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLiNzaGVldC5jdXJzb3IuY29udGVudCA9IHRoaXMuI2lucHV0LnRleHRDb250ZW50ITtcbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPSBudWxsO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiggdGhpcy4jY3VyX2NlbGwgPT09IG51bGwgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy4jc2hlZXQuc3RhdGVzLmNlbGxfZWRpdC5zdGF0ZSA9IHRoaXMuI2N1cl9jZWxsO1xuICAgICAgICAgICAgLy90aGlzLiNjdXJfY2VsbCEudGV4dENvbnRlbnQgPSB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgaWYoIHRoaXMuI2N1cl9jZWxsID09PSBudWxsIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsIS50ZXh0Q29udGVudCA9IGRlZmF1bHRGb3JtYXQoIHRoaXMuI2lucHV0LnRleHRDb250ZW50ISApO1xuICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KCdpbnB1dCcsIHtkZXRhaWw6IHRydWV9KSApO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNvbklucHV0ID0gKGV2OiBFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIGlmKCBldi5kZXRhaWwgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy4jaW5wdXQudGV4dENvbnRlbnQgPSBkZWZhdWx0Rm9ybWF0KCB0aGlzLiNjdXJfY2VsbCEudGV4dENvbnRlbnQhICk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3luY1RvKHNoZWV0OiBDYWxjU2hlZXQpIHtcblxuICAgICAgICB0aGlzLiNzaGVldCA9IHNoZWV0O1xuICAgICAgICBjb25zdCBjdXJzb3IgPSB0aGlzLiNzaGVldC5jdXJzb3I7XG5cbiAgICAgICAgY3Vyc29yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChfOiBhbnkpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgY2VsbHMgPSBjdXJzb3IuY2VsbHM7XG5cbiAgICAgICAgICAgIHRoaXMuI2lucHV0LnRvZ2dsZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgY2VsbHMubGVuZ3RoICE9PSAwKTtcblxuICAgICAgICAgICAgaWYoIGNlbGxzLmxlbmd0aCA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgaWYoIHRoaXMuI2N1cl9jZWxsICE9PSBudWxsIClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLiNvbklucHV0KTtcbiAgICAgICAgICAgICAgICB0aGlzLiNjdXJfY2VsbCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiNjdXJfY2VsbCA9IGNlbGxzWzBdO1xuICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLiNvbklucHV0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy4jaW5wdXQudGV4dENvbnRlbnQgPSBkZWZhdWx0Rm9ybWF0KCB0aGlzLiNjdXJfY2VsbC5yYXdDb250ZW50ICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5MSVNTLmRlZmluZSgnY2FsYy1mb3JtdWxhJywgQ2FsY0Zvcm11bGEpOyIsImltcG9ydCB7IENhbGNTaGVldCwgZGVmYXVsdEZvcm1hdCwgVmFsdWVUeXBlIH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuZXhwb3J0IGNsYXNzIEZvcm11bGEge1xuXG4gICAgI3N0cjogc3RyaW5nO1xuICAgICNleGVjOiAoc2hlZXQ6IENhbGNTaGVldCkgPT4gVmFsdWVUeXBlO1xuICAgICNyYW5nZXM6IFRva2VuW107XG5cbiAgICBjb25zdHJ1Y3RvcihzdHI6IHN0cmluZywgZXhlYzogKHNoZWV0OiBDYWxjU2hlZXQpID0+IFZhbHVlVHlwZSwgcmFuZ2VzX3Rva2VuOiBUb2tlbltdID0gW10pIHtcblxuICAgICAgICB0aGlzLiNzdHIgPSBzdHI7XG4gICAgICAgIHRoaXMuI2V4ZWMgPSBleGVjO1xuICAgICAgICB0aGlzLiNyYW5nZXMgPSByYW5nZXNfdG9rZW47XG4gICAgfVxuICAgIFxuICAgIHJlbGF0aXZlVG8oIHNoZWV0OiBDYWxjU2hlZXQsIGRyb3c6IG51bWJlciwgZGNvbDogbnVtYmVyKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgbmV3X3JhbmdlcyA9IHRoaXMuI3Jhbmdlcy5tYXAociA9PiB7XG5cbiAgICAgICAgICAgIC8vVE9ETzogaWYgcmFuZ2UuLi5cbiAgICAgICAgICAgIGxldCBwb3MgPSBbLi4uc2hlZXQuY2VsbFBvcyggc2hlZXQuZ2V0Q2VsbHMoci52YWx1ZSkuY2VsbHNbMF0gKV07XG4gICAgXG4gICAgICAgICAgICBpZiggci52YWx1ZS5sYXN0SW5kZXhPZignJCcpIDw9IDAgKVxuICAgICAgICAgICAgICAgIHBvc1swXSArPSBkcm93O1xuICAgICAgICAgICAgaWYoIHIudmFsdWVbMF0gIT09ICckJyApXG4gICAgICAgICAgICAgICAgcG9zWzFdICs9IGRjb2w7XG5cbiAgICAgICAgICAgIHJldHVybiBgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1K3Bvc1sxXS0xKX0ke3Bvc1swXX1gO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbmV3X2Zvcm11bGEgPSBcIlwiO1xuXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy4jcmFuZ2VzLmxlbmd0aDsgKytpKSB7XG5cbiAgICAgICAgICAgIG5ld19mb3JtdWxhICs9IHRoaXMuI3N0ci5zbGljZShvZmZzZXQsIHRoaXMuI3Jhbmdlc1tpXS5iZWcpO1xuICAgICAgICAgICAgbmV3X2Zvcm11bGEgKz0gbmV3X3Jhbmdlc1tpXTtcblxuICAgICAgICAgICAgb2Zmc2V0ID0gdGhpcy4jcmFuZ2VzW2ldLmVuZDtcbiAgICAgICAgfVxuICAgICAgICBuZXdfZm9ybXVsYSArPSB0aGlzLiNzdHIuc2xpY2Uob2Zmc2V0KTtcbiAgICAgICAgXG4gICAgICAgIC8vY2FuIGJlIG9wdGltaXplZC4uLlxuICAgICAgICByZXR1cm4gcGFyc2VfZm9ybXVsYSggbmV3X2Zvcm11bGEgKTtcbiAgICB9XG5cbiAgICBnZXQgcmFuZ2VzVG9rZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNyYW5nZXM7XG4gICAgfVxuXG4gICAgZXhlYyhzaGVldDogQ2FsY1NoZWV0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNleGVjKHNoZWV0KTtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3N0cjtcbiAgICB9XG59XG5cbnR5cGUgVG9rZW4gPSB7XG4gICAgYmVnOiBudW1iZXIsXG4gICAgZW5kOiBudW1iZXIsXG4gICAgdmFsdWU6IHN0cmluZyxcbiAgICB0eXBlOiBcInN0cmluZ1wifFwibnVtYmVyXCJ8XCJjYWxsXCJ8XCJyYW5nZVwifFwib3BcIlxufVxuXG5cbmZ1bmN0aW9uIGV4dHJhY3RUb2tlbihzdHI6IHN0cmluZywgb2Zmc2V0OiBudW1iZXIpIHtcblxuICAgIHdoaWxlKCBbJyAnLCAnXFxuJywgJ1xcdCddLmluY2x1ZGVzKHN0cltvZmZzZXRdKSApIC8vIGlnbm9yZSB3aGl0ZXNwYWNlc1xuICAgICAgICArK29mZnNldDtcblxuICAgIGxldCB0b2tlbjogUGFydGlhbDxUb2tlbj4gPSB7XG4gICAgICAgIGJlZzogb2Zmc2V0XG4gICAgfTtcblxuICAgIGlmKHN0cltvZmZzZXRdID09PSAnXCInKSB7XG4gICAgICAgIHRva2VuLnR5cGUgPSBcInN0cmluZ1wiO1xuICAgICAgICB3aGlsZSggc3RyWysrb2Zmc2V0XSAhPT0gJ1wiJyAmJiBzdHJbb2Zmc2V0LTFdICE9PSAnXFxcXCcpIHtcbiAgICAgICAgICAgIGlmKG9mZnNldCsxID49IHN0ci5sZW5ndGggKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRm9ybXVsYSBwYXJzaW5nIGVycm9yJyk7XG4gICAgICAgIH1cbiAgICAgICAgKytvZmZzZXQ7XG4gICAgfSBlbHNlIGlmKCBzdHJbb2Zmc2V0XSA9PT0gJywnIHx8IChzdHJbb2Zmc2V0XSA+PSAnMCcgJiYgc3RyW29mZnNldF0gPD0gJzknKSApIHtcbiAgICAgICAgdG9rZW4udHlwZSA9IFwibnVtYmVyXCI7XG4gICAgICAgIGxldCBoYXNDb21tYSA9IGZhbHNlO1xuICAgICAgICB3aGlsZSggc3RyW29mZnNldF0gPT09ICcsJyB8fCBzdHJbb2Zmc2V0XSA+PSAnMCcgJiYgc3RyW29mZnNldF0gPD0gJzknICkge1xuXG4gICAgICAgICAgICBpZiggc3RyW29mZnNldF0gPT09ICcsJyApIHtcbiAgICAgICAgICAgICAgICBpZihoYXNDb21tYSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JtdWxhIHBhcnNpbmcgZXJyb3InKTtcbiAgICAgICAgICAgICAgICBoYXNDb21tYSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICsrb2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICB9IGVsc2UgaWYoIHN0cltvZmZzZXRdID09PSAnJCcgfHwgc3RyW29mZnNldF0gPj0gJ0EnICYmIHN0cltvZmZzZXRdIDw9ICdaJykgeyAvLyskXG4gICAgICAgIFxuICAgICAgICB3aGlsZSggb2Zmc2V0IDwgc3RyLmxlbmd0aFxuICAgICAgICAgICAgICAgICYmIChzdHJbb2Zmc2V0XSA9PT0gJyQnIHx8IHN0cltvZmZzZXRdID49ICdBJyAmJiBzdHJbb2Zmc2V0XSA8PSAnWidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBzdHJbb2Zmc2V0XSA+PSAnMCcgJiYgc3RyW29mZnNldF0gPD0gJzknXG4gICAgICAgICAgICAgICAgICAgICkgKVxuICAgICAgICAgICAgKytvZmZzZXQ7XG5cbiAgICAgICAgdG9rZW4udHlwZSA9IHN0cltvZmZzZXRdID09PSAnKCcgPyAnY2FsbCcgOiAncmFuZ2UnO1xuXG4gICAgICAgIGlmKCBzdHJbb2Zmc2V0XSA9PT0gJygnIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b2tlbi50eXBlID0gXCJvcFwiOyAvLyBvbmx5IG9uIGNoYXIgPz8/XG5cbiAgICAgICAgaWYoIHN0cltvZmZzZXQgKyAxXSA9PT0gJz0nKSAvLyA+PSAvIDw9XG4gICAgICAgICAgICArK29mZnNldDtcbiAgICAgICAgZWxzZSBpZiggc3RyW29mZnNldCArIDFdID09PSAnPicpIC8vIDw+XG4gICAgICAgICAgICArK29mZnNldDtcblxuICAgICAgICArK29mZnNldDtcbiAgICB9XG5cbiAgICB0b2tlbi5lbmQgPSBvZmZzZXQ7XG4gICAgdG9rZW4udmFsdWUgPSBzdHIuc2xpY2UodG9rZW4uYmVnLCB0b2tlbi5lbmQpO1xuXG4gICAgcmV0dXJuIHRva2VuIGFzIFJlcXVpcmVkPFRva2VuPjtcbn1cblxuY2xhc3MgTm9kZSB7XG5cbiAgICBjaGlsZHJlbjogTm9kZVtdO1xuICAgICNmY3Q6IChzaGVldDogQ2FsY1NoZWV0LCAuLi5hcmdzOihWYWx1ZVR5cGUpW10pID0+IFZhbHVlVHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKGZjdDogKHNoZWV0OiBDYWxjU2hlZXQsIC4uLmFyZ3M6KFZhbHVlVHlwZSlbXSkgPT4gVmFsdWVUeXBlLCAuLi5jaGlsZHJlbjogTm9kZVtdKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgaWYoY2hpbGRyZW4gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIldURlwiKTtcbiAgICAgICAgdGhpcy4jZmN0ID0gZmN0O1xuICAgIH1cblxuICAgIGV2YWwoc2hlZXQ6IENhbGNTaGVldCk6IFZhbHVlVHlwZSB7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSB0aGlzLmNoaWxkcmVuLm1hcCggYyA9PiBjLmV2YWwoc2hlZXQpICk7XG4gICAgICAgIHJldHVybiB0aGlzLiNmY3Qoc2hlZXQsIC4uLmFyZ3MgKTtcbiAgICB9XG4gICAgXG59XG5cbmZ1bmN0aW9uIHRvTnVtYmVyKGE6IHVua25vd24pOiBudW1iZXIge1xuXG4gICAgaWYoYSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gMDtcbiAgICByZXR1cm4gYSBhcyB1bmtub3duIGFzIG51bWJlcjtcbn1cblxuY29uc3Qgb3BfaW1wbCA9IHtcbiAgICAnJSc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24pID0+IHRvTnVtYmVyKGEpLzEwMCxcbiAgICAndS4rJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93bikgPT4gK3RvTnVtYmVyKGEpLFxuICAgICd1Li0nOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duKSA9PiAtdG9OdW1iZXIoYSksXG4gICAgJyonOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiB0b051bWJlcihhKSp0b051bWJlcihiKSxcbiAgICAnLyc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24sIGI6IHVua25vd24pID0+IHRvTnVtYmVyKGEpL3RvTnVtYmVyKGIpLFxuICAgICcrJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93biwgYjogdW5rbm93bikgPT4gdG9OdW1iZXIoYSkrdG9OdW1iZXIoYiksXG4gICAgJy0nOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiB0b051bWJlcihhKS10b051bWJlcihiKSxcbiAgICAnXic6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24sIGI6IHVua25vd24pID0+IE1hdGgucG93KHRvTnVtYmVyKGEpLHRvTnVtYmVyKGIpICksXG4gICAgJyYnOiAoXzogQ2FsY1NoZWV0LCBhOiBzdHJpbmcsIGI6IHN0cmluZykgPT4gYCR7ZGVmYXVsdEZvcm1hdChhKX0ke2RlZmF1bHRGb3JtYXQoYil9YCxcbiAgICAnPSc6ICAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSA9PT0gYixcbiAgICAnPD4nOiAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSAhPT0gYixcbiAgICAnPic6ICAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSA+IGIsXG4gICAgJz49JzogKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPj0gYixcbiAgICAnPCc6ICAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSA8IGIsXG4gICAgJzw9JzogKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPD0gYixcbn0gYXMgUmVjb3JkPHN0cmluZywgKF86IENhbGNTaGVldCwgLi4uYXJnczpWYWx1ZVR5cGVbXSkgPT4gVmFsdWVUeXBlPjtcblxuLy8gaHR0cHM6Ly9oZWxwLmxpYnJlb2ZmaWNlLm9yZy9sYXRlc3QvZW4tVVMvdGV4dC9zY2FsYy8wMS8wNDA2MDE5OS5odG1sXG5jb25zdCBvcF9wcmlvID0gW1xuICAgIFsnOiddLCAvLyByYW5nZVxuICAgIFsnISddLCAvLyByYW5nZSBpbnRlcnNlY3Rpb25cbiAgICBbJ34nXSwgLy8gcmFuZ2UgdW5pb25cbiAgICBbJ3UuKycsICd1Li0nXSwgLy8gdW5hcnkgLSBmcm9tIHJpZ2h0IHRvIGxlZnQuLi5cbiAgICBbJyUnXSwgLy8gcG9zdGZpeCwgLzEwMFxuICAgIFsnXiddLCAvLyBwb3dlclxuICAgIFsnKicsICcvJ10sXG4gICAgWycrJywgJy0nXSxcbiAgICBbJyYnXSwgLy8gc3RyaW5nIGNvbmNhdFxuICAgIFsnPScsICc8PicsICc8JywgJzw9JywgJz4nLCAnPj0nXSAvLyBjb21wYXJlXG5dO1xuXG5sZXQgb3BzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge307XG5mb3IobGV0IGkgPSAwOyBpIDwgb3BfcHJpby5sZW5ndGg7ICsraSlcbiAgICBmb3IobGV0IG9wIG9mIG9wX3ByaW9baV0gKVxuICAgICAgICBvcHNbb3BdID0gaTtcblxuZnVuY3Rpb24gdG9rZW5saXN0MlRyZWUodG9rZW5zOiBUb2tlbltdKTogTm9kZSB7XG5cbiAgICBpZiggdG9rZW5zLmxlbmd0aCA9PT0gMSkge1xuXG4gICAgICAgIGlmKCB0b2tlbnNbMF0udHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgY29uc3QgbmIgPSArdG9rZW5zWzBdLnZhbHVlLnJlcGxhY2UoJywnLCAnLicpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBOb2RlKCAoKSA9PiBuYik7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHRva2Vuc1swXS50eXBlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBjb25zdCBzdHIgPSB0b2tlbnNbMF0udmFsdWUuc2xpY2UoMSwtMSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vZGUoICgpID0+IHN0cik7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHRva2Vuc1swXS50eXBlID09PSBcInJhbmdlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTm9kZSggKHNoZWV0OiBDYWxjU2hlZXQpID0+IHtcblxuICAgICAgICAgICAgICAgIGxldCByYXcgPSBzaGVldC5nZXRDZWxscyh0b2tlbnNbMF0udmFsdWUpLmNlbGxzWzBdLnJhd0NvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgICBpZiggcmF3IGluc3RhbmNlb2YgRm9ybXVsYSlcbiAgICAgICAgICAgICAgICAgICAgcmF3ID0gcmF3LmV4ZWMoc2hlZXQpOyAvLyBUT0RPOiBjYWNoZSByZXN1bHRcblxuICAgICAgICAgICAgICAgIHJldHVybiByYXcgYXMgVmFsdWVUeXBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiPz8/XCIpO1xuICAgIH1cblxuICAgIGlmKHRva2Vuc1swXS52YWx1ZSA9PT0gJygnICYmIHRva2Vuc1t0b2tlbnMubGVuZ3RoLTFdLnZhbHVlID09PSAnKScpXG4gICAgICAgIHJldHVybiB0b2tlbmxpc3QyVHJlZSh0b2tlbnMuc2xpY2UoMSwtMSkgKTtcblxuICAgIGxldCBjdXIgPSB7XG4gICAgICAgIHByaW9yaXR5OiBvcF9wcmlvLmxlbmd0aCxcbiAgICAgICAgaWR4ICAgICA6IC0xXG4gICAgfTtcblxuICAgIGZvcihsZXQgaSA9IHRva2Vucy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICBpZiggdG9rZW5zW2ldLnR5cGUgIT09IFwib3BcIiApIC8vIGNhbGwgbm90IGhhbmRsZWQgeWV0Li4uXG4gICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICBpZiggdG9rZW5zW2ldLnZhbHVlID09PSAnKScgKSB7IC8vIGdvIHRvIGZpcnN0ICcoJ1xuICAgICAgICAgICAgaSA9IHRva2Vucy5maW5kSW5kZXgoIHQgPT4gdC50eXBlID09PSAnb3AnICYmIHQudmFsdWUgPT09ICcoJyk7XG5cbiAgICAgICAgICAgIGlmKCBpID09PSAwKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLS1pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXNzZXJ0cyBpZiB1bmFyeSBvcC5cbiAgICAgICAgaWYoIHRva2Vuc1tpXS52YWx1ZSA9PT0gJy0nIHx8IHRva2Vuc1tpXS52YWx1ZSA9PT0gJysnICkge1xuXG4gICAgICAgICAgICBpZiggaSA9PT0gMCB8fCB0b2tlbnNbaS0xXS50eXBlID09PSBcIm9wXCIgKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB1X29wID0gYHUuJHt0b2tlbnNbaV0udmFsdWV9YDtcbiAgICAgICAgICAgICAgICB0b2tlbnNbaV0udmFsdWUgPSB1X29wO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gb3BzW3Vfb3BdO1xuXG4gICAgICAgICAgICAgICAgLy8gcHJpb3JpdHkgaXMgcmV2ZXJzZWQgKyBldmFsdWF0ZWQgZnJvbSByaWdodCB0byBsZWZ0LlxuICAgICAgICAgICAgICAgIGlmKCBwcmlvcml0eSA8PSBjdXIucHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VyLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgICAgIGN1ci5pZHggICAgICA9IGk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IG9wc1t0b2tlbnNbaV0udmFsdWVdO1xuXG4gICAgICAgIC8vIHByaW9yaXR5IGlzIHJldmVyc2VkLlxuICAgICAgICBpZiggcHJpb3JpdHkgPCBjdXIucHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGN1ci5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICAgICAgY3VyLmlkeCAgICAgID0gaTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKCBjdXIuaWR4ID09PSAtMSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCc/Pz8nKTtcblxuICAgIGxldCBvcF90b2tlbiA9IHRva2Vuc1tjdXIuaWR4XTtcbiAgICBpZiggb3BfdG9rZW4udmFsdWUgPT09ICclJyApIHtcbiAgICAgICAgY29uc3QgbGVmdCAgPSB0b2tlbnMuc2xpY2UoMCwgY3VyLmlkeCk7XG4gICAgICAgIGNvbnN0IG9wID0gb3BfaW1wbFtvcF90b2tlbi52YWx1ZSBhcyBrZXlvZiB0eXBlb2Ygb3BfaW1wbF07XG4gICAgICAgIHJldHVybiBuZXcgTm9kZShcbiAgICAgICAgICAgIG9wLFxuICAgICAgICAgICAgdG9rZW5saXN0MlRyZWUobGVmdClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiggb3BfdG9rZW4udmFsdWUgPT09ICd1Li0nIHx8ICBvcF90b2tlbi52YWx1ZSA9PT0gJ3UuKycgKSB7XG5cbiAgICAgICAgY29uc3QgcmlnaHQgID0gdG9rZW5zLnNsaWNlKGN1ci5pZHgrMSk7XG4gICAgICAgIGNvbnN0IG9wID0gb3BfaW1wbFtvcF90b2tlbi52YWx1ZSBhcyBrZXlvZiB0eXBlb2Ygb3BfaW1wbF07XG4gICAgICAgIHJldHVybiBuZXcgTm9kZShcbiAgICAgICAgICAgIG9wLFxuICAgICAgICAgICAgdG9rZW5saXN0MlRyZWUocmlnaHQpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgbGVmdCAgPSB0b2tlbnMuc2xpY2UoMCwgY3VyLmlkeCk7XG4gICAgY29uc3QgcmlnaHQgPSB0b2tlbnMuc2xpY2UoY3VyLmlkeCsxKTtcblxuICAgIGNvbnN0IG9wID0gb3BfaW1wbFtvcF90b2tlbi52YWx1ZSBhcyBrZXlvZiB0eXBlb2Ygb3BfaW1wbF07XG5cbiAgICByZXR1cm4gbmV3IE5vZGUoXG4gICAgICAgIG9wLFxuICAgICAgICB0b2tlbmxpc3QyVHJlZShsZWZ0KSxcbiAgICAgICAgdG9rZW5saXN0MlRyZWUocmlnaHQpXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlX2Zvcm11bGEoc3RyOnN0cmluZykge1xuXG4gICAgbGV0IG9mZnNldCA9IDE7XG4gICAgbGV0IHRva2VucyA9IG5ldyBBcnJheTxUb2tlbj4oKTtcblxuICAgIHdoaWxlKCBvZmZzZXQgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIGxldCBjdXJUb2tlbiA9IGV4dHJhY3RUb2tlbihzdHIsIG9mZnNldCk7XG4gICAgICAgIHRva2Vucy5wdXNoKCBjdXJUb2tlbiApO1xuICAgICAgICBvZmZzZXQgPSBjdXJUb2tlbi5lbmQ7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IHRva2VubGlzdDJUcmVlKHRva2VucykhO1xuXG4gICAgY29uc3QgcmFuZ2VzID0gdG9rZW5zLmZpbHRlcih0ID0+IHQudHlwZSA9PT0gXCJyYW5nZVwiICk7XG5cbiAgICByZXR1cm4gbmV3IEZvcm11bGEoc3RyLCAoc2hlZXQ6IENhbGNTaGVldCkgPT4gbm9kZS5ldmFsKHNoZWV0KSwgcmFuZ2VzICk7XG59IiwiLy9UT0RPOiB3ZWJwYWNrIGNvbmZpZy4uLlxuaW1wb3J0IExJU1MgZnJvbSBcIi4uLy4uLy4uL2xpYnMvTElTU1wiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0LCBDZWxsTGlzdCwgZGVmYXVsdEZvcm1hdCB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbi8vVE9ETzogc3ludGF4IGhpZ2hsaWdodCA7KVxuXG5jb25zdCBjc3MgPSBgXG4gICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYgcHJlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKCAxcmVtICsgOHB4ICsgMnB4ICk7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xpYmVyYXRpb24gU2Fucyc7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5leHBvcnQgY2xhc3MgUGxhZ2VGb3JtdWxhIGV4dGVuZHMgTElTUyh7XG4gICAgY3NzXG59KSB7XG5cbiAgICAjaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoIHRoaXMuI2lucHV0ICk7XG4gICAgICAgIHRoaXMuI2lucHV0LnRvZ2dsZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJyk7XG5cbiAgICAgICAgdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldikgPT4ge1xuICAgICAgICAgICAgaWYoZXYuY29kZSAhPT0gJ0VudGVyJylcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGV2LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLiNzaGVldC5nZXRDZWxscyh0aGlzLiNpbnB1dC50ZXh0Q29udGVudCEpLmNlbGxzO1xuXG4gICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5hZGQoIC4uLnNlbGVjdGVkICk7XG5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LmN1cnNvci5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy4jc2hlZXQuY3Vyc29yLmFkZCggc2VsZWN0ZWRbMF0gKTtcblxuICAgICAgICAgICAgdGhpcy4jaW5wdXQuYmx1cigpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vVE9ETy4uLi5cbiAgICAgICAgdGhpcy4jaW5wdXQudG9nZ2xlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAvKnRoaXMuI2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcblxuICAgICAgICB9KTsqL1xuICAgIH1cblxuICAgICNzaGVldCE6IENhbGNTaGVldDtcblxuICAgIHN5bmNUbyhzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcblxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBzaGVldC5zZWxlY3Rpb247XG5cbiAgICAgICAgc2VsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChfOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gc2VsZWN0aW9uLnBsYWdlX25hbWUgPz8gXCJcIjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5MSVNTLmRlZmluZSgnY2FsYy1wbGFnZScsIFBsYWdlRm9ybXVsYSk7IiwiaW1wb3J0IHsgQ2FsY1NoZWV0LCBDZWxsIH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuZXhwb3J0IGNsYXNzIFBsYWdlU2VsZWN0b3Ige1xuXG4gICAgI3VwZGF0ZVNlbGVjdGlvbigpIHtcblxuICAgICAgICBsZXQgc2VsZWN0ZWRfY2VsbHMgPSB0aGlzLiNzaGVldC5nZXRSYW5nZSggdGhpcy4jb3JpZ19wb3MsIHRoaXMuI2ZpbmFsX3BvcyApLmNlbGxzO1xuXG4gICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5jbGVhcigpOyAvLyB3ZSBhZGQgaXQuLi5cblxuICAgICAgICBpZiggdGhpcy4jaXNDdHJsICkge1xuXG4gICAgICAgICAgICAvLyByZXN0b3JlIGluaXRpYWwgc3RhdGUuLi5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5hZGQoLi4udGhpcy4jcHJldl9zZWxlY3Rpb24pO1xuXG4gICAgICAgICAgICAvL1RPRE8gb25seSBvcmlnX3RhcmdldC4uLlxuICAgICAgICAgICAgaWYodGhpcy4jc2hlZXQuc2VsZWN0aW9uLmhhcyggLi4uc2VsZWN0ZWRfY2VsbHMgKSApXG4gICAgICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLnJlbW92ZSggLi4uc2VsZWN0ZWRfY2VsbHMgKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uYWRkKCAuLi5zZWxlY3RlZF9jZWxscyApO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uYWRkKCAuLi5zZWxlY3RlZF9jZWxscyApO1xuICAgIH1cblxuICAgICNpc0N0cmwgICAgICAgICE6IGJvb2xlYW47XG4gICAgI3NoZWV0ICAgICAgICAgIDogQ2FsY1NoZWV0O1xuICAgICNvcmlnX3RhcmdldCAgICE6IEhUTUxFbGVtZW50O1xuICAgICNvcmlnX3BvcyAgICAgICE6IFtudW1iZXIsIG51bWJlcl07XG4gICAgI2ZpbmFsX3BvcyAgICAgITogW251bWJlciwgbnVtYmVyXTtcbiAgICAjcHJldl9zZWxlY3Rpb24hOiBDZWxsW107XG5cbiAgICAjZXYycG9zKGV2OiBNb3VzZUV2ZW50KTogW251bWJlcixudW1iZXJdIHtcblxuICAgICAgICBjb25zdCBjb2xzID0gWy4uLnRoaXMuI3NoZWV0LnRib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuXTtcbiAgICAgICAgbGV0IGNvbF9pZDtcbiAgICAgICAgZm9yKGNvbF9pZCA9IGNvbHMubGVuZ3RoLTE7IGNvbF9pZCA+PSAwOyAtLWNvbF9pZCkge1xuICAgICAgICAgICAgaWYoIGV2LmNsaWVudFggPj0gY29sc1tjb2xfaWRdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnggKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCByb3dzID0gWy4uLnRoaXMuI3NoZWV0LnRib2R5LmNoaWxkcmVuXS5tYXAoIGUgPT4gZS5jaGlsZHJlblswXSApO1xuICAgICAgICBsZXQgcm93X2lkO1xuICAgICAgICBmb3Iocm93X2lkID0gcm93cy5sZW5ndGgtMTsgcm93X2lkID49IDA7IC0tcm93X2lkKSB7XG4gICAgICAgICAgICBpZiggZXYuY2xpZW50WSA+PSByb3dzW3Jvd19pZF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSApXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW3Jvd19pZCwgY29sX2lkXTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcblxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpITtcblxuICAgICAgICBjb25zdCBvbl9tb3VzZV9tb3ZlID0gKGV2OiBNb3VzZUV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuI2ZpbmFsX3BvcyA9IHRoaXMuI2V2MnBvcyhldik7XG5cbiAgICAgICAgICAgIHRoaXMuI3VwZGF0ZVNlbGVjdGlvbigpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgc2hlZXQuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldjpNb3VzZUV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIGlmKCBzaGVldC5zdGF0ZXMuY2VsbF9lZGl0LnN0YXRlID09PSB0YXJnZXQgKSAgLy8gYSBjZWxsIGJlaW5nIGVkaXRlZC5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiggISBbXCJUSFwiLCBcIlREXCJdLmluY2x1ZGVzKCB0YXJnZXQudGFnTmFtZSApICkvLyAuLi5cbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSA9PT0gXCJUSFwiICYmIHRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJcIiApIHsgLy8gbW91c2Vtb3ZlIGRvZXMgbm90aGluZy5cblxuICAgICAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5jbGVhcigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZiA9IGBBMToke3RoaXMuI3NoZWV0LnBvczJyZWYodGhpcy4jc2hlZXQubmJSb3dzLCB0aGlzLiNzaGVldC5uYkNvbHMpfWA7XG4gICAgICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmFkZCggLi4udGhpcy4jc2hlZXQuZ2V0Q2VsbHMocmVmKS5jZWxscyApO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiNpc0N0cmwgICAgICAgICA9IGV2LmN0cmxLZXk7XG4gICAgICAgICAgICB0aGlzLiNvcmlnX3RhcmdldCAgICA9IHRhcmdldDtcbiAgICAgICAgICAgIHRoaXMuI29yaWdfcG9zICAgICAgID0gdGhpcy4jZXYycG9zKGV2KTsgLy8gQ2FuIGJlIFRILi4uXG4gICAgICAgICAgICB0aGlzLiNmaW5hbF9wb3MgICAgICA9IHRoaXMuI29yaWdfcG9zO1xuICAgICAgICAgICAgdGhpcy4jcHJldl9zZWxlY3Rpb24gPSBzaGVldC5zZWxlY3Rpb24uY2VsbHMuc2xpY2UoKTtcblxuICAgICAgICAgICAgdGhpcy4jdXBkYXRlU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uX21vdXNlX21vdmUpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1haW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25fbW91c2VfbW92ZSk7XG4gICAgICAgICAgICB9LCB7b25jZTogdHJ1ZX0pO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCIvL1RPRE86IHdlYnBhY2sgY29uZmlnLi4uXG5pbXBvcnQgTElTUyBmcm9tIFwiLi4vLi4vLi4vbGlicy9MSVNTXCI7XG5cbi8vQHRzLWlnbm9yZVxuaW1wb3J0IGNzcyBmcm9tIFwiISFyYXctbG9hZGVyIS4vaW5kZXguY3NzXCI7XG5cbmV4cG9ydCB0eXBlIFZhbHVlVHlwZSA9IHN0cmluZ3xudW1iZXJ8RGF0ZXxib29sZWFuO1xuZXhwb3J0IHR5cGUgUmF3Q29udGVudFR5cGUgPSBWYWx1ZVR5cGV8Rm9ybXVsYTtcblxuZXhwb3J0IHR5cGUgQ2VsbCA9IEhUTUxUYWJsZUNlbGxFbGVtZW50ICYge1xuICAgIHJhd0NvbnRlbnQ6IFJhd0NvbnRlbnRUeXBlLFxuICAgIGZvcm1hdDogKHRoaXM6IENlbGwsIHY6IHN0cmluZ3xudW1iZXIpID0+IHN0cmluZyxcbiAgICBpc19ybzogYm9vbGVhblxufTtcblxuZnVuY3Rpb24gaXNBY3RpdmUodGFyZ2V0OiBIVE1MRWxlbWVudCkge1xuXG4gICAgcmV0dXJuIHRhcmdldC5tYXRjaGVzKCc6Zm9jdXMnKTtcbi8qXG4gICAgbGV0IGFjdGl2ZSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICB3aGlsZSggYWN0aXZlPy5zaGFkb3dSb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCApXG4gICAgICAgIGFjdGl2ZSA9IGFjdGl2ZS5zaGFkb3dSb290LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICByZXR1cm4gYWN0aXZlID09PSB0YXJnZXQ7Ki9cbn1cblxuZnVuY3Rpb24gb25JbnB1dChldjogRXZlbnQpIHtcblxuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgIC8qXG4gICAgaWYoICEgaXNBY3RpdmUodGFyZ2V0KSApIHtcbiAgICAgICAgdGFyZ2V0LmlubmVySFRNTCA9IGhpZ2hsaWdodCh0YXJnZXQudGV4dENvbnRlbnQhKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0qL1xuXG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjEyMzQ3NDEvcGxhY2UtY2FyZXQtYmFjay13aGVyZS1pdC13YXMtYWZ0ZXItY2hhbmdpbmctaW5uZXJodG1sLW9mLWEtY29udGVudGVkaXRhYmxlLWVsZW1cblxuICAgIGxldCBycmFuZ2UgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkhLmdldFJhbmdlQXQoMCk7XG4gICAgbGV0IGMgPSBycmFuZ2Uuc3RhcnRPZmZzZXQ7XG5cbiAgICAvL2xldCB0ZXh0ID0gXCJcIjtcbiAgICBsZXQgbGVuZ3RoID0gMDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFyZ2V0LmNoaWxkTm9kZXMubGVuZ3RoOyArK2kpIHtcblxuICAgICAgICBsZXQgY2hpbGQgPSB0YXJnZXQuY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgaWYoIGNoaWxkLm5vZGVUeXBlICE9PSBOb2RlLlRFWFRfTk9ERSlcbiAgICAgICAgICAgIGNoaWxkID0gY2hpbGQuY2hpbGROb2Rlc1swXTtcblxuICAgICAgICBpZiggcnJhbmdlLnN0YXJ0Q29udGFpbmVyID09PSBjaGlsZCApIHtcbiAgICAgICAgICAgIC8vdGV4dCArPSBwLmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQhLnNsaWNlKDAsIGMpO1xuICAgICAgICAgICAgbGVuZ3RoICs9IGM7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvL3RleHQgKz0gcC5jaGlsZE5vZGVzW2ldLnRleHRDb250ZW50O1xuICAgICAgICBsZW5ndGggKz0gdGFyZ2V0LmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQhLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgaW5uZXJIVE1MXG4gICAgLy90YXJnZXQuaW5uZXJIVE1MID0gaGlnaGxpZ2h0KHRhcmdldC50ZXh0Q29udGVudCEpO1xuICAgIHRhcmdldC50ZXh0Q29udGVudCA9IHRhcmdldC50ZXh0Q29udGVudDtcblxuICAgIGxldCBjaGlsZCE6IENoaWxkTm9kZTtcbiAgICBsZXQgaTtcbiAgICBmb3IoaSA9IDA7IGkgPCB0YXJnZXQuY2hpbGROb2Rlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiggbGVuZ3RoIDw9IHRhcmdldC5jaGlsZE5vZGVzW2ldLnRleHRDb250ZW50IS5sZW5ndGggKSB7XG4gICAgICAgICAgICBjaGlsZCA9IHRhcmdldC5jaGlsZE5vZGVzW2ldO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbGVuZ3RoIC09IHRhcmdldC5jaGlsZE5vZGVzW2ldLnRleHRDb250ZW50IS5sZW5ndGg7XG4gICAgfVxuXG4gICAgaWYoIGNoaWxkLm5vZGVUeXBlICE9PSBOb2RlLlRFWFRfTk9ERSlcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5jaGlsZE5vZGVzWzBdO1xuXG4gICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpITtcblxuICAgIHJhbmdlLnNldFN0YXJ0KGNoaWxkLCBsZW5ndGgpO1xuICAgIHJhbmdlLmNvbGxhcHNlKHRydWUpO1xuICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBzZWwuYWRkUmFuZ2UocmFuZ2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEZvcm1hdCh2YWx1ZTogUmF3Q29udGVudFR5cGUsIHByZWM6IG51bGx8bnVtYmVyID0gbnVsbCkge1xuXG4gICAgLy9UT0RPLi4uXG5cbiAgICBpZiggdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKVxuICAgICAgICByZXR1cm4gYCR7K3ZhbHVlLnRvUHJlY2lzaW9uKDcpfWAucmVwbGFjZSgnLicsICcsJyk7XG5cbiAgICBpZiggdHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIilcbiAgICAgICAgcmV0dXJuIHZhbHVlID8gJ1ZSQUknIDogJ0ZBVVgnO1xuXG4gICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIik7XG4gICAgfVxuICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIEZvcm11bGEpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBwYXJzZUlucHV0KCBzdHI6IHN0cmluZyApOiBSYXdDb250ZW50VHlwZSB7XG5cbiAgICBpZihzdHIgPT09ICdWUkFJJylcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgaWYoc3RyID09PSAnRkFVWCcpXG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIGlmKHN0ci50cmltKCkgPT09ICcnKVxuICAgICAgICByZXR1cm4gc3RyO1xuXG4gICAgaWYoc3RyWzBdID09PSBcIj1cIikge1xuICAgICAgICByZXR1cm4gcGFyc2VfZm9ybXVsYShzdHIpO1xuICAgIH1cblxuICAgIGxldCB0ZXN0X251bWJlciA9IE51bWJlciggc3RyLnJlcGxhY2UoJywnLCAnLicpICk7XG4gICAgaWYoICEgTnVtYmVyLmlzTmFOKCB0ZXN0X251bWJlciApIClcbiAgICAgICAgcmV0dXJuIHRlc3RfbnVtYmVyO1xuXG4gICAgY29uc3QgcGFydHMgPSBzdHIuc3BsaXQoJy8nKTtcbiAgICBpZihwYXJ0cy5sZW5ndGggPD0gMykge1xuXG4gICAgICAgIGxldCB0ZXN0X2RhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgICtwYXJ0c1syXSA/PyBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICArcGFydHNbMV0tMSxcbiAgICAgICAgICAgICtwYXJ0c1swXVxuICAgICAgICApO1xuXG4gICAgICAgIGlmKCB0ZXN0X2RhdGUudG9TdHJpbmcoKSAhPT0gXCJJbnZhbGlkIERhdGVcIiApXG4gICAgICAgICAgICByZXR1cm4gdGVzdF9kYXRlO1xuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG59XG5cbmNsYXNzIFN0YXRlPFQ+IHtcblxuICAgICNzdGF0ZSA6IFR8bnVsbCA9IG51bGw7XG4gICAgI3RhcmdldDogRXZlbnRUYXJnZXQ7XG4gICAgI25hbWUgIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IodGFyZ2V0OiBFdmVudFRhcmdldCwgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuI3RhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy4jbmFtZSAgID0gbmFtZTtcbiAgICB9XG5cbiAgICBnZXQgc3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzdGF0ZTtcbiAgICB9XG5cbiAgICBzZXQgc3RhdGUoc3RhdGU6IFR8bnVsbCkge1xuXG4gICAgICAgIGNvbnNvbGUud2FybihcInN0YXRlXCIsIHRoaXMuI3N0YXRlLCBzdGF0ZSk7XG5cbiAgICAgICAgaWYoIHRoaXMuI3N0YXRlID09PSBzdGF0ZSlcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBsZXQgcHJldl9zdGF0ZSA9IHRoaXMuI3N0YXRlO1xuICAgICAgICB0aGlzLiNzdGF0ZSA9IHN0YXRlO1xuICAgICAgICBcblxuICAgICAgICBpZiggcHJldl9zdGF0ZSAhPT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMuI3RhcmdldC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoYCR7dGhpcy4jbmFtZX1fZW5kYCwge2RldGFpbDogcHJldl9zdGF0ZX0pICk7ICAgICAgICAgICAgXG5cbiAgICAgICAgaWYoIHN0YXRlICE9PSBudWxsIClcbiAgICAgICAgICAgIHRoaXMuI3RhcmdldC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoYCR7dGhpcy4gI25hbWV9X3N0YXJ0YCwge2RldGFpbDogc3RhdGV9KSApO1xuICAgIH1cbn1cblxuY29uc3QgU3RhdGVzID0ge1xuICAgIFwiY2VsbF9lZGl0XCI6IFN0YXRlPENlbGw+LFxuICAgIFwicmVjb3B5XCIgICA6IFN0YXRlPENlbGxMaXN0PlxuIH0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjbGFzcyBDYWxjU2hlZXQgZXh0ZW5kcyBMSVNTKHtcbiAgICBjc3MsXG4gICAgYXR0cmlidXRlczogW1wiY29sc1wiLCBcInJvd3NcIiwgXCJyb1wiXVxufSkge1xuXG4gICAgc3RhdGVzID0gT2JqZWN0LmZyb21FbnRyaWVzKCBPYmplY3QuZW50cmllcyhTdGF0ZXMpLm1hcCggKFtuLHNdKSA9PiBbbiwgbmV3IHModGhpcy5ob3N0LCBuKV0gYXMgY29uc3QgKSk7XG5cbiAgICAjcGxhZ2Vfc2VsZWN0b3IgPSBuZXcgUGxhZ2VTZWxlY3Rvcih0aGlzKTtcblxuICAgIC8vVE9ETzogUk8gcHJvcCA/XG4gICAgI3NlbGVjdGlvbiA9IG5ldyBDZWxsTGlzdCh0aGlzLCBbXSk7XG4gICAgI2N1cnNvciAgICA9IG5ldyBDZWxsTGlzdCh0aGlzLCBbXSk7XG5cbiAgICAjZm9ybWF0X21uZ3IgPSBuZXcgRm9ybWF0TWFuYWdlcih0aGlzKTtcblxuICAgIGdldCBjdXJzb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjdXJzb3I7XG4gICAgfVxuICAgIGdldCBzZWxlY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzZWxlY3Rpb247XG4gICAgfVxuXG4gICAgb3ZlcnJpZGUgZ2V0IGNvbnRlbnQoKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5jb250ZW50O1xuICAgIH1cblxuICAgIHJlbW92ZUhpZ2hsaWdodHMoKSB7XG4gICAgICAgIGZvcihsZXQgaCBvZiB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhbmdlX2hpZ2hsaWdodCcpIClcbiAgICAgICAgICAgIGgucmVtb3ZlKCk7XG4gICAgfVxuICAgIHJlbW92ZUNvcHlIaWdobGlnaHQoKSB7XG4gICAgICAgIGZvcihsZXQgaCBvZiB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcHlfaGlnaGxpZ2h0JykgKVxuICAgICAgICAgICAgaC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBzZXRSZWN0KHRhcmdldDogSFRNTEVsZW1lbnQsIFt4LHksdyxoXTogcmVhZG9ubHkgW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0pIHtcblxuICAgICAgICBjb25zdCB0Ymxfb2Zmc2V0ID0gdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJykhLm9mZnNldFRvcDtcblxuICAgICAgICB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcgICAsIGAke3RibF9vZmZzZXQgKyB5fXB4YCk7XG4gICAgICAgIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eSgnaGVpZ2h0JywgYCR7aH1weGApO1xuXG4gICAgICAgIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eSgnbGVmdCcgICAsIGAke3h9cHhgKTtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KCd3aWR0aCcsIGAke3d9cHhgKTtcblxuICAgIH1cblxuICAgIGdldFJlY3QoY2VsbHM6IENlbGxMaXN0fENlbGxbXSkge1xuXG4gICAgICAgIGNlbGxzID0gXCJjZWxsc1wiIGluIGNlbGxzID8gY2VsbHMuY2VsbHMgOiBjZWxscztcblxuICAgICAgICBjb25zdCBzdGFydCA9IGNlbGxzWzBdO1xuICAgICAgICBjb25zdCBlbmQgICA9IGNlbGxzW2NlbGxzLmxlbmd0aC0xXTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBzdGFydC5vZmZzZXRMZWZ0LFxuICAgICAgICAgICAgc3RhcnQub2Zmc2V0VG9wLFxuICAgICAgICAgICAgZW5kLm9mZnNldExlZnQgKyBlbmQuY2xpZW50V2lkdGggLSBzdGFydC5vZmZzZXRMZWZ0LFxuICAgICAgICAgICAgZW5kLm9mZnNldFRvcCArIGVuZC5jbGllbnRIZWlnaHQgLSBzdGFydC5vZmZzZXRUb3AgKyAxXG4gICAgICAgIF0gYXMgY29uc3Q7XG4gICAgfVxuXG4gICAgaGlnaGxpZ2h0KHN0YXJ0OiBDZWxsLCBlbmQ6IENlbGwsIGlkX29yX2NsYXNzbGlzdDogbnVtYmVyfHN0cmluZ1tdKSB7XG4gICAgICAgIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaWYoIHR5cGVvZiBpZF9vcl9jbGFzc2xpc3QgPT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICBoaWdoLmNsYXNzTGlzdC5hZGQoJ3JhbmdlX2hpZ2hsaWdodCcsIGBoaWdobGlnaHRfJHtpZF9vcl9jbGFzc2xpc3R9YCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGhpZ2guY2xhc3NMaXN0LmFkZCggLi4uaWRfb3JfY2xhc3NsaXN0ICk7XG5cbiAgICAgICAgdGhpcy5zZXRSZWN0KGhpZ2gsIHRoaXMuZ2V0UmVjdChbc3RhcnQsIGVuZF0pICk7XG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoaGlnaCk7XG5cbiAgICAgICAgcmV0dXJuIGhpZ2g7XG4gICAgfVxuXG4gICAgcmVsYXRpdmVUbyhjZWxsOiBDZWxsLCByb3dfZGlmZjogbnVtYmVyLCBjb2xfZGlmZjogbnVtYmVyKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgW3JvdywgY29sXSA9IHRoaXMuY2VsbFBvcyhjZWxsKTtcblxuICAgICAgICByb3cgKz0gcm93X2RpZmY7XG4gICAgICAgIGNvbCArPSBjb2xfZGlmZjtcblxuICAgICAgICAvLyBmb3Igbm9ybWFsIDogZ2V0IHN0dWNrIGluc2lkZSBncmlkLlxuICAgICAgICBpZiggcm93IDwgMSlcbiAgICAgICAgICAgIHJvdyA9IDE7XG4gICAgICAgIGlmKCByb3cgPj0gdGhpcy4jdGJvZHkuY2hpbGRyZW4ubGVuZ3RoIClcbiAgICAgICAgICAgIHJvdyA9IHRoaXMuI3Rib2R5LmNoaWxkcmVuLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgaWYoIGNvbCA8IDEpXG4gICAgICAgICAgICBjb2wgPSAxO1xuICAgICAgICBpZiggY29sID49IHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW4ubGVuZ3RoIClcbiAgICAgICAgICAgIGNvbCA9IHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW4ubGVuZ3RoIC0gMTtcblxuICAgICAgICByZXR1cm4gdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlbltjb2xdIGFzIENlbGw7XG4gICAgfVxuXG4gICAgLy9UT0RPOiAyRC4uLlxuICAgICNwYXN0ZWJpbjogQ2VsbExpc3QgfCBudWxsID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGNvbnN0IGN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjdXJzb3IuY2xhc3NMaXN0LmFkZChcImN1cnNvclwiKTtcbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZChjdXJzb3IpO1xuXG4gICAgICAgIGNvbnN0IHJlY29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByZWNvcHkuY2xhc3NMaXN0LmFkZChcInJlY29weVwiKTtcbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZChyZWNvcHkpO1xuXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKSE7ICBcblxuICAgICAgICBsZXQgbGFzdF9yZWNvcHlfdGFyZ2V0OiBDZWxsfG51bGwgPSBudWxsO1xuICAgICAgICBsZXQgbGFzdF9yZWNvcHlfZGlyICAgOiBbbnVtYmVyLCBudW1iZXJdfG51bGwgPSBudWxsXG5cbiAgICAgICAgY29uc3Qgb25fcmVjb3B5X21vdmUgPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgbGV0IGNlbGxzID0gKHRoaXMuc3RhdGVzLnJlY29weS5zdGF0ZSBhcyBDZWxsTGlzdCkuY2VsbHM7XG4gICAgICAgICAgICBjb25zdCBzcmMgPSBjZWxsc1tjZWxscy5sZW5ndGgtMV07XG5cbiAgICAgICAgICAgIGxldCBwb3MgPSBzcmMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAgIGxldCBkX3B4ID0gZXYuY2xpZW50WCAtIChwb3MueCArIHBvcy53aWR0aCAvMik7XG4gICAgICAgICAgICBsZXQgZF9weSA9IGV2LmNsaWVudFkgLSAocG9zLnkgKyBwb3MuaGVpZ2h0LzIpO1xuXG4gICAgICAgICAgICBsZXQgZF94ID0gMDtcbiAgICAgICAgICAgIGxldCBkX3kgPSBNYXRoLnNpZ24oZF9weSk7XG5cbiAgICAgICAgICAgIGlmKCBNYXRoLmFicyhkX3B4KSA+IE1hdGguYWJzKGRfcHkpICkge1xuICAgICAgICAgICAgICAgIGRfeCA9IE1hdGguc2lnbihkX3B4KTtcbiAgICAgICAgICAgICAgICBkX3kgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcHJldiA9IHNyYztcbiAgICAgICAgICAgIGxldCBjdXIgID0gc3JjO1xuXG4gICAgICAgICAgICBsZXQgZGlmZl94LCBkaWZmX3k7XG5cbiAgICAgICAgICAgIGRvIHtcblxuICAgICAgICAgICAgICAgIHByZXY9IGN1cjtcbiAgICAgICAgICAgICAgICBjdXIgPSB0aGlzLnJlbGF0aXZlVG8ocHJldiwgZF95LCBkX3gpO1xuXG4gICAgICAgICAgICAgICAgaWYoIGN1ciA9PT0gcHJldilcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBsZXQgcG9zX2N1ciA9IGN1ci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICBkaWZmX3ggPSBldi5jbGllbnRYIC0gKHBvc19jdXIueCArIHBvc19jdXIud2lkdGggLzIpO1xuICAgICAgICAgICAgICAgIGRpZmZfeSA9IGV2LmNsaWVudFkgLSAocG9zX2N1ci55ICsgcG9zX2N1ci5oZWlnaHQvMik7XG5cbiAgICAgICAgICAgIH0gd2hpbGUoIGRpZmZfeCAqIGRfeCArIGRpZmZfeSAqIGRfeSA+IDAgKTtcblxuICAgICAgICAgICAgbGFzdF9yZWNvcHlfdGFyZ2V0ID0gcHJldjtcbiAgICAgICAgICAgIGxhc3RfcmVjb3B5X2RpciAgICA9IFtkX3gsZF95XTtcblxuICAgICAgICAgICAgbGV0IGJlZyA9IHNyYztcbiAgICAgICAgICAgIGxldCBlbmQgPSBwcmV2O1xuICAgICAgICAgICAgaWYoIHNyYy5vZmZzZXRMZWZ0ID4gcHJldi5vZmZzZXRMZWZ0IHx8IHNyYy5vZmZzZXRUb3AgPiBwcmV2Lm9mZnNldFRvcCApXG4gICAgICAgICAgICAgICAgW2JlZywgZW5kXSA9IFtlbmQsIGJlZ107XG5cbiAgICAgICAgICAgIC8vVE9ETzogaGlnaGxpZ2h0Li4uXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUhpZ2hsaWdodHMoKSAgICA7IC8vVE9ETy4uLlxuICAgICAgICAgICAgdGhpcy5oaWdobGlnaHQoYmVnLCBlbmQsIDEpOyAvL1RPRE8gY2xhc3MuLi5cbiAgICAgICAgfTtcblxuICAgICAgICByZWNvcHkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXYpID0+IHtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGVzLnJlY29weS5zdGF0ZSA9IHRoaXMuI3NlbGVjdGlvbjtcblxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgbWFpbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uX3JlY29weV9tb3ZlKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBbZF94LCBkX3ldID0gIGxhc3RfcmVjb3B5X2RpciE7XG5cbiAgICAgICAgICAgICAgICBsZXQgY2VsbHMgPSAodGhpcy5zdGF0ZXMucmVjb3B5LnN0YXRlIGFzIENlbGxMaXN0KS5jZWxscztcbiAgICAgICAgICAgICAgICBjb25zdCBzcmMgPSBjZWxsc1tjZWxscy5sZW5ndGgtMV07XG5cbiAgICAgICAgICAgICAgICBsZXQgbmIgPSAwO1xuXG4gICAgICAgICAgICAgICAgaWYoIGxhc3RfcmVjb3B5X3RhcmdldCAhPT0gc3JjKSB7IC8vIGNvcHkuLi5cblxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VyID0gc3JjO1xuICAgICAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICArK25iO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXIgPSB0aGlzLnJlbGF0aXZlVG8oY3VyLCBkX3ksIGRfeCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50OiBSYXdDb250ZW50VHlwZXxDZWxsID0gc3JjO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHR5cGVvZiBjb250ZW50LnJhd0NvbnRlbnQgPT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IChzcmMucmF3Q29udGVudCBhcyBudW1iZXIpICsgbmIqKGRfeCArIGRfeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKCBjb250ZW50LnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBEYXRlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcImlzIGRhdGVcIiwgbmIsIGRfeCArIGRfeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IG5ldyBEYXRlKHNyYy5yYXdDb250ZW50IGFzIERhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuc2V0RGF0ZSggY29udGVudC5nZXREYXRlKCkgKyBuYiooZF94ICsgZF95KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDZWxsTGlzdCh0aGlzLCBbY3VyXSkuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXIuY2xhc3NOYW1lID0gc3JjLmNsYXNzTmFtZTsgLy9UT0RPOiBmb3JtYXQuLi5cblxuXG4gICAgICAgICAgICAgICAgICAgIH0gd2hpbGUoIGN1ciE9PSBsYXN0X3JlY29weV90YXJnZXQgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUhpZ2hsaWdodHMoKSAgICA7IC8vVE9ETy4uLlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVzLnJlY29weS5zdGF0ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGFzdF9yZWNvcHlfdGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBsYXN0X3JlY29weV9kaXIgICAgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIG1haW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbl9yZWNvcHlfbW92ZSk7XG5cbiAgICAgICAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdyZWNvcHlfc3RhcnQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgncmVjb3B5Jyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcigncmVjb3B5X2VuZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QucmVtb3ZlKCdyZWNvcHknKTtcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLiNjdXJzb3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gdGhpcy4jY3Vyc29yLmNlbGxzO1xuICAgICAgICAgICAgaWYoIGNlbGxzLmxlbmd0aCA9PT0gMCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLnNldFJlY3QoY3Vyc29yLCB0aGlzLmdldFJlY3QoY2VsbHMpICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI3NlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXYpID0+IHtcblxuICAgICAgICAgICAgZm9yKCBsZXQgY2VsbCBvZiB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZ2hsaWdodCcpIClcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpO1xuXG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IHRoaXMuI3NlbGVjdGlvbi5jZWxscztcblxuICAgICAgICAgICAgaWYoIGNlbGxzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGZvciggbGV0IGNlbGwgb2YgY2VsbHMgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggY2VsbHMubGVuZ3RoICE9PSAxKVxuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSB0aGlzLiNjZWxsUG9zKGNlbGwpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3Rib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuW2NvbF0uY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IFt4LHksdyxoXSA9IHRoaXMuZ2V0UmVjdChjZWxscyk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0UmVjdChyZWNvcHksIFt4K3ctMiwgeStoLTIsIDUsIDVdKTtcbiAgICAgICAgICAgIC8vIG9ubHkgaWYgc2ltcGxlLi4uXG4gICAgICAgICAgICAvLyBjb25zdCBsYXN0ID0gY2VsbHNbY2VsbHMubGVuZ3RoLTFdO1xuICAgICAgICAgICAgLy8gcG9pbnRlci4uLlxuICAgICAgICB9KTtcblxuICAgICAgICAvL1RPRE86IG1vdmUgb3V0ID9cbiAgICAgICAgY29uc3QgZm9ybXVsYV9iYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybXVsYV9iYXIuY2xhc3NMaXN0LmFkZCgndG9vbGJhcicpO1xuXG4gICAgICAgICggYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBwbGFnZSA9IGF3YWl0IExJU1MuYnVpbGQoXCJjYWxjLXBsYWdlXCIpO1xuICAgICAgICAgICAgcGxhZ2Uuc3luY1RvKHRoaXMpO1xuICAgICAgICAgICAgZm9ybXVsYV9iYXIuYXBwZW5kKCBwbGFnZS5ob3N0ICk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZvcm11bGEgPSBhd2FpdCBMSVNTLmJ1aWxkKFwiY2FsYy1mb3JtdWxhXCIpO1xuICAgICAgICAgICAgZm9ybXVsYS5zeW5jVG8odGhpcyk7XG4gICAgICAgICAgICBmb3JtdWxhX2Jhci5hcHBlbmQoIGZvcm11bGEuaG9zdCApO1xuXG4gICAgICAgIH0pKCk7XG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoZm9ybXVsYV9iYXIpO1xuXG4gICAgICAgIHRoaXMuI2luaXRHcmlkKCt0aGlzLmF0dHJzLnJvd3MhLCArdGhpcy5hdHRycy5jb2xzISk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICAgICAgdGhpcy5yZW1vdmVIaWdobGlnaHRzKCk7IC8vVE9ETzogbW92ZS4uLlxuXG4gICAgICAgICAgICAvLyB0aGUgY2VsbCBpcyBiZWluZyBlZGl0ZWQuLi5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQuaGFzQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKSApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgPT09IFwiVERcIiApIHtcblxuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gdGFyZ2V0IGFzIENlbGw7XG5cbiAgICAgICAgICAgICAgICBpZihcImNlbGxcIiBpbiBjZWxsKSAvLyBmb3IgbWVyZ2VkIGNlbGxzLi4uXG4gICAgICAgICAgICAgICAgICAgIGNlbGwgPSBjZWxsLmNlbGwgYXMgQ2VsbDtcblxuICAgICAgICAgICAgICAgIC8vVE9ETzogbW92ZS4uLlxuICAgICAgICAgICAgICAgIHRoaXMuI2N1cnNvci5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuI2N1cnNvci5hZGQoY2VsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgPT09IFwiVEhcIiAmJiB0YXJnZXQudGV4dENvbnRlbnQgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5nZXRDZWxscyh0YXJnZXQudGV4dENvbnRlbnQhKS5jZWxsc1swXSBhcyBDZWxsO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jY3Vyc29yLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy4jY3Vyc29yLmFkZChjZWxsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdGhpcy4jdGJvZHkuZm9jdXMoKTsgLy8gP1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIChldikgPT4ge1xuXG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgIT09IFwiVERcIilcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGlmKCB0aGlzLmF0dHJzLnJvICE9PSBcInRydWVcIiAmJiAodGFyZ2V0IGFzIENlbGwpLmlzX3JvICE9PSB0cnVlICkge1xuICAgICAgICAgICAgICAgIHRhcmdldC50b2dnbGVBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXY6IEtleWJvYXJkRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgaWYoIHRhcmdldCA9PT0gdGhpcy4jdGJvZHkgKSB7XG4gICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09IFwiS2V5VlwiICYmIGV2LmN0cmxLZXkgJiYgdGhpcy4jcGFzdGViaW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuI3Bhc3RlYmluLmNlbGxzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNzZWxlY3Rpb24uY29udGVudCA9IGRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29weSBmb3JtYXQuLi4gVE9ETyB1dGlsaXR5IHRoaW5neS4uLlxuICAgICAgICAgICAgICAgICAgICBpZiggISBldi5zaGlmdEtleSB8fCAhIGV2LmFsdEtleSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IHRoaXMuI3Bhc3RlYmluLmNlbGxzO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHN0ID0gdGhpcy4jc2VsZWN0aW9uLmNlbGxzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgKytpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRzdFtpXS5jbGFzc05hbWUgPSBzcmNbaV0uY2xhc3NOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVE9ETzogYWRkIGZvcm1hdC4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKCAoIGV2LmtleSA9PT0gXCJjXCIgfHwgZXYua2V5ID09PSBcInhcIikgJiYgZXYuY3RybEtleSApIHtcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy4jc2VsZWN0aW9uLmNlbGxzOyAvL1RPRE86IGFzIGFycmF5Li4uXG4gICAgICAgICAgICAgICAgICAgIGxldCBoID0gdGhpcy5oaWdobGlnaHQoIHNlbGVjdGlvblswXSwgc2VsZWN0aW9uW3NlbGVjdGlvbi5sZW5ndGgtMV0sIFsnY29weV9oaWdobGlnaHQnXSApO1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBXSFkgPz8/XG4gICAgICAgICAgICAgICAgICAgIGguc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcgICAsIGAke3NlbGVjdGlvblswXS5vZmZzZXRUb3B9cHhgKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNwYXN0ZWJpbiA9IHRoaXMuI3NlbGVjdGlvbi5kZWVwQ2xvbmUoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiggZXYua2V5ID09PSBcInhcIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuI3NlbGVjdGlvbi5kZWxldGVGb3JtYXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuI3NlbGVjdGlvbi5kZWxldGVDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gXCJDb250cm9sXCIgfHwgZXYua2V5ID09PSBcIlNoaWZ0XCIgfHwgZXYua2V5ID09PSBcIkFsdFwiICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIGlnbm9yZVxuICAgICAgICAgICAgICAgIH0gaWYoIGV2LmNvZGUgPT09IFwiRGVsZXRlXCIgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uZGVsZXRlQ29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBpZiggZXYuY29kZSA9PT0gXCJFbnRlclwiICkge1xuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGVkIGVsc2V3aGVyZVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiggZXYuY29kZS5zdGFydHNXaXRoKCdBcnJvdycpICkge1xuXG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VyID0gdGhpcy5jdXJzb3IuY2VsbHM7XG4gICAgICAgICAgICAgICAgICAgIGlmKCBjdXIubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBkX3JvdyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkX2NvbCA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09ICdBcnJvd0xlZnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLS1kX2NvbDtcbiAgICAgICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09ICdBcnJvd1JpZ2h0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICsrZF9jb2w7XG4gICAgICAgICAgICAgICAgICAgIGlmKCBldi5jb2RlID09PSAnQXJyb3dVcCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAtLWRfcm93O1xuICAgICAgICAgICAgICAgICAgICBpZiggZXYuY29kZSA9PT0gJ0Fycm93RG93bicpXG4gICAgICAgICAgICAgICAgICAgICAgICArK2Rfcm93O1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0OiBDZWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiggZXYuY3RybEtleSApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByZXYgICA9IGN1clswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJzb3IgPSB0aGlzLnJlbGF0aXZlVG8ocHJldiwgZF9yb3csIGRfY29sKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHByZXYucmF3Q29udGVudCAhPT0gdW5kZWZpbmVkICYmIGN1cnNvci5yYXdDb250ZW50ICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlKCBwcmV2ICE9PSBjdXJzb3IgJiYgY3Vyc29yLnJhd0NvbnRlbnQgIT09IHVuZGVmaW5lZCkgeyAvLyB3ZSByZWFjaGVkIHRoZSBlbmQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXYgICA9IGN1cnNvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gdGhpcy5yZWxhdGl2ZVRvKHByZXYsIGRfcm93LCBkX2NvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvciA9IHByZXY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlKCBwcmV2ICE9PSBjdXJzb3IgJiYgY3Vyc29yLnJhd0NvbnRlbnQgPT09IHVuZGVmaW5lZCkgeyAvLyB3ZSByZWFjaGVkIHRoZSBlbmQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXYgICA9IGN1cnNvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gdGhpcy5yZWxhdGl2ZVRvKHByZXYsIGRfcm93LCBkX2NvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gY3Vyc29yO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSB0aGlzLnJlbGF0aXZlVG8oIGN1clswXSwgZF9yb3csIGRfY29sKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3Rib2R5LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIG5leHQuY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgLy9uZXh0LmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudCgnY2xpY2snLCB7YnViYmxlczogdHJ1ZX0pICk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZXYuY3RybEtleSkgeyAvLyBpZ25vcmUgY3RybFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgeyAvLyB3ZSBzdGFydCBlZGl0aW5nLi4uXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VyID0gdGhpcy5jdXJzb3IuY2VsbHM7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIGN1ci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJbMF0uZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiZGJsY2xpY2tcIiwge2J1YmJsZXM6IHRydWV9KSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyWzBdLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQgIT09IHRoaXMuI3Rib2R5ICYmIGV2LmNvZGUgPT09ICdFbnRlcicgJiYgZXYuc2hpZnRLZXkgKVxuICAgICAgICAgICAgICAgIHJldHVybjsgLy8gZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yLlxuXG4gICAgICAgICAgICBpZihldi5jb2RlID09PSBcIkVudGVyXCIpIHsgLy9UT0RPOiBFbnRlciBpcyBmb3IgY3VycmVudCBwbGFnZS4uLlxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUhpZ2hsaWdodHMoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGN1ciA9IHRoaXMuY3Vyc29yLmNlbGxzO1xuICAgICAgICAgICAgICAgIGlmKCBjdXIubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBsZXQgW3Jvdyxjb2xdID0gdGhpcy5jZWxsUG9zKCBjdXJbMF0gKTtcblxuICAgICAgICAgICAgICAgICsrcm93O1xuICAgICAgICAgICAgICAgIGlmKCByb3cgPj0gdGhpcy4jdGJvZHkuY2hpbGRyZW4ubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICByb3cgPSAxO1xuICAgICAgICAgICAgICAgICAgICArK2NvbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoIGNvbCA+PSB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICAgICAgY29sID0gMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgbmV4dCA9ICh0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuW2NvbF0gYXMgSFRNTEVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jdGJvZHkuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICBuZXh0LmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgLy9uZXh0LmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudCgnY2xpY2snLCB7YnViYmxlczogdHJ1ZX0pICk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy90YXJnZXQuYmx1cigpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgb25JbnB1dDIgPSAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUhpZ2hsaWdodHMoKTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGlmKGV2LmRldGFpbCAhPT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICBvbklucHV0KGV2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vVE9ETzogaGVyZS4uLlxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIChldikgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ29weUhpZ2hsaWdodCgpOyAvLyBUT0RPOiBtb3ZlIHRvIGNlbGxfZWRpdF9lbmQgP1xuXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgIT09IFwiVERcIilcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGVzLmNlbGxfZWRpdC5zdGF0ZSA9IHRhcmdldCBhcyBDZWxsO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoXCJjZWxsX2VkaXRfc3RhcnRcIiwgKGV2OiBDdXN0b21FdmVudDxDZWxsPikgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LnRvZ2dsZShcImNlbGxfZWRpdFwiLCB0cnVlKTtcblxuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGV2LmRldGFpbDtcblxuICAgICAgICAgICAgaWYoY2VsbC5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSkge1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyID0gY2VsbC5yYXdDb250ZW50LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZ2VzID0gY2VsbC5yYXdDb250ZW50LnJhbmdlc1Rva2VuO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuOiAoc3RyaW5nfEhUTUxFbGVtZW50KVtdID0gW3N0cl07XG5cbiAgICAgICAgICAgICAgICBsZXQgcmFuZ2VzX2NvbG9yczogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHt9O1xuICAgICAgICAgICAgICAgIGxldCBjdXJfb2Zmc2V0ID0gMDtcblxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByYW5nZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0ciA9IGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aC0xXSBhcyBzdHJpbmc7XG5cbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoLTFdID0gc3RyLnNsaWNlKDAsIHJhbmdlc1tpXS5iZWcgLSBjdXJfb2Zmc2V0KTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5nZV9uYW1lID0gcmFuZ2VzW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiggISAocmFuZ2VfbmFtZSBpbiByYW5nZXNfY29sb3JzKSApXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZXNfY29sb3JzW3JhbmdlX25hbWVdID0gaSU4O1xuXG4gICAgICAgICAgICAgICAgICAgIHMuY2xhc3NMaXN0LmFkZCgnZm9ybXVsYV9oaWdobGlnaHQnLCBgaGlnaGxpZ2h0XyR7cmFuZ2VzX2NvbG9yc1tyYW5nZV9uYW1lXX1gKTsgLy9UT0RPLi4uXG4gICAgICAgICAgICAgICAgICAgIHMudGV4dENvbnRlbnQgPSByYW5nZXNbaV0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goIHMgKTsgLy8gcmFuZ2UuLi5cblxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKCBzdHIuc2xpY2UocmFuZ2VzW2ldLmVuZCAtIGN1cl9vZmZzZXQpICk7XG4gICAgICAgICAgICAgICAgICAgIGN1cl9vZmZzZXQgPSByYW5nZXNbaV0uZW5kO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNlbGwucmVwbGFjZUNoaWxkcmVuKCAuLi5jaGlsZHJlbiApO1xuXG4gICAgICAgICAgICAgICAgZm9yKGxldCByYW5nZSBpbiByYW5nZXNfY29sb3JzICkge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdldENlbGxzKHJhbmdlKS5jZWxscztcblxuICAgICAgICAgICAgICAgICAgICBsZXQgYmVnID0gY2VsbFswXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZCA9IGNlbGxbY2VsbC5sZW5ndGgtMV07XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWdobGlnaHQoYmVnLCBlbmQsIHJhbmdlc19jb2xvcnNbcmFuZ2VdKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgb25JbnB1dDIgKTsgLy8gcmVtb3ZlIGNvbG9ycy4uLlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gZGVmYXVsdEZvcm1hdChjZWxsLnJhd0NvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNlbGxfZWRpdF9lbmRcIiwgKGV2OiBDdXN0b21FdmVudDxDZWxsPikgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LnRvZ2dsZShcImNlbGxfZWRpdFwiLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBldi5kZXRhaWw7XG5cbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIG9uSW5wdXQyKTsgLy8gdG8gYmUgc2FmZVxuICAgICAgICAgICAgY2VsbC50b2dnbGVBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgZmFsc2UpO1xuXG4gICAgICAgICAgICBuZXcgQ2VsbExpc3QodGhpcywgW2NlbGxdKS5jb250ZW50ID0gY2VsbC50ZXh0Q29udGVudCE7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICAgICAgICAvLyBsZWF2ZVxuICAgICAgICAgICAgdGhpcy4jc2VsZWN0aW9uLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLiNjdXJzb3IuY2xlYXIoKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGV2ID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVIaWdobGlnaHRzKCk7IC8vIFRPRE86IG9ubHkgY2VsbF9lZGl0ID8/XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSAhPT0gXCJURFwiKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5zdGF0ZXMuY2VsbF9lZGl0LnN0YXRlID0gbnVsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHQgPSB0aGlzLiN0Ym9keS5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpO1xuICAgIH1cblxuICAgIGNlbGxQb3MoY2VsbDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NlbGxQb3MoY2VsbCk7XG4gICAgfVxuXG4gICAgI2NlbGxQb3MoY2VsbDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQpIHtcblxuICAgICAgICBpZiggXCJwb3NcIiBpbiBjZWxsKVxuICAgICAgICAgICAgcmV0dXJuIGNlbGwucG9zIGFzIFtudW1iZXIsIG51bWJlcl07XG5cbiAgICAgICAgY29uc3QgY29sID0gWy4uLmNlbGwucGFyZW50RWxlbWVudCEuY2hpbGRyZW5dLmZpbmRJbmRleCggYyA9PiBjID09PSBjZWxsKTtcbiAgICAgICAgY29uc3Qgcm93ID0gWy4uLmNlbGwucGFyZW50RWxlbWVudCEucGFyZW50RWxlbWVudCEuY2hpbGRyZW5dLmZpbmRJbmRleCggciA9PiByID09PSBjZWxsLnBhcmVudEVsZW1lbnQhKTtcblxuICAgICAgICByZXR1cm4gW3JvdywgY29sXSBhcyBjb25zdDtcbiAgICB9XG5cbiAgICAjdGJvZHkhOiBIVE1MVGFibGVTZWN0aW9uRWxlbWVudDtcbiAgICBnZXQgdGJvZHkoKSB7IHJldHVybiB0aGlzLiN0Ym9keTsgfVxuXG4gICAgcmVzaXplKG5icm93czogbnVtYmVyLCBuYmNvbHM6IG51bWJlcikge1xuXG4gICAgICAgIGNvbnN0IGNvbF9odG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgY29sX2h0bWwuYXBwZW5kKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpICk7XG5cbiAgICAgICAgY29uc3QgdGJvZHkgPSB0aGlzLiN0Ym9keTtcbiAgICAgICAgdGJvZHkucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICAgICAgZm9yKGxldCBjb2wgPSAwOyBjb2wgPCAgbmJjb2xzIDsgKytjb2wpIHtcbiAgICAgICAgICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICAgICAgICAgIHRoLnRleHRDb250ZW50ID0gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGNvbCk7XG4gICAgICAgICAgICBjb2xfaHRtbC5hcHBlbmQodGgpO1xuICAgICAgICB9XG4gICAgICAgIHRib2R5LmFwcGVuZChjb2xfaHRtbCk7XG5cbiAgICAgICAgZm9yKGxldCByb3cgPSAwOyByb3cgPCBuYnJvd3M7ICsrcm93KSB7XG4gICAgICAgICAgICBjb25zdCByb3dfaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgICAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICB0aC50ZXh0Q29udGVudCA9IGAke3JvdysxfWA7XG4gICAgICAgICAgICByb3dfaHRtbC5hcHBlbmQodGgpO1xuXG4gICAgICAgICAgICBmb3IobGV0IGNvbCA9IDA7IGNvbCA8ICBuYmNvbHMgOyArK2NvbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpIGFzIENlbGw7XG4gICAgICAgICAgICAgICAgLy9jZWxsLnRvZ2dsZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJyk7XG4gICAgICAgICAgICAgICAgY2VsbC5mb3JtYXQgPSBkZWZhdWx0Rm9ybWF0O1xuICAgICAgICAgICAgICAgIHJvd19odG1sLmFwcGVuZCggY2VsbCApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGJvZHkuYXBwZW5kKHJvd19odG1sKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNpbml0R3JpZChuYnJvd3M6IG51bWJlciwgbmJjb2xzOiBudW1iZXIpIHtcblxuICAgICAgICBjb25zdCBpc19ybyA9IHRoaXMuYXR0cnMucm8gPT09IFwidHJ1ZVwiO1xuXG4gICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICAgICAgY29uc3QgdGJvZHkgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcbiAgICAgICAgdGhpcy4jdGJvZHkgPSB0Ym9keTtcblxuICAgICAgICB0aGlzLiN0Ym9keS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcblxuICAgICAgICB0aGlzLnJlc2l6ZShuYnJvd3MsIG5iY29scyk7XG5cbiAgICAgICAgdGFibGUuYXBwZW5kKHRib2R5KTtcbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCh0YWJsZSk7XG4gICAgfVxuXG4gICAgZ2V0UmFuZ2UoZnJvbTogcmVhZG9ubHlbbnVtYmVyLG51bWJlcl0sIHRvOiByZWFkb25seVtudW1iZXIsbnVtYmVyXSA9IGZyb20pOiBDZWxsTGlzdCB7XG5cbiAgICAgICAgbGV0IGJlZ19yb3cgPSBmcm9tWzBdIHx8IDE7XG4gICAgICAgIGxldCBiZWdfY29sID0gZnJvbVsxXSB8fCAxO1xuXG4gICAgICAgIGxldCBlbmRfcm93ID0gZnJvbVswXSA9PT0gMCA/IHRoaXMubmJSb3dzIDogdG9bMF07XG4gICAgICAgIGxldCBlbmRfY29sID0gZnJvbVsxXSA9PT0gMCA/IHRoaXMubmJDb2xzIDogdG9bMV07XG5cbiAgICAgICAgaWYoIGVuZF9yb3cgPCBiZWdfcm93IClcbiAgICAgICAgICAgIFtiZWdfcm93LCBlbmRfcm93XSA9IFtlbmRfcm93LCBiZWdfcm93XTtcbiAgICAgICAgaWYoIGVuZF9jb2wgPCBiZWdfY29sIClcbiAgICAgICAgICAgIFtiZWdfY29sLCBlbmRfY29sXSA9IFtlbmRfY29sLCBiZWdfY29sXTtcblxuICAgICAgICBjb25zdCBjZWxscyA9IG5ldyBBcnJheTxDZWxsPiggKGVuZF9yb3cgLSBiZWdfcm93ICsgMSkgKiAoZW5kX2NvbCAtIGJlZ19jb2wgKyAxKSApO1xuXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBmb3IobGV0IGkgPSBiZWdfcm93OyBpIDw9IGVuZF9yb3c7ICsraSApXG4gICAgICAgICAgICBmb3IobGV0IGogPSBiZWdfY29sOyBqIDw9IGVuZF9jb2w7ICsraiApXG4gICAgICAgICAgICAgICAgY2VsbHNbb2Zmc2V0KytdID0gdGhpcy50Ym9keS5jaGlsZHJlbltpXS5jaGlsZHJlbltqXSBhcyBDZWxsO1xuXG4gICAgICAgIHJldHVybiBuZXcgQ2VsbExpc3QodGhpcywgY2VsbHMpO1xuICAgIH1cblxuICAgIGdldENlbGxzKGNlbGw6IHN0cmluZyk6IENlbGxMaXN0O1xuICAgIGdldENlbGxzKHJvd19pZDogbnVtYmVyLCBjb2xfaWQ6IG51bWJlcik6IENlbGxMaXN0O1xuICAgIGdldENlbGxzKGNlbGxfb3Jfcm93aWQ6IG51bWJlcnxzdHJpbmcsIGNvbF9pZD86IG51bWJlcikge1xuXG4gICAgICAgIGxldCByb3dfaWQgPSBjZWxsX29yX3Jvd2lkO1xuICAgICAgICBpZiggdHlwZW9mIGNlbGxfb3Jfcm93aWQgPT09IFwic3RyaW5nXCIpIHtcblxuICAgICAgICAgICAgY2VsbF9vcl9yb3dpZCA9IGNlbGxfb3Jfcm93aWQucmVwbGFjZUFsbCgnJCcsICcnKTtcblxuICAgICAgICAgICAgaWYoIGNlbGxfb3Jfcm93aWQuaW5jbHVkZXMoJzonKSApIHsvLyByYW5nZVxuXG4gICAgICAgICAgICAgICAgbGV0IFtiZWcsIGVuZF0gPSBjZWxsX29yX3Jvd2lkLnNwbGl0KCc6Jyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBiX3Jvd19pZCA9ICtiZWdbMV07XG4gICAgICAgICAgICAgICAgY29uc3QgYl9jb2xfaWQgPSBiZWcuY2hhckNvZGVBdCgwKSArIDEgLSA2NTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGVfcm93X2lkID0gK2VuZFsxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBlX2NvbF9pZCA9IGVuZC5jaGFyQ29kZUF0KDApICsgMSAtIDY1O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbHMgPSBuZXcgQXJyYXkoIChlX2NvbF9pZC1iX2NvbF9pZCkgKiAoZV9yb3dfaWQgLSBiX3Jvd19pZCkgKTtcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgICAgICAgICBmb3IobGV0IHIgPSBiX3Jvd19pZDsgciA8PSAgZV9yb3dfaWQ7ICsrcilcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBjID0gYl9jb2xfaWQ7IGMgPD0gIGVfY29sX2lkOyArK2MpXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tvZmZzZXQrK10gPSB0aGlzLiN0Ym9keS5jaGlsZHJlbltyXS5jaGlsZHJlbltjXSBhcyBDZWxsO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDZWxsTGlzdCh0aGlzLCBjZWxscyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHRoaXMgaXMgYSBmdWxsIGxpbmUuLi5cbiAgICAgICAgICAgIGlmKCBjZWxsX29yX3Jvd2lkWzBdID49ICcwJyAmJiBjZWxsX29yX3Jvd2lkWzBdIDw9ICc5JyApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDZWxscyhgQSR7Y2VsbF9vcl9yb3dpZH06JHt0aGlzLnBvczJyZWYoK2NlbGxfb3Jfcm93aWQsIHRoaXMubmJDb2xzKX1gKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiggY2VsbF9vcl9yb3dpZFtjZWxsX29yX3Jvd2lkLmxlbmd0aC0xXSA8ICcwJyB8fCBjZWxsX29yX3Jvd2lkW2NlbGxfb3Jfcm93aWQubGVuZ3RoLTFdID4gJzknICkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybiggYCR7Y2VsbF9vcl9yb3dpZH0xOiR7Y2VsbF9vcl9yb3dpZH0ke3RoaXMubmJSb3dzfWAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDZWxscyhgJHtjZWxsX29yX3Jvd2lkfTE6JHtjZWxsX29yX3Jvd2lkfSR7dGhpcy5uYlJvd3N9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJvd19pZCA9ICtjZWxsX29yX3Jvd2lkWzFdO1xuICAgICAgICAgICAgY29sX2lkID0gY2VsbF9vcl9yb3dpZC5jaGFyQ29kZUF0KDApICsgMSAtIDY1O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuI3Rib2R5LmNoaWxkcmVuWytyb3dfaWRdLmNoaWxkcmVuW2NvbF9pZCFdIGFzIENlbGw7XG4gICAgICAgIHJldHVybiBuZXcgQ2VsbExpc3QodGhpcywgW2NlbGxdKTtcbiAgICB9XG5cbiAgICByZWYycG9zKHJlZjogc3RyaW5nKTogW251bWJlciwgbnVtYmVyXSB7XG4gICAgICAgIC8vVE9ETy4uLlxuICAgICAgICBjb25zdCByb3cgPSArcmVmW3JlZi5sZW5ndGggLSAxXTtcbiAgICAgICAgY29uc3QgY29sID0gcmVmLmNoYXJDb2RlQXQoMCkgLSA2NSArIDE7XG5cbiAgICAgICAgcmV0dXJuIFtyb3csIGNvbF07XG4gICAgfVxuICAgIHBvczJyZWYocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1K2NvbC0xKX0ke3Jvd31gO1xuICAgIH1cbiAgICBnZXQgbmJSb3dzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jdGJvZHkuY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgZ2V0IG5iQ29scygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Rib2R5LmZpcnN0RWxlbWVudENoaWxkIS5jaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgICNpc1VwZGF0aW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiggdGhpcy4jaXNVcGRhdGluZyA9PT0gdHJ1ZSApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuI2lzVXBkYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgY2VsbHMgPSB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbDxDZWxsPigndGQnKTtcbiAgICAgICAgICAgIGZvcihsZXQgY2VsbCBvZiBjZWxscykge1xuXG4gICAgICAgICAgICAgICAgaWYoIGNlbGwucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEgKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGNlbGwucmF3Q29udGVudC5leGVjKHRoaXMpOyAvL1RPRE8uLi5cblxuICAgICAgICAgICAgICAgICAgICAvL1RPRE86IGZhY3Rvcml6ZS4uLlxuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZTogc3RyaW5nID0gdHlwZW9mIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBEYXRlIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IChjZWxsIGFzIGFueSkuZm9ybWF0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4jaXNVcGRhdGluZyA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENlbGxMaXN0IGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuXG4gICAgI3NoZWV0OiBDYWxjU2hlZXQ7XG4gICAgI2NlbGxzOiBDZWxsW107XG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCwgY2VsbHM6IENlbGxbXSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLiNjZWxscyA9IGNlbGxzO1xuICAgICAgICB0aGlzLiNzaGVldCA9IHNoZWV0O1xuICAgIH1cblxuICAgIGdldCBwbGFnZV9uYW1lKCkge1xuXG4gICAgICAgIGlmKCB0aGlzLiNjZWxscy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgaWYoIHRoaXMuI2NlbGxzLmxlbmd0aCA9PT0gMSApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4jc2hlZXQucG9zMnJlZiggLi4udGhpcy4jc2hlZXQuY2VsbFBvcyh0aGlzLiNjZWxsc1swXSkgKTtcblxuICAgICAgICBsZXQgY2VsbHMgPSB0aGlzLiNjZWxscy5tYXAoIGMgPT4gdGhpcy4jc2hlZXQuY2VsbFBvcyhjKSApLnNvcnQoIChhLGIpID0+IHtcbiAgICAgICAgICAgIGlmKCBhWzBdICE9PSBiWzBdIClcbiAgICAgICAgICAgICAgICByZXR1cm4gYVswXSAtIGJbMF07XG4gICAgICAgICAgICByZXR1cm4gYVsxXSAtIGJbMV07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtaW4gPSBjZWxsc1swXTtcbiAgICAgICAgbGV0IG1heCA9IGNlbGxzW2NlbGxzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIGxldCBuYl9jb2xzID0gbWF4WzFdIC0gbWluWzFdICsgMTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICBpZiggY2VsbHNbaV1bMF0gIT09IE1hdGguZmxvb3IoaS9uYl9jb2xzKSttaW5bMF0gJiYgY2VsbHNbaV1bMV0gIT09IChpJW5iX2NvbHMpKyBtaW5bMV0gKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICByZXR1cm4gYCR7dGhpcy4jc2hlZXQucG9zMnJlZiguLi5taW4pfToke3RoaXMuI3NoZWV0LnBvczJyZWYoLi4ubWF4KX1gO1xuICAgIH1cblxuICAgIGdldCBjZWxscygpOiBDZWxsW10ge1xuICAgICAgICByZXR1cm4gdGhpcy4jY2VsbHM7XG4gICAgfVxuICAgIGdldCBzaGVldCgpOiBDYWxjU2hlZXQge1xuICAgICAgICByZXR1cm4gdGhpcy4jc2hlZXQ7XG4gICAgfVxuXG4gICAgdG9nZ2xlRm9ybWF0KG5hbWU6IHN0cmluZ3woKHY6IGFueSwgcHJlYzogbnVtYmVyfG51bGwpID0+IHN0cmluZykgKSB7XG4gICAgICAgIGxldCBmID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQodGhpcyk7XG5cbiAgICAgICAgaWYoIHR5cGVvZiBuYW1lID09PSBcImZ1bmN0aW9uXCIpIHtcblxuICAgICAgICAgICAgbGV0IGlzRm9ybWF0ID0gZi5nZXRQcm9wZXJ0eShcImZvcm1hdFwiKSA9PT0gbmFtZTtcblxuICAgICAgICAgICAgdGhpcy5mb3JtYXQoe2Zvcm1hdDogaXNGb3JtYXQgPyBudWxsIDogbmFtZSB9KTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mb3JtYXQoe1tuYW1lXTogZi5nZXRQcm9wZXJ0eShuYW1lKSAhPT0gdHJ1ZX0pO1xuICAgIH1cblxuICAgIGZvcm1hdCguLi5mOiAoKCAodjogYW55LCBwcmVjOiBudW1iZXJ8bnVsbCkgPT4gc3RyaW5nICl8c3RyaW5nfEZvcm1hdHxSZWNvcmQ8c3RyaW5nLCBhbnk+KVtdKSB7XG5cbiAgICAgICAgaWYoIGYubGVuZ3RoID4gMSApIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9UT0RPLi4uLlxuICAgICAgICAgICAgZiA9IE9iamVjdC5mcm9tRW50cmllcyggZi5tYXAoIGUgPT4gW2UsIHRydWVdICkgKTtcblxuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIGYgPSBmWzBdO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgZiA9PT0gXCJmdW5jdGlvblwiIClcbiAgICAgICAgICAgIGYgPSB7XCJmb3JtYXRcIjogZn07XG5cbiAgICAgICAgaWYodHlwZW9mIGYgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgZiA9IHtbZl06IHRydWV9O1xuXG4gICAgICAgIGlmKCAhIChmIGluc3RhbmNlb2YgRm9ybWF0KSApXG4gICAgICAgICAgICBmID0gbmV3IEZvcm1hdChmKTtcblxuICAgICAgICBmLmFwcGx5VG8odGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0IGNvbnRlbnQoKTogKFJhd0NvbnRlbnRUeXBlKVtdIHtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBuZXcgQXJyYXkodGhpcy4jY2VsbHMubGVuZ3RoKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuI2NlbGxzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgY29udGVudFtpXSA9IHRoaXMuI2NlbGxzW2ldLnJhd0NvbnRlbnQhO1xuXG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH1cblxuICAgIGRlbGV0ZUZvcm1hdCgpIHtcbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIHRoaXMuI2NlbGxzKSAvL1RPRE8gYWRkIGhvYyBmb3JtYXQuLi5cbiAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gJyc7XG4gICAgfVxuXG4gICAgZGVsZXRlQ29udGVudCgpIHtcblxuICAgICAgICBmb3IobGV0IGNlbGwgb2YgdGhpcy4jY2VsbHMpIHtcbiAgICAgICAgICAgIGNlbGwucmF3Q29udGVudCA9IHVuZGVmaW5lZCBhcyBhbnk7XG4gICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXR5cGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NoZWV0LnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHNldCBjb250ZW50KGNvbnRlbnQ6IENlbGx8UmF3Q29udGVudFR5cGV8KFJhd0NvbnRlbnRUeXBlfENlbGwpW10pIHtcblxuICAgICAgICBpZiggQXJyYXkuaXNBcnJheShjb250ZW50KSApIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb250ZW50Lmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgIG5ldyBDZWxsTGlzdCh0aGlzLiNzaGVldCwgW3RoaXMuI2NlbGxzW2ldXSApLmNvbnRlbnQgPSBjb250ZW50W2ldO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiggdHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgY29udGVudCA9IHBhcnNlSW5wdXQoY29udGVudCk7XG5cbiAgICAgICAgbGV0IHJhd192YWwgPSBjb250ZW50IGluc3RhbmNlb2YgSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPyBjb250ZW50LnJhd0NvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjb250ZW50O1xuXG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiB0aGlzLiNjZWxscykge1xuXG4gICAgICAgICAgICBpZihjb250ZW50IGluc3RhbmNlb2YgSFRNTFRhYmxlQ2VsbEVsZW1lbnQgJiYgY29udGVudC5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSApIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCB2ID0gY29udGVudC5yYXdDb250ZW50O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZHN0ID0gdGhpcy4jc2hlZXQuY2VsbFBvcyggY2VsbCApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IHRoaXMuI3NoZWV0LmNlbGxQb3MoY29udGVudClcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBbIGRzdFswXSAtIHNyY1swXSwgZHN0WzFdIC0gc3JjWzFdXSBhcyBjb25zdDtcblxuICAgICAgICAgICAgICAgIHJhd192YWwgPSB2LnJlbGF0aXZlVG8oIHRoaXMuI3NoZWV0LCAuLi5kaWZmICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNlbGwucmF3Q29udGVudCA9IHJhd192YWw7XG5cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHJhd192YWw7XG4gICAgICAgICAgICBpZiggcmF3X3ZhbCBpbnN0YW5jZW9mIEZvcm11bGEpXG4gICAgICAgICAgICAgICAgdmFsdWUgPSByYXdfdmFsLmV4ZWModGhpcy4jc2hlZXQpOyAvL1RPRE8uLi5cblxuICAgICAgICAgICAgbGV0IHR5cGU6IHN0cmluZyA9IHR5cGVvZiB2YWx1ZTtcbiAgICAgICAgICAgIGlmKCB0eXBlID09PSBcIm9iamVjdFwiICYmIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSApXG4gICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIjtcblxuICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IChjZWxsIGFzIGFueSkuZm9ybWF0KHZhbHVlKTtcbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCB0eXBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NoZWV0LnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHNldFJPKGlzX3JvOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBmb3IobGV0IGNlbGwgb2YgdGhpcy4jY2VsbHMpXG4gICAgICAgICAgICBjZWxsLmlzX3JvID0gaXNfcm87XG4gICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGhhcyguLi5jZWxsczogQ2VsbFtdKSB7XG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiBjZWxscylcbiAgICAgICAgICAgIGlmKCAhIHRoaXMuI2NlbGxzLmluY2x1ZGVzKGNlbGwpIClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJlbW92ZSguLi5jZWxsczogQ2VsbFtdKSB7XG4gICAgICAgIHRoaXMuI2NlbGxzID0gdGhpcy4jY2VsbHMuZmlsdGVyKCBjID0+ICEgY2VsbHMuaW5jbHVkZXMoYykgKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcbiAgICB9XG5cbiAgICBhZGQoLi4uY2VsbHM6IENlbGxbXSkge1xuXG4gICAgICAgIHRoaXMuI2NlbGxzLnB1c2goLi4uY2VsbHMpXG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy4jY2VsbHMubGVuZ3RoID0gMDtcblxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSApO1xuICAgIH1cblxuXG4gICAgZGVlcENsb25lKCkge1xuXG4gICAgICAgIGxldCBjZWxscyA9IHRoaXMuI2NlbGxzLm1hcCggYyA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbG9uZSA9IGMuY2xvbmVOb2RlKHRydWUpIGFzIENlbGw7XG5cbiAgICAgICAgICAgIGNsb25lLnJhd0NvbnRlbnQgPSBjLnJhd0NvbnRlbnQ7XG4gICAgICAgICAgICBjbG9uZS5mb3JtYXQgICAgID0gYy5mb3JtYXQ7XG4gICAgICAgICAgICAoY2xvbmUgYXMgYW55KS5wb3MgICAgICAgID0gdGhpcy4jc2hlZXQuY2VsbFBvcyhjKTtcblxuICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBuZXcgQ2VsbExpc3QodGhpcy4jc2hlZXQsIGNlbGxzKTtcbiAgICB9XG59XG5cbi8vVE9ETy4uLlxuaW1wb3J0IFwiLi9mb3JtdWxhX2VkaXRvclwiO1xuaW1wb3J0IFwiLi9wbGFnZV9lZGl0b3JcIjtcbmltcG9ydCB7IEZvcm11bGEsIHBhcnNlX2Zvcm11bGEgfSBmcm9tIFwiLi9mb3JtdWxhX3BhcnNlclwiO1xuaW1wb3J0IHsgUGxhZ2VTZWxlY3RvciB9IGZyb20gXCIuL3BsYWdlX3NlbGVjdG9yXCI7XG5pbXBvcnQgeyBGb3JtYXQsIEZvcm1hdE1hbmFnZXIgfSBmcm9tIFwiLi9mb3JtYXRcIjtcblxuTElTUy5kZWZpbmUoJ2NhbGMtc2hlZXQnLCBDYWxjU2hlZXQpOyIsImV4cG9ydCBkZWZhdWx0IFtcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIlIgMS0wMSBUYWJsZXVyIGV0IFJlcG9ydGluZ1wiLFxuICAgICAgICBzbmFtZTogXCJSMS0wMSBUYWJsZXVyXCIsXG4gICAgICAgIHBhdGggOiBcIlIxLTAxXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJDTVwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiQ01cIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIkNNMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIkNNMlwiXG4gICAgICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiVFBcIixcbiAgICAgICAgICAgICAgICBwYXRoOiBcIlRQXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgXCJUUDFcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lIDogXCJSIDEtMDIgQmFzZXMgZGUgRG9ubsOpZXMgUmVsYXRpb25uZWxsZXMgMVwiLFxuICAgICAgICBzbmFtZTogXCJSMS0wMiBCRFIxXCIsXG4gICAgICAgIHBhdGggOiBcIlIxLTAyXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBcIkNNXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJUUFwiICxcbiAgICAgICAgICAgICAgICBwYXRoIDogXCJUUFwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiVFAxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFAyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFAzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFA0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFA1XCJcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG5dO1xuXG5leHBvcnQgY29uc3Qgcm9vdF9wYXRoID0gW1wibG9jYWxob3N0XCIsIFwiMTI3LjAuMC4xXCJdLmluY2x1ZGVzKGxvY2F0aW9uLmhvc3RuYW1lKSA/IFwiL2Rpc3QvZGV2L3BhZ2VzL1wiIDogXCIvQ291cnMvZGlzdC9kZXYvcGFnZXMvXCI7IiwiXG5pbXBvcnQgcGFnZXMsIHtyb290X3BhdGh9IGZyb20gXCIuL2NvbnRlbnRcIjtcblxuLypcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmVwcmludCcsICgpID0+IHtcbiAgLy8uLi5cbn0pO1xuKi9cblxuLy9UT0RPOiBsaW5rcy4uLlxuY29uc3QgbWFpbiAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikhO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKSE7XG5cbmNvbnN0IHRpdGxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFwiaDEsIGgyLCBoMywgaDRcIik7XG5cbnR5cGUgTm9kZSA9IHtcbiAgICBodG1sICAgIDogSFRNTEVsZW1lbnQsXG4gICAgbGV2ZWwgICA6IG51bWJlcixcbiAgICBwYXJlbnQgIDogbnVsbHxOb2RlLFxuICAgIGNoaWxkcmVuOiBOb2RlW11cbn07XG5cbmNvbnN0IGh0cmVlOiBOb2RlID0ge1xuICAgIGh0bWwgICAgOiBtYWluLFxuICAgIGxldmVsICAgOiAwLFxuICAgIHBhcmVudCAgOiBudWxsLFxuICAgIGNoaWxkcmVuOiBbXSxcbn07XG5sZXQgaHRyZWVfY3Vyc29yID0gaHRyZWU7XG5mb3IobGV0IHRpdGxlIG9mIHRpdGxlcykge1xuICAgIGNvbnN0IGxldmVsID0gK3RpdGxlLnRhZ05hbWUuc2xpY2UoMSk7XG4gICAgXG4gICAgd2hpbGUoIGxldmVsIDw9IGh0cmVlX2N1cnNvci5sZXZlbCApXG4gICAgICAgIGh0cmVlX2N1cnNvciA9IGh0cmVlX2N1cnNvci5wYXJlbnQhO1xuXG4gICAgY29uc3QgZWxlbTogTm9kZSA9IHtcbiAgICAgICAgaHRtbDogdGl0bGUsXG4gICAgICAgIGxldmVsLFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgIHBhcmVudDogaHRyZWVfY3Vyc29yXG4gICAgfTtcblxuXG4gICAgaHRyZWVfY3Vyc29yLmNoaWxkcmVuLnB1c2goZWxlbSk7XG5cbiAgICBodHJlZV9jdXJzb3IgPSBlbGVtO1xufVxuXG5mdW5jdGlvbiBzZWFyY2hDdXJIZWFkZXIoaHRyZWU6IE5vZGUsIHBvc2l0aW9uOiBudW1iZXIpOiBudWxsIHwgTm9kZSB7XG5cbiAgICBjb25zdCBoZWFkZXJzID0gaHRyZWUuY2hpbGRyZW47XG5cbiAgICBmb3IobGV0IGkgPSBoZWFkZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKVxuICAgICAgICBpZiggaGVhZGVyc1tpXS5odG1sLm9mZnNldFRvcCA8PSBwb3NpdGlvbiArIDMyIClcbiAgICAgICAgICAgIHJldHVybiBzZWFyY2hDdXJIZWFkZXIoaGVhZGVyc1tpXSwgcG9zaXRpb24pID8/IGhlYWRlcnNbaV07XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuY29uc3QgaGlkID0gW1xuICAgIFtdLFxuICAgIFtcIklcIiwgXCJJSVwiLCBcIklJSVwiLCBcIklWXCJdLFxuICAgIFtcIjFcIiwgXCIyXCIsXCIzXCIsXCI1XCIsXCI2XCIsXCI3XCIsXCI4XCIsXCI5XCJdLFxuICAgIFtcImFcIiwgXCJiXCIsXCJjXCIsXCJkXCIsXCJlXCIsXCJmXCIsXCJnXCIsXCJoXCJdLFxuXVxuXG5mdW5jdGlvbiBnZXRUaXRsZVByZWZpeChzOiBOb2RlKSB7XG5cbiAgICBpZiggcy5sZXZlbCA+PSBoaWQubGVuZ3RoIClcbiAgICAgICAgcmV0dXJuIFwiXCI7XG5cbiAgICBjb25zdCBpZHggPSBzLnBhcmVudCEuY2hpbGRyZW4uaW5kZXhPZihzKTtcblxuICAgIGNvbnN0IG51bSA9IGhpZFtzLmxldmVsXVtpZHhdO1xuXG4gICAgcmV0dXJuIGAke251bX0uIGA7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTWVudShub2RlczogTm9kZVtdKSB7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuXG4gICAgbWVudS5hcHBlbmQoIC4uLiBub2Rlcy5tYXAoIChzLGlkeCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGl0ZW0udGV4dENvbnRlbnQ9IGAke2dldFRpdGxlUHJlZml4KHMpfSR7cy5odG1sLnRleHRDb250ZW50fWA7XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBgIyR7cy5odG1sLmlkfWApO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9KSApO1xuXG4gICAgcmV0dXJuIG1lbnU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUhlYWRlcigpIHtcblxuICAgIGNvbnN0IGxhc3QgPSBzZWFyY2hDdXJIZWFkZXIoIGh0cmVlLCBtYWluLnNjcm9sbFRvcCkhO1xuXG4gICAgbGV0IGhlYWRlcnMgPSBbXTtcbiAgICBsZXQgY3Vyc29yICA9IGxhc3Q7XG5cbiAgICB3aGlsZShjdXJzb3IuaHRtbCAhPT0gbWFpbikge1xuICAgICAgICBoZWFkZXJzLnB1c2goY3Vyc29yKTtcbiAgICAgICAgY3Vyc29yID0gY3Vyc29yLnBhcmVudCE7XG4gICAgfVxuXG4gICAgY29uc3QgaHRtbCA9IGhlYWRlcnMucmV2ZXJzZSgpLm1hcCggKGhub2RlLGkpID0+IHtcblxuICAgICAgICBjb25zdCBoID0gaG5vZGUuaHRtbDtcbiAgICAgICAgY29uc3QgaF9odG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gYCR7Z2V0VGl0bGVQcmVmaXgoaG5vZGUpfSR7aC50ZXh0Q29udGVudH1gO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGAjJHtoLmlkfWApO1xuXG4gICAgICAgIGNvbnN0IG1lbnUgPSBidWlsZE1lbnUoaG5vZGUucGFyZW50IS5jaGlsZHJlbik7XG4gICAgICAgIGhfaHRtbC5hcHBlbmQobGluaywgbWVudSk7XG5cbiAgICAgICAgcmV0dXJuIGhfaHRtbDtcbiAgICB9KTtcblxuICAgIGlmKCBsYXN0LmNoaWxkcmVuLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBjb25zdCBlbXB0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgICAgIGVtcHR5LmFwcGVuZCggYnVpbGRNZW51KGxhc3QuY2hpbGRyZW4pICk7XG5cbiAgICAgICAgaHRtbC5wdXNoKGVtcHR5KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VfcGFnZV9ocmVmKHBhdGhwcmVmaXg6IHN0cmluZywgcGF0aDogc3RyaW5nLCBkZXNjOiBhbnkpIHtcblxuICAgICAgICBsZXQgaHJlZiA9IGAke3BhdGhwcmVmaXh9JHtwYXRofS9gO1xuXG4gICAgICAgIHdoaWxlKGRlc2MuY2hpbGRyZW4/Lmxlbmd0aCkge1xuICAgICAgICAgICAgZGVzYyA9IGRlc2MuY2hpbGRyZW5bMF07XG4gICAgICAgICAgICBocmVmICs9IGAke2Rlc2MucGF0aCA/PyBkZXNjfS9gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGhyZWY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZV9wYWdlX21lbnUocGF0aHByZWZpeDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHBhZ2VzOiBhbnkpIHtcbiAgICAgICAgY29uc3QgZGVzYyA9IHBhZ2VzLmZpbmQoIChwYWdlOiBhbnkpID0+IHBhZ2UgPT09IHBhdGggfHwgcGFnZS5wYXRoID09PSBwYXRoICkhO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gZGVzYy5zbmFtZSA/PyBkZXNjLm5hbWUgPz8gZGVzYztcbiAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgbWFrZV9wYWdlX2hyZWYocGF0aHByZWZpeCwgcGF0aCwgZGVzYykgKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgICBcbiAgICAgICAgICAgIG1lbnUuYXBwZW5kKCAuLi4gcGFnZXMubWFwKCAocGFnZTphbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudD0gcGFnZS5uYW1lID8/IHBhZ2U7XG4gICAgICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIG1ha2VfcGFnZV9ocmVmKHBhdGhwcmVmaXgsIHBhZ2UucGF0aD8/cGFnZSwgcGFnZSkgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH0pICk7XG4gICAgXG4gICAgICAgICAgICBodG1sLmFwcGVuZChsaW5rLCBtZW51KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICBcbiAgICBsZXQgY3VycGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zbGljZShyb290X3BhdGgubGVuZ3RoKS5zcGxpdCgnLycpO1xuXG4gICAgY29uc3QgbW9kdWxlX2h0bWwgPSBtYWtlX3BhZ2VfbWVudShyb290X3BhdGgsIGN1cnBhZ2VbMF0sIHBhZ2VzKTtcblxuICAgIGNvbnN0IGRlc2MgPSBwYWdlcy5maW5kKCAocGFnZTogYW55KSA9PiBwYWdlLnBhdGggPT09IGN1cnBhZ2VbMF0gKSE7XG4gICAgY29uc3QgdHlwZV9odG1sICAgPSBtYWtlX3BhZ2VfbWVudShyb290X3BhdGggKyBjdXJwYWdlWzBdICsgXCIvXCIsIGN1cnBhZ2VbMV0sIGRlc2MuY2hpbGRyZW4pO1xuXG4gICAgY29uc3QgZGVzY190eXBlID0gZGVzYy5jaGlsZHJlbi5maW5kKCAocGFnZTogYW55KSA9PiAocGFnZT8ucGF0aCA/PyBwYWdlKSA9PT0gY3VycGFnZVsxXSApITtcbiAgICBpZiggdHlwZW9mIGRlc2NfdHlwZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAvLyB0aXRsZSBudW1cbiAgICAgICAgY29uc3QgZGVzYzJfaWR4ID0gZGVzY190eXBlLmNoaWxkcmVuLmZpbmRJbmRleCggKHBhZ2U6IGFueSkgPT4gcGFnZT8ucGF0aCA/PyBwYWdlID09PSBjdXJwYWdlWzJdICkhO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1oZWFkZXJfc3RhcnRfaWRcIiwgYCR7ZGVzYzJfaWR4fWApO1xuICAgICAgICAvLyBtZW51XG4gICAgICAgIGNvbnN0IHNlc3Npb25faHRtbCAgID0gbWFrZV9wYWdlX21lbnUocm9vdF9wYXRoICsgY3VycGFnZVswXSArIFwiL1wiKyBjdXJwYWdlWzFdICsgXCIvXCIsIGN1cnBhZ2VbMl0sIGRlc2NfdHlwZS5jaGlsZHJlbik7XG4gICAgICAgIGh0bWxbMF0gPSBzZXNzaW9uX2h0bWw7XG4gICAgfVxuXG4gICAgaGVhZGVyLnJlcGxhY2VDaGlsZHJlbihtb2R1bGVfaHRtbCwgdHlwZV9odG1sLCAuLi5odG1sKTtcbn1cblxubWFpbi5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGVIZWFkZXIpO1xudXBkYXRlSGVhZGVyKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsInZhciB3ZWJwYWNrUXVldWVzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBxdWV1ZXNcIikgOiBcIl9fd2VicGFja19xdWV1ZXNfX1wiO1xudmFyIHdlYnBhY2tFeHBvcnRzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBleHBvcnRzXCIpIDogXCJfX3dlYnBhY2tfZXhwb3J0c19fXCI7XG52YXIgd2VicGFja0Vycm9yID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBlcnJvclwiKSA6IFwiX193ZWJwYWNrX2Vycm9yX19cIjtcbnZhciByZXNvbHZlUXVldWUgPSAocXVldWUpID0+IHtcblx0aWYocXVldWUgJiYgcXVldWUuZCA8IDEpIHtcblx0XHRxdWV1ZS5kID0gMTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSkpO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tID8gZm4ucisrIDogZm4oKSkpO1xuXHR9XG59XG52YXIgd3JhcERlcHMgPSAoZGVwcykgPT4gKGRlcHMubWFwKChkZXApID0+IHtcblx0aWYoZGVwICE9PSBudWxsICYmIHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpIHtcblx0XHRpZihkZXBbd2VicGFja1F1ZXVlc10pIHJldHVybiBkZXA7XG5cdFx0aWYoZGVwLnRoZW4pIHtcblx0XHRcdHZhciBxdWV1ZSA9IFtdO1xuXHRcdFx0cXVldWUuZCA9IDA7XG5cdFx0XHRkZXAudGhlbigocikgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0V4cG9ydHNdID0gcjtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0sIChlKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXJyb3JdID0gZTtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0pO1xuXHRcdFx0dmFyIG9iaiA9IHt9O1xuXHRcdFx0b2JqW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAoZm4ocXVldWUpKTtcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHR9XG5cdHZhciByZXQgPSB7fTtcblx0cmV0W3dlYnBhY2tRdWV1ZXNdID0geCA9PiB7fTtcblx0cmV0W3dlYnBhY2tFeHBvcnRzXSA9IGRlcDtcblx0cmV0dXJuIHJldDtcbn0pKTtcbl9fd2VicGFja19yZXF1aXJlX18uYSA9IChtb2R1bGUsIGJvZHksIGhhc0F3YWl0KSA9PiB7XG5cdHZhciBxdWV1ZTtcblx0aGFzQXdhaXQgJiYgKChxdWV1ZSA9IFtdKS5kID0gLTEpO1xuXHR2YXIgZGVwUXVldWVzID0gbmV3IFNldCgpO1xuXHR2YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuXHR2YXIgY3VycmVudERlcHM7XG5cdHZhciBvdXRlclJlc29sdmU7XG5cdHZhciByZWplY3Q7XG5cdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlaikgPT4ge1xuXHRcdHJlamVjdCA9IHJlajtcblx0XHRvdXRlclJlc29sdmUgPSByZXNvbHZlO1xuXHR9KTtcblx0cHJvbWlzZVt3ZWJwYWNrRXhwb3J0c10gPSBleHBvcnRzO1xuXHRwcm9taXNlW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAocXVldWUgJiYgZm4ocXVldWUpLCBkZXBRdWV1ZXMuZm9yRWFjaChmbiksIHByb21pc2VbXCJjYXRjaFwiXSh4ID0+IHt9KSk7XG5cdG1vZHVsZS5leHBvcnRzID0gcHJvbWlzZTtcblx0Ym9keSgoZGVwcykgPT4ge1xuXHRcdGN1cnJlbnREZXBzID0gd3JhcERlcHMoZGVwcyk7XG5cdFx0dmFyIGZuO1xuXHRcdHZhciBnZXRSZXN1bHQgPSAoKSA9PiAoY3VycmVudERlcHMubWFwKChkKSA9PiB7XG5cdFx0XHRpZihkW3dlYnBhY2tFcnJvcl0pIHRocm93IGRbd2VicGFja0Vycm9yXTtcblx0XHRcdHJldHVybiBkW3dlYnBhY2tFeHBvcnRzXTtcblx0XHR9KSlcblx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRmbiA9ICgpID0+IChyZXNvbHZlKGdldFJlc3VsdCkpO1xuXHRcdFx0Zm4uciA9IDA7XG5cdFx0XHR2YXIgZm5RdWV1ZSA9IChxKSA9PiAocSAhPT0gcXVldWUgJiYgIWRlcFF1ZXVlcy5oYXMocSkgJiYgKGRlcFF1ZXVlcy5hZGQocSksIHEgJiYgIXEuZCAmJiAoZm4ucisrLCBxLnB1c2goZm4pKSkpO1xuXHRcdFx0Y3VycmVudERlcHMubWFwKChkZXApID0+IChkZXBbd2VicGFja1F1ZXVlc10oZm5RdWV1ZSkpKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZm4uciA/IHByb21pc2UgOiBnZXRSZXN1bHQoKTtcblx0fSwgKGVycikgPT4gKChlcnIgPyByZWplY3QocHJvbWlzZVt3ZWJwYWNrRXJyb3JdID0gZXJyKSA6IG91dGVyUmVzb2x2ZShleHBvcnRzKSksIHJlc29sdmVRdWV1ZShxdWV1ZSkpKTtcblx0cXVldWUgJiYgcXVldWUuZCA8IDAgJiYgKHF1ZXVlLmQgPSAwKTtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdtb2R1bGUnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTEvaW5kZXgudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00xL2luZGV4LmNzc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMS9pbmRleC5tZFwiKTtcbiIsIiJdLCJuYW1lcyI6WyJTaGFkb3dDZmciLCJfX2NzdHJfaG9zdCIsIkNBTl9IQVZFX1NIQURPVyIsIl9jYW5IYXNTaGFkb3ciLCJ0YWciLCJpbmNsdWRlcyIsIl9lbGVtZW50MnRhZ25hbWUiLCJMSVNTIiwiZXh0ZW5kcyIsInBfZXh0ZW5kcyIsImhvc3QiLCJwX2hvc3QiLCJkZXBlbmRhbmNpZXMiLCJwX2RlcHMiLCJhdHRyaWJ1dGVzIiwicF9hdHRycyIsInBhcmFtcyIsImNvbnRlbnQiLCJjc3MiLCJzaGFkb3ciLCJwX3NoYWRvdyIsIkhUTUxFbGVtZW50IiwiX2V4dGVuZHMiLCJPYmplY3QiLCJjYW5IYXNTaGFkb3ciLCJFcnJvciIsInVuZGVmaW5lZCIsInB1c2giLCJIVE1MVGVtcGxhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwidHJpbSIsIlJlc3BvbnNlIiwidGV4dCIsIkxJU1NCYXNlIiwiUGFyYW1ldGVycyIsInN0eWxlc2hlZXRzIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiZmV0Y2hfY3NzIiwiQ1NTU3R5bGVTaGVldCIsIkhUTUxTdHlsZUVsZW1lbnQiLCJzaGVldCIsInN0eWxlIiwicmVwbGFjZSIsIm1hcCIsImlkeCIsImNvbnN0cnVjdG9yIiwiYXR0cnMiLCJzZXRBdHRyRGVmYXVsdCIsImF0dHIiLCJ2YWx1ZSIsIm9uQXR0ckNoYW5nZWQiLCJfbmFtZSIsIl9vbGRWYWx1ZSIsIl9uZXdWYWx1ZSIsImlzSW5ET00iLCJvbkRPTUNvbm5lY3RlZCIsIm9uRE9NRGlzY29ubmVjdGVkIiwiZXh0ZW5kc0xJU1MiLCJMaXNzIiwicGFyYW1ldGVycyIsImFzc2lnbiIsIkV4dGVuZGVkTElTUyIsInQiLCJpZCIsImJ1aWxkTElTU0hvc3QiLCJfcGFyYW1zIiwiYWxyZWFkeURlY2xhcmVkQ1NTIiwiU2V0IiwiR0VUIiwiU3ltYm9sIiwiU0VUIiwicHJvcGVydGllcyIsImZyb21FbnRyaWVzIiwibiIsImVudW1lcmFibGUiLCJnZXQiLCJzZXQiLCJBdHRyaWJ1dGVzIiwibmFtZSIsImRhdGEiLCJkZWZhdWx0cyIsInNldHRlciIsImRlZmluZVByb3BlcnRpZXMiLCJMSVNTSG9zdEJhc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsImlzSW5pdCIsImluaXRpYWxpemUiLCJhcGkiLCJpbml0IiwiTElTU1N5bmMiLCJkaXNjb25uZWN0ZWRDYWxsYmFjayIsImNvbm5lY3RlZENhbGxiYWNrIiwiY3VzdG9tRWxlbWVudHMiLCJ1cGdyYWRlIiwiYXR0YWNoU2hhZG93IiwibW9kZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkNsaWNrRXZlbnQiLCJvYnMiLCJnZXRBdHRyaWJ1dGUiLCJhZG9wdGVkU3R5bGVTaGVldHMiLCJzaGFyZWRDU1MiLCJjc3NzZWxlY3RvciIsIkNTU1NlbGVjdG9yIiwiaGFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaHRtbF9zdHlsZXNoZWV0cyIsInJ1bGUiLCJjc3NSdWxlcyIsImNzc1RleHQiLCJoZWFkIiwiYXBwZW5kIiwiYWRkIiwidGVtcGxhdGVfZWxlbSIsInN0ciIsIl8iLCJtYXRjaCIsImNoaWxkTm9kZXMiLCJvYmoiLCJoYXNTaGFkb3ciLCJnZXRQYXJ0IiwicXVlcnlTZWxlY3RvciIsImdldFBhcnRzIiwicXVlcnlTZWxlY3RvckFsbCIsInRhZ05hbWUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJvYnNlcnZlZEF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2siLCJvbGRWYWx1ZSIsIm5ld1ZhbHVlIiwiX0RPTUNvbnRlbnRMb2FkZWQiLCJyZWFkeVN0YXRlIiwiZGVmaW5lIiwidGFnbmFtZSIsIkNvbXBvbmVudENsYXNzIiwiQ2xhc3MiLCJodG1sdGFnIiwiYWxsIiwiTElTU2NsYXNzIiwib3B0cyIsImluc2VydEdsb2JhbENTU1J1bGVzIiwiY3NzX3N0eWxlIiwicmVwbGFjZVN5bmMiLCJpbnNlcnRSdWxlIiwiREVMRUdBVEVEX0VWRU5UUyIsIkFMUkVBRFlfUFJPQ0VTU0VEIiwiZXYiLCJoYW5kbGVycyIsInR5cGUiLCJlbGVtIiwiY29tcG9zZWRQYXRoIiwiU2hhZG93Um9vdCIsIndpbmRvdyIsInRhcmdldCIsInNlbGVjdG9yIiwiaGFuZGxlciIsIm1hdGNoZXMiLCJpbnNlcnRHbG9iYWxEZWxlZ2F0ZWRMaXN0ZW5lciIsImV2ZW50X25hbWUiLCJjbG9zZXN0IiwiZWxlbWVudCIsInJlc3VsdCIsInJvb3QiLCJnZXRSb290Tm9kZSIsImJ1aWxkIiwicGFyZW50IiwiY2xhc3NlcyIsImNzc3ZhcnMiLCJsaXN0ZW5lcnMiLCJDdXN0b21DbGFzcyIsIndoZW5EZWZpbmVkIiwidG9Mb3dlckNhc2UiLCJjbGFzc0xpc3QiLCJzZXRQcm9wZXJ0eSIsInRvZ2dsZUF0dHJpYnV0ZSIsImRhdGFzZXQiLCJyZXBsYWNlQ2hpbGRyZW4iLCJnZXRMSVNTIiwiY2FsbGJhY2siLCJ3aGVuQWxsRGVmaW5lZCIsInRhZ25hbWVzIiwiaXNEZWZpbmVkIiwiZ2V0TmFtZSIsImdldExJU1NTeW5jIiwiX2J1aWxkUVMiLCJ0YWduYW1lX29yX3BhcmVudCIsInFzIiwicXNvIiwicXNhIiwiZWxlbWVudHMiLCJwcm9taXNlcyIsInFzYyIsInJlcyIsInFzU3luYyIsInFzYVN5bmMiLCJxc2NTeW5jIiwiTElTU19BdXRvIiwibmF2aWdhdG9yIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIiwiY29udHJvbGxlciIsInNyYyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwibXV0YXRpb24iLCJhZGRpdGlvbiIsImFkZGVkTm9kZXMiLCJFbGVtZW50Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJyZXNvdXJjZXMiLCJkZWZpbmVXZWJDb21wb25lbnQiLCJmaWxlcyIsImpzIiwia2xhc3MiLCJXZWJDb21wb25lbnQiLCJmaWxlbmFtZXMiLCJmaWxlIiwiZW5kc1dpdGgiLCJfaW1wb3J0IiwiX2ZldGNoVGV4dCIsImkiLCJDc3RtRXZlbnQiLCJDdXN0b21FdmVudCIsImFyZ3MiLCJkZXRhaWwiLCJmZXRjaFJlc291cmNlIiwicmVzb3VyY2UiLCJmZXRjaCIsInVyaSIsImlzTGlzc0F1dG8iLCJvcHRpb25zIiwiaGVhZGVycyIsInJlc3BvbnNlIiwic3RhdHVzIiwiZGVmYXVsdCIsImUiLCJjb25zb2xlIiwibG9nIiwiSFRNTENMQVNTX1JFR0VYIiwiZWxlbWVudE5hbWVMb29rdXBUYWJsZSIsImV4ZWMiLCJGb3JtYXRzIiwic19mb3JtdWxhIiwiZ2V0Q2VsbHMiLCJmb3JtYXQiLCJldXJvcyIsInNfY29tcGxleF9mb3JtdWxhIiwic190eXBlcyIsIkRhdGUiLCJzX2N1cnNvciIsInNfJGZvcm11bGEiLCJzXyRmb3JtIiwicmVmIiwic2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uIiwic2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uX2VtcHR5Iiwic2hlZXRfcmVjb3BpZV9pbmNyIiwiYyIsIlgiLCJ0ZCIsImZvY3VzIiwidGV4dENvbnRlbnQiLCJDZWxsTGlzdCIsImRlZmF1bHRGb3JtYXQiLCJGb3JtYXRNYW5hZ2VyIiwiY3RybEtleSIsImNoYW5nZWQiLCJrZXkiLCJzZWxlY3Rpb24iLCJ0b2dnbGVGb3JtYXQiLCJzaGlmdEtleSIsInBvdXJjZW50IiwibnVtYmVyIiwicHJldmVudERlZmF1bHQiLCJkaXNwYXRjaEV2ZW50IiwicHJlYyIsInRvTG9jYWxlU3RyaW5nIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiRm9ybWF0IiwiYXBwbHlUbyIsImNlbGwiLCJjZWxscyIsInZhbCIsInJhd0NvbnRlbnQiLCJyIiwiaiIsInJlbGF0aXZlVG8iLCJyZW1vdmUiLCJzdGFydHNXaXRoIiwidG9nZ2xlIiwiZ2V0UHJvcGVydHkiLCJoYXNQcm9wZXJ0eSIsImV4dHJhY3RGb3JtYXQiLCJmMiIsInZhbHVlcyIsIml0ZW0iLCJzbGljZSIsImdldFByb3BlcnR5VmFsdWUiLCJjb2xzcGFuIiwicm93c3BhbiIsInNwYW4iLCJoYXNBdHRyaWJ1dGUiLCJwcmVjaXNpb24iLCJDYWxjRm9ybXVsYSIsImN1cnNvciIsInN0YXRlcyIsImNlbGxfZWRpdCIsInN0YXRlIiwic3luY1RvIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkZvcm11bGEiLCJyYW5nZXNfdG9rZW4iLCJkcm93IiwiZGNvbCIsIm5ld19yYW5nZXMiLCJwb3MiLCJjZWxsUG9zIiwibGFzdEluZGV4T2YiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJuZXdfZm9ybXVsYSIsIm9mZnNldCIsImJlZyIsImVuZCIsInBhcnNlX2Zvcm11bGEiLCJyYW5nZXNUb2tlbiIsInRvU3RyaW5nIiwiZXh0cmFjdFRva2VuIiwidG9rZW4iLCJoYXNDb21tYSIsIk5vZGUiLCJjaGlsZHJlbiIsImZjdCIsImV2YWwiLCJ0b051bWJlciIsImEiLCJvcF9pbXBsIiwiYiIsIk1hdGgiLCJwb3ciLCJvcF9wcmlvIiwib3BzIiwib3AiLCJ0b2tlbmxpc3QyVHJlZSIsInRva2VucyIsIm5iIiwicmF3IiwiY3VyIiwicHJpb3JpdHkiLCJmaW5kSW5kZXgiLCJ1X29wIiwib3BfdG9rZW4iLCJsZWZ0IiwicmlnaHQiLCJjdXJUb2tlbiIsIm5vZGUiLCJyYW5nZXMiLCJmaWx0ZXIiLCJQbGFnZUZvcm11bGEiLCJjb2RlIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwic2VsZWN0ZWQiLCJjbGVhciIsImJsdXIiLCJwbGFnZV9uYW1lIiwiUGxhZ2VTZWxlY3RvciIsInNlbGVjdGVkX2NlbGxzIiwiZ2V0UmFuZ2UiLCJjb2xzIiwidGJvZHkiLCJjb2xfaWQiLCJjbGllbnRYIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieCIsInJvd3MiLCJyb3dfaWQiLCJjbGllbnRZIiwieSIsIm1haW4iLCJvbl9tb3VzZV9tb3ZlIiwicG9zMnJlZiIsIm5iUm93cyIsIm5iQ29scyIsIm9uY2UiLCJpc0FjdGl2ZSIsIm9uSW5wdXQiLCJycmFuZ2UiLCJnZXRTZWxlY3Rpb24iLCJnZXRSYW5nZUF0Iiwic3RhcnRPZmZzZXQiLCJjaGlsZCIsIm5vZGVUeXBlIiwiVEVYVF9OT0RFIiwic3RhcnRDb250YWluZXIiLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwic2VsIiwic2V0U3RhcnQiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwidG9QcmVjaXNpb24iLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJwYXJzZUlucHV0IiwidGVzdF9udW1iZXIiLCJOdW1iZXIiLCJpc05hTiIsInBhcnRzIiwic3BsaXQiLCJ0ZXN0X2RhdGUiLCJnZXRGdWxsWWVhciIsIlN0YXRlIiwid2FybiIsInByZXZfc3RhdGUiLCJTdGF0ZXMiLCJDYWxjU2hlZXQiLCJlbnRyaWVzIiwicyIsInJlbW92ZUhpZ2hsaWdodHMiLCJoIiwicmVtb3ZlQ29weUhpZ2hsaWdodCIsInNldFJlY3QiLCJ3IiwidGJsX29mZnNldCIsIm9mZnNldFRvcCIsImdldFJlY3QiLCJzdGFydCIsIm9mZnNldExlZnQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImhpZ2hsaWdodCIsImlkX29yX2NsYXNzbGlzdCIsImhpZ2giLCJyb3dfZGlmZiIsImNvbF9kaWZmIiwicm93IiwiY29sIiwicmVjb3B5IiwibGFzdF9yZWNvcHlfdGFyZ2V0IiwibGFzdF9yZWNvcHlfZGlyIiwib25fcmVjb3B5X21vdmUiLCJkX3B4Iiwid2lkdGgiLCJkX3B5IiwiaGVpZ2h0IiwiZF94IiwiZF95Iiwic2lnbiIsImFicyIsInByZXYiLCJkaWZmX3giLCJkaWZmX3kiLCJwb3NfY3VyIiwic2V0RGF0ZSIsImdldERhdGUiLCJjbGFzc05hbWUiLCJmb3JtdWxhX2JhciIsInBsYWdlIiwiZm9ybXVsYSIsInJvIiwiaXNfcm8iLCJhbHRLZXkiLCJkc3QiLCJkZWVwQ2xvbmUiLCJkZWxldGVGb3JtYXQiLCJkZWxldGVDb250ZW50IiwiZF9yb3ciLCJkX2NvbCIsIm5leHQiLCJjbGljayIsImJ1YmJsZXMiLCJvbklucHV0MiIsInJhbmdlc19jb2xvcnMiLCJjdXJfb2Zmc2V0IiwicmFuZ2VfbmFtZSIsInVwZGF0ZSIsInBhcmVudEVsZW1lbnQiLCJyZXNpemUiLCJuYnJvd3MiLCJuYmNvbHMiLCJjb2xfaHRtbCIsInRoIiwicm93X2h0bWwiLCJ0YWJsZSIsImZyb20iLCJ0byIsImJlZ19yb3ciLCJiZWdfY29sIiwiZW5kX3JvdyIsImVuZF9jb2wiLCJjZWxsX29yX3Jvd2lkIiwicmVwbGFjZUFsbCIsImJfcm93X2lkIiwiYl9jb2xfaWQiLCJjaGFyQ29kZUF0IiwiZV9yb3dfaWQiLCJlX2NvbF9pZCIsInJlZjJwb3MiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIkV2ZW50VGFyZ2V0Iiwic29ydCIsIm1pbiIsIm1heCIsIm5iX2NvbHMiLCJmbG9vciIsImYiLCJpc0Zvcm1hdCIsInJhd192YWwiLCJIVE1MVGFibGVDZWxsRWxlbWVudCIsInYiLCJkaWZmIiwic2V0Uk8iLCJjbG9uZSIsImNsb25lTm9kZSIsInNuYW1lIiwicGF0aCIsInJvb3RfcGF0aCIsImhvc3RuYW1lIiwicGFnZXMiLCJoZWFkZXIiLCJ0aXRsZXMiLCJodHJlZSIsImh0bWwiLCJsZXZlbCIsImh0cmVlX2N1cnNvciIsInRpdGxlIiwic2VhcmNoQ3VySGVhZGVyIiwicG9zaXRpb24iLCJoaWQiLCJnZXRUaXRsZVByZWZpeCIsImluZGV4T2YiLCJudW0iLCJidWlsZE1lbnUiLCJub2RlcyIsIm1lbnUiLCJ1cGRhdGVIZWFkZXIiLCJsYXN0Iiwic2Nyb2xsVG9wIiwicmV2ZXJzZSIsImhub2RlIiwiaF9odG1sIiwibGluayIsImVtcHR5IiwibWFrZV9wYWdlX2hyZWYiLCJwYXRocHJlZml4IiwiZGVzYyIsImhyZWYiLCJtYWtlX3BhZ2VfbWVudSIsImZpbmQiLCJwYWdlIiwiY3VycGFnZSIsIm1vZHVsZV9odG1sIiwidHlwZV9odG1sIiwiZGVzY190eXBlIiwiZGVzYzJfaWR4IiwiYm9keSIsInNlc3Npb25faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=