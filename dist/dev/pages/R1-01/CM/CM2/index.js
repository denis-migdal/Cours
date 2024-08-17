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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQSxnREFBZ0QsYUFBYTtVQUM3RDs7Ozs7VUNOQTs7Ozs7U0VBQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTIvaW5kZXguY3NzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMi9pbmRleC5tZCIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vQ291cnMvLi9saWJzL0xJU1MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00yL2luZGV4LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL1JhbmdlT3ZlcmxheS50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9mb3JtYXQudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvZm9ybXVsYV9lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvZm9ybXVsYV9wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvcGxhZ2VfZWRpdG9yLnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL3BsYWdlX3NlbGVjdG9yLnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL3NoZWV0LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL3Rvb2xiYXIudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L21lbnUudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L3V0aWxzL3N0cjJodG1sLnRzIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9hc3luYyBtb2R1bGUiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInBhZ2VzL1IxLTAxL0NNL0NNMi9pbmRleC5odG1sXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI6aG9zdCB0YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcbiAgICAmID4gdGJvZHkge1xcbiAgICAgICAgb3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICB9XFxuXFxuICAgICYgPiB0Ym9keSA+IHRyOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgXFxuICAgICAgICAmID4gdGgge1xcbiAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbjpob3N0IDppcyh0cix0aCx0ZCkge1xcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjMGMwYzA7XFxuIH1cXG5cXG46aG9zdCB0ciB7XFxuICAgIGhlaWdodDogMC40NWNtO1xcbiAgICBsaW5lLWhlaWdodDogMC40NWNtO1xcbn1cXG5cXG5cXG46aG9zdCA6aXModGQsIHRoKTpub3QoW2NvbnRlbnRlZGl0YWJsZV0pIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi8qXFxuOmhvc3QgdGRbY29udGVudGVkaXRhYmxlXSB7XFxuICAgIHVzZXItc2VsZWN0OiB0ZXh0O1xcbn0qL1xcblxcbjpob3N0IDppcyh0ZCwgdGgpIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogMi4yNmNtO1xcbiAgICBoZWlnaHQ6IDAuNDVjbTtcXG5cXG4gICAgZm9udC1zaXplOiAxMHB0O1xcblxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ0xpYmVyYXRpb24gU2Fucyc7XFxufVxcblxcbjpob3N0IHRyID4gdGg6Zmlyc3QtY2hpbGQge1xcbiAgICB3aWR0aDogY2FsYyggMi4yNmNtIC8gMi41KSA7XFxufVxcblxcbjpob3N0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbjpob3N0IGRpdi50b29sYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG5cXG4gICAgJiA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICAgICAgZmxleDogMSAxIDA7XFxuICAgIH1cXG4gICAgJiA+ICo6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgd2lkdGg6IGNhbGMoIDEuNSAqIDIuMjZjbSApO1xcbiAgICB9XFxufVxcblxcbjpob3N0IHRoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOGE4YThhO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcblxcbiAgICAmLmhpZ2hsaWdodCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk4ZWU3O1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxufVxcblxcbjpob3N0KC5jZWxsX2VkaXQpIC5jdXJzb3Ige1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG46aG9zdCgucmVjb3B5KSB7XFxuICAgIGN1cnNvcjogY2VsbDtcXG59XFxuXFxuOmhvc3Qge1xcblxcbiAgICAucmVjb3B5IHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgY3Vyc29yOiBjZWxsO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM5OGVlNztcXG5cXG4gICAgfVxcblxcbiAgICAuY3Vyc29yIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMzOThlZTc7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG46aG9zdCAuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuOmhvc3QgdGQge1xcblxcbiAgICAtLWZvbnRfc2l6ZTogMTBwdDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250X3NpemUpO1xcbiAgICBsaW5lLWhlaWdodDogY2FsYyggdmFyKC0tZm9udF9zaXplKSAqIDEuMiApO1xcblxcbiAgICAtLWluZGVudDogMDtcXG5cXG4gICAgLS1ib3JkZXJfY29sb3I6IGJsYWNrO1xcbiAgICAtLWJhY2tncm91bmRfY29sb3I6IHdoaXRlO1xcbiAgICAtLWZvcmVncm91bmRfY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kX2NvbG9yKTtcXG4gICAgY29sb3IgICAgICAgICAgIDogdmFyKC0tZm9yZWdyb3VuZF9jb2xvcik7XFxuXFxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxuXFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuXFxuICAgICY6aXMoW2RhdGEtdHlwZT1cXFwibnVtYmVyXFxcIl0sW2RhdGEtdHlwZT1cXFwiZGF0ZVxcXCJdLCBbZGF0YS10eXBlPVxcXCJib29sZWFuXFxcIl0pIHtcXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICB9XFxuXFxuICAgICZbY29udGVudGVkaXRhYmxlXSB7XFxuICAgICAgICBvdXRsaW5lOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgJi5hanVzdGVyIHtcXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIH1cXG5cXG4gICAgJi5oaWdobGlnaHQge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NkZTNmOTtcXG4gICAgfVxcblxcbiAgICAvKiogc3R5bGUgKiovXFxuICAgICYuaXRhbGljIHtcXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgfVxcbiAgICAmLmJvbGQge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIH1cXG4gICAgJi51bmRlcmxpbmUge1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIH1cXG4gICAgJi5hbGlnbl9sZWZ0IHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyggdmFyKC0taW5kZW50KSAqIDEwcHgpO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgfVxcbiAgICAmLmFsaWduX2NlbnRlciB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgJi5hbGlnbl9yaWdodCB7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKCB2YXIoLS1pbmRlbnQpICogMTBweCk7XFxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgfVxcbiAgICAmLnZhbGlnbl90b3Age1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgfVxcbiAgICAmLnZhbGlnbl9taWRkbGUge1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgfVxcbiAgICAmLnZhbGlnbl9ib3R0b20ge1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gICAgfVxcbiAgICAvKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMjQxNzU3L2FwcGx5aW5nLWJvcmRlcnMtdG8tYS1zaW5nbGUtdGFibGUtY2VsbC13aGVuLXVzaW5nLWJvcmRlci1jb2xsYXBzZSAqL1xcbiAgICAmLmJvcmRlcl90b3Age1xcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IGRvdWJsZSB2YXIoLS1ib3JkZXJfY29sb3IpO1xcbiAgICB9XFxuICAgICYuYm9yZGVyX2JvdHRvbSB7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZG91YmxlIHZhcigtLWJvcmRlcl9jb2xvcik7XFxuICAgIH1cXG4gICAgJi5ib3JkZXJfbGVmdCB7XFxuICAgICAgICBib3JkZXItbGVmdDogMXB4IGRvdWJsZSB2YXIoLS1ib3JkZXJfY29sb3IpO1xcbiAgICB9XFxuICAgICYuYm9yZGVyX3JpZ2h0IHtcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IGRvdWJsZSB2YXIoLS1ib3JkZXJfY29sb3IpO1xcbiAgICB9XFxufVxcblxcbjpob3N0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG46aG9zdCAucmFuZ2VfaGlnaGxpZ2h0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taGlnaGxpZ2h0X2NvbG9yKTtcXG59XFxuXFxuOmhvc3QgLmZvcm11bGFfaGlnaGxpZ2h0IHtcXG4gICAgY29sb3I6IHZhcigtLWhpZ2hsaWdodF9jb2xvcik7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfMCB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjZmEwYzBjO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzEge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogI2ZhMGNmYTtcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF8yIHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICMwYzg0MGM7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfMyB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjMDEwMTgwO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzQge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzg3MTcxNztcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF81IHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICM4NzE3ODc7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfNiB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjODQ4NDBjO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0Xzcge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzBjMGNmYTtcXG59XFxuXFxuXFxuLmNvcHlfaGlnaGxpZ2h0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBUb21vcnJvdyBUaGVtZSAqL1xcbi8qIGh0dHA6Ly9qbWJsb2cuZ2l0aHViLmNvbS9jb2xvci10aGVtZXMtZm9yLWdvb2dsZS1jb2RlLWhpZ2hsaWdodGpzICovXFxuLyogT3JpZ2luYWwgdGhlbWUgLSBodHRwczovL2dpdGh1Yi5jb20vY2hyaXNrZW1wc29uL3RvbW9ycm93LXRoZW1lICovXFxuXFxuLyogVG9tb3Jyb3cgQ29tbWVudCAqL1xcbi5obGpzLWNvbW1lbnQsXFxuLmhsanMtcXVvdGUge1xcblxcdGNvbG9yOiAjOGU5MDhjO1xcbn1cXG5cXG4vKiBUb21vcnJvdyBSZWQgKi9cXG4uaGxqcy12YXJpYWJsZSxcXG4uaGxqcy10ZW1wbGF0ZS12YXJpYWJsZSxcXG4uaGxqcy10YWcsXFxuLmhsanMtbmFtZSxcXG4uaGxqcy1zZWxlY3Rvci1pZCxcXG4uaGxqcy1zZWxlY3Rvci1jbGFzcyxcXG4uaGxqcy1yZWdleHAsXFxuLmhsanMtZGVsZXRpb24ge1xcblxcdGNvbG9yOiAjYzgyODI5O1xcbn1cXG5cXG4vKiBUb21vcnJvdyBPcmFuZ2UgKi9cXG4uaGxqcy1udW1iZXIsXFxuLmhsanMtYnVpbHRfaW4sXFxuLmhsanMtYnVpbHRpbi1uYW1lLFxcbi5obGpzLWxpdGVyYWwsXFxuLmhsanMtdHlwZSxcXG4uaGxqcy1wYXJhbXMsXFxuLmhsanMtbWV0YSxcXG4uaGxqcy1saW5rIHtcXG5cXHRjb2xvcjogI2Y1ODcxZjtcXG59XFxuXFxuLyogVG9tb3Jyb3cgWWVsbG93ICovXFxuLmhsanMtYXR0cmlidXRlIHtcXG5cXHRjb2xvcjogI2VhYjcwMDtcXG59XFxuXFxuLyogVG9tb3Jyb3cgR3JlZW4gKi9cXG4uaGxqcy1zdHJpbmcsXFxuLmhsanMtc3ltYm9sLFxcbi5obGpzLWJ1bGxldCxcXG4uaGxqcy1hZGRpdGlvbiB7XFxuXFx0Y29sb3I6ICM3MThjMDA7XFxufVxcblxcbi8qIFRvbW9ycm93IEJsdWUgKi9cXG4uaGxqcy10aXRsZSxcXG4uaGxqcy1zZWN0aW9uIHtcXG5cXHRjb2xvcjogIzQyNzFhZTtcXG59XFxuXFxuLyogVG9tb3Jyb3cgUHVycGxlICovXFxuLmhsanMta2V5d29yZCxcXG4uaGxqcy1zZWxlY3Rvci10YWcge1xcblxcdGNvbG9yOiAjODk1OWE4O1xcbn1cXG5cXG4uaGxqcyB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0b3ZlcmZsb3cteDogYXV0bztcXG5cXHRjb2xvcjogIzRkNGQ0YztcXG5cXHRwYWRkaW5nOiAwLjVlbTtcXG59XFxuXFxuLmhsanMtZW1waGFzaXMge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmhsanMtc3Ryb25nIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XCI7IiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBleHBvcnRlZCB0eXBlcyA9PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgdHlwZSBDU1NfUmVzb3VyY2UgPSBzdHJpbmd8UmVzcG9uc2V8SFRNTFN0eWxlRWxlbWVudHxDU1NTdHlsZVNoZWV0O1xuZXhwb3J0IHR5cGUgQ1NTX1NvdXJjZSAgID0gQ1NTX1Jlc291cmNlIHwgUHJvbWlzZTxDU1NfUmVzb3VyY2U+O1xuXG5leHBvcnQgdHlwZSBIVE1MX1Jlc291cmNlID0gc3RyaW5nfFJlc3BvbnNlfEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XG5leHBvcnQgdHlwZSBIVE1MX1NvdXJjZSAgID0gSFRNTF9SZXNvdXJjZSB8IFByb21pc2U8SFRNTF9SZXNvdXJjZT47XG5cbmV4cG9ydCB0eXBlIExJU1NPcHRpb25zPEV4dGVuZHMgICAgZXh0ZW5kcyBDbGFzcyxcblx0XHRcdFx0XHRcdEhvc3QgICAgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHRcdEF0dHJzICAgICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0XHRQYXJhbWV0ZXJzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4gPSB7XG5cblx0ZXh0ZW5kcz86IENvbnN0cnVjdG9yPEV4dGVuZHM+LFxuXHRob3N0ICAgPzogQ29uc3RydWN0b3I8SG9zdD4sXG5cblx0ZGVwZW5kZW5jaWVzPzogcmVhZG9ubHkgUHJvbWlzZTxhbnk+W10sXG5cdGF0dHJpYnV0ZXMgID86IHJlYWRvbmx5IEF0dHJzW10sXG5cdHBhcmFtcyAgICAgID86IFJlYWRvbmx5PFBhcmFtZXRlcnM+LFxuXG5cdGNvbnRlbnQ/OiBIVE1MX1NvdXJjZSxcblx0Y3NzICAgID86ICBDU1NfU291cmNlIHwgcmVhZG9ubHkgQ1NTX1NvdXJjZVtdLFxuXHRzaGFkb3cgPzogIFNoYWRvd0NmZyxcbn07XG5cbmV4cG9ydCBlbnVtIFNoYWRvd0NmZyB7XG5cdE5PTkUgPSAnbm9uZScsXG5cdE9QRU4gPSAnb3BlbicsIFxuXHRDTE9TRT0gJ2Nsb3NlZCdcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgQ2xhc3MgPT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxubGV0IF9fY3N0cl9ob3N0ICA6IGFueSA9IG51bGw7XG5cbnR5cGUgQ29uc3RydWN0b3I8VD4gPSBuZXcgKCkgPT4gVDtcbmludGVyZmFjZSBDbGFzcyB7fVxuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9hdHRhY2hTaGFkb3dcbmNvbnN0IENBTl9IQVZFX1NIQURPVyA9IFtcblx0bnVsbCwgJ2FydGljbGUnLCAnYXNpZGUnLCAnYmxvY2txdW90ZScsICdib2R5JywgJ2RpdicsXG5cdCdmb290ZXInLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnaGVhZGVyJywgJ21haW4nLFxuXHQnbmF2JywgJ3AnLCAnc2VjdGlvbicsICdzcGFuJ1xuXHRcbl07XG5mdW5jdGlvbiBfY2FuSGFzU2hhZG93KHRhZzogdHlwZW9mIEhUTUxFbGVtZW50KSB7XG5cdHJldHVybiBDQU5fSEFWRV9TSEFET1cuaW5jbHVkZXMoIF9lbGVtZW50MnRhZ25hbWUodGFnKSApO1xufVxuXG50eXBlIFJlc291cmNlID0gVVJMfFJlc3BvbnNlO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExJU1M8RXh0ZW5kcyAgICBleHRlbmRzIENsYXNzICAgICAgICAgICAgICA9IENsYXNzLFxuXHRcdFx0XHRcdFx0XHQgSG9zdCAgICAgICBleHRlbmRzIEhUTUxFbGVtZW50ICAgICAgICA9IEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdFx0XHQgQXR0cnMgICAgICBleHRlbmRzIHN0cmluZyAgICAgICAgICAgICA9IG5ldmVyLFxuXHRcdFx0XHRcdFx0XHQgUGFyYW1ldGVycyBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55PiA9IHt9Pih7XG5cdFx0XHRcdFx0XHRcdFx0ZXh0ZW5kcyAgICAgOiBwX2V4dGVuZHMsXG5cdFx0XHRcdFx0XHRcdFx0aG9zdCAgICAgICAgOiBwX2hvc3QsXG5cdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jaWVzOiBwX2RlcHMsXG5cdFx0XHRcdFx0XHRcdCAgICBhdHRyaWJ1dGVzICA6IHBfYXR0cnMsXG5cdFx0XHRcdFx0XHRcdCAgICBwYXJhbXMsXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudCxcblx0XHRcdFx0XHRcdFx0XHRjc3MsXG5cdFx0XHRcdFx0XHRcdFx0c2hhZG93ICAgICAgOiBwX3NoYWRvdyxcblx0XHRcdFx0XHRcdFx0fTogTElTU09wdGlvbnM8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtZXRlcnM+ID0ge30pIHtcblxuXHQvL1RPRE8gbWVyZ2UgcHJvcCBpZiBleHRlbmRzIExJU1MuLi5cblxuXHRjb25zdCBob3N0ICAgICAgICA9IHBfaG9zdCAgICA/PyBIVE1MRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxIb3N0Pjtcblx0Y29uc3QgX2V4dGVuZHMgICAgPSBwX2V4dGVuZHMgPz8gT2JqZWN0ICAgICAgYXMgdW5rbm93biBhcyBDb25zdHJ1Y3RvcjxFeHRlbmRzPjtcblx0Y29uc3QgYXR0cmlidXRlcyAgPSBwX2F0dHJzICAgPz8gW107XG5cdGNvbnN0IGRlcGVuZGVuY2llcz0gcF9kZXBzICAgID8gWy4uLnBfZGVwc10gOiBbXTtcblx0Y29uc3QgY2FuSGFzU2hhZG93PSBfY2FuSGFzU2hhZG93KGhvc3QpO1xuXHRjb25zdCBzaGFkb3cgICAgICA9IHBfc2hhZG93ICA/PyAoY2FuSGFzU2hhZG93ID8gU2hhZG93Q2ZnLkNMT1NFIDogU2hhZG93Q2ZnLk5PTkUpO1xuXG5cdGlmKCAhIGNhbkhhc1NoYWRvdyAmJiBzaGFkb3cgIT09IFNoYWRvd0NmZy5OT05FKVxuXHRcdHRocm93IG5ldyBFcnJvcihgSG9zdCBlbGVtZW50ICR7X2VsZW1lbnQydGFnbmFtZShob3N0KX0gZG9lcyBub3Qgc3VwcG9ydCBTaGFkb3dSb290YCk7XG5cblx0Ly8gQ09OVEVOVCBwcm9jZXNzaW5nXG5cdGlmKCBjb250ZW50ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRkZXBlbmRlbmNpZXMucHVzaCggKCBhc3luYyAoKSA9PiB7XG5cblx0XHRcdGNvbnRlbnQgPSBhd2FpdCBjb250ZW50O1xuXG5cdFx0XHRpZihjb250ZW50IGluc3RhbmNlb2YgSFRNTFRlbXBsYXRlRWxlbWVudClcblx0XHRcdGNvbnRlbnQgPSBjb250ZW50LmlubmVySFRNTDtcblxuXHRcdFx0aWYoIHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB7XG5cblx0XHRcdFx0Y29udGVudCA9IGNvbnRlbnQudHJpbSgpOyAvLyBOZXZlciByZXR1cm4gYSB0ZXh0IG5vZGUgb2Ygd2hpdGVzcGFjZSBhcyB0aGUgcmVzdWx0XG5cdFx0XHRcdGlmKGNvbnRlbnQgPT09ICcnKVxuXHRcdFx0XHRcdGNvbnRlbnQgPSB1bmRlZmluZWQ7XG5cblx0XHRcdH1cblx0XHRcdGlmKCBjb250ZW50IGluc3RhbmNlb2YgUmVzcG9uc2UgKVxuXHRcdFx0XHRjb250ZW50ID0gYXdhaXQgY29udGVudC50ZXh0KCk7XG5cblx0XHRcdHJldHVybiBMSVNTQmFzZS5QYXJhbWV0ZXJzLmNvbnRlbnQgPSBjb250ZW50O1xuXHRcdH0pKCkgKTtcblx0fVxuXG5cdC8vIENTUyBwcm9jZXNzaW5nXG5cdGxldCBzdHlsZXNoZWV0czogcmVhZG9ubHkgQ1NTU3R5bGVTaGVldFtdID0gW107XG5cdGlmKCBjc3MgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdGlmKCAhIEFycmF5LmlzQXJyYXkoY3NzKSApXG5cdFx0XHRjc3MgPSBbY3NzIGFzIENTU19Tb3VyY2VdO1xuXG5cdFx0c3R5bGVzaGVldHMgPSBuZXcgQXJyYXk8Q1NTU3R5bGVTaGVldD4oY3NzLmxlbmd0aCk7XG5cblx0XHRjb25zdCBmZXRjaF9jc3MgPSAoYXN5bmMgKGNzczogQ1NTX1NvdXJjZSkgPT4ge1xuXHRcdFx0Y3NzID0gYXdhaXQgY3NzO1xuXHRcdFx0aWYoY3NzIGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldClcblx0XHRcdFx0cmV0dXJuIGNzcztcblx0XHRcdGlmKCBjc3MgaW5zdGFuY2VvZiBIVE1MU3R5bGVFbGVtZW50KVxuXHRcdFx0XHRyZXR1cm4gY3NzLnNoZWV0ITtcblxuXHRcdFx0bGV0IHN0eWxlID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcblx0XHRcdGlmKCB0eXBlb2YgY3NzID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0XHRzdHlsZS5yZXBsYWNlKGNzcyk7XG5cdFx0XHRcdHJldHVybiBzdHlsZTtcblx0XHRcdH1cblxuXHRcdFx0Ly9pZiggY3NzIGluc3RhbmNlb2YgUmVzcG9uc2UgKVxuXHRcdFx0c3R5bGUucmVwbGFjZShhd2FpdCBjc3MudGV4dCgpKTtcblx0XHRcdHJldHVybiBzdHlsZTtcblx0XHR9KTtcblxuXHRcdGRlcGVuZGVuY2llcy5wdXNoKCAuLi5jc3MubWFwKCBhc3luYyAoY3NzLCBpZHgpID0+ICAoc3R5bGVzaGVldHMgYXMgYW55KVtpZHhdID0gYXdhaXQgZmV0Y2hfY3NzKGNzcykgKSApO1xuXHR9XG5cblx0dHlwZSBMSG9zdCA9IExJU1NIb3N0PExJU1NCYXNlPjtcblxuXHQvLyBAdHMtaWdub3JlXG5cdGNsYXNzIExJU1NCYXNlIGV4dGVuZHMgX2V4dGVuZHMge1xuXG5cdFx0cmVhZG9ubHkgI2hvc3Q6IGFueTsgLy8gcHJldmVudHMgaXNzdWUgIzEuLi5cblxuXHRcdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0XHRzdXBlcigpO1xuXG5cdFx0XHQvLyBoNGNrLCBva2F5IGJlY2F1c2UgSlMgaXMgbW9ub3RocmVhZGVkLlxuXHRcdFx0aWYoIF9fY3N0cl9ob3N0ID09PSBudWxsIClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGRvIG5vdCBkaXJlY3RseSBjYWxsIHRoaXMgY29uc3RydWN0b3JcIik7XG5cdFx0XHR0aGlzLiNob3N0ID0gX19jc3RyX2hvc3Q7XG5cdFx0XHRfX2NzdHJfaG9zdCA9IG51bGw7XG5cdFx0fVxuXG5cdFx0cHVibGljIGdldCBob3N0KCk6IEhvc3Qge1xuXHRcdFx0cmV0dXJuIHRoaXMuI2hvc3Q7XG5cdFx0fVxuXHRcdHByb3RlY3RlZCBnZXQgYXR0cnMoKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuI2hvc3QgYXMgTEhvc3QpLmF0dHJzO1xuXHRcdH1cblx0XHRwcm90ZWN0ZWQgc2V0QXR0ckRlZmF1bHQoIGF0dHI6IEF0dHJzLCB2YWx1ZTogc3RyaW5nfG51bGwpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkuc2V0QXR0ckRlZmF1bHQoYXR0ciwgdmFsdWUpO1xuXG5cdFx0fVxuXHRcdHByb3RlY3RlZCBnZXQgcGFyYW1zKCkge1xuXHRcdFx0cmV0dXJuICh0aGlzLiNob3N0IGFzIExIb3N0KS5wYXJhbXM7XG5cdFx0fVxuXHRcdHByb3RlY3RlZCBnZXQgY29udGVudCgpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkuY29udGVudCE7XG5cdFx0fVxuXG5cdFx0c3RhdGljIHJlYWRvbmx5IFBhcmFtZXRlcnMgPSB7XG5cdFx0XHRob3N0LFxuXHRcdFx0ZGVwZW5kZW5jaWVzLFxuXHRcdFx0YXR0cmlidXRlcyxcblx0XHRcdHBhcmFtcyxcblx0XHRcdGNvbnRlbnQsXG5cdFx0XHRzdHlsZXNoZWV0cyxcblx0XHRcdHNoYWRvdyxcblx0XHR9O1xuXG5cdFx0cHJvdGVjdGVkIG9uQXR0ckNoYW5nZWQoX25hbWU6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0XHRfb2xkVmFsdWU6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0XHRfbmV3VmFsdWU6IHN0cmluZyk6IHZvaWR8ZmFsc2Uge31cblxuXHRcdHByb3RlY3RlZCBnZXQgaXNJbkRPTSgpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkuaXNJbkRPTTtcblx0XHR9XG5cdFx0cHJvdGVjdGVkIG9uRE9NQ29ubmVjdGVkKCkge31cblx0XHRwcm90ZWN0ZWQgb25ET01EaXNjb25uZWN0ZWQoKSB7fVxuXHR9XG5cblx0cmV0dXJuIExJU1NCYXNlO1xufVxuXG4vL1RPRE86IG90aGVyIG9wdGlvbnMuLi5cbmZ1bmN0aW9uIGV4dGVuZHNMSVNTPEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0SG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRBdHRyczEgICBleHRlbmRzIHN0cmluZyxcblx0QXR0cnMyICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4sXG5cdFQgZXh0ZW5kcyBMSVNTUmV0dXJuVHlwZTxFeHRlbmRzLCBIb3N0LCBBdHRyczEsIFBhcmFtcz4+KExpc3M6IFQsIHBhcmFtZXRlcnM6IHthdHRyaWJ1dGVzOiByZWFkb25seSBBdHRyczJbXX0pIHtcblxuXHQvLyBUT0RPOiBvdGhlciBvcHRpb25zLi4uXG5cdGNvbnN0IGF0dHJzID0gWy4uLkxpc3MuUGFyYW1ldGVycy5hdHRyaWJ1dGVzLCAuLi5wYXJhbWV0ZXJzLmF0dHJpYnV0ZXMhXTtcblx0Y29uc3QgcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgTGlzcy5QYXJhbWV0ZXJzLCB7YXR0cmlidXRlczogYXR0cnN9KTtcblxuXHQvLyBAdHMtaWdub3JlIDogYmVjYXVzZSBUUyBzdHVwaWRcblx0Y2xhc3MgRXh0ZW5kZWRMSVNTIGV4dGVuZHMgTGlzcyB7XG5cdFx0Y29uc3RydWN0b3IoLi4udDogYW55W10pIHtcblx0XHRcdC8vIEB0cy1pZ25vcmUgOiBiZWNhdXNlIFRTIHN0dXBpZFxuXHRcdFx0c3VwZXIoLi4udCk7XG5cdFx0fVxuXG5cdFx0cHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhdHRycygpIHtcblx0XHRcdHJldHVybiBzdXBlci5hdHRycyBhcyBSZWNvcmQ8QXR0cnMyfEF0dHJzMSwgc3RyaW5nfG51bGw+O1xuXHRcdH1cblxuXHRcdHN0YXRpYyBvdmVycmlkZSBQYXJhbWV0ZXJzID0gcGFyYW1zO1xuXHR9XG5cblx0cmV0dXJuIEV4dGVuZGVkTElTUztcbn1cbkxJU1MuZXh0ZW5kc0xJU1MgPSBleHRlbmRzTElTUztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyB0eXBlIGhlbHBlcnMgPT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIGJ1aWxkTElTU0hvc3RSZXR1cm5UeXBlPFQ+ICA9IFQgZXh0ZW5kcyBMSVNTUmV0dXJuVHlwZTxpbmZlciBFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbmZlciBIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbmZlciBBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5mZXIgUGFyYW1zICBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gUmV0dXJuVHlwZTx0eXBlb2YgYnVpbGRMSVNTSG9zdDxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zLCBUPj4gOiBuZXZlcjtcblxuZXhwb3J0IHR5cGUgTElTU1JldHVyblR5cGU8XG5cdEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0SG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+PiA9IFJldHVyblR5cGU8dHlwZW9mIExJU1M8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcz4+O1xuZXhwb3J0IHR5cGUgTElTU0Jhc2U8RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdCBIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0IEF0dHJzICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0IFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4+ID0gSW5zdGFuY2VUeXBlPExJU1NSZXR1cm5UeXBlPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXM+PjtcbmV4cG9ydCB0eXBlIExJU1NIb3N0PExJU1MgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+ID4gPSBJbnN0YW5jZVR5cGU8YnVpbGRMSVNTSG9zdFJldHVyblR5cGU8Q29uc3RydWN0b3I8TElTUz4gJiB7UGFyYW1ldGVyczogYW55fT4+O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTSG9zdCBjbGFzcyA9PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmxldCBpZCA9IDA7XG5cbmZ1bmN0aW9uIGJ1aWxkTElTU0hvc3Q8RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdCAgIEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHQgICBBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdCAgIFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4sXG5cdFx0XHRcdFx0ICAgVCBleHRlbmRzIExJU1NSZXR1cm5UeXBlPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXM+PihMaXNzOiBULCBfcGFyYW1zOiBQYXJ0aWFsPFBhcmFtcz4gPSB7fSkge1xuXHRjb25zdCB7XG5cdFx0aG9zdCxcblx0XHRhdHRyaWJ1dGVzLFxuXHRcdGNvbnRlbnQsXG5cdFx0c3R5bGVzaGVldHMsXG5cdFx0c2hhZG93LFxuXHR9ID0gTGlzcy5QYXJhbWV0ZXJzO1xuXG5cdGNvbnN0IGFscmVhZHlEZWNsYXJlZENTUyA9IG5ldyBTZXQoKTtcblxuXHRjb25zdCBHRVQgPSBTeW1ib2woJ2dldCcpO1xuXHRjb25zdCBTRVQgPSBTeW1ib2woJ3NldCcpO1xuXG5cdGNvbnN0IHByb3BlcnRpZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoIGF0dHJpYnV0ZXMubWFwKG4gPT4gW24sIHtcblxuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbigpOiBzdHJpbmd8bnVsbCAgICAgIHsgcmV0dXJuICh0aGlzIGFzIHVua25vd24gYXMgQXR0cmlidXRlcylbR0VUXShuKTsgfSxcblx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlOiBzdHJpbmd8bnVsbCkgeyByZXR1cm4gKHRoaXMgYXMgdW5rbm93biBhcyBBdHRyaWJ1dGVzKVtTRVRdKG4sIHZhbHVlKTsgfVxuXHR9XSkgKTtcblxuXHRjbGFzcyBBdHRyaWJ1dGVzIHtcbiAgICAgICAgW3g6IHN0cmluZ106IHN0cmluZ3xudWxsO1xuXG4gICAgICAgICNkYXRhICAgICA6IFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuICAgICAgICAjZGVmYXVsdHMgOiBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPjtcbiAgICAgICAgI3NldHRlciAgIDogKG5hbWU6IEF0dHJzLCB2YWx1ZTogc3RyaW5nfG51bGwpID0+IHZvaWQ7XG5cbiAgICAgICAgW0dFVF0obmFtZTogQXR0cnMpIHtcbiAgICAgICAgXHRyZXR1cm4gdGhpcy4jZGF0YVtuYW1lXSA/PyB0aGlzLiNkZWZhdWx0c1tuYW1lXSA/PyBudWxsO1xuICAgICAgICB9O1xuICAgICAgICBbU0VUXShuYW1lOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKXtcbiAgICAgICAgXHRyZXR1cm4gdGhpcy4jc2V0dGVyKG5hbWUsIHZhbHVlKTsgLy8gcmVxdWlyZWQgdG8gZ2V0IGEgY2xlYW4gb2JqZWN0IHdoZW4gZG9pbmcgey4uLmF0dHJzfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YSAgICA6IFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+LFxuXHRcdFx0XHRcdGRlZmF1bHRzOiBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPixcbiAgICAgICAgXHRcdFx0c2V0dGVyICA6IChuYW1lOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKSA9PiB2b2lkKSB7XG5cbiAgICAgICAgXHR0aGlzLiNkYXRhICAgICA9IGRhdGE7XG5cdFx0XHR0aGlzLiNkZWZhdWx0cyA9IGRlZmF1bHRzO1xuICAgICAgICBcdHRoaXMuI3NldHRlciA9IHNldHRlcjtcblxuICAgICAgICBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHByb3BlcnRpZXMpO1xuICAgICAgICB9XG5cdH1cblxuXHQvLyBAdHMtaWdub3JlIDogYmVjYXVzZSBUUyBpcyBzdHVwaWQuXG5cdGNsYXNzIExJU1NIb3N0QmFzZSBleHRlbmRzIGhvc3Qge1xuXG5cdFx0cmVhZG9ubHkgI3BhcmFtczogUGFyYW1zO1xuXG5cdFx0cmVhZG9ubHkgI2lkID0gKytpZDsgLy8gZm9yIGRlYnVnXG5cblx0XHRjb25zdHJ1Y3RvcihwYXJhbXM6IFBhcnRpYWw8UGFyYW1zPiA9IHt9KSB7XG5cdFx0XHRzdXBlcigpO1xuXHRcdFx0dGhpcy4jcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgTGlzcy5QYXJhbWV0ZXJzLnBhcmFtcywgX3BhcmFtcywgcGFyYW1zKTtcblxuXHRcdFx0dGhpcy4jd2FpdEluaXQgPSBuZXcgUHJvbWlzZSggKHJlc29sdmUpID0+IHtcblx0XHRcdFx0aWYodGhpcy5pc0luaXQpXG5cdFx0XHRcdFx0cmV0dXJuIHJlc29sdmUodGhpcy4jQVBJISk7XG5cdFx0XHRcdHRoaXMuI3Jlc29sdmUgPSByZXNvbHZlO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqKiogcHVibGljIEFQSSAqKioqKioqKioqKioqL1xuXG5cdFx0Z2V0IGlzSW5pdCgpIHtcblx0XHRcdHJldHVybiB0aGlzLiNBUEkgIT09IG51bGw7XG5cdFx0fVxuXHRcdGluaXRpYWxpemUocGFyYW1zOiBQYXJ0aWFsPFBhcmFtcz4gPSB7fSkge1xuXG5cdFx0XHRpZiggdGhpcy5pc0luaXQgKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0VsZW1lbnQgYWxyZWFkeSBpbml0aWFsaXplZCEnKTtcblxuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLiNwYXJhbXMsIHBhcmFtcyk7XG5cblx0XHRcdGNvbnN0IGFwaSA9IHRoaXMuaW5pdCgpO1xuXG5cdFx0XHRpZiggdGhpcy4jaXNJbkRPTSApXG5cdFx0XHRcdChhcGkgYXMgYW55KS5vbkRPTUNvbm5lY3RlZCgpO1xuXG5cdFx0XHRyZXR1cm4gYXBpO1xuXHRcdH1cblxuXHRcdGdldCBMSVNTU3luYygpIHtcblx0XHRcdGlmKCAhIHRoaXMuaXNJbml0IClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdBY2Nlc3NpbmcgQVBJIGJlZm9yZSBXZWJDb21wb25lbnQgaW5pdGlhbGl6YXRpb24hJyk7XG5cdFx0XHRyZXR1cm4gdGhpcy4jQVBJITtcblx0XHR9XG5cdFx0Z2V0IExJU1MoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4jd2FpdEluaXQ7XG5cdFx0fVxuXG5cdFx0LyoqKiBpbml0ICoqKi9cblx0XHQjd2FpdEluaXQ6IFByb21pc2U8SW5zdGFuY2VUeXBlPFQ+Pjtcblx0XHQjcmVzb2x2ZTogKCh1OiBJbnN0YW5jZVR5cGU8VD4pID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG5cdFx0I0FQSTogSW5zdGFuY2VUeXBlPFQ+IHwgbnVsbCA9IG51bGw7XG5cblx0XHQjaXNJbkRPTSA9IGZhbHNlO1xuXHRcdGdldCBpc0luRE9NKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuI2lzSW5ET007XG5cdFx0fVxuXG5cdFx0ZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0XHR0aGlzLiNpc0luRE9NID0gZmFsc2U7XG5cdFx0XHQodGhpcy4jQVBJISBhcyBhbnkpLm9uRE9NRGlzY29ubmVjdGVkKCk7XG5cdFx0fVxuXG5cdFx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cblx0XHRcdHRoaXMuI2lzSW5ET00gPSB0cnVlO1xuXHRcblx0XHRcdGlmKCAhIHRoaXMuaXNJbml0ICkge1xuXHRcdFx0XHR0aGlzLmluaXQoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQodGhpcy4jQVBJISBhcyBhbnkpLm9uRE9NQ29ubmVjdGVkKCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBpbml0KCkge1xuXHRcdFx0XG5cdFx0XHRjdXN0b21FbGVtZW50cy51cGdyYWRlKHRoaXMpO1xuXHRcdFx0XG5cdFx0XHQvLyBzaGFkb3dcblx0XHRcdHRoaXMuI2NvbnRlbnQgPSB0aGlzIGFzIHVua25vd24gYXMgSG9zdDtcblx0XHRcdGlmKCBzaGFkb3cgIT09ICdub25lJykge1xuXHRcdFx0XHR0aGlzLiNjb250ZW50ID0gdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6IHNoYWRvd30pO1xuXG5cdFx0XHRcdC8vQHRzLWlnbm9yZVxuXHRcdFx0XHR0aGlzLiNjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGlja0V2ZW50KTtcblx0XHRcdFx0Ly9AdHMtaWdub3JlXG5cdFx0XHRcdHRoaXMuI2NvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBvbkNsaWNrRXZlbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBhdHRyc1xuXHRcdFx0Zm9yKGxldCBvYnMgb2YgYXR0cmlidXRlcyEpXG5cdFx0XHRcdHRoaXMuI2F0dHJpYnV0ZXNbb2JzXSA9IHRoaXMuZ2V0QXR0cmlidXRlKG9icyk7XG5cblx0XHRcdC8vIGNzc1xuXHRcdFx0aWYoIHNoYWRvdyAhPT0gJ25vbmUnKVxuXHRcdFx0XHQodGhpcy4jY29udGVudCBhcyBTaGFkb3dSb290KS5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChzaGFyZWRDU1MpO1xuXHRcdFx0aWYoIHN0eWxlc2hlZXRzLmxlbmd0aCApIHtcblxuXHRcdFx0XHRpZiggc2hhZG93ICE9PSAnbm9uZScpXG5cdFx0XHRcdFx0KHRoaXMuI2NvbnRlbnQgYXMgU2hhZG93Um9vdCkuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goLi4uc3R5bGVzaGVldHMpO1xuXHRcdFx0XHRlbHNlIHtcblxuXHRcdFx0XHRcdGNvbnN0IGNzc3NlbGVjdG9yID0gdGhpcy5DU1NTZWxlY3RvcjtcblxuXHRcdFx0XHRcdC8vIGlmIG5vdCB5ZXQgaW5zZXJ0ZWQgOlxuXHRcdFx0XHRcdGlmKCAhIGFscmVhZHlEZWNsYXJlZENTUy5oYXMoY3Nzc2VsZWN0b3IpICkge1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRsZXQgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG5cdFx0XHRcdFx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNzc3NlbGVjdG9yKTtcblxuXHRcdFx0XHRcdFx0bGV0IGh0bWxfc3R5bGVzaGVldHMgPSBcIlwiO1xuXG5cdFx0XHRcdFx0XHRmb3IobGV0IHN0eWxlIG9mIHN0eWxlc2hlZXRzKVxuXHRcdFx0XHRcdFx0XHRmb3IobGV0IHJ1bGUgb2Ygc3R5bGUuY3NzUnVsZXMpXG5cdFx0XHRcdFx0XHRcdFx0aHRtbF9zdHlsZXNoZWV0cyArPSBydWxlLmNzc1RleHQgKyAnXFxuJztcblxuXHRcdFx0XHRcdFx0c3R5bGUuaW5uZXJIVE1MID0gaHRtbF9zdHlsZXNoZWV0cy5yZXBsYWNlKCc6aG9zdCcsIGA6aXMoJHtjc3NzZWxlY3Rvcn0pYCk7XG5cblx0XHRcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kKHN0eWxlKTtcblxuXHRcdFx0XHRcdFx0YWxyZWFkeURlY2xhcmVkQ1NTLmFkZChjc3NzZWxlY3Rvcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNvbnRlbnRcblx0XHRcdGlmKCBjb250ZW50ICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdGxldCB0ZW1wbGF0ZV9lbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblx0XHRcdFx0bGV0IHN0ciA9IChjb250ZW50IGFzIHN0cmluZykucmVwbGFjZSgvXFwkXFx7KC4rPylcXH0vZywgKF8sIG1hdGNoKSA9PiB0aGlzLmdldEF0dHJpYnV0ZShtYXRjaCk/PycnKVxuXHQgICAgXHRcdHRlbXBsYXRlX2VsZW0uaW5uZXJIVE1MID0gc3RyO1xuXHQgICAgXHRcdHRoaXMuI2NvbnRlbnQuYXBwZW5kKC4uLnRlbXBsYXRlX2VsZW0uY29udGVudC5jaGlsZE5vZGVzKTtcblx0ICAgIFx0fVxuXG5cdCAgICBcdC8vIGJ1aWxkXG5cblx0ICAgIFx0Ly8gaDRjaywgb2theSBiZWNhdXNlIEpTIGlzIG1vbm90aHJlYWRlZC5cblx0XHRcdF9fY3N0cl9ob3N0ICAgPSB0aGlzO1xuXG5cdCAgICBcdGxldCBvYmogPSBuZXcgTGlzcygpO1xuXG5cdCAgICBcdC8qaWYoIG9iaiBpbnN0YW5jZW9mIFByb21pc2UpXG5cdCAgICBcdFx0b2JqID0gYXdhaXQgb2JqOyovXG5cblx0XHRcdHRoaXMuI0FQSSA9IG9iaiBhcyBJbnN0YW5jZVR5cGU8VD47XG5cblx0XHRcdC8vIGRlZmF1bHQgc2xvdFxuXHRcdFx0aWYoIHRoaXMuaGFzU2hhZG93ICYmIHRoaXMuI2NvbnRlbnQuY2hpbGROb2Rlcy5sZW5ndGggPT09IDAgKVxuXHRcdFx0XHR0aGlzLiNjb250ZW50LmFwcGVuZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2xvdCcpICk7XG5cblx0XHRcdGlmKCB0aGlzLiNyZXNvbHZlICE9PSBudWxsKVxuXHRcdFx0XHR0aGlzLiNyZXNvbHZlKHRoaXMuI0FQSSk7XG5cblx0XHRcdHJldHVybiB0aGlzLiNBUEk7XG5cdFx0fVxuXG5cdFx0Z2V0IHBhcmFtcygpOiBQYXJhbXMge1xuXHRcdFx0cmV0dXJuIHRoaXMuI3BhcmFtcztcblx0XHR9XG5cblxuXHRcdC8qKiogY29udGVudCAqKiovXG5cdFx0I2NvbnRlbnQ6IEhvc3R8U2hhZG93Um9vdHxudWxsID0gbnVsbDtcblxuXHRcdGdldCBjb250ZW50KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuI2NvbnRlbnQ7XG5cdFx0fVxuXG5cdFx0Z2V0UGFydChuYW1lOiBzdHJpbmcpIHtcblx0XHRcdHJldHVybiB0aGlzLmhhc1NoYWRvd1xuXHRcdFx0XHRcdD8gdGhpcy4jY29udGVudD8ucXVlcnlTZWxlY3RvcihgOjpwYXJ0KCR7bmFtZX0pYClcblx0XHRcdFx0XHQ6IHRoaXMuI2NvbnRlbnQ/LnF1ZXJ5U2VsZWN0b3IoYFtwYXJ0PVwiJHtuYW1lfVwiXWApO1xuXHRcdH1cblx0XHRnZXRQYXJ0cyhuYW1lOiBzdHJpbmcpIHtcblx0XHRcdHJldHVybiB0aGlzLmhhc1NoYWRvd1xuXHRcdFx0XHRcdD8gdGhpcy4jY29udGVudD8ucXVlcnlTZWxlY3RvckFsbChgOjpwYXJ0KCR7bmFtZX0pYClcblx0XHRcdFx0XHQ6IHRoaXMuI2NvbnRlbnQ/LnF1ZXJ5U2VsZWN0b3JBbGwoYFtwYXJ0PVwiJHtuYW1lfVwiXWApO1xuXHRcdH1cblxuXHRcdHByb3RlY3RlZCBnZXQgaGFzU2hhZG93KCk6IGJvb2xlYW4ge1xuXHRcdFx0cmV0dXJuIHNoYWRvdyAhPT0gJ25vbmUnO1xuXHRcdH1cblxuXHRcdC8qKiogQ1NTICoqKi9cblxuXHRcdGdldCBDU1NTZWxlY3RvcigpIHtcblx0XHRcdHJldHVybiB0aGlzLmhhc1NoYWRvd1xuXHRcdFx0XHRcdD8gdGhpcy50YWdOYW1lXG5cdFx0XHRcdFx0OiBgJHt0aGlzLnRhZ05hbWV9W2lzPVwiJHt0aGlzLmdldEF0dHJpYnV0ZShcImlzXCIpfVwiXWA7XG5cdFx0fVxuXG5cdFx0LyoqKiBhdHRycyAqKiovXG5cdFx0I2F0dHJzX2ZsYWcgPSBmYWxzZTtcblxuXHRcdCNhdHRyaWJ1dGVzICAgICAgICAgPSB7fSBhcyBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPjtcblx0XHQjYXR0cmlidXRlc0RlZmF1bHRzID0ge30gYXMgUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD47XG5cdFx0I2F0dHJzID0gbmV3IEF0dHJpYnV0ZXMoXG5cdFx0XHR0aGlzLiNhdHRyaWJ1dGVzLFxuXHRcdFx0dGhpcy4jYXR0cmlidXRlc0RlZmF1bHRzLFxuXHRcdFx0KG5hbWU6IEF0dHJzLCB2YWx1ZTpzdHJpbmd8bnVsbCkgPT4ge1xuXG5cdFx0XHRcdHRoaXMuI2F0dHJpYnV0ZXNbbmFtZV0gPSB2YWx1ZTtcblxuXHRcdFx0XHR0aGlzLiNhdHRyc19mbGFnID0gdHJ1ZTsgLy8gZG8gbm90IHRyaWdnZXIgb25BdHRyc0NoYW5nZWQuXG5cdFx0XHRcdGlmKCB2YWx1ZSA9PT0gbnVsbClcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0XHRcdH1cblx0XHQpIGFzIHVua25vd24gYXMgUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD47XG5cblx0XHRzZXRBdHRyRGVmYXVsdChuYW1lOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKSB7XG5cdFx0XHRpZiggdmFsdWUgPT09IG51bGwpXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLiNhdHRyaWJ1dGVzRGVmYXVsdHNbbmFtZV07XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHRoaXMuI2F0dHJpYnV0ZXNEZWZhdWx0c1tuYW1lXSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdGdldCBhdHRycygpOiBSZWFkb25seTxSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPj4ge1xuXG5cdFx0XHRyZXR1cm4gdGhpcy4jYXR0cnM7XG5cdFx0fVxuXG5cdFx0c3RhdGljIG9ic2VydmVkQXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG5cdFx0YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUgICAgOiBBdHRycyxcblx0XHRcdFx0XHRcdFx0XHQgb2xkVmFsdWU6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0XHQgbmV3VmFsdWU6IHN0cmluZykge1xuXG5cdFx0XHRpZih0aGlzLiNhdHRyc19mbGFnKSB7XG5cdFx0XHRcdHRoaXMuI2F0dHJzX2ZsYWcgPSBmYWxzZTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLiNhdHRyaWJ1dGVzW25hbWVdID0gbmV3VmFsdWU7XG5cdFx0XHRpZiggISB0aGlzLmlzSW5pdCApXG5cdFx0XHRcdHJldHVybjtcblxuXHRcdFx0aWYoICh0aGlzLiNBUEkhIGFzIGFueSkub25BdHRyQ2hhbmdlZChuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpID09PSBmYWxzZSkge1xuXHRcdFx0XHR0aGlzLiNhdHRyc1tuYW1lXSA9IG9sZFZhbHVlOyAvLyByZXZlcnQgdGhlIGNoYW5nZS5cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIExJU1NIb3N0QmFzZTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBkZWZpbmUgPT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBfRE9NQ29udGVudExvYWRlZCA9IG5ldyBQcm9taXNlPHZvaWQ+KCAocmVzb2x2ZSkgPT4ge1xuXG5cdGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiaW50ZXJhY3RpdmVcIiB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpXG5cdFx0cmV0dXJuIHJlc29sdmUoKTtcblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXHRcdHJlc29sdmUoKTtcblx0fSwgdHJ1ZSk7XG59KTtcblxuTElTUy5kZWZpbmUgPSBhc3luYyBmdW5jdGlvbjxFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdFx0XHRcdFx0XHRcdCBIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0XHQgICAgIEF0dHJzICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0XHQgICAgIFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4sXG5cdFx0XHRcdFx0XHQgICBcdCBUIGV4dGVuZHMgTElTU1JldHVyblR5cGU8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcz4+KFxuXHRcdFx0XHRcdFx0ICAgXHR0YWduYW1lOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdENvbXBvbmVudENsYXNzOiBULFxuXHRcdFx0XHRcdFx0XHR7ZGVwZW5kZW5jaWVzLCBwYXJhbXN9OiB7cGFyYW1zPzogUGFydGlhbDxQYXJhbXM+LCBkZXBlbmRlbmNpZXM/OiByZWFkb25seSBQcm9taXNlPHN0cmluZz5bXX0gPSB7fSkge1xuXG5cdGRlcGVuZGVuY2llcz8/PVtdO1xuXHRwYXJhbXMgICAgICA/Pz0ge307XG5cblx0Y29uc3QgQ2xhc3MgPSBDb21wb25lbnRDbGFzcy5QYXJhbWV0ZXJzLmhvc3Q7XG5cdGxldCBMSVNTQmFzZTogYW55ID0gQ29tcG9uZW50Q2xhc3M7XG5cdGxldCBodG1sdGFnID0gX2VsZW1lbnQydGFnbmFtZShDbGFzcyk/P3VuZGVmaW5lZDtcblxuXHRhd2FpdCBQcm9taXNlLmFsbChbX0RPTUNvbnRlbnRMb2FkZWQsIC4uLmRlcGVuZGVuY2llcywgLi4uTElTU0Jhc2UuUGFyYW1ldGVycy5kZXBlbmRlbmNpZXNdKTtcblxuXHRjb25zdCBMSVNTY2xhc3MgPSBidWlsZExJU1NIb3N0PEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXMsIFQ+KENvbXBvbmVudENsYXNzLCBwYXJhbXMpO1xuXHRcblx0Y29uc3Qgb3B0cyA9IGh0bWx0YWcgPT09IHVuZGVmaW5lZCA/IHt9XG5cdFx0XHRcdFx0XHRcdFx0XHQgICA6IHtleHRlbmRzOiBodG1sdGFnfTtcblx0XG5cdGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWduYW1lLCBMSVNTY2xhc3MsIG9wdHMpO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBTaGFkb3dSb290IHRvb2xzID09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBzaGFyZWRDU1MgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc2hhcmVkQ1NTKTtcblxuTElTUy5pbnNlcnRHbG9iYWxDU1NSdWxlcyA9IGZ1bmN0aW9uKGNzczogc3RyaW5nfEhUTUxTdHlsZUVsZW1lbnQpIHtcblxuXHRsZXQgY3NzX3N0eWxlITogQ1NTU3R5bGVTaGVldDtcblxuXHRpZiggY3NzIGluc3RhbmNlb2YgSFRNTFN0eWxlRWxlbWVudCApXG5cdFx0Y3NzX3N0eWxlID0gY3NzLnNoZWV0ITtcblx0aWYoIHR5cGVvZiBjc3MgPT09IFwic3RyaW5nXCIpIHtcblx0XHRjc3Nfc3R5bGUgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuXHRcdGNzc19zdHlsZS5yZXBsYWNlU3luYyhjc3MpO1xuXHR9XG5cblx0Zm9yKGxldCBydWxlIG9mIGNzc19zdHlsZS5jc3NSdWxlcylcblx0XHRzaGFyZWRDU1MuaW5zZXJ0UnVsZShydWxlLmNzc1RleHQpO1xufVxuXG50eXBlIERlbGVnYXRlZEhhbmRsZXIgPSBbc3RyaW5nLCAoZXY6IE1vdXNlRXZlbnQpID0+IHZvaWRdO1xuY29uc3QgREVMRUdBVEVEX0VWRU5UUyA9IHtcblx0XCJjbGlja1wiOiBbXSBhcyBEZWxlZ2F0ZWRIYW5kbGVyW10sXG5cdFwiZGJsY2xpY2tcIjogW10gYXMgRGVsZWdhdGVkSGFuZGxlcltdXG59O1xuXG5jb25zdCBBTFJFQURZX1BST0NFU1NFRCA9IFN5bWJvbCgpO1xuXG5mdW5jdGlvbiBvbkNsaWNrRXZlbnQoZXY6IE1vdXNlRXZlbnQpIHtcblxuXHRpZiggKGV2IGFzIGFueSlbQUxSRUFEWV9QUk9DRVNTRURdID09PSB0cnVlIClcblx0XHRyZXR1cm47XG5cdChldiBhcyBhbnkpW0FMUkVBRFlfUFJPQ0VTU0VEXSA9IHRydWU7XG5cblx0Y29uc3QgaGFuZGxlcnMgPSBERUxFR0FURURfRVZFTlRTW2V2LnR5cGUgYXMga2V5b2YgdHlwZW9mIERFTEVHQVRFRF9FVkVOVFNdO1xuXG5cdGZvcihsZXQgZWxlbSBvZiBldi5jb21wb3NlZFBhdGgoKSApIHtcblx0XG5cdFx0aWYoIGVsZW0gaW5zdGFuY2VvZiBTaGFkb3dSb290IHx8IGVsZW0gPT09IGRvY3VtZW50IHx8IGVsZW0gPT09IHdpbmRvdyApXG5cdFx0XHRjb250aW51ZTtcblxuXHRcdHZhciB0YXJnZXQgPSBlbGVtIGFzIEVsZW1lbnQ7XG5cblx0XHRmb3IobGV0IFtzZWxlY3RvciwgaGFuZGxlcl0gb2YgaGFuZGxlcnMpIHtcblx0XHRcdGlmKCB0YXJnZXQubWF0Y2hlcyhzZWxlY3RvcikgKVxuXHRcdFx0XHRoYW5kbGVyKGV2KTtcblx0XHR9XG5cdH1cbn1cblxuTElTUy5pbnNlcnRHbG9iYWxEZWxlZ2F0ZWRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50X25hbWU6IGtleW9mIHR5cGVvZiBERUxFR0FURURfRVZFTlRTLCBzZWxlY3Rvcjogc3RyaW5nLCBoYW5kbGVyOiAoZXY6IE1vdXNlRXZlbnQpID0+IHZvaWQgKSB7XG5cdERFTEVHQVRFRF9FVkVOVFNbZXZlbnRfbmFtZV0ucHVzaChbc2VsZWN0b3IsIGhhbmRsZXJdKVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tFdmVudCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIG9uQ2xpY2tFdmVudCk7XG5cbkxJU1MuY2xvc2VzdCA9IGZ1bmN0aW9uIGNsb3Nlc3Q8RSBleHRlbmRzIEVsZW1lbnQ+KHNlbGVjdG9yOiBzdHJpbmcsIGVsZW1lbnQ6IEVsZW1lbnQpIHtcblxuXHR3aGlsZSh0cnVlKSB7XG5cdFx0dmFyIHJlc3VsdCA9IGVsZW1lbnQuY2xvc2VzdDxFPihzZWxlY3Rvcik7XG5cblx0XHRpZiggcmVzdWx0ICE9PSBudWxsKVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblxuXHRcdGNvbnN0IHJvb3QgPSBlbGVtZW50LmdldFJvb3ROb2RlKCk7XG5cdFx0aWYoICEgKFwiaG9zdFwiIGluIHJvb3QpIClcblx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0ZWxlbWVudCA9IChyb290IGFzIFNoYWRvd1Jvb3QpLmhvc3Q7XG5cdH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBoZWxwZXJzID09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIGluZmVyUGFyYW1zPFQ+ID0gVCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LCBpbmZlciBQIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+PiA/IFAgOiBuZXZlcjtcblxudHlwZSBCVUlMRF9PUFRJT05TPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PiA9IFBhcnRpYWw8e1xuXHRcdFx0XHRcdCAgXHRwYXJhbXMgICAgOiBQYXJ0aWFsPGluZmVyUGFyYW1zPFQ+Pixcblx0XHRcdFx0XHQgIFx0Y29udGVudFx0ICA6IHN0cmluZ3xOb2RlfHJlYWRvbmx5IE5vZGVbXSxcblx0XHRcdFx0XHRcdGlkIFx0XHQgIDogc3RyaW5nLFxuXHRcdFx0XHRcdCAgXHRjbGFzc2VzXHQgIDogcmVhZG9ubHkgc3RyaW5nW10sXG5cdFx0XHRcdFx0ICBcdGNzc3ZhcnMgICA6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIHN0cmluZz4+LFxuXHRcdFx0XHRcdCAgXHRhdHRycyBcdCAgOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmd8Ym9vbGVhbj4+LFxuXHRcdFx0XHRcdCAgXHRkYXRhIFx0ICA6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIHN0cmluZ3xib29sZWFuPj4sXG5cdFx0XHRcdFx0ICBcdGxpc3RlbmVycyA6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIChldjogRXZlbnQpID0+IHZvaWQ+PlxuXHRcdFx0XHRcdH0+ICYgKHtcblx0XHRcdFx0XHRcdGluaXRpYWxpemU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0cGFyZW50OiBFbGVtZW50XG5cdFx0XHRcdFx0fXx7XG5cdFx0XHRcdFx0XHRpbml0aWFsaXplPzogdHJ1ZSxcblx0XHRcdFx0XHRcdHBhcmVudD86IEVsZW1lbnRcblx0XHRcdFx0XHR9KTtcblxuYXN5bmMgZnVuY3Rpb24gYnVpbGQ8VCBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHRhZ25hbWU6IFQsIG9wdGlvbnM/OiBCVUlMRF9PUFRJT05TPENvbXBvbmVudHNbVF0+KTogUHJvbWlzZTxDb21wb25lbnRzW1RdPjtcbmFzeW5jIGZ1bmN0aW9uIGJ1aWxkPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+Pih0YWduYW1lOiBzdHJpbmcsIG9wdGlvbnM/OiBCVUlMRF9PUFRJT05TPFQ+KTogUHJvbWlzZTxUPjtcbmFzeW5jIGZ1bmN0aW9uIGJ1aWxkPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+Pih0YWduYW1lOiBzdHJpbmcsIHtcblx0XHRwYXJhbXMgICAgPSB7fSxcblx0XHRpbml0aWFsaXplPSB0cnVlLFxuXHRcdGNvbnRlbnQgICA9IFtdLFxuXHRcdHBhcmVudCAgICA9IHVuZGVmaW5lZCxcblx0XHRpZCBcdFx0ICA9IHVuZGVmaW5lZCxcblx0XHRjbGFzc2VzICAgPSBbXSxcblx0XHRjc3N2YXJzICAgPSB7fSxcblx0XHRhdHRycyAgICAgPSB7fSxcblx0XHRkYXRhIFx0ICA9IHt9LFxuXHRcdGxpc3RlbmVycyA9IHt9XG5cdH06IEJVSUxEX09QVElPTlM8VD4gPSB7fSk6IFByb21pc2U8VD4ge1xuXG5cdGlmKCAhIGluaXRpYWxpemUgJiYgcGFyZW50ID09PSBudWxsKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIkEgcGFyZW50IG11c3QgYmUgZ2l2ZW4gaWYgaW5pdGlhbGl6ZSBpcyBmYWxzZVwiKTtcblxuXHRsZXQgQ3VzdG9tQ2xhc3MgPSBhd2FpdCBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCh0YWduYW1lKTtcblx0bGV0IGVsZW0gPSBuZXcgQ3VzdG9tQ2xhc3MocGFyYW1zKSBhcyBMSVNTSG9zdDxUPjtcblxuXHQvLyBGaXggaXNzdWUgIzJcblx0aWYoIGVsZW0udGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSB0YWduYW1lIClcblx0XHRlbGVtLnNldEF0dHJpYnV0ZShcImlzXCIsIHRhZ25hbWUpO1xuXG5cdGlmKCBpZCAhPT0gdW5kZWZpbmVkIClcblx0XHRlbGVtLmlkID0gaWQ7XG5cblx0aWYoIGNsYXNzZXMubGVuZ3RoID4gMClcblx0XHRlbGVtLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG5cblx0Zm9yKGxldCBuYW1lIGluIGNzc3ZhcnMpXG5cdFx0ZWxlbS5zdHlsZS5zZXRQcm9wZXJ0eShgLS0ke25hbWV9YCwgY3NzdmFyc1tuYW1lXSk7XG5cblx0Zm9yKGxldCBuYW1lIGluIGF0dHJzKSB7XG5cblx0XHRsZXQgdmFsdWUgPSBhdHRyc1tuYW1lXTtcblx0XHRpZiggdHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIilcblx0XHRcdGVsZW0udG9nZ2xlQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0XHRlbHNlXG5cdFx0XHRlbGVtLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdH1cblxuXHRmb3IobGV0IG5hbWUgaW4gZGF0YSkge1xuXG5cdFx0bGV0IHZhbHVlID0gZGF0YVtuYW1lXTtcblx0XHRpZiggdmFsdWUgPT09IGZhbHNlKVxuXHRcdFx0ZGVsZXRlIGVsZW0uZGF0YXNldFtuYW1lXTtcblx0XHRlbHNlIGlmKHZhbHVlID09PSB0cnVlKVxuXHRcdFx0ZWxlbS5kYXRhc2V0W25hbWVdID0gXCJcIjtcblx0XHRlbHNlXG5cdFx0XHRlbGVtLmRhdGFzZXRbbmFtZV0gPSB2YWx1ZTtcblx0fVxuXG5cdGlmKCAhIEFycmF5LmlzQXJyYXkoY29udGVudCkgKVxuXHRcdGNvbnRlbnQgPSBbY29udGVudCBhcyBhbnldO1xuXHRlbGVtLnJlcGxhY2VDaGlsZHJlbiguLi5jb250ZW50KTtcblxuXHRmb3IobGV0IG5hbWUgaW4gbGlzdGVuZXJzKVxuXHRcdGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBsaXN0ZW5lcnNbbmFtZV0pO1xuXG5cdGlmKCBwYXJlbnQgIT09IHVuZGVmaW5lZCApXG5cdFx0cGFyZW50LmFwcGVuZChlbGVtKTtcblxuXHRpZiggISBlbGVtLmlzSW5pdCAmJiBpbml0aWFsaXplIClcblx0XHRyZXR1cm4gYXdhaXQgTElTUy5pbml0aWFsaXplKGVsZW0pO1xuXG5cdHJldHVybiBhd2FpdCBMSVNTLmdldExJU1MoZWxlbSk7XG59XG5MSVNTLmJ1aWxkID0gYnVpbGQ7XG5cblxuTElTUy53aGVuRGVmaW5lZCAgICA9IGFzeW5jIGZ1bmN0aW9uKHRhZ25hbWU6IHN0cmluZywgY2FsbGJhY2s/OiAoKSA9PiB2b2lkICkgOiBQcm9taXNlPHZvaWQ+IHtcblxuXHRhd2FpdCBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCh0YWduYW1lKTtcblxuXHRpZiggY2FsbGJhY2sgIT09IHVuZGVmaW5lZClcblx0XHRjYWxsYmFjaygpO1xuXG5cdHJldHVybjtcbn1cbkxJU1Mud2hlbkFsbERlZmluZWQgPSBhc3luYyBmdW5jdGlvbih0YWduYW1lczogcmVhZG9ubHkgc3RyaW5nW10sIGNhbGxiYWNrPzogKCkgPT4gdm9pZCApIDogUHJvbWlzZTx2b2lkPiB7XG5cblx0YXdhaXQgUHJvbWlzZS5hbGwoIHRhZ25hbWVzLm1hcCggdCA9PiBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCh0KSApIClcblxuXHRpZiggY2FsbGJhY2sgIT09IHVuZGVmaW5lZClcblx0XHRjYWxsYmFjaygpO1xuXG59XG5cbkxJU1MuaXNEZWZpbmVkID0gZnVuY3Rpb24obmFtZTogc3RyaW5nKSB7XG5cdHJldHVybiBjdXN0b21FbGVtZW50cy5nZXQobmFtZSk7XG59XG5cbkxJU1Muc2VsZWN0b3IgPSBmdW5jdGlvbihuYW1lPzogc3RyaW5nKSB7XG5cdGlmKG5hbWUgPT09IHVuZGVmaW5lZCkgLy8ganVzdCBhbiBoNGNrXG5cdFx0cmV0dXJuIFwiXCI7XG5cdHJldHVybiBgOmlzKCR7bmFtZX0sIFtpcz1cIiR7bmFtZX1cIl0pYDtcbn1cblxuTElTUy5nZXRMSVNTICAgID0gYXN5bmMgZnVuY3Rpb248VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KCBlbGVtZW50OiBFbGVtZW50ICkge1xuXG5cdGF3YWl0IExJU1Mud2hlbkRlZmluZWQoIExJU1MuZ2V0TmFtZShlbGVtZW50KSApO1xuXG5cdHJldHVybiAoZWxlbWVudCBhcyBMSVNTSG9zdDxUPikuTElTUzsgLy8gZW5zdXJlIGluaXRpYWxpemVkLlxufVxuTElTUy5nZXRMSVNTU3luYz0gZnVuY3Rpb248VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KCBlbGVtZW50OiBFbGVtZW50ICkge1xuXG5cdGlmKCAhIExJU1MuaXNEZWZpbmVkKCBMSVNTLmdldE5hbWUoZWxlbWVudCkgKSApXG5cdFx0dGhyb3cgbmV3IEVycm9yKGAke25hbWV9IGhhc24ndCBiZWVuIGRlZmluZWQgeWV0LmApO1xuXG5cdGxldCBob3N0ID0gZWxlbWVudCBhcyBMSVNTSG9zdDxUPjtcblxuXHRpZiggISBob3N0LmlzSW5pdCApXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW5zdGFuY2UgaGFzbid0IGJlZW4gaW5pdGlhbGl6ZWQgeWV0LlwiKTtcblxuXHRyZXR1cm4gaG9zdC5MSVNTU3luYztcbn1cbkxJU1MuaW5pdGlhbGl6ZSA9IGFzeW5jIGZ1bmN0aW9uPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PiggZWxlbWVudDogRWxlbWVudCkge1xuXG5cdGF3YWl0IExJU1Mud2hlbkRlZmluZWQoIExJU1MuZ2V0TmFtZShlbGVtZW50KSApO1xuXG5cdHJldHVybiBhd2FpdCAoZWxlbWVudCBhcyBMSVNTSG9zdDxUPikuaW5pdGlhbGl6ZSgpOyAvLyBlbnN1cmUgaW5pdGlhbGl6YXRpb24uXG59XG5cbkxJU1MuZ2V0TmFtZSA9IGZ1bmN0aW9uKCBlbGVtZW50OiBFbGVtZW50ICk6IHN0cmluZyB7XG5cblx0Y29uc3QgbmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpcycpID8/IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcblx0aWYoICEgbmFtZS5pbmNsdWRlcygnLScpIClcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEVsZW1lbnQgJHtuYW1lfSBpcyBub3QgYSBXZWJDb21wb25lbnRgKTtcblxuXHRyZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gX2J1aWxkUVMoc2VsZWN0b3I6IHN0cmluZywgdGFnbmFtZV9vcl9wYXJlbnQ/OiBzdHJpbmcgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsIHBhcmVudDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblx0XG5cdGlmKCB0YWduYW1lX29yX3BhcmVudCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB0YWduYW1lX29yX3BhcmVudCAhPT0gJ3N0cmluZycpIHtcblx0XHRwYXJlbnQgPSB0YWduYW1lX29yX3BhcmVudDtcblx0XHR0YWduYW1lX29yX3BhcmVudCA9IHVuZGVmaW5lZDtcblx0fVxuXG5cdHJldHVybiBbYCR7c2VsZWN0b3J9JHtMSVNTLnNlbGVjdG9yKHRhZ25hbWVfb3JfcGFyZW50IGFzIHN0cmluZ3x1bmRlZmluZWQpfWAsIHBhcmVudF0gYXMgY29uc3Q7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgUXVlcnlTZWxlY3RvcnMgPT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYXN5bmMgZnVuY3Rpb24gcXM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8VD47XG5hc3luYyBmdW5jdGlvbiBxczxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTwgQ29tcG9uZW50c1tOXSA+O1xuYXN5bmMgZnVuY3Rpb24gcXM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRsZXQgcmVzdWx0ID0gYXdhaXQgTElTUy5xc288VD4oc2VsZWN0b3IsIHBhcmVudCk7XG5cdGlmKHJlc3VsdCA9PT0gbnVsbClcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEVsZW1lbnQgJHtzZWxlY3Rvcn0gbm90IGZvdW5kYCk7XG5cblx0cmV0dXJuIHJlc3VsdCFcbn1cbkxJU1MucXMgID0gcXNcblxuYXN5bmMgZnVuY3Rpb24gcXNvPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPFQ+O1xuYXN5bmMgZnVuY3Rpb24gcXNvPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPCBDb21wb25lbnRzW05dID47XG5hc3luYyBmdW5jdGlvbiBxc288VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRjb25zdCBlbGVtZW50ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3I8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblx0aWYoIGVsZW1lbnQgPT09IG51bGwgKVxuXHRcdHJldHVybiBudWxsO1xuXG5cdHJldHVybiBhd2FpdCBMSVNTLmdldExJU1MoIGVsZW1lbnQgKTtcbn1cbkxJU1MucXNvID0gcXNvXG5cbmFzeW5jIGZ1bmN0aW9uIHFzYTxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTxUW10+O1xuYXN5bmMgZnVuY3Rpb24gcXNhPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPCBDb21wb25lbnRzW05dW10gPjtcbmFzeW5jIGZ1bmN0aW9uIHFzYTxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LFxuXHRcdFx0XHRcdFx0cGFyZW50ICA6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cblx0W3NlbGVjdG9yLCBwYXJlbnRdID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBwYXJlbnQpO1xuXG5cdGNvbnN0IGVsZW1lbnRzID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGw8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblxuXHRsZXQgaWR4ID0gMDtcblx0Y29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxUPj4oIGVsZW1lbnRzLmxlbmd0aCApO1xuXHRmb3IobGV0IGVsZW1lbnQgb2YgZWxlbWVudHMpXG5cdFx0cHJvbWlzZXNbaWR4KytdID0gTElTUy5nZXRMSVNTKCBlbGVtZW50ICk7XG5cblx0cmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbn1cbkxJU1MucXNhID0gcXNhO1xuXG5hc3luYyBmdW5jdGlvbiBxc2M8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA6IEVsZW1lbnQpOiBQcm9taXNlPFQ+O1xuYXN5bmMgZnVuY3Rpb24gcXNjPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgOiBFbGVtZW50KTogUHJvbWlzZTwgQ29tcG9uZW50c1tOXSA+O1xuYXN5bmMgZnVuY3Rpb24gcXNjPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50LFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgPzogRWxlbWVudCkge1xuXG5cdGNvbnN0IHJlcyA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgZWxlbWVudCk7XG5cdFxuXHRjb25zdCByZXN1bHQgPSAocmVzWzFdIGFzIHVua25vd24gYXMgRWxlbWVudCkuY2xvc2VzdDxMSVNTSG9zdDxUPj4ocmVzWzBdKTtcblx0aWYocmVzdWx0ID09PSBudWxsKVxuXHRcdHJldHVybiBudWxsO1xuXG5cdHJldHVybiBhd2FpdCBMSVNTLmdldExJU1MocmVzdWx0KTtcbn1cbkxJU1MucXNjID0gcXNjO1xuXG5mdW5jdGlvbiBxc1N5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFQ7XG5mdW5jdGlvbiBxc1N5bmM8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IENvbXBvbmVudHNbTl07XG5mdW5jdGlvbiBxc1N5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRjb25zdCBlbGVtZW50ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3I8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblxuXHRpZiggZWxlbWVudCA9PT0gbnVsbCApXG5cdFx0dGhyb3cgbmV3IEVycm9yKGBFbGVtZW50ICR7c2VsZWN0b3J9IG5vdCBmb3VuZGApO1xuXG5cdHJldHVybiBMSVNTLmdldExJU1NTeW5jKCBlbGVtZW50ICk7XG59XG5MSVNTLnFzU3luYyA9IHFzU3luYztcblxuZnVuY3Rpb24gcXNhU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogVFtdO1xuZnVuY3Rpb24gcXNhU3luYzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogQ29tcG9uZW50c1tOXVtdO1xuZnVuY3Rpb24gcXNhU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LFxuXHRcdFx0XHRcdFx0cGFyZW50ICA6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cblx0W3NlbGVjdG9yLCBwYXJlbnRdID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBwYXJlbnQpO1xuXG5cdGNvbnN0IGVsZW1lbnRzID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGw8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblxuXHRsZXQgaWR4ID0gMDtcblx0Y29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PFQ+KCBlbGVtZW50cy5sZW5ndGggKTtcblx0Zm9yKGxldCBlbGVtZW50IG9mIGVsZW1lbnRzKVxuXHRcdHJlc3VsdFtpZHgrK10gPSBMSVNTLmdldExJU1NTeW5jKCBlbGVtZW50ICk7XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cbkxJU1MucXNhU3luYyA9IHFzYVN5bmM7XG5cbmZ1bmN0aW9uIHFzY1N5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA6IEVsZW1lbnQpOiBUO1xuZnVuY3Rpb24gcXNjU3luYzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdGVsZW1lbnQgIDogRWxlbWVudCk6IENvbXBvbmVudHNbTl07XG5mdW5jdGlvbiBxc2NTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50LFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgPzogRWxlbWVudCkge1xuXG5cdGNvbnN0IHJlcyA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgZWxlbWVudCk7XG5cdFxuXHRjb25zdCByZXN1bHQgPSAocmVzWzFdIGFzIHVua25vd24gYXMgRWxlbWVudCkuY2xvc2VzdDxMSVNTSG9zdDxUPj4ocmVzWzBdKTtcblx0aWYocmVzdWx0ID09PSBudWxsKVxuXHRcdHJldHVybiBudWxsO1xuXG5cdHJldHVybiBMSVNTLmdldExJU1NTeW5jKHJlc3VsdCk7XG59XG5MSVNTLnFzY1N5bmMgPSBxc2NTeW5jO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIEF1dG8gPT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBjbGFzcyBMSVNTX0F1dG8gZXh0ZW5kcyBMSVNTKHthdHRyaWJ1dGVzOiBbXCJzcmNcIl19KSB7XG5cblx0cmVhZG9ubHkgI2tub3duX3RhZyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXHRyZWFkb25seSAjZGlyZWN0b3J5OiBzdHJpbmc7XG5cdHJlYWRvbmx5ICNzdzogUHJvbWlzZTx2b2lkPjtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLiNzdyA9IG5ldyBQcm9taXNlKCBhc3luYyAocmVzb2x2ZSkgPT4ge1xuXHRcdFx0XG5cdFx0XHRhd2FpdCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihgLi9zdy5qc2ApO1xuXG5cdFx0XHRpZiggbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlciApXG5cdFx0XHRcdHJlc29sdmUoKTtcblxuXHRcdFx0bmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignY29udHJvbGxlcmNoYW5nZScsICgpID0+IHtcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblxuXHRcdGNvbnN0IHNyYyA9IHRoaXMuYXR0cnMuc3JjO1xuXHRcdGlmKHNyYyA9PT0gbnVsbClcblx0XHRcdHRocm93IG5ldyBFcnJvcihcInNyYyBhdHRyaWJ1dGUgaXMgbWlzc2luZy5cIik7XG5cdFx0dGhpcy4jZGlyZWN0b3J5ID0gc3JjWzBdID09PSAnLidcblx0XHRcdFx0XHRcdFx0XHQ/IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0vJHtzcmN9YFxuXHRcdFx0XHRcdFx0XHRcdDogc3JjO1xuXG5cdFx0bmV3IE11dGF0aW9uT2JzZXJ2ZXIoIChtdXRhdGlvbnMpID0+IHtcblxuXHRcdFx0Zm9yKGxldCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpXG5cdFx0XHRcdGZvcihsZXQgYWRkaXRpb24gb2YgbXV0YXRpb24uYWRkZWROb2Rlcylcblx0XHRcdFx0XHRpZihhZGRpdGlvbiBpbnN0YW5jZW9mIEVsZW1lbnQpXG5cdFx0XHRcdFx0XHR0aGlzLiNhZGRUYWcoYWRkaXRpb24udGFnTmFtZSlcblxuXHRcdH0pLm9ic2VydmUoIGRvY3VtZW50LCB7IGNoaWxkTGlzdDp0cnVlLCBzdWJ0cmVlOnRydWUgfSk7XG5cblxuXHRcdGZvciggbGV0IGVsZW0gb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIipcIikgKVxuXHRcdFx0dGhpcy4jYWRkVGFnKGVsZW0udGFnTmFtZSk7XG5cdH1cblxuXG4gICAgcHJvdGVjdGVkIHJlc291cmNlcygpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0XCJpbmRleC5qc1wiLFxuXHRcdFx0XCJpbmRleC5odG1sXCIsXG5cdFx0XHRcImluZGV4LmNzc1wiXG5cdFx0XTtcbiAgICB9XG5cblx0cHJvdGVjdGVkIGRlZmluZVdlYkNvbXBvbmVudCh0YWduYW1lOiBzdHJpbmcsIGZpbGVzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBvcHRzOiBQYXJ0aWFsPHtjb250ZW50OiBzdHJpbmcsIGNzczogc3RyaW5nfT4pIHtcblxuXHRcdGNvbnN0IGpzID0gZmlsZXNbXCJpbmRleC5qc1wiXTtcblx0XHRjb25zdCBjb250ZW50ID0gZmlsZXNbXCJpbmRleC5odG1sXCJdO1xuXG5cdFx0bGV0IGtsYXNzOiBudWxsfCBSZXR1cm5UeXBlPHR5cGVvZiBMSVNTPiA9IG51bGw7XG5cdFx0aWYoIGpzICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0a2xhc3MgPSBqcyhvcHRzKTtcblx0XHRlbHNlIGlmKCBjb250ZW50ICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0a2xhc3MgPSBjbGFzcyBXZWJDb21wb25lbnQgZXh0ZW5kcyBMSVNTKG9wdHMpIHt9O1xuXG5cdFx0aWYoa2xhc3MgPT09IG51bGwpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgZmlsZXMgZm9yIFdlYkNvbXBvbmVudCAke3RhZ25hbWV9LmApO1xuXG5cdFx0cmV0dXJuIExJU1MuZGVmaW5lKHRhZ25hbWUsIGtsYXNzKTtcblx0fVxuXG5cdGFzeW5jICNhZGRUYWcodGFnbmFtZTogc3RyaW5nKSB7XG5cblx0XHR0YWduYW1lID0gdGFnbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0aWYoIHRhZ25hbWUgPT09ICdsaXNzLWF1dG8nIHx8IHRhZ25hbWUgPT09ICdibGlzcy1hdXRvJyB8fCAhIHRhZ25hbWUuaW5jbHVkZXMoJy0nKSB8fCB0aGlzLiNrbm93bl90YWcuaGFzKCB0YWduYW1lICkgKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0dGhpcy4ja25vd25fdGFnLmFkZCh0YWduYW1lKTtcblxuXHRcdGF3YWl0IHRoaXMuI3N3OyAvLyBlbnN1cmUgU1cgaXMgaW5zdGFsbGVkLlxuXG5cdFx0Y29uc3QgZmlsZW5hbWVzID0gdGhpcy5yZXNvdXJjZXMoKTtcblx0XHRjb25zdCByZXNvdXJjZXMgPSBhd2FpdCBQcm9taXNlLmFsbCggZmlsZW5hbWVzLm1hcCggZmlsZSA9PiBmaWxlLmVuZHNXaXRoKCcuanMnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IF9pbXBvcnQgICAoYCR7dGhpcy4jZGlyZWN0b3J5fS8ke3RhZ25hbWV9LyR7ZmlsZX1gLCB0cnVlKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IF9mZXRjaFRleHQoYCR7dGhpcy4jZGlyZWN0b3J5fS8ke3RhZ25hbWV9LyR7ZmlsZX1gLCB0cnVlKSApICk7XG5cblx0XHRjb25zdCBmaWxlczogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBmaWxlbmFtZXMubGVuZ3RoOyArK2kpXG5cdFx0XHRpZiggcmVzb3VyY2VzW2ldICE9PSB1bmRlZmluZWQpXG5cdFx0XHRcdGZpbGVzW2ZpbGVuYW1lc1tpXV0gPSByZXNvdXJjZXNbaV07XG5cblx0XHRjb25zdCBjb250ZW50ID0gZmlsZXNbXCJpbmRleC5odG1sXCJdO1xuXHRcdGNvbnN0IGNzcyAgICAgPSBmaWxlc1tcImluZGV4LmNzc1wiXTtcblxuXHRcdGNvbnN0IG9wdHM6IFBhcnRpYWw8e2NvbnRlbnQ6IHN0cmluZywgY3NzOiBzdHJpbmd9PiA9IHtcblx0XHRcdC4uLmNvbnRlbnQgIT09IHVuZGVmaW5lZCAmJiB7Y29udGVudH0sXG5cdFx0XHQuLi5jc3MgICAgICE9PSB1bmRlZmluZWQgJiYge2Nzc30sXG5cdFx0fTtcblxuXHRcdHJldHVybiB0aGlzLmRlZmluZVdlYkNvbXBvbmVudCh0YWduYW1lLCBmaWxlcywgb3B0cyk7XG5cdFx0XG5cdH1cbn1cbkxJU1MuZGVmaW5lKFwibGlzcy1hdXRvXCIsIExJU1NfQXV0byk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50cyB7XG5cdFwibGlzcy1hdXRvXCI6IExJU1NfQXV0b1xufTtcbi8qXG4gKiBkZWNsYXJlIG1vZHVsZSAnJExJU1MnIHtcbiAqIFx0XHRpbnRlcmZhY2UgQ29tcG9uZW50cyB7XG4gKiBcdFx0XHRcIm5hbWVcIjogY2xhc3NcbiAqIFx0XHR9XG4gKiB9XG4gKi9cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBFdmVudHNUYXJnZXQgPT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIENzdEV2ZW50PEV2ZW50IGV4dGVuZHMgc3RyaW5nLCBBcmdzPiA9IEN1c3RvbUV2ZW50PEFyZ3M+ICYge3R5cGU6IEV2ZW50fTtcblxuZXhwb3J0IGludGVyZmFjZSBFdmVudHNUYXJnZXQ8RXZlbnRzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj57XG5cblx0YWRkRXZlbnRMaXN0ZW5lcjxFdmVudCBleHRlbmRzIEV4Y2x1ZGU8a2V5b2YgRXZlbnRzLCBzeW1ib2x8bnVtYmVyPj4odHlwZTogRXZlbnQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgbGlzdGVuZXI6IG51bGx8ICgoZXY6IENzdEV2ZW50PEV2ZW50LCBFdmVudHNbRXZlbnRdPikgPT4gdm9pZCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgb3B0aW9ucz86IGJvb2xlYW58QWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMpOiB2b2lkO1xuXG5cdGRpc3BhdGNoRXZlbnQ8RXZlbnQgZXh0ZW5kcyBFeGNsdWRlPGtleW9mIEV2ZW50cywgc3ltYm9sfG51bWJlcj4+KGV2ZW50OiBDc3RFdmVudDxFdmVudCwgRXZlbnRzW0V2ZW50XT4pOiBib29sZWFuO1xuXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI8RXZlbnQgZXh0ZW5kcyBFeGNsdWRlPGtleW9mIEV2ZW50cywgc3ltYm9sfG51bWJlcj4+KHR5cGU6IEV2ZW50LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsaXN0ZW5lcjogbnVsbHwgKChldjogQ3N0RXZlbnQ8RXZlbnQsIEV2ZW50c1tFdmVudF0+KSA9PiB2b2lkKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz86IGJvb2xlYW58QWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMpOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgQ3N0bUV2ZW50PEV2ZW50IGV4dGVuZHMgc3RyaW5nLCBBcmdzPiBleHRlbmRzIEN1c3RvbUV2ZW50PEFyZ3M+IHtcblxuXHRvdmVycmlkZSBnZXQgdHlwZSgpOiBFdmVudCB7IHJldHVybiBzdXBlci50eXBlIGFzIEV2ZW50OyB9XG5cblx0Y29uc3RydWN0b3IodHlwZTogRXZlbnQsIGFyZ3M6IEFyZ3MpIHtcblx0XHRzdXBlcih0eXBlLCB7ZGV0YWlsOiBhcmdzfSk7XG5cdH1cbn1cblxuZXhwb3J0IHR5cGUgRXZlbnRzVGFyZ2V0Q3N0cjxFdmVudHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4+ID0gQ29uc3RydWN0b3I8RXZlbnRzVGFyZ2V0PEV2ZW50cz4+O1xuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgaW50ZXJuYWwgdG9vbHMgPT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hSZXNvdXJjZShyZXNvdXJjZTogUmVzb3VyY2V8UHJvbWlzZTxSZXNvdXJjZT4pIHtcblxuXHRyZXNvdXJjZSA9IGF3YWl0IHJlc291cmNlO1xuXG5cdGlmKCAhIChyZXNvdXJjZSBpbnN0YW5jZW9mIFJlc3BvbnNlKSApXG5cdFx0cmVzb3VyY2UgPSBhd2FpdCBmZXRjaChyZXNvdXJjZSk7XG5cblx0cmV0dXJuIGF3YWl0IHJlc291cmNlLnRleHQoKTtcbn1cblxuXG5hc3luYyBmdW5jdGlvbiBfZmV0Y2hUZXh0KHVyaTogc3RyaW5nfFVSTCwgaXNMaXNzQXV0bzogYm9vbGVhbiA9IGZhbHNlKSB7XG5cblx0Y29uc3Qgb3B0aW9ucyA9IGlzTGlzc0F1dG9cblx0XHRcdFx0XHRcdD8ge2hlYWRlcnM6e1wibGlzcy1hdXRvXCI6IFwidHJ1ZVwifX1cblx0XHRcdFx0XHRcdDoge307XG5cblxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVyaSwgb3B0aW9ucyk7XG5cdGlmKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwIClcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXG5cdGlmKCBpc0xpc3NBdXRvICYmIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwic3RhdHVzXCIpISA9PT0gXCI0MDRcIiApXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblxuXHRyZXR1cm4gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xufVxuYXN5bmMgZnVuY3Rpb24gX2ltcG9ydCh1cmk6IHN0cmluZywgaXNMaXNzQXV0bzogYm9vbGVhbiA9IGZhbHNlKSB7XG5cblx0Ly8gdGVzdCBmb3IgdGhlIG1vZHVsZSBleGlzdGFuY2UuXG5cdGlmKGlzTGlzc0F1dG8gJiYgYXdhaXQgX2ZldGNoVGV4dCh1cmksIGlzTGlzc0F1dG8pID09PSB1bmRlZmluZWQgKVxuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cblx0dHJ5IHtcblx0XHRyZXR1cm4gKGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrSWdub3JlOiB0cnVlICovIHVyaSkpLmRlZmF1bHQ7XG5cdH0gY2F0Y2goZSkge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH1cbn1cblxuLy8gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81MTAwMDQ2MS9odG1sLWVsZW1lbnQtdGFnLW5hbWUtZnJvbS1jb25zdHJ1Y3RvclxuY29uc3QgSFRNTENMQVNTX1JFR0VYID0gIC9IVE1MKFxcdyspRWxlbWVudC87XG5jb25zdCBlbGVtZW50TmFtZUxvb2t1cFRhYmxlID0ge1xuICAgICdVTGlzdCc6ICd1bCcsXG4gICAgJ1RhYmxlQ2FwdGlvbic6ICdjYXB0aW9uJyxcbiAgICAnVGFibGVDZWxsJzogJ3RkJywgLy8gdGhcbiAgICAnVGFibGVDb2wnOiAnY29sJywgIC8vJ2NvbGdyb3VwJyxcbiAgICAnVGFibGVSb3cnOiAndHInLFxuICAgICdUYWJsZVNlY3Rpb24nOiAndGJvZHknLCAvL1sndGhlYWQnLCAndGJvZHknLCAndGZvb3QnXSxcbiAgICAnUXVvdGUnOiAncScsXG4gICAgJ1BhcmFncmFwaCc6ICdwJyxcbiAgICAnT0xpc3QnOiAnb2wnLFxuICAgICdNb2QnOiAnaW5zJywgLy8sICdkZWwnXSxcbiAgICAnTWVkaWEnOiAndmlkZW8nLC8vICdhdWRpbyddLFxuICAgICdJbWFnZSc6ICdpbWcnLFxuICAgICdIZWFkaW5nJzogJ2gxJywgLy8sICdoMicsICdoMycsICdoNCcsICdoNScsICdoNiddLFxuICAgICdEaXJlY3RvcnknOiAnZGlyJyxcbiAgICAnRExpc3QnOiAnZGwnLFxuICAgICdBbmNob3InOiAnYSdcbiAgfTtcbmZ1bmN0aW9uIF9lbGVtZW50MnRhZ25hbWUoQ2xhc3M6IHR5cGVvZiBIVE1MRWxlbWVudCk6IHN0cmluZ3xudWxsIHtcblxuXHRpZiggQ2xhc3MgPT09IEhUTUxFbGVtZW50IClcblx0XHRyZXR1cm4gbnVsbDtcblx0XG5cdGxldCBodG1sdGFnID0gSFRNTENMQVNTX1JFR0VYLmV4ZWMoQ2xhc3MubmFtZSkhWzFdO1xuXHRyZXR1cm4gZWxlbWVudE5hbWVMb29rdXBUYWJsZVtodG1sdGFnIGFzIGtleW9mIHR5cGVvZiBlbGVtZW50TmFtZUxvb2t1cFRhYmxlXSA/PyBodG1sdGFnLnRvTG93ZXJDYXNlKClcbn0iLCJpbXBvcnQgTElTUyBmcm9tIFwiTElTU1wiO1xuaW1wb3J0IFwic3RydWN0L21lbnUudHNcIjtcblxuaW1wb3J0IFwic3RydWN0L2NhbGMvc2hlZXQudHNcIjtcbmltcG9ydCBcInN0cnVjdC9jYWxjL3Rvb2xiYXIudHNcIjtcbmltcG9ydCB7IENhbGNTaGVldCB9IGZyb20gXCJzdHJ1Y3QvY2FsYy9zaGVldC50c1wiO1xuaW1wb3J0IHsgQ2FsY1Rvb2xiYXIgfSBmcm9tIFwic3RydWN0L2NhbGMvdG9vbGJhci50c1wiO1xuaW1wb3J0IHsgRm9ybWF0cyB9IGZyb20gXCJzdHJ1Y3QvY2FsYy9mb3JtYXQudHNcIjtcbmltcG9ydCB7IGxvYWQgfSBmcm9tIFwic3RydWN0L2NhbGMvbG9hZGVyX29kcy50c1wiO1xuXG5cbntcbiAgICBjb25zdCBzaGVldCA9IGF3YWl0IExJU1MucXM8Q2FsY1NoZWV0PignI3NoZWV0X3Rlc3QnKTtcblxuICAgIC8vYXdhaXQgbG9hZChzaGVldCwgXCJhc3NldHMvdGFibGV1ci90ZXN0Lm9kc1wiKTtcbn1cblxuY29uc3Qgc2hlZXRfZm9ybWF0X2NvbnRlbnQgPSBhd2FpdCBMSVNTLnFzPENhbGNTaGVldD4oJyNzaGVldF9mb3JtYXRfY29udGVudCcpO1xuXG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRDZWxscyhcIkExOkYxXCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFtcbiAgICBcIlRhaWxsZVwiLCBcIkdyYXNcIiwgXCJJdGFsaXF1ZVwiLCBcIlNvdWxpZ27DqVwiLCBcIkNvdWxldXIgdGV4dGVcIiwgXCJDb3VsZXVyIGZvbmRcIlxuXVxuXG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRDZWxscyhcIkEyOkYyXCIpLmZvcm1hdChcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gXCJBXCI7XG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRDZWxscyhcIkEyXCIpLmZvcm1hdCh7Zm9udF9zaXplOiAnMTVwdCd9KTtcbnNoZWV0X2Zvcm1hdF9jb250ZW50LmdldENlbGxzKFwiQjJcIikuZm9ybWF0KCdib2xkJyk7XG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRDZWxscyhcIkMyXCIpLmZvcm1hdCgnaXRhbGljJyk7XG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRDZWxscyhcIkQyXCIpLmZvcm1hdCgndW5kZXJsaW5lJyk7XG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRDZWxscyhcIkUyXCIpLmZvcm1hdCh7Zm9yZWdyb3VuZF9jb2xvcjogJ2JsdWUnfSk7XG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRDZWxscyhcIkYyXCIpLmZvcm1hdCh7YmFja2dyb3VuZF9jb2xvcjogJ3llbGxvdyd9KTtcblxuY29uc3Qgc2hlZXRfdG9vbGJhcl9mb3JtYXRfY29udGVudCA9IGF3YWl0IExJU1MucXM8Q2FsY1Rvb2xiYXI+KCcjc2hlZXRfdG9vbGJhcl9mb3JtYXRfY29udGVudCcpO1xuc2hlZXRfdG9vbGJhcl9mb3JtYXRfY29udGVudC5zeW5jVG8oc2hlZXRfZm9ybWF0X2NvbnRlbnQpO1xuc2hlZXRfdG9vbGJhcl9mb3JtYXRfY29udGVudC5kaXNhYmxlQWxsRXhjZXB0KFwiZm9udF9zaXplXCIsIFwiYm9sZFwiLCBcIml0YWxpY1wiLCBcInVuZGVybGluZVwiLCBcImZvcmVncm91bmRfY29sb3JcIiwgXCJiYWNrZ3JvdW5kX2NvbG9yXCIpO1xuXG57XG4gICAgY29uc3Qgc2hlZXRfYWxpZ24gPSBhd2FpdCBMSVNTLnFzPENhbGNTaGVldD4oJyNzaGVldF9hbGlnbicpO1xuXG4gICAgc2hlZXRfYWxpZ24uZ2V0Q2VsbHMoXCJCMTpFMVwiKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpLmNvbnRlbnQgPSBbXG4gICAgICAgIFwiSGF1dFwiLCBcIk1pbGlldVwiLCBcIkJhc1wiLCBcIkFqdXN0ZXJcIlxuICAgIF1cblxuICAgIHNoZWV0X2FsaWduLmdldENlbGxzKFwiQTI6QTRcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiLCBcInZhbGlnbl9taWRkbGVcIikuY29udGVudCA9IFtcbiAgICAgICAgXCJHYXVjaGVcIiwgXCJDZW50cmVcIiwgXCJEcm9pdFwiXG4gICAgXVxuXG4gICAgc2hlZXRfYWxpZ24uZ2V0Q2VsbHMoXCJCMjpENFwiKS5jb250ZW50ID0gXCJBXCI7XG4gICAgc2hlZXRfYWxpZ24uZ2V0Q2VsbHMoXCJCMjpFMlwiKS5mb3JtYXQoXCJhbGlnbl9sZWZ0XCIpO1xuICAgIHNoZWV0X2FsaWduLmdldENlbGxzKFwiQjM6RTNcIikuZm9ybWF0KCdhbGlnbl9jZW50ZXInKTtcbiAgICBzaGVldF9hbGlnbi5nZXRDZWxscyhcIkI0OkU0XCIpLmZvcm1hdCgnYWxpZ25fcmlnaHQnKTtcbiAgICBzaGVldF9hbGlnbi5nZXRDZWxscyhcIkIyOkI0XCIpLmZvcm1hdCgndmFsaWduX3RvcCcpO1xuICAgIHNoZWV0X2FsaWduLmdldENlbGxzKFwiQzI6QzRcIikuZm9ybWF0KCd2YWxpZ25fbWlkZGxlJyk7XG4gICAgc2hlZXRfYWxpZ24uZ2V0Q2VsbHMoXCJEMjpENFwiKS5mb3JtYXQoJ3ZhbGlnbl9ib3R0b20nKTtcblxuICAgIHNoZWV0X2FsaWduLmdldENlbGxzKFwiRTI6RTRcIikuZm9ybWF0KFwiYWp1c3RlclwiKS5jb250ZW50ID0gYEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFgO1xuXG4gICAgY29uc3Qgc2hlZXRfdG9vbGJhcl9hbGlnbiA9IGF3YWl0IExJU1MucXM8Q2FsY1Rvb2xiYXI+KCcjc2hlZXRfdG9vbGJhcl9hbGlnbicpO1xuICAgIHNoZWV0X3Rvb2xiYXJfYWxpZ24uc3luY1RvKHNoZWV0X2FsaWduKTtcbiAgICBzaGVldF90b29sYmFyX2FsaWduLmRpc2FibGVBbGxFeGNlcHQoXCJhbGlnbl9sZWZ0XCIsIFwiYWxpZ25fY2VudGVyXCIsIFwiYWxpZ25fcmlnaHRcIiwgXCJ2YWxpZ25fdG9wXCIsIFwidmFsaWduX21pZGRsZVwiLCBcInZhbGlnbl9ib3R0b21cIiwgXCJhanVzdGVyXCIpO1xufVxuXG57XG4gICAgY29uc3Qgc2hlZXQgPSBhd2FpdCBMSVNTLnFzPENhbGNTaGVldD4oJyNzaGVldF9mb3JtYXQnKTtcblxuICAgIHNoZWV0LmdldENlbGxzKFwiQjE6RDFcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gW1xuICAgICAgICBcIk1vbm5haWVcIiwgXCJQb3VyY2VudFwiLCBcIk5vbWJyZVwiXG4gICAgXTtcblxuICAgIHNoZWV0LmdldENlbGxzKFwiQTI6QTRcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gW1xuICAgICAgICBcIk5vcm1hbFwiLCBcIisxIGRlY2ltYWxcIiwgXCItMSBkZWNpbWFsXCJcbiAgICBdO1xuXG4gICAgc2hlZXQuZ2V0Q2VsbHMoXCJCMjpENFwiKS5jb250ZW50ID0gMTtcbiAgICBzaGVldC5nZXRDZWxscyhcIkIyOkI0XCIpLmZvcm1hdChGb3JtYXRzLmV1cm9zKTtcbiAgICBzaGVldC5nZXRDZWxscyhcIkMyOkM0XCIpLmZvcm1hdChGb3JtYXRzLnBvdXJjZW50KTtcbiAgICBzaGVldC5nZXRDZWxscyhcIkQyOkQ0XCIpLmZvcm1hdChGb3JtYXRzLm51bWJlcik7XG5cbiAgICBzaGVldC5nZXRDZWxscyhcIkIzOkQzXCIpLmZvcm1hdCh7cHJlY2lzaW9uOiAzfSk7XG4gICAgc2hlZXQuZ2V0Q2VsbHMoXCJCNDpENFwiKS5mb3JtYXQoe3ByZWNpc2lvbjogMX0pO1xuXG4gICAgY29uc3Qgc2hlZXRfdG9vbGJhciA9IGF3YWl0IExJU1MucXM8Q2FsY1Rvb2xiYXI+KCcjc2hlZXRfdG9vbGJhcl9mb3JtYXQnKTtcbiAgICBzaGVldF90b29sYmFyLnN5bmNUbyhzaGVldCk7XG4gICAgc2hlZXRfdG9vbGJhci5kaXNhYmxlQWxsRXhjZXB0KFwiZm9ybWF0X21vbm5haWVcIiwgXCJmb3JtYXRfcG91cmNlbnRcIiwgXCJmb3JtYXRfbmJcIiwgXCJmb3JtYXRfemVyb19wMVwiLCBcImZvcm1hdF96ZXJvX20xXCIpO1xufVxuXG57XG4gICAgY29uc3Qgc2hlZXQgPSBhd2FpdCBMSVNTLnFzPENhbGNTaGVldD4oJyNzaGVldF9ib3JkdXJlcycpO1xuXG4gICAgc2hlZXQuZ2V0Q2VsbHMoJ0IyJykuZm9ybWF0KHtcbiAgICAgICAgYm9yZGVyX3RvcDogdHJ1ZSxcbiAgICAgICAgYm9yZGVyX2JvdHRvbTogdHJ1ZSxcbiAgICAgICAgYm9yZGVyX2xlZnQ6IHRydWUsXG4gICAgICAgIGJvcmRlcl9yaWdodDogdHJ1ZSxcbiAgICAgICAgYm9yZGVyX2NvbG9yOiAncmVkJyxcbiAgICB9KVxuXG4gICAgY29uc3Qgc2hlZXRfdG9vbGJhciA9IGF3YWl0IExJU1MucXM8Q2FsY1Rvb2xiYXI+KCcjc2hlZXRfdG9vbGJhcl9ib3JkdXJlcycpO1xuICAgIHNoZWV0X3Rvb2xiYXIuc3luY1RvKHNoZWV0KTtcbiAgICBzaGVldF90b29sYmFyLmRpc2FibGVBbGxFeGNlcHQoXCJib3JkZXJcIiwgXCJib3JkZXJfY29sb3JcIik7XG59XG5cblxue1xuICAgIGNvbnN0IHNoZWV0ID0gYXdhaXQgTElTUy5xczxDYWxjU2hlZXQ+KCcjc2hlZXRfcmV0cmFpdHMnKTtcblxuICAgIHNoZWV0LmdldENlbGxzKFwiQTE6QjFcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gW1xuICAgICAgICBcIkdhdWNoZVwiLCBcIkRyb2l0ZVwiXG4gICAgXTtcblxuICAgIHNoZWV0LmdldENlbGxzKCdBMjpCNScpLmNvbnRlbnQgPSBcIkFcIjtcbiAgICBzaGVldC5nZXRDZWxscygnQTI6QTUnKS5mb3JtYXQoXCJhbGlnbl9sZWZ0XCIpO1xuICAgIHNoZWV0LmdldENlbGxzKCdCMjpCNScpLmZvcm1hdChcImFsaWduX3JpZ2h0XCIpO1xuXG4gICAgc2hlZXQuZ2V0Q2VsbHMoJ0EzOkIzJykuZm9ybWF0KHtpbmRlbnQ6IDF9KTtcbiAgICBzaGVldC5nZXRDZWxscygnQTQ6QjQnKS5mb3JtYXQoe2luZGVudDogMn0pO1xuICAgIHNoZWV0LmdldENlbGxzKCdBNTpCNScpLmZvcm1hdCh7aW5kZW50OiAzfSk7XG5cbiAgICBjb25zdCBzaGVldF90b29sYmFyID0gYXdhaXQgTElTUy5xczxDYWxjVG9vbGJhcj4oJyNzaGVldF90b29sYmFyX3JldHJhaXRzJyk7XG4gICAgc2hlZXRfdG9vbGJhci5zeW5jVG8oc2hlZXQpO1xuICAgIHNoZWV0X3Rvb2xiYXIuZGlzYWJsZUFsbEV4Y2VwdChcInJldHJhaXRfcDFcIiwgXCJyZXRyYWl0X20xXCIpO1xufVxuXG5cbntcbiAgICBjb25zdCBzaGVldCA9IGF3YWl0IExJU1MucXM8Q2FsY1NoZWV0PignI3NoZWV0X2Z1c2lvbicpO1xuXG4gICAgc2hlZXQuZ2V0Q2VsbHMoJ0IyJykuZm9ybWF0KHtcbiAgICAgICAgc3BhbjogWzIsMl0sXG4gICAgICAgIGFsaWduX2NlbnRlcjogdHJ1ZSxcbiAgICAgICAgdmFsaWduX21pZGRsZTogdHJ1ZVxuICAgIH0pLmNvbnRlbnQgPSBcIkFcIjtcblxuICAgIGNvbnN0IHNoZWV0X3Rvb2xiYXIgPSBhd2FpdCBMSVNTLnFzPENhbGNUb29sYmFyPignI3NoZWV0X3Rvb2xiYXJfZnVzaW9uJyk7XG4gICAgc2hlZXRfdG9vbGJhci5zeW5jVG8oc2hlZXQpO1xuICAgIHNoZWV0X3Rvb2xiYXIuZGlzYWJsZUFsbEV4Y2VwdChcIm1lcmdlX2NlbnRlclwiLCBcIm1lcmdlXCIsIFwidW5tZXJnZVwiKTtcbn0iLCJpbXBvcnQgeyBzdHIyaHRtbCB9IGZyb20gXCJzdHJ1Y3QvdXRpbHMvc3RyMmh0bWxcIjtcbmltcG9ydCB7IENhbGNTaGVldCwgQ2VsbExpc3QgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5leHBvcnQgY2xhc3MgUmFuZ2VPdmVybGF5IGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuXG4gICAgI3NoZWV0OiBDYWxjU2hlZXQ7XG4gICAgI3JhbmdlOiBzdHJpbmd8bnVsbCA9IG51bGw7XG4gICAgcHJvdGVjdGVkIG92ZXJsYXk6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCwgLi4uY2xhc3NsaXN0OiBzdHJpbmdbXSkge1xuXG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcbiAgICAgICAgdGhpcy4jc2hlZXQuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm92ZXJsYXkgPSBzdHIyaHRtbChgPGRpdiBjbGFzcz0nb3ZlcmxheSc+PC9kaXY+YCk7XG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzbGlzdCk7XG5cbiAgICAgICAgc2hlZXQuY29udGVudC5hcHBlbmQoIHRoaXMub3ZlcmxheSApO1xuICAgIH1cblxuICAgIHNldFJhbmdlKHJhbmdlOiBDZWxsTGlzdHxudWxsKSB7XG4gICAgICAgIHRoaXMuI3JhbmdlID0gcmFuZ2UgPT09IG51bGwgPyBudWxsIDogcmFuZ2UucGxhZ2VfbmFtZSE7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFJlY3QoLi4ucmVjdDogcmVhZG9ubHkgW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0pIHtcbiAgICAgICAgcmV0dXJuIHJlY3Q7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuXG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIsIHRoaXMuI3JhbmdlID09PSBudWxsKTtcblxuICAgICAgICBpZiggdGhpcy4jcmFuZ2UgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmdldFJlY3QoIC4uLnRoaXMuI3NoZWV0LmdldFJlY3QoIHRoaXMuI3NoZWV0LmdldFJhbmdlKHRoaXMuI3JhbmdlKSApICk7XG4gICAgICAgIHRoaXMuI3NoZWV0LnNldFJlY3QodGhpcy5vdmVybGF5LCByZWN0ICk7XG4gICAgfVxuXG4gICAgb3ZlcnJpZGUgYWRkRXZlbnRMaXN0ZW5lcih0eXBlOiBzdHJpbmcsIGNhbGxiYWNrOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0IHwgbnVsbCwgb3B0aW9ucz86IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zIHwgYm9vbGVhbik6IHZvaWQge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBvdmVycmlkZSByZW1vdmVFdmVudExpc3RlbmVyKHR5cGU6IHN0cmluZywgY2FsbGJhY2s6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QgfCBudWxsLCBvcHRpb25zPzogRXZlbnRMaXN0ZW5lck9wdGlvbnMgfCBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5vdmVybGF5LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIG9wdGlvbnMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvcm11bGFSZWYgZXh0ZW5kcyBSYW5nZU92ZXJsYXkge1xuXG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCkge1xuICAgICAgICBzdXBlcihzaGVldCwgXCJyYW5nZV9oaWdobGlnaHRcIik7XG4gICAgfVxuXG4gICAgI2N1cl9jb2xvciA9IDA7XG4gICAgc2V0Q29sb3IoY29sb3JfaWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShgaGlnaGxpZ2h0XyR7dGhpcy4jY3VyX2NvbG9yfWApOyBcbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoYGhpZ2hsaWdodF8ke2NvbG9yX2lkfWApO1xuICAgICAgICB0aGlzLiNjdXJfY29sb3IgPSBjb2xvcl9pZDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWNvcHlIYW5kbGUgZXh0ZW5kcyBSYW5nZU92ZXJsYXkge1xuXG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCkge1xuICAgICAgICBzdXBlcihzaGVldCwgXCJyZWNvcHlcIik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldFJlY3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBbeCt3LTIsIHkraC0yLCA1LCA1XSBhcyBjb25zdDtcbiAgICB9XG5cbn0iLCJpbXBvcnQgTElTUyBmcm9tIFwiLi4vLi4vLi4vbGlicy9MSVNTXCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGwsIENlbGxMaXN0LCBkZWZhdWx0Rm9ybWF0IH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuZXhwb3J0IGNsYXNzIEZvcm1hdE1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKHNoZWV0OiBDYWxjU2hlZXQpIHtcblxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHNoZWV0LmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldjogS2V5Ym9hcmRFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICBpZiggISBldi5jdHJsS2V5IClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdiJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJib2xkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ2knKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcIml0YWxpY1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICd1Jykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJ1bmRlcmxpbmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnbCcpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KFwiYWxpZ25fbGVmdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdyJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJhbGlnbl9yaWdodFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdlJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJhbGlnbl9jZW50ZXJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnNCcgJiYgZXYuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KEZvcm1hdHMuZXVyb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJzUnICYmIGV2LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChGb3JtYXRzLnBvdXJjZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICcxJyAmJiBldi5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoRm9ybWF0cy5udW1iZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihjaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICAgICAgLyogVE9ETyBsaXN0ZW4gKi9cblxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEZvcm1hdHMgPSB7XG4gICAgZXVyb3M6IGZ1bmN0aW9uKHRoaXM6Q2VsbCwgdmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuXG4gICAgICAgIGNvbnN0IHByZWMgPSArKHRoaXMuZ2V0QXR0cmlidXRlKCdwcmVjaXNpb24nKSA/PyAyKTtcblxuICAgICAgICByZXR1cm4gdmFsdWUudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XG4gICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHByZWMsXG4gICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNcbiAgICAgICAgICAgIH0pICsgJ+KCrCc7XG4gICAgICAgIC8vLnRvRml4ZWQoMikgKyAn4oKsJztcbiAgICB9LFxuICAgIHBvdXJjZW50OiBmdW5jdGlvbih0aGlzOkNlbGwsIHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYodmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiAnJztcblxuICAgICAgICBjb25zdCBwcmVjID0gKyh0aGlzLmdldEF0dHJpYnV0ZSgncHJlY2lzaW9uJykgPz8gMik7XG5cbiAgICAgICAgcmV0dXJuICh2YWx1ZSAqIDEwMCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XG4gICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHByZWMsXG4gICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNcbiAgICAgICAgICAgIH0pICsgJyUnO1xuICAgICAgICAvLy50b0ZpeGVkKDIpICsgJ+KCrCc7XG4gICAgfSxcbiAgICBudW1iZXI6IGZ1bmN0aW9uKHRoaXM6Q2VsbCwgdmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuXG4gICAgICAgIGNvbnN0IHByZWMgPSArKHRoaXMuZ2V0QXR0cmlidXRlKCdwcmVjaXNpb24nKSA/PyAyKTtcblxuICAgICAgICByZXR1cm4gdmFsdWUudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XG4gICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHByZWMsXG4gICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvcm1hdCB7XG5cbiAgICAjZm9ybWF0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoZm9ybWF0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgICAgIHRoaXMuI2Zvcm1hdCA9IGZvcm1hdDtcbiAgICB9XG5cbiAgICBhcHBseVRvKGNlbGw6IENlbGx8Q2VsbExpc3QpIHtcblxuICAgICAgICBpZiggY2VsbCBpbnN0YW5jZW9mIENlbGxMaXN0KSB7XG5cbiAgICAgICAgICAgIGZvcihsZXQgYyBvZiBjZWxsLmNlbGxzKVxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlUbyhjKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCBuYW1lIGluIHRoaXMuI2Zvcm1hdCkge1xuICAgICAgICAgICAgbGV0IHZhbCA9IHRoaXMuI2Zvcm1hdFtuYW1lXTtcblxuICAgICAgICAgICAgaWYobmFtZSA9PT0gJ2Zvcm1hdCcpIHtcblxuICAgICAgICAgICAgICAgIGlmKCB2YWwgPT09IG51bGwpIHtcblxuICAgICAgICAgICAgICAgICAgICBjZWxsLmZvcm1hdCA9IGRlZmF1bHRGb3JtYXQ7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBjZWxsLmZvcm1hdCggY2VsbC5yYXdDb250ZW50KTsgLy9UT0RPOiBpZiBmY3RcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2VsbC5mb3JtYXQgPSB2YWw7XG4gICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGNlbGwuZm9ybWF0KCBjZWxsLnJhd0NvbnRlbnQpOyAvL1RPRE86IGlmIGZjdFxuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKG5hbWUgPT09ICdwcmVjaXNpb24nKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicsIHZhbCk7XG4gICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGNlbGwuZm9ybWF0Py4oIGNlbGwucmF3Q29udGVudCk7IC8vVE9ETzogaWYgZmN0XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCBuYW1lID09PSAnc3BhbicgKSB7XG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHNoZWV0ID0gTElTUy5nZXRMSVNTU3luYyggKGNlbGwuZ2V0Um9vdE5vZGUoKSBhcyBTaGFkb3dSb290KS5ob3N0ICk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoIHZhbFswXSA9PT0gMSAmJiB2YWxbMV0gPT09IDEpIHsgLy8gdW5tZXJnZVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCByID0gK2NlbGwuZ2V0QXR0cmlidXRlKCdyb3dzcGFuJykgPz8gMDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGMgPSArY2VsbC5nZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nKSA/PyAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByOyArK2kpXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgYzsgKytqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gc2hlZXQucmVsYXRpdmVUbyhjZWxsLCBpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGFyZ2V0LmNlbGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgncm93c3BhbicpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgnY29sc3BhbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdyb3dzcGFuJywgYCR7dmFsWzBdfWApO1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgYCR7dmFsWzFdfWApO1xuXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHZhbFswXTsgKytpKVxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdmFsWzFdOyArK2opIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGkgPT09IDAgJiYgaiA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gc2hlZXQucmVsYXRpdmVUbyhjZWxsLCBpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jZWxsID0gY2VsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCB0eXBlb2YgdmFsID09PSBcImJvb2xlYW5cIikge1xuXG4gICAgICAgICAgICAgICAgaWYoIG5hbWUuc3RhcnRzV2l0aCgnYWxpZ25fJykgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYWxpZ25fbGVmdCcpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2FsaWduX2NlbnRlcicpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2FsaWduX3JpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCBuYW1lLnN0YXJ0c1dpdGgoJ3ZhbGlnbl8nKSApIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZ25fdG9wJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWduX21pZGRsZScpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlnbl9ib3R0b20nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUobmFtZSwgdmFsKTtcblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjZWxsLnN0eWxlLnNldFByb3BlcnR5KGAtLSR7bmFtZX1gLCB2YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UHJvcGVydHkobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNmb3JtYXRbbmFtZV07XG4gICAgfVxuICAgIGhhc1Byb3BlcnR5KG5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmFtZSBpbiB0aGlzLiNmb3JtYXQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGV4dHJhY3RGb3JtYXQoY2VsbDogQ2VsbHxDZWxsTGlzdCk6IEZvcm1hdCB7XG4gICAgICAgIFxuICAgICAgICBpZiggY2VsbCBpbnN0YW5jZW9mIENlbGxMaXN0KSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gY2VsbC5jZWxscztcblxuICAgICAgICAgICAgbGV0IGZvcm1hdCA9IEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzWzBdKTtcblxuICAgICAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IGNlbGxzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGYyID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHNbaV0pO1xuXG4gICAgICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gZm9ybWF0LiNmb3JtYXQpXG4gICAgICAgICAgICAgICAgICAgIGlmKCAhIChrZXkgaW4gZjIuI2Zvcm1hdCkgfHwgZjIuI2Zvcm1hdFtrZXldICE9PSBmb3JtYXQuI2Zvcm1hdFtrZXldIClcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBmb3JtYXQuI2Zvcm1hdFtrZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgZm9ybWF0ID0gT2JqZWN0LmZyb21FbnRyaWVzPGFueT4oIFsuLi5jZWxsLmNsYXNzTGlzdC52YWx1ZXMoKV0ubWFwKGUgPT4gW2UsIHRydWVdKSApO1xuICAgICAgICBcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNlbGwuc3R5bGUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBuYW1lID0gY2VsbC5zdHlsZS5pdGVtKGkpO1xuICAgICAgICAgICAgaWYoICEgbmFtZS5zdGFydHNXaXRoKCctLScpIClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIGZvcm1hdFtuYW1lLnNsaWNlKDIpXSA9IGNlbGwuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbHNwYW4gPSArKGNlbGwuZ2V0QXR0cmlidXRlKCdjb2xzcGFuJykgPz8gMSk7XG4gICAgICAgIGNvbnN0IHJvd3NwYW4gPSArKGNlbGwuZ2V0QXR0cmlidXRlKCdyb3dzcGFuJykgPz8gMSk7XG5cbiAgICAgICAgaWYoIGNvbHNwYW4gPiAxIHx8IHJvd3NwYW4gPiAxIClcbiAgICAgICAgICAgIGZvcm1hdC5zcGFuID0gWyByb3dzcGFuLCBjb2xzcGFuIF07XG5cbiAgICAgICAgaWYoICEgKFwiZm9udF9zaXplXCIgaW4gZm9ybWF0KSApXG4gICAgICAgICAgICBmb3JtYXRbJ2ZvbnRfc2l6ZSddID0gJzEwcHQnO1xuXG4gICAgICAgIGlmKCBcImZvcm1hdFwiIGluIGNlbGwpXG4gICAgICAgICAgICBmb3JtYXQuZm9ybWF0ID0gY2VsbC5mb3JtYXQ7XG5cbiAgICAgICAgaWYoIGNlbGwuaGFzQXR0cmlidXRlKCdwcmVjaXNpb24nKSApXG4gICAgICAgICAgICBmb3JtYXQucHJlY2lzaW9uID0gY2VsbC5nZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicpO1xuXG4gICAgICAgIHJldHVybiBuZXcgRm9ybWF0KGZvcm1hdCk7XG4gICAgfVxufSIsIi8vVE9ETzogd2VicGFjayBjb25maWcuLi5cbmltcG9ydCBMSVNTIGZyb20gXCIuLi8uLi8uLi9saWJzL0xJU1NcIjtcbmltcG9ydCB7IENhbGNTaGVldCwgQ2VsbCwgQ2VsbExpc3QsIGRlZmF1bHRGb3JtYXQgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5jb25zdCBjc3MgPSBgXG4gICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYgcHJlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKCAxcmVtICsgOHB4ICsgMnB4ICk7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xpYmVyYXRpb24gU2Fucyc7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5cbmV4cG9ydCBjbGFzcyBDYWxjRm9ybXVsYSBleHRlbmRzIExJU1Moe1xuICAgIGNzc1xufSkge1xuXG4gICAgI2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XG4gICAgI3NoZWV0ICAhOiBDYWxjU2hlZXQ7XG4gICAgI2N1cl9jZWxsOiBDZWxsfG51bGwgPSBudWxsO1xuICAgICNvbklucHV0OiAoZXY6IEV2ZW50KSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCggdGhpcy4jaW5wdXQgKTtcblxuICAgICAgICB0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IHtcblxuICAgICAgICAgICAgaWYoIHRoaXMuI2N1cl9jZWxsID09PSBudWxsIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIC8vdGhpcy4jc2hlZXQuY3Vyc29yLmNvbnRlbnQgPSB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCE7XG4gICAgICAgICAgICB0aGlzLiNzaGVldC5zdGF0ZXMuY2VsbF9lZGl0LnN0YXRlID0gbnVsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsICgpID0+IHtcblxuICAgICAgICAgICAgaWYoIHRoaXMuI2N1cl9jZWxsID09PSBudWxsIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPSB0aGlzLiNjdXJfY2VsbDtcbiAgICAgICAgICAgIC8vdGhpcy4jY3VyX2NlbGwhLnRleHRDb250ZW50ID0gdGhpcy4jaW5wdXQudGV4dENvbnRlbnQhO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmKCB0aGlzLiNjdXJfY2VsbCA9PT0gbnVsbCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLiNjdXJfY2VsbCEudGV4dENvbnRlbnQgPSBkZWZhdWx0Rm9ybWF0KCB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCEgKTtcbiAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudCgnaW5wdXQnLCB7ZGV0YWlsOiB0cnVlfSkgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jb25JbnB1dCA9IChldjogRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBpZiggZXYuZGV0YWlsID09PSB0cnVlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gZGVmYXVsdEZvcm1hdCggdGhpcy4jY3VyX2NlbGwhLnRleHRDb250ZW50ISApO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN5bmNUbyhzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcbiAgICAgICAgY29uc3QgY3Vyc29yID0gdGhpcy4jc2hlZXQuY3Vyc29yO1xuXG4gICAgICAgIGN1cnNvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoXzogYW55KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gY3Vyc29yLmNlbGxzO1xuXG4gICAgICAgICAgICB0aGlzLiNpbnB1dC50b2dnbGVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIGNlbGxzLmxlbmd0aCAhPT0gMCk7XG5cbiAgICAgICAgICAgIGlmKCBjZWxscy5sZW5ndGggPT09IDApIHtcblxuICAgICAgICAgICAgICAgIGlmKCB0aGlzLiNjdXJfY2VsbCAhPT0gbnVsbCApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy4jb25JbnB1dCk7XG4gICAgICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jaW5wdXQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwgPSBjZWxsc1swXTtcbiAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy4jb25JbnB1dCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gZGVmYXVsdEZvcm1hdCggdGhpcy4jY3VyX2NlbGwucmF3Q29udGVudCApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuTElTUy5kZWZpbmUoJ2NhbGMtZm9ybXVsYScsIENhbGNGb3JtdWxhKTsiLCJpbXBvcnQgeyBDYWxjU2hlZXQsIGRlZmF1bHRGb3JtYXQsIFZhbHVlVHlwZSB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbmV4cG9ydCBjbGFzcyBGb3JtdWxhIHtcblxuICAgICNzdHI6IHN0cmluZztcbiAgICAjZXhlYzogKHNoZWV0OiBDYWxjU2hlZXQpID0+IFZhbHVlVHlwZTtcbiAgICAjcmFuZ2VzOiBUb2tlbltdO1xuXG4gICAgY29uc3RydWN0b3Ioc3RyOiBzdHJpbmcsIGV4ZWM6IChzaGVldDogQ2FsY1NoZWV0KSA9PiBWYWx1ZVR5cGUsIHJhbmdlc190b2tlbjogVG9rZW5bXSA9IFtdKSB7XG5cbiAgICAgICAgdGhpcy4jc3RyID0gc3RyO1xuICAgICAgICB0aGlzLiNleGVjID0gZXhlYztcbiAgICAgICAgdGhpcy4jcmFuZ2VzID0gcmFuZ2VzX3Rva2VuO1xuICAgIH1cbiAgICBcbiAgICByZWxhdGl2ZVRvKCBzaGVldDogQ2FsY1NoZWV0LCBkcm93OiBudW1iZXIsIGRjb2w6IG51bWJlcikge1xuICAgICAgICBcbiAgICAgICAgbGV0IG5ld19yYW5nZXMgPSB0aGlzLiNyYW5nZXMubWFwKHIgPT4ge1xuXG4gICAgICAgICAgICAvL1RPRE86IGlmIHJhbmdlLi4uXG4gICAgICAgICAgICBsZXQgcG9zID0gWy4uLnNoZWV0LmNlbGxQb3MoIHNoZWV0LmdldENlbGxzKHIudmFsdWUpLmNlbGxzWzBdICldO1xuICAgIFxuICAgICAgICAgICAgaWYoIHIudmFsdWUubGFzdEluZGV4T2YoJyQnKSA8PSAwIClcbiAgICAgICAgICAgICAgICBwb3NbMF0gKz0gZHJvdztcbiAgICAgICAgICAgIGlmKCByLnZhbHVlWzBdICE9PSAnJCcgKVxuICAgICAgICAgICAgICAgIHBvc1sxXSArPSBkY29sO1xuXG4gICAgICAgICAgICByZXR1cm4gYCR7U3RyaW5nLmZyb21DaGFyQ29kZSg2NStwb3NbMV0tMSl9JHtwb3NbMF19YDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG5ld19mb3JtdWxhID0gXCJcIjtcblxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuI3Jhbmdlcy5sZW5ndGg7ICsraSkge1xuXG4gICAgICAgICAgICBuZXdfZm9ybXVsYSArPSB0aGlzLiNzdHIuc2xpY2Uob2Zmc2V0LCB0aGlzLiNyYW5nZXNbaV0uYmVnKTtcbiAgICAgICAgICAgIG5ld19mb3JtdWxhICs9IG5ld19yYW5nZXNbaV07XG5cbiAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuI3Jhbmdlc1tpXS5lbmQ7XG4gICAgICAgIH1cbiAgICAgICAgbmV3X2Zvcm11bGEgKz0gdGhpcy4jc3RyLnNsaWNlKG9mZnNldCk7XG4gICAgICAgIFxuICAgICAgICAvL2NhbiBiZSBvcHRpbWl6ZWQuLi5cbiAgICAgICAgcmV0dXJuIHBhcnNlX2Zvcm11bGEoIG5ld19mb3JtdWxhICk7XG4gICAgfVxuXG4gICAgZ2V0IHJhbmdlc1Rva2VuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcmFuZ2VzO1xuICAgIH1cblxuICAgIGV4ZWMoc2hlZXQ6IENhbGNTaGVldCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jZXhlYyhzaGVldCk7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzdHI7XG4gICAgfVxufVxuXG50eXBlIFRva2VuID0ge1xuICAgIGJlZzogbnVtYmVyLFxuICAgIGVuZDogbnVtYmVyLFxuICAgIHZhbHVlOiBzdHJpbmcsXG4gICAgdHlwZTogXCJzdHJpbmdcInxcIm51bWJlclwifFwiY2FsbFwifFwicmFuZ2VcInxcIm9wXCJcbn1cblxuXG5mdW5jdGlvbiBleHRyYWN0VG9rZW4oc3RyOiBzdHJpbmcsIG9mZnNldDogbnVtYmVyKSB7XG5cbiAgICB3aGlsZSggWycgJywgJ1xcbicsICdcXHQnXS5pbmNsdWRlcyhzdHJbb2Zmc2V0XSkgKSAvLyBpZ25vcmUgd2hpdGVzcGFjZXNcbiAgICAgICAgKytvZmZzZXQ7XG5cbiAgICBsZXQgdG9rZW46IFBhcnRpYWw8VG9rZW4+ID0ge1xuICAgICAgICBiZWc6IG9mZnNldFxuICAgIH07XG5cbiAgICBpZihzdHJbb2Zmc2V0XSA9PT0gJ1wiJykge1xuICAgICAgICB0b2tlbi50eXBlID0gXCJzdHJpbmdcIjtcbiAgICAgICAgd2hpbGUoIHN0clsrK29mZnNldF0gIT09ICdcIicgJiYgc3RyW29mZnNldC0xXSAhPT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICBpZihvZmZzZXQrMSA+PSBzdHIubGVuZ3RoIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Zvcm11bGEgcGFyc2luZyBlcnJvcicpO1xuICAgICAgICB9XG4gICAgICAgICsrb2Zmc2V0O1xuICAgIH0gZWxzZSBpZiggc3RyW29mZnNldF0gPT09ICcsJyB8fCAoc3RyW29mZnNldF0gPj0gJzAnICYmIHN0cltvZmZzZXRdIDw9ICc5JykgKSB7XG4gICAgICAgIHRva2VuLnR5cGUgPSBcIm51bWJlclwiO1xuICAgICAgICBsZXQgaGFzQ29tbWEgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUoIHN0cltvZmZzZXRdID09PSAnLCcgfHwgc3RyW29mZnNldF0gPj0gJzAnICYmIHN0cltvZmZzZXRdIDw9ICc5JyApIHtcblxuICAgICAgICAgICAgaWYoIHN0cltvZmZzZXRdID09PSAnLCcgKSB7XG4gICAgICAgICAgICAgICAgaWYoaGFzQ29tbWEgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRm9ybXVsYSBwYXJzaW5nIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgaGFzQ29tbWEgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICArK29mZnNldDtcbiAgICAgICAgfVxuXG4gICAgfSBlbHNlIGlmKCBzdHJbb2Zmc2V0XSA9PT0gJyQnIHx8IHN0cltvZmZzZXRdID49ICdBJyAmJiBzdHJbb2Zmc2V0XSA8PSAnWicpIHsgLy8rJFxuICAgICAgICBcbiAgICAgICAgd2hpbGUoIG9mZnNldCA8IHN0ci5sZW5ndGhcbiAgICAgICAgICAgICAgICAmJiAoc3RyW29mZnNldF0gPT09ICckJyB8fCBzdHJbb2Zmc2V0XSA+PSAnQScgJiYgc3RyW29mZnNldF0gPD0gJ1onXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgc3RyW29mZnNldF0gPj0gJzAnICYmIHN0cltvZmZzZXRdIDw9ICc5J1xuICAgICAgICAgICAgICAgICAgICApIClcbiAgICAgICAgICAgICsrb2Zmc2V0O1xuXG4gICAgICAgIHRva2VuLnR5cGUgPSBzdHJbb2Zmc2V0XSA9PT0gJygnID8gJ2NhbGwnIDogJ3JhbmdlJztcblxuICAgICAgICBpZiggc3RyW29mZnNldF0gPT09ICcoJyApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdG9rZW4udHlwZSA9IFwib3BcIjsgLy8gb25seSBvbiBjaGFyID8/P1xuXG4gICAgICAgIGlmKCBzdHJbb2Zmc2V0ICsgMV0gPT09ICc9JykgLy8gPj0gLyA8PVxuICAgICAgICAgICAgKytvZmZzZXQ7XG4gICAgICAgIGVsc2UgaWYoIHN0cltvZmZzZXQgKyAxXSA9PT0gJz4nKSAvLyA8PlxuICAgICAgICAgICAgKytvZmZzZXQ7XG5cbiAgICAgICAgKytvZmZzZXQ7XG4gICAgfVxuXG4gICAgdG9rZW4uZW5kID0gb2Zmc2V0O1xuICAgIHRva2VuLnZhbHVlID0gc3RyLnNsaWNlKHRva2VuLmJlZywgdG9rZW4uZW5kKTtcblxuICAgIHJldHVybiB0b2tlbiBhcyBSZXF1aXJlZDxUb2tlbj47XG59XG5cbmNsYXNzIE5vZGUge1xuXG4gICAgY2hpbGRyZW46IE5vZGVbXTtcbiAgICAjZmN0OiAoc2hlZXQ6IENhbGNTaGVldCwgLi4uYXJnczooVmFsdWVUeXBlKVtdKSA9PiBWYWx1ZVR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihmY3Q6IChzaGVldDogQ2FsY1NoZWV0LCAuLi5hcmdzOihWYWx1ZVR5cGUpW10pID0+IFZhbHVlVHlwZSwgLi4uY2hpbGRyZW46IE5vZGVbXSkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgIGlmKGNoaWxkcmVuID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXVEZcIik7XG4gICAgICAgIHRoaXMuI2ZjdCA9IGZjdDtcbiAgICB9XG5cbiAgICBldmFsKHNoZWV0OiBDYWxjU2hlZXQpOiBWYWx1ZVR5cGUge1xuICAgICAgICBjb25zdCBhcmdzID0gdGhpcy5jaGlsZHJlbi5tYXAoIGMgPT4gYy5ldmFsKHNoZWV0KSApO1xuICAgICAgICByZXR1cm4gdGhpcy4jZmN0KHNoZWV0LCAuLi5hcmdzICk7XG4gICAgfVxuICAgIFxufVxuXG5mdW5jdGlvbiB0b051bWJlcihhOiB1bmtub3duKTogbnVtYmVyIHtcblxuICAgIGlmKGEgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgcmV0dXJuIGEgYXMgdW5rbm93biBhcyBudW1iZXI7XG59XG5cbmNvbnN0IG9wX2ltcGwgPSB7XG4gICAgJyUnOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duKSA9PiB0b051bWJlcihhKS8xMDAsXG4gICAgJ3UuKyc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24pID0+ICt0b051bWJlcihhKSxcbiAgICAndS4tJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93bikgPT4gLXRvTnVtYmVyKGEpLFxuICAgICcqJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93biwgYjogdW5rbm93bikgPT4gdG9OdW1iZXIoYSkqdG9OdW1iZXIoYiksXG4gICAgJy8nOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiB0b051bWJlcihhKS90b051bWJlcihiKSxcbiAgICAnKyc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24sIGI6IHVua25vd24pID0+IHRvTnVtYmVyKGEpK3RvTnVtYmVyKGIpLFxuICAgICctJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93biwgYjogdW5rbm93bikgPT4gdG9OdW1iZXIoYSktdG9OdW1iZXIoYiksXG4gICAgJ14nOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiBNYXRoLnBvdyh0b051bWJlcihhKSx0b051bWJlcihiKSApLFxuICAgICcmJzogKF86IENhbGNTaGVldCwgYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+IGAke2RlZmF1bHRGb3JtYXQoYSl9JHtkZWZhdWx0Rm9ybWF0KGIpfWAsXG4gICAgJz0nOiAgKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPT09IGIsXG4gICAgJzw+JzogKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgIT09IGIsXG4gICAgJz4nOiAgKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPiBiLFxuICAgICc+PSc6IChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhID49IGIsXG4gICAgJzwnOiAgKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPCBiLFxuICAgICc8PSc6IChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhIDw9IGIsXG59IGFzIFJlY29yZDxzdHJpbmcsIChfOiBDYWxjU2hlZXQsIC4uLmFyZ3M6VmFsdWVUeXBlW10pID0+IFZhbHVlVHlwZT47XG5cbi8vIGh0dHBzOi8vaGVscC5saWJyZW9mZmljZS5vcmcvbGF0ZXN0L2VuLVVTL3RleHQvc2NhbGMvMDEvMDQwNjAxOTkuaHRtbFxuY29uc3Qgb3BfcHJpbyA9IFtcbiAgICBbJzonXSwgLy8gcmFuZ2VcbiAgICBbJyEnXSwgLy8gcmFuZ2UgaW50ZXJzZWN0aW9uXG4gICAgWyd+J10sIC8vIHJhbmdlIHVuaW9uXG4gICAgWyd1LisnLCAndS4tJ10sIC8vIHVuYXJ5IC0gZnJvbSByaWdodCB0byBsZWZ0Li4uXG4gICAgWyclJ10sIC8vIHBvc3RmaXgsIC8xMDBcbiAgICBbJ14nXSwgLy8gcG93ZXJcbiAgICBbJyonLCAnLyddLFxuICAgIFsnKycsICctJ10sXG4gICAgWycmJ10sIC8vIHN0cmluZyBjb25jYXRcbiAgICBbJz0nLCAnPD4nLCAnPCcsICc8PScsICc+JywgJz49J10gLy8gY29tcGFyZVxuXTtcblxubGV0IG9wczogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHt9O1xuZm9yKGxldCBpID0gMDsgaSA8IG9wX3ByaW8ubGVuZ3RoOyArK2kpXG4gICAgZm9yKGxldCBvcCBvZiBvcF9wcmlvW2ldIClcbiAgICAgICAgb3BzW29wXSA9IGk7XG5cbmZ1bmN0aW9uIHRva2VubGlzdDJUcmVlKHRva2VuczogVG9rZW5bXSk6IE5vZGUge1xuXG4gICAgaWYoIHRva2Vucy5sZW5ndGggPT09IDEpIHtcblxuICAgICAgICBpZiggdG9rZW5zWzBdLnR5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IG5iID0gK3Rva2Vuc1swXS52YWx1ZS5yZXBsYWNlKCcsJywgJy4nKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTm9kZSggKCkgPT4gbmIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCB0b2tlbnNbMF0udHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgY29uc3Qgc3RyID0gdG9rZW5zWzBdLnZhbHVlLnNsaWNlKDEsLTEpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBOb2RlKCAoKSA9PiBzdHIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCB0b2tlbnNbMF0udHlwZSA9PT0gXCJyYW5nZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vZGUoIChzaGVldDogQ2FsY1NoZWV0KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsZXQgcmF3ID0gc2hlZXQuZ2V0Q2VsbHModG9rZW5zWzBdLnZhbHVlKS5jZWxsc1swXS5yYXdDb250ZW50O1xuXG4gICAgICAgICAgICAgICAgaWYoIHJhdyBpbnN0YW5jZW9mIEZvcm11bGEpXG4gICAgICAgICAgICAgICAgICAgIHJhdyA9IHJhdy5leGVjKHNoZWV0KTsgLy8gVE9ETzogY2FjaGUgcmVzdWx0XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmF3IGFzIFZhbHVlVHlwZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIj8/P1wiKTtcbiAgICB9XG5cbiAgICBpZih0b2tlbnNbMF0udmFsdWUgPT09ICcoJyAmJiB0b2tlbnNbdG9rZW5zLmxlbmd0aC0xXS52YWx1ZSA9PT0gJyknKVxuICAgICAgICByZXR1cm4gdG9rZW5saXN0MlRyZWUodG9rZW5zLnNsaWNlKDEsLTEpICk7XG5cbiAgICBsZXQgY3VyID0ge1xuICAgICAgICBwcmlvcml0eTogb3BfcHJpby5sZW5ndGgsXG4gICAgICAgIGlkeCAgICAgOiAtMVxuICAgIH07XG5cbiAgICBmb3IobGV0IGkgPSB0b2tlbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgaWYoIHRva2Vuc1tpXS50eXBlICE9PSBcIm9wXCIgKSAvLyBjYWxsIG5vdCBoYW5kbGVkIHlldC4uLlxuICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgaWYoIHRva2Vuc1tpXS52YWx1ZSA9PT0gJyknICkgeyAvLyBnbyB0byBmaXJzdCAnKCdcbiAgICAgICAgICAgIGkgPSB0b2tlbnMuZmluZEluZGV4KCB0ID0+IHQudHlwZSA9PT0gJ29wJyAmJiB0LnZhbHVlID09PSAnKCcpO1xuXG4gICAgICAgICAgICBpZiggaSA9PT0gMClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC0taTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFzc2VydHMgaWYgdW5hcnkgb3AuXG4gICAgICAgIGlmKCB0b2tlbnNbaV0udmFsdWUgPT09ICctJyB8fCB0b2tlbnNbaV0udmFsdWUgPT09ICcrJyApIHtcblxuICAgICAgICAgICAgaWYoIGkgPT09IDAgfHwgdG9rZW5zW2ktMV0udHlwZSA9PT0gXCJvcFwiICkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdV9vcCA9IGB1LiR7dG9rZW5zW2ldLnZhbHVlfWA7XG4gICAgICAgICAgICAgICAgdG9rZW5zW2ldLnZhbHVlID0gdV9vcDtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IG9wc1t1X29wXTtcblxuICAgICAgICAgICAgICAgIC8vIHByaW9yaXR5IGlzIHJldmVyc2VkICsgZXZhbHVhdGVkIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAgICAgICAgICAgICAgICBpZiggcHJpb3JpdHkgPD0gY3VyLnByaW9yaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGN1ci5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICAgICAgICAgICAgICBjdXIuaWR4ICAgICAgPSBpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBvcHNbdG9rZW5zW2ldLnZhbHVlXTtcblxuICAgICAgICAvLyBwcmlvcml0eSBpcyByZXZlcnNlZC5cbiAgICAgICAgaWYoIHByaW9yaXR5IDwgY3VyLnByaW9yaXR5KSB7XG4gICAgICAgICAgICBjdXIucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgICAgIGN1ci5pZHggICAgICA9IGk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiggY3VyLmlkeCA9PT0gLTEpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignPz8/Jyk7XG5cbiAgICBsZXQgb3BfdG9rZW4gPSB0b2tlbnNbY3VyLmlkeF07XG4gICAgaWYoIG9wX3Rva2VuLnZhbHVlID09PSAnJScgKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgID0gdG9rZW5zLnNsaWNlKDAsIGN1ci5pZHgpO1xuICAgICAgICBjb25zdCBvcCA9IG9wX2ltcGxbb3BfdG9rZW4udmFsdWUgYXMga2V5b2YgdHlwZW9mIG9wX2ltcGxdO1xuICAgICAgICByZXR1cm4gbmV3IE5vZGUoXG4gICAgICAgICAgICBvcCxcbiAgICAgICAgICAgIHRva2VubGlzdDJUcmVlKGxlZnQpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaWYoIG9wX3Rva2VuLnZhbHVlID09PSAndS4tJyB8fCAgb3BfdG9rZW4udmFsdWUgPT09ICd1LisnICkge1xuXG4gICAgICAgIGNvbnN0IHJpZ2h0ICA9IHRva2Vucy5zbGljZShjdXIuaWR4KzEpO1xuICAgICAgICBjb25zdCBvcCA9IG9wX2ltcGxbb3BfdG9rZW4udmFsdWUgYXMga2V5b2YgdHlwZW9mIG9wX2ltcGxdO1xuICAgICAgICByZXR1cm4gbmV3IE5vZGUoXG4gICAgICAgICAgICBvcCxcbiAgICAgICAgICAgIHRva2VubGlzdDJUcmVlKHJpZ2h0KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGxlZnQgID0gdG9rZW5zLnNsaWNlKDAsIGN1ci5pZHgpO1xuICAgIGNvbnN0IHJpZ2h0ID0gdG9rZW5zLnNsaWNlKGN1ci5pZHgrMSk7XG5cbiAgICBjb25zdCBvcCA9IG9wX2ltcGxbb3BfdG9rZW4udmFsdWUgYXMga2V5b2YgdHlwZW9mIG9wX2ltcGxdO1xuXG4gICAgcmV0dXJuIG5ldyBOb2RlKFxuICAgICAgICBvcCxcbiAgICAgICAgdG9rZW5saXN0MlRyZWUobGVmdCksXG4gICAgICAgIHRva2VubGlzdDJUcmVlKHJpZ2h0KVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZV9mb3JtdWxhKHN0cjpzdHJpbmcpIHtcblxuICAgIGxldCBvZmZzZXQgPSAxO1xuICAgIGxldCB0b2tlbnMgPSBuZXcgQXJyYXk8VG9rZW4+KCk7XG5cbiAgICB3aGlsZSggb2Zmc2V0IDwgc3RyLmxlbmd0aCkge1xuICAgICAgICBsZXQgY3VyVG9rZW4gPSBleHRyYWN0VG9rZW4oc3RyLCBvZmZzZXQpO1xuICAgICAgICB0b2tlbnMucHVzaCggY3VyVG9rZW4gKTtcbiAgICAgICAgb2Zmc2V0ID0gY3VyVG9rZW4uZW5kO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSB0b2tlbmxpc3QyVHJlZSh0b2tlbnMpITtcblxuICAgIGNvbnN0IHJhbmdlcyA9IHRva2Vucy5maWx0ZXIodCA9PiB0LnR5cGUgPT09IFwicmFuZ2VcIiApO1xuXG4gICAgcmV0dXJuIG5ldyBGb3JtdWxhKHN0ciwgKHNoZWV0OiBDYWxjU2hlZXQpID0+IG5vZGUuZXZhbChzaGVldCksIHJhbmdlcyApO1xufSIsIi8vVE9ETzogd2VicGFjayBjb25maWcuLi5cbmltcG9ydCBMSVNTIGZyb20gXCIuLi8uLi8uLi9saWJzL0xJU1NcIjtcbmltcG9ydCB7IENhbGNTaGVldCwgQ2VsbExpc3QsIGRlZmF1bHRGb3JtYXQgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG4vL1RPRE86IHN5bnRheCBoaWdobGlnaHQgOylcblxuY29uc3QgY3NzID0gYFxuICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAmIHByZSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xuICAgICAgICAgICAgbWluLWhlaWdodDogY2FsYyggMXJlbSArIDhweCArIDJweCApO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB0O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMaWJlcmF0aW9uIFNhbnMnO1xuICAgICAgICB9XG4gICAgfVxuYDtcblxuZXhwb3J0IGNsYXNzIFBsYWdlRm9ybXVsYSBleHRlbmRzIExJU1Moe1xuICAgIGNzc1xufSkge1xuXG4gICAgI2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKCB0aGlzLiNpbnB1dCApO1xuICAgICAgICB0aGlzLiNpbnB1dC50b2dnbGVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuXG4gICAgICAgIHRoaXMuI2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXYpID0+IHtcbiAgICAgICAgICAgIGlmKGV2LmNvZGUgIT09ICdFbnRlcicpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBldi5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy4jc2hlZXQuZ2V0Q2VsbHModGhpcy4jaW5wdXQudGV4dENvbnRlbnQhKS5jZWxscztcblxuICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uYWRkKCAuLi5zZWxlY3RlZCApO1xuXG4gICAgICAgICAgICB0aGlzLiNzaGVldC5jdXJzb3IuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LmN1cnNvci5hZGQoIHNlbGVjdGVkWzBdICk7XG5cbiAgICAgICAgICAgIHRoaXMuI2lucHV0LmJsdXIoKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvL1RPRE8uLi4uXG4gICAgICAgIHRoaXMuI2lucHV0LnRvZ2dsZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgLyp0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cbiAgICAgICAgfSk7Ki9cbiAgICB9XG5cbiAgICAjc2hlZXQhOiBDYWxjU2hlZXQ7XG5cbiAgICBzeW5jVG8oc2hlZXQ6IENhbGNTaGVldCkge1xuXG4gICAgICAgIHRoaXMuI3NoZWV0ID0gc2hlZXQ7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gc2hlZXQuc2VsZWN0aW9uO1xuXG4gICAgICAgIHNlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoXzogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCA9IHNlbGVjdGlvbi5wbGFnZV9uYW1lID8/IFwiXCI7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTElTUy5kZWZpbmUoJ2NhbGMtcGxhZ2UnLCBQbGFnZUZvcm11bGEpOyIsImltcG9ydCB7IENhbGNTaGVldCwgQ2VsbCB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbmV4cG9ydCBjbGFzcyBQbGFnZVNlbGVjdG9yIHtcblxuICAgICN1cGRhdGVTZWxlY3Rpb24oKSB7XG5cbiAgICAgICAgbGV0IHNlbGVjdGVkX2NlbGxzID0gdGhpcy4jc2hlZXQuZ2V0UmFuZ2UoIHRoaXMuI29yaWdfcG9zLCB0aGlzLiNmaW5hbF9wb3MgKS5jZWxscztcblxuICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uY2xlYXIoKTsgLy8gd2UgYWRkIGl0Li4uXG5cbiAgICAgICAgaWYoIHRoaXMuI2lzQ3RybCApIHtcblxuICAgICAgICAgICAgLy8gcmVzdG9yZSBpbml0aWFsIHN0YXRlLi4uXG4gICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uYWRkKC4uLnRoaXMuI3ByZXZfc2VsZWN0aW9uKTtcblxuICAgICAgICAgICAgLy9UT0RPIG9ubHkgb3JpZ190YXJnZXQuLi5cbiAgICAgICAgICAgIGlmKHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5oYXMoIC4uLnNlbGVjdGVkX2NlbGxzICkgKVxuICAgICAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5yZW1vdmUoIC4uLnNlbGVjdGVkX2NlbGxzICk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmFkZCggLi4uc2VsZWN0ZWRfY2VsbHMgKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmFkZCggLi4uc2VsZWN0ZWRfY2VsbHMgKTtcbiAgICB9XG5cbiAgICAjaXNDdHJsICAgICAgICAhOiBib29sZWFuO1xuICAgICNzaGVldCAgICAgICAgICA6IENhbGNTaGVldDtcbiAgICAjb3JpZ190YXJnZXQgICAhOiBIVE1MRWxlbWVudDtcbiAgICAjb3JpZ19wb3MgICAgICAhOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgICNmaW5hbF9wb3MgICAgICE6IFtudW1iZXIsIG51bWJlcl07XG4gICAgI3ByZXZfc2VsZWN0aW9uITogQ2VsbFtdO1xuXG4gICAgI2V2MnBvcyhldjogTW91c2VFdmVudCk6IFtudW1iZXIsbnVtYmVyXSB7XG5cbiAgICAgICAgY29uc3QgY29scyA9IFsuLi50aGlzLiNzaGVldC50Ym9keS5jaGlsZHJlblswXS5jaGlsZHJlbl07XG4gICAgICAgIGxldCBjb2xfaWQ7XG4gICAgICAgIGZvcihjb2xfaWQgPSBjb2xzLmxlbmd0aC0xOyBjb2xfaWQgPj0gMDsgLS1jb2xfaWQpIHtcbiAgICAgICAgICAgIGlmKCBldi5jbGllbnRYID49IGNvbHNbY29sX2lkXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS54IClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3Qgcm93cyA9IFsuLi50aGlzLiNzaGVldC50Ym9keS5jaGlsZHJlbl0ubWFwKCBlID0+IGUuY2hpbGRyZW5bMF0gKTtcbiAgICAgICAgbGV0IHJvd19pZDtcbiAgICAgICAgZm9yKHJvd19pZCA9IHJvd3MubGVuZ3RoLTE7IHJvd19pZCA+PSAwOyAtLXJvd19pZCkge1xuICAgICAgICAgICAgaWYoIGV2LmNsaWVudFkgPj0gcm93c1tyb3dfaWRdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkgKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtyb3dfaWQsIGNvbF9pZF07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCkge1xuXG4gICAgICAgIHRoaXMuI3NoZWV0ID0gc2hlZXQ7XG5cbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKSE7XG5cbiAgICAgICAgY29uc3Qgb25fbW91c2VfbW92ZSA9IChldjogTW91c2VFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLiNmaW5hbF9wb3MgPSB0aGlzLiNldjJwb3MoZXYpO1xuXG4gICAgICAgICAgICB0aGlzLiN1cGRhdGVTZWxlY3Rpb24oKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zb2xlLmxvZyhzaGVldCk7XG4gICAgICAgIHNoZWV0LmN1cnNvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24ucmVwbGFjZUFsbChzaGVldC5jdXJzb3IpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHNoZWV0LmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXY6TW91c2VFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiggc2hlZXQuc3RhdGVzLmNlbGxfZWRpdC5zdGF0ZSA9PT0gdGFyZ2V0ICkgIC8vIGEgY2VsbCBiZWluZyBlZGl0ZWQuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaWYoICEgW1wiVEhcIiwgXCJURFwiXS5pbmNsdWRlcyggdGFyZ2V0LnRhZ05hbWUgKSApLy8gLi4uXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgPT09IFwiVEhcIiAmJiB0YXJnZXQudGV4dENvbnRlbnQgPT09IFwiXCIgKSB7IC8vIG1vdXNlbW92ZSBkb2VzIG5vdGhpbmcuXG5cbiAgICAgICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uY2xlYXIoKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZWYgPSBgQTE6JHt0aGlzLiNzaGVldC5wb3MycmVmKHRoaXMuI3NoZWV0Lm5iUm93cywgdGhpcy4jc2hlZXQubmJDb2xzKX1gO1xuICAgICAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5hZGQoIC4uLnRoaXMuI3NoZWV0LmdldENlbGxzKHJlZikuY2VsbHMgKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4jaXNDdHJsICAgICAgICAgPSBldi5jdHJsS2V5O1xuICAgICAgICAgICAgdGhpcy4jb3JpZ190YXJnZXQgICAgPSB0YXJnZXQ7XG4gICAgICAgICAgICB0aGlzLiNvcmlnX3BvcyAgICAgICA9IHRoaXMuI2V2MnBvcyhldik7IC8vIENhbiBiZSBUSC4uLlxuICAgICAgICAgICAgdGhpcy4jZmluYWxfcG9zICAgICAgPSB0aGlzLiNvcmlnX3BvcztcbiAgICAgICAgICAgIHRoaXMuI3ByZXZfc2VsZWN0aW9uID0gc2hlZXQuc2VsZWN0aW9uLmNlbGxzLnNsaWNlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuI3VwZGF0ZVNlbGVjdGlvbigpO1xuICAgICAgICAgICAgbWFpbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbl9tb3VzZV9tb3ZlKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBtYWluLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uX21vdXNlX21vdmUpO1xuICAgICAgICAgICAgfSwge29uY2U6IHRydWV9KTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG59IiwiLy9UT0RPOiB3ZWJwYWNrIGNvbmZpZy4uLlxuaW1wb3J0IExJU1MgZnJvbSBcIi4uLy4uLy4uL2xpYnMvTElTU1wiO1xuXG4vL0B0cy1pZ25vcmVcbmltcG9ydCBjc3MgZnJvbSBcIiEhcmF3LWxvYWRlciEuL2luZGV4LmNzc1wiO1xuXG5leHBvcnQgdHlwZSBWYWx1ZVR5cGUgPSBzdHJpbmd8bnVtYmVyfERhdGV8Ym9vbGVhbjtcbmV4cG9ydCB0eXBlIFJhd0NvbnRlbnRUeXBlID0gVmFsdWVUeXBlfEZvcm11bGE7XG5cbmV4cG9ydCB0eXBlIENlbGwgPSBIVE1MVGFibGVDZWxsRWxlbWVudCAmIHtcbiAgICByYXdDb250ZW50OiBSYXdDb250ZW50VHlwZSxcbiAgICBmb3JtYXQ6ICh0aGlzOiBDZWxsLCB2OiBzdHJpbmd8bnVtYmVyKSA9PiBzdHJpbmcsXG4gICAgaXNfcm86IGJvb2xlYW5cbn07XG5cbmZ1bmN0aW9uIGlzQWN0aXZlKHRhcmdldDogSFRNTEVsZW1lbnQpIHtcblxuICAgIHJldHVybiB0YXJnZXQubWF0Y2hlcygnOmZvY3VzJyk7XG4vKlxuICAgIGxldCBhY3RpdmUgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgd2hpbGUoIGFjdGl2ZT8uc2hhZG93Um9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgKVxuICAgICAgICBhY3RpdmUgPSBhY3RpdmUuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50O1xuXG4gICAgcmV0dXJuIGFjdGl2ZSA9PT0gdGFyZ2V0OyovXG59XG5cbmZ1bmN0aW9uIG9uSW5wdXQoZXY6IEV2ZW50KSB7XG5cbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMTIzNDc0MS9wbGFjZS1jYXJldC1iYWNrLXdoZXJlLWl0LXdhcy1hZnRlci1jaGFuZ2luZy1pbm5lcmh0bWwtb2YtYS1jb250ZW50ZWRpdGFibGUtZWxlbVxuXG4gICAgbGV0IHJyYW5nZSA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSEuZ2V0UmFuZ2VBdCgwKTtcbiAgICBsZXQgYyA9IHJyYW5nZS5zdGFydE9mZnNldDtcblxuICAgIC8vbGV0IHRleHQgPSBcIlwiO1xuICAgIGxldCBsZW5ndGggPSAwO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXJnZXQuY2hpbGROb2Rlcy5sZW5ndGg7ICsraSkge1xuXG4gICAgICAgIGxldCBjaGlsZCA9IHRhcmdldC5jaGlsZE5vZGVzW2ldO1xuICAgICAgICBpZiggY2hpbGQubm9kZVR5cGUgIT09IE5vZGUuVEVYVF9OT0RFKVxuICAgICAgICAgICAgY2hpbGQgPSBjaGlsZC5jaGlsZE5vZGVzWzBdO1xuXG4gICAgICAgIGlmKCBycmFuZ2Uuc3RhcnRDb250YWluZXIgPT09IGNoaWxkICkge1xuICAgICAgICAgICAgLy90ZXh0ICs9IHAuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudCEuc2xpY2UoMCwgYyk7XG4gICAgICAgICAgICBsZW5ndGggKz0gYztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vdGV4dCArPSBwLmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQ7XG4gICAgICAgIGxlbmd0aCArPSB0YXJnZXQuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudCEubGVuZ3RoO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBpbm5lckhUTUxcbiAgICB0YXJnZXQudGV4dENvbnRlbnQgPSB0YXJnZXQudGV4dENvbnRlbnQ7XG5cbiAgICBsZXQgY2hpbGQhOiBDaGlsZE5vZGU7XG4gICAgbGV0IGk7XG4gICAgZm9yKGkgPSAwOyBpIDwgdGFyZ2V0LmNoaWxkTm9kZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYoIGxlbmd0aCA8PSB0YXJnZXQuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudCEubGVuZ3RoICkge1xuICAgICAgICAgICAgY2hpbGQgPSB0YXJnZXQuY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGxlbmd0aCAtPSB0YXJnZXQuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudCEubGVuZ3RoO1xuICAgIH1cblxuICAgIGlmKCBjaGlsZC5ub2RlVHlwZSAhPT0gTm9kZS5URVhUX05PREUpXG4gICAgICAgIGNoaWxkID0gY2hpbGQuY2hpbGROb2Rlc1swXTtcblxuICAgIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgdmFyIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSE7XG5cbiAgICByYW5nZS5zZXRTdGFydChjaGlsZCwgbGVuZ3RoKTtcbiAgICByYW5nZS5jb2xsYXBzZSh0cnVlKTtcbiAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgc2VsLmFkZFJhbmdlKHJhbmdlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRGb3JtYXQodmFsdWU6IFJhd0NvbnRlbnRUeXBlLCBwcmVjOiBudWxsfG51bWJlciA9IG51bGwpIHtcblxuICAgIC8vVE9ETy4uLlxuXG4gICAgaWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgcmV0dXJuIGAkeyt2YWx1ZS50b1ByZWNpc2lvbig3KX1gLnJlcGxhY2UoJy4nLCAnLCcpO1xuXG4gICAgaWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpXG4gICAgICAgIHJldHVybiB2YWx1ZSA/ICdWUkFJJyA6ICdGQVVYJztcblxuICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUZSXCIpO1xuICAgIH1cbiAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBGb3JtdWxhKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gcGFyc2VJbnB1dCggc3RyOiBzdHJpbmcgKTogUmF3Q29udGVudFR5cGUge1xuXG4gICAgaWYoc3RyID09PSAnVlJBSScpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIGlmKHN0ciA9PT0gJ0ZBVVgnKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBpZihzdHIudHJpbSgpID09PSAnJylcbiAgICAgICAgcmV0dXJuIHN0cjtcblxuICAgIGlmKHN0clswXSA9PT0gXCI9XCIpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlX2Zvcm11bGEoc3RyKTtcbiAgICB9XG5cbiAgICBsZXQgdGVzdF9udW1iZXIgPSBOdW1iZXIoIHN0ci5yZXBsYWNlKCcsJywgJy4nKSApO1xuICAgIGlmKCAhIE51bWJlci5pc05hTiggdGVzdF9udW1iZXIgKSApXG4gICAgICAgIHJldHVybiB0ZXN0X251bWJlcjtcblxuICAgIGNvbnN0IHBhcnRzID0gc3RyLnNwbGl0KCcvJyk7XG4gICAgaWYocGFydHMubGVuZ3RoIDw9IDMpIHtcblxuICAgICAgICBsZXQgdGVzdF9kYXRlID0gbmV3IERhdGUoXG4gICAgICAgICAgICArcGFydHNbMl0gPz8gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgK3BhcnRzWzFdLTEsXG4gICAgICAgICAgICArcGFydHNbMF1cbiAgICAgICAgKTtcblxuICAgICAgICBpZiggdGVzdF9kYXRlLnRvU3RyaW5nKCkgIT09IFwiSW52YWxpZCBEYXRlXCIgKVxuICAgICAgICAgICAgcmV0dXJuIHRlc3RfZGF0ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xufVxuXG5jbGFzcyBTdGF0ZTxUPiB7XG5cbiAgICAjc3RhdGUgOiBUfG51bGwgPSBudWxsO1xuICAgICN0YXJnZXQ6IEV2ZW50VGFyZ2V0O1xuICAgICNuYW1lICA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHRhcmdldDogRXZlbnRUYXJnZXQsIG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLiN0YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMuI25hbWUgICA9IG5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IHN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jc3RhdGU7XG4gICAgfVxuXG4gICAgc2V0IHN0YXRlKHN0YXRlOiBUfG51bGwpIHtcblxuICAgICAgICBpZiggdGhpcy4jc3RhdGUgPT09IHN0YXRlKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGxldCBwcmV2X3N0YXRlID0gdGhpcy4jc3RhdGU7XG4gICAgICAgIHRoaXMuI3N0YXRlID0gc3RhdGU7XG4gICAgICAgIFxuXG4gICAgICAgIGlmKCBwcmV2X3N0YXRlICE9PSBudWxsKVxuICAgICAgICAgICAgdGhpcy4jdGFyZ2V0LmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChgJHt0aGlzLiNuYW1lfV9lbmRgLCB7ZGV0YWlsOiBwcmV2X3N0YXRlfSkgKTsgICAgICAgICAgICBcblxuICAgICAgICBpZiggc3RhdGUgIT09IG51bGwgKVxuICAgICAgICAgICAgdGhpcy4jdGFyZ2V0LmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChgJHt0aGlzLiAjbmFtZX1fc3RhcnRgLCB7ZGV0YWlsOiBzdGF0ZX0pICk7XG4gICAgfVxufVxuXG5jb25zdCBTdGF0ZXMgPSB7XG4gICAgXCJjZWxsX2VkaXRcIjogU3RhdGU8Q2VsbD4sXG4gICAgXCJyZWNvcHlcIiAgIDogU3RhdGU8Q2VsbExpc3Q+XG4gfSBhcyBjb25zdDtcblxuZXhwb3J0IGNsYXNzIENhbGNTaGVldCBleHRlbmRzIExJU1Moe1xuICAgIGNzcyxcbiAgICBhdHRyaWJ1dGVzOiBbXCJjb2xzXCIsIFwicm93c1wiLCBcInJvXCJdXG59KSB7XG5cbiAgICBzdGF0ZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoIE9iamVjdC5lbnRyaWVzKFN0YXRlcykubWFwKCAoW24sc10pID0+IFtuLCBuZXcgcyh0aGlzLmhvc3QsIG4pXSBhcyBjb25zdCApKTtcblxuXG4gICAgLy9UT0RPOiBSTyBwcm9wID9cbiAgICAjY3Vyc29yICAgID0gbmV3IENlbGxMaXN0KHRoaXMsIFtdKTtcbiAgICAjc2VsZWN0aW9uOiBDZWxsTGlzdCA9IG5ldyBDZWxsTGlzdCh0aGlzLCBbXSk7XG4gICAgI3BsYWdlX3NlbGVjdG9yID0gbmV3IFBsYWdlU2VsZWN0b3IodGhpcyk7XG5cbiAgICAjZm9ybWF0X21uZ3IgPSBuZXcgRm9ybWF0TWFuYWdlcih0aGlzKTtcblxuICAgIGdldCBjdXJzb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjdXJzb3I7XG4gICAgfVxuICAgIGdldCBzZWxlY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzZWxlY3Rpb247XG4gICAgfVxuXG4gICAgb3ZlcnJpZGUgZ2V0IGNvbnRlbnQoKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5jb250ZW50O1xuICAgIH1cblxuICAgIHNldFJlY3QodGFyZ2V0OiBIVE1MRWxlbWVudCwgW3gseSx3LGhdOiByZWFkb25seSBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSkge1xuXG4gICAgICAgIGNvbnN0IHRibF9vZmZzZXQgPSB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvcigndGFibGUnKSEub2Zmc2V0VG9wO1xuXG4gICAgICAgIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eSgndG9wJyAgICwgYCR7dGJsX29mZnNldCArIHl9cHhgKTtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KCdoZWlnaHQnLCBgJHtofXB4YCk7XG5cbiAgICAgICAgdGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KCdsZWZ0JyAgICwgYCR7eH1weGApO1xuICAgICAgICB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkoJ3dpZHRoJywgYCR7d31weGApO1xuXG4gICAgfVxuXG4gICAgZ2V0UmVjdChjZWxsczogQ2VsbExpc3R8Q2VsbFtdKSB7XG5cbiAgICAgICAgY2VsbHMgPSBcImNlbGxzXCIgaW4gY2VsbHMgPyBjZWxscy5jZWxscyA6IGNlbGxzO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gY2VsbHNbMF07XG4gICAgICAgIGNvbnN0IGVuZCAgID0gY2VsbHNbY2VsbHMubGVuZ3RoLTFdO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHN0YXJ0Lm9mZnNldExlZnQsXG4gICAgICAgICAgICBzdGFydC5vZmZzZXRUb3AsXG4gICAgICAgICAgICBlbmQub2Zmc2V0TGVmdCArIGVuZC5jbGllbnRXaWR0aCAtIHN0YXJ0Lm9mZnNldExlZnQsXG4gICAgICAgICAgICBlbmQub2Zmc2V0VG9wICsgZW5kLmNsaWVudEhlaWdodCAtIHN0YXJ0Lm9mZnNldFRvcCArIDFcbiAgICAgICAgXSBhcyBjb25zdDtcbiAgICB9XG5cbiAgICByZWxhdGl2ZVRvKGNlbGw6IENlbGwsIHJvd19kaWZmOiBudW1iZXIsIGNvbF9kaWZmOiBudW1iZXIpIHtcbiAgICAgICAgXG4gICAgICAgIGxldCBbcm93LCBjb2xdID0gdGhpcy5jZWxsUG9zKGNlbGwpO1xuXG4gICAgICAgIHJvdyArPSByb3dfZGlmZjtcbiAgICAgICAgY29sICs9IGNvbF9kaWZmO1xuXG4gICAgICAgIC8vIGZvciBub3JtYWwgOiBnZXQgc3R1Y2sgaW5zaWRlIGdyaWQuXG4gICAgICAgIGlmKCByb3cgPCAxKVxuICAgICAgICAgICAgcm93ID0gMTtcbiAgICAgICAgaWYoIHJvdyA+PSB0aGlzLiN0Ym9keS5jaGlsZHJlbi5sZW5ndGggKVxuICAgICAgICAgICAgcm93ID0gdGhpcy4jdGJvZHkuY2hpbGRyZW4ubGVuZ3RoIC0gMTtcblxuICAgICAgICBpZiggY29sIDwgMSlcbiAgICAgICAgICAgIGNvbCA9IDE7XG4gICAgICAgIGlmKCBjb2wgPj0gdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlbi5sZW5ndGggKVxuICAgICAgICAgICAgY29sID0gdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlbi5sZW5ndGggLSAxO1xuXG4gICAgICAgIHJldHVybiB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuW2NvbF0gYXMgQ2VsbDtcbiAgICB9XG5cbiAgICAvL1RPRE86IDJELi4uXG4gICAgI3Bhc3RlYmluOiBDZWxsTGlzdCB8IG51bGwgPSBudWxsO1xuXG4gICAgI2Zvcm11bGFfcmVmcyA9IG5ldyBBcnJheTxGb3JtdWxhUmVmPigpO1xuICAgICNnZXRGb3JtdWxhUmVmKGk6IG51bWJlcikge1xuICAgICAgICB3aGlsZSggaSA+PSB0aGlzLiNmb3JtdWxhX3JlZnMubGVuZ3RoKVxuICAgICAgICAgICAgdGhpcy4jZm9ybXVsYV9yZWZzLnB1c2goIG5ldyBGb3JtdWxhUmVmKHRoaXMpICk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuI2Zvcm11bGFfcmVmc1tpXTtcbiAgICB9XG4gICAgI2NsZWFyRm9ybXVsYVJlZnMoKSB7XG4gICAgICAgIGZvcihsZXQgcmVmIG9mIHRoaXMuI2Zvcm11bGFfcmVmcylcbiAgICAgICAgICAgIHJlZi5zZXRSYW5nZShudWxsKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBjb25zdCBjdXJzb3IgPSBuZXcgUmFuZ2VPdmVybGF5KHRoaXMsIFwiY3Vyc29yXCIpO1xuICAgICAgICBjb25zdCByZWNvcHkgPSBuZXcgUmVjb3B5SGFuZGxlKHRoaXMpO1xuICAgICAgICBjb25zdCBjb3B5ICAgPSBuZXcgUmFuZ2VPdmVybGF5KHRoaXMsIFwiY29weV9oaWdobGlnaHRcIik7XG5cbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpITtcblxuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcignY2VsbF9lZGl0X2VuZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2NsZWFyRm9ybXVsYVJlZnMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGxhc3RfcmVjb3B5X3RhcmdldDogQ2VsbHxudWxsID0gbnVsbDtcbiAgICAgICAgbGV0IGxhc3RfcmVjb3B5X2RpciAgIDogW251bWJlciwgbnVtYmVyXXxudWxsID0gbnVsbFxuXG4gICAgICAgIGNvbnN0IG9uX3JlY29weV9tb3ZlID0gKGV2OiBNb3VzZUV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBjZWxscyA9ICh0aGlzLnN0YXRlcy5yZWNvcHkuc3RhdGUgYXMgQ2VsbExpc3QpLmNlbGxzO1xuICAgICAgICAgICAgY29uc3Qgc3JjID0gY2VsbHNbY2VsbHMubGVuZ3RoLTFdO1xuXG4gICAgICAgICAgICBsZXQgcG9zID0gc3JjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICBsZXQgZF9weCA9IGV2LmNsaWVudFggLSAocG9zLnggKyBwb3Mud2lkdGggLzIpO1xuICAgICAgICAgICAgbGV0IGRfcHkgPSBldi5jbGllbnRZIC0gKHBvcy55ICsgcG9zLmhlaWdodC8yKTtcblxuICAgICAgICAgICAgbGV0IGRfeCA9IDA7XG4gICAgICAgICAgICBsZXQgZF95ID0gTWF0aC5zaWduKGRfcHkpO1xuXG4gICAgICAgICAgICBpZiggTWF0aC5hYnMoZF9weCkgPiBNYXRoLmFicyhkX3B5KSApIHtcbiAgICAgICAgICAgICAgICBkX3ggPSBNYXRoLnNpZ24oZF9weCk7XG4gICAgICAgICAgICAgICAgZF95ID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHByZXYgPSBzcmM7XG4gICAgICAgICAgICBsZXQgY3VyICA9IHNyYztcblxuICAgICAgICAgICAgbGV0IGRpZmZfeCwgZGlmZl95O1xuXG4gICAgICAgICAgICBkbyB7XG5cbiAgICAgICAgICAgICAgICBwcmV2PSBjdXI7XG4gICAgICAgICAgICAgICAgY3VyID0gdGhpcy5yZWxhdGl2ZVRvKHByZXYsIGRfeSwgZF94KTtcblxuICAgICAgICAgICAgICAgIGlmKCBjdXIgPT09IHByZXYpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgbGV0IHBvc19jdXIgPSBjdXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgZGlmZl94ID0gZXYuY2xpZW50WCAtIChwb3NfY3VyLnggKyBwb3NfY3VyLndpZHRoIC8yKTtcbiAgICAgICAgICAgICAgICBkaWZmX3kgPSBldi5jbGllbnRZIC0gKHBvc19jdXIueSArIHBvc19jdXIuaGVpZ2h0LzIpO1xuXG4gICAgICAgICAgICB9IHdoaWxlKCBkaWZmX3ggKiBkX3ggKyBkaWZmX3kgKiBkX3kgPiAwICk7XG5cbiAgICAgICAgICAgIGxhc3RfcmVjb3B5X3RhcmdldCA9IHByZXY7XG4gICAgICAgICAgICBsYXN0X3JlY29weV9kaXIgICAgPSBbZF94LGRfeV07XG5cbiAgICAgICAgICAgIGxldCBiZWcgPSBzcmM7XG4gICAgICAgICAgICBsZXQgZW5kID0gcHJldjtcbiAgICAgICAgICAgIGlmKCBzcmMub2Zmc2V0TGVmdCA+IHByZXYub2Zmc2V0TGVmdCB8fCBzcmMub2Zmc2V0VG9wID4gcHJldi5vZmZzZXRUb3AgKVxuICAgICAgICAgICAgICAgIFtiZWcsIGVuZF0gPSBbZW5kLCBiZWddO1xuXG4gICAgICAgICAgICAvL1RPRE86IGhpZ2hsaWdodC4uLlxuICAgICAgICAgICAgdGhpcy4jY2xlYXJGb3JtdWxhUmVmcygpO1xuICAgICAgICAgICAgdGhpcy4jZ2V0Rm9ybXVsYVJlZigxKS5zZXRSYW5nZSggdGhpcy5nZXRSYW5nZShiZWcsIGVuZCkgKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWNvcHkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXYpID0+IHtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGVzLnJlY29weS5zdGF0ZSA9IHRoaXMuI3NlbGVjdGlvbjtcblxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgbWFpbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uX3JlY29weV9tb3ZlKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBbZF94LCBkX3ldID0gIGxhc3RfcmVjb3B5X2RpciE7XG5cbiAgICAgICAgICAgICAgICBsZXQgY2VsbHMgPSAodGhpcy5zdGF0ZXMucmVjb3B5LnN0YXRlIGFzIENlbGxMaXN0KS5jZWxscztcbiAgICAgICAgICAgICAgICBjb25zdCBzcmMgPSBjZWxsc1tjZWxscy5sZW5ndGgtMV07XG5cbiAgICAgICAgICAgICAgICBsZXQgbmIgPSAwO1xuXG4gICAgICAgICAgICAgICAgaWYoIGxhc3RfcmVjb3B5X3RhcmdldCAhPT0gc3JjKSB7IC8vIGNvcHkuLi5cblxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VyID0gc3JjO1xuICAgICAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICArK25iO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXIgPSB0aGlzLnJlbGF0aXZlVG8oY3VyLCBkX3ksIGRfeCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50OiBSYXdDb250ZW50VHlwZXxDZWxsID0gc3JjO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHR5cGVvZiBjb250ZW50LnJhd0NvbnRlbnQgPT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IChzcmMucmF3Q29udGVudCBhcyBudW1iZXIpICsgbmIqKGRfeCArIGRfeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKCBjb250ZW50LnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBEYXRlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBuZXcgRGF0ZShzcmMucmF3Q29udGVudCBhcyBEYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LnNldERhdGUoIGNvbnRlbnQuZ2V0RGF0ZSgpICsgbmIqKGRfeCArIGRfeSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ2VsbExpc3QodGhpcywgW2N1cl0pLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyLmNsYXNzTmFtZSA9IHNyYy5jbGFzc05hbWU7IC8vVE9ETzogZm9ybWF0Li4uXG5cblxuICAgICAgICAgICAgICAgICAgICB9IHdoaWxlKCBjdXIhPT0gbGFzdF9yZWNvcHlfdGFyZ2V0ICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy4jY2xlYXJGb3JtdWxhUmVmcygpOyAvLyByZWNvcHlcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlcy5yZWNvcHkuc3RhdGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIGxhc3RfcmVjb3B5X3RhcmdldCA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGFzdF9yZWNvcHlfZGlyICAgID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBtYWluLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25fcmVjb3B5X21vdmUpO1xuXG4gICAgICAgICAgICB9LCB7b25jZTogdHJ1ZX0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcigncmVjb3B5X3N0YXJ0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ3JlY29weScpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3JlY29weV9lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LnJlbW92ZSgncmVjb3B5Jyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy4jY3Vyc29yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldikgPT4ge1xuXG4gICAgICAgICAgICBpZiggdGhpcy4jY3Vyc29yLmxlbmd0aCAhPT0gMSApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXJzb3IgaGFzIGludmFsaWQgbnVtYmVyIG9mIGNlbGxzJyk7XG5cbiAgICAgICAgICAgIGN1cnNvci5zZXRSYW5nZSh0aGlzLiNjdXJzb3IpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNzZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGZvciggbGV0IGNlbGwgb2YgdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaWdobGlnaHQnKSApXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKTtcblxuICAgICAgICAgICAgY29uc3QgY2VsbHMgPSB0aGlzLiNzZWxlY3Rpb24uY2VsbHM7XG5cbiAgICAgICAgICAgIGlmKCBjZWxscy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBmb3IoIGxldCBjZWxsIG9mIGNlbGxzICkge1xuXG4gICAgICAgICAgICAgICAgaWYoIGNlbGxzLmxlbmd0aCAhPT0gMSlcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gdGhpcy4jY2VsbFBvcyhjZWxsKTtcbiAgICAgICAgICAgICAgICB0aGlzLiN0Ym9keS5jaGlsZHJlblswXS5jaGlsZHJlbltjb2xdLmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XG4gICAgICAgICAgICAgICAgdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlblswXS5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWNvcHkuc2V0UmFuZ2UodGhpcy4jc2VsZWN0aW9uKTtcblxuICAgICAgICAgICAgLy8gb25seSBpZiBzaW1wbGUuLi5cbiAgICAgICAgICAgIC8vIGNvbnN0IGxhc3QgPSBjZWxsc1tjZWxscy5sZW5ndGgtMV07XG4gICAgICAgICAgICAvLyBwb2ludGVyLi4uXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vVE9ETzogbW92ZSBvdXQgP1xuICAgICAgICBjb25zdCBmb3JtdWxhX2JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtdWxhX2Jhci5jbGFzc0xpc3QuYWRkKCd0b29sYmFyJyk7XG5cbiAgICAgICAgKCBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHBsYWdlID0gYXdhaXQgTElTUy5idWlsZChcImNhbGMtcGxhZ2VcIik7XG4gICAgICAgICAgICBwbGFnZS5zeW5jVG8odGhpcyk7XG4gICAgICAgICAgICBmb3JtdWxhX2Jhci5hcHBlbmQoIHBsYWdlLmhvc3QgKTtcblxuICAgICAgICAgICAgY29uc3QgZm9ybXVsYSA9IGF3YWl0IExJU1MuYnVpbGQoXCJjYWxjLWZvcm11bGFcIik7XG4gICAgICAgICAgICBmb3JtdWxhLnN5bmNUbyh0aGlzKTtcbiAgICAgICAgICAgIGZvcm11bGFfYmFyLmFwcGVuZCggZm9ybXVsYS5ob3N0ICk7XG5cbiAgICAgICAgfSkoKTtcbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZChmb3JtdWxhX2Jhcik7XG5cbiAgICAgICAgdGhpcy4jaW5pdEdyaWQoK3RoaXMuYXR0cnMucm93cyEsICt0aGlzLmF0dHJzLmNvbHMhKTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXYpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgICAgICAvLyB0aGUgY2VsbCBpcyBiZWluZyBlZGl0ZWQuLi5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQuaGFzQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKSApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgPT09IFwiVERcIiApIHtcblxuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gdGFyZ2V0IGFzIENlbGw7XG5cbiAgICAgICAgICAgICAgICBpZihcImNlbGxcIiBpbiBjZWxsKSAvLyBmb3IgbWVyZ2VkIGNlbGxzLi4uXG4gICAgICAgICAgICAgICAgICAgIGNlbGwgPSBjZWxsLmNlbGwgYXMgQ2VsbDtcblxuICAgICAgICAgICAgICAgIHRoaXMuI2N1cnNvci5yZXBsYWNlQWxsKGNlbGwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL1RPRE86IG5vdCBjb3JyZWN0Li4uXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgPT09IFwiVEhcIiAmJiB0YXJnZXQudGV4dENvbnRlbnQgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5nZXRDZWxscyh0YXJnZXQudGV4dENvbnRlbnQhKS5jZWxsc1swXTtcblxuICAgICAgICAgICAgICAgIHRoaXMuI2N1cnNvci5yZXBsYWNlQWxsKGNlbGwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSAhPT0gXCJURFwiKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgaWYoIHRoaXMuYXR0cnMucm8gIT09IFwidHJ1ZVwiICYmICh0YXJnZXQgYXMgQ2VsbCkuaXNfcm8gIT09IHRydWUgKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnRvZ2dsZUF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldjogS2V5Ym9hcmRFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiggdGFyZ2V0ID09PSB0aGlzLiN0Ym9keSApIHtcbiAgICAgICAgICAgICAgICBpZiggZXYuY29kZSA9PT0gXCJLZXlWXCIgJiYgZXYuY3RybEtleSAmJiB0aGlzLiNwYXN0ZWJpbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy4jcGFzdGViaW4uY2VsbHM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3NlbGVjdGlvbi5jb250ZW50ID0gZGF0YTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjb3B5IGZvcm1hdC4uLiBUT0RPIHV0aWxpdHkgdGhpbmd5Li4uXG4gICAgICAgICAgICAgICAgICAgIGlmKCAhIGV2LnNoaWZ0S2V5IHx8ICEgZXYuYWx0S2V5ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3JjID0gdGhpcy4jcGFzdGViaW4uY2VsbHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkc3QgPSB0aGlzLiNzZWxlY3Rpb24uY2VsbHM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyArK2kgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHN0W2ldLmNsYXNzTmFtZSA9IHNyY1tpXS5jbGFzc05hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiBhZGQgZm9ybWF0Li4uXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoICggZXYua2V5ID09PSBcImNcIiB8fCBldi5rZXkgPT09IFwieFwiKSAmJiBldi5jdHJsS2V5ICkge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvcHkuc2V0UmFuZ2UodGhpcy4jc2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gV0hZID8/P1xuICAgICAgICAgICAgICAgICAgICAvL2guc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcgICAsIGAke3NlbGVjdGlvblswXS5vZmZzZXRUb3B9cHhgKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNwYXN0ZWJpbiA9IHRoaXMuI3NlbGVjdGlvbi5kZWVwQ2xvbmUoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiggZXYua2V5ID09PSBcInhcIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuI3NlbGVjdGlvbi5kZWxldGVGb3JtYXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuI3NlbGVjdGlvbi5kZWxldGVDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gXCJDb250cm9sXCIgfHwgZXYua2V5ID09PSBcIlNoaWZ0XCIgfHwgZXYua2V5ID09PSBcIkFsdFwiICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIGlnbm9yZVxuICAgICAgICAgICAgICAgIH0gaWYoIGV2LmNvZGUgPT09IFwiRGVsZXRlXCIgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uZGVsZXRlQ29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBpZiggZXYuY29kZSA9PT0gXCJFbnRlclwiICkge1xuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGVkIGVsc2V3aGVyZVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiggZXYuY29kZS5zdGFydHNXaXRoKCdBcnJvdycpICkge1xuXG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VyID0gdGhpcy5jdXJzb3IuY2VsbHM7XG4gICAgICAgICAgICAgICAgICAgIGlmKCBjdXIubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBkX3JvdyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkX2NvbCA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09ICdBcnJvd0xlZnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLS1kX2NvbDtcbiAgICAgICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09ICdBcnJvd1JpZ2h0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICsrZF9jb2w7XG4gICAgICAgICAgICAgICAgICAgIGlmKCBldi5jb2RlID09PSAnQXJyb3dVcCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAtLWRfcm93O1xuICAgICAgICAgICAgICAgICAgICBpZiggZXYuY29kZSA9PT0gJ0Fycm93RG93bicpXG4gICAgICAgICAgICAgICAgICAgICAgICArK2Rfcm93O1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0OiBDZWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiggZXYuY3RybEtleSApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByZXYgICA9IGN1clswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJzb3IgPSB0aGlzLnJlbGF0aXZlVG8ocHJldiwgZF9yb3csIGRfY29sKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHByZXYucmF3Q29udGVudCAhPT0gdW5kZWZpbmVkICYmIGN1cnNvci5yYXdDb250ZW50ICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlKCBwcmV2ICE9PSBjdXJzb3IgJiYgY3Vyc29yLnJhd0NvbnRlbnQgIT09IHVuZGVmaW5lZCkgeyAvLyB3ZSByZWFjaGVkIHRoZSBlbmQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXYgICA9IGN1cnNvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gdGhpcy5yZWxhdGl2ZVRvKHByZXYsIGRfcm93LCBkX2NvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvciA9IHByZXY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlKCBwcmV2ICE9PSBjdXJzb3IgJiYgY3Vyc29yLnJhd0NvbnRlbnQgPT09IHVuZGVmaW5lZCkgeyAvLyB3ZSByZWFjaGVkIHRoZSBlbmQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXYgICA9IGN1cnNvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gdGhpcy5yZWxhdGl2ZVRvKHByZXYsIGRfcm93LCBkX2NvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gY3Vyc29yO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSB0aGlzLnJlbGF0aXZlVG8oIGN1clswXSwgZF9yb3csIGRfY29sKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3Rib2R5LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3Vyc29yLnJlcGxhY2VBbGwobmV4dCk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZXYuY3RybEtleSkgeyAvLyBpZ25vcmUgY3RybFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgeyAvLyB3ZSBzdGFydCBlZGl0aW5nLi4uXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VyID0gdGhpcy5jdXJzb3IuY2VsbHM7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIGN1ci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJbMF0uZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiZGJsY2xpY2tcIiwge2J1YmJsZXM6IHRydWV9KSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyWzBdLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQgIT09IHRoaXMuI3Rib2R5ICYmIGV2LmNvZGUgPT09ICdFbnRlcicgJiYgZXYuc2hpZnRLZXkgKVxuICAgICAgICAgICAgICAgIHJldHVybjsgLy8gZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yLlxuXG4gICAgICAgICAgICBpZihldi5jb2RlID09PSBcIkVudGVyXCIpIHsgLy9UT0RPOiBFbnRlciBpcyBmb3IgY3VycmVudCBwbGFnZS4uLlxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjdXIgPSB0aGlzLmN1cnNvci5jZWxscztcbiAgICAgICAgICAgICAgICBpZiggY3VyLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgbGV0IFtyb3csY29sXSA9IHRoaXMuY2VsbFBvcyggY3VyWzBdICk7XG5cbiAgICAgICAgICAgICAgICArK3JvdztcbiAgICAgICAgICAgICAgICBpZiggcm93ID49IHRoaXMuI3Rib2R5LmNoaWxkcmVuLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICAgICAgcm93ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgKytjb2w7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCBjb2wgPj0gdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlbi5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbCA9IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IG5leHQgPSB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuW2NvbF0gYXMgQ2VsbDtcblxuICAgICAgICAgICAgICAgIHRoaXMuI3Rib2R5LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJzb3IucmVwbGFjZUFsbChuZXh0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG9uSW5wdXQyID0gKGV2OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jY2xlYXJGb3JtdWxhUmVmcygpO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgaWYoZXYuZGV0YWlsICE9PSB0cnVlKVxuICAgICAgICAgICAgICAgIG9uSW5wdXQoZXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9UT0RPOiBoZXJlLi4uXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICAgICAgY29weS5zZXRSYW5nZShudWxsKTtcblxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lICE9PSBcIlREXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPSB0YXJnZXQgYXMgQ2VsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKFwiY2VsbF9lZGl0X3N0YXJ0XCIsIChldjogQ3VzdG9tRXZlbnQ8Q2VsbD4pID0+IHtcblxuICAgICAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC50b2dnbGUoXCJjZWxsX2VkaXRcIiwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBldi5kZXRhaWw7XG5cbiAgICAgICAgICAgIGlmKGNlbGwucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHN0ciA9IGNlbGwucmF3Q29udGVudC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlcyA9IGNlbGwucmF3Q29udGVudC5yYW5nZXNUb2tlbjtcblxuICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlbjogKHN0cmluZ3xIVE1MRWxlbWVudClbXSA9IFtzdHJdO1xuXG4gICAgICAgICAgICAgICAgbGV0IHJhbmdlc19jb2xvcnM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fTtcbiAgICAgICAgICAgICAgICBsZXQgY3VyX29mZnNldCA9IDA7XG5cbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdHIgPSBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGgtMV0gYXMgc3RyaW5nO1xuXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aC0xXSA9IHN0ci5zbGljZSgwLCByYW5nZXNbaV0uYmVnIC0gY3VyX29mZnNldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2VfbmFtZSA9IHJhbmdlc1tpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYoICEgKHJhbmdlX25hbWUgaW4gcmFuZ2VzX2NvbG9ycykgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VzX2NvbG9yc1tyYW5nZV9uYW1lXSA9IGklODtcblxuICAgICAgICAgICAgICAgICAgICBzLmNsYXNzTGlzdC5hZGQoJ2Zvcm11bGFfaGlnaGxpZ2h0JywgYGhpZ2hsaWdodF8ke3Jhbmdlc19jb2xvcnNbcmFuZ2VfbmFtZV19YCk7IC8vVE9ETy4uLlxuICAgICAgICAgICAgICAgICAgICBzLnRleHRDb250ZW50ID0gcmFuZ2VzW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKCBzICk7IC8vIHJhbmdlLi4uXG5cbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW4ucHVzaCggc3RyLnNsaWNlKHJhbmdlc1tpXS5lbmQgLSBjdXJfb2Zmc2V0KSApO1xuICAgICAgICAgICAgICAgICAgICBjdXJfb2Zmc2V0ID0gcmFuZ2VzW2ldLmVuZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjZWxsLnJlcGxhY2VDaGlsZHJlbiggLi4uY2hpbGRyZW4gKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlc19uYW1lcyA9IE9iamVjdC5rZXlzKHJhbmdlc19jb2xvcnMpO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByYW5nZXNfbmFtZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSByYW5nZXNfbmFtZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZiA9IHRoaXMuI2dldEZvcm11bGFSZWYoaSk7XG4gICAgICAgICAgICAgICAgICAgIHJlZi5zZXRDb2xvciggcmFuZ2VzX2NvbG9yc1tyYW5nZV0gKTtcbiAgICAgICAgICAgICAgICAgICAgcmVmLnNldFJhbmdlKCB0aGlzLmdldENlbGxzKHJhbmdlKSApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgb25JbnB1dDIgKTsgLy8gcmVtb3ZlIGNvbG9ycy4uLlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gZGVmYXVsdEZvcm1hdChjZWxsLnJhd0NvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNlbGxfZWRpdF9lbmRcIiwgKGV2OiBDdXN0b21FdmVudDxDZWxsPikgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LnRvZ2dsZShcImNlbGxfZWRpdFwiLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBldi5kZXRhaWw7XG5cbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIG9uSW5wdXQyKTsgLy8gdG8gYmUgc2FmZVxuICAgICAgICAgICAgY2VsbC50b2dnbGVBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgZmFsc2UpO1xuXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJsZWF2ZSBlZGl0XCIsIGNlbGwudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgbmV3IENlbGxMaXN0KHRoaXMsIFtjZWxsXSkuY29udGVudCA9IGNlbGwudGV4dENvbnRlbnQhO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgICAgICAgLy8gbGVhdmVcbiAgICAgICAgICAgIHRoaXMuI3NlbGVjdGlvbi5jbGVhcigpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGV2ID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgIT09IFwiVERcIilcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGVzLmNlbGxfZWRpdC5zdGF0ZSA9IG51bGw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKCB0aGlzLm5iUm93cyA+PSAxICYmIHRoaXMubmJDb2xzID49IDEpXG4gICAgICAgICAgICB0aGlzLmN1cnNvci5yZXBsYWNlQWxsKCB0aGlzLmdldFJhbmdlKFwiQTFcIikgKTtcbiAgICB9XG5cbiAgICBjZWxsUG9zKGNlbGw6IEhUTUxUYWJsZUNlbGxFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjZWxsUG9zKGNlbGwpO1xuICAgIH1cblxuICAgICNjZWxsUG9zKGNlbGw6IEhUTUxUYWJsZUNlbGxFbGVtZW50KSB7XG5cbiAgICAgICAgaWYoIFwicG9zXCIgaW4gY2VsbClcbiAgICAgICAgICAgIHJldHVybiBjZWxsLnBvcyBhcyBbbnVtYmVyLCBudW1iZXJdO1xuXG4gICAgICAgIGNvbnN0IGNvbCA9IFsuLi5jZWxsLnBhcmVudEVsZW1lbnQhLmNoaWxkcmVuXS5maW5kSW5kZXgoIGMgPT4gYyA9PT0gY2VsbCk7XG4gICAgICAgIGNvbnN0IHJvdyA9IFsuLi5jZWxsLnBhcmVudEVsZW1lbnQhLnBhcmVudEVsZW1lbnQhLmNoaWxkcmVuXS5maW5kSW5kZXgoIHIgPT4gciA9PT0gY2VsbC5wYXJlbnRFbGVtZW50ISk7XG5cbiAgICAgICAgcmV0dXJuIFtyb3csIGNvbF0gYXMgY29uc3Q7XG4gICAgfVxuXG4gICAgI3Rib2R5ITogSFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQ7XG4gICAgZ2V0IHRib2R5KCkgeyByZXR1cm4gdGhpcy4jdGJvZHk7IH1cblxuICAgIHJlc2l6ZShuYnJvd3M6IG51bWJlciwgbmJjb2xzOiBudW1iZXIpIHtcblxuICAgICAgICBjb25zdCBjb2xfaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgIGNvbF9odG1sLmFwcGVuZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKSApO1xuXG4gICAgICAgIGNvbnN0IHRib2R5ID0gdGhpcy4jdGJvZHk7XG4gICAgICAgIHRib2R5LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgICAgIGZvcihsZXQgY29sID0gMDsgY29sIDwgIG5iY29scyA7ICsrY29sKSB7XG4gICAgICAgICAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICB0aC50ZXh0Q29udGVudCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBjb2wpO1xuICAgICAgICAgICAgY29sX2h0bWwuYXBwZW5kKHRoKTtcbiAgICAgICAgfVxuICAgICAgICB0Ym9keS5hcHBlbmQoY29sX2h0bWwpO1xuXG4gICAgICAgIGZvcihsZXQgcm93ID0gMDsgcm93IDwgbmJyb3dzOyArK3Jvdykge1xuICAgICAgICAgICAgY29uc3Qgcm93X2h0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgICAgICAgdGgudGV4dENvbnRlbnQgPSBgJHtyb3crMX1gO1xuICAgICAgICAgICAgcm93X2h0bWwuYXBwZW5kKHRoKTtcblxuICAgICAgICAgICAgZm9yKGxldCBjb2wgPSAwOyBjb2wgPCAgbmJjb2xzIDsgKytjb2wpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKSBhcyBDZWxsO1xuICAgICAgICAgICAgICAgIC8vY2VsbC50b2dnbGVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuICAgICAgICAgICAgICAgIGNlbGwuZm9ybWF0ID0gZGVmYXVsdEZvcm1hdDtcbiAgICAgICAgICAgICAgICByb3dfaHRtbC5hcHBlbmQoIGNlbGwgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRib2R5LmFwcGVuZChyb3dfaHRtbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjaW5pdEdyaWQobmJyb3dzOiBudW1iZXIsIG5iY29sczogbnVtYmVyKSB7XG5cbiAgICAgICAgY29uc3QgaXNfcm8gPSB0aGlzLmF0dHJzLnJvID09PSBcInRydWVcIjtcblxuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgICAgIGNvbnN0IHRib2R5ICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XG4gICAgICAgIHRoaXMuI3Rib2R5ID0gdGJvZHk7XG5cbiAgICAgICAgY29uc3QgcmVzaXplT2JzID0gbmV3IFJlc2l6ZU9ic2VydmVyKCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhvc3QuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KCdyZXNpemUnKSApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzaXplT2JzLm9ic2VydmUoIHRoaXMuaG9zdCApO1xuXG4gICAgICAgIHRoaXMuI3Rib2R5LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuXG4gICAgICAgIHRoaXMucmVzaXplKG5icm93cywgbmJjb2xzKTtcblxuICAgICAgICB0YWJsZS5hcHBlbmQodGJvZHkpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKHRhYmxlKTtcbiAgICB9XG5cbiAgICBnZXRSYW5nZShmcm9tOiBDZWxsfHN0cmluZ3xyZWFkb25seVtudW1iZXIsbnVtYmVyXSwgdG86IENlbGx8c3RyaW5nfHJlYWRvbmx5W251bWJlcixudW1iZXJdID0gZnJvbSk6IENlbGxMaXN0IHtcblxuICAgICAgICAvLyBwcm9jZXNzIHJlZnMuLi5cbiAgICAgICAgaWYoIGZyb20gaW5zdGFuY2VvZiBIVE1MVGFibGVDZWxsRWxlbWVudClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJhbmdlKCB0aGlzLmNlbGxQb3MoZnJvbSksIHRvICk7XG4gICAgICAgIGlmKCB0byBpbnN0YW5jZW9mIEhUTUxUYWJsZUNlbGxFbGVtZW50KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZ2UoIGZyb20sIHRoaXMuY2VsbFBvcyh0bykgKTtcblxuICAgICAgICBpZiggdHlwZW9mIGZyb20gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGlmKCBmcm9tLmluY2x1ZGVzKFwiOlwiKSApXG4gICAgICAgICAgICAgICAgW2Zyb20sIHRvXSA9IGZyb20uc3BsaXQoJzonKTtcblxuICAgICAgICAgICAgZnJvbSA9IHRoaXMucmVmMnBvcyhmcm9tKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJhbmdlKCBmcm9tLCB0byApO1xuICAgICAgICB9XG4gICAgICAgIGlmKCB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSYW5nZSggZnJvbSwgdGhpcy5yZWYycG9zKHRvKSApO1xuXG4gICAgICAgIC8vIGdldCByYW5nZVxuXG4gICAgICAgIGxldCBiZWdfcm93ID0gZnJvbVswXSB8fCAxO1xuICAgICAgICBsZXQgYmVnX2NvbCA9IGZyb21bMV0gfHwgMTtcblxuICAgICAgICBsZXQgZW5kX3JvdyA9IGZyb21bMF0gPT09IDAgPyB0aGlzLm5iUm93cyA6IHRvWzBdO1xuICAgICAgICBsZXQgZW5kX2NvbCA9IGZyb21bMV0gPT09IDAgPyB0aGlzLm5iQ29scyA6IHRvWzFdO1xuXG4gICAgICAgIGlmKCBlbmRfcm93IDwgYmVnX3JvdyApXG4gICAgICAgICAgICBbYmVnX3JvdywgZW5kX3Jvd10gPSBbZW5kX3JvdywgYmVnX3Jvd107XG4gICAgICAgIGlmKCBlbmRfY29sIDwgYmVnX2NvbCApXG4gICAgICAgICAgICBbYmVnX2NvbCwgZW5kX2NvbF0gPSBbZW5kX2NvbCwgYmVnX2NvbF07XG5cbiAgICAgICAgY29uc3QgY2VsbHMgPSBuZXcgQXJyYXk8Q2VsbD4oIChlbmRfcm93IC0gYmVnX3JvdyArIDEpICogKGVuZF9jb2wgLSBiZWdfY29sICsgMSkgKTtcblxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgZm9yKGxldCBpID0gYmVnX3JvdzsgaSA8PSBlbmRfcm93OyArK2kgKVxuICAgICAgICAgICAgZm9yKGxldCBqID0gYmVnX2NvbDsgaiA8PSBlbmRfY29sOyArK2ogKVxuICAgICAgICAgICAgICAgIGNlbGxzW29mZnNldCsrXSA9IHRoaXMudGJvZHkuY2hpbGRyZW5baV0uY2hpbGRyZW5bal0gYXMgQ2VsbDtcblxuICAgICAgICByZXR1cm4gbmV3IENlbGxMaXN0KHRoaXMsIGNlbGxzKTtcbiAgICB9XG5cbiAgICBnZXRDZWxscyhjZWxsOiBzdHJpbmcpOiBDZWxsTGlzdDtcbiAgICBnZXRDZWxscyhyb3dfaWQ6IG51bWJlciwgY29sX2lkOiBudW1iZXIpOiBDZWxsTGlzdDtcbiAgICBnZXRDZWxscyhjZWxsX29yX3Jvd2lkOiBudW1iZXJ8c3RyaW5nLCBjb2xfaWQ/OiBudW1iZXIpIHtcblxuICAgICAgICBsZXQgcm93X2lkID0gY2VsbF9vcl9yb3dpZDtcbiAgICAgICAgaWYoIHR5cGVvZiBjZWxsX29yX3Jvd2lkID09PSBcInN0cmluZ1wiKSB7XG5cbiAgICAgICAgICAgIGNlbGxfb3Jfcm93aWQgPSBjZWxsX29yX3Jvd2lkLnJlcGxhY2VBbGwoJyQnLCAnJyk7XG5cbiAgICAgICAgICAgIGlmKCBjZWxsX29yX3Jvd2lkLmluY2x1ZGVzKCc6JykgKSB7Ly8gcmFuZ2VcblxuICAgICAgICAgICAgICAgIGxldCBbYmVnLCBlbmRdID0gY2VsbF9vcl9yb3dpZC5zcGxpdCgnOicpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYl9yb3dfaWQgPSArYmVnWzFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJfY29sX2lkID0gYmVnLmNoYXJDb2RlQXQoMCkgKyAxIC0gNjU7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBlX3Jvd19pZCA9ICtlbmRbMV07XG4gICAgICAgICAgICAgICAgY29uc3QgZV9jb2xfaWQgPSBlbmQuY2hhckNvZGVBdCgwKSArIDEgLSA2NTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gbmV3IEFycmF5KCAoZV9jb2xfaWQtYl9jb2xfaWQpICogKGVfcm93X2lkIC0gYl9yb3dfaWQpICk7XG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yKGxldCByID0gYl9yb3dfaWQ7IHIgPD0gIGVfcm93X2lkOyArK3IpXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgYyA9IGJfY29sX2lkOyBjIDw9ICBlX2NvbF9pZDsgKytjKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHNbb2Zmc2V0KytdID0gdGhpcy4jdGJvZHkuY2hpbGRyZW5bcl0uY2hpbGRyZW5bY10gYXMgQ2VsbDtcblxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ2VsbExpc3QodGhpcywgY2VsbHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB0aGlzIGlzIGEgZnVsbCBsaW5lLi4uXG4gICAgICAgICAgICBpZiggY2VsbF9vcl9yb3dpZFswXSA+PSAnMCcgJiYgY2VsbF9vcl9yb3dpZFswXSA8PSAnOScgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2VsbHMoYEEke2NlbGxfb3Jfcm93aWR9OiR7dGhpcy5wb3MycmVmKCtjZWxsX29yX3Jvd2lkLCB0aGlzLm5iQ29scyl9YCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYoIGNlbGxfb3Jfcm93aWRbY2VsbF9vcl9yb3dpZC5sZW5ndGgtMV0gPCAnMCcgfHwgY2VsbF9vcl9yb3dpZFtjZWxsX29yX3Jvd2lkLmxlbmd0aC0xXSA+ICc5JyApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oIGAke2NlbGxfb3Jfcm93aWR9MToke2NlbGxfb3Jfcm93aWR9JHt0aGlzLm5iUm93c31gICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2VsbHMoYCR7Y2VsbF9vcl9yb3dpZH0xOiR7Y2VsbF9vcl9yb3dpZH0ke3RoaXMubmJSb3dzfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByb3dfaWQgPSArY2VsbF9vcl9yb3dpZFsxXTtcbiAgICAgICAgICAgIGNvbF9pZCA9IGNlbGxfb3Jfcm93aWQuY2hhckNvZGVBdCgwKSArIDEgLSA2NTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLiN0Ym9keS5jaGlsZHJlblsrcm93X2lkXS5jaGlsZHJlbltjb2xfaWQhXSBhcyBDZWxsO1xuICAgICAgICByZXR1cm4gbmV3IENlbGxMaXN0KHRoaXMsIFtjZWxsXSk7XG4gICAgfVxuXG4gICAgcmVmMnBvcyhyZWY6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlcl0ge1xuICAgICAgICAvL1RPRE8uLi5cbiAgICAgICAgY29uc3Qgcm93ID0gK3JlZltyZWYubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnN0IGNvbCA9IHJlZi5jaGFyQ29kZUF0KDApIC0gNjUgKyAxO1xuXG4gICAgICAgIHJldHVybiBbcm93LCBjb2xdO1xuICAgIH1cbiAgICBwb3MycmVmKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gYCR7U3RyaW5nLmZyb21DaGFyQ29kZSg2NStjb2wtMSl9JHtyb3d9YDtcbiAgICB9XG4gICAgZ2V0IG5iUm93cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Rib2R5LmNoaWxkcmVuLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIGdldCBuYkNvbHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0Ym9keS5maXJzdEVsZW1lbnRDaGlsZCEuY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICAjaXNVcGRhdGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYoIHRoaXMuI2lzVXBkYXRpbmcgPT09IHRydWUgKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLiNpc1VwZGF0aW5nID0gdHJ1ZTtcblxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGw8Q2VsbD4oJ3RkJyk7XG4gICAgICAgICAgICBmb3IobGV0IGNlbGwgb2YgY2VsbHMpIHtcblxuICAgICAgICAgICAgICAgIGlmKCBjZWxsLnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBGb3JtdWxhICkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBjZWxsLnJhd0NvbnRlbnQuZXhlYyh0aGlzKTsgLy9UT0RPLi4uXG5cbiAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiBmYWN0b3JpemUuLi5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGU6IHN0cmluZyA9IHR5cGVvZiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSApXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiO1xuXG4gICAgICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSAoY2VsbCBhcyBhbnkpLmZvcm1hdCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCB0eXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuI2lzVXBkYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDZWxsTGlzdCBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcblxuICAgICNzaGVldDogQ2FsY1NoZWV0O1xuICAgICNjZWxsczogQ2VsbFtdO1xuICAgIGNvbnN0cnVjdG9yKHNoZWV0OiBDYWxjU2hlZXQsIGNlbGxzOiBDZWxsW10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy4jY2VsbHMgPSBjZWxscztcbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcbiAgICB9XG5cbiAgICBnZXQgcGxhZ2VfbmFtZSgpIHtcblxuICAgICAgICBpZiggdGhpcy4jY2VsbHMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGlmKCB0aGlzLiNjZWxscy5sZW5ndGggPT09IDEgKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuI3NoZWV0LnBvczJyZWYoIC4uLnRoaXMuI3NoZWV0LmNlbGxQb3ModGhpcy4jY2VsbHNbMF0pICk7XG5cbiAgICAgICAgbGV0IGNlbGxzID0gdGhpcy4jY2VsbHMubWFwKCBjID0+IHRoaXMuI3NoZWV0LmNlbGxQb3MoYykgKS5zb3J0KCAoYSxiKSA9PiB7XG4gICAgICAgICAgICBpZiggYVswXSAhPT0gYlswXSApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFbMF0gLSBiWzBdO1xuICAgICAgICAgICAgcmV0dXJuIGFbMV0gLSBiWzFdO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbWluID0gY2VsbHNbMF07XG4gICAgICAgIGxldCBtYXggPSBjZWxsc1tjZWxscy5sZW5ndGggLSAxXTtcblxuICAgICAgICBsZXQgbmJfY29scyA9IG1heFsxXSAtIG1pblsxXSArIDE7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgaWYoIGNlbGxzW2ldWzBdICE9PSBNYXRoLmZsb29yKGkvbmJfY29scykrbWluWzBdICYmIGNlbGxzW2ldWzFdICE9PSAoaSVuYl9jb2xzKSsgbWluWzFdIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgcmV0dXJuIGAke3RoaXMuI3NoZWV0LnBvczJyZWYoLi4ubWluKX06JHt0aGlzLiNzaGVldC5wb3MycmVmKC4uLm1heCl9YDtcbiAgICB9XG5cbiAgICBnZXQgY2VsbHMoKTogQ2VsbFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NlbGxzO1xuICAgIH1cbiAgICBnZXQgc2hlZXQoKTogQ2FsY1NoZWV0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3NoZWV0O1xuICAgIH1cblxuICAgIHRvZ2dsZUZvcm1hdChuYW1lOiBzdHJpbmd8KCh2OiBhbnksIHByZWM6IG51bWJlcnxudWxsKSA9PiBzdHJpbmcpICkge1xuICAgICAgICBsZXQgZiA9IEZvcm1hdC5leHRyYWN0Rm9ybWF0KHRoaXMpO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgbmFtZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cbiAgICAgICAgICAgIGxldCBpc0Zvcm1hdCA9IGYuZ2V0UHJvcGVydHkoXCJmb3JtYXRcIikgPT09IG5hbWU7XG5cbiAgICAgICAgICAgIHRoaXMuZm9ybWF0KHtmb3JtYXQ6IGlzRm9ybWF0ID8gbnVsbCA6IG5hbWUgfSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZm9ybWF0KHtbbmFtZV06IGYuZ2V0UHJvcGVydHkobmFtZSkgIT09IHRydWV9KTtcbiAgICB9XG5cbiAgICBmb3JtYXQoLi4uZjogKCggKHY6IGFueSwgcHJlYzogbnVtYmVyfG51bGwpID0+IHN0cmluZyApfHN0cmluZ3xGb3JtYXR8UmVjb3JkPHN0cmluZywgYW55PilbXSkge1xuXG4gICAgICAgIGlmKCBmLmxlbmd0aCA+IDEgKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vVE9ETy4uLi5cbiAgICAgICAgICAgIGYgPSBPYmplY3QuZnJvbUVudHJpZXMoIGYubWFwKCBlID0+IFtlLCB0cnVlXSApICk7XG5cbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBmID0gZlswXTtcblxuICAgICAgICBpZiggdHlwZW9mIGYgPT09IFwiZnVuY3Rpb25cIiApXG4gICAgICAgICAgICBmID0ge1wiZm9ybWF0XCI6IGZ9O1xuXG4gICAgICAgIGlmKHR5cGVvZiBmID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIGYgPSB7W2ZdOiB0cnVlfTtcblxuICAgICAgICBpZiggISAoZiBpbnN0YW5jZW9mIEZvcm1hdCkgKVxuICAgICAgICAgICAgZiA9IG5ldyBGb3JtYXQoZik7XG5cbiAgICAgICAgZi5hcHBseVRvKHRoaXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldCBjb250ZW50KCk6IChSYXdDb250ZW50VHlwZSlbXSB7XG4gICAgICAgIGxldCBjb250ZW50ID0gbmV3IEFycmF5KHRoaXMuI2NlbGxzLmxlbmd0aCk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLiNjZWxscy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgIGNvbnRlbnRbaV0gPSB0aGlzLiNjZWxsc1tpXS5yYXdDb250ZW50ITtcblxuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICB9XG5cbiAgICBkZWxldGVGb3JtYXQoKSB7XG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiB0aGlzLiNjZWxscykgLy9UT0RPIGFkZCBob2MgZm9ybWF0Li4uXG4gICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9ICcnO1xuICAgIH1cblxuICAgIGRlbGV0ZUNvbnRlbnQoKSB7XG5cbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIHRoaXMuI2NlbGxzKSB7XG4gICAgICAgICAgICBjZWxsLnJhd0NvbnRlbnQgPSB1bmRlZmluZWQgYXMgYW55O1xuICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10eXBlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzaGVldC51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBzZXQgY29udGVudChjb250ZW50OiBDZWxsfFJhd0NvbnRlbnRUeXBlfChSYXdDb250ZW50VHlwZXxDZWxsKVtdKSB7XG5cbiAgICAgICAgaWYoIEFycmF5LmlzQXJyYXkoY29udGVudCkgKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICBuZXcgQ2VsbExpc3QodGhpcy4jc2hlZXQsIFt0aGlzLiNjZWxsc1tpXV0gKS5jb250ZW50ID0gY29udGVudFtpXTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIGNvbnRlbnQgPSBwYXJzZUlucHV0KGNvbnRlbnQpO1xuXG4gICAgICAgIGxldCByYXdfdmFsID0gY29udGVudCBpbnN0YW5jZW9mIEhUTUxUYWJsZUNlbGxFbGVtZW50ID8gY29udGVudC5yYXdDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY29udGVudDtcblxuICAgICAgICBmb3IobGV0IGNlbGwgb2YgdGhpcy4jY2VsbHMpIHtcblxuICAgICAgICAgICAgaWYoY29udGVudCBpbnN0YW5jZW9mIEhUTUxUYWJsZUNlbGxFbGVtZW50ICYmIGNvbnRlbnQucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEgKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgdiA9IGNvbnRlbnQucmF3Q29udGVudDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRzdCA9IHRoaXMuI3NoZWV0LmNlbGxQb3MoIGNlbGwgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzcmMgPSB0aGlzLiNzaGVldC5jZWxsUG9zKGNvbnRlbnQpXG5cbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmID0gWyBkc3RbMF0gLSBzcmNbMF0sIGRzdFsxXSAtIHNyY1sxXV0gYXMgY29uc3Q7XG5cbiAgICAgICAgICAgICAgICByYXdfdmFsID0gdi5yZWxhdGl2ZVRvKCB0aGlzLiNzaGVldCwgLi4uZGlmZiApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjZWxsLnJhd0NvbnRlbnQgPSByYXdfdmFsO1xuXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSByYXdfdmFsO1xuICAgICAgICAgICAgaWYoIHJhd192YWwgaW5zdGFuY2VvZiBGb3JtdWxhKVxuICAgICAgICAgICAgICAgIHZhbHVlID0gcmF3X3ZhbC5leGVjKHRoaXMuI3NoZWV0KTsgLy9UT0RPLi4uXG5cbiAgICAgICAgICAgIGxldCB0eXBlOiBzdHJpbmcgPSB0eXBlb2YgdmFsdWU7XG4gICAgICAgICAgICBpZiggdHlwZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgKVxuICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCI7XG5cbiAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSAoY2VsbCBhcyBhbnkpLmZvcm1hdCh2YWx1ZSk7XG4gICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdHlwZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzaGVldC51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBzZXRSTyhpc19ybzogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIHRoaXMuI2NlbGxzKVxuICAgICAgICAgICAgY2VsbC5pc19ybyA9IGlzX3JvO1xuICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY2VsbHMubGVuZ3RoO1xuICAgIH1cblxuICAgIGhhcyguLi5jZWxsczogQ2VsbFtdKSB7XG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiBjZWxscylcbiAgICAgICAgICAgIGlmKCAhIHRoaXMuI2NlbGxzLmluY2x1ZGVzKGNlbGwpIClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJlbW92ZSguLi5jZWxsczogQ2VsbFtdKSB7XG4gICAgICAgIHRoaXMuI2NlbGxzID0gdGhpcy4jY2VsbHMuZmlsdGVyKCBjID0+ICEgY2VsbHMuaW5jbHVkZXMoYykgKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcbiAgICB9XG5cbiAgICByZXBsYWNlQWxsKC4uLmNlbGxzOiBDZWxsW118W0NlbGxMaXN0XSkge1xuICAgICAgICB0aGlzLiNjZWxscy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmFkZCguLi5jZWxscyk7XG4gICAgfVxuXG4gICAgYWRkKC4uLmNlbGxzOiBDZWxsW118W0NlbGxMaXN0XSkge1xuXG4gICAgICAgIGlmKCBjZWxsc1swXSBpbnN0YW5jZW9mIENlbGxMaXN0KVxuICAgICAgICAgICAgY2VsbHMgPSBjZWxsc1swXS5jZWxscztcblxuICAgICAgICB0aGlzLiNjZWxscy5wdXNoKC4uLmNlbGxzIGFzIENlbGxbXSk7XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy4jY2VsbHMubGVuZ3RoID0gMDtcblxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSApO1xuICAgIH1cblxuXG4gICAgZGVlcENsb25lKCkge1xuXG4gICAgICAgIGxldCBjZWxscyA9IHRoaXMuI2NlbGxzLm1hcCggYyA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbG9uZSA9IGMuY2xvbmVOb2RlKHRydWUpIGFzIENlbGw7XG5cbiAgICAgICAgICAgIGNsb25lLnJhd0NvbnRlbnQgPSBjLnJhd0NvbnRlbnQ7XG4gICAgICAgICAgICBjbG9uZS5mb3JtYXQgICAgID0gYy5mb3JtYXQ7XG4gICAgICAgICAgICAoY2xvbmUgYXMgYW55KS5wb3MgICAgICAgID0gdGhpcy4jc2hlZXQuY2VsbFBvcyhjKTtcblxuICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBuZXcgQ2VsbExpc3QodGhpcy4jc2hlZXQsIGNlbGxzKTtcbiAgICB9XG59XG5cbi8vVE9ETy4uLlxuaW1wb3J0IFwiLi9mb3JtdWxhX2VkaXRvclwiO1xuaW1wb3J0IFwiLi9wbGFnZV9lZGl0b3JcIjtcbmltcG9ydCB7IEZvcm11bGEsIHBhcnNlX2Zvcm11bGEgfSBmcm9tIFwiLi9mb3JtdWxhX3BhcnNlclwiO1xuaW1wb3J0IHsgUGxhZ2VTZWxlY3RvciB9IGZyb20gXCIuL3BsYWdlX3NlbGVjdG9yXCI7XG5pbXBvcnQgeyBGb3JtYXQsIEZvcm1hdE1hbmFnZXIgfSBmcm9tIFwiLi9mb3JtYXRcIjtcbmltcG9ydCB7IEZvcm11bGFSZWYsIFJhbmdlT3ZlcmxheSwgUmVjb3B5SGFuZGxlIH0gZnJvbSBcIi4vUmFuZ2VPdmVybGF5XCI7XG5cbkxJU1MuZGVmaW5lKCdjYWxjLXNoZWV0JywgQ2FsY1NoZWV0KTsiLCJpbXBvcnQgTElTUyBmcm9tIFwiLi4vLi4vLi4vbGlicy9MSVNTXCI7XG5pbXBvcnQgeyBGb3JtYXQsIEZvcm1hdHMgfSBmcm9tIFwiLi9mb3JtYXRcIjtcbmltcG9ydCB7IENhbGNTaGVldCwgQ2VsbExpc3QgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5jb25zdCBjb250ZW50ID0gYFxuICAgIDxzZWxlY3QgZGlzYWJsZWQgdGl0bGU9XCJOb20gZGUgcG9saWNlXCI+PG9wdGlvbj5MaWLDqXJhdGlvbiBTYW5zPC9vcHRpb24+PC9zZWxlY3Q+XG4gICAgPHNlbGVjdCBjbGFzcz1cImZvbnRfc2l6ZVwiIHRpdGxlPVwiVGFpbGxlIGRlIHBvbGljZVwiPjwvc2VsZWN0PlxuICAgIDxzcGFuIGNsYXNzPSd2YmFyJz48L3NwYW4+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2JvbGQnIHRpdGxlPVwiR3JhcyAoQ3RybCtCKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2l0YWxpYycgdGl0bGU9XCJJdGFsaXF1ZSAoQ3RybCtJKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J3VuZGVybGluZScgdGl0bGU9XCJTb3VsaWduYWdlIChDdHJsK1UpXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8c3BhbiBjbGFzcz0ndmJhcic+PC9zcGFuPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSB2YWx1ZT0nYmxhY2snIG5hbWU9J2ZvcmVncm91bmRfY29sb3InIHRpdGxlPVwiQ291bGV1ciBkZSBwb2xpY2VcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSB2YWx1ZT0neWVsbG93JyBuYW1lPSdiYWNrZ3JvdW5kX2NvbG9yJyB0aXRsZT1cIkNvdWxldXIgZCdhcnJpw6hyZS1wbGFuXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8c3BhbiBjbGFzcz0ndmJhcic+PC9zcGFuPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdhbGlnbl9sZWZ0JyB0aXRsZT1cIkFsaWduZXIgw6AgZ2F1Y2hlIChDdHJsK0wpXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nYWxpZ25fY2VudGVyJyB0aXRsZT1cIkNlbnRlciAoQ3RybCtFKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2FsaWduX3JpZ2h0JyB0aXRsZT1cIkFsaWduZXIgw6AgZHJvaXRlIChDdHJsK1IpXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8c3BhbiBjbGFzcz0ndmJhcic+PC9zcGFuPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSd2YWxpZ25fdG9wJyB0aXRsZT1cIkFsaWduZXIgZW4gaGF1dFwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J3ZhbGlnbl9taWRkbGUnIHRpdGxlPVwiQ2VudHJlciB2ZXJ0aWNhbGVtZW50XCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0ndmFsaWduX2JvdHRvbScgdGl0bGU9XCJBbGlnbmVyIGVuIGJhc1wiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nYWp1c3RlcicgdGl0bGU9XCJBanVzdGVyIGxlIHRleHRlXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8c3BhbiBjbGFzcz0ndmJhcic+PC9zcGFuPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdtZXJnZV9jZW50ZXInIHR5cGU9J2ZjdCcgdGl0bGU9XCJGdXNpb25uZXIgZXQgY2VudHJlciBvdSBkw6lmdXNpb25uZXIgbGVzIGNlbGx1bGVzIGVuIGludmVyc2FudCBsZXVyIMOpdGF0IGFjdHVlbFwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J21lcmdlJyB0eXBlPSdmY3QnIHRpdGxlPVwiRnVzaW9ubmVyIGxlcyBjZWxsdWxlc1wiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J3VubWVyZ2UnIHR5cGU9J2ZjdCcgdGl0bGU9XCJEw6lmdXNpb25uZXIgbGVzIGNlbGx1bGVzXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8c3BhbiBjbGFzcz0ndmJhcic+PC9zcGFuPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdmb3JtYXRfbW9ubmFpZScgdHlwZT0nZmN0JyB0aXRsZT1cIkFwcGxpcXVlciBsZSBmb3JtYXQgTW9ubmFpZSAoTWFqK0N0cmwrNClcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdmb3JtYXRfcG91cmNlbnQnIHR5cGU9J2ZjdCcgdGl0bGU9XCJBcHBsaXF1ZXIgbGUgZm9ybWF0IFBvdXJjZW50YWdlIChNYWorQ3RybCs1KVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2Zvcm1hdF9uYicgdHlwZT0nZmN0JyAgdGl0bGU9XCJBcHBsaXF1ZXIgbGUgZm9ybWF0IE5vbWJyZSAoTWFqK0N0cmwrMSlcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdmb3JtYXRfZGF0ZScgdHlwZT0nZmN0JyBkaXNhYmxlZCAgdGl0bGU9XCJBcHBsaXF1ZXIgbGUgZm9ybWF0IERhdGUgKE1haitDdHJsKzMpXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8c3BhbiBjbGFzcz0ndmJhcic+PC9zcGFuPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdmb3JtYXRfemVyb19wMScgdHlwZT0nZmN0JyB0aXRsZT1cIkFqb3V0ZXIgdW5lIGTDqWNpbWFsZVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2Zvcm1hdF96ZXJvX20xJyB0eXBlPSdmY3QnIHRpdGxlPVwiU3VwcHJpbWVyIHVuZSBkw6ljaW1hbGVcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxzcGFuIGNsYXNzPSd2YmFyJz48L3NwYW4+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J3JldHJhaXRfcDEnIHR5cGU9J2ZjdCcgdGl0bGU9XCJBdWdtZW50ZXIgbGUgcmV0cmFpdFwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J3JldHJhaXRfbTEnIHR5cGU9J2ZjdCcgdGl0bGU9XCJEaW1pbnVlciBsZSByZXRyYWl0XCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8c3BhbiBjbGFzcz0ndmJhcic+PC9zcGFuPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdib3JkZXInIHR5cGU9J2ZjdCcgdGl0bGU9XCJCb3JkdXJlcyAoTWFqIHBvdXIgw6ljcmFzZXIpXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nYm9yZGVyX3N0eWxlJyB0eXBlPSdmY3QnIGRpc2FibGVkIHRpdGxlPVwiU3R5bGUgZGUgYm9yZHVyZVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIHZhbHVlPSdibGFjaycgbmFtZT0nYm9yZGVyX2NvbG9yJyB0aXRsZT1cIkNvdWxldXIgZGUgYm9yZHVyZVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nZm9ybWF0X2NvbmQnIHR5cGU9J2ZjdCcgZGlzYWJsZWQgdGl0bGU9XCJDb25kaXRpb25uZWxcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuYDtcblxuZnVuY3Rpb24gbWVyZ2UoY2VsbGxpc3Q6IENlbGxMaXN0LCBpc19hbGlnbiA9IGZhbHNlKSB7XG5cbiAgICBjb25zdCBzaGVldCA9IGNlbGxsaXN0LnNoZWV0O1xuXG4gICAgY29uc3QgW2JlZyxlbmRdID0gY2VsbGxpc3QucGxhZ2VfbmFtZSEuc3BsaXQoJzonKS5tYXAoIGUgPT4gc2hlZXQucmVmMnBvcyhlKSApOyAvLyBwbGFnZSBjYW4ndCBiZSB1bmRlZmluZWRcblxuICAgIGxldCByb3dzID0gZW5kWzBdIC0gYmVnWzBdICsgMTtcbiAgICBsZXQgY29scyA9IGVuZFsxXSAtIGJlZ1sxXSArIDE7XG5cbiAgICBsZXQgZm9ybWF0OiBSZWNvcmQ8c3RyaW5nLGFueT4gPSB7XG4gICAgICAgIHNwYW46IFsgcm93cywgY29scyBdXG4gICAgfVxuXG4gICAgaWYoIGlzX2FsaWduICkge1xuICAgICAgICBmb3JtYXQudmFsaWduX21pZGRsZSA9IHRydWU7XG4gICAgICAgIGZvcm1hdC5hbGlnbl9jZW50ZXIgID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzaGVldC5nZXRSYW5nZShiZWcpLmZvcm1hdChmb3JtYXQpO1xufVxuXG5mdW5jdGlvbiB1bm1lcmdlKGNlbGxsaXN0OiBDZWxsTGlzdCkge1xuXG4gICAgY2VsbGxpc3QuZm9ybWF0KHtcbiAgICAgICAgc3BhbjogWyAxLCAxIF1cbiAgICB9KTsgLy8gdW5tZXJnZS4uLlxufVxuXG5mdW5jdGlvbiByZXRyYWl0KGNlbGxzOiBDZWxsTGlzdCwgZGVsdGFfaW5kZW50OiBudW1iZXIpIHtcbiAgICBcbiAgICBmb3IobGV0IGNlbGwgb2YgY2VsbHMuY2VsbHMpIHtcblxuICAgICAgICBjb25zdCBmb3JtYXQgPSBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxsKTtcbiAgICAgICAgbGV0IG5ld19mb3JtYXQ6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcbiAgICAgICAgaWYoICEgZm9ybWF0Lmhhc1Byb3BlcnR5KFwiYWxpZ25fcmlnaHRcIikgJiYgISBmb3JtYXQuaGFzUHJvcGVydHkoXCJhbGlnbl9sZWZ0XCIpIClcbiAgICAgICAgICAgIG5ld19mb3JtYXQuYWxpZ25fbGVmdCA9IHRydWU7XG5cbiAgICAgICAgbmV3X2Zvcm1hdC5pbmRlbnQgPSArKGZvcm1hdC5nZXRQcm9wZXJ0eShcImluZGVudFwiKSA/PyAwKSArIGRlbHRhX2luZGVudDtcbiAgICAgICAgXG4gICAgICAgIGlmKCBuZXdfZm9ybWF0LmluZGVudCA8IDApXG4gICAgICAgICAgICBuZXdfZm9ybWF0LmluZGVudCA9IDA7XG5cbiAgICAgICAgY2VsbHMuZm9ybWF0KG5ld19mb3JtYXQpOyAgICAgXG4gICAgfVxufVxuXG5mdW5jdGlvbiBwcmVjaXNpb24oY2VsbHM6IENlbGxMaXN0LCBkZWx0YV9wcmVjOiBudW1iZXIpIHtcblxuICAgIGxldCBwcmVjaXNpb24gPSB1bmRlZmluZWQ7XG4gICAgZm9yKGxldCBjZWxsIG9mIGNlbGxzLmNlbGxzKSB7XG4gICAgICAgIGNvbnN0IHByZWMgPSArKEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGwpLmdldFByb3BlcnR5KFwicHJlY2lzaW9uXCIpID8/IDIpO1xuICAgICAgICBpZiggcHJlY2lzaW9uID09PSB1bmRlZmluZWQgfHwgcHJlYyA8IHByZWNpc2lvbiApXG4gICAgICAgICAgICBwcmVjaXNpb24gPSBwcmVjO1xuICAgIH1cblxuICAgIHByZWNpc2lvbiA/Pz0gMjtcbiAgICBwcmVjaXNpb24gKz0gZGVsdGFfcHJlYztcbiAgICBpZihwcmVjaXNpb24gPCAwKVxuICAgICAgICBwcmVjaXNpb24gPSAwO1xuXG4gICAgY2VsbHMuZm9ybWF0KHtwcmVjaXNpb259KTtcbn1cblxuY29uc3QgZmN0czogUmVjb3JkPHN0cmluZywgeyBhY3Rpb246IChjZWxsczogQ2VsbExpc3QpID0+dm9pZCwgZW5hYmxlZD86IChjZWxsczogQ2VsbExpc3QpID0+IGJvb2xlYW4gfT4gPSB7XG4gICAgXCJmb3JtYXRfemVyb19wMVwiOiB7XG4gICAgICAgIGFjdGlvbjogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG4gICAgICAgICAgICBwcmVjaXNpb24oY2VsbHMsICsxKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJmb3JtYXRfemVyb19tMVwiOiB7XG4gICAgICAgIGFjdGlvbjogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG4gICAgICAgICAgICBwcmVjaXNpb24oY2VsbHMsIC0xKTtcbiAgICAgICAgfVxuICAgIH0sXCJmb3JtYXRfcG91cmNlbnRcIjoge1xuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuXG4gICAgICAgICAgICBpZiggRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHMpLmdldFByb3BlcnR5KCdmb3JtYXQnKSA9PT0gRm9ybWF0cy5wb3VyY2VudCApIHtcbiAgICAgICAgICAgICAgICBjZWxscy5mb3JtYXQoe2Zvcm1hdDogbnVsbH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNlbGxzLmZvcm1hdChGb3JtYXRzLnBvdXJjZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5hYmxlZDogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHMpLmdldFByb3BlcnR5KCdmb3JtYXQnKSA9PT0gRm9ybWF0cy5wb3VyY2VudDtcbiAgICAgICAgfVxuICAgIH0sXCJmb3JtYXRfbmJcIjoge1xuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuXG4gICAgICAgICAgICBpZiggRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHMpLmdldFByb3BlcnR5KCdmb3JtYXQnKSA9PT0gRm9ybWF0cy5udW1iZXIgKSB7XG4gICAgICAgICAgICAgICAgY2VsbHMuZm9ybWF0KHtmb3JtYXQ6IG51bGx9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjZWxscy5mb3JtYXQoRm9ybWF0cy5udW1iZXIpO1xuICAgICAgICB9LFxuICAgICAgICBlbmFibGVkOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcbiAgICAgICAgICAgIHJldHVybiBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxscykuZ2V0UHJvcGVydHkoJ2Zvcm1hdCcpID09PSBGb3JtYXRzLm51bWJlcjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJmb3JtYXRfbW9ubmFpZVwiOiB7XG4gICAgICAgIGFjdGlvbjogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG5cbiAgICAgICAgICAgIGlmKCBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxscykuZ2V0UHJvcGVydHkoJ2Zvcm1hdCcpID09PSBGb3JtYXRzLmV1cm9zICkge1xuICAgICAgICAgICAgICAgIGNlbGxzLmZvcm1hdCh7Zm9ybWF0OiBudWxsfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2VsbHMuZm9ybWF0KEZvcm1hdHMuZXVyb3MpO1xuICAgICAgICB9LFxuICAgICAgICBlbmFibGVkOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcbiAgICAgICAgICAgIHJldHVybiBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxscykuZ2V0UHJvcGVydHkoJ2Zvcm1hdCcpID09PSBGb3JtYXRzLmV1cm9zO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcInJldHJhaXRfbTFcIjoge1xuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuICAgICAgICAgICAgcmV0cmFpdChjZWxscywgLTEpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcInJldHJhaXRfcDFcIjogeyAvLyBUT0RPOiBtMS4uLlxuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuICAgICAgICAgICAgcmV0cmFpdChjZWxscywgKzEpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcImJvcmRlclwiOiB7XG4gICAgICAgIGFjdGlvbjogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG4gICAgICAgICAgICBjZWxscy5mb3JtYXQoe1xuICAgICAgICAgICAgICAgIGJvcmRlcl90b3A6IHRydWUsXG4gICAgICAgICAgICAgICAgYm9yZGVyX2JvdHRvbTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBib3JkZXJfbGVmdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBib3JkZXJfcmlnaHQ6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcInVubWVyZ2VcIjoge1xuICAgICAgICBhY3Rpb246IHVubWVyZ2VcbiAgICB9LFxuICAgIFwibWVyZ2VcIjoge1xuICAgICAgICBhY3Rpb246IG1lcmdlXG4gICAgfSxcbiAgICBcIm1lcmdlX2NlbnRlclwiOiB7XG4gICAgICAgIGFjdGlvbjogZnVuY3Rpb24oY2VsbGxpc3Q6IENlbGxMaXN0KSB7XG5cbiAgICAgICAgICAgIGxldCB1bm1lcmdlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCBzaGVldCA9IGNlbGxsaXN0LnNoZWV0O1xuXG4gICAgICAgICAgICBmb3IobGV0IGNlbGwgb2YgY2VsbGxpc3QuY2VsbHMpXG4gICAgICAgICAgICAgICAgaWYoIEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGwpLmhhc1Byb3BlcnR5KFwic3BhblwiKSApIHtcbiAgICAgICAgICAgICAgICAgICAgdW5tZXJnZSggbmV3IENlbGxMaXN0KHNoZWV0LCBbY2VsbF0pICk7XG4gICAgICAgICAgICAgICAgICAgIHVubWVyZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHVubWVyZ2VkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgbWVyZ2UoY2VsbGxpc3QsIHRydWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbmFibGVkOiBmdW5jdGlvbihjZWxsbGlzdDogQ2VsbExpc3QpIHtcblxuICAgICAgICAgICAgZm9yKGxldCBjZWxsIG9mIGNlbGxsaXN0LmNlbGxzKVxuICAgICAgICAgICAgICAgIGlmKCBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxsKS5oYXNQcm9wZXJ0eShcInNwYW5cIikgKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBjc3MgPSBgXG4gICAgOmhvc3Qge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xuXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogMS41ZW07XG4gICAgfVxuXG4gICAgOmhvc3QgLnZiYXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYmFiYWI7XG4gICAgICAgIGhlaWdodDogMWVtO1xuICAgIH1cblxuICAgIDpob3N0IHNlbGVjdCB7XG4gICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuYFxuXG5jb25zdCBpdGVtY3NzID0gYFxuXG4gICAgOmhvc3Qge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgOmhvc3QoW2Rpc2FibGVkXSkge1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cblxuICAgIDpob3N0KFt2YWx1ZV0pIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgICB9XG5cbiAgICA6aG9zdCwgOmhvc3QgPiBkaXYge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICA6aG9zdCB7XG4gICAgICAgIHBhZGRpbmc6IDFweDtcbiAgICB9XG5cbiAgICA6aG9zdCA+IGRpdiB7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IGNhbGMoIDEuMmVtIC0gMXB4ICk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtMXB4O1xuICAgICAgICByaWdodDogLTFweDtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IGNhbGMoICggMS4yZW0gLSAxcHggLSAycHggKSAvIDIgKTtcbiAgICAgICAgICAgIHJpZ2h0OiAxcHg7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgd2lkdGg6IDA7IFxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgLS1zaXplOiA0cHg7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogdmFyKC0tc2l6ZSkgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IHZhcigtLXNpemUpIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBib3JkZXItdG9wOiB2YXIoLS1zaXplKSBzb2xpZCBibGFjaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIDpob3N0KDpob3Zlcjpub3QoLmVuYWJsZWQpKSwgOmhvc3QoOmhvdmVyOm5vdCguZW5hYmxlZCkpID4gZGl2IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk2OTY5NjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIH1cblxuICAgIDpob3N0KC5lbmFibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiNmI2YjY7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjliOWI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB9XG5gO1xuXG5leHBvcnQgY2xhc3MgQ2FsY1Rvb2xiYXJJdGVtIGV4dGVuZHMgTElTUyh7XG4gICAgY3NzOiBpdGVtY3NzXG59KSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb250ZW50LnNyYyA9IGAuLi8uLi8uLi8uLi9hc3NldHMvdGFibGV1ci9pbWcvdG9vbGJhci8ke3RoaXMuaG9zdC5nZXRBdHRyaWJ1dGUoJ25hbWUnKX0ucG5nYDtcblxuICAgICAgICBpZiggISB0aGlzLmhvc3QuaGFzQXR0cmlidXRlKCd2YWx1ZScpICkge1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCggY29udGVudCApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGxldCBjb2xvcl9waWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFt0eXBlPVwiY29sb3JcIl0nKTtcbiAgICAgICAgICAgIGlmKCBjb2xvcl9waWNrZXIgPT09IG51bGwgKSB7XG4gICAgICAgICAgICAgICAgY29sb3JfcGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBjb2xvcl9waWNrZXIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNvbG9yXCIpO1xuICAgICAgICAgICAgICAgIGNvbG9yX3BpY2tlci5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgY29sb3JfcGlja2VyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjYW5jZWwnKSk7XG5cbiAgICAgICAgICAgIGxldCBjYW5jZWwgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbG9yX3BpY2tlci5hZGRFdmVudExpc3RlbmVyKCdjYW5jZWwnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FuY2VsID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG5cbiAgICAgICAgICAgIGNvbG9yX3BpY2tlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXYpID0+IHtcbiAgICAgICAgICAgICAgICBpZiggY2FuY2VsIClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5ob3N0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjb2xvcl9waWNrZXIudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJjbGlja1wiLCB7YnViYmxlczogdHJ1ZX0pICk7XG5cbiAgICAgICAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNvbG9yX3BpY2tlcik7XG4gICAgICAgICAgICBjb2xvcl9waWNrZXIuY2xpY2soKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCggY29udGVudCwgc3BhbiApO1xuICAgIH1cbn1cblxuTElTUy5kZWZpbmUoJ2NhbGMtdG9vbGJhci1pdGVtJywgQ2FsY1Rvb2xiYXJJdGVtKTtcblxuZXhwb3J0IGNsYXNzIENhbGNUb29sYmFyIGV4dGVuZHMgTElTUyh7XG4gICAgY29udGVudCxcbiAgICBjc3Ncbn0pIHtcblxuICAgICNidG5zOiBSZWNvcmQ8c3RyaW5nLCBIVE1MRWxlbWVudD4gPSB7fTtcblxuICAgIGRpc2FibGVBbGxFeGNlcHQoLi4uZXhjZXB0aW9uOiBzdHJpbmdbXSkge1xuICAgICAgICBmb3IobGV0IGJ0bl9uYW1lIGluIHRoaXMuI2J0bnMpXG4gICAgICAgICAgICBpZiggISBleGNlcHRpb24uaW5jbHVkZXMoYnRuX25hbWUpIClcbiAgICAgICAgICAgICAgICB0aGlzLiNidG5zW2J0bl9uYW1lXS50b2dnbGVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIFxuICAgICAgICBpZiggISBleGNlcHRpb24uaW5jbHVkZXMoXCJmb250X3NpemVcIikgKVxuICAgICAgICAgICAgdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNlbGVjdEVsZW1lbnQ+KCcuZm9udF9zaXplJykhLnRvZ2dsZUF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBsZXQgZm9udF9zaXplcyA9IFtcbiAgICAgICAgICAgIDYsIDcsIDgsIDksIDEwLCAxMC41LCAxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxOCwgMjAsIDIxLCAyMiwgMjQsIDI2LCAyOCwgMzIsIDM2LCA0MCwgNDIsIDQ0LCA0OCwgNTQsIDYwLCA2NiwgNzIsIDgwLCA4OCwgOTZcbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBidG5zID0gdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCdjYWxjLXRvb2xiYXItaXRlbScpO1xuICAgICAgICBmb3IobGV0IGJ0biBvZiBidG5zKVxuICAgICAgICAgICAgdGhpcy4jYnRuc1tidG4uZ2V0QXR0cmlidXRlKCduYW1lJykhXSA9IGJ0bjtcblxuICAgICAgICBjb25zdCBmb250X3NpemVzX3NlbGVjdCA9IHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yPEhUTUxTZWxlY3RFbGVtZW50PignLmZvbnRfc2l6ZScpITtcbiAgICAgICAgZm9yKGxldCBmb250X3NpemUgb2YgZm9udF9zaXplcykge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gbmV3IE9wdGlvbihgJHtmb250X3NpemUudG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgJywnKX0gcHRgLCBgJHtmb250X3NpemV9cHRgKTtcbiAgICAgICAgICAgIGZvbnRfc2l6ZXNfc2VsZWN0LmFwcGVuZChvcHRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGVsZW0gPSBldi50YXJnZXQhIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgaWYoIGVsZW0udGFnTmFtZSAhPT0gJ0NBTEMtVE9PTEJBUi1JVEVNJylcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGNvbnN0IG4gPSBlbGVtLmdldEF0dHJpYnV0ZSgnbmFtZScpISBhcyBrZXlvZiB0eXBlb2YgZmN0cztcbiAgICAgICAgICAgIGlmKCBlbGVtLmdldEF0dHJpYnV0ZSgndHlwZScpID09PSAnZmN0Jykge1xuXG4gICAgICAgICAgICAgICAgZmN0c1tuXS5hY3Rpb24odGhpcy4jc2hlZXQuc2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLiN1cGRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAgZWxlbS5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGVsZW0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlbGVtLmNsYXNzTGlzdC50b2dnbGUoJ2VuYWJsZWQnKTtcblxuICAgICAgICAgICAgbGV0IGZvcm1hdCA9IG5ldyBGb3JtYXQoe1tuXTogdmFsdWUgfSk7XG4gICAgICAgICAgICBmb3JtYXQuYXBwbHlUbyggdGhpcy4jc2hlZXQuc2VsZWN0aW9uICk7XG4gICAgICAgICAgICB0aGlzLiN1cGRhdGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9udF9zaXplc19zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIC8vVE9ETy4uLlxuICAgICAgICAgICAgbGV0IGZvcm1hdCA9IG5ldyBGb3JtYXQoe2ZvbnRfc2l6ZTogZm9udF9zaXplc19zZWxlY3QudmFsdWV9KTtcbiAgICAgICAgICAgIGZvcm1hdC5hcHBseVRvKCB0aGlzLiNzaGVldC5zZWxlY3Rpb24gKTtcbiAgICAgICAgICAgIHRoaXMuI3VwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAjc2hlZXQhOkNhbGNTaGVldDtcblxuXG4gICAgI3VwZGF0ZSgpIHtcblxuICAgICAgICBpZiggdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmNlbGxzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBjb25zdCBmb3JtYXQgPSBGb3JtYXQuZXh0cmFjdEZvcm1hdCh0aGlzLiNzaGVldC5zZWxlY3Rpb24pO1xuXG4gICAgICAgIGZvcihsZXQgbmFtZSBpbiB0aGlzLiNidG5zKSB7XG5cbiAgICAgICAgICAgIGxldCBlbmFibGVkID0gZm9ybWF0LmdldFByb3BlcnR5KG5hbWUpID09PSB0cnVlO1xuICAgICAgICAgICAgaWYobmFtZSBpbiBmY3RzKVxuICAgICAgICAgICAgICAgIGVuYWJsZWQgPSBmY3RzW25hbWUgYXMga2V5b2YgdHlwZW9mIGZjdHNdLmVuYWJsZWQ/Lih0aGlzLiNzaGVldC5zZWxlY3Rpb24pID8/IGZhbHNlO1xuXG4gICAgICAgICAgICB0aGlzLiNidG5zW25hbWVdLmNsYXNzTGlzdC50b2dnbGUoJ2VuYWJsZWQnLCBlbmFibGVkIClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vVE9ETy4uLlxuICAgICAgICBjb25zdCBmb250X3NpemVzX3NlbGVjdCA9IHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yPEhUTUxTZWxlY3RFbGVtZW50PignLmZvbnRfc2l6ZScpITtcbiAgICAgICAgZm9udF9zaXplc19zZWxlY3QudmFsdWUgPSBmb3JtYXQuZ2V0UHJvcGVydHkoJ2ZvbnRfc2l6ZScpO1xuICAgICAgICAvL1RPRE86IHVwZGF0ZS4uLlxuICAgIH1cblxuICAgIHN5bmNUbyhzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcblxuXG4gICAgICAgIHNoZWV0LnNlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXYpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI3VwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4jdXBkYXRlKCk7XG5cbiAgICB9XG5cbn1cblxuTElTUy5kZWZpbmUoJ2NhbGMtdG9vbGJhcicsIENhbGNUb29sYmFyKTsiLCJleHBvcnQgZGVmYXVsdCBbXG4gICAge1xuICAgICAgICBuYW1lIDogXCJSIDEtMDEgVGFibGV1ciBldCBSZXBvcnRpbmdcIixcbiAgICAgICAgc25hbWU6IFwiUjEtMDEgVGFibGV1clwiLFxuICAgICAgICBwYXRoIDogXCJSMS0wMVwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ01cIixcbiAgICAgICAgICAgICAgICBwYXRoOiBcIkNNXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgXCJDTTFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDTTJcIlxuICAgICAgICAgICAgICAgIF1cblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlRQXCIsXG4gICAgICAgICAgICAgICAgcGF0aDogXCJUUFwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiVFAxXCJcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiUiAxLTAyIEJhc2VzIGRlIERvbm7DqWVzIFJlbGF0aW9ubmVsbGVzIDFcIixcbiAgICAgICAgc25hbWU6IFwiUjEtMDIgQkRSMVwiLFxuICAgICAgICBwYXRoIDogXCJSMS0wMlwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgXCJDTVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiVFBcIiAsXG4gICAgICAgICAgICAgICAgcGF0aCA6IFwiVFBcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIlRQMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQMlwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQM1wiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQNFwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQNVwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IHJvb3RfcGF0aCA9IFtcImxvY2FsaG9zdFwiLCBcIjEyNy4wLjAuMVwiXS5pbmNsdWRlcyhsb2NhdGlvbi5ob3N0bmFtZSkgPyBcIi9kaXN0L2Rldi9wYWdlcy9cIiA6IFwiL0NvdXJzL2Rpc3QvZGV2L3BhZ2VzL1wiOyIsIlxuaW1wb3J0IHBhZ2VzLCB7cm9vdF9wYXRofSBmcm9tIFwiLi9jb250ZW50XCI7XG5cbi8qXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JlcHJpbnQnLCAoKSA9PiB7XG4gIC8vLi4uXG59KTtcbiovXG5cbi8vVE9ETzogbGlua3MuLi5cbmNvbnN0IG1haW4gICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpITtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIikhO1xuXG5jb25zdCB0aXRsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcImgxLCBoMiwgaDMsIGg0XCIpO1xuXG50eXBlIE5vZGUgPSB7XG4gICAgaHRtbCAgICA6IEhUTUxFbGVtZW50LFxuICAgIGxldmVsICAgOiBudW1iZXIsXG4gICAgcGFyZW50ICA6IG51bGx8Tm9kZSxcbiAgICBjaGlsZHJlbjogTm9kZVtdXG59O1xuXG5jb25zdCBodHJlZTogTm9kZSA9IHtcbiAgICBodG1sICAgIDogbWFpbixcbiAgICBsZXZlbCAgIDogMCxcbiAgICBwYXJlbnQgIDogbnVsbCxcbiAgICBjaGlsZHJlbjogW10sXG59O1xubGV0IGh0cmVlX2N1cnNvciA9IGh0cmVlO1xuZm9yKGxldCB0aXRsZSBvZiB0aXRsZXMpIHtcbiAgICBjb25zdCBsZXZlbCA9ICt0aXRsZS50YWdOYW1lLnNsaWNlKDEpO1xuICAgIFxuICAgIHdoaWxlKCBsZXZlbCA8PSBodHJlZV9jdXJzb3IubGV2ZWwgKVxuICAgICAgICBodHJlZV9jdXJzb3IgPSBodHJlZV9jdXJzb3IucGFyZW50ITtcblxuICAgIGNvbnN0IGVsZW06IE5vZGUgPSB7XG4gICAgICAgIGh0bWw6IHRpdGxlLFxuICAgICAgICBsZXZlbCxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICBwYXJlbnQ6IGh0cmVlX2N1cnNvclxuICAgIH07XG5cblxuICAgIGh0cmVlX2N1cnNvci5jaGlsZHJlbi5wdXNoKGVsZW0pO1xuXG4gICAgaHRyZWVfY3Vyc29yID0gZWxlbTtcbn1cblxuZnVuY3Rpb24gc2VhcmNoQ3VySGVhZGVyKGh0cmVlOiBOb2RlLCBwb3NpdGlvbjogbnVtYmVyKTogbnVsbCB8IE5vZGUge1xuXG4gICAgY29uc3QgaGVhZGVycyA9IGh0cmVlLmNoaWxkcmVuO1xuXG4gICAgZm9yKGxldCBpID0gaGVhZGVycy5sZW5ndGggLSAxOyBpID49IDA7IC0taSlcbiAgICAgICAgaWYoIGhlYWRlcnNbaV0uaHRtbC5vZmZzZXRUb3AgPD0gcG9zaXRpb24gKyAzMiApXG4gICAgICAgICAgICByZXR1cm4gc2VhcmNoQ3VySGVhZGVyKGhlYWRlcnNbaV0sIHBvc2l0aW9uKSA/PyBoZWFkZXJzW2ldO1xuXG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmNvbnN0IGhpZCA9IFtcbiAgICBbXSxcbiAgICBbXCJJXCIsIFwiSUlcIiwgXCJJSUlcIiwgXCJJVlwiXSxcbiAgICBbXCIxXCIsIFwiMlwiLFwiM1wiLFwiNVwiLFwiNlwiLFwiN1wiLFwiOFwiLFwiOVwiXSxcbiAgICBbXCJhXCIsIFwiYlwiLFwiY1wiLFwiZFwiLFwiZVwiLFwiZlwiLFwiZ1wiLFwiaFwiXSxcbl1cblxuZnVuY3Rpb24gZ2V0VGl0bGVQcmVmaXgoczogTm9kZSkge1xuXG4gICAgaWYoIHMubGV2ZWwgPj0gaGlkLmxlbmd0aCApXG4gICAgICAgIHJldHVybiBcIlwiO1xuXG4gICAgY29uc3QgaWR4ID0gcy5wYXJlbnQhLmNoaWxkcmVuLmluZGV4T2Yocyk7XG5cbiAgICBjb25zdCBudW0gPSBoaWRbcy5sZXZlbF1baWR4XTtcblxuICAgIHJldHVybiBgJHtudW19LiBgO1xufVxuXG5mdW5jdGlvbiBidWlsZE1lbnUobm9kZXM6IE5vZGVbXSkge1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICAgIG1lbnUuYXBwZW5kKCAuLi4gbm9kZXMubWFwKCAocyxpZHgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBpdGVtLnRleHRDb250ZW50PSBgJHtnZXRUaXRsZVByZWZpeChzKX0ke3MuaHRtbC50ZXh0Q29udGVudH1gO1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgYCMke3MuaHRtbC5pZH1gKTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSkgKTtcblxuICAgIHJldHVybiBtZW51O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVIZWFkZXIoKSB7XG5cbiAgICBjb25zdCBsYXN0ID0gc2VhcmNoQ3VySGVhZGVyKCBodHJlZSwgbWFpbi5zY3JvbGxUb3ApITtcblxuICAgIGxldCBoZWFkZXJzID0gW107XG4gICAgbGV0IGN1cnNvciAgPSBsYXN0O1xuXG4gICAgd2hpbGUoY3Vyc29yLmh0bWwgIT09IG1haW4pIHtcbiAgICAgICAgaGVhZGVycy5wdXNoKGN1cnNvcik7XG4gICAgICAgIGN1cnNvciA9IGN1cnNvci5wYXJlbnQhO1xuICAgIH1cblxuICAgIGNvbnN0IGh0bWwgPSBoZWFkZXJzLnJldmVyc2UoKS5tYXAoIChobm9kZSxpKSA9PiB7XG5cbiAgICAgICAgY29uc3QgaCA9IGhub2RlLmh0bWw7XG4gICAgICAgIGNvbnN0IGhfaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgbGluay50ZXh0Q29udGVudCA9IGAke2dldFRpdGxlUHJlZml4KGhub2RlKX0ke2gudGV4dENvbnRlbnR9YDtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgIyR7aC5pZH1gKTtcblxuICAgICAgICBjb25zdCBtZW51ID0gYnVpbGRNZW51KGhub2RlLnBhcmVudCEuY2hpbGRyZW4pO1xuICAgICAgICBoX2h0bWwuYXBwZW5kKGxpbmssIG1lbnUpO1xuXG4gICAgICAgIHJldHVybiBoX2h0bWw7XG4gICAgfSk7XG5cbiAgICBpZiggbGFzdC5jaGlsZHJlbi5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgZW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgICAgICBlbXB0eS5hcHBlbmQoIGJ1aWxkTWVudShsYXN0LmNoaWxkcmVuKSApO1xuXG4gICAgICAgIGh0bWwucHVzaChlbXB0eSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlX3BhZ2VfaHJlZihwYXRocHJlZml4OiBzdHJpbmcsIHBhdGg6IHN0cmluZywgZGVzYzogYW55KSB7XG5cbiAgICAgICAgbGV0IGhyZWYgPSBgJHtwYXRocHJlZml4fSR7cGF0aH0vYDtcblxuICAgICAgICB3aGlsZShkZXNjLmNoaWxkcmVuPy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRlc2MgPSBkZXNjLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgaHJlZiArPSBgJHtkZXNjLnBhdGggPz8gZGVzY30vYDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBocmVmO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VfcGFnZV9tZW51KHBhdGhwcmVmaXg6IHN0cmluZywgcGF0aDogc3RyaW5nLCBwYWdlczogYW55KSB7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBwYWdlcy5maW5kKCAocGFnZTogYW55KSA9PiBwYWdlID09PSBwYXRoIHx8IHBhZ2UucGF0aCA9PT0gcGF0aCApITtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgbGluay50ZXh0Q29udGVudCA9IGRlc2Muc25hbWUgPz8gZGVzYy5uYW1lID8/IGRlc2M7XG4gICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIG1ha2VfcGFnZV9ocmVmKHBhdGhwcmVmaXgsIHBhdGgsIGRlc2MpICk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gICAgXG4gICAgICAgICAgICBtZW51LmFwcGVuZCggLi4uIHBhZ2VzLm1hcCggKHBhZ2U6YW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQ9IHBhZ2UubmFtZSA/PyBwYWdlO1xuICAgICAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBtYWtlX3BhZ2VfaHJlZihwYXRocHJlZml4LCBwYWdlLnBhdGg/P3BhZ2UsIHBhZ2UpICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9KSApO1xuICAgIFxuICAgICAgICAgICAgaHRtbC5hcHBlbmQobGluaywgbWVudSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gICAgXG4gICAgbGV0IGN1cnBhZ2UgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc2xpY2Uocm9vdF9wYXRoLmxlbmd0aCkuc3BsaXQoJy8nKTtcblxuICAgIGNvbnN0IG1vZHVsZV9odG1sID0gbWFrZV9wYWdlX21lbnUocm9vdF9wYXRoLCBjdXJwYWdlWzBdLCBwYWdlcyk7XG5cbiAgICBjb25zdCBkZXNjID0gcGFnZXMuZmluZCggKHBhZ2U6IGFueSkgPT4gcGFnZS5wYXRoID09PSBjdXJwYWdlWzBdICkhO1xuICAgIGNvbnN0IHR5cGVfaHRtbCAgID0gbWFrZV9wYWdlX21lbnUocm9vdF9wYXRoICsgY3VycGFnZVswXSArIFwiL1wiLCBjdXJwYWdlWzFdLCBkZXNjLmNoaWxkcmVuKTtcblxuICAgIGNvbnN0IGRlc2NfdHlwZSA9IGRlc2MuY2hpbGRyZW4uZmluZCggKHBhZ2U6IGFueSkgPT4gKHBhZ2U/LnBhdGggPz8gcGFnZSkgPT09IGN1cnBhZ2VbMV0gKSE7XG4gICAgaWYoIHR5cGVvZiBkZXNjX3R5cGUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgLy8gdGl0bGUgbnVtXG4gICAgICAgIGNvbnN0IGRlc2MyX2lkeCA9IGRlc2NfdHlwZS5jaGlsZHJlbi5maW5kSW5kZXgoIChwYWdlOiBhbnkpID0+IHBhZ2U/LnBhdGggPz8gcGFnZSA9PT0gY3VycGFnZVsyXSApITtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taGVhZGVyX3N0YXJ0X2lkXCIsIGAke2Rlc2MyX2lkeH1gKTtcbiAgICAgICAgLy8gbWVudVxuICAgICAgICBjb25zdCBzZXNzaW9uX2h0bWwgICA9IG1ha2VfcGFnZV9tZW51KHJvb3RfcGF0aCArIGN1cnBhZ2VbMF0gKyBcIi9cIisgY3VycGFnZVsxXSArIFwiL1wiLCBjdXJwYWdlWzJdLCBkZXNjX3R5cGUuY2hpbGRyZW4pO1xuICAgICAgICBodG1sWzBdID0gc2Vzc2lvbl9odG1sO1xuICAgIH1cblxuICAgIGhlYWRlci5yZXBsYWNlQ2hpbGRyZW4obW9kdWxlX2h0bWwsIHR5cGVfaHRtbCwgLi4uaHRtbCk7XG59XG5cbm1haW4uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlSGVhZGVyKTtcbnVwZGF0ZUhlYWRlcigpOyIsIi8vaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDk0MTQzL2NyZWF0aW5nLWEtbmV3LWRvbS1lbGVtZW50LWZyb20tYW4taHRtbC1zdHJpbmctdXNpbmctYnVpbHQtaW4tZG9tLW1ldGhvZHMtb3ItcHJvXG5leHBvcnQgZnVuY3Rpb24gc3RyMmh0bWw8VCBleHRlbmRzIEhUTUxFbGVtZW50PihodG1sOiBzdHJpbmcpOiBUIHtcbiAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIGh0bWwgPSBodG1sLnRyaW0oKTsgLy8gTmV2ZXIgcmV0dXJuIGEgdGV4dCBub2RlIG9mIHdoaXRlc3BhY2UgYXMgdGhlIHJlc3VsdFxuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQhIGFzIFQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHIyREYoaHRtbDogc3RyaW5nKTogRG9jdW1lbnRGcmFnbWVudCB7XG4gICAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICBodG1sID0gaHRtbC50cmltKCk7IC8vIE5ldmVyIHJldHVybiBhIHRleHQgbm9kZSBvZiB3aGl0ZXNwYWNlIGFzIHRoZSByZXN1bHRcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJ2YXIgd2VicGFja1F1ZXVlcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgcXVldWVzXCIpIDogXCJfX3dlYnBhY2tfcXVldWVzX19cIjtcbnZhciB3ZWJwYWNrRXhwb3J0cyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgZXhwb3J0c1wiKSA6IFwiX193ZWJwYWNrX2V4cG9ydHNfX1wiO1xudmFyIHdlYnBhY2tFcnJvciA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgZXJyb3JcIikgOiBcIl9fd2VicGFja19lcnJvcl9fXCI7XG52YXIgcmVzb2x2ZVF1ZXVlID0gKHF1ZXVlKSA9PiB7XG5cdGlmKHF1ZXVlICYmIHF1ZXVlLmQgPCAxKSB7XG5cdFx0cXVldWUuZCA9IDE7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0pKTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSA/IGZuLnIrKyA6IGZuKCkpKTtcblx0fVxufVxudmFyIHdyYXBEZXBzID0gKGRlcHMpID0+IChkZXBzLm1hcCgoZGVwKSA9PiB7XG5cdGlmKGRlcCAhPT0gbnVsbCAmJiB0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKSB7XG5cdFx0aWYoZGVwW3dlYnBhY2tRdWV1ZXNdKSByZXR1cm4gZGVwO1xuXHRcdGlmKGRlcC50aGVuKSB7XG5cdFx0XHR2YXIgcXVldWUgPSBbXTtcblx0XHRcdHF1ZXVlLmQgPSAwO1xuXHRcdFx0ZGVwLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFeHBvcnRzXSA9IHI7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9LCAoZSkgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0Vycm9yXSA9IGU7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9KTtcblx0XHRcdHZhciBvYmogPSB7fTtcblx0XHRcdG9ialt3ZWJwYWNrUXVldWVzXSA9IChmbikgPT4gKGZuKHF1ZXVlKSk7XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0fVxuXHR2YXIgcmV0ID0ge307XG5cdHJldFt3ZWJwYWNrUXVldWVzXSA9IHggPT4ge307XG5cdHJldFt3ZWJwYWNrRXhwb3J0c10gPSBkZXA7XG5cdHJldHVybiByZXQ7XG59KSk7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmEgPSAobW9kdWxlLCBib2R5LCBoYXNBd2FpdCkgPT4ge1xuXHR2YXIgcXVldWU7XG5cdGhhc0F3YWl0ICYmICgocXVldWUgPSBbXSkuZCA9IC0xKTtcblx0dmFyIGRlcFF1ZXVlcyA9IG5ldyBTZXQoKTtcblx0dmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcblx0dmFyIGN1cnJlbnREZXBzO1xuXHR2YXIgb3V0ZXJSZXNvbHZlO1xuXHR2YXIgcmVqZWN0O1xuXHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWopID0+IHtcblx0XHRyZWplY3QgPSByZWo7XG5cdFx0b3V0ZXJSZXNvbHZlID0gcmVzb2x2ZTtcblx0fSk7XG5cdHByb21pc2Vbd2VicGFja0V4cG9ydHNdID0gZXhwb3J0cztcblx0cHJvbWlzZVt3ZWJwYWNrUXVldWVzXSA9IChmbikgPT4gKHF1ZXVlICYmIGZuKHF1ZXVlKSwgZGVwUXVldWVzLmZvckVhY2goZm4pLCBwcm9taXNlW1wiY2F0Y2hcIl0oeCA9PiB7fSkpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IHByb21pc2U7XG5cdGJvZHkoKGRlcHMpID0+IHtcblx0XHRjdXJyZW50RGVwcyA9IHdyYXBEZXBzKGRlcHMpO1xuXHRcdHZhciBmbjtcblx0XHR2YXIgZ2V0UmVzdWx0ID0gKCkgPT4gKGN1cnJlbnREZXBzLm1hcCgoZCkgPT4ge1xuXHRcdFx0aWYoZFt3ZWJwYWNrRXJyb3JdKSB0aHJvdyBkW3dlYnBhY2tFcnJvcl07XG5cdFx0XHRyZXR1cm4gZFt3ZWJwYWNrRXhwb3J0c107XG5cdFx0fSkpXG5cdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdFx0Zm4gPSAoKSA9PiAocmVzb2x2ZShnZXRSZXN1bHQpKTtcblx0XHRcdGZuLnIgPSAwO1xuXHRcdFx0dmFyIGZuUXVldWUgPSAocSkgPT4gKHEgIT09IHF1ZXVlICYmICFkZXBRdWV1ZXMuaGFzKHEpICYmIChkZXBRdWV1ZXMuYWRkKHEpLCBxICYmICFxLmQgJiYgKGZuLnIrKywgcS5wdXNoKGZuKSkpKTtcblx0XHRcdGN1cnJlbnREZXBzLm1hcCgoZGVwKSA9PiAoZGVwW3dlYnBhY2tRdWV1ZXNdKGZuUXVldWUpKSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGZuLnIgPyBwcm9taXNlIDogZ2V0UmVzdWx0KCk7XG5cdH0sIChlcnIpID0+ICgoZXJyID8gcmVqZWN0KHByb21pc2Vbd2VicGFja0Vycm9yXSA9IGVycikgOiBvdXRlclJlc29sdmUoZXhwb3J0cykpLCByZXNvbHZlUXVldWUocXVldWUpKSk7XG5cdHF1ZXVlICYmIHF1ZXVlLmQgPCAwICYmIChxdWV1ZS5kID0gMCk7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnbW9kdWxlJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00yL2luZGV4LnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMi9pbmRleC5jc3NcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTIvaW5kZXgubWRcIik7XG4iLCIiXSwibmFtZXMiOlsiU2hhZG93Q2ZnIiwiX19jc3RyX2hvc3QiLCJDQU5fSEFWRV9TSEFET1ciLCJfY2FuSGFzU2hhZG93IiwidGFnIiwiaW5jbHVkZXMiLCJfZWxlbWVudDJ0YWduYW1lIiwiTElTUyIsImV4dGVuZHMiLCJwX2V4dGVuZHMiLCJob3N0IiwicF9ob3N0IiwiZGVwZW5kZW5jaWVzIiwicF9kZXBzIiwiYXR0cmlidXRlcyIsInBfYXR0cnMiLCJwYXJhbXMiLCJjb250ZW50IiwiY3NzIiwic2hhZG93IiwicF9zaGFkb3ciLCJIVE1MRWxlbWVudCIsIl9leHRlbmRzIiwiT2JqZWN0IiwiY2FuSGFzU2hhZG93IiwiRXJyb3IiLCJ1bmRlZmluZWQiLCJwdXNoIiwiSFRNTFRlbXBsYXRlRWxlbWVudCIsImlubmVySFRNTCIsInRyaW0iLCJSZXNwb25zZSIsInRleHQiLCJMSVNTQmFzZSIsIlBhcmFtZXRlcnMiLCJzdHlsZXNoZWV0cyIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImZldGNoX2NzcyIsIkNTU1N0eWxlU2hlZXQiLCJIVE1MU3R5bGVFbGVtZW50Iiwic2hlZXQiLCJzdHlsZSIsInJlcGxhY2UiLCJtYXAiLCJpZHgiLCJjb25zdHJ1Y3RvciIsImF0dHJzIiwic2V0QXR0ckRlZmF1bHQiLCJhdHRyIiwidmFsdWUiLCJvbkF0dHJDaGFuZ2VkIiwiX25hbWUiLCJfb2xkVmFsdWUiLCJfbmV3VmFsdWUiLCJpc0luRE9NIiwib25ET01Db25uZWN0ZWQiLCJvbkRPTURpc2Nvbm5lY3RlZCIsImV4dGVuZHNMSVNTIiwiTGlzcyIsInBhcmFtZXRlcnMiLCJhc3NpZ24iLCJFeHRlbmRlZExJU1MiLCJ0IiwiaWQiLCJidWlsZExJU1NIb3N0IiwiX3BhcmFtcyIsImFscmVhZHlEZWNsYXJlZENTUyIsIlNldCIsIkdFVCIsIlN5bWJvbCIsIlNFVCIsInByb3BlcnRpZXMiLCJmcm9tRW50cmllcyIsIm4iLCJlbnVtZXJhYmxlIiwiZ2V0Iiwic2V0IiwiQXR0cmlidXRlcyIsIm5hbWUiLCJkYXRhIiwiZGVmYXVsdHMiLCJzZXR0ZXIiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiTElTU0hvc3RCYXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJpc0luaXQiLCJpbml0aWFsaXplIiwiYXBpIiwiaW5pdCIsIkxJU1NTeW5jIiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCJjb25uZWN0ZWRDYWxsYmFjayIsImN1c3RvbUVsZW1lbnRzIiwidXBncmFkZSIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwib25DbGlja0V2ZW50Iiwib2JzIiwiZ2V0QXR0cmlidXRlIiwiYWRvcHRlZFN0eWxlU2hlZXRzIiwic2hhcmVkQ1NTIiwiY3Nzc2VsZWN0b3IiLCJDU1NTZWxlY3RvciIsImhhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImh0bWxfc3R5bGVzaGVldHMiLCJydWxlIiwiY3NzUnVsZXMiLCJjc3NUZXh0IiwiaGVhZCIsImFwcGVuZCIsImFkZCIsInRlbXBsYXRlX2VsZW0iLCJzdHIiLCJfIiwibWF0Y2giLCJjaGlsZE5vZGVzIiwib2JqIiwiaGFzU2hhZG93IiwiZ2V0UGFydCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRQYXJ0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0YWdOYW1lIiwicmVtb3ZlQXR0cmlidXRlIiwib2JzZXJ2ZWRBdHRyaWJ1dGVzIiwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIiwib2xkVmFsdWUiLCJuZXdWYWx1ZSIsIl9ET01Db250ZW50TG9hZGVkIiwicmVhZHlTdGF0ZSIsImRlZmluZSIsInRhZ25hbWUiLCJDb21wb25lbnRDbGFzcyIsIkNsYXNzIiwiaHRtbHRhZyIsImFsbCIsIkxJU1NjbGFzcyIsIm9wdHMiLCJpbnNlcnRHbG9iYWxDU1NSdWxlcyIsImNzc19zdHlsZSIsInJlcGxhY2VTeW5jIiwiaW5zZXJ0UnVsZSIsIkRFTEVHQVRFRF9FVkVOVFMiLCJBTFJFQURZX1BST0NFU1NFRCIsImV2IiwiaGFuZGxlcnMiLCJ0eXBlIiwiZWxlbSIsImNvbXBvc2VkUGF0aCIsIlNoYWRvd1Jvb3QiLCJ3aW5kb3ciLCJ0YXJnZXQiLCJzZWxlY3RvciIsImhhbmRsZXIiLCJtYXRjaGVzIiwiaW5zZXJ0R2xvYmFsRGVsZWdhdGVkTGlzdGVuZXIiLCJldmVudF9uYW1lIiwiY2xvc2VzdCIsImVsZW1lbnQiLCJyZXN1bHQiLCJyb290IiwiZ2V0Um9vdE5vZGUiLCJidWlsZCIsInBhcmVudCIsImNsYXNzZXMiLCJjc3N2YXJzIiwibGlzdGVuZXJzIiwiQ3VzdG9tQ2xhc3MiLCJ3aGVuRGVmaW5lZCIsInRvTG93ZXJDYXNlIiwiY2xhc3NMaXN0Iiwic2V0UHJvcGVydHkiLCJ0b2dnbGVBdHRyaWJ1dGUiLCJkYXRhc2V0IiwicmVwbGFjZUNoaWxkcmVuIiwiZ2V0TElTUyIsImNhbGxiYWNrIiwid2hlbkFsbERlZmluZWQiLCJ0YWduYW1lcyIsImlzRGVmaW5lZCIsImdldE5hbWUiLCJnZXRMSVNTU3luYyIsIl9idWlsZFFTIiwidGFnbmFtZV9vcl9wYXJlbnQiLCJxcyIsInFzbyIsInFzYSIsImVsZW1lbnRzIiwicHJvbWlzZXMiLCJxc2MiLCJyZXMiLCJxc1N5bmMiLCJxc2FTeW5jIiwicXNjU3luYyIsIkxJU1NfQXV0byIsIm5hdmlnYXRvciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsImNvbnRyb2xsZXIiLCJzcmMiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm11dGF0aW9uIiwiYWRkaXRpb24iLCJhZGRlZE5vZGVzIiwiRWxlbWVudCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwicmVzb3VyY2VzIiwiZGVmaW5lV2ViQ29tcG9uZW50IiwiZmlsZXMiLCJqcyIsImtsYXNzIiwiV2ViQ29tcG9uZW50IiwiZmlsZW5hbWVzIiwiZmlsZSIsImVuZHNXaXRoIiwiX2ltcG9ydCIsIl9mZXRjaFRleHQiLCJpIiwiQ3N0bUV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJhcmdzIiwiZGV0YWlsIiwiZmV0Y2hSZXNvdXJjZSIsInJlc291cmNlIiwiZmV0Y2giLCJ1cmkiLCJpc0xpc3NBdXRvIiwib3B0aW9ucyIsImhlYWRlcnMiLCJyZXNwb25zZSIsInN0YXR1cyIsImRlZmF1bHQiLCJlIiwiY29uc29sZSIsImxvZyIsIkhUTUxDTEFTU19SRUdFWCIsImVsZW1lbnROYW1lTG9va3VwVGFibGUiLCJleGVjIiwiRm9ybWF0cyIsInNoZWV0X2Zvcm1hdF9jb250ZW50IiwiZ2V0Q2VsbHMiLCJmb3JtYXQiLCJmb250X3NpemUiLCJmb3JlZ3JvdW5kX2NvbG9yIiwiYmFja2dyb3VuZF9jb2xvciIsInNoZWV0X3Rvb2xiYXJfZm9ybWF0X2NvbnRlbnQiLCJzeW5jVG8iLCJkaXNhYmxlQWxsRXhjZXB0Iiwic2hlZXRfYWxpZ24iLCJzaGVldF90b29sYmFyX2FsaWduIiwiZXVyb3MiLCJwb3VyY2VudCIsIm51bWJlciIsInByZWNpc2lvbiIsInNoZWV0X3Rvb2xiYXIiLCJib3JkZXJfdG9wIiwiYm9yZGVyX2JvdHRvbSIsImJvcmRlcl9sZWZ0IiwiYm9yZGVyX3JpZ2h0IiwiYm9yZGVyX2NvbG9yIiwiaW5kZW50Iiwic3BhbiIsImFsaWduX2NlbnRlciIsInZhbGlnbl9taWRkbGUiLCJzdHIyaHRtbCIsIlJhbmdlT3ZlcmxheSIsIkV2ZW50VGFyZ2V0Iiwib3ZlcmxheSIsImNsYXNzbGlzdCIsInVwZGF0ZSIsInNldFJhbmdlIiwicmFuZ2UiLCJwbGFnZV9uYW1lIiwiZ2V0UmVjdCIsInJlY3QiLCJ0b2dnbGUiLCJnZXRSYW5nZSIsInNldFJlY3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiRm9ybXVsYVJlZiIsInNldENvbG9yIiwiY29sb3JfaWQiLCJyZW1vdmUiLCJSZWNvcHlIYW5kbGUiLCJ4IiwieSIsInciLCJoIiwiQ2VsbExpc3QiLCJkZWZhdWx0Rm9ybWF0IiwiRm9ybWF0TWFuYWdlciIsImN0cmxLZXkiLCJjaGFuZ2VkIiwia2V5Iiwic2VsZWN0aW9uIiwidG9nZ2xlRm9ybWF0Iiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsImRpc3BhdGNoRXZlbnQiLCJwcmVjIiwidG9Mb2NhbGVTdHJpbmciLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJGb3JtYXQiLCJhcHBseVRvIiwiY2VsbCIsImMiLCJjZWxscyIsInZhbCIsInRleHRDb250ZW50IiwicmF3Q29udGVudCIsInIiLCJqIiwicmVsYXRpdmVUbyIsInN0YXJ0c1dpdGgiLCJnZXRQcm9wZXJ0eSIsImhhc1Byb3BlcnR5IiwiZXh0cmFjdEZvcm1hdCIsImYyIiwidmFsdWVzIiwiaXRlbSIsInNsaWNlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImNvbHNwYW4iLCJyb3dzcGFuIiwiaGFzQXR0cmlidXRlIiwiQ2FsY0Zvcm11bGEiLCJzdGF0ZXMiLCJjZWxsX2VkaXQiLCJzdGF0ZSIsImN1cnNvciIsIkZvcm11bGEiLCJyYW5nZXNfdG9rZW4iLCJkcm93IiwiZGNvbCIsIm5ld19yYW5nZXMiLCJwb3MiLCJjZWxsUG9zIiwibGFzdEluZGV4T2YiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJuZXdfZm9ybXVsYSIsIm9mZnNldCIsImJlZyIsImVuZCIsInBhcnNlX2Zvcm11bGEiLCJyYW5nZXNUb2tlbiIsInRvU3RyaW5nIiwiZXh0cmFjdFRva2VuIiwidG9rZW4iLCJoYXNDb21tYSIsIk5vZGUiLCJjaGlsZHJlbiIsImZjdCIsImV2YWwiLCJ0b051bWJlciIsImEiLCJvcF9pbXBsIiwiYiIsIk1hdGgiLCJwb3ciLCJvcF9wcmlvIiwib3BzIiwib3AiLCJ0b2tlbmxpc3QyVHJlZSIsInRva2VucyIsIm5iIiwicmF3IiwiY3VyIiwicHJpb3JpdHkiLCJmaW5kSW5kZXgiLCJ1X29wIiwib3BfdG9rZW4iLCJsZWZ0IiwicmlnaHQiLCJjdXJUb2tlbiIsIm5vZGUiLCJyYW5nZXMiLCJmaWx0ZXIiLCJQbGFnZUZvcm11bGEiLCJjb2RlIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwic2VsZWN0ZWQiLCJjbGVhciIsImJsdXIiLCJQbGFnZVNlbGVjdG9yIiwic2VsZWN0ZWRfY2VsbHMiLCJjb2xzIiwidGJvZHkiLCJjb2xfaWQiLCJjbGllbnRYIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwicm93cyIsInJvd19pZCIsImNsaWVudFkiLCJtYWluIiwib25fbW91c2VfbW92ZSIsInJlcGxhY2VBbGwiLCJyZWYiLCJwb3MycmVmIiwibmJSb3dzIiwibmJDb2xzIiwib25jZSIsImlzQWN0aXZlIiwib25JbnB1dCIsInJyYW5nZSIsImdldFNlbGVjdGlvbiIsImdldFJhbmdlQXQiLCJzdGFydE9mZnNldCIsImNoaWxkIiwibm9kZVR5cGUiLCJURVhUX05PREUiLCJzdGFydENvbnRhaW5lciIsImNyZWF0ZVJhbmdlIiwic2VsIiwic2V0U3RhcnQiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwidG9QcmVjaXNpb24iLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwicGFyc2VJbnB1dCIsInRlc3RfbnVtYmVyIiwiTnVtYmVyIiwiaXNOYU4iLCJwYXJ0cyIsInNwbGl0IiwidGVzdF9kYXRlIiwiZ2V0RnVsbFllYXIiLCJTdGF0ZSIsInByZXZfc3RhdGUiLCJTdGF0ZXMiLCJDYWxjU2hlZXQiLCJlbnRyaWVzIiwicyIsInRibF9vZmZzZXQiLCJvZmZzZXRUb3AiLCJzdGFydCIsIm9mZnNldExlZnQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInJvd19kaWZmIiwiY29sX2RpZmYiLCJyb3ciLCJjb2wiLCJyZWNvcHkiLCJjb3B5IiwibGFzdF9yZWNvcHlfdGFyZ2V0IiwibGFzdF9yZWNvcHlfZGlyIiwib25fcmVjb3B5X21vdmUiLCJkX3B4Iiwid2lkdGgiLCJkX3B5IiwiaGVpZ2h0IiwiZF94IiwiZF95Iiwic2lnbiIsImFicyIsInByZXYiLCJkaWZmX3giLCJkaWZmX3kiLCJwb3NfY3VyIiwic2V0RGF0ZSIsImdldERhdGUiLCJjbGFzc05hbWUiLCJmb3JtdWxhX2JhciIsInBsYWdlIiwiZm9ybXVsYSIsInJvIiwiaXNfcm8iLCJmb2N1cyIsImFsdEtleSIsImRzdCIsImRlZXBDbG9uZSIsImRlbGV0ZUZvcm1hdCIsImRlbGV0ZUNvbnRlbnQiLCJkX3JvdyIsImRfY29sIiwibmV4dCIsImJ1YmJsZXMiLCJvbklucHV0MiIsInJhbmdlc19jb2xvcnMiLCJjdXJfb2Zmc2V0IiwicmFuZ2VfbmFtZSIsInJhbmdlc19uYW1lcyIsImtleXMiLCJ3YXJuIiwicGFyZW50RWxlbWVudCIsInJlc2l6ZSIsIm5icm93cyIsIm5iY29scyIsImNvbF9odG1sIiwidGgiLCJyb3dfaHRtbCIsInRhYmxlIiwicmVzaXplT2JzIiwiUmVzaXplT2JzZXJ2ZXIiLCJmcm9tIiwidG8iLCJIVE1MVGFibGVDZWxsRWxlbWVudCIsInJlZjJwb3MiLCJiZWdfcm93IiwiYmVnX2NvbCIsImVuZF9yb3ciLCJlbmRfY29sIiwiY2VsbF9vcl9yb3dpZCIsImJfcm93X2lkIiwiYl9jb2xfaWQiLCJjaGFyQ29kZUF0IiwiZV9yb3dfaWQiLCJlX2NvbF9pZCIsImZpcnN0RWxlbWVudENoaWxkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic29ydCIsIm1pbiIsIm1heCIsIm5iX2NvbHMiLCJmbG9vciIsImYiLCJpc0Zvcm1hdCIsInJhd192YWwiLCJ2IiwiZGlmZiIsInNldFJPIiwiY2xvbmUiLCJjbG9uZU5vZGUiLCJtZXJnZSIsImNlbGxsaXN0IiwiaXNfYWxpZ24iLCJ1bm1lcmdlIiwicmV0cmFpdCIsImRlbHRhX2luZGVudCIsIm5ld19mb3JtYXQiLCJhbGlnbl9sZWZ0IiwiZGVsdGFfcHJlYyIsImZjdHMiLCJhY3Rpb24iLCJlbmFibGVkIiwidW5tZXJnZWQiLCJpdGVtY3NzIiwiQ2FsY1Rvb2xiYXJJdGVtIiwiY29sb3JfcGlja2VyIiwiY2FuY2VsIiwiYm9keSIsImNsaWNrIiwiQ2FsY1Rvb2xiYXIiLCJleGNlcHRpb24iLCJidG5fbmFtZSIsImZvbnRfc2l6ZXMiLCJidG5zIiwiYnRuIiwiZm9udF9zaXplc19zZWxlY3QiLCJvcHRpb24iLCJPcHRpb24iLCJzbmFtZSIsInBhdGgiLCJyb290X3BhdGgiLCJob3N0bmFtZSIsInBhZ2VzIiwiaGVhZGVyIiwidGl0bGVzIiwiaHRyZWUiLCJodG1sIiwibGV2ZWwiLCJodHJlZV9jdXJzb3IiLCJ0aXRsZSIsInNlYXJjaEN1ckhlYWRlciIsInBvc2l0aW9uIiwiaGlkIiwiZ2V0VGl0bGVQcmVmaXgiLCJpbmRleE9mIiwibnVtIiwiYnVpbGRNZW51Iiwibm9kZXMiLCJtZW51IiwidXBkYXRlSGVhZGVyIiwibGFzdCIsInNjcm9sbFRvcCIsInJldmVyc2UiLCJobm9kZSIsImhfaHRtbCIsImxpbmsiLCJlbXB0eSIsIm1ha2VfcGFnZV9ocmVmIiwicGF0aHByZWZpeCIsImRlc2MiLCJocmVmIiwibWFrZV9wYWdlX21lbnUiLCJmaW5kIiwicGFnZSIsImN1cnBhZ2UiLCJtb2R1bGVfaHRtbCIsInR5cGVfaHRtbCIsImRlc2NfdHlwZSIsImRlc2MyX2lkeCIsInNlc3Npb25faHRtbCIsInRlbXBsYXRlIiwic3RyMkRGIl0sInNvdXJjZVJvb3QiOiIifQ==