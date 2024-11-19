/******/ var __webpack_modules__ = ({

/***/ "./src/pages/R1-01/CM/CM2/index.css":
/*!******************************************!*\
  !*** ./src/pages/R1-01/CM/CM2/index.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/R1-01/CM/CM2/index.md":
/*!*****************************************!*\
  !*** ./src/pages/R1-01/CM/CM2/index.md ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "pages/R1-01/CM/CM2/index.html");

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

/***/ "./src/pages/R1-01/CM/CM2/index.ts":
/*!*****************************************!*\
  !*** ./src/pages/R1-01/CM/CM2/index.ts ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var LISS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! LISS */ "./libs/LISS/index.ts");
/* harmony import */ var struct_menu_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! struct/menu.ts */ "./src/struct/menu.ts");
/* harmony import */ var struct_calc_sheet_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! struct/calc/sheet.ts */ "./src/struct/calc/sheet.ts");
/* harmony import */ var struct_calc_toolbar_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! struct/calc/toolbar.ts */ "./src/struct/calc/toolbar.ts");
/* harmony import */ var struct_calc_format_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! struct/calc/format.ts */ "./src/struct/calc/format.ts");





const sheet_format_content = await LISS__WEBPACK_IMPORTED_MODULE_0__["default"].qs('#sheet_format_content');
sheet_format_content.getRange("A1:F1").format("bold", "align_center").content = [
    "Taille",
    "Gras",
    "Italique",
    "Souligné",
    "Couleur texte",
    "Couleur fond"
];
sheet_format_content.getRange("A2:F2").format("align_center").content = "A";
sheet_format_content.getRange("A2").format({
    font_size: '15pt'
});
sheet_format_content.getRange("B2").format('bold');
sheet_format_content.getRange("C2").format('italic');
sheet_format_content.getRange("D2").format('underline');
sheet_format_content.getRange("E2").format({
    foreground_color: 'blue'
});
sheet_format_content.getRange("F2").format({
    background_color: 'yellow'
});
const sheet_toolbar_format_content = await LISS__WEBPACK_IMPORTED_MODULE_0__["default"].qs('#sheet_toolbar_format_content');
sheet_toolbar_format_content.syncTo(sheet_format_content);
sheet_toolbar_format_content.disableAllExcept("font_size", "bold", "italic", "underline", "foreground_color", "background_color");
{
    const sheet_align = await LISS__WEBPACK_IMPORTED_MODULE_0__["default"].qs('#sheet_align');
    sheet_align.getRange("B1:E1").format("bold", "align_center").content = [
        "Haut",
        "Milieu",
        "Bas",
        "Ajuster"
    ];
    sheet_align.getRange("A2:A4").format("bold", "align_center", "valign_middle").content = [
        "Gauche",
        "Centre",
        "Droit"
    ];
    sheet_align.getRange("B2:D4").content = "A";
    sheet_align.getRange("B2:E2").format("align_left");
    sheet_align.getRange("B3:E3").format('align_center');
    sheet_align.getRange("B4:E4").format('align_right');
    sheet_align.getRange("B2:B4").format('valign_top');
    sheet_align.getRange("C2:C4").format('valign_middle');
    sheet_align.getRange("D2:D4").format('valign_bottom');
    sheet_align.getRange("E2:E4").format("ajuster").content = `AAAAAAAAAAAAAAAAAAAAAAAAAAAA`;
    const sheet_toolbar_align = await LISS__WEBPACK_IMPORTED_MODULE_0__["default"].qs('#sheet_toolbar_align');
    sheet_toolbar_align.syncTo(sheet_align);
    sheet_toolbar_align.disableAllExcept("align_left", "align_center", "align_right", "valign_top", "valign_middle", "valign_bottom", "ajuster");
}{
    const sheet = await LISS__WEBPACK_IMPORTED_MODULE_0__["default"].qs('#sheet_format');
    sheet.getRange("A1:E1").format("bold", "align_center").content = [
        1,
        "Monnaie",
        "Pourcent",
        "Nombre",
        "Date"
    ];
    sheet.getRange("A2:A4").format("bold", "align_center").content = [
        "Normal",
        "+1 decimal",
        "-1 decimal"
    ];
    sheet.getRange("B2:E4").content = "=$A$1";
    sheet.getRange("B2:B4").format(struct_calc_format_ts__WEBPACK_IMPORTED_MODULE_4__.Formats.euros);
    sheet.getRange("C2:C4").format(struct_calc_format_ts__WEBPACK_IMPORTED_MODULE_4__.Formats.pourcent);
    sheet.getRange("D2:D4").format(struct_calc_format_ts__WEBPACK_IMPORTED_MODULE_4__.Formats.number);
    sheet.getRange("E2:E4").format(struct_calc_format_ts__WEBPACK_IMPORTED_MODULE_4__.Formats.date);
    sheet.getRange("B3:E3").format({
        precision: 3
    });
    sheet.getRange("B4:E4").format({
        precision: 1
    });
    const sheet_toolbar = await LISS__WEBPACK_IMPORTED_MODULE_0__["default"].qs('#sheet_toolbar_format');
    sheet_toolbar.syncTo(sheet);
    sheet_toolbar.disableAllExcept("format_monnaie", "format_pourcent", "format_nb", "format_date", "format_zero_p1", "format_zero_m1");
}{
    const sheet = await LISS__WEBPACK_IMPORTED_MODULE_0__["default"].qs('#sheet_bordures');
    sheet.getRange('B2').format({
        border_top: true,
        border_bottom: true,
        border_left: true,
        border_right: true,
        border_color: 'red'
    });
    const sheet_toolbar = await LISS__WEBPACK_IMPORTED_MODULE_0__["default"].qs('#sheet_toolbar_bordures');
    sheet_toolbar.syncTo(sheet);
    sheet_toolbar.disableAllExcept("border", "border_color");
}{
    const sheet = await LISS__WEBPACK_IMPORTED_MODULE_0__["default"].qs('#sheet_retraits');
    sheet.getRange("A1:B1").format("bold", "align_center").content = [
        "Gauche",
        "Droite"
    ];
    sheet.getRange('A2:B5').content = "A";
    sheet.getRange('A2:A5').format("align_left");
    sheet.getRange('B2:B5').format("align_right");
    sheet.getRange('A3:B3').format({
        indent: 1
    });
    sheet.getRange('A4:B4').format({
        indent: 2
    });
    sheet.getRange('A5:B5').format({
        indent: 3
    });
    const sheet_toolbar = await LISS__WEBPACK_IMPORTED_MODULE_0__["default"].qs('#sheet_toolbar_retraits');
    sheet_toolbar.syncTo(sheet);
    sheet_toolbar.disableAllExcept("retrait_p1", "retrait_m1");
}{
    const sheet = await LISS__WEBPACK_IMPORTED_MODULE_0__["default"].qs('#sheet_fusion');
    sheet.getRange('B2').format({
        span: [
            2,
            2
        ],
        align_center: true,
        valign_middle: true
    }).content = "A";
    const sheet_toolbar = await LISS__WEBPACK_IMPORTED_MODULE_0__["default"].qs('#sheet_toolbar_fusion');
    sheet_toolbar.syncTo(sheet);
    sheet_toolbar.disableAllExcept("merge_center", "merge", "unmerge");
}
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

/***/ "./src/struct/calc/toolbar.ts":
/*!************************************!*\
  !*** ./src/struct/calc/toolbar.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalcToolbar: () => (/* binding */ CalcToolbar),
/* harmony export */   CalcToolbarItem: () => (/* binding */ CalcToolbarItem)
/* harmony export */ });
/* harmony import */ var _libs_LISS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../libs/LISS */ "./libs/LISS/index.ts");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./format */ "./src/struct/calc/format.ts");
/* harmony import */ var _sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sheet */ "./src/struct/calc/sheet.ts");



const content = `
    <select disabled title="Nom de police"><option>Libération Sans</option></select>
    <select class="font_size" title="Taille de police"></select>
    <span class='vbar'></span>
    <calc-toolbar-item name='bold' title="Gras (Ctrl+B)"></calc-toolbar-item>
    <calc-toolbar-item name='italic' title="Italique (Ctrl+I)"></calc-toolbar-item>
    <calc-toolbar-item name='underline' title="Soulignage (Ctrl+U)"></calc-toolbar-item>
    <span class='vbar'></span>
    <calc-toolbar-item value='black' name='foreground_color' title="Couleur de police"></calc-toolbar-item>
    <calc-toolbar-item value='yellow' name='background_color' title="Couleur d'arrière-plan"></calc-toolbar-item>
    <span class='vbar'></span>
    <calc-toolbar-item name='align_left' title="Aligner à gauche (Ctrl+L)"></calc-toolbar-item>
    <calc-toolbar-item name='align_center' title="Center (Ctrl+E)"></calc-toolbar-item>
    <calc-toolbar-item name='align_right' title="Aligner à droite (Ctrl+R)"></calc-toolbar-item>
    <span class='vbar'></span>
    <calc-toolbar-item name='valign_top' title="Aligner en haut"></calc-toolbar-item>
    <calc-toolbar-item name='valign_middle' title="Centrer verticalement"></calc-toolbar-item>
    <calc-toolbar-item name='valign_bottom' title="Aligner en bas"></calc-toolbar-item>
    <span class='vbar'></span>
    <calc-toolbar-item name='ajuster' title="Ajuster le texte"></calc-toolbar-item>
    <span class='vbar'></span>
    <calc-toolbar-item name='merge_center' type='fct' title="Fusionner et centrer ou défusionner les cellules en inversant leur état actuel"></calc-toolbar-item>
    <calc-toolbar-item name='merge' type='fct' title="Fusionner les cellules"></calc-toolbar-item>
    <calc-toolbar-item name='unmerge' type='fct' title="Défusionner les cellules"></calc-toolbar-item>
    <span class='vbar'></span>
    <calc-toolbar-item name='format_monnaie' type='fct' title="Appliquer le format Monnaie (Maj+Ctrl+4)"></calc-toolbar-item>
    <calc-toolbar-item name='format_pourcent' type='fct' title="Appliquer le format Pourcentage (Maj+Ctrl+5)"></calc-toolbar-item>
    <calc-toolbar-item name='format_nb' type='fct'  title="Appliquer le format Nombre (Maj+Ctrl+1)"></calc-toolbar-item>
    <calc-toolbar-item name='format_date' type='fct'  title="Appliquer le format Date (Maj+Ctrl+3)"></calc-toolbar-item>
    <span class='vbar'></span>
    <calc-toolbar-item name='format_zero_p1' type='fct' title="Ajouter une décimale"></calc-toolbar-item>
    <calc-toolbar-item name='format_zero_m1' type='fct' title="Supprimer une décimale"></calc-toolbar-item>
    <span class='vbar'></span>
    <calc-toolbar-item name='retrait_p1' type='fct' title="Augmenter le retrait"></calc-toolbar-item>
    <calc-toolbar-item name='retrait_m1' type='fct' title="Diminuer le retrait"></calc-toolbar-item>
    <span class='vbar'></span>
    <calc-toolbar-item name='border' type='fct' title="Bordures (Maj pour écraser)"></calc-toolbar-item>
    <calc-toolbar-item name='border_style' type='fct' disabled title="Style de bordure"></calc-toolbar-item>
    <calc-toolbar-item value='black' name='border_color' title="Couleur de bordure"></calc-toolbar-item>
    <span class='vbar'></span>
    <calc-toolbar-item name='format_cond' type='fct' disabled title="Conditionnel"></calc-toolbar-item>
`;
function merge(celllist, is_align = false) {
    const sheet = celllist.sheet;
    const [beg, end] = celllist.plage_name.split(':').map((e)=>sheet.ref2pos(e)); // plage can't be undefined
    let rows = end[0] - beg[0] + 1;
    let cols = end[1] - beg[1] + 1;
    let format = {
        span: [
            rows,
            cols
        ]
    };
    if (is_align) {
        format.valign_middle = true;
        format.align_center = true;
    }
    sheet.getRange(beg).format(format);
}
function unmerge(celllist) {
    celllist.format({
        span: [
            1,
            1
        ]
    }); // unmerge...
}
function retrait(cells, delta_indent) {
    for (let cell of cells.cells){
        const format = _format__WEBPACK_IMPORTED_MODULE_1__.Format.extractFormat(cell);
        let new_format = {};
        if (!format.hasProperty("align_right") && !format.hasProperty("align_left")) new_format.align_left = true;
        new_format.indent = +(format.getProperty("indent") ?? 0) + delta_indent;
        if (new_format.indent < 0) new_format.indent = 0;
        cells.format(new_format);
    }
}
function precision(cells, delta_prec) {
    let precision = undefined;
    for (let cell of cells.cells){
        const prec = +(_format__WEBPACK_IMPORTED_MODULE_1__.Format.extractFormat(cell).getProperty("precision") ?? 2);
        if (precision === undefined || prec < precision) precision = prec;
    }
    precision ??= 2;
    precision += delta_prec;
    if (precision < 0) precision = 0;
    cells.format({
        precision
    });
}
const fcts = {
    "format_zero_p1": {
        action: function(cells) {
            precision(cells, +1);
        }
    },
    "format_zero_m1": {
        action: function(cells) {
            precision(cells, -1);
        }
    },
    "format_pourcent": {
        action: function(cells) {
            if (_format__WEBPACK_IMPORTED_MODULE_1__.Format.extractFormat(cells).getProperty('format') === _format__WEBPACK_IMPORTED_MODULE_1__.Formats.pourcent) {
                cells.format(_format__WEBPACK_IMPORTED_MODULE_1__.Formats.number); // h4ck
                cells.format({
                    format: null
                });
                return;
            }
            cells.format(_format__WEBPACK_IMPORTED_MODULE_1__.Formats.pourcent);
        },
        enabled: function(cells) {
            return _format__WEBPACK_IMPORTED_MODULE_1__.Format.extractFormat(cells).getProperty('format') === _format__WEBPACK_IMPORTED_MODULE_1__.Formats.pourcent;
        }
    },
    "format_nb": {
        action: function(cells) {
            if (_format__WEBPACK_IMPORTED_MODULE_1__.Format.extractFormat(cells).getProperty('format') === _format__WEBPACK_IMPORTED_MODULE_1__.Formats.number) {
                cells.format({
                    format: null
                });
                return;
            }
            cells.format(_format__WEBPACK_IMPORTED_MODULE_1__.Formats.number);
        },
        enabled: function(cells) {
            return _format__WEBPACK_IMPORTED_MODULE_1__.Format.extractFormat(cells).getProperty('format') === _format__WEBPACK_IMPORTED_MODULE_1__.Formats.number;
        }
    },
    "format_monnaie": {
        action: function(cells) {
            if (_format__WEBPACK_IMPORTED_MODULE_1__.Format.extractFormat(cells).getProperty('format') === _format__WEBPACK_IMPORTED_MODULE_1__.Formats.euros) {
                cells.format({
                    format: null
                });
                return;
            }
            cells.format(_format__WEBPACK_IMPORTED_MODULE_1__.Formats.euros);
        },
        enabled: function(cells) {
            return _format__WEBPACK_IMPORTED_MODULE_1__.Format.extractFormat(cells).getProperty('format') === _format__WEBPACK_IMPORTED_MODULE_1__.Formats.euros;
        }
    },
    "format_date": {
        action: function(cells) {
            if (_format__WEBPACK_IMPORTED_MODULE_1__.Format.extractFormat(cells).getProperty('format') === _format__WEBPACK_IMPORTED_MODULE_1__.Formats.date) {
                cells.format(_format__WEBPACK_IMPORTED_MODULE_1__.Formats.number); // h4ck
                cells.format({
                    format: null
                });
                return;
            }
            cells.format(_format__WEBPACK_IMPORTED_MODULE_1__.Formats.date);
        },
        enabled: function(cells) {
            return _format__WEBPACK_IMPORTED_MODULE_1__.Format.extractFormat(cells).getProperty('format') === _format__WEBPACK_IMPORTED_MODULE_1__.Formats.date;
        }
    },
    "retrait_m1": {
        action: function(cells) {
            retrait(cells, -1);
        }
    },
    "retrait_p1": {
        action: function(cells) {
            retrait(cells, +1);
        }
    },
    "border": {
        action: function(cells) {
            cells.format({
                border_top: true,
                border_bottom: true,
                border_left: true,
                border_right: true
            });
        }
    },
    "unmerge": {
        action: unmerge
    },
    "merge": {
        action: merge
    },
    "merge_center": {
        action: function(celllist) {
            let unmerged = false;
            const sheet = celllist.sheet;
            for (let cell of celllist.cells)if (_format__WEBPACK_IMPORTED_MODULE_1__.Format.extractFormat(cell).hasProperty("span")) {
                unmerge(new _sheet__WEBPACK_IMPORTED_MODULE_2__.CellList(sheet, [
                    cell
                ]));
                unmerged = true;
            }
            if (unmerged) return;
            merge(celllist, true);
        },
        enabled: function(celllist) {
            for (let cell of celllist.cells)if (_format__WEBPACK_IMPORTED_MODULE_1__.Format.extractFormat(cell).hasProperty("span")) return true;
            return false;
        }
    }
};
const css = `
    :host {
        background-color: #cecece;

        display: flex;
        height: 1.5em;
    }

    :host .vbar {
        display: inline-block;
        width: 1px;
        background-color: #ababab;
        height: 1em;
    }

    :host select {
        height: 2rem;
        box-sizing: border-box;
        background-color: white;
    }
`;
const itemcss = `

    :host {
        position: relative;
    }

    :host([disabled]) {
        opacity: 0.5;
        pointer-events: none;
    }

    :host([value]) {
        padding-right: 12px;
    }

    :host, :host > div {
        background-color: #cecece;
        border: 1px solid transparent;
    }

    :host {
        padding: 1px;
    }

    :host > div {
        width: 10px;
        height: calc( 1.2em - 1px );
        position: absolute;
        top: -1px;
        right: -1px;

        &::after {
            position: absolute;
            top: calc( ( 1.2em - 1px - 2px ) / 2 );
            right: 1px;
            content: "";
            width: 0; 
            height: 0;
            --size: 4px;
            border-left: var(--size) solid transparent;
            border-right: var(--size) solid transparent;
            
            border-top: var(--size) solid black;
        }
    }

    :host(:hover:not(.enabled)), :host(:hover:not(.enabled)) > div {
        background-color: #eaeaea;
        border: 1px solid #969696;
        border-radius: 2px;
    }

    :host(.enabled) {
        background-color: #b6b6b6;
        border: 1px solid #9b9b9b;
        border-radius: 2px;
    }
`;
class CalcToolbarItem extends (0,_libs_LISS__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: itemcss
}) {
    constructor(){
        super();
        const content = document.createElement('img');
        content.src = `../../../../assets/tableur/img/toolbar/${this.host.getAttribute('name')}.png`;
        if (!this.host.hasAttribute('value')) {
            this.content.append(content);
            return;
        }
        const span = document.createElement('div');
        span.addEventListener('click', (ev)=>{
            ev.preventDefault();
            let color_picker = document.querySelector('input[type="color"]');
            if (color_picker === null) {
                color_picker = document.createElement('input');
                color_picker.setAttribute("type", "color");
                color_picker.style.setProperty('display', 'none');
            }
            color_picker.dispatchEvent(new CustomEvent('cancel'));
            let cancel = false;
            color_picker.addEventListener('cancel', ()=>{
                cancel = true;
            }, {
                once: true
            });
            color_picker.addEventListener('change', (ev)=>{
                if (cancel) return;
                this.host.setAttribute('value', color_picker.value);
                this.host.dispatchEvent(new CustomEvent("click", {
                    bubbles: true
                }));
            }, {
                once: true
            });
            document.body.append(color_picker);
            color_picker.click();
        });
        this.content.append(content, span);
    }
}
_libs_LISS__WEBPACK_IMPORTED_MODULE_0__["default"].define('calc-toolbar-item', CalcToolbarItem);
class CalcToolbar extends (0,_libs_LISS__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content,
    css
}) {
    #btns = {};
    disableAllExcept(...exception) {
        for(let btn_name in this.#btns)if (!exception.includes(btn_name)) this.#btns[btn_name].toggleAttribute('disabled', true);
        if (!exception.includes("font_size")) this.content.querySelector('.font_size').toggleAttribute('disabled', true);
    }
    constructor(){
        super();
        let font_sizes = [
            6,
            7,
            8,
            9,
            10,
            10.5,
            11,
            12,
            13,
            14,
            15,
            16,
            18,
            20,
            21,
            22,
            24,
            26,
            28,
            32,
            36,
            40,
            42,
            44,
            48,
            54,
            60,
            66,
            72,
            80,
            88,
            96
        ];
        const btns = this.content.querySelectorAll('calc-toolbar-item');
        for (let btn of btns)this.#btns[btn.getAttribute('name')] = btn;
        const font_sizes_select = this.content.querySelector('.font_size');
        for (let font_size of font_sizes){
            const option = new Option(`${font_size.toString().replace('.', ',')} pt`, `${font_size}pt`);
            font_sizes_select.append(option);
        }
        this.content.addEventListener('click', (ev)=>{
            const elem = ev.target;
            if (elem.tagName !== 'CALC-TOOLBAR-ITEM') return;
            const n = elem.getAttribute('name');
            if (elem.getAttribute('type') === 'fct') {
                fcts[n].action(this.#sheet.selection);
                this.#update();
                return;
            }
            const value = elem.hasAttribute('value') ? elem.getAttribute('value') : elem.classList.toggle('enabled');
            let format = new _format__WEBPACK_IMPORTED_MODULE_1__.Format({
                [n]: value
            });
            format.applyTo(this.#sheet.selection);
            this.#update();
        });
        font_sizes_select.addEventListener("change", ()=>{
            //TODO...
            let format = new _format__WEBPACK_IMPORTED_MODULE_1__.Format({
                font_size: font_sizes_select.value
            });
            format.applyTo(this.#sheet.selection);
            this.#update();
        });
    }
    #sheet;
    #update() {
        if (this.#sheet.selection.cells.length === 0) return;
        const format = _format__WEBPACK_IMPORTED_MODULE_1__.Format.extractFormat(this.#sheet.selection);
        for(let name in this.#btns){
            let enabled = format.getProperty(name) === true;
            if (name in fcts) enabled = fcts[name].enabled?.(this.#sheet.selection) ?? false;
            this.#btns[name].classList.toggle('enabled', enabled);
        }
        //TODO...
        const font_sizes_select = this.content.querySelector('.font_size');
        font_sizes_select.value = format.getProperty('font_size');
    //TODO: update...
    }
    syncTo(sheet) {
        this.#sheet = sheet;
        sheet.selection.addEventListener('change', (ev)=>{
            this.#update();
        });
        this.#update();
    }
}
_libs_LISS__WEBPACK_IMPORTED_MODULE_0__["default"].define('calc-toolbar', CalcToolbar);


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
                    "CM3"
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
/******/ __webpack_require__("./src/pages/R1-01/CM/CM2/index.ts");
/******/ __webpack_require__("./src/pages/R1-01/CM/CM2/index.css");
/******/ var __webpack_exports__ = __webpack_require__("./src/pages/R1-01/CM/CM2/index.md");
/******/ var __webpack_exports__default = __webpack_exports__["default"];
/******/ export { __webpack_exports__default as default };
/******/ 

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cnMvLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00yL2luZGV4LmNzcz8yNmRlIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMi9pbmRleC5tZCIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vQ291cnMvLi9saWJzL0xJU1MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00yL2luZGV4LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL1JhbmdlT3ZlcmxheS50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9mb3JtYXQudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvZm9ybXVsYV9lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvZm9ybXVsYV9wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvcGxhZ2VfZWRpdG9yLnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL3BsYWdlX3NlbGVjdG9yLnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL3NoZWV0LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL3Rvb2xiYXIudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L21lbnUudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L3V0aWxzL3N0cjJodG1sLnRzIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9hc3luYyBtb2R1bGUiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInBhZ2VzL1IxLTAxL0NNL0NNMi9pbmRleC5odG1sXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI6aG9zdCB0YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcbiAgICAmID4gdGJvZHkge1xcbiAgICAgICAgb3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICB9XFxuXFxuICAgICYgPiB0Ym9keSA+IHRyOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgXFxuICAgICAgICAmID4gdGgge1xcbiAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbjpob3N0IDppcyh0cix0aCx0ZCkge1xcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjMGMwYzA7XFxufVxcblxcbjpob3N0KFtzaG93Z3JpZD1cXFwiZmFsc2VcXFwiXSkgdGQge1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG46aG9zdCB0ciB7XFxuICAgIGhlaWdodDogMC40NWNtO1xcbiAgICBsaW5lLWhlaWdodDogMC40NWNtO1xcbn1cXG5cXG5cXG46aG9zdCA6aXModGQsIHRoKTpub3QoW2NvbnRlbnRlZGl0YWJsZV0pIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi8qXFxuOmhvc3QgdGRbY29udGVudGVkaXRhYmxlXSB7XFxuICAgIHVzZXItc2VsZWN0OiB0ZXh0O1xcbn0qL1xcblxcbjpob3N0IGNvbGdyb3VwID4gY29sIHtcXG4gICAgd2lkdGg6IDIuMjZjbTtcXG59XFxuOmhvc3QgY29sZ3JvdXAgPiBjb2w6Zmlyc3QtY2hpbGQge1xcbiAgICB3aWR0aDogY2FsYyggMi4yNmNtIC8gMi41KSA7XFxufVxcblxcbjpob3N0IDppcyh0ZCwgdGgpIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDAuNDVjbTtcXG5cXG4gICAgZm9udC1zaXplOiAxMHB0O1xcblxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ0xpYmVyYXRpb24gU2Fucyc7XFxufVxcblxcblxcbjpob3N0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbjpob3N0IGRpdi50b29sYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG5cXG4gICAgJiA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICAgICAgZmxleDogMSAxIDA7XFxuICAgIH1cXG4gICAgJiA+ICo6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgd2lkdGg6IGNhbGMoIDEuNSAqIDIuMjZjbSApO1xcbiAgICB9XFxufVxcblxcbjpob3N0IHRoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOGE4YThhO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcblxcbiAgICAmLmhpZ2hsaWdodCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk4ZWU3O1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxufVxcblxcbjpob3N0KC5jZWxsX2VkaXQpIC5jdXJzb3Ige1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG46aG9zdCgucmVjb3B5KSB7XFxuICAgIGN1cnNvcjogY2VsbDtcXG59XFxuXFxuOmhvc3Qge1xcblxcbiAgICAucmVjb3B5IHtcXG4gICAgICAgIGN1cnNvcjogY2VsbDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzOThlZTc7XFxuICAgIH1cXG5cXG4gICAgLmN1cnNvciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzM5OGVlNztcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB9XFxufVxcblxcbjpob3N0IC5vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46aG9zdCAuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuOmhvc3QgLnNlbGVjdGlvbl9oaWdobGlnaHQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk4ZWU3OyAvKiNjZGUzZjk7Ki9cXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgLyogVE9ETyAqL1xcbn1cXG5cXG5cXG46aG9zdCB0ZCB7XFxuXFxuICAgIC0tZm9udF9zaXplOiAxMHB0O1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRfc2l6ZSk7XFxuICAgIGxpbmUtaGVpZ2h0OiBjYWxjKCB2YXIoLS1mb250X3NpemUpICogMS4yICk7XFxuXFxuICAgIC0taW5kZW50OiAwO1xcblxcbiAgICAtLWJvcmRlcl9jb2xvcjogYmxhY2s7XFxuICAgIC0tYmFja2dyb3VuZF9jb2xvcjogd2hpdGU7XFxuICAgIC0tZm9yZWdyb3VuZF9jb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmRfY29sb3IpO1xcbiAgICBjb2xvciAgICAgICAgICAgOiB2YXIoLS1mb3JlZ3JvdW5kX2NvbG9yKTtcXG5cXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcXG5cXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG5cXG4gICAgJjppcyhbZGF0YS10eXBlPVxcXCJudW1iZXJcXFwiXSxbZGF0YS10eXBlPVxcXCJwb3VyY2VudFxcXCJdLFtkYXRhLXR5cGU9XFxcImRhdGVcXFwiXSwgW2RhdGEtdHlwZT1cXFwiYm9vbGVhblxcXCJdKSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgfVxcblxcbiAgICAmW2NvbnRlbnRlZGl0YWJsZV0ge1xcbiAgICAgICAgb3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICB9XFxuXFxuICAgICYuYWp1c3RlciB7XFxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgICB9XFxuXFxuICAgIC8qKiBzdHlsZSAqKi9cXG4gICAgJi5pdGFsaWMge1xcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICB9XFxuICAgICYuYm9sZCB7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcbiAgICAmLnVuZGVybGluZSB7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgfVxcbiAgICAmLmFsaWduX2xlZnQge1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKCB2YXIoLS1pbmRlbnQpICogMTBweCk7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB9XFxuICAgICYuYWxpZ25fY2VudGVyIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAmLmFsaWduX3JpZ2h0IHtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGMoIHZhcigtLWluZGVudCkgKiAxMHB4KTtcXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICB9XFxuICAgICYudmFsaWduX3RvcCB7XFxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICB9XFxuICAgICYudmFsaWduX21pZGRsZSB7XFxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB9XFxuICAgICYudmFsaWduX2JvdHRvbSB7XFxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgICB9XFxuICAgIC8qIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEyNDE3NTcvYXBwbHlpbmctYm9yZGVycy10by1hLXNpbmdsZS10YWJsZS1jZWxsLXdoZW4tdXNpbmctYm9yZGVyLWNvbGxhcHNlICovXFxuICAgICYuYm9yZGVyX3RvcCB7XFxuICAgICAgICBib3JkZXItdG9wOiAxcHggZG91YmxlIHZhcigtLWJvcmRlcl9jb2xvcik7XFxuICAgIH1cXG4gICAgJi5ib3JkZXJfYm90dG9tIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3VibGUgdmFyKC0tYm9yZGVyX2NvbG9yKTtcXG4gICAgfVxcbiAgICAmLmJvcmRlcl9sZWZ0IHtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggZG91YmxlIHZhcigtLWJvcmRlcl9jb2xvcik7XFxuICAgIH1cXG4gICAgJi5ib3JkZXJfcmlnaHQge1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggZG91YmxlIHZhcigtLWJvcmRlcl9jb2xvcik7XFxuICAgIH1cXG59XFxuXFxuOmhvc3Qge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbjpob3N0IC5yYW5nZV9oaWdobGlnaHQge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taGlnaGxpZ2h0X2NvbG9yKTtcXG59XFxuXFxuOmhvc3QgLmZvcm11bGFfaGlnaGxpZ2h0IHtcXG4gICAgY29sb3I6IHZhcigtLWhpZ2hsaWdodF9jb2xvcik7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfMCB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjZmEwYzBjO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzEge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogI2ZhMGNmYTtcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF8yIHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICMwYzg0MGM7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfMyB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjMDEwMTgwO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzQge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzg3MTcxNztcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF81IHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICM4NzE3ODc7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfNiB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjODQ4NDBjO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0Xzcge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzBjMGNmYTtcXG59XFxuXFxuXFxuLmNvcHlfaGlnaGxpZ2h0IHtcXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLyogVG9tb3Jyb3cgVGhlbWUgKi9cXG4vKiBodHRwOi8vam1ibG9nLmdpdGh1Yi5jb20vY29sb3ItdGhlbWVzLWZvci1nb29nbGUtY29kZS1oaWdobGlnaHRqcyAqL1xcbi8qIE9yaWdpbmFsIHRoZW1lIC0gaHR0cHM6Ly9naXRodWIuY29tL2Nocmlza2VtcHNvbi90b21vcnJvdy10aGVtZSAqL1xcblxcbi8qIFRvbW9ycm93IENvbW1lbnQgKi9cXG4uaGxqcy1jb21tZW50LFxcbi5obGpzLXF1b3RlIHtcXG5cXHRjb2xvcjogIzhlOTA4YztcXG59XFxuXFxuLyogVG9tb3Jyb3cgUmVkICovXFxuLmhsanMtdmFyaWFibGUsXFxuLmhsanMtdGVtcGxhdGUtdmFyaWFibGUsXFxuLmhsanMtdGFnLFxcbi5obGpzLW5hbWUsXFxuLmhsanMtc2VsZWN0b3ItaWQsXFxuLmhsanMtc2VsZWN0b3ItY2xhc3MsXFxuLmhsanMtcmVnZXhwLFxcbi5obGpzLWRlbGV0aW9uIHtcXG5cXHRjb2xvcjogI2M4MjgyOTtcXG59XFxuXFxuLyogVG9tb3Jyb3cgT3JhbmdlICovXFxuLmhsanMtbnVtYmVyLFxcbi5obGpzLWJ1aWx0X2luLFxcbi5obGpzLWJ1aWx0aW4tbmFtZSxcXG4uaGxqcy1saXRlcmFsLFxcbi5obGpzLXR5cGUsXFxuLmhsanMtcGFyYW1zLFxcbi5obGpzLW1ldGEsXFxuLmhsanMtbGluayB7XFxuXFx0Y29sb3I6ICNmNTg3MWY7XFxufVxcblxcbi8qIFRvbW9ycm93IFllbGxvdyAqL1xcbi5obGpzLWF0dHJpYnV0ZSB7XFxuXFx0Y29sb3I6ICNlYWI3MDA7XFxufVxcblxcbi8qIFRvbW9ycm93IEdyZWVuICovXFxuLmhsanMtc3RyaW5nLFxcbi5obGpzLXN5bWJvbCxcXG4uaGxqcy1idWxsZXQsXFxuLmhsanMtYWRkaXRpb24ge1xcblxcdGNvbG9yOiAjNzE4YzAwO1xcbn1cXG5cXG4vKiBUb21vcnJvdyBCbHVlICovXFxuLmhsanMtdGl0bGUsXFxuLmhsanMtc2VjdGlvbiB7XFxuXFx0Y29sb3I6ICM0MjcxYWU7XFxufVxcblxcbi8qIFRvbW9ycm93IFB1cnBsZSAqL1xcbi5obGpzLWtleXdvcmQsXFxuLmhsanMtc2VsZWN0b3ItdGFnIHtcXG5cXHRjb2xvcjogIzg5NTlhODtcXG59XFxuXFxuLmhsanMge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdG92ZXJmbG93LXg6IGF1dG87XFxuXFx0Y29sb3I6ICM0ZDRkNGM7XFxuXFx0cGFkZGluZzogMC41ZW07XFxufVxcblxcbi5obGpzLWVtcGhhc2lzIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5obGpzLXN0cm9uZyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiOyIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgZXhwb3J0ZWQgdHlwZXMgPT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLypcbnR5cGUgUzxBLEI+ID0ge1xuXHRBOiBBLFxuXHRCOiBCXG59O1xudHlwZSBMSCA9IFM8dW5rbm93bix1bmtub3duPjtcblxudHlwZSBpbmZlckE8VD4gPSBUIGV4dGVuZHMgUzxpbmZlciBBLCBhbnk+ID8gQSA6IG5ldmVyO1xuXG5mdW5jdGlvbiBmb288VCBleHRlbmRzIExIPih0OiBUKTogaW5mZXJBPFQ+IHtcblx0cmV0dXJuIHQuQSBhcyBpbmZlckE8VD47XG59XG5cbmxldCBYID0ge1xuXHRBOiAzMixcblx0QjogXCJzdHJcIlxufTtcblxubGV0IGMgPSBmb28oWCk7XG4qL1xuXG5leHBvcnQgdHlwZSBDU1NfUmVzb3VyY2UgPSBzdHJpbmd8UmVzcG9uc2V8SFRNTFN0eWxlRWxlbWVudHxDU1NTdHlsZVNoZWV0O1xuZXhwb3J0IHR5cGUgQ1NTX1NvdXJjZSAgID0gQ1NTX1Jlc291cmNlIHwgUHJvbWlzZTxDU1NfUmVzb3VyY2U+O1xuXG5leHBvcnQgdHlwZSBIVE1MX1Jlc291cmNlID0gc3RyaW5nfFJlc3BvbnNlfEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XG5leHBvcnQgdHlwZSBIVE1MX1NvdXJjZSAgID0gSFRNTF9SZXNvdXJjZSB8IFByb21pc2U8SFRNTF9SZXNvdXJjZT47XG5cbmV4cG9ydCB0eXBlIExJU1NPcHRpb25zPEV4dGVuZHMgICAgZXh0ZW5kcyBDbGFzcyxcblx0XHRcdFx0XHRcdEhvc3QgICAgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHRcdEF0dHJzICAgICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0XHRQYXJhbWV0ZXJzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4gPSB7XG5cblx0ZXh0ZW5kcz86IENvbnN0cnVjdG9yPEV4dGVuZHM+LFxuXHRob3N0ICAgPzogQ29uc3RydWN0b3I8SG9zdD4sXG5cblx0ZGVwZW5kZW5jaWVzPzogcmVhZG9ubHkgUHJvbWlzZTxhbnk+W10sXG5cdGF0dHJpYnV0ZXMgID86IHJlYWRvbmx5IEF0dHJzW10sXG5cdHBhcmFtcyAgICAgID86IFJlYWRvbmx5PFBhcmFtZXRlcnM+LFxuXG5cdGNvbnRlbnQ/OiBIVE1MX1NvdXJjZSxcblx0Y3NzICAgID86ICBDU1NfU291cmNlIHwgcmVhZG9ubHkgQ1NTX1NvdXJjZVtdLFxuXHRzaGFkb3cgPzogIFNoYWRvd0NmZyxcbn07XG5cbmV4cG9ydCBlbnVtIFNoYWRvd0NmZyB7XG5cdE5PTkUgPSAnbm9uZScsXG5cdE9QRU4gPSAnb3BlbicsIFxuXHRDTE9TRT0gJ2Nsb3NlZCdcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgQ2xhc3MgPT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxubGV0IF9fY3N0cl9ob3N0ICA6IGFueSA9IG51bGw7XG5cbnR5cGUgQ29uc3RydWN0b3I8VD4gPSBuZXcgKCkgPT4gVDtcbmludGVyZmFjZSBDbGFzcyB7fVxuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9hdHRhY2hTaGFkb3dcbmNvbnN0IENBTl9IQVZFX1NIQURPVyA9IFtcblx0bnVsbCwgJ2FydGljbGUnLCAnYXNpZGUnLCAnYmxvY2txdW90ZScsICdib2R5JywgJ2RpdicsXG5cdCdmb290ZXInLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnaGVhZGVyJywgJ21haW4nLFxuXHQnbmF2JywgJ3AnLCAnc2VjdGlvbicsICdzcGFuJ1xuXHRcbl07XG5mdW5jdGlvbiBfY2FuSGFzU2hhZG93KHRhZzogdHlwZW9mIEhUTUxFbGVtZW50KSB7XG5cdHJldHVybiBDQU5fSEFWRV9TSEFET1cuaW5jbHVkZXMoIF9lbGVtZW50MnRhZ25hbWUodGFnKSApO1xufVxuXG50eXBlIFJlc291cmNlID0gVVJMfFJlc3BvbnNlO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExJU1M8RXh0ZW5kcyAgICBleHRlbmRzIENsYXNzICAgICAgICAgICAgICA9IENsYXNzLFxuXHRcdFx0XHRcdFx0XHQgSG9zdCAgICAgICBleHRlbmRzIEhUTUxFbGVtZW50ICAgICAgICA9IEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdFx0XHQgQXR0cnMgICAgICBleHRlbmRzIHN0cmluZyAgICAgICAgICAgICA9IG5ldmVyLFxuXHRcdFx0XHRcdFx0XHQgUGFyYW1ldGVycyBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55PiA9IHt9Pih7XG5cdFx0XHRcdFx0XHRcdFx0ZXh0ZW5kcyAgICAgOiBwX2V4dGVuZHMsXG5cdFx0XHRcdFx0XHRcdFx0aG9zdCAgICAgICAgOiBwX2hvc3QsXG5cdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jaWVzOiBwX2RlcHMsXG5cdFx0XHRcdFx0XHRcdCAgICBhdHRyaWJ1dGVzICA6IHBfYXR0cnMsXG5cdFx0XHRcdFx0XHRcdCAgICBwYXJhbXMsXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudCxcblx0XHRcdFx0XHRcdFx0XHRjc3MsXG5cdFx0XHRcdFx0XHRcdFx0c2hhZG93ICAgICAgOiBwX3NoYWRvdyxcblx0XHRcdFx0XHRcdFx0fTogTElTU09wdGlvbnM8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtZXRlcnM+ID0ge30pIHtcblxuXHQvL1RPRE8gbWVyZ2UgcHJvcCBpZiBleHRlbmRzIExJU1MuLi5cblxuXHRjb25zdCBob3N0ICAgICAgICA9IHBfaG9zdCAgICA/PyBIVE1MRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxIb3N0Pjtcblx0Y29uc3QgX2V4dGVuZHMgICAgPSBwX2V4dGVuZHMgPz8gT2JqZWN0ICAgICAgYXMgdW5rbm93biBhcyBDb25zdHJ1Y3RvcjxFeHRlbmRzPjtcblx0Y29uc3QgYXR0cmlidXRlcyAgPSBwX2F0dHJzICAgPz8gW107XG5cdGNvbnN0IGRlcGVuZGVuY2llcz0gcF9kZXBzICAgID8gWy4uLnBfZGVwc10gOiBbXTtcblx0Y29uc3QgY2FuSGFzU2hhZG93PSBfY2FuSGFzU2hhZG93KGhvc3QpO1xuXHRjb25zdCBzaGFkb3cgICAgICA9IHBfc2hhZG93ICA/PyAoY2FuSGFzU2hhZG93ID8gU2hhZG93Q2ZnLkNMT1NFIDogU2hhZG93Q2ZnLk5PTkUpO1xuXG5cdGlmKCAhIGNhbkhhc1NoYWRvdyAmJiBzaGFkb3cgIT09IFNoYWRvd0NmZy5OT05FKVxuXHRcdHRocm93IG5ldyBFcnJvcihgSG9zdCBlbGVtZW50ICR7X2VsZW1lbnQydGFnbmFtZShob3N0KX0gZG9lcyBub3Qgc3VwcG9ydCBTaGFkb3dSb290YCk7XG5cblx0Ly8gQ09OVEVOVCBwcm9jZXNzaW5nXG5cdGlmKCBjb250ZW50ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRkZXBlbmRlbmNpZXMucHVzaCggKCBhc3luYyAoKSA9PiB7XG5cblx0XHRcdGNvbnRlbnQgPSBhd2FpdCBjb250ZW50O1xuXG5cdFx0XHRpZihjb250ZW50IGluc3RhbmNlb2YgSFRNTFRlbXBsYXRlRWxlbWVudClcblx0XHRcdGNvbnRlbnQgPSBjb250ZW50LmlubmVySFRNTDtcblxuXHRcdFx0aWYoIHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB7XG5cblx0XHRcdFx0Y29udGVudCA9IGNvbnRlbnQudHJpbSgpOyAvLyBOZXZlciByZXR1cm4gYSB0ZXh0IG5vZGUgb2Ygd2hpdGVzcGFjZSBhcyB0aGUgcmVzdWx0XG5cdFx0XHRcdGlmKGNvbnRlbnQgPT09ICcnKVxuXHRcdFx0XHRcdGNvbnRlbnQgPSB1bmRlZmluZWQ7XG5cblx0XHRcdH1cblx0XHRcdGlmKCBjb250ZW50IGluc3RhbmNlb2YgUmVzcG9uc2UgKVxuXHRcdFx0XHRjb250ZW50ID0gYXdhaXQgY29udGVudC50ZXh0KCk7XG5cblx0XHRcdHJldHVybiBMSVNTQmFzZS5QYXJhbWV0ZXJzLmNvbnRlbnQgPSBjb250ZW50O1xuXHRcdH0pKCkgKTtcblx0fVxuXG5cdC8vIENTUyBwcm9jZXNzaW5nXG5cdGxldCBzdHlsZXNoZWV0czogcmVhZG9ubHkgQ1NTU3R5bGVTaGVldFtdID0gW107XG5cdGlmKCBjc3MgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdGlmKCAhIEFycmF5LmlzQXJyYXkoY3NzKSApXG5cdFx0XHRjc3MgPSBbY3NzIGFzIENTU19Tb3VyY2VdO1xuXG5cdFx0c3R5bGVzaGVldHMgPSBuZXcgQXJyYXk8Q1NTU3R5bGVTaGVldD4oY3NzLmxlbmd0aCk7XG5cblx0XHRjb25zdCBmZXRjaF9jc3MgPSAoYXN5bmMgKGNzczogQ1NTX1NvdXJjZSkgPT4ge1xuXHRcdFx0Y3NzID0gYXdhaXQgY3NzO1xuXHRcdFx0aWYoY3NzIGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldClcblx0XHRcdFx0cmV0dXJuIGNzcztcblx0XHRcdGlmKCBjc3MgaW5zdGFuY2VvZiBIVE1MU3R5bGVFbGVtZW50KVxuXHRcdFx0XHRyZXR1cm4gY3NzLnNoZWV0ITtcblxuXHRcdFx0bGV0IHN0eWxlID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcblx0XHRcdGlmKCB0eXBlb2YgY3NzID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0XHRhd2FpdCBzdHlsZS5yZXBsYWNlKGNzcyk7XG5cdFx0XHRcdHJldHVybiBzdHlsZTtcblx0XHRcdH1cblxuXHRcdFx0Ly9pZiggY3NzIGluc3RhbmNlb2YgUmVzcG9uc2UgKVxuXHRcdFx0YXdhaXQgc3R5bGUucmVwbGFjZShhd2FpdCBjc3MudGV4dCgpKTtcblx0XHRcdHJldHVybiBzdHlsZTtcblx0XHR9KTtcblxuXHRcdGRlcGVuZGVuY2llcy5wdXNoKCAuLi5jc3MubWFwKCBhc3luYyAoY3NzLCBpZHgpID0+ICAoc3R5bGVzaGVldHMgYXMgYW55KVtpZHhdID0gYXdhaXQgZmV0Y2hfY3NzKGNzcykgKSApO1xuXHR9XG5cblx0dHlwZSBMSG9zdCA9IExJU1NIb3N0PExJU1NCYXNlPjtcblxuXHQvLyBAdHMtaWdub3JlXG5cdGNsYXNzIExJU1NCYXNlIGV4dGVuZHMgX2V4dGVuZHMge1xuXG5cdFx0cmVhZG9ubHkgI2hvc3Q6IGFueTsgLy8gcHJldmVudHMgaXNzdWUgIzEuLi5cblxuXHRcdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0XHRzdXBlcigpO1xuXG5cdFx0XHQvLyBoNGNrLCBva2F5IGJlY2F1c2UgSlMgaXMgbW9ub3RocmVhZGVkLlxuXHRcdFx0aWYoIF9fY3N0cl9ob3N0ID09PSBudWxsIClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGRvIG5vdCBkaXJlY3RseSBjYWxsIHRoaXMgY29uc3RydWN0b3JcIik7XG5cdFx0XHR0aGlzLiNob3N0ID0gX19jc3RyX2hvc3Q7XG5cdFx0XHRfX2NzdHJfaG9zdCA9IG51bGw7XG5cdFx0fVxuXG5cdFx0cHVibGljIGdldCBob3N0KCk6IEhvc3Qge1xuXHRcdFx0cmV0dXJuIHRoaXMuI2hvc3Q7XG5cdFx0fVxuXHRcdHByb3RlY3RlZCBnZXQgYXR0cnMoKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuI2hvc3QgYXMgTEhvc3QpLmF0dHJzO1xuXHRcdH1cblx0XHRwcm90ZWN0ZWQgc2V0QXR0ckRlZmF1bHQoIGF0dHI6IEF0dHJzLCB2YWx1ZTogc3RyaW5nfG51bGwpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkuc2V0QXR0ckRlZmF1bHQoYXR0ciwgdmFsdWUpO1xuXG5cdFx0fVxuXHRcdHB1YmxpYyBnZXQgcGFyYW1zKCk6IFJlYWRvbmx5PFBhcmFtZXRlcnM+IHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkucGFyYW1zO1xuXHRcdH1cblx0XHRwdWJsaWMgc2V0UGFyYW08VCBleHRlbmRzIGtleW9mIFBhcmFtZXRlcnM+KG5hbWU6IFQsIHZhbHVlOiBQYXJhbWV0ZXJzW1RdKSB7XG5cdFx0XHQodGhpcy4jaG9zdCBhcyBMSG9zdCkucGFyYW1zW25hbWVdID0gdmFsdWU7XG5cdFx0fVxuXHRcdHByb3RlY3RlZCBnZXQgY29udGVudCgpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkuY29udGVudCE7XG5cdFx0fVxuXG5cdFx0c3RhdGljIHJlYWRvbmx5IFBhcmFtZXRlcnMgPSB7XG5cdFx0XHRob3N0LFxuXHRcdFx0ZGVwZW5kZW5jaWVzLFxuXHRcdFx0YXR0cmlidXRlcyxcblx0XHRcdHBhcmFtcyxcblx0XHRcdGNvbnRlbnQsXG5cdFx0XHRzdHlsZXNoZWV0cyxcblx0XHRcdHNoYWRvdyxcblx0XHR9O1xuXG5cdFx0cHJvdGVjdGVkIG9uQXR0ckNoYW5nZWQoX25hbWU6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0XHRfb2xkVmFsdWU6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0XHRfbmV3VmFsdWU6IHN0cmluZyk6IHZvaWR8ZmFsc2Uge31cblxuXHRcdHB1YmxpYyBnZXQgaXNJbkRPTSgpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkuaXNJbkRPTTtcblx0XHR9XG5cdFx0cHJvdGVjdGVkIG9uRE9NQ29ubmVjdGVkKCkge31cblx0XHRwcm90ZWN0ZWQgb25ET01EaXNjb25uZWN0ZWQoKSB7fVxuXHR9XG5cblx0cmV0dXJuIExJU1NCYXNlO1xufVxuXG4vL1RPRE86IG90aGVyIG9wdGlvbnMuLi5cbmZ1bmN0aW9uIGV4dGVuZHNMSVNTPEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0SG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRBdHRyczEgICBleHRlbmRzIHN0cmluZyxcblx0QXR0cnMyICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4sXG5cdFQgZXh0ZW5kcyBMSVNTUmV0dXJuVHlwZTxFeHRlbmRzLCBIb3N0LCBBdHRyczEsIFBhcmFtcz4+KExpc3M6IFQsXG5cdFx0cGFyYW1ldGVyczoge1xuXHRcdFx0c2hhZG93ICAgICAgPzogU2hhZG93Q2ZnLFxuXHRcdFx0YXR0cmlidXRlcyAgPzogcmVhZG9ubHkgQXR0cnMyW10sXG5cdFx0XHRkZXBlbmRlbmNpZXM/OiByZWFkb25seSBQcm9taXNlPGFueT5bXVxuXHRcdH0pIHtcblxuXHRjb25zdCBhdHRyaWJ1dGVzICAgPSBbLi4uTGlzcy5QYXJhbWV0ZXJzLmF0dHJpYnV0ZXMgICwgLi4ucGFyYW1ldGVycy5hdHRyaWJ1dGVzICA/P1tdXTtcblx0Y29uc3QgZGVwZW5kZW5jaWVzID0gWy4uLkxpc3MuUGFyYW1ldGVycy5kZXBlbmRlbmNpZXMsIC4uLnBhcmFtZXRlcnMuZGVwZW5kZW5jaWVzPz9bXV07XG5cblx0Y29uc3QgcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgTGlzcy5QYXJhbWV0ZXJzLCB7XG5cdFx0YXR0cmlidXRlcyxcblx0XHRkZXBlbmRlbmNpZXNcblx0fSk7XG5cdGlmKCBwYXJhbWV0ZXJzLnNoYWRvdyAhPT0gdW5kZWZpbmVkKVxuXHRcdHBhcmFtcy5zaGFkb3cgPSBwYXJhbWV0ZXJzLnNoYWRvdztcblxuXHQvLyBAdHMtaWdub3JlIDogYmVjYXVzZSBUUyBzdHVwaWRcblx0Y2xhc3MgRXh0ZW5kZWRMSVNTIGV4dGVuZHMgTGlzcyB7XG5cdFx0Y29uc3RydWN0b3IoLi4udDogYW55W10pIHtcblx0XHRcdC8vIEB0cy1pZ25vcmUgOiBiZWNhdXNlIFRTIHN0dXBpZFxuXHRcdFx0c3VwZXIoLi4udCk7XG5cdFx0fVxuXG5cdFx0cHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhdHRycygpIHtcblx0XHRcdHJldHVybiBzdXBlci5hdHRycyBhcyBSZWNvcmQ8QXR0cnMyfEF0dHJzMSwgc3RyaW5nfG51bGw+O1xuXHRcdH1cblxuXHRcdHN0YXRpYyBvdmVycmlkZSBQYXJhbWV0ZXJzID0gcGFyYW1zO1xuXHR9XG5cblx0cmV0dXJuIEV4dGVuZGVkTElTUztcbn1cbkxJU1MuZXh0ZW5kc0xJU1MgPSBleHRlbmRzTElTUztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyB0eXBlIGhlbHBlcnMgPT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIGJ1aWxkTElTU0hvc3RSZXR1cm5UeXBlPFQ+ICA9IFQgZXh0ZW5kcyBMSVNTUmV0dXJuVHlwZTxpbmZlciBFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbmZlciBIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbmZlciBBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5mZXIgUGFyYW1zICBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gUmV0dXJuVHlwZTx0eXBlb2YgYnVpbGRMSVNTSG9zdDxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zLCBUPj4gOiBuZXZlcjtcblxuZXhwb3J0IHR5cGUgTElTU1JldHVyblR5cGU8XG5cdEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0SG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+PiA9IFJldHVyblR5cGU8dHlwZW9mIExJU1M8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcz4+O1xuZXhwb3J0IHR5cGUgTElTU0Jhc2U8RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdCBIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0IEF0dHJzICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0IFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4+ID0gSW5zdGFuY2VUeXBlPExJU1NSZXR1cm5UeXBlPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXM+PjtcbmV4cG9ydCB0eXBlIExJU1NIb3N0PExJU1MgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+ID4gPSBJbnN0YW5jZVR5cGU8YnVpbGRMSVNTSG9zdFJldHVyblR5cGU8Q29uc3RydWN0b3I8TElTUz4gJiB7UGFyYW1ldGVyczogYW55fT4+O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTSG9zdCBjbGFzcyA9PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmxldCBpZCA9IDA7XG5cbmZ1bmN0aW9uIGJ1aWxkTElTU0hvc3Q8RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdCAgIEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHQgICBBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdCAgIFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4sXG5cdFx0XHRcdFx0ICAgVCBleHRlbmRzIExJU1NSZXR1cm5UeXBlPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXM+PihMaXNzOiBULCBfcGFyYW1zOiBQYXJ0aWFsPFBhcmFtcz4gPSB7fSkge1xuXHRjb25zdCB7XG5cdFx0aG9zdCxcblx0XHRhdHRyaWJ1dGVzLFxuXHRcdGNvbnRlbnQsXG5cdFx0c3R5bGVzaGVldHMsXG5cdFx0c2hhZG93LFxuXHR9ID0gTGlzcy5QYXJhbWV0ZXJzO1xuXG5cdGNvbnN0IGFscmVhZHlEZWNsYXJlZENTUyA9IG5ldyBTZXQoKTtcblxuXHRjb25zdCBHRVQgPSBTeW1ib2woJ2dldCcpO1xuXHRjb25zdCBTRVQgPSBTeW1ib2woJ3NldCcpO1xuXG5cdGNvbnN0IHByb3BlcnRpZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoIGF0dHJpYnV0ZXMubWFwKG4gPT4gW24sIHtcblxuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbigpOiBzdHJpbmd8bnVsbCAgICAgIHsgcmV0dXJuICh0aGlzIGFzIHVua25vd24gYXMgQXR0cmlidXRlcylbR0VUXShuKTsgfSxcblx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlOiBzdHJpbmd8bnVsbCkgeyByZXR1cm4gKHRoaXMgYXMgdW5rbm93biBhcyBBdHRyaWJ1dGVzKVtTRVRdKG4sIHZhbHVlKTsgfVxuXHR9XSkgKTtcblxuXHRjbGFzcyBBdHRyaWJ1dGVzIHtcbiAgICAgICAgW3g6IHN0cmluZ106IHN0cmluZ3xudWxsO1xuXG4gICAgICAgICNkYXRhICAgICA6IFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuICAgICAgICAjZGVmYXVsdHMgOiBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPjtcbiAgICAgICAgI3NldHRlciAgIDogKG5hbWU6IEF0dHJzLCB2YWx1ZTogc3RyaW5nfG51bGwpID0+IHZvaWQ7XG5cbiAgICAgICAgW0dFVF0obmFtZTogQXR0cnMpIHtcbiAgICAgICAgXHRyZXR1cm4gdGhpcy4jZGF0YVtuYW1lXSA/PyB0aGlzLiNkZWZhdWx0c1tuYW1lXSA/PyBudWxsO1xuICAgICAgICB9O1xuICAgICAgICBbU0VUXShuYW1lOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKXtcbiAgICAgICAgXHRyZXR1cm4gdGhpcy4jc2V0dGVyKG5hbWUsIHZhbHVlKTsgLy8gcmVxdWlyZWQgdG8gZ2V0IGEgY2xlYW4gb2JqZWN0IHdoZW4gZG9pbmcgey4uLmF0dHJzfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YSAgICA6IFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+LFxuXHRcdFx0XHRcdGRlZmF1bHRzOiBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPixcbiAgICAgICAgXHRcdFx0c2V0dGVyICA6IChuYW1lOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKSA9PiB2b2lkKSB7XG5cbiAgICAgICAgXHR0aGlzLiNkYXRhICAgICA9IGRhdGE7XG5cdFx0XHR0aGlzLiNkZWZhdWx0cyA9IGRlZmF1bHRzO1xuICAgICAgICBcdHRoaXMuI3NldHRlciA9IHNldHRlcjtcblxuICAgICAgICBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHByb3BlcnRpZXMpO1xuICAgICAgICB9XG5cdH1cblxuXHQvLyBAdHMtaWdub3JlIDogYmVjYXVzZSBUUyBpcyBzdHVwaWQuXG5cdGNsYXNzIExJU1NIb3N0QmFzZSBleHRlbmRzIGhvc3Qge1xuXG5cdFx0cmVhZG9ubHkgI3BhcmFtczogUGFyYW1zO1xuXG5cdFx0cmVhZG9ubHkgI2lkID0gKytpZDsgLy8gZm9yIGRlYnVnXG5cblx0XHRjb25zdHJ1Y3RvcihwYXJhbXM6IFBhcnRpYWw8UGFyYW1zPiA9IHt9KSB7XG5cdFx0XHRzdXBlcigpO1xuXHRcdFx0dGhpcy4jcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgTGlzcy5QYXJhbWV0ZXJzLnBhcmFtcywgX3BhcmFtcywgcGFyYW1zKTtcblxuXHRcdFx0dGhpcy4jd2FpdEluaXQgPSBuZXcgUHJvbWlzZSggKHJlc29sdmUpID0+IHtcblx0XHRcdFx0aWYodGhpcy5pc0luaXQpXG5cdFx0XHRcdFx0cmV0dXJuIHJlc29sdmUodGhpcy4jQVBJISk7XG5cdFx0XHRcdHRoaXMuI3Jlc29sdmUgPSByZXNvbHZlO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqKiogcHVibGljIEFQSSAqKioqKioqKioqKioqL1xuXG5cdFx0Z2V0IGlzSW5pdCgpIHtcblx0XHRcdHJldHVybiB0aGlzLiNBUEkgIT09IG51bGw7XG5cdFx0fVxuXHRcdGluaXRpYWxpemUocGFyYW1zOiBQYXJ0aWFsPFBhcmFtcz4gPSB7fSkge1xuXG5cdFx0XHRpZiggdGhpcy5pc0luaXQgKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0VsZW1lbnQgYWxyZWFkeSBpbml0aWFsaXplZCEnKTtcblxuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLiNwYXJhbXMsIHBhcmFtcyk7XG5cblx0XHRcdGNvbnN0IGFwaSA9IHRoaXMuaW5pdCgpO1xuXG5cdFx0XHRpZiggdGhpcy4jaXNJbkRPTSApXG5cdFx0XHRcdChhcGkgYXMgYW55KS5vbkRPTUNvbm5lY3RlZCgpO1xuXG5cdFx0XHRyZXR1cm4gYXBpO1xuXHRcdH1cblxuXHRcdGdldCBMSVNTU3luYygpIHtcblx0XHRcdGlmKCAhIHRoaXMuaXNJbml0IClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdBY2Nlc3NpbmcgQVBJIGJlZm9yZSBXZWJDb21wb25lbnQgaW5pdGlhbGl6YXRpb24hJyk7XG5cdFx0XHRyZXR1cm4gdGhpcy4jQVBJITtcblx0XHR9XG5cdFx0Z2V0IExJU1MoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4jd2FpdEluaXQ7XG5cdFx0fVxuXG5cdFx0LyoqKiBpbml0ICoqKi9cblx0XHQjd2FpdEluaXQ6IFByb21pc2U8SW5zdGFuY2VUeXBlPFQ+Pjtcblx0XHQjcmVzb2x2ZTogKCh1OiBJbnN0YW5jZVR5cGU8VD4pID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG5cdFx0I0FQSTogSW5zdGFuY2VUeXBlPFQ+IHwgbnVsbCA9IG51bGw7XG5cblx0XHQjaXNJbkRPTSA9IGZhbHNlO1xuXHRcdGdldCBpc0luRE9NKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuI2lzSW5ET007XG5cdFx0fVxuXG5cdFx0ZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0XHR0aGlzLiNpc0luRE9NID0gZmFsc2U7XG5cdFx0XHQodGhpcy4jQVBJISBhcyBhbnkpLm9uRE9NRGlzY29ubmVjdGVkKCk7XG5cdFx0fVxuXG5cdFx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cblx0XHRcdHRoaXMuI2lzSW5ET00gPSB0cnVlO1xuXHRcblx0XHRcdGlmKCAhIHRoaXMuaXNJbml0IClcblx0XHRcdFx0dGhpcy5pbml0KCk7XG5cblx0XHRcdCh0aGlzLiNBUEkhIGFzIGFueSkub25ET01Db25uZWN0ZWQoKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIGluaXQoKSB7XG5cdFx0XHRcblx0XHRcdGN1c3RvbUVsZW1lbnRzLnVwZ3JhZGUodGhpcyk7XG5cdFx0XHRcblx0XHRcdC8vIHNoYWRvd1xuXHRcdFx0dGhpcy4jY29udGVudCA9IHRoaXMgYXMgdW5rbm93biBhcyBIb3N0O1xuXHRcdFx0aWYoIHNoYWRvdyAhPT0gJ25vbmUnKSB7XG5cdFx0XHRcdHRoaXMuI2NvbnRlbnQgPSB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogc2hhZG93fSk7XG5cblx0XHRcdFx0Ly9AdHMtaWdub3JlXG5cdFx0XHRcdHRoaXMuI2NvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrRXZlbnQpO1xuXHRcdFx0XHQvL0B0cy1pZ25vcmVcblx0XHRcdFx0dGhpcy4jY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIG9uQ2xpY2tFdmVudCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGF0dHJzXG5cdFx0XHRmb3IobGV0IG9icyBvZiBhdHRyaWJ1dGVzISlcblx0XHRcdFx0dGhpcy4jYXR0cmlidXRlc1tvYnNdID0gdGhpcy5nZXRBdHRyaWJ1dGUob2JzKTtcblxuXHRcdFx0Ly8gY3NzXG5cdFx0XHRpZiggc2hhZG93ICE9PSAnbm9uZScpXG5cdFx0XHRcdCh0aGlzLiNjb250ZW50IGFzIFNoYWRvd1Jvb3QpLmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHNoYXJlZENTUyk7XG5cdFx0XHRpZiggc3R5bGVzaGVldHMubGVuZ3RoICkge1xuXG5cdFx0XHRcdGlmKCBzaGFkb3cgIT09ICdub25lJylcblx0XHRcdFx0XHQodGhpcy4jY29udGVudCBhcyBTaGFkb3dSb290KS5hZG9wdGVkU3R5bGVTaGVldHMucHVzaCguLi5zdHlsZXNoZWV0cyk7XG5cdFx0XHRcdGVsc2Uge1xuXG5cdFx0XHRcdFx0Y29uc3QgY3Nzc2VsZWN0b3IgPSB0aGlzLkNTU1NlbGVjdG9yO1xuXG5cdFx0XHRcdFx0Ly8gaWYgbm90IHlldCBpbnNlcnRlZCA6XG5cdFx0XHRcdFx0aWYoICEgYWxyZWFkeURlY2xhcmVkQ1NTLmhhcyhjc3NzZWxlY3RvcikgKSB7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cblx0XHRcdFx0XHRcdHN0eWxlLnNldEF0dHJpYnV0ZSgnZm9yJywgY3Nzc2VsZWN0b3IpO1xuXG5cdFx0XHRcdFx0XHRsZXQgaHRtbF9zdHlsZXNoZWV0cyA9IFwiXCI7XG5cblx0XHRcdFx0XHRcdGZvcihsZXQgc3R5bGUgb2Ygc3R5bGVzaGVldHMpXG5cdFx0XHRcdFx0XHRcdGZvcihsZXQgcnVsZSBvZiBzdHlsZS5jc3NSdWxlcylcblx0XHRcdFx0XHRcdFx0XHRodG1sX3N0eWxlc2hlZXRzICs9IHJ1bGUuY3NzVGV4dCArICdcXG4nO1xuXG5cdFx0XHRcdFx0XHRzdHlsZS5pbm5lckhUTUwgPSBodG1sX3N0eWxlc2hlZXRzLnJlcGxhY2UoJzpob3N0JywgYDppcygke2Nzc3NlbGVjdG9yfSlgKTtcblxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmQoc3R5bGUpO1xuXG5cdFx0XHRcdFx0XHRhbHJlYWR5RGVjbGFyZWRDU1MuYWRkKGNzc3NlbGVjdG9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gY29udGVudFxuXHRcdFx0aWYoIGNvbnRlbnQgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0bGV0IHRlbXBsYXRlX2VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXHRcdFx0XHRsZXQgc3RyID0gKGNvbnRlbnQgYXMgc3RyaW5nKS5yZXBsYWNlKC9cXCRcXHsoLis/KVxcfS9nLCAoXywgbWF0Y2gpID0+IHRoaXMuZ2V0QXR0cmlidXRlKG1hdGNoKT8/JycpXG5cdCAgICBcdFx0dGVtcGxhdGVfZWxlbS5pbm5lckhUTUwgPSBzdHI7XG5cdCAgICBcdFx0dGhpcy4jY29udGVudC5hcHBlbmQoLi4udGVtcGxhdGVfZWxlbS5jb250ZW50LmNoaWxkTm9kZXMpO1xuXHQgICAgXHR9XG5cblx0ICAgIFx0Ly8gYnVpbGRcblxuXHQgICAgXHQvLyBoNGNrLCBva2F5IGJlY2F1c2UgSlMgaXMgbW9ub3RocmVhZGVkLlxuXHRcdFx0X19jc3RyX2hvc3QgICA9IHRoaXM7XG5cblx0ICAgIFx0bGV0IG9iaiA9IG5ldyBMaXNzKCk7XG5cblx0ICAgIFx0LyppZiggb2JqIGluc3RhbmNlb2YgUHJvbWlzZSlcblx0ICAgIFx0XHRvYmogPSBhd2FpdCBvYmo7Ki9cblxuXHRcdFx0dGhpcy4jQVBJID0gb2JqIGFzIEluc3RhbmNlVHlwZTxUPjtcblxuXHRcdFx0Ly8gZGVmYXVsdCBzbG90XG5cdFx0XHRpZiggdGhpcy5oYXNTaGFkb3cgJiYgdGhpcy4jY29udGVudC5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCApXG5cdFx0XHRcdHRoaXMuI2NvbnRlbnQuYXBwZW5kKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbG90JykgKTtcblxuXHRcdFx0aWYoIHRoaXMuI3Jlc29sdmUgIT09IG51bGwpXG5cdFx0XHRcdHRoaXMuI3Jlc29sdmUodGhpcy4jQVBJKTtcblxuXHRcdFx0cmV0dXJuIHRoaXMuI0FQSTtcblx0XHR9XG5cblx0XHRnZXQgcGFyYW1zKCk6IFBhcmFtcyB7XG5cdFx0XHRyZXR1cm4gdGhpcy4jcGFyYW1zO1xuXHRcdH1cblx0XHRwdWJsaWMgc2V0UGFyYW08VCBleHRlbmRzIGtleW9mIFBhcmFtcz4obmFtZTogVCwgdmFsdWU6IFBhcmFtc1tUXSkge1xuXHRcdFx0aWYoIHRoaXMuaXNJbml0IClcblx0XHRcdFx0cmV0dXJuIHRoaXMuI0FQSSEuc2V0UGFyYW0obmFtZSwgdmFsdWUpO1xuXG5cdFx0XHR0aGlzLiNwYXJhbXNbbmFtZV0gPSB2YWx1ZTsgLy8gd2lsbCBiZSBnaXZlbiB0byBjb25zdHJ1Y3Rvci5cblx0XHR9XG5cblxuXHRcdC8qKiogY29udGVudCAqKiovXG5cdFx0I2NvbnRlbnQ6IEhvc3R8U2hhZG93Um9vdHxudWxsID0gbnVsbDtcblxuXHRcdGdldCBjb250ZW50KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuI2NvbnRlbnQ7XG5cdFx0fVxuXG5cdFx0Z2V0UGFydChuYW1lOiBzdHJpbmcpIHtcblx0XHRcdHJldHVybiB0aGlzLmhhc1NoYWRvd1xuXHRcdFx0XHRcdD8gdGhpcy4jY29udGVudD8ucXVlcnlTZWxlY3RvcihgOjpwYXJ0KCR7bmFtZX0pYClcblx0XHRcdFx0XHQ6IHRoaXMuI2NvbnRlbnQ/LnF1ZXJ5U2VsZWN0b3IoYFtwYXJ0PVwiJHtuYW1lfVwiXWApO1xuXHRcdH1cblx0XHRnZXRQYXJ0cyhuYW1lOiBzdHJpbmcpIHtcblx0XHRcdHJldHVybiB0aGlzLmhhc1NoYWRvd1xuXHRcdFx0XHRcdD8gdGhpcy4jY29udGVudD8ucXVlcnlTZWxlY3RvckFsbChgOjpwYXJ0KCR7bmFtZX0pYClcblx0XHRcdFx0XHQ6IHRoaXMuI2NvbnRlbnQ/LnF1ZXJ5U2VsZWN0b3JBbGwoYFtwYXJ0PVwiJHtuYW1lfVwiXWApO1xuXHRcdH1cblxuXHRcdHByb3RlY3RlZCBnZXQgaGFzU2hhZG93KCk6IGJvb2xlYW4ge1xuXHRcdFx0cmV0dXJuIHNoYWRvdyAhPT0gJ25vbmUnO1xuXHRcdH1cblxuXHRcdC8qKiogQ1NTICoqKi9cblxuXHRcdGdldCBDU1NTZWxlY3RvcigpIHtcblxuXHRcdFx0aWYodGhpcy5oYXNTaGFkb3cgfHwgISB0aGlzLmhhc0F0dHJpYnV0ZShcImlzXCIpIClcblx0XHRcdFx0cmV0dXJuIHRoaXMudGFnTmFtZTtcblxuXHRcdFx0cmV0dXJuIGAke3RoaXMudGFnTmFtZX1baXM9XCIke3RoaXMuZ2V0QXR0cmlidXRlKFwiaXNcIil9XCJdYDtcblx0XHR9XG5cblx0XHQvKioqIGF0dHJzICoqKi9cblx0XHQjYXR0cnNfZmxhZyA9IGZhbHNlO1xuXG5cdFx0I2F0dHJpYnV0ZXMgICAgICAgICA9IHt9IGFzIFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuXHRcdCNhdHRyaWJ1dGVzRGVmYXVsdHMgPSB7fSBhcyBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPjtcblx0XHQjYXR0cnMgPSBuZXcgQXR0cmlidXRlcyhcblx0XHRcdHRoaXMuI2F0dHJpYnV0ZXMsXG5cdFx0XHR0aGlzLiNhdHRyaWJ1dGVzRGVmYXVsdHMsXG5cdFx0XHQobmFtZTogQXR0cnMsIHZhbHVlOnN0cmluZ3xudWxsKSA9PiB7XG5cblx0XHRcdFx0dGhpcy4jYXR0cmlidXRlc1tuYW1lXSA9IHZhbHVlO1xuXG5cdFx0XHRcdHRoaXMuI2F0dHJzX2ZsYWcgPSB0cnVlOyAvLyBkbyBub3QgdHJpZ2dlciBvbkF0dHJzQ2hhbmdlZC5cblx0XHRcdFx0aWYoIHZhbHVlID09PSBudWxsKVxuXHRcdFx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXHRcdFx0fVxuXHRcdCkgYXMgdW5rbm93biBhcyBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPjtcblxuXHRcdHNldEF0dHJEZWZhdWx0KG5hbWU6IEF0dHJzLCB2YWx1ZTogc3RyaW5nfG51bGwpIHtcblx0XHRcdGlmKCB2YWx1ZSA9PT0gbnVsbClcblx0XHRcdFx0ZGVsZXRlIHRoaXMuI2F0dHJpYnV0ZXNEZWZhdWx0c1tuYW1lXTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0dGhpcy4jYXR0cmlidXRlc0RlZmF1bHRzW25hbWVdID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0Z2V0IGF0dHJzKCk6IFJlYWRvbmx5PFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+PiB7XG5cblx0XHRcdHJldHVybiB0aGlzLiNhdHRycztcblx0XHR9XG5cblx0XHRzdGF0aWMgb2JzZXJ2ZWRBdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcblx0XHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSAgICA6IEF0dHJzLFxuXHRcdFx0XHRcdFx0XHRcdCBvbGRWYWx1ZTogc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRcdCBuZXdWYWx1ZTogc3RyaW5nKSB7XG5cblx0XHRcdGlmKHRoaXMuI2F0dHJzX2ZsYWcpIHtcblx0XHRcdFx0dGhpcy4jYXR0cnNfZmxhZyA9IGZhbHNlO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuI2F0dHJpYnV0ZXNbbmFtZV0gPSBuZXdWYWx1ZTtcblx0XHRcdGlmKCAhIHRoaXMuaXNJbml0IClcblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRpZiggKHRoaXMuI0FQSSEgYXMgYW55KS5vbkF0dHJDaGFuZ2VkKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkgPT09IGZhbHNlKSB7XG5cdFx0XHRcdHRoaXMuI2F0dHJzW25hbWVdID0gb2xkVmFsdWU7IC8vIHJldmVydCB0aGUgY2hhbmdlLlxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gTElTU0hvc3RCYXNlO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIGRlZmluZSA9PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IF9ET01Db250ZW50TG9hZGVkID0gbmV3IFByb21pc2U8dm9pZD4oIChyZXNvbHZlKSA9PiB7XG5cblx0aWYoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJpbnRlcmFjdGl2ZVwiIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIilcblx0XHRyZXR1cm4gcmVzb2x2ZSgpO1xuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cdFx0cmVzb2x2ZSgpO1xuXHR9LCB0cnVlKTtcbn0pO1xuXG5MSVNTLmRlZmluZSA9IGFzeW5jIGZ1bmN0aW9uPEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0XHRcdFx0XHRcdFx0IEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHRcdCAgICAgQXR0cnMgICBleHRlbmRzIHN0cmluZyxcblx0XHRcdFx0XHRcdCAgICAgUGFyYW1zICBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pixcblx0XHRcdFx0XHRcdCAgIFx0IFQgZXh0ZW5kcyBMSVNTUmV0dXJuVHlwZTxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zPj4oXG5cdFx0XHRcdFx0XHQgICBcdHRhZ25hbWU6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0Q29tcG9uZW50Q2xhc3M6IFQsXG5cdFx0XHRcdFx0XHRcdHtkZXBlbmRlbmNpZXMsIHBhcmFtc306IHtwYXJhbXM/OiBQYXJ0aWFsPFBhcmFtcz4sIGRlcGVuZGVuY2llcz86IHJlYWRvbmx5IFByb21pc2U8c3RyaW5nPltdfSA9IHt9KSB7XG5cblx0ZGVwZW5kZW5jaWVzPz89W107XG5cdHBhcmFtcyAgICAgID8/PSB7fTtcblxuXHRjb25zdCBDbGFzcyA9IENvbXBvbmVudENsYXNzLlBhcmFtZXRlcnMuaG9zdDtcblx0bGV0IExJU1NCYXNlOiBhbnkgPSBDb21wb25lbnRDbGFzcztcblx0bGV0IGh0bWx0YWcgPSBfZWxlbWVudDJ0YWduYW1lKENsYXNzKT8/dW5kZWZpbmVkO1xuXG5cdGF3YWl0IFByb21pc2UuYWxsKFtfRE9NQ29udGVudExvYWRlZCwgLi4uZGVwZW5kZW5jaWVzLCAuLi5MSVNTQmFzZS5QYXJhbWV0ZXJzLmRlcGVuZGVuY2llc10pO1xuXG5cdGNvbnN0IExJU1NjbGFzcyA9IGJ1aWxkTElTU0hvc3Q8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcywgVD4oQ29tcG9uZW50Q2xhc3MsIHBhcmFtcyk7XG5cdFxuXHRjb25zdCBvcHRzID0gaHRtbHRhZyA9PT0gdW5kZWZpbmVkID8ge31cblx0XHRcdFx0XHRcdFx0XHRcdCAgIDoge2V4dGVuZHM6IGh0bWx0YWd9O1xuXHRcblx0Y3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ25hbWUsIExJU1NjbGFzcywgb3B0cyk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIFNoYWRvd1Jvb3QgdG9vbHMgPT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IHNoYXJlZENTUyA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG5kb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChzaGFyZWRDU1MpO1xuXG5MSVNTLmluc2VydEdsb2JhbENTU1J1bGVzID0gZnVuY3Rpb24oY3NzOiBzdHJpbmd8SFRNTFN0eWxlRWxlbWVudCkge1xuXG5cdGxldCBjc3Nfc3R5bGUhOiBDU1NTdHlsZVNoZWV0O1xuXG5cdGlmKCBjc3MgaW5zdGFuY2VvZiBIVE1MU3R5bGVFbGVtZW50IClcblx0XHRjc3Nfc3R5bGUgPSBjc3Muc2hlZXQhO1xuXHRpZiggdHlwZW9mIGNzcyA9PT0gXCJzdHJpbmdcIikge1xuXHRcdGNzc19zdHlsZSA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG5cdFx0Y3NzX3N0eWxlLnJlcGxhY2VTeW5jKGNzcyk7XG5cdH1cblxuXHRmb3IobGV0IHJ1bGUgb2YgY3NzX3N0eWxlLmNzc1J1bGVzKVxuXHRcdHNoYXJlZENTUy5pbnNlcnRSdWxlKHJ1bGUuY3NzVGV4dCk7XG59XG5cbnR5cGUgRGVsZWdhdGVkSGFuZGxlciA9IFtzdHJpbmcsIChldjogTW91c2VFdmVudCkgPT4gdm9pZF07XG5jb25zdCBERUxFR0FURURfRVZFTlRTID0ge1xuXHRcImNsaWNrXCI6IFtdIGFzIERlbGVnYXRlZEhhbmRsZXJbXSxcblx0XCJkYmxjbGlja1wiOiBbXSBhcyBEZWxlZ2F0ZWRIYW5kbGVyW11cbn07XG5cbmNvbnN0IEFMUkVBRFlfUFJPQ0VTU0VEID0gU3ltYm9sKCk7XG5cbmZ1bmN0aW9uIG9uQ2xpY2tFdmVudChldjogTW91c2VFdmVudCkge1xuXG5cdGlmKCAoZXYgYXMgYW55KVtBTFJFQURZX1BST0NFU1NFRF0gPT09IHRydWUgKVxuXHRcdHJldHVybjtcblx0KGV2IGFzIGFueSlbQUxSRUFEWV9QUk9DRVNTRURdID0gdHJ1ZTtcblxuXHRjb25zdCBoYW5kbGVycyA9IERFTEVHQVRFRF9FVkVOVFNbZXYudHlwZSBhcyBrZXlvZiB0eXBlb2YgREVMRUdBVEVEX0VWRU5UU107XG5cblx0Zm9yKGxldCBlbGVtIG9mIGV2LmNvbXBvc2VkUGF0aCgpICkge1xuXHRcblx0XHRpZiggZWxlbSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgfHwgZWxlbSA9PT0gZG9jdW1lbnQgfHwgZWxlbSA9PT0gd2luZG93IClcblx0XHRcdGNvbnRpbnVlO1xuXG5cdFx0dmFyIHRhcmdldCA9IGVsZW0gYXMgRWxlbWVudDtcblxuXHRcdGZvcihsZXQgW3NlbGVjdG9yLCBoYW5kbGVyXSBvZiBoYW5kbGVycykge1xuXHRcdFx0aWYoIHRhcmdldC5tYXRjaGVzKHNlbGVjdG9yKSApXG5cdFx0XHRcdGhhbmRsZXIoZXYpO1xuXHRcdH1cblx0fVxufVxuXG5MSVNTLmluc2VydEdsb2JhbERlbGVnYXRlZExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnRfbmFtZToga2V5b2YgdHlwZW9mIERFTEVHQVRFRF9FVkVOVFMsIHNlbGVjdG9yOiBzdHJpbmcsIGhhbmRsZXI6IChldjogTW91c2VFdmVudCkgPT4gdm9pZCApIHtcblx0REVMRUdBVEVEX0VWRU5UU1tldmVudF9uYW1lXS5wdXNoKFtzZWxlY3RvciwgaGFuZGxlcl0pXG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGlja0V2ZW50KTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgb25DbGlja0V2ZW50KTtcblxuTElTUy5jbG9zZXN0ID0gZnVuY3Rpb24gY2xvc2VzdDxFIGV4dGVuZHMgRWxlbWVudD4oc2VsZWN0b3I6IHN0cmluZywgZWxlbWVudDogRWxlbWVudCkge1xuXG5cdHdoaWxlKHRydWUpIHtcblx0XHR2YXIgcmVzdWx0ID0gZWxlbWVudC5jbG9zZXN0PEU+KHNlbGVjdG9yKTtcblxuXHRcdGlmKCByZXN1bHQgIT09IG51bGwpXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXG5cdFx0Y29uc3Qgcm9vdCA9IGVsZW1lbnQuZ2V0Um9vdE5vZGUoKTtcblx0XHRpZiggISAoXCJob3N0XCIgaW4gcm9vdCkgKVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHRlbGVtZW50ID0gKHJvb3QgYXMgU2hhZG93Um9vdCkuaG9zdDtcblx0fVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIGhlbHBlcnMgPT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnR5cGUgaW5mZXJQYXJhbXM8VD4gPSBUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksIGluZmVyIFAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4+ID8gUCA6IG5ldmVyO1xuXG50eXBlIEJVSUxEX09QVElPTlM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+ID0gUGFydGlhbDx7XG5cdFx0XHRcdFx0ICBcdHBhcmFtcyAgICA6IFBhcnRpYWw8aW5mZXJQYXJhbXM8VD4+LFxuXHRcdFx0XHRcdCAgXHRjb250ZW50XHQgIDogc3RyaW5nfE5vZGV8cmVhZG9ubHkgTm9kZVtdLFxuXHRcdFx0XHRcdFx0aWQgXHRcdCAgOiBzdHJpbmcsXG5cdFx0XHRcdFx0ICBcdGNsYXNzZXNcdCAgOiByZWFkb25seSBzdHJpbmdbXSxcblx0XHRcdFx0XHQgIFx0Y3NzdmFycyAgIDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4sXG5cdFx0XHRcdFx0ICBcdGF0dHJzIFx0ICA6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIHN0cmluZ3xib29sZWFuPj4sXG5cdFx0XHRcdFx0ICBcdGRhdGEgXHQgIDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgc3RyaW5nfGJvb2xlYW4+Pixcblx0XHRcdFx0XHQgIFx0bGlzdGVuZXJzIDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgKGV2OiBFdmVudCkgPT4gdm9pZD4+XG5cdFx0XHRcdFx0fT4gJiAoe1xuXHRcdFx0XHRcdFx0aW5pdGlhbGl6ZTogZmFsc2UsXG5cdFx0XHRcdFx0XHRwYXJlbnQ6IEVsZW1lbnRcblx0XHRcdFx0XHR9fHtcblx0XHRcdFx0XHRcdGluaXRpYWxpemU/OiB0cnVlLFxuXHRcdFx0XHRcdFx0cGFyZW50PzogRWxlbWVudFxuXHRcdFx0XHRcdH0pO1xuXG5hc3luYyBmdW5jdGlvbiBidWlsZDxUIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4odGFnbmFtZTogVCwgb3B0aW9ucz86IEJVSUxEX09QVElPTlM8Q29tcG9uZW50c1tUXT4pOiBQcm9taXNlPENvbXBvbmVudHNbVF0+O1xuYXN5bmMgZnVuY3Rpb24gYnVpbGQ8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHRhZ25hbWU6IHN0cmluZywgb3B0aW9ucz86IEJVSUxEX09QVElPTlM8VD4pOiBQcm9taXNlPFQ+O1xuYXN5bmMgZnVuY3Rpb24gYnVpbGQ8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHRhZ25hbWU6IHN0cmluZywge1xuXHRcdHBhcmFtcyAgICA9IHt9LFxuXHRcdGluaXRpYWxpemU9IHRydWUsXG5cdFx0Y29udGVudCAgID0gW10sXG5cdFx0cGFyZW50ICAgID0gdW5kZWZpbmVkLFxuXHRcdGlkIFx0XHQgID0gdW5kZWZpbmVkLFxuXHRcdGNsYXNzZXMgICA9IFtdLFxuXHRcdGNzc3ZhcnMgICA9IHt9LFxuXHRcdGF0dHJzICAgICA9IHt9LFxuXHRcdGRhdGEgXHQgID0ge30sXG5cdFx0bGlzdGVuZXJzID0ge31cblx0fTogQlVJTERfT1BUSU9OUzxUPiA9IHt9KTogUHJvbWlzZTxUPiB7XG5cblx0aWYoICEgaW5pdGlhbGl6ZSAmJiBwYXJlbnQgPT09IG51bGwpXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQSBwYXJlbnQgbXVzdCBiZSBnaXZlbiBpZiBpbml0aWFsaXplIGlzIGZhbHNlXCIpO1xuXG5cdGxldCBDdXN0b21DbGFzcyA9IGF3YWl0IGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKHRhZ25hbWUpO1xuXHRsZXQgZWxlbSA9IG5ldyBDdXN0b21DbGFzcyhwYXJhbXMpIGFzIExJU1NIb3N0PFQ+O1xuXG5cdC8vIEZpeCBpc3N1ZSAjMlxuXHRpZiggZWxlbS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09IHRhZ25hbWUgKVxuXHRcdGVsZW0uc2V0QXR0cmlidXRlKFwiaXNcIiwgdGFnbmFtZSk7XG5cblx0aWYoIGlkICE9PSB1bmRlZmluZWQgKVxuXHRcdGVsZW0uaWQgPSBpZDtcblxuXHRpZiggY2xhc3Nlcy5sZW5ndGggPiAwKVxuXHRcdGVsZW0uY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcblxuXHRmb3IobGV0IG5hbWUgaW4gY3NzdmFycylcblx0XHRlbGVtLnN0eWxlLnNldFByb3BlcnR5KGAtLSR7bmFtZX1gLCBjc3N2YXJzW25hbWVdKTtcblxuXHRmb3IobGV0IG5hbWUgaW4gYXR0cnMpIHtcblxuXHRcdGxldCB2YWx1ZSA9IGF0dHJzW25hbWVdO1xuXHRcdGlmKCB0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKVxuXHRcdFx0ZWxlbS50b2dnbGVBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXHRcdGVsc2Vcblx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0fVxuXG5cdGZvcihsZXQgbmFtZSBpbiBkYXRhKSB7XG5cblx0XHRsZXQgdmFsdWUgPSBkYXRhW25hbWVdO1xuXHRcdGlmKCB2YWx1ZSA9PT0gZmFsc2UpXG5cdFx0XHRkZWxldGUgZWxlbS5kYXRhc2V0W25hbWVdO1xuXHRcdGVsc2UgaWYodmFsdWUgPT09IHRydWUpXG5cdFx0XHRlbGVtLmRhdGFzZXRbbmFtZV0gPSBcIlwiO1xuXHRcdGVsc2Vcblx0XHRcdGVsZW0uZGF0YXNldFtuYW1lXSA9IHZhbHVlO1xuXHR9XG5cblx0aWYoICEgQXJyYXkuaXNBcnJheShjb250ZW50KSApXG5cdFx0Y29udGVudCA9IFtjb250ZW50IGFzIGFueV07XG5cdGVsZW0ucmVwbGFjZUNoaWxkcmVuKC4uLmNvbnRlbnQpO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBsaXN0ZW5lcnMpXG5cdFx0ZWxlbS5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGxpc3RlbmVyc1tuYW1lXSk7XG5cblx0aWYoIHBhcmVudCAhPT0gdW5kZWZpbmVkIClcblx0XHRwYXJlbnQuYXBwZW5kKGVsZW0pO1xuXG5cdGlmKCAhIGVsZW0uaXNJbml0ICYmIGluaXRpYWxpemUgKVxuXHRcdHJldHVybiBhd2FpdCBMSVNTLmluaXRpYWxpemUoZWxlbSk7XG5cblx0cmV0dXJuIGF3YWl0IExJU1MuZ2V0TElTUyhlbGVtKTtcbn1cbkxJU1MuYnVpbGQgPSBidWlsZDtcblxuXG5mdW5jdGlvbiBidWlsZFN5bmM8VCBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHRhZ25hbWU6IFQsIG9wdGlvbnM/OiBCVUlMRF9PUFRJT05TPENvbXBvbmVudHNbVF0+KTogQ29tcG9uZW50c1tUXTtcbmZ1bmN0aW9uIGJ1aWxkU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4odGFnbmFtZTogc3RyaW5nLCBvcHRpb25zPzogQlVJTERfT1BUSU9OUzxUPik6IFQ7XG5mdW5jdGlvbiBidWlsZFN5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHRhZ25hbWU6IHN0cmluZywge1xuXHRcdHBhcmFtcyAgICA9IHt9LFxuXHRcdGluaXRpYWxpemU9IHRydWUsXG5cdFx0Y29udGVudCAgID0gW10sXG5cdFx0cGFyZW50ICAgID0gdW5kZWZpbmVkLFxuXHRcdGlkIFx0XHQgID0gdW5kZWZpbmVkLFxuXHRcdGNsYXNzZXMgICA9IFtdLFxuXHRcdGNzc3ZhcnMgICA9IHt9LFxuXHRcdGF0dHJzICAgICA9IHt9LFxuXHRcdGRhdGEgXHQgID0ge30sXG5cdFx0bGlzdGVuZXJzID0ge31cblx0fTogQlVJTERfT1BUSU9OUzxUPiA9IHt9KTogVCB7XG5cblx0aWYoICEgaW5pdGlhbGl6ZSAmJiBwYXJlbnQgPT09IG51bGwpXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQSBwYXJlbnQgbXVzdCBiZSBnaXZlbiBpZiBpbml0aWFsaXplIGlzIGZhbHNlXCIpO1xuXG5cdGxldCBDdXN0b21DbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldCh0YWduYW1lKTtcblx0aWYoQ3VzdG9tQ2xhc3MgPT09IHVuZGVmaW5lZClcblx0XHR0aHJvdyBuZXcgRXJyb3IoYCR7dGFnbmFtZX0gbm90IGRlZmluZWRgKTtcblx0bGV0IGVsZW0gPSBuZXcgQ3VzdG9tQ2xhc3MocGFyYW1zKSBhcyBMSVNTSG9zdDxUPjtcblxuXHQvL1RPRE86IGZhY3Rvcml6ZS4uLlxuXG5cdC8vIEZpeCBpc3N1ZSAjMlxuXHRpZiggZWxlbS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09IHRhZ25hbWUgKVxuXHRcdGVsZW0uc2V0QXR0cmlidXRlKFwiaXNcIiwgdGFnbmFtZSk7XG5cblx0aWYoIGlkICE9PSB1bmRlZmluZWQgKVxuXHRcdGVsZW0uaWQgPSBpZDtcblxuXHRpZiggY2xhc3Nlcy5sZW5ndGggPiAwKVxuXHRcdGVsZW0uY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcblxuXHRmb3IobGV0IG5hbWUgaW4gY3NzdmFycylcblx0XHRlbGVtLnN0eWxlLnNldFByb3BlcnR5KGAtLSR7bmFtZX1gLCBjc3N2YXJzW25hbWVdKTtcblxuXHRmb3IobGV0IG5hbWUgaW4gYXR0cnMpIHtcblxuXHRcdGxldCB2YWx1ZSA9IGF0dHJzW25hbWVdO1xuXHRcdGlmKCB0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKVxuXHRcdFx0ZWxlbS50b2dnbGVBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXHRcdGVsc2Vcblx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0fVxuXG5cdGZvcihsZXQgbmFtZSBpbiBkYXRhKSB7XG5cblx0XHRsZXQgdmFsdWUgPSBkYXRhW25hbWVdO1xuXHRcdGlmKCB2YWx1ZSA9PT0gZmFsc2UpXG5cdFx0XHRkZWxldGUgZWxlbS5kYXRhc2V0W25hbWVdO1xuXHRcdGVsc2UgaWYodmFsdWUgPT09IHRydWUpXG5cdFx0XHRlbGVtLmRhdGFzZXRbbmFtZV0gPSBcIlwiO1xuXHRcdGVsc2Vcblx0XHRcdGVsZW0uZGF0YXNldFtuYW1lXSA9IHZhbHVlO1xuXHR9XG5cblx0aWYoICEgQXJyYXkuaXNBcnJheShjb250ZW50KSApXG5cdFx0Y29udGVudCA9IFtjb250ZW50IGFzIGFueV07XG5cdGVsZW0ucmVwbGFjZUNoaWxkcmVuKC4uLmNvbnRlbnQpO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBsaXN0ZW5lcnMpXG5cdFx0ZWxlbS5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGxpc3RlbmVyc1tuYW1lXSk7XG5cblx0aWYoIHBhcmVudCAhPT0gdW5kZWZpbmVkIClcblx0XHRwYXJlbnQuYXBwZW5kKGVsZW0pO1xuXG5cdGlmKCAhIGVsZW0uaXNJbml0ICYmIGluaXRpYWxpemUgKVxuXHRcdExJU1MuaW5pdGlhbGl6ZVN5bmMoZWxlbSk7XG5cblx0cmV0dXJuIExJU1MuZ2V0TElTU1N5bmMoZWxlbSk7XG59XG5MSVNTLmJ1aWxkU3luYyA9IGJ1aWxkU3luYztcblxuTElTUy53aGVuRGVmaW5lZCAgICA9IGFzeW5jIGZ1bmN0aW9uKHRhZ25hbWU6IHN0cmluZywgY2FsbGJhY2s/OiAoKSA9PiB2b2lkICkgOiBQcm9taXNlPHZvaWQ+IHtcblxuXHRhd2FpdCBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCh0YWduYW1lKTtcblxuXHRpZiggY2FsbGJhY2sgIT09IHVuZGVmaW5lZClcblx0XHRjYWxsYmFjaygpO1xuXG5cdHJldHVybjtcbn1cbkxJU1Mud2hlbkFsbERlZmluZWQgPSBhc3luYyBmdW5jdGlvbih0YWduYW1lczogcmVhZG9ubHkgc3RyaW5nW10sIGNhbGxiYWNrPzogKCkgPT4gdm9pZCApIDogUHJvbWlzZTx2b2lkPiB7XG5cblx0YXdhaXQgUHJvbWlzZS5hbGwoIHRhZ25hbWVzLm1hcCggdCA9PiBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCh0KSApIClcblxuXHRpZiggY2FsbGJhY2sgIT09IHVuZGVmaW5lZClcblx0XHRjYWxsYmFjaygpO1xuXG59XG5cbkxJU1MuaXNEZWZpbmVkID0gZnVuY3Rpb24obmFtZTogc3RyaW5nKSB7XG5cdHJldHVybiBjdXN0b21FbGVtZW50cy5nZXQobmFtZSk7XG59XG5cbkxJU1Muc2VsZWN0b3IgPSBmdW5jdGlvbihuYW1lPzogc3RyaW5nKSB7XG5cdGlmKG5hbWUgPT09IHVuZGVmaW5lZCkgLy8ganVzdCBhbiBoNGNrXG5cdFx0cmV0dXJuIFwiXCI7XG5cdHJldHVybiBgOmlzKCR7bmFtZX0sIFtpcz1cIiR7bmFtZX1cIl0pYDtcbn1cblxuTElTUy5nZXRMSVNTICAgID0gYXN5bmMgZnVuY3Rpb248VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KCBlbGVtZW50OiBFbGVtZW50ICkge1xuXG5cdGF3YWl0IExJU1Mud2hlbkRlZmluZWQoIExJU1MuZ2V0TmFtZShlbGVtZW50KSApO1xuXG5cdHJldHVybiAoZWxlbWVudCBhcyBMSVNTSG9zdDxUPikuTElTUzsgLy8gZW5zdXJlIGluaXRpYWxpemVkLlxufVxuTElTUy5nZXRMSVNTU3luYz0gZnVuY3Rpb248VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KCBlbGVtZW50OiBFbGVtZW50ICkge1xuXG5cdGNvbnN0IG5hbWUgPSBMSVNTLmdldE5hbWUoZWxlbWVudCk7XG5cdGlmKCAhIExJU1MuaXNEZWZpbmVkKCBuYW1lICkgKVxuXHRcdHRocm93IG5ldyBFcnJvcihgJHtuYW1lfSBoYXNuJ3QgYmVlbiBkZWZpbmVkIHlldC5gKTtcblxuXHRsZXQgaG9zdCA9IGVsZW1lbnQgYXMgTElTU0hvc3Q8VD47XG5cblx0aWYoICEgaG9zdC5pc0luaXQgKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIkluc3RhbmNlIGhhc24ndCBiZWVuIGluaXRpYWxpemVkIHlldC5cIik7XG5cblx0cmV0dXJuIGhvc3QuTElTU1N5bmM7XG59XG5MSVNTLmluaXRpYWxpemUgPSBhc3luYyBmdW5jdGlvbjxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oIGVsZW1lbnQ6IEVsZW1lbnQpIHtcblxuXHRhd2FpdCBMSVNTLndoZW5EZWZpbmVkKCBMSVNTLmdldE5hbWUoZWxlbWVudCkgKTtcblxuXHRyZXR1cm4gYXdhaXQgKGVsZW1lbnQgYXMgTElTU0hvc3Q8VD4pLmluaXRpYWxpemUoKTsgLy8gZW5zdXJlIGluaXRpYWxpemF0aW9uLlxufVxuXG5MSVNTLmluaXRpYWxpemVTeW5jID0gZnVuY3Rpb248VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KCBlbGVtZW50OiBFbGVtZW50KSB7XG5cblx0Y29uc3QgbmFtZSA9IExJU1MuZ2V0TmFtZShlbGVtZW50KTtcblx0aWYoICEgTElTUy5pc0RlZmluZWQobmFtZSkgKVxuXHRcdHRocm93IG5ldyBFcnJvcihgJHtuYW1lfSBub3QgZGVmaW5lZGApO1xuXG5cdHJldHVybiAoZWxlbWVudCBhcyBMSVNTSG9zdDxUPikuaW5pdGlhbGl6ZSgpOyAvLyBlbnN1cmUgaW5pdGlhbGl6YXRpb24uXG59XG5cbkxJU1MuZ2V0TmFtZSA9IGZ1bmN0aW9uKCBlbGVtZW50OiBFbGVtZW50ICk6IHN0cmluZyB7XG5cblx0Y29uc3QgbmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpcycpID8/IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcblx0aWYoICEgbmFtZS5pbmNsdWRlcygnLScpIClcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEVsZW1lbnQgJHtuYW1lfSBpcyBub3QgYSBXZWJDb21wb25lbnRgKTtcblxuXHRyZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gX2J1aWxkUVMoc2VsZWN0b3I6IHN0cmluZywgdGFnbmFtZV9vcl9wYXJlbnQ/OiBzdHJpbmcgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsIHBhcmVudDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblx0XG5cdGlmKCB0YWduYW1lX29yX3BhcmVudCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB0YWduYW1lX29yX3BhcmVudCAhPT0gJ3N0cmluZycpIHtcblx0XHRwYXJlbnQgPSB0YWduYW1lX29yX3BhcmVudDtcblx0XHR0YWduYW1lX29yX3BhcmVudCA9IHVuZGVmaW5lZDtcblx0fVxuXG5cdHJldHVybiBbYCR7c2VsZWN0b3J9JHtMSVNTLnNlbGVjdG9yKHRhZ25hbWVfb3JfcGFyZW50IGFzIHN0cmluZ3x1bmRlZmluZWQpfWAsIHBhcmVudF0gYXMgY29uc3Q7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgUXVlcnlTZWxlY3RvcnMgPT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYXN5bmMgZnVuY3Rpb24gcXM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8VD47XG5hc3luYyBmdW5jdGlvbiBxczxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTwgQ29tcG9uZW50c1tOXSA+O1xuYXN5bmMgZnVuY3Rpb24gcXM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRsZXQgcmVzdWx0ID0gYXdhaXQgTElTUy5xc288VD4oc2VsZWN0b3IsIHBhcmVudCk7XG5cdGlmKHJlc3VsdCA9PT0gbnVsbClcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEVsZW1lbnQgJHtzZWxlY3Rvcn0gbm90IGZvdW5kYCk7XG5cblx0cmV0dXJuIHJlc3VsdCFcbn1cbkxJU1MucXMgID0gcXNcblxuYXN5bmMgZnVuY3Rpb24gcXNvPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPFQ+O1xuYXN5bmMgZnVuY3Rpb24gcXNvPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPCBDb21wb25lbnRzW05dID47XG5hc3luYyBmdW5jdGlvbiBxc288VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRjb25zdCBlbGVtZW50ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3I8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblx0aWYoIGVsZW1lbnQgPT09IG51bGwgKVxuXHRcdHJldHVybiBudWxsO1xuXG5cdHJldHVybiBhd2FpdCBMSVNTLmdldExJU1MoIGVsZW1lbnQgKTtcbn1cbkxJU1MucXNvID0gcXNvXG5cbmFzeW5jIGZ1bmN0aW9uIHFzYTxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTxUW10+O1xuYXN5bmMgZnVuY3Rpb24gcXNhPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPCBDb21wb25lbnRzW05dW10gPjtcbmFzeW5jIGZ1bmN0aW9uIHFzYTxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LFxuXHRcdFx0XHRcdFx0cGFyZW50ICA6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cblx0W3NlbGVjdG9yLCBwYXJlbnRdID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBwYXJlbnQpO1xuXG5cdGNvbnN0IGVsZW1lbnRzID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGw8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblxuXHRsZXQgaWR4ID0gMDtcblx0Y29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxUPj4oIGVsZW1lbnRzLmxlbmd0aCApO1xuXHRmb3IobGV0IGVsZW1lbnQgb2YgZWxlbWVudHMpXG5cdFx0cHJvbWlzZXNbaWR4KytdID0gTElTUy5nZXRMSVNTKCBlbGVtZW50ICk7XG5cblx0cmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbn1cbkxJU1MucXNhID0gcXNhO1xuXG5hc3luYyBmdW5jdGlvbiBxc2M8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA6IEVsZW1lbnQpOiBQcm9taXNlPFQ+O1xuYXN5bmMgZnVuY3Rpb24gcXNjPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgOiBFbGVtZW50KTogUHJvbWlzZTwgQ29tcG9uZW50c1tOXSA+O1xuYXN5bmMgZnVuY3Rpb24gcXNjPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50LFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgPzogRWxlbWVudCkge1xuXG5cdGNvbnN0IHJlcyA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgZWxlbWVudCk7XG5cdFxuXHRjb25zdCByZXN1bHQgPSAocmVzWzFdIGFzIHVua25vd24gYXMgRWxlbWVudCkuY2xvc2VzdDxMSVNTSG9zdDxUPj4ocmVzWzBdKTtcblx0aWYocmVzdWx0ID09PSBudWxsKVxuXHRcdHJldHVybiBudWxsO1xuXG5cdHJldHVybiBhd2FpdCBMSVNTLmdldExJU1MocmVzdWx0KTtcbn1cbkxJU1MucXNjID0gcXNjO1xuXG5mdW5jdGlvbiBxc1N5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFQ7XG5mdW5jdGlvbiBxc1N5bmM8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IENvbXBvbmVudHNbTl07XG5mdW5jdGlvbiBxc1N5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRjb25zdCBlbGVtZW50ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3I8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblxuXHRpZiggZWxlbWVudCA9PT0gbnVsbCApXG5cdFx0dGhyb3cgbmV3IEVycm9yKGBFbGVtZW50ICR7c2VsZWN0b3J9IG5vdCBmb3VuZGApO1xuXG5cdHJldHVybiBMSVNTLmdldExJU1NTeW5jKCBlbGVtZW50ICk7XG59XG5MSVNTLnFzU3luYyA9IHFzU3luYztcblxuZnVuY3Rpb24gcXNhU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogVFtdO1xuZnVuY3Rpb24gcXNhU3luYzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogQ29tcG9uZW50c1tOXVtdO1xuZnVuY3Rpb24gcXNhU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LFxuXHRcdFx0XHRcdFx0cGFyZW50ICA6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cblx0W3NlbGVjdG9yLCBwYXJlbnRdID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBwYXJlbnQpO1xuXG5cdGNvbnN0IGVsZW1lbnRzID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGw8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblxuXHRsZXQgaWR4ID0gMDtcblx0Y29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PFQ+KCBlbGVtZW50cy5sZW5ndGggKTtcblx0Zm9yKGxldCBlbGVtZW50IG9mIGVsZW1lbnRzKVxuXHRcdHJlc3VsdFtpZHgrK10gPSBMSVNTLmdldExJU1NTeW5jKCBlbGVtZW50ICk7XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cbkxJU1MucXNhU3luYyA9IHFzYVN5bmM7XG5cbmZ1bmN0aW9uIHFzY1N5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA6IEVsZW1lbnQpOiBUO1xuZnVuY3Rpb24gcXNjU3luYzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdGVsZW1lbnQgIDogRWxlbWVudCk6IENvbXBvbmVudHNbTl07XG5mdW5jdGlvbiBxc2NTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50LFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgPzogRWxlbWVudCkge1xuXG5cdGNvbnN0IHJlcyA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgZWxlbWVudCk7XG5cdFxuXHRjb25zdCByZXN1bHQgPSAocmVzWzFdIGFzIHVua25vd24gYXMgRWxlbWVudCkuY2xvc2VzdDxMSVNTSG9zdDxUPj4ocmVzWzBdKTtcblx0aWYocmVzdWx0ID09PSBudWxsKVxuXHRcdHJldHVybiBudWxsO1xuXG5cdHJldHVybiBMSVNTLmdldExJU1NTeW5jKHJlc3VsdCk7XG59XG5MSVNTLnFzY1N5bmMgPSBxc2NTeW5jO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIEF1dG8gPT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBjbGFzcyBMSVNTX0F1dG8gZXh0ZW5kcyBMSVNTKHthdHRyaWJ1dGVzOiBbXCJzcmNcIl19KSB7XG5cblx0cmVhZG9ubHkgI2tub3duX3RhZyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXHRyZWFkb25seSAjZGlyZWN0b3J5OiBzdHJpbmc7XG5cdHJlYWRvbmx5ICNzdzogUHJvbWlzZTx2b2lkPjtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLiNzdyA9IG5ldyBQcm9taXNlKCBhc3luYyAocmVzb2x2ZSkgPT4ge1xuXHRcdFx0XG5cdFx0XHRhd2FpdCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihgLi9zdy5qc2ApO1xuXG5cdFx0XHRpZiggbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlciApXG5cdFx0XHRcdHJlc29sdmUoKTtcblxuXHRcdFx0bmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignY29udHJvbGxlcmNoYW5nZScsICgpID0+IHtcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblxuXHRcdGNvbnN0IHNyYyA9IHRoaXMuYXR0cnMuc3JjO1xuXHRcdGlmKHNyYyA9PT0gbnVsbClcblx0XHRcdHRocm93IG5ldyBFcnJvcihcInNyYyBhdHRyaWJ1dGUgaXMgbWlzc2luZy5cIik7XG5cdFx0dGhpcy4jZGlyZWN0b3J5ID0gc3JjWzBdID09PSAnLidcblx0XHRcdFx0XHRcdFx0XHQ/IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0vJHtzcmN9YFxuXHRcdFx0XHRcdFx0XHRcdDogc3JjO1xuXG5cdFx0bmV3IE11dGF0aW9uT2JzZXJ2ZXIoIChtdXRhdGlvbnMpID0+IHtcblxuXHRcdFx0Zm9yKGxldCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpXG5cdFx0XHRcdGZvcihsZXQgYWRkaXRpb24gb2YgbXV0YXRpb24uYWRkZWROb2Rlcylcblx0XHRcdFx0XHRpZihhZGRpdGlvbiBpbnN0YW5jZW9mIEVsZW1lbnQpXG5cdFx0XHRcdFx0XHR0aGlzLiNhZGRUYWcoYWRkaXRpb24udGFnTmFtZSlcblxuXHRcdH0pLm9ic2VydmUoIGRvY3VtZW50LCB7IGNoaWxkTGlzdDp0cnVlLCBzdWJ0cmVlOnRydWUgfSk7XG5cblxuXHRcdGZvciggbGV0IGVsZW0gb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIipcIikgKVxuXHRcdFx0dGhpcy4jYWRkVGFnKGVsZW0udGFnTmFtZSk7XG5cdH1cblxuXG4gICAgcHJvdGVjdGVkIHJlc291cmNlcygpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0XCJpbmRleC5qc1wiLFxuXHRcdFx0XCJpbmRleC5odG1sXCIsXG5cdFx0XHRcImluZGV4LmNzc1wiXG5cdFx0XTtcbiAgICB9XG5cblx0cHJvdGVjdGVkIGRlZmluZVdlYkNvbXBvbmVudCh0YWduYW1lOiBzdHJpbmcsIGZpbGVzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBvcHRzOiBQYXJ0aWFsPHtjb250ZW50OiBzdHJpbmcsIGNzczogc3RyaW5nfT4pIHtcblxuXHRcdGNvbnN0IGpzID0gZmlsZXNbXCJpbmRleC5qc1wiXTtcblx0XHRjb25zdCBjb250ZW50ID0gZmlsZXNbXCJpbmRleC5odG1sXCJdO1xuXG5cdFx0bGV0IGtsYXNzOiBudWxsfCBSZXR1cm5UeXBlPHR5cGVvZiBMSVNTPiA9IG51bGw7XG5cdFx0aWYoIGpzICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0a2xhc3MgPSBqcyhvcHRzKTtcblx0XHRlbHNlIGlmKCBjb250ZW50ICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0a2xhc3MgPSBjbGFzcyBXZWJDb21wb25lbnQgZXh0ZW5kcyBMSVNTKG9wdHMpIHt9O1xuXG5cdFx0aWYoa2xhc3MgPT09IG51bGwpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgZmlsZXMgZm9yIFdlYkNvbXBvbmVudCAke3RhZ25hbWV9LmApO1xuXG5cdFx0cmV0dXJuIExJU1MuZGVmaW5lKHRhZ25hbWUsIGtsYXNzKTtcblx0fVxuXG5cdGFzeW5jICNhZGRUYWcodGFnbmFtZTogc3RyaW5nKSB7XG5cblx0XHR0YWduYW1lID0gdGFnbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0aWYoIHRhZ25hbWUgPT09ICdsaXNzLWF1dG8nIHx8IHRhZ25hbWUgPT09ICdibGlzcy1hdXRvJyB8fCAhIHRhZ25hbWUuaW5jbHVkZXMoJy0nKSB8fCB0aGlzLiNrbm93bl90YWcuaGFzKCB0YWduYW1lICkgKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0dGhpcy4ja25vd25fdGFnLmFkZCh0YWduYW1lKTtcblxuXHRcdGF3YWl0IHRoaXMuI3N3OyAvLyBlbnN1cmUgU1cgaXMgaW5zdGFsbGVkLlxuXG5cdFx0Y29uc3QgZmlsZW5hbWVzID0gdGhpcy5yZXNvdXJjZXMoKTtcblx0XHRjb25zdCByZXNvdXJjZXMgPSBhd2FpdCBQcm9taXNlLmFsbCggZmlsZW5hbWVzLm1hcCggZmlsZSA9PiBmaWxlLmVuZHNXaXRoKCcuanMnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IF9pbXBvcnQgICAoYCR7dGhpcy4jZGlyZWN0b3J5fS8ke3RhZ25hbWV9LyR7ZmlsZX1gLCB0cnVlKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IF9mZXRjaFRleHQoYCR7dGhpcy4jZGlyZWN0b3J5fS8ke3RhZ25hbWV9LyR7ZmlsZX1gLCB0cnVlKSApICk7XG5cblx0XHRjb25zdCBmaWxlczogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBmaWxlbmFtZXMubGVuZ3RoOyArK2kpXG5cdFx0XHRpZiggcmVzb3VyY2VzW2ldICE9PSB1bmRlZmluZWQpXG5cdFx0XHRcdGZpbGVzW2ZpbGVuYW1lc1tpXV0gPSByZXNvdXJjZXNbaV07XG5cblx0XHRjb25zdCBjb250ZW50ID0gZmlsZXNbXCJpbmRleC5odG1sXCJdO1xuXHRcdGNvbnN0IGNzcyAgICAgPSBmaWxlc1tcImluZGV4LmNzc1wiXTtcblxuXHRcdGNvbnN0IG9wdHM6IFBhcnRpYWw8e2NvbnRlbnQ6IHN0cmluZywgY3NzOiBzdHJpbmd9PiA9IHtcblx0XHRcdC4uLmNvbnRlbnQgIT09IHVuZGVmaW5lZCAmJiB7Y29udGVudH0sXG5cdFx0XHQuLi5jc3MgICAgICE9PSB1bmRlZmluZWQgJiYge2Nzc30sXG5cdFx0fTtcblxuXHRcdHJldHVybiB0aGlzLmRlZmluZVdlYkNvbXBvbmVudCh0YWduYW1lLCBmaWxlcywgb3B0cyk7XG5cdFx0XG5cdH1cbn1cbkxJU1MuZGVmaW5lKFwibGlzcy1hdXRvXCIsIExJU1NfQXV0byk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50cyB7XG5cdFwibGlzcy1hdXRvXCI6IExJU1NfQXV0b1xufTtcbi8qXG4gKiBkZWNsYXJlIG1vZHVsZSAnJExJU1MnIHtcbiAqIFx0XHRpbnRlcmZhY2UgQ29tcG9uZW50cyB7XG4gKiBcdFx0XHRcIm5hbWVcIjogY2xhc3NcbiAqIFx0XHR9XG4gKiB9XG4gKi9cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBFdmVudHNUYXJnZXQgPT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIENzdEV2ZW50PEV2ZW50IGV4dGVuZHMgc3RyaW5nLCBBcmdzPiA9IEN1c3RvbUV2ZW50PEFyZ3M+ICYge3R5cGU6IEV2ZW50fTtcblxuZXhwb3J0IGludGVyZmFjZSBFdmVudHNUYXJnZXQ8RXZlbnRzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj57XG5cblx0YWRkRXZlbnRMaXN0ZW5lcjxFdmVudCBleHRlbmRzIEV4Y2x1ZGU8a2V5b2YgRXZlbnRzLCBzeW1ib2x8bnVtYmVyPj4odHlwZTogRXZlbnQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgbGlzdGVuZXI6IG51bGx8ICgoZXY6IENzdEV2ZW50PEV2ZW50LCBFdmVudHNbRXZlbnRdPikgPT4gdm9pZCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgb3B0aW9ucz86IGJvb2xlYW58QWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMpOiB2b2lkO1xuXG5cdGRpc3BhdGNoRXZlbnQ8RXZlbnQgZXh0ZW5kcyBFeGNsdWRlPGtleW9mIEV2ZW50cywgc3ltYm9sfG51bWJlcj4+KGV2ZW50OiBDc3RFdmVudDxFdmVudCwgRXZlbnRzW0V2ZW50XT4pOiBib29sZWFuO1xuXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI8RXZlbnQgZXh0ZW5kcyBFeGNsdWRlPGtleW9mIEV2ZW50cywgc3ltYm9sfG51bWJlcj4+KHR5cGU6IEV2ZW50LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsaXN0ZW5lcjogbnVsbHwgKChldjogQ3N0RXZlbnQ8RXZlbnQsIEV2ZW50c1tFdmVudF0+KSA9PiB2b2lkKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz86IGJvb2xlYW58QWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMpOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgQ3N0bUV2ZW50PEV2ZW50IGV4dGVuZHMgc3RyaW5nLCBBcmdzPiBleHRlbmRzIEN1c3RvbUV2ZW50PEFyZ3M+IHtcblxuXHRvdmVycmlkZSBnZXQgdHlwZSgpOiBFdmVudCB7IHJldHVybiBzdXBlci50eXBlIGFzIEV2ZW50OyB9XG5cblx0Y29uc3RydWN0b3IodHlwZTogRXZlbnQsIGFyZ3M6IEFyZ3MpIHtcblx0XHRzdXBlcih0eXBlLCB7ZGV0YWlsOiBhcmdzfSk7XG5cdH1cbn1cblxuZXhwb3J0IHR5cGUgRXZlbnRzVGFyZ2V0Q3N0cjxFdmVudHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4+ID0gQ29uc3RydWN0b3I8RXZlbnRzVGFyZ2V0PEV2ZW50cz4+O1xuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgaW50ZXJuYWwgdG9vbHMgPT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hSZXNvdXJjZShyZXNvdXJjZTogUmVzb3VyY2V8UHJvbWlzZTxSZXNvdXJjZT4pIHtcblxuXHRyZXNvdXJjZSA9IGF3YWl0IHJlc291cmNlO1xuXG5cdGlmKCAhIChyZXNvdXJjZSBpbnN0YW5jZW9mIFJlc3BvbnNlKSApXG5cdFx0cmVzb3VyY2UgPSBhd2FpdCBmZXRjaChyZXNvdXJjZSk7XG5cblx0cmV0dXJuIGF3YWl0IHJlc291cmNlLnRleHQoKTtcbn1cblxuXG5hc3luYyBmdW5jdGlvbiBfZmV0Y2hUZXh0KHVyaTogc3RyaW5nfFVSTCwgaXNMaXNzQXV0bzogYm9vbGVhbiA9IGZhbHNlKSB7XG5cblx0Y29uc3Qgb3B0aW9ucyA9IGlzTGlzc0F1dG9cblx0XHRcdFx0XHRcdD8ge2hlYWRlcnM6e1wibGlzcy1hdXRvXCI6IFwidHJ1ZVwifX1cblx0XHRcdFx0XHRcdDoge307XG5cblxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVyaSwgb3B0aW9ucyk7XG5cdGlmKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwIClcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXG5cdGlmKCBpc0xpc3NBdXRvICYmIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwic3RhdHVzXCIpISA9PT0gXCI0MDRcIiApXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblxuXHRyZXR1cm4gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xufVxuYXN5bmMgZnVuY3Rpb24gX2ltcG9ydCh1cmk6IHN0cmluZywgaXNMaXNzQXV0bzogYm9vbGVhbiA9IGZhbHNlKSB7XG5cblx0Ly8gdGVzdCBmb3IgdGhlIG1vZHVsZSBleGlzdGFuY2UuXG5cdGlmKGlzTGlzc0F1dG8gJiYgYXdhaXQgX2ZldGNoVGV4dCh1cmksIGlzTGlzc0F1dG8pID09PSB1bmRlZmluZWQgKVxuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cblx0dHJ5IHtcblx0XHRyZXR1cm4gKGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrSWdub3JlOiB0cnVlICovIHVyaSkpLmRlZmF1bHQ7XG5cdH0gY2F0Y2goZSkge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH1cbn1cblxuLy8gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81MTAwMDQ2MS9odG1sLWVsZW1lbnQtdGFnLW5hbWUtZnJvbS1jb25zdHJ1Y3RvclxuY29uc3QgSFRNTENMQVNTX1JFR0VYID0gIC9IVE1MKFxcdyspRWxlbWVudC87XG5jb25zdCBlbGVtZW50TmFtZUxvb2t1cFRhYmxlID0ge1xuICAgICdVTGlzdCc6ICd1bCcsXG4gICAgJ1RhYmxlQ2FwdGlvbic6ICdjYXB0aW9uJyxcbiAgICAnVGFibGVDZWxsJzogJ3RkJywgLy8gdGhcbiAgICAnVGFibGVDb2wnOiAnY29sJywgIC8vJ2NvbGdyb3VwJyxcbiAgICAnVGFibGVSb3cnOiAndHInLFxuICAgICdUYWJsZVNlY3Rpb24nOiAndGJvZHknLCAvL1sndGhlYWQnLCAndGJvZHknLCAndGZvb3QnXSxcbiAgICAnUXVvdGUnOiAncScsXG4gICAgJ1BhcmFncmFwaCc6ICdwJyxcbiAgICAnT0xpc3QnOiAnb2wnLFxuICAgICdNb2QnOiAnaW5zJywgLy8sICdkZWwnXSxcbiAgICAnTWVkaWEnOiAndmlkZW8nLC8vICdhdWRpbyddLFxuICAgICdJbWFnZSc6ICdpbWcnLFxuICAgICdIZWFkaW5nJzogJ2gxJywgLy8sICdoMicsICdoMycsICdoNCcsICdoNScsICdoNiddLFxuICAgICdEaXJlY3RvcnknOiAnZGlyJyxcbiAgICAnRExpc3QnOiAnZGwnLFxuICAgICdBbmNob3InOiAnYSdcbiAgfTtcbmZ1bmN0aW9uIF9lbGVtZW50MnRhZ25hbWUoQ2xhc3M6IHR5cGVvZiBIVE1MRWxlbWVudCk6IHN0cmluZ3xudWxsIHtcblxuXHRpZiggQ2xhc3MgPT09IEhUTUxFbGVtZW50IClcblx0XHRyZXR1cm4gbnVsbDtcblx0XG5cdGxldCBodG1sdGFnID0gSFRNTENMQVNTX1JFR0VYLmV4ZWMoQ2xhc3MubmFtZSkhWzFdO1xuXHRyZXR1cm4gZWxlbWVudE5hbWVMb29rdXBUYWJsZVtodG1sdGFnIGFzIGtleW9mIHR5cGVvZiBlbGVtZW50TmFtZUxvb2t1cFRhYmxlXSA/PyBodG1sdGFnLnRvTG93ZXJDYXNlKClcbn0iLCJpbXBvcnQgTElTUyBmcm9tIFwiTElTU1wiO1xuaW1wb3J0IFwic3RydWN0L21lbnUudHNcIjtcblxuaW1wb3J0IFwic3RydWN0L2NhbGMvc2hlZXQudHNcIjtcbmltcG9ydCBcInN0cnVjdC9jYWxjL3Rvb2xiYXIudHNcIjtcbmltcG9ydCB7IENhbGNTaGVldCB9IGZyb20gXCJzdHJ1Y3QvY2FsYy9zaGVldC50c1wiO1xuaW1wb3J0IHsgQ2FsY1Rvb2xiYXIgfSBmcm9tIFwic3RydWN0L2NhbGMvdG9vbGJhci50c1wiO1xuaW1wb3J0IHsgRm9ybWF0cyB9IGZyb20gXCJzdHJ1Y3QvY2FsYy9mb3JtYXQudHNcIjtcblxuY29uc3Qgc2hlZXRfZm9ybWF0X2NvbnRlbnQgPSBhd2FpdCBMSVNTLnFzPENhbGNTaGVldD4oJyNzaGVldF9mb3JtYXRfY29udGVudCcpO1xuXG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRSYW5nZShcIkExOkYxXCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFtcbiAgICBcIlRhaWxsZVwiLCBcIkdyYXNcIiwgXCJJdGFsaXF1ZVwiLCBcIlNvdWxpZ27DqVwiLCBcIkNvdWxldXIgdGV4dGVcIiwgXCJDb3VsZXVyIGZvbmRcIlxuXVxuXG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRSYW5nZShcIkEyOkYyXCIpLmZvcm1hdChcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gXCJBXCI7XG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRSYW5nZShcIkEyXCIpLmZvcm1hdCh7Zm9udF9zaXplOiAnMTVwdCd9KTtcbnNoZWV0X2Zvcm1hdF9jb250ZW50LmdldFJhbmdlKFwiQjJcIikuZm9ybWF0KCdib2xkJyk7XG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRSYW5nZShcIkMyXCIpLmZvcm1hdCgnaXRhbGljJyk7XG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRSYW5nZShcIkQyXCIpLmZvcm1hdCgndW5kZXJsaW5lJyk7XG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRSYW5nZShcIkUyXCIpLmZvcm1hdCh7Zm9yZWdyb3VuZF9jb2xvcjogJ2JsdWUnfSk7XG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRSYW5nZShcIkYyXCIpLmZvcm1hdCh7YmFja2dyb3VuZF9jb2xvcjogJ3llbGxvdyd9KTtcblxuY29uc3Qgc2hlZXRfdG9vbGJhcl9mb3JtYXRfY29udGVudCA9IGF3YWl0IExJU1MucXM8Q2FsY1Rvb2xiYXI+KCcjc2hlZXRfdG9vbGJhcl9mb3JtYXRfY29udGVudCcpO1xuc2hlZXRfdG9vbGJhcl9mb3JtYXRfY29udGVudC5zeW5jVG8oc2hlZXRfZm9ybWF0X2NvbnRlbnQpO1xuc2hlZXRfdG9vbGJhcl9mb3JtYXRfY29udGVudC5kaXNhYmxlQWxsRXhjZXB0KFwiZm9udF9zaXplXCIsIFwiYm9sZFwiLCBcIml0YWxpY1wiLCBcInVuZGVybGluZVwiLCBcImZvcmVncm91bmRfY29sb3JcIiwgXCJiYWNrZ3JvdW5kX2NvbG9yXCIpO1xuXG57XG4gICAgY29uc3Qgc2hlZXRfYWxpZ24gPSBhd2FpdCBMSVNTLnFzPENhbGNTaGVldD4oJyNzaGVldF9hbGlnbicpO1xuXG4gICAgc2hlZXRfYWxpZ24uZ2V0UmFuZ2UoXCJCMTpFMVwiKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpLmNvbnRlbnQgPSBbXG4gICAgICAgIFwiSGF1dFwiLCBcIk1pbGlldVwiLCBcIkJhc1wiLCBcIkFqdXN0ZXJcIlxuICAgIF1cblxuICAgIHNoZWV0X2FsaWduLmdldFJhbmdlKFwiQTI6QTRcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiLCBcInZhbGlnbl9taWRkbGVcIikuY29udGVudCA9IFtcbiAgICAgICAgXCJHYXVjaGVcIiwgXCJDZW50cmVcIiwgXCJEcm9pdFwiXG4gICAgXVxuXG4gICAgc2hlZXRfYWxpZ24uZ2V0UmFuZ2UoXCJCMjpENFwiKS5jb250ZW50ID0gXCJBXCI7XG4gICAgc2hlZXRfYWxpZ24uZ2V0UmFuZ2UoXCJCMjpFMlwiKS5mb3JtYXQoXCJhbGlnbl9sZWZ0XCIpO1xuICAgIHNoZWV0X2FsaWduLmdldFJhbmdlKFwiQjM6RTNcIikuZm9ybWF0KCdhbGlnbl9jZW50ZXInKTtcbiAgICBzaGVldF9hbGlnbi5nZXRSYW5nZShcIkI0OkU0XCIpLmZvcm1hdCgnYWxpZ25fcmlnaHQnKTtcbiAgICBzaGVldF9hbGlnbi5nZXRSYW5nZShcIkIyOkI0XCIpLmZvcm1hdCgndmFsaWduX3RvcCcpO1xuICAgIHNoZWV0X2FsaWduLmdldFJhbmdlKFwiQzI6QzRcIikuZm9ybWF0KCd2YWxpZ25fbWlkZGxlJyk7XG4gICAgc2hlZXRfYWxpZ24uZ2V0UmFuZ2UoXCJEMjpENFwiKS5mb3JtYXQoJ3ZhbGlnbl9ib3R0b20nKTtcblxuICAgIHNoZWV0X2FsaWduLmdldFJhbmdlKFwiRTI6RTRcIikuZm9ybWF0KFwiYWp1c3RlclwiKS5jb250ZW50ID0gYEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFgO1xuXG4gICAgY29uc3Qgc2hlZXRfdG9vbGJhcl9hbGlnbiA9IGF3YWl0IExJU1MucXM8Q2FsY1Rvb2xiYXI+KCcjc2hlZXRfdG9vbGJhcl9hbGlnbicpO1xuICAgIHNoZWV0X3Rvb2xiYXJfYWxpZ24uc3luY1RvKHNoZWV0X2FsaWduKTtcbiAgICBzaGVldF90b29sYmFyX2FsaWduLmRpc2FibGVBbGxFeGNlcHQoXCJhbGlnbl9sZWZ0XCIsIFwiYWxpZ25fY2VudGVyXCIsIFwiYWxpZ25fcmlnaHRcIiwgXCJ2YWxpZ25fdG9wXCIsIFwidmFsaWduX21pZGRsZVwiLCBcInZhbGlnbl9ib3R0b21cIiwgXCJhanVzdGVyXCIpO1xufVxuXG57XG4gICAgY29uc3Qgc2hlZXQgPSBhd2FpdCBMSVNTLnFzPENhbGNTaGVldD4oJyNzaGVldF9mb3JtYXQnKTtcblxuICAgIHNoZWV0LmdldFJhbmdlKFwiQTE6RTFcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gW1xuICAgICAgICAxLCBcIk1vbm5haWVcIiwgXCJQb3VyY2VudFwiLCBcIk5vbWJyZVwiLCBcIkRhdGVcIlxuICAgIF07XG5cbiAgICBzaGVldC5nZXRSYW5nZShcIkEyOkE0XCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFtcbiAgICAgICAgXCJOb3JtYWxcIiwgXCIrMSBkZWNpbWFsXCIsIFwiLTEgZGVjaW1hbFwiXG4gICAgXTtcblxuICAgIHNoZWV0LmdldFJhbmdlKFwiQjI6RTRcIikuY29udGVudCA9IFwiPSRBJDFcIjtcbiAgICBzaGVldC5nZXRSYW5nZShcIkIyOkI0XCIpLmZvcm1hdChGb3JtYXRzLmV1cm9zKTtcbiAgICBzaGVldC5nZXRSYW5nZShcIkMyOkM0XCIpLmZvcm1hdChGb3JtYXRzLnBvdXJjZW50KTtcbiAgICBzaGVldC5nZXRSYW5nZShcIkQyOkQ0XCIpLmZvcm1hdChGb3JtYXRzLm51bWJlcik7XG4gICAgc2hlZXQuZ2V0UmFuZ2UoXCJFMjpFNFwiKS5mb3JtYXQoRm9ybWF0cy5kYXRlKTtcblxuICAgIHNoZWV0LmdldFJhbmdlKFwiQjM6RTNcIikuZm9ybWF0KHtwcmVjaXNpb246IDN9KTtcbiAgICBzaGVldC5nZXRSYW5nZShcIkI0OkU0XCIpLmZvcm1hdCh7cHJlY2lzaW9uOiAxfSk7XG5cbiAgICBjb25zdCBzaGVldF90b29sYmFyID0gYXdhaXQgTElTUy5xczxDYWxjVG9vbGJhcj4oJyNzaGVldF90b29sYmFyX2Zvcm1hdCcpO1xuICAgIHNoZWV0X3Rvb2xiYXIuc3luY1RvKHNoZWV0KTtcbiAgICBzaGVldF90b29sYmFyLmRpc2FibGVBbGxFeGNlcHQoXCJmb3JtYXRfbW9ubmFpZVwiLCBcImZvcm1hdF9wb3VyY2VudFwiLCBcImZvcm1hdF9uYlwiLCBcImZvcm1hdF9kYXRlXCIsIFwiZm9ybWF0X3plcm9fcDFcIiwgXCJmb3JtYXRfemVyb19tMVwiKTtcbn1cblxue1xuICAgIGNvbnN0IHNoZWV0ID0gYXdhaXQgTElTUy5xczxDYWxjU2hlZXQ+KCcjc2hlZXRfYm9yZHVyZXMnKTtcblxuICAgIHNoZWV0LmdldFJhbmdlKCdCMicpLmZvcm1hdCh7XG4gICAgICAgIGJvcmRlcl90b3A6IHRydWUsXG4gICAgICAgIGJvcmRlcl9ib3R0b206IHRydWUsXG4gICAgICAgIGJvcmRlcl9sZWZ0OiB0cnVlLFxuICAgICAgICBib3JkZXJfcmlnaHQ6IHRydWUsXG4gICAgICAgIGJvcmRlcl9jb2xvcjogJ3JlZCcsXG4gICAgfSlcblxuICAgIGNvbnN0IHNoZWV0X3Rvb2xiYXIgPSBhd2FpdCBMSVNTLnFzPENhbGNUb29sYmFyPignI3NoZWV0X3Rvb2xiYXJfYm9yZHVyZXMnKTtcbiAgICBzaGVldF90b29sYmFyLnN5bmNUbyhzaGVldCk7XG4gICAgc2hlZXRfdG9vbGJhci5kaXNhYmxlQWxsRXhjZXB0KFwiYm9yZGVyXCIsIFwiYm9yZGVyX2NvbG9yXCIpO1xufVxuXG5cbntcbiAgICBjb25zdCBzaGVldCA9IGF3YWl0IExJU1MucXM8Q2FsY1NoZWV0PignI3NoZWV0X3JldHJhaXRzJyk7XG5cbiAgICBzaGVldC5nZXRSYW5nZShcIkExOkIxXCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFtcbiAgICAgICAgXCJHYXVjaGVcIiwgXCJEcm9pdGVcIlxuICAgIF07XG5cbiAgICBzaGVldC5nZXRSYW5nZSgnQTI6QjUnKS5jb250ZW50ID0gXCJBXCI7XG4gICAgc2hlZXQuZ2V0UmFuZ2UoJ0EyOkE1JykuZm9ybWF0KFwiYWxpZ25fbGVmdFwiKTtcbiAgICBzaGVldC5nZXRSYW5nZSgnQjI6QjUnKS5mb3JtYXQoXCJhbGlnbl9yaWdodFwiKTtcblxuICAgIHNoZWV0LmdldFJhbmdlKCdBMzpCMycpLmZvcm1hdCh7aW5kZW50OiAxfSk7XG4gICAgc2hlZXQuZ2V0UmFuZ2UoJ0E0OkI0JykuZm9ybWF0KHtpbmRlbnQ6IDJ9KTtcbiAgICBzaGVldC5nZXRSYW5nZSgnQTU6QjUnKS5mb3JtYXQoe2luZGVudDogM30pO1xuXG4gICAgY29uc3Qgc2hlZXRfdG9vbGJhciA9IGF3YWl0IExJU1MucXM8Q2FsY1Rvb2xiYXI+KCcjc2hlZXRfdG9vbGJhcl9yZXRyYWl0cycpO1xuICAgIHNoZWV0X3Rvb2xiYXIuc3luY1RvKHNoZWV0KTtcbiAgICBzaGVldF90b29sYmFyLmRpc2FibGVBbGxFeGNlcHQoXCJyZXRyYWl0X3AxXCIsIFwicmV0cmFpdF9tMVwiKTtcbn1cblxuXG57XG4gICAgY29uc3Qgc2hlZXQgPSBhd2FpdCBMSVNTLnFzPENhbGNTaGVldD4oJyNzaGVldF9mdXNpb24nKTtcblxuICAgIHNoZWV0LmdldFJhbmdlKCdCMicpLmZvcm1hdCh7XG4gICAgICAgIHNwYW46IFsyLDJdLFxuICAgICAgICBhbGlnbl9jZW50ZXI6IHRydWUsXG4gICAgICAgIHZhbGlnbl9taWRkbGU6IHRydWVcbiAgICB9KS5jb250ZW50ID0gXCJBXCI7XG5cbiAgICBjb25zdCBzaGVldF90b29sYmFyID0gYXdhaXQgTElTUy5xczxDYWxjVG9vbGJhcj4oJyNzaGVldF90b29sYmFyX2Z1c2lvbicpO1xuICAgIHNoZWV0X3Rvb2xiYXIuc3luY1RvKHNoZWV0KTtcbiAgICBzaGVldF90b29sYmFyLmRpc2FibGVBbGxFeGNlcHQoXCJtZXJnZV9jZW50ZXJcIiwgXCJtZXJnZVwiLCBcInVubWVyZ2VcIik7XG59IiwiaW1wb3J0IHsgc3RyMmh0bWwgfSBmcm9tIFwic3RydWN0L3V0aWxzL3N0cjJodG1sXCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGxMaXN0IH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuZXhwb3J0IGNsYXNzIFJhbmdlT3ZlcmxheSBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcblxuICAgICNzaGVldDogQ2FsY1NoZWV0O1xuICAgICNyYW5nZTogc3RyaW5nfG51bGwgPSBudWxsO1xuICAgIHByb3RlY3RlZCBvdmVybGF5OiBIVE1MRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKHNoZWV0OiBDYWxjU2hlZXQsIC4uLmNsYXNzbGlzdDogc3RyaW5nW10pIHtcblxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuI3NoZWV0ID0gc2hlZXQ7XG4gICAgICAgIHRoaXMuI3NoZWV0Lmhvc3QuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vdmVybGF5ID0gc3RyMmh0bWwoYDxkaXYgY2xhc3M9J292ZXJsYXknPjwvZGl2PmApO1xuICAgICAgICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2xpc3QpO1xuXG4gICAgICAgIHNoZWV0LmNvbnRlbnQuYXBwZW5kKCB0aGlzLm92ZXJsYXkgKTtcbiAgICB9XG5cbiAgICBzZXRSYW5nZShyYW5nZTogQ2VsbExpc3R8bnVsbCkge1xuICAgICAgICB0aGlzLiNyYW5nZSA9IHJhbmdlID09PSBudWxsID8gbnVsbCA6IHJhbmdlLnBsYWdlX25hbWUhO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRSZWN0KC4uLnJlY3Q6IHJlYWRvbmx5IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdKSB7XG4gICAgICAgIHJldHVybiByZWN0O1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcblxuICAgICAgICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiLCB0aGlzLiNyYW5nZSA9PT0gbnVsbCk7XG5cbiAgICAgICAgaWYoIHRoaXMuI3JhbmdlID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5nZXRSZWN0KCAuLi50aGlzLiNzaGVldC5nZXRSZWN0KCB0aGlzLiNzaGVldC5nZXRSYW5nZSh0aGlzLiNyYW5nZSkgKSApO1xuICAgICAgICB0aGlzLiNzaGVldC5zZXRSZWN0KHRoaXMub3ZlcmxheSwgcmVjdCApO1xuICAgIH1cblxuICAgIG92ZXJyaWRlIGFkZEV2ZW50TGlzdGVuZXIodHlwZTogc3RyaW5nLCBjYWxsYmFjazogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCB8IG51bGwsIG9wdGlvbnM/OiBBZGRFdmVudExpc3RlbmVyT3B0aW9ucyB8IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgb3ZlcnJpZGUgcmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlOiBzdHJpbmcsIGNhbGxiYWNrOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0IHwgbnVsbCwgb3B0aW9ucz86IEV2ZW50TGlzdGVuZXJPcHRpb25zIHwgYm9vbGVhbik6IHZvaWQge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMub3ZlcmxheS5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGb3JtdWxhUmVmIGV4dGVuZHMgUmFuZ2VPdmVybGF5IHtcblxuICAgIGNvbnN0cnVjdG9yKHNoZWV0OiBDYWxjU2hlZXQpIHtcbiAgICAgICAgc3VwZXIoc2hlZXQsIFwicmFuZ2VfaGlnaGxpZ2h0XCIpO1xuICAgIH1cblxuICAgICNjdXJfY29sb3IgPSAwO1xuICAgIHNldENvbG9yKGNvbG9yX2lkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoYGhpZ2hsaWdodF8ke3RoaXMuI2N1cl9jb2xvcn1gKTsgXG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKGBoaWdobGlnaHRfJHtjb2xvcl9pZH1gKTtcbiAgICAgICAgdGhpcy4jY3VyX2NvbG9yID0gY29sb3JfaWQ7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVjb3B5SGFuZGxlIGV4dGVuZHMgUmFuZ2VPdmVybGF5IHtcblxuICAgIGNvbnN0cnVjdG9yKHNoZWV0OiBDYWxjU2hlZXQpIHtcbiAgICAgICAgc3VwZXIoc2hlZXQsIFwicmVjb3B5XCIpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBnZXRSZWN0KHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gW3grdy0yLCB5K2gtMiwgNSwgNV0gYXMgY29uc3Q7XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgRm9ybXVsYSB9IGZyb20gXCIuL2Zvcm11bGFfcGFyc2VyXCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGwsIENlbGxMaXN0LCBSYXdDb250ZW50VHlwZSB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbmV4cG9ydCBjbGFzcyBGb3JtYXRNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBzaGVldC5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXY6IEtleWJvYXJkRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgaWYoICEgZXYuY3RybEtleSApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnYicpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KFwiYm9sZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdpJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJpdGFsaWNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAndScpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KFwidW5kZXJsaW5lXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ2wnKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcImFsaWduX2xlZnRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAncicpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KFwiYWxpZ25fcmlnaHRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnZScpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KFwiYWxpZ25fY2VudGVyXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJzQnICYmIGV2LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChGb3JtYXRzLmV1cm9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICc1JyAmJiBldi5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoRm9ybWF0cy5wb3VyY2VudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnMScgJiYgZXYuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KEZvcm1hdHMubnVtYmVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoY2hhbmdlZCkge1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICAgIC8qIFRPRE8gbGlzdGVuICovXG5cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbG9hdDJEYXRlKGZsb2F0OiBudW1iZXIpIHtcblxuICAgIGxldCBjb250ZW50ID0gbmV3IERhdGUoXCIxODk5LTEyLTMwXCIpO1xuXG4gICAgY29udGVudC5zZXREYXRlKCBjb250ZW50LmdldERhdGUoKSArIGZsb2F0KTtcblxuICAgIHJldHVybiBjb250ZW50O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRhdGUyRmxvYXQoZGF0ZTogRGF0ZSkge1xuICAgIGNvbnN0IGJlZyA9IG5ldyBEYXRlKFwiMTg5OS0xMi0zMFwiKTtcbiAgICByZXR1cm4gKygoZGF0ZS5nZXRUaW1lKCkgLSBiZWcuZ2V0VGltZSgpKSAvICgyNCozNjAwKjEwMDApKS50b0ZpeGVkKDcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UmF3KHB0aGlzOiBDZWxsLCB2YWx1ZSA9IHB0aGlzLnJhd0NvbnRlbnQpIHtcbiAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBGb3JtdWxhKVxuICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgICByZXR1cm4gRm9ybWF0cy5kZWZhdWx0LmNhbGwocHRoaXMsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGNvbnN0IEZvcm1hdHMgPSB7XG5cbiAgICBkZWZhdWx0OiBmdW5jdGlvbih0aGlzOiBDZWxsfG51bGwsIHZhbHVlID0gdGhpcz8ucmF3Q29udGVudCkge1xuXG4gICAgICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIEZvcm11bGEpXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmNhY2hlZFZhbHVlKCk7XG5cbiAgICAgICAgY29uc3QgcHJlYyA9ICsodGhpcz8uZ2V0QXR0cmlidXRlKCdwcmVjaXNpb24nKSA/PyAyKTtcblxuICAgICAgICBpZiggdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG5cbiAgICAgICAgICAgIGlmKCB0aGlzPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpID09PSBcInBvdXJjZW50XCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAkeysoICgrdmFsdWUpKjEwMCkudG9QcmVjaXNpb24oNyl9YC5yZXBsYWNlKCcuJywgJywnKSArIFwiJVwiO1xuXG4gICAgICAgICAgICByZXR1cm4gYCR7K3ZhbHVlLnRvUHJlY2lzaW9uKDcpfWAucmVwbGFjZSgnLicsICcsJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggdHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIilcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA/ICdWUkFJJyA6ICdGQVVYJztcblxuICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWUhO1xuICAgIH0sXG4gICAgbnVtYmVyOiBmdW5jdGlvbih0aGlzOkNlbGwsIHZhbHVlID0gdGhpcy5yYXdDb250ZW50KSB7XG5cbiAgICAgICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRm9ybXVsYSlcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuY2FjaGVkVmFsdWUoKTtcblxuICAgICAgICBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG5cbiAgICAgICAgaWYodmFsdWUgaW5zdGFuY2VvZiBEYXRlKVxuICAgICAgICAgICAgdmFsdWUgPSBkYXRlMkZsb2F0KHZhbHVlKTtcblxuICAgICAgICBpZiggdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIikgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIsIFwibnVtYmVyXCIpO1xuXG4gICAgICAgICAgICBpZiggISAodGhpcy5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSkgKVxuICAgICAgICAgICAgICAgIENhbGNTaGVldC5nZXRTaGVldEZyb21DZWxsKHRoaXMpLmdldFJhbmdlKHRoaXMpLmNvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZWMgPSArKHRoaXMuZ2V0QXR0cmlidXRlKCdwcmVjaXNpb24nKSA/PyAyKTtcblxuICAgICAgICByZXR1cm4gdmFsdWUudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XG4gICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHByZWMsXG4gICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNcbiAgICAgICAgICAgIH0pO1xuICAgIH0sXG4gICAgcG91cmNlbnQ6IGZ1bmN0aW9uKHRoaXM6Q2VsbCwgdmFsdWUgPSB0aGlzLnJhd0NvbnRlbnQpIHtcblxuICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBGb3JtdWxhKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5jYWNoZWRWYWx1ZSgpO1xuXG4gICAgICAgIGlmKHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgaWYodmFsdWUgaW5zdGFuY2VvZiBEYXRlKVxuICAgICAgICAgICAgdmFsdWUgPSBkYXRlMkZsb2F0KHZhbHVlKTtcblxuICAgICAgICBpZiggdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIikgIT09IFwicG91cmNlbnRcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIiwgXCJwb3VyY2VudFwiKTtcbiAgICAgICAgICAgIGlmKCAhICh0aGlzLnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBGb3JtdWxhKSApXG4gICAgICAgICAgICAgICAgQ2FsY1NoZWV0LmdldFNoZWV0RnJvbUNlbGwodGhpcykuZ2V0UmFuZ2UodGhpcykuY29udGVudCA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJlYyA9ICsodGhpcy5nZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicpID8/IDIpO1xuXG4gICAgICAgIHJldHVybiAodmFsdWUgKiAxMDApLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjLFxuICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjXG4gICAgICAgICAgICB9KSArICclJztcbiAgICB9LFxuICAgIGRhdGU6IGZ1bmN0aW9uKHRoaXM6Q2VsbCwgdmFsdWUgPSB0aGlzLnJhd0NvbnRlbnQpIHtcbiAgICAgICAgXG4gICAgICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIEZvcm11bGEpXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmNhY2hlZFZhbHVlKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgaWYodmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgaWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcblxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtdHlwZVwiLCBcImRhdGVcIik7XG5cbiAgICAgICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSApIHtcbiAgICAgICAgICAgIGxldCBkYXRlID0gdmFsdWUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIik7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5zbGljZSgwLCA2KSArIGRhdGUuc2xpY2UoOCk7XG4gICAgICAgIH0gaWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZmxvYXQyRGF0ZSh2YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmKCAhICh0aGlzLnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBGb3JtdWxhKSApXG4gICAgICAgICAgICAgICAgQ2FsY1NoZWV0LmdldFNoZWV0RnJvbUNlbGwodGhpcykuZ2V0UmFuZ2UoIHRoaXMgKS5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGRhdGUgPSBjb250ZW50LnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUZSXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUuc2xpY2UoMCwgNikgKyBkYXRlLnNsaWNlKDgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgZXVyb3M6IGZ1bmN0aW9uKHRoaXM6Q2VsbCwgdmFsdWUgPSB0aGlzLnJhd0NvbnRlbnQpIHtcblxuICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBGb3JtdWxhKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5jYWNoZWRWYWx1ZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgIGlmKHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcblxuICAgICAgICBpZih2YWx1ZSBpbnN0YW5jZW9mIERhdGUpXG4gICAgICAgICAgICB2YWx1ZSA9IGRhdGUyRmxvYXQodmFsdWUpO1xuXG4gICAgICAgIGlmKCB0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtdHlwZVwiKSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIiwgXCJudW1iZXJcIik7XG4gICAgICAgICAgICBpZiggISAodGhpcy5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSkgKVxuICAgICAgICAgICAgICAgIENhbGNTaGVldC5nZXRTaGVldEZyb21DZWxsKHRoaXMpLmdldFJhbmdlKHRoaXMpLmNvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZWMgPSArKHRoaXMuZ2V0QXR0cmlidXRlKCdwcmVjaXNpb24nKSA/PyAyKTtcblxuICAgICAgICByZXR1cm4gdmFsdWUudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XG4gICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHByZWMsXG4gICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNcbiAgICAgICAgICAgIH0pICsgJyDigqwnO1xuICAgIH0sXG59XG5cbmV4cG9ydCBjbGFzcyBGb3JtYXQge1xuXG4gICAgI2Zvcm1hdDogUmVjb3JkPHN0cmluZywgYW55PjtcblxuICAgIGNvbnN0cnVjdG9yKGZvcm1hdDogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgICAgICB0aGlzLiNmb3JtYXQgPSBmb3JtYXQ7XG4gICAgfVxuXG4gICAgYXBwbHlUbyhjZWxsOiBDZWxsfENlbGxMaXN0KSB7XG5cbiAgICAgICAgaWYoIGNlbGwgaW5zdGFuY2VvZiBDZWxsTGlzdCkge1xuXG4gICAgICAgICAgICBmb3IobGV0IGMgb2YgY2VsbC5jZWxscylcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5VG8oYyk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgbmFtZSBpbiB0aGlzLiNmb3JtYXQpIHtcbiAgICAgICAgICAgIGxldCB2YWwgPSB0aGlzLiNmb3JtYXRbbmFtZV07XG5cbiAgICAgICAgICAgIGlmKG5hbWUgPT09ICdmb3JtYXQnKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggdmFsID09PSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY2VsbC5mb3JtYXQgPSBGb3JtYXRzLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBjZWxsLmZvcm1hdCgpOyAvL1RPRE86IGlmIGZjdFxuICAgIFxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjZWxsLmZvcm1hdCA9IHZhbDtcbiAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gY2VsbC5mb3JtYXQoIGNlbGwucmF3Q29udGVudCk7IC8vVE9ETzogaWYgZmN0XG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYobmFtZSA9PT0gJ3ByZWNpc2lvbicpIHtcbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgncHJlY2lzaW9uJywgdmFsKTtcbiAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gY2VsbC5mb3JtYXQ/LiggY2VsbC5yYXdDb250ZW50KTsgLy9UT0RPOiBpZiBmY3RcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIG5hbWUgPT09ICdzcGFuJyApIHtcblxuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hlZXQgPSBDYWxjU2hlZXQuZ2V0U2hlZXRGcm9tQ2VsbChjZWxsKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiggdmFsWzBdID09PSAxICYmIHZhbFsxXSA9PT0gMSkgeyAvLyB1bm1lcmdlXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHIgPSArKGNlbGwuZ2V0QXR0cmlidXRlKCdyb3dzcGFuJykgPz8gMCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjID0gKyhjZWxsLmdldEF0dHJpYnV0ZSgnY29sc3BhbicpID8/IDApO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByOyArK2kpXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgYzsgKytqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gc2hlZXQucmVsYXRpdmVUbyhjZWxsLCBpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGFyZ2V0LmNlbGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgncm93c3BhbicpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgnY29sc3BhbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdyb3dzcGFuJywgYCR7dmFsWzBdfWApO1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgYCR7dmFsWzFdfWApO1xuXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHZhbFswXTsgKytpKVxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdmFsWzFdOyArK2opIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGkgPT09IDAgJiYgaiA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gc2hlZXQucmVsYXRpdmVUbyhjZWxsLCBpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jZWxsID0gY2VsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCB0eXBlb2YgdmFsID09PSBcImJvb2xlYW5cIikge1xuXG4gICAgICAgICAgICAgICAgaWYoIG5hbWUuc3RhcnRzV2l0aCgnYWxpZ25fJykgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYWxpZ25fbGVmdCcpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2FsaWduX2NlbnRlcicpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2FsaWduX3JpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCBuYW1lLnN0YXJ0c1dpdGgoJ3ZhbGlnbl8nKSApIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZ25fdG9wJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWduX21pZGRsZScpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlnbl9ib3R0b20nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUobmFtZSwgdmFsKTtcblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjZWxsLnN0eWxlLnNldFByb3BlcnR5KGAtLSR7bmFtZX1gLCB2YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UHJvcGVydHkobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNmb3JtYXRbbmFtZV07XG4gICAgfVxuICAgIGhhc1Byb3BlcnR5KG5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmFtZSBpbiB0aGlzLiNmb3JtYXQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGV4dHJhY3RGb3JtYXQoY2VsbDogQ2VsbHxDZWxsTGlzdCk6IEZvcm1hdCB7XG4gICAgICAgIFxuICAgICAgICBpZiggY2VsbCBpbnN0YW5jZW9mIENlbGxMaXN0KSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gY2VsbC5jZWxscztcblxuICAgICAgICAgICAgbGV0IGZvcm1hdCA9IEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzWzBdKTtcblxuICAgICAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IGNlbGxzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGYyID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHNbaV0pO1xuXG4gICAgICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gZm9ybWF0LiNmb3JtYXQpXG4gICAgICAgICAgICAgICAgICAgIGlmKCAhIChrZXkgaW4gZjIuI2Zvcm1hdCkgfHwgZjIuI2Zvcm1hdFtrZXldICE9PSBmb3JtYXQuI2Zvcm1hdFtrZXldIClcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBmb3JtYXQuI2Zvcm1hdFtrZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgZm9ybWF0ID0gT2JqZWN0LmZyb21FbnRyaWVzPGFueT4oIFsuLi5jZWxsLmNsYXNzTGlzdC52YWx1ZXMoKV0ubWFwKGUgPT4gW2UsIHRydWVdKSApO1xuICAgICAgICBcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNlbGwuc3R5bGUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBuYW1lID0gY2VsbC5zdHlsZS5pdGVtKGkpO1xuICAgICAgICAgICAgaWYoICEgbmFtZS5zdGFydHNXaXRoKCctLScpIClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIGZvcm1hdFtuYW1lLnNsaWNlKDIpXSA9IGNlbGwuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbHNwYW4gPSArKGNlbGwuZ2V0QXR0cmlidXRlKCdjb2xzcGFuJykgPz8gMSk7XG4gICAgICAgIGNvbnN0IHJvd3NwYW4gPSArKGNlbGwuZ2V0QXR0cmlidXRlKCdyb3dzcGFuJykgPz8gMSk7XG5cbiAgICAgICAgaWYoIGNvbHNwYW4gPiAxIHx8IHJvd3NwYW4gPiAxIClcbiAgICAgICAgICAgIGZvcm1hdC5zcGFuID0gWyByb3dzcGFuLCBjb2xzcGFuIF07XG5cbiAgICAgICAgaWYoICEgKFwiZm9udF9zaXplXCIgaW4gZm9ybWF0KSApXG4gICAgICAgICAgICBmb3JtYXRbJ2ZvbnRfc2l6ZSddID0gJzEwcHQnO1xuXG4gICAgICAgIGlmKCBcImZvcm1hdFwiIGluIGNlbGwpXG4gICAgICAgICAgICBmb3JtYXQuZm9ybWF0ID0gY2VsbC5mb3JtYXQ7XG5cbiAgICAgICAgaWYoIGNlbGwuaGFzQXR0cmlidXRlKCdwcmVjaXNpb24nKSApXG4gICAgICAgICAgICBmb3JtYXQucHJlY2lzaW9uID0gY2VsbC5nZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicpO1xuXG4gICAgICAgIHJldHVybiBuZXcgRm9ybWF0KGZvcm1hdCk7XG4gICAgfVxufSIsIi8vVE9ETzogd2VicGFjayBjb25maWcuLi5cbmltcG9ydCBMSVNTIGZyb20gXCIuLi8uLi8uLi9saWJzL0xJU1NcIjtcbmltcG9ydCB7IGZvcm1hdFJhdywgRm9ybWF0cyB9IGZyb20gXCIuL2Zvcm1hdFwiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0LCBDZWxsIH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuY29uc3QgY3NzID0gYFxuICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAmIHByZSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xuICAgICAgICAgICAgbWluLWhlaWdodDogY2FsYyggMXJlbSArIDhweCArIDJweCApO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB0O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMaWJlcmF0aW9uIFNhbnMnO1xuICAgICAgICB9XG4gICAgfVxuYDtcblxuXG5leHBvcnQgY2xhc3MgQ2FsY0Zvcm11bGEgZXh0ZW5kcyBMSVNTKHtcbiAgICBjc3Ncbn0pIHtcblxuICAgICNpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xuICAgICNzaGVldCAgITogQ2FsY1NoZWV0O1xuICAgICNjdXJfY2VsbDogQ2VsbHxudWxsID0gbnVsbDtcbiAgICAjb25JbnB1dDogKGV2OiBFdmVudCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoIHRoaXMuI2lucHV0ICk7XG5cbiAgICAgICAgdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmKCB0aGlzLiNjdXJfY2VsbCA9PT0gbnVsbCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAvL3RoaXMuI3NoZWV0LmN1cnNvci5jb250ZW50ID0gdGhpcy4jaW5wdXQudGV4dENvbnRlbnQhO1xuICAgICAgICAgICAgdGhpcy4jc2hlZXQuc3RhdGVzLmNlbGxfZWRpdC5zdGF0ZSA9IG51bGw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmKCB0aGlzLiNjdXJfY2VsbCA9PT0gbnVsbCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLiNzaGVldC5zdGF0ZXMuY2VsbF9lZGl0LnN0YXRlID0gdGhpcy4jY3VyX2NlbGw7XG4gICAgICAgICAgICAvL3RoaXMuI2N1cl9jZWxsIS50ZXh0Q29udGVudCA9IHRoaXMuI2lucHV0LnRleHRDb250ZW50ITtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiggdGhpcy4jY3VyX2NlbGwgPT09IG51bGwgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwhLnRleHRDb250ZW50ID0gZm9ybWF0UmF3KHRoaXMuI2N1cl9jZWxsLCB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCEgKTtcbiAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudCgnaW5wdXQnLCB7ZGV0YWlsOiB0cnVlfSkgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jb25JbnB1dCA9IChldjogRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBpZiggZXYuZGV0YWlsID09PSB0cnVlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gZm9ybWF0UmF3KCB0aGlzLiNjdXJfY2VsbCEsIHRoaXMuI2N1cl9jZWxsIS50ZXh0Q29udGVudCEgKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzeW5jVG8oc2hlZXQ6IENhbGNTaGVldCkge1xuXG4gICAgICAgIHRoaXMuI3NoZWV0ID0gc2hlZXQ7XG4gICAgICAgIGNvbnN0IGN1cnNvciA9IHRoaXMuI3NoZWV0LmN1cnNvcjtcblxuICAgICAgICBzaGVldC5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3VwZGF0ZScsICgpID0+IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gZm9ybWF0UmF3KGN1cnNvci5maXJzdENlbGwgKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjdXJzb3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IGN1cnNvci5jZWxscztcblxuICAgICAgICAgICAgdGhpcy4jaW5wdXQudG9nZ2xlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAhIHNoZWV0LmlzUk8gKTtcblxuICAgICAgICAgICAgaWYoIGNlbGxzLmxlbmd0aCA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgaWYoIHRoaXMuI2N1cl9jZWxsICE9PSBudWxsIClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLiNvbklucHV0KTtcbiAgICAgICAgICAgICAgICB0aGlzLiNjdXJfY2VsbCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiNjdXJfY2VsbCA9IGNlbGxzWzBdO1xuICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLiNvbklucHV0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy4jaW5wdXQudGV4dENvbnRlbnQgPSBmb3JtYXRSYXcoIHRoaXMuI2N1cl9jZWxsICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5MSVNTLmRlZmluZSgnY2FsYy1mb3JtdWxhJywgQ2FsY0Zvcm11bGEpOyIsImltcG9ydCB7IGRhdGUyRmxvYXQsIEZvcm1hdHMgfSBmcm9tIFwiLi9mb3JtYXRcIjtcbmltcG9ydCB7IENhbGNTaGVldCwgVmFsdWVUeXBlIH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuZXhwb3J0IGNsYXNzIEZvcm11bGEge1xuXG4gICAgI3N0cjogc3RyaW5nO1xuICAgICNleGVjOiAoc2hlZXQ6IENhbGNTaGVldCkgPT4gVmFsdWVUeXBlO1xuICAgICNyYW5nZXM6IFRva2VuW107XG5cbiAgICAjY2FjaGU6IFZhbHVlVHlwZXxudWxsID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHN0cjogc3RyaW5nLCBleGVjOiAoc2hlZXQ6IENhbGNTaGVldCkgPT4gVmFsdWVUeXBlLCByYW5nZXNfdG9rZW46IFRva2VuW10gPSBbXSkge1xuXG4gICAgICAgIHRoaXMuI3N0ciA9IHN0cjtcbiAgICAgICAgdGhpcy4jZXhlYyA9IGV4ZWM7XG4gICAgICAgIHRoaXMuI3JhbmdlcyA9IHJhbmdlc190b2tlbjtcbiAgICB9XG4gICAgXG4gICAgcmVsYXRpdmVUbyggc2hlZXQ6IENhbGNTaGVldCwgZHJvdzogbnVtYmVyLCBkY29sOiBudW1iZXIpIHtcbiAgICAgICAgXG4gICAgICAgIGxldCBuZXdfcmFuZ2VzID0gdGhpcy4jcmFuZ2VzLm1hcChyID0+IHtcblxuICAgICAgICAgICAgLy9UT0RPOiBpZiByYW5nZS4uLlxuICAgICAgICAgICAgbGV0IHBvcyA9IFsuLi5zaGVldC5jZWxsUG9zKCBzaGVldC5nZXRSYW5nZShyLnZhbHVlKS5maXJzdENlbGwgKV07XG4gICAgXG4gICAgICAgICAgICBpZiggci52YWx1ZS5sYXN0SW5kZXhPZignJCcpIDw9IDAgKVxuICAgICAgICAgICAgICAgIHBvc1swXSArPSBkcm93O1xuICAgICAgICAgICAgaWYoIHIudmFsdWVbMF0gIT09ICckJyApXG4gICAgICAgICAgICAgICAgcG9zWzFdICs9IGRjb2w7XG5cbiAgICAgICAgICAgIHJldHVybiBgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1K3Bvc1sxXS0xKX0ke3Bvc1swXX1gO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbmV3X2Zvcm11bGEgPSBcIlwiO1xuXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy4jcmFuZ2VzLmxlbmd0aDsgKytpKSB7XG5cbiAgICAgICAgICAgIG5ld19mb3JtdWxhICs9IHRoaXMuI3N0ci5zbGljZShvZmZzZXQsIHRoaXMuI3Jhbmdlc1tpXS5iZWcpO1xuICAgICAgICAgICAgbmV3X2Zvcm11bGEgKz0gbmV3X3Jhbmdlc1tpXTtcblxuICAgICAgICAgICAgb2Zmc2V0ID0gdGhpcy4jcmFuZ2VzW2ldLmVuZDtcbiAgICAgICAgfVxuICAgICAgICBuZXdfZm9ybXVsYSArPSB0aGlzLiNzdHIuc2xpY2Uob2Zmc2V0KTtcbiAgICAgICAgXG4gICAgICAgIC8vY2FuIGJlIG9wdGltaXplZC4uLlxuICAgICAgICByZXR1cm4gcGFyc2VfZm9ybXVsYSggbmV3X2Zvcm11bGEgKTtcbiAgICB9XG5cbiAgICBnZXQgcmFuZ2VzVG9rZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNyYW5nZXM7XG4gICAgfVxuXG4gICAgcmVzZXRDYWNoZSgpIHtcbiAgICAgICAgdGhpcy4jY2FjaGUgPSBudWxsO1xuICAgIH1cblxuICAgIGNhY2hlZFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY2FjaGUhO1xuICAgIH1cblxuICAgIGV4ZWMoc2hlZXQ6IENhbGNTaGVldCkge1xuXG4gICAgICAgIGlmKCB0aGlzLiNjYWNoZSAhPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiNjYWNoZTtcblxuICAgICAgICByZXR1cm4gdGhpcy4jY2FjaGUgPSB0aGlzLiNleGVjKHNoZWV0KTtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3N0cjtcbiAgICB9XG59XG5cbnR5cGUgVG9rZW4gPSB7XG4gICAgYmVnOiBudW1iZXIsXG4gICAgZW5kOiBudW1iZXIsXG4gICAgdmFsdWU6IHN0cmluZyxcbiAgICB0eXBlOiBcInN0cmluZ1wifFwibnVtYmVyXCJ8XCJjYWxsXCJ8XCJyYW5nZVwifFwib3BcIlxufVxuXG5cbmZ1bmN0aW9uIGV4dHJhY3RUb2tlbihzdHI6IHN0cmluZywgb2Zmc2V0OiBudW1iZXIpIHtcblxuICAgIHdoaWxlKCBbJyAnLCAnXFxuJywgJ1xcdCddLmluY2x1ZGVzKHN0cltvZmZzZXRdKSApIC8vIGlnbm9yZSB3aGl0ZXNwYWNlc1xuICAgICAgICArK29mZnNldDtcblxuICAgIGxldCB0b2tlbjogUGFydGlhbDxUb2tlbj4gPSB7XG4gICAgICAgIGJlZzogb2Zmc2V0XG4gICAgfTtcblxuICAgIGlmKHN0cltvZmZzZXRdID09PSAnXCInKSB7XG4gICAgICAgIHRva2VuLnR5cGUgPSBcInN0cmluZ1wiO1xuICAgICAgICB3aGlsZSggc3RyWysrb2Zmc2V0XSAhPT0gJ1wiJyAmJiBzdHJbb2Zmc2V0LTFdICE9PSAnXFxcXCcpIHtcbiAgICAgICAgICAgIGlmKG9mZnNldCsxID49IHN0ci5sZW5ndGggKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRm9ybXVsYSBwYXJzaW5nIGVycm9yJyk7XG4gICAgICAgIH1cbiAgICAgICAgKytvZmZzZXQ7XG4gICAgfSBlbHNlIGlmKCBzdHJbb2Zmc2V0XSA9PT0gJywnIHx8IChzdHJbb2Zmc2V0XSA+PSAnMCcgJiYgc3RyW29mZnNldF0gPD0gJzknKSApIHtcbiAgICAgICAgdG9rZW4udHlwZSA9IFwibnVtYmVyXCI7XG4gICAgICAgIGxldCBoYXNDb21tYSA9IGZhbHNlO1xuICAgICAgICB3aGlsZSggc3RyW29mZnNldF0gPT09ICcsJyB8fCBzdHJbb2Zmc2V0XSA+PSAnMCcgJiYgc3RyW29mZnNldF0gPD0gJzknICkge1xuXG4gICAgICAgICAgICBpZiggc3RyW29mZnNldF0gPT09ICcsJyApIHtcbiAgICAgICAgICAgICAgICBpZihoYXNDb21tYSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JtdWxhIHBhcnNpbmcgZXJyb3InKTtcbiAgICAgICAgICAgICAgICBoYXNDb21tYSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICsrb2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICB9IGVsc2UgaWYoIHN0cltvZmZzZXRdID09PSAnJCcgfHwgc3RyW29mZnNldF0gPj0gJ0EnICYmIHN0cltvZmZzZXRdIDw9ICdaJykgeyAvLyskXG4gICAgICAgIFxuICAgICAgICB3aGlsZSggb2Zmc2V0IDwgc3RyLmxlbmd0aFxuICAgICAgICAgICAgICAgICYmIChzdHJbb2Zmc2V0XSA9PT0gJyQnIHx8IHN0cltvZmZzZXRdID49ICdBJyAmJiBzdHJbb2Zmc2V0XSA8PSAnWidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBzdHJbb2Zmc2V0XSA+PSAnMCcgJiYgc3RyW29mZnNldF0gPD0gJzknXG4gICAgICAgICAgICAgICAgICAgICkgKVxuICAgICAgICAgICAgKytvZmZzZXQ7XG5cbiAgICAgICAgdG9rZW4udHlwZSA9IHN0cltvZmZzZXRdID09PSAnKCcgPyAnY2FsbCcgOiAncmFuZ2UnO1xuXG4gICAgICAgIGlmKCBzdHJbb2Zmc2V0XSA9PT0gJygnIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b2tlbi50eXBlID0gXCJvcFwiOyAvLyBvbmx5IG9uIGNoYXIgPz8/XG5cbiAgICAgICAgaWYoIHN0cltvZmZzZXQgKyAxXSA9PT0gJz0nKSAvLyA+PSAvIDw9XG4gICAgICAgICAgICArK29mZnNldDtcbiAgICAgICAgZWxzZSBpZiggc3RyW29mZnNldCArIDFdID09PSAnPicpIC8vIDw+XG4gICAgICAgICAgICArK29mZnNldDtcblxuICAgICAgICArK29mZnNldDtcbiAgICB9XG5cbiAgICB0b2tlbi5lbmQgPSBvZmZzZXQ7XG4gICAgdG9rZW4udmFsdWUgPSBzdHIuc2xpY2UodG9rZW4uYmVnLCB0b2tlbi5lbmQpO1xuXG4gICAgcmV0dXJuIHRva2VuIGFzIFJlcXVpcmVkPFRva2VuPjtcbn1cblxuY2xhc3MgTm9kZSB7XG5cbiAgICBjaGlsZHJlbjogTm9kZVtdO1xuICAgICNmY3Q6IChzaGVldDogQ2FsY1NoZWV0LCAuLi5hcmdzOihWYWx1ZVR5cGUpW10pID0+IFZhbHVlVHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKGZjdDogKHNoZWV0OiBDYWxjU2hlZXQsIC4uLmFyZ3M6KFZhbHVlVHlwZSlbXSkgPT4gVmFsdWVUeXBlLCAuLi5jaGlsZHJlbjogTm9kZVtdKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgaWYoY2hpbGRyZW4gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIldURlwiKTtcbiAgICAgICAgdGhpcy4jZmN0ID0gZmN0O1xuICAgIH1cblxuICAgIGV2YWwoc2hlZXQ6IENhbGNTaGVldCk6IFZhbHVlVHlwZSB7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSB0aGlzLmNoaWxkcmVuLm1hcCggYyA9PiBjLmV2YWwoc2hlZXQpICk7XG4gICAgICAgIHJldHVybiB0aGlzLiNmY3Qoc2hlZXQsIC4uLmFyZ3MgKTtcbiAgICB9XG4gICAgXG59XG5cbmZ1bmN0aW9uIHRvTnVtYmVyKGE6IHVua25vd24pOiBudW1iZXIge1xuXG4gICAgaWYoYSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gMDtcblxuICAgIGlmKCB0eXBlb2YgYSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgcmV0dXJuIE51bWJlcihhKTtcblxuICAgIGlmKCBhIGluc3RhbmNlb2YgRGF0ZSlcbiAgICAgICAgcmV0dXJuIGRhdGUyRmxvYXQoYSk7XG5cbiAgICByZXR1cm4gYSBhcyB1bmtub3duIGFzIG51bWJlcjtcbn1cblxuY29uc3Qgb3BfaW1wbCA9IHtcbiAgICAnJSc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24pID0+IHRvTnVtYmVyKGEpLzEwMCxcbiAgICAndS4rJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93bikgPT4gK3RvTnVtYmVyKGEpLFxuICAgICd1Li0nOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duKSA9PiAtdG9OdW1iZXIoYSksXG4gICAgJyonOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiB0b051bWJlcihhKSp0b051bWJlcihiKSxcbiAgICAnLyc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24sIGI6IHVua25vd24pID0+IHRvTnVtYmVyKGEpL3RvTnVtYmVyKGIpLFxuICAgICcrJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93biwgYjogdW5rbm93bikgPT4gdG9OdW1iZXIoYSkrdG9OdW1iZXIoYiksXG4gICAgJy0nOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiB0b051bWJlcihhKS10b051bWJlcihiKSxcbiAgICAnXic6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24sIGI6IHVua25vd24pID0+IE1hdGgucG93KHRvTnVtYmVyKGEpLHRvTnVtYmVyKGIpICksXG4gICAgJyYnOiAoXzogQ2FsY1NoZWV0LCBhOiBzdHJpbmcsIGI6IHN0cmluZykgPT4gYCR7Rm9ybWF0cy5kZWZhdWx0LmNhbGwobnVsbCwgYSl9JHtGb3JtYXRzLmRlZmF1bHQuY2FsbChudWxsLCBiKX1gLFxuICAgICc9JzogIChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhID09PSBiLFxuICAgICc8Pic6IChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhICE9PSBiLFxuICAgICc+JzogIChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhID4gYixcbiAgICAnPj0nOiAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSA+PSBiLFxuICAgICc8JzogIChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhIDwgYixcbiAgICAnPD0nOiAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSA8PSBiLFxufSBhcyBSZWNvcmQ8c3RyaW5nLCAoXzogQ2FsY1NoZWV0LCAuLi5hcmdzOlZhbHVlVHlwZVtdKSA9PiBWYWx1ZVR5cGU+O1xuXG4vLyBodHRwczovL2hlbHAubGlicmVvZmZpY2Uub3JnL2xhdGVzdC9lbi1VUy90ZXh0L3NjYWxjLzAxLzA0MDYwMTk5Lmh0bWxcbmNvbnN0IG9wX3ByaW8gPSBbXG4gICAgWyc6J10sIC8vIHJhbmdlXG4gICAgWychJ10sIC8vIHJhbmdlIGludGVyc2VjdGlvblxuICAgIFsnfiddLCAvLyByYW5nZSB1bmlvblxuICAgIFsndS4rJywgJ3UuLSddLCAvLyB1bmFyeSAtIGZyb20gcmlnaHQgdG8gbGVmdC4uLlxuICAgIFsnJSddLCAvLyBwb3N0Zml4LCAvMTAwXG4gICAgWydeJ10sIC8vIHBvd2VyXG4gICAgWycqJywgJy8nXSxcbiAgICBbJysnLCAnLSddLFxuICAgIFsnJiddLCAvLyBzdHJpbmcgY29uY2F0XG4gICAgWyc9JywgJzw+JywgJzwnLCAnPD0nLCAnPicsICc+PSddIC8vIGNvbXBhcmVcbl07XG5cbmxldCBvcHM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fTtcbmZvcihsZXQgaSA9IDA7IGkgPCBvcF9wcmlvLmxlbmd0aDsgKytpKVxuICAgIGZvcihsZXQgb3Agb2Ygb3BfcHJpb1tpXSApXG4gICAgICAgIG9wc1tvcF0gPSBpO1xuXG5mdW5jdGlvbiB0b2tlbmxpc3QyVHJlZSh0b2tlbnM6IFRva2VuW10pOiBOb2RlIHtcblxuICAgIGlmKCB0b2tlbnMubGVuZ3RoID09PSAxKSB7XG5cbiAgICAgICAgaWYoIHRva2Vuc1swXS50eXBlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBjb25zdCBuYiA9ICt0b2tlbnNbMF0udmFsdWUucmVwbGFjZSgnLCcsICcuJyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vZGUoICgpID0+IG5iKTtcbiAgICAgICAgfVxuICAgICAgICBpZiggdG9rZW5zWzBdLnR5cGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0ciA9IHRva2Vuc1swXS52YWx1ZS5zbGljZSgxLC0xKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTm9kZSggKCkgPT4gc3RyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiggdG9rZW5zWzBdLnR5cGUgPT09IFwicmFuZ2VcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBOb2RlKCAoc2hlZXQ6IENhbGNTaGVldCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IHJhdyA9IHNoZWV0LmdldFJhbmdlKHRva2Vuc1swXS52YWx1ZSkuZmlyc3RDZWxsLnJhd0NvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgICBpZiggcmF3IGluc3RhbmNlb2YgRm9ybXVsYSlcbiAgICAgICAgICAgICAgICAgICAgcmF3ID0gcmF3LmV4ZWMoc2hlZXQpOyAvLyBUT0RPOiBjYWNoZSByZXN1bHRcblxuICAgICAgICAgICAgICAgIHJldHVybiByYXcgYXMgVmFsdWVUeXBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiPz8/XCIpO1xuICAgIH1cblxuICAgIGlmKHRva2Vuc1swXS52YWx1ZSA9PT0gJygnICYmIHRva2Vuc1t0b2tlbnMubGVuZ3RoLTFdLnZhbHVlID09PSAnKScpXG4gICAgICAgIHJldHVybiB0b2tlbmxpc3QyVHJlZSh0b2tlbnMuc2xpY2UoMSwtMSkgKTtcblxuICAgIGxldCBjdXIgPSB7XG4gICAgICAgIHByaW9yaXR5OiBvcF9wcmlvLmxlbmd0aCxcbiAgICAgICAgaWR4ICAgICA6IC0xXG4gICAgfTtcblxuICAgIGZvcihsZXQgaSA9IHRva2Vucy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICBpZiggdG9rZW5zW2ldLnR5cGUgIT09IFwib3BcIiApIC8vIGNhbGwgbm90IGhhbmRsZWQgeWV0Li4uXG4gICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICBpZiggdG9rZW5zW2ldLnZhbHVlID09PSAnKScgKSB7IC8vIGdvIHRvIGZpcnN0ICcoJ1xuICAgICAgICAgICAgaSA9IHRva2Vucy5maW5kSW5kZXgoIHQgPT4gdC50eXBlID09PSAnb3AnICYmIHQudmFsdWUgPT09ICcoJyk7XG5cbiAgICAgICAgICAgIGlmKCBpID09PSAwKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLS1pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXNzZXJ0cyBpZiB1bmFyeSBvcC5cbiAgICAgICAgaWYoIHRva2Vuc1tpXS52YWx1ZSA9PT0gJy0nIHx8IHRva2Vuc1tpXS52YWx1ZSA9PT0gJysnICkge1xuXG4gICAgICAgICAgICBpZiggaSA9PT0gMCB8fCB0b2tlbnNbaS0xXS50eXBlID09PSBcIm9wXCIgKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB1X29wID0gYHUuJHt0b2tlbnNbaV0udmFsdWV9YDtcbiAgICAgICAgICAgICAgICB0b2tlbnNbaV0udmFsdWUgPSB1X29wO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gb3BzW3Vfb3BdO1xuXG4gICAgICAgICAgICAgICAgLy8gcHJpb3JpdHkgaXMgcmV2ZXJzZWQgKyBldmFsdWF0ZWQgZnJvbSByaWdodCB0byBsZWZ0LlxuICAgICAgICAgICAgICAgIGlmKCBwcmlvcml0eSA8PSBjdXIucHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VyLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgICAgIGN1ci5pZHggICAgICA9IGk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IG9wc1t0b2tlbnNbaV0udmFsdWVdO1xuXG4gICAgICAgIC8vIHByaW9yaXR5IGlzIHJldmVyc2VkLlxuICAgICAgICBpZiggcHJpb3JpdHkgPCBjdXIucHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGN1ci5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICAgICAgY3VyLmlkeCAgICAgID0gaTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKCBjdXIuaWR4ID09PSAtMSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCc/Pz8nKTtcblxuICAgIGxldCBvcF90b2tlbiA9IHRva2Vuc1tjdXIuaWR4XTtcbiAgICBpZiggb3BfdG9rZW4udmFsdWUgPT09ICclJyApIHtcbiAgICAgICAgY29uc3QgbGVmdCAgPSB0b2tlbnMuc2xpY2UoMCwgY3VyLmlkeCk7XG4gICAgICAgIGNvbnN0IG9wID0gb3BfaW1wbFtvcF90b2tlbi52YWx1ZSBhcyBrZXlvZiB0eXBlb2Ygb3BfaW1wbF07XG4gICAgICAgIHJldHVybiBuZXcgTm9kZShcbiAgICAgICAgICAgIG9wLFxuICAgICAgICAgICAgdG9rZW5saXN0MlRyZWUobGVmdClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiggb3BfdG9rZW4udmFsdWUgPT09ICd1Li0nIHx8ICBvcF90b2tlbi52YWx1ZSA9PT0gJ3UuKycgKSB7XG5cbiAgICAgICAgY29uc3QgcmlnaHQgID0gdG9rZW5zLnNsaWNlKGN1ci5pZHgrMSk7XG4gICAgICAgIGNvbnN0IG9wID0gb3BfaW1wbFtvcF90b2tlbi52YWx1ZSBhcyBrZXlvZiB0eXBlb2Ygb3BfaW1wbF07XG4gICAgICAgIHJldHVybiBuZXcgTm9kZShcbiAgICAgICAgICAgIG9wLFxuICAgICAgICAgICAgdG9rZW5saXN0MlRyZWUocmlnaHQpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgbGVmdCAgPSB0b2tlbnMuc2xpY2UoMCwgY3VyLmlkeCk7XG4gICAgY29uc3QgcmlnaHQgPSB0b2tlbnMuc2xpY2UoY3VyLmlkeCsxKTtcblxuICAgIGNvbnN0IG9wID0gb3BfaW1wbFtvcF90b2tlbi52YWx1ZSBhcyBrZXlvZiB0eXBlb2Ygb3BfaW1wbF07XG5cbiAgICByZXR1cm4gbmV3IE5vZGUoXG4gICAgICAgIG9wLFxuICAgICAgICB0b2tlbmxpc3QyVHJlZShsZWZ0KSxcbiAgICAgICAgdG9rZW5saXN0MlRyZWUocmlnaHQpXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlX2Zvcm11bGEoc3RyOnN0cmluZykge1xuXG4gICAgbGV0IG9mZnNldCA9IDE7XG4gICAgbGV0IHRva2VucyA9IG5ldyBBcnJheTxUb2tlbj4oKTtcblxuICAgIHdoaWxlKCBvZmZzZXQgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIGxldCBjdXJUb2tlbiA9IGV4dHJhY3RUb2tlbihzdHIsIG9mZnNldCk7XG4gICAgICAgIHRva2Vucy5wdXNoKCBjdXJUb2tlbiApO1xuICAgICAgICBvZmZzZXQgPSBjdXJUb2tlbi5lbmQ7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IHRva2VubGlzdDJUcmVlKHRva2VucykhO1xuXG4gICAgY29uc3QgcmFuZ2VzID0gdG9rZW5zLmZpbHRlcih0ID0+IHQudHlwZSA9PT0gXCJyYW5nZVwiICk7XG5cbiAgICByZXR1cm4gbmV3IEZvcm11bGEoc3RyLCAoc2hlZXQ6IENhbGNTaGVldCkgPT4gbm9kZS5ldmFsKHNoZWV0KSwgcmFuZ2VzICk7XG59IiwiLy9UT0RPOiB3ZWJwYWNrIGNvbmZpZy4uLlxuaW1wb3J0IExJU1MgZnJvbSBcIi4uLy4uLy4uL2xpYnMvTElTU1wiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0LCBDZWxsTGlzdCwgZGVmYXVsdEZvcm1hdCB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbi8vVE9ETzogc3ludGF4IGhpZ2hsaWdodCA7KVxuXG5jb25zdCBjc3MgPSBgXG4gICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYgcHJlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKCAxcmVtICsgOHB4ICsgMnB4ICk7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xpYmVyYXRpb24gU2Fucyc7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5leHBvcnQgY2xhc3MgUGxhZ2VGb3JtdWxhIGV4dGVuZHMgTElTUyh7XG4gICAgY3NzXG59KSB7XG5cbiAgICAjaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoIHRoaXMuI2lucHV0ICk7XG4gICAgICAgIHRoaXMuI2lucHV0LnRvZ2dsZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJyk7XG5cbiAgICAgICAgdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldikgPT4ge1xuICAgICAgICAgICAgaWYoZXYuY29kZSAhPT0gJ0VudGVyJylcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGV2LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLiNzaGVldC5nZXRDZWxscyh0aGlzLiNpbnB1dC50ZXh0Q29udGVudCEpLmNlbGxzO1xuXG4gICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5hZGQoIC4uLnNlbGVjdGVkICk7XG5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LmN1cnNvci5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy4jc2hlZXQuY3Vyc29yLmFkZCggc2VsZWN0ZWRbMF0gKTtcblxuICAgICAgICAgICAgdGhpcy4jaW5wdXQuYmx1cigpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vVE9ETy4uLi5cbiAgICAgICAgdGhpcy4jaW5wdXQudG9nZ2xlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAvKnRoaXMuI2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcblxuICAgICAgICB9KTsqL1xuICAgIH1cblxuICAgICNzaGVldCE6IENhbGNTaGVldDtcblxuICAgIHN5bmNUbyhzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcblxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBzaGVldC5zZWxlY3Rpb247XG5cbiAgICAgICAgc2VsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChfOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gc2VsZWN0aW9uLnBsYWdlX25hbWUgPz8gXCJcIjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5MSVNTLmRlZmluZSgnY2FsYy1wbGFnZScsIFBsYWdlRm9ybXVsYSk7IiwiaW1wb3J0IHsgUmFuZ2VPdmVybGF5IH0gZnJvbSBcIi4vUmFuZ2VPdmVybGF5XCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGwgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5leHBvcnQgY2xhc3MgUGxhZ2VTZWxlY3RvciB7XG5cbiAgICAjb3ZlcmxheXMgPSBuZXcgQXJyYXk8UmFuZ2VPdmVybGF5PigpO1xuICAgICNnZXRPdmVybGF5KGlkOiBudW1iZXIpIHtcbiAgICAgICAgd2hpbGUoaWQgPj0gdGhpcy4jb3ZlcmxheXMubGVuZ3RoKVxuICAgICAgICAgICAgdGhpcy4jb3ZlcmxheXMucHVzaCggbmV3IFJhbmdlT3ZlcmxheSh0aGlzLiNzaGVldCwgXCJzZWxlY3Rpb25faGlnaGxpZ2h0XCIpICk7XG4gICAgICAgIHJldHVybiB0aGlzLiNvdmVybGF5c1tpZF07XG4gICAgfVxuXG4gICAgI3VwZGF0ZVNlbGVjdGlvbigpIHtcblxuICAgICAgICBsZXQgc2VsZWN0ZWRfY2VsbHMgPSB0aGlzLiNzaGVldC5nZXRSYW5nZSggdGhpcy4jb3JpZ19wb3MsIHRoaXMuI2ZpbmFsX3BvcyApLmNlbGxzO1xuXG4gICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5jbGVhcigpOyAvLyB3ZSBhZGQgaXQuLi5cblxuICAgICAgICBpZiggdGhpcy4jaXNDdHJsICkge1xuXG4gICAgICAgICAgICAvLyByZXN0b3JlIGluaXRpYWwgc3RhdGUuLi5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5hZGQoLi4udGhpcy4jcHJldl9zZWxlY3Rpb24pO1xuXG4gICAgICAgICAgICAvL1RPRE8gb25seSBvcmlnX3RhcmdldC4uLlxuICAgICAgICAgICAgaWYodGhpcy4jc2hlZXQuc2VsZWN0aW9uLmhhcyggLi4uc2VsZWN0ZWRfY2VsbHMgKSApXG4gICAgICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLnJlbW92ZSggLi4uc2VsZWN0ZWRfY2VsbHMgKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uYWRkKCAuLi5zZWxlY3RlZF9jZWxscyApO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uYWRkKCAuLi5zZWxlY3RlZF9jZWxscyApO1xuXG4gICAgfVxuXG4gICAgI3VwZGF0ZVNlbGVjdGlvbkhpZ2hsaWdodCgpIHtcblxuICAgICAgICBjb25zdCBjZWxscyA9IHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5jZWxscztcbiAgICAgICAgZm9yKGxldCBvdmVybGF5IG9mIHRoaXMuI292ZXJsYXlzKVxuICAgICAgICAgICAgb3ZlcmxheS5zZXRSYW5nZShudWxsKTtcblxuICAgICAgICBpZiggY2VsbHMubGVuZ3RoID09PSAxICYmIHRoaXMuI3NoZWV0LmN1cnNvci5maXJzdENlbGwgPT09IGNlbGxzWzBdIClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICB0aGlzLiNnZXRPdmVybGF5KGkpLnNldFJhbmdlKCB0aGlzLiNzaGVldC5nZXRSYW5nZSggY2VsbHNbaV0gKSApO1xuICAgIH1cblxuICAgICNpc0N0cmwgICAgICAgICE6IGJvb2xlYW47XG4gICAgI3NoZWV0ICAgICAgICAgIDogQ2FsY1NoZWV0O1xuICAgICNvcmlnX3RhcmdldCAgICE6IEhUTUxFbGVtZW50O1xuICAgICNvcmlnX3BvcyAgICAgICE6IFtudW1iZXIsIG51bWJlcl07XG4gICAgI2ZpbmFsX3BvcyAgICAgITogW251bWJlciwgbnVtYmVyXTtcbiAgICAjcHJldl9zZWxlY3Rpb24hOiBDZWxsW107XG5cbiAgICAjZXYycG9zKGV2OiBNb3VzZUV2ZW50KTogW251bWJlcixudW1iZXJdIHtcblxuICAgICAgICBjb25zdCBjb2xzID0gWy4uLnRoaXMuI3NoZWV0LnRib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuXTtcbiAgICAgICAgbGV0IGNvbF9pZDtcbiAgICAgICAgZm9yKGNvbF9pZCA9IGNvbHMubGVuZ3RoLTE7IGNvbF9pZCA+PSAwOyAtLWNvbF9pZCkge1xuICAgICAgICAgICAgaWYoIGV2LmNsaWVudFggPj0gY29sc1tjb2xfaWRdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnggKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCByb3dzID0gWy4uLnRoaXMuI3NoZWV0LnRib2R5LmNoaWxkcmVuXS5tYXAoIGUgPT4gZS5jaGlsZHJlblswXSApO1xuICAgICAgICBsZXQgcm93X2lkO1xuICAgICAgICBmb3Iocm93X2lkID0gcm93cy5sZW5ndGgtMTsgcm93X2lkID49IDA7IC0tcm93X2lkKSB7XG4gICAgICAgICAgICBpZiggZXYuY2xpZW50WSA+PSByb3dzW3Jvd19pZF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSApXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW3Jvd19pZCwgY29sX2lkXTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcblxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpITtcblxuICAgICAgICBjb25zdCBvbl9tb3VzZV9tb3ZlID0gKGV2OiBNb3VzZUV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuI2ZpbmFsX3BvcyA9IHRoaXMuI2V2MnBvcyhldik7XG5cbiAgICAgICAgICAgIHRoaXMuI3VwZGF0ZVNlbGVjdGlvbigpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHNoZWV0LmN1cnNvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24ucmVwbGFjZUFsbCggc2hlZXQuZ2V0VmlzaWJsZUNlbGwoc2hlZXQuY3Vyc29yKSApO1xuICAgICAgICB9KTtcblxuICAgICAgICBzaGVldC5zZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jdXBkYXRlU2VsZWN0aW9uSGlnaGxpZ2h0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgc2hlZXQuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldjpNb3VzZUV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIGlmKCBzaGVldC5zdGF0ZXMuY2VsbF9lZGl0LnN0YXRlID09PSB0YXJnZXQgKSAgLy8gYSBjZWxsIGJlaW5nIGVkaXRlZC5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiggISBbXCJUSFwiLCBcIlREXCJdLmluY2x1ZGVzKCB0YXJnZXQudGFnTmFtZSApICkvLyAuLi5cbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSA9PT0gXCJUSFwiICYmIHRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJcIiApIHsgLy8gbW91c2Vtb3ZlIGRvZXMgbm90aGluZy5cblxuICAgICAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5jbGVhcigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZiA9IGBBMToke3RoaXMuI3NoZWV0LnBvczJyZWYodGhpcy4jc2hlZXQubmJSb3dzLCB0aGlzLiNzaGVldC5uYkNvbHMpfWA7XG4gICAgICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmFkZCggLi4udGhpcy4jc2hlZXQuZ2V0Q2VsbHMocmVmKS5jZWxscyApO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiNpc0N0cmwgICAgICAgICA9IGV2LmN0cmxLZXk7XG4gICAgICAgICAgICB0aGlzLiNvcmlnX3RhcmdldCAgICA9IHRhcmdldDtcbiAgICAgICAgICAgIHRoaXMuI29yaWdfcG9zICAgICAgID0gdGhpcy4jZXYycG9zKGV2KTsgLy8gQ2FuIGJlIFRILi4uXG4gICAgICAgICAgICB0aGlzLiNmaW5hbF9wb3MgICAgICA9IHRoaXMuI29yaWdfcG9zO1xuICAgICAgICAgICAgdGhpcy4jcHJldl9zZWxlY3Rpb24gPSBzaGVldC5zZWxlY3Rpb24uY2VsbHMuc2xpY2UoKTtcblxuICAgICAgICAgICAgdGhpcy4jdXBkYXRlU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uX21vdXNlX21vdmUpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1haW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25fbW91c2VfbW92ZSk7XG4gICAgICAgICAgICB9LCB7b25jZTogdHJ1ZX0pO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCIvL1RPRE86IHdlYnBhY2sgY29uZmlnLi4uXG5pbXBvcnQgTElTUyBmcm9tIFwiLi4vLi4vLi4vbGlicy9MSVNTXCI7XG5cbi8vQHRzLWlnbm9yZVxuaW1wb3J0IGNzcyBmcm9tIFwiISFyYXctbG9hZGVyIS4vaW5kZXguY3NzXCI7XG5cbmV4cG9ydCB0eXBlIFZhbHVlVHlwZSA9IHN0cmluZ3xudW1iZXJ8RGF0ZXxib29sZWFuO1xuZXhwb3J0IHR5cGUgUmF3Q29udGVudFR5cGUgPSBWYWx1ZVR5cGV8Rm9ybXVsYTtcblxuZXhwb3J0IHR5cGUgQ2VsbCA9IEhUTUxUYWJsZUNlbGxFbGVtZW50ICYge1xuICAgIHJhd0NvbnRlbnQ6IFJhd0NvbnRlbnRUeXBlLFxuICAgIGZvcm1hdDogKHRoaXM6IENlbGwsIHY/OiBudW1iZXJ8c3RyaW5nfERhdGUpID0+IHN0cmluZyxcbiAgICBpc19ybzogYm9vbGVhbixcbiAgICBjZWxsID86IENlbGxcbn07XG5cbmZ1bmN0aW9uIGlzQWN0aXZlKHRhcmdldDogSFRNTEVsZW1lbnQpIHtcblxuICAgIHJldHVybiB0YXJnZXQubWF0Y2hlcygnOmZvY3VzJyk7XG4vKlxuICAgIGxldCBhY3RpdmUgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgd2hpbGUoIGFjdGl2ZT8uc2hhZG93Um9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgKVxuICAgICAgICBhY3RpdmUgPSBhY3RpdmUuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50O1xuXG4gICAgcmV0dXJuIGFjdGl2ZSA9PT0gdGFyZ2V0OyovXG59XG5cbmZ1bmN0aW9uIG9uSW5wdXQoZXY6IEV2ZW50KSB7XG5cbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMTIzNDc0MS9wbGFjZS1jYXJldC1iYWNrLXdoZXJlLWl0LXdhcy1hZnRlci1jaGFuZ2luZy1pbm5lcmh0bWwtb2YtYS1jb250ZW50ZWRpdGFibGUtZWxlbVxuXG4gICAgbGV0IHJyYW5nZSA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSEuZ2V0UmFuZ2VBdCgwKTtcbiAgICBsZXQgYyA9IHJyYW5nZS5zdGFydE9mZnNldDtcblxuICAgIC8vbGV0IHRleHQgPSBcIlwiO1xuICAgIGxldCBsZW5ndGggPSAwO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXJnZXQuY2hpbGROb2Rlcy5sZW5ndGg7ICsraSkge1xuXG4gICAgICAgIGxldCBjaGlsZCA9IHRhcmdldC5jaGlsZE5vZGVzW2ldO1xuICAgICAgICBpZiggY2hpbGQubm9kZVR5cGUgIT09IE5vZGUuVEVYVF9OT0RFKVxuICAgICAgICAgICAgY2hpbGQgPSBjaGlsZC5jaGlsZE5vZGVzWzBdO1xuXG4gICAgICAgIGlmKCBycmFuZ2Uuc3RhcnRDb250YWluZXIgPT09IGNoaWxkICkge1xuICAgICAgICAgICAgLy90ZXh0ICs9IHAuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudCEuc2xpY2UoMCwgYyk7XG4gICAgICAgICAgICBsZW5ndGggKz0gYztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vdGV4dCArPSBwLmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQ7XG4gICAgICAgIGxlbmd0aCArPSB0YXJnZXQuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudCEubGVuZ3RoO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBpbm5lckhUTUxcbiAgICB0YXJnZXQudGV4dENvbnRlbnQgPSB0YXJnZXQudGV4dENvbnRlbnQ7XG5cbiAgICBsZXQgY2hpbGQhOiBDaGlsZE5vZGU7XG4gICAgbGV0IGk7XG4gICAgZm9yKGkgPSAwOyBpIDwgdGFyZ2V0LmNoaWxkTm9kZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYoIGxlbmd0aCA8PSB0YXJnZXQuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudCEubGVuZ3RoICkge1xuICAgICAgICAgICAgY2hpbGQgPSB0YXJnZXQuY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGxlbmd0aCAtPSB0YXJnZXQuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudCEubGVuZ3RoO1xuICAgIH1cblxuICAgIGlmKCBjaGlsZC5ub2RlVHlwZSAhPT0gTm9kZS5URVhUX05PREUpXG4gICAgICAgIGNoaWxkID0gY2hpbGQuY2hpbGROb2Rlc1swXTtcblxuICAgIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgdmFyIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSE7XG5cbiAgICByYW5nZS5zZXRTdGFydChjaGlsZCwgbGVuZ3RoKTtcbiAgICByYW5nZS5jb2xsYXBzZSh0cnVlKTtcbiAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgc2VsLmFkZFJhbmdlKHJhbmdlKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VJbnB1dCggc3RyOiBzdHJpbmcgKTogUmF3Q29udGVudFR5cGUge1xuXG4gICAgaWYoc3RyID09PSAnVlJBSScpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIGlmKHN0ciA9PT0gJ0ZBVVgnKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBpZihzdHIudHJpbSgpID09PSAnJylcbiAgICAgICAgcmV0dXJuIHN0cjtcblxuICAgIGlmKHN0clswXSA9PT0gXCI9XCIpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlX2Zvcm11bGEoc3RyKTtcbiAgICB9XG5cbiAgICBsZXQgdGVzdF9udW1iZXIgPSBOdW1iZXIoIHN0ci5yZXBsYWNlKCcsJywgJy4nKS5yZXBsYWNlQWxsKCdcXHhBMCcsICcnKSApO1xuICAgIGlmKCAhIE51bWJlci5pc05hTiggdGVzdF9udW1iZXIgKSApXG4gICAgICAgIHJldHVybiB0ZXN0X251bWJlcjtcbiAgICBpZiggc3RyW3N0ci5sZW5ndGgtMV0gPT09IFwiJVwiIHx8IHN0cltzdHIubGVuZ3RoLTFdID09PSBcIuKCrFwiICkge1xuICAgICAgICB0ZXN0X251bWJlciA9IE51bWJlciggc3RyLnNsaWNlKDAsLTEpLnJlcGxhY2VBbGwoJ1xceEEwJywgJycpLnJlcGxhY2UoJywnLCAnLicpICk7XG4gICAgICAgIGlmKCAhIE51bWJlci5pc05hTiggdGVzdF9udW1iZXIgKSApIHtcbiAgICAgICAgICAgIGlmKCBzdHJbc3RyLmxlbmd0aC0xXSA9PT0gXCLigqxcIiApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlc3RfbnVtYmVyO1xuICAgICAgICAgICAgcmV0dXJuICsodGVzdF9udW1iZXIgLyAxMDApLnRvUHJlY2lzaW9uKDcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFydHMgPSBzdHIuc3BsaXQoJy8nKTtcbiAgICBpZihwYXJ0cy5sZW5ndGggPD0gMykge1xuXG4gICAgICAgIGxldCB0ZXN0X2RhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgICtwYXJ0c1syXSA/PyBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICArcGFydHNbMV0tMSxcbiAgICAgICAgICAgICtwYXJ0c1swXVxuICAgICAgICApO1xuXG4gICAgICAgIGlmKCB0ZXN0X2RhdGUudG9TdHJpbmcoKSAhPT0gXCJJbnZhbGlkIERhdGVcIiApXG4gICAgICAgICAgICByZXR1cm4gdGVzdF9kYXRlO1xuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG59XG5cbmNsYXNzIFN0YXRlPFQ+IHtcblxuICAgICNzdGF0ZSA6IFR8bnVsbCA9IG51bGw7XG4gICAgI3RhcmdldDogRXZlbnRUYXJnZXQ7XG4gICAgI25hbWUgIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IodGFyZ2V0OiBFdmVudFRhcmdldCwgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuI3RhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy4jbmFtZSAgID0gbmFtZTtcbiAgICB9XG5cbiAgICBnZXQgc3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzdGF0ZTtcbiAgICB9XG5cbiAgICBzZXQgc3RhdGUoc3RhdGU6IFR8bnVsbCkge1xuXG4gICAgICAgIGlmKCB0aGlzLiNzdGF0ZSA9PT0gc3RhdGUpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgbGV0IHByZXZfc3RhdGUgPSB0aGlzLiNzdGF0ZTtcbiAgICAgICAgdGhpcy4jc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgXG5cbiAgICAgICAgaWYoIHByZXZfc3RhdGUgIT09IG51bGwpXG4gICAgICAgICAgICB0aGlzLiN0YXJnZXQuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KGAke3RoaXMuI25hbWV9X2VuZGAsIHtkZXRhaWw6IHByZXZfc3RhdGV9KSApOyAgICAgICAgICAgIFxuXG4gICAgICAgIGlmKCBzdGF0ZSAhPT0gbnVsbCApXG4gICAgICAgICAgICB0aGlzLiN0YXJnZXQuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KGAke3RoaXMuICNuYW1lfV9zdGFydGAsIHtkZXRhaWw6IHN0YXRlfSkgKTtcbiAgICB9XG59XG5cbmNvbnN0IFN0YXRlcyA9IHtcbiAgICBcImNlbGxfZWRpdFwiOiBTdGF0ZTxDZWxsPixcbiAgICBcInJlY29weVwiICAgOiBTdGF0ZTxDZWxsTGlzdD5cbiB9IGFzIGNvbnN0O1xuXG5leHBvcnQgY2xhc3MgQ2FsY1NoZWV0IGV4dGVuZHMgTElTUyh7XG4gICAgY3NzLFxuICAgIGF0dHJpYnV0ZXM6IFtcImNvbHNcIiwgXCJyb3dzXCIsIFwicm9cIl1cbn0pIHtcblxuICAgIHN0YXRlcyA9IE9iamVjdC5mcm9tRW50cmllcyggT2JqZWN0LmVudHJpZXMoU3RhdGVzKS5tYXAoIChbbixzXSkgPT4gW24sIG5ldyBzKHRoaXMuaG9zdCwgbildIGFzIGNvbnN0ICkpO1xuXG5cbiAgICAvL1RPRE86IFJPIHByb3AgP1xuICAgICNjdXJzb3IgICAgPSBuZXcgQ2VsbExpc3QodGhpcywgW10pO1xuICAgICNzZWxlY3Rpb246IENlbGxMaXN0ID0gbmV3IENlbGxMaXN0KHRoaXMsIFtdKTtcbiAgICAjcGxhZ2Vfc2VsZWN0b3IgPSBuZXcgUGxhZ2VTZWxlY3Rvcih0aGlzKTtcblxuICAgICNmb3JtYXRfbW5nciA9IG5ldyBGb3JtYXRNYW5hZ2VyKHRoaXMpO1xuXG4gICAgc3RhdGljIGdldFNoZWV0RnJvbUNlbGwoY2VsbDogQ2VsbCkge1xuICAgICAgICByZXR1cm4gTElTUy5nZXRMSVNTU3luYzxDYWxjU2hlZXQ+KCAoY2VsbC5nZXRSb290Tm9kZSgpIGFzIFNoYWRvd1Jvb3QpLmhvc3QgKTtcbiAgICB9XG5cbiAgICBnZXQgY3Vyc29yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY3Vyc29yO1xuICAgIH1cbiAgICBnZXQgc2VsZWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jc2VsZWN0aW9uO1xuICAgIH1cblxuICAgIG92ZXJyaWRlIGdldCBjb250ZW50KCkge1xuICAgICAgICByZXR1cm4gc3VwZXIuY29udGVudDtcbiAgICB9XG5cbiAgICBzZXRSZWN0KHRhcmdldDogSFRNTEVsZW1lbnQsIFt4LHksdyxoXTogcmVhZG9ubHkgW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0pIHtcblxuICAgICAgICBjb25zdCB0Ymxfb2Zmc2V0ID0gdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJykhLm9mZnNldFRvcDtcblxuICAgICAgICB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcgICAsIGAke3RibF9vZmZzZXQgKyB5fXB4YCk7XG4gICAgICAgIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eSgnaGVpZ2h0JywgYCR7aH1weGApO1xuXG4gICAgICAgIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eSgnbGVmdCcgICAsIGAke3h9cHhgKTtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KCd3aWR0aCcsIGAke3d9cHhgKTtcblxuICAgIH1cblxuICAgIGdldFJlY3QoY2VsbHM6IENlbGxMaXN0fENlbGxbXSkge1xuXG4gICAgICAgIGNlbGxzID0gXCJjZWxsc1wiIGluIGNlbGxzID8gY2VsbHMuY2VsbHMgOiBjZWxscztcblxuICAgICAgICBjb25zdCBzdGFydCA9IGNlbGxzWzBdO1xuICAgICAgICBjb25zdCBlbmQgICA9IGNlbGxzW2NlbGxzLmxlbmd0aC0xXTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBzdGFydC5vZmZzZXRMZWZ0LFxuICAgICAgICAgICAgc3RhcnQub2Zmc2V0VG9wLFxuICAgICAgICAgICAgZW5kLm9mZnNldExlZnQgKyBlbmQuY2xpZW50V2lkdGggLSBzdGFydC5vZmZzZXRMZWZ0ICsgMSxcbiAgICAgICAgICAgIGVuZC5vZmZzZXRUb3AgKyBlbmQuY2xpZW50SGVpZ2h0IC0gc3RhcnQub2Zmc2V0VG9wICsgMVxuICAgICAgICBdIGFzIGNvbnN0O1xuICAgIH1cblxuICAgIHJlbGF0aXZlVG8oY2VsbDogQ2VsbCwgcm93X2RpZmY6IG51bWJlciwgY29sX2RpZmY6IG51bWJlcikge1xuICAgICAgICBcbiAgICAgICAgbGV0IFtyb3csIGNvbF0gPSB0aGlzLmNlbGxQb3MoY2VsbCk7XG5cbiAgICAgICAgcm93ICs9IHJvd19kaWZmO1xuICAgICAgICBjb2wgKz0gY29sX2RpZmY7XG5cbiAgICAgICAgLy8gZm9yIG5vcm1hbCA6IGdldCBzdHVjayBpbnNpZGUgZ3JpZC5cbiAgICAgICAgaWYoIHJvdyA8IDEpXG4gICAgICAgICAgICByb3cgPSAxO1xuICAgICAgICBpZiggcm93ID49IHRoaXMuI3Rib2R5LmNoaWxkcmVuLmxlbmd0aCApXG4gICAgICAgICAgICByb3cgPSB0aGlzLiN0Ym9keS5jaGlsZHJlbi5sZW5ndGggLSAxO1xuXG4gICAgICAgIGlmKCBjb2wgPCAxKVxuICAgICAgICAgICAgY29sID0gMTtcbiAgICAgICAgaWYoIGNvbCA+PSB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuLmxlbmd0aCApXG4gICAgICAgICAgICBjb2wgPSB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW5bY29sXSBhcyBDZWxsO1xuICAgIH1cblxuICAgIC8vVE9ETzogMkQuLi5cbiAgICAjcGFzdGViaW46IENlbGxMaXN0IHwgbnVsbCA9IG51bGw7XG5cbiAgICAjZm9ybXVsYV9yZWZzID0gbmV3IEFycmF5PEZvcm11bGFSZWY+KCk7XG4gICAgI2dldEZvcm11bGFSZWYoaTogbnVtYmVyKSB7XG4gICAgICAgIHdoaWxlKCBpID49IHRoaXMuI2Zvcm11bGFfcmVmcy5sZW5ndGgpXG4gICAgICAgICAgICB0aGlzLiNmb3JtdWxhX3JlZnMucHVzaCggbmV3IEZvcm11bGFSZWYodGhpcykgKTtcblxuICAgICAgICByZXR1cm4gdGhpcy4jZm9ybXVsYV9yZWZzW2ldO1xuICAgIH1cbiAgICAjY2xlYXJGb3JtdWxhUmVmcygpIHtcbiAgICAgICAgZm9yKGxldCByZWYgb2YgdGhpcy4jZm9ybXVsYV9yZWZzKVxuICAgICAgICAgICAgcmVmLnNldFJhbmdlKG51bGwpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGNvbnN0IGN1cnNvciA9IG5ldyBSYW5nZU92ZXJsYXkodGhpcywgXCJjdXJzb3JcIik7XG4gICAgICAgIGNvbnN0IHJlY29weSA9IG5ldyBSZWNvcHlIYW5kbGUodGhpcyk7XG4gICAgICAgIGNvbnN0IGNvcHkgICA9IG5ldyBSYW5nZU92ZXJsYXkodGhpcywgXCJjb3B5X2hpZ2hsaWdodFwiKTtcblxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikhO1xuXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdjZWxsX2VkaXRfZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jY2xlYXJGb3JtdWxhUmVmcygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbGFzdF9yZWNvcHlfdGFyZ2V0OiBDZWxsfG51bGwgPSBudWxsO1xuICAgICAgICBsZXQgbGFzdF9yZWNvcHlfZGlyICAgOiBbbnVtYmVyLCBudW1iZXJdfG51bGwgPSBudWxsXG5cbiAgICAgICAgY29uc3Qgb25fcmVjb3B5X21vdmUgPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgbGV0IGNlbGxzID0gKHRoaXMuc3RhdGVzLnJlY29weS5zdGF0ZSBhcyBDZWxsTGlzdCkuY2VsbHM7XG4gICAgICAgICAgICBjb25zdCBzcmMgPSBjZWxsc1tjZWxscy5sZW5ndGgtMV07XG5cbiAgICAgICAgICAgIGxldCBwb3MgPSBzcmMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAgIGxldCBkX3B4ID0gZXYuY2xpZW50WCAtIChwb3MueCArIHBvcy53aWR0aCAvMik7XG4gICAgICAgICAgICBsZXQgZF9weSA9IGV2LmNsaWVudFkgLSAocG9zLnkgKyBwb3MuaGVpZ2h0LzIpO1xuXG4gICAgICAgICAgICBsZXQgZF94ID0gMDtcbiAgICAgICAgICAgIGxldCBkX3kgPSBNYXRoLnNpZ24oZF9weSk7XG5cbiAgICAgICAgICAgIGlmKCBNYXRoLmFicyhkX3B4KSA+IE1hdGguYWJzKGRfcHkpICkge1xuICAgICAgICAgICAgICAgIGRfeCA9IE1hdGguc2lnbihkX3B4KTtcbiAgICAgICAgICAgICAgICBkX3kgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcHJldiA9IHNyYztcbiAgICAgICAgICAgIGxldCBjdXIgID0gc3JjO1xuXG4gICAgICAgICAgICBsZXQgZGlmZl94LCBkaWZmX3k7XG5cbiAgICAgICAgICAgIGRvIHtcblxuICAgICAgICAgICAgICAgIHByZXY9IGN1cjtcbiAgICAgICAgICAgICAgICBjdXIgPSB0aGlzLnJlbGF0aXZlVG8ocHJldiwgZF95LCBkX3gpO1xuXG4gICAgICAgICAgICAgICAgaWYoIGN1ciA9PT0gcHJldilcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBsZXQgcG9zX2N1ciA9IGN1ci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICBkaWZmX3ggPSBldi5jbGllbnRYIC0gKHBvc19jdXIueCArIHBvc19jdXIud2lkdGggLzIpO1xuICAgICAgICAgICAgICAgIGRpZmZfeSA9IGV2LmNsaWVudFkgLSAocG9zX2N1ci55ICsgcG9zX2N1ci5oZWlnaHQvMik7XG5cbiAgICAgICAgICAgIH0gd2hpbGUoIGRpZmZfeCAqIGRfeCArIGRpZmZfeSAqIGRfeSA+IDAgKTtcblxuICAgICAgICAgICAgbGFzdF9yZWNvcHlfdGFyZ2V0ID0gcHJldjtcbiAgICAgICAgICAgIGxhc3RfcmVjb3B5X2RpciAgICA9IFtkX3gsZF95XTtcblxuICAgICAgICAgICAgbGV0IGJlZyA9IHNyYztcbiAgICAgICAgICAgIGxldCBlbmQgPSBwcmV2O1xuICAgICAgICAgICAgaWYoIHNyYy5vZmZzZXRMZWZ0ID4gcHJldi5vZmZzZXRMZWZ0IHx8IHNyYy5vZmZzZXRUb3AgPiBwcmV2Lm9mZnNldFRvcCApXG4gICAgICAgICAgICAgICAgW2JlZywgZW5kXSA9IFtlbmQsIGJlZ107XG5cbiAgICAgICAgICAgIC8vVE9ETzogaGlnaGxpZ2h0Li4uXG4gICAgICAgICAgICB0aGlzLiNjbGVhckZvcm11bGFSZWZzKCk7XG4gICAgICAgICAgICB0aGlzLiNnZXRGb3JtdWxhUmVmKDEpLnNldFJhbmdlKCB0aGlzLmdldFJhbmdlKGJlZywgZW5kKSApO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlY29weS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldikgPT4ge1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdGhpcy5zdGF0ZXMucmVjb3B5LnN0YXRlID0gdGhpcy4jc2VsZWN0aW9uO1xuXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25fcmVjb3B5X21vdmUpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IFtkX3gsIGRfeV0gPSAgbGFzdF9yZWNvcHlfZGlyITtcblxuICAgICAgICAgICAgICAgIGxldCBjZWxscyA9ICh0aGlzLnN0YXRlcy5yZWNvcHkuc3RhdGUgYXMgQ2VsbExpc3QpLmNlbGxzO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IGNlbGxzW2NlbGxzLmxlbmd0aC0xXTtcblxuICAgICAgICAgICAgICAgIGxldCBuYiA9IDA7XG5cbiAgICAgICAgICAgICAgICBpZiggbGFzdF9yZWNvcHlfdGFyZ2V0ICE9PSBzcmMpIHsgLy8gY29weS4uLlxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXIgPSBzcmM7XG4gICAgICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICsrbmI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ciA9IHRoaXMucmVsYXRpdmVUbyhjdXIsIGRfeSwgZF94KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQ6IFJhd0NvbnRlbnRUeXBlfENlbGwgPSBzcmM7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggdHlwZW9mIGNvbnRlbnQucmF3Q29udGVudCA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gKHNyYy5yYXdDb250ZW50IGFzIG51bWJlcikgKyBuYiooZF94ICsgZF95KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoIGNvbnRlbnQucmF3Q29udGVudCBpbnN0YW5jZW9mIERhdGUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IG5ldyBEYXRlKHNyYy5yYXdDb250ZW50IGFzIERhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuc2V0RGF0ZSggY29udGVudC5nZXREYXRlKCkgKyBuYiooZF94ICsgZF95KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDZWxsTGlzdCh0aGlzLCBbY3VyXSkuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXIuY2xhc3NOYW1lID0gc3JjLmNsYXNzTmFtZTsgLy9UT0RPOiBmb3JtYXQuLi5cblxuXG4gICAgICAgICAgICAgICAgICAgIH0gd2hpbGUoIGN1ciE9PSBsYXN0X3JlY29weV90YXJnZXQgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLiNjbGVhckZvcm11bGFSZWZzKCk7IC8vIHJlY29weVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVzLnJlY29weS5zdGF0ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGFzdF9yZWNvcHlfdGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBsYXN0X3JlY29weV9kaXIgICAgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIG1haW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbl9yZWNvcHlfbW92ZSk7XG5cbiAgICAgICAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdyZWNvcHlfc3RhcnQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgncmVjb3B5Jyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcigncmVjb3B5X2VuZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QucmVtb3ZlKCdyZWNvcHknKTtcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLiNjdXJzb3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGlmKCB0aGlzLiNjdXJzb3IubGVuZ3RoICE9PSAxIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1cnNvciBoYXMgaW52YWxpZCBudW1iZXIgb2YgY2VsbHMnKTtcblxuICAgICAgICAgICAgY3Vyc29yLnNldFJhbmdlKCBuZXcgQ2VsbExpc3QodGhpcywgW3RoaXMuZ2V0VmlzaWJsZUNlbGwodGhpcy4jY3Vyc29yKV0pICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI3NlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXYpID0+IHtcblxuICAgICAgICAgICAgZm9yKCBsZXQgY2VsbCBvZiB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZ2hsaWdodCcpIClcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpO1xuXG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IHRoaXMuI3NlbGVjdGlvbi5jZWxscztcblxuICAgICAgICAgICAgaWYoIGNlbGxzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGZvciggbGV0IGNlbGwgb2YgY2VsbHMgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggY2VsbHMubGVuZ3RoICE9PSAxKVxuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSB0aGlzLiNjZWxsUG9zKGNlbGwpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3Rib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuW2NvbF0uY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlY29weS5zZXRSYW5nZSh0aGlzLiNzZWxlY3Rpb24pO1xuXG4gICAgICAgICAgICAvLyBvbmx5IGlmIHNpbXBsZS4uLlxuICAgICAgICAgICAgLy8gY29uc3QgbGFzdCA9IGNlbGxzW2NlbGxzLmxlbmd0aC0xXTtcbiAgICAgICAgICAgIC8vIHBvaW50ZXIuLi5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9UT0RPOiBtb3ZlIG91dCA/XG4gICAgICAgIGNvbnN0IGZvcm11bGFfYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm11bGFfYmFyLmNsYXNzTGlzdC5hZGQoJ3Rvb2xiYXInKTtcblxuICAgICAgICAoIGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgcGxhZ2UgPSBhd2FpdCBMSVNTLmJ1aWxkKFwiY2FsYy1wbGFnZVwiKTtcbiAgICAgICAgICAgIHBsYWdlLnN5bmNUbyh0aGlzKTtcbiAgICAgICAgICAgIGZvcm11bGFfYmFyLmFwcGVuZCggcGxhZ2UuaG9zdCApO1xuXG4gICAgICAgICAgICBjb25zdCBmb3JtdWxhID0gYXdhaXQgTElTUy5idWlsZChcImNhbGMtZm9ybXVsYVwiKTtcbiAgICAgICAgICAgIGZvcm11bGEuc3luY1RvKHRoaXMpO1xuICAgICAgICAgICAgZm9ybXVsYV9iYXIuYXBwZW5kKCBmb3JtdWxhLmhvc3QgKTtcblxuICAgICAgICB9KSgpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKGZvcm11bGFfYmFyKTtcblxuICAgICAgICB0aGlzLiNpbml0R3JpZCgrKHRoaXMuYXR0cnMucm93cyA/PyAxKSwgKyh0aGlzLmF0dHJzLmNvbHMgPz8gMSkgKTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXYpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgICAgICAvLyB0aGUgY2VsbCBpcyBiZWluZyBlZGl0ZWQuLi5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQuaGFzQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKSApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgPT09IFwiVERcIiApXG4gICAgICAgICAgICAgICAgdGhpcy4jY3Vyc29yLnJlcGxhY2VBbGwoIHRhcmdldCBhcyBDZWxsICk7XG5cbiAgICAgICAgICAgIC8vVE9ETzogbm90IGNvcnJlY3QuLi5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSA9PT0gXCJUSFwiICYmIHRhcmdldC50ZXh0Q29udGVudCAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdldFJhbmdlKHRhcmdldC50ZXh0Q29udGVudCEpLmZpcnN0Q2VsbDtcblxuICAgICAgICAgICAgICAgIHRoaXMuI2N1cnNvci5yZXBsYWNlQWxsKGNlbGwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSAhPT0gXCJURFwiKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgaWYoIHRoaXMuYXR0cnMucm8gIT09IFwidHJ1ZVwiICYmICh0YXJnZXQgYXMgQ2VsbCkuaXNfcm8gIT09IHRydWUgKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnRvZ2dsZUF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldjogS2V5Ym9hcmRFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICBpZiggZXYuY29kZS5zdGFydHNXaXRoKCdBcnJvdycpICkge1xuXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGN1ciA9IHRoaXMuY3Vyc29yLmNlbGxzO1xuICAgICAgICAgICAgICAgIGlmKCBjdXIubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBsZXQgZF9yb3cgPSAwO1xuICAgICAgICAgICAgICAgIGxldCBkX2NvbCA9IDA7XG5cbiAgICAgICAgICAgICAgICBpZiggZXYuY29kZSA9PT0gJ0Fycm93TGVmdCcpXG4gICAgICAgICAgICAgICAgICAgIC0tZF9jb2w7XG4gICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09ICdBcnJvd1JpZ2h0JylcbiAgICAgICAgICAgICAgICAgICAgKytkX2NvbDtcbiAgICAgICAgICAgICAgICBpZiggZXYuY29kZSA9PT0gJ0Fycm93VXAnKVxuICAgICAgICAgICAgICAgICAgICAtLWRfcm93O1xuICAgICAgICAgICAgICAgIGlmKCBldi5jb2RlID09PSAnQXJyb3dEb3duJylcbiAgICAgICAgICAgICAgICAgICAgKytkX3JvdztcblxuICAgICAgICAgICAgICAgIGxldCBuZXh0OiBDZWxsO1xuICAgICAgICAgICAgICAgIGlmKCBldi5jdHJsS2V5ICkge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmV2ICAgPSBjdXJbMF07XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJzb3IgPSB0aGlzLnJlbGF0aXZlVG8ocHJldiwgZF9yb3csIGRfY29sKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiggcHJldi5yYXdDb250ZW50ICE9PSB1bmRlZmluZWQgJiYgY3Vyc29yLnJhd0NvbnRlbnQgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSggcHJldiAhPT0gY3Vyc29yICYmIGN1cnNvci5yYXdDb250ZW50ICE9PSB1bmRlZmluZWQpIHsgLy8gd2UgcmVhY2hlZCB0aGUgZW5kLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXYgICA9IGN1cnNvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSB0aGlzLnJlbGF0aXZlVG8ocHJldiwgZF9yb3csIGRfY29sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvciA9IHByZXY7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSggcHJldiAhPT0gY3Vyc29yICYmIGN1cnNvci5yYXdDb250ZW50ID09PSB1bmRlZmluZWQpIHsgLy8gd2UgcmVhY2hlZCB0aGUgZW5kLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXYgICA9IGN1cnNvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSB0aGlzLnJlbGF0aXZlVG8ocHJldiwgZF9yb3csIGRfY29sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG5leHQgPSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICAgIG5leHQgPSB0aGlzLnJlbGF0aXZlVG8oIGN1clswXSwgZF9yb3csIGRfY29sKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLiN0Ym9keS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3Vyc29yLnJlcGxhY2VBbGwobmV4dCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG5vIGVkaXRpb24gYWxsb3dlZC4uLlxuICAgICAgICAgICAgaWYoIHRoaXMuYXR0cnMucm8gPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiggdGFyZ2V0ID09PSB0aGlzLiN0Ym9keSApIHtcbiAgICAgICAgICAgICAgICBpZiggZXYuY29kZSA9PT0gXCJLZXlWXCIgJiYgZXYuY3RybEtleSAmJiB0aGlzLiNwYXN0ZWJpbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy4jcGFzdGViaW4uY2VsbHM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3NlbGVjdGlvbi5jb250ZW50ID0gZGF0YTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjb3B5IGZvcm1hdC4uLiBUT0RPIHV0aWxpdHkgdGhpbmd5Li4uXG4gICAgICAgICAgICAgICAgICAgIGlmKCAhIGV2LnNoaWZ0S2V5IHx8ICEgZXYuYWx0S2V5ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3JjID0gdGhpcy4jcGFzdGViaW4uY2VsbHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkc3QgPSB0aGlzLiNzZWxlY3Rpb24uY2VsbHM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyArK2kgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHN0W2ldLmNsYXNzTmFtZSA9IHNyY1tpXS5jbGFzc05hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiBhZGQgZm9ybWF0Li4uXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoICggZXYua2V5ID09PSBcImNcIiB8fCBldi5rZXkgPT09IFwieFwiKSAmJiBldi5jdHJsS2V5ICkge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvcHkuc2V0UmFuZ2UodGhpcy4jc2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gV0hZID8/P1xuICAgICAgICAgICAgICAgICAgICAvL2guc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcgICAsIGAke3NlbGVjdGlvblswXS5vZmZzZXRUb3B9cHhgKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNwYXN0ZWJpbiA9IHRoaXMuI3NlbGVjdGlvbi5kZWVwQ2xvbmUoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiggZXYua2V5ID09PSBcInhcIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuI3NlbGVjdGlvbi5kZWxldGVGb3JtYXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuI3NlbGVjdGlvbi5kZWxldGVDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gXCJDb250cm9sXCIgfHwgZXYua2V5ID09PSBcIlNoaWZ0XCIgfHwgZXYua2V5ID09PSBcIkFsdFwiICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIGlnbm9yZVxuICAgICAgICAgICAgICAgIH0gaWYoIGV2LmNvZGUgPT09IFwiRGVsZXRlXCIgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uZGVsZXRlQ29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBpZiggZXYuY29kZSA9PT0gXCJFbnRlclwiICkge1xuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGVkIGVsc2V3aGVyZVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihldi5jdHJsS2V5KSB7IC8vIGlnbm9yZSBjdHJsXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7IC8vIHdlIHN0YXJ0IGVkaXRpbmcuLi5cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXIgPSB0aGlzLmN1cnNvci5jZWxscztcblxuICAgICAgICAgICAgICAgICAgICBpZiggY3VyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1clswXS5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJkYmxjbGlja1wiLCB7YnViYmxlczogdHJ1ZX0pICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJbMF0udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIHRhcmdldCAhPT0gdGhpcy4jdGJvZHkgJiYgZXYuY29kZSA9PT0gJ0VudGVyJyAmJiBldi5zaGlmdEtleSApXG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3IuXG5cbiAgICAgICAgICAgIGlmKGV2LmNvZGUgPT09IFwiRW50ZXJcIikgeyAvL1RPRE86IEVudGVyIGlzIGZvciBjdXJyZW50IHBsYWdlLi4uXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGN1ciA9IHRoaXMuY3Vyc29yLmNlbGxzO1xuICAgICAgICAgICAgICAgIGlmKCBjdXIubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBsZXQgW3Jvdyxjb2xdID0gdGhpcy5jZWxsUG9zKCBjdXJbMF0gKTtcblxuICAgICAgICAgICAgICAgICsrcm93O1xuICAgICAgICAgICAgICAgIGlmKCByb3cgPj0gdGhpcy4jdGJvZHkuY2hpbGRyZW4ubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICByb3cgPSAxO1xuICAgICAgICAgICAgICAgICAgICArK2NvbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoIGNvbCA+PSB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICAgICAgY29sID0gMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgbmV4dCA9IHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW5bY29sXSBhcyBDZWxsO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jdGJvZHkuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnNvci5yZXBsYWNlQWxsKG5leHQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgb25JbnB1dDIgPSAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNjbGVhckZvcm11bGFSZWZzKCk7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBpZihldi5kZXRhaWwgIT09IHRydWUpXG4gICAgICAgICAgICAgICAgb25JbnB1dChldik7XG4gICAgICAgIH1cblxuICAgICAgICAvL1RPRE86IGhlcmUuLi5cbiAgICAgICAgdGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCAoZXYpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgICAgICBjb3B5LnNldFJhbmdlKG51bGwpO1xuXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgIT09IFwiVERcIilcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGVzLmNlbGxfZWRpdC5zdGF0ZSA9IHRhcmdldCBhcyBDZWxsO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoXCJjZWxsX2VkaXRfc3RhcnRcIiwgKGV2OiBDdXN0b21FdmVudDxDZWxsPikgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LnRvZ2dsZShcImNlbGxfZWRpdFwiLCB0cnVlKTtcblxuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGV2LmRldGFpbDtcblxuICAgICAgICAgICAgaWYoY2VsbC5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSkge1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyID0gY2VsbC5yYXdDb250ZW50LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZ2VzID0gY2VsbC5yYXdDb250ZW50LnJhbmdlc1Rva2VuO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuOiAoc3RyaW5nfEhUTUxFbGVtZW50KVtdID0gW3N0cl07XG5cbiAgICAgICAgICAgICAgICBsZXQgcmFuZ2VzX2NvbG9yczogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHt9O1xuICAgICAgICAgICAgICAgIGxldCBjdXJfb2Zmc2V0ID0gMDtcblxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByYW5nZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0ciA9IGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aC0xXSBhcyBzdHJpbmc7XG5cbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoLTFdID0gc3RyLnNsaWNlKDAsIHJhbmdlc1tpXS5iZWcgLSBjdXJfb2Zmc2V0KTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5nZV9uYW1lID0gcmFuZ2VzW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiggISAocmFuZ2VfbmFtZSBpbiByYW5nZXNfY29sb3JzKSApXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZXNfY29sb3JzW3JhbmdlX25hbWVdID0gaSU4O1xuXG4gICAgICAgICAgICAgICAgICAgIHMuY2xhc3NMaXN0LmFkZCgnZm9ybXVsYV9oaWdobGlnaHQnLCBgaGlnaGxpZ2h0XyR7cmFuZ2VzX2NvbG9yc1tyYW5nZV9uYW1lXX1gKTsgLy9UT0RPLi4uXG4gICAgICAgICAgICAgICAgICAgIHMudGV4dENvbnRlbnQgPSByYW5nZXNbaV0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goIHMgKTsgLy8gcmFuZ2UuLi5cblxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKCBzdHIuc2xpY2UocmFuZ2VzW2ldLmVuZCAtIGN1cl9vZmZzZXQpICk7XG4gICAgICAgICAgICAgICAgICAgIGN1cl9vZmZzZXQgPSByYW5nZXNbaV0uZW5kO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNlbGwucmVwbGFjZUNoaWxkcmVuKCAuLi5jaGlsZHJlbiApO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZ2VzX25hbWVzID0gT2JqZWN0LmtleXMocmFuZ2VzX2NvbG9ycyk7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHJhbmdlc19uYW1lcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5nZSA9IHJhbmdlc19uYW1lc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVmID0gdGhpcy4jZ2V0Rm9ybXVsYVJlZihpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVmLnNldENvbG9yKCByYW5nZXNfY29sb3JzW3JhbmdlXSApO1xuICAgICAgICAgICAgICAgICAgICByZWYuc2V0UmFuZ2UoIHRoaXMuZ2V0UmFuZ2UocmFuZ2UpICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBvbklucHV0MiApOyAvLyByZW1vdmUgY29sb3JzLi4uXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBGb3JtYXRzLmRlZmF1bHQuY2FsbChjZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoXCJjZWxsX2VkaXRfZW5kXCIsIChldjogQ3VzdG9tRXZlbnQ8Q2VsbD4pID0+IHtcblxuICAgICAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC50b2dnbGUoXCJjZWxsX2VkaXRcIiwgZmFsc2UpO1xuXG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZXYuZGV0YWlsO1xuXG4gICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBvbklucHV0Mik7IC8vIHRvIGJlIHNhZmVcbiAgICAgICAgICAgIGNlbGwudG9nZ2xlQXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIGZhbHNlKTtcblxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwibGVhdmUgZWRpdFwiLCBjZWxsLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIG5ldyBDZWxsTGlzdCh0aGlzLCBbY2VsbF0pLmNvbnRlbnQgPSBjZWxsLnRleHRDb250ZW50ITtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICAgICAgICAgIC8vIGxlYXZlXG4gICAgICAgICAgICB0aGlzLiNzZWxlY3Rpb24uY2xlYXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBldiA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lICE9PSBcIlREXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPSBudWxsO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiggdGhpcy5uYlJvd3MgPj0gMSAmJiB0aGlzLm5iQ29scyA+PSAxKVxuICAgICAgICAgICAgdGhpcy5jdXJzb3IucmVwbGFjZUFsbCggdGhpcy5nZXRSYW5nZShcIkExXCIpICk7XG4gICAgfVxuXG4gICAgZ2V0VmlzaWJsZUNlbGwoYzogQ2VsbHxDZWxsTGlzdCk6IENlbGwge1xuICAgICAgICBpZihjIGluc3RhbmNlb2YgQ2VsbExpc3QpXG4gICAgICAgICAgICBjID0gYy5maXJzdENlbGw7XG5cbiAgICAgICAgcmV0dXJuIGMuY2VsbCA/PyBjO1xuICAgIH1cblxuICAgIGNlbGxQb3MoY2VsbDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NlbGxQb3MoY2VsbCk7XG4gICAgfVxuXG4gICAgI2NlbGxQb3MoY2VsbDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQpIHtcblxuICAgICAgICBpZiggXCJwb3NcIiBpbiBjZWxsKVxuICAgICAgICAgICAgcmV0dXJuIGNlbGwucG9zIGFzIFtudW1iZXIsIG51bWJlcl07XG5cbiAgICAgICAgY29uc3QgY29sID0gWy4uLmNlbGwucGFyZW50RWxlbWVudCEuY2hpbGRyZW5dLmZpbmRJbmRleCggYyA9PiBjID09PSBjZWxsKTtcbiAgICAgICAgY29uc3Qgcm93ID0gWy4uLmNlbGwucGFyZW50RWxlbWVudCEucGFyZW50RWxlbWVudCEuY2hpbGRyZW5dLmZpbmRJbmRleCggciA9PiByID09PSBjZWxsLnBhcmVudEVsZW1lbnQhKTtcblxuICAgICAgICByZXR1cm4gW3JvdywgY29sXSBhcyBjb25zdDtcbiAgICB9XG5cbiAgICAjdGJvZHkhOiBIVE1MVGFibGVTZWN0aW9uRWxlbWVudDtcbiAgICBnZXQgdGJvZHkoKSB7IHJldHVybiB0aGlzLiN0Ym9keTsgfVxuXG4gICAgcmVzaXplKG5icm93czogbnVtYmVyLCBuYmNvbHM6IG51bWJlcikge1xuXG4gICAgICAgIGNvbnN0IGNvbF9odG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgY29sX2h0bWwuYXBwZW5kKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpICk7XG5cbiAgICAgICAgY29uc3QgY29sZ3JvdXAgPSB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvcignY29sZ3JvdXAnKSE7XG4gICAgICAgIGNvbGdyb3VwLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgICAgIGNvbnN0IHRib2R5ID0gdGhpcy4jdGJvZHk7XG4gICAgICAgIHRib2R5LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgICAgIGNvbGdyb3VwLmFwcGVuZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvbFwiKSApO1xuICAgICAgICBcbiAgICAgICAgZm9yKGxldCBjb2wgPSAwOyBjb2wgPCAgbmJjb2xzIDsgKytjb2wpIHtcbiAgICAgICAgICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICAgICAgICAgIHRoLnRleHRDb250ZW50ID0gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGNvbCk7XG4gICAgICAgICAgICBjb2xfaHRtbC5hcHBlbmQodGgpO1xuXG4gICAgICAgICAgICBjb2xncm91cC5hcHBlbmQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb2xcIikgKTtcbiAgICAgICAgfVxuICAgICAgICB0Ym9keS5hcHBlbmQoY29sX2h0bWwpO1xuXG4gICAgICAgIGZvcihsZXQgcm93ID0gMDsgcm93IDwgbmJyb3dzOyArK3Jvdykge1xuICAgICAgICAgICAgY29uc3Qgcm93X2h0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgICAgICAgdGgudGV4dENvbnRlbnQgPSBgJHtyb3crMX1gO1xuICAgICAgICAgICAgcm93X2h0bWwuYXBwZW5kKHRoKTtcblxuICAgICAgICAgICAgZm9yKGxldCBjb2wgPSAwOyBjb2wgPCAgbmJjb2xzIDsgKytjb2wpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKSBhcyBDZWxsO1xuICAgICAgICAgICAgICAgIC8vY2VsbC50b2dnbGVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuICAgICAgICAgICAgICAgIGNlbGwuZm9ybWF0ID0gRm9ybWF0cy5kZWZhdWx0O1xuICAgICAgICAgICAgICAgIHJvd19odG1sLmFwcGVuZCggY2VsbCApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGJvZHkuYXBwZW5kKHJvd19odG1sKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldENvbFNpemUoY29sOiBudW1iZXJ8c3RyaW5nLCBzaXplOiBzdHJpbmcpIHtcbiAgICAgICAgaWYoIHR5cGVvZiBjb2wgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICBjb2wgPSB0aGlzLnJlZjJwb3MoY29sKVsxXTtcblxuICAgICAgICBjb25zdCBodG1sID0gdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ2NvbGdyb3VwJykhLmNoaWxkcmVuW2NvbF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGh0bWwuc3R5bGUuc2V0UHJvcGVydHkoXCJ3aWR0aFwiLCBzaXplKTtcbiAgICAgICAgaHRtbC5zdHlsZS5zZXRQcm9wZXJ0eSgnb3ZlcmZsb3cteCcsICdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICAjaW5pdEdyaWQobmJyb3dzOiBudW1iZXIsIG5iY29sczogbnVtYmVyKSB7XG5cbiAgICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgICAgICBjb25zdCB0Ym9keSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xuICAgICAgICB0aGlzLiN0Ym9keSA9IHRib2R5O1xuXG4gICAgICAgIGNvbnN0IHJlc2l6ZU9icyA9IG5ldyBSZXNpemVPYnNlcnZlciggKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ob3N0LmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudCgncmVzaXplJykgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc2l6ZU9icy5vYnNlcnZlKCB0aGlzLmhvc3QgKTtcblxuICAgICAgICB0aGlzLiN0Ym9keS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcblxuICAgICAgICB0YWJsZS5hcHBlbmQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb2xncm91cFwiKSApO1xuICAgICAgICB0YWJsZS5hcHBlbmQodGJvZHkpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKHRhYmxlKTtcblxuICAgICAgICB0aGlzLnJlc2l6ZShuYnJvd3MsIG5iY29scyk7XG4gICAgfVxuXG4gICAgZ2V0UmFuZ2UoZnJvbTogQ2VsbHxzdHJpbmd8cmVhZG9ubHlbbnVtYmVyLG51bWJlcl0sIHRvOiBDZWxsfHN0cmluZ3xyZWFkb25seVtudW1iZXIsbnVtYmVyXSA9IGZyb20pOiBDZWxsTGlzdCB7XG5cbiAgICAgICAgLy8gcHJvY2VzcyByZWZzLi4uXG4gICAgICAgIGlmKCBmcm9tIGluc3RhbmNlb2YgSFRNTFRhYmxlQ2VsbEVsZW1lbnQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSYW5nZSggdGhpcy5jZWxsUG9zKGZyb20pLCB0byApO1xuICAgICAgICBpZiggdG8gaW5zdGFuY2VvZiBIVE1MVGFibGVDZWxsRWxlbWVudClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJhbmdlKCBmcm9tLCB0aGlzLmNlbGxQb3ModG8pICk7XG5cbiAgICAgICAgaWYoIHR5cGVvZiBmcm9tID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBpZiggZnJvbS5pbmNsdWRlcyhcIjpcIikgKVxuICAgICAgICAgICAgICAgIFtmcm9tLCB0b10gPSBmcm9tLnNwbGl0KCc6Jyk7XG5cbiAgICAgICAgICAgIGZyb20gPSB0aGlzLnJlZjJwb3MoZnJvbSwgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZ2UoIGZyb20sIHRvICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJhbmdlKCBmcm9tLCB0aGlzLnJlZjJwb3ModG8sIHRydWUpICk7XG5cbiAgICAgICAgLy8gZ2V0IHJhbmdlXG5cbiAgICAgICAgbGV0IGJlZ19yb3cgPSBmcm9tWzBdIHx8IDE7XG4gICAgICAgIGxldCBiZWdfY29sID0gZnJvbVsxXSB8fCAxO1xuXG4gICAgICAgIGxldCBlbmRfcm93ID0gZnJvbVswXSA9PT0gMCA/IHRoaXMubmJSb3dzIDogdG9bMF07XG4gICAgICAgIGxldCBlbmRfY29sID0gZnJvbVsxXSA9PT0gMCA/IHRoaXMubmJDb2xzIDogdG9bMV07XG5cbiAgICAgICAgaWYoIGVuZF9yb3cgPCBiZWdfcm93IClcbiAgICAgICAgICAgIFtiZWdfcm93LCBlbmRfcm93XSA9IFtlbmRfcm93LCBiZWdfcm93XTtcbiAgICAgICAgaWYoIGVuZF9jb2wgPCBiZWdfY29sIClcbiAgICAgICAgICAgIFtiZWdfY29sLCBlbmRfY29sXSA9IFtlbmRfY29sLCBiZWdfY29sXTtcblxuICAgICAgICBjb25zdCBjZWxscyA9IG5ldyBBcnJheTxDZWxsPiggKGVuZF9yb3cgLSBiZWdfcm93ICsgMSkgKiAoZW5kX2NvbCAtIGJlZ19jb2wgKyAxKSApO1xuXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBmb3IobGV0IGkgPSBiZWdfcm93OyBpIDw9IGVuZF9yb3c7ICsraSApXG4gICAgICAgICAgICBmb3IobGV0IGogPSBiZWdfY29sOyBqIDw9IGVuZF9jb2w7ICsraiApXG4gICAgICAgICAgICAgICAgY2VsbHNbb2Zmc2V0KytdID0gdGhpcy50Ym9keS5jaGlsZHJlbltpXS5jaGlsZHJlbltqXSBhcyBDZWxsO1xuXG4gICAgICAgIHJldHVybiBuZXcgQ2VsbExpc3QodGhpcywgY2VsbHMpO1xuICAgIH1cblxuICAgIHJlZjJwb3MocmVmOiBzdHJpbmcsIGVuZF9saW5lX2NvbCA9IHRydWUpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgICAgICAgXG4gICAgICAgIHJlZiA9IHJlZi5yZXBsYWNlQWxsKCckJywgJycpO1xuXG4gICAgICAgIGxldCBzZXAgPSByZWYuc2VhcmNoKC9bMC05XS8pO1xuXG4gICAgICAgIGlmKCBzZXAgPT09IDApICAvLyB0aGlzIGlzIGEgbGluZS4uLlxuICAgICAgICAgICAgcmV0dXJuIGVuZF9saW5lX2NvbCA/IHRoaXMucmVmMnBvcyhgQSR7cmVmfWApIDogW3RoaXMubmJDb2xzLCArcmVmXTtcbiAgICAgICAgaWYoIHNlcCA9PT0gLTEpIC8vIHRoaXMgaXMgYSBjb2wuLi5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZjJwb3MoYCR7cmVmfSR7ZW5kX2xpbmVfY29sID8gdGhpcy5uYlJvd3MgOiAxfWApO1xuXG4gICAgICAgIGNvbnN0IHJvdyA9ICtyZWYuc2xpY2Uoc2VwKTtcblxuICAgICAgICBsZXQgY29sID0gMDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNlcDsgKytpKSB7XG4gICAgICAgICAgICBjb2wgKj0gMjY7XG4gICAgICAgICAgICBjb2wgKz0gcmVmLmNoYXJDb2RlQXQoaSkgLSA2NTtcbiAgICAgICAgfVxuICAgICAgICArK2NvbDtcblxuICAgICAgICByZXR1cm4gW3JvdywgY29sXTtcbiAgICB9XG4gICAgcG9zMnJlZihyb3c6IG51bWJlciwgY29sOiBudW1iZXIpIHtcblxuICAgICAgICBsZXQgY29sX3N0ciA9IFwiXCI7XG4gICAgICAgIGRvIHtcblxuICAgICAgICAgICAgbGV0IGlkID0gKGNvbC0xKSAlIDI2O1xuXG4gICAgICAgICAgICBjb2xfc3RyID0gU3RyaW5nLmZyb21DaGFyQ29kZSg2NStpZCkgKyBjb2xfc3RyO1xuXG4gICAgICAgICAgICBjb2wgLT0gaWQgKyAxO1xuICAgICAgICAgICAgY29sIC89IDI2OyAvLyBzaG91bGQgYmUgaW50ZWdlciwgc28gb2suXG5cbiAgICAgICAgfSB3aGlsZSggY29sID4gMCApO1xuXG4gICAgICAgIHJldHVybiBgJHtjb2xfc3RyfSR7cm93fWA7XG4gICAgfVxuICAgIGdldCBuYlJvd3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0Ym9keS5jaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgIH1cbiAgICBnZXQgbmJDb2xzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jdGJvZHkuZmlyc3RFbGVtZW50Q2hpbGQhLmNoaWxkcmVuLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgI2lzVXBkYXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmKCB0aGlzLiNpc1VwZGF0aW5nID09PSB0cnVlIClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy4jaXNVcGRhdGluZyA9IHRydWU7XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IFsuLi50aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbDxDZWxsPigndGQnKV0uZmlsdGVyKCBlID0+IGUucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IobGV0IGNlbGwgb2YgY2VsbHMgKVxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBjZWxsLnJhd0NvbnRlbnQucmVzZXRDYWNoZSgpO1xuXG4gICAgICAgICAgICBmb3IobGV0IGNlbGwgb2YgY2VsbHMpIHtcblxuICAgICAgICAgICAgICAgIGlmKCBjZWxsLnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBGb3JtdWxhICkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBjZWxsLnJhd0NvbnRlbnQuZXhlYyh0aGlzKTsgLy9UT0RPLi4uXG5cbiAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiBmYWN0b3JpemUuLi5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGU6IHN0cmluZyA9IHR5cGVvZiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSApXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiO1xuXG4gICAgICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSAoY2VsbCBhcyBhbnkpLmZvcm1hdCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCB0eXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaG9zdC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoJ3VwZGF0ZScpICk7XG4gICAgICAgICAgICB0aGlzLiNpc1VwZGF0aW5nID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0IGlzUk8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJzLnJvID09PSBcInRydWVcIjtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDZWxsTGlzdCBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcblxuICAgICNzaGVldDogQ2FsY1NoZWV0O1xuICAgICNjZWxsczogQ2VsbFtdO1xuICAgIGNvbnN0cnVjdG9yKHNoZWV0OiBDYWxjU2hlZXQsIGNlbGxzOiBDZWxsW10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy4jY2VsbHMgPSBjZWxscztcbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcbiAgICB9XG5cbiAgICBnZXQgcGxhZ2VfbmFtZSgpIHtcblxuICAgICAgICBpZiggdGhpcy4jY2VsbHMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGlmKCB0aGlzLiNjZWxscy5sZW5ndGggPT09IDEgKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuI3NoZWV0LnBvczJyZWYoIC4uLnRoaXMuI3NoZWV0LmNlbGxQb3ModGhpcy4jY2VsbHNbMF0pICk7XG5cbiAgICAgICAgbGV0IGNlbGxzID0gdGhpcy4jY2VsbHMubWFwKCBjID0+IHRoaXMuI3NoZWV0LmNlbGxQb3MoYykgKS5zb3J0KCAoYSxiKSA9PiB7XG4gICAgICAgICAgICBpZiggYVswXSAhPT0gYlswXSApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFbMF0gLSBiWzBdO1xuICAgICAgICAgICAgcmV0dXJuIGFbMV0gLSBiWzFdO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbWluID0gY2VsbHNbMF07XG4gICAgICAgIGxldCBtYXggPSBjZWxsc1tjZWxscy5sZW5ndGggLSAxXTtcblxuICAgICAgICBsZXQgbmJfY29scyA9IG1heFsxXSAtIG1pblsxXSArIDE7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgaWYoIGNlbGxzW2ldWzBdICE9PSBNYXRoLmZsb29yKGkvbmJfY29scykrbWluWzBdICYmIGNlbGxzW2ldWzFdICE9PSAoaSVuYl9jb2xzKSsgbWluWzFdIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgcmV0dXJuIGAke3RoaXMuI3NoZWV0LnBvczJyZWYoLi4ubWluKX06JHt0aGlzLiNzaGVldC5wb3MycmVmKC4uLm1heCl9YDtcbiAgICB9XG5cbiAgICBnZXQgY2VsbHMoKTogQ2VsbFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NlbGxzO1xuICAgIH1cbiAgICBnZXQgc2hlZXQoKTogQ2FsY1NoZWV0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3NoZWV0O1xuICAgIH1cblxuICAgIHRvZ2dsZUZvcm1hdChuYW1lOiBzdHJpbmd8KCh2OiBhbnksIHByZWM6IG51bWJlcnxudWxsKSA9PiBzdHJpbmcpICkge1xuICAgICAgICBsZXQgZiA9IEZvcm1hdC5leHRyYWN0Rm9ybWF0KHRoaXMpO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgbmFtZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cbiAgICAgICAgICAgIGxldCBpc0Zvcm1hdCA9IGYuZ2V0UHJvcGVydHkoXCJmb3JtYXRcIikgPT09IG5hbWU7XG5cbiAgICAgICAgICAgIHRoaXMuZm9ybWF0KHtmb3JtYXQ6IGlzRm9ybWF0ID8gbnVsbCA6IG5hbWUgfSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZm9ybWF0KHtbbmFtZV06IGYuZ2V0UHJvcGVydHkobmFtZSkgIT09IHRydWV9KTtcbiAgICB9XG5cbiAgICBmb3JtYXQoLi4uZjogKCggKHY6IGFueSwgcHJlYzogbnVtYmVyfG51bGwpID0+IHN0cmluZyApfHN0cmluZ3xGb3JtYXR8UmVjb3JkPHN0cmluZywgYW55PilbXSkge1xuXG4gICAgICAgIGlmKCBmLmxlbmd0aCA+IDEgKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vVE9ETy4uLi5cbiAgICAgICAgICAgIGYgPSBPYmplY3QuZnJvbUVudHJpZXMoIGYubWFwKCBlID0+IFtlLCB0cnVlXSApICk7XG5cbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBmID0gZlswXTtcblxuICAgICAgICBpZiggdHlwZW9mIGYgPT09IFwiZnVuY3Rpb25cIiApXG4gICAgICAgICAgICBmID0ge1wiZm9ybWF0XCI6IGZ9O1xuXG4gICAgICAgIGlmKHR5cGVvZiBmID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIGYgPSB7W2ZdOiB0cnVlfTtcblxuICAgICAgICBpZiggISAoZiBpbnN0YW5jZW9mIEZvcm1hdCkgKVxuICAgICAgICAgICAgZiA9IG5ldyBGb3JtYXQoZik7XG5cbiAgICAgICAgZi5hcHBseVRvKHRoaXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldCBjb250ZW50KCk6IChSYXdDb250ZW50VHlwZSlbXSB7XG4gICAgICAgIGxldCBjb250ZW50ID0gbmV3IEFycmF5KHRoaXMuI2NlbGxzLmxlbmd0aCk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLiNjZWxscy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgIGNvbnRlbnRbaV0gPSB0aGlzLiNjZWxsc1tpXS5yYXdDb250ZW50ITtcblxuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICB9XG5cbiAgICBkZWxldGVGb3JtYXQoKSB7XG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiB0aGlzLiNjZWxscykgLy9UT0RPIGFkZCBob2MgZm9ybWF0Li4uXG4gICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9ICcnO1xuICAgIH1cblxuICAgIGRlbGV0ZUNvbnRlbnQoKSB7XG5cbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIHRoaXMuI2NlbGxzKSB7XG4gICAgICAgICAgICBjZWxsLnJhd0NvbnRlbnQgPSB1bmRlZmluZWQgYXMgYW55O1xuICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10eXBlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzaGVldC51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBzZXQgY29udGVudChjb250ZW50OiBDZWxsfFJhd0NvbnRlbnRUeXBlfChSYXdDb250ZW50VHlwZXxDZWxsKVtdKSB7XG5cbiAgICAgICAgaWYoIEFycmF5LmlzQXJyYXkoY29udGVudCkgKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICBuZXcgQ2VsbExpc3QodGhpcy4jc2hlZXQsIFt0aGlzLiNjZWxsc1tpXV0gKS5jb250ZW50ID0gY29udGVudFtpXTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuXG4gICAgICAgICAgICBsZXQgcmF3ID0gY29udGVudDtcbiAgICAgICAgICAgIGNvbnRlbnQgPSBwYXJzZUlucHV0KGNvbnRlbnQpO1xuICAgICAgICAgICAgaWYoIHR5cGVvZiBjb250ZW50ID09PSBcIm51bWJlclwiICYmIHJhd1tyYXcubGVuZ3RoLTFdID09PSBcIiVcIikge1xuICAgICAgICAgICAgICAgIGxldCBmID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYoICEgZi5oYXNQcm9wZXJ0eShcImZvcm1hdFwiKSB8fCBmLmdldFByb3BlcnR5KFwiZm9ybWF0XCIpID09PSBGb3JtYXRzLmRlZmF1bHQgKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1hdChGb3JtYXRzLnBvdXJjZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCB0eXBlb2YgY29udGVudCA9PT0gXCJudW1iZXJcIiAmJiByYXdbcmF3Lmxlbmd0aC0xXSA9PT0gXCLigqxcIikge1xuICAgICAgICAgICAgICAgIGxldCBmID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYoICEgZi5oYXNQcm9wZXJ0eShcImZvcm1hdFwiKSB8fCBmLmdldFByb3BlcnR5KFwiZm9ybWF0XCIpID09PSBGb3JtYXRzLmRlZmF1bHQgKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1hdChGb3JtYXRzLmV1cm9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByYXdfdmFsID0gY29udGVudCBpbnN0YW5jZW9mIEhUTUxUYWJsZUNlbGxFbGVtZW50ID8gY29udGVudC5yYXdDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY29udGVudDtcblxuICAgICAgICBmb3IobGV0IGNlbGwgb2YgdGhpcy4jY2VsbHMpIHtcblxuICAgICAgICAgICAgaWYoY29udGVudCBpbnN0YW5jZW9mIEhUTUxUYWJsZUNlbGxFbGVtZW50ICYmIGNvbnRlbnQucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEgKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgdiA9IGNvbnRlbnQucmF3Q29udGVudDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRzdCA9IHRoaXMuI3NoZWV0LmNlbGxQb3MoIGNlbGwgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzcmMgPSB0aGlzLiNzaGVldC5jZWxsUG9zKGNvbnRlbnQpXG5cbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmID0gWyBkc3RbMF0gLSBzcmNbMF0sIGRzdFsxXSAtIHNyY1sxXV0gYXMgY29uc3Q7XG5cbiAgICAgICAgICAgICAgICByYXdfdmFsID0gdi5yZWxhdGl2ZVRvKCB0aGlzLiNzaGVldCwgLi4uZGlmZiApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjZWxsLnJhd0NvbnRlbnQgPSByYXdfdmFsO1xuXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSByYXdfdmFsO1xuICAgICAgICAgICAgaWYoIHJhd192YWwgaW5zdGFuY2VvZiBGb3JtdWxhKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXRzID0gT2JqZWN0LnZhbHVlcyggRm9ybWF0cyApO1xuXG4gICAgICAgICAgICAgICAgLy9JZiBubyBudW1iZXIgZm9ybWF0LCBkZWR1Y2UgZm9ybWF0LlxuICAgICAgICAgICAgICAgIGlmKCBjZWxsLmZvcm1hdCA9PT0gdW5kZWZpbmVkIHx8IGNlbGwuZm9ybWF0ID09PSBGb3JtYXRzLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1hdCA9IEZvcm1hdHMuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5iX2RhdGVzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCByIG9mIHJhd192YWwucmFuZ2VzVG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQodGhpcy5zaGVldC5nZXRSYW5nZShyLnZhbHVlKSApLmdldFByb3BlcnR5KFwiZm9ybWF0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGZvcm1hdCAhPT0gZiAmJiBmb3JtYXRzLmluZGV4T2YoZikgPiBmb3JtYXRzLmluZGV4T2YoZm9ybWF0KSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0ID0gZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGYgPT09IEZvcm1hdHMuZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArK25iX2RhdGVzO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaDRja1xuICAgICAgICAgICAgICAgICAgICBpZiggZm9ybWF0ID09PSBGb3JtYXRzLmRhdGUgJiYgbmJfZGF0ZXMgPiAxIClcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdCA9IEZvcm1hdHMuZGVmYXVsdDtcblxuICAgICAgICAgICAgICAgICAgICBpZihmb3JtYXQgIT09IEZvcm1hdHMuZGVmYXVsdClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuZm9ybWF0ID0gZm9ybWF0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhbHVlID0gcmF3X3ZhbC5leGVjKHRoaXMuI3NoZWV0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHR5cGU6IHN0cmluZyA9IHR5cGVvZiB2YWx1ZTtcbiAgICAgICAgICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgKSB7XG4gICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIjtcbiAgICAgICAgICAgICAgICBjZWxsLmZvcm1hdCA9IEZvcm1hdHMuZGF0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGNlbGwuZm9ybWF0KHZhbHVlKTtcblxuICAgICAgICAgICAgaWYoIGNlbGwuZm9ybWF0ID09PSBGb3JtYXRzLmRhdGUpXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdkYXRlJztcbiAgICAgICAgICAgIGlmKCBjZWxsLmZvcm1hdCA9PT0gRm9ybWF0cy5wb3VyY2VudClcbiAgICAgICAgICAgICAgICB0eXBlID0gJ3BvdXJjZW50JztcbiAgICAgICAgICAgIGlmKCBjZWxsLmZvcm1hdCA9PT0gRm9ybWF0cy5ldXJvcyB8fCBjZWxsLmZvcm1hdCA9PT0gRm9ybWF0cy5udW1iZXIgKVxuICAgICAgICAgICAgICAgIHR5cGUgPSAnbnVtYmVyJztcblxuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHR5cGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2hlZXQudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgc2V0Uk8oaXNfcm86IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiB0aGlzLiNjZWxscylcbiAgICAgICAgICAgIGNlbGwuaXNfcm8gPSBpc19ybztcbiAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NlbGxzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBoYXMoLi4uY2VsbHM6IENlbGxbXSkge1xuICAgICAgICBmb3IobGV0IGNlbGwgb2YgY2VsbHMpXG4gICAgICAgICAgICBpZiggISB0aGlzLiNjZWxscy5pbmNsdWRlcyhjZWxsKSApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZW1vdmUoLi4uY2VsbHM6IENlbGxbXSkge1xuICAgICAgICB0aGlzLiNjZWxscyA9IHRoaXMuI2NlbGxzLmZpbHRlciggYyA9PiAhIGNlbGxzLmluY2x1ZGVzKGMpICk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpICk7XG4gICAgfVxuXG4gICAgcmVwbGFjZUFsbCguLi5jZWxsczogQ2VsbFtdfFtDZWxsTGlzdF0pIHtcbiAgICAgICAgdGhpcy4jY2VsbHMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5hZGQoLi4uY2VsbHMpO1xuICAgIH1cblxuICAgIGFkZCguLi5jZWxsczogQ2VsbFtdfFtDZWxsTGlzdF0pIHtcblxuICAgICAgICBpZiggY2VsbHNbMF0gaW5zdGFuY2VvZiBDZWxsTGlzdClcbiAgICAgICAgICAgIGNlbGxzID0gY2VsbHNbMF0uY2VsbHM7XG5cbiAgICAgICAgdGhpcy4jY2VsbHMucHVzaCguLi5jZWxscyBhcyBDZWxsW10pO1xuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpICk7XG4gICAgfVxuXG4gICAgZ2V0IGZpcnN0Q2VsbCgpIHtcbiAgICAgICAgaWYoIHRoaXMuI2NlbGxzLmxlbmd0aCA8IDEpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub3BlXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy4jY2VsbHNbMF07XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuI2NlbGxzLmxlbmd0aCA9IDA7XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcbiAgICB9XG5cblxuICAgIGRlZXBDbG9uZSgpIHtcblxuICAgICAgICBsZXQgY2VsbHMgPSB0aGlzLiNjZWxscy5tYXAoIGMgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xvbmUgPSBjLmNsb25lTm9kZSh0cnVlKSBhcyBDZWxsO1xuXG4gICAgICAgICAgICBjbG9uZS5yYXdDb250ZW50ID0gYy5yYXdDb250ZW50O1xuICAgICAgICAgICAgY2xvbmUuZm9ybWF0ICAgICA9IGMuZm9ybWF0O1xuICAgICAgICAgICAgKGNsb25lIGFzIGFueSkucG9zICAgICAgICA9IHRoaXMuI3NoZWV0LmNlbGxQb3MoYyk7XG5cbiAgICAgICAgICAgIHJldHVybiBjbG9uZTtcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gbmV3IENlbGxMaXN0KHRoaXMuI3NoZWV0LCBjZWxscyk7XG4gICAgfVxufVxuXG4vL1RPRE8uLi5cbmltcG9ydCBcIi4vZm9ybXVsYV9lZGl0b3JcIjtcbmltcG9ydCBcIi4vcGxhZ2VfZWRpdG9yXCI7XG5pbXBvcnQgeyBGb3JtdWxhLCBwYXJzZV9mb3JtdWxhIH0gZnJvbSBcIi4vZm9ybXVsYV9wYXJzZXJcIjtcbmltcG9ydCB7IFBsYWdlU2VsZWN0b3IgfSBmcm9tIFwiLi9wbGFnZV9zZWxlY3RvclwiO1xuaW1wb3J0IHsgRm9ybWF0LCBGb3JtYXRNYW5hZ2VyLCBGb3JtYXRzIH0gZnJvbSBcIi4vZm9ybWF0XCI7XG5pbXBvcnQgeyBGb3JtdWxhUmVmLCBSYW5nZU92ZXJsYXksIFJlY29weUhhbmRsZSB9IGZyb20gXCIuL1JhbmdlT3ZlcmxheVwiO1xuaW1wb3J0IHsgdGVzdCB9IGZyb20gXCJ0ZXN0L3dlYm9kZlwiO1xuXG5MSVNTLmRlZmluZSgnY2FsYy1zaGVldCcsIENhbGNTaGVldCk7IiwiaW1wb3J0IExJU1MgZnJvbSBcIi4uLy4uLy4uL2xpYnMvTElTU1wiO1xuaW1wb3J0IHsgRm9ybWF0LCBGb3JtYXRzIH0gZnJvbSBcIi4vZm9ybWF0XCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGxMaXN0IH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuY29uc3QgY29udGVudCA9IGBcbiAgICA8c2VsZWN0IGRpc2FibGVkIHRpdGxlPVwiTm9tIGRlIHBvbGljZVwiPjxvcHRpb24+TGliw6lyYXRpb24gU2Fuczwvb3B0aW9uPjwvc2VsZWN0PlxuICAgIDxzZWxlY3QgY2xhc3M9XCJmb250X3NpemVcIiB0aXRsZT1cIlRhaWxsZSBkZSBwb2xpY2VcIj48L3NlbGVjdD5cbiAgICA8c3BhbiBjbGFzcz0ndmJhcic+PC9zcGFuPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdib2xkJyB0aXRsZT1cIkdyYXMgKEN0cmwrQilcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdpdGFsaWMnIHRpdGxlPVwiSXRhbGlxdWUgKEN0cmwrSSlcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSd1bmRlcmxpbmUnIHRpdGxlPVwiU291bGlnbmFnZSAoQ3RybCtVKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gdmFsdWU9J2JsYWNrJyBuYW1lPSdmb3JlZ3JvdW5kX2NvbG9yJyB0aXRsZT1cIkNvdWxldXIgZGUgcG9saWNlXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gdmFsdWU9J3llbGxvdycgbmFtZT0nYmFja2dyb3VuZF9jb2xvcicgdGl0bGU9XCJDb3VsZXVyIGQnYXJyacOocmUtcGxhblwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nYWxpZ25fbGVmdCcgdGl0bGU9XCJBbGlnbmVyIMOgIGdhdWNoZSAoQ3RybCtMKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2FsaWduX2NlbnRlcicgdGl0bGU9XCJDZW50ZXIgKEN0cmwrRSlcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdhbGlnbl9yaWdodCcgdGl0bGU9XCJBbGlnbmVyIMOgIGRyb2l0ZSAoQ3RybCtSKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0ndmFsaWduX3RvcCcgdGl0bGU9XCJBbGlnbmVyIGVuIGhhdXRcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSd2YWxpZ25fbWlkZGxlJyB0aXRsZT1cIkNlbnRyZXIgdmVydGljYWxlbWVudFwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J3ZhbGlnbl9ib3R0b20nIHRpdGxlPVwiQWxpZ25lciBlbiBiYXNcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxzcGFuIGNsYXNzPSd2YmFyJz48L3NwYW4+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2FqdXN0ZXInIHRpdGxlPVwiQWp1c3RlciBsZSB0ZXh0ZVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nbWVyZ2VfY2VudGVyJyB0eXBlPSdmY3QnIHRpdGxlPVwiRnVzaW9ubmVyIGV0IGNlbnRyZXIgb3UgZMOpZnVzaW9ubmVyIGxlcyBjZWxsdWxlcyBlbiBpbnZlcnNhbnQgbGV1ciDDqXRhdCBhY3R1ZWxcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdtZXJnZScgdHlwZT0nZmN0JyB0aXRsZT1cIkZ1c2lvbm5lciBsZXMgY2VsbHVsZXNcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSd1bm1lcmdlJyB0eXBlPSdmY3QnIHRpdGxlPVwiRMOpZnVzaW9ubmVyIGxlcyBjZWxsdWxlc1wiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nZm9ybWF0X21vbm5haWUnIHR5cGU9J2ZjdCcgdGl0bGU9XCJBcHBsaXF1ZXIgbGUgZm9ybWF0IE1vbm5haWUgKE1haitDdHJsKzQpXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nZm9ybWF0X3BvdXJjZW50JyB0eXBlPSdmY3QnIHRpdGxlPVwiQXBwbGlxdWVyIGxlIGZvcm1hdCBQb3VyY2VudGFnZSAoTWFqK0N0cmwrNSlcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdmb3JtYXRfbmInIHR5cGU9J2ZjdCcgIHRpdGxlPVwiQXBwbGlxdWVyIGxlIGZvcm1hdCBOb21icmUgKE1haitDdHJsKzEpXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nZm9ybWF0X2RhdGUnIHR5cGU9J2ZjdCcgIHRpdGxlPVwiQXBwbGlxdWVyIGxlIGZvcm1hdCBEYXRlIChNYWorQ3RybCszKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nZm9ybWF0X3plcm9fcDEnIHR5cGU9J2ZjdCcgdGl0bGU9XCJBam91dGVyIHVuZSBkw6ljaW1hbGVcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdmb3JtYXRfemVyb19tMScgdHlwZT0nZmN0JyB0aXRsZT1cIlN1cHByaW1lciB1bmUgZMOpY2ltYWxlXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8c3BhbiBjbGFzcz0ndmJhcic+PC9zcGFuPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdyZXRyYWl0X3AxJyB0eXBlPSdmY3QnIHRpdGxlPVwiQXVnbWVudGVyIGxlIHJldHJhaXRcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdyZXRyYWl0X20xJyB0eXBlPSdmY3QnIHRpdGxlPVwiRGltaW51ZXIgbGUgcmV0cmFpdFwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nYm9yZGVyJyB0eXBlPSdmY3QnIHRpdGxlPVwiQm9yZHVyZXMgKE1haiBwb3VyIMOpY3Jhc2VyKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2JvcmRlcl9zdHlsZScgdHlwZT0nZmN0JyBkaXNhYmxlZCB0aXRsZT1cIlN0eWxlIGRlIGJvcmR1cmVcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSB2YWx1ZT0nYmxhY2snIG5hbWU9J2JvcmRlcl9jb2xvcicgdGl0bGU9XCJDb3VsZXVyIGRlIGJvcmR1cmVcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxzcGFuIGNsYXNzPSd2YmFyJz48L3NwYW4+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2Zvcm1hdF9jb25kJyB0eXBlPSdmY3QnIGRpc2FibGVkIHRpdGxlPVwiQ29uZGl0aW9ubmVsXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbmA7XG5cbmZ1bmN0aW9uIG1lcmdlKGNlbGxsaXN0OiBDZWxsTGlzdCwgaXNfYWxpZ24gPSBmYWxzZSkge1xuXG4gICAgY29uc3Qgc2hlZXQgPSBjZWxsbGlzdC5zaGVldDtcblxuICAgIGNvbnN0IFtiZWcsZW5kXSA9IGNlbGxsaXN0LnBsYWdlX25hbWUhLnNwbGl0KCc6JykubWFwKCBlID0+IHNoZWV0LnJlZjJwb3MoZSkgKTsgLy8gcGxhZ2UgY2FuJ3QgYmUgdW5kZWZpbmVkXG5cbiAgICBsZXQgcm93cyA9IGVuZFswXSAtIGJlZ1swXSArIDE7XG4gICAgbGV0IGNvbHMgPSBlbmRbMV0gLSBiZWdbMV0gKyAxO1xuXG4gICAgbGV0IGZvcm1hdDogUmVjb3JkPHN0cmluZyxhbnk+ID0ge1xuICAgICAgICBzcGFuOiBbIHJvd3MsIGNvbHMgXVxuICAgIH1cblxuICAgIGlmKCBpc19hbGlnbiApIHtcbiAgICAgICAgZm9ybWF0LnZhbGlnbl9taWRkbGUgPSB0cnVlO1xuICAgICAgICBmb3JtYXQuYWxpZ25fY2VudGVyICA9IHRydWU7XG4gICAgfVxuXG4gICAgc2hlZXQuZ2V0UmFuZ2UoYmVnKS5mb3JtYXQoZm9ybWF0KTtcbn1cblxuZnVuY3Rpb24gdW5tZXJnZShjZWxsbGlzdDogQ2VsbExpc3QpIHtcblxuICAgIGNlbGxsaXN0LmZvcm1hdCh7XG4gICAgICAgIHNwYW46IFsgMSwgMSBdXG4gICAgfSk7IC8vIHVubWVyZ2UuLi5cbn1cblxuZnVuY3Rpb24gcmV0cmFpdChjZWxsczogQ2VsbExpc3QsIGRlbHRhX2luZGVudDogbnVtYmVyKSB7XG4gICAgXG4gICAgZm9yKGxldCBjZWxsIG9mIGNlbGxzLmNlbGxzKSB7XG5cbiAgICAgICAgY29uc3QgZm9ybWF0ID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbCk7XG4gICAgICAgIGxldCBuZXdfZm9ybWF0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG4gICAgICAgIGlmKCAhIGZvcm1hdC5oYXNQcm9wZXJ0eShcImFsaWduX3JpZ2h0XCIpICYmICEgZm9ybWF0Lmhhc1Byb3BlcnR5KFwiYWxpZ25fbGVmdFwiKSApXG4gICAgICAgICAgICBuZXdfZm9ybWF0LmFsaWduX2xlZnQgPSB0cnVlO1xuXG4gICAgICAgIG5ld19mb3JtYXQuaW5kZW50ID0gKyhmb3JtYXQuZ2V0UHJvcGVydHkoXCJpbmRlbnRcIikgPz8gMCkgKyBkZWx0YV9pbmRlbnQ7XG4gICAgICAgIFxuICAgICAgICBpZiggbmV3X2Zvcm1hdC5pbmRlbnQgPCAwKVxuICAgICAgICAgICAgbmV3X2Zvcm1hdC5pbmRlbnQgPSAwO1xuXG4gICAgICAgIGNlbGxzLmZvcm1hdChuZXdfZm9ybWF0KTsgICAgIFxuICAgIH1cbn1cblxuZnVuY3Rpb24gcHJlY2lzaW9uKGNlbGxzOiBDZWxsTGlzdCwgZGVsdGFfcHJlYzogbnVtYmVyKSB7XG5cbiAgICBsZXQgcHJlY2lzaW9uID0gdW5kZWZpbmVkO1xuICAgIGZvcihsZXQgY2VsbCBvZiBjZWxscy5jZWxscykge1xuICAgICAgICBjb25zdCBwcmVjID0gKyhGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxsKS5nZXRQcm9wZXJ0eShcInByZWNpc2lvblwiKSA/PyAyKTtcbiAgICAgICAgaWYoIHByZWNpc2lvbiA9PT0gdW5kZWZpbmVkIHx8IHByZWMgPCBwcmVjaXNpb24gKVxuICAgICAgICAgICAgcHJlY2lzaW9uID0gcHJlYztcbiAgICB9XG5cbiAgICBwcmVjaXNpb24gPz89IDI7XG4gICAgcHJlY2lzaW9uICs9IGRlbHRhX3ByZWM7XG4gICAgaWYocHJlY2lzaW9uIDwgMClcbiAgICAgICAgcHJlY2lzaW9uID0gMDtcblxuICAgIGNlbGxzLmZvcm1hdCh7cHJlY2lzaW9ufSk7XG59XG5cbmNvbnN0IGZjdHM6IFJlY29yZDxzdHJpbmcsIHsgYWN0aW9uOiAoY2VsbHM6IENlbGxMaXN0KSA9PnZvaWQsIGVuYWJsZWQ/OiAoY2VsbHM6IENlbGxMaXN0KSA9PiBib29sZWFuIH0+ID0ge1xuICAgIFwiZm9ybWF0X3plcm9fcDFcIjoge1xuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuICAgICAgICAgICAgcHJlY2lzaW9uKGNlbGxzLCArMSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiZm9ybWF0X3plcm9fbTFcIjoge1xuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuICAgICAgICAgICAgcHJlY2lzaW9uKGNlbGxzLCAtMSk7XG4gICAgICAgIH1cbiAgICB9LFwiZm9ybWF0X3BvdXJjZW50XCI6IHtcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcblxuICAgICAgICAgICAgaWYoIEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzKS5nZXRQcm9wZXJ0eSgnZm9ybWF0JykgPT09IEZvcm1hdHMucG91cmNlbnQgKSB7XG4gICAgICAgICAgICAgICAgY2VsbHMuZm9ybWF0KEZvcm1hdHMubnVtYmVyKTsgLy8gaDRja1xuICAgICAgICAgICAgICAgIGNlbGxzLmZvcm1hdCh7Zm9ybWF0OiBudWxsfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2VsbHMuZm9ybWF0KEZvcm1hdHMucG91cmNlbnQpO1xuICAgICAgICB9LFxuICAgICAgICBlbmFibGVkOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcbiAgICAgICAgICAgIHJldHVybiBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxscykuZ2V0UHJvcGVydHkoJ2Zvcm1hdCcpID09PSBGb3JtYXRzLnBvdXJjZW50O1xuICAgICAgICB9XG4gICAgfSxcImZvcm1hdF9uYlwiOiB7XG4gICAgICAgIGFjdGlvbjogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG5cbiAgICAgICAgICAgIGlmKCBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxscykuZ2V0UHJvcGVydHkoJ2Zvcm1hdCcpID09PSBGb3JtYXRzLm51bWJlciApIHtcbiAgICAgICAgICAgICAgICBjZWxscy5mb3JtYXQoe2Zvcm1hdDogbnVsbH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNlbGxzLmZvcm1hdChGb3JtYXRzLm51bWJlcik7XG4gICAgICAgIH0sXG4gICAgICAgIGVuYWJsZWQ6IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzKS5nZXRQcm9wZXJ0eSgnZm9ybWF0JykgPT09IEZvcm1hdHMubnVtYmVyO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcImZvcm1hdF9tb25uYWllXCI6IHtcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcblxuICAgICAgICAgICAgaWYoIEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzKS5nZXRQcm9wZXJ0eSgnZm9ybWF0JykgPT09IEZvcm1hdHMuZXVyb3MgKSB7XG4gICAgICAgICAgICAgICAgY2VsbHMuZm9ybWF0KHtmb3JtYXQ6IG51bGx9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjZWxscy5mb3JtYXQoRm9ybWF0cy5ldXJvcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVuYWJsZWQ6IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzKS5nZXRQcm9wZXJ0eSgnZm9ybWF0JykgPT09IEZvcm1hdHMuZXVyb3M7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiZm9ybWF0X2RhdGVcIjoge1xuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuXG4gICAgICAgICAgICBpZiggRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHMpLmdldFByb3BlcnR5KCdmb3JtYXQnKSA9PT0gRm9ybWF0cy5kYXRlICkge1xuICAgICAgICAgICAgICAgIGNlbGxzLmZvcm1hdChGb3JtYXRzLm51bWJlcik7IC8vIGg0Y2tcbiAgICAgICAgICAgICAgICBjZWxscy5mb3JtYXQoe2Zvcm1hdDogbnVsbH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNlbGxzLmZvcm1hdChGb3JtYXRzLmRhdGUpO1xuICAgICAgICB9LFxuICAgICAgICBlbmFibGVkOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcbiAgICAgICAgICAgIHJldHVybiBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxscykuZ2V0UHJvcGVydHkoJ2Zvcm1hdCcpID09PSBGb3JtYXRzLmRhdGU7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwicmV0cmFpdF9tMVwiOiB7XG4gICAgICAgIGFjdGlvbjogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG4gICAgICAgICAgICByZXRyYWl0KGNlbGxzLCAtMSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwicmV0cmFpdF9wMVwiOiB7IC8vIFRPRE86IG0xLi4uXG4gICAgICAgIGFjdGlvbjogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG4gICAgICAgICAgICByZXRyYWl0KGNlbGxzLCArMSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiYm9yZGVyXCI6IHtcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcbiAgICAgICAgICAgIGNlbGxzLmZvcm1hdCh7XG4gICAgICAgICAgICAgICAgYm9yZGVyX3RvcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBib3JkZXJfYm90dG9tOiB0cnVlLFxuICAgICAgICAgICAgICAgIGJvcmRlcl9sZWZ0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGJvcmRlcl9yaWdodDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwidW5tZXJnZVwiOiB7XG4gICAgICAgIGFjdGlvbjogdW5tZXJnZVxuICAgIH0sXG4gICAgXCJtZXJnZVwiOiB7XG4gICAgICAgIGFjdGlvbjogbWVyZ2VcbiAgICB9LFxuICAgIFwibWVyZ2VfY2VudGVyXCI6IHtcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbihjZWxsbGlzdDogQ2VsbExpc3QpIHtcblxuICAgICAgICAgICAgbGV0IHVubWVyZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IHNoZWV0ID0gY2VsbGxpc3Quc2hlZXQ7XG5cbiAgICAgICAgICAgIGZvcihsZXQgY2VsbCBvZiBjZWxsbGlzdC5jZWxscylcbiAgICAgICAgICAgICAgICBpZiggRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbCkuaGFzUHJvcGVydHkoXCJzcGFuXCIpICkge1xuICAgICAgICAgICAgICAgICAgICB1bm1lcmdlKCBuZXcgQ2VsbExpc3Qoc2hlZXQsIFtjZWxsXSkgKTtcbiAgICAgICAgICAgICAgICAgICAgdW5tZXJnZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodW5tZXJnZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBtZXJnZShjZWxsbGlzdCwgdHJ1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVuYWJsZWQ6IGZ1bmN0aW9uKGNlbGxsaXN0OiBDZWxsTGlzdCkge1xuXG4gICAgICAgICAgICBmb3IobGV0IGNlbGwgb2YgY2VsbGxpc3QuY2VsbHMpXG4gICAgICAgICAgICAgICAgaWYoIEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGwpLmhhc1Byb3BlcnR5KFwic3BhblwiKSApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGNzcyA9IGBcbiAgICA6aG9zdCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XG5cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiAxLjVlbTtcbiAgICB9XG5cbiAgICA6aG9zdCAudmJhciB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FiYWJhYjtcbiAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgfVxuXG4gICAgOmhvc3Qgc2VsZWN0IHtcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG5gXG5cbmNvbnN0IGl0ZW1jc3MgPSBgXG5cbiAgICA6aG9zdCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICA6aG9zdChbZGlzYWJsZWRdKSB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuXG4gICAgOmhvc3QoW3ZhbHVlXSkge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICAgIH1cblxuICAgIDpob3N0LCA6aG9zdCA+IGRpdiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIDpob3N0IHtcbiAgICAgICAgcGFkZGluZzogMXB4O1xuICAgIH1cblxuICAgIDpob3N0ID4gZGl2IHtcbiAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgIGhlaWdodDogY2FsYyggMS4yZW0gLSAxcHggKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC0xcHg7XG4gICAgICAgIHJpZ2h0OiAtMXB4O1xuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogY2FsYyggKCAxLjJlbSAtIDFweCAtIDJweCApIC8gMiApO1xuICAgICAgICAgICAgcmlnaHQ6IDFweDtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICB3aWR0aDogMDsgXG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICAtLXNpemU6IDRweDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1zaXplKSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogdmFyKC0tc2l6ZSkgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJvcmRlci10b3A6IHZhcigtLXNpemUpIHNvbGlkIGJsYWNrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgOmhvc3QoOmhvdmVyOm5vdCguZW5hYmxlZCkpLCA6aG9zdCg6aG92ZXI6bm90KC5lbmFibGVkKSkgPiBkaXYge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTY5Njk2O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgfVxuXG4gICAgOmhvc3QoLmVuYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2I2YjZiNjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzliOWI5YjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIH1cbmA7XG5cbmV4cG9ydCBjbGFzcyBDYWxjVG9vbGJhckl0ZW0gZXh0ZW5kcyBMSVNTKHtcbiAgICBjc3M6IGl0ZW1jc3Ncbn0pIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbnRlbnQuc3JjID0gYC4uLy4uLy4uLy4uL2Fzc2V0cy90YWJsZXVyL2ltZy90b29sYmFyLyR7dGhpcy5ob3N0LmdldEF0dHJpYnV0ZSgnbmFtZScpfS5wbmdgO1xuXG4gICAgICAgIGlmKCAhIHRoaXMuaG9zdC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykgKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKCBjb250ZW50ICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgbGV0IGNvbG9yX3BpY2tlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W3R5cGU9XCJjb2xvclwiXScpO1xuICAgICAgICAgICAgaWYoIGNvbG9yX3BpY2tlciA9PT0gbnVsbCApIHtcbiAgICAgICAgICAgICAgICBjb2xvcl9waWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGNvbG9yX3BpY2tlci5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY29sb3JcIik7XG4gICAgICAgICAgICAgICAgY29sb3JfcGlja2VyLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBjb2xvcl9waWNrZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NhbmNlbCcpKTtcblxuICAgICAgICAgICAgbGV0IGNhbmNlbCA9IGZhbHNlO1xuICAgICAgICAgICAgY29sb3JfcGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbmNlbCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjYW5jZWwgPSB0cnVlO1xuICAgICAgICAgICAgfSwge29uY2U6IHRydWV9KTtcblxuICAgICAgICAgICAgY29sb3JfcGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldikgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCBjYW5jZWwgKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICB0aGlzLmhvc3Quc2V0QXR0cmlidXRlKCd2YWx1ZScsIGNvbG9yX3BpY2tlci52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3N0LmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChcImNsaWNrXCIsIHtidWJibGVzOiB0cnVlfSkgKTtcblxuICAgICAgICAgICAgfSwge29uY2U6IHRydWV9KTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY29sb3JfcGlja2VyKTtcbiAgICAgICAgICAgIGNvbG9yX3BpY2tlci5jbGljaygpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKCBjb250ZW50LCBzcGFuICk7XG4gICAgfVxufVxuXG5MSVNTLmRlZmluZSgnY2FsYy10b29sYmFyLWl0ZW0nLCBDYWxjVG9vbGJhckl0ZW0pO1xuXG5leHBvcnQgY2xhc3MgQ2FsY1Rvb2xiYXIgZXh0ZW5kcyBMSVNTKHtcbiAgICBjb250ZW50LFxuICAgIGNzc1xufSkge1xuXG4gICAgI2J0bnM6IFJlY29yZDxzdHJpbmcsIEhUTUxFbGVtZW50PiA9IHt9O1xuXG4gICAgZGlzYWJsZUFsbEV4Y2VwdCguLi5leGNlcHRpb246IHN0cmluZ1tdKSB7XG4gICAgICAgIGZvcihsZXQgYnRuX25hbWUgaW4gdGhpcy4jYnRucylcbiAgICAgICAgICAgIGlmKCAhIGV4Y2VwdGlvbi5pbmNsdWRlcyhidG5fbmFtZSkgKVxuICAgICAgICAgICAgICAgIHRoaXMuI2J0bnNbYnRuX25hbWVdLnRvZ2dsZUF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgXG4gICAgICAgIGlmKCAhIGV4Y2VwdGlvbi5pbmNsdWRlcyhcImZvbnRfc2l6ZVwiKSApXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvcjxIVE1MU2VsZWN0RWxlbWVudD4oJy5mb250X3NpemUnKSEudG9nZ2xlQXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGxldCBmb250X3NpemVzID0gW1xuICAgICAgICAgICAgNiwgNywgOCwgOSwgMTAsIDEwLjUsIDExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE4LCAyMCwgMjEsIDIyLCAyNCwgMjYsIDI4LCAzMiwgMzYsIDQwLCA0MiwgNDQsIDQ4LCA1NCwgNjAsIDY2LCA3MiwgODAsIDg4LCA5NlxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IGJ0bnMgPSB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJ2NhbGMtdG9vbGJhci1pdGVtJyk7XG4gICAgICAgIGZvcihsZXQgYnRuIG9mIGJ0bnMpXG4gICAgICAgICAgICB0aGlzLiNidG5zW2J0bi5nZXRBdHRyaWJ1dGUoJ25hbWUnKSFdID0gYnRuO1xuXG4gICAgICAgIGNvbnN0IGZvbnRfc2l6ZXNfc2VsZWN0ID0gdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNlbGVjdEVsZW1lbnQ+KCcuZm9udF9zaXplJykhO1xuICAgICAgICBmb3IobGV0IGZvbnRfc2l6ZSBvZiBmb250X3NpemVzKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBuZXcgT3B0aW9uKGAke2ZvbnRfc2l6ZS50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnLCcpfSBwdGAsIGAke2ZvbnRfc2l6ZX1wdGApO1xuICAgICAgICAgICAgZm9udF9zaXplc19zZWxlY3QuYXBwZW5kKG9wdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgZWxlbSA9IGV2LnRhcmdldCEgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiggZWxlbS50YWdOYW1lICE9PSAnQ0FMQy1UT09MQkFSLUlURU0nKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgY29uc3QgbiA9IGVsZW0uZ2V0QXR0cmlidXRlKCduYW1lJykhIGFzIGtleW9mIHR5cGVvZiBmY3RzO1xuICAgICAgICAgICAgaWYoIGVsZW0uZ2V0QXR0cmlidXRlKCd0eXBlJykgPT09ICdmY3QnKSB7XG5cbiAgICAgICAgICAgICAgICBmY3RzW25dLmFjdGlvbih0aGlzLiNzaGVldC5zZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMuI3VwZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICBlbGVtLmhhc0F0dHJpYnV0ZSgndmFsdWUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZWxlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgnZW5hYmxlZCcpO1xuXG4gICAgICAgICAgICBsZXQgZm9ybWF0ID0gbmV3IEZvcm1hdCh7W25dOiB2YWx1ZSB9KTtcbiAgICAgICAgICAgIGZvcm1hdC5hcHBseVRvKCB0aGlzLiNzaGVldC5zZWxlY3Rpb24gKTtcbiAgICAgICAgICAgIHRoaXMuI3VwZGF0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb250X3NpemVzX3NlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcblxuICAgICAgICAgICAgLy9UT0RPLi4uXG4gICAgICAgICAgICBsZXQgZm9ybWF0ID0gbmV3IEZvcm1hdCh7Zm9udF9zaXplOiBmb250X3NpemVzX3NlbGVjdC52YWx1ZX0pO1xuICAgICAgICAgICAgZm9ybWF0LmFwcGx5VG8oIHRoaXMuI3NoZWV0LnNlbGVjdGlvbiApO1xuICAgICAgICAgICAgdGhpcy4jdXBkYXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICNzaGVldCE6Q2FsY1NoZWV0O1xuXG5cbiAgICAjdXBkYXRlKCkge1xuXG4gICAgICAgIGlmKCB0aGlzLiNzaGVldC5zZWxlY3Rpb24uY2VsbHMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGZvcm1hdCA9IEZvcm1hdC5leHRyYWN0Rm9ybWF0KHRoaXMuI3NoZWV0LnNlbGVjdGlvbik7XG5cbiAgICAgICAgZm9yKGxldCBuYW1lIGluIHRoaXMuI2J0bnMpIHtcblxuICAgICAgICAgICAgbGV0IGVuYWJsZWQgPSBmb3JtYXQuZ2V0UHJvcGVydHkobmFtZSkgPT09IHRydWU7XG4gICAgICAgICAgICBpZihuYW1lIGluIGZjdHMpXG4gICAgICAgICAgICAgICAgZW5hYmxlZCA9IGZjdHNbbmFtZSBhcyBrZXlvZiB0eXBlb2YgZmN0c10uZW5hYmxlZD8uKHRoaXMuI3NoZWV0LnNlbGVjdGlvbikgPz8gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMuI2J0bnNbbmFtZV0uY2xhc3NMaXN0LnRvZ2dsZSgnZW5hYmxlZCcsIGVuYWJsZWQgKVxuICAgICAgICB9XG5cbiAgICAgICAgLy9UT0RPLi4uXG4gICAgICAgIGNvbnN0IGZvbnRfc2l6ZXNfc2VsZWN0ID0gdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNlbGVjdEVsZW1lbnQ+KCcuZm9udF9zaXplJykhO1xuICAgICAgICBmb250X3NpemVzX3NlbGVjdC52YWx1ZSA9IGZvcm1hdC5nZXRQcm9wZXJ0eSgnZm9udF9zaXplJyk7XG4gICAgICAgIC8vVE9ETzogdXBkYXRlLi4uXG4gICAgfVxuXG4gICAgc3luY1RvKHNoZWV0OiBDYWxjU2hlZXQpIHtcblxuICAgICAgICB0aGlzLiNzaGVldCA9IHNoZWV0O1xuXG5cbiAgICAgICAgc2hlZXQuc2VsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldikgPT4ge1xuICAgICAgICAgICAgdGhpcy4jdXBkYXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLiN1cGRhdGUoKTtcblxuICAgIH1cblxufVxuXG5MSVNTLmRlZmluZSgnY2FsYy10b29sYmFyJywgQ2FsY1Rvb2xiYXIpOyIsImV4cG9ydCBkZWZhdWx0IFtcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIlIgMS0wMSBUYWJsZXVyIGV0IFJlcG9ydGluZ1wiLFxuICAgICAgICBzbmFtZTogXCJSMS0wMSBUYWJsZXVyXCIsXG4gICAgICAgIHBhdGggOiBcIlIxLTAxXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJDTVwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiQ01cIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIkNNMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIkNNMlwiXG4gICAgICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiVFBcIixcbiAgICAgICAgICAgICAgICBwYXRoOiBcIlRQXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgXCJUUDFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJUUDJcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lIDogXCJSIDEtMDIgQmFzZXMgZGUgRG9ubsOpZXMgUmVsYXRpb25uZWxsZXMgMVwiLFxuICAgICAgICBzbmFtZTogXCJSMS0wMiBCRFIxXCIsXG4gICAgICAgIHBhdGggOiBcIlIxLTAyXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBcIkNNXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJTbGlkZXNcIixcbiAgICAgICAgICAgICAgICBwYXRoOiBcIlNsaWRlc1wiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiQ00xXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQ00yXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQ00zXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQ000XCJcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiVFBcIiAsXG4gICAgICAgICAgICAgICAgcGF0aCA6IFwiVFBcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIlRQMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQMlwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQM1wiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQNFwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQNVwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ2hlYXQgU2hlZXRcIixcbiAgICAgICAgICAgICAgICBwYXRoOiBcIi9hc3NldHMvc3FsL2NoZWF0IHNoZWV0LnN2Z1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiUiAzLTAzIFRlY2hub2xvZ2llcyBXZWJcIixcbiAgICAgICAgc25hbWU6IFwiUjMtMDMgV2ViMVwiLFxuICAgICAgICBwYXRoIDogXCJSMy0wM1wiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ01cIixcbiAgICAgICAgICAgICAgICBwYXRoOiBcIkNNXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgXCJDTTFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDTTJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDTTNcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlRQXCIsXG4gICAgICAgICAgICAgICAgcGF0aDogXCJUUFwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiVFAxXCIsXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ2hlYXQgU2hlZXQgSFRNTFwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiL2Fzc2V0cy93ZWIvSFRNTDUvY2hlYXQgc2hlZXQuc3ZnXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lIDogXCJSIDUtMDYtVkNPRCBEw6l2ZWxvcHBlbWVudCBMb2dpY2llbFwiLFxuICAgICAgICBzbmFtZTogXCJSNS0wNi1WQ09EIERldiBMb2dcIixcbiAgICAgICAgcGF0aCA6IFwiUjUtMDYtVkNPRFwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ01cIixcbiAgICAgICAgICAgICAgICBwYXRoOiBcIkNNXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgXCJDTTFcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cbl07XG5cbmV4cG9ydCBjb25zdCByb290X3BhdGggPSBbXCJsb2NhbGhvc3RcIiwgXCIxMjcuMC4wLjFcIl0uaW5jbHVkZXMobG9jYXRpb24uaG9zdG5hbWUpID8gXCIvZGlzdC9kZXYvcGFnZXMvXCIgOiBcIi9Db3Vycy9kaXN0L2Rldi9wYWdlcy9cIjsiLCJcbmltcG9ydCBwYWdlcywge3Jvb3RfcGF0aH0gZnJvbSBcIi4vY29udGVudFwiO1xuXG4vKlxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXByaW50JywgKCkgPT4ge1xuICAvLy4uLlxufSk7XG4qL1xuXG4vL1RPRE86IGxpbmtzLi4uXG5jb25zdCBtYWluICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKSE7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpITtcblxuY29uc3QgdGl0bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCJoMSwgaDIsIGgzLCBoNFwiKTtcblxudHlwZSBOb2RlID0ge1xuICAgIGh0bWwgICAgOiBIVE1MRWxlbWVudCxcbiAgICBsZXZlbCAgIDogbnVtYmVyLFxuICAgIHBhcmVudCAgOiBudWxsfE5vZGUsXG4gICAgY2hpbGRyZW46IE5vZGVbXVxufTtcblxuY29uc3QgaHRyZWU6IE5vZGUgPSB7XG4gICAgaHRtbCAgICA6IG1haW4sXG4gICAgbGV2ZWwgICA6IDAsXG4gICAgcGFyZW50ICA6IG51bGwsXG4gICAgY2hpbGRyZW46IFtdLFxufTtcbmxldCBodHJlZV9jdXJzb3IgPSBodHJlZTtcbmZvcihsZXQgdGl0bGUgb2YgdGl0bGVzKSB7XG4gICAgY29uc3QgbGV2ZWwgPSArdGl0bGUudGFnTmFtZS5zbGljZSgxKTtcbiAgICBcbiAgICB3aGlsZSggbGV2ZWwgPD0gaHRyZWVfY3Vyc29yLmxldmVsIClcbiAgICAgICAgaHRyZWVfY3Vyc29yID0gaHRyZWVfY3Vyc29yLnBhcmVudCE7XG5cbiAgICBjb25zdCBlbGVtOiBOb2RlID0ge1xuICAgICAgICBodG1sOiB0aXRsZSxcbiAgICAgICAgbGV2ZWwsXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgcGFyZW50OiBodHJlZV9jdXJzb3JcbiAgICB9O1xuXG5cbiAgICBodHJlZV9jdXJzb3IuY2hpbGRyZW4ucHVzaChlbGVtKTtcblxuICAgIGh0cmVlX2N1cnNvciA9IGVsZW07XG59XG5cbmZ1bmN0aW9uIHNlYXJjaEN1ckhlYWRlcihodHJlZTogTm9kZSwgcG9zaXRpb246IG51bWJlcik6IG51bGwgfCBOb2RlIHtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBodHJlZS5jaGlsZHJlbjtcblxuICAgIGZvcihsZXQgaSA9IGhlYWRlcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpXG4gICAgICAgIGlmKCBoZWFkZXJzW2ldLmh0bWwub2Zmc2V0VG9wIDw9IHBvc2l0aW9uICsgMzIgKVxuICAgICAgICAgICAgcmV0dXJuIHNlYXJjaEN1ckhlYWRlcihoZWFkZXJzW2ldLCBwb3NpdGlvbikgPz8gaGVhZGVyc1tpXTtcblxuICAgIHJldHVybiBudWxsO1xufVxuXG5jb25zdCBoaWQgPSBbXG4gICAgW10sXG4gICAgW1wiSVwiLCBcIklJXCIsIFwiSUlJXCIsIFwiSVZcIl0sXG4gICAgW1wiMVwiLCBcIjJcIixcIjNcIixcIjVcIixcIjZcIixcIjdcIixcIjhcIixcIjlcIl0sXG4gICAgW1wiYVwiLCBcImJcIixcImNcIixcImRcIixcImVcIixcImZcIixcImdcIixcImhcIl0sXG5dXG5cbmZ1bmN0aW9uIGdldFRpdGxlUHJlZml4KHM6IE5vZGUpIHtcblxuICAgIGlmKCBzLmxldmVsID49IGhpZC5sZW5ndGggKVxuICAgICAgICByZXR1cm4gXCJcIjtcblxuICAgIGNvbnN0IGlkeCA9IHMucGFyZW50IS5jaGlsZHJlbi5pbmRleE9mKHMpO1xuXG4gICAgY29uc3QgbnVtID0gaGlkW3MubGV2ZWxdW2lkeF07XG5cbiAgICByZXR1cm4gYCR7bnVtfS4gYDtcbn1cblxuZnVuY3Rpb24gYnVpbGRNZW51KG5vZGVzOiBOb2RlW10pIHtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG5cbiAgICBtZW51LmFwcGVuZCggLi4uIG5vZGVzLm1hcCggKHMsaWR4KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgaXRlbS50ZXh0Q29udGVudD0gYCR7Z2V0VGl0bGVQcmVmaXgocyl9JHtzLmh0bWwudGV4dENvbnRlbnR9YDtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGAjJHtzLmh0bWwuaWR9YCk7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pICk7XG5cbiAgICByZXR1cm4gbWVudTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlSGVhZGVyKCkge1xuXG4gICAgY29uc3QgbGFzdCA9IHNlYXJjaEN1ckhlYWRlciggaHRyZWUsIG1haW4uc2Nyb2xsVG9wKSE7XG5cbiAgICBsZXQgaGVhZGVycyA9IFtdO1xuICAgIGxldCBjdXJzb3IgID0gbGFzdDtcblxuICAgIGlmKCBjdXJzb3IgIT09IG51bGwpXG4gICAgICAgIHdoaWxlKGN1cnNvci5odG1sICE9PSBtYWluKSB7XG4gICAgICAgICAgICBoZWFkZXJzLnB1c2goY3Vyc29yKTtcbiAgICAgICAgICAgIGN1cnNvciA9IGN1cnNvci5wYXJlbnQhO1xuICAgICAgICB9XG5cbiAgICBjb25zdCBodG1sID0gaGVhZGVycy5yZXZlcnNlKCkubWFwKCAoaG5vZGUsaSkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGggPSBobm9kZS5odG1sO1xuICAgICAgICBjb25zdCBoX2h0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSBgJHtnZXRUaXRsZVByZWZpeChobm9kZSl9JHtoLnRleHRDb250ZW50fWA7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgYCMke2guaWR9YCk7XG5cbiAgICAgICAgY29uc3QgbWVudSA9IGJ1aWxkTWVudShobm9kZS5wYXJlbnQhLmNoaWxkcmVuKTtcbiAgICAgICAgaF9odG1sLmFwcGVuZChsaW5rLCBtZW51KTtcblxuICAgICAgICByZXR1cm4gaF9odG1sO1xuICAgIH0pO1xuXG4gICAgaWYoIGxhc3QgIT09IG51bGwgJiYgbGFzdC5jaGlsZHJlbi5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgZW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgICAgICBlbXB0eS5hcHBlbmQoIGJ1aWxkTWVudShsYXN0LmNoaWxkcmVuKSApO1xuXG4gICAgICAgIGh0bWwucHVzaChlbXB0eSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlX3BhZ2VfaHJlZihwYXRocHJlZml4OiBzdHJpbmcsIHBhdGg6IHN0cmluZywgZGVzYzogYW55KSB7XG5cbiAgICAgICAgLy8gaDRjay4uLlxuICAgICAgICBpZiggcGF0aFswXSA9PT0gXCIvXCIgKVxuICAgICAgICAgICAgcmV0dXJuIGAke3Jvb3RfcGF0aC5zbGljZSgwLC02KX0vJHtwYXRofWA7XG5cbiAgICAgICAgbGV0IGhyZWYgPSBgJHtwYXRocHJlZml4fSR7cGF0aH0vYDtcblxuICAgICAgICB3aGlsZShkZXNjLmNoaWxkcmVuPy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRlc2MgPSBkZXNjLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgaHJlZiArPSBgJHtkZXNjLnBhdGggPz8gZGVzY30vYDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBocmVmO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VfcGFnZV9tZW51KHBhdGhwcmVmaXg6IHN0cmluZywgcGF0aDogc3RyaW5nLCBwYWdlczogYW55KSB7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBwYWdlcy5maW5kKCAocGFnZTogYW55KSA9PiBwYWdlID09PSBwYXRoIHx8IHBhZ2UucGF0aCA9PT0gcGF0aCApITtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgbGluay50ZXh0Q29udGVudCA9IGRlc2Muc25hbWUgPz8gZGVzYy5uYW1lID8/IGRlc2M7XG4gICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIG1ha2VfcGFnZV9ocmVmKHBhdGhwcmVmaXgsIHBhdGgsIGRlc2MpICk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gICAgXG4gICAgICAgICAgICBtZW51LmFwcGVuZCggLi4uIHBhZ2VzLm1hcCggKHBhZ2U6YW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQ9IHBhZ2UubmFtZSA/PyBwYWdlO1xuXG4gICAgICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIG1ha2VfcGFnZV9ocmVmKHBhdGhwcmVmaXgsIHBhZ2UucGF0aD8/cGFnZSwgcGFnZSkgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH0pICk7XG4gICAgXG4gICAgICAgICAgICBodG1sLmFwcGVuZChsaW5rLCBtZW51KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICBcbiAgICBsZXQgY3VycGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zbGljZShyb290X3BhdGgubGVuZ3RoKS5zcGxpdCgnLycpO1xuXG4gICAgY29uc3QgbW9kdWxlX2h0bWwgPSBtYWtlX3BhZ2VfbWVudShyb290X3BhdGgsIGN1cnBhZ2VbMF0sIHBhZ2VzKTtcblxuICAgIGNvbnN0IGRlc2MgPSBwYWdlcy5maW5kKCAocGFnZTogYW55KSA9PiBwYWdlLnBhdGggPT09IGN1cnBhZ2VbMF0gKSE7XG4gICAgY29uc3QgdHlwZV9odG1sICAgPSBtYWtlX3BhZ2VfbWVudShyb290X3BhdGggKyBjdXJwYWdlWzBdICsgXCIvXCIsIGN1cnBhZ2VbMV0sIGRlc2MuY2hpbGRyZW4pO1xuXG4gICAgY29uc3QgZGVzY190eXBlID0gZGVzYy5jaGlsZHJlbi5maW5kKCAocGFnZTogYW55KSA9PiAocGFnZT8ucGF0aCA/PyBwYWdlKSA9PT0gY3VycGFnZVsxXSApITtcbiAgICBpZiggdHlwZW9mIGRlc2NfdHlwZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAvLyB0aXRsZSBudW1cbiAgICAgICAgY29uc3QgZGVzYzJfaWR4ID0gZGVzY190eXBlLmNoaWxkcmVuLmZpbmRJbmRleCggKHBhZ2U6IGFueSkgPT4gcGFnZT8ucGF0aCA/PyBwYWdlID09PSBjdXJwYWdlWzJdICkhO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1oZWFkZXJfc3RhcnRfaWRcIiwgYCR7ZGVzYzJfaWR4fWApO1xuICAgICAgICAvLyBtZW51XG4gICAgICAgIGNvbnN0IHNlc3Npb25faHRtbCAgID0gbWFrZV9wYWdlX21lbnUocm9vdF9wYXRoICsgY3VycGFnZVswXSArIFwiL1wiKyBjdXJwYWdlWzFdICsgXCIvXCIsIGN1cnBhZ2VbMl0sIGRlc2NfdHlwZS5jaGlsZHJlbik7XG4gICAgICAgIGh0bWxbMF0gPSBzZXNzaW9uX2h0bWw7XG4gICAgfVxuXG4gICAgaGVhZGVyLnJlcGxhY2VDaGlsZHJlbihtb2R1bGVfaHRtbCwgdHlwZV9odG1sLCAuLi5odG1sKTtcbn1cblxuY29uc3QgcCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKTtcbmlmKCAhIHAuaGFzKCdkcycpICkge1xuICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlSGVhZGVyKTtcbiAgICB1cGRhdGVIZWFkZXIoKTtcbn0iLCIvL2h0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ5NDE0My9jcmVhdGluZy1hLW5ldy1kb20tZWxlbWVudC1mcm9tLWFuLWh0bWwtc3RyaW5nLXVzaW5nLWJ1aWx0LWluLWRvbS1tZXRob2RzLW9yLXByb1xuZXhwb3J0IGZ1bmN0aW9uIHN0cjJodG1sPFQgZXh0ZW5kcyBIVE1MRWxlbWVudD4oaHRtbDogc3RyaW5nKTogVCB7XG4gICAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICBodG1sID0gaHRtbC50cmltKCk7IC8vIE5ldmVyIHJldHVybiBhIHRleHQgbm9kZSBvZiB3aGl0ZXNwYWNlIGFzIHRoZSByZXN1bHRcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkISBhcyBUO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyMkRGKGh0bWw6IHN0cmluZyk6IERvY3VtZW50RnJhZ21lbnQge1xuICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgaHRtbCA9IGh0bWwudHJpbSgpOyAvLyBOZXZlciByZXR1cm4gYSB0ZXh0IG5vZGUgb2Ygd2hpdGVzcGFjZSBhcyB0aGUgcmVzdWx0XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudDtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwidmFyIHdlYnBhY2tRdWV1ZXMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIHF1ZXVlc1wiKSA6IFwiX193ZWJwYWNrX3F1ZXVlc19fXCI7XG52YXIgd2VicGFja0V4cG9ydHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGV4cG9ydHNcIikgOiBcIl9fd2VicGFja19leHBvcnRzX19cIjtcbnZhciB3ZWJwYWNrRXJyb3IgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGVycm9yXCIpIDogXCJfX3dlYnBhY2tfZXJyb3JfX1wiO1xudmFyIHJlc29sdmVRdWV1ZSA9IChxdWV1ZSkgPT4ge1xuXHRpZihxdWV1ZSAmJiBxdWV1ZS5kIDwgMSkge1xuXHRcdHF1ZXVlLmQgPSAxO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tKSk7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0gPyBmbi5yKysgOiBmbigpKSk7XG5cdH1cbn1cbnZhciB3cmFwRGVwcyA9IChkZXBzKSA9PiAoZGVwcy5tYXAoKGRlcCkgPT4ge1xuXHRpZihkZXAgIT09IG51bGwgJiYgdHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIikge1xuXHRcdGlmKGRlcFt3ZWJwYWNrUXVldWVzXSkgcmV0dXJuIGRlcDtcblx0XHRpZihkZXAudGhlbikge1xuXHRcdFx0dmFyIHF1ZXVlID0gW107XG5cdFx0XHRxdWV1ZS5kID0gMDtcblx0XHRcdGRlcC50aGVuKChyKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXhwb3J0c10gPSByO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSwgKGUpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFcnJvcl0gPSBlO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgb2JqID0ge307XG5cdFx0XHRvYmpbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChmbihxdWV1ZSkpO1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdH1cblx0dmFyIHJldCA9IHt9O1xuXHRyZXRbd2VicGFja1F1ZXVlc10gPSB4ID0+IHt9O1xuXHRyZXRbd2VicGFja0V4cG9ydHNdID0gZGVwO1xuXHRyZXR1cm4gcmV0O1xufSkpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5hID0gKG1vZHVsZSwgYm9keSwgaGFzQXdhaXQpID0+IHtcblx0dmFyIHF1ZXVlO1xuXHRoYXNBd2FpdCAmJiAoKHF1ZXVlID0gW10pLmQgPSAtMSk7XG5cdHZhciBkZXBRdWV1ZXMgPSBuZXcgU2V0KCk7XG5cdHZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cdHZhciBjdXJyZW50RGVwcztcblx0dmFyIG91dGVyUmVzb2x2ZTtcblx0dmFyIHJlamVjdDtcblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqKSA9PiB7XG5cdFx0cmVqZWN0ID0gcmVqO1xuXHRcdG91dGVyUmVzb2x2ZSA9IHJlc29sdmU7XG5cdH0pO1xuXHRwcm9taXNlW3dlYnBhY2tFeHBvcnRzXSA9IGV4cG9ydHM7XG5cdHByb21pc2Vbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChxdWV1ZSAmJiBmbihxdWV1ZSksIGRlcFF1ZXVlcy5mb3JFYWNoKGZuKSwgcHJvbWlzZVtcImNhdGNoXCJdKHggPT4ge30pKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBwcm9taXNlO1xuXHRib2R5KChkZXBzKSA9PiB7XG5cdFx0Y3VycmVudERlcHMgPSB3cmFwRGVwcyhkZXBzKTtcblx0XHR2YXIgZm47XG5cdFx0dmFyIGdldFJlc3VsdCA9ICgpID0+IChjdXJyZW50RGVwcy5tYXAoKGQpID0+IHtcblx0XHRcdGlmKGRbd2VicGFja0Vycm9yXSkgdGhyb3cgZFt3ZWJwYWNrRXJyb3JdO1xuXHRcdFx0cmV0dXJuIGRbd2VicGFja0V4cG9ydHNdO1xuXHRcdH0pKVxuXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdGZuID0gKCkgPT4gKHJlc29sdmUoZ2V0UmVzdWx0KSk7XG5cdFx0XHRmbi5yID0gMDtcblx0XHRcdHZhciBmblF1ZXVlID0gKHEpID0+IChxICE9PSBxdWV1ZSAmJiAhZGVwUXVldWVzLmhhcyhxKSAmJiAoZGVwUXVldWVzLmFkZChxKSwgcSAmJiAhcS5kICYmIChmbi5yKyssIHEucHVzaChmbikpKSk7XG5cdFx0XHRjdXJyZW50RGVwcy5tYXAoKGRlcCkgPT4gKGRlcFt3ZWJwYWNrUXVldWVzXShmblF1ZXVlKSkpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBmbi5yID8gcHJvbWlzZSA6IGdldFJlc3VsdCgpO1xuXHR9LCAoZXJyKSA9PiAoKGVyciA/IHJlamVjdChwcm9taXNlW3dlYnBhY2tFcnJvcl0gPSBlcnIpIDogb3V0ZXJSZXNvbHZlKGV4cG9ydHMpKSwgcmVzb2x2ZVF1ZXVlKHF1ZXVlKSkpO1xuXHRxdWV1ZSAmJiBxdWV1ZS5kIDwgMCAmJiAocXVldWUuZCA9IDApO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ21vZHVsZScgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMi9pbmRleC50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTIvaW5kZXguY3NzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00yL2luZGV4Lm1kXCIpO1xuIiwiIl0sIm5hbWVzIjpbIlNoYWRvd0NmZyIsIl9fY3N0cl9ob3N0IiwiQ0FOX0hBVkVfU0hBRE9XIiwiX2Nhbkhhc1NoYWRvdyIsInRhZyIsImluY2x1ZGVzIiwiX2VsZW1lbnQydGFnbmFtZSIsIkxJU1MiLCJleHRlbmRzIiwicF9leHRlbmRzIiwiaG9zdCIsInBfaG9zdCIsImRlcGVuZGVuY2llcyIsInBfZGVwcyIsImF0dHJpYnV0ZXMiLCJwX2F0dHJzIiwicGFyYW1zIiwiY29udGVudCIsImNzcyIsInNoYWRvdyIsInBfc2hhZG93IiwiSFRNTEVsZW1lbnQiLCJfZXh0ZW5kcyIsIk9iamVjdCIsImNhbkhhc1NoYWRvdyIsIkVycm9yIiwidW5kZWZpbmVkIiwicHVzaCIsIkhUTUxUZW1wbGF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJ0cmltIiwiUmVzcG9uc2UiLCJ0ZXh0IiwiTElTU0Jhc2UiLCJQYXJhbWV0ZXJzIiwic3R5bGVzaGVldHMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJmZXRjaF9jc3MiLCJDU1NTdHlsZVNoZWV0IiwiSFRNTFN0eWxlRWxlbWVudCIsInNoZWV0Iiwic3R5bGUiLCJyZXBsYWNlIiwibWFwIiwiaWR4IiwiY29uc3RydWN0b3IiLCJhdHRycyIsInNldEF0dHJEZWZhdWx0IiwiYXR0ciIsInZhbHVlIiwic2V0UGFyYW0iLCJuYW1lIiwib25BdHRyQ2hhbmdlZCIsIl9uYW1lIiwiX29sZFZhbHVlIiwiX25ld1ZhbHVlIiwiaXNJbkRPTSIsIm9uRE9NQ29ubmVjdGVkIiwib25ET01EaXNjb25uZWN0ZWQiLCJleHRlbmRzTElTUyIsIkxpc3MiLCJwYXJhbWV0ZXJzIiwiYXNzaWduIiwiRXh0ZW5kZWRMSVNTIiwidCIsImlkIiwiYnVpbGRMSVNTSG9zdCIsIl9wYXJhbXMiLCJhbHJlYWR5RGVjbGFyZWRDU1MiLCJTZXQiLCJHRVQiLCJTeW1ib2wiLCJTRVQiLCJwcm9wZXJ0aWVzIiwiZnJvbUVudHJpZXMiLCJuIiwiZW51bWVyYWJsZSIsImdldCIsInNldCIsIkF0dHJpYnV0ZXMiLCJkYXRhIiwiZGVmYXVsdHMiLCJzZXR0ZXIiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiTElTU0hvc3RCYXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJpc0luaXQiLCJpbml0aWFsaXplIiwiYXBpIiwiaW5pdCIsIkxJU1NTeW5jIiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCJjb25uZWN0ZWRDYWxsYmFjayIsImN1c3RvbUVsZW1lbnRzIiwidXBncmFkZSIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwib25DbGlja0V2ZW50Iiwib2JzIiwiZ2V0QXR0cmlidXRlIiwiYWRvcHRlZFN0eWxlU2hlZXRzIiwic2hhcmVkQ1NTIiwiY3Nzc2VsZWN0b3IiLCJDU1NTZWxlY3RvciIsImhhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImh0bWxfc3R5bGVzaGVldHMiLCJydWxlIiwiY3NzUnVsZXMiLCJjc3NUZXh0IiwiaGVhZCIsImFwcGVuZCIsImFkZCIsInRlbXBsYXRlX2VsZW0iLCJzdHIiLCJfIiwibWF0Y2giLCJjaGlsZE5vZGVzIiwib2JqIiwiaGFzU2hhZG93IiwiZ2V0UGFydCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRQYXJ0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJoYXNBdHRyaWJ1dGUiLCJ0YWdOYW1lIiwicmVtb3ZlQXR0cmlidXRlIiwib2JzZXJ2ZWRBdHRyaWJ1dGVzIiwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIiwib2xkVmFsdWUiLCJuZXdWYWx1ZSIsIl9ET01Db250ZW50TG9hZGVkIiwicmVhZHlTdGF0ZSIsImRlZmluZSIsInRhZ25hbWUiLCJDb21wb25lbnRDbGFzcyIsIkNsYXNzIiwiaHRtbHRhZyIsImFsbCIsIkxJU1NjbGFzcyIsIm9wdHMiLCJpbnNlcnRHbG9iYWxDU1NSdWxlcyIsImNzc19zdHlsZSIsInJlcGxhY2VTeW5jIiwiaW5zZXJ0UnVsZSIsIkRFTEVHQVRFRF9FVkVOVFMiLCJBTFJFQURZX1BST0NFU1NFRCIsImV2IiwiaGFuZGxlcnMiLCJ0eXBlIiwiZWxlbSIsImNvbXBvc2VkUGF0aCIsIlNoYWRvd1Jvb3QiLCJ3aW5kb3ciLCJ0YXJnZXQiLCJzZWxlY3RvciIsImhhbmRsZXIiLCJtYXRjaGVzIiwiaW5zZXJ0R2xvYmFsRGVsZWdhdGVkTGlzdGVuZXIiLCJldmVudF9uYW1lIiwiY2xvc2VzdCIsImVsZW1lbnQiLCJyZXN1bHQiLCJyb290IiwiZ2V0Um9vdE5vZGUiLCJidWlsZCIsInBhcmVudCIsImNsYXNzZXMiLCJjc3N2YXJzIiwibGlzdGVuZXJzIiwiQ3VzdG9tQ2xhc3MiLCJ3aGVuRGVmaW5lZCIsInRvTG93ZXJDYXNlIiwiY2xhc3NMaXN0Iiwic2V0UHJvcGVydHkiLCJ0b2dnbGVBdHRyaWJ1dGUiLCJkYXRhc2V0IiwicmVwbGFjZUNoaWxkcmVuIiwiZ2V0TElTUyIsImJ1aWxkU3luYyIsImluaXRpYWxpemVTeW5jIiwiZ2V0TElTU1N5bmMiLCJjYWxsYmFjayIsIndoZW5BbGxEZWZpbmVkIiwidGFnbmFtZXMiLCJpc0RlZmluZWQiLCJnZXROYW1lIiwiX2J1aWxkUVMiLCJ0YWduYW1lX29yX3BhcmVudCIsInFzIiwicXNvIiwicXNhIiwiZWxlbWVudHMiLCJwcm9taXNlcyIsInFzYyIsInJlcyIsInFzU3luYyIsInFzYVN5bmMiLCJxc2NTeW5jIiwiTElTU19BdXRvIiwibmF2aWdhdG9yIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIiwiY29udHJvbGxlciIsInNyYyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwibXV0YXRpb24iLCJhZGRpdGlvbiIsImFkZGVkTm9kZXMiLCJFbGVtZW50Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJyZXNvdXJjZXMiLCJkZWZpbmVXZWJDb21wb25lbnQiLCJmaWxlcyIsImpzIiwia2xhc3MiLCJXZWJDb21wb25lbnQiLCJmaWxlbmFtZXMiLCJmaWxlIiwiZW5kc1dpdGgiLCJfaW1wb3J0IiwiX2ZldGNoVGV4dCIsImkiLCJDc3RtRXZlbnQiLCJDdXN0b21FdmVudCIsImFyZ3MiLCJkZXRhaWwiLCJmZXRjaFJlc291cmNlIiwicmVzb3VyY2UiLCJmZXRjaCIsInVyaSIsImlzTGlzc0F1dG8iLCJvcHRpb25zIiwiaGVhZGVycyIsInJlc3BvbnNlIiwic3RhdHVzIiwiZGVmYXVsdCIsImUiLCJjb25zb2xlIiwibG9nIiwiSFRNTENMQVNTX1JFR0VYIiwiZWxlbWVudE5hbWVMb29rdXBUYWJsZSIsImV4ZWMiLCJGb3JtYXRzIiwic2hlZXRfZm9ybWF0X2NvbnRlbnQiLCJnZXRSYW5nZSIsImZvcm1hdCIsImZvbnRfc2l6ZSIsImZvcmVncm91bmRfY29sb3IiLCJiYWNrZ3JvdW5kX2NvbG9yIiwic2hlZXRfdG9vbGJhcl9mb3JtYXRfY29udGVudCIsInN5bmNUbyIsImRpc2FibGVBbGxFeGNlcHQiLCJzaGVldF9hbGlnbiIsInNoZWV0X3Rvb2xiYXJfYWxpZ24iLCJldXJvcyIsInBvdXJjZW50IiwibnVtYmVyIiwiZGF0ZSIsInByZWNpc2lvbiIsInNoZWV0X3Rvb2xiYXIiLCJib3JkZXJfdG9wIiwiYm9yZGVyX2JvdHRvbSIsImJvcmRlcl9sZWZ0IiwiYm9yZGVyX3JpZ2h0IiwiYm9yZGVyX2NvbG9yIiwiaW5kZW50Iiwic3BhbiIsImFsaWduX2NlbnRlciIsInZhbGlnbl9taWRkbGUiLCJzdHIyaHRtbCIsIlJhbmdlT3ZlcmxheSIsIkV2ZW50VGFyZ2V0Iiwib3ZlcmxheSIsImNsYXNzbGlzdCIsInVwZGF0ZSIsInNldFJhbmdlIiwicmFuZ2UiLCJwbGFnZV9uYW1lIiwiZ2V0UmVjdCIsInJlY3QiLCJ0b2dnbGUiLCJzZXRSZWN0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkZvcm11bGFSZWYiLCJzZXRDb2xvciIsImNvbG9yX2lkIiwicmVtb3ZlIiwiUmVjb3B5SGFuZGxlIiwieCIsInkiLCJ3IiwiaCIsIkZvcm11bGEiLCJDYWxjU2hlZXQiLCJDZWxsTGlzdCIsIkZvcm1hdE1hbmFnZXIiLCJjdHJsS2V5IiwiY2hhbmdlZCIsImtleSIsInNlbGVjdGlvbiIsInRvZ2dsZUZvcm1hdCIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJkaXNwYXRjaEV2ZW50IiwiZmxvYXQyRGF0ZSIsImZsb2F0IiwiRGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwiZGF0ZTJGbG9hdCIsImJlZyIsImdldFRpbWUiLCJ0b0ZpeGVkIiwiZm9ybWF0UmF3IiwicHRoaXMiLCJyYXdDb250ZW50IiwidG9TdHJpbmciLCJjYWxsIiwiY2FjaGVkVmFsdWUiLCJwcmVjIiwidG9QcmVjaXNpb24iLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJnZXRTaGVldEZyb21DZWxsIiwidG9Mb2NhbGVTdHJpbmciLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJzbGljZSIsIkZvcm1hdCIsImFwcGx5VG8iLCJjZWxsIiwiYyIsImNlbGxzIiwidmFsIiwidGV4dENvbnRlbnQiLCJyIiwiaiIsInJlbGF0aXZlVG8iLCJzdGFydHNXaXRoIiwiZ2V0UHJvcGVydHkiLCJoYXNQcm9wZXJ0eSIsImV4dHJhY3RGb3JtYXQiLCJmMiIsInZhbHVlcyIsIml0ZW0iLCJnZXRQcm9wZXJ0eVZhbHVlIiwiY29sc3BhbiIsInJvd3NwYW4iLCJDYWxjRm9ybXVsYSIsInN0YXRlcyIsImNlbGxfZWRpdCIsInN0YXRlIiwiY3Vyc29yIiwiZmlyc3RDZWxsIiwiaXNSTyIsInJhbmdlc190b2tlbiIsImRyb3ciLCJkY29sIiwibmV3X3JhbmdlcyIsInBvcyIsImNlbGxQb3MiLCJsYXN0SW5kZXhPZiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm5ld19mb3JtdWxhIiwib2Zmc2V0IiwiZW5kIiwicGFyc2VfZm9ybXVsYSIsInJhbmdlc1Rva2VuIiwicmVzZXRDYWNoZSIsImV4dHJhY3RUb2tlbiIsInRva2VuIiwiaGFzQ29tbWEiLCJOb2RlIiwiY2hpbGRyZW4iLCJmY3QiLCJldmFsIiwidG9OdW1iZXIiLCJhIiwiTnVtYmVyIiwib3BfaW1wbCIsImIiLCJNYXRoIiwicG93Iiwib3BfcHJpbyIsIm9wcyIsIm9wIiwidG9rZW5saXN0MlRyZWUiLCJ0b2tlbnMiLCJuYiIsInJhdyIsImN1ciIsInByaW9yaXR5IiwiZmluZEluZGV4IiwidV9vcCIsIm9wX3Rva2VuIiwibGVmdCIsInJpZ2h0IiwiY3VyVG9rZW4iLCJub2RlIiwicmFuZ2VzIiwiZmlsdGVyIiwiUGxhZ2VGb3JtdWxhIiwiY29kZSIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInNlbGVjdGVkIiwiZ2V0Q2VsbHMiLCJjbGVhciIsImJsdXIiLCJQbGFnZVNlbGVjdG9yIiwic2VsZWN0ZWRfY2VsbHMiLCJjb2xzIiwidGJvZHkiLCJjb2xfaWQiLCJjbGllbnRYIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwicm93cyIsInJvd19pZCIsImNsaWVudFkiLCJtYWluIiwib25fbW91c2VfbW92ZSIsInJlcGxhY2VBbGwiLCJnZXRWaXNpYmxlQ2VsbCIsInJlZiIsInBvczJyZWYiLCJuYlJvd3MiLCJuYkNvbHMiLCJvbmNlIiwiaXNBY3RpdmUiLCJvbklucHV0IiwicnJhbmdlIiwiZ2V0U2VsZWN0aW9uIiwiZ2V0UmFuZ2VBdCIsInN0YXJ0T2Zmc2V0IiwiY2hpbGQiLCJub2RlVHlwZSIsIlRFWFRfTk9ERSIsInN0YXJ0Q29udGFpbmVyIiwiY3JlYXRlUmFuZ2UiLCJzZWwiLCJzZXRTdGFydCIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJwYXJzZUlucHV0IiwidGVzdF9udW1iZXIiLCJpc05hTiIsInBhcnRzIiwic3BsaXQiLCJ0ZXN0X2RhdGUiLCJnZXRGdWxsWWVhciIsIlN0YXRlIiwicHJldl9zdGF0ZSIsIlN0YXRlcyIsImVudHJpZXMiLCJzIiwidGJsX29mZnNldCIsIm9mZnNldFRvcCIsInN0YXJ0Iiwib2Zmc2V0TGVmdCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0Iiwicm93X2RpZmYiLCJjb2xfZGlmZiIsInJvdyIsImNvbCIsInJlY29weSIsImNvcHkiLCJsYXN0X3JlY29weV90YXJnZXQiLCJsYXN0X3JlY29weV9kaXIiLCJvbl9yZWNvcHlfbW92ZSIsImRfcHgiLCJ3aWR0aCIsImRfcHkiLCJoZWlnaHQiLCJkX3giLCJkX3kiLCJzaWduIiwiYWJzIiwicHJldiIsImRpZmZfeCIsImRpZmZfeSIsInBvc19jdXIiLCJjbGFzc05hbWUiLCJmb3JtdWxhX2JhciIsInBsYWdlIiwiZm9ybXVsYSIsInJvIiwiaXNfcm8iLCJmb2N1cyIsImRfcm93IiwiZF9jb2wiLCJuZXh0IiwiYWx0S2V5IiwiZHN0IiwiZGVlcENsb25lIiwiZGVsZXRlRm9ybWF0IiwiZGVsZXRlQ29udGVudCIsImJ1YmJsZXMiLCJvbklucHV0MiIsInJhbmdlc19jb2xvcnMiLCJjdXJfb2Zmc2V0IiwicmFuZ2VfbmFtZSIsInJhbmdlc19uYW1lcyIsImtleXMiLCJ3YXJuIiwicGFyZW50RWxlbWVudCIsInJlc2l6ZSIsIm5icm93cyIsIm5iY29scyIsImNvbF9odG1sIiwiY29sZ3JvdXAiLCJ0aCIsInJvd19odG1sIiwic2V0Q29sU2l6ZSIsInNpemUiLCJyZWYycG9zIiwiaHRtbCIsInRhYmxlIiwicmVzaXplT2JzIiwiUmVzaXplT2JzZXJ2ZXIiLCJmcm9tIiwidG8iLCJIVE1MVGFibGVDZWxsRWxlbWVudCIsImJlZ19yb3ciLCJiZWdfY29sIiwiZW5kX3JvdyIsImVuZF9jb2wiLCJlbmRfbGluZV9jb2wiLCJzZXAiLCJzZWFyY2giLCJjaGFyQ29kZUF0IiwiY29sX3N0ciIsImZpcnN0RWxlbWVudENoaWxkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic29ydCIsIm1pbiIsIm1heCIsIm5iX2NvbHMiLCJmbG9vciIsImYiLCJpc0Zvcm1hdCIsInJhd192YWwiLCJ2IiwiZGlmZiIsImZvcm1hdHMiLCJuYl9kYXRlcyIsImluZGV4T2YiLCJzZXRSTyIsImNsb25lIiwiY2xvbmVOb2RlIiwibWVyZ2UiLCJjZWxsbGlzdCIsImlzX2FsaWduIiwidW5tZXJnZSIsInJldHJhaXQiLCJkZWx0YV9pbmRlbnQiLCJuZXdfZm9ybWF0IiwiYWxpZ25fbGVmdCIsImRlbHRhX3ByZWMiLCJmY3RzIiwiYWN0aW9uIiwiZW5hYmxlZCIsInVubWVyZ2VkIiwiaXRlbWNzcyIsIkNhbGNUb29sYmFySXRlbSIsImNvbG9yX3BpY2tlciIsImNhbmNlbCIsImJvZHkiLCJjbGljayIsIkNhbGNUb29sYmFyIiwiZXhjZXB0aW9uIiwiYnRuX25hbWUiLCJmb250X3NpemVzIiwiYnRucyIsImJ0biIsImZvbnRfc2l6ZXNfc2VsZWN0Iiwib3B0aW9uIiwiT3B0aW9uIiwic25hbWUiLCJwYXRoIiwicm9vdF9wYXRoIiwiaG9zdG5hbWUiLCJwYWdlcyIsImhlYWRlciIsInRpdGxlcyIsImh0cmVlIiwibGV2ZWwiLCJodHJlZV9jdXJzb3IiLCJ0aXRsZSIsInNlYXJjaEN1ckhlYWRlciIsInBvc2l0aW9uIiwiaGlkIiwiZ2V0VGl0bGVQcmVmaXgiLCJudW0iLCJidWlsZE1lbnUiLCJub2RlcyIsIm1lbnUiLCJ1cGRhdGVIZWFkZXIiLCJsYXN0Iiwic2Nyb2xsVG9wIiwicmV2ZXJzZSIsImhub2RlIiwiaF9odG1sIiwibGluayIsImVtcHR5IiwibWFrZV9wYWdlX2hyZWYiLCJwYXRocHJlZml4IiwiZGVzYyIsImhyZWYiLCJtYWtlX3BhZ2VfbWVudSIsImZpbmQiLCJwYWdlIiwiY3VycGFnZSIsIm1vZHVsZV9odG1sIiwidHlwZV9odG1sIiwiZGVzY190eXBlIiwiZGVzYzJfaWR4Iiwic2Vzc2lvbl9odG1sIiwicCIsIlVSTFNlYXJjaFBhcmFtcyIsInRlbXBsYXRlIiwic3RyMkRGIl0sInNvdXJjZVJvb3QiOiIifQ==