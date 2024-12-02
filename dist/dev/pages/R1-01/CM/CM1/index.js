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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxFQUFFO1VBQ0Y7VUFDQSxzR0FBc0c7VUFDdEc7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxHQUFHO1VBQ0g7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLEdBQUc7VUFDSDtVQUNBLEVBQUU7VUFDRjtVQUNBOzs7OztVQ2hFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLHlDQUF5Qyx3Q0FBd0M7VUFDakY7VUFDQTtVQUNBOzs7OztVQ1BBOzs7OztVQ0FBO1VBQ0E7VUFDQTtVQUNBLHVEQUF1RCxpQkFBaUI7VUFDeEU7VUFDQSxnREFBZ0QsYUFBYTtVQUM3RDs7Ozs7VUNOQTs7Ozs7U0VBQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTEvaW5kZXguY3NzPzFlMzYiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00xL2luZGV4Lm1kIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9Db3Vycy8uL2xpYnMvTElTUy9pbmRleC50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvUmFuZ2VPdmVybGF5LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL2Zvcm1hdC50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9mb3JtdWxhX2VkaXRvci50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9mb3JtdWxhX3BhcnNlci50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9wbGFnZV9lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvcGxhZ2Vfc2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvc2hlZXQudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L21lbnUudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L3V0aWxzL3N0cjJodG1sLnRzIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9hc3luYyBtb2R1bGUiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInBhZ2VzL1IxLTAxL0NNL0NNMS9pbmRleC5odG1sXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI6aG9zdCB0YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcbiAgICAmID4gdGJvZHkge1xcbiAgICAgICAgb3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICB9XFxuXFxuICAgICYgPiB0Ym9keSA+IHRyOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgXFxuICAgICAgICAmID4gdGgge1xcbiAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbjpob3N0IDppcyh0cix0aCx0ZCkge1xcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjMGMwYzA7XFxufVxcblxcbjpob3N0KFtzaG93Z3JpZD1cXFwiZmFsc2VcXFwiXSkgdGQge1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG46aG9zdCB0ciB7XFxuICAgIGhlaWdodDogMC40NWNtO1xcbiAgICBsaW5lLWhlaWdodDogMC40NWNtO1xcbn1cXG5cXG5cXG46aG9zdCA6aXModGQsIHRoKTpub3QoW2NvbnRlbnRlZGl0YWJsZV0pIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi8qXFxuOmhvc3QgdGRbY29udGVudGVkaXRhYmxlXSB7XFxuICAgIHVzZXItc2VsZWN0OiB0ZXh0O1xcbn0qL1xcblxcbjpob3N0IGNvbGdyb3VwID4gY29sIHtcXG4gICAgd2lkdGg6IDIuMjZjbTtcXG59XFxuOmhvc3QgY29sZ3JvdXAgPiBjb2w6Zmlyc3QtY2hpbGQge1xcbiAgICB3aWR0aDogY2FsYyggMi4yNmNtIC8gMi41KSA7XFxufVxcblxcbjpob3N0IDppcyh0ZCwgdGgpIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDAuNDVjbTtcXG5cXG4gICAgZm9udC1zaXplOiAxMHB0O1xcblxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ0xpYmVyYXRpb24gU2Fucyc7XFxufVxcblxcblxcbjpob3N0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbjpob3N0IGRpdi50b29sYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG5cXG4gICAgJiA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICAgICAgZmxleDogMSAxIDA7XFxuICAgIH1cXG4gICAgJiA+ICo6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgd2lkdGg6IGNhbGMoIDEuNSAqIDIuMjZjbSApO1xcbiAgICB9XFxufVxcblxcbjpob3N0IHRoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOGE4YThhO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcblxcbiAgICAmLmhpZ2hsaWdodCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk4ZWU3O1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxufVxcblxcbjpob3N0KC5jZWxsX2VkaXQpIC5jdXJzb3Ige1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG46aG9zdCgucmVjb3B5KSB7XFxuICAgIGN1cnNvcjogY2VsbDtcXG59XFxuXFxuOmhvc3Qge1xcblxcbiAgICAucmVjb3B5IHtcXG4gICAgICAgIGN1cnNvcjogY2VsbDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzOThlZTc7XFxuICAgIH1cXG5cXG4gICAgLmN1cnNvciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzM5OGVlNztcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB9XFxufVxcblxcbjpob3N0IC5vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46aG9zdCAuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuOmhvc3QgLnNlbGVjdGlvbl9oaWdobGlnaHQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk4ZWU3OyAvKiNjZGUzZjk7Ki9cXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgLyogVE9ETyAqL1xcbn1cXG5cXG5cXG46aG9zdCB0ZCB7XFxuXFxuICAgIC0tZm9udF9zaXplOiAxMHB0O1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRfc2l6ZSk7XFxuICAgIGxpbmUtaGVpZ2h0OiBjYWxjKCB2YXIoLS1mb250X3NpemUpICogMS4yICk7XFxuXFxuICAgIC0taW5kZW50OiAwO1xcblxcbiAgICAtLWJvcmRlcl9jb2xvcjogYmxhY2s7XFxuICAgIC0tYmFja2dyb3VuZF9jb2xvcjogd2hpdGU7XFxuICAgIC0tZm9yZWdyb3VuZF9jb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmRfY29sb3IpO1xcbiAgICBjb2xvciAgICAgICAgICAgOiB2YXIoLS1mb3JlZ3JvdW5kX2NvbG9yKTtcXG5cXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcXG5cXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG5cXG4gICAgJjppcyhbZGF0YS10eXBlPVxcXCJudW1iZXJcXFwiXSxbZGF0YS10eXBlPVxcXCJwb3VyY2VudFxcXCJdLFtkYXRhLXR5cGU9XFxcImRhdGVcXFwiXSwgW2RhdGEtdHlwZT1cXFwiYm9vbGVhblxcXCJdKSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgfVxcblxcbiAgICAmW2NvbnRlbnRlZGl0YWJsZV0ge1xcbiAgICAgICAgb3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICB9XFxuXFxuICAgICYuYWp1c3RlciB7XFxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgICB9XFxuXFxuICAgIC8qKiBzdHlsZSAqKi9cXG4gICAgJi5pdGFsaWMge1xcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICB9XFxuICAgICYuYm9sZCB7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcbiAgICAmLnVuZGVybGluZSB7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgfVxcbiAgICAmLmFsaWduX2xlZnQge1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKCB2YXIoLS1pbmRlbnQpICogMTBweCk7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB9XFxuICAgICYuYWxpZ25fY2VudGVyIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAmLmFsaWduX3JpZ2h0IHtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGMoIHZhcigtLWluZGVudCkgKiAxMHB4KTtcXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICB9XFxuICAgICYudmFsaWduX3RvcCB7XFxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICB9XFxuICAgICYudmFsaWduX21pZGRsZSB7XFxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB9XFxuICAgICYudmFsaWduX2JvdHRvbSB7XFxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgICB9XFxuICAgIC8qIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEyNDE3NTcvYXBwbHlpbmctYm9yZGVycy10by1hLXNpbmdsZS10YWJsZS1jZWxsLXdoZW4tdXNpbmctYm9yZGVyLWNvbGxhcHNlICovXFxuICAgICYuYm9yZGVyX3RvcCB7XFxuICAgICAgICBib3JkZXItdG9wOiAxcHggZG91YmxlIHZhcigtLWJvcmRlcl9jb2xvcik7XFxuICAgIH1cXG4gICAgJi5ib3JkZXJfYm90dG9tIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3VibGUgdmFyKC0tYm9yZGVyX2NvbG9yKTtcXG4gICAgfVxcbiAgICAmLmJvcmRlcl9sZWZ0IHtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggZG91YmxlIHZhcigtLWJvcmRlcl9jb2xvcik7XFxuICAgIH1cXG4gICAgJi5ib3JkZXJfcmlnaHQge1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggZG91YmxlIHZhcigtLWJvcmRlcl9jb2xvcik7XFxuICAgIH1cXG59XFxuXFxuOmhvc3Qge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbjpob3N0IC5yYW5nZV9oaWdobGlnaHQge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taGlnaGxpZ2h0X2NvbG9yKTtcXG59XFxuXFxuOmhvc3QgLmZvcm11bGFfaGlnaGxpZ2h0IHtcXG4gICAgY29sb3I6IHZhcigtLWhpZ2hsaWdodF9jb2xvcik7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfMCB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjZmEwYzBjO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzEge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogI2ZhMGNmYTtcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF8yIHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICMwYzg0MGM7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfMyB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjMDEwMTgwO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzQge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzg3MTcxNztcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF81IHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICM4NzE3ODc7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfNiB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjODQ4NDBjO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0Xzcge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzBjMGNmYTtcXG59XFxuXFxuXFxuLmNvcHlfaGlnaGxpZ2h0IHtcXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLyogVG9tb3Jyb3cgVGhlbWUgKi9cXG4vKiBodHRwOi8vam1ibG9nLmdpdGh1Yi5jb20vY29sb3ItdGhlbWVzLWZvci1nb29nbGUtY29kZS1oaWdobGlnaHRqcyAqL1xcbi8qIE9yaWdpbmFsIHRoZW1lIC0gaHR0cHM6Ly9naXRodWIuY29tL2Nocmlza2VtcHNvbi90b21vcnJvdy10aGVtZSAqL1xcblxcbi8qIFRvbW9ycm93IENvbW1lbnQgKi9cXG4uaGxqcy1jb21tZW50LFxcbi5obGpzLXF1b3RlIHtcXG5cXHRjb2xvcjogIzhlOTA4YztcXG59XFxuXFxuLyogVG9tb3Jyb3cgUmVkICovXFxuLmhsanMtdmFyaWFibGUsXFxuLmhsanMtdGVtcGxhdGUtdmFyaWFibGUsXFxuLmhsanMtdGFnLFxcbi5obGpzLW5hbWUsXFxuLmhsanMtc2VsZWN0b3ItaWQsXFxuLmhsanMtc2VsZWN0b3ItY2xhc3MsXFxuLmhsanMtcmVnZXhwLFxcbi5obGpzLWRlbGV0aW9uIHtcXG5cXHRjb2xvcjogI2M4MjgyOTtcXG59XFxuXFxuLyogVG9tb3Jyb3cgT3JhbmdlICovXFxuLmhsanMtbnVtYmVyLFxcbi5obGpzLWJ1aWx0X2luLFxcbi5obGpzLWJ1aWx0aW4tbmFtZSxcXG4uaGxqcy1saXRlcmFsLFxcbi5obGpzLXR5cGUsXFxuLmhsanMtcGFyYW1zLFxcbi5obGpzLW1ldGEsXFxuLmhsanMtbGluayB7XFxuXFx0Y29sb3I6ICNmNTg3MWY7XFxufVxcblxcbi8qIFRvbW9ycm93IFllbGxvdyAqL1xcbi5obGpzLWF0dHJpYnV0ZSB7XFxuXFx0Y29sb3I6ICNlYWI3MDA7XFxufVxcblxcbi8qIFRvbW9ycm93IEdyZWVuICovXFxuLmhsanMtc3RyaW5nLFxcbi5obGpzLXN5bWJvbCxcXG4uaGxqcy1idWxsZXQsXFxuLmhsanMtYWRkaXRpb24ge1xcblxcdGNvbG9yOiAjNzE4YzAwO1xcbn1cXG5cXG4vKiBUb21vcnJvdyBCbHVlICovXFxuLmhsanMtdGl0bGUsXFxuLmhsanMtc2VjdGlvbiB7XFxuXFx0Y29sb3I6ICM0MjcxYWU7XFxufVxcblxcbi8qIFRvbW9ycm93IFB1cnBsZSAqL1xcbi5obGpzLWtleXdvcmQsXFxuLmhsanMtc2VsZWN0b3ItdGFnIHtcXG5cXHRjb2xvcjogIzg5NTlhODtcXG59XFxuXFxuLmhsanMge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdG92ZXJmbG93LXg6IGF1dG87XFxuXFx0Y29sb3I6ICM0ZDRkNGM7XFxuXFx0cGFkZGluZzogMC41ZW07XFxufVxcblxcbi5obGpzLWVtcGhhc2lzIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5obGpzLXN0cm9uZyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiOyIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgZXhwb3J0ZWQgdHlwZXMgPT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLypcbnR5cGUgUzxBLEI+ID0ge1xuXHRBOiBBLFxuXHRCOiBCXG59O1xudHlwZSBMSCA9IFM8dW5rbm93bix1bmtub3duPjtcblxudHlwZSBpbmZlckE8VD4gPSBUIGV4dGVuZHMgUzxpbmZlciBBLCBhbnk+ID8gQSA6IG5ldmVyO1xuXG5mdW5jdGlvbiBmb288VCBleHRlbmRzIExIPih0OiBUKTogaW5mZXJBPFQ+IHtcblx0cmV0dXJuIHQuQSBhcyBpbmZlckE8VD47XG59XG5cbmxldCBYID0ge1xuXHRBOiAzMixcblx0QjogXCJzdHJcIlxufTtcblxubGV0IGMgPSBmb28oWCk7XG4qL1xuXG5leHBvcnQgdHlwZSBDU1NfUmVzb3VyY2UgPSBzdHJpbmd8UmVzcG9uc2V8SFRNTFN0eWxlRWxlbWVudHxDU1NTdHlsZVNoZWV0O1xuZXhwb3J0IHR5cGUgQ1NTX1NvdXJjZSAgID0gQ1NTX1Jlc291cmNlIHwgUHJvbWlzZTxDU1NfUmVzb3VyY2U+O1xuXG5leHBvcnQgdHlwZSBIVE1MX1Jlc291cmNlID0gc3RyaW5nfFJlc3BvbnNlfEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XG5leHBvcnQgdHlwZSBIVE1MX1NvdXJjZSAgID0gSFRNTF9SZXNvdXJjZSB8IFByb21pc2U8SFRNTF9SZXNvdXJjZT47XG5cbmV4cG9ydCB0eXBlIExJU1NPcHRpb25zPEV4dGVuZHMgICAgZXh0ZW5kcyBDbGFzcyxcblx0XHRcdFx0XHRcdEhvc3QgICAgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHRcdEF0dHJzICAgICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0XHRQYXJhbWV0ZXJzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4gPSB7XG5cblx0ZXh0ZW5kcz86IENvbnN0cnVjdG9yPEV4dGVuZHM+LFxuXHRob3N0ICAgPzogQ29uc3RydWN0b3I8SG9zdD4sXG5cblx0ZGVwZW5kZW5jaWVzPzogcmVhZG9ubHkgUHJvbWlzZTxhbnk+W10sXG5cdGF0dHJpYnV0ZXMgID86IHJlYWRvbmx5IEF0dHJzW10sXG5cdHBhcmFtcyAgICAgID86IFJlYWRvbmx5PFBhcmFtZXRlcnM+LFxuXG5cdGNvbnRlbnQ/OiBIVE1MX1NvdXJjZSxcblx0Y3NzICAgID86ICBDU1NfU291cmNlIHwgcmVhZG9ubHkgQ1NTX1NvdXJjZVtdLFxuXHRzaGFkb3cgPzogIFNoYWRvd0NmZyxcbn07XG5cbmV4cG9ydCBlbnVtIFNoYWRvd0NmZyB7XG5cdE5PTkUgPSAnbm9uZScsXG5cdE9QRU4gPSAnb3BlbicsIFxuXHRDTE9TRT0gJ2Nsb3NlZCdcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgQ2xhc3MgPT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxubGV0IF9fY3N0cl9ob3N0ICA6IGFueSA9IG51bGw7XG5cbnR5cGUgQ29uc3RydWN0b3I8VD4gPSBuZXcgKCkgPT4gVDtcbmludGVyZmFjZSBDbGFzcyB7fVxuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9hdHRhY2hTaGFkb3dcbmNvbnN0IENBTl9IQVZFX1NIQURPVyA9IFtcblx0bnVsbCwgJ2FydGljbGUnLCAnYXNpZGUnLCAnYmxvY2txdW90ZScsICdib2R5JywgJ2RpdicsXG5cdCdmb290ZXInLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnaGVhZGVyJywgJ21haW4nLFxuXHQnbmF2JywgJ3AnLCAnc2VjdGlvbicsICdzcGFuJ1xuXHRcbl07XG5mdW5jdGlvbiBfY2FuSGFzU2hhZG93KHRhZzogdHlwZW9mIEhUTUxFbGVtZW50KSB7XG5cdHJldHVybiBDQU5fSEFWRV9TSEFET1cuaW5jbHVkZXMoIF9lbGVtZW50MnRhZ25hbWUodGFnKSApO1xufVxuXG50eXBlIFJlc291cmNlID0gVVJMfFJlc3BvbnNlO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExJU1M8RXh0ZW5kcyAgICBleHRlbmRzIENsYXNzICAgICAgICAgICAgICA9IENsYXNzLFxuXHRcdFx0XHRcdFx0XHQgSG9zdCAgICAgICBleHRlbmRzIEhUTUxFbGVtZW50ICAgICAgICA9IEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdFx0XHQgQXR0cnMgICAgICBleHRlbmRzIHN0cmluZyAgICAgICAgICAgICA9IG5ldmVyLFxuXHRcdFx0XHRcdFx0XHQgUGFyYW1ldGVycyBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55PiA9IHt9Pih7XG5cdFx0XHRcdFx0XHRcdFx0ZXh0ZW5kcyAgICAgOiBwX2V4dGVuZHMsXG5cdFx0XHRcdFx0XHRcdFx0aG9zdCAgICAgICAgOiBwX2hvc3QsXG5cdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jaWVzOiBwX2RlcHMsXG5cdFx0XHRcdFx0XHRcdCAgICBhdHRyaWJ1dGVzICA6IHBfYXR0cnMsXG5cdFx0XHRcdFx0XHRcdCAgICBwYXJhbXMsXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudCxcblx0XHRcdFx0XHRcdFx0XHRjc3MsXG5cdFx0XHRcdFx0XHRcdFx0c2hhZG93ICAgICAgOiBwX3NoYWRvdyxcblx0XHRcdFx0XHRcdFx0fTogTElTU09wdGlvbnM8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtZXRlcnM+ID0ge30pIHtcblxuXHQvL1RPRE8gbWVyZ2UgcHJvcCBpZiBleHRlbmRzIExJU1MuLi5cblxuXHRjb25zdCBob3N0ICAgICAgICA9IHBfaG9zdCAgICA/PyBIVE1MRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxIb3N0Pjtcblx0Y29uc3QgX2V4dGVuZHMgICAgPSBwX2V4dGVuZHMgPz8gT2JqZWN0ICAgICAgYXMgdW5rbm93biBhcyBDb25zdHJ1Y3RvcjxFeHRlbmRzPjtcblx0Y29uc3QgYXR0cmlidXRlcyAgPSBwX2F0dHJzICAgPz8gW107XG5cdGNvbnN0IGRlcGVuZGVuY2llcz0gcF9kZXBzICAgID8gWy4uLnBfZGVwc10gOiBbXTtcblx0Y29uc3QgY2FuSGFzU2hhZG93PSBfY2FuSGFzU2hhZG93KGhvc3QpO1xuXHRjb25zdCBzaGFkb3cgICAgICA9IHBfc2hhZG93ICA/PyAoY2FuSGFzU2hhZG93ID8gU2hhZG93Q2ZnLkNMT1NFIDogU2hhZG93Q2ZnLk5PTkUpO1xuXG5cdGlmKCAhIGNhbkhhc1NoYWRvdyAmJiBzaGFkb3cgIT09IFNoYWRvd0NmZy5OT05FKVxuXHRcdHRocm93IG5ldyBFcnJvcihgSG9zdCBlbGVtZW50ICR7X2VsZW1lbnQydGFnbmFtZShob3N0KX0gZG9lcyBub3Qgc3VwcG9ydCBTaGFkb3dSb290YCk7XG5cblx0Ly8gQ09OVEVOVCBwcm9jZXNzaW5nXG5cdGlmKCBjb250ZW50ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRkZXBlbmRlbmNpZXMucHVzaCggKCBhc3luYyAoKSA9PiB7XG5cblx0XHRcdGNvbnRlbnQgPSBhd2FpdCBjb250ZW50O1xuXG5cdFx0XHRpZihjb250ZW50IGluc3RhbmNlb2YgSFRNTFRlbXBsYXRlRWxlbWVudClcblx0XHRcdGNvbnRlbnQgPSBjb250ZW50LmlubmVySFRNTDtcblxuXHRcdFx0aWYoIHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB7XG5cblx0XHRcdFx0Y29udGVudCA9IGNvbnRlbnQudHJpbSgpOyAvLyBOZXZlciByZXR1cm4gYSB0ZXh0IG5vZGUgb2Ygd2hpdGVzcGFjZSBhcyB0aGUgcmVzdWx0XG5cdFx0XHRcdGlmKGNvbnRlbnQgPT09ICcnKVxuXHRcdFx0XHRcdGNvbnRlbnQgPSB1bmRlZmluZWQ7XG5cblx0XHRcdH1cblx0XHRcdGlmKCBjb250ZW50IGluc3RhbmNlb2YgUmVzcG9uc2UgKVxuXHRcdFx0XHRjb250ZW50ID0gYXdhaXQgY29udGVudC50ZXh0KCk7XG5cblx0XHRcdHJldHVybiBMSVNTQmFzZS5QYXJhbWV0ZXJzLmNvbnRlbnQgPSBjb250ZW50O1xuXHRcdH0pKCkgKTtcblx0fVxuXG5cdC8vIENTUyBwcm9jZXNzaW5nXG5cdGxldCBzdHlsZXNoZWV0czogcmVhZG9ubHkgQ1NTU3R5bGVTaGVldFtdID0gW107XG5cdGlmKCBjc3MgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdGlmKCAhIEFycmF5LmlzQXJyYXkoY3NzKSApXG5cdFx0XHRjc3MgPSBbY3NzIGFzIENTU19Tb3VyY2VdO1xuXG5cdFx0c3R5bGVzaGVldHMgPSBuZXcgQXJyYXk8Q1NTU3R5bGVTaGVldD4oY3NzLmxlbmd0aCk7XG5cblx0XHRjb25zdCBmZXRjaF9jc3MgPSAoYXN5bmMgKGNzczogQ1NTX1NvdXJjZSkgPT4ge1xuXHRcdFx0Y3NzID0gYXdhaXQgY3NzO1xuXHRcdFx0aWYoY3NzIGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldClcblx0XHRcdFx0cmV0dXJuIGNzcztcblx0XHRcdGlmKCBjc3MgaW5zdGFuY2VvZiBIVE1MU3R5bGVFbGVtZW50KVxuXHRcdFx0XHRyZXR1cm4gY3NzLnNoZWV0ITtcblxuXHRcdFx0bGV0IHN0eWxlID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcblx0XHRcdGlmKCB0eXBlb2YgY3NzID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0XHRhd2FpdCBzdHlsZS5yZXBsYWNlKGNzcyk7XG5cdFx0XHRcdHJldHVybiBzdHlsZTtcblx0XHRcdH1cblxuXHRcdFx0Ly9pZiggY3NzIGluc3RhbmNlb2YgUmVzcG9uc2UgKVxuXHRcdFx0YXdhaXQgc3R5bGUucmVwbGFjZShhd2FpdCBjc3MudGV4dCgpKTtcblx0XHRcdHJldHVybiBzdHlsZTtcblx0XHR9KTtcblxuXHRcdGRlcGVuZGVuY2llcy5wdXNoKCAuLi5jc3MubWFwKCBhc3luYyAoY3NzLCBpZHgpID0+ICAoc3R5bGVzaGVldHMgYXMgYW55KVtpZHhdID0gYXdhaXQgZmV0Y2hfY3NzKGNzcykgKSApO1xuXHR9XG5cblx0dHlwZSBMSG9zdCA9IExJU1NIb3N0PExJU1NCYXNlPjtcblxuXHQvLyBAdHMtaWdub3JlXG5cdGNsYXNzIExJU1NCYXNlIGV4dGVuZHMgX2V4dGVuZHMge1xuXG5cdFx0cmVhZG9ubHkgI2hvc3Q6IGFueTsgLy8gcHJldmVudHMgaXNzdWUgIzEuLi5cblxuXHRcdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0XHRzdXBlcigpO1xuXG5cdFx0XHQvLyBoNGNrLCBva2F5IGJlY2F1c2UgSlMgaXMgbW9ub3RocmVhZGVkLlxuXHRcdFx0aWYoIF9fY3N0cl9ob3N0ID09PSBudWxsIClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGRvIG5vdCBkaXJlY3RseSBjYWxsIHRoaXMgY29uc3RydWN0b3JcIik7XG5cdFx0XHR0aGlzLiNob3N0ID0gX19jc3RyX2hvc3Q7XG5cdFx0XHRfX2NzdHJfaG9zdCA9IG51bGw7XG5cdFx0fVxuXG5cdFx0cHVibGljIGdldCBob3N0KCk6IEhvc3Qge1xuXHRcdFx0cmV0dXJuIHRoaXMuI2hvc3Q7XG5cdFx0fVxuXHRcdHByb3RlY3RlZCBnZXQgYXR0cnMoKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuI2hvc3QgYXMgTEhvc3QpLmF0dHJzO1xuXHRcdH1cblx0XHRwcm90ZWN0ZWQgc2V0QXR0ckRlZmF1bHQoIGF0dHI6IEF0dHJzLCB2YWx1ZTogc3RyaW5nfG51bGwpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkuc2V0QXR0ckRlZmF1bHQoYXR0ciwgdmFsdWUpO1xuXG5cdFx0fVxuXHRcdHB1YmxpYyBnZXQgcGFyYW1zKCk6IFJlYWRvbmx5PFBhcmFtZXRlcnM+IHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkucGFyYW1zO1xuXHRcdH1cblx0XHRwdWJsaWMgc2V0UGFyYW08VCBleHRlbmRzIGtleW9mIFBhcmFtZXRlcnM+KG5hbWU6IFQsIHZhbHVlOiBQYXJhbWV0ZXJzW1RdKSB7XG5cdFx0XHQodGhpcy4jaG9zdCBhcyBMSG9zdCkucGFyYW1zW25hbWVdID0gdmFsdWU7XG5cdFx0fVxuXHRcdHByb3RlY3RlZCBnZXQgY29udGVudCgpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkuY29udGVudCE7XG5cdFx0fVxuXG5cdFx0c3RhdGljIHJlYWRvbmx5IFBhcmFtZXRlcnMgPSB7XG5cdFx0XHRob3N0LFxuXHRcdFx0ZGVwZW5kZW5jaWVzLFxuXHRcdFx0YXR0cmlidXRlcyxcblx0XHRcdHBhcmFtcyxcblx0XHRcdGNvbnRlbnQsXG5cdFx0XHRzdHlsZXNoZWV0cyxcblx0XHRcdHNoYWRvdyxcblx0XHR9O1xuXG5cdFx0cHJvdGVjdGVkIG9uQXR0ckNoYW5nZWQoX25hbWU6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0XHRfb2xkVmFsdWU6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0XHRfbmV3VmFsdWU6IHN0cmluZyk6IHZvaWR8ZmFsc2Uge31cblxuXHRcdHB1YmxpYyBnZXQgaXNJbkRPTSgpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkuaXNJbkRPTTtcblx0XHR9XG5cdFx0cHJvdGVjdGVkIG9uRE9NQ29ubmVjdGVkKCkge31cblx0XHRwcm90ZWN0ZWQgb25ET01EaXNjb25uZWN0ZWQoKSB7fVxuXHR9XG5cblx0cmV0dXJuIExJU1NCYXNlO1xufVxuXG4vL1RPRE86IG90aGVyIG9wdGlvbnMuLi5cbmZ1bmN0aW9uIGV4dGVuZHNMSVNTPEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0SG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRBdHRyczEgICBleHRlbmRzIHN0cmluZyxcblx0QXR0cnMyICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4sXG5cdFQgZXh0ZW5kcyBMSVNTUmV0dXJuVHlwZTxFeHRlbmRzLCBIb3N0LCBBdHRyczEsIFBhcmFtcz4+KExpc3M6IFQsXG5cdFx0cGFyYW1ldGVyczoge1xuXHRcdFx0c2hhZG93ICAgICAgPzogU2hhZG93Q2ZnLFxuXHRcdFx0YXR0cmlidXRlcyAgPzogcmVhZG9ubHkgQXR0cnMyW10sXG5cdFx0XHRkZXBlbmRlbmNpZXM/OiByZWFkb25seSBQcm9taXNlPGFueT5bXVxuXHRcdH0pIHtcblxuXHRjb25zdCBhdHRyaWJ1dGVzICAgPSBbLi4uTGlzcy5QYXJhbWV0ZXJzLmF0dHJpYnV0ZXMgICwgLi4ucGFyYW1ldGVycy5hdHRyaWJ1dGVzICA/P1tdXTtcblx0Y29uc3QgZGVwZW5kZW5jaWVzID0gWy4uLkxpc3MuUGFyYW1ldGVycy5kZXBlbmRlbmNpZXMsIC4uLnBhcmFtZXRlcnMuZGVwZW5kZW5jaWVzPz9bXV07XG5cblx0Y29uc3QgcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgTGlzcy5QYXJhbWV0ZXJzLCB7XG5cdFx0YXR0cmlidXRlcyxcblx0XHRkZXBlbmRlbmNpZXNcblx0fSk7XG5cdGlmKCBwYXJhbWV0ZXJzLnNoYWRvdyAhPT0gdW5kZWZpbmVkKVxuXHRcdHBhcmFtcy5zaGFkb3cgPSBwYXJhbWV0ZXJzLnNoYWRvdztcblxuXHQvLyBAdHMtaWdub3JlIDogYmVjYXVzZSBUUyBzdHVwaWRcblx0Y2xhc3MgRXh0ZW5kZWRMSVNTIGV4dGVuZHMgTGlzcyB7XG5cdFx0Y29uc3RydWN0b3IoLi4udDogYW55W10pIHtcblx0XHRcdC8vIEB0cy1pZ25vcmUgOiBiZWNhdXNlIFRTIHN0dXBpZFxuXHRcdFx0c3VwZXIoLi4udCk7XG5cdFx0fVxuXG5cdFx0cHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhdHRycygpIHtcblx0XHRcdHJldHVybiBzdXBlci5hdHRycyBhcyBSZWNvcmQ8QXR0cnMyfEF0dHJzMSwgc3RyaW5nfG51bGw+O1xuXHRcdH1cblxuXHRcdHN0YXRpYyBvdmVycmlkZSBQYXJhbWV0ZXJzID0gcGFyYW1zO1xuXHR9XG5cblx0cmV0dXJuIEV4dGVuZGVkTElTUztcbn1cbkxJU1MuZXh0ZW5kc0xJU1MgPSBleHRlbmRzTElTUztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyB0eXBlIGhlbHBlcnMgPT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIGJ1aWxkTElTU0hvc3RSZXR1cm5UeXBlPFQ+ICA9IFQgZXh0ZW5kcyBMSVNTUmV0dXJuVHlwZTxpbmZlciBFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbmZlciBIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbmZlciBBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5mZXIgUGFyYW1zICBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gUmV0dXJuVHlwZTx0eXBlb2YgYnVpbGRMSVNTSG9zdDxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zLCBUPj4gOiBuZXZlcjtcblxuZXhwb3J0IHR5cGUgTElTU1JldHVyblR5cGU8XG5cdEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0SG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+PiA9IFJldHVyblR5cGU8dHlwZW9mIExJU1M8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcz4+O1xuZXhwb3J0IHR5cGUgTElTU0Jhc2U8RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdCBIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0IEF0dHJzICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0IFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4+ID0gSW5zdGFuY2VUeXBlPExJU1NSZXR1cm5UeXBlPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXM+PjtcbmV4cG9ydCB0eXBlIExJU1NIb3N0PExJU1MgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+ID4gPSBJbnN0YW5jZVR5cGU8YnVpbGRMSVNTSG9zdFJldHVyblR5cGU8Q29uc3RydWN0b3I8TElTUz4gJiB7UGFyYW1ldGVyczogYW55fT4+O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTSG9zdCBjbGFzcyA9PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmxldCBpZCA9IDA7XG5cbmZ1bmN0aW9uIGJ1aWxkTElTU0hvc3Q8RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdCAgIEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHQgICBBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdCAgIFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4sXG5cdFx0XHRcdFx0ICAgVCBleHRlbmRzIExJU1NSZXR1cm5UeXBlPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXM+PihMaXNzOiBULCBfcGFyYW1zOiBQYXJ0aWFsPFBhcmFtcz4gPSB7fSkge1xuXHRjb25zdCB7XG5cdFx0aG9zdCxcblx0XHRhdHRyaWJ1dGVzLFxuXHRcdGNvbnRlbnQsXG5cdFx0c3R5bGVzaGVldHMsXG5cdFx0c2hhZG93LFxuXHR9ID0gTGlzcy5QYXJhbWV0ZXJzO1xuXG5cdGNvbnN0IGFscmVhZHlEZWNsYXJlZENTUyA9IG5ldyBTZXQoKTtcblxuXHRjb25zdCBHRVQgPSBTeW1ib2woJ2dldCcpO1xuXHRjb25zdCBTRVQgPSBTeW1ib2woJ3NldCcpO1xuXG5cdGNvbnN0IHByb3BlcnRpZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoIGF0dHJpYnV0ZXMubWFwKG4gPT4gW24sIHtcblxuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbigpOiBzdHJpbmd8bnVsbCAgICAgIHsgcmV0dXJuICh0aGlzIGFzIHVua25vd24gYXMgQXR0cmlidXRlcylbR0VUXShuKTsgfSxcblx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlOiBzdHJpbmd8bnVsbCkgeyByZXR1cm4gKHRoaXMgYXMgdW5rbm93biBhcyBBdHRyaWJ1dGVzKVtTRVRdKG4sIHZhbHVlKTsgfVxuXHR9XSkgKTtcblxuXHRjbGFzcyBBdHRyaWJ1dGVzIHtcbiAgICAgICAgW3g6IHN0cmluZ106IHN0cmluZ3xudWxsO1xuXG4gICAgICAgICNkYXRhICAgICA6IFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuICAgICAgICAjZGVmYXVsdHMgOiBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPjtcbiAgICAgICAgI3NldHRlciAgIDogKG5hbWU6IEF0dHJzLCB2YWx1ZTogc3RyaW5nfG51bGwpID0+IHZvaWQ7XG5cbiAgICAgICAgW0dFVF0obmFtZTogQXR0cnMpIHtcbiAgICAgICAgXHRyZXR1cm4gdGhpcy4jZGF0YVtuYW1lXSA/PyB0aGlzLiNkZWZhdWx0c1tuYW1lXSA/PyBudWxsO1xuICAgICAgICB9O1xuICAgICAgICBbU0VUXShuYW1lOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKXtcbiAgICAgICAgXHRyZXR1cm4gdGhpcy4jc2V0dGVyKG5hbWUsIHZhbHVlKTsgLy8gcmVxdWlyZWQgdG8gZ2V0IGEgY2xlYW4gb2JqZWN0IHdoZW4gZG9pbmcgey4uLmF0dHJzfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YSAgICA6IFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+LFxuXHRcdFx0XHRcdGRlZmF1bHRzOiBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPixcbiAgICAgICAgXHRcdFx0c2V0dGVyICA6IChuYW1lOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKSA9PiB2b2lkKSB7XG5cbiAgICAgICAgXHR0aGlzLiNkYXRhICAgICA9IGRhdGE7XG5cdFx0XHR0aGlzLiNkZWZhdWx0cyA9IGRlZmF1bHRzO1xuICAgICAgICBcdHRoaXMuI3NldHRlciA9IHNldHRlcjtcblxuICAgICAgICBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHByb3BlcnRpZXMpO1xuICAgICAgICB9XG5cdH1cblxuXHQvLyBAdHMtaWdub3JlIDogYmVjYXVzZSBUUyBpcyBzdHVwaWQuXG5cdGNsYXNzIExJU1NIb3N0QmFzZSBleHRlbmRzIGhvc3Qge1xuXG5cdFx0cmVhZG9ubHkgI3BhcmFtczogUGFyYW1zO1xuXG5cdFx0cmVhZG9ubHkgI2lkID0gKytpZDsgLy8gZm9yIGRlYnVnXG5cblx0XHRjb25zdHJ1Y3RvcihwYXJhbXM6IFBhcnRpYWw8UGFyYW1zPiA9IHt9KSB7XG5cdFx0XHRzdXBlcigpO1xuXHRcdFx0dGhpcy4jcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgTGlzcy5QYXJhbWV0ZXJzLnBhcmFtcywgX3BhcmFtcywgcGFyYW1zKTtcblxuXHRcdFx0dGhpcy4jd2FpdEluaXQgPSBuZXcgUHJvbWlzZSggKHJlc29sdmUpID0+IHtcblx0XHRcdFx0aWYodGhpcy5pc0luaXQpXG5cdFx0XHRcdFx0cmV0dXJuIHJlc29sdmUodGhpcy4jQVBJISk7XG5cdFx0XHRcdHRoaXMuI3Jlc29sdmUgPSByZXNvbHZlO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqKiogcHVibGljIEFQSSAqKioqKioqKioqKioqL1xuXG5cdFx0Z2V0IGlzSW5pdCgpIHtcblx0XHRcdHJldHVybiB0aGlzLiNBUEkgIT09IG51bGw7XG5cdFx0fVxuXHRcdGluaXRpYWxpemUocGFyYW1zOiBQYXJ0aWFsPFBhcmFtcz4gPSB7fSkge1xuXG5cdFx0XHRpZiggdGhpcy5pc0luaXQgKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0VsZW1lbnQgYWxyZWFkeSBpbml0aWFsaXplZCEnKTtcblxuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLiNwYXJhbXMsIHBhcmFtcyk7XG5cblx0XHRcdGNvbnN0IGFwaSA9IHRoaXMuaW5pdCgpO1xuXG5cdFx0XHRpZiggdGhpcy4jaXNJbkRPTSApXG5cdFx0XHRcdChhcGkgYXMgYW55KS5vbkRPTUNvbm5lY3RlZCgpO1xuXG5cdFx0XHRyZXR1cm4gYXBpO1xuXHRcdH1cblxuXHRcdGdldCBMSVNTU3luYygpIHtcblx0XHRcdGlmKCAhIHRoaXMuaXNJbml0IClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdBY2Nlc3NpbmcgQVBJIGJlZm9yZSBXZWJDb21wb25lbnQgaW5pdGlhbGl6YXRpb24hJyk7XG5cdFx0XHRyZXR1cm4gdGhpcy4jQVBJITtcblx0XHR9XG5cdFx0Z2V0IExJU1MoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4jd2FpdEluaXQ7XG5cdFx0fVxuXG5cdFx0LyoqKiBpbml0ICoqKi9cblx0XHQjd2FpdEluaXQ6IFByb21pc2U8SW5zdGFuY2VUeXBlPFQ+Pjtcblx0XHQjcmVzb2x2ZTogKCh1OiBJbnN0YW5jZVR5cGU8VD4pID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG5cdFx0I0FQSTogSW5zdGFuY2VUeXBlPFQ+IHwgbnVsbCA9IG51bGw7XG5cblx0XHQjaXNJbkRPTSA9IGZhbHNlO1xuXHRcdGdldCBpc0luRE9NKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuI2lzSW5ET007XG5cdFx0fVxuXG5cdFx0ZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0XHR0aGlzLiNpc0luRE9NID0gZmFsc2U7XG5cdFx0XHQodGhpcy4jQVBJISBhcyBhbnkpLm9uRE9NRGlzY29ubmVjdGVkKCk7XG5cdFx0fVxuXG5cdFx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cblx0XHRcdHRoaXMuI2lzSW5ET00gPSB0cnVlO1xuXHRcblx0XHRcdGlmKCAhIHRoaXMuaXNJbml0IClcblx0XHRcdFx0dGhpcy5pbml0KCk7XG5cblx0XHRcdCh0aGlzLiNBUEkhIGFzIGFueSkub25ET01Db25uZWN0ZWQoKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIGluaXQoKSB7XG5cdFx0XHRcblx0XHRcdGN1c3RvbUVsZW1lbnRzLnVwZ3JhZGUodGhpcyk7XG5cdFx0XHRcblx0XHRcdC8vIHNoYWRvd1xuXHRcdFx0dGhpcy4jY29udGVudCA9IHRoaXMgYXMgdW5rbm93biBhcyBIb3N0O1xuXHRcdFx0aWYoIHNoYWRvdyAhPT0gJ25vbmUnKSB7XG5cdFx0XHRcdHRoaXMuI2NvbnRlbnQgPSB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogc2hhZG93fSk7XG5cblx0XHRcdFx0Ly9AdHMtaWdub3JlXG5cdFx0XHRcdHRoaXMuI2NvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrRXZlbnQpO1xuXHRcdFx0XHQvL0B0cy1pZ25vcmVcblx0XHRcdFx0dGhpcy4jY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIG9uQ2xpY2tFdmVudCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGF0dHJzXG5cdFx0XHRmb3IobGV0IG9icyBvZiBhdHRyaWJ1dGVzISlcblx0XHRcdFx0dGhpcy4jYXR0cmlidXRlc1tvYnNdID0gdGhpcy5nZXRBdHRyaWJ1dGUob2JzKTtcblxuXHRcdFx0Ly8gY3NzXG5cdFx0XHRpZiggc2hhZG93ICE9PSAnbm9uZScpXG5cdFx0XHRcdCh0aGlzLiNjb250ZW50IGFzIFNoYWRvd1Jvb3QpLmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHNoYXJlZENTUyk7XG5cdFx0XHRpZiggc3R5bGVzaGVldHMubGVuZ3RoICkge1xuXG5cdFx0XHRcdGlmKCBzaGFkb3cgIT09ICdub25lJylcblx0XHRcdFx0XHQodGhpcy4jY29udGVudCBhcyBTaGFkb3dSb290KS5hZG9wdGVkU3R5bGVTaGVldHMucHVzaCguLi5zdHlsZXNoZWV0cyk7XG5cdFx0XHRcdGVsc2Uge1xuXG5cdFx0XHRcdFx0Y29uc3QgY3Nzc2VsZWN0b3IgPSB0aGlzLkNTU1NlbGVjdG9yO1xuXG5cdFx0XHRcdFx0Ly8gaWYgbm90IHlldCBpbnNlcnRlZCA6XG5cdFx0XHRcdFx0aWYoICEgYWxyZWFkeURlY2xhcmVkQ1NTLmhhcyhjc3NzZWxlY3RvcikgKSB7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cblx0XHRcdFx0XHRcdHN0eWxlLnNldEF0dHJpYnV0ZSgnZm9yJywgY3Nzc2VsZWN0b3IpO1xuXG5cdFx0XHRcdFx0XHRsZXQgaHRtbF9zdHlsZXNoZWV0cyA9IFwiXCI7XG5cblx0XHRcdFx0XHRcdGZvcihsZXQgc3R5bGUgb2Ygc3R5bGVzaGVldHMpXG5cdFx0XHRcdFx0XHRcdGZvcihsZXQgcnVsZSBvZiBzdHlsZS5jc3NSdWxlcylcblx0XHRcdFx0XHRcdFx0XHRodG1sX3N0eWxlc2hlZXRzICs9IHJ1bGUuY3NzVGV4dCArICdcXG4nO1xuXG5cdFx0XHRcdFx0XHRzdHlsZS5pbm5lckhUTUwgPSBodG1sX3N0eWxlc2hlZXRzLnJlcGxhY2UoJzpob3N0JywgYDppcygke2Nzc3NlbGVjdG9yfSlgKTtcblxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmQoc3R5bGUpO1xuXG5cdFx0XHRcdFx0XHRhbHJlYWR5RGVjbGFyZWRDU1MuYWRkKGNzc3NlbGVjdG9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gY29udGVudFxuXHRcdFx0aWYoIGNvbnRlbnQgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0bGV0IHRlbXBsYXRlX2VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXHRcdFx0XHRsZXQgc3RyID0gKGNvbnRlbnQgYXMgc3RyaW5nKS5yZXBsYWNlKC9cXCRcXHsoLis/KVxcfS9nLCAoXywgbWF0Y2gpID0+IHRoaXMuZ2V0QXR0cmlidXRlKG1hdGNoKT8/JycpXG5cdCAgICBcdFx0dGVtcGxhdGVfZWxlbS5pbm5lckhUTUwgPSBzdHI7XG5cdCAgICBcdFx0dGhpcy4jY29udGVudC5hcHBlbmQoLi4udGVtcGxhdGVfZWxlbS5jb250ZW50LmNoaWxkTm9kZXMpO1xuXHQgICAgXHR9XG5cblx0ICAgIFx0Ly8gYnVpbGRcblxuXHQgICAgXHQvLyBoNGNrLCBva2F5IGJlY2F1c2UgSlMgaXMgbW9ub3RocmVhZGVkLlxuXHRcdFx0X19jc3RyX2hvc3QgICA9IHRoaXM7XG5cblx0ICAgIFx0bGV0IG9iaiA9IG5ldyBMaXNzKCk7XG5cblx0ICAgIFx0LyppZiggb2JqIGluc3RhbmNlb2YgUHJvbWlzZSlcblx0ICAgIFx0XHRvYmogPSBhd2FpdCBvYmo7Ki9cblxuXHRcdFx0dGhpcy4jQVBJID0gb2JqIGFzIEluc3RhbmNlVHlwZTxUPjtcblxuXHRcdFx0Ly8gZGVmYXVsdCBzbG90XG5cdFx0XHRpZiggdGhpcy5oYXNTaGFkb3cgJiYgdGhpcy4jY29udGVudC5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCApXG5cdFx0XHRcdHRoaXMuI2NvbnRlbnQuYXBwZW5kKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbG90JykgKTtcblxuXHRcdFx0aWYoIHRoaXMuI3Jlc29sdmUgIT09IG51bGwpXG5cdFx0XHRcdHRoaXMuI3Jlc29sdmUodGhpcy4jQVBJKTtcblxuXHRcdFx0cmV0dXJuIHRoaXMuI0FQSTtcblx0XHR9XG5cblx0XHRnZXQgcGFyYW1zKCk6IFBhcmFtcyB7XG5cdFx0XHRyZXR1cm4gdGhpcy4jcGFyYW1zO1xuXHRcdH1cblx0XHRwdWJsaWMgc2V0UGFyYW08VCBleHRlbmRzIGtleW9mIFBhcmFtcz4obmFtZTogVCwgdmFsdWU6IFBhcmFtc1tUXSkge1xuXHRcdFx0aWYoIHRoaXMuaXNJbml0IClcblx0XHRcdFx0cmV0dXJuIHRoaXMuI0FQSSEuc2V0UGFyYW0obmFtZSwgdmFsdWUpO1xuXG5cdFx0XHR0aGlzLiNwYXJhbXNbbmFtZV0gPSB2YWx1ZTsgLy8gd2lsbCBiZSBnaXZlbiB0byBjb25zdHJ1Y3Rvci5cblx0XHR9XG5cblxuXHRcdC8qKiogY29udGVudCAqKiovXG5cdFx0I2NvbnRlbnQ6IEhvc3R8U2hhZG93Um9vdHxudWxsID0gbnVsbDtcblxuXHRcdGdldCBjb250ZW50KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuI2NvbnRlbnQ7XG5cdFx0fVxuXG5cdFx0Z2V0UGFydChuYW1lOiBzdHJpbmcpIHtcblx0XHRcdHJldHVybiB0aGlzLmhhc1NoYWRvd1xuXHRcdFx0XHRcdD8gdGhpcy4jY29udGVudD8ucXVlcnlTZWxlY3RvcihgOjpwYXJ0KCR7bmFtZX0pYClcblx0XHRcdFx0XHQ6IHRoaXMuI2NvbnRlbnQ/LnF1ZXJ5U2VsZWN0b3IoYFtwYXJ0PVwiJHtuYW1lfVwiXWApO1xuXHRcdH1cblx0XHRnZXRQYXJ0cyhuYW1lOiBzdHJpbmcpIHtcblx0XHRcdHJldHVybiB0aGlzLmhhc1NoYWRvd1xuXHRcdFx0XHRcdD8gdGhpcy4jY29udGVudD8ucXVlcnlTZWxlY3RvckFsbChgOjpwYXJ0KCR7bmFtZX0pYClcblx0XHRcdFx0XHQ6IHRoaXMuI2NvbnRlbnQ/LnF1ZXJ5U2VsZWN0b3JBbGwoYFtwYXJ0PVwiJHtuYW1lfVwiXWApO1xuXHRcdH1cblxuXHRcdHByb3RlY3RlZCBnZXQgaGFzU2hhZG93KCk6IGJvb2xlYW4ge1xuXHRcdFx0cmV0dXJuIHNoYWRvdyAhPT0gJ25vbmUnO1xuXHRcdH1cblxuXHRcdC8qKiogQ1NTICoqKi9cblxuXHRcdGdldCBDU1NTZWxlY3RvcigpIHtcblxuXHRcdFx0aWYodGhpcy5oYXNTaGFkb3cgfHwgISB0aGlzLmhhc0F0dHJpYnV0ZShcImlzXCIpIClcblx0XHRcdFx0cmV0dXJuIHRoaXMudGFnTmFtZTtcblxuXHRcdFx0cmV0dXJuIGAke3RoaXMudGFnTmFtZX1baXM9XCIke3RoaXMuZ2V0QXR0cmlidXRlKFwiaXNcIil9XCJdYDtcblx0XHR9XG5cblx0XHQvKioqIGF0dHJzICoqKi9cblx0XHQjYXR0cnNfZmxhZyA9IGZhbHNlO1xuXG5cdFx0I2F0dHJpYnV0ZXMgICAgICAgICA9IHt9IGFzIFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuXHRcdCNhdHRyaWJ1dGVzRGVmYXVsdHMgPSB7fSBhcyBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPjtcblx0XHQjYXR0cnMgPSBuZXcgQXR0cmlidXRlcyhcblx0XHRcdHRoaXMuI2F0dHJpYnV0ZXMsXG5cdFx0XHR0aGlzLiNhdHRyaWJ1dGVzRGVmYXVsdHMsXG5cdFx0XHQobmFtZTogQXR0cnMsIHZhbHVlOnN0cmluZ3xudWxsKSA9PiB7XG5cblx0XHRcdFx0dGhpcy4jYXR0cmlidXRlc1tuYW1lXSA9IHZhbHVlO1xuXG5cdFx0XHRcdHRoaXMuI2F0dHJzX2ZsYWcgPSB0cnVlOyAvLyBkbyBub3QgdHJpZ2dlciBvbkF0dHJzQ2hhbmdlZC5cblx0XHRcdFx0aWYoIHZhbHVlID09PSBudWxsKVxuXHRcdFx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXHRcdFx0fVxuXHRcdCkgYXMgdW5rbm93biBhcyBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPjtcblxuXHRcdHNldEF0dHJEZWZhdWx0KG5hbWU6IEF0dHJzLCB2YWx1ZTogc3RyaW5nfG51bGwpIHtcblx0XHRcdGlmKCB2YWx1ZSA9PT0gbnVsbClcblx0XHRcdFx0ZGVsZXRlIHRoaXMuI2F0dHJpYnV0ZXNEZWZhdWx0c1tuYW1lXTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0dGhpcy4jYXR0cmlidXRlc0RlZmF1bHRzW25hbWVdID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0Z2V0IGF0dHJzKCk6IFJlYWRvbmx5PFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+PiB7XG5cblx0XHRcdHJldHVybiB0aGlzLiNhdHRycztcblx0XHR9XG5cblx0XHRzdGF0aWMgb2JzZXJ2ZWRBdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcblx0XHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSAgICA6IEF0dHJzLFxuXHRcdFx0XHRcdFx0XHRcdCBvbGRWYWx1ZTogc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRcdCBuZXdWYWx1ZTogc3RyaW5nKSB7XG5cblx0XHRcdGlmKHRoaXMuI2F0dHJzX2ZsYWcpIHtcblx0XHRcdFx0dGhpcy4jYXR0cnNfZmxhZyA9IGZhbHNlO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuI2F0dHJpYnV0ZXNbbmFtZV0gPSBuZXdWYWx1ZTtcblx0XHRcdGlmKCAhIHRoaXMuaXNJbml0IClcblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRpZiggKHRoaXMuI0FQSSEgYXMgYW55KS5vbkF0dHJDaGFuZ2VkKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkgPT09IGZhbHNlKSB7XG5cdFx0XHRcdHRoaXMuI2F0dHJzW25hbWVdID0gb2xkVmFsdWU7IC8vIHJldmVydCB0aGUgY2hhbmdlLlxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gTElTU0hvc3RCYXNlO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIGRlZmluZSA9PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IF9ET01Db250ZW50TG9hZGVkID0gbmV3IFByb21pc2U8dm9pZD4oIChyZXNvbHZlKSA9PiB7XG5cblx0aWYoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJpbnRlcmFjdGl2ZVwiIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIilcblx0XHRyZXR1cm4gcmVzb2x2ZSgpO1xuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cdFx0cmVzb2x2ZSgpO1xuXHR9LCB0cnVlKTtcbn0pO1xuXG5MSVNTLmRlZmluZSA9IGFzeW5jIGZ1bmN0aW9uPEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0XHRcdFx0XHRcdFx0IEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHRcdCAgICAgQXR0cnMgICBleHRlbmRzIHN0cmluZyxcblx0XHRcdFx0XHRcdCAgICAgUGFyYW1zICBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pixcblx0XHRcdFx0XHRcdCAgIFx0IFQgZXh0ZW5kcyBMSVNTUmV0dXJuVHlwZTxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zPj4oXG5cdFx0XHRcdFx0XHQgICBcdHRhZ25hbWU6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0Q29tcG9uZW50Q2xhc3M6IFQsXG5cdFx0XHRcdFx0XHRcdHtkZXBlbmRlbmNpZXMsIHBhcmFtc306IHtwYXJhbXM/OiBQYXJ0aWFsPFBhcmFtcz4sIGRlcGVuZGVuY2llcz86IHJlYWRvbmx5IFByb21pc2U8c3RyaW5nPltdfSA9IHt9KSB7XG5cblx0ZGVwZW5kZW5jaWVzPz89W107XG5cdHBhcmFtcyAgICAgID8/PSB7fTtcblxuXHRjb25zdCBDbGFzcyA9IENvbXBvbmVudENsYXNzLlBhcmFtZXRlcnMuaG9zdDtcblx0bGV0IExJU1NCYXNlOiBhbnkgPSBDb21wb25lbnRDbGFzcztcblx0bGV0IGh0bWx0YWcgPSBfZWxlbWVudDJ0YWduYW1lKENsYXNzKT8/dW5kZWZpbmVkO1xuXG5cdGF3YWl0IFByb21pc2UuYWxsKFtfRE9NQ29udGVudExvYWRlZCwgLi4uZGVwZW5kZW5jaWVzLCAuLi5MSVNTQmFzZS5QYXJhbWV0ZXJzLmRlcGVuZGVuY2llc10pO1xuXG5cdGNvbnN0IExJU1NjbGFzcyA9IGJ1aWxkTElTU0hvc3Q8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcywgVD4oQ29tcG9uZW50Q2xhc3MsIHBhcmFtcyk7XG5cdFxuXHRjb25zdCBvcHRzID0gaHRtbHRhZyA9PT0gdW5kZWZpbmVkID8ge31cblx0XHRcdFx0XHRcdFx0XHRcdCAgIDoge2V4dGVuZHM6IGh0bWx0YWd9O1xuXHRcblx0Y3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ25hbWUsIExJU1NjbGFzcywgb3B0cyk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIFNoYWRvd1Jvb3QgdG9vbHMgPT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IHNoYXJlZENTUyA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG5kb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChzaGFyZWRDU1MpO1xuXG5MSVNTLmluc2VydEdsb2JhbENTU1J1bGVzID0gZnVuY3Rpb24oY3NzOiBzdHJpbmd8SFRNTFN0eWxlRWxlbWVudCkge1xuXG5cdGxldCBjc3Nfc3R5bGUhOiBDU1NTdHlsZVNoZWV0O1xuXG5cdGlmKCBjc3MgaW5zdGFuY2VvZiBIVE1MU3R5bGVFbGVtZW50IClcblx0XHRjc3Nfc3R5bGUgPSBjc3Muc2hlZXQhO1xuXHRpZiggdHlwZW9mIGNzcyA9PT0gXCJzdHJpbmdcIikge1xuXHRcdGNzc19zdHlsZSA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG5cdFx0Y3NzX3N0eWxlLnJlcGxhY2VTeW5jKGNzcyk7XG5cdH1cblxuXHRmb3IobGV0IHJ1bGUgb2YgY3NzX3N0eWxlLmNzc1J1bGVzKVxuXHRcdHNoYXJlZENTUy5pbnNlcnRSdWxlKHJ1bGUuY3NzVGV4dCk7XG59XG5cbnR5cGUgRGVsZWdhdGVkSGFuZGxlciA9IFtzdHJpbmcsIChldjogTW91c2VFdmVudCkgPT4gdm9pZF07XG5jb25zdCBERUxFR0FURURfRVZFTlRTID0ge1xuXHRcImNsaWNrXCI6IFtdIGFzIERlbGVnYXRlZEhhbmRsZXJbXSxcblx0XCJkYmxjbGlja1wiOiBbXSBhcyBEZWxlZ2F0ZWRIYW5kbGVyW11cbn07XG5cbmNvbnN0IEFMUkVBRFlfUFJPQ0VTU0VEID0gU3ltYm9sKCk7XG5cbmZ1bmN0aW9uIG9uQ2xpY2tFdmVudChldjogTW91c2VFdmVudCkge1xuXG5cdGlmKCAoZXYgYXMgYW55KVtBTFJFQURZX1BST0NFU1NFRF0gPT09IHRydWUgKVxuXHRcdHJldHVybjtcblx0KGV2IGFzIGFueSlbQUxSRUFEWV9QUk9DRVNTRURdID0gdHJ1ZTtcblxuXHRjb25zdCBoYW5kbGVycyA9IERFTEVHQVRFRF9FVkVOVFNbZXYudHlwZSBhcyBrZXlvZiB0eXBlb2YgREVMRUdBVEVEX0VWRU5UU107XG5cblx0Zm9yKGxldCBlbGVtIG9mIGV2LmNvbXBvc2VkUGF0aCgpICkge1xuXHRcblx0XHRpZiggZWxlbSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgfHwgZWxlbSA9PT0gZG9jdW1lbnQgfHwgZWxlbSA9PT0gd2luZG93IClcblx0XHRcdGNvbnRpbnVlO1xuXG5cdFx0dmFyIHRhcmdldCA9IGVsZW0gYXMgRWxlbWVudDtcblxuXHRcdGZvcihsZXQgW3NlbGVjdG9yLCBoYW5kbGVyXSBvZiBoYW5kbGVycykge1xuXHRcdFx0aWYoIHRhcmdldC5tYXRjaGVzKHNlbGVjdG9yKSApXG5cdFx0XHRcdGhhbmRsZXIoZXYpO1xuXHRcdH1cblx0fVxufVxuXG5MSVNTLmluc2VydEdsb2JhbERlbGVnYXRlZExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnRfbmFtZToga2V5b2YgdHlwZW9mIERFTEVHQVRFRF9FVkVOVFMsIHNlbGVjdG9yOiBzdHJpbmcsIGhhbmRsZXI6IChldjogTW91c2VFdmVudCkgPT4gdm9pZCApIHtcblx0REVMRUdBVEVEX0VWRU5UU1tldmVudF9uYW1lXS5wdXNoKFtzZWxlY3RvciwgaGFuZGxlcl0pXG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGlja0V2ZW50KTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgb25DbGlja0V2ZW50KTtcblxuTElTUy5jbG9zZXN0ID0gZnVuY3Rpb24gY2xvc2VzdDxFIGV4dGVuZHMgRWxlbWVudD4oc2VsZWN0b3I6IHN0cmluZywgZWxlbWVudDogRWxlbWVudCkge1xuXG5cdHdoaWxlKHRydWUpIHtcblx0XHR2YXIgcmVzdWx0ID0gZWxlbWVudC5jbG9zZXN0PEU+KHNlbGVjdG9yKTtcblxuXHRcdGlmKCByZXN1bHQgIT09IG51bGwpXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXG5cdFx0Y29uc3Qgcm9vdCA9IGVsZW1lbnQuZ2V0Um9vdE5vZGUoKTtcblx0XHRpZiggISAoXCJob3N0XCIgaW4gcm9vdCkgKVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHRlbGVtZW50ID0gKHJvb3QgYXMgU2hhZG93Um9vdCkuaG9zdDtcblx0fVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIGhlbHBlcnMgPT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnR5cGUgaW5mZXJQYXJhbXM8VD4gPSBUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksIGluZmVyIFAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4+ID8gUCA6IG5ldmVyO1xuXG50eXBlIEJVSUxEX09QVElPTlM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+ID0gUGFydGlhbDx7XG5cdFx0XHRcdFx0ICBcdHBhcmFtcyAgICA6IFBhcnRpYWw8aW5mZXJQYXJhbXM8VD4+LFxuXHRcdFx0XHRcdCAgXHRjb250ZW50XHQgIDogc3RyaW5nfE5vZGV8cmVhZG9ubHkgTm9kZVtdLFxuXHRcdFx0XHRcdFx0aWQgXHRcdCAgOiBzdHJpbmcsXG5cdFx0XHRcdFx0ICBcdGNsYXNzZXNcdCAgOiByZWFkb25seSBzdHJpbmdbXSxcblx0XHRcdFx0XHQgIFx0Y3NzdmFycyAgIDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4sXG5cdFx0XHRcdFx0ICBcdGF0dHJzIFx0ICA6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIHN0cmluZ3xib29sZWFuPj4sXG5cdFx0XHRcdFx0ICBcdGRhdGEgXHQgIDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgc3RyaW5nfGJvb2xlYW4+Pixcblx0XHRcdFx0XHQgIFx0bGlzdGVuZXJzIDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgKGV2OiBFdmVudCkgPT4gdm9pZD4+XG5cdFx0XHRcdFx0fT4gJiAoe1xuXHRcdFx0XHRcdFx0aW5pdGlhbGl6ZTogZmFsc2UsXG5cdFx0XHRcdFx0XHRwYXJlbnQ6IEVsZW1lbnRcblx0XHRcdFx0XHR9fHtcblx0XHRcdFx0XHRcdGluaXRpYWxpemU/OiB0cnVlLFxuXHRcdFx0XHRcdFx0cGFyZW50PzogRWxlbWVudFxuXHRcdFx0XHRcdH0pO1xuXG5hc3luYyBmdW5jdGlvbiBidWlsZDxUIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4odGFnbmFtZTogVCwgb3B0aW9ucz86IEJVSUxEX09QVElPTlM8Q29tcG9uZW50c1tUXT4pOiBQcm9taXNlPENvbXBvbmVudHNbVF0+O1xuYXN5bmMgZnVuY3Rpb24gYnVpbGQ8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHRhZ25hbWU6IHN0cmluZywgb3B0aW9ucz86IEJVSUxEX09QVElPTlM8VD4pOiBQcm9taXNlPFQ+O1xuYXN5bmMgZnVuY3Rpb24gYnVpbGQ8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHRhZ25hbWU6IHN0cmluZywge1xuXHRcdHBhcmFtcyAgICA9IHt9LFxuXHRcdGluaXRpYWxpemU9IHRydWUsXG5cdFx0Y29udGVudCAgID0gW10sXG5cdFx0cGFyZW50ICAgID0gdW5kZWZpbmVkLFxuXHRcdGlkIFx0XHQgID0gdW5kZWZpbmVkLFxuXHRcdGNsYXNzZXMgICA9IFtdLFxuXHRcdGNzc3ZhcnMgICA9IHt9LFxuXHRcdGF0dHJzICAgICA9IHt9LFxuXHRcdGRhdGEgXHQgID0ge30sXG5cdFx0bGlzdGVuZXJzID0ge31cblx0fTogQlVJTERfT1BUSU9OUzxUPiA9IHt9KTogUHJvbWlzZTxUPiB7XG5cblx0aWYoICEgaW5pdGlhbGl6ZSAmJiBwYXJlbnQgPT09IG51bGwpXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQSBwYXJlbnQgbXVzdCBiZSBnaXZlbiBpZiBpbml0aWFsaXplIGlzIGZhbHNlXCIpO1xuXG5cdGxldCBDdXN0b21DbGFzcyA9IGF3YWl0IGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKHRhZ25hbWUpO1xuXHRsZXQgZWxlbSA9IG5ldyBDdXN0b21DbGFzcyhwYXJhbXMpIGFzIExJU1NIb3N0PFQ+O1xuXG5cdC8vIEZpeCBpc3N1ZSAjMlxuXHRpZiggZWxlbS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09IHRhZ25hbWUgKVxuXHRcdGVsZW0uc2V0QXR0cmlidXRlKFwiaXNcIiwgdGFnbmFtZSk7XG5cblx0aWYoIGlkICE9PSB1bmRlZmluZWQgKVxuXHRcdGVsZW0uaWQgPSBpZDtcblxuXHRpZiggY2xhc3Nlcy5sZW5ndGggPiAwKVxuXHRcdGVsZW0uY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcblxuXHRmb3IobGV0IG5hbWUgaW4gY3NzdmFycylcblx0XHRlbGVtLnN0eWxlLnNldFByb3BlcnR5KGAtLSR7bmFtZX1gLCBjc3N2YXJzW25hbWVdKTtcblxuXHRmb3IobGV0IG5hbWUgaW4gYXR0cnMpIHtcblxuXHRcdGxldCB2YWx1ZSA9IGF0dHJzW25hbWVdO1xuXHRcdGlmKCB0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKVxuXHRcdFx0ZWxlbS50b2dnbGVBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXHRcdGVsc2Vcblx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0fVxuXG5cdGZvcihsZXQgbmFtZSBpbiBkYXRhKSB7XG5cblx0XHRsZXQgdmFsdWUgPSBkYXRhW25hbWVdO1xuXHRcdGlmKCB2YWx1ZSA9PT0gZmFsc2UpXG5cdFx0XHRkZWxldGUgZWxlbS5kYXRhc2V0W25hbWVdO1xuXHRcdGVsc2UgaWYodmFsdWUgPT09IHRydWUpXG5cdFx0XHRlbGVtLmRhdGFzZXRbbmFtZV0gPSBcIlwiO1xuXHRcdGVsc2Vcblx0XHRcdGVsZW0uZGF0YXNldFtuYW1lXSA9IHZhbHVlO1xuXHR9XG5cblx0aWYoICEgQXJyYXkuaXNBcnJheShjb250ZW50KSApXG5cdFx0Y29udGVudCA9IFtjb250ZW50IGFzIGFueV07XG5cdGVsZW0ucmVwbGFjZUNoaWxkcmVuKC4uLmNvbnRlbnQpO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBsaXN0ZW5lcnMpXG5cdFx0ZWxlbS5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGxpc3RlbmVyc1tuYW1lXSk7XG5cblx0aWYoIHBhcmVudCAhPT0gdW5kZWZpbmVkIClcblx0XHRwYXJlbnQuYXBwZW5kKGVsZW0pO1xuXG5cdGlmKCAhIGVsZW0uaXNJbml0ICYmIGluaXRpYWxpemUgKVxuXHRcdHJldHVybiBhd2FpdCBMSVNTLmluaXRpYWxpemUoZWxlbSk7XG5cblx0cmV0dXJuIGF3YWl0IExJU1MuZ2V0TElTUyhlbGVtKTtcbn1cbkxJU1MuYnVpbGQgPSBidWlsZDtcblxuXG5mdW5jdGlvbiBidWlsZFN5bmM8VCBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHRhZ25hbWU6IFQsIG9wdGlvbnM/OiBCVUlMRF9PUFRJT05TPENvbXBvbmVudHNbVF0+KTogQ29tcG9uZW50c1tUXTtcbmZ1bmN0aW9uIGJ1aWxkU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4odGFnbmFtZTogc3RyaW5nLCBvcHRpb25zPzogQlVJTERfT1BUSU9OUzxUPik6IFQ7XG5mdW5jdGlvbiBidWlsZFN5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHRhZ25hbWU6IHN0cmluZywge1xuXHRcdHBhcmFtcyAgICA9IHt9LFxuXHRcdGluaXRpYWxpemU9IHRydWUsXG5cdFx0Y29udGVudCAgID0gW10sXG5cdFx0cGFyZW50ICAgID0gdW5kZWZpbmVkLFxuXHRcdGlkIFx0XHQgID0gdW5kZWZpbmVkLFxuXHRcdGNsYXNzZXMgICA9IFtdLFxuXHRcdGNzc3ZhcnMgICA9IHt9LFxuXHRcdGF0dHJzICAgICA9IHt9LFxuXHRcdGRhdGEgXHQgID0ge30sXG5cdFx0bGlzdGVuZXJzID0ge31cblx0fTogQlVJTERfT1BUSU9OUzxUPiA9IHt9KTogVCB7XG5cblx0aWYoICEgaW5pdGlhbGl6ZSAmJiBwYXJlbnQgPT09IG51bGwpXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQSBwYXJlbnQgbXVzdCBiZSBnaXZlbiBpZiBpbml0aWFsaXplIGlzIGZhbHNlXCIpO1xuXG5cdGxldCBDdXN0b21DbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldCh0YWduYW1lKTtcblx0aWYoQ3VzdG9tQ2xhc3MgPT09IHVuZGVmaW5lZClcblx0XHR0aHJvdyBuZXcgRXJyb3IoYCR7dGFnbmFtZX0gbm90IGRlZmluZWRgKTtcblx0bGV0IGVsZW0gPSBuZXcgQ3VzdG9tQ2xhc3MocGFyYW1zKSBhcyBMSVNTSG9zdDxUPjtcblxuXHQvL1RPRE86IGZhY3Rvcml6ZS4uLlxuXG5cdC8vIEZpeCBpc3N1ZSAjMlxuXHRpZiggZWxlbS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09IHRhZ25hbWUgKVxuXHRcdGVsZW0uc2V0QXR0cmlidXRlKFwiaXNcIiwgdGFnbmFtZSk7XG5cblx0aWYoIGlkICE9PSB1bmRlZmluZWQgKVxuXHRcdGVsZW0uaWQgPSBpZDtcblxuXHRpZiggY2xhc3Nlcy5sZW5ndGggPiAwKVxuXHRcdGVsZW0uY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcblxuXHRmb3IobGV0IG5hbWUgaW4gY3NzdmFycylcblx0XHRlbGVtLnN0eWxlLnNldFByb3BlcnR5KGAtLSR7bmFtZX1gLCBjc3N2YXJzW25hbWVdKTtcblxuXHRmb3IobGV0IG5hbWUgaW4gYXR0cnMpIHtcblxuXHRcdGxldCB2YWx1ZSA9IGF0dHJzW25hbWVdO1xuXHRcdGlmKCB0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKVxuXHRcdFx0ZWxlbS50b2dnbGVBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXHRcdGVsc2Vcblx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0fVxuXG5cdGZvcihsZXQgbmFtZSBpbiBkYXRhKSB7XG5cblx0XHRsZXQgdmFsdWUgPSBkYXRhW25hbWVdO1xuXHRcdGlmKCB2YWx1ZSA9PT0gZmFsc2UpXG5cdFx0XHRkZWxldGUgZWxlbS5kYXRhc2V0W25hbWVdO1xuXHRcdGVsc2UgaWYodmFsdWUgPT09IHRydWUpXG5cdFx0XHRlbGVtLmRhdGFzZXRbbmFtZV0gPSBcIlwiO1xuXHRcdGVsc2Vcblx0XHRcdGVsZW0uZGF0YXNldFtuYW1lXSA9IHZhbHVlO1xuXHR9XG5cblx0aWYoICEgQXJyYXkuaXNBcnJheShjb250ZW50KSApXG5cdFx0Y29udGVudCA9IFtjb250ZW50IGFzIGFueV07XG5cdGVsZW0ucmVwbGFjZUNoaWxkcmVuKC4uLmNvbnRlbnQpO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBsaXN0ZW5lcnMpXG5cdFx0ZWxlbS5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGxpc3RlbmVyc1tuYW1lXSk7XG5cblx0aWYoIHBhcmVudCAhPT0gdW5kZWZpbmVkIClcblx0XHRwYXJlbnQuYXBwZW5kKGVsZW0pO1xuXG5cdGlmKCAhIGVsZW0uaXNJbml0ICYmIGluaXRpYWxpemUgKVxuXHRcdExJU1MuaW5pdGlhbGl6ZVN5bmMoZWxlbSk7XG5cblx0cmV0dXJuIExJU1MuZ2V0TElTU1N5bmMoZWxlbSk7XG59XG5MSVNTLmJ1aWxkU3luYyA9IGJ1aWxkU3luYztcblxuTElTUy53aGVuRGVmaW5lZCAgICA9IGFzeW5jIGZ1bmN0aW9uKHRhZ25hbWU6IHN0cmluZywgY2FsbGJhY2s/OiAoKSA9PiB2b2lkICkgOiBQcm9taXNlPHZvaWQ+IHtcblxuXHRhd2FpdCBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCh0YWduYW1lKTtcblxuXHRpZiggY2FsbGJhY2sgIT09IHVuZGVmaW5lZClcblx0XHRjYWxsYmFjaygpO1xuXG5cdHJldHVybjtcbn1cbkxJU1Mud2hlbkFsbERlZmluZWQgPSBhc3luYyBmdW5jdGlvbih0YWduYW1lczogcmVhZG9ubHkgc3RyaW5nW10sIGNhbGxiYWNrPzogKCkgPT4gdm9pZCApIDogUHJvbWlzZTx2b2lkPiB7XG5cblx0YXdhaXQgUHJvbWlzZS5hbGwoIHRhZ25hbWVzLm1hcCggdCA9PiBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCh0KSApIClcblxuXHRpZiggY2FsbGJhY2sgIT09IHVuZGVmaW5lZClcblx0XHRjYWxsYmFjaygpO1xuXG59XG5cbkxJU1MuaXNEZWZpbmVkID0gZnVuY3Rpb24obmFtZTogc3RyaW5nKSB7XG5cdHJldHVybiBjdXN0b21FbGVtZW50cy5nZXQobmFtZSk7XG59XG5cbkxJU1Muc2VsZWN0b3IgPSBmdW5jdGlvbihuYW1lPzogc3RyaW5nKSB7XG5cdGlmKG5hbWUgPT09IHVuZGVmaW5lZCkgLy8ganVzdCBhbiBoNGNrXG5cdFx0cmV0dXJuIFwiXCI7XG5cdHJldHVybiBgOmlzKCR7bmFtZX0sIFtpcz1cIiR7bmFtZX1cIl0pYDtcbn1cblxuTElTUy5nZXRMSVNTICAgID0gYXN5bmMgZnVuY3Rpb248VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KCBlbGVtZW50OiBFbGVtZW50ICkge1xuXG5cdGF3YWl0IExJU1Mud2hlbkRlZmluZWQoIExJU1MuZ2V0TmFtZShlbGVtZW50KSApO1xuXG5cdHJldHVybiAoZWxlbWVudCBhcyBMSVNTSG9zdDxUPikuTElTUzsgLy8gZW5zdXJlIGluaXRpYWxpemVkLlxufVxuTElTUy5nZXRMSVNTU3luYz0gZnVuY3Rpb248VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KCBlbGVtZW50OiBFbGVtZW50ICkge1xuXG5cdGNvbnN0IG5hbWUgPSBMSVNTLmdldE5hbWUoZWxlbWVudCk7XG5cdGlmKCAhIExJU1MuaXNEZWZpbmVkKCBuYW1lICkgKVxuXHRcdHRocm93IG5ldyBFcnJvcihgJHtuYW1lfSBoYXNuJ3QgYmVlbiBkZWZpbmVkIHlldC5gKTtcblxuXHRsZXQgaG9zdCA9IGVsZW1lbnQgYXMgTElTU0hvc3Q8VD47XG5cblx0aWYoICEgaG9zdC5pc0luaXQgKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIkluc3RhbmNlIGhhc24ndCBiZWVuIGluaXRpYWxpemVkIHlldC5cIik7XG5cblx0cmV0dXJuIGhvc3QuTElTU1N5bmM7XG59XG5MSVNTLmluaXRpYWxpemUgPSBhc3luYyBmdW5jdGlvbjxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oIGVsZW1lbnQ6IEVsZW1lbnQpIHtcblxuXHRhd2FpdCBMSVNTLndoZW5EZWZpbmVkKCBMSVNTLmdldE5hbWUoZWxlbWVudCkgKTtcblxuXHRyZXR1cm4gYXdhaXQgKGVsZW1lbnQgYXMgTElTU0hvc3Q8VD4pLmluaXRpYWxpemUoKTsgLy8gZW5zdXJlIGluaXRpYWxpemF0aW9uLlxufVxuXG5MSVNTLmluaXRpYWxpemVTeW5jID0gZnVuY3Rpb248VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KCBlbGVtZW50OiBFbGVtZW50KSB7XG5cblx0Y29uc3QgbmFtZSA9IExJU1MuZ2V0TmFtZShlbGVtZW50KTtcblx0aWYoICEgTElTUy5pc0RlZmluZWQobmFtZSkgKVxuXHRcdHRocm93IG5ldyBFcnJvcihgJHtuYW1lfSBub3QgZGVmaW5lZGApO1xuXG5cdHJldHVybiAoZWxlbWVudCBhcyBMSVNTSG9zdDxUPikuaW5pdGlhbGl6ZSgpOyAvLyBlbnN1cmUgaW5pdGlhbGl6YXRpb24uXG59XG5cbkxJU1MuZ2V0TmFtZSA9IGZ1bmN0aW9uKCBlbGVtZW50OiBFbGVtZW50ICk6IHN0cmluZyB7XG5cblx0Y29uc3QgbmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpcycpID8/IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcblx0aWYoICEgbmFtZS5pbmNsdWRlcygnLScpIClcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEVsZW1lbnQgJHtuYW1lfSBpcyBub3QgYSBXZWJDb21wb25lbnRgKTtcblxuXHRyZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gX2J1aWxkUVMoc2VsZWN0b3I6IHN0cmluZywgdGFnbmFtZV9vcl9wYXJlbnQ/OiBzdHJpbmcgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsIHBhcmVudDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblx0XG5cdGlmKCB0YWduYW1lX29yX3BhcmVudCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB0YWduYW1lX29yX3BhcmVudCAhPT0gJ3N0cmluZycpIHtcblx0XHRwYXJlbnQgPSB0YWduYW1lX29yX3BhcmVudDtcblx0XHR0YWduYW1lX29yX3BhcmVudCA9IHVuZGVmaW5lZDtcblx0fVxuXG5cdHJldHVybiBbYCR7c2VsZWN0b3J9JHtMSVNTLnNlbGVjdG9yKHRhZ25hbWVfb3JfcGFyZW50IGFzIHN0cmluZ3x1bmRlZmluZWQpfWAsIHBhcmVudF0gYXMgY29uc3Q7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgUXVlcnlTZWxlY3RvcnMgPT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYXN5bmMgZnVuY3Rpb24gcXM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8VD47XG5hc3luYyBmdW5jdGlvbiBxczxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTwgQ29tcG9uZW50c1tOXSA+O1xuYXN5bmMgZnVuY3Rpb24gcXM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRsZXQgcmVzdWx0ID0gYXdhaXQgTElTUy5xc288VD4oc2VsZWN0b3IsIHBhcmVudCk7XG5cdGlmKHJlc3VsdCA9PT0gbnVsbClcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEVsZW1lbnQgJHtzZWxlY3Rvcn0gbm90IGZvdW5kYCk7XG5cblx0cmV0dXJuIHJlc3VsdCFcbn1cbkxJU1MucXMgID0gcXNcblxuYXN5bmMgZnVuY3Rpb24gcXNvPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPFQ+O1xuYXN5bmMgZnVuY3Rpb24gcXNvPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPCBDb21wb25lbnRzW05dID47XG5hc3luYyBmdW5jdGlvbiBxc288VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRjb25zdCBlbGVtZW50ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3I8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblx0aWYoIGVsZW1lbnQgPT09IG51bGwgKVxuXHRcdHJldHVybiBudWxsO1xuXG5cdHJldHVybiBhd2FpdCBMSVNTLmdldExJU1MoIGVsZW1lbnQgKTtcbn1cbkxJU1MucXNvID0gcXNvXG5cbmFzeW5jIGZ1bmN0aW9uIHFzYTxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTxUW10+O1xuYXN5bmMgZnVuY3Rpb24gcXNhPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPCBDb21wb25lbnRzW05dW10gPjtcbmFzeW5jIGZ1bmN0aW9uIHFzYTxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LFxuXHRcdFx0XHRcdFx0cGFyZW50ICA6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cblx0W3NlbGVjdG9yLCBwYXJlbnRdID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBwYXJlbnQpO1xuXG5cdGNvbnN0IGVsZW1lbnRzID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGw8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblxuXHRsZXQgaWR4ID0gMDtcblx0Y29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxUPj4oIGVsZW1lbnRzLmxlbmd0aCApO1xuXHRmb3IobGV0IGVsZW1lbnQgb2YgZWxlbWVudHMpXG5cdFx0cHJvbWlzZXNbaWR4KytdID0gTElTUy5nZXRMSVNTKCBlbGVtZW50ICk7XG5cblx0cmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbn1cbkxJU1MucXNhID0gcXNhO1xuXG5hc3luYyBmdW5jdGlvbiBxc2M8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA6IEVsZW1lbnQpOiBQcm9taXNlPFQ+O1xuYXN5bmMgZnVuY3Rpb24gcXNjPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgOiBFbGVtZW50KTogUHJvbWlzZTwgQ29tcG9uZW50c1tOXSA+O1xuYXN5bmMgZnVuY3Rpb24gcXNjPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50LFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgPzogRWxlbWVudCkge1xuXG5cdGNvbnN0IHJlcyA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgZWxlbWVudCk7XG5cdFxuXHRjb25zdCByZXN1bHQgPSAocmVzWzFdIGFzIHVua25vd24gYXMgRWxlbWVudCkuY2xvc2VzdDxMSVNTSG9zdDxUPj4ocmVzWzBdKTtcblx0aWYocmVzdWx0ID09PSBudWxsKVxuXHRcdHJldHVybiBudWxsO1xuXG5cdHJldHVybiBhd2FpdCBMSVNTLmdldExJU1MocmVzdWx0KTtcbn1cbkxJU1MucXNjID0gcXNjO1xuXG5mdW5jdGlvbiBxc1N5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFQ7XG5mdW5jdGlvbiBxc1N5bmM8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IENvbXBvbmVudHNbTl07XG5mdW5jdGlvbiBxc1N5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRjb25zdCBlbGVtZW50ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3I8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblxuXHRpZiggZWxlbWVudCA9PT0gbnVsbCApXG5cdFx0dGhyb3cgbmV3IEVycm9yKGBFbGVtZW50ICR7c2VsZWN0b3J9IG5vdCBmb3VuZGApO1xuXG5cdHJldHVybiBMSVNTLmdldExJU1NTeW5jKCBlbGVtZW50ICk7XG59XG5MSVNTLnFzU3luYyA9IHFzU3luYztcblxuZnVuY3Rpb24gcXNhU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogVFtdO1xuZnVuY3Rpb24gcXNhU3luYzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogQ29tcG9uZW50c1tOXVtdO1xuZnVuY3Rpb24gcXNhU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LFxuXHRcdFx0XHRcdFx0cGFyZW50ICA6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cblx0W3NlbGVjdG9yLCBwYXJlbnRdID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBwYXJlbnQpO1xuXG5cdGNvbnN0IGVsZW1lbnRzID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGw8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblxuXHRsZXQgaWR4ID0gMDtcblx0Y29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PFQ+KCBlbGVtZW50cy5sZW5ndGggKTtcblx0Zm9yKGxldCBlbGVtZW50IG9mIGVsZW1lbnRzKVxuXHRcdHJlc3VsdFtpZHgrK10gPSBMSVNTLmdldExJU1NTeW5jKCBlbGVtZW50ICk7XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cbkxJU1MucXNhU3luYyA9IHFzYVN5bmM7XG5cbmZ1bmN0aW9uIHFzY1N5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA6IEVsZW1lbnQpOiBUO1xuZnVuY3Rpb24gcXNjU3luYzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdGVsZW1lbnQgIDogRWxlbWVudCk6IENvbXBvbmVudHNbTl07XG5mdW5jdGlvbiBxc2NTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50LFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgPzogRWxlbWVudCkge1xuXG5cdGNvbnN0IHJlcyA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgZWxlbWVudCk7XG5cdFxuXHRjb25zdCByZXN1bHQgPSAocmVzWzFdIGFzIHVua25vd24gYXMgRWxlbWVudCkuY2xvc2VzdDxMSVNTSG9zdDxUPj4ocmVzWzBdKTtcblx0aWYocmVzdWx0ID09PSBudWxsKVxuXHRcdHJldHVybiBudWxsO1xuXG5cdHJldHVybiBMSVNTLmdldExJU1NTeW5jKHJlc3VsdCk7XG59XG5MSVNTLnFzY1N5bmMgPSBxc2NTeW5jO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIEF1dG8gPT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBjbGFzcyBMSVNTX0F1dG8gZXh0ZW5kcyBMSVNTKHthdHRyaWJ1dGVzOiBbXCJzcmNcIl19KSB7XG5cblx0cmVhZG9ubHkgI2tub3duX3RhZyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXHRyZWFkb25seSAjZGlyZWN0b3J5OiBzdHJpbmc7XG5cdHJlYWRvbmx5ICNzdzogUHJvbWlzZTx2b2lkPjtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLiNzdyA9IG5ldyBQcm9taXNlKCBhc3luYyAocmVzb2x2ZSkgPT4ge1xuXHRcdFx0XG5cdFx0XHRhd2FpdCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihgLi9zdy5qc2ApO1xuXG5cdFx0XHRpZiggbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlciApXG5cdFx0XHRcdHJlc29sdmUoKTtcblxuXHRcdFx0bmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignY29udHJvbGxlcmNoYW5nZScsICgpID0+IHtcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblxuXHRcdGNvbnN0IHNyYyA9IHRoaXMuYXR0cnMuc3JjO1xuXHRcdGlmKHNyYyA9PT0gbnVsbClcblx0XHRcdHRocm93IG5ldyBFcnJvcihcInNyYyBhdHRyaWJ1dGUgaXMgbWlzc2luZy5cIik7XG5cdFx0dGhpcy4jZGlyZWN0b3J5ID0gc3JjWzBdID09PSAnLidcblx0XHRcdFx0XHRcdFx0XHQ/IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0vJHtzcmN9YFxuXHRcdFx0XHRcdFx0XHRcdDogc3JjO1xuXG5cdFx0bmV3IE11dGF0aW9uT2JzZXJ2ZXIoIChtdXRhdGlvbnMpID0+IHtcblxuXHRcdFx0Zm9yKGxldCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpXG5cdFx0XHRcdGZvcihsZXQgYWRkaXRpb24gb2YgbXV0YXRpb24uYWRkZWROb2Rlcylcblx0XHRcdFx0XHRpZihhZGRpdGlvbiBpbnN0YW5jZW9mIEVsZW1lbnQpXG5cdFx0XHRcdFx0XHR0aGlzLiNhZGRUYWcoYWRkaXRpb24udGFnTmFtZSlcblxuXHRcdH0pLm9ic2VydmUoIGRvY3VtZW50LCB7IGNoaWxkTGlzdDp0cnVlLCBzdWJ0cmVlOnRydWUgfSk7XG5cblxuXHRcdGZvciggbGV0IGVsZW0gb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIipcIikgKVxuXHRcdFx0dGhpcy4jYWRkVGFnKGVsZW0udGFnTmFtZSk7XG5cdH1cblxuXG4gICAgcHJvdGVjdGVkIHJlc291cmNlcygpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0XCJpbmRleC5qc1wiLFxuXHRcdFx0XCJpbmRleC5odG1sXCIsXG5cdFx0XHRcImluZGV4LmNzc1wiXG5cdFx0XTtcbiAgICB9XG5cblx0cHJvdGVjdGVkIGRlZmluZVdlYkNvbXBvbmVudCh0YWduYW1lOiBzdHJpbmcsIGZpbGVzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBvcHRzOiBQYXJ0aWFsPHtjb250ZW50OiBzdHJpbmcsIGNzczogc3RyaW5nfT4pIHtcblxuXHRcdGNvbnN0IGpzID0gZmlsZXNbXCJpbmRleC5qc1wiXTtcblx0XHRjb25zdCBjb250ZW50ID0gZmlsZXNbXCJpbmRleC5odG1sXCJdO1xuXG5cdFx0bGV0IGtsYXNzOiBudWxsfCBSZXR1cm5UeXBlPHR5cGVvZiBMSVNTPiA9IG51bGw7XG5cdFx0aWYoIGpzICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0a2xhc3MgPSBqcyhvcHRzKTtcblx0XHRlbHNlIGlmKCBjb250ZW50ICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0a2xhc3MgPSBjbGFzcyBXZWJDb21wb25lbnQgZXh0ZW5kcyBMSVNTKG9wdHMpIHt9O1xuXG5cdFx0aWYoa2xhc3MgPT09IG51bGwpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgZmlsZXMgZm9yIFdlYkNvbXBvbmVudCAke3RhZ25hbWV9LmApO1xuXG5cdFx0cmV0dXJuIExJU1MuZGVmaW5lKHRhZ25hbWUsIGtsYXNzKTtcblx0fVxuXG5cdGFzeW5jICNhZGRUYWcodGFnbmFtZTogc3RyaW5nKSB7XG5cblx0XHR0YWduYW1lID0gdGFnbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0aWYoIHRhZ25hbWUgPT09ICdsaXNzLWF1dG8nIHx8IHRhZ25hbWUgPT09ICdibGlzcy1hdXRvJyB8fCAhIHRhZ25hbWUuaW5jbHVkZXMoJy0nKSB8fCB0aGlzLiNrbm93bl90YWcuaGFzKCB0YWduYW1lICkgKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0dGhpcy4ja25vd25fdGFnLmFkZCh0YWduYW1lKTtcblxuXHRcdGF3YWl0IHRoaXMuI3N3OyAvLyBlbnN1cmUgU1cgaXMgaW5zdGFsbGVkLlxuXG5cdFx0Y29uc3QgZmlsZW5hbWVzID0gdGhpcy5yZXNvdXJjZXMoKTtcblx0XHRjb25zdCByZXNvdXJjZXMgPSBhd2FpdCBQcm9taXNlLmFsbCggZmlsZW5hbWVzLm1hcCggZmlsZSA9PiBmaWxlLmVuZHNXaXRoKCcuanMnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IF9pbXBvcnQgICAoYCR7dGhpcy4jZGlyZWN0b3J5fS8ke3RhZ25hbWV9LyR7ZmlsZX1gLCB0cnVlKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IF9mZXRjaFRleHQoYCR7dGhpcy4jZGlyZWN0b3J5fS8ke3RhZ25hbWV9LyR7ZmlsZX1gLCB0cnVlKSApICk7XG5cblx0XHRjb25zdCBmaWxlczogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBmaWxlbmFtZXMubGVuZ3RoOyArK2kpXG5cdFx0XHRpZiggcmVzb3VyY2VzW2ldICE9PSB1bmRlZmluZWQpXG5cdFx0XHRcdGZpbGVzW2ZpbGVuYW1lc1tpXV0gPSByZXNvdXJjZXNbaV07XG5cblx0XHRjb25zdCBjb250ZW50ID0gZmlsZXNbXCJpbmRleC5odG1sXCJdO1xuXHRcdGNvbnN0IGNzcyAgICAgPSBmaWxlc1tcImluZGV4LmNzc1wiXTtcblxuXHRcdGNvbnN0IG9wdHM6IFBhcnRpYWw8e2NvbnRlbnQ6IHN0cmluZywgY3NzOiBzdHJpbmd9PiA9IHtcblx0XHRcdC4uLmNvbnRlbnQgIT09IHVuZGVmaW5lZCAmJiB7Y29udGVudH0sXG5cdFx0XHQuLi5jc3MgICAgICE9PSB1bmRlZmluZWQgJiYge2Nzc30sXG5cdFx0fTtcblxuXHRcdHJldHVybiB0aGlzLmRlZmluZVdlYkNvbXBvbmVudCh0YWduYW1lLCBmaWxlcywgb3B0cyk7XG5cdFx0XG5cdH1cbn1cbkxJU1MuZGVmaW5lKFwibGlzcy1hdXRvXCIsIExJU1NfQXV0byk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50cyB7XG5cdFwibGlzcy1hdXRvXCI6IExJU1NfQXV0b1xufTtcbi8qXG4gKiBkZWNsYXJlIG1vZHVsZSAnJExJU1MnIHtcbiAqIFx0XHRpbnRlcmZhY2UgQ29tcG9uZW50cyB7XG4gKiBcdFx0XHRcIm5hbWVcIjogY2xhc3NcbiAqIFx0XHR9XG4gKiB9XG4gKi9cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBFdmVudHNUYXJnZXQgPT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIENzdEV2ZW50PEV2ZW50IGV4dGVuZHMgc3RyaW5nLCBBcmdzPiA9IEN1c3RvbUV2ZW50PEFyZ3M+ICYge3R5cGU6IEV2ZW50fTtcblxuZXhwb3J0IGludGVyZmFjZSBFdmVudHNUYXJnZXQ8RXZlbnRzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj57XG5cblx0YWRkRXZlbnRMaXN0ZW5lcjxFdmVudCBleHRlbmRzIEV4Y2x1ZGU8a2V5b2YgRXZlbnRzLCBzeW1ib2x8bnVtYmVyPj4odHlwZTogRXZlbnQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgbGlzdGVuZXI6IG51bGx8ICgoZXY6IENzdEV2ZW50PEV2ZW50LCBFdmVudHNbRXZlbnRdPikgPT4gdm9pZCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgb3B0aW9ucz86IGJvb2xlYW58QWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMpOiB2b2lkO1xuXG5cdGRpc3BhdGNoRXZlbnQ8RXZlbnQgZXh0ZW5kcyBFeGNsdWRlPGtleW9mIEV2ZW50cywgc3ltYm9sfG51bWJlcj4+KGV2ZW50OiBDc3RFdmVudDxFdmVudCwgRXZlbnRzW0V2ZW50XT4pOiBib29sZWFuO1xuXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI8RXZlbnQgZXh0ZW5kcyBFeGNsdWRlPGtleW9mIEV2ZW50cywgc3ltYm9sfG51bWJlcj4+KHR5cGU6IEV2ZW50LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsaXN0ZW5lcjogbnVsbHwgKChldjogQ3N0RXZlbnQ8RXZlbnQsIEV2ZW50c1tFdmVudF0+KSA9PiB2b2lkKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz86IGJvb2xlYW58QWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMpOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgQ3N0bUV2ZW50PEV2ZW50IGV4dGVuZHMgc3RyaW5nLCBBcmdzPiBleHRlbmRzIEN1c3RvbUV2ZW50PEFyZ3M+IHtcblxuXHRvdmVycmlkZSBnZXQgdHlwZSgpOiBFdmVudCB7IHJldHVybiBzdXBlci50eXBlIGFzIEV2ZW50OyB9XG5cblx0Y29uc3RydWN0b3IodHlwZTogRXZlbnQsIGFyZ3M6IEFyZ3MpIHtcblx0XHRzdXBlcih0eXBlLCB7ZGV0YWlsOiBhcmdzfSk7XG5cdH1cbn1cblxuZXhwb3J0IHR5cGUgRXZlbnRzVGFyZ2V0Q3N0cjxFdmVudHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4+ID0gQ29uc3RydWN0b3I8RXZlbnRzVGFyZ2V0PEV2ZW50cz4+O1xuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgaW50ZXJuYWwgdG9vbHMgPT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hSZXNvdXJjZShyZXNvdXJjZTogUmVzb3VyY2V8UHJvbWlzZTxSZXNvdXJjZT4pIHtcblxuXHRyZXNvdXJjZSA9IGF3YWl0IHJlc291cmNlO1xuXG5cdGlmKCAhIChyZXNvdXJjZSBpbnN0YW5jZW9mIFJlc3BvbnNlKSApXG5cdFx0cmVzb3VyY2UgPSBhd2FpdCBmZXRjaChyZXNvdXJjZSk7XG5cblx0cmV0dXJuIGF3YWl0IHJlc291cmNlLnRleHQoKTtcbn1cblxuXG5hc3luYyBmdW5jdGlvbiBfZmV0Y2hUZXh0KHVyaTogc3RyaW5nfFVSTCwgaXNMaXNzQXV0bzogYm9vbGVhbiA9IGZhbHNlKSB7XG5cblx0Y29uc3Qgb3B0aW9ucyA9IGlzTGlzc0F1dG9cblx0XHRcdFx0XHRcdD8ge2hlYWRlcnM6e1wibGlzcy1hdXRvXCI6IFwidHJ1ZVwifX1cblx0XHRcdFx0XHRcdDoge307XG5cblxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVyaSwgb3B0aW9ucyk7XG5cdGlmKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwIClcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXG5cdGlmKCBpc0xpc3NBdXRvICYmIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwic3RhdHVzXCIpISA9PT0gXCI0MDRcIiApXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblxuXHRyZXR1cm4gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xufVxuYXN5bmMgZnVuY3Rpb24gX2ltcG9ydCh1cmk6IHN0cmluZywgaXNMaXNzQXV0bzogYm9vbGVhbiA9IGZhbHNlKSB7XG5cblx0Ly8gdGVzdCBmb3IgdGhlIG1vZHVsZSBleGlzdGFuY2UuXG5cdGlmKGlzTGlzc0F1dG8gJiYgYXdhaXQgX2ZldGNoVGV4dCh1cmksIGlzTGlzc0F1dG8pID09PSB1bmRlZmluZWQgKVxuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cblx0dHJ5IHtcblx0XHRyZXR1cm4gKGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrSWdub3JlOiB0cnVlICovIHVyaSkpLmRlZmF1bHQ7XG5cdH0gY2F0Y2goZSkge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH1cbn1cblxuLy8gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81MTAwMDQ2MS9odG1sLWVsZW1lbnQtdGFnLW5hbWUtZnJvbS1jb25zdHJ1Y3RvclxuY29uc3QgSFRNTENMQVNTX1JFR0VYID0gIC9IVE1MKFxcdyspRWxlbWVudC87XG5jb25zdCBlbGVtZW50TmFtZUxvb2t1cFRhYmxlID0ge1xuICAgICdVTGlzdCc6ICd1bCcsXG4gICAgJ1RhYmxlQ2FwdGlvbic6ICdjYXB0aW9uJyxcbiAgICAnVGFibGVDZWxsJzogJ3RkJywgLy8gdGhcbiAgICAnVGFibGVDb2wnOiAnY29sJywgIC8vJ2NvbGdyb3VwJyxcbiAgICAnVGFibGVSb3cnOiAndHInLFxuICAgICdUYWJsZVNlY3Rpb24nOiAndGJvZHknLCAvL1sndGhlYWQnLCAndGJvZHknLCAndGZvb3QnXSxcbiAgICAnUXVvdGUnOiAncScsXG4gICAgJ1BhcmFncmFwaCc6ICdwJyxcbiAgICAnT0xpc3QnOiAnb2wnLFxuICAgICdNb2QnOiAnaW5zJywgLy8sICdkZWwnXSxcbiAgICAnTWVkaWEnOiAndmlkZW8nLC8vICdhdWRpbyddLFxuICAgICdJbWFnZSc6ICdpbWcnLFxuICAgICdIZWFkaW5nJzogJ2gxJywgLy8sICdoMicsICdoMycsICdoNCcsICdoNScsICdoNiddLFxuICAgICdEaXJlY3RvcnknOiAnZGlyJyxcbiAgICAnRExpc3QnOiAnZGwnLFxuICAgICdBbmNob3InOiAnYSdcbiAgfTtcbmZ1bmN0aW9uIF9lbGVtZW50MnRhZ25hbWUoQ2xhc3M6IHR5cGVvZiBIVE1MRWxlbWVudCk6IHN0cmluZ3xudWxsIHtcblxuXHRpZiggQ2xhc3MgPT09IEhUTUxFbGVtZW50IClcblx0XHRyZXR1cm4gbnVsbDtcblx0XG5cdGxldCBodG1sdGFnID0gSFRNTENMQVNTX1JFR0VYLmV4ZWMoQ2xhc3MubmFtZSkhWzFdO1xuXHRyZXR1cm4gZWxlbWVudE5hbWVMb29rdXBUYWJsZVtodG1sdGFnIGFzIGtleW9mIHR5cGVvZiBlbGVtZW50TmFtZUxvb2t1cFRhYmxlXSA/PyBodG1sdGFnLnRvTG93ZXJDYXNlKClcbn0iLCJpbXBvcnQgXCJzdHJ1Y3QvbWVudS50c1wiO1xuaW1wb3J0IFwic3RydWN0L2NhbGMvc2hlZXQudHNcIjtcblxuLy8gMVxuXG5pbXBvcnQgTElTUyBmcm9tIFwiTElTU1wiO1xuaW1wb3J0IHsgRm9ybWF0cyB9IGZyb20gXCJzdHJ1Y3QvY2FsYy9mb3JtYXQudHNcIjtcblxuY29uc3Qgc19mb3JtdWxhID0gYXdhaXQgTElTUy5xcygnI3NoZWV0X2Zvcm11bGEnKTtcblxuc19mb3JtdWxhLmdldFJhbmdlKFwiQTE6QzFcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUXVhbnRpdMOpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUHJpeCB1bml0YWlyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlByaXggdG90YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuc19mb3JtdWxhLmdldFJhbmdlKFwiQTI6QTRcIikuY29udGVudCA9IFsyMyAgLCAxMiwgNDRdO1xuc19mb3JtdWxhLmdldFJhbmdlKFwiQjI6QjRcIikuZm9ybWF0KEZvcm1hdHMuZXVyb3MpLmNvbnRlbnQgPSBbMC4yLCAwLjMsIDAuNF07XG5cbnNfZm9ybXVsYS5nZXRSYW5nZShcIkMyOkM0XCIpLmZvcm1hdChGb3JtYXRzLmV1cm9zKS5jb250ZW50ID0gW1xuICAgIFwiPUEyKkIyXCIsXG4gICAgXCI9QTMqQjNcIixcbiAgICBcIj1BNCpCNFwiXG5dO1xuXG4vKiovXG5cblxuY29uc3Qgc19jb21wbGV4X2Zvcm11bGEgPSBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfY29tcGxleF9mb3JtdWxhJyk7XG5cbnNfY29tcGxleF9mb3JtdWxhLmdldFJhbmdlKFwiQTE6QzFcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIllcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGb3JtdWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG5cbnNfY29tcGxleF9mb3JtdWxhLmdldFJhbmdlKFwiQTI6QjRcIikuY29udGVudCA9IFtcbiAgICAyLCA0LFxuICAgIDEsIDUsXG4gICAgNCwgNl07XG5cbnNfY29tcGxleF9mb3JtdWxhLmdldFJhbmdlKFwiQzJcIikuY29udGVudCA9XG5gPSBBMipCMlxuICtBMypCM1xuICtBNCpCNGA7XG5cbi8qKi9cblxuY29uc3Qgc190eXBlcyA9IGF3YWl0IExJU1MucXMoJyNzaGVldF90eXBlcycpO1xuXG5cbnNfdHlwZXMuZ2V0UmFuZ2UoXCJBMTpFMVwiKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUZXh0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTm9tYnJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJCb29sw6llblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRm9ybXVsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuc190eXBlcy5nZXRSYW5nZShcIkEyOkUyXCIpLmNvbnRlbnQgPSBbXG4gICAgXCJIZWxsb1wiLFxuICAgIDIuMyxcbiAgICB0cnVlLFxuICAgIG5ldyBEYXRlKCksXG4gICAgXCI9QjIrMlwiXG5dXG5cblxuY29uc3Qgc19jdXJzb3IgPSBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfY3Vyc29yJyk7XG5cbnNfY3Vyc29yLmdldFJhbmdlKFwiQTE6SDFcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gXCIqXCI7XG5zX2N1cnNvci5nZXRSYW5nZShcIkE0Okg0XCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFwiKlwiO1xuXG5zX2N1cnNvci5nZXRSYW5nZShcIkQxOkU0XCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFwiKlwiO1xuXG5zX2N1cnNvci5nZXRSYW5nZShcIkExOkE0XCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFwiKlwiO1xuc19jdXJzb3IuZ2V0UmFuZ2UoXCJIMTpINFwiLCB0cnVlKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpLmNvbnRlbnQgPSBcIipcIjtcblxuXG5jb25zdCBzXyRmb3JtdWxhID0gW1xuICAgIGF3YWl0IExJU1MucXMoJyNzaGVldF9fX19mb3JtdWxhJyksXG4gICAgYXdhaXQgTElTUy5xcygnI3NoZWV0X3hfX2Zvcm11bGEnKSxcbiAgICBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfX3hfZm9ybXVsYScpLFxuICAgIGF3YWl0IExJU1MucXMoJyNzaGVldF94eF9mb3JtdWxhJylcbl1cblxuZm9yKGxldCBpID0gMDsgaSA8IHNfJGZvcm11bGEubGVuZ3RoOyArK2kpIHtcbiAgICBjb25zdCBzXyRmb3JtID0gc18kZm9ybXVsYVtpXTtcblxuICAgIHNfJGZvcm0uZ2V0UmFuZ2UoXCJBMTpEMVwiKS5mb3JtYXQoXCJib2xkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW50ID0gWzAsIDEsIDIsIDNdO1xuXG4gICAgc18kZm9ybS5nZXRSYW5nZShcIkEyOkE0XCIpLmZvcm1hdChcImJvbGRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQgPSBbMSwgMiwgM107XG5cbiAgICBsZXQgcmVmID0gXCI9QTFcIjtcbiAgICBpZiggaSA9PT0gMSlcbiAgICAgICAgcmVmID0gXCI9JEExXCI7XG4gICAgaWYoIGkgPT09IDIpXG4gICAgICAgIHJlZiA9IFwiPUEkMVwiO1xuICAgIGlmKCBpID09PSAzKVxuICAgICAgICByZWYgPSBcIj0kQSQxXCI7XG5cbiAgICBzXyRmb3JtLmdldFJhbmdlKFwiQjJcIikuY29udGVudCA9IHJlZjtcblxuICAgIHNfJGZvcm0uZ2V0UmFuZ2UoXCJBMTpENFwiKS5mb3JtYXQoXCJhbGlnbl9jZW50ZXJcIilcbn1cblxuY29uc3Qgc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uID0gYXdhaXQgTElTUy5xcygnI3NoZWV0X3JlY29waWVfbW90aXZhdGlvbicpO1xuXG5zaGVldF9yZWNvcGllX21vdGl2YXRpb24uZ2V0UmFuZ2UoXCJBMTpENFwiKS5mb3JtYXQoXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFtcbiAgICBcIkNvbnNvL2pvdXJcIiwgXCJDcmF5b25zXCIsIFwiR29tbWVzXCIsIFwiVG90YWwgKGpvdXIpXCIsXG4gICAgXCIwMS8wMVwiICAsIDIsIDMsIFwiPUIyK0MyXCIsIFxuICAgIFwiMDIvMDFcIiAgLCA0LCAxLCBcIj1DMytDM1wiLCBcbiAgICBcIlRvdGFsIChwcm9kKVwiICAsIFwiPUIyK0IzXCIsIFwiPUMyK0MzXCIsIFwiPUQyK0QzXCIsIFxuXTtcbnNoZWV0X3JlY29waWVfbW90aXZhdGlvbi5nZXRSYW5nZShcIkExOkQxXCIpLmZvcm1hdChcImJvbGRcIik7XG5zaGVldF9yZWNvcGllX21vdGl2YXRpb24uZ2V0UmFuZ2UoXCJBMjpBNFwiKS5mb3JtYXQoXCJib2xkXCIpO1xuXG5jb25zdCBzaGVldF9yZWNvcGllX21vdGl2YXRpb25fZW1wdHkgPSBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uX2VtcHR5Jyk7XG5cbnNoZWV0X3JlY29waWVfbW90aXZhdGlvbl9lbXB0eS5nZXRSYW5nZShcIkExOkQ0XCIpLmZvcm1hdChcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gW1xuICAgIFwiQ29uc28vam91clwiLCBcIkNyYXlvbnNcIiwgXCJHb21tZXNcIiwgXCJUb3RhbCAoam91cilcIixcbiAgICBcIjAxLzAxXCIgICwgMiwgMywgdW5kZWZpbmVkLCBcbiAgICBcIjAyLzAxXCIgICwgNCwgMSwgdW5kZWZpbmVkLCBcbiAgICBcIlRvdGFsIChwcm9kKVwiICAsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWRcbl07XG5zaGVldF9yZWNvcGllX21vdGl2YXRpb25fZW1wdHkuZ2V0UmFuZ2UoXCJBMTpEMVwiKS5mb3JtYXQoXCJib2xkXCIpO1xuc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uX2VtcHR5LmdldFJhbmdlKFwiQTI6QTRcIikuZm9ybWF0KFwiYm9sZFwiKTtcblxuY29uc3Qgc2hlZXRfcmVjb3BpZV9pbmNyID0gYXdhaXQgTElTUy5xcygnI3NoZWV0X3JlY29waWVfaW5jcicpO1xuXG5zaGVldF9yZWNvcGllX2luY3IuZ2V0UmFuZ2UoJ0ExOkEyJykuY29udGVudCA9IFsgMSwgbmV3IERhdGUoKSBdO1xuXG5cbi8vIHRlc3RcbmNvbnN0IGMgPSBgXG48dGFibGUgaWQ9XCJ1blwiPlxuICAgIDx0Ym9keT5cbiAgICAgICAgPHRyPjx0ZD5YWFg8L3RkPjwvdHI+XG4gICAgPC90Ym9keT5cbjwvdGFibGU+YDtcblxuY29uc3QgY3NzID0gYFxuICAgIHRkOm5vdChbY29udGVudGVkaXRhYmxlXSkge1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB9XG5gO1xuXG5jbGFzcyBYIGV4dGVuZHMgTElTUyh7XG4gICAgY29udGVudDogYywgY3NzXG59KSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgY29uc3QgdGQgPSB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJyN1biB0ZCcpITtcbiAgICAgICAgdGQudG9nZ2xlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcbiAgICAgICAgdGQuZm9jdXMoKTtcbiAgICAgICAgdGQudGV4dENvbnRlbnQgPSBcIllZWVwiO1xuICAgIH1cbn1cblxuTElTUy5kZWZpbmUoJ3Rlc3QtdGVzdCcsIFgpOyIsImltcG9ydCB7IHN0cjJodG1sIH0gZnJvbSBcInN0cnVjdC91dGlscy9zdHIyaHRtbFwiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0LCBDZWxsTGlzdCB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbmV4cG9ydCBjbGFzcyBSYW5nZU92ZXJsYXkgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG5cbiAgICAjc2hlZXQ6IENhbGNTaGVldDtcbiAgICAjcmFuZ2U6IHN0cmluZ3xudWxsID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgb3ZlcmxheTogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihzaGVldDogQ2FsY1NoZWV0LCAuLi5jbGFzc2xpc3Q6IHN0cmluZ1tdKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLiNzaGVldCA9IHNoZWV0O1xuICAgICAgICB0aGlzLiNzaGVldC5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub3ZlcmxheSA9IHN0cjJodG1sKGA8ZGl2IGNsYXNzPSdvdmVybGF5Jz48L2Rpdj5gKTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NsaXN0KTtcblxuICAgICAgICBzaGVldC5jb250ZW50LmFwcGVuZCggdGhpcy5vdmVybGF5ICk7XG4gICAgfVxuXG4gICAgc2V0UmFuZ2UocmFuZ2U6IENlbGxMaXN0fG51bGwpIHtcbiAgICAgICAgdGhpcy4jcmFuZ2UgPSByYW5nZSA9PT0gbnVsbCA/IG51bGwgOiByYW5nZS5wbGFnZV9uYW1lITtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0UmVjdCguLi5yZWN0OiByZWFkb25seSBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSkge1xuICAgICAgICByZXR1cm4gcmVjdDtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIiwgdGhpcy4jcmFuZ2UgPT09IG51bGwpO1xuXG4gICAgICAgIGlmKCB0aGlzLiNyYW5nZSA9PT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuZ2V0UmVjdCggLi4udGhpcy4jc2hlZXQuZ2V0UmVjdCggdGhpcy4jc2hlZXQuZ2V0UmFuZ2UodGhpcy4jcmFuZ2UpICkgKTtcbiAgICAgICAgdGhpcy4jc2hlZXQuc2V0UmVjdCh0aGlzLm92ZXJsYXksIHJlY3QgKTtcbiAgICB9XG5cbiAgICBvdmVycmlkZSBhZGRFdmVudExpc3RlbmVyKHR5cGU6IHN0cmluZywgY2FsbGJhY2s6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QgfCBudWxsLCBvcHRpb25zPzogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMgfCBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIG92ZXJyaWRlIHJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZTogc3RyaW5nLCBjYWxsYmFjazogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCB8IG51bGwsIG9wdGlvbnM/OiBFdmVudExpc3RlbmVyT3B0aW9ucyB8IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLm92ZXJsYXkucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgb3B0aW9ucyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm9ybXVsYVJlZiBleHRlbmRzIFJhbmdlT3ZlcmxheSB7XG5cbiAgICBjb25zdHJ1Y3RvcihzaGVldDogQ2FsY1NoZWV0KSB7XG4gICAgICAgIHN1cGVyKHNoZWV0LCBcInJhbmdlX2hpZ2hsaWdodFwiKTtcbiAgICB9XG5cbiAgICAjY3VyX2NvbG9yID0gMDtcbiAgICBzZXRDb2xvcihjb2xvcl9pZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKGBoaWdobGlnaHRfJHt0aGlzLiNjdXJfY29sb3J9YCk7IFxuICAgICAgICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LmFkZChgaGlnaGxpZ2h0XyR7Y29sb3JfaWR9YCk7XG4gICAgICAgIHRoaXMuI2N1cl9jb2xvciA9IGNvbG9yX2lkO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlY29weUhhbmRsZSBleHRlbmRzIFJhbmdlT3ZlcmxheSB7XG5cbiAgICBjb25zdHJ1Y3RvcihzaGVldDogQ2FsY1NoZWV0KSB7XG4gICAgICAgIHN1cGVyKHNoZWV0LCBcInJlY29weVwiKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0UmVjdCh4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIFt4K3ctMiwgeStoLTIsIDUsIDVdIGFzIGNvbnN0O1xuICAgIH1cblxufSIsImltcG9ydCB7IEZvcm11bGEgfSBmcm9tIFwiLi9mb3JtdWxhX3BhcnNlclwiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0LCBDZWxsLCBDZWxsTGlzdCwgUmF3Q29udGVudFR5cGUgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5leHBvcnQgY2xhc3MgRm9ybWF0TWFuYWdlciB7XG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCkge1xuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgc2hlZXQuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2OiBLZXlib2FyZEV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGlmKCAhIGV2LmN0cmxLZXkgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ2InKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcImJvbGRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnaScpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KFwiaXRhbGljXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ3UnKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcInVuZGVybGluZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdsJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJhbGlnbl9sZWZ0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ3InKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcImFsaWduX3JpZ2h0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ2UnKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcImFsaWduX2NlbnRlclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICc0JyAmJiBldi5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoRm9ybWF0cy5ldXJvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnNScgJiYgZXYuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KEZvcm1hdHMucG91cmNlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJzEnICYmIGV2LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChGb3JtYXRzLm51bWJlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgICAgICAvKiBUT0RPIGxpc3RlbiAqL1xuXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxvYXQyRGF0ZShmbG9hdDogbnVtYmVyKSB7XG5cbiAgICBsZXQgY29udGVudCA9IG5ldyBEYXRlKFwiMTg5OS0xMi0zMFwiKTtcblxuICAgIGNvbnRlbnQuc2V0RGF0ZSggY29udGVudC5nZXREYXRlKCkgKyBmbG9hdCk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkYXRlMkZsb2F0KGRhdGU6IERhdGUpIHtcbiAgICBjb25zdCBiZWcgPSBuZXcgRGF0ZShcIjE4OTktMTItMzBcIik7XG4gICAgcmV0dXJuICsoKGRhdGUuZ2V0VGltZSgpIC0gYmVnLmdldFRpbWUoKSkgLyAoMjQqMzYwMCoxMDAwKSkudG9GaXhlZCg3KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFJhdyhwdGhpczogQ2VsbCwgdmFsdWUgPSBwdGhpcy5yYXdDb250ZW50KSB7XG4gICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRm9ybXVsYSlcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIEZvcm1hdHMuZGVmYXVsdC5jYWxsKHB0aGlzLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBjb25zdCBGb3JtYXRzID0ge1xuXG4gICAgZGVmYXVsdDogZnVuY3Rpb24odGhpczogQ2VsbHxudWxsLCB2YWx1ZSA9IHRoaXM/LnJhd0NvbnRlbnQpIHtcblxuICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBGb3JtdWxhKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5jYWNoZWRWYWx1ZSgpO1xuXG4gICAgICAgIGNvbnN0IHByZWMgPSArKHRoaXM/LmdldEF0dHJpYnV0ZSgncHJlY2lzaW9uJykgPz8gMik7XG5cbiAgICAgICAgaWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuXG4gICAgICAgICAgICBpZiggdGhpcz8uZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSA9PT0gXCJwb3VyY2VudFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBgJHsrKCAoK3ZhbHVlKSoxMDApLnRvUHJlY2lzaW9uKDcpfWAucmVwbGFjZSgnLicsICcsJykgKyBcIiVcIjtcblxuICAgICAgICAgICAgcmV0dXJuIGAkeyt2YWx1ZS50b1ByZWNpc2lvbig3KX1gLnJlcGxhY2UoJy4nLCAnLCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPyAnVlJBSScgOiAnRkFVWCc7XG5cbiAgICAgICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUZSXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlITtcbiAgICB9LFxuICAgIG51bWJlcjogZnVuY3Rpb24odGhpczpDZWxsLCB2YWx1ZSA9IHRoaXMucmF3Q29udGVudCkge1xuXG4gICAgICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIEZvcm11bGEpXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmNhY2hlZFZhbHVlKCk7XG5cbiAgICAgICAgaWYodmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuXG4gICAgICAgIGlmKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSlcbiAgICAgICAgICAgIHZhbHVlID0gZGF0ZTJGbG9hdCh2YWx1ZSk7XG5cbiAgICAgICAgaWYoIHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIpICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtdHlwZVwiLCBcIm51bWJlclwiKTtcblxuICAgICAgICAgICAgaWYoICEgKHRoaXMucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEpIClcbiAgICAgICAgICAgICAgICBDYWxjU2hlZXQuZ2V0U2hlZXRGcm9tQ2VsbCh0aGlzKS5nZXRSYW5nZSh0aGlzKS5jb250ZW50ID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmVjID0gKyh0aGlzLmdldEF0dHJpYnV0ZSgncHJlY2lzaW9uJykgPz8gMik7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjLFxuICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjXG4gICAgICAgICAgICB9KTtcbiAgICB9LFxuICAgIHBvdXJjZW50OiBmdW5jdGlvbih0aGlzOkNlbGwsIHZhbHVlID0gdGhpcy5yYXdDb250ZW50KSB7XG5cbiAgICAgICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRm9ybXVsYSlcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuY2FjaGVkVmFsdWUoKTtcblxuICAgICAgICBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIGlmKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSlcbiAgICAgICAgICAgIHZhbHVlID0gZGF0ZTJGbG9hdCh2YWx1ZSk7XG5cbiAgICAgICAgaWYoIHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIpICE9PSBcInBvdXJjZW50XCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIsIFwicG91cmNlbnRcIik7XG4gICAgICAgICAgICBpZiggISAodGhpcy5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSkgKVxuICAgICAgICAgICAgICAgIENhbGNTaGVldC5nZXRTaGVldEZyb21DZWxsKHRoaXMpLmdldFJhbmdlKHRoaXMpLmNvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZWMgPSArKHRoaXMuZ2V0QXR0cmlidXRlKCdwcmVjaXNpb24nKSA/PyAyKTtcblxuICAgICAgICByZXR1cm4gKHZhbHVlICogMTAwKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHtcbiAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogcHJlYyxcbiAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogcHJlY1xuICAgICAgICAgICAgfSkgKyAnJSc7XG4gICAgfSxcbiAgICBkYXRlOiBmdW5jdGlvbih0aGlzOkNlbGwsIHZhbHVlID0gdGhpcy5yYXdDb250ZW50KSB7XG4gICAgICAgIFxuICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBGb3JtdWxhKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5jYWNoZWRWYWx1ZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgIGlmKHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIGlmKCB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG5cbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIiwgXCJkYXRlXCIpO1xuXG4gICAgICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgKSB7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IHZhbHVlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUZSXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUuc2xpY2UoMCwgNikgKyBkYXRlLnNsaWNlKDgpO1xuICAgICAgICB9IGlmKCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGZsb2F0MkRhdGUodmFsdWUpO1xuXG4gICAgICAgICAgICBpZiggISAodGhpcy5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSkgKVxuICAgICAgICAgICAgICAgIENhbGNTaGVldC5nZXRTaGVldEZyb21DZWxsKHRoaXMpLmdldFJhbmdlKCB0aGlzICkuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBkYXRlID0gY29udGVudC50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRlLnNsaWNlKDAsIDYpICsgZGF0ZS5zbGljZSg4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIGV1cm9zOiBmdW5jdGlvbih0aGlzOkNlbGwsIHZhbHVlID0gdGhpcy5yYXdDb250ZW50KSB7XG5cbiAgICAgICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRm9ybXVsYSlcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuY2FjaGVkVmFsdWUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG5cbiAgICAgICAgaWYodmFsdWUgaW5zdGFuY2VvZiBEYXRlKVxuICAgICAgICAgICAgdmFsdWUgPSBkYXRlMkZsb2F0KHZhbHVlKTtcblxuICAgICAgICBpZiggdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIikgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIsIFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgaWYoICEgKHRoaXMucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEpIClcbiAgICAgICAgICAgICAgICBDYWxjU2hlZXQuZ2V0U2hlZXRGcm9tQ2VsbCh0aGlzKS5nZXRSYW5nZSh0aGlzKS5jb250ZW50ID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmVjID0gKyh0aGlzLmdldEF0dHJpYnV0ZSgncHJlY2lzaW9uJykgPz8gMik7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjLFxuICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjXG4gICAgICAgICAgICB9KSArICcg4oKsJztcbiAgICB9LFxufVxuXG5leHBvcnQgY2xhc3MgRm9ybWF0IHtcblxuICAgICNmb3JtYXQ6IFJlY29yZDxzdHJpbmcsIGFueT47XG5cbiAgICBjb25zdHJ1Y3Rvcihmb3JtYXQ6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICAgICAgdGhpcy4jZm9ybWF0ID0gZm9ybWF0O1xuICAgIH1cblxuICAgIGFwcGx5VG8oY2VsbDogQ2VsbHxDZWxsTGlzdCkge1xuXG4gICAgICAgIGlmKCBjZWxsIGluc3RhbmNlb2YgQ2VsbExpc3QpIHtcblxuICAgICAgICAgICAgZm9yKGxldCBjIG9mIGNlbGwuY2VsbHMpXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseVRvKGMpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IG5hbWUgaW4gdGhpcy4jZm9ybWF0KSB7XG4gICAgICAgICAgICBsZXQgdmFsID0gdGhpcy4jZm9ybWF0W25hbWVdO1xuXG4gICAgICAgICAgICBpZihuYW1lID09PSAnZm9ybWF0Jykge1xuXG4gICAgICAgICAgICAgICAgaWYoIHZhbCA9PT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuZm9ybWF0ID0gRm9ybWF0cy5kZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gY2VsbC5mb3JtYXQoKTsgLy9UT0RPOiBpZiBmY3RcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2VsbC5mb3JtYXQgPSB2YWw7XG4gICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGNlbGwuZm9ybWF0KCBjZWxsLnJhd0NvbnRlbnQpOyAvL1RPRE86IGlmIGZjdFxuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKG5hbWUgPT09ICdwcmVjaXNpb24nKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicsIHZhbCk7XG4gICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGNlbGwuZm9ybWF0Py4oIGNlbGwucmF3Q29udGVudCk7IC8vVE9ETzogaWYgZmN0XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCBuYW1lID09PSAnc3BhbicgKSB7XG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHNoZWV0ID0gQ2FsY1NoZWV0LmdldFNoZWV0RnJvbUNlbGwoY2VsbCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoIHZhbFswXSA9PT0gMSAmJiB2YWxbMV0gPT09IDEpIHsgLy8gdW5tZXJnZVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCByID0gKyhjZWxsLmdldEF0dHJpYnV0ZSgncm93c3BhbicpID8/IDApO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYyA9ICsoY2VsbC5nZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nKSA/PyAwKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcjsgKytpKVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGM7ICsraikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHNoZWV0LnJlbGF0aXZlVG8oY2VsbCwgaSwgaik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRhcmdldC5jZWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ3Jvd3NwYW4nKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ2NvbHNwYW4nKTtcblxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgncm93c3BhbicsIGAke3ZhbFswXX1gKTtcbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsIGAke3ZhbFsxXX1gKTtcblxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB2YWxbMF07ICsraSlcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHZhbFsxXTsgKytqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpID09PSAwICYmIGogPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHNoZWV0LnJlbGF0aXZlVG8oY2VsbCwgaSwgaik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2VsbCA9IGNlbGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiggdHlwZW9mIHZhbCA9PT0gXCJib29sZWFuXCIpIHtcblxuICAgICAgICAgICAgICAgIGlmKCBuYW1lLnN0YXJ0c1dpdGgoJ2FsaWduXycpICkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2FsaWduX2xlZnQnKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdhbGlnbl9jZW50ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdhbGlnbl9yaWdodCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiggbmFtZS5zdGFydHNXaXRoKCd2YWxpZ25fJykgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWduX3RvcCcpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlnbl9taWRkbGUnKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZ25fYm90dG9tJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QudG9nZ2xlKG5hbWUsIHZhbCk7XG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2VsbC5zdHlsZS5zZXRQcm9wZXJ0eShgLS0ke25hbWV9YCwgdmFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFByb3BlcnR5KG5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy4jZm9ybWF0W25hbWVdO1xuICAgIH1cbiAgICBoYXNQcm9wZXJ0eShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5hbWUgaW4gdGhpcy4jZm9ybWF0O1xuICAgIH1cblxuICAgIHN0YXRpYyBleHRyYWN0Rm9ybWF0KGNlbGw6IENlbGx8Q2VsbExpc3QpOiBGb3JtYXQge1xuICAgICAgICBcbiAgICAgICAgaWYoIGNlbGwgaW5zdGFuY2VvZiBDZWxsTGlzdCkge1xuXG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IGNlbGwuY2VsbHM7XG5cbiAgICAgICAgICAgIGxldCBmb3JtYXQgPSBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxsc1swXSk7XG5cbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCBjZWxscy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGxldCBmMiA9IEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzW2ldKTtcblxuICAgICAgICAgICAgICAgIGZvcihsZXQga2V5IGluIGZvcm1hdC4jZm9ybWF0KVxuICAgICAgICAgICAgICAgICAgICBpZiggISAoa2V5IGluIGYyLiNmb3JtYXQpIHx8IGYyLiNmb3JtYXRba2V5XSAhPT0gZm9ybWF0LiNmb3JtYXRba2V5XSApXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZm9ybWF0LiNmb3JtYXRba2V5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IGZvcm1hdCA9IE9iamVjdC5mcm9tRW50cmllczxhbnk+KCBbLi4uY2VsbC5jbGFzc0xpc3QudmFsdWVzKCldLm1hcChlID0+IFtlLCB0cnVlXSkgKTtcbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjZWxsLnN0eWxlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgbmFtZSA9IGNlbGwuc3R5bGUuaXRlbShpKTtcbiAgICAgICAgICAgIGlmKCAhIG5hbWUuc3RhcnRzV2l0aCgnLS0nKSApXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBmb3JtYXRbbmFtZS5zbGljZSgyKV0gPSBjZWxsLnN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb2xzcGFuID0gKyhjZWxsLmdldEF0dHJpYnV0ZSgnY29sc3BhbicpID8/IDEpO1xuICAgICAgICBjb25zdCByb3dzcGFuID0gKyhjZWxsLmdldEF0dHJpYnV0ZSgncm93c3BhbicpID8/IDEpO1xuXG4gICAgICAgIGlmKCBjb2xzcGFuID4gMSB8fCByb3dzcGFuID4gMSApXG4gICAgICAgICAgICBmb3JtYXQuc3BhbiA9IFsgcm93c3BhbiwgY29sc3BhbiBdO1xuXG4gICAgICAgIGlmKCAhIChcImZvbnRfc2l6ZVwiIGluIGZvcm1hdCkgKVxuICAgICAgICAgICAgZm9ybWF0Wydmb250X3NpemUnXSA9ICcxMHB0JztcblxuICAgICAgICBpZiggXCJmb3JtYXRcIiBpbiBjZWxsKVxuICAgICAgICAgICAgZm9ybWF0LmZvcm1hdCA9IGNlbGwuZm9ybWF0O1xuXG4gICAgICAgIGlmKCBjZWxsLmhhc0F0dHJpYnV0ZSgncHJlY2lzaW9uJykgKVxuICAgICAgICAgICAgZm9ybWF0LnByZWNpc2lvbiA9IGNlbGwuZ2V0QXR0cmlidXRlKCdwcmVjaXNpb24nKTtcblxuICAgICAgICByZXR1cm4gbmV3IEZvcm1hdChmb3JtYXQpO1xuICAgIH1cbn0iLCIvL1RPRE86IHdlYnBhY2sgY29uZmlnLi4uXG5pbXBvcnQgTElTUyBmcm9tIFwiLi4vLi4vLi4vbGlicy9MSVNTXCI7XG5pbXBvcnQgeyBmb3JtYXRSYXcsIEZvcm1hdHMgfSBmcm9tIFwiLi9mb3JtYXRcIjtcbmltcG9ydCB7IENhbGNTaGVldCwgQ2VsbCB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbmNvbnN0IGNzcyA9IGBcbiAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgJiBwcmUge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoIDFyZW0gKyA4cHggKyAycHggKTtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGliZXJhdGlvbiBTYW5zJztcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cblxuZXhwb3J0IGNsYXNzIENhbGNGb3JtdWxhIGV4dGVuZHMgTElTUyh7XG4gICAgY3NzXG59KSB7XG5cbiAgICAjaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcbiAgICAjc2hlZXQgICE6IENhbGNTaGVldDtcbiAgICAjY3VyX2NlbGw6IENlbGx8bnVsbCA9IG51bGw7XG4gICAgI29uSW5wdXQ6IChldjogRXZlbnQpID0+IHZvaWQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKCB0aGlzLiNpbnB1dCApO1xuXG4gICAgICAgIHRoaXMuI2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiggdGhpcy4jY3VyX2NlbGwgPT09IG51bGwgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgLy90aGlzLiNzaGVldC5jdXJzb3IuY29udGVudCA9IHRoaXMuI2lucHV0LnRleHRDb250ZW50ITtcbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPSBudWxsO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiggdGhpcy4jY3VyX2NlbGwgPT09IG51bGwgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy4jc2hlZXQuc3RhdGVzLmNlbGxfZWRpdC5zdGF0ZSA9IHRoaXMuI2N1cl9jZWxsO1xuICAgICAgICAgICAgLy90aGlzLiNjdXJfY2VsbCEudGV4dENvbnRlbnQgPSB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgaWYoIHRoaXMuI2N1cl9jZWxsID09PSBudWxsIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsIS50ZXh0Q29udGVudCA9IGZvcm1hdFJhdyh0aGlzLiNjdXJfY2VsbCwgdGhpcy4jaW5wdXQudGV4dENvbnRlbnQhICk7XG4gICAgICAgICAgICB0aGlzLiNjdXJfY2VsbC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoJ2lucHV0Jywge2RldGFpbDogdHJ1ZX0pICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI29uSW5wdXQgPSAoZXY6IEV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgaWYoIGV2LmRldGFpbCA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCA9IGZvcm1hdFJhdyggdGhpcy4jY3VyX2NlbGwhLCB0aGlzLiNjdXJfY2VsbCEudGV4dENvbnRlbnQhICk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3luY1RvKHNoZWV0OiBDYWxjU2hlZXQpIHtcblxuICAgICAgICB0aGlzLiNzaGVldCA9IHNoZWV0O1xuICAgICAgICBjb25zdCBjdXJzb3IgPSB0aGlzLiNzaGVldC5jdXJzb3I7XG5cbiAgICAgICAgc2hlZXQuaG9zdC5hZGRFdmVudExpc3RlbmVyKCd1cGRhdGUnLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCA9IGZvcm1hdFJhdyhjdXJzb3IuZmlyc3RDZWxsICk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY3Vyc29yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgY2VsbHMgPSBjdXJzb3IuY2VsbHM7XG5cbiAgICAgICAgICAgIHRoaXMuI2lucHV0LnRvZ2dsZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgISBzaGVldC5pc1JPICk7XG5cbiAgICAgICAgICAgIGlmKCBjZWxscy5sZW5ndGggPT09IDApIHtcblxuICAgICAgICAgICAgICAgIGlmKCB0aGlzLiNjdXJfY2VsbCAhPT0gbnVsbCApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy4jb25JbnB1dCk7XG4gICAgICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jaW5wdXQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwgPSBjZWxsc1swXTtcbiAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy4jb25JbnB1dCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gZm9ybWF0UmF3KCB0aGlzLiNjdXJfY2VsbCApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuTElTUy5kZWZpbmUoJ2NhbGMtZm9ybXVsYScsIENhbGNGb3JtdWxhKTsiLCJpbXBvcnQgeyBkYXRlMkZsb2F0LCBGb3JtYXRzIH0gZnJvbSBcIi4vZm9ybWF0XCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIFZhbHVlVHlwZSB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbmV4cG9ydCBjbGFzcyBGb3JtdWxhIHtcblxuICAgICNzdHI6IHN0cmluZztcbiAgICAjZXhlYzogKHNoZWV0OiBDYWxjU2hlZXQpID0+IFZhbHVlVHlwZTtcbiAgICAjcmFuZ2VzOiBUb2tlbltdO1xuXG4gICAgI2NhY2hlOiBWYWx1ZVR5cGV8bnVsbCA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcihzdHI6IHN0cmluZywgZXhlYzogKHNoZWV0OiBDYWxjU2hlZXQpID0+IFZhbHVlVHlwZSwgcmFuZ2VzX3Rva2VuOiBUb2tlbltdID0gW10pIHtcblxuICAgICAgICB0aGlzLiNzdHIgPSBzdHI7XG4gICAgICAgIHRoaXMuI2V4ZWMgPSBleGVjO1xuICAgICAgICB0aGlzLiNyYW5nZXMgPSByYW5nZXNfdG9rZW47XG4gICAgfVxuICAgIFxuICAgIHJlbGF0aXZlVG8oIHNoZWV0OiBDYWxjU2hlZXQsIGRyb3c6IG51bWJlciwgZGNvbDogbnVtYmVyKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgbmV3X3JhbmdlcyA9IHRoaXMuI3Jhbmdlcy5tYXAociA9PiB7XG5cbiAgICAgICAgICAgIC8vVE9ETzogaWYgcmFuZ2UuLi5cbiAgICAgICAgICAgIGxldCBwb3MgPSBbLi4uc2hlZXQuY2VsbFBvcyggc2hlZXQuZ2V0UmFuZ2Uoci52YWx1ZSkuZmlyc3RDZWxsICldO1xuICAgIFxuICAgICAgICAgICAgaWYoIHIudmFsdWUubGFzdEluZGV4T2YoJyQnKSA8PSAwIClcbiAgICAgICAgICAgICAgICBwb3NbMF0gKz0gZHJvdztcbiAgICAgICAgICAgIGlmKCByLnZhbHVlWzBdICE9PSAnJCcgKVxuICAgICAgICAgICAgICAgIHBvc1sxXSArPSBkY29sO1xuXG4gICAgICAgICAgICByZXR1cm4gYCR7U3RyaW5nLmZyb21DaGFyQ29kZSg2NStwb3NbMV0tMSl9JHtwb3NbMF19YDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG5ld19mb3JtdWxhID0gXCJcIjtcblxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuI3Jhbmdlcy5sZW5ndGg7ICsraSkge1xuXG4gICAgICAgICAgICBuZXdfZm9ybXVsYSArPSB0aGlzLiNzdHIuc2xpY2Uob2Zmc2V0LCB0aGlzLiNyYW5nZXNbaV0uYmVnKTtcbiAgICAgICAgICAgIG5ld19mb3JtdWxhICs9IG5ld19yYW5nZXNbaV07XG5cbiAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuI3Jhbmdlc1tpXS5lbmQ7XG4gICAgICAgIH1cbiAgICAgICAgbmV3X2Zvcm11bGEgKz0gdGhpcy4jc3RyLnNsaWNlKG9mZnNldCk7XG4gICAgICAgIFxuICAgICAgICAvL2NhbiBiZSBvcHRpbWl6ZWQuLi5cbiAgICAgICAgcmV0dXJuIHBhcnNlX2Zvcm11bGEoIG5ld19mb3JtdWxhICk7XG4gICAgfVxuXG4gICAgZ2V0IHJhbmdlc1Rva2VuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcmFuZ2VzO1xuICAgIH1cblxuICAgIHJlc2V0Q2FjaGUoKSB7XG4gICAgICAgIHRoaXMuI2NhY2hlID0gbnVsbDtcbiAgICB9XG5cbiAgICBjYWNoZWRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NhY2hlITtcbiAgICB9XG5cbiAgICBleGVjKHNoZWV0OiBDYWxjU2hlZXQpIHtcblxuICAgICAgICBpZiggdGhpcy4jY2FjaGUgIT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4jY2FjaGU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuI2NhY2hlID0gdGhpcy4jZXhlYyhzaGVldCk7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzdHI7XG4gICAgfVxufVxuXG50eXBlIFRva2VuID0ge1xuICAgIGJlZzogbnVtYmVyLFxuICAgIGVuZDogbnVtYmVyLFxuICAgIHZhbHVlOiBzdHJpbmcsXG4gICAgdHlwZTogXCJzdHJpbmdcInxcIm51bWJlclwifFwiY2FsbFwifFwicmFuZ2VcInxcIm9wXCJcbn1cblxuXG5mdW5jdGlvbiBleHRyYWN0VG9rZW4oc3RyOiBzdHJpbmcsIG9mZnNldDogbnVtYmVyKSB7XG5cbiAgICB3aGlsZSggWycgJywgJ1xcbicsICdcXHQnXS5pbmNsdWRlcyhzdHJbb2Zmc2V0XSkgKSAvLyBpZ25vcmUgd2hpdGVzcGFjZXNcbiAgICAgICAgKytvZmZzZXQ7XG5cbiAgICBsZXQgdG9rZW46IFBhcnRpYWw8VG9rZW4+ID0ge1xuICAgICAgICBiZWc6IG9mZnNldFxuICAgIH07XG5cbiAgICBpZihzdHJbb2Zmc2V0XSA9PT0gJ1wiJykge1xuICAgICAgICB0b2tlbi50eXBlID0gXCJzdHJpbmdcIjtcbiAgICAgICAgd2hpbGUoIHN0clsrK29mZnNldF0gIT09ICdcIicgJiYgc3RyW29mZnNldC0xXSAhPT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICBpZihvZmZzZXQrMSA+PSBzdHIubGVuZ3RoIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Zvcm11bGEgcGFyc2luZyBlcnJvcicpO1xuICAgICAgICB9XG4gICAgICAgICsrb2Zmc2V0O1xuICAgIH0gZWxzZSBpZiggc3RyW29mZnNldF0gPT09ICcsJyB8fCAoc3RyW29mZnNldF0gPj0gJzAnICYmIHN0cltvZmZzZXRdIDw9ICc5JykgKSB7XG4gICAgICAgIHRva2VuLnR5cGUgPSBcIm51bWJlclwiO1xuICAgICAgICBsZXQgaGFzQ29tbWEgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUoIHN0cltvZmZzZXRdID09PSAnLCcgfHwgc3RyW29mZnNldF0gPj0gJzAnICYmIHN0cltvZmZzZXRdIDw9ICc5JyApIHtcblxuICAgICAgICAgICAgaWYoIHN0cltvZmZzZXRdID09PSAnLCcgKSB7XG4gICAgICAgICAgICAgICAgaWYoaGFzQ29tbWEgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRm9ybXVsYSBwYXJzaW5nIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgaGFzQ29tbWEgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICArK29mZnNldDtcbiAgICAgICAgfVxuXG4gICAgfSBlbHNlIGlmKCBzdHJbb2Zmc2V0XSA9PT0gJyQnIHx8IHN0cltvZmZzZXRdID49ICdBJyAmJiBzdHJbb2Zmc2V0XSA8PSAnWicpIHsgLy8rJFxuICAgICAgICBcbiAgICAgICAgd2hpbGUoIG9mZnNldCA8IHN0ci5sZW5ndGhcbiAgICAgICAgICAgICAgICAmJiAoc3RyW29mZnNldF0gPT09ICckJyB8fCBzdHJbb2Zmc2V0XSA+PSAnQScgJiYgc3RyW29mZnNldF0gPD0gJ1onXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgc3RyW29mZnNldF0gPj0gJzAnICYmIHN0cltvZmZzZXRdIDw9ICc5J1xuICAgICAgICAgICAgICAgICAgICApIClcbiAgICAgICAgICAgICsrb2Zmc2V0O1xuXG4gICAgICAgIHRva2VuLnR5cGUgPSBzdHJbb2Zmc2V0XSA9PT0gJygnID8gJ2NhbGwnIDogJ3JhbmdlJztcblxuICAgICAgICBpZiggc3RyW29mZnNldF0gPT09ICcoJyApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdG9rZW4udHlwZSA9IFwib3BcIjsgLy8gb25seSBvbiBjaGFyID8/P1xuXG4gICAgICAgIGlmKCBzdHJbb2Zmc2V0ICsgMV0gPT09ICc9JykgLy8gPj0gLyA8PVxuICAgICAgICAgICAgKytvZmZzZXQ7XG4gICAgICAgIGVsc2UgaWYoIHN0cltvZmZzZXQgKyAxXSA9PT0gJz4nKSAvLyA8PlxuICAgICAgICAgICAgKytvZmZzZXQ7XG5cbiAgICAgICAgKytvZmZzZXQ7XG4gICAgfVxuXG4gICAgdG9rZW4uZW5kID0gb2Zmc2V0O1xuICAgIHRva2VuLnZhbHVlID0gc3RyLnNsaWNlKHRva2VuLmJlZywgdG9rZW4uZW5kKTtcblxuICAgIHJldHVybiB0b2tlbiBhcyBSZXF1aXJlZDxUb2tlbj47XG59XG5cbmNsYXNzIE5vZGUge1xuXG4gICAgY2hpbGRyZW46IE5vZGVbXTtcbiAgICAjZmN0OiAoc2hlZXQ6IENhbGNTaGVldCwgLi4uYXJnczooVmFsdWVUeXBlKVtdKSA9PiBWYWx1ZVR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihmY3Q6IChzaGVldDogQ2FsY1NoZWV0LCAuLi5hcmdzOihWYWx1ZVR5cGUpW10pID0+IFZhbHVlVHlwZSwgLi4uY2hpbGRyZW46IE5vZGVbXSkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgIGlmKGNoaWxkcmVuID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXVEZcIik7XG4gICAgICAgIHRoaXMuI2ZjdCA9IGZjdDtcbiAgICB9XG5cbiAgICBldmFsKHNoZWV0OiBDYWxjU2hlZXQpOiBWYWx1ZVR5cGUge1xuICAgICAgICBjb25zdCBhcmdzID0gdGhpcy5jaGlsZHJlbi5tYXAoIGMgPT4gYy5ldmFsKHNoZWV0KSApO1xuICAgICAgICByZXR1cm4gdGhpcy4jZmN0KHNoZWV0LCAuLi5hcmdzICk7XG4gICAgfVxuICAgIFxufVxuXG5mdW5jdGlvbiB0b051bWJlcihhOiB1bmtub3duKTogbnVtYmVyIHtcblxuICAgIGlmKGEgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIDA7XG5cbiAgICBpZiggdHlwZW9mIGEgPT09IFwic3RyaW5nXCIpXG4gICAgICAgIHJldHVybiBOdW1iZXIoYSk7XG5cbiAgICBpZiggYSBpbnN0YW5jZW9mIERhdGUpXG4gICAgICAgIHJldHVybiBkYXRlMkZsb2F0KGEpO1xuXG4gICAgcmV0dXJuIGEgYXMgdW5rbm93biBhcyBudW1iZXI7XG59XG5cbmNvbnN0IG9wX2ltcGwgPSB7XG4gICAgJyUnOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duKSA9PiB0b051bWJlcihhKS8xMDAsXG4gICAgJ3UuKyc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24pID0+ICt0b051bWJlcihhKSxcbiAgICAndS4tJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93bikgPT4gLXRvTnVtYmVyKGEpLFxuICAgICcqJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93biwgYjogdW5rbm93bikgPT4gdG9OdW1iZXIoYSkqdG9OdW1iZXIoYiksXG4gICAgJy8nOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiB0b051bWJlcihhKS90b051bWJlcihiKSxcbiAgICAnKyc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24sIGI6IHVua25vd24pID0+IHRvTnVtYmVyKGEpK3RvTnVtYmVyKGIpLFxuICAgICctJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93biwgYjogdW5rbm93bikgPT4gdG9OdW1iZXIoYSktdG9OdW1iZXIoYiksXG4gICAgJ14nOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiBNYXRoLnBvdyh0b051bWJlcihhKSx0b051bWJlcihiKSApLFxuICAgICcmJzogKF86IENhbGNTaGVldCwgYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+IGAke0Zvcm1hdHMuZGVmYXVsdC5jYWxsKG51bGwsIGEpfSR7Rm9ybWF0cy5kZWZhdWx0LmNhbGwobnVsbCwgYil9YCxcbiAgICAnPSc6ICAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSA9PT0gYixcbiAgICAnPD4nOiAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSAhPT0gYixcbiAgICAnPic6ICAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSA+IGIsXG4gICAgJz49JzogKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPj0gYixcbiAgICAnPCc6ICAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSA8IGIsXG4gICAgJzw9JzogKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPD0gYixcbn0gYXMgUmVjb3JkPHN0cmluZywgKF86IENhbGNTaGVldCwgLi4uYXJnczpWYWx1ZVR5cGVbXSkgPT4gVmFsdWVUeXBlPjtcblxuLy8gaHR0cHM6Ly9oZWxwLmxpYnJlb2ZmaWNlLm9yZy9sYXRlc3QvZW4tVVMvdGV4dC9zY2FsYy8wMS8wNDA2MDE5OS5odG1sXG5jb25zdCBvcF9wcmlvID0gW1xuICAgIFsnOiddLCAvLyByYW5nZVxuICAgIFsnISddLCAvLyByYW5nZSBpbnRlcnNlY3Rpb25cbiAgICBbJ34nXSwgLy8gcmFuZ2UgdW5pb25cbiAgICBbJ3UuKycsICd1Li0nXSwgLy8gdW5hcnkgLSBmcm9tIHJpZ2h0IHRvIGxlZnQuLi5cbiAgICBbJyUnXSwgLy8gcG9zdGZpeCwgLzEwMFxuICAgIFsnXiddLCAvLyBwb3dlclxuICAgIFsnKicsICcvJ10sXG4gICAgWycrJywgJy0nXSxcbiAgICBbJyYnXSwgLy8gc3RyaW5nIGNvbmNhdFxuICAgIFsnPScsICc8PicsICc8JywgJzw9JywgJz4nLCAnPj0nXSAvLyBjb21wYXJlXG5dO1xuXG5sZXQgb3BzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge307XG5mb3IobGV0IGkgPSAwOyBpIDwgb3BfcHJpby5sZW5ndGg7ICsraSlcbiAgICBmb3IobGV0IG9wIG9mIG9wX3ByaW9baV0gKVxuICAgICAgICBvcHNbb3BdID0gaTtcblxuZnVuY3Rpb24gdG9rZW5saXN0MlRyZWUodG9rZW5zOiBUb2tlbltdKTogTm9kZSB7XG5cbiAgICBpZiggdG9rZW5zLmxlbmd0aCA9PT0gMSkge1xuXG4gICAgICAgIGlmKCB0b2tlbnNbMF0udHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgY29uc3QgbmIgPSArdG9rZW5zWzBdLnZhbHVlLnJlcGxhY2UoJywnLCAnLicpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBOb2RlKCAoKSA9PiBuYik7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHRva2Vuc1swXS50eXBlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBjb25zdCBzdHIgPSB0b2tlbnNbMF0udmFsdWUuc2xpY2UoMSwtMSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vZGUoICgpID0+IHN0cik7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHRva2Vuc1swXS50eXBlID09PSBcInJhbmdlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTm9kZSggKHNoZWV0OiBDYWxjU2hlZXQpID0+IHtcblxuICAgICAgICAgICAgICAgIGxldCByYXcgPSBzaGVldC5nZXRSYW5nZSh0b2tlbnNbMF0udmFsdWUpLmZpcnN0Q2VsbC5yYXdDb250ZW50O1xuXG4gICAgICAgICAgICAgICAgaWYoIHJhdyBpbnN0YW5jZW9mIEZvcm11bGEpXG4gICAgICAgICAgICAgICAgICAgIHJhdyA9IHJhdy5leGVjKHNoZWV0KTsgLy8gVE9ETzogY2FjaGUgcmVzdWx0XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmF3IGFzIFZhbHVlVHlwZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIj8/P1wiKTtcbiAgICB9XG5cbiAgICBpZih0b2tlbnNbMF0udmFsdWUgPT09ICcoJyAmJiB0b2tlbnNbdG9rZW5zLmxlbmd0aC0xXS52YWx1ZSA9PT0gJyknKVxuICAgICAgICByZXR1cm4gdG9rZW5saXN0MlRyZWUodG9rZW5zLnNsaWNlKDEsLTEpICk7XG5cbiAgICBsZXQgY3VyID0ge1xuICAgICAgICBwcmlvcml0eTogb3BfcHJpby5sZW5ndGgsXG4gICAgICAgIGlkeCAgICAgOiAtMVxuICAgIH07XG5cbiAgICBmb3IobGV0IGkgPSB0b2tlbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgaWYoIHRva2Vuc1tpXS50eXBlICE9PSBcIm9wXCIgKSAvLyBjYWxsIG5vdCBoYW5kbGVkIHlldC4uLlxuICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgaWYoIHRva2Vuc1tpXS52YWx1ZSA9PT0gJyknICkgeyAvLyBnbyB0byBmaXJzdCAnKCdcbiAgICAgICAgICAgIGkgPSB0b2tlbnMuZmluZEluZGV4KCB0ID0+IHQudHlwZSA9PT0gJ29wJyAmJiB0LnZhbHVlID09PSAnKCcpO1xuXG4gICAgICAgICAgICBpZiggaSA9PT0gMClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC0taTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFzc2VydHMgaWYgdW5hcnkgb3AuXG4gICAgICAgIGlmKCB0b2tlbnNbaV0udmFsdWUgPT09ICctJyB8fCB0b2tlbnNbaV0udmFsdWUgPT09ICcrJyApIHtcblxuICAgICAgICAgICAgaWYoIGkgPT09IDAgfHwgdG9rZW5zW2ktMV0udHlwZSA9PT0gXCJvcFwiICkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdV9vcCA9IGB1LiR7dG9rZW5zW2ldLnZhbHVlfWA7XG4gICAgICAgICAgICAgICAgdG9rZW5zW2ldLnZhbHVlID0gdV9vcDtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IG9wc1t1X29wXTtcblxuICAgICAgICAgICAgICAgIC8vIHByaW9yaXR5IGlzIHJldmVyc2VkICsgZXZhbHVhdGVkIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAgICAgICAgICAgICAgICBpZiggcHJpb3JpdHkgPD0gY3VyLnByaW9yaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGN1ci5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICAgICAgICAgICAgICBjdXIuaWR4ICAgICAgPSBpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBvcHNbdG9rZW5zW2ldLnZhbHVlXTtcblxuICAgICAgICAvLyBwcmlvcml0eSBpcyByZXZlcnNlZC5cbiAgICAgICAgaWYoIHByaW9yaXR5IDwgY3VyLnByaW9yaXR5KSB7XG4gICAgICAgICAgICBjdXIucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgICAgIGN1ci5pZHggICAgICA9IGk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiggY3VyLmlkeCA9PT0gLTEpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignPz8/Jyk7XG5cbiAgICBsZXQgb3BfdG9rZW4gPSB0b2tlbnNbY3VyLmlkeF07XG4gICAgaWYoIG9wX3Rva2VuLnZhbHVlID09PSAnJScgKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgID0gdG9rZW5zLnNsaWNlKDAsIGN1ci5pZHgpO1xuICAgICAgICBjb25zdCBvcCA9IG9wX2ltcGxbb3BfdG9rZW4udmFsdWUgYXMga2V5b2YgdHlwZW9mIG9wX2ltcGxdO1xuICAgICAgICByZXR1cm4gbmV3IE5vZGUoXG4gICAgICAgICAgICBvcCxcbiAgICAgICAgICAgIHRva2VubGlzdDJUcmVlKGxlZnQpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaWYoIG9wX3Rva2VuLnZhbHVlID09PSAndS4tJyB8fCAgb3BfdG9rZW4udmFsdWUgPT09ICd1LisnICkge1xuXG4gICAgICAgIGNvbnN0IHJpZ2h0ICA9IHRva2Vucy5zbGljZShjdXIuaWR4KzEpO1xuICAgICAgICBjb25zdCBvcCA9IG9wX2ltcGxbb3BfdG9rZW4udmFsdWUgYXMga2V5b2YgdHlwZW9mIG9wX2ltcGxdO1xuICAgICAgICByZXR1cm4gbmV3IE5vZGUoXG4gICAgICAgICAgICBvcCxcbiAgICAgICAgICAgIHRva2VubGlzdDJUcmVlKHJpZ2h0KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGxlZnQgID0gdG9rZW5zLnNsaWNlKDAsIGN1ci5pZHgpO1xuICAgIGNvbnN0IHJpZ2h0ID0gdG9rZW5zLnNsaWNlKGN1ci5pZHgrMSk7XG5cbiAgICBjb25zdCBvcCA9IG9wX2ltcGxbb3BfdG9rZW4udmFsdWUgYXMga2V5b2YgdHlwZW9mIG9wX2ltcGxdO1xuXG4gICAgcmV0dXJuIG5ldyBOb2RlKFxuICAgICAgICBvcCxcbiAgICAgICAgdG9rZW5saXN0MlRyZWUobGVmdCksXG4gICAgICAgIHRva2VubGlzdDJUcmVlKHJpZ2h0KVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZV9mb3JtdWxhKHN0cjpzdHJpbmcpIHtcblxuICAgIGxldCBvZmZzZXQgPSAxO1xuICAgIGxldCB0b2tlbnMgPSBuZXcgQXJyYXk8VG9rZW4+KCk7XG5cbiAgICB3aGlsZSggb2Zmc2V0IDwgc3RyLmxlbmd0aCkge1xuICAgICAgICBsZXQgY3VyVG9rZW4gPSBleHRyYWN0VG9rZW4oc3RyLCBvZmZzZXQpO1xuICAgICAgICB0b2tlbnMucHVzaCggY3VyVG9rZW4gKTtcbiAgICAgICAgb2Zmc2V0ID0gY3VyVG9rZW4uZW5kO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSB0b2tlbmxpc3QyVHJlZSh0b2tlbnMpITtcblxuICAgIGNvbnN0IHJhbmdlcyA9IHRva2Vucy5maWx0ZXIodCA9PiB0LnR5cGUgPT09IFwicmFuZ2VcIiApO1xuXG4gICAgcmV0dXJuIG5ldyBGb3JtdWxhKHN0ciwgKHNoZWV0OiBDYWxjU2hlZXQpID0+IG5vZGUuZXZhbChzaGVldCksIHJhbmdlcyApO1xufSIsIi8vVE9ETzogd2VicGFjayBjb25maWcuLi5cbmltcG9ydCBMSVNTIGZyb20gXCIuLi8uLi8uLi9saWJzL0xJU1NcIjtcbmltcG9ydCB7IENhbGNTaGVldCwgQ2VsbExpc3QsIGRlZmF1bHRGb3JtYXQgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG4vL1RPRE86IHN5bnRheCBoaWdobGlnaHQgOylcblxuY29uc3QgY3NzID0gYFxuICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAmIHByZSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xuICAgICAgICAgICAgbWluLWhlaWdodDogY2FsYyggMXJlbSArIDhweCArIDJweCApO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB0O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMaWJlcmF0aW9uIFNhbnMnO1xuICAgICAgICB9XG4gICAgfVxuYDtcblxuZXhwb3J0IGNsYXNzIFBsYWdlRm9ybXVsYSBleHRlbmRzIExJU1Moe1xuICAgIGNzc1xufSkge1xuXG4gICAgI2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKCB0aGlzLiNpbnB1dCApO1xuICAgICAgICB0aGlzLiNpbnB1dC50b2dnbGVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuXG4gICAgICAgIHRoaXMuI2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXYpID0+IHtcbiAgICAgICAgICAgIGlmKGV2LmNvZGUgIT09ICdFbnRlcicpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBldi5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy4jc2hlZXQuZ2V0Q2VsbHModGhpcy4jaW5wdXQudGV4dENvbnRlbnQhKS5jZWxscztcblxuICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uYWRkKCAuLi5zZWxlY3RlZCApO1xuXG4gICAgICAgICAgICB0aGlzLiNzaGVldC5jdXJzb3IuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LmN1cnNvci5hZGQoIHNlbGVjdGVkWzBdICk7XG5cbiAgICAgICAgICAgIHRoaXMuI2lucHV0LmJsdXIoKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvL1RPRE8uLi4uXG4gICAgICAgIHRoaXMuI2lucHV0LnRvZ2dsZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgLyp0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cbiAgICAgICAgfSk7Ki9cbiAgICB9XG5cbiAgICAjc2hlZXQhOiBDYWxjU2hlZXQ7XG5cbiAgICBzeW5jVG8oc2hlZXQ6IENhbGNTaGVldCkge1xuXG4gICAgICAgIHRoaXMuI3NoZWV0ID0gc2hlZXQ7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gc2hlZXQuc2VsZWN0aW9uO1xuXG4gICAgICAgIHNlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoXzogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCA9IHNlbGVjdGlvbi5wbGFnZV9uYW1lID8/IFwiXCI7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTElTUy5kZWZpbmUoJ2NhbGMtcGxhZ2UnLCBQbGFnZUZvcm11bGEpOyIsImltcG9ydCB7IFJhbmdlT3ZlcmxheSB9IGZyb20gXCIuL1JhbmdlT3ZlcmxheVwiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0LCBDZWxsIH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuZXhwb3J0IGNsYXNzIFBsYWdlU2VsZWN0b3Ige1xuXG4gICAgI292ZXJsYXlzID0gbmV3IEFycmF5PFJhbmdlT3ZlcmxheT4oKTtcbiAgICAjZ2V0T3ZlcmxheShpZDogbnVtYmVyKSB7XG4gICAgICAgIHdoaWxlKGlkID49IHRoaXMuI292ZXJsYXlzLmxlbmd0aClcbiAgICAgICAgICAgIHRoaXMuI292ZXJsYXlzLnB1c2goIG5ldyBSYW5nZU92ZXJsYXkodGhpcy4jc2hlZXQsIFwic2VsZWN0aW9uX2hpZ2hsaWdodFwiKSApO1xuICAgICAgICByZXR1cm4gdGhpcy4jb3ZlcmxheXNbaWRdO1xuICAgIH1cblxuICAgICN1cGRhdGVTZWxlY3Rpb24oKSB7XG5cbiAgICAgICAgbGV0IHNlbGVjdGVkX2NlbGxzID0gdGhpcy4jc2hlZXQuZ2V0UmFuZ2UoIHRoaXMuI29yaWdfcG9zLCB0aGlzLiNmaW5hbF9wb3MgKS5jZWxscztcblxuICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uY2xlYXIoKTsgLy8gd2UgYWRkIGl0Li4uXG5cbiAgICAgICAgaWYoIHRoaXMuI2lzQ3RybCApIHtcblxuICAgICAgICAgICAgLy8gcmVzdG9yZSBpbml0aWFsIHN0YXRlLi4uXG4gICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uYWRkKC4uLnRoaXMuI3ByZXZfc2VsZWN0aW9uKTtcblxuICAgICAgICAgICAgLy9UT0RPIG9ubHkgb3JpZ190YXJnZXQuLi5cbiAgICAgICAgICAgIGlmKHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5oYXMoIC4uLnNlbGVjdGVkX2NlbGxzICkgKVxuICAgICAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5yZW1vdmUoIC4uLnNlbGVjdGVkX2NlbGxzICk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmFkZCggLi4uc2VsZWN0ZWRfY2VsbHMgKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmFkZCggLi4uc2VsZWN0ZWRfY2VsbHMgKTtcblxuICAgIH1cblxuICAgICN1cGRhdGVTZWxlY3Rpb25IaWdobGlnaHQoKSB7XG5cbiAgICAgICAgY29uc3QgY2VsbHMgPSB0aGlzLiNzaGVldC5zZWxlY3Rpb24uY2VsbHM7XG4gICAgICAgIGZvcihsZXQgb3ZlcmxheSBvZiB0aGlzLiNvdmVybGF5cylcbiAgICAgICAgICAgIG92ZXJsYXkuc2V0UmFuZ2UobnVsbCk7XG5cbiAgICAgICAgaWYoIGNlbGxzLmxlbmd0aCA9PT0gMSAmJiB0aGlzLiNzaGVldC5jdXJzb3IuZmlyc3RDZWxsID09PSBjZWxsc1swXSApXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgdGhpcy4jZ2V0T3ZlcmxheShpKS5zZXRSYW5nZSggdGhpcy4jc2hlZXQuZ2V0UmFuZ2UoIGNlbGxzW2ldICkgKTtcbiAgICB9XG5cbiAgICAjaXNDdHJsICAgICAgICAhOiBib29sZWFuO1xuICAgICNzaGVldCAgICAgICAgICA6IENhbGNTaGVldDtcbiAgICAjb3JpZ190YXJnZXQgICAhOiBIVE1MRWxlbWVudDtcbiAgICAjb3JpZ19wb3MgICAgICAhOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgICNmaW5hbF9wb3MgICAgICE6IFtudW1iZXIsIG51bWJlcl07XG4gICAgI3ByZXZfc2VsZWN0aW9uITogQ2VsbFtdO1xuXG4gICAgI2V2MnBvcyhldjogTW91c2VFdmVudCk6IFtudW1iZXIsbnVtYmVyXSB7XG5cbiAgICAgICAgY29uc3QgY29scyA9IFsuLi50aGlzLiNzaGVldC50Ym9keS5jaGlsZHJlblswXS5jaGlsZHJlbl07XG4gICAgICAgIGxldCBjb2xfaWQ7XG4gICAgICAgIGZvcihjb2xfaWQgPSBjb2xzLmxlbmd0aC0xOyBjb2xfaWQgPj0gMDsgLS1jb2xfaWQpIHtcbiAgICAgICAgICAgIGlmKCBldi5jbGllbnRYID49IGNvbHNbY29sX2lkXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS54IClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3Qgcm93cyA9IFsuLi50aGlzLiNzaGVldC50Ym9keS5jaGlsZHJlbl0ubWFwKCBlID0+IGUuY2hpbGRyZW5bMF0gKTtcbiAgICAgICAgbGV0IHJvd19pZDtcbiAgICAgICAgZm9yKHJvd19pZCA9IHJvd3MubGVuZ3RoLTE7IHJvd19pZCA+PSAwOyAtLXJvd19pZCkge1xuICAgICAgICAgICAgaWYoIGV2LmNsaWVudFkgPj0gcm93c1tyb3dfaWRdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkgKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtyb3dfaWQsIGNvbF9pZF07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCkge1xuXG4gICAgICAgIHRoaXMuI3NoZWV0ID0gc2hlZXQ7XG5cbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKSE7XG5cbiAgICAgICAgY29uc3Qgb25fbW91c2VfbW92ZSA9IChldjogTW91c2VFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLiNmaW5hbF9wb3MgPSB0aGlzLiNldjJwb3MoZXYpO1xuXG4gICAgICAgICAgICB0aGlzLiN1cGRhdGVTZWxlY3Rpb24oKTtcbiAgICAgICAgfTtcblxuICAgICAgICBzaGVldC5jdXJzb3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnJlcGxhY2VBbGwoIHNoZWV0LmdldFZpc2libGVDZWxsKHNoZWV0LmN1cnNvcikgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2hlZXQuc2VsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI3VwZGF0ZVNlbGVjdGlvbkhpZ2hsaWdodCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHNoZWV0LmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXY6TW91c2VFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiggc2hlZXQuc3RhdGVzLmNlbGxfZWRpdC5zdGF0ZSA9PT0gdGFyZ2V0ICkgIC8vIGEgY2VsbCBiZWluZyBlZGl0ZWQuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaWYoICEgW1wiVEhcIiwgXCJURFwiXS5pbmNsdWRlcyggdGFyZ2V0LnRhZ05hbWUgKSApLy8gLi4uXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgPT09IFwiVEhcIiAmJiB0YXJnZXQudGV4dENvbnRlbnQgPT09IFwiXCIgKSB7IC8vIG1vdXNlbW92ZSBkb2VzIG5vdGhpbmcuXG5cbiAgICAgICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uY2xlYXIoKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZWYgPSBgQTE6JHt0aGlzLiNzaGVldC5wb3MycmVmKHRoaXMuI3NoZWV0Lm5iUm93cywgdGhpcy4jc2hlZXQubmJDb2xzKX1gO1xuICAgICAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5hZGQoIC4uLnRoaXMuI3NoZWV0LmdldENlbGxzKHJlZikuY2VsbHMgKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4jaXNDdHJsICAgICAgICAgPSBldi5jdHJsS2V5O1xuICAgICAgICAgICAgdGhpcy4jb3JpZ190YXJnZXQgICAgPSB0YXJnZXQ7XG4gICAgICAgICAgICB0aGlzLiNvcmlnX3BvcyAgICAgICA9IHRoaXMuI2V2MnBvcyhldik7IC8vIENhbiBiZSBUSC4uLlxuICAgICAgICAgICAgdGhpcy4jZmluYWxfcG9zICAgICAgPSB0aGlzLiNvcmlnX3BvcztcbiAgICAgICAgICAgIHRoaXMuI3ByZXZfc2VsZWN0aW9uID0gc2hlZXQuc2VsZWN0aW9uLmNlbGxzLnNsaWNlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuI3VwZGF0ZVNlbGVjdGlvbigpO1xuICAgICAgICAgICAgbWFpbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbl9tb3VzZV9tb3ZlKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBtYWluLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uX21vdXNlX21vdmUpO1xuICAgICAgICAgICAgfSwge29uY2U6IHRydWV9KTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG59IiwiLy9UT0RPOiB3ZWJwYWNrIGNvbmZpZy4uLlxuaW1wb3J0IExJU1MgZnJvbSBcIi4uLy4uLy4uL2xpYnMvTElTU1wiO1xuXG4vL0B0cy1pZ25vcmVcbmltcG9ydCBjc3MgZnJvbSBcIiEhcmF3LWxvYWRlciEuL2luZGV4LmNzc1wiO1xuXG5leHBvcnQgdHlwZSBWYWx1ZVR5cGUgPSBzdHJpbmd8bnVtYmVyfERhdGV8Ym9vbGVhbjtcbmV4cG9ydCB0eXBlIFJhd0NvbnRlbnRUeXBlID0gVmFsdWVUeXBlfEZvcm11bGE7XG5cbmV4cG9ydCB0eXBlIENlbGwgPSBIVE1MVGFibGVDZWxsRWxlbWVudCAmIHtcbiAgICByYXdDb250ZW50OiBSYXdDb250ZW50VHlwZSxcbiAgICBmb3JtYXQ6ICh0aGlzOiBDZWxsLCB2PzogbnVtYmVyfHN0cmluZ3xEYXRlKSA9PiBzdHJpbmcsXG4gICAgaXNfcm86IGJvb2xlYW4sXG4gICAgY2VsbCA/OiBDZWxsXG59O1xuXG5mdW5jdGlvbiBpc0FjdGl2ZSh0YXJnZXQ6IEhUTUxFbGVtZW50KSB7XG5cbiAgICByZXR1cm4gdGFyZ2V0Lm1hdGNoZXMoJzpmb2N1cycpO1xuLypcbiAgICBsZXQgYWN0aXZlID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgIHdoaWxlKCBhY3RpdmU/LnNoYWRvd1Jvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290IClcbiAgICAgICAgYWN0aXZlID0gYWN0aXZlLnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudDtcblxuICAgIHJldHVybiBhY3RpdmUgPT09IHRhcmdldDsqL1xufVxuXG5mdW5jdGlvbiBvbklucHV0KGV2OiBFdmVudCkge1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjEyMzQ3NDEvcGxhY2UtY2FyZXQtYmFjay13aGVyZS1pdC13YXMtYWZ0ZXItY2hhbmdpbmctaW5uZXJodG1sLW9mLWEtY29udGVudGVkaXRhYmxlLWVsZW1cblxuICAgIGxldCBycmFuZ2UgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkhLmdldFJhbmdlQXQoMCk7XG4gICAgbGV0IGMgPSBycmFuZ2Uuc3RhcnRPZmZzZXQ7XG5cbiAgICAvL2xldCB0ZXh0ID0gXCJcIjtcbiAgICBsZXQgbGVuZ3RoID0gMDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFyZ2V0LmNoaWxkTm9kZXMubGVuZ3RoOyArK2kpIHtcblxuICAgICAgICBsZXQgY2hpbGQgPSB0YXJnZXQuY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgaWYoIGNoaWxkLm5vZGVUeXBlICE9PSBOb2RlLlRFWFRfTk9ERSlcbiAgICAgICAgICAgIGNoaWxkID0gY2hpbGQuY2hpbGROb2Rlc1swXTtcblxuICAgICAgICBpZiggcnJhbmdlLnN0YXJ0Q29udGFpbmVyID09PSBjaGlsZCApIHtcbiAgICAgICAgICAgIC8vdGV4dCArPSBwLmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQhLnNsaWNlKDAsIGMpO1xuICAgICAgICAgICAgbGVuZ3RoICs9IGM7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvL3RleHQgKz0gcC5jaGlsZE5vZGVzW2ldLnRleHRDb250ZW50O1xuICAgICAgICBsZW5ndGggKz0gdGFyZ2V0LmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQhLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgaW5uZXJIVE1MXG4gICAgdGFyZ2V0LnRleHRDb250ZW50ID0gdGFyZ2V0LnRleHRDb250ZW50O1xuXG4gICAgbGV0IGNoaWxkITogQ2hpbGROb2RlO1xuICAgIGxldCBpO1xuICAgIGZvcihpID0gMDsgaSA8IHRhcmdldC5jaGlsZE5vZGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmKCBsZW5ndGggPD0gdGFyZ2V0LmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQhLmxlbmd0aCApIHtcbiAgICAgICAgICAgIGNoaWxkID0gdGFyZ2V0LmNoaWxkTm9kZXNbaV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBsZW5ndGggLT0gdGFyZ2V0LmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQhLmxlbmd0aDtcbiAgICB9XG5cbiAgICBpZiggY2hpbGQubm9kZVR5cGUgIT09IE5vZGUuVEVYVF9OT0RFKVxuICAgICAgICBjaGlsZCA9IGNoaWxkLmNoaWxkTm9kZXNbMF07XG5cbiAgICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkhO1xuXG4gICAgcmFuZ2Uuc2V0U3RhcnQoY2hpbGQsIGxlbmd0aCk7XG4gICAgcmFuZ2UuY29sbGFwc2UodHJ1ZSk7XG4gICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgIHNlbC5hZGRSYW5nZShyYW5nZSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSW5wdXQoIHN0cjogc3RyaW5nICk6IFJhd0NvbnRlbnRUeXBlIHtcblxuICAgIGlmKHN0ciA9PT0gJ1ZSQUknKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBpZihzdHIgPT09ICdGQVVYJylcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYoc3RyLnRyaW0oKSA9PT0gJycpXG4gICAgICAgIHJldHVybiBzdHI7XG5cbiAgICBpZihzdHJbMF0gPT09IFwiPVwiKSB7XG4gICAgICAgIHJldHVybiBwYXJzZV9mb3JtdWxhKHN0cik7XG4gICAgfVxuXG4gICAgbGV0IHRlc3RfbnVtYmVyID0gTnVtYmVyKCBzdHIucmVwbGFjZSgnLCcsICcuJykucmVwbGFjZUFsbCgnXFx4QTAnLCAnJykgKTtcbiAgICBpZiggISBOdW1iZXIuaXNOYU4oIHRlc3RfbnVtYmVyICkgKVxuICAgICAgICByZXR1cm4gdGVzdF9udW1iZXI7XG4gICAgaWYoIHN0cltzdHIubGVuZ3RoLTFdID09PSBcIiVcIiB8fCBzdHJbc3RyLmxlbmd0aC0xXSA9PT0gXCLigqxcIiApIHtcbiAgICAgICAgdGVzdF9udW1iZXIgPSBOdW1iZXIoIHN0ci5zbGljZSgwLC0xKS5yZXBsYWNlQWxsKCdcXHhBMCcsICcnKS5yZXBsYWNlKCcsJywgJy4nKSApO1xuICAgICAgICBpZiggISBOdW1iZXIuaXNOYU4oIHRlc3RfbnVtYmVyICkgKSB7XG4gICAgICAgICAgICBpZiggc3RyW3N0ci5sZW5ndGgtMV0gPT09IFwi4oKsXCIgKVxuICAgICAgICAgICAgICAgIHJldHVybiB0ZXN0X251bWJlcjtcbiAgICAgICAgICAgIHJldHVybiArKHRlc3RfbnVtYmVyIC8gMTAwKS50b1ByZWNpc2lvbig3KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhcnRzID0gc3RyLnNwbGl0KCcvJyk7XG4gICAgaWYocGFydHMubGVuZ3RoIDw9IDMpIHtcblxuICAgICAgICBsZXQgdGVzdF9kYXRlID0gbmV3IERhdGUoXG4gICAgICAgICAgICArcGFydHNbMl0gPz8gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgK3BhcnRzWzFdLTEsXG4gICAgICAgICAgICArcGFydHNbMF1cbiAgICAgICAgKTtcblxuICAgICAgICBpZiggdGVzdF9kYXRlLnRvU3RyaW5nKCkgIT09IFwiSW52YWxpZCBEYXRlXCIgKVxuICAgICAgICAgICAgcmV0dXJuIHRlc3RfZGF0ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xufVxuXG5jbGFzcyBTdGF0ZTxUPiB7XG5cbiAgICAjc3RhdGUgOiBUfG51bGwgPSBudWxsO1xuICAgICN0YXJnZXQ6IEV2ZW50VGFyZ2V0O1xuICAgICNuYW1lICA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHRhcmdldDogRXZlbnRUYXJnZXQsIG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLiN0YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMuI25hbWUgICA9IG5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IHN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jc3RhdGU7XG4gICAgfVxuXG4gICAgc2V0IHN0YXRlKHN0YXRlOiBUfG51bGwpIHtcblxuICAgICAgICBpZiggdGhpcy4jc3RhdGUgPT09IHN0YXRlKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGxldCBwcmV2X3N0YXRlID0gdGhpcy4jc3RhdGU7XG4gICAgICAgIHRoaXMuI3N0YXRlID0gc3RhdGU7XG4gICAgICAgIFxuXG4gICAgICAgIGlmKCBwcmV2X3N0YXRlICE9PSBudWxsKVxuICAgICAgICAgICAgdGhpcy4jdGFyZ2V0LmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChgJHt0aGlzLiNuYW1lfV9lbmRgLCB7ZGV0YWlsOiBwcmV2X3N0YXRlfSkgKTsgICAgICAgICAgICBcblxuICAgICAgICBpZiggc3RhdGUgIT09IG51bGwgKVxuICAgICAgICAgICAgdGhpcy4jdGFyZ2V0LmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChgJHt0aGlzLiAjbmFtZX1fc3RhcnRgLCB7ZGV0YWlsOiBzdGF0ZX0pICk7XG4gICAgfVxufVxuXG5jb25zdCBTdGF0ZXMgPSB7XG4gICAgXCJjZWxsX2VkaXRcIjogU3RhdGU8Q2VsbD4sXG4gICAgXCJyZWNvcHlcIiAgIDogU3RhdGU8Q2VsbExpc3Q+XG4gfSBhcyBjb25zdDtcblxuZXhwb3J0IGNsYXNzIENhbGNTaGVldCBleHRlbmRzIExJU1Moe1xuICAgIGNzcyxcbiAgICBhdHRyaWJ1dGVzOiBbXCJjb2xzXCIsIFwicm93c1wiLCBcInJvXCJdXG59KSB7XG5cbiAgICBzdGF0ZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoIE9iamVjdC5lbnRyaWVzKFN0YXRlcykubWFwKCAoW24sc10pID0+IFtuLCBuZXcgcyh0aGlzLmhvc3QsIG4pXSBhcyBjb25zdCApKTtcblxuXG4gICAgLy9UT0RPOiBSTyBwcm9wID9cbiAgICAjY3Vyc29yICAgID0gbmV3IENlbGxMaXN0KHRoaXMsIFtdKTtcbiAgICAjc2VsZWN0aW9uOiBDZWxsTGlzdCA9IG5ldyBDZWxsTGlzdCh0aGlzLCBbXSk7XG4gICAgI3BsYWdlX3NlbGVjdG9yID0gbmV3IFBsYWdlU2VsZWN0b3IodGhpcyk7XG5cbiAgICAjZm9ybWF0X21uZ3IgPSBuZXcgRm9ybWF0TWFuYWdlcih0aGlzKTtcblxuICAgIHN0YXRpYyBnZXRTaGVldEZyb21DZWxsKGNlbGw6IENlbGwpIHtcbiAgICAgICAgcmV0dXJuIExJU1MuZ2V0TElTU1N5bmM8Q2FsY1NoZWV0PiggKGNlbGwuZ2V0Um9vdE5vZGUoKSBhcyBTaGFkb3dSb290KS5ob3N0ICk7XG4gICAgfVxuXG4gICAgZ2V0IGN1cnNvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2N1cnNvcjtcbiAgICB9XG4gICAgZ2V0IHNlbGVjdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3NlbGVjdGlvbjtcbiAgICB9XG5cbiAgICBvdmVycmlkZSBnZXQgY29udGVudCgpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmNvbnRlbnQ7XG4gICAgfVxuXG4gICAgc2V0UmVjdCh0YXJnZXQ6IEhUTUxFbGVtZW50LCBbeCx5LHcsaF06IHJlYWRvbmx5IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdKSB7XG5cbiAgICAgICAgY29uc3QgdGJsX29mZnNldCA9IHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpIS5vZmZzZXRUb3A7XG5cbiAgICAgICAgdGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KCd0b3AnICAgLCBgJHt0Ymxfb2Zmc2V0ICsgeX1weGApO1xuICAgICAgICB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkoJ2hlaWdodCcsIGAke2h9cHhgKTtcblxuICAgICAgICB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkoJ2xlZnQnICAgLCBgJHt4fXB4YCk7XG4gICAgICAgIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eSgnd2lkdGgnLCBgJHt3fXB4YCk7XG5cbiAgICB9XG5cbiAgICBnZXRSZWN0KGNlbGxzOiBDZWxsTGlzdHxDZWxsW10pIHtcblxuICAgICAgICBjZWxscyA9IFwiY2VsbHNcIiBpbiBjZWxscyA/IGNlbGxzLmNlbGxzIDogY2VsbHM7XG5cbiAgICAgICAgY29uc3Qgc3RhcnQgPSBjZWxsc1swXTtcbiAgICAgICAgY29uc3QgZW5kICAgPSBjZWxsc1tjZWxscy5sZW5ndGgtMV07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgc3RhcnQub2Zmc2V0TGVmdCxcbiAgICAgICAgICAgIHN0YXJ0Lm9mZnNldFRvcCxcbiAgICAgICAgICAgIGVuZC5vZmZzZXRMZWZ0ICsgZW5kLmNsaWVudFdpZHRoIC0gc3RhcnQub2Zmc2V0TGVmdCArIDEsXG4gICAgICAgICAgICBlbmQub2Zmc2V0VG9wICsgZW5kLmNsaWVudEhlaWdodCAtIHN0YXJ0Lm9mZnNldFRvcCArIDFcbiAgICAgICAgXSBhcyBjb25zdDtcbiAgICB9XG5cbiAgICByZWxhdGl2ZVRvKGNlbGw6IENlbGwsIHJvd19kaWZmOiBudW1iZXIsIGNvbF9kaWZmOiBudW1iZXIpIHtcbiAgICAgICAgXG4gICAgICAgIGxldCBbcm93LCBjb2xdID0gdGhpcy5jZWxsUG9zKGNlbGwpO1xuXG4gICAgICAgIHJvdyArPSByb3dfZGlmZjtcbiAgICAgICAgY29sICs9IGNvbF9kaWZmO1xuXG4gICAgICAgIC8vIGZvciBub3JtYWwgOiBnZXQgc3R1Y2sgaW5zaWRlIGdyaWQuXG4gICAgICAgIGlmKCByb3cgPCAxKVxuICAgICAgICAgICAgcm93ID0gMTtcbiAgICAgICAgaWYoIHJvdyA+PSB0aGlzLiN0Ym9keS5jaGlsZHJlbi5sZW5ndGggKVxuICAgICAgICAgICAgcm93ID0gdGhpcy4jdGJvZHkuY2hpbGRyZW4ubGVuZ3RoIC0gMTtcblxuICAgICAgICBpZiggY29sIDwgMSlcbiAgICAgICAgICAgIGNvbCA9IDE7XG4gICAgICAgIGlmKCBjb2wgPj0gdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlbi5sZW5ndGggKVxuICAgICAgICAgICAgY29sID0gdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlbi5sZW5ndGggLSAxO1xuXG4gICAgICAgIHJldHVybiB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuW2NvbF0gYXMgQ2VsbDtcbiAgICB9XG5cbiAgICAvL1RPRE86IDJELi4uXG4gICAgI3Bhc3RlYmluOiBDZWxsTGlzdCB8IG51bGwgPSBudWxsO1xuXG4gICAgI2Zvcm11bGFfcmVmcyA9IG5ldyBBcnJheTxGb3JtdWxhUmVmPigpO1xuICAgICNnZXRGb3JtdWxhUmVmKGk6IG51bWJlcikge1xuICAgICAgICB3aGlsZSggaSA+PSB0aGlzLiNmb3JtdWxhX3JlZnMubGVuZ3RoKVxuICAgICAgICAgICAgdGhpcy4jZm9ybXVsYV9yZWZzLnB1c2goIG5ldyBGb3JtdWxhUmVmKHRoaXMpICk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuI2Zvcm11bGFfcmVmc1tpXTtcbiAgICB9XG4gICAgI2NsZWFyRm9ybXVsYVJlZnMoKSB7XG4gICAgICAgIGZvcihsZXQgcmVmIG9mIHRoaXMuI2Zvcm11bGFfcmVmcylcbiAgICAgICAgICAgIHJlZi5zZXRSYW5nZShudWxsKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBjb25zdCBjdXJzb3IgPSBuZXcgUmFuZ2VPdmVybGF5KHRoaXMsIFwiY3Vyc29yXCIpO1xuICAgICAgICBjb25zdCByZWNvcHkgPSBuZXcgUmVjb3B5SGFuZGxlKHRoaXMpO1xuICAgICAgICBjb25zdCBjb3B5ICAgPSBuZXcgUmFuZ2VPdmVybGF5KHRoaXMsIFwiY29weV9oaWdobGlnaHRcIik7XG5cbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpITtcblxuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcignY2VsbF9lZGl0X2VuZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2NsZWFyRm9ybXVsYVJlZnMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGxhc3RfcmVjb3B5X3RhcmdldDogQ2VsbHxudWxsID0gbnVsbDtcbiAgICAgICAgbGV0IGxhc3RfcmVjb3B5X2RpciAgIDogW251bWJlciwgbnVtYmVyXXxudWxsID0gbnVsbFxuXG4gICAgICAgIGNvbnN0IG9uX3JlY29weV9tb3ZlID0gKGV2OiBNb3VzZUV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBjZWxscyA9ICh0aGlzLnN0YXRlcy5yZWNvcHkuc3RhdGUgYXMgQ2VsbExpc3QpLmNlbGxzO1xuICAgICAgICAgICAgY29uc3Qgc3JjID0gY2VsbHNbY2VsbHMubGVuZ3RoLTFdO1xuXG4gICAgICAgICAgICBsZXQgcG9zID0gc3JjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICBsZXQgZF9weCA9IGV2LmNsaWVudFggLSAocG9zLnggKyBwb3Mud2lkdGggLzIpO1xuICAgICAgICAgICAgbGV0IGRfcHkgPSBldi5jbGllbnRZIC0gKHBvcy55ICsgcG9zLmhlaWdodC8yKTtcblxuICAgICAgICAgICAgbGV0IGRfeCA9IDA7XG4gICAgICAgICAgICBsZXQgZF95ID0gTWF0aC5zaWduKGRfcHkpO1xuXG4gICAgICAgICAgICBpZiggTWF0aC5hYnMoZF9weCkgPiBNYXRoLmFicyhkX3B5KSApIHtcbiAgICAgICAgICAgICAgICBkX3ggPSBNYXRoLnNpZ24oZF9weCk7XG4gICAgICAgICAgICAgICAgZF95ID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHByZXYgPSBzcmM7XG4gICAgICAgICAgICBsZXQgY3VyICA9IHNyYztcblxuICAgICAgICAgICAgbGV0IGRpZmZfeCwgZGlmZl95O1xuXG4gICAgICAgICAgICBkbyB7XG5cbiAgICAgICAgICAgICAgICBwcmV2PSBjdXI7XG4gICAgICAgICAgICAgICAgY3VyID0gdGhpcy5yZWxhdGl2ZVRvKHByZXYsIGRfeSwgZF94KTtcblxuICAgICAgICAgICAgICAgIGlmKCBjdXIgPT09IHByZXYpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgbGV0IHBvc19jdXIgPSBjdXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgZGlmZl94ID0gZXYuY2xpZW50WCAtIChwb3NfY3VyLnggKyBwb3NfY3VyLndpZHRoIC8yKTtcbiAgICAgICAgICAgICAgICBkaWZmX3kgPSBldi5jbGllbnRZIC0gKHBvc19jdXIueSArIHBvc19jdXIuaGVpZ2h0LzIpO1xuXG4gICAgICAgICAgICB9IHdoaWxlKCBkaWZmX3ggKiBkX3ggKyBkaWZmX3kgKiBkX3kgPiAwICk7XG5cbiAgICAgICAgICAgIGxhc3RfcmVjb3B5X3RhcmdldCA9IHByZXY7XG4gICAgICAgICAgICBsYXN0X3JlY29weV9kaXIgICAgPSBbZF94LGRfeV07XG5cbiAgICAgICAgICAgIGxldCBiZWcgPSBzcmM7XG4gICAgICAgICAgICBsZXQgZW5kID0gcHJldjtcbiAgICAgICAgICAgIGlmKCBzcmMub2Zmc2V0TGVmdCA+IHByZXYub2Zmc2V0TGVmdCB8fCBzcmMub2Zmc2V0VG9wID4gcHJldi5vZmZzZXRUb3AgKVxuICAgICAgICAgICAgICAgIFtiZWcsIGVuZF0gPSBbZW5kLCBiZWddO1xuXG4gICAgICAgICAgICAvL1RPRE86IGhpZ2hsaWdodC4uLlxuICAgICAgICAgICAgdGhpcy4jY2xlYXJGb3JtdWxhUmVmcygpO1xuICAgICAgICAgICAgdGhpcy4jZ2V0Rm9ybXVsYVJlZigxKS5zZXRSYW5nZSggdGhpcy5nZXRSYW5nZShiZWcsIGVuZCkgKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWNvcHkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXYpID0+IHtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGVzLnJlY29weS5zdGF0ZSA9IHRoaXMuI3NlbGVjdGlvbjtcblxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgbWFpbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uX3JlY29weV9tb3ZlKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBbZF94LCBkX3ldID0gIGxhc3RfcmVjb3B5X2RpciE7XG5cbiAgICAgICAgICAgICAgICBsZXQgY2VsbHMgPSAodGhpcy5zdGF0ZXMucmVjb3B5LnN0YXRlIGFzIENlbGxMaXN0KS5jZWxscztcbiAgICAgICAgICAgICAgICBjb25zdCBzcmMgPSBjZWxsc1tjZWxscy5sZW5ndGgtMV07XG5cbiAgICAgICAgICAgICAgICBsZXQgbmIgPSAwO1xuXG4gICAgICAgICAgICAgICAgaWYoIGxhc3RfcmVjb3B5X3RhcmdldCAhPT0gc3JjKSB7IC8vIGNvcHkuLi5cblxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VyID0gc3JjO1xuICAgICAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICArK25iO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXIgPSB0aGlzLnJlbGF0aXZlVG8oY3VyLCBkX3ksIGRfeCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50OiBSYXdDb250ZW50VHlwZXxDZWxsID0gc3JjO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHR5cGVvZiBjb250ZW50LnJhd0NvbnRlbnQgPT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IChzcmMucmF3Q29udGVudCBhcyBudW1iZXIpICsgbmIqKGRfeCArIGRfeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKCBjb250ZW50LnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBEYXRlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBuZXcgRGF0ZShzcmMucmF3Q29udGVudCBhcyBEYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LnNldERhdGUoIGNvbnRlbnQuZ2V0RGF0ZSgpICsgbmIqKGRfeCArIGRfeSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ2VsbExpc3QodGhpcywgW2N1cl0pLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyLmNsYXNzTmFtZSA9IHNyYy5jbGFzc05hbWU7IC8vVE9ETzogZm9ybWF0Li4uXG5cblxuICAgICAgICAgICAgICAgICAgICB9IHdoaWxlKCBjdXIhPT0gbGFzdF9yZWNvcHlfdGFyZ2V0ICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy4jY2xlYXJGb3JtdWxhUmVmcygpOyAvLyByZWNvcHlcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlcy5yZWNvcHkuc3RhdGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIGxhc3RfcmVjb3B5X3RhcmdldCA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGFzdF9yZWNvcHlfZGlyICAgID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBtYWluLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25fcmVjb3B5X21vdmUpO1xuXG4gICAgICAgICAgICB9LCB7b25jZTogdHJ1ZX0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcigncmVjb3B5X3N0YXJ0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ3JlY29weScpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3JlY29weV9lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LnJlbW92ZSgncmVjb3B5Jyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy4jY3Vyc29yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldikgPT4ge1xuXG4gICAgICAgICAgICBpZiggdGhpcy4jY3Vyc29yLmxlbmd0aCAhPT0gMSApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXJzb3IgaGFzIGludmFsaWQgbnVtYmVyIG9mIGNlbGxzJyk7XG5cbiAgICAgICAgICAgIGN1cnNvci5zZXRSYW5nZSggbmV3IENlbGxMaXN0KHRoaXMsIFt0aGlzLmdldFZpc2libGVDZWxsKHRoaXMuI2N1cnNvcildKSApO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNzZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGZvciggbGV0IGNlbGwgb2YgdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaWdobGlnaHQnKSApXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKTtcblxuICAgICAgICAgICAgY29uc3QgY2VsbHMgPSB0aGlzLiNzZWxlY3Rpb24uY2VsbHM7XG5cbiAgICAgICAgICAgIGlmKCBjZWxscy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBmb3IoIGxldCBjZWxsIG9mIGNlbGxzICkge1xuXG4gICAgICAgICAgICAgICAgaWYoIGNlbGxzLmxlbmd0aCAhPT0gMSlcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gdGhpcy4jY2VsbFBvcyhjZWxsKTtcbiAgICAgICAgICAgICAgICB0aGlzLiN0Ym9keS5jaGlsZHJlblswXS5jaGlsZHJlbltjb2xdLmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XG4gICAgICAgICAgICAgICAgdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlblswXS5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWNvcHkuc2V0UmFuZ2UodGhpcy4jc2VsZWN0aW9uKTtcblxuICAgICAgICAgICAgLy8gb25seSBpZiBzaW1wbGUuLi5cbiAgICAgICAgICAgIC8vIGNvbnN0IGxhc3QgPSBjZWxsc1tjZWxscy5sZW5ndGgtMV07XG4gICAgICAgICAgICAvLyBwb2ludGVyLi4uXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vVE9ETzogbW92ZSBvdXQgP1xuICAgICAgICBjb25zdCBmb3JtdWxhX2JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtdWxhX2Jhci5jbGFzc0xpc3QuYWRkKCd0b29sYmFyJyk7XG5cbiAgICAgICAgKCBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHBsYWdlID0gYXdhaXQgTElTUy5idWlsZChcImNhbGMtcGxhZ2VcIik7XG4gICAgICAgICAgICBwbGFnZS5zeW5jVG8odGhpcyk7XG4gICAgICAgICAgICBmb3JtdWxhX2Jhci5hcHBlbmQoIHBsYWdlLmhvc3QgKTtcblxuICAgICAgICAgICAgY29uc3QgZm9ybXVsYSA9IGF3YWl0IExJU1MuYnVpbGQoXCJjYWxjLWZvcm11bGFcIik7XG4gICAgICAgICAgICBmb3JtdWxhLnN5bmNUbyh0aGlzKTtcbiAgICAgICAgICAgIGZvcm11bGFfYmFyLmFwcGVuZCggZm9ybXVsYS5ob3N0ICk7XG5cbiAgICAgICAgfSkoKTtcbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZChmb3JtdWxhX2Jhcik7XG5cbiAgICAgICAgdGhpcy4jaW5pdEdyaWQoKyh0aGlzLmF0dHJzLnJvd3MgPz8gMSksICsodGhpcy5hdHRycy5jb2xzID8/IDEpICk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2KSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICAgICAgLy8gdGhlIGNlbGwgaXMgYmVpbmcgZWRpdGVkLi4uXG4gICAgICAgICAgICBpZiggdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJykgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lID09PSBcIlREXCIgKVxuICAgICAgICAgICAgICAgIHRoaXMuI2N1cnNvci5yZXBsYWNlQWxsKCB0YXJnZXQgYXMgQ2VsbCApO1xuXG4gICAgICAgICAgICAvL1RPRE86IG5vdCBjb3JyZWN0Li4uXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgPT09IFwiVEhcIiAmJiB0YXJnZXQudGV4dENvbnRlbnQgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5nZXRSYW5nZSh0YXJnZXQudGV4dENvbnRlbnQhKS5maXJzdENlbGw7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiNjdXJzb3IucmVwbGFjZUFsbChjZWxsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIChldikgPT4ge1xuXG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgIT09IFwiVERcIilcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGlmKCB0aGlzLmF0dHJzLnJvICE9PSBcInRydWVcIiAmJiAodGFyZ2V0IGFzIENlbGwpLmlzX3JvICE9PSB0cnVlICkge1xuICAgICAgICAgICAgICAgIHRhcmdldC50b2dnbGVBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXY6IEtleWJvYXJkRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgaWYoIGV2LmNvZGUuc3RhcnRzV2l0aCgnQXJyb3cnKSApIHtcblxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjdXIgPSB0aGlzLmN1cnNvci5jZWxscztcbiAgICAgICAgICAgICAgICBpZiggY3VyLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgbGV0IGRfcm93ID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgZF9jb2wgPSAwO1xuXG4gICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09ICdBcnJvd0xlZnQnKVxuICAgICAgICAgICAgICAgICAgICAtLWRfY29sO1xuICAgICAgICAgICAgICAgIGlmKCBldi5jb2RlID09PSAnQXJyb3dSaWdodCcpXG4gICAgICAgICAgICAgICAgICAgICsrZF9jb2w7XG4gICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09ICdBcnJvd1VwJylcbiAgICAgICAgICAgICAgICAgICAgLS1kX3JvdztcbiAgICAgICAgICAgICAgICBpZiggZXYuY29kZSA9PT0gJ0Fycm93RG93bicpXG4gICAgICAgICAgICAgICAgICAgICsrZF9yb3c7XG5cbiAgICAgICAgICAgICAgICBsZXQgbmV4dDogQ2VsbDtcbiAgICAgICAgICAgICAgICBpZiggZXYuY3RybEtleSApIHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJldiAgID0gY3VyWzBdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3Vyc29yID0gdGhpcy5yZWxhdGl2ZVRvKHByZXYsIGRfcm93LCBkX2NvbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIHByZXYucmF3Q29udGVudCAhPT0gdW5kZWZpbmVkICYmIGN1cnNvci5yYXdDb250ZW50ICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUoIHByZXYgIT09IGN1cnNvciAmJiBjdXJzb3IucmF3Q29udGVudCAhPT0gdW5kZWZpbmVkKSB7IC8vIHdlIHJlYWNoZWQgdGhlIGVuZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2ICAgPSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gdGhpcy5yZWxhdGl2ZVRvKHByZXYsIGRfcm93LCBkX2NvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSBwcmV2O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUoIHByZXYgIT09IGN1cnNvciAmJiBjdXJzb3IucmF3Q29udGVudCA9PT0gdW5kZWZpbmVkKSB7IC8vIHdlIHJlYWNoZWQgdGhlIGVuZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2ICAgPSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gdGhpcy5yZWxhdGl2ZVRvKHByZXYsIGRfcm93LCBkX2NvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBuZXh0ID0gY3Vyc29yO1xuICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICBuZXh0ID0gdGhpcy5yZWxhdGl2ZVRvKCBjdXJbMF0sIGRfcm93LCBkX2NvbCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy4jdGJvZHkuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnNvci5yZXBsYWNlQWxsKG5leHQpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBubyBlZGl0aW9uIGFsbG93ZWQuLi5cbiAgICAgICAgICAgIGlmKCB0aGlzLmF0dHJzLnJvID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgaWYoIHRhcmdldCA9PT0gdGhpcy4jdGJvZHkgKSB7XG4gICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09IFwiS2V5VlwiICYmIGV2LmN0cmxLZXkgJiYgdGhpcy4jcGFzdGViaW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuI3Bhc3RlYmluLmNlbGxzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNzZWxlY3Rpb24uY29udGVudCA9IGRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29weSBmb3JtYXQuLi4gVE9ETyB1dGlsaXR5IHRoaW5neS4uLlxuICAgICAgICAgICAgICAgICAgICBpZiggISBldi5zaGlmdEtleSB8fCAhIGV2LmFsdEtleSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IHRoaXMuI3Bhc3RlYmluLmNlbGxzO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHN0ID0gdGhpcy4jc2VsZWN0aW9uLmNlbGxzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgKytpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRzdFtpXS5jbGFzc05hbWUgPSBzcmNbaV0uY2xhc3NOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVE9ETzogYWRkIGZvcm1hdC4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKCAoIGV2LmtleSA9PT0gXCJjXCIgfHwgZXYua2V5ID09PSBcInhcIikgJiYgZXYuY3RybEtleSApIHtcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICBjb3B5LnNldFJhbmdlKHRoaXMuI3NlbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdIWSA/Pz9cbiAgICAgICAgICAgICAgICAgICAgLy9oLnN0eWxlLnNldFByb3BlcnR5KCd0b3AnICAgLCBgJHtzZWxlY3Rpb25bMF0ub2Zmc2V0VG9wfXB4YCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jcGFzdGViaW4gPSB0aGlzLiNzZWxlY3Rpb24uZGVlcENsb25lKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gXCJ4XCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiNzZWxlY3Rpb24uZGVsZXRlRm9ybWF0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiNzZWxlY3Rpb24uZGVsZXRlQ29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKCBldi5rZXkgPT09IFwiQ29udHJvbFwiIHx8IGV2LmtleSA9PT0gXCJTaGlmdFwiIHx8IGV2LmtleSA9PT0gXCJBbHRcIiApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBpZ25vcmVcbiAgICAgICAgICAgICAgICB9IGlmKCBldi5jb2RlID09PSBcIkRlbGV0ZVwiICkge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmRlbGV0ZUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpICk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gaWYoIGV2LmNvZGUgPT09IFwiRW50ZXJcIiApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlZCBlbHNld2hlcmVcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZXYuY3RybEtleSkgeyAvLyBpZ25vcmUgY3RybFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgeyAvLyB3ZSBzdGFydCBlZGl0aW5nLi4uXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VyID0gdGhpcy5jdXJzb3IuY2VsbHM7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIGN1ci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJbMF0uZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiZGJsY2xpY2tcIiwge2J1YmJsZXM6IHRydWV9KSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyWzBdLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQgIT09IHRoaXMuI3Rib2R5ICYmIGV2LmNvZGUgPT09ICdFbnRlcicgJiYgZXYuc2hpZnRLZXkgKVxuICAgICAgICAgICAgICAgIHJldHVybjsgLy8gZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yLlxuXG4gICAgICAgICAgICBpZihldi5jb2RlID09PSBcIkVudGVyXCIpIHsgLy9UT0RPOiBFbnRlciBpcyBmb3IgY3VycmVudCBwbGFnZS4uLlxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjdXIgPSB0aGlzLmN1cnNvci5jZWxscztcbiAgICAgICAgICAgICAgICBpZiggY3VyLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgbGV0IFtyb3csY29sXSA9IHRoaXMuY2VsbFBvcyggY3VyWzBdICk7XG5cbiAgICAgICAgICAgICAgICArK3JvdztcbiAgICAgICAgICAgICAgICBpZiggcm93ID49IHRoaXMuI3Rib2R5LmNoaWxkcmVuLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICAgICAgcm93ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgKytjb2w7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCBjb2wgPj0gdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlbi5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbCA9IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IG5leHQgPSB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuW2NvbF0gYXMgQ2VsbDtcblxuICAgICAgICAgICAgICAgIHRoaXMuI3Rib2R5LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJzb3IucmVwbGFjZUFsbChuZXh0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG9uSW5wdXQyID0gKGV2OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jY2xlYXJGb3JtdWxhUmVmcygpO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgaWYoZXYuZGV0YWlsICE9PSB0cnVlKVxuICAgICAgICAgICAgICAgIG9uSW5wdXQoZXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9UT0RPOiBoZXJlLi4uXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICAgICAgY29weS5zZXRSYW5nZShudWxsKTtcblxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lICE9PSBcIlREXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPSB0YXJnZXQgYXMgQ2VsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKFwiY2VsbF9lZGl0X3N0YXJ0XCIsIChldjogQ3VzdG9tRXZlbnQ8Q2VsbD4pID0+IHtcblxuICAgICAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC50b2dnbGUoXCJjZWxsX2VkaXRcIiwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBldi5kZXRhaWw7XG5cbiAgICAgICAgICAgIGlmKGNlbGwucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHN0ciA9IGNlbGwucmF3Q29udGVudC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlcyA9IGNlbGwucmF3Q29udGVudC5yYW5nZXNUb2tlbjtcblxuICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlbjogKHN0cmluZ3xIVE1MRWxlbWVudClbXSA9IFtzdHJdO1xuXG4gICAgICAgICAgICAgICAgbGV0IHJhbmdlc19jb2xvcnM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fTtcbiAgICAgICAgICAgICAgICBsZXQgY3VyX29mZnNldCA9IDA7XG5cbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdHIgPSBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGgtMV0gYXMgc3RyaW5nO1xuXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aC0xXSA9IHN0ci5zbGljZSgwLCByYW5nZXNbaV0uYmVnIC0gY3VyX29mZnNldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2VfbmFtZSA9IHJhbmdlc1tpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYoICEgKHJhbmdlX25hbWUgaW4gcmFuZ2VzX2NvbG9ycykgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VzX2NvbG9yc1tyYW5nZV9uYW1lXSA9IGklODtcblxuICAgICAgICAgICAgICAgICAgICBzLmNsYXNzTGlzdC5hZGQoJ2Zvcm11bGFfaGlnaGxpZ2h0JywgYGhpZ2hsaWdodF8ke3Jhbmdlc19jb2xvcnNbcmFuZ2VfbmFtZV19YCk7IC8vVE9ETy4uLlxuICAgICAgICAgICAgICAgICAgICBzLnRleHRDb250ZW50ID0gcmFuZ2VzW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKCBzICk7IC8vIHJhbmdlLi4uXG5cbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW4ucHVzaCggc3RyLnNsaWNlKHJhbmdlc1tpXS5lbmQgLSBjdXJfb2Zmc2V0KSApO1xuICAgICAgICAgICAgICAgICAgICBjdXJfb2Zmc2V0ID0gcmFuZ2VzW2ldLmVuZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjZWxsLnJlcGxhY2VDaGlsZHJlbiggLi4uY2hpbGRyZW4gKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlc19uYW1lcyA9IE9iamVjdC5rZXlzKHJhbmdlc19jb2xvcnMpO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByYW5nZXNfbmFtZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSByYW5nZXNfbmFtZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZiA9IHRoaXMuI2dldEZvcm11bGFSZWYoaSk7XG4gICAgICAgICAgICAgICAgICAgIHJlZi5zZXRDb2xvciggcmFuZ2VzX2NvbG9yc1tyYW5nZV0gKTtcbiAgICAgICAgICAgICAgICAgICAgcmVmLnNldFJhbmdlKCB0aGlzLmdldFJhbmdlKHJhbmdlKSApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgb25JbnB1dDIgKTsgLy8gcmVtb3ZlIGNvbG9ycy4uLlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gRm9ybWF0cy5kZWZhdWx0LmNhbGwoY2VsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKFwiY2VsbF9lZGl0X2VuZFwiLCAoZXY6IEN1c3RvbUV2ZW50PENlbGw+KSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QudG9nZ2xlKFwiY2VsbF9lZGl0XCIsIGZhbHNlKTtcblxuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGV2LmRldGFpbDtcblxuICAgICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgb25JbnB1dDIpOyAvLyB0byBiZSBzYWZlXG4gICAgICAgICAgICBjZWxsLnRvZ2dsZUF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcImxlYXZlIGVkaXRcIiwgY2VsbC50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICBuZXcgQ2VsbExpc3QodGhpcywgW2NlbGxdKS5jb250ZW50ID0gY2VsbC50ZXh0Q29udGVudCE7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICAgICAgICAvLyBsZWF2ZVxuICAgICAgICAgICAgdGhpcy4jc2VsZWN0aW9uLmNsZWFyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZXYgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSAhPT0gXCJURFwiKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5zdGF0ZXMuY2VsbF9lZGl0LnN0YXRlID0gbnVsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoIHRoaXMubmJSb3dzID49IDEgJiYgdGhpcy5uYkNvbHMgPj0gMSlcbiAgICAgICAgICAgIHRoaXMuY3Vyc29yLnJlcGxhY2VBbGwoIHRoaXMuZ2V0UmFuZ2UoXCJBMVwiKSApO1xuICAgIH1cblxuICAgIGdldFZpc2libGVDZWxsKGM6IENlbGx8Q2VsbExpc3QpOiBDZWxsIHtcbiAgICAgICAgaWYoYyBpbnN0YW5jZW9mIENlbGxMaXN0KVxuICAgICAgICAgICAgYyA9IGMuZmlyc3RDZWxsO1xuXG4gICAgICAgIHJldHVybiBjLmNlbGwgPz8gYztcbiAgICB9XG5cbiAgICBjZWxsUG9zKGNlbGw6IEhUTUxUYWJsZUNlbGxFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjZWxsUG9zKGNlbGwpO1xuICAgIH1cblxuICAgICNjZWxsUG9zKGNlbGw6IEhUTUxUYWJsZUNlbGxFbGVtZW50KSB7XG5cbiAgICAgICAgaWYoIFwicG9zXCIgaW4gY2VsbClcbiAgICAgICAgICAgIHJldHVybiBjZWxsLnBvcyBhcyBbbnVtYmVyLCBudW1iZXJdO1xuXG4gICAgICAgIGNvbnN0IGNvbCA9IFsuLi5jZWxsLnBhcmVudEVsZW1lbnQhLmNoaWxkcmVuXS5maW5kSW5kZXgoIGMgPT4gYyA9PT0gY2VsbCk7XG4gICAgICAgIGNvbnN0IHJvdyA9IFsuLi5jZWxsLnBhcmVudEVsZW1lbnQhLnBhcmVudEVsZW1lbnQhLmNoaWxkcmVuXS5maW5kSW5kZXgoIHIgPT4gciA9PT0gY2VsbC5wYXJlbnRFbGVtZW50ISk7XG5cbiAgICAgICAgcmV0dXJuIFtyb3csIGNvbF0gYXMgY29uc3Q7XG4gICAgfVxuXG4gICAgI3Rib2R5ITogSFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQ7XG4gICAgZ2V0IHRib2R5KCkgeyByZXR1cm4gdGhpcy4jdGJvZHk7IH1cblxuICAgIHJlc2l6ZShuYnJvd3M6IG51bWJlciwgbmJjb2xzOiBudW1iZXIpIHtcblxuICAgICAgICBjb25zdCBjb2xfaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgIGNvbF9odG1sLmFwcGVuZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKSApO1xuXG4gICAgICAgIGNvbnN0IGNvbGdyb3VwID0gdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ2NvbGdyb3VwJykhO1xuICAgICAgICBjb2xncm91cC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgICAgICBjb25zdCB0Ym9keSA9IHRoaXMuI3Rib2R5O1xuICAgICAgICB0Ym9keS5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgICAgICBjb2xncm91cC5hcHBlbmQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb2xcIikgKTtcbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgY29sID0gMDsgY29sIDwgIG5iY29scyA7ICsrY29sKSB7XG4gICAgICAgICAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICB0aC50ZXh0Q29udGVudCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBjb2wpO1xuICAgICAgICAgICAgY29sX2h0bWwuYXBwZW5kKHRoKTtcblxuICAgICAgICAgICAgY29sZ3JvdXAuYXBwZW5kKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29sXCIpICk7XG4gICAgICAgIH1cbiAgICAgICAgdGJvZHkuYXBwZW5kKGNvbF9odG1sKTtcblxuICAgICAgICBmb3IobGV0IHJvdyA9IDA7IHJvdyA8IG5icm93czsgKytyb3cpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd19odG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICAgICAgICAgIHRoLnRleHRDb250ZW50ID0gYCR7cm93KzF9YDtcbiAgICAgICAgICAgIHJvd19odG1sLmFwcGVuZCh0aCk7XG5cbiAgICAgICAgICAgIGZvcihsZXQgY29sID0gMDsgY29sIDwgIG5iY29scyA7ICsrY29sKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJykgYXMgQ2VsbDtcbiAgICAgICAgICAgICAgICAvL2NlbGwudG9nZ2xlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcbiAgICAgICAgICAgICAgICBjZWxsLmZvcm1hdCA9IEZvcm1hdHMuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICByb3dfaHRtbC5hcHBlbmQoIGNlbGwgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRib2R5LmFwcGVuZChyb3dfaHRtbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDb2xTaXplKGNvbDogbnVtYmVyfHN0cmluZywgc2l6ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmKCB0eXBlb2YgY29sID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgY29sID0gdGhpcy5yZWYycG9zKGNvbClbMV07XG5cbiAgICAgICAgY29uc3QgaHRtbCA9IHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yKCdjb2xncm91cCcpIS5jaGlsZHJlbltjb2xdIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBodG1sLnN0eWxlLnNldFByb3BlcnR5KFwid2lkdGhcIiwgc2l6ZSk7XG4gICAgICAgIGh0bWwuc3R5bGUuc2V0UHJvcGVydHkoJ292ZXJmbG93LXgnLCAnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgI2luaXRHcmlkKG5icm93czogbnVtYmVyLCBuYmNvbHM6IG51bWJlcikge1xuXG4gICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICAgICAgY29uc3QgdGJvZHkgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcbiAgICAgICAgdGhpcy4jdGJvZHkgPSB0Ym9keTtcblxuICAgICAgICBjb25zdCByZXNpemVPYnMgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaG9zdC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoJ3Jlc2l6ZScpICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXNpemVPYnMub2JzZXJ2ZSggdGhpcy5ob3N0ICk7XG5cbiAgICAgICAgdGhpcy4jdGJvZHkuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG5cbiAgICAgICAgdGFibGUuYXBwZW5kKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29sZ3JvdXBcIikgKTtcbiAgICAgICAgdGFibGUuYXBwZW5kKHRib2R5KTtcbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCh0YWJsZSk7XG5cbiAgICAgICAgdGhpcy5yZXNpemUobmJyb3dzLCBuYmNvbHMpO1xuICAgIH1cblxuICAgIGdldFJhbmdlKGZyb206IENlbGx8c3RyaW5nfHJlYWRvbmx5W251bWJlcixudW1iZXJdLCB0bzogQ2VsbHxzdHJpbmd8cmVhZG9ubHlbbnVtYmVyLG51bWJlcl0gPSBmcm9tKTogQ2VsbExpc3Qge1xuXG4gICAgICAgIC8vIHByb2Nlc3MgcmVmcy4uLlxuICAgICAgICBpZiggZnJvbSBpbnN0YW5jZW9mIEhUTUxUYWJsZUNlbGxFbGVtZW50KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZ2UoIHRoaXMuY2VsbFBvcyhmcm9tKSwgdG8gKTtcbiAgICAgICAgaWYoIHRvIGluc3RhbmNlb2YgSFRNTFRhYmxlQ2VsbEVsZW1lbnQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSYW5nZSggZnJvbSwgdGhpcy5jZWxsUG9zKHRvKSApO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgZnJvbSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgaWYoIGZyb20uaW5jbHVkZXMoXCI6XCIpIClcbiAgICAgICAgICAgICAgICBbZnJvbSwgdG9dID0gZnJvbS5zcGxpdCgnOicpO1xuXG4gICAgICAgICAgICBmcm9tID0gdGhpcy5yZWYycG9zKGZyb20sIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJhbmdlKCBmcm9tLCB0byApO1xuICAgICAgICB9XG4gICAgICAgIGlmKCB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSYW5nZSggZnJvbSwgdGhpcy5yZWYycG9zKHRvLCB0cnVlKSApO1xuXG4gICAgICAgIC8vIGdldCByYW5nZVxuXG4gICAgICAgIGxldCBiZWdfcm93ID0gZnJvbVswXSB8fCAxO1xuICAgICAgICBsZXQgYmVnX2NvbCA9IGZyb21bMV0gfHwgMTtcblxuICAgICAgICBsZXQgZW5kX3JvdyA9IGZyb21bMF0gPT09IDAgPyB0aGlzLm5iUm93cyA6IHRvWzBdO1xuICAgICAgICBsZXQgZW5kX2NvbCA9IGZyb21bMV0gPT09IDAgPyB0aGlzLm5iQ29scyA6IHRvWzFdO1xuXG4gICAgICAgIGlmKCBlbmRfcm93IDwgYmVnX3JvdyApXG4gICAgICAgICAgICBbYmVnX3JvdywgZW5kX3Jvd10gPSBbZW5kX3JvdywgYmVnX3Jvd107XG4gICAgICAgIGlmKCBlbmRfY29sIDwgYmVnX2NvbCApXG4gICAgICAgICAgICBbYmVnX2NvbCwgZW5kX2NvbF0gPSBbZW5kX2NvbCwgYmVnX2NvbF07XG5cbiAgICAgICAgY29uc3QgY2VsbHMgPSBuZXcgQXJyYXk8Q2VsbD4oIChlbmRfcm93IC0gYmVnX3JvdyArIDEpICogKGVuZF9jb2wgLSBiZWdfY29sICsgMSkgKTtcblxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgZm9yKGxldCBpID0gYmVnX3JvdzsgaSA8PSBlbmRfcm93OyArK2kgKVxuICAgICAgICAgICAgZm9yKGxldCBqID0gYmVnX2NvbDsgaiA8PSBlbmRfY29sOyArK2ogKVxuICAgICAgICAgICAgICAgIGNlbGxzW29mZnNldCsrXSA9IHRoaXMudGJvZHkuY2hpbGRyZW5baV0uY2hpbGRyZW5bal0gYXMgQ2VsbDtcblxuICAgICAgICByZXR1cm4gbmV3IENlbGxMaXN0KHRoaXMsIGNlbGxzKTtcbiAgICB9XG5cbiAgICByZWYycG9zKHJlZjogc3RyaW5nLCBlbmRfbGluZV9jb2wgPSB0cnVlKTogW251bWJlciwgbnVtYmVyXSB7XG4gICAgICAgIFxuICAgICAgICByZWYgPSByZWYucmVwbGFjZUFsbCgnJCcsICcnKTtcblxuICAgICAgICBsZXQgc2VwID0gcmVmLnNlYXJjaCgvWzAtOV0vKTtcblxuICAgICAgICBpZiggc2VwID09PSAwKSAgLy8gdGhpcyBpcyBhIGxpbmUuLi5cbiAgICAgICAgICAgIHJldHVybiBlbmRfbGluZV9jb2wgPyB0aGlzLnJlZjJwb3MoYEEke3JlZn1gKSA6IFt0aGlzLm5iQ29scywgK3JlZl07XG4gICAgICAgIGlmKCBzZXAgPT09IC0xKSAvLyB0aGlzIGlzIGEgY29sLi4uXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWYycG9zKGAke3JlZn0ke2VuZF9saW5lX2NvbCA/IHRoaXMubmJSb3dzIDogMX1gKTtcblxuICAgICAgICBjb25zdCByb3cgPSArcmVmLnNsaWNlKHNlcCk7XG5cbiAgICAgICAgbGV0IGNvbCA9IDA7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzZXA7ICsraSkge1xuICAgICAgICAgICAgY29sICo9IDI2O1xuICAgICAgICAgICAgY29sICs9IHJlZi5jaGFyQ29kZUF0KGkpIC0gNjU7XG4gICAgICAgIH1cbiAgICAgICAgKytjb2w7XG5cbiAgICAgICAgcmV0dXJuIFtyb3csIGNvbF07XG4gICAgfVxuICAgIHBvczJyZWYocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSB7XG5cbiAgICAgICAgbGV0IGNvbF9zdHIgPSBcIlwiO1xuICAgICAgICBkbyB7XG5cbiAgICAgICAgICAgIGxldCBpZCA9IChjb2wtMSkgJSAyNjtcblxuICAgICAgICAgICAgY29sX3N0ciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUraWQpICsgY29sX3N0cjtcblxuICAgICAgICAgICAgY29sIC09IGlkICsgMTtcbiAgICAgICAgICAgIGNvbCAvPSAyNjsgLy8gc2hvdWxkIGJlIGludGVnZXIsIHNvIG9rLlxuXG4gICAgICAgIH0gd2hpbGUoIGNvbCA+IDAgKTtcblxuICAgICAgICByZXR1cm4gYCR7Y29sX3N0cn0ke3Jvd31gO1xuICAgIH1cbiAgICBnZXQgbmJSb3dzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jdGJvZHkuY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgZ2V0IG5iQ29scygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Rib2R5LmZpcnN0RWxlbWVudENoaWxkIS5jaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgICNpc1VwZGF0aW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiggdGhpcy4jaXNVcGRhdGluZyA9PT0gdHJ1ZSApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuI2lzVXBkYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgY2VsbHMgPSBbLi4udGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGw8Q2VsbD4oJ3RkJyldLmZpbHRlciggZSA9PiBlLnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBGb3JtdWxhKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yKGxldCBjZWxsIG9mIGNlbGxzIClcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgY2VsbC5yYXdDb250ZW50LnJlc2V0Q2FjaGUoKTtcblxuICAgICAgICAgICAgZm9yKGxldCBjZWxsIG9mIGNlbGxzKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggY2VsbC5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gY2VsbC5yYXdDb250ZW50LmV4ZWModGhpcyk7IC8vVE9ETy4uLlxuXG4gICAgICAgICAgICAgICAgICAgIC8vVE9ETzogZmFjdG9yaXplLi4uXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eXBlOiBzdHJpbmcgPSB0eXBlb2YgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIjtcblxuICAgICAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gKGNlbGwgYXMgYW55KS5mb3JtYXQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmhvc3QuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KCd1cGRhdGUnKSApO1xuICAgICAgICAgICAgdGhpcy4jaXNVcGRhdGluZyA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldCBpc1JPKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRycy5ybyA9PT0gXCJ0cnVlXCI7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2VsbExpc3QgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG5cbiAgICAjc2hlZXQ6IENhbGNTaGVldDtcbiAgICAjY2VsbHM6IENlbGxbXTtcbiAgICBjb25zdHJ1Y3RvcihzaGVldDogQ2FsY1NoZWV0LCBjZWxsczogQ2VsbFtdKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuI2NlbGxzID0gY2VsbHM7XG4gICAgICAgIHRoaXMuI3NoZWV0ID0gc2hlZXQ7XG4gICAgfVxuXG4gICAgZ2V0IHBsYWdlX25hbWUoKSB7XG5cbiAgICAgICAgaWYoIHRoaXMuI2NlbGxzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBpZiggdGhpcy4jY2VsbHMubGVuZ3RoID09PSAxIClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiNzaGVldC5wb3MycmVmKCAuLi50aGlzLiNzaGVldC5jZWxsUG9zKHRoaXMuI2NlbGxzWzBdKSApO1xuXG4gICAgICAgIGxldCBjZWxscyA9IHRoaXMuI2NlbGxzLm1hcCggYyA9PiB0aGlzLiNzaGVldC5jZWxsUG9zKGMpICkuc29ydCggKGEsYikgPT4ge1xuICAgICAgICAgICAgaWYoIGFbMF0gIT09IGJbMF0gKVxuICAgICAgICAgICAgICAgIHJldHVybiBhWzBdIC0gYlswXTtcbiAgICAgICAgICAgIHJldHVybiBhWzFdIC0gYlsxXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG1pbiA9IGNlbGxzWzBdO1xuICAgICAgICBsZXQgbWF4ID0gY2VsbHNbY2VsbHMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgbGV0IG5iX2NvbHMgPSBtYXhbMV0gLSBtaW5bMV0gKyAxO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgIGlmKCBjZWxsc1tpXVswXSAhPT0gTWF0aC5mbG9vcihpL25iX2NvbHMpK21pblswXSAmJiBjZWxsc1tpXVsxXSAhPT0gKGklbmJfY29scykrIG1pblsxXSApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHJldHVybiBgJHt0aGlzLiNzaGVldC5wb3MycmVmKC4uLm1pbil9OiR7dGhpcy4jc2hlZXQucG9zMnJlZiguLi5tYXgpfWA7XG4gICAgfVxuXG4gICAgZ2V0IGNlbGxzKCk6IENlbGxbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjZWxscztcbiAgICB9XG4gICAgZ2V0IHNoZWV0KCk6IENhbGNTaGVldCB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzaGVldDtcbiAgICB9XG5cbiAgICB0b2dnbGVGb3JtYXQobmFtZTogc3RyaW5nfCgodjogYW55LCBwcmVjOiBudW1iZXJ8bnVsbCkgPT4gc3RyaW5nKSApIHtcbiAgICAgICAgbGV0IGYgPSBGb3JtYXQuZXh0cmFjdEZvcm1hdCh0aGlzKTtcblxuICAgICAgICBpZiggdHlwZW9mIG5hbWUgPT09IFwiZnVuY3Rpb25cIikge1xuXG4gICAgICAgICAgICBsZXQgaXNGb3JtYXQgPSBmLmdldFByb3BlcnR5KFwiZm9ybWF0XCIpID09PSBuYW1lO1xuXG4gICAgICAgICAgICB0aGlzLmZvcm1hdCh7Zm9ybWF0OiBpc0Zvcm1hdCA/IG51bGwgOiBuYW1lIH0pO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZvcm1hdCh7W25hbWVdOiBmLmdldFByb3BlcnR5KG5hbWUpICE9PSB0cnVlfSk7XG4gICAgfVxuXG4gICAgZm9ybWF0KC4uLmY6ICgoICh2OiBhbnksIHByZWM6IG51bWJlcnxudWxsKSA9PiBzdHJpbmcgKXxzdHJpbmd8Rm9ybWF0fFJlY29yZDxzdHJpbmcsIGFueT4pW10pIHtcblxuICAgICAgICBpZiggZi5sZW5ndGggPiAxICkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL1RPRE8uLi4uXG4gICAgICAgICAgICBmID0gT2JqZWN0LmZyb21FbnRyaWVzKCBmLm1hcCggZSA9PiBbZSwgdHJ1ZV0gKSApO1xuXG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgZiA9IGZbMF07XG5cbiAgICAgICAgaWYoIHR5cGVvZiBmID09PSBcImZ1bmN0aW9uXCIgKVxuICAgICAgICAgICAgZiA9IHtcImZvcm1hdFwiOiBmfTtcblxuICAgICAgICBpZih0eXBlb2YgZiA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICBmID0ge1tmXTogdHJ1ZX07XG5cbiAgICAgICAgaWYoICEgKGYgaW5zdGFuY2VvZiBGb3JtYXQpIClcbiAgICAgICAgICAgIGYgPSBuZXcgRm9ybWF0KGYpO1xuXG4gICAgICAgIGYuYXBwbHlUbyh0aGlzKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQgY29udGVudCgpOiAoUmF3Q29udGVudFR5cGUpW10ge1xuICAgICAgICBsZXQgY29udGVudCA9IG5ldyBBcnJheSh0aGlzLiNjZWxscy5sZW5ndGgpO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy4jY2VsbHMubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICBjb250ZW50W2ldID0gdGhpcy4jY2VsbHNbaV0ucmF3Q29udGVudCE7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgZGVsZXRlRm9ybWF0KCkge1xuICAgICAgICBmb3IobGV0IGNlbGwgb2YgdGhpcy4jY2VsbHMpIC8vVE9ETyBhZGQgaG9jIGZvcm1hdC4uLlxuICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAnJztcbiAgICB9XG5cbiAgICBkZWxldGVDb250ZW50KCkge1xuXG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiB0aGlzLiNjZWxscykge1xuICAgICAgICAgICAgY2VsbC5yYXdDb250ZW50ID0gdW5kZWZpbmVkIGFzIGFueTtcbiAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2hlZXQudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgc2V0IGNvbnRlbnQoY29udGVudDogQ2VsbHxSYXdDb250ZW50VHlwZXwoUmF3Q29udGVudFR5cGV8Q2VsbClbXSkge1xuXG4gICAgICAgIGlmKCBBcnJheS5pc0FycmF5KGNvbnRlbnQpICkge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNvbnRlbnQubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgbmV3IENlbGxMaXN0KHRoaXMuI3NoZWV0LCBbdGhpcy4jY2VsbHNbaV1dICkuY29udGVudCA9IGNvbnRlbnRbaV07XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCB0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcblxuICAgICAgICAgICAgbGV0IHJhdyA9IGNvbnRlbnQ7XG4gICAgICAgICAgICBjb250ZW50ID0gcGFyc2VJbnB1dChjb250ZW50KTtcbiAgICAgICAgICAgIGlmKCB0eXBlb2YgY29udGVudCA9PT0gXCJudW1iZXJcIiAmJiByYXdbcmF3Lmxlbmd0aC0xXSA9PT0gXCIlXCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgZiA9IEZvcm1hdC5leHRyYWN0Rm9ybWF0KHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmKCAhIGYuaGFzUHJvcGVydHkoXCJmb3JtYXRcIikgfHwgZi5nZXRQcm9wZXJ0eShcImZvcm1hdFwiKSA9PT0gRm9ybWF0cy5kZWZhdWx0IClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtYXQoRm9ybWF0cy5wb3VyY2VudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggdHlwZW9mIGNvbnRlbnQgPT09IFwibnVtYmVyXCIgJiYgcmF3W3Jhdy5sZW5ndGgtMV0gPT09IFwi4oKsXCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgZiA9IEZvcm1hdC5leHRyYWN0Rm9ybWF0KHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmKCAhIGYuaGFzUHJvcGVydHkoXCJmb3JtYXRcIikgfHwgZi5nZXRQcm9wZXJ0eShcImZvcm1hdFwiKSA9PT0gRm9ybWF0cy5kZWZhdWx0IClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtYXQoRm9ybWF0cy5ldXJvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmF3X3ZhbCA9IGNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MVGFibGVDZWxsRWxlbWVudCA/IGNvbnRlbnQucmF3Q29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvbnRlbnQ7XG5cbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIHRoaXMuI2NlbGxzKSB7XG5cbiAgICAgICAgICAgIGlmKGNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MVGFibGVDZWxsRWxlbWVudCAmJiBjb250ZW50LnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBGb3JtdWxhICkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHYgPSBjb250ZW50LnJhd0NvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkc3QgPSB0aGlzLiNzaGVldC5jZWxsUG9zKCBjZWxsICk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3JjID0gdGhpcy4jc2hlZXQuY2VsbFBvcyhjb250ZW50KVxuXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZiA9IFsgZHN0WzBdIC0gc3JjWzBdLCBkc3RbMV0gLSBzcmNbMV1dIGFzIGNvbnN0O1xuXG4gICAgICAgICAgICAgICAgcmF3X3ZhbCA9IHYucmVsYXRpdmVUbyggdGhpcy4jc2hlZXQsIC4uLmRpZmYgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2VsbC5yYXdDb250ZW50ID0gcmF3X3ZhbDtcblxuICAgICAgICAgICAgbGV0IHZhbHVlID0gcmF3X3ZhbDtcbiAgICAgICAgICAgIGlmKCByYXdfdmFsIGluc3RhbmNlb2YgRm9ybXVsYSkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0cyA9IE9iamVjdC52YWx1ZXMoIEZvcm1hdHMgKTtcblxuICAgICAgICAgICAgICAgIC8vSWYgbm8gbnVtYmVyIGZvcm1hdCwgZGVkdWNlIGZvcm1hdC5cbiAgICAgICAgICAgICAgICBpZiggY2VsbC5mb3JtYXQgPT09IHVuZGVmaW5lZCB8fCBjZWxsLmZvcm1hdCA9PT0gRm9ybWF0cy5kZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmb3JtYXQgPSBGb3JtYXRzLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuYl9kYXRlcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgciBvZiByYXdfdmFsLnJhbmdlc1Rva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZiA9IEZvcm1hdC5leHRyYWN0Rm9ybWF0KHRoaXMuc2hlZXQuZ2V0UmFuZ2Uoci52YWx1ZSkgKS5nZXRQcm9wZXJ0eShcImZvcm1hdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBmb3JtYXQgIT09IGYgJiYgZm9ybWF0cy5pbmRleE9mKGYpID4gZm9ybWF0cy5pbmRleE9mKGZvcm1hdCkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdCA9IGY7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihmID09PSBGb3JtYXRzLmRhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKytuYl9kYXRlcztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGg0Y2tcbiAgICAgICAgICAgICAgICAgICAgaWYoIGZvcm1hdCA9PT0gRm9ybWF0cy5kYXRlICYmIG5iX2RhdGVzID4gMSApXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQgPSBGb3JtYXRzLmRlZmF1bHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoZm9ybWF0ICE9PSBGb3JtYXRzLmRlZmF1bHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmZvcm1hdCA9IGZvcm1hdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHJhd192YWwuZXhlYyh0aGlzLiNzaGVldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB0eXBlOiBzdHJpbmcgPSB0eXBlb2YgdmFsdWU7XG4gICAgICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBEYXRlICkge1xuICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCI7XG4gICAgICAgICAgICAgICAgY2VsbC5mb3JtYXQgPSBGb3JtYXRzLmRhdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBjZWxsLmZvcm1hdCh2YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmKCBjZWxsLmZvcm1hdCA9PT0gRm9ybWF0cy5kYXRlKVxuICAgICAgICAgICAgICAgIHR5cGUgPSAnZGF0ZSc7XG4gICAgICAgICAgICBpZiggY2VsbC5mb3JtYXQgPT09IEZvcm1hdHMucG91cmNlbnQpXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdwb3VyY2VudCc7XG4gICAgICAgICAgICBpZiggY2VsbC5mb3JtYXQgPT09IEZvcm1hdHMuZXVyb3MgfHwgY2VsbC5mb3JtYXQgPT09IEZvcm1hdHMubnVtYmVyIClcbiAgICAgICAgICAgICAgICB0eXBlID0gJ251bWJlcic7XG5cbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCB0eXBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NoZWV0LnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHNldFJPKGlzX3JvOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBmb3IobGV0IGNlbGwgb2YgdGhpcy4jY2VsbHMpXG4gICAgICAgICAgICBjZWxsLmlzX3JvID0gaXNfcm87XG4gICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjZWxscy5sZW5ndGg7XG4gICAgfVxuXG4gICAgaGFzKC4uLmNlbGxzOiBDZWxsW10pIHtcbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIGNlbGxzKVxuICAgICAgICAgICAgaWYoICEgdGhpcy4jY2VsbHMuaW5jbHVkZXMoY2VsbCkgKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmVtb3ZlKC4uLmNlbGxzOiBDZWxsW10pIHtcbiAgICAgICAgdGhpcy4jY2VsbHMgPSB0aGlzLiNjZWxscy5maWx0ZXIoIGMgPT4gISBjZWxscy5pbmNsdWRlcyhjKSApO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSApO1xuICAgIH1cblxuICAgIHJlcGxhY2VBbGwoLi4uY2VsbHM6IENlbGxbXXxbQ2VsbExpc3RdKSB7XG4gICAgICAgIHRoaXMuI2NlbGxzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuYWRkKC4uLmNlbGxzKTtcbiAgICB9XG5cbiAgICBhZGQoLi4uY2VsbHM6IENlbGxbXXxbQ2VsbExpc3RdKSB7XG5cbiAgICAgICAgaWYoIGNlbGxzWzBdIGluc3RhbmNlb2YgQ2VsbExpc3QpXG4gICAgICAgICAgICBjZWxscyA9IGNlbGxzWzBdLmNlbGxzO1xuXG4gICAgICAgIHRoaXMuI2NlbGxzLnB1c2goLi4uY2VsbHMgYXMgQ2VsbFtdKTtcblxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSApO1xuICAgIH1cblxuICAgIGdldCBmaXJzdENlbGwoKSB7XG4gICAgICAgIGlmKCB0aGlzLiNjZWxscy5sZW5ndGggPCAxKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9wZVwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NlbGxzWzBdO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLiNjZWxscy5sZW5ndGggPSAwO1xuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpICk7XG4gICAgfVxuXG5cbiAgICBkZWVwQ2xvbmUoKSB7XG5cbiAgICAgICAgbGV0IGNlbGxzID0gdGhpcy4jY2VsbHMubWFwKCBjID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNsb25lID0gYy5jbG9uZU5vZGUodHJ1ZSkgYXMgQ2VsbDtcblxuICAgICAgICAgICAgY2xvbmUucmF3Q29udGVudCA9IGMucmF3Q29udGVudDtcbiAgICAgICAgICAgIGNsb25lLmZvcm1hdCAgICAgPSBjLmZvcm1hdDtcbiAgICAgICAgICAgIChjbG9uZSBhcyBhbnkpLnBvcyAgICAgICAgPSB0aGlzLiNzaGVldC5jZWxsUG9zKGMpO1xuXG4gICAgICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIG5ldyBDZWxsTGlzdCh0aGlzLiNzaGVldCwgY2VsbHMpO1xuICAgIH1cbn1cblxuLy9UT0RPLi4uXG5pbXBvcnQgXCIuL2Zvcm11bGFfZWRpdG9yXCI7XG5pbXBvcnQgXCIuL3BsYWdlX2VkaXRvclwiO1xuaW1wb3J0IHsgRm9ybXVsYSwgcGFyc2VfZm9ybXVsYSB9IGZyb20gXCIuL2Zvcm11bGFfcGFyc2VyXCI7XG5pbXBvcnQgeyBQbGFnZVNlbGVjdG9yIH0gZnJvbSBcIi4vcGxhZ2Vfc2VsZWN0b3JcIjtcbmltcG9ydCB7IEZvcm1hdCwgRm9ybWF0TWFuYWdlciwgRm9ybWF0cyB9IGZyb20gXCIuL2Zvcm1hdFwiO1xuaW1wb3J0IHsgRm9ybXVsYVJlZiwgUmFuZ2VPdmVybGF5LCBSZWNvcHlIYW5kbGUgfSBmcm9tIFwiLi9SYW5nZU92ZXJsYXlcIjtcbmltcG9ydCB7IHRlc3QgfSBmcm9tIFwidGVzdC93ZWJvZGZcIjtcblxuTElTUy5kZWZpbmUoJ2NhbGMtc2hlZXQnLCBDYWxjU2hlZXQpOyIsImV4cG9ydCBkZWZhdWx0IFtcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIlIgMS0wMSBUYWJsZXVyIGV0IFJlcG9ydGluZ1wiLFxuICAgICAgICBzbmFtZTogXCJSMS0wMSBUYWJsZXVyXCIsXG4gICAgICAgIHBhdGggOiBcIlIxLTAxXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJDTVwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiQ01cIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIkNNMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIkNNMlwiXG4gICAgICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiVFBcIixcbiAgICAgICAgICAgICAgICBwYXRoOiBcIlRQXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgXCJUUDFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJUUDJcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lIDogXCJSIDEtMDIgQmFzZXMgZGUgRG9ubsOpZXMgUmVsYXRpb25uZWxsZXMgMVwiLFxuICAgICAgICBzbmFtZTogXCJSMS0wMiBCRFIxXCIsXG4gICAgICAgIHBhdGggOiBcIlIxLTAyXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBcIkNNXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJTbGlkZXNcIixcbiAgICAgICAgICAgICAgICBwYXRoOiBcIlNsaWRlc1wiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiQ00xXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQ00yXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQ00zXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQ000XCJcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiVFBcIiAsXG4gICAgICAgICAgICAgICAgcGF0aCA6IFwiVFBcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIlRQMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQMlwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQM1wiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQNFwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQNVwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ2hlYXQgU2hlZXRcIixcbiAgICAgICAgICAgICAgICBwYXRoOiBcIi9hc3NldHMvc3FsL2NoZWF0IHNoZWV0LnN2Z1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiUiAzLTAzIFRlY2hub2xvZ2llcyBXZWJcIixcbiAgICAgICAgc25hbWU6IFwiUjMtMDMgV2ViMVwiLFxuICAgICAgICBwYXRoIDogXCJSMy0wM1wiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ01cIixcbiAgICAgICAgICAgICAgICBwYXRoOiBcIkNNXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgXCJDTTFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDTTJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDTTNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDTTRcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlRQXCIsXG4gICAgICAgICAgICAgICAgcGF0aDogXCJUUFwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiVFAxXCIsXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ2hlYXQgU2hlZXQgSFRNTFwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiL2Fzc2V0cy93ZWIvSFRNTDUvY2hlYXQgc2hlZXQuc3ZnXCJcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNoZWF0IFNoZWV0IENTU1wiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiL2Fzc2V0cy93ZWIvQ1NTMy9jaGVhdCBzaGVldC5zdmdcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIlIgNS0wNi1WQ09EIETDqXZlbG9wcGVtZW50IExvZ2ljaWVsXCIsXG4gICAgICAgIHNuYW1lOiBcIlI1LTA2LVZDT0QgRGV2IExvZ1wiLFxuICAgICAgICBwYXRoIDogXCJSNS0wNi1WQ09EXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJDTVwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiQ01cIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIkNNMVwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IHJvb3RfcGF0aCA9IFtcImxvY2FsaG9zdFwiLCBcIjEyNy4wLjAuMVwiXS5pbmNsdWRlcyhsb2NhdGlvbi5ob3N0bmFtZSkgPyBcIi9kaXN0L2Rldi9wYWdlcy9cIiA6IFwiL0NvdXJzL2Rpc3QvZGV2L3BhZ2VzL1wiOyIsIi8vIE9CU09MRVRFLCB1c2Ugc2tlbGV0b24gbWVudVxuXG5pbXBvcnQgcGFnZXMsIHtyb290X3BhdGh9IGZyb20gXCIuL2NvbnRlbnRcIjtcblxuLypcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmVwcmludCcsICgpID0+IHtcbiAgLy8uLi5cbn0pO1xuKi9cblxuLy9UT0RPOiBsaW5rcy4uLlxuY29uc3QgbWFpbiAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikhO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKSE7XG5cbmNvbnN0IHRpdGxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFwiaDEsIGgyLCBoMywgaDRcIik7XG5cbnR5cGUgTm9kZSA9IHtcbiAgICBodG1sICAgIDogSFRNTEVsZW1lbnQsXG4gICAgbGV2ZWwgICA6IG51bWJlcixcbiAgICBwYXJlbnQgIDogbnVsbHxOb2RlLFxuICAgIGNoaWxkcmVuOiBOb2RlW11cbn07XG5cbmNvbnN0IGh0cmVlOiBOb2RlID0ge1xuICAgIGh0bWwgICAgOiBtYWluLFxuICAgIGxldmVsICAgOiAwLFxuICAgIHBhcmVudCAgOiBudWxsLFxuICAgIGNoaWxkcmVuOiBbXSxcbn07XG5sZXQgaHRyZWVfY3Vyc29yID0gaHRyZWU7XG5mb3IobGV0IHRpdGxlIG9mIHRpdGxlcykge1xuICAgIGNvbnN0IGxldmVsID0gK3RpdGxlLnRhZ05hbWUuc2xpY2UoMSk7XG4gICAgXG4gICAgd2hpbGUoIGxldmVsIDw9IGh0cmVlX2N1cnNvci5sZXZlbCApXG4gICAgICAgIGh0cmVlX2N1cnNvciA9IGh0cmVlX2N1cnNvci5wYXJlbnQhO1xuXG4gICAgY29uc3QgZWxlbTogTm9kZSA9IHtcbiAgICAgICAgaHRtbDogdGl0bGUsXG4gICAgICAgIGxldmVsLFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgIHBhcmVudDogaHRyZWVfY3Vyc29yXG4gICAgfTtcblxuXG4gICAgaHRyZWVfY3Vyc29yLmNoaWxkcmVuLnB1c2goZWxlbSk7XG5cbiAgICBodHJlZV9jdXJzb3IgPSBlbGVtO1xufVxuXG5mdW5jdGlvbiBzZWFyY2hDdXJIZWFkZXIoaHRyZWU6IE5vZGUsIHBvc2l0aW9uOiBudW1iZXIpOiBudWxsIHwgTm9kZSB7XG5cbiAgICBjb25zdCBoZWFkZXJzID0gaHRyZWUuY2hpbGRyZW47XG5cbiAgICBmb3IobGV0IGkgPSBoZWFkZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKVxuICAgICAgICBpZiggaGVhZGVyc1tpXS5odG1sLm9mZnNldFRvcCA8PSBwb3NpdGlvbiArIDMyIClcbiAgICAgICAgICAgIHJldHVybiBzZWFyY2hDdXJIZWFkZXIoaGVhZGVyc1tpXSwgcG9zaXRpb24pID8/IGhlYWRlcnNbaV07XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuY29uc3QgaGlkID0gW1xuICAgIFtdLFxuICAgIFtcIklcIiwgXCJJSVwiLCBcIklJSVwiLCBcIklWXCJdLFxuICAgIFtcIjFcIiwgXCIyXCIsXCIzXCIsXCI1XCIsXCI2XCIsXCI3XCIsXCI4XCIsXCI5XCJdLFxuICAgIFtcImFcIiwgXCJiXCIsXCJjXCIsXCJkXCIsXCJlXCIsXCJmXCIsXCJnXCIsXCJoXCJdLFxuXVxuXG5mdW5jdGlvbiBnZXRUaXRsZVByZWZpeChzOiBOb2RlKSB7XG5cbiAgICBpZiggcy5sZXZlbCA+PSBoaWQubGVuZ3RoIClcbiAgICAgICAgcmV0dXJuIFwiXCI7XG5cbiAgICBjb25zdCBpZHggPSBzLnBhcmVudCEuY2hpbGRyZW4uaW5kZXhPZihzKTtcblxuICAgIGNvbnN0IG51bSA9IGhpZFtzLmxldmVsXVtpZHhdO1xuXG4gICAgcmV0dXJuIGAke251bX0uIGA7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTWVudShub2RlczogTm9kZVtdKSB7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuXG4gICAgbWVudS5hcHBlbmQoIC4uLiBub2Rlcy5tYXAoIChzLGlkeCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGl0ZW0udGV4dENvbnRlbnQ9IGAke2dldFRpdGxlUHJlZml4KHMpfSR7cy5odG1sLnRleHRDb250ZW50fWA7XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBgIyR7cy5odG1sLmlkfWApO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9KSApO1xuXG4gICAgcmV0dXJuIG1lbnU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUhlYWRlcigpIHtcblxuICAgIGNvbnN0IGxhc3QgPSBzZWFyY2hDdXJIZWFkZXIoIGh0cmVlLCBtYWluLnNjcm9sbFRvcCkhO1xuXG4gICAgbGV0IGhlYWRlcnMgPSBbXTtcbiAgICBsZXQgY3Vyc29yICA9IGxhc3Q7XG5cbiAgICBpZiggY3Vyc29yICE9PSBudWxsKVxuICAgICAgICB3aGlsZShjdXJzb3IuaHRtbCAhPT0gbWFpbikge1xuICAgICAgICAgICAgaGVhZGVycy5wdXNoKGN1cnNvcik7XG4gICAgICAgICAgICBjdXJzb3IgPSBjdXJzb3IucGFyZW50ITtcbiAgICAgICAgfVxuXG4gICAgY29uc3QgaHRtbCA9IGhlYWRlcnMucmV2ZXJzZSgpLm1hcCggKGhub2RlLGkpID0+IHtcblxuICAgICAgICBjb25zdCBoID0gaG5vZGUuaHRtbDtcbiAgICAgICAgY29uc3QgaF9odG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gYCR7Z2V0VGl0bGVQcmVmaXgoaG5vZGUpfSR7aC50ZXh0Q29udGVudH1gO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGAjJHtoLmlkfWApO1xuXG4gICAgICAgIGNvbnN0IG1lbnUgPSBidWlsZE1lbnUoaG5vZGUucGFyZW50IS5jaGlsZHJlbik7XG4gICAgICAgIGhfaHRtbC5hcHBlbmQobGluaywgbWVudSk7XG5cbiAgICAgICAgcmV0dXJuIGhfaHRtbDtcbiAgICB9KTtcblxuICAgIGlmKCBsYXN0ICE9PSBudWxsICYmIGxhc3QuY2hpbGRyZW4ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IGVtcHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgICAgICAgZW1wdHkuYXBwZW5kKCBidWlsZE1lbnUobGFzdC5jaGlsZHJlbikgKTtcblxuICAgICAgICBodG1sLnB1c2goZW1wdHkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZV9wYWdlX2hyZWYocGF0aHByZWZpeDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIGRlc2M6IGFueSkge1xuXG4gICAgICAgIC8vIGg0Y2suLi5cbiAgICAgICAgaWYoIHBhdGhbMF0gPT09IFwiL1wiIClcbiAgICAgICAgICAgIHJldHVybiBgJHtyb290X3BhdGguc2xpY2UoMCwtNil9LyR7cGF0aH1gO1xuXG4gICAgICAgIGxldCBocmVmID0gYCR7cGF0aHByZWZpeH0ke3BhdGh9L2A7XG5cbiAgICAgICAgd2hpbGUoZGVzYy5jaGlsZHJlbj8ubGVuZ3RoKSB7XG4gICAgICAgICAgICBkZXNjID0gZGVzYy5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIGhyZWYgKz0gYCR7ZGVzYy5wYXRoID8/IGRlc2N9L2A7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaHJlZjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlX3BhZ2VfbWVudShwYXRocHJlZml4OiBzdHJpbmcsIHBhdGg6IHN0cmluZywgcGFnZXM6IGFueSkge1xuICAgICAgICBjb25zdCBkZXNjID0gcGFnZXMuZmluZCggKHBhZ2U6IGFueSkgPT4gcGFnZSA9PT0gcGF0aCB8fCBwYWdlLnBhdGggPT09IHBhdGggKSE7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSBkZXNjLnNuYW1lID8/IGRlc2MubmFtZSA/PyBkZXNjO1xuICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBtYWtlX3BhZ2VfaHJlZihwYXRocHJlZml4LCBwYXRoLCBkZXNjKSApO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuICAgIFxuICAgICAgICAgICAgbWVudS5hcHBlbmQoIC4uLiBwYWdlcy5tYXAoIChwYWdlOmFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50PSBwYWdlLm5hbWUgPz8gcGFnZTtcblxuICAgICAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBtYWtlX3BhZ2VfaHJlZihwYXRocHJlZml4LCBwYWdlLnBhdGg/P3BhZ2UsIHBhZ2UpICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9KSApO1xuICAgIFxuICAgICAgICAgICAgaHRtbC5hcHBlbmQobGluaywgbWVudSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gICAgXG4gICAgbGV0IGN1cnBhZ2UgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc2xpY2Uocm9vdF9wYXRoLmxlbmd0aCkuc3BsaXQoJy8nKTtcblxuICAgIGNvbnN0IG1vZHVsZV9odG1sID0gbWFrZV9wYWdlX21lbnUocm9vdF9wYXRoLCBjdXJwYWdlWzBdLCBwYWdlcyk7XG5cbiAgICBjb25zdCBkZXNjID0gcGFnZXMuZmluZCggKHBhZ2U6IGFueSkgPT4gcGFnZS5wYXRoID09PSBjdXJwYWdlWzBdICkhO1xuICAgIGNvbnN0IHR5cGVfaHRtbCAgID0gbWFrZV9wYWdlX21lbnUocm9vdF9wYXRoICsgY3VycGFnZVswXSArIFwiL1wiLCBjdXJwYWdlWzFdLCBkZXNjLmNoaWxkcmVuKTtcblxuICAgIGNvbnN0IGRlc2NfdHlwZSA9IGRlc2MuY2hpbGRyZW4uZmluZCggKHBhZ2U6IGFueSkgPT4gKHBhZ2U/LnBhdGggPz8gcGFnZSkgPT09IGN1cnBhZ2VbMV0gKSE7XG4gICAgaWYoIHR5cGVvZiBkZXNjX3R5cGUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgLy8gdGl0bGUgbnVtXG4gICAgICAgIGNvbnN0IGRlc2MyX2lkeCA9IGRlc2NfdHlwZS5jaGlsZHJlbi5maW5kSW5kZXgoIChwYWdlOiBhbnkpID0+IHBhZ2U/LnBhdGggPz8gcGFnZSA9PT0gY3VycGFnZVsyXSApITtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taGVhZGVyX3N0YXJ0X2lkXCIsIGAke2Rlc2MyX2lkeH1gKTtcbiAgICAgICAgLy8gbWVudVxuICAgICAgICBjb25zdCBzZXNzaW9uX2h0bWwgICA9IG1ha2VfcGFnZV9tZW51KHJvb3RfcGF0aCArIGN1cnBhZ2VbMF0gKyBcIi9cIisgY3VycGFnZVsxXSArIFwiL1wiLCBjdXJwYWdlWzJdLCBkZXNjX3R5cGUuY2hpbGRyZW4pO1xuICAgICAgICBodG1sWzBdID0gc2Vzc2lvbl9odG1sO1xuICAgIH1cblxuICAgIGhlYWRlci5yZXBsYWNlQ2hpbGRyZW4obW9kdWxlX2h0bWwsIHR5cGVfaHRtbCwgLi4uaHRtbCk7XG59XG5cbmNvbnN0IHAgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCk7XG5pZiggISBwLmhhcygnZHMnKSApIHtcbiAgICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZUhlYWRlcik7XG4gICAgdXBkYXRlSGVhZGVyKCk7XG59IiwiLy9odHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80OTQxNDMvY3JlYXRpbmctYS1uZXctZG9tLWVsZW1lbnQtZnJvbS1hbi1odG1sLXN0cmluZy11c2luZy1idWlsdC1pbi1kb20tbWV0aG9kcy1vci1wcm9cbmV4cG9ydCBmdW5jdGlvbiBzdHIyaHRtbDxUIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KGh0bWw6IHN0cmluZyk6IFQge1xuICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgaHRtbCA9IGh0bWwudHJpbSgpOyAvLyBOZXZlciByZXR1cm4gYSB0ZXh0IG5vZGUgb2Ygd2hpdGVzcGFjZSBhcyB0aGUgcmVzdWx0XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZCEgYXMgVDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cjJERihodG1sOiBzdHJpbmcpOiBEb2N1bWVudEZyYWdtZW50IHtcbiAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIGh0bWwgPSBodG1sLnRyaW0oKTsgLy8gTmV2ZXIgcmV0dXJuIGEgdGV4dCBub2RlIG9mIHdoaXRlc3BhY2UgYXMgdGhlIHJlc3VsdFxuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQ7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsInZhciB3ZWJwYWNrUXVldWVzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBxdWV1ZXNcIikgOiBcIl9fd2VicGFja19xdWV1ZXNfX1wiO1xudmFyIHdlYnBhY2tFeHBvcnRzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBleHBvcnRzXCIpIDogXCJfX3dlYnBhY2tfZXhwb3J0c19fXCI7XG52YXIgd2VicGFja0Vycm9yID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBlcnJvclwiKSA6IFwiX193ZWJwYWNrX2Vycm9yX19cIjtcbnZhciByZXNvbHZlUXVldWUgPSAocXVldWUpID0+IHtcblx0aWYocXVldWUgJiYgcXVldWUuZCA8IDEpIHtcblx0XHRxdWV1ZS5kID0gMTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSkpO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tID8gZm4ucisrIDogZm4oKSkpO1xuXHR9XG59XG52YXIgd3JhcERlcHMgPSAoZGVwcykgPT4gKGRlcHMubWFwKChkZXApID0+IHtcblx0aWYoZGVwICE9PSBudWxsICYmIHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpIHtcblx0XHRpZihkZXBbd2VicGFja1F1ZXVlc10pIHJldHVybiBkZXA7XG5cdFx0aWYoZGVwLnRoZW4pIHtcblx0XHRcdHZhciBxdWV1ZSA9IFtdO1xuXHRcdFx0cXVldWUuZCA9IDA7XG5cdFx0XHRkZXAudGhlbigocikgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0V4cG9ydHNdID0gcjtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0sIChlKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXJyb3JdID0gZTtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0pO1xuXHRcdFx0dmFyIG9iaiA9IHt9O1xuXHRcdFx0b2JqW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAoZm4ocXVldWUpKTtcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHR9XG5cdHZhciByZXQgPSB7fTtcblx0cmV0W3dlYnBhY2tRdWV1ZXNdID0geCA9PiB7fTtcblx0cmV0W3dlYnBhY2tFeHBvcnRzXSA9IGRlcDtcblx0cmV0dXJuIHJldDtcbn0pKTtcbl9fd2VicGFja19yZXF1aXJlX18uYSA9IChtb2R1bGUsIGJvZHksIGhhc0F3YWl0KSA9PiB7XG5cdHZhciBxdWV1ZTtcblx0aGFzQXdhaXQgJiYgKChxdWV1ZSA9IFtdKS5kID0gLTEpO1xuXHR2YXIgZGVwUXVldWVzID0gbmV3IFNldCgpO1xuXHR2YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuXHR2YXIgY3VycmVudERlcHM7XG5cdHZhciBvdXRlclJlc29sdmU7XG5cdHZhciByZWplY3Q7XG5cdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlaikgPT4ge1xuXHRcdHJlamVjdCA9IHJlajtcblx0XHRvdXRlclJlc29sdmUgPSByZXNvbHZlO1xuXHR9KTtcblx0cHJvbWlzZVt3ZWJwYWNrRXhwb3J0c10gPSBleHBvcnRzO1xuXHRwcm9taXNlW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAocXVldWUgJiYgZm4ocXVldWUpLCBkZXBRdWV1ZXMuZm9yRWFjaChmbiksIHByb21pc2VbXCJjYXRjaFwiXSh4ID0+IHt9KSk7XG5cdG1vZHVsZS5leHBvcnRzID0gcHJvbWlzZTtcblx0Ym9keSgoZGVwcykgPT4ge1xuXHRcdGN1cnJlbnREZXBzID0gd3JhcERlcHMoZGVwcyk7XG5cdFx0dmFyIGZuO1xuXHRcdHZhciBnZXRSZXN1bHQgPSAoKSA9PiAoY3VycmVudERlcHMubWFwKChkKSA9PiB7XG5cdFx0XHRpZihkW3dlYnBhY2tFcnJvcl0pIHRocm93IGRbd2VicGFja0Vycm9yXTtcblx0XHRcdHJldHVybiBkW3dlYnBhY2tFeHBvcnRzXTtcblx0XHR9KSlcblx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRmbiA9ICgpID0+IChyZXNvbHZlKGdldFJlc3VsdCkpO1xuXHRcdFx0Zm4uciA9IDA7XG5cdFx0XHR2YXIgZm5RdWV1ZSA9IChxKSA9PiAocSAhPT0gcXVldWUgJiYgIWRlcFF1ZXVlcy5oYXMocSkgJiYgKGRlcFF1ZXVlcy5hZGQocSksIHEgJiYgIXEuZCAmJiAoZm4ucisrLCBxLnB1c2goZm4pKSkpO1xuXHRcdFx0Y3VycmVudERlcHMubWFwKChkZXApID0+IChkZXBbd2VicGFja1F1ZXVlc10oZm5RdWV1ZSkpKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZm4uciA/IHByb21pc2UgOiBnZXRSZXN1bHQoKTtcblx0fSwgKGVycikgPT4gKChlcnIgPyByZWplY3QocHJvbWlzZVt3ZWJwYWNrRXJyb3JdID0gZXJyKSA6IG91dGVyUmVzb2x2ZShleHBvcnRzKSksIHJlc29sdmVRdWV1ZShxdWV1ZSkpKTtcblx0cXVldWUgJiYgcXVldWUuZCA8IDAgJiYgKHF1ZXVlLmQgPSAwKTtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdtb2R1bGUnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTEvaW5kZXgudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00xL2luZGV4LmNzc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMS9pbmRleC5tZFwiKTtcbiIsIiJdLCJuYW1lcyI6WyJTaGFkb3dDZmciLCJfX2NzdHJfaG9zdCIsIkNBTl9IQVZFX1NIQURPVyIsIl9jYW5IYXNTaGFkb3ciLCJ0YWciLCJpbmNsdWRlcyIsIl9lbGVtZW50MnRhZ25hbWUiLCJMSVNTIiwiZXh0ZW5kcyIsInBfZXh0ZW5kcyIsImhvc3QiLCJwX2hvc3QiLCJkZXBlbmRlbmNpZXMiLCJwX2RlcHMiLCJhdHRyaWJ1dGVzIiwicF9hdHRycyIsInBhcmFtcyIsImNvbnRlbnQiLCJjc3MiLCJzaGFkb3ciLCJwX3NoYWRvdyIsIkhUTUxFbGVtZW50IiwiX2V4dGVuZHMiLCJPYmplY3QiLCJjYW5IYXNTaGFkb3ciLCJFcnJvciIsInVuZGVmaW5lZCIsInB1c2giLCJIVE1MVGVtcGxhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwidHJpbSIsIlJlc3BvbnNlIiwidGV4dCIsIkxJU1NCYXNlIiwiUGFyYW1ldGVycyIsInN0eWxlc2hlZXRzIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiZmV0Y2hfY3NzIiwiQ1NTU3R5bGVTaGVldCIsIkhUTUxTdHlsZUVsZW1lbnQiLCJzaGVldCIsInN0eWxlIiwicmVwbGFjZSIsIm1hcCIsImlkeCIsImNvbnN0cnVjdG9yIiwiYXR0cnMiLCJzZXRBdHRyRGVmYXVsdCIsImF0dHIiLCJ2YWx1ZSIsInNldFBhcmFtIiwibmFtZSIsIm9uQXR0ckNoYW5nZWQiLCJfbmFtZSIsIl9vbGRWYWx1ZSIsIl9uZXdWYWx1ZSIsImlzSW5ET00iLCJvbkRPTUNvbm5lY3RlZCIsIm9uRE9NRGlzY29ubmVjdGVkIiwiZXh0ZW5kc0xJU1MiLCJMaXNzIiwicGFyYW1ldGVycyIsImFzc2lnbiIsIkV4dGVuZGVkTElTUyIsInQiLCJpZCIsImJ1aWxkTElTU0hvc3QiLCJfcGFyYW1zIiwiYWxyZWFkeURlY2xhcmVkQ1NTIiwiU2V0IiwiR0VUIiwiU3ltYm9sIiwiU0VUIiwicHJvcGVydGllcyIsImZyb21FbnRyaWVzIiwibiIsImVudW1lcmFibGUiLCJnZXQiLCJzZXQiLCJBdHRyaWJ1dGVzIiwiZGF0YSIsImRlZmF1bHRzIiwic2V0dGVyIiwiZGVmaW5lUHJvcGVydGllcyIsIkxJU1NIb3N0QmFzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiaXNJbml0IiwiaW5pdGlhbGl6ZSIsImFwaSIsImluaXQiLCJMSVNTU3luYyIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJjdXN0b21FbGVtZW50cyIsInVwZ3JhZGUiLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uQ2xpY2tFdmVudCIsIm9icyIsImdldEF0dHJpYnV0ZSIsImFkb3B0ZWRTdHlsZVNoZWV0cyIsInNoYXJlZENTUyIsImNzc3NlbGVjdG9yIiwiQ1NTU2VsZWN0b3IiLCJoYXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJodG1sX3N0eWxlc2hlZXRzIiwicnVsZSIsImNzc1J1bGVzIiwiY3NzVGV4dCIsImhlYWQiLCJhcHBlbmQiLCJhZGQiLCJ0ZW1wbGF0ZV9lbGVtIiwic3RyIiwiXyIsIm1hdGNoIiwiY2hpbGROb2RlcyIsIm9iaiIsImhhc1NoYWRvdyIsImdldFBhcnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0UGFydHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGFzQXR0cmlidXRlIiwidGFnTmFtZSIsInJlbW92ZUF0dHJpYnV0ZSIsIm9ic2VydmVkQXR0cmlidXRlcyIsImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayIsIm9sZFZhbHVlIiwibmV3VmFsdWUiLCJfRE9NQ29udGVudExvYWRlZCIsInJlYWR5U3RhdGUiLCJkZWZpbmUiLCJ0YWduYW1lIiwiQ29tcG9uZW50Q2xhc3MiLCJDbGFzcyIsImh0bWx0YWciLCJhbGwiLCJMSVNTY2xhc3MiLCJvcHRzIiwiaW5zZXJ0R2xvYmFsQ1NTUnVsZXMiLCJjc3Nfc3R5bGUiLCJyZXBsYWNlU3luYyIsImluc2VydFJ1bGUiLCJERUxFR0FURURfRVZFTlRTIiwiQUxSRUFEWV9QUk9DRVNTRUQiLCJldiIsImhhbmRsZXJzIiwidHlwZSIsImVsZW0iLCJjb21wb3NlZFBhdGgiLCJTaGFkb3dSb290Iiwid2luZG93IiwidGFyZ2V0Iiwic2VsZWN0b3IiLCJoYW5kbGVyIiwibWF0Y2hlcyIsImluc2VydEdsb2JhbERlbGVnYXRlZExpc3RlbmVyIiwiZXZlbnRfbmFtZSIsImNsb3Nlc3QiLCJlbGVtZW50IiwicmVzdWx0Iiwicm9vdCIsImdldFJvb3ROb2RlIiwiYnVpbGQiLCJwYXJlbnQiLCJjbGFzc2VzIiwiY3NzdmFycyIsImxpc3RlbmVycyIsIkN1c3RvbUNsYXNzIiwid2hlbkRlZmluZWQiLCJ0b0xvd2VyQ2FzZSIsImNsYXNzTGlzdCIsInNldFByb3BlcnR5IiwidG9nZ2xlQXR0cmlidXRlIiwiZGF0YXNldCIsInJlcGxhY2VDaGlsZHJlbiIsImdldExJU1MiLCJidWlsZFN5bmMiLCJpbml0aWFsaXplU3luYyIsImdldExJU1NTeW5jIiwiY2FsbGJhY2siLCJ3aGVuQWxsRGVmaW5lZCIsInRhZ25hbWVzIiwiaXNEZWZpbmVkIiwiZ2V0TmFtZSIsIl9idWlsZFFTIiwidGFnbmFtZV9vcl9wYXJlbnQiLCJxcyIsInFzbyIsInFzYSIsImVsZW1lbnRzIiwicHJvbWlzZXMiLCJxc2MiLCJyZXMiLCJxc1N5bmMiLCJxc2FTeW5jIiwicXNjU3luYyIsIkxJU1NfQXV0byIsIm5hdmlnYXRvciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsImNvbnRyb2xsZXIiLCJzcmMiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm11dGF0aW9uIiwiYWRkaXRpb24iLCJhZGRlZE5vZGVzIiwiRWxlbWVudCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwicmVzb3VyY2VzIiwiZGVmaW5lV2ViQ29tcG9uZW50IiwiZmlsZXMiLCJqcyIsImtsYXNzIiwiV2ViQ29tcG9uZW50IiwiZmlsZW5hbWVzIiwiZmlsZSIsImVuZHNXaXRoIiwiX2ltcG9ydCIsIl9mZXRjaFRleHQiLCJpIiwiQ3N0bUV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJhcmdzIiwiZGV0YWlsIiwiZmV0Y2hSZXNvdXJjZSIsInJlc291cmNlIiwiZmV0Y2giLCJ1cmkiLCJpc0xpc3NBdXRvIiwib3B0aW9ucyIsImhlYWRlcnMiLCJyZXNwb25zZSIsInN0YXR1cyIsImRlZmF1bHQiLCJlIiwiY29uc29sZSIsImxvZyIsIkhUTUxDTEFTU19SRUdFWCIsImVsZW1lbnROYW1lTG9va3VwVGFibGUiLCJleGVjIiwiRm9ybWF0cyIsInNfZm9ybXVsYSIsImdldFJhbmdlIiwiZm9ybWF0IiwiZXVyb3MiLCJzX2NvbXBsZXhfZm9ybXVsYSIsInNfdHlwZXMiLCJEYXRlIiwic19jdXJzb3IiLCJzXyRmb3JtdWxhIiwic18kZm9ybSIsInJlZiIsInNoZWV0X3JlY29waWVfbW90aXZhdGlvbiIsInNoZWV0X3JlY29waWVfbW90aXZhdGlvbl9lbXB0eSIsInNoZWV0X3JlY29waWVfaW5jciIsImMiLCJYIiwidGQiLCJmb2N1cyIsInRleHRDb250ZW50Iiwic3RyMmh0bWwiLCJSYW5nZU92ZXJsYXkiLCJFdmVudFRhcmdldCIsIm92ZXJsYXkiLCJjbGFzc2xpc3QiLCJ1cGRhdGUiLCJzZXRSYW5nZSIsInJhbmdlIiwicGxhZ2VfbmFtZSIsImdldFJlY3QiLCJyZWN0IiwidG9nZ2xlIiwic2V0UmVjdCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJGb3JtdWxhUmVmIiwic2V0Q29sb3IiLCJjb2xvcl9pZCIsInJlbW92ZSIsIlJlY29weUhhbmRsZSIsIngiLCJ5IiwidyIsImgiLCJGb3JtdWxhIiwiQ2FsY1NoZWV0IiwiQ2VsbExpc3QiLCJGb3JtYXRNYW5hZ2VyIiwiY3RybEtleSIsImNoYW5nZWQiLCJrZXkiLCJzZWxlY3Rpb24iLCJ0b2dnbGVGb3JtYXQiLCJzaGlmdEtleSIsInBvdXJjZW50IiwibnVtYmVyIiwicHJldmVudERlZmF1bHQiLCJkaXNwYXRjaEV2ZW50IiwiZmxvYXQyRGF0ZSIsImZsb2F0Iiwic2V0RGF0ZSIsImdldERhdGUiLCJkYXRlMkZsb2F0IiwiZGF0ZSIsImJlZyIsImdldFRpbWUiLCJ0b0ZpeGVkIiwiZm9ybWF0UmF3IiwicHRoaXMiLCJyYXdDb250ZW50IiwidG9TdHJpbmciLCJjYWxsIiwiY2FjaGVkVmFsdWUiLCJwcmVjIiwidG9QcmVjaXNpb24iLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJnZXRTaGVldEZyb21DZWxsIiwidG9Mb2NhbGVTdHJpbmciLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJzbGljZSIsIkZvcm1hdCIsImFwcGx5VG8iLCJjZWxsIiwiY2VsbHMiLCJ2YWwiLCJyIiwiaiIsInJlbGF0aXZlVG8iLCJzdGFydHNXaXRoIiwiZ2V0UHJvcGVydHkiLCJoYXNQcm9wZXJ0eSIsImV4dHJhY3RGb3JtYXQiLCJmMiIsInZhbHVlcyIsIml0ZW0iLCJnZXRQcm9wZXJ0eVZhbHVlIiwiY29sc3BhbiIsInJvd3NwYW4iLCJzcGFuIiwicHJlY2lzaW9uIiwiQ2FsY0Zvcm11bGEiLCJzdGF0ZXMiLCJjZWxsX2VkaXQiLCJzdGF0ZSIsInN5bmNUbyIsImN1cnNvciIsImZpcnN0Q2VsbCIsImlzUk8iLCJyYW5nZXNfdG9rZW4iLCJkcm93IiwiZGNvbCIsIm5ld19yYW5nZXMiLCJwb3MiLCJjZWxsUG9zIiwibGFzdEluZGV4T2YiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJuZXdfZm9ybXVsYSIsIm9mZnNldCIsImVuZCIsInBhcnNlX2Zvcm11bGEiLCJyYW5nZXNUb2tlbiIsInJlc2V0Q2FjaGUiLCJleHRyYWN0VG9rZW4iLCJ0b2tlbiIsImhhc0NvbW1hIiwiTm9kZSIsImNoaWxkcmVuIiwiZmN0IiwiZXZhbCIsInRvTnVtYmVyIiwiYSIsIk51bWJlciIsIm9wX2ltcGwiLCJiIiwiTWF0aCIsInBvdyIsIm9wX3ByaW8iLCJvcHMiLCJvcCIsInRva2VubGlzdDJUcmVlIiwidG9rZW5zIiwibmIiLCJyYXciLCJjdXIiLCJwcmlvcml0eSIsImZpbmRJbmRleCIsInVfb3AiLCJvcF90b2tlbiIsImxlZnQiLCJyaWdodCIsImN1clRva2VuIiwibm9kZSIsInJhbmdlcyIsImZpbHRlciIsIlBsYWdlRm9ybXVsYSIsImNvZGUiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJzZWxlY3RlZCIsImdldENlbGxzIiwiY2xlYXIiLCJibHVyIiwiUGxhZ2VTZWxlY3RvciIsInNlbGVjdGVkX2NlbGxzIiwiY29scyIsInRib2R5IiwiY29sX2lkIiwiY2xpZW50WCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJvd3MiLCJyb3dfaWQiLCJjbGllbnRZIiwibWFpbiIsIm9uX21vdXNlX21vdmUiLCJyZXBsYWNlQWxsIiwiZ2V0VmlzaWJsZUNlbGwiLCJwb3MycmVmIiwibmJSb3dzIiwibmJDb2xzIiwib25jZSIsImlzQWN0aXZlIiwib25JbnB1dCIsInJyYW5nZSIsImdldFNlbGVjdGlvbiIsImdldFJhbmdlQXQiLCJzdGFydE9mZnNldCIsImNoaWxkIiwibm9kZVR5cGUiLCJURVhUX05PREUiLCJzdGFydENvbnRhaW5lciIsImNyZWF0ZVJhbmdlIiwic2VsIiwic2V0U3RhcnQiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwicGFyc2VJbnB1dCIsInRlc3RfbnVtYmVyIiwiaXNOYU4iLCJwYXJ0cyIsInNwbGl0IiwidGVzdF9kYXRlIiwiZ2V0RnVsbFllYXIiLCJTdGF0ZSIsInByZXZfc3RhdGUiLCJTdGF0ZXMiLCJlbnRyaWVzIiwicyIsInRibF9vZmZzZXQiLCJvZmZzZXRUb3AiLCJzdGFydCIsIm9mZnNldExlZnQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInJvd19kaWZmIiwiY29sX2RpZmYiLCJyb3ciLCJjb2wiLCJyZWNvcHkiLCJjb3B5IiwibGFzdF9yZWNvcHlfdGFyZ2V0IiwibGFzdF9yZWNvcHlfZGlyIiwib25fcmVjb3B5X21vdmUiLCJkX3B4Iiwid2lkdGgiLCJkX3B5IiwiaGVpZ2h0IiwiZF94IiwiZF95Iiwic2lnbiIsImFicyIsInByZXYiLCJkaWZmX3giLCJkaWZmX3kiLCJwb3NfY3VyIiwiY2xhc3NOYW1lIiwiZm9ybXVsYV9iYXIiLCJwbGFnZSIsImZvcm11bGEiLCJybyIsImlzX3JvIiwiZF9yb3ciLCJkX2NvbCIsIm5leHQiLCJhbHRLZXkiLCJkc3QiLCJkZWVwQ2xvbmUiLCJkZWxldGVGb3JtYXQiLCJkZWxldGVDb250ZW50IiwiYnViYmxlcyIsIm9uSW5wdXQyIiwicmFuZ2VzX2NvbG9ycyIsImN1cl9vZmZzZXQiLCJyYW5nZV9uYW1lIiwicmFuZ2VzX25hbWVzIiwia2V5cyIsIndhcm4iLCJwYXJlbnRFbGVtZW50IiwicmVzaXplIiwibmJyb3dzIiwibmJjb2xzIiwiY29sX2h0bWwiLCJjb2xncm91cCIsInRoIiwicm93X2h0bWwiLCJzZXRDb2xTaXplIiwic2l6ZSIsInJlZjJwb3MiLCJodG1sIiwidGFibGUiLCJyZXNpemVPYnMiLCJSZXNpemVPYnNlcnZlciIsImZyb20iLCJ0byIsIkhUTUxUYWJsZUNlbGxFbGVtZW50IiwiYmVnX3JvdyIsImJlZ19jb2wiLCJlbmRfcm93IiwiZW5kX2NvbCIsImVuZF9saW5lX2NvbCIsInNlcCIsInNlYXJjaCIsImNoYXJDb2RlQXQiLCJjb2xfc3RyIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzb3J0IiwibWluIiwibWF4IiwibmJfY29scyIsImZsb29yIiwiZiIsImlzRm9ybWF0IiwicmF3X3ZhbCIsInYiLCJkaWZmIiwiZm9ybWF0cyIsIm5iX2RhdGVzIiwiaW5kZXhPZiIsInNldFJPIiwiY2xvbmUiLCJjbG9uZU5vZGUiLCJzbmFtZSIsInBhdGgiLCJyb290X3BhdGgiLCJob3N0bmFtZSIsInBhZ2VzIiwiaGVhZGVyIiwidGl0bGVzIiwiaHRyZWUiLCJsZXZlbCIsImh0cmVlX2N1cnNvciIsInRpdGxlIiwic2VhcmNoQ3VySGVhZGVyIiwicG9zaXRpb24iLCJoaWQiLCJnZXRUaXRsZVByZWZpeCIsIm51bSIsImJ1aWxkTWVudSIsIm5vZGVzIiwibWVudSIsInVwZGF0ZUhlYWRlciIsImxhc3QiLCJzY3JvbGxUb3AiLCJyZXZlcnNlIiwiaG5vZGUiLCJoX2h0bWwiLCJsaW5rIiwiZW1wdHkiLCJtYWtlX3BhZ2VfaHJlZiIsInBhdGhwcmVmaXgiLCJkZXNjIiwiaHJlZiIsIm1ha2VfcGFnZV9tZW51IiwiZmluZCIsInBhZ2UiLCJjdXJwYWdlIiwibW9kdWxlX2h0bWwiLCJ0eXBlX2h0bWwiLCJkZXNjX3R5cGUiLCJkZXNjMl9pZHgiLCJib2R5Iiwic2Vzc2lvbl9odG1sIiwicCIsIlVSTFNlYXJjaFBhcmFtcyIsInRlbXBsYXRlIiwic3RyMkRGIl0sInNvdXJjZVJvb3QiOiIifQ==