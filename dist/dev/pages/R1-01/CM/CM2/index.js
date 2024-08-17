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
    sheet.getCells("B1:D1").format("bold", "align_center").content = [
        "Monnaie",
        "Pourcent",
        "Nombre"
    ];
    sheet.getCells("A2:A4").format("bold", "align_center").content = [
        "Normal",
        "+1 decimal",
        "-1 decimal"
    ];
    sheet.getCells("B2:D4").content = 1;
    sheet.getCells("B2:B4").format(struct_calc_format_ts__WEBPACK_IMPORTED_MODULE_4__.Formats.euros);
    sheet.getCells("C2:C4").format(struct_calc_format_ts__WEBPACK_IMPORTED_MODULE_4__.Formats.pourcent);
    sheet.getCells("D2:D4").format(struct_calc_format_ts__WEBPACK_IMPORTED_MODULE_4__.Formats.number);
    sheet.getCells("B3:D3").format({
        precision: 3
    });
    sheet.getCells("B4:D4").format({
        precision: 1
    });
    const sheet_toolbar = await LISS__WEBPACK_IMPORTED_MODULE_0__["default"].qs('#sheet_toolbar_format');
    sheet_toolbar.syncTo(sheet);
    sheet_toolbar.disableAllExcept("format_monnaie", "format_pourcent", "format_nb", "format_zero_p1", "format_zero_m1");
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
    <calc-toolbar-item name='format_date' type='fct' disabled  title="Appliquer le format Date (Maj+Ctrl+3)"></calc-toolbar-item>
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxHQUFHO1VBQ0g7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLEdBQUc7VUFDSDtVQUNBLEVBQUU7VUFDRjtVQUNBOzs7OztVQ2hFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLHlDQUF5Qyx3Q0FBd0M7VUFDakY7VUFDQTtVQUNBOzs7OztVQ1BBOzs7OztVQ0FBO1VBQ0E7VUFDQTtVQUNBLHVEQUF1RCxpQkFBaUI7VUFDeEU7VUFDQSxnREFBZ0QsYUFBYTtVQUM3RDs7Ozs7VUNOQTs7Ozs7U0VBQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTIvaW5kZXguY3NzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMi9pbmRleC5tZCIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vQ291cnMvLi9saWJzL0xJU1MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00yL2luZGV4LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL1JhbmdlT3ZlcmxheS50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9mb3JtYXQudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvZm9ybXVsYV9lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvZm9ybXVsYV9wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvcGxhZ2VfZWRpdG9yLnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL3BsYWdlX3NlbGVjdG9yLnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL3NoZWV0LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL3Rvb2xiYXIudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L21lbnUudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L3V0aWxzL3N0cjJodG1sLnRzIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9hc3luYyBtb2R1bGUiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInBhZ2VzL1IxLTAxL0NNL0NNMi9pbmRleC5odG1sXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI6aG9zdCB0YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcbiAgICAmID4gdGJvZHkge1xcbiAgICAgICAgb3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICB9XFxuXFxuICAgICYgPiB0Ym9keSA+IHRyOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgXFxuICAgICAgICAmID4gdGgge1xcbiAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbjpob3N0IDppcyh0cix0aCx0ZCkge1xcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjMGMwYzA7XFxuIH1cXG5cXG46aG9zdCB0ciB7XFxuICAgIGhlaWdodDogMC40NWNtO1xcbiAgICBsaW5lLWhlaWdodDogMC40NWNtO1xcbn1cXG5cXG5cXG46aG9zdCA6aXModGQsIHRoKTpub3QoW2NvbnRlbnRlZGl0YWJsZV0pIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi8qXFxuOmhvc3QgdGRbY29udGVudGVkaXRhYmxlXSB7XFxuICAgIHVzZXItc2VsZWN0OiB0ZXh0O1xcbn0qL1xcblxcbjpob3N0IDppcyh0ZCwgdGgpIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogMi4yNmNtO1xcbiAgICBoZWlnaHQ6IDAuNDVjbTtcXG5cXG4gICAgZm9udC1zaXplOiAxMHB0O1xcblxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ0xpYmVyYXRpb24gU2Fucyc7XFxufVxcblxcbjpob3N0IHRyID4gdGg6Zmlyc3QtY2hpbGQge1xcbiAgICB3aWR0aDogY2FsYyggMi4yNmNtIC8gMi41KSA7XFxufVxcblxcbjpob3N0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbjpob3N0IGRpdi50b29sYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG5cXG4gICAgJiA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICAgICAgZmxleDogMSAxIDA7XFxuICAgIH1cXG4gICAgJiA+ICo6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgd2lkdGg6IGNhbGMoIDEuNSAqIDIuMjZjbSApO1xcbiAgICB9XFxufVxcblxcbjpob3N0IHRoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOGE4YThhO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcblxcbiAgICAmLmhpZ2hsaWdodCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk4ZWU3O1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxufVxcblxcbjpob3N0KC5jZWxsX2VkaXQpIC5jdXJzb3Ige1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG46aG9zdCgucmVjb3B5KSB7XFxuICAgIGN1cnNvcjogY2VsbDtcXG59XFxuXFxuOmhvc3Qge1xcblxcbiAgICAucmVjb3B5IHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgY3Vyc29yOiBjZWxsO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM5OGVlNztcXG5cXG4gICAgfVxcblxcbiAgICAuY3Vyc29yIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMzOThlZTc7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG46aG9zdCAuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuOmhvc3QgdGQge1xcblxcbiAgICAtLWZvbnRfc2l6ZTogMTBwdDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250X3NpemUpO1xcbiAgICBsaW5lLWhlaWdodDogY2FsYyggdmFyKC0tZm9udF9zaXplKSAqIDEuMiApO1xcblxcbiAgICAtLWluZGVudDogMDtcXG5cXG4gICAgLS1ib3JkZXJfY29sb3I6IGJsYWNrO1xcbiAgICAtLWJhY2tncm91bmRfY29sb3I6IHdoaXRlO1xcbiAgICAtLWZvcmVncm91bmRfY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kX2NvbG9yKTtcXG4gICAgY29sb3IgICAgICAgICAgIDogdmFyKC0tZm9yZWdyb3VuZF9jb2xvcik7XFxuXFxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxuXFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuXFxuICAgICY6aXMoW2RhdGEtdHlwZT1cXFwibnVtYmVyXFxcIl0sW2RhdGEtdHlwZT1cXFwiZGF0ZVxcXCJdLCBbZGF0YS10eXBlPVxcXCJib29sZWFuXFxcIl0pIHtcXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICB9XFxuXFxuICAgICZbY29udGVudGVkaXRhYmxlXSB7XFxuICAgICAgICBvdXRsaW5lOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgJi5hanVzdGVyIHtcXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIH1cXG5cXG4gICAgJi5oaWdobGlnaHQge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NkZTNmOTtcXG4gICAgfVxcblxcbiAgICAvKiogc3R5bGUgKiovXFxuICAgICYuaXRhbGljIHtcXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgfVxcbiAgICAmLmJvbGQge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIH1cXG4gICAgJi51bmRlcmxpbmUge1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIH1cXG4gICAgJi5hbGlnbl9sZWZ0IHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyggdmFyKC0taW5kZW50KSAqIDEwcHgpO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgfVxcbiAgICAmLmFsaWduX2NlbnRlciB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgJi5hbGlnbl9yaWdodCB7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKCB2YXIoLS1pbmRlbnQpICogMTBweCk7XFxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgfVxcbiAgICAmLnZhbGlnbl90b3Age1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgfVxcbiAgICAmLnZhbGlnbl9taWRkbGUge1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgfVxcbiAgICAmLnZhbGlnbl9ib3R0b20ge1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gICAgfVxcbiAgICAvKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMjQxNzU3L2FwcGx5aW5nLWJvcmRlcnMtdG8tYS1zaW5nbGUtdGFibGUtY2VsbC13aGVuLXVzaW5nLWJvcmRlci1jb2xsYXBzZSAqL1xcbiAgICAmLmJvcmRlcl90b3Age1xcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IGRvdWJsZSB2YXIoLS1ib3JkZXJfY29sb3IpO1xcbiAgICB9XFxuICAgICYuYm9yZGVyX2JvdHRvbSB7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZG91YmxlIHZhcigtLWJvcmRlcl9jb2xvcik7XFxuICAgIH1cXG4gICAgJi5ib3JkZXJfbGVmdCB7XFxuICAgICAgICBib3JkZXItbGVmdDogMXB4IGRvdWJsZSB2YXIoLS1ib3JkZXJfY29sb3IpO1xcbiAgICB9XFxuICAgICYuYm9yZGVyX3JpZ2h0IHtcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IGRvdWJsZSB2YXIoLS1ib3JkZXJfY29sb3IpO1xcbiAgICB9XFxufVxcblxcbjpob3N0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG46aG9zdCAucmFuZ2VfaGlnaGxpZ2h0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taGlnaGxpZ2h0X2NvbG9yKTtcXG59XFxuXFxuOmhvc3QgLmZvcm11bGFfaGlnaGxpZ2h0IHtcXG4gICAgY29sb3I6IHZhcigtLWhpZ2hsaWdodF9jb2xvcik7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfMCB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjZmEwYzBjO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzEge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogI2ZhMGNmYTtcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF8yIHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICMwYzg0MGM7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfMyB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjMDEwMTgwO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzQge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzg3MTcxNztcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF81IHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICM4NzE3ODc7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfNiB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjODQ4NDBjO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0Xzcge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzBjMGNmYTtcXG59XFxuXFxuXFxuLmNvcHlfaGlnaGxpZ2h0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBUb21vcnJvdyBUaGVtZSAqL1xcbi8qIGh0dHA6Ly9qbWJsb2cuZ2l0aHViLmNvbS9jb2xvci10aGVtZXMtZm9yLWdvb2dsZS1jb2RlLWhpZ2hsaWdodGpzICovXFxuLyogT3JpZ2luYWwgdGhlbWUgLSBodHRwczovL2dpdGh1Yi5jb20vY2hyaXNrZW1wc29uL3RvbW9ycm93LXRoZW1lICovXFxuXFxuLyogVG9tb3Jyb3cgQ29tbWVudCAqL1xcbi5obGpzLWNvbW1lbnQsXFxuLmhsanMtcXVvdGUge1xcblxcdGNvbG9yOiAjOGU5MDhjO1xcbn1cXG5cXG4vKiBUb21vcnJvdyBSZWQgKi9cXG4uaGxqcy12YXJpYWJsZSxcXG4uaGxqcy10ZW1wbGF0ZS12YXJpYWJsZSxcXG4uaGxqcy10YWcsXFxuLmhsanMtbmFtZSxcXG4uaGxqcy1zZWxlY3Rvci1pZCxcXG4uaGxqcy1zZWxlY3Rvci1jbGFzcyxcXG4uaGxqcy1yZWdleHAsXFxuLmhsanMtZGVsZXRpb24ge1xcblxcdGNvbG9yOiAjYzgyODI5O1xcbn1cXG5cXG4vKiBUb21vcnJvdyBPcmFuZ2UgKi9cXG4uaGxqcy1udW1iZXIsXFxuLmhsanMtYnVpbHRfaW4sXFxuLmhsanMtYnVpbHRpbi1uYW1lLFxcbi5obGpzLWxpdGVyYWwsXFxuLmhsanMtdHlwZSxcXG4uaGxqcy1wYXJhbXMsXFxuLmhsanMtbWV0YSxcXG4uaGxqcy1saW5rIHtcXG5cXHRjb2xvcjogI2Y1ODcxZjtcXG59XFxuXFxuLyogVG9tb3Jyb3cgWWVsbG93ICovXFxuLmhsanMtYXR0cmlidXRlIHtcXG5cXHRjb2xvcjogI2VhYjcwMDtcXG59XFxuXFxuLyogVG9tb3Jyb3cgR3JlZW4gKi9cXG4uaGxqcy1zdHJpbmcsXFxuLmhsanMtc3ltYm9sLFxcbi5obGpzLWJ1bGxldCxcXG4uaGxqcy1hZGRpdGlvbiB7XFxuXFx0Y29sb3I6ICM3MThjMDA7XFxufVxcblxcbi8qIFRvbW9ycm93IEJsdWUgKi9cXG4uaGxqcy10aXRsZSxcXG4uaGxqcy1zZWN0aW9uIHtcXG5cXHRjb2xvcjogIzQyNzFhZTtcXG59XFxuXFxuLyogVG9tb3Jyb3cgUHVycGxlICovXFxuLmhsanMta2V5d29yZCxcXG4uaGxqcy1zZWxlY3Rvci10YWcge1xcblxcdGNvbG9yOiAjODk1OWE4O1xcbn1cXG5cXG4uaGxqcyB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0b3ZlcmZsb3cteDogYXV0bztcXG5cXHRjb2xvcjogIzRkNGQ0YztcXG5cXHRwYWRkaW5nOiAwLjVlbTtcXG59XFxuXFxuLmhsanMtZW1waGFzaXMge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmhsanMtc3Ryb25nIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XCI7IiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBleHBvcnRlZCB0eXBlcyA9PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgdHlwZSBDU1NfUmVzb3VyY2UgPSBzdHJpbmd8UmVzcG9uc2V8SFRNTFN0eWxlRWxlbWVudHxDU1NTdHlsZVNoZWV0O1xuZXhwb3J0IHR5cGUgQ1NTX1NvdXJjZSAgID0gQ1NTX1Jlc291cmNlIHwgUHJvbWlzZTxDU1NfUmVzb3VyY2U+O1xuXG5leHBvcnQgdHlwZSBIVE1MX1Jlc291cmNlID0gc3RyaW5nfFJlc3BvbnNlfEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XG5leHBvcnQgdHlwZSBIVE1MX1NvdXJjZSAgID0gSFRNTF9SZXNvdXJjZSB8IFByb21pc2U8SFRNTF9SZXNvdXJjZT47XG5cbmV4cG9ydCB0eXBlIExJU1NPcHRpb25zPEV4dGVuZHMgICAgZXh0ZW5kcyBDbGFzcyxcblx0XHRcdFx0XHRcdEhvc3QgICAgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHRcdEF0dHJzICAgICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0XHRQYXJhbWV0ZXJzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4gPSB7XG5cblx0ZXh0ZW5kcz86IENvbnN0cnVjdG9yPEV4dGVuZHM+LFxuXHRob3N0ICAgPzogQ29uc3RydWN0b3I8SG9zdD4sXG5cblx0ZGVwZW5kZW5jaWVzPzogcmVhZG9ubHkgUHJvbWlzZTxhbnk+W10sXG5cdGF0dHJpYnV0ZXMgID86IHJlYWRvbmx5IEF0dHJzW10sXG5cdHBhcmFtcyAgICAgID86IFJlYWRvbmx5PFBhcmFtZXRlcnM+LFxuXG5cdGNvbnRlbnQ/OiBIVE1MX1NvdXJjZSxcblx0Y3NzICAgID86ICBDU1NfU291cmNlIHwgcmVhZG9ubHkgQ1NTX1NvdXJjZVtdLFxuXHRzaGFkb3cgPzogIFNoYWRvd0NmZyxcbn07XG5cbmV4cG9ydCBlbnVtIFNoYWRvd0NmZyB7XG5cdE5PTkUgPSAnbm9uZScsXG5cdE9QRU4gPSAnb3BlbicsIFxuXHRDTE9TRT0gJ2Nsb3NlZCdcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgQ2xhc3MgPT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxubGV0IF9fY3N0cl9ob3N0ICA6IGFueSA9IG51bGw7XG5cbnR5cGUgQ29uc3RydWN0b3I8VD4gPSBuZXcgKCkgPT4gVDtcbmludGVyZmFjZSBDbGFzcyB7fVxuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9hdHRhY2hTaGFkb3dcbmNvbnN0IENBTl9IQVZFX1NIQURPVyA9IFtcblx0bnVsbCwgJ2FydGljbGUnLCAnYXNpZGUnLCAnYmxvY2txdW90ZScsICdib2R5JywgJ2RpdicsXG5cdCdmb290ZXInLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnaGVhZGVyJywgJ21haW4nLFxuXHQnbmF2JywgJ3AnLCAnc2VjdGlvbicsICdzcGFuJ1xuXHRcbl07XG5mdW5jdGlvbiBfY2FuSGFzU2hhZG93KHRhZzogdHlwZW9mIEhUTUxFbGVtZW50KSB7XG5cdHJldHVybiBDQU5fSEFWRV9TSEFET1cuaW5jbHVkZXMoIF9lbGVtZW50MnRhZ25hbWUodGFnKSApO1xufVxuXG50eXBlIFJlc291cmNlID0gVVJMfFJlc3BvbnNlO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExJU1M8RXh0ZW5kcyAgICBleHRlbmRzIENsYXNzICAgICAgICAgICAgICA9IENsYXNzLFxuXHRcdFx0XHRcdFx0XHQgSG9zdCAgICAgICBleHRlbmRzIEhUTUxFbGVtZW50ICAgICAgICA9IEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdFx0XHQgQXR0cnMgICAgICBleHRlbmRzIHN0cmluZyAgICAgICAgICAgICA9IG5ldmVyLFxuXHRcdFx0XHRcdFx0XHQgUGFyYW1ldGVycyBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55PiA9IHt9Pih7XG5cdFx0XHRcdFx0XHRcdFx0ZXh0ZW5kcyAgICAgOiBwX2V4dGVuZHMsXG5cdFx0XHRcdFx0XHRcdFx0aG9zdCAgICAgICAgOiBwX2hvc3QsXG5cdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jaWVzOiBwX2RlcHMsXG5cdFx0XHRcdFx0XHRcdCAgICBhdHRyaWJ1dGVzICA6IHBfYXR0cnMsXG5cdFx0XHRcdFx0XHRcdCAgICBwYXJhbXMsXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudCxcblx0XHRcdFx0XHRcdFx0XHRjc3MsXG5cdFx0XHRcdFx0XHRcdFx0c2hhZG93ICAgICAgOiBwX3NoYWRvdyxcblx0XHRcdFx0XHRcdFx0fTogTElTU09wdGlvbnM8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtZXRlcnM+ID0ge30pIHtcblxuXHQvL1RPRE8gbWVyZ2UgcHJvcCBpZiBleHRlbmRzIExJU1MuLi5cblxuXHRjb25zdCBob3N0ICAgICAgICA9IHBfaG9zdCAgICA/PyBIVE1MRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxIb3N0Pjtcblx0Y29uc3QgX2V4dGVuZHMgICAgPSBwX2V4dGVuZHMgPz8gT2JqZWN0ICAgICAgYXMgdW5rbm93biBhcyBDb25zdHJ1Y3RvcjxFeHRlbmRzPjtcblx0Y29uc3QgYXR0cmlidXRlcyAgPSBwX2F0dHJzICAgPz8gW107XG5cdGNvbnN0IGRlcGVuZGVuY2llcz0gcF9kZXBzICAgID8gWy4uLnBfZGVwc10gOiBbXTtcblx0Y29uc3QgY2FuSGFzU2hhZG93PSBfY2FuSGFzU2hhZG93KGhvc3QpO1xuXHRjb25zdCBzaGFkb3cgICAgICA9IHBfc2hhZG93ICA/PyAoY2FuSGFzU2hhZG93ID8gU2hhZG93Q2ZnLkNMT1NFIDogU2hhZG93Q2ZnLk5PTkUpO1xuXG5cdGlmKCAhIGNhbkhhc1NoYWRvdyAmJiBzaGFkb3cgIT09IFNoYWRvd0NmZy5OT05FKVxuXHRcdHRocm93IG5ldyBFcnJvcihgSG9zdCBlbGVtZW50ICR7X2VsZW1lbnQydGFnbmFtZShob3N0KX0gZG9lcyBub3Qgc3VwcG9ydCBTaGFkb3dSb290YCk7XG5cblx0Ly8gQ09OVEVOVCBwcm9jZXNzaW5nXG5cdGlmKCBjb250ZW50ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRkZXBlbmRlbmNpZXMucHVzaCggKCBhc3luYyAoKSA9PiB7XG5cblx0XHRcdGNvbnRlbnQgPSBhd2FpdCBjb250ZW50O1xuXG5cdFx0XHRpZihjb250ZW50IGluc3RhbmNlb2YgSFRNTFRlbXBsYXRlRWxlbWVudClcblx0XHRcdGNvbnRlbnQgPSBjb250ZW50LmlubmVySFRNTDtcblxuXHRcdFx0aWYoIHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB7XG5cblx0XHRcdFx0Y29udGVudCA9IGNvbnRlbnQudHJpbSgpOyAvLyBOZXZlciByZXR1cm4gYSB0ZXh0IG5vZGUgb2Ygd2hpdGVzcGFjZSBhcyB0aGUgcmVzdWx0XG5cdFx0XHRcdGlmKGNvbnRlbnQgPT09ICcnKVxuXHRcdFx0XHRcdGNvbnRlbnQgPSB1bmRlZmluZWQ7XG5cblx0XHRcdH1cblx0XHRcdGlmKCBjb250ZW50IGluc3RhbmNlb2YgUmVzcG9uc2UgKVxuXHRcdFx0XHRjb250ZW50ID0gYXdhaXQgY29udGVudC50ZXh0KCk7XG5cblx0XHRcdHJldHVybiBMSVNTQmFzZS5QYXJhbWV0ZXJzLmNvbnRlbnQgPSBjb250ZW50O1xuXHRcdH0pKCkgKTtcblx0fVxuXG5cdC8vIENTUyBwcm9jZXNzaW5nXG5cdGxldCBzdHlsZXNoZWV0czogcmVhZG9ubHkgQ1NTU3R5bGVTaGVldFtdID0gW107XG5cdGlmKCBjc3MgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdGlmKCAhIEFycmF5LmlzQXJyYXkoY3NzKSApXG5cdFx0XHRjc3MgPSBbY3NzIGFzIENTU19Tb3VyY2VdO1xuXG5cdFx0c3R5bGVzaGVldHMgPSBuZXcgQXJyYXk8Q1NTU3R5bGVTaGVldD4oY3NzLmxlbmd0aCk7XG5cblx0XHRjb25zdCBmZXRjaF9jc3MgPSAoYXN5bmMgKGNzczogQ1NTX1NvdXJjZSkgPT4ge1xuXHRcdFx0Y3NzID0gYXdhaXQgY3NzO1xuXHRcdFx0aWYoY3NzIGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldClcblx0XHRcdFx0cmV0dXJuIGNzcztcblx0XHRcdGlmKCBjc3MgaW5zdGFuY2VvZiBIVE1MU3R5bGVFbGVtZW50KVxuXHRcdFx0XHRyZXR1cm4gY3NzLnNoZWV0ITtcblxuXHRcdFx0bGV0IHN0eWxlID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcblx0XHRcdGlmKCB0eXBlb2YgY3NzID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0XHRzdHlsZS5yZXBsYWNlKGNzcyk7XG5cdFx0XHRcdHJldHVybiBzdHlsZTtcblx0XHRcdH1cblxuXHRcdFx0Ly9pZiggY3NzIGluc3RhbmNlb2YgUmVzcG9uc2UgKVxuXHRcdFx0c3R5bGUucmVwbGFjZShhd2FpdCBjc3MudGV4dCgpKTtcblx0XHRcdHJldHVybiBzdHlsZTtcblx0XHR9KTtcblxuXHRcdGRlcGVuZGVuY2llcy5wdXNoKCAuLi5jc3MubWFwKCBhc3luYyAoY3NzLCBpZHgpID0+ICAoc3R5bGVzaGVldHMgYXMgYW55KVtpZHhdID0gYXdhaXQgZmV0Y2hfY3NzKGNzcykgKSApO1xuXHR9XG5cblx0dHlwZSBMSG9zdCA9IExJU1NIb3N0PExJU1NCYXNlPjtcblxuXHQvLyBAdHMtaWdub3JlXG5cdGNsYXNzIExJU1NCYXNlIGV4dGVuZHMgX2V4dGVuZHMge1xuXG5cdFx0cmVhZG9ubHkgI2hvc3Q6IGFueTsgLy8gcHJldmVudHMgaXNzdWUgIzEuLi5cblxuXHRcdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0XHRzdXBlcigpO1xuXG5cdFx0XHQvLyBoNGNrLCBva2F5IGJlY2F1c2UgSlMgaXMgbW9ub3RocmVhZGVkLlxuXHRcdFx0aWYoIF9fY3N0cl9ob3N0ID09PSBudWxsIClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGRvIG5vdCBkaXJlY3RseSBjYWxsIHRoaXMgY29uc3RydWN0b3JcIik7XG5cdFx0XHR0aGlzLiNob3N0ID0gX19jc3RyX2hvc3Q7XG5cdFx0XHRfX2NzdHJfaG9zdCA9IG51bGw7XG5cdFx0fVxuXG5cdFx0cHVibGljIGdldCBob3N0KCk6IEhvc3Qge1xuXHRcdFx0cmV0dXJuIHRoaXMuI2hvc3Q7XG5cdFx0fVxuXHRcdHByb3RlY3RlZCBnZXQgYXR0cnMoKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuI2hvc3QgYXMgTEhvc3QpLmF0dHJzO1xuXHRcdH1cblx0XHRwcm90ZWN0ZWQgc2V0QXR0ckRlZmF1bHQoIGF0dHI6IEF0dHJzLCB2YWx1ZTogc3RyaW5nfG51bGwpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkuc2V0QXR0ckRlZmF1bHQoYXR0ciwgdmFsdWUpO1xuXG5cdFx0fVxuXHRcdHByb3RlY3RlZCBnZXQgcGFyYW1zKCkge1xuXHRcdFx0cmV0dXJuICh0aGlzLiNob3N0IGFzIExIb3N0KS5wYXJhbXM7XG5cdFx0fVxuXHRcdHByb3RlY3RlZCBnZXQgY29udGVudCgpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkuY29udGVudCE7XG5cdFx0fVxuXG5cdFx0c3RhdGljIHJlYWRvbmx5IFBhcmFtZXRlcnMgPSB7XG5cdFx0XHRob3N0LFxuXHRcdFx0ZGVwZW5kZW5jaWVzLFxuXHRcdFx0YXR0cmlidXRlcyxcblx0XHRcdHBhcmFtcyxcblx0XHRcdGNvbnRlbnQsXG5cdFx0XHRzdHlsZXNoZWV0cyxcblx0XHRcdHNoYWRvdyxcblx0XHR9O1xuXG5cdFx0cHJvdGVjdGVkIG9uQXR0ckNoYW5nZWQoX25hbWU6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0XHRfb2xkVmFsdWU6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0XHRfbmV3VmFsdWU6IHN0cmluZyk6IHZvaWR8ZmFsc2Uge31cblxuXHRcdHByb3RlY3RlZCBnZXQgaXNJbkRPTSgpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkuaXNJbkRPTTtcblx0XHR9XG5cdFx0cHJvdGVjdGVkIG9uRE9NQ29ubmVjdGVkKCkge31cblx0XHRwcm90ZWN0ZWQgb25ET01EaXNjb25uZWN0ZWQoKSB7fVxuXHR9XG5cblx0cmV0dXJuIExJU1NCYXNlO1xufVxuXG4vL1RPRE86IG90aGVyIG9wdGlvbnMuLi5cbmZ1bmN0aW9uIGV4dGVuZHNMSVNTPEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0SG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRBdHRyczEgICBleHRlbmRzIHN0cmluZyxcblx0QXR0cnMyICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4sXG5cdFQgZXh0ZW5kcyBMSVNTUmV0dXJuVHlwZTxFeHRlbmRzLCBIb3N0LCBBdHRyczEsIFBhcmFtcz4+KExpc3M6IFQsIHBhcmFtZXRlcnM6IHthdHRyaWJ1dGVzOiByZWFkb25seSBBdHRyczJbXX0pIHtcblxuXHQvLyBUT0RPOiBvdGhlciBvcHRpb25zLi4uXG5cdGNvbnN0IGF0dHJzID0gWy4uLkxpc3MuUGFyYW1ldGVycy5hdHRyaWJ1dGVzLCAuLi5wYXJhbWV0ZXJzLmF0dHJpYnV0ZXMhXTtcblx0Y29uc3QgcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgTGlzcy5QYXJhbWV0ZXJzLCB7YXR0cmlidXRlczogYXR0cnN9KTtcblxuXHQvLyBAdHMtaWdub3JlIDogYmVjYXVzZSBUUyBzdHVwaWRcblx0Y2xhc3MgRXh0ZW5kZWRMSVNTIGV4dGVuZHMgTGlzcyB7XG5cdFx0Y29uc3RydWN0b3IoLi4udDogYW55W10pIHtcblx0XHRcdC8vIEB0cy1pZ25vcmUgOiBiZWNhdXNlIFRTIHN0dXBpZFxuXHRcdFx0c3VwZXIoLi4udCk7XG5cdFx0fVxuXG5cdFx0cHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhdHRycygpIHtcblx0XHRcdHJldHVybiBzdXBlci5hdHRycyBhcyBSZWNvcmQ8QXR0cnMyfEF0dHJzMSwgc3RyaW5nfG51bGw+O1xuXHRcdH1cblxuXHRcdHN0YXRpYyBvdmVycmlkZSBQYXJhbWV0ZXJzID0gcGFyYW1zO1xuXHR9XG5cblx0cmV0dXJuIEV4dGVuZGVkTElTUztcbn1cbkxJU1MuZXh0ZW5kc0xJU1MgPSBleHRlbmRzTElTUztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyB0eXBlIGhlbHBlcnMgPT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIGJ1aWxkTElTU0hvc3RSZXR1cm5UeXBlPFQ+ICA9IFQgZXh0ZW5kcyBMSVNTUmV0dXJuVHlwZTxpbmZlciBFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbmZlciBIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbmZlciBBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5mZXIgUGFyYW1zICBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gUmV0dXJuVHlwZTx0eXBlb2YgYnVpbGRMSVNTSG9zdDxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zLCBUPj4gOiBuZXZlcjtcblxuZXhwb3J0IHR5cGUgTElTU1JldHVyblR5cGU8XG5cdEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0SG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+PiA9IFJldHVyblR5cGU8dHlwZW9mIExJU1M8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcz4+O1xuZXhwb3J0IHR5cGUgTElTU0Jhc2U8RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdCBIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0IEF0dHJzICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0IFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4+ID0gSW5zdGFuY2VUeXBlPExJU1NSZXR1cm5UeXBlPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXM+PjtcbmV4cG9ydCB0eXBlIExJU1NIb3N0PExJU1MgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+ID4gPSBJbnN0YW5jZVR5cGU8YnVpbGRMSVNTSG9zdFJldHVyblR5cGU8Q29uc3RydWN0b3I8TElTUz4gJiB7UGFyYW1ldGVyczogYW55fT4+O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTSG9zdCBjbGFzcyA9PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmxldCBpZCA9IDA7XG5cbmZ1bmN0aW9uIGJ1aWxkTElTU0hvc3Q8RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdCAgIEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHQgICBBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdCAgIFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4sXG5cdFx0XHRcdFx0ICAgVCBleHRlbmRzIExJU1NSZXR1cm5UeXBlPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXM+PihMaXNzOiBULCBfcGFyYW1zOiBQYXJ0aWFsPFBhcmFtcz4gPSB7fSkge1xuXHRjb25zdCB7XG5cdFx0aG9zdCxcblx0XHRhdHRyaWJ1dGVzLFxuXHRcdGNvbnRlbnQsXG5cdFx0c3R5bGVzaGVldHMsXG5cdFx0c2hhZG93LFxuXHR9ID0gTGlzcy5QYXJhbWV0ZXJzO1xuXG5cdGNvbnN0IGFscmVhZHlEZWNsYXJlZENTUyA9IG5ldyBTZXQoKTtcblxuXHRjb25zdCBHRVQgPSBTeW1ib2woJ2dldCcpO1xuXHRjb25zdCBTRVQgPSBTeW1ib2woJ3NldCcpO1xuXG5cdGNvbnN0IHByb3BlcnRpZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoIGF0dHJpYnV0ZXMubWFwKG4gPT4gW24sIHtcblxuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbigpOiBzdHJpbmd8bnVsbCAgICAgIHsgcmV0dXJuICh0aGlzIGFzIHVua25vd24gYXMgQXR0cmlidXRlcylbR0VUXShuKTsgfSxcblx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlOiBzdHJpbmd8bnVsbCkgeyByZXR1cm4gKHRoaXMgYXMgdW5rbm93biBhcyBBdHRyaWJ1dGVzKVtTRVRdKG4sIHZhbHVlKTsgfVxuXHR9XSkgKTtcblxuXHRjbGFzcyBBdHRyaWJ1dGVzIHtcbiAgICAgICAgW3g6IHN0cmluZ106IHN0cmluZ3xudWxsO1xuXG4gICAgICAgICNkYXRhICAgICA6IFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuICAgICAgICAjZGVmYXVsdHMgOiBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPjtcbiAgICAgICAgI3NldHRlciAgIDogKG5hbWU6IEF0dHJzLCB2YWx1ZTogc3RyaW5nfG51bGwpID0+IHZvaWQ7XG5cbiAgICAgICAgW0dFVF0obmFtZTogQXR0cnMpIHtcbiAgICAgICAgXHRyZXR1cm4gdGhpcy4jZGF0YVtuYW1lXSA/PyB0aGlzLiNkZWZhdWx0c1tuYW1lXSA/PyBudWxsO1xuICAgICAgICB9O1xuICAgICAgICBbU0VUXShuYW1lOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKXtcbiAgICAgICAgXHRyZXR1cm4gdGhpcy4jc2V0dGVyKG5hbWUsIHZhbHVlKTsgLy8gcmVxdWlyZWQgdG8gZ2V0IGEgY2xlYW4gb2JqZWN0IHdoZW4gZG9pbmcgey4uLmF0dHJzfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YSAgICA6IFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+LFxuXHRcdFx0XHRcdGRlZmF1bHRzOiBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPixcbiAgICAgICAgXHRcdFx0c2V0dGVyICA6IChuYW1lOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKSA9PiB2b2lkKSB7XG5cbiAgICAgICAgXHR0aGlzLiNkYXRhICAgICA9IGRhdGE7XG5cdFx0XHR0aGlzLiNkZWZhdWx0cyA9IGRlZmF1bHRzO1xuICAgICAgICBcdHRoaXMuI3NldHRlciA9IHNldHRlcjtcblxuICAgICAgICBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHByb3BlcnRpZXMpO1xuICAgICAgICB9XG5cdH1cblxuXHQvLyBAdHMtaWdub3JlIDogYmVjYXVzZSBUUyBpcyBzdHVwaWQuXG5cdGNsYXNzIExJU1NIb3N0QmFzZSBleHRlbmRzIGhvc3Qge1xuXG5cdFx0cmVhZG9ubHkgI3BhcmFtczogUGFyYW1zO1xuXG5cdFx0cmVhZG9ubHkgI2lkID0gKytpZDsgLy8gZm9yIGRlYnVnXG5cblx0XHRjb25zdHJ1Y3RvcihwYXJhbXM6IFBhcnRpYWw8UGFyYW1zPiA9IHt9KSB7XG5cdFx0XHRzdXBlcigpO1xuXHRcdFx0dGhpcy4jcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgTGlzcy5QYXJhbWV0ZXJzLnBhcmFtcywgX3BhcmFtcywgcGFyYW1zKTtcblxuXHRcdFx0dGhpcy4jd2FpdEluaXQgPSBuZXcgUHJvbWlzZSggKHJlc29sdmUpID0+IHtcblx0XHRcdFx0aWYodGhpcy5pc0luaXQpXG5cdFx0XHRcdFx0cmV0dXJuIHJlc29sdmUodGhpcy4jQVBJISk7XG5cdFx0XHRcdHRoaXMuI3Jlc29sdmUgPSByZXNvbHZlO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqKiogcHVibGljIEFQSSAqKioqKioqKioqKioqL1xuXG5cdFx0Z2V0IGlzSW5pdCgpIHtcblx0XHRcdHJldHVybiB0aGlzLiNBUEkgIT09IG51bGw7XG5cdFx0fVxuXHRcdGluaXRpYWxpemUocGFyYW1zOiBQYXJ0aWFsPFBhcmFtcz4gPSB7fSkge1xuXG5cdFx0XHRpZiggdGhpcy5pc0luaXQgKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0VsZW1lbnQgYWxyZWFkeSBpbml0aWFsaXplZCEnKTtcblxuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLiNwYXJhbXMsIHBhcmFtcyk7XG5cblx0XHRcdGNvbnN0IGFwaSA9IHRoaXMuaW5pdCgpO1xuXG5cdFx0XHRpZiggdGhpcy4jaXNJbkRPTSApXG5cdFx0XHRcdChhcGkgYXMgYW55KS5vbkRPTUNvbm5lY3RlZCgpO1xuXG5cdFx0XHRyZXR1cm4gYXBpO1xuXHRcdH1cblxuXHRcdGdldCBMSVNTU3luYygpIHtcblx0XHRcdGlmKCAhIHRoaXMuaXNJbml0IClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdBY2Nlc3NpbmcgQVBJIGJlZm9yZSBXZWJDb21wb25lbnQgaW5pdGlhbGl6YXRpb24hJyk7XG5cdFx0XHRyZXR1cm4gdGhpcy4jQVBJITtcblx0XHR9XG5cdFx0Z2V0IExJU1MoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4jd2FpdEluaXQ7XG5cdFx0fVxuXG5cdFx0LyoqKiBpbml0ICoqKi9cblx0XHQjd2FpdEluaXQ6IFByb21pc2U8SW5zdGFuY2VUeXBlPFQ+Pjtcblx0XHQjcmVzb2x2ZTogKCh1OiBJbnN0YW5jZVR5cGU8VD4pID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG5cdFx0I0FQSTogSW5zdGFuY2VUeXBlPFQ+IHwgbnVsbCA9IG51bGw7XG5cblx0XHQjaXNJbkRPTSA9IGZhbHNlO1xuXHRcdGdldCBpc0luRE9NKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuI2lzSW5ET007XG5cdFx0fVxuXG5cdFx0ZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0XHR0aGlzLiNpc0luRE9NID0gZmFsc2U7XG5cdFx0XHQodGhpcy4jQVBJISBhcyBhbnkpLm9uRE9NRGlzY29ubmVjdGVkKCk7XG5cdFx0fVxuXG5cdFx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cblx0XHRcdHRoaXMuI2lzSW5ET00gPSB0cnVlO1xuXHRcblx0XHRcdGlmKCAhIHRoaXMuaXNJbml0ICkge1xuXHRcdFx0XHR0aGlzLmluaXQoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQodGhpcy4jQVBJISBhcyBhbnkpLm9uRE9NQ29ubmVjdGVkKCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBpbml0KCkge1xuXHRcdFx0XG5cdFx0XHRjdXN0b21FbGVtZW50cy51cGdyYWRlKHRoaXMpO1xuXHRcdFx0XG5cdFx0XHQvLyBzaGFkb3dcblx0XHRcdHRoaXMuI2NvbnRlbnQgPSB0aGlzIGFzIHVua25vd24gYXMgSG9zdDtcblx0XHRcdGlmKCBzaGFkb3cgIT09ICdub25lJykge1xuXHRcdFx0XHR0aGlzLiNjb250ZW50ID0gdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6IHNoYWRvd30pO1xuXG5cdFx0XHRcdC8vQHRzLWlnbm9yZVxuXHRcdFx0XHR0aGlzLiNjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGlja0V2ZW50KTtcblx0XHRcdFx0Ly9AdHMtaWdub3JlXG5cdFx0XHRcdHRoaXMuI2NvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBvbkNsaWNrRXZlbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBhdHRyc1xuXHRcdFx0Zm9yKGxldCBvYnMgb2YgYXR0cmlidXRlcyEpXG5cdFx0XHRcdHRoaXMuI2F0dHJpYnV0ZXNbb2JzXSA9IHRoaXMuZ2V0QXR0cmlidXRlKG9icyk7XG5cblx0XHRcdC8vIGNzc1xuXHRcdFx0aWYoIHNoYWRvdyAhPT0gJ25vbmUnKVxuXHRcdFx0XHQodGhpcy4jY29udGVudCBhcyBTaGFkb3dSb290KS5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChzaGFyZWRDU1MpO1xuXHRcdFx0aWYoIHN0eWxlc2hlZXRzLmxlbmd0aCApIHtcblxuXHRcdFx0XHRpZiggc2hhZG93ICE9PSAnbm9uZScpXG5cdFx0XHRcdFx0KHRoaXMuI2NvbnRlbnQgYXMgU2hhZG93Um9vdCkuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goLi4uc3R5bGVzaGVldHMpO1xuXHRcdFx0XHRlbHNlIHtcblxuXHRcdFx0XHRcdGNvbnN0IGNzc3NlbGVjdG9yID0gdGhpcy5DU1NTZWxlY3RvcjtcblxuXHRcdFx0XHRcdC8vIGlmIG5vdCB5ZXQgaW5zZXJ0ZWQgOlxuXHRcdFx0XHRcdGlmKCAhIGFscmVhZHlEZWNsYXJlZENTUy5oYXMoY3Nzc2VsZWN0b3IpICkge1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRsZXQgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG5cdFx0XHRcdFx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNzc3NlbGVjdG9yKTtcblxuXHRcdFx0XHRcdFx0bGV0IGh0bWxfc3R5bGVzaGVldHMgPSBcIlwiO1xuXG5cdFx0XHRcdFx0XHRmb3IobGV0IHN0eWxlIG9mIHN0eWxlc2hlZXRzKVxuXHRcdFx0XHRcdFx0XHRmb3IobGV0IHJ1bGUgb2Ygc3R5bGUuY3NzUnVsZXMpXG5cdFx0XHRcdFx0XHRcdFx0aHRtbF9zdHlsZXNoZWV0cyArPSBydWxlLmNzc1RleHQgKyAnXFxuJztcblxuXHRcdFx0XHRcdFx0c3R5bGUuaW5uZXJIVE1MID0gaHRtbF9zdHlsZXNoZWV0cy5yZXBsYWNlKCc6aG9zdCcsIGA6aXMoJHtjc3NzZWxlY3Rvcn0pYCk7XG5cblx0XHRcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kKHN0eWxlKTtcblxuXHRcdFx0XHRcdFx0YWxyZWFkeURlY2xhcmVkQ1NTLmFkZChjc3NzZWxlY3Rvcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNvbnRlbnRcblx0XHRcdGlmKCBjb250ZW50ICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdGxldCB0ZW1wbGF0ZV9lbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblx0XHRcdFx0bGV0IHN0ciA9IChjb250ZW50IGFzIHN0cmluZykucmVwbGFjZSgvXFwkXFx7KC4rPylcXH0vZywgKF8sIG1hdGNoKSA9PiB0aGlzLmdldEF0dHJpYnV0ZShtYXRjaCk/PycnKVxuXHQgICAgXHRcdHRlbXBsYXRlX2VsZW0uaW5uZXJIVE1MID0gc3RyO1xuXHQgICAgXHRcdHRoaXMuI2NvbnRlbnQuYXBwZW5kKC4uLnRlbXBsYXRlX2VsZW0uY29udGVudC5jaGlsZE5vZGVzKTtcblx0ICAgIFx0fVxuXG5cdCAgICBcdC8vIGJ1aWxkXG5cblx0ICAgIFx0Ly8gaDRjaywgb2theSBiZWNhdXNlIEpTIGlzIG1vbm90aHJlYWRlZC5cblx0XHRcdF9fY3N0cl9ob3N0ICAgPSB0aGlzO1xuXG5cdCAgICBcdGxldCBvYmogPSBuZXcgTGlzcygpO1xuXG5cdCAgICBcdC8qaWYoIG9iaiBpbnN0YW5jZW9mIFByb21pc2UpXG5cdCAgICBcdFx0b2JqID0gYXdhaXQgb2JqOyovXG5cblx0XHRcdHRoaXMuI0FQSSA9IG9iaiBhcyBJbnN0YW5jZVR5cGU8VD47XG5cblx0XHRcdC8vIGRlZmF1bHQgc2xvdFxuXHRcdFx0aWYoIHRoaXMuaGFzU2hhZG93ICYmIHRoaXMuI2NvbnRlbnQuY2hpbGROb2Rlcy5sZW5ndGggPT09IDAgKVxuXHRcdFx0XHR0aGlzLiNjb250ZW50LmFwcGVuZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2xvdCcpICk7XG5cblx0XHRcdGlmKCB0aGlzLiNyZXNvbHZlICE9PSBudWxsKVxuXHRcdFx0XHR0aGlzLiNyZXNvbHZlKHRoaXMuI0FQSSk7XG5cblx0XHRcdHJldHVybiB0aGlzLiNBUEk7XG5cdFx0fVxuXG5cdFx0Z2V0IHBhcmFtcygpOiBQYXJhbXMge1xuXHRcdFx0cmV0dXJuIHRoaXMuI3BhcmFtcztcblx0XHR9XG5cblxuXHRcdC8qKiogY29udGVudCAqKiovXG5cdFx0I2NvbnRlbnQ6IEhvc3R8U2hhZG93Um9vdHxudWxsID0gbnVsbDtcblxuXHRcdGdldCBjb250ZW50KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuI2NvbnRlbnQ7XG5cdFx0fVxuXG5cdFx0Z2V0UGFydChuYW1lOiBzdHJpbmcpIHtcblx0XHRcdHJldHVybiB0aGlzLmhhc1NoYWRvd1xuXHRcdFx0XHRcdD8gdGhpcy4jY29udGVudD8ucXVlcnlTZWxlY3RvcihgOjpwYXJ0KCR7bmFtZX0pYClcblx0XHRcdFx0XHQ6IHRoaXMuI2NvbnRlbnQ/LnF1ZXJ5U2VsZWN0b3IoYFtwYXJ0PVwiJHtuYW1lfVwiXWApO1xuXHRcdH1cblx0XHRnZXRQYXJ0cyhuYW1lOiBzdHJpbmcpIHtcblx0XHRcdHJldHVybiB0aGlzLmhhc1NoYWRvd1xuXHRcdFx0XHRcdD8gdGhpcy4jY29udGVudD8ucXVlcnlTZWxlY3RvckFsbChgOjpwYXJ0KCR7bmFtZX0pYClcblx0XHRcdFx0XHQ6IHRoaXMuI2NvbnRlbnQ/LnF1ZXJ5U2VsZWN0b3JBbGwoYFtwYXJ0PVwiJHtuYW1lfVwiXWApO1xuXHRcdH1cblxuXHRcdHByb3RlY3RlZCBnZXQgaGFzU2hhZG93KCk6IGJvb2xlYW4ge1xuXHRcdFx0cmV0dXJuIHNoYWRvdyAhPT0gJ25vbmUnO1xuXHRcdH1cblxuXHRcdC8qKiogQ1NTICoqKi9cblxuXHRcdGdldCBDU1NTZWxlY3RvcigpIHtcblx0XHRcdHJldHVybiB0aGlzLmhhc1NoYWRvd1xuXHRcdFx0XHRcdD8gdGhpcy50YWdOYW1lXG5cdFx0XHRcdFx0OiBgJHt0aGlzLnRhZ05hbWV9W2lzPVwiJHt0aGlzLmdldEF0dHJpYnV0ZShcImlzXCIpfVwiXWA7XG5cdFx0fVxuXG5cdFx0LyoqKiBhdHRycyAqKiovXG5cdFx0I2F0dHJzX2ZsYWcgPSBmYWxzZTtcblxuXHRcdCNhdHRyaWJ1dGVzICAgICAgICAgPSB7fSBhcyBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPjtcblx0XHQjYXR0cmlidXRlc0RlZmF1bHRzID0ge30gYXMgUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD47XG5cdFx0I2F0dHJzID0gbmV3IEF0dHJpYnV0ZXMoXG5cdFx0XHR0aGlzLiNhdHRyaWJ1dGVzLFxuXHRcdFx0dGhpcy4jYXR0cmlidXRlc0RlZmF1bHRzLFxuXHRcdFx0KG5hbWU6IEF0dHJzLCB2YWx1ZTpzdHJpbmd8bnVsbCkgPT4ge1xuXG5cdFx0XHRcdHRoaXMuI2F0dHJpYnV0ZXNbbmFtZV0gPSB2YWx1ZTtcblxuXHRcdFx0XHR0aGlzLiNhdHRyc19mbGFnID0gdHJ1ZTsgLy8gZG8gbm90IHRyaWdnZXIgb25BdHRyc0NoYW5nZWQuXG5cdFx0XHRcdGlmKCB2YWx1ZSA9PT0gbnVsbClcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0XHRcdH1cblx0XHQpIGFzIHVua25vd24gYXMgUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD47XG5cblx0XHRzZXRBdHRyRGVmYXVsdChuYW1lOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKSB7XG5cdFx0XHRpZiggdmFsdWUgPT09IG51bGwpXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLiNhdHRyaWJ1dGVzRGVmYXVsdHNbbmFtZV07XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHRoaXMuI2F0dHJpYnV0ZXNEZWZhdWx0c1tuYW1lXSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdGdldCBhdHRycygpOiBSZWFkb25seTxSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPj4ge1xuXG5cdFx0XHRyZXR1cm4gdGhpcy4jYXR0cnM7XG5cdFx0fVxuXG5cdFx0c3RhdGljIG9ic2VydmVkQXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG5cdFx0YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUgICAgOiBBdHRycyxcblx0XHRcdFx0XHRcdFx0XHQgb2xkVmFsdWU6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0XHQgbmV3VmFsdWU6IHN0cmluZykge1xuXG5cdFx0XHRpZih0aGlzLiNhdHRyc19mbGFnKSB7XG5cdFx0XHRcdHRoaXMuI2F0dHJzX2ZsYWcgPSBmYWxzZTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLiNhdHRyaWJ1dGVzW25hbWVdID0gbmV3VmFsdWU7XG5cdFx0XHRpZiggISB0aGlzLmlzSW5pdCApXG5cdFx0XHRcdHJldHVybjtcblxuXHRcdFx0aWYoICh0aGlzLiNBUEkhIGFzIGFueSkub25BdHRyQ2hhbmdlZChuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpID09PSBmYWxzZSkge1xuXHRcdFx0XHR0aGlzLiNhdHRyc1tuYW1lXSA9IG9sZFZhbHVlOyAvLyByZXZlcnQgdGhlIGNoYW5nZS5cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIExJU1NIb3N0QmFzZTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBkZWZpbmUgPT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBfRE9NQ29udGVudExvYWRlZCA9IG5ldyBQcm9taXNlPHZvaWQ+KCAocmVzb2x2ZSkgPT4ge1xuXG5cdGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiaW50ZXJhY3RpdmVcIiB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpXG5cdFx0cmV0dXJuIHJlc29sdmUoKTtcblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXHRcdHJlc29sdmUoKTtcblx0fSwgdHJ1ZSk7XG59KTtcblxuTElTUy5kZWZpbmUgPSBhc3luYyBmdW5jdGlvbjxFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdFx0XHRcdFx0XHRcdCBIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0XHQgICAgIEF0dHJzICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0XHQgICAgIFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4sXG5cdFx0XHRcdFx0XHQgICBcdCBUIGV4dGVuZHMgTElTU1JldHVyblR5cGU8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcz4+KFxuXHRcdFx0XHRcdFx0ICAgXHR0YWduYW1lOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdENvbXBvbmVudENsYXNzOiBULFxuXHRcdFx0XHRcdFx0XHR7ZGVwZW5kZW5jaWVzLCBwYXJhbXN9OiB7cGFyYW1zPzogUGFydGlhbDxQYXJhbXM+LCBkZXBlbmRlbmNpZXM/OiByZWFkb25seSBQcm9taXNlPHN0cmluZz5bXX0gPSB7fSkge1xuXG5cdGRlcGVuZGVuY2llcz8/PVtdO1xuXHRwYXJhbXMgICAgICA/Pz0ge307XG5cblx0Y29uc3QgQ2xhc3MgPSBDb21wb25lbnRDbGFzcy5QYXJhbWV0ZXJzLmhvc3Q7XG5cdGxldCBMSVNTQmFzZTogYW55ID0gQ29tcG9uZW50Q2xhc3M7XG5cdGxldCBodG1sdGFnID0gX2VsZW1lbnQydGFnbmFtZShDbGFzcyk/P3VuZGVmaW5lZDtcblxuXHRhd2FpdCBQcm9taXNlLmFsbChbX0RPTUNvbnRlbnRMb2FkZWQsIC4uLmRlcGVuZGVuY2llcywgLi4uTElTU0Jhc2UuUGFyYW1ldGVycy5kZXBlbmRlbmNpZXNdKTtcblxuXHRjb25zdCBMSVNTY2xhc3MgPSBidWlsZExJU1NIb3N0PEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXMsIFQ+KENvbXBvbmVudENsYXNzLCBwYXJhbXMpO1xuXHRcblx0Y29uc3Qgb3B0cyA9IGh0bWx0YWcgPT09IHVuZGVmaW5lZCA/IHt9XG5cdFx0XHRcdFx0XHRcdFx0XHQgICA6IHtleHRlbmRzOiBodG1sdGFnfTtcblx0XG5cdGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWduYW1lLCBMSVNTY2xhc3MsIG9wdHMpO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBTaGFkb3dSb290IHRvb2xzID09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBzaGFyZWRDU1MgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc2hhcmVkQ1NTKTtcblxuTElTUy5pbnNlcnRHbG9iYWxDU1NSdWxlcyA9IGZ1bmN0aW9uKGNzczogc3RyaW5nfEhUTUxTdHlsZUVsZW1lbnQpIHtcblxuXHRsZXQgY3NzX3N0eWxlITogQ1NTU3R5bGVTaGVldDtcblxuXHRpZiggY3NzIGluc3RhbmNlb2YgSFRNTFN0eWxlRWxlbWVudCApXG5cdFx0Y3NzX3N0eWxlID0gY3NzLnNoZWV0ITtcblx0aWYoIHR5cGVvZiBjc3MgPT09IFwic3RyaW5nXCIpIHtcblx0XHRjc3Nfc3R5bGUgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuXHRcdGNzc19zdHlsZS5yZXBsYWNlU3luYyhjc3MpO1xuXHR9XG5cblx0Zm9yKGxldCBydWxlIG9mIGNzc19zdHlsZS5jc3NSdWxlcylcblx0XHRzaGFyZWRDU1MuaW5zZXJ0UnVsZShydWxlLmNzc1RleHQpO1xufVxuXG50eXBlIERlbGVnYXRlZEhhbmRsZXIgPSBbc3RyaW5nLCAoZXY6IE1vdXNlRXZlbnQpID0+IHZvaWRdO1xuY29uc3QgREVMRUdBVEVEX0VWRU5UUyA9IHtcblx0XCJjbGlja1wiOiBbXSBhcyBEZWxlZ2F0ZWRIYW5kbGVyW10sXG5cdFwiZGJsY2xpY2tcIjogW10gYXMgRGVsZWdhdGVkSGFuZGxlcltdXG59O1xuXG5jb25zdCBBTFJFQURZX1BST0NFU1NFRCA9IFN5bWJvbCgpO1xuXG5mdW5jdGlvbiBvbkNsaWNrRXZlbnQoZXY6IE1vdXNlRXZlbnQpIHtcblxuXHRpZiggKGV2IGFzIGFueSlbQUxSRUFEWV9QUk9DRVNTRURdID09PSB0cnVlIClcblx0XHRyZXR1cm47XG5cdChldiBhcyBhbnkpW0FMUkVBRFlfUFJPQ0VTU0VEXSA9IHRydWU7XG5cblx0Y29uc3QgaGFuZGxlcnMgPSBERUxFR0FURURfRVZFTlRTW2V2LnR5cGUgYXMga2V5b2YgdHlwZW9mIERFTEVHQVRFRF9FVkVOVFNdO1xuXG5cdGZvcihsZXQgZWxlbSBvZiBldi5jb21wb3NlZFBhdGgoKSApIHtcblx0XG5cdFx0aWYoIGVsZW0gaW5zdGFuY2VvZiBTaGFkb3dSb290IHx8IGVsZW0gPT09IGRvY3VtZW50IHx8IGVsZW0gPT09IHdpbmRvdyApXG5cdFx0XHRjb250aW51ZTtcblxuXHRcdHZhciB0YXJnZXQgPSBlbGVtIGFzIEVsZW1lbnQ7XG5cblx0XHRmb3IobGV0IFtzZWxlY3RvciwgaGFuZGxlcl0gb2YgaGFuZGxlcnMpIHtcblx0XHRcdGlmKCB0YXJnZXQubWF0Y2hlcyhzZWxlY3RvcikgKVxuXHRcdFx0XHRoYW5kbGVyKGV2KTtcblx0XHR9XG5cdH1cbn1cblxuTElTUy5pbnNlcnRHbG9iYWxEZWxlZ2F0ZWRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50X25hbWU6IGtleW9mIHR5cGVvZiBERUxFR0FURURfRVZFTlRTLCBzZWxlY3Rvcjogc3RyaW5nLCBoYW5kbGVyOiAoZXY6IE1vdXNlRXZlbnQpID0+IHZvaWQgKSB7XG5cdERFTEVHQVRFRF9FVkVOVFNbZXZlbnRfbmFtZV0ucHVzaChbc2VsZWN0b3IsIGhhbmRsZXJdKVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tFdmVudCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIG9uQ2xpY2tFdmVudCk7XG5cbkxJU1MuY2xvc2VzdCA9IGZ1bmN0aW9uIGNsb3Nlc3Q8RSBleHRlbmRzIEVsZW1lbnQ+KHNlbGVjdG9yOiBzdHJpbmcsIGVsZW1lbnQ6IEVsZW1lbnQpIHtcblxuXHR3aGlsZSh0cnVlKSB7XG5cdFx0dmFyIHJlc3VsdCA9IGVsZW1lbnQuY2xvc2VzdDxFPihzZWxlY3Rvcik7XG5cblx0XHRpZiggcmVzdWx0ICE9PSBudWxsKVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblxuXHRcdGNvbnN0IHJvb3QgPSBlbGVtZW50LmdldFJvb3ROb2RlKCk7XG5cdFx0aWYoICEgKFwiaG9zdFwiIGluIHJvb3QpIClcblx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0ZWxlbWVudCA9IChyb290IGFzIFNoYWRvd1Jvb3QpLmhvc3Q7XG5cdH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBoZWxwZXJzID09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIGluZmVyUGFyYW1zPFQ+ID0gVCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LCBpbmZlciBQIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+PiA/IFAgOiBuZXZlcjtcblxudHlwZSBCVUlMRF9PUFRJT05TPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PiA9IFBhcnRpYWw8e1xuXHRcdFx0XHRcdCAgXHRwYXJhbXMgICAgOiBQYXJ0aWFsPGluZmVyUGFyYW1zPFQ+Pixcblx0XHRcdFx0XHQgIFx0Y29udGVudFx0ICA6IHN0cmluZ3xOb2RlfHJlYWRvbmx5IE5vZGVbXSxcblx0XHRcdFx0XHRcdGlkIFx0XHQgIDogc3RyaW5nLFxuXHRcdFx0XHRcdCAgXHRjbGFzc2VzXHQgIDogcmVhZG9ubHkgc3RyaW5nW10sXG5cdFx0XHRcdFx0ICBcdGNzc3ZhcnMgICA6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIHN0cmluZz4+LFxuXHRcdFx0XHRcdCAgXHRhdHRycyBcdCAgOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmd8Ym9vbGVhbj4+LFxuXHRcdFx0XHRcdCAgXHRkYXRhIFx0ICA6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIHN0cmluZ3xib29sZWFuPj4sXG5cdFx0XHRcdFx0ICBcdGxpc3RlbmVycyA6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIChldjogRXZlbnQpID0+IHZvaWQ+PlxuXHRcdFx0XHRcdH0+ICYgKHtcblx0XHRcdFx0XHRcdGluaXRpYWxpemU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0cGFyZW50OiBFbGVtZW50XG5cdFx0XHRcdFx0fXx7XG5cdFx0XHRcdFx0XHRpbml0aWFsaXplPzogdHJ1ZSxcblx0XHRcdFx0XHRcdHBhcmVudD86IEVsZW1lbnRcblx0XHRcdFx0XHR9KTtcblxuYXN5bmMgZnVuY3Rpb24gYnVpbGQ8VCBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHRhZ25hbWU6IFQsIG9wdGlvbnM/OiBCVUlMRF9PUFRJT05TPENvbXBvbmVudHNbVF0+KTogUHJvbWlzZTxDb21wb25lbnRzW1RdPjtcbmFzeW5jIGZ1bmN0aW9uIGJ1aWxkPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+Pih0YWduYW1lOiBzdHJpbmcsIG9wdGlvbnM/OiBCVUlMRF9PUFRJT05TPFQ+KTogUHJvbWlzZTxUPjtcbmFzeW5jIGZ1bmN0aW9uIGJ1aWxkPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+Pih0YWduYW1lOiBzdHJpbmcsIHtcblx0XHRwYXJhbXMgICAgPSB7fSxcblx0XHRpbml0aWFsaXplPSB0cnVlLFxuXHRcdGNvbnRlbnQgICA9IFtdLFxuXHRcdHBhcmVudCAgICA9IHVuZGVmaW5lZCxcblx0XHRpZCBcdFx0ICA9IHVuZGVmaW5lZCxcblx0XHRjbGFzc2VzICAgPSBbXSxcblx0XHRjc3N2YXJzICAgPSB7fSxcblx0XHRhdHRycyAgICAgPSB7fSxcblx0XHRkYXRhIFx0ICA9IHt9LFxuXHRcdGxpc3RlbmVycyA9IHt9XG5cdH06IEJVSUxEX09QVElPTlM8VD4gPSB7fSk6IFByb21pc2U8VD4ge1xuXG5cdGlmKCAhIGluaXRpYWxpemUgJiYgcGFyZW50ID09PSBudWxsKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIkEgcGFyZW50IG11c3QgYmUgZ2l2ZW4gaWYgaW5pdGlhbGl6ZSBpcyBmYWxzZVwiKTtcblxuXHRsZXQgQ3VzdG9tQ2xhc3MgPSBhd2FpdCBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCh0YWduYW1lKTtcblx0bGV0IGVsZW0gPSBuZXcgQ3VzdG9tQ2xhc3MocGFyYW1zKSBhcyBMSVNTSG9zdDxUPjtcblxuXHQvLyBGaXggaXNzdWUgIzJcblx0aWYoIGVsZW0udGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSB0YWduYW1lIClcblx0XHRlbGVtLnNldEF0dHJpYnV0ZShcImlzXCIsIHRhZ25hbWUpO1xuXG5cdGlmKCBpZCAhPT0gdW5kZWZpbmVkIClcblx0XHRlbGVtLmlkID0gaWQ7XG5cblx0aWYoIGNsYXNzZXMubGVuZ3RoID4gMClcblx0XHRlbGVtLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG5cblx0Zm9yKGxldCBuYW1lIGluIGNzc3ZhcnMpXG5cdFx0ZWxlbS5zdHlsZS5zZXRQcm9wZXJ0eShgLS0ke25hbWV9YCwgY3NzdmFyc1tuYW1lXSk7XG5cblx0Zm9yKGxldCBuYW1lIGluIGF0dHJzKSB7XG5cblx0XHRsZXQgdmFsdWUgPSBhdHRyc1tuYW1lXTtcblx0XHRpZiggdHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIilcblx0XHRcdGVsZW0udG9nZ2xlQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0XHRlbHNlXG5cdFx0XHRlbGVtLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdH1cblxuXHRmb3IobGV0IG5hbWUgaW4gZGF0YSkge1xuXG5cdFx0bGV0IHZhbHVlID0gZGF0YVtuYW1lXTtcblx0XHRpZiggdmFsdWUgPT09IGZhbHNlKVxuXHRcdFx0ZGVsZXRlIGVsZW0uZGF0YXNldFtuYW1lXTtcblx0XHRlbHNlIGlmKHZhbHVlID09PSB0cnVlKVxuXHRcdFx0ZWxlbS5kYXRhc2V0W25hbWVdID0gXCJcIjtcblx0XHRlbHNlXG5cdFx0XHRlbGVtLmRhdGFzZXRbbmFtZV0gPSB2YWx1ZTtcblx0fVxuXG5cdGlmKCAhIEFycmF5LmlzQXJyYXkoY29udGVudCkgKVxuXHRcdGNvbnRlbnQgPSBbY29udGVudCBhcyBhbnldO1xuXHRlbGVtLnJlcGxhY2VDaGlsZHJlbiguLi5jb250ZW50KTtcblxuXHRmb3IobGV0IG5hbWUgaW4gbGlzdGVuZXJzKVxuXHRcdGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBsaXN0ZW5lcnNbbmFtZV0pO1xuXG5cdGlmKCBwYXJlbnQgIT09IHVuZGVmaW5lZCApXG5cdFx0cGFyZW50LmFwcGVuZChlbGVtKTtcblxuXHRpZiggISBlbGVtLmlzSW5pdCAmJiBpbml0aWFsaXplIClcblx0XHRyZXR1cm4gYXdhaXQgTElTUy5pbml0aWFsaXplKGVsZW0pO1xuXG5cdHJldHVybiBhd2FpdCBMSVNTLmdldExJU1MoZWxlbSk7XG59XG5MSVNTLmJ1aWxkID0gYnVpbGQ7XG5cblxuTElTUy53aGVuRGVmaW5lZCAgICA9IGFzeW5jIGZ1bmN0aW9uKHRhZ25hbWU6IHN0cmluZywgY2FsbGJhY2s/OiAoKSA9PiB2b2lkICkgOiBQcm9taXNlPHZvaWQ+IHtcblxuXHRhd2FpdCBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCh0YWduYW1lKTtcblxuXHRpZiggY2FsbGJhY2sgIT09IHVuZGVmaW5lZClcblx0XHRjYWxsYmFjaygpO1xuXG5cdHJldHVybjtcbn1cbkxJU1Mud2hlbkFsbERlZmluZWQgPSBhc3luYyBmdW5jdGlvbih0YWduYW1lczogcmVhZG9ubHkgc3RyaW5nW10sIGNhbGxiYWNrPzogKCkgPT4gdm9pZCApIDogUHJvbWlzZTx2b2lkPiB7XG5cblx0YXdhaXQgUHJvbWlzZS5hbGwoIHRhZ25hbWVzLm1hcCggdCA9PiBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCh0KSApIClcblxuXHRpZiggY2FsbGJhY2sgIT09IHVuZGVmaW5lZClcblx0XHRjYWxsYmFjaygpO1xuXG59XG5cbkxJU1MuaXNEZWZpbmVkID0gZnVuY3Rpb24obmFtZTogc3RyaW5nKSB7XG5cdHJldHVybiBjdXN0b21FbGVtZW50cy5nZXQobmFtZSk7XG59XG5cbkxJU1Muc2VsZWN0b3IgPSBmdW5jdGlvbihuYW1lPzogc3RyaW5nKSB7XG5cdGlmKG5hbWUgPT09IHVuZGVmaW5lZCkgLy8ganVzdCBhbiBoNGNrXG5cdFx0cmV0dXJuIFwiXCI7XG5cdHJldHVybiBgOmlzKCR7bmFtZX0sIFtpcz1cIiR7bmFtZX1cIl0pYDtcbn1cblxuTElTUy5nZXRMSVNTICAgID0gYXN5bmMgZnVuY3Rpb248VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KCBlbGVtZW50OiBFbGVtZW50ICkge1xuXG5cdGF3YWl0IExJU1Mud2hlbkRlZmluZWQoIExJU1MuZ2V0TmFtZShlbGVtZW50KSApO1xuXG5cdHJldHVybiAoZWxlbWVudCBhcyBMSVNTSG9zdDxUPikuTElTUzsgLy8gZW5zdXJlIGluaXRpYWxpemVkLlxufVxuTElTUy5nZXRMSVNTU3luYz0gZnVuY3Rpb248VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KCBlbGVtZW50OiBFbGVtZW50ICkge1xuXG5cdGlmKCAhIExJU1MuaXNEZWZpbmVkKCBMSVNTLmdldE5hbWUoZWxlbWVudCkgKSApXG5cdFx0dGhyb3cgbmV3IEVycm9yKGAke25hbWV9IGhhc24ndCBiZWVuIGRlZmluZWQgeWV0LmApO1xuXG5cdGxldCBob3N0ID0gZWxlbWVudCBhcyBMSVNTSG9zdDxUPjtcblxuXHRpZiggISBob3N0LmlzSW5pdCApXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW5zdGFuY2UgaGFzbid0IGJlZW4gaW5pdGlhbGl6ZWQgeWV0LlwiKTtcblxuXHRyZXR1cm4gaG9zdC5MSVNTU3luYztcbn1cbkxJU1MuaW5pdGlhbGl6ZSA9IGFzeW5jIGZ1bmN0aW9uPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PiggZWxlbWVudDogRWxlbWVudCkge1xuXG5cdGF3YWl0IExJU1Mud2hlbkRlZmluZWQoIExJU1MuZ2V0TmFtZShlbGVtZW50KSApO1xuXG5cdHJldHVybiBhd2FpdCAoZWxlbWVudCBhcyBMSVNTSG9zdDxUPikuaW5pdGlhbGl6ZSgpOyAvLyBlbnN1cmUgaW5pdGlhbGl6YXRpb24uXG59XG5cbkxJU1MuZ2V0TmFtZSA9IGZ1bmN0aW9uKCBlbGVtZW50OiBFbGVtZW50ICk6IHN0cmluZyB7XG5cblx0Y29uc3QgbmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpcycpID8/IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcblx0aWYoICEgbmFtZS5pbmNsdWRlcygnLScpIClcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEVsZW1lbnQgJHtuYW1lfSBpcyBub3QgYSBXZWJDb21wb25lbnRgKTtcblxuXHRyZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gX2J1aWxkUVMoc2VsZWN0b3I6IHN0cmluZywgdGFnbmFtZV9vcl9wYXJlbnQ/OiBzdHJpbmcgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsIHBhcmVudDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblx0XG5cdGlmKCB0YWduYW1lX29yX3BhcmVudCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB0YWduYW1lX29yX3BhcmVudCAhPT0gJ3N0cmluZycpIHtcblx0XHRwYXJlbnQgPSB0YWduYW1lX29yX3BhcmVudDtcblx0XHR0YWduYW1lX29yX3BhcmVudCA9IHVuZGVmaW5lZDtcblx0fVxuXG5cdHJldHVybiBbYCR7c2VsZWN0b3J9JHtMSVNTLnNlbGVjdG9yKHRhZ25hbWVfb3JfcGFyZW50IGFzIHN0cmluZ3x1bmRlZmluZWQpfWAsIHBhcmVudF0gYXMgY29uc3Q7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgUXVlcnlTZWxlY3RvcnMgPT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYXN5bmMgZnVuY3Rpb24gcXM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8VD47XG5hc3luYyBmdW5jdGlvbiBxczxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTwgQ29tcG9uZW50c1tOXSA+O1xuYXN5bmMgZnVuY3Rpb24gcXM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRsZXQgcmVzdWx0ID0gYXdhaXQgTElTUy5xc288VD4oc2VsZWN0b3IsIHBhcmVudCk7XG5cdGlmKHJlc3VsdCA9PT0gbnVsbClcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEVsZW1lbnQgJHtzZWxlY3Rvcn0gbm90IGZvdW5kYCk7XG5cblx0cmV0dXJuIHJlc3VsdCFcbn1cbkxJU1MucXMgID0gcXNcblxuYXN5bmMgZnVuY3Rpb24gcXNvPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPFQ+O1xuYXN5bmMgZnVuY3Rpb24gcXNvPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPCBDb21wb25lbnRzW05dID47XG5hc3luYyBmdW5jdGlvbiBxc288VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRjb25zdCBlbGVtZW50ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3I8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblx0aWYoIGVsZW1lbnQgPT09IG51bGwgKVxuXHRcdHJldHVybiBudWxsO1xuXG5cdHJldHVybiBhd2FpdCBMSVNTLmdldExJU1MoIGVsZW1lbnQgKTtcbn1cbkxJU1MucXNvID0gcXNvXG5cbmFzeW5jIGZ1bmN0aW9uIHFzYTxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTxUW10+O1xuYXN5bmMgZnVuY3Rpb24gcXNhPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPCBDb21wb25lbnRzW05dW10gPjtcbmFzeW5jIGZ1bmN0aW9uIHFzYTxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LFxuXHRcdFx0XHRcdFx0cGFyZW50ICA6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cblx0W3NlbGVjdG9yLCBwYXJlbnRdID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBwYXJlbnQpO1xuXG5cdGNvbnN0IGVsZW1lbnRzID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGw8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblxuXHRsZXQgaWR4ID0gMDtcblx0Y29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxUPj4oIGVsZW1lbnRzLmxlbmd0aCApO1xuXHRmb3IobGV0IGVsZW1lbnQgb2YgZWxlbWVudHMpXG5cdFx0cHJvbWlzZXNbaWR4KytdID0gTElTUy5nZXRMSVNTKCBlbGVtZW50ICk7XG5cblx0cmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbn1cbkxJU1MucXNhID0gcXNhO1xuXG5hc3luYyBmdW5jdGlvbiBxc2M8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA6IEVsZW1lbnQpOiBQcm9taXNlPFQ+O1xuYXN5bmMgZnVuY3Rpb24gcXNjPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgOiBFbGVtZW50KTogUHJvbWlzZTwgQ29tcG9uZW50c1tOXSA+O1xuYXN5bmMgZnVuY3Rpb24gcXNjPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50LFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgPzogRWxlbWVudCkge1xuXG5cdGNvbnN0IHJlcyA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgZWxlbWVudCk7XG5cdFxuXHRjb25zdCByZXN1bHQgPSAocmVzWzFdIGFzIHVua25vd24gYXMgRWxlbWVudCkuY2xvc2VzdDxMSVNTSG9zdDxUPj4ocmVzWzBdKTtcblx0aWYocmVzdWx0ID09PSBudWxsKVxuXHRcdHJldHVybiBudWxsO1xuXG5cdHJldHVybiBhd2FpdCBMSVNTLmdldExJU1MocmVzdWx0KTtcbn1cbkxJU1MucXNjID0gcXNjO1xuXG5mdW5jdGlvbiBxc1N5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFQ7XG5mdW5jdGlvbiBxc1N5bmM8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IENvbXBvbmVudHNbTl07XG5mdW5jdGlvbiBxc1N5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRjb25zdCBlbGVtZW50ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3I8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblxuXHRpZiggZWxlbWVudCA9PT0gbnVsbCApXG5cdFx0dGhyb3cgbmV3IEVycm9yKGBFbGVtZW50ICR7c2VsZWN0b3J9IG5vdCBmb3VuZGApO1xuXG5cdHJldHVybiBMSVNTLmdldExJU1NTeW5jKCBlbGVtZW50ICk7XG59XG5MSVNTLnFzU3luYyA9IHFzU3luYztcblxuZnVuY3Rpb24gcXNhU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogVFtdO1xuZnVuY3Rpb24gcXNhU3luYzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogQ29tcG9uZW50c1tOXVtdO1xuZnVuY3Rpb24gcXNhU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LFxuXHRcdFx0XHRcdFx0cGFyZW50ICA6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cblx0W3NlbGVjdG9yLCBwYXJlbnRdID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBwYXJlbnQpO1xuXG5cdGNvbnN0IGVsZW1lbnRzID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGw8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblxuXHRsZXQgaWR4ID0gMDtcblx0Y29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PFQ+KCBlbGVtZW50cy5sZW5ndGggKTtcblx0Zm9yKGxldCBlbGVtZW50IG9mIGVsZW1lbnRzKVxuXHRcdHJlc3VsdFtpZHgrK10gPSBMSVNTLmdldExJU1NTeW5jKCBlbGVtZW50ICk7XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cbkxJU1MucXNhU3luYyA9IHFzYVN5bmM7XG5cbmZ1bmN0aW9uIHFzY1N5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA6IEVsZW1lbnQpOiBUO1xuZnVuY3Rpb24gcXNjU3luYzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdGVsZW1lbnQgIDogRWxlbWVudCk6IENvbXBvbmVudHNbTl07XG5mdW5jdGlvbiBxc2NTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50LFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgPzogRWxlbWVudCkge1xuXG5cdGNvbnN0IHJlcyA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgZWxlbWVudCk7XG5cdFxuXHRjb25zdCByZXN1bHQgPSAocmVzWzFdIGFzIHVua25vd24gYXMgRWxlbWVudCkuY2xvc2VzdDxMSVNTSG9zdDxUPj4ocmVzWzBdKTtcblx0aWYocmVzdWx0ID09PSBudWxsKVxuXHRcdHJldHVybiBudWxsO1xuXG5cdHJldHVybiBMSVNTLmdldExJU1NTeW5jKHJlc3VsdCk7XG59XG5MSVNTLnFzY1N5bmMgPSBxc2NTeW5jO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIEF1dG8gPT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBjbGFzcyBMSVNTX0F1dG8gZXh0ZW5kcyBMSVNTKHthdHRyaWJ1dGVzOiBbXCJzcmNcIl19KSB7XG5cblx0cmVhZG9ubHkgI2tub3duX3RhZyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXHRyZWFkb25seSAjZGlyZWN0b3J5OiBzdHJpbmc7XG5cdHJlYWRvbmx5ICNzdzogUHJvbWlzZTx2b2lkPjtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLiNzdyA9IG5ldyBQcm9taXNlKCBhc3luYyAocmVzb2x2ZSkgPT4ge1xuXHRcdFx0XG5cdFx0XHRhd2FpdCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihgLi9zdy5qc2ApO1xuXG5cdFx0XHRpZiggbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlciApXG5cdFx0XHRcdHJlc29sdmUoKTtcblxuXHRcdFx0bmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignY29udHJvbGxlcmNoYW5nZScsICgpID0+IHtcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblxuXHRcdGNvbnN0IHNyYyA9IHRoaXMuYXR0cnMuc3JjO1xuXHRcdGlmKHNyYyA9PT0gbnVsbClcblx0XHRcdHRocm93IG5ldyBFcnJvcihcInNyYyBhdHRyaWJ1dGUgaXMgbWlzc2luZy5cIik7XG5cdFx0dGhpcy4jZGlyZWN0b3J5ID0gc3JjWzBdID09PSAnLidcblx0XHRcdFx0XHRcdFx0XHQ/IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0vJHtzcmN9YFxuXHRcdFx0XHRcdFx0XHRcdDogc3JjO1xuXG5cdFx0bmV3IE11dGF0aW9uT2JzZXJ2ZXIoIChtdXRhdGlvbnMpID0+IHtcblxuXHRcdFx0Zm9yKGxldCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpXG5cdFx0XHRcdGZvcihsZXQgYWRkaXRpb24gb2YgbXV0YXRpb24uYWRkZWROb2Rlcylcblx0XHRcdFx0XHRpZihhZGRpdGlvbiBpbnN0YW5jZW9mIEVsZW1lbnQpXG5cdFx0XHRcdFx0XHR0aGlzLiNhZGRUYWcoYWRkaXRpb24udGFnTmFtZSlcblxuXHRcdH0pLm9ic2VydmUoIGRvY3VtZW50LCB7IGNoaWxkTGlzdDp0cnVlLCBzdWJ0cmVlOnRydWUgfSk7XG5cblxuXHRcdGZvciggbGV0IGVsZW0gb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIipcIikgKVxuXHRcdFx0dGhpcy4jYWRkVGFnKGVsZW0udGFnTmFtZSk7XG5cdH1cblxuXG4gICAgcHJvdGVjdGVkIHJlc291cmNlcygpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0XCJpbmRleC5qc1wiLFxuXHRcdFx0XCJpbmRleC5odG1sXCIsXG5cdFx0XHRcImluZGV4LmNzc1wiXG5cdFx0XTtcbiAgICB9XG5cblx0cHJvdGVjdGVkIGRlZmluZVdlYkNvbXBvbmVudCh0YWduYW1lOiBzdHJpbmcsIGZpbGVzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBvcHRzOiBQYXJ0aWFsPHtjb250ZW50OiBzdHJpbmcsIGNzczogc3RyaW5nfT4pIHtcblxuXHRcdGNvbnN0IGpzID0gZmlsZXNbXCJpbmRleC5qc1wiXTtcblx0XHRjb25zdCBjb250ZW50ID0gZmlsZXNbXCJpbmRleC5odG1sXCJdO1xuXG5cdFx0bGV0IGtsYXNzOiBudWxsfCBSZXR1cm5UeXBlPHR5cGVvZiBMSVNTPiA9IG51bGw7XG5cdFx0aWYoIGpzICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0a2xhc3MgPSBqcyhvcHRzKTtcblx0XHRlbHNlIGlmKCBjb250ZW50ICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0a2xhc3MgPSBjbGFzcyBXZWJDb21wb25lbnQgZXh0ZW5kcyBMSVNTKG9wdHMpIHt9O1xuXG5cdFx0aWYoa2xhc3MgPT09IG51bGwpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgZmlsZXMgZm9yIFdlYkNvbXBvbmVudCAke3RhZ25hbWV9LmApO1xuXG5cdFx0cmV0dXJuIExJU1MuZGVmaW5lKHRhZ25hbWUsIGtsYXNzKTtcblx0fVxuXG5cdGFzeW5jICNhZGRUYWcodGFnbmFtZTogc3RyaW5nKSB7XG5cblx0XHR0YWduYW1lID0gdGFnbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0aWYoIHRhZ25hbWUgPT09ICdsaXNzLWF1dG8nIHx8IHRhZ25hbWUgPT09ICdibGlzcy1hdXRvJyB8fCAhIHRhZ25hbWUuaW5jbHVkZXMoJy0nKSB8fCB0aGlzLiNrbm93bl90YWcuaGFzKCB0YWduYW1lICkgKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0dGhpcy4ja25vd25fdGFnLmFkZCh0YWduYW1lKTtcblxuXHRcdGF3YWl0IHRoaXMuI3N3OyAvLyBlbnN1cmUgU1cgaXMgaW5zdGFsbGVkLlxuXG5cdFx0Y29uc3QgZmlsZW5hbWVzID0gdGhpcy5yZXNvdXJjZXMoKTtcblx0XHRjb25zdCByZXNvdXJjZXMgPSBhd2FpdCBQcm9taXNlLmFsbCggZmlsZW5hbWVzLm1hcCggZmlsZSA9PiBmaWxlLmVuZHNXaXRoKCcuanMnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IF9pbXBvcnQgICAoYCR7dGhpcy4jZGlyZWN0b3J5fS8ke3RhZ25hbWV9LyR7ZmlsZX1gLCB0cnVlKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IF9mZXRjaFRleHQoYCR7dGhpcy4jZGlyZWN0b3J5fS8ke3RhZ25hbWV9LyR7ZmlsZX1gLCB0cnVlKSApICk7XG5cblx0XHRjb25zdCBmaWxlczogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBmaWxlbmFtZXMubGVuZ3RoOyArK2kpXG5cdFx0XHRpZiggcmVzb3VyY2VzW2ldICE9PSB1bmRlZmluZWQpXG5cdFx0XHRcdGZpbGVzW2ZpbGVuYW1lc1tpXV0gPSByZXNvdXJjZXNbaV07XG5cblx0XHRjb25zdCBjb250ZW50ID0gZmlsZXNbXCJpbmRleC5odG1sXCJdO1xuXHRcdGNvbnN0IGNzcyAgICAgPSBmaWxlc1tcImluZGV4LmNzc1wiXTtcblxuXHRcdGNvbnN0IG9wdHM6IFBhcnRpYWw8e2NvbnRlbnQ6IHN0cmluZywgY3NzOiBzdHJpbmd9PiA9IHtcblx0XHRcdC4uLmNvbnRlbnQgIT09IHVuZGVmaW5lZCAmJiB7Y29udGVudH0sXG5cdFx0XHQuLi5jc3MgICAgICE9PSB1bmRlZmluZWQgJiYge2Nzc30sXG5cdFx0fTtcblxuXHRcdHJldHVybiB0aGlzLmRlZmluZVdlYkNvbXBvbmVudCh0YWduYW1lLCBmaWxlcywgb3B0cyk7XG5cdFx0XG5cdH1cbn1cbkxJU1MuZGVmaW5lKFwibGlzcy1hdXRvXCIsIExJU1NfQXV0byk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50cyB7XG5cdFwibGlzcy1hdXRvXCI6IExJU1NfQXV0b1xufTtcbi8qXG4gKiBkZWNsYXJlIG1vZHVsZSAnJExJU1MnIHtcbiAqIFx0XHRpbnRlcmZhY2UgQ29tcG9uZW50cyB7XG4gKiBcdFx0XHRcIm5hbWVcIjogY2xhc3NcbiAqIFx0XHR9XG4gKiB9XG4gKi9cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBFdmVudHNUYXJnZXQgPT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIENzdEV2ZW50PEV2ZW50IGV4dGVuZHMgc3RyaW5nLCBBcmdzPiA9IEN1c3RvbUV2ZW50PEFyZ3M+ICYge3R5cGU6IEV2ZW50fTtcblxuZXhwb3J0IGludGVyZmFjZSBFdmVudHNUYXJnZXQ8RXZlbnRzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj57XG5cblx0YWRkRXZlbnRMaXN0ZW5lcjxFdmVudCBleHRlbmRzIEV4Y2x1ZGU8a2V5b2YgRXZlbnRzLCBzeW1ib2x8bnVtYmVyPj4odHlwZTogRXZlbnQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgbGlzdGVuZXI6IG51bGx8ICgoZXY6IENzdEV2ZW50PEV2ZW50LCBFdmVudHNbRXZlbnRdPikgPT4gdm9pZCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgb3B0aW9ucz86IGJvb2xlYW58QWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMpOiB2b2lkO1xuXG5cdGRpc3BhdGNoRXZlbnQ8RXZlbnQgZXh0ZW5kcyBFeGNsdWRlPGtleW9mIEV2ZW50cywgc3ltYm9sfG51bWJlcj4+KGV2ZW50OiBDc3RFdmVudDxFdmVudCwgRXZlbnRzW0V2ZW50XT4pOiBib29sZWFuO1xuXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI8RXZlbnQgZXh0ZW5kcyBFeGNsdWRlPGtleW9mIEV2ZW50cywgc3ltYm9sfG51bWJlcj4+KHR5cGU6IEV2ZW50LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsaXN0ZW5lcjogbnVsbHwgKChldjogQ3N0RXZlbnQ8RXZlbnQsIEV2ZW50c1tFdmVudF0+KSA9PiB2b2lkKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz86IGJvb2xlYW58QWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMpOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgQ3N0bUV2ZW50PEV2ZW50IGV4dGVuZHMgc3RyaW5nLCBBcmdzPiBleHRlbmRzIEN1c3RvbUV2ZW50PEFyZ3M+IHtcblxuXHRvdmVycmlkZSBnZXQgdHlwZSgpOiBFdmVudCB7IHJldHVybiBzdXBlci50eXBlIGFzIEV2ZW50OyB9XG5cblx0Y29uc3RydWN0b3IodHlwZTogRXZlbnQsIGFyZ3M6IEFyZ3MpIHtcblx0XHRzdXBlcih0eXBlLCB7ZGV0YWlsOiBhcmdzfSk7XG5cdH1cbn1cblxuZXhwb3J0IHR5cGUgRXZlbnRzVGFyZ2V0Q3N0cjxFdmVudHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4+ID0gQ29uc3RydWN0b3I8RXZlbnRzVGFyZ2V0PEV2ZW50cz4+O1xuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgaW50ZXJuYWwgdG9vbHMgPT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hSZXNvdXJjZShyZXNvdXJjZTogUmVzb3VyY2V8UHJvbWlzZTxSZXNvdXJjZT4pIHtcblxuXHRyZXNvdXJjZSA9IGF3YWl0IHJlc291cmNlO1xuXG5cdGlmKCAhIChyZXNvdXJjZSBpbnN0YW5jZW9mIFJlc3BvbnNlKSApXG5cdFx0cmVzb3VyY2UgPSBhd2FpdCBmZXRjaChyZXNvdXJjZSk7XG5cblx0cmV0dXJuIGF3YWl0IHJlc291cmNlLnRleHQoKTtcbn1cblxuXG5hc3luYyBmdW5jdGlvbiBfZmV0Y2hUZXh0KHVyaTogc3RyaW5nfFVSTCwgaXNMaXNzQXV0bzogYm9vbGVhbiA9IGZhbHNlKSB7XG5cblx0Y29uc3Qgb3B0aW9ucyA9IGlzTGlzc0F1dG9cblx0XHRcdFx0XHRcdD8ge2hlYWRlcnM6e1wibGlzcy1hdXRvXCI6IFwidHJ1ZVwifX1cblx0XHRcdFx0XHRcdDoge307XG5cblxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVyaSwgb3B0aW9ucyk7XG5cdGlmKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwIClcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXG5cdGlmKCBpc0xpc3NBdXRvICYmIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwic3RhdHVzXCIpISA9PT0gXCI0MDRcIiApXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblxuXHRyZXR1cm4gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xufVxuYXN5bmMgZnVuY3Rpb24gX2ltcG9ydCh1cmk6IHN0cmluZywgaXNMaXNzQXV0bzogYm9vbGVhbiA9IGZhbHNlKSB7XG5cblx0Ly8gdGVzdCBmb3IgdGhlIG1vZHVsZSBleGlzdGFuY2UuXG5cdGlmKGlzTGlzc0F1dG8gJiYgYXdhaXQgX2ZldGNoVGV4dCh1cmksIGlzTGlzc0F1dG8pID09PSB1bmRlZmluZWQgKVxuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cblx0dHJ5IHtcblx0XHRyZXR1cm4gKGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrSWdub3JlOiB0cnVlICovIHVyaSkpLmRlZmF1bHQ7XG5cdH0gY2F0Y2goZSkge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH1cbn1cblxuLy8gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81MTAwMDQ2MS9odG1sLWVsZW1lbnQtdGFnLW5hbWUtZnJvbS1jb25zdHJ1Y3RvclxuY29uc3QgSFRNTENMQVNTX1JFR0VYID0gIC9IVE1MKFxcdyspRWxlbWVudC87XG5jb25zdCBlbGVtZW50TmFtZUxvb2t1cFRhYmxlID0ge1xuICAgICdVTGlzdCc6ICd1bCcsXG4gICAgJ1RhYmxlQ2FwdGlvbic6ICdjYXB0aW9uJyxcbiAgICAnVGFibGVDZWxsJzogJ3RkJywgLy8gdGhcbiAgICAnVGFibGVDb2wnOiAnY29sJywgIC8vJ2NvbGdyb3VwJyxcbiAgICAnVGFibGVSb3cnOiAndHInLFxuICAgICdUYWJsZVNlY3Rpb24nOiAndGJvZHknLCAvL1sndGhlYWQnLCAndGJvZHknLCAndGZvb3QnXSxcbiAgICAnUXVvdGUnOiAncScsXG4gICAgJ1BhcmFncmFwaCc6ICdwJyxcbiAgICAnT0xpc3QnOiAnb2wnLFxuICAgICdNb2QnOiAnaW5zJywgLy8sICdkZWwnXSxcbiAgICAnTWVkaWEnOiAndmlkZW8nLC8vICdhdWRpbyddLFxuICAgICdJbWFnZSc6ICdpbWcnLFxuICAgICdIZWFkaW5nJzogJ2gxJywgLy8sICdoMicsICdoMycsICdoNCcsICdoNScsICdoNiddLFxuICAgICdEaXJlY3RvcnknOiAnZGlyJyxcbiAgICAnRExpc3QnOiAnZGwnLFxuICAgICdBbmNob3InOiAnYSdcbiAgfTtcbmZ1bmN0aW9uIF9lbGVtZW50MnRhZ25hbWUoQ2xhc3M6IHR5cGVvZiBIVE1MRWxlbWVudCk6IHN0cmluZ3xudWxsIHtcblxuXHRpZiggQ2xhc3MgPT09IEhUTUxFbGVtZW50IClcblx0XHRyZXR1cm4gbnVsbDtcblx0XG5cdGxldCBodG1sdGFnID0gSFRNTENMQVNTX1JFR0VYLmV4ZWMoQ2xhc3MubmFtZSkhWzFdO1xuXHRyZXR1cm4gZWxlbWVudE5hbWVMb29rdXBUYWJsZVtodG1sdGFnIGFzIGtleW9mIHR5cGVvZiBlbGVtZW50TmFtZUxvb2t1cFRhYmxlXSA/PyBodG1sdGFnLnRvTG93ZXJDYXNlKClcbn0iLCJpbXBvcnQgTElTUyBmcm9tIFwiTElTU1wiO1xuaW1wb3J0IFwic3RydWN0L21lbnUudHNcIjtcblxuaW1wb3J0IFwic3RydWN0L2NhbGMvc2hlZXQudHNcIjtcbmltcG9ydCBcInN0cnVjdC9jYWxjL3Rvb2xiYXIudHNcIjtcbmltcG9ydCB7IENhbGNTaGVldCB9IGZyb20gXCJzdHJ1Y3QvY2FsYy9zaGVldC50c1wiO1xuaW1wb3J0IHsgQ2FsY1Rvb2xiYXIgfSBmcm9tIFwic3RydWN0L2NhbGMvdG9vbGJhci50c1wiO1xuaW1wb3J0IHsgRm9ybWF0cyB9IGZyb20gXCJzdHJ1Y3QvY2FsYy9mb3JtYXQudHNcIjtcbmltcG9ydCB7IGxvYWQgfSBmcm9tIFwic3RydWN0L2NhbGMvbG9hZGVyX29kcy50c1wiO1xuXG5cbntcbiAgICBjb25zdCBzaGVldCA9IGF3YWl0IExJU1MucXM8Q2FsY1NoZWV0PignI3NoZWV0X3Rlc3QnKTtcblxuICAgIC8vYXdhaXQgbG9hZChzaGVldCwgXCJhc3NldHMvdGFibGV1ci90ZXN0Lm9kc1wiKTtcbn1cblxuY29uc3Qgc2hlZXRfZm9ybWF0X2NvbnRlbnQgPSBhd2FpdCBMSVNTLnFzPENhbGNTaGVldD4oJyNzaGVldF9mb3JtYXRfY29udGVudCcpO1xuXG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRDZWxscyhcIkExOkYxXCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFtcbiAgICBcIlRhaWxsZVwiLCBcIkdyYXNcIiwgXCJJdGFsaXF1ZVwiLCBcIlNvdWxpZ27DqVwiLCBcIkNvdWxldXIgdGV4dGVcIiwgXCJDb3VsZXVyIGZvbmRcIlxuXVxuXG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRDZWxscyhcIkEyOkYyXCIpLmZvcm1hdChcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gXCJBXCI7XG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRDZWxscyhcIkEyXCIpLmZvcm1hdCh7Zm9udF9zaXplOiAnMTVwdCd9KTtcbnNoZWV0X2Zvcm1hdF9jb250ZW50LmdldENlbGxzKFwiQjJcIikuZm9ybWF0KCdib2xkJyk7XG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRDZWxscyhcIkMyXCIpLmZvcm1hdCgnaXRhbGljJyk7XG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRDZWxscyhcIkQyXCIpLmZvcm1hdCgndW5kZXJsaW5lJyk7XG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRDZWxscyhcIkUyXCIpLmZvcm1hdCh7Zm9yZWdyb3VuZF9jb2xvcjogJ2JsdWUnfSk7XG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRDZWxscyhcIkYyXCIpLmZvcm1hdCh7YmFja2dyb3VuZF9jb2xvcjogJ3llbGxvdyd9KTtcblxuY29uc3Qgc2hlZXRfdG9vbGJhcl9mb3JtYXRfY29udGVudCA9IGF3YWl0IExJU1MucXM8Q2FsY1Rvb2xiYXI+KCcjc2hlZXRfdG9vbGJhcl9mb3JtYXRfY29udGVudCcpO1xuc2hlZXRfdG9vbGJhcl9mb3JtYXRfY29udGVudC5zeW5jVG8oc2hlZXRfZm9ybWF0X2NvbnRlbnQpO1xuc2hlZXRfdG9vbGJhcl9mb3JtYXRfY29udGVudC5kaXNhYmxlQWxsRXhjZXB0KFwiZm9udF9zaXplXCIsIFwiYm9sZFwiLCBcIml0YWxpY1wiLCBcInVuZGVybGluZVwiLCBcImZvcmVncm91bmRfY29sb3JcIiwgXCJiYWNrZ3JvdW5kX2NvbG9yXCIpO1xuXG57XG4gICAgY29uc3Qgc2hlZXRfYWxpZ24gPSBhd2FpdCBMSVNTLnFzPENhbGNTaGVldD4oJyNzaGVldF9hbGlnbicpO1xuXG4gICAgc2hlZXRfYWxpZ24uZ2V0Q2VsbHMoXCJCMTpFMVwiKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpLmNvbnRlbnQgPSBbXG4gICAgICAgIFwiSGF1dFwiLCBcIk1pbGlldVwiLCBcIkJhc1wiLCBcIkFqdXN0ZXJcIlxuICAgIF1cblxuICAgIHNoZWV0X2FsaWduLmdldENlbGxzKFwiQTI6QTRcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiLCBcInZhbGlnbl9taWRkbGVcIikuY29udGVudCA9IFtcbiAgICAgICAgXCJHYXVjaGVcIiwgXCJDZW50cmVcIiwgXCJEcm9pdFwiXG4gICAgXVxuXG4gICAgc2hlZXRfYWxpZ24uZ2V0Q2VsbHMoXCJCMjpENFwiKS5jb250ZW50ID0gXCJBXCI7XG4gICAgc2hlZXRfYWxpZ24uZ2V0Q2VsbHMoXCJCMjpFMlwiKS5mb3JtYXQoXCJhbGlnbl9sZWZ0XCIpO1xuICAgIHNoZWV0X2FsaWduLmdldENlbGxzKFwiQjM6RTNcIikuZm9ybWF0KCdhbGlnbl9jZW50ZXInKTtcbiAgICBzaGVldF9hbGlnbi5nZXRDZWxscyhcIkI0OkU0XCIpLmZvcm1hdCgnYWxpZ25fcmlnaHQnKTtcbiAgICBzaGVldF9hbGlnbi5nZXRDZWxscyhcIkIyOkI0XCIpLmZvcm1hdCgndmFsaWduX3RvcCcpO1xuICAgIHNoZWV0X2FsaWduLmdldENlbGxzKFwiQzI6QzRcIikuZm9ybWF0KCd2YWxpZ25fbWlkZGxlJyk7XG4gICAgc2hlZXRfYWxpZ24uZ2V0Q2VsbHMoXCJEMjpENFwiKS5mb3JtYXQoJ3ZhbGlnbl9ib3R0b20nKTtcblxuICAgIHNoZWV0X2FsaWduLmdldENlbGxzKFwiRTI6RTRcIikuZm9ybWF0KFwiYWp1c3RlclwiKS5jb250ZW50ID0gYEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFgO1xuXG4gICAgY29uc3Qgc2hlZXRfdG9vbGJhcl9hbGlnbiA9IGF3YWl0IExJU1MucXM8Q2FsY1Rvb2xiYXI+KCcjc2hlZXRfdG9vbGJhcl9hbGlnbicpO1xuICAgIHNoZWV0X3Rvb2xiYXJfYWxpZ24uc3luY1RvKHNoZWV0X2FsaWduKTtcbiAgICBzaGVldF90b29sYmFyX2FsaWduLmRpc2FibGVBbGxFeGNlcHQoXCJhbGlnbl9sZWZ0XCIsIFwiYWxpZ25fY2VudGVyXCIsIFwiYWxpZ25fcmlnaHRcIiwgXCJ2YWxpZ25fdG9wXCIsIFwidmFsaWduX21pZGRsZVwiLCBcInZhbGlnbl9ib3R0b21cIiwgXCJhanVzdGVyXCIpO1xufVxuXG57XG4gICAgY29uc3Qgc2hlZXQgPSBhd2FpdCBMSVNTLnFzPENhbGNTaGVldD4oJyNzaGVldF9mb3JtYXQnKTtcblxuICAgIHNoZWV0LmdldENlbGxzKFwiQjE6RDFcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gW1xuICAgICAgICBcIk1vbm5haWVcIiwgXCJQb3VyY2VudFwiLCBcIk5vbWJyZVwiXG4gICAgXTtcblxuICAgIHNoZWV0LmdldENlbGxzKFwiQTI6QTRcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gW1xuICAgICAgICBcIk5vcm1hbFwiLCBcIisxIGRlY2ltYWxcIiwgXCItMSBkZWNpbWFsXCJcbiAgICBdO1xuXG4gICAgc2hlZXQuZ2V0Q2VsbHMoXCJCMjpENFwiKS5jb250ZW50ID0gMTtcbiAgICBzaGVldC5nZXRDZWxscyhcIkIyOkI0XCIpLmZvcm1hdChGb3JtYXRzLmV1cm9zKTtcbiAgICBzaGVldC5nZXRDZWxscyhcIkMyOkM0XCIpLmZvcm1hdChGb3JtYXRzLnBvdXJjZW50KTtcbiAgICBzaGVldC5nZXRDZWxscyhcIkQyOkQ0XCIpLmZvcm1hdChGb3JtYXRzLm51bWJlcik7XG5cbiAgICBzaGVldC5nZXRDZWxscyhcIkIzOkQzXCIpLmZvcm1hdCh7cHJlY2lzaW9uOiAzfSk7XG4gICAgc2hlZXQuZ2V0Q2VsbHMoXCJCNDpENFwiKS5mb3JtYXQoe3ByZWNpc2lvbjogMX0pO1xuXG4gICAgY29uc3Qgc2hlZXRfdG9vbGJhciA9IGF3YWl0IExJU1MucXM8Q2FsY1Rvb2xiYXI+KCcjc2hlZXRfdG9vbGJhcl9mb3JtYXQnKTtcbiAgICBzaGVldF90b29sYmFyLnN5bmNUbyhzaGVldCk7XG4gICAgc2hlZXRfdG9vbGJhci5kaXNhYmxlQWxsRXhjZXB0KFwiZm9ybWF0X21vbm5haWVcIiwgXCJmb3JtYXRfcG91cmNlbnRcIiwgXCJmb3JtYXRfbmJcIiwgXCJmb3JtYXRfemVyb19wMVwiLCBcImZvcm1hdF96ZXJvX20xXCIpO1xufVxuXG57XG4gICAgY29uc3Qgc2hlZXQgPSBhd2FpdCBMSVNTLnFzPENhbGNTaGVldD4oJyNzaGVldF9ib3JkdXJlcycpO1xuXG4gICAgc2hlZXQuZ2V0Q2VsbHMoJ0IyJykuZm9ybWF0KHtcbiAgICAgICAgYm9yZGVyX3RvcDogdHJ1ZSxcbiAgICAgICAgYm9yZGVyX2JvdHRvbTogdHJ1ZSxcbiAgICAgICAgYm9yZGVyX2xlZnQ6IHRydWUsXG4gICAgICAgIGJvcmRlcl9yaWdodDogdHJ1ZSxcbiAgICAgICAgYm9yZGVyX2NvbG9yOiAncmVkJyxcbiAgICB9KVxuXG4gICAgY29uc3Qgc2hlZXRfdG9vbGJhciA9IGF3YWl0IExJU1MucXM8Q2FsY1Rvb2xiYXI+KCcjc2hlZXRfdG9vbGJhcl9ib3JkdXJlcycpO1xuICAgIHNoZWV0X3Rvb2xiYXIuc3luY1RvKHNoZWV0KTtcbiAgICBzaGVldF90b29sYmFyLmRpc2FibGVBbGxFeGNlcHQoXCJib3JkZXJcIiwgXCJib3JkZXJfY29sb3JcIik7XG59XG5cblxue1xuICAgIGNvbnN0IHNoZWV0ID0gYXdhaXQgTElTUy5xczxDYWxjU2hlZXQ+KCcjc2hlZXRfcmV0cmFpdHMnKTtcblxuICAgIHNoZWV0LmdldENlbGxzKFwiQTE6QjFcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gW1xuICAgICAgICBcIkdhdWNoZVwiLCBcIkRyb2l0ZVwiXG4gICAgXTtcblxuICAgIHNoZWV0LmdldENlbGxzKCdBMjpCNScpLmNvbnRlbnQgPSBcIkFcIjtcbiAgICBzaGVldC5nZXRDZWxscygnQTI6QTUnKS5mb3JtYXQoXCJhbGlnbl9sZWZ0XCIpO1xuICAgIHNoZWV0LmdldENlbGxzKCdCMjpCNScpLmZvcm1hdChcImFsaWduX3JpZ2h0XCIpO1xuXG4gICAgc2hlZXQuZ2V0Q2VsbHMoJ0EzOkIzJykuZm9ybWF0KHtpbmRlbnQ6IDF9KTtcbiAgICBzaGVldC5nZXRDZWxscygnQTQ6QjQnKS5mb3JtYXQoe2luZGVudDogMn0pO1xuICAgIHNoZWV0LmdldENlbGxzKCdBNTpCNScpLmZvcm1hdCh7aW5kZW50OiAzfSk7XG5cbiAgICBjb25zdCBzaGVldF90b29sYmFyID0gYXdhaXQgTElTUy5xczxDYWxjVG9vbGJhcj4oJyNzaGVldF90b29sYmFyX3JldHJhaXRzJyk7XG4gICAgc2hlZXRfdG9vbGJhci5zeW5jVG8oc2hlZXQpO1xuICAgIHNoZWV0X3Rvb2xiYXIuZGlzYWJsZUFsbEV4Y2VwdChcInJldHJhaXRfcDFcIiwgXCJyZXRyYWl0X20xXCIpO1xufVxuXG5cbntcbiAgICBjb25zdCBzaGVldCA9IGF3YWl0IExJU1MucXM8Q2FsY1NoZWV0PignI3NoZWV0X2Z1c2lvbicpO1xuXG4gICAgc2hlZXQuZ2V0Q2VsbHMoJ0IyJykuZm9ybWF0KHtcbiAgICAgICAgc3BhbjogWzIsMl0sXG4gICAgICAgIGFsaWduX2NlbnRlcjogdHJ1ZSxcbiAgICAgICAgdmFsaWduX21pZGRsZTogdHJ1ZVxuICAgIH0pLmNvbnRlbnQgPSBcIkFcIjtcblxuICAgIGNvbnN0IHNoZWV0X3Rvb2xiYXIgPSBhd2FpdCBMSVNTLnFzPENhbGNUb29sYmFyPignI3NoZWV0X3Rvb2xiYXJfZnVzaW9uJyk7XG4gICAgc2hlZXRfdG9vbGJhci5zeW5jVG8oc2hlZXQpO1xuICAgIHNoZWV0X3Rvb2xiYXIuZGlzYWJsZUFsbEV4Y2VwdChcIm1lcmdlX2NlbnRlclwiLCBcIm1lcmdlXCIsIFwidW5tZXJnZVwiKTtcbn0iLCJpbXBvcnQgeyBzdHIyaHRtbCB9IGZyb20gXCJzdHJ1Y3QvdXRpbHMvc3RyMmh0bWxcIjtcbmltcG9ydCB7IENhbGNTaGVldCwgQ2VsbExpc3QgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5leHBvcnQgY2xhc3MgUmFuZ2VPdmVybGF5IGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuXG4gICAgI3NoZWV0OiBDYWxjU2hlZXQ7XG4gICAgI3JhbmdlOiBzdHJpbmd8bnVsbCA9IG51bGw7XG4gICAgcHJvdGVjdGVkIG92ZXJsYXk6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCwgLi4uY2xhc3NsaXN0OiBzdHJpbmdbXSkge1xuXG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcbiAgICAgICAgdGhpcy4jc2hlZXQuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm92ZXJsYXkgPSBzdHIyaHRtbChgPGRpdiBjbGFzcz0nb3ZlcmxheSc+PC9kaXY+YCk7XG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzbGlzdCk7XG5cbiAgICAgICAgc2hlZXQuY29udGVudC5hcHBlbmQoIHRoaXMub3ZlcmxheSApO1xuICAgIH1cblxuICAgIHNldFJhbmdlKHJhbmdlOiBDZWxsTGlzdHxudWxsKSB7XG4gICAgICAgIHRoaXMuI3JhbmdlID0gcmFuZ2UgPT09IG51bGwgPyBudWxsIDogcmFuZ2UucGxhZ2VfbmFtZSE7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFJlY3QoLi4ucmVjdDogcmVhZG9ubHkgW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0pIHtcbiAgICAgICAgcmV0dXJuIHJlY3Q7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuXG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIsIHRoaXMuI3JhbmdlID09PSBudWxsKTtcblxuICAgICAgICBpZiggdGhpcy4jcmFuZ2UgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmdldFJlY3QoIC4uLnRoaXMuI3NoZWV0LmdldFJlY3QoIHRoaXMuI3NoZWV0LmdldFJhbmdlKHRoaXMuI3JhbmdlKSApICk7XG4gICAgICAgIHRoaXMuI3NoZWV0LnNldFJlY3QodGhpcy5vdmVybGF5LCByZWN0ICk7XG4gICAgfVxuXG4gICAgb3ZlcnJpZGUgYWRkRXZlbnRMaXN0ZW5lcih0eXBlOiBzdHJpbmcsIGNhbGxiYWNrOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0IHwgbnVsbCwgb3B0aW9ucz86IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zIHwgYm9vbGVhbik6IHZvaWQge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBvdmVycmlkZSByZW1vdmVFdmVudExpc3RlbmVyKHR5cGU6IHN0cmluZywgY2FsbGJhY2s6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QgfCBudWxsLCBvcHRpb25zPzogRXZlbnRMaXN0ZW5lck9wdGlvbnMgfCBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5vdmVybGF5LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIG9wdGlvbnMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvcm11bGFSZWYgZXh0ZW5kcyBSYW5nZU92ZXJsYXkge1xuXG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCkge1xuICAgICAgICBzdXBlcihzaGVldCwgXCJyYW5nZV9oaWdobGlnaHRcIik7XG4gICAgfVxuXG4gICAgI2N1cl9jb2xvciA9IDA7XG4gICAgc2V0Q29sb3IoY29sb3JfaWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShgaGlnaGxpZ2h0XyR7dGhpcy4jY3VyX2NvbG9yfWApOyBcbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoYGhpZ2hsaWdodF8ke2NvbG9yX2lkfWApO1xuICAgICAgICB0aGlzLiNjdXJfY29sb3IgPSBjb2xvcl9pZDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWNvcHlIYW5kbGUgZXh0ZW5kcyBSYW5nZU92ZXJsYXkge1xuXG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCkge1xuICAgICAgICBzdXBlcihzaGVldCwgXCJyZWNvcHlcIik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldFJlY3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBbeCt3LTIsIHkraC0yLCA1LCA1XSBhcyBjb25zdDtcbiAgICB9XG5cbn0iLCJpbXBvcnQgTElTUyBmcm9tIFwiLi4vLi4vLi4vbGlicy9MSVNTXCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGwsIENlbGxMaXN0LCBkZWZhdWx0Rm9ybWF0IH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuZXhwb3J0IGNsYXNzIEZvcm1hdE1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKHNoZWV0OiBDYWxjU2hlZXQpIHtcblxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHNoZWV0LmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldjogS2V5Ym9hcmRFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICBpZiggISBldi5jdHJsS2V5IClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdiJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJib2xkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ2knKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcIml0YWxpY1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICd1Jykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJ1bmRlcmxpbmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnbCcpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KFwiYWxpZ25fbGVmdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdyJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJhbGlnbl9yaWdodFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdlJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJhbGlnbl9jZW50ZXJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnNCcgJiYgZXYuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KEZvcm1hdHMuZXVyb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJzUnICYmIGV2LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChGb3JtYXRzLnBvdXJjZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICcxJyAmJiBldi5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoRm9ybWF0cy5udW1iZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihjaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICAgICAgLyogVE9ETyBsaXN0ZW4gKi9cblxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEZvcm1hdHMgPSB7XG4gICAgZXVyb3M6IGZ1bmN0aW9uKHRoaXM6Q2VsbCwgdmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuXG4gICAgICAgIGNvbnN0IHByZWMgPSArKHRoaXMuZ2V0QXR0cmlidXRlKCdwcmVjaXNpb24nKSA/PyAyKTtcblxuICAgICAgICByZXR1cm4gdmFsdWUudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XG4gICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHByZWMsXG4gICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNcbiAgICAgICAgICAgIH0pICsgJ+KCrCc7XG4gICAgICAgIC8vLnRvRml4ZWQoMikgKyAn4oKsJztcbiAgICB9LFxuICAgIHBvdXJjZW50OiBmdW5jdGlvbih0aGlzOkNlbGwsIHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYodmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiAnJztcblxuICAgICAgICBjb25zdCBwcmVjID0gKyh0aGlzLmdldEF0dHJpYnV0ZSgncHJlY2lzaW9uJykgPz8gMik7XG5cbiAgICAgICAgcmV0dXJuICh2YWx1ZSAqIDEwMCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XG4gICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHByZWMsXG4gICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNcbiAgICAgICAgICAgIH0pICsgJyUnO1xuICAgICAgICAvLy50b0ZpeGVkKDIpICsgJ+KCrCc7XG4gICAgfSxcbiAgICBudW1iZXI6IGZ1bmN0aW9uKHRoaXM6Q2VsbCwgdmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuXG4gICAgICAgIGNvbnN0IHByZWMgPSArKHRoaXMuZ2V0QXR0cmlidXRlKCdwcmVjaXNpb24nKSA/PyAyKTtcblxuICAgICAgICByZXR1cm4gdmFsdWUudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XG4gICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHByZWMsXG4gICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvcm1hdCB7XG5cbiAgICAjZm9ybWF0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoZm9ybWF0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgICAgIHRoaXMuI2Zvcm1hdCA9IGZvcm1hdDtcbiAgICB9XG5cbiAgICBhcHBseVRvKGNlbGw6IENlbGx8Q2VsbExpc3QpIHtcblxuICAgICAgICBpZiggY2VsbCBpbnN0YW5jZW9mIENlbGxMaXN0KSB7XG5cbiAgICAgICAgICAgIGZvcihsZXQgYyBvZiBjZWxsLmNlbGxzKVxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlUbyhjKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCBuYW1lIGluIHRoaXMuI2Zvcm1hdCkge1xuICAgICAgICAgICAgbGV0IHZhbCA9IHRoaXMuI2Zvcm1hdFtuYW1lXTtcblxuICAgICAgICAgICAgaWYobmFtZSA9PT0gJ2Zvcm1hdCcpIHtcblxuICAgICAgICAgICAgICAgIGlmKCB2YWwgPT09IG51bGwpIHtcblxuICAgICAgICAgICAgICAgICAgICBjZWxsLmZvcm1hdCA9IGRlZmF1bHRGb3JtYXQ7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBjZWxsLmZvcm1hdCggY2VsbC5yYXdDb250ZW50KTsgLy9UT0RPOiBpZiBmY3RcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2VsbC5mb3JtYXQgPSB2YWw7XG4gICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGNlbGwuZm9ybWF0KCBjZWxsLnJhd0NvbnRlbnQpOyAvL1RPRE86IGlmIGZjdFxuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKG5hbWUgPT09ICdwcmVjaXNpb24nKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicsIHZhbCk7XG4gICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGNlbGwuZm9ybWF0Py4oIGNlbGwucmF3Q29udGVudCk7IC8vVE9ETzogaWYgZmN0XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCBuYW1lID09PSAnc3BhbicgKSB7XG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHNoZWV0ID0gTElTUy5nZXRMSVNTU3luYyggKGNlbGwuZ2V0Um9vdE5vZGUoKSBhcyBTaGFkb3dSb290KS5ob3N0ICk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoIHZhbFswXSA9PT0gMSAmJiB2YWxbMV0gPT09IDEpIHsgLy8gdW5tZXJnZVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCByID0gK2NlbGwuZ2V0QXR0cmlidXRlKCdyb3dzcGFuJykgPz8gMDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGMgPSArY2VsbC5nZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nKSA/PyAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByOyArK2kpXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgYzsgKytqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gc2hlZXQucmVsYXRpdmVUbyhjZWxsLCBpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGFyZ2V0LmNlbGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgncm93c3BhbicpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgnY29sc3BhbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdyb3dzcGFuJywgYCR7dmFsWzBdfWApO1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgYCR7dmFsWzFdfWApO1xuXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHZhbFswXTsgKytpKVxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdmFsWzFdOyArK2opIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGkgPT09IDAgJiYgaiA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gc2hlZXQucmVsYXRpdmVUbyhjZWxsLCBpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jZWxsID0gY2VsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCB0eXBlb2YgdmFsID09PSBcImJvb2xlYW5cIikge1xuXG4gICAgICAgICAgICAgICAgaWYoIG5hbWUuc3RhcnRzV2l0aCgnYWxpZ25fJykgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYWxpZ25fbGVmdCcpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2FsaWduX2NlbnRlcicpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2FsaWduX3JpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCBuYW1lLnN0YXJ0c1dpdGgoJ3ZhbGlnbl8nKSApIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZ25fdG9wJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWduX21pZGRsZScpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlnbl9ib3R0b20nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUobmFtZSwgdmFsKTtcblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjZWxsLnN0eWxlLnNldFByb3BlcnR5KGAtLSR7bmFtZX1gLCB2YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UHJvcGVydHkobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNmb3JtYXRbbmFtZV07XG4gICAgfVxuICAgIGhhc1Byb3BlcnR5KG5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmFtZSBpbiB0aGlzLiNmb3JtYXQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGV4dHJhY3RGb3JtYXQoY2VsbDogQ2VsbHxDZWxsTGlzdCk6IEZvcm1hdCB7XG4gICAgICAgIFxuICAgICAgICBpZiggY2VsbCBpbnN0YW5jZW9mIENlbGxMaXN0KSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gY2VsbC5jZWxscztcblxuICAgICAgICAgICAgbGV0IGZvcm1hdCA9IEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzWzBdKTtcblxuICAgICAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IGNlbGxzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGYyID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHNbaV0pO1xuXG4gICAgICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gZm9ybWF0LiNmb3JtYXQpXG4gICAgICAgICAgICAgICAgICAgIGlmKCAhIChrZXkgaW4gZjIuI2Zvcm1hdCkgfHwgZjIuI2Zvcm1hdFtrZXldICE9PSBmb3JtYXQuI2Zvcm1hdFtrZXldIClcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBmb3JtYXQuI2Zvcm1hdFtrZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgZm9ybWF0ID0gT2JqZWN0LmZyb21FbnRyaWVzPGFueT4oIFsuLi5jZWxsLmNsYXNzTGlzdC52YWx1ZXMoKV0ubWFwKGUgPT4gW2UsIHRydWVdKSApO1xuICAgICAgICBcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNlbGwuc3R5bGUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBuYW1lID0gY2VsbC5zdHlsZS5pdGVtKGkpO1xuICAgICAgICAgICAgaWYoICEgbmFtZS5zdGFydHNXaXRoKCctLScpIClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIGZvcm1hdFtuYW1lLnNsaWNlKDIpXSA9IGNlbGwuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbHNwYW4gPSArKGNlbGwuZ2V0QXR0cmlidXRlKCdjb2xzcGFuJykgPz8gMSk7XG4gICAgICAgIGNvbnN0IHJvd3NwYW4gPSArKGNlbGwuZ2V0QXR0cmlidXRlKCdyb3dzcGFuJykgPz8gMSk7XG5cbiAgICAgICAgaWYoIGNvbHNwYW4gPiAxIHx8IHJvd3NwYW4gPiAxIClcbiAgICAgICAgICAgIGZvcm1hdC5zcGFuID0gWyByb3dzcGFuLCBjb2xzcGFuIF07XG5cbiAgICAgICAgaWYoICEgKFwiZm9udF9zaXplXCIgaW4gZm9ybWF0KSApXG4gICAgICAgICAgICBmb3JtYXRbJ2ZvbnRfc2l6ZSddID0gJzEwcHQnO1xuXG4gICAgICAgIGlmKCBcImZvcm1hdFwiIGluIGNlbGwpXG4gICAgICAgICAgICBmb3JtYXQuZm9ybWF0ID0gY2VsbC5mb3JtYXQ7XG5cbiAgICAgICAgaWYoIGNlbGwuaGFzQXR0cmlidXRlKCdwcmVjaXNpb24nKSApXG4gICAgICAgICAgICBmb3JtYXQucHJlY2lzaW9uID0gY2VsbC5nZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicpO1xuXG4gICAgICAgIHJldHVybiBuZXcgRm9ybWF0KGZvcm1hdCk7XG4gICAgfVxufSIsIi8vVE9ETzogd2VicGFjayBjb25maWcuLi5cbmltcG9ydCBMSVNTIGZyb20gXCIuLi8uLi8uLi9saWJzL0xJU1NcIjtcbmltcG9ydCB7IENhbGNTaGVldCwgQ2VsbCwgQ2VsbExpc3QsIGRlZmF1bHRGb3JtYXQgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5jb25zdCBjc3MgPSBgXG4gICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYgcHJlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKCAxcmVtICsgOHB4ICsgMnB4ICk7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xpYmVyYXRpb24gU2Fucyc7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5cbmV4cG9ydCBjbGFzcyBDYWxjRm9ybXVsYSBleHRlbmRzIExJU1Moe1xuICAgIGNzc1xufSkge1xuXG4gICAgI2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XG4gICAgI3NoZWV0ICAhOiBDYWxjU2hlZXQ7XG4gICAgI2N1cl9jZWxsOiBDZWxsfG51bGwgPSBudWxsO1xuICAgICNvbklucHV0OiAoZXY6IEV2ZW50KSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCggdGhpcy4jaW5wdXQgKTtcblxuICAgICAgICB0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IHtcblxuICAgICAgICAgICAgaWYoIHRoaXMuI2N1cl9jZWxsID09PSBudWxsIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIC8vdGhpcy4jc2hlZXQuY3Vyc29yLmNvbnRlbnQgPSB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCE7XG4gICAgICAgICAgICB0aGlzLiNzaGVldC5zdGF0ZXMuY2VsbF9lZGl0LnN0YXRlID0gbnVsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsICgpID0+IHtcblxuICAgICAgICAgICAgaWYoIHRoaXMuI2N1cl9jZWxsID09PSBudWxsIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPSB0aGlzLiNjdXJfY2VsbDtcbiAgICAgICAgICAgIC8vdGhpcy4jY3VyX2NlbGwhLnRleHRDb250ZW50ID0gdGhpcy4jaW5wdXQudGV4dENvbnRlbnQhO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmKCB0aGlzLiNjdXJfY2VsbCA9PT0gbnVsbCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLiNjdXJfY2VsbCEudGV4dENvbnRlbnQgPSBkZWZhdWx0Rm9ybWF0KCB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCEgKTtcbiAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudCgnaW5wdXQnLCB7ZGV0YWlsOiB0cnVlfSkgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jb25JbnB1dCA9IChldjogRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBpZiggZXYuZGV0YWlsID09PSB0cnVlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gZGVmYXVsdEZvcm1hdCggdGhpcy4jY3VyX2NlbGwhLnRleHRDb250ZW50ISApO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN5bmNUbyhzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcbiAgICAgICAgY29uc3QgY3Vyc29yID0gdGhpcy4jc2hlZXQuY3Vyc29yO1xuXG4gICAgICAgIGN1cnNvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoXzogYW55KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gY3Vyc29yLmNlbGxzO1xuXG4gICAgICAgICAgICB0aGlzLiNpbnB1dC50b2dnbGVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIGNlbGxzLmxlbmd0aCAhPT0gMCk7XG5cbiAgICAgICAgICAgIGlmKCBjZWxscy5sZW5ndGggPT09IDApIHtcblxuICAgICAgICAgICAgICAgIGlmKCB0aGlzLiNjdXJfY2VsbCAhPT0gbnVsbCApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy4jb25JbnB1dCk7XG4gICAgICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jaW5wdXQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwgPSBjZWxsc1swXTtcbiAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy4jb25JbnB1dCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gZGVmYXVsdEZvcm1hdCggdGhpcy4jY3VyX2NlbGwucmF3Q29udGVudCApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuTElTUy5kZWZpbmUoJ2NhbGMtZm9ybXVsYScsIENhbGNGb3JtdWxhKTsiLCJpbXBvcnQgeyBDYWxjU2hlZXQsIGRlZmF1bHRGb3JtYXQsIFZhbHVlVHlwZSB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbmV4cG9ydCBjbGFzcyBGb3JtdWxhIHtcblxuICAgICNzdHI6IHN0cmluZztcbiAgICAjZXhlYzogKHNoZWV0OiBDYWxjU2hlZXQpID0+IFZhbHVlVHlwZTtcbiAgICAjcmFuZ2VzOiBUb2tlbltdO1xuXG4gICAgY29uc3RydWN0b3Ioc3RyOiBzdHJpbmcsIGV4ZWM6IChzaGVldDogQ2FsY1NoZWV0KSA9PiBWYWx1ZVR5cGUsIHJhbmdlc190b2tlbjogVG9rZW5bXSA9IFtdKSB7XG5cbiAgICAgICAgdGhpcy4jc3RyID0gc3RyO1xuICAgICAgICB0aGlzLiNleGVjID0gZXhlYztcbiAgICAgICAgdGhpcy4jcmFuZ2VzID0gcmFuZ2VzX3Rva2VuO1xuICAgIH1cbiAgICBcbiAgICByZWxhdGl2ZVRvKCBzaGVldDogQ2FsY1NoZWV0LCBkcm93OiBudW1iZXIsIGRjb2w6IG51bWJlcikge1xuICAgICAgICBcbiAgICAgICAgbGV0IG5ld19yYW5nZXMgPSB0aGlzLiNyYW5nZXMubWFwKHIgPT4ge1xuXG4gICAgICAgICAgICAvL1RPRE86IGlmIHJhbmdlLi4uXG4gICAgICAgICAgICBsZXQgcG9zID0gWy4uLnNoZWV0LmNlbGxQb3MoIHNoZWV0LmdldENlbGxzKHIudmFsdWUpLmNlbGxzWzBdICldO1xuICAgIFxuICAgICAgICAgICAgaWYoIHIudmFsdWUubGFzdEluZGV4T2YoJyQnKSA8PSAwIClcbiAgICAgICAgICAgICAgICBwb3NbMF0gKz0gZHJvdztcbiAgICAgICAgICAgIGlmKCByLnZhbHVlWzBdICE9PSAnJCcgKVxuICAgICAgICAgICAgICAgIHBvc1sxXSArPSBkY29sO1xuXG4gICAgICAgICAgICByZXR1cm4gYCR7U3RyaW5nLmZyb21DaGFyQ29kZSg2NStwb3NbMV0tMSl9JHtwb3NbMF19YDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG5ld19mb3JtdWxhID0gXCJcIjtcblxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuI3Jhbmdlcy5sZW5ndGg7ICsraSkge1xuXG4gICAgICAgICAgICBuZXdfZm9ybXVsYSArPSB0aGlzLiNzdHIuc2xpY2Uob2Zmc2V0LCB0aGlzLiNyYW5nZXNbaV0uYmVnKTtcbiAgICAgICAgICAgIG5ld19mb3JtdWxhICs9IG5ld19yYW5nZXNbaV07XG5cbiAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuI3Jhbmdlc1tpXS5lbmQ7XG4gICAgICAgIH1cbiAgICAgICAgbmV3X2Zvcm11bGEgKz0gdGhpcy4jc3RyLnNsaWNlKG9mZnNldCk7XG4gICAgICAgIFxuICAgICAgICAvL2NhbiBiZSBvcHRpbWl6ZWQuLi5cbiAgICAgICAgcmV0dXJuIHBhcnNlX2Zvcm11bGEoIG5ld19mb3JtdWxhICk7XG4gICAgfVxuXG4gICAgZ2V0IHJhbmdlc1Rva2VuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcmFuZ2VzO1xuICAgIH1cblxuICAgIGV4ZWMoc2hlZXQ6IENhbGNTaGVldCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jZXhlYyhzaGVldCk7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzdHI7XG4gICAgfVxufVxuXG50eXBlIFRva2VuID0ge1xuICAgIGJlZzogbnVtYmVyLFxuICAgIGVuZDogbnVtYmVyLFxuICAgIHZhbHVlOiBzdHJpbmcsXG4gICAgdHlwZTogXCJzdHJpbmdcInxcIm51bWJlclwifFwiY2FsbFwifFwicmFuZ2VcInxcIm9wXCJcbn1cblxuXG5mdW5jdGlvbiBleHRyYWN0VG9rZW4oc3RyOiBzdHJpbmcsIG9mZnNldDogbnVtYmVyKSB7XG5cbiAgICB3aGlsZSggWycgJywgJ1xcbicsICdcXHQnXS5pbmNsdWRlcyhzdHJbb2Zmc2V0XSkgKSAvLyBpZ25vcmUgd2hpdGVzcGFjZXNcbiAgICAgICAgKytvZmZzZXQ7XG5cbiAgICBsZXQgdG9rZW46IFBhcnRpYWw8VG9rZW4+ID0ge1xuICAgICAgICBiZWc6IG9mZnNldFxuICAgIH07XG5cbiAgICBpZihzdHJbb2Zmc2V0XSA9PT0gJ1wiJykge1xuICAgICAgICB0b2tlbi50eXBlID0gXCJzdHJpbmdcIjtcbiAgICAgICAgd2hpbGUoIHN0clsrK29mZnNldF0gIT09ICdcIicgJiYgc3RyW29mZnNldC0xXSAhPT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICBpZihvZmZzZXQrMSA+PSBzdHIubGVuZ3RoIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Zvcm11bGEgcGFyc2luZyBlcnJvcicpO1xuICAgICAgICB9XG4gICAgICAgICsrb2Zmc2V0O1xuICAgIH0gZWxzZSBpZiggc3RyW29mZnNldF0gPT09ICcsJyB8fCAoc3RyW29mZnNldF0gPj0gJzAnICYmIHN0cltvZmZzZXRdIDw9ICc5JykgKSB7XG4gICAgICAgIHRva2VuLnR5cGUgPSBcIm51bWJlclwiO1xuICAgICAgICBsZXQgaGFzQ29tbWEgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUoIHN0cltvZmZzZXRdID09PSAnLCcgfHwgc3RyW29mZnNldF0gPj0gJzAnICYmIHN0cltvZmZzZXRdIDw9ICc5JyApIHtcblxuICAgICAgICAgICAgaWYoIHN0cltvZmZzZXRdID09PSAnLCcgKSB7XG4gICAgICAgICAgICAgICAgaWYoaGFzQ29tbWEgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRm9ybXVsYSBwYXJzaW5nIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgaGFzQ29tbWEgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICArK29mZnNldDtcbiAgICAgICAgfVxuXG4gICAgfSBlbHNlIGlmKCBzdHJbb2Zmc2V0XSA9PT0gJyQnIHx8IHN0cltvZmZzZXRdID49ICdBJyAmJiBzdHJbb2Zmc2V0XSA8PSAnWicpIHsgLy8rJFxuICAgICAgICBcbiAgICAgICAgd2hpbGUoIG9mZnNldCA8IHN0ci5sZW5ndGhcbiAgICAgICAgICAgICAgICAmJiAoc3RyW29mZnNldF0gPT09ICckJyB8fCBzdHJbb2Zmc2V0XSA+PSAnQScgJiYgc3RyW29mZnNldF0gPD0gJ1onXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgc3RyW29mZnNldF0gPj0gJzAnICYmIHN0cltvZmZzZXRdIDw9ICc5J1xuICAgICAgICAgICAgICAgICAgICApIClcbiAgICAgICAgICAgICsrb2Zmc2V0O1xuXG4gICAgICAgIHRva2VuLnR5cGUgPSBzdHJbb2Zmc2V0XSA9PT0gJygnID8gJ2NhbGwnIDogJ3JhbmdlJztcblxuICAgICAgICBpZiggc3RyW29mZnNldF0gPT09ICcoJyApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdG9rZW4udHlwZSA9IFwib3BcIjsgLy8gb25seSBvbiBjaGFyID8/P1xuXG4gICAgICAgIGlmKCBzdHJbb2Zmc2V0ICsgMV0gPT09ICc9JykgLy8gPj0gLyA8PVxuICAgICAgICAgICAgKytvZmZzZXQ7XG4gICAgICAgIGVsc2UgaWYoIHN0cltvZmZzZXQgKyAxXSA9PT0gJz4nKSAvLyA8PlxuICAgICAgICAgICAgKytvZmZzZXQ7XG5cbiAgICAgICAgKytvZmZzZXQ7XG4gICAgfVxuXG4gICAgdG9rZW4uZW5kID0gb2Zmc2V0O1xuICAgIHRva2VuLnZhbHVlID0gc3RyLnNsaWNlKHRva2VuLmJlZywgdG9rZW4uZW5kKTtcblxuICAgIHJldHVybiB0b2tlbiBhcyBSZXF1aXJlZDxUb2tlbj47XG59XG5cbmNsYXNzIE5vZGUge1xuXG4gICAgY2hpbGRyZW46IE5vZGVbXTtcbiAgICAjZmN0OiAoc2hlZXQ6IENhbGNTaGVldCwgLi4uYXJnczooVmFsdWVUeXBlKVtdKSA9PiBWYWx1ZVR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihmY3Q6IChzaGVldDogQ2FsY1NoZWV0LCAuLi5hcmdzOihWYWx1ZVR5cGUpW10pID0+IFZhbHVlVHlwZSwgLi4uY2hpbGRyZW46IE5vZGVbXSkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgIGlmKGNoaWxkcmVuID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXVEZcIik7XG4gICAgICAgIHRoaXMuI2ZjdCA9IGZjdDtcbiAgICB9XG5cbiAgICBldmFsKHNoZWV0OiBDYWxjU2hlZXQpOiBWYWx1ZVR5cGUge1xuICAgICAgICBjb25zdCBhcmdzID0gdGhpcy5jaGlsZHJlbi5tYXAoIGMgPT4gYy5ldmFsKHNoZWV0KSApO1xuICAgICAgICByZXR1cm4gdGhpcy4jZmN0KHNoZWV0LCAuLi5hcmdzICk7XG4gICAgfVxuICAgIFxufVxuXG5mdW5jdGlvbiB0b051bWJlcihhOiB1bmtub3duKTogbnVtYmVyIHtcblxuICAgIGlmKGEgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgcmV0dXJuIGEgYXMgdW5rbm93biBhcyBudW1iZXI7XG59XG5cbmNvbnN0IG9wX2ltcGwgPSB7XG4gICAgJyUnOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duKSA9PiB0b051bWJlcihhKS8xMDAsXG4gICAgJ3UuKyc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24pID0+ICt0b051bWJlcihhKSxcbiAgICAndS4tJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93bikgPT4gLXRvTnVtYmVyKGEpLFxuICAgICcqJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93biwgYjogdW5rbm93bikgPT4gdG9OdW1iZXIoYSkqdG9OdW1iZXIoYiksXG4gICAgJy8nOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiB0b051bWJlcihhKS90b051bWJlcihiKSxcbiAgICAnKyc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24sIGI6IHVua25vd24pID0+IHRvTnVtYmVyKGEpK3RvTnVtYmVyKGIpLFxuICAgICctJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93biwgYjogdW5rbm93bikgPT4gdG9OdW1iZXIoYSktdG9OdW1iZXIoYiksXG4gICAgJ14nOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiBNYXRoLnBvdyh0b051bWJlcihhKSx0b051bWJlcihiKSApLFxuICAgICcmJzogKF86IENhbGNTaGVldCwgYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+IGAke2RlZmF1bHRGb3JtYXQoYSl9JHtkZWZhdWx0Rm9ybWF0KGIpfWAsXG4gICAgJz0nOiAgKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPT09IGIsXG4gICAgJzw+JzogKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgIT09IGIsXG4gICAgJz4nOiAgKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPiBiLFxuICAgICc+PSc6IChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhID49IGIsXG4gICAgJzwnOiAgKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPCBiLFxuICAgICc8PSc6IChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhIDw9IGIsXG59IGFzIFJlY29yZDxzdHJpbmcsIChfOiBDYWxjU2hlZXQsIC4uLmFyZ3M6VmFsdWVUeXBlW10pID0+IFZhbHVlVHlwZT47XG5cbi8vIGh0dHBzOi8vaGVscC5saWJyZW9mZmljZS5vcmcvbGF0ZXN0L2VuLVVTL3RleHQvc2NhbGMvMDEvMDQwNjAxOTkuaHRtbFxuY29uc3Qgb3BfcHJpbyA9IFtcbiAgICBbJzonXSwgLy8gcmFuZ2VcbiAgICBbJyEnXSwgLy8gcmFuZ2UgaW50ZXJzZWN0aW9uXG4gICAgWyd+J10sIC8vIHJhbmdlIHVuaW9uXG4gICAgWyd1LisnLCAndS4tJ10sIC8vIHVuYXJ5IC0gZnJvbSByaWdodCB0byBsZWZ0Li4uXG4gICAgWyclJ10sIC8vIHBvc3RmaXgsIC8xMDBcbiAgICBbJ14nXSwgLy8gcG93ZXJcbiAgICBbJyonLCAnLyddLFxuICAgIFsnKycsICctJ10sXG4gICAgWycmJ10sIC8vIHN0cmluZyBjb25jYXRcbiAgICBbJz0nLCAnPD4nLCAnPCcsICc8PScsICc+JywgJz49J10gLy8gY29tcGFyZVxuXTtcblxubGV0IG9wczogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHt9O1xuZm9yKGxldCBpID0gMDsgaSA8IG9wX3ByaW8ubGVuZ3RoOyArK2kpXG4gICAgZm9yKGxldCBvcCBvZiBvcF9wcmlvW2ldIClcbiAgICAgICAgb3BzW29wXSA9IGk7XG5cbmZ1bmN0aW9uIHRva2VubGlzdDJUcmVlKHRva2VuczogVG9rZW5bXSk6IE5vZGUge1xuXG4gICAgaWYoIHRva2Vucy5sZW5ndGggPT09IDEpIHtcblxuICAgICAgICBpZiggdG9rZW5zWzBdLnR5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IG5iID0gK3Rva2Vuc1swXS52YWx1ZS5yZXBsYWNlKCcsJywgJy4nKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTm9kZSggKCkgPT4gbmIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCB0b2tlbnNbMF0udHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgY29uc3Qgc3RyID0gdG9rZW5zWzBdLnZhbHVlLnNsaWNlKDEsLTEpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBOb2RlKCAoKSA9PiBzdHIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCB0b2tlbnNbMF0udHlwZSA9PT0gXCJyYW5nZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vZGUoIChzaGVldDogQ2FsY1NoZWV0KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsZXQgcmF3ID0gc2hlZXQuZ2V0Q2VsbHModG9rZW5zWzBdLnZhbHVlKS5jZWxsc1swXS5yYXdDb250ZW50O1xuXG4gICAgICAgICAgICAgICAgaWYoIHJhdyBpbnN0YW5jZW9mIEZvcm11bGEpXG4gICAgICAgICAgICAgICAgICAgIHJhdyA9IHJhdy5leGVjKHNoZWV0KTsgLy8gVE9ETzogY2FjaGUgcmVzdWx0XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmF3IGFzIFZhbHVlVHlwZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIj8/P1wiKTtcbiAgICB9XG5cbiAgICBpZih0b2tlbnNbMF0udmFsdWUgPT09ICcoJyAmJiB0b2tlbnNbdG9rZW5zLmxlbmd0aC0xXS52YWx1ZSA9PT0gJyknKVxuICAgICAgICByZXR1cm4gdG9rZW5saXN0MlRyZWUodG9rZW5zLnNsaWNlKDEsLTEpICk7XG5cbiAgICBsZXQgY3VyID0ge1xuICAgICAgICBwcmlvcml0eTogb3BfcHJpby5sZW5ndGgsXG4gICAgICAgIGlkeCAgICAgOiAtMVxuICAgIH07XG5cbiAgICBmb3IobGV0IGkgPSB0b2tlbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgaWYoIHRva2Vuc1tpXS50eXBlICE9PSBcIm9wXCIgKSAvLyBjYWxsIG5vdCBoYW5kbGVkIHlldC4uLlxuICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgaWYoIHRva2Vuc1tpXS52YWx1ZSA9PT0gJyknICkgeyAvLyBnbyB0byBmaXJzdCAnKCdcbiAgICAgICAgICAgIGkgPSB0b2tlbnMuZmluZEluZGV4KCB0ID0+IHQudHlwZSA9PT0gJ29wJyAmJiB0LnZhbHVlID09PSAnKCcpO1xuXG4gICAgICAgICAgICBpZiggaSA9PT0gMClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC0taTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFzc2VydHMgaWYgdW5hcnkgb3AuXG4gICAgICAgIGlmKCB0b2tlbnNbaV0udmFsdWUgPT09ICctJyB8fCB0b2tlbnNbaV0udmFsdWUgPT09ICcrJyApIHtcblxuICAgICAgICAgICAgaWYoIGkgPT09IDAgfHwgdG9rZW5zW2ktMV0udHlwZSA9PT0gXCJvcFwiICkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdV9vcCA9IGB1LiR7dG9rZW5zW2ldLnZhbHVlfWA7XG4gICAgICAgICAgICAgICAgdG9rZW5zW2ldLnZhbHVlID0gdV9vcDtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IG9wc1t1X29wXTtcblxuICAgICAgICAgICAgICAgIC8vIHByaW9yaXR5IGlzIHJldmVyc2VkICsgZXZhbHVhdGVkIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAgICAgICAgICAgICAgICBpZiggcHJpb3JpdHkgPD0gY3VyLnByaW9yaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGN1ci5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICAgICAgICAgICAgICBjdXIuaWR4ICAgICAgPSBpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBvcHNbdG9rZW5zW2ldLnZhbHVlXTtcblxuICAgICAgICAvLyBwcmlvcml0eSBpcyByZXZlcnNlZC5cbiAgICAgICAgaWYoIHByaW9yaXR5IDwgY3VyLnByaW9yaXR5KSB7XG4gICAgICAgICAgICBjdXIucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgICAgIGN1ci5pZHggICAgICA9IGk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiggY3VyLmlkeCA9PT0gLTEpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignPz8/Jyk7XG5cbiAgICBsZXQgb3BfdG9rZW4gPSB0b2tlbnNbY3VyLmlkeF07XG4gICAgaWYoIG9wX3Rva2VuLnZhbHVlID09PSAnJScgKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgID0gdG9rZW5zLnNsaWNlKDAsIGN1ci5pZHgpO1xuICAgICAgICBjb25zdCBvcCA9IG9wX2ltcGxbb3BfdG9rZW4udmFsdWUgYXMga2V5b2YgdHlwZW9mIG9wX2ltcGxdO1xuICAgICAgICByZXR1cm4gbmV3IE5vZGUoXG4gICAgICAgICAgICBvcCxcbiAgICAgICAgICAgIHRva2VubGlzdDJUcmVlKGxlZnQpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaWYoIG9wX3Rva2VuLnZhbHVlID09PSAndS4tJyB8fCAgb3BfdG9rZW4udmFsdWUgPT09ICd1LisnICkge1xuXG4gICAgICAgIGNvbnN0IHJpZ2h0ICA9IHRva2Vucy5zbGljZShjdXIuaWR4KzEpO1xuICAgICAgICBjb25zdCBvcCA9IG9wX2ltcGxbb3BfdG9rZW4udmFsdWUgYXMga2V5b2YgdHlwZW9mIG9wX2ltcGxdO1xuICAgICAgICByZXR1cm4gbmV3IE5vZGUoXG4gICAgICAgICAgICBvcCxcbiAgICAgICAgICAgIHRva2VubGlzdDJUcmVlKHJpZ2h0KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGxlZnQgID0gdG9rZW5zLnNsaWNlKDAsIGN1ci5pZHgpO1xuICAgIGNvbnN0IHJpZ2h0ID0gdG9rZW5zLnNsaWNlKGN1ci5pZHgrMSk7XG5cbiAgICBjb25zdCBvcCA9IG9wX2ltcGxbb3BfdG9rZW4udmFsdWUgYXMga2V5b2YgdHlwZW9mIG9wX2ltcGxdO1xuXG4gICAgcmV0dXJuIG5ldyBOb2RlKFxuICAgICAgICBvcCxcbiAgICAgICAgdG9rZW5saXN0MlRyZWUobGVmdCksXG4gICAgICAgIHRva2VubGlzdDJUcmVlKHJpZ2h0KVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZV9mb3JtdWxhKHN0cjpzdHJpbmcpIHtcblxuICAgIGxldCBvZmZzZXQgPSAxO1xuICAgIGxldCB0b2tlbnMgPSBuZXcgQXJyYXk8VG9rZW4+KCk7XG5cbiAgICB3aGlsZSggb2Zmc2V0IDwgc3RyLmxlbmd0aCkge1xuICAgICAgICBsZXQgY3VyVG9rZW4gPSBleHRyYWN0VG9rZW4oc3RyLCBvZmZzZXQpO1xuICAgICAgICB0b2tlbnMucHVzaCggY3VyVG9rZW4gKTtcbiAgICAgICAgb2Zmc2V0ID0gY3VyVG9rZW4uZW5kO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSB0b2tlbmxpc3QyVHJlZSh0b2tlbnMpITtcblxuICAgIGNvbnN0IHJhbmdlcyA9IHRva2Vucy5maWx0ZXIodCA9PiB0LnR5cGUgPT09IFwicmFuZ2VcIiApO1xuXG4gICAgcmV0dXJuIG5ldyBGb3JtdWxhKHN0ciwgKHNoZWV0OiBDYWxjU2hlZXQpID0+IG5vZGUuZXZhbChzaGVldCksIHJhbmdlcyApO1xufSIsIi8vVE9ETzogd2VicGFjayBjb25maWcuLi5cbmltcG9ydCBMSVNTIGZyb20gXCIuLi8uLi8uLi9saWJzL0xJU1NcIjtcbmltcG9ydCB7IENhbGNTaGVldCwgQ2VsbExpc3QsIGRlZmF1bHRGb3JtYXQgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG4vL1RPRE86IHN5bnRheCBoaWdobGlnaHQgOylcblxuY29uc3QgY3NzID0gYFxuICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAmIHByZSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xuICAgICAgICAgICAgbWluLWhlaWdodDogY2FsYyggMXJlbSArIDhweCArIDJweCApO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB0O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMaWJlcmF0aW9uIFNhbnMnO1xuICAgICAgICB9XG4gICAgfVxuYDtcblxuZXhwb3J0IGNsYXNzIFBsYWdlRm9ybXVsYSBleHRlbmRzIExJU1Moe1xuICAgIGNzc1xufSkge1xuXG4gICAgI2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKCB0aGlzLiNpbnB1dCApO1xuICAgICAgICB0aGlzLiNpbnB1dC50b2dnbGVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuXG4gICAgICAgIHRoaXMuI2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXYpID0+IHtcbiAgICAgICAgICAgIGlmKGV2LmNvZGUgIT09ICdFbnRlcicpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBldi5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy4jc2hlZXQuZ2V0Q2VsbHModGhpcy4jaW5wdXQudGV4dENvbnRlbnQhKS5jZWxscztcblxuICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uYWRkKCAuLi5zZWxlY3RlZCApO1xuXG4gICAgICAgICAgICB0aGlzLiNzaGVldC5jdXJzb3IuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LmN1cnNvci5hZGQoIHNlbGVjdGVkWzBdICk7XG5cbiAgICAgICAgICAgIHRoaXMuI2lucHV0LmJsdXIoKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvL1RPRE8uLi4uXG4gICAgICAgIHRoaXMuI2lucHV0LnRvZ2dsZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgLyp0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cbiAgICAgICAgfSk7Ki9cbiAgICB9XG5cbiAgICAjc2hlZXQhOiBDYWxjU2hlZXQ7XG5cbiAgICBzeW5jVG8oc2hlZXQ6IENhbGNTaGVldCkge1xuXG4gICAgICAgIHRoaXMuI3NoZWV0ID0gc2hlZXQ7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gc2hlZXQuc2VsZWN0aW9uO1xuXG4gICAgICAgIHNlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoXzogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCA9IHNlbGVjdGlvbi5wbGFnZV9uYW1lID8/IFwiXCI7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTElTUy5kZWZpbmUoJ2NhbGMtcGxhZ2UnLCBQbGFnZUZvcm11bGEpOyIsImltcG9ydCB7IENhbGNTaGVldCwgQ2VsbCB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbmV4cG9ydCBjbGFzcyBQbGFnZVNlbGVjdG9yIHtcblxuICAgICN1cGRhdGVTZWxlY3Rpb24oKSB7XG5cbiAgICAgICAgbGV0IHNlbGVjdGVkX2NlbGxzID0gdGhpcy4jc2hlZXQuZ2V0UmFuZ2UoIHRoaXMuI29yaWdfcG9zLCB0aGlzLiNmaW5hbF9wb3MgKS5jZWxscztcblxuICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uY2xlYXIoKTsgLy8gd2UgYWRkIGl0Li4uXG5cbiAgICAgICAgaWYoIHRoaXMuI2lzQ3RybCApIHtcblxuICAgICAgICAgICAgLy8gcmVzdG9yZSBpbml0aWFsIHN0YXRlLi4uXG4gICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uYWRkKC4uLnRoaXMuI3ByZXZfc2VsZWN0aW9uKTtcblxuICAgICAgICAgICAgLy9UT0RPIG9ubHkgb3JpZ190YXJnZXQuLi5cbiAgICAgICAgICAgIGlmKHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5oYXMoIC4uLnNlbGVjdGVkX2NlbGxzICkgKVxuICAgICAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5yZW1vdmUoIC4uLnNlbGVjdGVkX2NlbGxzICk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmFkZCggLi4uc2VsZWN0ZWRfY2VsbHMgKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmFkZCggLi4uc2VsZWN0ZWRfY2VsbHMgKTtcbiAgICB9XG5cbiAgICAjaXNDdHJsICAgICAgICAhOiBib29sZWFuO1xuICAgICNzaGVldCAgICAgICAgICA6IENhbGNTaGVldDtcbiAgICAjb3JpZ190YXJnZXQgICAhOiBIVE1MRWxlbWVudDtcbiAgICAjb3JpZ19wb3MgICAgICAhOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgICNmaW5hbF9wb3MgICAgICE6IFtudW1iZXIsIG51bWJlcl07XG4gICAgI3ByZXZfc2VsZWN0aW9uITogQ2VsbFtdO1xuXG4gICAgI2V2MnBvcyhldjogTW91c2VFdmVudCk6IFtudW1iZXIsbnVtYmVyXSB7XG5cbiAgICAgICAgY29uc3QgY29scyA9IFsuLi50aGlzLiNzaGVldC50Ym9keS5jaGlsZHJlblswXS5jaGlsZHJlbl07XG4gICAgICAgIGxldCBjb2xfaWQ7XG4gICAgICAgIGZvcihjb2xfaWQgPSBjb2xzLmxlbmd0aC0xOyBjb2xfaWQgPj0gMDsgLS1jb2xfaWQpIHtcbiAgICAgICAgICAgIGlmKCBldi5jbGllbnRYID49IGNvbHNbY29sX2lkXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS54IClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3Qgcm93cyA9IFsuLi50aGlzLiNzaGVldC50Ym9keS5jaGlsZHJlbl0ubWFwKCBlID0+IGUuY2hpbGRyZW5bMF0gKTtcbiAgICAgICAgbGV0IHJvd19pZDtcbiAgICAgICAgZm9yKHJvd19pZCA9IHJvd3MubGVuZ3RoLTE7IHJvd19pZCA+PSAwOyAtLXJvd19pZCkge1xuICAgICAgICAgICAgaWYoIGV2LmNsaWVudFkgPj0gcm93c1tyb3dfaWRdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkgKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtyb3dfaWQsIGNvbF9pZF07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCkge1xuXG4gICAgICAgIHRoaXMuI3NoZWV0ID0gc2hlZXQ7XG5cbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKSE7XG5cbiAgICAgICAgY29uc3Qgb25fbW91c2VfbW92ZSA9IChldjogTW91c2VFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLiNmaW5hbF9wb3MgPSB0aGlzLiNldjJwb3MoZXYpO1xuXG4gICAgICAgICAgICB0aGlzLiN1cGRhdGVTZWxlY3Rpb24oKTtcbiAgICAgICAgfTtcblxuICAgICAgICBzaGVldC5jdXJzb3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnJlcGxhY2VBbGwoIHNoZWV0LmdldFZpc2libGVDZWxsKHNoZWV0LmN1cnNvcikgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBzaGVldC5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2Ok1vdXNlRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgaWYoIHNoZWV0LnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPT09IHRhcmdldCApICAvLyBhIGNlbGwgYmVpbmcgZWRpdGVkLlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlmKCAhIFtcIlRIXCIsIFwiVERcIl0uaW5jbHVkZXMoIHRhcmdldC50YWdOYW1lICkgKS8vIC4uLlxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lID09PSBcIlRIXCIgJiYgdGFyZ2V0LnRleHRDb250ZW50ID09PSBcIlwiICkgeyAvLyBtb3VzZW1vdmUgZG9lcyBub3RoaW5nLlxuXG4gICAgICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVmID0gYEExOiR7dGhpcy4jc2hlZXQucG9zMnJlZih0aGlzLiNzaGVldC5uYlJvd3MsIHRoaXMuI3NoZWV0Lm5iQ29scyl9YDtcbiAgICAgICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uYWRkKCAuLi50aGlzLiNzaGVldC5nZXRDZWxscyhyZWYpLmNlbGxzICk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuI2lzQ3RybCAgICAgICAgID0gZXYuY3RybEtleTtcbiAgICAgICAgICAgIHRoaXMuI29yaWdfdGFyZ2V0ICAgID0gdGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy4jb3JpZ19wb3MgICAgICAgPSB0aGlzLiNldjJwb3MoZXYpOyAvLyBDYW4gYmUgVEguLi5cbiAgICAgICAgICAgIHRoaXMuI2ZpbmFsX3BvcyAgICAgID0gdGhpcy4jb3JpZ19wb3M7XG4gICAgICAgICAgICB0aGlzLiNwcmV2X3NlbGVjdGlvbiA9IHNoZWV0LnNlbGVjdGlvbi5jZWxscy5zbGljZSgpO1xuXG4gICAgICAgICAgICB0aGlzLiN1cGRhdGVTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25fbW91c2VfbW92ZSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWFpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbl9tb3VzZV9tb3ZlKTtcbiAgICAgICAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxufSIsIi8vVE9ETzogd2VicGFjayBjb25maWcuLi5cbmltcG9ydCBMSVNTIGZyb20gXCIuLi8uLi8uLi9saWJzL0xJU1NcIjtcblxuLy9AdHMtaWdub3JlXG5pbXBvcnQgY3NzIGZyb20gXCIhIXJhdy1sb2FkZXIhLi9pbmRleC5jc3NcIjtcblxuZXhwb3J0IHR5cGUgVmFsdWVUeXBlID0gc3RyaW5nfG51bWJlcnxEYXRlfGJvb2xlYW47XG5leHBvcnQgdHlwZSBSYXdDb250ZW50VHlwZSA9IFZhbHVlVHlwZXxGb3JtdWxhO1xuXG5leHBvcnQgdHlwZSBDZWxsID0gSFRNTFRhYmxlQ2VsbEVsZW1lbnQgJiB7XG4gICAgcmF3Q29udGVudDogUmF3Q29udGVudFR5cGUsXG4gICAgZm9ybWF0OiAodGhpczogQ2VsbCwgdjogc3RyaW5nfG51bWJlcikgPT4gc3RyaW5nLFxuICAgIGlzX3JvOiBib29sZWFuXG59O1xuXG5mdW5jdGlvbiBpc0FjdGl2ZSh0YXJnZXQ6IEhUTUxFbGVtZW50KSB7XG5cbiAgICByZXR1cm4gdGFyZ2V0Lm1hdGNoZXMoJzpmb2N1cycpO1xuLypcbiAgICBsZXQgYWN0aXZlID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgIHdoaWxlKCBhY3RpdmU/LnNoYWRvd1Jvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290IClcbiAgICAgICAgYWN0aXZlID0gYWN0aXZlLnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudDtcblxuICAgIHJldHVybiBhY3RpdmUgPT09IHRhcmdldDsqL1xufVxuXG5mdW5jdGlvbiBvbklucHV0KGV2OiBFdmVudCkge1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjEyMzQ3NDEvcGxhY2UtY2FyZXQtYmFjay13aGVyZS1pdC13YXMtYWZ0ZXItY2hhbmdpbmctaW5uZXJodG1sLW9mLWEtY29udGVudGVkaXRhYmxlLWVsZW1cblxuICAgIGxldCBycmFuZ2UgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkhLmdldFJhbmdlQXQoMCk7XG4gICAgbGV0IGMgPSBycmFuZ2Uuc3RhcnRPZmZzZXQ7XG5cbiAgICAvL2xldCB0ZXh0ID0gXCJcIjtcbiAgICBsZXQgbGVuZ3RoID0gMDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFyZ2V0LmNoaWxkTm9kZXMubGVuZ3RoOyArK2kpIHtcblxuICAgICAgICBsZXQgY2hpbGQgPSB0YXJnZXQuY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgaWYoIGNoaWxkLm5vZGVUeXBlICE9PSBOb2RlLlRFWFRfTk9ERSlcbiAgICAgICAgICAgIGNoaWxkID0gY2hpbGQuY2hpbGROb2Rlc1swXTtcblxuICAgICAgICBpZiggcnJhbmdlLnN0YXJ0Q29udGFpbmVyID09PSBjaGlsZCApIHtcbiAgICAgICAgICAgIC8vdGV4dCArPSBwLmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQhLnNsaWNlKDAsIGMpO1xuICAgICAgICAgICAgbGVuZ3RoICs9IGM7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvL3RleHQgKz0gcC5jaGlsZE5vZGVzW2ldLnRleHRDb250ZW50O1xuICAgICAgICBsZW5ndGggKz0gdGFyZ2V0LmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQhLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgaW5uZXJIVE1MXG4gICAgdGFyZ2V0LnRleHRDb250ZW50ID0gdGFyZ2V0LnRleHRDb250ZW50O1xuXG4gICAgbGV0IGNoaWxkITogQ2hpbGROb2RlO1xuICAgIGxldCBpO1xuICAgIGZvcihpID0gMDsgaSA8IHRhcmdldC5jaGlsZE5vZGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmKCBsZW5ndGggPD0gdGFyZ2V0LmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQhLmxlbmd0aCApIHtcbiAgICAgICAgICAgIGNoaWxkID0gdGFyZ2V0LmNoaWxkTm9kZXNbaV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBsZW5ndGggLT0gdGFyZ2V0LmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQhLmxlbmd0aDtcbiAgICB9XG5cbiAgICBpZiggY2hpbGQubm9kZVR5cGUgIT09IE5vZGUuVEVYVF9OT0RFKVxuICAgICAgICBjaGlsZCA9IGNoaWxkLmNoaWxkTm9kZXNbMF07XG5cbiAgICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkhO1xuXG4gICAgcmFuZ2Uuc2V0U3RhcnQoY2hpbGQsIGxlbmd0aCk7XG4gICAgcmFuZ2UuY29sbGFwc2UodHJ1ZSk7XG4gICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgIHNlbC5hZGRSYW5nZShyYW5nZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0Rm9ybWF0KHZhbHVlOiBSYXdDb250ZW50VHlwZSwgcHJlYzogbnVsbHxudW1iZXIgPSBudWxsKSB7XG5cbiAgICAvL1RPRE8uLi5cblxuICAgIGlmKCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpXG4gICAgICAgIHJldHVybiBgJHsrdmFsdWUudG9QcmVjaXNpb24oNyl9YC5yZXBsYWNlKCcuJywgJywnKTtcblxuICAgIGlmKCB0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKVxuICAgICAgICByZXR1cm4gdmFsdWUgPyAnVlJBSScgOiAnRkFVWCc7XG5cbiAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiKTtcbiAgICB9XG4gICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRm9ybXVsYSkge1xuICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSW5wdXQoIHN0cjogc3RyaW5nICk6IFJhd0NvbnRlbnRUeXBlIHtcblxuICAgIGlmKHN0ciA9PT0gJ1ZSQUknKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBpZihzdHIgPT09ICdGQVVYJylcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYoc3RyLnRyaW0oKSA9PT0gJycpXG4gICAgICAgIHJldHVybiBzdHI7XG5cbiAgICBpZihzdHJbMF0gPT09IFwiPVwiKSB7XG4gICAgICAgIHJldHVybiBwYXJzZV9mb3JtdWxhKHN0cik7XG4gICAgfVxuXG4gICAgbGV0IHRlc3RfbnVtYmVyID0gTnVtYmVyKCBzdHIucmVwbGFjZSgnLCcsICcuJykgKTtcbiAgICBpZiggISBOdW1iZXIuaXNOYU4oIHRlc3RfbnVtYmVyICkgKVxuICAgICAgICByZXR1cm4gdGVzdF9udW1iZXI7XG5cbiAgICBjb25zdCBwYXJ0cyA9IHN0ci5zcGxpdCgnLycpO1xuICAgIGlmKHBhcnRzLmxlbmd0aCA8PSAzKSB7XG5cbiAgICAgICAgbGV0IHRlc3RfZGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgK3BhcnRzWzJdID8/IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgICtwYXJ0c1sxXS0xLFxuICAgICAgICAgICAgK3BhcnRzWzBdXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYoIHRlc3RfZGF0ZS50b1N0cmluZygpICE9PSBcIkludmFsaWQgRGF0ZVwiIClcbiAgICAgICAgICAgIHJldHVybiB0ZXN0X2RhdGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbn1cblxuY2xhc3MgU3RhdGU8VD4ge1xuXG4gICAgI3N0YXRlIDogVHxudWxsID0gbnVsbDtcbiAgICAjdGFyZ2V0OiBFdmVudFRhcmdldDtcbiAgICAjbmFtZSAgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQ6IEV2ZW50VGFyZ2V0LCBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy4jdGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLiNuYW1lICAgPSBuYW1lO1xuICAgIH1cblxuICAgIGdldCBzdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3N0YXRlO1xuICAgIH1cblxuICAgIHNldCBzdGF0ZShzdGF0ZTogVHxudWxsKSB7XG5cbiAgICAgICAgaWYoIHRoaXMuI3N0YXRlID09PSBzdGF0ZSlcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBsZXQgcHJldl9zdGF0ZSA9IHRoaXMuI3N0YXRlO1xuICAgICAgICB0aGlzLiNzdGF0ZSA9IHN0YXRlO1xuICAgICAgICBcblxuICAgICAgICBpZiggcHJldl9zdGF0ZSAhPT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMuI3RhcmdldC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoYCR7dGhpcy4jbmFtZX1fZW5kYCwge2RldGFpbDogcHJldl9zdGF0ZX0pICk7ICAgICAgICAgICAgXG5cbiAgICAgICAgaWYoIHN0YXRlICE9PSBudWxsIClcbiAgICAgICAgICAgIHRoaXMuI3RhcmdldC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoYCR7dGhpcy4gI25hbWV9X3N0YXJ0YCwge2RldGFpbDogc3RhdGV9KSApO1xuICAgIH1cbn1cblxuY29uc3QgU3RhdGVzID0ge1xuICAgIFwiY2VsbF9lZGl0XCI6IFN0YXRlPENlbGw+LFxuICAgIFwicmVjb3B5XCIgICA6IFN0YXRlPENlbGxMaXN0PlxuIH0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjbGFzcyBDYWxjU2hlZXQgZXh0ZW5kcyBMSVNTKHtcbiAgICBjc3MsXG4gICAgYXR0cmlidXRlczogW1wiY29sc1wiLCBcInJvd3NcIiwgXCJyb1wiXVxufSkge1xuXG4gICAgc3RhdGVzID0gT2JqZWN0LmZyb21FbnRyaWVzKCBPYmplY3QuZW50cmllcyhTdGF0ZXMpLm1hcCggKFtuLHNdKSA9PiBbbiwgbmV3IHModGhpcy5ob3N0LCBuKV0gYXMgY29uc3QgKSk7XG5cblxuICAgIC8vVE9ETzogUk8gcHJvcCA/XG4gICAgI2N1cnNvciAgICA9IG5ldyBDZWxsTGlzdCh0aGlzLCBbXSk7XG4gICAgI3NlbGVjdGlvbjogQ2VsbExpc3QgPSBuZXcgQ2VsbExpc3QodGhpcywgW10pO1xuICAgICNwbGFnZV9zZWxlY3RvciA9IG5ldyBQbGFnZVNlbGVjdG9yKHRoaXMpO1xuXG4gICAgI2Zvcm1hdF9tbmdyID0gbmV3IEZvcm1hdE1hbmFnZXIodGhpcyk7XG5cbiAgICBnZXQgY3Vyc29yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY3Vyc29yO1xuICAgIH1cbiAgICBnZXQgc2VsZWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jc2VsZWN0aW9uO1xuICAgIH1cblxuICAgIG92ZXJyaWRlIGdldCBjb250ZW50KCkge1xuICAgICAgICByZXR1cm4gc3VwZXIuY29udGVudDtcbiAgICB9XG5cbiAgICBzZXRSZWN0KHRhcmdldDogSFRNTEVsZW1lbnQsIFt4LHksdyxoXTogcmVhZG9ubHkgW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0pIHtcblxuICAgICAgICBjb25zdCB0Ymxfb2Zmc2V0ID0gdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJykhLm9mZnNldFRvcDtcblxuICAgICAgICB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcgICAsIGAke3RibF9vZmZzZXQgKyB5fXB4YCk7XG4gICAgICAgIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eSgnaGVpZ2h0JywgYCR7aH1weGApO1xuXG4gICAgICAgIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eSgnbGVmdCcgICAsIGAke3h9cHhgKTtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KCd3aWR0aCcsIGAke3d9cHhgKTtcblxuICAgIH1cblxuICAgIGdldFJlY3QoY2VsbHM6IENlbGxMaXN0fENlbGxbXSkge1xuXG4gICAgICAgIGNlbGxzID0gXCJjZWxsc1wiIGluIGNlbGxzID8gY2VsbHMuY2VsbHMgOiBjZWxscztcblxuICAgICAgICBjb25zdCBzdGFydCA9IGNlbGxzWzBdO1xuICAgICAgICBjb25zdCBlbmQgICA9IGNlbGxzW2NlbGxzLmxlbmd0aC0xXTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBzdGFydC5vZmZzZXRMZWZ0LFxuICAgICAgICAgICAgc3RhcnQub2Zmc2V0VG9wLFxuICAgICAgICAgICAgZW5kLm9mZnNldExlZnQgKyBlbmQuY2xpZW50V2lkdGggLSBzdGFydC5vZmZzZXRMZWZ0LFxuICAgICAgICAgICAgZW5kLm9mZnNldFRvcCArIGVuZC5jbGllbnRIZWlnaHQgLSBzdGFydC5vZmZzZXRUb3AgKyAxXG4gICAgICAgIF0gYXMgY29uc3Q7XG4gICAgfVxuXG4gICAgcmVsYXRpdmVUbyhjZWxsOiBDZWxsLCByb3dfZGlmZjogbnVtYmVyLCBjb2xfZGlmZjogbnVtYmVyKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgW3JvdywgY29sXSA9IHRoaXMuY2VsbFBvcyhjZWxsKTtcblxuICAgICAgICByb3cgKz0gcm93X2RpZmY7XG4gICAgICAgIGNvbCArPSBjb2xfZGlmZjtcblxuICAgICAgICAvLyBmb3Igbm9ybWFsIDogZ2V0IHN0dWNrIGluc2lkZSBncmlkLlxuICAgICAgICBpZiggcm93IDwgMSlcbiAgICAgICAgICAgIHJvdyA9IDE7XG4gICAgICAgIGlmKCByb3cgPj0gdGhpcy4jdGJvZHkuY2hpbGRyZW4ubGVuZ3RoIClcbiAgICAgICAgICAgIHJvdyA9IHRoaXMuI3Rib2R5LmNoaWxkcmVuLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgaWYoIGNvbCA8IDEpXG4gICAgICAgICAgICBjb2wgPSAxO1xuICAgICAgICBpZiggY29sID49IHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW4ubGVuZ3RoIClcbiAgICAgICAgICAgIGNvbCA9IHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW4ubGVuZ3RoIC0gMTtcblxuICAgICAgICByZXR1cm4gdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlbltjb2xdIGFzIENlbGw7XG4gICAgfVxuXG4gICAgLy9UT0RPOiAyRC4uLlxuICAgICNwYXN0ZWJpbjogQ2VsbExpc3QgfCBudWxsID0gbnVsbDtcblxuICAgICNmb3JtdWxhX3JlZnMgPSBuZXcgQXJyYXk8Rm9ybXVsYVJlZj4oKTtcbiAgICAjZ2V0Rm9ybXVsYVJlZihpOiBudW1iZXIpIHtcbiAgICAgICAgd2hpbGUoIGkgPj0gdGhpcy4jZm9ybXVsYV9yZWZzLmxlbmd0aClcbiAgICAgICAgICAgIHRoaXMuI2Zvcm11bGFfcmVmcy5wdXNoKCBuZXcgRm9ybXVsYVJlZih0aGlzKSApO1xuXG4gICAgICAgIHJldHVybiB0aGlzLiNmb3JtdWxhX3JlZnNbaV07XG4gICAgfVxuICAgICNjbGVhckZvcm11bGFSZWZzKCkge1xuICAgICAgICBmb3IobGV0IHJlZiBvZiB0aGlzLiNmb3JtdWxhX3JlZnMpXG4gICAgICAgICAgICByZWYuc2V0UmFuZ2UobnVsbCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgY29uc3QgY3Vyc29yID0gbmV3IFJhbmdlT3ZlcmxheSh0aGlzLCBcImN1cnNvclwiKTtcbiAgICAgICAgY29uc3QgcmVjb3B5ID0gbmV3IFJlY29weUhhbmRsZSh0aGlzKTtcbiAgICAgICAgY29uc3QgY29weSAgID0gbmV3IFJhbmdlT3ZlcmxheSh0aGlzLCBcImNvcHlfaGlnaGxpZ2h0XCIpO1xuXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKSE7XG5cbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ2NlbGxfZWRpdF9lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNjbGVhckZvcm11bGFSZWZzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBsYXN0X3JlY29weV90YXJnZXQ6IENlbGx8bnVsbCA9IG51bGw7XG4gICAgICAgIGxldCBsYXN0X3JlY29weV9kaXIgICA6IFtudW1iZXIsIG51bWJlcl18bnVsbCA9IG51bGxcblxuICAgICAgICBjb25zdCBvbl9yZWNvcHlfbW92ZSA9IChldjogTW91c2VFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICBsZXQgY2VsbHMgPSAodGhpcy5zdGF0ZXMucmVjb3B5LnN0YXRlIGFzIENlbGxMaXN0KS5jZWxscztcbiAgICAgICAgICAgIGNvbnN0IHNyYyA9IGNlbGxzW2NlbGxzLmxlbmd0aC0xXTtcblxuICAgICAgICAgICAgbGV0IHBvcyA9IHNyYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgICAgbGV0IGRfcHggPSBldi5jbGllbnRYIC0gKHBvcy54ICsgcG9zLndpZHRoIC8yKTtcbiAgICAgICAgICAgIGxldCBkX3B5ID0gZXYuY2xpZW50WSAtIChwb3MueSArIHBvcy5oZWlnaHQvMik7XG5cbiAgICAgICAgICAgIGxldCBkX3ggPSAwO1xuICAgICAgICAgICAgbGV0IGRfeSA9IE1hdGguc2lnbihkX3B5KTtcblxuICAgICAgICAgICAgaWYoIE1hdGguYWJzKGRfcHgpID4gTWF0aC5hYnMoZF9weSkgKSB7XG4gICAgICAgICAgICAgICAgZF94ID0gTWF0aC5zaWduKGRfcHgpO1xuICAgICAgICAgICAgICAgIGRfeSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBwcmV2ID0gc3JjO1xuICAgICAgICAgICAgbGV0IGN1ciAgPSBzcmM7XG5cbiAgICAgICAgICAgIGxldCBkaWZmX3gsIGRpZmZfeTtcblxuICAgICAgICAgICAgZG8ge1xuXG4gICAgICAgICAgICAgICAgcHJldj0gY3VyO1xuICAgICAgICAgICAgICAgIGN1ciA9IHRoaXMucmVsYXRpdmVUbyhwcmV2LCBkX3ksIGRfeCk7XG5cbiAgICAgICAgICAgICAgICBpZiggY3VyID09PSBwcmV2KVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGxldCBwb3NfY3VyID0gY3VyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIGRpZmZfeCA9IGV2LmNsaWVudFggLSAocG9zX2N1ci54ICsgcG9zX2N1ci53aWR0aCAvMik7XG4gICAgICAgICAgICAgICAgZGlmZl95ID0gZXYuY2xpZW50WSAtIChwb3NfY3VyLnkgKyBwb3NfY3VyLmhlaWdodC8yKTtcblxuICAgICAgICAgICAgfSB3aGlsZSggZGlmZl94ICogZF94ICsgZGlmZl95ICogZF95ID4gMCApO1xuXG4gICAgICAgICAgICBsYXN0X3JlY29weV90YXJnZXQgPSBwcmV2O1xuICAgICAgICAgICAgbGFzdF9yZWNvcHlfZGlyICAgID0gW2RfeCxkX3ldO1xuXG4gICAgICAgICAgICBsZXQgYmVnID0gc3JjO1xuICAgICAgICAgICAgbGV0IGVuZCA9IHByZXY7XG4gICAgICAgICAgICBpZiggc3JjLm9mZnNldExlZnQgPiBwcmV2Lm9mZnNldExlZnQgfHwgc3JjLm9mZnNldFRvcCA+IHByZXYub2Zmc2V0VG9wIClcbiAgICAgICAgICAgICAgICBbYmVnLCBlbmRdID0gW2VuZCwgYmVnXTtcblxuICAgICAgICAgICAgLy9UT0RPOiBoaWdobGlnaHQuLi5cbiAgICAgICAgICAgIHRoaXMuI2NsZWFyRm9ybXVsYVJlZnMoKTtcbiAgICAgICAgICAgIHRoaXMuI2dldEZvcm11bGFSZWYoMSkuc2V0UmFuZ2UoIHRoaXMuZ2V0UmFuZ2UoYmVnLCBlbmQpICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVjb3B5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2KSA9PiB7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXRlcy5yZWNvcHkuc3RhdGUgPSB0aGlzLiNzZWxlY3Rpb247XG5cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbl9yZWNvcHlfbW92ZSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgW2RfeCwgZF95XSA9ICBsYXN0X3JlY29weV9kaXIhO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxzID0gKHRoaXMuc3RhdGVzLnJlY29weS5zdGF0ZSBhcyBDZWxsTGlzdCkuY2VsbHM7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3JjID0gY2VsbHNbY2VsbHMubGVuZ3RoLTFdO1xuXG4gICAgICAgICAgICAgICAgbGV0IG5iID0gMDtcblxuICAgICAgICAgICAgICAgIGlmKCBsYXN0X3JlY29weV90YXJnZXQgIT09IHNyYykgeyAvLyBjb3B5Li4uXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1ciA9IHNyYztcbiAgICAgICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgKytuYjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY3VyID0gdGhpcy5yZWxhdGl2ZVRvKGN1ciwgZF95LCBkX3gpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29udGVudDogUmF3Q29udGVudFR5cGV8Q2VsbCA9IHNyYztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCB0eXBlb2YgY29udGVudC5yYXdDb250ZW50ID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSAoc3JjLnJhd0NvbnRlbnQgYXMgbnVtYmVyKSArIG5iKihkX3ggKyBkX3kpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiggY29udGVudC5yYXdDb250ZW50IGluc3RhbmNlb2YgRGF0ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gbmV3IERhdGUoc3JjLnJhd0NvbnRlbnQgYXMgRGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5zZXREYXRlKCBjb250ZW50LmdldERhdGUoKSArIG5iKihkX3ggKyBkX3kpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENlbGxMaXN0KHRoaXMsIFtjdXJdKS5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ci5jbGFzc05hbWUgPSBzcmMuY2xhc3NOYW1lOyAvL1RPRE86IGZvcm1hdC4uLlxuXG5cbiAgICAgICAgICAgICAgICAgICAgfSB3aGlsZSggY3VyIT09IGxhc3RfcmVjb3B5X3RhcmdldCApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuI2NsZWFyRm9ybXVsYVJlZnMoKTsgLy8gcmVjb3B5XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZXMucmVjb3B5LnN0YXRlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBsYXN0X3JlY29weV90YXJnZXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGxhc3RfcmVjb3B5X2RpciAgICA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgbWFpbi5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uX3JlY29weV9tb3ZlKTtcblxuICAgICAgICAgICAgfSwge29uY2U6IHRydWV9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3JlY29weV9zdGFydCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdyZWNvcHknKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdyZWNvcHlfZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5yZW1vdmUoJ3JlY29weScpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuI2N1cnNvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXYpID0+IHtcblxuICAgICAgICAgICAgaWYoIHRoaXMuI2N1cnNvci5sZW5ndGggIT09IDEgKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ3Vyc29yIGhhcyBpbnZhbGlkIG51bWJlciBvZiBjZWxscycpO1xuXG4gICAgICAgICAgICBjdXJzb3Iuc2V0UmFuZ2UoIG5ldyBDZWxsTGlzdCh0aGlzLCBbdGhpcy5nZXRWaXNpYmxlQ2VsbCh0aGlzLiNjdXJzb3IpXSkgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jc2VsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldikgPT4ge1xuXG4gICAgICAgICAgICBmb3IoIGxldCBjZWxsIG9mIHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGlnaGxpZ2h0JykgKVxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gdGhpcy4jc2VsZWN0aW9uLmNlbGxzO1xuXG4gICAgICAgICAgICBpZiggY2VsbHMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgZm9yKCBsZXQgY2VsbCBvZiBjZWxscyApIHtcblxuICAgICAgICAgICAgICAgIGlmKCBjZWxscy5sZW5ndGggIT09IDEpXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgW3JvdywgY29sXSA9IHRoaXMuI2NlbGxQb3MoY2VsbCk7XG4gICAgICAgICAgICAgICAgdGhpcy4jdGJvZHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bY29sXS5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVjb3B5LnNldFJhbmdlKHRoaXMuI3NlbGVjdGlvbik7XG5cbiAgICAgICAgICAgIC8vIG9ubHkgaWYgc2ltcGxlLi4uXG4gICAgICAgICAgICAvLyBjb25zdCBsYXN0ID0gY2VsbHNbY2VsbHMubGVuZ3RoLTFdO1xuICAgICAgICAgICAgLy8gcG9pbnRlci4uLlxuICAgICAgICB9KTtcblxuICAgICAgICAvL1RPRE86IG1vdmUgb3V0ID9cbiAgICAgICAgY29uc3QgZm9ybXVsYV9iYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybXVsYV9iYXIuY2xhc3NMaXN0LmFkZCgndG9vbGJhcicpO1xuXG4gICAgICAgICggYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBwbGFnZSA9IGF3YWl0IExJU1MuYnVpbGQoXCJjYWxjLXBsYWdlXCIpO1xuICAgICAgICAgICAgcGxhZ2Uuc3luY1RvKHRoaXMpO1xuICAgICAgICAgICAgZm9ybXVsYV9iYXIuYXBwZW5kKCBwbGFnZS5ob3N0ICk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZvcm11bGEgPSBhd2FpdCBMSVNTLmJ1aWxkKFwiY2FsYy1mb3JtdWxhXCIpO1xuICAgICAgICAgICAgZm9ybXVsYS5zeW5jVG8odGhpcyk7XG4gICAgICAgICAgICBmb3JtdWxhX2Jhci5hcHBlbmQoIGZvcm11bGEuaG9zdCApO1xuXG4gICAgICAgIH0pKCk7XG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoZm9ybXVsYV9iYXIpO1xuXG4gICAgICAgIHRoaXMuI2luaXRHcmlkKCt0aGlzLmF0dHJzLnJvd3MhLCArdGhpcy5hdHRycy5jb2xzISk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2KSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICAgICAgLy8gdGhlIGNlbGwgaXMgYmVpbmcgZWRpdGVkLi4uXG4gICAgICAgICAgICBpZiggdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJykgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lID09PSBcIlREXCIgKVxuICAgICAgICAgICAgICAgIHRoaXMuI2N1cnNvci5yZXBsYWNlQWxsKCB0YXJnZXQgYXMgQ2VsbCApO1xuXG4gICAgICAgICAgICAvL1RPRE86IG5vdCBjb3JyZWN0Li4uXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgPT09IFwiVEhcIiAmJiB0YXJnZXQudGV4dENvbnRlbnQgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5nZXRDZWxscyh0YXJnZXQudGV4dENvbnRlbnQhKS5jZWxsc1swXTtcblxuICAgICAgICAgICAgICAgIHRoaXMuI2N1cnNvci5yZXBsYWNlQWxsKGNlbGwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSAhPT0gXCJURFwiKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgaWYoIHRoaXMuYXR0cnMucm8gIT09IFwidHJ1ZVwiICYmICh0YXJnZXQgYXMgQ2VsbCkuaXNfcm8gIT09IHRydWUgKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnRvZ2dsZUF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldjogS2V5Ym9hcmRFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiggdGFyZ2V0ID09PSB0aGlzLiN0Ym9keSApIHtcbiAgICAgICAgICAgICAgICBpZiggZXYuY29kZSA9PT0gXCJLZXlWXCIgJiYgZXYuY3RybEtleSAmJiB0aGlzLiNwYXN0ZWJpbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy4jcGFzdGViaW4uY2VsbHM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3NlbGVjdGlvbi5jb250ZW50ID0gZGF0YTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjb3B5IGZvcm1hdC4uLiBUT0RPIHV0aWxpdHkgdGhpbmd5Li4uXG4gICAgICAgICAgICAgICAgICAgIGlmKCAhIGV2LnNoaWZ0S2V5IHx8ICEgZXYuYWx0S2V5ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3JjID0gdGhpcy4jcGFzdGViaW4uY2VsbHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkc3QgPSB0aGlzLiNzZWxlY3Rpb24uY2VsbHM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyArK2kgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHN0W2ldLmNsYXNzTmFtZSA9IHNyY1tpXS5jbGFzc05hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiBhZGQgZm9ybWF0Li4uXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoICggZXYua2V5ID09PSBcImNcIiB8fCBldi5rZXkgPT09IFwieFwiKSAmJiBldi5jdHJsS2V5ICkge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvcHkuc2V0UmFuZ2UodGhpcy4jc2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gV0hZID8/P1xuICAgICAgICAgICAgICAgICAgICAvL2guc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcgICAsIGAke3NlbGVjdGlvblswXS5vZmZzZXRUb3B9cHhgKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNwYXN0ZWJpbiA9IHRoaXMuI3NlbGVjdGlvbi5kZWVwQ2xvbmUoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiggZXYua2V5ID09PSBcInhcIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuI3NlbGVjdGlvbi5kZWxldGVGb3JtYXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuI3NlbGVjdGlvbi5kZWxldGVDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gXCJDb250cm9sXCIgfHwgZXYua2V5ID09PSBcIlNoaWZ0XCIgfHwgZXYua2V5ID09PSBcIkFsdFwiICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIGlnbm9yZVxuICAgICAgICAgICAgICAgIH0gaWYoIGV2LmNvZGUgPT09IFwiRGVsZXRlXCIgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uZGVsZXRlQ29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBpZiggZXYuY29kZSA9PT0gXCJFbnRlclwiICkge1xuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGVkIGVsc2V3aGVyZVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiggZXYuY29kZS5zdGFydHNXaXRoKCdBcnJvdycpICkge1xuXG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VyID0gdGhpcy5jdXJzb3IuY2VsbHM7XG4gICAgICAgICAgICAgICAgICAgIGlmKCBjdXIubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBkX3JvdyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkX2NvbCA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09ICdBcnJvd0xlZnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLS1kX2NvbDtcbiAgICAgICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09ICdBcnJvd1JpZ2h0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICsrZF9jb2w7XG4gICAgICAgICAgICAgICAgICAgIGlmKCBldi5jb2RlID09PSAnQXJyb3dVcCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAtLWRfcm93O1xuICAgICAgICAgICAgICAgICAgICBpZiggZXYuY29kZSA9PT0gJ0Fycm93RG93bicpXG4gICAgICAgICAgICAgICAgICAgICAgICArK2Rfcm93O1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0OiBDZWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiggZXYuY3RybEtleSApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByZXYgICA9IGN1clswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJzb3IgPSB0aGlzLnJlbGF0aXZlVG8ocHJldiwgZF9yb3csIGRfY29sKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHByZXYucmF3Q29udGVudCAhPT0gdW5kZWZpbmVkICYmIGN1cnNvci5yYXdDb250ZW50ICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlKCBwcmV2ICE9PSBjdXJzb3IgJiYgY3Vyc29yLnJhd0NvbnRlbnQgIT09IHVuZGVmaW5lZCkgeyAvLyB3ZSByZWFjaGVkIHRoZSBlbmQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXYgICA9IGN1cnNvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gdGhpcy5yZWxhdGl2ZVRvKHByZXYsIGRfcm93LCBkX2NvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvciA9IHByZXY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlKCBwcmV2ICE9PSBjdXJzb3IgJiYgY3Vyc29yLnJhd0NvbnRlbnQgPT09IHVuZGVmaW5lZCkgeyAvLyB3ZSByZWFjaGVkIHRoZSBlbmQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXYgICA9IGN1cnNvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gdGhpcy5yZWxhdGl2ZVRvKHByZXYsIGRfcm93LCBkX2NvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gY3Vyc29yO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSB0aGlzLnJlbGF0aXZlVG8oIGN1clswXSwgZF9yb3csIGRfY29sKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3Rib2R5LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3Vyc29yLnJlcGxhY2VBbGwobmV4dCk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZXYuY3RybEtleSkgeyAvLyBpZ25vcmUgY3RybFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgeyAvLyB3ZSBzdGFydCBlZGl0aW5nLi4uXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VyID0gdGhpcy5jdXJzb3IuY2VsbHM7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIGN1ci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJbMF0uZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiZGJsY2xpY2tcIiwge2J1YmJsZXM6IHRydWV9KSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyWzBdLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQgIT09IHRoaXMuI3Rib2R5ICYmIGV2LmNvZGUgPT09ICdFbnRlcicgJiYgZXYuc2hpZnRLZXkgKVxuICAgICAgICAgICAgICAgIHJldHVybjsgLy8gZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yLlxuXG4gICAgICAgICAgICBpZihldi5jb2RlID09PSBcIkVudGVyXCIpIHsgLy9UT0RPOiBFbnRlciBpcyBmb3IgY3VycmVudCBwbGFnZS4uLlxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjdXIgPSB0aGlzLmN1cnNvci5jZWxscztcbiAgICAgICAgICAgICAgICBpZiggY3VyLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgbGV0IFtyb3csY29sXSA9IHRoaXMuY2VsbFBvcyggY3VyWzBdICk7XG5cbiAgICAgICAgICAgICAgICArK3JvdztcbiAgICAgICAgICAgICAgICBpZiggcm93ID49IHRoaXMuI3Rib2R5LmNoaWxkcmVuLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICAgICAgcm93ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgKytjb2w7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCBjb2wgPj0gdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlbi5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbCA9IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IG5leHQgPSB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuW2NvbF0gYXMgQ2VsbDtcblxuICAgICAgICAgICAgICAgIHRoaXMuI3Rib2R5LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJzb3IucmVwbGFjZUFsbChuZXh0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG9uSW5wdXQyID0gKGV2OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jY2xlYXJGb3JtdWxhUmVmcygpO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgaWYoZXYuZGV0YWlsICE9PSB0cnVlKVxuICAgICAgICAgICAgICAgIG9uSW5wdXQoZXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9UT0RPOiBoZXJlLi4uXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICAgICAgY29weS5zZXRSYW5nZShudWxsKTtcblxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lICE9PSBcIlREXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPSB0YXJnZXQgYXMgQ2VsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKFwiY2VsbF9lZGl0X3N0YXJ0XCIsIChldjogQ3VzdG9tRXZlbnQ8Q2VsbD4pID0+IHtcblxuICAgICAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC50b2dnbGUoXCJjZWxsX2VkaXRcIiwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBldi5kZXRhaWw7XG5cbiAgICAgICAgICAgIGlmKGNlbGwucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHN0ciA9IGNlbGwucmF3Q29udGVudC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlcyA9IGNlbGwucmF3Q29udGVudC5yYW5nZXNUb2tlbjtcblxuICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlbjogKHN0cmluZ3xIVE1MRWxlbWVudClbXSA9IFtzdHJdO1xuXG4gICAgICAgICAgICAgICAgbGV0IHJhbmdlc19jb2xvcnM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fTtcbiAgICAgICAgICAgICAgICBsZXQgY3VyX29mZnNldCA9IDA7XG5cbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdHIgPSBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGgtMV0gYXMgc3RyaW5nO1xuXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aC0xXSA9IHN0ci5zbGljZSgwLCByYW5nZXNbaV0uYmVnIC0gY3VyX29mZnNldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2VfbmFtZSA9IHJhbmdlc1tpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYoICEgKHJhbmdlX25hbWUgaW4gcmFuZ2VzX2NvbG9ycykgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VzX2NvbG9yc1tyYW5nZV9uYW1lXSA9IGklODtcblxuICAgICAgICAgICAgICAgICAgICBzLmNsYXNzTGlzdC5hZGQoJ2Zvcm11bGFfaGlnaGxpZ2h0JywgYGhpZ2hsaWdodF8ke3Jhbmdlc19jb2xvcnNbcmFuZ2VfbmFtZV19YCk7IC8vVE9ETy4uLlxuICAgICAgICAgICAgICAgICAgICBzLnRleHRDb250ZW50ID0gcmFuZ2VzW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKCBzICk7IC8vIHJhbmdlLi4uXG5cbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW4ucHVzaCggc3RyLnNsaWNlKHJhbmdlc1tpXS5lbmQgLSBjdXJfb2Zmc2V0KSApO1xuICAgICAgICAgICAgICAgICAgICBjdXJfb2Zmc2V0ID0gcmFuZ2VzW2ldLmVuZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjZWxsLnJlcGxhY2VDaGlsZHJlbiggLi4uY2hpbGRyZW4gKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlc19uYW1lcyA9IE9iamVjdC5rZXlzKHJhbmdlc19jb2xvcnMpO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByYW5nZXNfbmFtZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSByYW5nZXNfbmFtZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZiA9IHRoaXMuI2dldEZvcm11bGFSZWYoaSk7XG4gICAgICAgICAgICAgICAgICAgIHJlZi5zZXRDb2xvciggcmFuZ2VzX2NvbG9yc1tyYW5nZV0gKTtcbiAgICAgICAgICAgICAgICAgICAgcmVmLnNldFJhbmdlKCB0aGlzLmdldENlbGxzKHJhbmdlKSApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgb25JbnB1dDIgKTsgLy8gcmVtb3ZlIGNvbG9ycy4uLlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gZGVmYXVsdEZvcm1hdChjZWxsLnJhd0NvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNlbGxfZWRpdF9lbmRcIiwgKGV2OiBDdXN0b21FdmVudDxDZWxsPikgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LnRvZ2dsZShcImNlbGxfZWRpdFwiLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBldi5kZXRhaWw7XG5cbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIG9uSW5wdXQyKTsgLy8gdG8gYmUgc2FmZVxuICAgICAgICAgICAgY2VsbC50b2dnbGVBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgZmFsc2UpO1xuXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJsZWF2ZSBlZGl0XCIsIGNlbGwudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgbmV3IENlbGxMaXN0KHRoaXMsIFtjZWxsXSkuY29udGVudCA9IGNlbGwudGV4dENvbnRlbnQhO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgICAgICAgLy8gbGVhdmVcbiAgICAgICAgICAgIHRoaXMuI3NlbGVjdGlvbi5jbGVhcigpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGV2ID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgIT09IFwiVERcIilcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGVzLmNlbGxfZWRpdC5zdGF0ZSA9IG51bGw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKCB0aGlzLm5iUm93cyA+PSAxICYmIHRoaXMubmJDb2xzID49IDEpXG4gICAgICAgICAgICB0aGlzLmN1cnNvci5yZXBsYWNlQWxsKCB0aGlzLmdldFJhbmdlKFwiQTFcIikgKTtcbiAgICB9XG5cbiAgICBnZXRWaXNpYmxlQ2VsbChjOiBDZWxsfENlbGxMaXN0KTogQ2VsbCB7XG4gICAgICAgIGlmKGMgaW5zdGFuY2VvZiBDZWxsTGlzdClcbiAgICAgICAgICAgIGMgPSBjLmZpcnN0Q2VsbDtcblxuICAgICAgICByZXR1cm4gYy5jZWxsID8/IGM7XG4gICAgfVxuXG4gICAgY2VsbFBvcyhjZWxsOiBIVE1MVGFibGVDZWxsRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY2VsbFBvcyhjZWxsKTtcbiAgICB9XG5cbiAgICAjY2VsbFBvcyhjZWxsOiBIVE1MVGFibGVDZWxsRWxlbWVudCkge1xuXG4gICAgICAgIGlmKCBcInBvc1wiIGluIGNlbGwpXG4gICAgICAgICAgICByZXR1cm4gY2VsbC5wb3MgYXMgW251bWJlciwgbnVtYmVyXTtcblxuICAgICAgICBjb25zdCBjb2wgPSBbLi4uY2VsbC5wYXJlbnRFbGVtZW50IS5jaGlsZHJlbl0uZmluZEluZGV4KCBjID0+IGMgPT09IGNlbGwpO1xuICAgICAgICBjb25zdCByb3cgPSBbLi4uY2VsbC5wYXJlbnRFbGVtZW50IS5wYXJlbnRFbGVtZW50IS5jaGlsZHJlbl0uZmluZEluZGV4KCByID0+IHIgPT09IGNlbGwucGFyZW50RWxlbWVudCEpO1xuXG4gICAgICAgIHJldHVybiBbcm93LCBjb2xdIGFzIGNvbnN0O1xuICAgIH1cblxuICAgICN0Ym9keSE6IEhUTUxUYWJsZVNlY3Rpb25FbGVtZW50O1xuICAgIGdldCB0Ym9keSgpIHsgcmV0dXJuIHRoaXMuI3Rib2R5OyB9XG5cbiAgICByZXNpemUobmJyb3dzOiBudW1iZXIsIG5iY29sczogbnVtYmVyKSB7XG5cbiAgICAgICAgY29uc3QgY29sX2h0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBjb2xfaHRtbC5hcHBlbmQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJykgKTtcblxuICAgICAgICBjb25zdCB0Ym9keSA9IHRoaXMuI3Rib2R5O1xuICAgICAgICB0Ym9keS5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgICAgICBmb3IobGV0IGNvbCA9IDA7IGNvbCA8ICBuYmNvbHMgOyArK2NvbCkge1xuICAgICAgICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgICAgICAgdGgudGV4dENvbnRlbnQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgY29sKTtcbiAgICAgICAgICAgIGNvbF9odG1sLmFwcGVuZCh0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdGJvZHkuYXBwZW5kKGNvbF9odG1sKTtcblxuICAgICAgICBmb3IobGV0IHJvdyA9IDA7IHJvdyA8IG5icm93czsgKytyb3cpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd19odG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICAgICAgICAgIHRoLnRleHRDb250ZW50ID0gYCR7cm93KzF9YDtcbiAgICAgICAgICAgIHJvd19odG1sLmFwcGVuZCh0aCk7XG5cbiAgICAgICAgICAgIGZvcihsZXQgY29sID0gMDsgY29sIDwgIG5iY29scyA7ICsrY29sKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJykgYXMgQ2VsbDtcbiAgICAgICAgICAgICAgICAvL2NlbGwudG9nZ2xlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcbiAgICAgICAgICAgICAgICBjZWxsLmZvcm1hdCA9IGRlZmF1bHRGb3JtYXQ7XG4gICAgICAgICAgICAgICAgcm93X2h0bWwuYXBwZW5kKCBjZWxsICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ym9keS5hcHBlbmQocm93X2h0bWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2luaXRHcmlkKG5icm93czogbnVtYmVyLCBuYmNvbHM6IG51bWJlcikge1xuXG4gICAgICAgIGNvbnN0IGlzX3JvID0gdGhpcy5hdHRycy5ybyA9PT0gXCJ0cnVlXCI7XG5cbiAgICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgICAgICBjb25zdCB0Ym9keSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xuICAgICAgICB0aGlzLiN0Ym9keSA9IHRib2R5O1xuXG4gICAgICAgIGNvbnN0IHJlc2l6ZU9icyA9IG5ldyBSZXNpemVPYnNlcnZlciggKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ob3N0LmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudCgncmVzaXplJykgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc2l6ZU9icy5vYnNlcnZlKCB0aGlzLmhvc3QgKTtcblxuICAgICAgICB0aGlzLiN0Ym9keS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcblxuICAgICAgICB0aGlzLnJlc2l6ZShuYnJvd3MsIG5iY29scyk7XG5cbiAgICAgICAgdGFibGUuYXBwZW5kKHRib2R5KTtcbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCh0YWJsZSk7XG4gICAgfVxuXG4gICAgZ2V0UmFuZ2UoZnJvbTogQ2VsbHxzdHJpbmd8cmVhZG9ubHlbbnVtYmVyLG51bWJlcl0sIHRvOiBDZWxsfHN0cmluZ3xyZWFkb25seVtudW1iZXIsbnVtYmVyXSA9IGZyb20pOiBDZWxsTGlzdCB7XG5cbiAgICAgICAgLy8gcHJvY2VzcyByZWZzLi4uXG4gICAgICAgIGlmKCBmcm9tIGluc3RhbmNlb2YgSFRNTFRhYmxlQ2VsbEVsZW1lbnQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSYW5nZSggdGhpcy5jZWxsUG9zKGZyb20pLCB0byApO1xuICAgICAgICBpZiggdG8gaW5zdGFuY2VvZiBIVE1MVGFibGVDZWxsRWxlbWVudClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJhbmdlKCBmcm9tLCB0aGlzLmNlbGxQb3ModG8pICk7XG5cbiAgICAgICAgaWYoIHR5cGVvZiBmcm9tID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBpZiggZnJvbS5pbmNsdWRlcyhcIjpcIikgKVxuICAgICAgICAgICAgICAgIFtmcm9tLCB0b10gPSBmcm9tLnNwbGl0KCc6Jyk7XG5cbiAgICAgICAgICAgIGZyb20gPSB0aGlzLnJlZjJwb3MoZnJvbSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSYW5nZSggZnJvbSwgdG8gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiggdHlwZW9mIHRvID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZ2UoIGZyb20sIHRoaXMucmVmMnBvcyh0bykgKTtcblxuICAgICAgICAvLyBnZXQgcmFuZ2VcblxuICAgICAgICBsZXQgYmVnX3JvdyA9IGZyb21bMF0gfHwgMTtcbiAgICAgICAgbGV0IGJlZ19jb2wgPSBmcm9tWzFdIHx8IDE7XG5cbiAgICAgICAgbGV0IGVuZF9yb3cgPSBmcm9tWzBdID09PSAwID8gdGhpcy5uYlJvd3MgOiB0b1swXTtcbiAgICAgICAgbGV0IGVuZF9jb2wgPSBmcm9tWzFdID09PSAwID8gdGhpcy5uYkNvbHMgOiB0b1sxXTtcblxuICAgICAgICBpZiggZW5kX3JvdyA8IGJlZ19yb3cgKVxuICAgICAgICAgICAgW2JlZ19yb3csIGVuZF9yb3ddID0gW2VuZF9yb3csIGJlZ19yb3ddO1xuICAgICAgICBpZiggZW5kX2NvbCA8IGJlZ19jb2wgKVxuICAgICAgICAgICAgW2JlZ19jb2wsIGVuZF9jb2xdID0gW2VuZF9jb2wsIGJlZ19jb2xdO1xuXG4gICAgICAgIGNvbnN0IGNlbGxzID0gbmV3IEFycmF5PENlbGw+KCAoZW5kX3JvdyAtIGJlZ19yb3cgKyAxKSAqIChlbmRfY29sIC0gYmVnX2NvbCArIDEpICk7XG5cbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgIGZvcihsZXQgaSA9IGJlZ19yb3c7IGkgPD0gZW5kX3JvdzsgKytpIClcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IGJlZ19jb2w7IGogPD0gZW5kX2NvbDsgKytqIClcbiAgICAgICAgICAgICAgICBjZWxsc1tvZmZzZXQrK10gPSB0aGlzLnRib2R5LmNoaWxkcmVuW2ldLmNoaWxkcmVuW2pdIGFzIENlbGw7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBDZWxsTGlzdCh0aGlzLCBjZWxscyk7XG4gICAgfVxuXG4gICAgZ2V0Q2VsbHMoY2VsbDogc3RyaW5nKTogQ2VsbExpc3Q7XG4gICAgZ2V0Q2VsbHMocm93X2lkOiBudW1iZXIsIGNvbF9pZDogbnVtYmVyKTogQ2VsbExpc3Q7XG4gICAgZ2V0Q2VsbHMoY2VsbF9vcl9yb3dpZDogbnVtYmVyfHN0cmluZywgY29sX2lkPzogbnVtYmVyKSB7XG5cbiAgICAgICAgbGV0IHJvd19pZCA9IGNlbGxfb3Jfcm93aWQ7XG4gICAgICAgIGlmKCB0eXBlb2YgY2VsbF9vcl9yb3dpZCA9PT0gXCJzdHJpbmdcIikge1xuXG4gICAgICAgICAgICBjZWxsX29yX3Jvd2lkID0gY2VsbF9vcl9yb3dpZC5yZXBsYWNlQWxsKCckJywgJycpO1xuXG4gICAgICAgICAgICBpZiggY2VsbF9vcl9yb3dpZC5pbmNsdWRlcygnOicpICkgey8vIHJhbmdlXG5cbiAgICAgICAgICAgICAgICBsZXQgW2JlZywgZW5kXSA9IGNlbGxfb3Jfcm93aWQuc3BsaXQoJzonKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGJfcm93X2lkID0gK2JlZ1sxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBiX2NvbF9pZCA9IGJlZy5jaGFyQ29kZUF0KDApICsgMSAtIDY1O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZV9yb3dfaWQgPSArZW5kWzFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVfY29sX2lkID0gZW5kLmNoYXJDb2RlQXQoMCkgKyAxIC0gNjU7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjZWxscyA9IG5ldyBBcnJheSggKGVfY29sX2lkLWJfY29sX2lkKSAqIChlX3Jvd19pZCAtIGJfcm93X2lkKSApO1xuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgciA9IGJfcm93X2lkOyByIDw9ICBlX3Jvd19pZDsgKytyKVxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGMgPSBiX2NvbF9pZDsgYyA8PSAgZV9jb2xfaWQ7ICsrYylcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzW29mZnNldCsrXSA9IHRoaXMuI3Rib2R5LmNoaWxkcmVuW3JdLmNoaWxkcmVuW2NdIGFzIENlbGw7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENlbGxMaXN0KHRoaXMsIGNlbGxzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdGhpcyBpcyBhIGZ1bGwgbGluZS4uLlxuICAgICAgICAgICAgaWYoIGNlbGxfb3Jfcm93aWRbMF0gPj0gJzAnICYmIGNlbGxfb3Jfcm93aWRbMF0gPD0gJzknICkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENlbGxzKGBBJHtjZWxsX29yX3Jvd2lkfToke3RoaXMucG9zMnJlZigrY2VsbF9vcl9yb3dpZCwgdGhpcy5uYkNvbHMpfWApO1xuICAgICAgICAgICAgfSBlbHNlIGlmKCBjZWxsX29yX3Jvd2lkW2NlbGxfb3Jfcm93aWQubGVuZ3RoLTFdIDwgJzAnIHx8IGNlbGxfb3Jfcm93aWRbY2VsbF9vcl9yb3dpZC5sZW5ndGgtMV0gPiAnOScgKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCBgJHtjZWxsX29yX3Jvd2lkfTE6JHtjZWxsX29yX3Jvd2lkfSR7dGhpcy5uYlJvd3N9YCApO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENlbGxzKGAke2NlbGxfb3Jfcm93aWR9MToke2NlbGxfb3Jfcm93aWR9JHt0aGlzLm5iUm93c31gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcm93X2lkID0gK2NlbGxfb3Jfcm93aWRbMV07XG4gICAgICAgICAgICBjb2xfaWQgPSBjZWxsX29yX3Jvd2lkLmNoYXJDb2RlQXQoMCkgKyAxIC0gNjU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjZWxsID0gdGhpcy4jdGJvZHkuY2hpbGRyZW5bK3Jvd19pZF0uY2hpbGRyZW5bY29sX2lkIV0gYXMgQ2VsbDtcbiAgICAgICAgcmV0dXJuIG5ldyBDZWxsTGlzdCh0aGlzLCBbY2VsbF0pO1xuICAgIH1cblxuICAgIHJlZjJwb3MocmVmOiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgICAgICAgLy9UT0RPLi4uXG4gICAgICAgIGNvbnN0IHJvdyA9ICtyZWZbcmVmLmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCBjb2wgPSByZWYuY2hhckNvZGVBdCgwKSAtIDY1ICsgMTtcblxuICAgICAgICByZXR1cm4gW3JvdywgY29sXTtcbiAgICB9XG4gICAgcG9zMnJlZihyb3c6IG51bWJlciwgY29sOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGAke1N0cmluZy5mcm9tQ2hhckNvZGUoNjUrY29sLTEpfSR7cm93fWA7XG4gICAgfVxuICAgIGdldCBuYlJvd3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0Ym9keS5jaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgIH1cbiAgICBnZXQgbmJDb2xzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jdGJvZHkuZmlyc3RFbGVtZW50Q2hpbGQhLmNoaWxkcmVuLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgI2lzVXBkYXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmKCB0aGlzLiNpc1VwZGF0aW5nID09PSB0cnVlIClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy4jaXNVcGRhdGluZyA9IHRydWU7XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsPENlbGw+KCd0ZCcpO1xuICAgICAgICAgICAgZm9yKGxldCBjZWxsIG9mIGNlbGxzKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggY2VsbC5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gY2VsbC5yYXdDb250ZW50LmV4ZWModGhpcyk7IC8vVE9ETy4uLlxuXG4gICAgICAgICAgICAgICAgICAgIC8vVE9ETzogZmFjdG9yaXplLi4uXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eXBlOiBzdHJpbmcgPSB0eXBlb2YgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIjtcblxuICAgICAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gKGNlbGwgYXMgYW55KS5mb3JtYXQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiNpc1VwZGF0aW5nID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2VsbExpc3QgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG5cbiAgICAjc2hlZXQ6IENhbGNTaGVldDtcbiAgICAjY2VsbHM6IENlbGxbXTtcbiAgICBjb25zdHJ1Y3RvcihzaGVldDogQ2FsY1NoZWV0LCBjZWxsczogQ2VsbFtdKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuI2NlbGxzID0gY2VsbHM7XG4gICAgICAgIHRoaXMuI3NoZWV0ID0gc2hlZXQ7XG4gICAgfVxuXG4gICAgZ2V0IHBsYWdlX25hbWUoKSB7XG5cbiAgICAgICAgaWYoIHRoaXMuI2NlbGxzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBpZiggdGhpcy4jY2VsbHMubGVuZ3RoID09PSAxIClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiNzaGVldC5wb3MycmVmKCAuLi50aGlzLiNzaGVldC5jZWxsUG9zKHRoaXMuI2NlbGxzWzBdKSApO1xuXG4gICAgICAgIGxldCBjZWxscyA9IHRoaXMuI2NlbGxzLm1hcCggYyA9PiB0aGlzLiNzaGVldC5jZWxsUG9zKGMpICkuc29ydCggKGEsYikgPT4ge1xuICAgICAgICAgICAgaWYoIGFbMF0gIT09IGJbMF0gKVxuICAgICAgICAgICAgICAgIHJldHVybiBhWzBdIC0gYlswXTtcbiAgICAgICAgICAgIHJldHVybiBhWzFdIC0gYlsxXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG1pbiA9IGNlbGxzWzBdO1xuICAgICAgICBsZXQgbWF4ID0gY2VsbHNbY2VsbHMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgbGV0IG5iX2NvbHMgPSBtYXhbMV0gLSBtaW5bMV0gKyAxO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgIGlmKCBjZWxsc1tpXVswXSAhPT0gTWF0aC5mbG9vcihpL25iX2NvbHMpK21pblswXSAmJiBjZWxsc1tpXVsxXSAhPT0gKGklbmJfY29scykrIG1pblsxXSApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHJldHVybiBgJHt0aGlzLiNzaGVldC5wb3MycmVmKC4uLm1pbil9OiR7dGhpcy4jc2hlZXQucG9zMnJlZiguLi5tYXgpfWA7XG4gICAgfVxuXG4gICAgZ2V0IGNlbGxzKCk6IENlbGxbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjZWxscztcbiAgICB9XG4gICAgZ2V0IHNoZWV0KCk6IENhbGNTaGVldCB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzaGVldDtcbiAgICB9XG5cbiAgICB0b2dnbGVGb3JtYXQobmFtZTogc3RyaW5nfCgodjogYW55LCBwcmVjOiBudW1iZXJ8bnVsbCkgPT4gc3RyaW5nKSApIHtcbiAgICAgICAgbGV0IGYgPSBGb3JtYXQuZXh0cmFjdEZvcm1hdCh0aGlzKTtcblxuICAgICAgICBpZiggdHlwZW9mIG5hbWUgPT09IFwiZnVuY3Rpb25cIikge1xuXG4gICAgICAgICAgICBsZXQgaXNGb3JtYXQgPSBmLmdldFByb3BlcnR5KFwiZm9ybWF0XCIpID09PSBuYW1lO1xuXG4gICAgICAgICAgICB0aGlzLmZvcm1hdCh7Zm9ybWF0OiBpc0Zvcm1hdCA/IG51bGwgOiBuYW1lIH0pO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZvcm1hdCh7W25hbWVdOiBmLmdldFByb3BlcnR5KG5hbWUpICE9PSB0cnVlfSk7XG4gICAgfVxuXG4gICAgZm9ybWF0KC4uLmY6ICgoICh2OiBhbnksIHByZWM6IG51bWJlcnxudWxsKSA9PiBzdHJpbmcgKXxzdHJpbmd8Rm9ybWF0fFJlY29yZDxzdHJpbmcsIGFueT4pW10pIHtcblxuICAgICAgICBpZiggZi5sZW5ndGggPiAxICkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL1RPRE8uLi4uXG4gICAgICAgICAgICBmID0gT2JqZWN0LmZyb21FbnRyaWVzKCBmLm1hcCggZSA9PiBbZSwgdHJ1ZV0gKSApO1xuXG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgZiA9IGZbMF07XG5cbiAgICAgICAgaWYoIHR5cGVvZiBmID09PSBcImZ1bmN0aW9uXCIgKVxuICAgICAgICAgICAgZiA9IHtcImZvcm1hdFwiOiBmfTtcblxuICAgICAgICBpZih0eXBlb2YgZiA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICBmID0ge1tmXTogdHJ1ZX07XG5cbiAgICAgICAgaWYoICEgKGYgaW5zdGFuY2VvZiBGb3JtYXQpIClcbiAgICAgICAgICAgIGYgPSBuZXcgRm9ybWF0KGYpO1xuXG4gICAgICAgIGYuYXBwbHlUbyh0aGlzKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQgY29udGVudCgpOiAoUmF3Q29udGVudFR5cGUpW10ge1xuICAgICAgICBsZXQgY29udGVudCA9IG5ldyBBcnJheSh0aGlzLiNjZWxscy5sZW5ndGgpO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy4jY2VsbHMubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICBjb250ZW50W2ldID0gdGhpcy4jY2VsbHNbaV0ucmF3Q29udGVudCE7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgZGVsZXRlRm9ybWF0KCkge1xuICAgICAgICBmb3IobGV0IGNlbGwgb2YgdGhpcy4jY2VsbHMpIC8vVE9ETyBhZGQgaG9jIGZvcm1hdC4uLlxuICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAnJztcbiAgICB9XG5cbiAgICBkZWxldGVDb250ZW50KCkge1xuXG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiB0aGlzLiNjZWxscykge1xuICAgICAgICAgICAgY2VsbC5yYXdDb250ZW50ID0gdW5kZWZpbmVkIGFzIGFueTtcbiAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2hlZXQudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgc2V0IGNvbnRlbnQoY29udGVudDogQ2VsbHxSYXdDb250ZW50VHlwZXwoUmF3Q29udGVudFR5cGV8Q2VsbClbXSkge1xuXG4gICAgICAgIGlmKCBBcnJheS5pc0FycmF5KGNvbnRlbnQpICkge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNvbnRlbnQubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgbmV3IENlbGxMaXN0KHRoaXMuI3NoZWV0LCBbdGhpcy4jY2VsbHNbaV1dICkuY29udGVudCA9IGNvbnRlbnRbaV07XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCB0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICBjb250ZW50ID0gcGFyc2VJbnB1dChjb250ZW50KTtcblxuICAgICAgICBsZXQgcmF3X3ZhbCA9IGNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MVGFibGVDZWxsRWxlbWVudCA/IGNvbnRlbnQucmF3Q29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvbnRlbnQ7XG5cbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIHRoaXMuI2NlbGxzKSB7XG5cbiAgICAgICAgICAgIGlmKGNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MVGFibGVDZWxsRWxlbWVudCAmJiBjb250ZW50LnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBGb3JtdWxhICkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHYgPSBjb250ZW50LnJhd0NvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkc3QgPSB0aGlzLiNzaGVldC5jZWxsUG9zKCBjZWxsICk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3JjID0gdGhpcy4jc2hlZXQuY2VsbFBvcyhjb250ZW50KVxuXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZiA9IFsgZHN0WzBdIC0gc3JjWzBdLCBkc3RbMV0gLSBzcmNbMV1dIGFzIGNvbnN0O1xuXG4gICAgICAgICAgICAgICAgcmF3X3ZhbCA9IHYucmVsYXRpdmVUbyggdGhpcy4jc2hlZXQsIC4uLmRpZmYgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2VsbC5yYXdDb250ZW50ID0gcmF3X3ZhbDtcblxuICAgICAgICAgICAgbGV0IHZhbHVlID0gcmF3X3ZhbDtcbiAgICAgICAgICAgIGlmKCByYXdfdmFsIGluc3RhbmNlb2YgRm9ybXVsYSlcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHJhd192YWwuZXhlYyh0aGlzLiNzaGVldCk7IC8vVE9ETy4uLlxuXG4gICAgICAgICAgICBsZXQgdHlwZTogc3RyaW5nID0gdHlwZW9mIHZhbHVlO1xuICAgICAgICAgICAgaWYoIHR5cGUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgaW5zdGFuY2VvZiBEYXRlIClcbiAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiO1xuXG4gICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gKGNlbGwgYXMgYW55KS5mb3JtYXQodmFsdWUpO1xuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHR5cGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2hlZXQudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgc2V0Uk8oaXNfcm86IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiB0aGlzLiNjZWxscylcbiAgICAgICAgICAgIGNlbGwuaXNfcm8gPSBpc19ybztcbiAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NlbGxzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBoYXMoLi4uY2VsbHM6IENlbGxbXSkge1xuICAgICAgICBmb3IobGV0IGNlbGwgb2YgY2VsbHMpXG4gICAgICAgICAgICBpZiggISB0aGlzLiNjZWxscy5pbmNsdWRlcyhjZWxsKSApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZW1vdmUoLi4uY2VsbHM6IENlbGxbXSkge1xuICAgICAgICB0aGlzLiNjZWxscyA9IHRoaXMuI2NlbGxzLmZpbHRlciggYyA9PiAhIGNlbGxzLmluY2x1ZGVzKGMpICk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpICk7XG4gICAgfVxuXG4gICAgcmVwbGFjZUFsbCguLi5jZWxsczogQ2VsbFtdfFtDZWxsTGlzdF0pIHtcbiAgICAgICAgdGhpcy4jY2VsbHMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5hZGQoLi4uY2VsbHMpO1xuICAgIH1cblxuICAgIGFkZCguLi5jZWxsczogQ2VsbFtdfFtDZWxsTGlzdF0pIHtcblxuICAgICAgICBpZiggY2VsbHNbMF0gaW5zdGFuY2VvZiBDZWxsTGlzdClcbiAgICAgICAgICAgIGNlbGxzID0gY2VsbHNbMF0uY2VsbHM7XG5cbiAgICAgICAgdGhpcy4jY2VsbHMucHVzaCguLi5jZWxscyBhcyBDZWxsW10pO1xuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpICk7XG4gICAgfVxuXG4gICAgZ2V0IGZpcnN0Q2VsbCgpIHtcbiAgICAgICAgaWYoIHRoaXMuI2NlbGxzLmxlbmd0aCA8IDEpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub3BlXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy4jY2VsbHNbMF07XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuI2NlbGxzLmxlbmd0aCA9IDA7XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcbiAgICB9XG5cblxuICAgIGRlZXBDbG9uZSgpIHtcblxuICAgICAgICBsZXQgY2VsbHMgPSB0aGlzLiNjZWxscy5tYXAoIGMgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xvbmUgPSBjLmNsb25lTm9kZSh0cnVlKSBhcyBDZWxsO1xuXG4gICAgICAgICAgICBjbG9uZS5yYXdDb250ZW50ID0gYy5yYXdDb250ZW50O1xuICAgICAgICAgICAgY2xvbmUuZm9ybWF0ICAgICA9IGMuZm9ybWF0O1xuICAgICAgICAgICAgKGNsb25lIGFzIGFueSkucG9zICAgICAgICA9IHRoaXMuI3NoZWV0LmNlbGxQb3MoYyk7XG5cbiAgICAgICAgICAgIHJldHVybiBjbG9uZTtcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gbmV3IENlbGxMaXN0KHRoaXMuI3NoZWV0LCBjZWxscyk7XG4gICAgfVxufVxuXG4vL1RPRE8uLi5cbmltcG9ydCBcIi4vZm9ybXVsYV9lZGl0b3JcIjtcbmltcG9ydCBcIi4vcGxhZ2VfZWRpdG9yXCI7XG5pbXBvcnQgeyBGb3JtdWxhLCBwYXJzZV9mb3JtdWxhIH0gZnJvbSBcIi4vZm9ybXVsYV9wYXJzZXJcIjtcbmltcG9ydCB7IFBsYWdlU2VsZWN0b3IgfSBmcm9tIFwiLi9wbGFnZV9zZWxlY3RvclwiO1xuaW1wb3J0IHsgRm9ybWF0LCBGb3JtYXRNYW5hZ2VyIH0gZnJvbSBcIi4vZm9ybWF0XCI7XG5pbXBvcnQgeyBGb3JtdWxhUmVmLCBSYW5nZU92ZXJsYXksIFJlY29weUhhbmRsZSB9IGZyb20gXCIuL1JhbmdlT3ZlcmxheVwiO1xuXG5MSVNTLmRlZmluZSgnY2FsYy1zaGVldCcsIENhbGNTaGVldCk7IiwiaW1wb3J0IExJU1MgZnJvbSBcIi4uLy4uLy4uL2xpYnMvTElTU1wiO1xuaW1wb3J0IHsgRm9ybWF0LCBGb3JtYXRzIH0gZnJvbSBcIi4vZm9ybWF0XCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGxMaXN0IH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuY29uc3QgY29udGVudCA9IGBcbiAgICA8c2VsZWN0IGRpc2FibGVkIHRpdGxlPVwiTm9tIGRlIHBvbGljZVwiPjxvcHRpb24+TGliw6lyYXRpb24gU2Fuczwvb3B0aW9uPjwvc2VsZWN0PlxuICAgIDxzZWxlY3QgY2xhc3M9XCJmb250X3NpemVcIiB0aXRsZT1cIlRhaWxsZSBkZSBwb2xpY2VcIj48L3NlbGVjdD5cbiAgICA8c3BhbiBjbGFzcz0ndmJhcic+PC9zcGFuPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdib2xkJyB0aXRsZT1cIkdyYXMgKEN0cmwrQilcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdpdGFsaWMnIHRpdGxlPVwiSXRhbGlxdWUgKEN0cmwrSSlcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSd1bmRlcmxpbmUnIHRpdGxlPVwiU291bGlnbmFnZSAoQ3RybCtVKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gdmFsdWU9J2JsYWNrJyBuYW1lPSdmb3JlZ3JvdW5kX2NvbG9yJyB0aXRsZT1cIkNvdWxldXIgZGUgcG9saWNlXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gdmFsdWU9J3llbGxvdycgbmFtZT0nYmFja2dyb3VuZF9jb2xvcicgdGl0bGU9XCJDb3VsZXVyIGQnYXJyacOocmUtcGxhblwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nYWxpZ25fbGVmdCcgdGl0bGU9XCJBbGlnbmVyIMOgIGdhdWNoZSAoQ3RybCtMKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2FsaWduX2NlbnRlcicgdGl0bGU9XCJDZW50ZXIgKEN0cmwrRSlcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdhbGlnbl9yaWdodCcgdGl0bGU9XCJBbGlnbmVyIMOgIGRyb2l0ZSAoQ3RybCtSKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0ndmFsaWduX3RvcCcgdGl0bGU9XCJBbGlnbmVyIGVuIGhhdXRcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSd2YWxpZ25fbWlkZGxlJyB0aXRsZT1cIkNlbnRyZXIgdmVydGljYWxlbWVudFwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J3ZhbGlnbl9ib3R0b20nIHRpdGxlPVwiQWxpZ25lciBlbiBiYXNcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxzcGFuIGNsYXNzPSd2YmFyJz48L3NwYW4+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2FqdXN0ZXInIHRpdGxlPVwiQWp1c3RlciBsZSB0ZXh0ZVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nbWVyZ2VfY2VudGVyJyB0eXBlPSdmY3QnIHRpdGxlPVwiRnVzaW9ubmVyIGV0IGNlbnRyZXIgb3UgZMOpZnVzaW9ubmVyIGxlcyBjZWxsdWxlcyBlbiBpbnZlcnNhbnQgbGV1ciDDqXRhdCBhY3R1ZWxcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdtZXJnZScgdHlwZT0nZmN0JyB0aXRsZT1cIkZ1c2lvbm5lciBsZXMgY2VsbHVsZXNcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSd1bm1lcmdlJyB0eXBlPSdmY3QnIHRpdGxlPVwiRMOpZnVzaW9ubmVyIGxlcyBjZWxsdWxlc1wiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nZm9ybWF0X21vbm5haWUnIHR5cGU9J2ZjdCcgdGl0bGU9XCJBcHBsaXF1ZXIgbGUgZm9ybWF0IE1vbm5haWUgKE1haitDdHJsKzQpXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nZm9ybWF0X3BvdXJjZW50JyB0eXBlPSdmY3QnIHRpdGxlPVwiQXBwbGlxdWVyIGxlIGZvcm1hdCBQb3VyY2VudGFnZSAoTWFqK0N0cmwrNSlcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdmb3JtYXRfbmInIHR5cGU9J2ZjdCcgIHRpdGxlPVwiQXBwbGlxdWVyIGxlIGZvcm1hdCBOb21icmUgKE1haitDdHJsKzEpXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nZm9ybWF0X2RhdGUnIHR5cGU9J2ZjdCcgZGlzYWJsZWQgIHRpdGxlPVwiQXBwbGlxdWVyIGxlIGZvcm1hdCBEYXRlIChNYWorQ3RybCszKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nZm9ybWF0X3plcm9fcDEnIHR5cGU9J2ZjdCcgdGl0bGU9XCJBam91dGVyIHVuZSBkw6ljaW1hbGVcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdmb3JtYXRfemVyb19tMScgdHlwZT0nZmN0JyB0aXRsZT1cIlN1cHByaW1lciB1bmUgZMOpY2ltYWxlXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8c3BhbiBjbGFzcz0ndmJhcic+PC9zcGFuPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdyZXRyYWl0X3AxJyB0eXBlPSdmY3QnIHRpdGxlPVwiQXVnbWVudGVyIGxlIHJldHJhaXRcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdyZXRyYWl0X20xJyB0eXBlPSdmY3QnIHRpdGxlPVwiRGltaW51ZXIgbGUgcmV0cmFpdFwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nYm9yZGVyJyB0eXBlPSdmY3QnIHRpdGxlPVwiQm9yZHVyZXMgKE1haiBwb3VyIMOpY3Jhc2VyKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2JvcmRlcl9zdHlsZScgdHlwZT0nZmN0JyBkaXNhYmxlZCB0aXRsZT1cIlN0eWxlIGRlIGJvcmR1cmVcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSB2YWx1ZT0nYmxhY2snIG5hbWU9J2JvcmRlcl9jb2xvcicgdGl0bGU9XCJDb3VsZXVyIGRlIGJvcmR1cmVcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxzcGFuIGNsYXNzPSd2YmFyJz48L3NwYW4+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2Zvcm1hdF9jb25kJyB0eXBlPSdmY3QnIGRpc2FibGVkIHRpdGxlPVwiQ29uZGl0aW9ubmVsXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbmA7XG5cbmZ1bmN0aW9uIG1lcmdlKGNlbGxsaXN0OiBDZWxsTGlzdCwgaXNfYWxpZ24gPSBmYWxzZSkge1xuXG4gICAgY29uc3Qgc2hlZXQgPSBjZWxsbGlzdC5zaGVldDtcblxuICAgIGNvbnN0IFtiZWcsZW5kXSA9IGNlbGxsaXN0LnBsYWdlX25hbWUhLnNwbGl0KCc6JykubWFwKCBlID0+IHNoZWV0LnJlZjJwb3MoZSkgKTsgLy8gcGxhZ2UgY2FuJ3QgYmUgdW5kZWZpbmVkXG5cbiAgICBsZXQgcm93cyA9IGVuZFswXSAtIGJlZ1swXSArIDE7XG4gICAgbGV0IGNvbHMgPSBlbmRbMV0gLSBiZWdbMV0gKyAxO1xuXG4gICAgbGV0IGZvcm1hdDogUmVjb3JkPHN0cmluZyxhbnk+ID0ge1xuICAgICAgICBzcGFuOiBbIHJvd3MsIGNvbHMgXVxuICAgIH1cblxuICAgIGlmKCBpc19hbGlnbiApIHtcbiAgICAgICAgZm9ybWF0LnZhbGlnbl9taWRkbGUgPSB0cnVlO1xuICAgICAgICBmb3JtYXQuYWxpZ25fY2VudGVyICA9IHRydWU7XG4gICAgfVxuXG4gICAgc2hlZXQuZ2V0UmFuZ2UoYmVnKS5mb3JtYXQoZm9ybWF0KTtcbn1cblxuZnVuY3Rpb24gdW5tZXJnZShjZWxsbGlzdDogQ2VsbExpc3QpIHtcblxuICAgIGNlbGxsaXN0LmZvcm1hdCh7XG4gICAgICAgIHNwYW46IFsgMSwgMSBdXG4gICAgfSk7IC8vIHVubWVyZ2UuLi5cbn1cblxuZnVuY3Rpb24gcmV0cmFpdChjZWxsczogQ2VsbExpc3QsIGRlbHRhX2luZGVudDogbnVtYmVyKSB7XG4gICAgXG4gICAgZm9yKGxldCBjZWxsIG9mIGNlbGxzLmNlbGxzKSB7XG5cbiAgICAgICAgY29uc3QgZm9ybWF0ID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbCk7XG4gICAgICAgIGxldCBuZXdfZm9ybWF0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG4gICAgICAgIGlmKCAhIGZvcm1hdC5oYXNQcm9wZXJ0eShcImFsaWduX3JpZ2h0XCIpICYmICEgZm9ybWF0Lmhhc1Byb3BlcnR5KFwiYWxpZ25fbGVmdFwiKSApXG4gICAgICAgICAgICBuZXdfZm9ybWF0LmFsaWduX2xlZnQgPSB0cnVlO1xuXG4gICAgICAgIG5ld19mb3JtYXQuaW5kZW50ID0gKyhmb3JtYXQuZ2V0UHJvcGVydHkoXCJpbmRlbnRcIikgPz8gMCkgKyBkZWx0YV9pbmRlbnQ7XG4gICAgICAgIFxuICAgICAgICBpZiggbmV3X2Zvcm1hdC5pbmRlbnQgPCAwKVxuICAgICAgICAgICAgbmV3X2Zvcm1hdC5pbmRlbnQgPSAwO1xuXG4gICAgICAgIGNlbGxzLmZvcm1hdChuZXdfZm9ybWF0KTsgICAgIFxuICAgIH1cbn1cblxuZnVuY3Rpb24gcHJlY2lzaW9uKGNlbGxzOiBDZWxsTGlzdCwgZGVsdGFfcHJlYzogbnVtYmVyKSB7XG5cbiAgICBsZXQgcHJlY2lzaW9uID0gdW5kZWZpbmVkO1xuICAgIGZvcihsZXQgY2VsbCBvZiBjZWxscy5jZWxscykge1xuICAgICAgICBjb25zdCBwcmVjID0gKyhGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxsKS5nZXRQcm9wZXJ0eShcInByZWNpc2lvblwiKSA/PyAyKTtcbiAgICAgICAgaWYoIHByZWNpc2lvbiA9PT0gdW5kZWZpbmVkIHx8IHByZWMgPCBwcmVjaXNpb24gKVxuICAgICAgICAgICAgcHJlY2lzaW9uID0gcHJlYztcbiAgICB9XG5cbiAgICBwcmVjaXNpb24gPz89IDI7XG4gICAgcHJlY2lzaW9uICs9IGRlbHRhX3ByZWM7XG4gICAgaWYocHJlY2lzaW9uIDwgMClcbiAgICAgICAgcHJlY2lzaW9uID0gMDtcblxuICAgIGNlbGxzLmZvcm1hdCh7cHJlY2lzaW9ufSk7XG59XG5cbmNvbnN0IGZjdHM6IFJlY29yZDxzdHJpbmcsIHsgYWN0aW9uOiAoY2VsbHM6IENlbGxMaXN0KSA9PnZvaWQsIGVuYWJsZWQ/OiAoY2VsbHM6IENlbGxMaXN0KSA9PiBib29sZWFuIH0+ID0ge1xuICAgIFwiZm9ybWF0X3plcm9fcDFcIjoge1xuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuICAgICAgICAgICAgcHJlY2lzaW9uKGNlbGxzLCArMSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiZm9ybWF0X3plcm9fbTFcIjoge1xuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuICAgICAgICAgICAgcHJlY2lzaW9uKGNlbGxzLCAtMSk7XG4gICAgICAgIH1cbiAgICB9LFwiZm9ybWF0X3BvdXJjZW50XCI6IHtcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcblxuICAgICAgICAgICAgaWYoIEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzKS5nZXRQcm9wZXJ0eSgnZm9ybWF0JykgPT09IEZvcm1hdHMucG91cmNlbnQgKSB7XG4gICAgICAgICAgICAgICAgY2VsbHMuZm9ybWF0KHtmb3JtYXQ6IG51bGx9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjZWxscy5mb3JtYXQoRm9ybWF0cy5wb3VyY2VudCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVuYWJsZWQ6IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzKS5nZXRQcm9wZXJ0eSgnZm9ybWF0JykgPT09IEZvcm1hdHMucG91cmNlbnQ7XG4gICAgICAgIH1cbiAgICB9LFwiZm9ybWF0X25iXCI6IHtcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcblxuICAgICAgICAgICAgaWYoIEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzKS5nZXRQcm9wZXJ0eSgnZm9ybWF0JykgPT09IEZvcm1hdHMubnVtYmVyICkge1xuICAgICAgICAgICAgICAgIGNlbGxzLmZvcm1hdCh7Zm9ybWF0OiBudWxsfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2VsbHMuZm9ybWF0KEZvcm1hdHMubnVtYmVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5hYmxlZDogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHMpLmdldFByb3BlcnR5KCdmb3JtYXQnKSA9PT0gRm9ybWF0cy5udW1iZXI7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiZm9ybWF0X21vbm5haWVcIjoge1xuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuXG4gICAgICAgICAgICBpZiggRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHMpLmdldFByb3BlcnR5KCdmb3JtYXQnKSA9PT0gRm9ybWF0cy5ldXJvcyApIHtcbiAgICAgICAgICAgICAgICBjZWxscy5mb3JtYXQoe2Zvcm1hdDogbnVsbH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNlbGxzLmZvcm1hdChGb3JtYXRzLmV1cm9zKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5hYmxlZDogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHMpLmdldFByb3BlcnR5KCdmb3JtYXQnKSA9PT0gRm9ybWF0cy5ldXJvcztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJyZXRyYWl0X20xXCI6IHtcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcbiAgICAgICAgICAgIHJldHJhaXQoY2VsbHMsIC0xKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJyZXRyYWl0X3AxXCI6IHsgLy8gVE9ETzogbTEuLi5cbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcbiAgICAgICAgICAgIHJldHJhaXQoY2VsbHMsICsxKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJib3JkZXJcIjoge1xuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuICAgICAgICAgICAgY2VsbHMuZm9ybWF0KHtcbiAgICAgICAgICAgICAgICBib3JkZXJfdG9wOiB0cnVlLFxuICAgICAgICAgICAgICAgIGJvcmRlcl9ib3R0b206IHRydWUsXG4gICAgICAgICAgICAgICAgYm9yZGVyX2xlZnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgYm9yZGVyX3JpZ2h0OiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJ1bm1lcmdlXCI6IHtcbiAgICAgICAgYWN0aW9uOiB1bm1lcmdlXG4gICAgfSxcbiAgICBcIm1lcmdlXCI6IHtcbiAgICAgICAgYWN0aW9uOiBtZXJnZVxuICAgIH0sXG4gICAgXCJtZXJnZV9jZW50ZXJcIjoge1xuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxsaXN0OiBDZWxsTGlzdCkge1xuXG4gICAgICAgICAgICBsZXQgdW5tZXJnZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc3Qgc2hlZXQgPSBjZWxsbGlzdC5zaGVldDtcblxuICAgICAgICAgICAgZm9yKGxldCBjZWxsIG9mIGNlbGxsaXN0LmNlbGxzKVxuICAgICAgICAgICAgICAgIGlmKCBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxsKS5oYXNQcm9wZXJ0eShcInNwYW5cIikgKSB7XG4gICAgICAgICAgICAgICAgICAgIHVubWVyZ2UoIG5ldyBDZWxsTGlzdChzaGVldCwgW2NlbGxdKSApO1xuICAgICAgICAgICAgICAgICAgICB1bm1lcmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih1bm1lcmdlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIG1lcmdlKGNlbGxsaXN0LCB0cnVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5hYmxlZDogZnVuY3Rpb24oY2VsbGxpc3Q6IENlbGxMaXN0KSB7XG5cbiAgICAgICAgICAgIGZvcihsZXQgY2VsbCBvZiBjZWxsbGlzdC5jZWxscylcbiAgICAgICAgICAgICAgICBpZiggRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbCkuaGFzUHJvcGVydHkoXCJzcGFuXCIpIClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgY3NzID0gYFxuICAgIDpob3N0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcblxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIH1cblxuICAgIDpob3N0IC52YmFyIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWJhYmFiO1xuICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICB9XG5cbiAgICA6aG9zdCBzZWxlY3Qge1xuICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cbmBcblxuY29uc3QgaXRlbWNzcyA9IGBcblxuICAgIDpob3N0IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIDpob3N0KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG5cbiAgICA6aG9zdChbdmFsdWVdKSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gICAgfVxuXG4gICAgOmhvc3QsIDpob3N0ID4gZGl2IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgOmhvc3Qge1xuICAgICAgICBwYWRkaW5nOiAxcHg7XG4gICAgfVxuXG4gICAgOmhvc3QgPiBkaXYge1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKCAxLjJlbSAtIDFweCApO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTFweDtcbiAgICAgICAgcmlnaHQ6IC0xcHg7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiBjYWxjKCAoIDEuMmVtIC0gMXB4IC0gMnB4ICkgLyAyICk7XG4gICAgICAgICAgICByaWdodDogMXB4O1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHdpZHRoOiAwOyBcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIC0tc2l6ZTogNHB4O1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IHZhcigtLXNpemUpIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1zaXplKSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYm9yZGVyLXRvcDogdmFyKC0tc2l6ZSkgc29saWQgYmxhY2s7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICA6aG9zdCg6aG92ZXI6bm90KC5lbmFibGVkKSksIDpob3N0KDpob3Zlcjpub3QoLmVuYWJsZWQpKSA+IGRpdiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5Njk2OTY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB9XG5cbiAgICA6aG9zdCguZW5hYmxlZCkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZiNmI2O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5YjliO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgfVxuYDtcblxuZXhwb3J0IGNsYXNzIENhbGNUb29sYmFySXRlbSBleHRlbmRzIExJU1Moe1xuICAgIGNzczogaXRlbWNzc1xufSkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY29udGVudC5zcmMgPSBgLi4vLi4vLi4vLi4vYXNzZXRzL3RhYmxldXIvaW1nL3Rvb2xiYXIvJHt0aGlzLmhvc3QuZ2V0QXR0cmlidXRlKCduYW1lJyl9LnBuZ2A7XG5cbiAgICAgICAgaWYoICEgdGhpcy5ob3N0Lmhhc0F0dHJpYnV0ZSgndmFsdWUnKSApIHtcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoIGNvbnRlbnQgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBsZXQgY29sb3JfcGlja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbdHlwZT1cImNvbG9yXCJdJyk7XG4gICAgICAgICAgICBpZiggY29sb3JfcGlja2VyID09PSBudWxsICkge1xuICAgICAgICAgICAgICAgIGNvbG9yX3BpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgY29sb3JfcGlja2VyLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjb2xvclwiKTtcbiAgICAgICAgICAgICAgICBjb2xvcl9waWNrZXIuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGNvbG9yX3BpY2tlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2FuY2VsJykpO1xuXG4gICAgICAgICAgICBsZXQgY2FuY2VsID0gZmFsc2U7XG4gICAgICAgICAgICBjb2xvcl9waWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2FuY2VsJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNhbmNlbCA9IHRydWU7XG4gICAgICAgICAgICB9LCB7b25jZTogdHJ1ZX0pO1xuXG4gICAgICAgICAgICBjb2xvcl9waWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoIGNhbmNlbCApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY29sb3JfcGlja2VyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhvc3QuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiY2xpY2tcIiwge2J1YmJsZXM6IHRydWV9KSApO1xuXG4gICAgICAgICAgICB9LCB7b25jZTogdHJ1ZX0pO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChjb2xvcl9waWNrZXIpO1xuICAgICAgICAgICAgY29sb3JfcGlja2VyLmNsaWNrKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoIGNvbnRlbnQsIHNwYW4gKTtcbiAgICB9XG59XG5cbkxJU1MuZGVmaW5lKCdjYWxjLXRvb2xiYXItaXRlbScsIENhbGNUb29sYmFySXRlbSk7XG5cbmV4cG9ydCBjbGFzcyBDYWxjVG9vbGJhciBleHRlbmRzIExJU1Moe1xuICAgIGNvbnRlbnQsXG4gICAgY3NzXG59KSB7XG5cbiAgICAjYnRuczogUmVjb3JkPHN0cmluZywgSFRNTEVsZW1lbnQ+ID0ge307XG5cbiAgICBkaXNhYmxlQWxsRXhjZXB0KC4uLmV4Y2VwdGlvbjogc3RyaW5nW10pIHtcbiAgICAgICAgZm9yKGxldCBidG5fbmFtZSBpbiB0aGlzLiNidG5zKVxuICAgICAgICAgICAgaWYoICEgZXhjZXB0aW9uLmluY2x1ZGVzKGJ0bl9uYW1lKSApXG4gICAgICAgICAgICAgICAgdGhpcy4jYnRuc1tidG5fbmFtZV0udG9nZ2xlQXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICBcbiAgICAgICAgaWYoICEgZXhjZXB0aW9uLmluY2x1ZGVzKFwiZm9udF9zaXplXCIpIClcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yPEhUTUxTZWxlY3RFbGVtZW50PignLmZvbnRfc2l6ZScpIS50b2dnbGVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgbGV0IGZvbnRfc2l6ZXMgPSBbXG4gICAgICAgICAgICA2LCA3LCA4LCA5LCAxMCwgMTAuNSwgMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgMTgsIDIwLCAyMSwgMjIsIDI0LCAyNiwgMjgsIDMyLCAzNiwgNDAsIDQyLCA0NCwgNDgsIDU0LCA2MCwgNjYsIDcyLCA4MCwgODgsIDk2XG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3QgYnRucyA9IHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignY2FsYy10b29sYmFyLWl0ZW0nKTtcbiAgICAgICAgZm9yKGxldCBidG4gb2YgYnRucylcbiAgICAgICAgICAgIHRoaXMuI2J0bnNbYnRuLmdldEF0dHJpYnV0ZSgnbmFtZScpIV0gPSBidG47XG5cbiAgICAgICAgY29uc3QgZm9udF9zaXplc19zZWxlY3QgPSB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvcjxIVE1MU2VsZWN0RWxlbWVudD4oJy5mb250X3NpemUnKSE7XG4gICAgICAgIGZvcihsZXQgZm9udF9zaXplIG9mIGZvbnRfc2l6ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IG5ldyBPcHRpb24oYCR7Zm9udF9zaXplLnRvU3RyaW5nKCkucmVwbGFjZSgnLicsICcsJyl9IHB0YCwgYCR7Zm9udF9zaXplfXB0YCk7XG4gICAgICAgICAgICBmb250X3NpemVzX3NlbGVjdC5hcHBlbmQob3B0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBlbGVtID0gZXYudGFyZ2V0ISBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIGlmKCBlbGVtLnRhZ05hbWUgIT09ICdDQUxDLVRPT0xCQVItSVRFTScpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb25zdCBuID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ25hbWUnKSEgYXMga2V5b2YgdHlwZW9mIGZjdHM7XG4gICAgICAgICAgICBpZiggZWxlbS5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSA9PT0gJ2ZjdCcpIHtcblxuICAgICAgICAgICAgICAgIGZjdHNbbl0uYWN0aW9uKHRoaXMuI3NoZWV0LnNlbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgdGhpcy4jdXBkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gIGVsZW0uaGFzQXR0cmlidXRlKCd2YWx1ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBlbGVtLmdldEF0dHJpYnV0ZSgndmFsdWUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZWxlbS5jbGFzc0xpc3QudG9nZ2xlKCdlbmFibGVkJyk7XG5cbiAgICAgICAgICAgIGxldCBmb3JtYXQgPSBuZXcgRm9ybWF0KHtbbl06IHZhbHVlIH0pO1xuICAgICAgICAgICAgZm9ybWF0LmFwcGx5VG8oIHRoaXMuI3NoZWV0LnNlbGVjdGlvbiApO1xuICAgICAgICAgICAgdGhpcy4jdXBkYXRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvbnRfc2l6ZXNfc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuXG4gICAgICAgICAgICAvL1RPRE8uLi5cbiAgICAgICAgICAgIGxldCBmb3JtYXQgPSBuZXcgRm9ybWF0KHtmb250X3NpemU6IGZvbnRfc2l6ZXNfc2VsZWN0LnZhbHVlfSk7XG4gICAgICAgICAgICBmb3JtYXQuYXBwbHlUbyggdGhpcy4jc2hlZXQuc2VsZWN0aW9uICk7XG4gICAgICAgICAgICB0aGlzLiN1cGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgI3NoZWV0ITpDYWxjU2hlZXQ7XG5cblxuICAgICN1cGRhdGUoKSB7XG5cbiAgICAgICAgaWYoIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5jZWxscy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZm9ybWF0ID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQodGhpcy4jc2hlZXQuc2VsZWN0aW9uKTtcblxuICAgICAgICBmb3IobGV0IG5hbWUgaW4gdGhpcy4jYnRucykge1xuXG4gICAgICAgICAgICBsZXQgZW5hYmxlZCA9IGZvcm1hdC5nZXRQcm9wZXJ0eShuYW1lKSA9PT0gdHJ1ZTtcbiAgICAgICAgICAgIGlmKG5hbWUgaW4gZmN0cylcbiAgICAgICAgICAgICAgICBlbmFibGVkID0gZmN0c1tuYW1lIGFzIGtleW9mIHR5cGVvZiBmY3RzXS5lbmFibGVkPy4odGhpcy4jc2hlZXQuc2VsZWN0aW9uKSA/PyBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy4jYnRuc1tuYW1lXS5jbGFzc0xpc3QudG9nZ2xlKCdlbmFibGVkJywgZW5hYmxlZCApXG4gICAgICAgIH1cblxuICAgICAgICAvL1RPRE8uLi5cbiAgICAgICAgY29uc3QgZm9udF9zaXplc19zZWxlY3QgPSB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvcjxIVE1MU2VsZWN0RWxlbWVudD4oJy5mb250X3NpemUnKSE7XG4gICAgICAgIGZvbnRfc2l6ZXNfc2VsZWN0LnZhbHVlID0gZm9ybWF0LmdldFByb3BlcnR5KCdmb250X3NpemUnKTtcbiAgICAgICAgLy9UT0RPOiB1cGRhdGUuLi5cbiAgICB9XG5cbiAgICBzeW5jVG8oc2hlZXQ6IENhbGNTaGVldCkge1xuXG4gICAgICAgIHRoaXMuI3NoZWV0ID0gc2hlZXQ7XG5cblxuICAgICAgICBzaGVldC5zZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLiN1cGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuI3VwZGF0ZSgpO1xuXG4gICAgfVxuXG59XG5cbkxJU1MuZGVmaW5lKCdjYWxjLXRvb2xiYXInLCBDYWxjVG9vbGJhcik7IiwiZXhwb3J0IGRlZmF1bHQgW1xuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiUiAxLTAxIFRhYmxldXIgZXQgUmVwb3J0aW5nXCIsXG4gICAgICAgIHNuYW1lOiBcIlIxLTAxIFRhYmxldXJcIixcbiAgICAgICAgcGF0aCA6IFwiUjEtMDFcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNNXCIsXG4gICAgICAgICAgICAgICAgcGF0aDogXCJDTVwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiQ00xXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQ00yXCJcbiAgICAgICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJUUFwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiVFBcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIlRQMVwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIlIgMS0wMiBCYXNlcyBkZSBEb25uw6llcyBSZWxhdGlvbm5lbGxlcyAxXCIsXG4gICAgICAgIHNuYW1lOiBcIlIxLTAyIEJEUjFcIixcbiAgICAgICAgcGF0aCA6IFwiUjEtMDJcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIFwiQ01cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlRQXCIgLFxuICAgICAgICAgICAgICAgIHBhdGggOiBcIlRQXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgXCJUUDFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJUUDJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJUUDNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJUUDRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJUUDVcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cbl07XG5cbmV4cG9ydCBjb25zdCByb290X3BhdGggPSBbXCJsb2NhbGhvc3RcIiwgXCIxMjcuMC4wLjFcIl0uaW5jbHVkZXMobG9jYXRpb24uaG9zdG5hbWUpID8gXCIvZGlzdC9kZXYvcGFnZXMvXCIgOiBcIi9Db3Vycy9kaXN0L2Rldi9wYWdlcy9cIjsiLCJcbmltcG9ydCBwYWdlcywge3Jvb3RfcGF0aH0gZnJvbSBcIi4vY29udGVudFwiO1xuXG4vKlxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXByaW50JywgKCkgPT4ge1xuICAvLy4uLlxufSk7XG4qL1xuXG4vL1RPRE86IGxpbmtzLi4uXG5jb25zdCBtYWluICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKSE7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpITtcblxuY29uc3QgdGl0bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCJoMSwgaDIsIGgzLCBoNFwiKTtcblxudHlwZSBOb2RlID0ge1xuICAgIGh0bWwgICAgOiBIVE1MRWxlbWVudCxcbiAgICBsZXZlbCAgIDogbnVtYmVyLFxuICAgIHBhcmVudCAgOiBudWxsfE5vZGUsXG4gICAgY2hpbGRyZW46IE5vZGVbXVxufTtcblxuY29uc3QgaHRyZWU6IE5vZGUgPSB7XG4gICAgaHRtbCAgICA6IG1haW4sXG4gICAgbGV2ZWwgICA6IDAsXG4gICAgcGFyZW50ICA6IG51bGwsXG4gICAgY2hpbGRyZW46IFtdLFxufTtcbmxldCBodHJlZV9jdXJzb3IgPSBodHJlZTtcbmZvcihsZXQgdGl0bGUgb2YgdGl0bGVzKSB7XG4gICAgY29uc3QgbGV2ZWwgPSArdGl0bGUudGFnTmFtZS5zbGljZSgxKTtcbiAgICBcbiAgICB3aGlsZSggbGV2ZWwgPD0gaHRyZWVfY3Vyc29yLmxldmVsIClcbiAgICAgICAgaHRyZWVfY3Vyc29yID0gaHRyZWVfY3Vyc29yLnBhcmVudCE7XG5cbiAgICBjb25zdCBlbGVtOiBOb2RlID0ge1xuICAgICAgICBodG1sOiB0aXRsZSxcbiAgICAgICAgbGV2ZWwsXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgcGFyZW50OiBodHJlZV9jdXJzb3JcbiAgICB9O1xuXG5cbiAgICBodHJlZV9jdXJzb3IuY2hpbGRyZW4ucHVzaChlbGVtKTtcblxuICAgIGh0cmVlX2N1cnNvciA9IGVsZW07XG59XG5cbmZ1bmN0aW9uIHNlYXJjaEN1ckhlYWRlcihodHJlZTogTm9kZSwgcG9zaXRpb246IG51bWJlcik6IG51bGwgfCBOb2RlIHtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBodHJlZS5jaGlsZHJlbjtcblxuICAgIGZvcihsZXQgaSA9IGhlYWRlcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpXG4gICAgICAgIGlmKCBoZWFkZXJzW2ldLmh0bWwub2Zmc2V0VG9wIDw9IHBvc2l0aW9uICsgMzIgKVxuICAgICAgICAgICAgcmV0dXJuIHNlYXJjaEN1ckhlYWRlcihoZWFkZXJzW2ldLCBwb3NpdGlvbikgPz8gaGVhZGVyc1tpXTtcblxuICAgIHJldHVybiBudWxsO1xufVxuXG5jb25zdCBoaWQgPSBbXG4gICAgW10sXG4gICAgW1wiSVwiLCBcIklJXCIsIFwiSUlJXCIsIFwiSVZcIl0sXG4gICAgW1wiMVwiLCBcIjJcIixcIjNcIixcIjVcIixcIjZcIixcIjdcIixcIjhcIixcIjlcIl0sXG4gICAgW1wiYVwiLCBcImJcIixcImNcIixcImRcIixcImVcIixcImZcIixcImdcIixcImhcIl0sXG5dXG5cbmZ1bmN0aW9uIGdldFRpdGxlUHJlZml4KHM6IE5vZGUpIHtcblxuICAgIGlmKCBzLmxldmVsID49IGhpZC5sZW5ndGggKVxuICAgICAgICByZXR1cm4gXCJcIjtcblxuICAgIGNvbnN0IGlkeCA9IHMucGFyZW50IS5jaGlsZHJlbi5pbmRleE9mKHMpO1xuXG4gICAgY29uc3QgbnVtID0gaGlkW3MubGV2ZWxdW2lkeF07XG5cbiAgICByZXR1cm4gYCR7bnVtfS4gYDtcbn1cblxuZnVuY3Rpb24gYnVpbGRNZW51KG5vZGVzOiBOb2RlW10pIHtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG5cbiAgICBtZW51LmFwcGVuZCggLi4uIG5vZGVzLm1hcCggKHMsaWR4KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgaXRlbS50ZXh0Q29udGVudD0gYCR7Z2V0VGl0bGVQcmVmaXgocyl9JHtzLmh0bWwudGV4dENvbnRlbnR9YDtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGAjJHtzLmh0bWwuaWR9YCk7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pICk7XG5cbiAgICByZXR1cm4gbWVudTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlSGVhZGVyKCkge1xuXG4gICAgY29uc3QgbGFzdCA9IHNlYXJjaEN1ckhlYWRlciggaHRyZWUsIG1haW4uc2Nyb2xsVG9wKSE7XG5cbiAgICBsZXQgaGVhZGVycyA9IFtdO1xuICAgIGxldCBjdXJzb3IgID0gbGFzdDtcblxuICAgIHdoaWxlKGN1cnNvci5odG1sICE9PSBtYWluKSB7XG4gICAgICAgIGhlYWRlcnMucHVzaChjdXJzb3IpO1xuICAgICAgICBjdXJzb3IgPSBjdXJzb3IucGFyZW50ITtcbiAgICB9XG5cbiAgICBjb25zdCBodG1sID0gaGVhZGVycy5yZXZlcnNlKCkubWFwKCAoaG5vZGUsaSkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGggPSBobm9kZS5odG1sO1xuICAgICAgICBjb25zdCBoX2h0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSBgJHtnZXRUaXRsZVByZWZpeChobm9kZSl9JHtoLnRleHRDb250ZW50fWA7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgYCMke2guaWR9YCk7XG5cbiAgICAgICAgY29uc3QgbWVudSA9IGJ1aWxkTWVudShobm9kZS5wYXJlbnQhLmNoaWxkcmVuKTtcbiAgICAgICAgaF9odG1sLmFwcGVuZChsaW5rLCBtZW51KTtcblxuICAgICAgICByZXR1cm4gaF9odG1sO1xuICAgIH0pO1xuXG4gICAgaWYoIGxhc3QuY2hpbGRyZW4ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IGVtcHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgICAgICAgZW1wdHkuYXBwZW5kKCBidWlsZE1lbnUobGFzdC5jaGlsZHJlbikgKTtcblxuICAgICAgICBodG1sLnB1c2goZW1wdHkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZV9wYWdlX2hyZWYocGF0aHByZWZpeDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIGRlc2M6IGFueSkge1xuXG4gICAgICAgIGxldCBocmVmID0gYCR7cGF0aHByZWZpeH0ke3BhdGh9L2A7XG5cbiAgICAgICAgd2hpbGUoZGVzYy5jaGlsZHJlbj8ubGVuZ3RoKSB7XG4gICAgICAgICAgICBkZXNjID0gZGVzYy5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIGhyZWYgKz0gYCR7ZGVzYy5wYXRoID8/IGRlc2N9L2A7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaHJlZjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlX3BhZ2VfbWVudShwYXRocHJlZml4OiBzdHJpbmcsIHBhdGg6IHN0cmluZywgcGFnZXM6IGFueSkge1xuICAgICAgICBjb25zdCBkZXNjID0gcGFnZXMuZmluZCggKHBhZ2U6IGFueSkgPT4gcGFnZSA9PT0gcGF0aCB8fCBwYWdlLnBhdGggPT09IHBhdGggKSE7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSBkZXNjLnNuYW1lID8/IGRlc2MubmFtZSA/PyBkZXNjO1xuICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBtYWtlX3BhZ2VfaHJlZihwYXRocHJlZml4LCBwYXRoLCBkZXNjKSApO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuICAgIFxuICAgICAgICAgICAgbWVudS5hcHBlbmQoIC4uLiBwYWdlcy5tYXAoIChwYWdlOmFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50PSBwYWdlLm5hbWUgPz8gcGFnZTtcbiAgICAgICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgbWFrZV9wYWdlX2hyZWYocGF0aHByZWZpeCwgcGFnZS5wYXRoPz9wYWdlLCBwYWdlKSApO1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfSkgKTtcbiAgICBcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kKGxpbmssIG1lbnUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICAgIFxuICAgIGxldCBjdXJwYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKHJvb3RfcGF0aC5sZW5ndGgpLnNwbGl0KCcvJyk7XG5cbiAgICBjb25zdCBtb2R1bGVfaHRtbCA9IG1ha2VfcGFnZV9tZW51KHJvb3RfcGF0aCwgY3VycGFnZVswXSwgcGFnZXMpO1xuXG4gICAgY29uc3QgZGVzYyA9IHBhZ2VzLmZpbmQoIChwYWdlOiBhbnkpID0+IHBhZ2UucGF0aCA9PT0gY3VycGFnZVswXSApITtcbiAgICBjb25zdCB0eXBlX2h0bWwgICA9IG1ha2VfcGFnZV9tZW51KHJvb3RfcGF0aCArIGN1cnBhZ2VbMF0gKyBcIi9cIiwgY3VycGFnZVsxXSwgZGVzYy5jaGlsZHJlbik7XG5cbiAgICBjb25zdCBkZXNjX3R5cGUgPSBkZXNjLmNoaWxkcmVuLmZpbmQoIChwYWdlOiBhbnkpID0+IChwYWdlPy5wYXRoID8/IHBhZ2UpID09PSBjdXJwYWdlWzFdICkhO1xuICAgIGlmKCB0eXBlb2YgZGVzY190eXBlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIC8vIHRpdGxlIG51bVxuICAgICAgICBjb25zdCBkZXNjMl9pZHggPSBkZXNjX3R5cGUuY2hpbGRyZW4uZmluZEluZGV4KCAocGFnZTogYW55KSA9PiBwYWdlPy5wYXRoID8/IHBhZ2UgPT09IGN1cnBhZ2VbMl0gKSE7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoXCItLWhlYWRlcl9zdGFydF9pZFwiLCBgJHtkZXNjMl9pZHh9YCk7XG4gICAgICAgIC8vIG1lbnVcbiAgICAgICAgY29uc3Qgc2Vzc2lvbl9odG1sICAgPSBtYWtlX3BhZ2VfbWVudShyb290X3BhdGggKyBjdXJwYWdlWzBdICsgXCIvXCIrIGN1cnBhZ2VbMV0gKyBcIi9cIiwgY3VycGFnZVsyXSwgZGVzY190eXBlLmNoaWxkcmVuKTtcbiAgICAgICAgaHRtbFswXSA9IHNlc3Npb25faHRtbDtcbiAgICB9XG5cbiAgICBoZWFkZXIucmVwbGFjZUNoaWxkcmVuKG1vZHVsZV9odG1sLCB0eXBlX2h0bWwsIC4uLmh0bWwpO1xufVxuXG5tYWluLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZUhlYWRlcik7XG51cGRhdGVIZWFkZXIoKTsiLCIvL2h0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ5NDE0My9jcmVhdGluZy1hLW5ldy1kb20tZWxlbWVudC1mcm9tLWFuLWh0bWwtc3RyaW5nLXVzaW5nLWJ1aWx0LWluLWRvbS1tZXRob2RzLW9yLXByb1xuZXhwb3J0IGZ1bmN0aW9uIHN0cjJodG1sPFQgZXh0ZW5kcyBIVE1MRWxlbWVudD4oaHRtbDogc3RyaW5nKTogVCB7XG4gICAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICBodG1sID0gaHRtbC50cmltKCk7IC8vIE5ldmVyIHJldHVybiBhIHRleHQgbm9kZSBvZiB3aGl0ZXNwYWNlIGFzIHRoZSByZXN1bHRcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkISBhcyBUO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyMkRGKGh0bWw6IHN0cmluZyk6IERvY3VtZW50RnJhZ21lbnQge1xuICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgaHRtbCA9IGh0bWwudHJpbSgpOyAvLyBOZXZlciByZXR1cm4gYSB0ZXh0IG5vZGUgb2Ygd2hpdGVzcGFjZSBhcyB0aGUgcmVzdWx0XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudDtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwidmFyIHdlYnBhY2tRdWV1ZXMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIHF1ZXVlc1wiKSA6IFwiX193ZWJwYWNrX3F1ZXVlc19fXCI7XG52YXIgd2VicGFja0V4cG9ydHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGV4cG9ydHNcIikgOiBcIl9fd2VicGFja19leHBvcnRzX19cIjtcbnZhciB3ZWJwYWNrRXJyb3IgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGVycm9yXCIpIDogXCJfX3dlYnBhY2tfZXJyb3JfX1wiO1xudmFyIHJlc29sdmVRdWV1ZSA9IChxdWV1ZSkgPT4ge1xuXHRpZihxdWV1ZSAmJiBxdWV1ZS5kIDwgMSkge1xuXHRcdHF1ZXVlLmQgPSAxO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tKSk7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0gPyBmbi5yKysgOiBmbigpKSk7XG5cdH1cbn1cbnZhciB3cmFwRGVwcyA9IChkZXBzKSA9PiAoZGVwcy5tYXAoKGRlcCkgPT4ge1xuXHRpZihkZXAgIT09IG51bGwgJiYgdHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIikge1xuXHRcdGlmKGRlcFt3ZWJwYWNrUXVldWVzXSkgcmV0dXJuIGRlcDtcblx0XHRpZihkZXAudGhlbikge1xuXHRcdFx0dmFyIHF1ZXVlID0gW107XG5cdFx0XHRxdWV1ZS5kID0gMDtcblx0XHRcdGRlcC50aGVuKChyKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXhwb3J0c10gPSByO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSwgKGUpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFcnJvcl0gPSBlO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgb2JqID0ge307XG5cdFx0XHRvYmpbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChmbihxdWV1ZSkpO1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdH1cblx0dmFyIHJldCA9IHt9O1xuXHRyZXRbd2VicGFja1F1ZXVlc10gPSB4ID0+IHt9O1xuXHRyZXRbd2VicGFja0V4cG9ydHNdID0gZGVwO1xuXHRyZXR1cm4gcmV0O1xufSkpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5hID0gKG1vZHVsZSwgYm9keSwgaGFzQXdhaXQpID0+IHtcblx0dmFyIHF1ZXVlO1xuXHRoYXNBd2FpdCAmJiAoKHF1ZXVlID0gW10pLmQgPSAtMSk7XG5cdHZhciBkZXBRdWV1ZXMgPSBuZXcgU2V0KCk7XG5cdHZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cdHZhciBjdXJyZW50RGVwcztcblx0dmFyIG91dGVyUmVzb2x2ZTtcblx0dmFyIHJlamVjdDtcblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqKSA9PiB7XG5cdFx0cmVqZWN0ID0gcmVqO1xuXHRcdG91dGVyUmVzb2x2ZSA9IHJlc29sdmU7XG5cdH0pO1xuXHRwcm9taXNlW3dlYnBhY2tFeHBvcnRzXSA9IGV4cG9ydHM7XG5cdHByb21pc2Vbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChxdWV1ZSAmJiBmbihxdWV1ZSksIGRlcFF1ZXVlcy5mb3JFYWNoKGZuKSwgcHJvbWlzZVtcImNhdGNoXCJdKHggPT4ge30pKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBwcm9taXNlO1xuXHRib2R5KChkZXBzKSA9PiB7XG5cdFx0Y3VycmVudERlcHMgPSB3cmFwRGVwcyhkZXBzKTtcblx0XHR2YXIgZm47XG5cdFx0dmFyIGdldFJlc3VsdCA9ICgpID0+IChjdXJyZW50RGVwcy5tYXAoKGQpID0+IHtcblx0XHRcdGlmKGRbd2VicGFja0Vycm9yXSkgdGhyb3cgZFt3ZWJwYWNrRXJyb3JdO1xuXHRcdFx0cmV0dXJuIGRbd2VicGFja0V4cG9ydHNdO1xuXHRcdH0pKVxuXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdGZuID0gKCkgPT4gKHJlc29sdmUoZ2V0UmVzdWx0KSk7XG5cdFx0XHRmbi5yID0gMDtcblx0XHRcdHZhciBmblF1ZXVlID0gKHEpID0+IChxICE9PSBxdWV1ZSAmJiAhZGVwUXVldWVzLmhhcyhxKSAmJiAoZGVwUXVldWVzLmFkZChxKSwgcSAmJiAhcS5kICYmIChmbi5yKyssIHEucHVzaChmbikpKSk7XG5cdFx0XHRjdXJyZW50RGVwcy5tYXAoKGRlcCkgPT4gKGRlcFt3ZWJwYWNrUXVldWVzXShmblF1ZXVlKSkpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBmbi5yID8gcHJvbWlzZSA6IGdldFJlc3VsdCgpO1xuXHR9LCAoZXJyKSA9PiAoKGVyciA/IHJlamVjdChwcm9taXNlW3dlYnBhY2tFcnJvcl0gPSBlcnIpIDogb3V0ZXJSZXNvbHZlKGV4cG9ydHMpKSwgcmVzb2x2ZVF1ZXVlKHF1ZXVlKSkpO1xuXHRxdWV1ZSAmJiBxdWV1ZS5kIDwgMCAmJiAocXVldWUuZCA9IDApO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ21vZHVsZScgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMi9pbmRleC50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTIvaW5kZXguY3NzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00yL2luZGV4Lm1kXCIpO1xuIiwiIl0sIm5hbWVzIjpbIlNoYWRvd0NmZyIsIl9fY3N0cl9ob3N0IiwiQ0FOX0hBVkVfU0hBRE9XIiwiX2Nhbkhhc1NoYWRvdyIsInRhZyIsImluY2x1ZGVzIiwiX2VsZW1lbnQydGFnbmFtZSIsIkxJU1MiLCJleHRlbmRzIiwicF9leHRlbmRzIiwiaG9zdCIsInBfaG9zdCIsImRlcGVuZGVuY2llcyIsInBfZGVwcyIsImF0dHJpYnV0ZXMiLCJwX2F0dHJzIiwicGFyYW1zIiwiY29udGVudCIsImNzcyIsInNoYWRvdyIsInBfc2hhZG93IiwiSFRNTEVsZW1lbnQiLCJfZXh0ZW5kcyIsIk9iamVjdCIsImNhbkhhc1NoYWRvdyIsIkVycm9yIiwidW5kZWZpbmVkIiwicHVzaCIsIkhUTUxUZW1wbGF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJ0cmltIiwiUmVzcG9uc2UiLCJ0ZXh0IiwiTElTU0Jhc2UiLCJQYXJhbWV0ZXJzIiwic3R5bGVzaGVldHMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJmZXRjaF9jc3MiLCJDU1NTdHlsZVNoZWV0IiwiSFRNTFN0eWxlRWxlbWVudCIsInNoZWV0Iiwic3R5bGUiLCJyZXBsYWNlIiwibWFwIiwiaWR4IiwiY29uc3RydWN0b3IiLCJhdHRycyIsInNldEF0dHJEZWZhdWx0IiwiYXR0ciIsInZhbHVlIiwib25BdHRyQ2hhbmdlZCIsIl9uYW1lIiwiX29sZFZhbHVlIiwiX25ld1ZhbHVlIiwiaXNJbkRPTSIsIm9uRE9NQ29ubmVjdGVkIiwib25ET01EaXNjb25uZWN0ZWQiLCJleHRlbmRzTElTUyIsIkxpc3MiLCJwYXJhbWV0ZXJzIiwiYXNzaWduIiwiRXh0ZW5kZWRMSVNTIiwidCIsImlkIiwiYnVpbGRMSVNTSG9zdCIsIl9wYXJhbXMiLCJhbHJlYWR5RGVjbGFyZWRDU1MiLCJTZXQiLCJHRVQiLCJTeW1ib2wiLCJTRVQiLCJwcm9wZXJ0aWVzIiwiZnJvbUVudHJpZXMiLCJuIiwiZW51bWVyYWJsZSIsImdldCIsInNldCIsIkF0dHJpYnV0ZXMiLCJuYW1lIiwiZGF0YSIsImRlZmF1bHRzIiwic2V0dGVyIiwiZGVmaW5lUHJvcGVydGllcyIsIkxJU1NIb3N0QmFzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiaXNJbml0IiwiaW5pdGlhbGl6ZSIsImFwaSIsImluaXQiLCJMSVNTU3luYyIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJjdXN0b21FbGVtZW50cyIsInVwZ3JhZGUiLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uQ2xpY2tFdmVudCIsIm9icyIsImdldEF0dHJpYnV0ZSIsImFkb3B0ZWRTdHlsZVNoZWV0cyIsInNoYXJlZENTUyIsImNzc3NlbGVjdG9yIiwiQ1NTU2VsZWN0b3IiLCJoYXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJodG1sX3N0eWxlc2hlZXRzIiwicnVsZSIsImNzc1J1bGVzIiwiY3NzVGV4dCIsImhlYWQiLCJhcHBlbmQiLCJhZGQiLCJ0ZW1wbGF0ZV9lbGVtIiwic3RyIiwiXyIsIm1hdGNoIiwiY2hpbGROb2RlcyIsIm9iaiIsImhhc1NoYWRvdyIsImdldFBhcnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0UGFydHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGFnTmFtZSIsInJlbW92ZUF0dHJpYnV0ZSIsIm9ic2VydmVkQXR0cmlidXRlcyIsImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayIsIm9sZFZhbHVlIiwibmV3VmFsdWUiLCJfRE9NQ29udGVudExvYWRlZCIsInJlYWR5U3RhdGUiLCJkZWZpbmUiLCJ0YWduYW1lIiwiQ29tcG9uZW50Q2xhc3MiLCJDbGFzcyIsImh0bWx0YWciLCJhbGwiLCJMSVNTY2xhc3MiLCJvcHRzIiwiaW5zZXJ0R2xvYmFsQ1NTUnVsZXMiLCJjc3Nfc3R5bGUiLCJyZXBsYWNlU3luYyIsImluc2VydFJ1bGUiLCJERUxFR0FURURfRVZFTlRTIiwiQUxSRUFEWV9QUk9DRVNTRUQiLCJldiIsImhhbmRsZXJzIiwidHlwZSIsImVsZW0iLCJjb21wb3NlZFBhdGgiLCJTaGFkb3dSb290Iiwid2luZG93IiwidGFyZ2V0Iiwic2VsZWN0b3IiLCJoYW5kbGVyIiwibWF0Y2hlcyIsImluc2VydEdsb2JhbERlbGVnYXRlZExpc3RlbmVyIiwiZXZlbnRfbmFtZSIsImNsb3Nlc3QiLCJlbGVtZW50IiwicmVzdWx0Iiwicm9vdCIsImdldFJvb3ROb2RlIiwiYnVpbGQiLCJwYXJlbnQiLCJjbGFzc2VzIiwiY3NzdmFycyIsImxpc3RlbmVycyIsIkN1c3RvbUNsYXNzIiwid2hlbkRlZmluZWQiLCJ0b0xvd2VyQ2FzZSIsImNsYXNzTGlzdCIsInNldFByb3BlcnR5IiwidG9nZ2xlQXR0cmlidXRlIiwiZGF0YXNldCIsInJlcGxhY2VDaGlsZHJlbiIsImdldExJU1MiLCJjYWxsYmFjayIsIndoZW5BbGxEZWZpbmVkIiwidGFnbmFtZXMiLCJpc0RlZmluZWQiLCJnZXROYW1lIiwiZ2V0TElTU1N5bmMiLCJfYnVpbGRRUyIsInRhZ25hbWVfb3JfcGFyZW50IiwicXMiLCJxc28iLCJxc2EiLCJlbGVtZW50cyIsInByb21pc2VzIiwicXNjIiwicmVzIiwicXNTeW5jIiwicXNhU3luYyIsInFzY1N5bmMiLCJMSVNTX0F1dG8iLCJuYXZpZ2F0b3IiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiLCJjb250cm9sbGVyIiwic3JjIiwibG9jYXRpb24iLCJwYXRobmFtZSIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJtdXRhdGlvbiIsImFkZGl0aW9uIiwiYWRkZWROb2RlcyIsIkVsZW1lbnQiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsInJlc291cmNlcyIsImRlZmluZVdlYkNvbXBvbmVudCIsImZpbGVzIiwianMiLCJrbGFzcyIsIldlYkNvbXBvbmVudCIsImZpbGVuYW1lcyIsImZpbGUiLCJlbmRzV2l0aCIsIl9pbXBvcnQiLCJfZmV0Y2hUZXh0IiwiaSIsIkNzdG1FdmVudCIsIkN1c3RvbUV2ZW50IiwiYXJncyIsImRldGFpbCIsImZldGNoUmVzb3VyY2UiLCJyZXNvdXJjZSIsImZldGNoIiwidXJpIiwiaXNMaXNzQXV0byIsIm9wdGlvbnMiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJkZWZhdWx0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJIVE1MQ0xBU1NfUkVHRVgiLCJlbGVtZW50TmFtZUxvb2t1cFRhYmxlIiwiZXhlYyIsIkZvcm1hdHMiLCJzaGVldF9mb3JtYXRfY29udGVudCIsImdldENlbGxzIiwiZm9ybWF0IiwiZm9udF9zaXplIiwiZm9yZWdyb3VuZF9jb2xvciIsImJhY2tncm91bmRfY29sb3IiLCJzaGVldF90b29sYmFyX2Zvcm1hdF9jb250ZW50Iiwic3luY1RvIiwiZGlzYWJsZUFsbEV4Y2VwdCIsInNoZWV0X2FsaWduIiwic2hlZXRfdG9vbGJhcl9hbGlnbiIsImV1cm9zIiwicG91cmNlbnQiLCJudW1iZXIiLCJwcmVjaXNpb24iLCJzaGVldF90b29sYmFyIiwiYm9yZGVyX3RvcCIsImJvcmRlcl9ib3R0b20iLCJib3JkZXJfbGVmdCIsImJvcmRlcl9yaWdodCIsImJvcmRlcl9jb2xvciIsImluZGVudCIsInNwYW4iLCJhbGlnbl9jZW50ZXIiLCJ2YWxpZ25fbWlkZGxlIiwic3RyMmh0bWwiLCJSYW5nZU92ZXJsYXkiLCJFdmVudFRhcmdldCIsIm92ZXJsYXkiLCJjbGFzc2xpc3QiLCJ1cGRhdGUiLCJzZXRSYW5nZSIsInJhbmdlIiwicGxhZ2VfbmFtZSIsImdldFJlY3QiLCJyZWN0IiwidG9nZ2xlIiwiZ2V0UmFuZ2UiLCJzZXRSZWN0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkZvcm11bGFSZWYiLCJzZXRDb2xvciIsImNvbG9yX2lkIiwicmVtb3ZlIiwiUmVjb3B5SGFuZGxlIiwieCIsInkiLCJ3IiwiaCIsIkNlbGxMaXN0IiwiZGVmYXVsdEZvcm1hdCIsIkZvcm1hdE1hbmFnZXIiLCJjdHJsS2V5IiwiY2hhbmdlZCIsImtleSIsInNlbGVjdGlvbiIsInRvZ2dsZUZvcm1hdCIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJkaXNwYXRjaEV2ZW50IiwicHJlYyIsInRvTG9jYWxlU3RyaW5nIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiRm9ybWF0IiwiYXBwbHlUbyIsImNlbGwiLCJjIiwiY2VsbHMiLCJ2YWwiLCJ0ZXh0Q29udGVudCIsInJhd0NvbnRlbnQiLCJyIiwiaiIsInJlbGF0aXZlVG8iLCJzdGFydHNXaXRoIiwiZ2V0UHJvcGVydHkiLCJoYXNQcm9wZXJ0eSIsImV4dHJhY3RGb3JtYXQiLCJmMiIsInZhbHVlcyIsIml0ZW0iLCJzbGljZSIsImdldFByb3BlcnR5VmFsdWUiLCJjb2xzcGFuIiwicm93c3BhbiIsImhhc0F0dHJpYnV0ZSIsIkNhbGNGb3JtdWxhIiwic3RhdGVzIiwiY2VsbF9lZGl0Iiwic3RhdGUiLCJjdXJzb3IiLCJGb3JtdWxhIiwicmFuZ2VzX3Rva2VuIiwiZHJvdyIsImRjb2wiLCJuZXdfcmFuZ2VzIiwicG9zIiwiY2VsbFBvcyIsImxhc3RJbmRleE9mIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwibmV3X2Zvcm11bGEiLCJvZmZzZXQiLCJiZWciLCJlbmQiLCJwYXJzZV9mb3JtdWxhIiwicmFuZ2VzVG9rZW4iLCJ0b1N0cmluZyIsImV4dHJhY3RUb2tlbiIsInRva2VuIiwiaGFzQ29tbWEiLCJOb2RlIiwiY2hpbGRyZW4iLCJmY3QiLCJldmFsIiwidG9OdW1iZXIiLCJhIiwib3BfaW1wbCIsImIiLCJNYXRoIiwicG93Iiwib3BfcHJpbyIsIm9wcyIsIm9wIiwidG9rZW5saXN0MlRyZWUiLCJ0b2tlbnMiLCJuYiIsInJhdyIsImN1ciIsInByaW9yaXR5IiwiZmluZEluZGV4IiwidV9vcCIsIm9wX3Rva2VuIiwibGVmdCIsInJpZ2h0IiwiY3VyVG9rZW4iLCJub2RlIiwicmFuZ2VzIiwiZmlsdGVyIiwiUGxhZ2VGb3JtdWxhIiwiY29kZSIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInNlbGVjdGVkIiwiY2xlYXIiLCJibHVyIiwiUGxhZ2VTZWxlY3RvciIsInNlbGVjdGVkX2NlbGxzIiwiY29scyIsInRib2R5IiwiY29sX2lkIiwiY2xpZW50WCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJvd3MiLCJyb3dfaWQiLCJjbGllbnRZIiwibWFpbiIsIm9uX21vdXNlX21vdmUiLCJyZXBsYWNlQWxsIiwiZ2V0VmlzaWJsZUNlbGwiLCJyZWYiLCJwb3MycmVmIiwibmJSb3dzIiwibmJDb2xzIiwib25jZSIsImlzQWN0aXZlIiwib25JbnB1dCIsInJyYW5nZSIsImdldFNlbGVjdGlvbiIsImdldFJhbmdlQXQiLCJzdGFydE9mZnNldCIsImNoaWxkIiwibm9kZVR5cGUiLCJURVhUX05PREUiLCJzdGFydENvbnRhaW5lciIsImNyZWF0ZVJhbmdlIiwic2VsIiwic2V0U3RhcnQiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwidG9QcmVjaXNpb24iLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwicGFyc2VJbnB1dCIsInRlc3RfbnVtYmVyIiwiTnVtYmVyIiwiaXNOYU4iLCJwYXJ0cyIsInNwbGl0IiwidGVzdF9kYXRlIiwiZ2V0RnVsbFllYXIiLCJTdGF0ZSIsInByZXZfc3RhdGUiLCJTdGF0ZXMiLCJDYWxjU2hlZXQiLCJlbnRyaWVzIiwicyIsInRibF9vZmZzZXQiLCJvZmZzZXRUb3AiLCJzdGFydCIsIm9mZnNldExlZnQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInJvd19kaWZmIiwiY29sX2RpZmYiLCJyb3ciLCJjb2wiLCJyZWNvcHkiLCJjb3B5IiwibGFzdF9yZWNvcHlfdGFyZ2V0IiwibGFzdF9yZWNvcHlfZGlyIiwib25fcmVjb3B5X21vdmUiLCJkX3B4Iiwid2lkdGgiLCJkX3B5IiwiaGVpZ2h0IiwiZF94IiwiZF95Iiwic2lnbiIsImFicyIsInByZXYiLCJkaWZmX3giLCJkaWZmX3kiLCJwb3NfY3VyIiwic2V0RGF0ZSIsImdldERhdGUiLCJjbGFzc05hbWUiLCJmb3JtdWxhX2JhciIsInBsYWdlIiwiZm9ybXVsYSIsInJvIiwiaXNfcm8iLCJmb2N1cyIsImFsdEtleSIsImRzdCIsImRlZXBDbG9uZSIsImRlbGV0ZUZvcm1hdCIsImRlbGV0ZUNvbnRlbnQiLCJkX3JvdyIsImRfY29sIiwibmV4dCIsImJ1YmJsZXMiLCJvbklucHV0MiIsInJhbmdlc19jb2xvcnMiLCJjdXJfb2Zmc2V0IiwicmFuZ2VfbmFtZSIsInJhbmdlc19uYW1lcyIsImtleXMiLCJ3YXJuIiwiZmlyc3RDZWxsIiwicGFyZW50RWxlbWVudCIsInJlc2l6ZSIsIm5icm93cyIsIm5iY29scyIsImNvbF9odG1sIiwidGgiLCJyb3dfaHRtbCIsInRhYmxlIiwicmVzaXplT2JzIiwiUmVzaXplT2JzZXJ2ZXIiLCJmcm9tIiwidG8iLCJIVE1MVGFibGVDZWxsRWxlbWVudCIsInJlZjJwb3MiLCJiZWdfcm93IiwiYmVnX2NvbCIsImVuZF9yb3ciLCJlbmRfY29sIiwiY2VsbF9vcl9yb3dpZCIsImJfcm93X2lkIiwiYl9jb2xfaWQiLCJjaGFyQ29kZUF0IiwiZV9yb3dfaWQiLCJlX2NvbF9pZCIsImZpcnN0RWxlbWVudENoaWxkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic29ydCIsIm1pbiIsIm1heCIsIm5iX2NvbHMiLCJmbG9vciIsImYiLCJpc0Zvcm1hdCIsInJhd192YWwiLCJ2IiwiZGlmZiIsInNldFJPIiwiY2xvbmUiLCJjbG9uZU5vZGUiLCJtZXJnZSIsImNlbGxsaXN0IiwiaXNfYWxpZ24iLCJ1bm1lcmdlIiwicmV0cmFpdCIsImRlbHRhX2luZGVudCIsIm5ld19mb3JtYXQiLCJhbGlnbl9sZWZ0IiwiZGVsdGFfcHJlYyIsImZjdHMiLCJhY3Rpb24iLCJlbmFibGVkIiwidW5tZXJnZWQiLCJpdGVtY3NzIiwiQ2FsY1Rvb2xiYXJJdGVtIiwiY29sb3JfcGlja2VyIiwiY2FuY2VsIiwiYm9keSIsImNsaWNrIiwiQ2FsY1Rvb2xiYXIiLCJleGNlcHRpb24iLCJidG5fbmFtZSIsImZvbnRfc2l6ZXMiLCJidG5zIiwiYnRuIiwiZm9udF9zaXplc19zZWxlY3QiLCJvcHRpb24iLCJPcHRpb24iLCJzbmFtZSIsInBhdGgiLCJyb290X3BhdGgiLCJob3N0bmFtZSIsInBhZ2VzIiwiaGVhZGVyIiwidGl0bGVzIiwiaHRyZWUiLCJodG1sIiwibGV2ZWwiLCJodHJlZV9jdXJzb3IiLCJ0aXRsZSIsInNlYXJjaEN1ckhlYWRlciIsInBvc2l0aW9uIiwiaGlkIiwiZ2V0VGl0bGVQcmVmaXgiLCJpbmRleE9mIiwibnVtIiwiYnVpbGRNZW51Iiwibm9kZXMiLCJtZW51IiwidXBkYXRlSGVhZGVyIiwibGFzdCIsInNjcm9sbFRvcCIsInJldmVyc2UiLCJobm9kZSIsImhfaHRtbCIsImxpbmsiLCJlbXB0eSIsIm1ha2VfcGFnZV9ocmVmIiwicGF0aHByZWZpeCIsImRlc2MiLCJocmVmIiwibWFrZV9wYWdlX21lbnUiLCJmaW5kIiwicGFnZSIsImN1cnBhZ2UiLCJtb2R1bGVfaHRtbCIsInR5cGVfaHRtbCIsImRlc2NfdHlwZSIsImRlc2MyX2lkeCIsInNlc3Npb25faHRtbCIsInRlbXBsYXRlIiwic3RyMkRGIl0sInNvdXJjZVJvb3QiOiIifQ==