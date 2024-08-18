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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host table {\n    border-collapse: collapse;\n    border-top-color: transparent;\n\n    & > tbody {\n        outline: 0px solid transparent;\n    }\n\n    & > tbody > tr:first-child {\n        border-top-color: transparent;\n        \n        & > th {\n            border-top-color: transparent;\n        }\n    }\n}\n\n:host :is(tr,th,td) {\n    border:1px solid #c0c0c0;\n }\n\n:host tr {\n    height: 0.45cm;\n    line-height: 0.45cm;\n}\n\n\n:host :is(td, th):not([contenteditable]) {\n    user-select: none;\n}\n/*\n:host td[contenteditable] {\n    user-select: text;\n}*/\n\n:host :is(td, th) {\n    color: black;\n    width: 2.26cm;\n    height: 0.45cm;\n\n    font-size: 10pt;\n\n    box-sizing: border-box;\n    font-family: 'Liberation Sans';\n}\n\n:host tr > th:first-child {\n    width: calc( 2.26cm / 2.5) ;\n}\n\n:host {\n    display: inline-flex;\n    flex-direction: column;\n}\n\n:host div.toolbar {\n    background-color: #cecece;\n    display: flex;\n    gap: 5px;\n    padding: 4px;\n\n    & > *:not(:first-child) {\n        flex: 1 1 0;\n    }\n    & > *:first-child {\n        width: calc( 1.5 * 2.26cm );\n    }\n}\n\n:host th {\n    background-color: #cecece;\n    border-color: #8a8a8a;\n    font-weight: normal;\n\n    &.highlight {\n        background-color: #398ee7;\n        color: white;\n    }\n}\n\n:host(.cell_edit) .cursor {\n    display: none;\n}\n\n:host(.recopy) {\n    cursor: cell;\n}\n\n:host {\n\n    .recopy {\n        position: absolute;\n        padding: 0;\n        box-sizing: border-box;\n        cursor: cell;\n        background-color: #398ee7;\n\n    }\n\n    .cursor {\n        position: absolute;\n        padding: 0;\n        box-sizing: border-box;\n        background: none;\n        border: 2px solid #398ee7;\n        pointer-events: none;\n    }\n}\n\n:host .hidden {\n    display: none;\n}\n\n:host td {\n\n    --font_size: 10pt;\n    font-size: var(--font_size);\n    line-height: calc( var(--font_size) * 1.2 );\n\n    --indent: 0;\n\n    --border_color: black;\n    --background_color: white;\n    --foreground_color: black;\n    background-color: var(--background_color);\n    color           : var(--foreground_color);\n\n    white-space: pre;\n\n    vertical-align: bottom;\n\n    &:is([data-type=\"number\"],[data-type=\"pourcent\"],[data-type=\"date\"], [data-type=\"boolean\"]) {\n        text-align: right;\n    }\n\n    &[contenteditable] {\n        outline: 0px solid transparent;\n    }\n\n    &.ajuster {\n        word-break: break-all;\n        white-space: normal;\n    }\n\n    &.highlight {\n        background-color: #cde3f9;\n    }\n\n    /** style **/\n    &.italic {\n        font-style: italic;\n    }\n    &.bold {\n        font-weight: bold;\n    }\n    &.underline {\n        text-decoration: underline;\n    }\n    &.align_left {\n        padding-left: calc( var(--indent) * 10px);\n        text-align: left;\n    }\n    &.align_center {\n        text-align: center;\n    }\n    &.align_right {\n        padding-right: calc( var(--indent) * 10px);\n        text-align: right;\n    }\n    &.valign_top {\n        vertical-align: top;\n    }\n    &.valign_middle {\n        vertical-align: middle;\n    }\n    &.valign_bottom {\n        vertical-align: bottom;\n    }\n    /* https://stackoverflow.com/questions/1241757/applying-borders-to-a-single-table-cell-when-using-border-collapse */\n    &.border_top {\n        border-top: 1px double var(--border_color);\n    }\n    &.border_bottom {\n        border-bottom: 1px double var(--border_color);\n    }\n    &.border_left {\n        border-left: 1px double var(--border_color);\n    }\n    &.border_right {\n        border-right: 1px double var(--border_color);\n    }\n}\n\n:host {\n    position: relative;\n}\n\n:host .range_highlight {\n    position: absolute;\n    padding: 0;\n    box-sizing: border-box;\n\n    background: none;\n    border: 2px solid red;\n\n    border-color: var(--highlight_color);\n}\n\n:host .formula_highlight {\n    color: var(--highlight_color);\n}\n\n:host .highlight_0 {\n    --highlight_color: #fa0c0c;\n}\n\n:host .highlight_1 {\n    --highlight_color: #fa0cfa;\n}\n\n:host .highlight_2 {\n    --highlight_color: #0c840c;\n}\n\n:host .highlight_3 {\n    --highlight_color: #010180;\n}\n\n:host .highlight_4 {\n    --highlight_color: #871717;\n}\n\n:host .highlight_5 {\n    --highlight_color: #871787;\n}\n\n:host .highlight_6 {\n    --highlight_color: #84840c;\n}\n\n:host .highlight_7 {\n    --highlight_color: #0c0cfa;\n}\n\n\n.copy_highlight {\n    position: absolute;\n    border: 1px dashed black;\n    background: none;\n    pointer-events: none;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* Tomorrow Theme */\n/* http://jmblog.github.com/color-themes-for-google-code-highlightjs */\n/* Original theme - https://github.com/chriskempson/tomorrow-theme */\n\n/* Tomorrow Comment */\n.hljs-comment,\n.hljs-quote {\n\tcolor: #8e908c;\n}\n\n/* Tomorrow Red */\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-regexp,\n.hljs-deletion {\n\tcolor: #c82829;\n}\n\n/* Tomorrow Orange */\n.hljs-number,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-literal,\n.hljs-type,\n.hljs-params,\n.hljs-meta,\n.hljs-link {\n\tcolor: #f5871f;\n}\n\n/* Tomorrow Yellow */\n.hljs-attribute {\n\tcolor: #eab700;\n}\n\n/* Tomorrow Green */\n.hljs-string,\n.hljs-symbol,\n.hljs-bullet,\n.hljs-addition {\n\tcolor: #718c00;\n}\n\n/* Tomorrow Blue */\n.hljs-title,\n.hljs-section {\n\tcolor: #4271ae;\n}\n\n/* Tomorrow Purple */\n.hljs-keyword,\n.hljs-selector-tag {\n\tcolor: #8959a8;\n}\n\n.hljs {\n\tdisplay: block;\n\toverflow-x: auto;\n\tcolor: #4d4d4c;\n\tpadding: 0.5em;\n}\n\n.hljs-emphasis {\n\tfont-style: italic;\n}\n\n.hljs-strong {\n\tfont-weight: bold;\n}");

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
const Formats = {
    default: function(value = this?.rawContent) {
        const prec = +(this?.getAttribute('precision') ?? 2);
        if (typeof value === "number") {
            if (this?.getAttribute('type') === "pourcent") return `${+(+value * 100).toPrecision(7)}`.replace('.', ',') + "%";
            return `${+value.toPrecision(7)}`.replace('.', ',');
        }
        if (typeof value === "boolean") return value ? 'VRAI' : 'FAUX';
        if (value instanceof Date) {
            return value.toLocaleDateString("fr-FR");
        }
        // @ts-ignore
        if (value instanceof _formula_parser__WEBPACK_IMPORTED_MODULE_0__.Formula) {
            return value.toString();
        }
        return value;
    },
    euros: function(value = this.rawContent) {
        if (value === undefined) return '';
        if (typeof value === "string") return value;
        if (value instanceof Date) value = date2Float(value);
        if (this.getAttribute("type") !== "number") {
            this.setAttribute("type", "number");
            _sheet__WEBPACK_IMPORTED_MODULE_1__.CalcSheet.getSheetFromCell(this).getRange(this).content = value;
        }
        const prec = +(this.getAttribute('precision') ?? 2);
        return value.toLocaleString(undefined, {
            minimumFractionDigits: prec,
            maximumFractionDigits: prec
        }) + '€';
    //.toFixed(2) + '€';
    },
    date: function(value = this.rawContent) {
        if (value === undefined) return '';
        if (typeof value === "string") return value;
        this.setAttribute("type", "date");
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
    pourcent: function(value = this.rawContent) {
        if (value === undefined) return '';
        if (typeof value === "string") return value;
        if (value instanceof Date) value = date2Float(value);
        if (this.getAttribute("type") !== "pourcent") {
            this.setAttribute("type", "pourcent");
            _sheet__WEBPACK_IMPORTED_MODULE_1__.CalcSheet.getSheetFromCell(this).getRange(this).content = value;
        }
        const prec = +(this.getAttribute('precision') ?? 2);
        return (value * 100).toLocaleString(undefined, {
            minimumFractionDigits: prec,
            maximumFractionDigits: prec
        }) + '%';
    },
    number: function(value = this.rawContent) {
        if (value === undefined) return '';
        if (typeof value === "string") return value;
        if (value instanceof Date) value = date2Float(value);
        if (this.getAttribute("type") !== "number") {
            this.setAttribute("type", "number");
            _sheet__WEBPACK_IMPORTED_MODULE_1__.CalcSheet.getSheetFromCell(this).getRange(this).content = value;
        }
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
            this.#cur_cell.textContent = _format__WEBPACK_IMPORTED_MODULE_1__.Formats.default.call(this.#cur_cell, this.#input.textContent);
            this.#cur_cell.dispatchEvent(new CustomEvent('input', {
                detail: true
            }));
        });
        this.#onInput = (ev)=>{
            //@ts-ignore
            if (ev.detail === true) return;
            this.#input.textContent = _format__WEBPACK_IMPORTED_MODULE_1__.Formats.default.call(this.#cur_cell, this.#cur_cell.textContent);
        };
    }
    syncTo(sheet) {
        this.#sheet = sheet;
        const cursor = this.#sheet.cursor;
        sheet.host.addEventListener('update', ()=>{
            // @ts-ignore
            this.#input.textContent = _format__WEBPACK_IMPORTED_MODULE_1__.Formats.default.call(cursor.firstCell);
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
            this.#input.textContent = _format__WEBPACK_IMPORTED_MODULE_1__.Formats.default.call(this.#cur_cell);
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
            if (raw_val instanceof _formula_parser__WEBPACK_IMPORTED_MODULE_2__.Formula) value = raw_val.exec(this.#sheet); //TODO...
            let type = typeof value;
            if (value instanceof Date) {
                type = "date";
                cell.format = _format__WEBPACK_IMPORTED_MODULE_4__.Formats.date;
            }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLEVBQUU7VUFDRjtVQUNBLHNHQUFzRztVQUN0RztVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLEdBQUc7VUFDSDtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsR0FBRztVQUNIO1VBQ0EsRUFBRTtVQUNGO1VBQ0E7Ozs7O1VDaEVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EseUNBQXlDLHdDQUF3QztVQUNqRjtVQUNBO1VBQ0E7Ozs7O1VDUEE7Ozs7O1VDQUE7VUFDQTtVQUNBO1VBQ0EsdURBQXVELGlCQUFpQjtVQUN4RTtVQUNBLGdEQUFnRCxhQUFhO1VBQzdEOzs7OztVQ05BOzs7OztTRUFBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0NvdXJzLy4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMS9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00xL2luZGV4Lm1kIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9Db3Vycy8uL2xpYnMvTElTUy9pbmRleC50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvUmFuZ2VPdmVybGF5LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL2Zvcm1hdC50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9mb3JtdWxhX2VkaXRvci50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9mb3JtdWxhX3BhcnNlci50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9wbGFnZV9lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvcGxhZ2Vfc2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvc2hlZXQudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L21lbnUudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L3V0aWxzL3N0cjJodG1sLnRzIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9hc3luYyBtb2R1bGUiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInBhZ2VzL1IxLTAxL0NNL0NNMS9pbmRleC5odG1sXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI6aG9zdCB0YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcbiAgICAmID4gdGJvZHkge1xcbiAgICAgICAgb3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICB9XFxuXFxuICAgICYgPiB0Ym9keSA+IHRyOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgXFxuICAgICAgICAmID4gdGgge1xcbiAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbjpob3N0IDppcyh0cix0aCx0ZCkge1xcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjMGMwYzA7XFxuIH1cXG5cXG46aG9zdCB0ciB7XFxuICAgIGhlaWdodDogMC40NWNtO1xcbiAgICBsaW5lLWhlaWdodDogMC40NWNtO1xcbn1cXG5cXG5cXG46aG9zdCA6aXModGQsIHRoKTpub3QoW2NvbnRlbnRlZGl0YWJsZV0pIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi8qXFxuOmhvc3QgdGRbY29udGVudGVkaXRhYmxlXSB7XFxuICAgIHVzZXItc2VsZWN0OiB0ZXh0O1xcbn0qL1xcblxcbjpob3N0IDppcyh0ZCwgdGgpIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogMi4yNmNtO1xcbiAgICBoZWlnaHQ6IDAuNDVjbTtcXG5cXG4gICAgZm9udC1zaXplOiAxMHB0O1xcblxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ0xpYmVyYXRpb24gU2Fucyc7XFxufVxcblxcbjpob3N0IHRyID4gdGg6Zmlyc3QtY2hpbGQge1xcbiAgICB3aWR0aDogY2FsYyggMi4yNmNtIC8gMi41KSA7XFxufVxcblxcbjpob3N0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbjpob3N0IGRpdi50b29sYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG5cXG4gICAgJiA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICAgICAgZmxleDogMSAxIDA7XFxuICAgIH1cXG4gICAgJiA+ICo6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgd2lkdGg6IGNhbGMoIDEuNSAqIDIuMjZjbSApO1xcbiAgICB9XFxufVxcblxcbjpob3N0IHRoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOGE4YThhO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcblxcbiAgICAmLmhpZ2hsaWdodCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk4ZWU3O1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxufVxcblxcbjpob3N0KC5jZWxsX2VkaXQpIC5jdXJzb3Ige1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG46aG9zdCgucmVjb3B5KSB7XFxuICAgIGN1cnNvcjogY2VsbDtcXG59XFxuXFxuOmhvc3Qge1xcblxcbiAgICAucmVjb3B5IHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgY3Vyc29yOiBjZWxsO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM5OGVlNztcXG5cXG4gICAgfVxcblxcbiAgICAuY3Vyc29yIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMzOThlZTc7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG46aG9zdCAuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuOmhvc3QgdGQge1xcblxcbiAgICAtLWZvbnRfc2l6ZTogMTBwdDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250X3NpemUpO1xcbiAgICBsaW5lLWhlaWdodDogY2FsYyggdmFyKC0tZm9udF9zaXplKSAqIDEuMiApO1xcblxcbiAgICAtLWluZGVudDogMDtcXG5cXG4gICAgLS1ib3JkZXJfY29sb3I6IGJsYWNrO1xcbiAgICAtLWJhY2tncm91bmRfY29sb3I6IHdoaXRlO1xcbiAgICAtLWZvcmVncm91bmRfY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kX2NvbG9yKTtcXG4gICAgY29sb3IgICAgICAgICAgIDogdmFyKC0tZm9yZWdyb3VuZF9jb2xvcik7XFxuXFxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxuXFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuXFxuICAgICY6aXMoW2RhdGEtdHlwZT1cXFwibnVtYmVyXFxcIl0sW2RhdGEtdHlwZT1cXFwicG91cmNlbnRcXFwiXSxbZGF0YS10eXBlPVxcXCJkYXRlXFxcIl0sIFtkYXRhLXR5cGU9XFxcImJvb2xlYW5cXFwiXSkge1xcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIH1cXG5cXG4gICAgJltjb250ZW50ZWRpdGFibGVdIHtcXG4gICAgICAgIG91dGxpbmU6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgfVxcblxcbiAgICAmLmFqdXN0ZXIge1xcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gICAgfVxcblxcbiAgICAmLmhpZ2hsaWdodCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RlM2Y5O1xcbiAgICB9XFxuXFxuICAgIC8qKiBzdHlsZSAqKi9cXG4gICAgJi5pdGFsaWMge1xcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICB9XFxuICAgICYuYm9sZCB7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcbiAgICAmLnVuZGVybGluZSB7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgfVxcbiAgICAmLmFsaWduX2xlZnQge1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKCB2YXIoLS1pbmRlbnQpICogMTBweCk7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB9XFxuICAgICYuYWxpZ25fY2VudGVyIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAmLmFsaWduX3JpZ2h0IHtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGMoIHZhcigtLWluZGVudCkgKiAxMHB4KTtcXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICB9XFxuICAgICYudmFsaWduX3RvcCB7XFxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICB9XFxuICAgICYudmFsaWduX21pZGRsZSB7XFxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB9XFxuICAgICYudmFsaWduX2JvdHRvbSB7XFxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgICB9XFxuICAgIC8qIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEyNDE3NTcvYXBwbHlpbmctYm9yZGVycy10by1hLXNpbmdsZS10YWJsZS1jZWxsLXdoZW4tdXNpbmctYm9yZGVyLWNvbGxhcHNlICovXFxuICAgICYuYm9yZGVyX3RvcCB7XFxuICAgICAgICBib3JkZXItdG9wOiAxcHggZG91YmxlIHZhcigtLWJvcmRlcl9jb2xvcik7XFxuICAgIH1cXG4gICAgJi5ib3JkZXJfYm90dG9tIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3VibGUgdmFyKC0tYm9yZGVyX2NvbG9yKTtcXG4gICAgfVxcbiAgICAmLmJvcmRlcl9sZWZ0IHtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggZG91YmxlIHZhcigtLWJvcmRlcl9jb2xvcik7XFxuICAgIH1cXG4gICAgJi5ib3JkZXJfcmlnaHQge1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggZG91YmxlIHZhcigtLWJvcmRlcl9jb2xvcik7XFxuICAgIH1cXG59XFxuXFxuOmhvc3Qge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbjpob3N0IC5yYW5nZV9oaWdobGlnaHQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG5cXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1oaWdobGlnaHRfY29sb3IpO1xcbn1cXG5cXG46aG9zdCAuZm9ybXVsYV9oaWdobGlnaHQge1xcbiAgICBjb2xvcjogdmFyKC0taGlnaGxpZ2h0X2NvbG9yKTtcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF8wIHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICNmYTBjMGM7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfMSB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjZmEwY2ZhO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzIge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzBjODQwYztcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF8zIHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICMwMTAxODA7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfNCB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjODcxNzE3O1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzUge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzg3MTc4NztcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF82IHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICM4NDg0MGM7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfNyB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjMGMwY2ZhO1xcbn1cXG5cXG5cXG4uY29weV9oaWdobGlnaHQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCBibGFjaztcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFRvbW9ycm93IFRoZW1lICovXFxuLyogaHR0cDovL2ptYmxvZy5naXRodWIuY29tL2NvbG9yLXRoZW1lcy1mb3ItZ29vZ2xlLWNvZGUtaGlnaGxpZ2h0anMgKi9cXG4vKiBPcmlnaW5hbCB0aGVtZSAtIGh0dHBzOi8vZ2l0aHViLmNvbS9jaHJpc2tlbXBzb24vdG9tb3Jyb3ctdGhlbWUgKi9cXG5cXG4vKiBUb21vcnJvdyBDb21tZW50ICovXFxuLmhsanMtY29tbWVudCxcXG4uaGxqcy1xdW90ZSB7XFxuXFx0Y29sb3I6ICM4ZTkwOGM7XFxufVxcblxcbi8qIFRvbW9ycm93IFJlZCAqL1xcbi5obGpzLXZhcmlhYmxlLFxcbi5obGpzLXRlbXBsYXRlLXZhcmlhYmxlLFxcbi5obGpzLXRhZyxcXG4uaGxqcy1uYW1lLFxcbi5obGpzLXNlbGVjdG9yLWlkLFxcbi5obGpzLXNlbGVjdG9yLWNsYXNzLFxcbi5obGpzLXJlZ2V4cCxcXG4uaGxqcy1kZWxldGlvbiB7XFxuXFx0Y29sb3I6ICNjODI4Mjk7XFxufVxcblxcbi8qIFRvbW9ycm93IE9yYW5nZSAqL1xcbi5obGpzLW51bWJlcixcXG4uaGxqcy1idWlsdF9pbixcXG4uaGxqcy1idWlsdGluLW5hbWUsXFxuLmhsanMtbGl0ZXJhbCxcXG4uaGxqcy10eXBlLFxcbi5obGpzLXBhcmFtcyxcXG4uaGxqcy1tZXRhLFxcbi5obGpzLWxpbmsge1xcblxcdGNvbG9yOiAjZjU4NzFmO1xcbn1cXG5cXG4vKiBUb21vcnJvdyBZZWxsb3cgKi9cXG4uaGxqcy1hdHRyaWJ1dGUge1xcblxcdGNvbG9yOiAjZWFiNzAwO1xcbn1cXG5cXG4vKiBUb21vcnJvdyBHcmVlbiAqL1xcbi5obGpzLXN0cmluZyxcXG4uaGxqcy1zeW1ib2wsXFxuLmhsanMtYnVsbGV0LFxcbi5obGpzLWFkZGl0aW9uIHtcXG5cXHRjb2xvcjogIzcxOGMwMDtcXG59XFxuXFxuLyogVG9tb3Jyb3cgQmx1ZSAqL1xcbi5obGpzLXRpdGxlLFxcbi5obGpzLXNlY3Rpb24ge1xcblxcdGNvbG9yOiAjNDI3MWFlO1xcbn1cXG5cXG4vKiBUb21vcnJvdyBQdXJwbGUgKi9cXG4uaGxqcy1rZXl3b3JkLFxcbi5obGpzLXNlbGVjdG9yLXRhZyB7XFxuXFx0Y29sb3I6ICM4OTU5YTg7XFxufVxcblxcbi5obGpzIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRvdmVyZmxvdy14OiBhdXRvO1xcblxcdGNvbG9yOiAjNGQ0ZDRjO1xcblxcdHBhZGRpbmc6IDAuNWVtO1xcbn1cXG5cXG4uaGxqcy1lbXBoYXNpcyB7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uaGxqcy1zdHJvbmcge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cIjsiLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIGV4cG9ydGVkIHR5cGVzID09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCB0eXBlIENTU19SZXNvdXJjZSA9IHN0cmluZ3xSZXNwb25zZXxIVE1MU3R5bGVFbGVtZW50fENTU1N0eWxlU2hlZXQ7XG5leHBvcnQgdHlwZSBDU1NfU291cmNlICAgPSBDU1NfUmVzb3VyY2UgfCBQcm9taXNlPENTU19SZXNvdXJjZT47XG5cbmV4cG9ydCB0eXBlIEhUTUxfUmVzb3VyY2UgPSBzdHJpbmd8UmVzcG9uc2V8SFRNTFRlbXBsYXRlRWxlbWVudDtcbmV4cG9ydCB0eXBlIEhUTUxfU291cmNlICAgPSBIVE1MX1Jlc291cmNlIHwgUHJvbWlzZTxIVE1MX1Jlc291cmNlPjtcblxuZXhwb3J0IHR5cGUgTElTU09wdGlvbnM8RXh0ZW5kcyAgICBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdFx0SG9zdCAgICAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdFx0QXR0cnMgICAgICBleHRlbmRzIHN0cmluZyxcblx0XHRcdFx0XHRcdFBhcmFtZXRlcnMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PiA9IHtcblxuXHRleHRlbmRzPzogQ29uc3RydWN0b3I8RXh0ZW5kcz4sXG5cdGhvc3QgICA/OiBDb25zdHJ1Y3RvcjxIb3N0PixcblxuXHRkZXBlbmRlbmNpZXM/OiByZWFkb25seSBQcm9taXNlPGFueT5bXSxcblx0YXR0cmlidXRlcyAgPzogcmVhZG9ubHkgQXR0cnNbXSxcblx0cGFyYW1zICAgICAgPzogUmVhZG9ubHk8UGFyYW1ldGVycz4sXG5cblx0Y29udGVudD86IEhUTUxfU291cmNlLFxuXHRjc3MgICAgPzogIENTU19Tb3VyY2UgfCByZWFkb25seSBDU1NfU291cmNlW10sXG5cdHNoYWRvdyA/OiAgU2hhZG93Q2ZnLFxufTtcblxuZXhwb3J0IGVudW0gU2hhZG93Q2ZnIHtcblx0Tk9ORSA9ICdub25lJyxcblx0T1BFTiA9ICdvcGVuJywgXG5cdENMT1NFPSAnY2xvc2VkJ1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBDbGFzcyA9PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5sZXQgX19jc3RyX2hvc3QgIDogYW55ID0gbnVsbDtcblxudHlwZSBDb25zdHJ1Y3RvcjxUPiA9IG5ldyAoKSA9PiBUO1xuaW50ZXJmYWNlIENsYXNzIHt9XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50L2F0dGFjaFNoYWRvd1xuY29uc3QgQ0FOX0hBVkVfU0hBRE9XID0gW1xuXHRudWxsLCAnYXJ0aWNsZScsICdhc2lkZScsICdibG9ja3F1b3RlJywgJ2JvZHknLCAnZGl2Jyxcblx0J2Zvb3RlcicsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdoZWFkZXInLCAnbWFpbicsXG5cdCduYXYnLCAncCcsICdzZWN0aW9uJywgJ3NwYW4nXG5cdFxuXTtcbmZ1bmN0aW9uIF9jYW5IYXNTaGFkb3codGFnOiB0eXBlb2YgSFRNTEVsZW1lbnQpIHtcblx0cmV0dXJuIENBTl9IQVZFX1NIQURPVy5pbmNsdWRlcyggX2VsZW1lbnQydGFnbmFtZSh0YWcpICk7XG59XG5cbnR5cGUgUmVzb3VyY2UgPSBVUkx8UmVzcG9uc2U7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTElTUzxFeHRlbmRzICAgIGV4dGVuZHMgQ2xhc3MgICAgICAgICAgICAgID0gQ2xhc3MsXG5cdFx0XHRcdFx0XHRcdCBIb3N0ICAgICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQgICAgICAgID0gSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0XHRcdCBBdHRycyAgICAgIGV4dGVuZHMgc3RyaW5nICAgICAgICAgICAgID0gbmV2ZXIsXG5cdFx0XHRcdFx0XHRcdCBQYXJhbWV0ZXJzIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+ID0ge30+KHtcblx0XHRcdFx0XHRcdFx0XHRleHRlbmRzICAgICA6IHBfZXh0ZW5kcyxcblx0XHRcdFx0XHRcdFx0XHRob3N0ICAgICAgICA6IHBfaG9zdCxcblx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmNpZXM6IHBfZGVwcyxcblx0XHRcdFx0XHRcdFx0ICAgIGF0dHJpYnV0ZXMgIDogcF9hdHRycyxcblx0XHRcdFx0XHRcdFx0ICAgIHBhcmFtcyxcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50LFxuXHRcdFx0XHRcdFx0XHRcdGNzcyxcblx0XHRcdFx0XHRcdFx0XHRzaGFkb3cgICAgICA6IHBfc2hhZG93LFxuXHRcdFx0XHRcdFx0XHR9OiBMSVNTT3B0aW9uczxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1ldGVycz4gPSB7fSkge1xuXG5cdC8vVE9ETyBtZXJnZSBwcm9wIGlmIGV4dGVuZHMgTElTUy4uLlxuXG5cdGNvbnN0IGhvc3QgICAgICAgID0gcF9ob3N0ICAgID8/IEhUTUxFbGVtZW50IGFzIENvbnN0cnVjdG9yPEhvc3Q+O1xuXHRjb25zdCBfZXh0ZW5kcyAgICA9IHBfZXh0ZW5kcyA/PyBPYmplY3QgICAgICBhcyB1bmtub3duIGFzIENvbnN0cnVjdG9yPEV4dGVuZHM+O1xuXHRjb25zdCBhdHRyaWJ1dGVzICA9IHBfYXR0cnMgICA/PyBbXTtcblx0Y29uc3QgZGVwZW5kZW5jaWVzPSBwX2RlcHMgICAgPyBbLi4ucF9kZXBzXSA6IFtdO1xuXHRjb25zdCBjYW5IYXNTaGFkb3c9IF9jYW5IYXNTaGFkb3coaG9zdCk7XG5cdGNvbnN0IHNoYWRvdyAgICAgID0gcF9zaGFkb3cgID8/IChjYW5IYXNTaGFkb3cgPyBTaGFkb3dDZmcuQ0xPU0UgOiBTaGFkb3dDZmcuTk9ORSk7XG5cblx0aWYoICEgY2FuSGFzU2hhZG93ICYmIHNoYWRvdyAhPT0gU2hhZG93Q2ZnLk5PTkUpXG5cdFx0dGhyb3cgbmV3IEVycm9yKGBIb3N0IGVsZW1lbnQgJHtfZWxlbWVudDJ0YWduYW1lKGhvc3QpfSBkb2VzIG5vdCBzdXBwb3J0IFNoYWRvd1Jvb3RgKTtcblxuXHQvLyBDT05URU5UIHByb2Nlc3Npbmdcblx0aWYoIGNvbnRlbnQgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdGRlcGVuZGVuY2llcy5wdXNoKCAoIGFzeW5jICgpID0+IHtcblxuXHRcdFx0Y29udGVudCA9IGF3YWl0IGNvbnRlbnQ7XG5cblx0XHRcdGlmKGNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MVGVtcGxhdGVFbGVtZW50KVxuXHRcdFx0Y29udGVudCA9IGNvbnRlbnQuaW5uZXJIVE1MO1xuXG5cdFx0XHRpZiggdHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHtcblxuXHRcdFx0XHRjb250ZW50ID0gY29udGVudC50cmltKCk7IC8vIE5ldmVyIHJldHVybiBhIHRleHQgbm9kZSBvZiB3aGl0ZXNwYWNlIGFzIHRoZSByZXN1bHRcblx0XHRcdFx0aWYoY29udGVudCA9PT0gJycpXG5cdFx0XHRcdFx0Y29udGVudCA9IHVuZGVmaW5lZDtcblxuXHRcdFx0fVxuXHRcdFx0aWYoIGNvbnRlbnQgaW5zdGFuY2VvZiBSZXNwb25zZSApXG5cdFx0XHRcdGNvbnRlbnQgPSBhd2FpdCBjb250ZW50LnRleHQoKTtcblxuXHRcdFx0cmV0dXJuIExJU1NCYXNlLlBhcmFtZXRlcnMuY29udGVudCA9IGNvbnRlbnQ7XG5cdFx0fSkoKSApO1xuXHR9XG5cblx0Ly8gQ1NTIHByb2Nlc3Npbmdcblx0bGV0IHN0eWxlc2hlZXRzOiByZWFkb25seSBDU1NTdHlsZVNoZWV0W10gPSBbXTtcblx0aWYoIGNzcyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0aWYoICEgQXJyYXkuaXNBcnJheShjc3MpIClcblx0XHRcdGNzcyA9IFtjc3MgYXMgQ1NTX1NvdXJjZV07XG5cblx0XHRzdHlsZXNoZWV0cyA9IG5ldyBBcnJheTxDU1NTdHlsZVNoZWV0Pihjc3MubGVuZ3RoKTtcblxuXHRcdGNvbnN0IGZldGNoX2NzcyA9IChhc3luYyAoY3NzOiBDU1NfU291cmNlKSA9PiB7XG5cdFx0XHRjc3MgPSBhd2FpdCBjc3M7XG5cdFx0XHRpZihjc3MgaW5zdGFuY2VvZiBDU1NTdHlsZVNoZWV0KVxuXHRcdFx0XHRyZXR1cm4gY3NzO1xuXHRcdFx0aWYoIGNzcyBpbnN0YW5jZW9mIEhUTUxTdHlsZUVsZW1lbnQpXG5cdFx0XHRcdHJldHVybiBjc3Muc2hlZXQhO1xuXG5cdFx0XHRsZXQgc3R5bGUgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuXHRcdFx0aWYoIHR5cGVvZiBjc3MgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRcdHN0eWxlLnJlcGxhY2UoY3NzKTtcblx0XHRcdFx0cmV0dXJuIHN0eWxlO1xuXHRcdFx0fVxuXG5cdFx0XHQvL2lmKCBjc3MgaW5zdGFuY2VvZiBSZXNwb25zZSApXG5cdFx0XHRzdHlsZS5yZXBsYWNlKGF3YWl0IGNzcy50ZXh0KCkpO1xuXHRcdFx0cmV0dXJuIHN0eWxlO1xuXHRcdH0pO1xuXG5cdFx0ZGVwZW5kZW5jaWVzLnB1c2goIC4uLmNzcy5tYXAoIGFzeW5jIChjc3MsIGlkeCkgPT4gIChzdHlsZXNoZWV0cyBhcyBhbnkpW2lkeF0gPSBhd2FpdCBmZXRjaF9jc3MoY3NzKSApICk7XG5cdH1cblxuXHR0eXBlIExIb3N0ID0gTElTU0hvc3Q8TElTU0Jhc2U+O1xuXG5cdC8vIEB0cy1pZ25vcmVcblx0Y2xhc3MgTElTU0Jhc2UgZXh0ZW5kcyBfZXh0ZW5kcyB7XG5cblx0XHRyZWFkb25seSAjaG9zdDogYW55OyAvLyBwcmV2ZW50cyBpc3N1ZSAjMS4uLlxuXG5cdFx0Y29uc3RydWN0b3IoKSB7XG5cblx0XHRcdHN1cGVyKCk7XG5cblx0XHRcdC8vIGg0Y2ssIG9rYXkgYmVjYXVzZSBKUyBpcyBtb25vdGhyZWFkZWQuXG5cdFx0XHRpZiggX19jc3RyX2hvc3QgPT09IG51bGwgKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgZG8gbm90IGRpcmVjdGx5IGNhbGwgdGhpcyBjb25zdHJ1Y3RvclwiKTtcblx0XHRcdHRoaXMuI2hvc3QgPSBfX2NzdHJfaG9zdDtcblx0XHRcdF9fY3N0cl9ob3N0ID0gbnVsbDtcblx0XHR9XG5cblx0XHRwdWJsaWMgZ2V0IGhvc3QoKTogSG9zdCB7XG5cdFx0XHRyZXR1cm4gdGhpcy4jaG9zdDtcblx0XHR9XG5cdFx0cHJvdGVjdGVkIGdldCBhdHRycygpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkuYXR0cnM7XG5cdFx0fVxuXHRcdHByb3RlY3RlZCBzZXRBdHRyRGVmYXVsdCggYXR0cjogQXR0cnMsIHZhbHVlOiBzdHJpbmd8bnVsbCkge1xuXHRcdFx0cmV0dXJuICh0aGlzLiNob3N0IGFzIExIb3N0KS5zZXRBdHRyRGVmYXVsdChhdHRyLCB2YWx1ZSk7XG5cblx0XHR9XG5cdFx0cHJvdGVjdGVkIGdldCBwYXJhbXMoKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuI2hvc3QgYXMgTEhvc3QpLnBhcmFtcztcblx0XHR9XG5cdFx0cHJvdGVjdGVkIGdldCBjb250ZW50KCkge1xuXHRcdFx0cmV0dXJuICh0aGlzLiNob3N0IGFzIExIb3N0KS5jb250ZW50ITtcblx0XHR9XG5cblx0XHRzdGF0aWMgcmVhZG9ubHkgUGFyYW1ldGVycyA9IHtcblx0XHRcdGhvc3QsXG5cdFx0XHRkZXBlbmRlbmNpZXMsXG5cdFx0XHRhdHRyaWJ1dGVzLFxuXHRcdFx0cGFyYW1zLFxuXHRcdFx0Y29udGVudCxcblx0XHRcdHN0eWxlc2hlZXRzLFxuXHRcdFx0c2hhZG93LFxuXHRcdH07XG5cblx0XHRwcm90ZWN0ZWQgb25BdHRyQ2hhbmdlZChfbmFtZTogc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRcdF9vbGRWYWx1ZTogc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRcdF9uZXdWYWx1ZTogc3RyaW5nKTogdm9pZHxmYWxzZSB7fVxuXG5cdFx0cHJvdGVjdGVkIGdldCBpc0luRE9NKCkge1xuXHRcdFx0cmV0dXJuICh0aGlzLiNob3N0IGFzIExIb3N0KS5pc0luRE9NO1xuXHRcdH1cblx0XHRwcm90ZWN0ZWQgb25ET01Db25uZWN0ZWQoKSB7fVxuXHRcdHByb3RlY3RlZCBvbkRPTURpc2Nvbm5lY3RlZCgpIHt9XG5cdH1cblxuXHRyZXR1cm4gTElTU0Jhc2U7XG59XG5cbi8vVE9ETzogb3RoZXIgb3B0aW9ucy4uLlxuZnVuY3Rpb24gZXh0ZW5kc0xJU1M8RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdEF0dHJzMSAgIGV4dGVuZHMgc3RyaW5nLFxuXHRBdHRyczIgICBleHRlbmRzIHN0cmluZyxcblx0UGFyYW1zICBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pixcblx0VCBleHRlbmRzIExJU1NSZXR1cm5UeXBlPEV4dGVuZHMsIEhvc3QsIEF0dHJzMSwgUGFyYW1zPj4oTGlzczogVCwgcGFyYW1ldGVyczoge2F0dHJpYnV0ZXM6IHJlYWRvbmx5IEF0dHJzMltdfSkge1xuXG5cdC8vIFRPRE86IG90aGVyIG9wdGlvbnMuLi5cblx0Y29uc3QgYXR0cnMgPSBbLi4uTGlzcy5QYXJhbWV0ZXJzLmF0dHJpYnV0ZXMsIC4uLnBhcmFtZXRlcnMuYXR0cmlidXRlcyFdO1xuXHRjb25zdCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBMaXNzLlBhcmFtZXRlcnMsIHthdHRyaWJ1dGVzOiBhdHRyc30pO1xuXG5cdC8vIEB0cy1pZ25vcmUgOiBiZWNhdXNlIFRTIHN0dXBpZFxuXHRjbGFzcyBFeHRlbmRlZExJU1MgZXh0ZW5kcyBMaXNzIHtcblx0XHRjb25zdHJ1Y3RvciguLi50OiBhbnlbXSkge1xuXHRcdFx0Ly8gQHRzLWlnbm9yZSA6IGJlY2F1c2UgVFMgc3R1cGlkXG5cdFx0XHRzdXBlciguLi50KTtcblx0XHR9XG5cblx0XHRwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGF0dHJzKCkge1xuXHRcdFx0cmV0dXJuIHN1cGVyLmF0dHJzIGFzIFJlY29yZDxBdHRyczJ8QXR0cnMxLCBzdHJpbmd8bnVsbD47XG5cdFx0fVxuXG5cdFx0c3RhdGljIG92ZXJyaWRlIFBhcmFtZXRlcnMgPSBwYXJhbXM7XG5cdH1cblxuXHRyZXR1cm4gRXh0ZW5kZWRMSVNTO1xufVxuTElTUy5leHRlbmRzTElTUyA9IGV4dGVuZHNMSVNTO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIHR5cGUgaGVscGVycyA9PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnR5cGUgYnVpbGRMSVNTSG9zdFJldHVyblR5cGU8VD4gID0gVCBleHRlbmRzIExJU1NSZXR1cm5UeXBlPGluZmVyIEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluZmVyIEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluZmVyIEF0dHJzICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbmZlciBQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBSZXR1cm5UeXBlPHR5cGVvZiBidWlsZExJU1NIb3N0PEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXMsIFQ+PiA6IG5ldmVyO1xuXG5leHBvcnQgdHlwZSBMSVNTUmV0dXJuVHlwZTxcblx0RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdEF0dHJzICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4+ID0gUmV0dXJuVHlwZTx0eXBlb2YgTElTUzxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zPj47XG5leHBvcnQgdHlwZSBMSVNTQmFzZTxFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdFx0XHRcdFx0IEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHQgQXR0cnMgICBleHRlbmRzIHN0cmluZyxcblx0XHRcdFx0XHQgUGFyYW1zICBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pj4gPSBJbnN0YW5jZVR5cGU8TElTU1JldHVyblR5cGU8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcz4+O1xuZXhwb3J0IHR5cGUgTElTU0hvc3Q8TElTUyBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4gPiA9IEluc3RhbmNlVHlwZTxidWlsZExJU1NIb3N0UmV0dXJuVHlwZTxDb25zdHJ1Y3RvcjxMSVNTPiAmIHtQYXJhbWV0ZXJzOiBhbnl9Pj47XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1NIb3N0IGNsYXNzID09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxubGV0IGlkID0gMDtcblxuZnVuY3Rpb24gYnVpbGRMSVNTSG9zdDxFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdFx0XHRcdFx0ICAgSG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdCAgIEF0dHJzICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0ICAgUGFyYW1zICBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pixcblx0XHRcdFx0XHQgICBUIGV4dGVuZHMgTElTU1JldHVyblR5cGU8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcz4+KExpc3M6IFQsIF9wYXJhbXM6IFBhcnRpYWw8UGFyYW1zPiA9IHt9KSB7XG5cdGNvbnN0IHtcblx0XHRob3N0LFxuXHRcdGF0dHJpYnV0ZXMsXG5cdFx0Y29udGVudCxcblx0XHRzdHlsZXNoZWV0cyxcblx0XHRzaGFkb3csXG5cdH0gPSBMaXNzLlBhcmFtZXRlcnM7XG5cblx0Y29uc3QgYWxyZWFkeURlY2xhcmVkQ1NTID0gbmV3IFNldCgpO1xuXG5cdGNvbnN0IEdFVCA9IFN5bWJvbCgnZ2V0Jyk7XG5cdGNvbnN0IFNFVCA9IFN5bWJvbCgnc2V0Jyk7XG5cblx0Y29uc3QgcHJvcGVydGllcyA9IE9iamVjdC5mcm9tRW50cmllcyggYXR0cmlidXRlcy5tYXAobiA9PiBbbiwge1xuXG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uKCk6IHN0cmluZ3xudWxsICAgICAgeyByZXR1cm4gKHRoaXMgYXMgdW5rbm93biBhcyBBdHRyaWJ1dGVzKVtHRVRdKG4pOyB9LFxuXHRcdHNldDogZnVuY3Rpb24odmFsdWU6IHN0cmluZ3xudWxsKSB7IHJldHVybiAodGhpcyBhcyB1bmtub3duIGFzIEF0dHJpYnV0ZXMpW1NFVF0obiwgdmFsdWUpOyB9XG5cdH1dKSApO1xuXG5cdGNsYXNzIEF0dHJpYnV0ZXMge1xuICAgICAgICBbeDogc3RyaW5nXTogc3RyaW5nfG51bGw7XG5cbiAgICAgICAgI2RhdGEgICAgIDogUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD47XG4gICAgICAgICNkZWZhdWx0cyA6IFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuICAgICAgICAjc2V0dGVyICAgOiAobmFtZTogQXR0cnMsIHZhbHVlOiBzdHJpbmd8bnVsbCkgPT4gdm9pZDtcblxuICAgICAgICBbR0VUXShuYW1lOiBBdHRycykge1xuICAgICAgICBcdHJldHVybiB0aGlzLiNkYXRhW25hbWVdID8/IHRoaXMuI2RlZmF1bHRzW25hbWVdID8/IG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIFtTRVRdKG5hbWU6IEF0dHJzLCB2YWx1ZTogc3RyaW5nfG51bGwpe1xuICAgICAgICBcdHJldHVybiB0aGlzLiNzZXR0ZXIobmFtZSwgdmFsdWUpOyAvLyByZXF1aXJlZCB0byBnZXQgYSBjbGVhbiBvYmplY3Qgd2hlbiBkb2luZyB7Li4uYXR0cnN9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhICAgIDogUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD4sXG5cdFx0XHRcdFx0ZGVmYXVsdHM6IFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+LFxuICAgICAgICBcdFx0XHRzZXR0ZXIgIDogKG5hbWU6IEF0dHJzLCB2YWx1ZTogc3RyaW5nfG51bGwpID0+IHZvaWQpIHtcblxuICAgICAgICBcdHRoaXMuI2RhdGEgICAgID0gZGF0YTtcblx0XHRcdHRoaXMuI2RlZmF1bHRzID0gZGVmYXVsdHM7XG4gICAgICAgIFx0dGhpcy4jc2V0dGVyID0gc2V0dGVyO1xuXG4gICAgICAgIFx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywgcHJvcGVydGllcyk7XG4gICAgICAgIH1cblx0fVxuXG5cdC8vIEB0cy1pZ25vcmUgOiBiZWNhdXNlIFRTIGlzIHN0dXBpZC5cblx0Y2xhc3MgTElTU0hvc3RCYXNlIGV4dGVuZHMgaG9zdCB7XG5cblx0XHRyZWFkb25seSAjcGFyYW1zOiBQYXJhbXM7XG5cblx0XHRyZWFkb25seSAjaWQgPSArK2lkOyAvLyBmb3IgZGVidWdcblxuXHRcdGNvbnN0cnVjdG9yKHBhcmFtczogUGFydGlhbDxQYXJhbXM+ID0ge30pIHtcblx0XHRcdHN1cGVyKCk7XG5cdFx0XHR0aGlzLiNwYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBMaXNzLlBhcmFtZXRlcnMucGFyYW1zLCBfcGFyYW1zLCBwYXJhbXMpO1xuXG5cdFx0XHR0aGlzLiN3YWl0SW5pdCA9IG5ldyBQcm9taXNlKCAocmVzb2x2ZSkgPT4ge1xuXHRcdFx0XHRpZih0aGlzLmlzSW5pdClcblx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZSh0aGlzLiNBUEkhKTtcblx0XHRcdFx0dGhpcy4jcmVzb2x2ZSA9IHJlc29sdmU7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvKioqKiBwdWJsaWMgQVBJICoqKioqKioqKioqKiovXG5cblx0XHRnZXQgaXNJbml0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuI0FQSSAhPT0gbnVsbDtcblx0XHR9XG5cdFx0aW5pdGlhbGl6ZShwYXJhbXM6IFBhcnRpYWw8UGFyYW1zPiA9IHt9KSB7XG5cblx0XHRcdGlmKCB0aGlzLmlzSW5pdCApXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignRWxlbWVudCBhbHJlYWR5IGluaXRpYWxpemVkIScpO1xuXG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMuI3BhcmFtcywgcGFyYW1zKTtcblxuXHRcdFx0Y29uc3QgYXBpID0gdGhpcy5pbml0KCk7XG5cblx0XHRcdGlmKCB0aGlzLiNpc0luRE9NIClcblx0XHRcdFx0KGFwaSBhcyBhbnkpLm9uRE9NQ29ubmVjdGVkKCk7XG5cblx0XHRcdHJldHVybiBhcGk7XG5cdFx0fVxuXG5cdFx0Z2V0IExJU1NTeW5jKCkge1xuXHRcdFx0aWYoICEgdGhpcy5pc0luaXQgKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0FjY2Vzc2luZyBBUEkgYmVmb3JlIFdlYkNvbXBvbmVudCBpbml0aWFsaXphdGlvbiEnKTtcblx0XHRcdHJldHVybiB0aGlzLiNBUEkhO1xuXHRcdH1cblx0XHRnZXQgTElTUygpIHtcblx0XHRcdHJldHVybiB0aGlzLiN3YWl0SW5pdDtcblx0XHR9XG5cblx0XHQvKioqIGluaXQgKioqL1xuXHRcdCN3YWl0SW5pdDogUHJvbWlzZTxJbnN0YW5jZVR5cGU8VD4+O1xuXHRcdCNyZXNvbHZlOiAoKHU6IEluc3RhbmNlVHlwZTxUPikgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcblx0XHQjQVBJOiBJbnN0YW5jZVR5cGU8VD4gfCBudWxsID0gbnVsbDtcblxuXHRcdCNpc0luRE9NID0gZmFsc2U7XG5cdFx0Z2V0IGlzSW5ET00oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4jaXNJbkRPTTtcblx0XHR9XG5cblx0XHRkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHRcdHRoaXMuI2lzSW5ET00gPSBmYWxzZTtcblx0XHRcdCh0aGlzLiNBUEkhIGFzIGFueSkub25ET01EaXNjb25uZWN0ZWQoKTtcblx0XHR9XG5cblx0XHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblxuXHRcdFx0dGhpcy4jaXNJbkRPTSA9IHRydWU7XG5cdFxuXHRcdFx0aWYoICEgdGhpcy5pc0luaXQgKSB7XG5cdFx0XHRcdHRoaXMuaW5pdCgpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdCh0aGlzLiNBUEkhIGFzIGFueSkub25ET01Db25uZWN0ZWQoKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIGluaXQoKSB7XG5cdFx0XHRcblx0XHRcdGN1c3RvbUVsZW1lbnRzLnVwZ3JhZGUodGhpcyk7XG5cdFx0XHRcblx0XHRcdC8vIHNoYWRvd1xuXHRcdFx0dGhpcy4jY29udGVudCA9IHRoaXMgYXMgdW5rbm93biBhcyBIb3N0O1xuXHRcdFx0aWYoIHNoYWRvdyAhPT0gJ25vbmUnKSB7XG5cdFx0XHRcdHRoaXMuI2NvbnRlbnQgPSB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogc2hhZG93fSk7XG5cblx0XHRcdFx0Ly9AdHMtaWdub3JlXG5cdFx0XHRcdHRoaXMuI2NvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrRXZlbnQpO1xuXHRcdFx0XHQvL0B0cy1pZ25vcmVcblx0XHRcdFx0dGhpcy4jY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIG9uQ2xpY2tFdmVudCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGF0dHJzXG5cdFx0XHRmb3IobGV0IG9icyBvZiBhdHRyaWJ1dGVzISlcblx0XHRcdFx0dGhpcy4jYXR0cmlidXRlc1tvYnNdID0gdGhpcy5nZXRBdHRyaWJ1dGUob2JzKTtcblxuXHRcdFx0Ly8gY3NzXG5cdFx0XHRpZiggc2hhZG93ICE9PSAnbm9uZScpXG5cdFx0XHRcdCh0aGlzLiNjb250ZW50IGFzIFNoYWRvd1Jvb3QpLmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHNoYXJlZENTUyk7XG5cdFx0XHRpZiggc3R5bGVzaGVldHMubGVuZ3RoICkge1xuXG5cdFx0XHRcdGlmKCBzaGFkb3cgIT09ICdub25lJylcblx0XHRcdFx0XHQodGhpcy4jY29udGVudCBhcyBTaGFkb3dSb290KS5hZG9wdGVkU3R5bGVTaGVldHMucHVzaCguLi5zdHlsZXNoZWV0cyk7XG5cdFx0XHRcdGVsc2Uge1xuXG5cdFx0XHRcdFx0Y29uc3QgY3Nzc2VsZWN0b3IgPSB0aGlzLkNTU1NlbGVjdG9yO1xuXG5cdFx0XHRcdFx0Ly8gaWYgbm90IHlldCBpbnNlcnRlZCA6XG5cdFx0XHRcdFx0aWYoICEgYWxyZWFkeURlY2xhcmVkQ1NTLmhhcyhjc3NzZWxlY3RvcikgKSB7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cblx0XHRcdFx0XHRcdHN0eWxlLnNldEF0dHJpYnV0ZSgnZm9yJywgY3Nzc2VsZWN0b3IpO1xuXG5cdFx0XHRcdFx0XHRsZXQgaHRtbF9zdHlsZXNoZWV0cyA9IFwiXCI7XG5cblx0XHRcdFx0XHRcdGZvcihsZXQgc3R5bGUgb2Ygc3R5bGVzaGVldHMpXG5cdFx0XHRcdFx0XHRcdGZvcihsZXQgcnVsZSBvZiBzdHlsZS5jc3NSdWxlcylcblx0XHRcdFx0XHRcdFx0XHRodG1sX3N0eWxlc2hlZXRzICs9IHJ1bGUuY3NzVGV4dCArICdcXG4nO1xuXG5cdFx0XHRcdFx0XHRzdHlsZS5pbm5lckhUTUwgPSBodG1sX3N0eWxlc2hlZXRzLnJlcGxhY2UoJzpob3N0JywgYDppcygke2Nzc3NlbGVjdG9yfSlgKTtcblxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmQoc3R5bGUpO1xuXG5cdFx0XHRcdFx0XHRhbHJlYWR5RGVjbGFyZWRDU1MuYWRkKGNzc3NlbGVjdG9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gY29udGVudFxuXHRcdFx0aWYoIGNvbnRlbnQgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0bGV0IHRlbXBsYXRlX2VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXHRcdFx0XHRsZXQgc3RyID0gKGNvbnRlbnQgYXMgc3RyaW5nKS5yZXBsYWNlKC9cXCRcXHsoLis/KVxcfS9nLCAoXywgbWF0Y2gpID0+IHRoaXMuZ2V0QXR0cmlidXRlKG1hdGNoKT8/JycpXG5cdCAgICBcdFx0dGVtcGxhdGVfZWxlbS5pbm5lckhUTUwgPSBzdHI7XG5cdCAgICBcdFx0dGhpcy4jY29udGVudC5hcHBlbmQoLi4udGVtcGxhdGVfZWxlbS5jb250ZW50LmNoaWxkTm9kZXMpO1xuXHQgICAgXHR9XG5cblx0ICAgIFx0Ly8gYnVpbGRcblxuXHQgICAgXHQvLyBoNGNrLCBva2F5IGJlY2F1c2UgSlMgaXMgbW9ub3RocmVhZGVkLlxuXHRcdFx0X19jc3RyX2hvc3QgICA9IHRoaXM7XG5cblx0ICAgIFx0bGV0IG9iaiA9IG5ldyBMaXNzKCk7XG5cblx0ICAgIFx0LyppZiggb2JqIGluc3RhbmNlb2YgUHJvbWlzZSlcblx0ICAgIFx0XHRvYmogPSBhd2FpdCBvYmo7Ki9cblxuXHRcdFx0dGhpcy4jQVBJID0gb2JqIGFzIEluc3RhbmNlVHlwZTxUPjtcblxuXHRcdFx0Ly8gZGVmYXVsdCBzbG90XG5cdFx0XHRpZiggdGhpcy5oYXNTaGFkb3cgJiYgdGhpcy4jY29udGVudC5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCApXG5cdFx0XHRcdHRoaXMuI2NvbnRlbnQuYXBwZW5kKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbG90JykgKTtcblxuXHRcdFx0aWYoIHRoaXMuI3Jlc29sdmUgIT09IG51bGwpXG5cdFx0XHRcdHRoaXMuI3Jlc29sdmUodGhpcy4jQVBJKTtcblxuXHRcdFx0cmV0dXJuIHRoaXMuI0FQSTtcblx0XHR9XG5cblx0XHRnZXQgcGFyYW1zKCk6IFBhcmFtcyB7XG5cdFx0XHRyZXR1cm4gdGhpcy4jcGFyYW1zO1xuXHRcdH1cblxuXG5cdFx0LyoqKiBjb250ZW50ICoqKi9cblx0XHQjY29udGVudDogSG9zdHxTaGFkb3dSb290fG51bGwgPSBudWxsO1xuXG5cdFx0Z2V0IGNvbnRlbnQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4jY29udGVudDtcblx0XHR9XG5cblx0XHRnZXRQYXJ0KG5hbWU6IHN0cmluZykge1xuXHRcdFx0cmV0dXJuIHRoaXMuaGFzU2hhZG93XG5cdFx0XHRcdFx0PyB0aGlzLiNjb250ZW50Py5xdWVyeVNlbGVjdG9yKGA6OnBhcnQoJHtuYW1lfSlgKVxuXHRcdFx0XHRcdDogdGhpcy4jY29udGVudD8ucXVlcnlTZWxlY3RvcihgW3BhcnQ9XCIke25hbWV9XCJdYCk7XG5cdFx0fVxuXHRcdGdldFBhcnRzKG5hbWU6IHN0cmluZykge1xuXHRcdFx0cmV0dXJuIHRoaXMuaGFzU2hhZG93XG5cdFx0XHRcdFx0PyB0aGlzLiNjb250ZW50Py5xdWVyeVNlbGVjdG9yQWxsKGA6OnBhcnQoJHtuYW1lfSlgKVxuXHRcdFx0XHRcdDogdGhpcy4jY29udGVudD8ucXVlcnlTZWxlY3RvckFsbChgW3BhcnQ9XCIke25hbWV9XCJdYCk7XG5cdFx0fVxuXG5cdFx0cHJvdGVjdGVkIGdldCBoYXNTaGFkb3coKTogYm9vbGVhbiB7XG5cdFx0XHRyZXR1cm4gc2hhZG93ICE9PSAnbm9uZSc7XG5cdFx0fVxuXG5cdFx0LyoqKiBDU1MgKioqL1xuXG5cdFx0Z2V0IENTU1NlbGVjdG9yKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaGFzU2hhZG93XG5cdFx0XHRcdFx0PyB0aGlzLnRhZ05hbWVcblx0XHRcdFx0XHQ6IGAke3RoaXMudGFnTmFtZX1baXM9XCIke3RoaXMuZ2V0QXR0cmlidXRlKFwiaXNcIil9XCJdYDtcblx0XHR9XG5cblx0XHQvKioqIGF0dHJzICoqKi9cblx0XHQjYXR0cnNfZmxhZyA9IGZhbHNlO1xuXG5cdFx0I2F0dHJpYnV0ZXMgICAgICAgICA9IHt9IGFzIFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuXHRcdCNhdHRyaWJ1dGVzRGVmYXVsdHMgPSB7fSBhcyBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPjtcblx0XHQjYXR0cnMgPSBuZXcgQXR0cmlidXRlcyhcblx0XHRcdHRoaXMuI2F0dHJpYnV0ZXMsXG5cdFx0XHR0aGlzLiNhdHRyaWJ1dGVzRGVmYXVsdHMsXG5cdFx0XHQobmFtZTogQXR0cnMsIHZhbHVlOnN0cmluZ3xudWxsKSA9PiB7XG5cblx0XHRcdFx0dGhpcy4jYXR0cmlidXRlc1tuYW1lXSA9IHZhbHVlO1xuXG5cdFx0XHRcdHRoaXMuI2F0dHJzX2ZsYWcgPSB0cnVlOyAvLyBkbyBub3QgdHJpZ2dlciBvbkF0dHJzQ2hhbmdlZC5cblx0XHRcdFx0aWYoIHZhbHVlID09PSBudWxsKVxuXHRcdFx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXHRcdFx0fVxuXHRcdCkgYXMgdW5rbm93biBhcyBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPjtcblxuXHRcdHNldEF0dHJEZWZhdWx0KG5hbWU6IEF0dHJzLCB2YWx1ZTogc3RyaW5nfG51bGwpIHtcblx0XHRcdGlmKCB2YWx1ZSA9PT0gbnVsbClcblx0XHRcdFx0ZGVsZXRlIHRoaXMuI2F0dHJpYnV0ZXNEZWZhdWx0c1tuYW1lXTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0dGhpcy4jYXR0cmlidXRlc0RlZmF1bHRzW25hbWVdID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0Z2V0IGF0dHJzKCk6IFJlYWRvbmx5PFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+PiB7XG5cblx0XHRcdHJldHVybiB0aGlzLiNhdHRycztcblx0XHR9XG5cblx0XHRzdGF0aWMgb2JzZXJ2ZWRBdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcblx0XHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSAgICA6IEF0dHJzLFxuXHRcdFx0XHRcdFx0XHRcdCBvbGRWYWx1ZTogc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRcdCBuZXdWYWx1ZTogc3RyaW5nKSB7XG5cblx0XHRcdGlmKHRoaXMuI2F0dHJzX2ZsYWcpIHtcblx0XHRcdFx0dGhpcy4jYXR0cnNfZmxhZyA9IGZhbHNlO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuI2F0dHJpYnV0ZXNbbmFtZV0gPSBuZXdWYWx1ZTtcblx0XHRcdGlmKCAhIHRoaXMuaXNJbml0IClcblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRpZiggKHRoaXMuI0FQSSEgYXMgYW55KS5vbkF0dHJDaGFuZ2VkKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkgPT09IGZhbHNlKSB7XG5cdFx0XHRcdHRoaXMuI2F0dHJzW25hbWVdID0gb2xkVmFsdWU7IC8vIHJldmVydCB0aGUgY2hhbmdlLlxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gTElTU0hvc3RCYXNlO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIGRlZmluZSA9PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IF9ET01Db250ZW50TG9hZGVkID0gbmV3IFByb21pc2U8dm9pZD4oIChyZXNvbHZlKSA9PiB7XG5cblx0aWYoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJpbnRlcmFjdGl2ZVwiIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIilcblx0XHRyZXR1cm4gcmVzb2x2ZSgpO1xuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cdFx0cmVzb2x2ZSgpO1xuXHR9LCB0cnVlKTtcbn0pO1xuXG5MSVNTLmRlZmluZSA9IGFzeW5jIGZ1bmN0aW9uPEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0XHRcdFx0XHRcdFx0IEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHRcdCAgICAgQXR0cnMgICBleHRlbmRzIHN0cmluZyxcblx0XHRcdFx0XHRcdCAgICAgUGFyYW1zICBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pixcblx0XHRcdFx0XHRcdCAgIFx0IFQgZXh0ZW5kcyBMSVNTUmV0dXJuVHlwZTxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zPj4oXG5cdFx0XHRcdFx0XHQgICBcdHRhZ25hbWU6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0Q29tcG9uZW50Q2xhc3M6IFQsXG5cdFx0XHRcdFx0XHRcdHtkZXBlbmRlbmNpZXMsIHBhcmFtc306IHtwYXJhbXM/OiBQYXJ0aWFsPFBhcmFtcz4sIGRlcGVuZGVuY2llcz86IHJlYWRvbmx5IFByb21pc2U8c3RyaW5nPltdfSA9IHt9KSB7XG5cblx0ZGVwZW5kZW5jaWVzPz89W107XG5cdHBhcmFtcyAgICAgID8/PSB7fTtcblxuXHRjb25zdCBDbGFzcyA9IENvbXBvbmVudENsYXNzLlBhcmFtZXRlcnMuaG9zdDtcblx0bGV0IExJU1NCYXNlOiBhbnkgPSBDb21wb25lbnRDbGFzcztcblx0bGV0IGh0bWx0YWcgPSBfZWxlbWVudDJ0YWduYW1lKENsYXNzKT8/dW5kZWZpbmVkO1xuXG5cdGF3YWl0IFByb21pc2UuYWxsKFtfRE9NQ29udGVudExvYWRlZCwgLi4uZGVwZW5kZW5jaWVzLCAuLi5MSVNTQmFzZS5QYXJhbWV0ZXJzLmRlcGVuZGVuY2llc10pO1xuXG5cdGNvbnN0IExJU1NjbGFzcyA9IGJ1aWxkTElTU0hvc3Q8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcywgVD4oQ29tcG9uZW50Q2xhc3MsIHBhcmFtcyk7XG5cdFxuXHRjb25zdCBvcHRzID0gaHRtbHRhZyA9PT0gdW5kZWZpbmVkID8ge31cblx0XHRcdFx0XHRcdFx0XHRcdCAgIDoge2V4dGVuZHM6IGh0bWx0YWd9O1xuXHRcblx0Y3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ25hbWUsIExJU1NjbGFzcywgb3B0cyk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIFNoYWRvd1Jvb3QgdG9vbHMgPT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IHNoYXJlZENTUyA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG5kb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChzaGFyZWRDU1MpO1xuXG5MSVNTLmluc2VydEdsb2JhbENTU1J1bGVzID0gZnVuY3Rpb24oY3NzOiBzdHJpbmd8SFRNTFN0eWxlRWxlbWVudCkge1xuXG5cdGxldCBjc3Nfc3R5bGUhOiBDU1NTdHlsZVNoZWV0O1xuXG5cdGlmKCBjc3MgaW5zdGFuY2VvZiBIVE1MU3R5bGVFbGVtZW50IClcblx0XHRjc3Nfc3R5bGUgPSBjc3Muc2hlZXQhO1xuXHRpZiggdHlwZW9mIGNzcyA9PT0gXCJzdHJpbmdcIikge1xuXHRcdGNzc19zdHlsZSA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG5cdFx0Y3NzX3N0eWxlLnJlcGxhY2VTeW5jKGNzcyk7XG5cdH1cblxuXHRmb3IobGV0IHJ1bGUgb2YgY3NzX3N0eWxlLmNzc1J1bGVzKVxuXHRcdHNoYXJlZENTUy5pbnNlcnRSdWxlKHJ1bGUuY3NzVGV4dCk7XG59XG5cbnR5cGUgRGVsZWdhdGVkSGFuZGxlciA9IFtzdHJpbmcsIChldjogTW91c2VFdmVudCkgPT4gdm9pZF07XG5jb25zdCBERUxFR0FURURfRVZFTlRTID0ge1xuXHRcImNsaWNrXCI6IFtdIGFzIERlbGVnYXRlZEhhbmRsZXJbXSxcblx0XCJkYmxjbGlja1wiOiBbXSBhcyBEZWxlZ2F0ZWRIYW5kbGVyW11cbn07XG5cbmNvbnN0IEFMUkVBRFlfUFJPQ0VTU0VEID0gU3ltYm9sKCk7XG5cbmZ1bmN0aW9uIG9uQ2xpY2tFdmVudChldjogTW91c2VFdmVudCkge1xuXG5cdGlmKCAoZXYgYXMgYW55KVtBTFJFQURZX1BST0NFU1NFRF0gPT09IHRydWUgKVxuXHRcdHJldHVybjtcblx0KGV2IGFzIGFueSlbQUxSRUFEWV9QUk9DRVNTRURdID0gdHJ1ZTtcblxuXHRjb25zdCBoYW5kbGVycyA9IERFTEVHQVRFRF9FVkVOVFNbZXYudHlwZSBhcyBrZXlvZiB0eXBlb2YgREVMRUdBVEVEX0VWRU5UU107XG5cblx0Zm9yKGxldCBlbGVtIG9mIGV2LmNvbXBvc2VkUGF0aCgpICkge1xuXHRcblx0XHRpZiggZWxlbSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgfHwgZWxlbSA9PT0gZG9jdW1lbnQgfHwgZWxlbSA9PT0gd2luZG93IClcblx0XHRcdGNvbnRpbnVlO1xuXG5cdFx0dmFyIHRhcmdldCA9IGVsZW0gYXMgRWxlbWVudDtcblxuXHRcdGZvcihsZXQgW3NlbGVjdG9yLCBoYW5kbGVyXSBvZiBoYW5kbGVycykge1xuXHRcdFx0aWYoIHRhcmdldC5tYXRjaGVzKHNlbGVjdG9yKSApXG5cdFx0XHRcdGhhbmRsZXIoZXYpO1xuXHRcdH1cblx0fVxufVxuXG5MSVNTLmluc2VydEdsb2JhbERlbGVnYXRlZExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnRfbmFtZToga2V5b2YgdHlwZW9mIERFTEVHQVRFRF9FVkVOVFMsIHNlbGVjdG9yOiBzdHJpbmcsIGhhbmRsZXI6IChldjogTW91c2VFdmVudCkgPT4gdm9pZCApIHtcblx0REVMRUdBVEVEX0VWRU5UU1tldmVudF9uYW1lXS5wdXNoKFtzZWxlY3RvciwgaGFuZGxlcl0pXG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGlja0V2ZW50KTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgb25DbGlja0V2ZW50KTtcblxuTElTUy5jbG9zZXN0ID0gZnVuY3Rpb24gY2xvc2VzdDxFIGV4dGVuZHMgRWxlbWVudD4oc2VsZWN0b3I6IHN0cmluZywgZWxlbWVudDogRWxlbWVudCkge1xuXG5cdHdoaWxlKHRydWUpIHtcblx0XHR2YXIgcmVzdWx0ID0gZWxlbWVudC5jbG9zZXN0PEU+KHNlbGVjdG9yKTtcblxuXHRcdGlmKCByZXN1bHQgIT09IG51bGwpXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXG5cdFx0Y29uc3Qgcm9vdCA9IGVsZW1lbnQuZ2V0Um9vdE5vZGUoKTtcblx0XHRpZiggISAoXCJob3N0XCIgaW4gcm9vdCkgKVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHRlbGVtZW50ID0gKHJvb3QgYXMgU2hhZG93Um9vdCkuaG9zdDtcblx0fVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIGhlbHBlcnMgPT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnR5cGUgaW5mZXJQYXJhbXM8VD4gPSBUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksIGluZmVyIFAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4+ID8gUCA6IG5ldmVyO1xuXG50eXBlIEJVSUxEX09QVElPTlM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+ID0gUGFydGlhbDx7XG5cdFx0XHRcdFx0ICBcdHBhcmFtcyAgICA6IFBhcnRpYWw8aW5mZXJQYXJhbXM8VD4+LFxuXHRcdFx0XHRcdCAgXHRjb250ZW50XHQgIDogc3RyaW5nfE5vZGV8cmVhZG9ubHkgTm9kZVtdLFxuXHRcdFx0XHRcdFx0aWQgXHRcdCAgOiBzdHJpbmcsXG5cdFx0XHRcdFx0ICBcdGNsYXNzZXNcdCAgOiByZWFkb25seSBzdHJpbmdbXSxcblx0XHRcdFx0XHQgIFx0Y3NzdmFycyAgIDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4sXG5cdFx0XHRcdFx0ICBcdGF0dHJzIFx0ICA6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIHN0cmluZ3xib29sZWFuPj4sXG5cdFx0XHRcdFx0ICBcdGRhdGEgXHQgIDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgc3RyaW5nfGJvb2xlYW4+Pixcblx0XHRcdFx0XHQgIFx0bGlzdGVuZXJzIDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgKGV2OiBFdmVudCkgPT4gdm9pZD4+XG5cdFx0XHRcdFx0fT4gJiAoe1xuXHRcdFx0XHRcdFx0aW5pdGlhbGl6ZTogZmFsc2UsXG5cdFx0XHRcdFx0XHRwYXJlbnQ6IEVsZW1lbnRcblx0XHRcdFx0XHR9fHtcblx0XHRcdFx0XHRcdGluaXRpYWxpemU/OiB0cnVlLFxuXHRcdFx0XHRcdFx0cGFyZW50PzogRWxlbWVudFxuXHRcdFx0XHRcdH0pO1xuXG5hc3luYyBmdW5jdGlvbiBidWlsZDxUIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4odGFnbmFtZTogVCwgb3B0aW9ucz86IEJVSUxEX09QVElPTlM8Q29tcG9uZW50c1tUXT4pOiBQcm9taXNlPENvbXBvbmVudHNbVF0+O1xuYXN5bmMgZnVuY3Rpb24gYnVpbGQ8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHRhZ25hbWU6IHN0cmluZywgb3B0aW9ucz86IEJVSUxEX09QVElPTlM8VD4pOiBQcm9taXNlPFQ+O1xuYXN5bmMgZnVuY3Rpb24gYnVpbGQ8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHRhZ25hbWU6IHN0cmluZywge1xuXHRcdHBhcmFtcyAgICA9IHt9LFxuXHRcdGluaXRpYWxpemU9IHRydWUsXG5cdFx0Y29udGVudCAgID0gW10sXG5cdFx0cGFyZW50ICAgID0gdW5kZWZpbmVkLFxuXHRcdGlkIFx0XHQgID0gdW5kZWZpbmVkLFxuXHRcdGNsYXNzZXMgICA9IFtdLFxuXHRcdGNzc3ZhcnMgICA9IHt9LFxuXHRcdGF0dHJzICAgICA9IHt9LFxuXHRcdGRhdGEgXHQgID0ge30sXG5cdFx0bGlzdGVuZXJzID0ge31cblx0fTogQlVJTERfT1BUSU9OUzxUPiA9IHt9KTogUHJvbWlzZTxUPiB7XG5cblx0aWYoICEgaW5pdGlhbGl6ZSAmJiBwYXJlbnQgPT09IG51bGwpXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQSBwYXJlbnQgbXVzdCBiZSBnaXZlbiBpZiBpbml0aWFsaXplIGlzIGZhbHNlXCIpO1xuXG5cdGxldCBDdXN0b21DbGFzcyA9IGF3YWl0IGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKHRhZ25hbWUpO1xuXHRsZXQgZWxlbSA9IG5ldyBDdXN0b21DbGFzcyhwYXJhbXMpIGFzIExJU1NIb3N0PFQ+O1xuXG5cdC8vIEZpeCBpc3N1ZSAjMlxuXHRpZiggZWxlbS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09IHRhZ25hbWUgKVxuXHRcdGVsZW0uc2V0QXR0cmlidXRlKFwiaXNcIiwgdGFnbmFtZSk7XG5cblx0aWYoIGlkICE9PSB1bmRlZmluZWQgKVxuXHRcdGVsZW0uaWQgPSBpZDtcblxuXHRpZiggY2xhc3Nlcy5sZW5ndGggPiAwKVxuXHRcdGVsZW0uY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcblxuXHRmb3IobGV0IG5hbWUgaW4gY3NzdmFycylcblx0XHRlbGVtLnN0eWxlLnNldFByb3BlcnR5KGAtLSR7bmFtZX1gLCBjc3N2YXJzW25hbWVdKTtcblxuXHRmb3IobGV0IG5hbWUgaW4gYXR0cnMpIHtcblxuXHRcdGxldCB2YWx1ZSA9IGF0dHJzW25hbWVdO1xuXHRcdGlmKCB0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKVxuXHRcdFx0ZWxlbS50b2dnbGVBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXHRcdGVsc2Vcblx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0fVxuXG5cdGZvcihsZXQgbmFtZSBpbiBkYXRhKSB7XG5cblx0XHRsZXQgdmFsdWUgPSBkYXRhW25hbWVdO1xuXHRcdGlmKCB2YWx1ZSA9PT0gZmFsc2UpXG5cdFx0XHRkZWxldGUgZWxlbS5kYXRhc2V0W25hbWVdO1xuXHRcdGVsc2UgaWYodmFsdWUgPT09IHRydWUpXG5cdFx0XHRlbGVtLmRhdGFzZXRbbmFtZV0gPSBcIlwiO1xuXHRcdGVsc2Vcblx0XHRcdGVsZW0uZGF0YXNldFtuYW1lXSA9IHZhbHVlO1xuXHR9XG5cblx0aWYoICEgQXJyYXkuaXNBcnJheShjb250ZW50KSApXG5cdFx0Y29udGVudCA9IFtjb250ZW50IGFzIGFueV07XG5cdGVsZW0ucmVwbGFjZUNoaWxkcmVuKC4uLmNvbnRlbnQpO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBsaXN0ZW5lcnMpXG5cdFx0ZWxlbS5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGxpc3RlbmVyc1tuYW1lXSk7XG5cblx0aWYoIHBhcmVudCAhPT0gdW5kZWZpbmVkIClcblx0XHRwYXJlbnQuYXBwZW5kKGVsZW0pO1xuXG5cdGlmKCAhIGVsZW0uaXNJbml0ICYmIGluaXRpYWxpemUgKVxuXHRcdHJldHVybiBhd2FpdCBMSVNTLmluaXRpYWxpemUoZWxlbSk7XG5cblx0cmV0dXJuIGF3YWl0IExJU1MuZ2V0TElTUyhlbGVtKTtcbn1cbkxJU1MuYnVpbGQgPSBidWlsZDtcblxuXG5MSVNTLndoZW5EZWZpbmVkICAgID0gYXN5bmMgZnVuY3Rpb24odGFnbmFtZTogc3RyaW5nLCBjYWxsYmFjaz86ICgpID0+IHZvaWQgKSA6IFByb21pc2U8dm9pZD4ge1xuXG5cdGF3YWl0IGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKHRhZ25hbWUpO1xuXG5cdGlmKCBjYWxsYmFjayAhPT0gdW5kZWZpbmVkKVxuXHRcdGNhbGxiYWNrKCk7XG5cblx0cmV0dXJuO1xufVxuTElTUy53aGVuQWxsRGVmaW5lZCA9IGFzeW5jIGZ1bmN0aW9uKHRhZ25hbWVzOiByZWFkb25seSBzdHJpbmdbXSwgY2FsbGJhY2s/OiAoKSA9PiB2b2lkICkgOiBQcm9taXNlPHZvaWQ+IHtcblxuXHRhd2FpdCBQcm9taXNlLmFsbCggdGFnbmFtZXMubWFwKCB0ID0+IGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKHQpICkgKVxuXG5cdGlmKCBjYWxsYmFjayAhPT0gdW5kZWZpbmVkKVxuXHRcdGNhbGxiYWNrKCk7XG5cbn1cblxuTElTUy5pc0RlZmluZWQgPSBmdW5jdGlvbihuYW1lOiBzdHJpbmcpIHtcblx0cmV0dXJuIGN1c3RvbUVsZW1lbnRzLmdldChuYW1lKTtcbn1cblxuTElTUy5zZWxlY3RvciA9IGZ1bmN0aW9uKG5hbWU/OiBzdHJpbmcpIHtcblx0aWYobmFtZSA9PT0gdW5kZWZpbmVkKSAvLyBqdXN0IGFuIGg0Y2tcblx0XHRyZXR1cm4gXCJcIjtcblx0cmV0dXJuIGA6aXMoJHtuYW1lfSwgW2lzPVwiJHtuYW1lfVwiXSlgO1xufVxuXG5MSVNTLmdldExJU1MgICAgPSBhc3luYyBmdW5jdGlvbjxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oIGVsZW1lbnQ6IEVsZW1lbnQgKSB7XG5cblx0YXdhaXQgTElTUy53aGVuRGVmaW5lZCggTElTUy5nZXROYW1lKGVsZW1lbnQpICk7XG5cblx0cmV0dXJuIChlbGVtZW50IGFzIExJU1NIb3N0PFQ+KS5MSVNTOyAvLyBlbnN1cmUgaW5pdGlhbGl6ZWQuXG59XG5MSVNTLmdldExJU1NTeW5jPSBmdW5jdGlvbjxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oIGVsZW1lbnQ6IEVsZW1lbnQgKSB7XG5cblx0aWYoICEgTElTUy5pc0RlZmluZWQoIExJU1MuZ2V0TmFtZShlbGVtZW50KSApIClcblx0XHR0aHJvdyBuZXcgRXJyb3IoYCR7bmFtZX0gaGFzbid0IGJlZW4gZGVmaW5lZCB5ZXQuYCk7XG5cblx0bGV0IGhvc3QgPSBlbGVtZW50IGFzIExJU1NIb3N0PFQ+O1xuXG5cdGlmKCAhIGhvc3QuaXNJbml0IClcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnN0YW5jZSBoYXNuJ3QgYmVlbiBpbml0aWFsaXplZCB5ZXQuXCIpO1xuXG5cdHJldHVybiBob3N0LkxJU1NTeW5jO1xufVxuTElTUy5pbml0aWFsaXplID0gYXN5bmMgZnVuY3Rpb248VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KCBlbGVtZW50OiBFbGVtZW50KSB7XG5cblx0YXdhaXQgTElTUy53aGVuRGVmaW5lZCggTElTUy5nZXROYW1lKGVsZW1lbnQpICk7XG5cblx0cmV0dXJuIGF3YWl0IChlbGVtZW50IGFzIExJU1NIb3N0PFQ+KS5pbml0aWFsaXplKCk7IC8vIGVuc3VyZSBpbml0aWFsaXphdGlvbi5cbn1cblxuTElTUy5nZXROYW1lID0gZnVuY3Rpb24oIGVsZW1lbnQ6IEVsZW1lbnQgKTogc3RyaW5nIHtcblxuXHRjb25zdCBuYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lzJykgPz8gZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFxuXHRpZiggISBuYW1lLmluY2x1ZGVzKCctJykgKVxuXHRcdHRocm93IG5ldyBFcnJvcihgRWxlbWVudCAke25hbWV9IGlzIG5vdCBhIFdlYkNvbXBvbmVudGApO1xuXG5cdHJldHVybiBuYW1lO1xufVxuXG5mdW5jdGlvbiBfYnVpbGRRUyhzZWxlY3Rvcjogc3RyaW5nLCB0YWduYW1lX29yX3BhcmVudD86IHN0cmluZyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCwgcGFyZW50OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXHRcblx0aWYoIHRhZ25hbWVfb3JfcGFyZW50ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHRhZ25hbWVfb3JfcGFyZW50ICE9PSAnc3RyaW5nJykge1xuXHRcdHBhcmVudCA9IHRhZ25hbWVfb3JfcGFyZW50O1xuXHRcdHRhZ25hbWVfb3JfcGFyZW50ID0gdW5kZWZpbmVkO1xuXHR9XG5cblx0cmV0dXJuIFtgJHtzZWxlY3Rvcn0ke0xJU1Muc2VsZWN0b3IodGFnbmFtZV9vcl9wYXJlbnQgYXMgc3RyaW5nfHVuZGVmaW5lZCl9YCwgcGFyZW50XSBhcyBjb25zdDtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBRdWVyeVNlbGVjdG9ycyA9PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5hc3luYyBmdW5jdGlvbiBxczxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTxUPjtcbmFzeW5jIGZ1bmN0aW9uIHFzPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPCBDb21wb25lbnRzW05dID47XG5hc3luYyBmdW5jdGlvbiBxczxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LFxuXHRcdFx0XHRcdFx0cGFyZW50ICA6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cblx0W3NlbGVjdG9yLCBwYXJlbnRdID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBwYXJlbnQpO1xuXG5cdGxldCByZXN1bHQgPSBhd2FpdCBMSVNTLnFzbzxUPihzZWxlY3RvciwgcGFyZW50KTtcblx0aWYocmVzdWx0ID09PSBudWxsKVxuXHRcdHRocm93IG5ldyBFcnJvcihgRWxlbWVudCAke3NlbGVjdG9yfSBub3QgZm91bmRgKTtcblxuXHRyZXR1cm4gcmVzdWx0IVxufVxuTElTUy5xcyAgPSBxc1xuXG5hc3luYyBmdW5jdGlvbiBxc288VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8VD47XG5hc3luYyBmdW5jdGlvbiBxc288TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8IENvbXBvbmVudHNbTl0gPjtcbmFzeW5jIGZ1bmN0aW9uIHFzbzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LFxuXHRcdFx0XHRcdFx0cGFyZW50ICA6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cblx0W3NlbGVjdG9yLCBwYXJlbnRdID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBwYXJlbnQpO1xuXG5cdGNvbnN0IGVsZW1lbnQgPSBwYXJlbnQucXVlcnlTZWxlY3RvcjxMSVNTSG9zdDxUPj4oc2VsZWN0b3IpO1xuXHRpZiggZWxlbWVudCA9PT0gbnVsbCApXG5cdFx0cmV0dXJuIG51bGw7XG5cblx0cmV0dXJuIGF3YWl0IExJU1MuZ2V0TElTUyggZWxlbWVudCApO1xufVxuTElTUy5xc28gPSBxc29cblxuYXN5bmMgZnVuY3Rpb24gcXNhPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPFRbXT47XG5hc3luYyBmdW5jdGlvbiBxc2E8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8IENvbXBvbmVudHNbTl1bXSA+O1xuYXN5bmMgZnVuY3Rpb24gcXNhPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsXG5cdFx0XHRcdFx0XHRwYXJlbnQgIDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblxuXHRbc2VsZWN0b3IsIHBhcmVudF0gPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIHBhcmVudCk7XG5cblx0Y29uc3QgZWxlbWVudHMgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbDxMSVNTSG9zdDxUPj4oc2VsZWN0b3IpO1xuXG5cdGxldCBpZHggPSAwO1xuXHRjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPFQ+PiggZWxlbWVudHMubGVuZ3RoICk7XG5cdGZvcihsZXQgZWxlbWVudCBvZiBlbGVtZW50cylcblx0XHRwcm9taXNlc1tpZHgrK10gPSBMSVNTLmdldExJU1MoIGVsZW1lbnQgKTtcblxuXHRyZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufVxuTElTUy5xc2EgPSBxc2E7XG5cbmFzeW5jIGZ1bmN0aW9uIHFzYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdGVsZW1lbnQgIDogRWxlbWVudCk6IFByb21pc2U8VD47XG5hc3luYyBmdW5jdGlvbiBxc2M8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA6IEVsZW1lbnQpOiBQcm9taXNlPCBDb21wb25lbnRzW05dID47XG5hc3luYyBmdW5jdGlvbiBxc2M8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnQsXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA/OiBFbGVtZW50KSB7XG5cblx0Y29uc3QgcmVzID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBlbGVtZW50KTtcblx0XG5cdGNvbnN0IHJlc3VsdCA9IChyZXNbMV0gYXMgdW5rbm93biBhcyBFbGVtZW50KS5jbG9zZXN0PExJU1NIb3N0PFQ+PihyZXNbMF0pO1xuXHRpZihyZXN1bHQgPT09IG51bGwpXG5cdFx0cmV0dXJuIG51bGw7XG5cblx0cmV0dXJuIGF3YWl0IExJU1MuZ2V0TElTUyhyZXN1bHQpO1xufVxuTElTUy5xc2MgPSBxc2M7XG5cbmZ1bmN0aW9uIHFzU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogVDtcbmZ1bmN0aW9uIHFzU3luYzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogQ29tcG9uZW50c1tOXTtcbmZ1bmN0aW9uIHFzU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LFxuXHRcdFx0XHRcdFx0cGFyZW50ICA6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cblx0W3NlbGVjdG9yLCBwYXJlbnRdID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBwYXJlbnQpO1xuXG5cdGNvbnN0IGVsZW1lbnQgPSBwYXJlbnQucXVlcnlTZWxlY3RvcjxMSVNTSG9zdDxUPj4oc2VsZWN0b3IpO1xuXG5cdGlmKCBlbGVtZW50ID09PSBudWxsIClcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEVsZW1lbnQgJHtzZWxlY3Rvcn0gbm90IGZvdW5kYCk7XG5cblx0cmV0dXJuIExJU1MuZ2V0TElTU1N5bmMoIGVsZW1lbnQgKTtcbn1cbkxJU1MucXNTeW5jID0gcXNTeW5jO1xuXG5mdW5jdGlvbiBxc2FTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBUW107XG5mdW5jdGlvbiBxc2FTeW5jPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBDb21wb25lbnRzW05dW107XG5mdW5jdGlvbiBxc2FTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsXG5cdFx0XHRcdFx0XHRwYXJlbnQgIDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblxuXHRbc2VsZWN0b3IsIHBhcmVudF0gPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIHBhcmVudCk7XG5cblx0Y29uc3QgZWxlbWVudHMgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbDxMSVNTSG9zdDxUPj4oc2VsZWN0b3IpO1xuXG5cdGxldCBpZHggPSAwO1xuXHRjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8VD4oIGVsZW1lbnRzLmxlbmd0aCApO1xuXHRmb3IobGV0IGVsZW1lbnQgb2YgZWxlbWVudHMpXG5cdFx0cmVzdWx0W2lkeCsrXSA9IExJU1MuZ2V0TElTU1N5bmMoIGVsZW1lbnQgKTtcblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuTElTUy5xc2FTeW5jID0gcXNhU3luYztcblxuZnVuY3Rpb24gcXNjU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdGVsZW1lbnQgIDogRWxlbWVudCk6IFQ7XG5mdW5jdGlvbiBxc2NTeW5jPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgOiBFbGVtZW50KTogQ29tcG9uZW50c1tOXTtcbmZ1bmN0aW9uIHFzY1N5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnQsXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA/OiBFbGVtZW50KSB7XG5cblx0Y29uc3QgcmVzID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBlbGVtZW50KTtcblx0XG5cdGNvbnN0IHJlc3VsdCA9IChyZXNbMV0gYXMgdW5rbm93biBhcyBFbGVtZW50KS5jbG9zZXN0PExJU1NIb3N0PFQ+PihyZXNbMF0pO1xuXHRpZihyZXN1bHQgPT09IG51bGwpXG5cdFx0cmV0dXJuIG51bGw7XG5cblx0cmV0dXJuIExJU1MuZ2V0TElTU1N5bmMocmVzdWx0KTtcbn1cbkxJU1MucXNjU3luYyA9IHFzY1N5bmM7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgQXV0byA9PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGNsYXNzIExJU1NfQXV0byBleHRlbmRzIExJU1Moe2F0dHJpYnV0ZXM6IFtcInNyY1wiXX0pIHtcblxuXHRyZWFkb25seSAja25vd25fdGFnID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cdHJlYWRvbmx5ICNkaXJlY3Rvcnk6IHN0cmluZztcblx0cmVhZG9ubHkgI3N3OiBQcm9taXNlPHZvaWQ+O1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuI3N3ID0gbmV3IFByb21pc2UoIGFzeW5jIChyZXNvbHZlKSA9PiB7XG5cdFx0XHRcblx0XHRcdGF3YWl0IG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKGAuL3N3LmpzYCk7XG5cblx0XHRcdGlmKCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyIClcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXG5cdFx0XHRuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdjb250cm9sbGVyY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXG5cdFx0Y29uc3Qgc3JjID0gdGhpcy5hdHRycy5zcmM7XG5cdFx0aWYoc3JjID09PSBudWxsKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwic3JjIGF0dHJpYnV0ZSBpcyBtaXNzaW5nLlwiKTtcblx0XHR0aGlzLiNkaXJlY3RvcnkgPSBzcmNbMF0gPT09ICcuJ1xuXHRcdFx0XHRcdFx0XHRcdD8gYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfS8ke3NyY31gXG5cdFx0XHRcdFx0XHRcdFx0OiBzcmM7XG5cblx0XHRuZXcgTXV0YXRpb25PYnNlcnZlciggKG11dGF0aW9ucykgPT4ge1xuXG5cdFx0XHRmb3IobGV0IG11dGF0aW9uIG9mIG11dGF0aW9ucylcblx0XHRcdFx0Zm9yKGxldCBhZGRpdGlvbiBvZiBtdXRhdGlvbi5hZGRlZE5vZGVzKVxuXHRcdFx0XHRcdGlmKGFkZGl0aW9uIGluc3RhbmNlb2YgRWxlbWVudClcblx0XHRcdFx0XHRcdHRoaXMuI2FkZFRhZyhhZGRpdGlvbi50YWdOYW1lKVxuXG5cdFx0fSkub2JzZXJ2ZSggZG9jdW1lbnQsIHsgY2hpbGRMaXN0OnRydWUsIHN1YnRyZWU6dHJ1ZSB9KTtcblxuXG5cdFx0Zm9yKCBsZXQgZWxlbSBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKSApXG5cdFx0XHR0aGlzLiNhZGRUYWcoZWxlbS50YWdOYW1lKTtcblx0fVxuXG5cbiAgICBwcm90ZWN0ZWQgcmVzb3VyY2VzKCkge1xuXHRcdHJldHVybiBbXG5cdFx0XHRcImluZGV4LmpzXCIsXG5cdFx0XHRcImluZGV4Lmh0bWxcIixcblx0XHRcdFwiaW5kZXguY3NzXCJcblx0XHRdO1xuICAgIH1cblxuXHRwcm90ZWN0ZWQgZGVmaW5lV2ViQ29tcG9uZW50KHRhZ25hbWU6IHN0cmluZywgZmlsZXM6IFJlY29yZDxzdHJpbmcsIGFueT4sIG9wdHM6IFBhcnRpYWw8e2NvbnRlbnQ6IHN0cmluZywgY3NzOiBzdHJpbmd9Pikge1xuXG5cdFx0Y29uc3QganMgPSBmaWxlc1tcImluZGV4LmpzXCJdO1xuXHRcdGNvbnN0IGNvbnRlbnQgPSBmaWxlc1tcImluZGV4Lmh0bWxcIl07XG5cblx0XHRsZXQga2xhc3M6IG51bGx8IFJldHVyblR5cGU8dHlwZW9mIExJU1M+ID0gbnVsbDtcblx0XHRpZigganMgIT09IHVuZGVmaW5lZCApXG5cdFx0XHRrbGFzcyA9IGpzKG9wdHMpO1xuXHRcdGVsc2UgaWYoIGNvbnRlbnQgIT09IHVuZGVmaW5lZCApXG5cdFx0XHRrbGFzcyA9IGNsYXNzIFdlYkNvbXBvbmVudCBleHRlbmRzIExJU1Mob3B0cykge307XG5cblx0XHRpZihrbGFzcyA9PT0gbnVsbClcblx0XHRcdHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBmaWxlcyBmb3IgV2ViQ29tcG9uZW50ICR7dGFnbmFtZX0uYCk7XG5cblx0XHRyZXR1cm4gTElTUy5kZWZpbmUodGFnbmFtZSwga2xhc3MpO1xuXHR9XG5cblx0YXN5bmMgI2FkZFRhZyh0YWduYW1lOiBzdHJpbmcpIHtcblxuXHRcdHRhZ25hbWUgPSB0YWduYW1lLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRpZiggdGFnbmFtZSA9PT0gJ2xpc3MtYXV0bycgfHwgdGFnbmFtZSA9PT0gJ2JsaXNzLWF1dG8nIHx8ICEgdGFnbmFtZS5pbmNsdWRlcygnLScpIHx8IHRoaXMuI2tub3duX3RhZy5oYXMoIHRhZ25hbWUgKSApXG5cdFx0XHRyZXR1cm47XG5cblx0XHR0aGlzLiNrbm93bl90YWcuYWRkKHRhZ25hbWUpO1xuXG5cdFx0YXdhaXQgdGhpcy4jc3c7IC8vIGVuc3VyZSBTVyBpcyBpbnN0YWxsZWQuXG5cblx0XHRjb25zdCBmaWxlbmFtZXMgPSB0aGlzLnJlc291cmNlcygpO1xuXHRcdGNvbnN0IHJlc291cmNlcyA9IGF3YWl0IFByb21pc2UuYWxsKCBmaWxlbmFtZXMubWFwKCBmaWxlID0+IGZpbGUuZW5kc1dpdGgoJy5qcycpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gX2ltcG9ydCAgIChgJHt0aGlzLiNkaXJlY3Rvcnl9LyR7dGFnbmFtZX0vJHtmaWxlfWAsIHRydWUpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogX2ZldGNoVGV4dChgJHt0aGlzLiNkaXJlY3Rvcnl9LyR7dGFnbmFtZX0vJHtmaWxlfWAsIHRydWUpICkgKTtcblxuXHRcdGNvbnN0IGZpbGVzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGZpbGVuYW1lcy5sZW5ndGg7ICsraSlcblx0XHRcdGlmKCByZXNvdXJjZXNbaV0gIT09IHVuZGVmaW5lZClcblx0XHRcdFx0ZmlsZXNbZmlsZW5hbWVzW2ldXSA9IHJlc291cmNlc1tpXTtcblxuXHRcdGNvbnN0IGNvbnRlbnQgPSBmaWxlc1tcImluZGV4Lmh0bWxcIl07XG5cdFx0Y29uc3QgY3NzICAgICA9IGZpbGVzW1wiaW5kZXguY3NzXCJdO1xuXG5cdFx0Y29uc3Qgb3B0czogUGFydGlhbDx7Y29udGVudDogc3RyaW5nLCBjc3M6IHN0cmluZ30+ID0ge1xuXHRcdFx0Li4uY29udGVudCAhPT0gdW5kZWZpbmVkICYmIHtjb250ZW50fSxcblx0XHRcdC4uLmNzcyAgICAgIT09IHVuZGVmaW5lZCAmJiB7Y3NzfSxcblx0XHR9O1xuXG5cdFx0cmV0dXJuIHRoaXMuZGVmaW5lV2ViQ29tcG9uZW50KHRhZ25hbWUsIGZpbGVzLCBvcHRzKTtcblx0XHRcblx0fVxufVxuTElTUy5kZWZpbmUoXCJsaXNzLWF1dG9cIiwgTElTU19BdXRvKTtcblxuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRzIHtcblx0XCJsaXNzLWF1dG9cIjogTElTU19BdXRvXG59O1xuLypcbiAqIGRlY2xhcmUgbW9kdWxlICckTElTUycge1xuICogXHRcdGludGVyZmFjZSBDb21wb25lbnRzIHtcbiAqIFx0XHRcdFwibmFtZVwiOiBjbGFzc1xuICogXHRcdH1cbiAqIH1cbiAqL1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIEV2ZW50c1RhcmdldCA9PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnR5cGUgQ3N0RXZlbnQ8RXZlbnQgZXh0ZW5kcyBzdHJpbmcsIEFyZ3M+ID0gQ3VzdG9tRXZlbnQ8QXJncz4gJiB7dHlwZTogRXZlbnR9O1xuXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50c1RhcmdldDxFdmVudHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PntcblxuXHRhZGRFdmVudExpc3RlbmVyPEV2ZW50IGV4dGVuZHMgRXhjbHVkZTxrZXlvZiBFdmVudHMsIHN5bWJvbHxudW1iZXI+Pih0eXBlOiBFdmVudCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBsaXN0ZW5lcjogbnVsbHwgKChldjogQ3N0RXZlbnQ8RXZlbnQsIEV2ZW50c1tFdmVudF0+KSA9PiB2b2lkKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBvcHRpb25zPzogYm9vbGVhbnxBZGRFdmVudExpc3RlbmVyT3B0aW9ucyk6IHZvaWQ7XG5cblx0ZGlzcGF0Y2hFdmVudDxFdmVudCBleHRlbmRzIEV4Y2x1ZGU8a2V5b2YgRXZlbnRzLCBzeW1ib2x8bnVtYmVyPj4oZXZlbnQ6IENzdEV2ZW50PEV2ZW50LCBFdmVudHNbRXZlbnRdPik6IGJvb2xlYW47XG5cblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcjxFdmVudCBleHRlbmRzIEV4Y2x1ZGU8a2V5b2YgRXZlbnRzLCBzeW1ib2x8bnVtYmVyPj4odHlwZTogRXZlbnQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxpc3RlbmVyOiBudWxsfCAoKGV2OiBDc3RFdmVudDxFdmVudCwgRXZlbnRzW0V2ZW50XT4pID0+IHZvaWQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPzogYm9vbGVhbnxBZGRFdmVudExpc3RlbmVyT3B0aW9ucyk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBDc3RtRXZlbnQ8RXZlbnQgZXh0ZW5kcyBzdHJpbmcsIEFyZ3M+IGV4dGVuZHMgQ3VzdG9tRXZlbnQ8QXJncz4ge1xuXG5cdG92ZXJyaWRlIGdldCB0eXBlKCk6IEV2ZW50IHsgcmV0dXJuIHN1cGVyLnR5cGUgYXMgRXZlbnQ7IH1cblxuXHRjb25zdHJ1Y3Rvcih0eXBlOiBFdmVudCwgYXJnczogQXJncykge1xuXHRcdHN1cGVyKHR5cGUsIHtkZXRhaWw6IGFyZ3N9KTtcblx0fVxufVxuXG5leHBvcnQgdHlwZSBFdmVudHNUYXJnZXRDc3RyPEV2ZW50cyBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pj4gPSBDb25zdHJ1Y3RvcjxFdmVudHNUYXJnZXQ8RXZlbnRzPj47XG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBpbnRlcm5hbCB0b29scyA9PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFJlc291cmNlKHJlc291cmNlOiBSZXNvdXJjZXxQcm9taXNlPFJlc291cmNlPikge1xuXG5cdHJlc291cmNlID0gYXdhaXQgcmVzb3VyY2U7XG5cblx0aWYoICEgKHJlc291cmNlIGluc3RhbmNlb2YgUmVzcG9uc2UpIClcblx0XHRyZXNvdXJjZSA9IGF3YWl0IGZldGNoKHJlc291cmNlKTtcblxuXHRyZXR1cm4gYXdhaXQgcmVzb3VyY2UudGV4dCgpO1xufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIF9mZXRjaFRleHQodXJpOiBzdHJpbmd8VVJMLCBpc0xpc3NBdXRvOiBib29sZWFuID0gZmFsc2UpIHtcblxuXHRjb25zdCBvcHRpb25zID0gaXNMaXNzQXV0b1xuXHRcdFx0XHRcdFx0PyB7aGVhZGVyczp7XCJsaXNzLWF1dG9cIjogXCJ0cnVlXCJ9fVxuXHRcdFx0XHRcdFx0OiB7fTtcblxuXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJpLCBvcHRpb25zKTtcblx0aWYocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDAgKVxuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cblx0aWYoIGlzTGlzc0F1dG8gJiYgcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJzdGF0dXNcIikhID09PSBcIjQwNFwiIClcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXG5cdHJldHVybiBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG59XG5hc3luYyBmdW5jdGlvbiBfaW1wb3J0KHVyaTogc3RyaW5nLCBpc0xpc3NBdXRvOiBib29sZWFuID0gZmFsc2UpIHtcblxuXHQvLyB0ZXN0IGZvciB0aGUgbW9kdWxlIGV4aXN0YW5jZS5cblx0aWYoaXNMaXNzQXV0byAmJiBhd2FpdCBfZmV0Y2hUZXh0KHVyaSwgaXNMaXNzQXV0bykgPT09IHVuZGVmaW5lZCApXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblxuXHR0cnkge1xuXHRcdHJldHVybiAoYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tJZ25vcmU6IHRydWUgKi8gdXJpKSkuZGVmYXVsdDtcblx0fSBjYXRjaChlKSB7XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fVxufVxuXG4vLyBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzUxMDAwNDYxL2h0bWwtZWxlbWVudC10YWctbmFtZS1mcm9tLWNvbnN0cnVjdG9yXG5jb25zdCBIVE1MQ0xBU1NfUkVHRVggPSAgL0hUTUwoXFx3KylFbGVtZW50LztcbmNvbnN0IGVsZW1lbnROYW1lTG9va3VwVGFibGUgPSB7XG4gICAgJ1VMaXN0JzogJ3VsJyxcbiAgICAnVGFibGVDYXB0aW9uJzogJ2NhcHRpb24nLFxuICAgICdUYWJsZUNlbGwnOiAndGQnLCAvLyB0aFxuICAgICdUYWJsZUNvbCc6ICdjb2wnLCAgLy8nY29sZ3JvdXAnLFxuICAgICdUYWJsZVJvdyc6ICd0cicsXG4gICAgJ1RhYmxlU2VjdGlvbic6ICd0Ym9keScsIC8vWyd0aGVhZCcsICd0Ym9keScsICd0Zm9vdCddLFxuICAgICdRdW90ZSc6ICdxJyxcbiAgICAnUGFyYWdyYXBoJzogJ3AnLFxuICAgICdPTGlzdCc6ICdvbCcsXG4gICAgJ01vZCc6ICdpbnMnLCAvLywgJ2RlbCddLFxuICAgICdNZWRpYSc6ICd2aWRlbycsLy8gJ2F1ZGlvJ10sXG4gICAgJ0ltYWdlJzogJ2ltZycsXG4gICAgJ0hlYWRpbmcnOiAnaDEnLCAvLywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2J10sXG4gICAgJ0RpcmVjdG9yeSc6ICdkaXInLFxuICAgICdETGlzdCc6ICdkbCcsXG4gICAgJ0FuY2hvcic6ICdhJ1xuICB9O1xuZnVuY3Rpb24gX2VsZW1lbnQydGFnbmFtZShDbGFzczogdHlwZW9mIEhUTUxFbGVtZW50KTogc3RyaW5nfG51bGwge1xuXG5cdGlmKCBDbGFzcyA9PT0gSFRNTEVsZW1lbnQgKVxuXHRcdHJldHVybiBudWxsO1xuXHRcblx0bGV0IGh0bWx0YWcgPSBIVE1MQ0xBU1NfUkVHRVguZXhlYyhDbGFzcy5uYW1lKSFbMV07XG5cdHJldHVybiBlbGVtZW50TmFtZUxvb2t1cFRhYmxlW2h0bWx0YWcgYXMga2V5b2YgdHlwZW9mIGVsZW1lbnROYW1lTG9va3VwVGFibGVdID8/IGh0bWx0YWcudG9Mb3dlckNhc2UoKVxufSIsImltcG9ydCBcInN0cnVjdC9tZW51LnRzXCI7XG5pbXBvcnQgXCJzdHJ1Y3QvY2FsYy9zaGVldC50c1wiO1xuXG4vLyAxXG5cbmltcG9ydCBMSVNTIGZyb20gXCJMSVNTXCI7XG5pbXBvcnQgeyBGb3JtYXRzIH0gZnJvbSBcInN0cnVjdC9jYWxjL2Zvcm1hdC50c1wiO1xuXG5jb25zdCBzX2Zvcm11bGEgPSBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfZm9ybXVsYScpO1xuXG5zX2Zvcm11bGEuZ2V0Q2VsbHMoXCJBMTpDMVwiKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJRdWFudGl0w6lcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJQcml4IHVuaXRhaXJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUHJpeCB0b3RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuXG5zX2Zvcm11bGEuZ2V0Q2VsbHMoXCJBMjpBNFwiKS5jb250ZW50ID0gWzIzICAsIDEyLCA0NF07XG5zX2Zvcm11bGEuZ2V0Q2VsbHMoXCJCMjpCNFwiKS5mb3JtYXQoRm9ybWF0cy5ldXJvcykuY29udGVudCA9IFswLjIsIDAuMywgMC40XTtcblxuc19mb3JtdWxhLmdldENlbGxzKFwiQzI6QzRcIikuZm9ybWF0KEZvcm1hdHMuZXVyb3MpLmNvbnRlbnQgPSBbXG4gICAgXCI9QTIqQjJcIixcbiAgICBcIj1BMypCM1wiLFxuICAgIFwiPUE0KkI0XCJcbl07XG5cbi8qKi9cblxuXG5jb25zdCBzX2NvbXBsZXhfZm9ybXVsYSA9IGF3YWl0IExJU1MucXMoJyNzaGVldF9jb21wbGV4X2Zvcm11bGEnKTtcblxuc19jb21wbGV4X2Zvcm11bGEuZ2V0Q2VsbHMoXCJBMTpDMVwiKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJYXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm11bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuc19jb21wbGV4X2Zvcm11bGEuZ2V0Q2VsbHMoXCJBMjpCNFwiKS5jb250ZW50ID0gW1xuICAgIDIsIDQsXG4gICAgMSwgNSxcbiAgICA0LCA2XTtcblxuc19jb21wbGV4X2Zvcm11bGEuZ2V0Q2VsbHMoXCJDMlwiKS5jb250ZW50ID1cbmA9IEEyKkIyXG4gK0EzKkIzXG4gK0E0KkI0YDtcblxuLyoqL1xuXG5jb25zdCBzX3R5cGVzID0gYXdhaXQgTElTUy5xcygnI3NoZWV0X3R5cGVzJyk7XG5cblxuc190eXBlcy5nZXRDZWxscyhcIkExOkUxXCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRleHRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJOb21icmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkJvb2zDqWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJEYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGb3JtdWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuXG5zX3R5cGVzLmdldENlbGxzKFwiQTI6RTJcIikuY29udGVudCA9IFtcbiAgICBcIkhlbGxvXCIsXG4gICAgMi4zLFxuICAgIHRydWUsXG4gICAgbmV3IERhdGUoKSxcbiAgICBcIj1CMisyXCJcbl1cblxuXG5jb25zdCBzX2N1cnNvciA9IGF3YWl0IExJU1MucXMoJyNzaGVldF9jdXJzb3InKTtcblxuc19jdXJzb3IuZ2V0Q2VsbHMoXCJBMTpIMVwiKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpLmNvbnRlbnQgPSBcIipcIjtcbnNfY3Vyc29yLmdldENlbGxzKFwiQTQ6SDRcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gXCIqXCI7XG5cbnNfY3Vyc29yLmdldENlbGxzKFwiRDE6RTRcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gXCIqXCI7XG5cbnNfY3Vyc29yLmdldENlbGxzKFwiQTE6QTRcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gXCIqXCI7XG5zX2N1cnNvci5nZXRDZWxscyhcIkgxOkg0XCIsIHRydWUpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFwiKlwiO1xuXG5cbmNvbnN0IHNfJGZvcm11bGEgPSBbXG4gICAgYXdhaXQgTElTUy5xcygnI3NoZWV0X19fX2Zvcm11bGEnKSxcbiAgICBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfeF9fZm9ybXVsYScpLFxuICAgIGF3YWl0IExJU1MucXMoJyNzaGVldF9feF9mb3JtdWxhJyksXG4gICAgYXdhaXQgTElTUy5xcygnI3NoZWV0X3h4X2Zvcm11bGEnKVxuXVxuXG5mb3IobGV0IGkgPSAwOyBpIDwgc18kZm9ybXVsYS5sZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IHNfJGZvcm0gPSBzXyRmb3JtdWxhW2ldO1xuXG4gICAgc18kZm9ybS5nZXRDZWxscyhcIkExOkQxXCIpLmZvcm1hdChcImJvbGRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQgPSBbMCwgMSwgMiwgM107XG5cbiAgICBzXyRmb3JtLmdldENlbGxzKFwiQTI6QTRcIikuZm9ybWF0KFwiYm9sZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudCA9IFsxLCAyLCAzXTtcblxuICAgIGxldCByZWYgPSBcIj1BMVwiO1xuICAgIGlmKCBpID09PSAxKVxuICAgICAgICByZWYgPSBcIj0kQTFcIjtcbiAgICBpZiggaSA9PT0gMilcbiAgICAgICAgcmVmID0gXCI9QSQxXCI7XG4gICAgaWYoIGkgPT09IDMpXG4gICAgICAgIHJlZiA9IFwiPSRBJDFcIjtcblxuICAgIHNfJGZvcm0uZ2V0Q2VsbHMoXCJCMlwiKS5jb250ZW50ID0gcmVmO1xuXG4gICAgc18kZm9ybS5nZXRDZWxscyhcIkExOkQ0XCIpLmZvcm1hdChcImFsaWduX2NlbnRlclwiKVxufVxuXG5jb25zdCBzaGVldF9yZWNvcGllX21vdGl2YXRpb24gPSBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uJyk7XG5cbnNoZWV0X3JlY29waWVfbW90aXZhdGlvbi5nZXRDZWxscyhcIkExOkQ0XCIpLmZvcm1hdChcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gW1xuICAgIFwiQ29uc28vam91clwiLCBcIkNyYXlvbnNcIiwgXCJHb21tZXNcIiwgXCJUb3RhbCAoam91cilcIixcbiAgICBcIjAxLzAxXCIgICwgMiwgMywgXCI9QjIrQzJcIiwgXG4gICAgXCIwMi8wMVwiICAsIDQsIDEsIFwiPUMzK0MzXCIsIFxuICAgIFwiVG90YWwgKHByb2QpXCIgICwgXCI9QjIrQjNcIiwgXCI9QzIrQzNcIiwgXCI9RDIrRDNcIiwgXG5dO1xuc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uLmdldENlbGxzKFwiQTE6RDFcIikuZm9ybWF0KFwiYm9sZFwiKTtcbnNoZWV0X3JlY29waWVfbW90aXZhdGlvbi5nZXRDZWxscyhcIkEyOkE0XCIpLmZvcm1hdChcImJvbGRcIik7XG5cbmNvbnN0IHNoZWV0X3JlY29waWVfbW90aXZhdGlvbl9lbXB0eSA9IGF3YWl0IExJU1MucXMoJyNzaGVldF9yZWNvcGllX21vdGl2YXRpb25fZW1wdHknKTtcblxuc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uX2VtcHR5LmdldENlbGxzKFwiQTE6RDRcIikuZm9ybWF0KFwiYWxpZ25fY2VudGVyXCIpLmNvbnRlbnQgPSBbXG4gICAgXCJDb25zby9qb3VyXCIsIFwiQ3JheW9uc1wiLCBcIkdvbW1lc1wiLCBcIlRvdGFsIChqb3VyKVwiLFxuICAgIFwiMDEvMDFcIiAgLCAyLCAzLCB1bmRlZmluZWQsIFxuICAgIFwiMDIvMDFcIiAgLCA0LCAxLCB1bmRlZmluZWQsIFxuICAgIFwiVG90YWwgKHByb2QpXCIgICwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZFxuXTtcbnNoZWV0X3JlY29waWVfbW90aXZhdGlvbl9lbXB0eS5nZXRDZWxscyhcIkExOkQxXCIpLmZvcm1hdChcImJvbGRcIik7XG5zaGVldF9yZWNvcGllX21vdGl2YXRpb25fZW1wdHkuZ2V0Q2VsbHMoXCJBMjpBNFwiKS5mb3JtYXQoXCJib2xkXCIpO1xuXG5jb25zdCBzaGVldF9yZWNvcGllX2luY3IgPSBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfcmVjb3BpZV9pbmNyJyk7XG5cbnNoZWV0X3JlY29waWVfaW5jci5nZXRDZWxscygnQTE6QTInKS5jb250ZW50ID0gWyAxLCBuZXcgRGF0ZSgpIF07XG5cblxuLy8gdGVzdFxuY29uc3QgYyA9IGBcbjx0YWJsZSBpZD1cInVuXCI+XG4gICAgPHRib2R5PlxuICAgICAgICA8dHI+PHRkPlhYWDwvdGQ+PC90cj5cbiAgICA8L3Rib2R5PlxuPC90YWJsZT5gO1xuXG5jb25zdCBjc3MgPSBgXG4gICAgdGQ6bm90KFtjb250ZW50ZWRpdGFibGVdKSB7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIH1cbmA7XG5cbmNsYXNzIFggZXh0ZW5kcyBMSVNTKHtcbiAgICBjb250ZW50OiBjLCBjc3Ncbn0pIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBjb25zdCB0ZCA9IHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignI3VuIHRkJykhO1xuICAgICAgICB0ZC50b2dnbGVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuICAgICAgICB0ZC5mb2N1cygpO1xuICAgICAgICB0ZC50ZXh0Q29udGVudCA9IFwiWVlZXCI7XG4gICAgfVxufVxuXG5MSVNTLmRlZmluZSgndGVzdC10ZXN0JywgWCk7IiwiaW1wb3J0IHsgc3RyMmh0bWwgfSBmcm9tIFwic3RydWN0L3V0aWxzL3N0cjJodG1sXCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGxMaXN0IH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuZXhwb3J0IGNsYXNzIFJhbmdlT3ZlcmxheSBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcblxuICAgICNzaGVldDogQ2FsY1NoZWV0O1xuICAgICNyYW5nZTogc3RyaW5nfG51bGwgPSBudWxsO1xuICAgIHByb3RlY3RlZCBvdmVybGF5OiBIVE1MRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKHNoZWV0OiBDYWxjU2hlZXQsIC4uLmNsYXNzbGlzdDogc3RyaW5nW10pIHtcblxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuI3NoZWV0ID0gc2hlZXQ7XG4gICAgICAgIHRoaXMuI3NoZWV0Lmhvc3QuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vdmVybGF5ID0gc3RyMmh0bWwoYDxkaXYgY2xhc3M9J292ZXJsYXknPjwvZGl2PmApO1xuICAgICAgICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2xpc3QpO1xuXG4gICAgICAgIHNoZWV0LmNvbnRlbnQuYXBwZW5kKCB0aGlzLm92ZXJsYXkgKTtcbiAgICB9XG5cbiAgICBzZXRSYW5nZShyYW5nZTogQ2VsbExpc3R8bnVsbCkge1xuICAgICAgICB0aGlzLiNyYW5nZSA9IHJhbmdlID09PSBudWxsID8gbnVsbCA6IHJhbmdlLnBsYWdlX25hbWUhO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRSZWN0KC4uLnJlY3Q6IHJlYWRvbmx5IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdKSB7XG4gICAgICAgIHJldHVybiByZWN0O1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcblxuICAgICAgICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiLCB0aGlzLiNyYW5nZSA9PT0gbnVsbCk7XG5cbiAgICAgICAgaWYoIHRoaXMuI3JhbmdlID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5nZXRSZWN0KCAuLi50aGlzLiNzaGVldC5nZXRSZWN0KCB0aGlzLiNzaGVldC5nZXRSYW5nZSh0aGlzLiNyYW5nZSkgKSApO1xuICAgICAgICB0aGlzLiNzaGVldC5zZXRSZWN0KHRoaXMub3ZlcmxheSwgcmVjdCApO1xuICAgIH1cblxuICAgIG92ZXJyaWRlIGFkZEV2ZW50TGlzdGVuZXIodHlwZTogc3RyaW5nLCBjYWxsYmFjazogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCB8IG51bGwsIG9wdGlvbnM/OiBBZGRFdmVudExpc3RlbmVyT3B0aW9ucyB8IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgb3ZlcnJpZGUgcmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlOiBzdHJpbmcsIGNhbGxiYWNrOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0IHwgbnVsbCwgb3B0aW9ucz86IEV2ZW50TGlzdGVuZXJPcHRpb25zIHwgYm9vbGVhbik6IHZvaWQge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMub3ZlcmxheS5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGb3JtdWxhUmVmIGV4dGVuZHMgUmFuZ2VPdmVybGF5IHtcblxuICAgIGNvbnN0cnVjdG9yKHNoZWV0OiBDYWxjU2hlZXQpIHtcbiAgICAgICAgc3VwZXIoc2hlZXQsIFwicmFuZ2VfaGlnaGxpZ2h0XCIpO1xuICAgIH1cblxuICAgICNjdXJfY29sb3IgPSAwO1xuICAgIHNldENvbG9yKGNvbG9yX2lkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoYGhpZ2hsaWdodF8ke3RoaXMuI2N1cl9jb2xvcn1gKTsgXG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKGBoaWdobGlnaHRfJHtjb2xvcl9pZH1gKTtcbiAgICAgICAgdGhpcy4jY3VyX2NvbG9yID0gY29sb3JfaWQ7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVjb3B5SGFuZGxlIGV4dGVuZHMgUmFuZ2VPdmVybGF5IHtcblxuICAgIGNvbnN0cnVjdG9yKHNoZWV0OiBDYWxjU2hlZXQpIHtcbiAgICAgICAgc3VwZXIoc2hlZXQsIFwicmVjb3B5XCIpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBnZXRSZWN0KHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gW3grdy0yLCB5K2gtMiwgNSwgNV0gYXMgY29uc3Q7XG4gICAgfVxuXG59IiwiaW1wb3J0IExJU1MgZnJvbSBcIi4uLy4uLy4uL2xpYnMvTElTU1wiO1xuaW1wb3J0IHsgRm9ybXVsYSB9IGZyb20gXCIuL2Zvcm11bGFfcGFyc2VyXCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGwsIENlbGxMaXN0IH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuZXhwb3J0IGNsYXNzIEZvcm1hdE1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKHNoZWV0OiBDYWxjU2hlZXQpIHtcblxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHNoZWV0LmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldjogS2V5Ym9hcmRFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICBpZiggISBldi5jdHJsS2V5IClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdiJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJib2xkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ2knKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcIml0YWxpY1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICd1Jykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJ1bmRlcmxpbmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnbCcpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KFwiYWxpZ25fbGVmdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdyJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJhbGlnbl9yaWdodFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdlJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJhbGlnbl9jZW50ZXJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnNCcgJiYgZXYuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KEZvcm1hdHMuZXVyb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJzUnICYmIGV2LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChGb3JtYXRzLnBvdXJjZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICcxJyAmJiBldi5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoRm9ybWF0cy5udW1iZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihjaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICAgICAgLyogVE9ETyBsaXN0ZW4gKi9cblxuICAgIH1cbn1cblxuZnVuY3Rpb24gZmxvYXQyRGF0ZShmbG9hdDogbnVtYmVyKSB7XG5cbiAgICBsZXQgY29udGVudCA9IG5ldyBEYXRlKFwiMTg5OS0xMi0zMFwiKTtcblxuICAgIGNvbnRlbnQuc2V0RGF0ZSggY29udGVudC5nZXREYXRlKCkgKyBmbG9hdCk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn1cbmZ1bmN0aW9uIGRhdGUyRmxvYXQoZGF0ZTogRGF0ZSkge1xuICAgIGNvbnN0IGJlZyA9IG5ldyBEYXRlKFwiMTg5OS0xMi0zMFwiKTtcbiAgICByZXR1cm4gKygoZGF0ZS5nZXRUaW1lKCkgLSBiZWcuZ2V0VGltZSgpKSAvICgyNCozNjAwKjEwMDApKS50b0ZpeGVkKDcpO1xufVxuXG5leHBvcnQgY29uc3QgRm9ybWF0cyA9IHtcblxuICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKHRoaXM6IENlbGx8bnVsbCwgdmFsdWUgPSB0aGlzPy5yYXdDb250ZW50KSB7XG5cbiAgICAgICAgY29uc3QgcHJlYyA9ICsodGhpcz8uZ2V0QXR0cmlidXRlKCdwcmVjaXNpb24nKSA/PyAyKTtcblxuICAgICAgICBpZiggdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG5cbiAgICAgICAgICAgIGlmKCB0aGlzPy5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSA9PT0gXCJwb3VyY2VudFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBgJHsrKCAoK3ZhbHVlKSoxMDApLnRvUHJlY2lzaW9uKDcpfWAucmVwbGFjZSgnLicsICcsJykgKyBcIiVcIjtcblxuICAgICAgICAgICAgcmV0dXJuIGAkeyt2YWx1ZS50b1ByZWNpc2lvbig3KX1gLnJlcGxhY2UoJy4nLCAnLCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPyAnVlJBSScgOiAnRkFVWCc7XG5cbiAgICAgICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUZSXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRm9ybXVsYSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICBldXJvczogZnVuY3Rpb24odGhpczpDZWxsLCB2YWx1ZSA9IHRoaXMucmF3Q29udGVudCkge1xuXG4gICAgICAgIGlmKHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcblxuICAgICAgICBpZih2YWx1ZSBpbnN0YW5jZW9mIERhdGUpXG4gICAgICAgICAgICB2YWx1ZSA9IGRhdGUyRmxvYXQodmFsdWUpO1xuXG4gICAgICAgIGlmKCB0aGlzLmdldEF0dHJpYnV0ZShcInR5cGVcIikgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcIm51bWJlclwiKTtcbiAgICAgICAgICAgIENhbGNTaGVldC5nZXRTaGVldEZyb21DZWxsKHRoaXMpLmdldFJhbmdlKHRoaXMpLmNvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZWMgPSArKHRoaXMuZ2V0QXR0cmlidXRlKCdwcmVjaXNpb24nKSA/PyAyKTtcblxuICAgICAgICByZXR1cm4gdmFsdWUudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XG4gICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHByZWMsXG4gICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNcbiAgICAgICAgICAgIH0pICsgJ+KCrCc7XG4gICAgICAgIC8vLnRvRml4ZWQoMikgKyAn4oKsJztcbiAgICB9LFxuICAgIGRhdGU6IGZ1bmN0aW9uKHRoaXM6Q2VsbCwgdmFsdWUgPSB0aGlzLnJhd0NvbnRlbnQpIHtcbiAgICAgICAgXG4gICAgICAgIGlmKHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIGlmKCB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG5cbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcblxuICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBEYXRlICkge1xuICAgICAgICAgICAgbGV0IGRhdGUgPSB2YWx1ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRlLnNsaWNlKDAsIDYpICsgZGF0ZS5zbGljZSg4KTtcbiAgICAgICAgfSBpZiggdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBmbG9hdDJEYXRlKHZhbHVlKTtcblxuICAgICAgICAgICAgaWYoICEgKHRoaXMucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEpIClcbiAgICAgICAgICAgICAgICBDYWxjU2hlZXQuZ2V0U2hlZXRGcm9tQ2VsbCh0aGlzKS5nZXRSYW5nZSggdGhpcyApLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgZGF0ZSA9IGNvbnRlbnQudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIik7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5zbGljZSgwLCA2KSArIGRhdGUuc2xpY2UoOCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICBwb3VyY2VudDogZnVuY3Rpb24odGhpczpDZWxsLCB2YWx1ZSA9IHRoaXMucmF3Q29udGVudCkge1xuICAgICAgICBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIGlmKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSlcbiAgICAgICAgICAgIHZhbHVlID0gZGF0ZTJGbG9hdCh2YWx1ZSk7XG5cbiAgICAgICAgaWYoIHRoaXMuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSAhPT0gXCJwb3VyY2VudFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJwb3VyY2VudFwiKTtcbiAgICAgICAgICAgIENhbGNTaGVldC5nZXRTaGVldEZyb21DZWxsKHRoaXMpLmdldFJhbmdlKHRoaXMpLmNvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZWMgPSArKHRoaXMuZ2V0QXR0cmlidXRlKCdwcmVjaXNpb24nKSA/PyAyKTtcblxuICAgICAgICByZXR1cm4gKHZhbHVlICogMTAwKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHtcbiAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogcHJlYyxcbiAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogcHJlY1xuICAgICAgICAgICAgfSkgKyAnJSc7XG4gICAgfSxcbiAgICBudW1iZXI6IGZ1bmN0aW9uKHRoaXM6Q2VsbCwgdmFsdWUgPSB0aGlzLnJhd0NvbnRlbnQpIHtcbiAgICAgICAgaWYodmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuXG4gICAgICAgIGlmKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSlcbiAgICAgICAgICAgIHZhbHVlID0gZGF0ZTJGbG9hdCh2YWx1ZSk7XG5cbiAgICAgICAgaWYoIHRoaXMuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgQ2FsY1NoZWV0LmdldFNoZWV0RnJvbUNlbGwodGhpcykuZ2V0UmFuZ2UodGhpcykuY29udGVudCA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJlYyA9ICsodGhpcy5nZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicpID8/IDIpO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHtcbiAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogcHJlYyxcbiAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogcHJlY1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm9ybWF0IHtcblxuICAgICNmb3JtYXQ6IFJlY29yZDxzdHJpbmcsIGFueT47XG5cbiAgICBjb25zdHJ1Y3Rvcihmb3JtYXQ6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICAgICAgdGhpcy4jZm9ybWF0ID0gZm9ybWF0O1xuICAgIH1cblxuICAgIGFwcGx5VG8oY2VsbDogQ2VsbHxDZWxsTGlzdCkge1xuXG4gICAgICAgIGlmKCBjZWxsIGluc3RhbmNlb2YgQ2VsbExpc3QpIHtcblxuICAgICAgICAgICAgZm9yKGxldCBjIG9mIGNlbGwuY2VsbHMpXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseVRvKGMpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IG5hbWUgaW4gdGhpcy4jZm9ybWF0KSB7XG4gICAgICAgICAgICBsZXQgdmFsID0gdGhpcy4jZm9ybWF0W25hbWVdO1xuXG4gICAgICAgICAgICBpZihuYW1lID09PSAnZm9ybWF0Jykge1xuXG4gICAgICAgICAgICAgICAgaWYoIHZhbCA9PT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuZm9ybWF0ID0gRm9ybWF0cy5kZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gY2VsbC5mb3JtYXQoKTsgLy9UT0RPOiBpZiBmY3RcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2VsbC5mb3JtYXQgPSB2YWw7XG4gICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGNlbGwuZm9ybWF0KCBjZWxsLnJhd0NvbnRlbnQpOyAvL1RPRE86IGlmIGZjdFxuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKG5hbWUgPT09ICdwcmVjaXNpb24nKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicsIHZhbCk7XG4gICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGNlbGwuZm9ybWF0Py4oIGNlbGwucmF3Q29udGVudCk7IC8vVE9ETzogaWYgZmN0XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCBuYW1lID09PSAnc3BhbicgKSB7XG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHNoZWV0ID0gQ2FsY1NoZWV0LmdldFNoZWV0RnJvbUNlbGwoY2VsbCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoIHZhbFswXSA9PT0gMSAmJiB2YWxbMV0gPT09IDEpIHsgLy8gdW5tZXJnZVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCByID0gKyhjZWxsLmdldEF0dHJpYnV0ZSgncm93c3BhbicpID8/IDApO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYyA9ICsoY2VsbC5nZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nKSA/PyAwKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcjsgKytpKVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGM7ICsraikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHNoZWV0LnJlbGF0aXZlVG8oY2VsbCwgaSwgaik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRhcmdldC5jZWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ3Jvd3NwYW4nKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ2NvbHNwYW4nKTtcblxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgncm93c3BhbicsIGAke3ZhbFswXX1gKTtcbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsIGAke3ZhbFsxXX1gKTtcblxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB2YWxbMF07ICsraSlcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHZhbFsxXTsgKytqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpID09PSAwICYmIGogPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHNoZWV0LnJlbGF0aXZlVG8oY2VsbCwgaSwgaik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2VsbCA9IGNlbGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiggdHlwZW9mIHZhbCA9PT0gXCJib29sZWFuXCIpIHtcblxuICAgICAgICAgICAgICAgIGlmKCBuYW1lLnN0YXJ0c1dpdGgoJ2FsaWduXycpICkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2FsaWduX2xlZnQnKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdhbGlnbl9jZW50ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdhbGlnbl9yaWdodCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiggbmFtZS5zdGFydHNXaXRoKCd2YWxpZ25fJykgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWduX3RvcCcpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlnbl9taWRkbGUnKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZ25fYm90dG9tJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QudG9nZ2xlKG5hbWUsIHZhbCk7XG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2VsbC5zdHlsZS5zZXRQcm9wZXJ0eShgLS0ke25hbWV9YCwgdmFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFByb3BlcnR5KG5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy4jZm9ybWF0W25hbWVdO1xuICAgIH1cbiAgICBoYXNQcm9wZXJ0eShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5hbWUgaW4gdGhpcy4jZm9ybWF0O1xuICAgIH1cblxuICAgIHN0YXRpYyBleHRyYWN0Rm9ybWF0KGNlbGw6IENlbGx8Q2VsbExpc3QpOiBGb3JtYXQge1xuICAgICAgICBcbiAgICAgICAgaWYoIGNlbGwgaW5zdGFuY2VvZiBDZWxsTGlzdCkge1xuXG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IGNlbGwuY2VsbHM7XG5cbiAgICAgICAgICAgIGxldCBmb3JtYXQgPSBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxsc1swXSk7XG5cbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCBjZWxscy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGxldCBmMiA9IEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzW2ldKTtcblxuICAgICAgICAgICAgICAgIGZvcihsZXQga2V5IGluIGZvcm1hdC4jZm9ybWF0KVxuICAgICAgICAgICAgICAgICAgICBpZiggISAoa2V5IGluIGYyLiNmb3JtYXQpIHx8IGYyLiNmb3JtYXRba2V5XSAhPT0gZm9ybWF0LiNmb3JtYXRba2V5XSApXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZm9ybWF0LiNmb3JtYXRba2V5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IGZvcm1hdCA9IE9iamVjdC5mcm9tRW50cmllczxhbnk+KCBbLi4uY2VsbC5jbGFzc0xpc3QudmFsdWVzKCldLm1hcChlID0+IFtlLCB0cnVlXSkgKTtcbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjZWxsLnN0eWxlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgbmFtZSA9IGNlbGwuc3R5bGUuaXRlbShpKTtcbiAgICAgICAgICAgIGlmKCAhIG5hbWUuc3RhcnRzV2l0aCgnLS0nKSApXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBmb3JtYXRbbmFtZS5zbGljZSgyKV0gPSBjZWxsLnN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb2xzcGFuID0gKyhjZWxsLmdldEF0dHJpYnV0ZSgnY29sc3BhbicpID8/IDEpO1xuICAgICAgICBjb25zdCByb3dzcGFuID0gKyhjZWxsLmdldEF0dHJpYnV0ZSgncm93c3BhbicpID8/IDEpO1xuXG4gICAgICAgIGlmKCBjb2xzcGFuID4gMSB8fCByb3dzcGFuID4gMSApXG4gICAgICAgICAgICBmb3JtYXQuc3BhbiA9IFsgcm93c3BhbiwgY29sc3BhbiBdO1xuXG4gICAgICAgIGlmKCAhIChcImZvbnRfc2l6ZVwiIGluIGZvcm1hdCkgKVxuICAgICAgICAgICAgZm9ybWF0Wydmb250X3NpemUnXSA9ICcxMHB0JztcblxuICAgICAgICBpZiggXCJmb3JtYXRcIiBpbiBjZWxsKVxuICAgICAgICAgICAgZm9ybWF0LmZvcm1hdCA9IGNlbGwuZm9ybWF0O1xuXG4gICAgICAgIGlmKCBjZWxsLmhhc0F0dHJpYnV0ZSgncHJlY2lzaW9uJykgKVxuICAgICAgICAgICAgZm9ybWF0LnByZWNpc2lvbiA9IGNlbGwuZ2V0QXR0cmlidXRlKCdwcmVjaXNpb24nKTtcblxuICAgICAgICByZXR1cm4gbmV3IEZvcm1hdChmb3JtYXQpO1xuICAgIH1cbn0iLCIvL1RPRE86IHdlYnBhY2sgY29uZmlnLi4uXG5pbXBvcnQgTElTUyBmcm9tIFwiLi4vLi4vLi4vbGlicy9MSVNTXCI7XG5pbXBvcnQgeyBGb3JtYXRzIH0gZnJvbSBcIi4vZm9ybWF0XCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGwgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5jb25zdCBjc3MgPSBgXG4gICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYgcHJlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKCAxcmVtICsgOHB4ICsgMnB4ICk7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xpYmVyYXRpb24gU2Fucyc7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5cbmV4cG9ydCBjbGFzcyBDYWxjRm9ybXVsYSBleHRlbmRzIExJU1Moe1xuICAgIGNzc1xufSkge1xuXG4gICAgI2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XG4gICAgI3NoZWV0ICAhOiBDYWxjU2hlZXQ7XG4gICAgI2N1cl9jZWxsOiBDZWxsfG51bGwgPSBudWxsO1xuICAgICNvbklucHV0OiAoZXY6IEV2ZW50KSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCggdGhpcy4jaW5wdXQgKTtcblxuICAgICAgICB0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IHtcblxuICAgICAgICAgICAgaWYoIHRoaXMuI2N1cl9jZWxsID09PSBudWxsIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIC8vdGhpcy4jc2hlZXQuY3Vyc29yLmNvbnRlbnQgPSB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCE7XG4gICAgICAgICAgICB0aGlzLiNzaGVldC5zdGF0ZXMuY2VsbF9lZGl0LnN0YXRlID0gbnVsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsICgpID0+IHtcblxuICAgICAgICAgICAgaWYoIHRoaXMuI2N1cl9jZWxsID09PSBudWxsIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPSB0aGlzLiNjdXJfY2VsbDtcbiAgICAgICAgICAgIC8vdGhpcy4jY3VyX2NlbGwhLnRleHRDb250ZW50ID0gdGhpcy4jaW5wdXQudGV4dENvbnRlbnQhO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmKCB0aGlzLiNjdXJfY2VsbCA9PT0gbnVsbCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLiNjdXJfY2VsbCEudGV4dENvbnRlbnQgPSBGb3JtYXRzLmRlZmF1bHQuY2FsbCh0aGlzLiNjdXJfY2VsbCwgdGhpcy4jaW5wdXQudGV4dENvbnRlbnQhICk7XG4gICAgICAgICAgICB0aGlzLiNjdXJfY2VsbC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoJ2lucHV0Jywge2RldGFpbDogdHJ1ZX0pICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI29uSW5wdXQgPSAoZXY6IEV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgaWYoIGV2LmRldGFpbCA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCA9IEZvcm1hdHMuZGVmYXVsdC5jYWxsKCB0aGlzLiNjdXJfY2VsbCEsIHRoaXMuI2N1cl9jZWxsIS50ZXh0Q29udGVudCEgKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzeW5jVG8oc2hlZXQ6IENhbGNTaGVldCkge1xuXG4gICAgICAgIHRoaXMuI3NoZWV0ID0gc2hlZXQ7XG4gICAgICAgIGNvbnN0IGN1cnNvciA9IHRoaXMuI3NoZWV0LmN1cnNvcjtcblxuICAgICAgICBzaGVldC5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3VwZGF0ZScsICgpID0+IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gRm9ybWF0cy5kZWZhdWx0LmNhbGwoY3Vyc29yLmZpcnN0Q2VsbCApO1xuICAgICAgICB9KVxuXG4gICAgICAgIGN1cnNvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gY3Vyc29yLmNlbGxzO1xuXG4gICAgICAgICAgICB0aGlzLiNpbnB1dC50b2dnbGVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICEgc2hlZXQuaXNSTyApO1xuXG4gICAgICAgICAgICBpZiggY2VsbHMubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggdGhpcy4jY3VyX2NlbGwgIT09IG51bGwgKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNjdXJfY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuI29uSW5wdXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsID0gY2VsbHNbMF07XG4gICAgICAgICAgICB0aGlzLiNjdXJfY2VsbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuI29uSW5wdXQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCA9IEZvcm1hdHMuZGVmYXVsdC5jYWxsKCB0aGlzLiNjdXJfY2VsbCApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuTElTUy5kZWZpbmUoJ2NhbGMtZm9ybXVsYScsIENhbGNGb3JtdWxhKTsiLCJpbXBvcnQgeyBGb3JtYXRzIH0gZnJvbSBcIi4vZm9ybWF0XCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIFZhbHVlVHlwZSB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbmV4cG9ydCBjbGFzcyBGb3JtdWxhIHtcblxuICAgICNzdHI6IHN0cmluZztcbiAgICAjZXhlYzogKHNoZWV0OiBDYWxjU2hlZXQpID0+IFZhbHVlVHlwZTtcbiAgICAjcmFuZ2VzOiBUb2tlbltdO1xuXG4gICAgY29uc3RydWN0b3Ioc3RyOiBzdHJpbmcsIGV4ZWM6IChzaGVldDogQ2FsY1NoZWV0KSA9PiBWYWx1ZVR5cGUsIHJhbmdlc190b2tlbjogVG9rZW5bXSA9IFtdKSB7XG5cbiAgICAgICAgdGhpcy4jc3RyID0gc3RyO1xuICAgICAgICB0aGlzLiNleGVjID0gZXhlYztcbiAgICAgICAgdGhpcy4jcmFuZ2VzID0gcmFuZ2VzX3Rva2VuO1xuICAgIH1cbiAgICBcbiAgICByZWxhdGl2ZVRvKCBzaGVldDogQ2FsY1NoZWV0LCBkcm93OiBudW1iZXIsIGRjb2w6IG51bWJlcikge1xuICAgICAgICBcbiAgICAgICAgbGV0IG5ld19yYW5nZXMgPSB0aGlzLiNyYW5nZXMubWFwKHIgPT4ge1xuXG4gICAgICAgICAgICAvL1RPRE86IGlmIHJhbmdlLi4uXG4gICAgICAgICAgICBsZXQgcG9zID0gWy4uLnNoZWV0LmNlbGxQb3MoIHNoZWV0LmdldENlbGxzKHIudmFsdWUpLmNlbGxzWzBdICldO1xuICAgIFxuICAgICAgICAgICAgaWYoIHIudmFsdWUubGFzdEluZGV4T2YoJyQnKSA8PSAwIClcbiAgICAgICAgICAgICAgICBwb3NbMF0gKz0gZHJvdztcbiAgICAgICAgICAgIGlmKCByLnZhbHVlWzBdICE9PSAnJCcgKVxuICAgICAgICAgICAgICAgIHBvc1sxXSArPSBkY29sO1xuXG4gICAgICAgICAgICByZXR1cm4gYCR7U3RyaW5nLmZyb21DaGFyQ29kZSg2NStwb3NbMV0tMSl9JHtwb3NbMF19YDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG5ld19mb3JtdWxhID0gXCJcIjtcblxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuI3Jhbmdlcy5sZW5ndGg7ICsraSkge1xuXG4gICAgICAgICAgICBuZXdfZm9ybXVsYSArPSB0aGlzLiNzdHIuc2xpY2Uob2Zmc2V0LCB0aGlzLiNyYW5nZXNbaV0uYmVnKTtcbiAgICAgICAgICAgIG5ld19mb3JtdWxhICs9IG5ld19yYW5nZXNbaV07XG5cbiAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuI3Jhbmdlc1tpXS5lbmQ7XG4gICAgICAgIH1cbiAgICAgICAgbmV3X2Zvcm11bGEgKz0gdGhpcy4jc3RyLnNsaWNlKG9mZnNldCk7XG4gICAgICAgIFxuICAgICAgICAvL2NhbiBiZSBvcHRpbWl6ZWQuLi5cbiAgICAgICAgcmV0dXJuIHBhcnNlX2Zvcm11bGEoIG5ld19mb3JtdWxhICk7XG4gICAgfVxuXG4gICAgZ2V0IHJhbmdlc1Rva2VuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcmFuZ2VzO1xuICAgIH1cblxuICAgIGV4ZWMoc2hlZXQ6IENhbGNTaGVldCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jZXhlYyhzaGVldCk7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzdHI7XG4gICAgfVxufVxuXG50eXBlIFRva2VuID0ge1xuICAgIGJlZzogbnVtYmVyLFxuICAgIGVuZDogbnVtYmVyLFxuICAgIHZhbHVlOiBzdHJpbmcsXG4gICAgdHlwZTogXCJzdHJpbmdcInxcIm51bWJlclwifFwiY2FsbFwifFwicmFuZ2VcInxcIm9wXCJcbn1cblxuXG5mdW5jdGlvbiBleHRyYWN0VG9rZW4oc3RyOiBzdHJpbmcsIG9mZnNldDogbnVtYmVyKSB7XG5cbiAgICB3aGlsZSggWycgJywgJ1xcbicsICdcXHQnXS5pbmNsdWRlcyhzdHJbb2Zmc2V0XSkgKSAvLyBpZ25vcmUgd2hpdGVzcGFjZXNcbiAgICAgICAgKytvZmZzZXQ7XG5cbiAgICBsZXQgdG9rZW46IFBhcnRpYWw8VG9rZW4+ID0ge1xuICAgICAgICBiZWc6IG9mZnNldFxuICAgIH07XG5cbiAgICBpZihzdHJbb2Zmc2V0XSA9PT0gJ1wiJykge1xuICAgICAgICB0b2tlbi50eXBlID0gXCJzdHJpbmdcIjtcbiAgICAgICAgd2hpbGUoIHN0clsrK29mZnNldF0gIT09ICdcIicgJiYgc3RyW29mZnNldC0xXSAhPT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICBpZihvZmZzZXQrMSA+PSBzdHIubGVuZ3RoIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Zvcm11bGEgcGFyc2luZyBlcnJvcicpO1xuICAgICAgICB9XG4gICAgICAgICsrb2Zmc2V0O1xuICAgIH0gZWxzZSBpZiggc3RyW29mZnNldF0gPT09ICcsJyB8fCAoc3RyW29mZnNldF0gPj0gJzAnICYmIHN0cltvZmZzZXRdIDw9ICc5JykgKSB7XG4gICAgICAgIHRva2VuLnR5cGUgPSBcIm51bWJlclwiO1xuICAgICAgICBsZXQgaGFzQ29tbWEgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUoIHN0cltvZmZzZXRdID09PSAnLCcgfHwgc3RyW29mZnNldF0gPj0gJzAnICYmIHN0cltvZmZzZXRdIDw9ICc5JyApIHtcblxuICAgICAgICAgICAgaWYoIHN0cltvZmZzZXRdID09PSAnLCcgKSB7XG4gICAgICAgICAgICAgICAgaWYoaGFzQ29tbWEgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRm9ybXVsYSBwYXJzaW5nIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgaGFzQ29tbWEgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICArK29mZnNldDtcbiAgICAgICAgfVxuXG4gICAgfSBlbHNlIGlmKCBzdHJbb2Zmc2V0XSA9PT0gJyQnIHx8IHN0cltvZmZzZXRdID49ICdBJyAmJiBzdHJbb2Zmc2V0XSA8PSAnWicpIHsgLy8rJFxuICAgICAgICBcbiAgICAgICAgd2hpbGUoIG9mZnNldCA8IHN0ci5sZW5ndGhcbiAgICAgICAgICAgICAgICAmJiAoc3RyW29mZnNldF0gPT09ICckJyB8fCBzdHJbb2Zmc2V0XSA+PSAnQScgJiYgc3RyW29mZnNldF0gPD0gJ1onXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgc3RyW29mZnNldF0gPj0gJzAnICYmIHN0cltvZmZzZXRdIDw9ICc5J1xuICAgICAgICAgICAgICAgICAgICApIClcbiAgICAgICAgICAgICsrb2Zmc2V0O1xuXG4gICAgICAgIHRva2VuLnR5cGUgPSBzdHJbb2Zmc2V0XSA9PT0gJygnID8gJ2NhbGwnIDogJ3JhbmdlJztcblxuICAgICAgICBpZiggc3RyW29mZnNldF0gPT09ICcoJyApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdG9rZW4udHlwZSA9IFwib3BcIjsgLy8gb25seSBvbiBjaGFyID8/P1xuXG4gICAgICAgIGlmKCBzdHJbb2Zmc2V0ICsgMV0gPT09ICc9JykgLy8gPj0gLyA8PVxuICAgICAgICAgICAgKytvZmZzZXQ7XG4gICAgICAgIGVsc2UgaWYoIHN0cltvZmZzZXQgKyAxXSA9PT0gJz4nKSAvLyA8PlxuICAgICAgICAgICAgKytvZmZzZXQ7XG5cbiAgICAgICAgKytvZmZzZXQ7XG4gICAgfVxuXG4gICAgdG9rZW4uZW5kID0gb2Zmc2V0O1xuICAgIHRva2VuLnZhbHVlID0gc3RyLnNsaWNlKHRva2VuLmJlZywgdG9rZW4uZW5kKTtcblxuICAgIHJldHVybiB0b2tlbiBhcyBSZXF1aXJlZDxUb2tlbj47XG59XG5cbmNsYXNzIE5vZGUge1xuXG4gICAgY2hpbGRyZW46IE5vZGVbXTtcbiAgICAjZmN0OiAoc2hlZXQ6IENhbGNTaGVldCwgLi4uYXJnczooVmFsdWVUeXBlKVtdKSA9PiBWYWx1ZVR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihmY3Q6IChzaGVldDogQ2FsY1NoZWV0LCAuLi5hcmdzOihWYWx1ZVR5cGUpW10pID0+IFZhbHVlVHlwZSwgLi4uY2hpbGRyZW46IE5vZGVbXSkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgIGlmKGNoaWxkcmVuID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXVEZcIik7XG4gICAgICAgIHRoaXMuI2ZjdCA9IGZjdDtcbiAgICB9XG5cbiAgICBldmFsKHNoZWV0OiBDYWxjU2hlZXQpOiBWYWx1ZVR5cGUge1xuICAgICAgICBjb25zdCBhcmdzID0gdGhpcy5jaGlsZHJlbi5tYXAoIGMgPT4gYy5ldmFsKHNoZWV0KSApO1xuICAgICAgICByZXR1cm4gdGhpcy4jZmN0KHNoZWV0LCAuLi5hcmdzICk7XG4gICAgfVxuICAgIFxufVxuXG5mdW5jdGlvbiB0b051bWJlcihhOiB1bmtub3duKTogbnVtYmVyIHtcblxuICAgIGlmKGEgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgcmV0dXJuIGEgYXMgdW5rbm93biBhcyBudW1iZXI7XG59XG5cbmNvbnN0IG9wX2ltcGwgPSB7XG4gICAgJyUnOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duKSA9PiB0b051bWJlcihhKS8xMDAsXG4gICAgJ3UuKyc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24pID0+ICt0b051bWJlcihhKSxcbiAgICAndS4tJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93bikgPT4gLXRvTnVtYmVyKGEpLFxuICAgICcqJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93biwgYjogdW5rbm93bikgPT4gdG9OdW1iZXIoYSkqdG9OdW1iZXIoYiksXG4gICAgJy8nOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiB0b051bWJlcihhKS90b051bWJlcihiKSxcbiAgICAnKyc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24sIGI6IHVua25vd24pID0+IHRvTnVtYmVyKGEpK3RvTnVtYmVyKGIpLFxuICAgICctJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93biwgYjogdW5rbm93bikgPT4gdG9OdW1iZXIoYSktdG9OdW1iZXIoYiksXG4gICAgJ14nOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiBNYXRoLnBvdyh0b051bWJlcihhKSx0b051bWJlcihiKSApLFxuICAgICcmJzogKF86IENhbGNTaGVldCwgYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+IGAke0Zvcm1hdHMuZGVmYXVsdC5jYWxsKG51bGwsIGEpfSR7Rm9ybWF0cy5kZWZhdWx0LmNhbGwobnVsbCwgYil9YCxcbiAgICAnPSc6ICAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSA9PT0gYixcbiAgICAnPD4nOiAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSAhPT0gYixcbiAgICAnPic6ICAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSA+IGIsXG4gICAgJz49JzogKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPj0gYixcbiAgICAnPCc6ICAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSA8IGIsXG4gICAgJzw9JzogKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPD0gYixcbn0gYXMgUmVjb3JkPHN0cmluZywgKF86IENhbGNTaGVldCwgLi4uYXJnczpWYWx1ZVR5cGVbXSkgPT4gVmFsdWVUeXBlPjtcblxuLy8gaHR0cHM6Ly9oZWxwLmxpYnJlb2ZmaWNlLm9yZy9sYXRlc3QvZW4tVVMvdGV4dC9zY2FsYy8wMS8wNDA2MDE5OS5odG1sXG5jb25zdCBvcF9wcmlvID0gW1xuICAgIFsnOiddLCAvLyByYW5nZVxuICAgIFsnISddLCAvLyByYW5nZSBpbnRlcnNlY3Rpb25cbiAgICBbJ34nXSwgLy8gcmFuZ2UgdW5pb25cbiAgICBbJ3UuKycsICd1Li0nXSwgLy8gdW5hcnkgLSBmcm9tIHJpZ2h0IHRvIGxlZnQuLi5cbiAgICBbJyUnXSwgLy8gcG9zdGZpeCwgLzEwMFxuICAgIFsnXiddLCAvLyBwb3dlclxuICAgIFsnKicsICcvJ10sXG4gICAgWycrJywgJy0nXSxcbiAgICBbJyYnXSwgLy8gc3RyaW5nIGNvbmNhdFxuICAgIFsnPScsICc8PicsICc8JywgJzw9JywgJz4nLCAnPj0nXSAvLyBjb21wYXJlXG5dO1xuXG5sZXQgb3BzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge307XG5mb3IobGV0IGkgPSAwOyBpIDwgb3BfcHJpby5sZW5ndGg7ICsraSlcbiAgICBmb3IobGV0IG9wIG9mIG9wX3ByaW9baV0gKVxuICAgICAgICBvcHNbb3BdID0gaTtcblxuZnVuY3Rpb24gdG9rZW5saXN0MlRyZWUodG9rZW5zOiBUb2tlbltdKTogTm9kZSB7XG5cbiAgICBpZiggdG9rZW5zLmxlbmd0aCA9PT0gMSkge1xuXG4gICAgICAgIGlmKCB0b2tlbnNbMF0udHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgY29uc3QgbmIgPSArdG9rZW5zWzBdLnZhbHVlLnJlcGxhY2UoJywnLCAnLicpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBOb2RlKCAoKSA9PiBuYik7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHRva2Vuc1swXS50eXBlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBjb25zdCBzdHIgPSB0b2tlbnNbMF0udmFsdWUuc2xpY2UoMSwtMSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vZGUoICgpID0+IHN0cik7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHRva2Vuc1swXS50eXBlID09PSBcInJhbmdlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTm9kZSggKHNoZWV0OiBDYWxjU2hlZXQpID0+IHtcblxuICAgICAgICAgICAgICAgIGxldCByYXcgPSBzaGVldC5nZXRDZWxscyh0b2tlbnNbMF0udmFsdWUpLmNlbGxzWzBdLnJhd0NvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgICBpZiggcmF3IGluc3RhbmNlb2YgRm9ybXVsYSlcbiAgICAgICAgICAgICAgICAgICAgcmF3ID0gcmF3LmV4ZWMoc2hlZXQpOyAvLyBUT0RPOiBjYWNoZSByZXN1bHRcblxuICAgICAgICAgICAgICAgIHJldHVybiByYXcgYXMgVmFsdWVUeXBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiPz8/XCIpO1xuICAgIH1cblxuICAgIGlmKHRva2Vuc1swXS52YWx1ZSA9PT0gJygnICYmIHRva2Vuc1t0b2tlbnMubGVuZ3RoLTFdLnZhbHVlID09PSAnKScpXG4gICAgICAgIHJldHVybiB0b2tlbmxpc3QyVHJlZSh0b2tlbnMuc2xpY2UoMSwtMSkgKTtcblxuICAgIGxldCBjdXIgPSB7XG4gICAgICAgIHByaW9yaXR5OiBvcF9wcmlvLmxlbmd0aCxcbiAgICAgICAgaWR4ICAgICA6IC0xXG4gICAgfTtcblxuICAgIGZvcihsZXQgaSA9IHRva2Vucy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICBpZiggdG9rZW5zW2ldLnR5cGUgIT09IFwib3BcIiApIC8vIGNhbGwgbm90IGhhbmRsZWQgeWV0Li4uXG4gICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICBpZiggdG9rZW5zW2ldLnZhbHVlID09PSAnKScgKSB7IC8vIGdvIHRvIGZpcnN0ICcoJ1xuICAgICAgICAgICAgaSA9IHRva2Vucy5maW5kSW5kZXgoIHQgPT4gdC50eXBlID09PSAnb3AnICYmIHQudmFsdWUgPT09ICcoJyk7XG5cbiAgICAgICAgICAgIGlmKCBpID09PSAwKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLS1pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXNzZXJ0cyBpZiB1bmFyeSBvcC5cbiAgICAgICAgaWYoIHRva2Vuc1tpXS52YWx1ZSA9PT0gJy0nIHx8IHRva2Vuc1tpXS52YWx1ZSA9PT0gJysnICkge1xuXG4gICAgICAgICAgICBpZiggaSA9PT0gMCB8fCB0b2tlbnNbaS0xXS50eXBlID09PSBcIm9wXCIgKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB1X29wID0gYHUuJHt0b2tlbnNbaV0udmFsdWV9YDtcbiAgICAgICAgICAgICAgICB0b2tlbnNbaV0udmFsdWUgPSB1X29wO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gb3BzW3Vfb3BdO1xuXG4gICAgICAgICAgICAgICAgLy8gcHJpb3JpdHkgaXMgcmV2ZXJzZWQgKyBldmFsdWF0ZWQgZnJvbSByaWdodCB0byBsZWZ0LlxuICAgICAgICAgICAgICAgIGlmKCBwcmlvcml0eSA8PSBjdXIucHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VyLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgICAgIGN1ci5pZHggICAgICA9IGk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IG9wc1t0b2tlbnNbaV0udmFsdWVdO1xuXG4gICAgICAgIC8vIHByaW9yaXR5IGlzIHJldmVyc2VkLlxuICAgICAgICBpZiggcHJpb3JpdHkgPCBjdXIucHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGN1ci5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICAgICAgY3VyLmlkeCAgICAgID0gaTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKCBjdXIuaWR4ID09PSAtMSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCc/Pz8nKTtcblxuICAgIGxldCBvcF90b2tlbiA9IHRva2Vuc1tjdXIuaWR4XTtcbiAgICBpZiggb3BfdG9rZW4udmFsdWUgPT09ICclJyApIHtcbiAgICAgICAgY29uc3QgbGVmdCAgPSB0b2tlbnMuc2xpY2UoMCwgY3VyLmlkeCk7XG4gICAgICAgIGNvbnN0IG9wID0gb3BfaW1wbFtvcF90b2tlbi52YWx1ZSBhcyBrZXlvZiB0eXBlb2Ygb3BfaW1wbF07XG4gICAgICAgIHJldHVybiBuZXcgTm9kZShcbiAgICAgICAgICAgIG9wLFxuICAgICAgICAgICAgdG9rZW5saXN0MlRyZWUobGVmdClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiggb3BfdG9rZW4udmFsdWUgPT09ICd1Li0nIHx8ICBvcF90b2tlbi52YWx1ZSA9PT0gJ3UuKycgKSB7XG5cbiAgICAgICAgY29uc3QgcmlnaHQgID0gdG9rZW5zLnNsaWNlKGN1ci5pZHgrMSk7XG4gICAgICAgIGNvbnN0IG9wID0gb3BfaW1wbFtvcF90b2tlbi52YWx1ZSBhcyBrZXlvZiB0eXBlb2Ygb3BfaW1wbF07XG4gICAgICAgIHJldHVybiBuZXcgTm9kZShcbiAgICAgICAgICAgIG9wLFxuICAgICAgICAgICAgdG9rZW5saXN0MlRyZWUocmlnaHQpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgbGVmdCAgPSB0b2tlbnMuc2xpY2UoMCwgY3VyLmlkeCk7XG4gICAgY29uc3QgcmlnaHQgPSB0b2tlbnMuc2xpY2UoY3VyLmlkeCsxKTtcblxuICAgIGNvbnN0IG9wID0gb3BfaW1wbFtvcF90b2tlbi52YWx1ZSBhcyBrZXlvZiB0eXBlb2Ygb3BfaW1wbF07XG5cbiAgICByZXR1cm4gbmV3IE5vZGUoXG4gICAgICAgIG9wLFxuICAgICAgICB0b2tlbmxpc3QyVHJlZShsZWZ0KSxcbiAgICAgICAgdG9rZW5saXN0MlRyZWUocmlnaHQpXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlX2Zvcm11bGEoc3RyOnN0cmluZykge1xuXG4gICAgbGV0IG9mZnNldCA9IDE7XG4gICAgbGV0IHRva2VucyA9IG5ldyBBcnJheTxUb2tlbj4oKTtcblxuICAgIHdoaWxlKCBvZmZzZXQgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIGxldCBjdXJUb2tlbiA9IGV4dHJhY3RUb2tlbihzdHIsIG9mZnNldCk7XG4gICAgICAgIHRva2Vucy5wdXNoKCBjdXJUb2tlbiApO1xuICAgICAgICBvZmZzZXQgPSBjdXJUb2tlbi5lbmQ7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IHRva2VubGlzdDJUcmVlKHRva2VucykhO1xuXG4gICAgY29uc3QgcmFuZ2VzID0gdG9rZW5zLmZpbHRlcih0ID0+IHQudHlwZSA9PT0gXCJyYW5nZVwiICk7XG5cbiAgICByZXR1cm4gbmV3IEZvcm11bGEoc3RyLCAoc2hlZXQ6IENhbGNTaGVldCkgPT4gbm9kZS5ldmFsKHNoZWV0KSwgcmFuZ2VzICk7XG59IiwiLy9UT0RPOiB3ZWJwYWNrIGNvbmZpZy4uLlxuaW1wb3J0IExJU1MgZnJvbSBcIi4uLy4uLy4uL2xpYnMvTElTU1wiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0LCBDZWxsTGlzdCwgZGVmYXVsdEZvcm1hdCB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbi8vVE9ETzogc3ludGF4IGhpZ2hsaWdodCA7KVxuXG5jb25zdCBjc3MgPSBgXG4gICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYgcHJlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKCAxcmVtICsgOHB4ICsgMnB4ICk7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xpYmVyYXRpb24gU2Fucyc7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5leHBvcnQgY2xhc3MgUGxhZ2VGb3JtdWxhIGV4dGVuZHMgTElTUyh7XG4gICAgY3NzXG59KSB7XG5cbiAgICAjaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoIHRoaXMuI2lucHV0ICk7XG4gICAgICAgIHRoaXMuI2lucHV0LnRvZ2dsZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJyk7XG5cbiAgICAgICAgdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldikgPT4ge1xuICAgICAgICAgICAgaWYoZXYuY29kZSAhPT0gJ0VudGVyJylcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGV2LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLiNzaGVldC5nZXRDZWxscyh0aGlzLiNpbnB1dC50ZXh0Q29udGVudCEpLmNlbGxzO1xuXG4gICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5hZGQoIC4uLnNlbGVjdGVkICk7XG5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LmN1cnNvci5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy4jc2hlZXQuY3Vyc29yLmFkZCggc2VsZWN0ZWRbMF0gKTtcblxuICAgICAgICAgICAgdGhpcy4jaW5wdXQuYmx1cigpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vVE9ETy4uLi5cbiAgICAgICAgdGhpcy4jaW5wdXQudG9nZ2xlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAvKnRoaXMuI2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcblxuICAgICAgICB9KTsqL1xuICAgIH1cblxuICAgICNzaGVldCE6IENhbGNTaGVldDtcblxuICAgIHN5bmNUbyhzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcblxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBzaGVldC5zZWxlY3Rpb247XG5cbiAgICAgICAgc2VsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChfOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gc2VsZWN0aW9uLnBsYWdlX25hbWUgPz8gXCJcIjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5MSVNTLmRlZmluZSgnY2FsYy1wbGFnZScsIFBsYWdlRm9ybXVsYSk7IiwiaW1wb3J0IHsgQ2FsY1NoZWV0LCBDZWxsIH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuZXhwb3J0IGNsYXNzIFBsYWdlU2VsZWN0b3Ige1xuXG4gICAgI3VwZGF0ZVNlbGVjdGlvbigpIHtcblxuICAgICAgICBsZXQgc2VsZWN0ZWRfY2VsbHMgPSB0aGlzLiNzaGVldC5nZXRSYW5nZSggdGhpcy4jb3JpZ19wb3MsIHRoaXMuI2ZpbmFsX3BvcyApLmNlbGxzO1xuXG4gICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5jbGVhcigpOyAvLyB3ZSBhZGQgaXQuLi5cblxuICAgICAgICBpZiggdGhpcy4jaXNDdHJsICkge1xuXG4gICAgICAgICAgICAvLyByZXN0b3JlIGluaXRpYWwgc3RhdGUuLi5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5hZGQoLi4udGhpcy4jcHJldl9zZWxlY3Rpb24pO1xuXG4gICAgICAgICAgICAvL1RPRE8gb25seSBvcmlnX3RhcmdldC4uLlxuICAgICAgICAgICAgaWYodGhpcy4jc2hlZXQuc2VsZWN0aW9uLmhhcyggLi4uc2VsZWN0ZWRfY2VsbHMgKSApXG4gICAgICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLnJlbW92ZSggLi4uc2VsZWN0ZWRfY2VsbHMgKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uYWRkKCAuLi5zZWxlY3RlZF9jZWxscyApO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uYWRkKCAuLi5zZWxlY3RlZF9jZWxscyApO1xuICAgIH1cblxuICAgICNpc0N0cmwgICAgICAgICE6IGJvb2xlYW47XG4gICAgI3NoZWV0ICAgICAgICAgIDogQ2FsY1NoZWV0O1xuICAgICNvcmlnX3RhcmdldCAgICE6IEhUTUxFbGVtZW50O1xuICAgICNvcmlnX3BvcyAgICAgICE6IFtudW1iZXIsIG51bWJlcl07XG4gICAgI2ZpbmFsX3BvcyAgICAgITogW251bWJlciwgbnVtYmVyXTtcbiAgICAjcHJldl9zZWxlY3Rpb24hOiBDZWxsW107XG5cbiAgICAjZXYycG9zKGV2OiBNb3VzZUV2ZW50KTogW251bWJlcixudW1iZXJdIHtcblxuICAgICAgICBjb25zdCBjb2xzID0gWy4uLnRoaXMuI3NoZWV0LnRib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuXTtcbiAgICAgICAgbGV0IGNvbF9pZDtcbiAgICAgICAgZm9yKGNvbF9pZCA9IGNvbHMubGVuZ3RoLTE7IGNvbF9pZCA+PSAwOyAtLWNvbF9pZCkge1xuICAgICAgICAgICAgaWYoIGV2LmNsaWVudFggPj0gY29sc1tjb2xfaWRdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnggKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCByb3dzID0gWy4uLnRoaXMuI3NoZWV0LnRib2R5LmNoaWxkcmVuXS5tYXAoIGUgPT4gZS5jaGlsZHJlblswXSApO1xuICAgICAgICBsZXQgcm93X2lkO1xuICAgICAgICBmb3Iocm93X2lkID0gcm93cy5sZW5ndGgtMTsgcm93X2lkID49IDA7IC0tcm93X2lkKSB7XG4gICAgICAgICAgICBpZiggZXYuY2xpZW50WSA+PSByb3dzW3Jvd19pZF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSApXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW3Jvd19pZCwgY29sX2lkXTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcblxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpITtcblxuICAgICAgICBjb25zdCBvbl9tb3VzZV9tb3ZlID0gKGV2OiBNb3VzZUV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuI2ZpbmFsX3BvcyA9IHRoaXMuI2V2MnBvcyhldik7XG5cbiAgICAgICAgICAgIHRoaXMuI3VwZGF0ZVNlbGVjdGlvbigpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHNoZWV0LmN1cnNvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24ucmVwbGFjZUFsbCggc2hlZXQuZ2V0VmlzaWJsZUNlbGwoc2hlZXQuY3Vyc29yKSApO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHNoZWV0LmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXY6TW91c2VFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiggc2hlZXQuc3RhdGVzLmNlbGxfZWRpdC5zdGF0ZSA9PT0gdGFyZ2V0ICkgIC8vIGEgY2VsbCBiZWluZyBlZGl0ZWQuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaWYoICEgW1wiVEhcIiwgXCJURFwiXS5pbmNsdWRlcyggdGFyZ2V0LnRhZ05hbWUgKSApLy8gLi4uXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgPT09IFwiVEhcIiAmJiB0YXJnZXQudGV4dENvbnRlbnQgPT09IFwiXCIgKSB7IC8vIG1vdXNlbW92ZSBkb2VzIG5vdGhpbmcuXG5cbiAgICAgICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uY2xlYXIoKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZWYgPSBgQTE6JHt0aGlzLiNzaGVldC5wb3MycmVmKHRoaXMuI3NoZWV0Lm5iUm93cywgdGhpcy4jc2hlZXQubmJDb2xzKX1gO1xuICAgICAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5hZGQoIC4uLnRoaXMuI3NoZWV0LmdldENlbGxzKHJlZikuY2VsbHMgKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4jaXNDdHJsICAgICAgICAgPSBldi5jdHJsS2V5O1xuICAgICAgICAgICAgdGhpcy4jb3JpZ190YXJnZXQgICAgPSB0YXJnZXQ7XG4gICAgICAgICAgICB0aGlzLiNvcmlnX3BvcyAgICAgICA9IHRoaXMuI2V2MnBvcyhldik7IC8vIENhbiBiZSBUSC4uLlxuICAgICAgICAgICAgdGhpcy4jZmluYWxfcG9zICAgICAgPSB0aGlzLiNvcmlnX3BvcztcbiAgICAgICAgICAgIHRoaXMuI3ByZXZfc2VsZWN0aW9uID0gc2hlZXQuc2VsZWN0aW9uLmNlbGxzLnNsaWNlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuI3VwZGF0ZVNlbGVjdGlvbigpO1xuICAgICAgICAgICAgbWFpbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbl9tb3VzZV9tb3ZlKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBtYWluLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uX21vdXNlX21vdmUpO1xuICAgICAgICAgICAgfSwge29uY2U6IHRydWV9KTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG59IiwiLy9UT0RPOiB3ZWJwYWNrIGNvbmZpZy4uLlxuaW1wb3J0IExJU1MgZnJvbSBcIi4uLy4uLy4uL2xpYnMvTElTU1wiO1xuXG4vL0B0cy1pZ25vcmVcbmltcG9ydCBjc3MgZnJvbSBcIiEhcmF3LWxvYWRlciEuL2luZGV4LmNzc1wiO1xuXG5leHBvcnQgdHlwZSBWYWx1ZVR5cGUgPSBzdHJpbmd8bnVtYmVyfERhdGV8Ym9vbGVhbjtcbmV4cG9ydCB0eXBlIFJhd0NvbnRlbnRUeXBlID0gVmFsdWVUeXBlfEZvcm11bGE7XG5cbmV4cG9ydCB0eXBlIENlbGwgPSBIVE1MVGFibGVDZWxsRWxlbWVudCAmIHtcbiAgICByYXdDb250ZW50OiBSYXdDb250ZW50VHlwZSxcbiAgICBmb3JtYXQ6ICh0aGlzOiBDZWxsLCB2PzogbnVtYmVyfHN0cmluZ3xEYXRlKSA9PiBzdHJpbmcsXG4gICAgaXNfcm86IGJvb2xlYW5cbn07XG5cbmZ1bmN0aW9uIGlzQWN0aXZlKHRhcmdldDogSFRNTEVsZW1lbnQpIHtcblxuICAgIHJldHVybiB0YXJnZXQubWF0Y2hlcygnOmZvY3VzJyk7XG4vKlxuICAgIGxldCBhY3RpdmUgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgd2hpbGUoIGFjdGl2ZT8uc2hhZG93Um9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgKVxuICAgICAgICBhY3RpdmUgPSBhY3RpdmUuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50O1xuXG4gICAgcmV0dXJuIGFjdGl2ZSA9PT0gdGFyZ2V0OyovXG59XG5cbmZ1bmN0aW9uIG9uSW5wdXQoZXY6IEV2ZW50KSB7XG5cbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMTIzNDc0MS9wbGFjZS1jYXJldC1iYWNrLXdoZXJlLWl0LXdhcy1hZnRlci1jaGFuZ2luZy1pbm5lcmh0bWwtb2YtYS1jb250ZW50ZWRpdGFibGUtZWxlbVxuXG4gICAgbGV0IHJyYW5nZSA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSEuZ2V0UmFuZ2VBdCgwKTtcbiAgICBsZXQgYyA9IHJyYW5nZS5zdGFydE9mZnNldDtcblxuICAgIC8vbGV0IHRleHQgPSBcIlwiO1xuICAgIGxldCBsZW5ndGggPSAwO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXJnZXQuY2hpbGROb2Rlcy5sZW5ndGg7ICsraSkge1xuXG4gICAgICAgIGxldCBjaGlsZCA9IHRhcmdldC5jaGlsZE5vZGVzW2ldO1xuICAgICAgICBpZiggY2hpbGQubm9kZVR5cGUgIT09IE5vZGUuVEVYVF9OT0RFKVxuICAgICAgICAgICAgY2hpbGQgPSBjaGlsZC5jaGlsZE5vZGVzWzBdO1xuXG4gICAgICAgIGlmKCBycmFuZ2Uuc3RhcnRDb250YWluZXIgPT09IGNoaWxkICkge1xuICAgICAgICAgICAgLy90ZXh0ICs9IHAuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudCEuc2xpY2UoMCwgYyk7XG4gICAgICAgICAgICBsZW5ndGggKz0gYztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vdGV4dCArPSBwLmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQ7XG4gICAgICAgIGxlbmd0aCArPSB0YXJnZXQuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudCEubGVuZ3RoO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBpbm5lckhUTUxcbiAgICB0YXJnZXQudGV4dENvbnRlbnQgPSB0YXJnZXQudGV4dENvbnRlbnQ7XG5cbiAgICBsZXQgY2hpbGQhOiBDaGlsZE5vZGU7XG4gICAgbGV0IGk7XG4gICAgZm9yKGkgPSAwOyBpIDwgdGFyZ2V0LmNoaWxkTm9kZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYoIGxlbmd0aCA8PSB0YXJnZXQuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudCEubGVuZ3RoICkge1xuICAgICAgICAgICAgY2hpbGQgPSB0YXJnZXQuY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGxlbmd0aCAtPSB0YXJnZXQuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudCEubGVuZ3RoO1xuICAgIH1cblxuICAgIGlmKCBjaGlsZC5ub2RlVHlwZSAhPT0gTm9kZS5URVhUX05PREUpXG4gICAgICAgIGNoaWxkID0gY2hpbGQuY2hpbGROb2Rlc1swXTtcblxuICAgIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgdmFyIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSE7XG5cbiAgICByYW5nZS5zZXRTdGFydChjaGlsZCwgbGVuZ3RoKTtcbiAgICByYW5nZS5jb2xsYXBzZSh0cnVlKTtcbiAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgc2VsLmFkZFJhbmdlKHJhbmdlKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VJbnB1dCggc3RyOiBzdHJpbmcgKTogUmF3Q29udGVudFR5cGUge1xuXG4gICAgaWYoc3RyID09PSAnVlJBSScpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIGlmKHN0ciA9PT0gJ0ZBVVgnKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBpZihzdHIudHJpbSgpID09PSAnJylcbiAgICAgICAgcmV0dXJuIHN0cjtcblxuICAgIGlmKHN0clswXSA9PT0gXCI9XCIpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlX2Zvcm11bGEoc3RyKTtcbiAgICB9XG5cbiAgICBsZXQgdGVzdF9udW1iZXIgPSBOdW1iZXIoIHN0ci5yZXBsYWNlKCcsJywgJy4nKSApO1xuICAgIGlmKCAhIE51bWJlci5pc05hTiggdGVzdF9udW1iZXIgKSApXG4gICAgICAgIHJldHVybiB0ZXN0X251bWJlcjtcbiAgICBpZiggc3RyW3N0ci5sZW5ndGgtMV0gPT09IFwiJVwiKSB7XG4gICAgICAgIHRlc3RfbnVtYmVyID0gTnVtYmVyKCBzdHIuc2xpY2UoMCwtMSkucmVwbGFjZSgnLCcsICcuJykgKTtcbiAgICAgICAgaWYoICEgTnVtYmVyLmlzTmFOKCB0ZXN0X251bWJlciApIClcbiAgICAgICAgICAgIHJldHVybiArKHRlc3RfbnVtYmVyIC8gMTAwKS50b1ByZWNpc2lvbig3KTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJ0cyA9IHN0ci5zcGxpdCgnLycpO1xuICAgIGlmKHBhcnRzLmxlbmd0aCA8PSAzKSB7XG5cbiAgICAgICAgbGV0IHRlc3RfZGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgK3BhcnRzWzJdID8/IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgICtwYXJ0c1sxXS0xLFxuICAgICAgICAgICAgK3BhcnRzWzBdXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYoIHRlc3RfZGF0ZS50b1N0cmluZygpICE9PSBcIkludmFsaWQgRGF0ZVwiIClcbiAgICAgICAgICAgIHJldHVybiB0ZXN0X2RhdGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbn1cblxuY2xhc3MgU3RhdGU8VD4ge1xuXG4gICAgI3N0YXRlIDogVHxudWxsID0gbnVsbDtcbiAgICAjdGFyZ2V0OiBFdmVudFRhcmdldDtcbiAgICAjbmFtZSAgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQ6IEV2ZW50VGFyZ2V0LCBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy4jdGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLiNuYW1lICAgPSBuYW1lO1xuICAgIH1cblxuICAgIGdldCBzdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3N0YXRlO1xuICAgIH1cblxuICAgIHNldCBzdGF0ZShzdGF0ZTogVHxudWxsKSB7XG5cbiAgICAgICAgaWYoIHRoaXMuI3N0YXRlID09PSBzdGF0ZSlcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBsZXQgcHJldl9zdGF0ZSA9IHRoaXMuI3N0YXRlO1xuICAgICAgICB0aGlzLiNzdGF0ZSA9IHN0YXRlO1xuICAgICAgICBcblxuICAgICAgICBpZiggcHJldl9zdGF0ZSAhPT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMuI3RhcmdldC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoYCR7dGhpcy4jbmFtZX1fZW5kYCwge2RldGFpbDogcHJldl9zdGF0ZX0pICk7ICAgICAgICAgICAgXG5cbiAgICAgICAgaWYoIHN0YXRlICE9PSBudWxsIClcbiAgICAgICAgICAgIHRoaXMuI3RhcmdldC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoYCR7dGhpcy4gI25hbWV9X3N0YXJ0YCwge2RldGFpbDogc3RhdGV9KSApO1xuICAgIH1cbn1cblxuY29uc3QgU3RhdGVzID0ge1xuICAgIFwiY2VsbF9lZGl0XCI6IFN0YXRlPENlbGw+LFxuICAgIFwicmVjb3B5XCIgICA6IFN0YXRlPENlbGxMaXN0PlxuIH0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjbGFzcyBDYWxjU2hlZXQgZXh0ZW5kcyBMSVNTKHtcbiAgICBjc3MsXG4gICAgYXR0cmlidXRlczogW1wiY29sc1wiLCBcInJvd3NcIiwgXCJyb1wiXVxufSkge1xuXG4gICAgc3RhdGVzID0gT2JqZWN0LmZyb21FbnRyaWVzKCBPYmplY3QuZW50cmllcyhTdGF0ZXMpLm1hcCggKFtuLHNdKSA9PiBbbiwgbmV3IHModGhpcy5ob3N0LCBuKV0gYXMgY29uc3QgKSk7XG5cblxuICAgIC8vVE9ETzogUk8gcHJvcCA/XG4gICAgI2N1cnNvciAgICA9IG5ldyBDZWxsTGlzdCh0aGlzLCBbXSk7XG4gICAgI3NlbGVjdGlvbjogQ2VsbExpc3QgPSBuZXcgQ2VsbExpc3QodGhpcywgW10pO1xuICAgICNwbGFnZV9zZWxlY3RvciA9IG5ldyBQbGFnZVNlbGVjdG9yKHRoaXMpO1xuXG4gICAgI2Zvcm1hdF9tbmdyID0gbmV3IEZvcm1hdE1hbmFnZXIodGhpcyk7XG5cbiAgICBzdGF0aWMgZ2V0U2hlZXRGcm9tQ2VsbChjZWxsOiBDZWxsKSB7XG4gICAgICAgIHJldHVybiBMSVNTLmdldExJU1NTeW5jPENhbGNTaGVldD4oIChjZWxsLmdldFJvb3ROb2RlKCkgYXMgU2hhZG93Um9vdCkuaG9zdCApO1xuICAgIH1cblxuICAgIGdldCBjdXJzb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjdXJzb3I7XG4gICAgfVxuICAgIGdldCBzZWxlY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzZWxlY3Rpb247XG4gICAgfVxuXG4gICAgb3ZlcnJpZGUgZ2V0IGNvbnRlbnQoKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5jb250ZW50O1xuICAgIH1cblxuICAgIHNldFJlY3QodGFyZ2V0OiBIVE1MRWxlbWVudCwgW3gseSx3LGhdOiByZWFkb25seSBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSkge1xuXG4gICAgICAgIGNvbnN0IHRibF9vZmZzZXQgPSB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvcigndGFibGUnKSEub2Zmc2V0VG9wO1xuXG4gICAgICAgIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eSgndG9wJyAgICwgYCR7dGJsX29mZnNldCArIHl9cHhgKTtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KCdoZWlnaHQnLCBgJHtofXB4YCk7XG5cbiAgICAgICAgdGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KCdsZWZ0JyAgICwgYCR7eH1weGApO1xuICAgICAgICB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkoJ3dpZHRoJywgYCR7d31weGApO1xuXG4gICAgfVxuXG4gICAgZ2V0UmVjdChjZWxsczogQ2VsbExpc3R8Q2VsbFtdKSB7XG5cbiAgICAgICAgY2VsbHMgPSBcImNlbGxzXCIgaW4gY2VsbHMgPyBjZWxscy5jZWxscyA6IGNlbGxzO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gY2VsbHNbMF07XG4gICAgICAgIGNvbnN0IGVuZCAgID0gY2VsbHNbY2VsbHMubGVuZ3RoLTFdO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHN0YXJ0Lm9mZnNldExlZnQsXG4gICAgICAgICAgICBzdGFydC5vZmZzZXRUb3AsXG4gICAgICAgICAgICBlbmQub2Zmc2V0TGVmdCArIGVuZC5jbGllbnRXaWR0aCAtIHN0YXJ0Lm9mZnNldExlZnQsXG4gICAgICAgICAgICBlbmQub2Zmc2V0VG9wICsgZW5kLmNsaWVudEhlaWdodCAtIHN0YXJ0Lm9mZnNldFRvcCArIDFcbiAgICAgICAgXSBhcyBjb25zdDtcbiAgICB9XG5cbiAgICByZWxhdGl2ZVRvKGNlbGw6IENlbGwsIHJvd19kaWZmOiBudW1iZXIsIGNvbF9kaWZmOiBudW1iZXIpIHtcbiAgICAgICAgXG4gICAgICAgIGxldCBbcm93LCBjb2xdID0gdGhpcy5jZWxsUG9zKGNlbGwpO1xuXG4gICAgICAgIHJvdyArPSByb3dfZGlmZjtcbiAgICAgICAgY29sICs9IGNvbF9kaWZmO1xuXG4gICAgICAgIC8vIGZvciBub3JtYWwgOiBnZXQgc3R1Y2sgaW5zaWRlIGdyaWQuXG4gICAgICAgIGlmKCByb3cgPCAxKVxuICAgICAgICAgICAgcm93ID0gMTtcbiAgICAgICAgaWYoIHJvdyA+PSB0aGlzLiN0Ym9keS5jaGlsZHJlbi5sZW5ndGggKVxuICAgICAgICAgICAgcm93ID0gdGhpcy4jdGJvZHkuY2hpbGRyZW4ubGVuZ3RoIC0gMTtcblxuICAgICAgICBpZiggY29sIDwgMSlcbiAgICAgICAgICAgIGNvbCA9IDE7XG4gICAgICAgIGlmKCBjb2wgPj0gdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlbi5sZW5ndGggKVxuICAgICAgICAgICAgY29sID0gdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlbi5sZW5ndGggLSAxO1xuXG4gICAgICAgIHJldHVybiB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuW2NvbF0gYXMgQ2VsbDtcbiAgICB9XG5cbiAgICAvL1RPRE86IDJELi4uXG4gICAgI3Bhc3RlYmluOiBDZWxsTGlzdCB8IG51bGwgPSBudWxsO1xuXG4gICAgI2Zvcm11bGFfcmVmcyA9IG5ldyBBcnJheTxGb3JtdWxhUmVmPigpO1xuICAgICNnZXRGb3JtdWxhUmVmKGk6IG51bWJlcikge1xuICAgICAgICB3aGlsZSggaSA+PSB0aGlzLiNmb3JtdWxhX3JlZnMubGVuZ3RoKVxuICAgICAgICAgICAgdGhpcy4jZm9ybXVsYV9yZWZzLnB1c2goIG5ldyBGb3JtdWxhUmVmKHRoaXMpICk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuI2Zvcm11bGFfcmVmc1tpXTtcbiAgICB9XG4gICAgI2NsZWFyRm9ybXVsYVJlZnMoKSB7XG4gICAgICAgIGZvcihsZXQgcmVmIG9mIHRoaXMuI2Zvcm11bGFfcmVmcylcbiAgICAgICAgICAgIHJlZi5zZXRSYW5nZShudWxsKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBjb25zdCBjdXJzb3IgPSBuZXcgUmFuZ2VPdmVybGF5KHRoaXMsIFwiY3Vyc29yXCIpO1xuICAgICAgICBjb25zdCByZWNvcHkgPSBuZXcgUmVjb3B5SGFuZGxlKHRoaXMpO1xuICAgICAgICBjb25zdCBjb3B5ICAgPSBuZXcgUmFuZ2VPdmVybGF5KHRoaXMsIFwiY29weV9oaWdobGlnaHRcIik7XG5cbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpITtcblxuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcignY2VsbF9lZGl0X2VuZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2NsZWFyRm9ybXVsYVJlZnMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGxhc3RfcmVjb3B5X3RhcmdldDogQ2VsbHxudWxsID0gbnVsbDtcbiAgICAgICAgbGV0IGxhc3RfcmVjb3B5X2RpciAgIDogW251bWJlciwgbnVtYmVyXXxudWxsID0gbnVsbFxuXG4gICAgICAgIGNvbnN0IG9uX3JlY29weV9tb3ZlID0gKGV2OiBNb3VzZUV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBjZWxscyA9ICh0aGlzLnN0YXRlcy5yZWNvcHkuc3RhdGUgYXMgQ2VsbExpc3QpLmNlbGxzO1xuICAgICAgICAgICAgY29uc3Qgc3JjID0gY2VsbHNbY2VsbHMubGVuZ3RoLTFdO1xuXG4gICAgICAgICAgICBsZXQgcG9zID0gc3JjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICBsZXQgZF9weCA9IGV2LmNsaWVudFggLSAocG9zLnggKyBwb3Mud2lkdGggLzIpO1xuICAgICAgICAgICAgbGV0IGRfcHkgPSBldi5jbGllbnRZIC0gKHBvcy55ICsgcG9zLmhlaWdodC8yKTtcblxuICAgICAgICAgICAgbGV0IGRfeCA9IDA7XG4gICAgICAgICAgICBsZXQgZF95ID0gTWF0aC5zaWduKGRfcHkpO1xuXG4gICAgICAgICAgICBpZiggTWF0aC5hYnMoZF9weCkgPiBNYXRoLmFicyhkX3B5KSApIHtcbiAgICAgICAgICAgICAgICBkX3ggPSBNYXRoLnNpZ24oZF9weCk7XG4gICAgICAgICAgICAgICAgZF95ID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHByZXYgPSBzcmM7XG4gICAgICAgICAgICBsZXQgY3VyICA9IHNyYztcblxuICAgICAgICAgICAgbGV0IGRpZmZfeCwgZGlmZl95O1xuXG4gICAgICAgICAgICBkbyB7XG5cbiAgICAgICAgICAgICAgICBwcmV2PSBjdXI7XG4gICAgICAgICAgICAgICAgY3VyID0gdGhpcy5yZWxhdGl2ZVRvKHByZXYsIGRfeSwgZF94KTtcblxuICAgICAgICAgICAgICAgIGlmKCBjdXIgPT09IHByZXYpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgbGV0IHBvc19jdXIgPSBjdXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgZGlmZl94ID0gZXYuY2xpZW50WCAtIChwb3NfY3VyLnggKyBwb3NfY3VyLndpZHRoIC8yKTtcbiAgICAgICAgICAgICAgICBkaWZmX3kgPSBldi5jbGllbnRZIC0gKHBvc19jdXIueSArIHBvc19jdXIuaGVpZ2h0LzIpO1xuXG4gICAgICAgICAgICB9IHdoaWxlKCBkaWZmX3ggKiBkX3ggKyBkaWZmX3kgKiBkX3kgPiAwICk7XG5cbiAgICAgICAgICAgIGxhc3RfcmVjb3B5X3RhcmdldCA9IHByZXY7XG4gICAgICAgICAgICBsYXN0X3JlY29weV9kaXIgICAgPSBbZF94LGRfeV07XG5cbiAgICAgICAgICAgIGxldCBiZWcgPSBzcmM7XG4gICAgICAgICAgICBsZXQgZW5kID0gcHJldjtcbiAgICAgICAgICAgIGlmKCBzcmMub2Zmc2V0TGVmdCA+IHByZXYub2Zmc2V0TGVmdCB8fCBzcmMub2Zmc2V0VG9wID4gcHJldi5vZmZzZXRUb3AgKVxuICAgICAgICAgICAgICAgIFtiZWcsIGVuZF0gPSBbZW5kLCBiZWddO1xuXG4gICAgICAgICAgICAvL1RPRE86IGhpZ2hsaWdodC4uLlxuICAgICAgICAgICAgdGhpcy4jY2xlYXJGb3JtdWxhUmVmcygpO1xuICAgICAgICAgICAgdGhpcy4jZ2V0Rm9ybXVsYVJlZigxKS5zZXRSYW5nZSggdGhpcy5nZXRSYW5nZShiZWcsIGVuZCkgKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWNvcHkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXYpID0+IHtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGVzLnJlY29weS5zdGF0ZSA9IHRoaXMuI3NlbGVjdGlvbjtcblxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgbWFpbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uX3JlY29weV9tb3ZlKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBbZF94LCBkX3ldID0gIGxhc3RfcmVjb3B5X2RpciE7XG5cbiAgICAgICAgICAgICAgICBsZXQgY2VsbHMgPSAodGhpcy5zdGF0ZXMucmVjb3B5LnN0YXRlIGFzIENlbGxMaXN0KS5jZWxscztcbiAgICAgICAgICAgICAgICBjb25zdCBzcmMgPSBjZWxsc1tjZWxscy5sZW5ndGgtMV07XG5cbiAgICAgICAgICAgICAgICBsZXQgbmIgPSAwO1xuXG4gICAgICAgICAgICAgICAgaWYoIGxhc3RfcmVjb3B5X3RhcmdldCAhPT0gc3JjKSB7IC8vIGNvcHkuLi5cblxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VyID0gc3JjO1xuICAgICAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICArK25iO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXIgPSB0aGlzLnJlbGF0aXZlVG8oY3VyLCBkX3ksIGRfeCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50OiBSYXdDb250ZW50VHlwZXxDZWxsID0gc3JjO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHR5cGVvZiBjb250ZW50LnJhd0NvbnRlbnQgPT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IChzcmMucmF3Q29udGVudCBhcyBudW1iZXIpICsgbmIqKGRfeCArIGRfeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKCBjb250ZW50LnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBEYXRlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBuZXcgRGF0ZShzcmMucmF3Q29udGVudCBhcyBEYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LnNldERhdGUoIGNvbnRlbnQuZ2V0RGF0ZSgpICsgbmIqKGRfeCArIGRfeSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ2VsbExpc3QodGhpcywgW2N1cl0pLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyLmNsYXNzTmFtZSA9IHNyYy5jbGFzc05hbWU7IC8vVE9ETzogZm9ybWF0Li4uXG5cblxuICAgICAgICAgICAgICAgICAgICB9IHdoaWxlKCBjdXIhPT0gbGFzdF9yZWNvcHlfdGFyZ2V0ICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy4jY2xlYXJGb3JtdWxhUmVmcygpOyAvLyByZWNvcHlcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlcy5yZWNvcHkuc3RhdGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIGxhc3RfcmVjb3B5X3RhcmdldCA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGFzdF9yZWNvcHlfZGlyICAgID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBtYWluLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25fcmVjb3B5X21vdmUpO1xuXG4gICAgICAgICAgICB9LCB7b25jZTogdHJ1ZX0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcigncmVjb3B5X3N0YXJ0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ3JlY29weScpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3JlY29weV9lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LnJlbW92ZSgncmVjb3B5Jyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy4jY3Vyc29yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldikgPT4ge1xuXG4gICAgICAgICAgICBpZiggdGhpcy4jY3Vyc29yLmxlbmd0aCAhPT0gMSApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXJzb3IgaGFzIGludmFsaWQgbnVtYmVyIG9mIGNlbGxzJyk7XG5cbiAgICAgICAgICAgIGN1cnNvci5zZXRSYW5nZSggbmV3IENlbGxMaXN0KHRoaXMsIFt0aGlzLmdldFZpc2libGVDZWxsKHRoaXMuI2N1cnNvcildKSApO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNzZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGZvciggbGV0IGNlbGwgb2YgdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaWdobGlnaHQnKSApXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKTtcblxuICAgICAgICAgICAgY29uc3QgY2VsbHMgPSB0aGlzLiNzZWxlY3Rpb24uY2VsbHM7XG5cbiAgICAgICAgICAgIGlmKCBjZWxscy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBmb3IoIGxldCBjZWxsIG9mIGNlbGxzICkge1xuXG4gICAgICAgICAgICAgICAgaWYoIGNlbGxzLmxlbmd0aCAhPT0gMSlcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gdGhpcy4jY2VsbFBvcyhjZWxsKTtcbiAgICAgICAgICAgICAgICB0aGlzLiN0Ym9keS5jaGlsZHJlblswXS5jaGlsZHJlbltjb2xdLmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XG4gICAgICAgICAgICAgICAgdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlblswXS5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWNvcHkuc2V0UmFuZ2UodGhpcy4jc2VsZWN0aW9uKTtcblxuICAgICAgICAgICAgLy8gb25seSBpZiBzaW1wbGUuLi5cbiAgICAgICAgICAgIC8vIGNvbnN0IGxhc3QgPSBjZWxsc1tjZWxscy5sZW5ndGgtMV07XG4gICAgICAgICAgICAvLyBwb2ludGVyLi4uXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vVE9ETzogbW92ZSBvdXQgP1xuICAgICAgICBjb25zdCBmb3JtdWxhX2JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtdWxhX2Jhci5jbGFzc0xpc3QuYWRkKCd0b29sYmFyJyk7XG5cbiAgICAgICAgKCBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHBsYWdlID0gYXdhaXQgTElTUy5idWlsZChcImNhbGMtcGxhZ2VcIik7XG4gICAgICAgICAgICBwbGFnZS5zeW5jVG8odGhpcyk7XG4gICAgICAgICAgICBmb3JtdWxhX2Jhci5hcHBlbmQoIHBsYWdlLmhvc3QgKTtcblxuICAgICAgICAgICAgY29uc3QgZm9ybXVsYSA9IGF3YWl0IExJU1MuYnVpbGQoXCJjYWxjLWZvcm11bGFcIik7XG4gICAgICAgICAgICBmb3JtdWxhLnN5bmNUbyh0aGlzKTtcbiAgICAgICAgICAgIGZvcm11bGFfYmFyLmFwcGVuZCggZm9ybXVsYS5ob3N0ICk7XG5cbiAgICAgICAgfSkoKTtcbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZChmb3JtdWxhX2Jhcik7XG5cbiAgICAgICAgdGhpcy4jaW5pdEdyaWQoK3RoaXMuYXR0cnMucm93cyEsICt0aGlzLmF0dHJzLmNvbHMhKTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXYpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgICAgICAvLyB0aGUgY2VsbCBpcyBiZWluZyBlZGl0ZWQuLi5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQuaGFzQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKSApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgPT09IFwiVERcIiApXG4gICAgICAgICAgICAgICAgdGhpcy4jY3Vyc29yLnJlcGxhY2VBbGwoIHRhcmdldCBhcyBDZWxsICk7XG5cbiAgICAgICAgICAgIC8vVE9ETzogbm90IGNvcnJlY3QuLi5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSA9PT0gXCJUSFwiICYmIHRhcmdldC50ZXh0Q29udGVudCAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdldENlbGxzKHRhcmdldC50ZXh0Q29udGVudCEpLmNlbGxzWzBdO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jY3Vyc29yLnJlcGxhY2VBbGwoY2VsbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCAoZXYpID0+IHtcblxuICAgICAgICAgICAgbGV0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lICE9PSBcIlREXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiggdGhpcy5hdHRycy5ybyAhPT0gXCJ0cnVlXCIgJiYgKHRhcmdldCBhcyBDZWxsKS5pc19ybyAhPT0gdHJ1ZSApIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQudG9nZ2xlQXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIHRhcmdldC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2OiBLZXlib2FyZEV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGlmKCBldi5jb2RlLnN0YXJ0c1dpdGgoJ0Fycm93JykgKSB7XG5cbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY3VyID0gdGhpcy5jdXJzb3IuY2VsbHM7XG4gICAgICAgICAgICAgICAgaWYoIGN1ci5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGxldCBkX3JvdyA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IGRfY29sID0gMDtcblxuICAgICAgICAgICAgICAgIGlmKCBldi5jb2RlID09PSAnQXJyb3dMZWZ0JylcbiAgICAgICAgICAgICAgICAgICAgLS1kX2NvbDtcbiAgICAgICAgICAgICAgICBpZiggZXYuY29kZSA9PT0gJ0Fycm93UmlnaHQnKVxuICAgICAgICAgICAgICAgICAgICArK2RfY29sO1xuICAgICAgICAgICAgICAgIGlmKCBldi5jb2RlID09PSAnQXJyb3dVcCcpXG4gICAgICAgICAgICAgICAgICAgIC0tZF9yb3c7XG4gICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09ICdBcnJvd0Rvd24nKVxuICAgICAgICAgICAgICAgICAgICArK2Rfcm93O1xuXG4gICAgICAgICAgICAgICAgbGV0IG5leHQ6IENlbGw7XG4gICAgICAgICAgICAgICAgaWYoIGV2LmN0cmxLZXkgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHByZXYgICA9IGN1clswXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnNvciA9IHRoaXMucmVsYXRpdmVUbyhwcmV2LCBkX3JvdywgZF9jb2wpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKCBwcmV2LnJhd0NvbnRlbnQgIT09IHVuZGVmaW5lZCAmJiBjdXJzb3IucmF3Q29udGVudCAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlKCBwcmV2ICE9PSBjdXJzb3IgJiYgY3Vyc29yLnJhd0NvbnRlbnQgIT09IHVuZGVmaW5lZCkgeyAvLyB3ZSByZWFjaGVkIHRoZSBlbmQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldiAgID0gY3Vyc29yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvciA9IHRoaXMucmVsYXRpdmVUbyhwcmV2LCBkX3JvdywgZF9jb2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gcHJldjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlKCBwcmV2ICE9PSBjdXJzb3IgJiYgY3Vyc29yLnJhd0NvbnRlbnQgPT09IHVuZGVmaW5lZCkgeyAvLyB3ZSByZWFjaGVkIHRoZSBlbmQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldiAgID0gY3Vyc29yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvciA9IHRoaXMucmVsYXRpdmVUbyhwcmV2LCBkX3JvdywgZF9jb2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbmV4dCA9IGN1cnNvcjtcbiAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgICAgbmV4dCA9IHRoaXMucmVsYXRpdmVUbyggY3VyWzBdLCBkX3JvdywgZF9jb2wpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuI3Rib2R5LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJzb3IucmVwbGFjZUFsbChuZXh0KTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbm8gZWRpdGlvbiBhbGxvd2VkLi4uXG4gICAgICAgICAgICBpZiggdGhpcy5hdHRycy5ybyA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIGlmKCB0YXJnZXQgPT09IHRoaXMuI3Rib2R5ICkge1xuICAgICAgICAgICAgICAgIGlmKCBldi5jb2RlID09PSBcIktleVZcIiAmJiBldi5jdHJsS2V5ICYmIHRoaXMuI3Bhc3RlYmluICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLiNwYXN0ZWJpbi5jZWxscztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jc2VsZWN0aW9uLmNvbnRlbnQgPSBkYXRhO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvcHkgZm9ybWF0Li4uIFRPRE8gdXRpbGl0eSB0aGluZ3kuLi5cbiAgICAgICAgICAgICAgICAgICAgaWYoICEgZXYuc2hpZnRLZXkgfHwgISBldi5hbHRLZXkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcmMgPSB0aGlzLiNwYXN0ZWJpbi5jZWxscztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRzdCA9IHRoaXMuI3NlbGVjdGlvbi5jZWxscztcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7ICsraSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkc3RbaV0uY2xhc3NOYW1lID0gc3JjW2ldLmNsYXNzTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1RPRE86IGFkZCBmb3JtYXQuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiggKCBldi5rZXkgPT09IFwiY1wiIHx8IGV2LmtleSA9PT0gXCJ4XCIpICYmIGV2LmN0cmxLZXkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29weS5zZXRSYW5nZSh0aGlzLiNzZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAvLyBXSFkgPz8/XG4gICAgICAgICAgICAgICAgICAgIC8vaC5zdHlsZS5zZXRQcm9wZXJ0eSgndG9wJyAgICwgYCR7c2VsZWN0aW9uWzBdLm9mZnNldFRvcH1weGApO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3Bhc3RlYmluID0gdGhpcy4jc2VsZWN0aW9uLmRlZXBDbG9uZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKCBldi5rZXkgPT09IFwieFwiICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4jc2VsZWN0aW9uLmRlbGV0ZUZvcm1hdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4jc2VsZWN0aW9uLmRlbGV0ZUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiggZXYua2V5ID09PSBcIkNvbnRyb2xcIiB8fCBldi5rZXkgPT09IFwiU2hpZnRcIiB8fCBldi5rZXkgPT09IFwiQWx0XCIgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8gaWdub3JlXG4gICAgICAgICAgICAgICAgfSBpZiggZXYuY29kZSA9PT0gXCJEZWxldGVcIiApIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5kZWxldGVDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGlmKCBldi5jb2RlID09PSBcIkVudGVyXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZWQgZWxzZXdoZXJlXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGV2LmN0cmxLZXkpIHsgLy8gaWdub3JlIGN0cmxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHsgLy8gd2Ugc3RhcnQgZWRpdGluZy4uLlxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1ciA9IHRoaXMuY3Vyc29yLmNlbGxzO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKCBjdXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyWzBdLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChcImRibGNsaWNrXCIsIHtidWJibGVzOiB0cnVlfSkgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1clswXS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiggdGFyZ2V0ICE9PSB0aGlzLiN0Ym9keSAmJiBldi5jb2RlID09PSAnRW50ZXInICYmIGV2LnNoaWZ0S2V5IClcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvci5cblxuICAgICAgICAgICAgaWYoZXYuY29kZSA9PT0gXCJFbnRlclwiKSB7IC8vVE9ETzogRW50ZXIgaXMgZm9yIGN1cnJlbnQgcGxhZ2UuLi5cbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY3VyID0gdGhpcy5jdXJzb3IuY2VsbHM7XG4gICAgICAgICAgICAgICAgaWYoIGN1ci5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGxldCBbcm93LGNvbF0gPSB0aGlzLmNlbGxQb3MoIGN1clswXSApO1xuXG4gICAgICAgICAgICAgICAgKytyb3c7XG4gICAgICAgICAgICAgICAgaWYoIHJvdyA+PSB0aGlzLiN0Ym9keS5jaGlsZHJlbi5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICsrY29sO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiggY29sID49IHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW4ubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICBjb2wgPSAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlbltjb2xdIGFzIENlbGw7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiN0Ym9keS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3Vyc29yLnJlcGxhY2VBbGwobmV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBvbklucHV0MiA9IChldjogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2NsZWFyRm9ybXVsYVJlZnMoKTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGlmKGV2LmRldGFpbCAhPT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICBvbklucHV0KGV2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vVE9ETzogaGVyZS4uLlxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIChldikgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGNvcHkuc2V0UmFuZ2UobnVsbCk7XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSAhPT0gXCJURFwiKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5zdGF0ZXMuY2VsbF9lZGl0LnN0YXRlID0gdGFyZ2V0IGFzIENlbGw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNlbGxfZWRpdF9zdGFydFwiLCAoZXY6IEN1c3RvbUV2ZW50PENlbGw+KSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QudG9nZ2xlKFwiY2VsbF9lZGl0XCIsIHRydWUpO1xuXG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZXYuZGV0YWlsO1xuXG4gICAgICAgICAgICBpZihjZWxsLnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBGb3JtdWxhKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzdHIgPSBjZWxsLnJhd0NvbnRlbnQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBjb25zdCByYW5nZXMgPSBjZWxsLnJhd0NvbnRlbnQucmFuZ2VzVG9rZW47XG5cbiAgICAgICAgICAgICAgICBsZXQgY2hpbGRyZW46IChzdHJpbmd8SFRNTEVsZW1lbnQpW10gPSBbc3RyXTtcblxuICAgICAgICAgICAgICAgIGxldCByYW5nZXNfY29sb3JzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge307XG4gICAgICAgICAgICAgICAgbGV0IGN1cl9vZmZzZXQgPSAwO1xuXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHJhbmdlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3RyID0gY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoLTFdIGFzIHN0cmluZztcblxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGgtMV0gPSBzdHIuc2xpY2UoMCwgcmFuZ2VzW2ldLmJlZyAtIGN1cl9vZmZzZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlX25hbWUgPSByYW5nZXNbaV0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmKCAhIChyYW5nZV9uYW1lIGluIHJhbmdlc19jb2xvcnMpIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlc19jb2xvcnNbcmFuZ2VfbmFtZV0gPSBpJTg7XG5cbiAgICAgICAgICAgICAgICAgICAgcy5jbGFzc0xpc3QuYWRkKCdmb3JtdWxhX2hpZ2hsaWdodCcsIGBoaWdobGlnaHRfJHtyYW5nZXNfY29sb3JzW3JhbmdlX25hbWVdfWApOyAvL1RPRE8uLi5cbiAgICAgICAgICAgICAgICAgICAgcy50ZXh0Q29udGVudCA9IHJhbmdlc1tpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW4ucHVzaCggcyApOyAvLyByYW5nZS4uLlxuXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goIHN0ci5zbGljZShyYW5nZXNbaV0uZW5kIC0gY3VyX29mZnNldCkgKTtcbiAgICAgICAgICAgICAgICAgICAgY3VyX29mZnNldCA9IHJhbmdlc1tpXS5lbmQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2VsbC5yZXBsYWNlQ2hpbGRyZW4oIC4uLmNoaWxkcmVuICk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCByYW5nZXNfbmFtZXMgPSBPYmplY3Qua2V5cyhyYW5nZXNfY29sb3JzKTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmFuZ2VzX25hbWVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gcmFuZ2VzX25hbWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWYgPSB0aGlzLiNnZXRGb3JtdWxhUmVmKGkpO1xuICAgICAgICAgICAgICAgICAgICByZWYuc2V0Q29sb3IoIHJhbmdlc19jb2xvcnNbcmFuZ2VdICk7XG4gICAgICAgICAgICAgICAgICAgIHJlZi5zZXRSYW5nZSggdGhpcy5nZXRDZWxscyhyYW5nZSkgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIG9uSW5wdXQyICk7IC8vIHJlbW92ZSBjb2xvcnMuLi5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IEZvcm1hdHMuZGVmYXVsdC5jYWxsKGNlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNlbGxfZWRpdF9lbmRcIiwgKGV2OiBDdXN0b21FdmVudDxDZWxsPikgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LnRvZ2dsZShcImNlbGxfZWRpdFwiLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBldi5kZXRhaWw7XG5cbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIG9uSW5wdXQyKTsgLy8gdG8gYmUgc2FmZVxuICAgICAgICAgICAgY2VsbC50b2dnbGVBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgZmFsc2UpO1xuXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJsZWF2ZSBlZGl0XCIsIGNlbGwudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgbmV3IENlbGxMaXN0KHRoaXMsIFtjZWxsXSkuY29udGVudCA9IGNlbGwudGV4dENvbnRlbnQhO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgICAgICAgLy8gbGVhdmVcbiAgICAgICAgICAgIHRoaXMuI3NlbGVjdGlvbi5jbGVhcigpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGV2ID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgIT09IFwiVERcIilcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGVzLmNlbGxfZWRpdC5zdGF0ZSA9IG51bGw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKCB0aGlzLm5iUm93cyA+PSAxICYmIHRoaXMubmJDb2xzID49IDEpXG4gICAgICAgICAgICB0aGlzLmN1cnNvci5yZXBsYWNlQWxsKCB0aGlzLmdldFJhbmdlKFwiQTFcIikgKTtcbiAgICB9XG5cbiAgICBnZXRWaXNpYmxlQ2VsbChjOiBDZWxsfENlbGxMaXN0KTogQ2VsbCB7XG4gICAgICAgIGlmKGMgaW5zdGFuY2VvZiBDZWxsTGlzdClcbiAgICAgICAgICAgIGMgPSBjLmZpcnN0Q2VsbDtcblxuICAgICAgICByZXR1cm4gYy5jZWxsID8/IGM7XG4gICAgfVxuXG4gICAgY2VsbFBvcyhjZWxsOiBIVE1MVGFibGVDZWxsRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY2VsbFBvcyhjZWxsKTtcbiAgICB9XG5cbiAgICAjY2VsbFBvcyhjZWxsOiBIVE1MVGFibGVDZWxsRWxlbWVudCkge1xuXG4gICAgICAgIGlmKCBcInBvc1wiIGluIGNlbGwpXG4gICAgICAgICAgICByZXR1cm4gY2VsbC5wb3MgYXMgW251bWJlciwgbnVtYmVyXTtcblxuICAgICAgICBjb25zdCBjb2wgPSBbLi4uY2VsbC5wYXJlbnRFbGVtZW50IS5jaGlsZHJlbl0uZmluZEluZGV4KCBjID0+IGMgPT09IGNlbGwpO1xuICAgICAgICBjb25zdCByb3cgPSBbLi4uY2VsbC5wYXJlbnRFbGVtZW50IS5wYXJlbnRFbGVtZW50IS5jaGlsZHJlbl0uZmluZEluZGV4KCByID0+IHIgPT09IGNlbGwucGFyZW50RWxlbWVudCEpO1xuXG4gICAgICAgIHJldHVybiBbcm93LCBjb2xdIGFzIGNvbnN0O1xuICAgIH1cblxuICAgICN0Ym9keSE6IEhUTUxUYWJsZVNlY3Rpb25FbGVtZW50O1xuICAgIGdldCB0Ym9keSgpIHsgcmV0dXJuIHRoaXMuI3Rib2R5OyB9XG5cbiAgICByZXNpemUobmJyb3dzOiBudW1iZXIsIG5iY29sczogbnVtYmVyKSB7XG5cbiAgICAgICAgY29uc3QgY29sX2h0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBjb2xfaHRtbC5hcHBlbmQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJykgKTtcblxuICAgICAgICBjb25zdCB0Ym9keSA9IHRoaXMuI3Rib2R5O1xuICAgICAgICB0Ym9keS5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgICAgICBmb3IobGV0IGNvbCA9IDA7IGNvbCA8ICBuYmNvbHMgOyArK2NvbCkge1xuICAgICAgICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgICAgICAgdGgudGV4dENvbnRlbnQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgY29sKTtcbiAgICAgICAgICAgIGNvbF9odG1sLmFwcGVuZCh0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdGJvZHkuYXBwZW5kKGNvbF9odG1sKTtcblxuICAgICAgICBmb3IobGV0IHJvdyA9IDA7IHJvdyA8IG5icm93czsgKytyb3cpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd19odG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICAgICAgICAgIHRoLnRleHRDb250ZW50ID0gYCR7cm93KzF9YDtcbiAgICAgICAgICAgIHJvd19odG1sLmFwcGVuZCh0aCk7XG5cbiAgICAgICAgICAgIGZvcihsZXQgY29sID0gMDsgY29sIDwgIG5iY29scyA7ICsrY29sKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJykgYXMgQ2VsbDtcbiAgICAgICAgICAgICAgICAvL2NlbGwudG9nZ2xlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcbiAgICAgICAgICAgICAgICBjZWxsLmZvcm1hdCA9IEZvcm1hdHMuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICByb3dfaHRtbC5hcHBlbmQoIGNlbGwgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRib2R5LmFwcGVuZChyb3dfaHRtbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjaW5pdEdyaWQobmJyb3dzOiBudW1iZXIsIG5iY29sczogbnVtYmVyKSB7XG5cbiAgICAgICAgY29uc3QgaXNfcm8gPSB0aGlzLmF0dHJzLnJvID09PSBcInRydWVcIjtcblxuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgICAgIGNvbnN0IHRib2R5ICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XG4gICAgICAgIHRoaXMuI3Rib2R5ID0gdGJvZHk7XG5cbiAgICAgICAgY29uc3QgcmVzaXplT2JzID0gbmV3IFJlc2l6ZU9ic2VydmVyKCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhvc3QuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KCdyZXNpemUnKSApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzaXplT2JzLm9ic2VydmUoIHRoaXMuaG9zdCApO1xuXG4gICAgICAgIHRoaXMuI3Rib2R5LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuXG4gICAgICAgIHRoaXMucmVzaXplKG5icm93cywgbmJjb2xzKTtcblxuICAgICAgICB0YWJsZS5hcHBlbmQodGJvZHkpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKHRhYmxlKTtcbiAgICB9XG5cbiAgICBnZXRSYW5nZShmcm9tOiBDZWxsfHN0cmluZ3xyZWFkb25seVtudW1iZXIsbnVtYmVyXSwgdG86IENlbGx8c3RyaW5nfHJlYWRvbmx5W251bWJlcixudW1iZXJdID0gZnJvbSk6IENlbGxMaXN0IHtcblxuICAgICAgICAvLyBwcm9jZXNzIHJlZnMuLi5cbiAgICAgICAgaWYoIGZyb20gaW5zdGFuY2VvZiBIVE1MVGFibGVDZWxsRWxlbWVudClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJhbmdlKCB0aGlzLmNlbGxQb3MoZnJvbSksIHRvICk7XG4gICAgICAgIGlmKCB0byBpbnN0YW5jZW9mIEhUTUxUYWJsZUNlbGxFbGVtZW50KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZ2UoIGZyb20sIHRoaXMuY2VsbFBvcyh0bykgKTtcblxuICAgICAgICBpZiggdHlwZW9mIGZyb20gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGlmKCBmcm9tLmluY2x1ZGVzKFwiOlwiKSApXG4gICAgICAgICAgICAgICAgW2Zyb20sIHRvXSA9IGZyb20uc3BsaXQoJzonKTtcblxuICAgICAgICAgICAgZnJvbSA9IHRoaXMucmVmMnBvcyhmcm9tKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJhbmdlKCBmcm9tLCB0byApO1xuICAgICAgICB9XG4gICAgICAgIGlmKCB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSYW5nZSggZnJvbSwgdGhpcy5yZWYycG9zKHRvKSApO1xuXG4gICAgICAgIC8vIGdldCByYW5nZVxuXG4gICAgICAgIGxldCBiZWdfcm93ID0gZnJvbVswXSB8fCAxO1xuICAgICAgICBsZXQgYmVnX2NvbCA9IGZyb21bMV0gfHwgMTtcblxuICAgICAgICBsZXQgZW5kX3JvdyA9IGZyb21bMF0gPT09IDAgPyB0aGlzLm5iUm93cyA6IHRvWzBdO1xuICAgICAgICBsZXQgZW5kX2NvbCA9IGZyb21bMV0gPT09IDAgPyB0aGlzLm5iQ29scyA6IHRvWzFdO1xuXG4gICAgICAgIGlmKCBlbmRfcm93IDwgYmVnX3JvdyApXG4gICAgICAgICAgICBbYmVnX3JvdywgZW5kX3Jvd10gPSBbZW5kX3JvdywgYmVnX3Jvd107XG4gICAgICAgIGlmKCBlbmRfY29sIDwgYmVnX2NvbCApXG4gICAgICAgICAgICBbYmVnX2NvbCwgZW5kX2NvbF0gPSBbZW5kX2NvbCwgYmVnX2NvbF07XG5cbiAgICAgICAgY29uc3QgY2VsbHMgPSBuZXcgQXJyYXk8Q2VsbD4oIChlbmRfcm93IC0gYmVnX3JvdyArIDEpICogKGVuZF9jb2wgLSBiZWdfY29sICsgMSkgKTtcblxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgZm9yKGxldCBpID0gYmVnX3JvdzsgaSA8PSBlbmRfcm93OyArK2kgKVxuICAgICAgICAgICAgZm9yKGxldCBqID0gYmVnX2NvbDsgaiA8PSBlbmRfY29sOyArK2ogKVxuICAgICAgICAgICAgICAgIGNlbGxzW29mZnNldCsrXSA9IHRoaXMudGJvZHkuY2hpbGRyZW5baV0uY2hpbGRyZW5bal0gYXMgQ2VsbDtcblxuICAgICAgICByZXR1cm4gbmV3IENlbGxMaXN0KHRoaXMsIGNlbGxzKTtcbiAgICB9XG5cbiAgICBnZXRDZWxscyhjZWxsOiBzdHJpbmcpOiBDZWxsTGlzdDtcbiAgICBnZXRDZWxscyhyb3dfaWQ6IG51bWJlciwgY29sX2lkOiBudW1iZXIpOiBDZWxsTGlzdDtcbiAgICBnZXRDZWxscyhjZWxsX29yX3Jvd2lkOiBudW1iZXJ8c3RyaW5nLCBjb2xfaWQ/OiBudW1iZXIpIHtcblxuICAgICAgICBsZXQgcm93X2lkID0gY2VsbF9vcl9yb3dpZDtcbiAgICAgICAgaWYoIHR5cGVvZiBjZWxsX29yX3Jvd2lkID09PSBcInN0cmluZ1wiKSB7XG5cbiAgICAgICAgICAgIGNlbGxfb3Jfcm93aWQgPSBjZWxsX29yX3Jvd2lkLnJlcGxhY2VBbGwoJyQnLCAnJyk7XG5cbiAgICAgICAgICAgIGlmKCBjZWxsX29yX3Jvd2lkLmluY2x1ZGVzKCc6JykgKSB7Ly8gcmFuZ2VcblxuICAgICAgICAgICAgICAgIGxldCBbYmVnLCBlbmRdID0gY2VsbF9vcl9yb3dpZC5zcGxpdCgnOicpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYl9yb3dfaWQgPSArYmVnWzFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJfY29sX2lkID0gYmVnLmNoYXJDb2RlQXQoMCkgKyAxIC0gNjU7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBlX3Jvd19pZCA9ICtlbmRbMV07XG4gICAgICAgICAgICAgICAgY29uc3QgZV9jb2xfaWQgPSBlbmQuY2hhckNvZGVBdCgwKSArIDEgLSA2NTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gbmV3IEFycmF5KCAoZV9jb2xfaWQtYl9jb2xfaWQpICogKGVfcm93X2lkIC0gYl9yb3dfaWQpICk7XG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yKGxldCByID0gYl9yb3dfaWQ7IHIgPD0gIGVfcm93X2lkOyArK3IpXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgYyA9IGJfY29sX2lkOyBjIDw9ICBlX2NvbF9pZDsgKytjKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHNbb2Zmc2V0KytdID0gdGhpcy4jdGJvZHkuY2hpbGRyZW5bcl0uY2hpbGRyZW5bY10gYXMgQ2VsbDtcblxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ2VsbExpc3QodGhpcywgY2VsbHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB0aGlzIGlzIGEgZnVsbCBsaW5lLi4uXG4gICAgICAgICAgICBpZiggY2VsbF9vcl9yb3dpZFswXSA+PSAnMCcgJiYgY2VsbF9vcl9yb3dpZFswXSA8PSAnOScgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2VsbHMoYEEke2NlbGxfb3Jfcm93aWR9OiR7dGhpcy5wb3MycmVmKCtjZWxsX29yX3Jvd2lkLCB0aGlzLm5iQ29scyl9YCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYoIGNlbGxfb3Jfcm93aWRbY2VsbF9vcl9yb3dpZC5sZW5ndGgtMV0gPCAnMCcgfHwgY2VsbF9vcl9yb3dpZFtjZWxsX29yX3Jvd2lkLmxlbmd0aC0xXSA+ICc5JyApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oIGAke2NlbGxfb3Jfcm93aWR9MToke2NlbGxfb3Jfcm93aWR9JHt0aGlzLm5iUm93c31gICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2VsbHMoYCR7Y2VsbF9vcl9yb3dpZH0xOiR7Y2VsbF9vcl9yb3dpZH0ke3RoaXMubmJSb3dzfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByb3dfaWQgPSArY2VsbF9vcl9yb3dpZFsxXTtcbiAgICAgICAgICAgIGNvbF9pZCA9IGNlbGxfb3Jfcm93aWQuY2hhckNvZGVBdCgwKSArIDEgLSA2NTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLiN0Ym9keS5jaGlsZHJlblsrcm93X2lkXS5jaGlsZHJlbltjb2xfaWQhXSBhcyBDZWxsO1xuICAgICAgICByZXR1cm4gbmV3IENlbGxMaXN0KHRoaXMsIFtjZWxsXSk7XG4gICAgfVxuXG4gICAgcmVmMnBvcyhyZWY6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlcl0ge1xuICAgICAgICAvL1RPRE8uLi5cbiAgICAgICAgY29uc3Qgcm93ID0gK3JlZltyZWYubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnN0IGNvbCA9IHJlZi5jaGFyQ29kZUF0KDApIC0gNjUgKyAxO1xuXG4gICAgICAgIHJldHVybiBbcm93LCBjb2xdO1xuICAgIH1cbiAgICBwb3MycmVmKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gYCR7U3RyaW5nLmZyb21DaGFyQ29kZSg2NStjb2wtMSl9JHtyb3d9YDtcbiAgICB9XG4gICAgZ2V0IG5iUm93cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Rib2R5LmNoaWxkcmVuLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIGdldCBuYkNvbHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0Ym9keS5maXJzdEVsZW1lbnRDaGlsZCEuY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICAjaXNVcGRhdGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYoIHRoaXMuI2lzVXBkYXRpbmcgPT09IHRydWUgKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLiNpc1VwZGF0aW5nID0gdHJ1ZTtcblxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGw8Q2VsbD4oJ3RkJyk7XG4gICAgICAgICAgICBmb3IobGV0IGNlbGwgb2YgY2VsbHMpIHtcblxuICAgICAgICAgICAgICAgIGlmKCBjZWxsLnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBGb3JtdWxhICkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBjZWxsLnJhd0NvbnRlbnQuZXhlYyh0aGlzKTsgLy9UT0RPLi4uXG5cbiAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiBmYWN0b3JpemUuLi5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGU6IHN0cmluZyA9IHR5cGVvZiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSApXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiO1xuXG4gICAgICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSAoY2VsbCBhcyBhbnkpLmZvcm1hdCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCB0eXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaG9zdC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoJ3VwZGF0ZScpICk7XG4gICAgICAgICAgICB0aGlzLiNpc1VwZGF0aW5nID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0IGlzUk8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJzLnJvID09PSBcInRydWVcIjtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDZWxsTGlzdCBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcblxuICAgICNzaGVldDogQ2FsY1NoZWV0O1xuICAgICNjZWxsczogQ2VsbFtdO1xuICAgIGNvbnN0cnVjdG9yKHNoZWV0OiBDYWxjU2hlZXQsIGNlbGxzOiBDZWxsW10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy4jY2VsbHMgPSBjZWxscztcbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcbiAgICB9XG5cbiAgICBnZXQgcGxhZ2VfbmFtZSgpIHtcblxuICAgICAgICBpZiggdGhpcy4jY2VsbHMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGlmKCB0aGlzLiNjZWxscy5sZW5ndGggPT09IDEgKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuI3NoZWV0LnBvczJyZWYoIC4uLnRoaXMuI3NoZWV0LmNlbGxQb3ModGhpcy4jY2VsbHNbMF0pICk7XG5cbiAgICAgICAgbGV0IGNlbGxzID0gdGhpcy4jY2VsbHMubWFwKCBjID0+IHRoaXMuI3NoZWV0LmNlbGxQb3MoYykgKS5zb3J0KCAoYSxiKSA9PiB7XG4gICAgICAgICAgICBpZiggYVswXSAhPT0gYlswXSApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFbMF0gLSBiWzBdO1xuICAgICAgICAgICAgcmV0dXJuIGFbMV0gLSBiWzFdO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbWluID0gY2VsbHNbMF07XG4gICAgICAgIGxldCBtYXggPSBjZWxsc1tjZWxscy5sZW5ndGggLSAxXTtcblxuICAgICAgICBsZXQgbmJfY29scyA9IG1heFsxXSAtIG1pblsxXSArIDE7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgaWYoIGNlbGxzW2ldWzBdICE9PSBNYXRoLmZsb29yKGkvbmJfY29scykrbWluWzBdICYmIGNlbGxzW2ldWzFdICE9PSAoaSVuYl9jb2xzKSsgbWluWzFdIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgcmV0dXJuIGAke3RoaXMuI3NoZWV0LnBvczJyZWYoLi4ubWluKX06JHt0aGlzLiNzaGVldC5wb3MycmVmKC4uLm1heCl9YDtcbiAgICB9XG5cbiAgICBnZXQgY2VsbHMoKTogQ2VsbFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NlbGxzO1xuICAgIH1cbiAgICBnZXQgc2hlZXQoKTogQ2FsY1NoZWV0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3NoZWV0O1xuICAgIH1cblxuICAgIHRvZ2dsZUZvcm1hdChuYW1lOiBzdHJpbmd8KCh2OiBhbnksIHByZWM6IG51bWJlcnxudWxsKSA9PiBzdHJpbmcpICkge1xuICAgICAgICBsZXQgZiA9IEZvcm1hdC5leHRyYWN0Rm9ybWF0KHRoaXMpO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgbmFtZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cbiAgICAgICAgICAgIGxldCBpc0Zvcm1hdCA9IGYuZ2V0UHJvcGVydHkoXCJmb3JtYXRcIikgPT09IG5hbWU7XG5cbiAgICAgICAgICAgIHRoaXMuZm9ybWF0KHtmb3JtYXQ6IGlzRm9ybWF0ID8gbnVsbCA6IG5hbWUgfSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZm9ybWF0KHtbbmFtZV06IGYuZ2V0UHJvcGVydHkobmFtZSkgIT09IHRydWV9KTtcbiAgICB9XG5cbiAgICBmb3JtYXQoLi4uZjogKCggKHY6IGFueSwgcHJlYzogbnVtYmVyfG51bGwpID0+IHN0cmluZyApfHN0cmluZ3xGb3JtYXR8UmVjb3JkPHN0cmluZywgYW55PilbXSkge1xuXG4gICAgICAgIGlmKCBmLmxlbmd0aCA+IDEgKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vVE9ETy4uLi5cbiAgICAgICAgICAgIGYgPSBPYmplY3QuZnJvbUVudHJpZXMoIGYubWFwKCBlID0+IFtlLCB0cnVlXSApICk7XG5cbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBmID0gZlswXTtcblxuICAgICAgICBpZiggdHlwZW9mIGYgPT09IFwiZnVuY3Rpb25cIiApXG4gICAgICAgICAgICBmID0ge1wiZm9ybWF0XCI6IGZ9O1xuXG4gICAgICAgIGlmKHR5cGVvZiBmID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIGYgPSB7W2ZdOiB0cnVlfTtcblxuICAgICAgICBpZiggISAoZiBpbnN0YW5jZW9mIEZvcm1hdCkgKVxuICAgICAgICAgICAgZiA9IG5ldyBGb3JtYXQoZik7XG5cbiAgICAgICAgZi5hcHBseVRvKHRoaXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldCBjb250ZW50KCk6IChSYXdDb250ZW50VHlwZSlbXSB7XG4gICAgICAgIGxldCBjb250ZW50ID0gbmV3IEFycmF5KHRoaXMuI2NlbGxzLmxlbmd0aCk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLiNjZWxscy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgIGNvbnRlbnRbaV0gPSB0aGlzLiNjZWxsc1tpXS5yYXdDb250ZW50ITtcblxuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICB9XG5cbiAgICBkZWxldGVGb3JtYXQoKSB7XG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiB0aGlzLiNjZWxscykgLy9UT0RPIGFkZCBob2MgZm9ybWF0Li4uXG4gICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9ICcnO1xuICAgIH1cblxuICAgIGRlbGV0ZUNvbnRlbnQoKSB7XG5cbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIHRoaXMuI2NlbGxzKSB7XG4gICAgICAgICAgICBjZWxsLnJhd0NvbnRlbnQgPSB1bmRlZmluZWQgYXMgYW55O1xuICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10eXBlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzaGVldC51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBzZXQgY29udGVudChjb250ZW50OiBDZWxsfFJhd0NvbnRlbnRUeXBlfChSYXdDb250ZW50VHlwZXxDZWxsKVtdKSB7XG5cbiAgICAgICAgaWYoIEFycmF5LmlzQXJyYXkoY29udGVudCkgKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICBuZXcgQ2VsbExpc3QodGhpcy4jc2hlZXQsIFt0aGlzLiNjZWxsc1tpXV0gKS5jb250ZW50ID0gY29udGVudFtpXTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuXG4gICAgICAgICAgICBsZXQgcmF3ID0gY29udGVudDtcbiAgICAgICAgICAgIGNvbnRlbnQgPSBwYXJzZUlucHV0KGNvbnRlbnQpO1xuICAgICAgICAgICAgaWYoIHR5cGVvZiBjb250ZW50ID09PSBcIm51bWJlclwiICYmIHJhd1tyYXcubGVuZ3RoLTFdID09PSBcIiVcIikge1xuICAgICAgICAgICAgICAgIGxldCBmID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYoICEgZi5oYXNQcm9wZXJ0eShcImZvcm1hdFwiKSApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybWF0KEZvcm1hdHMucG91cmNlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXG5cbiAgICAgICAgbGV0IHJhd192YWwgPSBjb250ZW50IGluc3RhbmNlb2YgSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPyBjb250ZW50LnJhd0NvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjb250ZW50O1xuXG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiB0aGlzLiNjZWxscykge1xuXG4gICAgICAgICAgICBpZihjb250ZW50IGluc3RhbmNlb2YgSFRNTFRhYmxlQ2VsbEVsZW1lbnQgJiYgY29udGVudC5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSApIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCB2ID0gY29udGVudC5yYXdDb250ZW50O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZHN0ID0gdGhpcy4jc2hlZXQuY2VsbFBvcyggY2VsbCApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IHRoaXMuI3NoZWV0LmNlbGxQb3MoY29udGVudClcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBbIGRzdFswXSAtIHNyY1swXSwgZHN0WzFdIC0gc3JjWzFdXSBhcyBjb25zdDtcblxuICAgICAgICAgICAgICAgIHJhd192YWwgPSB2LnJlbGF0aXZlVG8oIHRoaXMuI3NoZWV0LCAuLi5kaWZmICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNlbGwucmF3Q29udGVudCA9IHJhd192YWw7XG5cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHJhd192YWw7XG4gICAgICAgICAgICBpZiggcmF3X3ZhbCBpbnN0YW5jZW9mIEZvcm11bGEpXG4gICAgICAgICAgICAgICAgdmFsdWUgPSByYXdfdmFsLmV4ZWModGhpcy4jc2hlZXQpOyAvL1RPRE8uLi5cblxuICAgICAgICAgICAgbGV0IHR5cGU6IHN0cmluZyA9IHR5cGVvZiB2YWx1ZTtcbiAgICAgICAgICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgKSB7XG4gICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIjtcbiAgICAgICAgICAgICAgICBjZWxsLmZvcm1hdCA9IEZvcm1hdHMuZGF0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IChjZWxsIGFzIGFueSkuZm9ybWF0KHZhbHVlKTtcbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCB0eXBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NoZWV0LnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHNldFJPKGlzX3JvOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBmb3IobGV0IGNlbGwgb2YgdGhpcy4jY2VsbHMpXG4gICAgICAgICAgICBjZWxsLmlzX3JvID0gaXNfcm87XG4gICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjZWxscy5sZW5ndGg7XG4gICAgfVxuXG4gICAgaGFzKC4uLmNlbGxzOiBDZWxsW10pIHtcbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIGNlbGxzKVxuICAgICAgICAgICAgaWYoICEgdGhpcy4jY2VsbHMuaW5jbHVkZXMoY2VsbCkgKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmVtb3ZlKC4uLmNlbGxzOiBDZWxsW10pIHtcbiAgICAgICAgdGhpcy4jY2VsbHMgPSB0aGlzLiNjZWxscy5maWx0ZXIoIGMgPT4gISBjZWxscy5pbmNsdWRlcyhjKSApO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSApO1xuICAgIH1cblxuICAgIHJlcGxhY2VBbGwoLi4uY2VsbHM6IENlbGxbXXxbQ2VsbExpc3RdKSB7XG4gICAgICAgIHRoaXMuI2NlbGxzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuYWRkKC4uLmNlbGxzKTtcbiAgICB9XG5cbiAgICBhZGQoLi4uY2VsbHM6IENlbGxbXXxbQ2VsbExpc3RdKSB7XG5cbiAgICAgICAgaWYoIGNlbGxzWzBdIGluc3RhbmNlb2YgQ2VsbExpc3QpXG4gICAgICAgICAgICBjZWxscyA9IGNlbGxzWzBdLmNlbGxzO1xuXG4gICAgICAgIHRoaXMuI2NlbGxzLnB1c2goLi4uY2VsbHMgYXMgQ2VsbFtdKTtcblxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSApO1xuICAgIH1cblxuICAgIGdldCBmaXJzdENlbGwoKSB7XG4gICAgICAgIGlmKCB0aGlzLiNjZWxscy5sZW5ndGggPCAxKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9wZVwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NlbGxzWzBdO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLiNjZWxscy5sZW5ndGggPSAwO1xuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpICk7XG4gICAgfVxuXG5cbiAgICBkZWVwQ2xvbmUoKSB7XG5cbiAgICAgICAgbGV0IGNlbGxzID0gdGhpcy4jY2VsbHMubWFwKCBjID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNsb25lID0gYy5jbG9uZU5vZGUodHJ1ZSkgYXMgQ2VsbDtcblxuICAgICAgICAgICAgY2xvbmUucmF3Q29udGVudCA9IGMucmF3Q29udGVudDtcbiAgICAgICAgICAgIGNsb25lLmZvcm1hdCAgICAgPSBjLmZvcm1hdDtcbiAgICAgICAgICAgIChjbG9uZSBhcyBhbnkpLnBvcyAgICAgICAgPSB0aGlzLiNzaGVldC5jZWxsUG9zKGMpO1xuXG4gICAgICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIG5ldyBDZWxsTGlzdCh0aGlzLiNzaGVldCwgY2VsbHMpO1xuICAgIH1cbn1cblxuLy9UT0RPLi4uXG5pbXBvcnQgXCIuL2Zvcm11bGFfZWRpdG9yXCI7XG5pbXBvcnQgXCIuL3BsYWdlX2VkaXRvclwiO1xuaW1wb3J0IHsgRm9ybXVsYSwgcGFyc2VfZm9ybXVsYSB9IGZyb20gXCIuL2Zvcm11bGFfcGFyc2VyXCI7XG5pbXBvcnQgeyBQbGFnZVNlbGVjdG9yIH0gZnJvbSBcIi4vcGxhZ2Vfc2VsZWN0b3JcIjtcbmltcG9ydCB7IEZvcm1hdCwgRm9ybWF0TWFuYWdlciwgRm9ybWF0cyB9IGZyb20gXCIuL2Zvcm1hdFwiO1xuaW1wb3J0IHsgRm9ybXVsYVJlZiwgUmFuZ2VPdmVybGF5LCBSZWNvcHlIYW5kbGUgfSBmcm9tIFwiLi9SYW5nZU92ZXJsYXlcIjtcblxuTElTUy5kZWZpbmUoJ2NhbGMtc2hlZXQnLCBDYWxjU2hlZXQpOyIsImV4cG9ydCBkZWZhdWx0IFtcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIlIgMS0wMSBUYWJsZXVyIGV0IFJlcG9ydGluZ1wiLFxuICAgICAgICBzbmFtZTogXCJSMS0wMSBUYWJsZXVyXCIsXG4gICAgICAgIHBhdGggOiBcIlIxLTAxXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJDTVwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiQ01cIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIkNNMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIkNNMlwiXG4gICAgICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiVFBcIixcbiAgICAgICAgICAgICAgICBwYXRoOiBcIlRQXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgXCJUUDFcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lIDogXCJSIDEtMDIgQmFzZXMgZGUgRG9ubsOpZXMgUmVsYXRpb25uZWxsZXMgMVwiLFxuICAgICAgICBzbmFtZTogXCJSMS0wMiBCRFIxXCIsXG4gICAgICAgIHBhdGggOiBcIlIxLTAyXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBcIkNNXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJUUFwiICxcbiAgICAgICAgICAgICAgICBwYXRoIDogXCJUUFwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiVFAxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFAyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFAzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFA0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFA1XCJcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG5dO1xuXG5leHBvcnQgY29uc3Qgcm9vdF9wYXRoID0gW1wibG9jYWxob3N0XCIsIFwiMTI3LjAuMC4xXCJdLmluY2x1ZGVzKGxvY2F0aW9uLmhvc3RuYW1lKSA/IFwiL2Rpc3QvZGV2L3BhZ2VzL1wiIDogXCIvQ291cnMvZGlzdC9kZXYvcGFnZXMvXCI7IiwiXG5pbXBvcnQgcGFnZXMsIHtyb290X3BhdGh9IGZyb20gXCIuL2NvbnRlbnRcIjtcblxuLypcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmVwcmludCcsICgpID0+IHtcbiAgLy8uLi5cbn0pO1xuKi9cblxuLy9UT0RPOiBsaW5rcy4uLlxuY29uc3QgbWFpbiAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikhO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKSE7XG5cbmNvbnN0IHRpdGxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFwiaDEsIGgyLCBoMywgaDRcIik7XG5cbnR5cGUgTm9kZSA9IHtcbiAgICBodG1sICAgIDogSFRNTEVsZW1lbnQsXG4gICAgbGV2ZWwgICA6IG51bWJlcixcbiAgICBwYXJlbnQgIDogbnVsbHxOb2RlLFxuICAgIGNoaWxkcmVuOiBOb2RlW11cbn07XG5cbmNvbnN0IGh0cmVlOiBOb2RlID0ge1xuICAgIGh0bWwgICAgOiBtYWluLFxuICAgIGxldmVsICAgOiAwLFxuICAgIHBhcmVudCAgOiBudWxsLFxuICAgIGNoaWxkcmVuOiBbXSxcbn07XG5sZXQgaHRyZWVfY3Vyc29yID0gaHRyZWU7XG5mb3IobGV0IHRpdGxlIG9mIHRpdGxlcykge1xuICAgIGNvbnN0IGxldmVsID0gK3RpdGxlLnRhZ05hbWUuc2xpY2UoMSk7XG4gICAgXG4gICAgd2hpbGUoIGxldmVsIDw9IGh0cmVlX2N1cnNvci5sZXZlbCApXG4gICAgICAgIGh0cmVlX2N1cnNvciA9IGh0cmVlX2N1cnNvci5wYXJlbnQhO1xuXG4gICAgY29uc3QgZWxlbTogTm9kZSA9IHtcbiAgICAgICAgaHRtbDogdGl0bGUsXG4gICAgICAgIGxldmVsLFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgIHBhcmVudDogaHRyZWVfY3Vyc29yXG4gICAgfTtcblxuXG4gICAgaHRyZWVfY3Vyc29yLmNoaWxkcmVuLnB1c2goZWxlbSk7XG5cbiAgICBodHJlZV9jdXJzb3IgPSBlbGVtO1xufVxuXG5mdW5jdGlvbiBzZWFyY2hDdXJIZWFkZXIoaHRyZWU6IE5vZGUsIHBvc2l0aW9uOiBudW1iZXIpOiBudWxsIHwgTm9kZSB7XG5cbiAgICBjb25zdCBoZWFkZXJzID0gaHRyZWUuY2hpbGRyZW47XG5cbiAgICBmb3IobGV0IGkgPSBoZWFkZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKVxuICAgICAgICBpZiggaGVhZGVyc1tpXS5odG1sLm9mZnNldFRvcCA8PSBwb3NpdGlvbiArIDMyIClcbiAgICAgICAgICAgIHJldHVybiBzZWFyY2hDdXJIZWFkZXIoaGVhZGVyc1tpXSwgcG9zaXRpb24pID8/IGhlYWRlcnNbaV07XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuY29uc3QgaGlkID0gW1xuICAgIFtdLFxuICAgIFtcIklcIiwgXCJJSVwiLCBcIklJSVwiLCBcIklWXCJdLFxuICAgIFtcIjFcIiwgXCIyXCIsXCIzXCIsXCI1XCIsXCI2XCIsXCI3XCIsXCI4XCIsXCI5XCJdLFxuICAgIFtcImFcIiwgXCJiXCIsXCJjXCIsXCJkXCIsXCJlXCIsXCJmXCIsXCJnXCIsXCJoXCJdLFxuXVxuXG5mdW5jdGlvbiBnZXRUaXRsZVByZWZpeChzOiBOb2RlKSB7XG5cbiAgICBpZiggcy5sZXZlbCA+PSBoaWQubGVuZ3RoIClcbiAgICAgICAgcmV0dXJuIFwiXCI7XG5cbiAgICBjb25zdCBpZHggPSBzLnBhcmVudCEuY2hpbGRyZW4uaW5kZXhPZihzKTtcblxuICAgIGNvbnN0IG51bSA9IGhpZFtzLmxldmVsXVtpZHhdO1xuXG4gICAgcmV0dXJuIGAke251bX0uIGA7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTWVudShub2RlczogTm9kZVtdKSB7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuXG4gICAgbWVudS5hcHBlbmQoIC4uLiBub2Rlcy5tYXAoIChzLGlkeCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGl0ZW0udGV4dENvbnRlbnQ9IGAke2dldFRpdGxlUHJlZml4KHMpfSR7cy5odG1sLnRleHRDb250ZW50fWA7XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBgIyR7cy5odG1sLmlkfWApO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9KSApO1xuXG4gICAgcmV0dXJuIG1lbnU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUhlYWRlcigpIHtcblxuICAgIGNvbnN0IGxhc3QgPSBzZWFyY2hDdXJIZWFkZXIoIGh0cmVlLCBtYWluLnNjcm9sbFRvcCkhO1xuXG4gICAgbGV0IGhlYWRlcnMgPSBbXTtcbiAgICBsZXQgY3Vyc29yICA9IGxhc3Q7XG5cbiAgICB3aGlsZShjdXJzb3IuaHRtbCAhPT0gbWFpbikge1xuICAgICAgICBoZWFkZXJzLnB1c2goY3Vyc29yKTtcbiAgICAgICAgY3Vyc29yID0gY3Vyc29yLnBhcmVudCE7XG4gICAgfVxuXG4gICAgY29uc3QgaHRtbCA9IGhlYWRlcnMucmV2ZXJzZSgpLm1hcCggKGhub2RlLGkpID0+IHtcblxuICAgICAgICBjb25zdCBoID0gaG5vZGUuaHRtbDtcbiAgICAgICAgY29uc3QgaF9odG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gYCR7Z2V0VGl0bGVQcmVmaXgoaG5vZGUpfSR7aC50ZXh0Q29udGVudH1gO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGAjJHtoLmlkfWApO1xuXG4gICAgICAgIGNvbnN0IG1lbnUgPSBidWlsZE1lbnUoaG5vZGUucGFyZW50IS5jaGlsZHJlbik7XG4gICAgICAgIGhfaHRtbC5hcHBlbmQobGluaywgbWVudSk7XG5cbiAgICAgICAgcmV0dXJuIGhfaHRtbDtcbiAgICB9KTtcblxuICAgIGlmKCBsYXN0LmNoaWxkcmVuLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBjb25zdCBlbXB0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgICAgIGVtcHR5LmFwcGVuZCggYnVpbGRNZW51KGxhc3QuY2hpbGRyZW4pICk7XG5cbiAgICAgICAgaHRtbC5wdXNoKGVtcHR5KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VfcGFnZV9ocmVmKHBhdGhwcmVmaXg6IHN0cmluZywgcGF0aDogc3RyaW5nLCBkZXNjOiBhbnkpIHtcblxuICAgICAgICBsZXQgaHJlZiA9IGAke3BhdGhwcmVmaXh9JHtwYXRofS9gO1xuXG4gICAgICAgIHdoaWxlKGRlc2MuY2hpbGRyZW4/Lmxlbmd0aCkge1xuICAgICAgICAgICAgZGVzYyA9IGRlc2MuY2hpbGRyZW5bMF07XG4gICAgICAgICAgICBocmVmICs9IGAke2Rlc2MucGF0aCA/PyBkZXNjfS9gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGhyZWY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZV9wYWdlX21lbnUocGF0aHByZWZpeDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHBhZ2VzOiBhbnkpIHtcbiAgICAgICAgY29uc3QgZGVzYyA9IHBhZ2VzLmZpbmQoIChwYWdlOiBhbnkpID0+IHBhZ2UgPT09IHBhdGggfHwgcGFnZS5wYXRoID09PSBwYXRoICkhO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gZGVzYy5zbmFtZSA/PyBkZXNjLm5hbWUgPz8gZGVzYztcbiAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgbWFrZV9wYWdlX2hyZWYocGF0aHByZWZpeCwgcGF0aCwgZGVzYykgKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgICBcbiAgICAgICAgICAgIG1lbnUuYXBwZW5kKCAuLi4gcGFnZXMubWFwKCAocGFnZTphbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudD0gcGFnZS5uYW1lID8/IHBhZ2U7XG4gICAgICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIG1ha2VfcGFnZV9ocmVmKHBhdGhwcmVmaXgsIHBhZ2UucGF0aD8/cGFnZSwgcGFnZSkgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH0pICk7XG4gICAgXG4gICAgICAgICAgICBodG1sLmFwcGVuZChsaW5rLCBtZW51KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICBcbiAgICBsZXQgY3VycGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zbGljZShyb290X3BhdGgubGVuZ3RoKS5zcGxpdCgnLycpO1xuXG4gICAgY29uc3QgbW9kdWxlX2h0bWwgPSBtYWtlX3BhZ2VfbWVudShyb290X3BhdGgsIGN1cnBhZ2VbMF0sIHBhZ2VzKTtcblxuICAgIGNvbnN0IGRlc2MgPSBwYWdlcy5maW5kKCAocGFnZTogYW55KSA9PiBwYWdlLnBhdGggPT09IGN1cnBhZ2VbMF0gKSE7XG4gICAgY29uc3QgdHlwZV9odG1sICAgPSBtYWtlX3BhZ2VfbWVudShyb290X3BhdGggKyBjdXJwYWdlWzBdICsgXCIvXCIsIGN1cnBhZ2VbMV0sIGRlc2MuY2hpbGRyZW4pO1xuXG4gICAgY29uc3QgZGVzY190eXBlID0gZGVzYy5jaGlsZHJlbi5maW5kKCAocGFnZTogYW55KSA9PiAocGFnZT8ucGF0aCA/PyBwYWdlKSA9PT0gY3VycGFnZVsxXSApITtcbiAgICBpZiggdHlwZW9mIGRlc2NfdHlwZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAvLyB0aXRsZSBudW1cbiAgICAgICAgY29uc3QgZGVzYzJfaWR4ID0gZGVzY190eXBlLmNoaWxkcmVuLmZpbmRJbmRleCggKHBhZ2U6IGFueSkgPT4gcGFnZT8ucGF0aCA/PyBwYWdlID09PSBjdXJwYWdlWzJdICkhO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1oZWFkZXJfc3RhcnRfaWRcIiwgYCR7ZGVzYzJfaWR4fWApO1xuICAgICAgICAvLyBtZW51XG4gICAgICAgIGNvbnN0IHNlc3Npb25faHRtbCAgID0gbWFrZV9wYWdlX21lbnUocm9vdF9wYXRoICsgY3VycGFnZVswXSArIFwiL1wiKyBjdXJwYWdlWzFdICsgXCIvXCIsIGN1cnBhZ2VbMl0sIGRlc2NfdHlwZS5jaGlsZHJlbik7XG4gICAgICAgIGh0bWxbMF0gPSBzZXNzaW9uX2h0bWw7XG4gICAgfVxuXG4gICAgaGVhZGVyLnJlcGxhY2VDaGlsZHJlbihtb2R1bGVfaHRtbCwgdHlwZV9odG1sLCAuLi5odG1sKTtcbn1cblxubWFpbi5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGVIZWFkZXIpO1xudXBkYXRlSGVhZGVyKCk7IiwiLy9odHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80OTQxNDMvY3JlYXRpbmctYS1uZXctZG9tLWVsZW1lbnQtZnJvbS1hbi1odG1sLXN0cmluZy11c2luZy1idWlsdC1pbi1kb20tbWV0aG9kcy1vci1wcm9cbmV4cG9ydCBmdW5jdGlvbiBzdHIyaHRtbDxUIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KGh0bWw6IHN0cmluZyk6IFQge1xuICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgaHRtbCA9IGh0bWwudHJpbSgpOyAvLyBOZXZlciByZXR1cm4gYSB0ZXh0IG5vZGUgb2Ygd2hpdGVzcGFjZSBhcyB0aGUgcmVzdWx0XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZCEgYXMgVDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cjJERihodG1sOiBzdHJpbmcpOiBEb2N1bWVudEZyYWdtZW50IHtcbiAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIGh0bWwgPSBodG1sLnRyaW0oKTsgLy8gTmV2ZXIgcmV0dXJuIGEgdGV4dCBub2RlIG9mIHdoaXRlc3BhY2UgYXMgdGhlIHJlc3VsdFxuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQ7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsInZhciB3ZWJwYWNrUXVldWVzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBxdWV1ZXNcIikgOiBcIl9fd2VicGFja19xdWV1ZXNfX1wiO1xudmFyIHdlYnBhY2tFeHBvcnRzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBleHBvcnRzXCIpIDogXCJfX3dlYnBhY2tfZXhwb3J0c19fXCI7XG52YXIgd2VicGFja0Vycm9yID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBlcnJvclwiKSA6IFwiX193ZWJwYWNrX2Vycm9yX19cIjtcbnZhciByZXNvbHZlUXVldWUgPSAocXVldWUpID0+IHtcblx0aWYocXVldWUgJiYgcXVldWUuZCA8IDEpIHtcblx0XHRxdWV1ZS5kID0gMTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSkpO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tID8gZm4ucisrIDogZm4oKSkpO1xuXHR9XG59XG52YXIgd3JhcERlcHMgPSAoZGVwcykgPT4gKGRlcHMubWFwKChkZXApID0+IHtcblx0aWYoZGVwICE9PSBudWxsICYmIHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpIHtcblx0XHRpZihkZXBbd2VicGFja1F1ZXVlc10pIHJldHVybiBkZXA7XG5cdFx0aWYoZGVwLnRoZW4pIHtcblx0XHRcdHZhciBxdWV1ZSA9IFtdO1xuXHRcdFx0cXVldWUuZCA9IDA7XG5cdFx0XHRkZXAudGhlbigocikgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0V4cG9ydHNdID0gcjtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0sIChlKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXJyb3JdID0gZTtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0pO1xuXHRcdFx0dmFyIG9iaiA9IHt9O1xuXHRcdFx0b2JqW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAoZm4ocXVldWUpKTtcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHR9XG5cdHZhciByZXQgPSB7fTtcblx0cmV0W3dlYnBhY2tRdWV1ZXNdID0geCA9PiB7fTtcblx0cmV0W3dlYnBhY2tFeHBvcnRzXSA9IGRlcDtcblx0cmV0dXJuIHJldDtcbn0pKTtcbl9fd2VicGFja19yZXF1aXJlX18uYSA9IChtb2R1bGUsIGJvZHksIGhhc0F3YWl0KSA9PiB7XG5cdHZhciBxdWV1ZTtcblx0aGFzQXdhaXQgJiYgKChxdWV1ZSA9IFtdKS5kID0gLTEpO1xuXHR2YXIgZGVwUXVldWVzID0gbmV3IFNldCgpO1xuXHR2YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuXHR2YXIgY3VycmVudERlcHM7XG5cdHZhciBvdXRlclJlc29sdmU7XG5cdHZhciByZWplY3Q7XG5cdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlaikgPT4ge1xuXHRcdHJlamVjdCA9IHJlajtcblx0XHRvdXRlclJlc29sdmUgPSByZXNvbHZlO1xuXHR9KTtcblx0cHJvbWlzZVt3ZWJwYWNrRXhwb3J0c10gPSBleHBvcnRzO1xuXHRwcm9taXNlW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAocXVldWUgJiYgZm4ocXVldWUpLCBkZXBRdWV1ZXMuZm9yRWFjaChmbiksIHByb21pc2VbXCJjYXRjaFwiXSh4ID0+IHt9KSk7XG5cdG1vZHVsZS5leHBvcnRzID0gcHJvbWlzZTtcblx0Ym9keSgoZGVwcykgPT4ge1xuXHRcdGN1cnJlbnREZXBzID0gd3JhcERlcHMoZGVwcyk7XG5cdFx0dmFyIGZuO1xuXHRcdHZhciBnZXRSZXN1bHQgPSAoKSA9PiAoY3VycmVudERlcHMubWFwKChkKSA9PiB7XG5cdFx0XHRpZihkW3dlYnBhY2tFcnJvcl0pIHRocm93IGRbd2VicGFja0Vycm9yXTtcblx0XHRcdHJldHVybiBkW3dlYnBhY2tFeHBvcnRzXTtcblx0XHR9KSlcblx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRmbiA9ICgpID0+IChyZXNvbHZlKGdldFJlc3VsdCkpO1xuXHRcdFx0Zm4uciA9IDA7XG5cdFx0XHR2YXIgZm5RdWV1ZSA9IChxKSA9PiAocSAhPT0gcXVldWUgJiYgIWRlcFF1ZXVlcy5oYXMocSkgJiYgKGRlcFF1ZXVlcy5hZGQocSksIHEgJiYgIXEuZCAmJiAoZm4ucisrLCBxLnB1c2goZm4pKSkpO1xuXHRcdFx0Y3VycmVudERlcHMubWFwKChkZXApID0+IChkZXBbd2VicGFja1F1ZXVlc10oZm5RdWV1ZSkpKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZm4uciA/IHByb21pc2UgOiBnZXRSZXN1bHQoKTtcblx0fSwgKGVycikgPT4gKChlcnIgPyByZWplY3QocHJvbWlzZVt3ZWJwYWNrRXJyb3JdID0gZXJyKSA6IG91dGVyUmVzb2x2ZShleHBvcnRzKSksIHJlc29sdmVRdWV1ZShxdWV1ZSkpKTtcblx0cXVldWUgJiYgcXVldWUuZCA8IDAgJiYgKHF1ZXVlLmQgPSAwKTtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdtb2R1bGUnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTEvaW5kZXgudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00xL2luZGV4LmNzc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMS9pbmRleC5tZFwiKTtcbiIsIiJdLCJuYW1lcyI6WyJTaGFkb3dDZmciLCJfX2NzdHJfaG9zdCIsIkNBTl9IQVZFX1NIQURPVyIsIl9jYW5IYXNTaGFkb3ciLCJ0YWciLCJpbmNsdWRlcyIsIl9lbGVtZW50MnRhZ25hbWUiLCJMSVNTIiwiZXh0ZW5kcyIsInBfZXh0ZW5kcyIsImhvc3QiLCJwX2hvc3QiLCJkZXBlbmRlbmNpZXMiLCJwX2RlcHMiLCJhdHRyaWJ1dGVzIiwicF9hdHRycyIsInBhcmFtcyIsImNvbnRlbnQiLCJjc3MiLCJzaGFkb3ciLCJwX3NoYWRvdyIsIkhUTUxFbGVtZW50IiwiX2V4dGVuZHMiLCJPYmplY3QiLCJjYW5IYXNTaGFkb3ciLCJFcnJvciIsInVuZGVmaW5lZCIsInB1c2giLCJIVE1MVGVtcGxhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwidHJpbSIsIlJlc3BvbnNlIiwidGV4dCIsIkxJU1NCYXNlIiwiUGFyYW1ldGVycyIsInN0eWxlc2hlZXRzIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiZmV0Y2hfY3NzIiwiQ1NTU3R5bGVTaGVldCIsIkhUTUxTdHlsZUVsZW1lbnQiLCJzaGVldCIsInN0eWxlIiwicmVwbGFjZSIsIm1hcCIsImlkeCIsImNvbnN0cnVjdG9yIiwiYXR0cnMiLCJzZXRBdHRyRGVmYXVsdCIsImF0dHIiLCJ2YWx1ZSIsIm9uQXR0ckNoYW5nZWQiLCJfbmFtZSIsIl9vbGRWYWx1ZSIsIl9uZXdWYWx1ZSIsImlzSW5ET00iLCJvbkRPTUNvbm5lY3RlZCIsIm9uRE9NRGlzY29ubmVjdGVkIiwiZXh0ZW5kc0xJU1MiLCJMaXNzIiwicGFyYW1ldGVycyIsImFzc2lnbiIsIkV4dGVuZGVkTElTUyIsInQiLCJpZCIsImJ1aWxkTElTU0hvc3QiLCJfcGFyYW1zIiwiYWxyZWFkeURlY2xhcmVkQ1NTIiwiU2V0IiwiR0VUIiwiU3ltYm9sIiwiU0VUIiwicHJvcGVydGllcyIsImZyb21FbnRyaWVzIiwibiIsImVudW1lcmFibGUiLCJnZXQiLCJzZXQiLCJBdHRyaWJ1dGVzIiwibmFtZSIsImRhdGEiLCJkZWZhdWx0cyIsInNldHRlciIsImRlZmluZVByb3BlcnRpZXMiLCJMSVNTSG9zdEJhc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsImlzSW5pdCIsImluaXRpYWxpemUiLCJhcGkiLCJpbml0IiwiTElTU1N5bmMiLCJkaXNjb25uZWN0ZWRDYWxsYmFjayIsImNvbm5lY3RlZENhbGxiYWNrIiwiY3VzdG9tRWxlbWVudHMiLCJ1cGdyYWRlIiwiYXR0YWNoU2hhZG93IiwibW9kZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkNsaWNrRXZlbnQiLCJvYnMiLCJnZXRBdHRyaWJ1dGUiLCJhZG9wdGVkU3R5bGVTaGVldHMiLCJzaGFyZWRDU1MiLCJjc3NzZWxlY3RvciIsIkNTU1NlbGVjdG9yIiwiaGFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaHRtbF9zdHlsZXNoZWV0cyIsInJ1bGUiLCJjc3NSdWxlcyIsImNzc1RleHQiLCJoZWFkIiwiYXBwZW5kIiwiYWRkIiwidGVtcGxhdGVfZWxlbSIsInN0ciIsIl8iLCJtYXRjaCIsImNoaWxkTm9kZXMiLCJvYmoiLCJoYXNTaGFkb3ciLCJnZXRQYXJ0IiwicXVlcnlTZWxlY3RvciIsImdldFBhcnRzIiwicXVlcnlTZWxlY3RvckFsbCIsInRhZ05hbWUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJvYnNlcnZlZEF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2siLCJvbGRWYWx1ZSIsIm5ld1ZhbHVlIiwiX0RPTUNvbnRlbnRMb2FkZWQiLCJyZWFkeVN0YXRlIiwiZGVmaW5lIiwidGFnbmFtZSIsIkNvbXBvbmVudENsYXNzIiwiQ2xhc3MiLCJodG1sdGFnIiwiYWxsIiwiTElTU2NsYXNzIiwib3B0cyIsImluc2VydEdsb2JhbENTU1J1bGVzIiwiY3NzX3N0eWxlIiwicmVwbGFjZVN5bmMiLCJpbnNlcnRSdWxlIiwiREVMRUdBVEVEX0VWRU5UUyIsIkFMUkVBRFlfUFJPQ0VTU0VEIiwiZXYiLCJoYW5kbGVycyIsInR5cGUiLCJlbGVtIiwiY29tcG9zZWRQYXRoIiwiU2hhZG93Um9vdCIsIndpbmRvdyIsInRhcmdldCIsInNlbGVjdG9yIiwiaGFuZGxlciIsIm1hdGNoZXMiLCJpbnNlcnRHbG9iYWxEZWxlZ2F0ZWRMaXN0ZW5lciIsImV2ZW50X25hbWUiLCJjbG9zZXN0IiwiZWxlbWVudCIsInJlc3VsdCIsInJvb3QiLCJnZXRSb290Tm9kZSIsImJ1aWxkIiwicGFyZW50IiwiY2xhc3NlcyIsImNzc3ZhcnMiLCJsaXN0ZW5lcnMiLCJDdXN0b21DbGFzcyIsIndoZW5EZWZpbmVkIiwidG9Mb3dlckNhc2UiLCJjbGFzc0xpc3QiLCJzZXRQcm9wZXJ0eSIsInRvZ2dsZUF0dHJpYnV0ZSIsImRhdGFzZXQiLCJyZXBsYWNlQ2hpbGRyZW4iLCJnZXRMSVNTIiwiY2FsbGJhY2siLCJ3aGVuQWxsRGVmaW5lZCIsInRhZ25hbWVzIiwiaXNEZWZpbmVkIiwiZ2V0TmFtZSIsImdldExJU1NTeW5jIiwiX2J1aWxkUVMiLCJ0YWduYW1lX29yX3BhcmVudCIsInFzIiwicXNvIiwicXNhIiwiZWxlbWVudHMiLCJwcm9taXNlcyIsInFzYyIsInJlcyIsInFzU3luYyIsInFzYVN5bmMiLCJxc2NTeW5jIiwiTElTU19BdXRvIiwibmF2aWdhdG9yIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIiwiY29udHJvbGxlciIsInNyYyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwibXV0YXRpb24iLCJhZGRpdGlvbiIsImFkZGVkTm9kZXMiLCJFbGVtZW50Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJyZXNvdXJjZXMiLCJkZWZpbmVXZWJDb21wb25lbnQiLCJmaWxlcyIsImpzIiwia2xhc3MiLCJXZWJDb21wb25lbnQiLCJmaWxlbmFtZXMiLCJmaWxlIiwiZW5kc1dpdGgiLCJfaW1wb3J0IiwiX2ZldGNoVGV4dCIsImkiLCJDc3RtRXZlbnQiLCJDdXN0b21FdmVudCIsImFyZ3MiLCJkZXRhaWwiLCJmZXRjaFJlc291cmNlIiwicmVzb3VyY2UiLCJmZXRjaCIsInVyaSIsImlzTGlzc0F1dG8iLCJvcHRpb25zIiwiaGVhZGVycyIsInJlc3BvbnNlIiwic3RhdHVzIiwiZGVmYXVsdCIsImUiLCJjb25zb2xlIiwibG9nIiwiSFRNTENMQVNTX1JFR0VYIiwiZWxlbWVudE5hbWVMb29rdXBUYWJsZSIsImV4ZWMiLCJGb3JtYXRzIiwic19mb3JtdWxhIiwiZ2V0Q2VsbHMiLCJmb3JtYXQiLCJldXJvcyIsInNfY29tcGxleF9mb3JtdWxhIiwic190eXBlcyIsIkRhdGUiLCJzX2N1cnNvciIsInNfJGZvcm11bGEiLCJzXyRmb3JtIiwicmVmIiwic2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uIiwic2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uX2VtcHR5Iiwic2hlZXRfcmVjb3BpZV9pbmNyIiwiYyIsIlgiLCJ0ZCIsImZvY3VzIiwidGV4dENvbnRlbnQiLCJzdHIyaHRtbCIsIlJhbmdlT3ZlcmxheSIsIkV2ZW50VGFyZ2V0Iiwib3ZlcmxheSIsImNsYXNzbGlzdCIsInVwZGF0ZSIsInNldFJhbmdlIiwicmFuZ2UiLCJwbGFnZV9uYW1lIiwiZ2V0UmVjdCIsInJlY3QiLCJ0b2dnbGUiLCJnZXRSYW5nZSIsInNldFJlY3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiRm9ybXVsYVJlZiIsInNldENvbG9yIiwiY29sb3JfaWQiLCJyZW1vdmUiLCJSZWNvcHlIYW5kbGUiLCJ4IiwieSIsInciLCJoIiwiRm9ybXVsYSIsIkNhbGNTaGVldCIsIkNlbGxMaXN0IiwiRm9ybWF0TWFuYWdlciIsImN0cmxLZXkiLCJjaGFuZ2VkIiwia2V5Iiwic2VsZWN0aW9uIiwidG9nZ2xlRm9ybWF0Iiwic2hpZnRLZXkiLCJwb3VyY2VudCIsIm51bWJlciIsInByZXZlbnREZWZhdWx0IiwiZGlzcGF0Y2hFdmVudCIsImZsb2F0MkRhdGUiLCJmbG9hdCIsInNldERhdGUiLCJnZXREYXRlIiwiZGF0ZTJGbG9hdCIsImRhdGUiLCJiZWciLCJnZXRUaW1lIiwidG9GaXhlZCIsInJhd0NvbnRlbnQiLCJwcmVjIiwidG9QcmVjaXNpb24iLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ0b1N0cmluZyIsImdldFNoZWV0RnJvbUNlbGwiLCJ0b0xvY2FsZVN0cmluZyIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsInNsaWNlIiwiRm9ybWF0IiwiYXBwbHlUbyIsImNlbGwiLCJjZWxscyIsInZhbCIsInIiLCJqIiwicmVsYXRpdmVUbyIsInN0YXJ0c1dpdGgiLCJnZXRQcm9wZXJ0eSIsImhhc1Byb3BlcnR5IiwiZXh0cmFjdEZvcm1hdCIsImYyIiwidmFsdWVzIiwiaXRlbSIsImdldFByb3BlcnR5VmFsdWUiLCJjb2xzcGFuIiwicm93c3BhbiIsInNwYW4iLCJoYXNBdHRyaWJ1dGUiLCJwcmVjaXNpb24iLCJDYWxjRm9ybXVsYSIsInN0YXRlcyIsImNlbGxfZWRpdCIsInN0YXRlIiwiY2FsbCIsInN5bmNUbyIsImN1cnNvciIsImZpcnN0Q2VsbCIsImlzUk8iLCJyYW5nZXNfdG9rZW4iLCJkcm93IiwiZGNvbCIsIm5ld19yYW5nZXMiLCJwb3MiLCJjZWxsUG9zIiwibGFzdEluZGV4T2YiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJuZXdfZm9ybXVsYSIsIm9mZnNldCIsImVuZCIsInBhcnNlX2Zvcm11bGEiLCJyYW5nZXNUb2tlbiIsImV4dHJhY3RUb2tlbiIsInRva2VuIiwiaGFzQ29tbWEiLCJOb2RlIiwiY2hpbGRyZW4iLCJmY3QiLCJldmFsIiwidG9OdW1iZXIiLCJhIiwib3BfaW1wbCIsImIiLCJNYXRoIiwicG93Iiwib3BfcHJpbyIsIm9wcyIsIm9wIiwidG9rZW5saXN0MlRyZWUiLCJ0b2tlbnMiLCJuYiIsInJhdyIsImN1ciIsInByaW9yaXR5IiwiZmluZEluZGV4IiwidV9vcCIsIm9wX3Rva2VuIiwibGVmdCIsInJpZ2h0IiwiY3VyVG9rZW4iLCJub2RlIiwicmFuZ2VzIiwiZmlsdGVyIiwiUGxhZ2VGb3JtdWxhIiwiY29kZSIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInNlbGVjdGVkIiwiY2xlYXIiLCJibHVyIiwiUGxhZ2VTZWxlY3RvciIsInNlbGVjdGVkX2NlbGxzIiwiY29scyIsInRib2R5IiwiY29sX2lkIiwiY2xpZW50WCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJvd3MiLCJyb3dfaWQiLCJjbGllbnRZIiwibWFpbiIsIm9uX21vdXNlX21vdmUiLCJyZXBsYWNlQWxsIiwiZ2V0VmlzaWJsZUNlbGwiLCJwb3MycmVmIiwibmJSb3dzIiwibmJDb2xzIiwib25jZSIsImlzQWN0aXZlIiwib25JbnB1dCIsInJyYW5nZSIsImdldFNlbGVjdGlvbiIsImdldFJhbmdlQXQiLCJzdGFydE9mZnNldCIsImNoaWxkIiwibm9kZVR5cGUiLCJURVhUX05PREUiLCJzdGFydENvbnRhaW5lciIsImNyZWF0ZVJhbmdlIiwic2VsIiwic2V0U3RhcnQiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwicGFyc2VJbnB1dCIsInRlc3RfbnVtYmVyIiwiTnVtYmVyIiwiaXNOYU4iLCJwYXJ0cyIsInNwbGl0IiwidGVzdF9kYXRlIiwiZ2V0RnVsbFllYXIiLCJTdGF0ZSIsInByZXZfc3RhdGUiLCJTdGF0ZXMiLCJlbnRyaWVzIiwicyIsInRibF9vZmZzZXQiLCJvZmZzZXRUb3AiLCJzdGFydCIsIm9mZnNldExlZnQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInJvd19kaWZmIiwiY29sX2RpZmYiLCJyb3ciLCJjb2wiLCJyZWNvcHkiLCJjb3B5IiwibGFzdF9yZWNvcHlfdGFyZ2V0IiwibGFzdF9yZWNvcHlfZGlyIiwib25fcmVjb3B5X21vdmUiLCJkX3B4Iiwid2lkdGgiLCJkX3B5IiwiaGVpZ2h0IiwiZF94IiwiZF95Iiwic2lnbiIsImFicyIsInByZXYiLCJkaWZmX3giLCJkaWZmX3kiLCJwb3NfY3VyIiwiY2xhc3NOYW1lIiwiZm9ybXVsYV9iYXIiLCJwbGFnZSIsImZvcm11bGEiLCJybyIsImlzX3JvIiwiZF9yb3ciLCJkX2NvbCIsIm5leHQiLCJhbHRLZXkiLCJkc3QiLCJkZWVwQ2xvbmUiLCJkZWxldGVGb3JtYXQiLCJkZWxldGVDb250ZW50IiwiYnViYmxlcyIsIm9uSW5wdXQyIiwicmFuZ2VzX2NvbG9ycyIsImN1cl9vZmZzZXQiLCJyYW5nZV9uYW1lIiwicmFuZ2VzX25hbWVzIiwia2V5cyIsIndhcm4iLCJwYXJlbnRFbGVtZW50IiwicmVzaXplIiwibmJyb3dzIiwibmJjb2xzIiwiY29sX2h0bWwiLCJ0aCIsInJvd19odG1sIiwidGFibGUiLCJyZXNpemVPYnMiLCJSZXNpemVPYnNlcnZlciIsImZyb20iLCJ0byIsIkhUTUxUYWJsZUNlbGxFbGVtZW50IiwicmVmMnBvcyIsImJlZ19yb3ciLCJiZWdfY29sIiwiZW5kX3JvdyIsImVuZF9jb2wiLCJjZWxsX29yX3Jvd2lkIiwiYl9yb3dfaWQiLCJiX2NvbF9pZCIsImNoYXJDb2RlQXQiLCJlX3Jvd19pZCIsImVfY29sX2lkIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzb3J0IiwibWluIiwibWF4IiwibmJfY29scyIsImZsb29yIiwiZiIsImlzRm9ybWF0IiwicmF3X3ZhbCIsInYiLCJkaWZmIiwic2V0Uk8iLCJjbG9uZSIsImNsb25lTm9kZSIsInNuYW1lIiwicGF0aCIsInJvb3RfcGF0aCIsImhvc3RuYW1lIiwicGFnZXMiLCJoZWFkZXIiLCJ0aXRsZXMiLCJodHJlZSIsImh0bWwiLCJsZXZlbCIsImh0cmVlX2N1cnNvciIsInRpdGxlIiwic2VhcmNoQ3VySGVhZGVyIiwicG9zaXRpb24iLCJoaWQiLCJnZXRUaXRsZVByZWZpeCIsImluZGV4T2YiLCJudW0iLCJidWlsZE1lbnUiLCJub2RlcyIsIm1lbnUiLCJ1cGRhdGVIZWFkZXIiLCJsYXN0Iiwic2Nyb2xsVG9wIiwicmV2ZXJzZSIsImhub2RlIiwiaF9odG1sIiwibGluayIsImVtcHR5IiwibWFrZV9wYWdlX2hyZWYiLCJwYXRocHJlZml4IiwiZGVzYyIsImhyZWYiLCJtYWtlX3BhZ2VfbWVudSIsImZpbmQiLCJwYWdlIiwiY3VycGFnZSIsIm1vZHVsZV9odG1sIiwidHlwZV9odG1sIiwiZGVzY190eXBlIiwiZGVzYzJfaWR4IiwiYm9keSIsInNlc3Npb25faHRtbCIsInRlbXBsYXRlIiwic3RyMkRGIl0sInNvdXJjZVJvb3QiOiIifQ==