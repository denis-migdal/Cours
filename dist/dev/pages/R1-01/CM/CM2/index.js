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
/******/ __webpack_require__("./src/pages/R1-01/CM/CM2/index.ts");
/******/ __webpack_require__("./src/pages/R1-01/CM/CM2/index.css");
/******/ var __webpack_exports__ = __webpack_require__("./src/pages/R1-01/CM/CM2/index.md");
/******/ var __webpack_exports__default = __webpack_exports__["default"];
/******/ export { __webpack_exports__default as default };
/******/ 

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvUjEtMDEvQ00vQ00yLy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUsY0FBYyxnQ0FBZ0Msb0NBQW9DLG1CQUFtQix5Q0FBeUMsT0FBTyxvQ0FBb0Msd0NBQXdDLDRCQUE0Qiw0Q0FBNEMsV0FBVyxPQUFPLEdBQUcseUJBQXlCLCtCQUErQixHQUFHLG9DQUFvQyxnQ0FBZ0MsR0FBRyxjQUFjLHFCQUFxQiwwQkFBMEIsR0FBRyxnREFBZ0Qsd0JBQXdCLEdBQUcsaUNBQWlDLHdCQUF3QixHQUFHLDRCQUE0QixvQkFBb0IsR0FBRyxvQ0FBb0Msa0NBQWtDLEdBQUcsdUJBQXVCLG1CQUFtQixxQkFBcUIsd0JBQXdCLCtCQUErQixxQ0FBcUMsR0FBRyxhQUFhLDJCQUEyQiw2QkFBNkIsR0FBRyx1QkFBdUIsZ0NBQWdDLG9CQUFvQixlQUFlLG1CQUFtQixpQ0FBaUMsc0JBQXNCLE9BQU8seUJBQXlCLHNDQUFzQyxPQUFPLEdBQUcsY0FBYyxnQ0FBZ0MsNEJBQTRCLDBCQUEwQixxQkFBcUIsb0NBQW9DLHVCQUF1QixPQUFPLEdBQUcsK0JBQStCLG9CQUFvQixHQUFHLG9CQUFvQixtQkFBbUIsR0FBRyxXQUFXLGlCQUFpQix1QkFBdUIsb0NBQW9DLE9BQU8saUJBQWlCLDJCQUEyQixvQ0FBb0MsK0JBQStCLE9BQU8sR0FBRyxvQkFBb0IseUJBQXlCLGlCQUFpQiw2QkFBNkIsR0FBRyxtQkFBbUIsb0JBQW9CLEdBQUcsZ0NBQWdDLGlDQUFpQyxVQUFVLHFCQUFxQiw0QkFBNEIsYUFBYSxnQkFBZ0IsMEJBQTBCLGtDQUFrQyxrREFBa0Qsb0JBQW9CLDhCQUE4QixnQ0FBZ0MsZ0NBQWdDLGdEQUFnRCxnREFBZ0QseUJBQXlCLCtCQUErQiw2R0FBNkcsNEJBQTRCLE9BQU8sNEJBQTRCLHlDQUF5QyxPQUFPLG1CQUFtQixnQ0FBZ0MsOEJBQThCLE9BQU8scUNBQXFDLDZCQUE2QixPQUFPLGNBQWMsNEJBQTRCLE9BQU8sbUJBQW1CLHFDQUFxQyxPQUFPLG9CQUFvQixvREFBb0QsMkJBQTJCLE9BQU8sc0JBQXNCLDZCQUE2QixPQUFPLHFCQUFxQixxREFBcUQsNEJBQTRCLE9BQU8sb0JBQW9CLDhCQUE4QixPQUFPLHVCQUF1QixpQ0FBaUMsT0FBTyx1QkFBdUIsaUNBQWlDLE9BQU8sOElBQThJLHFEQUFxRCxPQUFPLHVCQUF1Qix3REFBd0QsT0FBTyxxQkFBcUIsc0RBQXNELE9BQU8sc0JBQXNCLHVEQUF1RCxPQUFPLEdBQUcsV0FBVyx5QkFBeUIsR0FBRyw0QkFBNEIsdUJBQXVCLDRCQUE0Qiw2Q0FBNkMsR0FBRyw4QkFBOEIsb0NBQW9DLEdBQUcsd0JBQXdCLGlDQUFpQyxHQUFHLHdCQUF3QixpQ0FBaUMsR0FBRyx3QkFBd0IsaUNBQWlDLEdBQUcsd0JBQXdCLGlDQUFpQyxHQUFHLHdCQUF3QixpQ0FBaUMsR0FBRyx3QkFBd0IsaUNBQWlDLEdBQUcsd0JBQXdCLGlDQUFpQyxHQUFHLHdCQUF3QixpQ0FBaUMsR0FBRyx1QkFBdUIsK0JBQStCLHVCQUF1QiwyQkFBMkIsR0FBRyxpT0FBaU8sbUJBQW1CLEdBQUcsc0tBQXNLLG1CQUFtQixHQUFHLHFKQUFxSixtQkFBbUIsR0FBRyw0Q0FBNEMsbUJBQW1CLEdBQUcsdUZBQXVGLG1CQUFtQixHQUFHLHNEQUFzRCxtQkFBbUIsR0FBRywrREFBK0QsbUJBQW1CLEdBQUcsV0FBVyxtQkFBbUIscUJBQXFCLG1CQUFtQixtQkFBbUIsR0FBRyxvQkFBb0IsdUJBQXVCLEdBQUcsa0JBQWtCLHNCQUFzQixHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWxwTCxtREFBbUQ7QUFDbkQsbURBQW1EO0FBQ25ELG1EQUFtRDs7VUF5QnZDQTs7OztHQUFBQSxjQUFBQTtBQU1aLG1EQUFtRDtBQUNuRCxtREFBbUQ7QUFDbkQsbURBQW1EO0FBRW5ELElBQUlDLGNBQXFCO0FBS3pCLHdFQUF3RTtBQUN4RSxNQUFNQyxrQkFBa0I7SUFDdkI7SUFBTTtJQUFXO0lBQVM7SUFBYztJQUFRO0lBQ2hEO0lBQVU7SUFBTTtJQUFNO0lBQU07SUFBTTtJQUFNO0lBQU07SUFBVTtJQUN4RDtJQUFPO0lBQUs7SUFBVztDQUV2QjtBQUNELFNBQVNDLGNBQWNDLEdBQXVCO0lBQzdDLE9BQU9GLGdCQUFnQkcsUUFBUSxDQUFFQyxpQkFBaUJGO0FBQ25EO0FBS2UsU0FBU0csS0FHNEIsRUFDNUNDLFNBQWNDLFNBQVMsRUFDdkJDLE1BQWNDLE1BQU0sRUFDcEJDLGNBQWNDLE1BQU0sRUFDakJDLFlBQWNDLE9BQU8sRUFDckJDLE1BQU0sRUFDVEMsT0FBTyxFQUNQQyxHQUFHLEVBQ0hDLFFBQWNDLFFBQVEsRUFDeUIsR0FBRyxDQUFDLENBQUM7SUFFM0Qsb0NBQW9DO0lBRXBDLE1BQU1WLE9BQWNDLFVBQWFVO0lBQ2pDLE1BQU1DLFdBQWNiLGFBQWFjO0lBQ2pDLE1BQU1ULGFBQWNDLFdBQWEsRUFBRTtJQUNuQyxNQUFNSCxlQUFjQyxTQUFZO1dBQUlBO0tBQU8sR0FBRyxFQUFFO0lBQ2hELE1BQU1XLGVBQWNyQixjQUFjTztJQUNsQyxNQUFNUyxTQUFjQyxZQUFjSSxDQUFBQSxnQ0FBOEM7SUFFaEYsSUFBSSxDQUFFQSxnQkFBZ0JMLG1CQUNyQixNQUFNLElBQUlNLE1BQU0sQ0FBQyxhQUFhLEVBQUVuQixpQkFBaUJJLE1BQU0sNEJBQTRCLENBQUM7SUFFckYscUJBQXFCO0lBQ3JCLElBQUlPLFlBQVlTLFdBQVk7UUFFM0JkLGFBQWFlLElBQUksQ0FBRSxDQUFFO1lBRXBCVixVQUFVLE1BQU1BO1lBRWhCLElBQUdBLG1CQUFtQlcscUJBQ3RCWCxVQUFVQSxRQUFRWSxTQUFTO1lBRTNCLElBQUksT0FBT1osWUFBWSxVQUFVO2dCQUVoQ0EsVUFBVUEsUUFBUWEsSUFBSSxJQUFJLHVEQUF1RDtnQkFDakYsSUFBR2IsWUFBWSxJQUNkQSxVQUFVUztZQUVaO1lBQ0EsSUFBSVQsbUJBQW1CYyxVQUN0QmQsVUFBVSxNQUFNQSxRQUFRZSxJQUFJO1lBRTdCLE9BQU9DLFNBQVNDLFVBQVUsQ0FBQ2pCLE9BQU8sR0FBR0E7UUFDdEM7SUFDRDtJQUVBLGlCQUFpQjtJQUNqQixJQUFJa0IsY0FBd0MsRUFBRTtJQUM5QyxJQUFJakIsUUFBUVEsV0FBWTtRQUV2QixJQUFJLENBQUVVLE1BQU1DLE9BQU8sQ0FBQ25CLE1BQ25CQSxNQUFNO1lBQUNBO1NBQWtCO1FBRTFCaUIsY0FBYyxJQUFJQyxNQUFxQmxCLElBQUlvQixNQUFNO1FBRWpELE1BQU1DLFlBQWEsT0FBT3JCO1lBQ3pCQSxNQUFNLE1BQU1BO1lBQ1osSUFBR0EsZUFBZXNCLGVBQ2pCLE9BQU90QjtZQUNSLElBQUlBLGVBQWV1QixrQkFDbEIsT0FBT3ZCLElBQUl3QixLQUFLO1lBRWpCLElBQUlDLFFBQVEsSUFBSUg7WUFDaEIsSUFBSSxPQUFPdEIsUUFBUSxVQUFXO2dCQUM3QixNQUFNeUIsTUFBTUMsT0FBTyxDQUFDMUI7Z0JBQ3BCLE9BQU95QjtZQUNSO1lBRUEsK0JBQStCO1lBQy9CLE1BQU1BLE1BQU1DLE9BQU8sQ0FBQyxNQUFNMUIsSUFBSWMsSUFBSTtZQUNsQyxPQUFPVztRQUNSO1FBRUEvQixhQUFhZSxJQUFJLElBQUtULElBQUkyQixHQUFHLENBQUUsT0FBTzNCLEtBQUs0QixNQUFTLFdBQW9CLENBQUNBLElBQUksR0FBRyxNQUFNUCxVQUFVckI7SUFDakc7SUFJQSxhQUFhO0lBQ2IsTUFBTWUsaUJBQWlCWDtRQUViLEtBQUssQ0FBTTtRQUVwQnlCLGFBQWM7WUFFYixLQUFLO1lBRUwseUNBQXlDO1lBQ3pDLElBQUk5QyxnQkFBZ0IsTUFDbkIsTUFBTSxJQUFJd0IsTUFBTTtZQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHeEI7WUFDYkEsY0FBYztRQUNmO1FBRUEsSUFBV1MsT0FBYTtZQUN2QixPQUFPLElBQUksQ0FBQyxLQUFLO1FBQ2xCO1FBQ0EsSUFBY3NDLFFBQVE7WUFDckIsT0FBTyxJQUFLLENBQUMsS0FBSyxDQUFXQSxLQUFLO1FBQ25DO1FBQ1VDLGVBQWdCQyxJQUFXLEVBQUVDLEtBQWtCLEVBQUU7WUFDMUQsT0FBTyxJQUFLLENBQUMsS0FBSyxDQUFXRixjQUFjLENBQUNDLE1BQU1DO1FBRW5EO1FBQ0EsSUFBV25DLFNBQStCO1lBQ3pDLE9BQU8sSUFBSyxDQUFDLEtBQUssQ0FBV0EsTUFBTTtRQUNwQztRQUNPb0MsU0FBcUNDLElBQU8sRUFBRUYsS0FBb0IsRUFBRTtZQUN6RSxJQUFJLENBQUMsS0FBSyxDQUFXbkMsTUFBTSxDQUFDcUMsS0FBSyxHQUFHRjtRQUN0QztRQUNBLElBQWNsQyxVQUFVO1lBQ3ZCLE9BQU8sSUFBSyxDQUFDLEtBQUssQ0FBV0EsT0FBTztRQUNyQztRQUVBLE9BQWdCaUIsYUFBYTtZQUM1QnhCO1lBQ0FFO1lBQ0FFO1lBQ0FFO1lBQ0FDO1lBQ0FrQjtZQUNBaEI7UUFDRCxFQUFFO1FBRVFtQyxjQUFjQyxLQUFhLEVBQy9CQyxTQUFpQixFQUNqQkMsU0FBaUIsRUFBYyxDQUFDO1FBRXRDLElBQVdDLFVBQVU7WUFDcEIsT0FBTyxJQUFLLENBQUMsS0FBSyxDQUFXQSxPQUFPO1FBQ3JDO1FBQ1VDLGlCQUFpQixDQUFDO1FBQ2xCQyxvQkFBb0IsQ0FBQztJQUNoQztJQUVBLE9BQU8zQjtBQUNSO0FBRUEsd0JBQXdCO0FBQ3hCLFNBQVM0QixZQUtpREMsSUFBTyxFQUMvREMsVUFJQztJQUVGLE1BQU1qRCxhQUFlO1dBQUlnRCxLQUFLNUIsVUFBVSxDQUFDcEIsVUFBVTtXQUFPaUQsV0FBV2pELFVBQVUsSUFBSSxFQUFFO0tBQUM7SUFDdEYsTUFBTUYsZUFBZTtXQUFJa0QsS0FBSzVCLFVBQVUsQ0FBQ3RCLFlBQVk7V0FBS21ELFdBQVduRCxZQUFZLElBQUUsRUFBRTtLQUFDO0lBRXRGLE1BQU1JLFNBQVNPLE9BQU95QyxNQUFNLENBQUMsQ0FBQyxHQUFHRixLQUFLNUIsVUFBVSxFQUFFO1FBQ2pEcEI7UUFDQUY7SUFDRDtJQUNBLElBQUltRCxXQUFXNUMsTUFBTSxLQUFLTyxXQUN6QlYsT0FBT0csTUFBTSxHQUFHNEMsV0FBVzVDLE1BQU07SUFFbEMsaUNBQWlDO0lBQ2pDLE1BQU04QyxxQkFBcUJIO1FBQzFCZixZQUFZLEdBQUdtQixDQUFRLENBQUU7WUFDeEIsaUNBQWlDO1lBQ2pDLEtBQUssSUFBSUE7UUFDVjtRQUVBLElBQXVCbEIsUUFBUTtZQUM5QixPQUFPLEtBQUssQ0FBQ0E7UUFDZDtRQUVBLE9BQWdCZCxhQUFhbEIsT0FBTztJQUNyQztJQUVBLE9BQU9pRDtBQUNSO0FBQ0ExRCxLQUFLc0QsV0FBVyxHQUFHQTtBQXVCbkIsbURBQW1EO0FBQ25ELG1EQUFtRDtBQUNuRCxtREFBbUQ7QUFFbkQsSUFBSU0sS0FBSztBQUVULFNBQVNDLGNBSXVETixJQUFPLEVBQUVPLFVBQTJCLENBQUMsQ0FBQztJQUNyRyxNQUFNLEVBQ0wzRCxJQUFJLEVBQ0pJLFVBQVUsRUFDVkcsT0FBTyxFQUNQa0IsV0FBVyxFQUNYaEIsTUFBTSxFQUNOLEdBQUcyQyxLQUFLNUIsVUFBVTtJQUVuQixNQUFNb0MscUJBQXFCLElBQUlDO0lBRS9CLE1BQU1DLE1BQU1DLE9BQU87SUFDbkIsTUFBTUMsTUFBTUQsT0FBTztJQUVuQixNQUFNRSxhQUFhcEQsT0FBT3FELFdBQVcsQ0FBRTlELFdBQVcrQixHQUFHLENBQUNnQyxDQUFBQSxJQUFLO1lBQUNBO1lBQUc7Z0JBRTlEQyxZQUFZO2dCQUNaQyxLQUFLO29CQUErQixPQUFPLElBQUssQ0FBMkJQLElBQUksQ0FBQ0s7Z0JBQUk7Z0JBQ3BGRyxLQUFLLFNBQVM3QixLQUFrQjtvQkFBSSxPQUFPLElBQUssQ0FBMkJ1QixJQUFJLENBQUNHLEdBQUcxQjtnQkFBUTtZQUM1RjtTQUFFO0lBRUYsTUFBTThCO1FBR0MsS0FBSyxDQUFrQztRQUN2QyxTQUFTLENBQThCO1FBQ3ZDLE9BQU8sQ0FBK0M7UUFFdEQsQ0FBQ1QsSUFBSSxDQUFDbkIsSUFBVyxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQ0EsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUNBLEtBQUssSUFBSTtRQUNwRDtRQUNBLENBQUNxQixJQUFJLENBQUNyQixJQUFXLEVBQUVGLEtBQWtCLEVBQUM7WUFDckMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDRSxNQUFNRixRQUFRLHVEQUF1RDtRQUMxRjtRQUVBSixZQUFZbUMsSUFBb0MsRUFDbkRDLFFBQW9DLEVBQzlCQyxNQUFtRCxDQUFFO1lBRXZELElBQUksQ0FBQyxLQUFLLEdBQU9GO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUdDO1lBQ1gsSUFBSSxDQUFDLE9BQU8sR0FBR0M7WUFFZjdELE9BQU84RCxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUVWO1FBQy9CO0lBQ1A7SUFFQSxxQ0FBcUM7SUFDckMsTUFBTVcscUJBQXFCNUU7UUFFakIsT0FBTyxDQUFTO1FBRWhCLEdBQUcsR0FBRyxFQUFFeUQsR0FBRztRQUVwQnBCLFlBQVkvQixTQUEwQixDQUFDLENBQUMsQ0FBRTtZQUN6QyxLQUFLO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBR08sT0FBT3lDLE1BQU0sQ0FBQyxDQUFDLEdBQUdGLEtBQUs1QixVQUFVLENBQUNsQixNQUFNLEVBQUVxRCxTQUFTckQ7WUFFbEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJdUUsUUFBUyxDQUFDQztnQkFDOUIsSUFBRyxJQUFJLENBQUNDLE1BQU0sRUFDYixPQUFPRCxRQUFRLElBQUksQ0FBQyxJQUFJO2dCQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHQTtZQUNqQjtRQUNEO1FBRUEsNkJBQTZCLEdBRTdCLElBQUlDLFNBQVM7WUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUs7UUFDdEI7UUFDQUMsV0FBVzFFLFNBQTBCLENBQUMsQ0FBQyxFQUFFO1lBRXhDLElBQUksSUFBSSxDQUFDeUUsTUFBTSxFQUNkLE1BQU0sSUFBSWhFLE1BQU07WUFFakJGLE9BQU95QyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRWhEO1lBRTVCLE1BQU0yRSxNQUFNLElBQUksQ0FBQ0MsSUFBSTtZQUVyQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQ2hCLElBQWFqQyxjQUFjO1lBRTVCLE9BQU9nQztRQUNSO1FBRUEsSUFBSUUsV0FBVztZQUNkLElBQUksQ0FBRSxJQUFJLENBQUNKLE1BQU0sRUFDaEIsTUFBTSxJQUFJaEUsTUFBTTtZQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJO1FBQ2pCO1FBQ0EsSUFBSWxCLE9BQU87WUFDVixPQUFPLElBQUksQ0FBQyxTQUFTO1FBQ3RCO1FBRUEsWUFBWSxHQUNaLFNBQVMsQ0FBMkI7UUFDcEMsUUFBUSxHQUEwQyxLQUFLO1FBQ3ZELElBQUksR0FBMkIsS0FBSztRQUVwQyxRQUFRLEdBQUcsTUFBTTtRQUNqQixJQUFJbUQsVUFBVTtZQUNiLE9BQU8sSUFBSSxDQUFDLFFBQVE7UUFDckI7UUFFQW9DLHVCQUF1QjtZQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ2YsSUFBSSxDQUFDLElBQUksQ0FBVWxDLGlCQUFpQjtRQUN0QztRQUVBbUMsb0JBQW9CO1lBRW5CLElBQUksQ0FBQyxRQUFRLEdBQUc7WUFFaEIsSUFBSSxDQUFFLElBQUksQ0FBQ04sTUFBTSxFQUNoQixJQUFJLENBQUNHLElBQUk7WUFFVCxJQUFJLENBQUMsSUFBSSxDQUFVakMsY0FBYztRQUNuQztRQUVRaUMsT0FBTztZQUVkSSxlQUFlQyxPQUFPLENBQUMsSUFBSTtZQUUzQixTQUFTO1lBQ1QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJO1lBQ3BCLElBQUk5RSxXQUFXLFFBQVE7Z0JBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDK0UsWUFBWSxDQUFDO29CQUFDQyxNQUFNaEY7Z0JBQU07Z0JBRS9DLFlBQVk7Z0JBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQ2lGLGdCQUFnQixDQUFDLFNBQVNDO2dCQUN4QyxZQUFZO2dCQUNaLElBQUksQ0FBQyxRQUFRLENBQUNELGdCQUFnQixDQUFDLFlBQVlDO1lBQzVDO1lBRUEsUUFBUTtZQUNSLEtBQUksSUFBSUMsT0FBT3hGLFdBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQ3dGLElBQUksR0FBRyxJQUFJLENBQUNDLFlBQVksQ0FBQ0Q7WUFFM0MsTUFBTTtZQUNOLElBQUluRixXQUFXLFFBQ2QsSUFBSyxDQUFDLFFBQVEsQ0FBZ0JxRixrQkFBa0IsQ0FBQzdFLElBQUksQ0FBQzhFO1lBQ3ZELElBQUl0RSxZQUFZRyxNQUFNLEVBQUc7Z0JBRXhCLElBQUluQixXQUFXLFFBQ2QsSUFBSyxDQUFDLFFBQVEsQ0FBZ0JxRixrQkFBa0IsQ0FBQzdFLElBQUksSUFBSVE7cUJBQ3JEO29CQUVKLE1BQU11RSxjQUFjLElBQUksQ0FBQ0MsV0FBVztvQkFFcEMsd0JBQXdCO29CQUN4QixJQUFJLENBQUVyQyxtQkFBbUJzQyxHQUFHLENBQUNGLGNBQWU7d0JBRTNDLElBQUkvRCxRQUFRa0UsU0FBU0MsYUFBYSxDQUFDO3dCQUVuQ25FLE1BQU1vRSxZQUFZLENBQUMsT0FBT0w7d0JBRTFCLElBQUlNLG1CQUFtQjt3QkFFdkIsS0FBSSxJQUFJckUsU0FBU1IsWUFDaEIsS0FBSSxJQUFJOEUsUUFBUXRFLE1BQU11RSxRQUFRLENBQzdCRixvQkFBb0JDLEtBQUtFLE9BQU8sR0FBRzt3QkFFckN4RSxNQUFNZCxTQUFTLEdBQUdtRixpQkFBaUJwRSxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRThELFlBQVksQ0FBQyxDQUFDO3dCQUV6RUcsU0FBU08sSUFBSSxDQUFDQyxNQUFNLENBQUMxRTt3QkFFckIyQixtQkFBbUJnRCxHQUFHLENBQUNaO29CQUN4QjtnQkFDRDtZQUNEO1lBRUEsVUFBVTtZQUNWLElBQUl6RixZQUFZUyxXQUFZO2dCQUMzQixJQUFJNkYsZ0JBQWdCVixTQUFTQyxhQUFhLENBQUM7Z0JBQzNDLElBQUlVLE1BQU0sUUFBb0I1RSxPQUFPLENBQUMsZ0JBQWdCLENBQUM2RSxHQUFHQyxRQUFVLElBQUksQ0FBQ25CLFlBQVksQ0FBQ21CLFVBQVE7Z0JBQzNGSCxjQUFjMUYsU0FBUyxHQUFHMkY7Z0JBQzFCLElBQUksQ0FBQyxRQUFRLENBQUNILE1BQU0sSUFBSUUsY0FBY3RHLE9BQU8sQ0FBQzBHLFVBQVU7WUFDekQ7WUFFQSxRQUFRO1lBRVIseUNBQXlDO1lBQzVDMUgsY0FBZ0IsSUFBSTtZQUVqQixJQUFJMkgsTUFBTSxJQUFJOUQ7WUFFZDt1QkFDaUIsR0FFcEIsSUFBSSxDQUFDLElBQUksR0FBRzhEO1lBRVosZUFBZTtZQUNmLElBQUksSUFBSSxDQUFDQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQ0YsVUFBVSxDQUFDckYsTUFBTSxLQUFLLEdBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMrRSxNQUFNLENBQUVSLFNBQVNDLGFBQWEsQ0FBQztZQUU5QyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssTUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUV4QixPQUFPLElBQUksQ0FBQyxJQUFJO1FBQ2pCO1FBRUEsSUFBSTlGLFNBQWlCO1lBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU87UUFDcEI7UUFDT29DLFNBQWlDQyxJQUFPLEVBQUVGLEtBQWdCLEVBQUU7WUFDbEUsSUFBSSxJQUFJLENBQUNzQyxNQUFNLEVBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFckMsUUFBUSxDQUFDQyxNQUFNRjtZQUVsQyxJQUFJLENBQUMsT0FBTyxDQUFDRSxLQUFLLEdBQUdGLE9BQU8sZ0NBQWdDO1FBQzdEO1FBR0EsZUFBZSxHQUNmLFFBQVEsR0FBeUIsS0FBSztRQUV0QyxJQUFJbEMsVUFBVTtZQUNiLE9BQU8sSUFBSSxDQUFDLFFBQVE7UUFDckI7UUFFQTZHLFFBQVF6RSxJQUFZLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUN3RSxTQUFTLEdBQ2pCLElBQUksQ0FBQyxRQUFRLEVBQUVFLGNBQWMsQ0FBQyxPQUFPLEVBQUUxRSxLQUFLLENBQUMsQ0FBQyxJQUM5QyxJQUFJLENBQUMsUUFBUSxFQUFFMEUsY0FBYyxDQUFDLE9BQU8sRUFBRTFFLEtBQUssRUFBRSxDQUFDO1FBQ3BEO1FBQ0EyRSxTQUFTM0UsSUFBWSxFQUFFO1lBQ3RCLE9BQU8sSUFBSSxDQUFDd0UsU0FBUyxHQUNqQixJQUFJLENBQUMsUUFBUSxFQUFFSSxpQkFBaUIsQ0FBQyxPQUFPLEVBQUU1RSxLQUFLLENBQUMsQ0FBQyxJQUNqRCxJQUFJLENBQUMsUUFBUSxFQUFFNEUsaUJBQWlCLENBQUMsT0FBTyxFQUFFNUUsS0FBSyxFQUFFLENBQUM7UUFDdkQ7UUFFQSxJQUFjd0UsWUFBcUI7WUFDbEMsT0FBTzFHLFdBQVc7UUFDbkI7UUFFQSxXQUFXLEdBRVgsSUFBSXdGLGNBQWM7WUFFakIsSUFBRyxJQUFJLENBQUNrQixTQUFTLElBQUksQ0FBRSxJQUFJLENBQUNLLFlBQVksQ0FBQyxPQUN4QyxPQUFPLElBQUksQ0FBQ0MsT0FBTztZQUVwQixPQUFPLENBQUMsRUFBRSxJQUFJLENBQUNBLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDNUIsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFEO1FBRUEsYUFBYSxHQUNiLFdBQVcsR0FBRyxNQUFNO1FBRXBCLFdBQVcsR0FBVyxDQUFDLEVBQWdDO1FBQ3ZELG1CQUFtQixHQUFHLENBQUMsRUFBZ0M7UUFDdkQsTUFBTSxHQUFHLElBQUl0QixXQUNaLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxtQkFBbUIsRUFDeEIsQ0FBQzVCLE1BQWFGO1lBRWIsSUFBSSxDQUFDLFdBQVcsQ0FBQ0UsS0FBSyxHQUFHRjtZQUV6QixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0saUNBQWlDO1lBQzFELElBQUlBLFVBQVUsTUFDYixJQUFJLENBQUNpRixlQUFlLENBQUMvRTtpQkFFckIsSUFBSSxDQUFDMEQsWUFBWSxDQUFDMUQsTUFBTUY7UUFDMUIsR0FDMEM7UUFFM0NGLGVBQWVJLElBQVcsRUFBRUYsS0FBa0IsRUFBRTtZQUMvQyxJQUFJQSxVQUFVLE1BQ2IsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUNFLEtBQUs7aUJBRXJDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQ0EsS0FBSyxHQUFHRjtRQUNuQztRQUVBLElBQUlILFFBQThDO1lBRWpELE9BQU8sSUFBSSxDQUFDLE1BQU07UUFDbkI7UUFFQSxPQUFPcUYscUJBQXFCdkgsV0FBVztRQUN2Q3dILHlCQUF5QmpGLElBQWUsRUFDakNrRixRQUFnQixFQUNoQkMsUUFBZ0IsRUFBRTtZQUV4QixJQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUc7Z0JBQ25CO1lBQ0Q7WUFFQSxJQUFJLENBQUMsV0FBVyxDQUFDbkYsS0FBSyxHQUFHbUY7WUFDekIsSUFBSSxDQUFFLElBQUksQ0FBQy9DLE1BQU0sRUFDaEI7WUFFRCxJQUFJLElBQUssQ0FBQyxJQUFJLENBQVVuQyxhQUFhLENBQUNELE1BQU1rRixVQUFVQyxjQUFjLE9BQU87Z0JBQzFFLElBQUksQ0FBQyxNQUFNLENBQUNuRixLQUFLLEdBQUdrRixVQUFVLHFCQUFxQjtZQUNwRDtRQUNEO0lBQ0Q7SUFFQSxPQUFPakQ7QUFDUjtBQUVBLG1EQUFtRDtBQUNuRCxtREFBbUQ7QUFDbkQsbURBQW1EO0FBRW5ELE1BQU1tRCxvQkFBb0IsSUFBSWxELFFBQWUsQ0FBQ0M7SUFFN0MsSUFBR3FCLFNBQVM2QixVQUFVLEtBQUssaUJBQWlCN0IsU0FBUzZCLFVBQVUsS0FBSyxZQUNuRSxPQUFPbEQ7SUFFUnFCLFNBQVNULGdCQUFnQixDQUFDLG9CQUFvQjtRQUM3Q1o7SUFDRCxHQUFHO0FBQ0o7QUFFQWpGLEtBQUtvSSxNQUFNLEdBQUcsZUFLSkMsT0FBZSxFQUNsQkMsY0FBaUIsRUFDakIsRUFBQ2pJLFlBQVksRUFBRUksTUFBTSxFQUF3RSxHQUFHLENBQUMsQ0FBQztJQUV4R0osaUJBQWUsRUFBRTtJQUNqQkksV0FBZ0IsQ0FBQztJQUVqQixNQUFNOEgsUUFBUUQsZUFBZTNHLFVBQVUsQ0FBQ3hCLElBQUk7SUFDNUMsSUFBSXVCLFdBQWdCNEc7SUFDcEIsSUFBSUUsVUFBVXpJLGlCQUFpQndJLFVBQVFwSDtJQUV2QyxNQUFNNkQsUUFBUXlELEdBQUcsQ0FBQztRQUFDUDtXQUFzQjdIO1dBQWlCcUIsU0FBU0MsVUFBVSxDQUFDdEIsWUFBWTtLQUFDO0lBRTNGLE1BQU1xSSxZQUFZN0UsY0FBK0N5RSxnQkFBZ0I3SDtJQUVqRixNQUFNa0ksT0FBT0gsWUFBWXJILFlBQVksQ0FBQyxJQUN6QjtRQUFDbEIsU0FBU3VJO0lBQU87SUFFOUIvQyxlQUFlMkMsTUFBTSxDQUFDQyxTQUFTSyxXQUFXQztBQUMzQztBQUVBLG1EQUFtRDtBQUNuRCxtREFBbUQ7QUFDbkQsbURBQW1EO0FBRW5ELE1BQU16QyxZQUFZLElBQUlqRTtBQUN0QnFFLFNBQVNMLGtCQUFrQixDQUFDN0UsSUFBSSxDQUFDOEU7QUFFakNsRyxLQUFLNEksb0JBQW9CLEdBQUcsU0FBU2pJLEdBQTRCO0lBRWhFLElBQUlrSTtJQUVKLElBQUlsSSxlQUFldUIsa0JBQ2xCMkcsWUFBWWxJLElBQUl3QixLQUFLO0lBQ3RCLElBQUksT0FBT3hCLFFBQVEsVUFBVTtRQUM1QmtJLFlBQVksSUFBSTVHO1FBQ2hCNEcsVUFBVUMsV0FBVyxDQUFDbkk7SUFDdkI7SUFFQSxLQUFJLElBQUkrRixRQUFRbUMsVUFBVWxDLFFBQVEsQ0FDakNULFVBQVU2QyxVQUFVLENBQUNyQyxLQUFLRSxPQUFPO0FBQ25DO0FBR0EsTUFBTW9DLG1CQUFtQjtJQUN4QixTQUFTLEVBQUU7SUFDWCxZQUFZLEVBQUU7QUFDZjtBQUVBLE1BQU1DLG9CQUFvQi9FO0FBRTFCLFNBQVM0QixhQUFhb0QsRUFBYztJQUVuQyxJQUFJLEVBQVcsQ0FBQ0Qsa0JBQWtCLEtBQUssTUFDdEM7SUFDQUMsRUFBVSxDQUFDRCxrQkFBa0IsR0FBRztJQUVqQyxNQUFNRSxXQUFXSCxnQkFBZ0IsQ0FBQ0UsR0FBR0UsSUFBSSxDQUFrQztJQUUzRSxLQUFJLElBQUlDLFFBQVFILEdBQUdJLFlBQVksR0FBSztRQUVuQyxJQUFJRCxnQkFBZ0JFLGNBQWNGLFNBQVMvQyxZQUFZK0MsU0FBU0csUUFDL0Q7UUFFRCxJQUFJQyxTQUFTSjtRQUViLEtBQUksSUFBSSxDQUFDSyxVQUFVQyxRQUFRLElBQUlSLFNBQVU7WUFDeEMsSUFBSU0sT0FBT0csT0FBTyxDQUFDRixXQUNsQkMsUUFBUVQ7UUFDVjtJQUNEO0FBQ0Q7QUFFQWxKLEtBQUs2Siw2QkFBNkIsR0FBRyxTQUFTQyxVQUF5QyxFQUFFSixRQUFnQixFQUFFQyxPQUFpQztJQUMzSVgsZ0JBQWdCLENBQUNjLFdBQVcsQ0FBQzFJLElBQUksQ0FBQztRQUFDc0k7UUFBVUM7S0FBUTtBQUN0RDtBQUVBckQsU0FBU1QsZ0JBQWdCLENBQUMsU0FBU0M7QUFDbkNRLFNBQVNULGdCQUFnQixDQUFDLFlBQVlDO0FBRXRDOUYsS0FBSytKLE9BQU8sR0FBRyxTQUFTQSxRQUEyQkwsUUFBZ0IsRUFBRU0sT0FBZ0I7SUFFcEYsTUFBTSxLQUFNO1FBQ1gsSUFBSUMsU0FBU0QsUUFBUUQsT0FBTyxDQUFJTDtRQUVoQyxJQUFJTyxXQUFXLE1BQ2QsT0FBT0E7UUFFUixNQUFNQyxPQUFPRixRQUFRRyxXQUFXO1FBQ2hDLElBQUksQ0FBRyxXQUFVRCxJQUFHLEdBQ25CLE9BQU87UUFFUkYsVUFBVSxLQUFxQjdKLElBQUk7SUFDcEM7QUFDRDtBQTJCQSxlQUFlaUssTUFBMkMvQixPQUFlLEVBQUUsRUFDekU1SCxTQUFZLENBQUMsQ0FBQyxFQUNkMEUsYUFBWSxJQUFJLEVBQ2hCekUsVUFBWSxFQUFFLEVBQ2QySixTQUFZbEosU0FBUyxFQUNyQnlDLEtBQVN6QyxTQUFTLEVBQ2xCbUosVUFBWSxFQUFFLEVBQ2RDLFVBQVksQ0FBQyxDQUFDLEVBQ2Q5SCxRQUFZLENBQUMsQ0FBQyxFQUNka0MsT0FBVSxDQUFDLENBQUMsRUFDWjZGLFlBQVksQ0FBQyxDQUFDLEVBQ0ksR0FBRyxDQUFDLENBQUM7SUFFeEIsSUFBSSxDQUFFckYsY0FBY2tGLFdBQVcsTUFDOUIsTUFBTSxJQUFJbkosTUFBTTtJQUVqQixJQUFJdUosY0FBYyxNQUFNaEYsZUFBZWlGLFdBQVcsQ0FBQ3JDO0lBQ25ELElBQUlnQixPQUFPLElBQUlvQixZQUFZaEs7SUFFM0IsZUFBZTtJQUNmLElBQUk0SSxLQUFLekIsT0FBTyxDQUFDK0MsV0FBVyxPQUFPdEMsU0FDbENnQixLQUFLN0MsWUFBWSxDQUFDLE1BQU02QjtJQUV6QixJQUFJekUsT0FBT3pDLFdBQ1ZrSSxLQUFLekYsRUFBRSxHQUFHQTtJQUVYLElBQUkwRyxRQUFRdkksTUFBTSxHQUFHLEdBQ3BCc0gsS0FBS3VCLFNBQVMsQ0FBQzdELEdBQUcsSUFBSXVEO0lBRXZCLElBQUksSUFBSXhILFFBQVF5SCxRQUNmbEIsS0FBS2pILEtBQUssQ0FBQ3lJLFdBQVcsQ0FBQyxDQUFDLEVBQUUsRUFBRS9ILEtBQUssQ0FBQyxFQUFFeUgsT0FBTyxDQUFDekgsS0FBSztJQUVsRCxJQUFJLElBQUlBLFFBQVFMLE1BQU87UUFFdEIsSUFBSUcsUUFBUUgsS0FBSyxDQUFDSyxLQUFLO1FBQ3ZCLElBQUksT0FBT0YsVUFBVSxXQUNwQnlHLEtBQUt5QixlQUFlLENBQUNoSSxNQUFNRjthQUUzQnlHLEtBQUs3QyxZQUFZLENBQUMxRCxNQUFNRjtJQUMxQjtJQUVBLElBQUksSUFBSUUsUUFBUTZCLEtBQU07UUFFckIsSUFBSS9CLFFBQVErQixJQUFJLENBQUM3QixLQUFLO1FBQ3RCLElBQUlGLFVBQVUsT0FDYixPQUFPeUcsS0FBSzBCLE9BQU8sQ0FBQ2pJLEtBQUs7YUFDckIsSUFBR0YsVUFBVSxNQUNqQnlHLEtBQUswQixPQUFPLENBQUNqSSxLQUFLLEdBQUc7YUFFckJ1RyxLQUFLMEIsT0FBTyxDQUFDakksS0FBSyxHQUFHRjtJQUN2QjtJQUVBLElBQUksQ0FBRWYsTUFBTUMsT0FBTyxDQUFDcEIsVUFDbkJBLFVBQVU7UUFBQ0E7S0FBZTtJQUMzQjJJLEtBQUsyQixlQUFlLElBQUl0SztJQUV4QixJQUFJLElBQUlvQyxRQUFRMEgsVUFDZm5CLEtBQUt4RCxnQkFBZ0IsQ0FBQy9DLE1BQU0wSCxTQUFTLENBQUMxSCxLQUFLO0lBRTVDLElBQUl1SCxXQUFXbEosV0FDZGtKLE9BQU92RCxNQUFNLENBQUN1QztJQUVmLElBQUksQ0FBRUEsS0FBS25FLE1BQU0sSUFBSUMsWUFDcEIsT0FBTyxNQUFNbkYsS0FBS21GLFVBQVUsQ0FBQ2tFO0lBRTlCLE9BQU8sTUFBTXJKLEtBQUtpTCxPQUFPLENBQUM1QjtBQUMzQjtBQUNBckosS0FBS29LLEtBQUssR0FBR0E7QUFLYixTQUFTYyxVQUErQzdDLE9BQWUsRUFBRSxFQUN2RTVILFNBQVksQ0FBQyxDQUFDLEVBQ2QwRSxhQUFZLElBQUksRUFDaEJ6RSxVQUFZLEVBQUUsRUFDZDJKLFNBQVlsSixTQUFTLEVBQ3JCeUMsS0FBU3pDLFNBQVMsRUFDbEJtSixVQUFZLEVBQUUsRUFDZEMsVUFBWSxDQUFDLENBQUMsRUFDZDlILFFBQVksQ0FBQyxDQUFDLEVBQ2RrQyxPQUFVLENBQUMsQ0FBQyxFQUNaNkYsWUFBWSxDQUFDLENBQUMsRUFDSSxHQUFHLENBQUMsQ0FBQztJQUV4QixJQUFJLENBQUVyRixjQUFja0YsV0FBVyxNQUM5QixNQUFNLElBQUluSixNQUFNO0lBRWpCLElBQUl1SixjQUFjaEYsZUFBZWpCLEdBQUcsQ0FBQzZEO0lBQ3JDLElBQUdvQyxnQkFBZ0J0SixXQUNsQixNQUFNLElBQUlELE1BQU0sQ0FBQyxFQUFFbUgsUUFBUSxZQUFZLENBQUM7SUFDekMsSUFBSWdCLE9BQU8sSUFBSW9CLFlBQVloSztJQUUzQixvQkFBb0I7SUFFcEIsZUFBZTtJQUNmLElBQUk0SSxLQUFLekIsT0FBTyxDQUFDK0MsV0FBVyxPQUFPdEMsU0FDbENnQixLQUFLN0MsWUFBWSxDQUFDLE1BQU02QjtJQUV6QixJQUFJekUsT0FBT3pDLFdBQ1ZrSSxLQUFLekYsRUFBRSxHQUFHQTtJQUVYLElBQUkwRyxRQUFRdkksTUFBTSxHQUFHLEdBQ3BCc0gsS0FBS3VCLFNBQVMsQ0FBQzdELEdBQUcsSUFBSXVEO0lBRXZCLElBQUksSUFBSXhILFFBQVF5SCxRQUNmbEIsS0FBS2pILEtBQUssQ0FBQ3lJLFdBQVcsQ0FBQyxDQUFDLEVBQUUsRUFBRS9ILEtBQUssQ0FBQyxFQUFFeUgsT0FBTyxDQUFDekgsS0FBSztJQUVsRCxJQUFJLElBQUlBLFFBQVFMLE1BQU87UUFFdEIsSUFBSUcsUUFBUUgsS0FBSyxDQUFDSyxLQUFLO1FBQ3ZCLElBQUksT0FBT0YsVUFBVSxXQUNwQnlHLEtBQUt5QixlQUFlLENBQUNoSSxNQUFNRjthQUUzQnlHLEtBQUs3QyxZQUFZLENBQUMxRCxNQUFNRjtJQUMxQjtJQUVBLElBQUksSUFBSUUsUUFBUTZCLEtBQU07UUFFckIsSUFBSS9CLFFBQVErQixJQUFJLENBQUM3QixLQUFLO1FBQ3RCLElBQUlGLFVBQVUsT0FDYixPQUFPeUcsS0FBSzBCLE9BQU8sQ0FBQ2pJLEtBQUs7YUFDckIsSUFBR0YsVUFBVSxNQUNqQnlHLEtBQUswQixPQUFPLENBQUNqSSxLQUFLLEdBQUc7YUFFckJ1RyxLQUFLMEIsT0FBTyxDQUFDakksS0FBSyxHQUFHRjtJQUN2QjtJQUVBLElBQUksQ0FBRWYsTUFBTUMsT0FBTyxDQUFDcEIsVUFDbkJBLFVBQVU7UUFBQ0E7S0FBZTtJQUMzQjJJLEtBQUsyQixlQUFlLElBQUl0SztJQUV4QixJQUFJLElBQUlvQyxRQUFRMEgsVUFDZm5CLEtBQUt4RCxnQkFBZ0IsQ0FBQy9DLE1BQU0wSCxTQUFTLENBQUMxSCxLQUFLO0lBRTVDLElBQUl1SCxXQUFXbEosV0FDZGtKLE9BQU92RCxNQUFNLENBQUN1QztJQUVmLElBQUksQ0FBRUEsS0FBS25FLE1BQU0sSUFBSUMsWUFDcEJuRixLQUFLbUwsY0FBYyxDQUFDOUI7SUFFckIsT0FBT3JKLEtBQUtvTCxXQUFXLENBQUMvQjtBQUN6QjtBQUNBckosS0FBS2tMLFNBQVMsR0FBR0E7QUFFakJsTCxLQUFLMEssV0FBVyxHQUFNLGVBQWVyQyxPQUFlLEVBQUVnRCxRQUFxQjtJQUUxRSxNQUFNNUYsZUFBZWlGLFdBQVcsQ0FBQ3JDO0lBRWpDLElBQUlnRCxhQUFhbEssV0FDaEJrSztJQUVEO0FBQ0Q7QUFDQXJMLEtBQUtzTCxjQUFjLEdBQUcsZUFBZUMsUUFBMkIsRUFBRUYsUUFBcUI7SUFFdEYsTUFBTXJHLFFBQVF5RCxHQUFHLENBQUU4QyxTQUFTakosR0FBRyxDQUFFcUIsQ0FBQUEsSUFBSzhCLGVBQWVpRixXQUFXLENBQUMvRztJQUVqRSxJQUFJMEgsYUFBYWxLLFdBQ2hCa0s7QUFFRjtBQUVBckwsS0FBS3dMLFNBQVMsR0FBRyxTQUFTMUksSUFBWTtJQUNyQyxPQUFPMkMsZUFBZWpCLEdBQUcsQ0FBQzFCO0FBQzNCO0FBRUE5QyxLQUFLMEosUUFBUSxHQUFHLFNBQVM1RyxJQUFhO0lBQ3JDLElBQUdBLFNBQVMzQixXQUNYLE9BQU87SUFDUixPQUFPLENBQUMsSUFBSSxFQUFFMkIsS0FBSyxPQUFPLEVBQUVBLEtBQUssR0FBRyxDQUFDO0FBQ3RDO0FBRUE5QyxLQUFLaUwsT0FBTyxHQUFNLGVBQXFEakIsT0FBZ0I7SUFFdEYsTUFBTWhLLEtBQUswSyxXQUFXLENBQUUxSyxLQUFLeUwsT0FBTyxDQUFDekI7SUFFckMsT0FBTyxRQUF5QmhLLElBQUksRUFBRSxzQkFBc0I7QUFDN0Q7QUFDQUEsS0FBS29MLFdBQVcsR0FBRSxTQUErQ3BCLE9BQWdCO0lBRWhGLE1BQU1sSCxPQUFPOUMsS0FBS3lMLE9BQU8sQ0FBQ3pCO0lBQzFCLElBQUksQ0FBRWhLLEtBQUt3TCxTQUFTLENBQUUxSSxPQUNyQixNQUFNLElBQUk1QixNQUFNLENBQUMsRUFBRTRCLEtBQUsseUJBQXlCLENBQUM7SUFFbkQsSUFBSTNDLE9BQU82SjtJQUVYLElBQUksQ0FBRTdKLEtBQUsrRSxNQUFNLEVBQ2hCLE1BQU0sSUFBSWhFLE1BQU07SUFFakIsT0FBT2YsS0FBS21GLFFBQVE7QUFDckI7QUFDQXRGLEtBQUttRixVQUFVLEdBQUcsZUFBcUQ2RSxPQUFnQjtJQUV0RixNQUFNaEssS0FBSzBLLFdBQVcsQ0FBRTFLLEtBQUt5TCxPQUFPLENBQUN6QjtJQUVyQyxPQUFPLE1BQU0sUUFBeUI3RSxVQUFVLElBQUkseUJBQXlCO0FBQzlFO0FBRUFuRixLQUFLbUwsY0FBYyxHQUFHLFNBQStDbkIsT0FBZ0I7SUFFcEYsTUFBTWxILE9BQU85QyxLQUFLeUwsT0FBTyxDQUFDekI7SUFDMUIsSUFBSSxDQUFFaEssS0FBS3dMLFNBQVMsQ0FBQzFJLE9BQ3BCLE1BQU0sSUFBSTVCLE1BQU0sQ0FBQyxFQUFFNEIsS0FBSyxZQUFZLENBQUM7SUFFdEMsT0FBTyxRQUF5QnFDLFVBQVUsSUFBSSx5QkFBeUI7QUFDeEU7QUFFQW5GLEtBQUt5TCxPQUFPLEdBQUcsU0FBVXpCLE9BQWdCO0lBRXhDLE1BQU1sSCxPQUFPa0gsUUFBUWhFLFlBQVksQ0FBQyxTQUFTZ0UsUUFBUXBDLE9BQU8sQ0FBQytDLFdBQVc7SUFFdEUsSUFBSSxDQUFFN0gsS0FBS2hELFFBQVEsQ0FBQyxNQUNuQixNQUFNLElBQUlvQixNQUFNLENBQUMsUUFBUSxFQUFFNEIsS0FBSyxzQkFBc0IsQ0FBQztJQUV4RCxPQUFPQTtBQUNSO0FBRUEsU0FBUzRJLFNBQVNoQyxRQUFnQixFQUFFaUMsaUJBQThELEVBQUV0QixTQUE0Qy9ELFFBQVE7SUFFdkosSUFBSXFGLHNCQUFzQnhLLGFBQWEsT0FBT3dLLHNCQUFzQixVQUFVO1FBQzdFdEIsU0FBU3NCO1FBQ1RBLG9CQUFvQnhLO0lBQ3JCO0lBRUEsT0FBTztRQUFDLENBQUMsRUFBRXVJLFNBQVMsRUFBRTFKLEtBQUswSixRQUFRLENBQUNpQyxtQkFBdUMsQ0FBQztRQUFFdEI7S0FBTztBQUN0RjtBQVdBLGVBQWV1QixHQUF5Q2xDLFFBQWdCLEVBQ2xFaUMsaUJBQXdFLEVBQ3hFdEIsU0FBOEMvRCxRQUFRO0lBRTNELENBQUNvRCxVQUFVVyxPQUFPLEdBQUdxQixTQUFTaEMsVUFBVWlDLG1CQUFtQnRCO0lBRTNELElBQUlKLFNBQVMsTUFBTWpLLEtBQUs2TCxHQUFHLENBQUluQyxVQUFVVztJQUN6QyxJQUFHSixXQUFXLE1BQ2IsTUFBTSxJQUFJL0ksTUFBTSxDQUFDLFFBQVEsRUFBRXdJLFNBQVMsVUFBVSxDQUFDO0lBRWhELE9BQU9PO0FBQ1I7QUFDQWpLLEtBQUs0TCxFQUFFLEdBQUlBO0FBT1gsZUFBZUMsSUFBMENuQyxRQUFnQixFQUNuRWlDLGlCQUF3RSxFQUN4RXRCLFNBQThDL0QsUUFBUTtJQUUzRCxDQUFDb0QsVUFBVVcsT0FBTyxHQUFHcUIsU0FBU2hDLFVBQVVpQyxtQkFBbUJ0QjtJQUUzRCxNQUFNTCxVQUFVSyxPQUFPN0MsYUFBYSxDQUFja0M7SUFDbEQsSUFBSU0sWUFBWSxNQUNmLE9BQU87SUFFUixPQUFPLE1BQU1oSyxLQUFLaUwsT0FBTyxDQUFFakI7QUFDNUI7QUFDQWhLLEtBQUs2TCxHQUFHLEdBQUdBO0FBT1gsZUFBZUMsSUFBMENwQyxRQUFnQixFQUNuRWlDLGlCQUF3RSxFQUN4RXRCLFNBQThDL0QsUUFBUTtJQUUzRCxDQUFDb0QsVUFBVVcsT0FBTyxHQUFHcUIsU0FBU2hDLFVBQVVpQyxtQkFBbUJ0QjtJQUUzRCxNQUFNMEIsV0FBVzFCLE9BQU8zQyxnQkFBZ0IsQ0FBY2dDO0lBRXRELElBQUluSCxNQUFNO0lBQ1YsTUFBTXlKLFdBQVcsSUFBSW5LLE1BQW1Ca0ssU0FBU2hLLE1BQU07SUFDdkQsS0FBSSxJQUFJaUksV0FBVytCLFNBQ2xCQyxRQUFRLENBQUN6SixNQUFNLEdBQUd2QyxLQUFLaUwsT0FBTyxDQUFFakI7SUFFakMsT0FBTyxNQUFNaEYsUUFBUXlELEdBQUcsQ0FBQ3VEO0FBQzFCO0FBQ0FoTSxLQUFLOEwsR0FBRyxHQUFHQTtBQU9YLGVBQWVHLElBQTBDdkMsUUFBZ0IsRUFDbkVpQyxpQkFBOEMsRUFDOUMzQixPQUFtQjtJQUV4QixNQUFNa0MsTUFBTVIsU0FBU2hDLFVBQVVpQyxtQkFBbUIzQjtJQUVsRCxNQUFNQyxTQUFTLEdBQUksQ0FBQyxFQUFFLENBQXdCRixPQUFPLENBQWNtQyxHQUFHLENBQUMsRUFBRTtJQUN6RSxJQUFHakMsV0FBVyxNQUNiLE9BQU87SUFFUixPQUFPLE1BQU1qSyxLQUFLaUwsT0FBTyxDQUFDaEI7QUFDM0I7QUFDQWpLLEtBQUtpTSxHQUFHLEdBQUdBO0FBT1gsU0FBU0UsT0FBNkN6QyxRQUFnQixFQUNoRWlDLGlCQUF3RSxFQUN4RXRCLFNBQThDL0QsUUFBUTtJQUUzRCxDQUFDb0QsVUFBVVcsT0FBTyxHQUFHcUIsU0FBU2hDLFVBQVVpQyxtQkFBbUJ0QjtJQUUzRCxNQUFNTCxVQUFVSyxPQUFPN0MsYUFBYSxDQUFja0M7SUFFbEQsSUFBSU0sWUFBWSxNQUNmLE1BQU0sSUFBSTlJLE1BQU0sQ0FBQyxRQUFRLEVBQUV3SSxTQUFTLFVBQVUsQ0FBQztJQUVoRCxPQUFPMUosS0FBS29MLFdBQVcsQ0FBRXBCO0FBQzFCO0FBQ0FoSyxLQUFLbU0sTUFBTSxHQUFHQTtBQU9kLFNBQVNDLFFBQThDMUMsUUFBZ0IsRUFDakVpQyxpQkFBd0UsRUFDeEV0QixTQUE4Qy9ELFFBQVE7SUFFM0QsQ0FBQ29ELFVBQVVXLE9BQU8sR0FBR3FCLFNBQVNoQyxVQUFVaUMsbUJBQW1CdEI7SUFFM0QsTUFBTTBCLFdBQVcxQixPQUFPM0MsZ0JBQWdCLENBQWNnQztJQUV0RCxJQUFJbkgsTUFBTTtJQUNWLE1BQU0wSCxTQUFTLElBQUlwSSxNQUFVa0ssU0FBU2hLLE1BQU07SUFDNUMsS0FBSSxJQUFJaUksV0FBVytCLFNBQ2xCOUIsTUFBTSxDQUFDMUgsTUFBTSxHQUFHdkMsS0FBS29MLFdBQVcsQ0FBRXBCO0lBRW5DLE9BQU9DO0FBQ1I7QUFDQWpLLEtBQUtvTSxPQUFPLEdBQUdBO0FBT2YsU0FBU0MsUUFBOEMzQyxRQUFnQixFQUNqRWlDLGlCQUE4QyxFQUM5QzNCLE9BQW1CO0lBRXhCLE1BQU1rQyxNQUFNUixTQUFTaEMsVUFBVWlDLG1CQUFtQjNCO0lBRWxELE1BQU1DLFNBQVMsR0FBSSxDQUFDLEVBQUUsQ0FBd0JGLE9BQU8sQ0FBY21DLEdBQUcsQ0FBQyxFQUFFO0lBQ3pFLElBQUdqQyxXQUFXLE1BQ2IsT0FBTztJQUVSLE9BQU9qSyxLQUFLb0wsV0FBVyxDQUFDbkI7QUFDekI7QUFDQWpLLEtBQUtxTSxPQUFPLEdBQUdBO0FBRWYsbURBQW1EO0FBQ25ELG1EQUFtRDtBQUNuRCxtREFBbUQ7QUFFNUMsTUFBTUMsa0JBQWtCdE0sS0FBSztJQUFDTyxZQUFZO1FBQUM7S0FBTTtBQUFBO0lBRTlDLFVBQVUsR0FBRyxJQUFJeUQsTUFBYztJQUMvQixVQUFVLENBQVM7SUFDbkIsR0FBRyxDQUFnQjtJQUU1QnhCLGFBQWM7UUFFYixLQUFLO1FBRUwsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJd0MsUUFBUyxPQUFPQztZQUU5QixNQUFNc0gsVUFBVUMsYUFBYSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFFaEQsSUFBSUYsVUFBVUMsYUFBYSxDQUFDRSxVQUFVLEVBQ3JDekg7WUFFRHNILFVBQVVDLGFBQWEsQ0FBQzNHLGdCQUFnQixDQUFDLG9CQUFvQjtnQkFDNURaO1lBQ0Q7UUFDRDtRQUdBLE1BQU0wSCxNQUFNLElBQUksQ0FBQ2xLLEtBQUssQ0FBQ2tLLEdBQUc7UUFDMUIsSUFBR0EsUUFBUSxNQUNWLE1BQU0sSUFBSXpMLE1BQU07UUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBR3lMLEdBQUcsQ0FBQyxFQUFFLEtBQUssTUFDckIsQ0FBQyxFQUFFbkQsT0FBT29ELFFBQVEsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBRUYsSUFBSSxDQUFDLEdBQ3BDQTtRQUVSLElBQUlHLGlCQUFrQixDQUFDQztZQUV0QixLQUFJLElBQUlDLFlBQVlELFVBQ25CLEtBQUksSUFBSUUsWUFBWUQsU0FBU0UsVUFBVSxDQUN0QyxJQUFHRCxvQkFBb0JFLFNBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUNGLFNBQVNyRixPQUFPO1FBRWpDLEdBQUd3RixPQUFPLENBQUU5RyxVQUFVO1lBQUUrRyxXQUFVO1lBQU1DLFNBQVE7UUFBSztRQUdyRCxLQUFLLElBQUlqRSxRQUFRL0MsU0FBU29CLGdCQUFnQixDQUFDLEtBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMyQixLQUFLekIsT0FBTztJQUMzQjtJQUdhMkYsWUFBWTtRQUN4QixPQUFPO1lBQ047WUFDQTtZQUNBO1NBQ0E7SUFDQztJQUVPQyxtQkFBbUJuRixPQUFlLEVBQUVvRixLQUEwQixFQUFFOUUsSUFBNkMsRUFBRTtRQUV4SCxNQUFNK0UsS0FBS0QsS0FBSyxDQUFDLFdBQVc7UUFDNUIsTUFBTS9NLFVBQVUrTSxLQUFLLENBQUMsYUFBYTtRQUVuQyxJQUFJRSxRQUF1QztRQUMzQyxJQUFJRCxPQUFPdk0sV0FDVndNLFFBQVFELEdBQUcvRTthQUNQLElBQUlqSSxZQUFZUyxXQUNwQndNLFFBQVEsTUFBTUMscUJBQXFCNU4sS0FBSzJJO1FBQU87UUFFaEQsSUFBR2dGLFVBQVUsTUFDWixNQUFNLElBQUl6TSxNQUFNLENBQUMsK0JBQStCLEVBQUVtSCxRQUFRLENBQUMsQ0FBQztRQUU3RCxPQUFPckksS0FBS29JLE1BQU0sQ0FBQ0MsU0FBU3NGO0lBQzdCO0lBRUEsTUFBTSxPQUFPLENBQUN0RixPQUFlO1FBRTVCQSxVQUFVQSxRQUFRc0MsV0FBVztRQUU3QixJQUFJdEMsWUFBWSxlQUFlQSxZQUFZLGdCQUFnQixDQUFFQSxRQUFRdkksUUFBUSxDQUFDLFFBQVEsSUFBSSxDQUFDLFVBQVUsQ0FBQ3VHLEdBQUcsQ0FBRWdDLFVBQzFHO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQ3RCLEdBQUcsQ0FBQ3NCO1FBRXBCLE1BQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSwwQkFBMEI7UUFFMUMsTUFBTXdGLFlBQVksSUFBSSxDQUFDTixTQUFTO1FBQ2hDLE1BQU1BLFlBQVksTUFBTXZJLFFBQVF5RCxHQUFHLENBQUVvRixVQUFVdkwsR0FBRyxDQUFFd0wsQ0FBQUEsT0FBUUEsS0FBS0MsUUFBUSxDQUFDLFNBQzdEQyxRQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRTNGLFFBQVEsQ0FBQyxFQUFFeUYsS0FBSyxDQUFDLEVBQUUsUUFDcERHLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFNUYsUUFBUSxDQUFDLEVBQUV5RixLQUFLLENBQUMsRUFBRTtRQUVqRSxNQUFNTCxRQUE2QixDQUFDO1FBQ3BDLElBQUksSUFBSVMsSUFBSSxHQUFHQSxJQUFJTCxVQUFVOUwsTUFBTSxFQUFFLEVBQUVtTSxFQUN0QyxJQUFJWCxTQUFTLENBQUNXLEVBQUUsS0FBSy9NLFdBQ3BCc00sS0FBSyxDQUFDSSxTQUFTLENBQUNLLEVBQUUsQ0FBQyxHQUFHWCxTQUFTLENBQUNXLEVBQUU7UUFFcEMsTUFBTXhOLFVBQVUrTSxLQUFLLENBQUMsYUFBYTtRQUNuQyxNQUFNOU0sTUFBVThNLEtBQUssQ0FBQyxZQUFZO1FBRWxDLE1BQU05RSxPQUFnRDtZQUNyRCxHQUFHakksWUFBWVMsYUFBYTtnQkFBQ1Q7WUFBTyxDQUFDO1lBQ3JDLEdBQUdDLFFBQVlRLGFBQWE7Z0JBQUNSO1lBQUcsQ0FBQztRQUNsQztRQUVBLE9BQU8sSUFBSSxDQUFDNk0sa0JBQWtCLENBQUNuRixTQUFTb0YsT0FBTzlFO0lBRWhEO0FBQ0Q7QUFDQTNJLEtBQUtvSSxNQUFNLENBQUMsYUFBYWtFO0FBZ0NsQixNQUFNNkIsa0JBQThDQztJQUUxRCxJQUFhaEYsT0FBYztRQUFFLE9BQU8sS0FBSyxDQUFDQTtJQUFlO0lBRXpENUcsWUFBWTRHLElBQVcsRUFBRWlGLElBQVUsQ0FBRTtRQUNwQyxLQUFLLENBQUNqRixNQUFNO1lBQUNrRixRQUFRRDtRQUFJO0lBQzFCO0FBQ0Q7QUFLQSxtREFBbUQ7QUFDbkQsbURBQW1EO0FBQ25ELG1EQUFtRDtBQUVuRCxlQUFlRSxjQUFjQyxRQUFvQztJQUVoRUEsV0FBVyxNQUFNQTtJQUVqQixJQUFJLENBQUdBLENBQUFBLG9CQUFvQmhOLFFBQU8sR0FDakNnTixXQUFXLE1BQU1DLE1BQU1EO0lBRXhCLE9BQU8sTUFBTUEsU0FBUy9NLElBQUk7QUFDM0I7QUFHQSxlQUFld00sV0FBV1MsR0FBZSxFQUFFQyxhQUFzQixLQUFLO0lBRXJFLE1BQU1DLFVBQVVELGFBQ1Q7UUFBQ0UsU0FBUTtZQUFDLGFBQWE7UUFBTTtJQUFDLElBQzlCLENBQUM7SUFHUixNQUFNQyxXQUFXLE1BQU1MLE1BQU1DLEtBQUtFO0lBQ2xDLElBQUdFLFNBQVNDLE1BQU0sS0FBSyxLQUN0QixPQUFPNU47SUFFUixJQUFJd04sY0FBY0csU0FBU0QsT0FBTyxDQUFDckssR0FBRyxDQUFDLGNBQWUsT0FDckQsT0FBT3JEO0lBRVIsT0FBTyxNQUFNMk4sU0FBU3JOLElBQUk7QUFDM0I7QUFDQSxlQUFldU0sUUFBUVUsR0FBVyxFQUFFQyxhQUFzQixLQUFLO0lBRTlELGlDQUFpQztJQUNqQyxJQUFHQSxjQUFjLE1BQU1WLFdBQVdTLEtBQUtDLGdCQUFnQnhOLFdBQ3RELE9BQU9BO0lBRVIsSUFBSTtRQUNILE9BQU8sQ0FBQyxNQUFNLE1BQU0sQ0FBQyx1QkFBdUIsR0FBR3VOLElBQUcsRUFBR00sT0FBTztJQUM3RCxFQUFFLE9BQU1DLEdBQUc7UUFDVkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaLE9BQU85TjtJQUNSO0FBQ0Q7QUFFQSwyRkFBMkY7QUFDM0YsTUFBTWlPLGtCQUFtQjtBQUN6QixNQUFNQyx5QkFBeUI7SUFDM0IsU0FBUztJQUNULGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGFBQWE7SUFDYixTQUFTO0lBQ1QsT0FBTztJQUNQLFNBQVM7SUFDVCxTQUFTO0lBQ1QsV0FBVztJQUNYLGFBQWE7SUFDYixTQUFTO0lBQ1QsVUFBVTtBQUNaO0FBQ0YsU0FBU3RQLGlCQUFpQndJLEtBQXlCO0lBRWxELElBQUlBLFVBQVV6SCxhQUNiLE9BQU87SUFFUixJQUFJMEgsVUFBVTRHLGdCQUFnQkUsSUFBSSxDQUFDL0csTUFBTXpGLElBQUksQ0FBRSxDQUFDLEVBQUU7SUFDbEQsT0FBT3VNLHNCQUFzQixDQUFDN0csUUFBK0MsSUFBSUEsUUFBUW1DLFdBQVc7QUFDckc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3h4Q3dCO0FBQ0E7QUFFTTtBQUNFO0FBR2dCO0FBRWhELE1BQU02RSx1QkFBdUIsTUFBTXhQLDRDQUFJQSxDQUFDNEwsRUFBRSxDQUFZO0FBRXRENEQscUJBQXFCQyxRQUFRLENBQUMsU0FBU0MsTUFBTSxDQUFDLFFBQVEsZ0JBQWdCaFAsT0FBTyxHQUFHO0lBQzVFO0lBQVU7SUFBUTtJQUFZO0lBQVk7SUFBaUI7Q0FDOUQ7QUFFRDhPLHFCQUFxQkMsUUFBUSxDQUFDLFNBQVNDLE1BQU0sQ0FBQyxnQkFBZ0JoUCxPQUFPLEdBQUc7QUFDeEU4TyxxQkFBcUJDLFFBQVEsQ0FBQyxNQUFNQyxNQUFNLENBQUM7SUFBQ0MsV0FBVztBQUFNO0FBQzdESCxxQkFBcUJDLFFBQVEsQ0FBQyxNQUFNQyxNQUFNLENBQUM7QUFDM0NGLHFCQUFxQkMsUUFBUSxDQUFDLE1BQU1DLE1BQU0sQ0FBQztBQUMzQ0YscUJBQXFCQyxRQUFRLENBQUMsTUFBTUMsTUFBTSxDQUFDO0FBQzNDRixxQkFBcUJDLFFBQVEsQ0FBQyxNQUFNQyxNQUFNLENBQUM7SUFBQ0Usa0JBQWtCO0FBQU07QUFDcEVKLHFCQUFxQkMsUUFBUSxDQUFDLE1BQU1DLE1BQU0sQ0FBQztJQUFDRyxrQkFBa0I7QUFBUTtBQUV0RSxNQUFNQywrQkFBK0IsTUFBTTlQLDRDQUFJQSxDQUFDNEwsRUFBRSxDQUFjO0FBQ2hFa0UsNkJBQTZCQyxNQUFNLENBQUNQO0FBQ3BDTSw2QkFBNkJFLGdCQUFnQixDQUFDLGFBQWEsUUFBUSxVQUFVLGFBQWEsb0JBQW9CO0FBRTlHO0lBQ0ksTUFBTUMsY0FBYyxNQUFNalEsNENBQUlBLENBQUM0TCxFQUFFLENBQVk7SUFFN0NxRSxZQUFZUixRQUFRLENBQUMsU0FBU0MsTUFBTSxDQUFDLFFBQVEsZ0JBQWdCaFAsT0FBTyxHQUFHO1FBQ25FO1FBQVE7UUFBVTtRQUFPO0tBQzVCO0lBRUR1UCxZQUFZUixRQUFRLENBQUMsU0FBU0MsTUFBTSxDQUFDLFFBQVEsZ0JBQWdCLGlCQUFpQmhQLE9BQU8sR0FBRztRQUNwRjtRQUFVO1FBQVU7S0FDdkI7SUFFRHVQLFlBQVlSLFFBQVEsQ0FBQyxTQUFTL08sT0FBTyxHQUFHO0lBQ3hDdVAsWUFBWVIsUUFBUSxDQUFDLFNBQVNDLE1BQU0sQ0FBQztJQUNyQ08sWUFBWVIsUUFBUSxDQUFDLFNBQVNDLE1BQU0sQ0FBQztJQUNyQ08sWUFBWVIsUUFBUSxDQUFDLFNBQVNDLE1BQU0sQ0FBQztJQUNyQ08sWUFBWVIsUUFBUSxDQUFDLFNBQVNDLE1BQU0sQ0FBQztJQUNyQ08sWUFBWVIsUUFBUSxDQUFDLFNBQVNDLE1BQU0sQ0FBQztJQUNyQ08sWUFBWVIsUUFBUSxDQUFDLFNBQVNDLE1BQU0sQ0FBQztJQUVyQ08sWUFBWVIsUUFBUSxDQUFDLFNBQVNDLE1BQU0sQ0FBQyxXQUFXaFAsT0FBTyxHQUFHLENBQUMsNEJBQTRCLENBQUM7SUFFeEYsTUFBTXdQLHNCQUFzQixNQUFNbFEsNENBQUlBLENBQUM0TCxFQUFFLENBQWM7SUFDdkRzRSxvQkFBb0JILE1BQU0sQ0FBQ0U7SUFDM0JDLG9CQUFvQkYsZ0JBQWdCLENBQUMsY0FBYyxnQkFBZ0IsZUFBZSxjQUFjLGlCQUFpQixpQkFBaUI7QUFDdEksQ0FFQTtJQUNJLE1BQU03TixRQUFRLE1BQU1uQyw0Q0FBSUEsQ0FBQzRMLEVBQUUsQ0FBWTtJQUV2Q3pKLE1BQU1zTixRQUFRLENBQUMsU0FBU0MsTUFBTSxDQUFDLFFBQVEsZ0JBQWdCaFAsT0FBTyxHQUFHO1FBQzdEO1FBQUc7UUFBVztRQUFZO1FBQVU7S0FDdkM7SUFFRHlCLE1BQU1zTixRQUFRLENBQUMsU0FBU0MsTUFBTSxDQUFDLFFBQVEsZ0JBQWdCaFAsT0FBTyxHQUFHO1FBQzdEO1FBQVU7UUFBYztLQUMzQjtJQUVEeUIsTUFBTXNOLFFBQVEsQ0FBQyxTQUFTL08sT0FBTyxHQUFHO0lBQ2xDeUIsTUFBTXNOLFFBQVEsQ0FBQyxTQUFTQyxNQUFNLENBQUNILDBEQUFPQSxDQUFDWSxLQUFLO0lBQzVDaE8sTUFBTXNOLFFBQVEsQ0FBQyxTQUFTQyxNQUFNLENBQUNILDBEQUFPQSxDQUFDYSxRQUFRO0lBQy9Dak8sTUFBTXNOLFFBQVEsQ0FBQyxTQUFTQyxNQUFNLENBQUNILDBEQUFPQSxDQUFDYyxNQUFNO0lBQzdDbE8sTUFBTXNOLFFBQVEsQ0FBQyxTQUFTQyxNQUFNLENBQUNILDBEQUFPQSxDQUFDZSxJQUFJO0lBRTNDbk8sTUFBTXNOLFFBQVEsQ0FBQyxTQUFTQyxNQUFNLENBQUM7UUFBQ2EsV0FBVztJQUFDO0lBQzVDcE8sTUFBTXNOLFFBQVEsQ0FBQyxTQUFTQyxNQUFNLENBQUM7UUFBQ2EsV0FBVztJQUFDO0lBRTVDLE1BQU1DLGdCQUFnQixNQUFNeFEsNENBQUlBLENBQUM0TCxFQUFFLENBQWM7SUFDakQ0RSxjQUFjVCxNQUFNLENBQUM1TjtJQUNyQnFPLGNBQWNSLGdCQUFnQixDQUFDLGtCQUFrQixtQkFBbUIsYUFBYSxlQUFlLGtCQUFrQjtBQUN0SCxDQUVBO0lBQ0ksTUFBTTdOLFFBQVEsTUFBTW5DLDRDQUFJQSxDQUFDNEwsRUFBRSxDQUFZO0lBRXZDekosTUFBTXNOLFFBQVEsQ0FBQyxNQUFNQyxNQUFNLENBQUM7UUFDeEJlLFlBQVk7UUFDWkMsZUFBZTtRQUNmQyxhQUFhO1FBQ2JDLGNBQWM7UUFDZEMsY0FBYztJQUNsQjtJQUVBLE1BQU1MLGdCQUFnQixNQUFNeFEsNENBQUlBLENBQUM0TCxFQUFFLENBQWM7SUFDakQ0RSxjQUFjVCxNQUFNLENBQUM1TjtJQUNyQnFPLGNBQWNSLGdCQUFnQixDQUFDLFVBQVU7QUFDN0MsQ0FHQTtJQUNJLE1BQU03TixRQUFRLE1BQU1uQyw0Q0FBSUEsQ0FBQzRMLEVBQUUsQ0FBWTtJQUV2Q3pKLE1BQU1zTixRQUFRLENBQUMsU0FBU0MsTUFBTSxDQUFDLFFBQVEsZ0JBQWdCaFAsT0FBTyxHQUFHO1FBQzdEO1FBQVU7S0FDYjtJQUVEeUIsTUFBTXNOLFFBQVEsQ0FBQyxTQUFTL08sT0FBTyxHQUFHO0lBQ2xDeUIsTUFBTXNOLFFBQVEsQ0FBQyxTQUFTQyxNQUFNLENBQUM7SUFDL0J2TixNQUFNc04sUUFBUSxDQUFDLFNBQVNDLE1BQU0sQ0FBQztJQUUvQnZOLE1BQU1zTixRQUFRLENBQUMsU0FBU0MsTUFBTSxDQUFDO1FBQUNvQixRQUFRO0lBQUM7SUFDekMzTyxNQUFNc04sUUFBUSxDQUFDLFNBQVNDLE1BQU0sQ0FBQztRQUFDb0IsUUFBUTtJQUFDO0lBQ3pDM08sTUFBTXNOLFFBQVEsQ0FBQyxTQUFTQyxNQUFNLENBQUM7UUFBQ29CLFFBQVE7SUFBQztJQUV6QyxNQUFNTixnQkFBZ0IsTUFBTXhRLDRDQUFJQSxDQUFDNEwsRUFBRSxDQUFjO0lBQ2pENEUsY0FBY1QsTUFBTSxDQUFDNU47SUFDckJxTyxjQUFjUixnQkFBZ0IsQ0FBQyxjQUFjO0FBQ2pELENBR0E7SUFDSSxNQUFNN04sUUFBUSxNQUFNbkMsNENBQUlBLENBQUM0TCxFQUFFLENBQVk7SUFFdkN6SixNQUFNc04sUUFBUSxDQUFDLE1BQU1DLE1BQU0sQ0FBQztRQUN4QnFCLE1BQU07WUFBQztZQUFFO1NBQUU7UUFDWEMsY0FBYztRQUNkQyxlQUFlO0lBQ25CLEdBQUd2USxPQUFPLEdBQUc7SUFFYixNQUFNOFAsZ0JBQWdCLE1BQU14USw0Q0FBSUEsQ0FBQzRMLEVBQUUsQ0FBYztJQUNqRDRFLGNBQWNULE1BQU0sQ0FBQzVOO0lBQ3JCcU8sY0FBY1IsZ0JBQWdCLENBQUMsZ0JBQWdCLFNBQVM7QUFDNUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSWlEO0FBRzFDLE1BQU1tQixxQkFBcUJDO0lBRTlCLE1BQU0sQ0FBWTtJQUNsQixNQUFNLEdBQWdCLEtBQUs7SUFDakJDLFFBQXFCO0lBRS9CN08sWUFBWUwsS0FBZ0IsRUFBRSxHQUFHbVAsU0FBbUIsQ0FBRTtRQUVsRCxLQUFLO1FBRUwsSUFBSSxDQUFDLE1BQU0sR0FBR25QO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQ2hDLElBQUksQ0FBQzBGLGdCQUFnQixDQUFDLFVBQVU7WUFDeEMsSUFBSSxDQUFDMEwsTUFBTTtRQUNmO1FBRUEsSUFBSSxDQUFDRixPQUFPLEdBQUdILCtEQUFRQSxDQUFDLENBQUMsMkJBQTJCLENBQUM7UUFDckQsSUFBSSxDQUFDRyxPQUFPLENBQUN6RyxTQUFTLENBQUM3RCxHQUFHLElBQUl1SztRQUU5Qm5QLE1BQU16QixPQUFPLENBQUNvRyxNQUFNLENBQUUsSUFBSSxDQUFDdUssT0FBTztJQUN0QztJQUVBRyxTQUFTQyxLQUFvQixFQUFFO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUdBLFVBQVUsT0FBTyxPQUFPQSxNQUFNQyxVQUFVO1FBQ3RELElBQUksQ0FBQ0gsTUFBTTtJQUNmO0lBRVVJLFFBQVEsR0FBR0MsSUFBK0MsRUFBRTtRQUNsRSxPQUFPQTtJQUNYO0lBRUFMLFNBQVM7UUFFTCxJQUFJLENBQUNGLE9BQU8sQ0FBQ3pHLFNBQVMsQ0FBQ2lILE1BQU0sQ0FBQyxVQUFVLElBQUksQ0FBQyxNQUFNLEtBQUs7UUFFeEQsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQ2hCO1FBQ0osTUFBTUQsT0FBTyxJQUFJLENBQUNELE9BQU8sSUFBSyxJQUFJLENBQUMsTUFBTSxDQUFDQSxPQUFPLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQ2xDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTTtRQUNuRixJQUFJLENBQUMsTUFBTSxDQUFDcUMsT0FBTyxDQUFDLElBQUksQ0FBQ1QsT0FBTyxFQUFFTztJQUN0QztJQUVTL0wsaUJBQWlCdUQsSUFBWSxFQUFFaUMsUUFBbUQsRUFBRXVELE9BQTJDLEVBQVE7UUFDNUksYUFBYTtRQUNiLElBQUksQ0FBQ3lDLE9BQU8sQ0FBQ3hMLGdCQUFnQixDQUFDdUQsTUFBTWlDLFVBQVV1RDtJQUNsRDtJQUVTbUQsb0JBQW9CM0ksSUFBWSxFQUFFaUMsUUFBbUQsRUFBRXVELE9BQXdDLEVBQVE7UUFDNUksYUFBYTtRQUNiLElBQUksQ0FBQ3lDLE9BQU8sQ0FBQ1UsbUJBQW1CLENBQUMzSSxNQUFNaUMsVUFBVXVEO0lBQ3JEO0FBQ0o7QUFFTyxNQUFNb0QsbUJBQW1CYjtJQUU1QjNPLFlBQVlMLEtBQWdCLENBQUU7UUFDMUIsS0FBSyxDQUFDQSxPQUFPO0lBQ2pCO0lBRUEsVUFBVSxHQUFHLEVBQUU7SUFDZjhQLFNBQVNDLFFBQWdCLEVBQUU7UUFDdkIsSUFBSSxDQUFDYixPQUFPLENBQUN6RyxTQUFTLENBQUN1SCxNQUFNLENBQUMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQ2QsT0FBTyxDQUFDekcsU0FBUyxDQUFDN0QsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFbUwsU0FBUyxDQUFDO1FBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUdBO0lBQ3RCO0FBQ0o7QUFFTyxNQUFNRSxxQkFBcUJqQjtJQUU5QjNPLFlBQVlMLEtBQWdCLENBQUU7UUFDMUIsS0FBSyxDQUFDQSxPQUFPO0lBQ2pCO0lBRW1Cd1AsUUFBUVUsQ0FBUyxFQUFFQyxDQUFTLEVBQUVDLENBQVMsRUFBRUMsQ0FBUyxFQUFFO1FBQ25FLE9BQU87WUFBQ0gsSUFBRUUsSUFBRTtZQUFHRCxJQUFFRSxJQUFFO1lBQUc7WUFBRztTQUFFO0lBQy9CO0FBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RTJDO0FBQ3lCO0FBRTdELE1BQU1JO0lBQ1RwUSxZQUFZTCxLQUFnQixDQUFFO1FBRTFCLGFBQWE7UUFDYkEsTUFBTXpCLE9BQU8sQ0FBQ21GLGdCQUFnQixDQUFDLFdBQVcsQ0FBQ3FEO1lBRXZDLElBQUksQ0FBRUEsR0FBRzJKLE9BQU8sRUFDWjtZQUVKLElBQUlDLFVBQVU7WUFFZCxJQUFJNUosR0FBRzZKLEdBQUcsS0FBSyxLQUFLO2dCQUNoQkQsVUFBVTtnQkFDVjNRLE1BQU02USxTQUFTLENBQUNDLFlBQVksQ0FBQztZQUNqQztZQUNBLElBQUkvSixHQUFHNkosR0FBRyxLQUFLLEtBQUs7Z0JBQ2hCRCxVQUFVO2dCQUNWM1EsTUFBTTZRLFNBQVMsQ0FBQ0MsWUFBWSxDQUFDO1lBQ2pDO1lBQ0EsSUFBSS9KLEdBQUc2SixHQUFHLEtBQUssS0FBSztnQkFDaEJELFVBQVU7Z0JBQ1YzUSxNQUFNNlEsU0FBUyxDQUFDQyxZQUFZLENBQUM7WUFDakM7WUFDQSxJQUFJL0osR0FBRzZKLEdBQUcsS0FBSyxLQUFLO2dCQUNoQkQsVUFBVTtnQkFDVjNRLE1BQU02USxTQUFTLENBQUNDLFlBQVksQ0FBQztZQUNqQztZQUNBLElBQUkvSixHQUFHNkosR0FBRyxLQUFLLEtBQUs7Z0JBQ2hCRCxVQUFVO2dCQUNWM1EsTUFBTTZRLFNBQVMsQ0FBQ0MsWUFBWSxDQUFDO1lBQ2pDO1lBQ0EsSUFBSS9KLEdBQUc2SixHQUFHLEtBQUssS0FBSztnQkFDaEJELFVBQVU7Z0JBQ1YzUSxNQUFNNlEsU0FBUyxDQUFDQyxZQUFZLENBQUM7WUFDakM7WUFDQSxJQUFJL0osR0FBRzZKLEdBQUcsS0FBSyxPQUFPN0osR0FBR2dLLFFBQVEsRUFBRTtnQkFDL0JKLFVBQVU7Z0JBQ1YzUSxNQUFNNlEsU0FBUyxDQUFDQyxZQUFZLENBQUMxRCxRQUFRWSxLQUFLO1lBQzlDO1lBQ0EsSUFBSWpILEdBQUc2SixHQUFHLEtBQUssT0FBTzdKLEdBQUdnSyxRQUFRLEVBQUU7Z0JBQy9CSixVQUFVO2dCQUNWM1EsTUFBTTZRLFNBQVMsQ0FBQ0MsWUFBWSxDQUFDMUQsUUFBUWEsUUFBUTtZQUNqRDtZQUNBLElBQUlsSCxHQUFHNkosR0FBRyxLQUFLLE9BQU83SixHQUFHZ0ssUUFBUSxFQUFFO2dCQUMvQkosVUFBVTtnQkFDVjNRLE1BQU02USxTQUFTLENBQUNDLFlBQVksQ0FBQzFELFFBQVFjLE1BQU07WUFDL0M7WUFFQSxJQUFHeUMsU0FBUztnQkFDUjVKLEdBQUdpSyxjQUFjO2dCQUNqQmhSLE1BQU02USxTQUFTLENBQUNJLGFBQWEsQ0FBQyxJQUFJaEYsWUFBWTtZQUNsRDtRQUVKO0lBQ0EsZUFBZSxHQUVuQjtBQUNKO0FBRU8sU0FBU2lGLFdBQVdDLEtBQWE7SUFFcEMsSUFBSTVTLFVBQVUsSUFBSTZTLEtBQUs7SUFFdkI3UyxRQUFROFMsT0FBTyxDQUFFOVMsUUFBUStTLE9BQU8sS0FBS0g7SUFFckMsT0FBTzVTO0FBQ1g7QUFDTyxTQUFTZ1QsV0FBV3BELElBQVU7SUFDakMsTUFBTXFELE1BQU0sSUFBSUosS0FBSztJQUNyQixPQUFPLENBQUMsQ0FBQyxDQUFDakQsS0FBS3NELE9BQU8sS0FBS0QsSUFBSUMsT0FBTyxFQUFDLElBQU0sTUFBRyxPQUFLLElBQUcsQ0FBQyxFQUFHQyxPQUFPLENBQUM7QUFDeEU7QUFFTyxTQUFTQyxVQUFVQyxLQUFXLEVBQUVuUixRQUFRbVIsTUFBTUMsVUFBVTtJQUMzRCxJQUFJcFIsaUJBQWlCNlAsb0RBQU9BLEVBQ3hCLE9BQU83UCxNQUFNcVIsUUFBUTtJQUN6QixPQUFPMUUsUUFBUVAsT0FBTyxDQUFDa0YsSUFBSSxDQUFDSCxPQUFPblI7QUFDdkM7QUFFTyxNQUFNMk0sVUFBVTtJQUVuQlAsU0FBUyxTQUEwQnBNLFFBQVEsSUFBSSxFQUFFb1IsVUFBVTtRQUV2RCxJQUFJcFIsaUJBQWlCNlAsb0RBQU9BLEVBQ3hCLGFBQWE7UUFDYjdQLFFBQVFBLE1BQU11UixXQUFXO1FBRTdCLE1BQU1DLE9BQU8sQ0FBRSxLQUFJLEVBQUVwTyxhQUFhLGdCQUFnQjtRQUVsRCxJQUFJLE9BQU9wRCxVQUFVLFVBQVU7WUFFM0IsSUFBSSxJQUFJLEVBQUVvRCxhQUFhLGlCQUFpQixZQUNwQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBRXBELFFBQU8sR0FBRSxFQUFHeVIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDaFMsT0FBTyxDQUFDLEtBQUssT0FBTztZQUVwRSxPQUFPLENBQUMsRUFBRSxDQUFDTyxNQUFNeVIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDaFMsT0FBTyxDQUFDLEtBQUs7UUFDbkQ7UUFFQSxJQUFJLE9BQU9PLFVBQVUsV0FDakIsT0FBT0EsUUFBUSxTQUFTO1FBRTVCLElBQUlBLGlCQUFpQjJRLE1BQU07WUFDdkIsT0FBTzNRLE1BQU0wUixrQkFBa0IsQ0FBQztRQUNwQztRQUVBLE9BQU8xUjtJQUNYO0lBQ0F5TixRQUFRLFNBQW9Cek4sUUFBUSxJQUFJLENBQUNvUixVQUFVO1FBRS9DLElBQUlwUixpQkFBaUI2UCxvREFBT0EsRUFDeEIsYUFBYTtRQUNiN1AsUUFBUUEsTUFBTXVSLFdBQVc7UUFFN0IsSUFBR3ZSLFVBQVV6QixXQUNULE9BQU87UUFDWCxJQUFHLE9BQU95QixVQUFVLFVBQ2hCLE9BQU9BO1FBRVgsSUFBR0EsaUJBQWlCMlEsTUFDaEIzUSxRQUFROFEsV0FBVzlRO1FBRXZCLElBQUksSUFBSSxDQUFDb0QsWUFBWSxDQUFDLGlCQUFpQixVQUFVO1lBQzdDLElBQUksQ0FBQ1EsWUFBWSxDQUFDLGFBQWE7WUFFL0IsSUFBSSxDQUFHLEtBQUksQ0FBQ3dOLFVBQVUsWUFBWXZCLG9EQUFNLEdBQ3BDQyw2Q0FBU0EsQ0FBQzZCLGdCQUFnQixDQUFDLElBQUksRUFBRTlFLFFBQVEsQ0FBQyxJQUFJLEVBQUUvTyxPQUFPLEdBQUdrQztRQUNsRTtRQUVBLE1BQU13UixPQUFPLENBQUUsS0FBSSxDQUFDcE8sWUFBWSxDQUFDLGdCQUFnQjtRQUVqRCxPQUFPcEQsTUFBTTRSLGNBQWMsQ0FBQ3JULFdBQVc7WUFDbkNzVCx1QkFBdUJMO1lBQ3ZCTSx1QkFBdUJOO1FBQ3ZCO0lBQ1I7SUFDQWhFLFVBQVUsU0FBb0J4TixRQUFRLElBQUksQ0FBQ29SLFVBQVU7UUFFakQsSUFBSXBSLGlCQUFpQjZQLG9EQUFPQSxFQUN4QixhQUFhO1FBQ2I3UCxRQUFRQSxNQUFNdVIsV0FBVztRQUU3QixJQUFHdlIsVUFBVXpCLFdBQ1QsT0FBTztRQUNYLElBQUcsT0FBT3lCLFVBQVUsVUFDaEIsT0FBT0E7UUFDWCxJQUFHQSxpQkFBaUIyUSxNQUNoQjNRLFFBQVE4USxXQUFXOVE7UUFFdkIsSUFBSSxJQUFJLENBQUNvRCxZQUFZLENBQUMsaUJBQWlCLFlBQVk7WUFDL0MsSUFBSSxDQUFDUSxZQUFZLENBQUMsYUFBYTtZQUMvQixJQUFJLENBQUcsS0FBSSxDQUFDd04sVUFBVSxZQUFZdkIsb0RBQU0sR0FDcENDLDZDQUFTQSxDQUFDNkIsZ0JBQWdCLENBQUMsSUFBSSxFQUFFOUUsUUFBUSxDQUFDLElBQUksRUFBRS9PLE9BQU8sR0FBR2tDO1FBQ2xFO1FBRUEsTUFBTXdSLE9BQU8sQ0FBRSxLQUFJLENBQUNwTyxZQUFZLENBQUMsZ0JBQWdCO1FBRWpELE9BQU8sQ0FBQ3BELFFBQVEsR0FBRSxFQUFHNFIsY0FBYyxDQUFDclQsV0FBVztZQUMzQ3NULHVCQUF1Qkw7WUFDdkJNLHVCQUF1Qk47UUFDdkIsS0FBSztJQUNiO0lBQ0E5RCxNQUFNLFNBQW9CMU4sUUFBUSxJQUFJLENBQUNvUixVQUFVO1FBRTdDLElBQUlwUixpQkFBaUI2UCxvREFBT0EsRUFDeEIsYUFBYTtRQUNiN1AsUUFBUUEsTUFBTXVSLFdBQVc7UUFFN0IsSUFBR3ZSLFVBQVV6QixXQUNULE9BQU87UUFDWCxJQUFJLE9BQU95QixVQUFVLFVBQ2pCLE9BQU9BO1FBRVgsSUFBSSxDQUFDNEQsWUFBWSxDQUFDLGFBQWE7UUFFL0IsSUFBSTVELGlCQUFpQjJRLE1BQU87WUFDeEIsSUFBSWpELE9BQU8xTixNQUFNMFIsa0JBQWtCLENBQUM7WUFDcEMsT0FBT2hFLEtBQUtxRSxLQUFLLENBQUMsR0FBRyxLQUFLckUsS0FBS3FFLEtBQUssQ0FBQztRQUN6QztRQUFFLElBQUksT0FBTy9SLFVBQVUsVUFBVTtZQUU3QixNQUFNbEMsVUFBVTJTLFdBQVd6UTtZQUUzQixJQUFJLENBQUcsS0FBSSxDQUFDb1IsVUFBVSxZQUFZdkIsb0RBQU0sR0FDcENDLDZDQUFTQSxDQUFDNkIsZ0JBQWdCLENBQUMsSUFBSSxFQUFFOUUsUUFBUSxDQUFFLElBQUksRUFBRy9PLE9BQU8sR0FBR0E7WUFFaEUsSUFBSTRQLE9BQU81UCxRQUFRNFQsa0JBQWtCLENBQUM7WUFDdEMsT0FBT2hFLEtBQUtxRSxLQUFLLENBQUMsR0FBRyxLQUFLckUsS0FBS3FFLEtBQUssQ0FBQztRQUN6QztRQUVBLE9BQU8vUjtJQUNYO0lBQ0F1TixPQUFPLFNBQW9Cdk4sUUFBUSxJQUFJLENBQUNvUixVQUFVO1FBRTlDLElBQUlwUixpQkFBaUI2UCxvREFBT0EsRUFDeEIsYUFBYTtRQUNiN1AsUUFBUUEsTUFBTXVSLFdBQVc7UUFFN0IsSUFBR3ZSLFVBQVV6QixXQUNULE9BQU87UUFDWCxJQUFHLE9BQU95QixVQUFVLFVBQ2hCLE9BQU9BO1FBRVgsSUFBR0EsaUJBQWlCMlEsTUFDaEIzUSxRQUFROFEsV0FBVzlRO1FBRXZCLElBQUksSUFBSSxDQUFDb0QsWUFBWSxDQUFDLGlCQUFpQixVQUFVO1lBQzdDLElBQUksQ0FBQ1EsWUFBWSxDQUFDLGFBQWE7WUFDL0IsSUFBSSxDQUFHLEtBQUksQ0FBQ3dOLFVBQVUsWUFBWXZCLG9EQUFNLEdBQ3BDQyw2Q0FBU0EsQ0FBQzZCLGdCQUFnQixDQUFDLElBQUksRUFBRTlFLFFBQVEsQ0FBQyxJQUFJLEVBQUUvTyxPQUFPLEdBQUdrQztRQUNsRTtRQUVBLE1BQU13UixPQUFPLENBQUUsS0FBSSxDQUFDcE8sWUFBWSxDQUFDLGdCQUFnQjtRQUVqRCxPQUFPcEQsTUFBTTRSLGNBQWMsQ0FBQ3JULFdBQVc7WUFDbkNzVCx1QkFBdUJMO1lBQ3ZCTSx1QkFBdUJOO1FBQ3ZCLEtBQUs7SUFDYjtBQUNKLEVBQUM7QUFFTSxNQUFNUTtJQUVULE9BQU8sQ0FBc0I7SUFFN0JwUyxZQUFZa04sTUFBMkIsQ0FBRTtRQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHQTtJQUNuQjtJQUVBbUYsUUFBUUMsSUFBbUIsRUFBRTtRQUV6QixJQUFJQSxnQkFBZ0JuQyw0Q0FBUUEsRUFBRTtZQUUxQixLQUFJLElBQUlvQyxLQUFLRCxLQUFLRSxLQUFLLENBQ25CLElBQUksQ0FBQ0gsT0FBTyxDQUFDRTtZQUVqQjtRQUNKO1FBRUEsSUFBSSxJQUFJalMsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFFO1lBQzFCLElBQUltUyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUNuUyxLQUFLO1lBRTVCLElBQUdBLFNBQVMsVUFBVTtnQkFFbEIsSUFBSW1TLFFBQVEsTUFBTTtvQkFFZEgsS0FBS3BGLE1BQU0sR0FBR0gsUUFBUVAsT0FBTztvQkFDN0I4RixLQUFLSSxXQUFXLEdBQUdKLEtBQUtwRixNQUFNLElBQUksY0FBYztvQkFFaEQ7Z0JBQ0o7Z0JBRUFvRixLQUFLcEYsTUFBTSxHQUFHdUY7Z0JBQ2RILEtBQUtJLFdBQVcsR0FBR0osS0FBS3BGLE1BQU0sQ0FBRW9GLEtBQUtkLFVBQVUsR0FBRyxjQUFjO2dCQUVoRTtZQUNKO1lBRUEsSUFBR2xSLFNBQVMsYUFBYTtnQkFDckJnUyxLQUFLdE8sWUFBWSxDQUFDLGFBQWF5TztnQkFDL0JILEtBQUtJLFdBQVcsR0FBR0osS0FBS3BGLE1BQU0sR0FBSW9GLEtBQUtkLFVBQVUsR0FBRyxjQUFjO2dCQUNsRTtZQUNKO1lBRUEsSUFBSWxSLFNBQVMsUUFBUztnQkFHbEIsTUFBTVgsUUFBUXVRLDZDQUFTQSxDQUFDNkIsZ0JBQWdCLENBQUNPO2dCQUV6QyxJQUFJRyxHQUFHLENBQUMsRUFBRSxLQUFLLEtBQUtBLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRztvQkFFOUIsSUFBSUUsSUFBSSxDQUFFTCxDQUFBQSxLQUFLOU8sWUFBWSxDQUFDLGNBQWM7b0JBQzFDLElBQUkrTyxJQUFJLENBQUVELENBQUFBLEtBQUs5TyxZQUFZLENBQUMsY0FBYztvQkFFMUMsSUFBSSxJQUFJa0ksSUFBSSxHQUFHQSxJQUFJaUgsR0FBRyxFQUFFakgsRUFDcEIsSUFBSSxJQUFJa0gsSUFBSSxHQUFHQSxJQUFJTCxHQUFHLEVBQUVLLEVBQUc7d0JBQ3ZCLE1BQU0zTCxTQUFTdEgsTUFBTWtULFVBQVUsQ0FBQ1AsTUFBTTVHLEdBQUdrSDt3QkFDekMsT0FBTzNMLE9BQU9xTCxJQUFJO3dCQUNsQnJMLE9BQU9tQixTQUFTLENBQUN1SCxNQUFNLENBQUM7b0JBQzVCO29CQUNKMkMsS0FBS2pOLGVBQWUsQ0FBQztvQkFDckJpTixLQUFLak4sZUFBZSxDQUFDO29CQUVyQjtnQkFDSjtnQkFFQWlOLEtBQUt0TyxZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUV5TyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3hDSCxLQUFLdE8sWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFeU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUV4QyxJQUFJLElBQUkvRyxJQUFJLEdBQUdBLElBQUkrRyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUvRyxFQUN6QixJQUFJLElBQUlrSCxJQUFJLEdBQUdBLElBQUlILEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRUcsRUFBRztvQkFDNUIsSUFBR2xILE1BQU0sS0FBS2tILE1BQU0sR0FDaEI7b0JBRUosTUFBTTNMLFNBQVN0SCxNQUFNa1QsVUFBVSxDQUFDUCxNQUFNNUcsR0FBR2tIO29CQUN6QzNMLE9BQU9xTCxJQUFJLEdBQUdBO29CQUNkckwsT0FBT21CLFNBQVMsQ0FBQzdELEdBQUcsQ0FBQztnQkFDekI7Z0JBRUo7WUFDSjtZQUVBLElBQUksT0FBT2tPLFFBQVEsV0FBVztnQkFFMUIsSUFBSW5TLEtBQUt3UyxVQUFVLENBQUMsV0FBWTtvQkFDNUJSLEtBQUtsSyxTQUFTLENBQUN1SCxNQUFNLENBQUM7b0JBQ3RCMkMsS0FBS2xLLFNBQVMsQ0FBQ3VILE1BQU0sQ0FBQztvQkFDdEIyQyxLQUFLbEssU0FBUyxDQUFDdUgsTUFBTSxDQUFDO2dCQUMxQjtnQkFDQSxJQUFJclAsS0FBS3dTLFVBQVUsQ0FBQyxZQUFhO29CQUM3QlIsS0FBS2xLLFNBQVMsQ0FBQ3VILE1BQU0sQ0FBQztvQkFDdEIyQyxLQUFLbEssU0FBUyxDQUFDdUgsTUFBTSxDQUFDO29CQUN0QjJDLEtBQUtsSyxTQUFTLENBQUN1SCxNQUFNLENBQUM7Z0JBQzFCO2dCQUVBMkMsS0FBS2xLLFNBQVMsQ0FBQ2lILE1BQU0sQ0FBQy9PLE1BQU1tUztnQkFFNUI7WUFDSjtZQUVBSCxLQUFLMVMsS0FBSyxDQUFDeUksV0FBVyxDQUFDLENBQUMsRUFBRSxFQUFFL0gsS0FBSyxDQUFDLEVBQUVtUztRQUN4QztJQUNKO0lBRUFNLFlBQVl6UyxJQUFZLEVBQUU7UUFDdEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDQSxLQUFLO0lBQzdCO0lBQ0EwUyxZQUFZMVMsSUFBWSxFQUFFO1FBQ3RCLE9BQU9BLFFBQVEsSUFBSSxDQUFDLE9BQU87SUFDL0I7SUFFQSxPQUFPMlMsY0FBY1gsSUFBbUIsRUFBVTtRQUU5QyxJQUFJQSxnQkFBZ0JuQyw0Q0FBUUEsRUFBRTtZQUUxQixNQUFNcUMsUUFBUUYsS0FBS0UsS0FBSztZQUV4QixJQUFJdEYsU0FBU2tGLE9BQU9hLGFBQWEsQ0FBQ1QsS0FBSyxDQUFDLEVBQUU7WUFFMUMsSUFBSSxJQUFJOUcsSUFBSSxHQUFHQSxJQUFJOEcsTUFBTWpULE1BQU0sRUFBRSxFQUFFbU0sRUFBRztnQkFDbEMsSUFBSXdILEtBQUtkLE9BQU9hLGFBQWEsQ0FBQ1QsS0FBSyxDQUFDOUcsRUFBRTtnQkFFdEMsSUFBSSxJQUFJNkUsT0FBT3JELE9BQU8sT0FBTyxDQUN6QixJQUFJLENBQUdxRCxDQUFBQSxPQUFPMkMsR0FBRyxPQUFPLEtBQUtBLEdBQUcsT0FBTyxDQUFDM0MsSUFBSSxLQUFLckQsT0FBTyxPQUFPLENBQUNxRCxJQUFJLEVBQ2hFLE9BQU9yRCxPQUFPLE9BQU8sQ0FBQ3FELElBQUk7WUFDdEM7WUFFQSxPQUFPckQ7UUFDWDtRQUVBLElBQUlBLFNBQVMxTyxPQUFPcUQsV0FBVyxDQUFPO2VBQUl5USxLQUFLbEssU0FBUyxDQUFDK0ssTUFBTTtTQUFHLENBQUNyVCxHQUFHLENBQUMyTSxDQUFBQSxJQUFLO2dCQUFDQTtnQkFBRzthQUFLO1FBRXJGLElBQUksSUFBSWYsSUFBSSxHQUFHQSxJQUFJNEcsS0FBSzFTLEtBQUssQ0FBQ0wsTUFBTSxFQUFFLEVBQUVtTSxFQUFHO1lBQ3ZDLElBQUlwTCxPQUFPZ1MsS0FBSzFTLEtBQUssQ0FBQ3dULElBQUksQ0FBQzFIO1lBQzNCLElBQUksQ0FBRXBMLEtBQUt3UyxVQUFVLENBQUMsT0FDbEI7WUFDSjVGLE1BQU0sQ0FBQzVNLEtBQUs2UixLQUFLLENBQUMsR0FBRyxHQUFHRyxLQUFLMVMsS0FBSyxDQUFDeVQsZ0JBQWdCLENBQUMvUztRQUN4RDtRQUVBLE1BQU1nVCxVQUFVLENBQUVoQixDQUFBQSxLQUFLOU8sWUFBWSxDQUFDLGNBQWM7UUFDbEQsTUFBTStQLFVBQVUsQ0FBRWpCLENBQUFBLEtBQUs5TyxZQUFZLENBQUMsY0FBYztRQUVsRCxJQUFJOFAsVUFBVSxLQUFLQyxVQUFVLEdBQ3pCckcsT0FBT3FCLElBQUksR0FBRztZQUFFZ0Y7WUFBU0Q7U0FBUztRQUV0QyxJQUFJLENBQUcsZ0JBQWVwRyxNQUFLLEdBQ3ZCQSxNQUFNLENBQUMsWUFBWSxHQUFHO1FBRTFCLElBQUksWUFBWW9GLE1BQ1pwRixPQUFPQSxNQUFNLEdBQUdvRixLQUFLcEYsTUFBTTtRQUUvQixJQUFJb0YsS0FBS25OLFlBQVksQ0FBQyxjQUNsQitILE9BQU9hLFNBQVMsR0FBR3VFLEtBQUs5TyxZQUFZLENBQUM7UUFFekMsT0FBTyxJQUFJNE8sT0FBT2xGO0lBQ3RCO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdlhBLHlCQUF5QjtBQUNhO0FBQ1E7QUFHOUMsTUFBTS9PLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQmIsQ0FBQztBQUdNLE1BQU1xVixvQkFBb0JoVyxzREFBSUEsQ0FBQztJQUNsQ1c7QUFDSjtJQUVJLE1BQU0sR0FBRzJGLFNBQVNDLGFBQWEsQ0FBQyxPQUFPO0lBQ3ZDLE1BQU0sQ0FBZTtJQUNyQixTQUFTLEdBQWMsS0FBSztJQUM1QixRQUFRLENBQXNCO0lBRTlCL0QsYUFBYztRQUNWLEtBQUs7UUFFTCxJQUFJLENBQUM5QixPQUFPLENBQUNvRyxNQUFNLENBQUUsSUFBSSxDQUFDLE1BQU07UUFFaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQ2pCLGdCQUFnQixDQUFDLFlBQVk7WUFFckMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLE1BQ25CO1lBRUosd0RBQXdEO1lBQ3hELElBQUksQ0FBQyxNQUFNLENBQUNvUSxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsS0FBSyxHQUFHO1FBQ3pDO1FBRUEsSUFBSSxDQUFDLE1BQU0sQ0FBQ3RRLGdCQUFnQixDQUFDLFdBQVc7WUFFcEMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLE1BQ25CO1lBRUosSUFBSSxDQUFDLE1BQU0sQ0FBQ29RLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVM7UUFDbkQseURBQXlEO1FBQzdEO1FBRUEsSUFBSSxDQUFDLE1BQU0sQ0FBQ3RRLGdCQUFnQixDQUFDLFNBQVM7WUFDbEMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLE1BQ25CO1lBRUosSUFBSSxDQUFDLFNBQVMsQ0FBRXFQLFdBQVcsR0FBR3BCLGtEQUFTQSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQ29CLFdBQVc7WUFDL0UsSUFBSSxDQUFDLFNBQVMsQ0FBQzlCLGFBQWEsQ0FBRSxJQUFJaEYsWUFBWSxTQUFTO2dCQUFDRSxRQUFRO1lBQUk7UUFDeEU7UUFFQSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUNwRjtZQUViLFlBQVk7WUFDWixJQUFJQSxHQUFHb0YsTUFBTSxLQUFLLE1BQ2Q7WUFDSixJQUFJLENBQUMsTUFBTSxDQUFDNEcsV0FBVyxHQUFHcEIsa0RBQVNBLENBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRyxJQUFJLENBQUMsU0FBUyxDQUFFb0IsV0FBVztRQUNyRjtJQUNKO0lBRUFuRixPQUFPNU4sS0FBZ0IsRUFBRTtRQUVyQixJQUFJLENBQUMsTUFBTSxHQUFHQTtRQUNkLE1BQU1pVSxTQUFTLElBQUksQ0FBQyxNQUFNLENBQUNBLE1BQU07UUFFakNqVSxNQUFNaEMsSUFBSSxDQUFDMEYsZ0JBQWdCLENBQUMsVUFBVTtZQUNsQyxhQUFhO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQ3FQLFdBQVcsR0FBR3BCLGtEQUFTQSxDQUFDc0MsT0FBT0MsU0FBUztRQUN4RDtRQUVBRCxPQUFPdlEsZ0JBQWdCLENBQUMsVUFBVTtZQUU5QixNQUFNbVAsUUFBUW9CLE9BQU9wQixLQUFLO1lBRTFCLElBQUksQ0FBQyxNQUFNLENBQUNsSyxlQUFlLENBQUMsbUJBQW1CLENBQUUzSSxNQUFNbVUsSUFBSTtZQUUzRCxJQUFJdEIsTUFBTWpULE1BQU0sS0FBSyxHQUFHO2dCQUVwQixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssTUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQ2dRLG1CQUFtQixDQUFDLFNBQVMsSUFBSSxDQUFDLFFBQVE7Z0JBQzdELElBQUksQ0FBQyxTQUFTLEdBQUc7Z0JBRWpCLElBQUksQ0FBQyxNQUFNLENBQUNtRCxXQUFXLEdBQUc7Z0JBQzFCO1lBQ0o7WUFFQSxJQUFJLENBQUMsU0FBUyxHQUFHRixLQUFLLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDblAsZ0JBQWdCLENBQUMsU0FBUyxJQUFJLENBQUMsUUFBUTtZQUV0RCxJQUFJLENBQUMsTUFBTSxDQUFDcVAsV0FBVyxHQUFHcEIsa0RBQVNBLENBQUUsSUFBSSxDQUFDLFNBQVM7UUFDdkQ7SUFDSjtBQUVKO0FBRUE5VCxrREFBSUEsQ0FBQ29JLE1BQU0sQ0FBQyxnQkFBZ0I0Tjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSG1CO0FBR3hDLE1BQU12RDtJQUVULElBQUksQ0FBUztJQUNiLEtBQUssQ0FBa0M7SUFDdkMsT0FBTyxDQUFVO0lBRWpCLE1BQU0sR0FBbUIsS0FBSztJQUU5QmpRLFlBQVl5RSxHQUFXLEVBQUVxSSxJQUFxQyxFQUFFaUgsZUFBd0IsRUFBRSxDQUFFO1FBRXhGLElBQUksQ0FBQyxJQUFJLEdBQUd0UDtRQUNaLElBQUksQ0FBQyxLQUFLLEdBQUdxSTtRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUdpSDtJQUNuQjtJQUVBbEIsV0FBWWxULEtBQWdCLEVBQUVxVSxJQUFZLEVBQUVDLElBQVksRUFBRTtRQUV0RCxJQUFJQyxhQUFhLElBQUksQ0FBQyxPQUFPLENBQUNwVSxHQUFHLENBQUM2UyxDQUFBQTtZQUU5QixtQkFBbUI7WUFDbkIsSUFBSXdCLE1BQU07bUJBQUl4VSxNQUFNeVUsT0FBTyxDQUFFelUsTUFBTXNOLFFBQVEsQ0FBQzBGLEVBQUV2UyxLQUFLLEVBQUV5VCxTQUFTO2FBQUc7WUFFakUsSUFBSWxCLEVBQUV2UyxLQUFLLENBQUNpVSxXQUFXLENBQUMsUUFBUSxHQUM1QkYsR0FBRyxDQUFDLEVBQUUsSUFBSUg7WUFDZCxJQUFJckIsRUFBRXZTLEtBQUssQ0FBQyxFQUFFLEtBQUssS0FDZitULEdBQUcsQ0FBQyxFQUFFLElBQUlGO1lBRWQsT0FBTyxDQUFDLEVBQUVLLE9BQU9DLFlBQVksQ0FBQyxLQUFHSixHQUFHLENBQUMsRUFBRSxHQUFDLEdBQUcsRUFBRUEsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pEO1FBRUEsSUFBSUssY0FBYztRQUVsQixJQUFJQyxTQUFTO1FBQ2IsSUFBSSxJQUFJL0ksSUFBSSxHQUFHQSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUNuTSxNQUFNLEVBQUUsRUFBRW1NLEVBQUc7WUFFekM4SSxlQUFlLElBQUksQ0FBQyxJQUFJLENBQUNyQyxLQUFLLENBQUNzQyxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMvSSxFQUFFLENBQUN5RixHQUFHO1lBQzFEcUQsZUFBZU4sVUFBVSxDQUFDeEksRUFBRTtZQUU1QitJLFNBQVMsSUFBSSxDQUFDLE9BQU8sQ0FBQy9JLEVBQUUsQ0FBQ2dKLEdBQUc7UUFDaEM7UUFDQUYsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDckMsS0FBSyxDQUFDc0M7UUFFL0IscUJBQXFCO1FBQ3JCLE9BQU9FLGNBQWVIO0lBQzFCO0lBRUEsSUFBSUksY0FBYztRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU87SUFDdkI7SUFFQUMsYUFBYTtRQUNULElBQUksQ0FBQyxNQUFNLEdBQUc7SUFDbEI7SUFFQWxELGNBQWM7UUFDVixPQUFPLElBQUksQ0FBQyxNQUFNO0lBQ3RCO0lBRUE3RSxLQUFLbk4sS0FBZ0IsRUFBRTtRQUVuQixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssTUFDaEIsT0FBTyxJQUFJLENBQUMsTUFBTTtRQUV0QixPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQ0E7SUFDcEM7SUFFQThSLFdBQVc7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJO0lBQ3BCO0FBQ0o7QUFVQSxTQUFTcUQsYUFBYXJRLEdBQVcsRUFBRWdRLE1BQWM7SUFFN0MsTUFBTztRQUFDO1FBQUs7UUFBTTtLQUFLLENBQUNuWCxRQUFRLENBQUNtSCxHQUFHLENBQUNnUSxPQUFPLEVBQ3pDLEVBQUVBO0lBRU4sSUFBSU0sUUFBd0I7UUFDeEI1RCxLQUFLc0Q7SUFDVDtJQUVBLElBQUdoUSxHQUFHLENBQUNnUSxPQUFPLEtBQUssS0FBSztRQUNwQk0sTUFBTW5PLElBQUksR0FBRztRQUNiLE1BQU9uQyxHQUFHLENBQUMsRUFBRWdRLE9BQU8sS0FBSyxPQUFPaFEsR0FBRyxDQUFDZ1EsU0FBTyxFQUFFLEtBQUssS0FBTTtZQUNwRCxJQUFHQSxTQUFPLEtBQUtoUSxJQUFJbEYsTUFBTSxFQUNyQixNQUFNLElBQUliLE1BQU07UUFDeEI7UUFDQSxFQUFFK1Y7SUFDTixPQUFPLElBQUloUSxHQUFHLENBQUNnUSxPQUFPLEtBQUssT0FBUWhRLEdBQUcsQ0FBQ2dRLE9BQU8sSUFBSSxPQUFPaFEsR0FBRyxDQUFDZ1EsT0FBTyxJQUFJLEtBQU87UUFDM0VNLE1BQU1uTyxJQUFJLEdBQUc7UUFDYixJQUFJb08sV0FBVztRQUNmLE1BQU92USxHQUFHLENBQUNnUSxPQUFPLEtBQUssT0FBT2hRLEdBQUcsQ0FBQ2dRLE9BQU8sSUFBSSxPQUFPaFEsR0FBRyxDQUFDZ1EsT0FBTyxJQUFJLElBQU07WUFFckUsSUFBSWhRLEdBQUcsQ0FBQ2dRLE9BQU8sS0FBSyxLQUFNO2dCQUN0QixJQUFHTyxhQUFhLE1BQ1osTUFBTSxJQUFJdFcsTUFBTTtnQkFDcEJzVyxXQUFXO1lBQ2Y7WUFFQSxFQUFFUDtRQUNOO0lBRUosT0FBTyxJQUFJaFEsR0FBRyxDQUFDZ1EsT0FBTyxLQUFLLE9BQU9oUSxHQUFHLENBQUNnUSxPQUFPLElBQUksT0FBT2hRLEdBQUcsQ0FBQ2dRLE9BQU8sSUFBSSxLQUFLO1FBRXhFLE1BQU9BLFNBQVNoUSxJQUFJbEYsTUFBTSxJQUNka0YsQ0FBQUEsR0FBRyxDQUFDZ1EsT0FBTyxLQUFLLE9BQU9oUSxHQUFHLENBQUNnUSxPQUFPLElBQUksT0FBT2hRLEdBQUcsQ0FBQ2dRLE9BQU8sSUFBSSxPQUNyQ2hRLEdBQUcsQ0FBQ2dRLE9BQU8sSUFBSSxPQUFPaFEsR0FBRyxDQUFDZ1EsT0FBTyxJQUFJLEdBQUUsRUFFdEUsRUFBRUE7UUFFTk0sTUFBTW5PLElBQUksR0FBR25DLEdBQUcsQ0FBQ2dRLE9BQU8sS0FBSyxNQUFNLFNBQVM7UUFFNUMsSUFBSWhRLEdBQUcsQ0FBQ2dRLE9BQU8sS0FBSyxLQUNoQixNQUFNLElBQUkvVixNQUFNO0lBQ3hCLE9BQU87UUFDSHFXLE1BQU1uTyxJQUFJLEdBQUcsTUFBTSxtQkFBbUI7UUFFdEMsSUFBSW5DLEdBQUcsQ0FBQ2dRLFNBQVMsRUFBRSxLQUFLLEtBQ3BCLEVBQUVBO2FBQ0QsSUFBSWhRLEdBQUcsQ0FBQ2dRLFNBQVMsRUFBRSxLQUFLLEtBQ3pCLEVBQUVBO1FBRU4sRUFBRUE7SUFDTjtJQUVBTSxNQUFNTCxHQUFHLEdBQUdEO0lBQ1pNLE1BQU0zVSxLQUFLLEdBQUdxRSxJQUFJME4sS0FBSyxDQUFDNEMsTUFBTTVELEdBQUcsRUFBRTRELE1BQU1MLEdBQUc7SUFFNUMsT0FBT0s7QUFDWDtBQUVBLE1BQU1FO0lBRUZDLFNBQWlCO0lBQ2pCLElBQUksQ0FBeUQ7SUFFN0RsVixZQUFZbVYsR0FBMkQsRUFBRSxHQUFHRCxRQUFnQixDQUFFO1FBQzFGLElBQUksQ0FBQ0EsUUFBUSxHQUFHQTtRQUNoQixJQUFHQSxhQUFhdlcsV0FDWixNQUFNLElBQUlELE1BQU07UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBR3lXO0lBQ2hCO0lBRUFDLEtBQUt6VixLQUFnQixFQUFhO1FBQzlCLE1BQU1rTSxPQUFPLElBQUksQ0FBQ3FKLFFBQVEsQ0FBQ3BWLEdBQUcsQ0FBRXlTLENBQUFBLElBQUtBLEVBQUU2QyxJQUFJLENBQUN6VjtRQUM1QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUNBLFVBQVVrTTtJQUMvQjtBQUVKO0FBRUEsU0FBU3dKLFNBQVNDLENBQVU7SUFFeEIsSUFBR0EsTUFBTTNXLFdBQ0wsT0FBTztJQUVYLElBQUksT0FBTzJXLE1BQU0sVUFDYixPQUFPQyxPQUFPRDtJQUVsQixJQUFJQSxhQUFhdkUsTUFDYixPQUFPRyxtREFBVUEsQ0FBQ29FO0lBRXRCLE9BQU9BO0FBQ1g7QUFFQSxNQUFNRSxVQUFVO0lBQ1osS0FBSyxDQUFDOVEsR0FBYzRRLElBQWVELFNBQVNDLEtBQUc7SUFDL0MsT0FBTyxDQUFDNVEsR0FBYzRRLElBQWUsQ0FBQ0QsU0FBU0M7SUFDL0MsT0FBTyxDQUFDNVEsR0FBYzRRLElBQWUsQ0FBQ0QsU0FBU0M7SUFDL0MsS0FBSyxDQUFDNVEsR0FBYzRRLEdBQVlHLElBQWVKLFNBQVNDLEtBQUdELFNBQVNJO0lBQ3BFLEtBQUssQ0FBQy9RLEdBQWM0USxHQUFZRyxJQUFlSixTQUFTQyxLQUFHRCxTQUFTSTtJQUNwRSxLQUFLLENBQUMvUSxHQUFjNFEsR0FBWUcsSUFBZUosU0FBU0MsS0FBR0QsU0FBU0k7SUFDcEUsS0FBSyxDQUFDL1EsR0FBYzRRLEdBQVlHLElBQWVKLFNBQVNDLEtBQUdELFNBQVNJO0lBQ3BFLEtBQUssQ0FBQy9RLEdBQWM0USxHQUFZRyxJQUFlQyxLQUFLQyxHQUFHLENBQUNOLFNBQVNDLElBQUdELFNBQVNJO0lBQzdFLEtBQUssQ0FBQy9RLEdBQWM0USxHQUFXRyxJQUFjLENBQUMsRUFBRTFJLDRDQUFPQSxDQUFDUCxPQUFPLENBQUNrRixJQUFJLENBQUMsTUFBTTRELEdBQUcsRUFBRXZJLDRDQUFPQSxDQUFDUCxPQUFPLENBQUNrRixJQUFJLENBQUMsTUFBTStELEdBQUcsQ0FBQztJQUMvRyxLQUFNLENBQUMvUSxHQUFjNFEsR0FBUUcsSUFBV0gsTUFBTUc7SUFDOUMsTUFBTSxDQUFDL1EsR0FBYzRRLEdBQVFHLElBQVdILE1BQU1HO0lBQzlDLEtBQU0sQ0FBQy9RLEdBQWM0USxHQUFRRyxJQUFXSCxJQUFJRztJQUM1QyxNQUFNLENBQUMvUSxHQUFjNFEsR0FBUUcsSUFBV0gsS0FBS0c7SUFDN0MsS0FBTSxDQUFDL1EsR0FBYzRRLEdBQVFHLElBQVdILElBQUlHO0lBQzVDLE1BQU0sQ0FBQy9RLEdBQWM0USxHQUFRRyxJQUFXSCxLQUFLRztBQUNqRDtBQUVBLHdFQUF3RTtBQUN4RSxNQUFNRyxVQUFVO0lBQ1o7UUFBQztLQUFJO0lBQ0w7UUFBQztLQUFJO0lBQ0w7UUFBQztLQUFJO0lBQ0w7UUFBQztRQUFPO0tBQU07SUFDZDtRQUFDO0tBQUk7SUFDTDtRQUFDO0tBQUk7SUFDTDtRQUFDO1FBQUs7S0FBSTtJQUNWO1FBQUM7UUFBSztLQUFJO0lBQ1Y7UUFBQztLQUFJO0lBQ0w7UUFBQztRQUFLO1FBQU07UUFBSztRQUFNO1FBQUs7S0FBSyxDQUFDLFVBQVU7Q0FDL0M7QUFFRCxJQUFJQyxNQUE4QixDQUFDO0FBQ25DLElBQUksSUFBSW5LLElBQUksR0FBR0EsSUFBSWtLLFFBQVFyVyxNQUFNLEVBQUUsRUFBRW1NLEVBQ2pDLEtBQUksSUFBSW9LLE1BQU1GLE9BQU8sQ0FBQ2xLLEVBQUUsQ0FDcEJtSyxHQUFHLENBQUNDLEdBQUcsR0FBR3BLO0FBRWxCLFNBQVNxSyxlQUFlQyxNQUFlO0lBRW5DLElBQUlBLE9BQU96VyxNQUFNLEtBQUssR0FBRztRQUVyQixJQUFJeVcsTUFBTSxDQUFDLEVBQUUsQ0FBQ3BQLElBQUksS0FBSyxVQUFVO1lBQzdCLE1BQU1xUCxLQUFLLENBQUNELE1BQU0sQ0FBQyxFQUFFLENBQUM1VixLQUFLLENBQUNQLE9BQU8sQ0FBQyxLQUFLO1lBQ3pDLE9BQU8sSUFBSW9WLEtBQU0sSUFBTWdCO1FBQzNCO1FBQ0EsSUFBSUQsTUFBTSxDQUFDLEVBQUUsQ0FBQ3BQLElBQUksS0FBSyxVQUFVO1lBQzdCLE1BQU1uQyxNQUFNdVIsTUFBTSxDQUFDLEVBQUUsQ0FBQzVWLEtBQUssQ0FBQytSLEtBQUssQ0FBQyxHQUFFLENBQUM7WUFDckMsT0FBTyxJQUFJOEMsS0FBTSxJQUFNeFE7UUFDM0I7UUFDQSxJQUFJdVIsTUFBTSxDQUFDLEVBQUUsQ0FBQ3BQLElBQUksS0FBSyxTQUFTO1lBQzVCLE9BQU8sSUFBSXFPLEtBQU0sQ0FBQ3RWO2dCQUVkLElBQUl1VyxNQUFNdlcsTUFBTXNOLFFBQVEsQ0FBQytJLE1BQU0sQ0FBQyxFQUFFLENBQUM1VixLQUFLLEVBQUV5VCxTQUFTLENBQUNyQyxVQUFVO2dCQUU5RCxJQUFJMEUsZUFBZWpHLFNBQ2ZpRyxNQUFNQSxJQUFJcEosSUFBSSxDQUFDbk4sUUFBUSxxQkFBcUI7Z0JBRWhELE9BQU91VztZQUNYO1FBQ0o7UUFDQSxNQUFNLElBQUl4WCxNQUFNO0lBQ3BCO0lBRUEsSUFBR3NYLE1BQU0sQ0FBQyxFQUFFLENBQUM1VixLQUFLLEtBQUssT0FBTzRWLE1BQU0sQ0FBQ0EsT0FBT3pXLE1BQU0sR0FBQyxFQUFFLENBQUNhLEtBQUssS0FBSyxLQUM1RCxPQUFPMlYsZUFBZUMsT0FBTzdELEtBQUssQ0FBQyxHQUFFLENBQUM7SUFFMUMsSUFBSWdFLE1BQU07UUFDTkMsVUFBVVIsUUFBUXJXLE1BQU07UUFDeEJRLEtBQVUsQ0FBQztJQUNmO0lBRUEsSUFBSSxJQUFJMkwsSUFBSXNLLE9BQU96VyxNQUFNLEdBQUcsR0FBR21NLEtBQUssR0FBRyxFQUFFQSxFQUFHO1FBQ3hDLElBQUlzSyxNQUFNLENBQUN0SyxFQUFFLENBQUM5RSxJQUFJLEtBQUssTUFDbkI7UUFFSixJQUFJb1AsTUFBTSxDQUFDdEssRUFBRSxDQUFDdEwsS0FBSyxLQUFLLEtBQU07WUFDMUJzTCxJQUFJc0ssT0FBT0ssU0FBUyxDQUFFbFYsQ0FBQUEsSUFBS0EsRUFBRXlGLElBQUksS0FBSyxRQUFRekYsRUFBRWYsS0FBSyxLQUFLO1lBRTFELElBQUlzTCxNQUFNLEdBQ047WUFDSixFQUFFQTtRQUNOO1FBRUEsdUJBQXVCO1FBQ3ZCLElBQUlzSyxNQUFNLENBQUN0SyxFQUFFLENBQUN0TCxLQUFLLEtBQUssT0FBTzRWLE1BQU0sQ0FBQ3RLLEVBQUUsQ0FBQ3RMLEtBQUssS0FBSyxLQUFNO1lBRXJELElBQUlzTCxNQUFNLEtBQUtzSyxNQUFNLENBQUN0SyxJQUFFLEVBQUUsQ0FBQzlFLElBQUksS0FBSyxNQUFPO2dCQUV2QyxNQUFNMFAsT0FBTyxDQUFDLEVBQUUsRUFBRU4sTUFBTSxDQUFDdEssRUFBRSxDQUFDdEwsS0FBSyxDQUFDLENBQUM7Z0JBQ25DNFYsTUFBTSxDQUFDdEssRUFBRSxDQUFDdEwsS0FBSyxHQUFHa1c7Z0JBQ2xCLE1BQU1GLFdBQVdQLEdBQUcsQ0FBQ1MsS0FBSztnQkFFMUIsdURBQXVEO2dCQUN2RCxJQUFJRixZQUFZRCxJQUFJQyxRQUFRLEVBQUU7b0JBQzFCRCxJQUFJQyxRQUFRLEdBQUdBO29CQUNmRCxJQUFJcFcsR0FBRyxHQUFRMkw7Z0JBQ25CO2dCQUVBO1lBQ0o7UUFDSjtRQUVBLE1BQU0wSyxXQUFXUCxHQUFHLENBQUNHLE1BQU0sQ0FBQ3RLLEVBQUUsQ0FBQ3RMLEtBQUssQ0FBQztRQUVyQyx3QkFBd0I7UUFDeEIsSUFBSWdXLFdBQVdELElBQUlDLFFBQVEsRUFBRTtZQUN6QkQsSUFBSUMsUUFBUSxHQUFHQTtZQUNmRCxJQUFJcFcsR0FBRyxHQUFRMkw7UUFDbkI7SUFDSjtJQUVBLElBQUl5SyxJQUFJcFcsR0FBRyxLQUFLLENBQUMsR0FDYixNQUFNLElBQUlyQixNQUFNO0lBRXBCLElBQUk2WCxXQUFXUCxNQUFNLENBQUNHLElBQUlwVyxHQUFHLENBQUM7SUFDOUIsSUFBSXdXLFNBQVNuVyxLQUFLLEtBQUssS0FBTTtRQUN6QixNQUFNb1csT0FBUVIsT0FBTzdELEtBQUssQ0FBQyxHQUFHZ0UsSUFBSXBXLEdBQUc7UUFDckMsTUFBTStWLEtBQUtOLE9BQU8sQ0FBQ2UsU0FBU25XLEtBQUssQ0FBeUI7UUFDMUQsT0FBTyxJQUFJNlUsS0FDUGEsSUFDQUMsZUFBZVM7SUFFdkI7SUFFQSxJQUFJRCxTQUFTblcsS0FBSyxLQUFLLFNBQVVtVyxTQUFTblcsS0FBSyxLQUFLLE9BQVE7UUFFeEQsTUFBTXFXLFFBQVNULE9BQU83RCxLQUFLLENBQUNnRSxJQUFJcFcsR0FBRyxHQUFDO1FBQ3BDLE1BQU0rVixLQUFLTixPQUFPLENBQUNlLFNBQVNuVyxLQUFLLENBQXlCO1FBQzFELE9BQU8sSUFBSTZVLEtBQ1BhLElBQ0FDLGVBQWVVO0lBRXZCO0lBRUEsTUFBTUQsT0FBUVIsT0FBTzdELEtBQUssQ0FBQyxHQUFHZ0UsSUFBSXBXLEdBQUc7SUFDckMsTUFBTTBXLFFBQVFULE9BQU83RCxLQUFLLENBQUNnRSxJQUFJcFcsR0FBRyxHQUFDO0lBRW5DLE1BQU0rVixLQUFLTixPQUFPLENBQUNlLFNBQVNuVyxLQUFLLENBQXlCO0lBRTFELE9BQU8sSUFBSTZVLEtBQ1BhLElBQ0FDLGVBQWVTLE9BQ2ZULGVBQWVVO0FBRXZCO0FBRU8sU0FBUzlCLGNBQWNsUSxHQUFVO0lBRXBDLElBQUlnUSxTQUFTO0lBQ2IsSUFBSXVCLFNBQVMsSUFBSTNXO0lBRWpCLE1BQU9vVixTQUFTaFEsSUFBSWxGLE1BQU0sQ0FBRTtRQUN4QixJQUFJbVgsV0FBVzVCLGFBQWFyUSxLQUFLZ1E7UUFDakN1QixPQUFPcFgsSUFBSSxDQUFFOFg7UUFDYmpDLFNBQVNpQyxTQUFTaEMsR0FBRztJQUN6QjtJQUVBLE1BQU1pQyxPQUFPWixlQUFlQztJQUU1QixNQUFNWSxTQUFTWixPQUFPYSxNQUFNLENBQUMxVixDQUFBQSxJQUFLQSxFQUFFeUYsSUFBSSxLQUFLO0lBRTdDLE9BQU8sSUFBSXFKLFFBQVF4TCxLQUFLLENBQUM5RSxRQUFxQmdYLEtBQUt2QixJQUFJLENBQUN6VixRQUFRaVg7QUFDcEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoVkEseUJBQXlCO0FBQ2E7QUFHdEMsMkJBQTJCO0FBRTNCLE1BQU16WSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JiLENBQUM7QUFFTSxNQUFNMlkscUJBQXFCdFosc0RBQUlBLENBQUM7SUFDbkNXO0FBQ0o7SUFFSSxNQUFNLEdBQUcyRixTQUFTQyxhQUFhLENBQUMsT0FBTztJQUV2Qy9ELGFBQWM7UUFDVixLQUFLO1FBRUwsSUFBSSxDQUFDOUIsT0FBTyxDQUFDb0csTUFBTSxDQUFFLElBQUksQ0FBQyxNQUFNO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUNnRSxlQUFlLENBQUM7UUFFNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQ2pGLGdCQUFnQixDQUFDLFdBQVcsQ0FBQ3FEO1lBQ3JDLElBQUdBLEdBQUdxUSxJQUFJLEtBQUssU0FDWDtZQUVKclEsR0FBR3NRLHdCQUF3QjtZQUMzQnRRLEdBQUdpSyxjQUFjO1lBRWpCLE1BQU1zRyxXQUFXLElBQUksQ0FBQyxNQUFNLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDeEUsV0FBVyxFQUFHRixLQUFLO1lBRXJFLElBQUksQ0FBQyxNQUFNLENBQUNoQyxTQUFTLENBQUMyRyxLQUFLO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMzRyxTQUFTLENBQUNqTSxHQUFHLElBQUswUztZQUU5QixJQUFJLENBQUMsTUFBTSxDQUFDckQsTUFBTSxDQUFDdUQsS0FBSztZQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDdkQsTUFBTSxDQUFDclAsR0FBRyxDQUFFMFMsUUFBUSxDQUFDLEVBQUU7WUFFbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQ0csSUFBSTtRQUNwQjtRQUVBLFVBQVU7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDOU8sZUFBZSxDQUFDO0lBQzVCOztXQUVHLEdBQ1A7SUFFQSxNQUFNLENBQWE7SUFFbkJpRixPQUFPNU4sS0FBZ0IsRUFBRTtRQUVyQixJQUFJLENBQUMsTUFBTSxHQUFHQTtRQUVkLE1BQU02USxZQUFZN1EsTUFBTTZRLFNBQVM7UUFFakNBLFVBQVVuTixnQkFBZ0IsQ0FBQyxVQUFVLENBQUNxQjtZQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDZ08sV0FBVyxHQUFHbEMsVUFBVXRCLFVBQVUsSUFBSTtRQUN0RDtJQUNKO0FBQ0o7QUFFQTFSLGtEQUFJQSxDQUFDb0ksTUFBTSxDQUFDLGNBQWNrUjs7Ozs7Ozs7Ozs7Ozs7OztBQy9Fb0I7QUFHdkMsTUFBTU87SUFFVCxTQUFTLEdBQUcsSUFBSWhZLFFBQXNCO0lBQ3RDLFdBQVcsQ0FBQytCLEVBQVU7UUFDbEIsTUFBTUEsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDN0IsTUFBTSxDQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDWCxJQUFJLENBQUUsSUFBSStQLHVEQUFZQSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDdkQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDdk4sR0FBRztJQUM3QjtJQUVBLGdCQUFnQjtRQUVaLElBQUlrVyxpQkFBaUIsSUFBSSxDQUFDLE1BQU0sQ0FBQ3JLLFFBQVEsQ0FBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUd1RixLQUFLO1FBRWxGLElBQUksQ0FBQyxNQUFNLENBQUNoQyxTQUFTLENBQUMyRyxLQUFLLElBQUksZUFBZTtRQUU5QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUc7WUFFZiwyQkFBMkI7WUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQzNHLFNBQVMsQ0FBQ2pNLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZTtZQUVqRCwwQkFBMEI7WUFDMUIsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDaU0sU0FBUyxDQUFDM00sR0FBRyxJQUFLeVQsaUJBQzdCLElBQUksQ0FBQyxNQUFNLENBQUM5RyxTQUFTLENBQUNiLE1BQU0sSUFBSzJIO2lCQUVqQyxJQUFJLENBQUMsTUFBTSxDQUFDOUcsU0FBUyxDQUFDak0sR0FBRyxJQUFLK1M7WUFFbEM7UUFDSjtRQUVBLElBQUksQ0FBQyxNQUFNLENBQUM5RyxTQUFTLENBQUNqTSxHQUFHLElBQUsrUztJQUVsQztJQUVBLHlCQUF5QjtRQUVyQixNQUFNOUUsUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDaEMsU0FBUyxDQUFDZ0MsS0FBSztRQUN6QyxLQUFJLElBQUkzRCxXQUFXLElBQUksQ0FBQyxTQUFTLENBQzdCQSxRQUFRRyxRQUFRLENBQUM7UUFFckIsSUFBSXdELE1BQU1qVCxNQUFNLEtBQUssS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDcVUsTUFBTSxDQUFDQyxTQUFTLEtBQUtyQixLQUFLLENBQUMsRUFBRSxFQUMvRDtRQUVKLElBQUksSUFBSTlHLElBQUksR0FBR0EsSUFBSThHLE1BQU1qVCxNQUFNLEVBQUUsRUFBRW1NLEVBQy9CLElBQUksQ0FBQyxXQUFXLENBQUNBLEdBQUdzRCxRQUFRLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQy9CLFFBQVEsQ0FBRXVGLEtBQUssQ0FBQzlHLEVBQUU7SUFDcEU7SUFFQSxPQUFPLENBQW1CO0lBQzFCLE1BQU0sQ0FBc0I7SUFDNUIsWUFBWSxDQUFrQjtJQUM5QixTQUFTLENBQTBCO0lBQ25DLFVBQVUsQ0FBeUI7SUFDbkMsZUFBZSxDQUFVO0lBRXpCLE9BQU8sQ0FBQ2hGLEVBQWM7UUFFbEIsTUFBTTZRLE9BQU87ZUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDQyxLQUFLLENBQUN0QyxRQUFRLENBQUMsRUFBRSxDQUFDQSxRQUFRO1NBQUM7UUFDeEQsSUFBSXVDO1FBQ0osSUFBSUEsU0FBU0YsS0FBS2hZLE1BQU0sR0FBQyxHQUFHa1ksVUFBVSxHQUFHLEVBQUVBLE9BQVE7WUFDL0MsSUFBSS9RLEdBQUdnUixPQUFPLElBQUlILElBQUksQ0FBQ0UsT0FBTyxDQUFDRSxxQkFBcUIsR0FBRzlILENBQUMsRUFDcEQ7UUFDUjtRQUVBLE1BQU0rSCxPQUFPO2VBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQ0osS0FBSyxDQUFDdEMsUUFBUTtTQUFDLENBQUNwVixHQUFHLENBQUUyTSxDQUFBQSxJQUFLQSxFQUFFeUksUUFBUSxDQUFDLEVBQUU7UUFDcEUsSUFBSTJDO1FBQ0osSUFBSUEsU0FBU0QsS0FBS3JZLE1BQU0sR0FBQyxHQUFHc1ksVUFBVSxHQUFHLEVBQUVBLE9BQVE7WUFDL0MsSUFBSW5SLEdBQUdvUixPQUFPLElBQUlGLElBQUksQ0FBQ0MsT0FBTyxDQUFDRixxQkFBcUIsR0FBRzdILENBQUMsRUFDcEQ7UUFDUjtRQUVBLE9BQU87WUFBQytIO1lBQVFKO1NBQU87SUFDM0I7SUFFQXpYLFlBQVlMLEtBQWdCLENBQUU7UUFFMUIsSUFBSSxDQUFDLE1BQU0sR0FBR0E7UUFFZCxNQUFNb1ksT0FBT2pVLFNBQVNrQixhQUFhLENBQUM7UUFFcEMsTUFBTWdULGdCQUFnQixDQUFDdFI7WUFFbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDQTtZQUUvQixJQUFJLENBQUMsZ0JBQWdCO1FBQ3pCO1FBRUEvRyxNQUFNaVUsTUFBTSxDQUFDdlEsZ0JBQWdCLENBQUMsVUFBVTtZQUNwQzFELE1BQU02USxTQUFTLENBQUN5SCxVQUFVLENBQUV0WSxNQUFNdVksY0FBYyxDQUFDdlksTUFBTWlVLE1BQU07UUFDakU7UUFFQWpVLE1BQU02USxTQUFTLENBQUNuTixnQkFBZ0IsQ0FBQyxVQUFVO1lBQ3ZDLElBQUksQ0FBQyx5QkFBeUI7UUFDbEM7UUFFQSxhQUFhO1FBQ2IxRCxNQUFNekIsT0FBTyxDQUFDbUYsZ0JBQWdCLENBQUMsYUFBYSxDQUFDcUQ7WUFFekMsTUFBTU8sU0FBU1AsR0FBR08sTUFBTTtZQUN4QixJQUFJdEgsTUFBTThULE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxLQUFLLEtBQUsxTSxRQUNqQztZQUNKLElBQUksQ0FBRTtnQkFBQztnQkFBTTthQUFLLENBQUMzSixRQUFRLENBQUUySixPQUFPN0IsT0FBTyxHQUN2QztZQUVKLElBQUk2QixPQUFPN0IsT0FBTyxLQUFLLFFBQVE2QixPQUFPeUwsV0FBVyxLQUFLLElBQUs7Z0JBRXZELElBQUksQ0FBQyxNQUFNLENBQUNsQyxTQUFTLENBQUMyRyxLQUFLO2dCQUMzQixNQUFNZ0IsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUNDLE1BQU0sRUFBRSxDQUFDO2dCQUMvRSxJQUFJLENBQUMsTUFBTSxDQUFDOUgsU0FBUyxDQUFDak0sR0FBRyxJQUFLLElBQUksQ0FBQyxNQUFNLENBQUMyUyxRQUFRLENBQUNpQixLQUFLM0YsS0FBSztnQkFFN0Q7WUFDSjtZQUVBLElBQUksQ0FBQyxPQUFPLEdBQVc5TCxHQUFHMkosT0FBTztZQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFNcEo7WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBUyxJQUFJLENBQUMsT0FBTyxDQUFDUCxLQUFLLGVBQWU7WUFDeEQsSUFBSSxDQUFDLFVBQVUsR0FBUSxJQUFJLENBQUMsU0FBUztZQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHL0csTUFBTTZRLFNBQVMsQ0FBQ2dDLEtBQUssQ0FBQ0wsS0FBSztZQUVsRCxJQUFJLENBQUMsZ0JBQWdCO1lBQ3JCNEYsS0FBSzFVLGdCQUFnQixDQUFDLGFBQWEyVTtZQUVuQ2xVLFNBQVNULGdCQUFnQixDQUFDLFdBQVc7Z0JBQ2pDMFUsS0FBS3hJLG1CQUFtQixDQUFDLGFBQWF5STtZQUMxQyxHQUFHO2dCQUFDTyxNQUFNO1lBQUk7UUFFbEI7SUFDSjtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSUEseUJBQXlCO0FBQ2E7QUFFdEMsWUFBWTtBQUMrQjtBQVkzQyxTQUFTQyxTQUFTdlIsTUFBbUI7SUFFakMsT0FBT0EsT0FBT0csT0FBTyxDQUFDO0FBQzFCOzs7Ozs7NkJBTTZCLEdBQzdCO0FBRUEsU0FBU3FSLFFBQVEvUixFQUFTO0lBRXRCLE1BQU1PLFNBQVNQLEdBQUdPLE1BQU07SUFFeEIsZ0lBQWdJO0lBRWhJLElBQUl5UixTQUFTMVIsT0FBTzJSLFlBQVksR0FBSUMsVUFBVSxDQUFDO0lBQy9DLElBQUlyRyxJQUFJbUcsT0FBT0csV0FBVztJQUUxQixnQkFBZ0I7SUFDaEIsSUFBSXRaLFNBQVM7SUFDYixJQUFJLElBQUltTSxJQUFJLEdBQUdBLElBQUl6RSxPQUFPckMsVUFBVSxDQUFDckYsTUFBTSxFQUFFLEVBQUVtTSxFQUFHO1FBRTlDLElBQUlvTixRQUFRN1IsT0FBT3JDLFVBQVUsQ0FBQzhHLEVBQUU7UUFDaEMsSUFBSW9OLE1BQU1DLFFBQVEsS0FBSzlELEtBQUsrRCxTQUFTLEVBQ2pDRixRQUFRQSxNQUFNbFUsVUFBVSxDQUFDLEVBQUU7UUFFL0IsSUFBSThULE9BQU9PLGNBQWMsS0FBS0gsT0FBUTtZQUNsQyxtREFBbUQ7WUFDbkR2WixVQUFVZ1Q7WUFDVjtRQUNKO1FBQ0Esc0NBQXNDO1FBQ3RDaFQsVUFBVTBILE9BQU9yQyxVQUFVLENBQUM4RyxFQUFFLENBQUNnSCxXQUFXLENBQUVuVCxNQUFNO0lBQ3REO0lBRUEsbUJBQW1CO0lBQ25CMEgsT0FBT3lMLFdBQVcsR0FBR3pMLE9BQU95TCxXQUFXO0lBRXZDLElBQUlvRztJQUNKLElBQUlwTjtJQUNKLElBQUlBLElBQUksR0FBR0EsSUFBSXpFLE9BQU9yQyxVQUFVLENBQUNyRixNQUFNLEVBQUUsRUFBRW1NLEVBQUc7UUFDMUMsSUFBSW5NLFVBQVUwSCxPQUFPckMsVUFBVSxDQUFDOEcsRUFBRSxDQUFDZ0gsV0FBVyxDQUFFblQsTUFBTSxFQUFHO1lBQ3JEdVosUUFBUTdSLE9BQU9yQyxVQUFVLENBQUM4RyxFQUFFO1lBQzVCO1FBQ0o7UUFDQW5NLFVBQVUwSCxPQUFPckMsVUFBVSxDQUFDOEcsRUFBRSxDQUFDZ0gsV0FBVyxDQUFFblQsTUFBTTtJQUN0RDtJQUVBLElBQUl1WixNQUFNQyxRQUFRLEtBQUs5RCxLQUFLK0QsU0FBUyxFQUNqQ0YsUUFBUUEsTUFBTWxVLFVBQVUsQ0FBQyxFQUFFO0lBRS9CLElBQUlxSyxRQUFRbkwsU0FBU29WLFdBQVc7SUFDaEMsSUFBSUMsTUFBTW5TLE9BQU8yUixZQUFZO0lBRTdCMUosTUFBTW1LLFFBQVEsQ0FBQ04sT0FBT3ZaO0lBQ3RCMFAsTUFBTW9LLFFBQVEsQ0FBQztJQUNmRixJQUFJRyxlQUFlO0lBQ25CSCxJQUFJSSxRQUFRLENBQUN0SztBQUNqQjtBQUVBLFNBQVN1SyxXQUFZL1UsR0FBVztJQUU1QixJQUFHQSxRQUFRLFFBQ1AsT0FBTztJQUNYLElBQUdBLFFBQVEsUUFDUCxPQUFPO0lBRVgsSUFBR0EsSUFBSTFGLElBQUksT0FBTyxJQUNkLE9BQU8wRjtJQUVYLElBQUdBLEdBQUcsQ0FBQyxFQUFFLEtBQUssS0FBSztRQUNmLE9BQU9rUSw4REFBYUEsQ0FBQ2xRO0lBQ3pCO0lBRUEsSUFBSWdWLGNBQWNsRSxPQUFROVEsSUFBSTVFLE9BQU8sQ0FBQyxLQUFLLEtBQUtvWSxVQUFVLENBQUMsUUFBUTtJQUNuRSxJQUFJLENBQUUxQyxPQUFPbUUsS0FBSyxDQUFFRCxjQUNoQixPQUFPQTtJQUNYLElBQUloVixHQUFHLENBQUNBLElBQUlsRixNQUFNLEdBQUMsRUFBRSxLQUFLLE9BQU9rRixHQUFHLENBQUNBLElBQUlsRixNQUFNLEdBQUMsRUFBRSxLQUFLLEtBQU07UUFDekRrYSxjQUFjbEUsT0FBUTlRLElBQUkwTixLQUFLLENBQUMsR0FBRSxDQUFDLEdBQUc4RixVQUFVLENBQUMsUUFBUSxJQUFJcFksT0FBTyxDQUFDLEtBQUs7UUFDMUUsSUFBSSxDQUFFMFYsT0FBT21FLEtBQUssQ0FBRUQsY0FBZ0I7WUFDaEMsSUFBSWhWLEdBQUcsQ0FBQ0EsSUFBSWxGLE1BQU0sR0FBQyxFQUFFLEtBQUssS0FDdEIsT0FBT2thO1lBQ1gsT0FBTyxDQUFDLENBQUNBLGNBQWMsR0FBRSxFQUFHNUgsV0FBVyxDQUFDO1FBQzVDO0lBQ0o7SUFFQSxNQUFNOEgsUUFBUWxWLElBQUltVixLQUFLLENBQUM7SUFDeEIsSUFBR0QsTUFBTXBhLE1BQU0sSUFBSSxHQUFHO1FBRWxCLElBQUlzYSxZQUFZLElBQUk5SSxLQUNoQixDQUFDNEksS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJNUksT0FBTytJLFdBQVcsSUFDbkMsQ0FBQ0gsS0FBSyxDQUFDLEVBQUUsR0FBQyxHQUNWLENBQUNBLEtBQUssQ0FBQyxFQUFFO1FBR2IsSUFBSUUsVUFBVXBJLFFBQVEsT0FBTyxnQkFDekIsT0FBT29JO0lBQ2Y7SUFFQSxPQUFPcFY7QUFDWDtBQUVBLE1BQU1zVjtJQUVGLE1BQU0sR0FBWSxLQUFLO0lBQ3ZCLE9BQU8sQ0FBYztJQUNyQixLQUFLLENBQVc7SUFFaEIvWixZQUFZaUgsTUFBbUIsRUFBRTNHLElBQVksQ0FBRTtRQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHMkc7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFLM0c7SUFDbkI7SUFFQSxJQUFJcVQsUUFBUTtRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU07SUFDdEI7SUFFQSxJQUFJQSxNQUFNQSxLQUFhLEVBQUU7UUFFckIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLQSxPQUNoQjtRQUVKLElBQUlxRyxhQUFhLElBQUksQ0FBQyxNQUFNO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUdyRztRQUdkLElBQUlxRyxlQUFlLE1BQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQ3BKLGFBQWEsQ0FBRSxJQUFJaEYsWUFBWSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUFDRSxRQUFRa087UUFBVTtRQUV4RixJQUFJckcsVUFBVSxNQUNWLElBQUksQ0FBQyxPQUFPLENBQUMvQyxhQUFhLENBQUUsSUFBSWhGLFlBQVksQ0FBQyxFQUFFLElBQUksQ0FBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFBQ0UsUUFBUTZIO1FBQUs7SUFDMUY7QUFDSjtBQUVBLE1BQU1zRyxTQUFTO0lBQ1gsYUFBYUY7SUFDYixVQUFhQTtBQUNoQjtBQUVNLE1BQU03SixrQkFBa0IxUyxzREFBSUEsQ0FBQztJQUNoQ1csR0FBR0EsK0RBQUFBO0lBQ0hKLFlBQVk7UUFBQztRQUFRO1FBQVE7S0FBSztBQUN0QztJQUVJMFYsU0FBU2pWLE9BQU9xRCxXQUFXLENBQUVyRCxPQUFPMGIsT0FBTyxDQUFDRCxRQUFRbmEsR0FBRyxDQUFFLENBQUMsQ0FBQ2dDLEdBQUVxWSxFQUFFLEdBQUs7WUFBQ3JZO1lBQUcsSUFBSXFZLEVBQUUsSUFBSSxDQUFDeGMsSUFBSSxFQUFFbUU7U0FBRyxHQUFhO0lBR3pHLGlCQUFpQjtJQUNqQixPQUFPLEdBQU0sSUFBSXFPLFNBQVMsSUFBSSxFQUFFLEVBQUUsRUFBRTtJQUNwQyxVQUFVLEdBQWEsSUFBSUEsU0FBUyxJQUFJLEVBQUUsRUFBRSxFQUFFO0lBQzlDLGVBQWUsR0FBRyxJQUFJa0gsMERBQWFBLENBQUMsSUFBSSxFQUFFO0lBRTFDLFlBQVksR0FBRyxJQUFJakgsa0RBQWFBLENBQUMsSUFBSSxFQUFFO0lBRXZDLE9BQU8yQixpQkFBaUJPLElBQVUsRUFBRTtRQUNoQyxPQUFPOVUsa0RBQUlBLENBQUNvTCxXQUFXLENBQWEsS0FBTWpCLFdBQVcsR0FBa0JoSyxJQUFJO0lBQy9FO0lBRUEsSUFBSWlXLFNBQVM7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPO0lBQ3ZCO0lBQ0EsSUFBSXBELFlBQVk7UUFDWixPQUFPLElBQUksQ0FBQyxVQUFVO0lBQzFCO0lBRUEsSUFBYXRTLFVBQVU7UUFDbkIsT0FBTyxLQUFLLENBQUNBO0lBQ2pCO0lBRUFvUixRQUFRckksTUFBbUIsRUFBRSxDQUFDNEksR0FBRUMsR0FBRUMsR0FBRUMsRUFBMEMsRUFBRTtRQUU1RSxNQUFNb0ssYUFBYSxJQUFJLENBQUNsYyxPQUFPLENBQUM4RyxhQUFhLENBQUMsU0FBVXFWLFNBQVM7UUFFakVwVCxPQUFPckgsS0FBSyxDQUFDeUksV0FBVyxDQUFDLE9BQVUsQ0FBQyxFQUFFK1IsYUFBYXRLLEVBQUUsRUFBRSxDQUFDO1FBQ3hEN0ksT0FBT3JILEtBQUssQ0FBQ3lJLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRTJILEVBQUUsRUFBRSxDQUFDO1FBRTNDL0ksT0FBT3JILEtBQUssQ0FBQ3lJLFdBQVcsQ0FBQyxRQUFXLENBQUMsRUFBRXdILEVBQUUsRUFBRSxDQUFDO1FBQzVDNUksT0FBT3JILEtBQUssQ0FBQ3lJLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBRTBILEVBQUUsRUFBRSxDQUFDO0lBRTlDO0lBRUFaLFFBQVFxRCxLQUFzQixFQUFFO1FBRTVCQSxRQUFRLFdBQVdBLFFBQVFBLE1BQU1BLEtBQUssR0FBR0E7UUFFekMsTUFBTThILFFBQVE5SCxLQUFLLENBQUMsRUFBRTtRQUN0QixNQUFNa0MsTUFBUWxDLEtBQUssQ0FBQ0EsTUFBTWpULE1BQU0sR0FBQyxFQUFFO1FBRW5DLE9BQU87WUFDSCthLE1BQU1DLFVBQVU7WUFDaEJELE1BQU1ELFNBQVM7WUFDZjNGLElBQUk2RixVQUFVLEdBQUc3RixJQUFJOEYsV0FBVyxHQUFHRixNQUFNQyxVQUFVLEdBQUc7WUFDdEQ3RixJQUFJMkYsU0FBUyxHQUFHM0YsSUFBSStGLFlBQVksR0FBR0gsTUFBTUQsU0FBUyxHQUFHO1NBQ3hEO0lBQ0w7SUFFQXhILFdBQVdQLElBQVUsRUFBRW9JLFFBQWdCLEVBQUVDLFFBQWdCLEVBQUU7UUFFdkQsSUFBSSxDQUFDQyxLQUFLQyxJQUFJLEdBQUcsSUFBSSxDQUFDekcsT0FBTyxDQUFDOUI7UUFFOUJzSSxPQUFPRjtRQUNQRyxPQUFPRjtRQUVQLHNDQUFzQztRQUN0QyxJQUFJQyxNQUFNLEdBQ05BLE1BQU07UUFDVixJQUFJQSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMxRixRQUFRLENBQUMzVixNQUFNLEVBQ2xDcWIsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDMUYsUUFBUSxDQUFDM1YsTUFBTSxHQUFHO1FBRXhDLElBQUlzYixNQUFNLEdBQ05BLE1BQU07UUFDVixJQUFJQSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMzRixRQUFRLENBQUMwRixJQUFJLENBQUMxRixRQUFRLENBQUMzVixNQUFNLEVBQ2hEc2IsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDM0YsUUFBUSxDQUFDMEYsSUFBSSxDQUFDMUYsUUFBUSxDQUFDM1YsTUFBTSxHQUFHO1FBRXRELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQzJWLFFBQVEsQ0FBQzBGLElBQUksQ0FBQzFGLFFBQVEsQ0FBQzJGLElBQUk7SUFDbEQ7SUFFQSxhQUFhO0lBQ2IsU0FBUyxHQUFvQixLQUFLO0lBRWxDLGFBQWEsR0FBRyxJQUFJeGIsUUFBb0I7SUFDeEMsY0FBYyxDQUFDcU0sQ0FBUztRQUNwQixNQUFPQSxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUNuTSxNQUFNLENBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUNYLElBQUksQ0FBRSxJQUFJNFEscURBQVVBLENBQUMsSUFBSTtRQUVoRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM5RCxFQUFFO0lBQ2hDO0lBQ0EsaUJBQWlCO1FBQ2IsS0FBSSxJQUFJeU0sT0FBTyxJQUFJLENBQUMsYUFBYSxDQUM3QkEsSUFBSW5KLFFBQVEsQ0FBQztJQUNyQjtJQUVBaFAsYUFBYztRQUNWLEtBQUs7UUFFTCxNQUFNNFQsU0FBUyxJQUFJakYsdURBQVlBLENBQUMsSUFBSSxFQUFFO1FBQ3RDLE1BQU1tTSxTQUFTLElBQUlsTCx1REFBWUEsQ0FBQyxJQUFJO1FBQ3BDLE1BQU1tTCxPQUFTLElBQUlwTSx1REFBWUEsQ0FBQyxJQUFJLEVBQUU7UUFFdEMsTUFBTW9KLE9BQU9qVSxTQUFTa0IsYUFBYSxDQUFDO1FBRXBDLElBQUksQ0FBQ3JILElBQUksQ0FBQzBGLGdCQUFnQixDQUFDLGlCQUFpQjtZQUN4QyxJQUFJLENBQUMsaUJBQWlCO1FBQzFCO1FBRUEsSUFBSTJYLHFCQUFnQztRQUNwQyxJQUFJQyxrQkFBNEM7UUFFaEQsTUFBTUMsaUJBQWlCLENBQUN4VTtZQUVwQixJQUFJOEwsUUFBUSxJQUFLLENBQUNpQixNQUFNLENBQUNxSCxNQUFNLENBQUNuSCxLQUFLLENBQWNuQixLQUFLO1lBQ3hELE1BQU1ySSxNQUFNcUksS0FBSyxDQUFDQSxNQUFNalQsTUFBTSxHQUFDLEVBQUU7WUFFakMsSUFBSTRVLE1BQU1oSyxJQUFJd04scUJBQXFCO1lBRW5DLElBQUl3RCxPQUFPelUsR0FBR2dSLE9BQU8sR0FBSXZELENBQUFBLElBQUl0RSxDQUFDLEdBQUdzRSxJQUFJaUgsS0FBSyxHQUFFO1lBQzVDLElBQUlDLE9BQU8zVSxHQUFHb1IsT0FBTyxHQUFJM0QsQ0FBQUEsSUFBSXJFLENBQUMsR0FBR3FFLElBQUltSCxNQUFNLEdBQUM7WUFFNUMsSUFBSUMsTUFBTTtZQUNWLElBQUlDLE1BQU05RixLQUFLK0YsSUFBSSxDQUFDSjtZQUVwQixJQUFJM0YsS0FBS2dHLEdBQUcsQ0FBQ1AsUUFBUXpGLEtBQUtnRyxHQUFHLENBQUNMLE9BQVE7Z0JBQ2xDRSxNQUFNN0YsS0FBSytGLElBQUksQ0FBQ047Z0JBQ2hCSyxNQUFNO1lBQ1Y7WUFFQSxJQUFJRyxPQUFPeFI7WUFDWCxJQUFJZ00sTUFBT2hNO1lBRVgsSUFBSXlSLFFBQVFDO1lBRVosR0FBRztnQkFFQ0YsT0FBTXhGO2dCQUNOQSxNQUFNLElBQUksQ0FBQ3RELFVBQVUsQ0FBQzhJLE1BQU1ILEtBQUtEO2dCQUVqQyxJQUFJcEYsUUFBUXdGLE1BQ1I7Z0JBRUosSUFBSUcsVUFBVTNGLElBQUl3QixxQkFBcUI7Z0JBQ3ZDaUUsU0FBU2xWLEdBQUdnUixPQUFPLEdBQUlvRSxDQUFBQSxRQUFRak0sQ0FBQyxHQUFHaU0sUUFBUVYsS0FBSyxHQUFFO2dCQUNsRFMsU0FBU25WLEdBQUdvUixPQUFPLEdBQUlnRSxDQUFBQSxRQUFRaE0sQ0FBQyxHQUFHZ00sUUFBUVIsTUFBTSxHQUFDO1lBRXRELFFBQVNNLFNBQVNMLE1BQU1NLFNBQVNMLE1BQU0sRUFBSTtZQUUzQ1IscUJBQXFCVztZQUNyQlYsa0JBQXFCO2dCQUFDTTtnQkFBSUM7YUFBSTtZQUU5QixJQUFJckssTUFBTWhIO1lBQ1YsSUFBSXVLLE1BQU1pSDtZQUNWLElBQUl4UixJQUFJb1EsVUFBVSxHQUFHb0IsS0FBS3BCLFVBQVUsSUFBSXBRLElBQUlrUSxTQUFTLEdBQUdzQixLQUFLdEIsU0FBUyxFQUNsRSxDQUFDbEosS0FBS3VELElBQUksR0FBRztnQkFBQ0E7Z0JBQUt2RDthQUFJO1lBRTNCLG9CQUFvQjtZQUNwQixJQUFJLENBQUMsaUJBQWlCO1lBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBR25DLFFBQVEsQ0FBRSxJQUFJLENBQUMvQixRQUFRLENBQUNrRSxLQUFLdUQ7UUFDeEQ7UUFFQW9HLE9BQU96WCxnQkFBZ0IsQ0FBQyxhQUFhLENBQUNxRDtZQUNsQ0EsR0FBR2lLLGNBQWM7WUFFakIsSUFBSSxDQUFDOEMsTUFBTSxDQUFDcUgsTUFBTSxDQUFDbkgsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVO1lBRTFDLGFBQWE7WUFDYm9FLEtBQUsxVSxnQkFBZ0IsQ0FBQyxhQUFhNlg7WUFFbkNwWCxTQUFTVCxnQkFBZ0IsQ0FBQyxXQUFXO2dCQUVqQyxJQUFJLENBQUNrWSxLQUFLQyxJQUFJLEdBQUlQO2dCQUVsQixJQUFJekksUUFBUSxJQUFLLENBQUNpQixNQUFNLENBQUNxSCxNQUFNLENBQUNuSCxLQUFLLENBQWNuQixLQUFLO2dCQUN4RCxNQUFNckksTUFBTXFJLEtBQUssQ0FBQ0EsTUFBTWpULE1BQU0sR0FBQyxFQUFFO2dCQUVqQyxJQUFJMFcsS0FBSztnQkFFVCxJQUFJK0UsdUJBQXVCN1EsS0FBSztvQkFFNUIsSUFBSWdNLE1BQU1oTTtvQkFDVixHQUFHO3dCQUNDLEVBQUU4TDt3QkFFRkUsTUFBTSxJQUFJLENBQUN0RCxVQUFVLENBQUNzRCxLQUFLcUYsS0FBS0Q7d0JBRWhDLElBQUlyZCxVQUErQmlNO3dCQUNuQyxJQUFJLE9BQU9qTSxRQUFRc1QsVUFBVSxLQUFLLFVBQzlCdFQsVUFBVSxJQUFLc1QsVUFBVSxHQUFjeUUsS0FBSXNGLENBQUFBLE1BQU1DLEdBQUU7NkJBQ2xELElBQUl0ZCxRQUFRc1QsVUFBVSxZQUFZVCxNQUFPOzRCQUMxQzdTLFVBQVUsSUFBSTZTLEtBQUs1RyxJQUFJcUgsVUFBVTs0QkFDakN0VCxRQUFROFMsT0FBTyxDQUFFOVMsUUFBUStTLE9BQU8sS0FBS2dGLEtBQUlzRixDQUFBQSxNQUFNQyxHQUFFO3dCQUNyRDt3QkFFQSxJQUFJckwsU0FBUyxJQUFJLEVBQUU7NEJBQUNnRzt5QkFBSSxFQUFFalksT0FBTyxHQUFHQTt3QkFDcENpWSxJQUFJNEYsU0FBUyxHQUFHNVIsSUFBSTRSLFNBQVMsRUFBRSxpQkFBaUI7b0JBR3BELFFBQVM1RixRQUFPNkUsbUJBQXFCO2dCQUN6QztnQkFFQSxJQUFJLENBQUMsaUJBQWlCLElBQUksU0FBUztnQkFDbkMsSUFBSSxDQUFDdkgsTUFBTSxDQUFDcUgsTUFBTSxDQUFDbkgsS0FBSyxHQUFHO2dCQUMzQnFILHFCQUFxQjtnQkFDckJDLGtCQUFxQjtnQkFFckIsYUFBYTtnQkFDYmxELEtBQUt4SSxtQkFBbUIsQ0FBQyxhQUFhMkw7WUFFMUMsR0FBRztnQkFBQzNDLE1BQU07WUFBSTtRQUNsQjtRQUVBLElBQUksQ0FBQzVhLElBQUksQ0FBQzBGLGdCQUFnQixDQUFDLGdCQUFnQjtZQUN2QyxJQUFJLENBQUMxRixJQUFJLENBQUN5SyxTQUFTLENBQUM3RCxHQUFHLENBQUM7UUFDNUI7UUFDQSxJQUFJLENBQUM1RyxJQUFJLENBQUMwRixnQkFBZ0IsQ0FBQyxjQUFjO1lBQ3JDLElBQUksQ0FBQzFGLElBQUksQ0FBQ3lLLFNBQVMsQ0FBQ3VILE1BQU0sQ0FBQztRQUMvQjtRQUVBLElBQUksQ0FBQyxPQUFPLENBQUN0TSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUNxRDtZQUVyQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUNuSCxNQUFNLEtBQUssR0FDeEIsTUFBTSxJQUFJYixNQUFNO1lBRXBCa1YsT0FBTzVFLFFBQVEsQ0FBRSxJQUFJbUIsU0FBUyxJQUFJLEVBQUU7Z0JBQUMsSUFBSSxDQUFDK0gsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPO2FBQUU7UUFDM0U7UUFFQSxJQUFJLENBQUMsVUFBVSxDQUFDN1UsZ0JBQWdCLENBQUMsVUFBVSxDQUFDcUQ7WUFFeEMsS0FBSyxJQUFJNEwsUUFBUSxJQUFJLENBQUNwVSxPQUFPLENBQUNnSCxnQkFBZ0IsQ0FBQyxjQUMzQ29OLEtBQUtsSyxTQUFTLENBQUN1SCxNQUFNLENBQUM7WUFFMUIsTUFBTTZDLFFBQVEsSUFBSSxDQUFDLFVBQVUsQ0FBQ0EsS0FBSztZQUVuQyxJQUFJQSxNQUFNalQsTUFBTSxLQUFLLEdBQ2pCO1lBRUosS0FBSyxJQUFJK1MsUUFBUUUsTUFBUTtnQkFFckIsSUFBSUEsTUFBTWpULE1BQU0sS0FBSyxHQUNqQitTLEtBQUtsSyxTQUFTLENBQUM3RCxHQUFHLENBQUM7Z0JBQ3ZCLE1BQU0sQ0FBQ3FXLEtBQUtDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDdkk7Z0JBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUM0QyxRQUFRLENBQUMsRUFBRSxDQUFDQSxRQUFRLENBQUMyRixJQUFJLENBQUN6UyxTQUFTLENBQUM3RCxHQUFHLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMyUSxRQUFRLENBQUMwRixJQUFJLENBQUMxRixRQUFRLENBQUMsRUFBRSxDQUFDOU0sU0FBUyxDQUFDN0QsR0FBRyxDQUFDO1lBQ3hEO1lBRUF1VyxPQUFPOUwsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVO1FBRS9CLG9CQUFvQjtRQUNwQixzQ0FBc0M7UUFDdEMsYUFBYTtRQUNqQjtRQUVBLGtCQUFrQjtRQUNsQixNQUFNZ04sY0FBY2xZLFNBQVNDLGFBQWEsQ0FBQztRQUMzQ2lZLFlBQVk1VCxTQUFTLENBQUM3RCxHQUFHLENBQUM7UUFFeEI7WUFFRSxNQUFNMFgsUUFBUSxNQUFNemUsa0RBQUlBLENBQUNvSyxLQUFLLENBQUM7WUFDL0JxVSxNQUFNMU8sTUFBTSxDQUFDLElBQUk7WUFDakJ5TyxZQUFZMVgsTUFBTSxDQUFFMlgsTUFBTXRlLElBQUk7WUFFOUIsTUFBTXVlLFVBQVUsTUFBTTFlLGtEQUFJQSxDQUFDb0ssS0FBSyxDQUFDO1lBQ2pDc1UsUUFBUTNPLE1BQU0sQ0FBQyxJQUFJO1lBQ25CeU8sWUFBWTFYLE1BQU0sQ0FBRTRYLFFBQVF2ZSxJQUFJO1FBRXBDO1FBQ0EsSUFBSSxDQUFDTyxPQUFPLENBQUNvRyxNQUFNLENBQUMwWDtRQUVwQixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUUsS0FBSSxDQUFDL2IsS0FBSyxDQUFDMlgsSUFBSSxJQUFJLElBQUksQ0FBRSxLQUFJLENBQUMzWCxLQUFLLENBQUNzWCxJQUFJLElBQUk7UUFFN0QsSUFBSSxDQUFDclosT0FBTyxDQUFDbUYsZ0JBQWdCLENBQUMsYUFBYSxDQUFDcUQ7WUFFeEMsTUFBTU8sU0FBU1AsR0FBR08sTUFBTTtZQUV4Qiw4QkFBOEI7WUFDOUIsSUFBSUEsT0FBTzlCLFlBQVksQ0FBQyxvQkFDcEI7WUFFSixJQUFJOEIsT0FBTzdCLE9BQU8sS0FBSyxNQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDNlMsVUFBVSxDQUFFaFI7WUFFN0Isc0JBQXNCO1lBQ3RCLElBQUlBLE9BQU83QixPQUFPLEtBQUssUUFBUTZCLE9BQU95TCxXQUFXLEtBQUssSUFBSTtnQkFFdEQsTUFBTUosT0FBTyxJQUFJLENBQUNyRixRQUFRLENBQUNoRyxPQUFPeUwsV0FBVyxFQUFHbUIsU0FBUztnQkFFekQsSUFBSSxDQUFDLE9BQU8sQ0FBQ29FLFVBQVUsQ0FBQzNGO1lBQzVCO1FBRUo7UUFFQSxJQUFJLENBQUNwVSxPQUFPLENBQUNtRixnQkFBZ0IsQ0FBQyxZQUFZLENBQUNxRDtZQUV2QyxJQUFJTyxTQUFTUCxHQUFHTyxNQUFNO1lBRXRCLElBQUlBLE9BQU83QixPQUFPLEtBQUssTUFDbkI7WUFFSixJQUFJLElBQUksQ0FBQ25GLEtBQUssQ0FBQ2tjLEVBQUUsS0FBSyxVQUFVLE9BQWlCQyxLQUFLLEtBQUssTUFBTztnQkFDOURuVixPQUFPcUIsZUFBZSxDQUFDLG1CQUFtQjtnQkFDMUNyQixPQUFPb1YsS0FBSztZQUNoQjtRQUNKO1FBRUEsYUFBYTtRQUNiLElBQUksQ0FBQ25lLE9BQU8sQ0FBQ21GLGdCQUFnQixDQUFDLFdBQVcsQ0FBQ3FEO1lBRXRDLElBQUlBLEdBQUdxUSxJQUFJLENBQUNqRSxVQUFVLENBQUMsVUFBVztnQkFFOUJwTSxHQUFHaUssY0FBYztnQkFFakIsTUFBTXdGLE1BQU0sSUFBSSxDQUFDdkMsTUFBTSxDQUFDcEIsS0FBSztnQkFDN0IsSUFBSTJELElBQUk1VyxNQUFNLEtBQUssR0FDZjtnQkFFSixJQUFJK2MsUUFBUTtnQkFDWixJQUFJQyxRQUFRO2dCQUVaLElBQUk3VixHQUFHcVEsSUFBSSxLQUFLLGFBQ1osRUFBRXdGO2dCQUNOLElBQUk3VixHQUFHcVEsSUFBSSxLQUFLLGNBQ1osRUFBRXdGO2dCQUNOLElBQUk3VixHQUFHcVEsSUFBSSxLQUFLLFdBQ1osRUFBRXVGO2dCQUNOLElBQUk1VixHQUFHcVEsSUFBSSxLQUFLLGFBQ1osRUFBRXVGO2dCQUVOLElBQUlFO2dCQUNKLElBQUk5VixHQUFHMkosT0FBTyxFQUFHO29CQUViLElBQUlzTCxPQUFTeEYsR0FBRyxDQUFDLEVBQUU7b0JBQ25CLElBQUl2QyxTQUFTLElBQUksQ0FBQ2YsVUFBVSxDQUFDOEksTUFBTVcsT0FBT0M7b0JBRTFDLElBQUlaLEtBQUtuSyxVQUFVLEtBQUs3UyxhQUFhaVYsT0FBT3BDLFVBQVUsS0FBSzdTLFdBQVc7d0JBRWxFLE1BQU9nZCxTQUFTL0gsVUFBVUEsT0FBT3BDLFVBQVUsS0FBSzdTLFVBQVc7NEJBQ3ZEZ2QsT0FBUy9IOzRCQUNUQSxTQUFTLElBQUksQ0FBQ2YsVUFBVSxDQUFDOEksTUFBTVcsT0FBT0M7d0JBQzFDO3dCQUNBM0ksU0FBUytIO29CQUNiLE9BQU87d0JBQ0gsTUFBT0EsU0FBUy9ILFVBQVVBLE9BQU9wQyxVQUFVLEtBQUs3UyxVQUFXOzRCQUN2RGdkLE9BQVMvSDs0QkFDVEEsU0FBUyxJQUFJLENBQUNmLFVBQVUsQ0FBQzhJLE1BQU1XLE9BQU9DO3dCQUMxQztvQkFDSjtvQkFFQUMsT0FBTzVJO2dCQUNYLE9BQ0k0SSxPQUFPLElBQUksQ0FBQzNKLFVBQVUsQ0FBRXNELEdBQUcsQ0FBQyxFQUFFLEVBQUVtRyxPQUFPQztnQkFFM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQ0YsS0FBSztnQkFDakIsSUFBSSxDQUFDekksTUFBTSxDQUFDcUUsVUFBVSxDQUFDdUU7Z0JBRXZCO1lBQ0o7WUFFQSx3QkFBd0I7WUFDeEIsSUFBSSxJQUFJLENBQUN2YyxLQUFLLENBQUNrYyxFQUFFLEtBQUssUUFBUTtnQkFDMUI7WUFDSjtZQUVBLE1BQU1sVixTQUFTUCxHQUFHTyxNQUFNO1lBQ3hCLElBQUlBLFdBQVcsSUFBSSxDQUFDLE1BQU0sRUFBRztnQkFDekIsSUFBSVAsR0FBR3FRLElBQUksS0FBSyxVQUFVclEsR0FBRzJKLE9BQU8sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLE1BQU07b0JBQzdEM0osR0FBR2lLLGNBQWM7b0JBQ2pCLE1BQU14TyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUNxUSxLQUFLO29CQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDdFUsT0FBTyxHQUFHaUU7b0JBRTFCLHdDQUF3QztvQkFDeEMsSUFBSSxDQUFFdUUsR0FBR2dLLFFBQVEsSUFBSSxDQUFFaEssR0FBRytWLE1BQU0sRUFBRzt3QkFDL0IsTUFBTXRTLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQ3FJLEtBQUs7d0JBQ2hDLE1BQU1rSyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUNsSyxLQUFLO3dCQUVqQyxJQUFJLElBQUk5RyxJQUFJLEdBQUdBLElBQUl2QixJQUFJNUssTUFBTSxFQUFFLEVBQUVtTSxFQUFJOzRCQUNqQ2dSLEdBQUcsQ0FBQ2hSLEVBQUUsQ0FBQ3FRLFNBQVMsR0FBRzVSLEdBQUcsQ0FBQ3VCLEVBQUUsQ0FBQ3FRLFNBQVM7d0JBQ25DLHFCQUFxQjt3QkFDekI7b0JBQ0o7b0JBRUE7Z0JBQ0o7Z0JBRUEsSUFBSSxDQUFFclYsR0FBRzZKLEdBQUcsS0FBSyxPQUFPN0osR0FBRzZKLEdBQUcsS0FBSyxHQUFFLEtBQU03SixHQUFHMkosT0FBTyxFQUFHO29CQUNwRDNKLEdBQUdpSyxjQUFjO29CQUVqQm9LLEtBQUsvTCxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVU7b0JBQzdCLFVBQVU7b0JBQ1YsK0RBQStEO29CQUUvRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMyTixTQUFTO29CQUUxQyxJQUFJalcsR0FBRzZKLEdBQUcsS0FBSyxLQUFNO3dCQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDcU0sWUFBWTt3QkFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQ0MsYUFBYTtvQkFDakM7b0JBRUE7Z0JBQ0o7Z0JBRUEsSUFBSW5XLEdBQUc2SixHQUFHLEtBQUssYUFBYTdKLEdBQUc2SixHQUFHLEtBQUssV0FBVzdKLEdBQUc2SixHQUFHLEtBQUssT0FBUTtvQkFDakUsUUFBUSxTQUFTO2dCQUNyQjtnQkFBRSxJQUFJN0osR0FBR3FRLElBQUksS0FBSyxVQUFXO29CQUV6QixJQUFJLENBQUN2RyxTQUFTLENBQUNxTSxhQUFhO29CQUM1QixJQUFJLENBQUNyTSxTQUFTLENBQUNJLGFBQWEsQ0FBRSxJQUFJaEYsWUFBWTtvQkFFOUM7Z0JBQ0o7Z0JBQUUsSUFBSWxGLEdBQUdxUSxJQUFJLEtBQUssU0FBVTtnQkFDeEIsb0JBQW9CO2dCQUN4QixPQUFPLElBQUdyUSxHQUFHMkosT0FBTyxFQUFFO29CQUNsQjtnQkFDSixPQUNLO29CQUVELE1BQU04RixNQUFNLElBQUksQ0FBQ3ZDLE1BQU0sQ0FBQ3BCLEtBQUs7b0JBRTdCLElBQUkyRCxJQUFJNVcsTUFBTSxHQUFHLEdBQUc7d0JBQ2hCNFcsR0FBRyxDQUFDLEVBQUUsQ0FBQ3ZGLGFBQWEsQ0FBRSxJQUFJaEYsWUFBWSxZQUFZOzRCQUFDa1IsU0FBUzt3QkFBSTt3QkFDaEUzRyxHQUFHLENBQUMsRUFBRSxDQUFDekQsV0FBVyxHQUFHO29CQUN6QjtvQkFFQTtnQkFDSjtZQUNKO1lBRUEsSUFBSXpMLFdBQVcsSUFBSSxDQUFDLE1BQU0sSUFBSVAsR0FBR3FRLElBQUksS0FBSyxXQUFXclEsR0FBR2dLLFFBQVEsRUFDNUQsUUFBUSw0QkFBNEI7WUFFeEMsSUFBR2hLLEdBQUdxUSxJQUFJLEtBQUssU0FBUztnQkFDcEJyUSxHQUFHaUssY0FBYztnQkFFakIsTUFBTXdGLE1BQU0sSUFBSSxDQUFDdkMsTUFBTSxDQUFDcEIsS0FBSztnQkFDN0IsSUFBSTJELElBQUk1VyxNQUFNLEtBQUssR0FDZjtnQkFFSixJQUFJLENBQUNxYixLQUFJQyxJQUFJLEdBQUcsSUFBSSxDQUFDekcsT0FBTyxDQUFFK0IsR0FBRyxDQUFDLEVBQUU7Z0JBRXBDLEVBQUV5RTtnQkFDRixJQUFJQSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMxRixRQUFRLENBQUMzVixNQUFNLEVBQUc7b0JBQ3JDcWIsTUFBTTtvQkFDTixFQUFFQztnQkFDTjtnQkFDQSxJQUFJQSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMzRixRQUFRLENBQUMwRixJQUFJLENBQUMxRixRQUFRLENBQUMzVixNQUFNLEVBQUc7b0JBQ25Ec2IsTUFBTTtnQkFDVjtnQkFFQSxJQUFJMkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDdEgsUUFBUSxDQUFDMEYsSUFBSSxDQUFDMUYsUUFBUSxDQUFDMkYsSUFBSTtnQkFFbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQ3dCLEtBQUs7Z0JBQ2pCLElBQUksQ0FBQ3pJLE1BQU0sQ0FBQ3FFLFVBQVUsQ0FBQ3VFO2dCQUN2QjtZQUNKO1FBQ0o7UUFFQSxNQUFNTyxXQUFXLENBQUNyVztZQUNkLElBQUksQ0FBQyxpQkFBaUI7WUFDdEIsYUFBYTtZQUNiLElBQUdBLEdBQUdvRixNQUFNLEtBQUssTUFDYjJNLFFBQVEvUjtRQUNoQjtRQUVBLGVBQWU7UUFDZixJQUFJLENBQUN4SSxPQUFPLENBQUNtRixnQkFBZ0IsQ0FBQyxXQUFXLENBQUNxRDtZQUV0QyxNQUFNTyxTQUFTUCxHQUFHTyxNQUFNO1lBRXhCOFQsS0FBSy9MLFFBQVEsQ0FBQztZQUVkLElBQUkvSCxPQUFPN0IsT0FBTyxLQUFLLE1BQ25CO1lBRUosSUFBSSxDQUFDcU8sTUFBTSxDQUFDQyxTQUFTLENBQUNDLEtBQUssR0FBRzFNO1FBQ2xDO1FBRUEsWUFBWTtRQUNaLElBQUksQ0FBQ3RKLElBQUksQ0FBQzBGLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDcUQ7WUFFM0MsSUFBSSxDQUFDL0ksSUFBSSxDQUFDeUssU0FBUyxDQUFDaUgsTUFBTSxDQUFDLGFBQWE7WUFFeEMsTUFBTWlELE9BQU81TCxHQUFHb0YsTUFBTTtZQUV0QixJQUFHd0csS0FBS2QsVUFBVSxZQUFZdkIsb0RBQU9BLEVBQUU7Z0JBRW5DLE1BQU14TCxNQUFNNk4sS0FBS2QsVUFBVSxDQUFDQyxRQUFRO2dCQUNwQyxNQUFNbUYsU0FBU3RFLEtBQUtkLFVBQVUsQ0FBQ29ELFdBQVc7Z0JBRTFDLElBQUlNLFdBQW1DO29CQUFDelE7aUJBQUk7Z0JBRTVDLElBQUl1WSxnQkFBd0MsQ0FBQztnQkFDN0MsSUFBSUMsYUFBYTtnQkFFakIsSUFBSSxJQUFJdlIsSUFBSSxHQUFHQSxJQUFJa0wsT0FBT3JYLE1BQU0sRUFBRSxFQUFFbU0sRUFBRztvQkFDbkMsSUFBSWpILE1BQU15USxRQUFRLENBQUNBLFNBQVMzVixNQUFNLEdBQUMsRUFBRTtvQkFFckMyVixRQUFRLENBQUNBLFNBQVMzVixNQUFNLEdBQUMsRUFBRSxHQUFHa0YsSUFBSTBOLEtBQUssQ0FBQyxHQUFHeUUsTUFBTSxDQUFDbEwsRUFBRSxDQUFDeUYsR0FBRyxHQUFHOEw7b0JBRTNELElBQUk5QyxJQUFJclcsU0FBU0MsYUFBYSxDQUFDO29CQUUvQixNQUFNbVosYUFBYXRHLE1BQU0sQ0FBQ2xMLEVBQUUsQ0FBQ3RMLEtBQUs7b0JBQ2xDLElBQUksQ0FBRzhjLENBQUFBLGNBQWNGLGFBQVksR0FDN0JBLGFBQWEsQ0FBQ0UsV0FBVyxHQUFHeFIsSUFBRTtvQkFFbEN5TyxFQUFFL1IsU0FBUyxDQUFDN0QsR0FBRyxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRXlZLGFBQWEsQ0FBQ0UsV0FBVyxDQUFDLENBQUMsR0FBRyxTQUFTO29CQUN6Ri9DLEVBQUV6SCxXQUFXLEdBQUdrRSxNQUFNLENBQUNsTCxFQUFFLENBQUN0TCxLQUFLO29CQUMvQjhVLFNBQVN0VyxJQUFJLENBQUV1YixJQUFLLFdBQVc7b0JBRS9CakYsU0FBU3RXLElBQUksQ0FBRTZGLElBQUkwTixLQUFLLENBQUN5RSxNQUFNLENBQUNsTCxFQUFFLENBQUNnSixHQUFHLEdBQUd1STtvQkFDekNBLGFBQWFyRyxNQUFNLENBQUNsTCxFQUFFLENBQUNnSixHQUFHO2dCQUM5QjtnQkFFQXBDLEtBQUs5SixlQUFlLElBQUswTTtnQkFFekIsTUFBTWlJLGVBQWUzZSxPQUFPNGUsSUFBSSxDQUFDSjtnQkFDakMsSUFBSSxJQUFJdFIsSUFBSSxHQUFHQSxJQUFJeVIsYUFBYTVkLE1BQU0sRUFBRSxFQUFFbU0sRUFBRztvQkFDekMsTUFBTXVELFFBQVFrTyxZQUFZLENBQUN6UixFQUFFO29CQUM3QixNQUFNeU0sTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDek07b0JBQ2hDeU0sSUFBSTFJLFFBQVEsQ0FBRXVOLGFBQWEsQ0FBQy9OLE1BQU07b0JBQ2xDa0osSUFBSW5KLFFBQVEsQ0FBRSxJQUFJLENBQUMvQixRQUFRLENBQUNnQztnQkFDaEM7Z0JBQ0FxRCxLQUFLalAsZ0JBQWdCLENBQUMsU0FBUzBaLFdBQVksbUJBQW1CO1lBQ2xFLE9BQU87Z0JBQ0h6SyxLQUFLSSxXQUFXLEdBQUczRiw0Q0FBT0EsQ0FBQ1AsT0FBTyxDQUFDa0YsSUFBSSxDQUFDWTtZQUM1QztRQUNKO1FBRUEsWUFBWTtRQUNaLElBQUksQ0FBQzNVLElBQUksQ0FBQzBGLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDcUQ7WUFFekMsSUFBSSxDQUFDL0ksSUFBSSxDQUFDeUssU0FBUyxDQUFDaUgsTUFBTSxDQUFDLGFBQWE7WUFFeEMsTUFBTWlELE9BQU81TCxHQUFHb0YsTUFBTTtZQUV0QndHLEtBQUsvQyxtQkFBbUIsQ0FBQyxTQUFTd04sV0FBVyxhQUFhO1lBQzFEekssS0FBS2hLLGVBQWUsQ0FBQyxtQkFBbUI7WUFFeENvRSxRQUFRMlEsSUFBSSxDQUFDLGNBQWMvSyxLQUFLSSxXQUFXO1lBQzNDLElBQUl2QyxTQUFTLElBQUksRUFBRTtnQkFBQ21DO2FBQUssRUFBRXBVLE9BQU8sR0FBR29VLEtBQUtJLFdBQVc7WUFDckQsSUFBSSxDQUFDM0QsTUFBTTtZQUVYLFFBQVE7WUFDUixJQUFJLENBQUMsVUFBVSxDQUFDb0ksS0FBSztRQUN6QjtRQUVBLElBQUksQ0FBQ2paLE9BQU8sQ0FBQ21GLGdCQUFnQixDQUFDLFlBQVlxRCxDQUFBQTtZQUV0QyxNQUFNTyxTQUFTUCxHQUFHTyxNQUFNO1lBRXhCLElBQUlBLE9BQU83QixPQUFPLEtBQUssTUFDbkI7WUFFSixJQUFJLENBQUNxTyxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsS0FBSyxHQUFHO1FBQ2xDO1FBRUEsSUFBSSxJQUFJLENBQUMwRSxNQUFNLElBQUksS0FBSyxJQUFJLENBQUNDLE1BQU0sSUFBSSxHQUNuQyxJQUFJLENBQUMxRSxNQUFNLENBQUNxRSxVQUFVLENBQUUsSUFBSSxDQUFDaEwsUUFBUSxDQUFDO0lBQzlDO0lBRUFpTCxlQUFlM0YsQ0FBZ0IsRUFBUTtRQUNuQyxJQUFHQSxhQUFhcEMsVUFDWm9DLElBQUlBLEVBQUVzQixTQUFTO1FBRW5CLE9BQU90QixFQUFFRCxJQUFJLElBQUlDO0lBQ3JCO0lBRUE2QixRQUFROUIsSUFBMEIsRUFBRTtRQUNoQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUNBO0lBQ3pCO0lBRUEsUUFBUSxDQUFDQSxJQUEwQjtRQUUvQixJQUFJLFNBQVNBLE1BQ1QsT0FBT0EsS0FBSzZCLEdBQUc7UUFFbkIsTUFBTTBHLE1BQU07ZUFBSXZJLEtBQUtnTCxhQUFhLENBQUVwSSxRQUFRO1NBQUMsQ0FBQ21CLFNBQVMsQ0FBRTlELENBQUFBLElBQUtBLE1BQU1EO1FBQ3BFLE1BQU1zSSxNQUFNO2VBQUl0SSxLQUFLZ0wsYUFBYSxDQUFFQSxhQUFhLENBQUVwSSxRQUFRO1NBQUMsQ0FBQ21CLFNBQVMsQ0FBRTFELENBQUFBLElBQUtBLE1BQU1MLEtBQUtnTCxhQUFhO1FBRXJHLE9BQU87WUFBQzFDO1lBQUtDO1NBQUk7SUFDckI7SUFFQSxNQUFNLENBQTJCO0lBQ2pDLElBQUlyRCxRQUFRO1FBQUUsT0FBTyxJQUFJLENBQUMsTUFBTTtJQUFFO0lBRWxDK0YsT0FBT0MsTUFBYyxFQUFFQyxNQUFjLEVBQUU7UUFFbkMsTUFBTUMsV0FBVzVaLFNBQVNDLGFBQWEsQ0FBQztRQUN4QzJaLFNBQVNwWixNQUFNLENBQUVSLFNBQVNDLGFBQWEsQ0FBQztRQUV4QyxNQUFNNFosV0FBVyxJQUFJLENBQUN6ZixPQUFPLENBQUM4RyxhQUFhLENBQUM7UUFDNUMyWSxTQUFTblYsZUFBZTtRQUV4QixNQUFNZ1AsUUFBUSxJQUFJLENBQUMsTUFBTTtRQUN6QkEsTUFBTWhQLGVBQWU7UUFFckJtVixTQUFTclosTUFBTSxDQUFFUixTQUFTQyxhQUFhLENBQUM7UUFFeEMsSUFBSSxJQUFJOFcsTUFBTSxHQUFHQSxNQUFPNEMsUUFBUyxFQUFFNUMsSUFBSztZQUNwQyxNQUFNK0MsS0FBSzlaLFNBQVNDLGFBQWEsQ0FBQztZQUNsQzZaLEdBQUdsTCxXQUFXLEdBQUc0QixPQUFPQyxZQUFZLENBQUMsS0FBS3NHO1lBQzFDNkMsU0FBU3BaLE1BQU0sQ0FBQ3NaO1lBRWhCRCxTQUFTclosTUFBTSxDQUFFUixTQUFTQyxhQUFhLENBQUM7UUFDNUM7UUFDQXlULE1BQU1sVCxNQUFNLENBQUNvWjtRQUViLElBQUksSUFBSTlDLE1BQU0sR0FBR0EsTUFBTTRDLFFBQVEsRUFBRTVDLElBQUs7WUFDbEMsTUFBTWlELFdBQVcvWixTQUFTQyxhQUFhLENBQUM7WUFDeEMsTUFBTTZaLEtBQUs5WixTQUFTQyxhQUFhLENBQUM7WUFDbEM2WixHQUFHbEwsV0FBVyxHQUFHLENBQUMsRUFBRWtJLE1BQUksRUFBRSxDQUFDO1lBQzNCaUQsU0FBU3ZaLE1BQU0sQ0FBQ3NaO1lBRWhCLElBQUksSUFBSS9DLE1BQU0sR0FBR0EsTUFBTzRDLFFBQVMsRUFBRTVDLElBQUs7Z0JBQ3BDLE1BQU12SSxPQUFPeE8sU0FBU0MsYUFBYSxDQUFDO2dCQUNwQywwQ0FBMEM7Z0JBQzFDdU8sS0FBS3BGLE1BQU0sR0FBR0gsNENBQU9BLENBQUNQLE9BQU87Z0JBQzdCcVIsU0FBU3ZaLE1BQU0sQ0FBRWdPO1lBQ3JCO1lBQ0FrRixNQUFNbFQsTUFBTSxDQUFDdVo7UUFDakI7SUFDSjtJQUVBQyxXQUFXakQsR0FBa0IsRUFBRWtELElBQVksRUFBRTtRQUN6QyxJQUFJLE9BQU9sRCxRQUFRLFVBQ2ZBLE1BQU0sSUFBSSxDQUFDbUQsT0FBTyxDQUFDbkQsSUFBSSxDQUFDLEVBQUU7UUFFOUIsTUFBTW9ELE9BQU8sSUFBSSxDQUFDL2YsT0FBTyxDQUFDOEcsYUFBYSxDQUFDLFlBQWFrUSxRQUFRLENBQUMyRixJQUFJO1FBQ2xFb0QsS0FBS3JlLEtBQUssQ0FBQ3lJLFdBQVcsQ0FBQyxTQUFTMFY7UUFDaENFLEtBQUtyZSxLQUFLLENBQUN5SSxXQUFXLENBQUMsY0FBYztJQUN6QztJQUVBLFNBQVMsQ0FBQ21WLE1BQWMsRUFBRUMsTUFBYztRQUVwQyxNQUFNUyxRQUFRcGEsU0FBU0MsYUFBYSxDQUFDO1FBQ3JDLE1BQU15VCxRQUFTMVQsU0FBU0MsYUFBYSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUd5VDtRQUVkLE1BQU0yRyxZQUFZLElBQUlDLGVBQWdCO1lBQ2xDLElBQUksQ0FBQ3pnQixJQUFJLENBQUNpVCxhQUFhLENBQUUsSUFBSWhGLFlBQVk7UUFDN0M7UUFDQXVTLFVBQVV2VCxPQUFPLENBQUUsSUFBSSxDQUFDak4sSUFBSTtRQUU1QixJQUFJLENBQUMsTUFBTSxDQUFDcUcsWUFBWSxDQUFDLFlBQVk7UUFFckNrYSxNQUFNNVosTUFBTSxDQUFFUixTQUFTQyxhQUFhLENBQUM7UUFDckNtYSxNQUFNNVosTUFBTSxDQUFDa1Q7UUFDYixJQUFJLENBQUN0WixPQUFPLENBQUNvRyxNQUFNLENBQUM0WjtRQUVwQixJQUFJLENBQUNYLE1BQU0sQ0FBQ0MsUUFBUUM7SUFDeEI7SUFFQXhRLFNBQVNvUixJQUF5QyxFQUFFQyxLQUEwQ0QsSUFBSSxFQUFZO1FBRTFHLGtCQUFrQjtRQUNsQixJQUFJQSxnQkFBZ0JFLHNCQUNoQixPQUFPLElBQUksQ0FBQ3RSLFFBQVEsQ0FBRSxJQUFJLENBQUNtSCxPQUFPLENBQUNpSyxPQUFPQztRQUM5QyxJQUFJQSxjQUFjQyxzQkFDZCxPQUFPLElBQUksQ0FBQ3RSLFFBQVEsQ0FBRW9SLE1BQU0sSUFBSSxDQUFDakssT0FBTyxDQUFDa0s7UUFFN0MsSUFBSSxPQUFPRCxTQUFTLFVBQVU7WUFDMUIsSUFBSUEsS0FBSy9nQixRQUFRLENBQUMsTUFDZCxDQUFDK2dCLE1BQU1DLEdBQUcsR0FBR0QsS0FBS3pFLEtBQUssQ0FBQztZQUU1QnlFLE9BQU8sSUFBSSxDQUFDTCxPQUFPLENBQUNLLE1BQU07WUFDMUIsT0FBTyxJQUFJLENBQUNwUixRQUFRLENBQUVvUixNQUFNQztRQUNoQztRQUNBLElBQUksT0FBT0EsT0FBTyxVQUNkLE9BQU8sSUFBSSxDQUFDclIsUUFBUSxDQUFFb1IsTUFBTSxJQUFJLENBQUNMLE9BQU8sQ0FBQ00sSUFBSTtRQUVqRCxZQUFZO1FBRVosSUFBSUUsVUFBVUgsSUFBSSxDQUFDLEVBQUUsSUFBSTtRQUN6QixJQUFJSSxVQUFVSixJQUFJLENBQUMsRUFBRSxJQUFJO1FBRXpCLElBQUlLLFVBQVVMLElBQUksQ0FBQyxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUNoRyxNQUFNLEdBQUdpRyxFQUFFLENBQUMsRUFBRTtRQUNqRCxJQUFJSyxVQUFVTixJQUFJLENBQUMsRUFBRSxLQUFLLElBQUksSUFBSSxDQUFDL0YsTUFBTSxHQUFHZ0csRUFBRSxDQUFDLEVBQUU7UUFFakQsSUFBSUksVUFBVUYsU0FDVixDQUFDQSxTQUFTRSxRQUFRLEdBQUc7WUFBQ0E7WUFBU0Y7U0FBUTtRQUMzQyxJQUFJRyxVQUFVRixTQUNWLENBQUNBLFNBQVNFLFFBQVEsR0FBRztZQUFDQTtZQUFTRjtTQUFRO1FBRTNDLE1BQU1qTSxRQUFRLElBQUluVCxNQUFhLENBQUNxZixVQUFVRixVQUFVLEtBQU1HLENBQUFBLFVBQVVGLFVBQVU7UUFFOUUsSUFBSWhLLFNBQVM7UUFDYixJQUFJLElBQUkvSSxJQUFJOFMsU0FBUzlTLEtBQUtnVCxTQUFTLEVBQUVoVCxFQUNqQyxJQUFJLElBQUlrSCxJQUFJNkwsU0FBUzdMLEtBQUsrTCxTQUFTLEVBQUUvTCxFQUNqQ0osS0FBSyxDQUFDaUMsU0FBUyxHQUFHLElBQUksQ0FBQytDLEtBQUssQ0FBQ3RDLFFBQVEsQ0FBQ3hKLEVBQUUsQ0FBQ3dKLFFBQVEsQ0FBQ3RDLEVBQUU7UUFFNUQsT0FBTyxJQUFJekMsU0FBUyxJQUFJLEVBQUVxQztJQUM5QjtJQUVBd0wsUUFBUTdGLEdBQVcsRUFBRXlHLGVBQWUsSUFBSSxFQUFvQjtRQUV4RHpHLE1BQU1BLElBQUlGLFVBQVUsQ0FBQyxLQUFLO1FBRTFCLElBQUk0RyxNQUFNMUcsSUFBSTJHLE1BQU0sQ0FBQztRQUVyQixJQUFJRCxRQUFRLEdBQ1IsT0FBT0QsZUFBZSxJQUFJLENBQUNaLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTdGLElBQUksQ0FBQyxJQUFJO1lBQUMsSUFBSSxDQUFDRyxNQUFNO1lBQUUsQ0FBQ0g7U0FBSTtRQUN2RSxJQUFJMEcsUUFBUSxDQUFDLEdBQ1QsT0FBTyxJQUFJLENBQUNiLE9BQU8sQ0FBQyxDQUFDLEVBQUU3RixJQUFJLEVBQUV5RyxlQUFlLElBQUksQ0FBQ3ZHLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFFakUsTUFBTXVDLE1BQU0sQ0FBQ3pDLElBQUloRyxLQUFLLENBQUMwTTtRQUV2QixJQUFJaEUsTUFBTTtRQUNWLElBQUksSUFBSW5QLElBQUksR0FBR0EsSUFBSW1ULEtBQUssRUFBRW5ULEVBQUc7WUFDekJtUCxPQUFPO1lBQ1BBLE9BQU8xQyxJQUFJNEcsVUFBVSxDQUFDclQsS0FBSztRQUMvQjtRQUNBLEVBQUVtUDtRQUVGLE9BQU87WUFBQ0Q7WUFBS0M7U0FBSTtJQUNyQjtJQUNBekMsUUFBUXdDLEdBQVcsRUFBRUMsR0FBVyxFQUFFO1FBRTlCLElBQUltRSxVQUFVO1FBQ2QsR0FBRztZQUVDLElBQUk1ZCxLQUFLLENBQUN5WixNQUFJLEtBQUs7WUFFbkJtRSxVQUFVMUssT0FBT0MsWUFBWSxDQUFDLEtBQUduVCxNQUFNNGQ7WUFFdkNuRSxPQUFPelosS0FBSztZQUNaeVosT0FBTyxJQUFJLDRCQUE0QjtRQUUzQyxRQUFTQSxNQUFNLEVBQUk7UUFFbkIsT0FBTyxDQUFDLEVBQUVtRSxRQUFRLEVBQUVwRSxJQUFJLENBQUM7SUFDN0I7SUFDQSxJQUFJdkMsU0FBUztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQ25ELFFBQVEsQ0FBQzNWLE1BQU0sR0FBRztJQUN6QztJQUNBLElBQUkrWSxTQUFTO1FBQ1QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDMkcsaUJBQWlCLENBQUUvSixRQUFRLENBQUMzVixNQUFNLEdBQUc7SUFDNUQ7SUFFQSxXQUFXLEdBQVksTUFBTTtJQUM3QndQLFNBQVM7UUFDTCxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssTUFDckI7UUFDSixJQUFJLENBQUMsV0FBVyxHQUFHO1FBRW5CL0gsT0FBT2tZLHFCQUFxQixDQUFFO1lBRTFCLE1BQU0xTSxRQUFRO21CQUFJLElBQUksQ0FBQ3RVLE9BQU8sQ0FBQ2dILGdCQUFnQixDQUFPO2FBQU0sQ0FBQzJSLE1BQU0sQ0FBRXBLLENBQUFBLElBQUtBLEVBQUUrRSxVQUFVLFlBQVl2QixvREFBT0E7WUFFekcsS0FBSSxJQUFJcUMsUUFBUUUsTUFDWixhQUFhO1lBQ2JGLEtBQUtkLFVBQVUsQ0FBQ3FELFVBQVU7WUFFOUIsS0FBSSxJQUFJdkMsUUFBUUUsTUFBTztnQkFFbkIsSUFBSUYsS0FBS2QsVUFBVSxZQUFZdkIsb0RBQU9BLEVBQUc7b0JBQ3JDLElBQUk3UCxRQUFRa1MsS0FBS2QsVUFBVSxDQUFDMUUsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTO29CQUVqRCxvQkFBb0I7b0JBQ3BCLElBQUlsRyxPQUFlLE9BQU94RztvQkFDMUIsSUFBSUEsaUJBQWlCMlEsTUFDakJuSyxPQUFLO29CQUVUMEwsS0FBS0ksV0FBVyxHQUFHLEtBQWN4RixNQUFNLENBQUM5TTtvQkFDeENrUyxLQUFLdE8sWUFBWSxDQUFDLGFBQWE0QztnQkFDbkM7WUFDSjtZQUVBLElBQUksQ0FBQ2pKLElBQUksQ0FBQ2lULGFBQWEsQ0FBRSxJQUFJaEYsWUFBWTtZQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHO1FBQ3ZCO0lBQ0o7SUFFQSxJQUFJa0ksT0FBTztRQUNQLE9BQU8sSUFBSSxDQUFDN1QsS0FBSyxDQUFDa2MsRUFBRSxLQUFLO0lBQzdCO0FBQ0o7QUFFTyxNQUFNaE0saUJBQWlCdkI7SUFFMUIsTUFBTSxDQUFZO0lBQ2xCLE1BQU0sQ0FBUztJQUNmNU8sWUFBWUwsS0FBZ0IsRUFBRTZTLEtBQWEsQ0FBRTtRQUN6QyxLQUFLO1FBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUMsTUFBTSxHQUFHN1M7SUFDbEI7SUFFQSxJQUFJdVAsYUFBYTtRQUViLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQzNQLE1BQU0sS0FBSyxHQUN2QjtRQUVKLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQ0EsTUFBTSxLQUFLLEdBQ3ZCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQzZZLE9BQU8sSUFBSyxJQUFJLENBQUMsTUFBTSxDQUFDaEUsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUVyRSxJQUFJNUIsUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDMVMsR0FBRyxDQUFFeVMsQ0FBQUEsSUFBSyxJQUFJLENBQUMsTUFBTSxDQUFDNkIsT0FBTyxDQUFDN0IsSUFBSzRNLElBQUksQ0FBRSxDQUFDN0osR0FBRUc7WUFDaEUsSUFBSUgsQ0FBQyxDQUFDLEVBQUUsS0FBS0csQ0FBQyxDQUFDLEVBQUUsRUFDYixPQUFPSCxDQUFDLENBQUMsRUFBRSxHQUFHRyxDQUFDLENBQUMsRUFBRTtZQUN0QixPQUFPSCxDQUFDLENBQUMsRUFBRSxHQUFHRyxDQUFDLENBQUMsRUFBRTtRQUN0QjtRQUVBLElBQUkySixNQUFNNU0sS0FBSyxDQUFDLEVBQUU7UUFDbEIsSUFBSTZNLE1BQU03TSxLQUFLLENBQUNBLE1BQU1qVCxNQUFNLEdBQUcsRUFBRTtRQUVqQyxJQUFJK2YsVUFBVUQsR0FBRyxDQUFDLEVBQUUsR0FBR0QsR0FBRyxDQUFDLEVBQUUsR0FBRztRQUVoQyxJQUFJLElBQUkxVCxJQUFJLEdBQUdBLElBQUk4RyxNQUFNalQsTUFBTSxFQUFFLEVBQUVtTSxFQUMvQixJQUFJOEcsS0FBSyxDQUFDOUcsRUFBRSxDQUFDLEVBQUUsS0FBS2dLLEtBQUs2SixLQUFLLENBQUM3VCxJQUFFNFQsV0FBU0YsR0FBRyxDQUFDLEVBQUUsSUFBSTVNLEtBQUssQ0FBQzlHLEVBQUUsQ0FBQyxFQUFFLEtBQUssSUFBRzRULFVBQVVGLEdBQUcsQ0FBQyxFQUFFLEVBQ25GO1FBRVIsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQ2hILE9BQU8sSUFBSWdILEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUNoSCxPQUFPLElBQUlpSCxLQUFLLENBQUM7SUFDMUU7SUFFQSxJQUFJN00sUUFBZ0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsTUFBTTtJQUN0QjtJQUNBLElBQUk3UyxRQUFtQjtRQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNO0lBQ3RCO0lBRUE4USxhQUFhblEsSUFBb0QsRUFBRztRQUNoRSxJQUFJa2YsSUFBSXBOLDJDQUFNQSxDQUFDYSxhQUFhLENBQUMsSUFBSTtRQUVqQyxJQUFJLE9BQU8zUyxTQUFTLFlBQVk7WUFFNUIsSUFBSW1mLFdBQVdELEVBQUV6TSxXQUFXLENBQUMsY0FBY3pTO1lBRTNDLElBQUksQ0FBQzRNLE1BQU0sQ0FBQztnQkFBQ0EsUUFBUXVTLFdBQVcsT0FBT25mO1lBQUs7WUFFNUM7UUFDSjtRQUVBLElBQUksQ0FBQzRNLE1BQU0sQ0FBQztZQUFDLENBQUM1TSxLQUFLLEVBQUVrZixFQUFFek0sV0FBVyxDQUFDelMsVUFBVTtRQUFJO0lBQ3JEO0lBRUE0TSxPQUFPLEdBQUdzUyxDQUFrRixFQUFFO1FBRTFGLElBQUlBLEVBQUVqZ0IsTUFBTSxHQUFHLEdBQUk7WUFFZixVQUFVO1lBQ1ZpZ0IsSUFBSWhoQixPQUFPcUQsV0FBVyxDQUFFMmQsRUFBRTFmLEdBQUcsQ0FBRTJNLENBQUFBLElBQUs7b0JBQUNBO29CQUFHO2lCQUFLO1FBRWpELE9BQ0krUyxJQUFJQSxDQUFDLENBQUMsRUFBRTtRQUVaLElBQUksT0FBT0EsTUFBTSxZQUNiQSxJQUFJO1lBQUMsVUFBVUE7UUFBQztRQUVwQixJQUFHLE9BQU9BLE1BQU0sVUFDWkEsSUFBSTtZQUFDLENBQUNBLEVBQUUsRUFBRTtRQUFJO1FBRWxCLElBQUksQ0FBR0EsQ0FBQUEsYUFBYXBOLDJDQUFLLEdBQ3JCb04sSUFBSSxJQUFJcE4sMkNBQU1BLENBQUNvTjtRQUVuQkEsRUFBRW5OLE9BQU8sQ0FBQyxJQUFJO1FBRWQsT0FBTyxJQUFJO0lBQ2Y7SUFFQSxJQUFJblUsVUFBOEI7UUFDOUIsSUFBSUEsVUFBVSxJQUFJbUIsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDRSxNQUFNO1FBQzFDLElBQUksSUFBSW1NLElBQUksR0FBR0EsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDbk0sTUFBTSxFQUFFLEVBQUVtTSxFQUNyQ3hOLE9BQU8sQ0FBQ3dOLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDQSxFQUFFLENBQUM4RixVQUFVO1FBRTFDLE9BQU90VDtJQUNYO0lBRUEwZSxlQUFlO1FBQ1gsS0FBSSxJQUFJdEssUUFBUSxJQUFJLENBQUMsTUFBTSxDQUN2QkEsS0FBS3lKLFNBQVMsR0FBRztJQUN6QjtJQUVBYyxnQkFBZ0I7UUFFWixLQUFJLElBQUl2SyxRQUFRLElBQUksQ0FBQyxNQUFNLENBQUU7WUFDekJBLEtBQUtkLFVBQVUsR0FBRzdTO1lBQ2xCMlQsS0FBS0ksV0FBVyxHQUFHO1lBQ25CSixLQUFLak4sZUFBZSxDQUFDO1FBQ3pCO1FBRUEsSUFBSSxDQUFDLE1BQU0sQ0FBQzBKLE1BQU07SUFDdEI7SUFFQSxJQUFJN1EsUUFBUUEsT0FBb0QsRUFBRTtRQUU5RCxJQUFJbUIsTUFBTUMsT0FBTyxDQUFDcEIsVUFBVztZQUN6QixJQUFJLElBQUl3TixJQUFJLEdBQUdBLElBQUl4TixRQUFRcUIsTUFBTSxFQUFFLEVBQUVtTSxFQUNqQyxJQUFJeUUsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUFDLElBQUksQ0FBQyxNQUFNLENBQUN6RSxFQUFFO2FBQUMsRUFBR3hOLE9BQU8sR0FBR0EsT0FBTyxDQUFDd04sRUFBRTtZQUVyRTtRQUNKO1FBRUEsSUFBSSxPQUFPeE4sWUFBWSxVQUFVO1lBRTdCLElBQUlnWSxNQUFNaFk7WUFDVkEsVUFBVXNiLFdBQVd0YjtZQUNyQixJQUFJLE9BQU9BLFlBQVksWUFBWWdZLEdBQUcsQ0FBQ0EsSUFBSTNXLE1BQU0sR0FBQyxFQUFFLEtBQUssS0FBSztnQkFDMUQsSUFBSWlnQixJQUFJcE4sMkNBQU1BLENBQUNhLGFBQWEsQ0FBQyxJQUFJO2dCQUNqQyxJQUFJLENBQUV1TSxFQUFFeE0sV0FBVyxDQUFDLGFBQWF3TSxFQUFFek0sV0FBVyxDQUFDLGNBQWNoRyw0Q0FBT0EsQ0FBQ1AsT0FBTyxFQUN4RSxJQUFJLENBQUNVLE1BQU0sQ0FBQ0gsNENBQU9BLENBQUNhLFFBQVE7WUFDcEM7WUFDQSxJQUFJLE9BQU8xUCxZQUFZLFlBQVlnWSxHQUFHLENBQUNBLElBQUkzVyxNQUFNLEdBQUMsRUFBRSxLQUFLLEtBQUs7Z0JBQzFELElBQUlpZ0IsSUFBSXBOLDJDQUFNQSxDQUFDYSxhQUFhLENBQUMsSUFBSTtnQkFDakMsSUFBSSxDQUFFdU0sRUFBRXhNLFdBQVcsQ0FBQyxhQUFhd00sRUFBRXpNLFdBQVcsQ0FBQyxjQUFjaEcsNENBQU9BLENBQUNQLE9BQU8sRUFDeEUsSUFBSSxDQUFDVSxNQUFNLENBQUNILDRDQUFPQSxDQUFDWSxLQUFLO1lBQ2pDO1FBQ0o7UUFFQSxJQUFJK1IsVUFBVXhoQixtQkFBbUJxZ0IsdUJBQXVCcmdCLFFBQVFzVCxVQUFVLEdBQ2xCdFQ7UUFFeEQsS0FBSSxJQUFJb1UsUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFFO1lBRXpCLElBQUdwVSxtQkFBbUJxZ0Isd0JBQXdCcmdCLFFBQVFzVCxVQUFVLFlBQVl2QixvREFBT0EsRUFBRztnQkFFbEYsSUFBSTBQLElBQUl6aEIsUUFBUXNULFVBQVU7Z0JBRTFCLE1BQU1rTCxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUN0SSxPQUFPLENBQUU5QjtnQkFDakMsTUFBTW5JLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQ2lLLE9BQU8sQ0FBQ2xXO2dCQUVoQyxNQUFNMGhCLE9BQU87b0JBQUVsRCxHQUFHLENBQUMsRUFBRSxHQUFHdlMsR0FBRyxDQUFDLEVBQUU7b0JBQUV1UyxHQUFHLENBQUMsRUFBRSxHQUFHdlMsR0FBRyxDQUFDLEVBQUU7aUJBQUM7Z0JBRWhEdVYsVUFBVUMsRUFBRTlNLFVBQVUsQ0FBRSxJQUFJLENBQUMsTUFBTSxLQUFLK007WUFDNUM7WUFFQXROLEtBQUtkLFVBQVUsR0FBR2tPO1lBRWxCLElBQUl0ZixRQUFRc2Y7WUFDWixJQUFJQSxtQkFBbUJ6UCxvREFBT0EsRUFBRTtnQkFFNUIsTUFBTTRQLFVBQVVyaEIsT0FBTzJVLE1BQU0sQ0FBRXBHLDRDQUFPQTtnQkFFdEMscUNBQXFDO2dCQUNyQyxJQUFJdUYsS0FBS3BGLE1BQU0sS0FBS3ZPLGFBQWEyVCxLQUFLcEYsTUFBTSxLQUFLSCw0Q0FBT0EsQ0FBQ1AsT0FBTyxFQUFFO29CQUM5RCxJQUFJVSxTQUFTSCw0Q0FBT0EsQ0FBQ1AsT0FBTztvQkFDNUIsSUFBSXNULFdBQVc7b0JBQ2YsS0FBSSxJQUFJbk4sS0FBSytNLFFBQVE5SyxXQUFXLENBQUU7d0JBQzlCLElBQUk0SyxJQUFJcE4sMkNBQU1BLENBQUNhLGFBQWEsQ0FBQyxJQUFJLENBQUN0VCxLQUFLLENBQUNzTixRQUFRLENBQUMwRixFQUFFdlMsS0FBSyxHQUFJMlMsV0FBVyxDQUFDO3dCQUN4RSxJQUFJN0YsV0FBV3NTLEtBQUtLLFFBQVFFLE9BQU8sQ0FBQ1AsS0FBS0ssUUFBUUUsT0FBTyxDQUFDN1MsU0FDckRBLFNBQVNzUzt3QkFDYixJQUFHQSxNQUFNelMsNENBQU9BLENBQUNlLElBQUksRUFDakIsRUFBRWdTO29CQUNWO29CQUVBLE9BQU87b0JBQ1AsSUFBSTVTLFdBQVdILDRDQUFPQSxDQUFDZSxJQUFJLElBQUlnUyxXQUFXLEdBQ3RDNVMsU0FBU0gsNENBQU9BLENBQUNQLE9BQU87b0JBRTVCLElBQUdVLFdBQVdILDRDQUFPQSxDQUFDUCxPQUFPLEVBQ3pCLGFBQWE7b0JBQ2I4RixLQUFLcEYsTUFBTSxHQUFHQTtnQkFDdEI7Z0JBRUE5TSxRQUFRc2YsUUFBUTVTLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUNwQztZQUVBLElBQUlsRyxPQUFlLE9BQU94RztZQUMxQixJQUFJQSxpQkFBaUIyUSxNQUFPO2dCQUN4Qm5LLE9BQUs7Z0JBQ0wwTCxLQUFLcEYsTUFBTSxHQUFHSCw0Q0FBT0EsQ0FBQ2UsSUFBSTtZQUM5QjtZQUVBLGFBQWE7WUFDYndFLEtBQUtJLFdBQVcsR0FBR0osS0FBS3BGLE1BQU0sQ0FBQzlNO1lBRS9CLElBQUlrUyxLQUFLcEYsTUFBTSxLQUFLSCw0Q0FBT0EsQ0FBQ2UsSUFBSSxFQUM1QmxILE9BQU87WUFDWCxJQUFJMEwsS0FBS3BGLE1BQU0sS0FBS0gsNENBQU9BLENBQUNhLFFBQVEsRUFDaENoSCxPQUFPO1lBQ1gsSUFBSTBMLEtBQUtwRixNQUFNLEtBQUtILDRDQUFPQSxDQUFDWSxLQUFLLElBQUkyRSxLQUFLcEYsTUFBTSxLQUFLSCw0Q0FBT0EsQ0FBQ2MsTUFBTSxFQUMvRGpILE9BQU87WUFFWDBMLEtBQUt0TyxZQUFZLENBQUMsYUFBYTRDO1FBQ25DO1FBRUEsSUFBSSxDQUFDLE1BQU0sQ0FBQ21JLE1BQU07SUFDdEI7SUFFQWlSLE1BQU01RCxRQUFpQixJQUFJLEVBQUU7UUFDekIsS0FBSSxJQUFJOUosUUFBUSxJQUFJLENBQUMsTUFBTSxDQUN2QkEsS0FBSzhKLEtBQUssR0FBR0E7UUFFakIsT0FBTyxJQUFJO0lBQ2Y7SUFFQSxJQUFJN2MsU0FBUztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQ0EsTUFBTTtJQUM3QjtJQUVBc0UsSUFBSSxHQUFHMk8sS0FBYSxFQUFFO1FBQ2xCLEtBQUksSUFBSUYsUUFBUUUsTUFDWixJQUFJLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQ2xWLFFBQVEsQ0FBQ2dWLE9BQ3ZCLE9BQU87UUFDZixPQUFPO0lBQ1g7SUFFQTNDLE9BQU8sR0FBRzZDLEtBQWEsRUFBRTtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUNxRSxNQUFNLENBQUV0RSxDQUFBQSxJQUFLLENBQUVDLE1BQU1sVixRQUFRLENBQUNpVjtRQUN4RCxJQUFJLENBQUMzQixhQUFhLENBQUUsSUFBSWhGLFlBQVk7SUFDeEM7SUFFQXFNLFdBQVcsR0FBR3pGLEtBQXdCLEVBQUU7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQ2pULE1BQU0sR0FBRztRQUNyQixJQUFJLENBQUNnRixHQUFHLElBQUlpTztJQUNoQjtJQUVBak8sSUFBSSxHQUFHaU8sS0FBd0IsRUFBRTtRQUU3QixJQUFJQSxLQUFLLENBQUMsRUFBRSxZQUFZckMsVUFDcEJxQyxRQUFRQSxLQUFLLENBQUMsRUFBRSxDQUFDQSxLQUFLO1FBRTFCLElBQUksQ0FBQyxNQUFNLENBQUM1VCxJQUFJLElBQUk0VDtRQUVwQixJQUFJLENBQUM1QixhQUFhLENBQUUsSUFBSWhGLFlBQVk7SUFDeEM7SUFFQSxJQUFJaUksWUFBWTtRQUNaLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQ3RVLE1BQU0sR0FBRyxHQUNyQixNQUFNLElBQUliLE1BQU07UUFDcEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7SUFDekI7SUFFQXlZLFFBQVE7UUFDSixJQUFJLENBQUMsTUFBTSxDQUFDNVgsTUFBTSxHQUFHO1FBRXJCLElBQUksQ0FBQ3FSLGFBQWEsQ0FBRSxJQUFJaEYsWUFBWTtJQUN4QztJQUdBK1EsWUFBWTtRQUVSLElBQUluSyxRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMxUyxHQUFHLENBQUV5UyxDQUFBQTtZQUN6QixNQUFNME4sUUFBUTFOLEVBQUUyTixTQUFTLENBQUM7WUFFMUJELE1BQU16TyxVQUFVLEdBQUdlLEVBQUVmLFVBQVU7WUFDL0J5TyxNQUFNL1MsTUFBTSxHQUFPcUYsRUFBRXJGLE1BQU07WUFDMUIrUyxNQUFjOUwsR0FBRyxHQUFVLElBQUksQ0FBQyxNQUFNLENBQUNDLE9BQU8sQ0FBQzdCO1lBRWhELE9BQU8wTjtRQUNYO1FBRUEsT0FBTyxJQUFJOVAsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFcUM7SUFDckM7QUFDSjtBQUVBLFNBQVM7QUFDaUI7QUFDRjtBQUNrQztBQUNUO0FBQ1M7QUFDYztBQUd4RWhWLGtEQUFJQSxDQUFDb0ksTUFBTSxDQUFDLGNBQWNzSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFyQ1k7QUFDSztBQUNHO0FBRTlDLE1BQU1oUyxVQUFVLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUNqQixDQUFDO0FBRUQsU0FBU2lpQixNQUFNQyxRQUFrQixFQUFFQyxXQUFXLEtBQUs7SUFFL0MsTUFBTTFnQixRQUFReWdCLFNBQVN6Z0IsS0FBSztJQUU1QixNQUFNLENBQUN3UixLQUFJdUQsSUFBSSxHQUFHMEwsU0FBU2xSLFVBQVUsQ0FBRTBLLEtBQUssQ0FBQyxLQUFLOVosR0FBRyxDQUFFMk0sQ0FBQUEsSUFBSzlNLE1BQU1xZSxPQUFPLENBQUN2UixLQUFNLDJCQUEyQjtJQUUzRyxJQUFJbUwsT0FBT2xELEdBQUcsQ0FBQyxFQUFFLEdBQUd2RCxHQUFHLENBQUMsRUFBRSxHQUFHO0lBQzdCLElBQUlvRyxPQUFPN0MsR0FBRyxDQUFDLEVBQUUsR0FBR3ZELEdBQUcsQ0FBQyxFQUFFLEdBQUc7SUFFN0IsSUFBSWpFLFNBQTZCO1FBQzdCcUIsTUFBTTtZQUFFcUo7WUFBTUw7U0FBTTtJQUN4QjtJQUVBLElBQUk4SSxVQUFXO1FBQ1huVCxPQUFPdUIsYUFBYSxHQUFHO1FBQ3ZCdkIsT0FBT3NCLFlBQVksR0FBSTtJQUMzQjtJQUVBN08sTUFBTXNOLFFBQVEsQ0FBQ2tFLEtBQUtqRSxNQUFNLENBQUNBO0FBQy9CO0FBRUEsU0FBU29ULFFBQVFGLFFBQWtCO0lBRS9CQSxTQUFTbFQsTUFBTSxDQUFDO1FBQ1pxQixNQUFNO1lBQUU7WUFBRztTQUFHO0lBQ2xCLElBQUksYUFBYTtBQUNyQjtBQUVBLFNBQVNnUyxRQUFRL04sS0FBZSxFQUFFZ08sWUFBb0I7SUFFbEQsS0FBSSxJQUFJbE8sUUFBUUUsTUFBTUEsS0FBSyxDQUFFO1FBRXpCLE1BQU10RixTQUFTa0YsMkNBQU1BLENBQUNhLGFBQWEsQ0FBQ1g7UUFDcEMsSUFBSW1PLGFBQWtDLENBQUM7UUFDdkMsSUFBSSxDQUFFdlQsT0FBTzhGLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBRTlGLE9BQU84RixXQUFXLENBQUMsZUFDNUR5TixXQUFXQyxVQUFVLEdBQUc7UUFFNUJELFdBQVduUyxNQUFNLEdBQUcsQ0FBRXBCLENBQUFBLE9BQU82RixXQUFXLENBQUMsYUFBYSxLQUFLeU47UUFFM0QsSUFBSUMsV0FBV25TLE1BQU0sR0FBRyxHQUNwQm1TLFdBQVduUyxNQUFNLEdBQUc7UUFFeEJrRSxNQUFNdEYsTUFBTSxDQUFDdVQ7SUFDakI7QUFDSjtBQUVBLFNBQVMxUyxVQUFVeUUsS0FBZSxFQUFFbU8sVUFBa0I7SUFFbEQsSUFBSTVTLFlBQVlwUDtJQUNoQixLQUFJLElBQUkyVCxRQUFRRSxNQUFNQSxLQUFLLENBQUU7UUFDekIsTUFBTVosT0FBTyxDQUFFUSxDQUFBQSwyQ0FBTUEsQ0FBQ2EsYUFBYSxDQUFDWCxNQUFNUyxXQUFXLENBQUMsZ0JBQWdCO1FBQ3RFLElBQUloRixjQUFjcFAsYUFBYWlULE9BQU83RCxXQUNsQ0EsWUFBWTZEO0lBQ3BCO0lBRUE3RCxjQUFjO0lBQ2RBLGFBQWE0UztJQUNiLElBQUc1UyxZQUFZLEdBQ1hBLFlBQVk7SUFFaEJ5RSxNQUFNdEYsTUFBTSxDQUFDO1FBQUNhO0lBQVM7QUFDM0I7QUFFQSxNQUFNNlMsT0FBcUc7SUFDdkcsa0JBQWtCO1FBQ2RDLFFBQVEsU0FBU3JPLEtBQWU7WUFDNUJ6RSxVQUFVeUUsT0FBTyxDQUFDO1FBQ3RCO0lBQ0o7SUFDQSxrQkFBa0I7UUFDZHFPLFFBQVEsU0FBU3JPLEtBQWU7WUFDNUJ6RSxVQUFVeUUsT0FBTyxDQUFDO1FBQ3RCO0lBQ0o7SUFBRSxtQkFBbUI7UUFDakJxTyxRQUFRLFNBQVNyTyxLQUFlO1lBRTVCLElBQUlKLDJDQUFNQSxDQUFDYSxhQUFhLENBQUNULE9BQU9PLFdBQVcsQ0FBQyxjQUFjaEcsNENBQU9BLENBQUNhLFFBQVEsRUFBRztnQkFDekU0RSxNQUFNdEYsTUFBTSxDQUFDSCw0Q0FBT0EsQ0FBQ2MsTUFBTSxHQUFHLE9BQU87Z0JBQ3JDMkUsTUFBTXRGLE1BQU0sQ0FBQztvQkFBQ0EsUUFBUTtnQkFBSTtnQkFDMUI7WUFDSjtZQUNBc0YsTUFBTXRGLE1BQU0sQ0FBQ0gsNENBQU9BLENBQUNhLFFBQVE7UUFDakM7UUFDQWtULFNBQVMsU0FBU3RPLEtBQWU7WUFDN0IsT0FBT0osMkNBQU1BLENBQUNhLGFBQWEsQ0FBQ1QsT0FBT08sV0FBVyxDQUFDLGNBQWNoRyw0Q0FBT0EsQ0FBQ2EsUUFBUTtRQUNqRjtJQUNKO0lBQUUsYUFBYTtRQUNYaVQsUUFBUSxTQUFTck8sS0FBZTtZQUU1QixJQUFJSiwyQ0FBTUEsQ0FBQ2EsYUFBYSxDQUFDVCxPQUFPTyxXQUFXLENBQUMsY0FBY2hHLDRDQUFPQSxDQUFDYyxNQUFNLEVBQUc7Z0JBQ3ZFMkUsTUFBTXRGLE1BQU0sQ0FBQztvQkFBQ0EsUUFBUTtnQkFBSTtnQkFDMUI7WUFDSjtZQUNBc0YsTUFBTXRGLE1BQU0sQ0FBQ0gsNENBQU9BLENBQUNjLE1BQU07UUFDL0I7UUFDQWlULFNBQVMsU0FBU3RPLEtBQWU7WUFDN0IsT0FBT0osMkNBQU1BLENBQUNhLGFBQWEsQ0FBQ1QsT0FBT08sV0FBVyxDQUFDLGNBQWNoRyw0Q0FBT0EsQ0FBQ2MsTUFBTTtRQUMvRTtJQUNKO0lBQ0Esa0JBQWtCO1FBQ2RnVCxRQUFRLFNBQVNyTyxLQUFlO1lBRTVCLElBQUlKLDJDQUFNQSxDQUFDYSxhQUFhLENBQUNULE9BQU9PLFdBQVcsQ0FBQyxjQUFjaEcsNENBQU9BLENBQUNZLEtBQUssRUFBRztnQkFDdEU2RSxNQUFNdEYsTUFBTSxDQUFDO29CQUFDQSxRQUFRO2dCQUFJO2dCQUMxQjtZQUNKO1lBQ0FzRixNQUFNdEYsTUFBTSxDQUFDSCw0Q0FBT0EsQ0FBQ1ksS0FBSztRQUM5QjtRQUNBbVQsU0FBUyxTQUFTdE8sS0FBZTtZQUM3QixPQUFPSiwyQ0FBTUEsQ0FBQ2EsYUFBYSxDQUFDVCxPQUFPTyxXQUFXLENBQUMsY0FBY2hHLDRDQUFPQSxDQUFDWSxLQUFLO1FBQzlFO0lBQ0o7SUFDQSxlQUFlO1FBQ1hrVCxRQUFRLFNBQVNyTyxLQUFlO1lBRTVCLElBQUlKLDJDQUFNQSxDQUFDYSxhQUFhLENBQUNULE9BQU9PLFdBQVcsQ0FBQyxjQUFjaEcsNENBQU9BLENBQUNlLElBQUksRUFBRztnQkFDckUwRSxNQUFNdEYsTUFBTSxDQUFDSCw0Q0FBT0EsQ0FBQ2MsTUFBTSxHQUFHLE9BQU87Z0JBQ3JDMkUsTUFBTXRGLE1BQU0sQ0FBQztvQkFBQ0EsUUFBUTtnQkFBSTtnQkFDMUI7WUFDSjtZQUNBc0YsTUFBTXRGLE1BQU0sQ0FBQ0gsNENBQU9BLENBQUNlLElBQUk7UUFDN0I7UUFDQWdULFNBQVMsU0FBU3RPLEtBQWU7WUFDN0IsT0FBT0osMkNBQU1BLENBQUNhLGFBQWEsQ0FBQ1QsT0FBT08sV0FBVyxDQUFDLGNBQWNoRyw0Q0FBT0EsQ0FBQ2UsSUFBSTtRQUM3RTtJQUNKO0lBQ0EsY0FBYztRQUNWK1MsUUFBUSxTQUFTck8sS0FBZTtZQUM1QitOLFFBQVEvTixPQUFPLENBQUM7UUFDcEI7SUFDSjtJQUNBLGNBQWM7UUFDVnFPLFFBQVEsU0FBU3JPLEtBQWU7WUFDNUIrTixRQUFRL04sT0FBTyxDQUFDO1FBQ3BCO0lBQ0o7SUFDQSxVQUFVO1FBQ05xTyxRQUFRLFNBQVNyTyxLQUFlO1lBQzVCQSxNQUFNdEYsTUFBTSxDQUFDO2dCQUNUZSxZQUFZO2dCQUNaQyxlQUFlO2dCQUNmQyxhQUFhO2dCQUNiQyxjQUFjO1lBQ2xCO1FBQ0o7SUFDSjtJQUNBLFdBQVc7UUFDUHlTLFFBQVFQO0lBQ1o7SUFDQSxTQUFTO1FBQ0xPLFFBQVFWO0lBQ1o7SUFDQSxnQkFBZ0I7UUFDWlUsUUFBUSxTQUFTVCxRQUFrQjtZQUUvQixJQUFJVyxXQUFXO1lBRWYsTUFBTXBoQixRQUFReWdCLFNBQVN6Z0IsS0FBSztZQUU1QixLQUFJLElBQUkyUyxRQUFROE4sU0FBUzVOLEtBQUssQ0FDMUIsSUFBSUosMkNBQU1BLENBQUNhLGFBQWEsQ0FBQ1gsTUFBTVUsV0FBVyxDQUFDLFNBQVU7Z0JBQ2pEc04sUUFBUyxJQUFJblEsNENBQVFBLENBQUN4USxPQUFPO29CQUFDMlM7aUJBQUs7Z0JBQ25DeU8sV0FBVztZQUNmO1lBRUosSUFBR0EsVUFDQztZQUVKWixNQUFNQyxVQUFVO1FBQ3BCO1FBQ0FVLFNBQVMsU0FBU1YsUUFBa0I7WUFFaEMsS0FBSSxJQUFJOU4sUUFBUThOLFNBQVM1TixLQUFLLENBQzFCLElBQUlKLDJDQUFNQSxDQUFDYSxhQUFhLENBQUNYLE1BQU1VLFdBQVcsQ0FBQyxTQUN2QyxPQUFPO1lBRWYsT0FBTztRQUNYO0lBQ0o7QUFDSjtBQUVBLE1BQU03VSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JiLENBQUM7QUFFRCxNQUFNNmlCLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeURqQixDQUFDO0FBRU0sTUFBTUMsd0JBQXdCempCLHNEQUFJQSxDQUFDO0lBQ3RDVyxLQUFLNmlCO0FBQ1Q7SUFDSWhoQixhQUFjO1FBQ1YsS0FBSztRQUVMLE1BQU05QixVQUFVNEYsU0FBU0MsYUFBYSxDQUFDO1FBQ3ZDN0YsUUFBUWlNLEdBQUcsR0FBRyxDQUFDLHVDQUF1QyxFQUFFLElBQUksQ0FBQ3hNLElBQUksQ0FBQzZGLFlBQVksQ0FBQyxRQUFRLElBQUksQ0FBQztRQUU1RixJQUFJLENBQUUsSUFBSSxDQUFDN0YsSUFBSSxDQUFDd0gsWUFBWSxDQUFDLFVBQVc7WUFDcEMsSUFBSSxDQUFDakgsT0FBTyxDQUFDb0csTUFBTSxDQUFFcEc7WUFDckI7UUFDSjtRQUVBLE1BQU1xUSxPQUFPekssU0FBU0MsYUFBYSxDQUFDO1FBRXBDd0ssS0FBS2xMLGdCQUFnQixDQUFDLFNBQVMsQ0FBQ3FEO1lBQzVCQSxHQUFHaUssY0FBYztZQUVqQixJQUFJdVEsZUFBZXBkLFNBQVNrQixhQUFhLENBQW1CO1lBQzVELElBQUlrYyxpQkFBaUIsTUFBTztnQkFDeEJBLGVBQWVwZCxTQUFTQyxhQUFhLENBQUM7Z0JBQ3RDbWQsYUFBYWxkLFlBQVksQ0FBQyxRQUFRO2dCQUNsQ2tkLGFBQWF0aEIsS0FBSyxDQUFDeUksV0FBVyxDQUFDLFdBQVc7WUFDOUM7WUFHQTZZLGFBQWF0USxhQUFhLENBQUMsSUFBSWhGLFlBQVk7WUFFM0MsSUFBSXVWLFNBQVM7WUFDYkQsYUFBYTdkLGdCQUFnQixDQUFDLFVBQVU7Z0JBQ3BDOGQsU0FBUztZQUNiLEdBQUc7Z0JBQUM1SSxNQUFNO1lBQUk7WUFFZDJJLGFBQWE3ZCxnQkFBZ0IsQ0FBQyxVQUFVLENBQUNxRDtnQkFDckMsSUFBSXlhLFFBQ0E7Z0JBRUosSUFBSSxDQUFDeGpCLElBQUksQ0FBQ3FHLFlBQVksQ0FBQyxTQUFTa2QsYUFBYTlnQixLQUFLO2dCQUNsRCxJQUFJLENBQUN6QyxJQUFJLENBQUNpVCxhQUFhLENBQUUsSUFBSWhGLFlBQVksU0FBUztvQkFBQ2tSLFNBQVM7Z0JBQUk7WUFFcEUsR0FBRztnQkFBQ3ZFLE1BQU07WUFBSTtZQUVkelUsU0FBU3NkLElBQUksQ0FBQzljLE1BQU0sQ0FBQzRjO1lBQ3JCQSxhQUFhRyxLQUFLO1FBQ3RCO1FBRUEsSUFBSSxDQUFDbmpCLE9BQU8sQ0FBQ29HLE1BQU0sQ0FBRXBHLFNBQVNxUTtJQUNsQztBQUNKO0FBRUEvUSxrREFBSUEsQ0FBQ29JLE1BQU0sQ0FBQyxxQkFBcUJxYjtBQUUxQixNQUFNSyxvQkFBb0I5akIsc0RBQUlBLENBQUM7SUFDbENVO0lBQ0FDO0FBQ0o7SUFFSSxLQUFLLEdBQWdDLENBQUMsRUFBRTtJQUV4Q3FQLGlCQUFpQixHQUFHK1QsU0FBbUIsRUFBRTtRQUNyQyxJQUFJLElBQUlDLFlBQVksSUFBSSxDQUFDLEtBQUssQ0FDMUIsSUFBSSxDQUFFRCxVQUFVamtCLFFBQVEsQ0FBQ2trQixXQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDQSxTQUFTLENBQUNsWixlQUFlLENBQUMsWUFBWTtRQUV6RCxJQUFJLENBQUVpWixVQUFVamtCLFFBQVEsQ0FBQyxjQUNyQixJQUFJLENBQUNZLE9BQU8sQ0FBQzhHLGFBQWEsQ0FBb0IsY0FBZXNELGVBQWUsQ0FBQyxZQUFZO0lBQ2pHO0lBRUF0SSxhQUFjO1FBQ1YsS0FBSztRQUVMLElBQUl5aEIsYUFBYTtZQUNiO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBSTtZQUFNO1lBQUk7WUFBSTtZQUFJO1lBQUk7WUFBSTtZQUFJO1lBQUk7WUFBSTtZQUFJO1lBQUk7WUFBSTtZQUFJO1lBQUk7WUFBSTtZQUFJO1lBQUk7WUFBSTtZQUFJO1lBQUk7WUFBSTtZQUFJO1lBQUk7WUFBSTtZQUFJO1lBQUk7U0FDN0g7UUFFRCxNQUFNQyxPQUFPLElBQUksQ0FBQ3hqQixPQUFPLENBQUNnSCxnQkFBZ0IsQ0FBYztRQUN4RCxLQUFJLElBQUl5YyxPQUFPRCxLQUNYLElBQUksQ0FBQyxLQUFLLENBQUNDLElBQUluZSxZQUFZLENBQUMsUUFBUyxHQUFHbWU7UUFFNUMsTUFBTUMsb0JBQW9CLElBQUksQ0FBQzFqQixPQUFPLENBQUM4RyxhQUFhLENBQW9CO1FBQ3hFLEtBQUksSUFBSW1JLGFBQWFzVSxXQUFZO1lBQzdCLE1BQU1JLFNBQVMsSUFBSUMsT0FBTyxDQUFDLEVBQUUzVSxVQUFVc0UsUUFBUSxHQUFHNVIsT0FBTyxDQUFDLEtBQUssS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUVzTixVQUFVLEVBQUUsQ0FBQztZQUMxRnlVLGtCQUFrQnRkLE1BQU0sQ0FBQ3VkO1FBQzdCO1FBRUEsSUFBSSxDQUFDM2pCLE9BQU8sQ0FBQ21GLGdCQUFnQixDQUFDLFNBQVMsQ0FBQ3FEO1lBRXBDLE1BQU1HLE9BQU9ILEdBQUdPLE1BQU07WUFDdEIsSUFBSUosS0FBS3pCLE9BQU8sS0FBSyxxQkFDakI7WUFFSixNQUFNdEQsSUFBSStFLEtBQUtyRCxZQUFZLENBQUM7WUFDNUIsSUFBSXFELEtBQUtyRCxZQUFZLENBQUMsWUFBWSxPQUFPO2dCQUVyQ29kLElBQUksQ0FBQzllLEVBQUUsQ0FBQytlLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDclEsU0FBUztnQkFDcEMsSUFBSSxDQUFDLE9BQU87Z0JBRVo7WUFDSjtZQUVBLE1BQU1wUSxRQUFTeUcsS0FBSzFCLFlBQVksQ0FBQyxXQUNmMEIsS0FBS3JELFlBQVksQ0FBQyxXQUNsQnFELEtBQUt1QixTQUFTLENBQUNpSCxNQUFNLENBQUM7WUFFeEMsSUFBSW5DLFNBQVMsSUFBSWtGLDJDQUFNQSxDQUFDO2dCQUFDLENBQUN0USxFQUFFLEVBQUUxQjtZQUFNO1lBQ3BDOE0sT0FBT21GLE9BQU8sQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDN0IsU0FBUztZQUNyQyxJQUFJLENBQUMsT0FBTztRQUNoQjtRQUVBb1Isa0JBQWtCdmUsZ0JBQWdCLENBQUMsVUFBVTtZQUV6QyxTQUFTO1lBQ1QsSUFBSTZKLFNBQVMsSUFBSWtGLDJDQUFNQSxDQUFDO2dCQUFDakYsV0FBV3lVLGtCQUFrQnhoQixLQUFLO1lBQUE7WUFDM0Q4TSxPQUFPbUYsT0FBTyxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUM3QixTQUFTO1lBQ3JDLElBQUksQ0FBQyxPQUFPO1FBQ2hCO0lBQ0o7SUFFQSxNQUFNLENBQVk7SUFHbEIsT0FBTztRQUVILElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQ0EsU0FBUyxDQUFDZ0MsS0FBSyxDQUFDalQsTUFBTSxLQUFLLEdBQ3ZDO1FBRUosTUFBTTJOLFNBQVNrRiwyQ0FBTUEsQ0FBQ2EsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUN6QyxTQUFTO1FBRXpELElBQUksSUFBSWxRLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBRTtZQUV4QixJQUFJd2dCLFVBQVU1VCxPQUFPNkYsV0FBVyxDQUFDelMsVUFBVTtZQUMzQyxJQUFHQSxRQUFRc2dCLE1BQ1BFLFVBQVVGLElBQUksQ0FBQ3RnQixLQUEwQixDQUFDd2dCLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDdFEsU0FBUyxLQUFLO1lBRWxGLElBQUksQ0FBQyxLQUFLLENBQUNsUSxLQUFLLENBQUM4SCxTQUFTLENBQUNpSCxNQUFNLENBQUMsV0FBV3lSO1FBQ2pEO1FBRUEsU0FBUztRQUNULE1BQU1jLG9CQUFvQixJQUFJLENBQUMxakIsT0FBTyxDQUFDOEcsYUFBYSxDQUFvQjtRQUN4RTRjLGtCQUFrQnhoQixLQUFLLEdBQUc4TSxPQUFPNkYsV0FBVyxDQUFDO0lBQzdDLGlCQUFpQjtJQUNyQjtJQUVBeEYsT0FBTzVOLEtBQWdCLEVBQUU7UUFFckIsSUFBSSxDQUFDLE1BQU0sR0FBR0E7UUFHZEEsTUFBTTZRLFNBQVMsQ0FBQ25OLGdCQUFnQixDQUFDLFVBQVUsQ0FBQ3FEO1lBQ3hDLElBQUksQ0FBQyxPQUFPO1FBQ2hCO1FBQ0EsSUFBSSxDQUFDLE9BQU87SUFFaEI7QUFFSjtBQUVBbEosa0RBQUlBLENBQUNvSSxNQUFNLENBQUMsZ0JBQWdCMGI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuZDVCLGlFQUFlO0lBQ1g7UUFDSWhoQixNQUFPO1FBQ1B5aEIsT0FBTztRQUNQQyxNQUFPO1FBQ1A5TSxVQUFVO1lBQ047Z0JBQ0k1VSxNQUFNO2dCQUNOMGhCLE1BQU07Z0JBQ045TSxVQUFVO29CQUNOO29CQUNBO2lCQUNIO1lBRUw7WUFDQTtnQkFDSTVVLE1BQU07Z0JBQ04waEIsTUFBTTtnQkFDTjlNLFVBQVU7b0JBQ047b0JBQ0E7aUJBQ0g7WUFDTDtTQUNIO0lBQ0w7SUFDQTtRQUNJNVUsTUFBTztRQUNQeWhCLE9BQU87UUFDUEMsTUFBTztRQUNQOU0sVUFBVTtZQUNOO1lBQ0E7Z0JBQ0k1VSxNQUFNO2dCQUNOMGhCLE1BQU07Z0JBQ045TSxVQUFVO29CQUNOO29CQUNBO29CQUNBO29CQUNBO2lCQUNIO1lBQ0w7WUFDQTtnQkFDSTVVLE1BQU07Z0JBQ04waEIsTUFBTztnQkFDUDlNLFVBQVU7b0JBQ047b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7aUJBQ0g7WUFDTDtZQUFHO2dCQUNDNVUsTUFBTTtnQkFDTjBoQixNQUFNO1lBQ1Y7U0FDSDtJQUNMO0lBQ0E7UUFDSTFoQixNQUFPO1FBQ1B5aEIsT0FBTztRQUNQQyxNQUFPO1FBQ1A5TSxVQUFVO1lBQ047Z0JBQ0k1VSxNQUFNO2dCQUNOMGhCLE1BQU07Z0JBQ045TSxVQUFVO29CQUNOO2lCQUNIO1lBQ0w7U0FDSDtJQUNMO0NBQ0gsRUFBQztBQUVLLE1BQU0rTSxZQUFZO0lBQUM7SUFBYTtDQUFZLENBQUMza0IsUUFBUSxDQUFDOE0sU0FBUzhYLFFBQVEsSUFBSSxxQkFBcUIseUJBQXlCOzs7Ozs7Ozs7Ozs7O0FDeEVyRjtBQUUzQzs7OztBQUlBLEdBRUEsZ0JBQWdCO0FBQ2hCLE1BQU1uSyxPQUFTalUsU0FBU2tCLGFBQWEsQ0FBQztBQUN0QyxNQUFNb2QsU0FBU3RlLFNBQVNrQixhQUFhLENBQUM7QUFFdEMsTUFBTXFkLFNBQVN2ZSxTQUFTb0IsZ0JBQWdCLENBQWM7QUFTdEQsTUFBTW9kLFFBQWM7SUFDaEJyRSxNQUFVbEc7SUFDVndLLE9BQVU7SUFDVjFhLFFBQVU7SUFDVnFOLFVBQVUsRUFBRTtBQUNoQjtBQUNBLElBQUlzTixlQUFlRjtBQUNuQixLQUFJLElBQUlHLFNBQVNKLE9BQVE7SUFDckIsTUFBTUUsUUFBUSxDQUFDRSxNQUFNcmQsT0FBTyxDQUFDK00sS0FBSyxDQUFDO0lBRW5DLE1BQU9vUSxTQUFTQyxhQUFhRCxLQUFLLENBQzlCQyxlQUFlQSxhQUFhM2EsTUFBTTtJQUV0QyxNQUFNaEIsT0FBYTtRQUNmb1gsTUFBTXdFO1FBQ05GO1FBQ0FyTixVQUFVLEVBQUU7UUFDWnJOLFFBQVEyYTtJQUNaO0lBR0FBLGFBQWF0TixRQUFRLENBQUN0VyxJQUFJLENBQUNpSTtJQUUzQjJiLGVBQWUzYjtBQUNuQjtBQUVBLFNBQVM2YixnQkFBZ0JKLEtBQVcsRUFBRUssUUFBZ0I7SUFFbEQsTUFBTXRXLFVBQVVpVyxNQUFNcE4sUUFBUTtJQUU5QixJQUFJLElBQUl4SixJQUFJVyxRQUFROU0sTUFBTSxHQUFHLEdBQUdtTSxLQUFLLEdBQUcsRUFBRUEsRUFDdEMsSUFBSVcsT0FBTyxDQUFDWCxFQUFFLENBQUN1UyxJQUFJLENBQUM1RCxTQUFTLElBQUlzSSxXQUFXLElBQ3hDLE9BQU9ELGdCQUFnQnJXLE9BQU8sQ0FBQ1gsRUFBRSxFQUFFaVgsYUFBYXRXLE9BQU8sQ0FBQ1gsRUFBRTtJQUVsRSxPQUFPO0FBQ1g7QUFFQSxNQUFNa1gsTUFBTTtJQUNSLEVBQUU7SUFDRjtRQUFDO1FBQUs7UUFBTTtRQUFPO0tBQUs7SUFDeEI7UUFBQztRQUFLO1FBQUk7UUFBSTtRQUFJO1FBQUk7UUFBSTtRQUFJO0tBQUk7SUFDbEM7UUFBQztRQUFLO1FBQUk7UUFBSTtRQUFJO1FBQUk7UUFBSTtRQUFJO0tBQUk7Q0FDckM7QUFFRCxTQUFTQyxlQUFlMUksQ0FBTztJQUUzQixJQUFJQSxFQUFFb0ksS0FBSyxJQUFJSyxJQUFJcmpCLE1BQU0sRUFDckIsT0FBTztJQUVYLE1BQU1RLE1BQU1vYSxFQUFFdFMsTUFBTSxDQUFFcU4sUUFBUSxDQUFDNkssT0FBTyxDQUFDNUY7SUFFdkMsTUFBTTJJLE1BQU1GLEdBQUcsQ0FBQ3pJLEVBQUVvSSxLQUFLLENBQUMsQ0FBQ3hpQixJQUFJO0lBRTdCLE9BQU8sQ0FBQyxFQUFFK2lCLElBQUksRUFBRSxDQUFDO0FBQ3JCO0FBRUEsU0FBU0MsVUFBVUMsS0FBYTtJQUU1QixNQUFNQyxPQUFPbmYsU0FBU0MsYUFBYSxDQUFDO0lBQ3BDa2YsS0FBSzdhLFNBQVMsQ0FBQzdELEdBQUcsQ0FBQztJQUVuQjBlLEtBQUszZSxNQUFNLElBQU0wZSxNQUFNbGpCLEdBQUcsQ0FBRSxDQUFDcWEsR0FBRXBhO1FBQzNCLE1BQU1xVCxPQUFPdFAsU0FBU0MsYUFBYSxDQUFDO1FBQ3BDcVAsS0FBS1YsV0FBVyxHQUFFLENBQUMsRUFBRW1RLGVBQWUxSSxHQUFHLEVBQUVBLEVBQUU4RCxJQUFJLENBQUN2TCxXQUFXLENBQUMsQ0FBQztRQUM3RFUsS0FBS3BQLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFbVcsRUFBRThELElBQUksQ0FBQzdjLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLE9BQU9nUztJQUNYO0lBRUEsT0FBTzZQO0FBQ1g7QUFFQSxTQUFTQztJQUVMLE1BQU1DLE9BQU9ULGdCQUFpQkosT0FBT3ZLLEtBQUtxTCxTQUFTO0lBRW5ELElBQUkvVyxVQUFVLEVBQUU7SUFDaEIsSUFBSXVILFNBQVV1UDtJQUVkLE1BQU12UCxPQUFPcUssSUFBSSxLQUFLbEcsS0FBTTtRQUN4QjFMLFFBQVF6TixJQUFJLENBQUNnVjtRQUNiQSxTQUFTQSxPQUFPL0wsTUFBTTtJQUMxQjtJQUVBLE1BQU1vVyxPQUFPNVIsUUFBUWdYLE9BQU8sR0FBR3ZqQixHQUFHLENBQUUsQ0FBQ3dqQixPQUFNNVg7UUFFdkMsTUFBTXNFLElBQUlzVCxNQUFNckYsSUFBSTtRQUNwQixNQUFNc0YsU0FBU3pmLFNBQVNDLGFBQWEsQ0FBQztRQUV0QyxNQUFNeWYsT0FBTzFmLFNBQVNDLGFBQWEsQ0FBQztRQUNwQ3lmLEtBQUs5USxXQUFXLEdBQUcsQ0FBQyxFQUFFbVEsZUFBZVMsT0FBTyxFQUFFdFQsRUFBRTBDLFdBQVcsQ0FBQyxDQUFDO1FBQzdEOFEsS0FBS3hmLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFZ00sRUFBRTVPLEVBQUUsQ0FBQyxDQUFDO1FBRXBDLE1BQU02aEIsT0FBT0YsVUFBVU8sTUFBTXpiLE1BQU0sQ0FBRXFOLFFBQVE7UUFDN0NxTyxPQUFPamYsTUFBTSxDQUFDa2YsTUFBTVA7UUFFcEIsT0FBT007SUFDWDtJQUVBLElBQUlKLEtBQUtqTyxRQUFRLENBQUMzVixNQUFNLEtBQUssR0FBRztRQUM1QixNQUFNa2tCLFFBQVEzZixTQUFTQyxhQUFhLENBQUM7UUFFckMwZixNQUFNbmYsTUFBTSxDQUFFeWUsVUFBVUksS0FBS2pPLFFBQVE7UUFFckMrSSxLQUFLcmYsSUFBSSxDQUFDNmtCO0lBQ2Q7SUFFQSxTQUFTQyxlQUFlQyxVQUFrQixFQUFFM0IsSUFBWSxFQUFFNEIsSUFBUztRQUUvRCxVQUFVO1FBQ1YsSUFBSTVCLElBQUksQ0FBQyxFQUFFLEtBQUssS0FDWixPQUFPLENBQUMsRUFBRUMsK0NBQVNBLENBQUM5UCxLQUFLLENBQUMsR0FBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFNlAsS0FBSyxDQUFDO1FBRTdDLElBQUk2QixPQUFPLENBQUMsRUFBRUYsV0FBVyxFQUFFM0IsS0FBSyxDQUFDLENBQUM7UUFFbEMsTUFBTTRCLEtBQUsxTyxRQUFRLEVBQUUzVixPQUFRO1lBQ3pCcWtCLE9BQU9BLEtBQUsxTyxRQUFRLENBQUMsRUFBRTtZQUN2QjJPLFFBQVEsQ0FBQyxFQUFFRCxLQUFLNUIsSUFBSSxJQUFJNEIsS0FBSyxDQUFDLENBQUM7UUFDbkM7UUFFQSxPQUFPQztJQUNYO0lBRUEsU0FBU0MsZUFBZUgsVUFBa0IsRUFBRTNCLElBQVksRUFBRUcsS0FBVTtRQUNoRSxNQUFNeUIsT0FBT3pCLE1BQU00QixJQUFJLENBQUUsQ0FBQ0MsT0FBY0EsU0FBU2hDLFFBQVFnQyxLQUFLaEMsSUFBSSxLQUFLQTtRQUV2RSxNQUFNL0QsT0FBT25hLFNBQVNDLGFBQWEsQ0FBQztRQUNwQztZQUNJLE1BQU15ZixPQUFPMWYsU0FBU0MsYUFBYSxDQUFDO1lBQ3BDeWYsS0FBSzlRLFdBQVcsR0FBR2tSLEtBQUs3QixLQUFLLElBQUk2QixLQUFLdGpCLElBQUksSUFBSXNqQjtZQUM5Q0osS0FBS3hmLFlBQVksQ0FBQyxRQUFRMGYsZUFBZUMsWUFBWTNCLE1BQU00QjtZQUUzRCxNQUFNWCxPQUFPbmYsU0FBU0MsYUFBYSxDQUFDO1lBQ3BDa2YsS0FBSzdhLFNBQVMsQ0FBQzdELEdBQUcsQ0FBQztZQUVuQjBlLEtBQUszZSxNQUFNLElBQU02ZCxNQUFNcmlCLEdBQUcsQ0FBRSxDQUFDa2tCO2dCQUN6QixNQUFNNVEsT0FBT3RQLFNBQVNDLGFBQWEsQ0FBQztnQkFDcENxUCxLQUFLVixXQUFXLEdBQUVzUixLQUFLMWpCLElBQUksSUFBSTBqQjtnQkFFL0I1USxLQUFLcFAsWUFBWSxDQUFDLFFBQVEwZixlQUFlQyxZQUFZSyxLQUFLaEMsSUFBSSxJQUFFZ0MsTUFBTUE7Z0JBQ3RFLE9BQU81UTtZQUNYO1lBRUE2SyxLQUFLM1osTUFBTSxDQUFDa2YsTUFBTVA7UUFDdEI7UUFFQSxPQUFPaEY7SUFDWDtJQUVBLElBQUlnRyxVQUFVamQsT0FBT29ELFFBQVEsQ0FBQ0MsUUFBUSxDQUFDOEgsS0FBSyxDQUFDOFAsK0NBQVNBLENBQUMxaUIsTUFBTSxFQUFFcWEsS0FBSyxDQUFDO0lBRXJFLE1BQU1zSyxjQUFjSixlQUFlN0IsK0NBQVNBLEVBQUVnQyxPQUFPLENBQUMsRUFBRSxFQUFFOUIsZ0RBQUtBO0lBRS9ELE1BQU15QixPQUFPekIsZ0RBQUtBLENBQUM0QixJQUFJLENBQUUsQ0FBQ0MsT0FBY0EsS0FBS2hDLElBQUksS0FBS2lDLE9BQU8sQ0FBQyxFQUFFO0lBQ2hFLE1BQU1FLFlBQWNMLGVBQWU3QiwrQ0FBU0EsR0FBR2dDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsS0FBS0EsT0FBTyxDQUFDLEVBQUUsRUFBRUwsS0FBSzFPLFFBQVE7SUFFMUYsTUFBTWtQLFlBQVlSLEtBQUsxTyxRQUFRLENBQUM2TyxJQUFJLENBQUUsQ0FBQ0MsT0FBYyxDQUFDQSxNQUFNaEMsUUFBUWdDLElBQUcsTUFBT0MsT0FBTyxDQUFDLEVBQUU7SUFDeEYsSUFBSSxPQUFPRyxjQUFjLFVBQVU7UUFDL0IsWUFBWTtRQUNaLE1BQU1DLFlBQVlELFVBQVVsUCxRQUFRLENBQUNtQixTQUFTLENBQUUsQ0FBQzJOLE9BQWNBLE1BQU1oQyxRQUFRZ0MsU0FBU0MsT0FBTyxDQUFDLEVBQUU7UUFDaEduZ0IsU0FBU3NkLElBQUksQ0FBQ3hoQixLQUFLLENBQUN5SSxXQUFXLENBQUMscUJBQXFCLENBQUMsRUFBRWdjLFVBQVUsQ0FBQztRQUNuRSxPQUFPO1FBQ1AsTUFBTUMsZUFBaUJSLGVBQWU3QiwrQ0FBU0EsR0FBR2dDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsTUFBS0EsT0FBTyxDQUFDLEVBQUUsR0FBRyxLQUFLQSxPQUFPLENBQUMsRUFBRSxFQUFFRyxVQUFVbFAsUUFBUTtRQUNwSCtJLElBQUksQ0FBQyxFQUFFLEdBQUdxRztJQUNkO0lBRUFsQyxPQUFPNVosZUFBZSxDQUFDMGIsYUFBYUMsY0FBY2xHO0FBQ3REO0FBRUFsRyxLQUFLMVUsZ0JBQWdCLENBQUMsVUFBVTZmO0FBQ2hDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9MQSw2SEFBNkg7QUFDdEgsU0FBU3hVLFNBQWdDdVAsSUFBWTtJQUN4RCxJQUFJc0csV0FBV3pnQixTQUFTQyxhQUFhLENBQUM7SUFDdENrYSxPQUFPQSxLQUFLbGYsSUFBSSxJQUFJLHVEQUF1RDtJQUMzRXdsQixTQUFTemxCLFNBQVMsR0FBR21mO0lBQ3JCLE9BQU9zRyxTQUFTcm1CLE9BQU8sQ0FBQytnQixpQkFBaUI7QUFDN0M7QUFFTyxTQUFTdUYsT0FBT3ZHLElBQVk7SUFDL0IsSUFBSXNHLFdBQVd6Z0IsU0FBU0MsYUFBYSxDQUFDO0lBQ3RDa2EsT0FBT0EsS0FBS2xmLElBQUksSUFBSSx1REFBdUQ7SUFDM0V3bEIsU0FBU3psQixTQUFTLEdBQUdtZjtJQUNyQixPQUFPc0csU0FBU3JtQixPQUFPO0FBQzNCOzs7Ozs7O1NDYkE7U0FDQTs7U0FFQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTs7U0FFQTtTQUNBOztTQUVBO1NBQ0E7U0FDQTs7Ozs7VUN0QkE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxJQUFJO1VBQ0o7VUFDQTtVQUNBLElBQUk7VUFDSjtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxDQUFDO1VBQ0Q7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLEVBQUU7VUFDRjtVQUNBLHNHQUFzRztVQUN0RztVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLEdBQUc7VUFDSDtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsR0FBRztVQUNIO1VBQ0EsRUFBRTtVQUNGO1VBQ0E7Ozs7O1VDaEVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EseUNBQXlDLHdDQUF3QztVQUNqRjtVQUNBO1VBQ0E7Ozs7O1VDUEE7Ozs7O1VDQUE7VUFDQTtVQUNBO1VBQ0EsdURBQXVELGlCQUFpQjtVQUN4RTtVQUNBLGdEQUFnRCxhQUFhO1VBQzdEOzs7OztVQ05BOzs7OztTRUFBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0NvdXJzLy4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMi9pbmRleC5jc3M/MjZkZSIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTIvaW5kZXgubWQiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvaW5kZXguY3NzIiwid2VicGFjazovL0NvdXJzLy4vbGlicy9MSVNTL2luZGV4LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMi9pbmRleC50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9SYW5nZU92ZXJsYXkudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvZm9ybWF0LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL2Zvcm11bGFfZWRpdG9yLnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL2Zvcm11bGFfcGFyc2VyLnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL3BsYWdlX2VkaXRvci50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9wbGFnZV9zZWxlY3Rvci50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9zaGVldC50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy90b29sYmFyLnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jb250ZW50LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9tZW51LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC91dGlscy9zdHIyaHRtbC50cyIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvYXN5bmMgbW9kdWxlIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwYWdlcy9SMS0wMS9DTS9DTTIvaW5kZXguaHRtbFwiOyIsImV4cG9ydCBkZWZhdWx0IFwiOmhvc3QgdGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXG4gICAgJiA+IHRib2R5IHtcXG4gICAgICAgIG91dGxpbmU6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgfVxcblxcbiAgICAmID4gdGJvZHkgPiB0cjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIFxcbiAgICAgICAgJiA+IHRoIHtcXG4gICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG46aG9zdCA6aXModHIsdGgsdGQpIHtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjYzBjMGMwO1xcbn1cXG5cXG46aG9zdChbc2hvd2dyaWQ9XFxcImZhbHNlXFxcIl0pIHRkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuOmhvc3QgdHIge1xcbiAgICBoZWlnaHQ6IDAuNDVjbTtcXG4gICAgbGluZS1oZWlnaHQ6IDAuNDVjbTtcXG59XFxuXFxuXFxuOmhvc3QgOmlzKHRkLCB0aCk6bm90KFtjb250ZW50ZWRpdGFibGVdKSB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4vKlxcbjpob3N0IHRkW2NvbnRlbnRlZGl0YWJsZV0ge1xcbiAgICB1c2VyLXNlbGVjdDogdGV4dDtcXG59Ki9cXG5cXG46aG9zdCBjb2xncm91cCA+IGNvbCB7XFxuICAgIHdpZHRoOiAyLjI2Y207XFxufVxcbjpob3N0IGNvbGdyb3VwID4gY29sOmZpcnN0LWNoaWxkIHtcXG4gICAgd2lkdGg6IGNhbGMoIDIuMjZjbSAvIDIuNSkgO1xcbn1cXG5cXG46aG9zdCA6aXModGQsIHRoKSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgaGVpZ2h0OiAwLjQ1Y207XFxuXFxuICAgIGZvbnQtc2l6ZTogMTBwdDtcXG5cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdMaWJlcmF0aW9uIFNhbnMnO1xcbn1cXG5cXG5cXG46aG9zdCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG46aG9zdCBkaXYudG9vbGJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuXFxuICAgICYgPiAqOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgICAgIGZsZXg6IDEgMSAwO1xcbiAgICB9XFxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIHdpZHRoOiBjYWxjKCAxLjUgKiAyLjI2Y20gKTtcXG4gICAgfVxcbn1cXG5cXG46aG9zdCB0aCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XFxuICAgIGJvcmRlci1jb2xvcjogIzhhOGE4YTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG5cXG4gICAgJi5oaWdobGlnaHQge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM5OGVlNztcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcbn1cXG5cXG46aG9zdCguY2VsbF9lZGl0KSAuY3Vyc29yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuOmhvc3QoLnJlY29weSkge1xcbiAgICBjdXJzb3I6IGNlbGw7XFxufVxcblxcbjpob3N0IHtcXG5cXG4gICAgLnJlY29weSB7XFxuICAgICAgICBjdXJzb3I6IGNlbGw7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk4ZWU3O1xcbiAgICB9XFxuXFxuICAgIC5jdXJzb3Ige1xcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMzOThlZTc7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG46aG9zdCAub3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOmhvc3QgLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbjpob3N0IC5zZWxlY3Rpb25faGlnaGxpZ2h0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5OGVlNzsgLyojY2RlM2Y5OyovXFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8qIFRPRE8gKi9cXG59XFxuXFxuXFxuOmhvc3QgdGQge1xcblxcbiAgICAtLWZvbnRfc2l6ZTogMTBwdDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250X3NpemUpO1xcbiAgICBsaW5lLWhlaWdodDogY2FsYyggdmFyKC0tZm9udF9zaXplKSAqIDEuMiApO1xcblxcbiAgICAtLWluZGVudDogMDtcXG5cXG4gICAgLS1ib3JkZXJfY29sb3I6IGJsYWNrO1xcbiAgICAtLWJhY2tncm91bmRfY29sb3I6IHdoaXRlO1xcbiAgICAtLWZvcmVncm91bmRfY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kX2NvbG9yKTtcXG4gICAgY29sb3IgICAgICAgICAgIDogdmFyKC0tZm9yZWdyb3VuZF9jb2xvcik7XFxuXFxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxuXFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuXFxuICAgICY6aXMoW2RhdGEtdHlwZT1cXFwibnVtYmVyXFxcIl0sW2RhdGEtdHlwZT1cXFwicG91cmNlbnRcXFwiXSxbZGF0YS10eXBlPVxcXCJkYXRlXFxcIl0sIFtkYXRhLXR5cGU9XFxcImJvb2xlYW5cXFwiXSkge1xcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIH1cXG5cXG4gICAgJltjb250ZW50ZWRpdGFibGVdIHtcXG4gICAgICAgIG91dGxpbmU6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgfVxcblxcbiAgICAmLmFqdXN0ZXIge1xcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gICAgfVxcblxcbiAgICAvKiogc3R5bGUgKiovXFxuICAgICYuaXRhbGljIHtcXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgfVxcbiAgICAmLmJvbGQge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIH1cXG4gICAgJi51bmRlcmxpbmUge1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIH1cXG4gICAgJi5hbGlnbl9sZWZ0IHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyggdmFyKC0taW5kZW50KSAqIDEwcHgpO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgfVxcbiAgICAmLmFsaWduX2NlbnRlciB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgJi5hbGlnbl9yaWdodCB7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKCB2YXIoLS1pbmRlbnQpICogMTBweCk7XFxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgfVxcbiAgICAmLnZhbGlnbl90b3Age1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgfVxcbiAgICAmLnZhbGlnbl9taWRkbGUge1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgfVxcbiAgICAmLnZhbGlnbl9ib3R0b20ge1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gICAgfVxcbiAgICAvKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMjQxNzU3L2FwcGx5aW5nLWJvcmRlcnMtdG8tYS1zaW5nbGUtdGFibGUtY2VsbC13aGVuLXVzaW5nLWJvcmRlci1jb2xsYXBzZSAqL1xcbiAgICAmLmJvcmRlcl90b3Age1xcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IGRvdWJsZSB2YXIoLS1ib3JkZXJfY29sb3IpO1xcbiAgICB9XFxuICAgICYuYm9yZGVyX2JvdHRvbSB7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZG91YmxlIHZhcigtLWJvcmRlcl9jb2xvcik7XFxuICAgIH1cXG4gICAgJi5ib3JkZXJfbGVmdCB7XFxuICAgICAgICBib3JkZXItbGVmdDogMXB4IGRvdWJsZSB2YXIoLS1ib3JkZXJfY29sb3IpO1xcbiAgICB9XFxuICAgICYuYm9yZGVyX3JpZ2h0IHtcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IGRvdWJsZSB2YXIoLS1ib3JkZXJfY29sb3IpO1xcbiAgICB9XFxufVxcblxcbjpob3N0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG46aG9zdCAucmFuZ2VfaGlnaGxpZ2h0IHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcblxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWhpZ2hsaWdodF9jb2xvcik7XFxufVxcblxcbjpob3N0IC5mb3JtdWxhX2hpZ2hsaWdodCB7XFxuICAgIGNvbG9yOiB2YXIoLS1oaWdobGlnaHRfY29sb3IpO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzAge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogI2ZhMGMwYztcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF8xIHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICNmYTBjZmE7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfMiB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjMGM4NDBjO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzMge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzAxMDE4MDtcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF80IHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICM4NzE3MTc7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfNSB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjODcxNzg3O1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzYge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzg0ODQwYztcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF83IHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICMwYzBjZmE7XFxufVxcblxcblxcbi5jb3B5X2hpZ2hsaWdodCB7XFxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCBibGFjaztcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi8qIFRvbW9ycm93IFRoZW1lICovXFxuLyogaHR0cDovL2ptYmxvZy5naXRodWIuY29tL2NvbG9yLXRoZW1lcy1mb3ItZ29vZ2xlLWNvZGUtaGlnaGxpZ2h0anMgKi9cXG4vKiBPcmlnaW5hbCB0aGVtZSAtIGh0dHBzOi8vZ2l0aHViLmNvbS9jaHJpc2tlbXBzb24vdG9tb3Jyb3ctdGhlbWUgKi9cXG5cXG4vKiBUb21vcnJvdyBDb21tZW50ICovXFxuLmhsanMtY29tbWVudCxcXG4uaGxqcy1xdW90ZSB7XFxuXFx0Y29sb3I6ICM4ZTkwOGM7XFxufVxcblxcbi8qIFRvbW9ycm93IFJlZCAqL1xcbi5obGpzLXZhcmlhYmxlLFxcbi5obGpzLXRlbXBsYXRlLXZhcmlhYmxlLFxcbi5obGpzLXRhZyxcXG4uaGxqcy1uYW1lLFxcbi5obGpzLXNlbGVjdG9yLWlkLFxcbi5obGpzLXNlbGVjdG9yLWNsYXNzLFxcbi5obGpzLXJlZ2V4cCxcXG4uaGxqcy1kZWxldGlvbiB7XFxuXFx0Y29sb3I6ICNjODI4Mjk7XFxufVxcblxcbi8qIFRvbW9ycm93IE9yYW5nZSAqL1xcbi5obGpzLW51bWJlcixcXG4uaGxqcy1idWlsdF9pbixcXG4uaGxqcy1idWlsdGluLW5hbWUsXFxuLmhsanMtbGl0ZXJhbCxcXG4uaGxqcy10eXBlLFxcbi5obGpzLXBhcmFtcyxcXG4uaGxqcy1tZXRhLFxcbi5obGpzLWxpbmsge1xcblxcdGNvbG9yOiAjZjU4NzFmO1xcbn1cXG5cXG4vKiBUb21vcnJvdyBZZWxsb3cgKi9cXG4uaGxqcy1hdHRyaWJ1dGUge1xcblxcdGNvbG9yOiAjZWFiNzAwO1xcbn1cXG5cXG4vKiBUb21vcnJvdyBHcmVlbiAqL1xcbi5obGpzLXN0cmluZyxcXG4uaGxqcy1zeW1ib2wsXFxuLmhsanMtYnVsbGV0LFxcbi5obGpzLWFkZGl0aW9uIHtcXG5cXHRjb2xvcjogIzcxOGMwMDtcXG59XFxuXFxuLyogVG9tb3Jyb3cgQmx1ZSAqL1xcbi5obGpzLXRpdGxlLFxcbi5obGpzLXNlY3Rpb24ge1xcblxcdGNvbG9yOiAjNDI3MWFlO1xcbn1cXG5cXG4vKiBUb21vcnJvdyBQdXJwbGUgKi9cXG4uaGxqcy1rZXl3b3JkLFxcbi5obGpzLXNlbGVjdG9yLXRhZyB7XFxuXFx0Y29sb3I6ICM4OTU5YTg7XFxufVxcblxcbi5obGpzIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRvdmVyZmxvdy14OiBhdXRvO1xcblxcdGNvbG9yOiAjNGQ0ZDRjO1xcblxcdHBhZGRpbmc6IDAuNWVtO1xcbn1cXG5cXG4uaGxqcy1lbXBoYXNpcyB7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uaGxqcy1zdHJvbmcge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cIjsiLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIGV4cG9ydGVkIHR5cGVzID09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCB0eXBlIENTU19SZXNvdXJjZSA9IHN0cmluZ3xSZXNwb25zZXxIVE1MU3R5bGVFbGVtZW50fENTU1N0eWxlU2hlZXQ7XG5leHBvcnQgdHlwZSBDU1NfU291cmNlICAgPSBDU1NfUmVzb3VyY2UgfCBQcm9taXNlPENTU19SZXNvdXJjZT47XG5cbmV4cG9ydCB0eXBlIEhUTUxfUmVzb3VyY2UgPSBzdHJpbmd8UmVzcG9uc2V8SFRNTFRlbXBsYXRlRWxlbWVudDtcbmV4cG9ydCB0eXBlIEhUTUxfU291cmNlICAgPSBIVE1MX1Jlc291cmNlIHwgUHJvbWlzZTxIVE1MX1Jlc291cmNlPjtcblxuZXhwb3J0IHR5cGUgTElTU09wdGlvbnM8RXh0ZW5kcyAgICBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdFx0SG9zdCAgICAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdFx0QXR0cnMgICAgICBleHRlbmRzIHN0cmluZyxcblx0XHRcdFx0XHRcdFBhcmFtZXRlcnMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PiA9IHtcblxuXHRleHRlbmRzPzogQ29uc3RydWN0b3I8RXh0ZW5kcz4sXG5cdGhvc3QgICA/OiBDb25zdHJ1Y3RvcjxIb3N0PixcblxuXHRkZXBlbmRlbmNpZXM/OiByZWFkb25seSBQcm9taXNlPGFueT5bXSxcblx0YXR0cmlidXRlcyAgPzogcmVhZG9ubHkgQXR0cnNbXSxcblx0cGFyYW1zICAgICAgPzogUmVhZG9ubHk8UGFyYW1ldGVycz4sXG5cblx0Y29udGVudD86IEhUTUxfU291cmNlLFxuXHRjc3MgICAgPzogIENTU19Tb3VyY2UgfCByZWFkb25seSBDU1NfU291cmNlW10sXG5cdHNoYWRvdyA/OiAgU2hhZG93Q2ZnLFxufTtcblxuZXhwb3J0IGVudW0gU2hhZG93Q2ZnIHtcblx0Tk9ORSA9ICdub25lJyxcblx0T1BFTiA9ICdvcGVuJywgXG5cdENMT1NFPSAnY2xvc2VkJ1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBDbGFzcyA9PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5sZXQgX19jc3RyX2hvc3QgIDogYW55ID0gbnVsbDtcblxudHlwZSBDb25zdHJ1Y3RvcjxUPiA9IG5ldyAoKSA9PiBUO1xuaW50ZXJmYWNlIENsYXNzIHt9XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50L2F0dGFjaFNoYWRvd1xuY29uc3QgQ0FOX0hBVkVfU0hBRE9XID0gW1xuXHRudWxsLCAnYXJ0aWNsZScsICdhc2lkZScsICdibG9ja3F1b3RlJywgJ2JvZHknLCAnZGl2Jyxcblx0J2Zvb3RlcicsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdoZWFkZXInLCAnbWFpbicsXG5cdCduYXYnLCAncCcsICdzZWN0aW9uJywgJ3NwYW4nXG5cdFxuXTtcbmZ1bmN0aW9uIF9jYW5IYXNTaGFkb3codGFnOiB0eXBlb2YgSFRNTEVsZW1lbnQpIHtcblx0cmV0dXJuIENBTl9IQVZFX1NIQURPVy5pbmNsdWRlcyggX2VsZW1lbnQydGFnbmFtZSh0YWcpICk7XG59XG5cbnR5cGUgUmVzb3VyY2UgPSBVUkx8UmVzcG9uc2U7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTElTUzxFeHRlbmRzICAgIGV4dGVuZHMgQ2xhc3MgICAgICAgICAgICAgID0gQ2xhc3MsXG5cdFx0XHRcdFx0XHRcdCBIb3N0ICAgICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQgICAgICAgID0gSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0XHRcdCBBdHRycyAgICAgIGV4dGVuZHMgc3RyaW5nICAgICAgICAgICAgID0gbmV2ZXIsXG5cdFx0XHRcdFx0XHRcdCBQYXJhbWV0ZXJzIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+ID0ge30+KHtcblx0XHRcdFx0XHRcdFx0XHRleHRlbmRzICAgICA6IHBfZXh0ZW5kcyxcblx0XHRcdFx0XHRcdFx0XHRob3N0ICAgICAgICA6IHBfaG9zdCxcblx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmNpZXM6IHBfZGVwcyxcblx0XHRcdFx0XHRcdFx0ICAgIGF0dHJpYnV0ZXMgIDogcF9hdHRycyxcblx0XHRcdFx0XHRcdFx0ICAgIHBhcmFtcyxcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50LFxuXHRcdFx0XHRcdFx0XHRcdGNzcyxcblx0XHRcdFx0XHRcdFx0XHRzaGFkb3cgICAgICA6IHBfc2hhZG93LFxuXHRcdFx0XHRcdFx0XHR9OiBMSVNTT3B0aW9uczxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1ldGVycz4gPSB7fSkge1xuXG5cdC8vVE9ETyBtZXJnZSBwcm9wIGlmIGV4dGVuZHMgTElTUy4uLlxuXG5cdGNvbnN0IGhvc3QgICAgICAgID0gcF9ob3N0ICAgID8/IEhUTUxFbGVtZW50IGFzIENvbnN0cnVjdG9yPEhvc3Q+O1xuXHRjb25zdCBfZXh0ZW5kcyAgICA9IHBfZXh0ZW5kcyA/PyBPYmplY3QgICAgICBhcyB1bmtub3duIGFzIENvbnN0cnVjdG9yPEV4dGVuZHM+O1xuXHRjb25zdCBhdHRyaWJ1dGVzICA9IHBfYXR0cnMgICA/PyBbXTtcblx0Y29uc3QgZGVwZW5kZW5jaWVzPSBwX2RlcHMgICAgPyBbLi4ucF9kZXBzXSA6IFtdO1xuXHRjb25zdCBjYW5IYXNTaGFkb3c9IF9jYW5IYXNTaGFkb3coaG9zdCk7XG5cdGNvbnN0IHNoYWRvdyAgICAgID0gcF9zaGFkb3cgID8/IChjYW5IYXNTaGFkb3cgPyBTaGFkb3dDZmcuQ0xPU0UgOiBTaGFkb3dDZmcuTk9ORSk7XG5cblx0aWYoICEgY2FuSGFzU2hhZG93ICYmIHNoYWRvdyAhPT0gU2hhZG93Q2ZnLk5PTkUpXG5cdFx0dGhyb3cgbmV3IEVycm9yKGBIb3N0IGVsZW1lbnQgJHtfZWxlbWVudDJ0YWduYW1lKGhvc3QpfSBkb2VzIG5vdCBzdXBwb3J0IFNoYWRvd1Jvb3RgKTtcblxuXHQvLyBDT05URU5UIHByb2Nlc3Npbmdcblx0aWYoIGNvbnRlbnQgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdGRlcGVuZGVuY2llcy5wdXNoKCAoIGFzeW5jICgpID0+IHtcblxuXHRcdFx0Y29udGVudCA9IGF3YWl0IGNvbnRlbnQ7XG5cblx0XHRcdGlmKGNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MVGVtcGxhdGVFbGVtZW50KVxuXHRcdFx0Y29udGVudCA9IGNvbnRlbnQuaW5uZXJIVE1MO1xuXG5cdFx0XHRpZiggdHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHtcblxuXHRcdFx0XHRjb250ZW50ID0gY29udGVudC50cmltKCk7IC8vIE5ldmVyIHJldHVybiBhIHRleHQgbm9kZSBvZiB3aGl0ZXNwYWNlIGFzIHRoZSByZXN1bHRcblx0XHRcdFx0aWYoY29udGVudCA9PT0gJycpXG5cdFx0XHRcdFx0Y29udGVudCA9IHVuZGVmaW5lZDtcblxuXHRcdFx0fVxuXHRcdFx0aWYoIGNvbnRlbnQgaW5zdGFuY2VvZiBSZXNwb25zZSApXG5cdFx0XHRcdGNvbnRlbnQgPSBhd2FpdCBjb250ZW50LnRleHQoKTtcblxuXHRcdFx0cmV0dXJuIExJU1NCYXNlLlBhcmFtZXRlcnMuY29udGVudCA9IGNvbnRlbnQ7XG5cdFx0fSkoKSApO1xuXHR9XG5cblx0Ly8gQ1NTIHByb2Nlc3Npbmdcblx0bGV0IHN0eWxlc2hlZXRzOiByZWFkb25seSBDU1NTdHlsZVNoZWV0W10gPSBbXTtcblx0aWYoIGNzcyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0aWYoICEgQXJyYXkuaXNBcnJheShjc3MpIClcblx0XHRcdGNzcyA9IFtjc3MgYXMgQ1NTX1NvdXJjZV07XG5cblx0XHRzdHlsZXNoZWV0cyA9IG5ldyBBcnJheTxDU1NTdHlsZVNoZWV0Pihjc3MubGVuZ3RoKTtcblxuXHRcdGNvbnN0IGZldGNoX2NzcyA9IChhc3luYyAoY3NzOiBDU1NfU291cmNlKSA9PiB7XG5cdFx0XHRjc3MgPSBhd2FpdCBjc3M7XG5cdFx0XHRpZihjc3MgaW5zdGFuY2VvZiBDU1NTdHlsZVNoZWV0KVxuXHRcdFx0XHRyZXR1cm4gY3NzO1xuXHRcdFx0aWYoIGNzcyBpbnN0YW5jZW9mIEhUTUxTdHlsZUVsZW1lbnQpXG5cdFx0XHRcdHJldHVybiBjc3Muc2hlZXQhO1xuXG5cdFx0XHRsZXQgc3R5bGUgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuXHRcdFx0aWYoIHR5cGVvZiBjc3MgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRcdGF3YWl0IHN0eWxlLnJlcGxhY2UoY3NzKTtcblx0XHRcdFx0cmV0dXJuIHN0eWxlO1xuXHRcdFx0fVxuXG5cdFx0XHQvL2lmKCBjc3MgaW5zdGFuY2VvZiBSZXNwb25zZSApXG5cdFx0XHRhd2FpdCBzdHlsZS5yZXBsYWNlKGF3YWl0IGNzcy50ZXh0KCkpO1xuXHRcdFx0cmV0dXJuIHN0eWxlO1xuXHRcdH0pO1xuXG5cdFx0ZGVwZW5kZW5jaWVzLnB1c2goIC4uLmNzcy5tYXAoIGFzeW5jIChjc3MsIGlkeCkgPT4gIChzdHlsZXNoZWV0cyBhcyBhbnkpW2lkeF0gPSBhd2FpdCBmZXRjaF9jc3MoY3NzKSApICk7XG5cdH1cblxuXHR0eXBlIExIb3N0ID0gTElTU0hvc3Q8TElTU0Jhc2U+O1xuXG5cdC8vIEB0cy1pZ25vcmVcblx0Y2xhc3MgTElTU0Jhc2UgZXh0ZW5kcyBfZXh0ZW5kcyB7XG5cblx0XHRyZWFkb25seSAjaG9zdDogYW55OyAvLyBwcmV2ZW50cyBpc3N1ZSAjMS4uLlxuXG5cdFx0Y29uc3RydWN0b3IoKSB7XG5cblx0XHRcdHN1cGVyKCk7XG5cblx0XHRcdC8vIGg0Y2ssIG9rYXkgYmVjYXVzZSBKUyBpcyBtb25vdGhyZWFkZWQuXG5cdFx0XHRpZiggX19jc3RyX2hvc3QgPT09IG51bGwgKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgZG8gbm90IGRpcmVjdGx5IGNhbGwgdGhpcyBjb25zdHJ1Y3RvclwiKTtcblx0XHRcdHRoaXMuI2hvc3QgPSBfX2NzdHJfaG9zdDtcblx0XHRcdF9fY3N0cl9ob3N0ID0gbnVsbDtcblx0XHR9XG5cblx0XHRwdWJsaWMgZ2V0IGhvc3QoKTogSG9zdCB7XG5cdFx0XHRyZXR1cm4gdGhpcy4jaG9zdDtcblx0XHR9XG5cdFx0cHJvdGVjdGVkIGdldCBhdHRycygpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkuYXR0cnM7XG5cdFx0fVxuXHRcdHByb3RlY3RlZCBzZXRBdHRyRGVmYXVsdCggYXR0cjogQXR0cnMsIHZhbHVlOiBzdHJpbmd8bnVsbCkge1xuXHRcdFx0cmV0dXJuICh0aGlzLiNob3N0IGFzIExIb3N0KS5zZXRBdHRyRGVmYXVsdChhdHRyLCB2YWx1ZSk7XG5cblx0XHR9XG5cdFx0cHVibGljIGdldCBwYXJhbXMoKTogUmVhZG9ubHk8UGFyYW1ldGVycz4ge1xuXHRcdFx0cmV0dXJuICh0aGlzLiNob3N0IGFzIExIb3N0KS5wYXJhbXM7XG5cdFx0fVxuXHRcdHB1YmxpYyBzZXRQYXJhbTxUIGV4dGVuZHMga2V5b2YgUGFyYW1ldGVycz4obmFtZTogVCwgdmFsdWU6IFBhcmFtZXRlcnNbVF0pIHtcblx0XHRcdCh0aGlzLiNob3N0IGFzIExIb3N0KS5wYXJhbXNbbmFtZV0gPSB2YWx1ZTtcblx0XHR9XG5cdFx0cHJvdGVjdGVkIGdldCBjb250ZW50KCkge1xuXHRcdFx0cmV0dXJuICh0aGlzLiNob3N0IGFzIExIb3N0KS5jb250ZW50ITtcblx0XHR9XG5cblx0XHRzdGF0aWMgcmVhZG9ubHkgUGFyYW1ldGVycyA9IHtcblx0XHRcdGhvc3QsXG5cdFx0XHRkZXBlbmRlbmNpZXMsXG5cdFx0XHRhdHRyaWJ1dGVzLFxuXHRcdFx0cGFyYW1zLFxuXHRcdFx0Y29udGVudCxcblx0XHRcdHN0eWxlc2hlZXRzLFxuXHRcdFx0c2hhZG93LFxuXHRcdH07XG5cblx0XHRwcm90ZWN0ZWQgb25BdHRyQ2hhbmdlZChfbmFtZTogc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRcdF9vbGRWYWx1ZTogc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRcdF9uZXdWYWx1ZTogc3RyaW5nKTogdm9pZHxmYWxzZSB7fVxuXG5cdFx0cHVibGljIGdldCBpc0luRE9NKCkge1xuXHRcdFx0cmV0dXJuICh0aGlzLiNob3N0IGFzIExIb3N0KS5pc0luRE9NO1xuXHRcdH1cblx0XHRwcm90ZWN0ZWQgb25ET01Db25uZWN0ZWQoKSB7fVxuXHRcdHByb3RlY3RlZCBvbkRPTURpc2Nvbm5lY3RlZCgpIHt9XG5cdH1cblxuXHRyZXR1cm4gTElTU0Jhc2U7XG59XG5cbi8vVE9ETzogb3RoZXIgb3B0aW9ucy4uLlxuZnVuY3Rpb24gZXh0ZW5kc0xJU1M8RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdEF0dHJzMSAgIGV4dGVuZHMgc3RyaW5nLFxuXHRBdHRyczIgICBleHRlbmRzIHN0cmluZyxcblx0UGFyYW1zICBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pixcblx0VCBleHRlbmRzIExJU1NSZXR1cm5UeXBlPEV4dGVuZHMsIEhvc3QsIEF0dHJzMSwgUGFyYW1zPj4oTGlzczogVCxcblx0XHRwYXJhbWV0ZXJzOiB7XG5cdFx0XHRzaGFkb3cgICAgICA/OiBTaGFkb3dDZmcsXG5cdFx0XHRhdHRyaWJ1dGVzICA/OiByZWFkb25seSBBdHRyczJbXSxcblx0XHRcdGRlcGVuZGVuY2llcz86IHJlYWRvbmx5IFByb21pc2U8YW55PltdXG5cdFx0fSkge1xuXG5cdGNvbnN0IGF0dHJpYnV0ZXMgICA9IFsuLi5MaXNzLlBhcmFtZXRlcnMuYXR0cmlidXRlcyAgLCAuLi5wYXJhbWV0ZXJzLmF0dHJpYnV0ZXMgID8/W11dO1xuXHRjb25zdCBkZXBlbmRlbmNpZXMgPSBbLi4uTGlzcy5QYXJhbWV0ZXJzLmRlcGVuZGVuY2llcywgLi4ucGFyYW1ldGVycy5kZXBlbmRlbmNpZXM/P1tdXTtcblxuXHRjb25zdCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBMaXNzLlBhcmFtZXRlcnMsIHtcblx0XHRhdHRyaWJ1dGVzLFxuXHRcdGRlcGVuZGVuY2llc1xuXHR9KTtcblx0aWYoIHBhcmFtZXRlcnMuc2hhZG93ICE9PSB1bmRlZmluZWQpXG5cdFx0cGFyYW1zLnNoYWRvdyA9IHBhcmFtZXRlcnMuc2hhZG93O1xuXG5cdC8vIEB0cy1pZ25vcmUgOiBiZWNhdXNlIFRTIHN0dXBpZFxuXHRjbGFzcyBFeHRlbmRlZExJU1MgZXh0ZW5kcyBMaXNzIHtcblx0XHRjb25zdHJ1Y3RvciguLi50OiBhbnlbXSkge1xuXHRcdFx0Ly8gQHRzLWlnbm9yZSA6IGJlY2F1c2UgVFMgc3R1cGlkXG5cdFx0XHRzdXBlciguLi50KTtcblx0XHR9XG5cblx0XHRwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGF0dHJzKCkge1xuXHRcdFx0cmV0dXJuIHN1cGVyLmF0dHJzIGFzIFJlY29yZDxBdHRyczJ8QXR0cnMxLCBzdHJpbmd8bnVsbD47XG5cdFx0fVxuXG5cdFx0c3RhdGljIG92ZXJyaWRlIFBhcmFtZXRlcnMgPSBwYXJhbXM7XG5cdH1cblxuXHRyZXR1cm4gRXh0ZW5kZWRMSVNTO1xufVxuTElTUy5leHRlbmRzTElTUyA9IGV4dGVuZHNMSVNTO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIHR5cGUgaGVscGVycyA9PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnR5cGUgYnVpbGRMSVNTSG9zdFJldHVyblR5cGU8VD4gID0gVCBleHRlbmRzIExJU1NSZXR1cm5UeXBlPGluZmVyIEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluZmVyIEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluZmVyIEF0dHJzICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbmZlciBQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBSZXR1cm5UeXBlPHR5cGVvZiBidWlsZExJU1NIb3N0PEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXMsIFQ+PiA6IG5ldmVyO1xuXG5leHBvcnQgdHlwZSBMSVNTUmV0dXJuVHlwZTxcblx0RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdEF0dHJzICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4+ID0gUmV0dXJuVHlwZTx0eXBlb2YgTElTUzxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zPj47XG5leHBvcnQgdHlwZSBMSVNTQmFzZTxFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdFx0XHRcdFx0IEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHQgQXR0cnMgICBleHRlbmRzIHN0cmluZyxcblx0XHRcdFx0XHQgUGFyYW1zICBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pj4gPSBJbnN0YW5jZVR5cGU8TElTU1JldHVyblR5cGU8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcz4+O1xuZXhwb3J0IHR5cGUgTElTU0hvc3Q8TElTUyBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4gPiA9IEluc3RhbmNlVHlwZTxidWlsZExJU1NIb3N0UmV0dXJuVHlwZTxDb25zdHJ1Y3RvcjxMSVNTPiAmIHtQYXJhbWV0ZXJzOiBhbnl9Pj47XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1NIb3N0IGNsYXNzID09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxubGV0IGlkID0gMDtcblxuZnVuY3Rpb24gYnVpbGRMSVNTSG9zdDxFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdFx0XHRcdFx0ICAgSG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdCAgIEF0dHJzICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0ICAgUGFyYW1zICBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pixcblx0XHRcdFx0XHQgICBUIGV4dGVuZHMgTElTU1JldHVyblR5cGU8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcz4+KExpc3M6IFQsIF9wYXJhbXM6IFBhcnRpYWw8UGFyYW1zPiA9IHt9KSB7XG5cdGNvbnN0IHtcblx0XHRob3N0LFxuXHRcdGF0dHJpYnV0ZXMsXG5cdFx0Y29udGVudCxcblx0XHRzdHlsZXNoZWV0cyxcblx0XHRzaGFkb3csXG5cdH0gPSBMaXNzLlBhcmFtZXRlcnM7XG5cblx0Y29uc3QgYWxyZWFkeURlY2xhcmVkQ1NTID0gbmV3IFNldCgpO1xuXG5cdGNvbnN0IEdFVCA9IFN5bWJvbCgnZ2V0Jyk7XG5cdGNvbnN0IFNFVCA9IFN5bWJvbCgnc2V0Jyk7XG5cblx0Y29uc3QgcHJvcGVydGllcyA9IE9iamVjdC5mcm9tRW50cmllcyggYXR0cmlidXRlcy5tYXAobiA9PiBbbiwge1xuXG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uKCk6IHN0cmluZ3xudWxsICAgICAgeyByZXR1cm4gKHRoaXMgYXMgdW5rbm93biBhcyBBdHRyaWJ1dGVzKVtHRVRdKG4pOyB9LFxuXHRcdHNldDogZnVuY3Rpb24odmFsdWU6IHN0cmluZ3xudWxsKSB7IHJldHVybiAodGhpcyBhcyB1bmtub3duIGFzIEF0dHJpYnV0ZXMpW1NFVF0obiwgdmFsdWUpOyB9XG5cdH1dKSApO1xuXG5cdGNsYXNzIEF0dHJpYnV0ZXMge1xuICAgICAgICBbeDogc3RyaW5nXTogc3RyaW5nfG51bGw7XG5cbiAgICAgICAgI2RhdGEgICAgIDogUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD47XG4gICAgICAgICNkZWZhdWx0cyA6IFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuICAgICAgICAjc2V0dGVyICAgOiAobmFtZTogQXR0cnMsIHZhbHVlOiBzdHJpbmd8bnVsbCkgPT4gdm9pZDtcblxuICAgICAgICBbR0VUXShuYW1lOiBBdHRycykge1xuICAgICAgICBcdHJldHVybiB0aGlzLiNkYXRhW25hbWVdID8/IHRoaXMuI2RlZmF1bHRzW25hbWVdID8/IG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIFtTRVRdKG5hbWU6IEF0dHJzLCB2YWx1ZTogc3RyaW5nfG51bGwpe1xuICAgICAgICBcdHJldHVybiB0aGlzLiNzZXR0ZXIobmFtZSwgdmFsdWUpOyAvLyByZXF1aXJlZCB0byBnZXQgYSBjbGVhbiBvYmplY3Qgd2hlbiBkb2luZyB7Li4uYXR0cnN9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhICAgIDogUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD4sXG5cdFx0XHRcdFx0ZGVmYXVsdHM6IFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+LFxuICAgICAgICBcdFx0XHRzZXR0ZXIgIDogKG5hbWU6IEF0dHJzLCB2YWx1ZTogc3RyaW5nfG51bGwpID0+IHZvaWQpIHtcblxuICAgICAgICBcdHRoaXMuI2RhdGEgICAgID0gZGF0YTtcblx0XHRcdHRoaXMuI2RlZmF1bHRzID0gZGVmYXVsdHM7XG4gICAgICAgIFx0dGhpcy4jc2V0dGVyID0gc2V0dGVyO1xuXG4gICAgICAgIFx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywgcHJvcGVydGllcyk7XG4gICAgICAgIH1cblx0fVxuXG5cdC8vIEB0cy1pZ25vcmUgOiBiZWNhdXNlIFRTIGlzIHN0dXBpZC5cblx0Y2xhc3MgTElTU0hvc3RCYXNlIGV4dGVuZHMgaG9zdCB7XG5cblx0XHRyZWFkb25seSAjcGFyYW1zOiBQYXJhbXM7XG5cblx0XHRyZWFkb25seSAjaWQgPSArK2lkOyAvLyBmb3IgZGVidWdcblxuXHRcdGNvbnN0cnVjdG9yKHBhcmFtczogUGFydGlhbDxQYXJhbXM+ID0ge30pIHtcblx0XHRcdHN1cGVyKCk7XG5cdFx0XHR0aGlzLiNwYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBMaXNzLlBhcmFtZXRlcnMucGFyYW1zLCBfcGFyYW1zLCBwYXJhbXMpO1xuXG5cdFx0XHR0aGlzLiN3YWl0SW5pdCA9IG5ldyBQcm9taXNlKCAocmVzb2x2ZSkgPT4ge1xuXHRcdFx0XHRpZih0aGlzLmlzSW5pdClcblx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZSh0aGlzLiNBUEkhKTtcblx0XHRcdFx0dGhpcy4jcmVzb2x2ZSA9IHJlc29sdmU7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvKioqKiBwdWJsaWMgQVBJICoqKioqKioqKioqKiovXG5cblx0XHRnZXQgaXNJbml0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuI0FQSSAhPT0gbnVsbDtcblx0XHR9XG5cdFx0aW5pdGlhbGl6ZShwYXJhbXM6IFBhcnRpYWw8UGFyYW1zPiA9IHt9KSB7XG5cblx0XHRcdGlmKCB0aGlzLmlzSW5pdCApXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignRWxlbWVudCBhbHJlYWR5IGluaXRpYWxpemVkIScpO1xuXG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMuI3BhcmFtcywgcGFyYW1zKTtcblxuXHRcdFx0Y29uc3QgYXBpID0gdGhpcy5pbml0KCk7XG5cblx0XHRcdGlmKCB0aGlzLiNpc0luRE9NIClcblx0XHRcdFx0KGFwaSBhcyBhbnkpLm9uRE9NQ29ubmVjdGVkKCk7XG5cblx0XHRcdHJldHVybiBhcGk7XG5cdFx0fVxuXG5cdFx0Z2V0IExJU1NTeW5jKCkge1xuXHRcdFx0aWYoICEgdGhpcy5pc0luaXQgKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0FjY2Vzc2luZyBBUEkgYmVmb3JlIFdlYkNvbXBvbmVudCBpbml0aWFsaXphdGlvbiEnKTtcblx0XHRcdHJldHVybiB0aGlzLiNBUEkhO1xuXHRcdH1cblx0XHRnZXQgTElTUygpIHtcblx0XHRcdHJldHVybiB0aGlzLiN3YWl0SW5pdDtcblx0XHR9XG5cblx0XHQvKioqIGluaXQgKioqL1xuXHRcdCN3YWl0SW5pdDogUHJvbWlzZTxJbnN0YW5jZVR5cGU8VD4+O1xuXHRcdCNyZXNvbHZlOiAoKHU6IEluc3RhbmNlVHlwZTxUPikgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcblx0XHQjQVBJOiBJbnN0YW5jZVR5cGU8VD4gfCBudWxsID0gbnVsbDtcblxuXHRcdCNpc0luRE9NID0gZmFsc2U7XG5cdFx0Z2V0IGlzSW5ET00oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4jaXNJbkRPTTtcblx0XHR9XG5cblx0XHRkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHRcdHRoaXMuI2lzSW5ET00gPSBmYWxzZTtcblx0XHRcdCh0aGlzLiNBUEkhIGFzIGFueSkub25ET01EaXNjb25uZWN0ZWQoKTtcblx0XHR9XG5cblx0XHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblxuXHRcdFx0dGhpcy4jaXNJbkRPTSA9IHRydWU7XG5cdFxuXHRcdFx0aWYoICEgdGhpcy5pc0luaXQgKVxuXHRcdFx0XHR0aGlzLmluaXQoKTtcblxuXHRcdFx0KHRoaXMuI0FQSSEgYXMgYW55KS5vbkRPTUNvbm5lY3RlZCgpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgaW5pdCgpIHtcblx0XHRcdFxuXHRcdFx0Y3VzdG9tRWxlbWVudHMudXBncmFkZSh0aGlzKTtcblx0XHRcdFxuXHRcdFx0Ly8gc2hhZG93XG5cdFx0XHR0aGlzLiNjb250ZW50ID0gdGhpcyBhcyB1bmtub3duIGFzIEhvc3Q7XG5cdFx0XHRpZiggc2hhZG93ICE9PSAnbm9uZScpIHtcblx0XHRcdFx0dGhpcy4jY29udGVudCA9IHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiBzaGFkb3d9KTtcblxuXHRcdFx0XHQvL0B0cy1pZ25vcmVcblx0XHRcdFx0dGhpcy4jY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tFdmVudCk7XG5cdFx0XHRcdC8vQHRzLWlnbm9yZVxuXHRcdFx0XHR0aGlzLiNjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgb25DbGlja0V2ZW50KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gYXR0cnNcblx0XHRcdGZvcihsZXQgb2JzIG9mIGF0dHJpYnV0ZXMhKVxuXHRcdFx0XHR0aGlzLiNhdHRyaWJ1dGVzW29ic10gPSB0aGlzLmdldEF0dHJpYnV0ZShvYnMpO1xuXG5cdFx0XHQvLyBjc3Ncblx0XHRcdGlmKCBzaGFkb3cgIT09ICdub25lJylcblx0XHRcdFx0KHRoaXMuI2NvbnRlbnQgYXMgU2hhZG93Um9vdCkuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc2hhcmVkQ1NTKTtcblx0XHRcdGlmKCBzdHlsZXNoZWV0cy5sZW5ndGggKSB7XG5cblx0XHRcdFx0aWYoIHNoYWRvdyAhPT0gJ25vbmUnKVxuXHRcdFx0XHRcdCh0aGlzLiNjb250ZW50IGFzIFNoYWRvd1Jvb3QpLmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKC4uLnN0eWxlc2hlZXRzKTtcblx0XHRcdFx0ZWxzZSB7XG5cblx0XHRcdFx0XHRjb25zdCBjc3NzZWxlY3RvciA9IHRoaXMuQ1NTU2VsZWN0b3I7XG5cblx0XHRcdFx0XHQvLyBpZiBub3QgeWV0IGluc2VydGVkIDpcblx0XHRcdFx0XHRpZiggISBhbHJlYWR5RGVjbGFyZWRDU1MuaGFzKGNzc3NlbGVjdG9yKSApIHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0bGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuXHRcdFx0XHRcdFx0c3R5bGUuc2V0QXR0cmlidXRlKCdmb3InLCBjc3NzZWxlY3Rvcik7XG5cblx0XHRcdFx0XHRcdGxldCBodG1sX3N0eWxlc2hlZXRzID0gXCJcIjtcblxuXHRcdFx0XHRcdFx0Zm9yKGxldCBzdHlsZSBvZiBzdHlsZXNoZWV0cylcblx0XHRcdFx0XHRcdFx0Zm9yKGxldCBydWxlIG9mIHN0eWxlLmNzc1J1bGVzKVxuXHRcdFx0XHRcdFx0XHRcdGh0bWxfc3R5bGVzaGVldHMgKz0gcnVsZS5jc3NUZXh0ICsgJ1xcbic7XG5cblx0XHRcdFx0XHRcdHN0eWxlLmlubmVySFRNTCA9IGh0bWxfc3R5bGVzaGVldHMucmVwbGFjZSgnOmhvc3QnLCBgOmlzKCR7Y3Nzc2VsZWN0b3J9KWApO1xuXG5cdFx0XHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZChzdHlsZSk7XG5cblx0XHRcdFx0XHRcdGFscmVhZHlEZWNsYXJlZENTUy5hZGQoY3Nzc2VsZWN0b3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBjb250ZW50XG5cdFx0XHRpZiggY29udGVudCAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRsZXQgdGVtcGxhdGVfZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cdFx0XHRcdGxldCBzdHIgPSAoY29udGVudCBhcyBzdHJpbmcpLnJlcGxhY2UoL1xcJFxceyguKz8pXFx9L2csIChfLCBtYXRjaCkgPT4gdGhpcy5nZXRBdHRyaWJ1dGUobWF0Y2gpPz8nJylcblx0ICAgIFx0XHR0ZW1wbGF0ZV9lbGVtLmlubmVySFRNTCA9IHN0cjtcblx0ICAgIFx0XHR0aGlzLiNjb250ZW50LmFwcGVuZCguLi50ZW1wbGF0ZV9lbGVtLmNvbnRlbnQuY2hpbGROb2Rlcyk7XG5cdCAgICBcdH1cblxuXHQgICAgXHQvLyBidWlsZFxuXG5cdCAgICBcdC8vIGg0Y2ssIG9rYXkgYmVjYXVzZSBKUyBpcyBtb25vdGhyZWFkZWQuXG5cdFx0XHRfX2NzdHJfaG9zdCAgID0gdGhpcztcblxuXHQgICAgXHRsZXQgb2JqID0gbmV3IExpc3MoKTtcblxuXHQgICAgXHQvKmlmKCBvYmogaW5zdGFuY2VvZiBQcm9taXNlKVxuXHQgICAgXHRcdG9iaiA9IGF3YWl0IG9iajsqL1xuXG5cdFx0XHR0aGlzLiNBUEkgPSBvYmogYXMgSW5zdGFuY2VUeXBlPFQ+O1xuXG5cdFx0XHQvLyBkZWZhdWx0IHNsb3Rcblx0XHRcdGlmKCB0aGlzLmhhc1NoYWRvdyAmJiB0aGlzLiNjb250ZW50LmNoaWxkTm9kZXMubGVuZ3RoID09PSAwIClcblx0XHRcdFx0dGhpcy4jY29udGVudC5hcHBlbmQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Nsb3QnKSApO1xuXG5cdFx0XHRpZiggdGhpcy4jcmVzb2x2ZSAhPT0gbnVsbClcblx0XHRcdFx0dGhpcy4jcmVzb2x2ZSh0aGlzLiNBUEkpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy4jQVBJO1xuXHRcdH1cblxuXHRcdGdldCBwYXJhbXMoKTogUGFyYW1zIHtcblx0XHRcdHJldHVybiB0aGlzLiNwYXJhbXM7XG5cdFx0fVxuXHRcdHB1YmxpYyBzZXRQYXJhbTxUIGV4dGVuZHMga2V5b2YgUGFyYW1zPihuYW1lOiBULCB2YWx1ZTogUGFyYW1zW1RdKSB7XG5cdFx0XHRpZiggdGhpcy5pc0luaXQgKVxuXHRcdFx0XHRyZXR1cm4gdGhpcy4jQVBJIS5zZXRQYXJhbShuYW1lLCB2YWx1ZSk7XG5cblx0XHRcdHRoaXMuI3BhcmFtc1tuYW1lXSA9IHZhbHVlOyAvLyB3aWxsIGJlIGdpdmVuIHRvIGNvbnN0cnVjdG9yLlxuXHRcdH1cblxuXG5cdFx0LyoqKiBjb250ZW50ICoqKi9cblx0XHQjY29udGVudDogSG9zdHxTaGFkb3dSb290fG51bGwgPSBudWxsO1xuXG5cdFx0Z2V0IGNvbnRlbnQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4jY29udGVudDtcblx0XHR9XG5cblx0XHRnZXRQYXJ0KG5hbWU6IHN0cmluZykge1xuXHRcdFx0cmV0dXJuIHRoaXMuaGFzU2hhZG93XG5cdFx0XHRcdFx0PyB0aGlzLiNjb250ZW50Py5xdWVyeVNlbGVjdG9yKGA6OnBhcnQoJHtuYW1lfSlgKVxuXHRcdFx0XHRcdDogdGhpcy4jY29udGVudD8ucXVlcnlTZWxlY3RvcihgW3BhcnQ9XCIke25hbWV9XCJdYCk7XG5cdFx0fVxuXHRcdGdldFBhcnRzKG5hbWU6IHN0cmluZykge1xuXHRcdFx0cmV0dXJuIHRoaXMuaGFzU2hhZG93XG5cdFx0XHRcdFx0PyB0aGlzLiNjb250ZW50Py5xdWVyeVNlbGVjdG9yQWxsKGA6OnBhcnQoJHtuYW1lfSlgKVxuXHRcdFx0XHRcdDogdGhpcy4jY29udGVudD8ucXVlcnlTZWxlY3RvckFsbChgW3BhcnQ9XCIke25hbWV9XCJdYCk7XG5cdFx0fVxuXG5cdFx0cHJvdGVjdGVkIGdldCBoYXNTaGFkb3coKTogYm9vbGVhbiB7XG5cdFx0XHRyZXR1cm4gc2hhZG93ICE9PSAnbm9uZSc7XG5cdFx0fVxuXG5cdFx0LyoqKiBDU1MgKioqL1xuXG5cdFx0Z2V0IENTU1NlbGVjdG9yKCkge1xuXG5cdFx0XHRpZih0aGlzLmhhc1NoYWRvdyB8fCAhIHRoaXMuaGFzQXR0cmlidXRlKFwiaXNcIikgKVxuXHRcdFx0XHRyZXR1cm4gdGhpcy50YWdOYW1lO1xuXG5cdFx0XHRyZXR1cm4gYCR7dGhpcy50YWdOYW1lfVtpcz1cIiR7dGhpcy5nZXRBdHRyaWJ1dGUoXCJpc1wiKX1cIl1gO1xuXHRcdH1cblxuXHRcdC8qKiogYXR0cnMgKioqL1xuXHRcdCNhdHRyc19mbGFnID0gZmFsc2U7XG5cblx0XHQjYXR0cmlidXRlcyAgICAgICAgID0ge30gYXMgUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD47XG5cdFx0I2F0dHJpYnV0ZXNEZWZhdWx0cyA9IHt9IGFzIFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuXHRcdCNhdHRycyA9IG5ldyBBdHRyaWJ1dGVzKFxuXHRcdFx0dGhpcy4jYXR0cmlidXRlcyxcblx0XHRcdHRoaXMuI2F0dHJpYnV0ZXNEZWZhdWx0cyxcblx0XHRcdChuYW1lOiBBdHRycywgdmFsdWU6c3RyaW5nfG51bGwpID0+IHtcblxuXHRcdFx0XHR0aGlzLiNhdHRyaWJ1dGVzW25hbWVdID0gdmFsdWU7XG5cblx0XHRcdFx0dGhpcy4jYXR0cnNfZmxhZyA9IHRydWU7IC8vIGRvIG5vdCB0cmlnZ2VyIG9uQXR0cnNDaGFuZ2VkLlxuXHRcdFx0XHRpZiggdmFsdWUgPT09IG51bGwpXG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHR0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0KSBhcyB1bmtub3duIGFzIFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuXG5cdFx0c2V0QXR0ckRlZmF1bHQobmFtZTogQXR0cnMsIHZhbHVlOiBzdHJpbmd8bnVsbCkge1xuXHRcdFx0aWYoIHZhbHVlID09PSBudWxsKVxuXHRcdFx0XHRkZWxldGUgdGhpcy4jYXR0cmlidXRlc0RlZmF1bHRzW25hbWVdO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHR0aGlzLiNhdHRyaWJ1dGVzRGVmYXVsdHNbbmFtZV0gPSB2YWx1ZTtcblx0XHR9XG5cblx0XHRnZXQgYXR0cnMoKTogUmVhZG9ubHk8UmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD4+IHtcblxuXHRcdFx0cmV0dXJuIHRoaXMuI2F0dHJzO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuXHRcdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lICAgIDogQXR0cnMsXG5cdFx0XHRcdFx0XHRcdFx0IG9sZFZhbHVlOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdFx0IG5ld1ZhbHVlOiBzdHJpbmcpIHtcblxuXHRcdFx0aWYodGhpcy4jYXR0cnNfZmxhZykge1xuXHRcdFx0XHR0aGlzLiNhdHRyc19mbGFnID0gZmFsc2U7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy4jYXR0cmlidXRlc1tuYW1lXSA9IG5ld1ZhbHVlO1xuXHRcdFx0aWYoICEgdGhpcy5pc0luaXQgKVxuXHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdGlmKCAodGhpcy4jQVBJISBhcyBhbnkpLm9uQXR0ckNoYW5nZWQobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0dGhpcy4jYXR0cnNbbmFtZV0gPSBvbGRWYWx1ZTsgLy8gcmV2ZXJ0IHRoZSBjaGFuZ2UuXG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiBMSVNTSG9zdEJhc2U7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgZGVmaW5lID09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgX0RPTUNvbnRlbnRMb2FkZWQgPSBuZXcgUHJvbWlzZTx2b2lkPiggKHJlc29sdmUpID0+IHtcblxuXHRpZihkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImludGVyYWN0aXZlXCIgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKVxuXHRcdHJldHVybiByZXNvbHZlKCk7XG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblx0XHRyZXNvbHZlKCk7XG5cdH0sIHRydWUpO1xufSk7XG5cbkxJU1MuZGVmaW5lID0gYXN5bmMgZnVuY3Rpb248RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdFx0XHQgSG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdFx0ICAgICBBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdFx0ICAgICBQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+LFxuXHRcdFx0XHRcdFx0ICAgXHQgVCBleHRlbmRzIExJU1NSZXR1cm5UeXBlPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXM+Pihcblx0XHRcdFx0XHRcdCAgIFx0dGFnbmFtZTogc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRDb21wb25lbnRDbGFzczogVCxcblx0XHRcdFx0XHRcdFx0e2RlcGVuZGVuY2llcywgcGFyYW1zfToge3BhcmFtcz86IFBhcnRpYWw8UGFyYW1zPiwgZGVwZW5kZW5jaWVzPzogcmVhZG9ubHkgUHJvbWlzZTxzdHJpbmc+W119ID0ge30pIHtcblxuXHRkZXBlbmRlbmNpZXM/Pz1bXTtcblx0cGFyYW1zICAgICAgPz89IHt9O1xuXG5cdGNvbnN0IENsYXNzID0gQ29tcG9uZW50Q2xhc3MuUGFyYW1ldGVycy5ob3N0O1xuXHRsZXQgTElTU0Jhc2U6IGFueSA9IENvbXBvbmVudENsYXNzO1xuXHRsZXQgaHRtbHRhZyA9IF9lbGVtZW50MnRhZ25hbWUoQ2xhc3MpPz91bmRlZmluZWQ7XG5cblx0YXdhaXQgUHJvbWlzZS5hbGwoW19ET01Db250ZW50TG9hZGVkLCAuLi5kZXBlbmRlbmNpZXMsIC4uLkxJU1NCYXNlLlBhcmFtZXRlcnMuZGVwZW5kZW5jaWVzXSk7XG5cblx0Y29uc3QgTElTU2NsYXNzID0gYnVpbGRMSVNTSG9zdDxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zLCBUPihDb21wb25lbnRDbGFzcywgcGFyYW1zKTtcblx0XG5cdGNvbnN0IG9wdHMgPSBodG1sdGFnID09PSB1bmRlZmluZWQgPyB7fVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgOiB7ZXh0ZW5kczogaHRtbHRhZ307XG5cdFxuXHRjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnbmFtZSwgTElTU2NsYXNzLCBvcHRzKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgU2hhZG93Um9vdCB0b29scyA9PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3Qgc2hhcmVkQ1NTID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbmRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHNoYXJlZENTUyk7XG5cbkxJU1MuaW5zZXJ0R2xvYmFsQ1NTUnVsZXMgPSBmdW5jdGlvbihjc3M6IHN0cmluZ3xIVE1MU3R5bGVFbGVtZW50KSB7XG5cblx0bGV0IGNzc19zdHlsZSE6IENTU1N0eWxlU2hlZXQ7XG5cblx0aWYoIGNzcyBpbnN0YW5jZW9mIEhUTUxTdHlsZUVsZW1lbnQgKVxuXHRcdGNzc19zdHlsZSA9IGNzcy5zaGVldCE7XG5cdGlmKCB0eXBlb2YgY3NzID09PSBcInN0cmluZ1wiKSB7XG5cdFx0Y3NzX3N0eWxlID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcblx0XHRjc3Nfc3R5bGUucmVwbGFjZVN5bmMoY3NzKTtcblx0fVxuXG5cdGZvcihsZXQgcnVsZSBvZiBjc3Nfc3R5bGUuY3NzUnVsZXMpXG5cdFx0c2hhcmVkQ1NTLmluc2VydFJ1bGUocnVsZS5jc3NUZXh0KTtcbn1cblxudHlwZSBEZWxlZ2F0ZWRIYW5kbGVyID0gW3N0cmluZywgKGV2OiBNb3VzZUV2ZW50KSA9PiB2b2lkXTtcbmNvbnN0IERFTEVHQVRFRF9FVkVOVFMgPSB7XG5cdFwiY2xpY2tcIjogW10gYXMgRGVsZWdhdGVkSGFuZGxlcltdLFxuXHRcImRibGNsaWNrXCI6IFtdIGFzIERlbGVnYXRlZEhhbmRsZXJbXVxufTtcblxuY29uc3QgQUxSRUFEWV9QUk9DRVNTRUQgPSBTeW1ib2woKTtcblxuZnVuY3Rpb24gb25DbGlja0V2ZW50KGV2OiBNb3VzZUV2ZW50KSB7XG5cblx0aWYoIChldiBhcyBhbnkpW0FMUkVBRFlfUFJPQ0VTU0VEXSA9PT0gdHJ1ZSApXG5cdFx0cmV0dXJuO1xuXHQoZXYgYXMgYW55KVtBTFJFQURZX1BST0NFU1NFRF0gPSB0cnVlO1xuXG5cdGNvbnN0IGhhbmRsZXJzID0gREVMRUdBVEVEX0VWRU5UU1tldi50eXBlIGFzIGtleW9mIHR5cGVvZiBERUxFR0FURURfRVZFTlRTXTtcblxuXHRmb3IobGV0IGVsZW0gb2YgZXYuY29tcG9zZWRQYXRoKCkgKSB7XG5cdFxuXHRcdGlmKCBlbGVtIGluc3RhbmNlb2YgU2hhZG93Um9vdCB8fCBlbGVtID09PSBkb2N1bWVudCB8fCBlbGVtID09PSB3aW5kb3cgKVxuXHRcdFx0Y29udGludWU7XG5cblx0XHR2YXIgdGFyZ2V0ID0gZWxlbSBhcyBFbGVtZW50O1xuXG5cdFx0Zm9yKGxldCBbc2VsZWN0b3IsIGhhbmRsZXJdIG9mIGhhbmRsZXJzKSB7XG5cdFx0XHRpZiggdGFyZ2V0Lm1hdGNoZXMoc2VsZWN0b3IpIClcblx0XHRcdFx0aGFuZGxlcihldik7XG5cdFx0fVxuXHR9XG59XG5cbkxJU1MuaW5zZXJ0R2xvYmFsRGVsZWdhdGVkTGlzdGVuZXIgPSBmdW5jdGlvbihldmVudF9uYW1lOiBrZXlvZiB0eXBlb2YgREVMRUdBVEVEX0VWRU5UUywgc2VsZWN0b3I6IHN0cmluZywgaGFuZGxlcjogKGV2OiBNb3VzZUV2ZW50KSA9PiB2b2lkICkge1xuXHRERUxFR0FURURfRVZFTlRTW2V2ZW50X25hbWVdLnB1c2goW3NlbGVjdG9yLCBoYW5kbGVyXSlcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrRXZlbnQpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBvbkNsaWNrRXZlbnQpO1xuXG5MSVNTLmNsb3Nlc3QgPSBmdW5jdGlvbiBjbG9zZXN0PEUgZXh0ZW5kcyBFbGVtZW50PihzZWxlY3Rvcjogc3RyaW5nLCBlbGVtZW50OiBFbGVtZW50KSB7XG5cblx0d2hpbGUodHJ1ZSkge1xuXHRcdHZhciByZXN1bHQgPSBlbGVtZW50LmNsb3Nlc3Q8RT4oc2VsZWN0b3IpO1xuXG5cdFx0aWYoIHJlc3VsdCAhPT0gbnVsbClcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cblx0XHRjb25zdCByb290ID0gZWxlbWVudC5nZXRSb290Tm9kZSgpO1xuXHRcdGlmKCAhIChcImhvc3RcIiBpbiByb290KSApXG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdGVsZW1lbnQgPSAocm9vdCBhcyBTaGFkb3dSb290KS5ob3N0O1xuXHR9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgaGVscGVycyA9PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBpbmZlclBhcmFtczxUPiA9IFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSwgaW5mZXIgUCBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pj4gPyBQIDogbmV2ZXI7XG5cbnR5cGUgQlVJTERfT1BUSU9OUzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4gPSBQYXJ0aWFsPHtcblx0XHRcdFx0XHQgIFx0cGFyYW1zICAgIDogUGFydGlhbDxpbmZlclBhcmFtczxUPj4sXG5cdFx0XHRcdFx0ICBcdGNvbnRlbnRcdCAgOiBzdHJpbmd8Tm9kZXxyZWFkb25seSBOb2RlW10sXG5cdFx0XHRcdFx0XHRpZCBcdFx0ICA6IHN0cmluZyxcblx0XHRcdFx0XHQgIFx0Y2xhc3Nlc1x0ICA6IHJlYWRvbmx5IHN0cmluZ1tdLFxuXHRcdFx0XHRcdCAgXHRjc3N2YXJzICAgOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+Pixcblx0XHRcdFx0XHQgIFx0YXR0cnMgXHQgIDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgc3RyaW5nfGJvb2xlYW4+Pixcblx0XHRcdFx0XHQgIFx0ZGF0YSBcdCAgOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmd8Ym9vbGVhbj4+LFxuXHRcdFx0XHRcdCAgXHRsaXN0ZW5lcnMgOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCAoZXY6IEV2ZW50KSA9PiB2b2lkPj5cblx0XHRcdFx0XHR9PiAmICh7XG5cdFx0XHRcdFx0XHRpbml0aWFsaXplOiBmYWxzZSxcblx0XHRcdFx0XHRcdHBhcmVudDogRWxlbWVudFxuXHRcdFx0XHRcdH18e1xuXHRcdFx0XHRcdFx0aW5pdGlhbGl6ZT86IHRydWUsXG5cdFx0XHRcdFx0XHRwYXJlbnQ/OiBFbGVtZW50XG5cdFx0XHRcdFx0fSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGJ1aWxkPFQgZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPih0YWduYW1lOiBULCBvcHRpb25zPzogQlVJTERfT1BUSU9OUzxDb21wb25lbnRzW1RdPik6IFByb21pc2U8Q29tcG9uZW50c1tUXT47XG5hc3luYyBmdW5jdGlvbiBidWlsZDxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4odGFnbmFtZTogc3RyaW5nLCBvcHRpb25zPzogQlVJTERfT1BUSU9OUzxUPik6IFByb21pc2U8VD47XG5hc3luYyBmdW5jdGlvbiBidWlsZDxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4odGFnbmFtZTogc3RyaW5nLCB7XG5cdFx0cGFyYW1zICAgID0ge30sXG5cdFx0aW5pdGlhbGl6ZT0gdHJ1ZSxcblx0XHRjb250ZW50ICAgPSBbXSxcblx0XHRwYXJlbnQgICAgPSB1bmRlZmluZWQsXG5cdFx0aWQgXHRcdCAgPSB1bmRlZmluZWQsXG5cdFx0Y2xhc3NlcyAgID0gW10sXG5cdFx0Y3NzdmFycyAgID0ge30sXG5cdFx0YXR0cnMgICAgID0ge30sXG5cdFx0ZGF0YSBcdCAgPSB7fSxcblx0XHRsaXN0ZW5lcnMgPSB7fVxuXHR9OiBCVUlMRF9PUFRJT05TPFQ+ID0ge30pOiBQcm9taXNlPFQ+IHtcblxuXHRpZiggISBpbml0aWFsaXplICYmIHBhcmVudCA9PT0gbnVsbClcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJBIHBhcmVudCBtdXN0IGJlIGdpdmVuIGlmIGluaXRpYWxpemUgaXMgZmFsc2VcIik7XG5cblx0bGV0IEN1c3RvbUNsYXNzID0gYXdhaXQgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQodGFnbmFtZSk7XG5cdGxldCBlbGVtID0gbmV3IEN1c3RvbUNsYXNzKHBhcmFtcykgYXMgTElTU0hvc3Q8VD47XG5cblx0Ly8gRml4IGlzc3VlICMyXG5cdGlmKCBlbGVtLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gdGFnbmFtZSApXG5cdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoXCJpc1wiLCB0YWduYW1lKTtcblxuXHRpZiggaWQgIT09IHVuZGVmaW5lZCApXG5cdFx0ZWxlbS5pZCA9IGlkO1xuXG5cdGlmKCBjbGFzc2VzLmxlbmd0aCA+IDApXG5cdFx0ZWxlbS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBjc3N2YXJzKVxuXHRcdGVsZW0uc3R5bGUuc2V0UHJvcGVydHkoYC0tJHtuYW1lfWAsIGNzc3ZhcnNbbmFtZV0pO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBhdHRycykge1xuXG5cdFx0bGV0IHZhbHVlID0gYXR0cnNbbmFtZV07XG5cdFx0aWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpXG5cdFx0XHRlbGVtLnRvZ2dsZUF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdFx0ZWxzZVxuXHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXHR9XG5cblx0Zm9yKGxldCBuYW1lIGluIGRhdGEpIHtcblxuXHRcdGxldCB2YWx1ZSA9IGRhdGFbbmFtZV07XG5cdFx0aWYoIHZhbHVlID09PSBmYWxzZSlcblx0XHRcdGRlbGV0ZSBlbGVtLmRhdGFzZXRbbmFtZV07XG5cdFx0ZWxzZSBpZih2YWx1ZSA9PT0gdHJ1ZSlcblx0XHRcdGVsZW0uZGF0YXNldFtuYW1lXSA9IFwiXCI7XG5cdFx0ZWxzZVxuXHRcdFx0ZWxlbS5kYXRhc2V0W25hbWVdID0gdmFsdWU7XG5cdH1cblxuXHRpZiggISBBcnJheS5pc0FycmF5KGNvbnRlbnQpIClcblx0XHRjb250ZW50ID0gW2NvbnRlbnQgYXMgYW55XTtcblx0ZWxlbS5yZXBsYWNlQ2hpbGRyZW4oLi4uY29udGVudCk7XG5cblx0Zm9yKGxldCBuYW1lIGluIGxpc3RlbmVycylcblx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgbGlzdGVuZXJzW25hbWVdKTtcblxuXHRpZiggcGFyZW50ICE9PSB1bmRlZmluZWQgKVxuXHRcdHBhcmVudC5hcHBlbmQoZWxlbSk7XG5cblx0aWYoICEgZWxlbS5pc0luaXQgJiYgaW5pdGlhbGl6ZSApXG5cdFx0cmV0dXJuIGF3YWl0IExJU1MuaW5pdGlhbGl6ZShlbGVtKTtcblxuXHRyZXR1cm4gYXdhaXQgTElTUy5nZXRMSVNTKGVsZW0pO1xufVxuTElTUy5idWlsZCA9IGJ1aWxkO1xuXG5cbmZ1bmN0aW9uIGJ1aWxkU3luYzxUIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4odGFnbmFtZTogVCwgb3B0aW9ucz86IEJVSUxEX09QVElPTlM8Q29tcG9uZW50c1tUXT4pOiBDb21wb25lbnRzW1RdO1xuZnVuY3Rpb24gYnVpbGRTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+Pih0YWduYW1lOiBzdHJpbmcsIG9wdGlvbnM/OiBCVUlMRF9PUFRJT05TPFQ+KTogVDtcbmZ1bmN0aW9uIGJ1aWxkU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4odGFnbmFtZTogc3RyaW5nLCB7XG5cdFx0cGFyYW1zICAgID0ge30sXG5cdFx0aW5pdGlhbGl6ZT0gdHJ1ZSxcblx0XHRjb250ZW50ICAgPSBbXSxcblx0XHRwYXJlbnQgICAgPSB1bmRlZmluZWQsXG5cdFx0aWQgXHRcdCAgPSB1bmRlZmluZWQsXG5cdFx0Y2xhc3NlcyAgID0gW10sXG5cdFx0Y3NzdmFycyAgID0ge30sXG5cdFx0YXR0cnMgICAgID0ge30sXG5cdFx0ZGF0YSBcdCAgPSB7fSxcblx0XHRsaXN0ZW5lcnMgPSB7fVxuXHR9OiBCVUlMRF9PUFRJT05TPFQ+ID0ge30pOiBUIHtcblxuXHRpZiggISBpbml0aWFsaXplICYmIHBhcmVudCA9PT0gbnVsbClcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJBIHBhcmVudCBtdXN0IGJlIGdpdmVuIGlmIGluaXRpYWxpemUgaXMgZmFsc2VcIik7XG5cblx0bGV0IEN1c3RvbUNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ25hbWUpO1xuXHRpZihDdXN0b21DbGFzcyA9PT0gdW5kZWZpbmVkKVxuXHRcdHRocm93IG5ldyBFcnJvcihgJHt0YWduYW1lfSBub3QgZGVmaW5lZGApO1xuXHRsZXQgZWxlbSA9IG5ldyBDdXN0b21DbGFzcyhwYXJhbXMpIGFzIExJU1NIb3N0PFQ+O1xuXG5cdC8vVE9ETzogZmFjdG9yaXplLi4uXG5cblx0Ly8gRml4IGlzc3VlICMyXG5cdGlmKCBlbGVtLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gdGFnbmFtZSApXG5cdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoXCJpc1wiLCB0YWduYW1lKTtcblxuXHRpZiggaWQgIT09IHVuZGVmaW5lZCApXG5cdFx0ZWxlbS5pZCA9IGlkO1xuXG5cdGlmKCBjbGFzc2VzLmxlbmd0aCA+IDApXG5cdFx0ZWxlbS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBjc3N2YXJzKVxuXHRcdGVsZW0uc3R5bGUuc2V0UHJvcGVydHkoYC0tJHtuYW1lfWAsIGNzc3ZhcnNbbmFtZV0pO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBhdHRycykge1xuXG5cdFx0bGV0IHZhbHVlID0gYXR0cnNbbmFtZV07XG5cdFx0aWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpXG5cdFx0XHRlbGVtLnRvZ2dsZUF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdFx0ZWxzZVxuXHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXHR9XG5cblx0Zm9yKGxldCBuYW1lIGluIGRhdGEpIHtcblxuXHRcdGxldCB2YWx1ZSA9IGRhdGFbbmFtZV07XG5cdFx0aWYoIHZhbHVlID09PSBmYWxzZSlcblx0XHRcdGRlbGV0ZSBlbGVtLmRhdGFzZXRbbmFtZV07XG5cdFx0ZWxzZSBpZih2YWx1ZSA9PT0gdHJ1ZSlcblx0XHRcdGVsZW0uZGF0YXNldFtuYW1lXSA9IFwiXCI7XG5cdFx0ZWxzZVxuXHRcdFx0ZWxlbS5kYXRhc2V0W25hbWVdID0gdmFsdWU7XG5cdH1cblxuXHRpZiggISBBcnJheS5pc0FycmF5KGNvbnRlbnQpIClcblx0XHRjb250ZW50ID0gW2NvbnRlbnQgYXMgYW55XTtcblx0ZWxlbS5yZXBsYWNlQ2hpbGRyZW4oLi4uY29udGVudCk7XG5cblx0Zm9yKGxldCBuYW1lIGluIGxpc3RlbmVycylcblx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgbGlzdGVuZXJzW25hbWVdKTtcblxuXHRpZiggcGFyZW50ICE9PSB1bmRlZmluZWQgKVxuXHRcdHBhcmVudC5hcHBlbmQoZWxlbSk7XG5cblx0aWYoICEgZWxlbS5pc0luaXQgJiYgaW5pdGlhbGl6ZSApXG5cdFx0TElTUy5pbml0aWFsaXplU3luYyhlbGVtKTtcblxuXHRyZXR1cm4gTElTUy5nZXRMSVNTU3luYyhlbGVtKTtcbn1cbkxJU1MuYnVpbGRTeW5jID0gYnVpbGRTeW5jO1xuXG5MSVNTLndoZW5EZWZpbmVkICAgID0gYXN5bmMgZnVuY3Rpb24odGFnbmFtZTogc3RyaW5nLCBjYWxsYmFjaz86ICgpID0+IHZvaWQgKSA6IFByb21pc2U8dm9pZD4ge1xuXG5cdGF3YWl0IGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKHRhZ25hbWUpO1xuXG5cdGlmKCBjYWxsYmFjayAhPT0gdW5kZWZpbmVkKVxuXHRcdGNhbGxiYWNrKCk7XG5cblx0cmV0dXJuO1xufVxuTElTUy53aGVuQWxsRGVmaW5lZCA9IGFzeW5jIGZ1bmN0aW9uKHRhZ25hbWVzOiByZWFkb25seSBzdHJpbmdbXSwgY2FsbGJhY2s/OiAoKSA9PiB2b2lkICkgOiBQcm9taXNlPHZvaWQ+IHtcblxuXHRhd2FpdCBQcm9taXNlLmFsbCggdGFnbmFtZXMubWFwKCB0ID0+IGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKHQpICkgKVxuXG5cdGlmKCBjYWxsYmFjayAhPT0gdW5kZWZpbmVkKVxuXHRcdGNhbGxiYWNrKCk7XG5cbn1cblxuTElTUy5pc0RlZmluZWQgPSBmdW5jdGlvbihuYW1lOiBzdHJpbmcpIHtcblx0cmV0dXJuIGN1c3RvbUVsZW1lbnRzLmdldChuYW1lKTtcbn1cblxuTElTUy5zZWxlY3RvciA9IGZ1bmN0aW9uKG5hbWU/OiBzdHJpbmcpIHtcblx0aWYobmFtZSA9PT0gdW5kZWZpbmVkKSAvLyBqdXN0IGFuIGg0Y2tcblx0XHRyZXR1cm4gXCJcIjtcblx0cmV0dXJuIGA6aXMoJHtuYW1lfSwgW2lzPVwiJHtuYW1lfVwiXSlgO1xufVxuXG5MSVNTLmdldExJU1MgICAgPSBhc3luYyBmdW5jdGlvbjxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oIGVsZW1lbnQ6IEVsZW1lbnQgKSB7XG5cblx0YXdhaXQgTElTUy53aGVuRGVmaW5lZCggTElTUy5nZXROYW1lKGVsZW1lbnQpICk7XG5cblx0cmV0dXJuIChlbGVtZW50IGFzIExJU1NIb3N0PFQ+KS5MSVNTOyAvLyBlbnN1cmUgaW5pdGlhbGl6ZWQuXG59XG5MSVNTLmdldExJU1NTeW5jPSBmdW5jdGlvbjxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oIGVsZW1lbnQ6IEVsZW1lbnQgKSB7XG5cblx0Y29uc3QgbmFtZSA9IExJU1MuZ2V0TmFtZShlbGVtZW50KTtcblx0aWYoICEgTElTUy5pc0RlZmluZWQoIG5hbWUgKSApXG5cdFx0dGhyb3cgbmV3IEVycm9yKGAke25hbWV9IGhhc24ndCBiZWVuIGRlZmluZWQgeWV0LmApO1xuXG5cdGxldCBob3N0ID0gZWxlbWVudCBhcyBMSVNTSG9zdDxUPjtcblxuXHRpZiggISBob3N0LmlzSW5pdCApXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW5zdGFuY2UgaGFzbid0IGJlZW4gaW5pdGlhbGl6ZWQgeWV0LlwiKTtcblxuXHRyZXR1cm4gaG9zdC5MSVNTU3luYztcbn1cbkxJU1MuaW5pdGlhbGl6ZSA9IGFzeW5jIGZ1bmN0aW9uPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PiggZWxlbWVudDogRWxlbWVudCkge1xuXG5cdGF3YWl0IExJU1Mud2hlbkRlZmluZWQoIExJU1MuZ2V0TmFtZShlbGVtZW50KSApO1xuXG5cdHJldHVybiBhd2FpdCAoZWxlbWVudCBhcyBMSVNTSG9zdDxUPikuaW5pdGlhbGl6ZSgpOyAvLyBlbnN1cmUgaW5pdGlhbGl6YXRpb24uXG59XG5cbkxJU1MuaW5pdGlhbGl6ZVN5bmMgPSBmdW5jdGlvbjxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oIGVsZW1lbnQ6IEVsZW1lbnQpIHtcblxuXHRjb25zdCBuYW1lID0gTElTUy5nZXROYW1lKGVsZW1lbnQpO1xuXHRpZiggISBMSVNTLmlzRGVmaW5lZChuYW1lKSApXG5cdFx0dGhyb3cgbmV3IEVycm9yKGAke25hbWV9IG5vdCBkZWZpbmVkYCk7XG5cblx0cmV0dXJuIChlbGVtZW50IGFzIExJU1NIb3N0PFQ+KS5pbml0aWFsaXplKCk7IC8vIGVuc3VyZSBpbml0aWFsaXphdGlvbi5cbn1cblxuTElTUy5nZXROYW1lID0gZnVuY3Rpb24oIGVsZW1lbnQ6IEVsZW1lbnQgKTogc3RyaW5nIHtcblxuXHRjb25zdCBuYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lzJykgPz8gZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFxuXHRpZiggISBuYW1lLmluY2x1ZGVzKCctJykgKVxuXHRcdHRocm93IG5ldyBFcnJvcihgRWxlbWVudCAke25hbWV9IGlzIG5vdCBhIFdlYkNvbXBvbmVudGApO1xuXG5cdHJldHVybiBuYW1lO1xufVxuXG5mdW5jdGlvbiBfYnVpbGRRUyhzZWxlY3Rvcjogc3RyaW5nLCB0YWduYW1lX29yX3BhcmVudD86IHN0cmluZyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCwgcGFyZW50OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXHRcblx0aWYoIHRhZ25hbWVfb3JfcGFyZW50ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHRhZ25hbWVfb3JfcGFyZW50ICE9PSAnc3RyaW5nJykge1xuXHRcdHBhcmVudCA9IHRhZ25hbWVfb3JfcGFyZW50O1xuXHRcdHRhZ25hbWVfb3JfcGFyZW50ID0gdW5kZWZpbmVkO1xuXHR9XG5cblx0cmV0dXJuIFtgJHtzZWxlY3Rvcn0ke0xJU1Muc2VsZWN0b3IodGFnbmFtZV9vcl9wYXJlbnQgYXMgc3RyaW5nfHVuZGVmaW5lZCl9YCwgcGFyZW50XSBhcyBjb25zdDtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBRdWVyeVNlbGVjdG9ycyA9PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5hc3luYyBmdW5jdGlvbiBxczxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTxUPjtcbmFzeW5jIGZ1bmN0aW9uIHFzPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPCBDb21wb25lbnRzW05dID47XG5hc3luYyBmdW5jdGlvbiBxczxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LFxuXHRcdFx0XHRcdFx0cGFyZW50ICA6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cblx0W3NlbGVjdG9yLCBwYXJlbnRdID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBwYXJlbnQpO1xuXG5cdGxldCByZXN1bHQgPSBhd2FpdCBMSVNTLnFzbzxUPihzZWxlY3RvciwgcGFyZW50KTtcblx0aWYocmVzdWx0ID09PSBudWxsKVxuXHRcdHRocm93IG5ldyBFcnJvcihgRWxlbWVudCAke3NlbGVjdG9yfSBub3QgZm91bmRgKTtcblxuXHRyZXR1cm4gcmVzdWx0IVxufVxuTElTUy5xcyAgPSBxc1xuXG5hc3luYyBmdW5jdGlvbiBxc288VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8VD47XG5hc3luYyBmdW5jdGlvbiBxc288TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8IENvbXBvbmVudHNbTl0gPjtcbmFzeW5jIGZ1bmN0aW9uIHFzbzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LFxuXHRcdFx0XHRcdFx0cGFyZW50ICA6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cblx0W3NlbGVjdG9yLCBwYXJlbnRdID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBwYXJlbnQpO1xuXG5cdGNvbnN0IGVsZW1lbnQgPSBwYXJlbnQucXVlcnlTZWxlY3RvcjxMSVNTSG9zdDxUPj4oc2VsZWN0b3IpO1xuXHRpZiggZWxlbWVudCA9PT0gbnVsbCApXG5cdFx0cmV0dXJuIG51bGw7XG5cblx0cmV0dXJuIGF3YWl0IExJU1MuZ2V0TElTUyggZWxlbWVudCApO1xufVxuTElTUy5xc28gPSBxc29cblxuYXN5bmMgZnVuY3Rpb24gcXNhPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPFRbXT47XG5hc3luYyBmdW5jdGlvbiBxc2E8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8IENvbXBvbmVudHNbTl1bXSA+O1xuYXN5bmMgZnVuY3Rpb24gcXNhPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsXG5cdFx0XHRcdFx0XHRwYXJlbnQgIDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblxuXHRbc2VsZWN0b3IsIHBhcmVudF0gPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIHBhcmVudCk7XG5cblx0Y29uc3QgZWxlbWVudHMgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbDxMSVNTSG9zdDxUPj4oc2VsZWN0b3IpO1xuXG5cdGxldCBpZHggPSAwO1xuXHRjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPFQ+PiggZWxlbWVudHMubGVuZ3RoICk7XG5cdGZvcihsZXQgZWxlbWVudCBvZiBlbGVtZW50cylcblx0XHRwcm9taXNlc1tpZHgrK10gPSBMSVNTLmdldExJU1MoIGVsZW1lbnQgKTtcblxuXHRyZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufVxuTElTUy5xc2EgPSBxc2E7XG5cbmFzeW5jIGZ1bmN0aW9uIHFzYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdGVsZW1lbnQgIDogRWxlbWVudCk6IFByb21pc2U8VD47XG5hc3luYyBmdW5jdGlvbiBxc2M8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA6IEVsZW1lbnQpOiBQcm9taXNlPCBDb21wb25lbnRzW05dID47XG5hc3luYyBmdW5jdGlvbiBxc2M8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnQsXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA/OiBFbGVtZW50KSB7XG5cblx0Y29uc3QgcmVzID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBlbGVtZW50KTtcblx0XG5cdGNvbnN0IHJlc3VsdCA9IChyZXNbMV0gYXMgdW5rbm93biBhcyBFbGVtZW50KS5jbG9zZXN0PExJU1NIb3N0PFQ+PihyZXNbMF0pO1xuXHRpZihyZXN1bHQgPT09IG51bGwpXG5cdFx0cmV0dXJuIG51bGw7XG5cblx0cmV0dXJuIGF3YWl0IExJU1MuZ2V0TElTUyhyZXN1bHQpO1xufVxuTElTUy5xc2MgPSBxc2M7XG5cbmZ1bmN0aW9uIHFzU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogVDtcbmZ1bmN0aW9uIHFzU3luYzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogQ29tcG9uZW50c1tOXTtcbmZ1bmN0aW9uIHFzU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LFxuXHRcdFx0XHRcdFx0cGFyZW50ICA6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cblx0W3NlbGVjdG9yLCBwYXJlbnRdID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBwYXJlbnQpO1xuXG5cdGNvbnN0IGVsZW1lbnQgPSBwYXJlbnQucXVlcnlTZWxlY3RvcjxMSVNTSG9zdDxUPj4oc2VsZWN0b3IpO1xuXG5cdGlmKCBlbGVtZW50ID09PSBudWxsIClcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEVsZW1lbnQgJHtzZWxlY3Rvcn0gbm90IGZvdW5kYCk7XG5cblx0cmV0dXJuIExJU1MuZ2V0TElTU1N5bmMoIGVsZW1lbnQgKTtcbn1cbkxJU1MucXNTeW5jID0gcXNTeW5jO1xuXG5mdW5jdGlvbiBxc2FTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBUW107XG5mdW5jdGlvbiBxc2FTeW5jPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBDb21wb25lbnRzW05dW107XG5mdW5jdGlvbiBxc2FTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsXG5cdFx0XHRcdFx0XHRwYXJlbnQgIDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblxuXHRbc2VsZWN0b3IsIHBhcmVudF0gPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIHBhcmVudCk7XG5cblx0Y29uc3QgZWxlbWVudHMgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbDxMSVNTSG9zdDxUPj4oc2VsZWN0b3IpO1xuXG5cdGxldCBpZHggPSAwO1xuXHRjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8VD4oIGVsZW1lbnRzLmxlbmd0aCApO1xuXHRmb3IobGV0IGVsZW1lbnQgb2YgZWxlbWVudHMpXG5cdFx0cmVzdWx0W2lkeCsrXSA9IExJU1MuZ2V0TElTU1N5bmMoIGVsZW1lbnQgKTtcblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuTElTUy5xc2FTeW5jID0gcXNhU3luYztcblxuZnVuY3Rpb24gcXNjU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdGVsZW1lbnQgIDogRWxlbWVudCk6IFQ7XG5mdW5jdGlvbiBxc2NTeW5jPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgOiBFbGVtZW50KTogQ29tcG9uZW50c1tOXTtcbmZ1bmN0aW9uIHFzY1N5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnQsXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA/OiBFbGVtZW50KSB7XG5cblx0Y29uc3QgcmVzID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBlbGVtZW50KTtcblx0XG5cdGNvbnN0IHJlc3VsdCA9IChyZXNbMV0gYXMgdW5rbm93biBhcyBFbGVtZW50KS5jbG9zZXN0PExJU1NIb3N0PFQ+PihyZXNbMF0pO1xuXHRpZihyZXN1bHQgPT09IG51bGwpXG5cdFx0cmV0dXJuIG51bGw7XG5cblx0cmV0dXJuIExJU1MuZ2V0TElTU1N5bmMocmVzdWx0KTtcbn1cbkxJU1MucXNjU3luYyA9IHFzY1N5bmM7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgQXV0byA9PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGNsYXNzIExJU1NfQXV0byBleHRlbmRzIExJU1Moe2F0dHJpYnV0ZXM6IFtcInNyY1wiXX0pIHtcblxuXHRyZWFkb25seSAja25vd25fdGFnID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cdHJlYWRvbmx5ICNkaXJlY3Rvcnk6IHN0cmluZztcblx0cmVhZG9ubHkgI3N3OiBQcm9taXNlPHZvaWQ+O1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuI3N3ID0gbmV3IFByb21pc2UoIGFzeW5jIChyZXNvbHZlKSA9PiB7XG5cdFx0XHRcblx0XHRcdGF3YWl0IG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKGAuL3N3LmpzYCk7XG5cblx0XHRcdGlmKCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyIClcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXG5cdFx0XHRuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdjb250cm9sbGVyY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXG5cdFx0Y29uc3Qgc3JjID0gdGhpcy5hdHRycy5zcmM7XG5cdFx0aWYoc3JjID09PSBudWxsKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwic3JjIGF0dHJpYnV0ZSBpcyBtaXNzaW5nLlwiKTtcblx0XHR0aGlzLiNkaXJlY3RvcnkgPSBzcmNbMF0gPT09ICcuJ1xuXHRcdFx0XHRcdFx0XHRcdD8gYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfS8ke3NyY31gXG5cdFx0XHRcdFx0XHRcdFx0OiBzcmM7XG5cblx0XHRuZXcgTXV0YXRpb25PYnNlcnZlciggKG11dGF0aW9ucykgPT4ge1xuXG5cdFx0XHRmb3IobGV0IG11dGF0aW9uIG9mIG11dGF0aW9ucylcblx0XHRcdFx0Zm9yKGxldCBhZGRpdGlvbiBvZiBtdXRhdGlvbi5hZGRlZE5vZGVzKVxuXHRcdFx0XHRcdGlmKGFkZGl0aW9uIGluc3RhbmNlb2YgRWxlbWVudClcblx0XHRcdFx0XHRcdHRoaXMuI2FkZFRhZyhhZGRpdGlvbi50YWdOYW1lKVxuXG5cdFx0fSkub2JzZXJ2ZSggZG9jdW1lbnQsIHsgY2hpbGRMaXN0OnRydWUsIHN1YnRyZWU6dHJ1ZSB9KTtcblxuXG5cdFx0Zm9yKCBsZXQgZWxlbSBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKSApXG5cdFx0XHR0aGlzLiNhZGRUYWcoZWxlbS50YWdOYW1lKTtcblx0fVxuXG5cbiAgICBwcm90ZWN0ZWQgcmVzb3VyY2VzKCkge1xuXHRcdHJldHVybiBbXG5cdFx0XHRcImluZGV4LmpzXCIsXG5cdFx0XHRcImluZGV4Lmh0bWxcIixcblx0XHRcdFwiaW5kZXguY3NzXCJcblx0XHRdO1xuICAgIH1cblxuXHRwcm90ZWN0ZWQgZGVmaW5lV2ViQ29tcG9uZW50KHRhZ25hbWU6IHN0cmluZywgZmlsZXM6IFJlY29yZDxzdHJpbmcsIGFueT4sIG9wdHM6IFBhcnRpYWw8e2NvbnRlbnQ6IHN0cmluZywgY3NzOiBzdHJpbmd9Pikge1xuXG5cdFx0Y29uc3QganMgPSBmaWxlc1tcImluZGV4LmpzXCJdO1xuXHRcdGNvbnN0IGNvbnRlbnQgPSBmaWxlc1tcImluZGV4Lmh0bWxcIl07XG5cblx0XHRsZXQga2xhc3M6IG51bGx8IFJldHVyblR5cGU8dHlwZW9mIExJU1M+ID0gbnVsbDtcblx0XHRpZigganMgIT09IHVuZGVmaW5lZCApXG5cdFx0XHRrbGFzcyA9IGpzKG9wdHMpO1xuXHRcdGVsc2UgaWYoIGNvbnRlbnQgIT09IHVuZGVmaW5lZCApXG5cdFx0XHRrbGFzcyA9IGNsYXNzIFdlYkNvbXBvbmVudCBleHRlbmRzIExJU1Mob3B0cykge307XG5cblx0XHRpZihrbGFzcyA9PT0gbnVsbClcblx0XHRcdHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBmaWxlcyBmb3IgV2ViQ29tcG9uZW50ICR7dGFnbmFtZX0uYCk7XG5cblx0XHRyZXR1cm4gTElTUy5kZWZpbmUodGFnbmFtZSwga2xhc3MpO1xuXHR9XG5cblx0YXN5bmMgI2FkZFRhZyh0YWduYW1lOiBzdHJpbmcpIHtcblxuXHRcdHRhZ25hbWUgPSB0YWduYW1lLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRpZiggdGFnbmFtZSA9PT0gJ2xpc3MtYXV0bycgfHwgdGFnbmFtZSA9PT0gJ2JsaXNzLWF1dG8nIHx8ICEgdGFnbmFtZS5pbmNsdWRlcygnLScpIHx8IHRoaXMuI2tub3duX3RhZy5oYXMoIHRhZ25hbWUgKSApXG5cdFx0XHRyZXR1cm47XG5cblx0XHR0aGlzLiNrbm93bl90YWcuYWRkKHRhZ25hbWUpO1xuXG5cdFx0YXdhaXQgdGhpcy4jc3c7IC8vIGVuc3VyZSBTVyBpcyBpbnN0YWxsZWQuXG5cblx0XHRjb25zdCBmaWxlbmFtZXMgPSB0aGlzLnJlc291cmNlcygpO1xuXHRcdGNvbnN0IHJlc291cmNlcyA9IGF3YWl0IFByb21pc2UuYWxsKCBmaWxlbmFtZXMubWFwKCBmaWxlID0+IGZpbGUuZW5kc1dpdGgoJy5qcycpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gX2ltcG9ydCAgIChgJHt0aGlzLiNkaXJlY3Rvcnl9LyR7dGFnbmFtZX0vJHtmaWxlfWAsIHRydWUpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogX2ZldGNoVGV4dChgJHt0aGlzLiNkaXJlY3Rvcnl9LyR7dGFnbmFtZX0vJHtmaWxlfWAsIHRydWUpICkgKTtcblxuXHRcdGNvbnN0IGZpbGVzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGZpbGVuYW1lcy5sZW5ndGg7ICsraSlcblx0XHRcdGlmKCByZXNvdXJjZXNbaV0gIT09IHVuZGVmaW5lZClcblx0XHRcdFx0ZmlsZXNbZmlsZW5hbWVzW2ldXSA9IHJlc291cmNlc1tpXTtcblxuXHRcdGNvbnN0IGNvbnRlbnQgPSBmaWxlc1tcImluZGV4Lmh0bWxcIl07XG5cdFx0Y29uc3QgY3NzICAgICA9IGZpbGVzW1wiaW5kZXguY3NzXCJdO1xuXG5cdFx0Y29uc3Qgb3B0czogUGFydGlhbDx7Y29udGVudDogc3RyaW5nLCBjc3M6IHN0cmluZ30+ID0ge1xuXHRcdFx0Li4uY29udGVudCAhPT0gdW5kZWZpbmVkICYmIHtjb250ZW50fSxcblx0XHRcdC4uLmNzcyAgICAgIT09IHVuZGVmaW5lZCAmJiB7Y3NzfSxcblx0XHR9O1xuXG5cdFx0cmV0dXJuIHRoaXMuZGVmaW5lV2ViQ29tcG9uZW50KHRhZ25hbWUsIGZpbGVzLCBvcHRzKTtcblx0XHRcblx0fVxufVxuTElTUy5kZWZpbmUoXCJsaXNzLWF1dG9cIiwgTElTU19BdXRvKTtcblxuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRzIHtcblx0XCJsaXNzLWF1dG9cIjogTElTU19BdXRvXG59O1xuLypcbiAqIGRlY2xhcmUgbW9kdWxlICckTElTUycge1xuICogXHRcdGludGVyZmFjZSBDb21wb25lbnRzIHtcbiAqIFx0XHRcdFwibmFtZVwiOiBjbGFzc1xuICogXHRcdH1cbiAqIH1cbiAqL1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIEV2ZW50c1RhcmdldCA9PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnR5cGUgQ3N0RXZlbnQ8RXZlbnQgZXh0ZW5kcyBzdHJpbmcsIEFyZ3M+ID0gQ3VzdG9tRXZlbnQ8QXJncz4gJiB7dHlwZTogRXZlbnR9O1xuXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50c1RhcmdldDxFdmVudHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PntcblxuXHRhZGRFdmVudExpc3RlbmVyPEV2ZW50IGV4dGVuZHMgRXhjbHVkZTxrZXlvZiBFdmVudHMsIHN5bWJvbHxudW1iZXI+Pih0eXBlOiBFdmVudCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBsaXN0ZW5lcjogbnVsbHwgKChldjogQ3N0RXZlbnQ8RXZlbnQsIEV2ZW50c1tFdmVudF0+KSA9PiB2b2lkKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBvcHRpb25zPzogYm9vbGVhbnxBZGRFdmVudExpc3RlbmVyT3B0aW9ucyk6IHZvaWQ7XG5cblx0ZGlzcGF0Y2hFdmVudDxFdmVudCBleHRlbmRzIEV4Y2x1ZGU8a2V5b2YgRXZlbnRzLCBzeW1ib2x8bnVtYmVyPj4oZXZlbnQ6IENzdEV2ZW50PEV2ZW50LCBFdmVudHNbRXZlbnRdPik6IGJvb2xlYW47XG5cblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcjxFdmVudCBleHRlbmRzIEV4Y2x1ZGU8a2V5b2YgRXZlbnRzLCBzeW1ib2x8bnVtYmVyPj4odHlwZTogRXZlbnQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxpc3RlbmVyOiBudWxsfCAoKGV2OiBDc3RFdmVudDxFdmVudCwgRXZlbnRzW0V2ZW50XT4pID0+IHZvaWQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPzogYm9vbGVhbnxBZGRFdmVudExpc3RlbmVyT3B0aW9ucyk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBDc3RtRXZlbnQ8RXZlbnQgZXh0ZW5kcyBzdHJpbmcsIEFyZ3M+IGV4dGVuZHMgQ3VzdG9tRXZlbnQ8QXJncz4ge1xuXG5cdG92ZXJyaWRlIGdldCB0eXBlKCk6IEV2ZW50IHsgcmV0dXJuIHN1cGVyLnR5cGUgYXMgRXZlbnQ7IH1cblxuXHRjb25zdHJ1Y3Rvcih0eXBlOiBFdmVudCwgYXJnczogQXJncykge1xuXHRcdHN1cGVyKHR5cGUsIHtkZXRhaWw6IGFyZ3N9KTtcblx0fVxufVxuXG5leHBvcnQgdHlwZSBFdmVudHNUYXJnZXRDc3RyPEV2ZW50cyBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pj4gPSBDb25zdHJ1Y3RvcjxFdmVudHNUYXJnZXQ8RXZlbnRzPj47XG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBpbnRlcm5hbCB0b29scyA9PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFJlc291cmNlKHJlc291cmNlOiBSZXNvdXJjZXxQcm9taXNlPFJlc291cmNlPikge1xuXG5cdHJlc291cmNlID0gYXdhaXQgcmVzb3VyY2U7XG5cblx0aWYoICEgKHJlc291cmNlIGluc3RhbmNlb2YgUmVzcG9uc2UpIClcblx0XHRyZXNvdXJjZSA9IGF3YWl0IGZldGNoKHJlc291cmNlKTtcblxuXHRyZXR1cm4gYXdhaXQgcmVzb3VyY2UudGV4dCgpO1xufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIF9mZXRjaFRleHQodXJpOiBzdHJpbmd8VVJMLCBpc0xpc3NBdXRvOiBib29sZWFuID0gZmFsc2UpIHtcblxuXHRjb25zdCBvcHRpb25zID0gaXNMaXNzQXV0b1xuXHRcdFx0XHRcdFx0PyB7aGVhZGVyczp7XCJsaXNzLWF1dG9cIjogXCJ0cnVlXCJ9fVxuXHRcdFx0XHRcdFx0OiB7fTtcblxuXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJpLCBvcHRpb25zKTtcblx0aWYocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDAgKVxuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cblx0aWYoIGlzTGlzc0F1dG8gJiYgcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJzdGF0dXNcIikhID09PSBcIjQwNFwiIClcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXG5cdHJldHVybiBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG59XG5hc3luYyBmdW5jdGlvbiBfaW1wb3J0KHVyaTogc3RyaW5nLCBpc0xpc3NBdXRvOiBib29sZWFuID0gZmFsc2UpIHtcblxuXHQvLyB0ZXN0IGZvciB0aGUgbW9kdWxlIGV4aXN0YW5jZS5cblx0aWYoaXNMaXNzQXV0byAmJiBhd2FpdCBfZmV0Y2hUZXh0KHVyaSwgaXNMaXNzQXV0bykgPT09IHVuZGVmaW5lZCApXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblxuXHR0cnkge1xuXHRcdHJldHVybiAoYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tJZ25vcmU6IHRydWUgKi8gdXJpKSkuZGVmYXVsdDtcblx0fSBjYXRjaChlKSB7XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fVxufVxuXG4vLyBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzUxMDAwNDYxL2h0bWwtZWxlbWVudC10YWctbmFtZS1mcm9tLWNvbnN0cnVjdG9yXG5jb25zdCBIVE1MQ0xBU1NfUkVHRVggPSAgL0hUTUwoXFx3KylFbGVtZW50LztcbmNvbnN0IGVsZW1lbnROYW1lTG9va3VwVGFibGUgPSB7XG4gICAgJ1VMaXN0JzogJ3VsJyxcbiAgICAnVGFibGVDYXB0aW9uJzogJ2NhcHRpb24nLFxuICAgICdUYWJsZUNlbGwnOiAndGQnLCAvLyB0aFxuICAgICdUYWJsZUNvbCc6ICdjb2wnLCAgLy8nY29sZ3JvdXAnLFxuICAgICdUYWJsZVJvdyc6ICd0cicsXG4gICAgJ1RhYmxlU2VjdGlvbic6ICd0Ym9keScsIC8vWyd0aGVhZCcsICd0Ym9keScsICd0Zm9vdCddLFxuICAgICdRdW90ZSc6ICdxJyxcbiAgICAnUGFyYWdyYXBoJzogJ3AnLFxuICAgICdPTGlzdCc6ICdvbCcsXG4gICAgJ01vZCc6ICdpbnMnLCAvLywgJ2RlbCddLFxuICAgICdNZWRpYSc6ICd2aWRlbycsLy8gJ2F1ZGlvJ10sXG4gICAgJ0ltYWdlJzogJ2ltZycsXG4gICAgJ0hlYWRpbmcnOiAnaDEnLCAvLywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2J10sXG4gICAgJ0RpcmVjdG9yeSc6ICdkaXInLFxuICAgICdETGlzdCc6ICdkbCcsXG4gICAgJ0FuY2hvcic6ICdhJ1xuICB9O1xuZnVuY3Rpb24gX2VsZW1lbnQydGFnbmFtZShDbGFzczogdHlwZW9mIEhUTUxFbGVtZW50KTogc3RyaW5nfG51bGwge1xuXG5cdGlmKCBDbGFzcyA9PT0gSFRNTEVsZW1lbnQgKVxuXHRcdHJldHVybiBudWxsO1xuXHRcblx0bGV0IGh0bWx0YWcgPSBIVE1MQ0xBU1NfUkVHRVguZXhlYyhDbGFzcy5uYW1lKSFbMV07XG5cdHJldHVybiBlbGVtZW50TmFtZUxvb2t1cFRhYmxlW2h0bWx0YWcgYXMga2V5b2YgdHlwZW9mIGVsZW1lbnROYW1lTG9va3VwVGFibGVdID8/IGh0bWx0YWcudG9Mb3dlckNhc2UoKVxufSIsImltcG9ydCBMSVNTIGZyb20gXCJMSVNTXCI7XG5pbXBvcnQgXCJzdHJ1Y3QvbWVudS50c1wiO1xuXG5pbXBvcnQgXCJzdHJ1Y3QvY2FsYy9zaGVldC50c1wiO1xuaW1wb3J0IFwic3RydWN0L2NhbGMvdG9vbGJhci50c1wiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0IH0gZnJvbSBcInN0cnVjdC9jYWxjL3NoZWV0LnRzXCI7XG5pbXBvcnQgeyBDYWxjVG9vbGJhciB9IGZyb20gXCJzdHJ1Y3QvY2FsYy90b29sYmFyLnRzXCI7XG5pbXBvcnQgeyBGb3JtYXRzIH0gZnJvbSBcInN0cnVjdC9jYWxjL2Zvcm1hdC50c1wiO1xuXG5jb25zdCBzaGVldF9mb3JtYXRfY29udGVudCA9IGF3YWl0IExJU1MucXM8Q2FsY1NoZWV0PignI3NoZWV0X2Zvcm1hdF9jb250ZW50Jyk7XG5cbnNoZWV0X2Zvcm1hdF9jb250ZW50LmdldFJhbmdlKFwiQTE6RjFcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gW1xuICAgIFwiVGFpbGxlXCIsIFwiR3Jhc1wiLCBcIkl0YWxpcXVlXCIsIFwiU291bGlnbsOpXCIsIFwiQ291bGV1ciB0ZXh0ZVwiLCBcIkNvdWxldXIgZm9uZFwiXG5dXG5cbnNoZWV0X2Zvcm1hdF9jb250ZW50LmdldFJhbmdlKFwiQTI6RjJcIikuZm9ybWF0KFwiYWxpZ25fY2VudGVyXCIpLmNvbnRlbnQgPSBcIkFcIjtcbnNoZWV0X2Zvcm1hdF9jb250ZW50LmdldFJhbmdlKFwiQTJcIikuZm9ybWF0KHtmb250X3NpemU6ICcxNXB0J30pO1xuc2hlZXRfZm9ybWF0X2NvbnRlbnQuZ2V0UmFuZ2UoXCJCMlwiKS5mb3JtYXQoJ2JvbGQnKTtcbnNoZWV0X2Zvcm1hdF9jb250ZW50LmdldFJhbmdlKFwiQzJcIikuZm9ybWF0KCdpdGFsaWMnKTtcbnNoZWV0X2Zvcm1hdF9jb250ZW50LmdldFJhbmdlKFwiRDJcIikuZm9ybWF0KCd1bmRlcmxpbmUnKTtcbnNoZWV0X2Zvcm1hdF9jb250ZW50LmdldFJhbmdlKFwiRTJcIikuZm9ybWF0KHtmb3JlZ3JvdW5kX2NvbG9yOiAnYmx1ZSd9KTtcbnNoZWV0X2Zvcm1hdF9jb250ZW50LmdldFJhbmdlKFwiRjJcIikuZm9ybWF0KHtiYWNrZ3JvdW5kX2NvbG9yOiAneWVsbG93J30pO1xuXG5jb25zdCBzaGVldF90b29sYmFyX2Zvcm1hdF9jb250ZW50ID0gYXdhaXQgTElTUy5xczxDYWxjVG9vbGJhcj4oJyNzaGVldF90b29sYmFyX2Zvcm1hdF9jb250ZW50Jyk7XG5zaGVldF90b29sYmFyX2Zvcm1hdF9jb250ZW50LnN5bmNUbyhzaGVldF9mb3JtYXRfY29udGVudCk7XG5zaGVldF90b29sYmFyX2Zvcm1hdF9jb250ZW50LmRpc2FibGVBbGxFeGNlcHQoXCJmb250X3NpemVcIiwgXCJib2xkXCIsIFwiaXRhbGljXCIsIFwidW5kZXJsaW5lXCIsIFwiZm9yZWdyb3VuZF9jb2xvclwiLCBcImJhY2tncm91bmRfY29sb3JcIik7XG5cbntcbiAgICBjb25zdCBzaGVldF9hbGlnbiA9IGF3YWl0IExJU1MucXM8Q2FsY1NoZWV0PignI3NoZWV0X2FsaWduJyk7XG5cbiAgICBzaGVldF9hbGlnbi5nZXRSYW5nZShcIkIxOkUxXCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFtcbiAgICAgICAgXCJIYXV0XCIsIFwiTWlsaWV1XCIsIFwiQmFzXCIsIFwiQWp1c3RlclwiXG4gICAgXVxuXG4gICAgc2hlZXRfYWxpZ24uZ2V0UmFuZ2UoXCJBMjpBNFwiKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIsIFwidmFsaWduX21pZGRsZVwiKS5jb250ZW50ID0gW1xuICAgICAgICBcIkdhdWNoZVwiLCBcIkNlbnRyZVwiLCBcIkRyb2l0XCJcbiAgICBdXG5cbiAgICBzaGVldF9hbGlnbi5nZXRSYW5nZShcIkIyOkQ0XCIpLmNvbnRlbnQgPSBcIkFcIjtcbiAgICBzaGVldF9hbGlnbi5nZXRSYW5nZShcIkIyOkUyXCIpLmZvcm1hdChcImFsaWduX2xlZnRcIik7XG4gICAgc2hlZXRfYWxpZ24uZ2V0UmFuZ2UoXCJCMzpFM1wiKS5mb3JtYXQoJ2FsaWduX2NlbnRlcicpO1xuICAgIHNoZWV0X2FsaWduLmdldFJhbmdlKFwiQjQ6RTRcIikuZm9ybWF0KCdhbGlnbl9yaWdodCcpO1xuICAgIHNoZWV0X2FsaWduLmdldFJhbmdlKFwiQjI6QjRcIikuZm9ybWF0KCd2YWxpZ25fdG9wJyk7XG4gICAgc2hlZXRfYWxpZ24uZ2V0UmFuZ2UoXCJDMjpDNFwiKS5mb3JtYXQoJ3ZhbGlnbl9taWRkbGUnKTtcbiAgICBzaGVldF9hbGlnbi5nZXRSYW5nZShcIkQyOkQ0XCIpLmZvcm1hdCgndmFsaWduX2JvdHRvbScpO1xuXG4gICAgc2hlZXRfYWxpZ24uZ2V0UmFuZ2UoXCJFMjpFNFwiKS5mb3JtYXQoXCJhanVzdGVyXCIpLmNvbnRlbnQgPSBgQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWA7XG5cbiAgICBjb25zdCBzaGVldF90b29sYmFyX2FsaWduID0gYXdhaXQgTElTUy5xczxDYWxjVG9vbGJhcj4oJyNzaGVldF90b29sYmFyX2FsaWduJyk7XG4gICAgc2hlZXRfdG9vbGJhcl9hbGlnbi5zeW5jVG8oc2hlZXRfYWxpZ24pO1xuICAgIHNoZWV0X3Rvb2xiYXJfYWxpZ24uZGlzYWJsZUFsbEV4Y2VwdChcImFsaWduX2xlZnRcIiwgXCJhbGlnbl9jZW50ZXJcIiwgXCJhbGlnbl9yaWdodFwiLCBcInZhbGlnbl90b3BcIiwgXCJ2YWxpZ25fbWlkZGxlXCIsIFwidmFsaWduX2JvdHRvbVwiLCBcImFqdXN0ZXJcIik7XG59XG5cbntcbiAgICBjb25zdCBzaGVldCA9IGF3YWl0IExJU1MucXM8Q2FsY1NoZWV0PignI3NoZWV0X2Zvcm1hdCcpO1xuXG4gICAgc2hlZXQuZ2V0UmFuZ2UoXCJBMTpFMVwiKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpLmNvbnRlbnQgPSBbXG4gICAgICAgIDEsIFwiTW9ubmFpZVwiLCBcIlBvdXJjZW50XCIsIFwiTm9tYnJlXCIsIFwiRGF0ZVwiXG4gICAgXTtcblxuICAgIHNoZWV0LmdldFJhbmdlKFwiQTI6QTRcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gW1xuICAgICAgICBcIk5vcm1hbFwiLCBcIisxIGRlY2ltYWxcIiwgXCItMSBkZWNpbWFsXCJcbiAgICBdO1xuXG4gICAgc2hlZXQuZ2V0UmFuZ2UoXCJCMjpFNFwiKS5jb250ZW50ID0gXCI9JEEkMVwiO1xuICAgIHNoZWV0LmdldFJhbmdlKFwiQjI6QjRcIikuZm9ybWF0KEZvcm1hdHMuZXVyb3MpO1xuICAgIHNoZWV0LmdldFJhbmdlKFwiQzI6QzRcIikuZm9ybWF0KEZvcm1hdHMucG91cmNlbnQpO1xuICAgIHNoZWV0LmdldFJhbmdlKFwiRDI6RDRcIikuZm9ybWF0KEZvcm1hdHMubnVtYmVyKTtcbiAgICBzaGVldC5nZXRSYW5nZShcIkUyOkU0XCIpLmZvcm1hdChGb3JtYXRzLmRhdGUpO1xuXG4gICAgc2hlZXQuZ2V0UmFuZ2UoXCJCMzpFM1wiKS5mb3JtYXQoe3ByZWNpc2lvbjogM30pO1xuICAgIHNoZWV0LmdldFJhbmdlKFwiQjQ6RTRcIikuZm9ybWF0KHtwcmVjaXNpb246IDF9KTtcblxuICAgIGNvbnN0IHNoZWV0X3Rvb2xiYXIgPSBhd2FpdCBMSVNTLnFzPENhbGNUb29sYmFyPignI3NoZWV0X3Rvb2xiYXJfZm9ybWF0Jyk7XG4gICAgc2hlZXRfdG9vbGJhci5zeW5jVG8oc2hlZXQpO1xuICAgIHNoZWV0X3Rvb2xiYXIuZGlzYWJsZUFsbEV4Y2VwdChcImZvcm1hdF9tb25uYWllXCIsIFwiZm9ybWF0X3BvdXJjZW50XCIsIFwiZm9ybWF0X25iXCIsIFwiZm9ybWF0X2RhdGVcIiwgXCJmb3JtYXRfemVyb19wMVwiLCBcImZvcm1hdF96ZXJvX20xXCIpO1xufVxuXG57XG4gICAgY29uc3Qgc2hlZXQgPSBhd2FpdCBMSVNTLnFzPENhbGNTaGVldD4oJyNzaGVldF9ib3JkdXJlcycpO1xuXG4gICAgc2hlZXQuZ2V0UmFuZ2UoJ0IyJykuZm9ybWF0KHtcbiAgICAgICAgYm9yZGVyX3RvcDogdHJ1ZSxcbiAgICAgICAgYm9yZGVyX2JvdHRvbTogdHJ1ZSxcbiAgICAgICAgYm9yZGVyX2xlZnQ6IHRydWUsXG4gICAgICAgIGJvcmRlcl9yaWdodDogdHJ1ZSxcbiAgICAgICAgYm9yZGVyX2NvbG9yOiAncmVkJyxcbiAgICB9KVxuXG4gICAgY29uc3Qgc2hlZXRfdG9vbGJhciA9IGF3YWl0IExJU1MucXM8Q2FsY1Rvb2xiYXI+KCcjc2hlZXRfdG9vbGJhcl9ib3JkdXJlcycpO1xuICAgIHNoZWV0X3Rvb2xiYXIuc3luY1RvKHNoZWV0KTtcbiAgICBzaGVldF90b29sYmFyLmRpc2FibGVBbGxFeGNlcHQoXCJib3JkZXJcIiwgXCJib3JkZXJfY29sb3JcIik7XG59XG5cblxue1xuICAgIGNvbnN0IHNoZWV0ID0gYXdhaXQgTElTUy5xczxDYWxjU2hlZXQ+KCcjc2hlZXRfcmV0cmFpdHMnKTtcblxuICAgIHNoZWV0LmdldFJhbmdlKFwiQTE6QjFcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gW1xuICAgICAgICBcIkdhdWNoZVwiLCBcIkRyb2l0ZVwiXG4gICAgXTtcblxuICAgIHNoZWV0LmdldFJhbmdlKCdBMjpCNScpLmNvbnRlbnQgPSBcIkFcIjtcbiAgICBzaGVldC5nZXRSYW5nZSgnQTI6QTUnKS5mb3JtYXQoXCJhbGlnbl9sZWZ0XCIpO1xuICAgIHNoZWV0LmdldFJhbmdlKCdCMjpCNScpLmZvcm1hdChcImFsaWduX3JpZ2h0XCIpO1xuXG4gICAgc2hlZXQuZ2V0UmFuZ2UoJ0EzOkIzJykuZm9ybWF0KHtpbmRlbnQ6IDF9KTtcbiAgICBzaGVldC5nZXRSYW5nZSgnQTQ6QjQnKS5mb3JtYXQoe2luZGVudDogMn0pO1xuICAgIHNoZWV0LmdldFJhbmdlKCdBNTpCNScpLmZvcm1hdCh7aW5kZW50OiAzfSk7XG5cbiAgICBjb25zdCBzaGVldF90b29sYmFyID0gYXdhaXQgTElTUy5xczxDYWxjVG9vbGJhcj4oJyNzaGVldF90b29sYmFyX3JldHJhaXRzJyk7XG4gICAgc2hlZXRfdG9vbGJhci5zeW5jVG8oc2hlZXQpO1xuICAgIHNoZWV0X3Rvb2xiYXIuZGlzYWJsZUFsbEV4Y2VwdChcInJldHJhaXRfcDFcIiwgXCJyZXRyYWl0X20xXCIpO1xufVxuXG5cbntcbiAgICBjb25zdCBzaGVldCA9IGF3YWl0IExJU1MucXM8Q2FsY1NoZWV0PignI3NoZWV0X2Z1c2lvbicpO1xuXG4gICAgc2hlZXQuZ2V0UmFuZ2UoJ0IyJykuZm9ybWF0KHtcbiAgICAgICAgc3BhbjogWzIsMl0sXG4gICAgICAgIGFsaWduX2NlbnRlcjogdHJ1ZSxcbiAgICAgICAgdmFsaWduX21pZGRsZTogdHJ1ZVxuICAgIH0pLmNvbnRlbnQgPSBcIkFcIjtcblxuICAgIGNvbnN0IHNoZWV0X3Rvb2xiYXIgPSBhd2FpdCBMSVNTLnFzPENhbGNUb29sYmFyPignI3NoZWV0X3Rvb2xiYXJfZnVzaW9uJyk7XG4gICAgc2hlZXRfdG9vbGJhci5zeW5jVG8oc2hlZXQpO1xuICAgIHNoZWV0X3Rvb2xiYXIuZGlzYWJsZUFsbEV4Y2VwdChcIm1lcmdlX2NlbnRlclwiLCBcIm1lcmdlXCIsIFwidW5tZXJnZVwiKTtcbn0iLCJpbXBvcnQgeyBzdHIyaHRtbCB9IGZyb20gXCJzdHJ1Y3QvdXRpbHMvc3RyMmh0bWxcIjtcbmltcG9ydCB7IENhbGNTaGVldCwgQ2VsbExpc3QgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5leHBvcnQgY2xhc3MgUmFuZ2VPdmVybGF5IGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuXG4gICAgI3NoZWV0OiBDYWxjU2hlZXQ7XG4gICAgI3JhbmdlOiBzdHJpbmd8bnVsbCA9IG51bGw7XG4gICAgcHJvdGVjdGVkIG92ZXJsYXk6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCwgLi4uY2xhc3NsaXN0OiBzdHJpbmdbXSkge1xuXG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcbiAgICAgICAgdGhpcy4jc2hlZXQuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm92ZXJsYXkgPSBzdHIyaHRtbChgPGRpdiBjbGFzcz0nb3ZlcmxheSc+PC9kaXY+YCk7XG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzbGlzdCk7XG5cbiAgICAgICAgc2hlZXQuY29udGVudC5hcHBlbmQoIHRoaXMub3ZlcmxheSApO1xuICAgIH1cblxuICAgIHNldFJhbmdlKHJhbmdlOiBDZWxsTGlzdHxudWxsKSB7XG4gICAgICAgIHRoaXMuI3JhbmdlID0gcmFuZ2UgPT09IG51bGwgPyBudWxsIDogcmFuZ2UucGxhZ2VfbmFtZSE7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFJlY3QoLi4ucmVjdDogcmVhZG9ubHkgW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0pIHtcbiAgICAgICAgcmV0dXJuIHJlY3Q7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuXG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIsIHRoaXMuI3JhbmdlID09PSBudWxsKTtcblxuICAgICAgICBpZiggdGhpcy4jcmFuZ2UgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmdldFJlY3QoIC4uLnRoaXMuI3NoZWV0LmdldFJlY3QoIHRoaXMuI3NoZWV0LmdldFJhbmdlKHRoaXMuI3JhbmdlKSApICk7XG4gICAgICAgIHRoaXMuI3NoZWV0LnNldFJlY3QodGhpcy5vdmVybGF5LCByZWN0ICk7XG4gICAgfVxuXG4gICAgb3ZlcnJpZGUgYWRkRXZlbnRMaXN0ZW5lcih0eXBlOiBzdHJpbmcsIGNhbGxiYWNrOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0IHwgbnVsbCwgb3B0aW9ucz86IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zIHwgYm9vbGVhbik6IHZvaWQge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBvdmVycmlkZSByZW1vdmVFdmVudExpc3RlbmVyKHR5cGU6IHN0cmluZywgY2FsbGJhY2s6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QgfCBudWxsLCBvcHRpb25zPzogRXZlbnRMaXN0ZW5lck9wdGlvbnMgfCBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5vdmVybGF5LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIG9wdGlvbnMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvcm11bGFSZWYgZXh0ZW5kcyBSYW5nZU92ZXJsYXkge1xuXG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCkge1xuICAgICAgICBzdXBlcihzaGVldCwgXCJyYW5nZV9oaWdobGlnaHRcIik7XG4gICAgfVxuXG4gICAgI2N1cl9jb2xvciA9IDA7XG4gICAgc2V0Q29sb3IoY29sb3JfaWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShgaGlnaGxpZ2h0XyR7dGhpcy4jY3VyX2NvbG9yfWApOyBcbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoYGhpZ2hsaWdodF8ke2NvbG9yX2lkfWApO1xuICAgICAgICB0aGlzLiNjdXJfY29sb3IgPSBjb2xvcl9pZDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWNvcHlIYW5kbGUgZXh0ZW5kcyBSYW5nZU92ZXJsYXkge1xuXG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCkge1xuICAgICAgICBzdXBlcihzaGVldCwgXCJyZWNvcHlcIik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldFJlY3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBbeCt3LTIsIHkraC0yLCA1LCA1XSBhcyBjb25zdDtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBGb3JtdWxhIH0gZnJvbSBcIi4vZm9ybXVsYV9wYXJzZXJcIjtcbmltcG9ydCB7IENhbGNTaGVldCwgQ2VsbCwgQ2VsbExpc3QsIFJhd0NvbnRlbnRUeXBlIH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuZXhwb3J0IGNsYXNzIEZvcm1hdE1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKHNoZWV0OiBDYWxjU2hlZXQpIHtcblxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHNoZWV0LmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldjogS2V5Ym9hcmRFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICBpZiggISBldi5jdHJsS2V5IClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdiJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJib2xkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ2knKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcIml0YWxpY1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICd1Jykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJ1bmRlcmxpbmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnbCcpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KFwiYWxpZ25fbGVmdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdyJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJhbGlnbl9yaWdodFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdlJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJhbGlnbl9jZW50ZXJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnNCcgJiYgZXYuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KEZvcm1hdHMuZXVyb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJzUnICYmIGV2LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChGb3JtYXRzLnBvdXJjZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICcxJyAmJiBldi5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoRm9ybWF0cy5udW1iZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihjaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICAgICAgLyogVE9ETyBsaXN0ZW4gKi9cblxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsb2F0MkRhdGUoZmxvYXQ6IG51bWJlcikge1xuXG4gICAgbGV0IGNvbnRlbnQgPSBuZXcgRGF0ZShcIjE4OTktMTItMzBcIik7XG5cbiAgICBjb250ZW50LnNldERhdGUoIGNvbnRlbnQuZ2V0RGF0ZSgpICsgZmxvYXQpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZGF0ZTJGbG9hdChkYXRlOiBEYXRlKSB7XG4gICAgY29uc3QgYmVnID0gbmV3IERhdGUoXCIxODk5LTEyLTMwXCIpO1xuICAgIHJldHVybiArKChkYXRlLmdldFRpbWUoKSAtIGJlZy5nZXRUaW1lKCkpIC8gKDI0KjM2MDAqMTAwMCkpLnRvRml4ZWQoNyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRSYXcocHRoaXM6IENlbGwsIHZhbHVlID0gcHRoaXMucmF3Q29udGVudCkge1xuICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIEZvcm11bGEpXG4gICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuICAgIHJldHVybiBGb3JtYXRzLmRlZmF1bHQuY2FsbChwdGhpcywgdmFsdWUpO1xufVxuXG5leHBvcnQgY29uc3QgRm9ybWF0cyA9IHtcblxuICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKHRoaXM6IENlbGx8bnVsbCwgdmFsdWUgPSB0aGlzPy5yYXdDb250ZW50KSB7XG5cbiAgICAgICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRm9ybXVsYSlcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuY2FjaGVkVmFsdWUoKTtcblxuICAgICAgICBjb25zdCBwcmVjID0gKyh0aGlzPy5nZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicpID8/IDIpO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcblxuICAgICAgICAgICAgaWYoIHRoaXM/LmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJykgPT09IFwicG91cmNlbnRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7KyggKCt2YWx1ZSkqMTAwKS50b1ByZWNpc2lvbig3KX1gLnJlcGxhY2UoJy4nLCAnLCcpICsgXCIlXCI7XG5cbiAgICAgICAgICAgIHJldHVybiBgJHsrdmFsdWUudG9QcmVjaXNpb24oNyl9YC5yZXBsYWNlKCcuJywgJywnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCB0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID8gJ1ZSQUknIDogJ0ZBVVgnO1xuXG4gICAgICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZSE7XG4gICAgfSxcbiAgICBudW1iZXI6IGZ1bmN0aW9uKHRoaXM6Q2VsbCwgdmFsdWUgPSB0aGlzLnJhd0NvbnRlbnQpIHtcblxuICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBGb3JtdWxhKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5jYWNoZWRWYWx1ZSgpO1xuXG4gICAgICAgIGlmKHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcblxuICAgICAgICBpZih2YWx1ZSBpbnN0YW5jZW9mIERhdGUpXG4gICAgICAgICAgICB2YWx1ZSA9IGRhdGUyRmxvYXQodmFsdWUpO1xuXG4gICAgICAgIGlmKCB0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtdHlwZVwiKSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIiwgXCJudW1iZXJcIik7XG5cbiAgICAgICAgICAgIGlmKCAhICh0aGlzLnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBGb3JtdWxhKSApXG4gICAgICAgICAgICAgICAgQ2FsY1NoZWV0LmdldFNoZWV0RnJvbUNlbGwodGhpcykuZ2V0UmFuZ2UodGhpcykuY29udGVudCA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJlYyA9ICsodGhpcy5nZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicpID8/IDIpO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHtcbiAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogcHJlYyxcbiAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogcHJlY1xuICAgICAgICAgICAgfSk7XG4gICAgfSxcbiAgICBwb3VyY2VudDogZnVuY3Rpb24odGhpczpDZWxsLCB2YWx1ZSA9IHRoaXMucmF3Q29udGVudCkge1xuXG4gICAgICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIEZvcm11bGEpXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmNhY2hlZFZhbHVlKCk7XG5cbiAgICAgICAgaWYodmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICBpZih2YWx1ZSBpbnN0YW5jZW9mIERhdGUpXG4gICAgICAgICAgICB2YWx1ZSA9IGRhdGUyRmxvYXQodmFsdWUpO1xuXG4gICAgICAgIGlmKCB0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtdHlwZVwiKSAhPT0gXCJwb3VyY2VudFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtdHlwZVwiLCBcInBvdXJjZW50XCIpO1xuICAgICAgICAgICAgaWYoICEgKHRoaXMucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEpIClcbiAgICAgICAgICAgICAgICBDYWxjU2hlZXQuZ2V0U2hlZXRGcm9tQ2VsbCh0aGlzKS5nZXRSYW5nZSh0aGlzKS5jb250ZW50ID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmVjID0gKyh0aGlzLmdldEF0dHJpYnV0ZSgncHJlY2lzaW9uJykgPz8gMik7XG5cbiAgICAgICAgcmV0dXJuICh2YWx1ZSAqIDEwMCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XG4gICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHByZWMsXG4gICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNcbiAgICAgICAgICAgIH0pICsgJyUnO1xuICAgIH0sXG4gICAgZGF0ZTogZnVuY3Rpb24odGhpczpDZWxsLCB2YWx1ZSA9IHRoaXMucmF3Q29udGVudCkge1xuICAgICAgICBcbiAgICAgICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRm9ybXVsYSlcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuY2FjaGVkVmFsdWUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICBpZiggdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIsIFwiZGF0ZVwiKTtcblxuICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBEYXRlICkge1xuICAgICAgICAgICAgbGV0IGRhdGUgPSB2YWx1ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRlLnNsaWNlKDAsIDYpICsgZGF0ZS5zbGljZSg4KTtcbiAgICAgICAgfSBpZiggdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBmbG9hdDJEYXRlKHZhbHVlKTtcblxuICAgICAgICAgICAgaWYoICEgKHRoaXMucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEpIClcbiAgICAgICAgICAgICAgICBDYWxjU2hlZXQuZ2V0U2hlZXRGcm9tQ2VsbCh0aGlzKS5nZXRSYW5nZSggdGhpcyApLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgZGF0ZSA9IGNvbnRlbnQudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIik7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5zbGljZSgwLCA2KSArIGRhdGUuc2xpY2UoOCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICBldXJvczogZnVuY3Rpb24odGhpczpDZWxsLCB2YWx1ZSA9IHRoaXMucmF3Q29udGVudCkge1xuXG4gICAgICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIEZvcm11bGEpXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmNhY2hlZFZhbHVlKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgaWYodmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuXG4gICAgICAgIGlmKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSlcbiAgICAgICAgICAgIHZhbHVlID0gZGF0ZTJGbG9hdCh2YWx1ZSk7XG5cbiAgICAgICAgaWYoIHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIpICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtdHlwZVwiLCBcIm51bWJlclwiKTtcbiAgICAgICAgICAgIGlmKCAhICh0aGlzLnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBGb3JtdWxhKSApXG4gICAgICAgICAgICAgICAgQ2FsY1NoZWV0LmdldFNoZWV0RnJvbUNlbGwodGhpcykuZ2V0UmFuZ2UodGhpcykuY29udGVudCA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJlYyA9ICsodGhpcy5nZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicpID8/IDIpO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHtcbiAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogcHJlYyxcbiAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogcHJlY1xuICAgICAgICAgICAgfSkgKyAnIOKCrCc7XG4gICAgfSxcbn1cblxuZXhwb3J0IGNsYXNzIEZvcm1hdCB7XG5cbiAgICAjZm9ybWF0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoZm9ybWF0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgICAgIHRoaXMuI2Zvcm1hdCA9IGZvcm1hdDtcbiAgICB9XG5cbiAgICBhcHBseVRvKGNlbGw6IENlbGx8Q2VsbExpc3QpIHtcblxuICAgICAgICBpZiggY2VsbCBpbnN0YW5jZW9mIENlbGxMaXN0KSB7XG5cbiAgICAgICAgICAgIGZvcihsZXQgYyBvZiBjZWxsLmNlbGxzKVxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlUbyhjKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCBuYW1lIGluIHRoaXMuI2Zvcm1hdCkge1xuICAgICAgICAgICAgbGV0IHZhbCA9IHRoaXMuI2Zvcm1hdFtuYW1lXTtcblxuICAgICAgICAgICAgaWYobmFtZSA9PT0gJ2Zvcm1hdCcpIHtcblxuICAgICAgICAgICAgICAgIGlmKCB2YWwgPT09IG51bGwpIHtcblxuICAgICAgICAgICAgICAgICAgICBjZWxsLmZvcm1hdCA9IEZvcm1hdHMuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGNlbGwuZm9ybWF0KCk7IC8vVE9ETzogaWYgZmN0XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNlbGwuZm9ybWF0ID0gdmFsO1xuICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBjZWxsLmZvcm1hdCggY2VsbC5yYXdDb250ZW50KTsgLy9UT0RPOiBpZiBmY3RcblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihuYW1lID09PSAncHJlY2lzaW9uJykge1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdwcmVjaXNpb24nLCB2YWwpO1xuICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBjZWxsLmZvcm1hdD8uKCBjZWxsLnJhd0NvbnRlbnQpOyAvL1RPRE86IGlmIGZjdFxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiggbmFtZSA9PT0gJ3NwYW4nICkge1xuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBzaGVldCA9IENhbGNTaGVldC5nZXRTaGVldEZyb21DZWxsKGNlbGwpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKCB2YWxbMF0gPT09IDEgJiYgdmFsWzFdID09PSAxKSB7IC8vIHVubWVyZ2VcblxuICAgICAgICAgICAgICAgICAgICBsZXQgciA9ICsoY2VsbC5nZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nKSA/PyAwKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGMgPSArKGNlbGwuZ2V0QXR0cmlidXRlKCdjb2xzcGFuJykgPz8gMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHI7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBjOyArK2opIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBzaGVldC5yZWxhdGl2ZVRvKGNlbGwsIGksIGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0YXJnZXQuY2VsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNlbGwucmVtb3ZlQXR0cmlidXRlKCdyb3dzcGFuJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwucmVtb3ZlQXR0cmlidXRlKCdjb2xzcGFuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCBgJHt2YWxbMF19YCk7XG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCBgJHt2YWxbMV19YCk7XG5cbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdmFsWzBdOyArK2kpXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB2YWxbMV07ICsraikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaSA9PT0gMCAmJiBqID09PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBzaGVldC5yZWxhdGl2ZVRvKGNlbGwsIGksIGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNlbGwgPSBjZWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIHR5cGVvZiB2YWwgPT09IFwiYm9vbGVhblwiKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggbmFtZS5zdGFydHNXaXRoKCdhbGlnbl8nKSApIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdhbGlnbl9sZWZ0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYWxpZ25fY2VudGVyJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYWxpZ25fcmlnaHQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoIG5hbWUuc3RhcnRzV2l0aCgndmFsaWduXycpICkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlnbl90b3AnKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZ25fbWlkZGxlJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWduX2JvdHRvbScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnRvZ2dsZShuYW1lLCB2YWwpO1xuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNlbGwuc3R5bGUuc2V0UHJvcGVydHkoYC0tJHtuYW1lfWAsIHZhbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQcm9wZXJ0eShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2Zvcm1hdFtuYW1lXTtcbiAgICB9XG4gICAgaGFzUHJvcGVydHkobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuYW1lIGluIHRoaXMuI2Zvcm1hdDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZXh0cmFjdEZvcm1hdChjZWxsOiBDZWxsfENlbGxMaXN0KTogRm9ybWF0IHtcbiAgICAgICAgXG4gICAgICAgIGlmKCBjZWxsIGluc3RhbmNlb2YgQ2VsbExpc3QpIHtcblxuICAgICAgICAgICAgY29uc3QgY2VsbHMgPSBjZWxsLmNlbGxzO1xuXG4gICAgICAgICAgICBsZXQgZm9ybWF0ID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHNbMF0pO1xuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgY2VsbHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBsZXQgZjIgPSBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxsc1tpXSk7XG5cbiAgICAgICAgICAgICAgICBmb3IobGV0IGtleSBpbiBmb3JtYXQuI2Zvcm1hdClcbiAgICAgICAgICAgICAgICAgICAgaWYoICEgKGtleSBpbiBmMi4jZm9ybWF0KSB8fCBmMi4jZm9ybWF0W2tleV0gIT09IGZvcm1hdC4jZm9ybWF0W2tleV0gKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGZvcm1hdC4jZm9ybWF0W2tleV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBmb3JtYXQgPSBPYmplY3QuZnJvbUVudHJpZXM8YW55PiggWy4uLmNlbGwuY2xhc3NMaXN0LnZhbHVlcygpXS5tYXAoZSA9PiBbZSwgdHJ1ZV0pICk7XG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2VsbC5zdHlsZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBjZWxsLnN0eWxlLml0ZW0oaSk7XG4gICAgICAgICAgICBpZiggISBuYW1lLnN0YXJ0c1dpdGgoJy0tJykgKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgZm9ybWF0W25hbWUuc2xpY2UoMildID0gY2VsbC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29sc3BhbiA9ICsoY2VsbC5nZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nKSA/PyAxKTtcbiAgICAgICAgY29uc3Qgcm93c3BhbiA9ICsoY2VsbC5nZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nKSA/PyAxKTtcblxuICAgICAgICBpZiggY29sc3BhbiA+IDEgfHwgcm93c3BhbiA+IDEgKVxuICAgICAgICAgICAgZm9ybWF0LnNwYW4gPSBbIHJvd3NwYW4sIGNvbHNwYW4gXTtcblxuICAgICAgICBpZiggISAoXCJmb250X3NpemVcIiBpbiBmb3JtYXQpIClcbiAgICAgICAgICAgIGZvcm1hdFsnZm9udF9zaXplJ10gPSAnMTBwdCc7XG5cbiAgICAgICAgaWYoIFwiZm9ybWF0XCIgaW4gY2VsbClcbiAgICAgICAgICAgIGZvcm1hdC5mb3JtYXQgPSBjZWxsLmZvcm1hdDtcblxuICAgICAgICBpZiggY2VsbC5oYXNBdHRyaWJ1dGUoJ3ByZWNpc2lvbicpIClcbiAgICAgICAgICAgIGZvcm1hdC5wcmVjaXNpb24gPSBjZWxsLmdldEF0dHJpYnV0ZSgncHJlY2lzaW9uJyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBGb3JtYXQoZm9ybWF0KTtcbiAgICB9XG59IiwiLy9UT0RPOiB3ZWJwYWNrIGNvbmZpZy4uLlxuaW1wb3J0IExJU1MgZnJvbSBcIi4uLy4uLy4uL2xpYnMvTElTU1wiO1xuaW1wb3J0IHsgZm9ybWF0UmF3LCBGb3JtYXRzIH0gZnJvbSBcIi4vZm9ybWF0XCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGwgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5jb25zdCBjc3MgPSBgXG4gICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYgcHJlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKCAxcmVtICsgOHB4ICsgMnB4ICk7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xpYmVyYXRpb24gU2Fucyc7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5cbmV4cG9ydCBjbGFzcyBDYWxjRm9ybXVsYSBleHRlbmRzIExJU1Moe1xuICAgIGNzc1xufSkge1xuXG4gICAgI2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XG4gICAgI3NoZWV0ICAhOiBDYWxjU2hlZXQ7XG4gICAgI2N1cl9jZWxsOiBDZWxsfG51bGwgPSBudWxsO1xuICAgICNvbklucHV0OiAoZXY6IEV2ZW50KSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCggdGhpcy4jaW5wdXQgKTtcblxuICAgICAgICB0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IHtcblxuICAgICAgICAgICAgaWYoIHRoaXMuI2N1cl9jZWxsID09PSBudWxsIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIC8vdGhpcy4jc2hlZXQuY3Vyc29yLmNvbnRlbnQgPSB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCE7XG4gICAgICAgICAgICB0aGlzLiNzaGVldC5zdGF0ZXMuY2VsbF9lZGl0LnN0YXRlID0gbnVsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsICgpID0+IHtcblxuICAgICAgICAgICAgaWYoIHRoaXMuI2N1cl9jZWxsID09PSBudWxsIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPSB0aGlzLiNjdXJfY2VsbDtcbiAgICAgICAgICAgIC8vdGhpcy4jY3VyX2NlbGwhLnRleHRDb250ZW50ID0gdGhpcy4jaW5wdXQudGV4dENvbnRlbnQhO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmKCB0aGlzLiNjdXJfY2VsbCA9PT0gbnVsbCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLiNjdXJfY2VsbCEudGV4dENvbnRlbnQgPSBmb3JtYXRSYXcodGhpcy4jY3VyX2NlbGwsIHRoaXMuI2lucHV0LnRleHRDb250ZW50ISApO1xuICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KCdpbnB1dCcsIHtkZXRhaWw6IHRydWV9KSApO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNvbklucHV0ID0gKGV2OiBFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIGlmKCBldi5kZXRhaWwgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy4jaW5wdXQudGV4dENvbnRlbnQgPSBmb3JtYXRSYXcoIHRoaXMuI2N1cl9jZWxsISwgdGhpcy4jY3VyX2NlbGwhLnRleHRDb250ZW50ISApO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN5bmNUbyhzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcbiAgICAgICAgY29uc3QgY3Vyc29yID0gdGhpcy4jc2hlZXQuY3Vyc29yO1xuXG4gICAgICAgIHNoZWV0Lmhvc3QuYWRkRXZlbnRMaXN0ZW5lcigndXBkYXRlJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdGhpcy4jaW5wdXQudGV4dENvbnRlbnQgPSBmb3JtYXRSYXcoY3Vyc29yLmZpcnN0Q2VsbCApO1xuICAgICAgICB9KVxuXG4gICAgICAgIGN1cnNvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gY3Vyc29yLmNlbGxzO1xuXG4gICAgICAgICAgICB0aGlzLiNpbnB1dC50b2dnbGVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICEgc2hlZXQuaXNSTyApO1xuXG4gICAgICAgICAgICBpZiggY2VsbHMubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggdGhpcy4jY3VyX2NlbGwgIT09IG51bGwgKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNjdXJfY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuI29uSW5wdXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsID0gY2VsbHNbMF07XG4gICAgICAgICAgICB0aGlzLiNjdXJfY2VsbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuI29uSW5wdXQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCA9IGZvcm1hdFJhdyggdGhpcy4jY3VyX2NlbGwgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbkxJU1MuZGVmaW5lKCdjYWxjLWZvcm11bGEnLCBDYWxjRm9ybXVsYSk7IiwiaW1wb3J0IHsgZGF0ZTJGbG9hdCwgRm9ybWF0cyB9IGZyb20gXCIuL2Zvcm1hdFwiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0LCBWYWx1ZVR5cGUgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5leHBvcnQgY2xhc3MgRm9ybXVsYSB7XG5cbiAgICAjc3RyOiBzdHJpbmc7XG4gICAgI2V4ZWM6IChzaGVldDogQ2FsY1NoZWV0KSA9PiBWYWx1ZVR5cGU7XG4gICAgI3JhbmdlczogVG9rZW5bXTtcblxuICAgICNjYWNoZTogVmFsdWVUeXBlfG51bGwgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3Ioc3RyOiBzdHJpbmcsIGV4ZWM6IChzaGVldDogQ2FsY1NoZWV0KSA9PiBWYWx1ZVR5cGUsIHJhbmdlc190b2tlbjogVG9rZW5bXSA9IFtdKSB7XG5cbiAgICAgICAgdGhpcy4jc3RyID0gc3RyO1xuICAgICAgICB0aGlzLiNleGVjID0gZXhlYztcbiAgICAgICAgdGhpcy4jcmFuZ2VzID0gcmFuZ2VzX3Rva2VuO1xuICAgIH1cbiAgICBcbiAgICByZWxhdGl2ZVRvKCBzaGVldDogQ2FsY1NoZWV0LCBkcm93OiBudW1iZXIsIGRjb2w6IG51bWJlcikge1xuICAgICAgICBcbiAgICAgICAgbGV0IG5ld19yYW5nZXMgPSB0aGlzLiNyYW5nZXMubWFwKHIgPT4ge1xuXG4gICAgICAgICAgICAvL1RPRE86IGlmIHJhbmdlLi4uXG4gICAgICAgICAgICBsZXQgcG9zID0gWy4uLnNoZWV0LmNlbGxQb3MoIHNoZWV0LmdldFJhbmdlKHIudmFsdWUpLmZpcnN0Q2VsbCApXTtcbiAgICBcbiAgICAgICAgICAgIGlmKCByLnZhbHVlLmxhc3RJbmRleE9mKCckJykgPD0gMCApXG4gICAgICAgICAgICAgICAgcG9zWzBdICs9IGRyb3c7XG4gICAgICAgICAgICBpZiggci52YWx1ZVswXSAhPT0gJyQnIClcbiAgICAgICAgICAgICAgICBwb3NbMV0gKz0gZGNvbDtcblxuICAgICAgICAgICAgcmV0dXJuIGAke1N0cmluZy5mcm9tQ2hhckNvZGUoNjUrcG9zWzFdLTEpfSR7cG9zWzBdfWA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBuZXdfZm9ybXVsYSA9IFwiXCI7XG5cbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLiNyYW5nZXMubGVuZ3RoOyArK2kpIHtcblxuICAgICAgICAgICAgbmV3X2Zvcm11bGEgKz0gdGhpcy4jc3RyLnNsaWNlKG9mZnNldCwgdGhpcy4jcmFuZ2VzW2ldLmJlZyk7XG4gICAgICAgICAgICBuZXdfZm9ybXVsYSArPSBuZXdfcmFuZ2VzW2ldO1xuXG4gICAgICAgICAgICBvZmZzZXQgPSB0aGlzLiNyYW5nZXNbaV0uZW5kO1xuICAgICAgICB9XG4gICAgICAgIG5ld19mb3JtdWxhICs9IHRoaXMuI3N0ci5zbGljZShvZmZzZXQpO1xuICAgICAgICBcbiAgICAgICAgLy9jYW4gYmUgb3B0aW1pemVkLi4uXG4gICAgICAgIHJldHVybiBwYXJzZV9mb3JtdWxhKCBuZXdfZm9ybXVsYSApO1xuICAgIH1cblxuICAgIGdldCByYW5nZXNUb2tlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3JhbmdlcztcbiAgICB9XG5cbiAgICByZXNldENhY2hlKCkge1xuICAgICAgICB0aGlzLiNjYWNoZSA9IG51bGw7XG4gICAgfVxuXG4gICAgY2FjaGVkVmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjYWNoZSE7XG4gICAgfVxuXG4gICAgZXhlYyhzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgaWYoIHRoaXMuI2NhY2hlICE9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuI2NhY2hlO1xuXG4gICAgICAgIHJldHVybiB0aGlzLiNjYWNoZSA9IHRoaXMuI2V4ZWMoc2hlZXQpO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jc3RyO1xuICAgIH1cbn1cblxudHlwZSBUb2tlbiA9IHtcbiAgICBiZWc6IG51bWJlcixcbiAgICBlbmQ6IG51bWJlcixcbiAgICB2YWx1ZTogc3RyaW5nLFxuICAgIHR5cGU6IFwic3RyaW5nXCJ8XCJudW1iZXJcInxcImNhbGxcInxcInJhbmdlXCJ8XCJvcFwiXG59XG5cblxuZnVuY3Rpb24gZXh0cmFjdFRva2VuKHN0cjogc3RyaW5nLCBvZmZzZXQ6IG51bWJlcikge1xuXG4gICAgd2hpbGUoIFsnICcsICdcXG4nLCAnXFx0J10uaW5jbHVkZXMoc3RyW29mZnNldF0pICkgLy8gaWdub3JlIHdoaXRlc3BhY2VzXG4gICAgICAgICsrb2Zmc2V0O1xuXG4gICAgbGV0IHRva2VuOiBQYXJ0aWFsPFRva2VuPiA9IHtcbiAgICAgICAgYmVnOiBvZmZzZXRcbiAgICB9O1xuXG4gICAgaWYoc3RyW29mZnNldF0gPT09ICdcIicpIHtcbiAgICAgICAgdG9rZW4udHlwZSA9IFwic3RyaW5nXCI7XG4gICAgICAgIHdoaWxlKCBzdHJbKytvZmZzZXRdICE9PSAnXCInICYmIHN0cltvZmZzZXQtMV0gIT09ICdcXFxcJykge1xuICAgICAgICAgICAgaWYob2Zmc2V0KzEgPj0gc3RyLmxlbmd0aCApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JtdWxhIHBhcnNpbmcgZXJyb3InKTtcbiAgICAgICAgfVxuICAgICAgICArK29mZnNldDtcbiAgICB9IGVsc2UgaWYoIHN0cltvZmZzZXRdID09PSAnLCcgfHwgKHN0cltvZmZzZXRdID49ICcwJyAmJiBzdHJbb2Zmc2V0XSA8PSAnOScpICkge1xuICAgICAgICB0b2tlbi50eXBlID0gXCJudW1iZXJcIjtcbiAgICAgICAgbGV0IGhhc0NvbW1hID0gZmFsc2U7XG4gICAgICAgIHdoaWxlKCBzdHJbb2Zmc2V0XSA9PT0gJywnIHx8IHN0cltvZmZzZXRdID49ICcwJyAmJiBzdHJbb2Zmc2V0XSA8PSAnOScgKSB7XG5cbiAgICAgICAgICAgIGlmKCBzdHJbb2Zmc2V0XSA9PT0gJywnICkge1xuICAgICAgICAgICAgICAgIGlmKGhhc0NvbW1hID09PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Zvcm11bGEgcGFyc2luZyBlcnJvcicpO1xuICAgICAgICAgICAgICAgIGhhc0NvbW1hID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgKytvZmZzZXQ7XG4gICAgICAgIH1cblxuICAgIH0gZWxzZSBpZiggc3RyW29mZnNldF0gPT09ICckJyB8fCBzdHJbb2Zmc2V0XSA+PSAnQScgJiYgc3RyW29mZnNldF0gPD0gJ1onKSB7IC8vKyRcbiAgICAgICAgXG4gICAgICAgIHdoaWxlKCBvZmZzZXQgPCBzdHIubGVuZ3RoXG4gICAgICAgICAgICAgICAgJiYgKHN0cltvZmZzZXRdID09PSAnJCcgfHwgc3RyW29mZnNldF0gPj0gJ0EnICYmIHN0cltvZmZzZXRdIDw9ICdaJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHN0cltvZmZzZXRdID49ICcwJyAmJiBzdHJbb2Zmc2V0XSA8PSAnOSdcbiAgICAgICAgICAgICAgICAgICAgKSApXG4gICAgICAgICAgICArK29mZnNldDtcblxuICAgICAgICB0b2tlbi50eXBlID0gc3RyW29mZnNldF0gPT09ICcoJyA/ICdjYWxsJyA6ICdyYW5nZSc7XG5cbiAgICAgICAgaWYoIHN0cltvZmZzZXRdID09PSAnKCcgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3QgaW1wbGVtZW50ZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRva2VuLnR5cGUgPSBcIm9wXCI7IC8vIG9ubHkgb24gY2hhciA/Pz9cblxuICAgICAgICBpZiggc3RyW29mZnNldCArIDFdID09PSAnPScpIC8vID49IC8gPD1cbiAgICAgICAgICAgICsrb2Zmc2V0O1xuICAgICAgICBlbHNlIGlmKCBzdHJbb2Zmc2V0ICsgMV0gPT09ICc+JykgLy8gPD5cbiAgICAgICAgICAgICsrb2Zmc2V0O1xuXG4gICAgICAgICsrb2Zmc2V0O1xuICAgIH1cblxuICAgIHRva2VuLmVuZCA9IG9mZnNldDtcbiAgICB0b2tlbi52YWx1ZSA9IHN0ci5zbGljZSh0b2tlbi5iZWcsIHRva2VuLmVuZCk7XG5cbiAgICByZXR1cm4gdG9rZW4gYXMgUmVxdWlyZWQ8VG9rZW4+O1xufVxuXG5jbGFzcyBOb2RlIHtcblxuICAgIGNoaWxkcmVuOiBOb2RlW107XG4gICAgI2ZjdDogKHNoZWV0OiBDYWxjU2hlZXQsIC4uLmFyZ3M6KFZhbHVlVHlwZSlbXSkgPT4gVmFsdWVUeXBlO1xuXG4gICAgY29uc3RydWN0b3IoZmN0OiAoc2hlZXQ6IENhbGNTaGVldCwgLi4uYXJnczooVmFsdWVUeXBlKVtdKSA9PiBWYWx1ZVR5cGUsIC4uLmNoaWxkcmVuOiBOb2RlW10pIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgICBpZihjaGlsZHJlbiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV1RGXCIpO1xuICAgICAgICB0aGlzLiNmY3QgPSBmY3Q7XG4gICAgfVxuXG4gICAgZXZhbChzaGVldDogQ2FsY1NoZWV0KTogVmFsdWVUeXBlIHtcbiAgICAgICAgY29uc3QgYXJncyA9IHRoaXMuY2hpbGRyZW4ubWFwKCBjID0+IGMuZXZhbChzaGVldCkgKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2ZjdChzaGVldCwgLi4uYXJncyApO1xuICAgIH1cbiAgICBcbn1cblxuZnVuY3Rpb24gdG9OdW1iZXIoYTogdW5rbm93bik6IG51bWJlciB7XG5cbiAgICBpZihhID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiAwO1xuXG4gICAgaWYoIHR5cGVvZiBhID09PSBcInN0cmluZ1wiKVxuICAgICAgICByZXR1cm4gTnVtYmVyKGEpO1xuXG4gICAgaWYoIGEgaW5zdGFuY2VvZiBEYXRlKVxuICAgICAgICByZXR1cm4gZGF0ZTJGbG9hdChhKTtcblxuICAgIHJldHVybiBhIGFzIHVua25vd24gYXMgbnVtYmVyO1xufVxuXG5jb25zdCBvcF9pbXBsID0ge1xuICAgICclJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93bikgPT4gdG9OdW1iZXIoYSkvMTAwLFxuICAgICd1LisnOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duKSA9PiArdG9OdW1iZXIoYSksXG4gICAgJ3UuLSc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24pID0+IC10b051bWJlcihhKSxcbiAgICAnKic6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24sIGI6IHVua25vd24pID0+IHRvTnVtYmVyKGEpKnRvTnVtYmVyKGIpLFxuICAgICcvJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93biwgYjogdW5rbm93bikgPT4gdG9OdW1iZXIoYSkvdG9OdW1iZXIoYiksXG4gICAgJysnOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiB0b051bWJlcihhKSt0b051bWJlcihiKSxcbiAgICAnLSc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24sIGI6IHVua25vd24pID0+IHRvTnVtYmVyKGEpLXRvTnVtYmVyKGIpLFxuICAgICdeJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93biwgYjogdW5rbm93bikgPT4gTWF0aC5wb3codG9OdW1iZXIoYSksdG9OdW1iZXIoYikgKSxcbiAgICAnJic6IChfOiBDYWxjU2hlZXQsIGE6IHN0cmluZywgYjogc3RyaW5nKSA9PiBgJHtGb3JtYXRzLmRlZmF1bHQuY2FsbChudWxsLCBhKX0ke0Zvcm1hdHMuZGVmYXVsdC5jYWxsKG51bGwsIGIpfWAsXG4gICAgJz0nOiAgKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPT09IGIsXG4gICAgJzw+JzogKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgIT09IGIsXG4gICAgJz4nOiAgKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPiBiLFxuICAgICc+PSc6IChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhID49IGIsXG4gICAgJzwnOiAgKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPCBiLFxuICAgICc8PSc6IChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhIDw9IGIsXG59IGFzIFJlY29yZDxzdHJpbmcsIChfOiBDYWxjU2hlZXQsIC4uLmFyZ3M6VmFsdWVUeXBlW10pID0+IFZhbHVlVHlwZT47XG5cbi8vIGh0dHBzOi8vaGVscC5saWJyZW9mZmljZS5vcmcvbGF0ZXN0L2VuLVVTL3RleHQvc2NhbGMvMDEvMDQwNjAxOTkuaHRtbFxuY29uc3Qgb3BfcHJpbyA9IFtcbiAgICBbJzonXSwgLy8gcmFuZ2VcbiAgICBbJyEnXSwgLy8gcmFuZ2UgaW50ZXJzZWN0aW9uXG4gICAgWyd+J10sIC8vIHJhbmdlIHVuaW9uXG4gICAgWyd1LisnLCAndS4tJ10sIC8vIHVuYXJ5IC0gZnJvbSByaWdodCB0byBsZWZ0Li4uXG4gICAgWyclJ10sIC8vIHBvc3RmaXgsIC8xMDBcbiAgICBbJ14nXSwgLy8gcG93ZXJcbiAgICBbJyonLCAnLyddLFxuICAgIFsnKycsICctJ10sXG4gICAgWycmJ10sIC8vIHN0cmluZyBjb25jYXRcbiAgICBbJz0nLCAnPD4nLCAnPCcsICc8PScsICc+JywgJz49J10gLy8gY29tcGFyZVxuXTtcblxubGV0IG9wczogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHt9O1xuZm9yKGxldCBpID0gMDsgaSA8IG9wX3ByaW8ubGVuZ3RoOyArK2kpXG4gICAgZm9yKGxldCBvcCBvZiBvcF9wcmlvW2ldIClcbiAgICAgICAgb3BzW29wXSA9IGk7XG5cbmZ1bmN0aW9uIHRva2VubGlzdDJUcmVlKHRva2VuczogVG9rZW5bXSk6IE5vZGUge1xuXG4gICAgaWYoIHRva2Vucy5sZW5ndGggPT09IDEpIHtcblxuICAgICAgICBpZiggdG9rZW5zWzBdLnR5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IG5iID0gK3Rva2Vuc1swXS52YWx1ZS5yZXBsYWNlKCcsJywgJy4nKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTm9kZSggKCkgPT4gbmIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCB0b2tlbnNbMF0udHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgY29uc3Qgc3RyID0gdG9rZW5zWzBdLnZhbHVlLnNsaWNlKDEsLTEpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBOb2RlKCAoKSA9PiBzdHIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCB0b2tlbnNbMF0udHlwZSA9PT0gXCJyYW5nZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vZGUoIChzaGVldDogQ2FsY1NoZWV0KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsZXQgcmF3ID0gc2hlZXQuZ2V0UmFuZ2UodG9rZW5zWzBdLnZhbHVlKS5maXJzdENlbGwucmF3Q29udGVudDtcblxuICAgICAgICAgICAgICAgIGlmKCByYXcgaW5zdGFuY2VvZiBGb3JtdWxhKVxuICAgICAgICAgICAgICAgICAgICByYXcgPSByYXcuZXhlYyhzaGVldCk7IC8vIFRPRE86IGNhY2hlIHJlc3VsdFxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJhdyBhcyBWYWx1ZVR5cGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCI/Pz9cIik7XG4gICAgfVxuXG4gICAgaWYodG9rZW5zWzBdLnZhbHVlID09PSAnKCcgJiYgdG9rZW5zW3Rva2Vucy5sZW5ndGgtMV0udmFsdWUgPT09ICcpJylcbiAgICAgICAgcmV0dXJuIHRva2VubGlzdDJUcmVlKHRva2Vucy5zbGljZSgxLC0xKSApO1xuXG4gICAgbGV0IGN1ciA9IHtcbiAgICAgICAgcHJpb3JpdHk6IG9wX3ByaW8ubGVuZ3RoLFxuICAgICAgICBpZHggICAgIDogLTFcbiAgICB9O1xuXG4gICAgZm9yKGxldCBpID0gdG9rZW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIGlmKCB0b2tlbnNbaV0udHlwZSAhPT0gXCJvcFwiICkgLy8gY2FsbCBub3QgaGFuZGxlZCB5ZXQuLi5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgIGlmKCB0b2tlbnNbaV0udmFsdWUgPT09ICcpJyApIHsgLy8gZ28gdG8gZmlyc3QgJygnXG4gICAgICAgICAgICBpID0gdG9rZW5zLmZpbmRJbmRleCggdCA9PiB0LnR5cGUgPT09ICdvcCcgJiYgdC52YWx1ZSA9PT0gJygnKTtcblxuICAgICAgICAgICAgaWYoIGkgPT09IDApXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAtLWk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhc3NlcnRzIGlmIHVuYXJ5IG9wLlxuICAgICAgICBpZiggdG9rZW5zW2ldLnZhbHVlID09PSAnLScgfHwgdG9rZW5zW2ldLnZhbHVlID09PSAnKycgKSB7XG5cbiAgICAgICAgICAgIGlmKCBpID09PSAwIHx8IHRva2Vuc1tpLTFdLnR5cGUgPT09IFwib3BcIiApIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHVfb3AgPSBgdS4ke3Rva2Vuc1tpXS52YWx1ZX1gO1xuICAgICAgICAgICAgICAgIHRva2Vuc1tpXS52YWx1ZSA9IHVfb3A7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBvcHNbdV9vcF07XG5cbiAgICAgICAgICAgICAgICAvLyBwcmlvcml0eSBpcyByZXZlcnNlZCArIGV2YWx1YXRlZCBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gICAgICAgICAgICAgICAgaWYoIHByaW9yaXR5IDw9IGN1ci5wcmlvcml0eSkge1xuICAgICAgICAgICAgICAgICAgICBjdXIucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgICAgICAgICAgICAgY3VyLmlkeCAgICAgID0gaTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gb3BzW3Rva2Vuc1tpXS52YWx1ZV07XG5cbiAgICAgICAgLy8gcHJpb3JpdHkgaXMgcmV2ZXJzZWQuXG4gICAgICAgIGlmKCBwcmlvcml0eSA8IGN1ci5wcmlvcml0eSkge1xuICAgICAgICAgICAgY3VyLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgICAgICBjdXIuaWR4ICAgICAgPSBpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoIGN1ci5pZHggPT09IC0xKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJz8/PycpO1xuXG4gICAgbGV0IG9wX3Rva2VuID0gdG9rZW5zW2N1ci5pZHhdO1xuICAgIGlmKCBvcF90b2tlbi52YWx1ZSA9PT0gJyUnICkge1xuICAgICAgICBjb25zdCBsZWZ0ICA9IHRva2Vucy5zbGljZSgwLCBjdXIuaWR4KTtcbiAgICAgICAgY29uc3Qgb3AgPSBvcF9pbXBsW29wX3Rva2VuLnZhbHVlIGFzIGtleW9mIHR5cGVvZiBvcF9pbXBsXTtcbiAgICAgICAgcmV0dXJuIG5ldyBOb2RlKFxuICAgICAgICAgICAgb3AsXG4gICAgICAgICAgICB0b2tlbmxpc3QyVHJlZShsZWZ0KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlmKCBvcF90b2tlbi52YWx1ZSA9PT0gJ3UuLScgfHwgIG9wX3Rva2VuLnZhbHVlID09PSAndS4rJyApIHtcblxuICAgICAgICBjb25zdCByaWdodCAgPSB0b2tlbnMuc2xpY2UoY3VyLmlkeCsxKTtcbiAgICAgICAgY29uc3Qgb3AgPSBvcF9pbXBsW29wX3Rva2VuLnZhbHVlIGFzIGtleW9mIHR5cGVvZiBvcF9pbXBsXTtcbiAgICAgICAgcmV0dXJuIG5ldyBOb2RlKFxuICAgICAgICAgICAgb3AsXG4gICAgICAgICAgICB0b2tlbmxpc3QyVHJlZShyaWdodClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBsZWZ0ICA9IHRva2Vucy5zbGljZSgwLCBjdXIuaWR4KTtcbiAgICBjb25zdCByaWdodCA9IHRva2Vucy5zbGljZShjdXIuaWR4KzEpO1xuXG4gICAgY29uc3Qgb3AgPSBvcF9pbXBsW29wX3Rva2VuLnZhbHVlIGFzIGtleW9mIHR5cGVvZiBvcF9pbXBsXTtcblxuICAgIHJldHVybiBuZXcgTm9kZShcbiAgICAgICAgb3AsXG4gICAgICAgIHRva2VubGlzdDJUcmVlKGxlZnQpLFxuICAgICAgICB0b2tlbmxpc3QyVHJlZShyaWdodClcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VfZm9ybXVsYShzdHI6c3RyaW5nKSB7XG5cbiAgICBsZXQgb2Zmc2V0ID0gMTtcbiAgICBsZXQgdG9rZW5zID0gbmV3IEFycmF5PFRva2VuPigpO1xuXG4gICAgd2hpbGUoIG9mZnNldCA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGN1clRva2VuID0gZXh0cmFjdFRva2VuKHN0ciwgb2Zmc2V0KTtcbiAgICAgICAgdG9rZW5zLnB1c2goIGN1clRva2VuICk7XG4gICAgICAgIG9mZnNldCA9IGN1clRva2VuLmVuZDtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gdG9rZW5saXN0MlRyZWUodG9rZW5zKSE7XG5cbiAgICBjb25zdCByYW5nZXMgPSB0b2tlbnMuZmlsdGVyKHQgPT4gdC50eXBlID09PSBcInJhbmdlXCIgKTtcblxuICAgIHJldHVybiBuZXcgRm9ybXVsYShzdHIsIChzaGVldDogQ2FsY1NoZWV0KSA9PiBub2RlLmV2YWwoc2hlZXQpLCByYW5nZXMgKTtcbn0iLCIvL1RPRE86IHdlYnBhY2sgY29uZmlnLi4uXG5pbXBvcnQgTElTUyBmcm9tIFwiLi4vLi4vLi4vbGlicy9MSVNTXCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGxMaXN0LCBkZWZhdWx0Rm9ybWF0IH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuLy9UT0RPOiBzeW50YXggaGlnaGxpZ2h0IDspXG5cbmNvbnN0IGNzcyA9IGBcbiAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgJiBwcmUge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoIDFyZW0gKyA4cHggKyAycHggKTtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGliZXJhdGlvbiBTYW5zJztcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmV4cG9ydCBjbGFzcyBQbGFnZUZvcm11bGEgZXh0ZW5kcyBMSVNTKHtcbiAgICBjc3Ncbn0pIHtcblxuICAgICNpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCggdGhpcy4jaW5wdXQgKTtcbiAgICAgICAgdGhpcy4jaW5wdXQudG9nZ2xlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcblxuICAgICAgICB0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2KSA9PiB7XG4gICAgICAgICAgICBpZihldi5jb2RlICE9PSAnRW50ZXInKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgZXYuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuI3NoZWV0LmdldENlbGxzKHRoaXMuI2lucHV0LnRleHRDb250ZW50ISkuY2VsbHM7XG5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmFkZCggLi4uc2VsZWN0ZWQgKTtcblxuICAgICAgICAgICAgdGhpcy4jc2hlZXQuY3Vyc29yLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLiNzaGVldC5jdXJzb3IuYWRkKCBzZWxlY3RlZFswXSApO1xuXG4gICAgICAgICAgICB0aGlzLiNpbnB1dC5ibHVyKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy9UT0RPLi4uLlxuICAgICAgICB0aGlzLiNpbnB1dC50b2dnbGVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIC8qdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuXG4gICAgICAgIH0pOyovXG4gICAgfVxuXG4gICAgI3NoZWV0ITogQ2FsY1NoZWV0O1xuXG4gICAgc3luY1RvKHNoZWV0OiBDYWxjU2hlZXQpIHtcblxuICAgICAgICB0aGlzLiNzaGVldCA9IHNoZWV0O1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHNoZWV0LnNlbGVjdGlvbjtcblxuICAgICAgICBzZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKF86IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jaW5wdXQudGV4dENvbnRlbnQgPSBzZWxlY3Rpb24ucGxhZ2VfbmFtZSA/PyBcIlwiO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbkxJU1MuZGVmaW5lKCdjYWxjLXBsYWdlJywgUGxhZ2VGb3JtdWxhKTsiLCJpbXBvcnQgeyBSYW5nZU92ZXJsYXkgfSBmcm9tIFwiLi9SYW5nZU92ZXJsYXlcIjtcbmltcG9ydCB7IENhbGNTaGVldCwgQ2VsbCB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbmV4cG9ydCBjbGFzcyBQbGFnZVNlbGVjdG9yIHtcblxuICAgICNvdmVybGF5cyA9IG5ldyBBcnJheTxSYW5nZU92ZXJsYXk+KCk7XG4gICAgI2dldE92ZXJsYXkoaWQ6IG51bWJlcikge1xuICAgICAgICB3aGlsZShpZCA+PSB0aGlzLiNvdmVybGF5cy5sZW5ndGgpXG4gICAgICAgICAgICB0aGlzLiNvdmVybGF5cy5wdXNoKCBuZXcgUmFuZ2VPdmVybGF5KHRoaXMuI3NoZWV0LCBcInNlbGVjdGlvbl9oaWdobGlnaHRcIikgKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuI292ZXJsYXlzW2lkXTtcbiAgICB9XG5cbiAgICAjdXBkYXRlU2VsZWN0aW9uKCkge1xuXG4gICAgICAgIGxldCBzZWxlY3RlZF9jZWxscyA9IHRoaXMuI3NoZWV0LmdldFJhbmdlKCB0aGlzLiNvcmlnX3BvcywgdGhpcy4jZmluYWxfcG9zICkuY2VsbHM7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmNsZWFyKCk7IC8vIHdlIGFkZCBpdC4uLlxuXG4gICAgICAgIGlmKCB0aGlzLiNpc0N0cmwgKSB7XG5cbiAgICAgICAgICAgIC8vIHJlc3RvcmUgaW5pdGlhbCBzdGF0ZS4uLlxuICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmFkZCguLi50aGlzLiNwcmV2X3NlbGVjdGlvbik7XG5cbiAgICAgICAgICAgIC8vVE9ETyBvbmx5IG9yaWdfdGFyZ2V0Li4uXG4gICAgICAgICAgICBpZih0aGlzLiNzaGVldC5zZWxlY3Rpb24uaGFzKCAuLi5zZWxlY3RlZF9jZWxscyApIClcbiAgICAgICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24ucmVtb3ZlKCAuLi5zZWxlY3RlZF9jZWxscyApO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5hZGQoIC4uLnNlbGVjdGVkX2NlbGxzICk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5hZGQoIC4uLnNlbGVjdGVkX2NlbGxzICk7XG5cbiAgICB9XG5cbiAgICAjdXBkYXRlU2VsZWN0aW9uSGlnaGxpZ2h0KCkge1xuXG4gICAgICAgIGNvbnN0IGNlbGxzID0gdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmNlbGxzO1xuICAgICAgICBmb3IobGV0IG92ZXJsYXkgb2YgdGhpcy4jb3ZlcmxheXMpXG4gICAgICAgICAgICBvdmVybGF5LnNldFJhbmdlKG51bGwpO1xuXG4gICAgICAgIGlmKCBjZWxscy5sZW5ndGggPT09IDEgJiYgdGhpcy4jc2hlZXQuY3Vyc29yLmZpcnN0Q2VsbCA9PT0gY2VsbHNbMF0gKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgIHRoaXMuI2dldE92ZXJsYXkoaSkuc2V0UmFuZ2UoIHRoaXMuI3NoZWV0LmdldFJhbmdlKCBjZWxsc1tpXSApICk7XG4gICAgfVxuXG4gICAgI2lzQ3RybCAgICAgICAgITogYm9vbGVhbjtcbiAgICAjc2hlZXQgICAgICAgICAgOiBDYWxjU2hlZXQ7XG4gICAgI29yaWdfdGFyZ2V0ICAgITogSFRNTEVsZW1lbnQ7XG4gICAgI29yaWdfcG9zICAgICAgITogW251bWJlciwgbnVtYmVyXTtcbiAgICAjZmluYWxfcG9zICAgICAhOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgICNwcmV2X3NlbGVjdGlvbiE6IENlbGxbXTtcblxuICAgICNldjJwb3MoZXY6IE1vdXNlRXZlbnQpOiBbbnVtYmVyLG51bWJlcl0ge1xuXG4gICAgICAgIGNvbnN0IGNvbHMgPSBbLi4udGhpcy4jc2hlZXQudGJvZHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5dO1xuICAgICAgICBsZXQgY29sX2lkO1xuICAgICAgICBmb3IoY29sX2lkID0gY29scy5sZW5ndGgtMTsgY29sX2lkID49IDA7IC0tY29sX2lkKSB7XG4gICAgICAgICAgICBpZiggZXYuY2xpZW50WCA+PSBjb2xzW2NvbF9pZF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueCApXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJvd3MgPSBbLi4udGhpcy4jc2hlZXQudGJvZHkuY2hpbGRyZW5dLm1hcCggZSA9PiBlLmNoaWxkcmVuWzBdICk7XG4gICAgICAgIGxldCByb3dfaWQ7XG4gICAgICAgIGZvcihyb3dfaWQgPSByb3dzLmxlbmd0aC0xOyByb3dfaWQgPj0gMDsgLS1yb3dfaWQpIHtcbiAgICAgICAgICAgIGlmKCBldi5jbGllbnRZID49IHJvd3Nbcm93X2lkXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55IClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbcm93X2lkLCBjb2xfaWRdO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHNoZWV0OiBDYWxjU2hlZXQpIHtcblxuICAgICAgICB0aGlzLiNzaGVldCA9IHNoZWV0O1xuXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykhO1xuXG4gICAgICAgIGNvbnN0IG9uX21vdXNlX21vdmUgPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgdGhpcy4jZmluYWxfcG9zID0gdGhpcy4jZXYycG9zKGV2KTtcblxuICAgICAgICAgICAgdGhpcy4jdXBkYXRlU2VsZWN0aW9uKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgc2hlZXQuY3Vyc29yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi5yZXBsYWNlQWxsKCBzaGVldC5nZXRWaXNpYmxlQ2VsbChzaGVldC5jdXJzb3IpICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNoZWV0LnNlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiN1cGRhdGVTZWxlY3Rpb25IaWdobGlnaHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBzaGVldC5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2Ok1vdXNlRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgaWYoIHNoZWV0LnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPT09IHRhcmdldCApICAvLyBhIGNlbGwgYmVpbmcgZWRpdGVkLlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlmKCAhIFtcIlRIXCIsIFwiVERcIl0uaW5jbHVkZXMoIHRhcmdldC50YWdOYW1lICkgKS8vIC4uLlxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lID09PSBcIlRIXCIgJiYgdGFyZ2V0LnRleHRDb250ZW50ID09PSBcIlwiICkgeyAvLyBtb3VzZW1vdmUgZG9lcyBub3RoaW5nLlxuXG4gICAgICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVmID0gYEExOiR7dGhpcy4jc2hlZXQucG9zMnJlZih0aGlzLiNzaGVldC5uYlJvd3MsIHRoaXMuI3NoZWV0Lm5iQ29scyl9YDtcbiAgICAgICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uYWRkKCAuLi50aGlzLiNzaGVldC5nZXRDZWxscyhyZWYpLmNlbGxzICk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuI2lzQ3RybCAgICAgICAgID0gZXYuY3RybEtleTtcbiAgICAgICAgICAgIHRoaXMuI29yaWdfdGFyZ2V0ICAgID0gdGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy4jb3JpZ19wb3MgICAgICAgPSB0aGlzLiNldjJwb3MoZXYpOyAvLyBDYW4gYmUgVEguLi5cbiAgICAgICAgICAgIHRoaXMuI2ZpbmFsX3BvcyAgICAgID0gdGhpcy4jb3JpZ19wb3M7XG4gICAgICAgICAgICB0aGlzLiNwcmV2X3NlbGVjdGlvbiA9IHNoZWV0LnNlbGVjdGlvbi5jZWxscy5zbGljZSgpO1xuXG4gICAgICAgICAgICB0aGlzLiN1cGRhdGVTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25fbW91c2VfbW92ZSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWFpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbl9tb3VzZV9tb3ZlKTtcbiAgICAgICAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxufSIsIi8vVE9ETzogd2VicGFjayBjb25maWcuLi5cbmltcG9ydCBMSVNTIGZyb20gXCIuLi8uLi8uLi9saWJzL0xJU1NcIjtcblxuLy9AdHMtaWdub3JlXG5pbXBvcnQgY3NzIGZyb20gXCIhIXJhdy1sb2FkZXIhLi9pbmRleC5jc3NcIjtcblxuZXhwb3J0IHR5cGUgVmFsdWVUeXBlID0gc3RyaW5nfG51bWJlcnxEYXRlfGJvb2xlYW47XG5leHBvcnQgdHlwZSBSYXdDb250ZW50VHlwZSA9IFZhbHVlVHlwZXxGb3JtdWxhO1xuXG5leHBvcnQgdHlwZSBDZWxsID0gSFRNTFRhYmxlQ2VsbEVsZW1lbnQgJiB7XG4gICAgcmF3Q29udGVudDogUmF3Q29udGVudFR5cGUsXG4gICAgZm9ybWF0OiAodGhpczogQ2VsbCwgdj86IG51bWJlcnxzdHJpbmd8RGF0ZSkgPT4gc3RyaW5nLFxuICAgIGlzX3JvOiBib29sZWFuLFxuICAgIGNlbGwgPzogQ2VsbFxufTtcblxuZnVuY3Rpb24gaXNBY3RpdmUodGFyZ2V0OiBIVE1MRWxlbWVudCkge1xuXG4gICAgcmV0dXJuIHRhcmdldC5tYXRjaGVzKCc6Zm9jdXMnKTtcbi8qXG4gICAgbGV0IGFjdGl2ZSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICB3aGlsZSggYWN0aXZlPy5zaGFkb3dSb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCApXG4gICAgICAgIGFjdGl2ZSA9IGFjdGl2ZS5zaGFkb3dSb290LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICByZXR1cm4gYWN0aXZlID09PSB0YXJnZXQ7Ki9cbn1cblxuZnVuY3Rpb24gb25JbnB1dChldjogRXZlbnQpIHtcblxuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIxMjM0NzQxL3BsYWNlLWNhcmV0LWJhY2std2hlcmUtaXQtd2FzLWFmdGVyLWNoYW5naW5nLWlubmVyaHRtbC1vZi1hLWNvbnRlbnRlZGl0YWJsZS1lbGVtXG5cbiAgICBsZXQgcnJhbmdlID0gd2luZG93LmdldFNlbGVjdGlvbigpIS5nZXRSYW5nZUF0KDApO1xuICAgIGxldCBjID0gcnJhbmdlLnN0YXJ0T2Zmc2V0O1xuXG4gICAgLy9sZXQgdGV4dCA9IFwiXCI7XG4gICAgbGV0IGxlbmd0aCA9IDA7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRhcmdldC5jaGlsZE5vZGVzLmxlbmd0aDsgKytpKSB7XG5cbiAgICAgICAgbGV0IGNoaWxkID0gdGFyZ2V0LmNoaWxkTm9kZXNbaV07XG4gICAgICAgIGlmKCBjaGlsZC5ub2RlVHlwZSAhPT0gTm9kZS5URVhUX05PREUpXG4gICAgICAgICAgICBjaGlsZCA9IGNoaWxkLmNoaWxkTm9kZXNbMF07XG5cbiAgICAgICAgaWYoIHJyYW5nZS5zdGFydENvbnRhaW5lciA9PT0gY2hpbGQgKSB7XG4gICAgICAgICAgICAvL3RleHQgKz0gcC5jaGlsZE5vZGVzW2ldLnRleHRDb250ZW50IS5zbGljZSgwLCBjKTtcbiAgICAgICAgICAgIGxlbmd0aCArPSBjO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy90ZXh0ICs9IHAuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudDtcbiAgICAgICAgbGVuZ3RoICs9IHRhcmdldC5jaGlsZE5vZGVzW2ldLnRleHRDb250ZW50IS5sZW5ndGg7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGlubmVySFRNTFxuICAgIHRhcmdldC50ZXh0Q29udGVudCA9IHRhcmdldC50ZXh0Q29udGVudDtcblxuICAgIGxldCBjaGlsZCE6IENoaWxkTm9kZTtcbiAgICBsZXQgaTtcbiAgICBmb3IoaSA9IDA7IGkgPCB0YXJnZXQuY2hpbGROb2Rlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiggbGVuZ3RoIDw9IHRhcmdldC5jaGlsZE5vZGVzW2ldLnRleHRDb250ZW50IS5sZW5ndGggKSB7XG4gICAgICAgICAgICBjaGlsZCA9IHRhcmdldC5jaGlsZE5vZGVzW2ldO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbGVuZ3RoIC09IHRhcmdldC5jaGlsZE5vZGVzW2ldLnRleHRDb250ZW50IS5sZW5ndGg7XG4gICAgfVxuXG4gICAgaWYoIGNoaWxkLm5vZGVUeXBlICE9PSBOb2RlLlRFWFRfTk9ERSlcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5jaGlsZE5vZGVzWzBdO1xuXG4gICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpITtcblxuICAgIHJhbmdlLnNldFN0YXJ0KGNoaWxkLCBsZW5ndGgpO1xuICAgIHJhbmdlLmNvbGxhcHNlKHRydWUpO1xuICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBzZWwuYWRkUmFuZ2UocmFuZ2UpO1xufVxuXG5mdW5jdGlvbiBwYXJzZUlucHV0KCBzdHI6IHN0cmluZyApOiBSYXdDb250ZW50VHlwZSB7XG5cbiAgICBpZihzdHIgPT09ICdWUkFJJylcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgaWYoc3RyID09PSAnRkFVWCcpXG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIGlmKHN0ci50cmltKCkgPT09ICcnKVxuICAgICAgICByZXR1cm4gc3RyO1xuXG4gICAgaWYoc3RyWzBdID09PSBcIj1cIikge1xuICAgICAgICByZXR1cm4gcGFyc2VfZm9ybXVsYShzdHIpO1xuICAgIH1cblxuICAgIGxldCB0ZXN0X251bWJlciA9IE51bWJlciggc3RyLnJlcGxhY2UoJywnLCAnLicpLnJlcGxhY2VBbGwoJ1xceEEwJywgJycpICk7XG4gICAgaWYoICEgTnVtYmVyLmlzTmFOKCB0ZXN0X251bWJlciApIClcbiAgICAgICAgcmV0dXJuIHRlc3RfbnVtYmVyO1xuICAgIGlmKCBzdHJbc3RyLmxlbmd0aC0xXSA9PT0gXCIlXCIgfHwgc3RyW3N0ci5sZW5ndGgtMV0gPT09IFwi4oKsXCIgKSB7XG4gICAgICAgIHRlc3RfbnVtYmVyID0gTnVtYmVyKCBzdHIuc2xpY2UoMCwtMSkucmVwbGFjZUFsbCgnXFx4QTAnLCAnJykucmVwbGFjZSgnLCcsICcuJykgKTtcbiAgICAgICAgaWYoICEgTnVtYmVyLmlzTmFOKCB0ZXN0X251bWJlciApICkge1xuICAgICAgICAgICAgaWYoIHN0cltzdHIubGVuZ3RoLTFdID09PSBcIuKCrFwiIClcbiAgICAgICAgICAgICAgICByZXR1cm4gdGVzdF9udW1iZXI7XG4gICAgICAgICAgICByZXR1cm4gKyh0ZXN0X251bWJlciAvIDEwMCkudG9QcmVjaXNpb24oNyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYXJ0cyA9IHN0ci5zcGxpdCgnLycpO1xuICAgIGlmKHBhcnRzLmxlbmd0aCA8PSAzKSB7XG5cbiAgICAgICAgbGV0IHRlc3RfZGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgK3BhcnRzWzJdID8/IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgICtwYXJ0c1sxXS0xLFxuICAgICAgICAgICAgK3BhcnRzWzBdXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYoIHRlc3RfZGF0ZS50b1N0cmluZygpICE9PSBcIkludmFsaWQgRGF0ZVwiIClcbiAgICAgICAgICAgIHJldHVybiB0ZXN0X2RhdGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbn1cblxuY2xhc3MgU3RhdGU8VD4ge1xuXG4gICAgI3N0YXRlIDogVHxudWxsID0gbnVsbDtcbiAgICAjdGFyZ2V0OiBFdmVudFRhcmdldDtcbiAgICAjbmFtZSAgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQ6IEV2ZW50VGFyZ2V0LCBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy4jdGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLiNuYW1lICAgPSBuYW1lO1xuICAgIH1cblxuICAgIGdldCBzdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3N0YXRlO1xuICAgIH1cblxuICAgIHNldCBzdGF0ZShzdGF0ZTogVHxudWxsKSB7XG5cbiAgICAgICAgaWYoIHRoaXMuI3N0YXRlID09PSBzdGF0ZSlcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBsZXQgcHJldl9zdGF0ZSA9IHRoaXMuI3N0YXRlO1xuICAgICAgICB0aGlzLiNzdGF0ZSA9IHN0YXRlO1xuICAgICAgICBcblxuICAgICAgICBpZiggcHJldl9zdGF0ZSAhPT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMuI3RhcmdldC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoYCR7dGhpcy4jbmFtZX1fZW5kYCwge2RldGFpbDogcHJldl9zdGF0ZX0pICk7ICAgICAgICAgICAgXG5cbiAgICAgICAgaWYoIHN0YXRlICE9PSBudWxsIClcbiAgICAgICAgICAgIHRoaXMuI3RhcmdldC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoYCR7dGhpcy4gI25hbWV9X3N0YXJ0YCwge2RldGFpbDogc3RhdGV9KSApO1xuICAgIH1cbn1cblxuY29uc3QgU3RhdGVzID0ge1xuICAgIFwiY2VsbF9lZGl0XCI6IFN0YXRlPENlbGw+LFxuICAgIFwicmVjb3B5XCIgICA6IFN0YXRlPENlbGxMaXN0PlxuIH0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjbGFzcyBDYWxjU2hlZXQgZXh0ZW5kcyBMSVNTKHtcbiAgICBjc3MsXG4gICAgYXR0cmlidXRlczogW1wiY29sc1wiLCBcInJvd3NcIiwgXCJyb1wiXVxufSkge1xuXG4gICAgc3RhdGVzID0gT2JqZWN0LmZyb21FbnRyaWVzKCBPYmplY3QuZW50cmllcyhTdGF0ZXMpLm1hcCggKFtuLHNdKSA9PiBbbiwgbmV3IHModGhpcy5ob3N0LCBuKV0gYXMgY29uc3QgKSk7XG5cblxuICAgIC8vVE9ETzogUk8gcHJvcCA/XG4gICAgI2N1cnNvciAgICA9IG5ldyBDZWxsTGlzdCh0aGlzLCBbXSk7XG4gICAgI3NlbGVjdGlvbjogQ2VsbExpc3QgPSBuZXcgQ2VsbExpc3QodGhpcywgW10pO1xuICAgICNwbGFnZV9zZWxlY3RvciA9IG5ldyBQbGFnZVNlbGVjdG9yKHRoaXMpO1xuXG4gICAgI2Zvcm1hdF9tbmdyID0gbmV3IEZvcm1hdE1hbmFnZXIodGhpcyk7XG5cbiAgICBzdGF0aWMgZ2V0U2hlZXRGcm9tQ2VsbChjZWxsOiBDZWxsKSB7XG4gICAgICAgIHJldHVybiBMSVNTLmdldExJU1NTeW5jPENhbGNTaGVldD4oIChjZWxsLmdldFJvb3ROb2RlKCkgYXMgU2hhZG93Um9vdCkuaG9zdCApO1xuICAgIH1cblxuICAgIGdldCBjdXJzb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjdXJzb3I7XG4gICAgfVxuICAgIGdldCBzZWxlY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzZWxlY3Rpb247XG4gICAgfVxuXG4gICAgb3ZlcnJpZGUgZ2V0IGNvbnRlbnQoKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5jb250ZW50O1xuICAgIH1cblxuICAgIHNldFJlY3QodGFyZ2V0OiBIVE1MRWxlbWVudCwgW3gseSx3LGhdOiByZWFkb25seSBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSkge1xuXG4gICAgICAgIGNvbnN0IHRibF9vZmZzZXQgPSB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvcigndGFibGUnKSEub2Zmc2V0VG9wO1xuXG4gICAgICAgIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eSgndG9wJyAgICwgYCR7dGJsX29mZnNldCArIHl9cHhgKTtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KCdoZWlnaHQnLCBgJHtofXB4YCk7XG5cbiAgICAgICAgdGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KCdsZWZ0JyAgICwgYCR7eH1weGApO1xuICAgICAgICB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkoJ3dpZHRoJywgYCR7d31weGApO1xuXG4gICAgfVxuXG4gICAgZ2V0UmVjdChjZWxsczogQ2VsbExpc3R8Q2VsbFtdKSB7XG5cbiAgICAgICAgY2VsbHMgPSBcImNlbGxzXCIgaW4gY2VsbHMgPyBjZWxscy5jZWxscyA6IGNlbGxzO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gY2VsbHNbMF07XG4gICAgICAgIGNvbnN0IGVuZCAgID0gY2VsbHNbY2VsbHMubGVuZ3RoLTFdO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHN0YXJ0Lm9mZnNldExlZnQsXG4gICAgICAgICAgICBzdGFydC5vZmZzZXRUb3AsXG4gICAgICAgICAgICBlbmQub2Zmc2V0TGVmdCArIGVuZC5jbGllbnRXaWR0aCAtIHN0YXJ0Lm9mZnNldExlZnQgKyAxLFxuICAgICAgICAgICAgZW5kLm9mZnNldFRvcCArIGVuZC5jbGllbnRIZWlnaHQgLSBzdGFydC5vZmZzZXRUb3AgKyAxXG4gICAgICAgIF0gYXMgY29uc3Q7XG4gICAgfVxuXG4gICAgcmVsYXRpdmVUbyhjZWxsOiBDZWxsLCByb3dfZGlmZjogbnVtYmVyLCBjb2xfZGlmZjogbnVtYmVyKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgW3JvdywgY29sXSA9IHRoaXMuY2VsbFBvcyhjZWxsKTtcblxuICAgICAgICByb3cgKz0gcm93X2RpZmY7XG4gICAgICAgIGNvbCArPSBjb2xfZGlmZjtcblxuICAgICAgICAvLyBmb3Igbm9ybWFsIDogZ2V0IHN0dWNrIGluc2lkZSBncmlkLlxuICAgICAgICBpZiggcm93IDwgMSlcbiAgICAgICAgICAgIHJvdyA9IDE7XG4gICAgICAgIGlmKCByb3cgPj0gdGhpcy4jdGJvZHkuY2hpbGRyZW4ubGVuZ3RoIClcbiAgICAgICAgICAgIHJvdyA9IHRoaXMuI3Rib2R5LmNoaWxkcmVuLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgaWYoIGNvbCA8IDEpXG4gICAgICAgICAgICBjb2wgPSAxO1xuICAgICAgICBpZiggY29sID49IHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW4ubGVuZ3RoIClcbiAgICAgICAgICAgIGNvbCA9IHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW4ubGVuZ3RoIC0gMTtcblxuICAgICAgICByZXR1cm4gdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlbltjb2xdIGFzIENlbGw7XG4gICAgfVxuXG4gICAgLy9UT0RPOiAyRC4uLlxuICAgICNwYXN0ZWJpbjogQ2VsbExpc3QgfCBudWxsID0gbnVsbDtcblxuICAgICNmb3JtdWxhX3JlZnMgPSBuZXcgQXJyYXk8Rm9ybXVsYVJlZj4oKTtcbiAgICAjZ2V0Rm9ybXVsYVJlZihpOiBudW1iZXIpIHtcbiAgICAgICAgd2hpbGUoIGkgPj0gdGhpcy4jZm9ybXVsYV9yZWZzLmxlbmd0aClcbiAgICAgICAgICAgIHRoaXMuI2Zvcm11bGFfcmVmcy5wdXNoKCBuZXcgRm9ybXVsYVJlZih0aGlzKSApO1xuXG4gICAgICAgIHJldHVybiB0aGlzLiNmb3JtdWxhX3JlZnNbaV07XG4gICAgfVxuICAgICNjbGVhckZvcm11bGFSZWZzKCkge1xuICAgICAgICBmb3IobGV0IHJlZiBvZiB0aGlzLiNmb3JtdWxhX3JlZnMpXG4gICAgICAgICAgICByZWYuc2V0UmFuZ2UobnVsbCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgY29uc3QgY3Vyc29yID0gbmV3IFJhbmdlT3ZlcmxheSh0aGlzLCBcImN1cnNvclwiKTtcbiAgICAgICAgY29uc3QgcmVjb3B5ID0gbmV3IFJlY29weUhhbmRsZSh0aGlzKTtcbiAgICAgICAgY29uc3QgY29weSAgID0gbmV3IFJhbmdlT3ZlcmxheSh0aGlzLCBcImNvcHlfaGlnaGxpZ2h0XCIpO1xuXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKSE7XG5cbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ2NlbGxfZWRpdF9lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNjbGVhckZvcm11bGFSZWZzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBsYXN0X3JlY29weV90YXJnZXQ6IENlbGx8bnVsbCA9IG51bGw7XG4gICAgICAgIGxldCBsYXN0X3JlY29weV9kaXIgICA6IFtudW1iZXIsIG51bWJlcl18bnVsbCA9IG51bGxcblxuICAgICAgICBjb25zdCBvbl9yZWNvcHlfbW92ZSA9IChldjogTW91c2VFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICBsZXQgY2VsbHMgPSAodGhpcy5zdGF0ZXMucmVjb3B5LnN0YXRlIGFzIENlbGxMaXN0KS5jZWxscztcbiAgICAgICAgICAgIGNvbnN0IHNyYyA9IGNlbGxzW2NlbGxzLmxlbmd0aC0xXTtcblxuICAgICAgICAgICAgbGV0IHBvcyA9IHNyYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgICAgbGV0IGRfcHggPSBldi5jbGllbnRYIC0gKHBvcy54ICsgcG9zLndpZHRoIC8yKTtcbiAgICAgICAgICAgIGxldCBkX3B5ID0gZXYuY2xpZW50WSAtIChwb3MueSArIHBvcy5oZWlnaHQvMik7XG5cbiAgICAgICAgICAgIGxldCBkX3ggPSAwO1xuICAgICAgICAgICAgbGV0IGRfeSA9IE1hdGguc2lnbihkX3B5KTtcblxuICAgICAgICAgICAgaWYoIE1hdGguYWJzKGRfcHgpID4gTWF0aC5hYnMoZF9weSkgKSB7XG4gICAgICAgICAgICAgICAgZF94ID0gTWF0aC5zaWduKGRfcHgpO1xuICAgICAgICAgICAgICAgIGRfeSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBwcmV2ID0gc3JjO1xuICAgICAgICAgICAgbGV0IGN1ciAgPSBzcmM7XG5cbiAgICAgICAgICAgIGxldCBkaWZmX3gsIGRpZmZfeTtcblxuICAgICAgICAgICAgZG8ge1xuXG4gICAgICAgICAgICAgICAgcHJldj0gY3VyO1xuICAgICAgICAgICAgICAgIGN1ciA9IHRoaXMucmVsYXRpdmVUbyhwcmV2LCBkX3ksIGRfeCk7XG5cbiAgICAgICAgICAgICAgICBpZiggY3VyID09PSBwcmV2KVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGxldCBwb3NfY3VyID0gY3VyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIGRpZmZfeCA9IGV2LmNsaWVudFggLSAocG9zX2N1ci54ICsgcG9zX2N1ci53aWR0aCAvMik7XG4gICAgICAgICAgICAgICAgZGlmZl95ID0gZXYuY2xpZW50WSAtIChwb3NfY3VyLnkgKyBwb3NfY3VyLmhlaWdodC8yKTtcblxuICAgICAgICAgICAgfSB3aGlsZSggZGlmZl94ICogZF94ICsgZGlmZl95ICogZF95ID4gMCApO1xuXG4gICAgICAgICAgICBsYXN0X3JlY29weV90YXJnZXQgPSBwcmV2O1xuICAgICAgICAgICAgbGFzdF9yZWNvcHlfZGlyICAgID0gW2RfeCxkX3ldO1xuXG4gICAgICAgICAgICBsZXQgYmVnID0gc3JjO1xuICAgICAgICAgICAgbGV0IGVuZCA9IHByZXY7XG4gICAgICAgICAgICBpZiggc3JjLm9mZnNldExlZnQgPiBwcmV2Lm9mZnNldExlZnQgfHwgc3JjLm9mZnNldFRvcCA+IHByZXYub2Zmc2V0VG9wIClcbiAgICAgICAgICAgICAgICBbYmVnLCBlbmRdID0gW2VuZCwgYmVnXTtcblxuICAgICAgICAgICAgLy9UT0RPOiBoaWdobGlnaHQuLi5cbiAgICAgICAgICAgIHRoaXMuI2NsZWFyRm9ybXVsYVJlZnMoKTtcbiAgICAgICAgICAgIHRoaXMuI2dldEZvcm11bGFSZWYoMSkuc2V0UmFuZ2UoIHRoaXMuZ2V0UmFuZ2UoYmVnLCBlbmQpICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVjb3B5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2KSA9PiB7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXRlcy5yZWNvcHkuc3RhdGUgPSB0aGlzLiNzZWxlY3Rpb247XG5cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbl9yZWNvcHlfbW92ZSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgW2RfeCwgZF95XSA9ICBsYXN0X3JlY29weV9kaXIhO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxzID0gKHRoaXMuc3RhdGVzLnJlY29weS5zdGF0ZSBhcyBDZWxsTGlzdCkuY2VsbHM7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3JjID0gY2VsbHNbY2VsbHMubGVuZ3RoLTFdO1xuXG4gICAgICAgICAgICAgICAgbGV0IG5iID0gMDtcblxuICAgICAgICAgICAgICAgIGlmKCBsYXN0X3JlY29weV90YXJnZXQgIT09IHNyYykgeyAvLyBjb3B5Li4uXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1ciA9IHNyYztcbiAgICAgICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgKytuYjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY3VyID0gdGhpcy5yZWxhdGl2ZVRvKGN1ciwgZF95LCBkX3gpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29udGVudDogUmF3Q29udGVudFR5cGV8Q2VsbCA9IHNyYztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCB0eXBlb2YgY29udGVudC5yYXdDb250ZW50ID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSAoc3JjLnJhd0NvbnRlbnQgYXMgbnVtYmVyKSArIG5iKihkX3ggKyBkX3kpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiggY29udGVudC5yYXdDb250ZW50IGluc3RhbmNlb2YgRGF0ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gbmV3IERhdGUoc3JjLnJhd0NvbnRlbnQgYXMgRGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5zZXREYXRlKCBjb250ZW50LmdldERhdGUoKSArIG5iKihkX3ggKyBkX3kpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENlbGxMaXN0KHRoaXMsIFtjdXJdKS5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ci5jbGFzc05hbWUgPSBzcmMuY2xhc3NOYW1lOyAvL1RPRE86IGZvcm1hdC4uLlxuXG5cbiAgICAgICAgICAgICAgICAgICAgfSB3aGlsZSggY3VyIT09IGxhc3RfcmVjb3B5X3RhcmdldCApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuI2NsZWFyRm9ybXVsYVJlZnMoKTsgLy8gcmVjb3B5XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZXMucmVjb3B5LnN0YXRlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBsYXN0X3JlY29weV90YXJnZXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGxhc3RfcmVjb3B5X2RpciAgICA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgbWFpbi5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uX3JlY29weV9tb3ZlKTtcblxuICAgICAgICAgICAgfSwge29uY2U6IHRydWV9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3JlY29weV9zdGFydCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdyZWNvcHknKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdyZWNvcHlfZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5yZW1vdmUoJ3JlY29weScpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuI2N1cnNvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXYpID0+IHtcblxuICAgICAgICAgICAgaWYoIHRoaXMuI2N1cnNvci5sZW5ndGggIT09IDEgKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ3Vyc29yIGhhcyBpbnZhbGlkIG51bWJlciBvZiBjZWxscycpO1xuXG4gICAgICAgICAgICBjdXJzb3Iuc2V0UmFuZ2UoIG5ldyBDZWxsTGlzdCh0aGlzLCBbdGhpcy5nZXRWaXNpYmxlQ2VsbCh0aGlzLiNjdXJzb3IpXSkgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jc2VsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldikgPT4ge1xuXG4gICAgICAgICAgICBmb3IoIGxldCBjZWxsIG9mIHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGlnaGxpZ2h0JykgKVxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gdGhpcy4jc2VsZWN0aW9uLmNlbGxzO1xuXG4gICAgICAgICAgICBpZiggY2VsbHMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgZm9yKCBsZXQgY2VsbCBvZiBjZWxscyApIHtcblxuICAgICAgICAgICAgICAgIGlmKCBjZWxscy5sZW5ndGggIT09IDEpXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgW3JvdywgY29sXSA9IHRoaXMuI2NlbGxQb3MoY2VsbCk7XG4gICAgICAgICAgICAgICAgdGhpcy4jdGJvZHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bY29sXS5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVjb3B5LnNldFJhbmdlKHRoaXMuI3NlbGVjdGlvbik7XG5cbiAgICAgICAgICAgIC8vIG9ubHkgaWYgc2ltcGxlLi4uXG4gICAgICAgICAgICAvLyBjb25zdCBsYXN0ID0gY2VsbHNbY2VsbHMubGVuZ3RoLTFdO1xuICAgICAgICAgICAgLy8gcG9pbnRlci4uLlxuICAgICAgICB9KTtcblxuICAgICAgICAvL1RPRE86IG1vdmUgb3V0ID9cbiAgICAgICAgY29uc3QgZm9ybXVsYV9iYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybXVsYV9iYXIuY2xhc3NMaXN0LmFkZCgndG9vbGJhcicpO1xuXG4gICAgICAgICggYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBwbGFnZSA9IGF3YWl0IExJU1MuYnVpbGQoXCJjYWxjLXBsYWdlXCIpO1xuICAgICAgICAgICAgcGxhZ2Uuc3luY1RvKHRoaXMpO1xuICAgICAgICAgICAgZm9ybXVsYV9iYXIuYXBwZW5kKCBwbGFnZS5ob3N0ICk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZvcm11bGEgPSBhd2FpdCBMSVNTLmJ1aWxkKFwiY2FsYy1mb3JtdWxhXCIpO1xuICAgICAgICAgICAgZm9ybXVsYS5zeW5jVG8odGhpcyk7XG4gICAgICAgICAgICBmb3JtdWxhX2Jhci5hcHBlbmQoIGZvcm11bGEuaG9zdCApO1xuXG4gICAgICAgIH0pKCk7XG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoZm9ybXVsYV9iYXIpO1xuXG4gICAgICAgIHRoaXMuI2luaXRHcmlkKCsodGhpcy5hdHRycy5yb3dzID8/IDEpLCArKHRoaXMuYXR0cnMuY29scyA/PyAxKSApO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldikgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIC8vIHRoZSBjZWxsIGlzIGJlaW5nIGVkaXRlZC4uLlxuICAgICAgICAgICAgaWYoIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSA9PT0gXCJURFwiIClcbiAgICAgICAgICAgICAgICB0aGlzLiNjdXJzb3IucmVwbGFjZUFsbCggdGFyZ2V0IGFzIENlbGwgKTtcblxuICAgICAgICAgICAgLy9UT0RPOiBub3QgY29ycmVjdC4uLlxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lID09PSBcIlRIXCIgJiYgdGFyZ2V0LnRleHRDb250ZW50ICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2V0UmFuZ2UodGFyZ2V0LnRleHRDb250ZW50ISkuZmlyc3RDZWxsO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jY3Vyc29yLnJlcGxhY2VBbGwoY2VsbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCAoZXYpID0+IHtcblxuICAgICAgICAgICAgbGV0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lICE9PSBcIlREXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiggdGhpcy5hdHRycy5ybyAhPT0gXCJ0cnVlXCIgJiYgKHRhcmdldCBhcyBDZWxsKS5pc19ybyAhPT0gdHJ1ZSApIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQudG9nZ2xlQXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIHRhcmdldC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2OiBLZXlib2FyZEV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGlmKCBldi5jb2RlLnN0YXJ0c1dpdGgoJ0Fycm93JykgKSB7XG5cbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY3VyID0gdGhpcy5jdXJzb3IuY2VsbHM7XG4gICAgICAgICAgICAgICAgaWYoIGN1ci5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGxldCBkX3JvdyA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IGRfY29sID0gMDtcblxuICAgICAgICAgICAgICAgIGlmKCBldi5jb2RlID09PSAnQXJyb3dMZWZ0JylcbiAgICAgICAgICAgICAgICAgICAgLS1kX2NvbDtcbiAgICAgICAgICAgICAgICBpZiggZXYuY29kZSA9PT0gJ0Fycm93UmlnaHQnKVxuICAgICAgICAgICAgICAgICAgICArK2RfY29sO1xuICAgICAgICAgICAgICAgIGlmKCBldi5jb2RlID09PSAnQXJyb3dVcCcpXG4gICAgICAgICAgICAgICAgICAgIC0tZF9yb3c7XG4gICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09ICdBcnJvd0Rvd24nKVxuICAgICAgICAgICAgICAgICAgICArK2Rfcm93O1xuXG4gICAgICAgICAgICAgICAgbGV0IG5leHQ6IENlbGw7XG4gICAgICAgICAgICAgICAgaWYoIGV2LmN0cmxLZXkgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHByZXYgICA9IGN1clswXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnNvciA9IHRoaXMucmVsYXRpdmVUbyhwcmV2LCBkX3JvdywgZF9jb2wpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKCBwcmV2LnJhd0NvbnRlbnQgIT09IHVuZGVmaW5lZCAmJiBjdXJzb3IucmF3Q29udGVudCAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlKCBwcmV2ICE9PSBjdXJzb3IgJiYgY3Vyc29yLnJhd0NvbnRlbnQgIT09IHVuZGVmaW5lZCkgeyAvLyB3ZSByZWFjaGVkIHRoZSBlbmQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldiAgID0gY3Vyc29yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvciA9IHRoaXMucmVsYXRpdmVUbyhwcmV2LCBkX3JvdywgZF9jb2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gcHJldjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlKCBwcmV2ICE9PSBjdXJzb3IgJiYgY3Vyc29yLnJhd0NvbnRlbnQgPT09IHVuZGVmaW5lZCkgeyAvLyB3ZSByZWFjaGVkIHRoZSBlbmQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldiAgID0gY3Vyc29yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvciA9IHRoaXMucmVsYXRpdmVUbyhwcmV2LCBkX3JvdywgZF9jb2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbmV4dCA9IGN1cnNvcjtcbiAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgICAgbmV4dCA9IHRoaXMucmVsYXRpdmVUbyggY3VyWzBdLCBkX3JvdywgZF9jb2wpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuI3Rib2R5LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJzb3IucmVwbGFjZUFsbChuZXh0KTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbm8gZWRpdGlvbiBhbGxvd2VkLi4uXG4gICAgICAgICAgICBpZiggdGhpcy5hdHRycy5ybyA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIGlmKCB0YXJnZXQgPT09IHRoaXMuI3Rib2R5ICkge1xuICAgICAgICAgICAgICAgIGlmKCBldi5jb2RlID09PSBcIktleVZcIiAmJiBldi5jdHJsS2V5ICYmIHRoaXMuI3Bhc3RlYmluICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLiNwYXN0ZWJpbi5jZWxscztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jc2VsZWN0aW9uLmNvbnRlbnQgPSBkYXRhO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvcHkgZm9ybWF0Li4uIFRPRE8gdXRpbGl0eSB0aGluZ3kuLi5cbiAgICAgICAgICAgICAgICAgICAgaWYoICEgZXYuc2hpZnRLZXkgfHwgISBldi5hbHRLZXkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcmMgPSB0aGlzLiNwYXN0ZWJpbi5jZWxscztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRzdCA9IHRoaXMuI3NlbGVjdGlvbi5jZWxscztcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7ICsraSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkc3RbaV0uY2xhc3NOYW1lID0gc3JjW2ldLmNsYXNzTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1RPRE86IGFkZCBmb3JtYXQuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiggKCBldi5rZXkgPT09IFwiY1wiIHx8IGV2LmtleSA9PT0gXCJ4XCIpICYmIGV2LmN0cmxLZXkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29weS5zZXRSYW5nZSh0aGlzLiNzZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAvLyBXSFkgPz8/XG4gICAgICAgICAgICAgICAgICAgIC8vaC5zdHlsZS5zZXRQcm9wZXJ0eSgndG9wJyAgICwgYCR7c2VsZWN0aW9uWzBdLm9mZnNldFRvcH1weGApO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3Bhc3RlYmluID0gdGhpcy4jc2VsZWN0aW9uLmRlZXBDbG9uZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKCBldi5rZXkgPT09IFwieFwiICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4jc2VsZWN0aW9uLmRlbGV0ZUZvcm1hdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4jc2VsZWN0aW9uLmRlbGV0ZUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiggZXYua2V5ID09PSBcIkNvbnRyb2xcIiB8fCBldi5rZXkgPT09IFwiU2hpZnRcIiB8fCBldi5rZXkgPT09IFwiQWx0XCIgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8gaWdub3JlXG4gICAgICAgICAgICAgICAgfSBpZiggZXYuY29kZSA9PT0gXCJEZWxldGVcIiApIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5kZWxldGVDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGlmKCBldi5jb2RlID09PSBcIkVudGVyXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZWQgZWxzZXdoZXJlXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGV2LmN0cmxLZXkpIHsgLy8gaWdub3JlIGN0cmxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHsgLy8gd2Ugc3RhcnQgZWRpdGluZy4uLlxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1ciA9IHRoaXMuY3Vyc29yLmNlbGxzO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKCBjdXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyWzBdLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChcImRibGNsaWNrXCIsIHtidWJibGVzOiB0cnVlfSkgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1clswXS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiggdGFyZ2V0ICE9PSB0aGlzLiN0Ym9keSAmJiBldi5jb2RlID09PSAnRW50ZXInICYmIGV2LnNoaWZ0S2V5IClcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvci5cblxuICAgICAgICAgICAgaWYoZXYuY29kZSA9PT0gXCJFbnRlclwiKSB7IC8vVE9ETzogRW50ZXIgaXMgZm9yIGN1cnJlbnQgcGxhZ2UuLi5cbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY3VyID0gdGhpcy5jdXJzb3IuY2VsbHM7XG4gICAgICAgICAgICAgICAgaWYoIGN1ci5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGxldCBbcm93LGNvbF0gPSB0aGlzLmNlbGxQb3MoIGN1clswXSApO1xuXG4gICAgICAgICAgICAgICAgKytyb3c7XG4gICAgICAgICAgICAgICAgaWYoIHJvdyA+PSB0aGlzLiN0Ym9keS5jaGlsZHJlbi5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICsrY29sO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiggY29sID49IHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW4ubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICBjb2wgPSAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlbltjb2xdIGFzIENlbGw7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiN0Ym9keS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3Vyc29yLnJlcGxhY2VBbGwobmV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBvbklucHV0MiA9IChldjogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2NsZWFyRm9ybXVsYVJlZnMoKTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGlmKGV2LmRldGFpbCAhPT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICBvbklucHV0KGV2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vVE9ETzogaGVyZS4uLlxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIChldikgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGNvcHkuc2V0UmFuZ2UobnVsbCk7XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSAhPT0gXCJURFwiKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5zdGF0ZXMuY2VsbF9lZGl0LnN0YXRlID0gdGFyZ2V0IGFzIENlbGw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNlbGxfZWRpdF9zdGFydFwiLCAoZXY6IEN1c3RvbUV2ZW50PENlbGw+KSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QudG9nZ2xlKFwiY2VsbF9lZGl0XCIsIHRydWUpO1xuXG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZXYuZGV0YWlsO1xuXG4gICAgICAgICAgICBpZihjZWxsLnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBGb3JtdWxhKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzdHIgPSBjZWxsLnJhd0NvbnRlbnQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBjb25zdCByYW5nZXMgPSBjZWxsLnJhd0NvbnRlbnQucmFuZ2VzVG9rZW47XG5cbiAgICAgICAgICAgICAgICBsZXQgY2hpbGRyZW46IChzdHJpbmd8SFRNTEVsZW1lbnQpW10gPSBbc3RyXTtcblxuICAgICAgICAgICAgICAgIGxldCByYW5nZXNfY29sb3JzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge307XG4gICAgICAgICAgICAgICAgbGV0IGN1cl9vZmZzZXQgPSAwO1xuXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHJhbmdlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3RyID0gY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoLTFdIGFzIHN0cmluZztcblxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGgtMV0gPSBzdHIuc2xpY2UoMCwgcmFuZ2VzW2ldLmJlZyAtIGN1cl9vZmZzZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlX25hbWUgPSByYW5nZXNbaV0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmKCAhIChyYW5nZV9uYW1lIGluIHJhbmdlc19jb2xvcnMpIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlc19jb2xvcnNbcmFuZ2VfbmFtZV0gPSBpJTg7XG5cbiAgICAgICAgICAgICAgICAgICAgcy5jbGFzc0xpc3QuYWRkKCdmb3JtdWxhX2hpZ2hsaWdodCcsIGBoaWdobGlnaHRfJHtyYW5nZXNfY29sb3JzW3JhbmdlX25hbWVdfWApOyAvL1RPRE8uLi5cbiAgICAgICAgICAgICAgICAgICAgcy50ZXh0Q29udGVudCA9IHJhbmdlc1tpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW4ucHVzaCggcyApOyAvLyByYW5nZS4uLlxuXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goIHN0ci5zbGljZShyYW5nZXNbaV0uZW5kIC0gY3VyX29mZnNldCkgKTtcbiAgICAgICAgICAgICAgICAgICAgY3VyX29mZnNldCA9IHJhbmdlc1tpXS5lbmQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2VsbC5yZXBsYWNlQ2hpbGRyZW4oIC4uLmNoaWxkcmVuICk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCByYW5nZXNfbmFtZXMgPSBPYmplY3Qua2V5cyhyYW5nZXNfY29sb3JzKTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmFuZ2VzX25hbWVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gcmFuZ2VzX25hbWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWYgPSB0aGlzLiNnZXRGb3JtdWxhUmVmKGkpO1xuICAgICAgICAgICAgICAgICAgICByZWYuc2V0Q29sb3IoIHJhbmdlc19jb2xvcnNbcmFuZ2VdICk7XG4gICAgICAgICAgICAgICAgICAgIHJlZi5zZXRSYW5nZSggdGhpcy5nZXRSYW5nZShyYW5nZSkgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIG9uSW5wdXQyICk7IC8vIHJlbW92ZSBjb2xvcnMuLi5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IEZvcm1hdHMuZGVmYXVsdC5jYWxsKGNlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNlbGxfZWRpdF9lbmRcIiwgKGV2OiBDdXN0b21FdmVudDxDZWxsPikgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LnRvZ2dsZShcImNlbGxfZWRpdFwiLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBldi5kZXRhaWw7XG5cbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIG9uSW5wdXQyKTsgLy8gdG8gYmUgc2FmZVxuICAgICAgICAgICAgY2VsbC50b2dnbGVBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgZmFsc2UpO1xuXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJsZWF2ZSBlZGl0XCIsIGNlbGwudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgbmV3IENlbGxMaXN0KHRoaXMsIFtjZWxsXSkuY29udGVudCA9IGNlbGwudGV4dENvbnRlbnQhO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgICAgICAgLy8gbGVhdmVcbiAgICAgICAgICAgIHRoaXMuI3NlbGVjdGlvbi5jbGVhcigpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGV2ID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgIT09IFwiVERcIilcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGVzLmNlbGxfZWRpdC5zdGF0ZSA9IG51bGw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKCB0aGlzLm5iUm93cyA+PSAxICYmIHRoaXMubmJDb2xzID49IDEpXG4gICAgICAgICAgICB0aGlzLmN1cnNvci5yZXBsYWNlQWxsKCB0aGlzLmdldFJhbmdlKFwiQTFcIikgKTtcbiAgICB9XG5cbiAgICBnZXRWaXNpYmxlQ2VsbChjOiBDZWxsfENlbGxMaXN0KTogQ2VsbCB7XG4gICAgICAgIGlmKGMgaW5zdGFuY2VvZiBDZWxsTGlzdClcbiAgICAgICAgICAgIGMgPSBjLmZpcnN0Q2VsbDtcblxuICAgICAgICByZXR1cm4gYy5jZWxsID8/IGM7XG4gICAgfVxuXG4gICAgY2VsbFBvcyhjZWxsOiBIVE1MVGFibGVDZWxsRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY2VsbFBvcyhjZWxsKTtcbiAgICB9XG5cbiAgICAjY2VsbFBvcyhjZWxsOiBIVE1MVGFibGVDZWxsRWxlbWVudCkge1xuXG4gICAgICAgIGlmKCBcInBvc1wiIGluIGNlbGwpXG4gICAgICAgICAgICByZXR1cm4gY2VsbC5wb3MgYXMgW251bWJlciwgbnVtYmVyXTtcblxuICAgICAgICBjb25zdCBjb2wgPSBbLi4uY2VsbC5wYXJlbnRFbGVtZW50IS5jaGlsZHJlbl0uZmluZEluZGV4KCBjID0+IGMgPT09IGNlbGwpO1xuICAgICAgICBjb25zdCByb3cgPSBbLi4uY2VsbC5wYXJlbnRFbGVtZW50IS5wYXJlbnRFbGVtZW50IS5jaGlsZHJlbl0uZmluZEluZGV4KCByID0+IHIgPT09IGNlbGwucGFyZW50RWxlbWVudCEpO1xuXG4gICAgICAgIHJldHVybiBbcm93LCBjb2xdIGFzIGNvbnN0O1xuICAgIH1cblxuICAgICN0Ym9keSE6IEhUTUxUYWJsZVNlY3Rpb25FbGVtZW50O1xuICAgIGdldCB0Ym9keSgpIHsgcmV0dXJuIHRoaXMuI3Rib2R5OyB9XG5cbiAgICByZXNpemUobmJyb3dzOiBudW1iZXIsIG5iY29sczogbnVtYmVyKSB7XG5cbiAgICAgICAgY29uc3QgY29sX2h0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBjb2xfaHRtbC5hcHBlbmQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJykgKTtcblxuICAgICAgICBjb25zdCBjb2xncm91cCA9IHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yKCdjb2xncm91cCcpITtcbiAgICAgICAgY29sZ3JvdXAucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICAgICAgY29uc3QgdGJvZHkgPSB0aGlzLiN0Ym9keTtcbiAgICAgICAgdGJvZHkucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICAgICAgY29sZ3JvdXAuYXBwZW5kKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29sXCIpICk7XG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IGNvbCA9IDA7IGNvbCA8ICBuYmNvbHMgOyArK2NvbCkge1xuICAgICAgICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgICAgICAgdGgudGV4dENvbnRlbnQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgY29sKTtcbiAgICAgICAgICAgIGNvbF9odG1sLmFwcGVuZCh0aCk7XG5cbiAgICAgICAgICAgIGNvbGdyb3VwLmFwcGVuZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvbFwiKSApO1xuICAgICAgICB9XG4gICAgICAgIHRib2R5LmFwcGVuZChjb2xfaHRtbCk7XG5cbiAgICAgICAgZm9yKGxldCByb3cgPSAwOyByb3cgPCBuYnJvd3M7ICsrcm93KSB7XG4gICAgICAgICAgICBjb25zdCByb3dfaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgICAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICB0aC50ZXh0Q29udGVudCA9IGAke3JvdysxfWA7XG4gICAgICAgICAgICByb3dfaHRtbC5hcHBlbmQodGgpO1xuXG4gICAgICAgICAgICBmb3IobGV0IGNvbCA9IDA7IGNvbCA8ICBuYmNvbHMgOyArK2NvbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpIGFzIENlbGw7XG4gICAgICAgICAgICAgICAgLy9jZWxsLnRvZ2dsZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJyk7XG4gICAgICAgICAgICAgICAgY2VsbC5mb3JtYXQgPSBGb3JtYXRzLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgcm93X2h0bWwuYXBwZW5kKCBjZWxsICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ym9keS5hcHBlbmQocm93X2h0bWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Q29sU2l6ZShjb2w6IG51bWJlcnxzdHJpbmcsIHNpemU6IHN0cmluZykge1xuICAgICAgICBpZiggdHlwZW9mIGNvbCA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgIGNvbCA9IHRoaXMucmVmMnBvcyhjb2wpWzFdO1xuXG4gICAgICAgIGNvbnN0IGh0bWwgPSB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvcignY29sZ3JvdXAnKSEuY2hpbGRyZW5bY29sXSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgaHRtbC5zdHlsZS5zZXRQcm9wZXJ0eShcIndpZHRoXCIsIHNpemUpO1xuICAgICAgICBodG1sLnN0eWxlLnNldFByb3BlcnR5KCdvdmVyZmxvdy14JywgJ2hpZGRlbicpO1xuICAgIH1cblxuICAgICNpbml0R3JpZChuYnJvd3M6IG51bWJlciwgbmJjb2xzOiBudW1iZXIpIHtcblxuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgICAgIGNvbnN0IHRib2R5ICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XG4gICAgICAgIHRoaXMuI3Rib2R5ID0gdGJvZHk7XG5cbiAgICAgICAgY29uc3QgcmVzaXplT2JzID0gbmV3IFJlc2l6ZU9ic2VydmVyKCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhvc3QuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KCdyZXNpemUnKSApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzaXplT2JzLm9ic2VydmUoIHRoaXMuaG9zdCApO1xuXG4gICAgICAgIHRoaXMuI3Rib2R5LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuXG4gICAgICAgIHRhYmxlLmFwcGVuZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvbGdyb3VwXCIpICk7XG4gICAgICAgIHRhYmxlLmFwcGVuZCh0Ym9keSk7XG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQodGFibGUpO1xuXG4gICAgICAgIHRoaXMucmVzaXplKG5icm93cywgbmJjb2xzKTtcbiAgICB9XG5cbiAgICBnZXRSYW5nZShmcm9tOiBDZWxsfHN0cmluZ3xyZWFkb25seVtudW1iZXIsbnVtYmVyXSwgdG86IENlbGx8c3RyaW5nfHJlYWRvbmx5W251bWJlcixudW1iZXJdID0gZnJvbSk6IENlbGxMaXN0IHtcblxuICAgICAgICAvLyBwcm9jZXNzIHJlZnMuLi5cbiAgICAgICAgaWYoIGZyb20gaW5zdGFuY2VvZiBIVE1MVGFibGVDZWxsRWxlbWVudClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJhbmdlKCB0aGlzLmNlbGxQb3MoZnJvbSksIHRvICk7XG4gICAgICAgIGlmKCB0byBpbnN0YW5jZW9mIEhUTUxUYWJsZUNlbGxFbGVtZW50KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZ2UoIGZyb20sIHRoaXMuY2VsbFBvcyh0bykgKTtcblxuICAgICAgICBpZiggdHlwZW9mIGZyb20gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGlmKCBmcm9tLmluY2x1ZGVzKFwiOlwiKSApXG4gICAgICAgICAgICAgICAgW2Zyb20sIHRvXSA9IGZyb20uc3BsaXQoJzonKTtcblxuICAgICAgICAgICAgZnJvbSA9IHRoaXMucmVmMnBvcyhmcm9tLCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSYW5nZSggZnJvbSwgdG8gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiggdHlwZW9mIHRvID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZ2UoIGZyb20sIHRoaXMucmVmMnBvcyh0bywgdHJ1ZSkgKTtcblxuICAgICAgICAvLyBnZXQgcmFuZ2VcblxuICAgICAgICBsZXQgYmVnX3JvdyA9IGZyb21bMF0gfHwgMTtcbiAgICAgICAgbGV0IGJlZ19jb2wgPSBmcm9tWzFdIHx8IDE7XG5cbiAgICAgICAgbGV0IGVuZF9yb3cgPSBmcm9tWzBdID09PSAwID8gdGhpcy5uYlJvd3MgOiB0b1swXTtcbiAgICAgICAgbGV0IGVuZF9jb2wgPSBmcm9tWzFdID09PSAwID8gdGhpcy5uYkNvbHMgOiB0b1sxXTtcblxuICAgICAgICBpZiggZW5kX3JvdyA8IGJlZ19yb3cgKVxuICAgICAgICAgICAgW2JlZ19yb3csIGVuZF9yb3ddID0gW2VuZF9yb3csIGJlZ19yb3ddO1xuICAgICAgICBpZiggZW5kX2NvbCA8IGJlZ19jb2wgKVxuICAgICAgICAgICAgW2JlZ19jb2wsIGVuZF9jb2xdID0gW2VuZF9jb2wsIGJlZ19jb2xdO1xuXG4gICAgICAgIGNvbnN0IGNlbGxzID0gbmV3IEFycmF5PENlbGw+KCAoZW5kX3JvdyAtIGJlZ19yb3cgKyAxKSAqIChlbmRfY29sIC0gYmVnX2NvbCArIDEpICk7XG5cbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgIGZvcihsZXQgaSA9IGJlZ19yb3c7IGkgPD0gZW5kX3JvdzsgKytpIClcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IGJlZ19jb2w7IGogPD0gZW5kX2NvbDsgKytqIClcbiAgICAgICAgICAgICAgICBjZWxsc1tvZmZzZXQrK10gPSB0aGlzLnRib2R5LmNoaWxkcmVuW2ldLmNoaWxkcmVuW2pdIGFzIENlbGw7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBDZWxsTGlzdCh0aGlzLCBjZWxscyk7XG4gICAgfVxuXG4gICAgcmVmMnBvcyhyZWY6IHN0cmluZywgZW5kX2xpbmVfY29sID0gdHJ1ZSk6IFtudW1iZXIsIG51bWJlcl0ge1xuICAgICAgICBcbiAgICAgICAgcmVmID0gcmVmLnJlcGxhY2VBbGwoJyQnLCAnJyk7XG5cbiAgICAgICAgbGV0IHNlcCA9IHJlZi5zZWFyY2goL1swLTldLyk7XG5cbiAgICAgICAgaWYoIHNlcCA9PT0gMCkgIC8vIHRoaXMgaXMgYSBsaW5lLi4uXG4gICAgICAgICAgICByZXR1cm4gZW5kX2xpbmVfY29sID8gdGhpcy5yZWYycG9zKGBBJHtyZWZ9YCkgOiBbdGhpcy5uYkNvbHMsICtyZWZdO1xuICAgICAgICBpZiggc2VwID09PSAtMSkgLy8gdGhpcyBpcyBhIGNvbC4uLlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmMnBvcyhgJHtyZWZ9JHtlbmRfbGluZV9jb2wgPyB0aGlzLm5iUm93cyA6IDF9YCk7XG5cbiAgICAgICAgY29uc3Qgcm93ID0gK3JlZi5zbGljZShzZXApO1xuXG4gICAgICAgIGxldCBjb2wgPSAwO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2VwOyArK2kpIHtcbiAgICAgICAgICAgIGNvbCAqPSAyNjtcbiAgICAgICAgICAgIGNvbCArPSByZWYuY2hhckNvZGVBdChpKSAtIDY1O1xuICAgICAgICB9XG4gICAgICAgICsrY29sO1xuXG4gICAgICAgIHJldHVybiBbcm93LCBjb2xdO1xuICAgIH1cbiAgICBwb3MycmVmKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikge1xuXG4gICAgICAgIGxldCBjb2xfc3RyID0gXCJcIjtcbiAgICAgICAgZG8ge1xuXG4gICAgICAgICAgICBsZXQgaWQgPSAoY29sLTEpICUgMjY7XG5cbiAgICAgICAgICAgIGNvbF9zdHIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1K2lkKSArIGNvbF9zdHI7XG5cbiAgICAgICAgICAgIGNvbCAtPSBpZCArIDE7XG4gICAgICAgICAgICBjb2wgLz0gMjY7IC8vIHNob3VsZCBiZSBpbnRlZ2VyLCBzbyBvay5cblxuICAgICAgICB9IHdoaWxlKCBjb2wgPiAwICk7XG5cbiAgICAgICAgcmV0dXJuIGAke2NvbF9zdHJ9JHtyb3d9YDtcbiAgICB9XG4gICAgZ2V0IG5iUm93cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Rib2R5LmNoaWxkcmVuLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIGdldCBuYkNvbHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0Ym9keS5maXJzdEVsZW1lbnRDaGlsZCEuY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICAjaXNVcGRhdGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYoIHRoaXMuI2lzVXBkYXRpbmcgPT09IHRydWUgKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLiNpc1VwZGF0aW5nID0gdHJ1ZTtcblxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gWy4uLnRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsPENlbGw+KCd0ZCcpXS5maWx0ZXIoIGUgPT4gZS5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvcihsZXQgY2VsbCBvZiBjZWxscyApXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGNlbGwucmF3Q29udGVudC5yZXNldENhY2hlKCk7XG5cbiAgICAgICAgICAgIGZvcihsZXQgY2VsbCBvZiBjZWxscykge1xuXG4gICAgICAgICAgICAgICAgaWYoIGNlbGwucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEgKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGNlbGwucmF3Q29udGVudC5leGVjKHRoaXMpOyAvL1RPRE8uLi5cblxuICAgICAgICAgICAgICAgICAgICAvL1RPRE86IGZhY3Rvcml6ZS4uLlxuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZTogc3RyaW5nID0gdHlwZW9mIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBEYXRlIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IChjZWxsIGFzIGFueSkuZm9ybWF0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5ob3N0LmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudCgndXBkYXRlJykgKTtcbiAgICAgICAgICAgIHRoaXMuI2lzVXBkYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXQgaXNSTygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cnMucm8gPT09IFwidHJ1ZVwiO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENlbGxMaXN0IGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuXG4gICAgI3NoZWV0OiBDYWxjU2hlZXQ7XG4gICAgI2NlbGxzOiBDZWxsW107XG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCwgY2VsbHM6IENlbGxbXSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLiNjZWxscyA9IGNlbGxzO1xuICAgICAgICB0aGlzLiNzaGVldCA9IHNoZWV0O1xuICAgIH1cblxuICAgIGdldCBwbGFnZV9uYW1lKCkge1xuXG4gICAgICAgIGlmKCB0aGlzLiNjZWxscy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgaWYoIHRoaXMuI2NlbGxzLmxlbmd0aCA9PT0gMSApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4jc2hlZXQucG9zMnJlZiggLi4udGhpcy4jc2hlZXQuY2VsbFBvcyh0aGlzLiNjZWxsc1swXSkgKTtcblxuICAgICAgICBsZXQgY2VsbHMgPSB0aGlzLiNjZWxscy5tYXAoIGMgPT4gdGhpcy4jc2hlZXQuY2VsbFBvcyhjKSApLnNvcnQoIChhLGIpID0+IHtcbiAgICAgICAgICAgIGlmKCBhWzBdICE9PSBiWzBdIClcbiAgICAgICAgICAgICAgICByZXR1cm4gYVswXSAtIGJbMF07XG4gICAgICAgICAgICByZXR1cm4gYVsxXSAtIGJbMV07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtaW4gPSBjZWxsc1swXTtcbiAgICAgICAgbGV0IG1heCA9IGNlbGxzW2NlbGxzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIGxldCBuYl9jb2xzID0gbWF4WzFdIC0gbWluWzFdICsgMTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICBpZiggY2VsbHNbaV1bMF0gIT09IE1hdGguZmxvb3IoaS9uYl9jb2xzKSttaW5bMF0gJiYgY2VsbHNbaV1bMV0gIT09IChpJW5iX2NvbHMpKyBtaW5bMV0gKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICByZXR1cm4gYCR7dGhpcy4jc2hlZXQucG9zMnJlZiguLi5taW4pfToke3RoaXMuI3NoZWV0LnBvczJyZWYoLi4ubWF4KX1gO1xuICAgIH1cblxuICAgIGdldCBjZWxscygpOiBDZWxsW10ge1xuICAgICAgICByZXR1cm4gdGhpcy4jY2VsbHM7XG4gICAgfVxuICAgIGdldCBzaGVldCgpOiBDYWxjU2hlZXQge1xuICAgICAgICByZXR1cm4gdGhpcy4jc2hlZXQ7XG4gICAgfVxuXG4gICAgdG9nZ2xlRm9ybWF0KG5hbWU6IHN0cmluZ3woKHY6IGFueSwgcHJlYzogbnVtYmVyfG51bGwpID0+IHN0cmluZykgKSB7XG4gICAgICAgIGxldCBmID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQodGhpcyk7XG5cbiAgICAgICAgaWYoIHR5cGVvZiBuYW1lID09PSBcImZ1bmN0aW9uXCIpIHtcblxuICAgICAgICAgICAgbGV0IGlzRm9ybWF0ID0gZi5nZXRQcm9wZXJ0eShcImZvcm1hdFwiKSA9PT0gbmFtZTtcblxuICAgICAgICAgICAgdGhpcy5mb3JtYXQoe2Zvcm1hdDogaXNGb3JtYXQgPyBudWxsIDogbmFtZSB9KTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mb3JtYXQoe1tuYW1lXTogZi5nZXRQcm9wZXJ0eShuYW1lKSAhPT0gdHJ1ZX0pO1xuICAgIH1cblxuICAgIGZvcm1hdCguLi5mOiAoKCAodjogYW55LCBwcmVjOiBudW1iZXJ8bnVsbCkgPT4gc3RyaW5nICl8c3RyaW5nfEZvcm1hdHxSZWNvcmQ8c3RyaW5nLCBhbnk+KVtdKSB7XG5cbiAgICAgICAgaWYoIGYubGVuZ3RoID4gMSApIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9UT0RPLi4uLlxuICAgICAgICAgICAgZiA9IE9iamVjdC5mcm9tRW50cmllcyggZi5tYXAoIGUgPT4gW2UsIHRydWVdICkgKTtcblxuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIGYgPSBmWzBdO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgZiA9PT0gXCJmdW5jdGlvblwiIClcbiAgICAgICAgICAgIGYgPSB7XCJmb3JtYXRcIjogZn07XG5cbiAgICAgICAgaWYodHlwZW9mIGYgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgZiA9IHtbZl06IHRydWV9O1xuXG4gICAgICAgIGlmKCAhIChmIGluc3RhbmNlb2YgRm9ybWF0KSApXG4gICAgICAgICAgICBmID0gbmV3IEZvcm1hdChmKTtcblxuICAgICAgICBmLmFwcGx5VG8odGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0IGNvbnRlbnQoKTogKFJhd0NvbnRlbnRUeXBlKVtdIHtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBuZXcgQXJyYXkodGhpcy4jY2VsbHMubGVuZ3RoKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuI2NlbGxzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgY29udGVudFtpXSA9IHRoaXMuI2NlbGxzW2ldLnJhd0NvbnRlbnQhO1xuXG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH1cblxuICAgIGRlbGV0ZUZvcm1hdCgpIHtcbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIHRoaXMuI2NlbGxzKSAvL1RPRE8gYWRkIGhvYyBmb3JtYXQuLi5cbiAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gJyc7XG4gICAgfVxuXG4gICAgZGVsZXRlQ29udGVudCgpIHtcblxuICAgICAgICBmb3IobGV0IGNlbGwgb2YgdGhpcy4jY2VsbHMpIHtcbiAgICAgICAgICAgIGNlbGwucmF3Q29udGVudCA9IHVuZGVmaW5lZCBhcyBhbnk7XG4gICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXR5cGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NoZWV0LnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHNldCBjb250ZW50KGNvbnRlbnQ6IENlbGx8UmF3Q29udGVudFR5cGV8KFJhd0NvbnRlbnRUeXBlfENlbGwpW10pIHtcblxuICAgICAgICBpZiggQXJyYXkuaXNBcnJheShjb250ZW50KSApIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb250ZW50Lmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgIG5ldyBDZWxsTGlzdCh0aGlzLiNzaGVldCwgW3RoaXMuI2NlbGxzW2ldXSApLmNvbnRlbnQgPSBjb250ZW50W2ldO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiggdHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG5cbiAgICAgICAgICAgIGxldCByYXcgPSBjb250ZW50O1xuICAgICAgICAgICAgY29udGVudCA9IHBhcnNlSW5wdXQoY29udGVudCk7XG4gICAgICAgICAgICBpZiggdHlwZW9mIGNvbnRlbnQgPT09IFwibnVtYmVyXCIgJiYgcmF3W3Jhdy5sZW5ndGgtMV0gPT09IFwiJVwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGYgPSBGb3JtYXQuZXh0cmFjdEZvcm1hdCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiggISBmLmhhc1Byb3BlcnR5KFwiZm9ybWF0XCIpIHx8IGYuZ2V0UHJvcGVydHkoXCJmb3JtYXRcIikgPT09IEZvcm1hdHMuZGVmYXVsdCApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybWF0KEZvcm1hdHMucG91cmNlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIHR5cGVvZiBjb250ZW50ID09PSBcIm51bWJlclwiICYmIHJhd1tyYXcubGVuZ3RoLTFdID09PSBcIuKCrFwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGYgPSBGb3JtYXQuZXh0cmFjdEZvcm1hdCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiggISBmLmhhc1Byb3BlcnR5KFwiZm9ybWF0XCIpIHx8IGYuZ2V0UHJvcGVydHkoXCJmb3JtYXRcIikgPT09IEZvcm1hdHMuZGVmYXVsdCApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybWF0KEZvcm1hdHMuZXVyb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJhd192YWwgPSBjb250ZW50IGluc3RhbmNlb2YgSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPyBjb250ZW50LnJhd0NvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjb250ZW50O1xuXG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiB0aGlzLiNjZWxscykge1xuXG4gICAgICAgICAgICBpZihjb250ZW50IGluc3RhbmNlb2YgSFRNTFRhYmxlQ2VsbEVsZW1lbnQgJiYgY29udGVudC5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSApIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCB2ID0gY29udGVudC5yYXdDb250ZW50O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZHN0ID0gdGhpcy4jc2hlZXQuY2VsbFBvcyggY2VsbCApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IHRoaXMuI3NoZWV0LmNlbGxQb3MoY29udGVudClcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBbIGRzdFswXSAtIHNyY1swXSwgZHN0WzFdIC0gc3JjWzFdXSBhcyBjb25zdDtcblxuICAgICAgICAgICAgICAgIHJhd192YWwgPSB2LnJlbGF0aXZlVG8oIHRoaXMuI3NoZWV0LCAuLi5kaWZmICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNlbGwucmF3Q29udGVudCA9IHJhd192YWw7XG5cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHJhd192YWw7XG4gICAgICAgICAgICBpZiggcmF3X3ZhbCBpbnN0YW5jZW9mIEZvcm11bGEpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHMgPSBPYmplY3QudmFsdWVzKCBGb3JtYXRzICk7XG5cbiAgICAgICAgICAgICAgICAvL0lmIG5vIG51bWJlciBmb3JtYXQsIGRlZHVjZSBmb3JtYXQuXG4gICAgICAgICAgICAgICAgaWYoIGNlbGwuZm9ybWF0ID09PSB1bmRlZmluZWQgfHwgY2VsbC5mb3JtYXQgPT09IEZvcm1hdHMuZGVmYXVsdCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybWF0ID0gRm9ybWF0cy5kZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmJfZGF0ZXMgPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IHIgb2YgcmF3X3ZhbC5yYW5nZXNUb2tlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGYgPSBGb3JtYXQuZXh0cmFjdEZvcm1hdCh0aGlzLnNoZWV0LmdldFJhbmdlKHIudmFsdWUpICkuZ2V0UHJvcGVydHkoXCJmb3JtYXRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggZm9ybWF0ICE9PSBmICYmIGZvcm1hdHMuaW5kZXhPZihmKSA+IGZvcm1hdHMuaW5kZXhPZihmb3JtYXQpIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQgPSBmO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZiA9PT0gRm9ybWF0cy5kYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsrbmJfZGF0ZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBoNGNrXG4gICAgICAgICAgICAgICAgICAgIGlmKCBmb3JtYXQgPT09IEZvcm1hdHMuZGF0ZSAmJiBuYl9kYXRlcyA+IDEgKVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0ID0gRm9ybWF0cy5kZWZhdWx0O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKGZvcm1hdCAhPT0gRm9ybWF0cy5kZWZhdWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5mb3JtYXQgPSBmb3JtYXQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSByYXdfdmFsLmV4ZWModGhpcy4jc2hlZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdHlwZTogc3RyaW5nID0gdHlwZW9mIHZhbHVlO1xuICAgICAgICAgICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSApIHtcbiAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiO1xuICAgICAgICAgICAgICAgIGNlbGwuZm9ybWF0ID0gRm9ybWF0cy5kYXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gY2VsbC5mb3JtYXQodmFsdWUpO1xuXG4gICAgICAgICAgICBpZiggY2VsbC5mb3JtYXQgPT09IEZvcm1hdHMuZGF0ZSlcbiAgICAgICAgICAgICAgICB0eXBlID0gJ2RhdGUnO1xuICAgICAgICAgICAgaWYoIGNlbGwuZm9ybWF0ID09PSBGb3JtYXRzLnBvdXJjZW50KVxuICAgICAgICAgICAgICAgIHR5cGUgPSAncG91cmNlbnQnO1xuICAgICAgICAgICAgaWYoIGNlbGwuZm9ybWF0ID09PSBGb3JtYXRzLmV1cm9zIHx8IGNlbGwuZm9ybWF0ID09PSBGb3JtYXRzLm51bWJlciApXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdudW1iZXInO1xuXG4gICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdHlwZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzaGVldC51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBzZXRSTyhpc19ybzogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIHRoaXMuI2NlbGxzKVxuICAgICAgICAgICAgY2VsbC5pc19ybyA9IGlzX3JvO1xuICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY2VsbHMubGVuZ3RoO1xuICAgIH1cblxuICAgIGhhcyguLi5jZWxsczogQ2VsbFtdKSB7XG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiBjZWxscylcbiAgICAgICAgICAgIGlmKCAhIHRoaXMuI2NlbGxzLmluY2x1ZGVzKGNlbGwpIClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJlbW92ZSguLi5jZWxsczogQ2VsbFtdKSB7XG4gICAgICAgIHRoaXMuI2NlbGxzID0gdGhpcy4jY2VsbHMuZmlsdGVyKCBjID0+ICEgY2VsbHMuaW5jbHVkZXMoYykgKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcbiAgICB9XG5cbiAgICByZXBsYWNlQWxsKC4uLmNlbGxzOiBDZWxsW118W0NlbGxMaXN0XSkge1xuICAgICAgICB0aGlzLiNjZWxscy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmFkZCguLi5jZWxscyk7XG4gICAgfVxuXG4gICAgYWRkKC4uLmNlbGxzOiBDZWxsW118W0NlbGxMaXN0XSkge1xuXG4gICAgICAgIGlmKCBjZWxsc1swXSBpbnN0YW5jZW9mIENlbGxMaXN0KVxuICAgICAgICAgICAgY2VsbHMgPSBjZWxsc1swXS5jZWxscztcblxuICAgICAgICB0aGlzLiNjZWxscy5wdXNoKC4uLmNlbGxzIGFzIENlbGxbXSk7XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcbiAgICB9XG5cbiAgICBnZXQgZmlyc3RDZWxsKCkge1xuICAgICAgICBpZiggdGhpcy4jY2VsbHMubGVuZ3RoIDwgMSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vcGVcIik7XG4gICAgICAgIHJldHVybiB0aGlzLiNjZWxsc1swXTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy4jY2VsbHMubGVuZ3RoID0gMDtcblxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSApO1xuICAgIH1cblxuXG4gICAgZGVlcENsb25lKCkge1xuXG4gICAgICAgIGxldCBjZWxscyA9IHRoaXMuI2NlbGxzLm1hcCggYyA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbG9uZSA9IGMuY2xvbmVOb2RlKHRydWUpIGFzIENlbGw7XG5cbiAgICAgICAgICAgIGNsb25lLnJhd0NvbnRlbnQgPSBjLnJhd0NvbnRlbnQ7XG4gICAgICAgICAgICBjbG9uZS5mb3JtYXQgICAgID0gYy5mb3JtYXQ7XG4gICAgICAgICAgICAoY2xvbmUgYXMgYW55KS5wb3MgICAgICAgID0gdGhpcy4jc2hlZXQuY2VsbFBvcyhjKTtcblxuICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBuZXcgQ2VsbExpc3QodGhpcy4jc2hlZXQsIGNlbGxzKTtcbiAgICB9XG59XG5cbi8vVE9ETy4uLlxuaW1wb3J0IFwiLi9mb3JtdWxhX2VkaXRvclwiO1xuaW1wb3J0IFwiLi9wbGFnZV9lZGl0b3JcIjtcbmltcG9ydCB7IEZvcm11bGEsIHBhcnNlX2Zvcm11bGEgfSBmcm9tIFwiLi9mb3JtdWxhX3BhcnNlclwiO1xuaW1wb3J0IHsgUGxhZ2VTZWxlY3RvciB9IGZyb20gXCIuL3BsYWdlX3NlbGVjdG9yXCI7XG5pbXBvcnQgeyBGb3JtYXQsIEZvcm1hdE1hbmFnZXIsIEZvcm1hdHMgfSBmcm9tIFwiLi9mb3JtYXRcIjtcbmltcG9ydCB7IEZvcm11bGFSZWYsIFJhbmdlT3ZlcmxheSwgUmVjb3B5SGFuZGxlIH0gZnJvbSBcIi4vUmFuZ2VPdmVybGF5XCI7XG5pbXBvcnQgeyB0ZXN0IH0gZnJvbSBcInRlc3Qvd2Vib2RmXCI7XG5cbkxJU1MuZGVmaW5lKCdjYWxjLXNoZWV0JywgQ2FsY1NoZWV0KTsiLCJpbXBvcnQgTElTUyBmcm9tIFwiLi4vLi4vLi4vbGlicy9MSVNTXCI7XG5pbXBvcnQgeyBGb3JtYXQsIEZvcm1hdHMgfSBmcm9tIFwiLi9mb3JtYXRcIjtcbmltcG9ydCB7IENhbGNTaGVldCwgQ2VsbExpc3QgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5jb25zdCBjb250ZW50ID0gYFxuICAgIDxzZWxlY3QgZGlzYWJsZWQgdGl0bGU9XCJOb20gZGUgcG9saWNlXCI+PG9wdGlvbj5MaWLDqXJhdGlvbiBTYW5zPC9vcHRpb24+PC9zZWxlY3Q+XG4gICAgPHNlbGVjdCBjbGFzcz1cImZvbnRfc2l6ZVwiIHRpdGxlPVwiVGFpbGxlIGRlIHBvbGljZVwiPjwvc2VsZWN0PlxuICAgIDxzcGFuIGNsYXNzPSd2YmFyJz48L3NwYW4+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2JvbGQnIHRpdGxlPVwiR3JhcyAoQ3RybCtCKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2l0YWxpYycgdGl0bGU9XCJJdGFsaXF1ZSAoQ3RybCtJKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J3VuZGVybGluZScgdGl0bGU9XCJTb3VsaWduYWdlIChDdHJsK1UpXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8c3BhbiBjbGFzcz0ndmJhcic+PC9zcGFuPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSB2YWx1ZT0nYmxhY2snIG5hbWU9J2ZvcmVncm91bmRfY29sb3InIHRpdGxlPVwiQ291bGV1ciBkZSBwb2xpY2VcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSB2YWx1ZT0neWVsbG93JyBuYW1lPSdiYWNrZ3JvdW5kX2NvbG9yJyB0aXRsZT1cIkNvdWxldXIgZCdhcnJpw6hyZS1wbGFuXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8c3BhbiBjbGFzcz0ndmJhcic+PC9zcGFuPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdhbGlnbl9sZWZ0JyB0aXRsZT1cIkFsaWduZXIgw6AgZ2F1Y2hlIChDdHJsK0wpXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nYWxpZ25fY2VudGVyJyB0aXRsZT1cIkNlbnRlciAoQ3RybCtFKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2FsaWduX3JpZ2h0JyB0aXRsZT1cIkFsaWduZXIgw6AgZHJvaXRlIChDdHJsK1IpXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8c3BhbiBjbGFzcz0ndmJhcic+PC9zcGFuPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSd2YWxpZ25fdG9wJyB0aXRsZT1cIkFsaWduZXIgZW4gaGF1dFwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J3ZhbGlnbl9taWRkbGUnIHRpdGxlPVwiQ2VudHJlciB2ZXJ0aWNhbGVtZW50XCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0ndmFsaWduX2JvdHRvbScgdGl0bGU9XCJBbGlnbmVyIGVuIGJhc1wiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nYWp1c3RlcicgdGl0bGU9XCJBanVzdGVyIGxlIHRleHRlXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8c3BhbiBjbGFzcz0ndmJhcic+PC9zcGFuPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdtZXJnZV9jZW50ZXInIHR5cGU9J2ZjdCcgdGl0bGU9XCJGdXNpb25uZXIgZXQgY2VudHJlciBvdSBkw6lmdXNpb25uZXIgbGVzIGNlbGx1bGVzIGVuIGludmVyc2FudCBsZXVyIMOpdGF0IGFjdHVlbFwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J21lcmdlJyB0eXBlPSdmY3QnIHRpdGxlPVwiRnVzaW9ubmVyIGxlcyBjZWxsdWxlc1wiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J3VubWVyZ2UnIHR5cGU9J2ZjdCcgdGl0bGU9XCJEw6lmdXNpb25uZXIgbGVzIGNlbGx1bGVzXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8c3BhbiBjbGFzcz0ndmJhcic+PC9zcGFuPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdmb3JtYXRfbW9ubmFpZScgdHlwZT0nZmN0JyB0aXRsZT1cIkFwcGxpcXVlciBsZSBmb3JtYXQgTW9ubmFpZSAoTWFqK0N0cmwrNClcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdmb3JtYXRfcG91cmNlbnQnIHR5cGU9J2ZjdCcgdGl0bGU9XCJBcHBsaXF1ZXIgbGUgZm9ybWF0IFBvdXJjZW50YWdlIChNYWorQ3RybCs1KVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2Zvcm1hdF9uYicgdHlwZT0nZmN0JyAgdGl0bGU9XCJBcHBsaXF1ZXIgbGUgZm9ybWF0IE5vbWJyZSAoTWFqK0N0cmwrMSlcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdmb3JtYXRfZGF0ZScgdHlwZT0nZmN0JyAgdGl0bGU9XCJBcHBsaXF1ZXIgbGUgZm9ybWF0IERhdGUgKE1haitDdHJsKzMpXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8c3BhbiBjbGFzcz0ndmJhcic+PC9zcGFuPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdmb3JtYXRfemVyb19wMScgdHlwZT0nZmN0JyB0aXRsZT1cIkFqb3V0ZXIgdW5lIGTDqWNpbWFsZVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2Zvcm1hdF96ZXJvX20xJyB0eXBlPSdmY3QnIHRpdGxlPVwiU3VwcHJpbWVyIHVuZSBkw6ljaW1hbGVcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxzcGFuIGNsYXNzPSd2YmFyJz48L3NwYW4+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J3JldHJhaXRfcDEnIHR5cGU9J2ZjdCcgdGl0bGU9XCJBdWdtZW50ZXIgbGUgcmV0cmFpdFwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J3JldHJhaXRfbTEnIHR5cGU9J2ZjdCcgdGl0bGU9XCJEaW1pbnVlciBsZSByZXRyYWl0XCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8c3BhbiBjbGFzcz0ndmJhcic+PC9zcGFuPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdib3JkZXInIHR5cGU9J2ZjdCcgdGl0bGU9XCJCb3JkdXJlcyAoTWFqIHBvdXIgw6ljcmFzZXIpXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nYm9yZGVyX3N0eWxlJyB0eXBlPSdmY3QnIGRpc2FibGVkIHRpdGxlPVwiU3R5bGUgZGUgYm9yZHVyZVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIHZhbHVlPSdibGFjaycgbmFtZT0nYm9yZGVyX2NvbG9yJyB0aXRsZT1cIkNvdWxldXIgZGUgYm9yZHVyZVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nZm9ybWF0X2NvbmQnIHR5cGU9J2ZjdCcgZGlzYWJsZWQgdGl0bGU9XCJDb25kaXRpb25uZWxcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuYDtcblxuZnVuY3Rpb24gbWVyZ2UoY2VsbGxpc3Q6IENlbGxMaXN0LCBpc19hbGlnbiA9IGZhbHNlKSB7XG5cbiAgICBjb25zdCBzaGVldCA9IGNlbGxsaXN0LnNoZWV0O1xuXG4gICAgY29uc3QgW2JlZyxlbmRdID0gY2VsbGxpc3QucGxhZ2VfbmFtZSEuc3BsaXQoJzonKS5tYXAoIGUgPT4gc2hlZXQucmVmMnBvcyhlKSApOyAvLyBwbGFnZSBjYW4ndCBiZSB1bmRlZmluZWRcblxuICAgIGxldCByb3dzID0gZW5kWzBdIC0gYmVnWzBdICsgMTtcbiAgICBsZXQgY29scyA9IGVuZFsxXSAtIGJlZ1sxXSArIDE7XG5cbiAgICBsZXQgZm9ybWF0OiBSZWNvcmQ8c3RyaW5nLGFueT4gPSB7XG4gICAgICAgIHNwYW46IFsgcm93cywgY29scyBdXG4gICAgfVxuXG4gICAgaWYoIGlzX2FsaWduICkge1xuICAgICAgICBmb3JtYXQudmFsaWduX21pZGRsZSA9IHRydWU7XG4gICAgICAgIGZvcm1hdC5hbGlnbl9jZW50ZXIgID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzaGVldC5nZXRSYW5nZShiZWcpLmZvcm1hdChmb3JtYXQpO1xufVxuXG5mdW5jdGlvbiB1bm1lcmdlKGNlbGxsaXN0OiBDZWxsTGlzdCkge1xuXG4gICAgY2VsbGxpc3QuZm9ybWF0KHtcbiAgICAgICAgc3BhbjogWyAxLCAxIF1cbiAgICB9KTsgLy8gdW5tZXJnZS4uLlxufVxuXG5mdW5jdGlvbiByZXRyYWl0KGNlbGxzOiBDZWxsTGlzdCwgZGVsdGFfaW5kZW50OiBudW1iZXIpIHtcbiAgICBcbiAgICBmb3IobGV0IGNlbGwgb2YgY2VsbHMuY2VsbHMpIHtcblxuICAgICAgICBjb25zdCBmb3JtYXQgPSBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxsKTtcbiAgICAgICAgbGV0IG5ld19mb3JtYXQ6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcbiAgICAgICAgaWYoICEgZm9ybWF0Lmhhc1Byb3BlcnR5KFwiYWxpZ25fcmlnaHRcIikgJiYgISBmb3JtYXQuaGFzUHJvcGVydHkoXCJhbGlnbl9sZWZ0XCIpIClcbiAgICAgICAgICAgIG5ld19mb3JtYXQuYWxpZ25fbGVmdCA9IHRydWU7XG5cbiAgICAgICAgbmV3X2Zvcm1hdC5pbmRlbnQgPSArKGZvcm1hdC5nZXRQcm9wZXJ0eShcImluZGVudFwiKSA/PyAwKSArIGRlbHRhX2luZGVudDtcbiAgICAgICAgXG4gICAgICAgIGlmKCBuZXdfZm9ybWF0LmluZGVudCA8IDApXG4gICAgICAgICAgICBuZXdfZm9ybWF0LmluZGVudCA9IDA7XG5cbiAgICAgICAgY2VsbHMuZm9ybWF0KG5ld19mb3JtYXQpOyAgICAgXG4gICAgfVxufVxuXG5mdW5jdGlvbiBwcmVjaXNpb24oY2VsbHM6IENlbGxMaXN0LCBkZWx0YV9wcmVjOiBudW1iZXIpIHtcblxuICAgIGxldCBwcmVjaXNpb24gPSB1bmRlZmluZWQ7XG4gICAgZm9yKGxldCBjZWxsIG9mIGNlbGxzLmNlbGxzKSB7XG4gICAgICAgIGNvbnN0IHByZWMgPSArKEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGwpLmdldFByb3BlcnR5KFwicHJlY2lzaW9uXCIpID8/IDIpO1xuICAgICAgICBpZiggcHJlY2lzaW9uID09PSB1bmRlZmluZWQgfHwgcHJlYyA8IHByZWNpc2lvbiApXG4gICAgICAgICAgICBwcmVjaXNpb24gPSBwcmVjO1xuICAgIH1cblxuICAgIHByZWNpc2lvbiA/Pz0gMjtcbiAgICBwcmVjaXNpb24gKz0gZGVsdGFfcHJlYztcbiAgICBpZihwcmVjaXNpb24gPCAwKVxuICAgICAgICBwcmVjaXNpb24gPSAwO1xuXG4gICAgY2VsbHMuZm9ybWF0KHtwcmVjaXNpb259KTtcbn1cblxuY29uc3QgZmN0czogUmVjb3JkPHN0cmluZywgeyBhY3Rpb246IChjZWxsczogQ2VsbExpc3QpID0+dm9pZCwgZW5hYmxlZD86IChjZWxsczogQ2VsbExpc3QpID0+IGJvb2xlYW4gfT4gPSB7XG4gICAgXCJmb3JtYXRfemVyb19wMVwiOiB7XG4gICAgICAgIGFjdGlvbjogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG4gICAgICAgICAgICBwcmVjaXNpb24oY2VsbHMsICsxKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJmb3JtYXRfemVyb19tMVwiOiB7XG4gICAgICAgIGFjdGlvbjogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG4gICAgICAgICAgICBwcmVjaXNpb24oY2VsbHMsIC0xKTtcbiAgICAgICAgfVxuICAgIH0sXCJmb3JtYXRfcG91cmNlbnRcIjoge1xuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuXG4gICAgICAgICAgICBpZiggRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHMpLmdldFByb3BlcnR5KCdmb3JtYXQnKSA9PT0gRm9ybWF0cy5wb3VyY2VudCApIHtcbiAgICAgICAgICAgICAgICBjZWxscy5mb3JtYXQoRm9ybWF0cy5udW1iZXIpOyAvLyBoNGNrXG4gICAgICAgICAgICAgICAgY2VsbHMuZm9ybWF0KHtmb3JtYXQ6IG51bGx9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjZWxscy5mb3JtYXQoRm9ybWF0cy5wb3VyY2VudCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVuYWJsZWQ6IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzKS5nZXRQcm9wZXJ0eSgnZm9ybWF0JykgPT09IEZvcm1hdHMucG91cmNlbnQ7XG4gICAgICAgIH1cbiAgICB9LFwiZm9ybWF0X25iXCI6IHtcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcblxuICAgICAgICAgICAgaWYoIEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzKS5nZXRQcm9wZXJ0eSgnZm9ybWF0JykgPT09IEZvcm1hdHMubnVtYmVyICkge1xuICAgICAgICAgICAgICAgIGNlbGxzLmZvcm1hdCh7Zm9ybWF0OiBudWxsfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2VsbHMuZm9ybWF0KEZvcm1hdHMubnVtYmVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5hYmxlZDogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHMpLmdldFByb3BlcnR5KCdmb3JtYXQnKSA9PT0gRm9ybWF0cy5udW1iZXI7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiZm9ybWF0X21vbm5haWVcIjoge1xuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuXG4gICAgICAgICAgICBpZiggRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHMpLmdldFByb3BlcnR5KCdmb3JtYXQnKSA9PT0gRm9ybWF0cy5ldXJvcyApIHtcbiAgICAgICAgICAgICAgICBjZWxscy5mb3JtYXQoe2Zvcm1hdDogbnVsbH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNlbGxzLmZvcm1hdChGb3JtYXRzLmV1cm9zKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5hYmxlZDogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHMpLmdldFByb3BlcnR5KCdmb3JtYXQnKSA9PT0gRm9ybWF0cy5ldXJvcztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJmb3JtYXRfZGF0ZVwiOiB7XG4gICAgICAgIGFjdGlvbjogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG5cbiAgICAgICAgICAgIGlmKCBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxscykuZ2V0UHJvcGVydHkoJ2Zvcm1hdCcpID09PSBGb3JtYXRzLmRhdGUgKSB7XG4gICAgICAgICAgICAgICAgY2VsbHMuZm9ybWF0KEZvcm1hdHMubnVtYmVyKTsgLy8gaDRja1xuICAgICAgICAgICAgICAgIGNlbGxzLmZvcm1hdCh7Zm9ybWF0OiBudWxsfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2VsbHMuZm9ybWF0KEZvcm1hdHMuZGF0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVuYWJsZWQ6IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzKS5nZXRQcm9wZXJ0eSgnZm9ybWF0JykgPT09IEZvcm1hdHMuZGF0ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJyZXRyYWl0X20xXCI6IHtcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcbiAgICAgICAgICAgIHJldHJhaXQoY2VsbHMsIC0xKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJyZXRyYWl0X3AxXCI6IHsgLy8gVE9ETzogbTEuLi5cbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcbiAgICAgICAgICAgIHJldHJhaXQoY2VsbHMsICsxKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJib3JkZXJcIjoge1xuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuICAgICAgICAgICAgY2VsbHMuZm9ybWF0KHtcbiAgICAgICAgICAgICAgICBib3JkZXJfdG9wOiB0cnVlLFxuICAgICAgICAgICAgICAgIGJvcmRlcl9ib3R0b206IHRydWUsXG4gICAgICAgICAgICAgICAgYm9yZGVyX2xlZnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgYm9yZGVyX3JpZ2h0OiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJ1bm1lcmdlXCI6IHtcbiAgICAgICAgYWN0aW9uOiB1bm1lcmdlXG4gICAgfSxcbiAgICBcIm1lcmdlXCI6IHtcbiAgICAgICAgYWN0aW9uOiBtZXJnZVxuICAgIH0sXG4gICAgXCJtZXJnZV9jZW50ZXJcIjoge1xuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxsaXN0OiBDZWxsTGlzdCkge1xuXG4gICAgICAgICAgICBsZXQgdW5tZXJnZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc3Qgc2hlZXQgPSBjZWxsbGlzdC5zaGVldDtcblxuICAgICAgICAgICAgZm9yKGxldCBjZWxsIG9mIGNlbGxsaXN0LmNlbGxzKVxuICAgICAgICAgICAgICAgIGlmKCBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxsKS5oYXNQcm9wZXJ0eShcInNwYW5cIikgKSB7XG4gICAgICAgICAgICAgICAgICAgIHVubWVyZ2UoIG5ldyBDZWxsTGlzdChzaGVldCwgW2NlbGxdKSApO1xuICAgICAgICAgICAgICAgICAgICB1bm1lcmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih1bm1lcmdlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIG1lcmdlKGNlbGxsaXN0LCB0cnVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5hYmxlZDogZnVuY3Rpb24oY2VsbGxpc3Q6IENlbGxMaXN0KSB7XG5cbiAgICAgICAgICAgIGZvcihsZXQgY2VsbCBvZiBjZWxsbGlzdC5jZWxscylcbiAgICAgICAgICAgICAgICBpZiggRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbCkuaGFzUHJvcGVydHkoXCJzcGFuXCIpIClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgY3NzID0gYFxuICAgIDpob3N0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcblxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIH1cblxuICAgIDpob3N0IC52YmFyIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWJhYmFiO1xuICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICB9XG5cbiAgICA6aG9zdCBzZWxlY3Qge1xuICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cbmBcblxuY29uc3QgaXRlbWNzcyA9IGBcblxuICAgIDpob3N0IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIDpob3N0KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG5cbiAgICA6aG9zdChbdmFsdWVdKSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gICAgfVxuXG4gICAgOmhvc3QsIDpob3N0ID4gZGl2IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgOmhvc3Qge1xuICAgICAgICBwYWRkaW5nOiAxcHg7XG4gICAgfVxuXG4gICAgOmhvc3QgPiBkaXYge1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKCAxLjJlbSAtIDFweCApO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTFweDtcbiAgICAgICAgcmlnaHQ6IC0xcHg7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiBjYWxjKCAoIDEuMmVtIC0gMXB4IC0gMnB4ICkgLyAyICk7XG4gICAgICAgICAgICByaWdodDogMXB4O1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHdpZHRoOiAwOyBcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIC0tc2l6ZTogNHB4O1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IHZhcigtLXNpemUpIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1zaXplKSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYm9yZGVyLXRvcDogdmFyKC0tc2l6ZSkgc29saWQgYmxhY2s7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICA6aG9zdCg6aG92ZXI6bm90KC5lbmFibGVkKSksIDpob3N0KDpob3Zlcjpub3QoLmVuYWJsZWQpKSA+IGRpdiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5Njk2OTY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB9XG5cbiAgICA6aG9zdCguZW5hYmxlZCkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZiNmI2O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5YjliO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgfVxuYDtcblxuZXhwb3J0IGNsYXNzIENhbGNUb29sYmFySXRlbSBleHRlbmRzIExJU1Moe1xuICAgIGNzczogaXRlbWNzc1xufSkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY29udGVudC5zcmMgPSBgLi4vLi4vLi4vLi4vYXNzZXRzL3RhYmxldXIvaW1nL3Rvb2xiYXIvJHt0aGlzLmhvc3QuZ2V0QXR0cmlidXRlKCduYW1lJyl9LnBuZ2A7XG5cbiAgICAgICAgaWYoICEgdGhpcy5ob3N0Lmhhc0F0dHJpYnV0ZSgndmFsdWUnKSApIHtcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoIGNvbnRlbnQgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBsZXQgY29sb3JfcGlja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbdHlwZT1cImNvbG9yXCJdJyk7XG4gICAgICAgICAgICBpZiggY29sb3JfcGlja2VyID09PSBudWxsICkge1xuICAgICAgICAgICAgICAgIGNvbG9yX3BpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgY29sb3JfcGlja2VyLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjb2xvclwiKTtcbiAgICAgICAgICAgICAgICBjb2xvcl9waWNrZXIuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGNvbG9yX3BpY2tlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2FuY2VsJykpO1xuXG4gICAgICAgICAgICBsZXQgY2FuY2VsID0gZmFsc2U7XG4gICAgICAgICAgICBjb2xvcl9waWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2FuY2VsJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNhbmNlbCA9IHRydWU7XG4gICAgICAgICAgICB9LCB7b25jZTogdHJ1ZX0pO1xuXG4gICAgICAgICAgICBjb2xvcl9waWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoIGNhbmNlbCApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY29sb3JfcGlja2VyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhvc3QuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiY2xpY2tcIiwge2J1YmJsZXM6IHRydWV9KSApO1xuXG4gICAgICAgICAgICB9LCB7b25jZTogdHJ1ZX0pO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChjb2xvcl9waWNrZXIpO1xuICAgICAgICAgICAgY29sb3JfcGlja2VyLmNsaWNrKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoIGNvbnRlbnQsIHNwYW4gKTtcbiAgICB9XG59XG5cbkxJU1MuZGVmaW5lKCdjYWxjLXRvb2xiYXItaXRlbScsIENhbGNUb29sYmFySXRlbSk7XG5cbmV4cG9ydCBjbGFzcyBDYWxjVG9vbGJhciBleHRlbmRzIExJU1Moe1xuICAgIGNvbnRlbnQsXG4gICAgY3NzXG59KSB7XG5cbiAgICAjYnRuczogUmVjb3JkPHN0cmluZywgSFRNTEVsZW1lbnQ+ID0ge307XG5cbiAgICBkaXNhYmxlQWxsRXhjZXB0KC4uLmV4Y2VwdGlvbjogc3RyaW5nW10pIHtcbiAgICAgICAgZm9yKGxldCBidG5fbmFtZSBpbiB0aGlzLiNidG5zKVxuICAgICAgICAgICAgaWYoICEgZXhjZXB0aW9uLmluY2x1ZGVzKGJ0bl9uYW1lKSApXG4gICAgICAgICAgICAgICAgdGhpcy4jYnRuc1tidG5fbmFtZV0udG9nZ2xlQXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICBcbiAgICAgICAgaWYoICEgZXhjZXB0aW9uLmluY2x1ZGVzKFwiZm9udF9zaXplXCIpIClcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yPEhUTUxTZWxlY3RFbGVtZW50PignLmZvbnRfc2l6ZScpIS50b2dnbGVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgbGV0IGZvbnRfc2l6ZXMgPSBbXG4gICAgICAgICAgICA2LCA3LCA4LCA5LCAxMCwgMTAuNSwgMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgMTgsIDIwLCAyMSwgMjIsIDI0LCAyNiwgMjgsIDMyLCAzNiwgNDAsIDQyLCA0NCwgNDgsIDU0LCA2MCwgNjYsIDcyLCA4MCwgODgsIDk2XG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3QgYnRucyA9IHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignY2FsYy10b29sYmFyLWl0ZW0nKTtcbiAgICAgICAgZm9yKGxldCBidG4gb2YgYnRucylcbiAgICAgICAgICAgIHRoaXMuI2J0bnNbYnRuLmdldEF0dHJpYnV0ZSgnbmFtZScpIV0gPSBidG47XG5cbiAgICAgICAgY29uc3QgZm9udF9zaXplc19zZWxlY3QgPSB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvcjxIVE1MU2VsZWN0RWxlbWVudD4oJy5mb250X3NpemUnKSE7XG4gICAgICAgIGZvcihsZXQgZm9udF9zaXplIG9mIGZvbnRfc2l6ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IG5ldyBPcHRpb24oYCR7Zm9udF9zaXplLnRvU3RyaW5nKCkucmVwbGFjZSgnLicsICcsJyl9IHB0YCwgYCR7Zm9udF9zaXplfXB0YCk7XG4gICAgICAgICAgICBmb250X3NpemVzX3NlbGVjdC5hcHBlbmQob3B0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBlbGVtID0gZXYudGFyZ2V0ISBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIGlmKCBlbGVtLnRhZ05hbWUgIT09ICdDQUxDLVRPT0xCQVItSVRFTScpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb25zdCBuID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ25hbWUnKSEgYXMga2V5b2YgdHlwZW9mIGZjdHM7XG4gICAgICAgICAgICBpZiggZWxlbS5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSA9PT0gJ2ZjdCcpIHtcblxuICAgICAgICAgICAgICAgIGZjdHNbbl0uYWN0aW9uKHRoaXMuI3NoZWV0LnNlbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgdGhpcy4jdXBkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gIGVsZW0uaGFzQXR0cmlidXRlKCd2YWx1ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBlbGVtLmdldEF0dHJpYnV0ZSgndmFsdWUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZWxlbS5jbGFzc0xpc3QudG9nZ2xlKCdlbmFibGVkJyk7XG5cbiAgICAgICAgICAgIGxldCBmb3JtYXQgPSBuZXcgRm9ybWF0KHtbbl06IHZhbHVlIH0pO1xuICAgICAgICAgICAgZm9ybWF0LmFwcGx5VG8oIHRoaXMuI3NoZWV0LnNlbGVjdGlvbiApO1xuICAgICAgICAgICAgdGhpcy4jdXBkYXRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvbnRfc2l6ZXNfc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuXG4gICAgICAgICAgICAvL1RPRE8uLi5cbiAgICAgICAgICAgIGxldCBmb3JtYXQgPSBuZXcgRm9ybWF0KHtmb250X3NpemU6IGZvbnRfc2l6ZXNfc2VsZWN0LnZhbHVlfSk7XG4gICAgICAgICAgICBmb3JtYXQuYXBwbHlUbyggdGhpcy4jc2hlZXQuc2VsZWN0aW9uICk7XG4gICAgICAgICAgICB0aGlzLiN1cGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgI3NoZWV0ITpDYWxjU2hlZXQ7XG5cblxuICAgICN1cGRhdGUoKSB7XG5cbiAgICAgICAgaWYoIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5jZWxscy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZm9ybWF0ID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQodGhpcy4jc2hlZXQuc2VsZWN0aW9uKTtcblxuICAgICAgICBmb3IobGV0IG5hbWUgaW4gdGhpcy4jYnRucykge1xuXG4gICAgICAgICAgICBsZXQgZW5hYmxlZCA9IGZvcm1hdC5nZXRQcm9wZXJ0eShuYW1lKSA9PT0gdHJ1ZTtcbiAgICAgICAgICAgIGlmKG5hbWUgaW4gZmN0cylcbiAgICAgICAgICAgICAgICBlbmFibGVkID0gZmN0c1tuYW1lIGFzIGtleW9mIHR5cGVvZiBmY3RzXS5lbmFibGVkPy4odGhpcy4jc2hlZXQuc2VsZWN0aW9uKSA/PyBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy4jYnRuc1tuYW1lXS5jbGFzc0xpc3QudG9nZ2xlKCdlbmFibGVkJywgZW5hYmxlZCApXG4gICAgICAgIH1cblxuICAgICAgICAvL1RPRE8uLi5cbiAgICAgICAgY29uc3QgZm9udF9zaXplc19zZWxlY3QgPSB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvcjxIVE1MU2VsZWN0RWxlbWVudD4oJy5mb250X3NpemUnKSE7XG4gICAgICAgIGZvbnRfc2l6ZXNfc2VsZWN0LnZhbHVlID0gZm9ybWF0LmdldFByb3BlcnR5KCdmb250X3NpemUnKTtcbiAgICAgICAgLy9UT0RPOiB1cGRhdGUuLi5cbiAgICB9XG5cbiAgICBzeW5jVG8oc2hlZXQ6IENhbGNTaGVldCkge1xuXG4gICAgICAgIHRoaXMuI3NoZWV0ID0gc2hlZXQ7XG5cblxuICAgICAgICBzaGVldC5zZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLiN1cGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuI3VwZGF0ZSgpO1xuXG4gICAgfVxuXG59XG5cbkxJU1MuZGVmaW5lKCdjYWxjLXRvb2xiYXInLCBDYWxjVG9vbGJhcik7IiwiZXhwb3J0IGRlZmF1bHQgW1xuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiUiAxLTAxIFRhYmxldXIgZXQgUmVwb3J0aW5nXCIsXG4gICAgICAgIHNuYW1lOiBcIlIxLTAxIFRhYmxldXJcIixcbiAgICAgICAgcGF0aCA6IFwiUjEtMDFcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNNXCIsXG4gICAgICAgICAgICAgICAgcGF0aDogXCJDTVwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiQ00xXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQ00yXCJcbiAgICAgICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJUUFwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiVFBcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIlRQMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQMlwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIlIgMS0wMiBCYXNlcyBkZSBEb25uw6llcyBSZWxhdGlvbm5lbGxlcyAxXCIsXG4gICAgICAgIHNuYW1lOiBcIlIxLTAyIEJEUjFcIixcbiAgICAgICAgcGF0aCA6IFwiUjEtMDJcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIFwiQ01cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlNsaWRlc1wiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiU2xpZGVzXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgXCJDTTFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDTTJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDTTNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDTTRcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJUUFwiICxcbiAgICAgICAgICAgICAgICBwYXRoIDogXCJUUFwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiVFAxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFAyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFAzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFA0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFA1XCJcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJDaGVhdCBTaGVldFwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiL2Fzc2V0cy9zcWwvY2hlYXQgc2hlZXQuc3ZnXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lIDogXCJSIDMtMDMgVGVjaG5vbG9naWVzIFdlYlwiLFxuICAgICAgICBzbmFtZTogXCJSMy0wMyBXZWIxXCIsXG4gICAgICAgIHBhdGggOiBcIlIzLTAzXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJDTVwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiQ01cIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIkNNMVwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IHJvb3RfcGF0aCA9IFtcImxvY2FsaG9zdFwiLCBcIjEyNy4wLjAuMVwiXS5pbmNsdWRlcyhsb2NhdGlvbi5ob3N0bmFtZSkgPyBcIi9kaXN0L2Rldi9wYWdlcy9cIiA6IFwiL0NvdXJzL2Rpc3QvZGV2L3BhZ2VzL1wiOyIsIlxuaW1wb3J0IHBhZ2VzLCB7cm9vdF9wYXRofSBmcm9tIFwiLi9jb250ZW50XCI7XG5cbi8qXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JlcHJpbnQnLCAoKSA9PiB7XG4gIC8vLi4uXG59KTtcbiovXG5cbi8vVE9ETzogbGlua3MuLi5cbmNvbnN0IG1haW4gICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpITtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIikhO1xuXG5jb25zdCB0aXRsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcImgxLCBoMiwgaDMsIGg0XCIpO1xuXG50eXBlIE5vZGUgPSB7XG4gICAgaHRtbCAgICA6IEhUTUxFbGVtZW50LFxuICAgIGxldmVsICAgOiBudW1iZXIsXG4gICAgcGFyZW50ICA6IG51bGx8Tm9kZSxcbiAgICBjaGlsZHJlbjogTm9kZVtdXG59O1xuXG5jb25zdCBodHJlZTogTm9kZSA9IHtcbiAgICBodG1sICAgIDogbWFpbixcbiAgICBsZXZlbCAgIDogMCxcbiAgICBwYXJlbnQgIDogbnVsbCxcbiAgICBjaGlsZHJlbjogW10sXG59O1xubGV0IGh0cmVlX2N1cnNvciA9IGh0cmVlO1xuZm9yKGxldCB0aXRsZSBvZiB0aXRsZXMpIHtcbiAgICBjb25zdCBsZXZlbCA9ICt0aXRsZS50YWdOYW1lLnNsaWNlKDEpO1xuICAgIFxuICAgIHdoaWxlKCBsZXZlbCA8PSBodHJlZV9jdXJzb3IubGV2ZWwgKVxuICAgICAgICBodHJlZV9jdXJzb3IgPSBodHJlZV9jdXJzb3IucGFyZW50ITtcblxuICAgIGNvbnN0IGVsZW06IE5vZGUgPSB7XG4gICAgICAgIGh0bWw6IHRpdGxlLFxuICAgICAgICBsZXZlbCxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICBwYXJlbnQ6IGh0cmVlX2N1cnNvclxuICAgIH07XG5cblxuICAgIGh0cmVlX2N1cnNvci5jaGlsZHJlbi5wdXNoKGVsZW0pO1xuXG4gICAgaHRyZWVfY3Vyc29yID0gZWxlbTtcbn1cblxuZnVuY3Rpb24gc2VhcmNoQ3VySGVhZGVyKGh0cmVlOiBOb2RlLCBwb3NpdGlvbjogbnVtYmVyKTogbnVsbCB8IE5vZGUge1xuXG4gICAgY29uc3QgaGVhZGVycyA9IGh0cmVlLmNoaWxkcmVuO1xuXG4gICAgZm9yKGxldCBpID0gaGVhZGVycy5sZW5ndGggLSAxOyBpID49IDA7IC0taSlcbiAgICAgICAgaWYoIGhlYWRlcnNbaV0uaHRtbC5vZmZzZXRUb3AgPD0gcG9zaXRpb24gKyAzMiApXG4gICAgICAgICAgICByZXR1cm4gc2VhcmNoQ3VySGVhZGVyKGhlYWRlcnNbaV0sIHBvc2l0aW9uKSA/PyBoZWFkZXJzW2ldO1xuXG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmNvbnN0IGhpZCA9IFtcbiAgICBbXSxcbiAgICBbXCJJXCIsIFwiSUlcIiwgXCJJSUlcIiwgXCJJVlwiXSxcbiAgICBbXCIxXCIsIFwiMlwiLFwiM1wiLFwiNVwiLFwiNlwiLFwiN1wiLFwiOFwiLFwiOVwiXSxcbiAgICBbXCJhXCIsIFwiYlwiLFwiY1wiLFwiZFwiLFwiZVwiLFwiZlwiLFwiZ1wiLFwiaFwiXSxcbl1cblxuZnVuY3Rpb24gZ2V0VGl0bGVQcmVmaXgoczogTm9kZSkge1xuXG4gICAgaWYoIHMubGV2ZWwgPj0gaGlkLmxlbmd0aCApXG4gICAgICAgIHJldHVybiBcIlwiO1xuXG4gICAgY29uc3QgaWR4ID0gcy5wYXJlbnQhLmNoaWxkcmVuLmluZGV4T2Yocyk7XG5cbiAgICBjb25zdCBudW0gPSBoaWRbcy5sZXZlbF1baWR4XTtcblxuICAgIHJldHVybiBgJHtudW19LiBgO1xufVxuXG5mdW5jdGlvbiBidWlsZE1lbnUobm9kZXM6IE5vZGVbXSkge1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICAgIG1lbnUuYXBwZW5kKCAuLi4gbm9kZXMubWFwKCAocyxpZHgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBpdGVtLnRleHRDb250ZW50PSBgJHtnZXRUaXRsZVByZWZpeChzKX0ke3MuaHRtbC50ZXh0Q29udGVudH1gO1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgYCMke3MuaHRtbC5pZH1gKTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSkgKTtcblxuICAgIHJldHVybiBtZW51O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVIZWFkZXIoKSB7XG5cbiAgICBjb25zdCBsYXN0ID0gc2VhcmNoQ3VySGVhZGVyKCBodHJlZSwgbWFpbi5zY3JvbGxUb3ApITtcblxuICAgIGxldCBoZWFkZXJzID0gW107XG4gICAgbGV0IGN1cnNvciAgPSBsYXN0O1xuXG4gICAgd2hpbGUoY3Vyc29yLmh0bWwgIT09IG1haW4pIHtcbiAgICAgICAgaGVhZGVycy5wdXNoKGN1cnNvcik7XG4gICAgICAgIGN1cnNvciA9IGN1cnNvci5wYXJlbnQhO1xuICAgIH1cblxuICAgIGNvbnN0IGh0bWwgPSBoZWFkZXJzLnJldmVyc2UoKS5tYXAoIChobm9kZSxpKSA9PiB7XG5cbiAgICAgICAgY29uc3QgaCA9IGhub2RlLmh0bWw7XG4gICAgICAgIGNvbnN0IGhfaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgbGluay50ZXh0Q29udGVudCA9IGAke2dldFRpdGxlUHJlZml4KGhub2RlKX0ke2gudGV4dENvbnRlbnR9YDtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgIyR7aC5pZH1gKTtcblxuICAgICAgICBjb25zdCBtZW51ID0gYnVpbGRNZW51KGhub2RlLnBhcmVudCEuY2hpbGRyZW4pO1xuICAgICAgICBoX2h0bWwuYXBwZW5kKGxpbmssIG1lbnUpO1xuXG4gICAgICAgIHJldHVybiBoX2h0bWw7XG4gICAgfSk7XG5cbiAgICBpZiggbGFzdC5jaGlsZHJlbi5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgZW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgICAgICBlbXB0eS5hcHBlbmQoIGJ1aWxkTWVudShsYXN0LmNoaWxkcmVuKSApO1xuXG4gICAgICAgIGh0bWwucHVzaChlbXB0eSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlX3BhZ2VfaHJlZihwYXRocHJlZml4OiBzdHJpbmcsIHBhdGg6IHN0cmluZywgZGVzYzogYW55KSB7XG5cbiAgICAgICAgLy8gaDRjay4uLlxuICAgICAgICBpZiggcGF0aFswXSA9PT0gXCIvXCIgKVxuICAgICAgICAgICAgcmV0dXJuIGAke3Jvb3RfcGF0aC5zbGljZSgwLC02KX0vJHtwYXRofWA7XG5cbiAgICAgICAgbGV0IGhyZWYgPSBgJHtwYXRocHJlZml4fSR7cGF0aH0vYDtcblxuICAgICAgICB3aGlsZShkZXNjLmNoaWxkcmVuPy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRlc2MgPSBkZXNjLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgaHJlZiArPSBgJHtkZXNjLnBhdGggPz8gZGVzY30vYDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBocmVmO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VfcGFnZV9tZW51KHBhdGhwcmVmaXg6IHN0cmluZywgcGF0aDogc3RyaW5nLCBwYWdlczogYW55KSB7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBwYWdlcy5maW5kKCAocGFnZTogYW55KSA9PiBwYWdlID09PSBwYXRoIHx8IHBhZ2UucGF0aCA9PT0gcGF0aCApITtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgbGluay50ZXh0Q29udGVudCA9IGRlc2Muc25hbWUgPz8gZGVzYy5uYW1lID8/IGRlc2M7XG4gICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIG1ha2VfcGFnZV9ocmVmKHBhdGhwcmVmaXgsIHBhdGgsIGRlc2MpICk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gICAgXG4gICAgICAgICAgICBtZW51LmFwcGVuZCggLi4uIHBhZ2VzLm1hcCggKHBhZ2U6YW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQ9IHBhZ2UubmFtZSA/PyBwYWdlO1xuXG4gICAgICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIG1ha2VfcGFnZV9ocmVmKHBhdGhwcmVmaXgsIHBhZ2UucGF0aD8/cGFnZSwgcGFnZSkgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH0pICk7XG4gICAgXG4gICAgICAgICAgICBodG1sLmFwcGVuZChsaW5rLCBtZW51KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICBcbiAgICBsZXQgY3VycGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zbGljZShyb290X3BhdGgubGVuZ3RoKS5zcGxpdCgnLycpO1xuXG4gICAgY29uc3QgbW9kdWxlX2h0bWwgPSBtYWtlX3BhZ2VfbWVudShyb290X3BhdGgsIGN1cnBhZ2VbMF0sIHBhZ2VzKTtcblxuICAgIGNvbnN0IGRlc2MgPSBwYWdlcy5maW5kKCAocGFnZTogYW55KSA9PiBwYWdlLnBhdGggPT09IGN1cnBhZ2VbMF0gKSE7XG4gICAgY29uc3QgdHlwZV9odG1sICAgPSBtYWtlX3BhZ2VfbWVudShyb290X3BhdGggKyBjdXJwYWdlWzBdICsgXCIvXCIsIGN1cnBhZ2VbMV0sIGRlc2MuY2hpbGRyZW4pO1xuXG4gICAgY29uc3QgZGVzY190eXBlID0gZGVzYy5jaGlsZHJlbi5maW5kKCAocGFnZTogYW55KSA9PiAocGFnZT8ucGF0aCA/PyBwYWdlKSA9PT0gY3VycGFnZVsxXSApITtcbiAgICBpZiggdHlwZW9mIGRlc2NfdHlwZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAvLyB0aXRsZSBudW1cbiAgICAgICAgY29uc3QgZGVzYzJfaWR4ID0gZGVzY190eXBlLmNoaWxkcmVuLmZpbmRJbmRleCggKHBhZ2U6IGFueSkgPT4gcGFnZT8ucGF0aCA/PyBwYWdlID09PSBjdXJwYWdlWzJdICkhO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1oZWFkZXJfc3RhcnRfaWRcIiwgYCR7ZGVzYzJfaWR4fWApO1xuICAgICAgICAvLyBtZW51XG4gICAgICAgIGNvbnN0IHNlc3Npb25faHRtbCAgID0gbWFrZV9wYWdlX21lbnUocm9vdF9wYXRoICsgY3VycGFnZVswXSArIFwiL1wiKyBjdXJwYWdlWzFdICsgXCIvXCIsIGN1cnBhZ2VbMl0sIGRlc2NfdHlwZS5jaGlsZHJlbik7XG4gICAgICAgIGh0bWxbMF0gPSBzZXNzaW9uX2h0bWw7XG4gICAgfVxuXG4gICAgaGVhZGVyLnJlcGxhY2VDaGlsZHJlbihtb2R1bGVfaHRtbCwgdHlwZV9odG1sLCAuLi5odG1sKTtcbn1cblxubWFpbi5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGVIZWFkZXIpO1xudXBkYXRlSGVhZGVyKCk7IiwiLy9odHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80OTQxNDMvY3JlYXRpbmctYS1uZXctZG9tLWVsZW1lbnQtZnJvbS1hbi1odG1sLXN0cmluZy11c2luZy1idWlsdC1pbi1kb20tbWV0aG9kcy1vci1wcm9cbmV4cG9ydCBmdW5jdGlvbiBzdHIyaHRtbDxUIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KGh0bWw6IHN0cmluZyk6IFQge1xuICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgaHRtbCA9IGh0bWwudHJpbSgpOyAvLyBOZXZlciByZXR1cm4gYSB0ZXh0IG5vZGUgb2Ygd2hpdGVzcGFjZSBhcyB0aGUgcmVzdWx0XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZCEgYXMgVDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cjJERihodG1sOiBzdHJpbmcpOiBEb2N1bWVudEZyYWdtZW50IHtcbiAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIGh0bWwgPSBodG1sLnRyaW0oKTsgLy8gTmV2ZXIgcmV0dXJuIGEgdGV4dCBub2RlIG9mIHdoaXRlc3BhY2UgYXMgdGhlIHJlc3VsdFxuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQ7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsInZhciB3ZWJwYWNrUXVldWVzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBxdWV1ZXNcIikgOiBcIl9fd2VicGFja19xdWV1ZXNfX1wiO1xudmFyIHdlYnBhY2tFeHBvcnRzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBleHBvcnRzXCIpIDogXCJfX3dlYnBhY2tfZXhwb3J0c19fXCI7XG52YXIgd2VicGFja0Vycm9yID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBlcnJvclwiKSA6IFwiX193ZWJwYWNrX2Vycm9yX19cIjtcbnZhciByZXNvbHZlUXVldWUgPSAocXVldWUpID0+IHtcblx0aWYocXVldWUgJiYgcXVldWUuZCA8IDEpIHtcblx0XHRxdWV1ZS5kID0gMTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSkpO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tID8gZm4ucisrIDogZm4oKSkpO1xuXHR9XG59XG52YXIgd3JhcERlcHMgPSAoZGVwcykgPT4gKGRlcHMubWFwKChkZXApID0+IHtcblx0aWYoZGVwICE9PSBudWxsICYmIHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpIHtcblx0XHRpZihkZXBbd2VicGFja1F1ZXVlc10pIHJldHVybiBkZXA7XG5cdFx0aWYoZGVwLnRoZW4pIHtcblx0XHRcdHZhciBxdWV1ZSA9IFtdO1xuXHRcdFx0cXVldWUuZCA9IDA7XG5cdFx0XHRkZXAudGhlbigocikgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0V4cG9ydHNdID0gcjtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0sIChlKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXJyb3JdID0gZTtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0pO1xuXHRcdFx0dmFyIG9iaiA9IHt9O1xuXHRcdFx0b2JqW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAoZm4ocXVldWUpKTtcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHR9XG5cdHZhciByZXQgPSB7fTtcblx0cmV0W3dlYnBhY2tRdWV1ZXNdID0geCA9PiB7fTtcblx0cmV0W3dlYnBhY2tFeHBvcnRzXSA9IGRlcDtcblx0cmV0dXJuIHJldDtcbn0pKTtcbl9fd2VicGFja19yZXF1aXJlX18uYSA9IChtb2R1bGUsIGJvZHksIGhhc0F3YWl0KSA9PiB7XG5cdHZhciBxdWV1ZTtcblx0aGFzQXdhaXQgJiYgKChxdWV1ZSA9IFtdKS5kID0gLTEpO1xuXHR2YXIgZGVwUXVldWVzID0gbmV3IFNldCgpO1xuXHR2YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuXHR2YXIgY3VycmVudERlcHM7XG5cdHZhciBvdXRlclJlc29sdmU7XG5cdHZhciByZWplY3Q7XG5cdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlaikgPT4ge1xuXHRcdHJlamVjdCA9IHJlajtcblx0XHRvdXRlclJlc29sdmUgPSByZXNvbHZlO1xuXHR9KTtcblx0cHJvbWlzZVt3ZWJwYWNrRXhwb3J0c10gPSBleHBvcnRzO1xuXHRwcm9taXNlW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAocXVldWUgJiYgZm4ocXVldWUpLCBkZXBRdWV1ZXMuZm9yRWFjaChmbiksIHByb21pc2VbXCJjYXRjaFwiXSh4ID0+IHt9KSk7XG5cdG1vZHVsZS5leHBvcnRzID0gcHJvbWlzZTtcblx0Ym9keSgoZGVwcykgPT4ge1xuXHRcdGN1cnJlbnREZXBzID0gd3JhcERlcHMoZGVwcyk7XG5cdFx0dmFyIGZuO1xuXHRcdHZhciBnZXRSZXN1bHQgPSAoKSA9PiAoY3VycmVudERlcHMubWFwKChkKSA9PiB7XG5cdFx0XHRpZihkW3dlYnBhY2tFcnJvcl0pIHRocm93IGRbd2VicGFja0Vycm9yXTtcblx0XHRcdHJldHVybiBkW3dlYnBhY2tFeHBvcnRzXTtcblx0XHR9KSlcblx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRmbiA9ICgpID0+IChyZXNvbHZlKGdldFJlc3VsdCkpO1xuXHRcdFx0Zm4uciA9IDA7XG5cdFx0XHR2YXIgZm5RdWV1ZSA9IChxKSA9PiAocSAhPT0gcXVldWUgJiYgIWRlcFF1ZXVlcy5oYXMocSkgJiYgKGRlcFF1ZXVlcy5hZGQocSksIHEgJiYgIXEuZCAmJiAoZm4ucisrLCBxLnB1c2goZm4pKSkpO1xuXHRcdFx0Y3VycmVudERlcHMubWFwKChkZXApID0+IChkZXBbd2VicGFja1F1ZXVlc10oZm5RdWV1ZSkpKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZm4uciA/IHByb21pc2UgOiBnZXRSZXN1bHQoKTtcblx0fSwgKGVycikgPT4gKChlcnIgPyByZWplY3QocHJvbWlzZVt3ZWJwYWNrRXJyb3JdID0gZXJyKSA6IG91dGVyUmVzb2x2ZShleHBvcnRzKSksIHJlc29sdmVRdWV1ZShxdWV1ZSkpKTtcblx0cXVldWUgJiYgcXVldWUuZCA8IDAgJiYgKHF1ZXVlLmQgPSAwKTtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdtb2R1bGUnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTIvaW5kZXgudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00yL2luZGV4LmNzc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMi9pbmRleC5tZFwiKTtcbiIsIiJdLCJuYW1lcyI6WyJTaGFkb3dDZmciLCJfX2NzdHJfaG9zdCIsIkNBTl9IQVZFX1NIQURPVyIsIl9jYW5IYXNTaGFkb3ciLCJ0YWciLCJpbmNsdWRlcyIsIl9lbGVtZW50MnRhZ25hbWUiLCJMSVNTIiwiZXh0ZW5kcyIsInBfZXh0ZW5kcyIsImhvc3QiLCJwX2hvc3QiLCJkZXBlbmRlbmNpZXMiLCJwX2RlcHMiLCJhdHRyaWJ1dGVzIiwicF9hdHRycyIsInBhcmFtcyIsImNvbnRlbnQiLCJjc3MiLCJzaGFkb3ciLCJwX3NoYWRvdyIsIkhUTUxFbGVtZW50IiwiX2V4dGVuZHMiLCJPYmplY3QiLCJjYW5IYXNTaGFkb3ciLCJFcnJvciIsInVuZGVmaW5lZCIsInB1c2giLCJIVE1MVGVtcGxhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwidHJpbSIsIlJlc3BvbnNlIiwidGV4dCIsIkxJU1NCYXNlIiwiUGFyYW1ldGVycyIsInN0eWxlc2hlZXRzIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiZmV0Y2hfY3NzIiwiQ1NTU3R5bGVTaGVldCIsIkhUTUxTdHlsZUVsZW1lbnQiLCJzaGVldCIsInN0eWxlIiwicmVwbGFjZSIsIm1hcCIsImlkeCIsImNvbnN0cnVjdG9yIiwiYXR0cnMiLCJzZXRBdHRyRGVmYXVsdCIsImF0dHIiLCJ2YWx1ZSIsInNldFBhcmFtIiwibmFtZSIsIm9uQXR0ckNoYW5nZWQiLCJfbmFtZSIsIl9vbGRWYWx1ZSIsIl9uZXdWYWx1ZSIsImlzSW5ET00iLCJvbkRPTUNvbm5lY3RlZCIsIm9uRE9NRGlzY29ubmVjdGVkIiwiZXh0ZW5kc0xJU1MiLCJMaXNzIiwicGFyYW1ldGVycyIsImFzc2lnbiIsIkV4dGVuZGVkTElTUyIsInQiLCJpZCIsImJ1aWxkTElTU0hvc3QiLCJfcGFyYW1zIiwiYWxyZWFkeURlY2xhcmVkQ1NTIiwiU2V0IiwiR0VUIiwiU3ltYm9sIiwiU0VUIiwicHJvcGVydGllcyIsImZyb21FbnRyaWVzIiwibiIsImVudW1lcmFibGUiLCJnZXQiLCJzZXQiLCJBdHRyaWJ1dGVzIiwiZGF0YSIsImRlZmF1bHRzIiwic2V0dGVyIiwiZGVmaW5lUHJvcGVydGllcyIsIkxJU1NIb3N0QmFzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiaXNJbml0IiwiaW5pdGlhbGl6ZSIsImFwaSIsImluaXQiLCJMSVNTU3luYyIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJjdXN0b21FbGVtZW50cyIsInVwZ3JhZGUiLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uQ2xpY2tFdmVudCIsIm9icyIsImdldEF0dHJpYnV0ZSIsImFkb3B0ZWRTdHlsZVNoZWV0cyIsInNoYXJlZENTUyIsImNzc3NlbGVjdG9yIiwiQ1NTU2VsZWN0b3IiLCJoYXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJodG1sX3N0eWxlc2hlZXRzIiwicnVsZSIsImNzc1J1bGVzIiwiY3NzVGV4dCIsImhlYWQiLCJhcHBlbmQiLCJhZGQiLCJ0ZW1wbGF0ZV9lbGVtIiwic3RyIiwiXyIsIm1hdGNoIiwiY2hpbGROb2RlcyIsIm9iaiIsImhhc1NoYWRvdyIsImdldFBhcnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0UGFydHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGFzQXR0cmlidXRlIiwidGFnTmFtZSIsInJlbW92ZUF0dHJpYnV0ZSIsIm9ic2VydmVkQXR0cmlidXRlcyIsImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayIsIm9sZFZhbHVlIiwibmV3VmFsdWUiLCJfRE9NQ29udGVudExvYWRlZCIsInJlYWR5U3RhdGUiLCJkZWZpbmUiLCJ0YWduYW1lIiwiQ29tcG9uZW50Q2xhc3MiLCJDbGFzcyIsImh0bWx0YWciLCJhbGwiLCJMSVNTY2xhc3MiLCJvcHRzIiwiaW5zZXJ0R2xvYmFsQ1NTUnVsZXMiLCJjc3Nfc3R5bGUiLCJyZXBsYWNlU3luYyIsImluc2VydFJ1bGUiLCJERUxFR0FURURfRVZFTlRTIiwiQUxSRUFEWV9QUk9DRVNTRUQiLCJldiIsImhhbmRsZXJzIiwidHlwZSIsImVsZW0iLCJjb21wb3NlZFBhdGgiLCJTaGFkb3dSb290Iiwid2luZG93IiwidGFyZ2V0Iiwic2VsZWN0b3IiLCJoYW5kbGVyIiwibWF0Y2hlcyIsImluc2VydEdsb2JhbERlbGVnYXRlZExpc3RlbmVyIiwiZXZlbnRfbmFtZSIsImNsb3Nlc3QiLCJlbGVtZW50IiwicmVzdWx0Iiwicm9vdCIsImdldFJvb3ROb2RlIiwiYnVpbGQiLCJwYXJlbnQiLCJjbGFzc2VzIiwiY3NzdmFycyIsImxpc3RlbmVycyIsIkN1c3RvbUNsYXNzIiwid2hlbkRlZmluZWQiLCJ0b0xvd2VyQ2FzZSIsImNsYXNzTGlzdCIsInNldFByb3BlcnR5IiwidG9nZ2xlQXR0cmlidXRlIiwiZGF0YXNldCIsInJlcGxhY2VDaGlsZHJlbiIsImdldExJU1MiLCJidWlsZFN5bmMiLCJpbml0aWFsaXplU3luYyIsImdldExJU1NTeW5jIiwiY2FsbGJhY2siLCJ3aGVuQWxsRGVmaW5lZCIsInRhZ25hbWVzIiwiaXNEZWZpbmVkIiwiZ2V0TmFtZSIsIl9idWlsZFFTIiwidGFnbmFtZV9vcl9wYXJlbnQiLCJxcyIsInFzbyIsInFzYSIsImVsZW1lbnRzIiwicHJvbWlzZXMiLCJxc2MiLCJyZXMiLCJxc1N5bmMiLCJxc2FTeW5jIiwicXNjU3luYyIsIkxJU1NfQXV0byIsIm5hdmlnYXRvciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsImNvbnRyb2xsZXIiLCJzcmMiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm11dGF0aW9uIiwiYWRkaXRpb24iLCJhZGRlZE5vZGVzIiwiRWxlbWVudCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwicmVzb3VyY2VzIiwiZGVmaW5lV2ViQ29tcG9uZW50IiwiZmlsZXMiLCJqcyIsImtsYXNzIiwiV2ViQ29tcG9uZW50IiwiZmlsZW5hbWVzIiwiZmlsZSIsImVuZHNXaXRoIiwiX2ltcG9ydCIsIl9mZXRjaFRleHQiLCJpIiwiQ3N0bUV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJhcmdzIiwiZGV0YWlsIiwiZmV0Y2hSZXNvdXJjZSIsInJlc291cmNlIiwiZmV0Y2giLCJ1cmkiLCJpc0xpc3NBdXRvIiwib3B0aW9ucyIsImhlYWRlcnMiLCJyZXNwb25zZSIsInN0YXR1cyIsImRlZmF1bHQiLCJlIiwiY29uc29sZSIsImxvZyIsIkhUTUxDTEFTU19SRUdFWCIsImVsZW1lbnROYW1lTG9va3VwVGFibGUiLCJleGVjIiwiRm9ybWF0cyIsInNoZWV0X2Zvcm1hdF9jb250ZW50IiwiZ2V0UmFuZ2UiLCJmb3JtYXQiLCJmb250X3NpemUiLCJmb3JlZ3JvdW5kX2NvbG9yIiwiYmFja2dyb3VuZF9jb2xvciIsInNoZWV0X3Rvb2xiYXJfZm9ybWF0X2NvbnRlbnQiLCJzeW5jVG8iLCJkaXNhYmxlQWxsRXhjZXB0Iiwic2hlZXRfYWxpZ24iLCJzaGVldF90b29sYmFyX2FsaWduIiwiZXVyb3MiLCJwb3VyY2VudCIsIm51bWJlciIsImRhdGUiLCJwcmVjaXNpb24iLCJzaGVldF90b29sYmFyIiwiYm9yZGVyX3RvcCIsImJvcmRlcl9ib3R0b20iLCJib3JkZXJfbGVmdCIsImJvcmRlcl9yaWdodCIsImJvcmRlcl9jb2xvciIsImluZGVudCIsInNwYW4iLCJhbGlnbl9jZW50ZXIiLCJ2YWxpZ25fbWlkZGxlIiwic3RyMmh0bWwiLCJSYW5nZU92ZXJsYXkiLCJFdmVudFRhcmdldCIsIm92ZXJsYXkiLCJjbGFzc2xpc3QiLCJ1cGRhdGUiLCJzZXRSYW5nZSIsInJhbmdlIiwicGxhZ2VfbmFtZSIsImdldFJlY3QiLCJyZWN0IiwidG9nZ2xlIiwic2V0UmVjdCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJGb3JtdWxhUmVmIiwic2V0Q29sb3IiLCJjb2xvcl9pZCIsInJlbW92ZSIsIlJlY29weUhhbmRsZSIsIngiLCJ5IiwidyIsImgiLCJGb3JtdWxhIiwiQ2FsY1NoZWV0IiwiQ2VsbExpc3QiLCJGb3JtYXRNYW5hZ2VyIiwiY3RybEtleSIsImNoYW5nZWQiLCJrZXkiLCJzZWxlY3Rpb24iLCJ0b2dnbGVGb3JtYXQiLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwiZGlzcGF0Y2hFdmVudCIsImZsb2F0MkRhdGUiLCJmbG9hdCIsIkRhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImRhdGUyRmxvYXQiLCJiZWciLCJnZXRUaW1lIiwidG9GaXhlZCIsImZvcm1hdFJhdyIsInB0aGlzIiwicmF3Q29udGVudCIsInRvU3RyaW5nIiwiY2FsbCIsImNhY2hlZFZhbHVlIiwicHJlYyIsInRvUHJlY2lzaW9uIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZ2V0U2hlZXRGcm9tQ2VsbCIsInRvTG9jYWxlU3RyaW5nIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwic2xpY2UiLCJGb3JtYXQiLCJhcHBseVRvIiwiY2VsbCIsImMiLCJjZWxscyIsInZhbCIsInRleHRDb250ZW50IiwiciIsImoiLCJyZWxhdGl2ZVRvIiwic3RhcnRzV2l0aCIsImdldFByb3BlcnR5IiwiaGFzUHJvcGVydHkiLCJleHRyYWN0Rm9ybWF0IiwiZjIiLCJ2YWx1ZXMiLCJpdGVtIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImNvbHNwYW4iLCJyb3dzcGFuIiwiQ2FsY0Zvcm11bGEiLCJzdGF0ZXMiLCJjZWxsX2VkaXQiLCJzdGF0ZSIsImN1cnNvciIsImZpcnN0Q2VsbCIsImlzUk8iLCJyYW5nZXNfdG9rZW4iLCJkcm93IiwiZGNvbCIsIm5ld19yYW5nZXMiLCJwb3MiLCJjZWxsUG9zIiwibGFzdEluZGV4T2YiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJuZXdfZm9ybXVsYSIsIm9mZnNldCIsImVuZCIsInBhcnNlX2Zvcm11bGEiLCJyYW5nZXNUb2tlbiIsInJlc2V0Q2FjaGUiLCJleHRyYWN0VG9rZW4iLCJ0b2tlbiIsImhhc0NvbW1hIiwiTm9kZSIsImNoaWxkcmVuIiwiZmN0IiwiZXZhbCIsInRvTnVtYmVyIiwiYSIsIk51bWJlciIsIm9wX2ltcGwiLCJiIiwiTWF0aCIsInBvdyIsIm9wX3ByaW8iLCJvcHMiLCJvcCIsInRva2VubGlzdDJUcmVlIiwidG9rZW5zIiwibmIiLCJyYXciLCJjdXIiLCJwcmlvcml0eSIsImZpbmRJbmRleCIsInVfb3AiLCJvcF90b2tlbiIsImxlZnQiLCJyaWdodCIsImN1clRva2VuIiwibm9kZSIsInJhbmdlcyIsImZpbHRlciIsIlBsYWdlRm9ybXVsYSIsImNvZGUiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJzZWxlY3RlZCIsImdldENlbGxzIiwiY2xlYXIiLCJibHVyIiwiUGxhZ2VTZWxlY3RvciIsInNlbGVjdGVkX2NlbGxzIiwiY29scyIsInRib2R5IiwiY29sX2lkIiwiY2xpZW50WCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJvd3MiLCJyb3dfaWQiLCJjbGllbnRZIiwibWFpbiIsIm9uX21vdXNlX21vdmUiLCJyZXBsYWNlQWxsIiwiZ2V0VmlzaWJsZUNlbGwiLCJyZWYiLCJwb3MycmVmIiwibmJSb3dzIiwibmJDb2xzIiwib25jZSIsImlzQWN0aXZlIiwib25JbnB1dCIsInJyYW5nZSIsImdldFNlbGVjdGlvbiIsImdldFJhbmdlQXQiLCJzdGFydE9mZnNldCIsImNoaWxkIiwibm9kZVR5cGUiLCJURVhUX05PREUiLCJzdGFydENvbnRhaW5lciIsImNyZWF0ZVJhbmdlIiwic2VsIiwic2V0U3RhcnQiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwicGFyc2VJbnB1dCIsInRlc3RfbnVtYmVyIiwiaXNOYU4iLCJwYXJ0cyIsInNwbGl0IiwidGVzdF9kYXRlIiwiZ2V0RnVsbFllYXIiLCJTdGF0ZSIsInByZXZfc3RhdGUiLCJTdGF0ZXMiLCJlbnRyaWVzIiwicyIsInRibF9vZmZzZXQiLCJvZmZzZXRUb3AiLCJzdGFydCIsIm9mZnNldExlZnQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInJvd19kaWZmIiwiY29sX2RpZmYiLCJyb3ciLCJjb2wiLCJyZWNvcHkiLCJjb3B5IiwibGFzdF9yZWNvcHlfdGFyZ2V0IiwibGFzdF9yZWNvcHlfZGlyIiwib25fcmVjb3B5X21vdmUiLCJkX3B4Iiwid2lkdGgiLCJkX3B5IiwiaGVpZ2h0IiwiZF94IiwiZF95Iiwic2lnbiIsImFicyIsInByZXYiLCJkaWZmX3giLCJkaWZmX3kiLCJwb3NfY3VyIiwiY2xhc3NOYW1lIiwiZm9ybXVsYV9iYXIiLCJwbGFnZSIsImZvcm11bGEiLCJybyIsImlzX3JvIiwiZm9jdXMiLCJkX3JvdyIsImRfY29sIiwibmV4dCIsImFsdEtleSIsImRzdCIsImRlZXBDbG9uZSIsImRlbGV0ZUZvcm1hdCIsImRlbGV0ZUNvbnRlbnQiLCJidWJibGVzIiwib25JbnB1dDIiLCJyYW5nZXNfY29sb3JzIiwiY3VyX29mZnNldCIsInJhbmdlX25hbWUiLCJyYW5nZXNfbmFtZXMiLCJrZXlzIiwid2FybiIsInBhcmVudEVsZW1lbnQiLCJyZXNpemUiLCJuYnJvd3MiLCJuYmNvbHMiLCJjb2xfaHRtbCIsImNvbGdyb3VwIiwidGgiLCJyb3dfaHRtbCIsInNldENvbFNpemUiLCJzaXplIiwicmVmMnBvcyIsImh0bWwiLCJ0YWJsZSIsInJlc2l6ZU9icyIsIlJlc2l6ZU9ic2VydmVyIiwiZnJvbSIsInRvIiwiSFRNTFRhYmxlQ2VsbEVsZW1lbnQiLCJiZWdfcm93IiwiYmVnX2NvbCIsImVuZF9yb3ciLCJlbmRfY29sIiwiZW5kX2xpbmVfY29sIiwic2VwIiwic2VhcmNoIiwiY2hhckNvZGVBdCIsImNvbF9zdHIiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNvcnQiLCJtaW4iLCJtYXgiLCJuYl9jb2xzIiwiZmxvb3IiLCJmIiwiaXNGb3JtYXQiLCJyYXdfdmFsIiwidiIsImRpZmYiLCJmb3JtYXRzIiwibmJfZGF0ZXMiLCJpbmRleE9mIiwic2V0Uk8iLCJjbG9uZSIsImNsb25lTm9kZSIsIm1lcmdlIiwiY2VsbGxpc3QiLCJpc19hbGlnbiIsInVubWVyZ2UiLCJyZXRyYWl0IiwiZGVsdGFfaW5kZW50IiwibmV3X2Zvcm1hdCIsImFsaWduX2xlZnQiLCJkZWx0YV9wcmVjIiwiZmN0cyIsImFjdGlvbiIsImVuYWJsZWQiLCJ1bm1lcmdlZCIsIml0ZW1jc3MiLCJDYWxjVG9vbGJhckl0ZW0iLCJjb2xvcl9waWNrZXIiLCJjYW5jZWwiLCJib2R5IiwiY2xpY2siLCJDYWxjVG9vbGJhciIsImV4Y2VwdGlvbiIsImJ0bl9uYW1lIiwiZm9udF9zaXplcyIsImJ0bnMiLCJidG4iLCJmb250X3NpemVzX3NlbGVjdCIsIm9wdGlvbiIsIk9wdGlvbiIsInNuYW1lIiwicGF0aCIsInJvb3RfcGF0aCIsImhvc3RuYW1lIiwicGFnZXMiLCJoZWFkZXIiLCJ0aXRsZXMiLCJodHJlZSIsImxldmVsIiwiaHRyZWVfY3Vyc29yIiwidGl0bGUiLCJzZWFyY2hDdXJIZWFkZXIiLCJwb3NpdGlvbiIsImhpZCIsImdldFRpdGxlUHJlZml4IiwibnVtIiwiYnVpbGRNZW51Iiwibm9kZXMiLCJtZW51IiwidXBkYXRlSGVhZGVyIiwibGFzdCIsInNjcm9sbFRvcCIsInJldmVyc2UiLCJobm9kZSIsImhfaHRtbCIsImxpbmsiLCJlbXB0eSIsIm1ha2VfcGFnZV9ocmVmIiwicGF0aHByZWZpeCIsImRlc2MiLCJocmVmIiwibWFrZV9wYWdlX21lbnUiLCJmaW5kIiwicGFnZSIsImN1cnBhZ2UiLCJtb2R1bGVfaHRtbCIsInR5cGVfaHRtbCIsImRlc2NfdHlwZSIsImRlc2MyX2lkeCIsInNlc3Npb25faHRtbCIsInRlbXBsYXRlIiwic3RyMkRGIl0sInNvdXJjZVJvb3QiOiIifQ==