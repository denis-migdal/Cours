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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host table {\n    border-collapse: collapse;\n    border-top-color: transparent;\n\n    & > tbody {\n        outline: 0px solid transparent;\n    }\n\n    & > tbody > tr:first-child {\n        border-top-color: transparent;\n        \n        & > th {\n            border-top-color: transparent;\n        }\n    }\n}\n\n:host :is(tr,th,td) {\n    border:1px solid #c0c0c0;\n}\n\n:host([showgrid=\"false\"]) td {\n    border-color: transparent;\n}\n\n:host tr {\n    height: 0.45cm;\n    line-height: 0.45cm;\n}\n\n\n:host :is(td, th):not([contenteditable]) {\n    user-select: none;\n}\n/*\n:host td[contenteditable] {\n    user-select: text;\n}*/\n\n:host :is(td, th) {\n    color: black;\n    width: 2.26cm;\n    height: 0.45cm;\n\n    font-size: 10pt;\n\n    box-sizing: border-box;\n    font-family: 'Liberation Sans';\n}\n\n:host tr > th:first-child {\n    width: calc( 2.26cm / 2.5) ;\n}\n\n:host {\n    display: inline-flex;\n    flex-direction: column;\n}\n\n:host div.toolbar {\n    background-color: #cecece;\n    display: flex;\n    gap: 5px;\n    padding: 4px;\n\n    & > *:not(:first-child) {\n        flex: 1 1 0;\n    }\n    & > *:first-child {\n        width: calc( 1.5 * 2.26cm );\n    }\n}\n\n:host th {\n    background-color: #cecece;\n    border-color: #8a8a8a;\n    font-weight: normal;\n\n    &.highlight {\n        background-color: #398ee7;\n        color: white;\n    }\n}\n\n:host(.cell_edit) .cursor {\n    display: none;\n}\n\n:host(.recopy) {\n    cursor: cell;\n}\n\n:host {\n\n    .recopy {\n        cursor: cell;\n        background-color: #398ee7;\n    }\n\n    .cursor {\n        background: none;\n        border: 2px solid #398ee7;\n        pointer-events: none;\n    }\n}\n\n:host .overlay {\n    position: absolute;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:host .hidden {\n    display: none;\n}\n\n:host .selection_highlight {\n    background-color: #398ee7; /*#cde3f9;*/\n    opacity: 0.5;\n    pointer-events: none; /* TODO */\n}\n\n\n:host td {\n\n    --font_size: 10pt;\n    font-size: var(--font_size);\n    line-height: calc( var(--font_size) * 1.2 );\n\n    --indent: 0;\n\n    --border_color: black;\n    --background_color: white;\n    --foreground_color: black;\n    background-color: var(--background_color);\n    color           : var(--foreground_color);\n\n    white-space: pre;\n\n    vertical-align: bottom;\n\n    &:is([data-type=\"number\"],[data-type=\"pourcent\"],[data-type=\"date\"], [data-type=\"boolean\"]) {\n        text-align: right;\n    }\n\n    &[contenteditable] {\n        outline: 0px solid transparent;\n    }\n\n    &.ajuster {\n        word-break: break-all;\n        white-space: normal;\n    }\n\n    /** style **/\n    &.italic {\n        font-style: italic;\n    }\n    &.bold {\n        font-weight: bold;\n    }\n    &.underline {\n        text-decoration: underline;\n    }\n    &.align_left {\n        padding-left: calc( var(--indent) * 10px);\n        text-align: left;\n    }\n    &.align_center {\n        text-align: center;\n    }\n    &.align_right {\n        padding-right: calc( var(--indent) * 10px);\n        text-align: right;\n    }\n    &.valign_top {\n        vertical-align: top;\n    }\n    &.valign_middle {\n        vertical-align: middle;\n    }\n    &.valign_bottom {\n        vertical-align: bottom;\n    }\n    /* https://stackoverflow.com/questions/1241757/applying-borders-to-a-single-table-cell-when-using-border-collapse */\n    &.border_top {\n        border-top: 1px double var(--border_color);\n    }\n    &.border_bottom {\n        border-bottom: 1px double var(--border_color);\n    }\n    &.border_left {\n        border-left: 1px double var(--border_color);\n    }\n    &.border_right {\n        border-right: 1px double var(--border_color);\n    }\n}\n\n:host {\n    position: relative;\n}\n\n:host .range_highlight {\n    background: none;\n    border: 2px solid red;\n\n    border-color: var(--highlight_color);\n}\n\n:host .formula_highlight {\n    color: var(--highlight_color);\n}\n\n:host .highlight_0 {\n    --highlight_color: #fa0c0c;\n}\n\n:host .highlight_1 {\n    --highlight_color: #fa0cfa;\n}\n\n:host .highlight_2 {\n    --highlight_color: #0c840c;\n}\n\n:host .highlight_3 {\n    --highlight_color: #010180;\n}\n\n:host .highlight_4 {\n    --highlight_color: #871717;\n}\n\n:host .highlight_5 {\n    --highlight_color: #871787;\n}\n\n:host .highlight_6 {\n    --highlight_color: #84840c;\n}\n\n:host .highlight_7 {\n    --highlight_color: #0c0cfa;\n}\n\n\n.copy_highlight {\n    border: 1px dashed black;\n    background: none;\n    pointer-events: none;\n}\n\n/* Tomorrow Theme */\n/* http://jmblog.github.com/color-themes-for-google-code-highlightjs */\n/* Original theme - https://github.com/chriskempson/tomorrow-theme */\n\n/* Tomorrow Comment */\n.hljs-comment,\n.hljs-quote {\n\tcolor: #8e908c;\n}\n\n/* Tomorrow Red */\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-regexp,\n.hljs-deletion {\n\tcolor: #c82829;\n}\n\n/* Tomorrow Orange */\n.hljs-number,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-literal,\n.hljs-type,\n.hljs-params,\n.hljs-meta,\n.hljs-link {\n\tcolor: #f5871f;\n}\n\n/* Tomorrow Yellow */\n.hljs-attribute {\n\tcolor: #eab700;\n}\n\n/* Tomorrow Green */\n.hljs-string,\n.hljs-symbol,\n.hljs-bullet,\n.hljs-addition {\n\tcolor: #718c00;\n}\n\n/* Tomorrow Blue */\n.hljs-title,\n.hljs-section {\n\tcolor: #4271ae;\n}\n\n/* Tomorrow Purple */\n.hljs-keyword,\n.hljs-selector-tag {\n\tcolor: #8959a8;\n}\n\n.hljs {\n\tdisplay: block;\n\toverflow-x: auto;\n\tcolor: #4d4d4c;\n\tpadding: 0.5em;\n}\n\n.hljs-emphasis {\n\tfont-style: italic;\n}\n\n.hljs-strong {\n\tfont-weight: bold;\n}");

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
                style.replace(css);
                return style;
            }
            //if( css instanceof Response )
            style.replace(await css.text());
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
        }) + '€';
    //.toFixed(2) + '€';
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
    let test_number = Number(str.replace(',', '.'));
    if (!Number.isNaN(test_number)) return test_number;
    if (str[str.length - 1] === "%") {
        test_number = Number(str.slice(0, -1).replace(',', '.'));
        if (!Number.isNaN(test_number)) return +(test_number / 100).toPrecision(7);
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
                cell.format = _format__WEBPACK_IMPORTED_MODULE_4__.Formats.default;
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
        const resizeObs = new ResizeObserver(()=>{
            this.host.dispatchEvent(new CustomEvent('resize'));
        });
        resizeObs.observe(this.host);
        this.#tbody.setAttribute('tabindex', '0');
        this.resize(nbrows, nbcols);
        table.append(tbody);
        this.content.append(table);
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
                if (!f.hasProperty("format")) this.format(_format__WEBPACK_IMPORTED_MODULE_4__.Formats.pourcent);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7VUNQQTs7Ozs7VUNBQTtVQUNBO1VBQ0E7VUFDQSx1REFBdUQsaUJBQWlCO1VBQ3hFO1VBQ0EsZ0RBQWdELGFBQWE7VUFDN0Q7Ozs7O1VDTkE7Ozs7O1NFQUE7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00xL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTEvaW5kZXgubWQiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvaW5kZXguY3NzIiwid2VicGFjazovL0NvdXJzLy4vbGlicy9MSVNTL2luZGV4LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMS9pbmRleC50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9SYW5nZU92ZXJsYXkudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvZm9ybWF0LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL2Zvcm11bGFfZWRpdG9yLnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL2Zvcm11bGFfcGFyc2VyLnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL3BsYWdlX2VkaXRvci50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9wbGFnZV9zZWxlY3Rvci50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9zaGVldC50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY29udGVudC50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvbWVudS50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvdXRpbHMvc3RyMmh0bWwudHMiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL2FzeW5jIG1vZHVsZSIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicGFnZXMvUjEtMDEvQ00vQ00xL2luZGV4Lmh0bWxcIjsiLCJleHBvcnQgZGVmYXVsdCBcIjpob3N0IHRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICAgICYgPiB0Ym9keSB7XFxuICAgICAgICBvdXRsaW5lOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgJiA+IHRib2R5ID4gdHI6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBcXG4gICAgICAgICYgPiB0aCB7XFxuICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuOmhvc3QgOmlzKHRyLHRoLHRkKSB7XFxuICAgIGJvcmRlcjoxcHggc29saWQgI2MwYzBjMDtcXG59XFxuXFxuOmhvc3QoW3Nob3dncmlkPVxcXCJmYWxzZVxcXCJdKSB0ZCB7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbjpob3N0IHRyIHtcXG4gICAgaGVpZ2h0OiAwLjQ1Y207XFxuICAgIGxpbmUtaGVpZ2h0OiAwLjQ1Y207XFxufVxcblxcblxcbjpob3N0IDppcyh0ZCwgdGgpOm5vdChbY29udGVudGVkaXRhYmxlXSkge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLypcXG46aG9zdCB0ZFtjb250ZW50ZWRpdGFibGVdIHtcXG4gICAgdXNlci1zZWxlY3Q6IHRleHQ7XFxufSovXFxuXFxuOmhvc3QgOmlzKHRkLCB0aCkge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiAyLjI2Y207XFxuICAgIGhlaWdodDogMC40NWNtO1xcblxcbiAgICBmb250LXNpemU6IDEwcHQ7XFxuXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGliZXJhdGlvbiBTYW5zJztcXG59XFxuXFxuOmhvc3QgdHIgPiB0aDpmaXJzdC1jaGlsZCB7XFxuICAgIHdpZHRoOiBjYWxjKCAyLjI2Y20gLyAyLjUpIDtcXG59XFxuXFxuOmhvc3Qge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuOmhvc3QgZGl2LnRvb2xiYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgcGFkZGluZzogNHB4O1xcblxcbiAgICAmID4gKjpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICAgICAgICBmbGV4OiAxIDEgMDtcXG4gICAgfVxcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICB3aWR0aDogY2FsYyggMS41ICogMi4yNmNtICk7XFxuICAgIH1cXG59XFxuXFxuOmhvc3QgdGgge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xcbiAgICBib3JkZXItY29sb3I6ICM4YThhOGE7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuXFxuICAgICYuaGlnaGxpZ2h0IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzOThlZTc7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgIH1cXG59XFxuXFxuOmhvc3QoLmNlbGxfZWRpdCkgLmN1cnNvciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbjpob3N0KC5yZWNvcHkpIHtcXG4gICAgY3Vyc29yOiBjZWxsO1xcbn1cXG5cXG46aG9zdCB7XFxuXFxuICAgIC5yZWNvcHkge1xcbiAgICAgICAgY3Vyc29yOiBjZWxsO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM5OGVlNztcXG4gICAgfVxcblxcbiAgICAuY3Vyc29yIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMzk4ZWU3O1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIH1cXG59XFxuXFxuOmhvc3QgLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpob3N0IC5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG46aG9zdCAuc2VsZWN0aW9uX2hpZ2hsaWdodCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOThlZTc7IC8qI2NkZTNmOTsqL1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBUT0RPICovXFxufVxcblxcblxcbjpob3N0IHRkIHtcXG5cXG4gICAgLS1mb250X3NpemU6IDEwcHQ7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udF9zaXplKTtcXG4gICAgbGluZS1oZWlnaHQ6IGNhbGMoIHZhcigtLWZvbnRfc2l6ZSkgKiAxLjIgKTtcXG5cXG4gICAgLS1pbmRlbnQ6IDA7XFxuXFxuICAgIC0tYm9yZGVyX2NvbG9yOiBibGFjaztcXG4gICAgLS1iYWNrZ3JvdW5kX2NvbG9yOiB3aGl0ZTtcXG4gICAgLS1mb3JlZ3JvdW5kX2NvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZF9jb2xvcik7XFxuICAgIGNvbG9yICAgICAgICAgICA6IHZhcigtLWZvcmVncm91bmRfY29sb3IpO1xcblxcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xcblxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcblxcbiAgICAmOmlzKFtkYXRhLXR5cGU9XFxcIm51bWJlclxcXCJdLFtkYXRhLXR5cGU9XFxcInBvdXJjZW50XFxcIl0sW2RhdGEtdHlwZT1cXFwiZGF0ZVxcXCJdLCBbZGF0YS10eXBlPVxcXCJib29sZWFuXFxcIl0pIHtcXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICB9XFxuXFxuICAgICZbY29udGVudGVkaXRhYmxlXSB7XFxuICAgICAgICBvdXRsaW5lOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgJi5hanVzdGVyIHtcXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIH1cXG5cXG4gICAgLyoqIHN0eWxlICoqL1xcbiAgICAmLml0YWxpYyB7XFxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIH1cXG4gICAgJi5ib2xkIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB9XFxuICAgICYudW5kZXJsaW5lIHtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB9XFxuICAgICYuYWxpZ25fbGVmdCB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoIHZhcigtLWluZGVudCkgKiAxMHB4KTtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIH1cXG4gICAgJi5hbGlnbl9jZW50ZXIge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgICYuYWxpZ25fcmlnaHQge1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyggdmFyKC0taW5kZW50KSAqIDEwcHgpO1xcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIH1cXG4gICAgJi52YWxpZ25fdG9wIHtcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIH1cXG4gICAgJi52YWxpZ25fbWlkZGxlIHtcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIH1cXG4gICAgJi52YWxpZ25fYm90dG9tIHtcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICAgIH1cXG4gICAgLyogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTI0MTc1Ny9hcHBseWluZy1ib3JkZXJzLXRvLWEtc2luZ2xlLXRhYmxlLWNlbGwtd2hlbi11c2luZy1ib3JkZXItY29sbGFwc2UgKi9cXG4gICAgJi5ib3JkZXJfdG9wIHtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBkb3VibGUgdmFyKC0tYm9yZGVyX2NvbG9yKTtcXG4gICAgfVxcbiAgICAmLmJvcmRlcl9ib3R0b20ge1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdWJsZSB2YXIoLS1ib3JkZXJfY29sb3IpO1xcbiAgICB9XFxuICAgICYuYm9yZGVyX2xlZnQge1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBkb3VibGUgdmFyKC0tYm9yZGVyX2NvbG9yKTtcXG4gICAgfVxcbiAgICAmLmJvcmRlcl9yaWdodCB7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBkb3VibGUgdmFyKC0tYm9yZGVyX2NvbG9yKTtcXG4gICAgfVxcbn1cXG5cXG46aG9zdCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuOmhvc3QgLnJhbmdlX2hpZ2hsaWdodCB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG5cXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1oaWdobGlnaHRfY29sb3IpO1xcbn1cXG5cXG46aG9zdCAuZm9ybXVsYV9oaWdobGlnaHQge1xcbiAgICBjb2xvcjogdmFyKC0taGlnaGxpZ2h0X2NvbG9yKTtcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF8wIHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICNmYTBjMGM7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfMSB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjZmEwY2ZhO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzIge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzBjODQwYztcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF8zIHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICMwMTAxODA7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfNCB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjODcxNzE3O1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzUge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzg3MTc4NztcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF82IHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICM4NDg0MGM7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfNyB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjMGMwY2ZhO1xcbn1cXG5cXG5cXG4uY29weV9oaWdobGlnaHQge1xcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4vKiBUb21vcnJvdyBUaGVtZSAqL1xcbi8qIGh0dHA6Ly9qbWJsb2cuZ2l0aHViLmNvbS9jb2xvci10aGVtZXMtZm9yLWdvb2dsZS1jb2RlLWhpZ2hsaWdodGpzICovXFxuLyogT3JpZ2luYWwgdGhlbWUgLSBodHRwczovL2dpdGh1Yi5jb20vY2hyaXNrZW1wc29uL3RvbW9ycm93LXRoZW1lICovXFxuXFxuLyogVG9tb3Jyb3cgQ29tbWVudCAqL1xcbi5obGpzLWNvbW1lbnQsXFxuLmhsanMtcXVvdGUge1xcblxcdGNvbG9yOiAjOGU5MDhjO1xcbn1cXG5cXG4vKiBUb21vcnJvdyBSZWQgKi9cXG4uaGxqcy12YXJpYWJsZSxcXG4uaGxqcy10ZW1wbGF0ZS12YXJpYWJsZSxcXG4uaGxqcy10YWcsXFxuLmhsanMtbmFtZSxcXG4uaGxqcy1zZWxlY3Rvci1pZCxcXG4uaGxqcy1zZWxlY3Rvci1jbGFzcyxcXG4uaGxqcy1yZWdleHAsXFxuLmhsanMtZGVsZXRpb24ge1xcblxcdGNvbG9yOiAjYzgyODI5O1xcbn1cXG5cXG4vKiBUb21vcnJvdyBPcmFuZ2UgKi9cXG4uaGxqcy1udW1iZXIsXFxuLmhsanMtYnVpbHRfaW4sXFxuLmhsanMtYnVpbHRpbi1uYW1lLFxcbi5obGpzLWxpdGVyYWwsXFxuLmhsanMtdHlwZSxcXG4uaGxqcy1wYXJhbXMsXFxuLmhsanMtbWV0YSxcXG4uaGxqcy1saW5rIHtcXG5cXHRjb2xvcjogI2Y1ODcxZjtcXG59XFxuXFxuLyogVG9tb3Jyb3cgWWVsbG93ICovXFxuLmhsanMtYXR0cmlidXRlIHtcXG5cXHRjb2xvcjogI2VhYjcwMDtcXG59XFxuXFxuLyogVG9tb3Jyb3cgR3JlZW4gKi9cXG4uaGxqcy1zdHJpbmcsXFxuLmhsanMtc3ltYm9sLFxcbi5obGpzLWJ1bGxldCxcXG4uaGxqcy1hZGRpdGlvbiB7XFxuXFx0Y29sb3I6ICM3MThjMDA7XFxufVxcblxcbi8qIFRvbW9ycm93IEJsdWUgKi9cXG4uaGxqcy10aXRsZSxcXG4uaGxqcy1zZWN0aW9uIHtcXG5cXHRjb2xvcjogIzQyNzFhZTtcXG59XFxuXFxuLyogVG9tb3Jyb3cgUHVycGxlICovXFxuLmhsanMta2V5d29yZCxcXG4uaGxqcy1zZWxlY3Rvci10YWcge1xcblxcdGNvbG9yOiAjODk1OWE4O1xcbn1cXG5cXG4uaGxqcyB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0b3ZlcmZsb3cteDogYXV0bztcXG5cXHRjb2xvcjogIzRkNGQ0YztcXG5cXHRwYWRkaW5nOiAwLjVlbTtcXG59XFxuXFxuLmhsanMtZW1waGFzaXMge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmhsanMtc3Ryb25nIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XCI7IiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBleHBvcnRlZCB0eXBlcyA9PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgdHlwZSBDU1NfUmVzb3VyY2UgPSBzdHJpbmd8UmVzcG9uc2V8SFRNTFN0eWxlRWxlbWVudHxDU1NTdHlsZVNoZWV0O1xuZXhwb3J0IHR5cGUgQ1NTX1NvdXJjZSAgID0gQ1NTX1Jlc291cmNlIHwgUHJvbWlzZTxDU1NfUmVzb3VyY2U+O1xuXG5leHBvcnQgdHlwZSBIVE1MX1Jlc291cmNlID0gc3RyaW5nfFJlc3BvbnNlfEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XG5leHBvcnQgdHlwZSBIVE1MX1NvdXJjZSAgID0gSFRNTF9SZXNvdXJjZSB8IFByb21pc2U8SFRNTF9SZXNvdXJjZT47XG5cbmV4cG9ydCB0eXBlIExJU1NPcHRpb25zPEV4dGVuZHMgICAgZXh0ZW5kcyBDbGFzcyxcblx0XHRcdFx0XHRcdEhvc3QgICAgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHRcdEF0dHJzICAgICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0XHRQYXJhbWV0ZXJzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4gPSB7XG5cblx0ZXh0ZW5kcz86IENvbnN0cnVjdG9yPEV4dGVuZHM+LFxuXHRob3N0ICAgPzogQ29uc3RydWN0b3I8SG9zdD4sXG5cblx0ZGVwZW5kZW5jaWVzPzogcmVhZG9ubHkgUHJvbWlzZTxhbnk+W10sXG5cdGF0dHJpYnV0ZXMgID86IHJlYWRvbmx5IEF0dHJzW10sXG5cdHBhcmFtcyAgICAgID86IFJlYWRvbmx5PFBhcmFtZXRlcnM+LFxuXG5cdGNvbnRlbnQ/OiBIVE1MX1NvdXJjZSxcblx0Y3NzICAgID86ICBDU1NfU291cmNlIHwgcmVhZG9ubHkgQ1NTX1NvdXJjZVtdLFxuXHRzaGFkb3cgPzogIFNoYWRvd0NmZyxcbn07XG5cbmV4cG9ydCBlbnVtIFNoYWRvd0NmZyB7XG5cdE5PTkUgPSAnbm9uZScsXG5cdE9QRU4gPSAnb3BlbicsIFxuXHRDTE9TRT0gJ2Nsb3NlZCdcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgQ2xhc3MgPT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxubGV0IF9fY3N0cl9ob3N0ICA6IGFueSA9IG51bGw7XG5cbnR5cGUgQ29uc3RydWN0b3I8VD4gPSBuZXcgKCkgPT4gVDtcbmludGVyZmFjZSBDbGFzcyB7fVxuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9hdHRhY2hTaGFkb3dcbmNvbnN0IENBTl9IQVZFX1NIQURPVyA9IFtcblx0bnVsbCwgJ2FydGljbGUnLCAnYXNpZGUnLCAnYmxvY2txdW90ZScsICdib2R5JywgJ2RpdicsXG5cdCdmb290ZXInLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnaGVhZGVyJywgJ21haW4nLFxuXHQnbmF2JywgJ3AnLCAnc2VjdGlvbicsICdzcGFuJ1xuXHRcbl07XG5mdW5jdGlvbiBfY2FuSGFzU2hhZG93KHRhZzogdHlwZW9mIEhUTUxFbGVtZW50KSB7XG5cdHJldHVybiBDQU5fSEFWRV9TSEFET1cuaW5jbHVkZXMoIF9lbGVtZW50MnRhZ25hbWUodGFnKSApO1xufVxuXG50eXBlIFJlc291cmNlID0gVVJMfFJlc3BvbnNlO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExJU1M8RXh0ZW5kcyAgICBleHRlbmRzIENsYXNzICAgICAgICAgICAgICA9IENsYXNzLFxuXHRcdFx0XHRcdFx0XHQgSG9zdCAgICAgICBleHRlbmRzIEhUTUxFbGVtZW50ICAgICAgICA9IEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdFx0XHQgQXR0cnMgICAgICBleHRlbmRzIHN0cmluZyAgICAgICAgICAgICA9IG5ldmVyLFxuXHRcdFx0XHRcdFx0XHQgUGFyYW1ldGVycyBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55PiA9IHt9Pih7XG5cdFx0XHRcdFx0XHRcdFx0ZXh0ZW5kcyAgICAgOiBwX2V4dGVuZHMsXG5cdFx0XHRcdFx0XHRcdFx0aG9zdCAgICAgICAgOiBwX2hvc3QsXG5cdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jaWVzOiBwX2RlcHMsXG5cdFx0XHRcdFx0XHRcdCAgICBhdHRyaWJ1dGVzICA6IHBfYXR0cnMsXG5cdFx0XHRcdFx0XHRcdCAgICBwYXJhbXMsXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudCxcblx0XHRcdFx0XHRcdFx0XHRjc3MsXG5cdFx0XHRcdFx0XHRcdFx0c2hhZG93ICAgICAgOiBwX3NoYWRvdyxcblx0XHRcdFx0XHRcdFx0fTogTElTU09wdGlvbnM8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtZXRlcnM+ID0ge30pIHtcblxuXHQvL1RPRE8gbWVyZ2UgcHJvcCBpZiBleHRlbmRzIExJU1MuLi5cblxuXHRjb25zdCBob3N0ICAgICAgICA9IHBfaG9zdCAgICA/PyBIVE1MRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxIb3N0Pjtcblx0Y29uc3QgX2V4dGVuZHMgICAgPSBwX2V4dGVuZHMgPz8gT2JqZWN0ICAgICAgYXMgdW5rbm93biBhcyBDb25zdHJ1Y3RvcjxFeHRlbmRzPjtcblx0Y29uc3QgYXR0cmlidXRlcyAgPSBwX2F0dHJzICAgPz8gW107XG5cdGNvbnN0IGRlcGVuZGVuY2llcz0gcF9kZXBzICAgID8gWy4uLnBfZGVwc10gOiBbXTtcblx0Y29uc3QgY2FuSGFzU2hhZG93PSBfY2FuSGFzU2hhZG93KGhvc3QpO1xuXHRjb25zdCBzaGFkb3cgICAgICA9IHBfc2hhZG93ICA/PyAoY2FuSGFzU2hhZG93ID8gU2hhZG93Q2ZnLkNMT1NFIDogU2hhZG93Q2ZnLk5PTkUpO1xuXG5cdGlmKCAhIGNhbkhhc1NoYWRvdyAmJiBzaGFkb3cgIT09IFNoYWRvd0NmZy5OT05FKVxuXHRcdHRocm93IG5ldyBFcnJvcihgSG9zdCBlbGVtZW50ICR7X2VsZW1lbnQydGFnbmFtZShob3N0KX0gZG9lcyBub3Qgc3VwcG9ydCBTaGFkb3dSb290YCk7XG5cblx0Ly8gQ09OVEVOVCBwcm9jZXNzaW5nXG5cdGlmKCBjb250ZW50ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRkZXBlbmRlbmNpZXMucHVzaCggKCBhc3luYyAoKSA9PiB7XG5cblx0XHRcdGNvbnRlbnQgPSBhd2FpdCBjb250ZW50O1xuXG5cdFx0XHRpZihjb250ZW50IGluc3RhbmNlb2YgSFRNTFRlbXBsYXRlRWxlbWVudClcblx0XHRcdGNvbnRlbnQgPSBjb250ZW50LmlubmVySFRNTDtcblxuXHRcdFx0aWYoIHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB7XG5cblx0XHRcdFx0Y29udGVudCA9IGNvbnRlbnQudHJpbSgpOyAvLyBOZXZlciByZXR1cm4gYSB0ZXh0IG5vZGUgb2Ygd2hpdGVzcGFjZSBhcyB0aGUgcmVzdWx0XG5cdFx0XHRcdGlmKGNvbnRlbnQgPT09ICcnKVxuXHRcdFx0XHRcdGNvbnRlbnQgPSB1bmRlZmluZWQ7XG5cblx0XHRcdH1cblx0XHRcdGlmKCBjb250ZW50IGluc3RhbmNlb2YgUmVzcG9uc2UgKVxuXHRcdFx0XHRjb250ZW50ID0gYXdhaXQgY29udGVudC50ZXh0KCk7XG5cblx0XHRcdHJldHVybiBMSVNTQmFzZS5QYXJhbWV0ZXJzLmNvbnRlbnQgPSBjb250ZW50O1xuXHRcdH0pKCkgKTtcblx0fVxuXG5cdC8vIENTUyBwcm9jZXNzaW5nXG5cdGxldCBzdHlsZXNoZWV0czogcmVhZG9ubHkgQ1NTU3R5bGVTaGVldFtdID0gW107XG5cdGlmKCBjc3MgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdGlmKCAhIEFycmF5LmlzQXJyYXkoY3NzKSApXG5cdFx0XHRjc3MgPSBbY3NzIGFzIENTU19Tb3VyY2VdO1xuXG5cdFx0c3R5bGVzaGVldHMgPSBuZXcgQXJyYXk8Q1NTU3R5bGVTaGVldD4oY3NzLmxlbmd0aCk7XG5cblx0XHRjb25zdCBmZXRjaF9jc3MgPSAoYXN5bmMgKGNzczogQ1NTX1NvdXJjZSkgPT4ge1xuXHRcdFx0Y3NzID0gYXdhaXQgY3NzO1xuXHRcdFx0aWYoY3NzIGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldClcblx0XHRcdFx0cmV0dXJuIGNzcztcblx0XHRcdGlmKCBjc3MgaW5zdGFuY2VvZiBIVE1MU3R5bGVFbGVtZW50KVxuXHRcdFx0XHRyZXR1cm4gY3NzLnNoZWV0ITtcblxuXHRcdFx0bGV0IHN0eWxlID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcblx0XHRcdGlmKCB0eXBlb2YgY3NzID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0XHRzdHlsZS5yZXBsYWNlKGNzcyk7XG5cdFx0XHRcdHJldHVybiBzdHlsZTtcblx0XHRcdH1cblxuXHRcdFx0Ly9pZiggY3NzIGluc3RhbmNlb2YgUmVzcG9uc2UgKVxuXHRcdFx0c3R5bGUucmVwbGFjZShhd2FpdCBjc3MudGV4dCgpKTtcblx0XHRcdHJldHVybiBzdHlsZTtcblx0XHR9KTtcblxuXHRcdGRlcGVuZGVuY2llcy5wdXNoKCAuLi5jc3MubWFwKCBhc3luYyAoY3NzLCBpZHgpID0+ICAoc3R5bGVzaGVldHMgYXMgYW55KVtpZHhdID0gYXdhaXQgZmV0Y2hfY3NzKGNzcykgKSApO1xuXHR9XG5cblx0dHlwZSBMSG9zdCA9IExJU1NIb3N0PExJU1NCYXNlPjtcblxuXHQvLyBAdHMtaWdub3JlXG5cdGNsYXNzIExJU1NCYXNlIGV4dGVuZHMgX2V4dGVuZHMge1xuXG5cdFx0cmVhZG9ubHkgI2hvc3Q6IGFueTsgLy8gcHJldmVudHMgaXNzdWUgIzEuLi5cblxuXHRcdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0XHRzdXBlcigpO1xuXG5cdFx0XHQvLyBoNGNrLCBva2F5IGJlY2F1c2UgSlMgaXMgbW9ub3RocmVhZGVkLlxuXHRcdFx0aWYoIF9fY3N0cl9ob3N0ID09PSBudWxsIClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGRvIG5vdCBkaXJlY3RseSBjYWxsIHRoaXMgY29uc3RydWN0b3JcIik7XG5cdFx0XHR0aGlzLiNob3N0ID0gX19jc3RyX2hvc3Q7XG5cdFx0XHRfX2NzdHJfaG9zdCA9IG51bGw7XG5cdFx0fVxuXG5cdFx0cHVibGljIGdldCBob3N0KCk6IEhvc3Qge1xuXHRcdFx0cmV0dXJuIHRoaXMuI2hvc3Q7XG5cdFx0fVxuXHRcdHByb3RlY3RlZCBnZXQgYXR0cnMoKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuI2hvc3QgYXMgTEhvc3QpLmF0dHJzO1xuXHRcdH1cblx0XHRwcm90ZWN0ZWQgc2V0QXR0ckRlZmF1bHQoIGF0dHI6IEF0dHJzLCB2YWx1ZTogc3RyaW5nfG51bGwpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkuc2V0QXR0ckRlZmF1bHQoYXR0ciwgdmFsdWUpO1xuXG5cdFx0fVxuXHRcdHByb3RlY3RlZCBnZXQgcGFyYW1zKCkge1xuXHRcdFx0cmV0dXJuICh0aGlzLiNob3N0IGFzIExIb3N0KS5wYXJhbXM7XG5cdFx0fVxuXHRcdHByb3RlY3RlZCBnZXQgY29udGVudCgpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkuY29udGVudCE7XG5cdFx0fVxuXG5cdFx0c3RhdGljIHJlYWRvbmx5IFBhcmFtZXRlcnMgPSB7XG5cdFx0XHRob3N0LFxuXHRcdFx0ZGVwZW5kZW5jaWVzLFxuXHRcdFx0YXR0cmlidXRlcyxcblx0XHRcdHBhcmFtcyxcblx0XHRcdGNvbnRlbnQsXG5cdFx0XHRzdHlsZXNoZWV0cyxcblx0XHRcdHNoYWRvdyxcblx0XHR9O1xuXG5cdFx0cHJvdGVjdGVkIG9uQXR0ckNoYW5nZWQoX25hbWU6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0XHRfb2xkVmFsdWU6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0XHRfbmV3VmFsdWU6IHN0cmluZyk6IHZvaWR8ZmFsc2Uge31cblxuXHRcdHByb3RlY3RlZCBnZXQgaXNJbkRPTSgpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkuaXNJbkRPTTtcblx0XHR9XG5cdFx0cHJvdGVjdGVkIG9uRE9NQ29ubmVjdGVkKCkge31cblx0XHRwcm90ZWN0ZWQgb25ET01EaXNjb25uZWN0ZWQoKSB7fVxuXHR9XG5cblx0cmV0dXJuIExJU1NCYXNlO1xufVxuXG4vL1RPRE86IG90aGVyIG9wdGlvbnMuLi5cbmZ1bmN0aW9uIGV4dGVuZHNMSVNTPEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0SG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRBdHRyczEgICBleHRlbmRzIHN0cmluZyxcblx0QXR0cnMyICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4sXG5cdFQgZXh0ZW5kcyBMSVNTUmV0dXJuVHlwZTxFeHRlbmRzLCBIb3N0LCBBdHRyczEsIFBhcmFtcz4+KExpc3M6IFQsIHBhcmFtZXRlcnM6IHthdHRyaWJ1dGVzOiByZWFkb25seSBBdHRyczJbXX0pIHtcblxuXHQvLyBUT0RPOiBvdGhlciBvcHRpb25zLi4uXG5cdGNvbnN0IGF0dHJzID0gWy4uLkxpc3MuUGFyYW1ldGVycy5hdHRyaWJ1dGVzLCAuLi5wYXJhbWV0ZXJzLmF0dHJpYnV0ZXMhXTtcblx0Y29uc3QgcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgTGlzcy5QYXJhbWV0ZXJzLCB7YXR0cmlidXRlczogYXR0cnN9KTtcblxuXHQvLyBAdHMtaWdub3JlIDogYmVjYXVzZSBUUyBzdHVwaWRcblx0Y2xhc3MgRXh0ZW5kZWRMSVNTIGV4dGVuZHMgTGlzcyB7XG5cdFx0Y29uc3RydWN0b3IoLi4udDogYW55W10pIHtcblx0XHRcdC8vIEB0cy1pZ25vcmUgOiBiZWNhdXNlIFRTIHN0dXBpZFxuXHRcdFx0c3VwZXIoLi4udCk7XG5cdFx0fVxuXG5cdFx0cHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhdHRycygpIHtcblx0XHRcdHJldHVybiBzdXBlci5hdHRycyBhcyBSZWNvcmQ8QXR0cnMyfEF0dHJzMSwgc3RyaW5nfG51bGw+O1xuXHRcdH1cblxuXHRcdHN0YXRpYyBvdmVycmlkZSBQYXJhbWV0ZXJzID0gcGFyYW1zO1xuXHR9XG5cblx0cmV0dXJuIEV4dGVuZGVkTElTUztcbn1cbkxJU1MuZXh0ZW5kc0xJU1MgPSBleHRlbmRzTElTUztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyB0eXBlIGhlbHBlcnMgPT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIGJ1aWxkTElTU0hvc3RSZXR1cm5UeXBlPFQ+ICA9IFQgZXh0ZW5kcyBMSVNTUmV0dXJuVHlwZTxpbmZlciBFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbmZlciBIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbmZlciBBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5mZXIgUGFyYW1zICBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gUmV0dXJuVHlwZTx0eXBlb2YgYnVpbGRMSVNTSG9zdDxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zLCBUPj4gOiBuZXZlcjtcblxuZXhwb3J0IHR5cGUgTElTU1JldHVyblR5cGU8XG5cdEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0SG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+PiA9IFJldHVyblR5cGU8dHlwZW9mIExJU1M8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcz4+O1xuZXhwb3J0IHR5cGUgTElTU0Jhc2U8RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdCBIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0IEF0dHJzICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0IFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4+ID0gSW5zdGFuY2VUeXBlPExJU1NSZXR1cm5UeXBlPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXM+PjtcbmV4cG9ydCB0eXBlIExJU1NIb3N0PExJU1MgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+ID4gPSBJbnN0YW5jZVR5cGU8YnVpbGRMSVNTSG9zdFJldHVyblR5cGU8Q29uc3RydWN0b3I8TElTUz4gJiB7UGFyYW1ldGVyczogYW55fT4+O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTSG9zdCBjbGFzcyA9PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmxldCBpZCA9IDA7XG5cbmZ1bmN0aW9uIGJ1aWxkTElTU0hvc3Q8RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdCAgIEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHQgICBBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdCAgIFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4sXG5cdFx0XHRcdFx0ICAgVCBleHRlbmRzIExJU1NSZXR1cm5UeXBlPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXM+PihMaXNzOiBULCBfcGFyYW1zOiBQYXJ0aWFsPFBhcmFtcz4gPSB7fSkge1xuXHRjb25zdCB7XG5cdFx0aG9zdCxcblx0XHRhdHRyaWJ1dGVzLFxuXHRcdGNvbnRlbnQsXG5cdFx0c3R5bGVzaGVldHMsXG5cdFx0c2hhZG93LFxuXHR9ID0gTGlzcy5QYXJhbWV0ZXJzO1xuXG5cdGNvbnN0IGFscmVhZHlEZWNsYXJlZENTUyA9IG5ldyBTZXQoKTtcblxuXHRjb25zdCBHRVQgPSBTeW1ib2woJ2dldCcpO1xuXHRjb25zdCBTRVQgPSBTeW1ib2woJ3NldCcpO1xuXG5cdGNvbnN0IHByb3BlcnRpZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoIGF0dHJpYnV0ZXMubWFwKG4gPT4gW24sIHtcblxuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbigpOiBzdHJpbmd8bnVsbCAgICAgIHsgcmV0dXJuICh0aGlzIGFzIHVua25vd24gYXMgQXR0cmlidXRlcylbR0VUXShuKTsgfSxcblx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlOiBzdHJpbmd8bnVsbCkgeyByZXR1cm4gKHRoaXMgYXMgdW5rbm93biBhcyBBdHRyaWJ1dGVzKVtTRVRdKG4sIHZhbHVlKTsgfVxuXHR9XSkgKTtcblxuXHRjbGFzcyBBdHRyaWJ1dGVzIHtcbiAgICAgICAgW3g6IHN0cmluZ106IHN0cmluZ3xudWxsO1xuXG4gICAgICAgICNkYXRhICAgICA6IFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuICAgICAgICAjZGVmYXVsdHMgOiBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPjtcbiAgICAgICAgI3NldHRlciAgIDogKG5hbWU6IEF0dHJzLCB2YWx1ZTogc3RyaW5nfG51bGwpID0+IHZvaWQ7XG5cbiAgICAgICAgW0dFVF0obmFtZTogQXR0cnMpIHtcbiAgICAgICAgXHRyZXR1cm4gdGhpcy4jZGF0YVtuYW1lXSA/PyB0aGlzLiNkZWZhdWx0c1tuYW1lXSA/PyBudWxsO1xuICAgICAgICB9O1xuICAgICAgICBbU0VUXShuYW1lOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKXtcbiAgICAgICAgXHRyZXR1cm4gdGhpcy4jc2V0dGVyKG5hbWUsIHZhbHVlKTsgLy8gcmVxdWlyZWQgdG8gZ2V0IGEgY2xlYW4gb2JqZWN0IHdoZW4gZG9pbmcgey4uLmF0dHJzfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YSAgICA6IFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+LFxuXHRcdFx0XHRcdGRlZmF1bHRzOiBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPixcbiAgICAgICAgXHRcdFx0c2V0dGVyICA6IChuYW1lOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKSA9PiB2b2lkKSB7XG5cbiAgICAgICAgXHR0aGlzLiNkYXRhICAgICA9IGRhdGE7XG5cdFx0XHR0aGlzLiNkZWZhdWx0cyA9IGRlZmF1bHRzO1xuICAgICAgICBcdHRoaXMuI3NldHRlciA9IHNldHRlcjtcblxuICAgICAgICBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHByb3BlcnRpZXMpO1xuICAgICAgICB9XG5cdH1cblxuXHQvLyBAdHMtaWdub3JlIDogYmVjYXVzZSBUUyBpcyBzdHVwaWQuXG5cdGNsYXNzIExJU1NIb3N0QmFzZSBleHRlbmRzIGhvc3Qge1xuXG5cdFx0cmVhZG9ubHkgI3BhcmFtczogUGFyYW1zO1xuXG5cdFx0cmVhZG9ubHkgI2lkID0gKytpZDsgLy8gZm9yIGRlYnVnXG5cblx0XHRjb25zdHJ1Y3RvcihwYXJhbXM6IFBhcnRpYWw8UGFyYW1zPiA9IHt9KSB7XG5cdFx0XHRzdXBlcigpO1xuXHRcdFx0dGhpcy4jcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgTGlzcy5QYXJhbWV0ZXJzLnBhcmFtcywgX3BhcmFtcywgcGFyYW1zKTtcblxuXHRcdFx0dGhpcy4jd2FpdEluaXQgPSBuZXcgUHJvbWlzZSggKHJlc29sdmUpID0+IHtcblx0XHRcdFx0aWYodGhpcy5pc0luaXQpXG5cdFx0XHRcdFx0cmV0dXJuIHJlc29sdmUodGhpcy4jQVBJISk7XG5cdFx0XHRcdHRoaXMuI3Jlc29sdmUgPSByZXNvbHZlO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqKiogcHVibGljIEFQSSAqKioqKioqKioqKioqL1xuXG5cdFx0Z2V0IGlzSW5pdCgpIHtcblx0XHRcdHJldHVybiB0aGlzLiNBUEkgIT09IG51bGw7XG5cdFx0fVxuXHRcdGluaXRpYWxpemUocGFyYW1zOiBQYXJ0aWFsPFBhcmFtcz4gPSB7fSkge1xuXG5cdFx0XHRpZiggdGhpcy5pc0luaXQgKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0VsZW1lbnQgYWxyZWFkeSBpbml0aWFsaXplZCEnKTtcblxuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLiNwYXJhbXMsIHBhcmFtcyk7XG5cblx0XHRcdGNvbnN0IGFwaSA9IHRoaXMuaW5pdCgpO1xuXG5cdFx0XHRpZiggdGhpcy4jaXNJbkRPTSApXG5cdFx0XHRcdChhcGkgYXMgYW55KS5vbkRPTUNvbm5lY3RlZCgpO1xuXG5cdFx0XHRyZXR1cm4gYXBpO1xuXHRcdH1cblxuXHRcdGdldCBMSVNTU3luYygpIHtcblx0XHRcdGlmKCAhIHRoaXMuaXNJbml0IClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdBY2Nlc3NpbmcgQVBJIGJlZm9yZSBXZWJDb21wb25lbnQgaW5pdGlhbGl6YXRpb24hJyk7XG5cdFx0XHRyZXR1cm4gdGhpcy4jQVBJITtcblx0XHR9XG5cdFx0Z2V0IExJU1MoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4jd2FpdEluaXQ7XG5cdFx0fVxuXG5cdFx0LyoqKiBpbml0ICoqKi9cblx0XHQjd2FpdEluaXQ6IFByb21pc2U8SW5zdGFuY2VUeXBlPFQ+Pjtcblx0XHQjcmVzb2x2ZTogKCh1OiBJbnN0YW5jZVR5cGU8VD4pID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG5cdFx0I0FQSTogSW5zdGFuY2VUeXBlPFQ+IHwgbnVsbCA9IG51bGw7XG5cblx0XHQjaXNJbkRPTSA9IGZhbHNlO1xuXHRcdGdldCBpc0luRE9NKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuI2lzSW5ET007XG5cdFx0fVxuXG5cdFx0ZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0XHR0aGlzLiNpc0luRE9NID0gZmFsc2U7XG5cdFx0XHQodGhpcy4jQVBJISBhcyBhbnkpLm9uRE9NRGlzY29ubmVjdGVkKCk7XG5cdFx0fVxuXG5cdFx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cblx0XHRcdHRoaXMuI2lzSW5ET00gPSB0cnVlO1xuXHRcblx0XHRcdGlmKCAhIHRoaXMuaXNJbml0ICkge1xuXHRcdFx0XHR0aGlzLmluaXQoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQodGhpcy4jQVBJISBhcyBhbnkpLm9uRE9NQ29ubmVjdGVkKCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBpbml0KCkge1xuXHRcdFx0XG5cdFx0XHRjdXN0b21FbGVtZW50cy51cGdyYWRlKHRoaXMpO1xuXHRcdFx0XG5cdFx0XHQvLyBzaGFkb3dcblx0XHRcdHRoaXMuI2NvbnRlbnQgPSB0aGlzIGFzIHVua25vd24gYXMgSG9zdDtcblx0XHRcdGlmKCBzaGFkb3cgIT09ICdub25lJykge1xuXHRcdFx0XHR0aGlzLiNjb250ZW50ID0gdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6IHNoYWRvd30pO1xuXG5cdFx0XHRcdC8vQHRzLWlnbm9yZVxuXHRcdFx0XHR0aGlzLiNjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGlja0V2ZW50KTtcblx0XHRcdFx0Ly9AdHMtaWdub3JlXG5cdFx0XHRcdHRoaXMuI2NvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBvbkNsaWNrRXZlbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBhdHRyc1xuXHRcdFx0Zm9yKGxldCBvYnMgb2YgYXR0cmlidXRlcyEpXG5cdFx0XHRcdHRoaXMuI2F0dHJpYnV0ZXNbb2JzXSA9IHRoaXMuZ2V0QXR0cmlidXRlKG9icyk7XG5cblx0XHRcdC8vIGNzc1xuXHRcdFx0aWYoIHNoYWRvdyAhPT0gJ25vbmUnKVxuXHRcdFx0XHQodGhpcy4jY29udGVudCBhcyBTaGFkb3dSb290KS5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChzaGFyZWRDU1MpO1xuXHRcdFx0aWYoIHN0eWxlc2hlZXRzLmxlbmd0aCApIHtcblxuXHRcdFx0XHRpZiggc2hhZG93ICE9PSAnbm9uZScpXG5cdFx0XHRcdFx0KHRoaXMuI2NvbnRlbnQgYXMgU2hhZG93Um9vdCkuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goLi4uc3R5bGVzaGVldHMpO1xuXHRcdFx0XHRlbHNlIHtcblxuXHRcdFx0XHRcdGNvbnN0IGNzc3NlbGVjdG9yID0gdGhpcy5DU1NTZWxlY3RvcjtcblxuXHRcdFx0XHRcdC8vIGlmIG5vdCB5ZXQgaW5zZXJ0ZWQgOlxuXHRcdFx0XHRcdGlmKCAhIGFscmVhZHlEZWNsYXJlZENTUy5oYXMoY3Nzc2VsZWN0b3IpICkge1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRsZXQgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG5cdFx0XHRcdFx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNzc3NlbGVjdG9yKTtcblxuXHRcdFx0XHRcdFx0bGV0IGh0bWxfc3R5bGVzaGVldHMgPSBcIlwiO1xuXG5cdFx0XHRcdFx0XHRmb3IobGV0IHN0eWxlIG9mIHN0eWxlc2hlZXRzKVxuXHRcdFx0XHRcdFx0XHRmb3IobGV0IHJ1bGUgb2Ygc3R5bGUuY3NzUnVsZXMpXG5cdFx0XHRcdFx0XHRcdFx0aHRtbF9zdHlsZXNoZWV0cyArPSBydWxlLmNzc1RleHQgKyAnXFxuJztcblxuXHRcdFx0XHRcdFx0c3R5bGUuaW5uZXJIVE1MID0gaHRtbF9zdHlsZXNoZWV0cy5yZXBsYWNlKCc6aG9zdCcsIGA6aXMoJHtjc3NzZWxlY3Rvcn0pYCk7XG5cblx0XHRcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kKHN0eWxlKTtcblxuXHRcdFx0XHRcdFx0YWxyZWFkeURlY2xhcmVkQ1NTLmFkZChjc3NzZWxlY3Rvcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNvbnRlbnRcblx0XHRcdGlmKCBjb250ZW50ICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdGxldCB0ZW1wbGF0ZV9lbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblx0XHRcdFx0bGV0IHN0ciA9IChjb250ZW50IGFzIHN0cmluZykucmVwbGFjZSgvXFwkXFx7KC4rPylcXH0vZywgKF8sIG1hdGNoKSA9PiB0aGlzLmdldEF0dHJpYnV0ZShtYXRjaCk/PycnKVxuXHQgICAgXHRcdHRlbXBsYXRlX2VsZW0uaW5uZXJIVE1MID0gc3RyO1xuXHQgICAgXHRcdHRoaXMuI2NvbnRlbnQuYXBwZW5kKC4uLnRlbXBsYXRlX2VsZW0uY29udGVudC5jaGlsZE5vZGVzKTtcblx0ICAgIFx0fVxuXG5cdCAgICBcdC8vIGJ1aWxkXG5cblx0ICAgIFx0Ly8gaDRjaywgb2theSBiZWNhdXNlIEpTIGlzIG1vbm90aHJlYWRlZC5cblx0XHRcdF9fY3N0cl9ob3N0ICAgPSB0aGlzO1xuXG5cdCAgICBcdGxldCBvYmogPSBuZXcgTGlzcygpO1xuXG5cdCAgICBcdC8qaWYoIG9iaiBpbnN0YW5jZW9mIFByb21pc2UpXG5cdCAgICBcdFx0b2JqID0gYXdhaXQgb2JqOyovXG5cblx0XHRcdHRoaXMuI0FQSSA9IG9iaiBhcyBJbnN0YW5jZVR5cGU8VD47XG5cblx0XHRcdC8vIGRlZmF1bHQgc2xvdFxuXHRcdFx0aWYoIHRoaXMuaGFzU2hhZG93ICYmIHRoaXMuI2NvbnRlbnQuY2hpbGROb2Rlcy5sZW5ndGggPT09IDAgKVxuXHRcdFx0XHR0aGlzLiNjb250ZW50LmFwcGVuZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2xvdCcpICk7XG5cblx0XHRcdGlmKCB0aGlzLiNyZXNvbHZlICE9PSBudWxsKVxuXHRcdFx0XHR0aGlzLiNyZXNvbHZlKHRoaXMuI0FQSSk7XG5cblx0XHRcdHJldHVybiB0aGlzLiNBUEk7XG5cdFx0fVxuXG5cdFx0Z2V0IHBhcmFtcygpOiBQYXJhbXMge1xuXHRcdFx0cmV0dXJuIHRoaXMuI3BhcmFtcztcblx0XHR9XG5cblxuXHRcdC8qKiogY29udGVudCAqKiovXG5cdFx0I2NvbnRlbnQ6IEhvc3R8U2hhZG93Um9vdHxudWxsID0gbnVsbDtcblxuXHRcdGdldCBjb250ZW50KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuI2NvbnRlbnQ7XG5cdFx0fVxuXG5cdFx0Z2V0UGFydChuYW1lOiBzdHJpbmcpIHtcblx0XHRcdHJldHVybiB0aGlzLmhhc1NoYWRvd1xuXHRcdFx0XHRcdD8gdGhpcy4jY29udGVudD8ucXVlcnlTZWxlY3RvcihgOjpwYXJ0KCR7bmFtZX0pYClcblx0XHRcdFx0XHQ6IHRoaXMuI2NvbnRlbnQ/LnF1ZXJ5U2VsZWN0b3IoYFtwYXJ0PVwiJHtuYW1lfVwiXWApO1xuXHRcdH1cblx0XHRnZXRQYXJ0cyhuYW1lOiBzdHJpbmcpIHtcblx0XHRcdHJldHVybiB0aGlzLmhhc1NoYWRvd1xuXHRcdFx0XHRcdD8gdGhpcy4jY29udGVudD8ucXVlcnlTZWxlY3RvckFsbChgOjpwYXJ0KCR7bmFtZX0pYClcblx0XHRcdFx0XHQ6IHRoaXMuI2NvbnRlbnQ/LnF1ZXJ5U2VsZWN0b3JBbGwoYFtwYXJ0PVwiJHtuYW1lfVwiXWApO1xuXHRcdH1cblxuXHRcdHByb3RlY3RlZCBnZXQgaGFzU2hhZG93KCk6IGJvb2xlYW4ge1xuXHRcdFx0cmV0dXJuIHNoYWRvdyAhPT0gJ25vbmUnO1xuXHRcdH1cblxuXHRcdC8qKiogQ1NTICoqKi9cblxuXHRcdGdldCBDU1NTZWxlY3RvcigpIHtcblx0XHRcdHJldHVybiB0aGlzLmhhc1NoYWRvd1xuXHRcdFx0XHRcdD8gdGhpcy50YWdOYW1lXG5cdFx0XHRcdFx0OiBgJHt0aGlzLnRhZ05hbWV9W2lzPVwiJHt0aGlzLmdldEF0dHJpYnV0ZShcImlzXCIpfVwiXWA7XG5cdFx0fVxuXG5cdFx0LyoqKiBhdHRycyAqKiovXG5cdFx0I2F0dHJzX2ZsYWcgPSBmYWxzZTtcblxuXHRcdCNhdHRyaWJ1dGVzICAgICAgICAgPSB7fSBhcyBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPjtcblx0XHQjYXR0cmlidXRlc0RlZmF1bHRzID0ge30gYXMgUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD47XG5cdFx0I2F0dHJzID0gbmV3IEF0dHJpYnV0ZXMoXG5cdFx0XHR0aGlzLiNhdHRyaWJ1dGVzLFxuXHRcdFx0dGhpcy4jYXR0cmlidXRlc0RlZmF1bHRzLFxuXHRcdFx0KG5hbWU6IEF0dHJzLCB2YWx1ZTpzdHJpbmd8bnVsbCkgPT4ge1xuXG5cdFx0XHRcdHRoaXMuI2F0dHJpYnV0ZXNbbmFtZV0gPSB2YWx1ZTtcblxuXHRcdFx0XHR0aGlzLiNhdHRyc19mbGFnID0gdHJ1ZTsgLy8gZG8gbm90IHRyaWdnZXIgb25BdHRyc0NoYW5nZWQuXG5cdFx0XHRcdGlmKCB2YWx1ZSA9PT0gbnVsbClcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0XHRcdH1cblx0XHQpIGFzIHVua25vd24gYXMgUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD47XG5cblx0XHRzZXRBdHRyRGVmYXVsdChuYW1lOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKSB7XG5cdFx0XHRpZiggdmFsdWUgPT09IG51bGwpXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLiNhdHRyaWJ1dGVzRGVmYXVsdHNbbmFtZV07XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHRoaXMuI2F0dHJpYnV0ZXNEZWZhdWx0c1tuYW1lXSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdGdldCBhdHRycygpOiBSZWFkb25seTxSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPj4ge1xuXG5cdFx0XHRyZXR1cm4gdGhpcy4jYXR0cnM7XG5cdFx0fVxuXG5cdFx0c3RhdGljIG9ic2VydmVkQXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG5cdFx0YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUgICAgOiBBdHRycyxcblx0XHRcdFx0XHRcdFx0XHQgb2xkVmFsdWU6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0XHQgbmV3VmFsdWU6IHN0cmluZykge1xuXG5cdFx0XHRpZih0aGlzLiNhdHRyc19mbGFnKSB7XG5cdFx0XHRcdHRoaXMuI2F0dHJzX2ZsYWcgPSBmYWxzZTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLiNhdHRyaWJ1dGVzW25hbWVdID0gbmV3VmFsdWU7XG5cdFx0XHRpZiggISB0aGlzLmlzSW5pdCApXG5cdFx0XHRcdHJldHVybjtcblxuXHRcdFx0aWYoICh0aGlzLiNBUEkhIGFzIGFueSkub25BdHRyQ2hhbmdlZChuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpID09PSBmYWxzZSkge1xuXHRcdFx0XHR0aGlzLiNhdHRyc1tuYW1lXSA9IG9sZFZhbHVlOyAvLyByZXZlcnQgdGhlIGNoYW5nZS5cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIExJU1NIb3N0QmFzZTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBkZWZpbmUgPT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBfRE9NQ29udGVudExvYWRlZCA9IG5ldyBQcm9taXNlPHZvaWQ+KCAocmVzb2x2ZSkgPT4ge1xuXG5cdGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiaW50ZXJhY3RpdmVcIiB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpXG5cdFx0cmV0dXJuIHJlc29sdmUoKTtcblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXHRcdHJlc29sdmUoKTtcblx0fSwgdHJ1ZSk7XG59KTtcblxuTElTUy5kZWZpbmUgPSBhc3luYyBmdW5jdGlvbjxFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdFx0XHRcdFx0XHRcdCBIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0XHQgICAgIEF0dHJzICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0XHQgICAgIFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4sXG5cdFx0XHRcdFx0XHQgICBcdCBUIGV4dGVuZHMgTElTU1JldHVyblR5cGU8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcz4+KFxuXHRcdFx0XHRcdFx0ICAgXHR0YWduYW1lOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdENvbXBvbmVudENsYXNzOiBULFxuXHRcdFx0XHRcdFx0XHR7ZGVwZW5kZW5jaWVzLCBwYXJhbXN9OiB7cGFyYW1zPzogUGFydGlhbDxQYXJhbXM+LCBkZXBlbmRlbmNpZXM/OiByZWFkb25seSBQcm9taXNlPHN0cmluZz5bXX0gPSB7fSkge1xuXG5cdGRlcGVuZGVuY2llcz8/PVtdO1xuXHRwYXJhbXMgICAgICA/Pz0ge307XG5cblx0Y29uc3QgQ2xhc3MgPSBDb21wb25lbnRDbGFzcy5QYXJhbWV0ZXJzLmhvc3Q7XG5cdGxldCBMSVNTQmFzZTogYW55ID0gQ29tcG9uZW50Q2xhc3M7XG5cdGxldCBodG1sdGFnID0gX2VsZW1lbnQydGFnbmFtZShDbGFzcyk/P3VuZGVmaW5lZDtcblxuXHRhd2FpdCBQcm9taXNlLmFsbChbX0RPTUNvbnRlbnRMb2FkZWQsIC4uLmRlcGVuZGVuY2llcywgLi4uTElTU0Jhc2UuUGFyYW1ldGVycy5kZXBlbmRlbmNpZXNdKTtcblxuXHRjb25zdCBMSVNTY2xhc3MgPSBidWlsZExJU1NIb3N0PEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXMsIFQ+KENvbXBvbmVudENsYXNzLCBwYXJhbXMpO1xuXHRcblx0Y29uc3Qgb3B0cyA9IGh0bWx0YWcgPT09IHVuZGVmaW5lZCA/IHt9XG5cdFx0XHRcdFx0XHRcdFx0XHQgICA6IHtleHRlbmRzOiBodG1sdGFnfTtcblx0XG5cdGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWduYW1lLCBMSVNTY2xhc3MsIG9wdHMpO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBTaGFkb3dSb290IHRvb2xzID09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBzaGFyZWRDU1MgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc2hhcmVkQ1NTKTtcblxuTElTUy5pbnNlcnRHbG9iYWxDU1NSdWxlcyA9IGZ1bmN0aW9uKGNzczogc3RyaW5nfEhUTUxTdHlsZUVsZW1lbnQpIHtcblxuXHRsZXQgY3NzX3N0eWxlITogQ1NTU3R5bGVTaGVldDtcblxuXHRpZiggY3NzIGluc3RhbmNlb2YgSFRNTFN0eWxlRWxlbWVudCApXG5cdFx0Y3NzX3N0eWxlID0gY3NzLnNoZWV0ITtcblx0aWYoIHR5cGVvZiBjc3MgPT09IFwic3RyaW5nXCIpIHtcblx0XHRjc3Nfc3R5bGUgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuXHRcdGNzc19zdHlsZS5yZXBsYWNlU3luYyhjc3MpO1xuXHR9XG5cblx0Zm9yKGxldCBydWxlIG9mIGNzc19zdHlsZS5jc3NSdWxlcylcblx0XHRzaGFyZWRDU1MuaW5zZXJ0UnVsZShydWxlLmNzc1RleHQpO1xufVxuXG50eXBlIERlbGVnYXRlZEhhbmRsZXIgPSBbc3RyaW5nLCAoZXY6IE1vdXNlRXZlbnQpID0+IHZvaWRdO1xuY29uc3QgREVMRUdBVEVEX0VWRU5UUyA9IHtcblx0XCJjbGlja1wiOiBbXSBhcyBEZWxlZ2F0ZWRIYW5kbGVyW10sXG5cdFwiZGJsY2xpY2tcIjogW10gYXMgRGVsZWdhdGVkSGFuZGxlcltdXG59O1xuXG5jb25zdCBBTFJFQURZX1BST0NFU1NFRCA9IFN5bWJvbCgpO1xuXG5mdW5jdGlvbiBvbkNsaWNrRXZlbnQoZXY6IE1vdXNlRXZlbnQpIHtcblxuXHRpZiggKGV2IGFzIGFueSlbQUxSRUFEWV9QUk9DRVNTRURdID09PSB0cnVlIClcblx0XHRyZXR1cm47XG5cdChldiBhcyBhbnkpW0FMUkVBRFlfUFJPQ0VTU0VEXSA9IHRydWU7XG5cblx0Y29uc3QgaGFuZGxlcnMgPSBERUxFR0FURURfRVZFTlRTW2V2LnR5cGUgYXMga2V5b2YgdHlwZW9mIERFTEVHQVRFRF9FVkVOVFNdO1xuXG5cdGZvcihsZXQgZWxlbSBvZiBldi5jb21wb3NlZFBhdGgoKSApIHtcblx0XG5cdFx0aWYoIGVsZW0gaW5zdGFuY2VvZiBTaGFkb3dSb290IHx8IGVsZW0gPT09IGRvY3VtZW50IHx8IGVsZW0gPT09IHdpbmRvdyApXG5cdFx0XHRjb250aW51ZTtcblxuXHRcdHZhciB0YXJnZXQgPSBlbGVtIGFzIEVsZW1lbnQ7XG5cblx0XHRmb3IobGV0IFtzZWxlY3RvciwgaGFuZGxlcl0gb2YgaGFuZGxlcnMpIHtcblx0XHRcdGlmKCB0YXJnZXQubWF0Y2hlcyhzZWxlY3RvcikgKVxuXHRcdFx0XHRoYW5kbGVyKGV2KTtcblx0XHR9XG5cdH1cbn1cblxuTElTUy5pbnNlcnRHbG9iYWxEZWxlZ2F0ZWRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50X25hbWU6IGtleW9mIHR5cGVvZiBERUxFR0FURURfRVZFTlRTLCBzZWxlY3Rvcjogc3RyaW5nLCBoYW5kbGVyOiAoZXY6IE1vdXNlRXZlbnQpID0+IHZvaWQgKSB7XG5cdERFTEVHQVRFRF9FVkVOVFNbZXZlbnRfbmFtZV0ucHVzaChbc2VsZWN0b3IsIGhhbmRsZXJdKVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tFdmVudCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIG9uQ2xpY2tFdmVudCk7XG5cbkxJU1MuY2xvc2VzdCA9IGZ1bmN0aW9uIGNsb3Nlc3Q8RSBleHRlbmRzIEVsZW1lbnQ+KHNlbGVjdG9yOiBzdHJpbmcsIGVsZW1lbnQ6IEVsZW1lbnQpIHtcblxuXHR3aGlsZSh0cnVlKSB7XG5cdFx0dmFyIHJlc3VsdCA9IGVsZW1lbnQuY2xvc2VzdDxFPihzZWxlY3Rvcik7XG5cblx0XHRpZiggcmVzdWx0ICE9PSBudWxsKVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblxuXHRcdGNvbnN0IHJvb3QgPSBlbGVtZW50LmdldFJvb3ROb2RlKCk7XG5cdFx0aWYoICEgKFwiaG9zdFwiIGluIHJvb3QpIClcblx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0ZWxlbWVudCA9IChyb290IGFzIFNoYWRvd1Jvb3QpLmhvc3Q7XG5cdH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBoZWxwZXJzID09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIGluZmVyUGFyYW1zPFQ+ID0gVCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LCBpbmZlciBQIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+PiA/IFAgOiBuZXZlcjtcblxudHlwZSBCVUlMRF9PUFRJT05TPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PiA9IFBhcnRpYWw8e1xuXHRcdFx0XHRcdCAgXHRwYXJhbXMgICAgOiBQYXJ0aWFsPGluZmVyUGFyYW1zPFQ+Pixcblx0XHRcdFx0XHQgIFx0Y29udGVudFx0ICA6IHN0cmluZ3xOb2RlfHJlYWRvbmx5IE5vZGVbXSxcblx0XHRcdFx0XHRcdGlkIFx0XHQgIDogc3RyaW5nLFxuXHRcdFx0XHRcdCAgXHRjbGFzc2VzXHQgIDogcmVhZG9ubHkgc3RyaW5nW10sXG5cdFx0XHRcdFx0ICBcdGNzc3ZhcnMgICA6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIHN0cmluZz4+LFxuXHRcdFx0XHRcdCAgXHRhdHRycyBcdCAgOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmd8Ym9vbGVhbj4+LFxuXHRcdFx0XHRcdCAgXHRkYXRhIFx0ICA6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIHN0cmluZ3xib29sZWFuPj4sXG5cdFx0XHRcdFx0ICBcdGxpc3RlbmVycyA6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIChldjogRXZlbnQpID0+IHZvaWQ+PlxuXHRcdFx0XHRcdH0+ICYgKHtcblx0XHRcdFx0XHRcdGluaXRpYWxpemU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0cGFyZW50OiBFbGVtZW50XG5cdFx0XHRcdFx0fXx7XG5cdFx0XHRcdFx0XHRpbml0aWFsaXplPzogdHJ1ZSxcblx0XHRcdFx0XHRcdHBhcmVudD86IEVsZW1lbnRcblx0XHRcdFx0XHR9KTtcblxuYXN5bmMgZnVuY3Rpb24gYnVpbGQ8VCBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHRhZ25hbWU6IFQsIG9wdGlvbnM/OiBCVUlMRF9PUFRJT05TPENvbXBvbmVudHNbVF0+KTogUHJvbWlzZTxDb21wb25lbnRzW1RdPjtcbmFzeW5jIGZ1bmN0aW9uIGJ1aWxkPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+Pih0YWduYW1lOiBzdHJpbmcsIG9wdGlvbnM/OiBCVUlMRF9PUFRJT05TPFQ+KTogUHJvbWlzZTxUPjtcbmFzeW5jIGZ1bmN0aW9uIGJ1aWxkPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+Pih0YWduYW1lOiBzdHJpbmcsIHtcblx0XHRwYXJhbXMgICAgPSB7fSxcblx0XHRpbml0aWFsaXplPSB0cnVlLFxuXHRcdGNvbnRlbnQgICA9IFtdLFxuXHRcdHBhcmVudCAgICA9IHVuZGVmaW5lZCxcblx0XHRpZCBcdFx0ICA9IHVuZGVmaW5lZCxcblx0XHRjbGFzc2VzICAgPSBbXSxcblx0XHRjc3N2YXJzICAgPSB7fSxcblx0XHRhdHRycyAgICAgPSB7fSxcblx0XHRkYXRhIFx0ICA9IHt9LFxuXHRcdGxpc3RlbmVycyA9IHt9XG5cdH06IEJVSUxEX09QVElPTlM8VD4gPSB7fSk6IFByb21pc2U8VD4ge1xuXG5cdGlmKCAhIGluaXRpYWxpemUgJiYgcGFyZW50ID09PSBudWxsKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIkEgcGFyZW50IG11c3QgYmUgZ2l2ZW4gaWYgaW5pdGlhbGl6ZSBpcyBmYWxzZVwiKTtcblxuXHRsZXQgQ3VzdG9tQ2xhc3MgPSBhd2FpdCBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCh0YWduYW1lKTtcblx0bGV0IGVsZW0gPSBuZXcgQ3VzdG9tQ2xhc3MocGFyYW1zKSBhcyBMSVNTSG9zdDxUPjtcblxuXHQvLyBGaXggaXNzdWUgIzJcblx0aWYoIGVsZW0udGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSB0YWduYW1lIClcblx0XHRlbGVtLnNldEF0dHJpYnV0ZShcImlzXCIsIHRhZ25hbWUpO1xuXG5cdGlmKCBpZCAhPT0gdW5kZWZpbmVkIClcblx0XHRlbGVtLmlkID0gaWQ7XG5cblx0aWYoIGNsYXNzZXMubGVuZ3RoID4gMClcblx0XHRlbGVtLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG5cblx0Zm9yKGxldCBuYW1lIGluIGNzc3ZhcnMpXG5cdFx0ZWxlbS5zdHlsZS5zZXRQcm9wZXJ0eShgLS0ke25hbWV9YCwgY3NzdmFyc1tuYW1lXSk7XG5cblx0Zm9yKGxldCBuYW1lIGluIGF0dHJzKSB7XG5cblx0XHRsZXQgdmFsdWUgPSBhdHRyc1tuYW1lXTtcblx0XHRpZiggdHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIilcblx0XHRcdGVsZW0udG9nZ2xlQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0XHRlbHNlXG5cdFx0XHRlbGVtLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdH1cblxuXHRmb3IobGV0IG5hbWUgaW4gZGF0YSkge1xuXG5cdFx0bGV0IHZhbHVlID0gZGF0YVtuYW1lXTtcblx0XHRpZiggdmFsdWUgPT09IGZhbHNlKVxuXHRcdFx0ZGVsZXRlIGVsZW0uZGF0YXNldFtuYW1lXTtcblx0XHRlbHNlIGlmKHZhbHVlID09PSB0cnVlKVxuXHRcdFx0ZWxlbS5kYXRhc2V0W25hbWVdID0gXCJcIjtcblx0XHRlbHNlXG5cdFx0XHRlbGVtLmRhdGFzZXRbbmFtZV0gPSB2YWx1ZTtcblx0fVxuXG5cdGlmKCAhIEFycmF5LmlzQXJyYXkoY29udGVudCkgKVxuXHRcdGNvbnRlbnQgPSBbY29udGVudCBhcyBhbnldO1xuXHRlbGVtLnJlcGxhY2VDaGlsZHJlbiguLi5jb250ZW50KTtcblxuXHRmb3IobGV0IG5hbWUgaW4gbGlzdGVuZXJzKVxuXHRcdGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBsaXN0ZW5lcnNbbmFtZV0pO1xuXG5cdGlmKCBwYXJlbnQgIT09IHVuZGVmaW5lZCApXG5cdFx0cGFyZW50LmFwcGVuZChlbGVtKTtcblxuXHRpZiggISBlbGVtLmlzSW5pdCAmJiBpbml0aWFsaXplIClcblx0XHRyZXR1cm4gYXdhaXQgTElTUy5pbml0aWFsaXplKGVsZW0pO1xuXG5cdHJldHVybiBhd2FpdCBMSVNTLmdldExJU1MoZWxlbSk7XG59XG5MSVNTLmJ1aWxkID0gYnVpbGQ7XG5cblxuTElTUy53aGVuRGVmaW5lZCAgICA9IGFzeW5jIGZ1bmN0aW9uKHRhZ25hbWU6IHN0cmluZywgY2FsbGJhY2s/OiAoKSA9PiB2b2lkICkgOiBQcm9taXNlPHZvaWQ+IHtcblxuXHRhd2FpdCBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCh0YWduYW1lKTtcblxuXHRpZiggY2FsbGJhY2sgIT09IHVuZGVmaW5lZClcblx0XHRjYWxsYmFjaygpO1xuXG5cdHJldHVybjtcbn1cbkxJU1Mud2hlbkFsbERlZmluZWQgPSBhc3luYyBmdW5jdGlvbih0YWduYW1lczogcmVhZG9ubHkgc3RyaW5nW10sIGNhbGxiYWNrPzogKCkgPT4gdm9pZCApIDogUHJvbWlzZTx2b2lkPiB7XG5cblx0YXdhaXQgUHJvbWlzZS5hbGwoIHRhZ25hbWVzLm1hcCggdCA9PiBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCh0KSApIClcblxuXHRpZiggY2FsbGJhY2sgIT09IHVuZGVmaW5lZClcblx0XHRjYWxsYmFjaygpO1xuXG59XG5cbkxJU1MuaXNEZWZpbmVkID0gZnVuY3Rpb24obmFtZTogc3RyaW5nKSB7XG5cdHJldHVybiBjdXN0b21FbGVtZW50cy5nZXQobmFtZSk7XG59XG5cbkxJU1Muc2VsZWN0b3IgPSBmdW5jdGlvbihuYW1lPzogc3RyaW5nKSB7XG5cdGlmKG5hbWUgPT09IHVuZGVmaW5lZCkgLy8ganVzdCBhbiBoNGNrXG5cdFx0cmV0dXJuIFwiXCI7XG5cdHJldHVybiBgOmlzKCR7bmFtZX0sIFtpcz1cIiR7bmFtZX1cIl0pYDtcbn1cblxuTElTUy5nZXRMSVNTICAgID0gYXN5bmMgZnVuY3Rpb248VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KCBlbGVtZW50OiBFbGVtZW50ICkge1xuXG5cdGF3YWl0IExJU1Mud2hlbkRlZmluZWQoIExJU1MuZ2V0TmFtZShlbGVtZW50KSApO1xuXG5cdHJldHVybiAoZWxlbWVudCBhcyBMSVNTSG9zdDxUPikuTElTUzsgLy8gZW5zdXJlIGluaXRpYWxpemVkLlxufVxuTElTUy5nZXRMSVNTU3luYz0gZnVuY3Rpb248VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KCBlbGVtZW50OiBFbGVtZW50ICkge1xuXG5cdGlmKCAhIExJU1MuaXNEZWZpbmVkKCBMSVNTLmdldE5hbWUoZWxlbWVudCkgKSApXG5cdFx0dGhyb3cgbmV3IEVycm9yKGAke25hbWV9IGhhc24ndCBiZWVuIGRlZmluZWQgeWV0LmApO1xuXG5cdGxldCBob3N0ID0gZWxlbWVudCBhcyBMSVNTSG9zdDxUPjtcblxuXHRpZiggISBob3N0LmlzSW5pdCApXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW5zdGFuY2UgaGFzbid0IGJlZW4gaW5pdGlhbGl6ZWQgeWV0LlwiKTtcblxuXHRyZXR1cm4gaG9zdC5MSVNTU3luYztcbn1cbkxJU1MuaW5pdGlhbGl6ZSA9IGFzeW5jIGZ1bmN0aW9uPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PiggZWxlbWVudDogRWxlbWVudCkge1xuXG5cdGF3YWl0IExJU1Mud2hlbkRlZmluZWQoIExJU1MuZ2V0TmFtZShlbGVtZW50KSApO1xuXG5cdHJldHVybiBhd2FpdCAoZWxlbWVudCBhcyBMSVNTSG9zdDxUPikuaW5pdGlhbGl6ZSgpOyAvLyBlbnN1cmUgaW5pdGlhbGl6YXRpb24uXG59XG5cbkxJU1MuZ2V0TmFtZSA9IGZ1bmN0aW9uKCBlbGVtZW50OiBFbGVtZW50ICk6IHN0cmluZyB7XG5cblx0Y29uc3QgbmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpcycpID8/IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcblx0aWYoICEgbmFtZS5pbmNsdWRlcygnLScpIClcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEVsZW1lbnQgJHtuYW1lfSBpcyBub3QgYSBXZWJDb21wb25lbnRgKTtcblxuXHRyZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gX2J1aWxkUVMoc2VsZWN0b3I6IHN0cmluZywgdGFnbmFtZV9vcl9wYXJlbnQ/OiBzdHJpbmcgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsIHBhcmVudDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblx0XG5cdGlmKCB0YWduYW1lX29yX3BhcmVudCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB0YWduYW1lX29yX3BhcmVudCAhPT0gJ3N0cmluZycpIHtcblx0XHRwYXJlbnQgPSB0YWduYW1lX29yX3BhcmVudDtcblx0XHR0YWduYW1lX29yX3BhcmVudCA9IHVuZGVmaW5lZDtcblx0fVxuXG5cdHJldHVybiBbYCR7c2VsZWN0b3J9JHtMSVNTLnNlbGVjdG9yKHRhZ25hbWVfb3JfcGFyZW50IGFzIHN0cmluZ3x1bmRlZmluZWQpfWAsIHBhcmVudF0gYXMgY29uc3Q7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgUXVlcnlTZWxlY3RvcnMgPT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYXN5bmMgZnVuY3Rpb24gcXM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8VD47XG5hc3luYyBmdW5jdGlvbiBxczxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTwgQ29tcG9uZW50c1tOXSA+O1xuYXN5bmMgZnVuY3Rpb24gcXM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRsZXQgcmVzdWx0ID0gYXdhaXQgTElTUy5xc288VD4oc2VsZWN0b3IsIHBhcmVudCk7XG5cdGlmKHJlc3VsdCA9PT0gbnVsbClcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEVsZW1lbnQgJHtzZWxlY3Rvcn0gbm90IGZvdW5kYCk7XG5cblx0cmV0dXJuIHJlc3VsdCFcbn1cbkxJU1MucXMgID0gcXNcblxuYXN5bmMgZnVuY3Rpb24gcXNvPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPFQ+O1xuYXN5bmMgZnVuY3Rpb24gcXNvPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPCBDb21wb25lbnRzW05dID47XG5hc3luYyBmdW5jdGlvbiBxc288VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRjb25zdCBlbGVtZW50ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3I8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblx0aWYoIGVsZW1lbnQgPT09IG51bGwgKVxuXHRcdHJldHVybiBudWxsO1xuXG5cdHJldHVybiBhd2FpdCBMSVNTLmdldExJU1MoIGVsZW1lbnQgKTtcbn1cbkxJU1MucXNvID0gcXNvXG5cbmFzeW5jIGZ1bmN0aW9uIHFzYTxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTxUW10+O1xuYXN5bmMgZnVuY3Rpb24gcXNhPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPCBDb21wb25lbnRzW05dW10gPjtcbmFzeW5jIGZ1bmN0aW9uIHFzYTxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LFxuXHRcdFx0XHRcdFx0cGFyZW50ICA6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cblx0W3NlbGVjdG9yLCBwYXJlbnRdID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBwYXJlbnQpO1xuXG5cdGNvbnN0IGVsZW1lbnRzID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGw8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblxuXHRsZXQgaWR4ID0gMDtcblx0Y29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxUPj4oIGVsZW1lbnRzLmxlbmd0aCApO1xuXHRmb3IobGV0IGVsZW1lbnQgb2YgZWxlbWVudHMpXG5cdFx0cHJvbWlzZXNbaWR4KytdID0gTElTUy5nZXRMSVNTKCBlbGVtZW50ICk7XG5cblx0cmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbn1cbkxJU1MucXNhID0gcXNhO1xuXG5hc3luYyBmdW5jdGlvbiBxc2M8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA6IEVsZW1lbnQpOiBQcm9taXNlPFQ+O1xuYXN5bmMgZnVuY3Rpb24gcXNjPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgOiBFbGVtZW50KTogUHJvbWlzZTwgQ29tcG9uZW50c1tOXSA+O1xuYXN5bmMgZnVuY3Rpb24gcXNjPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50LFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgPzogRWxlbWVudCkge1xuXG5cdGNvbnN0IHJlcyA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgZWxlbWVudCk7XG5cdFxuXHRjb25zdCByZXN1bHQgPSAocmVzWzFdIGFzIHVua25vd24gYXMgRWxlbWVudCkuY2xvc2VzdDxMSVNTSG9zdDxUPj4ocmVzWzBdKTtcblx0aWYocmVzdWx0ID09PSBudWxsKVxuXHRcdHJldHVybiBudWxsO1xuXG5cdHJldHVybiBhd2FpdCBMSVNTLmdldExJU1MocmVzdWx0KTtcbn1cbkxJU1MucXNjID0gcXNjO1xuXG5mdW5jdGlvbiBxc1N5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFQ7XG5mdW5jdGlvbiBxc1N5bmM8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IENvbXBvbmVudHNbTl07XG5mdW5jdGlvbiBxc1N5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRjb25zdCBlbGVtZW50ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3I8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblxuXHRpZiggZWxlbWVudCA9PT0gbnVsbCApXG5cdFx0dGhyb3cgbmV3IEVycm9yKGBFbGVtZW50ICR7c2VsZWN0b3J9IG5vdCBmb3VuZGApO1xuXG5cdHJldHVybiBMSVNTLmdldExJU1NTeW5jKCBlbGVtZW50ICk7XG59XG5MSVNTLnFzU3luYyA9IHFzU3luYztcblxuZnVuY3Rpb24gcXNhU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogVFtdO1xuZnVuY3Rpb24gcXNhU3luYzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogQ29tcG9uZW50c1tOXVtdO1xuZnVuY3Rpb24gcXNhU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LFxuXHRcdFx0XHRcdFx0cGFyZW50ICA6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cblx0W3NlbGVjdG9yLCBwYXJlbnRdID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBwYXJlbnQpO1xuXG5cdGNvbnN0IGVsZW1lbnRzID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGw8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblxuXHRsZXQgaWR4ID0gMDtcblx0Y29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PFQ+KCBlbGVtZW50cy5sZW5ndGggKTtcblx0Zm9yKGxldCBlbGVtZW50IG9mIGVsZW1lbnRzKVxuXHRcdHJlc3VsdFtpZHgrK10gPSBMSVNTLmdldExJU1NTeW5jKCBlbGVtZW50ICk7XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cbkxJU1MucXNhU3luYyA9IHFzYVN5bmM7XG5cbmZ1bmN0aW9uIHFzY1N5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA6IEVsZW1lbnQpOiBUO1xuZnVuY3Rpb24gcXNjU3luYzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdGVsZW1lbnQgIDogRWxlbWVudCk6IENvbXBvbmVudHNbTl07XG5mdW5jdGlvbiBxc2NTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50LFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgPzogRWxlbWVudCkge1xuXG5cdGNvbnN0IHJlcyA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgZWxlbWVudCk7XG5cdFxuXHRjb25zdCByZXN1bHQgPSAocmVzWzFdIGFzIHVua25vd24gYXMgRWxlbWVudCkuY2xvc2VzdDxMSVNTSG9zdDxUPj4ocmVzWzBdKTtcblx0aWYocmVzdWx0ID09PSBudWxsKVxuXHRcdHJldHVybiBudWxsO1xuXG5cdHJldHVybiBMSVNTLmdldExJU1NTeW5jKHJlc3VsdCk7XG59XG5MSVNTLnFzY1N5bmMgPSBxc2NTeW5jO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIEF1dG8gPT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBjbGFzcyBMSVNTX0F1dG8gZXh0ZW5kcyBMSVNTKHthdHRyaWJ1dGVzOiBbXCJzcmNcIl19KSB7XG5cblx0cmVhZG9ubHkgI2tub3duX3RhZyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXHRyZWFkb25seSAjZGlyZWN0b3J5OiBzdHJpbmc7XG5cdHJlYWRvbmx5ICNzdzogUHJvbWlzZTx2b2lkPjtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLiNzdyA9IG5ldyBQcm9taXNlKCBhc3luYyAocmVzb2x2ZSkgPT4ge1xuXHRcdFx0XG5cdFx0XHRhd2FpdCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihgLi9zdy5qc2ApO1xuXG5cdFx0XHRpZiggbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlciApXG5cdFx0XHRcdHJlc29sdmUoKTtcblxuXHRcdFx0bmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignY29udHJvbGxlcmNoYW5nZScsICgpID0+IHtcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblxuXHRcdGNvbnN0IHNyYyA9IHRoaXMuYXR0cnMuc3JjO1xuXHRcdGlmKHNyYyA9PT0gbnVsbClcblx0XHRcdHRocm93IG5ldyBFcnJvcihcInNyYyBhdHRyaWJ1dGUgaXMgbWlzc2luZy5cIik7XG5cdFx0dGhpcy4jZGlyZWN0b3J5ID0gc3JjWzBdID09PSAnLidcblx0XHRcdFx0XHRcdFx0XHQ/IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0vJHtzcmN9YFxuXHRcdFx0XHRcdFx0XHRcdDogc3JjO1xuXG5cdFx0bmV3IE11dGF0aW9uT2JzZXJ2ZXIoIChtdXRhdGlvbnMpID0+IHtcblxuXHRcdFx0Zm9yKGxldCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpXG5cdFx0XHRcdGZvcihsZXQgYWRkaXRpb24gb2YgbXV0YXRpb24uYWRkZWROb2Rlcylcblx0XHRcdFx0XHRpZihhZGRpdGlvbiBpbnN0YW5jZW9mIEVsZW1lbnQpXG5cdFx0XHRcdFx0XHR0aGlzLiNhZGRUYWcoYWRkaXRpb24udGFnTmFtZSlcblxuXHRcdH0pLm9ic2VydmUoIGRvY3VtZW50LCB7IGNoaWxkTGlzdDp0cnVlLCBzdWJ0cmVlOnRydWUgfSk7XG5cblxuXHRcdGZvciggbGV0IGVsZW0gb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIipcIikgKVxuXHRcdFx0dGhpcy4jYWRkVGFnKGVsZW0udGFnTmFtZSk7XG5cdH1cblxuXG4gICAgcHJvdGVjdGVkIHJlc291cmNlcygpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0XCJpbmRleC5qc1wiLFxuXHRcdFx0XCJpbmRleC5odG1sXCIsXG5cdFx0XHRcImluZGV4LmNzc1wiXG5cdFx0XTtcbiAgICB9XG5cblx0cHJvdGVjdGVkIGRlZmluZVdlYkNvbXBvbmVudCh0YWduYW1lOiBzdHJpbmcsIGZpbGVzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBvcHRzOiBQYXJ0aWFsPHtjb250ZW50OiBzdHJpbmcsIGNzczogc3RyaW5nfT4pIHtcblxuXHRcdGNvbnN0IGpzID0gZmlsZXNbXCJpbmRleC5qc1wiXTtcblx0XHRjb25zdCBjb250ZW50ID0gZmlsZXNbXCJpbmRleC5odG1sXCJdO1xuXG5cdFx0bGV0IGtsYXNzOiBudWxsfCBSZXR1cm5UeXBlPHR5cGVvZiBMSVNTPiA9IG51bGw7XG5cdFx0aWYoIGpzICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0a2xhc3MgPSBqcyhvcHRzKTtcblx0XHRlbHNlIGlmKCBjb250ZW50ICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0a2xhc3MgPSBjbGFzcyBXZWJDb21wb25lbnQgZXh0ZW5kcyBMSVNTKG9wdHMpIHt9O1xuXG5cdFx0aWYoa2xhc3MgPT09IG51bGwpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgZmlsZXMgZm9yIFdlYkNvbXBvbmVudCAke3RhZ25hbWV9LmApO1xuXG5cdFx0cmV0dXJuIExJU1MuZGVmaW5lKHRhZ25hbWUsIGtsYXNzKTtcblx0fVxuXG5cdGFzeW5jICNhZGRUYWcodGFnbmFtZTogc3RyaW5nKSB7XG5cblx0XHR0YWduYW1lID0gdGFnbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0aWYoIHRhZ25hbWUgPT09ICdsaXNzLWF1dG8nIHx8IHRhZ25hbWUgPT09ICdibGlzcy1hdXRvJyB8fCAhIHRhZ25hbWUuaW5jbHVkZXMoJy0nKSB8fCB0aGlzLiNrbm93bl90YWcuaGFzKCB0YWduYW1lICkgKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0dGhpcy4ja25vd25fdGFnLmFkZCh0YWduYW1lKTtcblxuXHRcdGF3YWl0IHRoaXMuI3N3OyAvLyBlbnN1cmUgU1cgaXMgaW5zdGFsbGVkLlxuXG5cdFx0Y29uc3QgZmlsZW5hbWVzID0gdGhpcy5yZXNvdXJjZXMoKTtcblx0XHRjb25zdCByZXNvdXJjZXMgPSBhd2FpdCBQcm9taXNlLmFsbCggZmlsZW5hbWVzLm1hcCggZmlsZSA9PiBmaWxlLmVuZHNXaXRoKCcuanMnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IF9pbXBvcnQgICAoYCR7dGhpcy4jZGlyZWN0b3J5fS8ke3RhZ25hbWV9LyR7ZmlsZX1gLCB0cnVlKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IF9mZXRjaFRleHQoYCR7dGhpcy4jZGlyZWN0b3J5fS8ke3RhZ25hbWV9LyR7ZmlsZX1gLCB0cnVlKSApICk7XG5cblx0XHRjb25zdCBmaWxlczogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBmaWxlbmFtZXMubGVuZ3RoOyArK2kpXG5cdFx0XHRpZiggcmVzb3VyY2VzW2ldICE9PSB1bmRlZmluZWQpXG5cdFx0XHRcdGZpbGVzW2ZpbGVuYW1lc1tpXV0gPSByZXNvdXJjZXNbaV07XG5cblx0XHRjb25zdCBjb250ZW50ID0gZmlsZXNbXCJpbmRleC5odG1sXCJdO1xuXHRcdGNvbnN0IGNzcyAgICAgPSBmaWxlc1tcImluZGV4LmNzc1wiXTtcblxuXHRcdGNvbnN0IG9wdHM6IFBhcnRpYWw8e2NvbnRlbnQ6IHN0cmluZywgY3NzOiBzdHJpbmd9PiA9IHtcblx0XHRcdC4uLmNvbnRlbnQgIT09IHVuZGVmaW5lZCAmJiB7Y29udGVudH0sXG5cdFx0XHQuLi5jc3MgICAgICE9PSB1bmRlZmluZWQgJiYge2Nzc30sXG5cdFx0fTtcblxuXHRcdHJldHVybiB0aGlzLmRlZmluZVdlYkNvbXBvbmVudCh0YWduYW1lLCBmaWxlcywgb3B0cyk7XG5cdFx0XG5cdH1cbn1cbkxJU1MuZGVmaW5lKFwibGlzcy1hdXRvXCIsIExJU1NfQXV0byk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50cyB7XG5cdFwibGlzcy1hdXRvXCI6IExJU1NfQXV0b1xufTtcbi8qXG4gKiBkZWNsYXJlIG1vZHVsZSAnJExJU1MnIHtcbiAqIFx0XHRpbnRlcmZhY2UgQ29tcG9uZW50cyB7XG4gKiBcdFx0XHRcIm5hbWVcIjogY2xhc3NcbiAqIFx0XHR9XG4gKiB9XG4gKi9cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBFdmVudHNUYXJnZXQgPT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIENzdEV2ZW50PEV2ZW50IGV4dGVuZHMgc3RyaW5nLCBBcmdzPiA9IEN1c3RvbUV2ZW50PEFyZ3M+ICYge3R5cGU6IEV2ZW50fTtcblxuZXhwb3J0IGludGVyZmFjZSBFdmVudHNUYXJnZXQ8RXZlbnRzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj57XG5cblx0YWRkRXZlbnRMaXN0ZW5lcjxFdmVudCBleHRlbmRzIEV4Y2x1ZGU8a2V5b2YgRXZlbnRzLCBzeW1ib2x8bnVtYmVyPj4odHlwZTogRXZlbnQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgbGlzdGVuZXI6IG51bGx8ICgoZXY6IENzdEV2ZW50PEV2ZW50LCBFdmVudHNbRXZlbnRdPikgPT4gdm9pZCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgb3B0aW9ucz86IGJvb2xlYW58QWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMpOiB2b2lkO1xuXG5cdGRpc3BhdGNoRXZlbnQ8RXZlbnQgZXh0ZW5kcyBFeGNsdWRlPGtleW9mIEV2ZW50cywgc3ltYm9sfG51bWJlcj4+KGV2ZW50OiBDc3RFdmVudDxFdmVudCwgRXZlbnRzW0V2ZW50XT4pOiBib29sZWFuO1xuXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI8RXZlbnQgZXh0ZW5kcyBFeGNsdWRlPGtleW9mIEV2ZW50cywgc3ltYm9sfG51bWJlcj4+KHR5cGU6IEV2ZW50LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsaXN0ZW5lcjogbnVsbHwgKChldjogQ3N0RXZlbnQ8RXZlbnQsIEV2ZW50c1tFdmVudF0+KSA9PiB2b2lkKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz86IGJvb2xlYW58QWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMpOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgQ3N0bUV2ZW50PEV2ZW50IGV4dGVuZHMgc3RyaW5nLCBBcmdzPiBleHRlbmRzIEN1c3RvbUV2ZW50PEFyZ3M+IHtcblxuXHRvdmVycmlkZSBnZXQgdHlwZSgpOiBFdmVudCB7IHJldHVybiBzdXBlci50eXBlIGFzIEV2ZW50OyB9XG5cblx0Y29uc3RydWN0b3IodHlwZTogRXZlbnQsIGFyZ3M6IEFyZ3MpIHtcblx0XHRzdXBlcih0eXBlLCB7ZGV0YWlsOiBhcmdzfSk7XG5cdH1cbn1cblxuZXhwb3J0IHR5cGUgRXZlbnRzVGFyZ2V0Q3N0cjxFdmVudHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4+ID0gQ29uc3RydWN0b3I8RXZlbnRzVGFyZ2V0PEV2ZW50cz4+O1xuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgaW50ZXJuYWwgdG9vbHMgPT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hSZXNvdXJjZShyZXNvdXJjZTogUmVzb3VyY2V8UHJvbWlzZTxSZXNvdXJjZT4pIHtcblxuXHRyZXNvdXJjZSA9IGF3YWl0IHJlc291cmNlO1xuXG5cdGlmKCAhIChyZXNvdXJjZSBpbnN0YW5jZW9mIFJlc3BvbnNlKSApXG5cdFx0cmVzb3VyY2UgPSBhd2FpdCBmZXRjaChyZXNvdXJjZSk7XG5cblx0cmV0dXJuIGF3YWl0IHJlc291cmNlLnRleHQoKTtcbn1cblxuXG5hc3luYyBmdW5jdGlvbiBfZmV0Y2hUZXh0KHVyaTogc3RyaW5nfFVSTCwgaXNMaXNzQXV0bzogYm9vbGVhbiA9IGZhbHNlKSB7XG5cblx0Y29uc3Qgb3B0aW9ucyA9IGlzTGlzc0F1dG9cblx0XHRcdFx0XHRcdD8ge2hlYWRlcnM6e1wibGlzcy1hdXRvXCI6IFwidHJ1ZVwifX1cblx0XHRcdFx0XHRcdDoge307XG5cblxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVyaSwgb3B0aW9ucyk7XG5cdGlmKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwIClcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXG5cdGlmKCBpc0xpc3NBdXRvICYmIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwic3RhdHVzXCIpISA9PT0gXCI0MDRcIiApXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblxuXHRyZXR1cm4gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xufVxuYXN5bmMgZnVuY3Rpb24gX2ltcG9ydCh1cmk6IHN0cmluZywgaXNMaXNzQXV0bzogYm9vbGVhbiA9IGZhbHNlKSB7XG5cblx0Ly8gdGVzdCBmb3IgdGhlIG1vZHVsZSBleGlzdGFuY2UuXG5cdGlmKGlzTGlzc0F1dG8gJiYgYXdhaXQgX2ZldGNoVGV4dCh1cmksIGlzTGlzc0F1dG8pID09PSB1bmRlZmluZWQgKVxuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cblx0dHJ5IHtcblx0XHRyZXR1cm4gKGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrSWdub3JlOiB0cnVlICovIHVyaSkpLmRlZmF1bHQ7XG5cdH0gY2F0Y2goZSkge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH1cbn1cblxuLy8gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81MTAwMDQ2MS9odG1sLWVsZW1lbnQtdGFnLW5hbWUtZnJvbS1jb25zdHJ1Y3RvclxuY29uc3QgSFRNTENMQVNTX1JFR0VYID0gIC9IVE1MKFxcdyspRWxlbWVudC87XG5jb25zdCBlbGVtZW50TmFtZUxvb2t1cFRhYmxlID0ge1xuICAgICdVTGlzdCc6ICd1bCcsXG4gICAgJ1RhYmxlQ2FwdGlvbic6ICdjYXB0aW9uJyxcbiAgICAnVGFibGVDZWxsJzogJ3RkJywgLy8gdGhcbiAgICAnVGFibGVDb2wnOiAnY29sJywgIC8vJ2NvbGdyb3VwJyxcbiAgICAnVGFibGVSb3cnOiAndHInLFxuICAgICdUYWJsZVNlY3Rpb24nOiAndGJvZHknLCAvL1sndGhlYWQnLCAndGJvZHknLCAndGZvb3QnXSxcbiAgICAnUXVvdGUnOiAncScsXG4gICAgJ1BhcmFncmFwaCc6ICdwJyxcbiAgICAnT0xpc3QnOiAnb2wnLFxuICAgICdNb2QnOiAnaW5zJywgLy8sICdkZWwnXSxcbiAgICAnTWVkaWEnOiAndmlkZW8nLC8vICdhdWRpbyddLFxuICAgICdJbWFnZSc6ICdpbWcnLFxuICAgICdIZWFkaW5nJzogJ2gxJywgLy8sICdoMicsICdoMycsICdoNCcsICdoNScsICdoNiddLFxuICAgICdEaXJlY3RvcnknOiAnZGlyJyxcbiAgICAnRExpc3QnOiAnZGwnLFxuICAgICdBbmNob3InOiAnYSdcbiAgfTtcbmZ1bmN0aW9uIF9lbGVtZW50MnRhZ25hbWUoQ2xhc3M6IHR5cGVvZiBIVE1MRWxlbWVudCk6IHN0cmluZ3xudWxsIHtcblxuXHRpZiggQ2xhc3MgPT09IEhUTUxFbGVtZW50IClcblx0XHRyZXR1cm4gbnVsbDtcblx0XG5cdGxldCBodG1sdGFnID0gSFRNTENMQVNTX1JFR0VYLmV4ZWMoQ2xhc3MubmFtZSkhWzFdO1xuXHRyZXR1cm4gZWxlbWVudE5hbWVMb29rdXBUYWJsZVtodG1sdGFnIGFzIGtleW9mIHR5cGVvZiBlbGVtZW50TmFtZUxvb2t1cFRhYmxlXSA/PyBodG1sdGFnLnRvTG93ZXJDYXNlKClcbn0iLCJpbXBvcnQgXCJzdHJ1Y3QvbWVudS50c1wiO1xuaW1wb3J0IFwic3RydWN0L2NhbGMvc2hlZXQudHNcIjtcblxuLy8gMVxuXG5pbXBvcnQgTElTUyBmcm9tIFwiTElTU1wiO1xuaW1wb3J0IHsgRm9ybWF0cyB9IGZyb20gXCJzdHJ1Y3QvY2FsYy9mb3JtYXQudHNcIjtcblxuY29uc3Qgc19mb3JtdWxhID0gYXdhaXQgTElTUy5xcygnI3NoZWV0X2Zvcm11bGEnKTtcblxuc19mb3JtdWxhLmdldFJhbmdlKFwiQTE6QzFcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUXVhbnRpdMOpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUHJpeCB1bml0YWlyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlByaXggdG90YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuc19mb3JtdWxhLmdldFJhbmdlKFwiQTI6QTRcIikuY29udGVudCA9IFsyMyAgLCAxMiwgNDRdO1xuc19mb3JtdWxhLmdldFJhbmdlKFwiQjI6QjRcIikuZm9ybWF0KEZvcm1hdHMuZXVyb3MpLmNvbnRlbnQgPSBbMC4yLCAwLjMsIDAuNF07XG5cbnNfZm9ybXVsYS5nZXRSYW5nZShcIkMyOkM0XCIpLmZvcm1hdChGb3JtYXRzLmV1cm9zKS5jb250ZW50ID0gW1xuICAgIFwiPUEyKkIyXCIsXG4gICAgXCI9QTMqQjNcIixcbiAgICBcIj1BNCpCNFwiXG5dO1xuXG4vKiovXG5cblxuY29uc3Qgc19jb21wbGV4X2Zvcm11bGEgPSBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfY29tcGxleF9mb3JtdWxhJyk7XG5cbnNfY29tcGxleF9mb3JtdWxhLmdldFJhbmdlKFwiQTE6QzFcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIllcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGb3JtdWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG5cbnNfY29tcGxleF9mb3JtdWxhLmdldFJhbmdlKFwiQTI6QjRcIikuY29udGVudCA9IFtcbiAgICAyLCA0LFxuICAgIDEsIDUsXG4gICAgNCwgNl07XG5cbnNfY29tcGxleF9mb3JtdWxhLmdldFJhbmdlKFwiQzJcIikuY29udGVudCA9XG5gPSBBMipCMlxuICtBMypCM1xuICtBNCpCNGA7XG5cbi8qKi9cblxuY29uc3Qgc190eXBlcyA9IGF3YWl0IExJU1MucXMoJyNzaGVldF90eXBlcycpO1xuXG5cbnNfdHlwZXMuZ2V0UmFuZ2UoXCJBMTpFMVwiKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUZXh0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTm9tYnJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJCb29sw6llblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRm9ybXVsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuc190eXBlcy5nZXRSYW5nZShcIkEyOkUyXCIpLmNvbnRlbnQgPSBbXG4gICAgXCJIZWxsb1wiLFxuICAgIDIuMyxcbiAgICB0cnVlLFxuICAgIG5ldyBEYXRlKCksXG4gICAgXCI9QjIrMlwiXG5dXG5cblxuY29uc3Qgc19jdXJzb3IgPSBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfY3Vyc29yJyk7XG5cbnNfY3Vyc29yLmdldFJhbmdlKFwiQTE6SDFcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gXCIqXCI7XG5zX2N1cnNvci5nZXRSYW5nZShcIkE0Okg0XCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFwiKlwiO1xuXG5zX2N1cnNvci5nZXRSYW5nZShcIkQxOkU0XCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFwiKlwiO1xuXG5zX2N1cnNvci5nZXRSYW5nZShcIkExOkE0XCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFwiKlwiO1xuc19jdXJzb3IuZ2V0UmFuZ2UoXCJIMTpINFwiLCB0cnVlKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpLmNvbnRlbnQgPSBcIipcIjtcblxuXG5jb25zdCBzXyRmb3JtdWxhID0gW1xuICAgIGF3YWl0IExJU1MucXMoJyNzaGVldF9fX19mb3JtdWxhJyksXG4gICAgYXdhaXQgTElTUy5xcygnI3NoZWV0X3hfX2Zvcm11bGEnKSxcbiAgICBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfX3hfZm9ybXVsYScpLFxuICAgIGF3YWl0IExJU1MucXMoJyNzaGVldF94eF9mb3JtdWxhJylcbl1cblxuZm9yKGxldCBpID0gMDsgaSA8IHNfJGZvcm11bGEubGVuZ3RoOyArK2kpIHtcbiAgICBjb25zdCBzXyRmb3JtID0gc18kZm9ybXVsYVtpXTtcblxuICAgIHNfJGZvcm0uZ2V0UmFuZ2UoXCJBMTpEMVwiKS5mb3JtYXQoXCJib2xkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW50ID0gWzAsIDEsIDIsIDNdO1xuXG4gICAgc18kZm9ybS5nZXRSYW5nZShcIkEyOkE0XCIpLmZvcm1hdChcImJvbGRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQgPSBbMSwgMiwgM107XG5cbiAgICBsZXQgcmVmID0gXCI9QTFcIjtcbiAgICBpZiggaSA9PT0gMSlcbiAgICAgICAgcmVmID0gXCI9JEExXCI7XG4gICAgaWYoIGkgPT09IDIpXG4gICAgICAgIHJlZiA9IFwiPUEkMVwiO1xuICAgIGlmKCBpID09PSAzKVxuICAgICAgICByZWYgPSBcIj0kQSQxXCI7XG5cbiAgICBzXyRmb3JtLmdldFJhbmdlKFwiQjJcIikuY29udGVudCA9IHJlZjtcblxuICAgIHNfJGZvcm0uZ2V0UmFuZ2UoXCJBMTpENFwiKS5mb3JtYXQoXCJhbGlnbl9jZW50ZXJcIilcbn1cblxuY29uc3Qgc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uID0gYXdhaXQgTElTUy5xcygnI3NoZWV0X3JlY29waWVfbW90aXZhdGlvbicpO1xuXG5zaGVldF9yZWNvcGllX21vdGl2YXRpb24uZ2V0UmFuZ2UoXCJBMTpENFwiKS5mb3JtYXQoXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFtcbiAgICBcIkNvbnNvL2pvdXJcIiwgXCJDcmF5b25zXCIsIFwiR29tbWVzXCIsIFwiVG90YWwgKGpvdXIpXCIsXG4gICAgXCIwMS8wMVwiICAsIDIsIDMsIFwiPUIyK0MyXCIsIFxuICAgIFwiMDIvMDFcIiAgLCA0LCAxLCBcIj1DMytDM1wiLCBcbiAgICBcIlRvdGFsIChwcm9kKVwiICAsIFwiPUIyK0IzXCIsIFwiPUMyK0MzXCIsIFwiPUQyK0QzXCIsIFxuXTtcbnNoZWV0X3JlY29waWVfbW90aXZhdGlvbi5nZXRSYW5nZShcIkExOkQxXCIpLmZvcm1hdChcImJvbGRcIik7XG5zaGVldF9yZWNvcGllX21vdGl2YXRpb24uZ2V0UmFuZ2UoXCJBMjpBNFwiKS5mb3JtYXQoXCJib2xkXCIpO1xuXG5jb25zdCBzaGVldF9yZWNvcGllX21vdGl2YXRpb25fZW1wdHkgPSBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uX2VtcHR5Jyk7XG5cbnNoZWV0X3JlY29waWVfbW90aXZhdGlvbl9lbXB0eS5nZXRSYW5nZShcIkExOkQ0XCIpLmZvcm1hdChcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gW1xuICAgIFwiQ29uc28vam91clwiLCBcIkNyYXlvbnNcIiwgXCJHb21tZXNcIiwgXCJUb3RhbCAoam91cilcIixcbiAgICBcIjAxLzAxXCIgICwgMiwgMywgdW5kZWZpbmVkLCBcbiAgICBcIjAyLzAxXCIgICwgNCwgMSwgdW5kZWZpbmVkLCBcbiAgICBcIlRvdGFsIChwcm9kKVwiICAsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWRcbl07XG5zaGVldF9yZWNvcGllX21vdGl2YXRpb25fZW1wdHkuZ2V0UmFuZ2UoXCJBMTpEMVwiKS5mb3JtYXQoXCJib2xkXCIpO1xuc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uX2VtcHR5LmdldFJhbmdlKFwiQTI6QTRcIikuZm9ybWF0KFwiYm9sZFwiKTtcblxuY29uc3Qgc2hlZXRfcmVjb3BpZV9pbmNyID0gYXdhaXQgTElTUy5xcygnI3NoZWV0X3JlY29waWVfaW5jcicpO1xuXG5zaGVldF9yZWNvcGllX2luY3IuZ2V0UmFuZ2UoJ0ExOkEyJykuY29udGVudCA9IFsgMSwgbmV3IERhdGUoKSBdO1xuXG5cbi8vIHRlc3RcbmNvbnN0IGMgPSBgXG48dGFibGUgaWQ9XCJ1blwiPlxuICAgIDx0Ym9keT5cbiAgICAgICAgPHRyPjx0ZD5YWFg8L3RkPjwvdHI+XG4gICAgPC90Ym9keT5cbjwvdGFibGU+YDtcblxuY29uc3QgY3NzID0gYFxuICAgIHRkOm5vdChbY29udGVudGVkaXRhYmxlXSkge1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB9XG5gO1xuXG5jbGFzcyBYIGV4dGVuZHMgTElTUyh7XG4gICAgY29udGVudDogYywgY3NzXG59KSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgY29uc3QgdGQgPSB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJyN1biB0ZCcpITtcbiAgICAgICAgdGQudG9nZ2xlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcbiAgICAgICAgdGQuZm9jdXMoKTtcbiAgICAgICAgdGQudGV4dENvbnRlbnQgPSBcIllZWVwiO1xuICAgIH1cbn1cblxuTElTUy5kZWZpbmUoJ3Rlc3QtdGVzdCcsIFgpOyIsImltcG9ydCB7IHN0cjJodG1sIH0gZnJvbSBcInN0cnVjdC91dGlscy9zdHIyaHRtbFwiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0LCBDZWxsTGlzdCB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbmV4cG9ydCBjbGFzcyBSYW5nZU92ZXJsYXkgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG5cbiAgICAjc2hlZXQ6IENhbGNTaGVldDtcbiAgICAjcmFuZ2U6IHN0cmluZ3xudWxsID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgb3ZlcmxheTogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihzaGVldDogQ2FsY1NoZWV0LCAuLi5jbGFzc2xpc3Q6IHN0cmluZ1tdKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLiNzaGVldCA9IHNoZWV0O1xuICAgICAgICB0aGlzLiNzaGVldC5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub3ZlcmxheSA9IHN0cjJodG1sKGA8ZGl2IGNsYXNzPSdvdmVybGF5Jz48L2Rpdj5gKTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NsaXN0KTtcblxuICAgICAgICBzaGVldC5jb250ZW50LmFwcGVuZCggdGhpcy5vdmVybGF5ICk7XG4gICAgfVxuXG4gICAgc2V0UmFuZ2UocmFuZ2U6IENlbGxMaXN0fG51bGwpIHtcbiAgICAgICAgdGhpcy4jcmFuZ2UgPSByYW5nZSA9PT0gbnVsbCA/IG51bGwgOiByYW5nZS5wbGFnZV9uYW1lITtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0UmVjdCguLi5yZWN0OiByZWFkb25seSBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSkge1xuICAgICAgICByZXR1cm4gcmVjdDtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIiwgdGhpcy4jcmFuZ2UgPT09IG51bGwpO1xuXG4gICAgICAgIGlmKCB0aGlzLiNyYW5nZSA9PT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuZ2V0UmVjdCggLi4udGhpcy4jc2hlZXQuZ2V0UmVjdCggdGhpcy4jc2hlZXQuZ2V0UmFuZ2UodGhpcy4jcmFuZ2UpICkgKTtcbiAgICAgICAgdGhpcy4jc2hlZXQuc2V0UmVjdCh0aGlzLm92ZXJsYXksIHJlY3QgKTtcbiAgICB9XG5cbiAgICBvdmVycmlkZSBhZGRFdmVudExpc3RlbmVyKHR5cGU6IHN0cmluZywgY2FsbGJhY2s6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QgfCBudWxsLCBvcHRpb25zPzogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMgfCBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIG92ZXJyaWRlIHJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZTogc3RyaW5nLCBjYWxsYmFjazogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCB8IG51bGwsIG9wdGlvbnM/OiBFdmVudExpc3RlbmVyT3B0aW9ucyB8IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLm92ZXJsYXkucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgb3B0aW9ucyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm9ybXVsYVJlZiBleHRlbmRzIFJhbmdlT3ZlcmxheSB7XG5cbiAgICBjb25zdHJ1Y3RvcihzaGVldDogQ2FsY1NoZWV0KSB7XG4gICAgICAgIHN1cGVyKHNoZWV0LCBcInJhbmdlX2hpZ2hsaWdodFwiKTtcbiAgICB9XG5cbiAgICAjY3VyX2NvbG9yID0gMDtcbiAgICBzZXRDb2xvcihjb2xvcl9pZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKGBoaWdobGlnaHRfJHt0aGlzLiNjdXJfY29sb3J9YCk7IFxuICAgICAgICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LmFkZChgaGlnaGxpZ2h0XyR7Y29sb3JfaWR9YCk7XG4gICAgICAgIHRoaXMuI2N1cl9jb2xvciA9IGNvbG9yX2lkO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlY29weUhhbmRsZSBleHRlbmRzIFJhbmdlT3ZlcmxheSB7XG5cbiAgICBjb25zdHJ1Y3RvcihzaGVldDogQ2FsY1NoZWV0KSB7XG4gICAgICAgIHN1cGVyKHNoZWV0LCBcInJlY29weVwiKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0UmVjdCh4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIFt4K3ctMiwgeStoLTIsIDUsIDVdIGFzIGNvbnN0O1xuICAgIH1cblxufSIsImltcG9ydCB7IEZvcm11bGEgfSBmcm9tIFwiLi9mb3JtdWxhX3BhcnNlclwiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0LCBDZWxsLCBDZWxsTGlzdCwgUmF3Q29udGVudFR5cGUgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5leHBvcnQgY2xhc3MgRm9ybWF0TWFuYWdlciB7XG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCkge1xuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgc2hlZXQuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2OiBLZXlib2FyZEV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGlmKCAhIGV2LmN0cmxLZXkgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ2InKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcImJvbGRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnaScpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KFwiaXRhbGljXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ3UnKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcInVuZGVybGluZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdsJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJhbGlnbl9sZWZ0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ3InKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcImFsaWduX3JpZ2h0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ2UnKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcImFsaWduX2NlbnRlclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICc0JyAmJiBldi5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoRm9ybWF0cy5ldXJvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnNScgJiYgZXYuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KEZvcm1hdHMucG91cmNlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJzEnICYmIGV2LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChGb3JtYXRzLm51bWJlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgICAgICAvKiBUT0RPIGxpc3RlbiAqL1xuXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxvYXQyRGF0ZShmbG9hdDogbnVtYmVyKSB7XG5cbiAgICBsZXQgY29udGVudCA9IG5ldyBEYXRlKFwiMTg5OS0xMi0zMFwiKTtcblxuICAgIGNvbnRlbnQuc2V0RGF0ZSggY29udGVudC5nZXREYXRlKCkgKyBmbG9hdCk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkYXRlMkZsb2F0KGRhdGU6IERhdGUpIHtcbiAgICBjb25zdCBiZWcgPSBuZXcgRGF0ZShcIjE4OTktMTItMzBcIik7XG4gICAgcmV0dXJuICsoKGRhdGUuZ2V0VGltZSgpIC0gYmVnLmdldFRpbWUoKSkgLyAoMjQqMzYwMCoxMDAwKSkudG9GaXhlZCg3KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFJhdyhwdGhpczogQ2VsbCwgdmFsdWUgPSBwdGhpcy5yYXdDb250ZW50KSB7XG4gICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRm9ybXVsYSlcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIEZvcm1hdHMuZGVmYXVsdC5jYWxsKHB0aGlzLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBjb25zdCBGb3JtYXRzID0ge1xuXG4gICAgZGVmYXVsdDogZnVuY3Rpb24odGhpczogQ2VsbHxudWxsLCB2YWx1ZSA9IHRoaXM/LnJhd0NvbnRlbnQpIHtcblxuICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBGb3JtdWxhKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5jYWNoZWRWYWx1ZSgpO1xuXG4gICAgICAgIGNvbnN0IHByZWMgPSArKHRoaXM/LmdldEF0dHJpYnV0ZSgncHJlY2lzaW9uJykgPz8gMik7XG5cbiAgICAgICAgaWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuXG4gICAgICAgICAgICBpZiggdGhpcz8uZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSA9PT0gXCJwb3VyY2VudFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBgJHsrKCAoK3ZhbHVlKSoxMDApLnRvUHJlY2lzaW9uKDcpfWAucmVwbGFjZSgnLicsICcsJykgKyBcIiVcIjtcblxuICAgICAgICAgICAgcmV0dXJuIGAkeyt2YWx1ZS50b1ByZWNpc2lvbig3KX1gLnJlcGxhY2UoJy4nLCAnLCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPyAnVlJBSScgOiAnRkFVWCc7XG5cbiAgICAgICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUZSXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlITtcbiAgICB9LFxuICAgIG51bWJlcjogZnVuY3Rpb24odGhpczpDZWxsLCB2YWx1ZSA9IHRoaXMucmF3Q29udGVudCkge1xuXG4gICAgICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIEZvcm11bGEpXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmNhY2hlZFZhbHVlKCk7XG5cbiAgICAgICAgaWYodmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuXG4gICAgICAgIGlmKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSlcbiAgICAgICAgICAgIHZhbHVlID0gZGF0ZTJGbG9hdCh2YWx1ZSk7XG5cbiAgICAgICAgaWYoIHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIpICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtdHlwZVwiLCBcIm51bWJlclwiKTtcblxuICAgICAgICAgICAgaWYoICEgKHRoaXMucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEpIClcbiAgICAgICAgICAgICAgICBDYWxjU2hlZXQuZ2V0U2hlZXRGcm9tQ2VsbCh0aGlzKS5nZXRSYW5nZSh0aGlzKS5jb250ZW50ID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmVjID0gKyh0aGlzLmdldEF0dHJpYnV0ZSgncHJlY2lzaW9uJykgPz8gMik7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjLFxuICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjXG4gICAgICAgICAgICB9KTtcbiAgICB9LFxuICAgIHBvdXJjZW50OiBmdW5jdGlvbih0aGlzOkNlbGwsIHZhbHVlID0gdGhpcy5yYXdDb250ZW50KSB7XG5cbiAgICAgICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRm9ybXVsYSlcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuY2FjaGVkVmFsdWUoKTtcblxuICAgICAgICBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIGlmKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSlcbiAgICAgICAgICAgIHZhbHVlID0gZGF0ZTJGbG9hdCh2YWx1ZSk7XG5cbiAgICAgICAgaWYoIHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIpICE9PSBcInBvdXJjZW50XCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIsIFwicG91cmNlbnRcIik7XG4gICAgICAgICAgICBpZiggISAodGhpcy5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSkgKVxuICAgICAgICAgICAgICAgIENhbGNTaGVldC5nZXRTaGVldEZyb21DZWxsKHRoaXMpLmdldFJhbmdlKHRoaXMpLmNvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZWMgPSArKHRoaXMuZ2V0QXR0cmlidXRlKCdwcmVjaXNpb24nKSA/PyAyKTtcblxuICAgICAgICByZXR1cm4gKHZhbHVlICogMTAwKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHtcbiAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogcHJlYyxcbiAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogcHJlY1xuICAgICAgICAgICAgfSkgKyAnJSc7XG4gICAgfSxcbiAgICBkYXRlOiBmdW5jdGlvbih0aGlzOkNlbGwsIHZhbHVlID0gdGhpcy5yYXdDb250ZW50KSB7XG4gICAgICAgIFxuICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBGb3JtdWxhKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5jYWNoZWRWYWx1ZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgIGlmKHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIGlmKCB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG5cbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIiwgXCJkYXRlXCIpO1xuXG4gICAgICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgKSB7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IHZhbHVlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUZSXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUuc2xpY2UoMCwgNikgKyBkYXRlLnNsaWNlKDgpO1xuICAgICAgICB9IGlmKCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGZsb2F0MkRhdGUodmFsdWUpO1xuXG4gICAgICAgICAgICBpZiggISAodGhpcy5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSkgKVxuICAgICAgICAgICAgICAgIENhbGNTaGVldC5nZXRTaGVldEZyb21DZWxsKHRoaXMpLmdldFJhbmdlKCB0aGlzICkuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBkYXRlID0gY29udGVudC50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRlLnNsaWNlKDAsIDYpICsgZGF0ZS5zbGljZSg4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIGV1cm9zOiBmdW5jdGlvbih0aGlzOkNlbGwsIHZhbHVlID0gdGhpcy5yYXdDb250ZW50KSB7XG5cbiAgICAgICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRm9ybXVsYSlcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuY2FjaGVkVmFsdWUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG5cbiAgICAgICAgaWYodmFsdWUgaW5zdGFuY2VvZiBEYXRlKVxuICAgICAgICAgICAgdmFsdWUgPSBkYXRlMkZsb2F0KHZhbHVlKTtcblxuICAgICAgICBpZiggdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIikgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIsIFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgaWYoICEgKHRoaXMucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEpIClcbiAgICAgICAgICAgICAgICBDYWxjU2hlZXQuZ2V0U2hlZXRGcm9tQ2VsbCh0aGlzKS5nZXRSYW5nZSh0aGlzKS5jb250ZW50ID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmVjID0gKyh0aGlzLmdldEF0dHJpYnV0ZSgncHJlY2lzaW9uJykgPz8gMik7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjLFxuICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjXG4gICAgICAgICAgICB9KSArICfigqwnO1xuICAgICAgICAvLy50b0ZpeGVkKDIpICsgJ+KCrCc7XG4gICAgfSxcbn1cblxuZXhwb3J0IGNsYXNzIEZvcm1hdCB7XG5cbiAgICAjZm9ybWF0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoZm9ybWF0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgICAgIHRoaXMuI2Zvcm1hdCA9IGZvcm1hdDtcbiAgICB9XG5cbiAgICBhcHBseVRvKGNlbGw6IENlbGx8Q2VsbExpc3QpIHtcblxuICAgICAgICBpZiggY2VsbCBpbnN0YW5jZW9mIENlbGxMaXN0KSB7XG5cbiAgICAgICAgICAgIGZvcihsZXQgYyBvZiBjZWxsLmNlbGxzKVxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlUbyhjKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCBuYW1lIGluIHRoaXMuI2Zvcm1hdCkge1xuICAgICAgICAgICAgbGV0IHZhbCA9IHRoaXMuI2Zvcm1hdFtuYW1lXTtcblxuICAgICAgICAgICAgaWYobmFtZSA9PT0gJ2Zvcm1hdCcpIHtcblxuICAgICAgICAgICAgICAgIGlmKCB2YWwgPT09IG51bGwpIHtcblxuICAgICAgICAgICAgICAgICAgICBjZWxsLmZvcm1hdCA9IEZvcm1hdHMuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGNlbGwuZm9ybWF0KCk7IC8vVE9ETzogaWYgZmN0XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNlbGwuZm9ybWF0ID0gdmFsO1xuICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBjZWxsLmZvcm1hdCggY2VsbC5yYXdDb250ZW50KTsgLy9UT0RPOiBpZiBmY3RcblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihuYW1lID09PSAncHJlY2lzaW9uJykge1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdwcmVjaXNpb24nLCB2YWwpO1xuICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBjZWxsLmZvcm1hdD8uKCBjZWxsLnJhd0NvbnRlbnQpOyAvL1RPRE86IGlmIGZjdFxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiggbmFtZSA9PT0gJ3NwYW4nICkge1xuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBzaGVldCA9IENhbGNTaGVldC5nZXRTaGVldEZyb21DZWxsKGNlbGwpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKCB2YWxbMF0gPT09IDEgJiYgdmFsWzFdID09PSAxKSB7IC8vIHVubWVyZ2VcblxuICAgICAgICAgICAgICAgICAgICBsZXQgciA9ICsoY2VsbC5nZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nKSA/PyAwKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGMgPSArKGNlbGwuZ2V0QXR0cmlidXRlKCdjb2xzcGFuJykgPz8gMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHI7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBjOyArK2opIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBzaGVldC5yZWxhdGl2ZVRvKGNlbGwsIGksIGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0YXJnZXQuY2VsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNlbGwucmVtb3ZlQXR0cmlidXRlKCdyb3dzcGFuJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwucmVtb3ZlQXR0cmlidXRlKCdjb2xzcGFuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCBgJHt2YWxbMF19YCk7XG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCBgJHt2YWxbMV19YCk7XG5cbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdmFsWzBdOyArK2kpXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB2YWxbMV07ICsraikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaSA9PT0gMCAmJiBqID09PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBzaGVldC5yZWxhdGl2ZVRvKGNlbGwsIGksIGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNlbGwgPSBjZWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIHR5cGVvZiB2YWwgPT09IFwiYm9vbGVhblwiKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggbmFtZS5zdGFydHNXaXRoKCdhbGlnbl8nKSApIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdhbGlnbl9sZWZ0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYWxpZ25fY2VudGVyJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYWxpZ25fcmlnaHQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoIG5hbWUuc3RhcnRzV2l0aCgndmFsaWduXycpICkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlnbl90b3AnKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZ25fbWlkZGxlJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWduX2JvdHRvbScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnRvZ2dsZShuYW1lLCB2YWwpO1xuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNlbGwuc3R5bGUuc2V0UHJvcGVydHkoYC0tJHtuYW1lfWAsIHZhbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQcm9wZXJ0eShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2Zvcm1hdFtuYW1lXTtcbiAgICB9XG4gICAgaGFzUHJvcGVydHkobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuYW1lIGluIHRoaXMuI2Zvcm1hdDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZXh0cmFjdEZvcm1hdChjZWxsOiBDZWxsfENlbGxMaXN0KTogRm9ybWF0IHtcbiAgICAgICAgXG4gICAgICAgIGlmKCBjZWxsIGluc3RhbmNlb2YgQ2VsbExpc3QpIHtcblxuICAgICAgICAgICAgY29uc3QgY2VsbHMgPSBjZWxsLmNlbGxzO1xuXG4gICAgICAgICAgICBsZXQgZm9ybWF0ID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHNbMF0pO1xuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgY2VsbHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBsZXQgZjIgPSBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxsc1tpXSk7XG5cbiAgICAgICAgICAgICAgICBmb3IobGV0IGtleSBpbiBmb3JtYXQuI2Zvcm1hdClcbiAgICAgICAgICAgICAgICAgICAgaWYoICEgKGtleSBpbiBmMi4jZm9ybWF0KSB8fCBmMi4jZm9ybWF0W2tleV0gIT09IGZvcm1hdC4jZm9ybWF0W2tleV0gKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGZvcm1hdC4jZm9ybWF0W2tleV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBmb3JtYXQgPSBPYmplY3QuZnJvbUVudHJpZXM8YW55PiggWy4uLmNlbGwuY2xhc3NMaXN0LnZhbHVlcygpXS5tYXAoZSA9PiBbZSwgdHJ1ZV0pICk7XG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2VsbC5zdHlsZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBjZWxsLnN0eWxlLml0ZW0oaSk7XG4gICAgICAgICAgICBpZiggISBuYW1lLnN0YXJ0c1dpdGgoJy0tJykgKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgZm9ybWF0W25hbWUuc2xpY2UoMildID0gY2VsbC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29sc3BhbiA9ICsoY2VsbC5nZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nKSA/PyAxKTtcbiAgICAgICAgY29uc3Qgcm93c3BhbiA9ICsoY2VsbC5nZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nKSA/PyAxKTtcblxuICAgICAgICBpZiggY29sc3BhbiA+IDEgfHwgcm93c3BhbiA+IDEgKVxuICAgICAgICAgICAgZm9ybWF0LnNwYW4gPSBbIHJvd3NwYW4sIGNvbHNwYW4gXTtcblxuICAgICAgICBpZiggISAoXCJmb250X3NpemVcIiBpbiBmb3JtYXQpIClcbiAgICAgICAgICAgIGZvcm1hdFsnZm9udF9zaXplJ10gPSAnMTBwdCc7XG5cbiAgICAgICAgaWYoIFwiZm9ybWF0XCIgaW4gY2VsbClcbiAgICAgICAgICAgIGZvcm1hdC5mb3JtYXQgPSBjZWxsLmZvcm1hdDtcblxuICAgICAgICBpZiggY2VsbC5oYXNBdHRyaWJ1dGUoJ3ByZWNpc2lvbicpIClcbiAgICAgICAgICAgIGZvcm1hdC5wcmVjaXNpb24gPSBjZWxsLmdldEF0dHJpYnV0ZSgncHJlY2lzaW9uJyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBGb3JtYXQoZm9ybWF0KTtcbiAgICB9XG59IiwiLy9UT0RPOiB3ZWJwYWNrIGNvbmZpZy4uLlxuaW1wb3J0IExJU1MgZnJvbSBcIi4uLy4uLy4uL2xpYnMvTElTU1wiO1xuaW1wb3J0IHsgZm9ybWF0UmF3LCBGb3JtYXRzIH0gZnJvbSBcIi4vZm9ybWF0XCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGwgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5jb25zdCBjc3MgPSBgXG4gICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYgcHJlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKCAxcmVtICsgOHB4ICsgMnB4ICk7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xpYmVyYXRpb24gU2Fucyc7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5cbmV4cG9ydCBjbGFzcyBDYWxjRm9ybXVsYSBleHRlbmRzIExJU1Moe1xuICAgIGNzc1xufSkge1xuXG4gICAgI2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XG4gICAgI3NoZWV0ICAhOiBDYWxjU2hlZXQ7XG4gICAgI2N1cl9jZWxsOiBDZWxsfG51bGwgPSBudWxsO1xuICAgICNvbklucHV0OiAoZXY6IEV2ZW50KSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCggdGhpcy4jaW5wdXQgKTtcblxuICAgICAgICB0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IHtcblxuICAgICAgICAgICAgaWYoIHRoaXMuI2N1cl9jZWxsID09PSBudWxsIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIC8vdGhpcy4jc2hlZXQuY3Vyc29yLmNvbnRlbnQgPSB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCE7XG4gICAgICAgICAgICB0aGlzLiNzaGVldC5zdGF0ZXMuY2VsbF9lZGl0LnN0YXRlID0gbnVsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsICgpID0+IHtcblxuICAgICAgICAgICAgaWYoIHRoaXMuI2N1cl9jZWxsID09PSBudWxsIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPSB0aGlzLiNjdXJfY2VsbDtcbiAgICAgICAgICAgIC8vdGhpcy4jY3VyX2NlbGwhLnRleHRDb250ZW50ID0gdGhpcy4jaW5wdXQudGV4dENvbnRlbnQhO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmKCB0aGlzLiNjdXJfY2VsbCA9PT0gbnVsbCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLiNjdXJfY2VsbCEudGV4dENvbnRlbnQgPSBmb3JtYXRSYXcodGhpcy4jY3VyX2NlbGwsIHRoaXMuI2lucHV0LnRleHRDb250ZW50ISApO1xuICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KCdpbnB1dCcsIHtkZXRhaWw6IHRydWV9KSApO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNvbklucHV0ID0gKGV2OiBFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIGlmKCBldi5kZXRhaWwgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy4jaW5wdXQudGV4dENvbnRlbnQgPSBmb3JtYXRSYXcoIHRoaXMuI2N1cl9jZWxsISwgdGhpcy4jY3VyX2NlbGwhLnRleHRDb250ZW50ISApO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN5bmNUbyhzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcbiAgICAgICAgY29uc3QgY3Vyc29yID0gdGhpcy4jc2hlZXQuY3Vyc29yO1xuXG4gICAgICAgIHNoZWV0Lmhvc3QuYWRkRXZlbnRMaXN0ZW5lcigndXBkYXRlJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdGhpcy4jaW5wdXQudGV4dENvbnRlbnQgPSBmb3JtYXRSYXcoY3Vyc29yLmZpcnN0Q2VsbCApO1xuICAgICAgICB9KVxuXG4gICAgICAgIGN1cnNvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gY3Vyc29yLmNlbGxzO1xuXG4gICAgICAgICAgICB0aGlzLiNpbnB1dC50b2dnbGVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICEgc2hlZXQuaXNSTyApO1xuXG4gICAgICAgICAgICBpZiggY2VsbHMubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggdGhpcy4jY3VyX2NlbGwgIT09IG51bGwgKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNjdXJfY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuI29uSW5wdXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsID0gY2VsbHNbMF07XG4gICAgICAgICAgICB0aGlzLiNjdXJfY2VsbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuI29uSW5wdXQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCA9IGZvcm1hdFJhdyggdGhpcy4jY3VyX2NlbGwgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbkxJU1MuZGVmaW5lKCdjYWxjLWZvcm11bGEnLCBDYWxjRm9ybXVsYSk7IiwiaW1wb3J0IHsgZGF0ZTJGbG9hdCwgRm9ybWF0cyB9IGZyb20gXCIuL2Zvcm1hdFwiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0LCBWYWx1ZVR5cGUgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5leHBvcnQgY2xhc3MgRm9ybXVsYSB7XG5cbiAgICAjc3RyOiBzdHJpbmc7XG4gICAgI2V4ZWM6IChzaGVldDogQ2FsY1NoZWV0KSA9PiBWYWx1ZVR5cGU7XG4gICAgI3JhbmdlczogVG9rZW5bXTtcblxuICAgICNjYWNoZTogVmFsdWVUeXBlfG51bGwgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3Ioc3RyOiBzdHJpbmcsIGV4ZWM6IChzaGVldDogQ2FsY1NoZWV0KSA9PiBWYWx1ZVR5cGUsIHJhbmdlc190b2tlbjogVG9rZW5bXSA9IFtdKSB7XG5cbiAgICAgICAgdGhpcy4jc3RyID0gc3RyO1xuICAgICAgICB0aGlzLiNleGVjID0gZXhlYztcbiAgICAgICAgdGhpcy4jcmFuZ2VzID0gcmFuZ2VzX3Rva2VuO1xuICAgIH1cbiAgICBcbiAgICByZWxhdGl2ZVRvKCBzaGVldDogQ2FsY1NoZWV0LCBkcm93OiBudW1iZXIsIGRjb2w6IG51bWJlcikge1xuICAgICAgICBcbiAgICAgICAgbGV0IG5ld19yYW5nZXMgPSB0aGlzLiNyYW5nZXMubWFwKHIgPT4ge1xuXG4gICAgICAgICAgICAvL1RPRE86IGlmIHJhbmdlLi4uXG4gICAgICAgICAgICBsZXQgcG9zID0gWy4uLnNoZWV0LmNlbGxQb3MoIHNoZWV0LmdldFJhbmdlKHIudmFsdWUpLmZpcnN0Q2VsbCApXTtcbiAgICBcbiAgICAgICAgICAgIGlmKCByLnZhbHVlLmxhc3RJbmRleE9mKCckJykgPD0gMCApXG4gICAgICAgICAgICAgICAgcG9zWzBdICs9IGRyb3c7XG4gICAgICAgICAgICBpZiggci52YWx1ZVswXSAhPT0gJyQnIClcbiAgICAgICAgICAgICAgICBwb3NbMV0gKz0gZGNvbDtcblxuICAgICAgICAgICAgcmV0dXJuIGAke1N0cmluZy5mcm9tQ2hhckNvZGUoNjUrcG9zWzFdLTEpfSR7cG9zWzBdfWA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBuZXdfZm9ybXVsYSA9IFwiXCI7XG5cbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLiNyYW5nZXMubGVuZ3RoOyArK2kpIHtcblxuICAgICAgICAgICAgbmV3X2Zvcm11bGEgKz0gdGhpcy4jc3RyLnNsaWNlKG9mZnNldCwgdGhpcy4jcmFuZ2VzW2ldLmJlZyk7XG4gICAgICAgICAgICBuZXdfZm9ybXVsYSArPSBuZXdfcmFuZ2VzW2ldO1xuXG4gICAgICAgICAgICBvZmZzZXQgPSB0aGlzLiNyYW5nZXNbaV0uZW5kO1xuICAgICAgICB9XG4gICAgICAgIG5ld19mb3JtdWxhICs9IHRoaXMuI3N0ci5zbGljZShvZmZzZXQpO1xuICAgICAgICBcbiAgICAgICAgLy9jYW4gYmUgb3B0aW1pemVkLi4uXG4gICAgICAgIHJldHVybiBwYXJzZV9mb3JtdWxhKCBuZXdfZm9ybXVsYSApO1xuICAgIH1cblxuICAgIGdldCByYW5nZXNUb2tlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3JhbmdlcztcbiAgICB9XG5cbiAgICByZXNldENhY2hlKCkge1xuICAgICAgICB0aGlzLiNjYWNoZSA9IG51bGw7XG4gICAgfVxuXG4gICAgY2FjaGVkVmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjYWNoZSE7XG4gICAgfVxuXG4gICAgZXhlYyhzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgaWYoIHRoaXMuI2NhY2hlICE9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuI2NhY2hlO1xuXG4gICAgICAgIHJldHVybiB0aGlzLiNjYWNoZSA9IHRoaXMuI2V4ZWMoc2hlZXQpO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jc3RyO1xuICAgIH1cbn1cblxudHlwZSBUb2tlbiA9IHtcbiAgICBiZWc6IG51bWJlcixcbiAgICBlbmQ6IG51bWJlcixcbiAgICB2YWx1ZTogc3RyaW5nLFxuICAgIHR5cGU6IFwic3RyaW5nXCJ8XCJudW1iZXJcInxcImNhbGxcInxcInJhbmdlXCJ8XCJvcFwiXG59XG5cblxuZnVuY3Rpb24gZXh0cmFjdFRva2VuKHN0cjogc3RyaW5nLCBvZmZzZXQ6IG51bWJlcikge1xuXG4gICAgd2hpbGUoIFsnICcsICdcXG4nLCAnXFx0J10uaW5jbHVkZXMoc3RyW29mZnNldF0pICkgLy8gaWdub3JlIHdoaXRlc3BhY2VzXG4gICAgICAgICsrb2Zmc2V0O1xuXG4gICAgbGV0IHRva2VuOiBQYXJ0aWFsPFRva2VuPiA9IHtcbiAgICAgICAgYmVnOiBvZmZzZXRcbiAgICB9O1xuXG4gICAgaWYoc3RyW29mZnNldF0gPT09ICdcIicpIHtcbiAgICAgICAgdG9rZW4udHlwZSA9IFwic3RyaW5nXCI7XG4gICAgICAgIHdoaWxlKCBzdHJbKytvZmZzZXRdICE9PSAnXCInICYmIHN0cltvZmZzZXQtMV0gIT09ICdcXFxcJykge1xuICAgICAgICAgICAgaWYob2Zmc2V0KzEgPj0gc3RyLmxlbmd0aCApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JtdWxhIHBhcnNpbmcgZXJyb3InKTtcbiAgICAgICAgfVxuICAgICAgICArK29mZnNldDtcbiAgICB9IGVsc2UgaWYoIHN0cltvZmZzZXRdID09PSAnLCcgfHwgKHN0cltvZmZzZXRdID49ICcwJyAmJiBzdHJbb2Zmc2V0XSA8PSAnOScpICkge1xuICAgICAgICB0b2tlbi50eXBlID0gXCJudW1iZXJcIjtcbiAgICAgICAgbGV0IGhhc0NvbW1hID0gZmFsc2U7XG4gICAgICAgIHdoaWxlKCBzdHJbb2Zmc2V0XSA9PT0gJywnIHx8IHN0cltvZmZzZXRdID49ICcwJyAmJiBzdHJbb2Zmc2V0XSA8PSAnOScgKSB7XG5cbiAgICAgICAgICAgIGlmKCBzdHJbb2Zmc2V0XSA9PT0gJywnICkge1xuICAgICAgICAgICAgICAgIGlmKGhhc0NvbW1hID09PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Zvcm11bGEgcGFyc2luZyBlcnJvcicpO1xuICAgICAgICAgICAgICAgIGhhc0NvbW1hID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgKytvZmZzZXQ7XG4gICAgICAgIH1cblxuICAgIH0gZWxzZSBpZiggc3RyW29mZnNldF0gPT09ICckJyB8fCBzdHJbb2Zmc2V0XSA+PSAnQScgJiYgc3RyW29mZnNldF0gPD0gJ1onKSB7IC8vKyRcbiAgICAgICAgXG4gICAgICAgIHdoaWxlKCBvZmZzZXQgPCBzdHIubGVuZ3RoXG4gICAgICAgICAgICAgICAgJiYgKHN0cltvZmZzZXRdID09PSAnJCcgfHwgc3RyW29mZnNldF0gPj0gJ0EnICYmIHN0cltvZmZzZXRdIDw9ICdaJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHN0cltvZmZzZXRdID49ICcwJyAmJiBzdHJbb2Zmc2V0XSA8PSAnOSdcbiAgICAgICAgICAgICAgICAgICAgKSApXG4gICAgICAgICAgICArK29mZnNldDtcblxuICAgICAgICB0b2tlbi50eXBlID0gc3RyW29mZnNldF0gPT09ICcoJyA/ICdjYWxsJyA6ICdyYW5nZSc7XG5cbiAgICAgICAgaWYoIHN0cltvZmZzZXRdID09PSAnKCcgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3QgaW1wbGVtZW50ZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRva2VuLnR5cGUgPSBcIm9wXCI7IC8vIG9ubHkgb24gY2hhciA/Pz9cblxuICAgICAgICBpZiggc3RyW29mZnNldCArIDFdID09PSAnPScpIC8vID49IC8gPD1cbiAgICAgICAgICAgICsrb2Zmc2V0O1xuICAgICAgICBlbHNlIGlmKCBzdHJbb2Zmc2V0ICsgMV0gPT09ICc+JykgLy8gPD5cbiAgICAgICAgICAgICsrb2Zmc2V0O1xuXG4gICAgICAgICsrb2Zmc2V0O1xuICAgIH1cblxuICAgIHRva2VuLmVuZCA9IG9mZnNldDtcbiAgICB0b2tlbi52YWx1ZSA9IHN0ci5zbGljZSh0b2tlbi5iZWcsIHRva2VuLmVuZCk7XG5cbiAgICByZXR1cm4gdG9rZW4gYXMgUmVxdWlyZWQ8VG9rZW4+O1xufVxuXG5jbGFzcyBOb2RlIHtcblxuICAgIGNoaWxkcmVuOiBOb2RlW107XG4gICAgI2ZjdDogKHNoZWV0OiBDYWxjU2hlZXQsIC4uLmFyZ3M6KFZhbHVlVHlwZSlbXSkgPT4gVmFsdWVUeXBlO1xuXG4gICAgY29uc3RydWN0b3IoZmN0OiAoc2hlZXQ6IENhbGNTaGVldCwgLi4uYXJnczooVmFsdWVUeXBlKVtdKSA9PiBWYWx1ZVR5cGUsIC4uLmNoaWxkcmVuOiBOb2RlW10pIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgICBpZihjaGlsZHJlbiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV1RGXCIpO1xuICAgICAgICB0aGlzLiNmY3QgPSBmY3Q7XG4gICAgfVxuXG4gICAgZXZhbChzaGVldDogQ2FsY1NoZWV0KTogVmFsdWVUeXBlIHtcbiAgICAgICAgY29uc3QgYXJncyA9IHRoaXMuY2hpbGRyZW4ubWFwKCBjID0+IGMuZXZhbChzaGVldCkgKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2ZjdChzaGVldCwgLi4uYXJncyApO1xuICAgIH1cbiAgICBcbn1cblxuZnVuY3Rpb24gdG9OdW1iZXIoYTogdW5rbm93bik6IG51bWJlciB7XG5cbiAgICBpZihhID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiAwO1xuXG4gICAgaWYoIHR5cGVvZiBhID09PSBcInN0cmluZ1wiKVxuICAgICAgICByZXR1cm4gTnVtYmVyKGEpO1xuXG4gICAgaWYoIGEgaW5zdGFuY2VvZiBEYXRlKVxuICAgICAgICByZXR1cm4gZGF0ZTJGbG9hdChhKTtcblxuICAgIHJldHVybiBhIGFzIHVua25vd24gYXMgbnVtYmVyO1xufVxuXG5jb25zdCBvcF9pbXBsID0ge1xuICAgICclJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93bikgPT4gdG9OdW1iZXIoYSkvMTAwLFxuICAgICd1LisnOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duKSA9PiArdG9OdW1iZXIoYSksXG4gICAgJ3UuLSc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24pID0+IC10b051bWJlcihhKSxcbiAgICAnKic6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24sIGI6IHVua25vd24pID0+IHRvTnVtYmVyKGEpKnRvTnVtYmVyKGIpLFxuICAgICcvJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93biwgYjogdW5rbm93bikgPT4gdG9OdW1iZXIoYSkvdG9OdW1iZXIoYiksXG4gICAgJysnOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiB0b051bWJlcihhKSt0b051bWJlcihiKSxcbiAgICAnLSc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24sIGI6IHVua25vd24pID0+IHRvTnVtYmVyKGEpLXRvTnVtYmVyKGIpLFxuICAgICdeJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93biwgYjogdW5rbm93bikgPT4gTWF0aC5wb3codG9OdW1iZXIoYSksdG9OdW1iZXIoYikgKSxcbiAgICAnJic6IChfOiBDYWxjU2hlZXQsIGE6IHN0cmluZywgYjogc3RyaW5nKSA9PiBgJHtGb3JtYXRzLmRlZmF1bHQuY2FsbChudWxsLCBhKX0ke0Zvcm1hdHMuZGVmYXVsdC5jYWxsKG51bGwsIGIpfWAsXG4gICAgJz0nOiAgKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPT09IGIsXG4gICAgJzw+JzogKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgIT09IGIsXG4gICAgJz4nOiAgKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPiBiLFxuICAgICc+PSc6IChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhID49IGIsXG4gICAgJzwnOiAgKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPCBiLFxuICAgICc8PSc6IChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhIDw9IGIsXG59IGFzIFJlY29yZDxzdHJpbmcsIChfOiBDYWxjU2hlZXQsIC4uLmFyZ3M6VmFsdWVUeXBlW10pID0+IFZhbHVlVHlwZT47XG5cbi8vIGh0dHBzOi8vaGVscC5saWJyZW9mZmljZS5vcmcvbGF0ZXN0L2VuLVVTL3RleHQvc2NhbGMvMDEvMDQwNjAxOTkuaHRtbFxuY29uc3Qgb3BfcHJpbyA9IFtcbiAgICBbJzonXSwgLy8gcmFuZ2VcbiAgICBbJyEnXSwgLy8gcmFuZ2UgaW50ZXJzZWN0aW9uXG4gICAgWyd+J10sIC8vIHJhbmdlIHVuaW9uXG4gICAgWyd1LisnLCAndS4tJ10sIC8vIHVuYXJ5IC0gZnJvbSByaWdodCB0byBsZWZ0Li4uXG4gICAgWyclJ10sIC8vIHBvc3RmaXgsIC8xMDBcbiAgICBbJ14nXSwgLy8gcG93ZXJcbiAgICBbJyonLCAnLyddLFxuICAgIFsnKycsICctJ10sXG4gICAgWycmJ10sIC8vIHN0cmluZyBjb25jYXRcbiAgICBbJz0nLCAnPD4nLCAnPCcsICc8PScsICc+JywgJz49J10gLy8gY29tcGFyZVxuXTtcblxubGV0IG9wczogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHt9O1xuZm9yKGxldCBpID0gMDsgaSA8IG9wX3ByaW8ubGVuZ3RoOyArK2kpXG4gICAgZm9yKGxldCBvcCBvZiBvcF9wcmlvW2ldIClcbiAgICAgICAgb3BzW29wXSA9IGk7XG5cbmZ1bmN0aW9uIHRva2VubGlzdDJUcmVlKHRva2VuczogVG9rZW5bXSk6IE5vZGUge1xuXG4gICAgaWYoIHRva2Vucy5sZW5ndGggPT09IDEpIHtcblxuICAgICAgICBpZiggdG9rZW5zWzBdLnR5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IG5iID0gK3Rva2Vuc1swXS52YWx1ZS5yZXBsYWNlKCcsJywgJy4nKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTm9kZSggKCkgPT4gbmIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCB0b2tlbnNbMF0udHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgY29uc3Qgc3RyID0gdG9rZW5zWzBdLnZhbHVlLnNsaWNlKDEsLTEpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBOb2RlKCAoKSA9PiBzdHIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCB0b2tlbnNbMF0udHlwZSA9PT0gXCJyYW5nZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vZGUoIChzaGVldDogQ2FsY1NoZWV0KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsZXQgcmF3ID0gc2hlZXQuZ2V0UmFuZ2UodG9rZW5zWzBdLnZhbHVlKS5maXJzdENlbGwucmF3Q29udGVudDtcblxuICAgICAgICAgICAgICAgIGlmKCByYXcgaW5zdGFuY2VvZiBGb3JtdWxhKVxuICAgICAgICAgICAgICAgICAgICByYXcgPSByYXcuZXhlYyhzaGVldCk7IC8vIFRPRE86IGNhY2hlIHJlc3VsdFxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJhdyBhcyBWYWx1ZVR5cGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCI/Pz9cIik7XG4gICAgfVxuXG4gICAgaWYodG9rZW5zWzBdLnZhbHVlID09PSAnKCcgJiYgdG9rZW5zW3Rva2Vucy5sZW5ndGgtMV0udmFsdWUgPT09ICcpJylcbiAgICAgICAgcmV0dXJuIHRva2VubGlzdDJUcmVlKHRva2Vucy5zbGljZSgxLC0xKSApO1xuXG4gICAgbGV0IGN1ciA9IHtcbiAgICAgICAgcHJpb3JpdHk6IG9wX3ByaW8ubGVuZ3RoLFxuICAgICAgICBpZHggICAgIDogLTFcbiAgICB9O1xuXG4gICAgZm9yKGxldCBpID0gdG9rZW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIGlmKCB0b2tlbnNbaV0udHlwZSAhPT0gXCJvcFwiICkgLy8gY2FsbCBub3QgaGFuZGxlZCB5ZXQuLi5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgIGlmKCB0b2tlbnNbaV0udmFsdWUgPT09ICcpJyApIHsgLy8gZ28gdG8gZmlyc3QgJygnXG4gICAgICAgICAgICBpID0gdG9rZW5zLmZpbmRJbmRleCggdCA9PiB0LnR5cGUgPT09ICdvcCcgJiYgdC52YWx1ZSA9PT0gJygnKTtcblxuICAgICAgICAgICAgaWYoIGkgPT09IDApXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAtLWk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhc3NlcnRzIGlmIHVuYXJ5IG9wLlxuICAgICAgICBpZiggdG9rZW5zW2ldLnZhbHVlID09PSAnLScgfHwgdG9rZW5zW2ldLnZhbHVlID09PSAnKycgKSB7XG5cbiAgICAgICAgICAgIGlmKCBpID09PSAwIHx8IHRva2Vuc1tpLTFdLnR5cGUgPT09IFwib3BcIiApIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHVfb3AgPSBgdS4ke3Rva2Vuc1tpXS52YWx1ZX1gO1xuICAgICAgICAgICAgICAgIHRva2Vuc1tpXS52YWx1ZSA9IHVfb3A7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBvcHNbdV9vcF07XG5cbiAgICAgICAgICAgICAgICAvLyBwcmlvcml0eSBpcyByZXZlcnNlZCArIGV2YWx1YXRlZCBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gICAgICAgICAgICAgICAgaWYoIHByaW9yaXR5IDw9IGN1ci5wcmlvcml0eSkge1xuICAgICAgICAgICAgICAgICAgICBjdXIucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgICAgICAgICAgICAgY3VyLmlkeCAgICAgID0gaTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gb3BzW3Rva2Vuc1tpXS52YWx1ZV07XG5cbiAgICAgICAgLy8gcHJpb3JpdHkgaXMgcmV2ZXJzZWQuXG4gICAgICAgIGlmKCBwcmlvcml0eSA8IGN1ci5wcmlvcml0eSkge1xuICAgICAgICAgICAgY3VyLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgICAgICBjdXIuaWR4ICAgICAgPSBpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoIGN1ci5pZHggPT09IC0xKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJz8/PycpO1xuXG4gICAgbGV0IG9wX3Rva2VuID0gdG9rZW5zW2N1ci5pZHhdO1xuICAgIGlmKCBvcF90b2tlbi52YWx1ZSA9PT0gJyUnICkge1xuICAgICAgICBjb25zdCBsZWZ0ICA9IHRva2Vucy5zbGljZSgwLCBjdXIuaWR4KTtcbiAgICAgICAgY29uc3Qgb3AgPSBvcF9pbXBsW29wX3Rva2VuLnZhbHVlIGFzIGtleW9mIHR5cGVvZiBvcF9pbXBsXTtcbiAgICAgICAgcmV0dXJuIG5ldyBOb2RlKFxuICAgICAgICAgICAgb3AsXG4gICAgICAgICAgICB0b2tlbmxpc3QyVHJlZShsZWZ0KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlmKCBvcF90b2tlbi52YWx1ZSA9PT0gJ3UuLScgfHwgIG9wX3Rva2VuLnZhbHVlID09PSAndS4rJyApIHtcblxuICAgICAgICBjb25zdCByaWdodCAgPSB0b2tlbnMuc2xpY2UoY3VyLmlkeCsxKTtcbiAgICAgICAgY29uc3Qgb3AgPSBvcF9pbXBsW29wX3Rva2VuLnZhbHVlIGFzIGtleW9mIHR5cGVvZiBvcF9pbXBsXTtcbiAgICAgICAgcmV0dXJuIG5ldyBOb2RlKFxuICAgICAgICAgICAgb3AsXG4gICAgICAgICAgICB0b2tlbmxpc3QyVHJlZShyaWdodClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBsZWZ0ICA9IHRva2Vucy5zbGljZSgwLCBjdXIuaWR4KTtcbiAgICBjb25zdCByaWdodCA9IHRva2Vucy5zbGljZShjdXIuaWR4KzEpO1xuXG4gICAgY29uc3Qgb3AgPSBvcF9pbXBsW29wX3Rva2VuLnZhbHVlIGFzIGtleW9mIHR5cGVvZiBvcF9pbXBsXTtcblxuICAgIHJldHVybiBuZXcgTm9kZShcbiAgICAgICAgb3AsXG4gICAgICAgIHRva2VubGlzdDJUcmVlKGxlZnQpLFxuICAgICAgICB0b2tlbmxpc3QyVHJlZShyaWdodClcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VfZm9ybXVsYShzdHI6c3RyaW5nKSB7XG5cbiAgICBsZXQgb2Zmc2V0ID0gMTtcbiAgICBsZXQgdG9rZW5zID0gbmV3IEFycmF5PFRva2VuPigpO1xuXG4gICAgd2hpbGUoIG9mZnNldCA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGN1clRva2VuID0gZXh0cmFjdFRva2VuKHN0ciwgb2Zmc2V0KTtcbiAgICAgICAgdG9rZW5zLnB1c2goIGN1clRva2VuICk7XG4gICAgICAgIG9mZnNldCA9IGN1clRva2VuLmVuZDtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gdG9rZW5saXN0MlRyZWUodG9rZW5zKSE7XG5cbiAgICBjb25zdCByYW5nZXMgPSB0b2tlbnMuZmlsdGVyKHQgPT4gdC50eXBlID09PSBcInJhbmdlXCIgKTtcblxuICAgIHJldHVybiBuZXcgRm9ybXVsYShzdHIsIChzaGVldDogQ2FsY1NoZWV0KSA9PiBub2RlLmV2YWwoc2hlZXQpLCByYW5nZXMgKTtcbn0iLCIvL1RPRE86IHdlYnBhY2sgY29uZmlnLi4uXG5pbXBvcnQgTElTUyBmcm9tIFwiLi4vLi4vLi4vbGlicy9MSVNTXCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGxMaXN0LCBkZWZhdWx0Rm9ybWF0IH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuLy9UT0RPOiBzeW50YXggaGlnaGxpZ2h0IDspXG5cbmNvbnN0IGNzcyA9IGBcbiAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgJiBwcmUge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoIDFyZW0gKyA4cHggKyAycHggKTtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGliZXJhdGlvbiBTYW5zJztcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmV4cG9ydCBjbGFzcyBQbGFnZUZvcm11bGEgZXh0ZW5kcyBMSVNTKHtcbiAgICBjc3Ncbn0pIHtcblxuICAgICNpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCggdGhpcy4jaW5wdXQgKTtcbiAgICAgICAgdGhpcy4jaW5wdXQudG9nZ2xlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcblxuICAgICAgICB0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2KSA9PiB7XG4gICAgICAgICAgICBpZihldi5jb2RlICE9PSAnRW50ZXInKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgZXYuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuI3NoZWV0LmdldENlbGxzKHRoaXMuI2lucHV0LnRleHRDb250ZW50ISkuY2VsbHM7XG5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmFkZCggLi4uc2VsZWN0ZWQgKTtcblxuICAgICAgICAgICAgdGhpcy4jc2hlZXQuY3Vyc29yLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLiNzaGVldC5jdXJzb3IuYWRkKCBzZWxlY3RlZFswXSApO1xuXG4gICAgICAgICAgICB0aGlzLiNpbnB1dC5ibHVyKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy9UT0RPLi4uLlxuICAgICAgICB0aGlzLiNpbnB1dC50b2dnbGVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIC8qdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuXG4gICAgICAgIH0pOyovXG4gICAgfVxuXG4gICAgI3NoZWV0ITogQ2FsY1NoZWV0O1xuXG4gICAgc3luY1RvKHNoZWV0OiBDYWxjU2hlZXQpIHtcblxuICAgICAgICB0aGlzLiNzaGVldCA9IHNoZWV0O1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHNoZWV0LnNlbGVjdGlvbjtcblxuICAgICAgICBzZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKF86IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jaW5wdXQudGV4dENvbnRlbnQgPSBzZWxlY3Rpb24ucGxhZ2VfbmFtZSA/PyBcIlwiO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbkxJU1MuZGVmaW5lKCdjYWxjLXBsYWdlJywgUGxhZ2VGb3JtdWxhKTsiLCJpbXBvcnQgeyBSYW5nZU92ZXJsYXkgfSBmcm9tIFwiLi9SYW5nZU92ZXJsYXlcIjtcbmltcG9ydCB7IENhbGNTaGVldCwgQ2VsbCB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbmV4cG9ydCBjbGFzcyBQbGFnZVNlbGVjdG9yIHtcblxuICAgICNvdmVybGF5cyA9IG5ldyBBcnJheTxSYW5nZU92ZXJsYXk+KCk7XG4gICAgI2dldE92ZXJsYXkoaWQ6IG51bWJlcikge1xuICAgICAgICB3aGlsZShpZCA+PSB0aGlzLiNvdmVybGF5cy5sZW5ndGgpXG4gICAgICAgICAgICB0aGlzLiNvdmVybGF5cy5wdXNoKCBuZXcgUmFuZ2VPdmVybGF5KHRoaXMuI3NoZWV0LCBcInNlbGVjdGlvbl9oaWdobGlnaHRcIikgKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuI292ZXJsYXlzW2lkXTtcbiAgICB9XG5cbiAgICAjdXBkYXRlU2VsZWN0aW9uKCkge1xuXG4gICAgICAgIGxldCBzZWxlY3RlZF9jZWxscyA9IHRoaXMuI3NoZWV0LmdldFJhbmdlKCB0aGlzLiNvcmlnX3BvcywgdGhpcy4jZmluYWxfcG9zICkuY2VsbHM7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmNsZWFyKCk7IC8vIHdlIGFkZCBpdC4uLlxuXG4gICAgICAgIGlmKCB0aGlzLiNpc0N0cmwgKSB7XG5cbiAgICAgICAgICAgIC8vIHJlc3RvcmUgaW5pdGlhbCBzdGF0ZS4uLlxuICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmFkZCguLi50aGlzLiNwcmV2X3NlbGVjdGlvbik7XG5cbiAgICAgICAgICAgIC8vVE9ETyBvbmx5IG9yaWdfdGFyZ2V0Li4uXG4gICAgICAgICAgICBpZih0aGlzLiNzaGVldC5zZWxlY3Rpb24uaGFzKCAuLi5zZWxlY3RlZF9jZWxscyApIClcbiAgICAgICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24ucmVtb3ZlKCAuLi5zZWxlY3RlZF9jZWxscyApO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5hZGQoIC4uLnNlbGVjdGVkX2NlbGxzICk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5hZGQoIC4uLnNlbGVjdGVkX2NlbGxzICk7XG5cbiAgICB9XG5cbiAgICAjdXBkYXRlU2VsZWN0aW9uSGlnaGxpZ2h0KCkge1xuXG4gICAgICAgIGNvbnN0IGNlbGxzID0gdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmNlbGxzO1xuICAgICAgICBmb3IobGV0IG92ZXJsYXkgb2YgdGhpcy4jb3ZlcmxheXMpXG4gICAgICAgICAgICBvdmVybGF5LnNldFJhbmdlKG51bGwpO1xuXG4gICAgICAgIGlmKCBjZWxscy5sZW5ndGggPT09IDEgJiYgdGhpcy4jc2hlZXQuY3Vyc29yLmZpcnN0Q2VsbCA9PT0gY2VsbHNbMF0gKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgIHRoaXMuI2dldE92ZXJsYXkoaSkuc2V0UmFuZ2UoIHRoaXMuI3NoZWV0LmdldFJhbmdlKCBjZWxsc1tpXSApICk7XG4gICAgfVxuXG4gICAgI2lzQ3RybCAgICAgICAgITogYm9vbGVhbjtcbiAgICAjc2hlZXQgICAgICAgICAgOiBDYWxjU2hlZXQ7XG4gICAgI29yaWdfdGFyZ2V0ICAgITogSFRNTEVsZW1lbnQ7XG4gICAgI29yaWdfcG9zICAgICAgITogW251bWJlciwgbnVtYmVyXTtcbiAgICAjZmluYWxfcG9zICAgICAhOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgICNwcmV2X3NlbGVjdGlvbiE6IENlbGxbXTtcblxuICAgICNldjJwb3MoZXY6IE1vdXNlRXZlbnQpOiBbbnVtYmVyLG51bWJlcl0ge1xuXG4gICAgICAgIGNvbnN0IGNvbHMgPSBbLi4udGhpcy4jc2hlZXQudGJvZHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5dO1xuICAgICAgICBsZXQgY29sX2lkO1xuICAgICAgICBmb3IoY29sX2lkID0gY29scy5sZW5ndGgtMTsgY29sX2lkID49IDA7IC0tY29sX2lkKSB7XG4gICAgICAgICAgICBpZiggZXYuY2xpZW50WCA+PSBjb2xzW2NvbF9pZF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueCApXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJvd3MgPSBbLi4udGhpcy4jc2hlZXQudGJvZHkuY2hpbGRyZW5dLm1hcCggZSA9PiBlLmNoaWxkcmVuWzBdICk7XG4gICAgICAgIGxldCByb3dfaWQ7XG4gICAgICAgIGZvcihyb3dfaWQgPSByb3dzLmxlbmd0aC0xOyByb3dfaWQgPj0gMDsgLS1yb3dfaWQpIHtcbiAgICAgICAgICAgIGlmKCBldi5jbGllbnRZID49IHJvd3Nbcm93X2lkXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55IClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbcm93X2lkLCBjb2xfaWRdO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHNoZWV0OiBDYWxjU2hlZXQpIHtcblxuICAgICAgICB0aGlzLiNzaGVldCA9IHNoZWV0O1xuXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykhO1xuXG4gICAgICAgIGNvbnN0IG9uX21vdXNlX21vdmUgPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgdGhpcy4jZmluYWxfcG9zID0gdGhpcy4jZXYycG9zKGV2KTtcblxuICAgICAgICAgICAgdGhpcy4jdXBkYXRlU2VsZWN0aW9uKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgc2hlZXQuY3Vyc29yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi5yZXBsYWNlQWxsKCBzaGVldC5nZXRWaXNpYmxlQ2VsbChzaGVldC5jdXJzb3IpICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNoZWV0LnNlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiN1cGRhdGVTZWxlY3Rpb25IaWdobGlnaHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBzaGVldC5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2Ok1vdXNlRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgaWYoIHNoZWV0LnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPT09IHRhcmdldCApICAvLyBhIGNlbGwgYmVpbmcgZWRpdGVkLlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlmKCAhIFtcIlRIXCIsIFwiVERcIl0uaW5jbHVkZXMoIHRhcmdldC50YWdOYW1lICkgKS8vIC4uLlxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lID09PSBcIlRIXCIgJiYgdGFyZ2V0LnRleHRDb250ZW50ID09PSBcIlwiICkgeyAvLyBtb3VzZW1vdmUgZG9lcyBub3RoaW5nLlxuXG4gICAgICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVmID0gYEExOiR7dGhpcy4jc2hlZXQucG9zMnJlZih0aGlzLiNzaGVldC5uYlJvd3MsIHRoaXMuI3NoZWV0Lm5iQ29scyl9YDtcbiAgICAgICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uYWRkKCAuLi50aGlzLiNzaGVldC5nZXRDZWxscyhyZWYpLmNlbGxzICk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuI2lzQ3RybCAgICAgICAgID0gZXYuY3RybEtleTtcbiAgICAgICAgICAgIHRoaXMuI29yaWdfdGFyZ2V0ICAgID0gdGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy4jb3JpZ19wb3MgICAgICAgPSB0aGlzLiNldjJwb3MoZXYpOyAvLyBDYW4gYmUgVEguLi5cbiAgICAgICAgICAgIHRoaXMuI2ZpbmFsX3BvcyAgICAgID0gdGhpcy4jb3JpZ19wb3M7XG4gICAgICAgICAgICB0aGlzLiNwcmV2X3NlbGVjdGlvbiA9IHNoZWV0LnNlbGVjdGlvbi5jZWxscy5zbGljZSgpO1xuXG4gICAgICAgICAgICB0aGlzLiN1cGRhdGVTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25fbW91c2VfbW92ZSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWFpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbl9tb3VzZV9tb3ZlKTtcbiAgICAgICAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxufSIsIi8vVE9ETzogd2VicGFjayBjb25maWcuLi5cbmltcG9ydCBMSVNTIGZyb20gXCIuLi8uLi8uLi9saWJzL0xJU1NcIjtcblxuLy9AdHMtaWdub3JlXG5pbXBvcnQgY3NzIGZyb20gXCIhIXJhdy1sb2FkZXIhLi9pbmRleC5jc3NcIjtcblxuZXhwb3J0IHR5cGUgVmFsdWVUeXBlID0gc3RyaW5nfG51bWJlcnxEYXRlfGJvb2xlYW47XG5leHBvcnQgdHlwZSBSYXdDb250ZW50VHlwZSA9IFZhbHVlVHlwZXxGb3JtdWxhO1xuXG5leHBvcnQgdHlwZSBDZWxsID0gSFRNTFRhYmxlQ2VsbEVsZW1lbnQgJiB7XG4gICAgcmF3Q29udGVudDogUmF3Q29udGVudFR5cGUsXG4gICAgZm9ybWF0OiAodGhpczogQ2VsbCwgdj86IG51bWJlcnxzdHJpbmd8RGF0ZSkgPT4gc3RyaW5nLFxuICAgIGlzX3JvOiBib29sZWFuLFxuICAgIGNlbGwgPzogQ2VsbFxufTtcblxuZnVuY3Rpb24gaXNBY3RpdmUodGFyZ2V0OiBIVE1MRWxlbWVudCkge1xuXG4gICAgcmV0dXJuIHRhcmdldC5tYXRjaGVzKCc6Zm9jdXMnKTtcbi8qXG4gICAgbGV0IGFjdGl2ZSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICB3aGlsZSggYWN0aXZlPy5zaGFkb3dSb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCApXG4gICAgICAgIGFjdGl2ZSA9IGFjdGl2ZS5zaGFkb3dSb290LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICByZXR1cm4gYWN0aXZlID09PSB0YXJnZXQ7Ki9cbn1cblxuZnVuY3Rpb24gb25JbnB1dChldjogRXZlbnQpIHtcblxuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIxMjM0NzQxL3BsYWNlLWNhcmV0LWJhY2std2hlcmUtaXQtd2FzLWFmdGVyLWNoYW5naW5nLWlubmVyaHRtbC1vZi1hLWNvbnRlbnRlZGl0YWJsZS1lbGVtXG5cbiAgICBsZXQgcnJhbmdlID0gd2luZG93LmdldFNlbGVjdGlvbigpIS5nZXRSYW5nZUF0KDApO1xuICAgIGxldCBjID0gcnJhbmdlLnN0YXJ0T2Zmc2V0O1xuXG4gICAgLy9sZXQgdGV4dCA9IFwiXCI7XG4gICAgbGV0IGxlbmd0aCA9IDA7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRhcmdldC5jaGlsZE5vZGVzLmxlbmd0aDsgKytpKSB7XG5cbiAgICAgICAgbGV0IGNoaWxkID0gdGFyZ2V0LmNoaWxkTm9kZXNbaV07XG4gICAgICAgIGlmKCBjaGlsZC5ub2RlVHlwZSAhPT0gTm9kZS5URVhUX05PREUpXG4gICAgICAgICAgICBjaGlsZCA9IGNoaWxkLmNoaWxkTm9kZXNbMF07XG5cbiAgICAgICAgaWYoIHJyYW5nZS5zdGFydENvbnRhaW5lciA9PT0gY2hpbGQgKSB7XG4gICAgICAgICAgICAvL3RleHQgKz0gcC5jaGlsZE5vZGVzW2ldLnRleHRDb250ZW50IS5zbGljZSgwLCBjKTtcbiAgICAgICAgICAgIGxlbmd0aCArPSBjO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy90ZXh0ICs9IHAuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudDtcbiAgICAgICAgbGVuZ3RoICs9IHRhcmdldC5jaGlsZE5vZGVzW2ldLnRleHRDb250ZW50IS5sZW5ndGg7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGlubmVySFRNTFxuICAgIHRhcmdldC50ZXh0Q29udGVudCA9IHRhcmdldC50ZXh0Q29udGVudDtcblxuICAgIGxldCBjaGlsZCE6IENoaWxkTm9kZTtcbiAgICBsZXQgaTtcbiAgICBmb3IoaSA9IDA7IGkgPCB0YXJnZXQuY2hpbGROb2Rlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiggbGVuZ3RoIDw9IHRhcmdldC5jaGlsZE5vZGVzW2ldLnRleHRDb250ZW50IS5sZW5ndGggKSB7XG4gICAgICAgICAgICBjaGlsZCA9IHRhcmdldC5jaGlsZE5vZGVzW2ldO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbGVuZ3RoIC09IHRhcmdldC5jaGlsZE5vZGVzW2ldLnRleHRDb250ZW50IS5sZW5ndGg7XG4gICAgfVxuXG4gICAgaWYoIGNoaWxkLm5vZGVUeXBlICE9PSBOb2RlLlRFWFRfTk9ERSlcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5jaGlsZE5vZGVzWzBdO1xuXG4gICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpITtcblxuICAgIHJhbmdlLnNldFN0YXJ0KGNoaWxkLCBsZW5ndGgpO1xuICAgIHJhbmdlLmNvbGxhcHNlKHRydWUpO1xuICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBzZWwuYWRkUmFuZ2UocmFuZ2UpO1xufVxuXG5mdW5jdGlvbiBwYXJzZUlucHV0KCBzdHI6IHN0cmluZyApOiBSYXdDb250ZW50VHlwZSB7XG5cbiAgICBpZihzdHIgPT09ICdWUkFJJylcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgaWYoc3RyID09PSAnRkFVWCcpXG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIGlmKHN0ci50cmltKCkgPT09ICcnKVxuICAgICAgICByZXR1cm4gc3RyO1xuXG4gICAgaWYoc3RyWzBdID09PSBcIj1cIikge1xuICAgICAgICByZXR1cm4gcGFyc2VfZm9ybXVsYShzdHIpO1xuICAgIH1cblxuICAgIGxldCB0ZXN0X251bWJlciA9IE51bWJlciggc3RyLnJlcGxhY2UoJywnLCAnLicpICk7XG4gICAgaWYoICEgTnVtYmVyLmlzTmFOKCB0ZXN0X251bWJlciApIClcbiAgICAgICAgcmV0dXJuIHRlc3RfbnVtYmVyO1xuICAgIGlmKCBzdHJbc3RyLmxlbmd0aC0xXSA9PT0gXCIlXCIpIHtcbiAgICAgICAgdGVzdF9udW1iZXIgPSBOdW1iZXIoIHN0ci5zbGljZSgwLC0xKS5yZXBsYWNlKCcsJywgJy4nKSApO1xuICAgICAgICBpZiggISBOdW1iZXIuaXNOYU4oIHRlc3RfbnVtYmVyICkgKVxuICAgICAgICAgICAgcmV0dXJuICsodGVzdF9udW1iZXIgLyAxMDApLnRvUHJlY2lzaW9uKDcpO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcnRzID0gc3RyLnNwbGl0KCcvJyk7XG4gICAgaWYocGFydHMubGVuZ3RoIDw9IDMpIHtcblxuICAgICAgICBsZXQgdGVzdF9kYXRlID0gbmV3IERhdGUoXG4gICAgICAgICAgICArcGFydHNbMl0gPz8gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgK3BhcnRzWzFdLTEsXG4gICAgICAgICAgICArcGFydHNbMF1cbiAgICAgICAgKTtcblxuICAgICAgICBpZiggdGVzdF9kYXRlLnRvU3RyaW5nKCkgIT09IFwiSW52YWxpZCBEYXRlXCIgKVxuICAgICAgICAgICAgcmV0dXJuIHRlc3RfZGF0ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xufVxuXG5jbGFzcyBTdGF0ZTxUPiB7XG5cbiAgICAjc3RhdGUgOiBUfG51bGwgPSBudWxsO1xuICAgICN0YXJnZXQ6IEV2ZW50VGFyZ2V0O1xuICAgICNuYW1lICA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHRhcmdldDogRXZlbnRUYXJnZXQsIG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLiN0YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMuI25hbWUgICA9IG5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IHN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jc3RhdGU7XG4gICAgfVxuXG4gICAgc2V0IHN0YXRlKHN0YXRlOiBUfG51bGwpIHtcblxuICAgICAgICBpZiggdGhpcy4jc3RhdGUgPT09IHN0YXRlKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGxldCBwcmV2X3N0YXRlID0gdGhpcy4jc3RhdGU7XG4gICAgICAgIHRoaXMuI3N0YXRlID0gc3RhdGU7XG4gICAgICAgIFxuXG4gICAgICAgIGlmKCBwcmV2X3N0YXRlICE9PSBudWxsKVxuICAgICAgICAgICAgdGhpcy4jdGFyZ2V0LmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChgJHt0aGlzLiNuYW1lfV9lbmRgLCB7ZGV0YWlsOiBwcmV2X3N0YXRlfSkgKTsgICAgICAgICAgICBcblxuICAgICAgICBpZiggc3RhdGUgIT09IG51bGwgKVxuICAgICAgICAgICAgdGhpcy4jdGFyZ2V0LmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChgJHt0aGlzLiAjbmFtZX1fc3RhcnRgLCB7ZGV0YWlsOiBzdGF0ZX0pICk7XG4gICAgfVxufVxuXG5jb25zdCBTdGF0ZXMgPSB7XG4gICAgXCJjZWxsX2VkaXRcIjogU3RhdGU8Q2VsbD4sXG4gICAgXCJyZWNvcHlcIiAgIDogU3RhdGU8Q2VsbExpc3Q+XG4gfSBhcyBjb25zdDtcblxuZXhwb3J0IGNsYXNzIENhbGNTaGVldCBleHRlbmRzIExJU1Moe1xuICAgIGNzcyxcbiAgICBhdHRyaWJ1dGVzOiBbXCJjb2xzXCIsIFwicm93c1wiLCBcInJvXCJdXG59KSB7XG5cbiAgICBzdGF0ZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoIE9iamVjdC5lbnRyaWVzKFN0YXRlcykubWFwKCAoW24sc10pID0+IFtuLCBuZXcgcyh0aGlzLmhvc3QsIG4pXSBhcyBjb25zdCApKTtcblxuXG4gICAgLy9UT0RPOiBSTyBwcm9wID9cbiAgICAjY3Vyc29yICAgID0gbmV3IENlbGxMaXN0KHRoaXMsIFtdKTtcbiAgICAjc2VsZWN0aW9uOiBDZWxsTGlzdCA9IG5ldyBDZWxsTGlzdCh0aGlzLCBbXSk7XG4gICAgI3BsYWdlX3NlbGVjdG9yID0gbmV3IFBsYWdlU2VsZWN0b3IodGhpcyk7XG5cbiAgICAjZm9ybWF0X21uZ3IgPSBuZXcgRm9ybWF0TWFuYWdlcih0aGlzKTtcblxuICAgIHN0YXRpYyBnZXRTaGVldEZyb21DZWxsKGNlbGw6IENlbGwpIHtcbiAgICAgICAgcmV0dXJuIExJU1MuZ2V0TElTU1N5bmM8Q2FsY1NoZWV0PiggKGNlbGwuZ2V0Um9vdE5vZGUoKSBhcyBTaGFkb3dSb290KS5ob3N0ICk7XG4gICAgfVxuXG4gICAgZ2V0IGN1cnNvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2N1cnNvcjtcbiAgICB9XG4gICAgZ2V0IHNlbGVjdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3NlbGVjdGlvbjtcbiAgICB9XG5cbiAgICBvdmVycmlkZSBnZXQgY29udGVudCgpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmNvbnRlbnQ7XG4gICAgfVxuXG4gICAgc2V0UmVjdCh0YXJnZXQ6IEhUTUxFbGVtZW50LCBbeCx5LHcsaF06IHJlYWRvbmx5IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdKSB7XG5cbiAgICAgICAgY29uc3QgdGJsX29mZnNldCA9IHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpIS5vZmZzZXRUb3A7XG5cbiAgICAgICAgdGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KCd0b3AnICAgLCBgJHt0Ymxfb2Zmc2V0ICsgeX1weGApO1xuICAgICAgICB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkoJ2hlaWdodCcsIGAke2h9cHhgKTtcblxuICAgICAgICB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkoJ2xlZnQnICAgLCBgJHt4fXB4YCk7XG4gICAgICAgIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eSgnd2lkdGgnLCBgJHt3fXB4YCk7XG5cbiAgICB9XG5cbiAgICBnZXRSZWN0KGNlbGxzOiBDZWxsTGlzdHxDZWxsW10pIHtcblxuICAgICAgICBjZWxscyA9IFwiY2VsbHNcIiBpbiBjZWxscyA/IGNlbGxzLmNlbGxzIDogY2VsbHM7XG5cbiAgICAgICAgY29uc3Qgc3RhcnQgPSBjZWxsc1swXTtcbiAgICAgICAgY29uc3QgZW5kICAgPSBjZWxsc1tjZWxscy5sZW5ndGgtMV07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgc3RhcnQub2Zmc2V0TGVmdCxcbiAgICAgICAgICAgIHN0YXJ0Lm9mZnNldFRvcCxcbiAgICAgICAgICAgIGVuZC5vZmZzZXRMZWZ0ICsgZW5kLmNsaWVudFdpZHRoIC0gc3RhcnQub2Zmc2V0TGVmdCArIDEsXG4gICAgICAgICAgICBlbmQub2Zmc2V0VG9wICsgZW5kLmNsaWVudEhlaWdodCAtIHN0YXJ0Lm9mZnNldFRvcCArIDFcbiAgICAgICAgXSBhcyBjb25zdDtcbiAgICB9XG5cbiAgICByZWxhdGl2ZVRvKGNlbGw6IENlbGwsIHJvd19kaWZmOiBudW1iZXIsIGNvbF9kaWZmOiBudW1iZXIpIHtcbiAgICAgICAgXG4gICAgICAgIGxldCBbcm93LCBjb2xdID0gdGhpcy5jZWxsUG9zKGNlbGwpO1xuXG4gICAgICAgIHJvdyArPSByb3dfZGlmZjtcbiAgICAgICAgY29sICs9IGNvbF9kaWZmO1xuXG4gICAgICAgIC8vIGZvciBub3JtYWwgOiBnZXQgc3R1Y2sgaW5zaWRlIGdyaWQuXG4gICAgICAgIGlmKCByb3cgPCAxKVxuICAgICAgICAgICAgcm93ID0gMTtcbiAgICAgICAgaWYoIHJvdyA+PSB0aGlzLiN0Ym9keS5jaGlsZHJlbi5sZW5ndGggKVxuICAgICAgICAgICAgcm93ID0gdGhpcy4jdGJvZHkuY2hpbGRyZW4ubGVuZ3RoIC0gMTtcblxuICAgICAgICBpZiggY29sIDwgMSlcbiAgICAgICAgICAgIGNvbCA9IDE7XG4gICAgICAgIGlmKCBjb2wgPj0gdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlbi5sZW5ndGggKVxuICAgICAgICAgICAgY29sID0gdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlbi5sZW5ndGggLSAxO1xuXG4gICAgICAgIHJldHVybiB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuW2NvbF0gYXMgQ2VsbDtcbiAgICB9XG5cbiAgICAvL1RPRE86IDJELi4uXG4gICAgI3Bhc3RlYmluOiBDZWxsTGlzdCB8IG51bGwgPSBudWxsO1xuXG4gICAgI2Zvcm11bGFfcmVmcyA9IG5ldyBBcnJheTxGb3JtdWxhUmVmPigpO1xuICAgICNnZXRGb3JtdWxhUmVmKGk6IG51bWJlcikge1xuICAgICAgICB3aGlsZSggaSA+PSB0aGlzLiNmb3JtdWxhX3JlZnMubGVuZ3RoKVxuICAgICAgICAgICAgdGhpcy4jZm9ybXVsYV9yZWZzLnB1c2goIG5ldyBGb3JtdWxhUmVmKHRoaXMpICk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuI2Zvcm11bGFfcmVmc1tpXTtcbiAgICB9XG4gICAgI2NsZWFyRm9ybXVsYVJlZnMoKSB7XG4gICAgICAgIGZvcihsZXQgcmVmIG9mIHRoaXMuI2Zvcm11bGFfcmVmcylcbiAgICAgICAgICAgIHJlZi5zZXRSYW5nZShudWxsKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBjb25zdCBjdXJzb3IgPSBuZXcgUmFuZ2VPdmVybGF5KHRoaXMsIFwiY3Vyc29yXCIpO1xuICAgICAgICBjb25zdCByZWNvcHkgPSBuZXcgUmVjb3B5SGFuZGxlKHRoaXMpO1xuICAgICAgICBjb25zdCBjb3B5ICAgPSBuZXcgUmFuZ2VPdmVybGF5KHRoaXMsIFwiY29weV9oaWdobGlnaHRcIik7XG5cbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpITtcblxuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcignY2VsbF9lZGl0X2VuZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2NsZWFyRm9ybXVsYVJlZnMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGxhc3RfcmVjb3B5X3RhcmdldDogQ2VsbHxudWxsID0gbnVsbDtcbiAgICAgICAgbGV0IGxhc3RfcmVjb3B5X2RpciAgIDogW251bWJlciwgbnVtYmVyXXxudWxsID0gbnVsbFxuXG4gICAgICAgIGNvbnN0IG9uX3JlY29weV9tb3ZlID0gKGV2OiBNb3VzZUV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBjZWxscyA9ICh0aGlzLnN0YXRlcy5yZWNvcHkuc3RhdGUgYXMgQ2VsbExpc3QpLmNlbGxzO1xuICAgICAgICAgICAgY29uc3Qgc3JjID0gY2VsbHNbY2VsbHMubGVuZ3RoLTFdO1xuXG4gICAgICAgICAgICBsZXQgcG9zID0gc3JjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICBsZXQgZF9weCA9IGV2LmNsaWVudFggLSAocG9zLnggKyBwb3Mud2lkdGggLzIpO1xuICAgICAgICAgICAgbGV0IGRfcHkgPSBldi5jbGllbnRZIC0gKHBvcy55ICsgcG9zLmhlaWdodC8yKTtcblxuICAgICAgICAgICAgbGV0IGRfeCA9IDA7XG4gICAgICAgICAgICBsZXQgZF95ID0gTWF0aC5zaWduKGRfcHkpO1xuXG4gICAgICAgICAgICBpZiggTWF0aC5hYnMoZF9weCkgPiBNYXRoLmFicyhkX3B5KSApIHtcbiAgICAgICAgICAgICAgICBkX3ggPSBNYXRoLnNpZ24oZF9weCk7XG4gICAgICAgICAgICAgICAgZF95ID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHByZXYgPSBzcmM7XG4gICAgICAgICAgICBsZXQgY3VyICA9IHNyYztcblxuICAgICAgICAgICAgbGV0IGRpZmZfeCwgZGlmZl95O1xuXG4gICAgICAgICAgICBkbyB7XG5cbiAgICAgICAgICAgICAgICBwcmV2PSBjdXI7XG4gICAgICAgICAgICAgICAgY3VyID0gdGhpcy5yZWxhdGl2ZVRvKHByZXYsIGRfeSwgZF94KTtcblxuICAgICAgICAgICAgICAgIGlmKCBjdXIgPT09IHByZXYpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgbGV0IHBvc19jdXIgPSBjdXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgZGlmZl94ID0gZXYuY2xpZW50WCAtIChwb3NfY3VyLnggKyBwb3NfY3VyLndpZHRoIC8yKTtcbiAgICAgICAgICAgICAgICBkaWZmX3kgPSBldi5jbGllbnRZIC0gKHBvc19jdXIueSArIHBvc19jdXIuaGVpZ2h0LzIpO1xuXG4gICAgICAgICAgICB9IHdoaWxlKCBkaWZmX3ggKiBkX3ggKyBkaWZmX3kgKiBkX3kgPiAwICk7XG5cbiAgICAgICAgICAgIGxhc3RfcmVjb3B5X3RhcmdldCA9IHByZXY7XG4gICAgICAgICAgICBsYXN0X3JlY29weV9kaXIgICAgPSBbZF94LGRfeV07XG5cbiAgICAgICAgICAgIGxldCBiZWcgPSBzcmM7XG4gICAgICAgICAgICBsZXQgZW5kID0gcHJldjtcbiAgICAgICAgICAgIGlmKCBzcmMub2Zmc2V0TGVmdCA+IHByZXYub2Zmc2V0TGVmdCB8fCBzcmMub2Zmc2V0VG9wID4gcHJldi5vZmZzZXRUb3AgKVxuICAgICAgICAgICAgICAgIFtiZWcsIGVuZF0gPSBbZW5kLCBiZWddO1xuXG4gICAgICAgICAgICAvL1RPRE86IGhpZ2hsaWdodC4uLlxuICAgICAgICAgICAgdGhpcy4jY2xlYXJGb3JtdWxhUmVmcygpO1xuICAgICAgICAgICAgdGhpcy4jZ2V0Rm9ybXVsYVJlZigxKS5zZXRSYW5nZSggdGhpcy5nZXRSYW5nZShiZWcsIGVuZCkgKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWNvcHkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXYpID0+IHtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGVzLnJlY29weS5zdGF0ZSA9IHRoaXMuI3NlbGVjdGlvbjtcblxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgbWFpbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uX3JlY29weV9tb3ZlKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBbZF94LCBkX3ldID0gIGxhc3RfcmVjb3B5X2RpciE7XG5cbiAgICAgICAgICAgICAgICBsZXQgY2VsbHMgPSAodGhpcy5zdGF0ZXMucmVjb3B5LnN0YXRlIGFzIENlbGxMaXN0KS5jZWxscztcbiAgICAgICAgICAgICAgICBjb25zdCBzcmMgPSBjZWxsc1tjZWxscy5sZW5ndGgtMV07XG5cbiAgICAgICAgICAgICAgICBsZXQgbmIgPSAwO1xuXG4gICAgICAgICAgICAgICAgaWYoIGxhc3RfcmVjb3B5X3RhcmdldCAhPT0gc3JjKSB7IC8vIGNvcHkuLi5cblxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VyID0gc3JjO1xuICAgICAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICArK25iO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXIgPSB0aGlzLnJlbGF0aXZlVG8oY3VyLCBkX3ksIGRfeCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50OiBSYXdDb250ZW50VHlwZXxDZWxsID0gc3JjO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHR5cGVvZiBjb250ZW50LnJhd0NvbnRlbnQgPT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IChzcmMucmF3Q29udGVudCBhcyBudW1iZXIpICsgbmIqKGRfeCArIGRfeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKCBjb250ZW50LnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBEYXRlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBuZXcgRGF0ZShzcmMucmF3Q29udGVudCBhcyBEYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LnNldERhdGUoIGNvbnRlbnQuZ2V0RGF0ZSgpICsgbmIqKGRfeCArIGRfeSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ2VsbExpc3QodGhpcywgW2N1cl0pLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyLmNsYXNzTmFtZSA9IHNyYy5jbGFzc05hbWU7IC8vVE9ETzogZm9ybWF0Li4uXG5cblxuICAgICAgICAgICAgICAgICAgICB9IHdoaWxlKCBjdXIhPT0gbGFzdF9yZWNvcHlfdGFyZ2V0ICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy4jY2xlYXJGb3JtdWxhUmVmcygpOyAvLyByZWNvcHlcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlcy5yZWNvcHkuc3RhdGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIGxhc3RfcmVjb3B5X3RhcmdldCA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGFzdF9yZWNvcHlfZGlyICAgID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBtYWluLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25fcmVjb3B5X21vdmUpO1xuXG4gICAgICAgICAgICB9LCB7b25jZTogdHJ1ZX0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcigncmVjb3B5X3N0YXJ0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ3JlY29weScpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3JlY29weV9lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LnJlbW92ZSgncmVjb3B5Jyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy4jY3Vyc29yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldikgPT4ge1xuXG4gICAgICAgICAgICBpZiggdGhpcy4jY3Vyc29yLmxlbmd0aCAhPT0gMSApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXJzb3IgaGFzIGludmFsaWQgbnVtYmVyIG9mIGNlbGxzJyk7XG5cbiAgICAgICAgICAgIGN1cnNvci5zZXRSYW5nZSggbmV3IENlbGxMaXN0KHRoaXMsIFt0aGlzLmdldFZpc2libGVDZWxsKHRoaXMuI2N1cnNvcildKSApO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNzZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGZvciggbGV0IGNlbGwgb2YgdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaWdobGlnaHQnKSApXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKTtcblxuICAgICAgICAgICAgY29uc3QgY2VsbHMgPSB0aGlzLiNzZWxlY3Rpb24uY2VsbHM7XG5cbiAgICAgICAgICAgIGlmKCBjZWxscy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBmb3IoIGxldCBjZWxsIG9mIGNlbGxzICkge1xuXG4gICAgICAgICAgICAgICAgaWYoIGNlbGxzLmxlbmd0aCAhPT0gMSlcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gdGhpcy4jY2VsbFBvcyhjZWxsKTtcbiAgICAgICAgICAgICAgICB0aGlzLiN0Ym9keS5jaGlsZHJlblswXS5jaGlsZHJlbltjb2xdLmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XG4gICAgICAgICAgICAgICAgdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlblswXS5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWNvcHkuc2V0UmFuZ2UodGhpcy4jc2VsZWN0aW9uKTtcblxuICAgICAgICAgICAgLy8gb25seSBpZiBzaW1wbGUuLi5cbiAgICAgICAgICAgIC8vIGNvbnN0IGxhc3QgPSBjZWxsc1tjZWxscy5sZW5ndGgtMV07XG4gICAgICAgICAgICAvLyBwb2ludGVyLi4uXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vVE9ETzogbW92ZSBvdXQgP1xuICAgICAgICBjb25zdCBmb3JtdWxhX2JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtdWxhX2Jhci5jbGFzc0xpc3QuYWRkKCd0b29sYmFyJyk7XG5cbiAgICAgICAgKCBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHBsYWdlID0gYXdhaXQgTElTUy5idWlsZChcImNhbGMtcGxhZ2VcIik7XG4gICAgICAgICAgICBwbGFnZS5zeW5jVG8odGhpcyk7XG4gICAgICAgICAgICBmb3JtdWxhX2Jhci5hcHBlbmQoIHBsYWdlLmhvc3QgKTtcblxuICAgICAgICAgICAgY29uc3QgZm9ybXVsYSA9IGF3YWl0IExJU1MuYnVpbGQoXCJjYWxjLWZvcm11bGFcIik7XG4gICAgICAgICAgICBmb3JtdWxhLnN5bmNUbyh0aGlzKTtcbiAgICAgICAgICAgIGZvcm11bGFfYmFyLmFwcGVuZCggZm9ybXVsYS5ob3N0ICk7XG5cbiAgICAgICAgfSkoKTtcbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZChmb3JtdWxhX2Jhcik7XG5cbiAgICAgICAgdGhpcy4jaW5pdEdyaWQoKyh0aGlzLmF0dHJzLnJvd3MgPz8gMSksICsodGhpcy5hdHRycy5jb2xzID8/IDEpICk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2KSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICAgICAgLy8gdGhlIGNlbGwgaXMgYmVpbmcgZWRpdGVkLi4uXG4gICAgICAgICAgICBpZiggdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJykgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lID09PSBcIlREXCIgKVxuICAgICAgICAgICAgICAgIHRoaXMuI2N1cnNvci5yZXBsYWNlQWxsKCB0YXJnZXQgYXMgQ2VsbCApO1xuXG4gICAgICAgICAgICAvL1RPRE86IG5vdCBjb3JyZWN0Li4uXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgPT09IFwiVEhcIiAmJiB0YXJnZXQudGV4dENvbnRlbnQgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5nZXRSYW5nZSh0YXJnZXQudGV4dENvbnRlbnQhKS5maXJzdENlbGw7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiNjdXJzb3IucmVwbGFjZUFsbChjZWxsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIChldikgPT4ge1xuXG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgIT09IFwiVERcIilcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGlmKCB0aGlzLmF0dHJzLnJvICE9PSBcInRydWVcIiAmJiAodGFyZ2V0IGFzIENlbGwpLmlzX3JvICE9PSB0cnVlICkge1xuICAgICAgICAgICAgICAgIHRhcmdldC50b2dnbGVBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXY6IEtleWJvYXJkRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgaWYoIGV2LmNvZGUuc3RhcnRzV2l0aCgnQXJyb3cnKSApIHtcblxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjdXIgPSB0aGlzLmN1cnNvci5jZWxscztcbiAgICAgICAgICAgICAgICBpZiggY3VyLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgbGV0IGRfcm93ID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgZF9jb2wgPSAwO1xuXG4gICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09ICdBcnJvd0xlZnQnKVxuICAgICAgICAgICAgICAgICAgICAtLWRfY29sO1xuICAgICAgICAgICAgICAgIGlmKCBldi5jb2RlID09PSAnQXJyb3dSaWdodCcpXG4gICAgICAgICAgICAgICAgICAgICsrZF9jb2w7XG4gICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09ICdBcnJvd1VwJylcbiAgICAgICAgICAgICAgICAgICAgLS1kX3JvdztcbiAgICAgICAgICAgICAgICBpZiggZXYuY29kZSA9PT0gJ0Fycm93RG93bicpXG4gICAgICAgICAgICAgICAgICAgICsrZF9yb3c7XG5cbiAgICAgICAgICAgICAgICBsZXQgbmV4dDogQ2VsbDtcbiAgICAgICAgICAgICAgICBpZiggZXYuY3RybEtleSApIHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJldiAgID0gY3VyWzBdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3Vyc29yID0gdGhpcy5yZWxhdGl2ZVRvKHByZXYsIGRfcm93LCBkX2NvbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIHByZXYucmF3Q29udGVudCAhPT0gdW5kZWZpbmVkICYmIGN1cnNvci5yYXdDb250ZW50ICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUoIHByZXYgIT09IGN1cnNvciAmJiBjdXJzb3IucmF3Q29udGVudCAhPT0gdW5kZWZpbmVkKSB7IC8vIHdlIHJlYWNoZWQgdGhlIGVuZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2ICAgPSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gdGhpcy5yZWxhdGl2ZVRvKHByZXYsIGRfcm93LCBkX2NvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSBwcmV2O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUoIHByZXYgIT09IGN1cnNvciAmJiBjdXJzb3IucmF3Q29udGVudCA9PT0gdW5kZWZpbmVkKSB7IC8vIHdlIHJlYWNoZWQgdGhlIGVuZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2ICAgPSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gdGhpcy5yZWxhdGl2ZVRvKHByZXYsIGRfcm93LCBkX2NvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBuZXh0ID0gY3Vyc29yO1xuICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICBuZXh0ID0gdGhpcy5yZWxhdGl2ZVRvKCBjdXJbMF0sIGRfcm93LCBkX2NvbCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy4jdGJvZHkuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnNvci5yZXBsYWNlQWxsKG5leHQpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBubyBlZGl0aW9uIGFsbG93ZWQuLi5cbiAgICAgICAgICAgIGlmKCB0aGlzLmF0dHJzLnJvID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgaWYoIHRhcmdldCA9PT0gdGhpcy4jdGJvZHkgKSB7XG4gICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09IFwiS2V5VlwiICYmIGV2LmN0cmxLZXkgJiYgdGhpcy4jcGFzdGViaW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuI3Bhc3RlYmluLmNlbGxzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNzZWxlY3Rpb24uY29udGVudCA9IGRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29weSBmb3JtYXQuLi4gVE9ETyB1dGlsaXR5IHRoaW5neS4uLlxuICAgICAgICAgICAgICAgICAgICBpZiggISBldi5zaGlmdEtleSB8fCAhIGV2LmFsdEtleSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IHRoaXMuI3Bhc3RlYmluLmNlbGxzO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHN0ID0gdGhpcy4jc2VsZWN0aW9uLmNlbGxzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgKytpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRzdFtpXS5jbGFzc05hbWUgPSBzcmNbaV0uY2xhc3NOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVE9ETzogYWRkIGZvcm1hdC4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKCAoIGV2LmtleSA9PT0gXCJjXCIgfHwgZXYua2V5ID09PSBcInhcIikgJiYgZXYuY3RybEtleSApIHtcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICBjb3B5LnNldFJhbmdlKHRoaXMuI3NlbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdIWSA/Pz9cbiAgICAgICAgICAgICAgICAgICAgLy9oLnN0eWxlLnNldFByb3BlcnR5KCd0b3AnICAgLCBgJHtzZWxlY3Rpb25bMF0ub2Zmc2V0VG9wfXB4YCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jcGFzdGViaW4gPSB0aGlzLiNzZWxlY3Rpb24uZGVlcENsb25lKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gXCJ4XCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiNzZWxlY3Rpb24uZGVsZXRlRm9ybWF0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiNzZWxlY3Rpb24uZGVsZXRlQ29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKCBldi5rZXkgPT09IFwiQ29udHJvbFwiIHx8IGV2LmtleSA9PT0gXCJTaGlmdFwiIHx8IGV2LmtleSA9PT0gXCJBbHRcIiApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBpZ25vcmVcbiAgICAgICAgICAgICAgICB9IGlmKCBldi5jb2RlID09PSBcIkRlbGV0ZVwiICkge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmRlbGV0ZUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpICk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gaWYoIGV2LmNvZGUgPT09IFwiRW50ZXJcIiApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlZCBlbHNld2hlcmVcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZXYuY3RybEtleSkgeyAvLyBpZ25vcmUgY3RybFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgeyAvLyB3ZSBzdGFydCBlZGl0aW5nLi4uXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VyID0gdGhpcy5jdXJzb3IuY2VsbHM7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIGN1ci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJbMF0uZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiZGJsY2xpY2tcIiwge2J1YmJsZXM6IHRydWV9KSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyWzBdLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQgIT09IHRoaXMuI3Rib2R5ICYmIGV2LmNvZGUgPT09ICdFbnRlcicgJiYgZXYuc2hpZnRLZXkgKVxuICAgICAgICAgICAgICAgIHJldHVybjsgLy8gZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yLlxuXG4gICAgICAgICAgICBpZihldi5jb2RlID09PSBcIkVudGVyXCIpIHsgLy9UT0RPOiBFbnRlciBpcyBmb3IgY3VycmVudCBwbGFnZS4uLlxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjdXIgPSB0aGlzLmN1cnNvci5jZWxscztcbiAgICAgICAgICAgICAgICBpZiggY3VyLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgbGV0IFtyb3csY29sXSA9IHRoaXMuY2VsbFBvcyggY3VyWzBdICk7XG5cbiAgICAgICAgICAgICAgICArK3JvdztcbiAgICAgICAgICAgICAgICBpZiggcm93ID49IHRoaXMuI3Rib2R5LmNoaWxkcmVuLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICAgICAgcm93ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgKytjb2w7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCBjb2wgPj0gdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlbi5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbCA9IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IG5leHQgPSB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuW2NvbF0gYXMgQ2VsbDtcblxuICAgICAgICAgICAgICAgIHRoaXMuI3Rib2R5LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJzb3IucmVwbGFjZUFsbChuZXh0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG9uSW5wdXQyID0gKGV2OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jY2xlYXJGb3JtdWxhUmVmcygpO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgaWYoZXYuZGV0YWlsICE9PSB0cnVlKVxuICAgICAgICAgICAgICAgIG9uSW5wdXQoZXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9UT0RPOiBoZXJlLi4uXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICAgICAgY29weS5zZXRSYW5nZShudWxsKTtcblxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lICE9PSBcIlREXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPSB0YXJnZXQgYXMgQ2VsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKFwiY2VsbF9lZGl0X3N0YXJ0XCIsIChldjogQ3VzdG9tRXZlbnQ8Q2VsbD4pID0+IHtcblxuICAgICAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC50b2dnbGUoXCJjZWxsX2VkaXRcIiwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBldi5kZXRhaWw7XG5cbiAgICAgICAgICAgIGlmKGNlbGwucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHN0ciA9IGNlbGwucmF3Q29udGVudC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlcyA9IGNlbGwucmF3Q29udGVudC5yYW5nZXNUb2tlbjtcblxuICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlbjogKHN0cmluZ3xIVE1MRWxlbWVudClbXSA9IFtzdHJdO1xuXG4gICAgICAgICAgICAgICAgbGV0IHJhbmdlc19jb2xvcnM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fTtcbiAgICAgICAgICAgICAgICBsZXQgY3VyX29mZnNldCA9IDA7XG5cbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdHIgPSBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGgtMV0gYXMgc3RyaW5nO1xuXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aC0xXSA9IHN0ci5zbGljZSgwLCByYW5nZXNbaV0uYmVnIC0gY3VyX29mZnNldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2VfbmFtZSA9IHJhbmdlc1tpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYoICEgKHJhbmdlX25hbWUgaW4gcmFuZ2VzX2NvbG9ycykgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VzX2NvbG9yc1tyYW5nZV9uYW1lXSA9IGklODtcblxuICAgICAgICAgICAgICAgICAgICBzLmNsYXNzTGlzdC5hZGQoJ2Zvcm11bGFfaGlnaGxpZ2h0JywgYGhpZ2hsaWdodF8ke3Jhbmdlc19jb2xvcnNbcmFuZ2VfbmFtZV19YCk7IC8vVE9ETy4uLlxuICAgICAgICAgICAgICAgICAgICBzLnRleHRDb250ZW50ID0gcmFuZ2VzW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKCBzICk7IC8vIHJhbmdlLi4uXG5cbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW4ucHVzaCggc3RyLnNsaWNlKHJhbmdlc1tpXS5lbmQgLSBjdXJfb2Zmc2V0KSApO1xuICAgICAgICAgICAgICAgICAgICBjdXJfb2Zmc2V0ID0gcmFuZ2VzW2ldLmVuZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjZWxsLnJlcGxhY2VDaGlsZHJlbiggLi4uY2hpbGRyZW4gKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlc19uYW1lcyA9IE9iamVjdC5rZXlzKHJhbmdlc19jb2xvcnMpO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByYW5nZXNfbmFtZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSByYW5nZXNfbmFtZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZiA9IHRoaXMuI2dldEZvcm11bGFSZWYoaSk7XG4gICAgICAgICAgICAgICAgICAgIHJlZi5zZXRDb2xvciggcmFuZ2VzX2NvbG9yc1tyYW5nZV0gKTtcbiAgICAgICAgICAgICAgICAgICAgcmVmLnNldFJhbmdlKCB0aGlzLmdldFJhbmdlKHJhbmdlKSApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgb25JbnB1dDIgKTsgLy8gcmVtb3ZlIGNvbG9ycy4uLlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gRm9ybWF0cy5kZWZhdWx0LmNhbGwoY2VsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKFwiY2VsbF9lZGl0X2VuZFwiLCAoZXY6IEN1c3RvbUV2ZW50PENlbGw+KSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QudG9nZ2xlKFwiY2VsbF9lZGl0XCIsIGZhbHNlKTtcblxuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGV2LmRldGFpbDtcblxuICAgICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgb25JbnB1dDIpOyAvLyB0byBiZSBzYWZlXG4gICAgICAgICAgICBjZWxsLnRvZ2dsZUF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcImxlYXZlIGVkaXRcIiwgY2VsbC50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICBuZXcgQ2VsbExpc3QodGhpcywgW2NlbGxdKS5jb250ZW50ID0gY2VsbC50ZXh0Q29udGVudCE7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICAgICAgICAvLyBsZWF2ZVxuICAgICAgICAgICAgdGhpcy4jc2VsZWN0aW9uLmNsZWFyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZXYgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSAhPT0gXCJURFwiKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5zdGF0ZXMuY2VsbF9lZGl0LnN0YXRlID0gbnVsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoIHRoaXMubmJSb3dzID49IDEgJiYgdGhpcy5uYkNvbHMgPj0gMSlcbiAgICAgICAgICAgIHRoaXMuY3Vyc29yLnJlcGxhY2VBbGwoIHRoaXMuZ2V0UmFuZ2UoXCJBMVwiKSApO1xuICAgIH1cblxuICAgIGdldFZpc2libGVDZWxsKGM6IENlbGx8Q2VsbExpc3QpOiBDZWxsIHtcbiAgICAgICAgaWYoYyBpbnN0YW5jZW9mIENlbGxMaXN0KVxuICAgICAgICAgICAgYyA9IGMuZmlyc3RDZWxsO1xuXG4gICAgICAgIHJldHVybiBjLmNlbGwgPz8gYztcbiAgICB9XG5cbiAgICBjZWxsUG9zKGNlbGw6IEhUTUxUYWJsZUNlbGxFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjZWxsUG9zKGNlbGwpO1xuICAgIH1cblxuICAgICNjZWxsUG9zKGNlbGw6IEhUTUxUYWJsZUNlbGxFbGVtZW50KSB7XG5cbiAgICAgICAgaWYoIFwicG9zXCIgaW4gY2VsbClcbiAgICAgICAgICAgIHJldHVybiBjZWxsLnBvcyBhcyBbbnVtYmVyLCBudW1iZXJdO1xuXG4gICAgICAgIGNvbnN0IGNvbCA9IFsuLi5jZWxsLnBhcmVudEVsZW1lbnQhLmNoaWxkcmVuXS5maW5kSW5kZXgoIGMgPT4gYyA9PT0gY2VsbCk7XG4gICAgICAgIGNvbnN0IHJvdyA9IFsuLi5jZWxsLnBhcmVudEVsZW1lbnQhLnBhcmVudEVsZW1lbnQhLmNoaWxkcmVuXS5maW5kSW5kZXgoIHIgPT4gciA9PT0gY2VsbC5wYXJlbnRFbGVtZW50ISk7XG5cbiAgICAgICAgcmV0dXJuIFtyb3csIGNvbF0gYXMgY29uc3Q7XG4gICAgfVxuXG4gICAgI3Rib2R5ITogSFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQ7XG4gICAgZ2V0IHRib2R5KCkgeyByZXR1cm4gdGhpcy4jdGJvZHk7IH1cblxuICAgIHJlc2l6ZShuYnJvd3M6IG51bWJlciwgbmJjb2xzOiBudW1iZXIpIHtcblxuICAgICAgICBjb25zdCBjb2xfaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgIGNvbF9odG1sLmFwcGVuZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKSApO1xuXG4gICAgICAgIGNvbnN0IHRib2R5ID0gdGhpcy4jdGJvZHk7XG4gICAgICAgIHRib2R5LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgICAgIGZvcihsZXQgY29sID0gMDsgY29sIDwgIG5iY29scyA7ICsrY29sKSB7XG4gICAgICAgICAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICB0aC50ZXh0Q29udGVudCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBjb2wpO1xuICAgICAgICAgICAgY29sX2h0bWwuYXBwZW5kKHRoKTtcbiAgICAgICAgfVxuICAgICAgICB0Ym9keS5hcHBlbmQoY29sX2h0bWwpO1xuXG4gICAgICAgIGZvcihsZXQgcm93ID0gMDsgcm93IDwgbmJyb3dzOyArK3Jvdykge1xuICAgICAgICAgICAgY29uc3Qgcm93X2h0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgICAgICAgdGgudGV4dENvbnRlbnQgPSBgJHtyb3crMX1gO1xuICAgICAgICAgICAgcm93X2h0bWwuYXBwZW5kKHRoKTtcblxuICAgICAgICAgICAgZm9yKGxldCBjb2wgPSAwOyBjb2wgPCAgbmJjb2xzIDsgKytjb2wpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKSBhcyBDZWxsO1xuICAgICAgICAgICAgICAgIC8vY2VsbC50b2dnbGVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuICAgICAgICAgICAgICAgIGNlbGwuZm9ybWF0ID0gRm9ybWF0cy5kZWZhdWx0O1xuICAgICAgICAgICAgICAgIHJvd19odG1sLmFwcGVuZCggY2VsbCApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGJvZHkuYXBwZW5kKHJvd19odG1sKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNpbml0R3JpZChuYnJvd3M6IG51bWJlciwgbmJjb2xzOiBudW1iZXIpIHtcblxuICAgICAgICBjb25zdCBpc19ybyA9IHRoaXMuYXR0cnMucm8gPT09IFwidHJ1ZVwiO1xuXG4gICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICAgICAgY29uc3QgdGJvZHkgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcbiAgICAgICAgdGhpcy4jdGJvZHkgPSB0Ym9keTtcblxuICAgICAgICBjb25zdCByZXNpemVPYnMgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaG9zdC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoJ3Jlc2l6ZScpICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXNpemVPYnMub2JzZXJ2ZSggdGhpcy5ob3N0ICk7XG5cbiAgICAgICAgdGhpcy4jdGJvZHkuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG5cbiAgICAgICAgdGhpcy5yZXNpemUobmJyb3dzLCBuYmNvbHMpO1xuXG4gICAgICAgIHRhYmxlLmFwcGVuZCh0Ym9keSk7XG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQodGFibGUpO1xuICAgIH1cblxuICAgIGdldFJhbmdlKGZyb206IENlbGx8c3RyaW5nfHJlYWRvbmx5W251bWJlcixudW1iZXJdLCB0bzogQ2VsbHxzdHJpbmd8cmVhZG9ubHlbbnVtYmVyLG51bWJlcl0gPSBmcm9tKTogQ2VsbExpc3Qge1xuXG4gICAgICAgIC8vIHByb2Nlc3MgcmVmcy4uLlxuICAgICAgICBpZiggZnJvbSBpbnN0YW5jZW9mIEhUTUxUYWJsZUNlbGxFbGVtZW50KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZ2UoIHRoaXMuY2VsbFBvcyhmcm9tKSwgdG8gKTtcbiAgICAgICAgaWYoIHRvIGluc3RhbmNlb2YgSFRNTFRhYmxlQ2VsbEVsZW1lbnQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSYW5nZSggZnJvbSwgdGhpcy5jZWxsUG9zKHRvKSApO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgZnJvbSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgaWYoIGZyb20uaW5jbHVkZXMoXCI6XCIpIClcbiAgICAgICAgICAgICAgICBbZnJvbSwgdG9dID0gZnJvbS5zcGxpdCgnOicpO1xuXG4gICAgICAgICAgICBmcm9tID0gdGhpcy5yZWYycG9zKGZyb20sIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJhbmdlKCBmcm9tLCB0byApO1xuICAgICAgICB9XG4gICAgICAgIGlmKCB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSYW5nZSggZnJvbSwgdGhpcy5yZWYycG9zKHRvLCB0cnVlKSApO1xuXG4gICAgICAgIC8vIGdldCByYW5nZVxuXG4gICAgICAgIGxldCBiZWdfcm93ID0gZnJvbVswXSB8fCAxO1xuICAgICAgICBsZXQgYmVnX2NvbCA9IGZyb21bMV0gfHwgMTtcblxuICAgICAgICBsZXQgZW5kX3JvdyA9IGZyb21bMF0gPT09IDAgPyB0aGlzLm5iUm93cyA6IHRvWzBdO1xuICAgICAgICBsZXQgZW5kX2NvbCA9IGZyb21bMV0gPT09IDAgPyB0aGlzLm5iQ29scyA6IHRvWzFdO1xuXG4gICAgICAgIGlmKCBlbmRfcm93IDwgYmVnX3JvdyApXG4gICAgICAgICAgICBbYmVnX3JvdywgZW5kX3Jvd10gPSBbZW5kX3JvdywgYmVnX3Jvd107XG4gICAgICAgIGlmKCBlbmRfY29sIDwgYmVnX2NvbCApXG4gICAgICAgICAgICBbYmVnX2NvbCwgZW5kX2NvbF0gPSBbZW5kX2NvbCwgYmVnX2NvbF07XG5cbiAgICAgICAgY29uc3QgY2VsbHMgPSBuZXcgQXJyYXk8Q2VsbD4oIChlbmRfcm93IC0gYmVnX3JvdyArIDEpICogKGVuZF9jb2wgLSBiZWdfY29sICsgMSkgKTtcblxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgZm9yKGxldCBpID0gYmVnX3JvdzsgaSA8PSBlbmRfcm93OyArK2kgKVxuICAgICAgICAgICAgZm9yKGxldCBqID0gYmVnX2NvbDsgaiA8PSBlbmRfY29sOyArK2ogKVxuICAgICAgICAgICAgICAgIGNlbGxzW29mZnNldCsrXSA9IHRoaXMudGJvZHkuY2hpbGRyZW5baV0uY2hpbGRyZW5bal0gYXMgQ2VsbDtcblxuICAgICAgICByZXR1cm4gbmV3IENlbGxMaXN0KHRoaXMsIGNlbGxzKTtcbiAgICB9XG5cbiAgICByZWYycG9zKHJlZjogc3RyaW5nLCBlbmRfbGluZV9jb2wgPSB0cnVlKTogW251bWJlciwgbnVtYmVyXSB7XG4gICAgICAgIFxuICAgICAgICByZWYgPSByZWYucmVwbGFjZUFsbCgnJCcsICcnKTtcblxuICAgICAgICBsZXQgc2VwID0gcmVmLnNlYXJjaCgvWzAtOV0vKTtcblxuICAgICAgICBpZiggc2VwID09PSAwKSAgLy8gdGhpcyBpcyBhIGxpbmUuLi5cbiAgICAgICAgICAgIHJldHVybiBlbmRfbGluZV9jb2wgPyB0aGlzLnJlZjJwb3MoYEEke3JlZn1gKSA6IFt0aGlzLm5iQ29scywgK3JlZl07XG4gICAgICAgIGlmKCBzZXAgPT09IC0xKSAvLyB0aGlzIGlzIGEgY29sLi4uXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWYycG9zKGAke3JlZn0ke2VuZF9saW5lX2NvbCA/IHRoaXMubmJSb3dzIDogMX1gKTtcblxuICAgICAgICBjb25zdCByb3cgPSArcmVmLnNsaWNlKHNlcCk7XG5cbiAgICAgICAgbGV0IGNvbCA9IDA7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzZXA7ICsraSkge1xuICAgICAgICAgICAgY29sICo9IDI2O1xuICAgICAgICAgICAgY29sICs9IHJlZi5jaGFyQ29kZUF0KGkpIC0gNjU7XG4gICAgICAgIH1cbiAgICAgICAgKytjb2w7XG5cbiAgICAgICAgcmV0dXJuIFtyb3csIGNvbF07XG4gICAgfVxuICAgIHBvczJyZWYocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSB7XG5cbiAgICAgICAgbGV0IGNvbF9zdHIgPSBcIlwiO1xuICAgICAgICBkbyB7XG5cbiAgICAgICAgICAgIGxldCBpZCA9IChjb2wtMSkgJSAyNjtcblxuICAgICAgICAgICAgY29sX3N0ciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUraWQpICsgY29sX3N0cjtcblxuICAgICAgICAgICAgY29sIC09IGlkICsgMTtcbiAgICAgICAgICAgIGNvbCAvPSAyNjsgLy8gc2hvdWxkIGJlIGludGVnZXIsIHNvIG9rLlxuXG4gICAgICAgIH0gd2hpbGUoIGNvbCA+IDAgKTtcblxuICAgICAgICByZXR1cm4gYCR7Y29sX3N0cn0ke3Jvd31gO1xuICAgIH1cbiAgICBnZXQgbmJSb3dzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jdGJvZHkuY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgZ2V0IG5iQ29scygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Rib2R5LmZpcnN0RWxlbWVudENoaWxkIS5jaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgICNpc1VwZGF0aW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiggdGhpcy4jaXNVcGRhdGluZyA9PT0gdHJ1ZSApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuI2lzVXBkYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgY2VsbHMgPSBbLi4udGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGw8Q2VsbD4oJ3RkJyldLmZpbHRlciggZSA9PiBlLnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBGb3JtdWxhKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yKGxldCBjZWxsIG9mIGNlbGxzIClcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgY2VsbC5yYXdDb250ZW50LnJlc2V0Q2FjaGUoKTtcblxuICAgICAgICAgICAgZm9yKGxldCBjZWxsIG9mIGNlbGxzKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggY2VsbC5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gY2VsbC5yYXdDb250ZW50LmV4ZWModGhpcyk7IC8vVE9ETy4uLlxuXG4gICAgICAgICAgICAgICAgICAgIC8vVE9ETzogZmFjdG9yaXplLi4uXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eXBlOiBzdHJpbmcgPSB0eXBlb2YgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIjtcblxuICAgICAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gKGNlbGwgYXMgYW55KS5mb3JtYXQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmhvc3QuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KCd1cGRhdGUnKSApO1xuICAgICAgICAgICAgdGhpcy4jaXNVcGRhdGluZyA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldCBpc1JPKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRycy5ybyA9PT0gXCJ0cnVlXCI7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2VsbExpc3QgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG5cbiAgICAjc2hlZXQ6IENhbGNTaGVldDtcbiAgICAjY2VsbHM6IENlbGxbXTtcbiAgICBjb25zdHJ1Y3RvcihzaGVldDogQ2FsY1NoZWV0LCBjZWxsczogQ2VsbFtdKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuI2NlbGxzID0gY2VsbHM7XG4gICAgICAgIHRoaXMuI3NoZWV0ID0gc2hlZXQ7XG4gICAgfVxuXG4gICAgZ2V0IHBsYWdlX25hbWUoKSB7XG5cbiAgICAgICAgaWYoIHRoaXMuI2NlbGxzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBpZiggdGhpcy4jY2VsbHMubGVuZ3RoID09PSAxIClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiNzaGVldC5wb3MycmVmKCAuLi50aGlzLiNzaGVldC5jZWxsUG9zKHRoaXMuI2NlbGxzWzBdKSApO1xuXG4gICAgICAgIGxldCBjZWxscyA9IHRoaXMuI2NlbGxzLm1hcCggYyA9PiB0aGlzLiNzaGVldC5jZWxsUG9zKGMpICkuc29ydCggKGEsYikgPT4ge1xuICAgICAgICAgICAgaWYoIGFbMF0gIT09IGJbMF0gKVxuICAgICAgICAgICAgICAgIHJldHVybiBhWzBdIC0gYlswXTtcbiAgICAgICAgICAgIHJldHVybiBhWzFdIC0gYlsxXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG1pbiA9IGNlbGxzWzBdO1xuICAgICAgICBsZXQgbWF4ID0gY2VsbHNbY2VsbHMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgbGV0IG5iX2NvbHMgPSBtYXhbMV0gLSBtaW5bMV0gKyAxO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgIGlmKCBjZWxsc1tpXVswXSAhPT0gTWF0aC5mbG9vcihpL25iX2NvbHMpK21pblswXSAmJiBjZWxsc1tpXVsxXSAhPT0gKGklbmJfY29scykrIG1pblsxXSApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHJldHVybiBgJHt0aGlzLiNzaGVldC5wb3MycmVmKC4uLm1pbil9OiR7dGhpcy4jc2hlZXQucG9zMnJlZiguLi5tYXgpfWA7XG4gICAgfVxuXG4gICAgZ2V0IGNlbGxzKCk6IENlbGxbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjZWxscztcbiAgICB9XG4gICAgZ2V0IHNoZWV0KCk6IENhbGNTaGVldCB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzaGVldDtcbiAgICB9XG5cbiAgICB0b2dnbGVGb3JtYXQobmFtZTogc3RyaW5nfCgodjogYW55LCBwcmVjOiBudW1iZXJ8bnVsbCkgPT4gc3RyaW5nKSApIHtcbiAgICAgICAgbGV0IGYgPSBGb3JtYXQuZXh0cmFjdEZvcm1hdCh0aGlzKTtcblxuICAgICAgICBpZiggdHlwZW9mIG5hbWUgPT09IFwiZnVuY3Rpb25cIikge1xuXG4gICAgICAgICAgICBsZXQgaXNGb3JtYXQgPSBmLmdldFByb3BlcnR5KFwiZm9ybWF0XCIpID09PSBuYW1lO1xuXG4gICAgICAgICAgICB0aGlzLmZvcm1hdCh7Zm9ybWF0OiBpc0Zvcm1hdCA/IG51bGwgOiBuYW1lIH0pO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZvcm1hdCh7W25hbWVdOiBmLmdldFByb3BlcnR5KG5hbWUpICE9PSB0cnVlfSk7XG4gICAgfVxuXG4gICAgZm9ybWF0KC4uLmY6ICgoICh2OiBhbnksIHByZWM6IG51bWJlcnxudWxsKSA9PiBzdHJpbmcgKXxzdHJpbmd8Rm9ybWF0fFJlY29yZDxzdHJpbmcsIGFueT4pW10pIHtcblxuICAgICAgICBpZiggZi5sZW5ndGggPiAxICkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL1RPRE8uLi4uXG4gICAgICAgICAgICBmID0gT2JqZWN0LmZyb21FbnRyaWVzKCBmLm1hcCggZSA9PiBbZSwgdHJ1ZV0gKSApO1xuXG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgZiA9IGZbMF07XG5cbiAgICAgICAgaWYoIHR5cGVvZiBmID09PSBcImZ1bmN0aW9uXCIgKVxuICAgICAgICAgICAgZiA9IHtcImZvcm1hdFwiOiBmfTtcblxuICAgICAgICBpZih0eXBlb2YgZiA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICBmID0ge1tmXTogdHJ1ZX07XG5cbiAgICAgICAgaWYoICEgKGYgaW5zdGFuY2VvZiBGb3JtYXQpIClcbiAgICAgICAgICAgIGYgPSBuZXcgRm9ybWF0KGYpO1xuXG4gICAgICAgIGYuYXBwbHlUbyh0aGlzKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQgY29udGVudCgpOiAoUmF3Q29udGVudFR5cGUpW10ge1xuICAgICAgICBsZXQgY29udGVudCA9IG5ldyBBcnJheSh0aGlzLiNjZWxscy5sZW5ndGgpO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy4jY2VsbHMubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICBjb250ZW50W2ldID0gdGhpcy4jY2VsbHNbaV0ucmF3Q29udGVudCE7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgZGVsZXRlRm9ybWF0KCkge1xuICAgICAgICBmb3IobGV0IGNlbGwgb2YgdGhpcy4jY2VsbHMpIC8vVE9ETyBhZGQgaG9jIGZvcm1hdC4uLlxuICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAnJztcbiAgICB9XG5cbiAgICBkZWxldGVDb250ZW50KCkge1xuXG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiB0aGlzLiNjZWxscykge1xuICAgICAgICAgICAgY2VsbC5yYXdDb250ZW50ID0gdW5kZWZpbmVkIGFzIGFueTtcbiAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2hlZXQudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgc2V0IGNvbnRlbnQoY29udGVudDogQ2VsbHxSYXdDb250ZW50VHlwZXwoUmF3Q29udGVudFR5cGV8Q2VsbClbXSkge1xuXG4gICAgICAgIGlmKCBBcnJheS5pc0FycmF5KGNvbnRlbnQpICkge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNvbnRlbnQubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgbmV3IENlbGxMaXN0KHRoaXMuI3NoZWV0LCBbdGhpcy4jY2VsbHNbaV1dICkuY29udGVudCA9IGNvbnRlbnRbaV07XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCB0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcblxuICAgICAgICAgICAgbGV0IHJhdyA9IGNvbnRlbnQ7XG4gICAgICAgICAgICBjb250ZW50ID0gcGFyc2VJbnB1dChjb250ZW50KTtcbiAgICAgICAgICAgIGlmKCB0eXBlb2YgY29udGVudCA9PT0gXCJudW1iZXJcIiAmJiByYXdbcmF3Lmxlbmd0aC0xXSA9PT0gXCIlXCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgZiA9IEZvcm1hdC5leHRyYWN0Rm9ybWF0KHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmKCAhIGYuaGFzUHJvcGVydHkoXCJmb3JtYXRcIikgKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1hdChGb3JtYXRzLnBvdXJjZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIFxuXG4gICAgICAgIGxldCByYXdfdmFsID0gY29udGVudCBpbnN0YW5jZW9mIEhUTUxUYWJsZUNlbGxFbGVtZW50ID8gY29udGVudC5yYXdDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY29udGVudDtcblxuICAgICAgICBmb3IobGV0IGNlbGwgb2YgdGhpcy4jY2VsbHMpIHtcblxuICAgICAgICAgICAgaWYoY29udGVudCBpbnN0YW5jZW9mIEhUTUxUYWJsZUNlbGxFbGVtZW50ICYmIGNvbnRlbnQucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEgKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgdiA9IGNvbnRlbnQucmF3Q29udGVudDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRzdCA9IHRoaXMuI3NoZWV0LmNlbGxQb3MoIGNlbGwgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzcmMgPSB0aGlzLiNzaGVldC5jZWxsUG9zKGNvbnRlbnQpXG5cbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmID0gWyBkc3RbMF0gLSBzcmNbMF0sIGRzdFsxXSAtIHNyY1sxXV0gYXMgY29uc3Q7XG5cbiAgICAgICAgICAgICAgICByYXdfdmFsID0gdi5yZWxhdGl2ZVRvKCB0aGlzLiNzaGVldCwgLi4uZGlmZiApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjZWxsLnJhd0NvbnRlbnQgPSByYXdfdmFsO1xuXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSByYXdfdmFsO1xuICAgICAgICAgICAgaWYoIHJhd192YWwgaW5zdGFuY2VvZiBGb3JtdWxhKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXRzID0gT2JqZWN0LnZhbHVlcyggRm9ybWF0cyApO1xuXG4gICAgICAgICAgICAgICAgLy9JZiBubyBudW1iZXIgZm9ybWF0LCBkZWR1Y2UgZm9ybWF0LlxuICAgICAgICAgICAgICAgIGlmKCBjZWxsLmZvcm1hdCA9PT0gdW5kZWZpbmVkIHx8IGNlbGwuZm9ybWF0ID09PSBGb3JtYXRzLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1hdCA9IEZvcm1hdHMuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5iX2RhdGVzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCByIG9mIHJhd192YWwucmFuZ2VzVG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQodGhpcy5zaGVldC5nZXRSYW5nZShyLnZhbHVlKSApLmdldFByb3BlcnR5KFwiZm9ybWF0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGZvcm1hdCAhPT0gZiAmJiBmb3JtYXRzLmluZGV4T2YoZikgPiBmb3JtYXRzLmluZGV4T2YoZm9ybWF0KSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0ID0gZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGYgPT09IEZvcm1hdHMuZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArK25iX2RhdGVzO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaDRja1xuICAgICAgICAgICAgICAgICAgICBpZiggZm9ybWF0ID09PSBGb3JtYXRzLmRhdGUgJiYgbmJfZGF0ZXMgPiAxIClcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdCA9IEZvcm1hdHMuZGVmYXVsdDtcblxuICAgICAgICAgICAgICAgICAgICBpZihmb3JtYXQgIT09IEZvcm1hdHMuZGVmYXVsdClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuZm9ybWF0ID0gZm9ybWF0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhbHVlID0gcmF3X3ZhbC5leGVjKHRoaXMuI3NoZWV0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHR5cGU6IHN0cmluZyA9IHR5cGVvZiB2YWx1ZTtcbiAgICAgICAgICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgKSB7XG4gICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIjtcbiAgICAgICAgICAgICAgICBjZWxsLmZvcm1hdCA9IEZvcm1hdHMuZGF0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGNlbGwuZm9ybWF0KHZhbHVlKTtcblxuICAgICAgICAgICAgaWYoIGNlbGwuZm9ybWF0ID09PSBGb3JtYXRzLmRhdGUpXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdkYXRlJztcbiAgICAgICAgICAgIGlmKCBjZWxsLmZvcm1hdCA9PT0gRm9ybWF0cy5wb3VyY2VudClcbiAgICAgICAgICAgICAgICB0eXBlID0gJ3BvdXJjZW50JztcbiAgICAgICAgICAgIGlmKCBjZWxsLmZvcm1hdCA9PT0gRm9ybWF0cy5ldXJvcyB8fCBjZWxsLmZvcm1hdCA9PT0gRm9ybWF0cy5udW1iZXIgKVxuICAgICAgICAgICAgICAgIHR5cGUgPSAnbnVtYmVyJztcblxuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHR5cGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2hlZXQudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgc2V0Uk8oaXNfcm86IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiB0aGlzLiNjZWxscylcbiAgICAgICAgICAgIGNlbGwuaXNfcm8gPSBpc19ybztcbiAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NlbGxzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBoYXMoLi4uY2VsbHM6IENlbGxbXSkge1xuICAgICAgICBmb3IobGV0IGNlbGwgb2YgY2VsbHMpXG4gICAgICAgICAgICBpZiggISB0aGlzLiNjZWxscy5pbmNsdWRlcyhjZWxsKSApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZW1vdmUoLi4uY2VsbHM6IENlbGxbXSkge1xuICAgICAgICB0aGlzLiNjZWxscyA9IHRoaXMuI2NlbGxzLmZpbHRlciggYyA9PiAhIGNlbGxzLmluY2x1ZGVzKGMpICk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpICk7XG4gICAgfVxuXG4gICAgcmVwbGFjZUFsbCguLi5jZWxsczogQ2VsbFtdfFtDZWxsTGlzdF0pIHtcbiAgICAgICAgdGhpcy4jY2VsbHMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5hZGQoLi4uY2VsbHMpO1xuICAgIH1cblxuICAgIGFkZCguLi5jZWxsczogQ2VsbFtdfFtDZWxsTGlzdF0pIHtcblxuICAgICAgICBpZiggY2VsbHNbMF0gaW5zdGFuY2VvZiBDZWxsTGlzdClcbiAgICAgICAgICAgIGNlbGxzID0gY2VsbHNbMF0uY2VsbHM7XG5cbiAgICAgICAgdGhpcy4jY2VsbHMucHVzaCguLi5jZWxscyBhcyBDZWxsW10pO1xuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpICk7XG4gICAgfVxuXG4gICAgZ2V0IGZpcnN0Q2VsbCgpIHtcbiAgICAgICAgaWYoIHRoaXMuI2NlbGxzLmxlbmd0aCA8IDEpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub3BlXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy4jY2VsbHNbMF07XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuI2NlbGxzLmxlbmd0aCA9IDA7XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcbiAgICB9XG5cblxuICAgIGRlZXBDbG9uZSgpIHtcblxuICAgICAgICBsZXQgY2VsbHMgPSB0aGlzLiNjZWxscy5tYXAoIGMgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xvbmUgPSBjLmNsb25lTm9kZSh0cnVlKSBhcyBDZWxsO1xuXG4gICAgICAgICAgICBjbG9uZS5yYXdDb250ZW50ID0gYy5yYXdDb250ZW50O1xuICAgICAgICAgICAgY2xvbmUuZm9ybWF0ICAgICA9IGMuZm9ybWF0O1xuICAgICAgICAgICAgKGNsb25lIGFzIGFueSkucG9zICAgICAgICA9IHRoaXMuI3NoZWV0LmNlbGxQb3MoYyk7XG5cbiAgICAgICAgICAgIHJldHVybiBjbG9uZTtcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gbmV3IENlbGxMaXN0KHRoaXMuI3NoZWV0LCBjZWxscyk7XG4gICAgfVxufVxuXG4vL1RPRE8uLi5cbmltcG9ydCBcIi4vZm9ybXVsYV9lZGl0b3JcIjtcbmltcG9ydCBcIi4vcGxhZ2VfZWRpdG9yXCI7XG5pbXBvcnQgeyBGb3JtdWxhLCBwYXJzZV9mb3JtdWxhIH0gZnJvbSBcIi4vZm9ybXVsYV9wYXJzZXJcIjtcbmltcG9ydCB7IFBsYWdlU2VsZWN0b3IgfSBmcm9tIFwiLi9wbGFnZV9zZWxlY3RvclwiO1xuaW1wb3J0IHsgRm9ybWF0LCBGb3JtYXRNYW5hZ2VyLCBGb3JtYXRzIH0gZnJvbSBcIi4vZm9ybWF0XCI7XG5pbXBvcnQgeyBGb3JtdWxhUmVmLCBSYW5nZU92ZXJsYXksIFJlY29weUhhbmRsZSB9IGZyb20gXCIuL1JhbmdlT3ZlcmxheVwiO1xuXG5MSVNTLmRlZmluZSgnY2FsYy1zaGVldCcsIENhbGNTaGVldCk7IiwiZXhwb3J0IGRlZmF1bHQgW1xuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiUiAxLTAxIFRhYmxldXIgZXQgUmVwb3J0aW5nXCIsXG4gICAgICAgIHNuYW1lOiBcIlIxLTAxIFRhYmxldXJcIixcbiAgICAgICAgcGF0aCA6IFwiUjEtMDFcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNNXCIsXG4gICAgICAgICAgICAgICAgcGF0aDogXCJDTVwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiQ00xXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQ00yXCJcbiAgICAgICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJUUFwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiVFBcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIlRQMVwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIlIgMS0wMiBCYXNlcyBkZSBEb25uw6llcyBSZWxhdGlvbm5lbGxlcyAxXCIsXG4gICAgICAgIHNuYW1lOiBcIlIxLTAyIEJEUjFcIixcbiAgICAgICAgcGF0aCA6IFwiUjEtMDJcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIFwiQ01cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlRQXCIgLFxuICAgICAgICAgICAgICAgIHBhdGggOiBcIlRQXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgXCJUUDFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJUUDJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJUUDNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJUUDRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJUUDVcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cbl07XG5cbmV4cG9ydCBjb25zdCByb290X3BhdGggPSBbXCJsb2NhbGhvc3RcIiwgXCIxMjcuMC4wLjFcIl0uaW5jbHVkZXMobG9jYXRpb24uaG9zdG5hbWUpID8gXCIvZGlzdC9kZXYvcGFnZXMvXCIgOiBcIi9Db3Vycy9kaXN0L2Rldi9wYWdlcy9cIjsiLCJcbmltcG9ydCBwYWdlcywge3Jvb3RfcGF0aH0gZnJvbSBcIi4vY29udGVudFwiO1xuXG4vKlxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXByaW50JywgKCkgPT4ge1xuICAvLy4uLlxufSk7XG4qL1xuXG4vL1RPRE86IGxpbmtzLi4uXG5jb25zdCBtYWluICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKSE7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpITtcblxuY29uc3QgdGl0bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCJoMSwgaDIsIGgzLCBoNFwiKTtcblxudHlwZSBOb2RlID0ge1xuICAgIGh0bWwgICAgOiBIVE1MRWxlbWVudCxcbiAgICBsZXZlbCAgIDogbnVtYmVyLFxuICAgIHBhcmVudCAgOiBudWxsfE5vZGUsXG4gICAgY2hpbGRyZW46IE5vZGVbXVxufTtcblxuY29uc3QgaHRyZWU6IE5vZGUgPSB7XG4gICAgaHRtbCAgICA6IG1haW4sXG4gICAgbGV2ZWwgICA6IDAsXG4gICAgcGFyZW50ICA6IG51bGwsXG4gICAgY2hpbGRyZW46IFtdLFxufTtcbmxldCBodHJlZV9jdXJzb3IgPSBodHJlZTtcbmZvcihsZXQgdGl0bGUgb2YgdGl0bGVzKSB7XG4gICAgY29uc3QgbGV2ZWwgPSArdGl0bGUudGFnTmFtZS5zbGljZSgxKTtcbiAgICBcbiAgICB3aGlsZSggbGV2ZWwgPD0gaHRyZWVfY3Vyc29yLmxldmVsIClcbiAgICAgICAgaHRyZWVfY3Vyc29yID0gaHRyZWVfY3Vyc29yLnBhcmVudCE7XG5cbiAgICBjb25zdCBlbGVtOiBOb2RlID0ge1xuICAgICAgICBodG1sOiB0aXRsZSxcbiAgICAgICAgbGV2ZWwsXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgcGFyZW50OiBodHJlZV9jdXJzb3JcbiAgICB9O1xuXG5cbiAgICBodHJlZV9jdXJzb3IuY2hpbGRyZW4ucHVzaChlbGVtKTtcblxuICAgIGh0cmVlX2N1cnNvciA9IGVsZW07XG59XG5cbmZ1bmN0aW9uIHNlYXJjaEN1ckhlYWRlcihodHJlZTogTm9kZSwgcG9zaXRpb246IG51bWJlcik6IG51bGwgfCBOb2RlIHtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBodHJlZS5jaGlsZHJlbjtcblxuICAgIGZvcihsZXQgaSA9IGhlYWRlcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpXG4gICAgICAgIGlmKCBoZWFkZXJzW2ldLmh0bWwub2Zmc2V0VG9wIDw9IHBvc2l0aW9uICsgMzIgKVxuICAgICAgICAgICAgcmV0dXJuIHNlYXJjaEN1ckhlYWRlcihoZWFkZXJzW2ldLCBwb3NpdGlvbikgPz8gaGVhZGVyc1tpXTtcblxuICAgIHJldHVybiBudWxsO1xufVxuXG5jb25zdCBoaWQgPSBbXG4gICAgW10sXG4gICAgW1wiSVwiLCBcIklJXCIsIFwiSUlJXCIsIFwiSVZcIl0sXG4gICAgW1wiMVwiLCBcIjJcIixcIjNcIixcIjVcIixcIjZcIixcIjdcIixcIjhcIixcIjlcIl0sXG4gICAgW1wiYVwiLCBcImJcIixcImNcIixcImRcIixcImVcIixcImZcIixcImdcIixcImhcIl0sXG5dXG5cbmZ1bmN0aW9uIGdldFRpdGxlUHJlZml4KHM6IE5vZGUpIHtcblxuICAgIGlmKCBzLmxldmVsID49IGhpZC5sZW5ndGggKVxuICAgICAgICByZXR1cm4gXCJcIjtcblxuICAgIGNvbnN0IGlkeCA9IHMucGFyZW50IS5jaGlsZHJlbi5pbmRleE9mKHMpO1xuXG4gICAgY29uc3QgbnVtID0gaGlkW3MubGV2ZWxdW2lkeF07XG5cbiAgICByZXR1cm4gYCR7bnVtfS4gYDtcbn1cblxuZnVuY3Rpb24gYnVpbGRNZW51KG5vZGVzOiBOb2RlW10pIHtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG5cbiAgICBtZW51LmFwcGVuZCggLi4uIG5vZGVzLm1hcCggKHMsaWR4KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgaXRlbS50ZXh0Q29udGVudD0gYCR7Z2V0VGl0bGVQcmVmaXgocyl9JHtzLmh0bWwudGV4dENvbnRlbnR9YDtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGAjJHtzLmh0bWwuaWR9YCk7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pICk7XG5cbiAgICByZXR1cm4gbWVudTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlSGVhZGVyKCkge1xuXG4gICAgY29uc3QgbGFzdCA9IHNlYXJjaEN1ckhlYWRlciggaHRyZWUsIG1haW4uc2Nyb2xsVG9wKSE7XG5cbiAgICBsZXQgaGVhZGVycyA9IFtdO1xuICAgIGxldCBjdXJzb3IgID0gbGFzdDtcblxuICAgIHdoaWxlKGN1cnNvci5odG1sICE9PSBtYWluKSB7XG4gICAgICAgIGhlYWRlcnMucHVzaChjdXJzb3IpO1xuICAgICAgICBjdXJzb3IgPSBjdXJzb3IucGFyZW50ITtcbiAgICB9XG5cbiAgICBjb25zdCBodG1sID0gaGVhZGVycy5yZXZlcnNlKCkubWFwKCAoaG5vZGUsaSkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGggPSBobm9kZS5odG1sO1xuICAgICAgICBjb25zdCBoX2h0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSBgJHtnZXRUaXRsZVByZWZpeChobm9kZSl9JHtoLnRleHRDb250ZW50fWA7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgYCMke2guaWR9YCk7XG5cbiAgICAgICAgY29uc3QgbWVudSA9IGJ1aWxkTWVudShobm9kZS5wYXJlbnQhLmNoaWxkcmVuKTtcbiAgICAgICAgaF9odG1sLmFwcGVuZChsaW5rLCBtZW51KTtcblxuICAgICAgICByZXR1cm4gaF9odG1sO1xuICAgIH0pO1xuXG4gICAgaWYoIGxhc3QuY2hpbGRyZW4ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IGVtcHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgICAgICAgZW1wdHkuYXBwZW5kKCBidWlsZE1lbnUobGFzdC5jaGlsZHJlbikgKTtcblxuICAgICAgICBodG1sLnB1c2goZW1wdHkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZV9wYWdlX2hyZWYocGF0aHByZWZpeDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIGRlc2M6IGFueSkge1xuXG4gICAgICAgIGxldCBocmVmID0gYCR7cGF0aHByZWZpeH0ke3BhdGh9L2A7XG5cbiAgICAgICAgd2hpbGUoZGVzYy5jaGlsZHJlbj8ubGVuZ3RoKSB7XG4gICAgICAgICAgICBkZXNjID0gZGVzYy5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIGhyZWYgKz0gYCR7ZGVzYy5wYXRoID8/IGRlc2N9L2A7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaHJlZjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlX3BhZ2VfbWVudShwYXRocHJlZml4OiBzdHJpbmcsIHBhdGg6IHN0cmluZywgcGFnZXM6IGFueSkge1xuICAgICAgICBjb25zdCBkZXNjID0gcGFnZXMuZmluZCggKHBhZ2U6IGFueSkgPT4gcGFnZSA9PT0gcGF0aCB8fCBwYWdlLnBhdGggPT09IHBhdGggKSE7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSBkZXNjLnNuYW1lID8/IGRlc2MubmFtZSA/PyBkZXNjO1xuICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBtYWtlX3BhZ2VfaHJlZihwYXRocHJlZml4LCBwYXRoLCBkZXNjKSApO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuICAgIFxuICAgICAgICAgICAgbWVudS5hcHBlbmQoIC4uLiBwYWdlcy5tYXAoIChwYWdlOmFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50PSBwYWdlLm5hbWUgPz8gcGFnZTtcbiAgICAgICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgbWFrZV9wYWdlX2hyZWYocGF0aHByZWZpeCwgcGFnZS5wYXRoPz9wYWdlLCBwYWdlKSApO1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfSkgKTtcbiAgICBcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kKGxpbmssIG1lbnUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICAgIFxuICAgIGxldCBjdXJwYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKHJvb3RfcGF0aC5sZW5ndGgpLnNwbGl0KCcvJyk7XG5cbiAgICBjb25zdCBtb2R1bGVfaHRtbCA9IG1ha2VfcGFnZV9tZW51KHJvb3RfcGF0aCwgY3VycGFnZVswXSwgcGFnZXMpO1xuXG4gICAgY29uc3QgZGVzYyA9IHBhZ2VzLmZpbmQoIChwYWdlOiBhbnkpID0+IHBhZ2UucGF0aCA9PT0gY3VycGFnZVswXSApITtcbiAgICBjb25zdCB0eXBlX2h0bWwgICA9IG1ha2VfcGFnZV9tZW51KHJvb3RfcGF0aCArIGN1cnBhZ2VbMF0gKyBcIi9cIiwgY3VycGFnZVsxXSwgZGVzYy5jaGlsZHJlbik7XG5cbiAgICBjb25zdCBkZXNjX3R5cGUgPSBkZXNjLmNoaWxkcmVuLmZpbmQoIChwYWdlOiBhbnkpID0+IChwYWdlPy5wYXRoID8/IHBhZ2UpID09PSBjdXJwYWdlWzFdICkhO1xuICAgIGlmKCB0eXBlb2YgZGVzY190eXBlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIC8vIHRpdGxlIG51bVxuICAgICAgICBjb25zdCBkZXNjMl9pZHggPSBkZXNjX3R5cGUuY2hpbGRyZW4uZmluZEluZGV4KCAocGFnZTogYW55KSA9PiBwYWdlPy5wYXRoID8/IHBhZ2UgPT09IGN1cnBhZ2VbMl0gKSE7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoXCItLWhlYWRlcl9zdGFydF9pZFwiLCBgJHtkZXNjMl9pZHh9YCk7XG4gICAgICAgIC8vIG1lbnVcbiAgICAgICAgY29uc3Qgc2Vzc2lvbl9odG1sICAgPSBtYWtlX3BhZ2VfbWVudShyb290X3BhdGggKyBjdXJwYWdlWzBdICsgXCIvXCIrIGN1cnBhZ2VbMV0gKyBcIi9cIiwgY3VycGFnZVsyXSwgZGVzY190eXBlLmNoaWxkcmVuKTtcbiAgICAgICAgaHRtbFswXSA9IHNlc3Npb25faHRtbDtcbiAgICB9XG5cbiAgICBoZWFkZXIucmVwbGFjZUNoaWxkcmVuKG1vZHVsZV9odG1sLCB0eXBlX2h0bWwsIC4uLmh0bWwpO1xufVxuXG5tYWluLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZUhlYWRlcik7XG51cGRhdGVIZWFkZXIoKTsiLCIvL2h0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ5NDE0My9jcmVhdGluZy1hLW5ldy1kb20tZWxlbWVudC1mcm9tLWFuLWh0bWwtc3RyaW5nLXVzaW5nLWJ1aWx0LWluLWRvbS1tZXRob2RzLW9yLXByb1xuZXhwb3J0IGZ1bmN0aW9uIHN0cjJodG1sPFQgZXh0ZW5kcyBIVE1MRWxlbWVudD4oaHRtbDogc3RyaW5nKTogVCB7XG4gICAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICBodG1sID0gaHRtbC50cmltKCk7IC8vIE5ldmVyIHJldHVybiBhIHRleHQgbm9kZSBvZiB3aGl0ZXNwYWNlIGFzIHRoZSByZXN1bHRcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkISBhcyBUO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyMkRGKGh0bWw6IHN0cmluZyk6IERvY3VtZW50RnJhZ21lbnQge1xuICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgaHRtbCA9IGh0bWwudHJpbSgpOyAvLyBOZXZlciByZXR1cm4gYSB0ZXh0IG5vZGUgb2Ygd2hpdGVzcGFjZSBhcyB0aGUgcmVzdWx0XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudDtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwidmFyIHdlYnBhY2tRdWV1ZXMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIHF1ZXVlc1wiKSA6IFwiX193ZWJwYWNrX3F1ZXVlc19fXCI7XG52YXIgd2VicGFja0V4cG9ydHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGV4cG9ydHNcIikgOiBcIl9fd2VicGFja19leHBvcnRzX19cIjtcbnZhciB3ZWJwYWNrRXJyb3IgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGVycm9yXCIpIDogXCJfX3dlYnBhY2tfZXJyb3JfX1wiO1xudmFyIHJlc29sdmVRdWV1ZSA9IChxdWV1ZSkgPT4ge1xuXHRpZihxdWV1ZSAmJiBxdWV1ZS5kIDwgMSkge1xuXHRcdHF1ZXVlLmQgPSAxO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tKSk7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0gPyBmbi5yKysgOiBmbigpKSk7XG5cdH1cbn1cbnZhciB3cmFwRGVwcyA9IChkZXBzKSA9PiAoZGVwcy5tYXAoKGRlcCkgPT4ge1xuXHRpZihkZXAgIT09IG51bGwgJiYgdHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIikge1xuXHRcdGlmKGRlcFt3ZWJwYWNrUXVldWVzXSkgcmV0dXJuIGRlcDtcblx0XHRpZihkZXAudGhlbikge1xuXHRcdFx0dmFyIHF1ZXVlID0gW107XG5cdFx0XHRxdWV1ZS5kID0gMDtcblx0XHRcdGRlcC50aGVuKChyKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXhwb3J0c10gPSByO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSwgKGUpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFcnJvcl0gPSBlO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgb2JqID0ge307XG5cdFx0XHRvYmpbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChmbihxdWV1ZSkpO1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdH1cblx0dmFyIHJldCA9IHt9O1xuXHRyZXRbd2VicGFja1F1ZXVlc10gPSB4ID0+IHt9O1xuXHRyZXRbd2VicGFja0V4cG9ydHNdID0gZGVwO1xuXHRyZXR1cm4gcmV0O1xufSkpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5hID0gKG1vZHVsZSwgYm9keSwgaGFzQXdhaXQpID0+IHtcblx0dmFyIHF1ZXVlO1xuXHRoYXNBd2FpdCAmJiAoKHF1ZXVlID0gW10pLmQgPSAtMSk7XG5cdHZhciBkZXBRdWV1ZXMgPSBuZXcgU2V0KCk7XG5cdHZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cdHZhciBjdXJyZW50RGVwcztcblx0dmFyIG91dGVyUmVzb2x2ZTtcblx0dmFyIHJlamVjdDtcblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqKSA9PiB7XG5cdFx0cmVqZWN0ID0gcmVqO1xuXHRcdG91dGVyUmVzb2x2ZSA9IHJlc29sdmU7XG5cdH0pO1xuXHRwcm9taXNlW3dlYnBhY2tFeHBvcnRzXSA9IGV4cG9ydHM7XG5cdHByb21pc2Vbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChxdWV1ZSAmJiBmbihxdWV1ZSksIGRlcFF1ZXVlcy5mb3JFYWNoKGZuKSwgcHJvbWlzZVtcImNhdGNoXCJdKHggPT4ge30pKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBwcm9taXNlO1xuXHRib2R5KChkZXBzKSA9PiB7XG5cdFx0Y3VycmVudERlcHMgPSB3cmFwRGVwcyhkZXBzKTtcblx0XHR2YXIgZm47XG5cdFx0dmFyIGdldFJlc3VsdCA9ICgpID0+IChjdXJyZW50RGVwcy5tYXAoKGQpID0+IHtcblx0XHRcdGlmKGRbd2VicGFja0Vycm9yXSkgdGhyb3cgZFt3ZWJwYWNrRXJyb3JdO1xuXHRcdFx0cmV0dXJuIGRbd2VicGFja0V4cG9ydHNdO1xuXHRcdH0pKVxuXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdGZuID0gKCkgPT4gKHJlc29sdmUoZ2V0UmVzdWx0KSk7XG5cdFx0XHRmbi5yID0gMDtcblx0XHRcdHZhciBmblF1ZXVlID0gKHEpID0+IChxICE9PSBxdWV1ZSAmJiAhZGVwUXVldWVzLmhhcyhxKSAmJiAoZGVwUXVldWVzLmFkZChxKSwgcSAmJiAhcS5kICYmIChmbi5yKyssIHEucHVzaChmbikpKSk7XG5cdFx0XHRjdXJyZW50RGVwcy5tYXAoKGRlcCkgPT4gKGRlcFt3ZWJwYWNrUXVldWVzXShmblF1ZXVlKSkpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBmbi5yID8gcHJvbWlzZSA6IGdldFJlc3VsdCgpO1xuXHR9LCAoZXJyKSA9PiAoKGVyciA/IHJlamVjdChwcm9taXNlW3dlYnBhY2tFcnJvcl0gPSBlcnIpIDogb3V0ZXJSZXNvbHZlKGV4cG9ydHMpKSwgcmVzb2x2ZVF1ZXVlKHF1ZXVlKSkpO1xuXHRxdWV1ZSAmJiBxdWV1ZS5kIDwgMCAmJiAocXVldWUuZCA9IDApO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ21vZHVsZScgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMS9pbmRleC50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTEvaW5kZXguY3NzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00xL2luZGV4Lm1kXCIpO1xuIiwiIl0sIm5hbWVzIjpbIlNoYWRvd0NmZyIsIl9fY3N0cl9ob3N0IiwiQ0FOX0hBVkVfU0hBRE9XIiwiX2Nhbkhhc1NoYWRvdyIsInRhZyIsImluY2x1ZGVzIiwiX2VsZW1lbnQydGFnbmFtZSIsIkxJU1MiLCJleHRlbmRzIiwicF9leHRlbmRzIiwiaG9zdCIsInBfaG9zdCIsImRlcGVuZGVuY2llcyIsInBfZGVwcyIsImF0dHJpYnV0ZXMiLCJwX2F0dHJzIiwicGFyYW1zIiwiY29udGVudCIsImNzcyIsInNoYWRvdyIsInBfc2hhZG93IiwiSFRNTEVsZW1lbnQiLCJfZXh0ZW5kcyIsIk9iamVjdCIsImNhbkhhc1NoYWRvdyIsIkVycm9yIiwidW5kZWZpbmVkIiwicHVzaCIsIkhUTUxUZW1wbGF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJ0cmltIiwiUmVzcG9uc2UiLCJ0ZXh0IiwiTElTU0Jhc2UiLCJQYXJhbWV0ZXJzIiwic3R5bGVzaGVldHMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJmZXRjaF9jc3MiLCJDU1NTdHlsZVNoZWV0IiwiSFRNTFN0eWxlRWxlbWVudCIsInNoZWV0Iiwic3R5bGUiLCJyZXBsYWNlIiwibWFwIiwiaWR4IiwiY29uc3RydWN0b3IiLCJhdHRycyIsInNldEF0dHJEZWZhdWx0IiwiYXR0ciIsInZhbHVlIiwib25BdHRyQ2hhbmdlZCIsIl9uYW1lIiwiX29sZFZhbHVlIiwiX25ld1ZhbHVlIiwiaXNJbkRPTSIsIm9uRE9NQ29ubmVjdGVkIiwib25ET01EaXNjb25uZWN0ZWQiLCJleHRlbmRzTElTUyIsIkxpc3MiLCJwYXJhbWV0ZXJzIiwiYXNzaWduIiwiRXh0ZW5kZWRMSVNTIiwidCIsImlkIiwiYnVpbGRMSVNTSG9zdCIsIl9wYXJhbXMiLCJhbHJlYWR5RGVjbGFyZWRDU1MiLCJTZXQiLCJHRVQiLCJTeW1ib2wiLCJTRVQiLCJwcm9wZXJ0aWVzIiwiZnJvbUVudHJpZXMiLCJuIiwiZW51bWVyYWJsZSIsImdldCIsInNldCIsIkF0dHJpYnV0ZXMiLCJuYW1lIiwiZGF0YSIsImRlZmF1bHRzIiwic2V0dGVyIiwiZGVmaW5lUHJvcGVydGllcyIsIkxJU1NIb3N0QmFzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiaXNJbml0IiwiaW5pdGlhbGl6ZSIsImFwaSIsImluaXQiLCJMSVNTU3luYyIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJjdXN0b21FbGVtZW50cyIsInVwZ3JhZGUiLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uQ2xpY2tFdmVudCIsIm9icyIsImdldEF0dHJpYnV0ZSIsImFkb3B0ZWRTdHlsZVNoZWV0cyIsInNoYXJlZENTUyIsImNzc3NlbGVjdG9yIiwiQ1NTU2VsZWN0b3IiLCJoYXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJodG1sX3N0eWxlc2hlZXRzIiwicnVsZSIsImNzc1J1bGVzIiwiY3NzVGV4dCIsImhlYWQiLCJhcHBlbmQiLCJhZGQiLCJ0ZW1wbGF0ZV9lbGVtIiwic3RyIiwiXyIsIm1hdGNoIiwiY2hpbGROb2RlcyIsIm9iaiIsImhhc1NoYWRvdyIsImdldFBhcnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0UGFydHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGFnTmFtZSIsInJlbW92ZUF0dHJpYnV0ZSIsIm9ic2VydmVkQXR0cmlidXRlcyIsImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayIsIm9sZFZhbHVlIiwibmV3VmFsdWUiLCJfRE9NQ29udGVudExvYWRlZCIsInJlYWR5U3RhdGUiLCJkZWZpbmUiLCJ0YWduYW1lIiwiQ29tcG9uZW50Q2xhc3MiLCJDbGFzcyIsImh0bWx0YWciLCJhbGwiLCJMSVNTY2xhc3MiLCJvcHRzIiwiaW5zZXJ0R2xvYmFsQ1NTUnVsZXMiLCJjc3Nfc3R5bGUiLCJyZXBsYWNlU3luYyIsImluc2VydFJ1bGUiLCJERUxFR0FURURfRVZFTlRTIiwiQUxSRUFEWV9QUk9DRVNTRUQiLCJldiIsImhhbmRsZXJzIiwidHlwZSIsImVsZW0iLCJjb21wb3NlZFBhdGgiLCJTaGFkb3dSb290Iiwid2luZG93IiwidGFyZ2V0Iiwic2VsZWN0b3IiLCJoYW5kbGVyIiwibWF0Y2hlcyIsImluc2VydEdsb2JhbERlbGVnYXRlZExpc3RlbmVyIiwiZXZlbnRfbmFtZSIsImNsb3Nlc3QiLCJlbGVtZW50IiwicmVzdWx0Iiwicm9vdCIsImdldFJvb3ROb2RlIiwiYnVpbGQiLCJwYXJlbnQiLCJjbGFzc2VzIiwiY3NzdmFycyIsImxpc3RlbmVycyIsIkN1c3RvbUNsYXNzIiwid2hlbkRlZmluZWQiLCJ0b0xvd2VyQ2FzZSIsImNsYXNzTGlzdCIsInNldFByb3BlcnR5IiwidG9nZ2xlQXR0cmlidXRlIiwiZGF0YXNldCIsInJlcGxhY2VDaGlsZHJlbiIsImdldExJU1MiLCJjYWxsYmFjayIsIndoZW5BbGxEZWZpbmVkIiwidGFnbmFtZXMiLCJpc0RlZmluZWQiLCJnZXROYW1lIiwiZ2V0TElTU1N5bmMiLCJfYnVpbGRRUyIsInRhZ25hbWVfb3JfcGFyZW50IiwicXMiLCJxc28iLCJxc2EiLCJlbGVtZW50cyIsInByb21pc2VzIiwicXNjIiwicmVzIiwicXNTeW5jIiwicXNhU3luYyIsInFzY1N5bmMiLCJMSVNTX0F1dG8iLCJuYXZpZ2F0b3IiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiLCJjb250cm9sbGVyIiwic3JjIiwibG9jYXRpb24iLCJwYXRobmFtZSIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJtdXRhdGlvbiIsImFkZGl0aW9uIiwiYWRkZWROb2RlcyIsIkVsZW1lbnQiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsInJlc291cmNlcyIsImRlZmluZVdlYkNvbXBvbmVudCIsImZpbGVzIiwianMiLCJrbGFzcyIsIldlYkNvbXBvbmVudCIsImZpbGVuYW1lcyIsImZpbGUiLCJlbmRzV2l0aCIsIl9pbXBvcnQiLCJfZmV0Y2hUZXh0IiwiaSIsIkNzdG1FdmVudCIsIkN1c3RvbUV2ZW50IiwiYXJncyIsImRldGFpbCIsImZldGNoUmVzb3VyY2UiLCJyZXNvdXJjZSIsImZldGNoIiwidXJpIiwiaXNMaXNzQXV0byIsIm9wdGlvbnMiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJkZWZhdWx0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJIVE1MQ0xBU1NfUkVHRVgiLCJlbGVtZW50TmFtZUxvb2t1cFRhYmxlIiwiZXhlYyIsIkZvcm1hdHMiLCJzX2Zvcm11bGEiLCJnZXRSYW5nZSIsImZvcm1hdCIsImV1cm9zIiwic19jb21wbGV4X2Zvcm11bGEiLCJzX3R5cGVzIiwiRGF0ZSIsInNfY3Vyc29yIiwic18kZm9ybXVsYSIsInNfJGZvcm0iLCJyZWYiLCJzaGVldF9yZWNvcGllX21vdGl2YXRpb24iLCJzaGVldF9yZWNvcGllX21vdGl2YXRpb25fZW1wdHkiLCJzaGVldF9yZWNvcGllX2luY3IiLCJjIiwiWCIsInRkIiwiZm9jdXMiLCJ0ZXh0Q29udGVudCIsInN0cjJodG1sIiwiUmFuZ2VPdmVybGF5IiwiRXZlbnRUYXJnZXQiLCJvdmVybGF5IiwiY2xhc3NsaXN0IiwidXBkYXRlIiwic2V0UmFuZ2UiLCJyYW5nZSIsInBsYWdlX25hbWUiLCJnZXRSZWN0IiwicmVjdCIsInRvZ2dsZSIsInNldFJlY3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiRm9ybXVsYVJlZiIsInNldENvbG9yIiwiY29sb3JfaWQiLCJyZW1vdmUiLCJSZWNvcHlIYW5kbGUiLCJ4IiwieSIsInciLCJoIiwiRm9ybXVsYSIsIkNhbGNTaGVldCIsIkNlbGxMaXN0IiwiRm9ybWF0TWFuYWdlciIsImN0cmxLZXkiLCJjaGFuZ2VkIiwia2V5Iiwic2VsZWN0aW9uIiwidG9nZ2xlRm9ybWF0Iiwic2hpZnRLZXkiLCJwb3VyY2VudCIsIm51bWJlciIsInByZXZlbnREZWZhdWx0IiwiZGlzcGF0Y2hFdmVudCIsImZsb2F0MkRhdGUiLCJmbG9hdCIsInNldERhdGUiLCJnZXREYXRlIiwiZGF0ZTJGbG9hdCIsImRhdGUiLCJiZWciLCJnZXRUaW1lIiwidG9GaXhlZCIsImZvcm1hdFJhdyIsInB0aGlzIiwicmF3Q29udGVudCIsInRvU3RyaW5nIiwiY2FsbCIsImNhY2hlZFZhbHVlIiwicHJlYyIsInRvUHJlY2lzaW9uIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZ2V0U2hlZXRGcm9tQ2VsbCIsInRvTG9jYWxlU3RyaW5nIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwic2xpY2UiLCJGb3JtYXQiLCJhcHBseVRvIiwiY2VsbCIsImNlbGxzIiwidmFsIiwiciIsImoiLCJyZWxhdGl2ZVRvIiwic3RhcnRzV2l0aCIsImdldFByb3BlcnR5IiwiaGFzUHJvcGVydHkiLCJleHRyYWN0Rm9ybWF0IiwiZjIiLCJ2YWx1ZXMiLCJpdGVtIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImNvbHNwYW4iLCJyb3dzcGFuIiwic3BhbiIsImhhc0F0dHJpYnV0ZSIsInByZWNpc2lvbiIsIkNhbGNGb3JtdWxhIiwic3RhdGVzIiwiY2VsbF9lZGl0Iiwic3RhdGUiLCJzeW5jVG8iLCJjdXJzb3IiLCJmaXJzdENlbGwiLCJpc1JPIiwicmFuZ2VzX3Rva2VuIiwiZHJvdyIsImRjb2wiLCJuZXdfcmFuZ2VzIiwicG9zIiwiY2VsbFBvcyIsImxhc3RJbmRleE9mIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwibmV3X2Zvcm11bGEiLCJvZmZzZXQiLCJlbmQiLCJwYXJzZV9mb3JtdWxhIiwicmFuZ2VzVG9rZW4iLCJyZXNldENhY2hlIiwiZXh0cmFjdFRva2VuIiwidG9rZW4iLCJoYXNDb21tYSIsIk5vZGUiLCJjaGlsZHJlbiIsImZjdCIsImV2YWwiLCJ0b051bWJlciIsImEiLCJOdW1iZXIiLCJvcF9pbXBsIiwiYiIsIk1hdGgiLCJwb3ciLCJvcF9wcmlvIiwib3BzIiwib3AiLCJ0b2tlbmxpc3QyVHJlZSIsInRva2VucyIsIm5iIiwicmF3IiwiY3VyIiwicHJpb3JpdHkiLCJmaW5kSW5kZXgiLCJ1X29wIiwib3BfdG9rZW4iLCJsZWZ0IiwicmlnaHQiLCJjdXJUb2tlbiIsIm5vZGUiLCJyYW5nZXMiLCJmaWx0ZXIiLCJQbGFnZUZvcm11bGEiLCJjb2RlIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwic2VsZWN0ZWQiLCJnZXRDZWxscyIsImNsZWFyIiwiYmx1ciIsIlBsYWdlU2VsZWN0b3IiLCJzZWxlY3RlZF9jZWxscyIsImNvbHMiLCJ0Ym9keSIsImNvbF9pZCIsImNsaWVudFgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyb3dzIiwicm93X2lkIiwiY2xpZW50WSIsIm1haW4iLCJvbl9tb3VzZV9tb3ZlIiwicmVwbGFjZUFsbCIsImdldFZpc2libGVDZWxsIiwicG9zMnJlZiIsIm5iUm93cyIsIm5iQ29scyIsIm9uY2UiLCJpc0FjdGl2ZSIsIm9uSW5wdXQiLCJycmFuZ2UiLCJnZXRTZWxlY3Rpb24iLCJnZXRSYW5nZUF0Iiwic3RhcnRPZmZzZXQiLCJjaGlsZCIsIm5vZGVUeXBlIiwiVEVYVF9OT0RFIiwic3RhcnRDb250YWluZXIiLCJjcmVhdGVSYW5nZSIsInNlbCIsInNldFN0YXJ0IiwiY29sbGFwc2UiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsInBhcnNlSW5wdXQiLCJ0ZXN0X251bWJlciIsImlzTmFOIiwicGFydHMiLCJzcGxpdCIsInRlc3RfZGF0ZSIsImdldEZ1bGxZZWFyIiwiU3RhdGUiLCJwcmV2X3N0YXRlIiwiU3RhdGVzIiwiZW50cmllcyIsInMiLCJ0Ymxfb2Zmc2V0Iiwib2Zmc2V0VG9wIiwic3RhcnQiLCJvZmZzZXRMZWZ0IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJyb3dfZGlmZiIsImNvbF9kaWZmIiwicm93IiwiY29sIiwicmVjb3B5IiwiY29weSIsImxhc3RfcmVjb3B5X3RhcmdldCIsImxhc3RfcmVjb3B5X2RpciIsIm9uX3JlY29weV9tb3ZlIiwiZF9weCIsIndpZHRoIiwiZF9weSIsImhlaWdodCIsImRfeCIsImRfeSIsInNpZ24iLCJhYnMiLCJwcmV2IiwiZGlmZl94IiwiZGlmZl95IiwicG9zX2N1ciIsImNsYXNzTmFtZSIsImZvcm11bGFfYmFyIiwicGxhZ2UiLCJmb3JtdWxhIiwicm8iLCJpc19ybyIsImRfcm93IiwiZF9jb2wiLCJuZXh0IiwiYWx0S2V5IiwiZHN0IiwiZGVlcENsb25lIiwiZGVsZXRlRm9ybWF0IiwiZGVsZXRlQ29udGVudCIsImJ1YmJsZXMiLCJvbklucHV0MiIsInJhbmdlc19jb2xvcnMiLCJjdXJfb2Zmc2V0IiwicmFuZ2VfbmFtZSIsInJhbmdlc19uYW1lcyIsImtleXMiLCJ3YXJuIiwicGFyZW50RWxlbWVudCIsInJlc2l6ZSIsIm5icm93cyIsIm5iY29scyIsImNvbF9odG1sIiwidGgiLCJyb3dfaHRtbCIsInRhYmxlIiwicmVzaXplT2JzIiwiUmVzaXplT2JzZXJ2ZXIiLCJmcm9tIiwidG8iLCJIVE1MVGFibGVDZWxsRWxlbWVudCIsInJlZjJwb3MiLCJiZWdfcm93IiwiYmVnX2NvbCIsImVuZF9yb3ciLCJlbmRfY29sIiwiZW5kX2xpbmVfY29sIiwic2VwIiwic2VhcmNoIiwiY2hhckNvZGVBdCIsImNvbF9zdHIiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNvcnQiLCJtaW4iLCJtYXgiLCJuYl9jb2xzIiwiZmxvb3IiLCJmIiwiaXNGb3JtYXQiLCJyYXdfdmFsIiwidiIsImRpZmYiLCJmb3JtYXRzIiwibmJfZGF0ZXMiLCJpbmRleE9mIiwic2V0Uk8iLCJjbG9uZSIsImNsb25lTm9kZSIsInNuYW1lIiwicGF0aCIsInJvb3RfcGF0aCIsImhvc3RuYW1lIiwicGFnZXMiLCJoZWFkZXIiLCJ0aXRsZXMiLCJodHJlZSIsImh0bWwiLCJsZXZlbCIsImh0cmVlX2N1cnNvciIsInRpdGxlIiwic2VhcmNoQ3VySGVhZGVyIiwicG9zaXRpb24iLCJoaWQiLCJnZXRUaXRsZVByZWZpeCIsIm51bSIsImJ1aWxkTWVudSIsIm5vZGVzIiwibWVudSIsInVwZGF0ZUhlYWRlciIsImxhc3QiLCJzY3JvbGxUb3AiLCJyZXZlcnNlIiwiaG5vZGUiLCJoX2h0bWwiLCJsaW5rIiwiZW1wdHkiLCJtYWtlX3BhZ2VfaHJlZiIsInBhdGhwcmVmaXgiLCJkZXNjIiwiaHJlZiIsIm1ha2VfcGFnZV9tZW51IiwiZmluZCIsInBhZ2UiLCJjdXJwYWdlIiwibW9kdWxlX2h0bWwiLCJ0eXBlX2h0bWwiLCJkZXNjX3R5cGUiLCJkZXNjMl9pZHgiLCJib2R5Iiwic2Vzc2lvbl9odG1sIiwidGVtcGxhdGUiLCJzdHIyREYiXSwic291cmNlUm9vdCI6IiJ9