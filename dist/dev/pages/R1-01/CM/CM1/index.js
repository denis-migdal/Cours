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
        console.log(sheet);
        sheet.cursor.addEventListener('change', ()=>{
            sheet.selection.replaceAll(sheet.cursor);
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
            cursor.setRange(this.#cursor);
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
            if (target.tagName === "TD") {
                let cell = target;
                if ("cell" in cell) cell = cell.cell;
                this.#cursor.replaceAll(cell);
            }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z2VzL1IxLTAxL0NNL0NNMS9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00xL2luZGV4Lm1kIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9Db3Vycy8uL2xpYnMvTElTUy9pbmRleC50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvUmFuZ2VPdmVybGF5LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL2Zvcm1hdC50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9mb3JtdWxhX2VkaXRvci50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9mb3JtdWxhX3BhcnNlci50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9wbGFnZV9lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvcGxhZ2Vfc2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvc2hlZXQudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L21lbnUudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L3V0aWxzL3N0cjJodG1sLnRzIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9hc3luYyBtb2R1bGUiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInBhZ2VzL1IxLTAxL0NNL0NNMS9pbmRleC5odG1sXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI6aG9zdCB0YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcbiAgICAmID4gdGJvZHkge1xcbiAgICAgICAgb3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICB9XFxuXFxuICAgICYgPiB0Ym9keSA+IHRyOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgXFxuICAgICAgICAmID4gdGgge1xcbiAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbjpob3N0IDppcyh0cix0aCx0ZCkge1xcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjMGMwYzA7XFxuIH1cXG5cXG46aG9zdCB0ciB7XFxuICAgIGhlaWdodDogMC40NWNtO1xcbiAgICBsaW5lLWhlaWdodDogMC40NWNtO1xcbn1cXG5cXG5cXG46aG9zdCA6aXModGQsIHRoKTpub3QoW2NvbnRlbnRlZGl0YWJsZV0pIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi8qXFxuOmhvc3QgdGRbY29udGVudGVkaXRhYmxlXSB7XFxuICAgIHVzZXItc2VsZWN0OiB0ZXh0O1xcbn0qL1xcblxcbjpob3N0IDppcyh0ZCwgdGgpIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogMi4yNmNtO1xcbiAgICBoZWlnaHQ6IDAuNDVjbTtcXG5cXG4gICAgZm9udC1zaXplOiAxMHB0O1xcblxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ0xpYmVyYXRpb24gU2Fucyc7XFxufVxcblxcbjpob3N0IHRyID4gdGg6Zmlyc3QtY2hpbGQge1xcbiAgICB3aWR0aDogY2FsYyggMi4yNmNtIC8gMi41KSA7XFxufVxcblxcbjpob3N0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbjpob3N0IGRpdi50b29sYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG5cXG4gICAgJiA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICAgICAgZmxleDogMSAxIDA7XFxuICAgIH1cXG4gICAgJiA+ICo6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgd2lkdGg6IGNhbGMoIDEuNSAqIDIuMjZjbSApO1xcbiAgICB9XFxufVxcblxcbjpob3N0IHRoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOGE4YThhO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcblxcbiAgICAmLmhpZ2hsaWdodCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk4ZWU3O1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxufVxcblxcbjpob3N0KC5jZWxsX2VkaXQpIC5jdXJzb3Ige1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG46aG9zdCgucmVjb3B5KSB7XFxuICAgIGN1cnNvcjogY2VsbDtcXG59XFxuXFxuOmhvc3Qge1xcblxcbiAgICAucmVjb3B5IHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgY3Vyc29yOiBjZWxsO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM5OGVlNztcXG5cXG4gICAgfVxcblxcbiAgICAuY3Vyc29yIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMzOThlZTc7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG46aG9zdCAuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuOmhvc3QgdGQge1xcblxcbiAgICAtLWZvbnRfc2l6ZTogMTBwdDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250X3NpemUpO1xcbiAgICBsaW5lLWhlaWdodDogY2FsYyggdmFyKC0tZm9udF9zaXplKSAqIDEuMiApO1xcblxcbiAgICAtLWluZGVudDogMDtcXG5cXG4gICAgLS1ib3JkZXJfY29sb3I6IGJsYWNrO1xcbiAgICAtLWJhY2tncm91bmRfY29sb3I6IHdoaXRlO1xcbiAgICAtLWZvcmVncm91bmRfY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kX2NvbG9yKTtcXG4gICAgY29sb3IgICAgICAgICAgIDogdmFyKC0tZm9yZWdyb3VuZF9jb2xvcik7XFxuXFxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxuXFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuXFxuICAgICY6aXMoW2RhdGEtdHlwZT1cXFwibnVtYmVyXFxcIl0sW2RhdGEtdHlwZT1cXFwiZGF0ZVxcXCJdLCBbZGF0YS10eXBlPVxcXCJib29sZWFuXFxcIl0pIHtcXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICB9XFxuXFxuICAgICZbY29udGVudGVkaXRhYmxlXSB7XFxuICAgICAgICBvdXRsaW5lOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgJi5hanVzdGVyIHtcXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIH1cXG5cXG4gICAgJi5oaWdobGlnaHQge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NkZTNmOTtcXG4gICAgfVxcblxcbiAgICAvKiogc3R5bGUgKiovXFxuICAgICYuaXRhbGljIHtcXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgfVxcbiAgICAmLmJvbGQge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIH1cXG4gICAgJi51bmRlcmxpbmUge1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIH1cXG4gICAgJi5hbGlnbl9sZWZ0IHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyggdmFyKC0taW5kZW50KSAqIDEwcHgpO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgfVxcbiAgICAmLmFsaWduX2NlbnRlciB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgJi5hbGlnbl9yaWdodCB7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKCB2YXIoLS1pbmRlbnQpICogMTBweCk7XFxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgfVxcbiAgICAmLnZhbGlnbl90b3Age1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgfVxcbiAgICAmLnZhbGlnbl9taWRkbGUge1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgfVxcbiAgICAmLnZhbGlnbl9ib3R0b20ge1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gICAgfVxcbiAgICAvKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMjQxNzU3L2FwcGx5aW5nLWJvcmRlcnMtdG8tYS1zaW5nbGUtdGFibGUtY2VsbC13aGVuLXVzaW5nLWJvcmRlci1jb2xsYXBzZSAqL1xcbiAgICAmLmJvcmRlcl90b3Age1xcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IGRvdWJsZSB2YXIoLS1ib3JkZXJfY29sb3IpO1xcbiAgICB9XFxuICAgICYuYm9yZGVyX2JvdHRvbSB7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZG91YmxlIHZhcigtLWJvcmRlcl9jb2xvcik7XFxuICAgIH1cXG4gICAgJi5ib3JkZXJfbGVmdCB7XFxuICAgICAgICBib3JkZXItbGVmdDogMXB4IGRvdWJsZSB2YXIoLS1ib3JkZXJfY29sb3IpO1xcbiAgICB9XFxuICAgICYuYm9yZGVyX3JpZ2h0IHtcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IGRvdWJsZSB2YXIoLS1ib3JkZXJfY29sb3IpO1xcbiAgICB9XFxufVxcblxcbjpob3N0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG46aG9zdCAucmFuZ2VfaGlnaGxpZ2h0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taGlnaGxpZ2h0X2NvbG9yKTtcXG59XFxuXFxuOmhvc3QgLmZvcm11bGFfaGlnaGxpZ2h0IHtcXG4gICAgY29sb3I6IHZhcigtLWhpZ2hsaWdodF9jb2xvcik7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfMCB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjZmEwYzBjO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzEge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogI2ZhMGNmYTtcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF8yIHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICMwYzg0MGM7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfMyB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjMDEwMTgwO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzQge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzg3MTcxNztcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF81IHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICM4NzE3ODc7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfNiB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjODQ4NDBjO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0Xzcge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzBjMGNmYTtcXG59XFxuXFxuXFxuLmNvcHlfaGlnaGxpZ2h0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBUb21vcnJvdyBUaGVtZSAqL1xcbi8qIGh0dHA6Ly9qbWJsb2cuZ2l0aHViLmNvbS9jb2xvci10aGVtZXMtZm9yLWdvb2dsZS1jb2RlLWhpZ2hsaWdodGpzICovXFxuLyogT3JpZ2luYWwgdGhlbWUgLSBodHRwczovL2dpdGh1Yi5jb20vY2hyaXNrZW1wc29uL3RvbW9ycm93LXRoZW1lICovXFxuXFxuLyogVG9tb3Jyb3cgQ29tbWVudCAqL1xcbi5obGpzLWNvbW1lbnQsXFxuLmhsanMtcXVvdGUge1xcblxcdGNvbG9yOiAjOGU5MDhjO1xcbn1cXG5cXG4vKiBUb21vcnJvdyBSZWQgKi9cXG4uaGxqcy12YXJpYWJsZSxcXG4uaGxqcy10ZW1wbGF0ZS12YXJpYWJsZSxcXG4uaGxqcy10YWcsXFxuLmhsanMtbmFtZSxcXG4uaGxqcy1zZWxlY3Rvci1pZCxcXG4uaGxqcy1zZWxlY3Rvci1jbGFzcyxcXG4uaGxqcy1yZWdleHAsXFxuLmhsanMtZGVsZXRpb24ge1xcblxcdGNvbG9yOiAjYzgyODI5O1xcbn1cXG5cXG4vKiBUb21vcnJvdyBPcmFuZ2UgKi9cXG4uaGxqcy1udW1iZXIsXFxuLmhsanMtYnVpbHRfaW4sXFxuLmhsanMtYnVpbHRpbi1uYW1lLFxcbi5obGpzLWxpdGVyYWwsXFxuLmhsanMtdHlwZSxcXG4uaGxqcy1wYXJhbXMsXFxuLmhsanMtbWV0YSxcXG4uaGxqcy1saW5rIHtcXG5cXHRjb2xvcjogI2Y1ODcxZjtcXG59XFxuXFxuLyogVG9tb3Jyb3cgWWVsbG93ICovXFxuLmhsanMtYXR0cmlidXRlIHtcXG5cXHRjb2xvcjogI2VhYjcwMDtcXG59XFxuXFxuLyogVG9tb3Jyb3cgR3JlZW4gKi9cXG4uaGxqcy1zdHJpbmcsXFxuLmhsanMtc3ltYm9sLFxcbi5obGpzLWJ1bGxldCxcXG4uaGxqcy1hZGRpdGlvbiB7XFxuXFx0Y29sb3I6ICM3MThjMDA7XFxufVxcblxcbi8qIFRvbW9ycm93IEJsdWUgKi9cXG4uaGxqcy10aXRsZSxcXG4uaGxqcy1zZWN0aW9uIHtcXG5cXHRjb2xvcjogIzQyNzFhZTtcXG59XFxuXFxuLyogVG9tb3Jyb3cgUHVycGxlICovXFxuLmhsanMta2V5d29yZCxcXG4uaGxqcy1zZWxlY3Rvci10YWcge1xcblxcdGNvbG9yOiAjODk1OWE4O1xcbn1cXG5cXG4uaGxqcyB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0b3ZlcmZsb3cteDogYXV0bztcXG5cXHRjb2xvcjogIzRkNGQ0YztcXG5cXHRwYWRkaW5nOiAwLjVlbTtcXG59XFxuXFxuLmhsanMtZW1waGFzaXMge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmhsanMtc3Ryb25nIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XCI7IiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBleHBvcnRlZCB0eXBlcyA9PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgdHlwZSBDU1NfUmVzb3VyY2UgPSBzdHJpbmd8UmVzcG9uc2V8SFRNTFN0eWxlRWxlbWVudHxDU1NTdHlsZVNoZWV0O1xuZXhwb3J0IHR5cGUgQ1NTX1NvdXJjZSAgID0gQ1NTX1Jlc291cmNlIHwgUHJvbWlzZTxDU1NfUmVzb3VyY2U+O1xuXG5leHBvcnQgdHlwZSBIVE1MX1Jlc291cmNlID0gc3RyaW5nfFJlc3BvbnNlfEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XG5leHBvcnQgdHlwZSBIVE1MX1NvdXJjZSAgID0gSFRNTF9SZXNvdXJjZSB8IFByb21pc2U8SFRNTF9SZXNvdXJjZT47XG5cbmV4cG9ydCB0eXBlIExJU1NPcHRpb25zPEV4dGVuZHMgICAgZXh0ZW5kcyBDbGFzcyxcblx0XHRcdFx0XHRcdEhvc3QgICAgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHRcdEF0dHJzICAgICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0XHRQYXJhbWV0ZXJzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4gPSB7XG5cblx0ZXh0ZW5kcz86IENvbnN0cnVjdG9yPEV4dGVuZHM+LFxuXHRob3N0ICAgPzogQ29uc3RydWN0b3I8SG9zdD4sXG5cblx0ZGVwZW5kZW5jaWVzPzogcmVhZG9ubHkgUHJvbWlzZTxhbnk+W10sXG5cdGF0dHJpYnV0ZXMgID86IHJlYWRvbmx5IEF0dHJzW10sXG5cdHBhcmFtcyAgICAgID86IFJlYWRvbmx5PFBhcmFtZXRlcnM+LFxuXG5cdGNvbnRlbnQ/OiBIVE1MX1NvdXJjZSxcblx0Y3NzICAgID86ICBDU1NfU291cmNlIHwgcmVhZG9ubHkgQ1NTX1NvdXJjZVtdLFxuXHRzaGFkb3cgPzogIFNoYWRvd0NmZyxcbn07XG5cbmV4cG9ydCBlbnVtIFNoYWRvd0NmZyB7XG5cdE5PTkUgPSAnbm9uZScsXG5cdE9QRU4gPSAnb3BlbicsIFxuXHRDTE9TRT0gJ2Nsb3NlZCdcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgQ2xhc3MgPT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxubGV0IF9fY3N0cl9ob3N0ICA6IGFueSA9IG51bGw7XG5cbnR5cGUgQ29uc3RydWN0b3I8VD4gPSBuZXcgKCkgPT4gVDtcbmludGVyZmFjZSBDbGFzcyB7fVxuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9hdHRhY2hTaGFkb3dcbmNvbnN0IENBTl9IQVZFX1NIQURPVyA9IFtcblx0bnVsbCwgJ2FydGljbGUnLCAnYXNpZGUnLCAnYmxvY2txdW90ZScsICdib2R5JywgJ2RpdicsXG5cdCdmb290ZXInLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnaGVhZGVyJywgJ21haW4nLFxuXHQnbmF2JywgJ3AnLCAnc2VjdGlvbicsICdzcGFuJ1xuXHRcbl07XG5mdW5jdGlvbiBfY2FuSGFzU2hhZG93KHRhZzogdHlwZW9mIEhUTUxFbGVtZW50KSB7XG5cdHJldHVybiBDQU5fSEFWRV9TSEFET1cuaW5jbHVkZXMoIF9lbGVtZW50MnRhZ25hbWUodGFnKSApO1xufVxuXG50eXBlIFJlc291cmNlID0gVVJMfFJlc3BvbnNlO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExJU1M8RXh0ZW5kcyAgICBleHRlbmRzIENsYXNzICAgICAgICAgICAgICA9IENsYXNzLFxuXHRcdFx0XHRcdFx0XHQgSG9zdCAgICAgICBleHRlbmRzIEhUTUxFbGVtZW50ICAgICAgICA9IEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdFx0XHQgQXR0cnMgICAgICBleHRlbmRzIHN0cmluZyAgICAgICAgICAgICA9IG5ldmVyLFxuXHRcdFx0XHRcdFx0XHQgUGFyYW1ldGVycyBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55PiA9IHt9Pih7XG5cdFx0XHRcdFx0XHRcdFx0ZXh0ZW5kcyAgICAgOiBwX2V4dGVuZHMsXG5cdFx0XHRcdFx0XHRcdFx0aG9zdCAgICAgICAgOiBwX2hvc3QsXG5cdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jaWVzOiBwX2RlcHMsXG5cdFx0XHRcdFx0XHRcdCAgICBhdHRyaWJ1dGVzICA6IHBfYXR0cnMsXG5cdFx0XHRcdFx0XHRcdCAgICBwYXJhbXMsXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudCxcblx0XHRcdFx0XHRcdFx0XHRjc3MsXG5cdFx0XHRcdFx0XHRcdFx0c2hhZG93ICAgICAgOiBwX3NoYWRvdyxcblx0XHRcdFx0XHRcdFx0fTogTElTU09wdGlvbnM8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtZXRlcnM+ID0ge30pIHtcblxuXHQvL1RPRE8gbWVyZ2UgcHJvcCBpZiBleHRlbmRzIExJU1MuLi5cblxuXHRjb25zdCBob3N0ICAgICAgICA9IHBfaG9zdCAgICA/PyBIVE1MRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxIb3N0Pjtcblx0Y29uc3QgX2V4dGVuZHMgICAgPSBwX2V4dGVuZHMgPz8gT2JqZWN0ICAgICAgYXMgdW5rbm93biBhcyBDb25zdHJ1Y3RvcjxFeHRlbmRzPjtcblx0Y29uc3QgYXR0cmlidXRlcyAgPSBwX2F0dHJzICAgPz8gW107XG5cdGNvbnN0IGRlcGVuZGVuY2llcz0gcF9kZXBzICAgID8gWy4uLnBfZGVwc10gOiBbXTtcblx0Y29uc3QgY2FuSGFzU2hhZG93PSBfY2FuSGFzU2hhZG93KGhvc3QpO1xuXHRjb25zdCBzaGFkb3cgICAgICA9IHBfc2hhZG93ICA/PyAoY2FuSGFzU2hhZG93ID8gU2hhZG93Q2ZnLkNMT1NFIDogU2hhZG93Q2ZnLk5PTkUpO1xuXG5cdGlmKCAhIGNhbkhhc1NoYWRvdyAmJiBzaGFkb3cgIT09IFNoYWRvd0NmZy5OT05FKVxuXHRcdHRocm93IG5ldyBFcnJvcihgSG9zdCBlbGVtZW50ICR7X2VsZW1lbnQydGFnbmFtZShob3N0KX0gZG9lcyBub3Qgc3VwcG9ydCBTaGFkb3dSb290YCk7XG5cblx0Ly8gQ09OVEVOVCBwcm9jZXNzaW5nXG5cdGlmKCBjb250ZW50ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRkZXBlbmRlbmNpZXMucHVzaCggKCBhc3luYyAoKSA9PiB7XG5cblx0XHRcdGNvbnRlbnQgPSBhd2FpdCBjb250ZW50O1xuXG5cdFx0XHRpZihjb250ZW50IGluc3RhbmNlb2YgSFRNTFRlbXBsYXRlRWxlbWVudClcblx0XHRcdGNvbnRlbnQgPSBjb250ZW50LmlubmVySFRNTDtcblxuXHRcdFx0aWYoIHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB7XG5cblx0XHRcdFx0Y29udGVudCA9IGNvbnRlbnQudHJpbSgpOyAvLyBOZXZlciByZXR1cm4gYSB0ZXh0IG5vZGUgb2Ygd2hpdGVzcGFjZSBhcyB0aGUgcmVzdWx0XG5cdFx0XHRcdGlmKGNvbnRlbnQgPT09ICcnKVxuXHRcdFx0XHRcdGNvbnRlbnQgPSB1bmRlZmluZWQ7XG5cblx0XHRcdH1cblx0XHRcdGlmKCBjb250ZW50IGluc3RhbmNlb2YgUmVzcG9uc2UgKVxuXHRcdFx0XHRjb250ZW50ID0gYXdhaXQgY29udGVudC50ZXh0KCk7XG5cblx0XHRcdHJldHVybiBMSVNTQmFzZS5QYXJhbWV0ZXJzLmNvbnRlbnQgPSBjb250ZW50O1xuXHRcdH0pKCkgKTtcblx0fVxuXG5cdC8vIENTUyBwcm9jZXNzaW5nXG5cdGxldCBzdHlsZXNoZWV0czogcmVhZG9ubHkgQ1NTU3R5bGVTaGVldFtdID0gW107XG5cdGlmKCBjc3MgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdGlmKCAhIEFycmF5LmlzQXJyYXkoY3NzKSApXG5cdFx0XHRjc3MgPSBbY3NzIGFzIENTU19Tb3VyY2VdO1xuXG5cdFx0c3R5bGVzaGVldHMgPSBuZXcgQXJyYXk8Q1NTU3R5bGVTaGVldD4oY3NzLmxlbmd0aCk7XG5cblx0XHRjb25zdCBmZXRjaF9jc3MgPSAoYXN5bmMgKGNzczogQ1NTX1NvdXJjZSkgPT4ge1xuXHRcdFx0Y3NzID0gYXdhaXQgY3NzO1xuXHRcdFx0aWYoY3NzIGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldClcblx0XHRcdFx0cmV0dXJuIGNzcztcblx0XHRcdGlmKCBjc3MgaW5zdGFuY2VvZiBIVE1MU3R5bGVFbGVtZW50KVxuXHRcdFx0XHRyZXR1cm4gY3NzLnNoZWV0ITtcblxuXHRcdFx0bGV0IHN0eWxlID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcblx0XHRcdGlmKCB0eXBlb2YgY3NzID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0XHRzdHlsZS5yZXBsYWNlKGNzcyk7XG5cdFx0XHRcdHJldHVybiBzdHlsZTtcblx0XHRcdH1cblxuXHRcdFx0Ly9pZiggY3NzIGluc3RhbmNlb2YgUmVzcG9uc2UgKVxuXHRcdFx0c3R5bGUucmVwbGFjZShhd2FpdCBjc3MudGV4dCgpKTtcblx0XHRcdHJldHVybiBzdHlsZTtcblx0XHR9KTtcblxuXHRcdGRlcGVuZGVuY2llcy5wdXNoKCAuLi5jc3MubWFwKCBhc3luYyAoY3NzLCBpZHgpID0+ICAoc3R5bGVzaGVldHMgYXMgYW55KVtpZHhdID0gYXdhaXQgZmV0Y2hfY3NzKGNzcykgKSApO1xuXHR9XG5cblx0dHlwZSBMSG9zdCA9IExJU1NIb3N0PExJU1NCYXNlPjtcblxuXHQvLyBAdHMtaWdub3JlXG5cdGNsYXNzIExJU1NCYXNlIGV4dGVuZHMgX2V4dGVuZHMge1xuXG5cdFx0cmVhZG9ubHkgI2hvc3Q6IGFueTsgLy8gcHJldmVudHMgaXNzdWUgIzEuLi5cblxuXHRcdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0XHRzdXBlcigpO1xuXG5cdFx0XHQvLyBoNGNrLCBva2F5IGJlY2F1c2UgSlMgaXMgbW9ub3RocmVhZGVkLlxuXHRcdFx0aWYoIF9fY3N0cl9ob3N0ID09PSBudWxsIClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGRvIG5vdCBkaXJlY3RseSBjYWxsIHRoaXMgY29uc3RydWN0b3JcIik7XG5cdFx0XHR0aGlzLiNob3N0ID0gX19jc3RyX2hvc3Q7XG5cdFx0XHRfX2NzdHJfaG9zdCA9IG51bGw7XG5cdFx0fVxuXG5cdFx0cHVibGljIGdldCBob3N0KCk6IEhvc3Qge1xuXHRcdFx0cmV0dXJuIHRoaXMuI2hvc3Q7XG5cdFx0fVxuXHRcdHByb3RlY3RlZCBnZXQgYXR0cnMoKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuI2hvc3QgYXMgTEhvc3QpLmF0dHJzO1xuXHRcdH1cblx0XHRwcm90ZWN0ZWQgc2V0QXR0ckRlZmF1bHQoIGF0dHI6IEF0dHJzLCB2YWx1ZTogc3RyaW5nfG51bGwpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkuc2V0QXR0ckRlZmF1bHQoYXR0ciwgdmFsdWUpO1xuXG5cdFx0fVxuXHRcdHByb3RlY3RlZCBnZXQgcGFyYW1zKCkge1xuXHRcdFx0cmV0dXJuICh0aGlzLiNob3N0IGFzIExIb3N0KS5wYXJhbXM7XG5cdFx0fVxuXHRcdHByb3RlY3RlZCBnZXQgY29udGVudCgpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkuY29udGVudCE7XG5cdFx0fVxuXG5cdFx0c3RhdGljIHJlYWRvbmx5IFBhcmFtZXRlcnMgPSB7XG5cdFx0XHRob3N0LFxuXHRcdFx0ZGVwZW5kZW5jaWVzLFxuXHRcdFx0YXR0cmlidXRlcyxcblx0XHRcdHBhcmFtcyxcblx0XHRcdGNvbnRlbnQsXG5cdFx0XHRzdHlsZXNoZWV0cyxcblx0XHRcdHNoYWRvdyxcblx0XHR9O1xuXG5cdFx0cHJvdGVjdGVkIG9uQXR0ckNoYW5nZWQoX25hbWU6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0XHRfb2xkVmFsdWU6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0XHRfbmV3VmFsdWU6IHN0cmluZyk6IHZvaWR8ZmFsc2Uge31cblxuXHRcdHByb3RlY3RlZCBnZXQgaXNJbkRPTSgpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkuaXNJbkRPTTtcblx0XHR9XG5cdFx0cHJvdGVjdGVkIG9uRE9NQ29ubmVjdGVkKCkge31cblx0XHRwcm90ZWN0ZWQgb25ET01EaXNjb25uZWN0ZWQoKSB7fVxuXHR9XG5cblx0cmV0dXJuIExJU1NCYXNlO1xufVxuXG4vL1RPRE86IG90aGVyIG9wdGlvbnMuLi5cbmZ1bmN0aW9uIGV4dGVuZHNMSVNTPEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0SG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRBdHRyczEgICBleHRlbmRzIHN0cmluZyxcblx0QXR0cnMyICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4sXG5cdFQgZXh0ZW5kcyBMSVNTUmV0dXJuVHlwZTxFeHRlbmRzLCBIb3N0LCBBdHRyczEsIFBhcmFtcz4+KExpc3M6IFQsIHBhcmFtZXRlcnM6IHthdHRyaWJ1dGVzOiByZWFkb25seSBBdHRyczJbXX0pIHtcblxuXHQvLyBUT0RPOiBvdGhlciBvcHRpb25zLi4uXG5cdGNvbnN0IGF0dHJzID0gWy4uLkxpc3MuUGFyYW1ldGVycy5hdHRyaWJ1dGVzLCAuLi5wYXJhbWV0ZXJzLmF0dHJpYnV0ZXMhXTtcblx0Y29uc3QgcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgTGlzcy5QYXJhbWV0ZXJzLCB7YXR0cmlidXRlczogYXR0cnN9KTtcblxuXHQvLyBAdHMtaWdub3JlIDogYmVjYXVzZSBUUyBzdHVwaWRcblx0Y2xhc3MgRXh0ZW5kZWRMSVNTIGV4dGVuZHMgTGlzcyB7XG5cdFx0Y29uc3RydWN0b3IoLi4udDogYW55W10pIHtcblx0XHRcdC8vIEB0cy1pZ25vcmUgOiBiZWNhdXNlIFRTIHN0dXBpZFxuXHRcdFx0c3VwZXIoLi4udCk7XG5cdFx0fVxuXG5cdFx0cHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhdHRycygpIHtcblx0XHRcdHJldHVybiBzdXBlci5hdHRycyBhcyBSZWNvcmQ8QXR0cnMyfEF0dHJzMSwgc3RyaW5nfG51bGw+O1xuXHRcdH1cblxuXHRcdHN0YXRpYyBvdmVycmlkZSBQYXJhbWV0ZXJzID0gcGFyYW1zO1xuXHR9XG5cblx0cmV0dXJuIEV4dGVuZGVkTElTUztcbn1cbkxJU1MuZXh0ZW5kc0xJU1MgPSBleHRlbmRzTElTUztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyB0eXBlIGhlbHBlcnMgPT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIGJ1aWxkTElTU0hvc3RSZXR1cm5UeXBlPFQ+ICA9IFQgZXh0ZW5kcyBMSVNTUmV0dXJuVHlwZTxpbmZlciBFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbmZlciBIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbmZlciBBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5mZXIgUGFyYW1zICBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gUmV0dXJuVHlwZTx0eXBlb2YgYnVpbGRMSVNTSG9zdDxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zLCBUPj4gOiBuZXZlcjtcblxuZXhwb3J0IHR5cGUgTElTU1JldHVyblR5cGU8XG5cdEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0SG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+PiA9IFJldHVyblR5cGU8dHlwZW9mIExJU1M8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcz4+O1xuZXhwb3J0IHR5cGUgTElTU0Jhc2U8RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdCBIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0IEF0dHJzICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0IFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4+ID0gSW5zdGFuY2VUeXBlPExJU1NSZXR1cm5UeXBlPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXM+PjtcbmV4cG9ydCB0eXBlIExJU1NIb3N0PExJU1MgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+ID4gPSBJbnN0YW5jZVR5cGU8YnVpbGRMSVNTSG9zdFJldHVyblR5cGU8Q29uc3RydWN0b3I8TElTUz4gJiB7UGFyYW1ldGVyczogYW55fT4+O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTSG9zdCBjbGFzcyA9PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmxldCBpZCA9IDA7XG5cbmZ1bmN0aW9uIGJ1aWxkTElTU0hvc3Q8RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdCAgIEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHQgICBBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdCAgIFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4sXG5cdFx0XHRcdFx0ICAgVCBleHRlbmRzIExJU1NSZXR1cm5UeXBlPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXM+PihMaXNzOiBULCBfcGFyYW1zOiBQYXJ0aWFsPFBhcmFtcz4gPSB7fSkge1xuXHRjb25zdCB7XG5cdFx0aG9zdCxcblx0XHRhdHRyaWJ1dGVzLFxuXHRcdGNvbnRlbnQsXG5cdFx0c3R5bGVzaGVldHMsXG5cdFx0c2hhZG93LFxuXHR9ID0gTGlzcy5QYXJhbWV0ZXJzO1xuXG5cdGNvbnN0IGFscmVhZHlEZWNsYXJlZENTUyA9IG5ldyBTZXQoKTtcblxuXHRjb25zdCBHRVQgPSBTeW1ib2woJ2dldCcpO1xuXHRjb25zdCBTRVQgPSBTeW1ib2woJ3NldCcpO1xuXG5cdGNvbnN0IHByb3BlcnRpZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoIGF0dHJpYnV0ZXMubWFwKG4gPT4gW24sIHtcblxuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbigpOiBzdHJpbmd8bnVsbCAgICAgIHsgcmV0dXJuICh0aGlzIGFzIHVua25vd24gYXMgQXR0cmlidXRlcylbR0VUXShuKTsgfSxcblx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlOiBzdHJpbmd8bnVsbCkgeyByZXR1cm4gKHRoaXMgYXMgdW5rbm93biBhcyBBdHRyaWJ1dGVzKVtTRVRdKG4sIHZhbHVlKTsgfVxuXHR9XSkgKTtcblxuXHRjbGFzcyBBdHRyaWJ1dGVzIHtcbiAgICAgICAgW3g6IHN0cmluZ106IHN0cmluZ3xudWxsO1xuXG4gICAgICAgICNkYXRhICAgICA6IFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuICAgICAgICAjZGVmYXVsdHMgOiBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPjtcbiAgICAgICAgI3NldHRlciAgIDogKG5hbWU6IEF0dHJzLCB2YWx1ZTogc3RyaW5nfG51bGwpID0+IHZvaWQ7XG5cbiAgICAgICAgW0dFVF0obmFtZTogQXR0cnMpIHtcbiAgICAgICAgXHRyZXR1cm4gdGhpcy4jZGF0YVtuYW1lXSA/PyB0aGlzLiNkZWZhdWx0c1tuYW1lXSA/PyBudWxsO1xuICAgICAgICB9O1xuICAgICAgICBbU0VUXShuYW1lOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKXtcbiAgICAgICAgXHRyZXR1cm4gdGhpcy4jc2V0dGVyKG5hbWUsIHZhbHVlKTsgLy8gcmVxdWlyZWQgdG8gZ2V0IGEgY2xlYW4gb2JqZWN0IHdoZW4gZG9pbmcgey4uLmF0dHJzfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YSAgICA6IFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+LFxuXHRcdFx0XHRcdGRlZmF1bHRzOiBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPixcbiAgICAgICAgXHRcdFx0c2V0dGVyICA6IChuYW1lOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKSA9PiB2b2lkKSB7XG5cbiAgICAgICAgXHR0aGlzLiNkYXRhICAgICA9IGRhdGE7XG5cdFx0XHR0aGlzLiNkZWZhdWx0cyA9IGRlZmF1bHRzO1xuICAgICAgICBcdHRoaXMuI3NldHRlciA9IHNldHRlcjtcblxuICAgICAgICBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHByb3BlcnRpZXMpO1xuICAgICAgICB9XG5cdH1cblxuXHQvLyBAdHMtaWdub3JlIDogYmVjYXVzZSBUUyBpcyBzdHVwaWQuXG5cdGNsYXNzIExJU1NIb3N0QmFzZSBleHRlbmRzIGhvc3Qge1xuXG5cdFx0cmVhZG9ubHkgI3BhcmFtczogUGFyYW1zO1xuXG5cdFx0cmVhZG9ubHkgI2lkID0gKytpZDsgLy8gZm9yIGRlYnVnXG5cblx0XHRjb25zdHJ1Y3RvcihwYXJhbXM6IFBhcnRpYWw8UGFyYW1zPiA9IHt9KSB7XG5cdFx0XHRzdXBlcigpO1xuXHRcdFx0dGhpcy4jcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgTGlzcy5QYXJhbWV0ZXJzLnBhcmFtcywgX3BhcmFtcywgcGFyYW1zKTtcblxuXHRcdFx0dGhpcy4jd2FpdEluaXQgPSBuZXcgUHJvbWlzZSggKHJlc29sdmUpID0+IHtcblx0XHRcdFx0aWYodGhpcy5pc0luaXQpXG5cdFx0XHRcdFx0cmV0dXJuIHJlc29sdmUodGhpcy4jQVBJISk7XG5cdFx0XHRcdHRoaXMuI3Jlc29sdmUgPSByZXNvbHZlO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqKiogcHVibGljIEFQSSAqKioqKioqKioqKioqL1xuXG5cdFx0Z2V0IGlzSW5pdCgpIHtcblx0XHRcdHJldHVybiB0aGlzLiNBUEkgIT09IG51bGw7XG5cdFx0fVxuXHRcdGluaXRpYWxpemUocGFyYW1zOiBQYXJ0aWFsPFBhcmFtcz4gPSB7fSkge1xuXG5cdFx0XHRpZiggdGhpcy5pc0luaXQgKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0VsZW1lbnQgYWxyZWFkeSBpbml0aWFsaXplZCEnKTtcblxuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLiNwYXJhbXMsIHBhcmFtcyk7XG5cblx0XHRcdGNvbnN0IGFwaSA9IHRoaXMuaW5pdCgpO1xuXG5cdFx0XHRpZiggdGhpcy4jaXNJbkRPTSApXG5cdFx0XHRcdChhcGkgYXMgYW55KS5vbkRPTUNvbm5lY3RlZCgpO1xuXG5cdFx0XHRyZXR1cm4gYXBpO1xuXHRcdH1cblxuXHRcdGdldCBMSVNTU3luYygpIHtcblx0XHRcdGlmKCAhIHRoaXMuaXNJbml0IClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdBY2Nlc3NpbmcgQVBJIGJlZm9yZSBXZWJDb21wb25lbnQgaW5pdGlhbGl6YXRpb24hJyk7XG5cdFx0XHRyZXR1cm4gdGhpcy4jQVBJITtcblx0XHR9XG5cdFx0Z2V0IExJU1MoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4jd2FpdEluaXQ7XG5cdFx0fVxuXG5cdFx0LyoqKiBpbml0ICoqKi9cblx0XHQjd2FpdEluaXQ6IFByb21pc2U8SW5zdGFuY2VUeXBlPFQ+Pjtcblx0XHQjcmVzb2x2ZTogKCh1OiBJbnN0YW5jZVR5cGU8VD4pID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG5cdFx0I0FQSTogSW5zdGFuY2VUeXBlPFQ+IHwgbnVsbCA9IG51bGw7XG5cblx0XHQjaXNJbkRPTSA9IGZhbHNlO1xuXHRcdGdldCBpc0luRE9NKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuI2lzSW5ET007XG5cdFx0fVxuXG5cdFx0ZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0XHR0aGlzLiNpc0luRE9NID0gZmFsc2U7XG5cdFx0XHQodGhpcy4jQVBJISBhcyBhbnkpLm9uRE9NRGlzY29ubmVjdGVkKCk7XG5cdFx0fVxuXG5cdFx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cblx0XHRcdHRoaXMuI2lzSW5ET00gPSB0cnVlO1xuXHRcblx0XHRcdGlmKCAhIHRoaXMuaXNJbml0ICkge1xuXHRcdFx0XHR0aGlzLmluaXQoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQodGhpcy4jQVBJISBhcyBhbnkpLm9uRE9NQ29ubmVjdGVkKCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBpbml0KCkge1xuXHRcdFx0XG5cdFx0XHRjdXN0b21FbGVtZW50cy51cGdyYWRlKHRoaXMpO1xuXHRcdFx0XG5cdFx0XHQvLyBzaGFkb3dcblx0XHRcdHRoaXMuI2NvbnRlbnQgPSB0aGlzIGFzIHVua25vd24gYXMgSG9zdDtcblx0XHRcdGlmKCBzaGFkb3cgIT09ICdub25lJykge1xuXHRcdFx0XHR0aGlzLiNjb250ZW50ID0gdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6IHNoYWRvd30pO1xuXG5cdFx0XHRcdC8vQHRzLWlnbm9yZVxuXHRcdFx0XHR0aGlzLiNjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGlja0V2ZW50KTtcblx0XHRcdFx0Ly9AdHMtaWdub3JlXG5cdFx0XHRcdHRoaXMuI2NvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBvbkNsaWNrRXZlbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBhdHRyc1xuXHRcdFx0Zm9yKGxldCBvYnMgb2YgYXR0cmlidXRlcyEpXG5cdFx0XHRcdHRoaXMuI2F0dHJpYnV0ZXNbb2JzXSA9IHRoaXMuZ2V0QXR0cmlidXRlKG9icyk7XG5cblx0XHRcdC8vIGNzc1xuXHRcdFx0aWYoIHNoYWRvdyAhPT0gJ25vbmUnKVxuXHRcdFx0XHQodGhpcy4jY29udGVudCBhcyBTaGFkb3dSb290KS5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChzaGFyZWRDU1MpO1xuXHRcdFx0aWYoIHN0eWxlc2hlZXRzLmxlbmd0aCApIHtcblxuXHRcdFx0XHRpZiggc2hhZG93ICE9PSAnbm9uZScpXG5cdFx0XHRcdFx0KHRoaXMuI2NvbnRlbnQgYXMgU2hhZG93Um9vdCkuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goLi4uc3R5bGVzaGVldHMpO1xuXHRcdFx0XHRlbHNlIHtcblxuXHRcdFx0XHRcdGNvbnN0IGNzc3NlbGVjdG9yID0gdGhpcy5DU1NTZWxlY3RvcjtcblxuXHRcdFx0XHRcdC8vIGlmIG5vdCB5ZXQgaW5zZXJ0ZWQgOlxuXHRcdFx0XHRcdGlmKCAhIGFscmVhZHlEZWNsYXJlZENTUy5oYXMoY3Nzc2VsZWN0b3IpICkge1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRsZXQgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG5cdFx0XHRcdFx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNzc3NlbGVjdG9yKTtcblxuXHRcdFx0XHRcdFx0bGV0IGh0bWxfc3R5bGVzaGVldHMgPSBcIlwiO1xuXG5cdFx0XHRcdFx0XHRmb3IobGV0IHN0eWxlIG9mIHN0eWxlc2hlZXRzKVxuXHRcdFx0XHRcdFx0XHRmb3IobGV0IHJ1bGUgb2Ygc3R5bGUuY3NzUnVsZXMpXG5cdFx0XHRcdFx0XHRcdFx0aHRtbF9zdHlsZXNoZWV0cyArPSBydWxlLmNzc1RleHQgKyAnXFxuJztcblxuXHRcdFx0XHRcdFx0c3R5bGUuaW5uZXJIVE1MID0gaHRtbF9zdHlsZXNoZWV0cy5yZXBsYWNlKCc6aG9zdCcsIGA6aXMoJHtjc3NzZWxlY3Rvcn0pYCk7XG5cblx0XHRcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kKHN0eWxlKTtcblxuXHRcdFx0XHRcdFx0YWxyZWFkeURlY2xhcmVkQ1NTLmFkZChjc3NzZWxlY3Rvcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNvbnRlbnRcblx0XHRcdGlmKCBjb250ZW50ICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdGxldCB0ZW1wbGF0ZV9lbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblx0XHRcdFx0bGV0IHN0ciA9IChjb250ZW50IGFzIHN0cmluZykucmVwbGFjZSgvXFwkXFx7KC4rPylcXH0vZywgKF8sIG1hdGNoKSA9PiB0aGlzLmdldEF0dHJpYnV0ZShtYXRjaCk/PycnKVxuXHQgICAgXHRcdHRlbXBsYXRlX2VsZW0uaW5uZXJIVE1MID0gc3RyO1xuXHQgICAgXHRcdHRoaXMuI2NvbnRlbnQuYXBwZW5kKC4uLnRlbXBsYXRlX2VsZW0uY29udGVudC5jaGlsZE5vZGVzKTtcblx0ICAgIFx0fVxuXG5cdCAgICBcdC8vIGJ1aWxkXG5cblx0ICAgIFx0Ly8gaDRjaywgb2theSBiZWNhdXNlIEpTIGlzIG1vbm90aHJlYWRlZC5cblx0XHRcdF9fY3N0cl9ob3N0ICAgPSB0aGlzO1xuXG5cdCAgICBcdGxldCBvYmogPSBuZXcgTGlzcygpO1xuXG5cdCAgICBcdC8qaWYoIG9iaiBpbnN0YW5jZW9mIFByb21pc2UpXG5cdCAgICBcdFx0b2JqID0gYXdhaXQgb2JqOyovXG5cblx0XHRcdHRoaXMuI0FQSSA9IG9iaiBhcyBJbnN0YW5jZVR5cGU8VD47XG5cblx0XHRcdC8vIGRlZmF1bHQgc2xvdFxuXHRcdFx0aWYoIHRoaXMuaGFzU2hhZG93ICYmIHRoaXMuI2NvbnRlbnQuY2hpbGROb2Rlcy5sZW5ndGggPT09IDAgKVxuXHRcdFx0XHR0aGlzLiNjb250ZW50LmFwcGVuZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2xvdCcpICk7XG5cblx0XHRcdGlmKCB0aGlzLiNyZXNvbHZlICE9PSBudWxsKVxuXHRcdFx0XHR0aGlzLiNyZXNvbHZlKHRoaXMuI0FQSSk7XG5cblx0XHRcdHJldHVybiB0aGlzLiNBUEk7XG5cdFx0fVxuXG5cdFx0Z2V0IHBhcmFtcygpOiBQYXJhbXMge1xuXHRcdFx0cmV0dXJuIHRoaXMuI3BhcmFtcztcblx0XHR9XG5cblxuXHRcdC8qKiogY29udGVudCAqKiovXG5cdFx0I2NvbnRlbnQ6IEhvc3R8U2hhZG93Um9vdHxudWxsID0gbnVsbDtcblxuXHRcdGdldCBjb250ZW50KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuI2NvbnRlbnQ7XG5cdFx0fVxuXG5cdFx0Z2V0UGFydChuYW1lOiBzdHJpbmcpIHtcblx0XHRcdHJldHVybiB0aGlzLmhhc1NoYWRvd1xuXHRcdFx0XHRcdD8gdGhpcy4jY29udGVudD8ucXVlcnlTZWxlY3RvcihgOjpwYXJ0KCR7bmFtZX0pYClcblx0XHRcdFx0XHQ6IHRoaXMuI2NvbnRlbnQ/LnF1ZXJ5U2VsZWN0b3IoYFtwYXJ0PVwiJHtuYW1lfVwiXWApO1xuXHRcdH1cblx0XHRnZXRQYXJ0cyhuYW1lOiBzdHJpbmcpIHtcblx0XHRcdHJldHVybiB0aGlzLmhhc1NoYWRvd1xuXHRcdFx0XHRcdD8gdGhpcy4jY29udGVudD8ucXVlcnlTZWxlY3RvckFsbChgOjpwYXJ0KCR7bmFtZX0pYClcblx0XHRcdFx0XHQ6IHRoaXMuI2NvbnRlbnQ/LnF1ZXJ5U2VsZWN0b3JBbGwoYFtwYXJ0PVwiJHtuYW1lfVwiXWApO1xuXHRcdH1cblxuXHRcdHByb3RlY3RlZCBnZXQgaGFzU2hhZG93KCk6IGJvb2xlYW4ge1xuXHRcdFx0cmV0dXJuIHNoYWRvdyAhPT0gJ25vbmUnO1xuXHRcdH1cblxuXHRcdC8qKiogQ1NTICoqKi9cblxuXHRcdGdldCBDU1NTZWxlY3RvcigpIHtcblx0XHRcdHJldHVybiB0aGlzLmhhc1NoYWRvd1xuXHRcdFx0XHRcdD8gdGhpcy50YWdOYW1lXG5cdFx0XHRcdFx0OiBgJHt0aGlzLnRhZ05hbWV9W2lzPVwiJHt0aGlzLmdldEF0dHJpYnV0ZShcImlzXCIpfVwiXWA7XG5cdFx0fVxuXG5cdFx0LyoqKiBhdHRycyAqKiovXG5cdFx0I2F0dHJzX2ZsYWcgPSBmYWxzZTtcblxuXHRcdCNhdHRyaWJ1dGVzICAgICAgICAgPSB7fSBhcyBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPjtcblx0XHQjYXR0cmlidXRlc0RlZmF1bHRzID0ge30gYXMgUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD47XG5cdFx0I2F0dHJzID0gbmV3IEF0dHJpYnV0ZXMoXG5cdFx0XHR0aGlzLiNhdHRyaWJ1dGVzLFxuXHRcdFx0dGhpcy4jYXR0cmlidXRlc0RlZmF1bHRzLFxuXHRcdFx0KG5hbWU6IEF0dHJzLCB2YWx1ZTpzdHJpbmd8bnVsbCkgPT4ge1xuXG5cdFx0XHRcdHRoaXMuI2F0dHJpYnV0ZXNbbmFtZV0gPSB2YWx1ZTtcblxuXHRcdFx0XHR0aGlzLiNhdHRyc19mbGFnID0gdHJ1ZTsgLy8gZG8gbm90IHRyaWdnZXIgb25BdHRyc0NoYW5nZWQuXG5cdFx0XHRcdGlmKCB2YWx1ZSA9PT0gbnVsbClcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0XHRcdH1cblx0XHQpIGFzIHVua25vd24gYXMgUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD47XG5cblx0XHRzZXRBdHRyRGVmYXVsdChuYW1lOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKSB7XG5cdFx0XHRpZiggdmFsdWUgPT09IG51bGwpXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLiNhdHRyaWJ1dGVzRGVmYXVsdHNbbmFtZV07XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHRoaXMuI2F0dHJpYnV0ZXNEZWZhdWx0c1tuYW1lXSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdGdldCBhdHRycygpOiBSZWFkb25seTxSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPj4ge1xuXG5cdFx0XHRyZXR1cm4gdGhpcy4jYXR0cnM7XG5cdFx0fVxuXG5cdFx0c3RhdGljIG9ic2VydmVkQXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG5cdFx0YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUgICAgOiBBdHRycyxcblx0XHRcdFx0XHRcdFx0XHQgb2xkVmFsdWU6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0XHQgbmV3VmFsdWU6IHN0cmluZykge1xuXG5cdFx0XHRpZih0aGlzLiNhdHRyc19mbGFnKSB7XG5cdFx0XHRcdHRoaXMuI2F0dHJzX2ZsYWcgPSBmYWxzZTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLiNhdHRyaWJ1dGVzW25hbWVdID0gbmV3VmFsdWU7XG5cdFx0XHRpZiggISB0aGlzLmlzSW5pdCApXG5cdFx0XHRcdHJldHVybjtcblxuXHRcdFx0aWYoICh0aGlzLiNBUEkhIGFzIGFueSkub25BdHRyQ2hhbmdlZChuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpID09PSBmYWxzZSkge1xuXHRcdFx0XHR0aGlzLiNhdHRyc1tuYW1lXSA9IG9sZFZhbHVlOyAvLyByZXZlcnQgdGhlIGNoYW5nZS5cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIExJU1NIb3N0QmFzZTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBkZWZpbmUgPT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBfRE9NQ29udGVudExvYWRlZCA9IG5ldyBQcm9taXNlPHZvaWQ+KCAocmVzb2x2ZSkgPT4ge1xuXG5cdGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiaW50ZXJhY3RpdmVcIiB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpXG5cdFx0cmV0dXJuIHJlc29sdmUoKTtcblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXHRcdHJlc29sdmUoKTtcblx0fSwgdHJ1ZSk7XG59KTtcblxuTElTUy5kZWZpbmUgPSBhc3luYyBmdW5jdGlvbjxFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdFx0XHRcdFx0XHRcdCBIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0XHQgICAgIEF0dHJzICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0XHQgICAgIFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4sXG5cdFx0XHRcdFx0XHQgICBcdCBUIGV4dGVuZHMgTElTU1JldHVyblR5cGU8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcz4+KFxuXHRcdFx0XHRcdFx0ICAgXHR0YWduYW1lOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdENvbXBvbmVudENsYXNzOiBULFxuXHRcdFx0XHRcdFx0XHR7ZGVwZW5kZW5jaWVzLCBwYXJhbXN9OiB7cGFyYW1zPzogUGFydGlhbDxQYXJhbXM+LCBkZXBlbmRlbmNpZXM/OiByZWFkb25seSBQcm9taXNlPHN0cmluZz5bXX0gPSB7fSkge1xuXG5cdGRlcGVuZGVuY2llcz8/PVtdO1xuXHRwYXJhbXMgICAgICA/Pz0ge307XG5cblx0Y29uc3QgQ2xhc3MgPSBDb21wb25lbnRDbGFzcy5QYXJhbWV0ZXJzLmhvc3Q7XG5cdGxldCBMSVNTQmFzZTogYW55ID0gQ29tcG9uZW50Q2xhc3M7XG5cdGxldCBodG1sdGFnID0gX2VsZW1lbnQydGFnbmFtZShDbGFzcyk/P3VuZGVmaW5lZDtcblxuXHRhd2FpdCBQcm9taXNlLmFsbChbX0RPTUNvbnRlbnRMb2FkZWQsIC4uLmRlcGVuZGVuY2llcywgLi4uTElTU0Jhc2UuUGFyYW1ldGVycy5kZXBlbmRlbmNpZXNdKTtcblxuXHRjb25zdCBMSVNTY2xhc3MgPSBidWlsZExJU1NIb3N0PEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXMsIFQ+KENvbXBvbmVudENsYXNzLCBwYXJhbXMpO1xuXHRcblx0Y29uc3Qgb3B0cyA9IGh0bWx0YWcgPT09IHVuZGVmaW5lZCA/IHt9XG5cdFx0XHRcdFx0XHRcdFx0XHQgICA6IHtleHRlbmRzOiBodG1sdGFnfTtcblx0XG5cdGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWduYW1lLCBMSVNTY2xhc3MsIG9wdHMpO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBTaGFkb3dSb290IHRvb2xzID09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBzaGFyZWRDU1MgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc2hhcmVkQ1NTKTtcblxuTElTUy5pbnNlcnRHbG9iYWxDU1NSdWxlcyA9IGZ1bmN0aW9uKGNzczogc3RyaW5nfEhUTUxTdHlsZUVsZW1lbnQpIHtcblxuXHRsZXQgY3NzX3N0eWxlITogQ1NTU3R5bGVTaGVldDtcblxuXHRpZiggY3NzIGluc3RhbmNlb2YgSFRNTFN0eWxlRWxlbWVudCApXG5cdFx0Y3NzX3N0eWxlID0gY3NzLnNoZWV0ITtcblx0aWYoIHR5cGVvZiBjc3MgPT09IFwic3RyaW5nXCIpIHtcblx0XHRjc3Nfc3R5bGUgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuXHRcdGNzc19zdHlsZS5yZXBsYWNlU3luYyhjc3MpO1xuXHR9XG5cblx0Zm9yKGxldCBydWxlIG9mIGNzc19zdHlsZS5jc3NSdWxlcylcblx0XHRzaGFyZWRDU1MuaW5zZXJ0UnVsZShydWxlLmNzc1RleHQpO1xufVxuXG50eXBlIERlbGVnYXRlZEhhbmRsZXIgPSBbc3RyaW5nLCAoZXY6IE1vdXNlRXZlbnQpID0+IHZvaWRdO1xuY29uc3QgREVMRUdBVEVEX0VWRU5UUyA9IHtcblx0XCJjbGlja1wiOiBbXSBhcyBEZWxlZ2F0ZWRIYW5kbGVyW10sXG5cdFwiZGJsY2xpY2tcIjogW10gYXMgRGVsZWdhdGVkSGFuZGxlcltdXG59O1xuXG5jb25zdCBBTFJFQURZX1BST0NFU1NFRCA9IFN5bWJvbCgpO1xuXG5mdW5jdGlvbiBvbkNsaWNrRXZlbnQoZXY6IE1vdXNlRXZlbnQpIHtcblxuXHRpZiggKGV2IGFzIGFueSlbQUxSRUFEWV9QUk9DRVNTRURdID09PSB0cnVlIClcblx0XHRyZXR1cm47XG5cdChldiBhcyBhbnkpW0FMUkVBRFlfUFJPQ0VTU0VEXSA9IHRydWU7XG5cblx0Y29uc3QgaGFuZGxlcnMgPSBERUxFR0FURURfRVZFTlRTW2V2LnR5cGUgYXMga2V5b2YgdHlwZW9mIERFTEVHQVRFRF9FVkVOVFNdO1xuXG5cdGZvcihsZXQgZWxlbSBvZiBldi5jb21wb3NlZFBhdGgoKSApIHtcblx0XG5cdFx0aWYoIGVsZW0gaW5zdGFuY2VvZiBTaGFkb3dSb290IHx8IGVsZW0gPT09IGRvY3VtZW50IHx8IGVsZW0gPT09IHdpbmRvdyApXG5cdFx0XHRjb250aW51ZTtcblxuXHRcdHZhciB0YXJnZXQgPSBlbGVtIGFzIEVsZW1lbnQ7XG5cblx0XHRmb3IobGV0IFtzZWxlY3RvciwgaGFuZGxlcl0gb2YgaGFuZGxlcnMpIHtcblx0XHRcdGlmKCB0YXJnZXQubWF0Y2hlcyhzZWxlY3RvcikgKVxuXHRcdFx0XHRoYW5kbGVyKGV2KTtcblx0XHR9XG5cdH1cbn1cblxuTElTUy5pbnNlcnRHbG9iYWxEZWxlZ2F0ZWRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50X25hbWU6IGtleW9mIHR5cGVvZiBERUxFR0FURURfRVZFTlRTLCBzZWxlY3Rvcjogc3RyaW5nLCBoYW5kbGVyOiAoZXY6IE1vdXNlRXZlbnQpID0+IHZvaWQgKSB7XG5cdERFTEVHQVRFRF9FVkVOVFNbZXZlbnRfbmFtZV0ucHVzaChbc2VsZWN0b3IsIGhhbmRsZXJdKVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tFdmVudCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIG9uQ2xpY2tFdmVudCk7XG5cbkxJU1MuY2xvc2VzdCA9IGZ1bmN0aW9uIGNsb3Nlc3Q8RSBleHRlbmRzIEVsZW1lbnQ+KHNlbGVjdG9yOiBzdHJpbmcsIGVsZW1lbnQ6IEVsZW1lbnQpIHtcblxuXHR3aGlsZSh0cnVlKSB7XG5cdFx0dmFyIHJlc3VsdCA9IGVsZW1lbnQuY2xvc2VzdDxFPihzZWxlY3Rvcik7XG5cblx0XHRpZiggcmVzdWx0ICE9PSBudWxsKVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblxuXHRcdGNvbnN0IHJvb3QgPSBlbGVtZW50LmdldFJvb3ROb2RlKCk7XG5cdFx0aWYoICEgKFwiaG9zdFwiIGluIHJvb3QpIClcblx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0ZWxlbWVudCA9IChyb290IGFzIFNoYWRvd1Jvb3QpLmhvc3Q7XG5cdH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBoZWxwZXJzID09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIGluZmVyUGFyYW1zPFQ+ID0gVCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LCBpbmZlciBQIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+PiA/IFAgOiBuZXZlcjtcblxudHlwZSBCVUlMRF9PUFRJT05TPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PiA9IFBhcnRpYWw8e1xuXHRcdFx0XHRcdCAgXHRwYXJhbXMgICAgOiBQYXJ0aWFsPGluZmVyUGFyYW1zPFQ+Pixcblx0XHRcdFx0XHQgIFx0Y29udGVudFx0ICA6IHN0cmluZ3xOb2RlfHJlYWRvbmx5IE5vZGVbXSxcblx0XHRcdFx0XHRcdGlkIFx0XHQgIDogc3RyaW5nLFxuXHRcdFx0XHRcdCAgXHRjbGFzc2VzXHQgIDogcmVhZG9ubHkgc3RyaW5nW10sXG5cdFx0XHRcdFx0ICBcdGNzc3ZhcnMgICA6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIHN0cmluZz4+LFxuXHRcdFx0XHRcdCAgXHRhdHRycyBcdCAgOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmd8Ym9vbGVhbj4+LFxuXHRcdFx0XHRcdCAgXHRkYXRhIFx0ICA6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIHN0cmluZ3xib29sZWFuPj4sXG5cdFx0XHRcdFx0ICBcdGxpc3RlbmVycyA6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIChldjogRXZlbnQpID0+IHZvaWQ+PlxuXHRcdFx0XHRcdH0+ICYgKHtcblx0XHRcdFx0XHRcdGluaXRpYWxpemU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0cGFyZW50OiBFbGVtZW50XG5cdFx0XHRcdFx0fXx7XG5cdFx0XHRcdFx0XHRpbml0aWFsaXplPzogdHJ1ZSxcblx0XHRcdFx0XHRcdHBhcmVudD86IEVsZW1lbnRcblx0XHRcdFx0XHR9KTtcblxuYXN5bmMgZnVuY3Rpb24gYnVpbGQ8VCBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHRhZ25hbWU6IFQsIG9wdGlvbnM/OiBCVUlMRF9PUFRJT05TPENvbXBvbmVudHNbVF0+KTogUHJvbWlzZTxDb21wb25lbnRzW1RdPjtcbmFzeW5jIGZ1bmN0aW9uIGJ1aWxkPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+Pih0YWduYW1lOiBzdHJpbmcsIG9wdGlvbnM/OiBCVUlMRF9PUFRJT05TPFQ+KTogUHJvbWlzZTxUPjtcbmFzeW5jIGZ1bmN0aW9uIGJ1aWxkPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+Pih0YWduYW1lOiBzdHJpbmcsIHtcblx0XHRwYXJhbXMgICAgPSB7fSxcblx0XHRpbml0aWFsaXplPSB0cnVlLFxuXHRcdGNvbnRlbnQgICA9IFtdLFxuXHRcdHBhcmVudCAgICA9IHVuZGVmaW5lZCxcblx0XHRpZCBcdFx0ICA9IHVuZGVmaW5lZCxcblx0XHRjbGFzc2VzICAgPSBbXSxcblx0XHRjc3N2YXJzICAgPSB7fSxcblx0XHRhdHRycyAgICAgPSB7fSxcblx0XHRkYXRhIFx0ICA9IHt9LFxuXHRcdGxpc3RlbmVycyA9IHt9XG5cdH06IEJVSUxEX09QVElPTlM8VD4gPSB7fSk6IFByb21pc2U8VD4ge1xuXG5cdGlmKCAhIGluaXRpYWxpemUgJiYgcGFyZW50ID09PSBudWxsKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIkEgcGFyZW50IG11c3QgYmUgZ2l2ZW4gaWYgaW5pdGlhbGl6ZSBpcyBmYWxzZVwiKTtcblxuXHRsZXQgQ3VzdG9tQ2xhc3MgPSBhd2FpdCBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCh0YWduYW1lKTtcblx0bGV0IGVsZW0gPSBuZXcgQ3VzdG9tQ2xhc3MocGFyYW1zKSBhcyBMSVNTSG9zdDxUPjtcblxuXHQvLyBGaXggaXNzdWUgIzJcblx0aWYoIGVsZW0udGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSB0YWduYW1lIClcblx0XHRlbGVtLnNldEF0dHJpYnV0ZShcImlzXCIsIHRhZ25hbWUpO1xuXG5cdGlmKCBpZCAhPT0gdW5kZWZpbmVkIClcblx0XHRlbGVtLmlkID0gaWQ7XG5cblx0aWYoIGNsYXNzZXMubGVuZ3RoID4gMClcblx0XHRlbGVtLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG5cblx0Zm9yKGxldCBuYW1lIGluIGNzc3ZhcnMpXG5cdFx0ZWxlbS5zdHlsZS5zZXRQcm9wZXJ0eShgLS0ke25hbWV9YCwgY3NzdmFyc1tuYW1lXSk7XG5cblx0Zm9yKGxldCBuYW1lIGluIGF0dHJzKSB7XG5cblx0XHRsZXQgdmFsdWUgPSBhdHRyc1tuYW1lXTtcblx0XHRpZiggdHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIilcblx0XHRcdGVsZW0udG9nZ2xlQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0XHRlbHNlXG5cdFx0XHRlbGVtLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdH1cblxuXHRmb3IobGV0IG5hbWUgaW4gZGF0YSkge1xuXG5cdFx0bGV0IHZhbHVlID0gZGF0YVtuYW1lXTtcblx0XHRpZiggdmFsdWUgPT09IGZhbHNlKVxuXHRcdFx0ZGVsZXRlIGVsZW0uZGF0YXNldFtuYW1lXTtcblx0XHRlbHNlIGlmKHZhbHVlID09PSB0cnVlKVxuXHRcdFx0ZWxlbS5kYXRhc2V0W25hbWVdID0gXCJcIjtcblx0XHRlbHNlXG5cdFx0XHRlbGVtLmRhdGFzZXRbbmFtZV0gPSB2YWx1ZTtcblx0fVxuXG5cdGlmKCAhIEFycmF5LmlzQXJyYXkoY29udGVudCkgKVxuXHRcdGNvbnRlbnQgPSBbY29udGVudCBhcyBhbnldO1xuXHRlbGVtLnJlcGxhY2VDaGlsZHJlbiguLi5jb250ZW50KTtcblxuXHRmb3IobGV0IG5hbWUgaW4gbGlzdGVuZXJzKVxuXHRcdGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBsaXN0ZW5lcnNbbmFtZV0pO1xuXG5cdGlmKCBwYXJlbnQgIT09IHVuZGVmaW5lZCApXG5cdFx0cGFyZW50LmFwcGVuZChlbGVtKTtcblxuXHRpZiggISBlbGVtLmlzSW5pdCAmJiBpbml0aWFsaXplIClcblx0XHRyZXR1cm4gYXdhaXQgTElTUy5pbml0aWFsaXplKGVsZW0pO1xuXG5cdHJldHVybiBhd2FpdCBMSVNTLmdldExJU1MoZWxlbSk7XG59XG5MSVNTLmJ1aWxkID0gYnVpbGQ7XG5cblxuTElTUy53aGVuRGVmaW5lZCAgICA9IGFzeW5jIGZ1bmN0aW9uKHRhZ25hbWU6IHN0cmluZywgY2FsbGJhY2s/OiAoKSA9PiB2b2lkICkgOiBQcm9taXNlPHZvaWQ+IHtcblxuXHRhd2FpdCBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCh0YWduYW1lKTtcblxuXHRpZiggY2FsbGJhY2sgIT09IHVuZGVmaW5lZClcblx0XHRjYWxsYmFjaygpO1xuXG5cdHJldHVybjtcbn1cbkxJU1Mud2hlbkFsbERlZmluZWQgPSBhc3luYyBmdW5jdGlvbih0YWduYW1lczogcmVhZG9ubHkgc3RyaW5nW10sIGNhbGxiYWNrPzogKCkgPT4gdm9pZCApIDogUHJvbWlzZTx2b2lkPiB7XG5cblx0YXdhaXQgUHJvbWlzZS5hbGwoIHRhZ25hbWVzLm1hcCggdCA9PiBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCh0KSApIClcblxuXHRpZiggY2FsbGJhY2sgIT09IHVuZGVmaW5lZClcblx0XHRjYWxsYmFjaygpO1xuXG59XG5cbkxJU1MuaXNEZWZpbmVkID0gZnVuY3Rpb24obmFtZTogc3RyaW5nKSB7XG5cdHJldHVybiBjdXN0b21FbGVtZW50cy5nZXQobmFtZSk7XG59XG5cbkxJU1Muc2VsZWN0b3IgPSBmdW5jdGlvbihuYW1lPzogc3RyaW5nKSB7XG5cdGlmKG5hbWUgPT09IHVuZGVmaW5lZCkgLy8ganVzdCBhbiBoNGNrXG5cdFx0cmV0dXJuIFwiXCI7XG5cdHJldHVybiBgOmlzKCR7bmFtZX0sIFtpcz1cIiR7bmFtZX1cIl0pYDtcbn1cblxuTElTUy5nZXRMSVNTICAgID0gYXN5bmMgZnVuY3Rpb248VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KCBlbGVtZW50OiBFbGVtZW50ICkge1xuXG5cdGF3YWl0IExJU1Mud2hlbkRlZmluZWQoIExJU1MuZ2V0TmFtZShlbGVtZW50KSApO1xuXG5cdHJldHVybiAoZWxlbWVudCBhcyBMSVNTSG9zdDxUPikuTElTUzsgLy8gZW5zdXJlIGluaXRpYWxpemVkLlxufVxuTElTUy5nZXRMSVNTU3luYz0gZnVuY3Rpb248VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KCBlbGVtZW50OiBFbGVtZW50ICkge1xuXG5cdGlmKCAhIExJU1MuaXNEZWZpbmVkKCBMSVNTLmdldE5hbWUoZWxlbWVudCkgKSApXG5cdFx0dGhyb3cgbmV3IEVycm9yKGAke25hbWV9IGhhc24ndCBiZWVuIGRlZmluZWQgeWV0LmApO1xuXG5cdGxldCBob3N0ID0gZWxlbWVudCBhcyBMSVNTSG9zdDxUPjtcblxuXHRpZiggISBob3N0LmlzSW5pdCApXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW5zdGFuY2UgaGFzbid0IGJlZW4gaW5pdGlhbGl6ZWQgeWV0LlwiKTtcblxuXHRyZXR1cm4gaG9zdC5MSVNTU3luYztcbn1cbkxJU1MuaW5pdGlhbGl6ZSA9IGFzeW5jIGZ1bmN0aW9uPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PiggZWxlbWVudDogRWxlbWVudCkge1xuXG5cdGF3YWl0IExJU1Mud2hlbkRlZmluZWQoIExJU1MuZ2V0TmFtZShlbGVtZW50KSApO1xuXG5cdHJldHVybiBhd2FpdCAoZWxlbWVudCBhcyBMSVNTSG9zdDxUPikuaW5pdGlhbGl6ZSgpOyAvLyBlbnN1cmUgaW5pdGlhbGl6YXRpb24uXG59XG5cbkxJU1MuZ2V0TmFtZSA9IGZ1bmN0aW9uKCBlbGVtZW50OiBFbGVtZW50ICk6IHN0cmluZyB7XG5cblx0Y29uc3QgbmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpcycpID8/IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcblx0aWYoICEgbmFtZS5pbmNsdWRlcygnLScpIClcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEVsZW1lbnQgJHtuYW1lfSBpcyBub3QgYSBXZWJDb21wb25lbnRgKTtcblxuXHRyZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gX2J1aWxkUVMoc2VsZWN0b3I6IHN0cmluZywgdGFnbmFtZV9vcl9wYXJlbnQ/OiBzdHJpbmcgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsIHBhcmVudDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblx0XG5cdGlmKCB0YWduYW1lX29yX3BhcmVudCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB0YWduYW1lX29yX3BhcmVudCAhPT0gJ3N0cmluZycpIHtcblx0XHRwYXJlbnQgPSB0YWduYW1lX29yX3BhcmVudDtcblx0XHR0YWduYW1lX29yX3BhcmVudCA9IHVuZGVmaW5lZDtcblx0fVxuXG5cdHJldHVybiBbYCR7c2VsZWN0b3J9JHtMSVNTLnNlbGVjdG9yKHRhZ25hbWVfb3JfcGFyZW50IGFzIHN0cmluZ3x1bmRlZmluZWQpfWAsIHBhcmVudF0gYXMgY29uc3Q7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgUXVlcnlTZWxlY3RvcnMgPT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYXN5bmMgZnVuY3Rpb24gcXM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8VD47XG5hc3luYyBmdW5jdGlvbiBxczxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTwgQ29tcG9uZW50c1tOXSA+O1xuYXN5bmMgZnVuY3Rpb24gcXM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRsZXQgcmVzdWx0ID0gYXdhaXQgTElTUy5xc288VD4oc2VsZWN0b3IsIHBhcmVudCk7XG5cdGlmKHJlc3VsdCA9PT0gbnVsbClcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEVsZW1lbnQgJHtzZWxlY3Rvcn0gbm90IGZvdW5kYCk7XG5cblx0cmV0dXJuIHJlc3VsdCFcbn1cbkxJU1MucXMgID0gcXNcblxuYXN5bmMgZnVuY3Rpb24gcXNvPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPFQ+O1xuYXN5bmMgZnVuY3Rpb24gcXNvPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPCBDb21wb25lbnRzW05dID47XG5hc3luYyBmdW5jdGlvbiBxc288VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRjb25zdCBlbGVtZW50ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3I8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblx0aWYoIGVsZW1lbnQgPT09IG51bGwgKVxuXHRcdHJldHVybiBudWxsO1xuXG5cdHJldHVybiBhd2FpdCBMSVNTLmdldExJU1MoIGVsZW1lbnQgKTtcbn1cbkxJU1MucXNvID0gcXNvXG5cbmFzeW5jIGZ1bmN0aW9uIHFzYTxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTxUW10+O1xuYXN5bmMgZnVuY3Rpb24gcXNhPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPCBDb21wb25lbnRzW05dW10gPjtcbmFzeW5jIGZ1bmN0aW9uIHFzYTxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LFxuXHRcdFx0XHRcdFx0cGFyZW50ICA6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cblx0W3NlbGVjdG9yLCBwYXJlbnRdID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBwYXJlbnQpO1xuXG5cdGNvbnN0IGVsZW1lbnRzID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGw8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblxuXHRsZXQgaWR4ID0gMDtcblx0Y29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxUPj4oIGVsZW1lbnRzLmxlbmd0aCApO1xuXHRmb3IobGV0IGVsZW1lbnQgb2YgZWxlbWVudHMpXG5cdFx0cHJvbWlzZXNbaWR4KytdID0gTElTUy5nZXRMSVNTKCBlbGVtZW50ICk7XG5cblx0cmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbn1cbkxJU1MucXNhID0gcXNhO1xuXG5hc3luYyBmdW5jdGlvbiBxc2M8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA6IEVsZW1lbnQpOiBQcm9taXNlPFQ+O1xuYXN5bmMgZnVuY3Rpb24gcXNjPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgOiBFbGVtZW50KTogUHJvbWlzZTwgQ29tcG9uZW50c1tOXSA+O1xuYXN5bmMgZnVuY3Rpb24gcXNjPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50LFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgPzogRWxlbWVudCkge1xuXG5cdGNvbnN0IHJlcyA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgZWxlbWVudCk7XG5cdFxuXHRjb25zdCByZXN1bHQgPSAocmVzWzFdIGFzIHVua25vd24gYXMgRWxlbWVudCkuY2xvc2VzdDxMSVNTSG9zdDxUPj4ocmVzWzBdKTtcblx0aWYocmVzdWx0ID09PSBudWxsKVxuXHRcdHJldHVybiBudWxsO1xuXG5cdHJldHVybiBhd2FpdCBMSVNTLmdldExJU1MocmVzdWx0KTtcbn1cbkxJU1MucXNjID0gcXNjO1xuXG5mdW5jdGlvbiBxc1N5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFQ7XG5mdW5jdGlvbiBxc1N5bmM8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IENvbXBvbmVudHNbTl07XG5mdW5jdGlvbiBxc1N5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRjb25zdCBlbGVtZW50ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3I8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblxuXHRpZiggZWxlbWVudCA9PT0gbnVsbCApXG5cdFx0dGhyb3cgbmV3IEVycm9yKGBFbGVtZW50ICR7c2VsZWN0b3J9IG5vdCBmb3VuZGApO1xuXG5cdHJldHVybiBMSVNTLmdldExJU1NTeW5jKCBlbGVtZW50ICk7XG59XG5MSVNTLnFzU3luYyA9IHFzU3luYztcblxuZnVuY3Rpb24gcXNhU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogVFtdO1xuZnVuY3Rpb24gcXNhU3luYzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogQ29tcG9uZW50c1tOXVtdO1xuZnVuY3Rpb24gcXNhU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LFxuXHRcdFx0XHRcdFx0cGFyZW50ICA6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cblx0W3NlbGVjdG9yLCBwYXJlbnRdID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBwYXJlbnQpO1xuXG5cdGNvbnN0IGVsZW1lbnRzID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGw8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblxuXHRsZXQgaWR4ID0gMDtcblx0Y29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PFQ+KCBlbGVtZW50cy5sZW5ndGggKTtcblx0Zm9yKGxldCBlbGVtZW50IG9mIGVsZW1lbnRzKVxuXHRcdHJlc3VsdFtpZHgrK10gPSBMSVNTLmdldExJU1NTeW5jKCBlbGVtZW50ICk7XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cbkxJU1MucXNhU3luYyA9IHFzYVN5bmM7XG5cbmZ1bmN0aW9uIHFzY1N5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA6IEVsZW1lbnQpOiBUO1xuZnVuY3Rpb24gcXNjU3luYzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdGVsZW1lbnQgIDogRWxlbWVudCk6IENvbXBvbmVudHNbTl07XG5mdW5jdGlvbiBxc2NTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50LFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgPzogRWxlbWVudCkge1xuXG5cdGNvbnN0IHJlcyA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgZWxlbWVudCk7XG5cdFxuXHRjb25zdCByZXN1bHQgPSAocmVzWzFdIGFzIHVua25vd24gYXMgRWxlbWVudCkuY2xvc2VzdDxMSVNTSG9zdDxUPj4ocmVzWzBdKTtcblx0aWYocmVzdWx0ID09PSBudWxsKVxuXHRcdHJldHVybiBudWxsO1xuXG5cdHJldHVybiBMSVNTLmdldExJU1NTeW5jKHJlc3VsdCk7XG59XG5MSVNTLnFzY1N5bmMgPSBxc2NTeW5jO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIEF1dG8gPT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBjbGFzcyBMSVNTX0F1dG8gZXh0ZW5kcyBMSVNTKHthdHRyaWJ1dGVzOiBbXCJzcmNcIl19KSB7XG5cblx0cmVhZG9ubHkgI2tub3duX3RhZyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXHRyZWFkb25seSAjZGlyZWN0b3J5OiBzdHJpbmc7XG5cdHJlYWRvbmx5ICNzdzogUHJvbWlzZTx2b2lkPjtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLiNzdyA9IG5ldyBQcm9taXNlKCBhc3luYyAocmVzb2x2ZSkgPT4ge1xuXHRcdFx0XG5cdFx0XHRhd2FpdCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihgLi9zdy5qc2ApO1xuXG5cdFx0XHRpZiggbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlciApXG5cdFx0XHRcdHJlc29sdmUoKTtcblxuXHRcdFx0bmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignY29udHJvbGxlcmNoYW5nZScsICgpID0+IHtcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblxuXHRcdGNvbnN0IHNyYyA9IHRoaXMuYXR0cnMuc3JjO1xuXHRcdGlmKHNyYyA9PT0gbnVsbClcblx0XHRcdHRocm93IG5ldyBFcnJvcihcInNyYyBhdHRyaWJ1dGUgaXMgbWlzc2luZy5cIik7XG5cdFx0dGhpcy4jZGlyZWN0b3J5ID0gc3JjWzBdID09PSAnLidcblx0XHRcdFx0XHRcdFx0XHQ/IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0vJHtzcmN9YFxuXHRcdFx0XHRcdFx0XHRcdDogc3JjO1xuXG5cdFx0bmV3IE11dGF0aW9uT2JzZXJ2ZXIoIChtdXRhdGlvbnMpID0+IHtcblxuXHRcdFx0Zm9yKGxldCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpXG5cdFx0XHRcdGZvcihsZXQgYWRkaXRpb24gb2YgbXV0YXRpb24uYWRkZWROb2Rlcylcblx0XHRcdFx0XHRpZihhZGRpdGlvbiBpbnN0YW5jZW9mIEVsZW1lbnQpXG5cdFx0XHRcdFx0XHR0aGlzLiNhZGRUYWcoYWRkaXRpb24udGFnTmFtZSlcblxuXHRcdH0pLm9ic2VydmUoIGRvY3VtZW50LCB7IGNoaWxkTGlzdDp0cnVlLCBzdWJ0cmVlOnRydWUgfSk7XG5cblxuXHRcdGZvciggbGV0IGVsZW0gb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIipcIikgKVxuXHRcdFx0dGhpcy4jYWRkVGFnKGVsZW0udGFnTmFtZSk7XG5cdH1cblxuXG4gICAgcHJvdGVjdGVkIHJlc291cmNlcygpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0XCJpbmRleC5qc1wiLFxuXHRcdFx0XCJpbmRleC5odG1sXCIsXG5cdFx0XHRcImluZGV4LmNzc1wiXG5cdFx0XTtcbiAgICB9XG5cblx0cHJvdGVjdGVkIGRlZmluZVdlYkNvbXBvbmVudCh0YWduYW1lOiBzdHJpbmcsIGZpbGVzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBvcHRzOiBQYXJ0aWFsPHtjb250ZW50OiBzdHJpbmcsIGNzczogc3RyaW5nfT4pIHtcblxuXHRcdGNvbnN0IGpzID0gZmlsZXNbXCJpbmRleC5qc1wiXTtcblx0XHRjb25zdCBjb250ZW50ID0gZmlsZXNbXCJpbmRleC5odG1sXCJdO1xuXG5cdFx0bGV0IGtsYXNzOiBudWxsfCBSZXR1cm5UeXBlPHR5cGVvZiBMSVNTPiA9IG51bGw7XG5cdFx0aWYoIGpzICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0a2xhc3MgPSBqcyhvcHRzKTtcblx0XHRlbHNlIGlmKCBjb250ZW50ICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0a2xhc3MgPSBjbGFzcyBXZWJDb21wb25lbnQgZXh0ZW5kcyBMSVNTKG9wdHMpIHt9O1xuXG5cdFx0aWYoa2xhc3MgPT09IG51bGwpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgZmlsZXMgZm9yIFdlYkNvbXBvbmVudCAke3RhZ25hbWV9LmApO1xuXG5cdFx0cmV0dXJuIExJU1MuZGVmaW5lKHRhZ25hbWUsIGtsYXNzKTtcblx0fVxuXG5cdGFzeW5jICNhZGRUYWcodGFnbmFtZTogc3RyaW5nKSB7XG5cblx0XHR0YWduYW1lID0gdGFnbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0aWYoIHRhZ25hbWUgPT09ICdsaXNzLWF1dG8nIHx8IHRhZ25hbWUgPT09ICdibGlzcy1hdXRvJyB8fCAhIHRhZ25hbWUuaW5jbHVkZXMoJy0nKSB8fCB0aGlzLiNrbm93bl90YWcuaGFzKCB0YWduYW1lICkgKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0dGhpcy4ja25vd25fdGFnLmFkZCh0YWduYW1lKTtcblxuXHRcdGF3YWl0IHRoaXMuI3N3OyAvLyBlbnN1cmUgU1cgaXMgaW5zdGFsbGVkLlxuXG5cdFx0Y29uc3QgZmlsZW5hbWVzID0gdGhpcy5yZXNvdXJjZXMoKTtcblx0XHRjb25zdCByZXNvdXJjZXMgPSBhd2FpdCBQcm9taXNlLmFsbCggZmlsZW5hbWVzLm1hcCggZmlsZSA9PiBmaWxlLmVuZHNXaXRoKCcuanMnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IF9pbXBvcnQgICAoYCR7dGhpcy4jZGlyZWN0b3J5fS8ke3RhZ25hbWV9LyR7ZmlsZX1gLCB0cnVlKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IF9mZXRjaFRleHQoYCR7dGhpcy4jZGlyZWN0b3J5fS8ke3RhZ25hbWV9LyR7ZmlsZX1gLCB0cnVlKSApICk7XG5cblx0XHRjb25zdCBmaWxlczogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBmaWxlbmFtZXMubGVuZ3RoOyArK2kpXG5cdFx0XHRpZiggcmVzb3VyY2VzW2ldICE9PSB1bmRlZmluZWQpXG5cdFx0XHRcdGZpbGVzW2ZpbGVuYW1lc1tpXV0gPSByZXNvdXJjZXNbaV07XG5cblx0XHRjb25zdCBjb250ZW50ID0gZmlsZXNbXCJpbmRleC5odG1sXCJdO1xuXHRcdGNvbnN0IGNzcyAgICAgPSBmaWxlc1tcImluZGV4LmNzc1wiXTtcblxuXHRcdGNvbnN0IG9wdHM6IFBhcnRpYWw8e2NvbnRlbnQ6IHN0cmluZywgY3NzOiBzdHJpbmd9PiA9IHtcblx0XHRcdC4uLmNvbnRlbnQgIT09IHVuZGVmaW5lZCAmJiB7Y29udGVudH0sXG5cdFx0XHQuLi5jc3MgICAgICE9PSB1bmRlZmluZWQgJiYge2Nzc30sXG5cdFx0fTtcblxuXHRcdHJldHVybiB0aGlzLmRlZmluZVdlYkNvbXBvbmVudCh0YWduYW1lLCBmaWxlcywgb3B0cyk7XG5cdFx0XG5cdH1cbn1cbkxJU1MuZGVmaW5lKFwibGlzcy1hdXRvXCIsIExJU1NfQXV0byk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50cyB7XG5cdFwibGlzcy1hdXRvXCI6IExJU1NfQXV0b1xufTtcbi8qXG4gKiBkZWNsYXJlIG1vZHVsZSAnJExJU1MnIHtcbiAqIFx0XHRpbnRlcmZhY2UgQ29tcG9uZW50cyB7XG4gKiBcdFx0XHRcIm5hbWVcIjogY2xhc3NcbiAqIFx0XHR9XG4gKiB9XG4gKi9cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBFdmVudHNUYXJnZXQgPT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIENzdEV2ZW50PEV2ZW50IGV4dGVuZHMgc3RyaW5nLCBBcmdzPiA9IEN1c3RvbUV2ZW50PEFyZ3M+ICYge3R5cGU6IEV2ZW50fTtcblxuZXhwb3J0IGludGVyZmFjZSBFdmVudHNUYXJnZXQ8RXZlbnRzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj57XG5cblx0YWRkRXZlbnRMaXN0ZW5lcjxFdmVudCBleHRlbmRzIEV4Y2x1ZGU8a2V5b2YgRXZlbnRzLCBzeW1ib2x8bnVtYmVyPj4odHlwZTogRXZlbnQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgbGlzdGVuZXI6IG51bGx8ICgoZXY6IENzdEV2ZW50PEV2ZW50LCBFdmVudHNbRXZlbnRdPikgPT4gdm9pZCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgb3B0aW9ucz86IGJvb2xlYW58QWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMpOiB2b2lkO1xuXG5cdGRpc3BhdGNoRXZlbnQ8RXZlbnQgZXh0ZW5kcyBFeGNsdWRlPGtleW9mIEV2ZW50cywgc3ltYm9sfG51bWJlcj4+KGV2ZW50OiBDc3RFdmVudDxFdmVudCwgRXZlbnRzW0V2ZW50XT4pOiBib29sZWFuO1xuXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI8RXZlbnQgZXh0ZW5kcyBFeGNsdWRlPGtleW9mIEV2ZW50cywgc3ltYm9sfG51bWJlcj4+KHR5cGU6IEV2ZW50LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsaXN0ZW5lcjogbnVsbHwgKChldjogQ3N0RXZlbnQ8RXZlbnQsIEV2ZW50c1tFdmVudF0+KSA9PiB2b2lkKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz86IGJvb2xlYW58QWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMpOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgQ3N0bUV2ZW50PEV2ZW50IGV4dGVuZHMgc3RyaW5nLCBBcmdzPiBleHRlbmRzIEN1c3RvbUV2ZW50PEFyZ3M+IHtcblxuXHRvdmVycmlkZSBnZXQgdHlwZSgpOiBFdmVudCB7IHJldHVybiBzdXBlci50eXBlIGFzIEV2ZW50OyB9XG5cblx0Y29uc3RydWN0b3IodHlwZTogRXZlbnQsIGFyZ3M6IEFyZ3MpIHtcblx0XHRzdXBlcih0eXBlLCB7ZGV0YWlsOiBhcmdzfSk7XG5cdH1cbn1cblxuZXhwb3J0IHR5cGUgRXZlbnRzVGFyZ2V0Q3N0cjxFdmVudHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4+ID0gQ29uc3RydWN0b3I8RXZlbnRzVGFyZ2V0PEV2ZW50cz4+O1xuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgaW50ZXJuYWwgdG9vbHMgPT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hSZXNvdXJjZShyZXNvdXJjZTogUmVzb3VyY2V8UHJvbWlzZTxSZXNvdXJjZT4pIHtcblxuXHRyZXNvdXJjZSA9IGF3YWl0IHJlc291cmNlO1xuXG5cdGlmKCAhIChyZXNvdXJjZSBpbnN0YW5jZW9mIFJlc3BvbnNlKSApXG5cdFx0cmVzb3VyY2UgPSBhd2FpdCBmZXRjaChyZXNvdXJjZSk7XG5cblx0cmV0dXJuIGF3YWl0IHJlc291cmNlLnRleHQoKTtcbn1cblxuXG5hc3luYyBmdW5jdGlvbiBfZmV0Y2hUZXh0KHVyaTogc3RyaW5nfFVSTCwgaXNMaXNzQXV0bzogYm9vbGVhbiA9IGZhbHNlKSB7XG5cblx0Y29uc3Qgb3B0aW9ucyA9IGlzTGlzc0F1dG9cblx0XHRcdFx0XHRcdD8ge2hlYWRlcnM6e1wibGlzcy1hdXRvXCI6IFwidHJ1ZVwifX1cblx0XHRcdFx0XHRcdDoge307XG5cblxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVyaSwgb3B0aW9ucyk7XG5cdGlmKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwIClcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXG5cdGlmKCBpc0xpc3NBdXRvICYmIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwic3RhdHVzXCIpISA9PT0gXCI0MDRcIiApXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblxuXHRyZXR1cm4gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xufVxuYXN5bmMgZnVuY3Rpb24gX2ltcG9ydCh1cmk6IHN0cmluZywgaXNMaXNzQXV0bzogYm9vbGVhbiA9IGZhbHNlKSB7XG5cblx0Ly8gdGVzdCBmb3IgdGhlIG1vZHVsZSBleGlzdGFuY2UuXG5cdGlmKGlzTGlzc0F1dG8gJiYgYXdhaXQgX2ZldGNoVGV4dCh1cmksIGlzTGlzc0F1dG8pID09PSB1bmRlZmluZWQgKVxuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cblx0dHJ5IHtcblx0XHRyZXR1cm4gKGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrSWdub3JlOiB0cnVlICovIHVyaSkpLmRlZmF1bHQ7XG5cdH0gY2F0Y2goZSkge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH1cbn1cblxuLy8gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81MTAwMDQ2MS9odG1sLWVsZW1lbnQtdGFnLW5hbWUtZnJvbS1jb25zdHJ1Y3RvclxuY29uc3QgSFRNTENMQVNTX1JFR0VYID0gIC9IVE1MKFxcdyspRWxlbWVudC87XG5jb25zdCBlbGVtZW50TmFtZUxvb2t1cFRhYmxlID0ge1xuICAgICdVTGlzdCc6ICd1bCcsXG4gICAgJ1RhYmxlQ2FwdGlvbic6ICdjYXB0aW9uJyxcbiAgICAnVGFibGVDZWxsJzogJ3RkJywgLy8gdGhcbiAgICAnVGFibGVDb2wnOiAnY29sJywgIC8vJ2NvbGdyb3VwJyxcbiAgICAnVGFibGVSb3cnOiAndHInLFxuICAgICdUYWJsZVNlY3Rpb24nOiAndGJvZHknLCAvL1sndGhlYWQnLCAndGJvZHknLCAndGZvb3QnXSxcbiAgICAnUXVvdGUnOiAncScsXG4gICAgJ1BhcmFncmFwaCc6ICdwJyxcbiAgICAnT0xpc3QnOiAnb2wnLFxuICAgICdNb2QnOiAnaW5zJywgLy8sICdkZWwnXSxcbiAgICAnTWVkaWEnOiAndmlkZW8nLC8vICdhdWRpbyddLFxuICAgICdJbWFnZSc6ICdpbWcnLFxuICAgICdIZWFkaW5nJzogJ2gxJywgLy8sICdoMicsICdoMycsICdoNCcsICdoNScsICdoNiddLFxuICAgICdEaXJlY3RvcnknOiAnZGlyJyxcbiAgICAnRExpc3QnOiAnZGwnLFxuICAgICdBbmNob3InOiAnYSdcbiAgfTtcbmZ1bmN0aW9uIF9lbGVtZW50MnRhZ25hbWUoQ2xhc3M6IHR5cGVvZiBIVE1MRWxlbWVudCk6IHN0cmluZ3xudWxsIHtcblxuXHRpZiggQ2xhc3MgPT09IEhUTUxFbGVtZW50IClcblx0XHRyZXR1cm4gbnVsbDtcblx0XG5cdGxldCBodG1sdGFnID0gSFRNTENMQVNTX1JFR0VYLmV4ZWMoQ2xhc3MubmFtZSkhWzFdO1xuXHRyZXR1cm4gZWxlbWVudE5hbWVMb29rdXBUYWJsZVtodG1sdGFnIGFzIGtleW9mIHR5cGVvZiBlbGVtZW50TmFtZUxvb2t1cFRhYmxlXSA/PyBodG1sdGFnLnRvTG93ZXJDYXNlKClcbn0iLCJpbXBvcnQgXCJzdHJ1Y3QvbWVudS50c1wiO1xuaW1wb3J0IFwic3RydWN0L2NhbGMvc2hlZXQudHNcIjtcblxuLy8gMVxuXG5pbXBvcnQgTElTUyBmcm9tIFwiTElTU1wiO1xuaW1wb3J0IHsgRm9ybWF0cyB9IGZyb20gXCJzdHJ1Y3QvY2FsYy9mb3JtYXQudHNcIjtcblxuY29uc3Qgc19mb3JtdWxhID0gYXdhaXQgTElTUy5xcygnI3NoZWV0X2Zvcm11bGEnKTtcblxuc19mb3JtdWxhLmdldENlbGxzKFwiQTE6QzFcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUXVhbnRpdMOpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUHJpeCB1bml0YWlyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlByaXggdG90YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuc19mb3JtdWxhLmdldENlbGxzKFwiQTI6QTRcIikuY29udGVudCA9IFsyMyAgLCAxMiwgNDRdO1xuc19mb3JtdWxhLmdldENlbGxzKFwiQjI6QjRcIikuZm9ybWF0KEZvcm1hdHMuZXVyb3MpLmNvbnRlbnQgPSBbMC4yLCAwLjMsIDAuNF07XG5cbnNfZm9ybXVsYS5nZXRDZWxscyhcIkMyOkM0XCIpLmZvcm1hdChGb3JtYXRzLmV1cm9zKS5jb250ZW50ID0gW1xuICAgIFwiPUEyKkIyXCIsXG4gICAgXCI9QTMqQjNcIixcbiAgICBcIj1BNCpCNFwiXG5dO1xuXG4vKiovXG5cblxuY29uc3Qgc19jb21wbGV4X2Zvcm11bGEgPSBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfY29tcGxleF9mb3JtdWxhJyk7XG5cbnNfY29tcGxleF9mb3JtdWxhLmdldENlbGxzKFwiQTE6QzFcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIllcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGb3JtdWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG5cbnNfY29tcGxleF9mb3JtdWxhLmdldENlbGxzKFwiQTI6QjRcIikuY29udGVudCA9IFtcbiAgICAyLCA0LFxuICAgIDEsIDUsXG4gICAgNCwgNl07XG5cbnNfY29tcGxleF9mb3JtdWxhLmdldENlbGxzKFwiQzJcIikuY29udGVudCA9XG5gPSBBMipCMlxuICtBMypCM1xuICtBNCpCNGA7XG5cbi8qKi9cblxuY29uc3Qgc190eXBlcyA9IGF3YWl0IExJU1MucXMoJyNzaGVldF90eXBlcycpO1xuXG5cbnNfdHlwZXMuZ2V0Q2VsbHMoXCJBMTpFMVwiKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUZXh0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTm9tYnJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJCb29sw6llblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRm9ybXVsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuc190eXBlcy5nZXRDZWxscyhcIkEyOkUyXCIpLmNvbnRlbnQgPSBbXG4gICAgXCJIZWxsb1wiLFxuICAgIDIuMyxcbiAgICB0cnVlLFxuICAgIG5ldyBEYXRlKCksXG4gICAgXCI9QjIrMlwiXG5dXG5cblxuY29uc3Qgc19jdXJzb3IgPSBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfY3Vyc29yJyk7XG5cbnNfY3Vyc29yLmdldENlbGxzKFwiQTE6SDFcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gXCIqXCI7XG5zX2N1cnNvci5nZXRDZWxscyhcIkE0Okg0XCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFwiKlwiO1xuXG5zX2N1cnNvci5nZXRDZWxscyhcIkQxOkU0XCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFwiKlwiO1xuXG5zX2N1cnNvci5nZXRDZWxscyhcIkExOkE0XCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFwiKlwiO1xuc19jdXJzb3IuZ2V0Q2VsbHMoXCJIMTpINFwiLCB0cnVlKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpLmNvbnRlbnQgPSBcIipcIjtcblxuXG5jb25zdCBzXyRmb3JtdWxhID0gW1xuICAgIGF3YWl0IExJU1MucXMoJyNzaGVldF9fX19mb3JtdWxhJyksXG4gICAgYXdhaXQgTElTUy5xcygnI3NoZWV0X3hfX2Zvcm11bGEnKSxcbiAgICBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfX3hfZm9ybXVsYScpLFxuICAgIGF3YWl0IExJU1MucXMoJyNzaGVldF94eF9mb3JtdWxhJylcbl1cblxuZm9yKGxldCBpID0gMDsgaSA8IHNfJGZvcm11bGEubGVuZ3RoOyArK2kpIHtcbiAgICBjb25zdCBzXyRmb3JtID0gc18kZm9ybXVsYVtpXTtcblxuICAgIHNfJGZvcm0uZ2V0Q2VsbHMoXCJBMTpEMVwiKS5mb3JtYXQoXCJib2xkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW50ID0gWzAsIDEsIDIsIDNdO1xuXG4gICAgc18kZm9ybS5nZXRDZWxscyhcIkEyOkE0XCIpLmZvcm1hdChcImJvbGRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQgPSBbMSwgMiwgM107XG5cbiAgICBsZXQgcmVmID0gXCI9QTFcIjtcbiAgICBpZiggaSA9PT0gMSlcbiAgICAgICAgcmVmID0gXCI9JEExXCI7XG4gICAgaWYoIGkgPT09IDIpXG4gICAgICAgIHJlZiA9IFwiPUEkMVwiO1xuICAgIGlmKCBpID09PSAzKVxuICAgICAgICByZWYgPSBcIj0kQSQxXCI7XG5cbiAgICBzXyRmb3JtLmdldENlbGxzKFwiQjJcIikuY29udGVudCA9IHJlZjtcblxuICAgIHNfJGZvcm0uZ2V0Q2VsbHMoXCJBMTpENFwiKS5mb3JtYXQoXCJhbGlnbl9jZW50ZXJcIilcbn1cblxuY29uc3Qgc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uID0gYXdhaXQgTElTUy5xcygnI3NoZWV0X3JlY29waWVfbW90aXZhdGlvbicpO1xuXG5zaGVldF9yZWNvcGllX21vdGl2YXRpb24uZ2V0Q2VsbHMoXCJBMTpENFwiKS5mb3JtYXQoXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFtcbiAgICBcIkNvbnNvL2pvdXJcIiwgXCJDcmF5b25zXCIsIFwiR29tbWVzXCIsIFwiVG90YWwgKGpvdXIpXCIsXG4gICAgXCIwMS8wMVwiICAsIDIsIDMsIFwiPUIyK0MyXCIsIFxuICAgIFwiMDIvMDFcIiAgLCA0LCAxLCBcIj1DMytDM1wiLCBcbiAgICBcIlRvdGFsIChwcm9kKVwiICAsIFwiPUIyK0IzXCIsIFwiPUMyK0MzXCIsIFwiPUQyK0QzXCIsIFxuXTtcbnNoZWV0X3JlY29waWVfbW90aXZhdGlvbi5nZXRDZWxscyhcIkExOkQxXCIpLmZvcm1hdChcImJvbGRcIik7XG5zaGVldF9yZWNvcGllX21vdGl2YXRpb24uZ2V0Q2VsbHMoXCJBMjpBNFwiKS5mb3JtYXQoXCJib2xkXCIpO1xuXG5jb25zdCBzaGVldF9yZWNvcGllX21vdGl2YXRpb25fZW1wdHkgPSBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uX2VtcHR5Jyk7XG5cbnNoZWV0X3JlY29waWVfbW90aXZhdGlvbl9lbXB0eS5nZXRDZWxscyhcIkExOkQ0XCIpLmZvcm1hdChcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gW1xuICAgIFwiQ29uc28vam91clwiLCBcIkNyYXlvbnNcIiwgXCJHb21tZXNcIiwgXCJUb3RhbCAoam91cilcIixcbiAgICBcIjAxLzAxXCIgICwgMiwgMywgdW5kZWZpbmVkLCBcbiAgICBcIjAyLzAxXCIgICwgNCwgMSwgdW5kZWZpbmVkLCBcbiAgICBcIlRvdGFsIChwcm9kKVwiICAsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWRcbl07XG5zaGVldF9yZWNvcGllX21vdGl2YXRpb25fZW1wdHkuZ2V0Q2VsbHMoXCJBMTpEMVwiKS5mb3JtYXQoXCJib2xkXCIpO1xuc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uX2VtcHR5LmdldENlbGxzKFwiQTI6QTRcIikuZm9ybWF0KFwiYm9sZFwiKTtcblxuY29uc3Qgc2hlZXRfcmVjb3BpZV9pbmNyID0gYXdhaXQgTElTUy5xcygnI3NoZWV0X3JlY29waWVfaW5jcicpO1xuXG5zaGVldF9yZWNvcGllX2luY3IuZ2V0Q2VsbHMoJ0ExOkEyJykuY29udGVudCA9IFsgMSwgbmV3IERhdGUoKSBdO1xuXG5cbi8vIHRlc3RcbmNvbnN0IGMgPSBgXG48dGFibGUgaWQ9XCJ1blwiPlxuICAgIDx0Ym9keT5cbiAgICAgICAgPHRyPjx0ZD5YWFg8L3RkPjwvdHI+XG4gICAgPC90Ym9keT5cbjwvdGFibGU+YDtcblxuY29uc3QgY3NzID0gYFxuICAgIHRkOm5vdChbY29udGVudGVkaXRhYmxlXSkge1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB9XG5gO1xuXG5jbGFzcyBYIGV4dGVuZHMgTElTUyh7XG4gICAgY29udGVudDogYywgY3NzXG59KSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgY29uc3QgdGQgPSB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJyN1biB0ZCcpITtcbiAgICAgICAgdGQudG9nZ2xlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcbiAgICAgICAgdGQuZm9jdXMoKTtcbiAgICAgICAgdGQudGV4dENvbnRlbnQgPSBcIllZWVwiO1xuICAgIH1cbn1cblxuTElTUy5kZWZpbmUoJ3Rlc3QtdGVzdCcsIFgpOyIsImltcG9ydCB7IHN0cjJodG1sIH0gZnJvbSBcInN0cnVjdC91dGlscy9zdHIyaHRtbFwiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0LCBDZWxsTGlzdCB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbmV4cG9ydCBjbGFzcyBSYW5nZU92ZXJsYXkgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG5cbiAgICAjc2hlZXQ6IENhbGNTaGVldDtcbiAgICAjcmFuZ2U6IHN0cmluZ3xudWxsID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgb3ZlcmxheTogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihzaGVldDogQ2FsY1NoZWV0LCAuLi5jbGFzc2xpc3Q6IHN0cmluZ1tdKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLiNzaGVldCA9IHNoZWV0O1xuICAgICAgICB0aGlzLiNzaGVldC5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub3ZlcmxheSA9IHN0cjJodG1sKGA8ZGl2IGNsYXNzPSdvdmVybGF5Jz48L2Rpdj5gKTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NsaXN0KTtcblxuICAgICAgICBzaGVldC5jb250ZW50LmFwcGVuZCggdGhpcy5vdmVybGF5ICk7XG4gICAgfVxuXG4gICAgc2V0UmFuZ2UocmFuZ2U6IENlbGxMaXN0fG51bGwpIHtcbiAgICAgICAgdGhpcy4jcmFuZ2UgPSByYW5nZSA9PT0gbnVsbCA/IG51bGwgOiByYW5nZS5wbGFnZV9uYW1lITtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0UmVjdCguLi5yZWN0OiByZWFkb25seSBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSkge1xuICAgICAgICByZXR1cm4gcmVjdDtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIiwgdGhpcy4jcmFuZ2UgPT09IG51bGwpO1xuXG4gICAgICAgIGlmKCB0aGlzLiNyYW5nZSA9PT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuZ2V0UmVjdCggLi4udGhpcy4jc2hlZXQuZ2V0UmVjdCggdGhpcy4jc2hlZXQuZ2V0UmFuZ2UodGhpcy4jcmFuZ2UpICkgKTtcbiAgICAgICAgdGhpcy4jc2hlZXQuc2V0UmVjdCh0aGlzLm92ZXJsYXksIHJlY3QgKTtcbiAgICB9XG5cbiAgICBvdmVycmlkZSBhZGRFdmVudExpc3RlbmVyKHR5cGU6IHN0cmluZywgY2FsbGJhY2s6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QgfCBudWxsLCBvcHRpb25zPzogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMgfCBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIG92ZXJyaWRlIHJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZTogc3RyaW5nLCBjYWxsYmFjazogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCB8IG51bGwsIG9wdGlvbnM/OiBFdmVudExpc3RlbmVyT3B0aW9ucyB8IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLm92ZXJsYXkucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgb3B0aW9ucyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm9ybXVsYVJlZiBleHRlbmRzIFJhbmdlT3ZlcmxheSB7XG5cbiAgICBjb25zdHJ1Y3RvcihzaGVldDogQ2FsY1NoZWV0KSB7XG4gICAgICAgIHN1cGVyKHNoZWV0LCBcInJhbmdlX2hpZ2hsaWdodFwiKTtcbiAgICB9XG5cbiAgICAjY3VyX2NvbG9yID0gMDtcbiAgICBzZXRDb2xvcihjb2xvcl9pZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKGBoaWdobGlnaHRfJHt0aGlzLiNjdXJfY29sb3J9YCk7IFxuICAgICAgICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LmFkZChgaGlnaGxpZ2h0XyR7Y29sb3JfaWR9YCk7XG4gICAgICAgIHRoaXMuI2N1cl9jb2xvciA9IGNvbG9yX2lkO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlY29weUhhbmRsZSBleHRlbmRzIFJhbmdlT3ZlcmxheSB7XG5cbiAgICBjb25zdHJ1Y3RvcihzaGVldDogQ2FsY1NoZWV0KSB7XG4gICAgICAgIHN1cGVyKHNoZWV0LCBcInJlY29weVwiKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0UmVjdCh4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIFt4K3ctMiwgeStoLTIsIDUsIDVdIGFzIGNvbnN0O1xuICAgIH1cblxufSIsImltcG9ydCBMSVNTIGZyb20gXCIuLi8uLi8uLi9saWJzL0xJU1NcIjtcbmltcG9ydCB7IENhbGNTaGVldCwgQ2VsbCwgQ2VsbExpc3QsIGRlZmF1bHRGb3JtYXQgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5leHBvcnQgY2xhc3MgRm9ybWF0TWFuYWdlciB7XG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCkge1xuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgc2hlZXQuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2OiBLZXlib2FyZEV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGlmKCAhIGV2LmN0cmxLZXkgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ2InKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcImJvbGRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnaScpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KFwiaXRhbGljXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ3UnKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcInVuZGVybGluZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdsJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJhbGlnbl9sZWZ0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ3InKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcImFsaWduX3JpZ2h0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ2UnKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcImFsaWduX2NlbnRlclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICc0JyAmJiBldi5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoRm9ybWF0cy5ldXJvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnNScgJiYgZXYuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KEZvcm1hdHMucG91cmNlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJzEnICYmIGV2LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChGb3JtYXRzLm51bWJlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgICAgICAvKiBUT0RPIGxpc3RlbiAqL1xuXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgRm9ybWF0cyA9IHtcbiAgICBldXJvczogZnVuY3Rpb24odGhpczpDZWxsLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmKHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gJyc7XG5cbiAgICAgICAgY29uc3QgcHJlYyA9ICsodGhpcy5nZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicpID8/IDIpO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHtcbiAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogcHJlYyxcbiAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogcHJlY1xuICAgICAgICAgICAgfSkgKyAn4oKsJztcbiAgICAgICAgLy8udG9GaXhlZCgyKSArICfigqwnO1xuICAgIH0sXG4gICAgcG91cmNlbnQ6IGZ1bmN0aW9uKHRoaXM6Q2VsbCwgdmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuXG4gICAgICAgIGNvbnN0IHByZWMgPSArKHRoaXMuZ2V0QXR0cmlidXRlKCdwcmVjaXNpb24nKSA/PyAyKTtcblxuICAgICAgICByZXR1cm4gKHZhbHVlICogMTAwKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHtcbiAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogcHJlYyxcbiAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogcHJlY1xuICAgICAgICAgICAgfSkgKyAnJSc7XG4gICAgICAgIC8vLnRvRml4ZWQoMikgKyAn4oKsJztcbiAgICB9LFxuICAgIG51bWJlcjogZnVuY3Rpb24odGhpczpDZWxsLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmKHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gJyc7XG5cbiAgICAgICAgY29uc3QgcHJlYyA9ICsodGhpcy5nZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicpID8/IDIpO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHtcbiAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogcHJlYyxcbiAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogcHJlY1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm9ybWF0IHtcblxuICAgICNmb3JtYXQ6IFJlY29yZDxzdHJpbmcsIGFueT47XG5cbiAgICBjb25zdHJ1Y3Rvcihmb3JtYXQ6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICAgICAgdGhpcy4jZm9ybWF0ID0gZm9ybWF0O1xuICAgIH1cblxuICAgIGFwcGx5VG8oY2VsbDogQ2VsbHxDZWxsTGlzdCkge1xuXG4gICAgICAgIGlmKCBjZWxsIGluc3RhbmNlb2YgQ2VsbExpc3QpIHtcblxuICAgICAgICAgICAgZm9yKGxldCBjIG9mIGNlbGwuY2VsbHMpXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseVRvKGMpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IG5hbWUgaW4gdGhpcy4jZm9ybWF0KSB7XG4gICAgICAgICAgICBsZXQgdmFsID0gdGhpcy4jZm9ybWF0W25hbWVdO1xuXG4gICAgICAgICAgICBpZihuYW1lID09PSAnZm9ybWF0Jykge1xuXG4gICAgICAgICAgICAgICAgaWYoIHZhbCA9PT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuZm9ybWF0ID0gZGVmYXVsdEZvcm1hdDtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGNlbGwuZm9ybWF0KCBjZWxsLnJhd0NvbnRlbnQpOyAvL1RPRE86IGlmIGZjdFxuICAgIFxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjZWxsLmZvcm1hdCA9IHZhbDtcbiAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gY2VsbC5mb3JtYXQoIGNlbGwucmF3Q29udGVudCk7IC8vVE9ETzogaWYgZmN0XG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYobmFtZSA9PT0gJ3ByZWNpc2lvbicpIHtcbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgncHJlY2lzaW9uJywgdmFsKTtcbiAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gY2VsbC5mb3JtYXQ/LiggY2VsbC5yYXdDb250ZW50KTsgLy9UT0RPOiBpZiBmY3RcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIG5hbWUgPT09ICdzcGFuJyApIHtcblxuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hlZXQgPSBMSVNTLmdldExJU1NTeW5jKCAoY2VsbC5nZXRSb290Tm9kZSgpIGFzIFNoYWRvd1Jvb3QpLmhvc3QgKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiggdmFsWzBdID09PSAxICYmIHZhbFsxXSA9PT0gMSkgeyAvLyB1bm1lcmdlXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHIgPSArY2VsbC5nZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nKSA/PyAwO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYyA9ICtjZWxsLmdldEF0dHJpYnV0ZSgnY29sc3BhbicpID8/IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHI7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBjOyArK2opIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBzaGVldC5yZWxhdGl2ZVRvKGNlbGwsIGksIGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0YXJnZXQuY2VsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNlbGwucmVtb3ZlQXR0cmlidXRlKCdyb3dzcGFuJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwucmVtb3ZlQXR0cmlidXRlKCdjb2xzcGFuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCBgJHt2YWxbMF19YCk7XG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCBgJHt2YWxbMV19YCk7XG5cbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdmFsWzBdOyArK2kpXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB2YWxbMV07ICsraikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaSA9PT0gMCAmJiBqID09PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBzaGVldC5yZWxhdGl2ZVRvKGNlbGwsIGksIGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNlbGwgPSBjZWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIHR5cGVvZiB2YWwgPT09IFwiYm9vbGVhblwiKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggbmFtZS5zdGFydHNXaXRoKCdhbGlnbl8nKSApIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdhbGlnbl9sZWZ0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYWxpZ25fY2VudGVyJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYWxpZ25fcmlnaHQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoIG5hbWUuc3RhcnRzV2l0aCgndmFsaWduXycpICkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlnbl90b3AnKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZ25fbWlkZGxlJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWduX2JvdHRvbScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnRvZ2dsZShuYW1lLCB2YWwpO1xuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNlbGwuc3R5bGUuc2V0UHJvcGVydHkoYC0tJHtuYW1lfWAsIHZhbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQcm9wZXJ0eShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2Zvcm1hdFtuYW1lXTtcbiAgICB9XG4gICAgaGFzUHJvcGVydHkobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuYW1lIGluIHRoaXMuI2Zvcm1hdDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZXh0cmFjdEZvcm1hdChjZWxsOiBDZWxsfENlbGxMaXN0KTogRm9ybWF0IHtcbiAgICAgICAgXG4gICAgICAgIGlmKCBjZWxsIGluc3RhbmNlb2YgQ2VsbExpc3QpIHtcblxuICAgICAgICAgICAgY29uc3QgY2VsbHMgPSBjZWxsLmNlbGxzO1xuXG4gICAgICAgICAgICBsZXQgZm9ybWF0ID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHNbMF0pO1xuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgY2VsbHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBsZXQgZjIgPSBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxsc1tpXSk7XG5cbiAgICAgICAgICAgICAgICBmb3IobGV0IGtleSBpbiBmb3JtYXQuI2Zvcm1hdClcbiAgICAgICAgICAgICAgICAgICAgaWYoICEgKGtleSBpbiBmMi4jZm9ybWF0KSB8fCBmMi4jZm9ybWF0W2tleV0gIT09IGZvcm1hdC4jZm9ybWF0W2tleV0gKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGZvcm1hdC4jZm9ybWF0W2tleV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBmb3JtYXQgPSBPYmplY3QuZnJvbUVudHJpZXM8YW55PiggWy4uLmNlbGwuY2xhc3NMaXN0LnZhbHVlcygpXS5tYXAoZSA9PiBbZSwgdHJ1ZV0pICk7XG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2VsbC5zdHlsZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBjZWxsLnN0eWxlLml0ZW0oaSk7XG4gICAgICAgICAgICBpZiggISBuYW1lLnN0YXJ0c1dpdGgoJy0tJykgKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgZm9ybWF0W25hbWUuc2xpY2UoMildID0gY2VsbC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29sc3BhbiA9ICsoY2VsbC5nZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nKSA/PyAxKTtcbiAgICAgICAgY29uc3Qgcm93c3BhbiA9ICsoY2VsbC5nZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nKSA/PyAxKTtcblxuICAgICAgICBpZiggY29sc3BhbiA+IDEgfHwgcm93c3BhbiA+IDEgKVxuICAgICAgICAgICAgZm9ybWF0LnNwYW4gPSBbIHJvd3NwYW4sIGNvbHNwYW4gXTtcblxuICAgICAgICBpZiggISAoXCJmb250X3NpemVcIiBpbiBmb3JtYXQpIClcbiAgICAgICAgICAgIGZvcm1hdFsnZm9udF9zaXplJ10gPSAnMTBwdCc7XG5cbiAgICAgICAgaWYoIFwiZm9ybWF0XCIgaW4gY2VsbClcbiAgICAgICAgICAgIGZvcm1hdC5mb3JtYXQgPSBjZWxsLmZvcm1hdDtcblxuICAgICAgICBpZiggY2VsbC5oYXNBdHRyaWJ1dGUoJ3ByZWNpc2lvbicpIClcbiAgICAgICAgICAgIGZvcm1hdC5wcmVjaXNpb24gPSBjZWxsLmdldEF0dHJpYnV0ZSgncHJlY2lzaW9uJyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBGb3JtYXQoZm9ybWF0KTtcbiAgICB9XG59IiwiLy9UT0RPOiB3ZWJwYWNrIGNvbmZpZy4uLlxuaW1wb3J0IExJU1MgZnJvbSBcIi4uLy4uLy4uL2xpYnMvTElTU1wiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0LCBDZWxsLCBDZWxsTGlzdCwgZGVmYXVsdEZvcm1hdCB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbmNvbnN0IGNzcyA9IGBcbiAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgJiBwcmUge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoIDFyZW0gKyA4cHggKyAycHggKTtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGliZXJhdGlvbiBTYW5zJztcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cblxuZXhwb3J0IGNsYXNzIENhbGNGb3JtdWxhIGV4dGVuZHMgTElTUyh7XG4gICAgY3NzXG59KSB7XG5cbiAgICAjaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcbiAgICAjc2hlZXQgICE6IENhbGNTaGVldDtcbiAgICAjY3VyX2NlbGw6IENlbGx8bnVsbCA9IG51bGw7XG4gICAgI29uSW5wdXQ6IChldjogRXZlbnQpID0+IHZvaWQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKCB0aGlzLiNpbnB1dCApO1xuXG4gICAgICAgIHRoaXMuI2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiggdGhpcy4jY3VyX2NlbGwgPT09IG51bGwgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgLy90aGlzLiNzaGVldC5jdXJzb3IuY29udGVudCA9IHRoaXMuI2lucHV0LnRleHRDb250ZW50ITtcbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPSBudWxsO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiggdGhpcy4jY3VyX2NlbGwgPT09IG51bGwgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy4jc2hlZXQuc3RhdGVzLmNlbGxfZWRpdC5zdGF0ZSA9IHRoaXMuI2N1cl9jZWxsO1xuICAgICAgICAgICAgLy90aGlzLiNjdXJfY2VsbCEudGV4dENvbnRlbnQgPSB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgaWYoIHRoaXMuI2N1cl9jZWxsID09PSBudWxsIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsIS50ZXh0Q29udGVudCA9IGRlZmF1bHRGb3JtYXQoIHRoaXMuI2lucHV0LnRleHRDb250ZW50ISApO1xuICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KCdpbnB1dCcsIHtkZXRhaWw6IHRydWV9KSApO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNvbklucHV0ID0gKGV2OiBFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIGlmKCBldi5kZXRhaWwgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy4jaW5wdXQudGV4dENvbnRlbnQgPSBkZWZhdWx0Rm9ybWF0KCB0aGlzLiNjdXJfY2VsbCEudGV4dENvbnRlbnQhICk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3luY1RvKHNoZWV0OiBDYWxjU2hlZXQpIHtcblxuICAgICAgICB0aGlzLiNzaGVldCA9IHNoZWV0O1xuICAgICAgICBjb25zdCBjdXJzb3IgPSB0aGlzLiNzaGVldC5jdXJzb3I7XG5cbiAgICAgICAgY3Vyc29yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChfOiBhbnkpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgY2VsbHMgPSBjdXJzb3IuY2VsbHM7XG5cbiAgICAgICAgICAgIHRoaXMuI2lucHV0LnRvZ2dsZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgY2VsbHMubGVuZ3RoICE9PSAwKTtcblxuICAgICAgICAgICAgaWYoIGNlbGxzLmxlbmd0aCA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgaWYoIHRoaXMuI2N1cl9jZWxsICE9PSBudWxsIClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLiNvbklucHV0KTtcbiAgICAgICAgICAgICAgICB0aGlzLiNjdXJfY2VsbCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiNjdXJfY2VsbCA9IGNlbGxzWzBdO1xuICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLiNvbklucHV0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy4jaW5wdXQudGV4dENvbnRlbnQgPSBkZWZhdWx0Rm9ybWF0KCB0aGlzLiNjdXJfY2VsbC5yYXdDb250ZW50ICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5MSVNTLmRlZmluZSgnY2FsYy1mb3JtdWxhJywgQ2FsY0Zvcm11bGEpOyIsImltcG9ydCB7IENhbGNTaGVldCwgZGVmYXVsdEZvcm1hdCwgVmFsdWVUeXBlIH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuZXhwb3J0IGNsYXNzIEZvcm11bGEge1xuXG4gICAgI3N0cjogc3RyaW5nO1xuICAgICNleGVjOiAoc2hlZXQ6IENhbGNTaGVldCkgPT4gVmFsdWVUeXBlO1xuICAgICNyYW5nZXM6IFRva2VuW107XG5cbiAgICBjb25zdHJ1Y3RvcihzdHI6IHN0cmluZywgZXhlYzogKHNoZWV0OiBDYWxjU2hlZXQpID0+IFZhbHVlVHlwZSwgcmFuZ2VzX3Rva2VuOiBUb2tlbltdID0gW10pIHtcblxuICAgICAgICB0aGlzLiNzdHIgPSBzdHI7XG4gICAgICAgIHRoaXMuI2V4ZWMgPSBleGVjO1xuICAgICAgICB0aGlzLiNyYW5nZXMgPSByYW5nZXNfdG9rZW47XG4gICAgfVxuICAgIFxuICAgIHJlbGF0aXZlVG8oIHNoZWV0OiBDYWxjU2hlZXQsIGRyb3c6IG51bWJlciwgZGNvbDogbnVtYmVyKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgbmV3X3JhbmdlcyA9IHRoaXMuI3Jhbmdlcy5tYXAociA9PiB7XG5cbiAgICAgICAgICAgIC8vVE9ETzogaWYgcmFuZ2UuLi5cbiAgICAgICAgICAgIGxldCBwb3MgPSBbLi4uc2hlZXQuY2VsbFBvcyggc2hlZXQuZ2V0Q2VsbHMoci52YWx1ZSkuY2VsbHNbMF0gKV07XG4gICAgXG4gICAgICAgICAgICBpZiggci52YWx1ZS5sYXN0SW5kZXhPZignJCcpIDw9IDAgKVxuICAgICAgICAgICAgICAgIHBvc1swXSArPSBkcm93O1xuICAgICAgICAgICAgaWYoIHIudmFsdWVbMF0gIT09ICckJyApXG4gICAgICAgICAgICAgICAgcG9zWzFdICs9IGRjb2w7XG5cbiAgICAgICAgICAgIHJldHVybiBgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1K3Bvc1sxXS0xKX0ke3Bvc1swXX1gO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbmV3X2Zvcm11bGEgPSBcIlwiO1xuXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy4jcmFuZ2VzLmxlbmd0aDsgKytpKSB7XG5cbiAgICAgICAgICAgIG5ld19mb3JtdWxhICs9IHRoaXMuI3N0ci5zbGljZShvZmZzZXQsIHRoaXMuI3Jhbmdlc1tpXS5iZWcpO1xuICAgICAgICAgICAgbmV3X2Zvcm11bGEgKz0gbmV3X3Jhbmdlc1tpXTtcblxuICAgICAgICAgICAgb2Zmc2V0ID0gdGhpcy4jcmFuZ2VzW2ldLmVuZDtcbiAgICAgICAgfVxuICAgICAgICBuZXdfZm9ybXVsYSArPSB0aGlzLiNzdHIuc2xpY2Uob2Zmc2V0KTtcbiAgICAgICAgXG4gICAgICAgIC8vY2FuIGJlIG9wdGltaXplZC4uLlxuICAgICAgICByZXR1cm4gcGFyc2VfZm9ybXVsYSggbmV3X2Zvcm11bGEgKTtcbiAgICB9XG5cbiAgICBnZXQgcmFuZ2VzVG9rZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNyYW5nZXM7XG4gICAgfVxuXG4gICAgZXhlYyhzaGVldDogQ2FsY1NoZWV0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNleGVjKHNoZWV0KTtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3N0cjtcbiAgICB9XG59XG5cbnR5cGUgVG9rZW4gPSB7XG4gICAgYmVnOiBudW1iZXIsXG4gICAgZW5kOiBudW1iZXIsXG4gICAgdmFsdWU6IHN0cmluZyxcbiAgICB0eXBlOiBcInN0cmluZ1wifFwibnVtYmVyXCJ8XCJjYWxsXCJ8XCJyYW5nZVwifFwib3BcIlxufVxuXG5cbmZ1bmN0aW9uIGV4dHJhY3RUb2tlbihzdHI6IHN0cmluZywgb2Zmc2V0OiBudW1iZXIpIHtcblxuICAgIHdoaWxlKCBbJyAnLCAnXFxuJywgJ1xcdCddLmluY2x1ZGVzKHN0cltvZmZzZXRdKSApIC8vIGlnbm9yZSB3aGl0ZXNwYWNlc1xuICAgICAgICArK29mZnNldDtcblxuICAgIGxldCB0b2tlbjogUGFydGlhbDxUb2tlbj4gPSB7XG4gICAgICAgIGJlZzogb2Zmc2V0XG4gICAgfTtcblxuICAgIGlmKHN0cltvZmZzZXRdID09PSAnXCInKSB7XG4gICAgICAgIHRva2VuLnR5cGUgPSBcInN0cmluZ1wiO1xuICAgICAgICB3aGlsZSggc3RyWysrb2Zmc2V0XSAhPT0gJ1wiJyAmJiBzdHJbb2Zmc2V0LTFdICE9PSAnXFxcXCcpIHtcbiAgICAgICAgICAgIGlmKG9mZnNldCsxID49IHN0ci5sZW5ndGggKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRm9ybXVsYSBwYXJzaW5nIGVycm9yJyk7XG4gICAgICAgIH1cbiAgICAgICAgKytvZmZzZXQ7XG4gICAgfSBlbHNlIGlmKCBzdHJbb2Zmc2V0XSA9PT0gJywnIHx8IChzdHJbb2Zmc2V0XSA+PSAnMCcgJiYgc3RyW29mZnNldF0gPD0gJzknKSApIHtcbiAgICAgICAgdG9rZW4udHlwZSA9IFwibnVtYmVyXCI7XG4gICAgICAgIGxldCBoYXNDb21tYSA9IGZhbHNlO1xuICAgICAgICB3aGlsZSggc3RyW29mZnNldF0gPT09ICcsJyB8fCBzdHJbb2Zmc2V0XSA+PSAnMCcgJiYgc3RyW29mZnNldF0gPD0gJzknICkge1xuXG4gICAgICAgICAgICBpZiggc3RyW29mZnNldF0gPT09ICcsJyApIHtcbiAgICAgICAgICAgICAgICBpZihoYXNDb21tYSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JtdWxhIHBhcnNpbmcgZXJyb3InKTtcbiAgICAgICAgICAgICAgICBoYXNDb21tYSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICsrb2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICB9IGVsc2UgaWYoIHN0cltvZmZzZXRdID09PSAnJCcgfHwgc3RyW29mZnNldF0gPj0gJ0EnICYmIHN0cltvZmZzZXRdIDw9ICdaJykgeyAvLyskXG4gICAgICAgIFxuICAgICAgICB3aGlsZSggb2Zmc2V0IDwgc3RyLmxlbmd0aFxuICAgICAgICAgICAgICAgICYmIChzdHJbb2Zmc2V0XSA9PT0gJyQnIHx8IHN0cltvZmZzZXRdID49ICdBJyAmJiBzdHJbb2Zmc2V0XSA8PSAnWidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBzdHJbb2Zmc2V0XSA+PSAnMCcgJiYgc3RyW29mZnNldF0gPD0gJzknXG4gICAgICAgICAgICAgICAgICAgICkgKVxuICAgICAgICAgICAgKytvZmZzZXQ7XG5cbiAgICAgICAgdG9rZW4udHlwZSA9IHN0cltvZmZzZXRdID09PSAnKCcgPyAnY2FsbCcgOiAncmFuZ2UnO1xuXG4gICAgICAgIGlmKCBzdHJbb2Zmc2V0XSA9PT0gJygnIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b2tlbi50eXBlID0gXCJvcFwiOyAvLyBvbmx5IG9uIGNoYXIgPz8/XG5cbiAgICAgICAgaWYoIHN0cltvZmZzZXQgKyAxXSA9PT0gJz0nKSAvLyA+PSAvIDw9XG4gICAgICAgICAgICArK29mZnNldDtcbiAgICAgICAgZWxzZSBpZiggc3RyW29mZnNldCArIDFdID09PSAnPicpIC8vIDw+XG4gICAgICAgICAgICArK29mZnNldDtcblxuICAgICAgICArK29mZnNldDtcbiAgICB9XG5cbiAgICB0b2tlbi5lbmQgPSBvZmZzZXQ7XG4gICAgdG9rZW4udmFsdWUgPSBzdHIuc2xpY2UodG9rZW4uYmVnLCB0b2tlbi5lbmQpO1xuXG4gICAgcmV0dXJuIHRva2VuIGFzIFJlcXVpcmVkPFRva2VuPjtcbn1cblxuY2xhc3MgTm9kZSB7XG5cbiAgICBjaGlsZHJlbjogTm9kZVtdO1xuICAgICNmY3Q6IChzaGVldDogQ2FsY1NoZWV0LCAuLi5hcmdzOihWYWx1ZVR5cGUpW10pID0+IFZhbHVlVHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKGZjdDogKHNoZWV0OiBDYWxjU2hlZXQsIC4uLmFyZ3M6KFZhbHVlVHlwZSlbXSkgPT4gVmFsdWVUeXBlLCAuLi5jaGlsZHJlbjogTm9kZVtdKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgaWYoY2hpbGRyZW4gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIldURlwiKTtcbiAgICAgICAgdGhpcy4jZmN0ID0gZmN0O1xuICAgIH1cblxuICAgIGV2YWwoc2hlZXQ6IENhbGNTaGVldCk6IFZhbHVlVHlwZSB7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSB0aGlzLmNoaWxkcmVuLm1hcCggYyA9PiBjLmV2YWwoc2hlZXQpICk7XG4gICAgICAgIHJldHVybiB0aGlzLiNmY3Qoc2hlZXQsIC4uLmFyZ3MgKTtcbiAgICB9XG4gICAgXG59XG5cbmZ1bmN0aW9uIHRvTnVtYmVyKGE6IHVua25vd24pOiBudW1iZXIge1xuXG4gICAgaWYoYSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gMDtcbiAgICByZXR1cm4gYSBhcyB1bmtub3duIGFzIG51bWJlcjtcbn1cblxuY29uc3Qgb3BfaW1wbCA9IHtcbiAgICAnJSc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24pID0+IHRvTnVtYmVyKGEpLzEwMCxcbiAgICAndS4rJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93bikgPT4gK3RvTnVtYmVyKGEpLFxuICAgICd1Li0nOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duKSA9PiAtdG9OdW1iZXIoYSksXG4gICAgJyonOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiB0b051bWJlcihhKSp0b051bWJlcihiKSxcbiAgICAnLyc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24sIGI6IHVua25vd24pID0+IHRvTnVtYmVyKGEpL3RvTnVtYmVyKGIpLFxuICAgICcrJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93biwgYjogdW5rbm93bikgPT4gdG9OdW1iZXIoYSkrdG9OdW1iZXIoYiksXG4gICAgJy0nOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiB0b051bWJlcihhKS10b051bWJlcihiKSxcbiAgICAnXic6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24sIGI6IHVua25vd24pID0+IE1hdGgucG93KHRvTnVtYmVyKGEpLHRvTnVtYmVyKGIpICksXG4gICAgJyYnOiAoXzogQ2FsY1NoZWV0LCBhOiBzdHJpbmcsIGI6IHN0cmluZykgPT4gYCR7ZGVmYXVsdEZvcm1hdChhKX0ke2RlZmF1bHRGb3JtYXQoYil9YCxcbiAgICAnPSc6ICAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSA9PT0gYixcbiAgICAnPD4nOiAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSAhPT0gYixcbiAgICAnPic6ICAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSA+IGIsXG4gICAgJz49JzogKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPj0gYixcbiAgICAnPCc6ICAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSA8IGIsXG4gICAgJzw9JzogKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPD0gYixcbn0gYXMgUmVjb3JkPHN0cmluZywgKF86IENhbGNTaGVldCwgLi4uYXJnczpWYWx1ZVR5cGVbXSkgPT4gVmFsdWVUeXBlPjtcblxuLy8gaHR0cHM6Ly9oZWxwLmxpYnJlb2ZmaWNlLm9yZy9sYXRlc3QvZW4tVVMvdGV4dC9zY2FsYy8wMS8wNDA2MDE5OS5odG1sXG5jb25zdCBvcF9wcmlvID0gW1xuICAgIFsnOiddLCAvLyByYW5nZVxuICAgIFsnISddLCAvLyByYW5nZSBpbnRlcnNlY3Rpb25cbiAgICBbJ34nXSwgLy8gcmFuZ2UgdW5pb25cbiAgICBbJ3UuKycsICd1Li0nXSwgLy8gdW5hcnkgLSBmcm9tIHJpZ2h0IHRvIGxlZnQuLi5cbiAgICBbJyUnXSwgLy8gcG9zdGZpeCwgLzEwMFxuICAgIFsnXiddLCAvLyBwb3dlclxuICAgIFsnKicsICcvJ10sXG4gICAgWycrJywgJy0nXSxcbiAgICBbJyYnXSwgLy8gc3RyaW5nIGNvbmNhdFxuICAgIFsnPScsICc8PicsICc8JywgJzw9JywgJz4nLCAnPj0nXSAvLyBjb21wYXJlXG5dO1xuXG5sZXQgb3BzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge307XG5mb3IobGV0IGkgPSAwOyBpIDwgb3BfcHJpby5sZW5ndGg7ICsraSlcbiAgICBmb3IobGV0IG9wIG9mIG9wX3ByaW9baV0gKVxuICAgICAgICBvcHNbb3BdID0gaTtcblxuZnVuY3Rpb24gdG9rZW5saXN0MlRyZWUodG9rZW5zOiBUb2tlbltdKTogTm9kZSB7XG5cbiAgICBpZiggdG9rZW5zLmxlbmd0aCA9PT0gMSkge1xuXG4gICAgICAgIGlmKCB0b2tlbnNbMF0udHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgY29uc3QgbmIgPSArdG9rZW5zWzBdLnZhbHVlLnJlcGxhY2UoJywnLCAnLicpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBOb2RlKCAoKSA9PiBuYik7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHRva2Vuc1swXS50eXBlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBjb25zdCBzdHIgPSB0b2tlbnNbMF0udmFsdWUuc2xpY2UoMSwtMSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vZGUoICgpID0+IHN0cik7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHRva2Vuc1swXS50eXBlID09PSBcInJhbmdlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTm9kZSggKHNoZWV0OiBDYWxjU2hlZXQpID0+IHtcblxuICAgICAgICAgICAgICAgIGxldCByYXcgPSBzaGVldC5nZXRDZWxscyh0b2tlbnNbMF0udmFsdWUpLmNlbGxzWzBdLnJhd0NvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgICBpZiggcmF3IGluc3RhbmNlb2YgRm9ybXVsYSlcbiAgICAgICAgICAgICAgICAgICAgcmF3ID0gcmF3LmV4ZWMoc2hlZXQpOyAvLyBUT0RPOiBjYWNoZSByZXN1bHRcblxuICAgICAgICAgICAgICAgIHJldHVybiByYXcgYXMgVmFsdWVUeXBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiPz8/XCIpO1xuICAgIH1cblxuICAgIGlmKHRva2Vuc1swXS52YWx1ZSA9PT0gJygnICYmIHRva2Vuc1t0b2tlbnMubGVuZ3RoLTFdLnZhbHVlID09PSAnKScpXG4gICAgICAgIHJldHVybiB0b2tlbmxpc3QyVHJlZSh0b2tlbnMuc2xpY2UoMSwtMSkgKTtcblxuICAgIGxldCBjdXIgPSB7XG4gICAgICAgIHByaW9yaXR5OiBvcF9wcmlvLmxlbmd0aCxcbiAgICAgICAgaWR4ICAgICA6IC0xXG4gICAgfTtcblxuICAgIGZvcihsZXQgaSA9IHRva2Vucy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICBpZiggdG9rZW5zW2ldLnR5cGUgIT09IFwib3BcIiApIC8vIGNhbGwgbm90IGhhbmRsZWQgeWV0Li4uXG4gICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICBpZiggdG9rZW5zW2ldLnZhbHVlID09PSAnKScgKSB7IC8vIGdvIHRvIGZpcnN0ICcoJ1xuICAgICAgICAgICAgaSA9IHRva2Vucy5maW5kSW5kZXgoIHQgPT4gdC50eXBlID09PSAnb3AnICYmIHQudmFsdWUgPT09ICcoJyk7XG5cbiAgICAgICAgICAgIGlmKCBpID09PSAwKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLS1pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXNzZXJ0cyBpZiB1bmFyeSBvcC5cbiAgICAgICAgaWYoIHRva2Vuc1tpXS52YWx1ZSA9PT0gJy0nIHx8IHRva2Vuc1tpXS52YWx1ZSA9PT0gJysnICkge1xuXG4gICAgICAgICAgICBpZiggaSA9PT0gMCB8fCB0b2tlbnNbaS0xXS50eXBlID09PSBcIm9wXCIgKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB1X29wID0gYHUuJHt0b2tlbnNbaV0udmFsdWV9YDtcbiAgICAgICAgICAgICAgICB0b2tlbnNbaV0udmFsdWUgPSB1X29wO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gb3BzW3Vfb3BdO1xuXG4gICAgICAgICAgICAgICAgLy8gcHJpb3JpdHkgaXMgcmV2ZXJzZWQgKyBldmFsdWF0ZWQgZnJvbSByaWdodCB0byBsZWZ0LlxuICAgICAgICAgICAgICAgIGlmKCBwcmlvcml0eSA8PSBjdXIucHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VyLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgICAgIGN1ci5pZHggICAgICA9IGk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IG9wc1t0b2tlbnNbaV0udmFsdWVdO1xuXG4gICAgICAgIC8vIHByaW9yaXR5IGlzIHJldmVyc2VkLlxuICAgICAgICBpZiggcHJpb3JpdHkgPCBjdXIucHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGN1ci5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICAgICAgY3VyLmlkeCAgICAgID0gaTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKCBjdXIuaWR4ID09PSAtMSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCc/Pz8nKTtcblxuICAgIGxldCBvcF90b2tlbiA9IHRva2Vuc1tjdXIuaWR4XTtcbiAgICBpZiggb3BfdG9rZW4udmFsdWUgPT09ICclJyApIHtcbiAgICAgICAgY29uc3QgbGVmdCAgPSB0b2tlbnMuc2xpY2UoMCwgY3VyLmlkeCk7XG4gICAgICAgIGNvbnN0IG9wID0gb3BfaW1wbFtvcF90b2tlbi52YWx1ZSBhcyBrZXlvZiB0eXBlb2Ygb3BfaW1wbF07XG4gICAgICAgIHJldHVybiBuZXcgTm9kZShcbiAgICAgICAgICAgIG9wLFxuICAgICAgICAgICAgdG9rZW5saXN0MlRyZWUobGVmdClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiggb3BfdG9rZW4udmFsdWUgPT09ICd1Li0nIHx8ICBvcF90b2tlbi52YWx1ZSA9PT0gJ3UuKycgKSB7XG5cbiAgICAgICAgY29uc3QgcmlnaHQgID0gdG9rZW5zLnNsaWNlKGN1ci5pZHgrMSk7XG4gICAgICAgIGNvbnN0IG9wID0gb3BfaW1wbFtvcF90b2tlbi52YWx1ZSBhcyBrZXlvZiB0eXBlb2Ygb3BfaW1wbF07XG4gICAgICAgIHJldHVybiBuZXcgTm9kZShcbiAgICAgICAgICAgIG9wLFxuICAgICAgICAgICAgdG9rZW5saXN0MlRyZWUocmlnaHQpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgbGVmdCAgPSB0b2tlbnMuc2xpY2UoMCwgY3VyLmlkeCk7XG4gICAgY29uc3QgcmlnaHQgPSB0b2tlbnMuc2xpY2UoY3VyLmlkeCsxKTtcblxuICAgIGNvbnN0IG9wID0gb3BfaW1wbFtvcF90b2tlbi52YWx1ZSBhcyBrZXlvZiB0eXBlb2Ygb3BfaW1wbF07XG5cbiAgICByZXR1cm4gbmV3IE5vZGUoXG4gICAgICAgIG9wLFxuICAgICAgICB0b2tlbmxpc3QyVHJlZShsZWZ0KSxcbiAgICAgICAgdG9rZW5saXN0MlRyZWUocmlnaHQpXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlX2Zvcm11bGEoc3RyOnN0cmluZykge1xuXG4gICAgbGV0IG9mZnNldCA9IDE7XG4gICAgbGV0IHRva2VucyA9IG5ldyBBcnJheTxUb2tlbj4oKTtcblxuICAgIHdoaWxlKCBvZmZzZXQgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIGxldCBjdXJUb2tlbiA9IGV4dHJhY3RUb2tlbihzdHIsIG9mZnNldCk7XG4gICAgICAgIHRva2Vucy5wdXNoKCBjdXJUb2tlbiApO1xuICAgICAgICBvZmZzZXQgPSBjdXJUb2tlbi5lbmQ7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IHRva2VubGlzdDJUcmVlKHRva2VucykhO1xuXG4gICAgY29uc3QgcmFuZ2VzID0gdG9rZW5zLmZpbHRlcih0ID0+IHQudHlwZSA9PT0gXCJyYW5nZVwiICk7XG5cbiAgICByZXR1cm4gbmV3IEZvcm11bGEoc3RyLCAoc2hlZXQ6IENhbGNTaGVldCkgPT4gbm9kZS5ldmFsKHNoZWV0KSwgcmFuZ2VzICk7XG59IiwiLy9UT0RPOiB3ZWJwYWNrIGNvbmZpZy4uLlxuaW1wb3J0IExJU1MgZnJvbSBcIi4uLy4uLy4uL2xpYnMvTElTU1wiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0LCBDZWxsTGlzdCwgZGVmYXVsdEZvcm1hdCB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbi8vVE9ETzogc3ludGF4IGhpZ2hsaWdodCA7KVxuXG5jb25zdCBjc3MgPSBgXG4gICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYgcHJlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKCAxcmVtICsgOHB4ICsgMnB4ICk7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xpYmVyYXRpb24gU2Fucyc7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5leHBvcnQgY2xhc3MgUGxhZ2VGb3JtdWxhIGV4dGVuZHMgTElTUyh7XG4gICAgY3NzXG59KSB7XG5cbiAgICAjaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoIHRoaXMuI2lucHV0ICk7XG4gICAgICAgIHRoaXMuI2lucHV0LnRvZ2dsZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJyk7XG5cbiAgICAgICAgdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldikgPT4ge1xuICAgICAgICAgICAgaWYoZXYuY29kZSAhPT0gJ0VudGVyJylcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGV2LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLiNzaGVldC5nZXRDZWxscyh0aGlzLiNpbnB1dC50ZXh0Q29udGVudCEpLmNlbGxzO1xuXG4gICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5hZGQoIC4uLnNlbGVjdGVkICk7XG5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LmN1cnNvci5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy4jc2hlZXQuY3Vyc29yLmFkZCggc2VsZWN0ZWRbMF0gKTtcblxuICAgICAgICAgICAgdGhpcy4jaW5wdXQuYmx1cigpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vVE9ETy4uLi5cbiAgICAgICAgdGhpcy4jaW5wdXQudG9nZ2xlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAvKnRoaXMuI2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcblxuICAgICAgICB9KTsqL1xuICAgIH1cblxuICAgICNzaGVldCE6IENhbGNTaGVldDtcblxuICAgIHN5bmNUbyhzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcblxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBzaGVldC5zZWxlY3Rpb247XG5cbiAgICAgICAgc2VsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChfOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gc2VsZWN0aW9uLnBsYWdlX25hbWUgPz8gXCJcIjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5MSVNTLmRlZmluZSgnY2FsYy1wbGFnZScsIFBsYWdlRm9ybXVsYSk7IiwiaW1wb3J0IHsgQ2FsY1NoZWV0LCBDZWxsIH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuZXhwb3J0IGNsYXNzIFBsYWdlU2VsZWN0b3Ige1xuXG4gICAgI3VwZGF0ZVNlbGVjdGlvbigpIHtcblxuICAgICAgICBsZXQgc2VsZWN0ZWRfY2VsbHMgPSB0aGlzLiNzaGVldC5nZXRSYW5nZSggdGhpcy4jb3JpZ19wb3MsIHRoaXMuI2ZpbmFsX3BvcyApLmNlbGxzO1xuXG4gICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5jbGVhcigpOyAvLyB3ZSBhZGQgaXQuLi5cblxuICAgICAgICBpZiggdGhpcy4jaXNDdHJsICkge1xuXG4gICAgICAgICAgICAvLyByZXN0b3JlIGluaXRpYWwgc3RhdGUuLi5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5hZGQoLi4udGhpcy4jcHJldl9zZWxlY3Rpb24pO1xuXG4gICAgICAgICAgICAvL1RPRE8gb25seSBvcmlnX3RhcmdldC4uLlxuICAgICAgICAgICAgaWYodGhpcy4jc2hlZXQuc2VsZWN0aW9uLmhhcyggLi4uc2VsZWN0ZWRfY2VsbHMgKSApXG4gICAgICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLnJlbW92ZSggLi4uc2VsZWN0ZWRfY2VsbHMgKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uYWRkKCAuLi5zZWxlY3RlZF9jZWxscyApO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uYWRkKCAuLi5zZWxlY3RlZF9jZWxscyApO1xuICAgIH1cblxuICAgICNpc0N0cmwgICAgICAgICE6IGJvb2xlYW47XG4gICAgI3NoZWV0ICAgICAgICAgIDogQ2FsY1NoZWV0O1xuICAgICNvcmlnX3RhcmdldCAgICE6IEhUTUxFbGVtZW50O1xuICAgICNvcmlnX3BvcyAgICAgICE6IFtudW1iZXIsIG51bWJlcl07XG4gICAgI2ZpbmFsX3BvcyAgICAgITogW251bWJlciwgbnVtYmVyXTtcbiAgICAjcHJldl9zZWxlY3Rpb24hOiBDZWxsW107XG5cbiAgICAjZXYycG9zKGV2OiBNb3VzZUV2ZW50KTogW251bWJlcixudW1iZXJdIHtcblxuICAgICAgICBjb25zdCBjb2xzID0gWy4uLnRoaXMuI3NoZWV0LnRib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuXTtcbiAgICAgICAgbGV0IGNvbF9pZDtcbiAgICAgICAgZm9yKGNvbF9pZCA9IGNvbHMubGVuZ3RoLTE7IGNvbF9pZCA+PSAwOyAtLWNvbF9pZCkge1xuICAgICAgICAgICAgaWYoIGV2LmNsaWVudFggPj0gY29sc1tjb2xfaWRdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnggKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCByb3dzID0gWy4uLnRoaXMuI3NoZWV0LnRib2R5LmNoaWxkcmVuXS5tYXAoIGUgPT4gZS5jaGlsZHJlblswXSApO1xuICAgICAgICBsZXQgcm93X2lkO1xuICAgICAgICBmb3Iocm93X2lkID0gcm93cy5sZW5ndGgtMTsgcm93X2lkID49IDA7IC0tcm93X2lkKSB7XG4gICAgICAgICAgICBpZiggZXYuY2xpZW50WSA+PSByb3dzW3Jvd19pZF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSApXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW3Jvd19pZCwgY29sX2lkXTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcblxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpITtcblxuICAgICAgICBjb25zdCBvbl9tb3VzZV9tb3ZlID0gKGV2OiBNb3VzZUV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuI2ZpbmFsX3BvcyA9IHRoaXMuI2V2MnBvcyhldik7XG5cbiAgICAgICAgICAgIHRoaXMuI3VwZGF0ZVNlbGVjdGlvbigpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHNoZWV0KTtcbiAgICAgICAgc2hlZXQuY3Vyc29yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi5yZXBsYWNlQWxsKHNoZWV0LmN1cnNvcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgc2hlZXQuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldjpNb3VzZUV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIGlmKCBzaGVldC5zdGF0ZXMuY2VsbF9lZGl0LnN0YXRlID09PSB0YXJnZXQgKSAgLy8gYSBjZWxsIGJlaW5nIGVkaXRlZC5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiggISBbXCJUSFwiLCBcIlREXCJdLmluY2x1ZGVzKCB0YXJnZXQudGFnTmFtZSApICkvLyAuLi5cbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSA9PT0gXCJUSFwiICYmIHRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJcIiApIHsgLy8gbW91c2Vtb3ZlIGRvZXMgbm90aGluZy5cblxuICAgICAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5jbGVhcigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZiA9IGBBMToke3RoaXMuI3NoZWV0LnBvczJyZWYodGhpcy4jc2hlZXQubmJSb3dzLCB0aGlzLiNzaGVldC5uYkNvbHMpfWA7XG4gICAgICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmFkZCggLi4udGhpcy4jc2hlZXQuZ2V0Q2VsbHMocmVmKS5jZWxscyApO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiNpc0N0cmwgICAgICAgICA9IGV2LmN0cmxLZXk7XG4gICAgICAgICAgICB0aGlzLiNvcmlnX3RhcmdldCAgICA9IHRhcmdldDtcbiAgICAgICAgICAgIHRoaXMuI29yaWdfcG9zICAgICAgID0gdGhpcy4jZXYycG9zKGV2KTsgLy8gQ2FuIGJlIFRILi4uXG4gICAgICAgICAgICB0aGlzLiNmaW5hbF9wb3MgICAgICA9IHRoaXMuI29yaWdfcG9zO1xuICAgICAgICAgICAgdGhpcy4jcHJldl9zZWxlY3Rpb24gPSBzaGVldC5zZWxlY3Rpb24uY2VsbHMuc2xpY2UoKTtcblxuICAgICAgICAgICAgdGhpcy4jdXBkYXRlU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uX21vdXNlX21vdmUpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1haW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25fbW91c2VfbW92ZSk7XG4gICAgICAgICAgICB9LCB7b25jZTogdHJ1ZX0pO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCIvL1RPRE86IHdlYnBhY2sgY29uZmlnLi4uXG5pbXBvcnQgTElTUyBmcm9tIFwiLi4vLi4vLi4vbGlicy9MSVNTXCI7XG5cbi8vQHRzLWlnbm9yZVxuaW1wb3J0IGNzcyBmcm9tIFwiISFyYXctbG9hZGVyIS4vaW5kZXguY3NzXCI7XG5cbmV4cG9ydCB0eXBlIFZhbHVlVHlwZSA9IHN0cmluZ3xudW1iZXJ8RGF0ZXxib29sZWFuO1xuZXhwb3J0IHR5cGUgUmF3Q29udGVudFR5cGUgPSBWYWx1ZVR5cGV8Rm9ybXVsYTtcblxuZXhwb3J0IHR5cGUgQ2VsbCA9IEhUTUxUYWJsZUNlbGxFbGVtZW50ICYge1xuICAgIHJhd0NvbnRlbnQ6IFJhd0NvbnRlbnRUeXBlLFxuICAgIGZvcm1hdDogKHRoaXM6IENlbGwsIHY6IHN0cmluZ3xudW1iZXIpID0+IHN0cmluZyxcbiAgICBpc19ybzogYm9vbGVhblxufTtcblxuZnVuY3Rpb24gaXNBY3RpdmUodGFyZ2V0OiBIVE1MRWxlbWVudCkge1xuXG4gICAgcmV0dXJuIHRhcmdldC5tYXRjaGVzKCc6Zm9jdXMnKTtcbi8qXG4gICAgbGV0IGFjdGl2ZSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICB3aGlsZSggYWN0aXZlPy5zaGFkb3dSb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCApXG4gICAgICAgIGFjdGl2ZSA9IGFjdGl2ZS5zaGFkb3dSb290LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICByZXR1cm4gYWN0aXZlID09PSB0YXJnZXQ7Ki9cbn1cblxuZnVuY3Rpb24gb25JbnB1dChldjogRXZlbnQpIHtcblxuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIxMjM0NzQxL3BsYWNlLWNhcmV0LWJhY2std2hlcmUtaXQtd2FzLWFmdGVyLWNoYW5naW5nLWlubmVyaHRtbC1vZi1hLWNvbnRlbnRlZGl0YWJsZS1lbGVtXG5cbiAgICBsZXQgcnJhbmdlID0gd2luZG93LmdldFNlbGVjdGlvbigpIS5nZXRSYW5nZUF0KDApO1xuICAgIGxldCBjID0gcnJhbmdlLnN0YXJ0T2Zmc2V0O1xuXG4gICAgLy9sZXQgdGV4dCA9IFwiXCI7XG4gICAgbGV0IGxlbmd0aCA9IDA7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRhcmdldC5jaGlsZE5vZGVzLmxlbmd0aDsgKytpKSB7XG5cbiAgICAgICAgbGV0IGNoaWxkID0gdGFyZ2V0LmNoaWxkTm9kZXNbaV07XG4gICAgICAgIGlmKCBjaGlsZC5ub2RlVHlwZSAhPT0gTm9kZS5URVhUX05PREUpXG4gICAgICAgICAgICBjaGlsZCA9IGNoaWxkLmNoaWxkTm9kZXNbMF07XG5cbiAgICAgICAgaWYoIHJyYW5nZS5zdGFydENvbnRhaW5lciA9PT0gY2hpbGQgKSB7XG4gICAgICAgICAgICAvL3RleHQgKz0gcC5jaGlsZE5vZGVzW2ldLnRleHRDb250ZW50IS5zbGljZSgwLCBjKTtcbiAgICAgICAgICAgIGxlbmd0aCArPSBjO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy90ZXh0ICs9IHAuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudDtcbiAgICAgICAgbGVuZ3RoICs9IHRhcmdldC5jaGlsZE5vZGVzW2ldLnRleHRDb250ZW50IS5sZW5ndGg7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGlubmVySFRNTFxuICAgIHRhcmdldC50ZXh0Q29udGVudCA9IHRhcmdldC50ZXh0Q29udGVudDtcblxuICAgIGxldCBjaGlsZCE6IENoaWxkTm9kZTtcbiAgICBsZXQgaTtcbiAgICBmb3IoaSA9IDA7IGkgPCB0YXJnZXQuY2hpbGROb2Rlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiggbGVuZ3RoIDw9IHRhcmdldC5jaGlsZE5vZGVzW2ldLnRleHRDb250ZW50IS5sZW5ndGggKSB7XG4gICAgICAgICAgICBjaGlsZCA9IHRhcmdldC5jaGlsZE5vZGVzW2ldO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbGVuZ3RoIC09IHRhcmdldC5jaGlsZE5vZGVzW2ldLnRleHRDb250ZW50IS5sZW5ndGg7XG4gICAgfVxuXG4gICAgaWYoIGNoaWxkLm5vZGVUeXBlICE9PSBOb2RlLlRFWFRfTk9ERSlcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5jaGlsZE5vZGVzWzBdO1xuXG4gICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpITtcblxuICAgIHJhbmdlLnNldFN0YXJ0KGNoaWxkLCBsZW5ndGgpO1xuICAgIHJhbmdlLmNvbGxhcHNlKHRydWUpO1xuICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBzZWwuYWRkUmFuZ2UocmFuZ2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEZvcm1hdCh2YWx1ZTogUmF3Q29udGVudFR5cGUsIHByZWM6IG51bGx8bnVtYmVyID0gbnVsbCkge1xuXG4gICAgLy9UT0RPLi4uXG5cbiAgICBpZiggdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKVxuICAgICAgICByZXR1cm4gYCR7K3ZhbHVlLnRvUHJlY2lzaW9uKDcpfWAucmVwbGFjZSgnLicsICcsJyk7XG5cbiAgICBpZiggdHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIilcbiAgICAgICAgcmV0dXJuIHZhbHVlID8gJ1ZSQUknIDogJ0ZBVVgnO1xuXG4gICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIik7XG4gICAgfVxuICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIEZvcm11bGEpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBwYXJzZUlucHV0KCBzdHI6IHN0cmluZyApOiBSYXdDb250ZW50VHlwZSB7XG5cbiAgICBpZihzdHIgPT09ICdWUkFJJylcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgaWYoc3RyID09PSAnRkFVWCcpXG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIGlmKHN0ci50cmltKCkgPT09ICcnKVxuICAgICAgICByZXR1cm4gc3RyO1xuXG4gICAgaWYoc3RyWzBdID09PSBcIj1cIikge1xuICAgICAgICByZXR1cm4gcGFyc2VfZm9ybXVsYShzdHIpO1xuICAgIH1cblxuICAgIGxldCB0ZXN0X251bWJlciA9IE51bWJlciggc3RyLnJlcGxhY2UoJywnLCAnLicpICk7XG4gICAgaWYoICEgTnVtYmVyLmlzTmFOKCB0ZXN0X251bWJlciApIClcbiAgICAgICAgcmV0dXJuIHRlc3RfbnVtYmVyO1xuXG4gICAgY29uc3QgcGFydHMgPSBzdHIuc3BsaXQoJy8nKTtcbiAgICBpZihwYXJ0cy5sZW5ndGggPD0gMykge1xuXG4gICAgICAgIGxldCB0ZXN0X2RhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgICtwYXJ0c1syXSA/PyBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICArcGFydHNbMV0tMSxcbiAgICAgICAgICAgICtwYXJ0c1swXVxuICAgICAgICApO1xuXG4gICAgICAgIGlmKCB0ZXN0X2RhdGUudG9TdHJpbmcoKSAhPT0gXCJJbnZhbGlkIERhdGVcIiApXG4gICAgICAgICAgICByZXR1cm4gdGVzdF9kYXRlO1xuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG59XG5cbmNsYXNzIFN0YXRlPFQ+IHtcblxuICAgICNzdGF0ZSA6IFR8bnVsbCA9IG51bGw7XG4gICAgI3RhcmdldDogRXZlbnRUYXJnZXQ7XG4gICAgI25hbWUgIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IodGFyZ2V0OiBFdmVudFRhcmdldCwgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuI3RhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy4jbmFtZSAgID0gbmFtZTtcbiAgICB9XG5cbiAgICBnZXQgc3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzdGF0ZTtcbiAgICB9XG5cbiAgICBzZXQgc3RhdGUoc3RhdGU6IFR8bnVsbCkge1xuXG4gICAgICAgIGlmKCB0aGlzLiNzdGF0ZSA9PT0gc3RhdGUpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgbGV0IHByZXZfc3RhdGUgPSB0aGlzLiNzdGF0ZTtcbiAgICAgICAgdGhpcy4jc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgXG5cbiAgICAgICAgaWYoIHByZXZfc3RhdGUgIT09IG51bGwpXG4gICAgICAgICAgICB0aGlzLiN0YXJnZXQuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KGAke3RoaXMuI25hbWV9X2VuZGAsIHtkZXRhaWw6IHByZXZfc3RhdGV9KSApOyAgICAgICAgICAgIFxuXG4gICAgICAgIGlmKCBzdGF0ZSAhPT0gbnVsbCApXG4gICAgICAgICAgICB0aGlzLiN0YXJnZXQuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KGAke3RoaXMuICNuYW1lfV9zdGFydGAsIHtkZXRhaWw6IHN0YXRlfSkgKTtcbiAgICB9XG59XG5cbmNvbnN0IFN0YXRlcyA9IHtcbiAgICBcImNlbGxfZWRpdFwiOiBTdGF0ZTxDZWxsPixcbiAgICBcInJlY29weVwiICAgOiBTdGF0ZTxDZWxsTGlzdD5cbiB9IGFzIGNvbnN0O1xuXG5leHBvcnQgY2xhc3MgQ2FsY1NoZWV0IGV4dGVuZHMgTElTUyh7XG4gICAgY3NzLFxuICAgIGF0dHJpYnV0ZXM6IFtcImNvbHNcIiwgXCJyb3dzXCIsIFwicm9cIl1cbn0pIHtcblxuICAgIHN0YXRlcyA9IE9iamVjdC5mcm9tRW50cmllcyggT2JqZWN0LmVudHJpZXMoU3RhdGVzKS5tYXAoIChbbixzXSkgPT4gW24sIG5ldyBzKHRoaXMuaG9zdCwgbildIGFzIGNvbnN0ICkpO1xuXG5cbiAgICAvL1RPRE86IFJPIHByb3AgP1xuICAgICNjdXJzb3IgICAgPSBuZXcgQ2VsbExpc3QodGhpcywgW10pO1xuICAgICNzZWxlY3Rpb246IENlbGxMaXN0ID0gbmV3IENlbGxMaXN0KHRoaXMsIFtdKTtcbiAgICAjcGxhZ2Vfc2VsZWN0b3IgPSBuZXcgUGxhZ2VTZWxlY3Rvcih0aGlzKTtcblxuICAgICNmb3JtYXRfbW5nciA9IG5ldyBGb3JtYXRNYW5hZ2VyKHRoaXMpO1xuXG4gICAgZ2V0IGN1cnNvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2N1cnNvcjtcbiAgICB9XG4gICAgZ2V0IHNlbGVjdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3NlbGVjdGlvbjtcbiAgICB9XG5cbiAgICBvdmVycmlkZSBnZXQgY29udGVudCgpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmNvbnRlbnQ7XG4gICAgfVxuXG4gICAgc2V0UmVjdCh0YXJnZXQ6IEhUTUxFbGVtZW50LCBbeCx5LHcsaF06IHJlYWRvbmx5IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdKSB7XG5cbiAgICAgICAgY29uc3QgdGJsX29mZnNldCA9IHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpIS5vZmZzZXRUb3A7XG5cbiAgICAgICAgdGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KCd0b3AnICAgLCBgJHt0Ymxfb2Zmc2V0ICsgeX1weGApO1xuICAgICAgICB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkoJ2hlaWdodCcsIGAke2h9cHhgKTtcblxuICAgICAgICB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkoJ2xlZnQnICAgLCBgJHt4fXB4YCk7XG4gICAgICAgIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eSgnd2lkdGgnLCBgJHt3fXB4YCk7XG5cbiAgICB9XG5cbiAgICBnZXRSZWN0KGNlbGxzOiBDZWxsTGlzdHxDZWxsW10pIHtcblxuICAgICAgICBjZWxscyA9IFwiY2VsbHNcIiBpbiBjZWxscyA/IGNlbGxzLmNlbGxzIDogY2VsbHM7XG5cbiAgICAgICAgY29uc3Qgc3RhcnQgPSBjZWxsc1swXTtcbiAgICAgICAgY29uc3QgZW5kICAgPSBjZWxsc1tjZWxscy5sZW5ndGgtMV07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgc3RhcnQub2Zmc2V0TGVmdCxcbiAgICAgICAgICAgIHN0YXJ0Lm9mZnNldFRvcCxcbiAgICAgICAgICAgIGVuZC5vZmZzZXRMZWZ0ICsgZW5kLmNsaWVudFdpZHRoIC0gc3RhcnQub2Zmc2V0TGVmdCxcbiAgICAgICAgICAgIGVuZC5vZmZzZXRUb3AgKyBlbmQuY2xpZW50SGVpZ2h0IC0gc3RhcnQub2Zmc2V0VG9wICsgMVxuICAgICAgICBdIGFzIGNvbnN0O1xuICAgIH1cblxuICAgIHJlbGF0aXZlVG8oY2VsbDogQ2VsbCwgcm93X2RpZmY6IG51bWJlciwgY29sX2RpZmY6IG51bWJlcikge1xuICAgICAgICBcbiAgICAgICAgbGV0IFtyb3csIGNvbF0gPSB0aGlzLmNlbGxQb3MoY2VsbCk7XG5cbiAgICAgICAgcm93ICs9IHJvd19kaWZmO1xuICAgICAgICBjb2wgKz0gY29sX2RpZmY7XG5cbiAgICAgICAgLy8gZm9yIG5vcm1hbCA6IGdldCBzdHVjayBpbnNpZGUgZ3JpZC5cbiAgICAgICAgaWYoIHJvdyA8IDEpXG4gICAgICAgICAgICByb3cgPSAxO1xuICAgICAgICBpZiggcm93ID49IHRoaXMuI3Rib2R5LmNoaWxkcmVuLmxlbmd0aCApXG4gICAgICAgICAgICByb3cgPSB0aGlzLiN0Ym9keS5jaGlsZHJlbi5sZW5ndGggLSAxO1xuXG4gICAgICAgIGlmKCBjb2wgPCAxKVxuICAgICAgICAgICAgY29sID0gMTtcbiAgICAgICAgaWYoIGNvbCA+PSB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuLmxlbmd0aCApXG4gICAgICAgICAgICBjb2wgPSB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW5bY29sXSBhcyBDZWxsO1xuICAgIH1cblxuICAgIC8vVE9ETzogMkQuLi5cbiAgICAjcGFzdGViaW46IENlbGxMaXN0IHwgbnVsbCA9IG51bGw7XG5cbiAgICAjZm9ybXVsYV9yZWZzID0gbmV3IEFycmF5PEZvcm11bGFSZWY+KCk7XG4gICAgI2dldEZvcm11bGFSZWYoaTogbnVtYmVyKSB7XG4gICAgICAgIHdoaWxlKCBpID49IHRoaXMuI2Zvcm11bGFfcmVmcy5sZW5ndGgpXG4gICAgICAgICAgICB0aGlzLiNmb3JtdWxhX3JlZnMucHVzaCggbmV3IEZvcm11bGFSZWYodGhpcykgKTtcblxuICAgICAgICByZXR1cm4gdGhpcy4jZm9ybXVsYV9yZWZzW2ldO1xuICAgIH1cbiAgICAjY2xlYXJGb3JtdWxhUmVmcygpIHtcbiAgICAgICAgZm9yKGxldCByZWYgb2YgdGhpcy4jZm9ybXVsYV9yZWZzKVxuICAgICAgICAgICAgcmVmLnNldFJhbmdlKG51bGwpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGNvbnN0IGN1cnNvciA9IG5ldyBSYW5nZU92ZXJsYXkodGhpcywgXCJjdXJzb3JcIik7XG4gICAgICAgIGNvbnN0IHJlY29weSA9IG5ldyBSZWNvcHlIYW5kbGUodGhpcyk7XG4gICAgICAgIGNvbnN0IGNvcHkgICA9IG5ldyBSYW5nZU92ZXJsYXkodGhpcywgXCJjb3B5X2hpZ2hsaWdodFwiKTtcblxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikhO1xuXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdjZWxsX2VkaXRfZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jY2xlYXJGb3JtdWxhUmVmcygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbGFzdF9yZWNvcHlfdGFyZ2V0OiBDZWxsfG51bGwgPSBudWxsO1xuICAgICAgICBsZXQgbGFzdF9yZWNvcHlfZGlyICAgOiBbbnVtYmVyLCBudW1iZXJdfG51bGwgPSBudWxsXG5cbiAgICAgICAgY29uc3Qgb25fcmVjb3B5X21vdmUgPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgbGV0IGNlbGxzID0gKHRoaXMuc3RhdGVzLnJlY29weS5zdGF0ZSBhcyBDZWxsTGlzdCkuY2VsbHM7XG4gICAgICAgICAgICBjb25zdCBzcmMgPSBjZWxsc1tjZWxscy5sZW5ndGgtMV07XG5cbiAgICAgICAgICAgIGxldCBwb3MgPSBzcmMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAgIGxldCBkX3B4ID0gZXYuY2xpZW50WCAtIChwb3MueCArIHBvcy53aWR0aCAvMik7XG4gICAgICAgICAgICBsZXQgZF9weSA9IGV2LmNsaWVudFkgLSAocG9zLnkgKyBwb3MuaGVpZ2h0LzIpO1xuXG4gICAgICAgICAgICBsZXQgZF94ID0gMDtcbiAgICAgICAgICAgIGxldCBkX3kgPSBNYXRoLnNpZ24oZF9weSk7XG5cbiAgICAgICAgICAgIGlmKCBNYXRoLmFicyhkX3B4KSA+IE1hdGguYWJzKGRfcHkpICkge1xuICAgICAgICAgICAgICAgIGRfeCA9IE1hdGguc2lnbihkX3B4KTtcbiAgICAgICAgICAgICAgICBkX3kgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcHJldiA9IHNyYztcbiAgICAgICAgICAgIGxldCBjdXIgID0gc3JjO1xuXG4gICAgICAgICAgICBsZXQgZGlmZl94LCBkaWZmX3k7XG5cbiAgICAgICAgICAgIGRvIHtcblxuICAgICAgICAgICAgICAgIHByZXY9IGN1cjtcbiAgICAgICAgICAgICAgICBjdXIgPSB0aGlzLnJlbGF0aXZlVG8ocHJldiwgZF95LCBkX3gpO1xuXG4gICAgICAgICAgICAgICAgaWYoIGN1ciA9PT0gcHJldilcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBsZXQgcG9zX2N1ciA9IGN1ci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICBkaWZmX3ggPSBldi5jbGllbnRYIC0gKHBvc19jdXIueCArIHBvc19jdXIud2lkdGggLzIpO1xuICAgICAgICAgICAgICAgIGRpZmZfeSA9IGV2LmNsaWVudFkgLSAocG9zX2N1ci55ICsgcG9zX2N1ci5oZWlnaHQvMik7XG5cbiAgICAgICAgICAgIH0gd2hpbGUoIGRpZmZfeCAqIGRfeCArIGRpZmZfeSAqIGRfeSA+IDAgKTtcblxuICAgICAgICAgICAgbGFzdF9yZWNvcHlfdGFyZ2V0ID0gcHJldjtcbiAgICAgICAgICAgIGxhc3RfcmVjb3B5X2RpciAgICA9IFtkX3gsZF95XTtcblxuICAgICAgICAgICAgbGV0IGJlZyA9IHNyYztcbiAgICAgICAgICAgIGxldCBlbmQgPSBwcmV2O1xuICAgICAgICAgICAgaWYoIHNyYy5vZmZzZXRMZWZ0ID4gcHJldi5vZmZzZXRMZWZ0IHx8IHNyYy5vZmZzZXRUb3AgPiBwcmV2Lm9mZnNldFRvcCApXG4gICAgICAgICAgICAgICAgW2JlZywgZW5kXSA9IFtlbmQsIGJlZ107XG5cbiAgICAgICAgICAgIC8vVE9ETzogaGlnaGxpZ2h0Li4uXG4gICAgICAgICAgICB0aGlzLiNjbGVhckZvcm11bGFSZWZzKCk7XG4gICAgICAgICAgICB0aGlzLiNnZXRGb3JtdWxhUmVmKDEpLnNldFJhbmdlKCB0aGlzLmdldFJhbmdlKGJlZywgZW5kKSApO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlY29weS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldikgPT4ge1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdGhpcy5zdGF0ZXMucmVjb3B5LnN0YXRlID0gdGhpcy4jc2VsZWN0aW9uO1xuXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25fcmVjb3B5X21vdmUpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IFtkX3gsIGRfeV0gPSAgbGFzdF9yZWNvcHlfZGlyITtcblxuICAgICAgICAgICAgICAgIGxldCBjZWxscyA9ICh0aGlzLnN0YXRlcy5yZWNvcHkuc3RhdGUgYXMgQ2VsbExpc3QpLmNlbGxzO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IGNlbGxzW2NlbGxzLmxlbmd0aC0xXTtcblxuICAgICAgICAgICAgICAgIGxldCBuYiA9IDA7XG5cbiAgICAgICAgICAgICAgICBpZiggbGFzdF9yZWNvcHlfdGFyZ2V0ICE9PSBzcmMpIHsgLy8gY29weS4uLlxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXIgPSBzcmM7XG4gICAgICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICsrbmI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ciA9IHRoaXMucmVsYXRpdmVUbyhjdXIsIGRfeSwgZF94KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQ6IFJhd0NvbnRlbnRUeXBlfENlbGwgPSBzcmM7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggdHlwZW9mIGNvbnRlbnQucmF3Q29udGVudCA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gKHNyYy5yYXdDb250ZW50IGFzIG51bWJlcikgKyBuYiooZF94ICsgZF95KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoIGNvbnRlbnQucmF3Q29udGVudCBpbnN0YW5jZW9mIERhdGUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IG5ldyBEYXRlKHNyYy5yYXdDb250ZW50IGFzIERhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuc2V0RGF0ZSggY29udGVudC5nZXREYXRlKCkgKyBuYiooZF94ICsgZF95KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDZWxsTGlzdCh0aGlzLCBbY3VyXSkuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXIuY2xhc3NOYW1lID0gc3JjLmNsYXNzTmFtZTsgLy9UT0RPOiBmb3JtYXQuLi5cblxuXG4gICAgICAgICAgICAgICAgICAgIH0gd2hpbGUoIGN1ciE9PSBsYXN0X3JlY29weV90YXJnZXQgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLiNjbGVhckZvcm11bGFSZWZzKCk7IC8vIHJlY29weVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVzLnJlY29weS5zdGF0ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGFzdF9yZWNvcHlfdGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBsYXN0X3JlY29weV9kaXIgICAgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIG1haW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbl9yZWNvcHlfbW92ZSk7XG5cbiAgICAgICAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdyZWNvcHlfc3RhcnQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgncmVjb3B5Jyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcigncmVjb3B5X2VuZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QucmVtb3ZlKCdyZWNvcHknKTtcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLiNjdXJzb3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGlmKCB0aGlzLiNjdXJzb3IubGVuZ3RoICE9PSAxIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1cnNvciBoYXMgaW52YWxpZCBudW1iZXIgb2YgY2VsbHMnKTtcblxuICAgICAgICAgICAgY3Vyc29yLnNldFJhbmdlKHRoaXMuI2N1cnNvcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI3NlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXYpID0+IHtcblxuICAgICAgICAgICAgZm9yKCBsZXQgY2VsbCBvZiB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZ2hsaWdodCcpIClcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpO1xuXG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IHRoaXMuI3NlbGVjdGlvbi5jZWxscztcblxuICAgICAgICAgICAgaWYoIGNlbGxzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGZvciggbGV0IGNlbGwgb2YgY2VsbHMgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggY2VsbHMubGVuZ3RoICE9PSAxKVxuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSB0aGlzLiNjZWxsUG9zKGNlbGwpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3Rib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuW2NvbF0uY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlY29weS5zZXRSYW5nZSh0aGlzLiNzZWxlY3Rpb24pO1xuXG4gICAgICAgICAgICAvLyBvbmx5IGlmIHNpbXBsZS4uLlxuICAgICAgICAgICAgLy8gY29uc3QgbGFzdCA9IGNlbGxzW2NlbGxzLmxlbmd0aC0xXTtcbiAgICAgICAgICAgIC8vIHBvaW50ZXIuLi5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9UT0RPOiBtb3ZlIG91dCA/XG4gICAgICAgIGNvbnN0IGZvcm11bGFfYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm11bGFfYmFyLmNsYXNzTGlzdC5hZGQoJ3Rvb2xiYXInKTtcblxuICAgICAgICAoIGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgcGxhZ2UgPSBhd2FpdCBMSVNTLmJ1aWxkKFwiY2FsYy1wbGFnZVwiKTtcbiAgICAgICAgICAgIHBsYWdlLnN5bmNUbyh0aGlzKTtcbiAgICAgICAgICAgIGZvcm11bGFfYmFyLmFwcGVuZCggcGxhZ2UuaG9zdCApO1xuXG4gICAgICAgICAgICBjb25zdCBmb3JtdWxhID0gYXdhaXQgTElTUy5idWlsZChcImNhbGMtZm9ybXVsYVwiKTtcbiAgICAgICAgICAgIGZvcm11bGEuc3luY1RvKHRoaXMpO1xuICAgICAgICAgICAgZm9ybXVsYV9iYXIuYXBwZW5kKCBmb3JtdWxhLmhvc3QgKTtcblxuICAgICAgICB9KSgpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKGZvcm11bGFfYmFyKTtcblxuICAgICAgICB0aGlzLiNpbml0R3JpZCgrdGhpcy5hdHRycy5yb3dzISwgK3RoaXMuYXR0cnMuY29scyEpO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldikgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIC8vIHRoZSBjZWxsIGlzIGJlaW5nIGVkaXRlZC4uLlxuICAgICAgICAgICAgaWYoIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSA9PT0gXCJURFwiICkge1xuXG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSB0YXJnZXQgYXMgQ2VsbDtcblxuICAgICAgICAgICAgICAgIGlmKFwiY2VsbFwiIGluIGNlbGwpIC8vIGZvciBtZXJnZWQgY2VsbHMuLi5cbiAgICAgICAgICAgICAgICAgICAgY2VsbCA9IGNlbGwuY2VsbCBhcyBDZWxsO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jY3Vyc29yLnJlcGxhY2VBbGwoY2VsbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vVE9ETzogbm90IGNvcnJlY3QuLi5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSA9PT0gXCJUSFwiICYmIHRhcmdldC50ZXh0Q29udGVudCAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdldENlbGxzKHRhcmdldC50ZXh0Q29udGVudCEpLmNlbGxzWzBdO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jY3Vyc29yLnJlcGxhY2VBbGwoY2VsbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCAoZXYpID0+IHtcblxuICAgICAgICAgICAgbGV0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lICE9PSBcIlREXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiggdGhpcy5hdHRycy5ybyAhPT0gXCJ0cnVlXCIgJiYgKHRhcmdldCBhcyBDZWxsKS5pc19ybyAhPT0gdHJ1ZSApIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQudG9nZ2xlQXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIHRhcmdldC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2OiBLZXlib2FyZEV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIGlmKCB0YXJnZXQgPT09IHRoaXMuI3Rib2R5ICkge1xuICAgICAgICAgICAgICAgIGlmKCBldi5jb2RlID09PSBcIktleVZcIiAmJiBldi5jdHJsS2V5ICYmIHRoaXMuI3Bhc3RlYmluICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLiNwYXN0ZWJpbi5jZWxscztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jc2VsZWN0aW9uLmNvbnRlbnQgPSBkYXRhO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvcHkgZm9ybWF0Li4uIFRPRE8gdXRpbGl0eSB0aGluZ3kuLi5cbiAgICAgICAgICAgICAgICAgICAgaWYoICEgZXYuc2hpZnRLZXkgfHwgISBldi5hbHRLZXkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcmMgPSB0aGlzLiNwYXN0ZWJpbi5jZWxscztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRzdCA9IHRoaXMuI3NlbGVjdGlvbi5jZWxscztcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7ICsraSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkc3RbaV0uY2xhc3NOYW1lID0gc3JjW2ldLmNsYXNzTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1RPRE86IGFkZCBmb3JtYXQuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiggKCBldi5rZXkgPT09IFwiY1wiIHx8IGV2LmtleSA9PT0gXCJ4XCIpICYmIGV2LmN0cmxLZXkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29weS5zZXRSYW5nZSh0aGlzLiNzZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAvLyBXSFkgPz8/XG4gICAgICAgICAgICAgICAgICAgIC8vaC5zdHlsZS5zZXRQcm9wZXJ0eSgndG9wJyAgICwgYCR7c2VsZWN0aW9uWzBdLm9mZnNldFRvcH1weGApO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3Bhc3RlYmluID0gdGhpcy4jc2VsZWN0aW9uLmRlZXBDbG9uZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKCBldi5rZXkgPT09IFwieFwiICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4jc2VsZWN0aW9uLmRlbGV0ZUZvcm1hdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4jc2VsZWN0aW9uLmRlbGV0ZUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiggZXYua2V5ID09PSBcIkNvbnRyb2xcIiB8fCBldi5rZXkgPT09IFwiU2hpZnRcIiB8fCBldi5rZXkgPT09IFwiQWx0XCIgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8gaWdub3JlXG4gICAgICAgICAgICAgICAgfSBpZiggZXYuY29kZSA9PT0gXCJEZWxldGVcIiApIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5kZWxldGVDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGlmKCBldi5jb2RlID09PSBcIkVudGVyXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZWQgZWxzZXdoZXJlXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKCBldi5jb2RlLnN0YXJ0c1dpdGgoJ0Fycm93JykgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXIgPSB0aGlzLmN1cnNvci5jZWxscztcbiAgICAgICAgICAgICAgICAgICAgaWYoIGN1ci5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGRfcm93ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRfY29sID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBpZiggZXYuY29kZSA9PT0gJ0Fycm93TGVmdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAtLWRfY29sO1xuICAgICAgICAgICAgICAgICAgICBpZiggZXYuY29kZSA9PT0gJ0Fycm93UmlnaHQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgKytkX2NvbDtcbiAgICAgICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09ICdBcnJvd1VwJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tZF9yb3c7XG4gICAgICAgICAgICAgICAgICAgIGlmKCBldi5jb2RlID09PSAnQXJyb3dEb3duJylcbiAgICAgICAgICAgICAgICAgICAgICAgICsrZF9yb3c7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHQ6IENlbGw7XG4gICAgICAgICAgICAgICAgICAgIGlmKCBldi5jdHJsS2V5ICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJldiAgID0gY3VyWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnNvciA9IHRoaXMucmVsYXRpdmVUbyhwcmV2LCBkX3JvdywgZF9jb2wpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggcHJldi5yYXdDb250ZW50ICE9PSB1bmRlZmluZWQgJiYgY3Vyc29yLnJhd0NvbnRlbnQgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUoIHByZXYgIT09IGN1cnNvciAmJiBjdXJzb3IucmF3Q29udGVudCAhPT0gdW5kZWZpbmVkKSB7IC8vIHdlIHJlYWNoZWQgdGhlIGVuZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldiAgID0gY3Vyc29yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSB0aGlzLnJlbGF0aXZlVG8ocHJldiwgZF9yb3csIGRfY29sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gcHJldjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUoIHByZXYgIT09IGN1cnNvciAmJiBjdXJzb3IucmF3Q29udGVudCA9PT0gdW5kZWZpbmVkKSB7IC8vIHdlIHJlYWNoZWQgdGhlIGVuZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldiAgID0gY3Vyc29yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSB0aGlzLnJlbGF0aXZlVG8ocHJldiwgZF9yb3csIGRfY29sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCA9IHRoaXMucmVsYXRpdmVUbyggY3VyWzBdLCBkX3JvdywgZF9jb2wpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jdGJvZHkuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJzb3IucmVwbGFjZUFsbChuZXh0KTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihldi5jdHJsS2V5KSB7IC8vIGlnbm9yZSBjdHJsXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7IC8vIHdlIHN0YXJ0IGVkaXRpbmcuLi5cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXIgPSB0aGlzLmN1cnNvci5jZWxscztcblxuICAgICAgICAgICAgICAgICAgICBpZiggY3VyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1clswXS5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJkYmxjbGlja1wiLCB7YnViYmxlczogdHJ1ZX0pICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJbMF0udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIHRhcmdldCAhPT0gdGhpcy4jdGJvZHkgJiYgZXYuY29kZSA9PT0gJ0VudGVyJyAmJiBldi5zaGlmdEtleSApXG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3IuXG5cbiAgICAgICAgICAgIGlmKGV2LmNvZGUgPT09IFwiRW50ZXJcIikgeyAvL1RPRE86IEVudGVyIGlzIGZvciBjdXJyZW50IHBsYWdlLi4uXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGN1ciA9IHRoaXMuY3Vyc29yLmNlbGxzO1xuICAgICAgICAgICAgICAgIGlmKCBjdXIubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBsZXQgW3Jvdyxjb2xdID0gdGhpcy5jZWxsUG9zKCBjdXJbMF0gKTtcblxuICAgICAgICAgICAgICAgICsrcm93O1xuICAgICAgICAgICAgICAgIGlmKCByb3cgPj0gdGhpcy4jdGJvZHkuY2hpbGRyZW4ubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICByb3cgPSAxO1xuICAgICAgICAgICAgICAgICAgICArK2NvbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoIGNvbCA+PSB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICAgICAgY29sID0gMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgbmV4dCA9IHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW5bY29sXSBhcyBDZWxsO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jdGJvZHkuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnNvci5yZXBsYWNlQWxsKG5leHQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgb25JbnB1dDIgPSAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNjbGVhckZvcm11bGFSZWZzKCk7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBpZihldi5kZXRhaWwgIT09IHRydWUpXG4gICAgICAgICAgICAgICAgb25JbnB1dChldik7XG4gICAgICAgIH1cblxuICAgICAgICAvL1RPRE86IGhlcmUuLi5cbiAgICAgICAgdGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCAoZXYpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgICAgICBjb3B5LnNldFJhbmdlKG51bGwpO1xuXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgIT09IFwiVERcIilcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGVzLmNlbGxfZWRpdC5zdGF0ZSA9IHRhcmdldCBhcyBDZWxsO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoXCJjZWxsX2VkaXRfc3RhcnRcIiwgKGV2OiBDdXN0b21FdmVudDxDZWxsPikgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LnRvZ2dsZShcImNlbGxfZWRpdFwiLCB0cnVlKTtcblxuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGV2LmRldGFpbDtcblxuICAgICAgICAgICAgaWYoY2VsbC5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSkge1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyID0gY2VsbC5yYXdDb250ZW50LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZ2VzID0gY2VsbC5yYXdDb250ZW50LnJhbmdlc1Rva2VuO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuOiAoc3RyaW5nfEhUTUxFbGVtZW50KVtdID0gW3N0cl07XG5cbiAgICAgICAgICAgICAgICBsZXQgcmFuZ2VzX2NvbG9yczogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHt9O1xuICAgICAgICAgICAgICAgIGxldCBjdXJfb2Zmc2V0ID0gMDtcblxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByYW5nZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0ciA9IGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aC0xXSBhcyBzdHJpbmc7XG5cbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoLTFdID0gc3RyLnNsaWNlKDAsIHJhbmdlc1tpXS5iZWcgLSBjdXJfb2Zmc2V0KTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5nZV9uYW1lID0gcmFuZ2VzW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiggISAocmFuZ2VfbmFtZSBpbiByYW5nZXNfY29sb3JzKSApXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZXNfY29sb3JzW3JhbmdlX25hbWVdID0gaSU4O1xuXG4gICAgICAgICAgICAgICAgICAgIHMuY2xhc3NMaXN0LmFkZCgnZm9ybXVsYV9oaWdobGlnaHQnLCBgaGlnaGxpZ2h0XyR7cmFuZ2VzX2NvbG9yc1tyYW5nZV9uYW1lXX1gKTsgLy9UT0RPLi4uXG4gICAgICAgICAgICAgICAgICAgIHMudGV4dENvbnRlbnQgPSByYW5nZXNbaV0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goIHMgKTsgLy8gcmFuZ2UuLi5cblxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKCBzdHIuc2xpY2UocmFuZ2VzW2ldLmVuZCAtIGN1cl9vZmZzZXQpICk7XG4gICAgICAgICAgICAgICAgICAgIGN1cl9vZmZzZXQgPSByYW5nZXNbaV0uZW5kO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNlbGwucmVwbGFjZUNoaWxkcmVuKCAuLi5jaGlsZHJlbiApO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZ2VzX25hbWVzID0gT2JqZWN0LmtleXMocmFuZ2VzX2NvbG9ycyk7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHJhbmdlc19uYW1lcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5nZSA9IHJhbmdlc19uYW1lc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVmID0gdGhpcy4jZ2V0Rm9ybXVsYVJlZihpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVmLnNldENvbG9yKCByYW5nZXNfY29sb3JzW3JhbmdlXSApO1xuICAgICAgICAgICAgICAgICAgICByZWYuc2V0UmFuZ2UoIHRoaXMuZ2V0Q2VsbHMocmFuZ2UpICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBvbklucHV0MiApOyAvLyByZW1vdmUgY29sb3JzLi4uXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBkZWZhdWx0Rm9ybWF0KGNlbGwucmF3Q29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKFwiY2VsbF9lZGl0X2VuZFwiLCAoZXY6IEN1c3RvbUV2ZW50PENlbGw+KSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QudG9nZ2xlKFwiY2VsbF9lZGl0XCIsIGZhbHNlKTtcblxuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGV2LmRldGFpbDtcblxuICAgICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgb25JbnB1dDIpOyAvLyB0byBiZSBzYWZlXG4gICAgICAgICAgICBjZWxsLnRvZ2dsZUF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcImxlYXZlIGVkaXRcIiwgY2VsbC50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICBuZXcgQ2VsbExpc3QodGhpcywgW2NlbGxdKS5jb250ZW50ID0gY2VsbC50ZXh0Q29udGVudCE7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICAgICAgICAvLyBsZWF2ZVxuICAgICAgICAgICAgdGhpcy4jc2VsZWN0aW9uLmNsZWFyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZXYgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSAhPT0gXCJURFwiKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5zdGF0ZXMuY2VsbF9lZGl0LnN0YXRlID0gbnVsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoIHRoaXMubmJSb3dzID49IDEgJiYgdGhpcy5uYkNvbHMgPj0gMSlcbiAgICAgICAgICAgIHRoaXMuY3Vyc29yLnJlcGxhY2VBbGwoIHRoaXMuZ2V0UmFuZ2UoXCJBMVwiKSApO1xuICAgIH1cblxuICAgIGNlbGxQb3MoY2VsbDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NlbGxQb3MoY2VsbCk7XG4gICAgfVxuXG4gICAgI2NlbGxQb3MoY2VsbDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQpIHtcblxuICAgICAgICBpZiggXCJwb3NcIiBpbiBjZWxsKVxuICAgICAgICAgICAgcmV0dXJuIGNlbGwucG9zIGFzIFtudW1iZXIsIG51bWJlcl07XG5cbiAgICAgICAgY29uc3QgY29sID0gWy4uLmNlbGwucGFyZW50RWxlbWVudCEuY2hpbGRyZW5dLmZpbmRJbmRleCggYyA9PiBjID09PSBjZWxsKTtcbiAgICAgICAgY29uc3Qgcm93ID0gWy4uLmNlbGwucGFyZW50RWxlbWVudCEucGFyZW50RWxlbWVudCEuY2hpbGRyZW5dLmZpbmRJbmRleCggciA9PiByID09PSBjZWxsLnBhcmVudEVsZW1lbnQhKTtcblxuICAgICAgICByZXR1cm4gW3JvdywgY29sXSBhcyBjb25zdDtcbiAgICB9XG5cbiAgICAjdGJvZHkhOiBIVE1MVGFibGVTZWN0aW9uRWxlbWVudDtcbiAgICBnZXQgdGJvZHkoKSB7IHJldHVybiB0aGlzLiN0Ym9keTsgfVxuXG4gICAgcmVzaXplKG5icm93czogbnVtYmVyLCBuYmNvbHM6IG51bWJlcikge1xuXG4gICAgICAgIGNvbnN0IGNvbF9odG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgY29sX2h0bWwuYXBwZW5kKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpICk7XG5cbiAgICAgICAgY29uc3QgdGJvZHkgPSB0aGlzLiN0Ym9keTtcbiAgICAgICAgdGJvZHkucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICAgICAgZm9yKGxldCBjb2wgPSAwOyBjb2wgPCAgbmJjb2xzIDsgKytjb2wpIHtcbiAgICAgICAgICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICAgICAgICAgIHRoLnRleHRDb250ZW50ID0gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGNvbCk7XG4gICAgICAgICAgICBjb2xfaHRtbC5hcHBlbmQodGgpO1xuICAgICAgICB9XG4gICAgICAgIHRib2R5LmFwcGVuZChjb2xfaHRtbCk7XG5cbiAgICAgICAgZm9yKGxldCByb3cgPSAwOyByb3cgPCBuYnJvd3M7ICsrcm93KSB7XG4gICAgICAgICAgICBjb25zdCByb3dfaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgICAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICB0aC50ZXh0Q29udGVudCA9IGAke3JvdysxfWA7XG4gICAgICAgICAgICByb3dfaHRtbC5hcHBlbmQodGgpO1xuXG4gICAgICAgICAgICBmb3IobGV0IGNvbCA9IDA7IGNvbCA8ICBuYmNvbHMgOyArK2NvbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpIGFzIENlbGw7XG4gICAgICAgICAgICAgICAgLy9jZWxsLnRvZ2dsZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJyk7XG4gICAgICAgICAgICAgICAgY2VsbC5mb3JtYXQgPSBkZWZhdWx0Rm9ybWF0O1xuICAgICAgICAgICAgICAgIHJvd19odG1sLmFwcGVuZCggY2VsbCApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGJvZHkuYXBwZW5kKHJvd19odG1sKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNpbml0R3JpZChuYnJvd3M6IG51bWJlciwgbmJjb2xzOiBudW1iZXIpIHtcblxuICAgICAgICBjb25zdCBpc19ybyA9IHRoaXMuYXR0cnMucm8gPT09IFwidHJ1ZVwiO1xuXG4gICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICAgICAgY29uc3QgdGJvZHkgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcbiAgICAgICAgdGhpcy4jdGJvZHkgPSB0Ym9keTtcblxuICAgICAgICBjb25zdCByZXNpemVPYnMgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaG9zdC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoJ3Jlc2l6ZScpICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXNpemVPYnMub2JzZXJ2ZSggdGhpcy5ob3N0ICk7XG5cbiAgICAgICAgdGhpcy4jdGJvZHkuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG5cbiAgICAgICAgdGhpcy5yZXNpemUobmJyb3dzLCBuYmNvbHMpO1xuXG4gICAgICAgIHRhYmxlLmFwcGVuZCh0Ym9keSk7XG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQodGFibGUpO1xuICAgIH1cblxuICAgIGdldFJhbmdlKGZyb206IENlbGx8c3RyaW5nfHJlYWRvbmx5W251bWJlcixudW1iZXJdLCB0bzogQ2VsbHxzdHJpbmd8cmVhZG9ubHlbbnVtYmVyLG51bWJlcl0gPSBmcm9tKTogQ2VsbExpc3Qge1xuXG4gICAgICAgIC8vIHByb2Nlc3MgcmVmcy4uLlxuICAgICAgICBpZiggZnJvbSBpbnN0YW5jZW9mIEhUTUxUYWJsZUNlbGxFbGVtZW50KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZ2UoIHRoaXMuY2VsbFBvcyhmcm9tKSwgdG8gKTtcbiAgICAgICAgaWYoIHRvIGluc3RhbmNlb2YgSFRNTFRhYmxlQ2VsbEVsZW1lbnQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSYW5nZSggZnJvbSwgdGhpcy5jZWxsUG9zKHRvKSApO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgZnJvbSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgaWYoIGZyb20uaW5jbHVkZXMoXCI6XCIpIClcbiAgICAgICAgICAgICAgICBbZnJvbSwgdG9dID0gZnJvbS5zcGxpdCgnOicpO1xuXG4gICAgICAgICAgICBmcm9tID0gdGhpcy5yZWYycG9zKGZyb20pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZ2UoIGZyb20sIHRvICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJhbmdlKCBmcm9tLCB0aGlzLnJlZjJwb3ModG8pICk7XG5cbiAgICAgICAgLy8gZ2V0IHJhbmdlXG5cbiAgICAgICAgbGV0IGJlZ19yb3cgPSBmcm9tWzBdIHx8IDE7XG4gICAgICAgIGxldCBiZWdfY29sID0gZnJvbVsxXSB8fCAxO1xuXG4gICAgICAgIGxldCBlbmRfcm93ID0gZnJvbVswXSA9PT0gMCA/IHRoaXMubmJSb3dzIDogdG9bMF07XG4gICAgICAgIGxldCBlbmRfY29sID0gZnJvbVsxXSA9PT0gMCA/IHRoaXMubmJDb2xzIDogdG9bMV07XG5cbiAgICAgICAgaWYoIGVuZF9yb3cgPCBiZWdfcm93IClcbiAgICAgICAgICAgIFtiZWdfcm93LCBlbmRfcm93XSA9IFtlbmRfcm93LCBiZWdfcm93XTtcbiAgICAgICAgaWYoIGVuZF9jb2wgPCBiZWdfY29sIClcbiAgICAgICAgICAgIFtiZWdfY29sLCBlbmRfY29sXSA9IFtlbmRfY29sLCBiZWdfY29sXTtcblxuICAgICAgICBjb25zdCBjZWxscyA9IG5ldyBBcnJheTxDZWxsPiggKGVuZF9yb3cgLSBiZWdfcm93ICsgMSkgKiAoZW5kX2NvbCAtIGJlZ19jb2wgKyAxKSApO1xuXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBmb3IobGV0IGkgPSBiZWdfcm93OyBpIDw9IGVuZF9yb3c7ICsraSApXG4gICAgICAgICAgICBmb3IobGV0IGogPSBiZWdfY29sOyBqIDw9IGVuZF9jb2w7ICsraiApXG4gICAgICAgICAgICAgICAgY2VsbHNbb2Zmc2V0KytdID0gdGhpcy50Ym9keS5jaGlsZHJlbltpXS5jaGlsZHJlbltqXSBhcyBDZWxsO1xuXG4gICAgICAgIHJldHVybiBuZXcgQ2VsbExpc3QodGhpcywgY2VsbHMpO1xuICAgIH1cblxuICAgIGdldENlbGxzKGNlbGw6IHN0cmluZyk6IENlbGxMaXN0O1xuICAgIGdldENlbGxzKHJvd19pZDogbnVtYmVyLCBjb2xfaWQ6IG51bWJlcik6IENlbGxMaXN0O1xuICAgIGdldENlbGxzKGNlbGxfb3Jfcm93aWQ6IG51bWJlcnxzdHJpbmcsIGNvbF9pZD86IG51bWJlcikge1xuXG4gICAgICAgIGxldCByb3dfaWQgPSBjZWxsX29yX3Jvd2lkO1xuICAgICAgICBpZiggdHlwZW9mIGNlbGxfb3Jfcm93aWQgPT09IFwic3RyaW5nXCIpIHtcblxuICAgICAgICAgICAgY2VsbF9vcl9yb3dpZCA9IGNlbGxfb3Jfcm93aWQucmVwbGFjZUFsbCgnJCcsICcnKTtcblxuICAgICAgICAgICAgaWYoIGNlbGxfb3Jfcm93aWQuaW5jbHVkZXMoJzonKSApIHsvLyByYW5nZVxuXG4gICAgICAgICAgICAgICAgbGV0IFtiZWcsIGVuZF0gPSBjZWxsX29yX3Jvd2lkLnNwbGl0KCc6Jyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBiX3Jvd19pZCA9ICtiZWdbMV07XG4gICAgICAgICAgICAgICAgY29uc3QgYl9jb2xfaWQgPSBiZWcuY2hhckNvZGVBdCgwKSArIDEgLSA2NTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGVfcm93X2lkID0gK2VuZFsxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBlX2NvbF9pZCA9IGVuZC5jaGFyQ29kZUF0KDApICsgMSAtIDY1O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbHMgPSBuZXcgQXJyYXkoIChlX2NvbF9pZC1iX2NvbF9pZCkgKiAoZV9yb3dfaWQgLSBiX3Jvd19pZCkgKTtcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgICAgICAgICBmb3IobGV0IHIgPSBiX3Jvd19pZDsgciA8PSAgZV9yb3dfaWQ7ICsrcilcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBjID0gYl9jb2xfaWQ7IGMgPD0gIGVfY29sX2lkOyArK2MpXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tvZmZzZXQrK10gPSB0aGlzLiN0Ym9keS5jaGlsZHJlbltyXS5jaGlsZHJlbltjXSBhcyBDZWxsO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDZWxsTGlzdCh0aGlzLCBjZWxscyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHRoaXMgaXMgYSBmdWxsIGxpbmUuLi5cbiAgICAgICAgICAgIGlmKCBjZWxsX29yX3Jvd2lkWzBdID49ICcwJyAmJiBjZWxsX29yX3Jvd2lkWzBdIDw9ICc5JyApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDZWxscyhgQSR7Y2VsbF9vcl9yb3dpZH06JHt0aGlzLnBvczJyZWYoK2NlbGxfb3Jfcm93aWQsIHRoaXMubmJDb2xzKX1gKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiggY2VsbF9vcl9yb3dpZFtjZWxsX29yX3Jvd2lkLmxlbmd0aC0xXSA8ICcwJyB8fCBjZWxsX29yX3Jvd2lkW2NlbGxfb3Jfcm93aWQubGVuZ3RoLTFdID4gJzknICkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybiggYCR7Y2VsbF9vcl9yb3dpZH0xOiR7Y2VsbF9vcl9yb3dpZH0ke3RoaXMubmJSb3dzfWAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDZWxscyhgJHtjZWxsX29yX3Jvd2lkfTE6JHtjZWxsX29yX3Jvd2lkfSR7dGhpcy5uYlJvd3N9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJvd19pZCA9ICtjZWxsX29yX3Jvd2lkWzFdO1xuICAgICAgICAgICAgY29sX2lkID0gY2VsbF9vcl9yb3dpZC5jaGFyQ29kZUF0KDApICsgMSAtIDY1O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuI3Rib2R5LmNoaWxkcmVuWytyb3dfaWRdLmNoaWxkcmVuW2NvbF9pZCFdIGFzIENlbGw7XG4gICAgICAgIHJldHVybiBuZXcgQ2VsbExpc3QodGhpcywgW2NlbGxdKTtcbiAgICB9XG5cbiAgICByZWYycG9zKHJlZjogc3RyaW5nKTogW251bWJlciwgbnVtYmVyXSB7XG4gICAgICAgIC8vVE9ETy4uLlxuICAgICAgICBjb25zdCByb3cgPSArcmVmW3JlZi5sZW5ndGggLSAxXTtcbiAgICAgICAgY29uc3QgY29sID0gcmVmLmNoYXJDb2RlQXQoMCkgLSA2NSArIDE7XG5cbiAgICAgICAgcmV0dXJuIFtyb3csIGNvbF07XG4gICAgfVxuICAgIHBvczJyZWYocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1K2NvbC0xKX0ke3Jvd31gO1xuICAgIH1cbiAgICBnZXQgbmJSb3dzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jdGJvZHkuY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgZ2V0IG5iQ29scygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Rib2R5LmZpcnN0RWxlbWVudENoaWxkIS5jaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgICNpc1VwZGF0aW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiggdGhpcy4jaXNVcGRhdGluZyA9PT0gdHJ1ZSApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuI2lzVXBkYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgY2VsbHMgPSB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbDxDZWxsPigndGQnKTtcbiAgICAgICAgICAgIGZvcihsZXQgY2VsbCBvZiBjZWxscykge1xuXG4gICAgICAgICAgICAgICAgaWYoIGNlbGwucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEgKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGNlbGwucmF3Q29udGVudC5leGVjKHRoaXMpOyAvL1RPRE8uLi5cblxuICAgICAgICAgICAgICAgICAgICAvL1RPRE86IGZhY3Rvcml6ZS4uLlxuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZTogc3RyaW5nID0gdHlwZW9mIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBEYXRlIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IChjZWxsIGFzIGFueSkuZm9ybWF0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4jaXNVcGRhdGluZyA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENlbGxMaXN0IGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuXG4gICAgI3NoZWV0OiBDYWxjU2hlZXQ7XG4gICAgI2NlbGxzOiBDZWxsW107XG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCwgY2VsbHM6IENlbGxbXSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLiNjZWxscyA9IGNlbGxzO1xuICAgICAgICB0aGlzLiNzaGVldCA9IHNoZWV0O1xuICAgIH1cblxuICAgIGdldCBwbGFnZV9uYW1lKCkge1xuXG4gICAgICAgIGlmKCB0aGlzLiNjZWxscy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgaWYoIHRoaXMuI2NlbGxzLmxlbmd0aCA9PT0gMSApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4jc2hlZXQucG9zMnJlZiggLi4udGhpcy4jc2hlZXQuY2VsbFBvcyh0aGlzLiNjZWxsc1swXSkgKTtcblxuICAgICAgICBsZXQgY2VsbHMgPSB0aGlzLiNjZWxscy5tYXAoIGMgPT4gdGhpcy4jc2hlZXQuY2VsbFBvcyhjKSApLnNvcnQoIChhLGIpID0+IHtcbiAgICAgICAgICAgIGlmKCBhWzBdICE9PSBiWzBdIClcbiAgICAgICAgICAgICAgICByZXR1cm4gYVswXSAtIGJbMF07XG4gICAgICAgICAgICByZXR1cm4gYVsxXSAtIGJbMV07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtaW4gPSBjZWxsc1swXTtcbiAgICAgICAgbGV0IG1heCA9IGNlbGxzW2NlbGxzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIGxldCBuYl9jb2xzID0gbWF4WzFdIC0gbWluWzFdICsgMTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICBpZiggY2VsbHNbaV1bMF0gIT09IE1hdGguZmxvb3IoaS9uYl9jb2xzKSttaW5bMF0gJiYgY2VsbHNbaV1bMV0gIT09IChpJW5iX2NvbHMpKyBtaW5bMV0gKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICByZXR1cm4gYCR7dGhpcy4jc2hlZXQucG9zMnJlZiguLi5taW4pfToke3RoaXMuI3NoZWV0LnBvczJyZWYoLi4ubWF4KX1gO1xuICAgIH1cblxuICAgIGdldCBjZWxscygpOiBDZWxsW10ge1xuICAgICAgICByZXR1cm4gdGhpcy4jY2VsbHM7XG4gICAgfVxuICAgIGdldCBzaGVldCgpOiBDYWxjU2hlZXQge1xuICAgICAgICByZXR1cm4gdGhpcy4jc2hlZXQ7XG4gICAgfVxuXG4gICAgdG9nZ2xlRm9ybWF0KG5hbWU6IHN0cmluZ3woKHY6IGFueSwgcHJlYzogbnVtYmVyfG51bGwpID0+IHN0cmluZykgKSB7XG4gICAgICAgIGxldCBmID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQodGhpcyk7XG5cbiAgICAgICAgaWYoIHR5cGVvZiBuYW1lID09PSBcImZ1bmN0aW9uXCIpIHtcblxuICAgICAgICAgICAgbGV0IGlzRm9ybWF0ID0gZi5nZXRQcm9wZXJ0eShcImZvcm1hdFwiKSA9PT0gbmFtZTtcblxuICAgICAgICAgICAgdGhpcy5mb3JtYXQoe2Zvcm1hdDogaXNGb3JtYXQgPyBudWxsIDogbmFtZSB9KTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mb3JtYXQoe1tuYW1lXTogZi5nZXRQcm9wZXJ0eShuYW1lKSAhPT0gdHJ1ZX0pO1xuICAgIH1cblxuICAgIGZvcm1hdCguLi5mOiAoKCAodjogYW55LCBwcmVjOiBudW1iZXJ8bnVsbCkgPT4gc3RyaW5nICl8c3RyaW5nfEZvcm1hdHxSZWNvcmQ8c3RyaW5nLCBhbnk+KVtdKSB7XG5cbiAgICAgICAgaWYoIGYubGVuZ3RoID4gMSApIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9UT0RPLi4uLlxuICAgICAgICAgICAgZiA9IE9iamVjdC5mcm9tRW50cmllcyggZi5tYXAoIGUgPT4gW2UsIHRydWVdICkgKTtcblxuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIGYgPSBmWzBdO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgZiA9PT0gXCJmdW5jdGlvblwiIClcbiAgICAgICAgICAgIGYgPSB7XCJmb3JtYXRcIjogZn07XG5cbiAgICAgICAgaWYodHlwZW9mIGYgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgZiA9IHtbZl06IHRydWV9O1xuXG4gICAgICAgIGlmKCAhIChmIGluc3RhbmNlb2YgRm9ybWF0KSApXG4gICAgICAgICAgICBmID0gbmV3IEZvcm1hdChmKTtcblxuICAgICAgICBmLmFwcGx5VG8odGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0IGNvbnRlbnQoKTogKFJhd0NvbnRlbnRUeXBlKVtdIHtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBuZXcgQXJyYXkodGhpcy4jY2VsbHMubGVuZ3RoKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuI2NlbGxzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgY29udGVudFtpXSA9IHRoaXMuI2NlbGxzW2ldLnJhd0NvbnRlbnQhO1xuXG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH1cblxuICAgIGRlbGV0ZUZvcm1hdCgpIHtcbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIHRoaXMuI2NlbGxzKSAvL1RPRE8gYWRkIGhvYyBmb3JtYXQuLi5cbiAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gJyc7XG4gICAgfVxuXG4gICAgZGVsZXRlQ29udGVudCgpIHtcblxuICAgICAgICBmb3IobGV0IGNlbGwgb2YgdGhpcy4jY2VsbHMpIHtcbiAgICAgICAgICAgIGNlbGwucmF3Q29udGVudCA9IHVuZGVmaW5lZCBhcyBhbnk7XG4gICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXR5cGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NoZWV0LnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHNldCBjb250ZW50KGNvbnRlbnQ6IENlbGx8UmF3Q29udGVudFR5cGV8KFJhd0NvbnRlbnRUeXBlfENlbGwpW10pIHtcblxuICAgICAgICBpZiggQXJyYXkuaXNBcnJheShjb250ZW50KSApIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb250ZW50Lmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgIG5ldyBDZWxsTGlzdCh0aGlzLiNzaGVldCwgW3RoaXMuI2NlbGxzW2ldXSApLmNvbnRlbnQgPSBjb250ZW50W2ldO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiggdHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgY29udGVudCA9IHBhcnNlSW5wdXQoY29udGVudCk7XG5cbiAgICAgICAgbGV0IHJhd192YWwgPSBjb250ZW50IGluc3RhbmNlb2YgSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPyBjb250ZW50LnJhd0NvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjb250ZW50O1xuXG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiB0aGlzLiNjZWxscykge1xuXG4gICAgICAgICAgICBpZihjb250ZW50IGluc3RhbmNlb2YgSFRNTFRhYmxlQ2VsbEVsZW1lbnQgJiYgY29udGVudC5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSApIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCB2ID0gY29udGVudC5yYXdDb250ZW50O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZHN0ID0gdGhpcy4jc2hlZXQuY2VsbFBvcyggY2VsbCApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IHRoaXMuI3NoZWV0LmNlbGxQb3MoY29udGVudClcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBbIGRzdFswXSAtIHNyY1swXSwgZHN0WzFdIC0gc3JjWzFdXSBhcyBjb25zdDtcblxuICAgICAgICAgICAgICAgIHJhd192YWwgPSB2LnJlbGF0aXZlVG8oIHRoaXMuI3NoZWV0LCAuLi5kaWZmICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNlbGwucmF3Q29udGVudCA9IHJhd192YWw7XG5cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHJhd192YWw7XG4gICAgICAgICAgICBpZiggcmF3X3ZhbCBpbnN0YW5jZW9mIEZvcm11bGEpXG4gICAgICAgICAgICAgICAgdmFsdWUgPSByYXdfdmFsLmV4ZWModGhpcy4jc2hlZXQpOyAvL1RPRE8uLi5cblxuICAgICAgICAgICAgbGV0IHR5cGU6IHN0cmluZyA9IHR5cGVvZiB2YWx1ZTtcbiAgICAgICAgICAgIGlmKCB0eXBlID09PSBcIm9iamVjdFwiICYmIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSApXG4gICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIjtcblxuICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IChjZWxsIGFzIGFueSkuZm9ybWF0KHZhbHVlKTtcbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCB0eXBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NoZWV0LnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHNldFJPKGlzX3JvOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBmb3IobGV0IGNlbGwgb2YgdGhpcy4jY2VsbHMpXG4gICAgICAgICAgICBjZWxsLmlzX3JvID0gaXNfcm87XG4gICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjZWxscy5sZW5ndGg7XG4gICAgfVxuXG4gICAgaGFzKC4uLmNlbGxzOiBDZWxsW10pIHtcbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIGNlbGxzKVxuICAgICAgICAgICAgaWYoICEgdGhpcy4jY2VsbHMuaW5jbHVkZXMoY2VsbCkgKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmVtb3ZlKC4uLmNlbGxzOiBDZWxsW10pIHtcbiAgICAgICAgdGhpcy4jY2VsbHMgPSB0aGlzLiNjZWxscy5maWx0ZXIoIGMgPT4gISBjZWxscy5pbmNsdWRlcyhjKSApO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSApO1xuICAgIH1cblxuICAgIHJlcGxhY2VBbGwoLi4uY2VsbHM6IENlbGxbXXxbQ2VsbExpc3RdKSB7XG4gICAgICAgIHRoaXMuI2NlbGxzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuYWRkKC4uLmNlbGxzKTtcbiAgICB9XG5cbiAgICBhZGQoLi4uY2VsbHM6IENlbGxbXXxbQ2VsbExpc3RdKSB7XG5cbiAgICAgICAgaWYoIGNlbGxzWzBdIGluc3RhbmNlb2YgQ2VsbExpc3QpXG4gICAgICAgICAgICBjZWxscyA9IGNlbGxzWzBdLmNlbGxzO1xuXG4gICAgICAgIHRoaXMuI2NlbGxzLnB1c2goLi4uY2VsbHMgYXMgQ2VsbFtdKTtcblxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSApO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLiNjZWxscy5sZW5ndGggPSAwO1xuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpICk7XG4gICAgfVxuXG5cbiAgICBkZWVwQ2xvbmUoKSB7XG5cbiAgICAgICAgbGV0IGNlbGxzID0gdGhpcy4jY2VsbHMubWFwKCBjID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNsb25lID0gYy5jbG9uZU5vZGUodHJ1ZSkgYXMgQ2VsbDtcblxuICAgICAgICAgICAgY2xvbmUucmF3Q29udGVudCA9IGMucmF3Q29udGVudDtcbiAgICAgICAgICAgIGNsb25lLmZvcm1hdCAgICAgPSBjLmZvcm1hdDtcbiAgICAgICAgICAgIChjbG9uZSBhcyBhbnkpLnBvcyAgICAgICAgPSB0aGlzLiNzaGVldC5jZWxsUG9zKGMpO1xuXG4gICAgICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIG5ldyBDZWxsTGlzdCh0aGlzLiNzaGVldCwgY2VsbHMpO1xuICAgIH1cbn1cblxuLy9UT0RPLi4uXG5pbXBvcnQgXCIuL2Zvcm11bGFfZWRpdG9yXCI7XG5pbXBvcnQgXCIuL3BsYWdlX2VkaXRvclwiO1xuaW1wb3J0IHsgRm9ybXVsYSwgcGFyc2VfZm9ybXVsYSB9IGZyb20gXCIuL2Zvcm11bGFfcGFyc2VyXCI7XG5pbXBvcnQgeyBQbGFnZVNlbGVjdG9yIH0gZnJvbSBcIi4vcGxhZ2Vfc2VsZWN0b3JcIjtcbmltcG9ydCB7IEZvcm1hdCwgRm9ybWF0TWFuYWdlciB9IGZyb20gXCIuL2Zvcm1hdFwiO1xuaW1wb3J0IHsgRm9ybXVsYVJlZiwgUmFuZ2VPdmVybGF5LCBSZWNvcHlIYW5kbGUgfSBmcm9tIFwiLi9SYW5nZU92ZXJsYXlcIjtcblxuTElTUy5kZWZpbmUoJ2NhbGMtc2hlZXQnLCBDYWxjU2hlZXQpOyIsImV4cG9ydCBkZWZhdWx0IFtcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIlIgMS0wMSBUYWJsZXVyIGV0IFJlcG9ydGluZ1wiLFxuICAgICAgICBzbmFtZTogXCJSMS0wMSBUYWJsZXVyXCIsXG4gICAgICAgIHBhdGggOiBcIlIxLTAxXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJDTVwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiQ01cIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIkNNMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIkNNMlwiXG4gICAgICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiVFBcIixcbiAgICAgICAgICAgICAgICBwYXRoOiBcIlRQXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgXCJUUDFcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lIDogXCJSIDEtMDIgQmFzZXMgZGUgRG9ubsOpZXMgUmVsYXRpb25uZWxsZXMgMVwiLFxuICAgICAgICBzbmFtZTogXCJSMS0wMiBCRFIxXCIsXG4gICAgICAgIHBhdGggOiBcIlIxLTAyXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBcIkNNXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJUUFwiICxcbiAgICAgICAgICAgICAgICBwYXRoIDogXCJUUFwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiVFAxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFAyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFAzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFA0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFA1XCJcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG5dO1xuXG5leHBvcnQgY29uc3Qgcm9vdF9wYXRoID0gW1wibG9jYWxob3N0XCIsIFwiMTI3LjAuMC4xXCJdLmluY2x1ZGVzKGxvY2F0aW9uLmhvc3RuYW1lKSA/IFwiL2Rpc3QvZGV2L3BhZ2VzL1wiIDogXCIvQ291cnMvZGlzdC9kZXYvcGFnZXMvXCI7IiwiXG5pbXBvcnQgcGFnZXMsIHtyb290X3BhdGh9IGZyb20gXCIuL2NvbnRlbnRcIjtcblxuLypcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmVwcmludCcsICgpID0+IHtcbiAgLy8uLi5cbn0pO1xuKi9cblxuLy9UT0RPOiBsaW5rcy4uLlxuY29uc3QgbWFpbiAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikhO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKSE7XG5cbmNvbnN0IHRpdGxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFwiaDEsIGgyLCBoMywgaDRcIik7XG5cbnR5cGUgTm9kZSA9IHtcbiAgICBodG1sICAgIDogSFRNTEVsZW1lbnQsXG4gICAgbGV2ZWwgICA6IG51bWJlcixcbiAgICBwYXJlbnQgIDogbnVsbHxOb2RlLFxuICAgIGNoaWxkcmVuOiBOb2RlW11cbn07XG5cbmNvbnN0IGh0cmVlOiBOb2RlID0ge1xuICAgIGh0bWwgICAgOiBtYWluLFxuICAgIGxldmVsICAgOiAwLFxuICAgIHBhcmVudCAgOiBudWxsLFxuICAgIGNoaWxkcmVuOiBbXSxcbn07XG5sZXQgaHRyZWVfY3Vyc29yID0gaHRyZWU7XG5mb3IobGV0IHRpdGxlIG9mIHRpdGxlcykge1xuICAgIGNvbnN0IGxldmVsID0gK3RpdGxlLnRhZ05hbWUuc2xpY2UoMSk7XG4gICAgXG4gICAgd2hpbGUoIGxldmVsIDw9IGh0cmVlX2N1cnNvci5sZXZlbCApXG4gICAgICAgIGh0cmVlX2N1cnNvciA9IGh0cmVlX2N1cnNvci5wYXJlbnQhO1xuXG4gICAgY29uc3QgZWxlbTogTm9kZSA9IHtcbiAgICAgICAgaHRtbDogdGl0bGUsXG4gICAgICAgIGxldmVsLFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgIHBhcmVudDogaHRyZWVfY3Vyc29yXG4gICAgfTtcblxuXG4gICAgaHRyZWVfY3Vyc29yLmNoaWxkcmVuLnB1c2goZWxlbSk7XG5cbiAgICBodHJlZV9jdXJzb3IgPSBlbGVtO1xufVxuXG5mdW5jdGlvbiBzZWFyY2hDdXJIZWFkZXIoaHRyZWU6IE5vZGUsIHBvc2l0aW9uOiBudW1iZXIpOiBudWxsIHwgTm9kZSB7XG5cbiAgICBjb25zdCBoZWFkZXJzID0gaHRyZWUuY2hpbGRyZW47XG5cbiAgICBmb3IobGV0IGkgPSBoZWFkZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKVxuICAgICAgICBpZiggaGVhZGVyc1tpXS5odG1sLm9mZnNldFRvcCA8PSBwb3NpdGlvbiArIDMyIClcbiAgICAgICAgICAgIHJldHVybiBzZWFyY2hDdXJIZWFkZXIoaGVhZGVyc1tpXSwgcG9zaXRpb24pID8/IGhlYWRlcnNbaV07XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuY29uc3QgaGlkID0gW1xuICAgIFtdLFxuICAgIFtcIklcIiwgXCJJSVwiLCBcIklJSVwiLCBcIklWXCJdLFxuICAgIFtcIjFcIiwgXCIyXCIsXCIzXCIsXCI1XCIsXCI2XCIsXCI3XCIsXCI4XCIsXCI5XCJdLFxuICAgIFtcImFcIiwgXCJiXCIsXCJjXCIsXCJkXCIsXCJlXCIsXCJmXCIsXCJnXCIsXCJoXCJdLFxuXVxuXG5mdW5jdGlvbiBnZXRUaXRsZVByZWZpeChzOiBOb2RlKSB7XG5cbiAgICBpZiggcy5sZXZlbCA+PSBoaWQubGVuZ3RoIClcbiAgICAgICAgcmV0dXJuIFwiXCI7XG5cbiAgICBjb25zdCBpZHggPSBzLnBhcmVudCEuY2hpbGRyZW4uaW5kZXhPZihzKTtcblxuICAgIGNvbnN0IG51bSA9IGhpZFtzLmxldmVsXVtpZHhdO1xuXG4gICAgcmV0dXJuIGAke251bX0uIGA7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTWVudShub2RlczogTm9kZVtdKSB7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuXG4gICAgbWVudS5hcHBlbmQoIC4uLiBub2Rlcy5tYXAoIChzLGlkeCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGl0ZW0udGV4dENvbnRlbnQ9IGAke2dldFRpdGxlUHJlZml4KHMpfSR7cy5odG1sLnRleHRDb250ZW50fWA7XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBgIyR7cy5odG1sLmlkfWApO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9KSApO1xuXG4gICAgcmV0dXJuIG1lbnU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUhlYWRlcigpIHtcblxuICAgIGNvbnN0IGxhc3QgPSBzZWFyY2hDdXJIZWFkZXIoIGh0cmVlLCBtYWluLnNjcm9sbFRvcCkhO1xuXG4gICAgbGV0IGhlYWRlcnMgPSBbXTtcbiAgICBsZXQgY3Vyc29yICA9IGxhc3Q7XG5cbiAgICB3aGlsZShjdXJzb3IuaHRtbCAhPT0gbWFpbikge1xuICAgICAgICBoZWFkZXJzLnB1c2goY3Vyc29yKTtcbiAgICAgICAgY3Vyc29yID0gY3Vyc29yLnBhcmVudCE7XG4gICAgfVxuXG4gICAgY29uc3QgaHRtbCA9IGhlYWRlcnMucmV2ZXJzZSgpLm1hcCggKGhub2RlLGkpID0+IHtcblxuICAgICAgICBjb25zdCBoID0gaG5vZGUuaHRtbDtcbiAgICAgICAgY29uc3QgaF9odG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gYCR7Z2V0VGl0bGVQcmVmaXgoaG5vZGUpfSR7aC50ZXh0Q29udGVudH1gO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGAjJHtoLmlkfWApO1xuXG4gICAgICAgIGNvbnN0IG1lbnUgPSBidWlsZE1lbnUoaG5vZGUucGFyZW50IS5jaGlsZHJlbik7XG4gICAgICAgIGhfaHRtbC5hcHBlbmQobGluaywgbWVudSk7XG5cbiAgICAgICAgcmV0dXJuIGhfaHRtbDtcbiAgICB9KTtcblxuICAgIGlmKCBsYXN0LmNoaWxkcmVuLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBjb25zdCBlbXB0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgICAgIGVtcHR5LmFwcGVuZCggYnVpbGRNZW51KGxhc3QuY2hpbGRyZW4pICk7XG5cbiAgICAgICAgaHRtbC5wdXNoKGVtcHR5KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VfcGFnZV9ocmVmKHBhdGhwcmVmaXg6IHN0cmluZywgcGF0aDogc3RyaW5nLCBkZXNjOiBhbnkpIHtcblxuICAgICAgICBsZXQgaHJlZiA9IGAke3BhdGhwcmVmaXh9JHtwYXRofS9gO1xuXG4gICAgICAgIHdoaWxlKGRlc2MuY2hpbGRyZW4/Lmxlbmd0aCkge1xuICAgICAgICAgICAgZGVzYyA9IGRlc2MuY2hpbGRyZW5bMF07XG4gICAgICAgICAgICBocmVmICs9IGAke2Rlc2MucGF0aCA/PyBkZXNjfS9gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGhyZWY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZV9wYWdlX21lbnUocGF0aHByZWZpeDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHBhZ2VzOiBhbnkpIHtcbiAgICAgICAgY29uc3QgZGVzYyA9IHBhZ2VzLmZpbmQoIChwYWdlOiBhbnkpID0+IHBhZ2UgPT09IHBhdGggfHwgcGFnZS5wYXRoID09PSBwYXRoICkhO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gZGVzYy5zbmFtZSA/PyBkZXNjLm5hbWUgPz8gZGVzYztcbiAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgbWFrZV9wYWdlX2hyZWYocGF0aHByZWZpeCwgcGF0aCwgZGVzYykgKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgICBcbiAgICAgICAgICAgIG1lbnUuYXBwZW5kKCAuLi4gcGFnZXMubWFwKCAocGFnZTphbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudD0gcGFnZS5uYW1lID8/IHBhZ2U7XG4gICAgICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIG1ha2VfcGFnZV9ocmVmKHBhdGhwcmVmaXgsIHBhZ2UucGF0aD8/cGFnZSwgcGFnZSkgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH0pICk7XG4gICAgXG4gICAgICAgICAgICBodG1sLmFwcGVuZChsaW5rLCBtZW51KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICBcbiAgICBsZXQgY3VycGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zbGljZShyb290X3BhdGgubGVuZ3RoKS5zcGxpdCgnLycpO1xuXG4gICAgY29uc3QgbW9kdWxlX2h0bWwgPSBtYWtlX3BhZ2VfbWVudShyb290X3BhdGgsIGN1cnBhZ2VbMF0sIHBhZ2VzKTtcblxuICAgIGNvbnN0IGRlc2MgPSBwYWdlcy5maW5kKCAocGFnZTogYW55KSA9PiBwYWdlLnBhdGggPT09IGN1cnBhZ2VbMF0gKSE7XG4gICAgY29uc3QgdHlwZV9odG1sICAgPSBtYWtlX3BhZ2VfbWVudShyb290X3BhdGggKyBjdXJwYWdlWzBdICsgXCIvXCIsIGN1cnBhZ2VbMV0sIGRlc2MuY2hpbGRyZW4pO1xuXG4gICAgY29uc3QgZGVzY190eXBlID0gZGVzYy5jaGlsZHJlbi5maW5kKCAocGFnZTogYW55KSA9PiAocGFnZT8ucGF0aCA/PyBwYWdlKSA9PT0gY3VycGFnZVsxXSApITtcbiAgICBpZiggdHlwZW9mIGRlc2NfdHlwZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAvLyB0aXRsZSBudW1cbiAgICAgICAgY29uc3QgZGVzYzJfaWR4ID0gZGVzY190eXBlLmNoaWxkcmVuLmZpbmRJbmRleCggKHBhZ2U6IGFueSkgPT4gcGFnZT8ucGF0aCA/PyBwYWdlID09PSBjdXJwYWdlWzJdICkhO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1oZWFkZXJfc3RhcnRfaWRcIiwgYCR7ZGVzYzJfaWR4fWApO1xuICAgICAgICAvLyBtZW51XG4gICAgICAgIGNvbnN0IHNlc3Npb25faHRtbCAgID0gbWFrZV9wYWdlX21lbnUocm9vdF9wYXRoICsgY3VycGFnZVswXSArIFwiL1wiKyBjdXJwYWdlWzFdICsgXCIvXCIsIGN1cnBhZ2VbMl0sIGRlc2NfdHlwZS5jaGlsZHJlbik7XG4gICAgICAgIGh0bWxbMF0gPSBzZXNzaW9uX2h0bWw7XG4gICAgfVxuXG4gICAgaGVhZGVyLnJlcGxhY2VDaGlsZHJlbihtb2R1bGVfaHRtbCwgdHlwZV9odG1sLCAuLi5odG1sKTtcbn1cblxubWFpbi5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGVIZWFkZXIpO1xudXBkYXRlSGVhZGVyKCk7IiwiLy9odHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80OTQxNDMvY3JlYXRpbmctYS1uZXctZG9tLWVsZW1lbnQtZnJvbS1hbi1odG1sLXN0cmluZy11c2luZy1idWlsdC1pbi1kb20tbWV0aG9kcy1vci1wcm9cbmV4cG9ydCBmdW5jdGlvbiBzdHIyaHRtbDxUIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KGh0bWw6IHN0cmluZyk6IFQge1xuICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgaHRtbCA9IGh0bWwudHJpbSgpOyAvLyBOZXZlciByZXR1cm4gYSB0ZXh0IG5vZGUgb2Ygd2hpdGVzcGFjZSBhcyB0aGUgcmVzdWx0XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZCEgYXMgVDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cjJERihodG1sOiBzdHJpbmcpOiBEb2N1bWVudEZyYWdtZW50IHtcbiAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIGh0bWwgPSBodG1sLnRyaW0oKTsgLy8gTmV2ZXIgcmV0dXJuIGEgdGV4dCBub2RlIG9mIHdoaXRlc3BhY2UgYXMgdGhlIHJlc3VsdFxuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQ7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsInZhciB3ZWJwYWNrUXVldWVzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBxdWV1ZXNcIikgOiBcIl9fd2VicGFja19xdWV1ZXNfX1wiO1xudmFyIHdlYnBhY2tFeHBvcnRzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBleHBvcnRzXCIpIDogXCJfX3dlYnBhY2tfZXhwb3J0c19fXCI7XG52YXIgd2VicGFja0Vycm9yID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBlcnJvclwiKSA6IFwiX193ZWJwYWNrX2Vycm9yX19cIjtcbnZhciByZXNvbHZlUXVldWUgPSAocXVldWUpID0+IHtcblx0aWYocXVldWUgJiYgcXVldWUuZCA8IDEpIHtcblx0XHRxdWV1ZS5kID0gMTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSkpO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tID8gZm4ucisrIDogZm4oKSkpO1xuXHR9XG59XG52YXIgd3JhcERlcHMgPSAoZGVwcykgPT4gKGRlcHMubWFwKChkZXApID0+IHtcblx0aWYoZGVwICE9PSBudWxsICYmIHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpIHtcblx0XHRpZihkZXBbd2VicGFja1F1ZXVlc10pIHJldHVybiBkZXA7XG5cdFx0aWYoZGVwLnRoZW4pIHtcblx0XHRcdHZhciBxdWV1ZSA9IFtdO1xuXHRcdFx0cXVldWUuZCA9IDA7XG5cdFx0XHRkZXAudGhlbigocikgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0V4cG9ydHNdID0gcjtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0sIChlKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXJyb3JdID0gZTtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0pO1xuXHRcdFx0dmFyIG9iaiA9IHt9O1xuXHRcdFx0b2JqW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAoZm4ocXVldWUpKTtcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHR9XG5cdHZhciByZXQgPSB7fTtcblx0cmV0W3dlYnBhY2tRdWV1ZXNdID0geCA9PiB7fTtcblx0cmV0W3dlYnBhY2tFeHBvcnRzXSA9IGRlcDtcblx0cmV0dXJuIHJldDtcbn0pKTtcbl9fd2VicGFja19yZXF1aXJlX18uYSA9IChtb2R1bGUsIGJvZHksIGhhc0F3YWl0KSA9PiB7XG5cdHZhciBxdWV1ZTtcblx0aGFzQXdhaXQgJiYgKChxdWV1ZSA9IFtdKS5kID0gLTEpO1xuXHR2YXIgZGVwUXVldWVzID0gbmV3IFNldCgpO1xuXHR2YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuXHR2YXIgY3VycmVudERlcHM7XG5cdHZhciBvdXRlclJlc29sdmU7XG5cdHZhciByZWplY3Q7XG5cdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlaikgPT4ge1xuXHRcdHJlamVjdCA9IHJlajtcblx0XHRvdXRlclJlc29sdmUgPSByZXNvbHZlO1xuXHR9KTtcblx0cHJvbWlzZVt3ZWJwYWNrRXhwb3J0c10gPSBleHBvcnRzO1xuXHRwcm9taXNlW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAocXVldWUgJiYgZm4ocXVldWUpLCBkZXBRdWV1ZXMuZm9yRWFjaChmbiksIHByb21pc2VbXCJjYXRjaFwiXSh4ID0+IHt9KSk7XG5cdG1vZHVsZS5leHBvcnRzID0gcHJvbWlzZTtcblx0Ym9keSgoZGVwcykgPT4ge1xuXHRcdGN1cnJlbnREZXBzID0gd3JhcERlcHMoZGVwcyk7XG5cdFx0dmFyIGZuO1xuXHRcdHZhciBnZXRSZXN1bHQgPSAoKSA9PiAoY3VycmVudERlcHMubWFwKChkKSA9PiB7XG5cdFx0XHRpZihkW3dlYnBhY2tFcnJvcl0pIHRocm93IGRbd2VicGFja0Vycm9yXTtcblx0XHRcdHJldHVybiBkW3dlYnBhY2tFeHBvcnRzXTtcblx0XHR9KSlcblx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRmbiA9ICgpID0+IChyZXNvbHZlKGdldFJlc3VsdCkpO1xuXHRcdFx0Zm4uciA9IDA7XG5cdFx0XHR2YXIgZm5RdWV1ZSA9IChxKSA9PiAocSAhPT0gcXVldWUgJiYgIWRlcFF1ZXVlcy5oYXMocSkgJiYgKGRlcFF1ZXVlcy5hZGQocSksIHEgJiYgIXEuZCAmJiAoZm4ucisrLCBxLnB1c2goZm4pKSkpO1xuXHRcdFx0Y3VycmVudERlcHMubWFwKChkZXApID0+IChkZXBbd2VicGFja1F1ZXVlc10oZm5RdWV1ZSkpKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZm4uciA/IHByb21pc2UgOiBnZXRSZXN1bHQoKTtcblx0fSwgKGVycikgPT4gKChlcnIgPyByZWplY3QocHJvbWlzZVt3ZWJwYWNrRXJyb3JdID0gZXJyKSA6IG91dGVyUmVzb2x2ZShleHBvcnRzKSksIHJlc29sdmVRdWV1ZShxdWV1ZSkpKTtcblx0cXVldWUgJiYgcXVldWUuZCA8IDAgJiYgKHF1ZXVlLmQgPSAwKTtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdtb2R1bGUnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTEvaW5kZXgudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00xL2luZGV4LmNzc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMS9pbmRleC5tZFwiKTtcbiIsIiJdLCJuYW1lcyI6WyJTaGFkb3dDZmciLCJfX2NzdHJfaG9zdCIsIkNBTl9IQVZFX1NIQURPVyIsIl9jYW5IYXNTaGFkb3ciLCJ0YWciLCJpbmNsdWRlcyIsIl9lbGVtZW50MnRhZ25hbWUiLCJMSVNTIiwiZXh0ZW5kcyIsInBfZXh0ZW5kcyIsImhvc3QiLCJwX2hvc3QiLCJkZXBlbmRlbmNpZXMiLCJwX2RlcHMiLCJhdHRyaWJ1dGVzIiwicF9hdHRycyIsInBhcmFtcyIsImNvbnRlbnQiLCJjc3MiLCJzaGFkb3ciLCJwX3NoYWRvdyIsIkhUTUxFbGVtZW50IiwiX2V4dGVuZHMiLCJPYmplY3QiLCJjYW5IYXNTaGFkb3ciLCJFcnJvciIsInVuZGVmaW5lZCIsInB1c2giLCJIVE1MVGVtcGxhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwidHJpbSIsIlJlc3BvbnNlIiwidGV4dCIsIkxJU1NCYXNlIiwiUGFyYW1ldGVycyIsInN0eWxlc2hlZXRzIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiZmV0Y2hfY3NzIiwiQ1NTU3R5bGVTaGVldCIsIkhUTUxTdHlsZUVsZW1lbnQiLCJzaGVldCIsInN0eWxlIiwicmVwbGFjZSIsIm1hcCIsImlkeCIsImNvbnN0cnVjdG9yIiwiYXR0cnMiLCJzZXRBdHRyRGVmYXVsdCIsImF0dHIiLCJ2YWx1ZSIsIm9uQXR0ckNoYW5nZWQiLCJfbmFtZSIsIl9vbGRWYWx1ZSIsIl9uZXdWYWx1ZSIsImlzSW5ET00iLCJvbkRPTUNvbm5lY3RlZCIsIm9uRE9NRGlzY29ubmVjdGVkIiwiZXh0ZW5kc0xJU1MiLCJMaXNzIiwicGFyYW1ldGVycyIsImFzc2lnbiIsIkV4dGVuZGVkTElTUyIsInQiLCJpZCIsImJ1aWxkTElTU0hvc3QiLCJfcGFyYW1zIiwiYWxyZWFkeURlY2xhcmVkQ1NTIiwiU2V0IiwiR0VUIiwiU3ltYm9sIiwiU0VUIiwicHJvcGVydGllcyIsImZyb21FbnRyaWVzIiwibiIsImVudW1lcmFibGUiLCJnZXQiLCJzZXQiLCJBdHRyaWJ1dGVzIiwibmFtZSIsImRhdGEiLCJkZWZhdWx0cyIsInNldHRlciIsImRlZmluZVByb3BlcnRpZXMiLCJMSVNTSG9zdEJhc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsImlzSW5pdCIsImluaXRpYWxpemUiLCJhcGkiLCJpbml0IiwiTElTU1N5bmMiLCJkaXNjb25uZWN0ZWRDYWxsYmFjayIsImNvbm5lY3RlZENhbGxiYWNrIiwiY3VzdG9tRWxlbWVudHMiLCJ1cGdyYWRlIiwiYXR0YWNoU2hhZG93IiwibW9kZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkNsaWNrRXZlbnQiLCJvYnMiLCJnZXRBdHRyaWJ1dGUiLCJhZG9wdGVkU3R5bGVTaGVldHMiLCJzaGFyZWRDU1MiLCJjc3NzZWxlY3RvciIsIkNTU1NlbGVjdG9yIiwiaGFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaHRtbF9zdHlsZXNoZWV0cyIsInJ1bGUiLCJjc3NSdWxlcyIsImNzc1RleHQiLCJoZWFkIiwiYXBwZW5kIiwiYWRkIiwidGVtcGxhdGVfZWxlbSIsInN0ciIsIl8iLCJtYXRjaCIsImNoaWxkTm9kZXMiLCJvYmoiLCJoYXNTaGFkb3ciLCJnZXRQYXJ0IiwicXVlcnlTZWxlY3RvciIsImdldFBhcnRzIiwicXVlcnlTZWxlY3RvckFsbCIsInRhZ05hbWUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJvYnNlcnZlZEF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2siLCJvbGRWYWx1ZSIsIm5ld1ZhbHVlIiwiX0RPTUNvbnRlbnRMb2FkZWQiLCJyZWFkeVN0YXRlIiwiZGVmaW5lIiwidGFnbmFtZSIsIkNvbXBvbmVudENsYXNzIiwiQ2xhc3MiLCJodG1sdGFnIiwiYWxsIiwiTElTU2NsYXNzIiwib3B0cyIsImluc2VydEdsb2JhbENTU1J1bGVzIiwiY3NzX3N0eWxlIiwicmVwbGFjZVN5bmMiLCJpbnNlcnRSdWxlIiwiREVMRUdBVEVEX0VWRU5UUyIsIkFMUkVBRFlfUFJPQ0VTU0VEIiwiZXYiLCJoYW5kbGVycyIsInR5cGUiLCJlbGVtIiwiY29tcG9zZWRQYXRoIiwiU2hhZG93Um9vdCIsIndpbmRvdyIsInRhcmdldCIsInNlbGVjdG9yIiwiaGFuZGxlciIsIm1hdGNoZXMiLCJpbnNlcnRHbG9iYWxEZWxlZ2F0ZWRMaXN0ZW5lciIsImV2ZW50X25hbWUiLCJjbG9zZXN0IiwiZWxlbWVudCIsInJlc3VsdCIsInJvb3QiLCJnZXRSb290Tm9kZSIsImJ1aWxkIiwicGFyZW50IiwiY2xhc3NlcyIsImNzc3ZhcnMiLCJsaXN0ZW5lcnMiLCJDdXN0b21DbGFzcyIsIndoZW5EZWZpbmVkIiwidG9Mb3dlckNhc2UiLCJjbGFzc0xpc3QiLCJzZXRQcm9wZXJ0eSIsInRvZ2dsZUF0dHJpYnV0ZSIsImRhdGFzZXQiLCJyZXBsYWNlQ2hpbGRyZW4iLCJnZXRMSVNTIiwiY2FsbGJhY2siLCJ3aGVuQWxsRGVmaW5lZCIsInRhZ25hbWVzIiwiaXNEZWZpbmVkIiwiZ2V0TmFtZSIsImdldExJU1NTeW5jIiwiX2J1aWxkUVMiLCJ0YWduYW1lX29yX3BhcmVudCIsInFzIiwicXNvIiwicXNhIiwiZWxlbWVudHMiLCJwcm9taXNlcyIsInFzYyIsInJlcyIsInFzU3luYyIsInFzYVN5bmMiLCJxc2NTeW5jIiwiTElTU19BdXRvIiwibmF2aWdhdG9yIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIiwiY29udHJvbGxlciIsInNyYyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwibXV0YXRpb24iLCJhZGRpdGlvbiIsImFkZGVkTm9kZXMiLCJFbGVtZW50Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJyZXNvdXJjZXMiLCJkZWZpbmVXZWJDb21wb25lbnQiLCJmaWxlcyIsImpzIiwia2xhc3MiLCJXZWJDb21wb25lbnQiLCJmaWxlbmFtZXMiLCJmaWxlIiwiZW5kc1dpdGgiLCJfaW1wb3J0IiwiX2ZldGNoVGV4dCIsImkiLCJDc3RtRXZlbnQiLCJDdXN0b21FdmVudCIsImFyZ3MiLCJkZXRhaWwiLCJmZXRjaFJlc291cmNlIiwicmVzb3VyY2UiLCJmZXRjaCIsInVyaSIsImlzTGlzc0F1dG8iLCJvcHRpb25zIiwiaGVhZGVycyIsInJlc3BvbnNlIiwic3RhdHVzIiwiZGVmYXVsdCIsImUiLCJjb25zb2xlIiwibG9nIiwiSFRNTENMQVNTX1JFR0VYIiwiZWxlbWVudE5hbWVMb29rdXBUYWJsZSIsImV4ZWMiLCJGb3JtYXRzIiwic19mb3JtdWxhIiwiZ2V0Q2VsbHMiLCJmb3JtYXQiLCJldXJvcyIsInNfY29tcGxleF9mb3JtdWxhIiwic190eXBlcyIsIkRhdGUiLCJzX2N1cnNvciIsInNfJGZvcm11bGEiLCJzXyRmb3JtIiwicmVmIiwic2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uIiwic2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uX2VtcHR5Iiwic2hlZXRfcmVjb3BpZV9pbmNyIiwiYyIsIlgiLCJ0ZCIsImZvY3VzIiwidGV4dENvbnRlbnQiLCJzdHIyaHRtbCIsIlJhbmdlT3ZlcmxheSIsIkV2ZW50VGFyZ2V0Iiwib3ZlcmxheSIsImNsYXNzbGlzdCIsInVwZGF0ZSIsInNldFJhbmdlIiwicmFuZ2UiLCJwbGFnZV9uYW1lIiwiZ2V0UmVjdCIsInJlY3QiLCJ0b2dnbGUiLCJnZXRSYW5nZSIsInNldFJlY3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiRm9ybXVsYVJlZiIsInNldENvbG9yIiwiY29sb3JfaWQiLCJyZW1vdmUiLCJSZWNvcHlIYW5kbGUiLCJ4IiwieSIsInciLCJoIiwiQ2VsbExpc3QiLCJkZWZhdWx0Rm9ybWF0IiwiRm9ybWF0TWFuYWdlciIsImN0cmxLZXkiLCJjaGFuZ2VkIiwia2V5Iiwic2VsZWN0aW9uIiwidG9nZ2xlRm9ybWF0Iiwic2hpZnRLZXkiLCJwb3VyY2VudCIsIm51bWJlciIsInByZXZlbnREZWZhdWx0IiwiZGlzcGF0Y2hFdmVudCIsInByZWMiLCJ0b0xvY2FsZVN0cmluZyIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsIkZvcm1hdCIsImFwcGx5VG8iLCJjZWxsIiwiY2VsbHMiLCJ2YWwiLCJyYXdDb250ZW50IiwiciIsImoiLCJyZWxhdGl2ZVRvIiwic3RhcnRzV2l0aCIsImdldFByb3BlcnR5IiwiaGFzUHJvcGVydHkiLCJleHRyYWN0Rm9ybWF0IiwiZjIiLCJ2YWx1ZXMiLCJpdGVtIiwic2xpY2UiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiY29sc3BhbiIsInJvd3NwYW4iLCJzcGFuIiwiaGFzQXR0cmlidXRlIiwicHJlY2lzaW9uIiwiQ2FsY0Zvcm11bGEiLCJzdGF0ZXMiLCJjZWxsX2VkaXQiLCJzdGF0ZSIsInN5bmNUbyIsImN1cnNvciIsIkZvcm11bGEiLCJyYW5nZXNfdG9rZW4iLCJkcm93IiwiZGNvbCIsIm5ld19yYW5nZXMiLCJwb3MiLCJjZWxsUG9zIiwibGFzdEluZGV4T2YiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJuZXdfZm9ybXVsYSIsIm9mZnNldCIsImJlZyIsImVuZCIsInBhcnNlX2Zvcm11bGEiLCJyYW5nZXNUb2tlbiIsInRvU3RyaW5nIiwiZXh0cmFjdFRva2VuIiwidG9rZW4iLCJoYXNDb21tYSIsIk5vZGUiLCJjaGlsZHJlbiIsImZjdCIsImV2YWwiLCJ0b051bWJlciIsImEiLCJvcF9pbXBsIiwiYiIsIk1hdGgiLCJwb3ciLCJvcF9wcmlvIiwib3BzIiwib3AiLCJ0b2tlbmxpc3QyVHJlZSIsInRva2VucyIsIm5iIiwicmF3IiwiY3VyIiwicHJpb3JpdHkiLCJmaW5kSW5kZXgiLCJ1X29wIiwib3BfdG9rZW4iLCJsZWZ0IiwicmlnaHQiLCJjdXJUb2tlbiIsIm5vZGUiLCJyYW5nZXMiLCJmaWx0ZXIiLCJQbGFnZUZvcm11bGEiLCJjb2RlIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwic2VsZWN0ZWQiLCJjbGVhciIsImJsdXIiLCJQbGFnZVNlbGVjdG9yIiwic2VsZWN0ZWRfY2VsbHMiLCJjb2xzIiwidGJvZHkiLCJjb2xfaWQiLCJjbGllbnRYIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwicm93cyIsInJvd19pZCIsImNsaWVudFkiLCJtYWluIiwib25fbW91c2VfbW92ZSIsInJlcGxhY2VBbGwiLCJwb3MycmVmIiwibmJSb3dzIiwibmJDb2xzIiwib25jZSIsImlzQWN0aXZlIiwib25JbnB1dCIsInJyYW5nZSIsImdldFNlbGVjdGlvbiIsImdldFJhbmdlQXQiLCJzdGFydE9mZnNldCIsImNoaWxkIiwibm9kZVR5cGUiLCJURVhUX05PREUiLCJzdGFydENvbnRhaW5lciIsImNyZWF0ZVJhbmdlIiwic2VsIiwic2V0U3RhcnQiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwidG9QcmVjaXNpb24iLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJwYXJzZUlucHV0IiwidGVzdF9udW1iZXIiLCJOdW1iZXIiLCJpc05hTiIsInBhcnRzIiwic3BsaXQiLCJ0ZXN0X2RhdGUiLCJnZXRGdWxsWWVhciIsIlN0YXRlIiwicHJldl9zdGF0ZSIsIlN0YXRlcyIsIkNhbGNTaGVldCIsImVudHJpZXMiLCJzIiwidGJsX29mZnNldCIsIm9mZnNldFRvcCIsInN0YXJ0Iiwib2Zmc2V0TGVmdCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0Iiwicm93X2RpZmYiLCJjb2xfZGlmZiIsInJvdyIsImNvbCIsInJlY29weSIsImNvcHkiLCJsYXN0X3JlY29weV90YXJnZXQiLCJsYXN0X3JlY29weV9kaXIiLCJvbl9yZWNvcHlfbW92ZSIsImRfcHgiLCJ3aWR0aCIsImRfcHkiLCJoZWlnaHQiLCJkX3giLCJkX3kiLCJzaWduIiwiYWJzIiwicHJldiIsImRpZmZfeCIsImRpZmZfeSIsInBvc19jdXIiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImNsYXNzTmFtZSIsImZvcm11bGFfYmFyIiwicGxhZ2UiLCJmb3JtdWxhIiwicm8iLCJpc19ybyIsImFsdEtleSIsImRzdCIsImRlZXBDbG9uZSIsImRlbGV0ZUZvcm1hdCIsImRlbGV0ZUNvbnRlbnQiLCJkX3JvdyIsImRfY29sIiwibmV4dCIsImJ1YmJsZXMiLCJvbklucHV0MiIsInJhbmdlc19jb2xvcnMiLCJjdXJfb2Zmc2V0IiwicmFuZ2VfbmFtZSIsInJhbmdlc19uYW1lcyIsImtleXMiLCJ3YXJuIiwicGFyZW50RWxlbWVudCIsInJlc2l6ZSIsIm5icm93cyIsIm5iY29scyIsImNvbF9odG1sIiwidGgiLCJyb3dfaHRtbCIsInRhYmxlIiwicmVzaXplT2JzIiwiUmVzaXplT2JzZXJ2ZXIiLCJmcm9tIiwidG8iLCJIVE1MVGFibGVDZWxsRWxlbWVudCIsInJlZjJwb3MiLCJiZWdfcm93IiwiYmVnX2NvbCIsImVuZF9yb3ciLCJlbmRfY29sIiwiY2VsbF9vcl9yb3dpZCIsImJfcm93X2lkIiwiYl9jb2xfaWQiLCJjaGFyQ29kZUF0IiwiZV9yb3dfaWQiLCJlX2NvbF9pZCIsImZpcnN0RWxlbWVudENoaWxkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic29ydCIsIm1pbiIsIm1heCIsIm5iX2NvbHMiLCJmbG9vciIsImYiLCJpc0Zvcm1hdCIsInJhd192YWwiLCJ2IiwiZGlmZiIsInNldFJPIiwiY2xvbmUiLCJjbG9uZU5vZGUiLCJzbmFtZSIsInBhdGgiLCJyb290X3BhdGgiLCJob3N0bmFtZSIsInBhZ2VzIiwiaGVhZGVyIiwidGl0bGVzIiwiaHRyZWUiLCJodG1sIiwibGV2ZWwiLCJodHJlZV9jdXJzb3IiLCJ0aXRsZSIsInNlYXJjaEN1ckhlYWRlciIsInBvc2l0aW9uIiwiaGlkIiwiZ2V0VGl0bGVQcmVmaXgiLCJpbmRleE9mIiwibnVtIiwiYnVpbGRNZW51Iiwibm9kZXMiLCJtZW51IiwidXBkYXRlSGVhZGVyIiwibGFzdCIsInNjcm9sbFRvcCIsInJldmVyc2UiLCJobm9kZSIsImhfaHRtbCIsImxpbmsiLCJlbXB0eSIsIm1ha2VfcGFnZV9ocmVmIiwicGF0aHByZWZpeCIsImRlc2MiLCJocmVmIiwibWFrZV9wYWdlX21lbnUiLCJmaW5kIiwicGFnZSIsImN1cnBhZ2UiLCJtb2R1bGVfaHRtbCIsInR5cGVfaHRtbCIsImRlc2NfdHlwZSIsImRlc2MyX2lkeCIsImJvZHkiLCJzZXNzaW9uX2h0bWwiLCJ0ZW1wbGF0ZSIsInN0cjJERiJdLCJzb3VyY2VSb290IjoiIn0=