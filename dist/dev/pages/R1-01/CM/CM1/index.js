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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host table {\n    border-collapse: collapse;\n    border-top-color: transparent;\n\n    & > tbody {\n        outline: 0px solid transparent;\n    }\n\n    & > tbody > tr:first-child {\n        border-top-color: transparent;\n        \n        & > th {\n            border-top-color: transparent;\n        }\n    }\n}\n\n:host :is(tr,th,td) {\n    border:1px solid #c0c0c0;\n}\n\n:host([showgrid=\"false\"]) td {\n    border-color: transparent;\n}\n\n:host tr {\n    height: 0.45cm;\n    line-height: 0.45cm;\n}\n\n\n:host :is(td, th):not([contenteditable]) {\n    user-select: none;\n}\n/*\n:host td[contenteditable] {\n    user-select: text;\n}*/\n\n:host colgroup > col {\n    width: 2.26cm;\n}\n:host colgroup > col:first-child {\n    width: calc( 2.26cm / 2.5) ;\n}\n\n:host :is(td, th) {\n    color: black;\n    height: 0.45cm;\n\n    font-size: 10pt;\n\n    box-sizing: border-box;\n    font-family: 'Liberation Sans';\n}\n\n\n:host {\n    display: inline-flex;\n    flex-direction: column;\n}\n\n:host div.toolbar {\n    background-color: #cecece;\n    display: flex;\n    gap: 5px;\n    padding: 4px;\n\n    & > *:not(:first-child) {\n        flex: 1 1 0;\n    }\n    & > *:first-child {\n        width: calc( 1.5 * 2.26cm );\n    }\n}\n\n:host th {\n    background-color: #cecece;\n    border-color: #8a8a8a;\n    font-weight: normal;\n\n    &.highlight {\n        background-color: #398ee7;\n        color: white;\n    }\n}\n\n:host(.cell_edit) .cursor {\n    display: none;\n}\n\n:host(.recopy) {\n    cursor: cell;\n}\n\n:host {\n\n    .recopy {\n        cursor: cell;\n        background-color: #398ee7;\n    }\n\n    .cursor {\n        background: none;\n        border: 2px solid #398ee7;\n        pointer-events: none;\n    }\n}\n\n:host .overlay {\n    position: absolute;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:host .hidden {\n    display: none;\n}\n\n:host .selection_highlight {\n    background-color: #398ee7; /*#cde3f9;*/\n    opacity: 0.5;\n    pointer-events: none; /* TODO */\n}\n\n\n:host td {\n\n    --font_size: 10pt;\n    font-size: var(--font_size);\n    line-height: calc( var(--font_size) * 1.2 );\n\n    --indent: 0;\n\n    --border_color: black;\n    --background_color: white;\n    --foreground_color: black;\n    background-color: var(--background_color);\n    color           : var(--foreground_color);\n\n    white-space: pre;\n\n    vertical-align: bottom;\n\n    &:is([data-type=\"number\"],[data-type=\"pourcent\"],[data-type=\"date\"], [data-type=\"boolean\"]) {\n        text-align: right;\n    }\n\n    &[contenteditable] {\n        outline: 0px solid transparent;\n    }\n\n    &.ajuster {\n        word-break: break-all;\n        white-space: normal;\n    }\n\n    /** style **/\n    &.italic {\n        font-style: italic;\n    }\n    &.bold {\n        font-weight: bold;\n    }\n    &.underline {\n        text-decoration: underline;\n    }\n    &.align_left {\n        padding-left: calc( var(--indent) * 10px);\n        text-align: left;\n    }\n    &.align_center {\n        text-align: center;\n    }\n    &.align_right {\n        padding-right: calc( var(--indent) * 10px);\n        text-align: right;\n    }\n    &.valign_top {\n        vertical-align: top;\n    }\n    &.valign_middle {\n        vertical-align: middle;\n    }\n    &.valign_bottom {\n        vertical-align: bottom;\n    }\n    /* https://stackoverflow.com/questions/1241757/applying-borders-to-a-single-table-cell-when-using-border-collapse */\n    &.border_top {\n        border-top: 1px double var(--border_color);\n    }\n    &.border_bottom {\n        border-bottom: 1px double var(--border_color);\n    }\n    &.border_left {\n        border-left: 1px double var(--border_color);\n    }\n    &.border_right {\n        border-right: 1px double var(--border_color);\n    }\n}\n\n:host {\n    position: relative;\n}\n\n:host .range_highlight {\n    background: none;\n    border: 2px solid red;\n\n    border-color: var(--highlight_color);\n}\n\n:host .formula_highlight {\n    color: var(--highlight_color);\n}\n\n:host .highlight_0 {\n    --highlight_color: #fa0c0c;\n}\n\n:host .highlight_1 {\n    --highlight_color: #fa0cfa;\n}\n\n:host .highlight_2 {\n    --highlight_color: #0c840c;\n}\n\n:host .highlight_3 {\n    --highlight_color: #010180;\n}\n\n:host .highlight_4 {\n    --highlight_color: #871717;\n}\n\n:host .highlight_5 {\n    --highlight_color: #871787;\n}\n\n:host .highlight_6 {\n    --highlight_color: #84840c;\n}\n\n:host .highlight_7 {\n    --highlight_color: #0c0cfa;\n}\n\n\n.copy_highlight {\n    border: 1px dashed black;\n    background: none;\n    pointer-events: none;\n}\n\n/* Tomorrow Theme */\n/* http://jmblog.github.com/color-themes-for-google-code-highlightjs */\n/* Original theme - https://github.com/chriskempson/tomorrow-theme */\n\n/* Tomorrow Comment */\n.hljs-comment,\n.hljs-quote {\n\tcolor: #8e908c;\n}\n\n/* Tomorrow Red */\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-regexp,\n.hljs-deletion {\n\tcolor: #c82829;\n}\n\n/* Tomorrow Orange */\n.hljs-number,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-literal,\n.hljs-type,\n.hljs-params,\n.hljs-meta,\n.hljs-link {\n\tcolor: #f5871f;\n}\n\n/* Tomorrow Yellow */\n.hljs-attribute {\n\tcolor: #eab700;\n}\n\n/* Tomorrow Green */\n.hljs-string,\n.hljs-symbol,\n.hljs-bullet,\n.hljs-addition {\n\tcolor: #718c00;\n}\n\n/* Tomorrow Blue */\n.hljs-title,\n.hljs-section {\n\tcolor: #4271ae;\n}\n\n/* Tomorrow Purple */\n.hljs-keyword,\n.hljs-selector-tag {\n\tcolor: #8959a8;\n}\n\n.hljs {\n\tdisplay: block;\n\toverflow-x: auto;\n\tcolor: #4d4d4c;\n\tpadding: 0.5em;\n}\n\n.hljs-emphasis {\n\tfont-style: italic;\n}\n\n.hljs-strong {\n\tfont-weight: bold;\n}");

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
/*
type S<A,B> = {
	A: A,
	B: B
};
type LH = S<unknown,unknown>;

type inferA<T> = T extends S<infer A, any> ? A : never;

function foo<T extends LH>(t: T): inferA<T> {
	return t.A as inferA<T>;
}

let X = {
	A: 32,
	B: "str"
};

let c = foo(X);
*/ var ShadowCfg;
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
function LISS({ extends: p_extends, host: p_host, dependencies: p_deps, attributes: p_attrs, params, content, css, shadow: p_shadow } = {}) {
    //TODO merge prop if extends LISS...
    const host = p_host ?? HTMLElement;
    const _extends = p_extends ?? Object;
    const attributes = p_attrs ?? [];
    const dependencies = p_deps ? [
        ...p_deps
    ] : [];
    const canHasShadow = _canHasShadow(host);
    const shadow = p_shadow ?? (canHasShadow ? "closed" : "none");
    if (!canHasShadow && shadow !== "none") throw new Error(`Host element ${_element2tagname(host)} does not support ShadowRoot`);
    // CONTENT processing
    if (content !== undefined) {
        dependencies.push((async ()=>{
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
                await style.replace(css);
                return style;
            }
            //if( css instanceof Response )
            await style.replace(await css.text());
            return style;
        };
        dependencies.push(...css.map(async (css, idx)=>stylesheets[idx] = await fetch_css(css)));
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
        setParam(name, value) {
            this.#host.params[name] = value;
        }
        get content() {
            return this.#host.content;
        }
        static Parameters = {
            host,
            dependencies,
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
    const attributes = [
        ...Liss.Parameters.attributes,
        ...parameters.attributes ?? []
    ];
    const dependencies = [
        ...Liss.Parameters.dependencies,
        ...parameters.dependencies ?? []
    ];
    const params = Object.assign({}, Liss.Parameters, {
        attributes,
        dependencies
    });
    if (parameters.shadow !== undefined) params.shadow = parameters.shadow;
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
        [GET](name) {
            return this.#data[name] ?? this.#defaults[name] ?? null;
        }
        [SET](name, value) {
            return this.#setter(name, value); // required to get a clean object when doing {...attrs}
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
            if (!this.isInit) this.init();
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
        setParam(name, value) {
            if (this.isInit) return this.#API.setParam(name, value);
            this.#params[name] = value; // will be given to constructor.
        }
        /*** content ***/ #content = null;
        get content() {
            return this.#content;
        }
        getPart(name) {
            return this.hasShadow ? this.#content?.querySelector(`::part(${name})`) : this.#content?.querySelector(`[part="${name}"]`);
        }
        getParts(name) {
            return this.hasShadow ? this.#content?.querySelectorAll(`::part(${name})`) : this.#content?.querySelectorAll(`[part="${name}"]`);
        }
        get hasShadow() {
            return shadow !== 'none';
        }
        /*** CSS ***/ get CSSSelector() {
            if (this.hasShadow || !this.hasAttribute("is")) return this.tagName;
            return `${this.tagName}[is="${this.getAttribute("is")}"]`;
        }
        /*** attrs ***/ #attrs_flag = false;
        #attributes = {};
        #attributesDefaults = {};
        #attrs = new Attributes(this.#attributes, this.#attributesDefaults, (name, value)=>{
            this.#attributes[name] = value;
            this.#attrs_flag = true; // do not trigger onAttrsChanged.
            if (value === null) this.removeAttribute(name);
            else this.setAttribute(name, value);
        });
        setAttrDefault(name, value) {
            if (value === null) delete this.#attributesDefaults[name];
            else this.#attributesDefaults[name] = value;
        }
        get attrs() {
            return this.#attrs;
        }
        static observedAttributes = attributes;
        attributeChangedCallback(name, oldValue, newValue) {
            if (this.#attrs_flag) {
                this.#attrs_flag = false;
                return;
            }
            this.#attributes[name] = newValue;
            if (!this.isInit) return;
            if (this.#API.onAttrChanged(name, oldValue, newValue) === false) {
                this.#attrs[name] = oldValue; // revert the change.
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
LISS.define = async function(tagname, ComponentClass, { dependencies, params } = {}) {
    dependencies ??= [];
    params ??= {};
    const Class = ComponentClass.Parameters.host;
    let LISSBase = ComponentClass;
    let htmltag = _element2tagname(Class) ?? undefined;
    await Promise.all([
        _DOMContentLoaded,
        ...dependencies,
        ...LISSBase.Parameters.dependencies
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
    for(let name in cssvars)elem.style.setProperty(`--${name}`, cssvars[name]);
    for(let name in attrs){
        let value = attrs[name];
        if (typeof value === "boolean") elem.toggleAttribute(name, value);
        else elem.setAttribute(name, value);
    }
    for(let name in data){
        let value = data[name];
        if (value === false) delete elem.dataset[name];
        else if (value === true) elem.dataset[name] = "";
        else elem.dataset[name] = value;
    }
    if (!Array.isArray(content)) content = [
        content
    ];
    elem.replaceChildren(...content);
    for(let name in listeners)elem.addEventListener(name, listeners[name]);
    if (parent !== undefined) parent.append(elem);
    if (!elem.isInit && initialize) return await LISS.initialize(elem);
    return await LISS.getLISS(elem);
}
LISS.build = build;
function buildSync(tagname, { params = {}, initialize = true, content = [], parent = undefined, id = undefined, classes = [], cssvars = {}, attrs = {}, data = {}, listeners = {} } = {}) {
    if (!initialize && parent === null) throw new Error("A parent must be given if initialize is false");
    let CustomClass = customElements.get(tagname);
    if (CustomClass === undefined) throw new Error(`${tagname} not defined`);
    let elem = new CustomClass(params);
    //TODO: factorize...
    // Fix issue #2
    if (elem.tagName.toLowerCase() !== tagname) elem.setAttribute("is", tagname);
    if (id !== undefined) elem.id = id;
    if (classes.length > 0) elem.classList.add(...classes);
    for(let name in cssvars)elem.style.setProperty(`--${name}`, cssvars[name]);
    for(let name in attrs){
        let value = attrs[name];
        if (typeof value === "boolean") elem.toggleAttribute(name, value);
        else elem.setAttribute(name, value);
    }
    for(let name in data){
        let value = data[name];
        if (value === false) delete elem.dataset[name];
        else if (value === true) elem.dataset[name] = "";
        else elem.dataset[name] = value;
    }
    if (!Array.isArray(content)) content = [
        content
    ];
    elem.replaceChildren(...content);
    for(let name in listeners)elem.addEventListener(name, listeners[name]);
    if (parent !== undefined) parent.append(elem);
    if (!elem.isInit && initialize) LISS.initializeSync(elem);
    return LISS.getLISSSync(elem);
}
LISS.buildSync = buildSync;
LISS.whenDefined = async function(tagname, callback) {
    await customElements.whenDefined(tagname);
    if (callback !== undefined) callback();
    return;
};
LISS.whenAllDefined = async function(tagnames, callback) {
    await Promise.all(tagnames.map((t)=>customElements.whenDefined(t)));
    if (callback !== undefined) callback();
};
LISS.isDefined = function(name) {
    return customElements.get(name);
};
LISS.selector = function(name) {
    if (name === undefined) return "";
    return `:is(${name}, [is="${name}"])`;
};
LISS.getLISS = async function(element) {
    await LISS.whenDefined(LISS.getName(element));
    return element.LISS; // ensure initialized.
};
LISS.getLISSSync = function(element) {
    const name = LISS.getName(element);
    if (!LISS.isDefined(name)) throw new Error(`${name} hasn't been defined yet.`);
    let host = element;
    if (!host.isInit) throw new Error("Instance hasn't been initialized yet.");
    return host.LISSSync;
};
LISS.initialize = async function(element) {
    await LISS.whenDefined(LISS.getName(element));
    return await element.initialize(); // ensure initialization.
};
LISS.initializeSync = function(element) {
    const name = LISS.getName(element);
    if (!LISS.isDefined(name)) throw new Error(`${name} not defined`);
    return element.initialize(); // ensure initialization.
};
LISS.getName = function(element) {
    const name = element.getAttribute('is') ?? element.tagName.toLowerCase();
    if (!name.includes('-')) throw new Error(`Element ${name} is not a WebComponent`);
    return name;
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
/* harmony import */ var struct_menu_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! struct/menu.ts */ "./src/struct/menu.ts");
/* harmony import */ var struct_calc_sheet_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! struct/calc/sheet.ts */ "./src/struct/calc/sheet.ts");
/* harmony import */ var LISS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! LISS */ "./libs/LISS/index.ts");
/* harmony import */ var struct_calc_format_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! struct/calc/format.ts */ "./src/struct/calc/format.ts");


// 1


const s_formula = await LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_formula');
s_formula.getRange("A1:C1").format("bold", "align_center").content = [
    "Quantité",
    "Prix unitaire",
    "Prix total"
];
s_formula.getRange("A2:A4").content = [
    23,
    12,
    44
];
s_formula.getRange("B2:B4").format(struct_calc_format_ts__WEBPACK_IMPORTED_MODULE_3__.Formats.euros).content = [
    0.2,
    0.3,
    0.4
];
s_formula.getRange("C2:C4").format(struct_calc_format_ts__WEBPACK_IMPORTED_MODULE_3__.Formats.euros).content = [
    "=A2*B2",
    "=A3*B3",
    "=A4*B4"
];
/**/ const s_complex_formula = await LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_complex_formula');
s_complex_formula.getRange("A1:C1").format("bold", "align_center").content = [
    "X",
    "Y",
    "Formule"
];
s_complex_formula.getRange("A2:B4").content = [
    2,
    4,
    1,
    5,
    4,
    6
];
s_complex_formula.getRange("C2").content = `= A2*B2
 +A3*B3
 +A4*B4`;
/**/ const s_types = await LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_types');
s_types.getRange("A1:E1").format("bold", "align_center").content = [
    "Texte",
    "Nombre",
    "Booléen",
    "Date",
    "Formule"
];
s_types.getRange("A2:E2").content = [
    "Hello",
    2.3,
    true,
    new Date(),
    "=B2+2"
];
const s_cursor = await LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_cursor');
s_cursor.getRange("A1:H1").format("bold", "align_center").content = "*";
s_cursor.getRange("A4:H4").format("bold", "align_center").content = "*";
s_cursor.getRange("D1:E4").format("bold", "align_center").content = "*";
s_cursor.getRange("A1:A4").format("bold", "align_center").content = "*";
s_cursor.getRange("H1:H4", true).format("bold", "align_center").content = "*";
const s_$formula = [
    await LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet____formula'),
    await LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_x__formula'),
    await LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet__x_formula'),
    await LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_xx_formula')
];
for(let i = 0; i < s_$formula.length; ++i){
    const s_$form = s_$formula[i];
    s_$form.getRange("A1:D1").format("bold").content = [
        0,
        1,
        2,
        3
    ];
    s_$form.getRange("A2:A4").format("bold").content = [
        1,
        2,
        3
    ];
    let ref = "=A1";
    if (i === 1) ref = "=$A1";
    if (i === 2) ref = "=A$1";
    if (i === 3) ref = "=$A$1";
    s_$form.getRange("B2").content = ref;
    s_$form.getRange("A1:D4").format("align_center");
}
const sheet_recopie_motivation = await LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_recopie_motivation');
sheet_recopie_motivation.getRange("A1:D4").format("align_center").content = [
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
sheet_recopie_motivation.getRange("A1:D1").format("bold");
sheet_recopie_motivation.getRange("A2:A4").format("bold");
const sheet_recopie_motivation_empty = await LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_recopie_motivation_empty');
sheet_recopie_motivation_empty.getRange("A1:D4").format("align_center").content = [
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
sheet_recopie_motivation_empty.getRange("A1:D1").format("bold");
sheet_recopie_motivation_empty.getRange("A2:A4").format("bold");
const sheet_recopie_incr = await LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_recopie_incr');
sheet_recopie_incr.getRange('A1:A2').content = [
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
class X extends (0,LISS__WEBPACK_IMPORTED_MODULE_2__["default"])({
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
LISS__WEBPACK_IMPORTED_MODULE_2__["default"].define('test-test', X);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/struct/calc/RangeOverlay.ts":
/*!*****************************************!*\
  !*** ./src/struct/calc/RangeOverlay.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormulaRef: () => (/* binding */ FormulaRef),
/* harmony export */   RangeOverlay: () => (/* binding */ RangeOverlay),
/* harmony export */   RecopyHandle: () => (/* binding */ RecopyHandle)
/* harmony export */ });
/* harmony import */ var struct_utils_str2html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! struct/utils/str2html */ "./src/struct/utils/str2html.ts");

class RangeOverlay extends EventTarget {
    #sheet;
    #range = null;
    overlay;
    constructor(sheet, ...classlist){
        super();
        this.#sheet = sheet;
        this.#sheet.host.addEventListener('resize', ()=>{
            this.update();
        });
        this.overlay = (0,struct_utils_str2html__WEBPACK_IMPORTED_MODULE_0__.str2html)(`<div class='overlay'></div>`);
        this.overlay.classList.add(...classlist);
        sheet.content.append(this.overlay);
    }
    setRange(range) {
        this.#range = range === null ? null : range.plage_name;
        this.update();
    }
    getRect(...rect) {
        return rect;
    }
    update() {
        this.overlay.classList.toggle("hidden", this.#range === null);
        if (this.#range === null) return;
        const rect = this.getRect(...this.#sheet.getRect(this.#sheet.getRange(this.#range)));
        this.#sheet.setRect(this.overlay, rect);
    }
    addEventListener(type, callback, options) {
        // @ts-ignore
        this.overlay.addEventListener(type, callback, options);
    }
    removeEventListener(type, callback, options) {
        // @ts-ignore
        this.overlay.removeEventListener(type, callback, options);
    }
}
class FormulaRef extends RangeOverlay {
    constructor(sheet){
        super(sheet, "range_highlight");
    }
    #cur_color = 0;
    setColor(color_id) {
        this.overlay.classList.remove(`highlight_${this.#cur_color}`);
        this.overlay.classList.add(`highlight_${color_id}`);
        this.#cur_color = color_id;
    }
}
class RecopyHandle extends RangeOverlay {
    constructor(sheet){
        super(sheet, "recopy");
    }
    getRect(x, y, w, h) {
        return [
            x + w - 2,
            y + h - 2,
            5,
            5
        ];
    }
}


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
/* harmony export */   Formats: () => (/* binding */ Formats),
/* harmony export */   date2Float: () => (/* binding */ date2Float),
/* harmony export */   float2Date: () => (/* binding */ float2Date),
/* harmony export */   formatRaw: () => (/* binding */ formatRaw)
/* harmony export */ });
/* harmony import */ var _formula_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formula_parser */ "./src/struct/calc/formula_parser.ts");
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
function float2Date(float) {
    let content = new Date("1899-12-30");
    content.setDate(content.getDate() + float);
    return content;
}
function date2Float(date) {
    const beg = new Date("1899-12-30");
    return +((date.getTime() - beg.getTime()) / (24 * 3600 * 1000)).toFixed(7);
}
function formatRaw(pthis, value = pthis.rawContent) {
    if (value instanceof _formula_parser__WEBPACK_IMPORTED_MODULE_0__.Formula) return value.toString();
    return Formats.default.call(pthis, value);
}
const Formats = {
    default: function(value = this?.rawContent) {
        if (value instanceof _formula_parser__WEBPACK_IMPORTED_MODULE_0__.Formula) // @ts-ignore
        value = value.cachedValue();
        const prec = +(this?.getAttribute('precision') ?? 2);
        if (typeof value === "number") {
            if (this?.getAttribute('data-type') === "pourcent") return `${+(+value * 100).toPrecision(7)}`.replace('.', ',') + "%";
            return `${+value.toPrecision(7)}`.replace('.', ',');
        }
        if (typeof value === "boolean") return value ? 'VRAI' : 'FAUX';
        if (value instanceof Date) {
            return value.toLocaleDateString("fr-FR");
        }
        return value;
    },
    number: function(value = this.rawContent) {
        if (value instanceof _formula_parser__WEBPACK_IMPORTED_MODULE_0__.Formula) // @ts-ignore
        value = value.cachedValue();
        if (value === undefined) return '';
        if (typeof value === "string") return value;
        if (value instanceof Date) value = date2Float(value);
        if (this.getAttribute("data-type") !== "number") {
            this.setAttribute("data-type", "number");
            if (!(this.rawContent instanceof _formula_parser__WEBPACK_IMPORTED_MODULE_0__.Formula)) _sheet__WEBPACK_IMPORTED_MODULE_1__.CalcSheet.getSheetFromCell(this).getRange(this).content = value;
        }
        const prec = +(this.getAttribute('precision') ?? 2);
        return value.toLocaleString(undefined, {
            minimumFractionDigits: prec,
            maximumFractionDigits: prec
        });
    },
    pourcent: function(value = this.rawContent) {
        if (value instanceof _formula_parser__WEBPACK_IMPORTED_MODULE_0__.Formula) // @ts-ignore
        value = value.cachedValue();
        if (value === undefined) return '';
        if (typeof value === "string") return value;
        if (value instanceof Date) value = date2Float(value);
        if (this.getAttribute("data-type") !== "pourcent") {
            this.setAttribute("data-type", "pourcent");
            if (!(this.rawContent instanceof _formula_parser__WEBPACK_IMPORTED_MODULE_0__.Formula)) _sheet__WEBPACK_IMPORTED_MODULE_1__.CalcSheet.getSheetFromCell(this).getRange(this).content = value;
        }
        const prec = +(this.getAttribute('precision') ?? 2);
        return (value * 100).toLocaleString(undefined, {
            minimumFractionDigits: prec,
            maximumFractionDigits: prec
        }) + '%';
    },
    date: function(value = this.rawContent) {
        if (value instanceof _formula_parser__WEBPACK_IMPORTED_MODULE_0__.Formula) // @ts-ignore
        value = value.cachedValue();
        if (value === undefined) return '';
        if (typeof value === "string") return value;
        this.setAttribute("data-type", "date");
        if (value instanceof Date) {
            let date = value.toLocaleDateString("fr-FR");
            return date.slice(0, 6) + date.slice(8);
        }
        if (typeof value === "number") {
            const content = float2Date(value);
            if (!(this.rawContent instanceof _formula_parser__WEBPACK_IMPORTED_MODULE_0__.Formula)) _sheet__WEBPACK_IMPORTED_MODULE_1__.CalcSheet.getSheetFromCell(this).getRange(this).content = content;
            let date = content.toLocaleDateString("fr-FR");
            return date.slice(0, 6) + date.slice(8);
        }
        return value;
    },
    euros: function(value = this.rawContent) {
        if (value instanceof _formula_parser__WEBPACK_IMPORTED_MODULE_0__.Formula) // @ts-ignore
        value = value.cachedValue();
        if (value === undefined) return '';
        if (typeof value === "string") return value;
        if (value instanceof Date) value = date2Float(value);
        if (this.getAttribute("data-type") !== "number") {
            this.setAttribute("data-type", "number");
            if (!(this.rawContent instanceof _formula_parser__WEBPACK_IMPORTED_MODULE_0__.Formula)) _sheet__WEBPACK_IMPORTED_MODULE_1__.CalcSheet.getSheetFromCell(this).getRange(this).content = value;
        }
        const prec = +(this.getAttribute('precision') ?? 2);
        return value.toLocaleString(undefined, {
            minimumFractionDigits: prec,
            maximumFractionDigits: prec
        }) + ' €';
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
                    cell.format = Formats.default;
                    cell.textContent = cell.format(); //TODO: if fct
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
                const sheet = _sheet__WEBPACK_IMPORTED_MODULE_1__.CalcSheet.getSheetFromCell(cell);
                if (val[0] === 1 && val[1] === 1) {
                    let r = +(cell.getAttribute('rowspan') ?? 0);
                    let c = +(cell.getAttribute('colspan') ?? 0);
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
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./format */ "./src/struct/calc/format.ts");
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
            //this.#sheet.cursor.content = this.#input.textContent!;
            this.#sheet.states.cell_edit.state = null;
        });
        this.#input.addEventListener('focusin', ()=>{
            if (this.#cur_cell === null) return;
            this.#sheet.states.cell_edit.state = this.#cur_cell;
        //this.#cur_cell!.textContent = this.#input.textContent!;
        });
        this.#input.addEventListener('input', ()=>{
            if (this.#cur_cell === null) return;
            this.#cur_cell.textContent = (0,_format__WEBPACK_IMPORTED_MODULE_1__.formatRaw)(this.#cur_cell, this.#input.textContent);
            this.#cur_cell.dispatchEvent(new CustomEvent('input', {
                detail: true
            }));
        });
        this.#onInput = (ev)=>{
            //@ts-ignore
            if (ev.detail === true) return;
            this.#input.textContent = (0,_format__WEBPACK_IMPORTED_MODULE_1__.formatRaw)(this.#cur_cell, this.#cur_cell.textContent);
        };
    }
    syncTo(sheet) {
        this.#sheet = sheet;
        const cursor = this.#sheet.cursor;
        sheet.host.addEventListener('update', ()=>{
            // @ts-ignore
            this.#input.textContent = (0,_format__WEBPACK_IMPORTED_MODULE_1__.formatRaw)(cursor.firstCell);
        });
        cursor.addEventListener('change', ()=>{
            const cells = cursor.cells;
            this.#input.toggleAttribute('contenteditable', !sheet.isRO);
            if (cells.length === 0) {
                if (this.#cur_cell !== null) this.#cur_cell.removeEventListener('input', this.#onInput);
                this.#cur_cell = null;
                this.#input.textContent = "";
                return;
            }
            this.#cur_cell = cells[0];
            this.#cur_cell.addEventListener('input', this.#onInput);
            this.#input.textContent = (0,_format__WEBPACK_IMPORTED_MODULE_1__.formatRaw)(this.#cur_cell);
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
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format */ "./src/struct/calc/format.ts");

class Formula {
    #str;
    #exec;
    #ranges;
    #cache = null;
    constructor(str, exec, ranges_token = []){
        this.#str = str;
        this.#exec = exec;
        this.#ranges = ranges_token;
    }
    relativeTo(sheet, drow, dcol) {
        let new_ranges = this.#ranges.map((r)=>{
            //TODO: if range...
            let pos = [
                ...sheet.cellPos(sheet.getRange(r.value).firstCell)
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
    resetCache() {
        this.#cache = null;
    }
    cachedValue() {
        return this.#cache;
    }
    exec(sheet) {
        if (this.#cache !== null) return this.#cache;
        return this.#cache = this.#exec(sheet);
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
    if (typeof a === "string") return Number(a);
    if (a instanceof Date) return (0,_format__WEBPACK_IMPORTED_MODULE_0__.date2Float)(a);
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
    '&': (_, a, b)=>`${_format__WEBPACK_IMPORTED_MODULE_0__.Formats.default.call(null, a)}${_format__WEBPACK_IMPORTED_MODULE_0__.Formats.default.call(null, b)}`,
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
                let raw = sheet.getRange(tokens[0].value).firstCell.rawContent;
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
/* harmony import */ var _RangeOverlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RangeOverlay */ "./src/struct/calc/RangeOverlay.ts");

class PlageSelector {
    #overlays = new Array();
    #getOverlay(id) {
        while(id >= this.#overlays.length)this.#overlays.push(new _RangeOverlay__WEBPACK_IMPORTED_MODULE_0__.RangeOverlay(this.#sheet, "selection_highlight"));
        return this.#overlays[id];
    }
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
    #updateSelectionHighlight() {
        const cells = this.#sheet.selection.cells;
        for (let overlay of this.#overlays)overlay.setRange(null);
        if (cells.length === 1 && this.#sheet.cursor.firstCell === cells[0]) return;
        for(let i = 0; i < cells.length; ++i)this.#getOverlay(i).setRange(this.#sheet.getRange(cells[i]));
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
        sheet.cursor.addEventListener('change', ()=>{
            sheet.selection.replaceAll(sheet.getVisibleCell(sheet.cursor));
        });
        sheet.selection.addEventListener('change', ()=>{
            this.#updateSelectionHighlight();
        });
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
/* harmony export */   CellList: () => (/* binding */ CellList)
/* harmony export */ });
/* harmony import */ var _libs_LISS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../libs/LISS */ "./libs/LISS/index.ts");
/* harmony import */ var _raw_loader_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!raw-loader!./index.css */ "./node_modules/raw-loader/dist/cjs.js!./src/struct/calc/index.css");
/* harmony import */ var _formula_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formula_editor */ "./src/struct/calc/formula_editor.ts");
/* harmony import */ var _plage_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plage_editor */ "./src/struct/calc/plage_editor.ts");
/* harmony import */ var _formula_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formula_parser */ "./src/struct/calc/formula_parser.ts");
/* harmony import */ var _plage_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plage_selector */ "./src/struct/calc/plage_selector.ts");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./format */ "./src/struct/calc/format.ts");
/* harmony import */ var _RangeOverlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RangeOverlay */ "./src/struct/calc/RangeOverlay.ts");
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
    // https://stackoverflow.com/questions/21234741/place-caret-back-where-it-was-after-changing-innerhtml-of-a-contenteditable-elem
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
function parseInput(str) {
    if (str === 'VRAI') return true;
    if (str === 'FAUX') return false;
    if (str.trim() === '') return str;
    if (str[0] === "=") {
        return (0,_formula_parser__WEBPACK_IMPORTED_MODULE_2__.parse_formula)(str);
    }
    let test_number = Number(str.replace(',', '.').replaceAll('\xA0', ''));
    if (!Number.isNaN(test_number)) return test_number;
    if (str[str.length - 1] === "%" || str[str.length - 1] === "€") {
        test_number = Number(str.slice(0, -1).replaceAll('\xA0', '').replace(',', '.'));
        if (!Number.isNaN(test_number)) {
            if (str[str.length - 1] === "€") return test_number;
            return +(test_number / 100).toPrecision(7);
        }
    }
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
    //TODO: RO prop ?
    #cursor = new CellList(this, []);
    #selection = new CellList(this, []);
    #plage_selector = new _plage_selector__WEBPACK_IMPORTED_MODULE_3__.PlageSelector(this);
    #format_mngr = new _format__WEBPACK_IMPORTED_MODULE_4__.FormatManager(this);
    static getSheetFromCell(cell) {
        return _libs_LISS__WEBPACK_IMPORTED_MODULE_0__["default"].getLISSSync(cell.getRootNode().host);
    }
    get cursor() {
        return this.#cursor;
    }
    get selection() {
        return this.#selection;
    }
    get content() {
        return super.content;
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
            end.offsetLeft + end.clientWidth - start.offsetLeft + 1,
            end.offsetTop + end.clientHeight - start.offsetTop + 1
        ];
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
    #formula_refs = new Array();
    #getFormulaRef(i) {
        while(i >= this.#formula_refs.length)this.#formula_refs.push(new _RangeOverlay__WEBPACK_IMPORTED_MODULE_5__.FormulaRef(this));
        return this.#formula_refs[i];
    }
    #clearFormulaRefs() {
        for (let ref of this.#formula_refs)ref.setRange(null);
    }
    constructor(){
        super();
        const cursor = new _RangeOverlay__WEBPACK_IMPORTED_MODULE_5__.RangeOverlay(this, "cursor");
        const recopy = new _RangeOverlay__WEBPACK_IMPORTED_MODULE_5__.RecopyHandle(this);
        const copy = new _RangeOverlay__WEBPACK_IMPORTED_MODULE_5__.RangeOverlay(this, "copy_highlight");
        const main = document.querySelector("main");
        this.host.addEventListener('cell_edit_end', ()=>{
            this.#clearFormulaRefs();
        });
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
            this.#clearFormulaRefs();
            this.#getFormulaRef(1).setRange(this.getRange(beg, end));
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
                            content = new Date(src.rawContent);
                            content.setDate(content.getDate() + nb * (d_x + d_y));
                        }
                        new CellList(this, [
                            cur
                        ]).content = content;
                        cur.className = src.className; //TODO: format...
                    }while (cur !== last_recopy_target)
                }
                this.#clearFormulaRefs(); // recopy
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
            if (this.#cursor.length !== 1) throw new Error('Cursor has invalid number of cells');
            cursor.setRange(new CellList(this, [
                this.getVisibleCell(this.#cursor)
            ]));
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
            recopy.setRange(this.#selection);
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
        this.#initGrid(+(this.attrs.rows ?? 1), +(this.attrs.cols ?? 1));
        this.content.addEventListener("mousedown", (ev)=>{
            const target = ev.target;
            // the cell is being edited...
            if (target.hasAttribute('contenteditable')) return;
            if (target.tagName === "TD") this.#cursor.replaceAll(target);
            //TODO: not correct...
            if (target.tagName === "TH" && target.textContent !== "") {
                const cell = this.getRange(target.textContent).firstCell;
                this.#cursor.replaceAll(cell);
            }
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
            if (ev.code.startsWith('Arrow')) {
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
                this.cursor.replaceAll(next);
                return;
            }
            // no edition allowed...
            if (this.attrs.ro === "true") {
                return;
            }
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
                    copy.setRange(this.#selection);
                    // WHY ???
                    //h.style.setProperty('top'   , `${selection[0].offsetTop}px`);
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
                this.cursor.replaceAll(next);
                return;
            }
        });
        const onInput2 = (ev)=>{
            this.#clearFormulaRefs();
            // @ts-ignore
            if (ev.detail !== true) onInput(ev);
        };
        //TODO: here...
        this.content.addEventListener('focusin', (ev)=>{
            const target = ev.target;
            copy.setRange(null);
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
                const ranges_names = Object.keys(ranges_colors);
                for(let i = 0; i < ranges_names.length; ++i){
                    const range = ranges_names[i];
                    const ref = this.#getFormulaRef(i);
                    ref.setColor(ranges_colors[range]);
                    ref.setRange(this.getRange(range));
                }
                cell.addEventListener('input', onInput2); // remove colors...
            } else {
                cell.textContent = _format__WEBPACK_IMPORTED_MODULE_4__.Formats.default.call(cell);
            }
        });
        //@ts-ignore
        this.host.addEventListener("cell_edit_end", (ev)=>{
            this.host.classList.toggle("cell_edit", false);
            const cell = ev.detail;
            cell.removeEventListener("input", onInput2); // to be safe
            cell.toggleAttribute("contenteditable", false);
            console.warn("leave edit", cell.textContent);
            new CellList(this, [
                cell
            ]).content = cell.textContent;
            this.update();
            // leave
            this.#selection.clear();
        });
        this.content.addEventListener("focusout", (ev)=>{
            const target = ev.target;
            if (target.tagName !== "TD") return;
            this.states.cell_edit.state = null;
        });
        if (this.nbRows >= 1 && this.nbCols >= 1) this.cursor.replaceAll(this.getRange("A1"));
    }
    getVisibleCell(c) {
        if (c instanceof CellList) c = c.firstCell;
        return c.cell ?? c;
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
        const colgroup = this.content.querySelector('colgroup');
        colgroup.replaceChildren();
        const tbody = this.#tbody;
        tbody.replaceChildren();
        colgroup.append(document.createElement("col"));
        for(let col = 0; col < nbcols; ++col){
            const th = document.createElement('th');
            th.textContent = String.fromCharCode(65 + col);
            col_html.append(th);
            colgroup.append(document.createElement("col"));
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
                cell.format = _format__WEBPACK_IMPORTED_MODULE_4__.Formats.default;
                row_html.append(cell);
            }
            tbody.append(row_html);
        }
    }
    setColSize(col, size) {
        if (typeof col === "string") col = this.ref2pos(col)[1];
        const html = this.content.querySelector('colgroup').children[col];
        html.style.setProperty("width", size);
        html.style.setProperty('overflow-x', 'hidden');
    }
    #initGrid(nbrows, nbcols) {
        const table = document.createElement('table');
        const tbody = document.createElement('tbody');
        this.#tbody = tbody;
        const resizeObs = new ResizeObserver(()=>{
            this.host.dispatchEvent(new CustomEvent('resize'));
        });
        resizeObs.observe(this.host);
        this.#tbody.setAttribute('tabindex', '0');
        table.append(document.createElement("colgroup"));
        table.append(tbody);
        this.content.append(table);
        this.resize(nbrows, nbcols);
    }
    getRange(from, to = from) {
        // process refs...
        if (from instanceof HTMLTableCellElement) return this.getRange(this.cellPos(from), to);
        if (to instanceof HTMLTableCellElement) return this.getRange(from, this.cellPos(to));
        if (typeof from === "string") {
            if (from.includes(":")) [from, to] = from.split(':');
            from = this.ref2pos(from, false);
            return this.getRange(from, to);
        }
        if (typeof to === "string") return this.getRange(from, this.ref2pos(to, true));
        // get range
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
    ref2pos(ref, end_line_col = true) {
        ref = ref.replaceAll('$', '');
        let sep = ref.search(/[0-9]/);
        if (sep === 0) return end_line_col ? this.ref2pos(`A${ref}`) : [
            this.nbCols,
            +ref
        ];
        if (sep === -1) return this.ref2pos(`${ref}${end_line_col ? this.nbRows : 1}`);
        const row = +ref.slice(sep);
        let col = 0;
        for(let i = 0; i < sep; ++i){
            col *= 26;
            col += ref.charCodeAt(i) - 65;
        }
        ++col;
        return [
            row,
            col
        ];
    }
    pos2ref(row, col) {
        let col_str = "";
        do {
            let id = (col - 1) % 26;
            col_str = String.fromCharCode(65 + id) + col_str;
            col -= id + 1;
            col /= 26; // should be integer, so ok.
        }while (col > 0)
        return `${col_str}${row}`;
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
            const cells = [
                ...this.content.querySelectorAll('td')
            ].filter((e)=>e.rawContent instanceof _formula_parser__WEBPACK_IMPORTED_MODULE_2__.Formula);
            for (let cell of cells)// @ts-ignore
            cell.rawContent.resetCache();
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
            this.host.dispatchEvent(new CustomEvent('update'));
            this.#isUpdating = false;
        });
    }
    get isRO() {
        return this.attrs.ro === "true";
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
        if (typeof content === 'string') {
            let raw = content;
            content = parseInput(content);
            if (typeof content === "number" && raw[raw.length - 1] === "%") {
                let f = _format__WEBPACK_IMPORTED_MODULE_4__.Format.extractFormat(this);
                if (!f.hasProperty("format") || f.getProperty("format") === _format__WEBPACK_IMPORTED_MODULE_4__.Formats.default) this.format(_format__WEBPACK_IMPORTED_MODULE_4__.Formats.pourcent);
            }
            if (typeof content === "number" && raw[raw.length - 1] === "€") {
                let f = _format__WEBPACK_IMPORTED_MODULE_4__.Format.extractFormat(this);
                if (!f.hasProperty("format") || f.getProperty("format") === _format__WEBPACK_IMPORTED_MODULE_4__.Formats.default) this.format(_format__WEBPACK_IMPORTED_MODULE_4__.Formats.euros);
            }
        }
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
            if (raw_val instanceof _formula_parser__WEBPACK_IMPORTED_MODULE_2__.Formula) {
                const formats = Object.values(_format__WEBPACK_IMPORTED_MODULE_4__.Formats);
                //If no number format, deduce format.
                if (cell.format === undefined || cell.format === _format__WEBPACK_IMPORTED_MODULE_4__.Formats.default) {
                    let format = _format__WEBPACK_IMPORTED_MODULE_4__.Formats.default;
                    let nb_dates = 0;
                    for (let r of raw_val.rangesToken){
                        let f = _format__WEBPACK_IMPORTED_MODULE_4__.Format.extractFormat(this.sheet.getRange(r.value)).getProperty("format");
                        if (format !== f && formats.indexOf(f) > formats.indexOf(format)) format = f;
                        if (f === _format__WEBPACK_IMPORTED_MODULE_4__.Formats.date) ++nb_dates;
                    }
                    // h4ck
                    if (format === _format__WEBPACK_IMPORTED_MODULE_4__.Formats.date && nb_dates > 1) format = _format__WEBPACK_IMPORTED_MODULE_4__.Formats.default;
                    if (format !== _format__WEBPACK_IMPORTED_MODULE_4__.Formats.default) // @ts-ignore
                    cell.format = format;
                }
                value = raw_val.exec(this.#sheet);
            }
            let type = typeof value;
            if (value instanceof Date) {
                type = "date";
                cell.format = _format__WEBPACK_IMPORTED_MODULE_4__.Formats.date;
            }
            // @ts-ignore
            cell.textContent = cell.format(value);
            if (cell.format === _format__WEBPACK_IMPORTED_MODULE_4__.Formats.date) type = 'date';
            if (cell.format === _format__WEBPACK_IMPORTED_MODULE_4__.Formats.pourcent) type = 'pourcent';
            if (cell.format === _format__WEBPACK_IMPORTED_MODULE_4__.Formats.euros || cell.format === _format__WEBPACK_IMPORTED_MODULE_4__.Formats.number) type = 'number';
            cell.setAttribute('data-type', type);
        }
        this.#sheet.update();
    }
    setRO(is_ro = true) {
        for (let cell of this.#cells)cell.is_ro = is_ro;
        return this;
    }
    get length() {
        return this.#cells.length;
    }
    has(...cells) {
        for (let cell of cells)if (!this.#cells.includes(cell)) return false;
        return true;
    }
    remove(...cells) {
        this.#cells = this.#cells.filter((c)=>!cells.includes(c));
        this.dispatchEvent(new CustomEvent("change"));
    }
    replaceAll(...cells) {
        this.#cells.length = 0;
        this.add(...cells);
    }
    add(...cells) {
        if (cells[0] instanceof CellList) cells = cells[0].cells;
        this.#cells.push(...cells);
        this.dispatchEvent(new CustomEvent("change"));
    }
    get firstCell() {
        if (this.#cells.length < 1) throw new Error("nope");
        return this.#cells[0];
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
                    "CM2"
                ]
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
main.addEventListener('scroll', updateHeader);
updateHeader();


/***/ }),

/***/ "./src/struct/utils/str2html.ts":
/*!**************************************!*\
  !*** ./src/struct/utils/str2html.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   str2DF: () => (/* binding */ str2DF),
/* harmony export */   str2html: () => (/* binding */ str2html)
/* harmony export */ });
//https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro
function str2html(html) {
    let template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstElementChild;
}
function str2DF(html) {
    let template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7VUFDQTtVQUNBO1VBQ0EsdURBQXVELGlCQUFpQjtVQUN4RTtVQUNBLGdEQUFnRCxhQUFhO1VBQzdEOzs7OztVQ05BOzs7OztTRUFBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0NvdXJzLy4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMS9pbmRleC5jc3M/MWUzNiIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTEvaW5kZXgubWQiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvaW5kZXguY3NzIiwid2VicGFjazovL0NvdXJzLy4vbGlicy9MSVNTL2luZGV4LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMS9pbmRleC50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9SYW5nZU92ZXJsYXkudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvZm9ybWF0LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL2Zvcm11bGFfZWRpdG9yLnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL2Zvcm11bGFfcGFyc2VyLnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL3BsYWdlX2VkaXRvci50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9wbGFnZV9zZWxlY3Rvci50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9zaGVldC50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY29udGVudC50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvbWVudS50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvdXRpbHMvc3RyMmh0bWwudHMiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL2FzeW5jIG1vZHVsZSIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicGFnZXMvUjEtMDEvQ00vQ00xL2luZGV4Lmh0bWxcIjsiLCJleHBvcnQgZGVmYXVsdCBcIjpob3N0IHRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICAgICYgPiB0Ym9keSB7XFxuICAgICAgICBvdXRsaW5lOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgJiA+IHRib2R5ID4gdHI6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBcXG4gICAgICAgICYgPiB0aCB7XFxuICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuOmhvc3QgOmlzKHRyLHRoLHRkKSB7XFxuICAgIGJvcmRlcjoxcHggc29saWQgI2MwYzBjMDtcXG59XFxuXFxuOmhvc3QoW3Nob3dncmlkPVxcXCJmYWxzZVxcXCJdKSB0ZCB7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbjpob3N0IHRyIHtcXG4gICAgaGVpZ2h0OiAwLjQ1Y207XFxuICAgIGxpbmUtaGVpZ2h0OiAwLjQ1Y207XFxufVxcblxcblxcbjpob3N0IDppcyh0ZCwgdGgpOm5vdChbY29udGVudGVkaXRhYmxlXSkge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLypcXG46aG9zdCB0ZFtjb250ZW50ZWRpdGFibGVdIHtcXG4gICAgdXNlci1zZWxlY3Q6IHRleHQ7XFxufSovXFxuXFxuOmhvc3QgY29sZ3JvdXAgPiBjb2wge1xcbiAgICB3aWR0aDogMi4yNmNtO1xcbn1cXG46aG9zdCBjb2xncm91cCA+IGNvbDpmaXJzdC1jaGlsZCB7XFxuICAgIHdpZHRoOiBjYWxjKCAyLjI2Y20gLyAyLjUpIDtcXG59XFxuXFxuOmhvc3QgOmlzKHRkLCB0aCkge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGhlaWdodDogMC40NWNtO1xcblxcbiAgICBmb250LXNpemU6IDEwcHQ7XFxuXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGliZXJhdGlvbiBTYW5zJztcXG59XFxuXFxuXFxuOmhvc3Qge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuOmhvc3QgZGl2LnRvb2xiYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgcGFkZGluZzogNHB4O1xcblxcbiAgICAmID4gKjpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICAgICAgICBmbGV4OiAxIDEgMDtcXG4gICAgfVxcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICB3aWR0aDogY2FsYyggMS41ICogMi4yNmNtICk7XFxuICAgIH1cXG59XFxuXFxuOmhvc3QgdGgge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xcbiAgICBib3JkZXItY29sb3I6ICM4YThhOGE7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuXFxuICAgICYuaGlnaGxpZ2h0IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzOThlZTc7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgIH1cXG59XFxuXFxuOmhvc3QoLmNlbGxfZWRpdCkgLmN1cnNvciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbjpob3N0KC5yZWNvcHkpIHtcXG4gICAgY3Vyc29yOiBjZWxsO1xcbn1cXG5cXG46aG9zdCB7XFxuXFxuICAgIC5yZWNvcHkge1xcbiAgICAgICAgY3Vyc29yOiBjZWxsO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM5OGVlNztcXG4gICAgfVxcblxcbiAgICAuY3Vyc29yIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMzk4ZWU3O1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIH1cXG59XFxuXFxuOmhvc3QgLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpob3N0IC5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG46aG9zdCAuc2VsZWN0aW9uX2hpZ2hsaWdodCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOThlZTc7IC8qI2NkZTNmOTsqL1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBUT0RPICovXFxufVxcblxcblxcbjpob3N0IHRkIHtcXG5cXG4gICAgLS1mb250X3NpemU6IDEwcHQ7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udF9zaXplKTtcXG4gICAgbGluZS1oZWlnaHQ6IGNhbGMoIHZhcigtLWZvbnRfc2l6ZSkgKiAxLjIgKTtcXG5cXG4gICAgLS1pbmRlbnQ6IDA7XFxuXFxuICAgIC0tYm9yZGVyX2NvbG9yOiBibGFjaztcXG4gICAgLS1iYWNrZ3JvdW5kX2NvbG9yOiB3aGl0ZTtcXG4gICAgLS1mb3JlZ3JvdW5kX2NvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZF9jb2xvcik7XFxuICAgIGNvbG9yICAgICAgICAgICA6IHZhcigtLWZvcmVncm91bmRfY29sb3IpO1xcblxcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xcblxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcblxcbiAgICAmOmlzKFtkYXRhLXR5cGU9XFxcIm51bWJlclxcXCJdLFtkYXRhLXR5cGU9XFxcInBvdXJjZW50XFxcIl0sW2RhdGEtdHlwZT1cXFwiZGF0ZVxcXCJdLCBbZGF0YS10eXBlPVxcXCJib29sZWFuXFxcIl0pIHtcXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICB9XFxuXFxuICAgICZbY29udGVudGVkaXRhYmxlXSB7XFxuICAgICAgICBvdXRsaW5lOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgJi5hanVzdGVyIHtcXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIH1cXG5cXG4gICAgLyoqIHN0eWxlICoqL1xcbiAgICAmLml0YWxpYyB7XFxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIH1cXG4gICAgJi5ib2xkIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB9XFxuICAgICYudW5kZXJsaW5lIHtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB9XFxuICAgICYuYWxpZ25fbGVmdCB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoIHZhcigtLWluZGVudCkgKiAxMHB4KTtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIH1cXG4gICAgJi5hbGlnbl9jZW50ZXIge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgICYuYWxpZ25fcmlnaHQge1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyggdmFyKC0taW5kZW50KSAqIDEwcHgpO1xcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIH1cXG4gICAgJi52YWxpZ25fdG9wIHtcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIH1cXG4gICAgJi52YWxpZ25fbWlkZGxlIHtcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIH1cXG4gICAgJi52YWxpZ25fYm90dG9tIHtcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICAgIH1cXG4gICAgLyogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTI0MTc1Ny9hcHBseWluZy1ib3JkZXJzLXRvLWEtc2luZ2xlLXRhYmxlLWNlbGwtd2hlbi11c2luZy1ib3JkZXItY29sbGFwc2UgKi9cXG4gICAgJi5ib3JkZXJfdG9wIHtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBkb3VibGUgdmFyKC0tYm9yZGVyX2NvbG9yKTtcXG4gICAgfVxcbiAgICAmLmJvcmRlcl9ib3R0b20ge1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdWJsZSB2YXIoLS1ib3JkZXJfY29sb3IpO1xcbiAgICB9XFxuICAgICYuYm9yZGVyX2xlZnQge1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBkb3VibGUgdmFyKC0tYm9yZGVyX2NvbG9yKTtcXG4gICAgfVxcbiAgICAmLmJvcmRlcl9yaWdodCB7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBkb3VibGUgdmFyKC0tYm9yZGVyX2NvbG9yKTtcXG4gICAgfVxcbn1cXG5cXG46aG9zdCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuOmhvc3QgLnJhbmdlX2hpZ2hsaWdodCB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG5cXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1oaWdobGlnaHRfY29sb3IpO1xcbn1cXG5cXG46aG9zdCAuZm9ybXVsYV9oaWdobGlnaHQge1xcbiAgICBjb2xvcjogdmFyKC0taGlnaGxpZ2h0X2NvbG9yKTtcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF8wIHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICNmYTBjMGM7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfMSB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjZmEwY2ZhO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzIge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzBjODQwYztcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF8zIHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICMwMTAxODA7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfNCB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjODcxNzE3O1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzUge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzg3MTc4NztcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF82IHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICM4NDg0MGM7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfNyB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjMGMwY2ZhO1xcbn1cXG5cXG5cXG4uY29weV9oaWdobGlnaHQge1xcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4vKiBUb21vcnJvdyBUaGVtZSAqL1xcbi8qIGh0dHA6Ly9qbWJsb2cuZ2l0aHViLmNvbS9jb2xvci10aGVtZXMtZm9yLWdvb2dsZS1jb2RlLWhpZ2hsaWdodGpzICovXFxuLyogT3JpZ2luYWwgdGhlbWUgLSBodHRwczovL2dpdGh1Yi5jb20vY2hyaXNrZW1wc29uL3RvbW9ycm93LXRoZW1lICovXFxuXFxuLyogVG9tb3Jyb3cgQ29tbWVudCAqL1xcbi5obGpzLWNvbW1lbnQsXFxuLmhsanMtcXVvdGUge1xcblxcdGNvbG9yOiAjOGU5MDhjO1xcbn1cXG5cXG4vKiBUb21vcnJvdyBSZWQgKi9cXG4uaGxqcy12YXJpYWJsZSxcXG4uaGxqcy10ZW1wbGF0ZS12YXJpYWJsZSxcXG4uaGxqcy10YWcsXFxuLmhsanMtbmFtZSxcXG4uaGxqcy1zZWxlY3Rvci1pZCxcXG4uaGxqcy1zZWxlY3Rvci1jbGFzcyxcXG4uaGxqcy1yZWdleHAsXFxuLmhsanMtZGVsZXRpb24ge1xcblxcdGNvbG9yOiAjYzgyODI5O1xcbn1cXG5cXG4vKiBUb21vcnJvdyBPcmFuZ2UgKi9cXG4uaGxqcy1udW1iZXIsXFxuLmhsanMtYnVpbHRfaW4sXFxuLmhsanMtYnVpbHRpbi1uYW1lLFxcbi5obGpzLWxpdGVyYWwsXFxuLmhsanMtdHlwZSxcXG4uaGxqcy1wYXJhbXMsXFxuLmhsanMtbWV0YSxcXG4uaGxqcy1saW5rIHtcXG5cXHRjb2xvcjogI2Y1ODcxZjtcXG59XFxuXFxuLyogVG9tb3Jyb3cgWWVsbG93ICovXFxuLmhsanMtYXR0cmlidXRlIHtcXG5cXHRjb2xvcjogI2VhYjcwMDtcXG59XFxuXFxuLyogVG9tb3Jyb3cgR3JlZW4gKi9cXG4uaGxqcy1zdHJpbmcsXFxuLmhsanMtc3ltYm9sLFxcbi5obGpzLWJ1bGxldCxcXG4uaGxqcy1hZGRpdGlvbiB7XFxuXFx0Y29sb3I6ICM3MThjMDA7XFxufVxcblxcbi8qIFRvbW9ycm93IEJsdWUgKi9cXG4uaGxqcy10aXRsZSxcXG4uaGxqcy1zZWN0aW9uIHtcXG5cXHRjb2xvcjogIzQyNzFhZTtcXG59XFxuXFxuLyogVG9tb3Jyb3cgUHVycGxlICovXFxuLmhsanMta2V5d29yZCxcXG4uaGxqcy1zZWxlY3Rvci10YWcge1xcblxcdGNvbG9yOiAjODk1OWE4O1xcbn1cXG5cXG4uaGxqcyB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0b3ZlcmZsb3cteDogYXV0bztcXG5cXHRjb2xvcjogIzRkNGQ0YztcXG5cXHRwYWRkaW5nOiAwLjVlbTtcXG59XFxuXFxuLmhsanMtZW1waGFzaXMge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmhsanMtc3Ryb25nIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XCI7IiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBleHBvcnRlZCB0eXBlcyA9PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKlxudHlwZSBTPEEsQj4gPSB7XG5cdEE6IEEsXG5cdEI6IEJcbn07XG50eXBlIExIID0gUzx1bmtub3duLHVua25vd24+O1xuXG50eXBlIGluZmVyQTxUPiA9IFQgZXh0ZW5kcyBTPGluZmVyIEEsIGFueT4gPyBBIDogbmV2ZXI7XG5cbmZ1bmN0aW9uIGZvbzxUIGV4dGVuZHMgTEg+KHQ6IFQpOiBpbmZlckE8VD4ge1xuXHRyZXR1cm4gdC5BIGFzIGluZmVyQTxUPjtcbn1cblxubGV0IFggPSB7XG5cdEE6IDMyLFxuXHRCOiBcInN0clwiXG59O1xuXG5sZXQgYyA9IGZvbyhYKTtcbiovXG5cbmV4cG9ydCB0eXBlIENTU19SZXNvdXJjZSA9IHN0cmluZ3xSZXNwb25zZXxIVE1MU3R5bGVFbGVtZW50fENTU1N0eWxlU2hlZXQ7XG5leHBvcnQgdHlwZSBDU1NfU291cmNlICAgPSBDU1NfUmVzb3VyY2UgfCBQcm9taXNlPENTU19SZXNvdXJjZT47XG5cbmV4cG9ydCB0eXBlIEhUTUxfUmVzb3VyY2UgPSBzdHJpbmd8UmVzcG9uc2V8SFRNTFRlbXBsYXRlRWxlbWVudDtcbmV4cG9ydCB0eXBlIEhUTUxfU291cmNlICAgPSBIVE1MX1Jlc291cmNlIHwgUHJvbWlzZTxIVE1MX1Jlc291cmNlPjtcblxuZXhwb3J0IHR5cGUgTElTU09wdGlvbnM8RXh0ZW5kcyAgICBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdFx0SG9zdCAgICAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdFx0QXR0cnMgICAgICBleHRlbmRzIHN0cmluZyxcblx0XHRcdFx0XHRcdFBhcmFtZXRlcnMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PiA9IHtcblxuXHRleHRlbmRzPzogQ29uc3RydWN0b3I8RXh0ZW5kcz4sXG5cdGhvc3QgICA/OiBDb25zdHJ1Y3RvcjxIb3N0PixcblxuXHRkZXBlbmRlbmNpZXM/OiByZWFkb25seSBQcm9taXNlPGFueT5bXSxcblx0YXR0cmlidXRlcyAgPzogcmVhZG9ubHkgQXR0cnNbXSxcblx0cGFyYW1zICAgICAgPzogUmVhZG9ubHk8UGFyYW1ldGVycz4sXG5cblx0Y29udGVudD86IEhUTUxfU291cmNlLFxuXHRjc3MgICAgPzogIENTU19Tb3VyY2UgfCByZWFkb25seSBDU1NfU291cmNlW10sXG5cdHNoYWRvdyA/OiAgU2hhZG93Q2ZnLFxufTtcblxuZXhwb3J0IGVudW0gU2hhZG93Q2ZnIHtcblx0Tk9ORSA9ICdub25lJyxcblx0T1BFTiA9ICdvcGVuJywgXG5cdENMT1NFPSAnY2xvc2VkJ1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBDbGFzcyA9PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5sZXQgX19jc3RyX2hvc3QgIDogYW55ID0gbnVsbDtcblxudHlwZSBDb25zdHJ1Y3RvcjxUPiA9IG5ldyAoKSA9PiBUO1xuaW50ZXJmYWNlIENsYXNzIHt9XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50L2F0dGFjaFNoYWRvd1xuY29uc3QgQ0FOX0hBVkVfU0hBRE9XID0gW1xuXHRudWxsLCAnYXJ0aWNsZScsICdhc2lkZScsICdibG9ja3F1b3RlJywgJ2JvZHknLCAnZGl2Jyxcblx0J2Zvb3RlcicsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdoZWFkZXInLCAnbWFpbicsXG5cdCduYXYnLCAncCcsICdzZWN0aW9uJywgJ3NwYW4nXG5cdFxuXTtcbmZ1bmN0aW9uIF9jYW5IYXNTaGFkb3codGFnOiB0eXBlb2YgSFRNTEVsZW1lbnQpIHtcblx0cmV0dXJuIENBTl9IQVZFX1NIQURPVy5pbmNsdWRlcyggX2VsZW1lbnQydGFnbmFtZSh0YWcpICk7XG59XG5cbnR5cGUgUmVzb3VyY2UgPSBVUkx8UmVzcG9uc2U7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTElTUzxFeHRlbmRzICAgIGV4dGVuZHMgQ2xhc3MgICAgICAgICAgICAgID0gQ2xhc3MsXG5cdFx0XHRcdFx0XHRcdCBIb3N0ICAgICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQgICAgICAgID0gSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0XHRcdCBBdHRycyAgICAgIGV4dGVuZHMgc3RyaW5nICAgICAgICAgICAgID0gbmV2ZXIsXG5cdFx0XHRcdFx0XHRcdCBQYXJhbWV0ZXJzIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+ID0ge30+KHtcblx0XHRcdFx0XHRcdFx0XHRleHRlbmRzICAgICA6IHBfZXh0ZW5kcyxcblx0XHRcdFx0XHRcdFx0XHRob3N0ICAgICAgICA6IHBfaG9zdCxcblx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmNpZXM6IHBfZGVwcyxcblx0XHRcdFx0XHRcdFx0ICAgIGF0dHJpYnV0ZXMgIDogcF9hdHRycyxcblx0XHRcdFx0XHRcdFx0ICAgIHBhcmFtcyxcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50LFxuXHRcdFx0XHRcdFx0XHRcdGNzcyxcblx0XHRcdFx0XHRcdFx0XHRzaGFkb3cgICAgICA6IHBfc2hhZG93LFxuXHRcdFx0XHRcdFx0XHR9OiBMSVNTT3B0aW9uczxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1ldGVycz4gPSB7fSkge1xuXG5cdC8vVE9ETyBtZXJnZSBwcm9wIGlmIGV4dGVuZHMgTElTUy4uLlxuXG5cdGNvbnN0IGhvc3QgICAgICAgID0gcF9ob3N0ICAgID8/IEhUTUxFbGVtZW50IGFzIENvbnN0cnVjdG9yPEhvc3Q+O1xuXHRjb25zdCBfZXh0ZW5kcyAgICA9IHBfZXh0ZW5kcyA/PyBPYmplY3QgICAgICBhcyB1bmtub3duIGFzIENvbnN0cnVjdG9yPEV4dGVuZHM+O1xuXHRjb25zdCBhdHRyaWJ1dGVzICA9IHBfYXR0cnMgICA/PyBbXTtcblx0Y29uc3QgZGVwZW5kZW5jaWVzPSBwX2RlcHMgICAgPyBbLi4ucF9kZXBzXSA6IFtdO1xuXHRjb25zdCBjYW5IYXNTaGFkb3c9IF9jYW5IYXNTaGFkb3coaG9zdCk7XG5cdGNvbnN0IHNoYWRvdyAgICAgID0gcF9zaGFkb3cgID8/IChjYW5IYXNTaGFkb3cgPyBTaGFkb3dDZmcuQ0xPU0UgOiBTaGFkb3dDZmcuTk9ORSk7XG5cblx0aWYoICEgY2FuSGFzU2hhZG93ICYmIHNoYWRvdyAhPT0gU2hhZG93Q2ZnLk5PTkUpXG5cdFx0dGhyb3cgbmV3IEVycm9yKGBIb3N0IGVsZW1lbnQgJHtfZWxlbWVudDJ0YWduYW1lKGhvc3QpfSBkb2VzIG5vdCBzdXBwb3J0IFNoYWRvd1Jvb3RgKTtcblxuXHQvLyBDT05URU5UIHByb2Nlc3Npbmdcblx0aWYoIGNvbnRlbnQgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdGRlcGVuZGVuY2llcy5wdXNoKCAoIGFzeW5jICgpID0+IHtcblxuXHRcdFx0Y29udGVudCA9IGF3YWl0IGNvbnRlbnQ7XG5cblx0XHRcdGlmKGNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MVGVtcGxhdGVFbGVtZW50KVxuXHRcdFx0Y29udGVudCA9IGNvbnRlbnQuaW5uZXJIVE1MO1xuXG5cdFx0XHRpZiggdHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHtcblxuXHRcdFx0XHRjb250ZW50ID0gY29udGVudC50cmltKCk7IC8vIE5ldmVyIHJldHVybiBhIHRleHQgbm9kZSBvZiB3aGl0ZXNwYWNlIGFzIHRoZSByZXN1bHRcblx0XHRcdFx0aWYoY29udGVudCA9PT0gJycpXG5cdFx0XHRcdFx0Y29udGVudCA9IHVuZGVmaW5lZDtcblxuXHRcdFx0fVxuXHRcdFx0aWYoIGNvbnRlbnQgaW5zdGFuY2VvZiBSZXNwb25zZSApXG5cdFx0XHRcdGNvbnRlbnQgPSBhd2FpdCBjb250ZW50LnRleHQoKTtcblxuXHRcdFx0cmV0dXJuIExJU1NCYXNlLlBhcmFtZXRlcnMuY29udGVudCA9IGNvbnRlbnQ7XG5cdFx0fSkoKSApO1xuXHR9XG5cblx0Ly8gQ1NTIHByb2Nlc3Npbmdcblx0bGV0IHN0eWxlc2hlZXRzOiByZWFkb25seSBDU1NTdHlsZVNoZWV0W10gPSBbXTtcblx0aWYoIGNzcyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0aWYoICEgQXJyYXkuaXNBcnJheShjc3MpIClcblx0XHRcdGNzcyA9IFtjc3MgYXMgQ1NTX1NvdXJjZV07XG5cblx0XHRzdHlsZXNoZWV0cyA9IG5ldyBBcnJheTxDU1NTdHlsZVNoZWV0Pihjc3MubGVuZ3RoKTtcblxuXHRcdGNvbnN0IGZldGNoX2NzcyA9IChhc3luYyAoY3NzOiBDU1NfU291cmNlKSA9PiB7XG5cdFx0XHRjc3MgPSBhd2FpdCBjc3M7XG5cdFx0XHRpZihjc3MgaW5zdGFuY2VvZiBDU1NTdHlsZVNoZWV0KVxuXHRcdFx0XHRyZXR1cm4gY3NzO1xuXHRcdFx0aWYoIGNzcyBpbnN0YW5jZW9mIEhUTUxTdHlsZUVsZW1lbnQpXG5cdFx0XHRcdHJldHVybiBjc3Muc2hlZXQhO1xuXG5cdFx0XHRsZXQgc3R5bGUgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuXHRcdFx0aWYoIHR5cGVvZiBjc3MgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRcdGF3YWl0IHN0eWxlLnJlcGxhY2UoY3NzKTtcblx0XHRcdFx0cmV0dXJuIHN0eWxlO1xuXHRcdFx0fVxuXG5cdFx0XHQvL2lmKCBjc3MgaW5zdGFuY2VvZiBSZXNwb25zZSApXG5cdFx0XHRhd2FpdCBzdHlsZS5yZXBsYWNlKGF3YWl0IGNzcy50ZXh0KCkpO1xuXHRcdFx0cmV0dXJuIHN0eWxlO1xuXHRcdH0pO1xuXG5cdFx0ZGVwZW5kZW5jaWVzLnB1c2goIC4uLmNzcy5tYXAoIGFzeW5jIChjc3MsIGlkeCkgPT4gIChzdHlsZXNoZWV0cyBhcyBhbnkpW2lkeF0gPSBhd2FpdCBmZXRjaF9jc3MoY3NzKSApICk7XG5cdH1cblxuXHR0eXBlIExIb3N0ID0gTElTU0hvc3Q8TElTU0Jhc2U+O1xuXG5cdC8vIEB0cy1pZ25vcmVcblx0Y2xhc3MgTElTU0Jhc2UgZXh0ZW5kcyBfZXh0ZW5kcyB7XG5cblx0XHRyZWFkb25seSAjaG9zdDogYW55OyAvLyBwcmV2ZW50cyBpc3N1ZSAjMS4uLlxuXG5cdFx0Y29uc3RydWN0b3IoKSB7XG5cblx0XHRcdHN1cGVyKCk7XG5cblx0XHRcdC8vIGg0Y2ssIG9rYXkgYmVjYXVzZSBKUyBpcyBtb25vdGhyZWFkZWQuXG5cdFx0XHRpZiggX19jc3RyX2hvc3QgPT09IG51bGwgKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgZG8gbm90IGRpcmVjdGx5IGNhbGwgdGhpcyBjb25zdHJ1Y3RvclwiKTtcblx0XHRcdHRoaXMuI2hvc3QgPSBfX2NzdHJfaG9zdDtcblx0XHRcdF9fY3N0cl9ob3N0ID0gbnVsbDtcblx0XHR9XG5cblx0XHRwdWJsaWMgZ2V0IGhvc3QoKTogSG9zdCB7XG5cdFx0XHRyZXR1cm4gdGhpcy4jaG9zdDtcblx0XHR9XG5cdFx0cHJvdGVjdGVkIGdldCBhdHRycygpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkuYXR0cnM7XG5cdFx0fVxuXHRcdHByb3RlY3RlZCBzZXRBdHRyRGVmYXVsdCggYXR0cjogQXR0cnMsIHZhbHVlOiBzdHJpbmd8bnVsbCkge1xuXHRcdFx0cmV0dXJuICh0aGlzLiNob3N0IGFzIExIb3N0KS5zZXRBdHRyRGVmYXVsdChhdHRyLCB2YWx1ZSk7XG5cblx0XHR9XG5cdFx0cHVibGljIGdldCBwYXJhbXMoKTogUmVhZG9ubHk8UGFyYW1ldGVycz4ge1xuXHRcdFx0cmV0dXJuICh0aGlzLiNob3N0IGFzIExIb3N0KS5wYXJhbXM7XG5cdFx0fVxuXHRcdHB1YmxpYyBzZXRQYXJhbTxUIGV4dGVuZHMga2V5b2YgUGFyYW1ldGVycz4obmFtZTogVCwgdmFsdWU6IFBhcmFtZXRlcnNbVF0pIHtcblx0XHRcdCh0aGlzLiNob3N0IGFzIExIb3N0KS5wYXJhbXNbbmFtZV0gPSB2YWx1ZTtcblx0XHR9XG5cdFx0cHJvdGVjdGVkIGdldCBjb250ZW50KCkge1xuXHRcdFx0cmV0dXJuICh0aGlzLiNob3N0IGFzIExIb3N0KS5jb250ZW50ITtcblx0XHR9XG5cblx0XHRzdGF0aWMgcmVhZG9ubHkgUGFyYW1ldGVycyA9IHtcblx0XHRcdGhvc3QsXG5cdFx0XHRkZXBlbmRlbmNpZXMsXG5cdFx0XHRhdHRyaWJ1dGVzLFxuXHRcdFx0cGFyYW1zLFxuXHRcdFx0Y29udGVudCxcblx0XHRcdHN0eWxlc2hlZXRzLFxuXHRcdFx0c2hhZG93LFxuXHRcdH07XG5cblx0XHRwcm90ZWN0ZWQgb25BdHRyQ2hhbmdlZChfbmFtZTogc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRcdF9vbGRWYWx1ZTogc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRcdF9uZXdWYWx1ZTogc3RyaW5nKTogdm9pZHxmYWxzZSB7fVxuXG5cdFx0cHVibGljIGdldCBpc0luRE9NKCkge1xuXHRcdFx0cmV0dXJuICh0aGlzLiNob3N0IGFzIExIb3N0KS5pc0luRE9NO1xuXHRcdH1cblx0XHRwcm90ZWN0ZWQgb25ET01Db25uZWN0ZWQoKSB7fVxuXHRcdHByb3RlY3RlZCBvbkRPTURpc2Nvbm5lY3RlZCgpIHt9XG5cdH1cblxuXHRyZXR1cm4gTElTU0Jhc2U7XG59XG5cbi8vVE9ETzogb3RoZXIgb3B0aW9ucy4uLlxuZnVuY3Rpb24gZXh0ZW5kc0xJU1M8RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdEF0dHJzMSAgIGV4dGVuZHMgc3RyaW5nLFxuXHRBdHRyczIgICBleHRlbmRzIHN0cmluZyxcblx0UGFyYW1zICBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pixcblx0VCBleHRlbmRzIExJU1NSZXR1cm5UeXBlPEV4dGVuZHMsIEhvc3QsIEF0dHJzMSwgUGFyYW1zPj4oTGlzczogVCxcblx0XHRwYXJhbWV0ZXJzOiB7XG5cdFx0XHRzaGFkb3cgICAgICA/OiBTaGFkb3dDZmcsXG5cdFx0XHRhdHRyaWJ1dGVzICA/OiByZWFkb25seSBBdHRyczJbXSxcblx0XHRcdGRlcGVuZGVuY2llcz86IHJlYWRvbmx5IFByb21pc2U8YW55PltdXG5cdFx0fSkge1xuXG5cdGNvbnN0IGF0dHJpYnV0ZXMgICA9IFsuLi5MaXNzLlBhcmFtZXRlcnMuYXR0cmlidXRlcyAgLCAuLi5wYXJhbWV0ZXJzLmF0dHJpYnV0ZXMgID8/W11dO1xuXHRjb25zdCBkZXBlbmRlbmNpZXMgPSBbLi4uTGlzcy5QYXJhbWV0ZXJzLmRlcGVuZGVuY2llcywgLi4ucGFyYW1ldGVycy5kZXBlbmRlbmNpZXM/P1tdXTtcblxuXHRjb25zdCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBMaXNzLlBhcmFtZXRlcnMsIHtcblx0XHRhdHRyaWJ1dGVzLFxuXHRcdGRlcGVuZGVuY2llc1xuXHR9KTtcblx0aWYoIHBhcmFtZXRlcnMuc2hhZG93ICE9PSB1bmRlZmluZWQpXG5cdFx0cGFyYW1zLnNoYWRvdyA9IHBhcmFtZXRlcnMuc2hhZG93O1xuXG5cdC8vIEB0cy1pZ25vcmUgOiBiZWNhdXNlIFRTIHN0dXBpZFxuXHRjbGFzcyBFeHRlbmRlZExJU1MgZXh0ZW5kcyBMaXNzIHtcblx0XHRjb25zdHJ1Y3RvciguLi50OiBhbnlbXSkge1xuXHRcdFx0Ly8gQHRzLWlnbm9yZSA6IGJlY2F1c2UgVFMgc3R1cGlkXG5cdFx0XHRzdXBlciguLi50KTtcblx0XHR9XG5cblx0XHRwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGF0dHJzKCkge1xuXHRcdFx0cmV0dXJuIHN1cGVyLmF0dHJzIGFzIFJlY29yZDxBdHRyczJ8QXR0cnMxLCBzdHJpbmd8bnVsbD47XG5cdFx0fVxuXG5cdFx0c3RhdGljIG92ZXJyaWRlIFBhcmFtZXRlcnMgPSBwYXJhbXM7XG5cdH1cblxuXHRyZXR1cm4gRXh0ZW5kZWRMSVNTO1xufVxuTElTUy5leHRlbmRzTElTUyA9IGV4dGVuZHNMSVNTO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIHR5cGUgaGVscGVycyA9PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnR5cGUgYnVpbGRMSVNTSG9zdFJldHVyblR5cGU8VD4gID0gVCBleHRlbmRzIExJU1NSZXR1cm5UeXBlPGluZmVyIEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluZmVyIEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluZmVyIEF0dHJzICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbmZlciBQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBSZXR1cm5UeXBlPHR5cGVvZiBidWlsZExJU1NIb3N0PEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXMsIFQ+PiA6IG5ldmVyO1xuXG5leHBvcnQgdHlwZSBMSVNTUmV0dXJuVHlwZTxcblx0RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdEF0dHJzICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4+ID0gUmV0dXJuVHlwZTx0eXBlb2YgTElTUzxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zPj47XG5leHBvcnQgdHlwZSBMSVNTQmFzZTxFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdFx0XHRcdFx0IEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHQgQXR0cnMgICBleHRlbmRzIHN0cmluZyxcblx0XHRcdFx0XHQgUGFyYW1zICBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pj4gPSBJbnN0YW5jZVR5cGU8TElTU1JldHVyblR5cGU8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcz4+O1xuZXhwb3J0IHR5cGUgTElTU0hvc3Q8TElTUyBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4gPiA9IEluc3RhbmNlVHlwZTxidWlsZExJU1NIb3N0UmV0dXJuVHlwZTxDb25zdHJ1Y3RvcjxMSVNTPiAmIHtQYXJhbWV0ZXJzOiBhbnl9Pj47XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1NIb3N0IGNsYXNzID09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxubGV0IGlkID0gMDtcblxuZnVuY3Rpb24gYnVpbGRMSVNTSG9zdDxFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdFx0XHRcdFx0ICAgSG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdCAgIEF0dHJzICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0ICAgUGFyYW1zICBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pixcblx0XHRcdFx0XHQgICBUIGV4dGVuZHMgTElTU1JldHVyblR5cGU8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcz4+KExpc3M6IFQsIF9wYXJhbXM6IFBhcnRpYWw8UGFyYW1zPiA9IHt9KSB7XG5cdGNvbnN0IHtcblx0XHRob3N0LFxuXHRcdGF0dHJpYnV0ZXMsXG5cdFx0Y29udGVudCxcblx0XHRzdHlsZXNoZWV0cyxcblx0XHRzaGFkb3csXG5cdH0gPSBMaXNzLlBhcmFtZXRlcnM7XG5cblx0Y29uc3QgYWxyZWFkeURlY2xhcmVkQ1NTID0gbmV3IFNldCgpO1xuXG5cdGNvbnN0IEdFVCA9IFN5bWJvbCgnZ2V0Jyk7XG5cdGNvbnN0IFNFVCA9IFN5bWJvbCgnc2V0Jyk7XG5cblx0Y29uc3QgcHJvcGVydGllcyA9IE9iamVjdC5mcm9tRW50cmllcyggYXR0cmlidXRlcy5tYXAobiA9PiBbbiwge1xuXG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uKCk6IHN0cmluZ3xudWxsICAgICAgeyByZXR1cm4gKHRoaXMgYXMgdW5rbm93biBhcyBBdHRyaWJ1dGVzKVtHRVRdKG4pOyB9LFxuXHRcdHNldDogZnVuY3Rpb24odmFsdWU6IHN0cmluZ3xudWxsKSB7IHJldHVybiAodGhpcyBhcyB1bmtub3duIGFzIEF0dHJpYnV0ZXMpW1NFVF0obiwgdmFsdWUpOyB9XG5cdH1dKSApO1xuXG5cdGNsYXNzIEF0dHJpYnV0ZXMge1xuICAgICAgICBbeDogc3RyaW5nXTogc3RyaW5nfG51bGw7XG5cbiAgICAgICAgI2RhdGEgICAgIDogUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD47XG4gICAgICAgICNkZWZhdWx0cyA6IFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuICAgICAgICAjc2V0dGVyICAgOiAobmFtZTogQXR0cnMsIHZhbHVlOiBzdHJpbmd8bnVsbCkgPT4gdm9pZDtcblxuICAgICAgICBbR0VUXShuYW1lOiBBdHRycykge1xuICAgICAgICBcdHJldHVybiB0aGlzLiNkYXRhW25hbWVdID8/IHRoaXMuI2RlZmF1bHRzW25hbWVdID8/IG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIFtTRVRdKG5hbWU6IEF0dHJzLCB2YWx1ZTogc3RyaW5nfG51bGwpe1xuICAgICAgICBcdHJldHVybiB0aGlzLiNzZXR0ZXIobmFtZSwgdmFsdWUpOyAvLyByZXF1aXJlZCB0byBnZXQgYSBjbGVhbiBvYmplY3Qgd2hlbiBkb2luZyB7Li4uYXR0cnN9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhICAgIDogUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD4sXG5cdFx0XHRcdFx0ZGVmYXVsdHM6IFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+LFxuICAgICAgICBcdFx0XHRzZXR0ZXIgIDogKG5hbWU6IEF0dHJzLCB2YWx1ZTogc3RyaW5nfG51bGwpID0+IHZvaWQpIHtcblxuICAgICAgICBcdHRoaXMuI2RhdGEgICAgID0gZGF0YTtcblx0XHRcdHRoaXMuI2RlZmF1bHRzID0gZGVmYXVsdHM7XG4gICAgICAgIFx0dGhpcy4jc2V0dGVyID0gc2V0dGVyO1xuXG4gICAgICAgIFx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywgcHJvcGVydGllcyk7XG4gICAgICAgIH1cblx0fVxuXG5cdC8vIEB0cy1pZ25vcmUgOiBiZWNhdXNlIFRTIGlzIHN0dXBpZC5cblx0Y2xhc3MgTElTU0hvc3RCYXNlIGV4dGVuZHMgaG9zdCB7XG5cblx0XHRyZWFkb25seSAjcGFyYW1zOiBQYXJhbXM7XG5cblx0XHRyZWFkb25seSAjaWQgPSArK2lkOyAvLyBmb3IgZGVidWdcblxuXHRcdGNvbnN0cnVjdG9yKHBhcmFtczogUGFydGlhbDxQYXJhbXM+ID0ge30pIHtcblx0XHRcdHN1cGVyKCk7XG5cdFx0XHR0aGlzLiNwYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBMaXNzLlBhcmFtZXRlcnMucGFyYW1zLCBfcGFyYW1zLCBwYXJhbXMpO1xuXG5cdFx0XHR0aGlzLiN3YWl0SW5pdCA9IG5ldyBQcm9taXNlKCAocmVzb2x2ZSkgPT4ge1xuXHRcdFx0XHRpZih0aGlzLmlzSW5pdClcblx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZSh0aGlzLiNBUEkhKTtcblx0XHRcdFx0dGhpcy4jcmVzb2x2ZSA9IHJlc29sdmU7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvKioqKiBwdWJsaWMgQVBJICoqKioqKioqKioqKiovXG5cblx0XHRnZXQgaXNJbml0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuI0FQSSAhPT0gbnVsbDtcblx0XHR9XG5cdFx0aW5pdGlhbGl6ZShwYXJhbXM6IFBhcnRpYWw8UGFyYW1zPiA9IHt9KSB7XG5cblx0XHRcdGlmKCB0aGlzLmlzSW5pdCApXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignRWxlbWVudCBhbHJlYWR5IGluaXRpYWxpemVkIScpO1xuXG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMuI3BhcmFtcywgcGFyYW1zKTtcblxuXHRcdFx0Y29uc3QgYXBpID0gdGhpcy5pbml0KCk7XG5cblx0XHRcdGlmKCB0aGlzLiNpc0luRE9NIClcblx0XHRcdFx0KGFwaSBhcyBhbnkpLm9uRE9NQ29ubmVjdGVkKCk7XG5cblx0XHRcdHJldHVybiBhcGk7XG5cdFx0fVxuXG5cdFx0Z2V0IExJU1NTeW5jKCkge1xuXHRcdFx0aWYoICEgdGhpcy5pc0luaXQgKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0FjY2Vzc2luZyBBUEkgYmVmb3JlIFdlYkNvbXBvbmVudCBpbml0aWFsaXphdGlvbiEnKTtcblx0XHRcdHJldHVybiB0aGlzLiNBUEkhO1xuXHRcdH1cblx0XHRnZXQgTElTUygpIHtcblx0XHRcdHJldHVybiB0aGlzLiN3YWl0SW5pdDtcblx0XHR9XG5cblx0XHQvKioqIGluaXQgKioqL1xuXHRcdCN3YWl0SW5pdDogUHJvbWlzZTxJbnN0YW5jZVR5cGU8VD4+O1xuXHRcdCNyZXNvbHZlOiAoKHU6IEluc3RhbmNlVHlwZTxUPikgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcblx0XHQjQVBJOiBJbnN0YW5jZVR5cGU8VD4gfCBudWxsID0gbnVsbDtcblxuXHRcdCNpc0luRE9NID0gZmFsc2U7XG5cdFx0Z2V0IGlzSW5ET00oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4jaXNJbkRPTTtcblx0XHR9XG5cblx0XHRkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHRcdHRoaXMuI2lzSW5ET00gPSBmYWxzZTtcblx0XHRcdCh0aGlzLiNBUEkhIGFzIGFueSkub25ET01EaXNjb25uZWN0ZWQoKTtcblx0XHR9XG5cblx0XHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblxuXHRcdFx0dGhpcy4jaXNJbkRPTSA9IHRydWU7XG5cdFxuXHRcdFx0aWYoICEgdGhpcy5pc0luaXQgKVxuXHRcdFx0XHR0aGlzLmluaXQoKTtcblxuXHRcdFx0KHRoaXMuI0FQSSEgYXMgYW55KS5vbkRPTUNvbm5lY3RlZCgpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgaW5pdCgpIHtcblx0XHRcdFxuXHRcdFx0Y3VzdG9tRWxlbWVudHMudXBncmFkZSh0aGlzKTtcblx0XHRcdFxuXHRcdFx0Ly8gc2hhZG93XG5cdFx0XHR0aGlzLiNjb250ZW50ID0gdGhpcyBhcyB1bmtub3duIGFzIEhvc3Q7XG5cdFx0XHRpZiggc2hhZG93ICE9PSAnbm9uZScpIHtcblx0XHRcdFx0dGhpcy4jY29udGVudCA9IHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiBzaGFkb3d9KTtcblxuXHRcdFx0XHQvL0B0cy1pZ25vcmVcblx0XHRcdFx0dGhpcy4jY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tFdmVudCk7XG5cdFx0XHRcdC8vQHRzLWlnbm9yZVxuXHRcdFx0XHR0aGlzLiNjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgb25DbGlja0V2ZW50KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gYXR0cnNcblx0XHRcdGZvcihsZXQgb2JzIG9mIGF0dHJpYnV0ZXMhKVxuXHRcdFx0XHR0aGlzLiNhdHRyaWJ1dGVzW29ic10gPSB0aGlzLmdldEF0dHJpYnV0ZShvYnMpO1xuXG5cdFx0XHQvLyBjc3Ncblx0XHRcdGlmKCBzaGFkb3cgIT09ICdub25lJylcblx0XHRcdFx0KHRoaXMuI2NvbnRlbnQgYXMgU2hhZG93Um9vdCkuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc2hhcmVkQ1NTKTtcblx0XHRcdGlmKCBzdHlsZXNoZWV0cy5sZW5ndGggKSB7XG5cblx0XHRcdFx0aWYoIHNoYWRvdyAhPT0gJ25vbmUnKVxuXHRcdFx0XHRcdCh0aGlzLiNjb250ZW50IGFzIFNoYWRvd1Jvb3QpLmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKC4uLnN0eWxlc2hlZXRzKTtcblx0XHRcdFx0ZWxzZSB7XG5cblx0XHRcdFx0XHRjb25zdCBjc3NzZWxlY3RvciA9IHRoaXMuQ1NTU2VsZWN0b3I7XG5cblx0XHRcdFx0XHQvLyBpZiBub3QgeWV0IGluc2VydGVkIDpcblx0XHRcdFx0XHRpZiggISBhbHJlYWR5RGVjbGFyZWRDU1MuaGFzKGNzc3NlbGVjdG9yKSApIHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0bGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuXHRcdFx0XHRcdFx0c3R5bGUuc2V0QXR0cmlidXRlKCdmb3InLCBjc3NzZWxlY3Rvcik7XG5cblx0XHRcdFx0XHRcdGxldCBodG1sX3N0eWxlc2hlZXRzID0gXCJcIjtcblxuXHRcdFx0XHRcdFx0Zm9yKGxldCBzdHlsZSBvZiBzdHlsZXNoZWV0cylcblx0XHRcdFx0XHRcdFx0Zm9yKGxldCBydWxlIG9mIHN0eWxlLmNzc1J1bGVzKVxuXHRcdFx0XHRcdFx0XHRcdGh0bWxfc3R5bGVzaGVldHMgKz0gcnVsZS5jc3NUZXh0ICsgJ1xcbic7XG5cblx0XHRcdFx0XHRcdHN0eWxlLmlubmVySFRNTCA9IGh0bWxfc3R5bGVzaGVldHMucmVwbGFjZSgnOmhvc3QnLCBgOmlzKCR7Y3Nzc2VsZWN0b3J9KWApO1xuXG5cdFx0XHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZChzdHlsZSk7XG5cblx0XHRcdFx0XHRcdGFscmVhZHlEZWNsYXJlZENTUy5hZGQoY3Nzc2VsZWN0b3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBjb250ZW50XG5cdFx0XHRpZiggY29udGVudCAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRsZXQgdGVtcGxhdGVfZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cdFx0XHRcdGxldCBzdHIgPSAoY29udGVudCBhcyBzdHJpbmcpLnJlcGxhY2UoL1xcJFxceyguKz8pXFx9L2csIChfLCBtYXRjaCkgPT4gdGhpcy5nZXRBdHRyaWJ1dGUobWF0Y2gpPz8nJylcblx0ICAgIFx0XHR0ZW1wbGF0ZV9lbGVtLmlubmVySFRNTCA9IHN0cjtcblx0ICAgIFx0XHR0aGlzLiNjb250ZW50LmFwcGVuZCguLi50ZW1wbGF0ZV9lbGVtLmNvbnRlbnQuY2hpbGROb2Rlcyk7XG5cdCAgICBcdH1cblxuXHQgICAgXHQvLyBidWlsZFxuXG5cdCAgICBcdC8vIGg0Y2ssIG9rYXkgYmVjYXVzZSBKUyBpcyBtb25vdGhyZWFkZWQuXG5cdFx0XHRfX2NzdHJfaG9zdCAgID0gdGhpcztcblxuXHQgICAgXHRsZXQgb2JqID0gbmV3IExpc3MoKTtcblxuXHQgICAgXHQvKmlmKCBvYmogaW5zdGFuY2VvZiBQcm9taXNlKVxuXHQgICAgXHRcdG9iaiA9IGF3YWl0IG9iajsqL1xuXG5cdFx0XHR0aGlzLiNBUEkgPSBvYmogYXMgSW5zdGFuY2VUeXBlPFQ+O1xuXG5cdFx0XHQvLyBkZWZhdWx0IHNsb3Rcblx0XHRcdGlmKCB0aGlzLmhhc1NoYWRvdyAmJiB0aGlzLiNjb250ZW50LmNoaWxkTm9kZXMubGVuZ3RoID09PSAwIClcblx0XHRcdFx0dGhpcy4jY29udGVudC5hcHBlbmQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Nsb3QnKSApO1xuXG5cdFx0XHRpZiggdGhpcy4jcmVzb2x2ZSAhPT0gbnVsbClcblx0XHRcdFx0dGhpcy4jcmVzb2x2ZSh0aGlzLiNBUEkpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy4jQVBJO1xuXHRcdH1cblxuXHRcdGdldCBwYXJhbXMoKTogUGFyYW1zIHtcblx0XHRcdHJldHVybiB0aGlzLiNwYXJhbXM7XG5cdFx0fVxuXHRcdHB1YmxpYyBzZXRQYXJhbTxUIGV4dGVuZHMga2V5b2YgUGFyYW1zPihuYW1lOiBULCB2YWx1ZTogUGFyYW1zW1RdKSB7XG5cdFx0XHRpZiggdGhpcy5pc0luaXQgKVxuXHRcdFx0XHRyZXR1cm4gdGhpcy4jQVBJIS5zZXRQYXJhbShuYW1lLCB2YWx1ZSk7XG5cblx0XHRcdHRoaXMuI3BhcmFtc1tuYW1lXSA9IHZhbHVlOyAvLyB3aWxsIGJlIGdpdmVuIHRvIGNvbnN0cnVjdG9yLlxuXHRcdH1cblxuXG5cdFx0LyoqKiBjb250ZW50ICoqKi9cblx0XHQjY29udGVudDogSG9zdHxTaGFkb3dSb290fG51bGwgPSBudWxsO1xuXG5cdFx0Z2V0IGNvbnRlbnQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4jY29udGVudDtcblx0XHR9XG5cblx0XHRnZXRQYXJ0KG5hbWU6IHN0cmluZykge1xuXHRcdFx0cmV0dXJuIHRoaXMuaGFzU2hhZG93XG5cdFx0XHRcdFx0PyB0aGlzLiNjb250ZW50Py5xdWVyeVNlbGVjdG9yKGA6OnBhcnQoJHtuYW1lfSlgKVxuXHRcdFx0XHRcdDogdGhpcy4jY29udGVudD8ucXVlcnlTZWxlY3RvcihgW3BhcnQ9XCIke25hbWV9XCJdYCk7XG5cdFx0fVxuXHRcdGdldFBhcnRzKG5hbWU6IHN0cmluZykge1xuXHRcdFx0cmV0dXJuIHRoaXMuaGFzU2hhZG93XG5cdFx0XHRcdFx0PyB0aGlzLiNjb250ZW50Py5xdWVyeVNlbGVjdG9yQWxsKGA6OnBhcnQoJHtuYW1lfSlgKVxuXHRcdFx0XHRcdDogdGhpcy4jY29udGVudD8ucXVlcnlTZWxlY3RvckFsbChgW3BhcnQ9XCIke25hbWV9XCJdYCk7XG5cdFx0fVxuXG5cdFx0cHJvdGVjdGVkIGdldCBoYXNTaGFkb3coKTogYm9vbGVhbiB7XG5cdFx0XHRyZXR1cm4gc2hhZG93ICE9PSAnbm9uZSc7XG5cdFx0fVxuXG5cdFx0LyoqKiBDU1MgKioqL1xuXG5cdFx0Z2V0IENTU1NlbGVjdG9yKCkge1xuXG5cdFx0XHRpZih0aGlzLmhhc1NoYWRvdyB8fCAhIHRoaXMuaGFzQXR0cmlidXRlKFwiaXNcIikgKVxuXHRcdFx0XHRyZXR1cm4gdGhpcy50YWdOYW1lO1xuXG5cdFx0XHRyZXR1cm4gYCR7dGhpcy50YWdOYW1lfVtpcz1cIiR7dGhpcy5nZXRBdHRyaWJ1dGUoXCJpc1wiKX1cIl1gO1xuXHRcdH1cblxuXHRcdC8qKiogYXR0cnMgKioqL1xuXHRcdCNhdHRyc19mbGFnID0gZmFsc2U7XG5cblx0XHQjYXR0cmlidXRlcyAgICAgICAgID0ge30gYXMgUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD47XG5cdFx0I2F0dHJpYnV0ZXNEZWZhdWx0cyA9IHt9IGFzIFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuXHRcdCNhdHRycyA9IG5ldyBBdHRyaWJ1dGVzKFxuXHRcdFx0dGhpcy4jYXR0cmlidXRlcyxcblx0XHRcdHRoaXMuI2F0dHJpYnV0ZXNEZWZhdWx0cyxcblx0XHRcdChuYW1lOiBBdHRycywgdmFsdWU6c3RyaW5nfG51bGwpID0+IHtcblxuXHRcdFx0XHR0aGlzLiNhdHRyaWJ1dGVzW25hbWVdID0gdmFsdWU7XG5cblx0XHRcdFx0dGhpcy4jYXR0cnNfZmxhZyA9IHRydWU7IC8vIGRvIG5vdCB0cmlnZ2VyIG9uQXR0cnNDaGFuZ2VkLlxuXHRcdFx0XHRpZiggdmFsdWUgPT09IG51bGwpXG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHR0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0KSBhcyB1bmtub3duIGFzIFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuXG5cdFx0c2V0QXR0ckRlZmF1bHQobmFtZTogQXR0cnMsIHZhbHVlOiBzdHJpbmd8bnVsbCkge1xuXHRcdFx0aWYoIHZhbHVlID09PSBudWxsKVxuXHRcdFx0XHRkZWxldGUgdGhpcy4jYXR0cmlidXRlc0RlZmF1bHRzW25hbWVdO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHR0aGlzLiNhdHRyaWJ1dGVzRGVmYXVsdHNbbmFtZV0gPSB2YWx1ZTtcblx0XHR9XG5cblx0XHRnZXQgYXR0cnMoKTogUmVhZG9ubHk8UmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD4+IHtcblxuXHRcdFx0cmV0dXJuIHRoaXMuI2F0dHJzO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuXHRcdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lICAgIDogQXR0cnMsXG5cdFx0XHRcdFx0XHRcdFx0IG9sZFZhbHVlOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdFx0IG5ld1ZhbHVlOiBzdHJpbmcpIHtcblxuXHRcdFx0aWYodGhpcy4jYXR0cnNfZmxhZykge1xuXHRcdFx0XHR0aGlzLiNhdHRyc19mbGFnID0gZmFsc2U7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy4jYXR0cmlidXRlc1tuYW1lXSA9IG5ld1ZhbHVlO1xuXHRcdFx0aWYoICEgdGhpcy5pc0luaXQgKVxuXHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdGlmKCAodGhpcy4jQVBJISBhcyBhbnkpLm9uQXR0ckNoYW5nZWQobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0dGhpcy4jYXR0cnNbbmFtZV0gPSBvbGRWYWx1ZTsgLy8gcmV2ZXJ0IHRoZSBjaGFuZ2UuXG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiBMSVNTSG9zdEJhc2U7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgZGVmaW5lID09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgX0RPTUNvbnRlbnRMb2FkZWQgPSBuZXcgUHJvbWlzZTx2b2lkPiggKHJlc29sdmUpID0+IHtcblxuXHRpZihkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImludGVyYWN0aXZlXCIgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKVxuXHRcdHJldHVybiByZXNvbHZlKCk7XG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblx0XHRyZXNvbHZlKCk7XG5cdH0sIHRydWUpO1xufSk7XG5cbkxJU1MuZGVmaW5lID0gYXN5bmMgZnVuY3Rpb248RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdFx0XHQgSG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdFx0ICAgICBBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdFx0ICAgICBQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+LFxuXHRcdFx0XHRcdFx0ICAgXHQgVCBleHRlbmRzIExJU1NSZXR1cm5UeXBlPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXM+Pihcblx0XHRcdFx0XHRcdCAgIFx0dGFnbmFtZTogc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRDb21wb25lbnRDbGFzczogVCxcblx0XHRcdFx0XHRcdFx0e2RlcGVuZGVuY2llcywgcGFyYW1zfToge3BhcmFtcz86IFBhcnRpYWw8UGFyYW1zPiwgZGVwZW5kZW5jaWVzPzogcmVhZG9ubHkgUHJvbWlzZTxzdHJpbmc+W119ID0ge30pIHtcblxuXHRkZXBlbmRlbmNpZXM/Pz1bXTtcblx0cGFyYW1zICAgICAgPz89IHt9O1xuXG5cdGNvbnN0IENsYXNzID0gQ29tcG9uZW50Q2xhc3MuUGFyYW1ldGVycy5ob3N0O1xuXHRsZXQgTElTU0Jhc2U6IGFueSA9IENvbXBvbmVudENsYXNzO1xuXHRsZXQgaHRtbHRhZyA9IF9lbGVtZW50MnRhZ25hbWUoQ2xhc3MpPz91bmRlZmluZWQ7XG5cblx0YXdhaXQgUHJvbWlzZS5hbGwoW19ET01Db250ZW50TG9hZGVkLCAuLi5kZXBlbmRlbmNpZXMsIC4uLkxJU1NCYXNlLlBhcmFtZXRlcnMuZGVwZW5kZW5jaWVzXSk7XG5cblx0Y29uc3QgTElTU2NsYXNzID0gYnVpbGRMSVNTSG9zdDxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zLCBUPihDb21wb25lbnRDbGFzcywgcGFyYW1zKTtcblx0XG5cdGNvbnN0IG9wdHMgPSBodG1sdGFnID09PSB1bmRlZmluZWQgPyB7fVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgOiB7ZXh0ZW5kczogaHRtbHRhZ307XG5cdFxuXHRjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnbmFtZSwgTElTU2NsYXNzLCBvcHRzKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgU2hhZG93Um9vdCB0b29scyA9PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3Qgc2hhcmVkQ1NTID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbmRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHNoYXJlZENTUyk7XG5cbkxJU1MuaW5zZXJ0R2xvYmFsQ1NTUnVsZXMgPSBmdW5jdGlvbihjc3M6IHN0cmluZ3xIVE1MU3R5bGVFbGVtZW50KSB7XG5cblx0bGV0IGNzc19zdHlsZSE6IENTU1N0eWxlU2hlZXQ7XG5cblx0aWYoIGNzcyBpbnN0YW5jZW9mIEhUTUxTdHlsZUVsZW1lbnQgKVxuXHRcdGNzc19zdHlsZSA9IGNzcy5zaGVldCE7XG5cdGlmKCB0eXBlb2YgY3NzID09PSBcInN0cmluZ1wiKSB7XG5cdFx0Y3NzX3N0eWxlID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcblx0XHRjc3Nfc3R5bGUucmVwbGFjZVN5bmMoY3NzKTtcblx0fVxuXG5cdGZvcihsZXQgcnVsZSBvZiBjc3Nfc3R5bGUuY3NzUnVsZXMpXG5cdFx0c2hhcmVkQ1NTLmluc2VydFJ1bGUocnVsZS5jc3NUZXh0KTtcbn1cblxudHlwZSBEZWxlZ2F0ZWRIYW5kbGVyID0gW3N0cmluZywgKGV2OiBNb3VzZUV2ZW50KSA9PiB2b2lkXTtcbmNvbnN0IERFTEVHQVRFRF9FVkVOVFMgPSB7XG5cdFwiY2xpY2tcIjogW10gYXMgRGVsZWdhdGVkSGFuZGxlcltdLFxuXHRcImRibGNsaWNrXCI6IFtdIGFzIERlbGVnYXRlZEhhbmRsZXJbXVxufTtcblxuY29uc3QgQUxSRUFEWV9QUk9DRVNTRUQgPSBTeW1ib2woKTtcblxuZnVuY3Rpb24gb25DbGlja0V2ZW50KGV2OiBNb3VzZUV2ZW50KSB7XG5cblx0aWYoIChldiBhcyBhbnkpW0FMUkVBRFlfUFJPQ0VTU0VEXSA9PT0gdHJ1ZSApXG5cdFx0cmV0dXJuO1xuXHQoZXYgYXMgYW55KVtBTFJFQURZX1BST0NFU1NFRF0gPSB0cnVlO1xuXG5cdGNvbnN0IGhhbmRsZXJzID0gREVMRUdBVEVEX0VWRU5UU1tldi50eXBlIGFzIGtleW9mIHR5cGVvZiBERUxFR0FURURfRVZFTlRTXTtcblxuXHRmb3IobGV0IGVsZW0gb2YgZXYuY29tcG9zZWRQYXRoKCkgKSB7XG5cdFxuXHRcdGlmKCBlbGVtIGluc3RhbmNlb2YgU2hhZG93Um9vdCB8fCBlbGVtID09PSBkb2N1bWVudCB8fCBlbGVtID09PSB3aW5kb3cgKVxuXHRcdFx0Y29udGludWU7XG5cblx0XHR2YXIgdGFyZ2V0ID0gZWxlbSBhcyBFbGVtZW50O1xuXG5cdFx0Zm9yKGxldCBbc2VsZWN0b3IsIGhhbmRsZXJdIG9mIGhhbmRsZXJzKSB7XG5cdFx0XHRpZiggdGFyZ2V0Lm1hdGNoZXMoc2VsZWN0b3IpIClcblx0XHRcdFx0aGFuZGxlcihldik7XG5cdFx0fVxuXHR9XG59XG5cbkxJU1MuaW5zZXJ0R2xvYmFsRGVsZWdhdGVkTGlzdGVuZXIgPSBmdW5jdGlvbihldmVudF9uYW1lOiBrZXlvZiB0eXBlb2YgREVMRUdBVEVEX0VWRU5UUywgc2VsZWN0b3I6IHN0cmluZywgaGFuZGxlcjogKGV2OiBNb3VzZUV2ZW50KSA9PiB2b2lkICkge1xuXHRERUxFR0FURURfRVZFTlRTW2V2ZW50X25hbWVdLnB1c2goW3NlbGVjdG9yLCBoYW5kbGVyXSlcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrRXZlbnQpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBvbkNsaWNrRXZlbnQpO1xuXG5MSVNTLmNsb3Nlc3QgPSBmdW5jdGlvbiBjbG9zZXN0PEUgZXh0ZW5kcyBFbGVtZW50PihzZWxlY3Rvcjogc3RyaW5nLCBlbGVtZW50OiBFbGVtZW50KSB7XG5cblx0d2hpbGUodHJ1ZSkge1xuXHRcdHZhciByZXN1bHQgPSBlbGVtZW50LmNsb3Nlc3Q8RT4oc2VsZWN0b3IpO1xuXG5cdFx0aWYoIHJlc3VsdCAhPT0gbnVsbClcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cblx0XHRjb25zdCByb290ID0gZWxlbWVudC5nZXRSb290Tm9kZSgpO1xuXHRcdGlmKCAhIChcImhvc3RcIiBpbiByb290KSApXG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdGVsZW1lbnQgPSAocm9vdCBhcyBTaGFkb3dSb290KS5ob3N0O1xuXHR9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgaGVscGVycyA9PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBpbmZlclBhcmFtczxUPiA9IFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSwgaW5mZXIgUCBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pj4gPyBQIDogbmV2ZXI7XG5cbnR5cGUgQlVJTERfT1BUSU9OUzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4gPSBQYXJ0aWFsPHtcblx0XHRcdFx0XHQgIFx0cGFyYW1zICAgIDogUGFydGlhbDxpbmZlclBhcmFtczxUPj4sXG5cdFx0XHRcdFx0ICBcdGNvbnRlbnRcdCAgOiBzdHJpbmd8Tm9kZXxyZWFkb25seSBOb2RlW10sXG5cdFx0XHRcdFx0XHRpZCBcdFx0ICA6IHN0cmluZyxcblx0XHRcdFx0XHQgIFx0Y2xhc3Nlc1x0ICA6IHJlYWRvbmx5IHN0cmluZ1tdLFxuXHRcdFx0XHRcdCAgXHRjc3N2YXJzICAgOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+Pixcblx0XHRcdFx0XHQgIFx0YXR0cnMgXHQgIDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgc3RyaW5nfGJvb2xlYW4+Pixcblx0XHRcdFx0XHQgIFx0ZGF0YSBcdCAgOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmd8Ym9vbGVhbj4+LFxuXHRcdFx0XHRcdCAgXHRsaXN0ZW5lcnMgOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCAoZXY6IEV2ZW50KSA9PiB2b2lkPj5cblx0XHRcdFx0XHR9PiAmICh7XG5cdFx0XHRcdFx0XHRpbml0aWFsaXplOiBmYWxzZSxcblx0XHRcdFx0XHRcdHBhcmVudDogRWxlbWVudFxuXHRcdFx0XHRcdH18e1xuXHRcdFx0XHRcdFx0aW5pdGlhbGl6ZT86IHRydWUsXG5cdFx0XHRcdFx0XHRwYXJlbnQ/OiBFbGVtZW50XG5cdFx0XHRcdFx0fSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGJ1aWxkPFQgZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPih0YWduYW1lOiBULCBvcHRpb25zPzogQlVJTERfT1BUSU9OUzxDb21wb25lbnRzW1RdPik6IFByb21pc2U8Q29tcG9uZW50c1tUXT47XG5hc3luYyBmdW5jdGlvbiBidWlsZDxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4odGFnbmFtZTogc3RyaW5nLCBvcHRpb25zPzogQlVJTERfT1BUSU9OUzxUPik6IFByb21pc2U8VD47XG5hc3luYyBmdW5jdGlvbiBidWlsZDxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4odGFnbmFtZTogc3RyaW5nLCB7XG5cdFx0cGFyYW1zICAgID0ge30sXG5cdFx0aW5pdGlhbGl6ZT0gdHJ1ZSxcblx0XHRjb250ZW50ICAgPSBbXSxcblx0XHRwYXJlbnQgICAgPSB1bmRlZmluZWQsXG5cdFx0aWQgXHRcdCAgPSB1bmRlZmluZWQsXG5cdFx0Y2xhc3NlcyAgID0gW10sXG5cdFx0Y3NzdmFycyAgID0ge30sXG5cdFx0YXR0cnMgICAgID0ge30sXG5cdFx0ZGF0YSBcdCAgPSB7fSxcblx0XHRsaXN0ZW5lcnMgPSB7fVxuXHR9OiBCVUlMRF9PUFRJT05TPFQ+ID0ge30pOiBQcm9taXNlPFQ+IHtcblxuXHRpZiggISBpbml0aWFsaXplICYmIHBhcmVudCA9PT0gbnVsbClcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJBIHBhcmVudCBtdXN0IGJlIGdpdmVuIGlmIGluaXRpYWxpemUgaXMgZmFsc2VcIik7XG5cblx0bGV0IEN1c3RvbUNsYXNzID0gYXdhaXQgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQodGFnbmFtZSk7XG5cdGxldCBlbGVtID0gbmV3IEN1c3RvbUNsYXNzKHBhcmFtcykgYXMgTElTU0hvc3Q8VD47XG5cblx0Ly8gRml4IGlzc3VlICMyXG5cdGlmKCBlbGVtLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gdGFnbmFtZSApXG5cdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoXCJpc1wiLCB0YWduYW1lKTtcblxuXHRpZiggaWQgIT09IHVuZGVmaW5lZCApXG5cdFx0ZWxlbS5pZCA9IGlkO1xuXG5cdGlmKCBjbGFzc2VzLmxlbmd0aCA+IDApXG5cdFx0ZWxlbS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBjc3N2YXJzKVxuXHRcdGVsZW0uc3R5bGUuc2V0UHJvcGVydHkoYC0tJHtuYW1lfWAsIGNzc3ZhcnNbbmFtZV0pO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBhdHRycykge1xuXG5cdFx0bGV0IHZhbHVlID0gYXR0cnNbbmFtZV07XG5cdFx0aWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpXG5cdFx0XHRlbGVtLnRvZ2dsZUF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdFx0ZWxzZVxuXHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXHR9XG5cblx0Zm9yKGxldCBuYW1lIGluIGRhdGEpIHtcblxuXHRcdGxldCB2YWx1ZSA9IGRhdGFbbmFtZV07XG5cdFx0aWYoIHZhbHVlID09PSBmYWxzZSlcblx0XHRcdGRlbGV0ZSBlbGVtLmRhdGFzZXRbbmFtZV07XG5cdFx0ZWxzZSBpZih2YWx1ZSA9PT0gdHJ1ZSlcblx0XHRcdGVsZW0uZGF0YXNldFtuYW1lXSA9IFwiXCI7XG5cdFx0ZWxzZVxuXHRcdFx0ZWxlbS5kYXRhc2V0W25hbWVdID0gdmFsdWU7XG5cdH1cblxuXHRpZiggISBBcnJheS5pc0FycmF5KGNvbnRlbnQpIClcblx0XHRjb250ZW50ID0gW2NvbnRlbnQgYXMgYW55XTtcblx0ZWxlbS5yZXBsYWNlQ2hpbGRyZW4oLi4uY29udGVudCk7XG5cblx0Zm9yKGxldCBuYW1lIGluIGxpc3RlbmVycylcblx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgbGlzdGVuZXJzW25hbWVdKTtcblxuXHRpZiggcGFyZW50ICE9PSB1bmRlZmluZWQgKVxuXHRcdHBhcmVudC5hcHBlbmQoZWxlbSk7XG5cblx0aWYoICEgZWxlbS5pc0luaXQgJiYgaW5pdGlhbGl6ZSApXG5cdFx0cmV0dXJuIGF3YWl0IExJU1MuaW5pdGlhbGl6ZShlbGVtKTtcblxuXHRyZXR1cm4gYXdhaXQgTElTUy5nZXRMSVNTKGVsZW0pO1xufVxuTElTUy5idWlsZCA9IGJ1aWxkO1xuXG5cbmZ1bmN0aW9uIGJ1aWxkU3luYzxUIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4odGFnbmFtZTogVCwgb3B0aW9ucz86IEJVSUxEX09QVElPTlM8Q29tcG9uZW50c1tUXT4pOiBDb21wb25lbnRzW1RdO1xuZnVuY3Rpb24gYnVpbGRTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+Pih0YWduYW1lOiBzdHJpbmcsIG9wdGlvbnM/OiBCVUlMRF9PUFRJT05TPFQ+KTogVDtcbmZ1bmN0aW9uIGJ1aWxkU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4odGFnbmFtZTogc3RyaW5nLCB7XG5cdFx0cGFyYW1zICAgID0ge30sXG5cdFx0aW5pdGlhbGl6ZT0gdHJ1ZSxcblx0XHRjb250ZW50ICAgPSBbXSxcblx0XHRwYXJlbnQgICAgPSB1bmRlZmluZWQsXG5cdFx0aWQgXHRcdCAgPSB1bmRlZmluZWQsXG5cdFx0Y2xhc3NlcyAgID0gW10sXG5cdFx0Y3NzdmFycyAgID0ge30sXG5cdFx0YXR0cnMgICAgID0ge30sXG5cdFx0ZGF0YSBcdCAgPSB7fSxcblx0XHRsaXN0ZW5lcnMgPSB7fVxuXHR9OiBCVUlMRF9PUFRJT05TPFQ+ID0ge30pOiBUIHtcblxuXHRpZiggISBpbml0aWFsaXplICYmIHBhcmVudCA9PT0gbnVsbClcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJBIHBhcmVudCBtdXN0IGJlIGdpdmVuIGlmIGluaXRpYWxpemUgaXMgZmFsc2VcIik7XG5cblx0bGV0IEN1c3RvbUNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ25hbWUpO1xuXHRpZihDdXN0b21DbGFzcyA9PT0gdW5kZWZpbmVkKVxuXHRcdHRocm93IG5ldyBFcnJvcihgJHt0YWduYW1lfSBub3QgZGVmaW5lZGApO1xuXHRsZXQgZWxlbSA9IG5ldyBDdXN0b21DbGFzcyhwYXJhbXMpIGFzIExJU1NIb3N0PFQ+O1xuXG5cdC8vVE9ETzogZmFjdG9yaXplLi4uXG5cblx0Ly8gRml4IGlzc3VlICMyXG5cdGlmKCBlbGVtLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gdGFnbmFtZSApXG5cdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoXCJpc1wiLCB0YWduYW1lKTtcblxuXHRpZiggaWQgIT09IHVuZGVmaW5lZCApXG5cdFx0ZWxlbS5pZCA9IGlkO1xuXG5cdGlmKCBjbGFzc2VzLmxlbmd0aCA+IDApXG5cdFx0ZWxlbS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBjc3N2YXJzKVxuXHRcdGVsZW0uc3R5bGUuc2V0UHJvcGVydHkoYC0tJHtuYW1lfWAsIGNzc3ZhcnNbbmFtZV0pO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBhdHRycykge1xuXG5cdFx0bGV0IHZhbHVlID0gYXR0cnNbbmFtZV07XG5cdFx0aWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpXG5cdFx0XHRlbGVtLnRvZ2dsZUF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdFx0ZWxzZVxuXHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXHR9XG5cblx0Zm9yKGxldCBuYW1lIGluIGRhdGEpIHtcblxuXHRcdGxldCB2YWx1ZSA9IGRhdGFbbmFtZV07XG5cdFx0aWYoIHZhbHVlID09PSBmYWxzZSlcblx0XHRcdGRlbGV0ZSBlbGVtLmRhdGFzZXRbbmFtZV07XG5cdFx0ZWxzZSBpZih2YWx1ZSA9PT0gdHJ1ZSlcblx0XHRcdGVsZW0uZGF0YXNldFtuYW1lXSA9IFwiXCI7XG5cdFx0ZWxzZVxuXHRcdFx0ZWxlbS5kYXRhc2V0W25hbWVdID0gdmFsdWU7XG5cdH1cblxuXHRpZiggISBBcnJheS5pc0FycmF5KGNvbnRlbnQpIClcblx0XHRjb250ZW50ID0gW2NvbnRlbnQgYXMgYW55XTtcblx0ZWxlbS5yZXBsYWNlQ2hpbGRyZW4oLi4uY29udGVudCk7XG5cblx0Zm9yKGxldCBuYW1lIGluIGxpc3RlbmVycylcblx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgbGlzdGVuZXJzW25hbWVdKTtcblxuXHRpZiggcGFyZW50ICE9PSB1bmRlZmluZWQgKVxuXHRcdHBhcmVudC5hcHBlbmQoZWxlbSk7XG5cblx0aWYoICEgZWxlbS5pc0luaXQgJiYgaW5pdGlhbGl6ZSApXG5cdFx0TElTUy5pbml0aWFsaXplU3luYyhlbGVtKTtcblxuXHRyZXR1cm4gTElTUy5nZXRMSVNTU3luYyhlbGVtKTtcbn1cbkxJU1MuYnVpbGRTeW5jID0gYnVpbGRTeW5jO1xuXG5MSVNTLndoZW5EZWZpbmVkICAgID0gYXN5bmMgZnVuY3Rpb24odGFnbmFtZTogc3RyaW5nLCBjYWxsYmFjaz86ICgpID0+IHZvaWQgKSA6IFByb21pc2U8dm9pZD4ge1xuXG5cdGF3YWl0IGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKHRhZ25hbWUpO1xuXG5cdGlmKCBjYWxsYmFjayAhPT0gdW5kZWZpbmVkKVxuXHRcdGNhbGxiYWNrKCk7XG5cblx0cmV0dXJuO1xufVxuTElTUy53aGVuQWxsRGVmaW5lZCA9IGFzeW5jIGZ1bmN0aW9uKHRhZ25hbWVzOiByZWFkb25seSBzdHJpbmdbXSwgY2FsbGJhY2s/OiAoKSA9PiB2b2lkICkgOiBQcm9taXNlPHZvaWQ+IHtcblxuXHRhd2FpdCBQcm9taXNlLmFsbCggdGFnbmFtZXMubWFwKCB0ID0+IGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKHQpICkgKVxuXG5cdGlmKCBjYWxsYmFjayAhPT0gdW5kZWZpbmVkKVxuXHRcdGNhbGxiYWNrKCk7XG5cbn1cblxuTElTUy5pc0RlZmluZWQgPSBmdW5jdGlvbihuYW1lOiBzdHJpbmcpIHtcblx0cmV0dXJuIGN1c3RvbUVsZW1lbnRzLmdldChuYW1lKTtcbn1cblxuTElTUy5zZWxlY3RvciA9IGZ1bmN0aW9uKG5hbWU/OiBzdHJpbmcpIHtcblx0aWYobmFtZSA9PT0gdW5kZWZpbmVkKSAvLyBqdXN0IGFuIGg0Y2tcblx0XHRyZXR1cm4gXCJcIjtcblx0cmV0dXJuIGA6aXMoJHtuYW1lfSwgW2lzPVwiJHtuYW1lfVwiXSlgO1xufVxuXG5MSVNTLmdldExJU1MgICAgPSBhc3luYyBmdW5jdGlvbjxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oIGVsZW1lbnQ6IEVsZW1lbnQgKSB7XG5cblx0YXdhaXQgTElTUy53aGVuRGVmaW5lZCggTElTUy5nZXROYW1lKGVsZW1lbnQpICk7XG5cblx0cmV0dXJuIChlbGVtZW50IGFzIExJU1NIb3N0PFQ+KS5MSVNTOyAvLyBlbnN1cmUgaW5pdGlhbGl6ZWQuXG59XG5MSVNTLmdldExJU1NTeW5jPSBmdW5jdGlvbjxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oIGVsZW1lbnQ6IEVsZW1lbnQgKSB7XG5cblx0Y29uc3QgbmFtZSA9IExJU1MuZ2V0TmFtZShlbGVtZW50KTtcblx0aWYoICEgTElTUy5pc0RlZmluZWQoIG5hbWUgKSApXG5cdFx0dGhyb3cgbmV3IEVycm9yKGAke25hbWV9IGhhc24ndCBiZWVuIGRlZmluZWQgeWV0LmApO1xuXG5cdGxldCBob3N0ID0gZWxlbWVudCBhcyBMSVNTSG9zdDxUPjtcblxuXHRpZiggISBob3N0LmlzSW5pdCApXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW5zdGFuY2UgaGFzbid0IGJlZW4gaW5pdGlhbGl6ZWQgeWV0LlwiKTtcblxuXHRyZXR1cm4gaG9zdC5MSVNTU3luYztcbn1cbkxJU1MuaW5pdGlhbGl6ZSA9IGFzeW5jIGZ1bmN0aW9uPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PiggZWxlbWVudDogRWxlbWVudCkge1xuXG5cdGF3YWl0IExJU1Mud2hlbkRlZmluZWQoIExJU1MuZ2V0TmFtZShlbGVtZW50KSApO1xuXG5cdHJldHVybiBhd2FpdCAoZWxlbWVudCBhcyBMSVNTSG9zdDxUPikuaW5pdGlhbGl6ZSgpOyAvLyBlbnN1cmUgaW5pdGlhbGl6YXRpb24uXG59XG5cbkxJU1MuaW5pdGlhbGl6ZVN5bmMgPSBmdW5jdGlvbjxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oIGVsZW1lbnQ6IEVsZW1lbnQpIHtcblxuXHRjb25zdCBuYW1lID0gTElTUy5nZXROYW1lKGVsZW1lbnQpO1xuXHRpZiggISBMSVNTLmlzRGVmaW5lZChuYW1lKSApXG5cdFx0dGhyb3cgbmV3IEVycm9yKGAke25hbWV9IG5vdCBkZWZpbmVkYCk7XG5cblx0cmV0dXJuIChlbGVtZW50IGFzIExJU1NIb3N0PFQ+KS5pbml0aWFsaXplKCk7IC8vIGVuc3VyZSBpbml0aWFsaXphdGlvbi5cbn1cblxuTElTUy5nZXROYW1lID0gZnVuY3Rpb24oIGVsZW1lbnQ6IEVsZW1lbnQgKTogc3RyaW5nIHtcblxuXHRjb25zdCBuYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lzJykgPz8gZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFxuXHRpZiggISBuYW1lLmluY2x1ZGVzKCctJykgKVxuXHRcdHRocm93IG5ldyBFcnJvcihgRWxlbWVudCAke25hbWV9IGlzIG5vdCBhIFdlYkNvbXBvbmVudGApO1xuXG5cdHJldHVybiBuYW1lO1xufVxuXG5mdW5jdGlvbiBfYnVpbGRRUyhzZWxlY3Rvcjogc3RyaW5nLCB0YWduYW1lX29yX3BhcmVudD86IHN0cmluZyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCwgcGFyZW50OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXHRcblx0aWYoIHRhZ25hbWVfb3JfcGFyZW50ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHRhZ25hbWVfb3JfcGFyZW50ICE9PSAnc3RyaW5nJykge1xuXHRcdHBhcmVudCA9IHRhZ25hbWVfb3JfcGFyZW50O1xuXHRcdHRhZ25hbWVfb3JfcGFyZW50ID0gdW5kZWZpbmVkO1xuXHR9XG5cblx0cmV0dXJuIFtgJHtzZWxlY3Rvcn0ke0xJU1Muc2VsZWN0b3IodGFnbmFtZV9vcl9wYXJlbnQgYXMgc3RyaW5nfHVuZGVmaW5lZCl9YCwgcGFyZW50XSBhcyBjb25zdDtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBRdWVyeVNlbGVjdG9ycyA9PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5hc3luYyBmdW5jdGlvbiBxczxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTxUPjtcbmFzeW5jIGZ1bmN0aW9uIHFzPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPCBDb21wb25lbnRzW05dID47XG5hc3luYyBmdW5jdGlvbiBxczxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LFxuXHRcdFx0XHRcdFx0cGFyZW50ICA6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cblx0W3NlbGVjdG9yLCBwYXJlbnRdID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBwYXJlbnQpO1xuXG5cdGxldCByZXN1bHQgPSBhd2FpdCBMSVNTLnFzbzxUPihzZWxlY3RvciwgcGFyZW50KTtcblx0aWYocmVzdWx0ID09PSBudWxsKVxuXHRcdHRocm93IG5ldyBFcnJvcihgRWxlbWVudCAke3NlbGVjdG9yfSBub3QgZm91bmRgKTtcblxuXHRyZXR1cm4gcmVzdWx0IVxufVxuTElTUy5xcyAgPSBxc1xuXG5hc3luYyBmdW5jdGlvbiBxc288VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8VD47XG5hc3luYyBmdW5jdGlvbiBxc288TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8IENvbXBvbmVudHNbTl0gPjtcbmFzeW5jIGZ1bmN0aW9uIHFzbzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LFxuXHRcdFx0XHRcdFx0cGFyZW50ICA6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cblx0W3NlbGVjdG9yLCBwYXJlbnRdID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBwYXJlbnQpO1xuXG5cdGNvbnN0IGVsZW1lbnQgPSBwYXJlbnQucXVlcnlTZWxlY3RvcjxMSVNTSG9zdDxUPj4oc2VsZWN0b3IpO1xuXHRpZiggZWxlbWVudCA9PT0gbnVsbCApXG5cdFx0cmV0dXJuIG51bGw7XG5cblx0cmV0dXJuIGF3YWl0IExJU1MuZ2V0TElTUyggZWxlbWVudCApO1xufVxuTElTUy5xc28gPSBxc29cblxuYXN5bmMgZnVuY3Rpb24gcXNhPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPFRbXT47XG5hc3luYyBmdW5jdGlvbiBxc2E8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8IENvbXBvbmVudHNbTl1bXSA+O1xuYXN5bmMgZnVuY3Rpb24gcXNhPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsXG5cdFx0XHRcdFx0XHRwYXJlbnQgIDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblxuXHRbc2VsZWN0b3IsIHBhcmVudF0gPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIHBhcmVudCk7XG5cblx0Y29uc3QgZWxlbWVudHMgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbDxMSVNTSG9zdDxUPj4oc2VsZWN0b3IpO1xuXG5cdGxldCBpZHggPSAwO1xuXHRjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPFQ+PiggZWxlbWVudHMubGVuZ3RoICk7XG5cdGZvcihsZXQgZWxlbWVudCBvZiBlbGVtZW50cylcblx0XHRwcm9taXNlc1tpZHgrK10gPSBMSVNTLmdldExJU1MoIGVsZW1lbnQgKTtcblxuXHRyZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufVxuTElTUy5xc2EgPSBxc2E7XG5cbmFzeW5jIGZ1bmN0aW9uIHFzYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdGVsZW1lbnQgIDogRWxlbWVudCk6IFByb21pc2U8VD47XG5hc3luYyBmdW5jdGlvbiBxc2M8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA6IEVsZW1lbnQpOiBQcm9taXNlPCBDb21wb25lbnRzW05dID47XG5hc3luYyBmdW5jdGlvbiBxc2M8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnQsXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA/OiBFbGVtZW50KSB7XG5cblx0Y29uc3QgcmVzID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBlbGVtZW50KTtcblx0XG5cdGNvbnN0IHJlc3VsdCA9IChyZXNbMV0gYXMgdW5rbm93biBhcyBFbGVtZW50KS5jbG9zZXN0PExJU1NIb3N0PFQ+PihyZXNbMF0pO1xuXHRpZihyZXN1bHQgPT09IG51bGwpXG5cdFx0cmV0dXJuIG51bGw7XG5cblx0cmV0dXJuIGF3YWl0IExJU1MuZ2V0TElTUyhyZXN1bHQpO1xufVxuTElTUy5xc2MgPSBxc2M7XG5cbmZ1bmN0aW9uIHFzU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogVDtcbmZ1bmN0aW9uIHFzU3luYzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogQ29tcG9uZW50c1tOXTtcbmZ1bmN0aW9uIHFzU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LFxuXHRcdFx0XHRcdFx0cGFyZW50ICA6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cblx0W3NlbGVjdG9yLCBwYXJlbnRdID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBwYXJlbnQpO1xuXG5cdGNvbnN0IGVsZW1lbnQgPSBwYXJlbnQucXVlcnlTZWxlY3RvcjxMSVNTSG9zdDxUPj4oc2VsZWN0b3IpO1xuXG5cdGlmKCBlbGVtZW50ID09PSBudWxsIClcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEVsZW1lbnQgJHtzZWxlY3Rvcn0gbm90IGZvdW5kYCk7XG5cblx0cmV0dXJuIExJU1MuZ2V0TElTU1N5bmMoIGVsZW1lbnQgKTtcbn1cbkxJU1MucXNTeW5jID0gcXNTeW5jO1xuXG5mdW5jdGlvbiBxc2FTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBUW107XG5mdW5jdGlvbiBxc2FTeW5jPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBDb21wb25lbnRzW05dW107XG5mdW5jdGlvbiBxc2FTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsXG5cdFx0XHRcdFx0XHRwYXJlbnQgIDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblxuXHRbc2VsZWN0b3IsIHBhcmVudF0gPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIHBhcmVudCk7XG5cblx0Y29uc3QgZWxlbWVudHMgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbDxMSVNTSG9zdDxUPj4oc2VsZWN0b3IpO1xuXG5cdGxldCBpZHggPSAwO1xuXHRjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8VD4oIGVsZW1lbnRzLmxlbmd0aCApO1xuXHRmb3IobGV0IGVsZW1lbnQgb2YgZWxlbWVudHMpXG5cdFx0cmVzdWx0W2lkeCsrXSA9IExJU1MuZ2V0TElTU1N5bmMoIGVsZW1lbnQgKTtcblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuTElTUy5xc2FTeW5jID0gcXNhU3luYztcblxuZnVuY3Rpb24gcXNjU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdGVsZW1lbnQgIDogRWxlbWVudCk6IFQ7XG5mdW5jdGlvbiBxc2NTeW5jPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgOiBFbGVtZW50KTogQ29tcG9uZW50c1tOXTtcbmZ1bmN0aW9uIHFzY1N5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnQsXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA/OiBFbGVtZW50KSB7XG5cblx0Y29uc3QgcmVzID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBlbGVtZW50KTtcblx0XG5cdGNvbnN0IHJlc3VsdCA9IChyZXNbMV0gYXMgdW5rbm93biBhcyBFbGVtZW50KS5jbG9zZXN0PExJU1NIb3N0PFQ+PihyZXNbMF0pO1xuXHRpZihyZXN1bHQgPT09IG51bGwpXG5cdFx0cmV0dXJuIG51bGw7XG5cblx0cmV0dXJuIExJU1MuZ2V0TElTU1N5bmMocmVzdWx0KTtcbn1cbkxJU1MucXNjU3luYyA9IHFzY1N5bmM7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgQXV0byA9PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGNsYXNzIExJU1NfQXV0byBleHRlbmRzIExJU1Moe2F0dHJpYnV0ZXM6IFtcInNyY1wiXX0pIHtcblxuXHRyZWFkb25seSAja25vd25fdGFnID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cdHJlYWRvbmx5ICNkaXJlY3Rvcnk6IHN0cmluZztcblx0cmVhZG9ubHkgI3N3OiBQcm9taXNlPHZvaWQ+O1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuI3N3ID0gbmV3IFByb21pc2UoIGFzeW5jIChyZXNvbHZlKSA9PiB7XG5cdFx0XHRcblx0XHRcdGF3YWl0IG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKGAuL3N3LmpzYCk7XG5cblx0XHRcdGlmKCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyIClcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXG5cdFx0XHRuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdjb250cm9sbGVyY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXG5cdFx0Y29uc3Qgc3JjID0gdGhpcy5hdHRycy5zcmM7XG5cdFx0aWYoc3JjID09PSBudWxsKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwic3JjIGF0dHJpYnV0ZSBpcyBtaXNzaW5nLlwiKTtcblx0XHR0aGlzLiNkaXJlY3RvcnkgPSBzcmNbMF0gPT09ICcuJ1xuXHRcdFx0XHRcdFx0XHRcdD8gYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfS8ke3NyY31gXG5cdFx0XHRcdFx0XHRcdFx0OiBzcmM7XG5cblx0XHRuZXcgTXV0YXRpb25PYnNlcnZlciggKG11dGF0aW9ucykgPT4ge1xuXG5cdFx0XHRmb3IobGV0IG11dGF0aW9uIG9mIG11dGF0aW9ucylcblx0XHRcdFx0Zm9yKGxldCBhZGRpdGlvbiBvZiBtdXRhdGlvbi5hZGRlZE5vZGVzKVxuXHRcdFx0XHRcdGlmKGFkZGl0aW9uIGluc3RhbmNlb2YgRWxlbWVudClcblx0XHRcdFx0XHRcdHRoaXMuI2FkZFRhZyhhZGRpdGlvbi50YWdOYW1lKVxuXG5cdFx0fSkub2JzZXJ2ZSggZG9jdW1lbnQsIHsgY2hpbGRMaXN0OnRydWUsIHN1YnRyZWU6dHJ1ZSB9KTtcblxuXG5cdFx0Zm9yKCBsZXQgZWxlbSBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKSApXG5cdFx0XHR0aGlzLiNhZGRUYWcoZWxlbS50YWdOYW1lKTtcblx0fVxuXG5cbiAgICBwcm90ZWN0ZWQgcmVzb3VyY2VzKCkge1xuXHRcdHJldHVybiBbXG5cdFx0XHRcImluZGV4LmpzXCIsXG5cdFx0XHRcImluZGV4Lmh0bWxcIixcblx0XHRcdFwiaW5kZXguY3NzXCJcblx0XHRdO1xuICAgIH1cblxuXHRwcm90ZWN0ZWQgZGVmaW5lV2ViQ29tcG9uZW50KHRhZ25hbWU6IHN0cmluZywgZmlsZXM6IFJlY29yZDxzdHJpbmcsIGFueT4sIG9wdHM6IFBhcnRpYWw8e2NvbnRlbnQ6IHN0cmluZywgY3NzOiBzdHJpbmd9Pikge1xuXG5cdFx0Y29uc3QganMgPSBmaWxlc1tcImluZGV4LmpzXCJdO1xuXHRcdGNvbnN0IGNvbnRlbnQgPSBmaWxlc1tcImluZGV4Lmh0bWxcIl07XG5cblx0XHRsZXQga2xhc3M6IG51bGx8IFJldHVyblR5cGU8dHlwZW9mIExJU1M+ID0gbnVsbDtcblx0XHRpZigganMgIT09IHVuZGVmaW5lZCApXG5cdFx0XHRrbGFzcyA9IGpzKG9wdHMpO1xuXHRcdGVsc2UgaWYoIGNvbnRlbnQgIT09IHVuZGVmaW5lZCApXG5cdFx0XHRrbGFzcyA9IGNsYXNzIFdlYkNvbXBvbmVudCBleHRlbmRzIExJU1Mob3B0cykge307XG5cblx0XHRpZihrbGFzcyA9PT0gbnVsbClcblx0XHRcdHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBmaWxlcyBmb3IgV2ViQ29tcG9uZW50ICR7dGFnbmFtZX0uYCk7XG5cblx0XHRyZXR1cm4gTElTUy5kZWZpbmUodGFnbmFtZSwga2xhc3MpO1xuXHR9XG5cblx0YXN5bmMgI2FkZFRhZyh0YWduYW1lOiBzdHJpbmcpIHtcblxuXHRcdHRhZ25hbWUgPSB0YWduYW1lLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRpZiggdGFnbmFtZSA9PT0gJ2xpc3MtYXV0bycgfHwgdGFnbmFtZSA9PT0gJ2JsaXNzLWF1dG8nIHx8ICEgdGFnbmFtZS5pbmNsdWRlcygnLScpIHx8IHRoaXMuI2tub3duX3RhZy5oYXMoIHRhZ25hbWUgKSApXG5cdFx0XHRyZXR1cm47XG5cblx0XHR0aGlzLiNrbm93bl90YWcuYWRkKHRhZ25hbWUpO1xuXG5cdFx0YXdhaXQgdGhpcy4jc3c7IC8vIGVuc3VyZSBTVyBpcyBpbnN0YWxsZWQuXG5cblx0XHRjb25zdCBmaWxlbmFtZXMgPSB0aGlzLnJlc291cmNlcygpO1xuXHRcdGNvbnN0IHJlc291cmNlcyA9IGF3YWl0IFByb21pc2UuYWxsKCBmaWxlbmFtZXMubWFwKCBmaWxlID0+IGZpbGUuZW5kc1dpdGgoJy5qcycpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gX2ltcG9ydCAgIChgJHt0aGlzLiNkaXJlY3Rvcnl9LyR7dGFnbmFtZX0vJHtmaWxlfWAsIHRydWUpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogX2ZldGNoVGV4dChgJHt0aGlzLiNkaXJlY3Rvcnl9LyR7dGFnbmFtZX0vJHtmaWxlfWAsIHRydWUpICkgKTtcblxuXHRcdGNvbnN0IGZpbGVzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGZpbGVuYW1lcy5sZW5ndGg7ICsraSlcblx0XHRcdGlmKCByZXNvdXJjZXNbaV0gIT09IHVuZGVmaW5lZClcblx0XHRcdFx0ZmlsZXNbZmlsZW5hbWVzW2ldXSA9IHJlc291cmNlc1tpXTtcblxuXHRcdGNvbnN0IGNvbnRlbnQgPSBmaWxlc1tcImluZGV4Lmh0bWxcIl07XG5cdFx0Y29uc3QgY3NzICAgICA9IGZpbGVzW1wiaW5kZXguY3NzXCJdO1xuXG5cdFx0Y29uc3Qgb3B0czogUGFydGlhbDx7Y29udGVudDogc3RyaW5nLCBjc3M6IHN0cmluZ30+ID0ge1xuXHRcdFx0Li4uY29udGVudCAhPT0gdW5kZWZpbmVkICYmIHtjb250ZW50fSxcblx0XHRcdC4uLmNzcyAgICAgIT09IHVuZGVmaW5lZCAmJiB7Y3NzfSxcblx0XHR9O1xuXG5cdFx0cmV0dXJuIHRoaXMuZGVmaW5lV2ViQ29tcG9uZW50KHRhZ25hbWUsIGZpbGVzLCBvcHRzKTtcblx0XHRcblx0fVxufVxuTElTUy5kZWZpbmUoXCJsaXNzLWF1dG9cIiwgTElTU19BdXRvKTtcblxuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRzIHtcblx0XCJsaXNzLWF1dG9cIjogTElTU19BdXRvXG59O1xuLypcbiAqIGRlY2xhcmUgbW9kdWxlICckTElTUycge1xuICogXHRcdGludGVyZmFjZSBDb21wb25lbnRzIHtcbiAqIFx0XHRcdFwibmFtZVwiOiBjbGFzc1xuICogXHRcdH1cbiAqIH1cbiAqL1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIEV2ZW50c1RhcmdldCA9PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnR5cGUgQ3N0RXZlbnQ8RXZlbnQgZXh0ZW5kcyBzdHJpbmcsIEFyZ3M+ID0gQ3VzdG9tRXZlbnQ8QXJncz4gJiB7dHlwZTogRXZlbnR9O1xuXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50c1RhcmdldDxFdmVudHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PntcblxuXHRhZGRFdmVudExpc3RlbmVyPEV2ZW50IGV4dGVuZHMgRXhjbHVkZTxrZXlvZiBFdmVudHMsIHN5bWJvbHxudW1iZXI+Pih0eXBlOiBFdmVudCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBsaXN0ZW5lcjogbnVsbHwgKChldjogQ3N0RXZlbnQ8RXZlbnQsIEV2ZW50c1tFdmVudF0+KSA9PiB2b2lkKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBvcHRpb25zPzogYm9vbGVhbnxBZGRFdmVudExpc3RlbmVyT3B0aW9ucyk6IHZvaWQ7XG5cblx0ZGlzcGF0Y2hFdmVudDxFdmVudCBleHRlbmRzIEV4Y2x1ZGU8a2V5b2YgRXZlbnRzLCBzeW1ib2x8bnVtYmVyPj4oZXZlbnQ6IENzdEV2ZW50PEV2ZW50LCBFdmVudHNbRXZlbnRdPik6IGJvb2xlYW47XG5cblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcjxFdmVudCBleHRlbmRzIEV4Y2x1ZGU8a2V5b2YgRXZlbnRzLCBzeW1ib2x8bnVtYmVyPj4odHlwZTogRXZlbnQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxpc3RlbmVyOiBudWxsfCAoKGV2OiBDc3RFdmVudDxFdmVudCwgRXZlbnRzW0V2ZW50XT4pID0+IHZvaWQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPzogYm9vbGVhbnxBZGRFdmVudExpc3RlbmVyT3B0aW9ucyk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBDc3RtRXZlbnQ8RXZlbnQgZXh0ZW5kcyBzdHJpbmcsIEFyZ3M+IGV4dGVuZHMgQ3VzdG9tRXZlbnQ8QXJncz4ge1xuXG5cdG92ZXJyaWRlIGdldCB0eXBlKCk6IEV2ZW50IHsgcmV0dXJuIHN1cGVyLnR5cGUgYXMgRXZlbnQ7IH1cblxuXHRjb25zdHJ1Y3Rvcih0eXBlOiBFdmVudCwgYXJnczogQXJncykge1xuXHRcdHN1cGVyKHR5cGUsIHtkZXRhaWw6IGFyZ3N9KTtcblx0fVxufVxuXG5leHBvcnQgdHlwZSBFdmVudHNUYXJnZXRDc3RyPEV2ZW50cyBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pj4gPSBDb25zdHJ1Y3RvcjxFdmVudHNUYXJnZXQ8RXZlbnRzPj47XG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBpbnRlcm5hbCB0b29scyA9PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFJlc291cmNlKHJlc291cmNlOiBSZXNvdXJjZXxQcm9taXNlPFJlc291cmNlPikge1xuXG5cdHJlc291cmNlID0gYXdhaXQgcmVzb3VyY2U7XG5cblx0aWYoICEgKHJlc291cmNlIGluc3RhbmNlb2YgUmVzcG9uc2UpIClcblx0XHRyZXNvdXJjZSA9IGF3YWl0IGZldGNoKHJlc291cmNlKTtcblxuXHRyZXR1cm4gYXdhaXQgcmVzb3VyY2UudGV4dCgpO1xufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIF9mZXRjaFRleHQodXJpOiBzdHJpbmd8VVJMLCBpc0xpc3NBdXRvOiBib29sZWFuID0gZmFsc2UpIHtcblxuXHRjb25zdCBvcHRpb25zID0gaXNMaXNzQXV0b1xuXHRcdFx0XHRcdFx0PyB7aGVhZGVyczp7XCJsaXNzLWF1dG9cIjogXCJ0cnVlXCJ9fVxuXHRcdFx0XHRcdFx0OiB7fTtcblxuXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJpLCBvcHRpb25zKTtcblx0aWYocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDAgKVxuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cblx0aWYoIGlzTGlzc0F1dG8gJiYgcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJzdGF0dXNcIikhID09PSBcIjQwNFwiIClcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXG5cdHJldHVybiBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG59XG5hc3luYyBmdW5jdGlvbiBfaW1wb3J0KHVyaTogc3RyaW5nLCBpc0xpc3NBdXRvOiBib29sZWFuID0gZmFsc2UpIHtcblxuXHQvLyB0ZXN0IGZvciB0aGUgbW9kdWxlIGV4aXN0YW5jZS5cblx0aWYoaXNMaXNzQXV0byAmJiBhd2FpdCBfZmV0Y2hUZXh0KHVyaSwgaXNMaXNzQXV0bykgPT09IHVuZGVmaW5lZCApXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblxuXHR0cnkge1xuXHRcdHJldHVybiAoYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tJZ25vcmU6IHRydWUgKi8gdXJpKSkuZGVmYXVsdDtcblx0fSBjYXRjaChlKSB7XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fVxufVxuXG4vLyBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzUxMDAwNDYxL2h0bWwtZWxlbWVudC10YWctbmFtZS1mcm9tLWNvbnN0cnVjdG9yXG5jb25zdCBIVE1MQ0xBU1NfUkVHRVggPSAgL0hUTUwoXFx3KylFbGVtZW50LztcbmNvbnN0IGVsZW1lbnROYW1lTG9va3VwVGFibGUgPSB7XG4gICAgJ1VMaXN0JzogJ3VsJyxcbiAgICAnVGFibGVDYXB0aW9uJzogJ2NhcHRpb24nLFxuICAgICdUYWJsZUNlbGwnOiAndGQnLCAvLyB0aFxuICAgICdUYWJsZUNvbCc6ICdjb2wnLCAgLy8nY29sZ3JvdXAnLFxuICAgICdUYWJsZVJvdyc6ICd0cicsXG4gICAgJ1RhYmxlU2VjdGlvbic6ICd0Ym9keScsIC8vWyd0aGVhZCcsICd0Ym9keScsICd0Zm9vdCddLFxuICAgICdRdW90ZSc6ICdxJyxcbiAgICAnUGFyYWdyYXBoJzogJ3AnLFxuICAgICdPTGlzdCc6ICdvbCcsXG4gICAgJ01vZCc6ICdpbnMnLCAvLywgJ2RlbCddLFxuICAgICdNZWRpYSc6ICd2aWRlbycsLy8gJ2F1ZGlvJ10sXG4gICAgJ0ltYWdlJzogJ2ltZycsXG4gICAgJ0hlYWRpbmcnOiAnaDEnLCAvLywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2J10sXG4gICAgJ0RpcmVjdG9yeSc6ICdkaXInLFxuICAgICdETGlzdCc6ICdkbCcsXG4gICAgJ0FuY2hvcic6ICdhJ1xuICB9O1xuZnVuY3Rpb24gX2VsZW1lbnQydGFnbmFtZShDbGFzczogdHlwZW9mIEhUTUxFbGVtZW50KTogc3RyaW5nfG51bGwge1xuXG5cdGlmKCBDbGFzcyA9PT0gSFRNTEVsZW1lbnQgKVxuXHRcdHJldHVybiBudWxsO1xuXHRcblx0bGV0IGh0bWx0YWcgPSBIVE1MQ0xBU1NfUkVHRVguZXhlYyhDbGFzcy5uYW1lKSFbMV07XG5cdHJldHVybiBlbGVtZW50TmFtZUxvb2t1cFRhYmxlW2h0bWx0YWcgYXMga2V5b2YgdHlwZW9mIGVsZW1lbnROYW1lTG9va3VwVGFibGVdID8/IGh0bWx0YWcudG9Mb3dlckNhc2UoKVxufSIsImltcG9ydCBcInN0cnVjdC9tZW51LnRzXCI7XG5pbXBvcnQgXCJzdHJ1Y3QvY2FsYy9zaGVldC50c1wiO1xuXG4vLyAxXG5cbmltcG9ydCBMSVNTIGZyb20gXCJMSVNTXCI7XG5pbXBvcnQgeyBGb3JtYXRzIH0gZnJvbSBcInN0cnVjdC9jYWxjL2Zvcm1hdC50c1wiO1xuXG5jb25zdCBzX2Zvcm11bGEgPSBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfZm9ybXVsYScpO1xuXG5zX2Zvcm11bGEuZ2V0UmFuZ2UoXCJBMTpDMVwiKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJRdWFudGl0w6lcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJQcml4IHVuaXRhaXJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUHJpeCB0b3RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuXG5zX2Zvcm11bGEuZ2V0UmFuZ2UoXCJBMjpBNFwiKS5jb250ZW50ID0gWzIzICAsIDEyLCA0NF07XG5zX2Zvcm11bGEuZ2V0UmFuZ2UoXCJCMjpCNFwiKS5mb3JtYXQoRm9ybWF0cy5ldXJvcykuY29udGVudCA9IFswLjIsIDAuMywgMC40XTtcblxuc19mb3JtdWxhLmdldFJhbmdlKFwiQzI6QzRcIikuZm9ybWF0KEZvcm1hdHMuZXVyb3MpLmNvbnRlbnQgPSBbXG4gICAgXCI9QTIqQjJcIixcbiAgICBcIj1BMypCM1wiLFxuICAgIFwiPUE0KkI0XCJcbl07XG5cbi8qKi9cblxuXG5jb25zdCBzX2NvbXBsZXhfZm9ybXVsYSA9IGF3YWl0IExJU1MucXMoJyNzaGVldF9jb21wbGV4X2Zvcm11bGEnKTtcblxuc19jb21wbGV4X2Zvcm11bGEuZ2V0UmFuZ2UoXCJBMTpDMVwiKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJYXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm11bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuc19jb21wbGV4X2Zvcm11bGEuZ2V0UmFuZ2UoXCJBMjpCNFwiKS5jb250ZW50ID0gW1xuICAgIDIsIDQsXG4gICAgMSwgNSxcbiAgICA0LCA2XTtcblxuc19jb21wbGV4X2Zvcm11bGEuZ2V0UmFuZ2UoXCJDMlwiKS5jb250ZW50ID1cbmA9IEEyKkIyXG4gK0EzKkIzXG4gK0E0KkI0YDtcblxuLyoqL1xuXG5jb25zdCBzX3R5cGVzID0gYXdhaXQgTElTUy5xcygnI3NoZWV0X3R5cGVzJyk7XG5cblxuc190eXBlcy5nZXRSYW5nZShcIkExOkUxXCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRleHRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJOb21icmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkJvb2zDqWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJEYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGb3JtdWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuXG5zX3R5cGVzLmdldFJhbmdlKFwiQTI6RTJcIikuY29udGVudCA9IFtcbiAgICBcIkhlbGxvXCIsXG4gICAgMi4zLFxuICAgIHRydWUsXG4gICAgbmV3IERhdGUoKSxcbiAgICBcIj1CMisyXCJcbl1cblxuXG5jb25zdCBzX2N1cnNvciA9IGF3YWl0IExJU1MucXMoJyNzaGVldF9jdXJzb3InKTtcblxuc19jdXJzb3IuZ2V0UmFuZ2UoXCJBMTpIMVwiKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpLmNvbnRlbnQgPSBcIipcIjtcbnNfY3Vyc29yLmdldFJhbmdlKFwiQTQ6SDRcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gXCIqXCI7XG5cbnNfY3Vyc29yLmdldFJhbmdlKFwiRDE6RTRcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gXCIqXCI7XG5cbnNfY3Vyc29yLmdldFJhbmdlKFwiQTE6QTRcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gXCIqXCI7XG5zX2N1cnNvci5nZXRSYW5nZShcIkgxOkg0XCIsIHRydWUpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFwiKlwiO1xuXG5cbmNvbnN0IHNfJGZvcm11bGEgPSBbXG4gICAgYXdhaXQgTElTUy5xcygnI3NoZWV0X19fX2Zvcm11bGEnKSxcbiAgICBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfeF9fZm9ybXVsYScpLFxuICAgIGF3YWl0IExJU1MucXMoJyNzaGVldF9feF9mb3JtdWxhJyksXG4gICAgYXdhaXQgTElTUy5xcygnI3NoZWV0X3h4X2Zvcm11bGEnKVxuXVxuXG5mb3IobGV0IGkgPSAwOyBpIDwgc18kZm9ybXVsYS5sZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IHNfJGZvcm0gPSBzXyRmb3JtdWxhW2ldO1xuXG4gICAgc18kZm9ybS5nZXRSYW5nZShcIkExOkQxXCIpLmZvcm1hdChcImJvbGRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQgPSBbMCwgMSwgMiwgM107XG5cbiAgICBzXyRmb3JtLmdldFJhbmdlKFwiQTI6QTRcIikuZm9ybWF0KFwiYm9sZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudCA9IFsxLCAyLCAzXTtcblxuICAgIGxldCByZWYgPSBcIj1BMVwiO1xuICAgIGlmKCBpID09PSAxKVxuICAgICAgICByZWYgPSBcIj0kQTFcIjtcbiAgICBpZiggaSA9PT0gMilcbiAgICAgICAgcmVmID0gXCI9QSQxXCI7XG4gICAgaWYoIGkgPT09IDMpXG4gICAgICAgIHJlZiA9IFwiPSRBJDFcIjtcblxuICAgIHNfJGZvcm0uZ2V0UmFuZ2UoXCJCMlwiKS5jb250ZW50ID0gcmVmO1xuXG4gICAgc18kZm9ybS5nZXRSYW5nZShcIkExOkQ0XCIpLmZvcm1hdChcImFsaWduX2NlbnRlclwiKVxufVxuXG5jb25zdCBzaGVldF9yZWNvcGllX21vdGl2YXRpb24gPSBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uJyk7XG5cbnNoZWV0X3JlY29waWVfbW90aXZhdGlvbi5nZXRSYW5nZShcIkExOkQ0XCIpLmZvcm1hdChcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gW1xuICAgIFwiQ29uc28vam91clwiLCBcIkNyYXlvbnNcIiwgXCJHb21tZXNcIiwgXCJUb3RhbCAoam91cilcIixcbiAgICBcIjAxLzAxXCIgICwgMiwgMywgXCI9QjIrQzJcIiwgXG4gICAgXCIwMi8wMVwiICAsIDQsIDEsIFwiPUMzK0MzXCIsIFxuICAgIFwiVG90YWwgKHByb2QpXCIgICwgXCI9QjIrQjNcIiwgXCI9QzIrQzNcIiwgXCI9RDIrRDNcIiwgXG5dO1xuc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uLmdldFJhbmdlKFwiQTE6RDFcIikuZm9ybWF0KFwiYm9sZFwiKTtcbnNoZWV0X3JlY29waWVfbW90aXZhdGlvbi5nZXRSYW5nZShcIkEyOkE0XCIpLmZvcm1hdChcImJvbGRcIik7XG5cbmNvbnN0IHNoZWV0X3JlY29waWVfbW90aXZhdGlvbl9lbXB0eSA9IGF3YWl0IExJU1MucXMoJyNzaGVldF9yZWNvcGllX21vdGl2YXRpb25fZW1wdHknKTtcblxuc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uX2VtcHR5LmdldFJhbmdlKFwiQTE6RDRcIikuZm9ybWF0KFwiYWxpZ25fY2VudGVyXCIpLmNvbnRlbnQgPSBbXG4gICAgXCJDb25zby9qb3VyXCIsIFwiQ3JheW9uc1wiLCBcIkdvbW1lc1wiLCBcIlRvdGFsIChqb3VyKVwiLFxuICAgIFwiMDEvMDFcIiAgLCAyLCAzLCB1bmRlZmluZWQsIFxuICAgIFwiMDIvMDFcIiAgLCA0LCAxLCB1bmRlZmluZWQsIFxuICAgIFwiVG90YWwgKHByb2QpXCIgICwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZFxuXTtcbnNoZWV0X3JlY29waWVfbW90aXZhdGlvbl9lbXB0eS5nZXRSYW5nZShcIkExOkQxXCIpLmZvcm1hdChcImJvbGRcIik7XG5zaGVldF9yZWNvcGllX21vdGl2YXRpb25fZW1wdHkuZ2V0UmFuZ2UoXCJBMjpBNFwiKS5mb3JtYXQoXCJib2xkXCIpO1xuXG5jb25zdCBzaGVldF9yZWNvcGllX2luY3IgPSBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfcmVjb3BpZV9pbmNyJyk7XG5cbnNoZWV0X3JlY29waWVfaW5jci5nZXRSYW5nZSgnQTE6QTInKS5jb250ZW50ID0gWyAxLCBuZXcgRGF0ZSgpIF07XG5cblxuLy8gdGVzdFxuY29uc3QgYyA9IGBcbjx0YWJsZSBpZD1cInVuXCI+XG4gICAgPHRib2R5PlxuICAgICAgICA8dHI+PHRkPlhYWDwvdGQ+PC90cj5cbiAgICA8L3Rib2R5PlxuPC90YWJsZT5gO1xuXG5jb25zdCBjc3MgPSBgXG4gICAgdGQ6bm90KFtjb250ZW50ZWRpdGFibGVdKSB7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIH1cbmA7XG5cbmNsYXNzIFggZXh0ZW5kcyBMSVNTKHtcbiAgICBjb250ZW50OiBjLCBjc3Ncbn0pIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBjb25zdCB0ZCA9IHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignI3VuIHRkJykhO1xuICAgICAgICB0ZC50b2dnbGVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuICAgICAgICB0ZC5mb2N1cygpO1xuICAgICAgICB0ZC50ZXh0Q29udGVudCA9IFwiWVlZXCI7XG4gICAgfVxufVxuXG5MSVNTLmRlZmluZSgndGVzdC10ZXN0JywgWCk7IiwiaW1wb3J0IHsgc3RyMmh0bWwgfSBmcm9tIFwic3RydWN0L3V0aWxzL3N0cjJodG1sXCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGxMaXN0IH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuZXhwb3J0IGNsYXNzIFJhbmdlT3ZlcmxheSBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcblxuICAgICNzaGVldDogQ2FsY1NoZWV0O1xuICAgICNyYW5nZTogc3RyaW5nfG51bGwgPSBudWxsO1xuICAgIHByb3RlY3RlZCBvdmVybGF5OiBIVE1MRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKHNoZWV0OiBDYWxjU2hlZXQsIC4uLmNsYXNzbGlzdDogc3RyaW5nW10pIHtcblxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuI3NoZWV0ID0gc2hlZXQ7XG4gICAgICAgIHRoaXMuI3NoZWV0Lmhvc3QuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vdmVybGF5ID0gc3RyMmh0bWwoYDxkaXYgY2xhc3M9J292ZXJsYXknPjwvZGl2PmApO1xuICAgICAgICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2xpc3QpO1xuXG4gICAgICAgIHNoZWV0LmNvbnRlbnQuYXBwZW5kKCB0aGlzLm92ZXJsYXkgKTtcbiAgICB9XG5cbiAgICBzZXRSYW5nZShyYW5nZTogQ2VsbExpc3R8bnVsbCkge1xuICAgICAgICB0aGlzLiNyYW5nZSA9IHJhbmdlID09PSBudWxsID8gbnVsbCA6IHJhbmdlLnBsYWdlX25hbWUhO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRSZWN0KC4uLnJlY3Q6IHJlYWRvbmx5IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdKSB7XG4gICAgICAgIHJldHVybiByZWN0O1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcblxuICAgICAgICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiLCB0aGlzLiNyYW5nZSA9PT0gbnVsbCk7XG5cbiAgICAgICAgaWYoIHRoaXMuI3JhbmdlID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5nZXRSZWN0KCAuLi50aGlzLiNzaGVldC5nZXRSZWN0KCB0aGlzLiNzaGVldC5nZXRSYW5nZSh0aGlzLiNyYW5nZSkgKSApO1xuICAgICAgICB0aGlzLiNzaGVldC5zZXRSZWN0KHRoaXMub3ZlcmxheSwgcmVjdCApO1xuICAgIH1cblxuICAgIG92ZXJyaWRlIGFkZEV2ZW50TGlzdGVuZXIodHlwZTogc3RyaW5nLCBjYWxsYmFjazogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCB8IG51bGwsIG9wdGlvbnM/OiBBZGRFdmVudExpc3RlbmVyT3B0aW9ucyB8IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgb3ZlcnJpZGUgcmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlOiBzdHJpbmcsIGNhbGxiYWNrOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0IHwgbnVsbCwgb3B0aW9ucz86IEV2ZW50TGlzdGVuZXJPcHRpb25zIHwgYm9vbGVhbik6IHZvaWQge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMub3ZlcmxheS5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGb3JtdWxhUmVmIGV4dGVuZHMgUmFuZ2VPdmVybGF5IHtcblxuICAgIGNvbnN0cnVjdG9yKHNoZWV0OiBDYWxjU2hlZXQpIHtcbiAgICAgICAgc3VwZXIoc2hlZXQsIFwicmFuZ2VfaGlnaGxpZ2h0XCIpO1xuICAgIH1cblxuICAgICNjdXJfY29sb3IgPSAwO1xuICAgIHNldENvbG9yKGNvbG9yX2lkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoYGhpZ2hsaWdodF8ke3RoaXMuI2N1cl9jb2xvcn1gKTsgXG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKGBoaWdobGlnaHRfJHtjb2xvcl9pZH1gKTtcbiAgICAgICAgdGhpcy4jY3VyX2NvbG9yID0gY29sb3JfaWQ7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVjb3B5SGFuZGxlIGV4dGVuZHMgUmFuZ2VPdmVybGF5IHtcblxuICAgIGNvbnN0cnVjdG9yKHNoZWV0OiBDYWxjU2hlZXQpIHtcbiAgICAgICAgc3VwZXIoc2hlZXQsIFwicmVjb3B5XCIpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBnZXRSZWN0KHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gW3grdy0yLCB5K2gtMiwgNSwgNV0gYXMgY29uc3Q7XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgRm9ybXVsYSB9IGZyb20gXCIuL2Zvcm11bGFfcGFyc2VyXCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGwsIENlbGxMaXN0LCBSYXdDb250ZW50VHlwZSB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbmV4cG9ydCBjbGFzcyBGb3JtYXRNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBzaGVldC5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXY6IEtleWJvYXJkRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgaWYoICEgZXYuY3RybEtleSApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnYicpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KFwiYm9sZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdpJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJpdGFsaWNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAndScpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KFwidW5kZXJsaW5lXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ2wnKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcImFsaWduX2xlZnRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAncicpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KFwiYWxpZ25fcmlnaHRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnZScpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KFwiYWxpZ25fY2VudGVyXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJzQnICYmIGV2LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChGb3JtYXRzLmV1cm9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICc1JyAmJiBldi5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoRm9ybWF0cy5wb3VyY2VudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnMScgJiYgZXYuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KEZvcm1hdHMubnVtYmVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoY2hhbmdlZCkge1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICAgIC8qIFRPRE8gbGlzdGVuICovXG5cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbG9hdDJEYXRlKGZsb2F0OiBudW1iZXIpIHtcblxuICAgIGxldCBjb250ZW50ID0gbmV3IERhdGUoXCIxODk5LTEyLTMwXCIpO1xuXG4gICAgY29udGVudC5zZXREYXRlKCBjb250ZW50LmdldERhdGUoKSArIGZsb2F0KTtcblxuICAgIHJldHVybiBjb250ZW50O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRhdGUyRmxvYXQoZGF0ZTogRGF0ZSkge1xuICAgIGNvbnN0IGJlZyA9IG5ldyBEYXRlKFwiMTg5OS0xMi0zMFwiKTtcbiAgICByZXR1cm4gKygoZGF0ZS5nZXRUaW1lKCkgLSBiZWcuZ2V0VGltZSgpKSAvICgyNCozNjAwKjEwMDApKS50b0ZpeGVkKDcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UmF3KHB0aGlzOiBDZWxsLCB2YWx1ZSA9IHB0aGlzLnJhd0NvbnRlbnQpIHtcbiAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBGb3JtdWxhKVxuICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgICByZXR1cm4gRm9ybWF0cy5kZWZhdWx0LmNhbGwocHRoaXMsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGNvbnN0IEZvcm1hdHMgPSB7XG5cbiAgICBkZWZhdWx0OiBmdW5jdGlvbih0aGlzOiBDZWxsfG51bGwsIHZhbHVlID0gdGhpcz8ucmF3Q29udGVudCkge1xuXG4gICAgICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIEZvcm11bGEpXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmNhY2hlZFZhbHVlKCk7XG5cbiAgICAgICAgY29uc3QgcHJlYyA9ICsodGhpcz8uZ2V0QXR0cmlidXRlKCdwcmVjaXNpb24nKSA/PyAyKTtcblxuICAgICAgICBpZiggdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG5cbiAgICAgICAgICAgIGlmKCB0aGlzPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpID09PSBcInBvdXJjZW50XCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAkeysoICgrdmFsdWUpKjEwMCkudG9QcmVjaXNpb24oNyl9YC5yZXBsYWNlKCcuJywgJywnKSArIFwiJVwiO1xuXG4gICAgICAgICAgICByZXR1cm4gYCR7K3ZhbHVlLnRvUHJlY2lzaW9uKDcpfWAucmVwbGFjZSgnLicsICcsJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggdHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIilcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA/ICdWUkFJJyA6ICdGQVVYJztcblxuICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWUhO1xuICAgIH0sXG4gICAgbnVtYmVyOiBmdW5jdGlvbih0aGlzOkNlbGwsIHZhbHVlID0gdGhpcy5yYXdDb250ZW50KSB7XG5cbiAgICAgICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRm9ybXVsYSlcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuY2FjaGVkVmFsdWUoKTtcblxuICAgICAgICBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG5cbiAgICAgICAgaWYodmFsdWUgaW5zdGFuY2VvZiBEYXRlKVxuICAgICAgICAgICAgdmFsdWUgPSBkYXRlMkZsb2F0KHZhbHVlKTtcblxuICAgICAgICBpZiggdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIikgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIsIFwibnVtYmVyXCIpO1xuXG4gICAgICAgICAgICBpZiggISAodGhpcy5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSkgKVxuICAgICAgICAgICAgICAgIENhbGNTaGVldC5nZXRTaGVldEZyb21DZWxsKHRoaXMpLmdldFJhbmdlKHRoaXMpLmNvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZWMgPSArKHRoaXMuZ2V0QXR0cmlidXRlKCdwcmVjaXNpb24nKSA/PyAyKTtcblxuICAgICAgICByZXR1cm4gdmFsdWUudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XG4gICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHByZWMsXG4gICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNcbiAgICAgICAgICAgIH0pO1xuICAgIH0sXG4gICAgcG91cmNlbnQ6IGZ1bmN0aW9uKHRoaXM6Q2VsbCwgdmFsdWUgPSB0aGlzLnJhd0NvbnRlbnQpIHtcblxuICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBGb3JtdWxhKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5jYWNoZWRWYWx1ZSgpO1xuXG4gICAgICAgIGlmKHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgaWYodmFsdWUgaW5zdGFuY2VvZiBEYXRlKVxuICAgICAgICAgICAgdmFsdWUgPSBkYXRlMkZsb2F0KHZhbHVlKTtcblxuICAgICAgICBpZiggdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIikgIT09IFwicG91cmNlbnRcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIiwgXCJwb3VyY2VudFwiKTtcbiAgICAgICAgICAgIGlmKCAhICh0aGlzLnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBGb3JtdWxhKSApXG4gICAgICAgICAgICAgICAgQ2FsY1NoZWV0LmdldFNoZWV0RnJvbUNlbGwodGhpcykuZ2V0UmFuZ2UodGhpcykuY29udGVudCA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJlYyA9ICsodGhpcy5nZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicpID8/IDIpO1xuXG4gICAgICAgIHJldHVybiAodmFsdWUgKiAxMDApLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjLFxuICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjXG4gICAgICAgICAgICB9KSArICclJztcbiAgICB9LFxuICAgIGRhdGU6IGZ1bmN0aW9uKHRoaXM6Q2VsbCwgdmFsdWUgPSB0aGlzLnJhd0NvbnRlbnQpIHtcbiAgICAgICAgXG4gICAgICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIEZvcm11bGEpXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmNhY2hlZFZhbHVlKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgaWYodmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgaWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcblxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtdHlwZVwiLCBcImRhdGVcIik7XG5cbiAgICAgICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSApIHtcbiAgICAgICAgICAgIGxldCBkYXRlID0gdmFsdWUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIik7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5zbGljZSgwLCA2KSArIGRhdGUuc2xpY2UoOCk7XG4gICAgICAgIH0gaWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZmxvYXQyRGF0ZSh2YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmKCAhICh0aGlzLnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBGb3JtdWxhKSApXG4gICAgICAgICAgICAgICAgQ2FsY1NoZWV0LmdldFNoZWV0RnJvbUNlbGwodGhpcykuZ2V0UmFuZ2UoIHRoaXMgKS5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGRhdGUgPSBjb250ZW50LnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUZSXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUuc2xpY2UoMCwgNikgKyBkYXRlLnNsaWNlKDgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgZXVyb3M6IGZ1bmN0aW9uKHRoaXM6Q2VsbCwgdmFsdWUgPSB0aGlzLnJhd0NvbnRlbnQpIHtcblxuICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBGb3JtdWxhKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5jYWNoZWRWYWx1ZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgIGlmKHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcblxuICAgICAgICBpZih2YWx1ZSBpbnN0YW5jZW9mIERhdGUpXG4gICAgICAgICAgICB2YWx1ZSA9IGRhdGUyRmxvYXQodmFsdWUpO1xuXG4gICAgICAgIGlmKCB0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtdHlwZVwiKSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIiwgXCJudW1iZXJcIik7XG4gICAgICAgICAgICBpZiggISAodGhpcy5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSkgKVxuICAgICAgICAgICAgICAgIENhbGNTaGVldC5nZXRTaGVldEZyb21DZWxsKHRoaXMpLmdldFJhbmdlKHRoaXMpLmNvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZWMgPSArKHRoaXMuZ2V0QXR0cmlidXRlKCdwcmVjaXNpb24nKSA/PyAyKTtcblxuICAgICAgICByZXR1cm4gdmFsdWUudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XG4gICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHByZWMsXG4gICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNcbiAgICAgICAgICAgIH0pICsgJyDigqwnO1xuICAgIH0sXG59XG5cbmV4cG9ydCBjbGFzcyBGb3JtYXQge1xuXG4gICAgI2Zvcm1hdDogUmVjb3JkPHN0cmluZywgYW55PjtcblxuICAgIGNvbnN0cnVjdG9yKGZvcm1hdDogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgICAgICB0aGlzLiNmb3JtYXQgPSBmb3JtYXQ7XG4gICAgfVxuXG4gICAgYXBwbHlUbyhjZWxsOiBDZWxsfENlbGxMaXN0KSB7XG5cbiAgICAgICAgaWYoIGNlbGwgaW5zdGFuY2VvZiBDZWxsTGlzdCkge1xuXG4gICAgICAgICAgICBmb3IobGV0IGMgb2YgY2VsbC5jZWxscylcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5VG8oYyk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgbmFtZSBpbiB0aGlzLiNmb3JtYXQpIHtcbiAgICAgICAgICAgIGxldCB2YWwgPSB0aGlzLiNmb3JtYXRbbmFtZV07XG5cbiAgICAgICAgICAgIGlmKG5hbWUgPT09ICdmb3JtYXQnKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggdmFsID09PSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY2VsbC5mb3JtYXQgPSBGb3JtYXRzLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBjZWxsLmZvcm1hdCgpOyAvL1RPRE86IGlmIGZjdFxuICAgIFxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjZWxsLmZvcm1hdCA9IHZhbDtcbiAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gY2VsbC5mb3JtYXQoIGNlbGwucmF3Q29udGVudCk7IC8vVE9ETzogaWYgZmN0XG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYobmFtZSA9PT0gJ3ByZWNpc2lvbicpIHtcbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgncHJlY2lzaW9uJywgdmFsKTtcbiAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gY2VsbC5mb3JtYXQ/LiggY2VsbC5yYXdDb250ZW50KTsgLy9UT0RPOiBpZiBmY3RcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIG5hbWUgPT09ICdzcGFuJyApIHtcblxuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hlZXQgPSBDYWxjU2hlZXQuZ2V0U2hlZXRGcm9tQ2VsbChjZWxsKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiggdmFsWzBdID09PSAxICYmIHZhbFsxXSA9PT0gMSkgeyAvLyB1bm1lcmdlXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHIgPSArKGNlbGwuZ2V0QXR0cmlidXRlKCdyb3dzcGFuJykgPz8gMCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjID0gKyhjZWxsLmdldEF0dHJpYnV0ZSgnY29sc3BhbicpID8/IDApO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByOyArK2kpXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgYzsgKytqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gc2hlZXQucmVsYXRpdmVUbyhjZWxsLCBpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGFyZ2V0LmNlbGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgncm93c3BhbicpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgnY29sc3BhbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdyb3dzcGFuJywgYCR7dmFsWzBdfWApO1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgYCR7dmFsWzFdfWApO1xuXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHZhbFswXTsgKytpKVxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdmFsWzFdOyArK2opIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGkgPT09IDAgJiYgaiA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gc2hlZXQucmVsYXRpdmVUbyhjZWxsLCBpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jZWxsID0gY2VsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCB0eXBlb2YgdmFsID09PSBcImJvb2xlYW5cIikge1xuXG4gICAgICAgICAgICAgICAgaWYoIG5hbWUuc3RhcnRzV2l0aCgnYWxpZ25fJykgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYWxpZ25fbGVmdCcpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2FsaWduX2NlbnRlcicpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2FsaWduX3JpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCBuYW1lLnN0YXJ0c1dpdGgoJ3ZhbGlnbl8nKSApIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZ25fdG9wJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWduX21pZGRsZScpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlnbl9ib3R0b20nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUobmFtZSwgdmFsKTtcblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjZWxsLnN0eWxlLnNldFByb3BlcnR5KGAtLSR7bmFtZX1gLCB2YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UHJvcGVydHkobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNmb3JtYXRbbmFtZV07XG4gICAgfVxuICAgIGhhc1Byb3BlcnR5KG5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmFtZSBpbiB0aGlzLiNmb3JtYXQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGV4dHJhY3RGb3JtYXQoY2VsbDogQ2VsbHxDZWxsTGlzdCk6IEZvcm1hdCB7XG4gICAgICAgIFxuICAgICAgICBpZiggY2VsbCBpbnN0YW5jZW9mIENlbGxMaXN0KSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gY2VsbC5jZWxscztcblxuICAgICAgICAgICAgbGV0IGZvcm1hdCA9IEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzWzBdKTtcblxuICAgICAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IGNlbGxzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGYyID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHNbaV0pO1xuXG4gICAgICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gZm9ybWF0LiNmb3JtYXQpXG4gICAgICAgICAgICAgICAgICAgIGlmKCAhIChrZXkgaW4gZjIuI2Zvcm1hdCkgfHwgZjIuI2Zvcm1hdFtrZXldICE9PSBmb3JtYXQuI2Zvcm1hdFtrZXldIClcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBmb3JtYXQuI2Zvcm1hdFtrZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgZm9ybWF0ID0gT2JqZWN0LmZyb21FbnRyaWVzPGFueT4oIFsuLi5jZWxsLmNsYXNzTGlzdC52YWx1ZXMoKV0ubWFwKGUgPT4gW2UsIHRydWVdKSApO1xuICAgICAgICBcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNlbGwuc3R5bGUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBuYW1lID0gY2VsbC5zdHlsZS5pdGVtKGkpO1xuICAgICAgICAgICAgaWYoICEgbmFtZS5zdGFydHNXaXRoKCctLScpIClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIGZvcm1hdFtuYW1lLnNsaWNlKDIpXSA9IGNlbGwuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbHNwYW4gPSArKGNlbGwuZ2V0QXR0cmlidXRlKCdjb2xzcGFuJykgPz8gMSk7XG4gICAgICAgIGNvbnN0IHJvd3NwYW4gPSArKGNlbGwuZ2V0QXR0cmlidXRlKCdyb3dzcGFuJykgPz8gMSk7XG5cbiAgICAgICAgaWYoIGNvbHNwYW4gPiAxIHx8IHJvd3NwYW4gPiAxIClcbiAgICAgICAgICAgIGZvcm1hdC5zcGFuID0gWyByb3dzcGFuLCBjb2xzcGFuIF07XG5cbiAgICAgICAgaWYoICEgKFwiZm9udF9zaXplXCIgaW4gZm9ybWF0KSApXG4gICAgICAgICAgICBmb3JtYXRbJ2ZvbnRfc2l6ZSddID0gJzEwcHQnO1xuXG4gICAgICAgIGlmKCBcImZvcm1hdFwiIGluIGNlbGwpXG4gICAgICAgICAgICBmb3JtYXQuZm9ybWF0ID0gY2VsbC5mb3JtYXQ7XG5cbiAgICAgICAgaWYoIGNlbGwuaGFzQXR0cmlidXRlKCdwcmVjaXNpb24nKSApXG4gICAgICAgICAgICBmb3JtYXQucHJlY2lzaW9uID0gY2VsbC5nZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicpO1xuXG4gICAgICAgIHJldHVybiBuZXcgRm9ybWF0KGZvcm1hdCk7XG4gICAgfVxufSIsIi8vVE9ETzogd2VicGFjayBjb25maWcuLi5cbmltcG9ydCBMSVNTIGZyb20gXCIuLi8uLi8uLi9saWJzL0xJU1NcIjtcbmltcG9ydCB7IGZvcm1hdFJhdywgRm9ybWF0cyB9IGZyb20gXCIuL2Zvcm1hdFwiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0LCBDZWxsIH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuY29uc3QgY3NzID0gYFxuICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAmIHByZSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xuICAgICAgICAgICAgbWluLWhlaWdodDogY2FsYyggMXJlbSArIDhweCArIDJweCApO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB0O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMaWJlcmF0aW9uIFNhbnMnO1xuICAgICAgICB9XG4gICAgfVxuYDtcblxuXG5leHBvcnQgY2xhc3MgQ2FsY0Zvcm11bGEgZXh0ZW5kcyBMSVNTKHtcbiAgICBjc3Ncbn0pIHtcblxuICAgICNpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xuICAgICNzaGVldCAgITogQ2FsY1NoZWV0O1xuICAgICNjdXJfY2VsbDogQ2VsbHxudWxsID0gbnVsbDtcbiAgICAjb25JbnB1dDogKGV2OiBFdmVudCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoIHRoaXMuI2lucHV0ICk7XG5cbiAgICAgICAgdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmKCB0aGlzLiNjdXJfY2VsbCA9PT0gbnVsbCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAvL3RoaXMuI3NoZWV0LmN1cnNvci5jb250ZW50ID0gdGhpcy4jaW5wdXQudGV4dENvbnRlbnQhO1xuICAgICAgICAgICAgdGhpcy4jc2hlZXQuc3RhdGVzLmNlbGxfZWRpdC5zdGF0ZSA9IG51bGw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmKCB0aGlzLiNjdXJfY2VsbCA9PT0gbnVsbCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLiNzaGVldC5zdGF0ZXMuY2VsbF9lZGl0LnN0YXRlID0gdGhpcy4jY3VyX2NlbGw7XG4gICAgICAgICAgICAvL3RoaXMuI2N1cl9jZWxsIS50ZXh0Q29udGVudCA9IHRoaXMuI2lucHV0LnRleHRDb250ZW50ITtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiggdGhpcy4jY3VyX2NlbGwgPT09IG51bGwgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwhLnRleHRDb250ZW50ID0gZm9ybWF0UmF3KHRoaXMuI2N1cl9jZWxsLCB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCEgKTtcbiAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudCgnaW5wdXQnLCB7ZGV0YWlsOiB0cnVlfSkgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jb25JbnB1dCA9IChldjogRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBpZiggZXYuZGV0YWlsID09PSB0cnVlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gZm9ybWF0UmF3KCB0aGlzLiNjdXJfY2VsbCEsIHRoaXMuI2N1cl9jZWxsIS50ZXh0Q29udGVudCEgKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzeW5jVG8oc2hlZXQ6IENhbGNTaGVldCkge1xuXG4gICAgICAgIHRoaXMuI3NoZWV0ID0gc2hlZXQ7XG4gICAgICAgIGNvbnN0IGN1cnNvciA9IHRoaXMuI3NoZWV0LmN1cnNvcjtcblxuICAgICAgICBzaGVldC5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3VwZGF0ZScsICgpID0+IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gZm9ybWF0UmF3KGN1cnNvci5maXJzdENlbGwgKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjdXJzb3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IGN1cnNvci5jZWxscztcblxuICAgICAgICAgICAgdGhpcy4jaW5wdXQudG9nZ2xlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAhIHNoZWV0LmlzUk8gKTtcblxuICAgICAgICAgICAgaWYoIGNlbGxzLmxlbmd0aCA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgaWYoIHRoaXMuI2N1cl9jZWxsICE9PSBudWxsIClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLiNvbklucHV0KTtcbiAgICAgICAgICAgICAgICB0aGlzLiNjdXJfY2VsbCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiNjdXJfY2VsbCA9IGNlbGxzWzBdO1xuICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLiNvbklucHV0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy4jaW5wdXQudGV4dENvbnRlbnQgPSBmb3JtYXRSYXcoIHRoaXMuI2N1cl9jZWxsICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5MSVNTLmRlZmluZSgnY2FsYy1mb3JtdWxhJywgQ2FsY0Zvcm11bGEpOyIsImltcG9ydCB7IGRhdGUyRmxvYXQsIEZvcm1hdHMgfSBmcm9tIFwiLi9mb3JtYXRcIjtcbmltcG9ydCB7IENhbGNTaGVldCwgVmFsdWVUeXBlIH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuZXhwb3J0IGNsYXNzIEZvcm11bGEge1xuXG4gICAgI3N0cjogc3RyaW5nO1xuICAgICNleGVjOiAoc2hlZXQ6IENhbGNTaGVldCkgPT4gVmFsdWVUeXBlO1xuICAgICNyYW5nZXM6IFRva2VuW107XG5cbiAgICAjY2FjaGU6IFZhbHVlVHlwZXxudWxsID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHN0cjogc3RyaW5nLCBleGVjOiAoc2hlZXQ6IENhbGNTaGVldCkgPT4gVmFsdWVUeXBlLCByYW5nZXNfdG9rZW46IFRva2VuW10gPSBbXSkge1xuXG4gICAgICAgIHRoaXMuI3N0ciA9IHN0cjtcbiAgICAgICAgdGhpcy4jZXhlYyA9IGV4ZWM7XG4gICAgICAgIHRoaXMuI3JhbmdlcyA9IHJhbmdlc190b2tlbjtcbiAgICB9XG4gICAgXG4gICAgcmVsYXRpdmVUbyggc2hlZXQ6IENhbGNTaGVldCwgZHJvdzogbnVtYmVyLCBkY29sOiBudW1iZXIpIHtcbiAgICAgICAgXG4gICAgICAgIGxldCBuZXdfcmFuZ2VzID0gdGhpcy4jcmFuZ2VzLm1hcChyID0+IHtcblxuICAgICAgICAgICAgLy9UT0RPOiBpZiByYW5nZS4uLlxuICAgICAgICAgICAgbGV0IHBvcyA9IFsuLi5zaGVldC5jZWxsUG9zKCBzaGVldC5nZXRSYW5nZShyLnZhbHVlKS5maXJzdENlbGwgKV07XG4gICAgXG4gICAgICAgICAgICBpZiggci52YWx1ZS5sYXN0SW5kZXhPZignJCcpIDw9IDAgKVxuICAgICAgICAgICAgICAgIHBvc1swXSArPSBkcm93O1xuICAgICAgICAgICAgaWYoIHIudmFsdWVbMF0gIT09ICckJyApXG4gICAgICAgICAgICAgICAgcG9zWzFdICs9IGRjb2w7XG5cbiAgICAgICAgICAgIHJldHVybiBgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1K3Bvc1sxXS0xKX0ke3Bvc1swXX1gO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbmV3X2Zvcm11bGEgPSBcIlwiO1xuXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy4jcmFuZ2VzLmxlbmd0aDsgKytpKSB7XG5cbiAgICAgICAgICAgIG5ld19mb3JtdWxhICs9IHRoaXMuI3N0ci5zbGljZShvZmZzZXQsIHRoaXMuI3Jhbmdlc1tpXS5iZWcpO1xuICAgICAgICAgICAgbmV3X2Zvcm11bGEgKz0gbmV3X3Jhbmdlc1tpXTtcblxuICAgICAgICAgICAgb2Zmc2V0ID0gdGhpcy4jcmFuZ2VzW2ldLmVuZDtcbiAgICAgICAgfVxuICAgICAgICBuZXdfZm9ybXVsYSArPSB0aGlzLiNzdHIuc2xpY2Uob2Zmc2V0KTtcbiAgICAgICAgXG4gICAgICAgIC8vY2FuIGJlIG9wdGltaXplZC4uLlxuICAgICAgICByZXR1cm4gcGFyc2VfZm9ybXVsYSggbmV3X2Zvcm11bGEgKTtcbiAgICB9XG5cbiAgICBnZXQgcmFuZ2VzVG9rZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNyYW5nZXM7XG4gICAgfVxuXG4gICAgcmVzZXRDYWNoZSgpIHtcbiAgICAgICAgdGhpcy4jY2FjaGUgPSBudWxsO1xuICAgIH1cblxuICAgIGNhY2hlZFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY2FjaGUhO1xuICAgIH1cblxuICAgIGV4ZWMoc2hlZXQ6IENhbGNTaGVldCkge1xuXG4gICAgICAgIGlmKCB0aGlzLiNjYWNoZSAhPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiNjYWNoZTtcblxuICAgICAgICByZXR1cm4gdGhpcy4jY2FjaGUgPSB0aGlzLiNleGVjKHNoZWV0KTtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3N0cjtcbiAgICB9XG59XG5cbnR5cGUgVG9rZW4gPSB7XG4gICAgYmVnOiBudW1iZXIsXG4gICAgZW5kOiBudW1iZXIsXG4gICAgdmFsdWU6IHN0cmluZyxcbiAgICB0eXBlOiBcInN0cmluZ1wifFwibnVtYmVyXCJ8XCJjYWxsXCJ8XCJyYW5nZVwifFwib3BcIlxufVxuXG5cbmZ1bmN0aW9uIGV4dHJhY3RUb2tlbihzdHI6IHN0cmluZywgb2Zmc2V0OiBudW1iZXIpIHtcblxuICAgIHdoaWxlKCBbJyAnLCAnXFxuJywgJ1xcdCddLmluY2x1ZGVzKHN0cltvZmZzZXRdKSApIC8vIGlnbm9yZSB3aGl0ZXNwYWNlc1xuICAgICAgICArK29mZnNldDtcblxuICAgIGxldCB0b2tlbjogUGFydGlhbDxUb2tlbj4gPSB7XG4gICAgICAgIGJlZzogb2Zmc2V0XG4gICAgfTtcblxuICAgIGlmKHN0cltvZmZzZXRdID09PSAnXCInKSB7XG4gICAgICAgIHRva2VuLnR5cGUgPSBcInN0cmluZ1wiO1xuICAgICAgICB3aGlsZSggc3RyWysrb2Zmc2V0XSAhPT0gJ1wiJyAmJiBzdHJbb2Zmc2V0LTFdICE9PSAnXFxcXCcpIHtcbiAgICAgICAgICAgIGlmKG9mZnNldCsxID49IHN0ci5sZW5ndGggKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRm9ybXVsYSBwYXJzaW5nIGVycm9yJyk7XG4gICAgICAgIH1cbiAgICAgICAgKytvZmZzZXQ7XG4gICAgfSBlbHNlIGlmKCBzdHJbb2Zmc2V0XSA9PT0gJywnIHx8IChzdHJbb2Zmc2V0XSA+PSAnMCcgJiYgc3RyW29mZnNldF0gPD0gJzknKSApIHtcbiAgICAgICAgdG9rZW4udHlwZSA9IFwibnVtYmVyXCI7XG4gICAgICAgIGxldCBoYXNDb21tYSA9IGZhbHNlO1xuICAgICAgICB3aGlsZSggc3RyW29mZnNldF0gPT09ICcsJyB8fCBzdHJbb2Zmc2V0XSA+PSAnMCcgJiYgc3RyW29mZnNldF0gPD0gJzknICkge1xuXG4gICAgICAgICAgICBpZiggc3RyW29mZnNldF0gPT09ICcsJyApIHtcbiAgICAgICAgICAgICAgICBpZihoYXNDb21tYSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JtdWxhIHBhcnNpbmcgZXJyb3InKTtcbiAgICAgICAgICAgICAgICBoYXNDb21tYSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICsrb2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICB9IGVsc2UgaWYoIHN0cltvZmZzZXRdID09PSAnJCcgfHwgc3RyW29mZnNldF0gPj0gJ0EnICYmIHN0cltvZmZzZXRdIDw9ICdaJykgeyAvLyskXG4gICAgICAgIFxuICAgICAgICB3aGlsZSggb2Zmc2V0IDwgc3RyLmxlbmd0aFxuICAgICAgICAgICAgICAgICYmIChzdHJbb2Zmc2V0XSA9PT0gJyQnIHx8IHN0cltvZmZzZXRdID49ICdBJyAmJiBzdHJbb2Zmc2V0XSA8PSAnWidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBzdHJbb2Zmc2V0XSA+PSAnMCcgJiYgc3RyW29mZnNldF0gPD0gJzknXG4gICAgICAgICAgICAgICAgICAgICkgKVxuICAgICAgICAgICAgKytvZmZzZXQ7XG5cbiAgICAgICAgdG9rZW4udHlwZSA9IHN0cltvZmZzZXRdID09PSAnKCcgPyAnY2FsbCcgOiAncmFuZ2UnO1xuXG4gICAgICAgIGlmKCBzdHJbb2Zmc2V0XSA9PT0gJygnIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b2tlbi50eXBlID0gXCJvcFwiOyAvLyBvbmx5IG9uIGNoYXIgPz8/XG5cbiAgICAgICAgaWYoIHN0cltvZmZzZXQgKyAxXSA9PT0gJz0nKSAvLyA+PSAvIDw9XG4gICAgICAgICAgICArK29mZnNldDtcbiAgICAgICAgZWxzZSBpZiggc3RyW29mZnNldCArIDFdID09PSAnPicpIC8vIDw+XG4gICAgICAgICAgICArK29mZnNldDtcblxuICAgICAgICArK29mZnNldDtcbiAgICB9XG5cbiAgICB0b2tlbi5lbmQgPSBvZmZzZXQ7XG4gICAgdG9rZW4udmFsdWUgPSBzdHIuc2xpY2UodG9rZW4uYmVnLCB0b2tlbi5lbmQpO1xuXG4gICAgcmV0dXJuIHRva2VuIGFzIFJlcXVpcmVkPFRva2VuPjtcbn1cblxuY2xhc3MgTm9kZSB7XG5cbiAgICBjaGlsZHJlbjogTm9kZVtdO1xuICAgICNmY3Q6IChzaGVldDogQ2FsY1NoZWV0LCAuLi5hcmdzOihWYWx1ZVR5cGUpW10pID0+IFZhbHVlVHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKGZjdDogKHNoZWV0OiBDYWxjU2hlZXQsIC4uLmFyZ3M6KFZhbHVlVHlwZSlbXSkgPT4gVmFsdWVUeXBlLCAuLi5jaGlsZHJlbjogTm9kZVtdKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgaWYoY2hpbGRyZW4gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIldURlwiKTtcbiAgICAgICAgdGhpcy4jZmN0ID0gZmN0O1xuICAgIH1cblxuICAgIGV2YWwoc2hlZXQ6IENhbGNTaGVldCk6IFZhbHVlVHlwZSB7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSB0aGlzLmNoaWxkcmVuLm1hcCggYyA9PiBjLmV2YWwoc2hlZXQpICk7XG4gICAgICAgIHJldHVybiB0aGlzLiNmY3Qoc2hlZXQsIC4uLmFyZ3MgKTtcbiAgICB9XG4gICAgXG59XG5cbmZ1bmN0aW9uIHRvTnVtYmVyKGE6IHVua25vd24pOiBudW1iZXIge1xuXG4gICAgaWYoYSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gMDtcblxuICAgIGlmKCB0eXBlb2YgYSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgcmV0dXJuIE51bWJlcihhKTtcblxuICAgIGlmKCBhIGluc3RhbmNlb2YgRGF0ZSlcbiAgICAgICAgcmV0dXJuIGRhdGUyRmxvYXQoYSk7XG5cbiAgICByZXR1cm4gYSBhcyB1bmtub3duIGFzIG51bWJlcjtcbn1cblxuY29uc3Qgb3BfaW1wbCA9IHtcbiAgICAnJSc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24pID0+IHRvTnVtYmVyKGEpLzEwMCxcbiAgICAndS4rJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93bikgPT4gK3RvTnVtYmVyKGEpLFxuICAgICd1Li0nOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duKSA9PiAtdG9OdW1iZXIoYSksXG4gICAgJyonOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiB0b051bWJlcihhKSp0b051bWJlcihiKSxcbiAgICAnLyc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24sIGI6IHVua25vd24pID0+IHRvTnVtYmVyKGEpL3RvTnVtYmVyKGIpLFxuICAgICcrJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93biwgYjogdW5rbm93bikgPT4gdG9OdW1iZXIoYSkrdG9OdW1iZXIoYiksXG4gICAgJy0nOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiB0b051bWJlcihhKS10b051bWJlcihiKSxcbiAgICAnXic6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24sIGI6IHVua25vd24pID0+IE1hdGgucG93KHRvTnVtYmVyKGEpLHRvTnVtYmVyKGIpICksXG4gICAgJyYnOiAoXzogQ2FsY1NoZWV0LCBhOiBzdHJpbmcsIGI6IHN0cmluZykgPT4gYCR7Rm9ybWF0cy5kZWZhdWx0LmNhbGwobnVsbCwgYSl9JHtGb3JtYXRzLmRlZmF1bHQuY2FsbChudWxsLCBiKX1gLFxuICAgICc9JzogIChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhID09PSBiLFxuICAgICc8Pic6IChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhICE9PSBiLFxuICAgICc+JzogIChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhID4gYixcbiAgICAnPj0nOiAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSA+PSBiLFxuICAgICc8JzogIChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhIDwgYixcbiAgICAnPD0nOiAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSA8PSBiLFxufSBhcyBSZWNvcmQ8c3RyaW5nLCAoXzogQ2FsY1NoZWV0LCAuLi5hcmdzOlZhbHVlVHlwZVtdKSA9PiBWYWx1ZVR5cGU+O1xuXG4vLyBodHRwczovL2hlbHAubGlicmVvZmZpY2Uub3JnL2xhdGVzdC9lbi1VUy90ZXh0L3NjYWxjLzAxLzA0MDYwMTk5Lmh0bWxcbmNvbnN0IG9wX3ByaW8gPSBbXG4gICAgWyc6J10sIC8vIHJhbmdlXG4gICAgWychJ10sIC8vIHJhbmdlIGludGVyc2VjdGlvblxuICAgIFsnfiddLCAvLyByYW5nZSB1bmlvblxuICAgIFsndS4rJywgJ3UuLSddLCAvLyB1bmFyeSAtIGZyb20gcmlnaHQgdG8gbGVmdC4uLlxuICAgIFsnJSddLCAvLyBwb3N0Zml4LCAvMTAwXG4gICAgWydeJ10sIC8vIHBvd2VyXG4gICAgWycqJywgJy8nXSxcbiAgICBbJysnLCAnLSddLFxuICAgIFsnJiddLCAvLyBzdHJpbmcgY29uY2F0XG4gICAgWyc9JywgJzw+JywgJzwnLCAnPD0nLCAnPicsICc+PSddIC8vIGNvbXBhcmVcbl07XG5cbmxldCBvcHM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fTtcbmZvcihsZXQgaSA9IDA7IGkgPCBvcF9wcmlvLmxlbmd0aDsgKytpKVxuICAgIGZvcihsZXQgb3Agb2Ygb3BfcHJpb1tpXSApXG4gICAgICAgIG9wc1tvcF0gPSBpO1xuXG5mdW5jdGlvbiB0b2tlbmxpc3QyVHJlZSh0b2tlbnM6IFRva2VuW10pOiBOb2RlIHtcblxuICAgIGlmKCB0b2tlbnMubGVuZ3RoID09PSAxKSB7XG5cbiAgICAgICAgaWYoIHRva2Vuc1swXS50eXBlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBjb25zdCBuYiA9ICt0b2tlbnNbMF0udmFsdWUucmVwbGFjZSgnLCcsICcuJyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vZGUoICgpID0+IG5iKTtcbiAgICAgICAgfVxuICAgICAgICBpZiggdG9rZW5zWzBdLnR5cGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0ciA9IHRva2Vuc1swXS52YWx1ZS5zbGljZSgxLC0xKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTm9kZSggKCkgPT4gc3RyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiggdG9rZW5zWzBdLnR5cGUgPT09IFwicmFuZ2VcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBOb2RlKCAoc2hlZXQ6IENhbGNTaGVldCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IHJhdyA9IHNoZWV0LmdldFJhbmdlKHRva2Vuc1swXS52YWx1ZSkuZmlyc3RDZWxsLnJhd0NvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgICBpZiggcmF3IGluc3RhbmNlb2YgRm9ybXVsYSlcbiAgICAgICAgICAgICAgICAgICAgcmF3ID0gcmF3LmV4ZWMoc2hlZXQpOyAvLyBUT0RPOiBjYWNoZSByZXN1bHRcblxuICAgICAgICAgICAgICAgIHJldHVybiByYXcgYXMgVmFsdWVUeXBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiPz8/XCIpO1xuICAgIH1cblxuICAgIGlmKHRva2Vuc1swXS52YWx1ZSA9PT0gJygnICYmIHRva2Vuc1t0b2tlbnMubGVuZ3RoLTFdLnZhbHVlID09PSAnKScpXG4gICAgICAgIHJldHVybiB0b2tlbmxpc3QyVHJlZSh0b2tlbnMuc2xpY2UoMSwtMSkgKTtcblxuICAgIGxldCBjdXIgPSB7XG4gICAgICAgIHByaW9yaXR5OiBvcF9wcmlvLmxlbmd0aCxcbiAgICAgICAgaWR4ICAgICA6IC0xXG4gICAgfTtcblxuICAgIGZvcihsZXQgaSA9IHRva2Vucy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICBpZiggdG9rZW5zW2ldLnR5cGUgIT09IFwib3BcIiApIC8vIGNhbGwgbm90IGhhbmRsZWQgeWV0Li4uXG4gICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICBpZiggdG9rZW5zW2ldLnZhbHVlID09PSAnKScgKSB7IC8vIGdvIHRvIGZpcnN0ICcoJ1xuICAgICAgICAgICAgaSA9IHRva2Vucy5maW5kSW5kZXgoIHQgPT4gdC50eXBlID09PSAnb3AnICYmIHQudmFsdWUgPT09ICcoJyk7XG5cbiAgICAgICAgICAgIGlmKCBpID09PSAwKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLS1pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXNzZXJ0cyBpZiB1bmFyeSBvcC5cbiAgICAgICAgaWYoIHRva2Vuc1tpXS52YWx1ZSA9PT0gJy0nIHx8IHRva2Vuc1tpXS52YWx1ZSA9PT0gJysnICkge1xuXG4gICAgICAgICAgICBpZiggaSA9PT0gMCB8fCB0b2tlbnNbaS0xXS50eXBlID09PSBcIm9wXCIgKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB1X29wID0gYHUuJHt0b2tlbnNbaV0udmFsdWV9YDtcbiAgICAgICAgICAgICAgICB0b2tlbnNbaV0udmFsdWUgPSB1X29wO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gb3BzW3Vfb3BdO1xuXG4gICAgICAgICAgICAgICAgLy8gcHJpb3JpdHkgaXMgcmV2ZXJzZWQgKyBldmFsdWF0ZWQgZnJvbSByaWdodCB0byBsZWZ0LlxuICAgICAgICAgICAgICAgIGlmKCBwcmlvcml0eSA8PSBjdXIucHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VyLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgICAgIGN1ci5pZHggICAgICA9IGk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IG9wc1t0b2tlbnNbaV0udmFsdWVdO1xuXG4gICAgICAgIC8vIHByaW9yaXR5IGlzIHJldmVyc2VkLlxuICAgICAgICBpZiggcHJpb3JpdHkgPCBjdXIucHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGN1ci5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICAgICAgY3VyLmlkeCAgICAgID0gaTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKCBjdXIuaWR4ID09PSAtMSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCc/Pz8nKTtcblxuICAgIGxldCBvcF90b2tlbiA9IHRva2Vuc1tjdXIuaWR4XTtcbiAgICBpZiggb3BfdG9rZW4udmFsdWUgPT09ICclJyApIHtcbiAgICAgICAgY29uc3QgbGVmdCAgPSB0b2tlbnMuc2xpY2UoMCwgY3VyLmlkeCk7XG4gICAgICAgIGNvbnN0IG9wID0gb3BfaW1wbFtvcF90b2tlbi52YWx1ZSBhcyBrZXlvZiB0eXBlb2Ygb3BfaW1wbF07XG4gICAgICAgIHJldHVybiBuZXcgTm9kZShcbiAgICAgICAgICAgIG9wLFxuICAgICAgICAgICAgdG9rZW5saXN0MlRyZWUobGVmdClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiggb3BfdG9rZW4udmFsdWUgPT09ICd1Li0nIHx8ICBvcF90b2tlbi52YWx1ZSA9PT0gJ3UuKycgKSB7XG5cbiAgICAgICAgY29uc3QgcmlnaHQgID0gdG9rZW5zLnNsaWNlKGN1ci5pZHgrMSk7XG4gICAgICAgIGNvbnN0IG9wID0gb3BfaW1wbFtvcF90b2tlbi52YWx1ZSBhcyBrZXlvZiB0eXBlb2Ygb3BfaW1wbF07XG4gICAgICAgIHJldHVybiBuZXcgTm9kZShcbiAgICAgICAgICAgIG9wLFxuICAgICAgICAgICAgdG9rZW5saXN0MlRyZWUocmlnaHQpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgbGVmdCAgPSB0b2tlbnMuc2xpY2UoMCwgY3VyLmlkeCk7XG4gICAgY29uc3QgcmlnaHQgPSB0b2tlbnMuc2xpY2UoY3VyLmlkeCsxKTtcblxuICAgIGNvbnN0IG9wID0gb3BfaW1wbFtvcF90b2tlbi52YWx1ZSBhcyBrZXlvZiB0eXBlb2Ygb3BfaW1wbF07XG5cbiAgICByZXR1cm4gbmV3IE5vZGUoXG4gICAgICAgIG9wLFxuICAgICAgICB0b2tlbmxpc3QyVHJlZShsZWZ0KSxcbiAgICAgICAgdG9rZW5saXN0MlRyZWUocmlnaHQpXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlX2Zvcm11bGEoc3RyOnN0cmluZykge1xuXG4gICAgbGV0IG9mZnNldCA9IDE7XG4gICAgbGV0IHRva2VucyA9IG5ldyBBcnJheTxUb2tlbj4oKTtcblxuICAgIHdoaWxlKCBvZmZzZXQgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIGxldCBjdXJUb2tlbiA9IGV4dHJhY3RUb2tlbihzdHIsIG9mZnNldCk7XG4gICAgICAgIHRva2Vucy5wdXNoKCBjdXJUb2tlbiApO1xuICAgICAgICBvZmZzZXQgPSBjdXJUb2tlbi5lbmQ7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IHRva2VubGlzdDJUcmVlKHRva2VucykhO1xuXG4gICAgY29uc3QgcmFuZ2VzID0gdG9rZW5zLmZpbHRlcih0ID0+IHQudHlwZSA9PT0gXCJyYW5nZVwiICk7XG5cbiAgICByZXR1cm4gbmV3IEZvcm11bGEoc3RyLCAoc2hlZXQ6IENhbGNTaGVldCkgPT4gbm9kZS5ldmFsKHNoZWV0KSwgcmFuZ2VzICk7XG59IiwiLy9UT0RPOiB3ZWJwYWNrIGNvbmZpZy4uLlxuaW1wb3J0IExJU1MgZnJvbSBcIi4uLy4uLy4uL2xpYnMvTElTU1wiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0LCBDZWxsTGlzdCwgZGVmYXVsdEZvcm1hdCB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbi8vVE9ETzogc3ludGF4IGhpZ2hsaWdodCA7KVxuXG5jb25zdCBjc3MgPSBgXG4gICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYgcHJlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKCAxcmVtICsgOHB4ICsgMnB4ICk7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xpYmVyYXRpb24gU2Fucyc7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5leHBvcnQgY2xhc3MgUGxhZ2VGb3JtdWxhIGV4dGVuZHMgTElTUyh7XG4gICAgY3NzXG59KSB7XG5cbiAgICAjaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoIHRoaXMuI2lucHV0ICk7XG4gICAgICAgIHRoaXMuI2lucHV0LnRvZ2dsZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJyk7XG5cbiAgICAgICAgdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldikgPT4ge1xuICAgICAgICAgICAgaWYoZXYuY29kZSAhPT0gJ0VudGVyJylcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGV2LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLiNzaGVldC5nZXRDZWxscyh0aGlzLiNpbnB1dC50ZXh0Q29udGVudCEpLmNlbGxzO1xuXG4gICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5hZGQoIC4uLnNlbGVjdGVkICk7XG5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LmN1cnNvci5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy4jc2hlZXQuY3Vyc29yLmFkZCggc2VsZWN0ZWRbMF0gKTtcblxuICAgICAgICAgICAgdGhpcy4jaW5wdXQuYmx1cigpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vVE9ETy4uLi5cbiAgICAgICAgdGhpcy4jaW5wdXQudG9nZ2xlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAvKnRoaXMuI2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcblxuICAgICAgICB9KTsqL1xuICAgIH1cblxuICAgICNzaGVldCE6IENhbGNTaGVldDtcblxuICAgIHN5bmNUbyhzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcblxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBzaGVldC5zZWxlY3Rpb247XG5cbiAgICAgICAgc2VsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChfOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gc2VsZWN0aW9uLnBsYWdlX25hbWUgPz8gXCJcIjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5MSVNTLmRlZmluZSgnY2FsYy1wbGFnZScsIFBsYWdlRm9ybXVsYSk7IiwiaW1wb3J0IHsgUmFuZ2VPdmVybGF5IH0gZnJvbSBcIi4vUmFuZ2VPdmVybGF5XCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGwgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5leHBvcnQgY2xhc3MgUGxhZ2VTZWxlY3RvciB7XG5cbiAgICAjb3ZlcmxheXMgPSBuZXcgQXJyYXk8UmFuZ2VPdmVybGF5PigpO1xuICAgICNnZXRPdmVybGF5KGlkOiBudW1iZXIpIHtcbiAgICAgICAgd2hpbGUoaWQgPj0gdGhpcy4jb3ZlcmxheXMubGVuZ3RoKVxuICAgICAgICAgICAgdGhpcy4jb3ZlcmxheXMucHVzaCggbmV3IFJhbmdlT3ZlcmxheSh0aGlzLiNzaGVldCwgXCJzZWxlY3Rpb25faGlnaGxpZ2h0XCIpICk7XG4gICAgICAgIHJldHVybiB0aGlzLiNvdmVybGF5c1tpZF07XG4gICAgfVxuXG4gICAgI3VwZGF0ZVNlbGVjdGlvbigpIHtcblxuICAgICAgICBsZXQgc2VsZWN0ZWRfY2VsbHMgPSB0aGlzLiNzaGVldC5nZXRSYW5nZSggdGhpcy4jb3JpZ19wb3MsIHRoaXMuI2ZpbmFsX3BvcyApLmNlbGxzO1xuXG4gICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5jbGVhcigpOyAvLyB3ZSBhZGQgaXQuLi5cblxuICAgICAgICBpZiggdGhpcy4jaXNDdHJsICkge1xuXG4gICAgICAgICAgICAvLyByZXN0b3JlIGluaXRpYWwgc3RhdGUuLi5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5hZGQoLi4udGhpcy4jcHJldl9zZWxlY3Rpb24pO1xuXG4gICAgICAgICAgICAvL1RPRE8gb25seSBvcmlnX3RhcmdldC4uLlxuICAgICAgICAgICAgaWYodGhpcy4jc2hlZXQuc2VsZWN0aW9uLmhhcyggLi4uc2VsZWN0ZWRfY2VsbHMgKSApXG4gICAgICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLnJlbW92ZSggLi4uc2VsZWN0ZWRfY2VsbHMgKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uYWRkKCAuLi5zZWxlY3RlZF9jZWxscyApO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uYWRkKCAuLi5zZWxlY3RlZF9jZWxscyApO1xuXG4gICAgfVxuXG4gICAgI3VwZGF0ZVNlbGVjdGlvbkhpZ2hsaWdodCgpIHtcblxuICAgICAgICBjb25zdCBjZWxscyA9IHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5jZWxscztcbiAgICAgICAgZm9yKGxldCBvdmVybGF5IG9mIHRoaXMuI292ZXJsYXlzKVxuICAgICAgICAgICAgb3ZlcmxheS5zZXRSYW5nZShudWxsKTtcblxuICAgICAgICBpZiggY2VsbHMubGVuZ3RoID09PSAxICYmIHRoaXMuI3NoZWV0LmN1cnNvci5maXJzdENlbGwgPT09IGNlbGxzWzBdIClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICB0aGlzLiNnZXRPdmVybGF5KGkpLnNldFJhbmdlKCB0aGlzLiNzaGVldC5nZXRSYW5nZSggY2VsbHNbaV0gKSApO1xuICAgIH1cblxuICAgICNpc0N0cmwgICAgICAgICE6IGJvb2xlYW47XG4gICAgI3NoZWV0ICAgICAgICAgIDogQ2FsY1NoZWV0O1xuICAgICNvcmlnX3RhcmdldCAgICE6IEhUTUxFbGVtZW50O1xuICAgICNvcmlnX3BvcyAgICAgICE6IFtudW1iZXIsIG51bWJlcl07XG4gICAgI2ZpbmFsX3BvcyAgICAgITogW251bWJlciwgbnVtYmVyXTtcbiAgICAjcHJldl9zZWxlY3Rpb24hOiBDZWxsW107XG5cbiAgICAjZXYycG9zKGV2OiBNb3VzZUV2ZW50KTogW251bWJlcixudW1iZXJdIHtcblxuICAgICAgICBjb25zdCBjb2xzID0gWy4uLnRoaXMuI3NoZWV0LnRib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuXTtcbiAgICAgICAgbGV0IGNvbF9pZDtcbiAgICAgICAgZm9yKGNvbF9pZCA9IGNvbHMubGVuZ3RoLTE7IGNvbF9pZCA+PSAwOyAtLWNvbF9pZCkge1xuICAgICAgICAgICAgaWYoIGV2LmNsaWVudFggPj0gY29sc1tjb2xfaWRdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnggKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCByb3dzID0gWy4uLnRoaXMuI3NoZWV0LnRib2R5LmNoaWxkcmVuXS5tYXAoIGUgPT4gZS5jaGlsZHJlblswXSApO1xuICAgICAgICBsZXQgcm93X2lkO1xuICAgICAgICBmb3Iocm93X2lkID0gcm93cy5sZW5ndGgtMTsgcm93X2lkID49IDA7IC0tcm93X2lkKSB7XG4gICAgICAgICAgICBpZiggZXYuY2xpZW50WSA+PSByb3dzW3Jvd19pZF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSApXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW3Jvd19pZCwgY29sX2lkXTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcblxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpITtcblxuICAgICAgICBjb25zdCBvbl9tb3VzZV9tb3ZlID0gKGV2OiBNb3VzZUV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuI2ZpbmFsX3BvcyA9IHRoaXMuI2V2MnBvcyhldik7XG5cbiAgICAgICAgICAgIHRoaXMuI3VwZGF0ZVNlbGVjdGlvbigpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHNoZWV0LmN1cnNvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24ucmVwbGFjZUFsbCggc2hlZXQuZ2V0VmlzaWJsZUNlbGwoc2hlZXQuY3Vyc29yKSApO1xuICAgICAgICB9KTtcblxuICAgICAgICBzaGVldC5zZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jdXBkYXRlU2VsZWN0aW9uSGlnaGxpZ2h0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgc2hlZXQuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldjpNb3VzZUV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIGlmKCBzaGVldC5zdGF0ZXMuY2VsbF9lZGl0LnN0YXRlID09PSB0YXJnZXQgKSAgLy8gYSBjZWxsIGJlaW5nIGVkaXRlZC5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiggISBbXCJUSFwiLCBcIlREXCJdLmluY2x1ZGVzKCB0YXJnZXQudGFnTmFtZSApICkvLyAuLi5cbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSA9PT0gXCJUSFwiICYmIHRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJcIiApIHsgLy8gbW91c2Vtb3ZlIGRvZXMgbm90aGluZy5cblxuICAgICAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5jbGVhcigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZiA9IGBBMToke3RoaXMuI3NoZWV0LnBvczJyZWYodGhpcy4jc2hlZXQubmJSb3dzLCB0aGlzLiNzaGVldC5uYkNvbHMpfWA7XG4gICAgICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmFkZCggLi4udGhpcy4jc2hlZXQuZ2V0Q2VsbHMocmVmKS5jZWxscyApO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiNpc0N0cmwgICAgICAgICA9IGV2LmN0cmxLZXk7XG4gICAgICAgICAgICB0aGlzLiNvcmlnX3RhcmdldCAgICA9IHRhcmdldDtcbiAgICAgICAgICAgIHRoaXMuI29yaWdfcG9zICAgICAgID0gdGhpcy4jZXYycG9zKGV2KTsgLy8gQ2FuIGJlIFRILi4uXG4gICAgICAgICAgICB0aGlzLiNmaW5hbF9wb3MgICAgICA9IHRoaXMuI29yaWdfcG9zO1xuICAgICAgICAgICAgdGhpcy4jcHJldl9zZWxlY3Rpb24gPSBzaGVldC5zZWxlY3Rpb24uY2VsbHMuc2xpY2UoKTtcblxuICAgICAgICAgICAgdGhpcy4jdXBkYXRlU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uX21vdXNlX21vdmUpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1haW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25fbW91c2VfbW92ZSk7XG4gICAgICAgICAgICB9LCB7b25jZTogdHJ1ZX0pO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCIvL1RPRE86IHdlYnBhY2sgY29uZmlnLi4uXG5pbXBvcnQgTElTUyBmcm9tIFwiLi4vLi4vLi4vbGlicy9MSVNTXCI7XG5cbi8vQHRzLWlnbm9yZVxuaW1wb3J0IGNzcyBmcm9tIFwiISFyYXctbG9hZGVyIS4vaW5kZXguY3NzXCI7XG5cbmV4cG9ydCB0eXBlIFZhbHVlVHlwZSA9IHN0cmluZ3xudW1iZXJ8RGF0ZXxib29sZWFuO1xuZXhwb3J0IHR5cGUgUmF3Q29udGVudFR5cGUgPSBWYWx1ZVR5cGV8Rm9ybXVsYTtcblxuZXhwb3J0IHR5cGUgQ2VsbCA9IEhUTUxUYWJsZUNlbGxFbGVtZW50ICYge1xuICAgIHJhd0NvbnRlbnQ6IFJhd0NvbnRlbnRUeXBlLFxuICAgIGZvcm1hdDogKHRoaXM6IENlbGwsIHY/OiBudW1iZXJ8c3RyaW5nfERhdGUpID0+IHN0cmluZyxcbiAgICBpc19ybzogYm9vbGVhbixcbiAgICBjZWxsID86IENlbGxcbn07XG5cbmZ1bmN0aW9uIGlzQWN0aXZlKHRhcmdldDogSFRNTEVsZW1lbnQpIHtcblxuICAgIHJldHVybiB0YXJnZXQubWF0Y2hlcygnOmZvY3VzJyk7XG4vKlxuICAgIGxldCBhY3RpdmUgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgd2hpbGUoIGFjdGl2ZT8uc2hhZG93Um9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgKVxuICAgICAgICBhY3RpdmUgPSBhY3RpdmUuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50O1xuXG4gICAgcmV0dXJuIGFjdGl2ZSA9PT0gdGFyZ2V0OyovXG59XG5cbmZ1bmN0aW9uIG9uSW5wdXQoZXY6IEV2ZW50KSB7XG5cbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMTIzNDc0MS9wbGFjZS1jYXJldC1iYWNrLXdoZXJlLWl0LXdhcy1hZnRlci1jaGFuZ2luZy1pbm5lcmh0bWwtb2YtYS1jb250ZW50ZWRpdGFibGUtZWxlbVxuXG4gICAgbGV0IHJyYW5nZSA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSEuZ2V0UmFuZ2VBdCgwKTtcbiAgICBsZXQgYyA9IHJyYW5nZS5zdGFydE9mZnNldDtcblxuICAgIC8vbGV0IHRleHQgPSBcIlwiO1xuICAgIGxldCBsZW5ndGggPSAwO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXJnZXQuY2hpbGROb2Rlcy5sZW5ndGg7ICsraSkge1xuXG4gICAgICAgIGxldCBjaGlsZCA9IHRhcmdldC5jaGlsZE5vZGVzW2ldO1xuICAgICAgICBpZiggY2hpbGQubm9kZVR5cGUgIT09IE5vZGUuVEVYVF9OT0RFKVxuICAgICAgICAgICAgY2hpbGQgPSBjaGlsZC5jaGlsZE5vZGVzWzBdO1xuXG4gICAgICAgIGlmKCBycmFuZ2Uuc3RhcnRDb250YWluZXIgPT09IGNoaWxkICkge1xuICAgICAgICAgICAgLy90ZXh0ICs9IHAuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudCEuc2xpY2UoMCwgYyk7XG4gICAgICAgICAgICBsZW5ndGggKz0gYztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vdGV4dCArPSBwLmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQ7XG4gICAgICAgIGxlbmd0aCArPSB0YXJnZXQuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudCEubGVuZ3RoO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBpbm5lckhUTUxcbiAgICB0YXJnZXQudGV4dENvbnRlbnQgPSB0YXJnZXQudGV4dENvbnRlbnQ7XG5cbiAgICBsZXQgY2hpbGQhOiBDaGlsZE5vZGU7XG4gICAgbGV0IGk7XG4gICAgZm9yKGkgPSAwOyBpIDwgdGFyZ2V0LmNoaWxkTm9kZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYoIGxlbmd0aCA8PSB0YXJnZXQuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudCEubGVuZ3RoICkge1xuICAgICAgICAgICAgY2hpbGQgPSB0YXJnZXQuY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGxlbmd0aCAtPSB0YXJnZXQuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudCEubGVuZ3RoO1xuICAgIH1cblxuICAgIGlmKCBjaGlsZC5ub2RlVHlwZSAhPT0gTm9kZS5URVhUX05PREUpXG4gICAgICAgIGNoaWxkID0gY2hpbGQuY2hpbGROb2Rlc1swXTtcblxuICAgIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgdmFyIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSE7XG5cbiAgICByYW5nZS5zZXRTdGFydChjaGlsZCwgbGVuZ3RoKTtcbiAgICByYW5nZS5jb2xsYXBzZSh0cnVlKTtcbiAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgc2VsLmFkZFJhbmdlKHJhbmdlKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VJbnB1dCggc3RyOiBzdHJpbmcgKTogUmF3Q29udGVudFR5cGUge1xuXG4gICAgaWYoc3RyID09PSAnVlJBSScpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIGlmKHN0ciA9PT0gJ0ZBVVgnKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBpZihzdHIudHJpbSgpID09PSAnJylcbiAgICAgICAgcmV0dXJuIHN0cjtcblxuICAgIGlmKHN0clswXSA9PT0gXCI9XCIpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlX2Zvcm11bGEoc3RyKTtcbiAgICB9XG5cbiAgICBsZXQgdGVzdF9udW1iZXIgPSBOdW1iZXIoIHN0ci5yZXBsYWNlKCcsJywgJy4nKS5yZXBsYWNlQWxsKCdcXHhBMCcsICcnKSApO1xuICAgIGlmKCAhIE51bWJlci5pc05hTiggdGVzdF9udW1iZXIgKSApXG4gICAgICAgIHJldHVybiB0ZXN0X251bWJlcjtcbiAgICBpZiggc3RyW3N0ci5sZW5ndGgtMV0gPT09IFwiJVwiIHx8IHN0cltzdHIubGVuZ3RoLTFdID09PSBcIuKCrFwiICkge1xuICAgICAgICB0ZXN0X251bWJlciA9IE51bWJlciggc3RyLnNsaWNlKDAsLTEpLnJlcGxhY2VBbGwoJ1xceEEwJywgJycpLnJlcGxhY2UoJywnLCAnLicpICk7XG4gICAgICAgIGlmKCAhIE51bWJlci5pc05hTiggdGVzdF9udW1iZXIgKSApIHtcbiAgICAgICAgICAgIGlmKCBzdHJbc3RyLmxlbmd0aC0xXSA9PT0gXCLigqxcIiApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlc3RfbnVtYmVyO1xuICAgICAgICAgICAgcmV0dXJuICsodGVzdF9udW1iZXIgLyAxMDApLnRvUHJlY2lzaW9uKDcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFydHMgPSBzdHIuc3BsaXQoJy8nKTtcbiAgICBpZihwYXJ0cy5sZW5ndGggPD0gMykge1xuXG4gICAgICAgIGxldCB0ZXN0X2RhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgICtwYXJ0c1syXSA/PyBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICArcGFydHNbMV0tMSxcbiAgICAgICAgICAgICtwYXJ0c1swXVxuICAgICAgICApO1xuXG4gICAgICAgIGlmKCB0ZXN0X2RhdGUudG9TdHJpbmcoKSAhPT0gXCJJbnZhbGlkIERhdGVcIiApXG4gICAgICAgICAgICByZXR1cm4gdGVzdF9kYXRlO1xuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG59XG5cbmNsYXNzIFN0YXRlPFQ+IHtcblxuICAgICNzdGF0ZSA6IFR8bnVsbCA9IG51bGw7XG4gICAgI3RhcmdldDogRXZlbnRUYXJnZXQ7XG4gICAgI25hbWUgIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IodGFyZ2V0OiBFdmVudFRhcmdldCwgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuI3RhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy4jbmFtZSAgID0gbmFtZTtcbiAgICB9XG5cbiAgICBnZXQgc3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzdGF0ZTtcbiAgICB9XG5cbiAgICBzZXQgc3RhdGUoc3RhdGU6IFR8bnVsbCkge1xuXG4gICAgICAgIGlmKCB0aGlzLiNzdGF0ZSA9PT0gc3RhdGUpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgbGV0IHByZXZfc3RhdGUgPSB0aGlzLiNzdGF0ZTtcbiAgICAgICAgdGhpcy4jc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgXG5cbiAgICAgICAgaWYoIHByZXZfc3RhdGUgIT09IG51bGwpXG4gICAgICAgICAgICB0aGlzLiN0YXJnZXQuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KGAke3RoaXMuI25hbWV9X2VuZGAsIHtkZXRhaWw6IHByZXZfc3RhdGV9KSApOyAgICAgICAgICAgIFxuXG4gICAgICAgIGlmKCBzdGF0ZSAhPT0gbnVsbCApXG4gICAgICAgICAgICB0aGlzLiN0YXJnZXQuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KGAke3RoaXMuICNuYW1lfV9zdGFydGAsIHtkZXRhaWw6IHN0YXRlfSkgKTtcbiAgICB9XG59XG5cbmNvbnN0IFN0YXRlcyA9IHtcbiAgICBcImNlbGxfZWRpdFwiOiBTdGF0ZTxDZWxsPixcbiAgICBcInJlY29weVwiICAgOiBTdGF0ZTxDZWxsTGlzdD5cbiB9IGFzIGNvbnN0O1xuXG5leHBvcnQgY2xhc3MgQ2FsY1NoZWV0IGV4dGVuZHMgTElTUyh7XG4gICAgY3NzLFxuICAgIGF0dHJpYnV0ZXM6IFtcImNvbHNcIiwgXCJyb3dzXCIsIFwicm9cIl1cbn0pIHtcblxuICAgIHN0YXRlcyA9IE9iamVjdC5mcm9tRW50cmllcyggT2JqZWN0LmVudHJpZXMoU3RhdGVzKS5tYXAoIChbbixzXSkgPT4gW24sIG5ldyBzKHRoaXMuaG9zdCwgbildIGFzIGNvbnN0ICkpO1xuXG5cbiAgICAvL1RPRE86IFJPIHByb3AgP1xuICAgICNjdXJzb3IgICAgPSBuZXcgQ2VsbExpc3QodGhpcywgW10pO1xuICAgICNzZWxlY3Rpb246IENlbGxMaXN0ID0gbmV3IENlbGxMaXN0KHRoaXMsIFtdKTtcbiAgICAjcGxhZ2Vfc2VsZWN0b3IgPSBuZXcgUGxhZ2VTZWxlY3Rvcih0aGlzKTtcblxuICAgICNmb3JtYXRfbW5nciA9IG5ldyBGb3JtYXRNYW5hZ2VyKHRoaXMpO1xuXG4gICAgc3RhdGljIGdldFNoZWV0RnJvbUNlbGwoY2VsbDogQ2VsbCkge1xuICAgICAgICByZXR1cm4gTElTUy5nZXRMSVNTU3luYzxDYWxjU2hlZXQ+KCAoY2VsbC5nZXRSb290Tm9kZSgpIGFzIFNoYWRvd1Jvb3QpLmhvc3QgKTtcbiAgICB9XG5cbiAgICBnZXQgY3Vyc29yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY3Vyc29yO1xuICAgIH1cbiAgICBnZXQgc2VsZWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jc2VsZWN0aW9uO1xuICAgIH1cblxuICAgIG92ZXJyaWRlIGdldCBjb250ZW50KCkge1xuICAgICAgICByZXR1cm4gc3VwZXIuY29udGVudDtcbiAgICB9XG5cbiAgICBzZXRSZWN0KHRhcmdldDogSFRNTEVsZW1lbnQsIFt4LHksdyxoXTogcmVhZG9ubHkgW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0pIHtcblxuICAgICAgICBjb25zdCB0Ymxfb2Zmc2V0ID0gdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJykhLm9mZnNldFRvcDtcblxuICAgICAgICB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcgICAsIGAke3RibF9vZmZzZXQgKyB5fXB4YCk7XG4gICAgICAgIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eSgnaGVpZ2h0JywgYCR7aH1weGApO1xuXG4gICAgICAgIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eSgnbGVmdCcgICAsIGAke3h9cHhgKTtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KCd3aWR0aCcsIGAke3d9cHhgKTtcblxuICAgIH1cblxuICAgIGdldFJlY3QoY2VsbHM6IENlbGxMaXN0fENlbGxbXSkge1xuXG4gICAgICAgIGNlbGxzID0gXCJjZWxsc1wiIGluIGNlbGxzID8gY2VsbHMuY2VsbHMgOiBjZWxscztcblxuICAgICAgICBjb25zdCBzdGFydCA9IGNlbGxzWzBdO1xuICAgICAgICBjb25zdCBlbmQgICA9IGNlbGxzW2NlbGxzLmxlbmd0aC0xXTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBzdGFydC5vZmZzZXRMZWZ0LFxuICAgICAgICAgICAgc3RhcnQub2Zmc2V0VG9wLFxuICAgICAgICAgICAgZW5kLm9mZnNldExlZnQgKyBlbmQuY2xpZW50V2lkdGggLSBzdGFydC5vZmZzZXRMZWZ0ICsgMSxcbiAgICAgICAgICAgIGVuZC5vZmZzZXRUb3AgKyBlbmQuY2xpZW50SGVpZ2h0IC0gc3RhcnQub2Zmc2V0VG9wICsgMVxuICAgICAgICBdIGFzIGNvbnN0O1xuICAgIH1cblxuICAgIHJlbGF0aXZlVG8oY2VsbDogQ2VsbCwgcm93X2RpZmY6IG51bWJlciwgY29sX2RpZmY6IG51bWJlcikge1xuICAgICAgICBcbiAgICAgICAgbGV0IFtyb3csIGNvbF0gPSB0aGlzLmNlbGxQb3MoY2VsbCk7XG5cbiAgICAgICAgcm93ICs9IHJvd19kaWZmO1xuICAgICAgICBjb2wgKz0gY29sX2RpZmY7XG5cbiAgICAgICAgLy8gZm9yIG5vcm1hbCA6IGdldCBzdHVjayBpbnNpZGUgZ3JpZC5cbiAgICAgICAgaWYoIHJvdyA8IDEpXG4gICAgICAgICAgICByb3cgPSAxO1xuICAgICAgICBpZiggcm93ID49IHRoaXMuI3Rib2R5LmNoaWxkcmVuLmxlbmd0aCApXG4gICAgICAgICAgICByb3cgPSB0aGlzLiN0Ym9keS5jaGlsZHJlbi5sZW5ndGggLSAxO1xuXG4gICAgICAgIGlmKCBjb2wgPCAxKVxuICAgICAgICAgICAgY29sID0gMTtcbiAgICAgICAgaWYoIGNvbCA+PSB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuLmxlbmd0aCApXG4gICAgICAgICAgICBjb2wgPSB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW5bY29sXSBhcyBDZWxsO1xuICAgIH1cblxuICAgIC8vVE9ETzogMkQuLi5cbiAgICAjcGFzdGViaW46IENlbGxMaXN0IHwgbnVsbCA9IG51bGw7XG5cbiAgICAjZm9ybXVsYV9yZWZzID0gbmV3IEFycmF5PEZvcm11bGFSZWY+KCk7XG4gICAgI2dldEZvcm11bGFSZWYoaTogbnVtYmVyKSB7XG4gICAgICAgIHdoaWxlKCBpID49IHRoaXMuI2Zvcm11bGFfcmVmcy5sZW5ndGgpXG4gICAgICAgICAgICB0aGlzLiNmb3JtdWxhX3JlZnMucHVzaCggbmV3IEZvcm11bGFSZWYodGhpcykgKTtcblxuICAgICAgICByZXR1cm4gdGhpcy4jZm9ybXVsYV9yZWZzW2ldO1xuICAgIH1cbiAgICAjY2xlYXJGb3JtdWxhUmVmcygpIHtcbiAgICAgICAgZm9yKGxldCByZWYgb2YgdGhpcy4jZm9ybXVsYV9yZWZzKVxuICAgICAgICAgICAgcmVmLnNldFJhbmdlKG51bGwpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGNvbnN0IGN1cnNvciA9IG5ldyBSYW5nZU92ZXJsYXkodGhpcywgXCJjdXJzb3JcIik7XG4gICAgICAgIGNvbnN0IHJlY29weSA9IG5ldyBSZWNvcHlIYW5kbGUodGhpcyk7XG4gICAgICAgIGNvbnN0IGNvcHkgICA9IG5ldyBSYW5nZU92ZXJsYXkodGhpcywgXCJjb3B5X2hpZ2hsaWdodFwiKTtcblxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikhO1xuXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdjZWxsX2VkaXRfZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jY2xlYXJGb3JtdWxhUmVmcygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbGFzdF9yZWNvcHlfdGFyZ2V0OiBDZWxsfG51bGwgPSBudWxsO1xuICAgICAgICBsZXQgbGFzdF9yZWNvcHlfZGlyICAgOiBbbnVtYmVyLCBudW1iZXJdfG51bGwgPSBudWxsXG5cbiAgICAgICAgY29uc3Qgb25fcmVjb3B5X21vdmUgPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgbGV0IGNlbGxzID0gKHRoaXMuc3RhdGVzLnJlY29weS5zdGF0ZSBhcyBDZWxsTGlzdCkuY2VsbHM7XG4gICAgICAgICAgICBjb25zdCBzcmMgPSBjZWxsc1tjZWxscy5sZW5ndGgtMV07XG5cbiAgICAgICAgICAgIGxldCBwb3MgPSBzcmMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAgIGxldCBkX3B4ID0gZXYuY2xpZW50WCAtIChwb3MueCArIHBvcy53aWR0aCAvMik7XG4gICAgICAgICAgICBsZXQgZF9weSA9IGV2LmNsaWVudFkgLSAocG9zLnkgKyBwb3MuaGVpZ2h0LzIpO1xuXG4gICAgICAgICAgICBsZXQgZF94ID0gMDtcbiAgICAgICAgICAgIGxldCBkX3kgPSBNYXRoLnNpZ24oZF9weSk7XG5cbiAgICAgICAgICAgIGlmKCBNYXRoLmFicyhkX3B4KSA+IE1hdGguYWJzKGRfcHkpICkge1xuICAgICAgICAgICAgICAgIGRfeCA9IE1hdGguc2lnbihkX3B4KTtcbiAgICAgICAgICAgICAgICBkX3kgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcHJldiA9IHNyYztcbiAgICAgICAgICAgIGxldCBjdXIgID0gc3JjO1xuXG4gICAgICAgICAgICBsZXQgZGlmZl94LCBkaWZmX3k7XG5cbiAgICAgICAgICAgIGRvIHtcblxuICAgICAgICAgICAgICAgIHByZXY9IGN1cjtcbiAgICAgICAgICAgICAgICBjdXIgPSB0aGlzLnJlbGF0aXZlVG8ocHJldiwgZF95LCBkX3gpO1xuXG4gICAgICAgICAgICAgICAgaWYoIGN1ciA9PT0gcHJldilcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBsZXQgcG9zX2N1ciA9IGN1ci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICBkaWZmX3ggPSBldi5jbGllbnRYIC0gKHBvc19jdXIueCArIHBvc19jdXIud2lkdGggLzIpO1xuICAgICAgICAgICAgICAgIGRpZmZfeSA9IGV2LmNsaWVudFkgLSAocG9zX2N1ci55ICsgcG9zX2N1ci5oZWlnaHQvMik7XG5cbiAgICAgICAgICAgIH0gd2hpbGUoIGRpZmZfeCAqIGRfeCArIGRpZmZfeSAqIGRfeSA+IDAgKTtcblxuICAgICAgICAgICAgbGFzdF9yZWNvcHlfdGFyZ2V0ID0gcHJldjtcbiAgICAgICAgICAgIGxhc3RfcmVjb3B5X2RpciAgICA9IFtkX3gsZF95XTtcblxuICAgICAgICAgICAgbGV0IGJlZyA9IHNyYztcbiAgICAgICAgICAgIGxldCBlbmQgPSBwcmV2O1xuICAgICAgICAgICAgaWYoIHNyYy5vZmZzZXRMZWZ0ID4gcHJldi5vZmZzZXRMZWZ0IHx8IHNyYy5vZmZzZXRUb3AgPiBwcmV2Lm9mZnNldFRvcCApXG4gICAgICAgICAgICAgICAgW2JlZywgZW5kXSA9IFtlbmQsIGJlZ107XG5cbiAgICAgICAgICAgIC8vVE9ETzogaGlnaGxpZ2h0Li4uXG4gICAgICAgICAgICB0aGlzLiNjbGVhckZvcm11bGFSZWZzKCk7XG4gICAgICAgICAgICB0aGlzLiNnZXRGb3JtdWxhUmVmKDEpLnNldFJhbmdlKCB0aGlzLmdldFJhbmdlKGJlZywgZW5kKSApO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlY29weS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldikgPT4ge1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdGhpcy5zdGF0ZXMucmVjb3B5LnN0YXRlID0gdGhpcy4jc2VsZWN0aW9uO1xuXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25fcmVjb3B5X21vdmUpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IFtkX3gsIGRfeV0gPSAgbGFzdF9yZWNvcHlfZGlyITtcblxuICAgICAgICAgICAgICAgIGxldCBjZWxscyA9ICh0aGlzLnN0YXRlcy5yZWNvcHkuc3RhdGUgYXMgQ2VsbExpc3QpLmNlbGxzO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IGNlbGxzW2NlbGxzLmxlbmd0aC0xXTtcblxuICAgICAgICAgICAgICAgIGxldCBuYiA9IDA7XG5cbiAgICAgICAgICAgICAgICBpZiggbGFzdF9yZWNvcHlfdGFyZ2V0ICE9PSBzcmMpIHsgLy8gY29weS4uLlxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXIgPSBzcmM7XG4gICAgICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICsrbmI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ciA9IHRoaXMucmVsYXRpdmVUbyhjdXIsIGRfeSwgZF94KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQ6IFJhd0NvbnRlbnRUeXBlfENlbGwgPSBzcmM7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggdHlwZW9mIGNvbnRlbnQucmF3Q29udGVudCA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gKHNyYy5yYXdDb250ZW50IGFzIG51bWJlcikgKyBuYiooZF94ICsgZF95KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoIGNvbnRlbnQucmF3Q29udGVudCBpbnN0YW5jZW9mIERhdGUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IG5ldyBEYXRlKHNyYy5yYXdDb250ZW50IGFzIERhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuc2V0RGF0ZSggY29udGVudC5nZXREYXRlKCkgKyBuYiooZF94ICsgZF95KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDZWxsTGlzdCh0aGlzLCBbY3VyXSkuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXIuY2xhc3NOYW1lID0gc3JjLmNsYXNzTmFtZTsgLy9UT0RPOiBmb3JtYXQuLi5cblxuXG4gICAgICAgICAgICAgICAgICAgIH0gd2hpbGUoIGN1ciE9PSBsYXN0X3JlY29weV90YXJnZXQgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLiNjbGVhckZvcm11bGFSZWZzKCk7IC8vIHJlY29weVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVzLnJlY29weS5zdGF0ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGFzdF9yZWNvcHlfdGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBsYXN0X3JlY29weV9kaXIgICAgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIG1haW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbl9yZWNvcHlfbW92ZSk7XG5cbiAgICAgICAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdyZWNvcHlfc3RhcnQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgncmVjb3B5Jyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcigncmVjb3B5X2VuZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QucmVtb3ZlKCdyZWNvcHknKTtcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLiNjdXJzb3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGlmKCB0aGlzLiNjdXJzb3IubGVuZ3RoICE9PSAxIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1cnNvciBoYXMgaW52YWxpZCBudW1iZXIgb2YgY2VsbHMnKTtcblxuICAgICAgICAgICAgY3Vyc29yLnNldFJhbmdlKCBuZXcgQ2VsbExpc3QodGhpcywgW3RoaXMuZ2V0VmlzaWJsZUNlbGwodGhpcy4jY3Vyc29yKV0pICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI3NlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXYpID0+IHtcblxuICAgICAgICAgICAgZm9yKCBsZXQgY2VsbCBvZiB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZ2hsaWdodCcpIClcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpO1xuXG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IHRoaXMuI3NlbGVjdGlvbi5jZWxscztcblxuICAgICAgICAgICAgaWYoIGNlbGxzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGZvciggbGV0IGNlbGwgb2YgY2VsbHMgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggY2VsbHMubGVuZ3RoICE9PSAxKVxuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSB0aGlzLiNjZWxsUG9zKGNlbGwpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3Rib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuW2NvbF0uY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlY29weS5zZXRSYW5nZSh0aGlzLiNzZWxlY3Rpb24pO1xuXG4gICAgICAgICAgICAvLyBvbmx5IGlmIHNpbXBsZS4uLlxuICAgICAgICAgICAgLy8gY29uc3QgbGFzdCA9IGNlbGxzW2NlbGxzLmxlbmd0aC0xXTtcbiAgICAgICAgICAgIC8vIHBvaW50ZXIuLi5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9UT0RPOiBtb3ZlIG91dCA/XG4gICAgICAgIGNvbnN0IGZvcm11bGFfYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm11bGFfYmFyLmNsYXNzTGlzdC5hZGQoJ3Rvb2xiYXInKTtcblxuICAgICAgICAoIGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgcGxhZ2UgPSBhd2FpdCBMSVNTLmJ1aWxkKFwiY2FsYy1wbGFnZVwiKTtcbiAgICAgICAgICAgIHBsYWdlLnN5bmNUbyh0aGlzKTtcbiAgICAgICAgICAgIGZvcm11bGFfYmFyLmFwcGVuZCggcGxhZ2UuaG9zdCApO1xuXG4gICAgICAgICAgICBjb25zdCBmb3JtdWxhID0gYXdhaXQgTElTUy5idWlsZChcImNhbGMtZm9ybXVsYVwiKTtcbiAgICAgICAgICAgIGZvcm11bGEuc3luY1RvKHRoaXMpO1xuICAgICAgICAgICAgZm9ybXVsYV9iYXIuYXBwZW5kKCBmb3JtdWxhLmhvc3QgKTtcblxuICAgICAgICB9KSgpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKGZvcm11bGFfYmFyKTtcblxuICAgICAgICB0aGlzLiNpbml0R3JpZCgrKHRoaXMuYXR0cnMucm93cyA/PyAxKSwgKyh0aGlzLmF0dHJzLmNvbHMgPz8gMSkgKTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXYpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgICAgICAvLyB0aGUgY2VsbCBpcyBiZWluZyBlZGl0ZWQuLi5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQuaGFzQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKSApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgPT09IFwiVERcIiApXG4gICAgICAgICAgICAgICAgdGhpcy4jY3Vyc29yLnJlcGxhY2VBbGwoIHRhcmdldCBhcyBDZWxsICk7XG5cbiAgICAgICAgICAgIC8vVE9ETzogbm90IGNvcnJlY3QuLi5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSA9PT0gXCJUSFwiICYmIHRhcmdldC50ZXh0Q29udGVudCAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdldFJhbmdlKHRhcmdldC50ZXh0Q29udGVudCEpLmZpcnN0Q2VsbDtcblxuICAgICAgICAgICAgICAgIHRoaXMuI2N1cnNvci5yZXBsYWNlQWxsKGNlbGwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSAhPT0gXCJURFwiKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgaWYoIHRoaXMuYXR0cnMucm8gIT09IFwidHJ1ZVwiICYmICh0YXJnZXQgYXMgQ2VsbCkuaXNfcm8gIT09IHRydWUgKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnRvZ2dsZUF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldjogS2V5Ym9hcmRFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICBpZiggZXYuY29kZS5zdGFydHNXaXRoKCdBcnJvdycpICkge1xuXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGN1ciA9IHRoaXMuY3Vyc29yLmNlbGxzO1xuICAgICAgICAgICAgICAgIGlmKCBjdXIubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBsZXQgZF9yb3cgPSAwO1xuICAgICAgICAgICAgICAgIGxldCBkX2NvbCA9IDA7XG5cbiAgICAgICAgICAgICAgICBpZiggZXYuY29kZSA9PT0gJ0Fycm93TGVmdCcpXG4gICAgICAgICAgICAgICAgICAgIC0tZF9jb2w7XG4gICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09ICdBcnJvd1JpZ2h0JylcbiAgICAgICAgICAgICAgICAgICAgKytkX2NvbDtcbiAgICAgICAgICAgICAgICBpZiggZXYuY29kZSA9PT0gJ0Fycm93VXAnKVxuICAgICAgICAgICAgICAgICAgICAtLWRfcm93O1xuICAgICAgICAgICAgICAgIGlmKCBldi5jb2RlID09PSAnQXJyb3dEb3duJylcbiAgICAgICAgICAgICAgICAgICAgKytkX3JvdztcblxuICAgICAgICAgICAgICAgIGxldCBuZXh0OiBDZWxsO1xuICAgICAgICAgICAgICAgIGlmKCBldi5jdHJsS2V5ICkge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmV2ICAgPSBjdXJbMF07XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJzb3IgPSB0aGlzLnJlbGF0aXZlVG8ocHJldiwgZF9yb3csIGRfY29sKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiggcHJldi5yYXdDb250ZW50ICE9PSB1bmRlZmluZWQgJiYgY3Vyc29yLnJhd0NvbnRlbnQgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSggcHJldiAhPT0gY3Vyc29yICYmIGN1cnNvci5yYXdDb250ZW50ICE9PSB1bmRlZmluZWQpIHsgLy8gd2UgcmVhY2hlZCB0aGUgZW5kLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXYgICA9IGN1cnNvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSB0aGlzLnJlbGF0aXZlVG8ocHJldiwgZF9yb3csIGRfY29sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvciA9IHByZXY7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSggcHJldiAhPT0gY3Vyc29yICYmIGN1cnNvci5yYXdDb250ZW50ID09PSB1bmRlZmluZWQpIHsgLy8gd2UgcmVhY2hlZCB0aGUgZW5kLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXYgICA9IGN1cnNvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSB0aGlzLnJlbGF0aXZlVG8ocHJldiwgZF9yb3csIGRfY29sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG5leHQgPSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICAgIG5leHQgPSB0aGlzLnJlbGF0aXZlVG8oIGN1clswXSwgZF9yb3csIGRfY29sKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLiN0Ym9keS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3Vyc29yLnJlcGxhY2VBbGwobmV4dCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG5vIGVkaXRpb24gYWxsb3dlZC4uLlxuICAgICAgICAgICAgaWYoIHRoaXMuYXR0cnMucm8gPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiggdGFyZ2V0ID09PSB0aGlzLiN0Ym9keSApIHtcbiAgICAgICAgICAgICAgICBpZiggZXYuY29kZSA9PT0gXCJLZXlWXCIgJiYgZXYuY3RybEtleSAmJiB0aGlzLiNwYXN0ZWJpbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy4jcGFzdGViaW4uY2VsbHM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3NlbGVjdGlvbi5jb250ZW50ID0gZGF0YTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjb3B5IGZvcm1hdC4uLiBUT0RPIHV0aWxpdHkgdGhpbmd5Li4uXG4gICAgICAgICAgICAgICAgICAgIGlmKCAhIGV2LnNoaWZ0S2V5IHx8ICEgZXYuYWx0S2V5ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3JjID0gdGhpcy4jcGFzdGViaW4uY2VsbHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkc3QgPSB0aGlzLiNzZWxlY3Rpb24uY2VsbHM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyArK2kgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHN0W2ldLmNsYXNzTmFtZSA9IHNyY1tpXS5jbGFzc05hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiBhZGQgZm9ybWF0Li4uXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoICggZXYua2V5ID09PSBcImNcIiB8fCBldi5rZXkgPT09IFwieFwiKSAmJiBldi5jdHJsS2V5ICkge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvcHkuc2V0UmFuZ2UodGhpcy4jc2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gV0hZID8/P1xuICAgICAgICAgICAgICAgICAgICAvL2guc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcgICAsIGAke3NlbGVjdGlvblswXS5vZmZzZXRUb3B9cHhgKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNwYXN0ZWJpbiA9IHRoaXMuI3NlbGVjdGlvbi5kZWVwQ2xvbmUoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiggZXYua2V5ID09PSBcInhcIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuI3NlbGVjdGlvbi5kZWxldGVGb3JtYXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuI3NlbGVjdGlvbi5kZWxldGVDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gXCJDb250cm9sXCIgfHwgZXYua2V5ID09PSBcIlNoaWZ0XCIgfHwgZXYua2V5ID09PSBcIkFsdFwiICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIGlnbm9yZVxuICAgICAgICAgICAgICAgIH0gaWYoIGV2LmNvZGUgPT09IFwiRGVsZXRlXCIgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uZGVsZXRlQ29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBpZiggZXYuY29kZSA9PT0gXCJFbnRlclwiICkge1xuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGVkIGVsc2V3aGVyZVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihldi5jdHJsS2V5KSB7IC8vIGlnbm9yZSBjdHJsXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7IC8vIHdlIHN0YXJ0IGVkaXRpbmcuLi5cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXIgPSB0aGlzLmN1cnNvci5jZWxscztcblxuICAgICAgICAgICAgICAgICAgICBpZiggY3VyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1clswXS5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJkYmxjbGlja1wiLCB7YnViYmxlczogdHJ1ZX0pICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJbMF0udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIHRhcmdldCAhPT0gdGhpcy4jdGJvZHkgJiYgZXYuY29kZSA9PT0gJ0VudGVyJyAmJiBldi5zaGlmdEtleSApXG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3IuXG5cbiAgICAgICAgICAgIGlmKGV2LmNvZGUgPT09IFwiRW50ZXJcIikgeyAvL1RPRE86IEVudGVyIGlzIGZvciBjdXJyZW50IHBsYWdlLi4uXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGN1ciA9IHRoaXMuY3Vyc29yLmNlbGxzO1xuICAgICAgICAgICAgICAgIGlmKCBjdXIubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBsZXQgW3Jvdyxjb2xdID0gdGhpcy5jZWxsUG9zKCBjdXJbMF0gKTtcblxuICAgICAgICAgICAgICAgICsrcm93O1xuICAgICAgICAgICAgICAgIGlmKCByb3cgPj0gdGhpcy4jdGJvZHkuY2hpbGRyZW4ubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICByb3cgPSAxO1xuICAgICAgICAgICAgICAgICAgICArK2NvbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoIGNvbCA+PSB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICAgICAgY29sID0gMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgbmV4dCA9IHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW5bY29sXSBhcyBDZWxsO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jdGJvZHkuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnNvci5yZXBsYWNlQWxsKG5leHQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgb25JbnB1dDIgPSAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNjbGVhckZvcm11bGFSZWZzKCk7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBpZihldi5kZXRhaWwgIT09IHRydWUpXG4gICAgICAgICAgICAgICAgb25JbnB1dChldik7XG4gICAgICAgIH1cblxuICAgICAgICAvL1RPRE86IGhlcmUuLi5cbiAgICAgICAgdGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCAoZXYpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgICAgICBjb3B5LnNldFJhbmdlKG51bGwpO1xuXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgIT09IFwiVERcIilcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGVzLmNlbGxfZWRpdC5zdGF0ZSA9IHRhcmdldCBhcyBDZWxsO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoXCJjZWxsX2VkaXRfc3RhcnRcIiwgKGV2OiBDdXN0b21FdmVudDxDZWxsPikgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LnRvZ2dsZShcImNlbGxfZWRpdFwiLCB0cnVlKTtcblxuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGV2LmRldGFpbDtcblxuICAgICAgICAgICAgaWYoY2VsbC5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSkge1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyID0gY2VsbC5yYXdDb250ZW50LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZ2VzID0gY2VsbC5yYXdDb250ZW50LnJhbmdlc1Rva2VuO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuOiAoc3RyaW5nfEhUTUxFbGVtZW50KVtdID0gW3N0cl07XG5cbiAgICAgICAgICAgICAgICBsZXQgcmFuZ2VzX2NvbG9yczogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHt9O1xuICAgICAgICAgICAgICAgIGxldCBjdXJfb2Zmc2V0ID0gMDtcblxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByYW5nZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0ciA9IGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aC0xXSBhcyBzdHJpbmc7XG5cbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoLTFdID0gc3RyLnNsaWNlKDAsIHJhbmdlc1tpXS5iZWcgLSBjdXJfb2Zmc2V0KTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5nZV9uYW1lID0gcmFuZ2VzW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiggISAocmFuZ2VfbmFtZSBpbiByYW5nZXNfY29sb3JzKSApXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZXNfY29sb3JzW3JhbmdlX25hbWVdID0gaSU4O1xuXG4gICAgICAgICAgICAgICAgICAgIHMuY2xhc3NMaXN0LmFkZCgnZm9ybXVsYV9oaWdobGlnaHQnLCBgaGlnaGxpZ2h0XyR7cmFuZ2VzX2NvbG9yc1tyYW5nZV9uYW1lXX1gKTsgLy9UT0RPLi4uXG4gICAgICAgICAgICAgICAgICAgIHMudGV4dENvbnRlbnQgPSByYW5nZXNbaV0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goIHMgKTsgLy8gcmFuZ2UuLi5cblxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKCBzdHIuc2xpY2UocmFuZ2VzW2ldLmVuZCAtIGN1cl9vZmZzZXQpICk7XG4gICAgICAgICAgICAgICAgICAgIGN1cl9vZmZzZXQgPSByYW5nZXNbaV0uZW5kO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNlbGwucmVwbGFjZUNoaWxkcmVuKCAuLi5jaGlsZHJlbiApO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZ2VzX25hbWVzID0gT2JqZWN0LmtleXMocmFuZ2VzX2NvbG9ycyk7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHJhbmdlc19uYW1lcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5nZSA9IHJhbmdlc19uYW1lc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVmID0gdGhpcy4jZ2V0Rm9ybXVsYVJlZihpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVmLnNldENvbG9yKCByYW5nZXNfY29sb3JzW3JhbmdlXSApO1xuICAgICAgICAgICAgICAgICAgICByZWYuc2V0UmFuZ2UoIHRoaXMuZ2V0UmFuZ2UocmFuZ2UpICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBvbklucHV0MiApOyAvLyByZW1vdmUgY29sb3JzLi4uXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBGb3JtYXRzLmRlZmF1bHQuY2FsbChjZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoXCJjZWxsX2VkaXRfZW5kXCIsIChldjogQ3VzdG9tRXZlbnQ8Q2VsbD4pID0+IHtcblxuICAgICAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC50b2dnbGUoXCJjZWxsX2VkaXRcIiwgZmFsc2UpO1xuXG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZXYuZGV0YWlsO1xuXG4gICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBvbklucHV0Mik7IC8vIHRvIGJlIHNhZmVcbiAgICAgICAgICAgIGNlbGwudG9nZ2xlQXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIGZhbHNlKTtcblxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwibGVhdmUgZWRpdFwiLCBjZWxsLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIG5ldyBDZWxsTGlzdCh0aGlzLCBbY2VsbF0pLmNvbnRlbnQgPSBjZWxsLnRleHRDb250ZW50ITtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICAgICAgICAgIC8vIGxlYXZlXG4gICAgICAgICAgICB0aGlzLiNzZWxlY3Rpb24uY2xlYXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBldiA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lICE9PSBcIlREXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPSBudWxsO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiggdGhpcy5uYlJvd3MgPj0gMSAmJiB0aGlzLm5iQ29scyA+PSAxKVxuICAgICAgICAgICAgdGhpcy5jdXJzb3IucmVwbGFjZUFsbCggdGhpcy5nZXRSYW5nZShcIkExXCIpICk7XG4gICAgfVxuXG4gICAgZ2V0VmlzaWJsZUNlbGwoYzogQ2VsbHxDZWxsTGlzdCk6IENlbGwge1xuICAgICAgICBpZihjIGluc3RhbmNlb2YgQ2VsbExpc3QpXG4gICAgICAgICAgICBjID0gYy5maXJzdENlbGw7XG5cbiAgICAgICAgcmV0dXJuIGMuY2VsbCA/PyBjO1xuICAgIH1cblxuICAgIGNlbGxQb3MoY2VsbDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NlbGxQb3MoY2VsbCk7XG4gICAgfVxuXG4gICAgI2NlbGxQb3MoY2VsbDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQpIHtcblxuICAgICAgICBpZiggXCJwb3NcIiBpbiBjZWxsKVxuICAgICAgICAgICAgcmV0dXJuIGNlbGwucG9zIGFzIFtudW1iZXIsIG51bWJlcl07XG5cbiAgICAgICAgY29uc3QgY29sID0gWy4uLmNlbGwucGFyZW50RWxlbWVudCEuY2hpbGRyZW5dLmZpbmRJbmRleCggYyA9PiBjID09PSBjZWxsKTtcbiAgICAgICAgY29uc3Qgcm93ID0gWy4uLmNlbGwucGFyZW50RWxlbWVudCEucGFyZW50RWxlbWVudCEuY2hpbGRyZW5dLmZpbmRJbmRleCggciA9PiByID09PSBjZWxsLnBhcmVudEVsZW1lbnQhKTtcblxuICAgICAgICByZXR1cm4gW3JvdywgY29sXSBhcyBjb25zdDtcbiAgICB9XG5cbiAgICAjdGJvZHkhOiBIVE1MVGFibGVTZWN0aW9uRWxlbWVudDtcbiAgICBnZXQgdGJvZHkoKSB7IHJldHVybiB0aGlzLiN0Ym9keTsgfVxuXG4gICAgcmVzaXplKG5icm93czogbnVtYmVyLCBuYmNvbHM6IG51bWJlcikge1xuXG4gICAgICAgIGNvbnN0IGNvbF9odG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgY29sX2h0bWwuYXBwZW5kKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpICk7XG5cbiAgICAgICAgY29uc3QgY29sZ3JvdXAgPSB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvcignY29sZ3JvdXAnKSE7XG4gICAgICAgIGNvbGdyb3VwLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgICAgIGNvbnN0IHRib2R5ID0gdGhpcy4jdGJvZHk7XG4gICAgICAgIHRib2R5LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgICAgIGNvbGdyb3VwLmFwcGVuZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvbFwiKSApO1xuICAgICAgICBcbiAgICAgICAgZm9yKGxldCBjb2wgPSAwOyBjb2wgPCAgbmJjb2xzIDsgKytjb2wpIHtcbiAgICAgICAgICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICAgICAgICAgIHRoLnRleHRDb250ZW50ID0gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGNvbCk7XG4gICAgICAgICAgICBjb2xfaHRtbC5hcHBlbmQodGgpO1xuXG4gICAgICAgICAgICBjb2xncm91cC5hcHBlbmQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb2xcIikgKTtcbiAgICAgICAgfVxuICAgICAgICB0Ym9keS5hcHBlbmQoY29sX2h0bWwpO1xuXG4gICAgICAgIGZvcihsZXQgcm93ID0gMDsgcm93IDwgbmJyb3dzOyArK3Jvdykge1xuICAgICAgICAgICAgY29uc3Qgcm93X2h0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgICAgICAgdGgudGV4dENvbnRlbnQgPSBgJHtyb3crMX1gO1xuICAgICAgICAgICAgcm93X2h0bWwuYXBwZW5kKHRoKTtcblxuICAgICAgICAgICAgZm9yKGxldCBjb2wgPSAwOyBjb2wgPCAgbmJjb2xzIDsgKytjb2wpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKSBhcyBDZWxsO1xuICAgICAgICAgICAgICAgIC8vY2VsbC50b2dnbGVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuICAgICAgICAgICAgICAgIGNlbGwuZm9ybWF0ID0gRm9ybWF0cy5kZWZhdWx0O1xuICAgICAgICAgICAgICAgIHJvd19odG1sLmFwcGVuZCggY2VsbCApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGJvZHkuYXBwZW5kKHJvd19odG1sKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldENvbFNpemUoY29sOiBudW1iZXJ8c3RyaW5nLCBzaXplOiBzdHJpbmcpIHtcbiAgICAgICAgaWYoIHR5cGVvZiBjb2wgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICBjb2wgPSB0aGlzLnJlZjJwb3MoY29sKVsxXTtcblxuICAgICAgICBjb25zdCBodG1sID0gdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ2NvbGdyb3VwJykhLmNoaWxkcmVuW2NvbF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGh0bWwuc3R5bGUuc2V0UHJvcGVydHkoXCJ3aWR0aFwiLCBzaXplKTtcbiAgICAgICAgaHRtbC5zdHlsZS5zZXRQcm9wZXJ0eSgnb3ZlcmZsb3cteCcsICdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICAjaW5pdEdyaWQobmJyb3dzOiBudW1iZXIsIG5iY29sczogbnVtYmVyKSB7XG5cbiAgICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgICAgICBjb25zdCB0Ym9keSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xuICAgICAgICB0aGlzLiN0Ym9keSA9IHRib2R5O1xuXG4gICAgICAgIGNvbnN0IHJlc2l6ZU9icyA9IG5ldyBSZXNpemVPYnNlcnZlciggKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ob3N0LmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudCgncmVzaXplJykgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc2l6ZU9icy5vYnNlcnZlKCB0aGlzLmhvc3QgKTtcblxuICAgICAgICB0aGlzLiN0Ym9keS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcblxuICAgICAgICB0YWJsZS5hcHBlbmQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb2xncm91cFwiKSApO1xuICAgICAgICB0YWJsZS5hcHBlbmQodGJvZHkpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKHRhYmxlKTtcblxuICAgICAgICB0aGlzLnJlc2l6ZShuYnJvd3MsIG5iY29scyk7XG4gICAgfVxuXG4gICAgZ2V0UmFuZ2UoZnJvbTogQ2VsbHxzdHJpbmd8cmVhZG9ubHlbbnVtYmVyLG51bWJlcl0sIHRvOiBDZWxsfHN0cmluZ3xyZWFkb25seVtudW1iZXIsbnVtYmVyXSA9IGZyb20pOiBDZWxsTGlzdCB7XG5cbiAgICAgICAgLy8gcHJvY2VzcyByZWZzLi4uXG4gICAgICAgIGlmKCBmcm9tIGluc3RhbmNlb2YgSFRNTFRhYmxlQ2VsbEVsZW1lbnQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSYW5nZSggdGhpcy5jZWxsUG9zKGZyb20pLCB0byApO1xuICAgICAgICBpZiggdG8gaW5zdGFuY2VvZiBIVE1MVGFibGVDZWxsRWxlbWVudClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJhbmdlKCBmcm9tLCB0aGlzLmNlbGxQb3ModG8pICk7XG5cbiAgICAgICAgaWYoIHR5cGVvZiBmcm9tID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBpZiggZnJvbS5pbmNsdWRlcyhcIjpcIikgKVxuICAgICAgICAgICAgICAgIFtmcm9tLCB0b10gPSBmcm9tLnNwbGl0KCc6Jyk7XG5cbiAgICAgICAgICAgIGZyb20gPSB0aGlzLnJlZjJwb3MoZnJvbSwgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZ2UoIGZyb20sIHRvICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJhbmdlKCBmcm9tLCB0aGlzLnJlZjJwb3ModG8sIHRydWUpICk7XG5cbiAgICAgICAgLy8gZ2V0IHJhbmdlXG5cbiAgICAgICAgbGV0IGJlZ19yb3cgPSBmcm9tWzBdIHx8IDE7XG4gICAgICAgIGxldCBiZWdfY29sID0gZnJvbVsxXSB8fCAxO1xuXG4gICAgICAgIGxldCBlbmRfcm93ID0gZnJvbVswXSA9PT0gMCA/IHRoaXMubmJSb3dzIDogdG9bMF07XG4gICAgICAgIGxldCBlbmRfY29sID0gZnJvbVsxXSA9PT0gMCA/IHRoaXMubmJDb2xzIDogdG9bMV07XG5cbiAgICAgICAgaWYoIGVuZF9yb3cgPCBiZWdfcm93IClcbiAgICAgICAgICAgIFtiZWdfcm93LCBlbmRfcm93XSA9IFtlbmRfcm93LCBiZWdfcm93XTtcbiAgICAgICAgaWYoIGVuZF9jb2wgPCBiZWdfY29sIClcbiAgICAgICAgICAgIFtiZWdfY29sLCBlbmRfY29sXSA9IFtlbmRfY29sLCBiZWdfY29sXTtcblxuICAgICAgICBjb25zdCBjZWxscyA9IG5ldyBBcnJheTxDZWxsPiggKGVuZF9yb3cgLSBiZWdfcm93ICsgMSkgKiAoZW5kX2NvbCAtIGJlZ19jb2wgKyAxKSApO1xuXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBmb3IobGV0IGkgPSBiZWdfcm93OyBpIDw9IGVuZF9yb3c7ICsraSApXG4gICAgICAgICAgICBmb3IobGV0IGogPSBiZWdfY29sOyBqIDw9IGVuZF9jb2w7ICsraiApXG4gICAgICAgICAgICAgICAgY2VsbHNbb2Zmc2V0KytdID0gdGhpcy50Ym9keS5jaGlsZHJlbltpXS5jaGlsZHJlbltqXSBhcyBDZWxsO1xuXG4gICAgICAgIHJldHVybiBuZXcgQ2VsbExpc3QodGhpcywgY2VsbHMpO1xuICAgIH1cblxuICAgIHJlZjJwb3MocmVmOiBzdHJpbmcsIGVuZF9saW5lX2NvbCA9IHRydWUpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgICAgICAgXG4gICAgICAgIHJlZiA9IHJlZi5yZXBsYWNlQWxsKCckJywgJycpO1xuXG4gICAgICAgIGxldCBzZXAgPSByZWYuc2VhcmNoKC9bMC05XS8pO1xuXG4gICAgICAgIGlmKCBzZXAgPT09IDApICAvLyB0aGlzIGlzIGEgbGluZS4uLlxuICAgICAgICAgICAgcmV0dXJuIGVuZF9saW5lX2NvbCA/IHRoaXMucmVmMnBvcyhgQSR7cmVmfWApIDogW3RoaXMubmJDb2xzLCArcmVmXTtcbiAgICAgICAgaWYoIHNlcCA9PT0gLTEpIC8vIHRoaXMgaXMgYSBjb2wuLi5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZjJwb3MoYCR7cmVmfSR7ZW5kX2xpbmVfY29sID8gdGhpcy5uYlJvd3MgOiAxfWApO1xuXG4gICAgICAgIGNvbnN0IHJvdyA9ICtyZWYuc2xpY2Uoc2VwKTtcblxuICAgICAgICBsZXQgY29sID0gMDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNlcDsgKytpKSB7XG4gICAgICAgICAgICBjb2wgKj0gMjY7XG4gICAgICAgICAgICBjb2wgKz0gcmVmLmNoYXJDb2RlQXQoaSkgLSA2NTtcbiAgICAgICAgfVxuICAgICAgICArK2NvbDtcblxuICAgICAgICByZXR1cm4gW3JvdywgY29sXTtcbiAgICB9XG4gICAgcG9zMnJlZihyb3c6IG51bWJlciwgY29sOiBudW1iZXIpIHtcblxuICAgICAgICBsZXQgY29sX3N0ciA9IFwiXCI7XG4gICAgICAgIGRvIHtcblxuICAgICAgICAgICAgbGV0IGlkID0gKGNvbC0xKSAlIDI2O1xuXG4gICAgICAgICAgICBjb2xfc3RyID0gU3RyaW5nLmZyb21DaGFyQ29kZSg2NStpZCkgKyBjb2xfc3RyO1xuXG4gICAgICAgICAgICBjb2wgLT0gaWQgKyAxO1xuICAgICAgICAgICAgY29sIC89IDI2OyAvLyBzaG91bGQgYmUgaW50ZWdlciwgc28gb2suXG5cbiAgICAgICAgfSB3aGlsZSggY29sID4gMCApO1xuXG4gICAgICAgIHJldHVybiBgJHtjb2xfc3RyfSR7cm93fWA7XG4gICAgfVxuICAgIGdldCBuYlJvd3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0Ym9keS5jaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgIH1cbiAgICBnZXQgbmJDb2xzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jdGJvZHkuZmlyc3RFbGVtZW50Q2hpbGQhLmNoaWxkcmVuLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgI2lzVXBkYXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmKCB0aGlzLiNpc1VwZGF0aW5nID09PSB0cnVlIClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy4jaXNVcGRhdGluZyA9IHRydWU7XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IFsuLi50aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbDxDZWxsPigndGQnKV0uZmlsdGVyKCBlID0+IGUucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IobGV0IGNlbGwgb2YgY2VsbHMgKVxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBjZWxsLnJhd0NvbnRlbnQucmVzZXRDYWNoZSgpO1xuXG4gICAgICAgICAgICBmb3IobGV0IGNlbGwgb2YgY2VsbHMpIHtcblxuICAgICAgICAgICAgICAgIGlmKCBjZWxsLnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBGb3JtdWxhICkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBjZWxsLnJhd0NvbnRlbnQuZXhlYyh0aGlzKTsgLy9UT0RPLi4uXG5cbiAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiBmYWN0b3JpemUuLi5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGU6IHN0cmluZyA9IHR5cGVvZiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSApXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiO1xuXG4gICAgICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSAoY2VsbCBhcyBhbnkpLmZvcm1hdCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCB0eXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaG9zdC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoJ3VwZGF0ZScpICk7XG4gICAgICAgICAgICB0aGlzLiNpc1VwZGF0aW5nID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0IGlzUk8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJzLnJvID09PSBcInRydWVcIjtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDZWxsTGlzdCBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcblxuICAgICNzaGVldDogQ2FsY1NoZWV0O1xuICAgICNjZWxsczogQ2VsbFtdO1xuICAgIGNvbnN0cnVjdG9yKHNoZWV0OiBDYWxjU2hlZXQsIGNlbGxzOiBDZWxsW10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy4jY2VsbHMgPSBjZWxscztcbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcbiAgICB9XG5cbiAgICBnZXQgcGxhZ2VfbmFtZSgpIHtcblxuICAgICAgICBpZiggdGhpcy4jY2VsbHMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGlmKCB0aGlzLiNjZWxscy5sZW5ndGggPT09IDEgKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuI3NoZWV0LnBvczJyZWYoIC4uLnRoaXMuI3NoZWV0LmNlbGxQb3ModGhpcy4jY2VsbHNbMF0pICk7XG5cbiAgICAgICAgbGV0IGNlbGxzID0gdGhpcy4jY2VsbHMubWFwKCBjID0+IHRoaXMuI3NoZWV0LmNlbGxQb3MoYykgKS5zb3J0KCAoYSxiKSA9PiB7XG4gICAgICAgICAgICBpZiggYVswXSAhPT0gYlswXSApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFbMF0gLSBiWzBdO1xuICAgICAgICAgICAgcmV0dXJuIGFbMV0gLSBiWzFdO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbWluID0gY2VsbHNbMF07XG4gICAgICAgIGxldCBtYXggPSBjZWxsc1tjZWxscy5sZW5ndGggLSAxXTtcblxuICAgICAgICBsZXQgbmJfY29scyA9IG1heFsxXSAtIG1pblsxXSArIDE7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgaWYoIGNlbGxzW2ldWzBdICE9PSBNYXRoLmZsb29yKGkvbmJfY29scykrbWluWzBdICYmIGNlbGxzW2ldWzFdICE9PSAoaSVuYl9jb2xzKSsgbWluWzFdIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgcmV0dXJuIGAke3RoaXMuI3NoZWV0LnBvczJyZWYoLi4ubWluKX06JHt0aGlzLiNzaGVldC5wb3MycmVmKC4uLm1heCl9YDtcbiAgICB9XG5cbiAgICBnZXQgY2VsbHMoKTogQ2VsbFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NlbGxzO1xuICAgIH1cbiAgICBnZXQgc2hlZXQoKTogQ2FsY1NoZWV0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3NoZWV0O1xuICAgIH1cblxuICAgIHRvZ2dsZUZvcm1hdChuYW1lOiBzdHJpbmd8KCh2OiBhbnksIHByZWM6IG51bWJlcnxudWxsKSA9PiBzdHJpbmcpICkge1xuICAgICAgICBsZXQgZiA9IEZvcm1hdC5leHRyYWN0Rm9ybWF0KHRoaXMpO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgbmFtZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cbiAgICAgICAgICAgIGxldCBpc0Zvcm1hdCA9IGYuZ2V0UHJvcGVydHkoXCJmb3JtYXRcIikgPT09IG5hbWU7XG5cbiAgICAgICAgICAgIHRoaXMuZm9ybWF0KHtmb3JtYXQ6IGlzRm9ybWF0ID8gbnVsbCA6IG5hbWUgfSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZm9ybWF0KHtbbmFtZV06IGYuZ2V0UHJvcGVydHkobmFtZSkgIT09IHRydWV9KTtcbiAgICB9XG5cbiAgICBmb3JtYXQoLi4uZjogKCggKHY6IGFueSwgcHJlYzogbnVtYmVyfG51bGwpID0+IHN0cmluZyApfHN0cmluZ3xGb3JtYXR8UmVjb3JkPHN0cmluZywgYW55PilbXSkge1xuXG4gICAgICAgIGlmKCBmLmxlbmd0aCA+IDEgKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vVE9ETy4uLi5cbiAgICAgICAgICAgIGYgPSBPYmplY3QuZnJvbUVudHJpZXMoIGYubWFwKCBlID0+IFtlLCB0cnVlXSApICk7XG5cbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBmID0gZlswXTtcblxuICAgICAgICBpZiggdHlwZW9mIGYgPT09IFwiZnVuY3Rpb25cIiApXG4gICAgICAgICAgICBmID0ge1wiZm9ybWF0XCI6IGZ9O1xuXG4gICAgICAgIGlmKHR5cGVvZiBmID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIGYgPSB7W2ZdOiB0cnVlfTtcblxuICAgICAgICBpZiggISAoZiBpbnN0YW5jZW9mIEZvcm1hdCkgKVxuICAgICAgICAgICAgZiA9IG5ldyBGb3JtYXQoZik7XG5cbiAgICAgICAgZi5hcHBseVRvKHRoaXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldCBjb250ZW50KCk6IChSYXdDb250ZW50VHlwZSlbXSB7XG4gICAgICAgIGxldCBjb250ZW50ID0gbmV3IEFycmF5KHRoaXMuI2NlbGxzLmxlbmd0aCk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLiNjZWxscy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgIGNvbnRlbnRbaV0gPSB0aGlzLiNjZWxsc1tpXS5yYXdDb250ZW50ITtcblxuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICB9XG5cbiAgICBkZWxldGVGb3JtYXQoKSB7XG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiB0aGlzLiNjZWxscykgLy9UT0RPIGFkZCBob2MgZm9ybWF0Li4uXG4gICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9ICcnO1xuICAgIH1cblxuICAgIGRlbGV0ZUNvbnRlbnQoKSB7XG5cbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIHRoaXMuI2NlbGxzKSB7XG4gICAgICAgICAgICBjZWxsLnJhd0NvbnRlbnQgPSB1bmRlZmluZWQgYXMgYW55O1xuICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10eXBlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzaGVldC51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBzZXQgY29udGVudChjb250ZW50OiBDZWxsfFJhd0NvbnRlbnRUeXBlfChSYXdDb250ZW50VHlwZXxDZWxsKVtdKSB7XG5cbiAgICAgICAgaWYoIEFycmF5LmlzQXJyYXkoY29udGVudCkgKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICBuZXcgQ2VsbExpc3QodGhpcy4jc2hlZXQsIFt0aGlzLiNjZWxsc1tpXV0gKS5jb250ZW50ID0gY29udGVudFtpXTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuXG4gICAgICAgICAgICBsZXQgcmF3ID0gY29udGVudDtcbiAgICAgICAgICAgIGNvbnRlbnQgPSBwYXJzZUlucHV0KGNvbnRlbnQpO1xuICAgICAgICAgICAgaWYoIHR5cGVvZiBjb250ZW50ID09PSBcIm51bWJlclwiICYmIHJhd1tyYXcubGVuZ3RoLTFdID09PSBcIiVcIikge1xuICAgICAgICAgICAgICAgIGxldCBmID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYoICEgZi5oYXNQcm9wZXJ0eShcImZvcm1hdFwiKSB8fCBmLmdldFByb3BlcnR5KFwiZm9ybWF0XCIpID09PSBGb3JtYXRzLmRlZmF1bHQgKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1hdChGb3JtYXRzLnBvdXJjZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCB0eXBlb2YgY29udGVudCA9PT0gXCJudW1iZXJcIiAmJiByYXdbcmF3Lmxlbmd0aC0xXSA9PT0gXCLigqxcIikge1xuICAgICAgICAgICAgICAgIGxldCBmID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYoICEgZi5oYXNQcm9wZXJ0eShcImZvcm1hdFwiKSB8fCBmLmdldFByb3BlcnR5KFwiZm9ybWF0XCIpID09PSBGb3JtYXRzLmRlZmF1bHQgKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1hdChGb3JtYXRzLmV1cm9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByYXdfdmFsID0gY29udGVudCBpbnN0YW5jZW9mIEhUTUxUYWJsZUNlbGxFbGVtZW50ID8gY29udGVudC5yYXdDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY29udGVudDtcblxuICAgICAgICBmb3IobGV0IGNlbGwgb2YgdGhpcy4jY2VsbHMpIHtcblxuICAgICAgICAgICAgaWYoY29udGVudCBpbnN0YW5jZW9mIEhUTUxUYWJsZUNlbGxFbGVtZW50ICYmIGNvbnRlbnQucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEgKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgdiA9IGNvbnRlbnQucmF3Q29udGVudDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRzdCA9IHRoaXMuI3NoZWV0LmNlbGxQb3MoIGNlbGwgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzcmMgPSB0aGlzLiNzaGVldC5jZWxsUG9zKGNvbnRlbnQpXG5cbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmID0gWyBkc3RbMF0gLSBzcmNbMF0sIGRzdFsxXSAtIHNyY1sxXV0gYXMgY29uc3Q7XG5cbiAgICAgICAgICAgICAgICByYXdfdmFsID0gdi5yZWxhdGl2ZVRvKCB0aGlzLiNzaGVldCwgLi4uZGlmZiApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjZWxsLnJhd0NvbnRlbnQgPSByYXdfdmFsO1xuXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSByYXdfdmFsO1xuICAgICAgICAgICAgaWYoIHJhd192YWwgaW5zdGFuY2VvZiBGb3JtdWxhKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXRzID0gT2JqZWN0LnZhbHVlcyggRm9ybWF0cyApO1xuXG4gICAgICAgICAgICAgICAgLy9JZiBubyBudW1iZXIgZm9ybWF0LCBkZWR1Y2UgZm9ybWF0LlxuICAgICAgICAgICAgICAgIGlmKCBjZWxsLmZvcm1hdCA9PT0gdW5kZWZpbmVkIHx8IGNlbGwuZm9ybWF0ID09PSBGb3JtYXRzLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1hdCA9IEZvcm1hdHMuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5iX2RhdGVzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCByIG9mIHJhd192YWwucmFuZ2VzVG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQodGhpcy5zaGVldC5nZXRSYW5nZShyLnZhbHVlKSApLmdldFByb3BlcnR5KFwiZm9ybWF0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGZvcm1hdCAhPT0gZiAmJiBmb3JtYXRzLmluZGV4T2YoZikgPiBmb3JtYXRzLmluZGV4T2YoZm9ybWF0KSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0ID0gZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGYgPT09IEZvcm1hdHMuZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArK25iX2RhdGVzO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaDRja1xuICAgICAgICAgICAgICAgICAgICBpZiggZm9ybWF0ID09PSBGb3JtYXRzLmRhdGUgJiYgbmJfZGF0ZXMgPiAxIClcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdCA9IEZvcm1hdHMuZGVmYXVsdDtcblxuICAgICAgICAgICAgICAgICAgICBpZihmb3JtYXQgIT09IEZvcm1hdHMuZGVmYXVsdClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuZm9ybWF0ID0gZm9ybWF0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhbHVlID0gcmF3X3ZhbC5leGVjKHRoaXMuI3NoZWV0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHR5cGU6IHN0cmluZyA9IHR5cGVvZiB2YWx1ZTtcbiAgICAgICAgICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgKSB7XG4gICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIjtcbiAgICAgICAgICAgICAgICBjZWxsLmZvcm1hdCA9IEZvcm1hdHMuZGF0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGNlbGwuZm9ybWF0KHZhbHVlKTtcblxuICAgICAgICAgICAgaWYoIGNlbGwuZm9ybWF0ID09PSBGb3JtYXRzLmRhdGUpXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdkYXRlJztcbiAgICAgICAgICAgIGlmKCBjZWxsLmZvcm1hdCA9PT0gRm9ybWF0cy5wb3VyY2VudClcbiAgICAgICAgICAgICAgICB0eXBlID0gJ3BvdXJjZW50JztcbiAgICAgICAgICAgIGlmKCBjZWxsLmZvcm1hdCA9PT0gRm9ybWF0cy5ldXJvcyB8fCBjZWxsLmZvcm1hdCA9PT0gRm9ybWF0cy5udW1iZXIgKVxuICAgICAgICAgICAgICAgIHR5cGUgPSAnbnVtYmVyJztcblxuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHR5cGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2hlZXQudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgc2V0Uk8oaXNfcm86IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiB0aGlzLiNjZWxscylcbiAgICAgICAgICAgIGNlbGwuaXNfcm8gPSBpc19ybztcbiAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NlbGxzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBoYXMoLi4uY2VsbHM6IENlbGxbXSkge1xuICAgICAgICBmb3IobGV0IGNlbGwgb2YgY2VsbHMpXG4gICAgICAgICAgICBpZiggISB0aGlzLiNjZWxscy5pbmNsdWRlcyhjZWxsKSApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZW1vdmUoLi4uY2VsbHM6IENlbGxbXSkge1xuICAgICAgICB0aGlzLiNjZWxscyA9IHRoaXMuI2NlbGxzLmZpbHRlciggYyA9PiAhIGNlbGxzLmluY2x1ZGVzKGMpICk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpICk7XG4gICAgfVxuXG4gICAgcmVwbGFjZUFsbCguLi5jZWxsczogQ2VsbFtdfFtDZWxsTGlzdF0pIHtcbiAgICAgICAgdGhpcy4jY2VsbHMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5hZGQoLi4uY2VsbHMpO1xuICAgIH1cblxuICAgIGFkZCguLi5jZWxsczogQ2VsbFtdfFtDZWxsTGlzdF0pIHtcblxuICAgICAgICBpZiggY2VsbHNbMF0gaW5zdGFuY2VvZiBDZWxsTGlzdClcbiAgICAgICAgICAgIGNlbGxzID0gY2VsbHNbMF0uY2VsbHM7XG5cbiAgICAgICAgdGhpcy4jY2VsbHMucHVzaCguLi5jZWxscyBhcyBDZWxsW10pO1xuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpICk7XG4gICAgfVxuXG4gICAgZ2V0IGZpcnN0Q2VsbCgpIHtcbiAgICAgICAgaWYoIHRoaXMuI2NlbGxzLmxlbmd0aCA8IDEpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub3BlXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy4jY2VsbHNbMF07XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuI2NlbGxzLmxlbmd0aCA9IDA7XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcbiAgICB9XG5cblxuICAgIGRlZXBDbG9uZSgpIHtcblxuICAgICAgICBsZXQgY2VsbHMgPSB0aGlzLiNjZWxscy5tYXAoIGMgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xvbmUgPSBjLmNsb25lTm9kZSh0cnVlKSBhcyBDZWxsO1xuXG4gICAgICAgICAgICBjbG9uZS5yYXdDb250ZW50ID0gYy5yYXdDb250ZW50O1xuICAgICAgICAgICAgY2xvbmUuZm9ybWF0ICAgICA9IGMuZm9ybWF0O1xuICAgICAgICAgICAgKGNsb25lIGFzIGFueSkucG9zICAgICAgICA9IHRoaXMuI3NoZWV0LmNlbGxQb3MoYyk7XG5cbiAgICAgICAgICAgIHJldHVybiBjbG9uZTtcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gbmV3IENlbGxMaXN0KHRoaXMuI3NoZWV0LCBjZWxscyk7XG4gICAgfVxufVxuXG4vL1RPRE8uLi5cbmltcG9ydCBcIi4vZm9ybXVsYV9lZGl0b3JcIjtcbmltcG9ydCBcIi4vcGxhZ2VfZWRpdG9yXCI7XG5pbXBvcnQgeyBGb3JtdWxhLCBwYXJzZV9mb3JtdWxhIH0gZnJvbSBcIi4vZm9ybXVsYV9wYXJzZXJcIjtcbmltcG9ydCB7IFBsYWdlU2VsZWN0b3IgfSBmcm9tIFwiLi9wbGFnZV9zZWxlY3RvclwiO1xuaW1wb3J0IHsgRm9ybWF0LCBGb3JtYXRNYW5hZ2VyLCBGb3JtYXRzIH0gZnJvbSBcIi4vZm9ybWF0XCI7XG5pbXBvcnQgeyBGb3JtdWxhUmVmLCBSYW5nZU92ZXJsYXksIFJlY29weUhhbmRsZSB9IGZyb20gXCIuL1JhbmdlT3ZlcmxheVwiO1xuaW1wb3J0IHsgdGVzdCB9IGZyb20gXCJ0ZXN0L3dlYm9kZlwiO1xuXG5MSVNTLmRlZmluZSgnY2FsYy1zaGVldCcsIENhbGNTaGVldCk7IiwiZXhwb3J0IGRlZmF1bHQgW1xuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiUiAxLTAxIFRhYmxldXIgZXQgUmVwb3J0aW5nXCIsXG4gICAgICAgIHNuYW1lOiBcIlIxLTAxIFRhYmxldXJcIixcbiAgICAgICAgcGF0aCA6IFwiUjEtMDFcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNNXCIsXG4gICAgICAgICAgICAgICAgcGF0aDogXCJDTVwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiQ00xXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQ00yXCJcbiAgICAgICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJUUFwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiVFBcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIlRQMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQMlwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIlIgMS0wMiBCYXNlcyBkZSBEb25uw6llcyBSZWxhdGlvbm5lbGxlcyAxXCIsXG4gICAgICAgIHNuYW1lOiBcIlIxLTAyIEJEUjFcIixcbiAgICAgICAgcGF0aCA6IFwiUjEtMDJcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIFwiQ01cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlNsaWRlc1wiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiU2xpZGVzXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgXCJDTTFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDTTJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDTTNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDTTRcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJUUFwiICxcbiAgICAgICAgICAgICAgICBwYXRoIDogXCJUUFwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiVFAxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFAyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFAzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFA0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFA1XCJcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJDaGVhdCBTaGVldFwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiL2Fzc2V0cy9zcWwvY2hlYXQgc2hlZXQuc3ZnXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lIDogXCJSIDMtMDMgVGVjaG5vbG9naWVzIFdlYlwiLFxuICAgICAgICBzbmFtZTogXCJSMy0wMyBXZWIxXCIsXG4gICAgICAgIHBhdGggOiBcIlIzLTAzXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJDTVwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiQ01cIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIkNNMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIkNNMlwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIlIgNS0wNi1WQ09EIETDqXZlbG9wcGVtZW50IExvZ2ljaWVsXCIsXG4gICAgICAgIHNuYW1lOiBcIlI1LTA2LVZDT0QgRGV2IExvZ1wiLFxuICAgICAgICBwYXRoIDogXCJSNS0wNi1WQ09EXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJDTVwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiQ01cIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIkNNMVwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IHJvb3RfcGF0aCA9IFtcImxvY2FsaG9zdFwiLCBcIjEyNy4wLjAuMVwiXS5pbmNsdWRlcyhsb2NhdGlvbi5ob3N0bmFtZSkgPyBcIi9kaXN0L2Rldi9wYWdlcy9cIiA6IFwiL0NvdXJzL2Rpc3QvZGV2L3BhZ2VzL1wiOyIsIlxuaW1wb3J0IHBhZ2VzLCB7cm9vdF9wYXRofSBmcm9tIFwiLi9jb250ZW50XCI7XG5cbi8qXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JlcHJpbnQnLCAoKSA9PiB7XG4gIC8vLi4uXG59KTtcbiovXG5cbi8vVE9ETzogbGlua3MuLi5cbmNvbnN0IG1haW4gICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpITtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIikhO1xuXG5jb25zdCB0aXRsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcImgxLCBoMiwgaDMsIGg0XCIpO1xuXG50eXBlIE5vZGUgPSB7XG4gICAgaHRtbCAgICA6IEhUTUxFbGVtZW50LFxuICAgIGxldmVsICAgOiBudW1iZXIsXG4gICAgcGFyZW50ICA6IG51bGx8Tm9kZSxcbiAgICBjaGlsZHJlbjogTm9kZVtdXG59O1xuXG5jb25zdCBodHJlZTogTm9kZSA9IHtcbiAgICBodG1sICAgIDogbWFpbixcbiAgICBsZXZlbCAgIDogMCxcbiAgICBwYXJlbnQgIDogbnVsbCxcbiAgICBjaGlsZHJlbjogW10sXG59O1xubGV0IGh0cmVlX2N1cnNvciA9IGh0cmVlO1xuZm9yKGxldCB0aXRsZSBvZiB0aXRsZXMpIHtcbiAgICBjb25zdCBsZXZlbCA9ICt0aXRsZS50YWdOYW1lLnNsaWNlKDEpO1xuICAgIFxuICAgIHdoaWxlKCBsZXZlbCA8PSBodHJlZV9jdXJzb3IubGV2ZWwgKVxuICAgICAgICBodHJlZV9jdXJzb3IgPSBodHJlZV9jdXJzb3IucGFyZW50ITtcblxuICAgIGNvbnN0IGVsZW06IE5vZGUgPSB7XG4gICAgICAgIGh0bWw6IHRpdGxlLFxuICAgICAgICBsZXZlbCxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICBwYXJlbnQ6IGh0cmVlX2N1cnNvclxuICAgIH07XG5cblxuICAgIGh0cmVlX2N1cnNvci5jaGlsZHJlbi5wdXNoKGVsZW0pO1xuXG4gICAgaHRyZWVfY3Vyc29yID0gZWxlbTtcbn1cblxuZnVuY3Rpb24gc2VhcmNoQ3VySGVhZGVyKGh0cmVlOiBOb2RlLCBwb3NpdGlvbjogbnVtYmVyKTogbnVsbCB8IE5vZGUge1xuXG4gICAgY29uc3QgaGVhZGVycyA9IGh0cmVlLmNoaWxkcmVuO1xuXG4gICAgZm9yKGxldCBpID0gaGVhZGVycy5sZW5ndGggLSAxOyBpID49IDA7IC0taSlcbiAgICAgICAgaWYoIGhlYWRlcnNbaV0uaHRtbC5vZmZzZXRUb3AgPD0gcG9zaXRpb24gKyAzMiApXG4gICAgICAgICAgICByZXR1cm4gc2VhcmNoQ3VySGVhZGVyKGhlYWRlcnNbaV0sIHBvc2l0aW9uKSA/PyBoZWFkZXJzW2ldO1xuXG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmNvbnN0IGhpZCA9IFtcbiAgICBbXSxcbiAgICBbXCJJXCIsIFwiSUlcIiwgXCJJSUlcIiwgXCJJVlwiXSxcbiAgICBbXCIxXCIsIFwiMlwiLFwiM1wiLFwiNVwiLFwiNlwiLFwiN1wiLFwiOFwiLFwiOVwiXSxcbiAgICBbXCJhXCIsIFwiYlwiLFwiY1wiLFwiZFwiLFwiZVwiLFwiZlwiLFwiZ1wiLFwiaFwiXSxcbl1cblxuZnVuY3Rpb24gZ2V0VGl0bGVQcmVmaXgoczogTm9kZSkge1xuXG4gICAgaWYoIHMubGV2ZWwgPj0gaGlkLmxlbmd0aCApXG4gICAgICAgIHJldHVybiBcIlwiO1xuXG4gICAgY29uc3QgaWR4ID0gcy5wYXJlbnQhLmNoaWxkcmVuLmluZGV4T2Yocyk7XG5cbiAgICBjb25zdCBudW0gPSBoaWRbcy5sZXZlbF1baWR4XTtcblxuICAgIHJldHVybiBgJHtudW19LiBgO1xufVxuXG5mdW5jdGlvbiBidWlsZE1lbnUobm9kZXM6IE5vZGVbXSkge1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICAgIG1lbnUuYXBwZW5kKCAuLi4gbm9kZXMubWFwKCAocyxpZHgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBpdGVtLnRleHRDb250ZW50PSBgJHtnZXRUaXRsZVByZWZpeChzKX0ke3MuaHRtbC50ZXh0Q29udGVudH1gO1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgYCMke3MuaHRtbC5pZH1gKTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSkgKTtcblxuICAgIHJldHVybiBtZW51O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVIZWFkZXIoKSB7XG5cbiAgICBjb25zdCBsYXN0ID0gc2VhcmNoQ3VySGVhZGVyKCBodHJlZSwgbWFpbi5zY3JvbGxUb3ApITtcblxuICAgIGxldCBoZWFkZXJzID0gW107XG4gICAgbGV0IGN1cnNvciAgPSBsYXN0O1xuXG4gICAgaWYoIGN1cnNvciAhPT0gbnVsbClcbiAgICAgICAgd2hpbGUoY3Vyc29yLmh0bWwgIT09IG1haW4pIHtcbiAgICAgICAgICAgIGhlYWRlcnMucHVzaChjdXJzb3IpO1xuICAgICAgICAgICAgY3Vyc29yID0gY3Vyc29yLnBhcmVudCE7XG4gICAgICAgIH1cblxuICAgIGNvbnN0IGh0bWwgPSBoZWFkZXJzLnJldmVyc2UoKS5tYXAoIChobm9kZSxpKSA9PiB7XG5cbiAgICAgICAgY29uc3QgaCA9IGhub2RlLmh0bWw7XG4gICAgICAgIGNvbnN0IGhfaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgbGluay50ZXh0Q29udGVudCA9IGAke2dldFRpdGxlUHJlZml4KGhub2RlKX0ke2gudGV4dENvbnRlbnR9YDtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgIyR7aC5pZH1gKTtcblxuICAgICAgICBjb25zdCBtZW51ID0gYnVpbGRNZW51KGhub2RlLnBhcmVudCEuY2hpbGRyZW4pO1xuICAgICAgICBoX2h0bWwuYXBwZW5kKGxpbmssIG1lbnUpO1xuXG4gICAgICAgIHJldHVybiBoX2h0bWw7XG4gICAgfSk7XG5cbiAgICBpZiggbGFzdCAhPT0gbnVsbCAmJiBsYXN0LmNoaWxkcmVuLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBjb25zdCBlbXB0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgICAgIGVtcHR5LmFwcGVuZCggYnVpbGRNZW51KGxhc3QuY2hpbGRyZW4pICk7XG5cbiAgICAgICAgaHRtbC5wdXNoKGVtcHR5KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VfcGFnZV9ocmVmKHBhdGhwcmVmaXg6IHN0cmluZywgcGF0aDogc3RyaW5nLCBkZXNjOiBhbnkpIHtcblxuICAgICAgICAvLyBoNGNrLi4uXG4gICAgICAgIGlmKCBwYXRoWzBdID09PSBcIi9cIiApXG4gICAgICAgICAgICByZXR1cm4gYCR7cm9vdF9wYXRoLnNsaWNlKDAsLTYpfS8ke3BhdGh9YDtcblxuICAgICAgICBsZXQgaHJlZiA9IGAke3BhdGhwcmVmaXh9JHtwYXRofS9gO1xuXG4gICAgICAgIHdoaWxlKGRlc2MuY2hpbGRyZW4/Lmxlbmd0aCkge1xuICAgICAgICAgICAgZGVzYyA9IGRlc2MuY2hpbGRyZW5bMF07XG4gICAgICAgICAgICBocmVmICs9IGAke2Rlc2MucGF0aCA/PyBkZXNjfS9gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGhyZWY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZV9wYWdlX21lbnUocGF0aHByZWZpeDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHBhZ2VzOiBhbnkpIHtcbiAgICAgICAgY29uc3QgZGVzYyA9IHBhZ2VzLmZpbmQoIChwYWdlOiBhbnkpID0+IHBhZ2UgPT09IHBhdGggfHwgcGFnZS5wYXRoID09PSBwYXRoICkhO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gZGVzYy5zbmFtZSA/PyBkZXNjLm5hbWUgPz8gZGVzYztcbiAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgbWFrZV9wYWdlX2hyZWYocGF0aHByZWZpeCwgcGF0aCwgZGVzYykgKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgICBcbiAgICAgICAgICAgIG1lbnUuYXBwZW5kKCAuLi4gcGFnZXMubWFwKCAocGFnZTphbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudD0gcGFnZS5uYW1lID8/IHBhZ2U7XG5cbiAgICAgICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgbWFrZV9wYWdlX2hyZWYocGF0aHByZWZpeCwgcGFnZS5wYXRoPz9wYWdlLCBwYWdlKSApO1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfSkgKTtcbiAgICBcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kKGxpbmssIG1lbnUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICAgIFxuICAgIGxldCBjdXJwYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKHJvb3RfcGF0aC5sZW5ndGgpLnNwbGl0KCcvJyk7XG5cbiAgICBjb25zdCBtb2R1bGVfaHRtbCA9IG1ha2VfcGFnZV9tZW51KHJvb3RfcGF0aCwgY3VycGFnZVswXSwgcGFnZXMpO1xuXG4gICAgY29uc3QgZGVzYyA9IHBhZ2VzLmZpbmQoIChwYWdlOiBhbnkpID0+IHBhZ2UucGF0aCA9PT0gY3VycGFnZVswXSApITtcbiAgICBjb25zdCB0eXBlX2h0bWwgICA9IG1ha2VfcGFnZV9tZW51KHJvb3RfcGF0aCArIGN1cnBhZ2VbMF0gKyBcIi9cIiwgY3VycGFnZVsxXSwgZGVzYy5jaGlsZHJlbik7XG5cbiAgICBjb25zdCBkZXNjX3R5cGUgPSBkZXNjLmNoaWxkcmVuLmZpbmQoIChwYWdlOiBhbnkpID0+IChwYWdlPy5wYXRoID8/IHBhZ2UpID09PSBjdXJwYWdlWzFdICkhO1xuICAgIGlmKCB0eXBlb2YgZGVzY190eXBlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIC8vIHRpdGxlIG51bVxuICAgICAgICBjb25zdCBkZXNjMl9pZHggPSBkZXNjX3R5cGUuY2hpbGRyZW4uZmluZEluZGV4KCAocGFnZTogYW55KSA9PiBwYWdlPy5wYXRoID8/IHBhZ2UgPT09IGN1cnBhZ2VbMl0gKSE7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoXCItLWhlYWRlcl9zdGFydF9pZFwiLCBgJHtkZXNjMl9pZHh9YCk7XG4gICAgICAgIC8vIG1lbnVcbiAgICAgICAgY29uc3Qgc2Vzc2lvbl9odG1sICAgPSBtYWtlX3BhZ2VfbWVudShyb290X3BhdGggKyBjdXJwYWdlWzBdICsgXCIvXCIrIGN1cnBhZ2VbMV0gKyBcIi9cIiwgY3VycGFnZVsyXSwgZGVzY190eXBlLmNoaWxkcmVuKTtcbiAgICAgICAgaHRtbFswXSA9IHNlc3Npb25faHRtbDtcbiAgICB9XG5cbiAgICBoZWFkZXIucmVwbGFjZUNoaWxkcmVuKG1vZHVsZV9odG1sLCB0eXBlX2h0bWwsIC4uLmh0bWwpO1xufVxuXG5tYWluLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZUhlYWRlcik7XG51cGRhdGVIZWFkZXIoKTsiLCIvL2h0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ5NDE0My9jcmVhdGluZy1hLW5ldy1kb20tZWxlbWVudC1mcm9tLWFuLWh0bWwtc3RyaW5nLXVzaW5nLWJ1aWx0LWluLWRvbS1tZXRob2RzLW9yLXByb1xuZXhwb3J0IGZ1bmN0aW9uIHN0cjJodG1sPFQgZXh0ZW5kcyBIVE1MRWxlbWVudD4oaHRtbDogc3RyaW5nKTogVCB7XG4gICAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICBodG1sID0gaHRtbC50cmltKCk7IC8vIE5ldmVyIHJldHVybiBhIHRleHQgbm9kZSBvZiB3aGl0ZXNwYWNlIGFzIHRoZSByZXN1bHRcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkISBhcyBUO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyMkRGKGh0bWw6IHN0cmluZyk6IERvY3VtZW50RnJhZ21lbnQge1xuICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgaHRtbCA9IGh0bWwudHJpbSgpOyAvLyBOZXZlciByZXR1cm4gYSB0ZXh0IG5vZGUgb2Ygd2hpdGVzcGFjZSBhcyB0aGUgcmVzdWx0XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudDtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwidmFyIHdlYnBhY2tRdWV1ZXMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIHF1ZXVlc1wiKSA6IFwiX193ZWJwYWNrX3F1ZXVlc19fXCI7XG52YXIgd2VicGFja0V4cG9ydHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGV4cG9ydHNcIikgOiBcIl9fd2VicGFja19leHBvcnRzX19cIjtcbnZhciB3ZWJwYWNrRXJyb3IgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGVycm9yXCIpIDogXCJfX3dlYnBhY2tfZXJyb3JfX1wiO1xudmFyIHJlc29sdmVRdWV1ZSA9IChxdWV1ZSkgPT4ge1xuXHRpZihxdWV1ZSAmJiBxdWV1ZS5kIDwgMSkge1xuXHRcdHF1ZXVlLmQgPSAxO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tKSk7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0gPyBmbi5yKysgOiBmbigpKSk7XG5cdH1cbn1cbnZhciB3cmFwRGVwcyA9IChkZXBzKSA9PiAoZGVwcy5tYXAoKGRlcCkgPT4ge1xuXHRpZihkZXAgIT09IG51bGwgJiYgdHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIikge1xuXHRcdGlmKGRlcFt3ZWJwYWNrUXVldWVzXSkgcmV0dXJuIGRlcDtcblx0XHRpZihkZXAudGhlbikge1xuXHRcdFx0dmFyIHF1ZXVlID0gW107XG5cdFx0XHRxdWV1ZS5kID0gMDtcblx0XHRcdGRlcC50aGVuKChyKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXhwb3J0c10gPSByO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSwgKGUpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFcnJvcl0gPSBlO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgb2JqID0ge307XG5cdFx0XHRvYmpbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChmbihxdWV1ZSkpO1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdH1cblx0dmFyIHJldCA9IHt9O1xuXHRyZXRbd2VicGFja1F1ZXVlc10gPSB4ID0+IHt9O1xuXHRyZXRbd2VicGFja0V4cG9ydHNdID0gZGVwO1xuXHRyZXR1cm4gcmV0O1xufSkpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5hID0gKG1vZHVsZSwgYm9keSwgaGFzQXdhaXQpID0+IHtcblx0dmFyIHF1ZXVlO1xuXHRoYXNBd2FpdCAmJiAoKHF1ZXVlID0gW10pLmQgPSAtMSk7XG5cdHZhciBkZXBRdWV1ZXMgPSBuZXcgU2V0KCk7XG5cdHZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cdHZhciBjdXJyZW50RGVwcztcblx0dmFyIG91dGVyUmVzb2x2ZTtcblx0dmFyIHJlamVjdDtcblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqKSA9PiB7XG5cdFx0cmVqZWN0ID0gcmVqO1xuXHRcdG91dGVyUmVzb2x2ZSA9IHJlc29sdmU7XG5cdH0pO1xuXHRwcm9taXNlW3dlYnBhY2tFeHBvcnRzXSA9IGV4cG9ydHM7XG5cdHByb21pc2Vbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChxdWV1ZSAmJiBmbihxdWV1ZSksIGRlcFF1ZXVlcy5mb3JFYWNoKGZuKSwgcHJvbWlzZVtcImNhdGNoXCJdKHggPT4ge30pKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBwcm9taXNlO1xuXHRib2R5KChkZXBzKSA9PiB7XG5cdFx0Y3VycmVudERlcHMgPSB3cmFwRGVwcyhkZXBzKTtcblx0XHR2YXIgZm47XG5cdFx0dmFyIGdldFJlc3VsdCA9ICgpID0+IChjdXJyZW50RGVwcy5tYXAoKGQpID0+IHtcblx0XHRcdGlmKGRbd2VicGFja0Vycm9yXSkgdGhyb3cgZFt3ZWJwYWNrRXJyb3JdO1xuXHRcdFx0cmV0dXJuIGRbd2VicGFja0V4cG9ydHNdO1xuXHRcdH0pKVxuXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdGZuID0gKCkgPT4gKHJlc29sdmUoZ2V0UmVzdWx0KSk7XG5cdFx0XHRmbi5yID0gMDtcblx0XHRcdHZhciBmblF1ZXVlID0gKHEpID0+IChxICE9PSBxdWV1ZSAmJiAhZGVwUXVldWVzLmhhcyhxKSAmJiAoZGVwUXVldWVzLmFkZChxKSwgcSAmJiAhcS5kICYmIChmbi5yKyssIHEucHVzaChmbikpKSk7XG5cdFx0XHRjdXJyZW50RGVwcy5tYXAoKGRlcCkgPT4gKGRlcFt3ZWJwYWNrUXVldWVzXShmblF1ZXVlKSkpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBmbi5yID8gcHJvbWlzZSA6IGdldFJlc3VsdCgpO1xuXHR9LCAoZXJyKSA9PiAoKGVyciA/IHJlamVjdChwcm9taXNlW3dlYnBhY2tFcnJvcl0gPSBlcnIpIDogb3V0ZXJSZXNvbHZlKGV4cG9ydHMpKSwgcmVzb2x2ZVF1ZXVlKHF1ZXVlKSkpO1xuXHRxdWV1ZSAmJiBxdWV1ZS5kIDwgMCAmJiAocXVldWUuZCA9IDApO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ21vZHVsZScgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMS9pbmRleC50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTEvaW5kZXguY3NzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00xL2luZGV4Lm1kXCIpO1xuIiwiIl0sIm5hbWVzIjpbIlNoYWRvd0NmZyIsIl9fY3N0cl9ob3N0IiwiQ0FOX0hBVkVfU0hBRE9XIiwiX2Nhbkhhc1NoYWRvdyIsInRhZyIsImluY2x1ZGVzIiwiX2VsZW1lbnQydGFnbmFtZSIsIkxJU1MiLCJleHRlbmRzIiwicF9leHRlbmRzIiwiaG9zdCIsInBfaG9zdCIsImRlcGVuZGVuY2llcyIsInBfZGVwcyIsImF0dHJpYnV0ZXMiLCJwX2F0dHJzIiwicGFyYW1zIiwiY29udGVudCIsImNzcyIsInNoYWRvdyIsInBfc2hhZG93IiwiSFRNTEVsZW1lbnQiLCJfZXh0ZW5kcyIsIk9iamVjdCIsImNhbkhhc1NoYWRvdyIsIkVycm9yIiwidW5kZWZpbmVkIiwicHVzaCIsIkhUTUxUZW1wbGF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJ0cmltIiwiUmVzcG9uc2UiLCJ0ZXh0IiwiTElTU0Jhc2UiLCJQYXJhbWV0ZXJzIiwic3R5bGVzaGVldHMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJmZXRjaF9jc3MiLCJDU1NTdHlsZVNoZWV0IiwiSFRNTFN0eWxlRWxlbWVudCIsInNoZWV0Iiwic3R5bGUiLCJyZXBsYWNlIiwibWFwIiwiaWR4IiwiY29uc3RydWN0b3IiLCJhdHRycyIsInNldEF0dHJEZWZhdWx0IiwiYXR0ciIsInZhbHVlIiwic2V0UGFyYW0iLCJuYW1lIiwib25BdHRyQ2hhbmdlZCIsIl9uYW1lIiwiX29sZFZhbHVlIiwiX25ld1ZhbHVlIiwiaXNJbkRPTSIsIm9uRE9NQ29ubmVjdGVkIiwib25ET01EaXNjb25uZWN0ZWQiLCJleHRlbmRzTElTUyIsIkxpc3MiLCJwYXJhbWV0ZXJzIiwiYXNzaWduIiwiRXh0ZW5kZWRMSVNTIiwidCIsImlkIiwiYnVpbGRMSVNTSG9zdCIsIl9wYXJhbXMiLCJhbHJlYWR5RGVjbGFyZWRDU1MiLCJTZXQiLCJHRVQiLCJTeW1ib2wiLCJTRVQiLCJwcm9wZXJ0aWVzIiwiZnJvbUVudHJpZXMiLCJuIiwiZW51bWVyYWJsZSIsImdldCIsInNldCIsIkF0dHJpYnV0ZXMiLCJkYXRhIiwiZGVmYXVsdHMiLCJzZXR0ZXIiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiTElTU0hvc3RCYXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJpc0luaXQiLCJpbml0aWFsaXplIiwiYXBpIiwiaW5pdCIsIkxJU1NTeW5jIiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCJjb25uZWN0ZWRDYWxsYmFjayIsImN1c3RvbUVsZW1lbnRzIiwidXBncmFkZSIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwib25DbGlja0V2ZW50Iiwib2JzIiwiZ2V0QXR0cmlidXRlIiwiYWRvcHRlZFN0eWxlU2hlZXRzIiwic2hhcmVkQ1NTIiwiY3Nzc2VsZWN0b3IiLCJDU1NTZWxlY3RvciIsImhhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImh0bWxfc3R5bGVzaGVldHMiLCJydWxlIiwiY3NzUnVsZXMiLCJjc3NUZXh0IiwiaGVhZCIsImFwcGVuZCIsImFkZCIsInRlbXBsYXRlX2VsZW0iLCJzdHIiLCJfIiwibWF0Y2giLCJjaGlsZE5vZGVzIiwib2JqIiwiaGFzU2hhZG93IiwiZ2V0UGFydCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRQYXJ0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJoYXNBdHRyaWJ1dGUiLCJ0YWdOYW1lIiwicmVtb3ZlQXR0cmlidXRlIiwib2JzZXJ2ZWRBdHRyaWJ1dGVzIiwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIiwib2xkVmFsdWUiLCJuZXdWYWx1ZSIsIl9ET01Db250ZW50TG9hZGVkIiwicmVhZHlTdGF0ZSIsImRlZmluZSIsInRhZ25hbWUiLCJDb21wb25lbnRDbGFzcyIsIkNsYXNzIiwiaHRtbHRhZyIsImFsbCIsIkxJU1NjbGFzcyIsIm9wdHMiLCJpbnNlcnRHbG9iYWxDU1NSdWxlcyIsImNzc19zdHlsZSIsInJlcGxhY2VTeW5jIiwiaW5zZXJ0UnVsZSIsIkRFTEVHQVRFRF9FVkVOVFMiLCJBTFJFQURZX1BST0NFU1NFRCIsImV2IiwiaGFuZGxlcnMiLCJ0eXBlIiwiZWxlbSIsImNvbXBvc2VkUGF0aCIsIlNoYWRvd1Jvb3QiLCJ3aW5kb3ciLCJ0YXJnZXQiLCJzZWxlY3RvciIsImhhbmRsZXIiLCJtYXRjaGVzIiwiaW5zZXJ0R2xvYmFsRGVsZWdhdGVkTGlzdGVuZXIiLCJldmVudF9uYW1lIiwiY2xvc2VzdCIsImVsZW1lbnQiLCJyZXN1bHQiLCJyb290IiwiZ2V0Um9vdE5vZGUiLCJidWlsZCIsInBhcmVudCIsImNsYXNzZXMiLCJjc3N2YXJzIiwibGlzdGVuZXJzIiwiQ3VzdG9tQ2xhc3MiLCJ3aGVuRGVmaW5lZCIsInRvTG93ZXJDYXNlIiwiY2xhc3NMaXN0Iiwic2V0UHJvcGVydHkiLCJ0b2dnbGVBdHRyaWJ1dGUiLCJkYXRhc2V0IiwicmVwbGFjZUNoaWxkcmVuIiwiZ2V0TElTUyIsImJ1aWxkU3luYyIsImluaXRpYWxpemVTeW5jIiwiZ2V0TElTU1N5bmMiLCJjYWxsYmFjayIsIndoZW5BbGxEZWZpbmVkIiwidGFnbmFtZXMiLCJpc0RlZmluZWQiLCJnZXROYW1lIiwiX2J1aWxkUVMiLCJ0YWduYW1lX29yX3BhcmVudCIsInFzIiwicXNvIiwicXNhIiwiZWxlbWVudHMiLCJwcm9taXNlcyIsInFzYyIsInJlcyIsInFzU3luYyIsInFzYVN5bmMiLCJxc2NTeW5jIiwiTElTU19BdXRvIiwibmF2aWdhdG9yIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIiwiY29udHJvbGxlciIsInNyYyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwibXV0YXRpb24iLCJhZGRpdGlvbiIsImFkZGVkTm9kZXMiLCJFbGVtZW50Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJyZXNvdXJjZXMiLCJkZWZpbmVXZWJDb21wb25lbnQiLCJmaWxlcyIsImpzIiwia2xhc3MiLCJXZWJDb21wb25lbnQiLCJmaWxlbmFtZXMiLCJmaWxlIiwiZW5kc1dpdGgiLCJfaW1wb3J0IiwiX2ZldGNoVGV4dCIsImkiLCJDc3RtRXZlbnQiLCJDdXN0b21FdmVudCIsImFyZ3MiLCJkZXRhaWwiLCJmZXRjaFJlc291cmNlIiwicmVzb3VyY2UiLCJmZXRjaCIsInVyaSIsImlzTGlzc0F1dG8iLCJvcHRpb25zIiwiaGVhZGVycyIsInJlc3BvbnNlIiwic3RhdHVzIiwiZGVmYXVsdCIsImUiLCJjb25zb2xlIiwibG9nIiwiSFRNTENMQVNTX1JFR0VYIiwiZWxlbWVudE5hbWVMb29rdXBUYWJsZSIsImV4ZWMiLCJGb3JtYXRzIiwic19mb3JtdWxhIiwiZ2V0UmFuZ2UiLCJmb3JtYXQiLCJldXJvcyIsInNfY29tcGxleF9mb3JtdWxhIiwic190eXBlcyIsIkRhdGUiLCJzX2N1cnNvciIsInNfJGZvcm11bGEiLCJzXyRmb3JtIiwicmVmIiwic2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uIiwic2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uX2VtcHR5Iiwic2hlZXRfcmVjb3BpZV9pbmNyIiwiYyIsIlgiLCJ0ZCIsImZvY3VzIiwidGV4dENvbnRlbnQiLCJzdHIyaHRtbCIsIlJhbmdlT3ZlcmxheSIsIkV2ZW50VGFyZ2V0Iiwib3ZlcmxheSIsImNsYXNzbGlzdCIsInVwZGF0ZSIsInNldFJhbmdlIiwicmFuZ2UiLCJwbGFnZV9uYW1lIiwiZ2V0UmVjdCIsInJlY3QiLCJ0b2dnbGUiLCJzZXRSZWN0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkZvcm11bGFSZWYiLCJzZXRDb2xvciIsImNvbG9yX2lkIiwicmVtb3ZlIiwiUmVjb3B5SGFuZGxlIiwieCIsInkiLCJ3IiwiaCIsIkZvcm11bGEiLCJDYWxjU2hlZXQiLCJDZWxsTGlzdCIsIkZvcm1hdE1hbmFnZXIiLCJjdHJsS2V5IiwiY2hhbmdlZCIsImtleSIsInNlbGVjdGlvbiIsInRvZ2dsZUZvcm1hdCIsInNoaWZ0S2V5IiwicG91cmNlbnQiLCJudW1iZXIiLCJwcmV2ZW50RGVmYXVsdCIsImRpc3BhdGNoRXZlbnQiLCJmbG9hdDJEYXRlIiwiZmxvYXQiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImRhdGUyRmxvYXQiLCJkYXRlIiwiYmVnIiwiZ2V0VGltZSIsInRvRml4ZWQiLCJmb3JtYXRSYXciLCJwdGhpcyIsInJhd0NvbnRlbnQiLCJ0b1N0cmluZyIsImNhbGwiLCJjYWNoZWRWYWx1ZSIsInByZWMiLCJ0b1ByZWNpc2lvbiIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImdldFNoZWV0RnJvbUNlbGwiLCJ0b0xvY2FsZVN0cmluZyIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsInNsaWNlIiwiRm9ybWF0IiwiYXBwbHlUbyIsImNlbGwiLCJjZWxscyIsInZhbCIsInIiLCJqIiwicmVsYXRpdmVUbyIsInN0YXJ0c1dpdGgiLCJnZXRQcm9wZXJ0eSIsImhhc1Byb3BlcnR5IiwiZXh0cmFjdEZvcm1hdCIsImYyIiwidmFsdWVzIiwiaXRlbSIsImdldFByb3BlcnR5VmFsdWUiLCJjb2xzcGFuIiwicm93c3BhbiIsInNwYW4iLCJwcmVjaXNpb24iLCJDYWxjRm9ybXVsYSIsInN0YXRlcyIsImNlbGxfZWRpdCIsInN0YXRlIiwic3luY1RvIiwiY3Vyc29yIiwiZmlyc3RDZWxsIiwiaXNSTyIsInJhbmdlc190b2tlbiIsImRyb3ciLCJkY29sIiwibmV3X3JhbmdlcyIsInBvcyIsImNlbGxQb3MiLCJsYXN0SW5kZXhPZiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm5ld19mb3JtdWxhIiwib2Zmc2V0IiwiZW5kIiwicGFyc2VfZm9ybXVsYSIsInJhbmdlc1Rva2VuIiwicmVzZXRDYWNoZSIsImV4dHJhY3RUb2tlbiIsInRva2VuIiwiaGFzQ29tbWEiLCJOb2RlIiwiY2hpbGRyZW4iLCJmY3QiLCJldmFsIiwidG9OdW1iZXIiLCJhIiwiTnVtYmVyIiwib3BfaW1wbCIsImIiLCJNYXRoIiwicG93Iiwib3BfcHJpbyIsIm9wcyIsIm9wIiwidG9rZW5saXN0MlRyZWUiLCJ0b2tlbnMiLCJuYiIsInJhdyIsImN1ciIsInByaW9yaXR5IiwiZmluZEluZGV4IiwidV9vcCIsIm9wX3Rva2VuIiwibGVmdCIsInJpZ2h0IiwiY3VyVG9rZW4iLCJub2RlIiwicmFuZ2VzIiwiZmlsdGVyIiwiUGxhZ2VGb3JtdWxhIiwiY29kZSIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInNlbGVjdGVkIiwiZ2V0Q2VsbHMiLCJjbGVhciIsImJsdXIiLCJQbGFnZVNlbGVjdG9yIiwic2VsZWN0ZWRfY2VsbHMiLCJjb2xzIiwidGJvZHkiLCJjb2xfaWQiLCJjbGllbnRYIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwicm93cyIsInJvd19pZCIsImNsaWVudFkiLCJtYWluIiwib25fbW91c2VfbW92ZSIsInJlcGxhY2VBbGwiLCJnZXRWaXNpYmxlQ2VsbCIsInBvczJyZWYiLCJuYlJvd3MiLCJuYkNvbHMiLCJvbmNlIiwiaXNBY3RpdmUiLCJvbklucHV0IiwicnJhbmdlIiwiZ2V0U2VsZWN0aW9uIiwiZ2V0UmFuZ2VBdCIsInN0YXJ0T2Zmc2V0IiwiY2hpbGQiLCJub2RlVHlwZSIsIlRFWFRfTk9ERSIsInN0YXJ0Q29udGFpbmVyIiwiY3JlYXRlUmFuZ2UiLCJzZWwiLCJzZXRTdGFydCIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJwYXJzZUlucHV0IiwidGVzdF9udW1iZXIiLCJpc05hTiIsInBhcnRzIiwic3BsaXQiLCJ0ZXN0X2RhdGUiLCJnZXRGdWxsWWVhciIsIlN0YXRlIiwicHJldl9zdGF0ZSIsIlN0YXRlcyIsImVudHJpZXMiLCJzIiwidGJsX29mZnNldCIsIm9mZnNldFRvcCIsInN0YXJ0Iiwib2Zmc2V0TGVmdCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0Iiwicm93X2RpZmYiLCJjb2xfZGlmZiIsInJvdyIsImNvbCIsInJlY29weSIsImNvcHkiLCJsYXN0X3JlY29weV90YXJnZXQiLCJsYXN0X3JlY29weV9kaXIiLCJvbl9yZWNvcHlfbW92ZSIsImRfcHgiLCJ3aWR0aCIsImRfcHkiLCJoZWlnaHQiLCJkX3giLCJkX3kiLCJzaWduIiwiYWJzIiwicHJldiIsImRpZmZfeCIsImRpZmZfeSIsInBvc19jdXIiLCJjbGFzc05hbWUiLCJmb3JtdWxhX2JhciIsInBsYWdlIiwiZm9ybXVsYSIsInJvIiwiaXNfcm8iLCJkX3JvdyIsImRfY29sIiwibmV4dCIsImFsdEtleSIsImRzdCIsImRlZXBDbG9uZSIsImRlbGV0ZUZvcm1hdCIsImRlbGV0ZUNvbnRlbnQiLCJidWJibGVzIiwib25JbnB1dDIiLCJyYW5nZXNfY29sb3JzIiwiY3VyX29mZnNldCIsInJhbmdlX25hbWUiLCJyYW5nZXNfbmFtZXMiLCJrZXlzIiwid2FybiIsInBhcmVudEVsZW1lbnQiLCJyZXNpemUiLCJuYnJvd3MiLCJuYmNvbHMiLCJjb2xfaHRtbCIsImNvbGdyb3VwIiwidGgiLCJyb3dfaHRtbCIsInNldENvbFNpemUiLCJzaXplIiwicmVmMnBvcyIsImh0bWwiLCJ0YWJsZSIsInJlc2l6ZU9icyIsIlJlc2l6ZU9ic2VydmVyIiwiZnJvbSIsInRvIiwiSFRNTFRhYmxlQ2VsbEVsZW1lbnQiLCJiZWdfcm93IiwiYmVnX2NvbCIsImVuZF9yb3ciLCJlbmRfY29sIiwiZW5kX2xpbmVfY29sIiwic2VwIiwic2VhcmNoIiwiY2hhckNvZGVBdCIsImNvbF9zdHIiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNvcnQiLCJtaW4iLCJtYXgiLCJuYl9jb2xzIiwiZmxvb3IiLCJmIiwiaXNGb3JtYXQiLCJyYXdfdmFsIiwidiIsImRpZmYiLCJmb3JtYXRzIiwibmJfZGF0ZXMiLCJpbmRleE9mIiwic2V0Uk8iLCJjbG9uZSIsImNsb25lTm9kZSIsInNuYW1lIiwicGF0aCIsInJvb3RfcGF0aCIsImhvc3RuYW1lIiwicGFnZXMiLCJoZWFkZXIiLCJ0aXRsZXMiLCJodHJlZSIsImxldmVsIiwiaHRyZWVfY3Vyc29yIiwidGl0bGUiLCJzZWFyY2hDdXJIZWFkZXIiLCJwb3NpdGlvbiIsImhpZCIsImdldFRpdGxlUHJlZml4IiwibnVtIiwiYnVpbGRNZW51Iiwibm9kZXMiLCJtZW51IiwidXBkYXRlSGVhZGVyIiwibGFzdCIsInNjcm9sbFRvcCIsInJldmVyc2UiLCJobm9kZSIsImhfaHRtbCIsImxpbmsiLCJlbXB0eSIsIm1ha2VfcGFnZV9ocmVmIiwicGF0aHByZWZpeCIsImRlc2MiLCJocmVmIiwibWFrZV9wYWdlX21lbnUiLCJmaW5kIiwicGFnZSIsImN1cnBhZ2UiLCJtb2R1bGVfaHRtbCIsInR5cGVfaHRtbCIsImRlc2NfdHlwZSIsImRlc2MyX2lkeCIsImJvZHkiLCJzZXNzaW9uX2h0bWwiLCJ0ZW1wbGF0ZSIsInN0cjJERiJdLCJzb3VyY2VSb290IjoiIn0=