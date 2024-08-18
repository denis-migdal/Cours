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
    let test_number = Number(str.replace(',', '.'));
    if (!Number.isNaN(test_number)) return test_number;
    if (str[str.length - 1] === "%" || str[str.length - 1] === "€") {
        test_number = Number(str.slice(0, -1).replace(',', '.'));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxJQUFJO1VBQ0o7VUFDQTtVQUNBLElBQUk7VUFDSjtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxDQUFDO1VBQ0Q7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLEVBQUU7VUFDRjtVQUNBLHNHQUFzRztVQUN0RztVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLEdBQUc7VUFDSDtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsR0FBRztVQUNIO1VBQ0EsRUFBRTtVQUNGO1VBQ0E7Ozs7O1VDaEVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EseUNBQXlDLHdDQUF3QztVQUNqRjtVQUNBO1VBQ0E7Ozs7O1VDUEE7Ozs7O1VDQUE7VUFDQTtVQUNBO1VBQ0EsdURBQXVELGlCQUFpQjtVQUN4RTtVQUNBLGdEQUFnRCxhQUFhO1VBQzdEOzs7OztVQ05BOzs7OztTRUFBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0NvdXJzLy4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMS9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00xL2luZGV4Lm1kIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9Db3Vycy8uL2xpYnMvTElTUy9pbmRleC50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvUmFuZ2VPdmVybGF5LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL2Zvcm1hdC50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9mb3JtdWxhX2VkaXRvci50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9mb3JtdWxhX3BhcnNlci50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9wbGFnZV9lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvcGxhZ2Vfc2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvc2hlZXQudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L21lbnUudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L3V0aWxzL3N0cjJodG1sLnRzIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9hc3luYyBtb2R1bGUiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInBhZ2VzL1IxLTAxL0NNL0NNMS9pbmRleC5odG1sXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI6aG9zdCB0YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcbiAgICAmID4gdGJvZHkge1xcbiAgICAgICAgb3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICB9XFxuXFxuICAgICYgPiB0Ym9keSA+IHRyOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgXFxuICAgICAgICAmID4gdGgge1xcbiAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbjpob3N0IDppcyh0cix0aCx0ZCkge1xcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjMGMwYzA7XFxufVxcblxcbjpob3N0KFtzaG93Z3JpZD1cXFwiZmFsc2VcXFwiXSkgdGQge1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG46aG9zdCB0ciB7XFxuICAgIGhlaWdodDogMC40NWNtO1xcbiAgICBsaW5lLWhlaWdodDogMC40NWNtO1xcbn1cXG5cXG5cXG46aG9zdCA6aXModGQsIHRoKTpub3QoW2NvbnRlbnRlZGl0YWJsZV0pIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi8qXFxuOmhvc3QgdGRbY29udGVudGVkaXRhYmxlXSB7XFxuICAgIHVzZXItc2VsZWN0OiB0ZXh0O1xcbn0qL1xcblxcbjpob3N0IDppcyh0ZCwgdGgpIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogMi4yNmNtO1xcbiAgICBoZWlnaHQ6IDAuNDVjbTtcXG5cXG4gICAgZm9udC1zaXplOiAxMHB0O1xcblxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ0xpYmVyYXRpb24gU2Fucyc7XFxufVxcblxcbjpob3N0IHRyID4gdGg6Zmlyc3QtY2hpbGQge1xcbiAgICB3aWR0aDogY2FsYyggMi4yNmNtIC8gMi41KSA7XFxufVxcblxcbjpob3N0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbjpob3N0IGRpdi50b29sYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG5cXG4gICAgJiA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICAgICAgZmxleDogMSAxIDA7XFxuICAgIH1cXG4gICAgJiA+ICo6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgd2lkdGg6IGNhbGMoIDEuNSAqIDIuMjZjbSApO1xcbiAgICB9XFxufVxcblxcbjpob3N0IHRoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOGE4YThhO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcblxcbiAgICAmLmhpZ2hsaWdodCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk4ZWU3O1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxufVxcblxcbjpob3N0KC5jZWxsX2VkaXQpIC5jdXJzb3Ige1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG46aG9zdCgucmVjb3B5KSB7XFxuICAgIGN1cnNvcjogY2VsbDtcXG59XFxuXFxuOmhvc3Qge1xcblxcbiAgICAucmVjb3B5IHtcXG4gICAgICAgIGN1cnNvcjogY2VsbDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzOThlZTc7XFxuICAgIH1cXG5cXG4gICAgLmN1cnNvciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzM5OGVlNztcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB9XFxufVxcblxcbjpob3N0IC5vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46aG9zdCAuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuOmhvc3QgLnNlbGVjdGlvbl9oaWdobGlnaHQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk4ZWU3OyAvKiNjZGUzZjk7Ki9cXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgLyogVE9ETyAqL1xcbn1cXG5cXG5cXG46aG9zdCB0ZCB7XFxuXFxuICAgIC0tZm9udF9zaXplOiAxMHB0O1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRfc2l6ZSk7XFxuICAgIGxpbmUtaGVpZ2h0OiBjYWxjKCB2YXIoLS1mb250X3NpemUpICogMS4yICk7XFxuXFxuICAgIC0taW5kZW50OiAwO1xcblxcbiAgICAtLWJvcmRlcl9jb2xvcjogYmxhY2s7XFxuICAgIC0tYmFja2dyb3VuZF9jb2xvcjogd2hpdGU7XFxuICAgIC0tZm9yZWdyb3VuZF9jb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmRfY29sb3IpO1xcbiAgICBjb2xvciAgICAgICAgICAgOiB2YXIoLS1mb3JlZ3JvdW5kX2NvbG9yKTtcXG5cXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcXG5cXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG5cXG4gICAgJjppcyhbZGF0YS10eXBlPVxcXCJudW1iZXJcXFwiXSxbZGF0YS10eXBlPVxcXCJwb3VyY2VudFxcXCJdLFtkYXRhLXR5cGU9XFxcImRhdGVcXFwiXSwgW2RhdGEtdHlwZT1cXFwiYm9vbGVhblxcXCJdKSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgfVxcblxcbiAgICAmW2NvbnRlbnRlZGl0YWJsZV0ge1xcbiAgICAgICAgb3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICB9XFxuXFxuICAgICYuYWp1c3RlciB7XFxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgICB9XFxuXFxuICAgIC8qKiBzdHlsZSAqKi9cXG4gICAgJi5pdGFsaWMge1xcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICB9XFxuICAgICYuYm9sZCB7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcbiAgICAmLnVuZGVybGluZSB7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgfVxcbiAgICAmLmFsaWduX2xlZnQge1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKCB2YXIoLS1pbmRlbnQpICogMTBweCk7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB9XFxuICAgICYuYWxpZ25fY2VudGVyIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAmLmFsaWduX3JpZ2h0IHtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGMoIHZhcigtLWluZGVudCkgKiAxMHB4KTtcXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICB9XFxuICAgICYudmFsaWduX3RvcCB7XFxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICB9XFxuICAgICYudmFsaWduX21pZGRsZSB7XFxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB9XFxuICAgICYudmFsaWduX2JvdHRvbSB7XFxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgICB9XFxuICAgIC8qIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEyNDE3NTcvYXBwbHlpbmctYm9yZGVycy10by1hLXNpbmdsZS10YWJsZS1jZWxsLXdoZW4tdXNpbmctYm9yZGVyLWNvbGxhcHNlICovXFxuICAgICYuYm9yZGVyX3RvcCB7XFxuICAgICAgICBib3JkZXItdG9wOiAxcHggZG91YmxlIHZhcigtLWJvcmRlcl9jb2xvcik7XFxuICAgIH1cXG4gICAgJi5ib3JkZXJfYm90dG9tIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3VibGUgdmFyKC0tYm9yZGVyX2NvbG9yKTtcXG4gICAgfVxcbiAgICAmLmJvcmRlcl9sZWZ0IHtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggZG91YmxlIHZhcigtLWJvcmRlcl9jb2xvcik7XFxuICAgIH1cXG4gICAgJi5ib3JkZXJfcmlnaHQge1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggZG91YmxlIHZhcigtLWJvcmRlcl9jb2xvcik7XFxuICAgIH1cXG59XFxuXFxuOmhvc3Qge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbjpob3N0IC5yYW5nZV9oaWdobGlnaHQge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taGlnaGxpZ2h0X2NvbG9yKTtcXG59XFxuXFxuOmhvc3QgLmZvcm11bGFfaGlnaGxpZ2h0IHtcXG4gICAgY29sb3I6IHZhcigtLWhpZ2hsaWdodF9jb2xvcik7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfMCB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjZmEwYzBjO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzEge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogI2ZhMGNmYTtcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF8yIHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICMwYzg0MGM7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfMyB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjMDEwMTgwO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzQge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzg3MTcxNztcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF81IHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICM4NzE3ODc7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfNiB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjODQ4NDBjO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0Xzcge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzBjMGNmYTtcXG59XFxuXFxuXFxuLmNvcHlfaGlnaGxpZ2h0IHtcXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLyogVG9tb3Jyb3cgVGhlbWUgKi9cXG4vKiBodHRwOi8vam1ibG9nLmdpdGh1Yi5jb20vY29sb3ItdGhlbWVzLWZvci1nb29nbGUtY29kZS1oaWdobGlnaHRqcyAqL1xcbi8qIE9yaWdpbmFsIHRoZW1lIC0gaHR0cHM6Ly9naXRodWIuY29tL2Nocmlza2VtcHNvbi90b21vcnJvdy10aGVtZSAqL1xcblxcbi8qIFRvbW9ycm93IENvbW1lbnQgKi9cXG4uaGxqcy1jb21tZW50LFxcbi5obGpzLXF1b3RlIHtcXG5cXHRjb2xvcjogIzhlOTA4YztcXG59XFxuXFxuLyogVG9tb3Jyb3cgUmVkICovXFxuLmhsanMtdmFyaWFibGUsXFxuLmhsanMtdGVtcGxhdGUtdmFyaWFibGUsXFxuLmhsanMtdGFnLFxcbi5obGpzLW5hbWUsXFxuLmhsanMtc2VsZWN0b3ItaWQsXFxuLmhsanMtc2VsZWN0b3ItY2xhc3MsXFxuLmhsanMtcmVnZXhwLFxcbi5obGpzLWRlbGV0aW9uIHtcXG5cXHRjb2xvcjogI2M4MjgyOTtcXG59XFxuXFxuLyogVG9tb3Jyb3cgT3JhbmdlICovXFxuLmhsanMtbnVtYmVyLFxcbi5obGpzLWJ1aWx0X2luLFxcbi5obGpzLWJ1aWx0aW4tbmFtZSxcXG4uaGxqcy1saXRlcmFsLFxcbi5obGpzLXR5cGUsXFxuLmhsanMtcGFyYW1zLFxcbi5obGpzLW1ldGEsXFxuLmhsanMtbGluayB7XFxuXFx0Y29sb3I6ICNmNTg3MWY7XFxufVxcblxcbi8qIFRvbW9ycm93IFllbGxvdyAqL1xcbi5obGpzLWF0dHJpYnV0ZSB7XFxuXFx0Y29sb3I6ICNlYWI3MDA7XFxufVxcblxcbi8qIFRvbW9ycm93IEdyZWVuICovXFxuLmhsanMtc3RyaW5nLFxcbi5obGpzLXN5bWJvbCxcXG4uaGxqcy1idWxsZXQsXFxuLmhsanMtYWRkaXRpb24ge1xcblxcdGNvbG9yOiAjNzE4YzAwO1xcbn1cXG5cXG4vKiBUb21vcnJvdyBCbHVlICovXFxuLmhsanMtdGl0bGUsXFxuLmhsanMtc2VjdGlvbiB7XFxuXFx0Y29sb3I6ICM0MjcxYWU7XFxufVxcblxcbi8qIFRvbW9ycm93IFB1cnBsZSAqL1xcbi5obGpzLWtleXdvcmQsXFxuLmhsanMtc2VsZWN0b3ItdGFnIHtcXG5cXHRjb2xvcjogIzg5NTlhODtcXG59XFxuXFxuLmhsanMge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdG92ZXJmbG93LXg6IGF1dG87XFxuXFx0Y29sb3I6ICM0ZDRkNGM7XFxuXFx0cGFkZGluZzogMC41ZW07XFxufVxcblxcbi5obGpzLWVtcGhhc2lzIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5obGpzLXN0cm9uZyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiOyIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgZXhwb3J0ZWQgdHlwZXMgPT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgQ1NTX1Jlc291cmNlID0gc3RyaW5nfFJlc3BvbnNlfEhUTUxTdHlsZUVsZW1lbnR8Q1NTU3R5bGVTaGVldDtcbmV4cG9ydCB0eXBlIENTU19Tb3VyY2UgICA9IENTU19SZXNvdXJjZSB8IFByb21pc2U8Q1NTX1Jlc291cmNlPjtcblxuZXhwb3J0IHR5cGUgSFRNTF9SZXNvdXJjZSA9IHN0cmluZ3xSZXNwb25zZXxIVE1MVGVtcGxhdGVFbGVtZW50O1xuZXhwb3J0IHR5cGUgSFRNTF9Tb3VyY2UgICA9IEhUTUxfUmVzb3VyY2UgfCBQcm9taXNlPEhUTUxfUmVzb3VyY2U+O1xuXG5leHBvcnQgdHlwZSBMSVNTT3B0aW9uczxFeHRlbmRzICAgIGV4dGVuZHMgQ2xhc3MsXG5cdFx0XHRcdFx0XHRIb3N0ICAgICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0XHRBdHRycyAgICAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdFx0UGFyYW1ldGVycyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+ID0ge1xuXG5cdGV4dGVuZHM/OiBDb25zdHJ1Y3RvcjxFeHRlbmRzPixcblx0aG9zdCAgID86IENvbnN0cnVjdG9yPEhvc3Q+LFxuXG5cdGRlcGVuZGVuY2llcz86IHJlYWRvbmx5IFByb21pc2U8YW55PltdLFxuXHRhdHRyaWJ1dGVzICA/OiByZWFkb25seSBBdHRyc1tdLFxuXHRwYXJhbXMgICAgICA/OiBSZWFkb25seTxQYXJhbWV0ZXJzPixcblxuXHRjb250ZW50PzogSFRNTF9Tb3VyY2UsXG5cdGNzcyAgICA/OiAgQ1NTX1NvdXJjZSB8IHJlYWRvbmx5IENTU19Tb3VyY2VbXSxcblx0c2hhZG93ID86ICBTaGFkb3dDZmcsXG59O1xuXG5leHBvcnQgZW51bSBTaGFkb3dDZmcge1xuXHROT05FID0gJ25vbmUnLFxuXHRPUEVOID0gJ29wZW4nLCBcblx0Q0xPU0U9ICdjbG9zZWQnXG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIENsYXNzID09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmxldCBfX2NzdHJfaG9zdCAgOiBhbnkgPSBudWxsO1xuXG50eXBlIENvbnN0cnVjdG9yPFQ+ID0gbmV3ICgpID0+IFQ7XG5pbnRlcmZhY2UgQ2xhc3Mge31cblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvYXR0YWNoU2hhZG93XG5jb25zdCBDQU5fSEFWRV9TSEFET1cgPSBbXG5cdG51bGwsICdhcnRpY2xlJywgJ2FzaWRlJywgJ2Jsb2NrcXVvdGUnLCAnYm9keScsICdkaXYnLFxuXHQnZm9vdGVyJywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2hlYWRlcicsICdtYWluJyxcblx0J25hdicsICdwJywgJ3NlY3Rpb24nLCAnc3Bhbidcblx0XG5dO1xuZnVuY3Rpb24gX2Nhbkhhc1NoYWRvdyh0YWc6IHR5cGVvZiBIVE1MRWxlbWVudCkge1xuXHRyZXR1cm4gQ0FOX0hBVkVfU0hBRE9XLmluY2x1ZGVzKCBfZWxlbWVudDJ0YWduYW1lKHRhZykgKTtcbn1cblxudHlwZSBSZXNvdXJjZSA9IFVSTHxSZXNwb25zZTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMSVNTPEV4dGVuZHMgICAgZXh0ZW5kcyBDbGFzcyAgICAgICAgICAgICAgPSBDbGFzcyxcblx0XHRcdFx0XHRcdFx0IEhvc3QgICAgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCAgICAgICAgPSBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHRcdFx0IEF0dHJzICAgICAgZXh0ZW5kcyBzdHJpbmcgICAgICAgICAgICAgPSBuZXZlcixcblx0XHRcdFx0XHRcdFx0IFBhcmFtZXRlcnMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4gPSB7fT4oe1xuXHRcdFx0XHRcdFx0XHRcdGV4dGVuZHMgICAgIDogcF9leHRlbmRzLFxuXHRcdFx0XHRcdFx0XHRcdGhvc3QgICAgICAgIDogcF9ob3N0LFxuXHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY2llczogcF9kZXBzLFxuXHRcdFx0XHRcdFx0XHQgICAgYXR0cmlidXRlcyAgOiBwX2F0dHJzLFxuXHRcdFx0XHRcdFx0XHQgICAgcGFyYW1zLFxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQsXG5cdFx0XHRcdFx0XHRcdFx0Y3NzLFxuXHRcdFx0XHRcdFx0XHRcdHNoYWRvdyAgICAgIDogcF9zaGFkb3csXG5cdFx0XHRcdFx0XHRcdH06IExJU1NPcHRpb25zPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbWV0ZXJzPiA9IHt9KSB7XG5cblx0Ly9UT0RPIG1lcmdlIHByb3AgaWYgZXh0ZW5kcyBMSVNTLi4uXG5cblx0Y29uc3QgaG9zdCAgICAgICAgPSBwX2hvc3QgICAgPz8gSFRNTEVsZW1lbnQgYXMgQ29uc3RydWN0b3I8SG9zdD47XG5cdGNvbnN0IF9leHRlbmRzICAgID0gcF9leHRlbmRzID8/IE9iamVjdCAgICAgIGFzIHVua25vd24gYXMgQ29uc3RydWN0b3I8RXh0ZW5kcz47XG5cdGNvbnN0IGF0dHJpYnV0ZXMgID0gcF9hdHRycyAgID8/IFtdO1xuXHRjb25zdCBkZXBlbmRlbmNpZXM9IHBfZGVwcyAgICA/IFsuLi5wX2RlcHNdIDogW107XG5cdGNvbnN0IGNhbkhhc1NoYWRvdz0gX2Nhbkhhc1NoYWRvdyhob3N0KTtcblx0Y29uc3Qgc2hhZG93ICAgICAgPSBwX3NoYWRvdyAgPz8gKGNhbkhhc1NoYWRvdyA/IFNoYWRvd0NmZy5DTE9TRSA6IFNoYWRvd0NmZy5OT05FKTtcblxuXHRpZiggISBjYW5IYXNTaGFkb3cgJiYgc2hhZG93ICE9PSBTaGFkb3dDZmcuTk9ORSlcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEhvc3QgZWxlbWVudCAke19lbGVtZW50MnRhZ25hbWUoaG9zdCl9IGRvZXMgbm90IHN1cHBvcnQgU2hhZG93Um9vdGApO1xuXG5cdC8vIENPTlRFTlQgcHJvY2Vzc2luZ1xuXHRpZiggY29udGVudCAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0ZGVwZW5kZW5jaWVzLnB1c2goICggYXN5bmMgKCkgPT4ge1xuXG5cdFx0XHRjb250ZW50ID0gYXdhaXQgY29udGVudDtcblxuXHRcdFx0aWYoY29udGVudCBpbnN0YW5jZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQpXG5cdFx0XHRjb250ZW50ID0gY29udGVudC5pbm5lckhUTUw7XG5cblx0XHRcdGlmKCB0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikge1xuXG5cdFx0XHRcdGNvbnRlbnQgPSBjb250ZW50LnRyaW0oKTsgLy8gTmV2ZXIgcmV0dXJuIGEgdGV4dCBub2RlIG9mIHdoaXRlc3BhY2UgYXMgdGhlIHJlc3VsdFxuXHRcdFx0XHRpZihjb250ZW50ID09PSAnJylcblx0XHRcdFx0XHRjb250ZW50ID0gdW5kZWZpbmVkO1xuXG5cdFx0XHR9XG5cdFx0XHRpZiggY29udGVudCBpbnN0YW5jZW9mIFJlc3BvbnNlIClcblx0XHRcdFx0Y29udGVudCA9IGF3YWl0IGNvbnRlbnQudGV4dCgpO1xuXG5cdFx0XHRyZXR1cm4gTElTU0Jhc2UuUGFyYW1ldGVycy5jb250ZW50ID0gY29udGVudDtcblx0XHR9KSgpICk7XG5cdH1cblxuXHQvLyBDU1MgcHJvY2Vzc2luZ1xuXHRsZXQgc3R5bGVzaGVldHM6IHJlYWRvbmx5IENTU1N0eWxlU2hlZXRbXSA9IFtdO1xuXHRpZiggY3NzICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRpZiggISBBcnJheS5pc0FycmF5KGNzcykgKVxuXHRcdFx0Y3NzID0gW2NzcyBhcyBDU1NfU291cmNlXTtcblxuXHRcdHN0eWxlc2hlZXRzID0gbmV3IEFycmF5PENTU1N0eWxlU2hlZXQ+KGNzcy5sZW5ndGgpO1xuXG5cdFx0Y29uc3QgZmV0Y2hfY3NzID0gKGFzeW5jIChjc3M6IENTU19Tb3VyY2UpID0+IHtcblx0XHRcdGNzcyA9IGF3YWl0IGNzcztcblx0XHRcdGlmKGNzcyBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQpXG5cdFx0XHRcdHJldHVybiBjc3M7XG5cdFx0XHRpZiggY3NzIGluc3RhbmNlb2YgSFRNTFN0eWxlRWxlbWVudClcblx0XHRcdFx0cmV0dXJuIGNzcy5zaGVldCE7XG5cblx0XHRcdGxldCBzdHlsZSA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG5cdFx0XHRpZiggdHlwZW9mIGNzcyA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdFx0c3R5bGUucmVwbGFjZShjc3MpO1xuXHRcdFx0XHRyZXR1cm4gc3R5bGU7XG5cdFx0XHR9XG5cblx0XHRcdC8vaWYoIGNzcyBpbnN0YW5jZW9mIFJlc3BvbnNlIClcblx0XHRcdHN0eWxlLnJlcGxhY2UoYXdhaXQgY3NzLnRleHQoKSk7XG5cdFx0XHRyZXR1cm4gc3R5bGU7XG5cdFx0fSk7XG5cblx0XHRkZXBlbmRlbmNpZXMucHVzaCggLi4uY3NzLm1hcCggYXN5bmMgKGNzcywgaWR4KSA9PiAgKHN0eWxlc2hlZXRzIGFzIGFueSlbaWR4XSA9IGF3YWl0IGZldGNoX2Nzcyhjc3MpICkgKTtcblx0fVxuXG5cdHR5cGUgTEhvc3QgPSBMSVNTSG9zdDxMSVNTQmFzZT47XG5cblx0Ly8gQHRzLWlnbm9yZVxuXHRjbGFzcyBMSVNTQmFzZSBleHRlbmRzIF9leHRlbmRzIHtcblxuXHRcdHJlYWRvbmx5ICNob3N0OiBhbnk7IC8vIHByZXZlbnRzIGlzc3VlICMxLi4uXG5cblx0XHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdFx0c3VwZXIoKTtcblxuXHRcdFx0Ly8gaDRjaywgb2theSBiZWNhdXNlIEpTIGlzIG1vbm90aHJlYWRlZC5cblx0XHRcdGlmKCBfX2NzdHJfaG9zdCA9PT0gbnVsbCApXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBkbyBub3QgZGlyZWN0bHkgY2FsbCB0aGlzIGNvbnN0cnVjdG9yXCIpO1xuXHRcdFx0dGhpcy4jaG9zdCA9IF9fY3N0cl9ob3N0O1xuXHRcdFx0X19jc3RyX2hvc3QgPSBudWxsO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBnZXQgaG9zdCgpOiBIb3N0IHtcblx0XHRcdHJldHVybiB0aGlzLiNob3N0O1xuXHRcdH1cblx0XHRwcm90ZWN0ZWQgZ2V0IGF0dHJzKCkge1xuXHRcdFx0cmV0dXJuICh0aGlzLiNob3N0IGFzIExIb3N0KS5hdHRycztcblx0XHR9XG5cdFx0cHJvdGVjdGVkIHNldEF0dHJEZWZhdWx0KCBhdHRyOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuI2hvc3QgYXMgTEhvc3QpLnNldEF0dHJEZWZhdWx0KGF0dHIsIHZhbHVlKTtcblxuXHRcdH1cblx0XHRwcm90ZWN0ZWQgZ2V0IHBhcmFtcygpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkucGFyYW1zO1xuXHRcdH1cblx0XHRwcm90ZWN0ZWQgZ2V0IGNvbnRlbnQoKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuI2hvc3QgYXMgTEhvc3QpLmNvbnRlbnQhO1xuXHRcdH1cblxuXHRcdHN0YXRpYyByZWFkb25seSBQYXJhbWV0ZXJzID0ge1xuXHRcdFx0aG9zdCxcblx0XHRcdGRlcGVuZGVuY2llcyxcblx0XHRcdGF0dHJpYnV0ZXMsXG5cdFx0XHRwYXJhbXMsXG5cdFx0XHRjb250ZW50LFxuXHRcdFx0c3R5bGVzaGVldHMsXG5cdFx0XHRzaGFkb3csXG5cdFx0fTtcblxuXHRcdHByb3RlY3RlZCBvbkF0dHJDaGFuZ2VkKF9uYW1lOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdFx0X29sZFZhbHVlOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdFx0X25ld1ZhbHVlOiBzdHJpbmcpOiB2b2lkfGZhbHNlIHt9XG5cblx0XHRwcm90ZWN0ZWQgZ2V0IGlzSW5ET00oKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuI2hvc3QgYXMgTEhvc3QpLmlzSW5ET007XG5cdFx0fVxuXHRcdHByb3RlY3RlZCBvbkRPTUNvbm5lY3RlZCgpIHt9XG5cdFx0cHJvdGVjdGVkIG9uRE9NRGlzY29ubmVjdGVkKCkge31cblx0fVxuXG5cdHJldHVybiBMSVNTQmFzZTtcbn1cblxuLy9UT0RPOiBvdGhlciBvcHRpb25zLi4uXG5mdW5jdGlvbiBleHRlbmRzTElTUzxFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0QXR0cnMxICAgZXh0ZW5kcyBzdHJpbmcsXG5cdEF0dHJzMiAgIGV4dGVuZHMgc3RyaW5nLFxuXHRQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+LFxuXHRUIGV4dGVuZHMgTElTU1JldHVyblR5cGU8RXh0ZW5kcywgSG9zdCwgQXR0cnMxLCBQYXJhbXM+PihMaXNzOiBULCBwYXJhbWV0ZXJzOiB7YXR0cmlidXRlczogcmVhZG9ubHkgQXR0cnMyW119KSB7XG5cblx0Ly8gVE9ETzogb3RoZXIgb3B0aW9ucy4uLlxuXHRjb25zdCBhdHRycyA9IFsuLi5MaXNzLlBhcmFtZXRlcnMuYXR0cmlidXRlcywgLi4ucGFyYW1ldGVycy5hdHRyaWJ1dGVzIV07XG5cdGNvbnN0IHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIExpc3MuUGFyYW1ldGVycywge2F0dHJpYnV0ZXM6IGF0dHJzfSk7XG5cblx0Ly8gQHRzLWlnbm9yZSA6IGJlY2F1c2UgVFMgc3R1cGlkXG5cdGNsYXNzIEV4dGVuZGVkTElTUyBleHRlbmRzIExpc3Mge1xuXHRcdGNvbnN0cnVjdG9yKC4uLnQ6IGFueVtdKSB7XG5cdFx0XHQvLyBAdHMtaWdub3JlIDogYmVjYXVzZSBUUyBzdHVwaWRcblx0XHRcdHN1cGVyKC4uLnQpO1xuXHRcdH1cblxuXHRcdHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYXR0cnMoKSB7XG5cdFx0XHRyZXR1cm4gc3VwZXIuYXR0cnMgYXMgUmVjb3JkPEF0dHJzMnxBdHRyczEsIHN0cmluZ3xudWxsPjtcblx0XHR9XG5cblx0XHRzdGF0aWMgb3ZlcnJpZGUgUGFyYW1ldGVycyA9IHBhcmFtcztcblx0fVxuXG5cdHJldHVybiBFeHRlbmRlZExJU1M7XG59XG5MSVNTLmV4dGVuZHNMSVNTID0gZXh0ZW5kc0xJU1M7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgdHlwZSBoZWxwZXJzID09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBidWlsZExJU1NIb3N0UmV0dXJuVHlwZTxUPiAgPSBUIGV4dGVuZHMgTElTU1JldHVyblR5cGU8aW5mZXIgRXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5mZXIgSG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5mZXIgQXR0cnMgICBleHRlbmRzIHN0cmluZyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluZmVyIFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IFJldHVyblR5cGU8dHlwZW9mIGJ1aWxkTElTU0hvc3Q8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcywgVD4+IDogbmV2ZXI7XG5cbmV4cG9ydCB0eXBlIExJU1NSZXR1cm5UeXBlPFxuXHRFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0QXR0cnMgICBleHRlbmRzIHN0cmluZyxcblx0UGFyYW1zICBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pj4gPSBSZXR1cm5UeXBlPHR5cGVvZiBMSVNTPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXM+PjtcbmV4cG9ydCB0eXBlIExJU1NCYXNlPEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0XHRcdFx0XHQgSG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdCBBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdCBQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+PiA9IEluc3RhbmNlVHlwZTxMSVNTUmV0dXJuVHlwZTxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zPj47XG5leHBvcnQgdHlwZSBMSVNTSG9zdDxMSVNTIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55PiA+ID0gSW5zdGFuY2VUeXBlPGJ1aWxkTElTU0hvc3RSZXR1cm5UeXBlPENvbnN0cnVjdG9yPExJU1M+ICYge1BhcmFtZXRlcnM6IGFueX0+PjtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTU0hvc3QgY2xhc3MgPT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5sZXQgaWQgPSAwO1xuXG5mdW5jdGlvbiBidWlsZExJU1NIb3N0PEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0XHRcdFx0XHQgICBIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0ICAgQXR0cnMgICBleHRlbmRzIHN0cmluZyxcblx0XHRcdFx0XHQgICBQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+LFxuXHRcdFx0XHRcdCAgIFQgZXh0ZW5kcyBMSVNTUmV0dXJuVHlwZTxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zPj4oTGlzczogVCwgX3BhcmFtczogUGFydGlhbDxQYXJhbXM+ID0ge30pIHtcblx0Y29uc3Qge1xuXHRcdGhvc3QsXG5cdFx0YXR0cmlidXRlcyxcblx0XHRjb250ZW50LFxuXHRcdHN0eWxlc2hlZXRzLFxuXHRcdHNoYWRvdyxcblx0fSA9IExpc3MuUGFyYW1ldGVycztcblxuXHRjb25zdCBhbHJlYWR5RGVjbGFyZWRDU1MgPSBuZXcgU2V0KCk7XG5cblx0Y29uc3QgR0VUID0gU3ltYm9sKCdnZXQnKTtcblx0Y29uc3QgU0VUID0gU3ltYm9sKCdzZXQnKTtcblxuXHRjb25zdCBwcm9wZXJ0aWVzID0gT2JqZWN0LmZyb21FbnRyaWVzKCBhdHRyaWJ1dGVzLm1hcChuID0+IFtuLCB7XG5cblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24oKTogc3RyaW5nfG51bGwgICAgICB7IHJldHVybiAodGhpcyBhcyB1bmtub3duIGFzIEF0dHJpYnV0ZXMpW0dFVF0obik7IH0sXG5cdFx0c2V0OiBmdW5jdGlvbih2YWx1ZTogc3RyaW5nfG51bGwpIHsgcmV0dXJuICh0aGlzIGFzIHVua25vd24gYXMgQXR0cmlidXRlcylbU0VUXShuLCB2YWx1ZSk7IH1cblx0fV0pICk7XG5cblx0Y2xhc3MgQXR0cmlidXRlcyB7XG4gICAgICAgIFt4OiBzdHJpbmddOiBzdHJpbmd8bnVsbDtcblxuICAgICAgICAjZGF0YSAgICAgOiBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPjtcbiAgICAgICAgI2RlZmF1bHRzIDogUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD47XG4gICAgICAgICNzZXR0ZXIgICA6IChuYW1lOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKSA9PiB2b2lkO1xuXG4gICAgICAgIFtHRVRdKG5hbWU6IEF0dHJzKSB7XG4gICAgICAgIFx0cmV0dXJuIHRoaXMuI2RhdGFbbmFtZV0gPz8gdGhpcy4jZGVmYXVsdHNbbmFtZV0gPz8gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgW1NFVF0obmFtZTogQXR0cnMsIHZhbHVlOiBzdHJpbmd8bnVsbCl7XG4gICAgICAgIFx0cmV0dXJuIHRoaXMuI3NldHRlcihuYW1lLCB2YWx1ZSk7IC8vIHJlcXVpcmVkIHRvIGdldCBhIGNsZWFuIG9iamVjdCB3aGVuIGRvaW5nIHsuLi5hdHRyc31cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGEgICAgOiBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPixcblx0XHRcdFx0XHRkZWZhdWx0czogUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD4sXG4gICAgICAgIFx0XHRcdHNldHRlciAgOiAobmFtZTogQXR0cnMsIHZhbHVlOiBzdHJpbmd8bnVsbCkgPT4gdm9pZCkge1xuXG4gICAgICAgIFx0dGhpcy4jZGF0YSAgICAgPSBkYXRhO1xuXHRcdFx0dGhpcy4jZGVmYXVsdHMgPSBkZWZhdWx0cztcbiAgICAgICAgXHR0aGlzLiNzZXR0ZXIgPSBzZXR0ZXI7XG5cbiAgICAgICAgXHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCBwcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuXHR9XG5cblx0Ly8gQHRzLWlnbm9yZSA6IGJlY2F1c2UgVFMgaXMgc3R1cGlkLlxuXHRjbGFzcyBMSVNTSG9zdEJhc2UgZXh0ZW5kcyBob3N0IHtcblxuXHRcdHJlYWRvbmx5ICNwYXJhbXM6IFBhcmFtcztcblxuXHRcdHJlYWRvbmx5ICNpZCA9ICsraWQ7IC8vIGZvciBkZWJ1Z1xuXG5cdFx0Y29uc3RydWN0b3IocGFyYW1zOiBQYXJ0aWFsPFBhcmFtcz4gPSB7fSkge1xuXHRcdFx0c3VwZXIoKTtcblx0XHRcdHRoaXMuI3BhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIExpc3MuUGFyYW1ldGVycy5wYXJhbXMsIF9wYXJhbXMsIHBhcmFtcyk7XG5cblx0XHRcdHRoaXMuI3dhaXRJbml0ID0gbmV3IFByb21pc2UoIChyZXNvbHZlKSA9PiB7XG5cdFx0XHRcdGlmKHRoaXMuaXNJbml0KVxuXHRcdFx0XHRcdHJldHVybiByZXNvbHZlKHRoaXMuI0FQSSEpO1xuXHRcdFx0XHR0aGlzLiNyZXNvbHZlID0gcmVzb2x2ZTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKioqIHB1YmxpYyBBUEkgKioqKioqKioqKioqKi9cblxuXHRcdGdldCBpc0luaXQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4jQVBJICE9PSBudWxsO1xuXHRcdH1cblx0XHRpbml0aWFsaXplKHBhcmFtczogUGFydGlhbDxQYXJhbXM+ID0ge30pIHtcblxuXHRcdFx0aWYoIHRoaXMuaXNJbml0IClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFbGVtZW50IGFscmVhZHkgaW5pdGlhbGl6ZWQhJyk7XG5cblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcy4jcGFyYW1zLCBwYXJhbXMpO1xuXG5cdFx0XHRjb25zdCBhcGkgPSB0aGlzLmluaXQoKTtcblxuXHRcdFx0aWYoIHRoaXMuI2lzSW5ET00gKVxuXHRcdFx0XHQoYXBpIGFzIGFueSkub25ET01Db25uZWN0ZWQoKTtcblxuXHRcdFx0cmV0dXJuIGFwaTtcblx0XHR9XG5cblx0XHRnZXQgTElTU1N5bmMoKSB7XG5cdFx0XHRpZiggISB0aGlzLmlzSW5pdCApXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQWNjZXNzaW5nIEFQSSBiZWZvcmUgV2ViQ29tcG9uZW50IGluaXRpYWxpemF0aW9uIScpO1xuXHRcdFx0cmV0dXJuIHRoaXMuI0FQSSE7XG5cdFx0fVxuXHRcdGdldCBMSVNTKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuI3dhaXRJbml0O1xuXHRcdH1cblxuXHRcdC8qKiogaW5pdCAqKiovXG5cdFx0I3dhaXRJbml0OiBQcm9taXNlPEluc3RhbmNlVHlwZTxUPj47XG5cdFx0I3Jlc29sdmU6ICgodTogSW5zdGFuY2VUeXBlPFQ+KSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xuXHRcdCNBUEk6IEluc3RhbmNlVHlwZTxUPiB8IG51bGwgPSBudWxsO1xuXG5cdFx0I2lzSW5ET00gPSBmYWxzZTtcblx0XHRnZXQgaXNJbkRPTSgpIHtcblx0XHRcdHJldHVybiB0aGlzLiNpc0luRE9NO1xuXHRcdH1cblxuXHRcdGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuXHRcdFx0dGhpcy4jaXNJbkRPTSA9IGZhbHNlO1xuXHRcdFx0KHRoaXMuI0FQSSEgYXMgYW55KS5vbkRPTURpc2Nvbm5lY3RlZCgpO1xuXHRcdH1cblxuXHRcdGNvbm5lY3RlZENhbGxiYWNrKCkge1xuXG5cdFx0XHR0aGlzLiNpc0luRE9NID0gdHJ1ZTtcblx0XG5cdFx0XHRpZiggISB0aGlzLmlzSW5pdCApIHtcblx0XHRcdFx0dGhpcy5pbml0KCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0KHRoaXMuI0FQSSEgYXMgYW55KS5vbkRPTUNvbm5lY3RlZCgpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgaW5pdCgpIHtcblx0XHRcdFxuXHRcdFx0Y3VzdG9tRWxlbWVudHMudXBncmFkZSh0aGlzKTtcblx0XHRcdFxuXHRcdFx0Ly8gc2hhZG93XG5cdFx0XHR0aGlzLiNjb250ZW50ID0gdGhpcyBhcyB1bmtub3duIGFzIEhvc3Q7XG5cdFx0XHRpZiggc2hhZG93ICE9PSAnbm9uZScpIHtcblx0XHRcdFx0dGhpcy4jY29udGVudCA9IHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiBzaGFkb3d9KTtcblxuXHRcdFx0XHQvL0B0cy1pZ25vcmVcblx0XHRcdFx0dGhpcy4jY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tFdmVudCk7XG5cdFx0XHRcdC8vQHRzLWlnbm9yZVxuXHRcdFx0XHR0aGlzLiNjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgb25DbGlja0V2ZW50KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gYXR0cnNcblx0XHRcdGZvcihsZXQgb2JzIG9mIGF0dHJpYnV0ZXMhKVxuXHRcdFx0XHR0aGlzLiNhdHRyaWJ1dGVzW29ic10gPSB0aGlzLmdldEF0dHJpYnV0ZShvYnMpO1xuXG5cdFx0XHQvLyBjc3Ncblx0XHRcdGlmKCBzaGFkb3cgIT09ICdub25lJylcblx0XHRcdFx0KHRoaXMuI2NvbnRlbnQgYXMgU2hhZG93Um9vdCkuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc2hhcmVkQ1NTKTtcblx0XHRcdGlmKCBzdHlsZXNoZWV0cy5sZW5ndGggKSB7XG5cblx0XHRcdFx0aWYoIHNoYWRvdyAhPT0gJ25vbmUnKVxuXHRcdFx0XHRcdCh0aGlzLiNjb250ZW50IGFzIFNoYWRvd1Jvb3QpLmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKC4uLnN0eWxlc2hlZXRzKTtcblx0XHRcdFx0ZWxzZSB7XG5cblx0XHRcdFx0XHRjb25zdCBjc3NzZWxlY3RvciA9IHRoaXMuQ1NTU2VsZWN0b3I7XG5cblx0XHRcdFx0XHQvLyBpZiBub3QgeWV0IGluc2VydGVkIDpcblx0XHRcdFx0XHRpZiggISBhbHJlYWR5RGVjbGFyZWRDU1MuaGFzKGNzc3NlbGVjdG9yKSApIHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0bGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuXHRcdFx0XHRcdFx0c3R5bGUuc2V0QXR0cmlidXRlKCdmb3InLCBjc3NzZWxlY3Rvcik7XG5cblx0XHRcdFx0XHRcdGxldCBodG1sX3N0eWxlc2hlZXRzID0gXCJcIjtcblxuXHRcdFx0XHRcdFx0Zm9yKGxldCBzdHlsZSBvZiBzdHlsZXNoZWV0cylcblx0XHRcdFx0XHRcdFx0Zm9yKGxldCBydWxlIG9mIHN0eWxlLmNzc1J1bGVzKVxuXHRcdFx0XHRcdFx0XHRcdGh0bWxfc3R5bGVzaGVldHMgKz0gcnVsZS5jc3NUZXh0ICsgJ1xcbic7XG5cblx0XHRcdFx0XHRcdHN0eWxlLmlubmVySFRNTCA9IGh0bWxfc3R5bGVzaGVldHMucmVwbGFjZSgnOmhvc3QnLCBgOmlzKCR7Y3Nzc2VsZWN0b3J9KWApO1xuXG5cdFx0XHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZChzdHlsZSk7XG5cblx0XHRcdFx0XHRcdGFscmVhZHlEZWNsYXJlZENTUy5hZGQoY3Nzc2VsZWN0b3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBjb250ZW50XG5cdFx0XHRpZiggY29udGVudCAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRsZXQgdGVtcGxhdGVfZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cdFx0XHRcdGxldCBzdHIgPSAoY29udGVudCBhcyBzdHJpbmcpLnJlcGxhY2UoL1xcJFxceyguKz8pXFx9L2csIChfLCBtYXRjaCkgPT4gdGhpcy5nZXRBdHRyaWJ1dGUobWF0Y2gpPz8nJylcblx0ICAgIFx0XHR0ZW1wbGF0ZV9lbGVtLmlubmVySFRNTCA9IHN0cjtcblx0ICAgIFx0XHR0aGlzLiNjb250ZW50LmFwcGVuZCguLi50ZW1wbGF0ZV9lbGVtLmNvbnRlbnQuY2hpbGROb2Rlcyk7XG5cdCAgICBcdH1cblxuXHQgICAgXHQvLyBidWlsZFxuXG5cdCAgICBcdC8vIGg0Y2ssIG9rYXkgYmVjYXVzZSBKUyBpcyBtb25vdGhyZWFkZWQuXG5cdFx0XHRfX2NzdHJfaG9zdCAgID0gdGhpcztcblxuXHQgICAgXHRsZXQgb2JqID0gbmV3IExpc3MoKTtcblxuXHQgICAgXHQvKmlmKCBvYmogaW5zdGFuY2VvZiBQcm9taXNlKVxuXHQgICAgXHRcdG9iaiA9IGF3YWl0IG9iajsqL1xuXG5cdFx0XHR0aGlzLiNBUEkgPSBvYmogYXMgSW5zdGFuY2VUeXBlPFQ+O1xuXG5cdFx0XHQvLyBkZWZhdWx0IHNsb3Rcblx0XHRcdGlmKCB0aGlzLmhhc1NoYWRvdyAmJiB0aGlzLiNjb250ZW50LmNoaWxkTm9kZXMubGVuZ3RoID09PSAwIClcblx0XHRcdFx0dGhpcy4jY29udGVudC5hcHBlbmQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Nsb3QnKSApO1xuXG5cdFx0XHRpZiggdGhpcy4jcmVzb2x2ZSAhPT0gbnVsbClcblx0XHRcdFx0dGhpcy4jcmVzb2x2ZSh0aGlzLiNBUEkpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy4jQVBJO1xuXHRcdH1cblxuXHRcdGdldCBwYXJhbXMoKTogUGFyYW1zIHtcblx0XHRcdHJldHVybiB0aGlzLiNwYXJhbXM7XG5cdFx0fVxuXG5cblx0XHQvKioqIGNvbnRlbnQgKioqL1xuXHRcdCNjb250ZW50OiBIb3N0fFNoYWRvd1Jvb3R8bnVsbCA9IG51bGw7XG5cblx0XHRnZXQgY29udGVudCgpIHtcblx0XHRcdHJldHVybiB0aGlzLiNjb250ZW50O1xuXHRcdH1cblxuXHRcdGdldFBhcnQobmFtZTogc3RyaW5nKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5oYXNTaGFkb3dcblx0XHRcdFx0XHQ/IHRoaXMuI2NvbnRlbnQ/LnF1ZXJ5U2VsZWN0b3IoYDo6cGFydCgke25hbWV9KWApXG5cdFx0XHRcdFx0OiB0aGlzLiNjb250ZW50Py5xdWVyeVNlbGVjdG9yKGBbcGFydD1cIiR7bmFtZX1cIl1gKTtcblx0XHR9XG5cdFx0Z2V0UGFydHMobmFtZTogc3RyaW5nKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5oYXNTaGFkb3dcblx0XHRcdFx0XHQ/IHRoaXMuI2NvbnRlbnQ/LnF1ZXJ5U2VsZWN0b3JBbGwoYDo6cGFydCgke25hbWV9KWApXG5cdFx0XHRcdFx0OiB0aGlzLiNjb250ZW50Py5xdWVyeVNlbGVjdG9yQWxsKGBbcGFydD1cIiR7bmFtZX1cIl1gKTtcblx0XHR9XG5cblx0XHRwcm90ZWN0ZWQgZ2V0IGhhc1NoYWRvdygpOiBib29sZWFuIHtcblx0XHRcdHJldHVybiBzaGFkb3cgIT09ICdub25lJztcblx0XHR9XG5cblx0XHQvKioqIENTUyAqKiovXG5cblx0XHRnZXQgQ1NTU2VsZWN0b3IoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5oYXNTaGFkb3dcblx0XHRcdFx0XHQ/IHRoaXMudGFnTmFtZVxuXHRcdFx0XHRcdDogYCR7dGhpcy50YWdOYW1lfVtpcz1cIiR7dGhpcy5nZXRBdHRyaWJ1dGUoXCJpc1wiKX1cIl1gO1xuXHRcdH1cblxuXHRcdC8qKiogYXR0cnMgKioqL1xuXHRcdCNhdHRyc19mbGFnID0gZmFsc2U7XG5cblx0XHQjYXR0cmlidXRlcyAgICAgICAgID0ge30gYXMgUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD47XG5cdFx0I2F0dHJpYnV0ZXNEZWZhdWx0cyA9IHt9IGFzIFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuXHRcdCNhdHRycyA9IG5ldyBBdHRyaWJ1dGVzKFxuXHRcdFx0dGhpcy4jYXR0cmlidXRlcyxcblx0XHRcdHRoaXMuI2F0dHJpYnV0ZXNEZWZhdWx0cyxcblx0XHRcdChuYW1lOiBBdHRycywgdmFsdWU6c3RyaW5nfG51bGwpID0+IHtcblxuXHRcdFx0XHR0aGlzLiNhdHRyaWJ1dGVzW25hbWVdID0gdmFsdWU7XG5cblx0XHRcdFx0dGhpcy4jYXR0cnNfZmxhZyA9IHRydWU7IC8vIGRvIG5vdCB0cmlnZ2VyIG9uQXR0cnNDaGFuZ2VkLlxuXHRcdFx0XHRpZiggdmFsdWUgPT09IG51bGwpXG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHR0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0KSBhcyB1bmtub3duIGFzIFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuXG5cdFx0c2V0QXR0ckRlZmF1bHQobmFtZTogQXR0cnMsIHZhbHVlOiBzdHJpbmd8bnVsbCkge1xuXHRcdFx0aWYoIHZhbHVlID09PSBudWxsKVxuXHRcdFx0XHRkZWxldGUgdGhpcy4jYXR0cmlidXRlc0RlZmF1bHRzW25hbWVdO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHR0aGlzLiNhdHRyaWJ1dGVzRGVmYXVsdHNbbmFtZV0gPSB2YWx1ZTtcblx0XHR9XG5cblx0XHRnZXQgYXR0cnMoKTogUmVhZG9ubHk8UmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD4+IHtcblxuXHRcdFx0cmV0dXJuIHRoaXMuI2F0dHJzO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuXHRcdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lICAgIDogQXR0cnMsXG5cdFx0XHRcdFx0XHRcdFx0IG9sZFZhbHVlOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdFx0IG5ld1ZhbHVlOiBzdHJpbmcpIHtcblxuXHRcdFx0aWYodGhpcy4jYXR0cnNfZmxhZykge1xuXHRcdFx0XHR0aGlzLiNhdHRyc19mbGFnID0gZmFsc2U7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy4jYXR0cmlidXRlc1tuYW1lXSA9IG5ld1ZhbHVlO1xuXHRcdFx0aWYoICEgdGhpcy5pc0luaXQgKVxuXHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdGlmKCAodGhpcy4jQVBJISBhcyBhbnkpLm9uQXR0ckNoYW5nZWQobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0dGhpcy4jYXR0cnNbbmFtZV0gPSBvbGRWYWx1ZTsgLy8gcmV2ZXJ0IHRoZSBjaGFuZ2UuXG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiBMSVNTSG9zdEJhc2U7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgZGVmaW5lID09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgX0RPTUNvbnRlbnRMb2FkZWQgPSBuZXcgUHJvbWlzZTx2b2lkPiggKHJlc29sdmUpID0+IHtcblxuXHRpZihkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImludGVyYWN0aXZlXCIgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKVxuXHRcdHJldHVybiByZXNvbHZlKCk7XG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblx0XHRyZXNvbHZlKCk7XG5cdH0sIHRydWUpO1xufSk7XG5cbkxJU1MuZGVmaW5lID0gYXN5bmMgZnVuY3Rpb248RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdFx0XHQgSG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdFx0ICAgICBBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdFx0ICAgICBQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+LFxuXHRcdFx0XHRcdFx0ICAgXHQgVCBleHRlbmRzIExJU1NSZXR1cm5UeXBlPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXM+Pihcblx0XHRcdFx0XHRcdCAgIFx0dGFnbmFtZTogc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRDb21wb25lbnRDbGFzczogVCxcblx0XHRcdFx0XHRcdFx0e2RlcGVuZGVuY2llcywgcGFyYW1zfToge3BhcmFtcz86IFBhcnRpYWw8UGFyYW1zPiwgZGVwZW5kZW5jaWVzPzogcmVhZG9ubHkgUHJvbWlzZTxzdHJpbmc+W119ID0ge30pIHtcblxuXHRkZXBlbmRlbmNpZXM/Pz1bXTtcblx0cGFyYW1zICAgICAgPz89IHt9O1xuXG5cdGNvbnN0IENsYXNzID0gQ29tcG9uZW50Q2xhc3MuUGFyYW1ldGVycy5ob3N0O1xuXHRsZXQgTElTU0Jhc2U6IGFueSA9IENvbXBvbmVudENsYXNzO1xuXHRsZXQgaHRtbHRhZyA9IF9lbGVtZW50MnRhZ25hbWUoQ2xhc3MpPz91bmRlZmluZWQ7XG5cblx0YXdhaXQgUHJvbWlzZS5hbGwoW19ET01Db250ZW50TG9hZGVkLCAuLi5kZXBlbmRlbmNpZXMsIC4uLkxJU1NCYXNlLlBhcmFtZXRlcnMuZGVwZW5kZW5jaWVzXSk7XG5cblx0Y29uc3QgTElTU2NsYXNzID0gYnVpbGRMSVNTSG9zdDxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zLCBUPihDb21wb25lbnRDbGFzcywgcGFyYW1zKTtcblx0XG5cdGNvbnN0IG9wdHMgPSBodG1sdGFnID09PSB1bmRlZmluZWQgPyB7fVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgOiB7ZXh0ZW5kczogaHRtbHRhZ307XG5cdFxuXHRjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnbmFtZSwgTElTU2NsYXNzLCBvcHRzKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgU2hhZG93Um9vdCB0b29scyA9PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3Qgc2hhcmVkQ1NTID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbmRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHNoYXJlZENTUyk7XG5cbkxJU1MuaW5zZXJ0R2xvYmFsQ1NTUnVsZXMgPSBmdW5jdGlvbihjc3M6IHN0cmluZ3xIVE1MU3R5bGVFbGVtZW50KSB7XG5cblx0bGV0IGNzc19zdHlsZSE6IENTU1N0eWxlU2hlZXQ7XG5cblx0aWYoIGNzcyBpbnN0YW5jZW9mIEhUTUxTdHlsZUVsZW1lbnQgKVxuXHRcdGNzc19zdHlsZSA9IGNzcy5zaGVldCE7XG5cdGlmKCB0eXBlb2YgY3NzID09PSBcInN0cmluZ1wiKSB7XG5cdFx0Y3NzX3N0eWxlID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcblx0XHRjc3Nfc3R5bGUucmVwbGFjZVN5bmMoY3NzKTtcblx0fVxuXG5cdGZvcihsZXQgcnVsZSBvZiBjc3Nfc3R5bGUuY3NzUnVsZXMpXG5cdFx0c2hhcmVkQ1NTLmluc2VydFJ1bGUocnVsZS5jc3NUZXh0KTtcbn1cblxudHlwZSBEZWxlZ2F0ZWRIYW5kbGVyID0gW3N0cmluZywgKGV2OiBNb3VzZUV2ZW50KSA9PiB2b2lkXTtcbmNvbnN0IERFTEVHQVRFRF9FVkVOVFMgPSB7XG5cdFwiY2xpY2tcIjogW10gYXMgRGVsZWdhdGVkSGFuZGxlcltdLFxuXHRcImRibGNsaWNrXCI6IFtdIGFzIERlbGVnYXRlZEhhbmRsZXJbXVxufTtcblxuY29uc3QgQUxSRUFEWV9QUk9DRVNTRUQgPSBTeW1ib2woKTtcblxuZnVuY3Rpb24gb25DbGlja0V2ZW50KGV2OiBNb3VzZUV2ZW50KSB7XG5cblx0aWYoIChldiBhcyBhbnkpW0FMUkVBRFlfUFJPQ0VTU0VEXSA9PT0gdHJ1ZSApXG5cdFx0cmV0dXJuO1xuXHQoZXYgYXMgYW55KVtBTFJFQURZX1BST0NFU1NFRF0gPSB0cnVlO1xuXG5cdGNvbnN0IGhhbmRsZXJzID0gREVMRUdBVEVEX0VWRU5UU1tldi50eXBlIGFzIGtleW9mIHR5cGVvZiBERUxFR0FURURfRVZFTlRTXTtcblxuXHRmb3IobGV0IGVsZW0gb2YgZXYuY29tcG9zZWRQYXRoKCkgKSB7XG5cdFxuXHRcdGlmKCBlbGVtIGluc3RhbmNlb2YgU2hhZG93Um9vdCB8fCBlbGVtID09PSBkb2N1bWVudCB8fCBlbGVtID09PSB3aW5kb3cgKVxuXHRcdFx0Y29udGludWU7XG5cblx0XHR2YXIgdGFyZ2V0ID0gZWxlbSBhcyBFbGVtZW50O1xuXG5cdFx0Zm9yKGxldCBbc2VsZWN0b3IsIGhhbmRsZXJdIG9mIGhhbmRsZXJzKSB7XG5cdFx0XHRpZiggdGFyZ2V0Lm1hdGNoZXMoc2VsZWN0b3IpIClcblx0XHRcdFx0aGFuZGxlcihldik7XG5cdFx0fVxuXHR9XG59XG5cbkxJU1MuaW5zZXJ0R2xvYmFsRGVsZWdhdGVkTGlzdGVuZXIgPSBmdW5jdGlvbihldmVudF9uYW1lOiBrZXlvZiB0eXBlb2YgREVMRUdBVEVEX0VWRU5UUywgc2VsZWN0b3I6IHN0cmluZywgaGFuZGxlcjogKGV2OiBNb3VzZUV2ZW50KSA9PiB2b2lkICkge1xuXHRERUxFR0FURURfRVZFTlRTW2V2ZW50X25hbWVdLnB1c2goW3NlbGVjdG9yLCBoYW5kbGVyXSlcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrRXZlbnQpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBvbkNsaWNrRXZlbnQpO1xuXG5MSVNTLmNsb3Nlc3QgPSBmdW5jdGlvbiBjbG9zZXN0PEUgZXh0ZW5kcyBFbGVtZW50PihzZWxlY3Rvcjogc3RyaW5nLCBlbGVtZW50OiBFbGVtZW50KSB7XG5cblx0d2hpbGUodHJ1ZSkge1xuXHRcdHZhciByZXN1bHQgPSBlbGVtZW50LmNsb3Nlc3Q8RT4oc2VsZWN0b3IpO1xuXG5cdFx0aWYoIHJlc3VsdCAhPT0gbnVsbClcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cblx0XHRjb25zdCByb290ID0gZWxlbWVudC5nZXRSb290Tm9kZSgpO1xuXHRcdGlmKCAhIChcImhvc3RcIiBpbiByb290KSApXG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdGVsZW1lbnQgPSAocm9vdCBhcyBTaGFkb3dSb290KS5ob3N0O1xuXHR9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgaGVscGVycyA9PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBpbmZlclBhcmFtczxUPiA9IFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSwgaW5mZXIgUCBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pj4gPyBQIDogbmV2ZXI7XG5cbnR5cGUgQlVJTERfT1BUSU9OUzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4gPSBQYXJ0aWFsPHtcblx0XHRcdFx0XHQgIFx0cGFyYW1zICAgIDogUGFydGlhbDxpbmZlclBhcmFtczxUPj4sXG5cdFx0XHRcdFx0ICBcdGNvbnRlbnRcdCAgOiBzdHJpbmd8Tm9kZXxyZWFkb25seSBOb2RlW10sXG5cdFx0XHRcdFx0XHRpZCBcdFx0ICA6IHN0cmluZyxcblx0XHRcdFx0XHQgIFx0Y2xhc3Nlc1x0ICA6IHJlYWRvbmx5IHN0cmluZ1tdLFxuXHRcdFx0XHRcdCAgXHRjc3N2YXJzICAgOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+Pixcblx0XHRcdFx0XHQgIFx0YXR0cnMgXHQgIDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgc3RyaW5nfGJvb2xlYW4+Pixcblx0XHRcdFx0XHQgIFx0ZGF0YSBcdCAgOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmd8Ym9vbGVhbj4+LFxuXHRcdFx0XHRcdCAgXHRsaXN0ZW5lcnMgOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCAoZXY6IEV2ZW50KSA9PiB2b2lkPj5cblx0XHRcdFx0XHR9PiAmICh7XG5cdFx0XHRcdFx0XHRpbml0aWFsaXplOiBmYWxzZSxcblx0XHRcdFx0XHRcdHBhcmVudDogRWxlbWVudFxuXHRcdFx0XHRcdH18e1xuXHRcdFx0XHRcdFx0aW5pdGlhbGl6ZT86IHRydWUsXG5cdFx0XHRcdFx0XHRwYXJlbnQ/OiBFbGVtZW50XG5cdFx0XHRcdFx0fSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGJ1aWxkPFQgZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPih0YWduYW1lOiBULCBvcHRpb25zPzogQlVJTERfT1BUSU9OUzxDb21wb25lbnRzW1RdPik6IFByb21pc2U8Q29tcG9uZW50c1tUXT47XG5hc3luYyBmdW5jdGlvbiBidWlsZDxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4odGFnbmFtZTogc3RyaW5nLCBvcHRpb25zPzogQlVJTERfT1BUSU9OUzxUPik6IFByb21pc2U8VD47XG5hc3luYyBmdW5jdGlvbiBidWlsZDxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4odGFnbmFtZTogc3RyaW5nLCB7XG5cdFx0cGFyYW1zICAgID0ge30sXG5cdFx0aW5pdGlhbGl6ZT0gdHJ1ZSxcblx0XHRjb250ZW50ICAgPSBbXSxcblx0XHRwYXJlbnQgICAgPSB1bmRlZmluZWQsXG5cdFx0aWQgXHRcdCAgPSB1bmRlZmluZWQsXG5cdFx0Y2xhc3NlcyAgID0gW10sXG5cdFx0Y3NzdmFycyAgID0ge30sXG5cdFx0YXR0cnMgICAgID0ge30sXG5cdFx0ZGF0YSBcdCAgPSB7fSxcblx0XHRsaXN0ZW5lcnMgPSB7fVxuXHR9OiBCVUlMRF9PUFRJT05TPFQ+ID0ge30pOiBQcm9taXNlPFQ+IHtcblxuXHRpZiggISBpbml0aWFsaXplICYmIHBhcmVudCA9PT0gbnVsbClcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJBIHBhcmVudCBtdXN0IGJlIGdpdmVuIGlmIGluaXRpYWxpemUgaXMgZmFsc2VcIik7XG5cblx0bGV0IEN1c3RvbUNsYXNzID0gYXdhaXQgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQodGFnbmFtZSk7XG5cdGxldCBlbGVtID0gbmV3IEN1c3RvbUNsYXNzKHBhcmFtcykgYXMgTElTU0hvc3Q8VD47XG5cblx0Ly8gRml4IGlzc3VlICMyXG5cdGlmKCBlbGVtLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gdGFnbmFtZSApXG5cdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoXCJpc1wiLCB0YWduYW1lKTtcblxuXHRpZiggaWQgIT09IHVuZGVmaW5lZCApXG5cdFx0ZWxlbS5pZCA9IGlkO1xuXG5cdGlmKCBjbGFzc2VzLmxlbmd0aCA+IDApXG5cdFx0ZWxlbS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBjc3N2YXJzKVxuXHRcdGVsZW0uc3R5bGUuc2V0UHJvcGVydHkoYC0tJHtuYW1lfWAsIGNzc3ZhcnNbbmFtZV0pO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBhdHRycykge1xuXG5cdFx0bGV0IHZhbHVlID0gYXR0cnNbbmFtZV07XG5cdFx0aWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpXG5cdFx0XHRlbGVtLnRvZ2dsZUF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdFx0ZWxzZVxuXHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXHR9XG5cblx0Zm9yKGxldCBuYW1lIGluIGRhdGEpIHtcblxuXHRcdGxldCB2YWx1ZSA9IGRhdGFbbmFtZV07XG5cdFx0aWYoIHZhbHVlID09PSBmYWxzZSlcblx0XHRcdGRlbGV0ZSBlbGVtLmRhdGFzZXRbbmFtZV07XG5cdFx0ZWxzZSBpZih2YWx1ZSA9PT0gdHJ1ZSlcblx0XHRcdGVsZW0uZGF0YXNldFtuYW1lXSA9IFwiXCI7XG5cdFx0ZWxzZVxuXHRcdFx0ZWxlbS5kYXRhc2V0W25hbWVdID0gdmFsdWU7XG5cdH1cblxuXHRpZiggISBBcnJheS5pc0FycmF5KGNvbnRlbnQpIClcblx0XHRjb250ZW50ID0gW2NvbnRlbnQgYXMgYW55XTtcblx0ZWxlbS5yZXBsYWNlQ2hpbGRyZW4oLi4uY29udGVudCk7XG5cblx0Zm9yKGxldCBuYW1lIGluIGxpc3RlbmVycylcblx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgbGlzdGVuZXJzW25hbWVdKTtcblxuXHRpZiggcGFyZW50ICE9PSB1bmRlZmluZWQgKVxuXHRcdHBhcmVudC5hcHBlbmQoZWxlbSk7XG5cblx0aWYoICEgZWxlbS5pc0luaXQgJiYgaW5pdGlhbGl6ZSApXG5cdFx0cmV0dXJuIGF3YWl0IExJU1MuaW5pdGlhbGl6ZShlbGVtKTtcblxuXHRyZXR1cm4gYXdhaXQgTElTUy5nZXRMSVNTKGVsZW0pO1xufVxuTElTUy5idWlsZCA9IGJ1aWxkO1xuXG5cbkxJU1Mud2hlbkRlZmluZWQgICAgPSBhc3luYyBmdW5jdGlvbih0YWduYW1lOiBzdHJpbmcsIGNhbGxiYWNrPzogKCkgPT4gdm9pZCApIDogUHJvbWlzZTx2b2lkPiB7XG5cblx0YXdhaXQgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQodGFnbmFtZSk7XG5cblx0aWYoIGNhbGxiYWNrICE9PSB1bmRlZmluZWQpXG5cdFx0Y2FsbGJhY2soKTtcblxuXHRyZXR1cm47XG59XG5MSVNTLndoZW5BbGxEZWZpbmVkID0gYXN5bmMgZnVuY3Rpb24odGFnbmFtZXM6IHJlYWRvbmx5IHN0cmluZ1tdLCBjYWxsYmFjaz86ICgpID0+IHZvaWQgKSA6IFByb21pc2U8dm9pZD4ge1xuXG5cdGF3YWl0IFByb21pc2UuYWxsKCB0YWduYW1lcy5tYXAoIHQgPT4gY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQodCkgKSApXG5cblx0aWYoIGNhbGxiYWNrICE9PSB1bmRlZmluZWQpXG5cdFx0Y2FsbGJhY2soKTtcblxufVxuXG5MSVNTLmlzRGVmaW5lZCA9IGZ1bmN0aW9uKG5hbWU6IHN0cmluZykge1xuXHRyZXR1cm4gY3VzdG9tRWxlbWVudHMuZ2V0KG5hbWUpO1xufVxuXG5MSVNTLnNlbGVjdG9yID0gZnVuY3Rpb24obmFtZT86IHN0cmluZykge1xuXHRpZihuYW1lID09PSB1bmRlZmluZWQpIC8vIGp1c3QgYW4gaDRja1xuXHRcdHJldHVybiBcIlwiO1xuXHRyZXR1cm4gYDppcygke25hbWV9LCBbaXM9XCIke25hbWV9XCJdKWA7XG59XG5cbkxJU1MuZ2V0TElTUyAgICA9IGFzeW5jIGZ1bmN0aW9uPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PiggZWxlbWVudDogRWxlbWVudCApIHtcblxuXHRhd2FpdCBMSVNTLndoZW5EZWZpbmVkKCBMSVNTLmdldE5hbWUoZWxlbWVudCkgKTtcblxuXHRyZXR1cm4gKGVsZW1lbnQgYXMgTElTU0hvc3Q8VD4pLkxJU1M7IC8vIGVuc3VyZSBpbml0aWFsaXplZC5cbn1cbkxJU1MuZ2V0TElTU1N5bmM9IGZ1bmN0aW9uPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PiggZWxlbWVudDogRWxlbWVudCApIHtcblxuXHRpZiggISBMSVNTLmlzRGVmaW5lZCggTElTUy5nZXROYW1lKGVsZW1lbnQpICkgKVxuXHRcdHRocm93IG5ldyBFcnJvcihgJHtuYW1lfSBoYXNuJ3QgYmVlbiBkZWZpbmVkIHlldC5gKTtcblxuXHRsZXQgaG9zdCA9IGVsZW1lbnQgYXMgTElTU0hvc3Q8VD47XG5cblx0aWYoICEgaG9zdC5pc0luaXQgKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIkluc3RhbmNlIGhhc24ndCBiZWVuIGluaXRpYWxpemVkIHlldC5cIik7XG5cblx0cmV0dXJuIGhvc3QuTElTU1N5bmM7XG59XG5MSVNTLmluaXRpYWxpemUgPSBhc3luYyBmdW5jdGlvbjxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oIGVsZW1lbnQ6IEVsZW1lbnQpIHtcblxuXHRhd2FpdCBMSVNTLndoZW5EZWZpbmVkKCBMSVNTLmdldE5hbWUoZWxlbWVudCkgKTtcblxuXHRyZXR1cm4gYXdhaXQgKGVsZW1lbnQgYXMgTElTU0hvc3Q8VD4pLmluaXRpYWxpemUoKTsgLy8gZW5zdXJlIGluaXRpYWxpemF0aW9uLlxufVxuXG5MSVNTLmdldE5hbWUgPSBmdW5jdGlvbiggZWxlbWVudDogRWxlbWVudCApOiBzdHJpbmcge1xuXG5cdGNvbnN0IG5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaXMnKSA/PyBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblx0XG5cdGlmKCAhIG5hbWUuaW5jbHVkZXMoJy0nKSApXG5cdFx0dGhyb3cgbmV3IEVycm9yKGBFbGVtZW50ICR7bmFtZX0gaXMgbm90IGEgV2ViQ29tcG9uZW50YCk7XG5cblx0cmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIF9idWlsZFFTKHNlbGVjdG9yOiBzdHJpbmcsIHRhZ25hbWVfb3JfcGFyZW50Pzogc3RyaW5nIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LCBwYXJlbnQ6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cdFxuXHRpZiggdGFnbmFtZV9vcl9wYXJlbnQgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdGFnbmFtZV9vcl9wYXJlbnQgIT09ICdzdHJpbmcnKSB7XG5cdFx0cGFyZW50ID0gdGFnbmFtZV9vcl9wYXJlbnQ7XG5cdFx0dGFnbmFtZV9vcl9wYXJlbnQgPSB1bmRlZmluZWQ7XG5cdH1cblxuXHRyZXR1cm4gW2Ake3NlbGVjdG9yfSR7TElTUy5zZWxlY3Rvcih0YWduYW1lX29yX3BhcmVudCBhcyBzdHJpbmd8dW5kZWZpbmVkKX1gLCBwYXJlbnRdIGFzIGNvbnN0O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIFF1ZXJ5U2VsZWN0b3JzID09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmFzeW5jIGZ1bmN0aW9uIHFzPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPFQ+O1xuYXN5bmMgZnVuY3Rpb24gcXM8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8IENvbXBvbmVudHNbTl0gPjtcbmFzeW5jIGZ1bmN0aW9uIHFzPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsXG5cdFx0XHRcdFx0XHRwYXJlbnQgIDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblxuXHRbc2VsZWN0b3IsIHBhcmVudF0gPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIHBhcmVudCk7XG5cblx0bGV0IHJlc3VsdCA9IGF3YWl0IExJU1MucXNvPFQ+KHNlbGVjdG9yLCBwYXJlbnQpO1xuXHRpZihyZXN1bHQgPT09IG51bGwpXG5cdFx0dGhyb3cgbmV3IEVycm9yKGBFbGVtZW50ICR7c2VsZWN0b3J9IG5vdCBmb3VuZGApO1xuXG5cdHJldHVybiByZXN1bHQhXG59XG5MSVNTLnFzICA9IHFzXG5cbmFzeW5jIGZ1bmN0aW9uIHFzbzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTxUPjtcbmFzeW5jIGZ1bmN0aW9uIHFzbzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTwgQ29tcG9uZW50c1tOXSA+O1xuYXN5bmMgZnVuY3Rpb24gcXNvPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsXG5cdFx0XHRcdFx0XHRwYXJlbnQgIDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblxuXHRbc2VsZWN0b3IsIHBhcmVudF0gPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIHBhcmVudCk7XG5cblx0Y29uc3QgZWxlbWVudCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yPExJU1NIb3N0PFQ+PihzZWxlY3Rvcik7XG5cdGlmKCBlbGVtZW50ID09PSBudWxsIClcblx0XHRyZXR1cm4gbnVsbDtcblxuXHRyZXR1cm4gYXdhaXQgTElTUy5nZXRMSVNTKCBlbGVtZW50ICk7XG59XG5MSVNTLnFzbyA9IHFzb1xuXG5hc3luYyBmdW5jdGlvbiBxc2E8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8VFtdPjtcbmFzeW5jIGZ1bmN0aW9uIHFzYTxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTwgQ29tcG9uZW50c1tOXVtdID47XG5hc3luYyBmdW5jdGlvbiBxc2E8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRjb25zdCBlbGVtZW50cyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsPExJU1NIb3N0PFQ+PihzZWxlY3Rvcik7XG5cblx0bGV0IGlkeCA9IDA7XG5cdGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8VD4+KCBlbGVtZW50cy5sZW5ndGggKTtcblx0Zm9yKGxldCBlbGVtZW50IG9mIGVsZW1lbnRzKVxuXHRcdHByb21pc2VzW2lkeCsrXSA9IExJU1MuZ2V0TElTUyggZWxlbWVudCApO1xuXG5cdHJldHVybiBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59XG5MSVNTLnFzYSA9IHFzYTtcblxuYXN5bmMgZnVuY3Rpb24gcXNjPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgOiBFbGVtZW50KTogUHJvbWlzZTxUPjtcbmFzeW5jIGZ1bmN0aW9uIHFzYzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdGVsZW1lbnQgIDogRWxlbWVudCk6IFByb21pc2U8IENvbXBvbmVudHNbTl0gPjtcbmFzeW5jIGZ1bmN0aW9uIHFzYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudCxcblx0XHRcdFx0XHRcdGVsZW1lbnQgID86IEVsZW1lbnQpIHtcblxuXHRjb25zdCByZXMgPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIGVsZW1lbnQpO1xuXHRcblx0Y29uc3QgcmVzdWx0ID0gKHJlc1sxXSBhcyB1bmtub3duIGFzIEVsZW1lbnQpLmNsb3Nlc3Q8TElTU0hvc3Q8VD4+KHJlc1swXSk7XG5cdGlmKHJlc3VsdCA9PT0gbnVsbClcblx0XHRyZXR1cm4gbnVsbDtcblxuXHRyZXR1cm4gYXdhaXQgTElTUy5nZXRMSVNTKHJlc3VsdCk7XG59XG5MSVNTLnFzYyA9IHFzYztcblxuZnVuY3Rpb24gcXNTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBUO1xuZnVuY3Rpb24gcXNTeW5jPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBDb21wb25lbnRzW05dO1xuZnVuY3Rpb24gcXNTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsXG5cdFx0XHRcdFx0XHRwYXJlbnQgIDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblxuXHRbc2VsZWN0b3IsIHBhcmVudF0gPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIHBhcmVudCk7XG5cblx0Y29uc3QgZWxlbWVudCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yPExJU1NIb3N0PFQ+PihzZWxlY3Rvcik7XG5cblx0aWYoIGVsZW1lbnQgPT09IG51bGwgKVxuXHRcdHRocm93IG5ldyBFcnJvcihgRWxlbWVudCAke3NlbGVjdG9yfSBub3QgZm91bmRgKTtcblxuXHRyZXR1cm4gTElTUy5nZXRMSVNTU3luYyggZWxlbWVudCApO1xufVxuTElTUy5xc1N5bmMgPSBxc1N5bmM7XG5cbmZ1bmN0aW9uIHFzYVN5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFRbXTtcbmZ1bmN0aW9uIHFzYVN5bmM8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IENvbXBvbmVudHNbTl1bXTtcbmZ1bmN0aW9uIHFzYVN5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRjb25zdCBlbGVtZW50cyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsPExJU1NIb3N0PFQ+PihzZWxlY3Rvcik7XG5cblx0bGV0IGlkeCA9IDA7XG5cdGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxUPiggZWxlbWVudHMubGVuZ3RoICk7XG5cdGZvcihsZXQgZWxlbWVudCBvZiBlbGVtZW50cylcblx0XHRyZXN1bHRbaWR4KytdID0gTElTUy5nZXRMSVNTU3luYyggZWxlbWVudCApO1xuXG5cdHJldHVybiByZXN1bHQ7XG59XG5MSVNTLnFzYVN5bmMgPSBxc2FTeW5jO1xuXG5mdW5jdGlvbiBxc2NTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgOiBFbGVtZW50KTogVDtcbmZ1bmN0aW9uIHFzY1N5bmM8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA6IEVsZW1lbnQpOiBDb21wb25lbnRzW05dO1xuZnVuY3Rpb24gcXNjU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudCxcblx0XHRcdFx0XHRcdGVsZW1lbnQgID86IEVsZW1lbnQpIHtcblxuXHRjb25zdCByZXMgPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIGVsZW1lbnQpO1xuXHRcblx0Y29uc3QgcmVzdWx0ID0gKHJlc1sxXSBhcyB1bmtub3duIGFzIEVsZW1lbnQpLmNsb3Nlc3Q8TElTU0hvc3Q8VD4+KHJlc1swXSk7XG5cdGlmKHJlc3VsdCA9PT0gbnVsbClcblx0XHRyZXR1cm4gbnVsbDtcblxuXHRyZXR1cm4gTElTUy5nZXRMSVNTU3luYyhyZXN1bHQpO1xufVxuTElTUy5xc2NTeW5jID0gcXNjU3luYztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBBdXRvID09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgY2xhc3MgTElTU19BdXRvIGV4dGVuZHMgTElTUyh7YXR0cmlidXRlczogW1wic3JjXCJdfSkge1xuXG5cdHJlYWRvbmx5ICNrbm93bl90YWcgPSBuZXcgU2V0PHN0cmluZz4oKTtcblx0cmVhZG9ubHkgI2RpcmVjdG9yeTogc3RyaW5nO1xuXHRyZWFkb25seSAjc3c6IFByb21pc2U8dm9pZD47XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy4jc3cgPSBuZXcgUHJvbWlzZSggYXN5bmMgKHJlc29sdmUpID0+IHtcblx0XHRcdFxuXHRcdFx0YXdhaXQgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoYC4vc3cuanNgKTtcblxuXHRcdFx0aWYoIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXIgKVxuXHRcdFx0XHRyZXNvbHZlKCk7XG5cblx0XHRcdG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRyb2xsZXJjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cblx0XHRjb25zdCBzcmMgPSB0aGlzLmF0dHJzLnNyYztcblx0XHRpZihzcmMgPT09IG51bGwpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJzcmMgYXR0cmlidXRlIGlzIG1pc3NpbmcuXCIpO1xuXHRcdHRoaXMuI2RpcmVjdG9yeSA9IHNyY1swXSA9PT0gJy4nXG5cdFx0XHRcdFx0XHRcdFx0PyBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9LyR7c3JjfWBcblx0XHRcdFx0XHRcdFx0XHQ6IHNyYztcblxuXHRcdG5ldyBNdXRhdGlvbk9ic2VydmVyKCAobXV0YXRpb25zKSA9PiB7XG5cblx0XHRcdGZvcihsZXQgbXV0YXRpb24gb2YgbXV0YXRpb25zKVxuXHRcdFx0XHRmb3IobGV0IGFkZGl0aW9uIG9mIG11dGF0aW9uLmFkZGVkTm9kZXMpXG5cdFx0XHRcdFx0aWYoYWRkaXRpb24gaW5zdGFuY2VvZiBFbGVtZW50KVxuXHRcdFx0XHRcdFx0dGhpcy4jYWRkVGFnKGFkZGl0aW9uLnRhZ05hbWUpXG5cblx0XHR9KS5vYnNlcnZlKCBkb2N1bWVudCwgeyBjaGlsZExpc3Q6dHJ1ZSwgc3VidHJlZTp0cnVlIH0pO1xuXG5cblx0XHRmb3IoIGxldCBlbGVtIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpIClcblx0XHRcdHRoaXMuI2FkZFRhZyhlbGVtLnRhZ05hbWUpO1xuXHR9XG5cblxuICAgIHByb3RlY3RlZCByZXNvdXJjZXMoKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdFwiaW5kZXguanNcIixcblx0XHRcdFwiaW5kZXguaHRtbFwiLFxuXHRcdFx0XCJpbmRleC5jc3NcIlxuXHRcdF07XG4gICAgfVxuXG5cdHByb3RlY3RlZCBkZWZpbmVXZWJDb21wb25lbnQodGFnbmFtZTogc3RyaW5nLCBmaWxlczogUmVjb3JkPHN0cmluZywgYW55Piwgb3B0czogUGFydGlhbDx7Y29udGVudDogc3RyaW5nLCBjc3M6IHN0cmluZ30+KSB7XG5cblx0XHRjb25zdCBqcyA9IGZpbGVzW1wiaW5kZXguanNcIl07XG5cdFx0Y29uc3QgY29udGVudCA9IGZpbGVzW1wiaW5kZXguaHRtbFwiXTtcblxuXHRcdGxldCBrbGFzczogbnVsbHwgUmV0dXJuVHlwZTx0eXBlb2YgTElTUz4gPSBudWxsO1xuXHRcdGlmKCBqcyAhPT0gdW5kZWZpbmVkIClcblx0XHRcdGtsYXNzID0ganMob3B0cyk7XG5cdFx0ZWxzZSBpZiggY29udGVudCAhPT0gdW5kZWZpbmVkIClcblx0XHRcdGtsYXNzID0gY2xhc3MgV2ViQ29tcG9uZW50IGV4dGVuZHMgTElTUyhvcHRzKSB7fTtcblxuXHRcdGlmKGtsYXNzID09PSBudWxsKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIGZpbGVzIGZvciBXZWJDb21wb25lbnQgJHt0YWduYW1lfS5gKTtcblxuXHRcdHJldHVybiBMSVNTLmRlZmluZSh0YWduYW1lLCBrbGFzcyk7XG5cdH1cblxuXHRhc3luYyAjYWRkVGFnKHRhZ25hbWU6IHN0cmluZykge1xuXG5cdFx0dGFnbmFtZSA9IHRhZ25hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdGlmKCB0YWduYW1lID09PSAnbGlzcy1hdXRvJyB8fCB0YWduYW1lID09PSAnYmxpc3MtYXV0bycgfHwgISB0YWduYW1lLmluY2x1ZGVzKCctJykgfHwgdGhpcy4ja25vd25fdGFnLmhhcyggdGFnbmFtZSApIClcblx0XHRcdHJldHVybjtcblxuXHRcdHRoaXMuI2tub3duX3RhZy5hZGQodGFnbmFtZSk7XG5cblx0XHRhd2FpdCB0aGlzLiNzdzsgLy8gZW5zdXJlIFNXIGlzIGluc3RhbGxlZC5cblxuXHRcdGNvbnN0IGZpbGVuYW1lcyA9IHRoaXMucmVzb3VyY2VzKCk7XG5cdFx0Y29uc3QgcmVzb3VyY2VzID0gYXdhaXQgUHJvbWlzZS5hbGwoIGZpbGVuYW1lcy5tYXAoIGZpbGUgPT4gZmlsZS5lbmRzV2l0aCgnLmpzJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBfaW1wb3J0ICAgKGAke3RoaXMuI2RpcmVjdG9yeX0vJHt0YWduYW1lfS8ke2ZpbGV9YCwgdHJ1ZSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBfZmV0Y2hUZXh0KGAke3RoaXMuI2RpcmVjdG9yeX0vJHt0YWduYW1lfS8ke2ZpbGV9YCwgdHJ1ZSkgKSApO1xuXG5cdFx0Y29uc3QgZmlsZXM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgZmlsZW5hbWVzLmxlbmd0aDsgKytpKVxuXHRcdFx0aWYoIHJlc291cmNlc1tpXSAhPT0gdW5kZWZpbmVkKVxuXHRcdFx0XHRmaWxlc1tmaWxlbmFtZXNbaV1dID0gcmVzb3VyY2VzW2ldO1xuXG5cdFx0Y29uc3QgY29udGVudCA9IGZpbGVzW1wiaW5kZXguaHRtbFwiXTtcblx0XHRjb25zdCBjc3MgICAgID0gZmlsZXNbXCJpbmRleC5jc3NcIl07XG5cblx0XHRjb25zdCBvcHRzOiBQYXJ0aWFsPHtjb250ZW50OiBzdHJpbmcsIGNzczogc3RyaW5nfT4gPSB7XG5cdFx0XHQuLi5jb250ZW50ICE9PSB1bmRlZmluZWQgJiYge2NvbnRlbnR9LFxuXHRcdFx0Li4uY3NzICAgICAhPT0gdW5kZWZpbmVkICYmIHtjc3N9LFxuXHRcdH07XG5cblx0XHRyZXR1cm4gdGhpcy5kZWZpbmVXZWJDb21wb25lbnQodGFnbmFtZSwgZmlsZXMsIG9wdHMpO1xuXHRcdFxuXHR9XG59XG5MSVNTLmRlZmluZShcImxpc3MtYXV0b1wiLCBMSVNTX0F1dG8pO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudHMge1xuXHRcImxpc3MtYXV0b1wiOiBMSVNTX0F1dG9cbn07XG4vKlxuICogZGVjbGFyZSBtb2R1bGUgJyRMSVNTJyB7XG4gKiBcdFx0aW50ZXJmYWNlIENvbXBvbmVudHMge1xuICogXHRcdFx0XCJuYW1lXCI6IGNsYXNzXG4gKiBcdFx0fVxuICogfVxuICovXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgRXZlbnRzVGFyZ2V0ID09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBDc3RFdmVudDxFdmVudCBleHRlbmRzIHN0cmluZywgQXJncz4gPSBDdXN0b21FdmVudDxBcmdzPiAmIHt0eXBlOiBFdmVudH07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRzVGFyZ2V0PEV2ZW50cyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+e1xuXG5cdGFkZEV2ZW50TGlzdGVuZXI8RXZlbnQgZXh0ZW5kcyBFeGNsdWRlPGtleW9mIEV2ZW50cywgc3ltYm9sfG51bWJlcj4+KHR5cGU6IEV2ZW50LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGxpc3RlbmVyOiBudWxsfCAoKGV2OiBDc3RFdmVudDxFdmVudCwgRXZlbnRzW0V2ZW50XT4pID0+IHZvaWQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IG9wdGlvbnM/OiBib29sZWFufEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zKTogdm9pZDtcblxuXHRkaXNwYXRjaEV2ZW50PEV2ZW50IGV4dGVuZHMgRXhjbHVkZTxrZXlvZiBFdmVudHMsIHN5bWJvbHxudW1iZXI+PihldmVudDogQ3N0RXZlbnQ8RXZlbnQsIEV2ZW50c1tFdmVudF0+KTogYm9vbGVhbjtcblxuXHRyZW1vdmVFdmVudExpc3RlbmVyPEV2ZW50IGV4dGVuZHMgRXhjbHVkZTxrZXlvZiBFdmVudHMsIHN5bWJvbHxudW1iZXI+Pih0eXBlOiBFdmVudCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGlzdGVuZXI6IG51bGx8ICgoZXY6IENzdEV2ZW50PEV2ZW50LCBFdmVudHNbRXZlbnRdPikgPT4gdm9pZCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM/OiBib29sZWFufEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIENzdG1FdmVudDxFdmVudCBleHRlbmRzIHN0cmluZywgQXJncz4gZXh0ZW5kcyBDdXN0b21FdmVudDxBcmdzPiB7XG5cblx0b3ZlcnJpZGUgZ2V0IHR5cGUoKTogRXZlbnQgeyByZXR1cm4gc3VwZXIudHlwZSBhcyBFdmVudDsgfVxuXG5cdGNvbnN0cnVjdG9yKHR5cGU6IEV2ZW50LCBhcmdzOiBBcmdzKSB7XG5cdFx0c3VwZXIodHlwZSwge2RldGFpbDogYXJnc30pO1xuXHR9XG59XG5cbmV4cG9ydCB0eXBlIEV2ZW50c1RhcmdldENzdHI8RXZlbnRzIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+PiA9IENvbnN0cnVjdG9yPEV2ZW50c1RhcmdldDxFdmVudHM+PjtcblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIGludGVybmFsIHRvb2xzID09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoUmVzb3VyY2UocmVzb3VyY2U6IFJlc291cmNlfFByb21pc2U8UmVzb3VyY2U+KSB7XG5cblx0cmVzb3VyY2UgPSBhd2FpdCByZXNvdXJjZTtcblxuXHRpZiggISAocmVzb3VyY2UgaW5zdGFuY2VvZiBSZXNwb25zZSkgKVxuXHRcdHJlc291cmNlID0gYXdhaXQgZmV0Y2gocmVzb3VyY2UpO1xuXG5cdHJldHVybiBhd2FpdCByZXNvdXJjZS50ZXh0KCk7XG59XG5cblxuYXN5bmMgZnVuY3Rpb24gX2ZldGNoVGV4dCh1cmk6IHN0cmluZ3xVUkwsIGlzTGlzc0F1dG86IGJvb2xlYW4gPSBmYWxzZSkge1xuXG5cdGNvbnN0IG9wdGlvbnMgPSBpc0xpc3NBdXRvXG5cdFx0XHRcdFx0XHQ/IHtoZWFkZXJzOntcImxpc3MtYXV0b1wiOiBcInRydWVcIn19XG5cdFx0XHRcdFx0XHQ6IHt9O1xuXG5cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmksIG9wdGlvbnMpO1xuXHRpZihyZXNwb25zZS5zdGF0dXMgIT09IDIwMCApXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblxuXHRpZiggaXNMaXNzQXV0byAmJiByZXNwb25zZS5oZWFkZXJzLmdldChcInN0YXR1c1wiKSEgPT09IFwiNDA0XCIgKVxuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cblx0cmV0dXJuIGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIF9pbXBvcnQodXJpOiBzdHJpbmcsIGlzTGlzc0F1dG86IGJvb2xlYW4gPSBmYWxzZSkge1xuXG5cdC8vIHRlc3QgZm9yIHRoZSBtb2R1bGUgZXhpc3RhbmNlLlxuXHRpZihpc0xpc3NBdXRvICYmIGF3YWl0IF9mZXRjaFRleHQodXJpLCBpc0xpc3NBdXRvKSA9PT0gdW5kZWZpbmVkIClcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXG5cdHRyeSB7XG5cdFx0cmV0dXJuIChhd2FpdCBpbXBvcnQoLyogd2VicGFja0lnbm9yZTogdHJ1ZSAqLyB1cmkpKS5kZWZhdWx0O1xuXHR9IGNhdGNoKGUpIHtcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHR9XG59XG5cbi8vIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTEwMDA0NjEvaHRtbC1lbGVtZW50LXRhZy1uYW1lLWZyb20tY29uc3RydWN0b3JcbmNvbnN0IEhUTUxDTEFTU19SRUdFWCA9ICAvSFRNTChcXHcrKUVsZW1lbnQvO1xuY29uc3QgZWxlbWVudE5hbWVMb29rdXBUYWJsZSA9IHtcbiAgICAnVUxpc3QnOiAndWwnLFxuICAgICdUYWJsZUNhcHRpb24nOiAnY2FwdGlvbicsXG4gICAgJ1RhYmxlQ2VsbCc6ICd0ZCcsIC8vIHRoXG4gICAgJ1RhYmxlQ29sJzogJ2NvbCcsICAvLydjb2xncm91cCcsXG4gICAgJ1RhYmxlUm93JzogJ3RyJyxcbiAgICAnVGFibGVTZWN0aW9uJzogJ3Rib2R5JywgLy9bJ3RoZWFkJywgJ3Rib2R5JywgJ3Rmb290J10sXG4gICAgJ1F1b3RlJzogJ3EnLFxuICAgICdQYXJhZ3JhcGgnOiAncCcsXG4gICAgJ09MaXN0JzogJ29sJyxcbiAgICAnTW9kJzogJ2lucycsIC8vLCAnZGVsJ10sXG4gICAgJ01lZGlhJzogJ3ZpZGVvJywvLyAnYXVkaW8nXSxcbiAgICAnSW1hZ2UnOiAnaW1nJyxcbiAgICAnSGVhZGluZyc6ICdoMScsIC8vLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnXSxcbiAgICAnRGlyZWN0b3J5JzogJ2RpcicsXG4gICAgJ0RMaXN0JzogJ2RsJyxcbiAgICAnQW5jaG9yJzogJ2EnXG4gIH07XG5mdW5jdGlvbiBfZWxlbWVudDJ0YWduYW1lKENsYXNzOiB0eXBlb2YgSFRNTEVsZW1lbnQpOiBzdHJpbmd8bnVsbCB7XG5cblx0aWYoIENsYXNzID09PSBIVE1MRWxlbWVudCApXG5cdFx0cmV0dXJuIG51bGw7XG5cdFxuXHRsZXQgaHRtbHRhZyA9IEhUTUxDTEFTU19SRUdFWC5leGVjKENsYXNzLm5hbWUpIVsxXTtcblx0cmV0dXJuIGVsZW1lbnROYW1lTG9va3VwVGFibGVbaHRtbHRhZyBhcyBrZXlvZiB0eXBlb2YgZWxlbWVudE5hbWVMb29rdXBUYWJsZV0gPz8gaHRtbHRhZy50b0xvd2VyQ2FzZSgpXG59IiwiaW1wb3J0IFwic3RydWN0L21lbnUudHNcIjtcbmltcG9ydCBcInN0cnVjdC9jYWxjL3NoZWV0LnRzXCI7XG5cbi8vIDFcblxuaW1wb3J0IExJU1MgZnJvbSBcIkxJU1NcIjtcbmltcG9ydCB7IEZvcm1hdHMgfSBmcm9tIFwic3RydWN0L2NhbGMvZm9ybWF0LnRzXCI7XG5cbmNvbnN0IHNfZm9ybXVsYSA9IGF3YWl0IExJU1MucXMoJyNzaGVldF9mb3JtdWxhJyk7XG5cbnNfZm9ybXVsYS5nZXRSYW5nZShcIkExOkMxXCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW50ID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlF1YW50aXTDqVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlByaXggdW5pdGFpcmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJQcml4IHRvdGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG5cbnNfZm9ybXVsYS5nZXRSYW5nZShcIkEyOkE0XCIpLmNvbnRlbnQgPSBbMjMgICwgMTIsIDQ0XTtcbnNfZm9ybXVsYS5nZXRSYW5nZShcIkIyOkI0XCIpLmZvcm1hdChGb3JtYXRzLmV1cm9zKS5jb250ZW50ID0gWzAuMiwgMC4zLCAwLjRdO1xuXG5zX2Zvcm11bGEuZ2V0UmFuZ2UoXCJDMjpDNFwiKS5mb3JtYXQoRm9ybWF0cy5ldXJvcykuY29udGVudCA9IFtcbiAgICBcIj1BMipCMlwiLFxuICAgIFwiPUEzKkIzXCIsXG4gICAgXCI9QTQqQjRcIlxuXTtcblxuLyoqL1xuXG5cbmNvbnN0IHNfY29tcGxleF9mb3JtdWxhID0gYXdhaXQgTElTUy5xcygnI3NoZWV0X2NvbXBsZXhfZm9ybXVsYScpO1xuXG5zX2NvbXBsZXhfZm9ybXVsYS5nZXRSYW5nZShcIkExOkMxXCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW50ID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJZXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRm9ybXVsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuXG5zX2NvbXBsZXhfZm9ybXVsYS5nZXRSYW5nZShcIkEyOkI0XCIpLmNvbnRlbnQgPSBbXG4gICAgMiwgNCxcbiAgICAxLCA1LFxuICAgIDQsIDZdO1xuXG5zX2NvbXBsZXhfZm9ybXVsYS5nZXRSYW5nZShcIkMyXCIpLmNvbnRlbnQgPVxuYD0gQTIqQjJcbiArQTMqQjNcbiArQTQqQjRgO1xuXG4vKiovXG5cbmNvbnN0IHNfdHlwZXMgPSBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfdHlwZXMnKTtcblxuXG5zX3R5cGVzLmdldFJhbmdlKFwiQTE6RTFcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW50ID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVGV4dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk5vbWJyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQm9vbMOpZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm11bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIF07XG5cbnNfdHlwZXMuZ2V0UmFuZ2UoXCJBMjpFMlwiKS5jb250ZW50ID0gW1xuICAgIFwiSGVsbG9cIixcbiAgICAyLjMsXG4gICAgdHJ1ZSxcbiAgICBuZXcgRGF0ZSgpLFxuICAgIFwiPUIyKzJcIlxuXVxuXG5cbmNvbnN0IHNfY3Vyc29yID0gYXdhaXQgTElTUy5xcygnI3NoZWV0X2N1cnNvcicpO1xuXG5zX2N1cnNvci5nZXRSYW5nZShcIkExOkgxXCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFwiKlwiO1xuc19jdXJzb3IuZ2V0UmFuZ2UoXCJBNDpINFwiKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpLmNvbnRlbnQgPSBcIipcIjtcblxuc19jdXJzb3IuZ2V0UmFuZ2UoXCJEMTpFNFwiKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpLmNvbnRlbnQgPSBcIipcIjtcblxuc19jdXJzb3IuZ2V0UmFuZ2UoXCJBMTpBNFwiKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpLmNvbnRlbnQgPSBcIipcIjtcbnNfY3Vyc29yLmdldFJhbmdlKFwiSDE6SDRcIiwgdHJ1ZSkuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gXCIqXCI7XG5cblxuY29uc3Qgc18kZm9ybXVsYSA9IFtcbiAgICBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfX19fZm9ybXVsYScpLFxuICAgIGF3YWl0IExJU1MucXMoJyNzaGVldF94X19mb3JtdWxhJyksXG4gICAgYXdhaXQgTElTUy5xcygnI3NoZWV0X194X2Zvcm11bGEnKSxcbiAgICBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfeHhfZm9ybXVsYScpXG5dXG5cbmZvcihsZXQgaSA9IDA7IGkgPCBzXyRmb3JtdWxhLmxlbmd0aDsgKytpKSB7XG4gICAgY29uc3Qgc18kZm9ybSA9IHNfJGZvcm11bGFbaV07XG5cbiAgICBzXyRmb3JtLmdldFJhbmdlKFwiQTE6RDFcIikuZm9ybWF0KFwiYm9sZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudCA9IFswLCAxLCAyLCAzXTtcblxuICAgIHNfJGZvcm0uZ2V0UmFuZ2UoXCJBMjpBNFwiKS5mb3JtYXQoXCJib2xkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW50ID0gWzEsIDIsIDNdO1xuXG4gICAgbGV0IHJlZiA9IFwiPUExXCI7XG4gICAgaWYoIGkgPT09IDEpXG4gICAgICAgIHJlZiA9IFwiPSRBMVwiO1xuICAgIGlmKCBpID09PSAyKVxuICAgICAgICByZWYgPSBcIj1BJDFcIjtcbiAgICBpZiggaSA9PT0gMylcbiAgICAgICAgcmVmID0gXCI9JEEkMVwiO1xuXG4gICAgc18kZm9ybS5nZXRSYW5nZShcIkIyXCIpLmNvbnRlbnQgPSByZWY7XG5cbiAgICBzXyRmb3JtLmdldFJhbmdlKFwiQTE6RDRcIikuZm9ybWF0KFwiYWxpZ25fY2VudGVyXCIpXG59XG5cbmNvbnN0IHNoZWV0X3JlY29waWVfbW90aXZhdGlvbiA9IGF3YWl0IExJU1MucXMoJyNzaGVldF9yZWNvcGllX21vdGl2YXRpb24nKTtcblxuc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uLmdldFJhbmdlKFwiQTE6RDRcIikuZm9ybWF0KFwiYWxpZ25fY2VudGVyXCIpLmNvbnRlbnQgPSBbXG4gICAgXCJDb25zby9qb3VyXCIsIFwiQ3JheW9uc1wiLCBcIkdvbW1lc1wiLCBcIlRvdGFsIChqb3VyKVwiLFxuICAgIFwiMDEvMDFcIiAgLCAyLCAzLCBcIj1CMitDMlwiLCBcbiAgICBcIjAyLzAxXCIgICwgNCwgMSwgXCI9QzMrQzNcIiwgXG4gICAgXCJUb3RhbCAocHJvZClcIiAgLCBcIj1CMitCM1wiLCBcIj1DMitDM1wiLCBcIj1EMitEM1wiLCBcbl07XG5zaGVldF9yZWNvcGllX21vdGl2YXRpb24uZ2V0UmFuZ2UoXCJBMTpEMVwiKS5mb3JtYXQoXCJib2xkXCIpO1xuc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uLmdldFJhbmdlKFwiQTI6QTRcIikuZm9ybWF0KFwiYm9sZFwiKTtcblxuY29uc3Qgc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uX2VtcHR5ID0gYXdhaXQgTElTUy5xcygnI3NoZWV0X3JlY29waWVfbW90aXZhdGlvbl9lbXB0eScpO1xuXG5zaGVldF9yZWNvcGllX21vdGl2YXRpb25fZW1wdHkuZ2V0UmFuZ2UoXCJBMTpENFwiKS5mb3JtYXQoXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFtcbiAgICBcIkNvbnNvL2pvdXJcIiwgXCJDcmF5b25zXCIsIFwiR29tbWVzXCIsIFwiVG90YWwgKGpvdXIpXCIsXG4gICAgXCIwMS8wMVwiICAsIDIsIDMsIHVuZGVmaW5lZCwgXG4gICAgXCIwMi8wMVwiICAsIDQsIDEsIHVuZGVmaW5lZCwgXG4gICAgXCJUb3RhbCAocHJvZClcIiAgLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkXG5dO1xuc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uX2VtcHR5LmdldFJhbmdlKFwiQTE6RDFcIikuZm9ybWF0KFwiYm9sZFwiKTtcbnNoZWV0X3JlY29waWVfbW90aXZhdGlvbl9lbXB0eS5nZXRSYW5nZShcIkEyOkE0XCIpLmZvcm1hdChcImJvbGRcIik7XG5cbmNvbnN0IHNoZWV0X3JlY29waWVfaW5jciA9IGF3YWl0IExJU1MucXMoJyNzaGVldF9yZWNvcGllX2luY3InKTtcblxuc2hlZXRfcmVjb3BpZV9pbmNyLmdldFJhbmdlKCdBMTpBMicpLmNvbnRlbnQgPSBbIDEsIG5ldyBEYXRlKCkgXTtcblxuXG4vLyB0ZXN0XG5jb25zdCBjID0gYFxuPHRhYmxlIGlkPVwidW5cIj5cbiAgICA8dGJvZHk+XG4gICAgICAgIDx0cj48dGQ+WFhYPC90ZD48L3RyPlxuICAgIDwvdGJvZHk+XG48L3RhYmxlPmA7XG5cbmNvbnN0IGNzcyA9IGBcbiAgICB0ZDpub3QoW2NvbnRlbnRlZGl0YWJsZV0pIHtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgfVxuYDtcblxuY2xhc3MgWCBleHRlbmRzIExJU1Moe1xuICAgIGNvbnRlbnQ6IGMsIGNzc1xufSkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGNvbnN0IHRkID0gdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcjdW4gdGQnKSE7XG4gICAgICAgIHRkLnRvZ2dsZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJyk7XG4gICAgICAgIHRkLmZvY3VzKCk7XG4gICAgICAgIHRkLnRleHRDb250ZW50ID0gXCJZWVlcIjtcbiAgICB9XG59XG5cbkxJU1MuZGVmaW5lKCd0ZXN0LXRlc3QnLCBYKTsiLCJpbXBvcnQgeyBzdHIyaHRtbCB9IGZyb20gXCJzdHJ1Y3QvdXRpbHMvc3RyMmh0bWxcIjtcbmltcG9ydCB7IENhbGNTaGVldCwgQ2VsbExpc3QgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5leHBvcnQgY2xhc3MgUmFuZ2VPdmVybGF5IGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuXG4gICAgI3NoZWV0OiBDYWxjU2hlZXQ7XG4gICAgI3JhbmdlOiBzdHJpbmd8bnVsbCA9IG51bGw7XG4gICAgcHJvdGVjdGVkIG92ZXJsYXk6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCwgLi4uY2xhc3NsaXN0OiBzdHJpbmdbXSkge1xuXG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcbiAgICAgICAgdGhpcy4jc2hlZXQuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm92ZXJsYXkgPSBzdHIyaHRtbChgPGRpdiBjbGFzcz0nb3ZlcmxheSc+PC9kaXY+YCk7XG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzbGlzdCk7XG5cbiAgICAgICAgc2hlZXQuY29udGVudC5hcHBlbmQoIHRoaXMub3ZlcmxheSApO1xuICAgIH1cblxuICAgIHNldFJhbmdlKHJhbmdlOiBDZWxsTGlzdHxudWxsKSB7XG4gICAgICAgIHRoaXMuI3JhbmdlID0gcmFuZ2UgPT09IG51bGwgPyBudWxsIDogcmFuZ2UucGxhZ2VfbmFtZSE7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFJlY3QoLi4ucmVjdDogcmVhZG9ubHkgW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0pIHtcbiAgICAgICAgcmV0dXJuIHJlY3Q7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuXG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIsIHRoaXMuI3JhbmdlID09PSBudWxsKTtcblxuICAgICAgICBpZiggdGhpcy4jcmFuZ2UgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmdldFJlY3QoIC4uLnRoaXMuI3NoZWV0LmdldFJlY3QoIHRoaXMuI3NoZWV0LmdldFJhbmdlKHRoaXMuI3JhbmdlKSApICk7XG4gICAgICAgIHRoaXMuI3NoZWV0LnNldFJlY3QodGhpcy5vdmVybGF5LCByZWN0ICk7XG4gICAgfVxuXG4gICAgb3ZlcnJpZGUgYWRkRXZlbnRMaXN0ZW5lcih0eXBlOiBzdHJpbmcsIGNhbGxiYWNrOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0IHwgbnVsbCwgb3B0aW9ucz86IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zIHwgYm9vbGVhbik6IHZvaWQge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBvdmVycmlkZSByZW1vdmVFdmVudExpc3RlbmVyKHR5cGU6IHN0cmluZywgY2FsbGJhY2s6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QgfCBudWxsLCBvcHRpb25zPzogRXZlbnRMaXN0ZW5lck9wdGlvbnMgfCBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5vdmVybGF5LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIG9wdGlvbnMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvcm11bGFSZWYgZXh0ZW5kcyBSYW5nZU92ZXJsYXkge1xuXG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCkge1xuICAgICAgICBzdXBlcihzaGVldCwgXCJyYW5nZV9oaWdobGlnaHRcIik7XG4gICAgfVxuXG4gICAgI2N1cl9jb2xvciA9IDA7XG4gICAgc2V0Q29sb3IoY29sb3JfaWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShgaGlnaGxpZ2h0XyR7dGhpcy4jY3VyX2NvbG9yfWApOyBcbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoYGhpZ2hsaWdodF8ke2NvbG9yX2lkfWApO1xuICAgICAgICB0aGlzLiNjdXJfY29sb3IgPSBjb2xvcl9pZDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWNvcHlIYW5kbGUgZXh0ZW5kcyBSYW5nZU92ZXJsYXkge1xuXG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCkge1xuICAgICAgICBzdXBlcihzaGVldCwgXCJyZWNvcHlcIik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldFJlY3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBbeCt3LTIsIHkraC0yLCA1LCA1XSBhcyBjb25zdDtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBGb3JtdWxhIH0gZnJvbSBcIi4vZm9ybXVsYV9wYXJzZXJcIjtcbmltcG9ydCB7IENhbGNTaGVldCwgQ2VsbCwgQ2VsbExpc3QsIFJhd0NvbnRlbnRUeXBlIH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuZXhwb3J0IGNsYXNzIEZvcm1hdE1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKHNoZWV0OiBDYWxjU2hlZXQpIHtcblxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHNoZWV0LmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldjogS2V5Ym9hcmRFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICBpZiggISBldi5jdHJsS2V5IClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdiJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJib2xkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ2knKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcIml0YWxpY1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICd1Jykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJ1bmRlcmxpbmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnbCcpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KFwiYWxpZ25fbGVmdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdyJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJhbGlnbl9yaWdodFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdlJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJhbGlnbl9jZW50ZXJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnNCcgJiYgZXYuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KEZvcm1hdHMuZXVyb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJzUnICYmIGV2LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChGb3JtYXRzLnBvdXJjZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICcxJyAmJiBldi5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoRm9ybWF0cy5udW1iZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihjaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICAgICAgLyogVE9ETyBsaXN0ZW4gKi9cblxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsb2F0MkRhdGUoZmxvYXQ6IG51bWJlcikge1xuXG4gICAgbGV0IGNvbnRlbnQgPSBuZXcgRGF0ZShcIjE4OTktMTItMzBcIik7XG5cbiAgICBjb250ZW50LnNldERhdGUoIGNvbnRlbnQuZ2V0RGF0ZSgpICsgZmxvYXQpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZGF0ZTJGbG9hdChkYXRlOiBEYXRlKSB7XG4gICAgY29uc3QgYmVnID0gbmV3IERhdGUoXCIxODk5LTEyLTMwXCIpO1xuICAgIHJldHVybiArKChkYXRlLmdldFRpbWUoKSAtIGJlZy5nZXRUaW1lKCkpIC8gKDI0KjM2MDAqMTAwMCkpLnRvRml4ZWQoNyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRSYXcocHRoaXM6IENlbGwsIHZhbHVlID0gcHRoaXMucmF3Q29udGVudCkge1xuICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIEZvcm11bGEpXG4gICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuICAgIHJldHVybiBGb3JtYXRzLmRlZmF1bHQuY2FsbChwdGhpcywgdmFsdWUpO1xufVxuXG5leHBvcnQgY29uc3QgRm9ybWF0cyA9IHtcblxuICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKHRoaXM6IENlbGx8bnVsbCwgdmFsdWUgPSB0aGlzPy5yYXdDb250ZW50KSB7XG5cbiAgICAgICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRm9ybXVsYSlcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuY2FjaGVkVmFsdWUoKTtcblxuICAgICAgICBjb25zdCBwcmVjID0gKyh0aGlzPy5nZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicpID8/IDIpO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcblxuICAgICAgICAgICAgaWYoIHRoaXM/LmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJykgPT09IFwicG91cmNlbnRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7KyggKCt2YWx1ZSkqMTAwKS50b1ByZWNpc2lvbig3KX1gLnJlcGxhY2UoJy4nLCAnLCcpICsgXCIlXCI7XG5cbiAgICAgICAgICAgIHJldHVybiBgJHsrdmFsdWUudG9QcmVjaXNpb24oNyl9YC5yZXBsYWNlKCcuJywgJywnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCB0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID8gJ1ZSQUknIDogJ0ZBVVgnO1xuXG4gICAgICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZSE7XG4gICAgfSxcbiAgICBudW1iZXI6IGZ1bmN0aW9uKHRoaXM6Q2VsbCwgdmFsdWUgPSB0aGlzLnJhd0NvbnRlbnQpIHtcblxuICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBGb3JtdWxhKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5jYWNoZWRWYWx1ZSgpO1xuXG4gICAgICAgIGlmKHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcblxuICAgICAgICBpZih2YWx1ZSBpbnN0YW5jZW9mIERhdGUpXG4gICAgICAgICAgICB2YWx1ZSA9IGRhdGUyRmxvYXQodmFsdWUpO1xuXG4gICAgICAgIGlmKCB0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtdHlwZVwiKSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIiwgXCJudW1iZXJcIik7XG5cbiAgICAgICAgICAgIGlmKCAhICh0aGlzLnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBGb3JtdWxhKSApXG4gICAgICAgICAgICAgICAgQ2FsY1NoZWV0LmdldFNoZWV0RnJvbUNlbGwodGhpcykuZ2V0UmFuZ2UodGhpcykuY29udGVudCA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJlYyA9ICsodGhpcy5nZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicpID8/IDIpO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHtcbiAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogcHJlYyxcbiAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogcHJlY1xuICAgICAgICAgICAgfSk7XG4gICAgfSxcbiAgICBwb3VyY2VudDogZnVuY3Rpb24odGhpczpDZWxsLCB2YWx1ZSA9IHRoaXMucmF3Q29udGVudCkge1xuXG4gICAgICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIEZvcm11bGEpXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmNhY2hlZFZhbHVlKCk7XG5cbiAgICAgICAgaWYodmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICBpZih2YWx1ZSBpbnN0YW5jZW9mIERhdGUpXG4gICAgICAgICAgICB2YWx1ZSA9IGRhdGUyRmxvYXQodmFsdWUpO1xuXG4gICAgICAgIGlmKCB0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtdHlwZVwiKSAhPT0gXCJwb3VyY2VudFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtdHlwZVwiLCBcInBvdXJjZW50XCIpO1xuICAgICAgICAgICAgaWYoICEgKHRoaXMucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEpIClcbiAgICAgICAgICAgICAgICBDYWxjU2hlZXQuZ2V0U2hlZXRGcm9tQ2VsbCh0aGlzKS5nZXRSYW5nZSh0aGlzKS5jb250ZW50ID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmVjID0gKyh0aGlzLmdldEF0dHJpYnV0ZSgncHJlY2lzaW9uJykgPz8gMik7XG5cbiAgICAgICAgcmV0dXJuICh2YWx1ZSAqIDEwMCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XG4gICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHByZWMsXG4gICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNcbiAgICAgICAgICAgIH0pICsgJyUnO1xuICAgIH0sXG4gICAgZGF0ZTogZnVuY3Rpb24odGhpczpDZWxsLCB2YWx1ZSA9IHRoaXMucmF3Q29udGVudCkge1xuICAgICAgICBcbiAgICAgICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRm9ybXVsYSlcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuY2FjaGVkVmFsdWUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICBpZiggdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIsIFwiZGF0ZVwiKTtcblxuICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBEYXRlICkge1xuICAgICAgICAgICAgbGV0IGRhdGUgPSB2YWx1ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRlLnNsaWNlKDAsIDYpICsgZGF0ZS5zbGljZSg4KTtcbiAgICAgICAgfSBpZiggdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBmbG9hdDJEYXRlKHZhbHVlKTtcblxuICAgICAgICAgICAgaWYoICEgKHRoaXMucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEpIClcbiAgICAgICAgICAgICAgICBDYWxjU2hlZXQuZ2V0U2hlZXRGcm9tQ2VsbCh0aGlzKS5nZXRSYW5nZSggdGhpcyApLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgZGF0ZSA9IGNvbnRlbnQudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIik7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5zbGljZSgwLCA2KSArIGRhdGUuc2xpY2UoOCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICBldXJvczogZnVuY3Rpb24odGhpczpDZWxsLCB2YWx1ZSA9IHRoaXMucmF3Q29udGVudCkge1xuXG4gICAgICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIEZvcm11bGEpXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmNhY2hlZFZhbHVlKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgaWYodmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuXG4gICAgICAgIGlmKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSlcbiAgICAgICAgICAgIHZhbHVlID0gZGF0ZTJGbG9hdCh2YWx1ZSk7XG5cbiAgICAgICAgaWYoIHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIpICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtdHlwZVwiLCBcIm51bWJlclwiKTtcbiAgICAgICAgICAgIGlmKCAhICh0aGlzLnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBGb3JtdWxhKSApXG4gICAgICAgICAgICAgICAgQ2FsY1NoZWV0LmdldFNoZWV0RnJvbUNlbGwodGhpcykuZ2V0UmFuZ2UodGhpcykuY29udGVudCA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJlYyA9ICsodGhpcy5nZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicpID8/IDIpO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHtcbiAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogcHJlYyxcbiAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogcHJlY1xuICAgICAgICAgICAgfSkgKyAnIOKCrCc7XG4gICAgfSxcbn1cblxuZXhwb3J0IGNsYXNzIEZvcm1hdCB7XG5cbiAgICAjZm9ybWF0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoZm9ybWF0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgICAgIHRoaXMuI2Zvcm1hdCA9IGZvcm1hdDtcbiAgICB9XG5cbiAgICBhcHBseVRvKGNlbGw6IENlbGx8Q2VsbExpc3QpIHtcblxuICAgICAgICBpZiggY2VsbCBpbnN0YW5jZW9mIENlbGxMaXN0KSB7XG5cbiAgICAgICAgICAgIGZvcihsZXQgYyBvZiBjZWxsLmNlbGxzKVxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlUbyhjKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCBuYW1lIGluIHRoaXMuI2Zvcm1hdCkge1xuICAgICAgICAgICAgbGV0IHZhbCA9IHRoaXMuI2Zvcm1hdFtuYW1lXTtcblxuICAgICAgICAgICAgaWYobmFtZSA9PT0gJ2Zvcm1hdCcpIHtcblxuICAgICAgICAgICAgICAgIGlmKCB2YWwgPT09IG51bGwpIHtcblxuICAgICAgICAgICAgICAgICAgICBjZWxsLmZvcm1hdCA9IEZvcm1hdHMuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGNlbGwuZm9ybWF0KCk7IC8vVE9ETzogaWYgZmN0XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNlbGwuZm9ybWF0ID0gdmFsO1xuICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBjZWxsLmZvcm1hdCggY2VsbC5yYXdDb250ZW50KTsgLy9UT0RPOiBpZiBmY3RcblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihuYW1lID09PSAncHJlY2lzaW9uJykge1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdwcmVjaXNpb24nLCB2YWwpO1xuICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBjZWxsLmZvcm1hdD8uKCBjZWxsLnJhd0NvbnRlbnQpOyAvL1RPRE86IGlmIGZjdFxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiggbmFtZSA9PT0gJ3NwYW4nICkge1xuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBzaGVldCA9IENhbGNTaGVldC5nZXRTaGVldEZyb21DZWxsKGNlbGwpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKCB2YWxbMF0gPT09IDEgJiYgdmFsWzFdID09PSAxKSB7IC8vIHVubWVyZ2VcblxuICAgICAgICAgICAgICAgICAgICBsZXQgciA9ICsoY2VsbC5nZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nKSA/PyAwKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGMgPSArKGNlbGwuZ2V0QXR0cmlidXRlKCdjb2xzcGFuJykgPz8gMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHI7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBjOyArK2opIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBzaGVldC5yZWxhdGl2ZVRvKGNlbGwsIGksIGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0YXJnZXQuY2VsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNlbGwucmVtb3ZlQXR0cmlidXRlKCdyb3dzcGFuJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwucmVtb3ZlQXR0cmlidXRlKCdjb2xzcGFuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCBgJHt2YWxbMF19YCk7XG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCBgJHt2YWxbMV19YCk7XG5cbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdmFsWzBdOyArK2kpXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB2YWxbMV07ICsraikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaSA9PT0gMCAmJiBqID09PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBzaGVldC5yZWxhdGl2ZVRvKGNlbGwsIGksIGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNlbGwgPSBjZWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIHR5cGVvZiB2YWwgPT09IFwiYm9vbGVhblwiKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggbmFtZS5zdGFydHNXaXRoKCdhbGlnbl8nKSApIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdhbGlnbl9sZWZ0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYWxpZ25fY2VudGVyJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYWxpZ25fcmlnaHQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoIG5hbWUuc3RhcnRzV2l0aCgndmFsaWduXycpICkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlnbl90b3AnKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZ25fbWlkZGxlJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWduX2JvdHRvbScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnRvZ2dsZShuYW1lLCB2YWwpO1xuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNlbGwuc3R5bGUuc2V0UHJvcGVydHkoYC0tJHtuYW1lfWAsIHZhbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQcm9wZXJ0eShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2Zvcm1hdFtuYW1lXTtcbiAgICB9XG4gICAgaGFzUHJvcGVydHkobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuYW1lIGluIHRoaXMuI2Zvcm1hdDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZXh0cmFjdEZvcm1hdChjZWxsOiBDZWxsfENlbGxMaXN0KTogRm9ybWF0IHtcbiAgICAgICAgXG4gICAgICAgIGlmKCBjZWxsIGluc3RhbmNlb2YgQ2VsbExpc3QpIHtcblxuICAgICAgICAgICAgY29uc3QgY2VsbHMgPSBjZWxsLmNlbGxzO1xuXG4gICAgICAgICAgICBsZXQgZm9ybWF0ID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHNbMF0pO1xuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgY2VsbHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBsZXQgZjIgPSBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxsc1tpXSk7XG5cbiAgICAgICAgICAgICAgICBmb3IobGV0IGtleSBpbiBmb3JtYXQuI2Zvcm1hdClcbiAgICAgICAgICAgICAgICAgICAgaWYoICEgKGtleSBpbiBmMi4jZm9ybWF0KSB8fCBmMi4jZm9ybWF0W2tleV0gIT09IGZvcm1hdC4jZm9ybWF0W2tleV0gKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGZvcm1hdC4jZm9ybWF0W2tleV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBmb3JtYXQgPSBPYmplY3QuZnJvbUVudHJpZXM8YW55PiggWy4uLmNlbGwuY2xhc3NMaXN0LnZhbHVlcygpXS5tYXAoZSA9PiBbZSwgdHJ1ZV0pICk7XG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2VsbC5zdHlsZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBjZWxsLnN0eWxlLml0ZW0oaSk7XG4gICAgICAgICAgICBpZiggISBuYW1lLnN0YXJ0c1dpdGgoJy0tJykgKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgZm9ybWF0W25hbWUuc2xpY2UoMildID0gY2VsbC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29sc3BhbiA9ICsoY2VsbC5nZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nKSA/PyAxKTtcbiAgICAgICAgY29uc3Qgcm93c3BhbiA9ICsoY2VsbC5nZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nKSA/PyAxKTtcblxuICAgICAgICBpZiggY29sc3BhbiA+IDEgfHwgcm93c3BhbiA+IDEgKVxuICAgICAgICAgICAgZm9ybWF0LnNwYW4gPSBbIHJvd3NwYW4sIGNvbHNwYW4gXTtcblxuICAgICAgICBpZiggISAoXCJmb250X3NpemVcIiBpbiBmb3JtYXQpIClcbiAgICAgICAgICAgIGZvcm1hdFsnZm9udF9zaXplJ10gPSAnMTBwdCc7XG5cbiAgICAgICAgaWYoIFwiZm9ybWF0XCIgaW4gY2VsbClcbiAgICAgICAgICAgIGZvcm1hdC5mb3JtYXQgPSBjZWxsLmZvcm1hdDtcblxuICAgICAgICBpZiggY2VsbC5oYXNBdHRyaWJ1dGUoJ3ByZWNpc2lvbicpIClcbiAgICAgICAgICAgIGZvcm1hdC5wcmVjaXNpb24gPSBjZWxsLmdldEF0dHJpYnV0ZSgncHJlY2lzaW9uJyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBGb3JtYXQoZm9ybWF0KTtcbiAgICB9XG59IiwiLy9UT0RPOiB3ZWJwYWNrIGNvbmZpZy4uLlxuaW1wb3J0IExJU1MgZnJvbSBcIi4uLy4uLy4uL2xpYnMvTElTU1wiO1xuaW1wb3J0IHsgZm9ybWF0UmF3LCBGb3JtYXRzIH0gZnJvbSBcIi4vZm9ybWF0XCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGwgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5jb25zdCBjc3MgPSBgXG4gICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYgcHJlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKCAxcmVtICsgOHB4ICsgMnB4ICk7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xpYmVyYXRpb24gU2Fucyc7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5cbmV4cG9ydCBjbGFzcyBDYWxjRm9ybXVsYSBleHRlbmRzIExJU1Moe1xuICAgIGNzc1xufSkge1xuXG4gICAgI2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XG4gICAgI3NoZWV0ICAhOiBDYWxjU2hlZXQ7XG4gICAgI2N1cl9jZWxsOiBDZWxsfG51bGwgPSBudWxsO1xuICAgICNvbklucHV0OiAoZXY6IEV2ZW50KSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCggdGhpcy4jaW5wdXQgKTtcblxuICAgICAgICB0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IHtcblxuICAgICAgICAgICAgaWYoIHRoaXMuI2N1cl9jZWxsID09PSBudWxsIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIC8vdGhpcy4jc2hlZXQuY3Vyc29yLmNvbnRlbnQgPSB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCE7XG4gICAgICAgICAgICB0aGlzLiNzaGVldC5zdGF0ZXMuY2VsbF9lZGl0LnN0YXRlID0gbnVsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsICgpID0+IHtcblxuICAgICAgICAgICAgaWYoIHRoaXMuI2N1cl9jZWxsID09PSBudWxsIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPSB0aGlzLiNjdXJfY2VsbDtcbiAgICAgICAgICAgIC8vdGhpcy4jY3VyX2NlbGwhLnRleHRDb250ZW50ID0gdGhpcy4jaW5wdXQudGV4dENvbnRlbnQhO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmKCB0aGlzLiNjdXJfY2VsbCA9PT0gbnVsbCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLiNjdXJfY2VsbCEudGV4dENvbnRlbnQgPSBmb3JtYXRSYXcodGhpcy4jY3VyX2NlbGwsIHRoaXMuI2lucHV0LnRleHRDb250ZW50ISApO1xuICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KCdpbnB1dCcsIHtkZXRhaWw6IHRydWV9KSApO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNvbklucHV0ID0gKGV2OiBFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIGlmKCBldi5kZXRhaWwgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy4jaW5wdXQudGV4dENvbnRlbnQgPSBmb3JtYXRSYXcoIHRoaXMuI2N1cl9jZWxsISwgdGhpcy4jY3VyX2NlbGwhLnRleHRDb250ZW50ISApO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN5bmNUbyhzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcbiAgICAgICAgY29uc3QgY3Vyc29yID0gdGhpcy4jc2hlZXQuY3Vyc29yO1xuXG4gICAgICAgIHNoZWV0Lmhvc3QuYWRkRXZlbnRMaXN0ZW5lcigndXBkYXRlJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdGhpcy4jaW5wdXQudGV4dENvbnRlbnQgPSBmb3JtYXRSYXcoY3Vyc29yLmZpcnN0Q2VsbCApO1xuICAgICAgICB9KVxuXG4gICAgICAgIGN1cnNvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gY3Vyc29yLmNlbGxzO1xuXG4gICAgICAgICAgICB0aGlzLiNpbnB1dC50b2dnbGVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICEgc2hlZXQuaXNSTyApO1xuXG4gICAgICAgICAgICBpZiggY2VsbHMubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggdGhpcy4jY3VyX2NlbGwgIT09IG51bGwgKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNjdXJfY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuI29uSW5wdXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsID0gY2VsbHNbMF07XG4gICAgICAgICAgICB0aGlzLiNjdXJfY2VsbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuI29uSW5wdXQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCA9IGZvcm1hdFJhdyggdGhpcy4jY3VyX2NlbGwgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbkxJU1MuZGVmaW5lKCdjYWxjLWZvcm11bGEnLCBDYWxjRm9ybXVsYSk7IiwiaW1wb3J0IHsgZGF0ZTJGbG9hdCwgRm9ybWF0cyB9IGZyb20gXCIuL2Zvcm1hdFwiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0LCBWYWx1ZVR5cGUgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5leHBvcnQgY2xhc3MgRm9ybXVsYSB7XG5cbiAgICAjc3RyOiBzdHJpbmc7XG4gICAgI2V4ZWM6IChzaGVldDogQ2FsY1NoZWV0KSA9PiBWYWx1ZVR5cGU7XG4gICAgI3JhbmdlczogVG9rZW5bXTtcblxuICAgICNjYWNoZTogVmFsdWVUeXBlfG51bGwgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3Ioc3RyOiBzdHJpbmcsIGV4ZWM6IChzaGVldDogQ2FsY1NoZWV0KSA9PiBWYWx1ZVR5cGUsIHJhbmdlc190b2tlbjogVG9rZW5bXSA9IFtdKSB7XG5cbiAgICAgICAgdGhpcy4jc3RyID0gc3RyO1xuICAgICAgICB0aGlzLiNleGVjID0gZXhlYztcbiAgICAgICAgdGhpcy4jcmFuZ2VzID0gcmFuZ2VzX3Rva2VuO1xuICAgIH1cbiAgICBcbiAgICByZWxhdGl2ZVRvKCBzaGVldDogQ2FsY1NoZWV0LCBkcm93OiBudW1iZXIsIGRjb2w6IG51bWJlcikge1xuICAgICAgICBcbiAgICAgICAgbGV0IG5ld19yYW5nZXMgPSB0aGlzLiNyYW5nZXMubWFwKHIgPT4ge1xuXG4gICAgICAgICAgICAvL1RPRE86IGlmIHJhbmdlLi4uXG4gICAgICAgICAgICBsZXQgcG9zID0gWy4uLnNoZWV0LmNlbGxQb3MoIHNoZWV0LmdldFJhbmdlKHIudmFsdWUpLmZpcnN0Q2VsbCApXTtcbiAgICBcbiAgICAgICAgICAgIGlmKCByLnZhbHVlLmxhc3RJbmRleE9mKCckJykgPD0gMCApXG4gICAgICAgICAgICAgICAgcG9zWzBdICs9IGRyb3c7XG4gICAgICAgICAgICBpZiggci52YWx1ZVswXSAhPT0gJyQnIClcbiAgICAgICAgICAgICAgICBwb3NbMV0gKz0gZGNvbDtcblxuICAgICAgICAgICAgcmV0dXJuIGAke1N0cmluZy5mcm9tQ2hhckNvZGUoNjUrcG9zWzFdLTEpfSR7cG9zWzBdfWA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBuZXdfZm9ybXVsYSA9IFwiXCI7XG5cbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLiNyYW5nZXMubGVuZ3RoOyArK2kpIHtcblxuICAgICAgICAgICAgbmV3X2Zvcm11bGEgKz0gdGhpcy4jc3RyLnNsaWNlKG9mZnNldCwgdGhpcy4jcmFuZ2VzW2ldLmJlZyk7XG4gICAgICAgICAgICBuZXdfZm9ybXVsYSArPSBuZXdfcmFuZ2VzW2ldO1xuXG4gICAgICAgICAgICBvZmZzZXQgPSB0aGlzLiNyYW5nZXNbaV0uZW5kO1xuICAgICAgICB9XG4gICAgICAgIG5ld19mb3JtdWxhICs9IHRoaXMuI3N0ci5zbGljZShvZmZzZXQpO1xuICAgICAgICBcbiAgICAgICAgLy9jYW4gYmUgb3B0aW1pemVkLi4uXG4gICAgICAgIHJldHVybiBwYXJzZV9mb3JtdWxhKCBuZXdfZm9ybXVsYSApO1xuICAgIH1cblxuICAgIGdldCByYW5nZXNUb2tlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3JhbmdlcztcbiAgICB9XG5cbiAgICByZXNldENhY2hlKCkge1xuICAgICAgICB0aGlzLiNjYWNoZSA9IG51bGw7XG4gICAgfVxuXG4gICAgY2FjaGVkVmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjYWNoZSE7XG4gICAgfVxuXG4gICAgZXhlYyhzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgaWYoIHRoaXMuI2NhY2hlICE9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuI2NhY2hlO1xuXG4gICAgICAgIHJldHVybiB0aGlzLiNjYWNoZSA9IHRoaXMuI2V4ZWMoc2hlZXQpO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jc3RyO1xuICAgIH1cbn1cblxudHlwZSBUb2tlbiA9IHtcbiAgICBiZWc6IG51bWJlcixcbiAgICBlbmQ6IG51bWJlcixcbiAgICB2YWx1ZTogc3RyaW5nLFxuICAgIHR5cGU6IFwic3RyaW5nXCJ8XCJudW1iZXJcInxcImNhbGxcInxcInJhbmdlXCJ8XCJvcFwiXG59XG5cblxuZnVuY3Rpb24gZXh0cmFjdFRva2VuKHN0cjogc3RyaW5nLCBvZmZzZXQ6IG51bWJlcikge1xuXG4gICAgd2hpbGUoIFsnICcsICdcXG4nLCAnXFx0J10uaW5jbHVkZXMoc3RyW29mZnNldF0pICkgLy8gaWdub3JlIHdoaXRlc3BhY2VzXG4gICAgICAgICsrb2Zmc2V0O1xuXG4gICAgbGV0IHRva2VuOiBQYXJ0aWFsPFRva2VuPiA9IHtcbiAgICAgICAgYmVnOiBvZmZzZXRcbiAgICB9O1xuXG4gICAgaWYoc3RyW29mZnNldF0gPT09ICdcIicpIHtcbiAgICAgICAgdG9rZW4udHlwZSA9IFwic3RyaW5nXCI7XG4gICAgICAgIHdoaWxlKCBzdHJbKytvZmZzZXRdICE9PSAnXCInICYmIHN0cltvZmZzZXQtMV0gIT09ICdcXFxcJykge1xuICAgICAgICAgICAgaWYob2Zmc2V0KzEgPj0gc3RyLmxlbmd0aCApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JtdWxhIHBhcnNpbmcgZXJyb3InKTtcbiAgICAgICAgfVxuICAgICAgICArK29mZnNldDtcbiAgICB9IGVsc2UgaWYoIHN0cltvZmZzZXRdID09PSAnLCcgfHwgKHN0cltvZmZzZXRdID49ICcwJyAmJiBzdHJbb2Zmc2V0XSA8PSAnOScpICkge1xuICAgICAgICB0b2tlbi50eXBlID0gXCJudW1iZXJcIjtcbiAgICAgICAgbGV0IGhhc0NvbW1hID0gZmFsc2U7XG4gICAgICAgIHdoaWxlKCBzdHJbb2Zmc2V0XSA9PT0gJywnIHx8IHN0cltvZmZzZXRdID49ICcwJyAmJiBzdHJbb2Zmc2V0XSA8PSAnOScgKSB7XG5cbiAgICAgICAgICAgIGlmKCBzdHJbb2Zmc2V0XSA9PT0gJywnICkge1xuICAgICAgICAgICAgICAgIGlmKGhhc0NvbW1hID09PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Zvcm11bGEgcGFyc2luZyBlcnJvcicpO1xuICAgICAgICAgICAgICAgIGhhc0NvbW1hID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgKytvZmZzZXQ7XG4gICAgICAgIH1cblxuICAgIH0gZWxzZSBpZiggc3RyW29mZnNldF0gPT09ICckJyB8fCBzdHJbb2Zmc2V0XSA+PSAnQScgJiYgc3RyW29mZnNldF0gPD0gJ1onKSB7IC8vKyRcbiAgICAgICAgXG4gICAgICAgIHdoaWxlKCBvZmZzZXQgPCBzdHIubGVuZ3RoXG4gICAgICAgICAgICAgICAgJiYgKHN0cltvZmZzZXRdID09PSAnJCcgfHwgc3RyW29mZnNldF0gPj0gJ0EnICYmIHN0cltvZmZzZXRdIDw9ICdaJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHN0cltvZmZzZXRdID49ICcwJyAmJiBzdHJbb2Zmc2V0XSA8PSAnOSdcbiAgICAgICAgICAgICAgICAgICAgKSApXG4gICAgICAgICAgICArK29mZnNldDtcblxuICAgICAgICB0b2tlbi50eXBlID0gc3RyW29mZnNldF0gPT09ICcoJyA/ICdjYWxsJyA6ICdyYW5nZSc7XG5cbiAgICAgICAgaWYoIHN0cltvZmZzZXRdID09PSAnKCcgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3QgaW1wbGVtZW50ZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRva2VuLnR5cGUgPSBcIm9wXCI7IC8vIG9ubHkgb24gY2hhciA/Pz9cblxuICAgICAgICBpZiggc3RyW29mZnNldCArIDFdID09PSAnPScpIC8vID49IC8gPD1cbiAgICAgICAgICAgICsrb2Zmc2V0O1xuICAgICAgICBlbHNlIGlmKCBzdHJbb2Zmc2V0ICsgMV0gPT09ICc+JykgLy8gPD5cbiAgICAgICAgICAgICsrb2Zmc2V0O1xuXG4gICAgICAgICsrb2Zmc2V0O1xuICAgIH1cblxuICAgIHRva2VuLmVuZCA9IG9mZnNldDtcbiAgICB0b2tlbi52YWx1ZSA9IHN0ci5zbGljZSh0b2tlbi5iZWcsIHRva2VuLmVuZCk7XG5cbiAgICByZXR1cm4gdG9rZW4gYXMgUmVxdWlyZWQ8VG9rZW4+O1xufVxuXG5jbGFzcyBOb2RlIHtcblxuICAgIGNoaWxkcmVuOiBOb2RlW107XG4gICAgI2ZjdDogKHNoZWV0OiBDYWxjU2hlZXQsIC4uLmFyZ3M6KFZhbHVlVHlwZSlbXSkgPT4gVmFsdWVUeXBlO1xuXG4gICAgY29uc3RydWN0b3IoZmN0OiAoc2hlZXQ6IENhbGNTaGVldCwgLi4uYXJnczooVmFsdWVUeXBlKVtdKSA9PiBWYWx1ZVR5cGUsIC4uLmNoaWxkcmVuOiBOb2RlW10pIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgICBpZihjaGlsZHJlbiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV1RGXCIpO1xuICAgICAgICB0aGlzLiNmY3QgPSBmY3Q7XG4gICAgfVxuXG4gICAgZXZhbChzaGVldDogQ2FsY1NoZWV0KTogVmFsdWVUeXBlIHtcbiAgICAgICAgY29uc3QgYXJncyA9IHRoaXMuY2hpbGRyZW4ubWFwKCBjID0+IGMuZXZhbChzaGVldCkgKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2ZjdChzaGVldCwgLi4uYXJncyApO1xuICAgIH1cbiAgICBcbn1cblxuZnVuY3Rpb24gdG9OdW1iZXIoYTogdW5rbm93bik6IG51bWJlciB7XG5cbiAgICBpZihhID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiAwO1xuXG4gICAgaWYoIHR5cGVvZiBhID09PSBcInN0cmluZ1wiKVxuICAgICAgICByZXR1cm4gTnVtYmVyKGEpO1xuXG4gICAgaWYoIGEgaW5zdGFuY2VvZiBEYXRlKVxuICAgICAgICByZXR1cm4gZGF0ZTJGbG9hdChhKTtcblxuICAgIHJldHVybiBhIGFzIHVua25vd24gYXMgbnVtYmVyO1xufVxuXG5jb25zdCBvcF9pbXBsID0ge1xuICAgICclJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93bikgPT4gdG9OdW1iZXIoYSkvMTAwLFxuICAgICd1LisnOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duKSA9PiArdG9OdW1iZXIoYSksXG4gICAgJ3UuLSc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24pID0+IC10b051bWJlcihhKSxcbiAgICAnKic6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24sIGI6IHVua25vd24pID0+IHRvTnVtYmVyKGEpKnRvTnVtYmVyKGIpLFxuICAgICcvJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93biwgYjogdW5rbm93bikgPT4gdG9OdW1iZXIoYSkvdG9OdW1iZXIoYiksXG4gICAgJysnOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiB0b051bWJlcihhKSt0b051bWJlcihiKSxcbiAgICAnLSc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24sIGI6IHVua25vd24pID0+IHRvTnVtYmVyKGEpLXRvTnVtYmVyKGIpLFxuICAgICdeJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93biwgYjogdW5rbm93bikgPT4gTWF0aC5wb3codG9OdW1iZXIoYSksdG9OdW1iZXIoYikgKSxcbiAgICAnJic6IChfOiBDYWxjU2hlZXQsIGE6IHN0cmluZywgYjogc3RyaW5nKSA9PiBgJHtGb3JtYXRzLmRlZmF1bHQuY2FsbChudWxsLCBhKX0ke0Zvcm1hdHMuZGVmYXVsdC5jYWxsKG51bGwsIGIpfWAsXG4gICAgJz0nOiAgKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPT09IGIsXG4gICAgJzw+JzogKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgIT09IGIsXG4gICAgJz4nOiAgKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPiBiLFxuICAgICc+PSc6IChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhID49IGIsXG4gICAgJzwnOiAgKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPCBiLFxuICAgICc8PSc6IChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhIDw9IGIsXG59IGFzIFJlY29yZDxzdHJpbmcsIChfOiBDYWxjU2hlZXQsIC4uLmFyZ3M6VmFsdWVUeXBlW10pID0+IFZhbHVlVHlwZT47XG5cbi8vIGh0dHBzOi8vaGVscC5saWJyZW9mZmljZS5vcmcvbGF0ZXN0L2VuLVVTL3RleHQvc2NhbGMvMDEvMDQwNjAxOTkuaHRtbFxuY29uc3Qgb3BfcHJpbyA9IFtcbiAgICBbJzonXSwgLy8gcmFuZ2VcbiAgICBbJyEnXSwgLy8gcmFuZ2UgaW50ZXJzZWN0aW9uXG4gICAgWyd+J10sIC8vIHJhbmdlIHVuaW9uXG4gICAgWyd1LisnLCAndS4tJ10sIC8vIHVuYXJ5IC0gZnJvbSByaWdodCB0byBsZWZ0Li4uXG4gICAgWyclJ10sIC8vIHBvc3RmaXgsIC8xMDBcbiAgICBbJ14nXSwgLy8gcG93ZXJcbiAgICBbJyonLCAnLyddLFxuICAgIFsnKycsICctJ10sXG4gICAgWycmJ10sIC8vIHN0cmluZyBjb25jYXRcbiAgICBbJz0nLCAnPD4nLCAnPCcsICc8PScsICc+JywgJz49J10gLy8gY29tcGFyZVxuXTtcblxubGV0IG9wczogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHt9O1xuZm9yKGxldCBpID0gMDsgaSA8IG9wX3ByaW8ubGVuZ3RoOyArK2kpXG4gICAgZm9yKGxldCBvcCBvZiBvcF9wcmlvW2ldIClcbiAgICAgICAgb3BzW29wXSA9IGk7XG5cbmZ1bmN0aW9uIHRva2VubGlzdDJUcmVlKHRva2VuczogVG9rZW5bXSk6IE5vZGUge1xuXG4gICAgaWYoIHRva2Vucy5sZW5ndGggPT09IDEpIHtcblxuICAgICAgICBpZiggdG9rZW5zWzBdLnR5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IG5iID0gK3Rva2Vuc1swXS52YWx1ZS5yZXBsYWNlKCcsJywgJy4nKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTm9kZSggKCkgPT4gbmIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCB0b2tlbnNbMF0udHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgY29uc3Qgc3RyID0gdG9rZW5zWzBdLnZhbHVlLnNsaWNlKDEsLTEpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBOb2RlKCAoKSA9PiBzdHIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCB0b2tlbnNbMF0udHlwZSA9PT0gXCJyYW5nZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vZGUoIChzaGVldDogQ2FsY1NoZWV0KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsZXQgcmF3ID0gc2hlZXQuZ2V0UmFuZ2UodG9rZW5zWzBdLnZhbHVlKS5maXJzdENlbGwucmF3Q29udGVudDtcblxuICAgICAgICAgICAgICAgIGlmKCByYXcgaW5zdGFuY2VvZiBGb3JtdWxhKVxuICAgICAgICAgICAgICAgICAgICByYXcgPSByYXcuZXhlYyhzaGVldCk7IC8vIFRPRE86IGNhY2hlIHJlc3VsdFxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJhdyBhcyBWYWx1ZVR5cGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCI/Pz9cIik7XG4gICAgfVxuXG4gICAgaWYodG9rZW5zWzBdLnZhbHVlID09PSAnKCcgJiYgdG9rZW5zW3Rva2Vucy5sZW5ndGgtMV0udmFsdWUgPT09ICcpJylcbiAgICAgICAgcmV0dXJuIHRva2VubGlzdDJUcmVlKHRva2Vucy5zbGljZSgxLC0xKSApO1xuXG4gICAgbGV0IGN1ciA9IHtcbiAgICAgICAgcHJpb3JpdHk6IG9wX3ByaW8ubGVuZ3RoLFxuICAgICAgICBpZHggICAgIDogLTFcbiAgICB9O1xuXG4gICAgZm9yKGxldCBpID0gdG9rZW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIGlmKCB0b2tlbnNbaV0udHlwZSAhPT0gXCJvcFwiICkgLy8gY2FsbCBub3QgaGFuZGxlZCB5ZXQuLi5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgIGlmKCB0b2tlbnNbaV0udmFsdWUgPT09ICcpJyApIHsgLy8gZ28gdG8gZmlyc3QgJygnXG4gICAgICAgICAgICBpID0gdG9rZW5zLmZpbmRJbmRleCggdCA9PiB0LnR5cGUgPT09ICdvcCcgJiYgdC52YWx1ZSA9PT0gJygnKTtcblxuICAgICAgICAgICAgaWYoIGkgPT09IDApXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAtLWk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhc3NlcnRzIGlmIHVuYXJ5IG9wLlxuICAgICAgICBpZiggdG9rZW5zW2ldLnZhbHVlID09PSAnLScgfHwgdG9rZW5zW2ldLnZhbHVlID09PSAnKycgKSB7XG5cbiAgICAgICAgICAgIGlmKCBpID09PSAwIHx8IHRva2Vuc1tpLTFdLnR5cGUgPT09IFwib3BcIiApIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHVfb3AgPSBgdS4ke3Rva2Vuc1tpXS52YWx1ZX1gO1xuICAgICAgICAgICAgICAgIHRva2Vuc1tpXS52YWx1ZSA9IHVfb3A7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBvcHNbdV9vcF07XG5cbiAgICAgICAgICAgICAgICAvLyBwcmlvcml0eSBpcyByZXZlcnNlZCArIGV2YWx1YXRlZCBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gICAgICAgICAgICAgICAgaWYoIHByaW9yaXR5IDw9IGN1ci5wcmlvcml0eSkge1xuICAgICAgICAgICAgICAgICAgICBjdXIucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgICAgICAgICAgICAgY3VyLmlkeCAgICAgID0gaTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gb3BzW3Rva2Vuc1tpXS52YWx1ZV07XG5cbiAgICAgICAgLy8gcHJpb3JpdHkgaXMgcmV2ZXJzZWQuXG4gICAgICAgIGlmKCBwcmlvcml0eSA8IGN1ci5wcmlvcml0eSkge1xuICAgICAgICAgICAgY3VyLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgICAgICBjdXIuaWR4ICAgICAgPSBpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoIGN1ci5pZHggPT09IC0xKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJz8/PycpO1xuXG4gICAgbGV0IG9wX3Rva2VuID0gdG9rZW5zW2N1ci5pZHhdO1xuICAgIGlmKCBvcF90b2tlbi52YWx1ZSA9PT0gJyUnICkge1xuICAgICAgICBjb25zdCBsZWZ0ICA9IHRva2Vucy5zbGljZSgwLCBjdXIuaWR4KTtcbiAgICAgICAgY29uc3Qgb3AgPSBvcF9pbXBsW29wX3Rva2VuLnZhbHVlIGFzIGtleW9mIHR5cGVvZiBvcF9pbXBsXTtcbiAgICAgICAgcmV0dXJuIG5ldyBOb2RlKFxuICAgICAgICAgICAgb3AsXG4gICAgICAgICAgICB0b2tlbmxpc3QyVHJlZShsZWZ0KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlmKCBvcF90b2tlbi52YWx1ZSA9PT0gJ3UuLScgfHwgIG9wX3Rva2VuLnZhbHVlID09PSAndS4rJyApIHtcblxuICAgICAgICBjb25zdCByaWdodCAgPSB0b2tlbnMuc2xpY2UoY3VyLmlkeCsxKTtcbiAgICAgICAgY29uc3Qgb3AgPSBvcF9pbXBsW29wX3Rva2VuLnZhbHVlIGFzIGtleW9mIHR5cGVvZiBvcF9pbXBsXTtcbiAgICAgICAgcmV0dXJuIG5ldyBOb2RlKFxuICAgICAgICAgICAgb3AsXG4gICAgICAgICAgICB0b2tlbmxpc3QyVHJlZShyaWdodClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBsZWZ0ICA9IHRva2Vucy5zbGljZSgwLCBjdXIuaWR4KTtcbiAgICBjb25zdCByaWdodCA9IHRva2Vucy5zbGljZShjdXIuaWR4KzEpO1xuXG4gICAgY29uc3Qgb3AgPSBvcF9pbXBsW29wX3Rva2VuLnZhbHVlIGFzIGtleW9mIHR5cGVvZiBvcF9pbXBsXTtcblxuICAgIHJldHVybiBuZXcgTm9kZShcbiAgICAgICAgb3AsXG4gICAgICAgIHRva2VubGlzdDJUcmVlKGxlZnQpLFxuICAgICAgICB0b2tlbmxpc3QyVHJlZShyaWdodClcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VfZm9ybXVsYShzdHI6c3RyaW5nKSB7XG5cbiAgICBsZXQgb2Zmc2V0ID0gMTtcbiAgICBsZXQgdG9rZW5zID0gbmV3IEFycmF5PFRva2VuPigpO1xuXG4gICAgd2hpbGUoIG9mZnNldCA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGN1clRva2VuID0gZXh0cmFjdFRva2VuKHN0ciwgb2Zmc2V0KTtcbiAgICAgICAgdG9rZW5zLnB1c2goIGN1clRva2VuICk7XG4gICAgICAgIG9mZnNldCA9IGN1clRva2VuLmVuZDtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gdG9rZW5saXN0MlRyZWUodG9rZW5zKSE7XG5cbiAgICBjb25zdCByYW5nZXMgPSB0b2tlbnMuZmlsdGVyKHQgPT4gdC50eXBlID09PSBcInJhbmdlXCIgKTtcblxuICAgIHJldHVybiBuZXcgRm9ybXVsYShzdHIsIChzaGVldDogQ2FsY1NoZWV0KSA9PiBub2RlLmV2YWwoc2hlZXQpLCByYW5nZXMgKTtcbn0iLCIvL1RPRE86IHdlYnBhY2sgY29uZmlnLi4uXG5pbXBvcnQgTElTUyBmcm9tIFwiLi4vLi4vLi4vbGlicy9MSVNTXCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGxMaXN0LCBkZWZhdWx0Rm9ybWF0IH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuLy9UT0RPOiBzeW50YXggaGlnaGxpZ2h0IDspXG5cbmNvbnN0IGNzcyA9IGBcbiAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgJiBwcmUge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoIDFyZW0gKyA4cHggKyAycHggKTtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGliZXJhdGlvbiBTYW5zJztcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmV4cG9ydCBjbGFzcyBQbGFnZUZvcm11bGEgZXh0ZW5kcyBMSVNTKHtcbiAgICBjc3Ncbn0pIHtcblxuICAgICNpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCggdGhpcy4jaW5wdXQgKTtcbiAgICAgICAgdGhpcy4jaW5wdXQudG9nZ2xlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcblxuICAgICAgICB0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2KSA9PiB7XG4gICAgICAgICAgICBpZihldi5jb2RlICE9PSAnRW50ZXInKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgZXYuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuI3NoZWV0LmdldENlbGxzKHRoaXMuI2lucHV0LnRleHRDb250ZW50ISkuY2VsbHM7XG5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmFkZCggLi4uc2VsZWN0ZWQgKTtcblxuICAgICAgICAgICAgdGhpcy4jc2hlZXQuY3Vyc29yLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLiNzaGVldC5jdXJzb3IuYWRkKCBzZWxlY3RlZFswXSApO1xuXG4gICAgICAgICAgICB0aGlzLiNpbnB1dC5ibHVyKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy9UT0RPLi4uLlxuICAgICAgICB0aGlzLiNpbnB1dC50b2dnbGVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIC8qdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuXG4gICAgICAgIH0pOyovXG4gICAgfVxuXG4gICAgI3NoZWV0ITogQ2FsY1NoZWV0O1xuXG4gICAgc3luY1RvKHNoZWV0OiBDYWxjU2hlZXQpIHtcblxuICAgICAgICB0aGlzLiNzaGVldCA9IHNoZWV0O1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHNoZWV0LnNlbGVjdGlvbjtcblxuICAgICAgICBzZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKF86IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jaW5wdXQudGV4dENvbnRlbnQgPSBzZWxlY3Rpb24ucGxhZ2VfbmFtZSA/PyBcIlwiO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbkxJU1MuZGVmaW5lKCdjYWxjLXBsYWdlJywgUGxhZ2VGb3JtdWxhKTsiLCJpbXBvcnQgeyBSYW5nZU92ZXJsYXkgfSBmcm9tIFwiLi9SYW5nZU92ZXJsYXlcIjtcbmltcG9ydCB7IENhbGNTaGVldCwgQ2VsbCB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbmV4cG9ydCBjbGFzcyBQbGFnZVNlbGVjdG9yIHtcblxuICAgICNvdmVybGF5cyA9IG5ldyBBcnJheTxSYW5nZU92ZXJsYXk+KCk7XG4gICAgI2dldE92ZXJsYXkoaWQ6IG51bWJlcikge1xuICAgICAgICB3aGlsZShpZCA+PSB0aGlzLiNvdmVybGF5cy5sZW5ndGgpXG4gICAgICAgICAgICB0aGlzLiNvdmVybGF5cy5wdXNoKCBuZXcgUmFuZ2VPdmVybGF5KHRoaXMuI3NoZWV0LCBcInNlbGVjdGlvbl9oaWdobGlnaHRcIikgKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuI292ZXJsYXlzW2lkXTtcbiAgICB9XG5cbiAgICAjdXBkYXRlU2VsZWN0aW9uKCkge1xuXG4gICAgICAgIGxldCBzZWxlY3RlZF9jZWxscyA9IHRoaXMuI3NoZWV0LmdldFJhbmdlKCB0aGlzLiNvcmlnX3BvcywgdGhpcy4jZmluYWxfcG9zICkuY2VsbHM7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmNsZWFyKCk7IC8vIHdlIGFkZCBpdC4uLlxuXG4gICAgICAgIGlmKCB0aGlzLiNpc0N0cmwgKSB7XG5cbiAgICAgICAgICAgIC8vIHJlc3RvcmUgaW5pdGlhbCBzdGF0ZS4uLlxuICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmFkZCguLi50aGlzLiNwcmV2X3NlbGVjdGlvbik7XG5cbiAgICAgICAgICAgIC8vVE9ETyBvbmx5IG9yaWdfdGFyZ2V0Li4uXG4gICAgICAgICAgICBpZih0aGlzLiNzaGVldC5zZWxlY3Rpb24uaGFzKCAuLi5zZWxlY3RlZF9jZWxscyApIClcbiAgICAgICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24ucmVtb3ZlKCAuLi5zZWxlY3RlZF9jZWxscyApO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5hZGQoIC4uLnNlbGVjdGVkX2NlbGxzICk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5hZGQoIC4uLnNlbGVjdGVkX2NlbGxzICk7XG5cbiAgICB9XG5cbiAgICAjdXBkYXRlU2VsZWN0aW9uSGlnaGxpZ2h0KCkge1xuXG4gICAgICAgIGNvbnN0IGNlbGxzID0gdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmNlbGxzO1xuICAgICAgICBmb3IobGV0IG92ZXJsYXkgb2YgdGhpcy4jb3ZlcmxheXMpXG4gICAgICAgICAgICBvdmVybGF5LnNldFJhbmdlKG51bGwpO1xuXG4gICAgICAgIGlmKCBjZWxscy5sZW5ndGggPT09IDEgJiYgdGhpcy4jc2hlZXQuY3Vyc29yLmZpcnN0Q2VsbCA9PT0gY2VsbHNbMF0gKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgIHRoaXMuI2dldE92ZXJsYXkoaSkuc2V0UmFuZ2UoIHRoaXMuI3NoZWV0LmdldFJhbmdlKCBjZWxsc1tpXSApICk7XG4gICAgfVxuXG4gICAgI2lzQ3RybCAgICAgICAgITogYm9vbGVhbjtcbiAgICAjc2hlZXQgICAgICAgICAgOiBDYWxjU2hlZXQ7XG4gICAgI29yaWdfdGFyZ2V0ICAgITogSFRNTEVsZW1lbnQ7XG4gICAgI29yaWdfcG9zICAgICAgITogW251bWJlciwgbnVtYmVyXTtcbiAgICAjZmluYWxfcG9zICAgICAhOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgICNwcmV2X3NlbGVjdGlvbiE6IENlbGxbXTtcblxuICAgICNldjJwb3MoZXY6IE1vdXNlRXZlbnQpOiBbbnVtYmVyLG51bWJlcl0ge1xuXG4gICAgICAgIGNvbnN0IGNvbHMgPSBbLi4udGhpcy4jc2hlZXQudGJvZHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5dO1xuICAgICAgICBsZXQgY29sX2lkO1xuICAgICAgICBmb3IoY29sX2lkID0gY29scy5sZW5ndGgtMTsgY29sX2lkID49IDA7IC0tY29sX2lkKSB7XG4gICAgICAgICAgICBpZiggZXYuY2xpZW50WCA+PSBjb2xzW2NvbF9pZF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueCApXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJvd3MgPSBbLi4udGhpcy4jc2hlZXQudGJvZHkuY2hpbGRyZW5dLm1hcCggZSA9PiBlLmNoaWxkcmVuWzBdICk7XG4gICAgICAgIGxldCByb3dfaWQ7XG4gICAgICAgIGZvcihyb3dfaWQgPSByb3dzLmxlbmd0aC0xOyByb3dfaWQgPj0gMDsgLS1yb3dfaWQpIHtcbiAgICAgICAgICAgIGlmKCBldi5jbGllbnRZID49IHJvd3Nbcm93X2lkXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55IClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbcm93X2lkLCBjb2xfaWRdO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHNoZWV0OiBDYWxjU2hlZXQpIHtcblxuICAgICAgICB0aGlzLiNzaGVldCA9IHNoZWV0O1xuXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykhO1xuXG4gICAgICAgIGNvbnN0IG9uX21vdXNlX21vdmUgPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgdGhpcy4jZmluYWxfcG9zID0gdGhpcy4jZXYycG9zKGV2KTtcblxuICAgICAgICAgICAgdGhpcy4jdXBkYXRlU2VsZWN0aW9uKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgc2hlZXQuY3Vyc29yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi5yZXBsYWNlQWxsKCBzaGVldC5nZXRWaXNpYmxlQ2VsbChzaGVldC5jdXJzb3IpICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNoZWV0LnNlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiN1cGRhdGVTZWxlY3Rpb25IaWdobGlnaHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBzaGVldC5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2Ok1vdXNlRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgaWYoIHNoZWV0LnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPT09IHRhcmdldCApICAvLyBhIGNlbGwgYmVpbmcgZWRpdGVkLlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlmKCAhIFtcIlRIXCIsIFwiVERcIl0uaW5jbHVkZXMoIHRhcmdldC50YWdOYW1lICkgKS8vIC4uLlxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lID09PSBcIlRIXCIgJiYgdGFyZ2V0LnRleHRDb250ZW50ID09PSBcIlwiICkgeyAvLyBtb3VzZW1vdmUgZG9lcyBub3RoaW5nLlxuXG4gICAgICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVmID0gYEExOiR7dGhpcy4jc2hlZXQucG9zMnJlZih0aGlzLiNzaGVldC5uYlJvd3MsIHRoaXMuI3NoZWV0Lm5iQ29scyl9YDtcbiAgICAgICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uYWRkKCAuLi50aGlzLiNzaGVldC5nZXRDZWxscyhyZWYpLmNlbGxzICk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuI2lzQ3RybCAgICAgICAgID0gZXYuY3RybEtleTtcbiAgICAgICAgICAgIHRoaXMuI29yaWdfdGFyZ2V0ICAgID0gdGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy4jb3JpZ19wb3MgICAgICAgPSB0aGlzLiNldjJwb3MoZXYpOyAvLyBDYW4gYmUgVEguLi5cbiAgICAgICAgICAgIHRoaXMuI2ZpbmFsX3BvcyAgICAgID0gdGhpcy4jb3JpZ19wb3M7XG4gICAgICAgICAgICB0aGlzLiNwcmV2X3NlbGVjdGlvbiA9IHNoZWV0LnNlbGVjdGlvbi5jZWxscy5zbGljZSgpO1xuXG4gICAgICAgICAgICB0aGlzLiN1cGRhdGVTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25fbW91c2VfbW92ZSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWFpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbl9tb3VzZV9tb3ZlKTtcbiAgICAgICAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxufSIsIi8vVE9ETzogd2VicGFjayBjb25maWcuLi5cbmltcG9ydCBMSVNTIGZyb20gXCIuLi8uLi8uLi9saWJzL0xJU1NcIjtcblxuLy9AdHMtaWdub3JlXG5pbXBvcnQgY3NzIGZyb20gXCIhIXJhdy1sb2FkZXIhLi9pbmRleC5jc3NcIjtcblxuZXhwb3J0IHR5cGUgVmFsdWVUeXBlID0gc3RyaW5nfG51bWJlcnxEYXRlfGJvb2xlYW47XG5leHBvcnQgdHlwZSBSYXdDb250ZW50VHlwZSA9IFZhbHVlVHlwZXxGb3JtdWxhO1xuXG5leHBvcnQgdHlwZSBDZWxsID0gSFRNTFRhYmxlQ2VsbEVsZW1lbnQgJiB7XG4gICAgcmF3Q29udGVudDogUmF3Q29udGVudFR5cGUsXG4gICAgZm9ybWF0OiAodGhpczogQ2VsbCwgdj86IG51bWJlcnxzdHJpbmd8RGF0ZSkgPT4gc3RyaW5nLFxuICAgIGlzX3JvOiBib29sZWFuLFxuICAgIGNlbGwgPzogQ2VsbFxufTtcblxuZnVuY3Rpb24gaXNBY3RpdmUodGFyZ2V0OiBIVE1MRWxlbWVudCkge1xuXG4gICAgcmV0dXJuIHRhcmdldC5tYXRjaGVzKCc6Zm9jdXMnKTtcbi8qXG4gICAgbGV0IGFjdGl2ZSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICB3aGlsZSggYWN0aXZlPy5zaGFkb3dSb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCApXG4gICAgICAgIGFjdGl2ZSA9IGFjdGl2ZS5zaGFkb3dSb290LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICByZXR1cm4gYWN0aXZlID09PSB0YXJnZXQ7Ki9cbn1cblxuZnVuY3Rpb24gb25JbnB1dChldjogRXZlbnQpIHtcblxuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIxMjM0NzQxL3BsYWNlLWNhcmV0LWJhY2std2hlcmUtaXQtd2FzLWFmdGVyLWNoYW5naW5nLWlubmVyaHRtbC1vZi1hLWNvbnRlbnRlZGl0YWJsZS1lbGVtXG5cbiAgICBsZXQgcnJhbmdlID0gd2luZG93LmdldFNlbGVjdGlvbigpIS5nZXRSYW5nZUF0KDApO1xuICAgIGxldCBjID0gcnJhbmdlLnN0YXJ0T2Zmc2V0O1xuXG4gICAgLy9sZXQgdGV4dCA9IFwiXCI7XG4gICAgbGV0IGxlbmd0aCA9IDA7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRhcmdldC5jaGlsZE5vZGVzLmxlbmd0aDsgKytpKSB7XG5cbiAgICAgICAgbGV0IGNoaWxkID0gdGFyZ2V0LmNoaWxkTm9kZXNbaV07XG4gICAgICAgIGlmKCBjaGlsZC5ub2RlVHlwZSAhPT0gTm9kZS5URVhUX05PREUpXG4gICAgICAgICAgICBjaGlsZCA9IGNoaWxkLmNoaWxkTm9kZXNbMF07XG5cbiAgICAgICAgaWYoIHJyYW5nZS5zdGFydENvbnRhaW5lciA9PT0gY2hpbGQgKSB7XG4gICAgICAgICAgICAvL3RleHQgKz0gcC5jaGlsZE5vZGVzW2ldLnRleHRDb250ZW50IS5zbGljZSgwLCBjKTtcbiAgICAgICAgICAgIGxlbmd0aCArPSBjO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy90ZXh0ICs9IHAuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudDtcbiAgICAgICAgbGVuZ3RoICs9IHRhcmdldC5jaGlsZE5vZGVzW2ldLnRleHRDb250ZW50IS5sZW5ndGg7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGlubmVySFRNTFxuICAgIHRhcmdldC50ZXh0Q29udGVudCA9IHRhcmdldC50ZXh0Q29udGVudDtcblxuICAgIGxldCBjaGlsZCE6IENoaWxkTm9kZTtcbiAgICBsZXQgaTtcbiAgICBmb3IoaSA9IDA7IGkgPCB0YXJnZXQuY2hpbGROb2Rlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiggbGVuZ3RoIDw9IHRhcmdldC5jaGlsZE5vZGVzW2ldLnRleHRDb250ZW50IS5sZW5ndGggKSB7XG4gICAgICAgICAgICBjaGlsZCA9IHRhcmdldC5jaGlsZE5vZGVzW2ldO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbGVuZ3RoIC09IHRhcmdldC5jaGlsZE5vZGVzW2ldLnRleHRDb250ZW50IS5sZW5ndGg7XG4gICAgfVxuXG4gICAgaWYoIGNoaWxkLm5vZGVUeXBlICE9PSBOb2RlLlRFWFRfTk9ERSlcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5jaGlsZE5vZGVzWzBdO1xuXG4gICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpITtcblxuICAgIHJhbmdlLnNldFN0YXJ0KGNoaWxkLCBsZW5ndGgpO1xuICAgIHJhbmdlLmNvbGxhcHNlKHRydWUpO1xuICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBzZWwuYWRkUmFuZ2UocmFuZ2UpO1xufVxuXG5mdW5jdGlvbiBwYXJzZUlucHV0KCBzdHI6IHN0cmluZyApOiBSYXdDb250ZW50VHlwZSB7XG5cbiAgICBpZihzdHIgPT09ICdWUkFJJylcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgaWYoc3RyID09PSAnRkFVWCcpXG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIGlmKHN0ci50cmltKCkgPT09ICcnKVxuICAgICAgICByZXR1cm4gc3RyO1xuXG4gICAgaWYoc3RyWzBdID09PSBcIj1cIikge1xuICAgICAgICByZXR1cm4gcGFyc2VfZm9ybXVsYShzdHIpO1xuICAgIH1cblxuICAgIGxldCB0ZXN0X251bWJlciA9IE51bWJlciggc3RyLnJlcGxhY2UoJywnLCAnLicpICk7XG4gICAgaWYoICEgTnVtYmVyLmlzTmFOKCB0ZXN0X251bWJlciApIClcbiAgICAgICAgcmV0dXJuIHRlc3RfbnVtYmVyO1xuICAgIGlmKCBzdHJbc3RyLmxlbmd0aC0xXSA9PT0gXCIlXCIgfHwgc3RyW3N0ci5sZW5ndGgtMV0gPT09IFwi4oKsXCIgKSB7XG4gICAgICAgIHRlc3RfbnVtYmVyID0gTnVtYmVyKCBzdHIuc2xpY2UoMCwtMSkucmVwbGFjZSgnLCcsICcuJykgKTtcbiAgICAgICAgaWYoICEgTnVtYmVyLmlzTmFOKCB0ZXN0X251bWJlciApICkge1xuICAgICAgICAgICAgaWYoIHN0cltzdHIubGVuZ3RoLTFdID09PSBcIuKCrFwiIClcbiAgICAgICAgICAgICAgICByZXR1cm4gdGVzdF9udW1iZXI7XG4gICAgICAgICAgICByZXR1cm4gKyh0ZXN0X251bWJlciAvIDEwMCkudG9QcmVjaXNpb24oNyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYXJ0cyA9IHN0ci5zcGxpdCgnLycpO1xuICAgIGlmKHBhcnRzLmxlbmd0aCA8PSAzKSB7XG5cbiAgICAgICAgbGV0IHRlc3RfZGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgK3BhcnRzWzJdID8/IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgICtwYXJ0c1sxXS0xLFxuICAgICAgICAgICAgK3BhcnRzWzBdXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYoIHRlc3RfZGF0ZS50b1N0cmluZygpICE9PSBcIkludmFsaWQgRGF0ZVwiIClcbiAgICAgICAgICAgIHJldHVybiB0ZXN0X2RhdGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbn1cblxuY2xhc3MgU3RhdGU8VD4ge1xuXG4gICAgI3N0YXRlIDogVHxudWxsID0gbnVsbDtcbiAgICAjdGFyZ2V0OiBFdmVudFRhcmdldDtcbiAgICAjbmFtZSAgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQ6IEV2ZW50VGFyZ2V0LCBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy4jdGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLiNuYW1lICAgPSBuYW1lO1xuICAgIH1cblxuICAgIGdldCBzdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3N0YXRlO1xuICAgIH1cblxuICAgIHNldCBzdGF0ZShzdGF0ZTogVHxudWxsKSB7XG5cbiAgICAgICAgaWYoIHRoaXMuI3N0YXRlID09PSBzdGF0ZSlcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBsZXQgcHJldl9zdGF0ZSA9IHRoaXMuI3N0YXRlO1xuICAgICAgICB0aGlzLiNzdGF0ZSA9IHN0YXRlO1xuICAgICAgICBcblxuICAgICAgICBpZiggcHJldl9zdGF0ZSAhPT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMuI3RhcmdldC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoYCR7dGhpcy4jbmFtZX1fZW5kYCwge2RldGFpbDogcHJldl9zdGF0ZX0pICk7ICAgICAgICAgICAgXG5cbiAgICAgICAgaWYoIHN0YXRlICE9PSBudWxsIClcbiAgICAgICAgICAgIHRoaXMuI3RhcmdldC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoYCR7dGhpcy4gI25hbWV9X3N0YXJ0YCwge2RldGFpbDogc3RhdGV9KSApO1xuICAgIH1cbn1cblxuY29uc3QgU3RhdGVzID0ge1xuICAgIFwiY2VsbF9lZGl0XCI6IFN0YXRlPENlbGw+LFxuICAgIFwicmVjb3B5XCIgICA6IFN0YXRlPENlbGxMaXN0PlxuIH0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjbGFzcyBDYWxjU2hlZXQgZXh0ZW5kcyBMSVNTKHtcbiAgICBjc3MsXG4gICAgYXR0cmlidXRlczogW1wiY29sc1wiLCBcInJvd3NcIiwgXCJyb1wiXVxufSkge1xuXG4gICAgc3RhdGVzID0gT2JqZWN0LmZyb21FbnRyaWVzKCBPYmplY3QuZW50cmllcyhTdGF0ZXMpLm1hcCggKFtuLHNdKSA9PiBbbiwgbmV3IHModGhpcy5ob3N0LCBuKV0gYXMgY29uc3QgKSk7XG5cblxuICAgIC8vVE9ETzogUk8gcHJvcCA/XG4gICAgI2N1cnNvciAgICA9IG5ldyBDZWxsTGlzdCh0aGlzLCBbXSk7XG4gICAgI3NlbGVjdGlvbjogQ2VsbExpc3QgPSBuZXcgQ2VsbExpc3QodGhpcywgW10pO1xuICAgICNwbGFnZV9zZWxlY3RvciA9IG5ldyBQbGFnZVNlbGVjdG9yKHRoaXMpO1xuXG4gICAgI2Zvcm1hdF9tbmdyID0gbmV3IEZvcm1hdE1hbmFnZXIodGhpcyk7XG5cbiAgICBzdGF0aWMgZ2V0U2hlZXRGcm9tQ2VsbChjZWxsOiBDZWxsKSB7XG4gICAgICAgIHJldHVybiBMSVNTLmdldExJU1NTeW5jPENhbGNTaGVldD4oIChjZWxsLmdldFJvb3ROb2RlKCkgYXMgU2hhZG93Um9vdCkuaG9zdCApO1xuICAgIH1cblxuICAgIGdldCBjdXJzb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjdXJzb3I7XG4gICAgfVxuICAgIGdldCBzZWxlY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzZWxlY3Rpb247XG4gICAgfVxuXG4gICAgb3ZlcnJpZGUgZ2V0IGNvbnRlbnQoKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5jb250ZW50O1xuICAgIH1cblxuICAgIHNldFJlY3QodGFyZ2V0OiBIVE1MRWxlbWVudCwgW3gseSx3LGhdOiByZWFkb25seSBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSkge1xuXG4gICAgICAgIGNvbnN0IHRibF9vZmZzZXQgPSB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvcigndGFibGUnKSEub2Zmc2V0VG9wO1xuXG4gICAgICAgIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eSgndG9wJyAgICwgYCR7dGJsX29mZnNldCArIHl9cHhgKTtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KCdoZWlnaHQnLCBgJHtofXB4YCk7XG5cbiAgICAgICAgdGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KCdsZWZ0JyAgICwgYCR7eH1weGApO1xuICAgICAgICB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkoJ3dpZHRoJywgYCR7d31weGApO1xuXG4gICAgfVxuXG4gICAgZ2V0UmVjdChjZWxsczogQ2VsbExpc3R8Q2VsbFtdKSB7XG5cbiAgICAgICAgY2VsbHMgPSBcImNlbGxzXCIgaW4gY2VsbHMgPyBjZWxscy5jZWxscyA6IGNlbGxzO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gY2VsbHNbMF07XG4gICAgICAgIGNvbnN0IGVuZCAgID0gY2VsbHNbY2VsbHMubGVuZ3RoLTFdO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHN0YXJ0Lm9mZnNldExlZnQsXG4gICAgICAgICAgICBzdGFydC5vZmZzZXRUb3AsXG4gICAgICAgICAgICBlbmQub2Zmc2V0TGVmdCArIGVuZC5jbGllbnRXaWR0aCAtIHN0YXJ0Lm9mZnNldExlZnQgKyAxLFxuICAgICAgICAgICAgZW5kLm9mZnNldFRvcCArIGVuZC5jbGllbnRIZWlnaHQgLSBzdGFydC5vZmZzZXRUb3AgKyAxXG4gICAgICAgIF0gYXMgY29uc3Q7XG4gICAgfVxuXG4gICAgcmVsYXRpdmVUbyhjZWxsOiBDZWxsLCByb3dfZGlmZjogbnVtYmVyLCBjb2xfZGlmZjogbnVtYmVyKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgW3JvdywgY29sXSA9IHRoaXMuY2VsbFBvcyhjZWxsKTtcblxuICAgICAgICByb3cgKz0gcm93X2RpZmY7XG4gICAgICAgIGNvbCArPSBjb2xfZGlmZjtcblxuICAgICAgICAvLyBmb3Igbm9ybWFsIDogZ2V0IHN0dWNrIGluc2lkZSBncmlkLlxuICAgICAgICBpZiggcm93IDwgMSlcbiAgICAgICAgICAgIHJvdyA9IDE7XG4gICAgICAgIGlmKCByb3cgPj0gdGhpcy4jdGJvZHkuY2hpbGRyZW4ubGVuZ3RoIClcbiAgICAgICAgICAgIHJvdyA9IHRoaXMuI3Rib2R5LmNoaWxkcmVuLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgaWYoIGNvbCA8IDEpXG4gICAgICAgICAgICBjb2wgPSAxO1xuICAgICAgICBpZiggY29sID49IHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW4ubGVuZ3RoIClcbiAgICAgICAgICAgIGNvbCA9IHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW4ubGVuZ3RoIC0gMTtcblxuICAgICAgICByZXR1cm4gdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlbltjb2xdIGFzIENlbGw7XG4gICAgfVxuXG4gICAgLy9UT0RPOiAyRC4uLlxuICAgICNwYXN0ZWJpbjogQ2VsbExpc3QgfCBudWxsID0gbnVsbDtcblxuICAgICNmb3JtdWxhX3JlZnMgPSBuZXcgQXJyYXk8Rm9ybXVsYVJlZj4oKTtcbiAgICAjZ2V0Rm9ybXVsYVJlZihpOiBudW1iZXIpIHtcbiAgICAgICAgd2hpbGUoIGkgPj0gdGhpcy4jZm9ybXVsYV9yZWZzLmxlbmd0aClcbiAgICAgICAgICAgIHRoaXMuI2Zvcm11bGFfcmVmcy5wdXNoKCBuZXcgRm9ybXVsYVJlZih0aGlzKSApO1xuXG4gICAgICAgIHJldHVybiB0aGlzLiNmb3JtdWxhX3JlZnNbaV07XG4gICAgfVxuICAgICNjbGVhckZvcm11bGFSZWZzKCkge1xuICAgICAgICBmb3IobGV0IHJlZiBvZiB0aGlzLiNmb3JtdWxhX3JlZnMpXG4gICAgICAgICAgICByZWYuc2V0UmFuZ2UobnVsbCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgY29uc3QgY3Vyc29yID0gbmV3IFJhbmdlT3ZlcmxheSh0aGlzLCBcImN1cnNvclwiKTtcbiAgICAgICAgY29uc3QgcmVjb3B5ID0gbmV3IFJlY29weUhhbmRsZSh0aGlzKTtcbiAgICAgICAgY29uc3QgY29weSAgID0gbmV3IFJhbmdlT3ZlcmxheSh0aGlzLCBcImNvcHlfaGlnaGxpZ2h0XCIpO1xuXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKSE7XG5cbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ2NlbGxfZWRpdF9lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNjbGVhckZvcm11bGFSZWZzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBsYXN0X3JlY29weV90YXJnZXQ6IENlbGx8bnVsbCA9IG51bGw7XG4gICAgICAgIGxldCBsYXN0X3JlY29weV9kaXIgICA6IFtudW1iZXIsIG51bWJlcl18bnVsbCA9IG51bGxcblxuICAgICAgICBjb25zdCBvbl9yZWNvcHlfbW92ZSA9IChldjogTW91c2VFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICBsZXQgY2VsbHMgPSAodGhpcy5zdGF0ZXMucmVjb3B5LnN0YXRlIGFzIENlbGxMaXN0KS5jZWxscztcbiAgICAgICAgICAgIGNvbnN0IHNyYyA9IGNlbGxzW2NlbGxzLmxlbmd0aC0xXTtcblxuICAgICAgICAgICAgbGV0IHBvcyA9IHNyYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgICAgbGV0IGRfcHggPSBldi5jbGllbnRYIC0gKHBvcy54ICsgcG9zLndpZHRoIC8yKTtcbiAgICAgICAgICAgIGxldCBkX3B5ID0gZXYuY2xpZW50WSAtIChwb3MueSArIHBvcy5oZWlnaHQvMik7XG5cbiAgICAgICAgICAgIGxldCBkX3ggPSAwO1xuICAgICAgICAgICAgbGV0IGRfeSA9IE1hdGguc2lnbihkX3B5KTtcblxuICAgICAgICAgICAgaWYoIE1hdGguYWJzKGRfcHgpID4gTWF0aC5hYnMoZF9weSkgKSB7XG4gICAgICAgICAgICAgICAgZF94ID0gTWF0aC5zaWduKGRfcHgpO1xuICAgICAgICAgICAgICAgIGRfeSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBwcmV2ID0gc3JjO1xuICAgICAgICAgICAgbGV0IGN1ciAgPSBzcmM7XG5cbiAgICAgICAgICAgIGxldCBkaWZmX3gsIGRpZmZfeTtcblxuICAgICAgICAgICAgZG8ge1xuXG4gICAgICAgICAgICAgICAgcHJldj0gY3VyO1xuICAgICAgICAgICAgICAgIGN1ciA9IHRoaXMucmVsYXRpdmVUbyhwcmV2LCBkX3ksIGRfeCk7XG5cbiAgICAgICAgICAgICAgICBpZiggY3VyID09PSBwcmV2KVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGxldCBwb3NfY3VyID0gY3VyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIGRpZmZfeCA9IGV2LmNsaWVudFggLSAocG9zX2N1ci54ICsgcG9zX2N1ci53aWR0aCAvMik7XG4gICAgICAgICAgICAgICAgZGlmZl95ID0gZXYuY2xpZW50WSAtIChwb3NfY3VyLnkgKyBwb3NfY3VyLmhlaWdodC8yKTtcblxuICAgICAgICAgICAgfSB3aGlsZSggZGlmZl94ICogZF94ICsgZGlmZl95ICogZF95ID4gMCApO1xuXG4gICAgICAgICAgICBsYXN0X3JlY29weV90YXJnZXQgPSBwcmV2O1xuICAgICAgICAgICAgbGFzdF9yZWNvcHlfZGlyICAgID0gW2RfeCxkX3ldO1xuXG4gICAgICAgICAgICBsZXQgYmVnID0gc3JjO1xuICAgICAgICAgICAgbGV0IGVuZCA9IHByZXY7XG4gICAgICAgICAgICBpZiggc3JjLm9mZnNldExlZnQgPiBwcmV2Lm9mZnNldExlZnQgfHwgc3JjLm9mZnNldFRvcCA+IHByZXYub2Zmc2V0VG9wIClcbiAgICAgICAgICAgICAgICBbYmVnLCBlbmRdID0gW2VuZCwgYmVnXTtcblxuICAgICAgICAgICAgLy9UT0RPOiBoaWdobGlnaHQuLi5cbiAgICAgICAgICAgIHRoaXMuI2NsZWFyRm9ybXVsYVJlZnMoKTtcbiAgICAgICAgICAgIHRoaXMuI2dldEZvcm11bGFSZWYoMSkuc2V0UmFuZ2UoIHRoaXMuZ2V0UmFuZ2UoYmVnLCBlbmQpICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVjb3B5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2KSA9PiB7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXRlcy5yZWNvcHkuc3RhdGUgPSB0aGlzLiNzZWxlY3Rpb247XG5cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbl9yZWNvcHlfbW92ZSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgW2RfeCwgZF95XSA9ICBsYXN0X3JlY29weV9kaXIhO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxzID0gKHRoaXMuc3RhdGVzLnJlY29weS5zdGF0ZSBhcyBDZWxsTGlzdCkuY2VsbHM7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3JjID0gY2VsbHNbY2VsbHMubGVuZ3RoLTFdO1xuXG4gICAgICAgICAgICAgICAgbGV0IG5iID0gMDtcblxuICAgICAgICAgICAgICAgIGlmKCBsYXN0X3JlY29weV90YXJnZXQgIT09IHNyYykgeyAvLyBjb3B5Li4uXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1ciA9IHNyYztcbiAgICAgICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgKytuYjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY3VyID0gdGhpcy5yZWxhdGl2ZVRvKGN1ciwgZF95LCBkX3gpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29udGVudDogUmF3Q29udGVudFR5cGV8Q2VsbCA9IHNyYztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCB0eXBlb2YgY29udGVudC5yYXdDb250ZW50ID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSAoc3JjLnJhd0NvbnRlbnQgYXMgbnVtYmVyKSArIG5iKihkX3ggKyBkX3kpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiggY29udGVudC5yYXdDb250ZW50IGluc3RhbmNlb2YgRGF0ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gbmV3IERhdGUoc3JjLnJhd0NvbnRlbnQgYXMgRGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5zZXREYXRlKCBjb250ZW50LmdldERhdGUoKSArIG5iKihkX3ggKyBkX3kpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENlbGxMaXN0KHRoaXMsIFtjdXJdKS5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ci5jbGFzc05hbWUgPSBzcmMuY2xhc3NOYW1lOyAvL1RPRE86IGZvcm1hdC4uLlxuXG5cbiAgICAgICAgICAgICAgICAgICAgfSB3aGlsZSggY3VyIT09IGxhc3RfcmVjb3B5X3RhcmdldCApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuI2NsZWFyRm9ybXVsYVJlZnMoKTsgLy8gcmVjb3B5XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZXMucmVjb3B5LnN0YXRlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBsYXN0X3JlY29weV90YXJnZXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGxhc3RfcmVjb3B5X2RpciAgICA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgbWFpbi5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uX3JlY29weV9tb3ZlKTtcblxuICAgICAgICAgICAgfSwge29uY2U6IHRydWV9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3JlY29weV9zdGFydCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdyZWNvcHknKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdyZWNvcHlfZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5yZW1vdmUoJ3JlY29weScpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuI2N1cnNvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXYpID0+IHtcblxuICAgICAgICAgICAgaWYoIHRoaXMuI2N1cnNvci5sZW5ndGggIT09IDEgKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ3Vyc29yIGhhcyBpbnZhbGlkIG51bWJlciBvZiBjZWxscycpO1xuXG4gICAgICAgICAgICBjdXJzb3Iuc2V0UmFuZ2UoIG5ldyBDZWxsTGlzdCh0aGlzLCBbdGhpcy5nZXRWaXNpYmxlQ2VsbCh0aGlzLiNjdXJzb3IpXSkgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jc2VsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldikgPT4ge1xuXG4gICAgICAgICAgICBmb3IoIGxldCBjZWxsIG9mIHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGlnaGxpZ2h0JykgKVxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gdGhpcy4jc2VsZWN0aW9uLmNlbGxzO1xuXG4gICAgICAgICAgICBpZiggY2VsbHMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgZm9yKCBsZXQgY2VsbCBvZiBjZWxscyApIHtcblxuICAgICAgICAgICAgICAgIGlmKCBjZWxscy5sZW5ndGggIT09IDEpXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgW3JvdywgY29sXSA9IHRoaXMuI2NlbGxQb3MoY2VsbCk7XG4gICAgICAgICAgICAgICAgdGhpcy4jdGJvZHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bY29sXS5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVjb3B5LnNldFJhbmdlKHRoaXMuI3NlbGVjdGlvbik7XG5cbiAgICAgICAgICAgIC8vIG9ubHkgaWYgc2ltcGxlLi4uXG4gICAgICAgICAgICAvLyBjb25zdCBsYXN0ID0gY2VsbHNbY2VsbHMubGVuZ3RoLTFdO1xuICAgICAgICAgICAgLy8gcG9pbnRlci4uLlxuICAgICAgICB9KTtcblxuICAgICAgICAvL1RPRE86IG1vdmUgb3V0ID9cbiAgICAgICAgY29uc3QgZm9ybXVsYV9iYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybXVsYV9iYXIuY2xhc3NMaXN0LmFkZCgndG9vbGJhcicpO1xuXG4gICAgICAgICggYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBwbGFnZSA9IGF3YWl0IExJU1MuYnVpbGQoXCJjYWxjLXBsYWdlXCIpO1xuICAgICAgICAgICAgcGxhZ2Uuc3luY1RvKHRoaXMpO1xuICAgICAgICAgICAgZm9ybXVsYV9iYXIuYXBwZW5kKCBwbGFnZS5ob3N0ICk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZvcm11bGEgPSBhd2FpdCBMSVNTLmJ1aWxkKFwiY2FsYy1mb3JtdWxhXCIpO1xuICAgICAgICAgICAgZm9ybXVsYS5zeW5jVG8odGhpcyk7XG4gICAgICAgICAgICBmb3JtdWxhX2Jhci5hcHBlbmQoIGZvcm11bGEuaG9zdCApO1xuXG4gICAgICAgIH0pKCk7XG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoZm9ybXVsYV9iYXIpO1xuXG4gICAgICAgIHRoaXMuI2luaXRHcmlkKCsodGhpcy5hdHRycy5yb3dzID8/IDEpLCArKHRoaXMuYXR0cnMuY29scyA/PyAxKSApO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldikgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIC8vIHRoZSBjZWxsIGlzIGJlaW5nIGVkaXRlZC4uLlxuICAgICAgICAgICAgaWYoIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSA9PT0gXCJURFwiIClcbiAgICAgICAgICAgICAgICB0aGlzLiNjdXJzb3IucmVwbGFjZUFsbCggdGFyZ2V0IGFzIENlbGwgKTtcblxuICAgICAgICAgICAgLy9UT0RPOiBub3QgY29ycmVjdC4uLlxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lID09PSBcIlRIXCIgJiYgdGFyZ2V0LnRleHRDb250ZW50ICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2V0UmFuZ2UodGFyZ2V0LnRleHRDb250ZW50ISkuZmlyc3RDZWxsO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jY3Vyc29yLnJlcGxhY2VBbGwoY2VsbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCAoZXYpID0+IHtcblxuICAgICAgICAgICAgbGV0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lICE9PSBcIlREXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiggdGhpcy5hdHRycy5ybyAhPT0gXCJ0cnVlXCIgJiYgKHRhcmdldCBhcyBDZWxsKS5pc19ybyAhPT0gdHJ1ZSApIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQudG9nZ2xlQXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIHRhcmdldC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2OiBLZXlib2FyZEV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGlmKCBldi5jb2RlLnN0YXJ0c1dpdGgoJ0Fycm93JykgKSB7XG5cbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY3VyID0gdGhpcy5jdXJzb3IuY2VsbHM7XG4gICAgICAgICAgICAgICAgaWYoIGN1ci5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGxldCBkX3JvdyA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IGRfY29sID0gMDtcblxuICAgICAgICAgICAgICAgIGlmKCBldi5jb2RlID09PSAnQXJyb3dMZWZ0JylcbiAgICAgICAgICAgICAgICAgICAgLS1kX2NvbDtcbiAgICAgICAgICAgICAgICBpZiggZXYuY29kZSA9PT0gJ0Fycm93UmlnaHQnKVxuICAgICAgICAgICAgICAgICAgICArK2RfY29sO1xuICAgICAgICAgICAgICAgIGlmKCBldi5jb2RlID09PSAnQXJyb3dVcCcpXG4gICAgICAgICAgICAgICAgICAgIC0tZF9yb3c7XG4gICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09ICdBcnJvd0Rvd24nKVxuICAgICAgICAgICAgICAgICAgICArK2Rfcm93O1xuXG4gICAgICAgICAgICAgICAgbGV0IG5leHQ6IENlbGw7XG4gICAgICAgICAgICAgICAgaWYoIGV2LmN0cmxLZXkgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHByZXYgICA9IGN1clswXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnNvciA9IHRoaXMucmVsYXRpdmVUbyhwcmV2LCBkX3JvdywgZF9jb2wpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKCBwcmV2LnJhd0NvbnRlbnQgIT09IHVuZGVmaW5lZCAmJiBjdXJzb3IucmF3Q29udGVudCAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlKCBwcmV2ICE9PSBjdXJzb3IgJiYgY3Vyc29yLnJhd0NvbnRlbnQgIT09IHVuZGVmaW5lZCkgeyAvLyB3ZSByZWFjaGVkIHRoZSBlbmQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldiAgID0gY3Vyc29yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvciA9IHRoaXMucmVsYXRpdmVUbyhwcmV2LCBkX3JvdywgZF9jb2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gcHJldjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlKCBwcmV2ICE9PSBjdXJzb3IgJiYgY3Vyc29yLnJhd0NvbnRlbnQgPT09IHVuZGVmaW5lZCkgeyAvLyB3ZSByZWFjaGVkIHRoZSBlbmQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldiAgID0gY3Vyc29yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvciA9IHRoaXMucmVsYXRpdmVUbyhwcmV2LCBkX3JvdywgZF9jb2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbmV4dCA9IGN1cnNvcjtcbiAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgICAgbmV4dCA9IHRoaXMucmVsYXRpdmVUbyggY3VyWzBdLCBkX3JvdywgZF9jb2wpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuI3Rib2R5LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJzb3IucmVwbGFjZUFsbChuZXh0KTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbm8gZWRpdGlvbiBhbGxvd2VkLi4uXG4gICAgICAgICAgICBpZiggdGhpcy5hdHRycy5ybyA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIGlmKCB0YXJnZXQgPT09IHRoaXMuI3Rib2R5ICkge1xuICAgICAgICAgICAgICAgIGlmKCBldi5jb2RlID09PSBcIktleVZcIiAmJiBldi5jdHJsS2V5ICYmIHRoaXMuI3Bhc3RlYmluICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLiNwYXN0ZWJpbi5jZWxscztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jc2VsZWN0aW9uLmNvbnRlbnQgPSBkYXRhO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvcHkgZm9ybWF0Li4uIFRPRE8gdXRpbGl0eSB0aGluZ3kuLi5cbiAgICAgICAgICAgICAgICAgICAgaWYoICEgZXYuc2hpZnRLZXkgfHwgISBldi5hbHRLZXkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcmMgPSB0aGlzLiNwYXN0ZWJpbi5jZWxscztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRzdCA9IHRoaXMuI3NlbGVjdGlvbi5jZWxscztcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7ICsraSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkc3RbaV0uY2xhc3NOYW1lID0gc3JjW2ldLmNsYXNzTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1RPRE86IGFkZCBmb3JtYXQuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiggKCBldi5rZXkgPT09IFwiY1wiIHx8IGV2LmtleSA9PT0gXCJ4XCIpICYmIGV2LmN0cmxLZXkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29weS5zZXRSYW5nZSh0aGlzLiNzZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAvLyBXSFkgPz8/XG4gICAgICAgICAgICAgICAgICAgIC8vaC5zdHlsZS5zZXRQcm9wZXJ0eSgndG9wJyAgICwgYCR7c2VsZWN0aW9uWzBdLm9mZnNldFRvcH1weGApO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3Bhc3RlYmluID0gdGhpcy4jc2VsZWN0aW9uLmRlZXBDbG9uZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKCBldi5rZXkgPT09IFwieFwiICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4jc2VsZWN0aW9uLmRlbGV0ZUZvcm1hdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4jc2VsZWN0aW9uLmRlbGV0ZUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiggZXYua2V5ID09PSBcIkNvbnRyb2xcIiB8fCBldi5rZXkgPT09IFwiU2hpZnRcIiB8fCBldi5rZXkgPT09IFwiQWx0XCIgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8gaWdub3JlXG4gICAgICAgICAgICAgICAgfSBpZiggZXYuY29kZSA9PT0gXCJEZWxldGVcIiApIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5kZWxldGVDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGlmKCBldi5jb2RlID09PSBcIkVudGVyXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZWQgZWxzZXdoZXJlXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGV2LmN0cmxLZXkpIHsgLy8gaWdub3JlIGN0cmxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHsgLy8gd2Ugc3RhcnQgZWRpdGluZy4uLlxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1ciA9IHRoaXMuY3Vyc29yLmNlbGxzO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKCBjdXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyWzBdLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChcImRibGNsaWNrXCIsIHtidWJibGVzOiB0cnVlfSkgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1clswXS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiggdGFyZ2V0ICE9PSB0aGlzLiN0Ym9keSAmJiBldi5jb2RlID09PSAnRW50ZXInICYmIGV2LnNoaWZ0S2V5IClcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvci5cblxuICAgICAgICAgICAgaWYoZXYuY29kZSA9PT0gXCJFbnRlclwiKSB7IC8vVE9ETzogRW50ZXIgaXMgZm9yIGN1cnJlbnQgcGxhZ2UuLi5cbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY3VyID0gdGhpcy5jdXJzb3IuY2VsbHM7XG4gICAgICAgICAgICAgICAgaWYoIGN1ci5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGxldCBbcm93LGNvbF0gPSB0aGlzLmNlbGxQb3MoIGN1clswXSApO1xuXG4gICAgICAgICAgICAgICAgKytyb3c7XG4gICAgICAgICAgICAgICAgaWYoIHJvdyA+PSB0aGlzLiN0Ym9keS5jaGlsZHJlbi5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICsrY29sO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiggY29sID49IHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW4ubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICBjb2wgPSAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlbltjb2xdIGFzIENlbGw7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiN0Ym9keS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3Vyc29yLnJlcGxhY2VBbGwobmV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBvbklucHV0MiA9IChldjogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2NsZWFyRm9ybXVsYVJlZnMoKTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGlmKGV2LmRldGFpbCAhPT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICBvbklucHV0KGV2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vVE9ETzogaGVyZS4uLlxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIChldikgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGNvcHkuc2V0UmFuZ2UobnVsbCk7XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSAhPT0gXCJURFwiKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5zdGF0ZXMuY2VsbF9lZGl0LnN0YXRlID0gdGFyZ2V0IGFzIENlbGw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNlbGxfZWRpdF9zdGFydFwiLCAoZXY6IEN1c3RvbUV2ZW50PENlbGw+KSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QudG9nZ2xlKFwiY2VsbF9lZGl0XCIsIHRydWUpO1xuXG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZXYuZGV0YWlsO1xuXG4gICAgICAgICAgICBpZihjZWxsLnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBGb3JtdWxhKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzdHIgPSBjZWxsLnJhd0NvbnRlbnQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBjb25zdCByYW5nZXMgPSBjZWxsLnJhd0NvbnRlbnQucmFuZ2VzVG9rZW47XG5cbiAgICAgICAgICAgICAgICBsZXQgY2hpbGRyZW46IChzdHJpbmd8SFRNTEVsZW1lbnQpW10gPSBbc3RyXTtcblxuICAgICAgICAgICAgICAgIGxldCByYW5nZXNfY29sb3JzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge307XG4gICAgICAgICAgICAgICAgbGV0IGN1cl9vZmZzZXQgPSAwO1xuXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHJhbmdlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3RyID0gY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoLTFdIGFzIHN0cmluZztcblxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGgtMV0gPSBzdHIuc2xpY2UoMCwgcmFuZ2VzW2ldLmJlZyAtIGN1cl9vZmZzZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlX25hbWUgPSByYW5nZXNbaV0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmKCAhIChyYW5nZV9uYW1lIGluIHJhbmdlc19jb2xvcnMpIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlc19jb2xvcnNbcmFuZ2VfbmFtZV0gPSBpJTg7XG5cbiAgICAgICAgICAgICAgICAgICAgcy5jbGFzc0xpc3QuYWRkKCdmb3JtdWxhX2hpZ2hsaWdodCcsIGBoaWdobGlnaHRfJHtyYW5nZXNfY29sb3JzW3JhbmdlX25hbWVdfWApOyAvL1RPRE8uLi5cbiAgICAgICAgICAgICAgICAgICAgcy50ZXh0Q29udGVudCA9IHJhbmdlc1tpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW4ucHVzaCggcyApOyAvLyByYW5nZS4uLlxuXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goIHN0ci5zbGljZShyYW5nZXNbaV0uZW5kIC0gY3VyX29mZnNldCkgKTtcbiAgICAgICAgICAgICAgICAgICAgY3VyX29mZnNldCA9IHJhbmdlc1tpXS5lbmQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2VsbC5yZXBsYWNlQ2hpbGRyZW4oIC4uLmNoaWxkcmVuICk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCByYW5nZXNfbmFtZXMgPSBPYmplY3Qua2V5cyhyYW5nZXNfY29sb3JzKTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmFuZ2VzX25hbWVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gcmFuZ2VzX25hbWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWYgPSB0aGlzLiNnZXRGb3JtdWxhUmVmKGkpO1xuICAgICAgICAgICAgICAgICAgICByZWYuc2V0Q29sb3IoIHJhbmdlc19jb2xvcnNbcmFuZ2VdICk7XG4gICAgICAgICAgICAgICAgICAgIHJlZi5zZXRSYW5nZSggdGhpcy5nZXRSYW5nZShyYW5nZSkgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIG9uSW5wdXQyICk7IC8vIHJlbW92ZSBjb2xvcnMuLi5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IEZvcm1hdHMuZGVmYXVsdC5jYWxsKGNlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNlbGxfZWRpdF9lbmRcIiwgKGV2OiBDdXN0b21FdmVudDxDZWxsPikgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LnRvZ2dsZShcImNlbGxfZWRpdFwiLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBldi5kZXRhaWw7XG5cbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIG9uSW5wdXQyKTsgLy8gdG8gYmUgc2FmZVxuICAgICAgICAgICAgY2VsbC50b2dnbGVBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgZmFsc2UpO1xuXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJsZWF2ZSBlZGl0XCIsIGNlbGwudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgbmV3IENlbGxMaXN0KHRoaXMsIFtjZWxsXSkuY29udGVudCA9IGNlbGwudGV4dENvbnRlbnQhO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgICAgICAgLy8gbGVhdmVcbiAgICAgICAgICAgIHRoaXMuI3NlbGVjdGlvbi5jbGVhcigpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGV2ID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgIT09IFwiVERcIilcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGVzLmNlbGxfZWRpdC5zdGF0ZSA9IG51bGw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKCB0aGlzLm5iUm93cyA+PSAxICYmIHRoaXMubmJDb2xzID49IDEpXG4gICAgICAgICAgICB0aGlzLmN1cnNvci5yZXBsYWNlQWxsKCB0aGlzLmdldFJhbmdlKFwiQTFcIikgKTtcbiAgICB9XG5cbiAgICBnZXRWaXNpYmxlQ2VsbChjOiBDZWxsfENlbGxMaXN0KTogQ2VsbCB7XG4gICAgICAgIGlmKGMgaW5zdGFuY2VvZiBDZWxsTGlzdClcbiAgICAgICAgICAgIGMgPSBjLmZpcnN0Q2VsbDtcblxuICAgICAgICByZXR1cm4gYy5jZWxsID8/IGM7XG4gICAgfVxuXG4gICAgY2VsbFBvcyhjZWxsOiBIVE1MVGFibGVDZWxsRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY2VsbFBvcyhjZWxsKTtcbiAgICB9XG5cbiAgICAjY2VsbFBvcyhjZWxsOiBIVE1MVGFibGVDZWxsRWxlbWVudCkge1xuXG4gICAgICAgIGlmKCBcInBvc1wiIGluIGNlbGwpXG4gICAgICAgICAgICByZXR1cm4gY2VsbC5wb3MgYXMgW251bWJlciwgbnVtYmVyXTtcblxuICAgICAgICBjb25zdCBjb2wgPSBbLi4uY2VsbC5wYXJlbnRFbGVtZW50IS5jaGlsZHJlbl0uZmluZEluZGV4KCBjID0+IGMgPT09IGNlbGwpO1xuICAgICAgICBjb25zdCByb3cgPSBbLi4uY2VsbC5wYXJlbnRFbGVtZW50IS5wYXJlbnRFbGVtZW50IS5jaGlsZHJlbl0uZmluZEluZGV4KCByID0+IHIgPT09IGNlbGwucGFyZW50RWxlbWVudCEpO1xuXG4gICAgICAgIHJldHVybiBbcm93LCBjb2xdIGFzIGNvbnN0O1xuICAgIH1cblxuICAgICN0Ym9keSE6IEhUTUxUYWJsZVNlY3Rpb25FbGVtZW50O1xuICAgIGdldCB0Ym9keSgpIHsgcmV0dXJuIHRoaXMuI3Rib2R5OyB9XG5cbiAgICByZXNpemUobmJyb3dzOiBudW1iZXIsIG5iY29sczogbnVtYmVyKSB7XG5cbiAgICAgICAgY29uc3QgY29sX2h0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBjb2xfaHRtbC5hcHBlbmQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJykgKTtcblxuICAgICAgICBjb25zdCB0Ym9keSA9IHRoaXMuI3Rib2R5O1xuICAgICAgICB0Ym9keS5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgICAgICBmb3IobGV0IGNvbCA9IDA7IGNvbCA8ICBuYmNvbHMgOyArK2NvbCkge1xuICAgICAgICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgICAgICAgdGgudGV4dENvbnRlbnQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgY29sKTtcbiAgICAgICAgICAgIGNvbF9odG1sLmFwcGVuZCh0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdGJvZHkuYXBwZW5kKGNvbF9odG1sKTtcblxuICAgICAgICBmb3IobGV0IHJvdyA9IDA7IHJvdyA8IG5icm93czsgKytyb3cpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd19odG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICAgICAgICAgIHRoLnRleHRDb250ZW50ID0gYCR7cm93KzF9YDtcbiAgICAgICAgICAgIHJvd19odG1sLmFwcGVuZCh0aCk7XG5cbiAgICAgICAgICAgIGZvcihsZXQgY29sID0gMDsgY29sIDwgIG5iY29scyA7ICsrY29sKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJykgYXMgQ2VsbDtcbiAgICAgICAgICAgICAgICAvL2NlbGwudG9nZ2xlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcbiAgICAgICAgICAgICAgICBjZWxsLmZvcm1hdCA9IEZvcm1hdHMuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICByb3dfaHRtbC5hcHBlbmQoIGNlbGwgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRib2R5LmFwcGVuZChyb3dfaHRtbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjaW5pdEdyaWQobmJyb3dzOiBudW1iZXIsIG5iY29sczogbnVtYmVyKSB7XG5cbiAgICAgICAgY29uc3QgaXNfcm8gPSB0aGlzLmF0dHJzLnJvID09PSBcInRydWVcIjtcblxuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgICAgIGNvbnN0IHRib2R5ICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XG4gICAgICAgIHRoaXMuI3Rib2R5ID0gdGJvZHk7XG5cbiAgICAgICAgY29uc3QgcmVzaXplT2JzID0gbmV3IFJlc2l6ZU9ic2VydmVyKCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhvc3QuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KCdyZXNpemUnKSApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzaXplT2JzLm9ic2VydmUoIHRoaXMuaG9zdCApO1xuXG4gICAgICAgIHRoaXMuI3Rib2R5LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuXG4gICAgICAgIHRoaXMucmVzaXplKG5icm93cywgbmJjb2xzKTtcblxuICAgICAgICB0YWJsZS5hcHBlbmQodGJvZHkpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKHRhYmxlKTtcbiAgICB9XG5cbiAgICBnZXRSYW5nZShmcm9tOiBDZWxsfHN0cmluZ3xyZWFkb25seVtudW1iZXIsbnVtYmVyXSwgdG86IENlbGx8c3RyaW5nfHJlYWRvbmx5W251bWJlcixudW1iZXJdID0gZnJvbSk6IENlbGxMaXN0IHtcblxuICAgICAgICAvLyBwcm9jZXNzIHJlZnMuLi5cbiAgICAgICAgaWYoIGZyb20gaW5zdGFuY2VvZiBIVE1MVGFibGVDZWxsRWxlbWVudClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJhbmdlKCB0aGlzLmNlbGxQb3MoZnJvbSksIHRvICk7XG4gICAgICAgIGlmKCB0byBpbnN0YW5jZW9mIEhUTUxUYWJsZUNlbGxFbGVtZW50KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZ2UoIGZyb20sIHRoaXMuY2VsbFBvcyh0bykgKTtcblxuICAgICAgICBpZiggdHlwZW9mIGZyb20gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGlmKCBmcm9tLmluY2x1ZGVzKFwiOlwiKSApXG4gICAgICAgICAgICAgICAgW2Zyb20sIHRvXSA9IGZyb20uc3BsaXQoJzonKTtcblxuICAgICAgICAgICAgZnJvbSA9IHRoaXMucmVmMnBvcyhmcm9tLCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSYW5nZSggZnJvbSwgdG8gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiggdHlwZW9mIHRvID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZ2UoIGZyb20sIHRoaXMucmVmMnBvcyh0bywgdHJ1ZSkgKTtcblxuICAgICAgICAvLyBnZXQgcmFuZ2VcblxuICAgICAgICBsZXQgYmVnX3JvdyA9IGZyb21bMF0gfHwgMTtcbiAgICAgICAgbGV0IGJlZ19jb2wgPSBmcm9tWzFdIHx8IDE7XG5cbiAgICAgICAgbGV0IGVuZF9yb3cgPSBmcm9tWzBdID09PSAwID8gdGhpcy5uYlJvd3MgOiB0b1swXTtcbiAgICAgICAgbGV0IGVuZF9jb2wgPSBmcm9tWzFdID09PSAwID8gdGhpcy5uYkNvbHMgOiB0b1sxXTtcblxuICAgICAgICBpZiggZW5kX3JvdyA8IGJlZ19yb3cgKVxuICAgICAgICAgICAgW2JlZ19yb3csIGVuZF9yb3ddID0gW2VuZF9yb3csIGJlZ19yb3ddO1xuICAgICAgICBpZiggZW5kX2NvbCA8IGJlZ19jb2wgKVxuICAgICAgICAgICAgW2JlZ19jb2wsIGVuZF9jb2xdID0gW2VuZF9jb2wsIGJlZ19jb2xdO1xuXG4gICAgICAgIGNvbnN0IGNlbGxzID0gbmV3IEFycmF5PENlbGw+KCAoZW5kX3JvdyAtIGJlZ19yb3cgKyAxKSAqIChlbmRfY29sIC0gYmVnX2NvbCArIDEpICk7XG5cbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgIGZvcihsZXQgaSA9IGJlZ19yb3c7IGkgPD0gZW5kX3JvdzsgKytpIClcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IGJlZ19jb2w7IGogPD0gZW5kX2NvbDsgKytqIClcbiAgICAgICAgICAgICAgICBjZWxsc1tvZmZzZXQrK10gPSB0aGlzLnRib2R5LmNoaWxkcmVuW2ldLmNoaWxkcmVuW2pdIGFzIENlbGw7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBDZWxsTGlzdCh0aGlzLCBjZWxscyk7XG4gICAgfVxuXG4gICAgcmVmMnBvcyhyZWY6IHN0cmluZywgZW5kX2xpbmVfY29sID0gdHJ1ZSk6IFtudW1iZXIsIG51bWJlcl0ge1xuICAgICAgICBcbiAgICAgICAgcmVmID0gcmVmLnJlcGxhY2VBbGwoJyQnLCAnJyk7XG5cbiAgICAgICAgbGV0IHNlcCA9IHJlZi5zZWFyY2goL1swLTldLyk7XG5cbiAgICAgICAgaWYoIHNlcCA9PT0gMCkgIC8vIHRoaXMgaXMgYSBsaW5lLi4uXG4gICAgICAgICAgICByZXR1cm4gZW5kX2xpbmVfY29sID8gdGhpcy5yZWYycG9zKGBBJHtyZWZ9YCkgOiBbdGhpcy5uYkNvbHMsICtyZWZdO1xuICAgICAgICBpZiggc2VwID09PSAtMSkgLy8gdGhpcyBpcyBhIGNvbC4uLlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmMnBvcyhgJHtyZWZ9JHtlbmRfbGluZV9jb2wgPyB0aGlzLm5iUm93cyA6IDF9YCk7XG5cbiAgICAgICAgY29uc3Qgcm93ID0gK3JlZi5zbGljZShzZXApO1xuXG4gICAgICAgIGxldCBjb2wgPSAwO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2VwOyArK2kpIHtcbiAgICAgICAgICAgIGNvbCAqPSAyNjtcbiAgICAgICAgICAgIGNvbCArPSByZWYuY2hhckNvZGVBdChpKSAtIDY1O1xuICAgICAgICB9XG4gICAgICAgICsrY29sO1xuXG4gICAgICAgIHJldHVybiBbcm93LCBjb2xdO1xuICAgIH1cbiAgICBwb3MycmVmKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikge1xuXG4gICAgICAgIGxldCBjb2xfc3RyID0gXCJcIjtcbiAgICAgICAgZG8ge1xuXG4gICAgICAgICAgICBsZXQgaWQgPSAoY29sLTEpICUgMjY7XG5cbiAgICAgICAgICAgIGNvbF9zdHIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1K2lkKSArIGNvbF9zdHI7XG5cbiAgICAgICAgICAgIGNvbCAtPSBpZCArIDE7XG4gICAgICAgICAgICBjb2wgLz0gMjY7IC8vIHNob3VsZCBiZSBpbnRlZ2VyLCBzbyBvay5cblxuICAgICAgICB9IHdoaWxlKCBjb2wgPiAwICk7XG5cbiAgICAgICAgcmV0dXJuIGAke2NvbF9zdHJ9JHtyb3d9YDtcbiAgICB9XG4gICAgZ2V0IG5iUm93cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Rib2R5LmNoaWxkcmVuLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIGdldCBuYkNvbHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0Ym9keS5maXJzdEVsZW1lbnRDaGlsZCEuY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICAjaXNVcGRhdGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYoIHRoaXMuI2lzVXBkYXRpbmcgPT09IHRydWUgKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLiNpc1VwZGF0aW5nID0gdHJ1ZTtcblxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gWy4uLnRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsPENlbGw+KCd0ZCcpXS5maWx0ZXIoIGUgPT4gZS5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvcihsZXQgY2VsbCBvZiBjZWxscyApXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGNlbGwucmF3Q29udGVudC5yZXNldENhY2hlKCk7XG5cbiAgICAgICAgICAgIGZvcihsZXQgY2VsbCBvZiBjZWxscykge1xuXG4gICAgICAgICAgICAgICAgaWYoIGNlbGwucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEgKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGNlbGwucmF3Q29udGVudC5leGVjKHRoaXMpOyAvL1RPRE8uLi5cblxuICAgICAgICAgICAgICAgICAgICAvL1RPRE86IGZhY3Rvcml6ZS4uLlxuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZTogc3RyaW5nID0gdHlwZW9mIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBEYXRlIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IChjZWxsIGFzIGFueSkuZm9ybWF0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5ob3N0LmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudCgndXBkYXRlJykgKTtcbiAgICAgICAgICAgIHRoaXMuI2lzVXBkYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXQgaXNSTygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cnMucm8gPT09IFwidHJ1ZVwiO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENlbGxMaXN0IGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuXG4gICAgI3NoZWV0OiBDYWxjU2hlZXQ7XG4gICAgI2NlbGxzOiBDZWxsW107XG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCwgY2VsbHM6IENlbGxbXSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLiNjZWxscyA9IGNlbGxzO1xuICAgICAgICB0aGlzLiNzaGVldCA9IHNoZWV0O1xuICAgIH1cblxuICAgIGdldCBwbGFnZV9uYW1lKCkge1xuXG4gICAgICAgIGlmKCB0aGlzLiNjZWxscy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgaWYoIHRoaXMuI2NlbGxzLmxlbmd0aCA9PT0gMSApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4jc2hlZXQucG9zMnJlZiggLi4udGhpcy4jc2hlZXQuY2VsbFBvcyh0aGlzLiNjZWxsc1swXSkgKTtcblxuICAgICAgICBsZXQgY2VsbHMgPSB0aGlzLiNjZWxscy5tYXAoIGMgPT4gdGhpcy4jc2hlZXQuY2VsbFBvcyhjKSApLnNvcnQoIChhLGIpID0+IHtcbiAgICAgICAgICAgIGlmKCBhWzBdICE9PSBiWzBdIClcbiAgICAgICAgICAgICAgICByZXR1cm4gYVswXSAtIGJbMF07XG4gICAgICAgICAgICByZXR1cm4gYVsxXSAtIGJbMV07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtaW4gPSBjZWxsc1swXTtcbiAgICAgICAgbGV0IG1heCA9IGNlbGxzW2NlbGxzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIGxldCBuYl9jb2xzID0gbWF4WzFdIC0gbWluWzFdICsgMTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICBpZiggY2VsbHNbaV1bMF0gIT09IE1hdGguZmxvb3IoaS9uYl9jb2xzKSttaW5bMF0gJiYgY2VsbHNbaV1bMV0gIT09IChpJW5iX2NvbHMpKyBtaW5bMV0gKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICByZXR1cm4gYCR7dGhpcy4jc2hlZXQucG9zMnJlZiguLi5taW4pfToke3RoaXMuI3NoZWV0LnBvczJyZWYoLi4ubWF4KX1gO1xuICAgIH1cblxuICAgIGdldCBjZWxscygpOiBDZWxsW10ge1xuICAgICAgICByZXR1cm4gdGhpcy4jY2VsbHM7XG4gICAgfVxuICAgIGdldCBzaGVldCgpOiBDYWxjU2hlZXQge1xuICAgICAgICByZXR1cm4gdGhpcy4jc2hlZXQ7XG4gICAgfVxuXG4gICAgdG9nZ2xlRm9ybWF0KG5hbWU6IHN0cmluZ3woKHY6IGFueSwgcHJlYzogbnVtYmVyfG51bGwpID0+IHN0cmluZykgKSB7XG4gICAgICAgIGxldCBmID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQodGhpcyk7XG5cbiAgICAgICAgaWYoIHR5cGVvZiBuYW1lID09PSBcImZ1bmN0aW9uXCIpIHtcblxuICAgICAgICAgICAgbGV0IGlzRm9ybWF0ID0gZi5nZXRQcm9wZXJ0eShcImZvcm1hdFwiKSA9PT0gbmFtZTtcblxuICAgICAgICAgICAgdGhpcy5mb3JtYXQoe2Zvcm1hdDogaXNGb3JtYXQgPyBudWxsIDogbmFtZSB9KTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mb3JtYXQoe1tuYW1lXTogZi5nZXRQcm9wZXJ0eShuYW1lKSAhPT0gdHJ1ZX0pO1xuICAgIH1cblxuICAgIGZvcm1hdCguLi5mOiAoKCAodjogYW55LCBwcmVjOiBudW1iZXJ8bnVsbCkgPT4gc3RyaW5nICl8c3RyaW5nfEZvcm1hdHxSZWNvcmQ8c3RyaW5nLCBhbnk+KVtdKSB7XG5cbiAgICAgICAgaWYoIGYubGVuZ3RoID4gMSApIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9UT0RPLi4uLlxuICAgICAgICAgICAgZiA9IE9iamVjdC5mcm9tRW50cmllcyggZi5tYXAoIGUgPT4gW2UsIHRydWVdICkgKTtcblxuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIGYgPSBmWzBdO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgZiA9PT0gXCJmdW5jdGlvblwiIClcbiAgICAgICAgICAgIGYgPSB7XCJmb3JtYXRcIjogZn07XG5cbiAgICAgICAgaWYodHlwZW9mIGYgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgZiA9IHtbZl06IHRydWV9O1xuXG4gICAgICAgIGlmKCAhIChmIGluc3RhbmNlb2YgRm9ybWF0KSApXG4gICAgICAgICAgICBmID0gbmV3IEZvcm1hdChmKTtcblxuICAgICAgICBmLmFwcGx5VG8odGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0IGNvbnRlbnQoKTogKFJhd0NvbnRlbnRUeXBlKVtdIHtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBuZXcgQXJyYXkodGhpcy4jY2VsbHMubGVuZ3RoKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuI2NlbGxzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgY29udGVudFtpXSA9IHRoaXMuI2NlbGxzW2ldLnJhd0NvbnRlbnQhO1xuXG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH1cblxuICAgIGRlbGV0ZUZvcm1hdCgpIHtcbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIHRoaXMuI2NlbGxzKSAvL1RPRE8gYWRkIGhvYyBmb3JtYXQuLi5cbiAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gJyc7XG4gICAgfVxuXG4gICAgZGVsZXRlQ29udGVudCgpIHtcblxuICAgICAgICBmb3IobGV0IGNlbGwgb2YgdGhpcy4jY2VsbHMpIHtcbiAgICAgICAgICAgIGNlbGwucmF3Q29udGVudCA9IHVuZGVmaW5lZCBhcyBhbnk7XG4gICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXR5cGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NoZWV0LnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHNldCBjb250ZW50KGNvbnRlbnQ6IENlbGx8UmF3Q29udGVudFR5cGV8KFJhd0NvbnRlbnRUeXBlfENlbGwpW10pIHtcblxuICAgICAgICBpZiggQXJyYXkuaXNBcnJheShjb250ZW50KSApIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb250ZW50Lmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgIG5ldyBDZWxsTGlzdCh0aGlzLiNzaGVldCwgW3RoaXMuI2NlbGxzW2ldXSApLmNvbnRlbnQgPSBjb250ZW50W2ldO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiggdHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG5cbiAgICAgICAgICAgIGxldCByYXcgPSBjb250ZW50O1xuICAgICAgICAgICAgY29udGVudCA9IHBhcnNlSW5wdXQoY29udGVudCk7XG4gICAgICAgICAgICBpZiggdHlwZW9mIGNvbnRlbnQgPT09IFwibnVtYmVyXCIgJiYgcmF3W3Jhdy5sZW5ndGgtMV0gPT09IFwiJVwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGYgPSBGb3JtYXQuZXh0cmFjdEZvcm1hdCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiggISBmLmhhc1Byb3BlcnR5KFwiZm9ybWF0XCIpIHx8IGYuZ2V0UHJvcGVydHkoXCJmb3JtYXRcIikgPT09IEZvcm1hdHMuZGVmYXVsdCApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybWF0KEZvcm1hdHMucG91cmNlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIHR5cGVvZiBjb250ZW50ID09PSBcIm51bWJlclwiICYmIHJhd1tyYXcubGVuZ3RoLTFdID09PSBcIuKCrFwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGYgPSBGb3JtYXQuZXh0cmFjdEZvcm1hdCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiggISBmLmhhc1Byb3BlcnR5KFwiZm9ybWF0XCIpIHx8IGYuZ2V0UHJvcGVydHkoXCJmb3JtYXRcIikgPT09IEZvcm1hdHMuZGVmYXVsdCApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybWF0KEZvcm1hdHMuZXVyb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJhd192YWwgPSBjb250ZW50IGluc3RhbmNlb2YgSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPyBjb250ZW50LnJhd0NvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjb250ZW50O1xuXG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiB0aGlzLiNjZWxscykge1xuXG4gICAgICAgICAgICBpZihjb250ZW50IGluc3RhbmNlb2YgSFRNTFRhYmxlQ2VsbEVsZW1lbnQgJiYgY29udGVudC5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSApIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCB2ID0gY29udGVudC5yYXdDb250ZW50O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZHN0ID0gdGhpcy4jc2hlZXQuY2VsbFBvcyggY2VsbCApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IHRoaXMuI3NoZWV0LmNlbGxQb3MoY29udGVudClcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBbIGRzdFswXSAtIHNyY1swXSwgZHN0WzFdIC0gc3JjWzFdXSBhcyBjb25zdDtcblxuICAgICAgICAgICAgICAgIHJhd192YWwgPSB2LnJlbGF0aXZlVG8oIHRoaXMuI3NoZWV0LCAuLi5kaWZmICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNlbGwucmF3Q29udGVudCA9IHJhd192YWw7XG5cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHJhd192YWw7XG4gICAgICAgICAgICBpZiggcmF3X3ZhbCBpbnN0YW5jZW9mIEZvcm11bGEpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHMgPSBPYmplY3QudmFsdWVzKCBGb3JtYXRzICk7XG5cbiAgICAgICAgICAgICAgICAvL0lmIG5vIG51bWJlciBmb3JtYXQsIGRlZHVjZSBmb3JtYXQuXG4gICAgICAgICAgICAgICAgaWYoIGNlbGwuZm9ybWF0ID09PSB1bmRlZmluZWQgfHwgY2VsbC5mb3JtYXQgPT09IEZvcm1hdHMuZGVmYXVsdCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybWF0ID0gRm9ybWF0cy5kZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmJfZGF0ZXMgPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IHIgb2YgcmF3X3ZhbC5yYW5nZXNUb2tlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGYgPSBGb3JtYXQuZXh0cmFjdEZvcm1hdCh0aGlzLnNoZWV0LmdldFJhbmdlKHIudmFsdWUpICkuZ2V0UHJvcGVydHkoXCJmb3JtYXRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggZm9ybWF0ICE9PSBmICYmIGZvcm1hdHMuaW5kZXhPZihmKSA+IGZvcm1hdHMuaW5kZXhPZihmb3JtYXQpIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQgPSBmO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZiA9PT0gRm9ybWF0cy5kYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsrbmJfZGF0ZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBoNGNrXG4gICAgICAgICAgICAgICAgICAgIGlmKCBmb3JtYXQgPT09IEZvcm1hdHMuZGF0ZSAmJiBuYl9kYXRlcyA+IDEgKVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0ID0gRm9ybWF0cy5kZWZhdWx0O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKGZvcm1hdCAhPT0gRm9ybWF0cy5kZWZhdWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5mb3JtYXQgPSBmb3JtYXQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSByYXdfdmFsLmV4ZWModGhpcy4jc2hlZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdHlwZTogc3RyaW5nID0gdHlwZW9mIHZhbHVlO1xuICAgICAgICAgICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSApIHtcbiAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiO1xuICAgICAgICAgICAgICAgIGNlbGwuZm9ybWF0ID0gRm9ybWF0cy5kYXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gY2VsbC5mb3JtYXQodmFsdWUpO1xuXG4gICAgICAgICAgICBpZiggY2VsbC5mb3JtYXQgPT09IEZvcm1hdHMuZGF0ZSlcbiAgICAgICAgICAgICAgICB0eXBlID0gJ2RhdGUnO1xuICAgICAgICAgICAgaWYoIGNlbGwuZm9ybWF0ID09PSBGb3JtYXRzLnBvdXJjZW50KVxuICAgICAgICAgICAgICAgIHR5cGUgPSAncG91cmNlbnQnO1xuICAgICAgICAgICAgaWYoIGNlbGwuZm9ybWF0ID09PSBGb3JtYXRzLmV1cm9zIHx8IGNlbGwuZm9ybWF0ID09PSBGb3JtYXRzLm51bWJlciApXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdudW1iZXInO1xuXG4gICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdHlwZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzaGVldC51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBzZXRSTyhpc19ybzogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIHRoaXMuI2NlbGxzKVxuICAgICAgICAgICAgY2VsbC5pc19ybyA9IGlzX3JvO1xuICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY2VsbHMubGVuZ3RoO1xuICAgIH1cblxuICAgIGhhcyguLi5jZWxsczogQ2VsbFtdKSB7XG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiBjZWxscylcbiAgICAgICAgICAgIGlmKCAhIHRoaXMuI2NlbGxzLmluY2x1ZGVzKGNlbGwpIClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJlbW92ZSguLi5jZWxsczogQ2VsbFtdKSB7XG4gICAgICAgIHRoaXMuI2NlbGxzID0gdGhpcy4jY2VsbHMuZmlsdGVyKCBjID0+ICEgY2VsbHMuaW5jbHVkZXMoYykgKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcbiAgICB9XG5cbiAgICByZXBsYWNlQWxsKC4uLmNlbGxzOiBDZWxsW118W0NlbGxMaXN0XSkge1xuICAgICAgICB0aGlzLiNjZWxscy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmFkZCguLi5jZWxscyk7XG4gICAgfVxuXG4gICAgYWRkKC4uLmNlbGxzOiBDZWxsW118W0NlbGxMaXN0XSkge1xuXG4gICAgICAgIGlmKCBjZWxsc1swXSBpbnN0YW5jZW9mIENlbGxMaXN0KVxuICAgICAgICAgICAgY2VsbHMgPSBjZWxsc1swXS5jZWxscztcblxuICAgICAgICB0aGlzLiNjZWxscy5wdXNoKC4uLmNlbGxzIGFzIENlbGxbXSk7XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcbiAgICB9XG5cbiAgICBnZXQgZmlyc3RDZWxsKCkge1xuICAgICAgICBpZiggdGhpcy4jY2VsbHMubGVuZ3RoIDwgMSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vcGVcIik7XG4gICAgICAgIHJldHVybiB0aGlzLiNjZWxsc1swXTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy4jY2VsbHMubGVuZ3RoID0gMDtcblxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSApO1xuICAgIH1cblxuXG4gICAgZGVlcENsb25lKCkge1xuXG4gICAgICAgIGxldCBjZWxscyA9IHRoaXMuI2NlbGxzLm1hcCggYyA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbG9uZSA9IGMuY2xvbmVOb2RlKHRydWUpIGFzIENlbGw7XG5cbiAgICAgICAgICAgIGNsb25lLnJhd0NvbnRlbnQgPSBjLnJhd0NvbnRlbnQ7XG4gICAgICAgICAgICBjbG9uZS5mb3JtYXQgICAgID0gYy5mb3JtYXQ7XG4gICAgICAgICAgICAoY2xvbmUgYXMgYW55KS5wb3MgICAgICAgID0gdGhpcy4jc2hlZXQuY2VsbFBvcyhjKTtcblxuICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBuZXcgQ2VsbExpc3QodGhpcy4jc2hlZXQsIGNlbGxzKTtcbiAgICB9XG59XG5cbi8vVE9ETy4uLlxuaW1wb3J0IFwiLi9mb3JtdWxhX2VkaXRvclwiO1xuaW1wb3J0IFwiLi9wbGFnZV9lZGl0b3JcIjtcbmltcG9ydCB7IEZvcm11bGEsIHBhcnNlX2Zvcm11bGEgfSBmcm9tIFwiLi9mb3JtdWxhX3BhcnNlclwiO1xuaW1wb3J0IHsgUGxhZ2VTZWxlY3RvciB9IGZyb20gXCIuL3BsYWdlX3NlbGVjdG9yXCI7XG5pbXBvcnQgeyBGb3JtYXQsIEZvcm1hdE1hbmFnZXIsIEZvcm1hdHMgfSBmcm9tIFwiLi9mb3JtYXRcIjtcbmltcG9ydCB7IEZvcm11bGFSZWYsIFJhbmdlT3ZlcmxheSwgUmVjb3B5SGFuZGxlIH0gZnJvbSBcIi4vUmFuZ2VPdmVybGF5XCI7XG5pbXBvcnQgeyB0ZXN0IH0gZnJvbSBcInRlc3Qvd2Vib2RmXCI7XG5cbkxJU1MuZGVmaW5lKCdjYWxjLXNoZWV0JywgQ2FsY1NoZWV0KTsiLCJleHBvcnQgZGVmYXVsdCBbXG4gICAge1xuICAgICAgICBuYW1lIDogXCJSIDEtMDEgVGFibGV1ciBldCBSZXBvcnRpbmdcIixcbiAgICAgICAgc25hbWU6IFwiUjEtMDEgVGFibGV1clwiLFxuICAgICAgICBwYXRoIDogXCJSMS0wMVwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ01cIixcbiAgICAgICAgICAgICAgICBwYXRoOiBcIkNNXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgXCJDTTFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDTTJcIlxuICAgICAgICAgICAgICAgIF1cblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlRQXCIsXG4gICAgICAgICAgICAgICAgcGF0aDogXCJUUFwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiVFAxXCJcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiUiAxLTAyIEJhc2VzIGRlIERvbm7DqWVzIFJlbGF0aW9ubmVsbGVzIDFcIixcbiAgICAgICAgc25hbWU6IFwiUjEtMDIgQkRSMVwiLFxuICAgICAgICBwYXRoIDogXCJSMS0wMlwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgXCJDTVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiVFBcIiAsXG4gICAgICAgICAgICAgICAgcGF0aCA6IFwiVFBcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIlRQMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQMlwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQM1wiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQNFwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQNVwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IHJvb3RfcGF0aCA9IFtcImxvY2FsaG9zdFwiLCBcIjEyNy4wLjAuMVwiXS5pbmNsdWRlcyhsb2NhdGlvbi5ob3N0bmFtZSkgPyBcIi9kaXN0L2Rldi9wYWdlcy9cIiA6IFwiL0NvdXJzL2Rpc3QvZGV2L3BhZ2VzL1wiOyIsIlxuaW1wb3J0IHBhZ2VzLCB7cm9vdF9wYXRofSBmcm9tIFwiLi9jb250ZW50XCI7XG5cbi8qXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JlcHJpbnQnLCAoKSA9PiB7XG4gIC8vLi4uXG59KTtcbiovXG5cbi8vVE9ETzogbGlua3MuLi5cbmNvbnN0IG1haW4gICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpITtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIikhO1xuXG5jb25zdCB0aXRsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcImgxLCBoMiwgaDMsIGg0XCIpO1xuXG50eXBlIE5vZGUgPSB7XG4gICAgaHRtbCAgICA6IEhUTUxFbGVtZW50LFxuICAgIGxldmVsICAgOiBudW1iZXIsXG4gICAgcGFyZW50ICA6IG51bGx8Tm9kZSxcbiAgICBjaGlsZHJlbjogTm9kZVtdXG59O1xuXG5jb25zdCBodHJlZTogTm9kZSA9IHtcbiAgICBodG1sICAgIDogbWFpbixcbiAgICBsZXZlbCAgIDogMCxcbiAgICBwYXJlbnQgIDogbnVsbCxcbiAgICBjaGlsZHJlbjogW10sXG59O1xubGV0IGh0cmVlX2N1cnNvciA9IGh0cmVlO1xuZm9yKGxldCB0aXRsZSBvZiB0aXRsZXMpIHtcbiAgICBjb25zdCBsZXZlbCA9ICt0aXRsZS50YWdOYW1lLnNsaWNlKDEpO1xuICAgIFxuICAgIHdoaWxlKCBsZXZlbCA8PSBodHJlZV9jdXJzb3IubGV2ZWwgKVxuICAgICAgICBodHJlZV9jdXJzb3IgPSBodHJlZV9jdXJzb3IucGFyZW50ITtcblxuICAgIGNvbnN0IGVsZW06IE5vZGUgPSB7XG4gICAgICAgIGh0bWw6IHRpdGxlLFxuICAgICAgICBsZXZlbCxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICBwYXJlbnQ6IGh0cmVlX2N1cnNvclxuICAgIH07XG5cblxuICAgIGh0cmVlX2N1cnNvci5jaGlsZHJlbi5wdXNoKGVsZW0pO1xuXG4gICAgaHRyZWVfY3Vyc29yID0gZWxlbTtcbn1cblxuZnVuY3Rpb24gc2VhcmNoQ3VySGVhZGVyKGh0cmVlOiBOb2RlLCBwb3NpdGlvbjogbnVtYmVyKTogbnVsbCB8IE5vZGUge1xuXG4gICAgY29uc3QgaGVhZGVycyA9IGh0cmVlLmNoaWxkcmVuO1xuXG4gICAgZm9yKGxldCBpID0gaGVhZGVycy5sZW5ndGggLSAxOyBpID49IDA7IC0taSlcbiAgICAgICAgaWYoIGhlYWRlcnNbaV0uaHRtbC5vZmZzZXRUb3AgPD0gcG9zaXRpb24gKyAzMiApXG4gICAgICAgICAgICByZXR1cm4gc2VhcmNoQ3VySGVhZGVyKGhlYWRlcnNbaV0sIHBvc2l0aW9uKSA/PyBoZWFkZXJzW2ldO1xuXG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmNvbnN0IGhpZCA9IFtcbiAgICBbXSxcbiAgICBbXCJJXCIsIFwiSUlcIiwgXCJJSUlcIiwgXCJJVlwiXSxcbiAgICBbXCIxXCIsIFwiMlwiLFwiM1wiLFwiNVwiLFwiNlwiLFwiN1wiLFwiOFwiLFwiOVwiXSxcbiAgICBbXCJhXCIsIFwiYlwiLFwiY1wiLFwiZFwiLFwiZVwiLFwiZlwiLFwiZ1wiLFwiaFwiXSxcbl1cblxuZnVuY3Rpb24gZ2V0VGl0bGVQcmVmaXgoczogTm9kZSkge1xuXG4gICAgaWYoIHMubGV2ZWwgPj0gaGlkLmxlbmd0aCApXG4gICAgICAgIHJldHVybiBcIlwiO1xuXG4gICAgY29uc3QgaWR4ID0gcy5wYXJlbnQhLmNoaWxkcmVuLmluZGV4T2Yocyk7XG5cbiAgICBjb25zdCBudW0gPSBoaWRbcy5sZXZlbF1baWR4XTtcblxuICAgIHJldHVybiBgJHtudW19LiBgO1xufVxuXG5mdW5jdGlvbiBidWlsZE1lbnUobm9kZXM6IE5vZGVbXSkge1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICAgIG1lbnUuYXBwZW5kKCAuLi4gbm9kZXMubWFwKCAocyxpZHgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBpdGVtLnRleHRDb250ZW50PSBgJHtnZXRUaXRsZVByZWZpeChzKX0ke3MuaHRtbC50ZXh0Q29udGVudH1gO1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgYCMke3MuaHRtbC5pZH1gKTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSkgKTtcblxuICAgIHJldHVybiBtZW51O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVIZWFkZXIoKSB7XG5cbiAgICBjb25zdCBsYXN0ID0gc2VhcmNoQ3VySGVhZGVyKCBodHJlZSwgbWFpbi5zY3JvbGxUb3ApITtcblxuICAgIGxldCBoZWFkZXJzID0gW107XG4gICAgbGV0IGN1cnNvciAgPSBsYXN0O1xuXG4gICAgd2hpbGUoY3Vyc29yLmh0bWwgIT09IG1haW4pIHtcbiAgICAgICAgaGVhZGVycy5wdXNoKGN1cnNvcik7XG4gICAgICAgIGN1cnNvciA9IGN1cnNvci5wYXJlbnQhO1xuICAgIH1cblxuICAgIGNvbnN0IGh0bWwgPSBoZWFkZXJzLnJldmVyc2UoKS5tYXAoIChobm9kZSxpKSA9PiB7XG5cbiAgICAgICAgY29uc3QgaCA9IGhub2RlLmh0bWw7XG4gICAgICAgIGNvbnN0IGhfaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgbGluay50ZXh0Q29udGVudCA9IGAke2dldFRpdGxlUHJlZml4KGhub2RlKX0ke2gudGV4dENvbnRlbnR9YDtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgIyR7aC5pZH1gKTtcblxuICAgICAgICBjb25zdCBtZW51ID0gYnVpbGRNZW51KGhub2RlLnBhcmVudCEuY2hpbGRyZW4pO1xuICAgICAgICBoX2h0bWwuYXBwZW5kKGxpbmssIG1lbnUpO1xuXG4gICAgICAgIHJldHVybiBoX2h0bWw7XG4gICAgfSk7XG5cbiAgICBpZiggbGFzdC5jaGlsZHJlbi5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgZW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgICAgICBlbXB0eS5hcHBlbmQoIGJ1aWxkTWVudShsYXN0LmNoaWxkcmVuKSApO1xuXG4gICAgICAgIGh0bWwucHVzaChlbXB0eSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlX3BhZ2VfaHJlZihwYXRocHJlZml4OiBzdHJpbmcsIHBhdGg6IHN0cmluZywgZGVzYzogYW55KSB7XG5cbiAgICAgICAgbGV0IGhyZWYgPSBgJHtwYXRocHJlZml4fSR7cGF0aH0vYDtcblxuICAgICAgICB3aGlsZShkZXNjLmNoaWxkcmVuPy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRlc2MgPSBkZXNjLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgaHJlZiArPSBgJHtkZXNjLnBhdGggPz8gZGVzY30vYDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBocmVmO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VfcGFnZV9tZW51KHBhdGhwcmVmaXg6IHN0cmluZywgcGF0aDogc3RyaW5nLCBwYWdlczogYW55KSB7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBwYWdlcy5maW5kKCAocGFnZTogYW55KSA9PiBwYWdlID09PSBwYXRoIHx8IHBhZ2UucGF0aCA9PT0gcGF0aCApITtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgbGluay50ZXh0Q29udGVudCA9IGRlc2Muc25hbWUgPz8gZGVzYy5uYW1lID8/IGRlc2M7XG4gICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIG1ha2VfcGFnZV9ocmVmKHBhdGhwcmVmaXgsIHBhdGgsIGRlc2MpICk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gICAgXG4gICAgICAgICAgICBtZW51LmFwcGVuZCggLi4uIHBhZ2VzLm1hcCggKHBhZ2U6YW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQ9IHBhZ2UubmFtZSA/PyBwYWdlO1xuICAgICAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBtYWtlX3BhZ2VfaHJlZihwYXRocHJlZml4LCBwYWdlLnBhdGg/P3BhZ2UsIHBhZ2UpICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9KSApO1xuICAgIFxuICAgICAgICAgICAgaHRtbC5hcHBlbmQobGluaywgbWVudSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gICAgXG4gICAgbGV0IGN1cnBhZ2UgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc2xpY2Uocm9vdF9wYXRoLmxlbmd0aCkuc3BsaXQoJy8nKTtcblxuICAgIGNvbnN0IG1vZHVsZV9odG1sID0gbWFrZV9wYWdlX21lbnUocm9vdF9wYXRoLCBjdXJwYWdlWzBdLCBwYWdlcyk7XG5cbiAgICBjb25zdCBkZXNjID0gcGFnZXMuZmluZCggKHBhZ2U6IGFueSkgPT4gcGFnZS5wYXRoID09PSBjdXJwYWdlWzBdICkhO1xuICAgIGNvbnN0IHR5cGVfaHRtbCAgID0gbWFrZV9wYWdlX21lbnUocm9vdF9wYXRoICsgY3VycGFnZVswXSArIFwiL1wiLCBjdXJwYWdlWzFdLCBkZXNjLmNoaWxkcmVuKTtcblxuICAgIGNvbnN0IGRlc2NfdHlwZSA9IGRlc2MuY2hpbGRyZW4uZmluZCggKHBhZ2U6IGFueSkgPT4gKHBhZ2U/LnBhdGggPz8gcGFnZSkgPT09IGN1cnBhZ2VbMV0gKSE7XG4gICAgaWYoIHR5cGVvZiBkZXNjX3R5cGUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgLy8gdGl0bGUgbnVtXG4gICAgICAgIGNvbnN0IGRlc2MyX2lkeCA9IGRlc2NfdHlwZS5jaGlsZHJlbi5maW5kSW5kZXgoIChwYWdlOiBhbnkpID0+IHBhZ2U/LnBhdGggPz8gcGFnZSA9PT0gY3VycGFnZVsyXSApITtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taGVhZGVyX3N0YXJ0X2lkXCIsIGAke2Rlc2MyX2lkeH1gKTtcbiAgICAgICAgLy8gbWVudVxuICAgICAgICBjb25zdCBzZXNzaW9uX2h0bWwgICA9IG1ha2VfcGFnZV9tZW51KHJvb3RfcGF0aCArIGN1cnBhZ2VbMF0gKyBcIi9cIisgY3VycGFnZVsxXSArIFwiL1wiLCBjdXJwYWdlWzJdLCBkZXNjX3R5cGUuY2hpbGRyZW4pO1xuICAgICAgICBodG1sWzBdID0gc2Vzc2lvbl9odG1sO1xuICAgIH1cblxuICAgIGhlYWRlci5yZXBsYWNlQ2hpbGRyZW4obW9kdWxlX2h0bWwsIHR5cGVfaHRtbCwgLi4uaHRtbCk7XG59XG5cbm1haW4uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlSGVhZGVyKTtcbnVwZGF0ZUhlYWRlcigpOyIsIi8vaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDk0MTQzL2NyZWF0aW5nLWEtbmV3LWRvbS1lbGVtZW50LWZyb20tYW4taHRtbC1zdHJpbmctdXNpbmctYnVpbHQtaW4tZG9tLW1ldGhvZHMtb3ItcHJvXG5leHBvcnQgZnVuY3Rpb24gc3RyMmh0bWw8VCBleHRlbmRzIEhUTUxFbGVtZW50PihodG1sOiBzdHJpbmcpOiBUIHtcbiAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIGh0bWwgPSBodG1sLnRyaW0oKTsgLy8gTmV2ZXIgcmV0dXJuIGEgdGV4dCBub2RlIG9mIHdoaXRlc3BhY2UgYXMgdGhlIHJlc3VsdFxuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQhIGFzIFQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHIyREYoaHRtbDogc3RyaW5nKTogRG9jdW1lbnRGcmFnbWVudCB7XG4gICAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICBodG1sID0gaHRtbC50cmltKCk7IC8vIE5ldmVyIHJldHVybiBhIHRleHQgbm9kZSBvZiB3aGl0ZXNwYWNlIGFzIHRoZSByZXN1bHRcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJ2YXIgd2VicGFja1F1ZXVlcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgcXVldWVzXCIpIDogXCJfX3dlYnBhY2tfcXVldWVzX19cIjtcbnZhciB3ZWJwYWNrRXhwb3J0cyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgZXhwb3J0c1wiKSA6IFwiX193ZWJwYWNrX2V4cG9ydHNfX1wiO1xudmFyIHdlYnBhY2tFcnJvciA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgZXJyb3JcIikgOiBcIl9fd2VicGFja19lcnJvcl9fXCI7XG52YXIgcmVzb2x2ZVF1ZXVlID0gKHF1ZXVlKSA9PiB7XG5cdGlmKHF1ZXVlICYmIHF1ZXVlLmQgPCAxKSB7XG5cdFx0cXVldWUuZCA9IDE7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0pKTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSA/IGZuLnIrKyA6IGZuKCkpKTtcblx0fVxufVxudmFyIHdyYXBEZXBzID0gKGRlcHMpID0+IChkZXBzLm1hcCgoZGVwKSA9PiB7XG5cdGlmKGRlcCAhPT0gbnVsbCAmJiB0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKSB7XG5cdFx0aWYoZGVwW3dlYnBhY2tRdWV1ZXNdKSByZXR1cm4gZGVwO1xuXHRcdGlmKGRlcC50aGVuKSB7XG5cdFx0XHR2YXIgcXVldWUgPSBbXTtcblx0XHRcdHF1ZXVlLmQgPSAwO1xuXHRcdFx0ZGVwLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFeHBvcnRzXSA9IHI7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9LCAoZSkgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0Vycm9yXSA9IGU7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9KTtcblx0XHRcdHZhciBvYmogPSB7fTtcblx0XHRcdG9ialt3ZWJwYWNrUXVldWVzXSA9IChmbikgPT4gKGZuKHF1ZXVlKSk7XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0fVxuXHR2YXIgcmV0ID0ge307XG5cdHJldFt3ZWJwYWNrUXVldWVzXSA9IHggPT4ge307XG5cdHJldFt3ZWJwYWNrRXhwb3J0c10gPSBkZXA7XG5cdHJldHVybiByZXQ7XG59KSk7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmEgPSAobW9kdWxlLCBib2R5LCBoYXNBd2FpdCkgPT4ge1xuXHR2YXIgcXVldWU7XG5cdGhhc0F3YWl0ICYmICgocXVldWUgPSBbXSkuZCA9IC0xKTtcblx0dmFyIGRlcFF1ZXVlcyA9IG5ldyBTZXQoKTtcblx0dmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcblx0dmFyIGN1cnJlbnREZXBzO1xuXHR2YXIgb3V0ZXJSZXNvbHZlO1xuXHR2YXIgcmVqZWN0O1xuXHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWopID0+IHtcblx0XHRyZWplY3QgPSByZWo7XG5cdFx0b3V0ZXJSZXNvbHZlID0gcmVzb2x2ZTtcblx0fSk7XG5cdHByb21pc2Vbd2VicGFja0V4cG9ydHNdID0gZXhwb3J0cztcblx0cHJvbWlzZVt3ZWJwYWNrUXVldWVzXSA9IChmbikgPT4gKHF1ZXVlICYmIGZuKHF1ZXVlKSwgZGVwUXVldWVzLmZvckVhY2goZm4pLCBwcm9taXNlW1wiY2F0Y2hcIl0oeCA9PiB7fSkpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IHByb21pc2U7XG5cdGJvZHkoKGRlcHMpID0+IHtcblx0XHRjdXJyZW50RGVwcyA9IHdyYXBEZXBzKGRlcHMpO1xuXHRcdHZhciBmbjtcblx0XHR2YXIgZ2V0UmVzdWx0ID0gKCkgPT4gKGN1cnJlbnREZXBzLm1hcCgoZCkgPT4ge1xuXHRcdFx0aWYoZFt3ZWJwYWNrRXJyb3JdKSB0aHJvdyBkW3dlYnBhY2tFcnJvcl07XG5cdFx0XHRyZXR1cm4gZFt3ZWJwYWNrRXhwb3J0c107XG5cdFx0fSkpXG5cdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdFx0Zm4gPSAoKSA9PiAocmVzb2x2ZShnZXRSZXN1bHQpKTtcblx0XHRcdGZuLnIgPSAwO1xuXHRcdFx0dmFyIGZuUXVldWUgPSAocSkgPT4gKHEgIT09IHF1ZXVlICYmICFkZXBRdWV1ZXMuaGFzKHEpICYmIChkZXBRdWV1ZXMuYWRkKHEpLCBxICYmICFxLmQgJiYgKGZuLnIrKywgcS5wdXNoKGZuKSkpKTtcblx0XHRcdGN1cnJlbnREZXBzLm1hcCgoZGVwKSA9PiAoZGVwW3dlYnBhY2tRdWV1ZXNdKGZuUXVldWUpKSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGZuLnIgPyBwcm9taXNlIDogZ2V0UmVzdWx0KCk7XG5cdH0sIChlcnIpID0+ICgoZXJyID8gcmVqZWN0KHByb21pc2Vbd2VicGFja0Vycm9yXSA9IGVycikgOiBvdXRlclJlc29sdmUoZXhwb3J0cykpLCByZXNvbHZlUXVldWUocXVldWUpKSk7XG5cdHF1ZXVlICYmIHF1ZXVlLmQgPCAwICYmIChxdWV1ZS5kID0gMCk7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnbW9kdWxlJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00xL2luZGV4LnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMS9pbmRleC5jc3NcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTEvaW5kZXgubWRcIik7XG4iLCIiXSwibmFtZXMiOlsiU2hhZG93Q2ZnIiwiX19jc3RyX2hvc3QiLCJDQU5fSEFWRV9TSEFET1ciLCJfY2FuSGFzU2hhZG93IiwidGFnIiwiaW5jbHVkZXMiLCJfZWxlbWVudDJ0YWduYW1lIiwiTElTUyIsImV4dGVuZHMiLCJwX2V4dGVuZHMiLCJob3N0IiwicF9ob3N0IiwiZGVwZW5kZW5jaWVzIiwicF9kZXBzIiwiYXR0cmlidXRlcyIsInBfYXR0cnMiLCJwYXJhbXMiLCJjb250ZW50IiwiY3NzIiwic2hhZG93IiwicF9zaGFkb3ciLCJIVE1MRWxlbWVudCIsIl9leHRlbmRzIiwiT2JqZWN0IiwiY2FuSGFzU2hhZG93IiwiRXJyb3IiLCJ1bmRlZmluZWQiLCJwdXNoIiwiSFRNTFRlbXBsYXRlRWxlbWVudCIsImlubmVySFRNTCIsInRyaW0iLCJSZXNwb25zZSIsInRleHQiLCJMSVNTQmFzZSIsIlBhcmFtZXRlcnMiLCJzdHlsZXNoZWV0cyIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImZldGNoX2NzcyIsIkNTU1N0eWxlU2hlZXQiLCJIVE1MU3R5bGVFbGVtZW50Iiwic2hlZXQiLCJzdHlsZSIsInJlcGxhY2UiLCJtYXAiLCJpZHgiLCJjb25zdHJ1Y3RvciIsImF0dHJzIiwic2V0QXR0ckRlZmF1bHQiLCJhdHRyIiwidmFsdWUiLCJvbkF0dHJDaGFuZ2VkIiwiX25hbWUiLCJfb2xkVmFsdWUiLCJfbmV3VmFsdWUiLCJpc0luRE9NIiwib25ET01Db25uZWN0ZWQiLCJvbkRPTURpc2Nvbm5lY3RlZCIsImV4dGVuZHNMSVNTIiwiTGlzcyIsInBhcmFtZXRlcnMiLCJhc3NpZ24iLCJFeHRlbmRlZExJU1MiLCJ0IiwiaWQiLCJidWlsZExJU1NIb3N0IiwiX3BhcmFtcyIsImFscmVhZHlEZWNsYXJlZENTUyIsIlNldCIsIkdFVCIsIlN5bWJvbCIsIlNFVCIsInByb3BlcnRpZXMiLCJmcm9tRW50cmllcyIsIm4iLCJlbnVtZXJhYmxlIiwiZ2V0Iiwic2V0IiwiQXR0cmlidXRlcyIsIm5hbWUiLCJkYXRhIiwiZGVmYXVsdHMiLCJzZXR0ZXIiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiTElTU0hvc3RCYXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJpc0luaXQiLCJpbml0aWFsaXplIiwiYXBpIiwiaW5pdCIsIkxJU1NTeW5jIiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCJjb25uZWN0ZWRDYWxsYmFjayIsImN1c3RvbUVsZW1lbnRzIiwidXBncmFkZSIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwib25DbGlja0V2ZW50Iiwib2JzIiwiZ2V0QXR0cmlidXRlIiwiYWRvcHRlZFN0eWxlU2hlZXRzIiwic2hhcmVkQ1NTIiwiY3Nzc2VsZWN0b3IiLCJDU1NTZWxlY3RvciIsImhhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImh0bWxfc3R5bGVzaGVldHMiLCJydWxlIiwiY3NzUnVsZXMiLCJjc3NUZXh0IiwiaGVhZCIsImFwcGVuZCIsImFkZCIsInRlbXBsYXRlX2VsZW0iLCJzdHIiLCJfIiwibWF0Y2giLCJjaGlsZE5vZGVzIiwib2JqIiwiaGFzU2hhZG93IiwiZ2V0UGFydCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRQYXJ0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0YWdOYW1lIiwicmVtb3ZlQXR0cmlidXRlIiwib2JzZXJ2ZWRBdHRyaWJ1dGVzIiwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIiwib2xkVmFsdWUiLCJuZXdWYWx1ZSIsIl9ET01Db250ZW50TG9hZGVkIiwicmVhZHlTdGF0ZSIsImRlZmluZSIsInRhZ25hbWUiLCJDb21wb25lbnRDbGFzcyIsIkNsYXNzIiwiaHRtbHRhZyIsImFsbCIsIkxJU1NjbGFzcyIsIm9wdHMiLCJpbnNlcnRHbG9iYWxDU1NSdWxlcyIsImNzc19zdHlsZSIsInJlcGxhY2VTeW5jIiwiaW5zZXJ0UnVsZSIsIkRFTEVHQVRFRF9FVkVOVFMiLCJBTFJFQURZX1BST0NFU1NFRCIsImV2IiwiaGFuZGxlcnMiLCJ0eXBlIiwiZWxlbSIsImNvbXBvc2VkUGF0aCIsIlNoYWRvd1Jvb3QiLCJ3aW5kb3ciLCJ0YXJnZXQiLCJzZWxlY3RvciIsImhhbmRsZXIiLCJtYXRjaGVzIiwiaW5zZXJ0R2xvYmFsRGVsZWdhdGVkTGlzdGVuZXIiLCJldmVudF9uYW1lIiwiY2xvc2VzdCIsImVsZW1lbnQiLCJyZXN1bHQiLCJyb290IiwiZ2V0Um9vdE5vZGUiLCJidWlsZCIsInBhcmVudCIsImNsYXNzZXMiLCJjc3N2YXJzIiwibGlzdGVuZXJzIiwiQ3VzdG9tQ2xhc3MiLCJ3aGVuRGVmaW5lZCIsInRvTG93ZXJDYXNlIiwiY2xhc3NMaXN0Iiwic2V0UHJvcGVydHkiLCJ0b2dnbGVBdHRyaWJ1dGUiLCJkYXRhc2V0IiwicmVwbGFjZUNoaWxkcmVuIiwiZ2V0TElTUyIsImNhbGxiYWNrIiwid2hlbkFsbERlZmluZWQiLCJ0YWduYW1lcyIsImlzRGVmaW5lZCIsImdldE5hbWUiLCJnZXRMSVNTU3luYyIsIl9idWlsZFFTIiwidGFnbmFtZV9vcl9wYXJlbnQiLCJxcyIsInFzbyIsInFzYSIsImVsZW1lbnRzIiwicHJvbWlzZXMiLCJxc2MiLCJyZXMiLCJxc1N5bmMiLCJxc2FTeW5jIiwicXNjU3luYyIsIkxJU1NfQXV0byIsIm5hdmlnYXRvciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsImNvbnRyb2xsZXIiLCJzcmMiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm11dGF0aW9uIiwiYWRkaXRpb24iLCJhZGRlZE5vZGVzIiwiRWxlbWVudCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwicmVzb3VyY2VzIiwiZGVmaW5lV2ViQ29tcG9uZW50IiwiZmlsZXMiLCJqcyIsImtsYXNzIiwiV2ViQ29tcG9uZW50IiwiZmlsZW5hbWVzIiwiZmlsZSIsImVuZHNXaXRoIiwiX2ltcG9ydCIsIl9mZXRjaFRleHQiLCJpIiwiQ3N0bUV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJhcmdzIiwiZGV0YWlsIiwiZmV0Y2hSZXNvdXJjZSIsInJlc291cmNlIiwiZmV0Y2giLCJ1cmkiLCJpc0xpc3NBdXRvIiwib3B0aW9ucyIsImhlYWRlcnMiLCJyZXNwb25zZSIsInN0YXR1cyIsImRlZmF1bHQiLCJlIiwiY29uc29sZSIsImxvZyIsIkhUTUxDTEFTU19SRUdFWCIsImVsZW1lbnROYW1lTG9va3VwVGFibGUiLCJleGVjIiwiRm9ybWF0cyIsInNfZm9ybXVsYSIsImdldFJhbmdlIiwiZm9ybWF0IiwiZXVyb3MiLCJzX2NvbXBsZXhfZm9ybXVsYSIsInNfdHlwZXMiLCJEYXRlIiwic19jdXJzb3IiLCJzXyRmb3JtdWxhIiwic18kZm9ybSIsInJlZiIsInNoZWV0X3JlY29waWVfbW90aXZhdGlvbiIsInNoZWV0X3JlY29waWVfbW90aXZhdGlvbl9lbXB0eSIsInNoZWV0X3JlY29waWVfaW5jciIsImMiLCJYIiwidGQiLCJmb2N1cyIsInRleHRDb250ZW50Iiwic3RyMmh0bWwiLCJSYW5nZU92ZXJsYXkiLCJFdmVudFRhcmdldCIsIm92ZXJsYXkiLCJjbGFzc2xpc3QiLCJ1cGRhdGUiLCJzZXRSYW5nZSIsInJhbmdlIiwicGxhZ2VfbmFtZSIsImdldFJlY3QiLCJyZWN0IiwidG9nZ2xlIiwic2V0UmVjdCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJGb3JtdWxhUmVmIiwic2V0Q29sb3IiLCJjb2xvcl9pZCIsInJlbW92ZSIsIlJlY29weUhhbmRsZSIsIngiLCJ5IiwidyIsImgiLCJGb3JtdWxhIiwiQ2FsY1NoZWV0IiwiQ2VsbExpc3QiLCJGb3JtYXRNYW5hZ2VyIiwiY3RybEtleSIsImNoYW5nZWQiLCJrZXkiLCJzZWxlY3Rpb24iLCJ0b2dnbGVGb3JtYXQiLCJzaGlmdEtleSIsInBvdXJjZW50IiwibnVtYmVyIiwicHJldmVudERlZmF1bHQiLCJkaXNwYXRjaEV2ZW50IiwiZmxvYXQyRGF0ZSIsImZsb2F0Iiwic2V0RGF0ZSIsImdldERhdGUiLCJkYXRlMkZsb2F0IiwiZGF0ZSIsImJlZyIsImdldFRpbWUiLCJ0b0ZpeGVkIiwiZm9ybWF0UmF3IiwicHRoaXMiLCJyYXdDb250ZW50IiwidG9TdHJpbmciLCJjYWxsIiwiY2FjaGVkVmFsdWUiLCJwcmVjIiwidG9QcmVjaXNpb24iLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJnZXRTaGVldEZyb21DZWxsIiwidG9Mb2NhbGVTdHJpbmciLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJzbGljZSIsIkZvcm1hdCIsImFwcGx5VG8iLCJjZWxsIiwiY2VsbHMiLCJ2YWwiLCJyIiwiaiIsInJlbGF0aXZlVG8iLCJzdGFydHNXaXRoIiwiZ2V0UHJvcGVydHkiLCJoYXNQcm9wZXJ0eSIsImV4dHJhY3RGb3JtYXQiLCJmMiIsInZhbHVlcyIsIml0ZW0iLCJnZXRQcm9wZXJ0eVZhbHVlIiwiY29sc3BhbiIsInJvd3NwYW4iLCJzcGFuIiwiaGFzQXR0cmlidXRlIiwicHJlY2lzaW9uIiwiQ2FsY0Zvcm11bGEiLCJzdGF0ZXMiLCJjZWxsX2VkaXQiLCJzdGF0ZSIsInN5bmNUbyIsImN1cnNvciIsImZpcnN0Q2VsbCIsImlzUk8iLCJyYW5nZXNfdG9rZW4iLCJkcm93IiwiZGNvbCIsIm5ld19yYW5nZXMiLCJwb3MiLCJjZWxsUG9zIiwibGFzdEluZGV4T2YiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJuZXdfZm9ybXVsYSIsIm9mZnNldCIsImVuZCIsInBhcnNlX2Zvcm11bGEiLCJyYW5nZXNUb2tlbiIsInJlc2V0Q2FjaGUiLCJleHRyYWN0VG9rZW4iLCJ0b2tlbiIsImhhc0NvbW1hIiwiTm9kZSIsImNoaWxkcmVuIiwiZmN0IiwiZXZhbCIsInRvTnVtYmVyIiwiYSIsIk51bWJlciIsIm9wX2ltcGwiLCJiIiwiTWF0aCIsInBvdyIsIm9wX3ByaW8iLCJvcHMiLCJvcCIsInRva2VubGlzdDJUcmVlIiwidG9rZW5zIiwibmIiLCJyYXciLCJjdXIiLCJwcmlvcml0eSIsImZpbmRJbmRleCIsInVfb3AiLCJvcF90b2tlbiIsImxlZnQiLCJyaWdodCIsImN1clRva2VuIiwibm9kZSIsInJhbmdlcyIsImZpbHRlciIsIlBsYWdlRm9ybXVsYSIsImNvZGUiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJzZWxlY3RlZCIsImdldENlbGxzIiwiY2xlYXIiLCJibHVyIiwiUGxhZ2VTZWxlY3RvciIsInNlbGVjdGVkX2NlbGxzIiwiY29scyIsInRib2R5IiwiY29sX2lkIiwiY2xpZW50WCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJvd3MiLCJyb3dfaWQiLCJjbGllbnRZIiwibWFpbiIsIm9uX21vdXNlX21vdmUiLCJyZXBsYWNlQWxsIiwiZ2V0VmlzaWJsZUNlbGwiLCJwb3MycmVmIiwibmJSb3dzIiwibmJDb2xzIiwib25jZSIsImlzQWN0aXZlIiwib25JbnB1dCIsInJyYW5nZSIsImdldFNlbGVjdGlvbiIsImdldFJhbmdlQXQiLCJzdGFydE9mZnNldCIsImNoaWxkIiwibm9kZVR5cGUiLCJURVhUX05PREUiLCJzdGFydENvbnRhaW5lciIsImNyZWF0ZVJhbmdlIiwic2VsIiwic2V0U3RhcnQiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwicGFyc2VJbnB1dCIsInRlc3RfbnVtYmVyIiwiaXNOYU4iLCJwYXJ0cyIsInNwbGl0IiwidGVzdF9kYXRlIiwiZ2V0RnVsbFllYXIiLCJTdGF0ZSIsInByZXZfc3RhdGUiLCJTdGF0ZXMiLCJlbnRyaWVzIiwicyIsInRibF9vZmZzZXQiLCJvZmZzZXRUb3AiLCJzdGFydCIsIm9mZnNldExlZnQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInJvd19kaWZmIiwiY29sX2RpZmYiLCJyb3ciLCJjb2wiLCJyZWNvcHkiLCJjb3B5IiwibGFzdF9yZWNvcHlfdGFyZ2V0IiwibGFzdF9yZWNvcHlfZGlyIiwib25fcmVjb3B5X21vdmUiLCJkX3B4Iiwid2lkdGgiLCJkX3B5IiwiaGVpZ2h0IiwiZF94IiwiZF95Iiwic2lnbiIsImFicyIsInByZXYiLCJkaWZmX3giLCJkaWZmX3kiLCJwb3NfY3VyIiwiY2xhc3NOYW1lIiwiZm9ybXVsYV9iYXIiLCJwbGFnZSIsImZvcm11bGEiLCJybyIsImlzX3JvIiwiZF9yb3ciLCJkX2NvbCIsIm5leHQiLCJhbHRLZXkiLCJkc3QiLCJkZWVwQ2xvbmUiLCJkZWxldGVGb3JtYXQiLCJkZWxldGVDb250ZW50IiwiYnViYmxlcyIsIm9uSW5wdXQyIiwicmFuZ2VzX2NvbG9ycyIsImN1cl9vZmZzZXQiLCJyYW5nZV9uYW1lIiwicmFuZ2VzX25hbWVzIiwia2V5cyIsIndhcm4iLCJwYXJlbnRFbGVtZW50IiwicmVzaXplIiwibmJyb3dzIiwibmJjb2xzIiwiY29sX2h0bWwiLCJ0aCIsInJvd19odG1sIiwidGFibGUiLCJyZXNpemVPYnMiLCJSZXNpemVPYnNlcnZlciIsImZyb20iLCJ0byIsIkhUTUxUYWJsZUNlbGxFbGVtZW50IiwicmVmMnBvcyIsImJlZ19yb3ciLCJiZWdfY29sIiwiZW5kX3JvdyIsImVuZF9jb2wiLCJlbmRfbGluZV9jb2wiLCJzZXAiLCJzZWFyY2giLCJjaGFyQ29kZUF0IiwiY29sX3N0ciIsImZpcnN0RWxlbWVudENoaWxkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic29ydCIsIm1pbiIsIm1heCIsIm5iX2NvbHMiLCJmbG9vciIsImYiLCJpc0Zvcm1hdCIsInJhd192YWwiLCJ2IiwiZGlmZiIsImZvcm1hdHMiLCJuYl9kYXRlcyIsImluZGV4T2YiLCJzZXRSTyIsImNsb25lIiwiY2xvbmVOb2RlIiwic25hbWUiLCJwYXRoIiwicm9vdF9wYXRoIiwiaG9zdG5hbWUiLCJwYWdlcyIsImhlYWRlciIsInRpdGxlcyIsImh0cmVlIiwiaHRtbCIsImxldmVsIiwiaHRyZWVfY3Vyc29yIiwidGl0bGUiLCJzZWFyY2hDdXJIZWFkZXIiLCJwb3NpdGlvbiIsImhpZCIsImdldFRpdGxlUHJlZml4IiwibnVtIiwiYnVpbGRNZW51Iiwibm9kZXMiLCJtZW51IiwidXBkYXRlSGVhZGVyIiwibGFzdCIsInNjcm9sbFRvcCIsInJldmVyc2UiLCJobm9kZSIsImhfaHRtbCIsImxpbmsiLCJlbXB0eSIsIm1ha2VfcGFnZV9ocmVmIiwicGF0aHByZWZpeCIsImRlc2MiLCJocmVmIiwibWFrZV9wYWdlX21lbnUiLCJmaW5kIiwicGFnZSIsImN1cnBhZ2UiLCJtb2R1bGVfaHRtbCIsInR5cGVfaHRtbCIsImRlc2NfdHlwZSIsImRlc2MyX2lkeCIsImJvZHkiLCJzZXNzaW9uX2h0bWwiLCJ0ZW1wbGF0ZSIsInN0cjJERiJdLCJzb3VyY2VSb290IjoiIn0=