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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host table {\n    border-collapse: collapse;\n    border-top-color: transparent;\n\n    & > tbody {\n        outline: 0px solid transparent;\n    }\n\n    & > tbody > tr:first-child {\n        border-top-color: transparent;\n        \n        & > th {\n            border-top-color: transparent;\n        }\n    }\n}\n\n:host :is(tr,th,td) {\n    border:1px solid #c0c0c0;\n}\n\n:host([showgrid=\"false\"]) td {\n    border-color: transparent;\n}\n\n:host tr {\n    height: 0.45cm;\n    line-height: 0.45cm;\n}\n\n\n:host :is(td, th):not([contenteditable]) {\n    user-select: none;\n}\n/*\n:host td[contenteditable] {\n    user-select: text;\n}*/\n\n:host :is(td, th) {\n    color: black;\n    width: 2.26cm;\n    height: 0.45cm;\n\n    font-size: 10pt;\n\n    box-sizing: border-box;\n    font-family: 'Liberation Sans';\n}\n\n:host tr > th:first-child {\n    width: calc( 2.26cm / 2.5) ;\n}\n\n:host {\n    display: inline-flex;\n    flex-direction: column;\n}\n\n:host div.toolbar {\n    background-color: #cecece;\n    display: flex;\n    gap: 5px;\n    padding: 4px;\n\n    & > *:not(:first-child) {\n        flex: 1 1 0;\n    }\n    & > *:first-child {\n        width: calc( 1.5 * 2.26cm );\n    }\n}\n\n:host th {\n    background-color: #cecece;\n    border-color: #8a8a8a;\n    font-weight: normal;\n\n    &.highlight {\n        background-color: #398ee7;\n        color: white;\n    }\n}\n\n:host(.cell_edit) .cursor {\n    display: none;\n}\n\n:host(.recopy) {\n    cursor: cell;\n}\n\n:host {\n\n    .recopy {\n        position: absolute;\n        padding: 0;\n        box-sizing: border-box;\n        cursor: cell;\n        background-color: #398ee7;\n\n    }\n\n    .cursor {\n        position: absolute;\n        padding: 0;\n        box-sizing: border-box;\n        background: none;\n        border: 2px solid #398ee7;\n        pointer-events: none;\n    }\n}\n\n:host .hidden {\n    display: none;\n}\n\n:host td {\n\n    --font_size: 10pt;\n    font-size: var(--font_size);\n    line-height: calc( var(--font_size) * 1.2 );\n\n    --indent: 0;\n\n    --border_color: black;\n    --background_color: white;\n    --foreground_color: black;\n    background-color: var(--background_color);\n    color           : var(--foreground_color);\n\n    white-space: pre;\n\n    vertical-align: bottom;\n\n    &:is([data-type=\"number\"],[data-type=\"pourcent\"],[data-type=\"date\"], [data-type=\"boolean\"]) {\n        text-align: right;\n    }\n\n    &[contenteditable] {\n        outline: 0px solid transparent;\n    }\n\n    &.ajuster {\n        word-break: break-all;\n        white-space: normal;\n    }\n\n    &.highlight {\n        background-color: #cde3f9;\n    }\n\n    /** style **/\n    &.italic {\n        font-style: italic;\n    }\n    &.bold {\n        font-weight: bold;\n    }\n    &.underline {\n        text-decoration: underline;\n    }\n    &.align_left {\n        padding-left: calc( var(--indent) * 10px);\n        text-align: left;\n    }\n    &.align_center {\n        text-align: center;\n    }\n    &.align_right {\n        padding-right: calc( var(--indent) * 10px);\n        text-align: right;\n    }\n    &.valign_top {\n        vertical-align: top;\n    }\n    &.valign_middle {\n        vertical-align: middle;\n    }\n    &.valign_bottom {\n        vertical-align: bottom;\n    }\n    /* https://stackoverflow.com/questions/1241757/applying-borders-to-a-single-table-cell-when-using-border-collapse */\n    &.border_top {\n        border-top: 1px double var(--border_color);\n    }\n    &.border_bottom {\n        border-bottom: 1px double var(--border_color);\n    }\n    &.border_left {\n        border-left: 1px double var(--border_color);\n    }\n    &.border_right {\n        border-right: 1px double var(--border_color);\n    }\n}\n\n:host {\n    position: relative;\n}\n\n:host .range_highlight {\n    position: absolute;\n    padding: 0;\n    box-sizing: border-box;\n\n    background: none;\n    border: 2px solid red;\n\n    border-color: var(--highlight_color);\n}\n\n:host .formula_highlight {\n    color: var(--highlight_color);\n}\n\n:host .highlight_0 {\n    --highlight_color: #fa0c0c;\n}\n\n:host .highlight_1 {\n    --highlight_color: #fa0cfa;\n}\n\n:host .highlight_2 {\n    --highlight_color: #0c840c;\n}\n\n:host .highlight_3 {\n    --highlight_color: #010180;\n}\n\n:host .highlight_4 {\n    --highlight_color: #871717;\n}\n\n:host .highlight_5 {\n    --highlight_color: #871787;\n}\n\n:host .highlight_6 {\n    --highlight_color: #84840c;\n}\n\n:host .highlight_7 {\n    --highlight_color: #0c0cfa;\n}\n\n\n.copy_highlight {\n    position: absolute;\n    border: 1px dashed black;\n    background: none;\n    pointer-events: none;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* Tomorrow Theme */\n/* http://jmblog.github.com/color-themes-for-google-code-highlightjs */\n/* Original theme - https://github.com/chriskempson/tomorrow-theme */\n\n/* Tomorrow Comment */\n.hljs-comment,\n.hljs-quote {\n\tcolor: #8e908c;\n}\n\n/* Tomorrow Red */\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-regexp,\n.hljs-deletion {\n\tcolor: #c82829;\n}\n\n/* Tomorrow Orange */\n.hljs-number,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-literal,\n.hljs-type,\n.hljs-params,\n.hljs-meta,\n.hljs-link {\n\tcolor: #f5871f;\n}\n\n/* Tomorrow Yellow */\n.hljs-attribute {\n\tcolor: #eab700;\n}\n\n/* Tomorrow Green */\n.hljs-string,\n.hljs-symbol,\n.hljs-bullet,\n.hljs-addition {\n\tcolor: #718c00;\n}\n\n/* Tomorrow Blue */\n.hljs-title,\n.hljs-section {\n\tcolor: #4271ae;\n}\n\n/* Tomorrow Purple */\n.hljs-keyword,\n.hljs-selector-tag {\n\tcolor: #8959a8;\n}\n\n.hljs {\n\tdisplay: block;\n\toverflow-x: auto;\n\tcolor: #4d4d4c;\n\tpadding: 0.5em;\n}\n\n.hljs-emphasis {\n\tfont-style: italic;\n}\n\n.hljs-strong {\n\tfont-weight: bold;\n}");

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





{
    const sheet = await LISS__WEBPACK_IMPORTED_MODULE_0__["default"].qs('#sheet_test');
//await load(sheet, "assets/tableur/test.ods");
}const sheet_format_content = await LISS__WEBPACK_IMPORTED_MODULE_0__["default"].qs('#sheet_format_content');
sheet_format_content.getCells("A1:F1").format("bold", "align_center").content = [
    "Taille",
    "Gras",
    "Italique",
    "Souligné",
    "Couleur texte",
    "Couleur fond"
];
sheet_format_content.getCells("A2:F2").format("align_center").content = "A";
sheet_format_content.getCells("A2").format({
    font_size: '15pt'
});
sheet_format_content.getCells("B2").format('bold');
sheet_format_content.getCells("C2").format('italic');
sheet_format_content.getCells("D2").format('underline');
sheet_format_content.getCells("E2").format({
    foreground_color: 'blue'
});
sheet_format_content.getCells("F2").format({
    background_color: 'yellow'
});
const sheet_toolbar_format_content = await LISS__WEBPACK_IMPORTED_MODULE_0__["default"].qs('#sheet_toolbar_format_content');
sheet_toolbar_format_content.syncTo(sheet_format_content);
sheet_toolbar_format_content.disableAllExcept("font_size", "bold", "italic", "underline", "foreground_color", "background_color");
{
    const sheet_align = await LISS__WEBPACK_IMPORTED_MODULE_0__["default"].qs('#sheet_align');
    sheet_align.getCells("B1:E1").format("bold", "align_center").content = [
        "Haut",
        "Milieu",
        "Bas",
        "Ajuster"
    ];
    sheet_align.getCells("A2:A4").format("bold", "align_center", "valign_middle").content = [
        "Gauche",
        "Centre",
        "Droit"
    ];
    sheet_align.getCells("B2:D4").content = "A";
    sheet_align.getCells("B2:E2").format("align_left");
    sheet_align.getCells("B3:E3").format('align_center');
    sheet_align.getCells("B4:E4").format('align_right');
    sheet_align.getCells("B2:B4").format('valign_top');
    sheet_align.getCells("C2:C4").format('valign_middle');
    sheet_align.getCells("D2:D4").format('valign_bottom');
    sheet_align.getCells("E2:E4").format("ajuster").content = `AAAAAAAAAAAAAAAAAAAAAAAAAAAA`;
    const sheet_toolbar_align = await LISS__WEBPACK_IMPORTED_MODULE_0__["default"].qs('#sheet_toolbar_align');
    sheet_toolbar_align.syncTo(sheet_align);
    sheet_toolbar_align.disableAllExcept("align_left", "align_center", "align_right", "valign_top", "valign_middle", "valign_bottom", "ajuster");
}{
    const sheet = await LISS__WEBPACK_IMPORTED_MODULE_0__["default"].qs('#sheet_format');
    sheet.getCells("A1:E1").format("bold", "align_center").content = [
        1,
        "Monnaie",
        "Pourcent",
        "Nombre",
        "Date"
    ];
    sheet.getCells("A2:A4").format("bold", "align_center").content = [
        "Normal",
        "+1 decimal",
        "-1 decimal"
    ];
    sheet.getCells("B2:E4").content = "=$A$1";
    sheet.getCells("B2:B4").format(struct_calc_format_ts__WEBPACK_IMPORTED_MODULE_4__.Formats.euros);
    sheet.getCells("C2:C4").format(struct_calc_format_ts__WEBPACK_IMPORTED_MODULE_4__.Formats.pourcent);
    sheet.getCells("D2:D4").format(struct_calc_format_ts__WEBPACK_IMPORTED_MODULE_4__.Formats.number);
    sheet.getCells("E2:E4").format(struct_calc_format_ts__WEBPACK_IMPORTED_MODULE_4__.Formats.date);
    sheet.getCells("B3:E3").format({
        precision: 3
    });
    sheet.getCells("B4:E4").format({
        precision: 1
    });
    const sheet_toolbar = await LISS__WEBPACK_IMPORTED_MODULE_0__["default"].qs('#sheet_toolbar_format');
    sheet_toolbar.syncTo(sheet);
    sheet_toolbar.disableAllExcept("format_monnaie", "format_pourcent", "format_nb", "format_date", "format_zero_p1", "format_zero_m1");
}{
    const sheet = await LISS__WEBPACK_IMPORTED_MODULE_0__["default"].qs('#sheet_bordures');
    sheet.getCells('B2').format({
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
    sheet.getCells("A1:B1").format("bold", "align_center").content = [
        "Gauche",
        "Droite"
    ];
    sheet.getCells('A2:B5').content = "A";
    sheet.getCells('A2:A5').format("align_left");
    sheet.getCells('B2:B5').format("align_right");
    sheet.getCells('A3:B3').format({
        indent: 1
    });
    sheet.getCells('A4:B4').format({
        indent: 2
    });
    sheet.getCells('A5:B5').format({
        indent: 3
    });
    const sheet_toolbar = await LISS__WEBPACK_IMPORTED_MODULE_0__["default"].qs('#sheet_toolbar_retraits');
    sheet_toolbar.syncTo(sheet);
    sheet_toolbar.disableAllExcept("retrait_p1", "retrait_m1");
}{
    const sheet = await LISS__WEBPACK_IMPORTED_MODULE_0__["default"].qs('#sheet_fusion');
    sheet.getCells('B2').format({
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
        sheet.cursor.addEventListener('change', ()=>{
            sheet.selection.replaceAll(sheet.getVisibleCell(sheet.cursor));
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
            end.offsetLeft + end.clientWidth - start.offsetLeft,
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
                const cell = this.getCells(target.textContent).cells[0];
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
                    ref.setRange(this.getCells(range));
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
            from = this.ref2pos(from);
            return this.getRange(from, to);
        }
        if (typeof to === "string") return this.getRange(from, this.ref2pos(to));
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
        ref = ref.replaceAll('$', '');
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
/******/ __webpack_require__("./src/pages/R1-01/CM/CM2/index.ts");
/******/ __webpack_require__("./src/pages/R1-01/CM/CM2/index.css");
/******/ var __webpack_exports__ = __webpack_require__("./src/pages/R1-01/CM/CM2/index.md");
/******/ var __webpack_exports__default = __webpack_exports__["default"];
/******/ export { __webpack_exports__default as default };
/******/ 

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ2pGO1VBQ0E7VUFDQTs7Ozs7VUNQQTs7Ozs7VUNBQTtVQUNBO1VBQ0E7VUFDQSx1REFBdUQsaUJBQWlCO1VBQ3hFO1VBQ0EsZ0RBQWdELGFBQWE7VUFDN0Q7Ozs7O1VDTkE7Ozs7O1NFQUE7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00yL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTIvaW5kZXgubWQiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvaW5kZXguY3NzIiwid2VicGFjazovL0NvdXJzLy4vbGlicy9MSVNTL2luZGV4LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMi9pbmRleC50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9SYW5nZU92ZXJsYXkudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvZm9ybWF0LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL2Zvcm11bGFfZWRpdG9yLnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL2Zvcm11bGFfcGFyc2VyLnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL3BsYWdlX2VkaXRvci50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9wbGFnZV9zZWxlY3Rvci50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9zaGVldC50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy90b29sYmFyLnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jb250ZW50LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9tZW51LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC91dGlscy9zdHIyaHRtbC50cyIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvYXN5bmMgbW9kdWxlIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwYWdlcy9SMS0wMS9DTS9DTTIvaW5kZXguaHRtbFwiOyIsImV4cG9ydCBkZWZhdWx0IFwiOmhvc3QgdGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXG4gICAgJiA+IHRib2R5IHtcXG4gICAgICAgIG91dGxpbmU6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgfVxcblxcbiAgICAmID4gdGJvZHkgPiB0cjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIFxcbiAgICAgICAgJiA+IHRoIHtcXG4gICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG46aG9zdCA6aXModHIsdGgsdGQpIHtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjYzBjMGMwO1xcbn1cXG5cXG46aG9zdChbc2hvd2dyaWQ9XFxcImZhbHNlXFxcIl0pIHRkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuOmhvc3QgdHIge1xcbiAgICBoZWlnaHQ6IDAuNDVjbTtcXG4gICAgbGluZS1oZWlnaHQ6IDAuNDVjbTtcXG59XFxuXFxuXFxuOmhvc3QgOmlzKHRkLCB0aCk6bm90KFtjb250ZW50ZWRpdGFibGVdKSB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4vKlxcbjpob3N0IHRkW2NvbnRlbnRlZGl0YWJsZV0ge1xcbiAgICB1c2VyLXNlbGVjdDogdGV4dDtcXG59Ki9cXG5cXG46aG9zdCA6aXModGQsIHRoKSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDIuMjZjbTtcXG4gICAgaGVpZ2h0OiAwLjQ1Y207XFxuXFxuICAgIGZvbnQtc2l6ZTogMTBwdDtcXG5cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdMaWJlcmF0aW9uIFNhbnMnO1xcbn1cXG5cXG46aG9zdCB0ciA+IHRoOmZpcnN0LWNoaWxkIHtcXG4gICAgd2lkdGg6IGNhbGMoIDIuMjZjbSAvIDIuNSkgO1xcbn1cXG5cXG46aG9zdCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG46aG9zdCBkaXYudG9vbGJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuXFxuICAgICYgPiAqOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgICAgIGZsZXg6IDEgMSAwO1xcbiAgICB9XFxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIHdpZHRoOiBjYWxjKCAxLjUgKiAyLjI2Y20gKTtcXG4gICAgfVxcbn1cXG5cXG46aG9zdCB0aCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XFxuICAgIGJvcmRlci1jb2xvcjogIzhhOGE4YTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG5cXG4gICAgJi5oaWdobGlnaHQge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM5OGVlNztcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcbn1cXG5cXG46aG9zdCguY2VsbF9lZGl0KSAuY3Vyc29yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuOmhvc3QoLnJlY29weSkge1xcbiAgICBjdXJzb3I6IGNlbGw7XFxufVxcblxcbjpob3N0IHtcXG5cXG4gICAgLnJlY29weSB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIGN1cnNvcjogY2VsbDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzOThlZTc7XFxuXFxuICAgIH1cXG5cXG4gICAgLmN1cnNvciB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMzk4ZWU3O1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIH1cXG59XFxuXFxuOmhvc3QgLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbjpob3N0IHRkIHtcXG5cXG4gICAgLS1mb250X3NpemU6IDEwcHQ7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udF9zaXplKTtcXG4gICAgbGluZS1oZWlnaHQ6IGNhbGMoIHZhcigtLWZvbnRfc2l6ZSkgKiAxLjIgKTtcXG5cXG4gICAgLS1pbmRlbnQ6IDA7XFxuXFxuICAgIC0tYm9yZGVyX2NvbG9yOiBibGFjaztcXG4gICAgLS1iYWNrZ3JvdW5kX2NvbG9yOiB3aGl0ZTtcXG4gICAgLS1mb3JlZ3JvdW5kX2NvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZF9jb2xvcik7XFxuICAgIGNvbG9yICAgICAgICAgICA6IHZhcigtLWZvcmVncm91bmRfY29sb3IpO1xcblxcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xcblxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcblxcbiAgICAmOmlzKFtkYXRhLXR5cGU9XFxcIm51bWJlclxcXCJdLFtkYXRhLXR5cGU9XFxcInBvdXJjZW50XFxcIl0sW2RhdGEtdHlwZT1cXFwiZGF0ZVxcXCJdLCBbZGF0YS10eXBlPVxcXCJib29sZWFuXFxcIl0pIHtcXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICB9XFxuXFxuICAgICZbY29udGVudGVkaXRhYmxlXSB7XFxuICAgICAgICBvdXRsaW5lOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgJi5hanVzdGVyIHtcXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIH1cXG5cXG4gICAgJi5oaWdobGlnaHQge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NkZTNmOTtcXG4gICAgfVxcblxcbiAgICAvKiogc3R5bGUgKiovXFxuICAgICYuaXRhbGljIHtcXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgfVxcbiAgICAmLmJvbGQge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIH1cXG4gICAgJi51bmRlcmxpbmUge1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIH1cXG4gICAgJi5hbGlnbl9sZWZ0IHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyggdmFyKC0taW5kZW50KSAqIDEwcHgpO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgfVxcbiAgICAmLmFsaWduX2NlbnRlciB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgJi5hbGlnbl9yaWdodCB7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKCB2YXIoLS1pbmRlbnQpICogMTBweCk7XFxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgfVxcbiAgICAmLnZhbGlnbl90b3Age1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgfVxcbiAgICAmLnZhbGlnbl9taWRkbGUge1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgfVxcbiAgICAmLnZhbGlnbl9ib3R0b20ge1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gICAgfVxcbiAgICAvKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMjQxNzU3L2FwcGx5aW5nLWJvcmRlcnMtdG8tYS1zaW5nbGUtdGFibGUtY2VsbC13aGVuLXVzaW5nLWJvcmRlci1jb2xsYXBzZSAqL1xcbiAgICAmLmJvcmRlcl90b3Age1xcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IGRvdWJsZSB2YXIoLS1ib3JkZXJfY29sb3IpO1xcbiAgICB9XFxuICAgICYuYm9yZGVyX2JvdHRvbSB7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZG91YmxlIHZhcigtLWJvcmRlcl9jb2xvcik7XFxuICAgIH1cXG4gICAgJi5ib3JkZXJfbGVmdCB7XFxuICAgICAgICBib3JkZXItbGVmdDogMXB4IGRvdWJsZSB2YXIoLS1ib3JkZXJfY29sb3IpO1xcbiAgICB9XFxuICAgICYuYm9yZGVyX3JpZ2h0IHtcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IGRvdWJsZSB2YXIoLS1ib3JkZXJfY29sb3IpO1xcbiAgICB9XFxufVxcblxcbjpob3N0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG46aG9zdCAucmFuZ2VfaGlnaGxpZ2h0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taGlnaGxpZ2h0X2NvbG9yKTtcXG59XFxuXFxuOmhvc3QgLmZvcm11bGFfaGlnaGxpZ2h0IHtcXG4gICAgY29sb3I6IHZhcigtLWhpZ2hsaWdodF9jb2xvcik7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfMCB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjZmEwYzBjO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzEge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogI2ZhMGNmYTtcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF8yIHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICMwYzg0MGM7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfMyB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjMDEwMTgwO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzQge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzg3MTcxNztcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF81IHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICM4NzE3ODc7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfNiB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjODQ4NDBjO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0Xzcge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzBjMGNmYTtcXG59XFxuXFxuXFxuLmNvcHlfaGlnaGxpZ2h0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBUb21vcnJvdyBUaGVtZSAqL1xcbi8qIGh0dHA6Ly9qbWJsb2cuZ2l0aHViLmNvbS9jb2xvci10aGVtZXMtZm9yLWdvb2dsZS1jb2RlLWhpZ2hsaWdodGpzICovXFxuLyogT3JpZ2luYWwgdGhlbWUgLSBodHRwczovL2dpdGh1Yi5jb20vY2hyaXNrZW1wc29uL3RvbW9ycm93LXRoZW1lICovXFxuXFxuLyogVG9tb3Jyb3cgQ29tbWVudCAqL1xcbi5obGpzLWNvbW1lbnQsXFxuLmhsanMtcXVvdGUge1xcblxcdGNvbG9yOiAjOGU5MDhjO1xcbn1cXG5cXG4vKiBUb21vcnJvdyBSZWQgKi9cXG4uaGxqcy12YXJpYWJsZSxcXG4uaGxqcy10ZW1wbGF0ZS12YXJpYWJsZSxcXG4uaGxqcy10YWcsXFxuLmhsanMtbmFtZSxcXG4uaGxqcy1zZWxlY3Rvci1pZCxcXG4uaGxqcy1zZWxlY3Rvci1jbGFzcyxcXG4uaGxqcy1yZWdleHAsXFxuLmhsanMtZGVsZXRpb24ge1xcblxcdGNvbG9yOiAjYzgyODI5O1xcbn1cXG5cXG4vKiBUb21vcnJvdyBPcmFuZ2UgKi9cXG4uaGxqcy1udW1iZXIsXFxuLmhsanMtYnVpbHRfaW4sXFxuLmhsanMtYnVpbHRpbi1uYW1lLFxcbi5obGpzLWxpdGVyYWwsXFxuLmhsanMtdHlwZSxcXG4uaGxqcy1wYXJhbXMsXFxuLmhsanMtbWV0YSxcXG4uaGxqcy1saW5rIHtcXG5cXHRjb2xvcjogI2Y1ODcxZjtcXG59XFxuXFxuLyogVG9tb3Jyb3cgWWVsbG93ICovXFxuLmhsanMtYXR0cmlidXRlIHtcXG5cXHRjb2xvcjogI2VhYjcwMDtcXG59XFxuXFxuLyogVG9tb3Jyb3cgR3JlZW4gKi9cXG4uaGxqcy1zdHJpbmcsXFxuLmhsanMtc3ltYm9sLFxcbi5obGpzLWJ1bGxldCxcXG4uaGxqcy1hZGRpdGlvbiB7XFxuXFx0Y29sb3I6ICM3MThjMDA7XFxufVxcblxcbi8qIFRvbW9ycm93IEJsdWUgKi9cXG4uaGxqcy10aXRsZSxcXG4uaGxqcy1zZWN0aW9uIHtcXG5cXHRjb2xvcjogIzQyNzFhZTtcXG59XFxuXFxuLyogVG9tb3Jyb3cgUHVycGxlICovXFxuLmhsanMta2V5d29yZCxcXG4uaGxqcy1zZWxlY3Rvci10YWcge1xcblxcdGNvbG9yOiAjODk1OWE4O1xcbn1cXG5cXG4uaGxqcyB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0b3ZlcmZsb3cteDogYXV0bztcXG5cXHRjb2xvcjogIzRkNGQ0YztcXG5cXHRwYWRkaW5nOiAwLjVlbTtcXG59XFxuXFxuLmhsanMtZW1waGFzaXMge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmhsanMtc3Ryb25nIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XCI7IiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBleHBvcnRlZCB0eXBlcyA9PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgdHlwZSBDU1NfUmVzb3VyY2UgPSBzdHJpbmd8UmVzcG9uc2V8SFRNTFN0eWxlRWxlbWVudHxDU1NTdHlsZVNoZWV0O1xuZXhwb3J0IHR5cGUgQ1NTX1NvdXJjZSAgID0gQ1NTX1Jlc291cmNlIHwgUHJvbWlzZTxDU1NfUmVzb3VyY2U+O1xuXG5leHBvcnQgdHlwZSBIVE1MX1Jlc291cmNlID0gc3RyaW5nfFJlc3BvbnNlfEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XG5leHBvcnQgdHlwZSBIVE1MX1NvdXJjZSAgID0gSFRNTF9SZXNvdXJjZSB8IFByb21pc2U8SFRNTF9SZXNvdXJjZT47XG5cbmV4cG9ydCB0eXBlIExJU1NPcHRpb25zPEV4dGVuZHMgICAgZXh0ZW5kcyBDbGFzcyxcblx0XHRcdFx0XHRcdEhvc3QgICAgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHRcdEF0dHJzICAgICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0XHRQYXJhbWV0ZXJzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4gPSB7XG5cblx0ZXh0ZW5kcz86IENvbnN0cnVjdG9yPEV4dGVuZHM+LFxuXHRob3N0ICAgPzogQ29uc3RydWN0b3I8SG9zdD4sXG5cblx0ZGVwZW5kZW5jaWVzPzogcmVhZG9ubHkgUHJvbWlzZTxhbnk+W10sXG5cdGF0dHJpYnV0ZXMgID86IHJlYWRvbmx5IEF0dHJzW10sXG5cdHBhcmFtcyAgICAgID86IFJlYWRvbmx5PFBhcmFtZXRlcnM+LFxuXG5cdGNvbnRlbnQ/OiBIVE1MX1NvdXJjZSxcblx0Y3NzICAgID86ICBDU1NfU291cmNlIHwgcmVhZG9ubHkgQ1NTX1NvdXJjZVtdLFxuXHRzaGFkb3cgPzogIFNoYWRvd0NmZyxcbn07XG5cbmV4cG9ydCBlbnVtIFNoYWRvd0NmZyB7XG5cdE5PTkUgPSAnbm9uZScsXG5cdE9QRU4gPSAnb3BlbicsIFxuXHRDTE9TRT0gJ2Nsb3NlZCdcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgQ2xhc3MgPT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxubGV0IF9fY3N0cl9ob3N0ICA6IGFueSA9IG51bGw7XG5cbnR5cGUgQ29uc3RydWN0b3I8VD4gPSBuZXcgKCkgPT4gVDtcbmludGVyZmFjZSBDbGFzcyB7fVxuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9hdHRhY2hTaGFkb3dcbmNvbnN0IENBTl9IQVZFX1NIQURPVyA9IFtcblx0bnVsbCwgJ2FydGljbGUnLCAnYXNpZGUnLCAnYmxvY2txdW90ZScsICdib2R5JywgJ2RpdicsXG5cdCdmb290ZXInLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnaGVhZGVyJywgJ21haW4nLFxuXHQnbmF2JywgJ3AnLCAnc2VjdGlvbicsICdzcGFuJ1xuXHRcbl07XG5mdW5jdGlvbiBfY2FuSGFzU2hhZG93KHRhZzogdHlwZW9mIEhUTUxFbGVtZW50KSB7XG5cdHJldHVybiBDQU5fSEFWRV9TSEFET1cuaW5jbHVkZXMoIF9lbGVtZW50MnRhZ25hbWUodGFnKSApO1xufVxuXG50eXBlIFJlc291cmNlID0gVVJMfFJlc3BvbnNlO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExJU1M8RXh0ZW5kcyAgICBleHRlbmRzIENsYXNzICAgICAgICAgICAgICA9IENsYXNzLFxuXHRcdFx0XHRcdFx0XHQgSG9zdCAgICAgICBleHRlbmRzIEhUTUxFbGVtZW50ICAgICAgICA9IEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdFx0XHQgQXR0cnMgICAgICBleHRlbmRzIHN0cmluZyAgICAgICAgICAgICA9IG5ldmVyLFxuXHRcdFx0XHRcdFx0XHQgUGFyYW1ldGVycyBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55PiA9IHt9Pih7XG5cdFx0XHRcdFx0XHRcdFx0ZXh0ZW5kcyAgICAgOiBwX2V4dGVuZHMsXG5cdFx0XHRcdFx0XHRcdFx0aG9zdCAgICAgICAgOiBwX2hvc3QsXG5cdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jaWVzOiBwX2RlcHMsXG5cdFx0XHRcdFx0XHRcdCAgICBhdHRyaWJ1dGVzICA6IHBfYXR0cnMsXG5cdFx0XHRcdFx0XHRcdCAgICBwYXJhbXMsXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudCxcblx0XHRcdFx0XHRcdFx0XHRjc3MsXG5cdFx0XHRcdFx0XHRcdFx0c2hhZG93ICAgICAgOiBwX3NoYWRvdyxcblx0XHRcdFx0XHRcdFx0fTogTElTU09wdGlvbnM8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtZXRlcnM+ID0ge30pIHtcblxuXHQvL1RPRE8gbWVyZ2UgcHJvcCBpZiBleHRlbmRzIExJU1MuLi5cblxuXHRjb25zdCBob3N0ICAgICAgICA9IHBfaG9zdCAgICA/PyBIVE1MRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxIb3N0Pjtcblx0Y29uc3QgX2V4dGVuZHMgICAgPSBwX2V4dGVuZHMgPz8gT2JqZWN0ICAgICAgYXMgdW5rbm93biBhcyBDb25zdHJ1Y3RvcjxFeHRlbmRzPjtcblx0Y29uc3QgYXR0cmlidXRlcyAgPSBwX2F0dHJzICAgPz8gW107XG5cdGNvbnN0IGRlcGVuZGVuY2llcz0gcF9kZXBzICAgID8gWy4uLnBfZGVwc10gOiBbXTtcblx0Y29uc3QgY2FuSGFzU2hhZG93PSBfY2FuSGFzU2hhZG93KGhvc3QpO1xuXHRjb25zdCBzaGFkb3cgICAgICA9IHBfc2hhZG93ICA/PyAoY2FuSGFzU2hhZG93ID8gU2hhZG93Q2ZnLkNMT1NFIDogU2hhZG93Q2ZnLk5PTkUpO1xuXG5cdGlmKCAhIGNhbkhhc1NoYWRvdyAmJiBzaGFkb3cgIT09IFNoYWRvd0NmZy5OT05FKVxuXHRcdHRocm93IG5ldyBFcnJvcihgSG9zdCBlbGVtZW50ICR7X2VsZW1lbnQydGFnbmFtZShob3N0KX0gZG9lcyBub3Qgc3VwcG9ydCBTaGFkb3dSb290YCk7XG5cblx0Ly8gQ09OVEVOVCBwcm9jZXNzaW5nXG5cdGlmKCBjb250ZW50ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRkZXBlbmRlbmNpZXMucHVzaCggKCBhc3luYyAoKSA9PiB7XG5cblx0XHRcdGNvbnRlbnQgPSBhd2FpdCBjb250ZW50O1xuXG5cdFx0XHRpZihjb250ZW50IGluc3RhbmNlb2YgSFRNTFRlbXBsYXRlRWxlbWVudClcblx0XHRcdGNvbnRlbnQgPSBjb250ZW50LmlubmVySFRNTDtcblxuXHRcdFx0aWYoIHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB7XG5cblx0XHRcdFx0Y29udGVudCA9IGNvbnRlbnQudHJpbSgpOyAvLyBOZXZlciByZXR1cm4gYSB0ZXh0IG5vZGUgb2Ygd2hpdGVzcGFjZSBhcyB0aGUgcmVzdWx0XG5cdFx0XHRcdGlmKGNvbnRlbnQgPT09ICcnKVxuXHRcdFx0XHRcdGNvbnRlbnQgPSB1bmRlZmluZWQ7XG5cblx0XHRcdH1cblx0XHRcdGlmKCBjb250ZW50IGluc3RhbmNlb2YgUmVzcG9uc2UgKVxuXHRcdFx0XHRjb250ZW50ID0gYXdhaXQgY29udGVudC50ZXh0KCk7XG5cblx0XHRcdHJldHVybiBMSVNTQmFzZS5QYXJhbWV0ZXJzLmNvbnRlbnQgPSBjb250ZW50O1xuXHRcdH0pKCkgKTtcblx0fVxuXG5cdC8vIENTUyBwcm9jZXNzaW5nXG5cdGxldCBzdHlsZXNoZWV0czogcmVhZG9ubHkgQ1NTU3R5bGVTaGVldFtdID0gW107XG5cdGlmKCBjc3MgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdGlmKCAhIEFycmF5LmlzQXJyYXkoY3NzKSApXG5cdFx0XHRjc3MgPSBbY3NzIGFzIENTU19Tb3VyY2VdO1xuXG5cdFx0c3R5bGVzaGVldHMgPSBuZXcgQXJyYXk8Q1NTU3R5bGVTaGVldD4oY3NzLmxlbmd0aCk7XG5cblx0XHRjb25zdCBmZXRjaF9jc3MgPSAoYXN5bmMgKGNzczogQ1NTX1NvdXJjZSkgPT4ge1xuXHRcdFx0Y3NzID0gYXdhaXQgY3NzO1xuXHRcdFx0aWYoY3NzIGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldClcblx0XHRcdFx0cmV0dXJuIGNzcztcblx0XHRcdGlmKCBjc3MgaW5zdGFuY2VvZiBIVE1MU3R5bGVFbGVtZW50KVxuXHRcdFx0XHRyZXR1cm4gY3NzLnNoZWV0ITtcblxuXHRcdFx0bGV0IHN0eWxlID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcblx0XHRcdGlmKCB0eXBlb2YgY3NzID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0XHRzdHlsZS5yZXBsYWNlKGNzcyk7XG5cdFx0XHRcdHJldHVybiBzdHlsZTtcblx0XHRcdH1cblxuXHRcdFx0Ly9pZiggY3NzIGluc3RhbmNlb2YgUmVzcG9uc2UgKVxuXHRcdFx0c3R5bGUucmVwbGFjZShhd2FpdCBjc3MudGV4dCgpKTtcblx0XHRcdHJldHVybiBzdHlsZTtcblx0XHR9KTtcblxuXHRcdGRlcGVuZGVuY2llcy5wdXNoKCAuLi5jc3MubWFwKCBhc3luYyAoY3NzLCBpZHgpID0+ICAoc3R5bGVzaGVldHMgYXMgYW55KVtpZHhdID0gYXdhaXQgZmV0Y2hfY3NzKGNzcykgKSApO1xuXHR9XG5cblx0dHlwZSBMSG9zdCA9IExJU1NIb3N0PExJU1NCYXNlPjtcblxuXHQvLyBAdHMtaWdub3JlXG5cdGNsYXNzIExJU1NCYXNlIGV4dGVuZHMgX2V4dGVuZHMge1xuXG5cdFx0cmVhZG9ubHkgI2hvc3Q6IGFueTsgLy8gcHJldmVudHMgaXNzdWUgIzEuLi5cblxuXHRcdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0XHRzdXBlcigpO1xuXG5cdFx0XHQvLyBoNGNrLCBva2F5IGJlY2F1c2UgSlMgaXMgbW9ub3RocmVhZGVkLlxuXHRcdFx0aWYoIF9fY3N0cl9ob3N0ID09PSBudWxsIClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGRvIG5vdCBkaXJlY3RseSBjYWxsIHRoaXMgY29uc3RydWN0b3JcIik7XG5cdFx0XHR0aGlzLiNob3N0ID0gX19jc3RyX2hvc3Q7XG5cdFx0XHRfX2NzdHJfaG9zdCA9IG51bGw7XG5cdFx0fVxuXG5cdFx0cHVibGljIGdldCBob3N0KCk6IEhvc3Qge1xuXHRcdFx0cmV0dXJuIHRoaXMuI2hvc3Q7XG5cdFx0fVxuXHRcdHByb3RlY3RlZCBnZXQgYXR0cnMoKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuI2hvc3QgYXMgTEhvc3QpLmF0dHJzO1xuXHRcdH1cblx0XHRwcm90ZWN0ZWQgc2V0QXR0ckRlZmF1bHQoIGF0dHI6IEF0dHJzLCB2YWx1ZTogc3RyaW5nfG51bGwpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkuc2V0QXR0ckRlZmF1bHQoYXR0ciwgdmFsdWUpO1xuXG5cdFx0fVxuXHRcdHByb3RlY3RlZCBnZXQgcGFyYW1zKCkge1xuXHRcdFx0cmV0dXJuICh0aGlzLiNob3N0IGFzIExIb3N0KS5wYXJhbXM7XG5cdFx0fVxuXHRcdHByb3RlY3RlZCBnZXQgY29udGVudCgpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkuY29udGVudCE7XG5cdFx0fVxuXG5cdFx0c3RhdGljIHJlYWRvbmx5IFBhcmFtZXRlcnMgPSB7XG5cdFx0XHRob3N0LFxuXHRcdFx0ZGVwZW5kZW5jaWVzLFxuXHRcdFx0YXR0cmlidXRlcyxcblx0XHRcdHBhcmFtcyxcblx0XHRcdGNvbnRlbnQsXG5cdFx0XHRzdHlsZXNoZWV0cyxcblx0XHRcdHNoYWRvdyxcblx0XHR9O1xuXG5cdFx0cHJvdGVjdGVkIG9uQXR0ckNoYW5nZWQoX25hbWU6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0XHRfb2xkVmFsdWU6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0XHRfbmV3VmFsdWU6IHN0cmluZyk6IHZvaWR8ZmFsc2Uge31cblxuXHRcdHByb3RlY3RlZCBnZXQgaXNJbkRPTSgpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkuaXNJbkRPTTtcblx0XHR9XG5cdFx0cHJvdGVjdGVkIG9uRE9NQ29ubmVjdGVkKCkge31cblx0XHRwcm90ZWN0ZWQgb25ET01EaXNjb25uZWN0ZWQoKSB7fVxuXHR9XG5cblx0cmV0dXJuIExJU1NCYXNlO1xufVxuXG4vL1RPRE86IG90aGVyIG9wdGlvbnMuLi5cbmZ1bmN0aW9uIGV4dGVuZHNMSVNTPEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0SG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRBdHRyczEgICBleHRlbmRzIHN0cmluZyxcblx0QXR0cnMyICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4sXG5cdFQgZXh0ZW5kcyBMSVNTUmV0dXJuVHlwZTxFeHRlbmRzLCBIb3N0LCBBdHRyczEsIFBhcmFtcz4+KExpc3M6IFQsIHBhcmFtZXRlcnM6IHthdHRyaWJ1dGVzOiByZWFkb25seSBBdHRyczJbXX0pIHtcblxuXHQvLyBUT0RPOiBvdGhlciBvcHRpb25zLi4uXG5cdGNvbnN0IGF0dHJzID0gWy4uLkxpc3MuUGFyYW1ldGVycy5hdHRyaWJ1dGVzLCAuLi5wYXJhbWV0ZXJzLmF0dHJpYnV0ZXMhXTtcblx0Y29uc3QgcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgTGlzcy5QYXJhbWV0ZXJzLCB7YXR0cmlidXRlczogYXR0cnN9KTtcblxuXHQvLyBAdHMtaWdub3JlIDogYmVjYXVzZSBUUyBzdHVwaWRcblx0Y2xhc3MgRXh0ZW5kZWRMSVNTIGV4dGVuZHMgTGlzcyB7XG5cdFx0Y29uc3RydWN0b3IoLi4udDogYW55W10pIHtcblx0XHRcdC8vIEB0cy1pZ25vcmUgOiBiZWNhdXNlIFRTIHN0dXBpZFxuXHRcdFx0c3VwZXIoLi4udCk7XG5cdFx0fVxuXG5cdFx0cHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhdHRycygpIHtcblx0XHRcdHJldHVybiBzdXBlci5hdHRycyBhcyBSZWNvcmQ8QXR0cnMyfEF0dHJzMSwgc3RyaW5nfG51bGw+O1xuXHRcdH1cblxuXHRcdHN0YXRpYyBvdmVycmlkZSBQYXJhbWV0ZXJzID0gcGFyYW1zO1xuXHR9XG5cblx0cmV0dXJuIEV4dGVuZGVkTElTUztcbn1cbkxJU1MuZXh0ZW5kc0xJU1MgPSBleHRlbmRzTElTUztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyB0eXBlIGhlbHBlcnMgPT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIGJ1aWxkTElTU0hvc3RSZXR1cm5UeXBlPFQ+ICA9IFQgZXh0ZW5kcyBMSVNTUmV0dXJuVHlwZTxpbmZlciBFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbmZlciBIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbmZlciBBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5mZXIgUGFyYW1zICBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gUmV0dXJuVHlwZTx0eXBlb2YgYnVpbGRMSVNTSG9zdDxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zLCBUPj4gOiBuZXZlcjtcblxuZXhwb3J0IHR5cGUgTElTU1JldHVyblR5cGU8XG5cdEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0SG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+PiA9IFJldHVyblR5cGU8dHlwZW9mIExJU1M8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcz4+O1xuZXhwb3J0IHR5cGUgTElTU0Jhc2U8RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdCBIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0IEF0dHJzICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0IFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4+ID0gSW5zdGFuY2VUeXBlPExJU1NSZXR1cm5UeXBlPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXM+PjtcbmV4cG9ydCB0eXBlIExJU1NIb3N0PExJU1MgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+ID4gPSBJbnN0YW5jZVR5cGU8YnVpbGRMSVNTSG9zdFJldHVyblR5cGU8Q29uc3RydWN0b3I8TElTUz4gJiB7UGFyYW1ldGVyczogYW55fT4+O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTSG9zdCBjbGFzcyA9PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmxldCBpZCA9IDA7XG5cbmZ1bmN0aW9uIGJ1aWxkTElTU0hvc3Q8RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdCAgIEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHQgICBBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdCAgIFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4sXG5cdFx0XHRcdFx0ICAgVCBleHRlbmRzIExJU1NSZXR1cm5UeXBlPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXM+PihMaXNzOiBULCBfcGFyYW1zOiBQYXJ0aWFsPFBhcmFtcz4gPSB7fSkge1xuXHRjb25zdCB7XG5cdFx0aG9zdCxcblx0XHRhdHRyaWJ1dGVzLFxuXHRcdGNvbnRlbnQsXG5cdFx0c3R5bGVzaGVldHMsXG5cdFx0c2hhZG93LFxuXHR9ID0gTGlzcy5QYXJhbWV0ZXJzO1xuXG5cdGNvbnN0IGFscmVhZHlEZWNsYXJlZENTUyA9IG5ldyBTZXQoKTtcblxuXHRjb25zdCBHRVQgPSBTeW1ib2woJ2dldCcpO1xuXHRjb25zdCBTRVQgPSBTeW1ib2woJ3NldCcpO1xuXG5cdGNvbnN0IHByb3BlcnRpZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoIGF0dHJpYnV0ZXMubWFwKG4gPT4gW24sIHtcblxuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbigpOiBzdHJpbmd8bnVsbCAgICAgIHsgcmV0dXJuICh0aGlzIGFzIHVua25vd24gYXMgQXR0cmlidXRlcylbR0VUXShuKTsgfSxcblx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlOiBzdHJpbmd8bnVsbCkgeyByZXR1cm4gKHRoaXMgYXMgdW5rbm93biBhcyBBdHRyaWJ1dGVzKVtTRVRdKG4sIHZhbHVlKTsgfVxuXHR9XSkgKTtcblxuXHRjbGFzcyBBdHRyaWJ1dGVzIHtcbiAgICAgICAgW3g6IHN0cmluZ106IHN0cmluZ3xudWxsO1xuXG4gICAgICAgICNkYXRhICAgICA6IFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuICAgICAgICAjZGVmYXVsdHMgOiBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPjtcbiAgICAgICAgI3NldHRlciAgIDogKG5hbWU6IEF0dHJzLCB2YWx1ZTogc3RyaW5nfG51bGwpID0+IHZvaWQ7XG5cbiAgICAgICAgW0dFVF0obmFtZTogQXR0cnMpIHtcbiAgICAgICAgXHRyZXR1cm4gdGhpcy4jZGF0YVtuYW1lXSA/PyB0aGlzLiNkZWZhdWx0c1tuYW1lXSA/PyBudWxsO1xuICAgICAgICB9O1xuICAgICAgICBbU0VUXShuYW1lOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKXtcbiAgICAgICAgXHRyZXR1cm4gdGhpcy4jc2V0dGVyKG5hbWUsIHZhbHVlKTsgLy8gcmVxdWlyZWQgdG8gZ2V0IGEgY2xlYW4gb2JqZWN0IHdoZW4gZG9pbmcgey4uLmF0dHJzfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YSAgICA6IFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+LFxuXHRcdFx0XHRcdGRlZmF1bHRzOiBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPixcbiAgICAgICAgXHRcdFx0c2V0dGVyICA6IChuYW1lOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKSA9PiB2b2lkKSB7XG5cbiAgICAgICAgXHR0aGlzLiNkYXRhICAgICA9IGRhdGE7XG5cdFx0XHR0aGlzLiNkZWZhdWx0cyA9IGRlZmF1bHRzO1xuICAgICAgICBcdHRoaXMuI3NldHRlciA9IHNldHRlcjtcblxuICAgICAgICBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHByb3BlcnRpZXMpO1xuICAgICAgICB9XG5cdH1cblxuXHQvLyBAdHMtaWdub3JlIDogYmVjYXVzZSBUUyBpcyBzdHVwaWQuXG5cdGNsYXNzIExJU1NIb3N0QmFzZSBleHRlbmRzIGhvc3Qge1xuXG5cdFx0cmVhZG9ubHkgI3BhcmFtczogUGFyYW1zO1xuXG5cdFx0cmVhZG9ubHkgI2lkID0gKytpZDsgLy8gZm9yIGRlYnVnXG5cblx0XHRjb25zdHJ1Y3RvcihwYXJhbXM6IFBhcnRpYWw8UGFyYW1zPiA9IHt9KSB7XG5cdFx0XHRzdXBlcigpO1xuXHRcdFx0dGhpcy4jcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgTGlzcy5QYXJhbWV0ZXJzLnBhcmFtcywgX3BhcmFtcywgcGFyYW1zKTtcblxuXHRcdFx0dGhpcy4jd2FpdEluaXQgPSBuZXcgUHJvbWlzZSggKHJlc29sdmUpID0+IHtcblx0XHRcdFx0aWYodGhpcy5pc0luaXQpXG5cdFx0XHRcdFx0cmV0dXJuIHJlc29sdmUodGhpcy4jQVBJISk7XG5cdFx0XHRcdHRoaXMuI3Jlc29sdmUgPSByZXNvbHZlO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqKiogcHVibGljIEFQSSAqKioqKioqKioqKioqL1xuXG5cdFx0Z2V0IGlzSW5pdCgpIHtcblx0XHRcdHJldHVybiB0aGlzLiNBUEkgIT09IG51bGw7XG5cdFx0fVxuXHRcdGluaXRpYWxpemUocGFyYW1zOiBQYXJ0aWFsPFBhcmFtcz4gPSB7fSkge1xuXG5cdFx0XHRpZiggdGhpcy5pc0luaXQgKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0VsZW1lbnQgYWxyZWFkeSBpbml0aWFsaXplZCEnKTtcblxuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLiNwYXJhbXMsIHBhcmFtcyk7XG5cblx0XHRcdGNvbnN0IGFwaSA9IHRoaXMuaW5pdCgpO1xuXG5cdFx0XHRpZiggdGhpcy4jaXNJbkRPTSApXG5cdFx0XHRcdChhcGkgYXMgYW55KS5vbkRPTUNvbm5lY3RlZCgpO1xuXG5cdFx0XHRyZXR1cm4gYXBpO1xuXHRcdH1cblxuXHRcdGdldCBMSVNTU3luYygpIHtcblx0XHRcdGlmKCAhIHRoaXMuaXNJbml0IClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdBY2Nlc3NpbmcgQVBJIGJlZm9yZSBXZWJDb21wb25lbnQgaW5pdGlhbGl6YXRpb24hJyk7XG5cdFx0XHRyZXR1cm4gdGhpcy4jQVBJITtcblx0XHR9XG5cdFx0Z2V0IExJU1MoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4jd2FpdEluaXQ7XG5cdFx0fVxuXG5cdFx0LyoqKiBpbml0ICoqKi9cblx0XHQjd2FpdEluaXQ6IFByb21pc2U8SW5zdGFuY2VUeXBlPFQ+Pjtcblx0XHQjcmVzb2x2ZTogKCh1OiBJbnN0YW5jZVR5cGU8VD4pID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG5cdFx0I0FQSTogSW5zdGFuY2VUeXBlPFQ+IHwgbnVsbCA9IG51bGw7XG5cblx0XHQjaXNJbkRPTSA9IGZhbHNlO1xuXHRcdGdldCBpc0luRE9NKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuI2lzSW5ET007XG5cdFx0fVxuXG5cdFx0ZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0XHR0aGlzLiNpc0luRE9NID0gZmFsc2U7XG5cdFx0XHQodGhpcy4jQVBJISBhcyBhbnkpLm9uRE9NRGlzY29ubmVjdGVkKCk7XG5cdFx0fVxuXG5cdFx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cblx0XHRcdHRoaXMuI2lzSW5ET00gPSB0cnVlO1xuXHRcblx0XHRcdGlmKCAhIHRoaXMuaXNJbml0ICkge1xuXHRcdFx0XHR0aGlzLmluaXQoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQodGhpcy4jQVBJISBhcyBhbnkpLm9uRE9NQ29ubmVjdGVkKCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBpbml0KCkge1xuXHRcdFx0XG5cdFx0XHRjdXN0b21FbGVtZW50cy51cGdyYWRlKHRoaXMpO1xuXHRcdFx0XG5cdFx0XHQvLyBzaGFkb3dcblx0XHRcdHRoaXMuI2NvbnRlbnQgPSB0aGlzIGFzIHVua25vd24gYXMgSG9zdDtcblx0XHRcdGlmKCBzaGFkb3cgIT09ICdub25lJykge1xuXHRcdFx0XHR0aGlzLiNjb250ZW50ID0gdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6IHNoYWRvd30pO1xuXG5cdFx0XHRcdC8vQHRzLWlnbm9yZVxuXHRcdFx0XHR0aGlzLiNjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGlja0V2ZW50KTtcblx0XHRcdFx0Ly9AdHMtaWdub3JlXG5cdFx0XHRcdHRoaXMuI2NvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBvbkNsaWNrRXZlbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBhdHRyc1xuXHRcdFx0Zm9yKGxldCBvYnMgb2YgYXR0cmlidXRlcyEpXG5cdFx0XHRcdHRoaXMuI2F0dHJpYnV0ZXNbb2JzXSA9IHRoaXMuZ2V0QXR0cmlidXRlKG9icyk7XG5cblx0XHRcdC8vIGNzc1xuXHRcdFx0aWYoIHNoYWRvdyAhPT0gJ25vbmUnKVxuXHRcdFx0XHQodGhpcy4jY29udGVudCBhcyBTaGFkb3dSb290KS5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChzaGFyZWRDU1MpO1xuXHRcdFx0aWYoIHN0eWxlc2hlZXRzLmxlbmd0aCApIHtcblxuXHRcdFx0XHRpZiggc2hhZG93ICE9PSAnbm9uZScpXG5cdFx0XHRcdFx0KHRoaXMuI2NvbnRlbnQgYXMgU2hhZG93Um9vdCkuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goLi4uc3R5bGVzaGVldHMpO1xuXHRcdFx0XHRlbHNlIHtcblxuXHRcdFx0XHRcdGNvbnN0IGNzc3NlbGVjdG9yID0gdGhpcy5DU1NTZWxlY3RvcjtcblxuXHRcdFx0XHRcdC8vIGlmIG5vdCB5ZXQgaW5zZXJ0ZWQgOlxuXHRcdFx0XHRcdGlmKCAhIGFscmVhZHlEZWNsYXJlZENTUy5oYXMoY3Nzc2VsZWN0b3IpICkge1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRsZXQgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG5cdFx0XHRcdFx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNzc3NlbGVjdG9yKTtcblxuXHRcdFx0XHRcdFx0bGV0IGh0bWxfc3R5bGVzaGVldHMgPSBcIlwiO1xuXG5cdFx0XHRcdFx0XHRmb3IobGV0IHN0eWxlIG9mIHN0eWxlc2hlZXRzKVxuXHRcdFx0XHRcdFx0XHRmb3IobGV0IHJ1bGUgb2Ygc3R5bGUuY3NzUnVsZXMpXG5cdFx0XHRcdFx0XHRcdFx0aHRtbF9zdHlsZXNoZWV0cyArPSBydWxlLmNzc1RleHQgKyAnXFxuJztcblxuXHRcdFx0XHRcdFx0c3R5bGUuaW5uZXJIVE1MID0gaHRtbF9zdHlsZXNoZWV0cy5yZXBsYWNlKCc6aG9zdCcsIGA6aXMoJHtjc3NzZWxlY3Rvcn0pYCk7XG5cblx0XHRcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kKHN0eWxlKTtcblxuXHRcdFx0XHRcdFx0YWxyZWFkeURlY2xhcmVkQ1NTLmFkZChjc3NzZWxlY3Rvcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNvbnRlbnRcblx0XHRcdGlmKCBjb250ZW50ICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdGxldCB0ZW1wbGF0ZV9lbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblx0XHRcdFx0bGV0IHN0ciA9IChjb250ZW50IGFzIHN0cmluZykucmVwbGFjZSgvXFwkXFx7KC4rPylcXH0vZywgKF8sIG1hdGNoKSA9PiB0aGlzLmdldEF0dHJpYnV0ZShtYXRjaCk/PycnKVxuXHQgICAgXHRcdHRlbXBsYXRlX2VsZW0uaW5uZXJIVE1MID0gc3RyO1xuXHQgICAgXHRcdHRoaXMuI2NvbnRlbnQuYXBwZW5kKC4uLnRlbXBsYXRlX2VsZW0uY29udGVudC5jaGlsZE5vZGVzKTtcblx0ICAgIFx0fVxuXG5cdCAgICBcdC8vIGJ1aWxkXG5cblx0ICAgIFx0Ly8gaDRjaywgb2theSBiZWNhdXNlIEpTIGlzIG1vbm90aHJlYWRlZC5cblx0XHRcdF9fY3N0cl9ob3N0ICAgPSB0aGlzO1xuXG5cdCAgICBcdGxldCBvYmogPSBuZXcgTGlzcygpO1xuXG5cdCAgICBcdC8qaWYoIG9iaiBpbnN0YW5jZW9mIFByb21pc2UpXG5cdCAgICBcdFx0b2JqID0gYXdhaXQgb2JqOyovXG5cblx0XHRcdHRoaXMuI0FQSSA9IG9iaiBhcyBJbnN0YW5jZVR5cGU8VD47XG5cblx0XHRcdC8vIGRlZmF1bHQgc2xvdFxuXHRcdFx0aWYoIHRoaXMuaGFzU2hhZG93ICYmIHRoaXMuI2NvbnRlbnQuY2hpbGROb2Rlcy5sZW5ndGggPT09IDAgKVxuXHRcdFx0XHR0aGlzLiNjb250ZW50LmFwcGVuZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2xvdCcpICk7XG5cblx0XHRcdGlmKCB0aGlzLiNyZXNvbHZlICE9PSBudWxsKVxuXHRcdFx0XHR0aGlzLiNyZXNvbHZlKHRoaXMuI0FQSSk7XG5cblx0XHRcdHJldHVybiB0aGlzLiNBUEk7XG5cdFx0fVxuXG5cdFx0Z2V0IHBhcmFtcygpOiBQYXJhbXMge1xuXHRcdFx0cmV0dXJuIHRoaXMuI3BhcmFtcztcblx0XHR9XG5cblxuXHRcdC8qKiogY29udGVudCAqKiovXG5cdFx0I2NvbnRlbnQ6IEhvc3R8U2hhZG93Um9vdHxudWxsID0gbnVsbDtcblxuXHRcdGdldCBjb250ZW50KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuI2NvbnRlbnQ7XG5cdFx0fVxuXG5cdFx0Z2V0UGFydChuYW1lOiBzdHJpbmcpIHtcblx0XHRcdHJldHVybiB0aGlzLmhhc1NoYWRvd1xuXHRcdFx0XHRcdD8gdGhpcy4jY29udGVudD8ucXVlcnlTZWxlY3RvcihgOjpwYXJ0KCR7bmFtZX0pYClcblx0XHRcdFx0XHQ6IHRoaXMuI2NvbnRlbnQ/LnF1ZXJ5U2VsZWN0b3IoYFtwYXJ0PVwiJHtuYW1lfVwiXWApO1xuXHRcdH1cblx0XHRnZXRQYXJ0cyhuYW1lOiBzdHJpbmcpIHtcblx0XHRcdHJldHVybiB0aGlzLmhhc1NoYWRvd1xuXHRcdFx0XHRcdD8gdGhpcy4jY29udGVudD8ucXVlcnlTZWxlY3RvckFsbChgOjpwYXJ0KCR7bmFtZX0pYClcblx0XHRcdFx0XHQ6IHRoaXMuI2NvbnRlbnQ/LnF1ZXJ5U2VsZWN0b3JBbGwoYFtwYXJ0PVwiJHtuYW1lfVwiXWApO1xuXHRcdH1cblxuXHRcdHByb3RlY3RlZCBnZXQgaGFzU2hhZG93KCk6IGJvb2xlYW4ge1xuXHRcdFx0cmV0dXJuIHNoYWRvdyAhPT0gJ25vbmUnO1xuXHRcdH1cblxuXHRcdC8qKiogQ1NTICoqKi9cblxuXHRcdGdldCBDU1NTZWxlY3RvcigpIHtcblx0XHRcdHJldHVybiB0aGlzLmhhc1NoYWRvd1xuXHRcdFx0XHRcdD8gdGhpcy50YWdOYW1lXG5cdFx0XHRcdFx0OiBgJHt0aGlzLnRhZ05hbWV9W2lzPVwiJHt0aGlzLmdldEF0dHJpYnV0ZShcImlzXCIpfVwiXWA7XG5cdFx0fVxuXG5cdFx0LyoqKiBhdHRycyAqKiovXG5cdFx0I2F0dHJzX2ZsYWcgPSBmYWxzZTtcblxuXHRcdCNhdHRyaWJ1dGVzICAgICAgICAgPSB7fSBhcyBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPjtcblx0XHQjYXR0cmlidXRlc0RlZmF1bHRzID0ge30gYXMgUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD47XG5cdFx0I2F0dHJzID0gbmV3IEF0dHJpYnV0ZXMoXG5cdFx0XHR0aGlzLiNhdHRyaWJ1dGVzLFxuXHRcdFx0dGhpcy4jYXR0cmlidXRlc0RlZmF1bHRzLFxuXHRcdFx0KG5hbWU6IEF0dHJzLCB2YWx1ZTpzdHJpbmd8bnVsbCkgPT4ge1xuXG5cdFx0XHRcdHRoaXMuI2F0dHJpYnV0ZXNbbmFtZV0gPSB2YWx1ZTtcblxuXHRcdFx0XHR0aGlzLiNhdHRyc19mbGFnID0gdHJ1ZTsgLy8gZG8gbm90IHRyaWdnZXIgb25BdHRyc0NoYW5nZWQuXG5cdFx0XHRcdGlmKCB2YWx1ZSA9PT0gbnVsbClcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0XHRcdH1cblx0XHQpIGFzIHVua25vd24gYXMgUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD47XG5cblx0XHRzZXRBdHRyRGVmYXVsdChuYW1lOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKSB7XG5cdFx0XHRpZiggdmFsdWUgPT09IG51bGwpXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLiNhdHRyaWJ1dGVzRGVmYXVsdHNbbmFtZV07XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHRoaXMuI2F0dHJpYnV0ZXNEZWZhdWx0c1tuYW1lXSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdGdldCBhdHRycygpOiBSZWFkb25seTxSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPj4ge1xuXG5cdFx0XHRyZXR1cm4gdGhpcy4jYXR0cnM7XG5cdFx0fVxuXG5cdFx0c3RhdGljIG9ic2VydmVkQXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG5cdFx0YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUgICAgOiBBdHRycyxcblx0XHRcdFx0XHRcdFx0XHQgb2xkVmFsdWU6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0XHQgbmV3VmFsdWU6IHN0cmluZykge1xuXG5cdFx0XHRpZih0aGlzLiNhdHRyc19mbGFnKSB7XG5cdFx0XHRcdHRoaXMuI2F0dHJzX2ZsYWcgPSBmYWxzZTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLiNhdHRyaWJ1dGVzW25hbWVdID0gbmV3VmFsdWU7XG5cdFx0XHRpZiggISB0aGlzLmlzSW5pdCApXG5cdFx0XHRcdHJldHVybjtcblxuXHRcdFx0aWYoICh0aGlzLiNBUEkhIGFzIGFueSkub25BdHRyQ2hhbmdlZChuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpID09PSBmYWxzZSkge1xuXHRcdFx0XHR0aGlzLiNhdHRyc1tuYW1lXSA9IG9sZFZhbHVlOyAvLyByZXZlcnQgdGhlIGNoYW5nZS5cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIExJU1NIb3N0QmFzZTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBkZWZpbmUgPT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBfRE9NQ29udGVudExvYWRlZCA9IG5ldyBQcm9taXNlPHZvaWQ+KCAocmVzb2x2ZSkgPT4ge1xuXG5cdGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiaW50ZXJhY3RpdmVcIiB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpXG5cdFx0cmV0dXJuIHJlc29sdmUoKTtcblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXHRcdHJlc29sdmUoKTtcblx0fSwgdHJ1ZSk7XG59KTtcblxuTElTUy5kZWZpbmUgPSBhc3luYyBmdW5jdGlvbjxFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdFx0XHRcdFx0XHRcdCBIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0XHQgICAgIEF0dHJzICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0XHQgICAgIFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4sXG5cdFx0XHRcdFx0XHQgICBcdCBUIGV4dGVuZHMgTElTU1JldHVyblR5cGU8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcz4+KFxuXHRcdFx0XHRcdFx0ICAgXHR0YWduYW1lOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdENvbXBvbmVudENsYXNzOiBULFxuXHRcdFx0XHRcdFx0XHR7ZGVwZW5kZW5jaWVzLCBwYXJhbXN9OiB7cGFyYW1zPzogUGFydGlhbDxQYXJhbXM+LCBkZXBlbmRlbmNpZXM/OiByZWFkb25seSBQcm9taXNlPHN0cmluZz5bXX0gPSB7fSkge1xuXG5cdGRlcGVuZGVuY2llcz8/PVtdO1xuXHRwYXJhbXMgICAgICA/Pz0ge307XG5cblx0Y29uc3QgQ2xhc3MgPSBDb21wb25lbnRDbGFzcy5QYXJhbWV0ZXJzLmhvc3Q7XG5cdGxldCBMSVNTQmFzZTogYW55ID0gQ29tcG9uZW50Q2xhc3M7XG5cdGxldCBodG1sdGFnID0gX2VsZW1lbnQydGFnbmFtZShDbGFzcyk/P3VuZGVmaW5lZDtcblxuXHRhd2FpdCBQcm9taXNlLmFsbChbX0RPTUNvbnRlbnRMb2FkZWQsIC4uLmRlcGVuZGVuY2llcywgLi4uTElTU0Jhc2UuUGFyYW1ldGVycy5kZXBlbmRlbmNpZXNdKTtcblxuXHRjb25zdCBMSVNTY2xhc3MgPSBidWlsZExJU1NIb3N0PEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXMsIFQ+KENvbXBvbmVudENsYXNzLCBwYXJhbXMpO1xuXHRcblx0Y29uc3Qgb3B0cyA9IGh0bWx0YWcgPT09IHVuZGVmaW5lZCA/IHt9XG5cdFx0XHRcdFx0XHRcdFx0XHQgICA6IHtleHRlbmRzOiBodG1sdGFnfTtcblx0XG5cdGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWduYW1lLCBMSVNTY2xhc3MsIG9wdHMpO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBTaGFkb3dSb290IHRvb2xzID09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBzaGFyZWRDU1MgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc2hhcmVkQ1NTKTtcblxuTElTUy5pbnNlcnRHbG9iYWxDU1NSdWxlcyA9IGZ1bmN0aW9uKGNzczogc3RyaW5nfEhUTUxTdHlsZUVsZW1lbnQpIHtcblxuXHRsZXQgY3NzX3N0eWxlITogQ1NTU3R5bGVTaGVldDtcblxuXHRpZiggY3NzIGluc3RhbmNlb2YgSFRNTFN0eWxlRWxlbWVudCApXG5cdFx0Y3NzX3N0eWxlID0gY3NzLnNoZWV0ITtcblx0aWYoIHR5cGVvZiBjc3MgPT09IFwic3RyaW5nXCIpIHtcblx0XHRjc3Nfc3R5bGUgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuXHRcdGNzc19zdHlsZS5yZXBsYWNlU3luYyhjc3MpO1xuXHR9XG5cblx0Zm9yKGxldCBydWxlIG9mIGNzc19zdHlsZS5jc3NSdWxlcylcblx0XHRzaGFyZWRDU1MuaW5zZXJ0UnVsZShydWxlLmNzc1RleHQpO1xufVxuXG50eXBlIERlbGVnYXRlZEhhbmRsZXIgPSBbc3RyaW5nLCAoZXY6IE1vdXNlRXZlbnQpID0+IHZvaWRdO1xuY29uc3QgREVMRUdBVEVEX0VWRU5UUyA9IHtcblx0XCJjbGlja1wiOiBbXSBhcyBEZWxlZ2F0ZWRIYW5kbGVyW10sXG5cdFwiZGJsY2xpY2tcIjogW10gYXMgRGVsZWdhdGVkSGFuZGxlcltdXG59O1xuXG5jb25zdCBBTFJFQURZX1BST0NFU1NFRCA9IFN5bWJvbCgpO1xuXG5mdW5jdGlvbiBvbkNsaWNrRXZlbnQoZXY6IE1vdXNlRXZlbnQpIHtcblxuXHRpZiggKGV2IGFzIGFueSlbQUxSRUFEWV9QUk9DRVNTRURdID09PSB0cnVlIClcblx0XHRyZXR1cm47XG5cdChldiBhcyBhbnkpW0FMUkVBRFlfUFJPQ0VTU0VEXSA9IHRydWU7XG5cblx0Y29uc3QgaGFuZGxlcnMgPSBERUxFR0FURURfRVZFTlRTW2V2LnR5cGUgYXMga2V5b2YgdHlwZW9mIERFTEVHQVRFRF9FVkVOVFNdO1xuXG5cdGZvcihsZXQgZWxlbSBvZiBldi5jb21wb3NlZFBhdGgoKSApIHtcblx0XG5cdFx0aWYoIGVsZW0gaW5zdGFuY2VvZiBTaGFkb3dSb290IHx8IGVsZW0gPT09IGRvY3VtZW50IHx8IGVsZW0gPT09IHdpbmRvdyApXG5cdFx0XHRjb250aW51ZTtcblxuXHRcdHZhciB0YXJnZXQgPSBlbGVtIGFzIEVsZW1lbnQ7XG5cblx0XHRmb3IobGV0IFtzZWxlY3RvciwgaGFuZGxlcl0gb2YgaGFuZGxlcnMpIHtcblx0XHRcdGlmKCB0YXJnZXQubWF0Y2hlcyhzZWxlY3RvcikgKVxuXHRcdFx0XHRoYW5kbGVyKGV2KTtcblx0XHR9XG5cdH1cbn1cblxuTElTUy5pbnNlcnRHbG9iYWxEZWxlZ2F0ZWRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50X25hbWU6IGtleW9mIHR5cGVvZiBERUxFR0FURURfRVZFTlRTLCBzZWxlY3Rvcjogc3RyaW5nLCBoYW5kbGVyOiAoZXY6IE1vdXNlRXZlbnQpID0+IHZvaWQgKSB7XG5cdERFTEVHQVRFRF9FVkVOVFNbZXZlbnRfbmFtZV0ucHVzaChbc2VsZWN0b3IsIGhhbmRsZXJdKVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tFdmVudCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIG9uQ2xpY2tFdmVudCk7XG5cbkxJU1MuY2xvc2VzdCA9IGZ1bmN0aW9uIGNsb3Nlc3Q8RSBleHRlbmRzIEVsZW1lbnQ+KHNlbGVjdG9yOiBzdHJpbmcsIGVsZW1lbnQ6IEVsZW1lbnQpIHtcblxuXHR3aGlsZSh0cnVlKSB7XG5cdFx0dmFyIHJlc3VsdCA9IGVsZW1lbnQuY2xvc2VzdDxFPihzZWxlY3Rvcik7XG5cblx0XHRpZiggcmVzdWx0ICE9PSBudWxsKVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblxuXHRcdGNvbnN0IHJvb3QgPSBlbGVtZW50LmdldFJvb3ROb2RlKCk7XG5cdFx0aWYoICEgKFwiaG9zdFwiIGluIHJvb3QpIClcblx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0ZWxlbWVudCA9IChyb290IGFzIFNoYWRvd1Jvb3QpLmhvc3Q7XG5cdH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBoZWxwZXJzID09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIGluZmVyUGFyYW1zPFQ+ID0gVCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LCBpbmZlciBQIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+PiA/IFAgOiBuZXZlcjtcblxudHlwZSBCVUlMRF9PUFRJT05TPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PiA9IFBhcnRpYWw8e1xuXHRcdFx0XHRcdCAgXHRwYXJhbXMgICAgOiBQYXJ0aWFsPGluZmVyUGFyYW1zPFQ+Pixcblx0XHRcdFx0XHQgIFx0Y29udGVudFx0ICA6IHN0cmluZ3xOb2RlfHJlYWRvbmx5IE5vZGVbXSxcblx0XHRcdFx0XHRcdGlkIFx0XHQgIDogc3RyaW5nLFxuXHRcdFx0XHRcdCAgXHRjbGFzc2VzXHQgIDogcmVhZG9ubHkgc3RyaW5nW10sXG5cdFx0XHRcdFx0ICBcdGNzc3ZhcnMgICA6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIHN0cmluZz4+LFxuXHRcdFx0XHRcdCAgXHRhdHRycyBcdCAgOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmd8Ym9vbGVhbj4+LFxuXHRcdFx0XHRcdCAgXHRkYXRhIFx0ICA6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIHN0cmluZ3xib29sZWFuPj4sXG5cdFx0XHRcdFx0ICBcdGxpc3RlbmVycyA6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIChldjogRXZlbnQpID0+IHZvaWQ+PlxuXHRcdFx0XHRcdH0+ICYgKHtcblx0XHRcdFx0XHRcdGluaXRpYWxpemU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0cGFyZW50OiBFbGVtZW50XG5cdFx0XHRcdFx0fXx7XG5cdFx0XHRcdFx0XHRpbml0aWFsaXplPzogdHJ1ZSxcblx0XHRcdFx0XHRcdHBhcmVudD86IEVsZW1lbnRcblx0XHRcdFx0XHR9KTtcblxuYXN5bmMgZnVuY3Rpb24gYnVpbGQ8VCBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHRhZ25hbWU6IFQsIG9wdGlvbnM/OiBCVUlMRF9PUFRJT05TPENvbXBvbmVudHNbVF0+KTogUHJvbWlzZTxDb21wb25lbnRzW1RdPjtcbmFzeW5jIGZ1bmN0aW9uIGJ1aWxkPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+Pih0YWduYW1lOiBzdHJpbmcsIG9wdGlvbnM/OiBCVUlMRF9PUFRJT05TPFQ+KTogUHJvbWlzZTxUPjtcbmFzeW5jIGZ1bmN0aW9uIGJ1aWxkPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+Pih0YWduYW1lOiBzdHJpbmcsIHtcblx0XHRwYXJhbXMgICAgPSB7fSxcblx0XHRpbml0aWFsaXplPSB0cnVlLFxuXHRcdGNvbnRlbnQgICA9IFtdLFxuXHRcdHBhcmVudCAgICA9IHVuZGVmaW5lZCxcblx0XHRpZCBcdFx0ICA9IHVuZGVmaW5lZCxcblx0XHRjbGFzc2VzICAgPSBbXSxcblx0XHRjc3N2YXJzICAgPSB7fSxcblx0XHRhdHRycyAgICAgPSB7fSxcblx0XHRkYXRhIFx0ICA9IHt9LFxuXHRcdGxpc3RlbmVycyA9IHt9XG5cdH06IEJVSUxEX09QVElPTlM8VD4gPSB7fSk6IFByb21pc2U8VD4ge1xuXG5cdGlmKCAhIGluaXRpYWxpemUgJiYgcGFyZW50ID09PSBudWxsKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIkEgcGFyZW50IG11c3QgYmUgZ2l2ZW4gaWYgaW5pdGlhbGl6ZSBpcyBmYWxzZVwiKTtcblxuXHRsZXQgQ3VzdG9tQ2xhc3MgPSBhd2FpdCBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCh0YWduYW1lKTtcblx0bGV0IGVsZW0gPSBuZXcgQ3VzdG9tQ2xhc3MocGFyYW1zKSBhcyBMSVNTSG9zdDxUPjtcblxuXHQvLyBGaXggaXNzdWUgIzJcblx0aWYoIGVsZW0udGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSB0YWduYW1lIClcblx0XHRlbGVtLnNldEF0dHJpYnV0ZShcImlzXCIsIHRhZ25hbWUpO1xuXG5cdGlmKCBpZCAhPT0gdW5kZWZpbmVkIClcblx0XHRlbGVtLmlkID0gaWQ7XG5cblx0aWYoIGNsYXNzZXMubGVuZ3RoID4gMClcblx0XHRlbGVtLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG5cblx0Zm9yKGxldCBuYW1lIGluIGNzc3ZhcnMpXG5cdFx0ZWxlbS5zdHlsZS5zZXRQcm9wZXJ0eShgLS0ke25hbWV9YCwgY3NzdmFyc1tuYW1lXSk7XG5cblx0Zm9yKGxldCBuYW1lIGluIGF0dHJzKSB7XG5cblx0XHRsZXQgdmFsdWUgPSBhdHRyc1tuYW1lXTtcblx0XHRpZiggdHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIilcblx0XHRcdGVsZW0udG9nZ2xlQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0XHRlbHNlXG5cdFx0XHRlbGVtLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdH1cblxuXHRmb3IobGV0IG5hbWUgaW4gZGF0YSkge1xuXG5cdFx0bGV0IHZhbHVlID0gZGF0YVtuYW1lXTtcblx0XHRpZiggdmFsdWUgPT09IGZhbHNlKVxuXHRcdFx0ZGVsZXRlIGVsZW0uZGF0YXNldFtuYW1lXTtcblx0XHRlbHNlIGlmKHZhbHVlID09PSB0cnVlKVxuXHRcdFx0ZWxlbS5kYXRhc2V0W25hbWVdID0gXCJcIjtcblx0XHRlbHNlXG5cdFx0XHRlbGVtLmRhdGFzZXRbbmFtZV0gPSB2YWx1ZTtcblx0fVxuXG5cdGlmKCAhIEFycmF5LmlzQXJyYXkoY29udGVudCkgKVxuXHRcdGNvbnRlbnQgPSBbY29udGVudCBhcyBhbnldO1xuXHRlbGVtLnJlcGxhY2VDaGlsZHJlbiguLi5jb250ZW50KTtcblxuXHRmb3IobGV0IG5hbWUgaW4gbGlzdGVuZXJzKVxuXHRcdGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBsaXN0ZW5lcnNbbmFtZV0pO1xuXG5cdGlmKCBwYXJlbnQgIT09IHVuZGVmaW5lZCApXG5cdFx0cGFyZW50LmFwcGVuZChlbGVtKTtcblxuXHRpZiggISBlbGVtLmlzSW5pdCAmJiBpbml0aWFsaXplIClcblx0XHRyZXR1cm4gYXdhaXQgTElTUy5pbml0aWFsaXplKGVsZW0pO1xuXG5cdHJldHVybiBhd2FpdCBMSVNTLmdldExJU1MoZWxlbSk7XG59XG5MSVNTLmJ1aWxkID0gYnVpbGQ7XG5cblxuTElTUy53aGVuRGVmaW5lZCAgICA9IGFzeW5jIGZ1bmN0aW9uKHRhZ25hbWU6IHN0cmluZywgY2FsbGJhY2s/OiAoKSA9PiB2b2lkICkgOiBQcm9taXNlPHZvaWQ+IHtcblxuXHRhd2FpdCBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCh0YWduYW1lKTtcblxuXHRpZiggY2FsbGJhY2sgIT09IHVuZGVmaW5lZClcblx0XHRjYWxsYmFjaygpO1xuXG5cdHJldHVybjtcbn1cbkxJU1Mud2hlbkFsbERlZmluZWQgPSBhc3luYyBmdW5jdGlvbih0YWduYW1lczogcmVhZG9ubHkgc3RyaW5nW10sIGNhbGxiYWNrPzogKCkgPT4gdm9pZCApIDogUHJvbWlzZTx2b2lkPiB7XG5cblx0YXdhaXQgUHJvbWlzZS5hbGwoIHRhZ25hbWVzLm1hcCggdCA9PiBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCh0KSApIClcblxuXHRpZiggY2FsbGJhY2sgIT09IHVuZGVmaW5lZClcblx0XHRjYWxsYmFjaygpO1xuXG59XG5cbkxJU1MuaXNEZWZpbmVkID0gZnVuY3Rpb24obmFtZTogc3RyaW5nKSB7XG5cdHJldHVybiBjdXN0b21FbGVtZW50cy5nZXQobmFtZSk7XG59XG5cbkxJU1Muc2VsZWN0b3IgPSBmdW5jdGlvbihuYW1lPzogc3RyaW5nKSB7XG5cdGlmKG5hbWUgPT09IHVuZGVmaW5lZCkgLy8ganVzdCBhbiBoNGNrXG5cdFx0cmV0dXJuIFwiXCI7XG5cdHJldHVybiBgOmlzKCR7bmFtZX0sIFtpcz1cIiR7bmFtZX1cIl0pYDtcbn1cblxuTElTUy5nZXRMSVNTICAgID0gYXN5bmMgZnVuY3Rpb248VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KCBlbGVtZW50OiBFbGVtZW50ICkge1xuXG5cdGF3YWl0IExJU1Mud2hlbkRlZmluZWQoIExJU1MuZ2V0TmFtZShlbGVtZW50KSApO1xuXG5cdHJldHVybiAoZWxlbWVudCBhcyBMSVNTSG9zdDxUPikuTElTUzsgLy8gZW5zdXJlIGluaXRpYWxpemVkLlxufVxuTElTUy5nZXRMSVNTU3luYz0gZnVuY3Rpb248VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KCBlbGVtZW50OiBFbGVtZW50ICkge1xuXG5cdGlmKCAhIExJU1MuaXNEZWZpbmVkKCBMSVNTLmdldE5hbWUoZWxlbWVudCkgKSApXG5cdFx0dGhyb3cgbmV3IEVycm9yKGAke25hbWV9IGhhc24ndCBiZWVuIGRlZmluZWQgeWV0LmApO1xuXG5cdGxldCBob3N0ID0gZWxlbWVudCBhcyBMSVNTSG9zdDxUPjtcblxuXHRpZiggISBob3N0LmlzSW5pdCApXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW5zdGFuY2UgaGFzbid0IGJlZW4gaW5pdGlhbGl6ZWQgeWV0LlwiKTtcblxuXHRyZXR1cm4gaG9zdC5MSVNTU3luYztcbn1cbkxJU1MuaW5pdGlhbGl6ZSA9IGFzeW5jIGZ1bmN0aW9uPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PiggZWxlbWVudDogRWxlbWVudCkge1xuXG5cdGF3YWl0IExJU1Mud2hlbkRlZmluZWQoIExJU1MuZ2V0TmFtZShlbGVtZW50KSApO1xuXG5cdHJldHVybiBhd2FpdCAoZWxlbWVudCBhcyBMSVNTSG9zdDxUPikuaW5pdGlhbGl6ZSgpOyAvLyBlbnN1cmUgaW5pdGlhbGl6YXRpb24uXG59XG5cbkxJU1MuZ2V0TmFtZSA9IGZ1bmN0aW9uKCBlbGVtZW50OiBFbGVtZW50ICk6IHN0cmluZyB7XG5cblx0Y29uc3QgbmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpcycpID8/IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcblx0aWYoICEgbmFtZS5pbmNsdWRlcygnLScpIClcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEVsZW1lbnQgJHtuYW1lfSBpcyBub3QgYSBXZWJDb21wb25lbnRgKTtcblxuXHRyZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gX2J1aWxkUVMoc2VsZWN0b3I6IHN0cmluZywgdGFnbmFtZV9vcl9wYXJlbnQ/OiBzdHJpbmcgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsIHBhcmVudDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblx0XG5cdGlmKCB0YWduYW1lX29yX3BhcmVudCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB0YWduYW1lX29yX3BhcmVudCAhPT0gJ3N0cmluZycpIHtcblx0XHRwYXJlbnQgPSB0YWduYW1lX29yX3BhcmVudDtcblx0XHR0YWduYW1lX29yX3BhcmVudCA9IHVuZGVmaW5lZDtcblx0fVxuXG5cdHJldHVybiBbYCR7c2VsZWN0b3J9JHtMSVNTLnNlbGVjdG9yKHRhZ25hbWVfb3JfcGFyZW50IGFzIHN0cmluZ3x1bmRlZmluZWQpfWAsIHBhcmVudF0gYXMgY29uc3Q7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgUXVlcnlTZWxlY3RvcnMgPT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYXN5bmMgZnVuY3Rpb24gcXM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8VD47XG5hc3luYyBmdW5jdGlvbiBxczxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTwgQ29tcG9uZW50c1tOXSA+O1xuYXN5bmMgZnVuY3Rpb24gcXM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRsZXQgcmVzdWx0ID0gYXdhaXQgTElTUy5xc288VD4oc2VsZWN0b3IsIHBhcmVudCk7XG5cdGlmKHJlc3VsdCA9PT0gbnVsbClcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEVsZW1lbnQgJHtzZWxlY3Rvcn0gbm90IGZvdW5kYCk7XG5cblx0cmV0dXJuIHJlc3VsdCFcbn1cbkxJU1MucXMgID0gcXNcblxuYXN5bmMgZnVuY3Rpb24gcXNvPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPFQ+O1xuYXN5bmMgZnVuY3Rpb24gcXNvPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPCBDb21wb25lbnRzW05dID47XG5hc3luYyBmdW5jdGlvbiBxc288VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRjb25zdCBlbGVtZW50ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3I8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblx0aWYoIGVsZW1lbnQgPT09IG51bGwgKVxuXHRcdHJldHVybiBudWxsO1xuXG5cdHJldHVybiBhd2FpdCBMSVNTLmdldExJU1MoIGVsZW1lbnQgKTtcbn1cbkxJU1MucXNvID0gcXNvXG5cbmFzeW5jIGZ1bmN0aW9uIHFzYTxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTxUW10+O1xuYXN5bmMgZnVuY3Rpb24gcXNhPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPCBDb21wb25lbnRzW05dW10gPjtcbmFzeW5jIGZ1bmN0aW9uIHFzYTxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LFxuXHRcdFx0XHRcdFx0cGFyZW50ICA6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cblx0W3NlbGVjdG9yLCBwYXJlbnRdID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBwYXJlbnQpO1xuXG5cdGNvbnN0IGVsZW1lbnRzID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGw8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblxuXHRsZXQgaWR4ID0gMDtcblx0Y29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxUPj4oIGVsZW1lbnRzLmxlbmd0aCApO1xuXHRmb3IobGV0IGVsZW1lbnQgb2YgZWxlbWVudHMpXG5cdFx0cHJvbWlzZXNbaWR4KytdID0gTElTUy5nZXRMSVNTKCBlbGVtZW50ICk7XG5cblx0cmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbn1cbkxJU1MucXNhID0gcXNhO1xuXG5hc3luYyBmdW5jdGlvbiBxc2M8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA6IEVsZW1lbnQpOiBQcm9taXNlPFQ+O1xuYXN5bmMgZnVuY3Rpb24gcXNjPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgOiBFbGVtZW50KTogUHJvbWlzZTwgQ29tcG9uZW50c1tOXSA+O1xuYXN5bmMgZnVuY3Rpb24gcXNjPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50LFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgPzogRWxlbWVudCkge1xuXG5cdGNvbnN0IHJlcyA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgZWxlbWVudCk7XG5cdFxuXHRjb25zdCByZXN1bHQgPSAocmVzWzFdIGFzIHVua25vd24gYXMgRWxlbWVudCkuY2xvc2VzdDxMSVNTSG9zdDxUPj4ocmVzWzBdKTtcblx0aWYocmVzdWx0ID09PSBudWxsKVxuXHRcdHJldHVybiBudWxsO1xuXG5cdHJldHVybiBhd2FpdCBMSVNTLmdldExJU1MocmVzdWx0KTtcbn1cbkxJU1MucXNjID0gcXNjO1xuXG5mdW5jdGlvbiBxc1N5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFQ7XG5mdW5jdGlvbiBxc1N5bmM8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IENvbXBvbmVudHNbTl07XG5mdW5jdGlvbiBxc1N5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRjb25zdCBlbGVtZW50ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3I8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblxuXHRpZiggZWxlbWVudCA9PT0gbnVsbCApXG5cdFx0dGhyb3cgbmV3IEVycm9yKGBFbGVtZW50ICR7c2VsZWN0b3J9IG5vdCBmb3VuZGApO1xuXG5cdHJldHVybiBMSVNTLmdldExJU1NTeW5jKCBlbGVtZW50ICk7XG59XG5MSVNTLnFzU3luYyA9IHFzU3luYztcblxuZnVuY3Rpb24gcXNhU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogVFtdO1xuZnVuY3Rpb24gcXNhU3luYzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogQ29tcG9uZW50c1tOXVtdO1xuZnVuY3Rpb24gcXNhU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LFxuXHRcdFx0XHRcdFx0cGFyZW50ICA6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cblx0W3NlbGVjdG9yLCBwYXJlbnRdID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBwYXJlbnQpO1xuXG5cdGNvbnN0IGVsZW1lbnRzID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGw8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblxuXHRsZXQgaWR4ID0gMDtcblx0Y29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PFQ+KCBlbGVtZW50cy5sZW5ndGggKTtcblx0Zm9yKGxldCBlbGVtZW50IG9mIGVsZW1lbnRzKVxuXHRcdHJlc3VsdFtpZHgrK10gPSBMSVNTLmdldExJU1NTeW5jKCBlbGVtZW50ICk7XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cbkxJU1MucXNhU3luYyA9IHFzYVN5bmM7XG5cbmZ1bmN0aW9uIHFzY1N5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA6IEVsZW1lbnQpOiBUO1xuZnVuY3Rpb24gcXNjU3luYzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdGVsZW1lbnQgIDogRWxlbWVudCk6IENvbXBvbmVudHNbTl07XG5mdW5jdGlvbiBxc2NTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50LFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgPzogRWxlbWVudCkge1xuXG5cdGNvbnN0IHJlcyA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgZWxlbWVudCk7XG5cdFxuXHRjb25zdCByZXN1bHQgPSAocmVzWzFdIGFzIHVua25vd24gYXMgRWxlbWVudCkuY2xvc2VzdDxMSVNTSG9zdDxUPj4ocmVzWzBdKTtcblx0aWYocmVzdWx0ID09PSBudWxsKVxuXHRcdHJldHVybiBudWxsO1xuXG5cdHJldHVybiBMSVNTLmdldExJU1NTeW5jKHJlc3VsdCk7XG59XG5MSVNTLnFzY1N5bmMgPSBxc2NTeW5jO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIEF1dG8gPT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBjbGFzcyBMSVNTX0F1dG8gZXh0ZW5kcyBMSVNTKHthdHRyaWJ1dGVzOiBbXCJzcmNcIl19KSB7XG5cblx0cmVhZG9ubHkgI2tub3duX3RhZyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXHRyZWFkb25seSAjZGlyZWN0b3J5OiBzdHJpbmc7XG5cdHJlYWRvbmx5ICNzdzogUHJvbWlzZTx2b2lkPjtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLiNzdyA9IG5ldyBQcm9taXNlKCBhc3luYyAocmVzb2x2ZSkgPT4ge1xuXHRcdFx0XG5cdFx0XHRhd2FpdCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihgLi9zdy5qc2ApO1xuXG5cdFx0XHRpZiggbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlciApXG5cdFx0XHRcdHJlc29sdmUoKTtcblxuXHRcdFx0bmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignY29udHJvbGxlcmNoYW5nZScsICgpID0+IHtcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblxuXHRcdGNvbnN0IHNyYyA9IHRoaXMuYXR0cnMuc3JjO1xuXHRcdGlmKHNyYyA9PT0gbnVsbClcblx0XHRcdHRocm93IG5ldyBFcnJvcihcInNyYyBhdHRyaWJ1dGUgaXMgbWlzc2luZy5cIik7XG5cdFx0dGhpcy4jZGlyZWN0b3J5ID0gc3JjWzBdID09PSAnLidcblx0XHRcdFx0XHRcdFx0XHQ/IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0vJHtzcmN9YFxuXHRcdFx0XHRcdFx0XHRcdDogc3JjO1xuXG5cdFx0bmV3IE11dGF0aW9uT2JzZXJ2ZXIoIChtdXRhdGlvbnMpID0+IHtcblxuXHRcdFx0Zm9yKGxldCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpXG5cdFx0XHRcdGZvcihsZXQgYWRkaXRpb24gb2YgbXV0YXRpb24uYWRkZWROb2Rlcylcblx0XHRcdFx0XHRpZihhZGRpdGlvbiBpbnN0YW5jZW9mIEVsZW1lbnQpXG5cdFx0XHRcdFx0XHR0aGlzLiNhZGRUYWcoYWRkaXRpb24udGFnTmFtZSlcblxuXHRcdH0pLm9ic2VydmUoIGRvY3VtZW50LCB7IGNoaWxkTGlzdDp0cnVlLCBzdWJ0cmVlOnRydWUgfSk7XG5cblxuXHRcdGZvciggbGV0IGVsZW0gb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIipcIikgKVxuXHRcdFx0dGhpcy4jYWRkVGFnKGVsZW0udGFnTmFtZSk7XG5cdH1cblxuXG4gICAgcHJvdGVjdGVkIHJlc291cmNlcygpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0XCJpbmRleC5qc1wiLFxuXHRcdFx0XCJpbmRleC5odG1sXCIsXG5cdFx0XHRcImluZGV4LmNzc1wiXG5cdFx0XTtcbiAgICB9XG5cblx0cHJvdGVjdGVkIGRlZmluZVdlYkNvbXBvbmVudCh0YWduYW1lOiBzdHJpbmcsIGZpbGVzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBvcHRzOiBQYXJ0aWFsPHtjb250ZW50OiBzdHJpbmcsIGNzczogc3RyaW5nfT4pIHtcblxuXHRcdGNvbnN0IGpzID0gZmlsZXNbXCJpbmRleC5qc1wiXTtcblx0XHRjb25zdCBjb250ZW50ID0gZmlsZXNbXCJpbmRleC5odG1sXCJdO1xuXG5cdFx0bGV0IGtsYXNzOiBudWxsfCBSZXR1cm5UeXBlPHR5cGVvZiBMSVNTPiA9IG51bGw7XG5cdFx0aWYoIGpzICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0a2xhc3MgPSBqcyhvcHRzKTtcblx0XHRlbHNlIGlmKCBjb250ZW50ICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0a2xhc3MgPSBjbGFzcyBXZWJDb21wb25lbnQgZXh0ZW5kcyBMSVNTKG9wdHMpIHt9O1xuXG5cdFx0aWYoa2xhc3MgPT09IG51bGwpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgZmlsZXMgZm9yIFdlYkNvbXBvbmVudCAke3RhZ25hbWV9LmApO1xuXG5cdFx0cmV0dXJuIExJU1MuZGVmaW5lKHRhZ25hbWUsIGtsYXNzKTtcblx0fVxuXG5cdGFzeW5jICNhZGRUYWcodGFnbmFtZTogc3RyaW5nKSB7XG5cblx0XHR0YWduYW1lID0gdGFnbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0aWYoIHRhZ25hbWUgPT09ICdsaXNzLWF1dG8nIHx8IHRhZ25hbWUgPT09ICdibGlzcy1hdXRvJyB8fCAhIHRhZ25hbWUuaW5jbHVkZXMoJy0nKSB8fCB0aGlzLiNrbm93bl90YWcuaGFzKCB0YWduYW1lICkgKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0dGhpcy4ja25vd25fdGFnLmFkZCh0YWduYW1lKTtcblxuXHRcdGF3YWl0IHRoaXMuI3N3OyAvLyBlbnN1cmUgU1cgaXMgaW5zdGFsbGVkLlxuXG5cdFx0Y29uc3QgZmlsZW5hbWVzID0gdGhpcy5yZXNvdXJjZXMoKTtcblx0XHRjb25zdCByZXNvdXJjZXMgPSBhd2FpdCBQcm9taXNlLmFsbCggZmlsZW5hbWVzLm1hcCggZmlsZSA9PiBmaWxlLmVuZHNXaXRoKCcuanMnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IF9pbXBvcnQgICAoYCR7dGhpcy4jZGlyZWN0b3J5fS8ke3RhZ25hbWV9LyR7ZmlsZX1gLCB0cnVlKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IF9mZXRjaFRleHQoYCR7dGhpcy4jZGlyZWN0b3J5fS8ke3RhZ25hbWV9LyR7ZmlsZX1gLCB0cnVlKSApICk7XG5cblx0XHRjb25zdCBmaWxlczogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBmaWxlbmFtZXMubGVuZ3RoOyArK2kpXG5cdFx0XHRpZiggcmVzb3VyY2VzW2ldICE9PSB1bmRlZmluZWQpXG5cdFx0XHRcdGZpbGVzW2ZpbGVuYW1lc1tpXV0gPSByZXNvdXJjZXNbaV07XG5cblx0XHRjb25zdCBjb250ZW50ID0gZmlsZXNbXCJpbmRleC5odG1sXCJdO1xuXHRcdGNvbnN0IGNzcyAgICAgPSBmaWxlc1tcImluZGV4LmNzc1wiXTtcblxuXHRcdGNvbnN0IG9wdHM6IFBhcnRpYWw8e2NvbnRlbnQ6IHN0cmluZywgY3NzOiBzdHJpbmd9PiA9IHtcblx0XHRcdC4uLmNvbnRlbnQgIT09IHVuZGVmaW5lZCAmJiB7Y29udGVudH0sXG5cdFx0XHQuLi5jc3MgICAgICE9PSB1bmRlZmluZWQgJiYge2Nzc30sXG5cdFx0fTtcblxuXHRcdHJldHVybiB0aGlzLmRlZmluZVdlYkNvbXBvbmVudCh0YWduYW1lLCBmaWxlcywgb3B0cyk7XG5cdFx0XG5cdH1cbn1cbkxJU1MuZGVmaW5lKFwibGlzcy1hdXRvXCIsIExJU1NfQXV0byk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50cyB7XG5cdFwibGlzcy1hdXRvXCI6IExJU1NfQXV0b1xufTtcbi8qXG4gKiBkZWNsYXJlIG1vZHVsZSAnJExJU1MnIHtcbiAqIFx0XHRpbnRlcmZhY2UgQ29tcG9uZW50cyB7XG4gKiBcdFx0XHRcIm5hbWVcIjogY2xhc3NcbiAqIFx0XHR9XG4gKiB9XG4gKi9cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBFdmVudHNUYXJnZXQgPT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIENzdEV2ZW50PEV2ZW50IGV4dGVuZHMgc3RyaW5nLCBBcmdzPiA9IEN1c3RvbUV2ZW50PEFyZ3M+ICYge3R5cGU6IEV2ZW50fTtcblxuZXhwb3J0IGludGVyZmFjZSBFdmVudHNUYXJnZXQ8RXZlbnRzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj57XG5cblx0YWRkRXZlbnRMaXN0ZW5lcjxFdmVudCBleHRlbmRzIEV4Y2x1ZGU8a2V5b2YgRXZlbnRzLCBzeW1ib2x8bnVtYmVyPj4odHlwZTogRXZlbnQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgbGlzdGVuZXI6IG51bGx8ICgoZXY6IENzdEV2ZW50PEV2ZW50LCBFdmVudHNbRXZlbnRdPikgPT4gdm9pZCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgb3B0aW9ucz86IGJvb2xlYW58QWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMpOiB2b2lkO1xuXG5cdGRpc3BhdGNoRXZlbnQ8RXZlbnQgZXh0ZW5kcyBFeGNsdWRlPGtleW9mIEV2ZW50cywgc3ltYm9sfG51bWJlcj4+KGV2ZW50OiBDc3RFdmVudDxFdmVudCwgRXZlbnRzW0V2ZW50XT4pOiBib29sZWFuO1xuXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI8RXZlbnQgZXh0ZW5kcyBFeGNsdWRlPGtleW9mIEV2ZW50cywgc3ltYm9sfG51bWJlcj4+KHR5cGU6IEV2ZW50LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsaXN0ZW5lcjogbnVsbHwgKChldjogQ3N0RXZlbnQ8RXZlbnQsIEV2ZW50c1tFdmVudF0+KSA9PiB2b2lkKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz86IGJvb2xlYW58QWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMpOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgQ3N0bUV2ZW50PEV2ZW50IGV4dGVuZHMgc3RyaW5nLCBBcmdzPiBleHRlbmRzIEN1c3RvbUV2ZW50PEFyZ3M+IHtcblxuXHRvdmVycmlkZSBnZXQgdHlwZSgpOiBFdmVudCB7IHJldHVybiBzdXBlci50eXBlIGFzIEV2ZW50OyB9XG5cblx0Y29uc3RydWN0b3IodHlwZTogRXZlbnQsIGFyZ3M6IEFyZ3MpIHtcblx0XHRzdXBlcih0eXBlLCB7ZGV0YWlsOiBhcmdzfSk7XG5cdH1cbn1cblxuZXhwb3J0IHR5cGUgRXZlbnRzVGFyZ2V0Q3N0cjxFdmVudHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4+ID0gQ29uc3RydWN0b3I8RXZlbnRzVGFyZ2V0PEV2ZW50cz4+O1xuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgaW50ZXJuYWwgdG9vbHMgPT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hSZXNvdXJjZShyZXNvdXJjZTogUmVzb3VyY2V8UHJvbWlzZTxSZXNvdXJjZT4pIHtcblxuXHRyZXNvdXJjZSA9IGF3YWl0IHJlc291cmNlO1xuXG5cdGlmKCAhIChyZXNvdXJjZSBpbnN0YW5jZW9mIFJlc3BvbnNlKSApXG5cdFx0cmVzb3VyY2UgPSBhd2FpdCBmZXRjaChyZXNvdXJjZSk7XG5cblx0cmV0dXJuIGF3YWl0IHJlc291cmNlLnRleHQoKTtcbn1cblxuXG5hc3luYyBmdW5jdGlvbiBfZmV0Y2hUZXh0KHVyaTogc3RyaW5nfFVSTCwgaXNMaXNzQXV0bzogYm9vbGVhbiA9IGZhbHNlKSB7XG5cblx0Y29uc3Qgb3B0aW9ucyA9IGlzTGlzc0F1dG9cblx0XHRcdFx0XHRcdD8ge2hlYWRlcnM6e1wibGlzcy1hdXRvXCI6IFwidHJ1ZVwifX1cblx0XHRcdFx0XHRcdDoge307XG5cblxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVyaSwgb3B0aW9ucyk7XG5cdGlmKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwIClcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXG5cdGlmKCBpc0xpc3NBdXRvICYmIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwic3RhdHVzXCIpISA9PT0gXCI0MDRcIiApXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblxuXHRyZXR1cm4gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xufVxuYXN5bmMgZnVuY3Rpb24gX2ltcG9ydCh1cmk6IHN0cmluZywgaXNMaXNzQXV0bzogYm9vbGVhbiA9IGZhbHNlKSB7XG5cblx0Ly8gdGVzdCBmb3IgdGhlIG1vZHVsZSBleGlzdGFuY2UuXG5cdGlmKGlzTGlzc0F1dG8gJiYgYXdhaXQgX2ZldGNoVGV4dCh1cmksIGlzTGlzc0F1dG8pID09PSB1bmRlZmluZWQgKVxuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cblx0dHJ5IHtcblx0XHRyZXR1cm4gKGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrSWdub3JlOiB0cnVlICovIHVyaSkpLmRlZmF1bHQ7XG5cdH0gY2F0Y2goZSkge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH1cbn1cblxuLy8gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81MTAwMDQ2MS9odG1sLWVsZW1lbnQtdGFnLW5hbWUtZnJvbS1jb25zdHJ1Y3RvclxuY29uc3QgSFRNTENMQVNTX1JFR0VYID0gIC9IVE1MKFxcdyspRWxlbWVudC87XG5jb25zdCBlbGVtZW50TmFtZUxvb2t1cFRhYmxlID0ge1xuICAgICdVTGlzdCc6ICd1bCcsXG4gICAgJ1RhYmxlQ2FwdGlvbic6ICdjYXB0aW9uJyxcbiAgICAnVGFibGVDZWxsJzogJ3RkJywgLy8gdGhcbiAgICAnVGFibGVDb2wnOiAnY29sJywgIC8vJ2NvbGdyb3VwJyxcbiAgICAnVGFibGVSb3cnOiAndHInLFxuICAgICdUYWJsZVNlY3Rpb24nOiAndGJvZHknLCAvL1sndGhlYWQnLCAndGJvZHknLCAndGZvb3QnXSxcbiAgICAnUXVvdGUnOiAncScsXG4gICAgJ1BhcmFncmFwaCc6ICdwJyxcbiAgICAnT0xpc3QnOiAnb2wnLFxuICAgICdNb2QnOiAnaW5zJywgLy8sICdkZWwnXSxcbiAgICAnTWVkaWEnOiAndmlkZW8nLC8vICdhdWRpbyddLFxuICAgICdJbWFnZSc6ICdpbWcnLFxuICAgICdIZWFkaW5nJzogJ2gxJywgLy8sICdoMicsICdoMycsICdoNCcsICdoNScsICdoNiddLFxuICAgICdEaXJlY3RvcnknOiAnZGlyJyxcbiAgICAnRExpc3QnOiAnZGwnLFxuICAgICdBbmNob3InOiAnYSdcbiAgfTtcbmZ1bmN0aW9uIF9lbGVtZW50MnRhZ25hbWUoQ2xhc3M6IHR5cGVvZiBIVE1MRWxlbWVudCk6IHN0cmluZ3xudWxsIHtcblxuXHRpZiggQ2xhc3MgPT09IEhUTUxFbGVtZW50IClcblx0XHRyZXR1cm4gbnVsbDtcblx0XG5cdGxldCBodG1sdGFnID0gSFRNTENMQVNTX1JFR0VYLmV4ZWMoQ2xhc3MubmFtZSkhWzFdO1xuXHRyZXR1cm4gZWxlbWVudE5hbWVMb29rdXBUYWJsZVtodG1sdGFnIGFzIGtleW9mIHR5cGVvZiBlbGVtZW50TmFtZUxvb2t1cFRhYmxlXSA/PyBodG1sdGFnLnRvTG93ZXJDYXNlKClcbn0iLCJpbXBvcnQgTElTUyBmcm9tIFwiTElTU1wiO1xuaW1wb3J0IFwic3RydWN0L21lbnUudHNcIjtcblxuaW1wb3J0IFwic3RydWN0L2NhbGMvc2hlZXQudHNcIjtcbmltcG9ydCBcInN0cnVjdC9jYWxjL3Rvb2xiYXIudHNcIjtcbmltcG9ydCB7IENhbGNTaGVldCB9IGZyb20gXCJzdHJ1Y3QvY2FsYy9zaGVldC50c1wiO1xuaW1wb3J0IHsgQ2FsY1Rvb2xiYXIgfSBmcm9tIFwic3RydWN0L2NhbGMvdG9vbGJhci50c1wiO1xuaW1wb3J0IHsgRm9ybWF0cyB9IGZyb20gXCJzdHJ1Y3QvY2FsYy9mb3JtYXQudHNcIjtcblxuXG57XG4gICAgY29uc3Qgc2hlZXQgPSBhd2FpdCBMSVNTLnFzPENhbGNTaGVldD4oJyNzaGVldF90ZXN0Jyk7XG5cbiAgICAvL2F3YWl0IGxvYWQoc2hlZXQsIFwiYXNzZXRzL3RhYmxldXIvdGVzdC5vZHNcIik7XG59XG5cbmNvbnN0IHNoZWV0X2Zvcm1hdF9jb250ZW50ID0gYXdhaXQgTElTUy5xczxDYWxjU2hlZXQ+KCcjc2hlZXRfZm9ybWF0X2NvbnRlbnQnKTtcblxuc2hlZXRfZm9ybWF0X2NvbnRlbnQuZ2V0Q2VsbHMoXCJBMTpGMVwiKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpLmNvbnRlbnQgPSBbXG4gICAgXCJUYWlsbGVcIiwgXCJHcmFzXCIsIFwiSXRhbGlxdWVcIiwgXCJTb3VsaWduw6lcIiwgXCJDb3VsZXVyIHRleHRlXCIsIFwiQ291bGV1ciBmb25kXCJcbl1cblxuc2hlZXRfZm9ybWF0X2NvbnRlbnQuZ2V0Q2VsbHMoXCJBMjpGMlwiKS5mb3JtYXQoXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFwiQVwiO1xuc2hlZXRfZm9ybWF0X2NvbnRlbnQuZ2V0Q2VsbHMoXCJBMlwiKS5mb3JtYXQoe2ZvbnRfc2l6ZTogJzE1cHQnfSk7XG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRDZWxscyhcIkIyXCIpLmZvcm1hdCgnYm9sZCcpO1xuc2hlZXRfZm9ybWF0X2NvbnRlbnQuZ2V0Q2VsbHMoXCJDMlwiKS5mb3JtYXQoJ2l0YWxpYycpO1xuc2hlZXRfZm9ybWF0X2NvbnRlbnQuZ2V0Q2VsbHMoXCJEMlwiKS5mb3JtYXQoJ3VuZGVybGluZScpO1xuc2hlZXRfZm9ybWF0X2NvbnRlbnQuZ2V0Q2VsbHMoXCJFMlwiKS5mb3JtYXQoe2ZvcmVncm91bmRfY29sb3I6ICdibHVlJ30pO1xuc2hlZXRfZm9ybWF0X2NvbnRlbnQuZ2V0Q2VsbHMoXCJGMlwiKS5mb3JtYXQoe2JhY2tncm91bmRfY29sb3I6ICd5ZWxsb3cnfSk7XG5cbmNvbnN0IHNoZWV0X3Rvb2xiYXJfZm9ybWF0X2NvbnRlbnQgPSBhd2FpdCBMSVNTLnFzPENhbGNUb29sYmFyPignI3NoZWV0X3Rvb2xiYXJfZm9ybWF0X2NvbnRlbnQnKTtcbnNoZWV0X3Rvb2xiYXJfZm9ybWF0X2NvbnRlbnQuc3luY1RvKHNoZWV0X2Zvcm1hdF9jb250ZW50KTtcbnNoZWV0X3Rvb2xiYXJfZm9ybWF0X2NvbnRlbnQuZGlzYWJsZUFsbEV4Y2VwdChcImZvbnRfc2l6ZVwiLCBcImJvbGRcIiwgXCJpdGFsaWNcIiwgXCJ1bmRlcmxpbmVcIiwgXCJmb3JlZ3JvdW5kX2NvbG9yXCIsIFwiYmFja2dyb3VuZF9jb2xvclwiKTtcblxue1xuICAgIGNvbnN0IHNoZWV0X2FsaWduID0gYXdhaXQgTElTUy5xczxDYWxjU2hlZXQ+KCcjc2hlZXRfYWxpZ24nKTtcblxuICAgIHNoZWV0X2FsaWduLmdldENlbGxzKFwiQjE6RTFcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gW1xuICAgICAgICBcIkhhdXRcIiwgXCJNaWxpZXVcIiwgXCJCYXNcIiwgXCJBanVzdGVyXCJcbiAgICBdXG5cbiAgICBzaGVldF9hbGlnbi5nZXRDZWxscyhcIkEyOkE0XCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIiwgXCJ2YWxpZ25fbWlkZGxlXCIpLmNvbnRlbnQgPSBbXG4gICAgICAgIFwiR2F1Y2hlXCIsIFwiQ2VudHJlXCIsIFwiRHJvaXRcIlxuICAgIF1cblxuICAgIHNoZWV0X2FsaWduLmdldENlbGxzKFwiQjI6RDRcIikuY29udGVudCA9IFwiQVwiO1xuICAgIHNoZWV0X2FsaWduLmdldENlbGxzKFwiQjI6RTJcIikuZm9ybWF0KFwiYWxpZ25fbGVmdFwiKTtcbiAgICBzaGVldF9hbGlnbi5nZXRDZWxscyhcIkIzOkUzXCIpLmZvcm1hdCgnYWxpZ25fY2VudGVyJyk7XG4gICAgc2hlZXRfYWxpZ24uZ2V0Q2VsbHMoXCJCNDpFNFwiKS5mb3JtYXQoJ2FsaWduX3JpZ2h0Jyk7XG4gICAgc2hlZXRfYWxpZ24uZ2V0Q2VsbHMoXCJCMjpCNFwiKS5mb3JtYXQoJ3ZhbGlnbl90b3AnKTtcbiAgICBzaGVldF9hbGlnbi5nZXRDZWxscyhcIkMyOkM0XCIpLmZvcm1hdCgndmFsaWduX21pZGRsZScpO1xuICAgIHNoZWV0X2FsaWduLmdldENlbGxzKFwiRDI6RDRcIikuZm9ybWF0KCd2YWxpZ25fYm90dG9tJyk7XG5cbiAgICBzaGVldF9hbGlnbi5nZXRDZWxscyhcIkUyOkU0XCIpLmZvcm1hdChcImFqdXN0ZXJcIikuY29udGVudCA9IGBBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBYDtcblxuICAgIGNvbnN0IHNoZWV0X3Rvb2xiYXJfYWxpZ24gPSBhd2FpdCBMSVNTLnFzPENhbGNUb29sYmFyPignI3NoZWV0X3Rvb2xiYXJfYWxpZ24nKTtcbiAgICBzaGVldF90b29sYmFyX2FsaWduLnN5bmNUbyhzaGVldF9hbGlnbik7XG4gICAgc2hlZXRfdG9vbGJhcl9hbGlnbi5kaXNhYmxlQWxsRXhjZXB0KFwiYWxpZ25fbGVmdFwiLCBcImFsaWduX2NlbnRlclwiLCBcImFsaWduX3JpZ2h0XCIsIFwidmFsaWduX3RvcFwiLCBcInZhbGlnbl9taWRkbGVcIiwgXCJ2YWxpZ25fYm90dG9tXCIsIFwiYWp1c3RlclwiKTtcbn1cblxue1xuICAgIGNvbnN0IHNoZWV0ID0gYXdhaXQgTElTUy5xczxDYWxjU2hlZXQ+KCcjc2hlZXRfZm9ybWF0Jyk7XG5cbiAgICBzaGVldC5nZXRDZWxscyhcIkExOkUxXCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFtcbiAgICAgICAgMSwgXCJNb25uYWllXCIsIFwiUG91cmNlbnRcIiwgXCJOb21icmVcIiwgXCJEYXRlXCJcbiAgICBdO1xuXG4gICAgc2hlZXQuZ2V0Q2VsbHMoXCJBMjpBNFwiKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpLmNvbnRlbnQgPSBbXG4gICAgICAgIFwiTm9ybWFsXCIsIFwiKzEgZGVjaW1hbFwiLCBcIi0xIGRlY2ltYWxcIlxuICAgIF07XG5cbiAgICBzaGVldC5nZXRDZWxscyhcIkIyOkU0XCIpLmNvbnRlbnQgPSBcIj0kQSQxXCI7XG4gICAgc2hlZXQuZ2V0Q2VsbHMoXCJCMjpCNFwiKS5mb3JtYXQoRm9ybWF0cy5ldXJvcyk7XG4gICAgc2hlZXQuZ2V0Q2VsbHMoXCJDMjpDNFwiKS5mb3JtYXQoRm9ybWF0cy5wb3VyY2VudCk7XG4gICAgc2hlZXQuZ2V0Q2VsbHMoXCJEMjpENFwiKS5mb3JtYXQoRm9ybWF0cy5udW1iZXIpO1xuICAgIHNoZWV0LmdldENlbGxzKFwiRTI6RTRcIikuZm9ybWF0KEZvcm1hdHMuZGF0ZSk7XG5cbiAgICBzaGVldC5nZXRDZWxscyhcIkIzOkUzXCIpLmZvcm1hdCh7cHJlY2lzaW9uOiAzfSk7XG4gICAgc2hlZXQuZ2V0Q2VsbHMoXCJCNDpFNFwiKS5mb3JtYXQoe3ByZWNpc2lvbjogMX0pO1xuXG4gICAgY29uc3Qgc2hlZXRfdG9vbGJhciA9IGF3YWl0IExJU1MucXM8Q2FsY1Rvb2xiYXI+KCcjc2hlZXRfdG9vbGJhcl9mb3JtYXQnKTtcbiAgICBzaGVldF90b29sYmFyLnN5bmNUbyhzaGVldCk7XG4gICAgc2hlZXRfdG9vbGJhci5kaXNhYmxlQWxsRXhjZXB0KFwiZm9ybWF0X21vbm5haWVcIiwgXCJmb3JtYXRfcG91cmNlbnRcIiwgXCJmb3JtYXRfbmJcIiwgXCJmb3JtYXRfZGF0ZVwiLCBcImZvcm1hdF96ZXJvX3AxXCIsIFwiZm9ybWF0X3plcm9fbTFcIik7XG59XG5cbntcbiAgICBjb25zdCBzaGVldCA9IGF3YWl0IExJU1MucXM8Q2FsY1NoZWV0PignI3NoZWV0X2JvcmR1cmVzJyk7XG5cbiAgICBzaGVldC5nZXRDZWxscygnQjInKS5mb3JtYXQoe1xuICAgICAgICBib3JkZXJfdG9wOiB0cnVlLFxuICAgICAgICBib3JkZXJfYm90dG9tOiB0cnVlLFxuICAgICAgICBib3JkZXJfbGVmdDogdHJ1ZSxcbiAgICAgICAgYm9yZGVyX3JpZ2h0OiB0cnVlLFxuICAgICAgICBib3JkZXJfY29sb3I6ICdyZWQnLFxuICAgIH0pXG5cbiAgICBjb25zdCBzaGVldF90b29sYmFyID0gYXdhaXQgTElTUy5xczxDYWxjVG9vbGJhcj4oJyNzaGVldF90b29sYmFyX2JvcmR1cmVzJyk7XG4gICAgc2hlZXRfdG9vbGJhci5zeW5jVG8oc2hlZXQpO1xuICAgIHNoZWV0X3Rvb2xiYXIuZGlzYWJsZUFsbEV4Y2VwdChcImJvcmRlclwiLCBcImJvcmRlcl9jb2xvclwiKTtcbn1cblxuXG57XG4gICAgY29uc3Qgc2hlZXQgPSBhd2FpdCBMSVNTLnFzPENhbGNTaGVldD4oJyNzaGVldF9yZXRyYWl0cycpO1xuXG4gICAgc2hlZXQuZ2V0Q2VsbHMoXCJBMTpCMVwiKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpLmNvbnRlbnQgPSBbXG4gICAgICAgIFwiR2F1Y2hlXCIsIFwiRHJvaXRlXCJcbiAgICBdO1xuXG4gICAgc2hlZXQuZ2V0Q2VsbHMoJ0EyOkI1JykuY29udGVudCA9IFwiQVwiO1xuICAgIHNoZWV0LmdldENlbGxzKCdBMjpBNScpLmZvcm1hdChcImFsaWduX2xlZnRcIik7XG4gICAgc2hlZXQuZ2V0Q2VsbHMoJ0IyOkI1JykuZm9ybWF0KFwiYWxpZ25fcmlnaHRcIik7XG5cbiAgICBzaGVldC5nZXRDZWxscygnQTM6QjMnKS5mb3JtYXQoe2luZGVudDogMX0pO1xuICAgIHNoZWV0LmdldENlbGxzKCdBNDpCNCcpLmZvcm1hdCh7aW5kZW50OiAyfSk7XG4gICAgc2hlZXQuZ2V0Q2VsbHMoJ0E1OkI1JykuZm9ybWF0KHtpbmRlbnQ6IDN9KTtcblxuICAgIGNvbnN0IHNoZWV0X3Rvb2xiYXIgPSBhd2FpdCBMSVNTLnFzPENhbGNUb29sYmFyPignI3NoZWV0X3Rvb2xiYXJfcmV0cmFpdHMnKTtcbiAgICBzaGVldF90b29sYmFyLnN5bmNUbyhzaGVldCk7XG4gICAgc2hlZXRfdG9vbGJhci5kaXNhYmxlQWxsRXhjZXB0KFwicmV0cmFpdF9wMVwiLCBcInJldHJhaXRfbTFcIik7XG59XG5cblxue1xuICAgIGNvbnN0IHNoZWV0ID0gYXdhaXQgTElTUy5xczxDYWxjU2hlZXQ+KCcjc2hlZXRfZnVzaW9uJyk7XG5cbiAgICBzaGVldC5nZXRDZWxscygnQjInKS5mb3JtYXQoe1xuICAgICAgICBzcGFuOiBbMiwyXSxcbiAgICAgICAgYWxpZ25fY2VudGVyOiB0cnVlLFxuICAgICAgICB2YWxpZ25fbWlkZGxlOiB0cnVlXG4gICAgfSkuY29udGVudCA9IFwiQVwiO1xuXG4gICAgY29uc3Qgc2hlZXRfdG9vbGJhciA9IGF3YWl0IExJU1MucXM8Q2FsY1Rvb2xiYXI+KCcjc2hlZXRfdG9vbGJhcl9mdXNpb24nKTtcbiAgICBzaGVldF90b29sYmFyLnN5bmNUbyhzaGVldCk7XG4gICAgc2hlZXRfdG9vbGJhci5kaXNhYmxlQWxsRXhjZXB0KFwibWVyZ2VfY2VudGVyXCIsIFwibWVyZ2VcIiwgXCJ1bm1lcmdlXCIpO1xufSIsImltcG9ydCB7IHN0cjJodG1sIH0gZnJvbSBcInN0cnVjdC91dGlscy9zdHIyaHRtbFwiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0LCBDZWxsTGlzdCB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbmV4cG9ydCBjbGFzcyBSYW5nZU92ZXJsYXkgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG5cbiAgICAjc2hlZXQ6IENhbGNTaGVldDtcbiAgICAjcmFuZ2U6IHN0cmluZ3xudWxsID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgb3ZlcmxheTogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihzaGVldDogQ2FsY1NoZWV0LCAuLi5jbGFzc2xpc3Q6IHN0cmluZ1tdKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLiNzaGVldCA9IHNoZWV0O1xuICAgICAgICB0aGlzLiNzaGVldC5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub3ZlcmxheSA9IHN0cjJodG1sKGA8ZGl2IGNsYXNzPSdvdmVybGF5Jz48L2Rpdj5gKTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NsaXN0KTtcblxuICAgICAgICBzaGVldC5jb250ZW50LmFwcGVuZCggdGhpcy5vdmVybGF5ICk7XG4gICAgfVxuXG4gICAgc2V0UmFuZ2UocmFuZ2U6IENlbGxMaXN0fG51bGwpIHtcbiAgICAgICAgdGhpcy4jcmFuZ2UgPSByYW5nZSA9PT0gbnVsbCA/IG51bGwgOiByYW5nZS5wbGFnZV9uYW1lITtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0UmVjdCguLi5yZWN0OiByZWFkb25seSBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSkge1xuICAgICAgICByZXR1cm4gcmVjdDtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIiwgdGhpcy4jcmFuZ2UgPT09IG51bGwpO1xuXG4gICAgICAgIGlmKCB0aGlzLiNyYW5nZSA9PT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuZ2V0UmVjdCggLi4udGhpcy4jc2hlZXQuZ2V0UmVjdCggdGhpcy4jc2hlZXQuZ2V0UmFuZ2UodGhpcy4jcmFuZ2UpICkgKTtcbiAgICAgICAgdGhpcy4jc2hlZXQuc2V0UmVjdCh0aGlzLm92ZXJsYXksIHJlY3QgKTtcbiAgICB9XG5cbiAgICBvdmVycmlkZSBhZGRFdmVudExpc3RlbmVyKHR5cGU6IHN0cmluZywgY2FsbGJhY2s6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QgfCBudWxsLCBvcHRpb25zPzogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMgfCBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIG92ZXJyaWRlIHJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZTogc3RyaW5nLCBjYWxsYmFjazogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCB8IG51bGwsIG9wdGlvbnM/OiBFdmVudExpc3RlbmVyT3B0aW9ucyB8IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLm92ZXJsYXkucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgb3B0aW9ucyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm9ybXVsYVJlZiBleHRlbmRzIFJhbmdlT3ZlcmxheSB7XG5cbiAgICBjb25zdHJ1Y3RvcihzaGVldDogQ2FsY1NoZWV0KSB7XG4gICAgICAgIHN1cGVyKHNoZWV0LCBcInJhbmdlX2hpZ2hsaWdodFwiKTtcbiAgICB9XG5cbiAgICAjY3VyX2NvbG9yID0gMDtcbiAgICBzZXRDb2xvcihjb2xvcl9pZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKGBoaWdobGlnaHRfJHt0aGlzLiNjdXJfY29sb3J9YCk7IFxuICAgICAgICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LmFkZChgaGlnaGxpZ2h0XyR7Y29sb3JfaWR9YCk7XG4gICAgICAgIHRoaXMuI2N1cl9jb2xvciA9IGNvbG9yX2lkO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlY29weUhhbmRsZSBleHRlbmRzIFJhbmdlT3ZlcmxheSB7XG5cbiAgICBjb25zdHJ1Y3RvcihzaGVldDogQ2FsY1NoZWV0KSB7XG4gICAgICAgIHN1cGVyKHNoZWV0LCBcInJlY29weVwiKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0UmVjdCh4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIFt4K3ctMiwgeStoLTIsIDUsIDVdIGFzIGNvbnN0O1xuICAgIH1cblxufSIsImltcG9ydCB7IEZvcm11bGEgfSBmcm9tIFwiLi9mb3JtdWxhX3BhcnNlclwiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0LCBDZWxsLCBDZWxsTGlzdCwgUmF3Q29udGVudFR5cGUgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5leHBvcnQgY2xhc3MgRm9ybWF0TWFuYWdlciB7XG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCkge1xuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgc2hlZXQuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2OiBLZXlib2FyZEV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGlmKCAhIGV2LmN0cmxLZXkgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ2InKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcImJvbGRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnaScpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KFwiaXRhbGljXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ3UnKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcInVuZGVybGluZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdsJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJhbGlnbl9sZWZ0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ3InKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcImFsaWduX3JpZ2h0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ2UnKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcImFsaWduX2NlbnRlclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICc0JyAmJiBldi5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoRm9ybWF0cy5ldXJvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnNScgJiYgZXYuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KEZvcm1hdHMucG91cmNlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJzEnICYmIGV2LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChGb3JtYXRzLm51bWJlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgICAgICAvKiBUT0RPIGxpc3RlbiAqL1xuXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxvYXQyRGF0ZShmbG9hdDogbnVtYmVyKSB7XG5cbiAgICBsZXQgY29udGVudCA9IG5ldyBEYXRlKFwiMTg5OS0xMi0zMFwiKTtcblxuICAgIGNvbnRlbnQuc2V0RGF0ZSggY29udGVudC5nZXREYXRlKCkgKyBmbG9hdCk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkYXRlMkZsb2F0KGRhdGU6IERhdGUpIHtcbiAgICBjb25zdCBiZWcgPSBuZXcgRGF0ZShcIjE4OTktMTItMzBcIik7XG4gICAgcmV0dXJuICsoKGRhdGUuZ2V0VGltZSgpIC0gYmVnLmdldFRpbWUoKSkgLyAoMjQqMzYwMCoxMDAwKSkudG9GaXhlZCg3KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFJhdyhwdGhpczogQ2VsbCwgdmFsdWUgPSBwdGhpcy5yYXdDb250ZW50KSB7XG4gICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRm9ybXVsYSlcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIEZvcm1hdHMuZGVmYXVsdC5jYWxsKHB0aGlzLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBjb25zdCBGb3JtYXRzID0ge1xuXG4gICAgZGVmYXVsdDogZnVuY3Rpb24odGhpczogQ2VsbHxudWxsLCB2YWx1ZSA9IHRoaXM/LnJhd0NvbnRlbnQpIHtcblxuICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBGb3JtdWxhKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5jYWNoZWRWYWx1ZSgpO1xuXG4gICAgICAgIGNvbnN0IHByZWMgPSArKHRoaXM/LmdldEF0dHJpYnV0ZSgncHJlY2lzaW9uJykgPz8gMik7XG5cbiAgICAgICAgaWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuXG4gICAgICAgICAgICBpZiggdGhpcz8uZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSA9PT0gXCJwb3VyY2VudFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBgJHsrKCAoK3ZhbHVlKSoxMDApLnRvUHJlY2lzaW9uKDcpfWAucmVwbGFjZSgnLicsICcsJykgKyBcIiVcIjtcblxuICAgICAgICAgICAgcmV0dXJuIGAkeyt2YWx1ZS50b1ByZWNpc2lvbig3KX1gLnJlcGxhY2UoJy4nLCAnLCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPyAnVlJBSScgOiAnRkFVWCc7XG5cbiAgICAgICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUZSXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlITtcbiAgICB9LFxuICAgIG51bWJlcjogZnVuY3Rpb24odGhpczpDZWxsLCB2YWx1ZSA9IHRoaXMucmF3Q29udGVudCkge1xuXG4gICAgICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIEZvcm11bGEpXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmNhY2hlZFZhbHVlKCk7XG5cbiAgICAgICAgaWYodmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuXG4gICAgICAgIGlmKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSlcbiAgICAgICAgICAgIHZhbHVlID0gZGF0ZTJGbG9hdCh2YWx1ZSk7XG5cbiAgICAgICAgaWYoIHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIpICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtdHlwZVwiLCBcIm51bWJlclwiKTtcblxuICAgICAgICAgICAgaWYoICEgKHRoaXMucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEpIClcbiAgICAgICAgICAgICAgICBDYWxjU2hlZXQuZ2V0U2hlZXRGcm9tQ2VsbCh0aGlzKS5nZXRSYW5nZSh0aGlzKS5jb250ZW50ID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmVjID0gKyh0aGlzLmdldEF0dHJpYnV0ZSgncHJlY2lzaW9uJykgPz8gMik7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjLFxuICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjXG4gICAgICAgICAgICB9KTtcbiAgICB9LFxuICAgIHBvdXJjZW50OiBmdW5jdGlvbih0aGlzOkNlbGwsIHZhbHVlID0gdGhpcy5yYXdDb250ZW50KSB7XG5cbiAgICAgICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRm9ybXVsYSlcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuY2FjaGVkVmFsdWUoKTtcblxuICAgICAgICBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIGlmKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSlcbiAgICAgICAgICAgIHZhbHVlID0gZGF0ZTJGbG9hdCh2YWx1ZSk7XG5cbiAgICAgICAgaWYoIHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIpICE9PSBcInBvdXJjZW50XCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIsIFwicG91cmNlbnRcIik7XG4gICAgICAgICAgICBpZiggISAodGhpcy5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSkgKVxuICAgICAgICAgICAgICAgIENhbGNTaGVldC5nZXRTaGVldEZyb21DZWxsKHRoaXMpLmdldFJhbmdlKHRoaXMpLmNvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZWMgPSArKHRoaXMuZ2V0QXR0cmlidXRlKCdwcmVjaXNpb24nKSA/PyAyKTtcblxuICAgICAgICByZXR1cm4gKHZhbHVlICogMTAwKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHtcbiAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogcHJlYyxcbiAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogcHJlY1xuICAgICAgICAgICAgfSkgKyAnJSc7XG4gICAgfSxcbiAgICBkYXRlOiBmdW5jdGlvbih0aGlzOkNlbGwsIHZhbHVlID0gdGhpcy5yYXdDb250ZW50KSB7XG4gICAgICAgIFxuICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBGb3JtdWxhKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5jYWNoZWRWYWx1ZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgIGlmKHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIGlmKCB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG5cbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIiwgXCJkYXRlXCIpO1xuXG4gICAgICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgKSB7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IHZhbHVlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUZSXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUuc2xpY2UoMCwgNikgKyBkYXRlLnNsaWNlKDgpO1xuICAgICAgICB9IGlmKCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGZsb2F0MkRhdGUodmFsdWUpO1xuXG4gICAgICAgICAgICBpZiggISAodGhpcy5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSkgKVxuICAgICAgICAgICAgICAgIENhbGNTaGVldC5nZXRTaGVldEZyb21DZWxsKHRoaXMpLmdldFJhbmdlKCB0aGlzICkuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBkYXRlID0gY29udGVudC50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRlLnNsaWNlKDAsIDYpICsgZGF0ZS5zbGljZSg4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIGV1cm9zOiBmdW5jdGlvbih0aGlzOkNlbGwsIHZhbHVlID0gdGhpcy5yYXdDb250ZW50KSB7XG5cbiAgICAgICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRm9ybXVsYSlcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuY2FjaGVkVmFsdWUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG5cbiAgICAgICAgaWYodmFsdWUgaW5zdGFuY2VvZiBEYXRlKVxuICAgICAgICAgICAgdmFsdWUgPSBkYXRlMkZsb2F0KHZhbHVlKTtcblxuICAgICAgICBpZiggdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIikgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIsIFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgaWYoICEgKHRoaXMucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEpIClcbiAgICAgICAgICAgICAgICBDYWxjU2hlZXQuZ2V0U2hlZXRGcm9tQ2VsbCh0aGlzKS5nZXRSYW5nZSh0aGlzKS5jb250ZW50ID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmVjID0gKyh0aGlzLmdldEF0dHJpYnV0ZSgncHJlY2lzaW9uJykgPz8gMik7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjLFxuICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjXG4gICAgICAgICAgICB9KSArICfigqwnO1xuICAgICAgICAvLy50b0ZpeGVkKDIpICsgJ+KCrCc7XG4gICAgfSxcbn1cblxuZXhwb3J0IGNsYXNzIEZvcm1hdCB7XG5cbiAgICAjZm9ybWF0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoZm9ybWF0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgICAgIHRoaXMuI2Zvcm1hdCA9IGZvcm1hdDtcbiAgICB9XG5cbiAgICBhcHBseVRvKGNlbGw6IENlbGx8Q2VsbExpc3QpIHtcblxuICAgICAgICBpZiggY2VsbCBpbnN0YW5jZW9mIENlbGxMaXN0KSB7XG5cbiAgICAgICAgICAgIGZvcihsZXQgYyBvZiBjZWxsLmNlbGxzKVxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlUbyhjKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCBuYW1lIGluIHRoaXMuI2Zvcm1hdCkge1xuICAgICAgICAgICAgbGV0IHZhbCA9IHRoaXMuI2Zvcm1hdFtuYW1lXTtcblxuICAgICAgICAgICAgaWYobmFtZSA9PT0gJ2Zvcm1hdCcpIHtcblxuICAgICAgICAgICAgICAgIGlmKCB2YWwgPT09IG51bGwpIHtcblxuICAgICAgICAgICAgICAgICAgICBjZWxsLmZvcm1hdCA9IEZvcm1hdHMuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGNlbGwuZm9ybWF0KCk7IC8vVE9ETzogaWYgZmN0XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNlbGwuZm9ybWF0ID0gdmFsO1xuICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBjZWxsLmZvcm1hdCggY2VsbC5yYXdDb250ZW50KTsgLy9UT0RPOiBpZiBmY3RcblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihuYW1lID09PSAncHJlY2lzaW9uJykge1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdwcmVjaXNpb24nLCB2YWwpO1xuICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBjZWxsLmZvcm1hdD8uKCBjZWxsLnJhd0NvbnRlbnQpOyAvL1RPRE86IGlmIGZjdFxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiggbmFtZSA9PT0gJ3NwYW4nICkge1xuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBzaGVldCA9IENhbGNTaGVldC5nZXRTaGVldEZyb21DZWxsKGNlbGwpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKCB2YWxbMF0gPT09IDEgJiYgdmFsWzFdID09PSAxKSB7IC8vIHVubWVyZ2VcblxuICAgICAgICAgICAgICAgICAgICBsZXQgciA9ICsoY2VsbC5nZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nKSA/PyAwKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGMgPSArKGNlbGwuZ2V0QXR0cmlidXRlKCdjb2xzcGFuJykgPz8gMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHI7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBjOyArK2opIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBzaGVldC5yZWxhdGl2ZVRvKGNlbGwsIGksIGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0YXJnZXQuY2VsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNlbGwucmVtb3ZlQXR0cmlidXRlKCdyb3dzcGFuJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwucmVtb3ZlQXR0cmlidXRlKCdjb2xzcGFuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCBgJHt2YWxbMF19YCk7XG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCBgJHt2YWxbMV19YCk7XG5cbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdmFsWzBdOyArK2kpXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB2YWxbMV07ICsraikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaSA9PT0gMCAmJiBqID09PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBzaGVldC5yZWxhdGl2ZVRvKGNlbGwsIGksIGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNlbGwgPSBjZWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIHR5cGVvZiB2YWwgPT09IFwiYm9vbGVhblwiKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggbmFtZS5zdGFydHNXaXRoKCdhbGlnbl8nKSApIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdhbGlnbl9sZWZ0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYWxpZ25fY2VudGVyJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYWxpZ25fcmlnaHQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoIG5hbWUuc3RhcnRzV2l0aCgndmFsaWduXycpICkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlnbl90b3AnKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZ25fbWlkZGxlJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWduX2JvdHRvbScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnRvZ2dsZShuYW1lLCB2YWwpO1xuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNlbGwuc3R5bGUuc2V0UHJvcGVydHkoYC0tJHtuYW1lfWAsIHZhbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQcm9wZXJ0eShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2Zvcm1hdFtuYW1lXTtcbiAgICB9XG4gICAgaGFzUHJvcGVydHkobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuYW1lIGluIHRoaXMuI2Zvcm1hdDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZXh0cmFjdEZvcm1hdChjZWxsOiBDZWxsfENlbGxMaXN0KTogRm9ybWF0IHtcbiAgICAgICAgXG4gICAgICAgIGlmKCBjZWxsIGluc3RhbmNlb2YgQ2VsbExpc3QpIHtcblxuICAgICAgICAgICAgY29uc3QgY2VsbHMgPSBjZWxsLmNlbGxzO1xuXG4gICAgICAgICAgICBsZXQgZm9ybWF0ID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHNbMF0pO1xuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgY2VsbHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBsZXQgZjIgPSBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxsc1tpXSk7XG5cbiAgICAgICAgICAgICAgICBmb3IobGV0IGtleSBpbiBmb3JtYXQuI2Zvcm1hdClcbiAgICAgICAgICAgICAgICAgICAgaWYoICEgKGtleSBpbiBmMi4jZm9ybWF0KSB8fCBmMi4jZm9ybWF0W2tleV0gIT09IGZvcm1hdC4jZm9ybWF0W2tleV0gKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGZvcm1hdC4jZm9ybWF0W2tleV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBmb3JtYXQgPSBPYmplY3QuZnJvbUVudHJpZXM8YW55PiggWy4uLmNlbGwuY2xhc3NMaXN0LnZhbHVlcygpXS5tYXAoZSA9PiBbZSwgdHJ1ZV0pICk7XG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2VsbC5zdHlsZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBjZWxsLnN0eWxlLml0ZW0oaSk7XG4gICAgICAgICAgICBpZiggISBuYW1lLnN0YXJ0c1dpdGgoJy0tJykgKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgZm9ybWF0W25hbWUuc2xpY2UoMildID0gY2VsbC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29sc3BhbiA9ICsoY2VsbC5nZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nKSA/PyAxKTtcbiAgICAgICAgY29uc3Qgcm93c3BhbiA9ICsoY2VsbC5nZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nKSA/PyAxKTtcblxuICAgICAgICBpZiggY29sc3BhbiA+IDEgfHwgcm93c3BhbiA+IDEgKVxuICAgICAgICAgICAgZm9ybWF0LnNwYW4gPSBbIHJvd3NwYW4sIGNvbHNwYW4gXTtcblxuICAgICAgICBpZiggISAoXCJmb250X3NpemVcIiBpbiBmb3JtYXQpIClcbiAgICAgICAgICAgIGZvcm1hdFsnZm9udF9zaXplJ10gPSAnMTBwdCc7XG5cbiAgICAgICAgaWYoIFwiZm9ybWF0XCIgaW4gY2VsbClcbiAgICAgICAgICAgIGZvcm1hdC5mb3JtYXQgPSBjZWxsLmZvcm1hdDtcblxuICAgICAgICBpZiggY2VsbC5oYXNBdHRyaWJ1dGUoJ3ByZWNpc2lvbicpIClcbiAgICAgICAgICAgIGZvcm1hdC5wcmVjaXNpb24gPSBjZWxsLmdldEF0dHJpYnV0ZSgncHJlY2lzaW9uJyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBGb3JtYXQoZm9ybWF0KTtcbiAgICB9XG59IiwiLy9UT0RPOiB3ZWJwYWNrIGNvbmZpZy4uLlxuaW1wb3J0IExJU1MgZnJvbSBcIi4uLy4uLy4uL2xpYnMvTElTU1wiO1xuaW1wb3J0IHsgZm9ybWF0UmF3LCBGb3JtYXRzIH0gZnJvbSBcIi4vZm9ybWF0XCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGwgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5jb25zdCBjc3MgPSBgXG4gICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYgcHJlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKCAxcmVtICsgOHB4ICsgMnB4ICk7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xpYmVyYXRpb24gU2Fucyc7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5cbmV4cG9ydCBjbGFzcyBDYWxjRm9ybXVsYSBleHRlbmRzIExJU1Moe1xuICAgIGNzc1xufSkge1xuXG4gICAgI2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XG4gICAgI3NoZWV0ICAhOiBDYWxjU2hlZXQ7XG4gICAgI2N1cl9jZWxsOiBDZWxsfG51bGwgPSBudWxsO1xuICAgICNvbklucHV0OiAoZXY6IEV2ZW50KSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCggdGhpcy4jaW5wdXQgKTtcblxuICAgICAgICB0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IHtcblxuICAgICAgICAgICAgaWYoIHRoaXMuI2N1cl9jZWxsID09PSBudWxsIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIC8vdGhpcy4jc2hlZXQuY3Vyc29yLmNvbnRlbnQgPSB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCE7XG4gICAgICAgICAgICB0aGlzLiNzaGVldC5zdGF0ZXMuY2VsbF9lZGl0LnN0YXRlID0gbnVsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsICgpID0+IHtcblxuICAgICAgICAgICAgaWYoIHRoaXMuI2N1cl9jZWxsID09PSBudWxsIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPSB0aGlzLiNjdXJfY2VsbDtcbiAgICAgICAgICAgIC8vdGhpcy4jY3VyX2NlbGwhLnRleHRDb250ZW50ID0gdGhpcy4jaW5wdXQudGV4dENvbnRlbnQhO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmKCB0aGlzLiNjdXJfY2VsbCA9PT0gbnVsbCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLiNjdXJfY2VsbCEudGV4dENvbnRlbnQgPSBmb3JtYXRSYXcodGhpcy4jY3VyX2NlbGwsIHRoaXMuI2lucHV0LnRleHRDb250ZW50ISApO1xuICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KCdpbnB1dCcsIHtkZXRhaWw6IHRydWV9KSApO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNvbklucHV0ID0gKGV2OiBFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIGlmKCBldi5kZXRhaWwgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy4jaW5wdXQudGV4dENvbnRlbnQgPSBmb3JtYXRSYXcoIHRoaXMuI2N1cl9jZWxsISwgdGhpcy4jY3VyX2NlbGwhLnRleHRDb250ZW50ISApO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN5bmNUbyhzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcbiAgICAgICAgY29uc3QgY3Vyc29yID0gdGhpcy4jc2hlZXQuY3Vyc29yO1xuXG4gICAgICAgIHNoZWV0Lmhvc3QuYWRkRXZlbnRMaXN0ZW5lcigndXBkYXRlJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdGhpcy4jaW5wdXQudGV4dENvbnRlbnQgPSBmb3JtYXRSYXcoY3Vyc29yLmZpcnN0Q2VsbCApO1xuICAgICAgICB9KVxuXG4gICAgICAgIGN1cnNvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gY3Vyc29yLmNlbGxzO1xuXG4gICAgICAgICAgICB0aGlzLiNpbnB1dC50b2dnbGVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICEgc2hlZXQuaXNSTyApO1xuXG4gICAgICAgICAgICBpZiggY2VsbHMubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggdGhpcy4jY3VyX2NlbGwgIT09IG51bGwgKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNjdXJfY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuI29uSW5wdXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsID0gY2VsbHNbMF07XG4gICAgICAgICAgICB0aGlzLiNjdXJfY2VsbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuI29uSW5wdXQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCA9IGZvcm1hdFJhdyggdGhpcy4jY3VyX2NlbGwgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbkxJU1MuZGVmaW5lKCdjYWxjLWZvcm11bGEnLCBDYWxjRm9ybXVsYSk7IiwiaW1wb3J0IHsgZGF0ZTJGbG9hdCwgRm9ybWF0cyB9IGZyb20gXCIuL2Zvcm1hdFwiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0LCBWYWx1ZVR5cGUgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5leHBvcnQgY2xhc3MgRm9ybXVsYSB7XG5cbiAgICAjc3RyOiBzdHJpbmc7XG4gICAgI2V4ZWM6IChzaGVldDogQ2FsY1NoZWV0KSA9PiBWYWx1ZVR5cGU7XG4gICAgI3JhbmdlczogVG9rZW5bXTtcblxuICAgICNjYWNoZTogVmFsdWVUeXBlfG51bGwgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3Ioc3RyOiBzdHJpbmcsIGV4ZWM6IChzaGVldDogQ2FsY1NoZWV0KSA9PiBWYWx1ZVR5cGUsIHJhbmdlc190b2tlbjogVG9rZW5bXSA9IFtdKSB7XG5cbiAgICAgICAgdGhpcy4jc3RyID0gc3RyO1xuICAgICAgICB0aGlzLiNleGVjID0gZXhlYztcbiAgICAgICAgdGhpcy4jcmFuZ2VzID0gcmFuZ2VzX3Rva2VuO1xuICAgIH1cbiAgICBcbiAgICByZWxhdGl2ZVRvKCBzaGVldDogQ2FsY1NoZWV0LCBkcm93OiBudW1iZXIsIGRjb2w6IG51bWJlcikge1xuICAgICAgICBcbiAgICAgICAgbGV0IG5ld19yYW5nZXMgPSB0aGlzLiNyYW5nZXMubWFwKHIgPT4ge1xuXG4gICAgICAgICAgICAvL1RPRE86IGlmIHJhbmdlLi4uXG4gICAgICAgICAgICBsZXQgcG9zID0gWy4uLnNoZWV0LmNlbGxQb3MoIHNoZWV0LmdldENlbGxzKHIudmFsdWUpLmNlbGxzWzBdICldO1xuICAgIFxuICAgICAgICAgICAgaWYoIHIudmFsdWUubGFzdEluZGV4T2YoJyQnKSA8PSAwIClcbiAgICAgICAgICAgICAgICBwb3NbMF0gKz0gZHJvdztcbiAgICAgICAgICAgIGlmKCByLnZhbHVlWzBdICE9PSAnJCcgKVxuICAgICAgICAgICAgICAgIHBvc1sxXSArPSBkY29sO1xuXG4gICAgICAgICAgICByZXR1cm4gYCR7U3RyaW5nLmZyb21DaGFyQ29kZSg2NStwb3NbMV0tMSl9JHtwb3NbMF19YDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG5ld19mb3JtdWxhID0gXCJcIjtcblxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuI3Jhbmdlcy5sZW5ndGg7ICsraSkge1xuXG4gICAgICAgICAgICBuZXdfZm9ybXVsYSArPSB0aGlzLiNzdHIuc2xpY2Uob2Zmc2V0LCB0aGlzLiNyYW5nZXNbaV0uYmVnKTtcbiAgICAgICAgICAgIG5ld19mb3JtdWxhICs9IG5ld19yYW5nZXNbaV07XG5cbiAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuI3Jhbmdlc1tpXS5lbmQ7XG4gICAgICAgIH1cbiAgICAgICAgbmV3X2Zvcm11bGEgKz0gdGhpcy4jc3RyLnNsaWNlKG9mZnNldCk7XG4gICAgICAgIFxuICAgICAgICAvL2NhbiBiZSBvcHRpbWl6ZWQuLi5cbiAgICAgICAgcmV0dXJuIHBhcnNlX2Zvcm11bGEoIG5ld19mb3JtdWxhICk7XG4gICAgfVxuXG4gICAgZ2V0IHJhbmdlc1Rva2VuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcmFuZ2VzO1xuICAgIH1cblxuICAgIHJlc2V0Q2FjaGUoKSB7XG4gICAgICAgIHRoaXMuI2NhY2hlID0gbnVsbDtcbiAgICB9XG5cbiAgICBjYWNoZWRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NhY2hlITtcbiAgICB9XG5cbiAgICBleGVjKHNoZWV0OiBDYWxjU2hlZXQpIHtcblxuICAgICAgICBpZiggdGhpcy4jY2FjaGUgIT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4jY2FjaGU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuI2NhY2hlID0gdGhpcy4jZXhlYyhzaGVldCk7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzdHI7XG4gICAgfVxufVxuXG50eXBlIFRva2VuID0ge1xuICAgIGJlZzogbnVtYmVyLFxuICAgIGVuZDogbnVtYmVyLFxuICAgIHZhbHVlOiBzdHJpbmcsXG4gICAgdHlwZTogXCJzdHJpbmdcInxcIm51bWJlclwifFwiY2FsbFwifFwicmFuZ2VcInxcIm9wXCJcbn1cblxuXG5mdW5jdGlvbiBleHRyYWN0VG9rZW4oc3RyOiBzdHJpbmcsIG9mZnNldDogbnVtYmVyKSB7XG5cbiAgICB3aGlsZSggWycgJywgJ1xcbicsICdcXHQnXS5pbmNsdWRlcyhzdHJbb2Zmc2V0XSkgKSAvLyBpZ25vcmUgd2hpdGVzcGFjZXNcbiAgICAgICAgKytvZmZzZXQ7XG5cbiAgICBsZXQgdG9rZW46IFBhcnRpYWw8VG9rZW4+ID0ge1xuICAgICAgICBiZWc6IG9mZnNldFxuICAgIH07XG5cbiAgICBpZihzdHJbb2Zmc2V0XSA9PT0gJ1wiJykge1xuICAgICAgICB0b2tlbi50eXBlID0gXCJzdHJpbmdcIjtcbiAgICAgICAgd2hpbGUoIHN0clsrK29mZnNldF0gIT09ICdcIicgJiYgc3RyW29mZnNldC0xXSAhPT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICBpZihvZmZzZXQrMSA+PSBzdHIubGVuZ3RoIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Zvcm11bGEgcGFyc2luZyBlcnJvcicpO1xuICAgICAgICB9XG4gICAgICAgICsrb2Zmc2V0O1xuICAgIH0gZWxzZSBpZiggc3RyW29mZnNldF0gPT09ICcsJyB8fCAoc3RyW29mZnNldF0gPj0gJzAnICYmIHN0cltvZmZzZXRdIDw9ICc5JykgKSB7XG4gICAgICAgIHRva2VuLnR5cGUgPSBcIm51bWJlclwiO1xuICAgICAgICBsZXQgaGFzQ29tbWEgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUoIHN0cltvZmZzZXRdID09PSAnLCcgfHwgc3RyW29mZnNldF0gPj0gJzAnICYmIHN0cltvZmZzZXRdIDw9ICc5JyApIHtcblxuICAgICAgICAgICAgaWYoIHN0cltvZmZzZXRdID09PSAnLCcgKSB7XG4gICAgICAgICAgICAgICAgaWYoaGFzQ29tbWEgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRm9ybXVsYSBwYXJzaW5nIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgaGFzQ29tbWEgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICArK29mZnNldDtcbiAgICAgICAgfVxuXG4gICAgfSBlbHNlIGlmKCBzdHJbb2Zmc2V0XSA9PT0gJyQnIHx8IHN0cltvZmZzZXRdID49ICdBJyAmJiBzdHJbb2Zmc2V0XSA8PSAnWicpIHsgLy8rJFxuICAgICAgICBcbiAgICAgICAgd2hpbGUoIG9mZnNldCA8IHN0ci5sZW5ndGhcbiAgICAgICAgICAgICAgICAmJiAoc3RyW29mZnNldF0gPT09ICckJyB8fCBzdHJbb2Zmc2V0XSA+PSAnQScgJiYgc3RyW29mZnNldF0gPD0gJ1onXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgc3RyW29mZnNldF0gPj0gJzAnICYmIHN0cltvZmZzZXRdIDw9ICc5J1xuICAgICAgICAgICAgICAgICAgICApIClcbiAgICAgICAgICAgICsrb2Zmc2V0O1xuXG4gICAgICAgIHRva2VuLnR5cGUgPSBzdHJbb2Zmc2V0XSA9PT0gJygnID8gJ2NhbGwnIDogJ3JhbmdlJztcblxuICAgICAgICBpZiggc3RyW29mZnNldF0gPT09ICcoJyApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdG9rZW4udHlwZSA9IFwib3BcIjsgLy8gb25seSBvbiBjaGFyID8/P1xuXG4gICAgICAgIGlmKCBzdHJbb2Zmc2V0ICsgMV0gPT09ICc9JykgLy8gPj0gLyA8PVxuICAgICAgICAgICAgKytvZmZzZXQ7XG4gICAgICAgIGVsc2UgaWYoIHN0cltvZmZzZXQgKyAxXSA9PT0gJz4nKSAvLyA8PlxuICAgICAgICAgICAgKytvZmZzZXQ7XG5cbiAgICAgICAgKytvZmZzZXQ7XG4gICAgfVxuXG4gICAgdG9rZW4uZW5kID0gb2Zmc2V0O1xuICAgIHRva2VuLnZhbHVlID0gc3RyLnNsaWNlKHRva2VuLmJlZywgdG9rZW4uZW5kKTtcblxuICAgIHJldHVybiB0b2tlbiBhcyBSZXF1aXJlZDxUb2tlbj47XG59XG5cbmNsYXNzIE5vZGUge1xuXG4gICAgY2hpbGRyZW46IE5vZGVbXTtcbiAgICAjZmN0OiAoc2hlZXQ6IENhbGNTaGVldCwgLi4uYXJnczooVmFsdWVUeXBlKVtdKSA9PiBWYWx1ZVR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihmY3Q6IChzaGVldDogQ2FsY1NoZWV0LCAuLi5hcmdzOihWYWx1ZVR5cGUpW10pID0+IFZhbHVlVHlwZSwgLi4uY2hpbGRyZW46IE5vZGVbXSkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgIGlmKGNoaWxkcmVuID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXVEZcIik7XG4gICAgICAgIHRoaXMuI2ZjdCA9IGZjdDtcbiAgICB9XG5cbiAgICBldmFsKHNoZWV0OiBDYWxjU2hlZXQpOiBWYWx1ZVR5cGUge1xuICAgICAgICBjb25zdCBhcmdzID0gdGhpcy5jaGlsZHJlbi5tYXAoIGMgPT4gYy5ldmFsKHNoZWV0KSApO1xuICAgICAgICByZXR1cm4gdGhpcy4jZmN0KHNoZWV0LCAuLi5hcmdzICk7XG4gICAgfVxuICAgIFxufVxuXG5mdW5jdGlvbiB0b051bWJlcihhOiB1bmtub3duKTogbnVtYmVyIHtcblxuICAgIGlmKGEgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIDA7XG5cbiAgICBpZiggdHlwZW9mIGEgPT09IFwic3RyaW5nXCIpXG4gICAgICAgIHJldHVybiBOdW1iZXIoYSk7XG5cbiAgICBpZiggYSBpbnN0YW5jZW9mIERhdGUpXG4gICAgICAgIHJldHVybiBkYXRlMkZsb2F0KGEpO1xuXG4gICAgcmV0dXJuIGEgYXMgdW5rbm93biBhcyBudW1iZXI7XG59XG5cbmNvbnN0IG9wX2ltcGwgPSB7XG4gICAgJyUnOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duKSA9PiB0b051bWJlcihhKS8xMDAsXG4gICAgJ3UuKyc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24pID0+ICt0b051bWJlcihhKSxcbiAgICAndS4tJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93bikgPT4gLXRvTnVtYmVyKGEpLFxuICAgICcqJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93biwgYjogdW5rbm93bikgPT4gdG9OdW1iZXIoYSkqdG9OdW1iZXIoYiksXG4gICAgJy8nOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiB0b051bWJlcihhKS90b051bWJlcihiKSxcbiAgICAnKyc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24sIGI6IHVua25vd24pID0+IHRvTnVtYmVyKGEpK3RvTnVtYmVyKGIpLFxuICAgICctJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93biwgYjogdW5rbm93bikgPT4gdG9OdW1iZXIoYSktdG9OdW1iZXIoYiksXG4gICAgJ14nOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiBNYXRoLnBvdyh0b051bWJlcihhKSx0b051bWJlcihiKSApLFxuICAgICcmJzogKF86IENhbGNTaGVldCwgYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+IGAke0Zvcm1hdHMuZGVmYXVsdC5jYWxsKG51bGwsIGEpfSR7Rm9ybWF0cy5kZWZhdWx0LmNhbGwobnVsbCwgYil9YCxcbiAgICAnPSc6ICAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSA9PT0gYixcbiAgICAnPD4nOiAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSAhPT0gYixcbiAgICAnPic6ICAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSA+IGIsXG4gICAgJz49JzogKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPj0gYixcbiAgICAnPCc6ICAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSA8IGIsXG4gICAgJzw9JzogKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPD0gYixcbn0gYXMgUmVjb3JkPHN0cmluZywgKF86IENhbGNTaGVldCwgLi4uYXJnczpWYWx1ZVR5cGVbXSkgPT4gVmFsdWVUeXBlPjtcblxuLy8gaHR0cHM6Ly9oZWxwLmxpYnJlb2ZmaWNlLm9yZy9sYXRlc3QvZW4tVVMvdGV4dC9zY2FsYy8wMS8wNDA2MDE5OS5odG1sXG5jb25zdCBvcF9wcmlvID0gW1xuICAgIFsnOiddLCAvLyByYW5nZVxuICAgIFsnISddLCAvLyByYW5nZSBpbnRlcnNlY3Rpb25cbiAgICBbJ34nXSwgLy8gcmFuZ2UgdW5pb25cbiAgICBbJ3UuKycsICd1Li0nXSwgLy8gdW5hcnkgLSBmcm9tIHJpZ2h0IHRvIGxlZnQuLi5cbiAgICBbJyUnXSwgLy8gcG9zdGZpeCwgLzEwMFxuICAgIFsnXiddLCAvLyBwb3dlclxuICAgIFsnKicsICcvJ10sXG4gICAgWycrJywgJy0nXSxcbiAgICBbJyYnXSwgLy8gc3RyaW5nIGNvbmNhdFxuICAgIFsnPScsICc8PicsICc8JywgJzw9JywgJz4nLCAnPj0nXSAvLyBjb21wYXJlXG5dO1xuXG5sZXQgb3BzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge307XG5mb3IobGV0IGkgPSAwOyBpIDwgb3BfcHJpby5sZW5ndGg7ICsraSlcbiAgICBmb3IobGV0IG9wIG9mIG9wX3ByaW9baV0gKVxuICAgICAgICBvcHNbb3BdID0gaTtcblxuZnVuY3Rpb24gdG9rZW5saXN0MlRyZWUodG9rZW5zOiBUb2tlbltdKTogTm9kZSB7XG5cbiAgICBpZiggdG9rZW5zLmxlbmd0aCA9PT0gMSkge1xuXG4gICAgICAgIGlmKCB0b2tlbnNbMF0udHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgY29uc3QgbmIgPSArdG9rZW5zWzBdLnZhbHVlLnJlcGxhY2UoJywnLCAnLicpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBOb2RlKCAoKSA9PiBuYik7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHRva2Vuc1swXS50eXBlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBjb25zdCBzdHIgPSB0b2tlbnNbMF0udmFsdWUuc2xpY2UoMSwtMSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vZGUoICgpID0+IHN0cik7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHRva2Vuc1swXS50eXBlID09PSBcInJhbmdlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTm9kZSggKHNoZWV0OiBDYWxjU2hlZXQpID0+IHtcblxuICAgICAgICAgICAgICAgIGxldCByYXcgPSBzaGVldC5nZXRDZWxscyh0b2tlbnNbMF0udmFsdWUpLmNlbGxzWzBdLnJhd0NvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgICBpZiggcmF3IGluc3RhbmNlb2YgRm9ybXVsYSlcbiAgICAgICAgICAgICAgICAgICAgcmF3ID0gcmF3LmV4ZWMoc2hlZXQpOyAvLyBUT0RPOiBjYWNoZSByZXN1bHRcblxuICAgICAgICAgICAgICAgIHJldHVybiByYXcgYXMgVmFsdWVUeXBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiPz8/XCIpO1xuICAgIH1cblxuICAgIGlmKHRva2Vuc1swXS52YWx1ZSA9PT0gJygnICYmIHRva2Vuc1t0b2tlbnMubGVuZ3RoLTFdLnZhbHVlID09PSAnKScpXG4gICAgICAgIHJldHVybiB0b2tlbmxpc3QyVHJlZSh0b2tlbnMuc2xpY2UoMSwtMSkgKTtcblxuICAgIGxldCBjdXIgPSB7XG4gICAgICAgIHByaW9yaXR5OiBvcF9wcmlvLmxlbmd0aCxcbiAgICAgICAgaWR4ICAgICA6IC0xXG4gICAgfTtcblxuICAgIGZvcihsZXQgaSA9IHRva2Vucy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICBpZiggdG9rZW5zW2ldLnR5cGUgIT09IFwib3BcIiApIC8vIGNhbGwgbm90IGhhbmRsZWQgeWV0Li4uXG4gICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICBpZiggdG9rZW5zW2ldLnZhbHVlID09PSAnKScgKSB7IC8vIGdvIHRvIGZpcnN0ICcoJ1xuICAgICAgICAgICAgaSA9IHRva2Vucy5maW5kSW5kZXgoIHQgPT4gdC50eXBlID09PSAnb3AnICYmIHQudmFsdWUgPT09ICcoJyk7XG5cbiAgICAgICAgICAgIGlmKCBpID09PSAwKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLS1pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXNzZXJ0cyBpZiB1bmFyeSBvcC5cbiAgICAgICAgaWYoIHRva2Vuc1tpXS52YWx1ZSA9PT0gJy0nIHx8IHRva2Vuc1tpXS52YWx1ZSA9PT0gJysnICkge1xuXG4gICAgICAgICAgICBpZiggaSA9PT0gMCB8fCB0b2tlbnNbaS0xXS50eXBlID09PSBcIm9wXCIgKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB1X29wID0gYHUuJHt0b2tlbnNbaV0udmFsdWV9YDtcbiAgICAgICAgICAgICAgICB0b2tlbnNbaV0udmFsdWUgPSB1X29wO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gb3BzW3Vfb3BdO1xuXG4gICAgICAgICAgICAgICAgLy8gcHJpb3JpdHkgaXMgcmV2ZXJzZWQgKyBldmFsdWF0ZWQgZnJvbSByaWdodCB0byBsZWZ0LlxuICAgICAgICAgICAgICAgIGlmKCBwcmlvcml0eSA8PSBjdXIucHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VyLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgICAgIGN1ci5pZHggICAgICA9IGk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IG9wc1t0b2tlbnNbaV0udmFsdWVdO1xuXG4gICAgICAgIC8vIHByaW9yaXR5IGlzIHJldmVyc2VkLlxuICAgICAgICBpZiggcHJpb3JpdHkgPCBjdXIucHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGN1ci5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICAgICAgY3VyLmlkeCAgICAgID0gaTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKCBjdXIuaWR4ID09PSAtMSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCc/Pz8nKTtcblxuICAgIGxldCBvcF90b2tlbiA9IHRva2Vuc1tjdXIuaWR4XTtcbiAgICBpZiggb3BfdG9rZW4udmFsdWUgPT09ICclJyApIHtcbiAgICAgICAgY29uc3QgbGVmdCAgPSB0b2tlbnMuc2xpY2UoMCwgY3VyLmlkeCk7XG4gICAgICAgIGNvbnN0IG9wID0gb3BfaW1wbFtvcF90b2tlbi52YWx1ZSBhcyBrZXlvZiB0eXBlb2Ygb3BfaW1wbF07XG4gICAgICAgIHJldHVybiBuZXcgTm9kZShcbiAgICAgICAgICAgIG9wLFxuICAgICAgICAgICAgdG9rZW5saXN0MlRyZWUobGVmdClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiggb3BfdG9rZW4udmFsdWUgPT09ICd1Li0nIHx8ICBvcF90b2tlbi52YWx1ZSA9PT0gJ3UuKycgKSB7XG5cbiAgICAgICAgY29uc3QgcmlnaHQgID0gdG9rZW5zLnNsaWNlKGN1ci5pZHgrMSk7XG4gICAgICAgIGNvbnN0IG9wID0gb3BfaW1wbFtvcF90b2tlbi52YWx1ZSBhcyBrZXlvZiB0eXBlb2Ygb3BfaW1wbF07XG4gICAgICAgIHJldHVybiBuZXcgTm9kZShcbiAgICAgICAgICAgIG9wLFxuICAgICAgICAgICAgdG9rZW5saXN0MlRyZWUocmlnaHQpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgbGVmdCAgPSB0b2tlbnMuc2xpY2UoMCwgY3VyLmlkeCk7XG4gICAgY29uc3QgcmlnaHQgPSB0b2tlbnMuc2xpY2UoY3VyLmlkeCsxKTtcblxuICAgIGNvbnN0IG9wID0gb3BfaW1wbFtvcF90b2tlbi52YWx1ZSBhcyBrZXlvZiB0eXBlb2Ygb3BfaW1wbF07XG5cbiAgICByZXR1cm4gbmV3IE5vZGUoXG4gICAgICAgIG9wLFxuICAgICAgICB0b2tlbmxpc3QyVHJlZShsZWZ0KSxcbiAgICAgICAgdG9rZW5saXN0MlRyZWUocmlnaHQpXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlX2Zvcm11bGEoc3RyOnN0cmluZykge1xuXG4gICAgbGV0IG9mZnNldCA9IDE7XG4gICAgbGV0IHRva2VucyA9IG5ldyBBcnJheTxUb2tlbj4oKTtcblxuICAgIHdoaWxlKCBvZmZzZXQgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIGxldCBjdXJUb2tlbiA9IGV4dHJhY3RUb2tlbihzdHIsIG9mZnNldCk7XG4gICAgICAgIHRva2Vucy5wdXNoKCBjdXJUb2tlbiApO1xuICAgICAgICBvZmZzZXQgPSBjdXJUb2tlbi5lbmQ7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IHRva2VubGlzdDJUcmVlKHRva2VucykhO1xuXG4gICAgY29uc3QgcmFuZ2VzID0gdG9rZW5zLmZpbHRlcih0ID0+IHQudHlwZSA9PT0gXCJyYW5nZVwiICk7XG5cbiAgICByZXR1cm4gbmV3IEZvcm11bGEoc3RyLCAoc2hlZXQ6IENhbGNTaGVldCkgPT4gbm9kZS5ldmFsKHNoZWV0KSwgcmFuZ2VzICk7XG59IiwiLy9UT0RPOiB3ZWJwYWNrIGNvbmZpZy4uLlxuaW1wb3J0IExJU1MgZnJvbSBcIi4uLy4uLy4uL2xpYnMvTElTU1wiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0LCBDZWxsTGlzdCwgZGVmYXVsdEZvcm1hdCB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbi8vVE9ETzogc3ludGF4IGhpZ2hsaWdodCA7KVxuXG5jb25zdCBjc3MgPSBgXG4gICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYgcHJlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKCAxcmVtICsgOHB4ICsgMnB4ICk7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xpYmVyYXRpb24gU2Fucyc7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5leHBvcnQgY2xhc3MgUGxhZ2VGb3JtdWxhIGV4dGVuZHMgTElTUyh7XG4gICAgY3NzXG59KSB7XG5cbiAgICAjaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoIHRoaXMuI2lucHV0ICk7XG4gICAgICAgIHRoaXMuI2lucHV0LnRvZ2dsZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJyk7XG5cbiAgICAgICAgdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldikgPT4ge1xuICAgICAgICAgICAgaWYoZXYuY29kZSAhPT0gJ0VudGVyJylcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGV2LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLiNzaGVldC5nZXRDZWxscyh0aGlzLiNpbnB1dC50ZXh0Q29udGVudCEpLmNlbGxzO1xuXG4gICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5hZGQoIC4uLnNlbGVjdGVkICk7XG5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LmN1cnNvci5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy4jc2hlZXQuY3Vyc29yLmFkZCggc2VsZWN0ZWRbMF0gKTtcblxuICAgICAgICAgICAgdGhpcy4jaW5wdXQuYmx1cigpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vVE9ETy4uLi5cbiAgICAgICAgdGhpcy4jaW5wdXQudG9nZ2xlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAvKnRoaXMuI2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcblxuICAgICAgICB9KTsqL1xuICAgIH1cblxuICAgICNzaGVldCE6IENhbGNTaGVldDtcblxuICAgIHN5bmNUbyhzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcblxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBzaGVldC5zZWxlY3Rpb247XG5cbiAgICAgICAgc2VsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChfOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gc2VsZWN0aW9uLnBsYWdlX25hbWUgPz8gXCJcIjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5MSVNTLmRlZmluZSgnY2FsYy1wbGFnZScsIFBsYWdlRm9ybXVsYSk7IiwiaW1wb3J0IHsgQ2FsY1NoZWV0LCBDZWxsIH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuZXhwb3J0IGNsYXNzIFBsYWdlU2VsZWN0b3Ige1xuXG4gICAgI3VwZGF0ZVNlbGVjdGlvbigpIHtcblxuICAgICAgICBsZXQgc2VsZWN0ZWRfY2VsbHMgPSB0aGlzLiNzaGVldC5nZXRSYW5nZSggdGhpcy4jb3JpZ19wb3MsIHRoaXMuI2ZpbmFsX3BvcyApLmNlbGxzO1xuXG4gICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5jbGVhcigpOyAvLyB3ZSBhZGQgaXQuLi5cblxuICAgICAgICBpZiggdGhpcy4jaXNDdHJsICkge1xuXG4gICAgICAgICAgICAvLyByZXN0b3JlIGluaXRpYWwgc3RhdGUuLi5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5hZGQoLi4udGhpcy4jcHJldl9zZWxlY3Rpb24pO1xuXG4gICAgICAgICAgICAvL1RPRE8gb25seSBvcmlnX3RhcmdldC4uLlxuICAgICAgICAgICAgaWYodGhpcy4jc2hlZXQuc2VsZWN0aW9uLmhhcyggLi4uc2VsZWN0ZWRfY2VsbHMgKSApXG4gICAgICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLnJlbW92ZSggLi4uc2VsZWN0ZWRfY2VsbHMgKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uYWRkKCAuLi5zZWxlY3RlZF9jZWxscyApO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uYWRkKCAuLi5zZWxlY3RlZF9jZWxscyApO1xuICAgIH1cblxuICAgICNpc0N0cmwgICAgICAgICE6IGJvb2xlYW47XG4gICAgI3NoZWV0ICAgICAgICAgIDogQ2FsY1NoZWV0O1xuICAgICNvcmlnX3RhcmdldCAgICE6IEhUTUxFbGVtZW50O1xuICAgICNvcmlnX3BvcyAgICAgICE6IFtudW1iZXIsIG51bWJlcl07XG4gICAgI2ZpbmFsX3BvcyAgICAgITogW251bWJlciwgbnVtYmVyXTtcbiAgICAjcHJldl9zZWxlY3Rpb24hOiBDZWxsW107XG5cbiAgICAjZXYycG9zKGV2OiBNb3VzZUV2ZW50KTogW251bWJlcixudW1iZXJdIHtcblxuICAgICAgICBjb25zdCBjb2xzID0gWy4uLnRoaXMuI3NoZWV0LnRib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuXTtcbiAgICAgICAgbGV0IGNvbF9pZDtcbiAgICAgICAgZm9yKGNvbF9pZCA9IGNvbHMubGVuZ3RoLTE7IGNvbF9pZCA+PSAwOyAtLWNvbF9pZCkge1xuICAgICAgICAgICAgaWYoIGV2LmNsaWVudFggPj0gY29sc1tjb2xfaWRdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnggKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCByb3dzID0gWy4uLnRoaXMuI3NoZWV0LnRib2R5LmNoaWxkcmVuXS5tYXAoIGUgPT4gZS5jaGlsZHJlblswXSApO1xuICAgICAgICBsZXQgcm93X2lkO1xuICAgICAgICBmb3Iocm93X2lkID0gcm93cy5sZW5ndGgtMTsgcm93X2lkID49IDA7IC0tcm93X2lkKSB7XG4gICAgICAgICAgICBpZiggZXYuY2xpZW50WSA+PSByb3dzW3Jvd19pZF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSApXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW3Jvd19pZCwgY29sX2lkXTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcblxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpITtcblxuICAgICAgICBjb25zdCBvbl9tb3VzZV9tb3ZlID0gKGV2OiBNb3VzZUV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuI2ZpbmFsX3BvcyA9IHRoaXMuI2V2MnBvcyhldik7XG5cbiAgICAgICAgICAgIHRoaXMuI3VwZGF0ZVNlbGVjdGlvbigpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHNoZWV0LmN1cnNvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24ucmVwbGFjZUFsbCggc2hlZXQuZ2V0VmlzaWJsZUNlbGwoc2hlZXQuY3Vyc29yKSApO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHNoZWV0LmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXY6TW91c2VFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiggc2hlZXQuc3RhdGVzLmNlbGxfZWRpdC5zdGF0ZSA9PT0gdGFyZ2V0ICkgIC8vIGEgY2VsbCBiZWluZyBlZGl0ZWQuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaWYoICEgW1wiVEhcIiwgXCJURFwiXS5pbmNsdWRlcyggdGFyZ2V0LnRhZ05hbWUgKSApLy8gLi4uXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgPT09IFwiVEhcIiAmJiB0YXJnZXQudGV4dENvbnRlbnQgPT09IFwiXCIgKSB7IC8vIG1vdXNlbW92ZSBkb2VzIG5vdGhpbmcuXG5cbiAgICAgICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uY2xlYXIoKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZWYgPSBgQTE6JHt0aGlzLiNzaGVldC5wb3MycmVmKHRoaXMuI3NoZWV0Lm5iUm93cywgdGhpcy4jc2hlZXQubmJDb2xzKX1gO1xuICAgICAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5hZGQoIC4uLnRoaXMuI3NoZWV0LmdldENlbGxzKHJlZikuY2VsbHMgKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4jaXNDdHJsICAgICAgICAgPSBldi5jdHJsS2V5O1xuICAgICAgICAgICAgdGhpcy4jb3JpZ190YXJnZXQgICAgPSB0YXJnZXQ7XG4gICAgICAgICAgICB0aGlzLiNvcmlnX3BvcyAgICAgICA9IHRoaXMuI2V2MnBvcyhldik7IC8vIENhbiBiZSBUSC4uLlxuICAgICAgICAgICAgdGhpcy4jZmluYWxfcG9zICAgICAgPSB0aGlzLiNvcmlnX3BvcztcbiAgICAgICAgICAgIHRoaXMuI3ByZXZfc2VsZWN0aW9uID0gc2hlZXQuc2VsZWN0aW9uLmNlbGxzLnNsaWNlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuI3VwZGF0ZVNlbGVjdGlvbigpO1xuICAgICAgICAgICAgbWFpbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbl9tb3VzZV9tb3ZlKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBtYWluLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uX21vdXNlX21vdmUpO1xuICAgICAgICAgICAgfSwge29uY2U6IHRydWV9KTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG59IiwiLy9UT0RPOiB3ZWJwYWNrIGNvbmZpZy4uLlxuaW1wb3J0IExJU1MgZnJvbSBcIi4uLy4uLy4uL2xpYnMvTElTU1wiO1xuXG4vL0B0cy1pZ25vcmVcbmltcG9ydCBjc3MgZnJvbSBcIiEhcmF3LWxvYWRlciEuL2luZGV4LmNzc1wiO1xuXG5leHBvcnQgdHlwZSBWYWx1ZVR5cGUgPSBzdHJpbmd8bnVtYmVyfERhdGV8Ym9vbGVhbjtcbmV4cG9ydCB0eXBlIFJhd0NvbnRlbnRUeXBlID0gVmFsdWVUeXBlfEZvcm11bGE7XG5cbmV4cG9ydCB0eXBlIENlbGwgPSBIVE1MVGFibGVDZWxsRWxlbWVudCAmIHtcbiAgICByYXdDb250ZW50OiBSYXdDb250ZW50VHlwZSxcbiAgICBmb3JtYXQ6ICh0aGlzOiBDZWxsLCB2PzogbnVtYmVyfHN0cmluZ3xEYXRlKSA9PiBzdHJpbmcsXG4gICAgaXNfcm86IGJvb2xlYW4sXG4gICAgY2VsbCA/OiBDZWxsXG59O1xuXG5mdW5jdGlvbiBpc0FjdGl2ZSh0YXJnZXQ6IEhUTUxFbGVtZW50KSB7XG5cbiAgICByZXR1cm4gdGFyZ2V0Lm1hdGNoZXMoJzpmb2N1cycpO1xuLypcbiAgICBsZXQgYWN0aXZlID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgIHdoaWxlKCBhY3RpdmU/LnNoYWRvd1Jvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290IClcbiAgICAgICAgYWN0aXZlID0gYWN0aXZlLnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudDtcblxuICAgIHJldHVybiBhY3RpdmUgPT09IHRhcmdldDsqL1xufVxuXG5mdW5jdGlvbiBvbklucHV0KGV2OiBFdmVudCkge1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjEyMzQ3NDEvcGxhY2UtY2FyZXQtYmFjay13aGVyZS1pdC13YXMtYWZ0ZXItY2hhbmdpbmctaW5uZXJodG1sLW9mLWEtY29udGVudGVkaXRhYmxlLWVsZW1cblxuICAgIGxldCBycmFuZ2UgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkhLmdldFJhbmdlQXQoMCk7XG4gICAgbGV0IGMgPSBycmFuZ2Uuc3RhcnRPZmZzZXQ7XG5cbiAgICAvL2xldCB0ZXh0ID0gXCJcIjtcbiAgICBsZXQgbGVuZ3RoID0gMDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFyZ2V0LmNoaWxkTm9kZXMubGVuZ3RoOyArK2kpIHtcblxuICAgICAgICBsZXQgY2hpbGQgPSB0YXJnZXQuY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgaWYoIGNoaWxkLm5vZGVUeXBlICE9PSBOb2RlLlRFWFRfTk9ERSlcbiAgICAgICAgICAgIGNoaWxkID0gY2hpbGQuY2hpbGROb2Rlc1swXTtcblxuICAgICAgICBpZiggcnJhbmdlLnN0YXJ0Q29udGFpbmVyID09PSBjaGlsZCApIHtcbiAgICAgICAgICAgIC8vdGV4dCArPSBwLmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQhLnNsaWNlKDAsIGMpO1xuICAgICAgICAgICAgbGVuZ3RoICs9IGM7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvL3RleHQgKz0gcC5jaGlsZE5vZGVzW2ldLnRleHRDb250ZW50O1xuICAgICAgICBsZW5ndGggKz0gdGFyZ2V0LmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQhLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgaW5uZXJIVE1MXG4gICAgdGFyZ2V0LnRleHRDb250ZW50ID0gdGFyZ2V0LnRleHRDb250ZW50O1xuXG4gICAgbGV0IGNoaWxkITogQ2hpbGROb2RlO1xuICAgIGxldCBpO1xuICAgIGZvcihpID0gMDsgaSA8IHRhcmdldC5jaGlsZE5vZGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmKCBsZW5ndGggPD0gdGFyZ2V0LmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQhLmxlbmd0aCApIHtcbiAgICAgICAgICAgIGNoaWxkID0gdGFyZ2V0LmNoaWxkTm9kZXNbaV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBsZW5ndGggLT0gdGFyZ2V0LmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQhLmxlbmd0aDtcbiAgICB9XG5cbiAgICBpZiggY2hpbGQubm9kZVR5cGUgIT09IE5vZGUuVEVYVF9OT0RFKVxuICAgICAgICBjaGlsZCA9IGNoaWxkLmNoaWxkTm9kZXNbMF07XG5cbiAgICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkhO1xuXG4gICAgcmFuZ2Uuc2V0U3RhcnQoY2hpbGQsIGxlbmd0aCk7XG4gICAgcmFuZ2UuY29sbGFwc2UodHJ1ZSk7XG4gICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgIHNlbC5hZGRSYW5nZShyYW5nZSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSW5wdXQoIHN0cjogc3RyaW5nICk6IFJhd0NvbnRlbnRUeXBlIHtcblxuICAgIGlmKHN0ciA9PT0gJ1ZSQUknKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBpZihzdHIgPT09ICdGQVVYJylcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYoc3RyLnRyaW0oKSA9PT0gJycpXG4gICAgICAgIHJldHVybiBzdHI7XG5cbiAgICBpZihzdHJbMF0gPT09IFwiPVwiKSB7XG4gICAgICAgIHJldHVybiBwYXJzZV9mb3JtdWxhKHN0cik7XG4gICAgfVxuXG4gICAgbGV0IHRlc3RfbnVtYmVyID0gTnVtYmVyKCBzdHIucmVwbGFjZSgnLCcsICcuJykgKTtcbiAgICBpZiggISBOdW1iZXIuaXNOYU4oIHRlc3RfbnVtYmVyICkgKVxuICAgICAgICByZXR1cm4gdGVzdF9udW1iZXI7XG4gICAgaWYoIHN0cltzdHIubGVuZ3RoLTFdID09PSBcIiVcIikge1xuICAgICAgICB0ZXN0X251bWJlciA9IE51bWJlciggc3RyLnNsaWNlKDAsLTEpLnJlcGxhY2UoJywnLCAnLicpICk7XG4gICAgICAgIGlmKCAhIE51bWJlci5pc05hTiggdGVzdF9udW1iZXIgKSApXG4gICAgICAgICAgICByZXR1cm4gKyh0ZXN0X251bWJlciAvIDEwMCkudG9QcmVjaXNpb24oNyk7XG4gICAgfVxuXG4gICAgY29uc3QgcGFydHMgPSBzdHIuc3BsaXQoJy8nKTtcbiAgICBpZihwYXJ0cy5sZW5ndGggPD0gMykge1xuXG4gICAgICAgIGxldCB0ZXN0X2RhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgICtwYXJ0c1syXSA/PyBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICArcGFydHNbMV0tMSxcbiAgICAgICAgICAgICtwYXJ0c1swXVxuICAgICAgICApO1xuXG4gICAgICAgIGlmKCB0ZXN0X2RhdGUudG9TdHJpbmcoKSAhPT0gXCJJbnZhbGlkIERhdGVcIiApXG4gICAgICAgICAgICByZXR1cm4gdGVzdF9kYXRlO1xuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG59XG5cbmNsYXNzIFN0YXRlPFQ+IHtcblxuICAgICNzdGF0ZSA6IFR8bnVsbCA9IG51bGw7XG4gICAgI3RhcmdldDogRXZlbnRUYXJnZXQ7XG4gICAgI25hbWUgIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IodGFyZ2V0OiBFdmVudFRhcmdldCwgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuI3RhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy4jbmFtZSAgID0gbmFtZTtcbiAgICB9XG5cbiAgICBnZXQgc3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzdGF0ZTtcbiAgICB9XG5cbiAgICBzZXQgc3RhdGUoc3RhdGU6IFR8bnVsbCkge1xuXG4gICAgICAgIGlmKCB0aGlzLiNzdGF0ZSA9PT0gc3RhdGUpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgbGV0IHByZXZfc3RhdGUgPSB0aGlzLiNzdGF0ZTtcbiAgICAgICAgdGhpcy4jc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgXG5cbiAgICAgICAgaWYoIHByZXZfc3RhdGUgIT09IG51bGwpXG4gICAgICAgICAgICB0aGlzLiN0YXJnZXQuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KGAke3RoaXMuI25hbWV9X2VuZGAsIHtkZXRhaWw6IHByZXZfc3RhdGV9KSApOyAgICAgICAgICAgIFxuXG4gICAgICAgIGlmKCBzdGF0ZSAhPT0gbnVsbCApXG4gICAgICAgICAgICB0aGlzLiN0YXJnZXQuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KGAke3RoaXMuICNuYW1lfV9zdGFydGAsIHtkZXRhaWw6IHN0YXRlfSkgKTtcbiAgICB9XG59XG5cbmNvbnN0IFN0YXRlcyA9IHtcbiAgICBcImNlbGxfZWRpdFwiOiBTdGF0ZTxDZWxsPixcbiAgICBcInJlY29weVwiICAgOiBTdGF0ZTxDZWxsTGlzdD5cbiB9IGFzIGNvbnN0O1xuXG5leHBvcnQgY2xhc3MgQ2FsY1NoZWV0IGV4dGVuZHMgTElTUyh7XG4gICAgY3NzLFxuICAgIGF0dHJpYnV0ZXM6IFtcImNvbHNcIiwgXCJyb3dzXCIsIFwicm9cIl1cbn0pIHtcblxuICAgIHN0YXRlcyA9IE9iamVjdC5mcm9tRW50cmllcyggT2JqZWN0LmVudHJpZXMoU3RhdGVzKS5tYXAoIChbbixzXSkgPT4gW24sIG5ldyBzKHRoaXMuaG9zdCwgbildIGFzIGNvbnN0ICkpO1xuXG5cbiAgICAvL1RPRE86IFJPIHByb3AgP1xuICAgICNjdXJzb3IgICAgPSBuZXcgQ2VsbExpc3QodGhpcywgW10pO1xuICAgICNzZWxlY3Rpb246IENlbGxMaXN0ID0gbmV3IENlbGxMaXN0KHRoaXMsIFtdKTtcbiAgICAjcGxhZ2Vfc2VsZWN0b3IgPSBuZXcgUGxhZ2VTZWxlY3Rvcih0aGlzKTtcblxuICAgICNmb3JtYXRfbW5nciA9IG5ldyBGb3JtYXRNYW5hZ2VyKHRoaXMpO1xuXG4gICAgc3RhdGljIGdldFNoZWV0RnJvbUNlbGwoY2VsbDogQ2VsbCkge1xuICAgICAgICByZXR1cm4gTElTUy5nZXRMSVNTU3luYzxDYWxjU2hlZXQ+KCAoY2VsbC5nZXRSb290Tm9kZSgpIGFzIFNoYWRvd1Jvb3QpLmhvc3QgKTtcbiAgICB9XG5cbiAgICBnZXQgY3Vyc29yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY3Vyc29yO1xuICAgIH1cbiAgICBnZXQgc2VsZWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jc2VsZWN0aW9uO1xuICAgIH1cblxuICAgIG92ZXJyaWRlIGdldCBjb250ZW50KCkge1xuICAgICAgICByZXR1cm4gc3VwZXIuY29udGVudDtcbiAgICB9XG5cbiAgICBzZXRSZWN0KHRhcmdldDogSFRNTEVsZW1lbnQsIFt4LHksdyxoXTogcmVhZG9ubHkgW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0pIHtcblxuICAgICAgICBjb25zdCB0Ymxfb2Zmc2V0ID0gdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJykhLm9mZnNldFRvcDtcblxuICAgICAgICB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcgICAsIGAke3RibF9vZmZzZXQgKyB5fXB4YCk7XG4gICAgICAgIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eSgnaGVpZ2h0JywgYCR7aH1weGApO1xuXG4gICAgICAgIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eSgnbGVmdCcgICAsIGAke3h9cHhgKTtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KCd3aWR0aCcsIGAke3d9cHhgKTtcblxuICAgIH1cblxuICAgIGdldFJlY3QoY2VsbHM6IENlbGxMaXN0fENlbGxbXSkge1xuXG4gICAgICAgIGNlbGxzID0gXCJjZWxsc1wiIGluIGNlbGxzID8gY2VsbHMuY2VsbHMgOiBjZWxscztcblxuICAgICAgICBjb25zdCBzdGFydCA9IGNlbGxzWzBdO1xuICAgICAgICBjb25zdCBlbmQgICA9IGNlbGxzW2NlbGxzLmxlbmd0aC0xXTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBzdGFydC5vZmZzZXRMZWZ0LFxuICAgICAgICAgICAgc3RhcnQub2Zmc2V0VG9wLFxuICAgICAgICAgICAgZW5kLm9mZnNldExlZnQgKyBlbmQuY2xpZW50V2lkdGggLSBzdGFydC5vZmZzZXRMZWZ0LFxuICAgICAgICAgICAgZW5kLm9mZnNldFRvcCArIGVuZC5jbGllbnRIZWlnaHQgLSBzdGFydC5vZmZzZXRUb3AgKyAxXG4gICAgICAgIF0gYXMgY29uc3Q7XG4gICAgfVxuXG4gICAgcmVsYXRpdmVUbyhjZWxsOiBDZWxsLCByb3dfZGlmZjogbnVtYmVyLCBjb2xfZGlmZjogbnVtYmVyKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgW3JvdywgY29sXSA9IHRoaXMuY2VsbFBvcyhjZWxsKTtcblxuICAgICAgICByb3cgKz0gcm93X2RpZmY7XG4gICAgICAgIGNvbCArPSBjb2xfZGlmZjtcblxuICAgICAgICAvLyBmb3Igbm9ybWFsIDogZ2V0IHN0dWNrIGluc2lkZSBncmlkLlxuICAgICAgICBpZiggcm93IDwgMSlcbiAgICAgICAgICAgIHJvdyA9IDE7XG4gICAgICAgIGlmKCByb3cgPj0gdGhpcy4jdGJvZHkuY2hpbGRyZW4ubGVuZ3RoIClcbiAgICAgICAgICAgIHJvdyA9IHRoaXMuI3Rib2R5LmNoaWxkcmVuLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgaWYoIGNvbCA8IDEpXG4gICAgICAgICAgICBjb2wgPSAxO1xuICAgICAgICBpZiggY29sID49IHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW4ubGVuZ3RoIClcbiAgICAgICAgICAgIGNvbCA9IHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW4ubGVuZ3RoIC0gMTtcblxuICAgICAgICByZXR1cm4gdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlbltjb2xdIGFzIENlbGw7XG4gICAgfVxuXG4gICAgLy9UT0RPOiAyRC4uLlxuICAgICNwYXN0ZWJpbjogQ2VsbExpc3QgfCBudWxsID0gbnVsbDtcblxuICAgICNmb3JtdWxhX3JlZnMgPSBuZXcgQXJyYXk8Rm9ybXVsYVJlZj4oKTtcbiAgICAjZ2V0Rm9ybXVsYVJlZihpOiBudW1iZXIpIHtcbiAgICAgICAgd2hpbGUoIGkgPj0gdGhpcy4jZm9ybXVsYV9yZWZzLmxlbmd0aClcbiAgICAgICAgICAgIHRoaXMuI2Zvcm11bGFfcmVmcy5wdXNoKCBuZXcgRm9ybXVsYVJlZih0aGlzKSApO1xuXG4gICAgICAgIHJldHVybiB0aGlzLiNmb3JtdWxhX3JlZnNbaV07XG4gICAgfVxuICAgICNjbGVhckZvcm11bGFSZWZzKCkge1xuICAgICAgICBmb3IobGV0IHJlZiBvZiB0aGlzLiNmb3JtdWxhX3JlZnMpXG4gICAgICAgICAgICByZWYuc2V0UmFuZ2UobnVsbCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgY29uc3QgY3Vyc29yID0gbmV3IFJhbmdlT3ZlcmxheSh0aGlzLCBcImN1cnNvclwiKTtcbiAgICAgICAgY29uc3QgcmVjb3B5ID0gbmV3IFJlY29weUhhbmRsZSh0aGlzKTtcbiAgICAgICAgY29uc3QgY29weSAgID0gbmV3IFJhbmdlT3ZlcmxheSh0aGlzLCBcImNvcHlfaGlnaGxpZ2h0XCIpO1xuXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKSE7XG5cbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ2NlbGxfZWRpdF9lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNjbGVhckZvcm11bGFSZWZzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBsYXN0X3JlY29weV90YXJnZXQ6IENlbGx8bnVsbCA9IG51bGw7XG4gICAgICAgIGxldCBsYXN0X3JlY29weV9kaXIgICA6IFtudW1iZXIsIG51bWJlcl18bnVsbCA9IG51bGxcblxuICAgICAgICBjb25zdCBvbl9yZWNvcHlfbW92ZSA9IChldjogTW91c2VFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICBsZXQgY2VsbHMgPSAodGhpcy5zdGF0ZXMucmVjb3B5LnN0YXRlIGFzIENlbGxMaXN0KS5jZWxscztcbiAgICAgICAgICAgIGNvbnN0IHNyYyA9IGNlbGxzW2NlbGxzLmxlbmd0aC0xXTtcblxuICAgICAgICAgICAgbGV0IHBvcyA9IHNyYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgICAgbGV0IGRfcHggPSBldi5jbGllbnRYIC0gKHBvcy54ICsgcG9zLndpZHRoIC8yKTtcbiAgICAgICAgICAgIGxldCBkX3B5ID0gZXYuY2xpZW50WSAtIChwb3MueSArIHBvcy5oZWlnaHQvMik7XG5cbiAgICAgICAgICAgIGxldCBkX3ggPSAwO1xuICAgICAgICAgICAgbGV0IGRfeSA9IE1hdGguc2lnbihkX3B5KTtcblxuICAgICAgICAgICAgaWYoIE1hdGguYWJzKGRfcHgpID4gTWF0aC5hYnMoZF9weSkgKSB7XG4gICAgICAgICAgICAgICAgZF94ID0gTWF0aC5zaWduKGRfcHgpO1xuICAgICAgICAgICAgICAgIGRfeSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBwcmV2ID0gc3JjO1xuICAgICAgICAgICAgbGV0IGN1ciAgPSBzcmM7XG5cbiAgICAgICAgICAgIGxldCBkaWZmX3gsIGRpZmZfeTtcblxuICAgICAgICAgICAgZG8ge1xuXG4gICAgICAgICAgICAgICAgcHJldj0gY3VyO1xuICAgICAgICAgICAgICAgIGN1ciA9IHRoaXMucmVsYXRpdmVUbyhwcmV2LCBkX3ksIGRfeCk7XG5cbiAgICAgICAgICAgICAgICBpZiggY3VyID09PSBwcmV2KVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGxldCBwb3NfY3VyID0gY3VyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIGRpZmZfeCA9IGV2LmNsaWVudFggLSAocG9zX2N1ci54ICsgcG9zX2N1ci53aWR0aCAvMik7XG4gICAgICAgICAgICAgICAgZGlmZl95ID0gZXYuY2xpZW50WSAtIChwb3NfY3VyLnkgKyBwb3NfY3VyLmhlaWdodC8yKTtcblxuICAgICAgICAgICAgfSB3aGlsZSggZGlmZl94ICogZF94ICsgZGlmZl95ICogZF95ID4gMCApO1xuXG4gICAgICAgICAgICBsYXN0X3JlY29weV90YXJnZXQgPSBwcmV2O1xuICAgICAgICAgICAgbGFzdF9yZWNvcHlfZGlyICAgID0gW2RfeCxkX3ldO1xuXG4gICAgICAgICAgICBsZXQgYmVnID0gc3JjO1xuICAgICAgICAgICAgbGV0IGVuZCA9IHByZXY7XG4gICAgICAgICAgICBpZiggc3JjLm9mZnNldExlZnQgPiBwcmV2Lm9mZnNldExlZnQgfHwgc3JjLm9mZnNldFRvcCA+IHByZXYub2Zmc2V0VG9wIClcbiAgICAgICAgICAgICAgICBbYmVnLCBlbmRdID0gW2VuZCwgYmVnXTtcblxuICAgICAgICAgICAgLy9UT0RPOiBoaWdobGlnaHQuLi5cbiAgICAgICAgICAgIHRoaXMuI2NsZWFyRm9ybXVsYVJlZnMoKTtcbiAgICAgICAgICAgIHRoaXMuI2dldEZvcm11bGFSZWYoMSkuc2V0UmFuZ2UoIHRoaXMuZ2V0UmFuZ2UoYmVnLCBlbmQpICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVjb3B5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2KSA9PiB7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXRlcy5yZWNvcHkuc3RhdGUgPSB0aGlzLiNzZWxlY3Rpb247XG5cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbl9yZWNvcHlfbW92ZSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgW2RfeCwgZF95XSA9ICBsYXN0X3JlY29weV9kaXIhO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxzID0gKHRoaXMuc3RhdGVzLnJlY29weS5zdGF0ZSBhcyBDZWxsTGlzdCkuY2VsbHM7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3JjID0gY2VsbHNbY2VsbHMubGVuZ3RoLTFdO1xuXG4gICAgICAgICAgICAgICAgbGV0IG5iID0gMDtcblxuICAgICAgICAgICAgICAgIGlmKCBsYXN0X3JlY29weV90YXJnZXQgIT09IHNyYykgeyAvLyBjb3B5Li4uXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1ciA9IHNyYztcbiAgICAgICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgKytuYjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY3VyID0gdGhpcy5yZWxhdGl2ZVRvKGN1ciwgZF95LCBkX3gpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29udGVudDogUmF3Q29udGVudFR5cGV8Q2VsbCA9IHNyYztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCB0eXBlb2YgY29udGVudC5yYXdDb250ZW50ID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSAoc3JjLnJhd0NvbnRlbnQgYXMgbnVtYmVyKSArIG5iKihkX3ggKyBkX3kpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiggY29udGVudC5yYXdDb250ZW50IGluc3RhbmNlb2YgRGF0ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gbmV3IERhdGUoc3JjLnJhd0NvbnRlbnQgYXMgRGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5zZXREYXRlKCBjb250ZW50LmdldERhdGUoKSArIG5iKihkX3ggKyBkX3kpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENlbGxMaXN0KHRoaXMsIFtjdXJdKS5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ci5jbGFzc05hbWUgPSBzcmMuY2xhc3NOYW1lOyAvL1RPRE86IGZvcm1hdC4uLlxuXG5cbiAgICAgICAgICAgICAgICAgICAgfSB3aGlsZSggY3VyIT09IGxhc3RfcmVjb3B5X3RhcmdldCApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuI2NsZWFyRm9ybXVsYVJlZnMoKTsgLy8gcmVjb3B5XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZXMucmVjb3B5LnN0YXRlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBsYXN0X3JlY29weV90YXJnZXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGxhc3RfcmVjb3B5X2RpciAgICA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgbWFpbi5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uX3JlY29weV9tb3ZlKTtcblxuICAgICAgICAgICAgfSwge29uY2U6IHRydWV9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3JlY29weV9zdGFydCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdyZWNvcHknKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdyZWNvcHlfZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5yZW1vdmUoJ3JlY29weScpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuI2N1cnNvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXYpID0+IHtcblxuICAgICAgICAgICAgaWYoIHRoaXMuI2N1cnNvci5sZW5ndGggIT09IDEgKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ3Vyc29yIGhhcyBpbnZhbGlkIG51bWJlciBvZiBjZWxscycpO1xuXG4gICAgICAgICAgICBjdXJzb3Iuc2V0UmFuZ2UoIG5ldyBDZWxsTGlzdCh0aGlzLCBbdGhpcy5nZXRWaXNpYmxlQ2VsbCh0aGlzLiNjdXJzb3IpXSkgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jc2VsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldikgPT4ge1xuXG4gICAgICAgICAgICBmb3IoIGxldCBjZWxsIG9mIHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGlnaGxpZ2h0JykgKVxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gdGhpcy4jc2VsZWN0aW9uLmNlbGxzO1xuXG4gICAgICAgICAgICBpZiggY2VsbHMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgZm9yKCBsZXQgY2VsbCBvZiBjZWxscyApIHtcblxuICAgICAgICAgICAgICAgIGlmKCBjZWxscy5sZW5ndGggIT09IDEpXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgW3JvdywgY29sXSA9IHRoaXMuI2NlbGxQb3MoY2VsbCk7XG4gICAgICAgICAgICAgICAgdGhpcy4jdGJvZHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bY29sXS5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVjb3B5LnNldFJhbmdlKHRoaXMuI3NlbGVjdGlvbik7XG5cbiAgICAgICAgICAgIC8vIG9ubHkgaWYgc2ltcGxlLi4uXG4gICAgICAgICAgICAvLyBjb25zdCBsYXN0ID0gY2VsbHNbY2VsbHMubGVuZ3RoLTFdO1xuICAgICAgICAgICAgLy8gcG9pbnRlci4uLlxuICAgICAgICB9KTtcblxuICAgICAgICAvL1RPRE86IG1vdmUgb3V0ID9cbiAgICAgICAgY29uc3QgZm9ybXVsYV9iYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybXVsYV9iYXIuY2xhc3NMaXN0LmFkZCgndG9vbGJhcicpO1xuXG4gICAgICAgICggYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBwbGFnZSA9IGF3YWl0IExJU1MuYnVpbGQoXCJjYWxjLXBsYWdlXCIpO1xuICAgICAgICAgICAgcGxhZ2Uuc3luY1RvKHRoaXMpO1xuICAgICAgICAgICAgZm9ybXVsYV9iYXIuYXBwZW5kKCBwbGFnZS5ob3N0ICk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZvcm11bGEgPSBhd2FpdCBMSVNTLmJ1aWxkKFwiY2FsYy1mb3JtdWxhXCIpO1xuICAgICAgICAgICAgZm9ybXVsYS5zeW5jVG8odGhpcyk7XG4gICAgICAgICAgICBmb3JtdWxhX2Jhci5hcHBlbmQoIGZvcm11bGEuaG9zdCApO1xuXG4gICAgICAgIH0pKCk7XG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoZm9ybXVsYV9iYXIpO1xuXG4gICAgICAgIHRoaXMuI2luaXRHcmlkKCsodGhpcy5hdHRycy5yb3dzID8/IDEpLCArKHRoaXMuYXR0cnMuY29scyA/PyAxKSApO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldikgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIC8vIHRoZSBjZWxsIGlzIGJlaW5nIGVkaXRlZC4uLlxuICAgICAgICAgICAgaWYoIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSA9PT0gXCJURFwiIClcbiAgICAgICAgICAgICAgICB0aGlzLiNjdXJzb3IucmVwbGFjZUFsbCggdGFyZ2V0IGFzIENlbGwgKTtcblxuICAgICAgICAgICAgLy9UT0RPOiBub3QgY29ycmVjdC4uLlxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lID09PSBcIlRIXCIgJiYgdGFyZ2V0LnRleHRDb250ZW50ICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2V0Q2VsbHModGFyZ2V0LnRleHRDb250ZW50ISkuY2VsbHNbMF07XG5cbiAgICAgICAgICAgICAgICB0aGlzLiNjdXJzb3IucmVwbGFjZUFsbChjZWxsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIChldikgPT4ge1xuXG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgIT09IFwiVERcIilcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGlmKCB0aGlzLmF0dHJzLnJvICE9PSBcInRydWVcIiAmJiAodGFyZ2V0IGFzIENlbGwpLmlzX3JvICE9PSB0cnVlICkge1xuICAgICAgICAgICAgICAgIHRhcmdldC50b2dnbGVBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXY6IEtleWJvYXJkRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgaWYoIGV2LmNvZGUuc3RhcnRzV2l0aCgnQXJyb3cnKSApIHtcblxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjdXIgPSB0aGlzLmN1cnNvci5jZWxscztcbiAgICAgICAgICAgICAgICBpZiggY3VyLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgbGV0IGRfcm93ID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgZF9jb2wgPSAwO1xuXG4gICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09ICdBcnJvd0xlZnQnKVxuICAgICAgICAgICAgICAgICAgICAtLWRfY29sO1xuICAgICAgICAgICAgICAgIGlmKCBldi5jb2RlID09PSAnQXJyb3dSaWdodCcpXG4gICAgICAgICAgICAgICAgICAgICsrZF9jb2w7XG4gICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09ICdBcnJvd1VwJylcbiAgICAgICAgICAgICAgICAgICAgLS1kX3JvdztcbiAgICAgICAgICAgICAgICBpZiggZXYuY29kZSA9PT0gJ0Fycm93RG93bicpXG4gICAgICAgICAgICAgICAgICAgICsrZF9yb3c7XG5cbiAgICAgICAgICAgICAgICBsZXQgbmV4dDogQ2VsbDtcbiAgICAgICAgICAgICAgICBpZiggZXYuY3RybEtleSApIHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJldiAgID0gY3VyWzBdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3Vyc29yID0gdGhpcy5yZWxhdGl2ZVRvKHByZXYsIGRfcm93LCBkX2NvbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIHByZXYucmF3Q29udGVudCAhPT0gdW5kZWZpbmVkICYmIGN1cnNvci5yYXdDb250ZW50ICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUoIHByZXYgIT09IGN1cnNvciAmJiBjdXJzb3IucmF3Q29udGVudCAhPT0gdW5kZWZpbmVkKSB7IC8vIHdlIHJlYWNoZWQgdGhlIGVuZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2ICAgPSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gdGhpcy5yZWxhdGl2ZVRvKHByZXYsIGRfcm93LCBkX2NvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSBwcmV2O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUoIHByZXYgIT09IGN1cnNvciAmJiBjdXJzb3IucmF3Q29udGVudCA9PT0gdW5kZWZpbmVkKSB7IC8vIHdlIHJlYWNoZWQgdGhlIGVuZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2ICAgPSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gdGhpcy5yZWxhdGl2ZVRvKHByZXYsIGRfcm93LCBkX2NvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBuZXh0ID0gY3Vyc29yO1xuICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICBuZXh0ID0gdGhpcy5yZWxhdGl2ZVRvKCBjdXJbMF0sIGRfcm93LCBkX2NvbCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy4jdGJvZHkuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnNvci5yZXBsYWNlQWxsKG5leHQpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBubyBlZGl0aW9uIGFsbG93ZWQuLi5cbiAgICAgICAgICAgIGlmKCB0aGlzLmF0dHJzLnJvID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgaWYoIHRhcmdldCA9PT0gdGhpcy4jdGJvZHkgKSB7XG4gICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09IFwiS2V5VlwiICYmIGV2LmN0cmxLZXkgJiYgdGhpcy4jcGFzdGViaW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuI3Bhc3RlYmluLmNlbGxzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNzZWxlY3Rpb24uY29udGVudCA9IGRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29weSBmb3JtYXQuLi4gVE9ETyB1dGlsaXR5IHRoaW5neS4uLlxuICAgICAgICAgICAgICAgICAgICBpZiggISBldi5zaGlmdEtleSB8fCAhIGV2LmFsdEtleSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IHRoaXMuI3Bhc3RlYmluLmNlbGxzO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHN0ID0gdGhpcy4jc2VsZWN0aW9uLmNlbGxzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgKytpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRzdFtpXS5jbGFzc05hbWUgPSBzcmNbaV0uY2xhc3NOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVE9ETzogYWRkIGZvcm1hdC4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKCAoIGV2LmtleSA9PT0gXCJjXCIgfHwgZXYua2V5ID09PSBcInhcIikgJiYgZXYuY3RybEtleSApIHtcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICBjb3B5LnNldFJhbmdlKHRoaXMuI3NlbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdIWSA/Pz9cbiAgICAgICAgICAgICAgICAgICAgLy9oLnN0eWxlLnNldFByb3BlcnR5KCd0b3AnICAgLCBgJHtzZWxlY3Rpb25bMF0ub2Zmc2V0VG9wfXB4YCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jcGFzdGViaW4gPSB0aGlzLiNzZWxlY3Rpb24uZGVlcENsb25lKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gXCJ4XCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiNzZWxlY3Rpb24uZGVsZXRlRm9ybWF0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiNzZWxlY3Rpb24uZGVsZXRlQ29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKCBldi5rZXkgPT09IFwiQ29udHJvbFwiIHx8IGV2LmtleSA9PT0gXCJTaGlmdFwiIHx8IGV2LmtleSA9PT0gXCJBbHRcIiApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBpZ25vcmVcbiAgICAgICAgICAgICAgICB9IGlmKCBldi5jb2RlID09PSBcIkRlbGV0ZVwiICkge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmRlbGV0ZUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpICk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gaWYoIGV2LmNvZGUgPT09IFwiRW50ZXJcIiApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlZCBlbHNld2hlcmVcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZXYuY3RybEtleSkgeyAvLyBpZ25vcmUgY3RybFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgeyAvLyB3ZSBzdGFydCBlZGl0aW5nLi4uXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VyID0gdGhpcy5jdXJzb3IuY2VsbHM7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIGN1ci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJbMF0uZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiZGJsY2xpY2tcIiwge2J1YmJsZXM6IHRydWV9KSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyWzBdLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQgIT09IHRoaXMuI3Rib2R5ICYmIGV2LmNvZGUgPT09ICdFbnRlcicgJiYgZXYuc2hpZnRLZXkgKVxuICAgICAgICAgICAgICAgIHJldHVybjsgLy8gZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yLlxuXG4gICAgICAgICAgICBpZihldi5jb2RlID09PSBcIkVudGVyXCIpIHsgLy9UT0RPOiBFbnRlciBpcyBmb3IgY3VycmVudCBwbGFnZS4uLlxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjdXIgPSB0aGlzLmN1cnNvci5jZWxscztcbiAgICAgICAgICAgICAgICBpZiggY3VyLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgbGV0IFtyb3csY29sXSA9IHRoaXMuY2VsbFBvcyggY3VyWzBdICk7XG5cbiAgICAgICAgICAgICAgICArK3JvdztcbiAgICAgICAgICAgICAgICBpZiggcm93ID49IHRoaXMuI3Rib2R5LmNoaWxkcmVuLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICAgICAgcm93ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgKytjb2w7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCBjb2wgPj0gdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlbi5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbCA9IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IG5leHQgPSB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuW2NvbF0gYXMgQ2VsbDtcblxuICAgICAgICAgICAgICAgIHRoaXMuI3Rib2R5LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJzb3IucmVwbGFjZUFsbChuZXh0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG9uSW5wdXQyID0gKGV2OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jY2xlYXJGb3JtdWxhUmVmcygpO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgaWYoZXYuZGV0YWlsICE9PSB0cnVlKVxuICAgICAgICAgICAgICAgIG9uSW5wdXQoZXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9UT0RPOiBoZXJlLi4uXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICAgICAgY29weS5zZXRSYW5nZShudWxsKTtcblxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lICE9PSBcIlREXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPSB0YXJnZXQgYXMgQ2VsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKFwiY2VsbF9lZGl0X3N0YXJ0XCIsIChldjogQ3VzdG9tRXZlbnQ8Q2VsbD4pID0+IHtcblxuICAgICAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC50b2dnbGUoXCJjZWxsX2VkaXRcIiwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBldi5kZXRhaWw7XG5cbiAgICAgICAgICAgIGlmKGNlbGwucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHN0ciA9IGNlbGwucmF3Q29udGVudC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlcyA9IGNlbGwucmF3Q29udGVudC5yYW5nZXNUb2tlbjtcblxuICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlbjogKHN0cmluZ3xIVE1MRWxlbWVudClbXSA9IFtzdHJdO1xuXG4gICAgICAgICAgICAgICAgbGV0IHJhbmdlc19jb2xvcnM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fTtcbiAgICAgICAgICAgICAgICBsZXQgY3VyX29mZnNldCA9IDA7XG5cbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdHIgPSBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGgtMV0gYXMgc3RyaW5nO1xuXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aC0xXSA9IHN0ci5zbGljZSgwLCByYW5nZXNbaV0uYmVnIC0gY3VyX29mZnNldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2VfbmFtZSA9IHJhbmdlc1tpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYoICEgKHJhbmdlX25hbWUgaW4gcmFuZ2VzX2NvbG9ycykgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VzX2NvbG9yc1tyYW5nZV9uYW1lXSA9IGklODtcblxuICAgICAgICAgICAgICAgICAgICBzLmNsYXNzTGlzdC5hZGQoJ2Zvcm11bGFfaGlnaGxpZ2h0JywgYGhpZ2hsaWdodF8ke3Jhbmdlc19jb2xvcnNbcmFuZ2VfbmFtZV19YCk7IC8vVE9ETy4uLlxuICAgICAgICAgICAgICAgICAgICBzLnRleHRDb250ZW50ID0gcmFuZ2VzW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKCBzICk7IC8vIHJhbmdlLi4uXG5cbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW4ucHVzaCggc3RyLnNsaWNlKHJhbmdlc1tpXS5lbmQgLSBjdXJfb2Zmc2V0KSApO1xuICAgICAgICAgICAgICAgICAgICBjdXJfb2Zmc2V0ID0gcmFuZ2VzW2ldLmVuZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjZWxsLnJlcGxhY2VDaGlsZHJlbiggLi4uY2hpbGRyZW4gKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlc19uYW1lcyA9IE9iamVjdC5rZXlzKHJhbmdlc19jb2xvcnMpO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByYW5nZXNfbmFtZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSByYW5nZXNfbmFtZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZiA9IHRoaXMuI2dldEZvcm11bGFSZWYoaSk7XG4gICAgICAgICAgICAgICAgICAgIHJlZi5zZXRDb2xvciggcmFuZ2VzX2NvbG9yc1tyYW5nZV0gKTtcbiAgICAgICAgICAgICAgICAgICAgcmVmLnNldFJhbmdlKCB0aGlzLmdldENlbGxzKHJhbmdlKSApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgb25JbnB1dDIgKTsgLy8gcmVtb3ZlIGNvbG9ycy4uLlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gRm9ybWF0cy5kZWZhdWx0LmNhbGwoY2VsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKFwiY2VsbF9lZGl0X2VuZFwiLCAoZXY6IEN1c3RvbUV2ZW50PENlbGw+KSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QudG9nZ2xlKFwiY2VsbF9lZGl0XCIsIGZhbHNlKTtcblxuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGV2LmRldGFpbDtcblxuICAgICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgb25JbnB1dDIpOyAvLyB0byBiZSBzYWZlXG4gICAgICAgICAgICBjZWxsLnRvZ2dsZUF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcImxlYXZlIGVkaXRcIiwgY2VsbC50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICBuZXcgQ2VsbExpc3QodGhpcywgW2NlbGxdKS5jb250ZW50ID0gY2VsbC50ZXh0Q29udGVudCE7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICAgICAgICAvLyBsZWF2ZVxuICAgICAgICAgICAgdGhpcy4jc2VsZWN0aW9uLmNsZWFyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZXYgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSAhPT0gXCJURFwiKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5zdGF0ZXMuY2VsbF9lZGl0LnN0YXRlID0gbnVsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoIHRoaXMubmJSb3dzID49IDEgJiYgdGhpcy5uYkNvbHMgPj0gMSlcbiAgICAgICAgICAgIHRoaXMuY3Vyc29yLnJlcGxhY2VBbGwoIHRoaXMuZ2V0UmFuZ2UoXCJBMVwiKSApO1xuICAgIH1cblxuICAgIGdldFZpc2libGVDZWxsKGM6IENlbGx8Q2VsbExpc3QpOiBDZWxsIHtcbiAgICAgICAgaWYoYyBpbnN0YW5jZW9mIENlbGxMaXN0KVxuICAgICAgICAgICAgYyA9IGMuZmlyc3RDZWxsO1xuXG4gICAgICAgIHJldHVybiBjLmNlbGwgPz8gYztcbiAgICB9XG5cbiAgICBjZWxsUG9zKGNlbGw6IEhUTUxUYWJsZUNlbGxFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjZWxsUG9zKGNlbGwpO1xuICAgIH1cblxuICAgICNjZWxsUG9zKGNlbGw6IEhUTUxUYWJsZUNlbGxFbGVtZW50KSB7XG5cbiAgICAgICAgaWYoIFwicG9zXCIgaW4gY2VsbClcbiAgICAgICAgICAgIHJldHVybiBjZWxsLnBvcyBhcyBbbnVtYmVyLCBudW1iZXJdO1xuXG4gICAgICAgIGNvbnN0IGNvbCA9IFsuLi5jZWxsLnBhcmVudEVsZW1lbnQhLmNoaWxkcmVuXS5maW5kSW5kZXgoIGMgPT4gYyA9PT0gY2VsbCk7XG4gICAgICAgIGNvbnN0IHJvdyA9IFsuLi5jZWxsLnBhcmVudEVsZW1lbnQhLnBhcmVudEVsZW1lbnQhLmNoaWxkcmVuXS5maW5kSW5kZXgoIHIgPT4gciA9PT0gY2VsbC5wYXJlbnRFbGVtZW50ISk7XG5cbiAgICAgICAgcmV0dXJuIFtyb3csIGNvbF0gYXMgY29uc3Q7XG4gICAgfVxuXG4gICAgI3Rib2R5ITogSFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQ7XG4gICAgZ2V0IHRib2R5KCkgeyByZXR1cm4gdGhpcy4jdGJvZHk7IH1cblxuICAgIHJlc2l6ZShuYnJvd3M6IG51bWJlciwgbmJjb2xzOiBudW1iZXIpIHtcblxuICAgICAgICBjb25zdCBjb2xfaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgIGNvbF9odG1sLmFwcGVuZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKSApO1xuXG4gICAgICAgIGNvbnN0IHRib2R5ID0gdGhpcy4jdGJvZHk7XG4gICAgICAgIHRib2R5LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgICAgIGZvcihsZXQgY29sID0gMDsgY29sIDwgIG5iY29scyA7ICsrY29sKSB7XG4gICAgICAgICAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICB0aC50ZXh0Q29udGVudCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBjb2wpO1xuICAgICAgICAgICAgY29sX2h0bWwuYXBwZW5kKHRoKTtcbiAgICAgICAgfVxuICAgICAgICB0Ym9keS5hcHBlbmQoY29sX2h0bWwpO1xuXG4gICAgICAgIGZvcihsZXQgcm93ID0gMDsgcm93IDwgbmJyb3dzOyArK3Jvdykge1xuICAgICAgICAgICAgY29uc3Qgcm93X2h0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgICAgICAgdGgudGV4dENvbnRlbnQgPSBgJHtyb3crMX1gO1xuICAgICAgICAgICAgcm93X2h0bWwuYXBwZW5kKHRoKTtcblxuICAgICAgICAgICAgZm9yKGxldCBjb2wgPSAwOyBjb2wgPCAgbmJjb2xzIDsgKytjb2wpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKSBhcyBDZWxsO1xuICAgICAgICAgICAgICAgIC8vY2VsbC50b2dnbGVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuICAgICAgICAgICAgICAgIGNlbGwuZm9ybWF0ID0gRm9ybWF0cy5kZWZhdWx0O1xuICAgICAgICAgICAgICAgIHJvd19odG1sLmFwcGVuZCggY2VsbCApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGJvZHkuYXBwZW5kKHJvd19odG1sKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNpbml0R3JpZChuYnJvd3M6IG51bWJlciwgbmJjb2xzOiBudW1iZXIpIHtcblxuICAgICAgICBjb25zdCBpc19ybyA9IHRoaXMuYXR0cnMucm8gPT09IFwidHJ1ZVwiO1xuXG4gICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICAgICAgY29uc3QgdGJvZHkgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcbiAgICAgICAgdGhpcy4jdGJvZHkgPSB0Ym9keTtcblxuICAgICAgICBjb25zdCByZXNpemVPYnMgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaG9zdC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoJ3Jlc2l6ZScpICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXNpemVPYnMub2JzZXJ2ZSggdGhpcy5ob3N0ICk7XG5cbiAgICAgICAgdGhpcy4jdGJvZHkuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG5cbiAgICAgICAgdGhpcy5yZXNpemUobmJyb3dzLCBuYmNvbHMpO1xuXG4gICAgICAgIHRhYmxlLmFwcGVuZCh0Ym9keSk7XG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQodGFibGUpO1xuICAgIH1cblxuICAgIGdldFJhbmdlKGZyb206IENlbGx8c3RyaW5nfHJlYWRvbmx5W251bWJlcixudW1iZXJdLCB0bzogQ2VsbHxzdHJpbmd8cmVhZG9ubHlbbnVtYmVyLG51bWJlcl0gPSBmcm9tKTogQ2VsbExpc3Qge1xuXG4gICAgICAgIC8vIHByb2Nlc3MgcmVmcy4uLlxuICAgICAgICBpZiggZnJvbSBpbnN0YW5jZW9mIEhUTUxUYWJsZUNlbGxFbGVtZW50KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZ2UoIHRoaXMuY2VsbFBvcyhmcm9tKSwgdG8gKTtcbiAgICAgICAgaWYoIHRvIGluc3RhbmNlb2YgSFRNTFRhYmxlQ2VsbEVsZW1lbnQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSYW5nZSggZnJvbSwgdGhpcy5jZWxsUG9zKHRvKSApO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgZnJvbSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgaWYoIGZyb20uaW5jbHVkZXMoXCI6XCIpIClcbiAgICAgICAgICAgICAgICBbZnJvbSwgdG9dID0gZnJvbS5zcGxpdCgnOicpO1xuXG4gICAgICAgICAgICBmcm9tID0gdGhpcy5yZWYycG9zKGZyb20pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZ2UoIGZyb20sIHRvICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJhbmdlKCBmcm9tLCB0aGlzLnJlZjJwb3ModG8pICk7XG5cbiAgICAgICAgLy8gZ2V0IHJhbmdlXG5cbiAgICAgICAgbGV0IGJlZ19yb3cgPSBmcm9tWzBdIHx8IDE7XG4gICAgICAgIGxldCBiZWdfY29sID0gZnJvbVsxXSB8fCAxO1xuXG4gICAgICAgIGxldCBlbmRfcm93ID0gZnJvbVswXSA9PT0gMCA/IHRoaXMubmJSb3dzIDogdG9bMF07XG4gICAgICAgIGxldCBlbmRfY29sID0gZnJvbVsxXSA9PT0gMCA/IHRoaXMubmJDb2xzIDogdG9bMV07XG5cbiAgICAgICAgaWYoIGVuZF9yb3cgPCBiZWdfcm93IClcbiAgICAgICAgICAgIFtiZWdfcm93LCBlbmRfcm93XSA9IFtlbmRfcm93LCBiZWdfcm93XTtcbiAgICAgICAgaWYoIGVuZF9jb2wgPCBiZWdfY29sIClcbiAgICAgICAgICAgIFtiZWdfY29sLCBlbmRfY29sXSA9IFtlbmRfY29sLCBiZWdfY29sXTtcblxuICAgICAgICBjb25zdCBjZWxscyA9IG5ldyBBcnJheTxDZWxsPiggKGVuZF9yb3cgLSBiZWdfcm93ICsgMSkgKiAoZW5kX2NvbCAtIGJlZ19jb2wgKyAxKSApO1xuXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBmb3IobGV0IGkgPSBiZWdfcm93OyBpIDw9IGVuZF9yb3c7ICsraSApXG4gICAgICAgICAgICBmb3IobGV0IGogPSBiZWdfY29sOyBqIDw9IGVuZF9jb2w7ICsraiApXG4gICAgICAgICAgICAgICAgY2VsbHNbb2Zmc2V0KytdID0gdGhpcy50Ym9keS5jaGlsZHJlbltpXS5jaGlsZHJlbltqXSBhcyBDZWxsO1xuXG4gICAgICAgIHJldHVybiBuZXcgQ2VsbExpc3QodGhpcywgY2VsbHMpO1xuICAgIH1cblxuICAgIGdldENlbGxzKGNlbGw6IHN0cmluZyk6IENlbGxMaXN0O1xuICAgIGdldENlbGxzKHJvd19pZDogbnVtYmVyLCBjb2xfaWQ6IG51bWJlcik6IENlbGxMaXN0O1xuICAgIGdldENlbGxzKGNlbGxfb3Jfcm93aWQ6IG51bWJlcnxzdHJpbmcsIGNvbF9pZD86IG51bWJlcikge1xuXG4gICAgICAgIGxldCByb3dfaWQgPSBjZWxsX29yX3Jvd2lkO1xuICAgICAgICBpZiggdHlwZW9mIGNlbGxfb3Jfcm93aWQgPT09IFwic3RyaW5nXCIpIHtcblxuICAgICAgICAgICAgY2VsbF9vcl9yb3dpZCA9IGNlbGxfb3Jfcm93aWQucmVwbGFjZUFsbCgnJCcsICcnKTtcblxuICAgICAgICAgICAgaWYoIGNlbGxfb3Jfcm93aWQuaW5jbHVkZXMoJzonKSApIHsvLyByYW5nZVxuXG4gICAgICAgICAgICAgICAgbGV0IFtiZWcsIGVuZF0gPSBjZWxsX29yX3Jvd2lkLnNwbGl0KCc6Jyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBiX3Jvd19pZCA9ICtiZWdbMV07XG4gICAgICAgICAgICAgICAgY29uc3QgYl9jb2xfaWQgPSBiZWcuY2hhckNvZGVBdCgwKSArIDEgLSA2NTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGVfcm93X2lkID0gK2VuZFsxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBlX2NvbF9pZCA9IGVuZC5jaGFyQ29kZUF0KDApICsgMSAtIDY1O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbHMgPSBuZXcgQXJyYXkoIChlX2NvbF9pZC1iX2NvbF9pZCkgKiAoZV9yb3dfaWQgLSBiX3Jvd19pZCkgKTtcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgICAgICAgICBmb3IobGV0IHIgPSBiX3Jvd19pZDsgciA8PSAgZV9yb3dfaWQ7ICsrcilcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBjID0gYl9jb2xfaWQ7IGMgPD0gIGVfY29sX2lkOyArK2MpXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tvZmZzZXQrK10gPSB0aGlzLiN0Ym9keS5jaGlsZHJlbltyXS5jaGlsZHJlbltjXSBhcyBDZWxsO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDZWxsTGlzdCh0aGlzLCBjZWxscyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHRoaXMgaXMgYSBmdWxsIGxpbmUuLi5cbiAgICAgICAgICAgIGlmKCBjZWxsX29yX3Jvd2lkWzBdID49ICcwJyAmJiBjZWxsX29yX3Jvd2lkWzBdIDw9ICc5JyApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDZWxscyhgQSR7Y2VsbF9vcl9yb3dpZH06JHt0aGlzLnBvczJyZWYoK2NlbGxfb3Jfcm93aWQsIHRoaXMubmJDb2xzKX1gKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiggY2VsbF9vcl9yb3dpZFtjZWxsX29yX3Jvd2lkLmxlbmd0aC0xXSA8ICcwJyB8fCBjZWxsX29yX3Jvd2lkW2NlbGxfb3Jfcm93aWQubGVuZ3RoLTFdID4gJzknICkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybiggYCR7Y2VsbF9vcl9yb3dpZH0xOiR7Y2VsbF9vcl9yb3dpZH0ke3RoaXMubmJSb3dzfWAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDZWxscyhgJHtjZWxsX29yX3Jvd2lkfTE6JHtjZWxsX29yX3Jvd2lkfSR7dGhpcy5uYlJvd3N9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJvd19pZCA9ICtjZWxsX29yX3Jvd2lkWzFdO1xuICAgICAgICAgICAgY29sX2lkID0gY2VsbF9vcl9yb3dpZC5jaGFyQ29kZUF0KDApICsgMSAtIDY1O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuI3Rib2R5LmNoaWxkcmVuWytyb3dfaWRdLmNoaWxkcmVuW2NvbF9pZCFdIGFzIENlbGw7XG4gICAgICAgIHJldHVybiBuZXcgQ2VsbExpc3QodGhpcywgW2NlbGxdKTtcbiAgICB9XG5cbiAgICByZWYycG9zKHJlZjogc3RyaW5nKTogW251bWJlciwgbnVtYmVyXSB7XG4gICAgICAgIFxuICAgICAgICByZWYgPSByZWYucmVwbGFjZUFsbCgnJCcsICcnKTtcblxuICAgICAgICAvL1RPRE8uLi5cbiAgICAgICAgY29uc3Qgcm93ID0gK3JlZltyZWYubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnN0IGNvbCA9IHJlZi5jaGFyQ29kZUF0KDApIC0gNjUgKyAxO1xuXG4gICAgICAgIHJldHVybiBbcm93LCBjb2xdO1xuICAgIH1cbiAgICBwb3MycmVmKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gYCR7U3RyaW5nLmZyb21DaGFyQ29kZSg2NStjb2wtMSl9JHtyb3d9YDtcbiAgICB9XG4gICAgZ2V0IG5iUm93cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Rib2R5LmNoaWxkcmVuLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIGdldCBuYkNvbHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0Ym9keS5maXJzdEVsZW1lbnRDaGlsZCEuY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICAjaXNVcGRhdGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYoIHRoaXMuI2lzVXBkYXRpbmcgPT09IHRydWUgKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLiNpc1VwZGF0aW5nID0gdHJ1ZTtcblxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gWy4uLnRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsPENlbGw+KCd0ZCcpXS5maWx0ZXIoIGUgPT4gZS5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvcihsZXQgY2VsbCBvZiBjZWxscyApXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGNlbGwucmF3Q29udGVudC5yZXNldENhY2hlKCk7XG5cbiAgICAgICAgICAgIGZvcihsZXQgY2VsbCBvZiBjZWxscykge1xuXG4gICAgICAgICAgICAgICAgaWYoIGNlbGwucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEgKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGNlbGwucmF3Q29udGVudC5leGVjKHRoaXMpOyAvL1RPRE8uLi5cblxuICAgICAgICAgICAgICAgICAgICAvL1RPRE86IGZhY3Rvcml6ZS4uLlxuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZTogc3RyaW5nID0gdHlwZW9mIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBEYXRlIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IChjZWxsIGFzIGFueSkuZm9ybWF0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5ob3N0LmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudCgndXBkYXRlJykgKTtcbiAgICAgICAgICAgIHRoaXMuI2lzVXBkYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXQgaXNSTygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cnMucm8gPT09IFwidHJ1ZVwiO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENlbGxMaXN0IGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuXG4gICAgI3NoZWV0OiBDYWxjU2hlZXQ7XG4gICAgI2NlbGxzOiBDZWxsW107XG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCwgY2VsbHM6IENlbGxbXSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLiNjZWxscyA9IGNlbGxzO1xuICAgICAgICB0aGlzLiNzaGVldCA9IHNoZWV0O1xuICAgIH1cblxuICAgIGdldCBwbGFnZV9uYW1lKCkge1xuXG4gICAgICAgIGlmKCB0aGlzLiNjZWxscy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgaWYoIHRoaXMuI2NlbGxzLmxlbmd0aCA9PT0gMSApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4jc2hlZXQucG9zMnJlZiggLi4udGhpcy4jc2hlZXQuY2VsbFBvcyh0aGlzLiNjZWxsc1swXSkgKTtcblxuICAgICAgICBsZXQgY2VsbHMgPSB0aGlzLiNjZWxscy5tYXAoIGMgPT4gdGhpcy4jc2hlZXQuY2VsbFBvcyhjKSApLnNvcnQoIChhLGIpID0+IHtcbiAgICAgICAgICAgIGlmKCBhWzBdICE9PSBiWzBdIClcbiAgICAgICAgICAgICAgICByZXR1cm4gYVswXSAtIGJbMF07XG4gICAgICAgICAgICByZXR1cm4gYVsxXSAtIGJbMV07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtaW4gPSBjZWxsc1swXTtcbiAgICAgICAgbGV0IG1heCA9IGNlbGxzW2NlbGxzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIGxldCBuYl9jb2xzID0gbWF4WzFdIC0gbWluWzFdICsgMTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICBpZiggY2VsbHNbaV1bMF0gIT09IE1hdGguZmxvb3IoaS9uYl9jb2xzKSttaW5bMF0gJiYgY2VsbHNbaV1bMV0gIT09IChpJW5iX2NvbHMpKyBtaW5bMV0gKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICByZXR1cm4gYCR7dGhpcy4jc2hlZXQucG9zMnJlZiguLi5taW4pfToke3RoaXMuI3NoZWV0LnBvczJyZWYoLi4ubWF4KX1gO1xuICAgIH1cblxuICAgIGdldCBjZWxscygpOiBDZWxsW10ge1xuICAgICAgICByZXR1cm4gdGhpcy4jY2VsbHM7XG4gICAgfVxuICAgIGdldCBzaGVldCgpOiBDYWxjU2hlZXQge1xuICAgICAgICByZXR1cm4gdGhpcy4jc2hlZXQ7XG4gICAgfVxuXG4gICAgdG9nZ2xlRm9ybWF0KG5hbWU6IHN0cmluZ3woKHY6IGFueSwgcHJlYzogbnVtYmVyfG51bGwpID0+IHN0cmluZykgKSB7XG4gICAgICAgIGxldCBmID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQodGhpcyk7XG5cbiAgICAgICAgaWYoIHR5cGVvZiBuYW1lID09PSBcImZ1bmN0aW9uXCIpIHtcblxuICAgICAgICAgICAgbGV0IGlzRm9ybWF0ID0gZi5nZXRQcm9wZXJ0eShcImZvcm1hdFwiKSA9PT0gbmFtZTtcblxuICAgICAgICAgICAgdGhpcy5mb3JtYXQoe2Zvcm1hdDogaXNGb3JtYXQgPyBudWxsIDogbmFtZSB9KTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mb3JtYXQoe1tuYW1lXTogZi5nZXRQcm9wZXJ0eShuYW1lKSAhPT0gdHJ1ZX0pO1xuICAgIH1cblxuICAgIGZvcm1hdCguLi5mOiAoKCAodjogYW55LCBwcmVjOiBudW1iZXJ8bnVsbCkgPT4gc3RyaW5nICl8c3RyaW5nfEZvcm1hdHxSZWNvcmQ8c3RyaW5nLCBhbnk+KVtdKSB7XG5cbiAgICAgICAgaWYoIGYubGVuZ3RoID4gMSApIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9UT0RPLi4uLlxuICAgICAgICAgICAgZiA9IE9iamVjdC5mcm9tRW50cmllcyggZi5tYXAoIGUgPT4gW2UsIHRydWVdICkgKTtcblxuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIGYgPSBmWzBdO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgZiA9PT0gXCJmdW5jdGlvblwiIClcbiAgICAgICAgICAgIGYgPSB7XCJmb3JtYXRcIjogZn07XG5cbiAgICAgICAgaWYodHlwZW9mIGYgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgZiA9IHtbZl06IHRydWV9O1xuXG4gICAgICAgIGlmKCAhIChmIGluc3RhbmNlb2YgRm9ybWF0KSApXG4gICAgICAgICAgICBmID0gbmV3IEZvcm1hdChmKTtcblxuICAgICAgICBmLmFwcGx5VG8odGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0IGNvbnRlbnQoKTogKFJhd0NvbnRlbnRUeXBlKVtdIHtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBuZXcgQXJyYXkodGhpcy4jY2VsbHMubGVuZ3RoKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuI2NlbGxzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgY29udGVudFtpXSA9IHRoaXMuI2NlbGxzW2ldLnJhd0NvbnRlbnQhO1xuXG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH1cblxuICAgIGRlbGV0ZUZvcm1hdCgpIHtcbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIHRoaXMuI2NlbGxzKSAvL1RPRE8gYWRkIGhvYyBmb3JtYXQuLi5cbiAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gJyc7XG4gICAgfVxuXG4gICAgZGVsZXRlQ29udGVudCgpIHtcblxuICAgICAgICBmb3IobGV0IGNlbGwgb2YgdGhpcy4jY2VsbHMpIHtcbiAgICAgICAgICAgIGNlbGwucmF3Q29udGVudCA9IHVuZGVmaW5lZCBhcyBhbnk7XG4gICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXR5cGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NoZWV0LnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHNldCBjb250ZW50KGNvbnRlbnQ6IENlbGx8UmF3Q29udGVudFR5cGV8KFJhd0NvbnRlbnRUeXBlfENlbGwpW10pIHtcblxuICAgICAgICBpZiggQXJyYXkuaXNBcnJheShjb250ZW50KSApIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb250ZW50Lmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgIG5ldyBDZWxsTGlzdCh0aGlzLiNzaGVldCwgW3RoaXMuI2NlbGxzW2ldXSApLmNvbnRlbnQgPSBjb250ZW50W2ldO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiggdHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG5cbiAgICAgICAgICAgIGxldCByYXcgPSBjb250ZW50O1xuICAgICAgICAgICAgY29udGVudCA9IHBhcnNlSW5wdXQoY29udGVudCk7XG4gICAgICAgICAgICBpZiggdHlwZW9mIGNvbnRlbnQgPT09IFwibnVtYmVyXCIgJiYgcmF3W3Jhdy5sZW5ndGgtMV0gPT09IFwiJVwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGYgPSBGb3JtYXQuZXh0cmFjdEZvcm1hdCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiggISBmLmhhc1Byb3BlcnR5KFwiZm9ybWF0XCIpIClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtYXQoRm9ybWF0cy5wb3VyY2VudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBcblxuICAgICAgICBsZXQgcmF3X3ZhbCA9IGNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MVGFibGVDZWxsRWxlbWVudCA/IGNvbnRlbnQucmF3Q29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvbnRlbnQ7XG5cbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIHRoaXMuI2NlbGxzKSB7XG5cbiAgICAgICAgICAgIGlmKGNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MVGFibGVDZWxsRWxlbWVudCAmJiBjb250ZW50LnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBGb3JtdWxhICkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHYgPSBjb250ZW50LnJhd0NvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkc3QgPSB0aGlzLiNzaGVldC5jZWxsUG9zKCBjZWxsICk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3JjID0gdGhpcy4jc2hlZXQuY2VsbFBvcyhjb250ZW50KVxuXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZiA9IFsgZHN0WzBdIC0gc3JjWzBdLCBkc3RbMV0gLSBzcmNbMV1dIGFzIGNvbnN0O1xuXG4gICAgICAgICAgICAgICAgcmF3X3ZhbCA9IHYucmVsYXRpdmVUbyggdGhpcy4jc2hlZXQsIC4uLmRpZmYgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2VsbC5yYXdDb250ZW50ID0gcmF3X3ZhbDtcblxuICAgICAgICAgICAgbGV0IHZhbHVlID0gcmF3X3ZhbDtcbiAgICAgICAgICAgIGlmKCByYXdfdmFsIGluc3RhbmNlb2YgRm9ybXVsYSkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0cyA9IE9iamVjdC52YWx1ZXMoIEZvcm1hdHMgKTtcblxuICAgICAgICAgICAgICAgIC8vSWYgbm8gbnVtYmVyIGZvcm1hdCwgZGVkdWNlIGZvcm1hdC5cbiAgICAgICAgICAgICAgICBpZiggY2VsbC5mb3JtYXQgPT09IHVuZGVmaW5lZCB8fCBjZWxsLmZvcm1hdCA9PT0gRm9ybWF0cy5kZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmb3JtYXQgPSBGb3JtYXRzLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuYl9kYXRlcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgciBvZiByYXdfdmFsLnJhbmdlc1Rva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZiA9IEZvcm1hdC5leHRyYWN0Rm9ybWF0KHRoaXMuc2hlZXQuZ2V0UmFuZ2Uoci52YWx1ZSkgKS5nZXRQcm9wZXJ0eShcImZvcm1hdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBmb3JtYXQgIT09IGYgJiYgZm9ybWF0cy5pbmRleE9mKGYpID4gZm9ybWF0cy5pbmRleE9mKGZvcm1hdCkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdCA9IGY7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihmID09PSBGb3JtYXRzLmRhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKytuYl9kYXRlcztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGg0Y2tcbiAgICAgICAgICAgICAgICAgICAgaWYoIGZvcm1hdCA9PT0gRm9ybWF0cy5kYXRlICYmIG5iX2RhdGVzID4gMSApXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQgPSBGb3JtYXRzLmRlZmF1bHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoZm9ybWF0ICE9PSBGb3JtYXRzLmRlZmF1bHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmZvcm1hdCA9IGZvcm1hdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHJhd192YWwuZXhlYyh0aGlzLiNzaGVldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB0eXBlOiBzdHJpbmcgPSB0eXBlb2YgdmFsdWU7XG4gICAgICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBEYXRlICkge1xuICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCI7XG4gICAgICAgICAgICAgICAgY2VsbC5mb3JtYXQgPSBGb3JtYXRzLmRhdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBjZWxsLmZvcm1hdCh2YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmKCBjZWxsLmZvcm1hdCA9PT0gRm9ybWF0cy5kYXRlKVxuICAgICAgICAgICAgICAgIHR5cGUgPSAnZGF0ZSc7XG4gICAgICAgICAgICBpZiggY2VsbC5mb3JtYXQgPT09IEZvcm1hdHMucG91cmNlbnQpXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdwb3VyY2VudCc7XG4gICAgICAgICAgICBpZiggY2VsbC5mb3JtYXQgPT09IEZvcm1hdHMuZXVyb3MgfHwgY2VsbC5mb3JtYXQgPT09IEZvcm1hdHMubnVtYmVyIClcbiAgICAgICAgICAgICAgICB0eXBlID0gJ251bWJlcic7XG5cbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCB0eXBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NoZWV0LnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHNldFJPKGlzX3JvOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBmb3IobGV0IGNlbGwgb2YgdGhpcy4jY2VsbHMpXG4gICAgICAgICAgICBjZWxsLmlzX3JvID0gaXNfcm87XG4gICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjZWxscy5sZW5ndGg7XG4gICAgfVxuXG4gICAgaGFzKC4uLmNlbGxzOiBDZWxsW10pIHtcbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIGNlbGxzKVxuICAgICAgICAgICAgaWYoICEgdGhpcy4jY2VsbHMuaW5jbHVkZXMoY2VsbCkgKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmVtb3ZlKC4uLmNlbGxzOiBDZWxsW10pIHtcbiAgICAgICAgdGhpcy4jY2VsbHMgPSB0aGlzLiNjZWxscy5maWx0ZXIoIGMgPT4gISBjZWxscy5pbmNsdWRlcyhjKSApO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSApO1xuICAgIH1cblxuICAgIHJlcGxhY2VBbGwoLi4uY2VsbHM6IENlbGxbXXxbQ2VsbExpc3RdKSB7XG4gICAgICAgIHRoaXMuI2NlbGxzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuYWRkKC4uLmNlbGxzKTtcbiAgICB9XG5cbiAgICBhZGQoLi4uY2VsbHM6IENlbGxbXXxbQ2VsbExpc3RdKSB7XG5cbiAgICAgICAgaWYoIGNlbGxzWzBdIGluc3RhbmNlb2YgQ2VsbExpc3QpXG4gICAgICAgICAgICBjZWxscyA9IGNlbGxzWzBdLmNlbGxzO1xuXG4gICAgICAgIHRoaXMuI2NlbGxzLnB1c2goLi4uY2VsbHMgYXMgQ2VsbFtdKTtcblxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSApO1xuICAgIH1cblxuICAgIGdldCBmaXJzdENlbGwoKSB7XG4gICAgICAgIGlmKCB0aGlzLiNjZWxscy5sZW5ndGggPCAxKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9wZVwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NlbGxzWzBdO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLiNjZWxscy5sZW5ndGggPSAwO1xuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpICk7XG4gICAgfVxuXG5cbiAgICBkZWVwQ2xvbmUoKSB7XG5cbiAgICAgICAgbGV0IGNlbGxzID0gdGhpcy4jY2VsbHMubWFwKCBjID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNsb25lID0gYy5jbG9uZU5vZGUodHJ1ZSkgYXMgQ2VsbDtcblxuICAgICAgICAgICAgY2xvbmUucmF3Q29udGVudCA9IGMucmF3Q29udGVudDtcbiAgICAgICAgICAgIGNsb25lLmZvcm1hdCAgICAgPSBjLmZvcm1hdDtcbiAgICAgICAgICAgIChjbG9uZSBhcyBhbnkpLnBvcyAgICAgICAgPSB0aGlzLiNzaGVldC5jZWxsUG9zKGMpO1xuXG4gICAgICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIG5ldyBDZWxsTGlzdCh0aGlzLiNzaGVldCwgY2VsbHMpO1xuICAgIH1cbn1cblxuLy9UT0RPLi4uXG5pbXBvcnQgXCIuL2Zvcm11bGFfZWRpdG9yXCI7XG5pbXBvcnQgXCIuL3BsYWdlX2VkaXRvclwiO1xuaW1wb3J0IHsgRm9ybXVsYSwgcGFyc2VfZm9ybXVsYSB9IGZyb20gXCIuL2Zvcm11bGFfcGFyc2VyXCI7XG5pbXBvcnQgeyBQbGFnZVNlbGVjdG9yIH0gZnJvbSBcIi4vcGxhZ2Vfc2VsZWN0b3JcIjtcbmltcG9ydCB7IEZvcm1hdCwgRm9ybWF0TWFuYWdlciwgRm9ybWF0cyB9IGZyb20gXCIuL2Zvcm1hdFwiO1xuaW1wb3J0IHsgRm9ybXVsYVJlZiwgUmFuZ2VPdmVybGF5LCBSZWNvcHlIYW5kbGUgfSBmcm9tIFwiLi9SYW5nZU92ZXJsYXlcIjtcblxuTElTUy5kZWZpbmUoJ2NhbGMtc2hlZXQnLCBDYWxjU2hlZXQpOyIsImltcG9ydCBMSVNTIGZyb20gXCIuLi8uLi8uLi9saWJzL0xJU1NcIjtcbmltcG9ydCB7IEZvcm1hdCwgRm9ybWF0cyB9IGZyb20gXCIuL2Zvcm1hdFwiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0LCBDZWxsTGlzdCB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBgXG4gICAgPHNlbGVjdCBkaXNhYmxlZCB0aXRsZT1cIk5vbSBkZSBwb2xpY2VcIj48b3B0aW9uPkxpYsOpcmF0aW9uIFNhbnM8L29wdGlvbj48L3NlbGVjdD5cbiAgICA8c2VsZWN0IGNsYXNzPVwiZm9udF9zaXplXCIgdGl0bGU9XCJUYWlsbGUgZGUgcG9saWNlXCI+PC9zZWxlY3Q+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nYm9sZCcgdGl0bGU9XCJHcmFzIChDdHJsK0IpXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0naXRhbGljJyB0aXRsZT1cIkl0YWxpcXVlIChDdHJsK0kpXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0ndW5kZXJsaW5lJyB0aXRsZT1cIlNvdWxpZ25hZ2UgKEN0cmwrVSlcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxzcGFuIGNsYXNzPSd2YmFyJz48L3NwYW4+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIHZhbHVlPSdibGFjaycgbmFtZT0nZm9yZWdyb3VuZF9jb2xvcicgdGl0bGU9XCJDb3VsZXVyIGRlIHBvbGljZVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIHZhbHVlPSd5ZWxsb3cnIG5hbWU9J2JhY2tncm91bmRfY29sb3InIHRpdGxlPVwiQ291bGV1ciBkJ2FycmnDqHJlLXBsYW5cIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxzcGFuIGNsYXNzPSd2YmFyJz48L3NwYW4+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2FsaWduX2xlZnQnIHRpdGxlPVwiQWxpZ25lciDDoCBnYXVjaGUgKEN0cmwrTClcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdhbGlnbl9jZW50ZXInIHRpdGxlPVwiQ2VudGVyIChDdHJsK0UpXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nYWxpZ25fcmlnaHQnIHRpdGxlPVwiQWxpZ25lciDDoCBkcm9pdGUgKEN0cmwrUilcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxzcGFuIGNsYXNzPSd2YmFyJz48L3NwYW4+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J3ZhbGlnbl90b3AnIHRpdGxlPVwiQWxpZ25lciBlbiBoYXV0XCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0ndmFsaWduX21pZGRsZScgdGl0bGU9XCJDZW50cmVyIHZlcnRpY2FsZW1lbnRcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSd2YWxpZ25fYm90dG9tJyB0aXRsZT1cIkFsaWduZXIgZW4gYmFzXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8c3BhbiBjbGFzcz0ndmJhcic+PC9zcGFuPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdhanVzdGVyJyB0aXRsZT1cIkFqdXN0ZXIgbGUgdGV4dGVcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxzcGFuIGNsYXNzPSd2YmFyJz48L3NwYW4+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J21lcmdlX2NlbnRlcicgdHlwZT0nZmN0JyB0aXRsZT1cIkZ1c2lvbm5lciBldCBjZW50cmVyIG91IGTDqWZ1c2lvbm5lciBsZXMgY2VsbHVsZXMgZW4gaW52ZXJzYW50IGxldXIgw6l0YXQgYWN0dWVsXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nbWVyZ2UnIHR5cGU9J2ZjdCcgdGl0bGU9XCJGdXNpb25uZXIgbGVzIGNlbGx1bGVzXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0ndW5tZXJnZScgdHlwZT0nZmN0JyB0aXRsZT1cIkTDqWZ1c2lvbm5lciBsZXMgY2VsbHVsZXNcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxzcGFuIGNsYXNzPSd2YmFyJz48L3NwYW4+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2Zvcm1hdF9tb25uYWllJyB0eXBlPSdmY3QnIHRpdGxlPVwiQXBwbGlxdWVyIGxlIGZvcm1hdCBNb25uYWllIChNYWorQ3RybCs0KVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2Zvcm1hdF9wb3VyY2VudCcgdHlwZT0nZmN0JyB0aXRsZT1cIkFwcGxpcXVlciBsZSBmb3JtYXQgUG91cmNlbnRhZ2UgKE1haitDdHJsKzUpXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nZm9ybWF0X25iJyB0eXBlPSdmY3QnICB0aXRsZT1cIkFwcGxpcXVlciBsZSBmb3JtYXQgTm9tYnJlIChNYWorQ3RybCsxKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2Zvcm1hdF9kYXRlJyB0eXBlPSdmY3QnICB0aXRsZT1cIkFwcGxpcXVlciBsZSBmb3JtYXQgRGF0ZSAoTWFqK0N0cmwrMylcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxzcGFuIGNsYXNzPSd2YmFyJz48L3NwYW4+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2Zvcm1hdF96ZXJvX3AxJyB0eXBlPSdmY3QnIHRpdGxlPVwiQWpvdXRlciB1bmUgZMOpY2ltYWxlXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nZm9ybWF0X3plcm9fbTEnIHR5cGU9J2ZjdCcgdGl0bGU9XCJTdXBwcmltZXIgdW5lIGTDqWNpbWFsZVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0ncmV0cmFpdF9wMScgdHlwZT0nZmN0JyB0aXRsZT1cIkF1Z21lbnRlciBsZSByZXRyYWl0XCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0ncmV0cmFpdF9tMScgdHlwZT0nZmN0JyB0aXRsZT1cIkRpbWludWVyIGxlIHJldHJhaXRcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxzcGFuIGNsYXNzPSd2YmFyJz48L3NwYW4+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2JvcmRlcicgdHlwZT0nZmN0JyB0aXRsZT1cIkJvcmR1cmVzIChNYWogcG91ciDDqWNyYXNlcilcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdib3JkZXJfc3R5bGUnIHR5cGU9J2ZjdCcgZGlzYWJsZWQgdGl0bGU9XCJTdHlsZSBkZSBib3JkdXJlXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gdmFsdWU9J2JsYWNrJyBuYW1lPSdib3JkZXJfY29sb3InIHRpdGxlPVwiQ291bGV1ciBkZSBib3JkdXJlXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8c3BhbiBjbGFzcz0ndmJhcic+PC9zcGFuPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdmb3JtYXRfY29uZCcgdHlwZT0nZmN0JyBkaXNhYmxlZCB0aXRsZT1cIkNvbmRpdGlvbm5lbFwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG5gO1xuXG5mdW5jdGlvbiBtZXJnZShjZWxsbGlzdDogQ2VsbExpc3QsIGlzX2FsaWduID0gZmFsc2UpIHtcblxuICAgIGNvbnN0IHNoZWV0ID0gY2VsbGxpc3Quc2hlZXQ7XG5cbiAgICBjb25zdCBbYmVnLGVuZF0gPSBjZWxsbGlzdC5wbGFnZV9uYW1lIS5zcGxpdCgnOicpLm1hcCggZSA9PiBzaGVldC5yZWYycG9zKGUpICk7IC8vIHBsYWdlIGNhbid0IGJlIHVuZGVmaW5lZFxuXG4gICAgbGV0IHJvd3MgPSBlbmRbMF0gLSBiZWdbMF0gKyAxO1xuICAgIGxldCBjb2xzID0gZW5kWzFdIC0gYmVnWzFdICsgMTtcblxuICAgIGxldCBmb3JtYXQ6IFJlY29yZDxzdHJpbmcsYW55PiA9IHtcbiAgICAgICAgc3BhbjogWyByb3dzLCBjb2xzIF1cbiAgICB9XG5cbiAgICBpZiggaXNfYWxpZ24gKSB7XG4gICAgICAgIGZvcm1hdC52YWxpZ25fbWlkZGxlID0gdHJ1ZTtcbiAgICAgICAgZm9ybWF0LmFsaWduX2NlbnRlciAgPSB0cnVlO1xuICAgIH1cblxuICAgIHNoZWV0LmdldFJhbmdlKGJlZykuZm9ybWF0KGZvcm1hdCk7XG59XG5cbmZ1bmN0aW9uIHVubWVyZ2UoY2VsbGxpc3Q6IENlbGxMaXN0KSB7XG5cbiAgICBjZWxsbGlzdC5mb3JtYXQoe1xuICAgICAgICBzcGFuOiBbIDEsIDEgXVxuICAgIH0pOyAvLyB1bm1lcmdlLi4uXG59XG5cbmZ1bmN0aW9uIHJldHJhaXQoY2VsbHM6IENlbGxMaXN0LCBkZWx0YV9pbmRlbnQ6IG51bWJlcikge1xuICAgIFxuICAgIGZvcihsZXQgY2VsbCBvZiBjZWxscy5jZWxscykge1xuXG4gICAgICAgIGNvbnN0IGZvcm1hdCA9IEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGwpO1xuICAgICAgICBsZXQgbmV3X2Zvcm1hdDogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xuICAgICAgICBpZiggISBmb3JtYXQuaGFzUHJvcGVydHkoXCJhbGlnbl9yaWdodFwiKSAmJiAhIGZvcm1hdC5oYXNQcm9wZXJ0eShcImFsaWduX2xlZnRcIikgKVxuICAgICAgICAgICAgbmV3X2Zvcm1hdC5hbGlnbl9sZWZ0ID0gdHJ1ZTtcblxuICAgICAgICBuZXdfZm9ybWF0LmluZGVudCA9ICsoZm9ybWF0LmdldFByb3BlcnR5KFwiaW5kZW50XCIpID8/IDApICsgZGVsdGFfaW5kZW50O1xuICAgICAgICBcbiAgICAgICAgaWYoIG5ld19mb3JtYXQuaW5kZW50IDwgMClcbiAgICAgICAgICAgIG5ld19mb3JtYXQuaW5kZW50ID0gMDtcblxuICAgICAgICBjZWxscy5mb3JtYXQobmV3X2Zvcm1hdCk7ICAgICBcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHByZWNpc2lvbihjZWxsczogQ2VsbExpc3QsIGRlbHRhX3ByZWM6IG51bWJlcikge1xuXG4gICAgbGV0IHByZWNpc2lvbiA9IHVuZGVmaW5lZDtcbiAgICBmb3IobGV0IGNlbGwgb2YgY2VsbHMuY2VsbHMpIHtcbiAgICAgICAgY29uc3QgcHJlYyA9ICsoRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbCkuZ2V0UHJvcGVydHkoXCJwcmVjaXNpb25cIikgPz8gMik7XG4gICAgICAgIGlmKCBwcmVjaXNpb24gPT09IHVuZGVmaW5lZCB8fCBwcmVjIDwgcHJlY2lzaW9uIClcbiAgICAgICAgICAgIHByZWNpc2lvbiA9IHByZWM7XG4gICAgfVxuXG4gICAgcHJlY2lzaW9uID8/PSAyO1xuICAgIHByZWNpc2lvbiArPSBkZWx0YV9wcmVjO1xuICAgIGlmKHByZWNpc2lvbiA8IDApXG4gICAgICAgIHByZWNpc2lvbiA9IDA7XG5cbiAgICBjZWxscy5mb3JtYXQoe3ByZWNpc2lvbn0pO1xufVxuXG5jb25zdCBmY3RzOiBSZWNvcmQ8c3RyaW5nLCB7IGFjdGlvbjogKGNlbGxzOiBDZWxsTGlzdCkgPT52b2lkLCBlbmFibGVkPzogKGNlbGxzOiBDZWxsTGlzdCkgPT4gYm9vbGVhbiB9PiA9IHtcbiAgICBcImZvcm1hdF96ZXJvX3AxXCI6IHtcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcbiAgICAgICAgICAgIHByZWNpc2lvbihjZWxscywgKzEpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcImZvcm1hdF96ZXJvX20xXCI6IHtcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcbiAgICAgICAgICAgIHByZWNpc2lvbihjZWxscywgLTEpO1xuICAgICAgICB9XG4gICAgfSxcImZvcm1hdF9wb3VyY2VudFwiOiB7XG4gICAgICAgIGFjdGlvbjogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG5cbiAgICAgICAgICAgIGlmKCBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxscykuZ2V0UHJvcGVydHkoJ2Zvcm1hdCcpID09PSBGb3JtYXRzLnBvdXJjZW50ICkge1xuICAgICAgICAgICAgICAgIGNlbGxzLmZvcm1hdChGb3JtYXRzLm51bWJlcik7IC8vIGg0Y2tcbiAgICAgICAgICAgICAgICBjZWxscy5mb3JtYXQoe2Zvcm1hdDogbnVsbH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNlbGxzLmZvcm1hdChGb3JtYXRzLnBvdXJjZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5hYmxlZDogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHMpLmdldFByb3BlcnR5KCdmb3JtYXQnKSA9PT0gRm9ybWF0cy5wb3VyY2VudDtcbiAgICAgICAgfVxuICAgIH0sXCJmb3JtYXRfbmJcIjoge1xuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuXG4gICAgICAgICAgICBpZiggRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHMpLmdldFByb3BlcnR5KCdmb3JtYXQnKSA9PT0gRm9ybWF0cy5udW1iZXIgKSB7XG4gICAgICAgICAgICAgICAgY2VsbHMuZm9ybWF0KHtmb3JtYXQ6IG51bGx9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjZWxscy5mb3JtYXQoRm9ybWF0cy5udW1iZXIpO1xuICAgICAgICB9LFxuICAgICAgICBlbmFibGVkOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcbiAgICAgICAgICAgIHJldHVybiBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxscykuZ2V0UHJvcGVydHkoJ2Zvcm1hdCcpID09PSBGb3JtYXRzLm51bWJlcjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJmb3JtYXRfbW9ubmFpZVwiOiB7XG4gICAgICAgIGFjdGlvbjogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG5cbiAgICAgICAgICAgIGlmKCBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxscykuZ2V0UHJvcGVydHkoJ2Zvcm1hdCcpID09PSBGb3JtYXRzLmV1cm9zICkge1xuICAgICAgICAgICAgICAgIGNlbGxzLmZvcm1hdCh7Zm9ybWF0OiBudWxsfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2VsbHMuZm9ybWF0KEZvcm1hdHMuZXVyb3MpO1xuICAgICAgICB9LFxuICAgICAgICBlbmFibGVkOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcbiAgICAgICAgICAgIHJldHVybiBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxscykuZ2V0UHJvcGVydHkoJ2Zvcm1hdCcpID09PSBGb3JtYXRzLmV1cm9zO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcImZvcm1hdF9kYXRlXCI6IHtcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcblxuICAgICAgICAgICAgaWYoIEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzKS5nZXRQcm9wZXJ0eSgnZm9ybWF0JykgPT09IEZvcm1hdHMuZGF0ZSApIHtcbiAgICAgICAgICAgICAgICBjZWxscy5mb3JtYXQoRm9ybWF0cy5udW1iZXIpOyAvLyBoNGNrXG4gICAgICAgICAgICAgICAgY2VsbHMuZm9ybWF0KHtmb3JtYXQ6IG51bGx9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjZWxscy5mb3JtYXQoRm9ybWF0cy5kYXRlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5hYmxlZDogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHMpLmdldFByb3BlcnR5KCdmb3JtYXQnKSA9PT0gRm9ybWF0cy5kYXRlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcInJldHJhaXRfbTFcIjoge1xuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuICAgICAgICAgICAgcmV0cmFpdChjZWxscywgLTEpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcInJldHJhaXRfcDFcIjogeyAvLyBUT0RPOiBtMS4uLlxuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuICAgICAgICAgICAgcmV0cmFpdChjZWxscywgKzEpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcImJvcmRlclwiOiB7XG4gICAgICAgIGFjdGlvbjogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG4gICAgICAgICAgICBjZWxscy5mb3JtYXQoe1xuICAgICAgICAgICAgICAgIGJvcmRlcl90b3A6IHRydWUsXG4gICAgICAgICAgICAgICAgYm9yZGVyX2JvdHRvbTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBib3JkZXJfbGVmdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBib3JkZXJfcmlnaHQ6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcInVubWVyZ2VcIjoge1xuICAgICAgICBhY3Rpb246IHVubWVyZ2VcbiAgICB9LFxuICAgIFwibWVyZ2VcIjoge1xuICAgICAgICBhY3Rpb246IG1lcmdlXG4gICAgfSxcbiAgICBcIm1lcmdlX2NlbnRlclwiOiB7XG4gICAgICAgIGFjdGlvbjogZnVuY3Rpb24oY2VsbGxpc3Q6IENlbGxMaXN0KSB7XG5cbiAgICAgICAgICAgIGxldCB1bm1lcmdlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCBzaGVldCA9IGNlbGxsaXN0LnNoZWV0O1xuXG4gICAgICAgICAgICBmb3IobGV0IGNlbGwgb2YgY2VsbGxpc3QuY2VsbHMpXG4gICAgICAgICAgICAgICAgaWYoIEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGwpLmhhc1Byb3BlcnR5KFwic3BhblwiKSApIHtcbiAgICAgICAgICAgICAgICAgICAgdW5tZXJnZSggbmV3IENlbGxMaXN0KHNoZWV0LCBbY2VsbF0pICk7XG4gICAgICAgICAgICAgICAgICAgIHVubWVyZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHVubWVyZ2VkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgbWVyZ2UoY2VsbGxpc3QsIHRydWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbmFibGVkOiBmdW5jdGlvbihjZWxsbGlzdDogQ2VsbExpc3QpIHtcblxuICAgICAgICAgICAgZm9yKGxldCBjZWxsIG9mIGNlbGxsaXN0LmNlbGxzKVxuICAgICAgICAgICAgICAgIGlmKCBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxsKS5oYXNQcm9wZXJ0eShcInNwYW5cIikgKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBjc3MgPSBgXG4gICAgOmhvc3Qge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xuXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogMS41ZW07XG4gICAgfVxuXG4gICAgOmhvc3QgLnZiYXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYmFiYWI7XG4gICAgICAgIGhlaWdodDogMWVtO1xuICAgIH1cblxuICAgIDpob3N0IHNlbGVjdCB7XG4gICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuYFxuXG5jb25zdCBpdGVtY3NzID0gYFxuXG4gICAgOmhvc3Qge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgOmhvc3QoW2Rpc2FibGVkXSkge1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cblxuICAgIDpob3N0KFt2YWx1ZV0pIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgICB9XG5cbiAgICA6aG9zdCwgOmhvc3QgPiBkaXYge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICA6aG9zdCB7XG4gICAgICAgIHBhZGRpbmc6IDFweDtcbiAgICB9XG5cbiAgICA6aG9zdCA+IGRpdiB7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IGNhbGMoIDEuMmVtIC0gMXB4ICk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtMXB4O1xuICAgICAgICByaWdodDogLTFweDtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IGNhbGMoICggMS4yZW0gLSAxcHggLSAycHggKSAvIDIgKTtcbiAgICAgICAgICAgIHJpZ2h0OiAxcHg7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgd2lkdGg6IDA7IFxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgLS1zaXplOiA0cHg7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogdmFyKC0tc2l6ZSkgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IHZhcigtLXNpemUpIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBib3JkZXItdG9wOiB2YXIoLS1zaXplKSBzb2xpZCBibGFjaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIDpob3N0KDpob3Zlcjpub3QoLmVuYWJsZWQpKSwgOmhvc3QoOmhvdmVyOm5vdCguZW5hYmxlZCkpID4gZGl2IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk2OTY5NjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIH1cblxuICAgIDpob3N0KC5lbmFibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiNmI2YjY7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjliOWI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB9XG5gO1xuXG5leHBvcnQgY2xhc3MgQ2FsY1Rvb2xiYXJJdGVtIGV4dGVuZHMgTElTUyh7XG4gICAgY3NzOiBpdGVtY3NzXG59KSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb250ZW50LnNyYyA9IGAuLi8uLi8uLi8uLi9hc3NldHMvdGFibGV1ci9pbWcvdG9vbGJhci8ke3RoaXMuaG9zdC5nZXRBdHRyaWJ1dGUoJ25hbWUnKX0ucG5nYDtcblxuICAgICAgICBpZiggISB0aGlzLmhvc3QuaGFzQXR0cmlidXRlKCd2YWx1ZScpICkge1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCggY29udGVudCApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGxldCBjb2xvcl9waWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFt0eXBlPVwiY29sb3JcIl0nKTtcbiAgICAgICAgICAgIGlmKCBjb2xvcl9waWNrZXIgPT09IG51bGwgKSB7XG4gICAgICAgICAgICAgICAgY29sb3JfcGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBjb2xvcl9waWNrZXIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNvbG9yXCIpO1xuICAgICAgICAgICAgICAgIGNvbG9yX3BpY2tlci5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgY29sb3JfcGlja2VyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjYW5jZWwnKSk7XG5cbiAgICAgICAgICAgIGxldCBjYW5jZWwgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbG9yX3BpY2tlci5hZGRFdmVudExpc3RlbmVyKCdjYW5jZWwnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FuY2VsID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG5cbiAgICAgICAgICAgIGNvbG9yX3BpY2tlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXYpID0+IHtcbiAgICAgICAgICAgICAgICBpZiggY2FuY2VsIClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5ob3N0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjb2xvcl9waWNrZXIudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJjbGlja1wiLCB7YnViYmxlczogdHJ1ZX0pICk7XG5cbiAgICAgICAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNvbG9yX3BpY2tlcik7XG4gICAgICAgICAgICBjb2xvcl9waWNrZXIuY2xpY2soKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCggY29udGVudCwgc3BhbiApO1xuICAgIH1cbn1cblxuTElTUy5kZWZpbmUoJ2NhbGMtdG9vbGJhci1pdGVtJywgQ2FsY1Rvb2xiYXJJdGVtKTtcblxuZXhwb3J0IGNsYXNzIENhbGNUb29sYmFyIGV4dGVuZHMgTElTUyh7XG4gICAgY29udGVudCxcbiAgICBjc3Ncbn0pIHtcblxuICAgICNidG5zOiBSZWNvcmQ8c3RyaW5nLCBIVE1MRWxlbWVudD4gPSB7fTtcblxuICAgIGRpc2FibGVBbGxFeGNlcHQoLi4uZXhjZXB0aW9uOiBzdHJpbmdbXSkge1xuICAgICAgICBmb3IobGV0IGJ0bl9uYW1lIGluIHRoaXMuI2J0bnMpXG4gICAgICAgICAgICBpZiggISBleGNlcHRpb24uaW5jbHVkZXMoYnRuX25hbWUpIClcbiAgICAgICAgICAgICAgICB0aGlzLiNidG5zW2J0bl9uYW1lXS50b2dnbGVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIFxuICAgICAgICBpZiggISBleGNlcHRpb24uaW5jbHVkZXMoXCJmb250X3NpemVcIikgKVxuICAgICAgICAgICAgdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNlbGVjdEVsZW1lbnQ+KCcuZm9udF9zaXplJykhLnRvZ2dsZUF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBsZXQgZm9udF9zaXplcyA9IFtcbiAgICAgICAgICAgIDYsIDcsIDgsIDksIDEwLCAxMC41LCAxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxOCwgMjAsIDIxLCAyMiwgMjQsIDI2LCAyOCwgMzIsIDM2LCA0MCwgNDIsIDQ0LCA0OCwgNTQsIDYwLCA2NiwgNzIsIDgwLCA4OCwgOTZcbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBidG5zID0gdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCdjYWxjLXRvb2xiYXItaXRlbScpO1xuICAgICAgICBmb3IobGV0IGJ0biBvZiBidG5zKVxuICAgICAgICAgICAgdGhpcy4jYnRuc1tidG4uZ2V0QXR0cmlidXRlKCduYW1lJykhXSA9IGJ0bjtcblxuICAgICAgICBjb25zdCBmb250X3NpemVzX3NlbGVjdCA9IHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yPEhUTUxTZWxlY3RFbGVtZW50PignLmZvbnRfc2l6ZScpITtcbiAgICAgICAgZm9yKGxldCBmb250X3NpemUgb2YgZm9udF9zaXplcykge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gbmV3IE9wdGlvbihgJHtmb250X3NpemUudG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgJywnKX0gcHRgLCBgJHtmb250X3NpemV9cHRgKTtcbiAgICAgICAgICAgIGZvbnRfc2l6ZXNfc2VsZWN0LmFwcGVuZChvcHRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGVsZW0gPSBldi50YXJnZXQhIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgaWYoIGVsZW0udGFnTmFtZSAhPT0gJ0NBTEMtVE9PTEJBUi1JVEVNJylcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGNvbnN0IG4gPSBlbGVtLmdldEF0dHJpYnV0ZSgnbmFtZScpISBhcyBrZXlvZiB0eXBlb2YgZmN0cztcbiAgICAgICAgICAgIGlmKCBlbGVtLmdldEF0dHJpYnV0ZSgndHlwZScpID09PSAnZmN0Jykge1xuXG4gICAgICAgICAgICAgICAgZmN0c1tuXS5hY3Rpb24odGhpcy4jc2hlZXQuc2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLiN1cGRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAgZWxlbS5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGVsZW0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlbGVtLmNsYXNzTGlzdC50b2dnbGUoJ2VuYWJsZWQnKTtcblxuICAgICAgICAgICAgbGV0IGZvcm1hdCA9IG5ldyBGb3JtYXQoe1tuXTogdmFsdWUgfSk7XG4gICAgICAgICAgICBmb3JtYXQuYXBwbHlUbyggdGhpcy4jc2hlZXQuc2VsZWN0aW9uICk7XG4gICAgICAgICAgICB0aGlzLiN1cGRhdGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9udF9zaXplc19zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIC8vVE9ETy4uLlxuICAgICAgICAgICAgbGV0IGZvcm1hdCA9IG5ldyBGb3JtYXQoe2ZvbnRfc2l6ZTogZm9udF9zaXplc19zZWxlY3QudmFsdWV9KTtcbiAgICAgICAgICAgIGZvcm1hdC5hcHBseVRvKCB0aGlzLiNzaGVldC5zZWxlY3Rpb24gKTtcbiAgICAgICAgICAgIHRoaXMuI3VwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAjc2hlZXQhOkNhbGNTaGVldDtcblxuXG4gICAgI3VwZGF0ZSgpIHtcblxuICAgICAgICBpZiggdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmNlbGxzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBjb25zdCBmb3JtYXQgPSBGb3JtYXQuZXh0cmFjdEZvcm1hdCh0aGlzLiNzaGVldC5zZWxlY3Rpb24pO1xuXG4gICAgICAgIGZvcihsZXQgbmFtZSBpbiB0aGlzLiNidG5zKSB7XG5cbiAgICAgICAgICAgIGxldCBlbmFibGVkID0gZm9ybWF0LmdldFByb3BlcnR5KG5hbWUpID09PSB0cnVlO1xuICAgICAgICAgICAgaWYobmFtZSBpbiBmY3RzKVxuICAgICAgICAgICAgICAgIGVuYWJsZWQgPSBmY3RzW25hbWUgYXMga2V5b2YgdHlwZW9mIGZjdHNdLmVuYWJsZWQ/Lih0aGlzLiNzaGVldC5zZWxlY3Rpb24pID8/IGZhbHNlO1xuXG4gICAgICAgICAgICB0aGlzLiNidG5zW25hbWVdLmNsYXNzTGlzdC50b2dnbGUoJ2VuYWJsZWQnLCBlbmFibGVkIClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vVE9ETy4uLlxuICAgICAgICBjb25zdCBmb250X3NpemVzX3NlbGVjdCA9IHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yPEhUTUxTZWxlY3RFbGVtZW50PignLmZvbnRfc2l6ZScpITtcbiAgICAgICAgZm9udF9zaXplc19zZWxlY3QudmFsdWUgPSBmb3JtYXQuZ2V0UHJvcGVydHkoJ2ZvbnRfc2l6ZScpO1xuICAgICAgICAvL1RPRE86IHVwZGF0ZS4uLlxuICAgIH1cblxuICAgIHN5bmNUbyhzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcblxuXG4gICAgICAgIHNoZWV0LnNlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXYpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI3VwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4jdXBkYXRlKCk7XG5cbiAgICB9XG5cbn1cblxuTElTUy5kZWZpbmUoJ2NhbGMtdG9vbGJhcicsIENhbGNUb29sYmFyKTsiLCJleHBvcnQgZGVmYXVsdCBbXG4gICAge1xuICAgICAgICBuYW1lIDogXCJSIDEtMDEgVGFibGV1ciBldCBSZXBvcnRpbmdcIixcbiAgICAgICAgc25hbWU6IFwiUjEtMDEgVGFibGV1clwiLFxuICAgICAgICBwYXRoIDogXCJSMS0wMVwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ01cIixcbiAgICAgICAgICAgICAgICBwYXRoOiBcIkNNXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgXCJDTTFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDTTJcIlxuICAgICAgICAgICAgICAgIF1cblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlRQXCIsXG4gICAgICAgICAgICAgICAgcGF0aDogXCJUUFwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiVFAxXCJcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiUiAxLTAyIEJhc2VzIGRlIERvbm7DqWVzIFJlbGF0aW9ubmVsbGVzIDFcIixcbiAgICAgICAgc25hbWU6IFwiUjEtMDIgQkRSMVwiLFxuICAgICAgICBwYXRoIDogXCJSMS0wMlwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgXCJDTVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiVFBcIiAsXG4gICAgICAgICAgICAgICAgcGF0aCA6IFwiVFBcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIlRQMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQMlwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQM1wiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQNFwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQNVwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IHJvb3RfcGF0aCA9IFtcImxvY2FsaG9zdFwiLCBcIjEyNy4wLjAuMVwiXS5pbmNsdWRlcyhsb2NhdGlvbi5ob3N0bmFtZSkgPyBcIi9kaXN0L2Rldi9wYWdlcy9cIiA6IFwiL0NvdXJzL2Rpc3QvZGV2L3BhZ2VzL1wiOyIsIlxuaW1wb3J0IHBhZ2VzLCB7cm9vdF9wYXRofSBmcm9tIFwiLi9jb250ZW50XCI7XG5cbi8qXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JlcHJpbnQnLCAoKSA9PiB7XG4gIC8vLi4uXG59KTtcbiovXG5cbi8vVE9ETzogbGlua3MuLi5cbmNvbnN0IG1haW4gICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpITtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIikhO1xuXG5jb25zdCB0aXRsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcImgxLCBoMiwgaDMsIGg0XCIpO1xuXG50eXBlIE5vZGUgPSB7XG4gICAgaHRtbCAgICA6IEhUTUxFbGVtZW50LFxuICAgIGxldmVsICAgOiBudW1iZXIsXG4gICAgcGFyZW50ICA6IG51bGx8Tm9kZSxcbiAgICBjaGlsZHJlbjogTm9kZVtdXG59O1xuXG5jb25zdCBodHJlZTogTm9kZSA9IHtcbiAgICBodG1sICAgIDogbWFpbixcbiAgICBsZXZlbCAgIDogMCxcbiAgICBwYXJlbnQgIDogbnVsbCxcbiAgICBjaGlsZHJlbjogW10sXG59O1xubGV0IGh0cmVlX2N1cnNvciA9IGh0cmVlO1xuZm9yKGxldCB0aXRsZSBvZiB0aXRsZXMpIHtcbiAgICBjb25zdCBsZXZlbCA9ICt0aXRsZS50YWdOYW1lLnNsaWNlKDEpO1xuICAgIFxuICAgIHdoaWxlKCBsZXZlbCA8PSBodHJlZV9jdXJzb3IubGV2ZWwgKVxuICAgICAgICBodHJlZV9jdXJzb3IgPSBodHJlZV9jdXJzb3IucGFyZW50ITtcblxuICAgIGNvbnN0IGVsZW06IE5vZGUgPSB7XG4gICAgICAgIGh0bWw6IHRpdGxlLFxuICAgICAgICBsZXZlbCxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICBwYXJlbnQ6IGh0cmVlX2N1cnNvclxuICAgIH07XG5cblxuICAgIGh0cmVlX2N1cnNvci5jaGlsZHJlbi5wdXNoKGVsZW0pO1xuXG4gICAgaHRyZWVfY3Vyc29yID0gZWxlbTtcbn1cblxuZnVuY3Rpb24gc2VhcmNoQ3VySGVhZGVyKGh0cmVlOiBOb2RlLCBwb3NpdGlvbjogbnVtYmVyKTogbnVsbCB8IE5vZGUge1xuXG4gICAgY29uc3QgaGVhZGVycyA9IGh0cmVlLmNoaWxkcmVuO1xuXG4gICAgZm9yKGxldCBpID0gaGVhZGVycy5sZW5ndGggLSAxOyBpID49IDA7IC0taSlcbiAgICAgICAgaWYoIGhlYWRlcnNbaV0uaHRtbC5vZmZzZXRUb3AgPD0gcG9zaXRpb24gKyAzMiApXG4gICAgICAgICAgICByZXR1cm4gc2VhcmNoQ3VySGVhZGVyKGhlYWRlcnNbaV0sIHBvc2l0aW9uKSA/PyBoZWFkZXJzW2ldO1xuXG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmNvbnN0IGhpZCA9IFtcbiAgICBbXSxcbiAgICBbXCJJXCIsIFwiSUlcIiwgXCJJSUlcIiwgXCJJVlwiXSxcbiAgICBbXCIxXCIsIFwiMlwiLFwiM1wiLFwiNVwiLFwiNlwiLFwiN1wiLFwiOFwiLFwiOVwiXSxcbiAgICBbXCJhXCIsIFwiYlwiLFwiY1wiLFwiZFwiLFwiZVwiLFwiZlwiLFwiZ1wiLFwiaFwiXSxcbl1cblxuZnVuY3Rpb24gZ2V0VGl0bGVQcmVmaXgoczogTm9kZSkge1xuXG4gICAgaWYoIHMubGV2ZWwgPj0gaGlkLmxlbmd0aCApXG4gICAgICAgIHJldHVybiBcIlwiO1xuXG4gICAgY29uc3QgaWR4ID0gcy5wYXJlbnQhLmNoaWxkcmVuLmluZGV4T2Yocyk7XG5cbiAgICBjb25zdCBudW0gPSBoaWRbcy5sZXZlbF1baWR4XTtcblxuICAgIHJldHVybiBgJHtudW19LiBgO1xufVxuXG5mdW5jdGlvbiBidWlsZE1lbnUobm9kZXM6IE5vZGVbXSkge1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICAgIG1lbnUuYXBwZW5kKCAuLi4gbm9kZXMubWFwKCAocyxpZHgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBpdGVtLnRleHRDb250ZW50PSBgJHtnZXRUaXRsZVByZWZpeChzKX0ke3MuaHRtbC50ZXh0Q29udGVudH1gO1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgYCMke3MuaHRtbC5pZH1gKTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSkgKTtcblxuICAgIHJldHVybiBtZW51O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVIZWFkZXIoKSB7XG5cbiAgICBjb25zdCBsYXN0ID0gc2VhcmNoQ3VySGVhZGVyKCBodHJlZSwgbWFpbi5zY3JvbGxUb3ApITtcblxuICAgIGxldCBoZWFkZXJzID0gW107XG4gICAgbGV0IGN1cnNvciAgPSBsYXN0O1xuXG4gICAgd2hpbGUoY3Vyc29yLmh0bWwgIT09IG1haW4pIHtcbiAgICAgICAgaGVhZGVycy5wdXNoKGN1cnNvcik7XG4gICAgICAgIGN1cnNvciA9IGN1cnNvci5wYXJlbnQhO1xuICAgIH1cblxuICAgIGNvbnN0IGh0bWwgPSBoZWFkZXJzLnJldmVyc2UoKS5tYXAoIChobm9kZSxpKSA9PiB7XG5cbiAgICAgICAgY29uc3QgaCA9IGhub2RlLmh0bWw7XG4gICAgICAgIGNvbnN0IGhfaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgbGluay50ZXh0Q29udGVudCA9IGAke2dldFRpdGxlUHJlZml4KGhub2RlKX0ke2gudGV4dENvbnRlbnR9YDtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgIyR7aC5pZH1gKTtcblxuICAgICAgICBjb25zdCBtZW51ID0gYnVpbGRNZW51KGhub2RlLnBhcmVudCEuY2hpbGRyZW4pO1xuICAgICAgICBoX2h0bWwuYXBwZW5kKGxpbmssIG1lbnUpO1xuXG4gICAgICAgIHJldHVybiBoX2h0bWw7XG4gICAgfSk7XG5cbiAgICBpZiggbGFzdC5jaGlsZHJlbi5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgZW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgICAgICBlbXB0eS5hcHBlbmQoIGJ1aWxkTWVudShsYXN0LmNoaWxkcmVuKSApO1xuXG4gICAgICAgIGh0bWwucHVzaChlbXB0eSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlX3BhZ2VfaHJlZihwYXRocHJlZml4OiBzdHJpbmcsIHBhdGg6IHN0cmluZywgZGVzYzogYW55KSB7XG5cbiAgICAgICAgbGV0IGhyZWYgPSBgJHtwYXRocHJlZml4fSR7cGF0aH0vYDtcblxuICAgICAgICB3aGlsZShkZXNjLmNoaWxkcmVuPy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRlc2MgPSBkZXNjLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgaHJlZiArPSBgJHtkZXNjLnBhdGggPz8gZGVzY30vYDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBocmVmO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VfcGFnZV9tZW51KHBhdGhwcmVmaXg6IHN0cmluZywgcGF0aDogc3RyaW5nLCBwYWdlczogYW55KSB7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBwYWdlcy5maW5kKCAocGFnZTogYW55KSA9PiBwYWdlID09PSBwYXRoIHx8IHBhZ2UucGF0aCA9PT0gcGF0aCApITtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgbGluay50ZXh0Q29udGVudCA9IGRlc2Muc25hbWUgPz8gZGVzYy5uYW1lID8/IGRlc2M7XG4gICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIG1ha2VfcGFnZV9ocmVmKHBhdGhwcmVmaXgsIHBhdGgsIGRlc2MpICk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gICAgXG4gICAgICAgICAgICBtZW51LmFwcGVuZCggLi4uIHBhZ2VzLm1hcCggKHBhZ2U6YW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQ9IHBhZ2UubmFtZSA/PyBwYWdlO1xuICAgICAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBtYWtlX3BhZ2VfaHJlZihwYXRocHJlZml4LCBwYWdlLnBhdGg/P3BhZ2UsIHBhZ2UpICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9KSApO1xuICAgIFxuICAgICAgICAgICAgaHRtbC5hcHBlbmQobGluaywgbWVudSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gICAgXG4gICAgbGV0IGN1cnBhZ2UgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc2xpY2Uocm9vdF9wYXRoLmxlbmd0aCkuc3BsaXQoJy8nKTtcblxuICAgIGNvbnN0IG1vZHVsZV9odG1sID0gbWFrZV9wYWdlX21lbnUocm9vdF9wYXRoLCBjdXJwYWdlWzBdLCBwYWdlcyk7XG5cbiAgICBjb25zdCBkZXNjID0gcGFnZXMuZmluZCggKHBhZ2U6IGFueSkgPT4gcGFnZS5wYXRoID09PSBjdXJwYWdlWzBdICkhO1xuICAgIGNvbnN0IHR5cGVfaHRtbCAgID0gbWFrZV9wYWdlX21lbnUocm9vdF9wYXRoICsgY3VycGFnZVswXSArIFwiL1wiLCBjdXJwYWdlWzFdLCBkZXNjLmNoaWxkcmVuKTtcblxuICAgIGNvbnN0IGRlc2NfdHlwZSA9IGRlc2MuY2hpbGRyZW4uZmluZCggKHBhZ2U6IGFueSkgPT4gKHBhZ2U/LnBhdGggPz8gcGFnZSkgPT09IGN1cnBhZ2VbMV0gKSE7XG4gICAgaWYoIHR5cGVvZiBkZXNjX3R5cGUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgLy8gdGl0bGUgbnVtXG4gICAgICAgIGNvbnN0IGRlc2MyX2lkeCA9IGRlc2NfdHlwZS5jaGlsZHJlbi5maW5kSW5kZXgoIChwYWdlOiBhbnkpID0+IHBhZ2U/LnBhdGggPz8gcGFnZSA9PT0gY3VycGFnZVsyXSApITtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taGVhZGVyX3N0YXJ0X2lkXCIsIGAke2Rlc2MyX2lkeH1gKTtcbiAgICAgICAgLy8gbWVudVxuICAgICAgICBjb25zdCBzZXNzaW9uX2h0bWwgICA9IG1ha2VfcGFnZV9tZW51KHJvb3RfcGF0aCArIGN1cnBhZ2VbMF0gKyBcIi9cIisgY3VycGFnZVsxXSArIFwiL1wiLCBjdXJwYWdlWzJdLCBkZXNjX3R5cGUuY2hpbGRyZW4pO1xuICAgICAgICBodG1sWzBdID0gc2Vzc2lvbl9odG1sO1xuICAgIH1cblxuICAgIGhlYWRlci5yZXBsYWNlQ2hpbGRyZW4obW9kdWxlX2h0bWwsIHR5cGVfaHRtbCwgLi4uaHRtbCk7XG59XG5cbm1haW4uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlSGVhZGVyKTtcbnVwZGF0ZUhlYWRlcigpOyIsIi8vaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDk0MTQzL2NyZWF0aW5nLWEtbmV3LWRvbS1lbGVtZW50LWZyb20tYW4taHRtbC1zdHJpbmctdXNpbmctYnVpbHQtaW4tZG9tLW1ldGhvZHMtb3ItcHJvXG5leHBvcnQgZnVuY3Rpb24gc3RyMmh0bWw8VCBleHRlbmRzIEhUTUxFbGVtZW50PihodG1sOiBzdHJpbmcpOiBUIHtcbiAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIGh0bWwgPSBodG1sLnRyaW0oKTsgLy8gTmV2ZXIgcmV0dXJuIGEgdGV4dCBub2RlIG9mIHdoaXRlc3BhY2UgYXMgdGhlIHJlc3VsdFxuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQhIGFzIFQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHIyREYoaHRtbDogc3RyaW5nKTogRG9jdW1lbnRGcmFnbWVudCB7XG4gICAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICBodG1sID0gaHRtbC50cmltKCk7IC8vIE5ldmVyIHJldHVybiBhIHRleHQgbm9kZSBvZiB3aGl0ZXNwYWNlIGFzIHRoZSByZXN1bHRcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJ2YXIgd2VicGFja1F1ZXVlcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgcXVldWVzXCIpIDogXCJfX3dlYnBhY2tfcXVldWVzX19cIjtcbnZhciB3ZWJwYWNrRXhwb3J0cyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgZXhwb3J0c1wiKSA6IFwiX193ZWJwYWNrX2V4cG9ydHNfX1wiO1xudmFyIHdlYnBhY2tFcnJvciA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgZXJyb3JcIikgOiBcIl9fd2VicGFja19lcnJvcl9fXCI7XG52YXIgcmVzb2x2ZVF1ZXVlID0gKHF1ZXVlKSA9PiB7XG5cdGlmKHF1ZXVlICYmIHF1ZXVlLmQgPCAxKSB7XG5cdFx0cXVldWUuZCA9IDE7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0pKTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSA/IGZuLnIrKyA6IGZuKCkpKTtcblx0fVxufVxudmFyIHdyYXBEZXBzID0gKGRlcHMpID0+IChkZXBzLm1hcCgoZGVwKSA9PiB7XG5cdGlmKGRlcCAhPT0gbnVsbCAmJiB0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKSB7XG5cdFx0aWYoZGVwW3dlYnBhY2tRdWV1ZXNdKSByZXR1cm4gZGVwO1xuXHRcdGlmKGRlcC50aGVuKSB7XG5cdFx0XHR2YXIgcXVldWUgPSBbXTtcblx0XHRcdHF1ZXVlLmQgPSAwO1xuXHRcdFx0ZGVwLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFeHBvcnRzXSA9IHI7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9LCAoZSkgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0Vycm9yXSA9IGU7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9KTtcblx0XHRcdHZhciBvYmogPSB7fTtcblx0XHRcdG9ialt3ZWJwYWNrUXVldWVzXSA9IChmbikgPT4gKGZuKHF1ZXVlKSk7XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0fVxuXHR2YXIgcmV0ID0ge307XG5cdHJldFt3ZWJwYWNrUXVldWVzXSA9IHggPT4ge307XG5cdHJldFt3ZWJwYWNrRXhwb3J0c10gPSBkZXA7XG5cdHJldHVybiByZXQ7XG59KSk7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmEgPSAobW9kdWxlLCBib2R5LCBoYXNBd2FpdCkgPT4ge1xuXHR2YXIgcXVldWU7XG5cdGhhc0F3YWl0ICYmICgocXVldWUgPSBbXSkuZCA9IC0xKTtcblx0dmFyIGRlcFF1ZXVlcyA9IG5ldyBTZXQoKTtcblx0dmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcblx0dmFyIGN1cnJlbnREZXBzO1xuXHR2YXIgb3V0ZXJSZXNvbHZlO1xuXHR2YXIgcmVqZWN0O1xuXHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWopID0+IHtcblx0XHRyZWplY3QgPSByZWo7XG5cdFx0b3V0ZXJSZXNvbHZlID0gcmVzb2x2ZTtcblx0fSk7XG5cdHByb21pc2Vbd2VicGFja0V4cG9ydHNdID0gZXhwb3J0cztcblx0cHJvbWlzZVt3ZWJwYWNrUXVldWVzXSA9IChmbikgPT4gKHF1ZXVlICYmIGZuKHF1ZXVlKSwgZGVwUXVldWVzLmZvckVhY2goZm4pLCBwcm9taXNlW1wiY2F0Y2hcIl0oeCA9PiB7fSkpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IHByb21pc2U7XG5cdGJvZHkoKGRlcHMpID0+IHtcblx0XHRjdXJyZW50RGVwcyA9IHdyYXBEZXBzKGRlcHMpO1xuXHRcdHZhciBmbjtcblx0XHR2YXIgZ2V0UmVzdWx0ID0gKCkgPT4gKGN1cnJlbnREZXBzLm1hcCgoZCkgPT4ge1xuXHRcdFx0aWYoZFt3ZWJwYWNrRXJyb3JdKSB0aHJvdyBkW3dlYnBhY2tFcnJvcl07XG5cdFx0XHRyZXR1cm4gZFt3ZWJwYWNrRXhwb3J0c107XG5cdFx0fSkpXG5cdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdFx0Zm4gPSAoKSA9PiAocmVzb2x2ZShnZXRSZXN1bHQpKTtcblx0XHRcdGZuLnIgPSAwO1xuXHRcdFx0dmFyIGZuUXVldWUgPSAocSkgPT4gKHEgIT09IHF1ZXVlICYmICFkZXBRdWV1ZXMuaGFzKHEpICYmIChkZXBRdWV1ZXMuYWRkKHEpLCBxICYmICFxLmQgJiYgKGZuLnIrKywgcS5wdXNoKGZuKSkpKTtcblx0XHRcdGN1cnJlbnREZXBzLm1hcCgoZGVwKSA9PiAoZGVwW3dlYnBhY2tRdWV1ZXNdKGZuUXVldWUpKSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGZuLnIgPyBwcm9taXNlIDogZ2V0UmVzdWx0KCk7XG5cdH0sIChlcnIpID0+ICgoZXJyID8gcmVqZWN0KHByb21pc2Vbd2VicGFja0Vycm9yXSA9IGVycikgOiBvdXRlclJlc29sdmUoZXhwb3J0cykpLCByZXNvbHZlUXVldWUocXVldWUpKSk7XG5cdHF1ZXVlICYmIHF1ZXVlLmQgPCAwICYmIChxdWV1ZS5kID0gMCk7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnbW9kdWxlJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00yL2luZGV4LnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMi9pbmRleC5jc3NcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTIvaW5kZXgubWRcIik7XG4iLCIiXSwibmFtZXMiOlsiU2hhZG93Q2ZnIiwiX19jc3RyX2hvc3QiLCJDQU5fSEFWRV9TSEFET1ciLCJfY2FuSGFzU2hhZG93IiwidGFnIiwiaW5jbHVkZXMiLCJfZWxlbWVudDJ0YWduYW1lIiwiTElTUyIsImV4dGVuZHMiLCJwX2V4dGVuZHMiLCJob3N0IiwicF9ob3N0IiwiZGVwZW5kZW5jaWVzIiwicF9kZXBzIiwiYXR0cmlidXRlcyIsInBfYXR0cnMiLCJwYXJhbXMiLCJjb250ZW50IiwiY3NzIiwic2hhZG93IiwicF9zaGFkb3ciLCJIVE1MRWxlbWVudCIsIl9leHRlbmRzIiwiT2JqZWN0IiwiY2FuSGFzU2hhZG93IiwiRXJyb3IiLCJ1bmRlZmluZWQiLCJwdXNoIiwiSFRNTFRlbXBsYXRlRWxlbWVudCIsImlubmVySFRNTCIsInRyaW0iLCJSZXNwb25zZSIsInRleHQiLCJMSVNTQmFzZSIsIlBhcmFtZXRlcnMiLCJzdHlsZXNoZWV0cyIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImZldGNoX2NzcyIsIkNTU1N0eWxlU2hlZXQiLCJIVE1MU3R5bGVFbGVtZW50Iiwic2hlZXQiLCJzdHlsZSIsInJlcGxhY2UiLCJtYXAiLCJpZHgiLCJjb25zdHJ1Y3RvciIsImF0dHJzIiwic2V0QXR0ckRlZmF1bHQiLCJhdHRyIiwidmFsdWUiLCJvbkF0dHJDaGFuZ2VkIiwiX25hbWUiLCJfb2xkVmFsdWUiLCJfbmV3VmFsdWUiLCJpc0luRE9NIiwib25ET01Db25uZWN0ZWQiLCJvbkRPTURpc2Nvbm5lY3RlZCIsImV4dGVuZHNMSVNTIiwiTGlzcyIsInBhcmFtZXRlcnMiLCJhc3NpZ24iLCJFeHRlbmRlZExJU1MiLCJ0IiwiaWQiLCJidWlsZExJU1NIb3N0IiwiX3BhcmFtcyIsImFscmVhZHlEZWNsYXJlZENTUyIsIlNldCIsIkdFVCIsIlN5bWJvbCIsIlNFVCIsInByb3BlcnRpZXMiLCJmcm9tRW50cmllcyIsIm4iLCJlbnVtZXJhYmxlIiwiZ2V0Iiwic2V0IiwiQXR0cmlidXRlcyIsIm5hbWUiLCJkYXRhIiwiZGVmYXVsdHMiLCJzZXR0ZXIiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiTElTU0hvc3RCYXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJpc0luaXQiLCJpbml0aWFsaXplIiwiYXBpIiwiaW5pdCIsIkxJU1NTeW5jIiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCJjb25uZWN0ZWRDYWxsYmFjayIsImN1c3RvbUVsZW1lbnRzIiwidXBncmFkZSIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwib25DbGlja0V2ZW50Iiwib2JzIiwiZ2V0QXR0cmlidXRlIiwiYWRvcHRlZFN0eWxlU2hlZXRzIiwic2hhcmVkQ1NTIiwiY3Nzc2VsZWN0b3IiLCJDU1NTZWxlY3RvciIsImhhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImh0bWxfc3R5bGVzaGVldHMiLCJydWxlIiwiY3NzUnVsZXMiLCJjc3NUZXh0IiwiaGVhZCIsImFwcGVuZCIsImFkZCIsInRlbXBsYXRlX2VsZW0iLCJzdHIiLCJfIiwibWF0Y2giLCJjaGlsZE5vZGVzIiwib2JqIiwiaGFzU2hhZG93IiwiZ2V0UGFydCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRQYXJ0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0YWdOYW1lIiwicmVtb3ZlQXR0cmlidXRlIiwib2JzZXJ2ZWRBdHRyaWJ1dGVzIiwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIiwib2xkVmFsdWUiLCJuZXdWYWx1ZSIsIl9ET01Db250ZW50TG9hZGVkIiwicmVhZHlTdGF0ZSIsImRlZmluZSIsInRhZ25hbWUiLCJDb21wb25lbnRDbGFzcyIsIkNsYXNzIiwiaHRtbHRhZyIsImFsbCIsIkxJU1NjbGFzcyIsIm9wdHMiLCJpbnNlcnRHbG9iYWxDU1NSdWxlcyIsImNzc19zdHlsZSIsInJlcGxhY2VTeW5jIiwiaW5zZXJ0UnVsZSIsIkRFTEVHQVRFRF9FVkVOVFMiLCJBTFJFQURZX1BST0NFU1NFRCIsImV2IiwiaGFuZGxlcnMiLCJ0eXBlIiwiZWxlbSIsImNvbXBvc2VkUGF0aCIsIlNoYWRvd1Jvb3QiLCJ3aW5kb3ciLCJ0YXJnZXQiLCJzZWxlY3RvciIsImhhbmRsZXIiLCJtYXRjaGVzIiwiaW5zZXJ0R2xvYmFsRGVsZWdhdGVkTGlzdGVuZXIiLCJldmVudF9uYW1lIiwiY2xvc2VzdCIsImVsZW1lbnQiLCJyZXN1bHQiLCJyb290IiwiZ2V0Um9vdE5vZGUiLCJidWlsZCIsInBhcmVudCIsImNsYXNzZXMiLCJjc3N2YXJzIiwibGlzdGVuZXJzIiwiQ3VzdG9tQ2xhc3MiLCJ3aGVuRGVmaW5lZCIsInRvTG93ZXJDYXNlIiwiY2xhc3NMaXN0Iiwic2V0UHJvcGVydHkiLCJ0b2dnbGVBdHRyaWJ1dGUiLCJkYXRhc2V0IiwicmVwbGFjZUNoaWxkcmVuIiwiZ2V0TElTUyIsImNhbGxiYWNrIiwid2hlbkFsbERlZmluZWQiLCJ0YWduYW1lcyIsImlzRGVmaW5lZCIsImdldE5hbWUiLCJnZXRMSVNTU3luYyIsIl9idWlsZFFTIiwidGFnbmFtZV9vcl9wYXJlbnQiLCJxcyIsInFzbyIsInFzYSIsImVsZW1lbnRzIiwicHJvbWlzZXMiLCJxc2MiLCJyZXMiLCJxc1N5bmMiLCJxc2FTeW5jIiwicXNjU3luYyIsIkxJU1NfQXV0byIsIm5hdmlnYXRvciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsImNvbnRyb2xsZXIiLCJzcmMiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm11dGF0aW9uIiwiYWRkaXRpb24iLCJhZGRlZE5vZGVzIiwiRWxlbWVudCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwicmVzb3VyY2VzIiwiZGVmaW5lV2ViQ29tcG9uZW50IiwiZmlsZXMiLCJqcyIsImtsYXNzIiwiV2ViQ29tcG9uZW50IiwiZmlsZW5hbWVzIiwiZmlsZSIsImVuZHNXaXRoIiwiX2ltcG9ydCIsIl9mZXRjaFRleHQiLCJpIiwiQ3N0bUV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJhcmdzIiwiZGV0YWlsIiwiZmV0Y2hSZXNvdXJjZSIsInJlc291cmNlIiwiZmV0Y2giLCJ1cmkiLCJpc0xpc3NBdXRvIiwib3B0aW9ucyIsImhlYWRlcnMiLCJyZXNwb25zZSIsInN0YXR1cyIsImRlZmF1bHQiLCJlIiwiY29uc29sZSIsImxvZyIsIkhUTUxDTEFTU19SRUdFWCIsImVsZW1lbnROYW1lTG9va3VwVGFibGUiLCJleGVjIiwiRm9ybWF0cyIsInNoZWV0X2Zvcm1hdF9jb250ZW50IiwiZ2V0Q2VsbHMiLCJmb3JtYXQiLCJmb250X3NpemUiLCJmb3JlZ3JvdW5kX2NvbG9yIiwiYmFja2dyb3VuZF9jb2xvciIsInNoZWV0X3Rvb2xiYXJfZm9ybWF0X2NvbnRlbnQiLCJzeW5jVG8iLCJkaXNhYmxlQWxsRXhjZXB0Iiwic2hlZXRfYWxpZ24iLCJzaGVldF90b29sYmFyX2FsaWduIiwiZXVyb3MiLCJwb3VyY2VudCIsIm51bWJlciIsImRhdGUiLCJwcmVjaXNpb24iLCJzaGVldF90b29sYmFyIiwiYm9yZGVyX3RvcCIsImJvcmRlcl9ib3R0b20iLCJib3JkZXJfbGVmdCIsImJvcmRlcl9yaWdodCIsImJvcmRlcl9jb2xvciIsImluZGVudCIsInNwYW4iLCJhbGlnbl9jZW50ZXIiLCJ2YWxpZ25fbWlkZGxlIiwic3RyMmh0bWwiLCJSYW5nZU92ZXJsYXkiLCJFdmVudFRhcmdldCIsIm92ZXJsYXkiLCJjbGFzc2xpc3QiLCJ1cGRhdGUiLCJzZXRSYW5nZSIsInJhbmdlIiwicGxhZ2VfbmFtZSIsImdldFJlY3QiLCJyZWN0IiwidG9nZ2xlIiwiZ2V0UmFuZ2UiLCJzZXRSZWN0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkZvcm11bGFSZWYiLCJzZXRDb2xvciIsImNvbG9yX2lkIiwicmVtb3ZlIiwiUmVjb3B5SGFuZGxlIiwieCIsInkiLCJ3IiwiaCIsIkZvcm11bGEiLCJDYWxjU2hlZXQiLCJDZWxsTGlzdCIsIkZvcm1hdE1hbmFnZXIiLCJjdHJsS2V5IiwiY2hhbmdlZCIsImtleSIsInNlbGVjdGlvbiIsInRvZ2dsZUZvcm1hdCIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJkaXNwYXRjaEV2ZW50IiwiZmxvYXQyRGF0ZSIsImZsb2F0IiwiRGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwiZGF0ZTJGbG9hdCIsImJlZyIsImdldFRpbWUiLCJ0b0ZpeGVkIiwiZm9ybWF0UmF3IiwicHRoaXMiLCJyYXdDb250ZW50IiwidG9TdHJpbmciLCJjYWxsIiwiY2FjaGVkVmFsdWUiLCJwcmVjIiwidG9QcmVjaXNpb24iLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJnZXRTaGVldEZyb21DZWxsIiwidG9Mb2NhbGVTdHJpbmciLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJzbGljZSIsIkZvcm1hdCIsImFwcGx5VG8iLCJjZWxsIiwiYyIsImNlbGxzIiwidmFsIiwidGV4dENvbnRlbnQiLCJyIiwiaiIsInJlbGF0aXZlVG8iLCJzdGFydHNXaXRoIiwiZ2V0UHJvcGVydHkiLCJoYXNQcm9wZXJ0eSIsImV4dHJhY3RGb3JtYXQiLCJmMiIsInZhbHVlcyIsIml0ZW0iLCJnZXRQcm9wZXJ0eVZhbHVlIiwiY29sc3BhbiIsInJvd3NwYW4iLCJoYXNBdHRyaWJ1dGUiLCJDYWxjRm9ybXVsYSIsInN0YXRlcyIsImNlbGxfZWRpdCIsInN0YXRlIiwiY3Vyc29yIiwiZmlyc3RDZWxsIiwiaXNSTyIsInJhbmdlc190b2tlbiIsImRyb3ciLCJkY29sIiwibmV3X3JhbmdlcyIsInBvcyIsImNlbGxQb3MiLCJsYXN0SW5kZXhPZiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm5ld19mb3JtdWxhIiwib2Zmc2V0IiwiZW5kIiwicGFyc2VfZm9ybXVsYSIsInJhbmdlc1Rva2VuIiwicmVzZXRDYWNoZSIsImV4dHJhY3RUb2tlbiIsInRva2VuIiwiaGFzQ29tbWEiLCJOb2RlIiwiY2hpbGRyZW4iLCJmY3QiLCJldmFsIiwidG9OdW1iZXIiLCJhIiwiTnVtYmVyIiwib3BfaW1wbCIsImIiLCJNYXRoIiwicG93Iiwib3BfcHJpbyIsIm9wcyIsIm9wIiwidG9rZW5saXN0MlRyZWUiLCJ0b2tlbnMiLCJuYiIsInJhdyIsImN1ciIsInByaW9yaXR5IiwiZmluZEluZGV4IiwidV9vcCIsIm9wX3Rva2VuIiwibGVmdCIsInJpZ2h0IiwiY3VyVG9rZW4iLCJub2RlIiwicmFuZ2VzIiwiZmlsdGVyIiwiUGxhZ2VGb3JtdWxhIiwiY29kZSIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInNlbGVjdGVkIiwiY2xlYXIiLCJibHVyIiwiUGxhZ2VTZWxlY3RvciIsInNlbGVjdGVkX2NlbGxzIiwiY29scyIsInRib2R5IiwiY29sX2lkIiwiY2xpZW50WCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJvd3MiLCJyb3dfaWQiLCJjbGllbnRZIiwibWFpbiIsIm9uX21vdXNlX21vdmUiLCJyZXBsYWNlQWxsIiwiZ2V0VmlzaWJsZUNlbGwiLCJyZWYiLCJwb3MycmVmIiwibmJSb3dzIiwibmJDb2xzIiwib25jZSIsImlzQWN0aXZlIiwib25JbnB1dCIsInJyYW5nZSIsImdldFNlbGVjdGlvbiIsImdldFJhbmdlQXQiLCJzdGFydE9mZnNldCIsImNoaWxkIiwibm9kZVR5cGUiLCJURVhUX05PREUiLCJzdGFydENvbnRhaW5lciIsImNyZWF0ZVJhbmdlIiwic2VsIiwic2V0U3RhcnQiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwicGFyc2VJbnB1dCIsInRlc3RfbnVtYmVyIiwiaXNOYU4iLCJwYXJ0cyIsInNwbGl0IiwidGVzdF9kYXRlIiwiZ2V0RnVsbFllYXIiLCJTdGF0ZSIsInByZXZfc3RhdGUiLCJTdGF0ZXMiLCJlbnRyaWVzIiwicyIsInRibF9vZmZzZXQiLCJvZmZzZXRUb3AiLCJzdGFydCIsIm9mZnNldExlZnQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInJvd19kaWZmIiwiY29sX2RpZmYiLCJyb3ciLCJjb2wiLCJyZWNvcHkiLCJjb3B5IiwibGFzdF9yZWNvcHlfdGFyZ2V0IiwibGFzdF9yZWNvcHlfZGlyIiwib25fcmVjb3B5X21vdmUiLCJkX3B4Iiwid2lkdGgiLCJkX3B5IiwiaGVpZ2h0IiwiZF94IiwiZF95Iiwic2lnbiIsImFicyIsInByZXYiLCJkaWZmX3giLCJkaWZmX3kiLCJwb3NfY3VyIiwiY2xhc3NOYW1lIiwiZm9ybXVsYV9iYXIiLCJwbGFnZSIsImZvcm11bGEiLCJybyIsImlzX3JvIiwiZm9jdXMiLCJkX3JvdyIsImRfY29sIiwibmV4dCIsImFsdEtleSIsImRzdCIsImRlZXBDbG9uZSIsImRlbGV0ZUZvcm1hdCIsImRlbGV0ZUNvbnRlbnQiLCJidWJibGVzIiwib25JbnB1dDIiLCJyYW5nZXNfY29sb3JzIiwiY3VyX29mZnNldCIsInJhbmdlX25hbWUiLCJyYW5nZXNfbmFtZXMiLCJrZXlzIiwid2FybiIsInBhcmVudEVsZW1lbnQiLCJyZXNpemUiLCJuYnJvd3MiLCJuYmNvbHMiLCJjb2xfaHRtbCIsInRoIiwicm93X2h0bWwiLCJ0YWJsZSIsInJlc2l6ZU9icyIsIlJlc2l6ZU9ic2VydmVyIiwiZnJvbSIsInRvIiwiSFRNTFRhYmxlQ2VsbEVsZW1lbnQiLCJyZWYycG9zIiwiYmVnX3JvdyIsImJlZ19jb2wiLCJlbmRfcm93IiwiZW5kX2NvbCIsImNlbGxfb3Jfcm93aWQiLCJiX3Jvd19pZCIsImJfY29sX2lkIiwiY2hhckNvZGVBdCIsImVfcm93X2lkIiwiZV9jb2xfaWQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNvcnQiLCJtaW4iLCJtYXgiLCJuYl9jb2xzIiwiZmxvb3IiLCJmIiwiaXNGb3JtYXQiLCJyYXdfdmFsIiwidiIsImRpZmYiLCJmb3JtYXRzIiwibmJfZGF0ZXMiLCJpbmRleE9mIiwic2V0Uk8iLCJjbG9uZSIsImNsb25lTm9kZSIsIm1lcmdlIiwiY2VsbGxpc3QiLCJpc19hbGlnbiIsInVubWVyZ2UiLCJyZXRyYWl0IiwiZGVsdGFfaW5kZW50IiwibmV3X2Zvcm1hdCIsImFsaWduX2xlZnQiLCJkZWx0YV9wcmVjIiwiZmN0cyIsImFjdGlvbiIsImVuYWJsZWQiLCJ1bm1lcmdlZCIsIml0ZW1jc3MiLCJDYWxjVG9vbGJhckl0ZW0iLCJjb2xvcl9waWNrZXIiLCJjYW5jZWwiLCJib2R5IiwiY2xpY2siLCJDYWxjVG9vbGJhciIsImV4Y2VwdGlvbiIsImJ0bl9uYW1lIiwiZm9udF9zaXplcyIsImJ0bnMiLCJidG4iLCJmb250X3NpemVzX3NlbGVjdCIsIm9wdGlvbiIsIk9wdGlvbiIsInNuYW1lIiwicGF0aCIsInJvb3RfcGF0aCIsImhvc3RuYW1lIiwicGFnZXMiLCJoZWFkZXIiLCJ0aXRsZXMiLCJodHJlZSIsImh0bWwiLCJsZXZlbCIsImh0cmVlX2N1cnNvciIsInRpdGxlIiwic2VhcmNoQ3VySGVhZGVyIiwicG9zaXRpb24iLCJoaWQiLCJnZXRUaXRsZVByZWZpeCIsIm51bSIsImJ1aWxkTWVudSIsIm5vZGVzIiwibWVudSIsInVwZGF0ZUhlYWRlciIsImxhc3QiLCJzY3JvbGxUb3AiLCJyZXZlcnNlIiwiaG5vZGUiLCJoX2h0bWwiLCJsaW5rIiwiZW1wdHkiLCJtYWtlX3BhZ2VfaHJlZiIsInBhdGhwcmVmaXgiLCJkZXNjIiwiaHJlZiIsIm1ha2VfcGFnZV9tZW51IiwiZmluZCIsInBhZ2UiLCJjdXJwYWdlIiwibW9kdWxlX2h0bWwiLCJ0eXBlX2h0bWwiLCJkZXNjX3R5cGUiLCJkZXNjMl9pZHgiLCJzZXNzaW9uX2h0bWwiLCJ0ZW1wbGF0ZSIsInN0cjJERiJdLCJzb3VyY2VSb290IjoiIn0=