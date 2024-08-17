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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host table {\n    border-collapse: collapse;\n    border-top-color: transparent;\n\n    & > tbody {\n        outline: 0px solid transparent;\n    }\n\n    & > tbody > tr:first-child {\n        border-top-color: transparent;\n        \n        & > th {\n            border-top-color: transparent;\n        }\n    }\n}\n\n:host :is(tr,th,td) {\n    border:1px solid #c0c0c0;\n }\n\n:host tr {\n    height: 0.45cm;\n    line-height: 0.45cm;\n}\n\n\n:host :is(td, th):not([contenteditable]) {\n    user-select: none;\n}\n/*\n:host td[contenteditable] {\n    user-select: text;\n}*/\n\n:host :is(td, th) {\n    color: black;\n    width: 2.26cm;\n    height: 0.45cm;\n\n    font-size: 10pt;\n\n    box-sizing: border-box;\n    font-family: 'Liberation Sans';\n}\n\n:host tr > th:first-child {\n    width: calc( 2.26cm / 2.5) ;\n}\n\n:host {\n    display: inline-flex;\n    flex-direction: column;\n}\n\n:host div.toolbar {\n    background-color: #cecece;\n    display: flex;\n    gap: 5px;\n    padding: 4px;\n\n    & > *:not(:first-child) {\n        flex: 1 1 0;\n    }\n    & > *:first-child {\n        width: calc( 1.5 * 2.26cm );\n    }\n}\n\n:host th {\n    background-color: #cecece;\n    border-color: #8a8a8a;\n    font-weight: normal;\n\n    &.highlight {\n        background-color: #398ee7;\n        color: white;\n    }\n}\n\n:host(.cell_edit) .cursor {\n    display: none;\n}\n\n:host(.recopy) {\n    cursor: cell;\n}\n\n:host {\n\n    .recopy {\n        position: absolute;\n        padding: 0;\n        box-sizing: border-box;\n        cursor: cell;\n        background-color: #398ee7;\n\n    }\n\n    .cursor {\n        position: absolute;\n        padding: 0;\n        box-sizing: border-box;\n        background: none;\n        border: 2px solid #398ee7;\n        pointer-events: none;\n    }\n}\n\n:host .hidden {\n    display: none;\n}\n\n:host td {\n\n    --font_size: 10pt;\n    font-size: var(--font_size);\n    line-height: calc( var(--font_size) * 1.2 );\n\n    --indent: 0;\n\n    --border_color: black;\n    --background_color: white;\n    --foreground_color: black;\n    background-color: var(--background_color);\n    color           : var(--foreground_color);\n\n    white-space: pre;\n\n    vertical-align: bottom;\n\n    &:is([data-type=\"number\"],[data-type=\"date\"], [data-type=\"boolean\"]) {\n        text-align: right;\n    }\n\n    &[contenteditable] {\n        outline: 0px solid transparent;\n    }\n\n    &.ajuster {\n        word-break: break-all;\n        white-space: normal;\n    }\n\n    &.highlight {\n        background-color: #cde3f9;\n    }\n\n    /** style **/\n    &.italic {\n        font-style: italic;\n    }\n    &.bold {\n        font-weight: bold;\n    }\n    &.underline {\n        text-decoration: underline;\n    }\n    &.align_left {\n        padding-left: calc( var(--indent) * 10px);\n        text-align: left;\n    }\n    &.align_center {\n        text-align: center;\n    }\n    &.align_right {\n        padding-right: calc( var(--indent) * 10px);\n        text-align: right;\n    }\n    &.valign_top {\n        vertical-align: top;\n    }\n    &.valign_middle {\n        vertical-align: middle;\n    }\n    &.valign_bottom {\n        vertical-align: bottom;\n    }\n    /* https://stackoverflow.com/questions/1241757/applying-borders-to-a-single-table-cell-when-using-border-collapse */\n    &.border_top {\n        border-top: 1px double var(--border_color);\n    }\n    &.border_bottom {\n        border-bottom: 1px double var(--border_color);\n    }\n    &.border_left {\n        border-left: 1px double var(--border_color);\n    }\n    &.border_right {\n        border-right: 1px double var(--border_color);\n    }\n}\n\n:host {\n    position: relative;\n}\n\n:host .range_highlight {\n    position: absolute;\n    padding: 0;\n    box-sizing: border-box;\n\n    background: none;\n    border: 2px solid red;\n\n    border-color: var(--highlight_color);\n}\n\n:host .formula_highlight {\n    color: var(--highlight_color);\n}\n\n:host .highlight_0 {\n    --highlight_color: #fa0c0c;\n}\n\n:host .highlight_1 {\n    --highlight_color: #fa0cfa;\n}\n\n:host .highlight_2 {\n    --highlight_color: #0c840c;\n}\n\n:host .highlight_3 {\n    --highlight_color: #010180;\n}\n\n:host .highlight_4 {\n    --highlight_color: #871717;\n}\n\n:host .highlight_5 {\n    --highlight_color: #871787;\n}\n\n:host .highlight_6 {\n    --highlight_color: #84840c;\n}\n\n:host .highlight_7 {\n    --highlight_color: #0c0cfa;\n}\n\n\n.copy_highlight {\n    position: absolute;\n    border: 1px dashed black;\n    background: none;\n    pointer-events: none;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* Tomorrow Theme */\n/* http://jmblog.github.com/color-themes-for-google-code-highlightjs */\n/* Original theme - https://github.com/chriskempson/tomorrow-theme */\n\n/* Tomorrow Comment */\n.hljs-comment,\n.hljs-quote {\n\tcolor: #8e908c;\n}\n\n/* Tomorrow Red */\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-regexp,\n.hljs-deletion {\n\tcolor: #c82829;\n}\n\n/* Tomorrow Orange */\n.hljs-number,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-literal,\n.hljs-type,\n.hljs-params,\n.hljs-meta,\n.hljs-link {\n\tcolor: #f5871f;\n}\n\n/* Tomorrow Yellow */\n.hljs-attribute {\n\tcolor: #eab700;\n}\n\n/* Tomorrow Green */\n.hljs-string,\n.hljs-symbol,\n.hljs-bullet,\n.hljs-addition {\n\tcolor: #718c00;\n}\n\n/* Tomorrow Blue */\n.hljs-title,\n.hljs-section {\n\tcolor: #4271ae;\n}\n\n/* Tomorrow Purple */\n.hljs-keyword,\n.hljs-selector-tag {\n\tcolor: #8959a8;\n}\n\n.hljs {\n\tdisplay: block;\n\toverflow-x: auto;\n\tcolor: #4d4d4c;\n\tpadding: 0.5em;\n}\n\n.hljs-emphasis {\n\tfont-style: italic;\n}\n\n.hljs-strong {\n\tfont-weight: bold;\n}");

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
/**/ const s_complex_formula = await LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_complex_formula');
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
/**/ const s_types = await LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_types');
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
const s_cursor = await LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_cursor');
s_cursor.getCells("A1:H1").format("bold", "align_center").content = "*";
s_cursor.getCells("A4:H4").format("bold", "align_center").content = "*";
s_cursor.getCells("D1:E4").format("bold", "align_center").content = "*";
s_cursor.getCells("A1:A4").format("bold", "align_center").content = "*";
s_cursor.getCells("H1:H4", true).format("bold", "align_center").content = "*";
const s_$formula = [
    await LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet____formula'),
    await LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_x__formula'),
    await LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet__x_formula'),
    await LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_xx_formula')
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
const sheet_recopie_motivation = await LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_recopie_motivation');
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
const sheet_recopie_motivation_empty = await LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_recopie_motivation_empty');
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
const sheet_recopie_incr = await LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_recopie_incr');
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
/* harmony export */   CellList: () => (/* binding */ CellList),
/* harmony export */   defaultFormat: () => (/* binding */ defaultFormat)
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
        this.#initGrid(+this.attrs.rows, +this.attrs.cols);
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
                    this.cursor.replaceAll(next);
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
                cell.textContent = defaultFormat(cell.rawContent);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2hFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLHlDQUF5Qyx3Q0FBd0M7VUFDakY7VUFDQTtVQUNBOzs7OztVQ1BBOzs7OztVQ0FBO1VBQ0E7VUFDQTtVQUNBLHVEQUF1RCxpQkFBaUI7VUFDeEU7VUFDQSxnREFBZ0QsYUFBYTtVQUM3RDs7Ozs7VUNOQTs7Ozs7U0VBQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTEvaW5kZXguY3NzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMS9pbmRleC5tZCIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vQ291cnMvLi9saWJzL0xJU1MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00xL2luZGV4LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL1JhbmdlT3ZlcmxheS50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9mb3JtYXQudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvZm9ybXVsYV9lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvZm9ybXVsYV9wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvcGxhZ2VfZWRpdG9yLnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL3BsYWdlX3NlbGVjdG9yLnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL3NoZWV0LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jb250ZW50LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9tZW51LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC91dGlscy9zdHIyaHRtbC50cyIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvYXN5bmMgbW9kdWxlIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwYWdlcy9SMS0wMS9DTS9DTTEvaW5kZXguaHRtbFwiOyIsImV4cG9ydCBkZWZhdWx0IFwiOmhvc3QgdGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXG4gICAgJiA+IHRib2R5IHtcXG4gICAgICAgIG91dGxpbmU6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgfVxcblxcbiAgICAmID4gdGJvZHkgPiB0cjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIFxcbiAgICAgICAgJiA+IHRoIHtcXG4gICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG46aG9zdCA6aXModHIsdGgsdGQpIHtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjYzBjMGMwO1xcbiB9XFxuXFxuOmhvc3QgdHIge1xcbiAgICBoZWlnaHQ6IDAuNDVjbTtcXG4gICAgbGluZS1oZWlnaHQ6IDAuNDVjbTtcXG59XFxuXFxuXFxuOmhvc3QgOmlzKHRkLCB0aCk6bm90KFtjb250ZW50ZWRpdGFibGVdKSB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4vKlxcbjpob3N0IHRkW2NvbnRlbnRlZGl0YWJsZV0ge1xcbiAgICB1c2VyLXNlbGVjdDogdGV4dDtcXG59Ki9cXG5cXG46aG9zdCA6aXModGQsIHRoKSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDIuMjZjbTtcXG4gICAgaGVpZ2h0OiAwLjQ1Y207XFxuXFxuICAgIGZvbnQtc2l6ZTogMTBwdDtcXG5cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdMaWJlcmF0aW9uIFNhbnMnO1xcbn1cXG5cXG46aG9zdCB0ciA+IHRoOmZpcnN0LWNoaWxkIHtcXG4gICAgd2lkdGg6IGNhbGMoIDIuMjZjbSAvIDIuNSkgO1xcbn1cXG5cXG46aG9zdCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG46aG9zdCBkaXYudG9vbGJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuXFxuICAgICYgPiAqOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgICAgIGZsZXg6IDEgMSAwO1xcbiAgICB9XFxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIHdpZHRoOiBjYWxjKCAxLjUgKiAyLjI2Y20gKTtcXG4gICAgfVxcbn1cXG5cXG46aG9zdCB0aCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XFxuICAgIGJvcmRlci1jb2xvcjogIzhhOGE4YTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG5cXG4gICAgJi5oaWdobGlnaHQge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM5OGVlNztcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcbn1cXG5cXG46aG9zdCguY2VsbF9lZGl0KSAuY3Vyc29yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuOmhvc3QoLnJlY29weSkge1xcbiAgICBjdXJzb3I6IGNlbGw7XFxufVxcblxcbjpob3N0IHtcXG5cXG4gICAgLnJlY29weSB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIGN1cnNvcjogY2VsbDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzOThlZTc7XFxuXFxuICAgIH1cXG5cXG4gICAgLmN1cnNvciB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMzk4ZWU3O1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIH1cXG59XFxuXFxuOmhvc3QgLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbjpob3N0IHRkIHtcXG5cXG4gICAgLS1mb250X3NpemU6IDEwcHQ7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udF9zaXplKTtcXG4gICAgbGluZS1oZWlnaHQ6IGNhbGMoIHZhcigtLWZvbnRfc2l6ZSkgKiAxLjIgKTtcXG5cXG4gICAgLS1pbmRlbnQ6IDA7XFxuXFxuICAgIC0tYm9yZGVyX2NvbG9yOiBibGFjaztcXG4gICAgLS1iYWNrZ3JvdW5kX2NvbG9yOiB3aGl0ZTtcXG4gICAgLS1mb3JlZ3JvdW5kX2NvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZF9jb2xvcik7XFxuICAgIGNvbG9yICAgICAgICAgICA6IHZhcigtLWZvcmVncm91bmRfY29sb3IpO1xcblxcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xcblxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcblxcbiAgICAmOmlzKFtkYXRhLXR5cGU9XFxcIm51bWJlclxcXCJdLFtkYXRhLXR5cGU9XFxcImRhdGVcXFwiXSwgW2RhdGEtdHlwZT1cXFwiYm9vbGVhblxcXCJdKSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgfVxcblxcbiAgICAmW2NvbnRlbnRlZGl0YWJsZV0ge1xcbiAgICAgICAgb3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICB9XFxuXFxuICAgICYuYWp1c3RlciB7XFxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgICB9XFxuXFxuICAgICYuaGlnaGxpZ2h0IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjZGUzZjk7XFxuICAgIH1cXG5cXG4gICAgLyoqIHN0eWxlICoqL1xcbiAgICAmLml0YWxpYyB7XFxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIH1cXG4gICAgJi5ib2xkIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB9XFxuICAgICYudW5kZXJsaW5lIHtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB9XFxuICAgICYuYWxpZ25fbGVmdCB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoIHZhcigtLWluZGVudCkgKiAxMHB4KTtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIH1cXG4gICAgJi5hbGlnbl9jZW50ZXIge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgICYuYWxpZ25fcmlnaHQge1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyggdmFyKC0taW5kZW50KSAqIDEwcHgpO1xcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIH1cXG4gICAgJi52YWxpZ25fdG9wIHtcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIH1cXG4gICAgJi52YWxpZ25fbWlkZGxlIHtcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIH1cXG4gICAgJi52YWxpZ25fYm90dG9tIHtcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICAgIH1cXG4gICAgLyogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTI0MTc1Ny9hcHBseWluZy1ib3JkZXJzLXRvLWEtc2luZ2xlLXRhYmxlLWNlbGwtd2hlbi11c2luZy1ib3JkZXItY29sbGFwc2UgKi9cXG4gICAgJi5ib3JkZXJfdG9wIHtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBkb3VibGUgdmFyKC0tYm9yZGVyX2NvbG9yKTtcXG4gICAgfVxcbiAgICAmLmJvcmRlcl9ib3R0b20ge1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdWJsZSB2YXIoLS1ib3JkZXJfY29sb3IpO1xcbiAgICB9XFxuICAgICYuYm9yZGVyX2xlZnQge1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBkb3VibGUgdmFyKC0tYm9yZGVyX2NvbG9yKTtcXG4gICAgfVxcbiAgICAmLmJvcmRlcl9yaWdodCB7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBkb3VibGUgdmFyKC0tYm9yZGVyX2NvbG9yKTtcXG4gICAgfVxcbn1cXG5cXG46aG9zdCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuOmhvc3QgLnJhbmdlX2hpZ2hsaWdodCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcblxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWhpZ2hsaWdodF9jb2xvcik7XFxufVxcblxcbjpob3N0IC5mb3JtdWxhX2hpZ2hsaWdodCB7XFxuICAgIGNvbG9yOiB2YXIoLS1oaWdobGlnaHRfY29sb3IpO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzAge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogI2ZhMGMwYztcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF8xIHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICNmYTBjZmE7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfMiB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjMGM4NDBjO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzMge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzAxMDE4MDtcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF80IHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICM4NzE3MTc7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfNSB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjODcxNzg3O1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzYge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzg0ODQwYztcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF83IHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICMwYzBjZmE7XFxufVxcblxcblxcbi5jb3B5X2hpZ2hsaWdodCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogVG9tb3Jyb3cgVGhlbWUgKi9cXG4vKiBodHRwOi8vam1ibG9nLmdpdGh1Yi5jb20vY29sb3ItdGhlbWVzLWZvci1nb29nbGUtY29kZS1oaWdobGlnaHRqcyAqL1xcbi8qIE9yaWdpbmFsIHRoZW1lIC0gaHR0cHM6Ly9naXRodWIuY29tL2Nocmlza2VtcHNvbi90b21vcnJvdy10aGVtZSAqL1xcblxcbi8qIFRvbW9ycm93IENvbW1lbnQgKi9cXG4uaGxqcy1jb21tZW50LFxcbi5obGpzLXF1b3RlIHtcXG5cXHRjb2xvcjogIzhlOTA4YztcXG59XFxuXFxuLyogVG9tb3Jyb3cgUmVkICovXFxuLmhsanMtdmFyaWFibGUsXFxuLmhsanMtdGVtcGxhdGUtdmFyaWFibGUsXFxuLmhsanMtdGFnLFxcbi5obGpzLW5hbWUsXFxuLmhsanMtc2VsZWN0b3ItaWQsXFxuLmhsanMtc2VsZWN0b3ItY2xhc3MsXFxuLmhsanMtcmVnZXhwLFxcbi5obGpzLWRlbGV0aW9uIHtcXG5cXHRjb2xvcjogI2M4MjgyOTtcXG59XFxuXFxuLyogVG9tb3Jyb3cgT3JhbmdlICovXFxuLmhsanMtbnVtYmVyLFxcbi5obGpzLWJ1aWx0X2luLFxcbi5obGpzLWJ1aWx0aW4tbmFtZSxcXG4uaGxqcy1saXRlcmFsLFxcbi5obGpzLXR5cGUsXFxuLmhsanMtcGFyYW1zLFxcbi5obGpzLW1ldGEsXFxuLmhsanMtbGluayB7XFxuXFx0Y29sb3I6ICNmNTg3MWY7XFxufVxcblxcbi8qIFRvbW9ycm93IFllbGxvdyAqL1xcbi5obGpzLWF0dHJpYnV0ZSB7XFxuXFx0Y29sb3I6ICNlYWI3MDA7XFxufVxcblxcbi8qIFRvbW9ycm93IEdyZWVuICovXFxuLmhsanMtc3RyaW5nLFxcbi5obGpzLXN5bWJvbCxcXG4uaGxqcy1idWxsZXQsXFxuLmhsanMtYWRkaXRpb24ge1xcblxcdGNvbG9yOiAjNzE4YzAwO1xcbn1cXG5cXG4vKiBUb21vcnJvdyBCbHVlICovXFxuLmhsanMtdGl0bGUsXFxuLmhsanMtc2VjdGlvbiB7XFxuXFx0Y29sb3I6ICM0MjcxYWU7XFxufVxcblxcbi8qIFRvbW9ycm93IFB1cnBsZSAqL1xcbi5obGpzLWtleXdvcmQsXFxuLmhsanMtc2VsZWN0b3ItdGFnIHtcXG5cXHRjb2xvcjogIzg5NTlhODtcXG59XFxuXFxuLmhsanMge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdG92ZXJmbG93LXg6IGF1dG87XFxuXFx0Y29sb3I6ICM0ZDRkNGM7XFxuXFx0cGFkZGluZzogMC41ZW07XFxufVxcblxcbi5obGpzLWVtcGhhc2lzIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5obGpzLXN0cm9uZyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiOyIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgZXhwb3J0ZWQgdHlwZXMgPT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgQ1NTX1Jlc291cmNlID0gc3RyaW5nfFJlc3BvbnNlfEhUTUxTdHlsZUVsZW1lbnR8Q1NTU3R5bGVTaGVldDtcbmV4cG9ydCB0eXBlIENTU19Tb3VyY2UgICA9IENTU19SZXNvdXJjZSB8IFByb21pc2U8Q1NTX1Jlc291cmNlPjtcblxuZXhwb3J0IHR5cGUgSFRNTF9SZXNvdXJjZSA9IHN0cmluZ3xSZXNwb25zZXxIVE1MVGVtcGxhdGVFbGVtZW50O1xuZXhwb3J0IHR5cGUgSFRNTF9Tb3VyY2UgICA9IEhUTUxfUmVzb3VyY2UgfCBQcm9taXNlPEhUTUxfUmVzb3VyY2U+O1xuXG5leHBvcnQgdHlwZSBMSVNTT3B0aW9uczxFeHRlbmRzICAgIGV4dGVuZHMgQ2xhc3MsXG5cdFx0XHRcdFx0XHRIb3N0ICAgICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0XHRBdHRycyAgICAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdFx0UGFyYW1ldGVycyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+ID0ge1xuXG5cdGV4dGVuZHM/OiBDb25zdHJ1Y3RvcjxFeHRlbmRzPixcblx0aG9zdCAgID86IENvbnN0cnVjdG9yPEhvc3Q+LFxuXG5cdGRlcGVuZGVuY2llcz86IHJlYWRvbmx5IFByb21pc2U8YW55PltdLFxuXHRhdHRyaWJ1dGVzICA/OiByZWFkb25seSBBdHRyc1tdLFxuXHRwYXJhbXMgICAgICA/OiBSZWFkb25seTxQYXJhbWV0ZXJzPixcblxuXHRjb250ZW50PzogSFRNTF9Tb3VyY2UsXG5cdGNzcyAgICA/OiAgQ1NTX1NvdXJjZSB8IHJlYWRvbmx5IENTU19Tb3VyY2VbXSxcblx0c2hhZG93ID86ICBTaGFkb3dDZmcsXG59O1xuXG5leHBvcnQgZW51bSBTaGFkb3dDZmcge1xuXHROT05FID0gJ25vbmUnLFxuXHRPUEVOID0gJ29wZW4nLCBcblx0Q0xPU0U9ICdjbG9zZWQnXG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIENsYXNzID09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmxldCBfX2NzdHJfaG9zdCAgOiBhbnkgPSBudWxsO1xuXG50eXBlIENvbnN0cnVjdG9yPFQ+ID0gbmV3ICgpID0+IFQ7XG5pbnRlcmZhY2UgQ2xhc3Mge31cblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvYXR0YWNoU2hhZG93XG5jb25zdCBDQU5fSEFWRV9TSEFET1cgPSBbXG5cdG51bGwsICdhcnRpY2xlJywgJ2FzaWRlJywgJ2Jsb2NrcXVvdGUnLCAnYm9keScsICdkaXYnLFxuXHQnZm9vdGVyJywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2hlYWRlcicsICdtYWluJyxcblx0J25hdicsICdwJywgJ3NlY3Rpb24nLCAnc3Bhbidcblx0XG5dO1xuZnVuY3Rpb24gX2Nhbkhhc1NoYWRvdyh0YWc6IHR5cGVvZiBIVE1MRWxlbWVudCkge1xuXHRyZXR1cm4gQ0FOX0hBVkVfU0hBRE9XLmluY2x1ZGVzKCBfZWxlbWVudDJ0YWduYW1lKHRhZykgKTtcbn1cblxudHlwZSBSZXNvdXJjZSA9IFVSTHxSZXNwb25zZTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMSVNTPEV4dGVuZHMgICAgZXh0ZW5kcyBDbGFzcyAgICAgICAgICAgICAgPSBDbGFzcyxcblx0XHRcdFx0XHRcdFx0IEhvc3QgICAgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCAgICAgICAgPSBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHRcdFx0IEF0dHJzICAgICAgZXh0ZW5kcyBzdHJpbmcgICAgICAgICAgICAgPSBuZXZlcixcblx0XHRcdFx0XHRcdFx0IFBhcmFtZXRlcnMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4gPSB7fT4oe1xuXHRcdFx0XHRcdFx0XHRcdGV4dGVuZHMgICAgIDogcF9leHRlbmRzLFxuXHRcdFx0XHRcdFx0XHRcdGhvc3QgICAgICAgIDogcF9ob3N0LFxuXHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY2llczogcF9kZXBzLFxuXHRcdFx0XHRcdFx0XHQgICAgYXR0cmlidXRlcyAgOiBwX2F0dHJzLFxuXHRcdFx0XHRcdFx0XHQgICAgcGFyYW1zLFxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQsXG5cdFx0XHRcdFx0XHRcdFx0Y3NzLFxuXHRcdFx0XHRcdFx0XHRcdHNoYWRvdyAgICAgIDogcF9zaGFkb3csXG5cdFx0XHRcdFx0XHRcdH06IExJU1NPcHRpb25zPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbWV0ZXJzPiA9IHt9KSB7XG5cblx0Ly9UT0RPIG1lcmdlIHByb3AgaWYgZXh0ZW5kcyBMSVNTLi4uXG5cblx0Y29uc3QgaG9zdCAgICAgICAgPSBwX2hvc3QgICAgPz8gSFRNTEVsZW1lbnQgYXMgQ29uc3RydWN0b3I8SG9zdD47XG5cdGNvbnN0IF9leHRlbmRzICAgID0gcF9leHRlbmRzID8/IE9iamVjdCAgICAgIGFzIHVua25vd24gYXMgQ29uc3RydWN0b3I8RXh0ZW5kcz47XG5cdGNvbnN0IGF0dHJpYnV0ZXMgID0gcF9hdHRycyAgID8/IFtdO1xuXHRjb25zdCBkZXBlbmRlbmNpZXM9IHBfZGVwcyAgICA/IFsuLi5wX2RlcHNdIDogW107XG5cdGNvbnN0IGNhbkhhc1NoYWRvdz0gX2Nhbkhhc1NoYWRvdyhob3N0KTtcblx0Y29uc3Qgc2hhZG93ICAgICAgPSBwX3NoYWRvdyAgPz8gKGNhbkhhc1NoYWRvdyA/IFNoYWRvd0NmZy5DTE9TRSA6IFNoYWRvd0NmZy5OT05FKTtcblxuXHRpZiggISBjYW5IYXNTaGFkb3cgJiYgc2hhZG93ICE9PSBTaGFkb3dDZmcuTk9ORSlcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEhvc3QgZWxlbWVudCAke19lbGVtZW50MnRhZ25hbWUoaG9zdCl9IGRvZXMgbm90IHN1cHBvcnQgU2hhZG93Um9vdGApO1xuXG5cdC8vIENPTlRFTlQgcHJvY2Vzc2luZ1xuXHRpZiggY29udGVudCAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0ZGVwZW5kZW5jaWVzLnB1c2goICggYXN5bmMgKCkgPT4ge1xuXG5cdFx0XHRjb250ZW50ID0gYXdhaXQgY29udGVudDtcblxuXHRcdFx0aWYoY29udGVudCBpbnN0YW5jZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQpXG5cdFx0XHRjb250ZW50ID0gY29udGVudC5pbm5lckhUTUw7XG5cblx0XHRcdGlmKCB0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikge1xuXG5cdFx0XHRcdGNvbnRlbnQgPSBjb250ZW50LnRyaW0oKTsgLy8gTmV2ZXIgcmV0dXJuIGEgdGV4dCBub2RlIG9mIHdoaXRlc3BhY2UgYXMgdGhlIHJlc3VsdFxuXHRcdFx0XHRpZihjb250ZW50ID09PSAnJylcblx0XHRcdFx0XHRjb250ZW50ID0gdW5kZWZpbmVkO1xuXG5cdFx0XHR9XG5cdFx0XHRpZiggY29udGVudCBpbnN0YW5jZW9mIFJlc3BvbnNlIClcblx0XHRcdFx0Y29udGVudCA9IGF3YWl0IGNvbnRlbnQudGV4dCgpO1xuXG5cdFx0XHRyZXR1cm4gTElTU0Jhc2UuUGFyYW1ldGVycy5jb250ZW50ID0gY29udGVudDtcblx0XHR9KSgpICk7XG5cdH1cblxuXHQvLyBDU1MgcHJvY2Vzc2luZ1xuXHRsZXQgc3R5bGVzaGVldHM6IHJlYWRvbmx5IENTU1N0eWxlU2hlZXRbXSA9IFtdO1xuXHRpZiggY3NzICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRpZiggISBBcnJheS5pc0FycmF5KGNzcykgKVxuXHRcdFx0Y3NzID0gW2NzcyBhcyBDU1NfU291cmNlXTtcblxuXHRcdHN0eWxlc2hlZXRzID0gbmV3IEFycmF5PENTU1N0eWxlU2hlZXQ+KGNzcy5sZW5ndGgpO1xuXG5cdFx0Y29uc3QgZmV0Y2hfY3NzID0gKGFzeW5jIChjc3M6IENTU19Tb3VyY2UpID0+IHtcblx0XHRcdGNzcyA9IGF3YWl0IGNzcztcblx0XHRcdGlmKGNzcyBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQpXG5cdFx0XHRcdHJldHVybiBjc3M7XG5cdFx0XHRpZiggY3NzIGluc3RhbmNlb2YgSFRNTFN0eWxlRWxlbWVudClcblx0XHRcdFx0cmV0dXJuIGNzcy5zaGVldCE7XG5cblx0XHRcdGxldCBzdHlsZSA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG5cdFx0XHRpZiggdHlwZW9mIGNzcyA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdFx0c3R5bGUucmVwbGFjZShjc3MpO1xuXHRcdFx0XHRyZXR1cm4gc3R5bGU7XG5cdFx0XHR9XG5cblx0XHRcdC8vaWYoIGNzcyBpbnN0YW5jZW9mIFJlc3BvbnNlIClcblx0XHRcdHN0eWxlLnJlcGxhY2UoYXdhaXQgY3NzLnRleHQoKSk7XG5cdFx0XHRyZXR1cm4gc3R5bGU7XG5cdFx0fSk7XG5cblx0XHRkZXBlbmRlbmNpZXMucHVzaCggLi4uY3NzLm1hcCggYXN5bmMgKGNzcywgaWR4KSA9PiAgKHN0eWxlc2hlZXRzIGFzIGFueSlbaWR4XSA9IGF3YWl0IGZldGNoX2Nzcyhjc3MpICkgKTtcblx0fVxuXG5cdHR5cGUgTEhvc3QgPSBMSVNTSG9zdDxMSVNTQmFzZT47XG5cblx0Ly8gQHRzLWlnbm9yZVxuXHRjbGFzcyBMSVNTQmFzZSBleHRlbmRzIF9leHRlbmRzIHtcblxuXHRcdHJlYWRvbmx5ICNob3N0OiBhbnk7IC8vIHByZXZlbnRzIGlzc3VlICMxLi4uXG5cblx0XHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdFx0c3VwZXIoKTtcblxuXHRcdFx0Ly8gaDRjaywgb2theSBiZWNhdXNlIEpTIGlzIG1vbm90aHJlYWRlZC5cblx0XHRcdGlmKCBfX2NzdHJfaG9zdCA9PT0gbnVsbCApXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBkbyBub3QgZGlyZWN0bHkgY2FsbCB0aGlzIGNvbnN0cnVjdG9yXCIpO1xuXHRcdFx0dGhpcy4jaG9zdCA9IF9fY3N0cl9ob3N0O1xuXHRcdFx0X19jc3RyX2hvc3QgPSBudWxsO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBnZXQgaG9zdCgpOiBIb3N0IHtcblx0XHRcdHJldHVybiB0aGlzLiNob3N0O1xuXHRcdH1cblx0XHRwcm90ZWN0ZWQgZ2V0IGF0dHJzKCkge1xuXHRcdFx0cmV0dXJuICh0aGlzLiNob3N0IGFzIExIb3N0KS5hdHRycztcblx0XHR9XG5cdFx0cHJvdGVjdGVkIHNldEF0dHJEZWZhdWx0KCBhdHRyOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuI2hvc3QgYXMgTEhvc3QpLnNldEF0dHJEZWZhdWx0KGF0dHIsIHZhbHVlKTtcblxuXHRcdH1cblx0XHRwcm90ZWN0ZWQgZ2V0IHBhcmFtcygpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkucGFyYW1zO1xuXHRcdH1cblx0XHRwcm90ZWN0ZWQgZ2V0IGNvbnRlbnQoKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuI2hvc3QgYXMgTEhvc3QpLmNvbnRlbnQhO1xuXHRcdH1cblxuXHRcdHN0YXRpYyByZWFkb25seSBQYXJhbWV0ZXJzID0ge1xuXHRcdFx0aG9zdCxcblx0XHRcdGRlcGVuZGVuY2llcyxcblx0XHRcdGF0dHJpYnV0ZXMsXG5cdFx0XHRwYXJhbXMsXG5cdFx0XHRjb250ZW50LFxuXHRcdFx0c3R5bGVzaGVldHMsXG5cdFx0XHRzaGFkb3csXG5cdFx0fTtcblxuXHRcdHByb3RlY3RlZCBvbkF0dHJDaGFuZ2VkKF9uYW1lOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdFx0X29sZFZhbHVlOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdFx0X25ld1ZhbHVlOiBzdHJpbmcpOiB2b2lkfGZhbHNlIHt9XG5cblx0XHRwcm90ZWN0ZWQgZ2V0IGlzSW5ET00oKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuI2hvc3QgYXMgTEhvc3QpLmlzSW5ET007XG5cdFx0fVxuXHRcdHByb3RlY3RlZCBvbkRPTUNvbm5lY3RlZCgpIHt9XG5cdFx0cHJvdGVjdGVkIG9uRE9NRGlzY29ubmVjdGVkKCkge31cblx0fVxuXG5cdHJldHVybiBMSVNTQmFzZTtcbn1cblxuLy9UT0RPOiBvdGhlciBvcHRpb25zLi4uXG5mdW5jdGlvbiBleHRlbmRzTElTUzxFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0QXR0cnMxICAgZXh0ZW5kcyBzdHJpbmcsXG5cdEF0dHJzMiAgIGV4dGVuZHMgc3RyaW5nLFxuXHRQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+LFxuXHRUIGV4dGVuZHMgTElTU1JldHVyblR5cGU8RXh0ZW5kcywgSG9zdCwgQXR0cnMxLCBQYXJhbXM+PihMaXNzOiBULCBwYXJhbWV0ZXJzOiB7YXR0cmlidXRlczogcmVhZG9ubHkgQXR0cnMyW119KSB7XG5cblx0Ly8gVE9ETzogb3RoZXIgb3B0aW9ucy4uLlxuXHRjb25zdCBhdHRycyA9IFsuLi5MaXNzLlBhcmFtZXRlcnMuYXR0cmlidXRlcywgLi4ucGFyYW1ldGVycy5hdHRyaWJ1dGVzIV07XG5cdGNvbnN0IHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIExpc3MuUGFyYW1ldGVycywge2F0dHJpYnV0ZXM6IGF0dHJzfSk7XG5cblx0Ly8gQHRzLWlnbm9yZSA6IGJlY2F1c2UgVFMgc3R1cGlkXG5cdGNsYXNzIEV4dGVuZGVkTElTUyBleHRlbmRzIExpc3Mge1xuXHRcdGNvbnN0cnVjdG9yKC4uLnQ6IGFueVtdKSB7XG5cdFx0XHQvLyBAdHMtaWdub3JlIDogYmVjYXVzZSBUUyBzdHVwaWRcblx0XHRcdHN1cGVyKC4uLnQpO1xuXHRcdH1cblxuXHRcdHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYXR0cnMoKSB7XG5cdFx0XHRyZXR1cm4gc3VwZXIuYXR0cnMgYXMgUmVjb3JkPEF0dHJzMnxBdHRyczEsIHN0cmluZ3xudWxsPjtcblx0XHR9XG5cblx0XHRzdGF0aWMgb3ZlcnJpZGUgUGFyYW1ldGVycyA9IHBhcmFtcztcblx0fVxuXG5cdHJldHVybiBFeHRlbmRlZExJU1M7XG59XG5MSVNTLmV4dGVuZHNMSVNTID0gZXh0ZW5kc0xJU1M7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgdHlwZSBoZWxwZXJzID09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBidWlsZExJU1NIb3N0UmV0dXJuVHlwZTxUPiAgPSBUIGV4dGVuZHMgTElTU1JldHVyblR5cGU8aW5mZXIgRXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5mZXIgSG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5mZXIgQXR0cnMgICBleHRlbmRzIHN0cmluZyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluZmVyIFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IFJldHVyblR5cGU8dHlwZW9mIGJ1aWxkTElTU0hvc3Q8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcywgVD4+IDogbmV2ZXI7XG5cbmV4cG9ydCB0eXBlIExJU1NSZXR1cm5UeXBlPFxuXHRFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0QXR0cnMgICBleHRlbmRzIHN0cmluZyxcblx0UGFyYW1zICBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pj4gPSBSZXR1cm5UeXBlPHR5cGVvZiBMSVNTPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXM+PjtcbmV4cG9ydCB0eXBlIExJU1NCYXNlPEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0XHRcdFx0XHQgSG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdCBBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdCBQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+PiA9IEluc3RhbmNlVHlwZTxMSVNTUmV0dXJuVHlwZTxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zPj47XG5leHBvcnQgdHlwZSBMSVNTSG9zdDxMSVNTIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55PiA+ID0gSW5zdGFuY2VUeXBlPGJ1aWxkTElTU0hvc3RSZXR1cm5UeXBlPENvbnN0cnVjdG9yPExJU1M+ICYge1BhcmFtZXRlcnM6IGFueX0+PjtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTU0hvc3QgY2xhc3MgPT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5sZXQgaWQgPSAwO1xuXG5mdW5jdGlvbiBidWlsZExJU1NIb3N0PEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0XHRcdFx0XHQgICBIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0ICAgQXR0cnMgICBleHRlbmRzIHN0cmluZyxcblx0XHRcdFx0XHQgICBQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+LFxuXHRcdFx0XHRcdCAgIFQgZXh0ZW5kcyBMSVNTUmV0dXJuVHlwZTxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zPj4oTGlzczogVCwgX3BhcmFtczogUGFydGlhbDxQYXJhbXM+ID0ge30pIHtcblx0Y29uc3Qge1xuXHRcdGhvc3QsXG5cdFx0YXR0cmlidXRlcyxcblx0XHRjb250ZW50LFxuXHRcdHN0eWxlc2hlZXRzLFxuXHRcdHNoYWRvdyxcblx0fSA9IExpc3MuUGFyYW1ldGVycztcblxuXHRjb25zdCBhbHJlYWR5RGVjbGFyZWRDU1MgPSBuZXcgU2V0KCk7XG5cblx0Y29uc3QgR0VUID0gU3ltYm9sKCdnZXQnKTtcblx0Y29uc3QgU0VUID0gU3ltYm9sKCdzZXQnKTtcblxuXHRjb25zdCBwcm9wZXJ0aWVzID0gT2JqZWN0LmZyb21FbnRyaWVzKCBhdHRyaWJ1dGVzLm1hcChuID0+IFtuLCB7XG5cblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24oKTogc3RyaW5nfG51bGwgICAgICB7IHJldHVybiAodGhpcyBhcyB1bmtub3duIGFzIEF0dHJpYnV0ZXMpW0dFVF0obik7IH0sXG5cdFx0c2V0OiBmdW5jdGlvbih2YWx1ZTogc3RyaW5nfG51bGwpIHsgcmV0dXJuICh0aGlzIGFzIHVua25vd24gYXMgQXR0cmlidXRlcylbU0VUXShuLCB2YWx1ZSk7IH1cblx0fV0pICk7XG5cblx0Y2xhc3MgQXR0cmlidXRlcyB7XG4gICAgICAgIFt4OiBzdHJpbmddOiBzdHJpbmd8bnVsbDtcblxuICAgICAgICAjZGF0YSAgICAgOiBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPjtcbiAgICAgICAgI2RlZmF1bHRzIDogUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD47XG4gICAgICAgICNzZXR0ZXIgICA6IChuYW1lOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKSA9PiB2b2lkO1xuXG4gICAgICAgIFtHRVRdKG5hbWU6IEF0dHJzKSB7XG4gICAgICAgIFx0cmV0dXJuIHRoaXMuI2RhdGFbbmFtZV0gPz8gdGhpcy4jZGVmYXVsdHNbbmFtZV0gPz8gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgW1NFVF0obmFtZTogQXR0cnMsIHZhbHVlOiBzdHJpbmd8bnVsbCl7XG4gICAgICAgIFx0cmV0dXJuIHRoaXMuI3NldHRlcihuYW1lLCB2YWx1ZSk7IC8vIHJlcXVpcmVkIHRvIGdldCBhIGNsZWFuIG9iamVjdCB3aGVuIGRvaW5nIHsuLi5hdHRyc31cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGEgICAgOiBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPixcblx0XHRcdFx0XHRkZWZhdWx0czogUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD4sXG4gICAgICAgIFx0XHRcdHNldHRlciAgOiAobmFtZTogQXR0cnMsIHZhbHVlOiBzdHJpbmd8bnVsbCkgPT4gdm9pZCkge1xuXG4gICAgICAgIFx0dGhpcy4jZGF0YSAgICAgPSBkYXRhO1xuXHRcdFx0dGhpcy4jZGVmYXVsdHMgPSBkZWZhdWx0cztcbiAgICAgICAgXHR0aGlzLiNzZXR0ZXIgPSBzZXR0ZXI7XG5cbiAgICAgICAgXHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCBwcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuXHR9XG5cblx0Ly8gQHRzLWlnbm9yZSA6IGJlY2F1c2UgVFMgaXMgc3R1cGlkLlxuXHRjbGFzcyBMSVNTSG9zdEJhc2UgZXh0ZW5kcyBob3N0IHtcblxuXHRcdHJlYWRvbmx5ICNwYXJhbXM6IFBhcmFtcztcblxuXHRcdHJlYWRvbmx5ICNpZCA9ICsraWQ7IC8vIGZvciBkZWJ1Z1xuXG5cdFx0Y29uc3RydWN0b3IocGFyYW1zOiBQYXJ0aWFsPFBhcmFtcz4gPSB7fSkge1xuXHRcdFx0c3VwZXIoKTtcblx0XHRcdHRoaXMuI3BhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIExpc3MuUGFyYW1ldGVycy5wYXJhbXMsIF9wYXJhbXMsIHBhcmFtcyk7XG5cblx0XHRcdHRoaXMuI3dhaXRJbml0ID0gbmV3IFByb21pc2UoIChyZXNvbHZlKSA9PiB7XG5cdFx0XHRcdGlmKHRoaXMuaXNJbml0KVxuXHRcdFx0XHRcdHJldHVybiByZXNvbHZlKHRoaXMuI0FQSSEpO1xuXHRcdFx0XHR0aGlzLiNyZXNvbHZlID0gcmVzb2x2ZTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKioqIHB1YmxpYyBBUEkgKioqKioqKioqKioqKi9cblxuXHRcdGdldCBpc0luaXQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4jQVBJICE9PSBudWxsO1xuXHRcdH1cblx0XHRpbml0aWFsaXplKHBhcmFtczogUGFydGlhbDxQYXJhbXM+ID0ge30pIHtcblxuXHRcdFx0aWYoIHRoaXMuaXNJbml0IClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFbGVtZW50IGFscmVhZHkgaW5pdGlhbGl6ZWQhJyk7XG5cblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcy4jcGFyYW1zLCBwYXJhbXMpO1xuXG5cdFx0XHRjb25zdCBhcGkgPSB0aGlzLmluaXQoKTtcblxuXHRcdFx0aWYoIHRoaXMuI2lzSW5ET00gKVxuXHRcdFx0XHQoYXBpIGFzIGFueSkub25ET01Db25uZWN0ZWQoKTtcblxuXHRcdFx0cmV0dXJuIGFwaTtcblx0XHR9XG5cblx0XHRnZXQgTElTU1N5bmMoKSB7XG5cdFx0XHRpZiggISB0aGlzLmlzSW5pdCApXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQWNjZXNzaW5nIEFQSSBiZWZvcmUgV2ViQ29tcG9uZW50IGluaXRpYWxpemF0aW9uIScpO1xuXHRcdFx0cmV0dXJuIHRoaXMuI0FQSSE7XG5cdFx0fVxuXHRcdGdldCBMSVNTKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuI3dhaXRJbml0O1xuXHRcdH1cblxuXHRcdC8qKiogaW5pdCAqKiovXG5cdFx0I3dhaXRJbml0OiBQcm9taXNlPEluc3RhbmNlVHlwZTxUPj47XG5cdFx0I3Jlc29sdmU6ICgodTogSW5zdGFuY2VUeXBlPFQ+KSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xuXHRcdCNBUEk6IEluc3RhbmNlVHlwZTxUPiB8IG51bGwgPSBudWxsO1xuXG5cdFx0I2lzSW5ET00gPSBmYWxzZTtcblx0XHRnZXQgaXNJbkRPTSgpIHtcblx0XHRcdHJldHVybiB0aGlzLiNpc0luRE9NO1xuXHRcdH1cblxuXHRcdGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuXHRcdFx0dGhpcy4jaXNJbkRPTSA9IGZhbHNlO1xuXHRcdFx0KHRoaXMuI0FQSSEgYXMgYW55KS5vbkRPTURpc2Nvbm5lY3RlZCgpO1xuXHRcdH1cblxuXHRcdGNvbm5lY3RlZENhbGxiYWNrKCkge1xuXG5cdFx0XHR0aGlzLiNpc0luRE9NID0gdHJ1ZTtcblx0XG5cdFx0XHRpZiggISB0aGlzLmlzSW5pdCApIHtcblx0XHRcdFx0dGhpcy5pbml0KCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0KHRoaXMuI0FQSSEgYXMgYW55KS5vbkRPTUNvbm5lY3RlZCgpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgaW5pdCgpIHtcblx0XHRcdFxuXHRcdFx0Y3VzdG9tRWxlbWVudHMudXBncmFkZSh0aGlzKTtcblx0XHRcdFxuXHRcdFx0Ly8gc2hhZG93XG5cdFx0XHR0aGlzLiNjb250ZW50ID0gdGhpcyBhcyB1bmtub3duIGFzIEhvc3Q7XG5cdFx0XHRpZiggc2hhZG93ICE9PSAnbm9uZScpIHtcblx0XHRcdFx0dGhpcy4jY29udGVudCA9IHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiBzaGFkb3d9KTtcblxuXHRcdFx0XHQvL0B0cy1pZ25vcmVcblx0XHRcdFx0dGhpcy4jY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tFdmVudCk7XG5cdFx0XHRcdC8vQHRzLWlnbm9yZVxuXHRcdFx0XHR0aGlzLiNjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgb25DbGlja0V2ZW50KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gYXR0cnNcblx0XHRcdGZvcihsZXQgb2JzIG9mIGF0dHJpYnV0ZXMhKVxuXHRcdFx0XHR0aGlzLiNhdHRyaWJ1dGVzW29ic10gPSB0aGlzLmdldEF0dHJpYnV0ZShvYnMpO1xuXG5cdFx0XHQvLyBjc3Ncblx0XHRcdGlmKCBzaGFkb3cgIT09ICdub25lJylcblx0XHRcdFx0KHRoaXMuI2NvbnRlbnQgYXMgU2hhZG93Um9vdCkuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc2hhcmVkQ1NTKTtcblx0XHRcdGlmKCBzdHlsZXNoZWV0cy5sZW5ndGggKSB7XG5cblx0XHRcdFx0aWYoIHNoYWRvdyAhPT0gJ25vbmUnKVxuXHRcdFx0XHRcdCh0aGlzLiNjb250ZW50IGFzIFNoYWRvd1Jvb3QpLmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKC4uLnN0eWxlc2hlZXRzKTtcblx0XHRcdFx0ZWxzZSB7XG5cblx0XHRcdFx0XHRjb25zdCBjc3NzZWxlY3RvciA9IHRoaXMuQ1NTU2VsZWN0b3I7XG5cblx0XHRcdFx0XHQvLyBpZiBub3QgeWV0IGluc2VydGVkIDpcblx0XHRcdFx0XHRpZiggISBhbHJlYWR5RGVjbGFyZWRDU1MuaGFzKGNzc3NlbGVjdG9yKSApIHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0bGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuXHRcdFx0XHRcdFx0c3R5bGUuc2V0QXR0cmlidXRlKCdmb3InLCBjc3NzZWxlY3Rvcik7XG5cblx0XHRcdFx0XHRcdGxldCBodG1sX3N0eWxlc2hlZXRzID0gXCJcIjtcblxuXHRcdFx0XHRcdFx0Zm9yKGxldCBzdHlsZSBvZiBzdHlsZXNoZWV0cylcblx0XHRcdFx0XHRcdFx0Zm9yKGxldCBydWxlIG9mIHN0eWxlLmNzc1J1bGVzKVxuXHRcdFx0XHRcdFx0XHRcdGh0bWxfc3R5bGVzaGVldHMgKz0gcnVsZS5jc3NUZXh0ICsgJ1xcbic7XG5cblx0XHRcdFx0XHRcdHN0eWxlLmlubmVySFRNTCA9IGh0bWxfc3R5bGVzaGVldHMucmVwbGFjZSgnOmhvc3QnLCBgOmlzKCR7Y3Nzc2VsZWN0b3J9KWApO1xuXG5cdFx0XHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZChzdHlsZSk7XG5cblx0XHRcdFx0XHRcdGFscmVhZHlEZWNsYXJlZENTUy5hZGQoY3Nzc2VsZWN0b3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBjb250ZW50XG5cdFx0XHRpZiggY29udGVudCAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRsZXQgdGVtcGxhdGVfZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cdFx0XHRcdGxldCBzdHIgPSAoY29udGVudCBhcyBzdHJpbmcpLnJlcGxhY2UoL1xcJFxceyguKz8pXFx9L2csIChfLCBtYXRjaCkgPT4gdGhpcy5nZXRBdHRyaWJ1dGUobWF0Y2gpPz8nJylcblx0ICAgIFx0XHR0ZW1wbGF0ZV9lbGVtLmlubmVySFRNTCA9IHN0cjtcblx0ICAgIFx0XHR0aGlzLiNjb250ZW50LmFwcGVuZCguLi50ZW1wbGF0ZV9lbGVtLmNvbnRlbnQuY2hpbGROb2Rlcyk7XG5cdCAgICBcdH1cblxuXHQgICAgXHQvLyBidWlsZFxuXG5cdCAgICBcdC8vIGg0Y2ssIG9rYXkgYmVjYXVzZSBKUyBpcyBtb25vdGhyZWFkZWQuXG5cdFx0XHRfX2NzdHJfaG9zdCAgID0gdGhpcztcblxuXHQgICAgXHRsZXQgb2JqID0gbmV3IExpc3MoKTtcblxuXHQgICAgXHQvKmlmKCBvYmogaW5zdGFuY2VvZiBQcm9taXNlKVxuXHQgICAgXHRcdG9iaiA9IGF3YWl0IG9iajsqL1xuXG5cdFx0XHR0aGlzLiNBUEkgPSBvYmogYXMgSW5zdGFuY2VUeXBlPFQ+O1xuXG5cdFx0XHQvLyBkZWZhdWx0IHNsb3Rcblx0XHRcdGlmKCB0aGlzLmhhc1NoYWRvdyAmJiB0aGlzLiNjb250ZW50LmNoaWxkTm9kZXMubGVuZ3RoID09PSAwIClcblx0XHRcdFx0dGhpcy4jY29udGVudC5hcHBlbmQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Nsb3QnKSApO1xuXG5cdFx0XHRpZiggdGhpcy4jcmVzb2x2ZSAhPT0gbnVsbClcblx0XHRcdFx0dGhpcy4jcmVzb2x2ZSh0aGlzLiNBUEkpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy4jQVBJO1xuXHRcdH1cblxuXHRcdGdldCBwYXJhbXMoKTogUGFyYW1zIHtcblx0XHRcdHJldHVybiB0aGlzLiNwYXJhbXM7XG5cdFx0fVxuXG5cblx0XHQvKioqIGNvbnRlbnQgKioqL1xuXHRcdCNjb250ZW50OiBIb3N0fFNoYWRvd1Jvb3R8bnVsbCA9IG51bGw7XG5cblx0XHRnZXQgY29udGVudCgpIHtcblx0XHRcdHJldHVybiB0aGlzLiNjb250ZW50O1xuXHRcdH1cblxuXHRcdGdldFBhcnQobmFtZTogc3RyaW5nKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5oYXNTaGFkb3dcblx0XHRcdFx0XHQ/IHRoaXMuI2NvbnRlbnQ/LnF1ZXJ5U2VsZWN0b3IoYDo6cGFydCgke25hbWV9KWApXG5cdFx0XHRcdFx0OiB0aGlzLiNjb250ZW50Py5xdWVyeVNlbGVjdG9yKGBbcGFydD1cIiR7bmFtZX1cIl1gKTtcblx0XHR9XG5cdFx0Z2V0UGFydHMobmFtZTogc3RyaW5nKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5oYXNTaGFkb3dcblx0XHRcdFx0XHQ/IHRoaXMuI2NvbnRlbnQ/LnF1ZXJ5U2VsZWN0b3JBbGwoYDo6cGFydCgke25hbWV9KWApXG5cdFx0XHRcdFx0OiB0aGlzLiNjb250ZW50Py5xdWVyeVNlbGVjdG9yQWxsKGBbcGFydD1cIiR7bmFtZX1cIl1gKTtcblx0XHR9XG5cblx0XHRwcm90ZWN0ZWQgZ2V0IGhhc1NoYWRvdygpOiBib29sZWFuIHtcblx0XHRcdHJldHVybiBzaGFkb3cgIT09ICdub25lJztcblx0XHR9XG5cblx0XHQvKioqIENTUyAqKiovXG5cblx0XHRnZXQgQ1NTU2VsZWN0b3IoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5oYXNTaGFkb3dcblx0XHRcdFx0XHQ/IHRoaXMudGFnTmFtZVxuXHRcdFx0XHRcdDogYCR7dGhpcy50YWdOYW1lfVtpcz1cIiR7dGhpcy5nZXRBdHRyaWJ1dGUoXCJpc1wiKX1cIl1gO1xuXHRcdH1cblxuXHRcdC8qKiogYXR0cnMgKioqL1xuXHRcdCNhdHRyc19mbGFnID0gZmFsc2U7XG5cblx0XHQjYXR0cmlidXRlcyAgICAgICAgID0ge30gYXMgUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD47XG5cdFx0I2F0dHJpYnV0ZXNEZWZhdWx0cyA9IHt9IGFzIFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuXHRcdCNhdHRycyA9IG5ldyBBdHRyaWJ1dGVzKFxuXHRcdFx0dGhpcy4jYXR0cmlidXRlcyxcblx0XHRcdHRoaXMuI2F0dHJpYnV0ZXNEZWZhdWx0cyxcblx0XHRcdChuYW1lOiBBdHRycywgdmFsdWU6c3RyaW5nfG51bGwpID0+IHtcblxuXHRcdFx0XHR0aGlzLiNhdHRyaWJ1dGVzW25hbWVdID0gdmFsdWU7XG5cblx0XHRcdFx0dGhpcy4jYXR0cnNfZmxhZyA9IHRydWU7IC8vIGRvIG5vdCB0cmlnZ2VyIG9uQXR0cnNDaGFuZ2VkLlxuXHRcdFx0XHRpZiggdmFsdWUgPT09IG51bGwpXG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHR0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0KSBhcyB1bmtub3duIGFzIFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuXG5cdFx0c2V0QXR0ckRlZmF1bHQobmFtZTogQXR0cnMsIHZhbHVlOiBzdHJpbmd8bnVsbCkge1xuXHRcdFx0aWYoIHZhbHVlID09PSBudWxsKVxuXHRcdFx0XHRkZWxldGUgdGhpcy4jYXR0cmlidXRlc0RlZmF1bHRzW25hbWVdO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHR0aGlzLiNhdHRyaWJ1dGVzRGVmYXVsdHNbbmFtZV0gPSB2YWx1ZTtcblx0XHR9XG5cblx0XHRnZXQgYXR0cnMoKTogUmVhZG9ubHk8UmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD4+IHtcblxuXHRcdFx0cmV0dXJuIHRoaXMuI2F0dHJzO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuXHRcdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lICAgIDogQXR0cnMsXG5cdFx0XHRcdFx0XHRcdFx0IG9sZFZhbHVlOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdFx0IG5ld1ZhbHVlOiBzdHJpbmcpIHtcblxuXHRcdFx0aWYodGhpcy4jYXR0cnNfZmxhZykge1xuXHRcdFx0XHR0aGlzLiNhdHRyc19mbGFnID0gZmFsc2U7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy4jYXR0cmlidXRlc1tuYW1lXSA9IG5ld1ZhbHVlO1xuXHRcdFx0aWYoICEgdGhpcy5pc0luaXQgKVxuXHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdGlmKCAodGhpcy4jQVBJISBhcyBhbnkpLm9uQXR0ckNoYW5nZWQobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0dGhpcy4jYXR0cnNbbmFtZV0gPSBvbGRWYWx1ZTsgLy8gcmV2ZXJ0IHRoZSBjaGFuZ2UuXG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiBMSVNTSG9zdEJhc2U7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgZGVmaW5lID09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgX0RPTUNvbnRlbnRMb2FkZWQgPSBuZXcgUHJvbWlzZTx2b2lkPiggKHJlc29sdmUpID0+IHtcblxuXHRpZihkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImludGVyYWN0aXZlXCIgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKVxuXHRcdHJldHVybiByZXNvbHZlKCk7XG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblx0XHRyZXNvbHZlKCk7XG5cdH0sIHRydWUpO1xufSk7XG5cbkxJU1MuZGVmaW5lID0gYXN5bmMgZnVuY3Rpb248RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdFx0XHQgSG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdFx0ICAgICBBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdFx0ICAgICBQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+LFxuXHRcdFx0XHRcdFx0ICAgXHQgVCBleHRlbmRzIExJU1NSZXR1cm5UeXBlPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXM+Pihcblx0XHRcdFx0XHRcdCAgIFx0dGFnbmFtZTogc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRDb21wb25lbnRDbGFzczogVCxcblx0XHRcdFx0XHRcdFx0e2RlcGVuZGVuY2llcywgcGFyYW1zfToge3BhcmFtcz86IFBhcnRpYWw8UGFyYW1zPiwgZGVwZW5kZW5jaWVzPzogcmVhZG9ubHkgUHJvbWlzZTxzdHJpbmc+W119ID0ge30pIHtcblxuXHRkZXBlbmRlbmNpZXM/Pz1bXTtcblx0cGFyYW1zICAgICAgPz89IHt9O1xuXG5cdGNvbnN0IENsYXNzID0gQ29tcG9uZW50Q2xhc3MuUGFyYW1ldGVycy5ob3N0O1xuXHRsZXQgTElTU0Jhc2U6IGFueSA9IENvbXBvbmVudENsYXNzO1xuXHRsZXQgaHRtbHRhZyA9IF9lbGVtZW50MnRhZ25hbWUoQ2xhc3MpPz91bmRlZmluZWQ7XG5cblx0YXdhaXQgUHJvbWlzZS5hbGwoW19ET01Db250ZW50TG9hZGVkLCAuLi5kZXBlbmRlbmNpZXMsIC4uLkxJU1NCYXNlLlBhcmFtZXRlcnMuZGVwZW5kZW5jaWVzXSk7XG5cblx0Y29uc3QgTElTU2NsYXNzID0gYnVpbGRMSVNTSG9zdDxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zLCBUPihDb21wb25lbnRDbGFzcywgcGFyYW1zKTtcblx0XG5cdGNvbnN0IG9wdHMgPSBodG1sdGFnID09PSB1bmRlZmluZWQgPyB7fVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgOiB7ZXh0ZW5kczogaHRtbHRhZ307XG5cdFxuXHRjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnbmFtZSwgTElTU2NsYXNzLCBvcHRzKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgU2hhZG93Um9vdCB0b29scyA9PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3Qgc2hhcmVkQ1NTID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbmRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHNoYXJlZENTUyk7XG5cbkxJU1MuaW5zZXJ0R2xvYmFsQ1NTUnVsZXMgPSBmdW5jdGlvbihjc3M6IHN0cmluZ3xIVE1MU3R5bGVFbGVtZW50KSB7XG5cblx0bGV0IGNzc19zdHlsZSE6IENTU1N0eWxlU2hlZXQ7XG5cblx0aWYoIGNzcyBpbnN0YW5jZW9mIEhUTUxTdHlsZUVsZW1lbnQgKVxuXHRcdGNzc19zdHlsZSA9IGNzcy5zaGVldCE7XG5cdGlmKCB0eXBlb2YgY3NzID09PSBcInN0cmluZ1wiKSB7XG5cdFx0Y3NzX3N0eWxlID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcblx0XHRjc3Nfc3R5bGUucmVwbGFjZVN5bmMoY3NzKTtcblx0fVxuXG5cdGZvcihsZXQgcnVsZSBvZiBjc3Nfc3R5bGUuY3NzUnVsZXMpXG5cdFx0c2hhcmVkQ1NTLmluc2VydFJ1bGUocnVsZS5jc3NUZXh0KTtcbn1cblxudHlwZSBEZWxlZ2F0ZWRIYW5kbGVyID0gW3N0cmluZywgKGV2OiBNb3VzZUV2ZW50KSA9PiB2b2lkXTtcbmNvbnN0IERFTEVHQVRFRF9FVkVOVFMgPSB7XG5cdFwiY2xpY2tcIjogW10gYXMgRGVsZWdhdGVkSGFuZGxlcltdLFxuXHRcImRibGNsaWNrXCI6IFtdIGFzIERlbGVnYXRlZEhhbmRsZXJbXVxufTtcblxuY29uc3QgQUxSRUFEWV9QUk9DRVNTRUQgPSBTeW1ib2woKTtcblxuZnVuY3Rpb24gb25DbGlja0V2ZW50KGV2OiBNb3VzZUV2ZW50KSB7XG5cblx0aWYoIChldiBhcyBhbnkpW0FMUkVBRFlfUFJPQ0VTU0VEXSA9PT0gdHJ1ZSApXG5cdFx0cmV0dXJuO1xuXHQoZXYgYXMgYW55KVtBTFJFQURZX1BST0NFU1NFRF0gPSB0cnVlO1xuXG5cdGNvbnN0IGhhbmRsZXJzID0gREVMRUdBVEVEX0VWRU5UU1tldi50eXBlIGFzIGtleW9mIHR5cGVvZiBERUxFR0FURURfRVZFTlRTXTtcblxuXHRmb3IobGV0IGVsZW0gb2YgZXYuY29tcG9zZWRQYXRoKCkgKSB7XG5cdFxuXHRcdGlmKCBlbGVtIGluc3RhbmNlb2YgU2hhZG93Um9vdCB8fCBlbGVtID09PSBkb2N1bWVudCB8fCBlbGVtID09PSB3aW5kb3cgKVxuXHRcdFx0Y29udGludWU7XG5cblx0XHR2YXIgdGFyZ2V0ID0gZWxlbSBhcyBFbGVtZW50O1xuXG5cdFx0Zm9yKGxldCBbc2VsZWN0b3IsIGhhbmRsZXJdIG9mIGhhbmRsZXJzKSB7XG5cdFx0XHRpZiggdGFyZ2V0Lm1hdGNoZXMoc2VsZWN0b3IpIClcblx0XHRcdFx0aGFuZGxlcihldik7XG5cdFx0fVxuXHR9XG59XG5cbkxJU1MuaW5zZXJ0R2xvYmFsRGVsZWdhdGVkTGlzdGVuZXIgPSBmdW5jdGlvbihldmVudF9uYW1lOiBrZXlvZiB0eXBlb2YgREVMRUdBVEVEX0VWRU5UUywgc2VsZWN0b3I6IHN0cmluZywgaGFuZGxlcjogKGV2OiBNb3VzZUV2ZW50KSA9PiB2b2lkICkge1xuXHRERUxFR0FURURfRVZFTlRTW2V2ZW50X25hbWVdLnB1c2goW3NlbGVjdG9yLCBoYW5kbGVyXSlcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrRXZlbnQpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBvbkNsaWNrRXZlbnQpO1xuXG5MSVNTLmNsb3Nlc3QgPSBmdW5jdGlvbiBjbG9zZXN0PEUgZXh0ZW5kcyBFbGVtZW50PihzZWxlY3Rvcjogc3RyaW5nLCBlbGVtZW50OiBFbGVtZW50KSB7XG5cblx0d2hpbGUodHJ1ZSkge1xuXHRcdHZhciByZXN1bHQgPSBlbGVtZW50LmNsb3Nlc3Q8RT4oc2VsZWN0b3IpO1xuXG5cdFx0aWYoIHJlc3VsdCAhPT0gbnVsbClcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cblx0XHRjb25zdCByb290ID0gZWxlbWVudC5nZXRSb290Tm9kZSgpO1xuXHRcdGlmKCAhIChcImhvc3RcIiBpbiByb290KSApXG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdGVsZW1lbnQgPSAocm9vdCBhcyBTaGFkb3dSb290KS5ob3N0O1xuXHR9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgaGVscGVycyA9PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBpbmZlclBhcmFtczxUPiA9IFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSwgaW5mZXIgUCBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pj4gPyBQIDogbmV2ZXI7XG5cbnR5cGUgQlVJTERfT1BUSU9OUzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4gPSBQYXJ0aWFsPHtcblx0XHRcdFx0XHQgIFx0cGFyYW1zICAgIDogUGFydGlhbDxpbmZlclBhcmFtczxUPj4sXG5cdFx0XHRcdFx0ICBcdGNvbnRlbnRcdCAgOiBzdHJpbmd8Tm9kZXxyZWFkb25seSBOb2RlW10sXG5cdFx0XHRcdFx0XHRpZCBcdFx0ICA6IHN0cmluZyxcblx0XHRcdFx0XHQgIFx0Y2xhc3Nlc1x0ICA6IHJlYWRvbmx5IHN0cmluZ1tdLFxuXHRcdFx0XHRcdCAgXHRjc3N2YXJzICAgOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+Pixcblx0XHRcdFx0XHQgIFx0YXR0cnMgXHQgIDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgc3RyaW5nfGJvb2xlYW4+Pixcblx0XHRcdFx0XHQgIFx0ZGF0YSBcdCAgOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmd8Ym9vbGVhbj4+LFxuXHRcdFx0XHRcdCAgXHRsaXN0ZW5lcnMgOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCAoZXY6IEV2ZW50KSA9PiB2b2lkPj5cblx0XHRcdFx0XHR9PiAmICh7XG5cdFx0XHRcdFx0XHRpbml0aWFsaXplOiBmYWxzZSxcblx0XHRcdFx0XHRcdHBhcmVudDogRWxlbWVudFxuXHRcdFx0XHRcdH18e1xuXHRcdFx0XHRcdFx0aW5pdGlhbGl6ZT86IHRydWUsXG5cdFx0XHRcdFx0XHRwYXJlbnQ/OiBFbGVtZW50XG5cdFx0XHRcdFx0fSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGJ1aWxkPFQgZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPih0YWduYW1lOiBULCBvcHRpb25zPzogQlVJTERfT1BUSU9OUzxDb21wb25lbnRzW1RdPik6IFByb21pc2U8Q29tcG9uZW50c1tUXT47XG5hc3luYyBmdW5jdGlvbiBidWlsZDxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4odGFnbmFtZTogc3RyaW5nLCBvcHRpb25zPzogQlVJTERfT1BUSU9OUzxUPik6IFByb21pc2U8VD47XG5hc3luYyBmdW5jdGlvbiBidWlsZDxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4odGFnbmFtZTogc3RyaW5nLCB7XG5cdFx0cGFyYW1zICAgID0ge30sXG5cdFx0aW5pdGlhbGl6ZT0gdHJ1ZSxcblx0XHRjb250ZW50ICAgPSBbXSxcblx0XHRwYXJlbnQgICAgPSB1bmRlZmluZWQsXG5cdFx0aWQgXHRcdCAgPSB1bmRlZmluZWQsXG5cdFx0Y2xhc3NlcyAgID0gW10sXG5cdFx0Y3NzdmFycyAgID0ge30sXG5cdFx0YXR0cnMgICAgID0ge30sXG5cdFx0ZGF0YSBcdCAgPSB7fSxcblx0XHRsaXN0ZW5lcnMgPSB7fVxuXHR9OiBCVUlMRF9PUFRJT05TPFQ+ID0ge30pOiBQcm9taXNlPFQ+IHtcblxuXHRpZiggISBpbml0aWFsaXplICYmIHBhcmVudCA9PT0gbnVsbClcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJBIHBhcmVudCBtdXN0IGJlIGdpdmVuIGlmIGluaXRpYWxpemUgaXMgZmFsc2VcIik7XG5cblx0bGV0IEN1c3RvbUNsYXNzID0gYXdhaXQgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQodGFnbmFtZSk7XG5cdGxldCBlbGVtID0gbmV3IEN1c3RvbUNsYXNzKHBhcmFtcykgYXMgTElTU0hvc3Q8VD47XG5cblx0Ly8gRml4IGlzc3VlICMyXG5cdGlmKCBlbGVtLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gdGFnbmFtZSApXG5cdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoXCJpc1wiLCB0YWduYW1lKTtcblxuXHRpZiggaWQgIT09IHVuZGVmaW5lZCApXG5cdFx0ZWxlbS5pZCA9IGlkO1xuXG5cdGlmKCBjbGFzc2VzLmxlbmd0aCA+IDApXG5cdFx0ZWxlbS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBjc3N2YXJzKVxuXHRcdGVsZW0uc3R5bGUuc2V0UHJvcGVydHkoYC0tJHtuYW1lfWAsIGNzc3ZhcnNbbmFtZV0pO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBhdHRycykge1xuXG5cdFx0bGV0IHZhbHVlID0gYXR0cnNbbmFtZV07XG5cdFx0aWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpXG5cdFx0XHRlbGVtLnRvZ2dsZUF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdFx0ZWxzZVxuXHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXHR9XG5cblx0Zm9yKGxldCBuYW1lIGluIGRhdGEpIHtcblxuXHRcdGxldCB2YWx1ZSA9IGRhdGFbbmFtZV07XG5cdFx0aWYoIHZhbHVlID09PSBmYWxzZSlcblx0XHRcdGRlbGV0ZSBlbGVtLmRhdGFzZXRbbmFtZV07XG5cdFx0ZWxzZSBpZih2YWx1ZSA9PT0gdHJ1ZSlcblx0XHRcdGVsZW0uZGF0YXNldFtuYW1lXSA9IFwiXCI7XG5cdFx0ZWxzZVxuXHRcdFx0ZWxlbS5kYXRhc2V0W25hbWVdID0gdmFsdWU7XG5cdH1cblxuXHRpZiggISBBcnJheS5pc0FycmF5KGNvbnRlbnQpIClcblx0XHRjb250ZW50ID0gW2NvbnRlbnQgYXMgYW55XTtcblx0ZWxlbS5yZXBsYWNlQ2hpbGRyZW4oLi4uY29udGVudCk7XG5cblx0Zm9yKGxldCBuYW1lIGluIGxpc3RlbmVycylcblx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgbGlzdGVuZXJzW25hbWVdKTtcblxuXHRpZiggcGFyZW50ICE9PSB1bmRlZmluZWQgKVxuXHRcdHBhcmVudC5hcHBlbmQoZWxlbSk7XG5cblx0aWYoICEgZWxlbS5pc0luaXQgJiYgaW5pdGlhbGl6ZSApXG5cdFx0cmV0dXJuIGF3YWl0IExJU1MuaW5pdGlhbGl6ZShlbGVtKTtcblxuXHRyZXR1cm4gYXdhaXQgTElTUy5nZXRMSVNTKGVsZW0pO1xufVxuTElTUy5idWlsZCA9IGJ1aWxkO1xuXG5cbkxJU1Mud2hlbkRlZmluZWQgICAgPSBhc3luYyBmdW5jdGlvbih0YWduYW1lOiBzdHJpbmcsIGNhbGxiYWNrPzogKCkgPT4gdm9pZCApIDogUHJvbWlzZTx2b2lkPiB7XG5cblx0YXdhaXQgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQodGFnbmFtZSk7XG5cblx0aWYoIGNhbGxiYWNrICE9PSB1bmRlZmluZWQpXG5cdFx0Y2FsbGJhY2soKTtcblxuXHRyZXR1cm47XG59XG5MSVNTLndoZW5BbGxEZWZpbmVkID0gYXN5bmMgZnVuY3Rpb24odGFnbmFtZXM6IHJlYWRvbmx5IHN0cmluZ1tdLCBjYWxsYmFjaz86ICgpID0+IHZvaWQgKSA6IFByb21pc2U8dm9pZD4ge1xuXG5cdGF3YWl0IFByb21pc2UuYWxsKCB0YWduYW1lcy5tYXAoIHQgPT4gY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQodCkgKSApXG5cblx0aWYoIGNhbGxiYWNrICE9PSB1bmRlZmluZWQpXG5cdFx0Y2FsbGJhY2soKTtcblxufVxuXG5MSVNTLmlzRGVmaW5lZCA9IGZ1bmN0aW9uKG5hbWU6IHN0cmluZykge1xuXHRyZXR1cm4gY3VzdG9tRWxlbWVudHMuZ2V0KG5hbWUpO1xufVxuXG5MSVNTLnNlbGVjdG9yID0gZnVuY3Rpb24obmFtZT86IHN0cmluZykge1xuXHRpZihuYW1lID09PSB1bmRlZmluZWQpIC8vIGp1c3QgYW4gaDRja1xuXHRcdHJldHVybiBcIlwiO1xuXHRyZXR1cm4gYDppcygke25hbWV9LCBbaXM9XCIke25hbWV9XCJdKWA7XG59XG5cbkxJU1MuZ2V0TElTUyAgICA9IGFzeW5jIGZ1bmN0aW9uPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PiggZWxlbWVudDogRWxlbWVudCApIHtcblxuXHRhd2FpdCBMSVNTLndoZW5EZWZpbmVkKCBMSVNTLmdldE5hbWUoZWxlbWVudCkgKTtcblxuXHRyZXR1cm4gKGVsZW1lbnQgYXMgTElTU0hvc3Q8VD4pLkxJU1M7IC8vIGVuc3VyZSBpbml0aWFsaXplZC5cbn1cbkxJU1MuZ2V0TElTU1N5bmM9IGZ1bmN0aW9uPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PiggZWxlbWVudDogRWxlbWVudCApIHtcblxuXHRpZiggISBMSVNTLmlzRGVmaW5lZCggTElTUy5nZXROYW1lKGVsZW1lbnQpICkgKVxuXHRcdHRocm93IG5ldyBFcnJvcihgJHtuYW1lfSBoYXNuJ3QgYmVlbiBkZWZpbmVkIHlldC5gKTtcblxuXHRsZXQgaG9zdCA9IGVsZW1lbnQgYXMgTElTU0hvc3Q8VD47XG5cblx0aWYoICEgaG9zdC5pc0luaXQgKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIkluc3RhbmNlIGhhc24ndCBiZWVuIGluaXRpYWxpemVkIHlldC5cIik7XG5cblx0cmV0dXJuIGhvc3QuTElTU1N5bmM7XG59XG5MSVNTLmluaXRpYWxpemUgPSBhc3luYyBmdW5jdGlvbjxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oIGVsZW1lbnQ6IEVsZW1lbnQpIHtcblxuXHRhd2FpdCBMSVNTLndoZW5EZWZpbmVkKCBMSVNTLmdldE5hbWUoZWxlbWVudCkgKTtcblxuXHRyZXR1cm4gYXdhaXQgKGVsZW1lbnQgYXMgTElTU0hvc3Q8VD4pLmluaXRpYWxpemUoKTsgLy8gZW5zdXJlIGluaXRpYWxpemF0aW9uLlxufVxuXG5MSVNTLmdldE5hbWUgPSBmdW5jdGlvbiggZWxlbWVudDogRWxlbWVudCApOiBzdHJpbmcge1xuXG5cdGNvbnN0IG5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaXMnKSA/PyBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblx0XG5cdGlmKCAhIG5hbWUuaW5jbHVkZXMoJy0nKSApXG5cdFx0dGhyb3cgbmV3IEVycm9yKGBFbGVtZW50ICR7bmFtZX0gaXMgbm90IGEgV2ViQ29tcG9uZW50YCk7XG5cblx0cmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIF9idWlsZFFTKHNlbGVjdG9yOiBzdHJpbmcsIHRhZ25hbWVfb3JfcGFyZW50Pzogc3RyaW5nIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LCBwYXJlbnQ6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cdFxuXHRpZiggdGFnbmFtZV9vcl9wYXJlbnQgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdGFnbmFtZV9vcl9wYXJlbnQgIT09ICdzdHJpbmcnKSB7XG5cdFx0cGFyZW50ID0gdGFnbmFtZV9vcl9wYXJlbnQ7XG5cdFx0dGFnbmFtZV9vcl9wYXJlbnQgPSB1bmRlZmluZWQ7XG5cdH1cblxuXHRyZXR1cm4gW2Ake3NlbGVjdG9yfSR7TElTUy5zZWxlY3Rvcih0YWduYW1lX29yX3BhcmVudCBhcyBzdHJpbmd8dW5kZWZpbmVkKX1gLCBwYXJlbnRdIGFzIGNvbnN0O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIFF1ZXJ5U2VsZWN0b3JzID09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmFzeW5jIGZ1bmN0aW9uIHFzPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPFQ+O1xuYXN5bmMgZnVuY3Rpb24gcXM8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8IENvbXBvbmVudHNbTl0gPjtcbmFzeW5jIGZ1bmN0aW9uIHFzPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsXG5cdFx0XHRcdFx0XHRwYXJlbnQgIDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblxuXHRbc2VsZWN0b3IsIHBhcmVudF0gPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIHBhcmVudCk7XG5cblx0bGV0IHJlc3VsdCA9IGF3YWl0IExJU1MucXNvPFQ+KHNlbGVjdG9yLCBwYXJlbnQpO1xuXHRpZihyZXN1bHQgPT09IG51bGwpXG5cdFx0dGhyb3cgbmV3IEVycm9yKGBFbGVtZW50ICR7c2VsZWN0b3J9IG5vdCBmb3VuZGApO1xuXG5cdHJldHVybiByZXN1bHQhXG59XG5MSVNTLnFzICA9IHFzXG5cbmFzeW5jIGZ1bmN0aW9uIHFzbzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTxUPjtcbmFzeW5jIGZ1bmN0aW9uIHFzbzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTwgQ29tcG9uZW50c1tOXSA+O1xuYXN5bmMgZnVuY3Rpb24gcXNvPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsXG5cdFx0XHRcdFx0XHRwYXJlbnQgIDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblxuXHRbc2VsZWN0b3IsIHBhcmVudF0gPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIHBhcmVudCk7XG5cblx0Y29uc3QgZWxlbWVudCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yPExJU1NIb3N0PFQ+PihzZWxlY3Rvcik7XG5cdGlmKCBlbGVtZW50ID09PSBudWxsIClcblx0XHRyZXR1cm4gbnVsbDtcblxuXHRyZXR1cm4gYXdhaXQgTElTUy5nZXRMSVNTKCBlbGVtZW50ICk7XG59XG5MSVNTLnFzbyA9IHFzb1xuXG5hc3luYyBmdW5jdGlvbiBxc2E8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8VFtdPjtcbmFzeW5jIGZ1bmN0aW9uIHFzYTxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTwgQ29tcG9uZW50c1tOXVtdID47XG5hc3luYyBmdW5jdGlvbiBxc2E8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRjb25zdCBlbGVtZW50cyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsPExJU1NIb3N0PFQ+PihzZWxlY3Rvcik7XG5cblx0bGV0IGlkeCA9IDA7XG5cdGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8VD4+KCBlbGVtZW50cy5sZW5ndGggKTtcblx0Zm9yKGxldCBlbGVtZW50IG9mIGVsZW1lbnRzKVxuXHRcdHByb21pc2VzW2lkeCsrXSA9IExJU1MuZ2V0TElTUyggZWxlbWVudCApO1xuXG5cdHJldHVybiBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59XG5MSVNTLnFzYSA9IHFzYTtcblxuYXN5bmMgZnVuY3Rpb24gcXNjPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgOiBFbGVtZW50KTogUHJvbWlzZTxUPjtcbmFzeW5jIGZ1bmN0aW9uIHFzYzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdGVsZW1lbnQgIDogRWxlbWVudCk6IFByb21pc2U8IENvbXBvbmVudHNbTl0gPjtcbmFzeW5jIGZ1bmN0aW9uIHFzYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudCxcblx0XHRcdFx0XHRcdGVsZW1lbnQgID86IEVsZW1lbnQpIHtcblxuXHRjb25zdCByZXMgPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIGVsZW1lbnQpO1xuXHRcblx0Y29uc3QgcmVzdWx0ID0gKHJlc1sxXSBhcyB1bmtub3duIGFzIEVsZW1lbnQpLmNsb3Nlc3Q8TElTU0hvc3Q8VD4+KHJlc1swXSk7XG5cdGlmKHJlc3VsdCA9PT0gbnVsbClcblx0XHRyZXR1cm4gbnVsbDtcblxuXHRyZXR1cm4gYXdhaXQgTElTUy5nZXRMSVNTKHJlc3VsdCk7XG59XG5MSVNTLnFzYyA9IHFzYztcblxuZnVuY3Rpb24gcXNTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBUO1xuZnVuY3Rpb24gcXNTeW5jPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBDb21wb25lbnRzW05dO1xuZnVuY3Rpb24gcXNTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsXG5cdFx0XHRcdFx0XHRwYXJlbnQgIDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblxuXHRbc2VsZWN0b3IsIHBhcmVudF0gPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIHBhcmVudCk7XG5cblx0Y29uc3QgZWxlbWVudCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yPExJU1NIb3N0PFQ+PihzZWxlY3Rvcik7XG5cblx0aWYoIGVsZW1lbnQgPT09IG51bGwgKVxuXHRcdHRocm93IG5ldyBFcnJvcihgRWxlbWVudCAke3NlbGVjdG9yfSBub3QgZm91bmRgKTtcblxuXHRyZXR1cm4gTElTUy5nZXRMSVNTU3luYyggZWxlbWVudCApO1xufVxuTElTUy5xc1N5bmMgPSBxc1N5bmM7XG5cbmZ1bmN0aW9uIHFzYVN5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFRbXTtcbmZ1bmN0aW9uIHFzYVN5bmM8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IENvbXBvbmVudHNbTl1bXTtcbmZ1bmN0aW9uIHFzYVN5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRjb25zdCBlbGVtZW50cyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsPExJU1NIb3N0PFQ+PihzZWxlY3Rvcik7XG5cblx0bGV0IGlkeCA9IDA7XG5cdGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxUPiggZWxlbWVudHMubGVuZ3RoICk7XG5cdGZvcihsZXQgZWxlbWVudCBvZiBlbGVtZW50cylcblx0XHRyZXN1bHRbaWR4KytdID0gTElTUy5nZXRMSVNTU3luYyggZWxlbWVudCApO1xuXG5cdHJldHVybiByZXN1bHQ7XG59XG5MSVNTLnFzYVN5bmMgPSBxc2FTeW5jO1xuXG5mdW5jdGlvbiBxc2NTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgOiBFbGVtZW50KTogVDtcbmZ1bmN0aW9uIHFzY1N5bmM8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA6IEVsZW1lbnQpOiBDb21wb25lbnRzW05dO1xuZnVuY3Rpb24gcXNjU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudCxcblx0XHRcdFx0XHRcdGVsZW1lbnQgID86IEVsZW1lbnQpIHtcblxuXHRjb25zdCByZXMgPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIGVsZW1lbnQpO1xuXHRcblx0Y29uc3QgcmVzdWx0ID0gKHJlc1sxXSBhcyB1bmtub3duIGFzIEVsZW1lbnQpLmNsb3Nlc3Q8TElTU0hvc3Q8VD4+KHJlc1swXSk7XG5cdGlmKHJlc3VsdCA9PT0gbnVsbClcblx0XHRyZXR1cm4gbnVsbDtcblxuXHRyZXR1cm4gTElTUy5nZXRMSVNTU3luYyhyZXN1bHQpO1xufVxuTElTUy5xc2NTeW5jID0gcXNjU3luYztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBBdXRvID09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgY2xhc3MgTElTU19BdXRvIGV4dGVuZHMgTElTUyh7YXR0cmlidXRlczogW1wic3JjXCJdfSkge1xuXG5cdHJlYWRvbmx5ICNrbm93bl90YWcgPSBuZXcgU2V0PHN0cmluZz4oKTtcblx0cmVhZG9ubHkgI2RpcmVjdG9yeTogc3RyaW5nO1xuXHRyZWFkb25seSAjc3c6IFByb21pc2U8dm9pZD47XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy4jc3cgPSBuZXcgUHJvbWlzZSggYXN5bmMgKHJlc29sdmUpID0+IHtcblx0XHRcdFxuXHRcdFx0YXdhaXQgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoYC4vc3cuanNgKTtcblxuXHRcdFx0aWYoIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXIgKVxuXHRcdFx0XHRyZXNvbHZlKCk7XG5cblx0XHRcdG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRyb2xsZXJjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cblx0XHRjb25zdCBzcmMgPSB0aGlzLmF0dHJzLnNyYztcblx0XHRpZihzcmMgPT09IG51bGwpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJzcmMgYXR0cmlidXRlIGlzIG1pc3NpbmcuXCIpO1xuXHRcdHRoaXMuI2RpcmVjdG9yeSA9IHNyY1swXSA9PT0gJy4nXG5cdFx0XHRcdFx0XHRcdFx0PyBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9LyR7c3JjfWBcblx0XHRcdFx0XHRcdFx0XHQ6IHNyYztcblxuXHRcdG5ldyBNdXRhdGlvbk9ic2VydmVyKCAobXV0YXRpb25zKSA9PiB7XG5cblx0XHRcdGZvcihsZXQgbXV0YXRpb24gb2YgbXV0YXRpb25zKVxuXHRcdFx0XHRmb3IobGV0IGFkZGl0aW9uIG9mIG11dGF0aW9uLmFkZGVkTm9kZXMpXG5cdFx0XHRcdFx0aWYoYWRkaXRpb24gaW5zdGFuY2VvZiBFbGVtZW50KVxuXHRcdFx0XHRcdFx0dGhpcy4jYWRkVGFnKGFkZGl0aW9uLnRhZ05hbWUpXG5cblx0XHR9KS5vYnNlcnZlKCBkb2N1bWVudCwgeyBjaGlsZExpc3Q6dHJ1ZSwgc3VidHJlZTp0cnVlIH0pO1xuXG5cblx0XHRmb3IoIGxldCBlbGVtIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpIClcblx0XHRcdHRoaXMuI2FkZFRhZyhlbGVtLnRhZ05hbWUpO1xuXHR9XG5cblxuICAgIHByb3RlY3RlZCByZXNvdXJjZXMoKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdFwiaW5kZXguanNcIixcblx0XHRcdFwiaW5kZXguaHRtbFwiLFxuXHRcdFx0XCJpbmRleC5jc3NcIlxuXHRcdF07XG4gICAgfVxuXG5cdHByb3RlY3RlZCBkZWZpbmVXZWJDb21wb25lbnQodGFnbmFtZTogc3RyaW5nLCBmaWxlczogUmVjb3JkPHN0cmluZywgYW55Piwgb3B0czogUGFydGlhbDx7Y29udGVudDogc3RyaW5nLCBjc3M6IHN0cmluZ30+KSB7XG5cblx0XHRjb25zdCBqcyA9IGZpbGVzW1wiaW5kZXguanNcIl07XG5cdFx0Y29uc3QgY29udGVudCA9IGZpbGVzW1wiaW5kZXguaHRtbFwiXTtcblxuXHRcdGxldCBrbGFzczogbnVsbHwgUmV0dXJuVHlwZTx0eXBlb2YgTElTUz4gPSBudWxsO1xuXHRcdGlmKCBqcyAhPT0gdW5kZWZpbmVkIClcblx0XHRcdGtsYXNzID0ganMob3B0cyk7XG5cdFx0ZWxzZSBpZiggY29udGVudCAhPT0gdW5kZWZpbmVkIClcblx0XHRcdGtsYXNzID0gY2xhc3MgV2ViQ29tcG9uZW50IGV4dGVuZHMgTElTUyhvcHRzKSB7fTtcblxuXHRcdGlmKGtsYXNzID09PSBudWxsKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIGZpbGVzIGZvciBXZWJDb21wb25lbnQgJHt0YWduYW1lfS5gKTtcblxuXHRcdHJldHVybiBMSVNTLmRlZmluZSh0YWduYW1lLCBrbGFzcyk7XG5cdH1cblxuXHRhc3luYyAjYWRkVGFnKHRhZ25hbWU6IHN0cmluZykge1xuXG5cdFx0dGFnbmFtZSA9IHRhZ25hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdGlmKCB0YWduYW1lID09PSAnbGlzcy1hdXRvJyB8fCB0YWduYW1lID09PSAnYmxpc3MtYXV0bycgfHwgISB0YWduYW1lLmluY2x1ZGVzKCctJykgfHwgdGhpcy4ja25vd25fdGFnLmhhcyggdGFnbmFtZSApIClcblx0XHRcdHJldHVybjtcblxuXHRcdHRoaXMuI2tub3duX3RhZy5hZGQodGFnbmFtZSk7XG5cblx0XHRhd2FpdCB0aGlzLiNzdzsgLy8gZW5zdXJlIFNXIGlzIGluc3RhbGxlZC5cblxuXHRcdGNvbnN0IGZpbGVuYW1lcyA9IHRoaXMucmVzb3VyY2VzKCk7XG5cdFx0Y29uc3QgcmVzb3VyY2VzID0gYXdhaXQgUHJvbWlzZS5hbGwoIGZpbGVuYW1lcy5tYXAoIGZpbGUgPT4gZmlsZS5lbmRzV2l0aCgnLmpzJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBfaW1wb3J0ICAgKGAke3RoaXMuI2RpcmVjdG9yeX0vJHt0YWduYW1lfS8ke2ZpbGV9YCwgdHJ1ZSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBfZmV0Y2hUZXh0KGAke3RoaXMuI2RpcmVjdG9yeX0vJHt0YWduYW1lfS8ke2ZpbGV9YCwgdHJ1ZSkgKSApO1xuXG5cdFx0Y29uc3QgZmlsZXM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgZmlsZW5hbWVzLmxlbmd0aDsgKytpKVxuXHRcdFx0aWYoIHJlc291cmNlc1tpXSAhPT0gdW5kZWZpbmVkKVxuXHRcdFx0XHRmaWxlc1tmaWxlbmFtZXNbaV1dID0gcmVzb3VyY2VzW2ldO1xuXG5cdFx0Y29uc3QgY29udGVudCA9IGZpbGVzW1wiaW5kZXguaHRtbFwiXTtcblx0XHRjb25zdCBjc3MgICAgID0gZmlsZXNbXCJpbmRleC5jc3NcIl07XG5cblx0XHRjb25zdCBvcHRzOiBQYXJ0aWFsPHtjb250ZW50OiBzdHJpbmcsIGNzczogc3RyaW5nfT4gPSB7XG5cdFx0XHQuLi5jb250ZW50ICE9PSB1bmRlZmluZWQgJiYge2NvbnRlbnR9LFxuXHRcdFx0Li4uY3NzICAgICAhPT0gdW5kZWZpbmVkICYmIHtjc3N9LFxuXHRcdH07XG5cblx0XHRyZXR1cm4gdGhpcy5kZWZpbmVXZWJDb21wb25lbnQodGFnbmFtZSwgZmlsZXMsIG9wdHMpO1xuXHRcdFxuXHR9XG59XG5MSVNTLmRlZmluZShcImxpc3MtYXV0b1wiLCBMSVNTX0F1dG8pO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudHMge1xuXHRcImxpc3MtYXV0b1wiOiBMSVNTX0F1dG9cbn07XG4vKlxuICogZGVjbGFyZSBtb2R1bGUgJyRMSVNTJyB7XG4gKiBcdFx0aW50ZXJmYWNlIENvbXBvbmVudHMge1xuICogXHRcdFx0XCJuYW1lXCI6IGNsYXNzXG4gKiBcdFx0fVxuICogfVxuICovXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgRXZlbnRzVGFyZ2V0ID09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBDc3RFdmVudDxFdmVudCBleHRlbmRzIHN0cmluZywgQXJncz4gPSBDdXN0b21FdmVudDxBcmdzPiAmIHt0eXBlOiBFdmVudH07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRzVGFyZ2V0PEV2ZW50cyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+e1xuXG5cdGFkZEV2ZW50TGlzdGVuZXI8RXZlbnQgZXh0ZW5kcyBFeGNsdWRlPGtleW9mIEV2ZW50cywgc3ltYm9sfG51bWJlcj4+KHR5cGU6IEV2ZW50LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGxpc3RlbmVyOiBudWxsfCAoKGV2OiBDc3RFdmVudDxFdmVudCwgRXZlbnRzW0V2ZW50XT4pID0+IHZvaWQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IG9wdGlvbnM/OiBib29sZWFufEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zKTogdm9pZDtcblxuXHRkaXNwYXRjaEV2ZW50PEV2ZW50IGV4dGVuZHMgRXhjbHVkZTxrZXlvZiBFdmVudHMsIHN5bWJvbHxudW1iZXI+PihldmVudDogQ3N0RXZlbnQ8RXZlbnQsIEV2ZW50c1tFdmVudF0+KTogYm9vbGVhbjtcblxuXHRyZW1vdmVFdmVudExpc3RlbmVyPEV2ZW50IGV4dGVuZHMgRXhjbHVkZTxrZXlvZiBFdmVudHMsIHN5bWJvbHxudW1iZXI+Pih0eXBlOiBFdmVudCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGlzdGVuZXI6IG51bGx8ICgoZXY6IENzdEV2ZW50PEV2ZW50LCBFdmVudHNbRXZlbnRdPikgPT4gdm9pZCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM/OiBib29sZWFufEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIENzdG1FdmVudDxFdmVudCBleHRlbmRzIHN0cmluZywgQXJncz4gZXh0ZW5kcyBDdXN0b21FdmVudDxBcmdzPiB7XG5cblx0b3ZlcnJpZGUgZ2V0IHR5cGUoKTogRXZlbnQgeyByZXR1cm4gc3VwZXIudHlwZSBhcyBFdmVudDsgfVxuXG5cdGNvbnN0cnVjdG9yKHR5cGU6IEV2ZW50LCBhcmdzOiBBcmdzKSB7XG5cdFx0c3VwZXIodHlwZSwge2RldGFpbDogYXJnc30pO1xuXHR9XG59XG5cbmV4cG9ydCB0eXBlIEV2ZW50c1RhcmdldENzdHI8RXZlbnRzIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+PiA9IENvbnN0cnVjdG9yPEV2ZW50c1RhcmdldDxFdmVudHM+PjtcblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIGludGVybmFsIHRvb2xzID09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoUmVzb3VyY2UocmVzb3VyY2U6IFJlc291cmNlfFByb21pc2U8UmVzb3VyY2U+KSB7XG5cblx0cmVzb3VyY2UgPSBhd2FpdCByZXNvdXJjZTtcblxuXHRpZiggISAocmVzb3VyY2UgaW5zdGFuY2VvZiBSZXNwb25zZSkgKVxuXHRcdHJlc291cmNlID0gYXdhaXQgZmV0Y2gocmVzb3VyY2UpO1xuXG5cdHJldHVybiBhd2FpdCByZXNvdXJjZS50ZXh0KCk7XG59XG5cblxuYXN5bmMgZnVuY3Rpb24gX2ZldGNoVGV4dCh1cmk6IHN0cmluZ3xVUkwsIGlzTGlzc0F1dG86IGJvb2xlYW4gPSBmYWxzZSkge1xuXG5cdGNvbnN0IG9wdGlvbnMgPSBpc0xpc3NBdXRvXG5cdFx0XHRcdFx0XHQ/IHtoZWFkZXJzOntcImxpc3MtYXV0b1wiOiBcInRydWVcIn19XG5cdFx0XHRcdFx0XHQ6IHt9O1xuXG5cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmksIG9wdGlvbnMpO1xuXHRpZihyZXNwb25zZS5zdGF0dXMgIT09IDIwMCApXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblxuXHRpZiggaXNMaXNzQXV0byAmJiByZXNwb25zZS5oZWFkZXJzLmdldChcInN0YXR1c1wiKSEgPT09IFwiNDA0XCIgKVxuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cblx0cmV0dXJuIGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIF9pbXBvcnQodXJpOiBzdHJpbmcsIGlzTGlzc0F1dG86IGJvb2xlYW4gPSBmYWxzZSkge1xuXG5cdC8vIHRlc3QgZm9yIHRoZSBtb2R1bGUgZXhpc3RhbmNlLlxuXHRpZihpc0xpc3NBdXRvICYmIGF3YWl0IF9mZXRjaFRleHQodXJpLCBpc0xpc3NBdXRvKSA9PT0gdW5kZWZpbmVkIClcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXG5cdHRyeSB7XG5cdFx0cmV0dXJuIChhd2FpdCBpbXBvcnQoLyogd2VicGFja0lnbm9yZTogdHJ1ZSAqLyB1cmkpKS5kZWZhdWx0O1xuXHR9IGNhdGNoKGUpIHtcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHR9XG59XG5cbi8vIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTEwMDA0NjEvaHRtbC1lbGVtZW50LXRhZy1uYW1lLWZyb20tY29uc3RydWN0b3JcbmNvbnN0IEhUTUxDTEFTU19SRUdFWCA9ICAvSFRNTChcXHcrKUVsZW1lbnQvO1xuY29uc3QgZWxlbWVudE5hbWVMb29rdXBUYWJsZSA9IHtcbiAgICAnVUxpc3QnOiAndWwnLFxuICAgICdUYWJsZUNhcHRpb24nOiAnY2FwdGlvbicsXG4gICAgJ1RhYmxlQ2VsbCc6ICd0ZCcsIC8vIHRoXG4gICAgJ1RhYmxlQ29sJzogJ2NvbCcsICAvLydjb2xncm91cCcsXG4gICAgJ1RhYmxlUm93JzogJ3RyJyxcbiAgICAnVGFibGVTZWN0aW9uJzogJ3Rib2R5JywgLy9bJ3RoZWFkJywgJ3Rib2R5JywgJ3Rmb290J10sXG4gICAgJ1F1b3RlJzogJ3EnLFxuICAgICdQYXJhZ3JhcGgnOiAncCcsXG4gICAgJ09MaXN0JzogJ29sJyxcbiAgICAnTW9kJzogJ2lucycsIC8vLCAnZGVsJ10sXG4gICAgJ01lZGlhJzogJ3ZpZGVvJywvLyAnYXVkaW8nXSxcbiAgICAnSW1hZ2UnOiAnaW1nJyxcbiAgICAnSGVhZGluZyc6ICdoMScsIC8vLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnXSxcbiAgICAnRGlyZWN0b3J5JzogJ2RpcicsXG4gICAgJ0RMaXN0JzogJ2RsJyxcbiAgICAnQW5jaG9yJzogJ2EnXG4gIH07XG5mdW5jdGlvbiBfZWxlbWVudDJ0YWduYW1lKENsYXNzOiB0eXBlb2YgSFRNTEVsZW1lbnQpOiBzdHJpbmd8bnVsbCB7XG5cblx0aWYoIENsYXNzID09PSBIVE1MRWxlbWVudCApXG5cdFx0cmV0dXJuIG51bGw7XG5cdFxuXHRsZXQgaHRtbHRhZyA9IEhUTUxDTEFTU19SRUdFWC5leGVjKENsYXNzLm5hbWUpIVsxXTtcblx0cmV0dXJuIGVsZW1lbnROYW1lTG9va3VwVGFibGVbaHRtbHRhZyBhcyBrZXlvZiB0eXBlb2YgZWxlbWVudE5hbWVMb29rdXBUYWJsZV0gPz8gaHRtbHRhZy50b0xvd2VyQ2FzZSgpXG59IiwiaW1wb3J0IFwic3RydWN0L21lbnUudHNcIjtcbmltcG9ydCBcInN0cnVjdC9jYWxjL3NoZWV0LnRzXCI7XG5cbi8vIDFcblxuaW1wb3J0IExJU1MgZnJvbSBcIkxJU1NcIjtcbmltcG9ydCB7IEZvcm1hdHMgfSBmcm9tIFwic3RydWN0L2NhbGMvZm9ybWF0LnRzXCI7XG5cbmNvbnN0IHNfZm9ybXVsYSA9IGF3YWl0IExJU1MucXMoJyNzaGVldF9mb3JtdWxhJyk7XG5cbnNfZm9ybXVsYS5nZXRDZWxscyhcIkExOkMxXCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW50ID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlF1YW50aXTDqVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlByaXggdW5pdGFpcmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJQcml4IHRvdGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG5cbnNfZm9ybXVsYS5nZXRDZWxscyhcIkEyOkE0XCIpLmNvbnRlbnQgPSBbMjMgICwgMTIsIDQ0XTtcbnNfZm9ybXVsYS5nZXRDZWxscyhcIkIyOkI0XCIpLmZvcm1hdChGb3JtYXRzLmV1cm9zKS5jb250ZW50ID0gWzAuMiwgMC4zLCAwLjRdO1xuXG5zX2Zvcm11bGEuZ2V0Q2VsbHMoXCJDMjpDNFwiKS5mb3JtYXQoRm9ybWF0cy5ldXJvcykuY29udGVudCA9IFtcbiAgICBcIj1BMipCMlwiLFxuICAgIFwiPUEzKkIzXCIsXG4gICAgXCI9QTQqQjRcIlxuXTtcblxuLyoqL1xuXG5cbmNvbnN0IHNfY29tcGxleF9mb3JtdWxhID0gYXdhaXQgTElTUy5xcygnI3NoZWV0X2NvbXBsZXhfZm9ybXVsYScpO1xuXG5zX2NvbXBsZXhfZm9ybXVsYS5nZXRDZWxscyhcIkExOkMxXCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW50ID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJZXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRm9ybXVsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuXG5zX2NvbXBsZXhfZm9ybXVsYS5nZXRDZWxscyhcIkEyOkI0XCIpLmNvbnRlbnQgPSBbXG4gICAgMiwgNCxcbiAgICAxLCA1LFxuICAgIDQsIDZdO1xuXG5zX2NvbXBsZXhfZm9ybXVsYS5nZXRDZWxscyhcIkMyXCIpLmNvbnRlbnQgPVxuYD0gQTIqQjJcbiArQTMqQjNcbiArQTQqQjRgO1xuXG4vKiovXG5cbmNvbnN0IHNfdHlwZXMgPSBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfdHlwZXMnKTtcblxuXG5zX3R5cGVzLmdldENlbGxzKFwiQTE6RTFcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW50ID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVGV4dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk5vbWJyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQm9vbMOpZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm11bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIF07XG5cbnNfdHlwZXMuZ2V0Q2VsbHMoXCJBMjpFMlwiKS5jb250ZW50ID0gW1xuICAgIFwiSGVsbG9cIixcbiAgICAyLjMsXG4gICAgdHJ1ZSxcbiAgICBuZXcgRGF0ZSgpLFxuICAgIFwiPUIyKzJcIlxuXVxuXG5cbmNvbnN0IHNfY3Vyc29yID0gYXdhaXQgTElTUy5xcygnI3NoZWV0X2N1cnNvcicpO1xuXG5zX2N1cnNvci5nZXRDZWxscyhcIkExOkgxXCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFwiKlwiO1xuc19jdXJzb3IuZ2V0Q2VsbHMoXCJBNDpINFwiKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpLmNvbnRlbnQgPSBcIipcIjtcblxuc19jdXJzb3IuZ2V0Q2VsbHMoXCJEMTpFNFwiKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpLmNvbnRlbnQgPSBcIipcIjtcblxuc19jdXJzb3IuZ2V0Q2VsbHMoXCJBMTpBNFwiKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpLmNvbnRlbnQgPSBcIipcIjtcbnNfY3Vyc29yLmdldENlbGxzKFwiSDE6SDRcIiwgdHJ1ZSkuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gXCIqXCI7XG5cblxuY29uc3Qgc18kZm9ybXVsYSA9IFtcbiAgICBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfX19fZm9ybXVsYScpLFxuICAgIGF3YWl0IExJU1MucXMoJyNzaGVldF94X19mb3JtdWxhJyksXG4gICAgYXdhaXQgTElTUy5xcygnI3NoZWV0X194X2Zvcm11bGEnKSxcbiAgICBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfeHhfZm9ybXVsYScpXG5dXG5cbmZvcihsZXQgaSA9IDA7IGkgPCBzXyRmb3JtdWxhLmxlbmd0aDsgKytpKSB7XG4gICAgY29uc3Qgc18kZm9ybSA9IHNfJGZvcm11bGFbaV07XG5cbiAgICBzXyRmb3JtLmdldENlbGxzKFwiQTE6RDFcIikuZm9ybWF0KFwiYm9sZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudCA9IFswLCAxLCAyLCAzXTtcblxuICAgIHNfJGZvcm0uZ2V0Q2VsbHMoXCJBMjpBNFwiKS5mb3JtYXQoXCJib2xkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW50ID0gWzEsIDIsIDNdO1xuXG4gICAgbGV0IHJlZiA9IFwiPUExXCI7XG4gICAgaWYoIGkgPT09IDEpXG4gICAgICAgIHJlZiA9IFwiPSRBMVwiO1xuICAgIGlmKCBpID09PSAyKVxuICAgICAgICByZWYgPSBcIj1BJDFcIjtcbiAgICBpZiggaSA9PT0gMylcbiAgICAgICAgcmVmID0gXCI9JEEkMVwiO1xuXG4gICAgc18kZm9ybS5nZXRDZWxscyhcIkIyXCIpLmNvbnRlbnQgPSByZWY7XG5cbiAgICBzXyRmb3JtLmdldENlbGxzKFwiQTE6RDRcIikuZm9ybWF0KFwiYWxpZ25fY2VudGVyXCIpXG59XG5cbmNvbnN0IHNoZWV0X3JlY29waWVfbW90aXZhdGlvbiA9IGF3YWl0IExJU1MucXMoJyNzaGVldF9yZWNvcGllX21vdGl2YXRpb24nKTtcblxuc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uLmdldENlbGxzKFwiQTE6RDRcIikuZm9ybWF0KFwiYWxpZ25fY2VudGVyXCIpLmNvbnRlbnQgPSBbXG4gICAgXCJDb25zby9qb3VyXCIsIFwiQ3JheW9uc1wiLCBcIkdvbW1lc1wiLCBcIlRvdGFsIChqb3VyKVwiLFxuICAgIFwiMDEvMDFcIiAgLCAyLCAzLCBcIj1CMitDMlwiLCBcbiAgICBcIjAyLzAxXCIgICwgNCwgMSwgXCI9QzMrQzNcIiwgXG4gICAgXCJUb3RhbCAocHJvZClcIiAgLCBcIj1CMitCM1wiLCBcIj1DMitDM1wiLCBcIj1EMitEM1wiLCBcbl07XG5zaGVldF9yZWNvcGllX21vdGl2YXRpb24uZ2V0Q2VsbHMoXCJBMTpEMVwiKS5mb3JtYXQoXCJib2xkXCIpO1xuc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uLmdldENlbGxzKFwiQTI6QTRcIikuZm9ybWF0KFwiYm9sZFwiKTtcblxuY29uc3Qgc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uX2VtcHR5ID0gYXdhaXQgTElTUy5xcygnI3NoZWV0X3JlY29waWVfbW90aXZhdGlvbl9lbXB0eScpO1xuXG5zaGVldF9yZWNvcGllX21vdGl2YXRpb25fZW1wdHkuZ2V0Q2VsbHMoXCJBMTpENFwiKS5mb3JtYXQoXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFtcbiAgICBcIkNvbnNvL2pvdXJcIiwgXCJDcmF5b25zXCIsIFwiR29tbWVzXCIsIFwiVG90YWwgKGpvdXIpXCIsXG4gICAgXCIwMS8wMVwiICAsIDIsIDMsIHVuZGVmaW5lZCwgXG4gICAgXCIwMi8wMVwiICAsIDQsIDEsIHVuZGVmaW5lZCwgXG4gICAgXCJUb3RhbCAocHJvZClcIiAgLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkXG5dO1xuc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uX2VtcHR5LmdldENlbGxzKFwiQTE6RDFcIikuZm9ybWF0KFwiYm9sZFwiKTtcbnNoZWV0X3JlY29waWVfbW90aXZhdGlvbl9lbXB0eS5nZXRDZWxscyhcIkEyOkE0XCIpLmZvcm1hdChcImJvbGRcIik7XG5cbmNvbnN0IHNoZWV0X3JlY29waWVfaW5jciA9IGF3YWl0IExJU1MucXMoJyNzaGVldF9yZWNvcGllX2luY3InKTtcblxuc2hlZXRfcmVjb3BpZV9pbmNyLmdldENlbGxzKCdBMTpBMicpLmNvbnRlbnQgPSBbIDEsIG5ldyBEYXRlKCkgXTtcblxuXG4vLyB0ZXN0XG5jb25zdCBjID0gYFxuPHRhYmxlIGlkPVwidW5cIj5cbiAgICA8dGJvZHk+XG4gICAgICAgIDx0cj48dGQ+WFhYPC90ZD48L3RyPlxuICAgIDwvdGJvZHk+XG48L3RhYmxlPmA7XG5cbmNvbnN0IGNzcyA9IGBcbiAgICB0ZDpub3QoW2NvbnRlbnRlZGl0YWJsZV0pIHtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgfVxuYDtcblxuY2xhc3MgWCBleHRlbmRzIExJU1Moe1xuICAgIGNvbnRlbnQ6IGMsIGNzc1xufSkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGNvbnN0IHRkID0gdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcjdW4gdGQnKSE7XG4gICAgICAgIHRkLnRvZ2dsZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJyk7XG4gICAgICAgIHRkLmZvY3VzKCk7XG4gICAgICAgIHRkLnRleHRDb250ZW50ID0gXCJZWVlcIjtcbiAgICB9XG59XG5cbkxJU1MuZGVmaW5lKCd0ZXN0LXRlc3QnLCBYKTsiLCJpbXBvcnQgeyBzdHIyaHRtbCB9IGZyb20gXCJzdHJ1Y3QvdXRpbHMvc3RyMmh0bWxcIjtcbmltcG9ydCB7IENhbGNTaGVldCwgQ2VsbExpc3QgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5leHBvcnQgY2xhc3MgUmFuZ2VPdmVybGF5IGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuXG4gICAgI3NoZWV0OiBDYWxjU2hlZXQ7XG4gICAgI3JhbmdlOiBzdHJpbmd8bnVsbCA9IG51bGw7XG4gICAgcHJvdGVjdGVkIG92ZXJsYXk6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCwgLi4uY2xhc3NsaXN0OiBzdHJpbmdbXSkge1xuXG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcbiAgICAgICAgdGhpcy4jc2hlZXQuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm92ZXJsYXkgPSBzdHIyaHRtbChgPGRpdiBjbGFzcz0nb3ZlcmxheSc+PC9kaXY+YCk7XG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzbGlzdCk7XG5cbiAgICAgICAgc2hlZXQuY29udGVudC5hcHBlbmQoIHRoaXMub3ZlcmxheSApO1xuICAgIH1cblxuICAgIHNldFJhbmdlKHJhbmdlOiBDZWxsTGlzdHxudWxsKSB7XG4gICAgICAgIHRoaXMuI3JhbmdlID0gcmFuZ2UgPT09IG51bGwgPyBudWxsIDogcmFuZ2UucGxhZ2VfbmFtZSE7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFJlY3QoLi4ucmVjdDogcmVhZG9ubHkgW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0pIHtcbiAgICAgICAgcmV0dXJuIHJlY3Q7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuXG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIsIHRoaXMuI3JhbmdlID09PSBudWxsKTtcblxuICAgICAgICBpZiggdGhpcy4jcmFuZ2UgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmdldFJlY3QoIC4uLnRoaXMuI3NoZWV0LmdldFJlY3QoIHRoaXMuI3NoZWV0LmdldFJhbmdlKHRoaXMuI3JhbmdlKSApICk7XG4gICAgICAgIHRoaXMuI3NoZWV0LnNldFJlY3QodGhpcy5vdmVybGF5LCByZWN0ICk7XG4gICAgfVxuXG4gICAgb3ZlcnJpZGUgYWRkRXZlbnRMaXN0ZW5lcih0eXBlOiBzdHJpbmcsIGNhbGxiYWNrOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0IHwgbnVsbCwgb3B0aW9ucz86IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zIHwgYm9vbGVhbik6IHZvaWQge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBvdmVycmlkZSByZW1vdmVFdmVudExpc3RlbmVyKHR5cGU6IHN0cmluZywgY2FsbGJhY2s6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QgfCBudWxsLCBvcHRpb25zPzogRXZlbnRMaXN0ZW5lck9wdGlvbnMgfCBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5vdmVybGF5LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIG9wdGlvbnMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvcm11bGFSZWYgZXh0ZW5kcyBSYW5nZU92ZXJsYXkge1xuXG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCkge1xuICAgICAgICBzdXBlcihzaGVldCwgXCJyYW5nZV9oaWdobGlnaHRcIik7XG4gICAgfVxuXG4gICAgI2N1cl9jb2xvciA9IDA7XG4gICAgc2V0Q29sb3IoY29sb3JfaWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShgaGlnaGxpZ2h0XyR7dGhpcy4jY3VyX2NvbG9yfWApOyBcbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoYGhpZ2hsaWdodF8ke2NvbG9yX2lkfWApO1xuICAgICAgICB0aGlzLiNjdXJfY29sb3IgPSBjb2xvcl9pZDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWNvcHlIYW5kbGUgZXh0ZW5kcyBSYW5nZU92ZXJsYXkge1xuXG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCkge1xuICAgICAgICBzdXBlcihzaGVldCwgXCJyZWNvcHlcIik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldFJlY3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBbeCt3LTIsIHkraC0yLCA1LCA1XSBhcyBjb25zdDtcbiAgICB9XG5cbn0iLCJpbXBvcnQgTElTUyBmcm9tIFwiLi4vLi4vLi4vbGlicy9MSVNTXCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGwsIENlbGxMaXN0LCBkZWZhdWx0Rm9ybWF0IH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuZXhwb3J0IGNsYXNzIEZvcm1hdE1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKHNoZWV0OiBDYWxjU2hlZXQpIHtcblxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHNoZWV0LmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldjogS2V5Ym9hcmRFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICBpZiggISBldi5jdHJsS2V5IClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdiJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJib2xkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ2knKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcIml0YWxpY1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICd1Jykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJ1bmRlcmxpbmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnbCcpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KFwiYWxpZ25fbGVmdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdyJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJhbGlnbl9yaWdodFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdlJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJhbGlnbl9jZW50ZXJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnNCcgJiYgZXYuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KEZvcm1hdHMuZXVyb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJzUnICYmIGV2LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChGb3JtYXRzLnBvdXJjZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICcxJyAmJiBldi5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoRm9ybWF0cy5udW1iZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihjaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICAgICAgLyogVE9ETyBsaXN0ZW4gKi9cblxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEZvcm1hdHMgPSB7XG4gICAgZXVyb3M6IGZ1bmN0aW9uKHRoaXM6Q2VsbCwgdmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuXG4gICAgICAgIGNvbnN0IHByZWMgPSArKHRoaXMuZ2V0QXR0cmlidXRlKCdwcmVjaXNpb24nKSA/PyAyKTtcblxuICAgICAgICByZXR1cm4gdmFsdWUudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XG4gICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHByZWMsXG4gICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNcbiAgICAgICAgICAgIH0pICsgJ+KCrCc7XG4gICAgICAgIC8vLnRvRml4ZWQoMikgKyAn4oKsJztcbiAgICB9LFxuICAgIHBvdXJjZW50OiBmdW5jdGlvbih0aGlzOkNlbGwsIHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYodmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiAnJztcblxuICAgICAgICBjb25zdCBwcmVjID0gKyh0aGlzLmdldEF0dHJpYnV0ZSgncHJlY2lzaW9uJykgPz8gMik7XG5cbiAgICAgICAgcmV0dXJuICh2YWx1ZSAqIDEwMCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XG4gICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHByZWMsXG4gICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNcbiAgICAgICAgICAgIH0pICsgJyUnO1xuICAgICAgICAvLy50b0ZpeGVkKDIpICsgJ+KCrCc7XG4gICAgfSxcbiAgICBudW1iZXI6IGZ1bmN0aW9uKHRoaXM6Q2VsbCwgdmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuXG4gICAgICAgIGNvbnN0IHByZWMgPSArKHRoaXMuZ2V0QXR0cmlidXRlKCdwcmVjaXNpb24nKSA/PyAyKTtcblxuICAgICAgICByZXR1cm4gdmFsdWUudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XG4gICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHByZWMsXG4gICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvcm1hdCB7XG5cbiAgICAjZm9ybWF0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoZm9ybWF0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgICAgIHRoaXMuI2Zvcm1hdCA9IGZvcm1hdDtcbiAgICB9XG5cbiAgICBhcHBseVRvKGNlbGw6IENlbGx8Q2VsbExpc3QpIHtcblxuICAgICAgICBpZiggY2VsbCBpbnN0YW5jZW9mIENlbGxMaXN0KSB7XG5cbiAgICAgICAgICAgIGZvcihsZXQgYyBvZiBjZWxsLmNlbGxzKVxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlUbyhjKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCBuYW1lIGluIHRoaXMuI2Zvcm1hdCkge1xuICAgICAgICAgICAgbGV0IHZhbCA9IHRoaXMuI2Zvcm1hdFtuYW1lXTtcblxuICAgICAgICAgICAgaWYobmFtZSA9PT0gJ2Zvcm1hdCcpIHtcblxuICAgICAgICAgICAgICAgIGlmKCB2YWwgPT09IG51bGwpIHtcblxuICAgICAgICAgICAgICAgICAgICBjZWxsLmZvcm1hdCA9IGRlZmF1bHRGb3JtYXQ7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBjZWxsLmZvcm1hdCggY2VsbC5yYXdDb250ZW50KTsgLy9UT0RPOiBpZiBmY3RcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2VsbC5mb3JtYXQgPSB2YWw7XG4gICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGNlbGwuZm9ybWF0KCBjZWxsLnJhd0NvbnRlbnQpOyAvL1RPRE86IGlmIGZjdFxuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKG5hbWUgPT09ICdwcmVjaXNpb24nKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicsIHZhbCk7XG4gICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGNlbGwuZm9ybWF0Py4oIGNlbGwucmF3Q29udGVudCk7IC8vVE9ETzogaWYgZmN0XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCBuYW1lID09PSAnc3BhbicgKSB7XG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHNoZWV0ID0gTElTUy5nZXRMSVNTU3luYyggKGNlbGwuZ2V0Um9vdE5vZGUoKSBhcyBTaGFkb3dSb290KS5ob3N0ICk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoIHZhbFswXSA9PT0gMSAmJiB2YWxbMV0gPT09IDEpIHsgLy8gdW5tZXJnZVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCByID0gK2NlbGwuZ2V0QXR0cmlidXRlKCdyb3dzcGFuJykgPz8gMDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGMgPSArY2VsbC5nZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nKSA/PyAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByOyArK2kpXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgYzsgKytqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gc2hlZXQucmVsYXRpdmVUbyhjZWxsLCBpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGFyZ2V0LmNlbGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgncm93c3BhbicpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgnY29sc3BhbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdyb3dzcGFuJywgYCR7dmFsWzBdfWApO1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgYCR7dmFsWzFdfWApO1xuXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHZhbFswXTsgKytpKVxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdmFsWzFdOyArK2opIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGkgPT09IDAgJiYgaiA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gc2hlZXQucmVsYXRpdmVUbyhjZWxsLCBpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jZWxsID0gY2VsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCB0eXBlb2YgdmFsID09PSBcImJvb2xlYW5cIikge1xuXG4gICAgICAgICAgICAgICAgaWYoIG5hbWUuc3RhcnRzV2l0aCgnYWxpZ25fJykgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYWxpZ25fbGVmdCcpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2FsaWduX2NlbnRlcicpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2FsaWduX3JpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCBuYW1lLnN0YXJ0c1dpdGgoJ3ZhbGlnbl8nKSApIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZ25fdG9wJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWduX21pZGRsZScpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlnbl9ib3R0b20nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUobmFtZSwgdmFsKTtcblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjZWxsLnN0eWxlLnNldFByb3BlcnR5KGAtLSR7bmFtZX1gLCB2YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UHJvcGVydHkobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNmb3JtYXRbbmFtZV07XG4gICAgfVxuICAgIGhhc1Byb3BlcnR5KG5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmFtZSBpbiB0aGlzLiNmb3JtYXQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGV4dHJhY3RGb3JtYXQoY2VsbDogQ2VsbHxDZWxsTGlzdCk6IEZvcm1hdCB7XG4gICAgICAgIFxuICAgICAgICBpZiggY2VsbCBpbnN0YW5jZW9mIENlbGxMaXN0KSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gY2VsbC5jZWxscztcblxuICAgICAgICAgICAgbGV0IGZvcm1hdCA9IEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzWzBdKTtcblxuICAgICAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IGNlbGxzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGYyID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHNbaV0pO1xuXG4gICAgICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gZm9ybWF0LiNmb3JtYXQpXG4gICAgICAgICAgICAgICAgICAgIGlmKCAhIChrZXkgaW4gZjIuI2Zvcm1hdCkgfHwgZjIuI2Zvcm1hdFtrZXldICE9PSBmb3JtYXQuI2Zvcm1hdFtrZXldIClcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBmb3JtYXQuI2Zvcm1hdFtrZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgZm9ybWF0ID0gT2JqZWN0LmZyb21FbnRyaWVzPGFueT4oIFsuLi5jZWxsLmNsYXNzTGlzdC52YWx1ZXMoKV0ubWFwKGUgPT4gW2UsIHRydWVdKSApO1xuICAgICAgICBcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNlbGwuc3R5bGUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBuYW1lID0gY2VsbC5zdHlsZS5pdGVtKGkpO1xuICAgICAgICAgICAgaWYoICEgbmFtZS5zdGFydHNXaXRoKCctLScpIClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIGZvcm1hdFtuYW1lLnNsaWNlKDIpXSA9IGNlbGwuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbHNwYW4gPSArKGNlbGwuZ2V0QXR0cmlidXRlKCdjb2xzcGFuJykgPz8gMSk7XG4gICAgICAgIGNvbnN0IHJvd3NwYW4gPSArKGNlbGwuZ2V0QXR0cmlidXRlKCdyb3dzcGFuJykgPz8gMSk7XG5cbiAgICAgICAgaWYoIGNvbHNwYW4gPiAxIHx8IHJvd3NwYW4gPiAxIClcbiAgICAgICAgICAgIGZvcm1hdC5zcGFuID0gWyByb3dzcGFuLCBjb2xzcGFuIF07XG5cbiAgICAgICAgaWYoICEgKFwiZm9udF9zaXplXCIgaW4gZm9ybWF0KSApXG4gICAgICAgICAgICBmb3JtYXRbJ2ZvbnRfc2l6ZSddID0gJzEwcHQnO1xuXG4gICAgICAgIGlmKCBcImZvcm1hdFwiIGluIGNlbGwpXG4gICAgICAgICAgICBmb3JtYXQuZm9ybWF0ID0gY2VsbC5mb3JtYXQ7XG5cbiAgICAgICAgaWYoIGNlbGwuaGFzQXR0cmlidXRlKCdwcmVjaXNpb24nKSApXG4gICAgICAgICAgICBmb3JtYXQucHJlY2lzaW9uID0gY2VsbC5nZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicpO1xuXG4gICAgICAgIHJldHVybiBuZXcgRm9ybWF0KGZvcm1hdCk7XG4gICAgfVxufSIsIi8vVE9ETzogd2VicGFjayBjb25maWcuLi5cbmltcG9ydCBMSVNTIGZyb20gXCIuLi8uLi8uLi9saWJzL0xJU1NcIjtcbmltcG9ydCB7IENhbGNTaGVldCwgQ2VsbCwgQ2VsbExpc3QsIGRlZmF1bHRGb3JtYXQgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5jb25zdCBjc3MgPSBgXG4gICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYgcHJlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKCAxcmVtICsgOHB4ICsgMnB4ICk7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xpYmVyYXRpb24gU2Fucyc7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5cbmV4cG9ydCBjbGFzcyBDYWxjRm9ybXVsYSBleHRlbmRzIExJU1Moe1xuICAgIGNzc1xufSkge1xuXG4gICAgI2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XG4gICAgI3NoZWV0ICAhOiBDYWxjU2hlZXQ7XG4gICAgI2N1cl9jZWxsOiBDZWxsfG51bGwgPSBudWxsO1xuICAgICNvbklucHV0OiAoZXY6IEV2ZW50KSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCggdGhpcy4jaW5wdXQgKTtcblxuICAgICAgICB0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IHtcblxuICAgICAgICAgICAgaWYoIHRoaXMuI2N1cl9jZWxsID09PSBudWxsIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIC8vdGhpcy4jc2hlZXQuY3Vyc29yLmNvbnRlbnQgPSB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCE7XG4gICAgICAgICAgICB0aGlzLiNzaGVldC5zdGF0ZXMuY2VsbF9lZGl0LnN0YXRlID0gbnVsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsICgpID0+IHtcblxuICAgICAgICAgICAgaWYoIHRoaXMuI2N1cl9jZWxsID09PSBudWxsIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPSB0aGlzLiNjdXJfY2VsbDtcbiAgICAgICAgICAgIC8vdGhpcy4jY3VyX2NlbGwhLnRleHRDb250ZW50ID0gdGhpcy4jaW5wdXQudGV4dENvbnRlbnQhO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmKCB0aGlzLiNjdXJfY2VsbCA9PT0gbnVsbCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLiNjdXJfY2VsbCEudGV4dENvbnRlbnQgPSBkZWZhdWx0Rm9ybWF0KCB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCEgKTtcbiAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudCgnaW5wdXQnLCB7ZGV0YWlsOiB0cnVlfSkgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jb25JbnB1dCA9IChldjogRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBpZiggZXYuZGV0YWlsID09PSB0cnVlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gZGVmYXVsdEZvcm1hdCggdGhpcy4jY3VyX2NlbGwhLnRleHRDb250ZW50ISApO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN5bmNUbyhzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcbiAgICAgICAgY29uc3QgY3Vyc29yID0gdGhpcy4jc2hlZXQuY3Vyc29yO1xuXG4gICAgICAgIGN1cnNvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoXzogYW55KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gY3Vyc29yLmNlbGxzO1xuXG4gICAgICAgICAgICB0aGlzLiNpbnB1dC50b2dnbGVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIGNlbGxzLmxlbmd0aCAhPT0gMCk7XG5cbiAgICAgICAgICAgIGlmKCBjZWxscy5sZW5ndGggPT09IDApIHtcblxuICAgICAgICAgICAgICAgIGlmKCB0aGlzLiNjdXJfY2VsbCAhPT0gbnVsbCApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy4jb25JbnB1dCk7XG4gICAgICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jaW5wdXQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwgPSBjZWxsc1swXTtcbiAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy4jb25JbnB1dCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gZGVmYXVsdEZvcm1hdCggdGhpcy4jY3VyX2NlbGwucmF3Q29udGVudCApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuTElTUy5kZWZpbmUoJ2NhbGMtZm9ybXVsYScsIENhbGNGb3JtdWxhKTsiLCJpbXBvcnQgeyBDYWxjU2hlZXQsIGRlZmF1bHRGb3JtYXQsIFZhbHVlVHlwZSB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbmV4cG9ydCBjbGFzcyBGb3JtdWxhIHtcblxuICAgICNzdHI6IHN0cmluZztcbiAgICAjZXhlYzogKHNoZWV0OiBDYWxjU2hlZXQpID0+IFZhbHVlVHlwZTtcbiAgICAjcmFuZ2VzOiBUb2tlbltdO1xuXG4gICAgY29uc3RydWN0b3Ioc3RyOiBzdHJpbmcsIGV4ZWM6IChzaGVldDogQ2FsY1NoZWV0KSA9PiBWYWx1ZVR5cGUsIHJhbmdlc190b2tlbjogVG9rZW5bXSA9IFtdKSB7XG5cbiAgICAgICAgdGhpcy4jc3RyID0gc3RyO1xuICAgICAgICB0aGlzLiNleGVjID0gZXhlYztcbiAgICAgICAgdGhpcy4jcmFuZ2VzID0gcmFuZ2VzX3Rva2VuO1xuICAgIH1cbiAgICBcbiAgICByZWxhdGl2ZVRvKCBzaGVldDogQ2FsY1NoZWV0LCBkcm93OiBudW1iZXIsIGRjb2w6IG51bWJlcikge1xuICAgICAgICBcbiAgICAgICAgbGV0IG5ld19yYW5nZXMgPSB0aGlzLiNyYW5nZXMubWFwKHIgPT4ge1xuXG4gICAgICAgICAgICAvL1RPRE86IGlmIHJhbmdlLi4uXG4gICAgICAgICAgICBsZXQgcG9zID0gWy4uLnNoZWV0LmNlbGxQb3MoIHNoZWV0LmdldENlbGxzKHIudmFsdWUpLmNlbGxzWzBdICldO1xuICAgIFxuICAgICAgICAgICAgaWYoIHIudmFsdWUubGFzdEluZGV4T2YoJyQnKSA8PSAwIClcbiAgICAgICAgICAgICAgICBwb3NbMF0gKz0gZHJvdztcbiAgICAgICAgICAgIGlmKCByLnZhbHVlWzBdICE9PSAnJCcgKVxuICAgICAgICAgICAgICAgIHBvc1sxXSArPSBkY29sO1xuXG4gICAgICAgICAgICByZXR1cm4gYCR7U3RyaW5nLmZyb21DaGFyQ29kZSg2NStwb3NbMV0tMSl9JHtwb3NbMF19YDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG5ld19mb3JtdWxhID0gXCJcIjtcblxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuI3Jhbmdlcy5sZW5ndGg7ICsraSkge1xuXG4gICAgICAgICAgICBuZXdfZm9ybXVsYSArPSB0aGlzLiNzdHIuc2xpY2Uob2Zmc2V0LCB0aGlzLiNyYW5nZXNbaV0uYmVnKTtcbiAgICAgICAgICAgIG5ld19mb3JtdWxhICs9IG5ld19yYW5nZXNbaV07XG5cbiAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuI3Jhbmdlc1tpXS5lbmQ7XG4gICAgICAgIH1cbiAgICAgICAgbmV3X2Zvcm11bGEgKz0gdGhpcy4jc3RyLnNsaWNlKG9mZnNldCk7XG4gICAgICAgIFxuICAgICAgICAvL2NhbiBiZSBvcHRpbWl6ZWQuLi5cbiAgICAgICAgcmV0dXJuIHBhcnNlX2Zvcm11bGEoIG5ld19mb3JtdWxhICk7XG4gICAgfVxuXG4gICAgZ2V0IHJhbmdlc1Rva2VuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcmFuZ2VzO1xuICAgIH1cblxuICAgIGV4ZWMoc2hlZXQ6IENhbGNTaGVldCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jZXhlYyhzaGVldCk7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzdHI7XG4gICAgfVxufVxuXG50eXBlIFRva2VuID0ge1xuICAgIGJlZzogbnVtYmVyLFxuICAgIGVuZDogbnVtYmVyLFxuICAgIHZhbHVlOiBzdHJpbmcsXG4gICAgdHlwZTogXCJzdHJpbmdcInxcIm51bWJlclwifFwiY2FsbFwifFwicmFuZ2VcInxcIm9wXCJcbn1cblxuXG5mdW5jdGlvbiBleHRyYWN0VG9rZW4oc3RyOiBzdHJpbmcsIG9mZnNldDogbnVtYmVyKSB7XG5cbiAgICB3aGlsZSggWycgJywgJ1xcbicsICdcXHQnXS5pbmNsdWRlcyhzdHJbb2Zmc2V0XSkgKSAvLyBpZ25vcmUgd2hpdGVzcGFjZXNcbiAgICAgICAgKytvZmZzZXQ7XG5cbiAgICBsZXQgdG9rZW46IFBhcnRpYWw8VG9rZW4+ID0ge1xuICAgICAgICBiZWc6IG9mZnNldFxuICAgIH07XG5cbiAgICBpZihzdHJbb2Zmc2V0XSA9PT0gJ1wiJykge1xuICAgICAgICB0b2tlbi50eXBlID0gXCJzdHJpbmdcIjtcbiAgICAgICAgd2hpbGUoIHN0clsrK29mZnNldF0gIT09ICdcIicgJiYgc3RyW29mZnNldC0xXSAhPT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICBpZihvZmZzZXQrMSA+PSBzdHIubGVuZ3RoIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Zvcm11bGEgcGFyc2luZyBlcnJvcicpO1xuICAgICAgICB9XG4gICAgICAgICsrb2Zmc2V0O1xuICAgIH0gZWxzZSBpZiggc3RyW29mZnNldF0gPT09ICcsJyB8fCAoc3RyW29mZnNldF0gPj0gJzAnICYmIHN0cltvZmZzZXRdIDw9ICc5JykgKSB7XG4gICAgICAgIHRva2VuLnR5cGUgPSBcIm51bWJlclwiO1xuICAgICAgICBsZXQgaGFzQ29tbWEgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUoIHN0cltvZmZzZXRdID09PSAnLCcgfHwgc3RyW29mZnNldF0gPj0gJzAnICYmIHN0cltvZmZzZXRdIDw9ICc5JyApIHtcblxuICAgICAgICAgICAgaWYoIHN0cltvZmZzZXRdID09PSAnLCcgKSB7XG4gICAgICAgICAgICAgICAgaWYoaGFzQ29tbWEgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRm9ybXVsYSBwYXJzaW5nIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgaGFzQ29tbWEgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICArK29mZnNldDtcbiAgICAgICAgfVxuXG4gICAgfSBlbHNlIGlmKCBzdHJbb2Zmc2V0XSA9PT0gJyQnIHx8IHN0cltvZmZzZXRdID49ICdBJyAmJiBzdHJbb2Zmc2V0XSA8PSAnWicpIHsgLy8rJFxuICAgICAgICBcbiAgICAgICAgd2hpbGUoIG9mZnNldCA8IHN0ci5sZW5ndGhcbiAgICAgICAgICAgICAgICAmJiAoc3RyW29mZnNldF0gPT09ICckJyB8fCBzdHJbb2Zmc2V0XSA+PSAnQScgJiYgc3RyW29mZnNldF0gPD0gJ1onXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgc3RyW29mZnNldF0gPj0gJzAnICYmIHN0cltvZmZzZXRdIDw9ICc5J1xuICAgICAgICAgICAgICAgICAgICApIClcbiAgICAgICAgICAgICsrb2Zmc2V0O1xuXG4gICAgICAgIHRva2VuLnR5cGUgPSBzdHJbb2Zmc2V0XSA9PT0gJygnID8gJ2NhbGwnIDogJ3JhbmdlJztcblxuICAgICAgICBpZiggc3RyW29mZnNldF0gPT09ICcoJyApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdG9rZW4udHlwZSA9IFwib3BcIjsgLy8gb25seSBvbiBjaGFyID8/P1xuXG4gICAgICAgIGlmKCBzdHJbb2Zmc2V0ICsgMV0gPT09ICc9JykgLy8gPj0gLyA8PVxuICAgICAgICAgICAgKytvZmZzZXQ7XG4gICAgICAgIGVsc2UgaWYoIHN0cltvZmZzZXQgKyAxXSA9PT0gJz4nKSAvLyA8PlxuICAgICAgICAgICAgKytvZmZzZXQ7XG5cbiAgICAgICAgKytvZmZzZXQ7XG4gICAgfVxuXG4gICAgdG9rZW4uZW5kID0gb2Zmc2V0O1xuICAgIHRva2VuLnZhbHVlID0gc3RyLnNsaWNlKHRva2VuLmJlZywgdG9rZW4uZW5kKTtcblxuICAgIHJldHVybiB0b2tlbiBhcyBSZXF1aXJlZDxUb2tlbj47XG59XG5cbmNsYXNzIE5vZGUge1xuXG4gICAgY2hpbGRyZW46IE5vZGVbXTtcbiAgICAjZmN0OiAoc2hlZXQ6IENhbGNTaGVldCwgLi4uYXJnczooVmFsdWVUeXBlKVtdKSA9PiBWYWx1ZVR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihmY3Q6IChzaGVldDogQ2FsY1NoZWV0LCAuLi5hcmdzOihWYWx1ZVR5cGUpW10pID0+IFZhbHVlVHlwZSwgLi4uY2hpbGRyZW46IE5vZGVbXSkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgIGlmKGNoaWxkcmVuID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXVEZcIik7XG4gICAgICAgIHRoaXMuI2ZjdCA9IGZjdDtcbiAgICB9XG5cbiAgICBldmFsKHNoZWV0OiBDYWxjU2hlZXQpOiBWYWx1ZVR5cGUge1xuICAgICAgICBjb25zdCBhcmdzID0gdGhpcy5jaGlsZHJlbi5tYXAoIGMgPT4gYy5ldmFsKHNoZWV0KSApO1xuICAgICAgICByZXR1cm4gdGhpcy4jZmN0KHNoZWV0LCAuLi5hcmdzICk7XG4gICAgfVxuICAgIFxufVxuXG5mdW5jdGlvbiB0b051bWJlcihhOiB1bmtub3duKTogbnVtYmVyIHtcblxuICAgIGlmKGEgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgcmV0dXJuIGEgYXMgdW5rbm93biBhcyBudW1iZXI7XG59XG5cbmNvbnN0IG9wX2ltcGwgPSB7XG4gICAgJyUnOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duKSA9PiB0b051bWJlcihhKS8xMDAsXG4gICAgJ3UuKyc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24pID0+ICt0b051bWJlcihhKSxcbiAgICAndS4tJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93bikgPT4gLXRvTnVtYmVyKGEpLFxuICAgICcqJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93biwgYjogdW5rbm93bikgPT4gdG9OdW1iZXIoYSkqdG9OdW1iZXIoYiksXG4gICAgJy8nOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiB0b051bWJlcihhKS90b051bWJlcihiKSxcbiAgICAnKyc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24sIGI6IHVua25vd24pID0+IHRvTnVtYmVyKGEpK3RvTnVtYmVyKGIpLFxuICAgICctJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93biwgYjogdW5rbm93bikgPT4gdG9OdW1iZXIoYSktdG9OdW1iZXIoYiksXG4gICAgJ14nOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiBNYXRoLnBvdyh0b051bWJlcihhKSx0b051bWJlcihiKSApLFxuICAgICcmJzogKF86IENhbGNTaGVldCwgYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+IGAke2RlZmF1bHRGb3JtYXQoYSl9JHtkZWZhdWx0Rm9ybWF0KGIpfWAsXG4gICAgJz0nOiAgKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPT09IGIsXG4gICAgJzw+JzogKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgIT09IGIsXG4gICAgJz4nOiAgKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPiBiLFxuICAgICc+PSc6IChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhID49IGIsXG4gICAgJzwnOiAgKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPCBiLFxuICAgICc8PSc6IChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhIDw9IGIsXG59IGFzIFJlY29yZDxzdHJpbmcsIChfOiBDYWxjU2hlZXQsIC4uLmFyZ3M6VmFsdWVUeXBlW10pID0+IFZhbHVlVHlwZT47XG5cbi8vIGh0dHBzOi8vaGVscC5saWJyZW9mZmljZS5vcmcvbGF0ZXN0L2VuLVVTL3RleHQvc2NhbGMvMDEvMDQwNjAxOTkuaHRtbFxuY29uc3Qgb3BfcHJpbyA9IFtcbiAgICBbJzonXSwgLy8gcmFuZ2VcbiAgICBbJyEnXSwgLy8gcmFuZ2UgaW50ZXJzZWN0aW9uXG4gICAgWyd+J10sIC8vIHJhbmdlIHVuaW9uXG4gICAgWyd1LisnLCAndS4tJ10sIC8vIHVuYXJ5IC0gZnJvbSByaWdodCB0byBsZWZ0Li4uXG4gICAgWyclJ10sIC8vIHBvc3RmaXgsIC8xMDBcbiAgICBbJ14nXSwgLy8gcG93ZXJcbiAgICBbJyonLCAnLyddLFxuICAgIFsnKycsICctJ10sXG4gICAgWycmJ10sIC8vIHN0cmluZyBjb25jYXRcbiAgICBbJz0nLCAnPD4nLCAnPCcsICc8PScsICc+JywgJz49J10gLy8gY29tcGFyZVxuXTtcblxubGV0IG9wczogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHt9O1xuZm9yKGxldCBpID0gMDsgaSA8IG9wX3ByaW8ubGVuZ3RoOyArK2kpXG4gICAgZm9yKGxldCBvcCBvZiBvcF9wcmlvW2ldIClcbiAgICAgICAgb3BzW29wXSA9IGk7XG5cbmZ1bmN0aW9uIHRva2VubGlzdDJUcmVlKHRva2VuczogVG9rZW5bXSk6IE5vZGUge1xuXG4gICAgaWYoIHRva2Vucy5sZW5ndGggPT09IDEpIHtcblxuICAgICAgICBpZiggdG9rZW5zWzBdLnR5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IG5iID0gK3Rva2Vuc1swXS52YWx1ZS5yZXBsYWNlKCcsJywgJy4nKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTm9kZSggKCkgPT4gbmIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCB0b2tlbnNbMF0udHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgY29uc3Qgc3RyID0gdG9rZW5zWzBdLnZhbHVlLnNsaWNlKDEsLTEpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBOb2RlKCAoKSA9PiBzdHIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCB0b2tlbnNbMF0udHlwZSA9PT0gXCJyYW5nZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vZGUoIChzaGVldDogQ2FsY1NoZWV0KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsZXQgcmF3ID0gc2hlZXQuZ2V0Q2VsbHModG9rZW5zWzBdLnZhbHVlKS5jZWxsc1swXS5yYXdDb250ZW50O1xuXG4gICAgICAgICAgICAgICAgaWYoIHJhdyBpbnN0YW5jZW9mIEZvcm11bGEpXG4gICAgICAgICAgICAgICAgICAgIHJhdyA9IHJhdy5leGVjKHNoZWV0KTsgLy8gVE9ETzogY2FjaGUgcmVzdWx0XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmF3IGFzIFZhbHVlVHlwZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIj8/P1wiKTtcbiAgICB9XG5cbiAgICBpZih0b2tlbnNbMF0udmFsdWUgPT09ICcoJyAmJiB0b2tlbnNbdG9rZW5zLmxlbmd0aC0xXS52YWx1ZSA9PT0gJyknKVxuICAgICAgICByZXR1cm4gdG9rZW5saXN0MlRyZWUodG9rZW5zLnNsaWNlKDEsLTEpICk7XG5cbiAgICBsZXQgY3VyID0ge1xuICAgICAgICBwcmlvcml0eTogb3BfcHJpby5sZW5ndGgsXG4gICAgICAgIGlkeCAgICAgOiAtMVxuICAgIH07XG5cbiAgICBmb3IobGV0IGkgPSB0b2tlbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgaWYoIHRva2Vuc1tpXS50eXBlICE9PSBcIm9wXCIgKSAvLyBjYWxsIG5vdCBoYW5kbGVkIHlldC4uLlxuICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgaWYoIHRva2Vuc1tpXS52YWx1ZSA9PT0gJyknICkgeyAvLyBnbyB0byBmaXJzdCAnKCdcbiAgICAgICAgICAgIGkgPSB0b2tlbnMuZmluZEluZGV4KCB0ID0+IHQudHlwZSA9PT0gJ29wJyAmJiB0LnZhbHVlID09PSAnKCcpO1xuXG4gICAgICAgICAgICBpZiggaSA9PT0gMClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC0taTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFzc2VydHMgaWYgdW5hcnkgb3AuXG4gICAgICAgIGlmKCB0b2tlbnNbaV0udmFsdWUgPT09ICctJyB8fCB0b2tlbnNbaV0udmFsdWUgPT09ICcrJyApIHtcblxuICAgICAgICAgICAgaWYoIGkgPT09IDAgfHwgdG9rZW5zW2ktMV0udHlwZSA9PT0gXCJvcFwiICkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdV9vcCA9IGB1LiR7dG9rZW5zW2ldLnZhbHVlfWA7XG4gICAgICAgICAgICAgICAgdG9rZW5zW2ldLnZhbHVlID0gdV9vcDtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IG9wc1t1X29wXTtcblxuICAgICAgICAgICAgICAgIC8vIHByaW9yaXR5IGlzIHJldmVyc2VkICsgZXZhbHVhdGVkIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAgICAgICAgICAgICAgICBpZiggcHJpb3JpdHkgPD0gY3VyLnByaW9yaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGN1ci5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICAgICAgICAgICAgICBjdXIuaWR4ICAgICAgPSBpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBvcHNbdG9rZW5zW2ldLnZhbHVlXTtcblxuICAgICAgICAvLyBwcmlvcml0eSBpcyByZXZlcnNlZC5cbiAgICAgICAgaWYoIHByaW9yaXR5IDwgY3VyLnByaW9yaXR5KSB7XG4gICAgICAgICAgICBjdXIucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgICAgIGN1ci5pZHggICAgICA9IGk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiggY3VyLmlkeCA9PT0gLTEpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignPz8/Jyk7XG5cbiAgICBsZXQgb3BfdG9rZW4gPSB0b2tlbnNbY3VyLmlkeF07XG4gICAgaWYoIG9wX3Rva2VuLnZhbHVlID09PSAnJScgKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgID0gdG9rZW5zLnNsaWNlKDAsIGN1ci5pZHgpO1xuICAgICAgICBjb25zdCBvcCA9IG9wX2ltcGxbb3BfdG9rZW4udmFsdWUgYXMga2V5b2YgdHlwZW9mIG9wX2ltcGxdO1xuICAgICAgICByZXR1cm4gbmV3IE5vZGUoXG4gICAgICAgICAgICBvcCxcbiAgICAgICAgICAgIHRva2VubGlzdDJUcmVlKGxlZnQpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaWYoIG9wX3Rva2VuLnZhbHVlID09PSAndS4tJyB8fCAgb3BfdG9rZW4udmFsdWUgPT09ICd1LisnICkge1xuXG4gICAgICAgIGNvbnN0IHJpZ2h0ICA9IHRva2Vucy5zbGljZShjdXIuaWR4KzEpO1xuICAgICAgICBjb25zdCBvcCA9IG9wX2ltcGxbb3BfdG9rZW4udmFsdWUgYXMga2V5b2YgdHlwZW9mIG9wX2ltcGxdO1xuICAgICAgICByZXR1cm4gbmV3IE5vZGUoXG4gICAgICAgICAgICBvcCxcbiAgICAgICAgICAgIHRva2VubGlzdDJUcmVlKHJpZ2h0KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGxlZnQgID0gdG9rZW5zLnNsaWNlKDAsIGN1ci5pZHgpO1xuICAgIGNvbnN0IHJpZ2h0ID0gdG9rZW5zLnNsaWNlKGN1ci5pZHgrMSk7XG5cbiAgICBjb25zdCBvcCA9IG9wX2ltcGxbb3BfdG9rZW4udmFsdWUgYXMga2V5b2YgdHlwZW9mIG9wX2ltcGxdO1xuXG4gICAgcmV0dXJuIG5ldyBOb2RlKFxuICAgICAgICBvcCxcbiAgICAgICAgdG9rZW5saXN0MlRyZWUobGVmdCksXG4gICAgICAgIHRva2VubGlzdDJUcmVlKHJpZ2h0KVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZV9mb3JtdWxhKHN0cjpzdHJpbmcpIHtcblxuICAgIGxldCBvZmZzZXQgPSAxO1xuICAgIGxldCB0b2tlbnMgPSBuZXcgQXJyYXk8VG9rZW4+KCk7XG5cbiAgICB3aGlsZSggb2Zmc2V0IDwgc3RyLmxlbmd0aCkge1xuICAgICAgICBsZXQgY3VyVG9rZW4gPSBleHRyYWN0VG9rZW4oc3RyLCBvZmZzZXQpO1xuICAgICAgICB0b2tlbnMucHVzaCggY3VyVG9rZW4gKTtcbiAgICAgICAgb2Zmc2V0ID0gY3VyVG9rZW4uZW5kO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSB0b2tlbmxpc3QyVHJlZSh0b2tlbnMpITtcblxuICAgIGNvbnN0IHJhbmdlcyA9IHRva2Vucy5maWx0ZXIodCA9PiB0LnR5cGUgPT09IFwicmFuZ2VcIiApO1xuXG4gICAgcmV0dXJuIG5ldyBGb3JtdWxhKHN0ciwgKHNoZWV0OiBDYWxjU2hlZXQpID0+IG5vZGUuZXZhbChzaGVldCksIHJhbmdlcyApO1xufSIsIi8vVE9ETzogd2VicGFjayBjb25maWcuLi5cbmltcG9ydCBMSVNTIGZyb20gXCIuLi8uLi8uLi9saWJzL0xJU1NcIjtcbmltcG9ydCB7IENhbGNTaGVldCwgQ2VsbExpc3QsIGRlZmF1bHRGb3JtYXQgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG4vL1RPRE86IHN5bnRheCBoaWdobGlnaHQgOylcblxuY29uc3QgY3NzID0gYFxuICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAmIHByZSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xuICAgICAgICAgICAgbWluLWhlaWdodDogY2FsYyggMXJlbSArIDhweCArIDJweCApO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB0O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMaWJlcmF0aW9uIFNhbnMnO1xuICAgICAgICB9XG4gICAgfVxuYDtcblxuZXhwb3J0IGNsYXNzIFBsYWdlRm9ybXVsYSBleHRlbmRzIExJU1Moe1xuICAgIGNzc1xufSkge1xuXG4gICAgI2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKCB0aGlzLiNpbnB1dCApO1xuICAgICAgICB0aGlzLiNpbnB1dC50b2dnbGVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuXG4gICAgICAgIHRoaXMuI2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXYpID0+IHtcbiAgICAgICAgICAgIGlmKGV2LmNvZGUgIT09ICdFbnRlcicpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBldi5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy4jc2hlZXQuZ2V0Q2VsbHModGhpcy4jaW5wdXQudGV4dENvbnRlbnQhKS5jZWxscztcblxuICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uYWRkKCAuLi5zZWxlY3RlZCApO1xuXG4gICAgICAgICAgICB0aGlzLiNzaGVldC5jdXJzb3IuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LmN1cnNvci5hZGQoIHNlbGVjdGVkWzBdICk7XG5cbiAgICAgICAgICAgIHRoaXMuI2lucHV0LmJsdXIoKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvL1RPRE8uLi4uXG4gICAgICAgIHRoaXMuI2lucHV0LnRvZ2dsZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgLyp0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cbiAgICAgICAgfSk7Ki9cbiAgICB9XG5cbiAgICAjc2hlZXQhOiBDYWxjU2hlZXQ7XG5cbiAgICBzeW5jVG8oc2hlZXQ6IENhbGNTaGVldCkge1xuXG4gICAgICAgIHRoaXMuI3NoZWV0ID0gc2hlZXQ7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gc2hlZXQuc2VsZWN0aW9uO1xuXG4gICAgICAgIHNlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoXzogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCA9IHNlbGVjdGlvbi5wbGFnZV9uYW1lID8/IFwiXCI7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTElTUy5kZWZpbmUoJ2NhbGMtcGxhZ2UnLCBQbGFnZUZvcm11bGEpOyIsImltcG9ydCB7IENhbGNTaGVldCwgQ2VsbCB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbmV4cG9ydCBjbGFzcyBQbGFnZVNlbGVjdG9yIHtcblxuICAgICN1cGRhdGVTZWxlY3Rpb24oKSB7XG5cbiAgICAgICAgbGV0IHNlbGVjdGVkX2NlbGxzID0gdGhpcy4jc2hlZXQuZ2V0UmFuZ2UoIHRoaXMuI29yaWdfcG9zLCB0aGlzLiNmaW5hbF9wb3MgKS5jZWxscztcblxuICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uY2xlYXIoKTsgLy8gd2UgYWRkIGl0Li4uXG5cbiAgICAgICAgaWYoIHRoaXMuI2lzQ3RybCApIHtcblxuICAgICAgICAgICAgLy8gcmVzdG9yZSBpbml0aWFsIHN0YXRlLi4uXG4gICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uYWRkKC4uLnRoaXMuI3ByZXZfc2VsZWN0aW9uKTtcblxuICAgICAgICAgICAgLy9UT0RPIG9ubHkgb3JpZ190YXJnZXQuLi5cbiAgICAgICAgICAgIGlmKHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5oYXMoIC4uLnNlbGVjdGVkX2NlbGxzICkgKVxuICAgICAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5yZW1vdmUoIC4uLnNlbGVjdGVkX2NlbGxzICk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmFkZCggLi4uc2VsZWN0ZWRfY2VsbHMgKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmFkZCggLi4uc2VsZWN0ZWRfY2VsbHMgKTtcbiAgICB9XG5cbiAgICAjaXNDdHJsICAgICAgICAhOiBib29sZWFuO1xuICAgICNzaGVldCAgICAgICAgICA6IENhbGNTaGVldDtcbiAgICAjb3JpZ190YXJnZXQgICAhOiBIVE1MRWxlbWVudDtcbiAgICAjb3JpZ19wb3MgICAgICAhOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgICNmaW5hbF9wb3MgICAgICE6IFtudW1iZXIsIG51bWJlcl07XG4gICAgI3ByZXZfc2VsZWN0aW9uITogQ2VsbFtdO1xuXG4gICAgI2V2MnBvcyhldjogTW91c2VFdmVudCk6IFtudW1iZXIsbnVtYmVyXSB7XG5cbiAgICAgICAgY29uc3QgY29scyA9IFsuLi50aGlzLiNzaGVldC50Ym9keS5jaGlsZHJlblswXS5jaGlsZHJlbl07XG4gICAgICAgIGxldCBjb2xfaWQ7XG4gICAgICAgIGZvcihjb2xfaWQgPSBjb2xzLmxlbmd0aC0xOyBjb2xfaWQgPj0gMDsgLS1jb2xfaWQpIHtcbiAgICAgICAgICAgIGlmKCBldi5jbGllbnRYID49IGNvbHNbY29sX2lkXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS54IClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3Qgcm93cyA9IFsuLi50aGlzLiNzaGVldC50Ym9keS5jaGlsZHJlbl0ubWFwKCBlID0+IGUuY2hpbGRyZW5bMF0gKTtcbiAgICAgICAgbGV0IHJvd19pZDtcbiAgICAgICAgZm9yKHJvd19pZCA9IHJvd3MubGVuZ3RoLTE7IHJvd19pZCA+PSAwOyAtLXJvd19pZCkge1xuICAgICAgICAgICAgaWYoIGV2LmNsaWVudFkgPj0gcm93c1tyb3dfaWRdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkgKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtyb3dfaWQsIGNvbF9pZF07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCkge1xuXG4gICAgICAgIHRoaXMuI3NoZWV0ID0gc2hlZXQ7XG5cbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKSE7XG5cbiAgICAgICAgY29uc3Qgb25fbW91c2VfbW92ZSA9IChldjogTW91c2VFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLiNmaW5hbF9wb3MgPSB0aGlzLiNldjJwb3MoZXYpO1xuXG4gICAgICAgICAgICB0aGlzLiN1cGRhdGVTZWxlY3Rpb24oKTtcbiAgICAgICAgfTtcblxuICAgICAgICBzaGVldC5jdXJzb3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnJlcGxhY2VBbGwoIHNoZWV0LmdldFZpc2libGVDZWxsKHNoZWV0LmN1cnNvcikgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBzaGVldC5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2Ok1vdXNlRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgaWYoIHNoZWV0LnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPT09IHRhcmdldCApICAvLyBhIGNlbGwgYmVpbmcgZWRpdGVkLlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlmKCAhIFtcIlRIXCIsIFwiVERcIl0uaW5jbHVkZXMoIHRhcmdldC50YWdOYW1lICkgKS8vIC4uLlxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lID09PSBcIlRIXCIgJiYgdGFyZ2V0LnRleHRDb250ZW50ID09PSBcIlwiICkgeyAvLyBtb3VzZW1vdmUgZG9lcyBub3RoaW5nLlxuXG4gICAgICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVmID0gYEExOiR7dGhpcy4jc2hlZXQucG9zMnJlZih0aGlzLiNzaGVldC5uYlJvd3MsIHRoaXMuI3NoZWV0Lm5iQ29scyl9YDtcbiAgICAgICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uYWRkKCAuLi50aGlzLiNzaGVldC5nZXRDZWxscyhyZWYpLmNlbGxzICk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuI2lzQ3RybCAgICAgICAgID0gZXYuY3RybEtleTtcbiAgICAgICAgICAgIHRoaXMuI29yaWdfdGFyZ2V0ICAgID0gdGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy4jb3JpZ19wb3MgICAgICAgPSB0aGlzLiNldjJwb3MoZXYpOyAvLyBDYW4gYmUgVEguLi5cbiAgICAgICAgICAgIHRoaXMuI2ZpbmFsX3BvcyAgICAgID0gdGhpcy4jb3JpZ19wb3M7XG4gICAgICAgICAgICB0aGlzLiNwcmV2X3NlbGVjdGlvbiA9IHNoZWV0LnNlbGVjdGlvbi5jZWxscy5zbGljZSgpO1xuXG4gICAgICAgICAgICB0aGlzLiN1cGRhdGVTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25fbW91c2VfbW92ZSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWFpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbl9tb3VzZV9tb3ZlKTtcbiAgICAgICAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxufSIsIi8vVE9ETzogd2VicGFjayBjb25maWcuLi5cbmltcG9ydCBMSVNTIGZyb20gXCIuLi8uLi8uLi9saWJzL0xJU1NcIjtcblxuLy9AdHMtaWdub3JlXG5pbXBvcnQgY3NzIGZyb20gXCIhIXJhdy1sb2FkZXIhLi9pbmRleC5jc3NcIjtcblxuZXhwb3J0IHR5cGUgVmFsdWVUeXBlID0gc3RyaW5nfG51bWJlcnxEYXRlfGJvb2xlYW47XG5leHBvcnQgdHlwZSBSYXdDb250ZW50VHlwZSA9IFZhbHVlVHlwZXxGb3JtdWxhO1xuXG5leHBvcnQgdHlwZSBDZWxsID0gSFRNTFRhYmxlQ2VsbEVsZW1lbnQgJiB7XG4gICAgcmF3Q29udGVudDogUmF3Q29udGVudFR5cGUsXG4gICAgZm9ybWF0OiAodGhpczogQ2VsbCwgdjogc3RyaW5nfG51bWJlcikgPT4gc3RyaW5nLFxuICAgIGlzX3JvOiBib29sZWFuXG59O1xuXG5mdW5jdGlvbiBpc0FjdGl2ZSh0YXJnZXQ6IEhUTUxFbGVtZW50KSB7XG5cbiAgICByZXR1cm4gdGFyZ2V0Lm1hdGNoZXMoJzpmb2N1cycpO1xuLypcbiAgICBsZXQgYWN0aXZlID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgIHdoaWxlKCBhY3RpdmU/LnNoYWRvd1Jvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290IClcbiAgICAgICAgYWN0aXZlID0gYWN0aXZlLnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudDtcblxuICAgIHJldHVybiBhY3RpdmUgPT09IHRhcmdldDsqL1xufVxuXG5mdW5jdGlvbiBvbklucHV0KGV2OiBFdmVudCkge1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjEyMzQ3NDEvcGxhY2UtY2FyZXQtYmFjay13aGVyZS1pdC13YXMtYWZ0ZXItY2hhbmdpbmctaW5uZXJodG1sLW9mLWEtY29udGVudGVkaXRhYmxlLWVsZW1cblxuICAgIGxldCBycmFuZ2UgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkhLmdldFJhbmdlQXQoMCk7XG4gICAgbGV0IGMgPSBycmFuZ2Uuc3RhcnRPZmZzZXQ7XG5cbiAgICAvL2xldCB0ZXh0ID0gXCJcIjtcbiAgICBsZXQgbGVuZ3RoID0gMDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFyZ2V0LmNoaWxkTm9kZXMubGVuZ3RoOyArK2kpIHtcblxuICAgICAgICBsZXQgY2hpbGQgPSB0YXJnZXQuY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgaWYoIGNoaWxkLm5vZGVUeXBlICE9PSBOb2RlLlRFWFRfTk9ERSlcbiAgICAgICAgICAgIGNoaWxkID0gY2hpbGQuY2hpbGROb2Rlc1swXTtcblxuICAgICAgICBpZiggcnJhbmdlLnN0YXJ0Q29udGFpbmVyID09PSBjaGlsZCApIHtcbiAgICAgICAgICAgIC8vdGV4dCArPSBwLmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQhLnNsaWNlKDAsIGMpO1xuICAgICAgICAgICAgbGVuZ3RoICs9IGM7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvL3RleHQgKz0gcC5jaGlsZE5vZGVzW2ldLnRleHRDb250ZW50O1xuICAgICAgICBsZW5ndGggKz0gdGFyZ2V0LmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQhLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgaW5uZXJIVE1MXG4gICAgdGFyZ2V0LnRleHRDb250ZW50ID0gdGFyZ2V0LnRleHRDb250ZW50O1xuXG4gICAgbGV0IGNoaWxkITogQ2hpbGROb2RlO1xuICAgIGxldCBpO1xuICAgIGZvcihpID0gMDsgaSA8IHRhcmdldC5jaGlsZE5vZGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmKCBsZW5ndGggPD0gdGFyZ2V0LmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQhLmxlbmd0aCApIHtcbiAgICAgICAgICAgIGNoaWxkID0gdGFyZ2V0LmNoaWxkTm9kZXNbaV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBsZW5ndGggLT0gdGFyZ2V0LmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQhLmxlbmd0aDtcbiAgICB9XG5cbiAgICBpZiggY2hpbGQubm9kZVR5cGUgIT09IE5vZGUuVEVYVF9OT0RFKVxuICAgICAgICBjaGlsZCA9IGNoaWxkLmNoaWxkTm9kZXNbMF07XG5cbiAgICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkhO1xuXG4gICAgcmFuZ2Uuc2V0U3RhcnQoY2hpbGQsIGxlbmd0aCk7XG4gICAgcmFuZ2UuY29sbGFwc2UodHJ1ZSk7XG4gICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgIHNlbC5hZGRSYW5nZShyYW5nZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0Rm9ybWF0KHZhbHVlOiBSYXdDb250ZW50VHlwZSwgcHJlYzogbnVsbHxudW1iZXIgPSBudWxsKSB7XG5cbiAgICAvL1RPRE8uLi5cblxuICAgIGlmKCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpXG4gICAgICAgIHJldHVybiBgJHsrdmFsdWUudG9QcmVjaXNpb24oNyl9YC5yZXBsYWNlKCcuJywgJywnKTtcblxuICAgIGlmKCB0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKVxuICAgICAgICByZXR1cm4gdmFsdWUgPyAnVlJBSScgOiAnRkFVWCc7XG5cbiAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiKTtcbiAgICB9XG4gICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRm9ybXVsYSkge1xuICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSW5wdXQoIHN0cjogc3RyaW5nICk6IFJhd0NvbnRlbnRUeXBlIHtcblxuICAgIGlmKHN0ciA9PT0gJ1ZSQUknKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBpZihzdHIgPT09ICdGQVVYJylcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYoc3RyLnRyaW0oKSA9PT0gJycpXG4gICAgICAgIHJldHVybiBzdHI7XG5cbiAgICBpZihzdHJbMF0gPT09IFwiPVwiKSB7XG4gICAgICAgIHJldHVybiBwYXJzZV9mb3JtdWxhKHN0cik7XG4gICAgfVxuXG4gICAgbGV0IHRlc3RfbnVtYmVyID0gTnVtYmVyKCBzdHIucmVwbGFjZSgnLCcsICcuJykgKTtcbiAgICBpZiggISBOdW1iZXIuaXNOYU4oIHRlc3RfbnVtYmVyICkgKVxuICAgICAgICByZXR1cm4gdGVzdF9udW1iZXI7XG5cbiAgICBjb25zdCBwYXJ0cyA9IHN0ci5zcGxpdCgnLycpO1xuICAgIGlmKHBhcnRzLmxlbmd0aCA8PSAzKSB7XG5cbiAgICAgICAgbGV0IHRlc3RfZGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgK3BhcnRzWzJdID8/IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgICtwYXJ0c1sxXS0xLFxuICAgICAgICAgICAgK3BhcnRzWzBdXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYoIHRlc3RfZGF0ZS50b1N0cmluZygpICE9PSBcIkludmFsaWQgRGF0ZVwiIClcbiAgICAgICAgICAgIHJldHVybiB0ZXN0X2RhdGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbn1cblxuY2xhc3MgU3RhdGU8VD4ge1xuXG4gICAgI3N0YXRlIDogVHxudWxsID0gbnVsbDtcbiAgICAjdGFyZ2V0OiBFdmVudFRhcmdldDtcbiAgICAjbmFtZSAgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQ6IEV2ZW50VGFyZ2V0LCBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy4jdGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLiNuYW1lICAgPSBuYW1lO1xuICAgIH1cblxuICAgIGdldCBzdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3N0YXRlO1xuICAgIH1cblxuICAgIHNldCBzdGF0ZShzdGF0ZTogVHxudWxsKSB7XG5cbiAgICAgICAgaWYoIHRoaXMuI3N0YXRlID09PSBzdGF0ZSlcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBsZXQgcHJldl9zdGF0ZSA9IHRoaXMuI3N0YXRlO1xuICAgICAgICB0aGlzLiNzdGF0ZSA9IHN0YXRlO1xuICAgICAgICBcblxuICAgICAgICBpZiggcHJldl9zdGF0ZSAhPT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMuI3RhcmdldC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoYCR7dGhpcy4jbmFtZX1fZW5kYCwge2RldGFpbDogcHJldl9zdGF0ZX0pICk7ICAgICAgICAgICAgXG5cbiAgICAgICAgaWYoIHN0YXRlICE9PSBudWxsIClcbiAgICAgICAgICAgIHRoaXMuI3RhcmdldC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoYCR7dGhpcy4gI25hbWV9X3N0YXJ0YCwge2RldGFpbDogc3RhdGV9KSApO1xuICAgIH1cbn1cblxuY29uc3QgU3RhdGVzID0ge1xuICAgIFwiY2VsbF9lZGl0XCI6IFN0YXRlPENlbGw+LFxuICAgIFwicmVjb3B5XCIgICA6IFN0YXRlPENlbGxMaXN0PlxuIH0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjbGFzcyBDYWxjU2hlZXQgZXh0ZW5kcyBMSVNTKHtcbiAgICBjc3MsXG4gICAgYXR0cmlidXRlczogW1wiY29sc1wiLCBcInJvd3NcIiwgXCJyb1wiXVxufSkge1xuXG4gICAgc3RhdGVzID0gT2JqZWN0LmZyb21FbnRyaWVzKCBPYmplY3QuZW50cmllcyhTdGF0ZXMpLm1hcCggKFtuLHNdKSA9PiBbbiwgbmV3IHModGhpcy5ob3N0LCBuKV0gYXMgY29uc3QgKSk7XG5cblxuICAgIC8vVE9ETzogUk8gcHJvcCA/XG4gICAgI2N1cnNvciAgICA9IG5ldyBDZWxsTGlzdCh0aGlzLCBbXSk7XG4gICAgI3NlbGVjdGlvbjogQ2VsbExpc3QgPSBuZXcgQ2VsbExpc3QodGhpcywgW10pO1xuICAgICNwbGFnZV9zZWxlY3RvciA9IG5ldyBQbGFnZVNlbGVjdG9yKHRoaXMpO1xuXG4gICAgI2Zvcm1hdF9tbmdyID0gbmV3IEZvcm1hdE1hbmFnZXIodGhpcyk7XG5cbiAgICBnZXQgY3Vyc29yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY3Vyc29yO1xuICAgIH1cbiAgICBnZXQgc2VsZWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jc2VsZWN0aW9uO1xuICAgIH1cblxuICAgIG92ZXJyaWRlIGdldCBjb250ZW50KCkge1xuICAgICAgICByZXR1cm4gc3VwZXIuY29udGVudDtcbiAgICB9XG5cbiAgICBzZXRSZWN0KHRhcmdldDogSFRNTEVsZW1lbnQsIFt4LHksdyxoXTogcmVhZG9ubHkgW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0pIHtcblxuICAgICAgICBjb25zdCB0Ymxfb2Zmc2V0ID0gdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJykhLm9mZnNldFRvcDtcblxuICAgICAgICB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcgICAsIGAke3RibF9vZmZzZXQgKyB5fXB4YCk7XG4gICAgICAgIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eSgnaGVpZ2h0JywgYCR7aH1weGApO1xuXG4gICAgICAgIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eSgnbGVmdCcgICAsIGAke3h9cHhgKTtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KCd3aWR0aCcsIGAke3d9cHhgKTtcblxuICAgIH1cblxuICAgIGdldFJlY3QoY2VsbHM6IENlbGxMaXN0fENlbGxbXSkge1xuXG4gICAgICAgIGNlbGxzID0gXCJjZWxsc1wiIGluIGNlbGxzID8gY2VsbHMuY2VsbHMgOiBjZWxscztcblxuICAgICAgICBjb25zdCBzdGFydCA9IGNlbGxzWzBdO1xuICAgICAgICBjb25zdCBlbmQgICA9IGNlbGxzW2NlbGxzLmxlbmd0aC0xXTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBzdGFydC5vZmZzZXRMZWZ0LFxuICAgICAgICAgICAgc3RhcnQub2Zmc2V0VG9wLFxuICAgICAgICAgICAgZW5kLm9mZnNldExlZnQgKyBlbmQuY2xpZW50V2lkdGggLSBzdGFydC5vZmZzZXRMZWZ0LFxuICAgICAgICAgICAgZW5kLm9mZnNldFRvcCArIGVuZC5jbGllbnRIZWlnaHQgLSBzdGFydC5vZmZzZXRUb3AgKyAxXG4gICAgICAgIF0gYXMgY29uc3Q7XG4gICAgfVxuXG4gICAgcmVsYXRpdmVUbyhjZWxsOiBDZWxsLCByb3dfZGlmZjogbnVtYmVyLCBjb2xfZGlmZjogbnVtYmVyKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgW3JvdywgY29sXSA9IHRoaXMuY2VsbFBvcyhjZWxsKTtcblxuICAgICAgICByb3cgKz0gcm93X2RpZmY7XG4gICAgICAgIGNvbCArPSBjb2xfZGlmZjtcblxuICAgICAgICAvLyBmb3Igbm9ybWFsIDogZ2V0IHN0dWNrIGluc2lkZSBncmlkLlxuICAgICAgICBpZiggcm93IDwgMSlcbiAgICAgICAgICAgIHJvdyA9IDE7XG4gICAgICAgIGlmKCByb3cgPj0gdGhpcy4jdGJvZHkuY2hpbGRyZW4ubGVuZ3RoIClcbiAgICAgICAgICAgIHJvdyA9IHRoaXMuI3Rib2R5LmNoaWxkcmVuLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgaWYoIGNvbCA8IDEpXG4gICAgICAgICAgICBjb2wgPSAxO1xuICAgICAgICBpZiggY29sID49IHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW4ubGVuZ3RoIClcbiAgICAgICAgICAgIGNvbCA9IHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW4ubGVuZ3RoIC0gMTtcblxuICAgICAgICByZXR1cm4gdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlbltjb2xdIGFzIENlbGw7XG4gICAgfVxuXG4gICAgLy9UT0RPOiAyRC4uLlxuICAgICNwYXN0ZWJpbjogQ2VsbExpc3QgfCBudWxsID0gbnVsbDtcblxuICAgICNmb3JtdWxhX3JlZnMgPSBuZXcgQXJyYXk8Rm9ybXVsYVJlZj4oKTtcbiAgICAjZ2V0Rm9ybXVsYVJlZihpOiBudW1iZXIpIHtcbiAgICAgICAgd2hpbGUoIGkgPj0gdGhpcy4jZm9ybXVsYV9yZWZzLmxlbmd0aClcbiAgICAgICAgICAgIHRoaXMuI2Zvcm11bGFfcmVmcy5wdXNoKCBuZXcgRm9ybXVsYVJlZih0aGlzKSApO1xuXG4gICAgICAgIHJldHVybiB0aGlzLiNmb3JtdWxhX3JlZnNbaV07XG4gICAgfVxuICAgICNjbGVhckZvcm11bGFSZWZzKCkge1xuICAgICAgICBmb3IobGV0IHJlZiBvZiB0aGlzLiNmb3JtdWxhX3JlZnMpXG4gICAgICAgICAgICByZWYuc2V0UmFuZ2UobnVsbCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgY29uc3QgY3Vyc29yID0gbmV3IFJhbmdlT3ZlcmxheSh0aGlzLCBcImN1cnNvclwiKTtcbiAgICAgICAgY29uc3QgcmVjb3B5ID0gbmV3IFJlY29weUhhbmRsZSh0aGlzKTtcbiAgICAgICAgY29uc3QgY29weSAgID0gbmV3IFJhbmdlT3ZlcmxheSh0aGlzLCBcImNvcHlfaGlnaGxpZ2h0XCIpO1xuXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKSE7XG5cbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ2NlbGxfZWRpdF9lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNjbGVhckZvcm11bGFSZWZzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBsYXN0X3JlY29weV90YXJnZXQ6IENlbGx8bnVsbCA9IG51bGw7XG4gICAgICAgIGxldCBsYXN0X3JlY29weV9kaXIgICA6IFtudW1iZXIsIG51bWJlcl18bnVsbCA9IG51bGxcblxuICAgICAgICBjb25zdCBvbl9yZWNvcHlfbW92ZSA9IChldjogTW91c2VFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICBsZXQgY2VsbHMgPSAodGhpcy5zdGF0ZXMucmVjb3B5LnN0YXRlIGFzIENlbGxMaXN0KS5jZWxscztcbiAgICAgICAgICAgIGNvbnN0IHNyYyA9IGNlbGxzW2NlbGxzLmxlbmd0aC0xXTtcblxuICAgICAgICAgICAgbGV0IHBvcyA9IHNyYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgICAgbGV0IGRfcHggPSBldi5jbGllbnRYIC0gKHBvcy54ICsgcG9zLndpZHRoIC8yKTtcbiAgICAgICAgICAgIGxldCBkX3B5ID0gZXYuY2xpZW50WSAtIChwb3MueSArIHBvcy5oZWlnaHQvMik7XG5cbiAgICAgICAgICAgIGxldCBkX3ggPSAwO1xuICAgICAgICAgICAgbGV0IGRfeSA9IE1hdGguc2lnbihkX3B5KTtcblxuICAgICAgICAgICAgaWYoIE1hdGguYWJzKGRfcHgpID4gTWF0aC5hYnMoZF9weSkgKSB7XG4gICAgICAgICAgICAgICAgZF94ID0gTWF0aC5zaWduKGRfcHgpO1xuICAgICAgICAgICAgICAgIGRfeSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBwcmV2ID0gc3JjO1xuICAgICAgICAgICAgbGV0IGN1ciAgPSBzcmM7XG5cbiAgICAgICAgICAgIGxldCBkaWZmX3gsIGRpZmZfeTtcblxuICAgICAgICAgICAgZG8ge1xuXG4gICAgICAgICAgICAgICAgcHJldj0gY3VyO1xuICAgICAgICAgICAgICAgIGN1ciA9IHRoaXMucmVsYXRpdmVUbyhwcmV2LCBkX3ksIGRfeCk7XG5cbiAgICAgICAgICAgICAgICBpZiggY3VyID09PSBwcmV2KVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGxldCBwb3NfY3VyID0gY3VyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIGRpZmZfeCA9IGV2LmNsaWVudFggLSAocG9zX2N1ci54ICsgcG9zX2N1ci53aWR0aCAvMik7XG4gICAgICAgICAgICAgICAgZGlmZl95ID0gZXYuY2xpZW50WSAtIChwb3NfY3VyLnkgKyBwb3NfY3VyLmhlaWdodC8yKTtcblxuICAgICAgICAgICAgfSB3aGlsZSggZGlmZl94ICogZF94ICsgZGlmZl95ICogZF95ID4gMCApO1xuXG4gICAgICAgICAgICBsYXN0X3JlY29weV90YXJnZXQgPSBwcmV2O1xuICAgICAgICAgICAgbGFzdF9yZWNvcHlfZGlyICAgID0gW2RfeCxkX3ldO1xuXG4gICAgICAgICAgICBsZXQgYmVnID0gc3JjO1xuICAgICAgICAgICAgbGV0IGVuZCA9IHByZXY7XG4gICAgICAgICAgICBpZiggc3JjLm9mZnNldExlZnQgPiBwcmV2Lm9mZnNldExlZnQgfHwgc3JjLm9mZnNldFRvcCA+IHByZXYub2Zmc2V0VG9wIClcbiAgICAgICAgICAgICAgICBbYmVnLCBlbmRdID0gW2VuZCwgYmVnXTtcblxuICAgICAgICAgICAgLy9UT0RPOiBoaWdobGlnaHQuLi5cbiAgICAgICAgICAgIHRoaXMuI2NsZWFyRm9ybXVsYVJlZnMoKTtcbiAgICAgICAgICAgIHRoaXMuI2dldEZvcm11bGFSZWYoMSkuc2V0UmFuZ2UoIHRoaXMuZ2V0UmFuZ2UoYmVnLCBlbmQpICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVjb3B5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2KSA9PiB7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXRlcy5yZWNvcHkuc3RhdGUgPSB0aGlzLiNzZWxlY3Rpb247XG5cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbl9yZWNvcHlfbW92ZSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgW2RfeCwgZF95XSA9ICBsYXN0X3JlY29weV9kaXIhO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxzID0gKHRoaXMuc3RhdGVzLnJlY29weS5zdGF0ZSBhcyBDZWxsTGlzdCkuY2VsbHM7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3JjID0gY2VsbHNbY2VsbHMubGVuZ3RoLTFdO1xuXG4gICAgICAgICAgICAgICAgbGV0IG5iID0gMDtcblxuICAgICAgICAgICAgICAgIGlmKCBsYXN0X3JlY29weV90YXJnZXQgIT09IHNyYykgeyAvLyBjb3B5Li4uXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1ciA9IHNyYztcbiAgICAgICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgKytuYjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY3VyID0gdGhpcy5yZWxhdGl2ZVRvKGN1ciwgZF95LCBkX3gpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29udGVudDogUmF3Q29udGVudFR5cGV8Q2VsbCA9IHNyYztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCB0eXBlb2YgY29udGVudC5yYXdDb250ZW50ID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSAoc3JjLnJhd0NvbnRlbnQgYXMgbnVtYmVyKSArIG5iKihkX3ggKyBkX3kpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiggY29udGVudC5yYXdDb250ZW50IGluc3RhbmNlb2YgRGF0ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gbmV3IERhdGUoc3JjLnJhd0NvbnRlbnQgYXMgRGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5zZXREYXRlKCBjb250ZW50LmdldERhdGUoKSArIG5iKihkX3ggKyBkX3kpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENlbGxMaXN0KHRoaXMsIFtjdXJdKS5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ci5jbGFzc05hbWUgPSBzcmMuY2xhc3NOYW1lOyAvL1RPRE86IGZvcm1hdC4uLlxuXG5cbiAgICAgICAgICAgICAgICAgICAgfSB3aGlsZSggY3VyIT09IGxhc3RfcmVjb3B5X3RhcmdldCApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuI2NsZWFyRm9ybXVsYVJlZnMoKTsgLy8gcmVjb3B5XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZXMucmVjb3B5LnN0YXRlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBsYXN0X3JlY29weV90YXJnZXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGxhc3RfcmVjb3B5X2RpciAgICA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgbWFpbi5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uX3JlY29weV9tb3ZlKTtcblxuICAgICAgICAgICAgfSwge29uY2U6IHRydWV9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3JlY29weV9zdGFydCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdyZWNvcHknKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdyZWNvcHlfZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5yZW1vdmUoJ3JlY29weScpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuI2N1cnNvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXYpID0+IHtcblxuICAgICAgICAgICAgaWYoIHRoaXMuI2N1cnNvci5sZW5ndGggIT09IDEgKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ3Vyc29yIGhhcyBpbnZhbGlkIG51bWJlciBvZiBjZWxscycpO1xuXG4gICAgICAgICAgICBjdXJzb3Iuc2V0UmFuZ2UoIG5ldyBDZWxsTGlzdCh0aGlzLCBbdGhpcy5nZXRWaXNpYmxlQ2VsbCh0aGlzLiNjdXJzb3IpXSkgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jc2VsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldikgPT4ge1xuXG4gICAgICAgICAgICBmb3IoIGxldCBjZWxsIG9mIHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGlnaGxpZ2h0JykgKVxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gdGhpcy4jc2VsZWN0aW9uLmNlbGxzO1xuXG4gICAgICAgICAgICBpZiggY2VsbHMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgZm9yKCBsZXQgY2VsbCBvZiBjZWxscyApIHtcblxuICAgICAgICAgICAgICAgIGlmKCBjZWxscy5sZW5ndGggIT09IDEpXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgW3JvdywgY29sXSA9IHRoaXMuI2NlbGxQb3MoY2VsbCk7XG4gICAgICAgICAgICAgICAgdGhpcy4jdGJvZHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bY29sXS5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVjb3B5LnNldFJhbmdlKHRoaXMuI3NlbGVjdGlvbik7XG5cbiAgICAgICAgICAgIC8vIG9ubHkgaWYgc2ltcGxlLi4uXG4gICAgICAgICAgICAvLyBjb25zdCBsYXN0ID0gY2VsbHNbY2VsbHMubGVuZ3RoLTFdO1xuICAgICAgICAgICAgLy8gcG9pbnRlci4uLlxuICAgICAgICB9KTtcblxuICAgICAgICAvL1RPRE86IG1vdmUgb3V0ID9cbiAgICAgICAgY29uc3QgZm9ybXVsYV9iYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybXVsYV9iYXIuY2xhc3NMaXN0LmFkZCgndG9vbGJhcicpO1xuXG4gICAgICAgICggYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBwbGFnZSA9IGF3YWl0IExJU1MuYnVpbGQoXCJjYWxjLXBsYWdlXCIpO1xuICAgICAgICAgICAgcGxhZ2Uuc3luY1RvKHRoaXMpO1xuICAgICAgICAgICAgZm9ybXVsYV9iYXIuYXBwZW5kKCBwbGFnZS5ob3N0ICk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZvcm11bGEgPSBhd2FpdCBMSVNTLmJ1aWxkKFwiY2FsYy1mb3JtdWxhXCIpO1xuICAgICAgICAgICAgZm9ybXVsYS5zeW5jVG8odGhpcyk7XG4gICAgICAgICAgICBmb3JtdWxhX2Jhci5hcHBlbmQoIGZvcm11bGEuaG9zdCApO1xuXG4gICAgICAgIH0pKCk7XG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoZm9ybXVsYV9iYXIpO1xuXG4gICAgICAgIHRoaXMuI2luaXRHcmlkKCt0aGlzLmF0dHJzLnJvd3MhLCArdGhpcy5hdHRycy5jb2xzISk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2KSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICAgICAgLy8gdGhlIGNlbGwgaXMgYmVpbmcgZWRpdGVkLi4uXG4gICAgICAgICAgICBpZiggdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJykgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lID09PSBcIlREXCIgKVxuICAgICAgICAgICAgICAgIHRoaXMuI2N1cnNvci5yZXBsYWNlQWxsKCB0YXJnZXQgYXMgQ2VsbCApO1xuXG4gICAgICAgICAgICAvL1RPRE86IG5vdCBjb3JyZWN0Li4uXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgPT09IFwiVEhcIiAmJiB0YXJnZXQudGV4dENvbnRlbnQgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5nZXRDZWxscyh0YXJnZXQudGV4dENvbnRlbnQhKS5jZWxsc1swXTtcblxuICAgICAgICAgICAgICAgIHRoaXMuI2N1cnNvci5yZXBsYWNlQWxsKGNlbGwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSAhPT0gXCJURFwiKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgaWYoIHRoaXMuYXR0cnMucm8gIT09IFwidHJ1ZVwiICYmICh0YXJnZXQgYXMgQ2VsbCkuaXNfcm8gIT09IHRydWUgKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnRvZ2dsZUF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldjogS2V5Ym9hcmRFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiggdGFyZ2V0ID09PSB0aGlzLiN0Ym9keSApIHtcbiAgICAgICAgICAgICAgICBpZiggZXYuY29kZSA9PT0gXCJLZXlWXCIgJiYgZXYuY3RybEtleSAmJiB0aGlzLiNwYXN0ZWJpbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy4jcGFzdGViaW4uY2VsbHM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3NlbGVjdGlvbi5jb250ZW50ID0gZGF0YTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjb3B5IGZvcm1hdC4uLiBUT0RPIHV0aWxpdHkgdGhpbmd5Li4uXG4gICAgICAgICAgICAgICAgICAgIGlmKCAhIGV2LnNoaWZ0S2V5IHx8ICEgZXYuYWx0S2V5ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3JjID0gdGhpcy4jcGFzdGViaW4uY2VsbHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkc3QgPSB0aGlzLiNzZWxlY3Rpb24uY2VsbHM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyArK2kgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHN0W2ldLmNsYXNzTmFtZSA9IHNyY1tpXS5jbGFzc05hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiBhZGQgZm9ybWF0Li4uXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoICggZXYua2V5ID09PSBcImNcIiB8fCBldi5rZXkgPT09IFwieFwiKSAmJiBldi5jdHJsS2V5ICkge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvcHkuc2V0UmFuZ2UodGhpcy4jc2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gV0hZID8/P1xuICAgICAgICAgICAgICAgICAgICAvL2guc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcgICAsIGAke3NlbGVjdGlvblswXS5vZmZzZXRUb3B9cHhgKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNwYXN0ZWJpbiA9IHRoaXMuI3NlbGVjdGlvbi5kZWVwQ2xvbmUoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiggZXYua2V5ID09PSBcInhcIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuI3NlbGVjdGlvbi5kZWxldGVGb3JtYXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuI3NlbGVjdGlvbi5kZWxldGVDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gXCJDb250cm9sXCIgfHwgZXYua2V5ID09PSBcIlNoaWZ0XCIgfHwgZXYua2V5ID09PSBcIkFsdFwiICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIGlnbm9yZVxuICAgICAgICAgICAgICAgIH0gaWYoIGV2LmNvZGUgPT09IFwiRGVsZXRlXCIgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uZGVsZXRlQ29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBpZiggZXYuY29kZSA9PT0gXCJFbnRlclwiICkge1xuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGVkIGVsc2V3aGVyZVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiggZXYuY29kZS5zdGFydHNXaXRoKCdBcnJvdycpICkge1xuXG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VyID0gdGhpcy5jdXJzb3IuY2VsbHM7XG4gICAgICAgICAgICAgICAgICAgIGlmKCBjdXIubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBkX3JvdyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkX2NvbCA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09ICdBcnJvd0xlZnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLS1kX2NvbDtcbiAgICAgICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09ICdBcnJvd1JpZ2h0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICsrZF9jb2w7XG4gICAgICAgICAgICAgICAgICAgIGlmKCBldi5jb2RlID09PSAnQXJyb3dVcCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAtLWRfcm93O1xuICAgICAgICAgICAgICAgICAgICBpZiggZXYuY29kZSA9PT0gJ0Fycm93RG93bicpXG4gICAgICAgICAgICAgICAgICAgICAgICArK2Rfcm93O1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0OiBDZWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiggZXYuY3RybEtleSApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByZXYgICA9IGN1clswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJzb3IgPSB0aGlzLnJlbGF0aXZlVG8ocHJldiwgZF9yb3csIGRfY29sKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHByZXYucmF3Q29udGVudCAhPT0gdW5kZWZpbmVkICYmIGN1cnNvci5yYXdDb250ZW50ICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlKCBwcmV2ICE9PSBjdXJzb3IgJiYgY3Vyc29yLnJhd0NvbnRlbnQgIT09IHVuZGVmaW5lZCkgeyAvLyB3ZSByZWFjaGVkIHRoZSBlbmQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXYgICA9IGN1cnNvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gdGhpcy5yZWxhdGl2ZVRvKHByZXYsIGRfcm93LCBkX2NvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvciA9IHByZXY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlKCBwcmV2ICE9PSBjdXJzb3IgJiYgY3Vyc29yLnJhd0NvbnRlbnQgPT09IHVuZGVmaW5lZCkgeyAvLyB3ZSByZWFjaGVkIHRoZSBlbmQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXYgICA9IGN1cnNvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gdGhpcy5yZWxhdGl2ZVRvKHByZXYsIGRfcm93LCBkX2NvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gY3Vyc29yO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSB0aGlzLnJlbGF0aXZlVG8oIGN1clswXSwgZF9yb3csIGRfY29sKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3Rib2R5LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3Vyc29yLnJlcGxhY2VBbGwobmV4dCk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZXYuY3RybEtleSkgeyAvLyBpZ25vcmUgY3RybFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgeyAvLyB3ZSBzdGFydCBlZGl0aW5nLi4uXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VyID0gdGhpcy5jdXJzb3IuY2VsbHM7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIGN1ci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJbMF0uZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiZGJsY2xpY2tcIiwge2J1YmJsZXM6IHRydWV9KSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyWzBdLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQgIT09IHRoaXMuI3Rib2R5ICYmIGV2LmNvZGUgPT09ICdFbnRlcicgJiYgZXYuc2hpZnRLZXkgKVxuICAgICAgICAgICAgICAgIHJldHVybjsgLy8gZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yLlxuXG4gICAgICAgICAgICBpZihldi5jb2RlID09PSBcIkVudGVyXCIpIHsgLy9UT0RPOiBFbnRlciBpcyBmb3IgY3VycmVudCBwbGFnZS4uLlxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjdXIgPSB0aGlzLmN1cnNvci5jZWxscztcbiAgICAgICAgICAgICAgICBpZiggY3VyLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgbGV0IFtyb3csY29sXSA9IHRoaXMuY2VsbFBvcyggY3VyWzBdICk7XG5cbiAgICAgICAgICAgICAgICArK3JvdztcbiAgICAgICAgICAgICAgICBpZiggcm93ID49IHRoaXMuI3Rib2R5LmNoaWxkcmVuLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICAgICAgcm93ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgKytjb2w7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCBjb2wgPj0gdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlbi5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbCA9IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IG5leHQgPSB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuW2NvbF0gYXMgQ2VsbDtcblxuICAgICAgICAgICAgICAgIHRoaXMuI3Rib2R5LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJzb3IucmVwbGFjZUFsbChuZXh0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG9uSW5wdXQyID0gKGV2OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jY2xlYXJGb3JtdWxhUmVmcygpO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgaWYoZXYuZGV0YWlsICE9PSB0cnVlKVxuICAgICAgICAgICAgICAgIG9uSW5wdXQoZXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9UT0RPOiBoZXJlLi4uXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICAgICAgY29weS5zZXRSYW5nZShudWxsKTtcblxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lICE9PSBcIlREXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPSB0YXJnZXQgYXMgQ2VsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKFwiY2VsbF9lZGl0X3N0YXJ0XCIsIChldjogQ3VzdG9tRXZlbnQ8Q2VsbD4pID0+IHtcblxuICAgICAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC50b2dnbGUoXCJjZWxsX2VkaXRcIiwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBldi5kZXRhaWw7XG5cbiAgICAgICAgICAgIGlmKGNlbGwucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHN0ciA9IGNlbGwucmF3Q29udGVudC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlcyA9IGNlbGwucmF3Q29udGVudC5yYW5nZXNUb2tlbjtcblxuICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlbjogKHN0cmluZ3xIVE1MRWxlbWVudClbXSA9IFtzdHJdO1xuXG4gICAgICAgICAgICAgICAgbGV0IHJhbmdlc19jb2xvcnM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fTtcbiAgICAgICAgICAgICAgICBsZXQgY3VyX29mZnNldCA9IDA7XG5cbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdHIgPSBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGgtMV0gYXMgc3RyaW5nO1xuXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aC0xXSA9IHN0ci5zbGljZSgwLCByYW5nZXNbaV0uYmVnIC0gY3VyX29mZnNldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2VfbmFtZSA9IHJhbmdlc1tpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYoICEgKHJhbmdlX25hbWUgaW4gcmFuZ2VzX2NvbG9ycykgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VzX2NvbG9yc1tyYW5nZV9uYW1lXSA9IGklODtcblxuICAgICAgICAgICAgICAgICAgICBzLmNsYXNzTGlzdC5hZGQoJ2Zvcm11bGFfaGlnaGxpZ2h0JywgYGhpZ2hsaWdodF8ke3Jhbmdlc19jb2xvcnNbcmFuZ2VfbmFtZV19YCk7IC8vVE9ETy4uLlxuICAgICAgICAgICAgICAgICAgICBzLnRleHRDb250ZW50ID0gcmFuZ2VzW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKCBzICk7IC8vIHJhbmdlLi4uXG5cbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW4ucHVzaCggc3RyLnNsaWNlKHJhbmdlc1tpXS5lbmQgLSBjdXJfb2Zmc2V0KSApO1xuICAgICAgICAgICAgICAgICAgICBjdXJfb2Zmc2V0ID0gcmFuZ2VzW2ldLmVuZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjZWxsLnJlcGxhY2VDaGlsZHJlbiggLi4uY2hpbGRyZW4gKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlc19uYW1lcyA9IE9iamVjdC5rZXlzKHJhbmdlc19jb2xvcnMpO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByYW5nZXNfbmFtZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSByYW5nZXNfbmFtZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZiA9IHRoaXMuI2dldEZvcm11bGFSZWYoaSk7XG4gICAgICAgICAgICAgICAgICAgIHJlZi5zZXRDb2xvciggcmFuZ2VzX2NvbG9yc1tyYW5nZV0gKTtcbiAgICAgICAgICAgICAgICAgICAgcmVmLnNldFJhbmdlKCB0aGlzLmdldENlbGxzKHJhbmdlKSApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgb25JbnB1dDIgKTsgLy8gcmVtb3ZlIGNvbG9ycy4uLlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gZGVmYXVsdEZvcm1hdChjZWxsLnJhd0NvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNlbGxfZWRpdF9lbmRcIiwgKGV2OiBDdXN0b21FdmVudDxDZWxsPikgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LnRvZ2dsZShcImNlbGxfZWRpdFwiLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBldi5kZXRhaWw7XG5cbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIG9uSW5wdXQyKTsgLy8gdG8gYmUgc2FmZVxuICAgICAgICAgICAgY2VsbC50b2dnbGVBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgZmFsc2UpO1xuXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJsZWF2ZSBlZGl0XCIsIGNlbGwudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgbmV3IENlbGxMaXN0KHRoaXMsIFtjZWxsXSkuY29udGVudCA9IGNlbGwudGV4dENvbnRlbnQhO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgICAgICAgLy8gbGVhdmVcbiAgICAgICAgICAgIHRoaXMuI3NlbGVjdGlvbi5jbGVhcigpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGV2ID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgIT09IFwiVERcIilcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGVzLmNlbGxfZWRpdC5zdGF0ZSA9IG51bGw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKCB0aGlzLm5iUm93cyA+PSAxICYmIHRoaXMubmJDb2xzID49IDEpXG4gICAgICAgICAgICB0aGlzLmN1cnNvci5yZXBsYWNlQWxsKCB0aGlzLmdldFJhbmdlKFwiQTFcIikgKTtcbiAgICB9XG5cbiAgICBnZXRWaXNpYmxlQ2VsbChjOiBDZWxsfENlbGxMaXN0KTogQ2VsbCB7XG4gICAgICAgIGlmKGMgaW5zdGFuY2VvZiBDZWxsTGlzdClcbiAgICAgICAgICAgIGMgPSBjLmZpcnN0Q2VsbDtcblxuICAgICAgICByZXR1cm4gYy5jZWxsID8/IGM7XG4gICAgfVxuXG4gICAgY2VsbFBvcyhjZWxsOiBIVE1MVGFibGVDZWxsRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY2VsbFBvcyhjZWxsKTtcbiAgICB9XG5cbiAgICAjY2VsbFBvcyhjZWxsOiBIVE1MVGFibGVDZWxsRWxlbWVudCkge1xuXG4gICAgICAgIGlmKCBcInBvc1wiIGluIGNlbGwpXG4gICAgICAgICAgICByZXR1cm4gY2VsbC5wb3MgYXMgW251bWJlciwgbnVtYmVyXTtcblxuICAgICAgICBjb25zdCBjb2wgPSBbLi4uY2VsbC5wYXJlbnRFbGVtZW50IS5jaGlsZHJlbl0uZmluZEluZGV4KCBjID0+IGMgPT09IGNlbGwpO1xuICAgICAgICBjb25zdCByb3cgPSBbLi4uY2VsbC5wYXJlbnRFbGVtZW50IS5wYXJlbnRFbGVtZW50IS5jaGlsZHJlbl0uZmluZEluZGV4KCByID0+IHIgPT09IGNlbGwucGFyZW50RWxlbWVudCEpO1xuXG4gICAgICAgIHJldHVybiBbcm93LCBjb2xdIGFzIGNvbnN0O1xuICAgIH1cblxuICAgICN0Ym9keSE6IEhUTUxUYWJsZVNlY3Rpb25FbGVtZW50O1xuICAgIGdldCB0Ym9keSgpIHsgcmV0dXJuIHRoaXMuI3Rib2R5OyB9XG5cbiAgICByZXNpemUobmJyb3dzOiBudW1iZXIsIG5iY29sczogbnVtYmVyKSB7XG5cbiAgICAgICAgY29uc3QgY29sX2h0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBjb2xfaHRtbC5hcHBlbmQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJykgKTtcblxuICAgICAgICBjb25zdCB0Ym9keSA9IHRoaXMuI3Rib2R5O1xuICAgICAgICB0Ym9keS5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgICAgICBmb3IobGV0IGNvbCA9IDA7IGNvbCA8ICBuYmNvbHMgOyArK2NvbCkge1xuICAgICAgICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgICAgICAgdGgudGV4dENvbnRlbnQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgY29sKTtcbiAgICAgICAgICAgIGNvbF9odG1sLmFwcGVuZCh0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdGJvZHkuYXBwZW5kKGNvbF9odG1sKTtcblxuICAgICAgICBmb3IobGV0IHJvdyA9IDA7IHJvdyA8IG5icm93czsgKytyb3cpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd19odG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICAgICAgICAgIHRoLnRleHRDb250ZW50ID0gYCR7cm93KzF9YDtcbiAgICAgICAgICAgIHJvd19odG1sLmFwcGVuZCh0aCk7XG5cbiAgICAgICAgICAgIGZvcihsZXQgY29sID0gMDsgY29sIDwgIG5iY29scyA7ICsrY29sKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJykgYXMgQ2VsbDtcbiAgICAgICAgICAgICAgICAvL2NlbGwudG9nZ2xlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcbiAgICAgICAgICAgICAgICBjZWxsLmZvcm1hdCA9IGRlZmF1bHRGb3JtYXQ7XG4gICAgICAgICAgICAgICAgcm93X2h0bWwuYXBwZW5kKCBjZWxsICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ym9keS5hcHBlbmQocm93X2h0bWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2luaXRHcmlkKG5icm93czogbnVtYmVyLCBuYmNvbHM6IG51bWJlcikge1xuXG4gICAgICAgIGNvbnN0IGlzX3JvID0gdGhpcy5hdHRycy5ybyA9PT0gXCJ0cnVlXCI7XG5cbiAgICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgICAgICBjb25zdCB0Ym9keSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xuICAgICAgICB0aGlzLiN0Ym9keSA9IHRib2R5O1xuXG4gICAgICAgIGNvbnN0IHJlc2l6ZU9icyA9IG5ldyBSZXNpemVPYnNlcnZlciggKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ob3N0LmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudCgncmVzaXplJykgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc2l6ZU9icy5vYnNlcnZlKCB0aGlzLmhvc3QgKTtcblxuICAgICAgICB0aGlzLiN0Ym9keS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcblxuICAgICAgICB0aGlzLnJlc2l6ZShuYnJvd3MsIG5iY29scyk7XG5cbiAgICAgICAgdGFibGUuYXBwZW5kKHRib2R5KTtcbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCh0YWJsZSk7XG4gICAgfVxuXG4gICAgZ2V0UmFuZ2UoZnJvbTogQ2VsbHxzdHJpbmd8cmVhZG9ubHlbbnVtYmVyLG51bWJlcl0sIHRvOiBDZWxsfHN0cmluZ3xyZWFkb25seVtudW1iZXIsbnVtYmVyXSA9IGZyb20pOiBDZWxsTGlzdCB7XG5cbiAgICAgICAgLy8gcHJvY2VzcyByZWZzLi4uXG4gICAgICAgIGlmKCBmcm9tIGluc3RhbmNlb2YgSFRNTFRhYmxlQ2VsbEVsZW1lbnQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSYW5nZSggdGhpcy5jZWxsUG9zKGZyb20pLCB0byApO1xuICAgICAgICBpZiggdG8gaW5zdGFuY2VvZiBIVE1MVGFibGVDZWxsRWxlbWVudClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJhbmdlKCBmcm9tLCB0aGlzLmNlbGxQb3ModG8pICk7XG5cbiAgICAgICAgaWYoIHR5cGVvZiBmcm9tID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBpZiggZnJvbS5pbmNsdWRlcyhcIjpcIikgKVxuICAgICAgICAgICAgICAgIFtmcm9tLCB0b10gPSBmcm9tLnNwbGl0KCc6Jyk7XG5cbiAgICAgICAgICAgIGZyb20gPSB0aGlzLnJlZjJwb3MoZnJvbSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSYW5nZSggZnJvbSwgdG8gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiggdHlwZW9mIHRvID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZ2UoIGZyb20sIHRoaXMucmVmMnBvcyh0bykgKTtcblxuICAgICAgICAvLyBnZXQgcmFuZ2VcblxuICAgICAgICBsZXQgYmVnX3JvdyA9IGZyb21bMF0gfHwgMTtcbiAgICAgICAgbGV0IGJlZ19jb2wgPSBmcm9tWzFdIHx8IDE7XG5cbiAgICAgICAgbGV0IGVuZF9yb3cgPSBmcm9tWzBdID09PSAwID8gdGhpcy5uYlJvd3MgOiB0b1swXTtcbiAgICAgICAgbGV0IGVuZF9jb2wgPSBmcm9tWzFdID09PSAwID8gdGhpcy5uYkNvbHMgOiB0b1sxXTtcblxuICAgICAgICBpZiggZW5kX3JvdyA8IGJlZ19yb3cgKVxuICAgICAgICAgICAgW2JlZ19yb3csIGVuZF9yb3ddID0gW2VuZF9yb3csIGJlZ19yb3ddO1xuICAgICAgICBpZiggZW5kX2NvbCA8IGJlZ19jb2wgKVxuICAgICAgICAgICAgW2JlZ19jb2wsIGVuZF9jb2xdID0gW2VuZF9jb2wsIGJlZ19jb2xdO1xuXG4gICAgICAgIGNvbnN0IGNlbGxzID0gbmV3IEFycmF5PENlbGw+KCAoZW5kX3JvdyAtIGJlZ19yb3cgKyAxKSAqIChlbmRfY29sIC0gYmVnX2NvbCArIDEpICk7XG5cbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgIGZvcihsZXQgaSA9IGJlZ19yb3c7IGkgPD0gZW5kX3JvdzsgKytpIClcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IGJlZ19jb2w7IGogPD0gZW5kX2NvbDsgKytqIClcbiAgICAgICAgICAgICAgICBjZWxsc1tvZmZzZXQrK10gPSB0aGlzLnRib2R5LmNoaWxkcmVuW2ldLmNoaWxkcmVuW2pdIGFzIENlbGw7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBDZWxsTGlzdCh0aGlzLCBjZWxscyk7XG4gICAgfVxuXG4gICAgZ2V0Q2VsbHMoY2VsbDogc3RyaW5nKTogQ2VsbExpc3Q7XG4gICAgZ2V0Q2VsbHMocm93X2lkOiBudW1iZXIsIGNvbF9pZDogbnVtYmVyKTogQ2VsbExpc3Q7XG4gICAgZ2V0Q2VsbHMoY2VsbF9vcl9yb3dpZDogbnVtYmVyfHN0cmluZywgY29sX2lkPzogbnVtYmVyKSB7XG5cbiAgICAgICAgbGV0IHJvd19pZCA9IGNlbGxfb3Jfcm93aWQ7XG4gICAgICAgIGlmKCB0eXBlb2YgY2VsbF9vcl9yb3dpZCA9PT0gXCJzdHJpbmdcIikge1xuXG4gICAgICAgICAgICBjZWxsX29yX3Jvd2lkID0gY2VsbF9vcl9yb3dpZC5yZXBsYWNlQWxsKCckJywgJycpO1xuXG4gICAgICAgICAgICBpZiggY2VsbF9vcl9yb3dpZC5pbmNsdWRlcygnOicpICkgey8vIHJhbmdlXG5cbiAgICAgICAgICAgICAgICBsZXQgW2JlZywgZW5kXSA9IGNlbGxfb3Jfcm93aWQuc3BsaXQoJzonKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGJfcm93X2lkID0gK2JlZ1sxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBiX2NvbF9pZCA9IGJlZy5jaGFyQ29kZUF0KDApICsgMSAtIDY1O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZV9yb3dfaWQgPSArZW5kWzFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVfY29sX2lkID0gZW5kLmNoYXJDb2RlQXQoMCkgKyAxIC0gNjU7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjZWxscyA9IG5ldyBBcnJheSggKGVfY29sX2lkLWJfY29sX2lkKSAqIChlX3Jvd19pZCAtIGJfcm93X2lkKSApO1xuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgciA9IGJfcm93X2lkOyByIDw9ICBlX3Jvd19pZDsgKytyKVxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGMgPSBiX2NvbF9pZDsgYyA8PSAgZV9jb2xfaWQ7ICsrYylcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzW29mZnNldCsrXSA9IHRoaXMuI3Rib2R5LmNoaWxkcmVuW3JdLmNoaWxkcmVuW2NdIGFzIENlbGw7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENlbGxMaXN0KHRoaXMsIGNlbGxzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdGhpcyBpcyBhIGZ1bGwgbGluZS4uLlxuICAgICAgICAgICAgaWYoIGNlbGxfb3Jfcm93aWRbMF0gPj0gJzAnICYmIGNlbGxfb3Jfcm93aWRbMF0gPD0gJzknICkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENlbGxzKGBBJHtjZWxsX29yX3Jvd2lkfToke3RoaXMucG9zMnJlZigrY2VsbF9vcl9yb3dpZCwgdGhpcy5uYkNvbHMpfWApO1xuICAgICAgICAgICAgfSBlbHNlIGlmKCBjZWxsX29yX3Jvd2lkW2NlbGxfb3Jfcm93aWQubGVuZ3RoLTFdIDwgJzAnIHx8IGNlbGxfb3Jfcm93aWRbY2VsbF9vcl9yb3dpZC5sZW5ndGgtMV0gPiAnOScgKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCBgJHtjZWxsX29yX3Jvd2lkfTE6JHtjZWxsX29yX3Jvd2lkfSR7dGhpcy5uYlJvd3N9YCApO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENlbGxzKGAke2NlbGxfb3Jfcm93aWR9MToke2NlbGxfb3Jfcm93aWR9JHt0aGlzLm5iUm93c31gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcm93X2lkID0gK2NlbGxfb3Jfcm93aWRbMV07XG4gICAgICAgICAgICBjb2xfaWQgPSBjZWxsX29yX3Jvd2lkLmNoYXJDb2RlQXQoMCkgKyAxIC0gNjU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjZWxsID0gdGhpcy4jdGJvZHkuY2hpbGRyZW5bK3Jvd19pZF0uY2hpbGRyZW5bY29sX2lkIV0gYXMgQ2VsbDtcbiAgICAgICAgcmV0dXJuIG5ldyBDZWxsTGlzdCh0aGlzLCBbY2VsbF0pO1xuICAgIH1cblxuICAgIHJlZjJwb3MocmVmOiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgICAgICAgLy9UT0RPLi4uXG4gICAgICAgIGNvbnN0IHJvdyA9ICtyZWZbcmVmLmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCBjb2wgPSByZWYuY2hhckNvZGVBdCgwKSAtIDY1ICsgMTtcblxuICAgICAgICByZXR1cm4gW3JvdywgY29sXTtcbiAgICB9XG4gICAgcG9zMnJlZihyb3c6IG51bWJlciwgY29sOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGAke1N0cmluZy5mcm9tQ2hhckNvZGUoNjUrY29sLTEpfSR7cm93fWA7XG4gICAgfVxuICAgIGdldCBuYlJvd3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0Ym9keS5jaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgIH1cbiAgICBnZXQgbmJDb2xzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jdGJvZHkuZmlyc3RFbGVtZW50Q2hpbGQhLmNoaWxkcmVuLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgI2lzVXBkYXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmKCB0aGlzLiNpc1VwZGF0aW5nID09PSB0cnVlIClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy4jaXNVcGRhdGluZyA9IHRydWU7XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsPENlbGw+KCd0ZCcpO1xuICAgICAgICAgICAgZm9yKGxldCBjZWxsIG9mIGNlbGxzKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggY2VsbC5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gY2VsbC5yYXdDb250ZW50LmV4ZWModGhpcyk7IC8vVE9ETy4uLlxuXG4gICAgICAgICAgICAgICAgICAgIC8vVE9ETzogZmFjdG9yaXplLi4uXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eXBlOiBzdHJpbmcgPSB0eXBlb2YgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIjtcblxuICAgICAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gKGNlbGwgYXMgYW55KS5mb3JtYXQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiNpc1VwZGF0aW5nID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2VsbExpc3QgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG5cbiAgICAjc2hlZXQ6IENhbGNTaGVldDtcbiAgICAjY2VsbHM6IENlbGxbXTtcbiAgICBjb25zdHJ1Y3RvcihzaGVldDogQ2FsY1NoZWV0LCBjZWxsczogQ2VsbFtdKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuI2NlbGxzID0gY2VsbHM7XG4gICAgICAgIHRoaXMuI3NoZWV0ID0gc2hlZXQ7XG4gICAgfVxuXG4gICAgZ2V0IHBsYWdlX25hbWUoKSB7XG5cbiAgICAgICAgaWYoIHRoaXMuI2NlbGxzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBpZiggdGhpcy4jY2VsbHMubGVuZ3RoID09PSAxIClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiNzaGVldC5wb3MycmVmKCAuLi50aGlzLiNzaGVldC5jZWxsUG9zKHRoaXMuI2NlbGxzWzBdKSApO1xuXG4gICAgICAgIGxldCBjZWxscyA9IHRoaXMuI2NlbGxzLm1hcCggYyA9PiB0aGlzLiNzaGVldC5jZWxsUG9zKGMpICkuc29ydCggKGEsYikgPT4ge1xuICAgICAgICAgICAgaWYoIGFbMF0gIT09IGJbMF0gKVxuICAgICAgICAgICAgICAgIHJldHVybiBhWzBdIC0gYlswXTtcbiAgICAgICAgICAgIHJldHVybiBhWzFdIC0gYlsxXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG1pbiA9IGNlbGxzWzBdO1xuICAgICAgICBsZXQgbWF4ID0gY2VsbHNbY2VsbHMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgbGV0IG5iX2NvbHMgPSBtYXhbMV0gLSBtaW5bMV0gKyAxO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgIGlmKCBjZWxsc1tpXVswXSAhPT0gTWF0aC5mbG9vcihpL25iX2NvbHMpK21pblswXSAmJiBjZWxsc1tpXVsxXSAhPT0gKGklbmJfY29scykrIG1pblsxXSApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHJldHVybiBgJHt0aGlzLiNzaGVldC5wb3MycmVmKC4uLm1pbil9OiR7dGhpcy4jc2hlZXQucG9zMnJlZiguLi5tYXgpfWA7XG4gICAgfVxuXG4gICAgZ2V0IGNlbGxzKCk6IENlbGxbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjZWxscztcbiAgICB9XG4gICAgZ2V0IHNoZWV0KCk6IENhbGNTaGVldCB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzaGVldDtcbiAgICB9XG5cbiAgICB0b2dnbGVGb3JtYXQobmFtZTogc3RyaW5nfCgodjogYW55LCBwcmVjOiBudW1iZXJ8bnVsbCkgPT4gc3RyaW5nKSApIHtcbiAgICAgICAgbGV0IGYgPSBGb3JtYXQuZXh0cmFjdEZvcm1hdCh0aGlzKTtcblxuICAgICAgICBpZiggdHlwZW9mIG5hbWUgPT09IFwiZnVuY3Rpb25cIikge1xuXG4gICAgICAgICAgICBsZXQgaXNGb3JtYXQgPSBmLmdldFByb3BlcnR5KFwiZm9ybWF0XCIpID09PSBuYW1lO1xuXG4gICAgICAgICAgICB0aGlzLmZvcm1hdCh7Zm9ybWF0OiBpc0Zvcm1hdCA/IG51bGwgOiBuYW1lIH0pO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZvcm1hdCh7W25hbWVdOiBmLmdldFByb3BlcnR5KG5hbWUpICE9PSB0cnVlfSk7XG4gICAgfVxuXG4gICAgZm9ybWF0KC4uLmY6ICgoICh2OiBhbnksIHByZWM6IG51bWJlcnxudWxsKSA9PiBzdHJpbmcgKXxzdHJpbmd8Rm9ybWF0fFJlY29yZDxzdHJpbmcsIGFueT4pW10pIHtcblxuICAgICAgICBpZiggZi5sZW5ndGggPiAxICkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL1RPRE8uLi4uXG4gICAgICAgICAgICBmID0gT2JqZWN0LmZyb21FbnRyaWVzKCBmLm1hcCggZSA9PiBbZSwgdHJ1ZV0gKSApO1xuXG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgZiA9IGZbMF07XG5cbiAgICAgICAgaWYoIHR5cGVvZiBmID09PSBcImZ1bmN0aW9uXCIgKVxuICAgICAgICAgICAgZiA9IHtcImZvcm1hdFwiOiBmfTtcblxuICAgICAgICBpZih0eXBlb2YgZiA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICBmID0ge1tmXTogdHJ1ZX07XG5cbiAgICAgICAgaWYoICEgKGYgaW5zdGFuY2VvZiBGb3JtYXQpIClcbiAgICAgICAgICAgIGYgPSBuZXcgRm9ybWF0KGYpO1xuXG4gICAgICAgIGYuYXBwbHlUbyh0aGlzKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQgY29udGVudCgpOiAoUmF3Q29udGVudFR5cGUpW10ge1xuICAgICAgICBsZXQgY29udGVudCA9IG5ldyBBcnJheSh0aGlzLiNjZWxscy5sZW5ndGgpO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy4jY2VsbHMubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICBjb250ZW50W2ldID0gdGhpcy4jY2VsbHNbaV0ucmF3Q29udGVudCE7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgZGVsZXRlRm9ybWF0KCkge1xuICAgICAgICBmb3IobGV0IGNlbGwgb2YgdGhpcy4jY2VsbHMpIC8vVE9ETyBhZGQgaG9jIGZvcm1hdC4uLlxuICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAnJztcbiAgICB9XG5cbiAgICBkZWxldGVDb250ZW50KCkge1xuXG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiB0aGlzLiNjZWxscykge1xuICAgICAgICAgICAgY2VsbC5yYXdDb250ZW50ID0gdW5kZWZpbmVkIGFzIGFueTtcbiAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2hlZXQudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgc2V0IGNvbnRlbnQoY29udGVudDogQ2VsbHxSYXdDb250ZW50VHlwZXwoUmF3Q29udGVudFR5cGV8Q2VsbClbXSkge1xuXG4gICAgICAgIGlmKCBBcnJheS5pc0FycmF5KGNvbnRlbnQpICkge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNvbnRlbnQubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgbmV3IENlbGxMaXN0KHRoaXMuI3NoZWV0LCBbdGhpcy4jY2VsbHNbaV1dICkuY29udGVudCA9IGNvbnRlbnRbaV07XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCB0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICBjb250ZW50ID0gcGFyc2VJbnB1dChjb250ZW50KTtcblxuICAgICAgICBsZXQgcmF3X3ZhbCA9IGNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MVGFibGVDZWxsRWxlbWVudCA/IGNvbnRlbnQucmF3Q29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvbnRlbnQ7XG5cbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIHRoaXMuI2NlbGxzKSB7XG5cbiAgICAgICAgICAgIGlmKGNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MVGFibGVDZWxsRWxlbWVudCAmJiBjb250ZW50LnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBGb3JtdWxhICkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHYgPSBjb250ZW50LnJhd0NvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkc3QgPSB0aGlzLiNzaGVldC5jZWxsUG9zKCBjZWxsICk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3JjID0gdGhpcy4jc2hlZXQuY2VsbFBvcyhjb250ZW50KVxuXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZiA9IFsgZHN0WzBdIC0gc3JjWzBdLCBkc3RbMV0gLSBzcmNbMV1dIGFzIGNvbnN0O1xuXG4gICAgICAgICAgICAgICAgcmF3X3ZhbCA9IHYucmVsYXRpdmVUbyggdGhpcy4jc2hlZXQsIC4uLmRpZmYgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2VsbC5yYXdDb250ZW50ID0gcmF3X3ZhbDtcblxuICAgICAgICAgICAgbGV0IHZhbHVlID0gcmF3X3ZhbDtcbiAgICAgICAgICAgIGlmKCByYXdfdmFsIGluc3RhbmNlb2YgRm9ybXVsYSlcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHJhd192YWwuZXhlYyh0aGlzLiNzaGVldCk7IC8vVE9ETy4uLlxuXG4gICAgICAgICAgICBsZXQgdHlwZTogc3RyaW5nID0gdHlwZW9mIHZhbHVlO1xuICAgICAgICAgICAgaWYoIHR5cGUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgaW5zdGFuY2VvZiBEYXRlIClcbiAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiO1xuXG4gICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gKGNlbGwgYXMgYW55KS5mb3JtYXQodmFsdWUpO1xuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHR5cGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2hlZXQudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgc2V0Uk8oaXNfcm86IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiB0aGlzLiNjZWxscylcbiAgICAgICAgICAgIGNlbGwuaXNfcm8gPSBpc19ybztcbiAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NlbGxzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBoYXMoLi4uY2VsbHM6IENlbGxbXSkge1xuICAgICAgICBmb3IobGV0IGNlbGwgb2YgY2VsbHMpXG4gICAgICAgICAgICBpZiggISB0aGlzLiNjZWxscy5pbmNsdWRlcyhjZWxsKSApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZW1vdmUoLi4uY2VsbHM6IENlbGxbXSkge1xuICAgICAgICB0aGlzLiNjZWxscyA9IHRoaXMuI2NlbGxzLmZpbHRlciggYyA9PiAhIGNlbGxzLmluY2x1ZGVzKGMpICk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpICk7XG4gICAgfVxuXG4gICAgcmVwbGFjZUFsbCguLi5jZWxsczogQ2VsbFtdfFtDZWxsTGlzdF0pIHtcbiAgICAgICAgdGhpcy4jY2VsbHMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5hZGQoLi4uY2VsbHMpO1xuICAgIH1cblxuICAgIGFkZCguLi5jZWxsczogQ2VsbFtdfFtDZWxsTGlzdF0pIHtcblxuICAgICAgICBpZiggY2VsbHNbMF0gaW5zdGFuY2VvZiBDZWxsTGlzdClcbiAgICAgICAgICAgIGNlbGxzID0gY2VsbHNbMF0uY2VsbHM7XG5cbiAgICAgICAgdGhpcy4jY2VsbHMucHVzaCguLi5jZWxscyBhcyBDZWxsW10pO1xuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpICk7XG4gICAgfVxuXG4gICAgZ2V0IGZpcnN0Q2VsbCgpIHtcbiAgICAgICAgaWYoIHRoaXMuI2NlbGxzLmxlbmd0aCA8IDEpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub3BlXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy4jY2VsbHNbMF07XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuI2NlbGxzLmxlbmd0aCA9IDA7XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcbiAgICB9XG5cblxuICAgIGRlZXBDbG9uZSgpIHtcblxuICAgICAgICBsZXQgY2VsbHMgPSB0aGlzLiNjZWxscy5tYXAoIGMgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xvbmUgPSBjLmNsb25lTm9kZSh0cnVlKSBhcyBDZWxsO1xuXG4gICAgICAgICAgICBjbG9uZS5yYXdDb250ZW50ID0gYy5yYXdDb250ZW50O1xuICAgICAgICAgICAgY2xvbmUuZm9ybWF0ICAgICA9IGMuZm9ybWF0O1xuICAgICAgICAgICAgKGNsb25lIGFzIGFueSkucG9zICAgICAgICA9IHRoaXMuI3NoZWV0LmNlbGxQb3MoYyk7XG5cbiAgICAgICAgICAgIHJldHVybiBjbG9uZTtcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gbmV3IENlbGxMaXN0KHRoaXMuI3NoZWV0LCBjZWxscyk7XG4gICAgfVxufVxuXG4vL1RPRE8uLi5cbmltcG9ydCBcIi4vZm9ybXVsYV9lZGl0b3JcIjtcbmltcG9ydCBcIi4vcGxhZ2VfZWRpdG9yXCI7XG5pbXBvcnQgeyBGb3JtdWxhLCBwYXJzZV9mb3JtdWxhIH0gZnJvbSBcIi4vZm9ybXVsYV9wYXJzZXJcIjtcbmltcG9ydCB7IFBsYWdlU2VsZWN0b3IgfSBmcm9tIFwiLi9wbGFnZV9zZWxlY3RvclwiO1xuaW1wb3J0IHsgRm9ybWF0LCBGb3JtYXRNYW5hZ2VyIH0gZnJvbSBcIi4vZm9ybWF0XCI7XG5pbXBvcnQgeyBGb3JtdWxhUmVmLCBSYW5nZU92ZXJsYXksIFJlY29weUhhbmRsZSB9IGZyb20gXCIuL1JhbmdlT3ZlcmxheVwiO1xuXG5MSVNTLmRlZmluZSgnY2FsYy1zaGVldCcsIENhbGNTaGVldCk7IiwiZXhwb3J0IGRlZmF1bHQgW1xuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiUiAxLTAxIFRhYmxldXIgZXQgUmVwb3J0aW5nXCIsXG4gICAgICAgIHNuYW1lOiBcIlIxLTAxIFRhYmxldXJcIixcbiAgICAgICAgcGF0aCA6IFwiUjEtMDFcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNNXCIsXG4gICAgICAgICAgICAgICAgcGF0aDogXCJDTVwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiQ00xXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQ00yXCJcbiAgICAgICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJUUFwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiVFBcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIlRQMVwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIlIgMS0wMiBCYXNlcyBkZSBEb25uw6llcyBSZWxhdGlvbm5lbGxlcyAxXCIsXG4gICAgICAgIHNuYW1lOiBcIlIxLTAyIEJEUjFcIixcbiAgICAgICAgcGF0aCA6IFwiUjEtMDJcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIFwiQ01cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlRQXCIgLFxuICAgICAgICAgICAgICAgIHBhdGggOiBcIlRQXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgXCJUUDFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJUUDJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJUUDNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJUUDRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJUUDVcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cbl07XG5cbmV4cG9ydCBjb25zdCByb290X3BhdGggPSBbXCJsb2NhbGhvc3RcIiwgXCIxMjcuMC4wLjFcIl0uaW5jbHVkZXMobG9jYXRpb24uaG9zdG5hbWUpID8gXCIvZGlzdC9kZXYvcGFnZXMvXCIgOiBcIi9Db3Vycy9kaXN0L2Rldi9wYWdlcy9cIjsiLCJcbmltcG9ydCBwYWdlcywge3Jvb3RfcGF0aH0gZnJvbSBcIi4vY29udGVudFwiO1xuXG4vKlxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXByaW50JywgKCkgPT4ge1xuICAvLy4uLlxufSk7XG4qL1xuXG4vL1RPRE86IGxpbmtzLi4uXG5jb25zdCBtYWluICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKSE7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpITtcblxuY29uc3QgdGl0bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCJoMSwgaDIsIGgzLCBoNFwiKTtcblxudHlwZSBOb2RlID0ge1xuICAgIGh0bWwgICAgOiBIVE1MRWxlbWVudCxcbiAgICBsZXZlbCAgIDogbnVtYmVyLFxuICAgIHBhcmVudCAgOiBudWxsfE5vZGUsXG4gICAgY2hpbGRyZW46IE5vZGVbXVxufTtcblxuY29uc3QgaHRyZWU6IE5vZGUgPSB7XG4gICAgaHRtbCAgICA6IG1haW4sXG4gICAgbGV2ZWwgICA6IDAsXG4gICAgcGFyZW50ICA6IG51bGwsXG4gICAgY2hpbGRyZW46IFtdLFxufTtcbmxldCBodHJlZV9jdXJzb3IgPSBodHJlZTtcbmZvcihsZXQgdGl0bGUgb2YgdGl0bGVzKSB7XG4gICAgY29uc3QgbGV2ZWwgPSArdGl0bGUudGFnTmFtZS5zbGljZSgxKTtcbiAgICBcbiAgICB3aGlsZSggbGV2ZWwgPD0gaHRyZWVfY3Vyc29yLmxldmVsIClcbiAgICAgICAgaHRyZWVfY3Vyc29yID0gaHRyZWVfY3Vyc29yLnBhcmVudCE7XG5cbiAgICBjb25zdCBlbGVtOiBOb2RlID0ge1xuICAgICAgICBodG1sOiB0aXRsZSxcbiAgICAgICAgbGV2ZWwsXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgcGFyZW50OiBodHJlZV9jdXJzb3JcbiAgICB9O1xuXG5cbiAgICBodHJlZV9jdXJzb3IuY2hpbGRyZW4ucHVzaChlbGVtKTtcblxuICAgIGh0cmVlX2N1cnNvciA9IGVsZW07XG59XG5cbmZ1bmN0aW9uIHNlYXJjaEN1ckhlYWRlcihodHJlZTogTm9kZSwgcG9zaXRpb246IG51bWJlcik6IG51bGwgfCBOb2RlIHtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBodHJlZS5jaGlsZHJlbjtcblxuICAgIGZvcihsZXQgaSA9IGhlYWRlcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpXG4gICAgICAgIGlmKCBoZWFkZXJzW2ldLmh0bWwub2Zmc2V0VG9wIDw9IHBvc2l0aW9uICsgMzIgKVxuICAgICAgICAgICAgcmV0dXJuIHNlYXJjaEN1ckhlYWRlcihoZWFkZXJzW2ldLCBwb3NpdGlvbikgPz8gaGVhZGVyc1tpXTtcblxuICAgIHJldHVybiBudWxsO1xufVxuXG5jb25zdCBoaWQgPSBbXG4gICAgW10sXG4gICAgW1wiSVwiLCBcIklJXCIsIFwiSUlJXCIsIFwiSVZcIl0sXG4gICAgW1wiMVwiLCBcIjJcIixcIjNcIixcIjVcIixcIjZcIixcIjdcIixcIjhcIixcIjlcIl0sXG4gICAgW1wiYVwiLCBcImJcIixcImNcIixcImRcIixcImVcIixcImZcIixcImdcIixcImhcIl0sXG5dXG5cbmZ1bmN0aW9uIGdldFRpdGxlUHJlZml4KHM6IE5vZGUpIHtcblxuICAgIGlmKCBzLmxldmVsID49IGhpZC5sZW5ndGggKVxuICAgICAgICByZXR1cm4gXCJcIjtcblxuICAgIGNvbnN0IGlkeCA9IHMucGFyZW50IS5jaGlsZHJlbi5pbmRleE9mKHMpO1xuXG4gICAgY29uc3QgbnVtID0gaGlkW3MubGV2ZWxdW2lkeF07XG5cbiAgICByZXR1cm4gYCR7bnVtfS4gYDtcbn1cblxuZnVuY3Rpb24gYnVpbGRNZW51KG5vZGVzOiBOb2RlW10pIHtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG5cbiAgICBtZW51LmFwcGVuZCggLi4uIG5vZGVzLm1hcCggKHMsaWR4KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgaXRlbS50ZXh0Q29udGVudD0gYCR7Z2V0VGl0bGVQcmVmaXgocyl9JHtzLmh0bWwudGV4dENvbnRlbnR9YDtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGAjJHtzLmh0bWwuaWR9YCk7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pICk7XG5cbiAgICByZXR1cm4gbWVudTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlSGVhZGVyKCkge1xuXG4gICAgY29uc3QgbGFzdCA9IHNlYXJjaEN1ckhlYWRlciggaHRyZWUsIG1haW4uc2Nyb2xsVG9wKSE7XG5cbiAgICBsZXQgaGVhZGVycyA9IFtdO1xuICAgIGxldCBjdXJzb3IgID0gbGFzdDtcblxuICAgIHdoaWxlKGN1cnNvci5odG1sICE9PSBtYWluKSB7XG4gICAgICAgIGhlYWRlcnMucHVzaChjdXJzb3IpO1xuICAgICAgICBjdXJzb3IgPSBjdXJzb3IucGFyZW50ITtcbiAgICB9XG5cbiAgICBjb25zdCBodG1sID0gaGVhZGVycy5yZXZlcnNlKCkubWFwKCAoaG5vZGUsaSkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGggPSBobm9kZS5odG1sO1xuICAgICAgICBjb25zdCBoX2h0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSBgJHtnZXRUaXRsZVByZWZpeChobm9kZSl9JHtoLnRleHRDb250ZW50fWA7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgYCMke2guaWR9YCk7XG5cbiAgICAgICAgY29uc3QgbWVudSA9IGJ1aWxkTWVudShobm9kZS5wYXJlbnQhLmNoaWxkcmVuKTtcbiAgICAgICAgaF9odG1sLmFwcGVuZChsaW5rLCBtZW51KTtcblxuICAgICAgICByZXR1cm4gaF9odG1sO1xuICAgIH0pO1xuXG4gICAgaWYoIGxhc3QuY2hpbGRyZW4ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IGVtcHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgICAgICAgZW1wdHkuYXBwZW5kKCBidWlsZE1lbnUobGFzdC5jaGlsZHJlbikgKTtcblxuICAgICAgICBodG1sLnB1c2goZW1wdHkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZV9wYWdlX2hyZWYocGF0aHByZWZpeDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIGRlc2M6IGFueSkge1xuXG4gICAgICAgIGxldCBocmVmID0gYCR7cGF0aHByZWZpeH0ke3BhdGh9L2A7XG5cbiAgICAgICAgd2hpbGUoZGVzYy5jaGlsZHJlbj8ubGVuZ3RoKSB7XG4gICAgICAgICAgICBkZXNjID0gZGVzYy5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIGhyZWYgKz0gYCR7ZGVzYy5wYXRoID8/IGRlc2N9L2A7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaHJlZjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlX3BhZ2VfbWVudShwYXRocHJlZml4OiBzdHJpbmcsIHBhdGg6IHN0cmluZywgcGFnZXM6IGFueSkge1xuICAgICAgICBjb25zdCBkZXNjID0gcGFnZXMuZmluZCggKHBhZ2U6IGFueSkgPT4gcGFnZSA9PT0gcGF0aCB8fCBwYWdlLnBhdGggPT09IHBhdGggKSE7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSBkZXNjLnNuYW1lID8/IGRlc2MubmFtZSA/PyBkZXNjO1xuICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBtYWtlX3BhZ2VfaHJlZihwYXRocHJlZml4LCBwYXRoLCBkZXNjKSApO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuICAgIFxuICAgICAgICAgICAgbWVudS5hcHBlbmQoIC4uLiBwYWdlcy5tYXAoIChwYWdlOmFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50PSBwYWdlLm5hbWUgPz8gcGFnZTtcbiAgICAgICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgbWFrZV9wYWdlX2hyZWYocGF0aHByZWZpeCwgcGFnZS5wYXRoPz9wYWdlLCBwYWdlKSApO1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfSkgKTtcbiAgICBcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kKGxpbmssIG1lbnUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICAgIFxuICAgIGxldCBjdXJwYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKHJvb3RfcGF0aC5sZW5ndGgpLnNwbGl0KCcvJyk7XG5cbiAgICBjb25zdCBtb2R1bGVfaHRtbCA9IG1ha2VfcGFnZV9tZW51KHJvb3RfcGF0aCwgY3VycGFnZVswXSwgcGFnZXMpO1xuXG4gICAgY29uc3QgZGVzYyA9IHBhZ2VzLmZpbmQoIChwYWdlOiBhbnkpID0+IHBhZ2UucGF0aCA9PT0gY3VycGFnZVswXSApITtcbiAgICBjb25zdCB0eXBlX2h0bWwgICA9IG1ha2VfcGFnZV9tZW51KHJvb3RfcGF0aCArIGN1cnBhZ2VbMF0gKyBcIi9cIiwgY3VycGFnZVsxXSwgZGVzYy5jaGlsZHJlbik7XG5cbiAgICBjb25zdCBkZXNjX3R5cGUgPSBkZXNjLmNoaWxkcmVuLmZpbmQoIChwYWdlOiBhbnkpID0+IChwYWdlPy5wYXRoID8/IHBhZ2UpID09PSBjdXJwYWdlWzFdICkhO1xuICAgIGlmKCB0eXBlb2YgZGVzY190eXBlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIC8vIHRpdGxlIG51bVxuICAgICAgICBjb25zdCBkZXNjMl9pZHggPSBkZXNjX3R5cGUuY2hpbGRyZW4uZmluZEluZGV4KCAocGFnZTogYW55KSA9PiBwYWdlPy5wYXRoID8/IHBhZ2UgPT09IGN1cnBhZ2VbMl0gKSE7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoXCItLWhlYWRlcl9zdGFydF9pZFwiLCBgJHtkZXNjMl9pZHh9YCk7XG4gICAgICAgIC8vIG1lbnVcbiAgICAgICAgY29uc3Qgc2Vzc2lvbl9odG1sICAgPSBtYWtlX3BhZ2VfbWVudShyb290X3BhdGggKyBjdXJwYWdlWzBdICsgXCIvXCIrIGN1cnBhZ2VbMV0gKyBcIi9cIiwgY3VycGFnZVsyXSwgZGVzY190eXBlLmNoaWxkcmVuKTtcbiAgICAgICAgaHRtbFswXSA9IHNlc3Npb25faHRtbDtcbiAgICB9XG5cbiAgICBoZWFkZXIucmVwbGFjZUNoaWxkcmVuKG1vZHVsZV9odG1sLCB0eXBlX2h0bWwsIC4uLmh0bWwpO1xufVxuXG5tYWluLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZUhlYWRlcik7XG51cGRhdGVIZWFkZXIoKTsiLCIvL2h0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ5NDE0My9jcmVhdGluZy1hLW5ldy1kb20tZWxlbWVudC1mcm9tLWFuLWh0bWwtc3RyaW5nLXVzaW5nLWJ1aWx0LWluLWRvbS1tZXRob2RzLW9yLXByb1xuZXhwb3J0IGZ1bmN0aW9uIHN0cjJodG1sPFQgZXh0ZW5kcyBIVE1MRWxlbWVudD4oaHRtbDogc3RyaW5nKTogVCB7XG4gICAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICBodG1sID0gaHRtbC50cmltKCk7IC8vIE5ldmVyIHJldHVybiBhIHRleHQgbm9kZSBvZiB3aGl0ZXNwYWNlIGFzIHRoZSByZXN1bHRcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkISBhcyBUO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyMkRGKGh0bWw6IHN0cmluZyk6IERvY3VtZW50RnJhZ21lbnQge1xuICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgaHRtbCA9IGh0bWwudHJpbSgpOyAvLyBOZXZlciByZXR1cm4gYSB0ZXh0IG5vZGUgb2Ygd2hpdGVzcGFjZSBhcyB0aGUgcmVzdWx0XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudDtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwidmFyIHdlYnBhY2tRdWV1ZXMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIHF1ZXVlc1wiKSA6IFwiX193ZWJwYWNrX3F1ZXVlc19fXCI7XG52YXIgd2VicGFja0V4cG9ydHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGV4cG9ydHNcIikgOiBcIl9fd2VicGFja19leHBvcnRzX19cIjtcbnZhciB3ZWJwYWNrRXJyb3IgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGVycm9yXCIpIDogXCJfX3dlYnBhY2tfZXJyb3JfX1wiO1xudmFyIHJlc29sdmVRdWV1ZSA9IChxdWV1ZSkgPT4ge1xuXHRpZihxdWV1ZSAmJiBxdWV1ZS5kIDwgMSkge1xuXHRcdHF1ZXVlLmQgPSAxO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tKSk7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0gPyBmbi5yKysgOiBmbigpKSk7XG5cdH1cbn1cbnZhciB3cmFwRGVwcyA9IChkZXBzKSA9PiAoZGVwcy5tYXAoKGRlcCkgPT4ge1xuXHRpZihkZXAgIT09IG51bGwgJiYgdHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIikge1xuXHRcdGlmKGRlcFt3ZWJwYWNrUXVldWVzXSkgcmV0dXJuIGRlcDtcblx0XHRpZihkZXAudGhlbikge1xuXHRcdFx0dmFyIHF1ZXVlID0gW107XG5cdFx0XHRxdWV1ZS5kID0gMDtcblx0XHRcdGRlcC50aGVuKChyKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXhwb3J0c10gPSByO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSwgKGUpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFcnJvcl0gPSBlO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgb2JqID0ge307XG5cdFx0XHRvYmpbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChmbihxdWV1ZSkpO1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdH1cblx0dmFyIHJldCA9IHt9O1xuXHRyZXRbd2VicGFja1F1ZXVlc10gPSB4ID0+IHt9O1xuXHRyZXRbd2VicGFja0V4cG9ydHNdID0gZGVwO1xuXHRyZXR1cm4gcmV0O1xufSkpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5hID0gKG1vZHVsZSwgYm9keSwgaGFzQXdhaXQpID0+IHtcblx0dmFyIHF1ZXVlO1xuXHRoYXNBd2FpdCAmJiAoKHF1ZXVlID0gW10pLmQgPSAtMSk7XG5cdHZhciBkZXBRdWV1ZXMgPSBuZXcgU2V0KCk7XG5cdHZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cdHZhciBjdXJyZW50RGVwcztcblx0dmFyIG91dGVyUmVzb2x2ZTtcblx0dmFyIHJlamVjdDtcblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqKSA9PiB7XG5cdFx0cmVqZWN0ID0gcmVqO1xuXHRcdG91dGVyUmVzb2x2ZSA9IHJlc29sdmU7XG5cdH0pO1xuXHRwcm9taXNlW3dlYnBhY2tFeHBvcnRzXSA9IGV4cG9ydHM7XG5cdHByb21pc2Vbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChxdWV1ZSAmJiBmbihxdWV1ZSksIGRlcFF1ZXVlcy5mb3JFYWNoKGZuKSwgcHJvbWlzZVtcImNhdGNoXCJdKHggPT4ge30pKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBwcm9taXNlO1xuXHRib2R5KChkZXBzKSA9PiB7XG5cdFx0Y3VycmVudERlcHMgPSB3cmFwRGVwcyhkZXBzKTtcblx0XHR2YXIgZm47XG5cdFx0dmFyIGdldFJlc3VsdCA9ICgpID0+IChjdXJyZW50RGVwcy5tYXAoKGQpID0+IHtcblx0XHRcdGlmKGRbd2VicGFja0Vycm9yXSkgdGhyb3cgZFt3ZWJwYWNrRXJyb3JdO1xuXHRcdFx0cmV0dXJuIGRbd2VicGFja0V4cG9ydHNdO1xuXHRcdH0pKVxuXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdGZuID0gKCkgPT4gKHJlc29sdmUoZ2V0UmVzdWx0KSk7XG5cdFx0XHRmbi5yID0gMDtcblx0XHRcdHZhciBmblF1ZXVlID0gKHEpID0+IChxICE9PSBxdWV1ZSAmJiAhZGVwUXVldWVzLmhhcyhxKSAmJiAoZGVwUXVldWVzLmFkZChxKSwgcSAmJiAhcS5kICYmIChmbi5yKyssIHEucHVzaChmbikpKSk7XG5cdFx0XHRjdXJyZW50RGVwcy5tYXAoKGRlcCkgPT4gKGRlcFt3ZWJwYWNrUXVldWVzXShmblF1ZXVlKSkpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBmbi5yID8gcHJvbWlzZSA6IGdldFJlc3VsdCgpO1xuXHR9LCAoZXJyKSA9PiAoKGVyciA/IHJlamVjdChwcm9taXNlW3dlYnBhY2tFcnJvcl0gPSBlcnIpIDogb3V0ZXJSZXNvbHZlKGV4cG9ydHMpKSwgcmVzb2x2ZVF1ZXVlKHF1ZXVlKSkpO1xuXHRxdWV1ZSAmJiBxdWV1ZS5kIDwgMCAmJiAocXVldWUuZCA9IDApO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ21vZHVsZScgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMS9pbmRleC50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTEvaW5kZXguY3NzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00xL2luZGV4Lm1kXCIpO1xuIiwiIl0sIm5hbWVzIjpbIlNoYWRvd0NmZyIsIl9fY3N0cl9ob3N0IiwiQ0FOX0hBVkVfU0hBRE9XIiwiX2Nhbkhhc1NoYWRvdyIsInRhZyIsImluY2x1ZGVzIiwiX2VsZW1lbnQydGFnbmFtZSIsIkxJU1MiLCJleHRlbmRzIiwicF9leHRlbmRzIiwiaG9zdCIsInBfaG9zdCIsImRlcGVuZGVuY2llcyIsInBfZGVwcyIsImF0dHJpYnV0ZXMiLCJwX2F0dHJzIiwicGFyYW1zIiwiY29udGVudCIsImNzcyIsInNoYWRvdyIsInBfc2hhZG93IiwiSFRNTEVsZW1lbnQiLCJfZXh0ZW5kcyIsIk9iamVjdCIsImNhbkhhc1NoYWRvdyIsIkVycm9yIiwidW5kZWZpbmVkIiwicHVzaCIsIkhUTUxUZW1wbGF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJ0cmltIiwiUmVzcG9uc2UiLCJ0ZXh0IiwiTElTU0Jhc2UiLCJQYXJhbWV0ZXJzIiwic3R5bGVzaGVldHMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJmZXRjaF9jc3MiLCJDU1NTdHlsZVNoZWV0IiwiSFRNTFN0eWxlRWxlbWVudCIsInNoZWV0Iiwic3R5bGUiLCJyZXBsYWNlIiwibWFwIiwiaWR4IiwiY29uc3RydWN0b3IiLCJhdHRycyIsInNldEF0dHJEZWZhdWx0IiwiYXR0ciIsInZhbHVlIiwib25BdHRyQ2hhbmdlZCIsIl9uYW1lIiwiX29sZFZhbHVlIiwiX25ld1ZhbHVlIiwiaXNJbkRPTSIsIm9uRE9NQ29ubmVjdGVkIiwib25ET01EaXNjb25uZWN0ZWQiLCJleHRlbmRzTElTUyIsIkxpc3MiLCJwYXJhbWV0ZXJzIiwiYXNzaWduIiwiRXh0ZW5kZWRMSVNTIiwidCIsImlkIiwiYnVpbGRMSVNTSG9zdCIsIl9wYXJhbXMiLCJhbHJlYWR5RGVjbGFyZWRDU1MiLCJTZXQiLCJHRVQiLCJTeW1ib2wiLCJTRVQiLCJwcm9wZXJ0aWVzIiwiZnJvbUVudHJpZXMiLCJuIiwiZW51bWVyYWJsZSIsImdldCIsInNldCIsIkF0dHJpYnV0ZXMiLCJuYW1lIiwiZGF0YSIsImRlZmF1bHRzIiwic2V0dGVyIiwiZGVmaW5lUHJvcGVydGllcyIsIkxJU1NIb3N0QmFzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiaXNJbml0IiwiaW5pdGlhbGl6ZSIsImFwaSIsImluaXQiLCJMSVNTU3luYyIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJjdXN0b21FbGVtZW50cyIsInVwZ3JhZGUiLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uQ2xpY2tFdmVudCIsIm9icyIsImdldEF0dHJpYnV0ZSIsImFkb3B0ZWRTdHlsZVNoZWV0cyIsInNoYXJlZENTUyIsImNzc3NlbGVjdG9yIiwiQ1NTU2VsZWN0b3IiLCJoYXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJodG1sX3N0eWxlc2hlZXRzIiwicnVsZSIsImNzc1J1bGVzIiwiY3NzVGV4dCIsImhlYWQiLCJhcHBlbmQiLCJhZGQiLCJ0ZW1wbGF0ZV9lbGVtIiwic3RyIiwiXyIsIm1hdGNoIiwiY2hpbGROb2RlcyIsIm9iaiIsImhhc1NoYWRvdyIsImdldFBhcnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0UGFydHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGFnTmFtZSIsInJlbW92ZUF0dHJpYnV0ZSIsIm9ic2VydmVkQXR0cmlidXRlcyIsImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayIsIm9sZFZhbHVlIiwibmV3VmFsdWUiLCJfRE9NQ29udGVudExvYWRlZCIsInJlYWR5U3RhdGUiLCJkZWZpbmUiLCJ0YWduYW1lIiwiQ29tcG9uZW50Q2xhc3MiLCJDbGFzcyIsImh0bWx0YWciLCJhbGwiLCJMSVNTY2xhc3MiLCJvcHRzIiwiaW5zZXJ0R2xvYmFsQ1NTUnVsZXMiLCJjc3Nfc3R5bGUiLCJyZXBsYWNlU3luYyIsImluc2VydFJ1bGUiLCJERUxFR0FURURfRVZFTlRTIiwiQUxSRUFEWV9QUk9DRVNTRUQiLCJldiIsImhhbmRsZXJzIiwidHlwZSIsImVsZW0iLCJjb21wb3NlZFBhdGgiLCJTaGFkb3dSb290Iiwid2luZG93IiwidGFyZ2V0Iiwic2VsZWN0b3IiLCJoYW5kbGVyIiwibWF0Y2hlcyIsImluc2VydEdsb2JhbERlbGVnYXRlZExpc3RlbmVyIiwiZXZlbnRfbmFtZSIsImNsb3Nlc3QiLCJlbGVtZW50IiwicmVzdWx0Iiwicm9vdCIsImdldFJvb3ROb2RlIiwiYnVpbGQiLCJwYXJlbnQiLCJjbGFzc2VzIiwiY3NzdmFycyIsImxpc3RlbmVycyIsIkN1c3RvbUNsYXNzIiwid2hlbkRlZmluZWQiLCJ0b0xvd2VyQ2FzZSIsImNsYXNzTGlzdCIsInNldFByb3BlcnR5IiwidG9nZ2xlQXR0cmlidXRlIiwiZGF0YXNldCIsInJlcGxhY2VDaGlsZHJlbiIsImdldExJU1MiLCJjYWxsYmFjayIsIndoZW5BbGxEZWZpbmVkIiwidGFnbmFtZXMiLCJpc0RlZmluZWQiLCJnZXROYW1lIiwiZ2V0TElTU1N5bmMiLCJfYnVpbGRRUyIsInRhZ25hbWVfb3JfcGFyZW50IiwicXMiLCJxc28iLCJxc2EiLCJlbGVtZW50cyIsInByb21pc2VzIiwicXNjIiwicmVzIiwicXNTeW5jIiwicXNhU3luYyIsInFzY1N5bmMiLCJMSVNTX0F1dG8iLCJuYXZpZ2F0b3IiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiLCJjb250cm9sbGVyIiwic3JjIiwibG9jYXRpb24iLCJwYXRobmFtZSIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJtdXRhdGlvbiIsImFkZGl0aW9uIiwiYWRkZWROb2RlcyIsIkVsZW1lbnQiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsInJlc291cmNlcyIsImRlZmluZVdlYkNvbXBvbmVudCIsImZpbGVzIiwianMiLCJrbGFzcyIsIldlYkNvbXBvbmVudCIsImZpbGVuYW1lcyIsImZpbGUiLCJlbmRzV2l0aCIsIl9pbXBvcnQiLCJfZmV0Y2hUZXh0IiwiaSIsIkNzdG1FdmVudCIsIkN1c3RvbUV2ZW50IiwiYXJncyIsImRldGFpbCIsImZldGNoUmVzb3VyY2UiLCJyZXNvdXJjZSIsImZldGNoIiwidXJpIiwiaXNMaXNzQXV0byIsIm9wdGlvbnMiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJkZWZhdWx0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJIVE1MQ0xBU1NfUkVHRVgiLCJlbGVtZW50TmFtZUxvb2t1cFRhYmxlIiwiZXhlYyIsIkZvcm1hdHMiLCJzX2Zvcm11bGEiLCJnZXRDZWxscyIsImZvcm1hdCIsImV1cm9zIiwic19jb21wbGV4X2Zvcm11bGEiLCJzX3R5cGVzIiwiRGF0ZSIsInNfY3Vyc29yIiwic18kZm9ybXVsYSIsInNfJGZvcm0iLCJyZWYiLCJzaGVldF9yZWNvcGllX21vdGl2YXRpb24iLCJzaGVldF9yZWNvcGllX21vdGl2YXRpb25fZW1wdHkiLCJzaGVldF9yZWNvcGllX2luY3IiLCJjIiwiWCIsInRkIiwiZm9jdXMiLCJ0ZXh0Q29udGVudCIsInN0cjJodG1sIiwiUmFuZ2VPdmVybGF5IiwiRXZlbnRUYXJnZXQiLCJvdmVybGF5IiwiY2xhc3NsaXN0IiwidXBkYXRlIiwic2V0UmFuZ2UiLCJyYW5nZSIsInBsYWdlX25hbWUiLCJnZXRSZWN0IiwicmVjdCIsInRvZ2dsZSIsImdldFJhbmdlIiwic2V0UmVjdCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJGb3JtdWxhUmVmIiwic2V0Q29sb3IiLCJjb2xvcl9pZCIsInJlbW92ZSIsIlJlY29weUhhbmRsZSIsIngiLCJ5IiwidyIsImgiLCJDZWxsTGlzdCIsImRlZmF1bHRGb3JtYXQiLCJGb3JtYXRNYW5hZ2VyIiwiY3RybEtleSIsImNoYW5nZWQiLCJrZXkiLCJzZWxlY3Rpb24iLCJ0b2dnbGVGb3JtYXQiLCJzaGlmdEtleSIsInBvdXJjZW50IiwibnVtYmVyIiwicHJldmVudERlZmF1bHQiLCJkaXNwYXRjaEV2ZW50IiwicHJlYyIsInRvTG9jYWxlU3RyaW5nIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiRm9ybWF0IiwiYXBwbHlUbyIsImNlbGwiLCJjZWxscyIsInZhbCIsInJhd0NvbnRlbnQiLCJyIiwiaiIsInJlbGF0aXZlVG8iLCJzdGFydHNXaXRoIiwiZ2V0UHJvcGVydHkiLCJoYXNQcm9wZXJ0eSIsImV4dHJhY3RGb3JtYXQiLCJmMiIsInZhbHVlcyIsIml0ZW0iLCJzbGljZSIsImdldFByb3BlcnR5VmFsdWUiLCJjb2xzcGFuIiwicm93c3BhbiIsInNwYW4iLCJoYXNBdHRyaWJ1dGUiLCJwcmVjaXNpb24iLCJDYWxjRm9ybXVsYSIsInN0YXRlcyIsImNlbGxfZWRpdCIsInN0YXRlIiwic3luY1RvIiwiY3Vyc29yIiwiRm9ybXVsYSIsInJhbmdlc190b2tlbiIsImRyb3ciLCJkY29sIiwibmV3X3JhbmdlcyIsInBvcyIsImNlbGxQb3MiLCJsYXN0SW5kZXhPZiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm5ld19mb3JtdWxhIiwib2Zmc2V0IiwiYmVnIiwiZW5kIiwicGFyc2VfZm9ybXVsYSIsInJhbmdlc1Rva2VuIiwidG9TdHJpbmciLCJleHRyYWN0VG9rZW4iLCJ0b2tlbiIsImhhc0NvbW1hIiwiTm9kZSIsImNoaWxkcmVuIiwiZmN0IiwiZXZhbCIsInRvTnVtYmVyIiwiYSIsIm9wX2ltcGwiLCJiIiwiTWF0aCIsInBvdyIsIm9wX3ByaW8iLCJvcHMiLCJvcCIsInRva2VubGlzdDJUcmVlIiwidG9rZW5zIiwibmIiLCJyYXciLCJjdXIiLCJwcmlvcml0eSIsImZpbmRJbmRleCIsInVfb3AiLCJvcF90b2tlbiIsImxlZnQiLCJyaWdodCIsImN1clRva2VuIiwibm9kZSIsInJhbmdlcyIsImZpbHRlciIsIlBsYWdlRm9ybXVsYSIsImNvZGUiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJzZWxlY3RlZCIsImNsZWFyIiwiYmx1ciIsIlBsYWdlU2VsZWN0b3IiLCJzZWxlY3RlZF9jZWxscyIsImNvbHMiLCJ0Ym9keSIsImNvbF9pZCIsImNsaWVudFgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyb3dzIiwicm93X2lkIiwiY2xpZW50WSIsIm1haW4iLCJvbl9tb3VzZV9tb3ZlIiwicmVwbGFjZUFsbCIsImdldFZpc2libGVDZWxsIiwicG9zMnJlZiIsIm5iUm93cyIsIm5iQ29scyIsIm9uY2UiLCJpc0FjdGl2ZSIsIm9uSW5wdXQiLCJycmFuZ2UiLCJnZXRTZWxlY3Rpb24iLCJnZXRSYW5nZUF0Iiwic3RhcnRPZmZzZXQiLCJjaGlsZCIsIm5vZGVUeXBlIiwiVEVYVF9OT0RFIiwic3RhcnRDb250YWluZXIiLCJjcmVhdGVSYW5nZSIsInNlbCIsInNldFN0YXJ0IiwiY29sbGFwc2UiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsInRvUHJlY2lzaW9uIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwicGFyc2VJbnB1dCIsInRlc3RfbnVtYmVyIiwiTnVtYmVyIiwiaXNOYU4iLCJwYXJ0cyIsInNwbGl0IiwidGVzdF9kYXRlIiwiZ2V0RnVsbFllYXIiLCJTdGF0ZSIsInByZXZfc3RhdGUiLCJTdGF0ZXMiLCJDYWxjU2hlZXQiLCJlbnRyaWVzIiwicyIsInRibF9vZmZzZXQiLCJvZmZzZXRUb3AiLCJzdGFydCIsIm9mZnNldExlZnQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInJvd19kaWZmIiwiY29sX2RpZmYiLCJyb3ciLCJjb2wiLCJyZWNvcHkiLCJjb3B5IiwibGFzdF9yZWNvcHlfdGFyZ2V0IiwibGFzdF9yZWNvcHlfZGlyIiwib25fcmVjb3B5X21vdmUiLCJkX3B4Iiwid2lkdGgiLCJkX3B5IiwiaGVpZ2h0IiwiZF94IiwiZF95Iiwic2lnbiIsImFicyIsInByZXYiLCJkaWZmX3giLCJkaWZmX3kiLCJwb3NfY3VyIiwic2V0RGF0ZSIsImdldERhdGUiLCJjbGFzc05hbWUiLCJmb3JtdWxhX2JhciIsInBsYWdlIiwiZm9ybXVsYSIsInJvIiwiaXNfcm8iLCJhbHRLZXkiLCJkc3QiLCJkZWVwQ2xvbmUiLCJkZWxldGVGb3JtYXQiLCJkZWxldGVDb250ZW50IiwiZF9yb3ciLCJkX2NvbCIsIm5leHQiLCJidWJibGVzIiwib25JbnB1dDIiLCJyYW5nZXNfY29sb3JzIiwiY3VyX29mZnNldCIsInJhbmdlX25hbWUiLCJyYW5nZXNfbmFtZXMiLCJrZXlzIiwid2FybiIsImZpcnN0Q2VsbCIsInBhcmVudEVsZW1lbnQiLCJyZXNpemUiLCJuYnJvd3MiLCJuYmNvbHMiLCJjb2xfaHRtbCIsInRoIiwicm93X2h0bWwiLCJ0YWJsZSIsInJlc2l6ZU9icyIsIlJlc2l6ZU9ic2VydmVyIiwiZnJvbSIsInRvIiwiSFRNTFRhYmxlQ2VsbEVsZW1lbnQiLCJyZWYycG9zIiwiYmVnX3JvdyIsImJlZ19jb2wiLCJlbmRfcm93IiwiZW5kX2NvbCIsImNlbGxfb3Jfcm93aWQiLCJiX3Jvd19pZCIsImJfY29sX2lkIiwiY2hhckNvZGVBdCIsImVfcm93X2lkIiwiZV9jb2xfaWQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNvcnQiLCJtaW4iLCJtYXgiLCJuYl9jb2xzIiwiZmxvb3IiLCJmIiwiaXNGb3JtYXQiLCJyYXdfdmFsIiwidiIsImRpZmYiLCJzZXRSTyIsImNsb25lIiwiY2xvbmVOb2RlIiwic25hbWUiLCJwYXRoIiwicm9vdF9wYXRoIiwiaG9zdG5hbWUiLCJwYWdlcyIsImhlYWRlciIsInRpdGxlcyIsImh0cmVlIiwiaHRtbCIsImxldmVsIiwiaHRyZWVfY3Vyc29yIiwidGl0bGUiLCJzZWFyY2hDdXJIZWFkZXIiLCJwb3NpdGlvbiIsImhpZCIsImdldFRpdGxlUHJlZml4IiwiaW5kZXhPZiIsIm51bSIsImJ1aWxkTWVudSIsIm5vZGVzIiwibWVudSIsInVwZGF0ZUhlYWRlciIsImxhc3QiLCJzY3JvbGxUb3AiLCJyZXZlcnNlIiwiaG5vZGUiLCJoX2h0bWwiLCJsaW5rIiwiZW1wdHkiLCJtYWtlX3BhZ2VfaHJlZiIsInBhdGhwcmVmaXgiLCJkZXNjIiwiaHJlZiIsIm1ha2VfcGFnZV9tZW51IiwiZmluZCIsInBhZ2UiLCJjdXJwYWdlIiwibW9kdWxlX2h0bWwiLCJ0eXBlX2h0bWwiLCJkZXNjX3R5cGUiLCJkZXNjMl9pZHgiLCJib2R5Iiwic2Vzc2lvbl9odG1sIiwidGVtcGxhdGUiLCJzdHIyREYiXSwic291cmNlUm9vdCI6IiJ9