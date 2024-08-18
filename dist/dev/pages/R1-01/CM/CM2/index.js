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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0EsR0FBRztVQUNIO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxHQUFHO1VBQ0g7VUFDQSxFQUFFO1VBQ0Y7VUFDQTs7Ozs7VUNoRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQSx5Q0FBeUMsd0NBQXdDO1VBQ2pGO1VBQ0E7VUFDQTs7Ozs7VUNQQTs7Ozs7VUNBQTtVQUNBO1VBQ0E7VUFDQSx1REFBdUQsaUJBQWlCO1VBQ3hFO1VBQ0EsZ0RBQWdELGFBQWE7VUFDN0Q7Ozs7O1VDTkE7Ozs7O1NFQUE7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00yL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTIvaW5kZXgubWQiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvaW5kZXguY3NzIiwid2VicGFjazovL0NvdXJzLy4vbGlicy9MSVNTL2luZGV4LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMi9pbmRleC50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9SYW5nZU92ZXJsYXkudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvZm9ybWF0LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL2Zvcm11bGFfZWRpdG9yLnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL2Zvcm11bGFfcGFyc2VyLnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL3BsYWdlX2VkaXRvci50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9wbGFnZV9zZWxlY3Rvci50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9zaGVldC50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy90b29sYmFyLnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jb250ZW50LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9tZW51LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC91dGlscy9zdHIyaHRtbC50cyIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvYXN5bmMgbW9kdWxlIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwYWdlcy9SMS0wMS9DTS9DTTIvaW5kZXguaHRtbFwiOyIsImV4cG9ydCBkZWZhdWx0IFwiOmhvc3QgdGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXG4gICAgJiA+IHRib2R5IHtcXG4gICAgICAgIG91dGxpbmU6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgfVxcblxcbiAgICAmID4gdGJvZHkgPiB0cjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIFxcbiAgICAgICAgJiA+IHRoIHtcXG4gICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG46aG9zdCA6aXModHIsdGgsdGQpIHtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjYzBjMGMwO1xcbn1cXG5cXG46aG9zdChbc2hvd2dyaWQ9XFxcImZhbHNlXFxcIl0pIHRkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuOmhvc3QgdHIge1xcbiAgICBoZWlnaHQ6IDAuNDVjbTtcXG4gICAgbGluZS1oZWlnaHQ6IDAuNDVjbTtcXG59XFxuXFxuXFxuOmhvc3QgOmlzKHRkLCB0aCk6bm90KFtjb250ZW50ZWRpdGFibGVdKSB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4vKlxcbjpob3N0IHRkW2NvbnRlbnRlZGl0YWJsZV0ge1xcbiAgICB1c2VyLXNlbGVjdDogdGV4dDtcXG59Ki9cXG5cXG46aG9zdCA6aXModGQsIHRoKSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDIuMjZjbTtcXG4gICAgaGVpZ2h0OiAwLjQ1Y207XFxuXFxuICAgIGZvbnQtc2l6ZTogMTBwdDtcXG5cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdMaWJlcmF0aW9uIFNhbnMnO1xcbn1cXG5cXG46aG9zdCB0ciA+IHRoOmZpcnN0LWNoaWxkIHtcXG4gICAgd2lkdGg6IGNhbGMoIDIuMjZjbSAvIDIuNSkgO1xcbn1cXG5cXG46aG9zdCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG46aG9zdCBkaXYudG9vbGJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuXFxuICAgICYgPiAqOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgICAgIGZsZXg6IDEgMSAwO1xcbiAgICB9XFxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIHdpZHRoOiBjYWxjKCAxLjUgKiAyLjI2Y20gKTtcXG4gICAgfVxcbn1cXG5cXG46aG9zdCB0aCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XFxuICAgIGJvcmRlci1jb2xvcjogIzhhOGE4YTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG5cXG4gICAgJi5oaWdobGlnaHQge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM5OGVlNztcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcbn1cXG5cXG46aG9zdCguY2VsbF9lZGl0KSAuY3Vyc29yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuOmhvc3QoLnJlY29weSkge1xcbiAgICBjdXJzb3I6IGNlbGw7XFxufVxcblxcbjpob3N0IHtcXG5cXG4gICAgLnJlY29weSB7XFxuICAgICAgICBjdXJzb3I6IGNlbGw7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk4ZWU3O1xcbiAgICB9XFxuXFxuICAgIC5jdXJzb3Ige1xcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMzOThlZTc7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG46aG9zdCAub3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOmhvc3QgLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbjpob3N0IC5zZWxlY3Rpb25faGlnaGxpZ2h0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5OGVlNzsgLyojY2RlM2Y5OyovXFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8qIFRPRE8gKi9cXG59XFxuXFxuXFxuOmhvc3QgdGQge1xcblxcbiAgICAtLWZvbnRfc2l6ZTogMTBwdDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250X3NpemUpO1xcbiAgICBsaW5lLWhlaWdodDogY2FsYyggdmFyKC0tZm9udF9zaXplKSAqIDEuMiApO1xcblxcbiAgICAtLWluZGVudDogMDtcXG5cXG4gICAgLS1ib3JkZXJfY29sb3I6IGJsYWNrO1xcbiAgICAtLWJhY2tncm91bmRfY29sb3I6IHdoaXRlO1xcbiAgICAtLWZvcmVncm91bmRfY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kX2NvbG9yKTtcXG4gICAgY29sb3IgICAgICAgICAgIDogdmFyKC0tZm9yZWdyb3VuZF9jb2xvcik7XFxuXFxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxuXFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuXFxuICAgICY6aXMoW2RhdGEtdHlwZT1cXFwibnVtYmVyXFxcIl0sW2RhdGEtdHlwZT1cXFwicG91cmNlbnRcXFwiXSxbZGF0YS10eXBlPVxcXCJkYXRlXFxcIl0sIFtkYXRhLXR5cGU9XFxcImJvb2xlYW5cXFwiXSkge1xcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIH1cXG5cXG4gICAgJltjb250ZW50ZWRpdGFibGVdIHtcXG4gICAgICAgIG91dGxpbmU6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgfVxcblxcbiAgICAmLmFqdXN0ZXIge1xcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gICAgfVxcblxcbiAgICAvKiogc3R5bGUgKiovXFxuICAgICYuaXRhbGljIHtcXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgfVxcbiAgICAmLmJvbGQge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIH1cXG4gICAgJi51bmRlcmxpbmUge1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIH1cXG4gICAgJi5hbGlnbl9sZWZ0IHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyggdmFyKC0taW5kZW50KSAqIDEwcHgpO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgfVxcbiAgICAmLmFsaWduX2NlbnRlciB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgJi5hbGlnbl9yaWdodCB7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKCB2YXIoLS1pbmRlbnQpICogMTBweCk7XFxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgfVxcbiAgICAmLnZhbGlnbl90b3Age1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgfVxcbiAgICAmLnZhbGlnbl9taWRkbGUge1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgfVxcbiAgICAmLnZhbGlnbl9ib3R0b20ge1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gICAgfVxcbiAgICAvKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMjQxNzU3L2FwcGx5aW5nLWJvcmRlcnMtdG8tYS1zaW5nbGUtdGFibGUtY2VsbC13aGVuLXVzaW5nLWJvcmRlci1jb2xsYXBzZSAqL1xcbiAgICAmLmJvcmRlcl90b3Age1xcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IGRvdWJsZSB2YXIoLS1ib3JkZXJfY29sb3IpO1xcbiAgICB9XFxuICAgICYuYm9yZGVyX2JvdHRvbSB7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZG91YmxlIHZhcigtLWJvcmRlcl9jb2xvcik7XFxuICAgIH1cXG4gICAgJi5ib3JkZXJfbGVmdCB7XFxuICAgICAgICBib3JkZXItbGVmdDogMXB4IGRvdWJsZSB2YXIoLS1ib3JkZXJfY29sb3IpO1xcbiAgICB9XFxuICAgICYuYm9yZGVyX3JpZ2h0IHtcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IGRvdWJsZSB2YXIoLS1ib3JkZXJfY29sb3IpO1xcbiAgICB9XFxufVxcblxcbjpob3N0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG46aG9zdCAucmFuZ2VfaGlnaGxpZ2h0IHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcblxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWhpZ2hsaWdodF9jb2xvcik7XFxufVxcblxcbjpob3N0IC5mb3JtdWxhX2hpZ2hsaWdodCB7XFxuICAgIGNvbG9yOiB2YXIoLS1oaWdobGlnaHRfY29sb3IpO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzAge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogI2ZhMGMwYztcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF8xIHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICNmYTBjZmE7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfMiB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjMGM4NDBjO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzMge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzAxMDE4MDtcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF80IHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICM4NzE3MTc7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfNSB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjODcxNzg3O1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzYge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzg0ODQwYztcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF83IHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICMwYzBjZmE7XFxufVxcblxcblxcbi5jb3B5X2hpZ2hsaWdodCB7XFxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCBibGFjaztcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi8qIFRvbW9ycm93IFRoZW1lICovXFxuLyogaHR0cDovL2ptYmxvZy5naXRodWIuY29tL2NvbG9yLXRoZW1lcy1mb3ItZ29vZ2xlLWNvZGUtaGlnaGxpZ2h0anMgKi9cXG4vKiBPcmlnaW5hbCB0aGVtZSAtIGh0dHBzOi8vZ2l0aHViLmNvbS9jaHJpc2tlbXBzb24vdG9tb3Jyb3ctdGhlbWUgKi9cXG5cXG4vKiBUb21vcnJvdyBDb21tZW50ICovXFxuLmhsanMtY29tbWVudCxcXG4uaGxqcy1xdW90ZSB7XFxuXFx0Y29sb3I6ICM4ZTkwOGM7XFxufVxcblxcbi8qIFRvbW9ycm93IFJlZCAqL1xcbi5obGpzLXZhcmlhYmxlLFxcbi5obGpzLXRlbXBsYXRlLXZhcmlhYmxlLFxcbi5obGpzLXRhZyxcXG4uaGxqcy1uYW1lLFxcbi5obGpzLXNlbGVjdG9yLWlkLFxcbi5obGpzLXNlbGVjdG9yLWNsYXNzLFxcbi5obGpzLXJlZ2V4cCxcXG4uaGxqcy1kZWxldGlvbiB7XFxuXFx0Y29sb3I6ICNjODI4Mjk7XFxufVxcblxcbi8qIFRvbW9ycm93IE9yYW5nZSAqL1xcbi5obGpzLW51bWJlcixcXG4uaGxqcy1idWlsdF9pbixcXG4uaGxqcy1idWlsdGluLW5hbWUsXFxuLmhsanMtbGl0ZXJhbCxcXG4uaGxqcy10eXBlLFxcbi5obGpzLXBhcmFtcyxcXG4uaGxqcy1tZXRhLFxcbi5obGpzLWxpbmsge1xcblxcdGNvbG9yOiAjZjU4NzFmO1xcbn1cXG5cXG4vKiBUb21vcnJvdyBZZWxsb3cgKi9cXG4uaGxqcy1hdHRyaWJ1dGUge1xcblxcdGNvbG9yOiAjZWFiNzAwO1xcbn1cXG5cXG4vKiBUb21vcnJvdyBHcmVlbiAqL1xcbi5obGpzLXN0cmluZyxcXG4uaGxqcy1zeW1ib2wsXFxuLmhsanMtYnVsbGV0LFxcbi5obGpzLWFkZGl0aW9uIHtcXG5cXHRjb2xvcjogIzcxOGMwMDtcXG59XFxuXFxuLyogVG9tb3Jyb3cgQmx1ZSAqL1xcbi5obGpzLXRpdGxlLFxcbi5obGpzLXNlY3Rpb24ge1xcblxcdGNvbG9yOiAjNDI3MWFlO1xcbn1cXG5cXG4vKiBUb21vcnJvdyBQdXJwbGUgKi9cXG4uaGxqcy1rZXl3b3JkLFxcbi5obGpzLXNlbGVjdG9yLXRhZyB7XFxuXFx0Y29sb3I6ICM4OTU5YTg7XFxufVxcblxcbi5obGpzIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRvdmVyZmxvdy14OiBhdXRvO1xcblxcdGNvbG9yOiAjNGQ0ZDRjO1xcblxcdHBhZGRpbmc6IDAuNWVtO1xcbn1cXG5cXG4uaGxqcy1lbXBoYXNpcyB7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uaGxqcy1zdHJvbmcge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cIjsiLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIGV4cG9ydGVkIHR5cGVzID09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCB0eXBlIENTU19SZXNvdXJjZSA9IHN0cmluZ3xSZXNwb25zZXxIVE1MU3R5bGVFbGVtZW50fENTU1N0eWxlU2hlZXQ7XG5leHBvcnQgdHlwZSBDU1NfU291cmNlICAgPSBDU1NfUmVzb3VyY2UgfCBQcm9taXNlPENTU19SZXNvdXJjZT47XG5cbmV4cG9ydCB0eXBlIEhUTUxfUmVzb3VyY2UgPSBzdHJpbmd8UmVzcG9uc2V8SFRNTFRlbXBsYXRlRWxlbWVudDtcbmV4cG9ydCB0eXBlIEhUTUxfU291cmNlICAgPSBIVE1MX1Jlc291cmNlIHwgUHJvbWlzZTxIVE1MX1Jlc291cmNlPjtcblxuZXhwb3J0IHR5cGUgTElTU09wdGlvbnM8RXh0ZW5kcyAgICBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdFx0SG9zdCAgICAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdFx0QXR0cnMgICAgICBleHRlbmRzIHN0cmluZyxcblx0XHRcdFx0XHRcdFBhcmFtZXRlcnMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PiA9IHtcblxuXHRleHRlbmRzPzogQ29uc3RydWN0b3I8RXh0ZW5kcz4sXG5cdGhvc3QgICA/OiBDb25zdHJ1Y3RvcjxIb3N0PixcblxuXHRkZXBlbmRlbmNpZXM/OiByZWFkb25seSBQcm9taXNlPGFueT5bXSxcblx0YXR0cmlidXRlcyAgPzogcmVhZG9ubHkgQXR0cnNbXSxcblx0cGFyYW1zICAgICAgPzogUmVhZG9ubHk8UGFyYW1ldGVycz4sXG5cblx0Y29udGVudD86IEhUTUxfU291cmNlLFxuXHRjc3MgICAgPzogIENTU19Tb3VyY2UgfCByZWFkb25seSBDU1NfU291cmNlW10sXG5cdHNoYWRvdyA/OiAgU2hhZG93Q2ZnLFxufTtcblxuZXhwb3J0IGVudW0gU2hhZG93Q2ZnIHtcblx0Tk9ORSA9ICdub25lJyxcblx0T1BFTiA9ICdvcGVuJywgXG5cdENMT1NFPSAnY2xvc2VkJ1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBDbGFzcyA9PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5sZXQgX19jc3RyX2hvc3QgIDogYW55ID0gbnVsbDtcblxudHlwZSBDb25zdHJ1Y3RvcjxUPiA9IG5ldyAoKSA9PiBUO1xuaW50ZXJmYWNlIENsYXNzIHt9XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50L2F0dGFjaFNoYWRvd1xuY29uc3QgQ0FOX0hBVkVfU0hBRE9XID0gW1xuXHRudWxsLCAnYXJ0aWNsZScsICdhc2lkZScsICdibG9ja3F1b3RlJywgJ2JvZHknLCAnZGl2Jyxcblx0J2Zvb3RlcicsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdoZWFkZXInLCAnbWFpbicsXG5cdCduYXYnLCAncCcsICdzZWN0aW9uJywgJ3NwYW4nXG5cdFxuXTtcbmZ1bmN0aW9uIF9jYW5IYXNTaGFkb3codGFnOiB0eXBlb2YgSFRNTEVsZW1lbnQpIHtcblx0cmV0dXJuIENBTl9IQVZFX1NIQURPVy5pbmNsdWRlcyggX2VsZW1lbnQydGFnbmFtZSh0YWcpICk7XG59XG5cbnR5cGUgUmVzb3VyY2UgPSBVUkx8UmVzcG9uc2U7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTElTUzxFeHRlbmRzICAgIGV4dGVuZHMgQ2xhc3MgICAgICAgICAgICAgID0gQ2xhc3MsXG5cdFx0XHRcdFx0XHRcdCBIb3N0ICAgICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQgICAgICAgID0gSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0XHRcdCBBdHRycyAgICAgIGV4dGVuZHMgc3RyaW5nICAgICAgICAgICAgID0gbmV2ZXIsXG5cdFx0XHRcdFx0XHRcdCBQYXJhbWV0ZXJzIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+ID0ge30+KHtcblx0XHRcdFx0XHRcdFx0XHRleHRlbmRzICAgICA6IHBfZXh0ZW5kcyxcblx0XHRcdFx0XHRcdFx0XHRob3N0ICAgICAgICA6IHBfaG9zdCxcblx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmNpZXM6IHBfZGVwcyxcblx0XHRcdFx0XHRcdFx0ICAgIGF0dHJpYnV0ZXMgIDogcF9hdHRycyxcblx0XHRcdFx0XHRcdFx0ICAgIHBhcmFtcyxcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50LFxuXHRcdFx0XHRcdFx0XHRcdGNzcyxcblx0XHRcdFx0XHRcdFx0XHRzaGFkb3cgICAgICA6IHBfc2hhZG93LFxuXHRcdFx0XHRcdFx0XHR9OiBMSVNTT3B0aW9uczxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1ldGVycz4gPSB7fSkge1xuXG5cdC8vVE9ETyBtZXJnZSBwcm9wIGlmIGV4dGVuZHMgTElTUy4uLlxuXG5cdGNvbnN0IGhvc3QgICAgICAgID0gcF9ob3N0ICAgID8/IEhUTUxFbGVtZW50IGFzIENvbnN0cnVjdG9yPEhvc3Q+O1xuXHRjb25zdCBfZXh0ZW5kcyAgICA9IHBfZXh0ZW5kcyA/PyBPYmplY3QgICAgICBhcyB1bmtub3duIGFzIENvbnN0cnVjdG9yPEV4dGVuZHM+O1xuXHRjb25zdCBhdHRyaWJ1dGVzICA9IHBfYXR0cnMgICA/PyBbXTtcblx0Y29uc3QgZGVwZW5kZW5jaWVzPSBwX2RlcHMgICAgPyBbLi4ucF9kZXBzXSA6IFtdO1xuXHRjb25zdCBjYW5IYXNTaGFkb3c9IF9jYW5IYXNTaGFkb3coaG9zdCk7XG5cdGNvbnN0IHNoYWRvdyAgICAgID0gcF9zaGFkb3cgID8/IChjYW5IYXNTaGFkb3cgPyBTaGFkb3dDZmcuQ0xPU0UgOiBTaGFkb3dDZmcuTk9ORSk7XG5cblx0aWYoICEgY2FuSGFzU2hhZG93ICYmIHNoYWRvdyAhPT0gU2hhZG93Q2ZnLk5PTkUpXG5cdFx0dGhyb3cgbmV3IEVycm9yKGBIb3N0IGVsZW1lbnQgJHtfZWxlbWVudDJ0YWduYW1lKGhvc3QpfSBkb2VzIG5vdCBzdXBwb3J0IFNoYWRvd1Jvb3RgKTtcblxuXHQvLyBDT05URU5UIHByb2Nlc3Npbmdcblx0aWYoIGNvbnRlbnQgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdGRlcGVuZGVuY2llcy5wdXNoKCAoIGFzeW5jICgpID0+IHtcblxuXHRcdFx0Y29udGVudCA9IGF3YWl0IGNvbnRlbnQ7XG5cblx0XHRcdGlmKGNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MVGVtcGxhdGVFbGVtZW50KVxuXHRcdFx0Y29udGVudCA9IGNvbnRlbnQuaW5uZXJIVE1MO1xuXG5cdFx0XHRpZiggdHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHtcblxuXHRcdFx0XHRjb250ZW50ID0gY29udGVudC50cmltKCk7IC8vIE5ldmVyIHJldHVybiBhIHRleHQgbm9kZSBvZiB3aGl0ZXNwYWNlIGFzIHRoZSByZXN1bHRcblx0XHRcdFx0aWYoY29udGVudCA9PT0gJycpXG5cdFx0XHRcdFx0Y29udGVudCA9IHVuZGVmaW5lZDtcblxuXHRcdFx0fVxuXHRcdFx0aWYoIGNvbnRlbnQgaW5zdGFuY2VvZiBSZXNwb25zZSApXG5cdFx0XHRcdGNvbnRlbnQgPSBhd2FpdCBjb250ZW50LnRleHQoKTtcblxuXHRcdFx0cmV0dXJuIExJU1NCYXNlLlBhcmFtZXRlcnMuY29udGVudCA9IGNvbnRlbnQ7XG5cdFx0fSkoKSApO1xuXHR9XG5cblx0Ly8gQ1NTIHByb2Nlc3Npbmdcblx0bGV0IHN0eWxlc2hlZXRzOiByZWFkb25seSBDU1NTdHlsZVNoZWV0W10gPSBbXTtcblx0aWYoIGNzcyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0aWYoICEgQXJyYXkuaXNBcnJheShjc3MpIClcblx0XHRcdGNzcyA9IFtjc3MgYXMgQ1NTX1NvdXJjZV07XG5cblx0XHRzdHlsZXNoZWV0cyA9IG5ldyBBcnJheTxDU1NTdHlsZVNoZWV0Pihjc3MubGVuZ3RoKTtcblxuXHRcdGNvbnN0IGZldGNoX2NzcyA9IChhc3luYyAoY3NzOiBDU1NfU291cmNlKSA9PiB7XG5cdFx0XHRjc3MgPSBhd2FpdCBjc3M7XG5cdFx0XHRpZihjc3MgaW5zdGFuY2VvZiBDU1NTdHlsZVNoZWV0KVxuXHRcdFx0XHRyZXR1cm4gY3NzO1xuXHRcdFx0aWYoIGNzcyBpbnN0YW5jZW9mIEhUTUxTdHlsZUVsZW1lbnQpXG5cdFx0XHRcdHJldHVybiBjc3Muc2hlZXQhO1xuXG5cdFx0XHRsZXQgc3R5bGUgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuXHRcdFx0aWYoIHR5cGVvZiBjc3MgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRcdHN0eWxlLnJlcGxhY2UoY3NzKTtcblx0XHRcdFx0cmV0dXJuIHN0eWxlO1xuXHRcdFx0fVxuXG5cdFx0XHQvL2lmKCBjc3MgaW5zdGFuY2VvZiBSZXNwb25zZSApXG5cdFx0XHRzdHlsZS5yZXBsYWNlKGF3YWl0IGNzcy50ZXh0KCkpO1xuXHRcdFx0cmV0dXJuIHN0eWxlO1xuXHRcdH0pO1xuXG5cdFx0ZGVwZW5kZW5jaWVzLnB1c2goIC4uLmNzcy5tYXAoIGFzeW5jIChjc3MsIGlkeCkgPT4gIChzdHlsZXNoZWV0cyBhcyBhbnkpW2lkeF0gPSBhd2FpdCBmZXRjaF9jc3MoY3NzKSApICk7XG5cdH1cblxuXHR0eXBlIExIb3N0ID0gTElTU0hvc3Q8TElTU0Jhc2U+O1xuXG5cdC8vIEB0cy1pZ25vcmVcblx0Y2xhc3MgTElTU0Jhc2UgZXh0ZW5kcyBfZXh0ZW5kcyB7XG5cblx0XHRyZWFkb25seSAjaG9zdDogYW55OyAvLyBwcmV2ZW50cyBpc3N1ZSAjMS4uLlxuXG5cdFx0Y29uc3RydWN0b3IoKSB7XG5cblx0XHRcdHN1cGVyKCk7XG5cblx0XHRcdC8vIGg0Y2ssIG9rYXkgYmVjYXVzZSBKUyBpcyBtb25vdGhyZWFkZWQuXG5cdFx0XHRpZiggX19jc3RyX2hvc3QgPT09IG51bGwgKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgZG8gbm90IGRpcmVjdGx5IGNhbGwgdGhpcyBjb25zdHJ1Y3RvclwiKTtcblx0XHRcdHRoaXMuI2hvc3QgPSBfX2NzdHJfaG9zdDtcblx0XHRcdF9fY3N0cl9ob3N0ID0gbnVsbDtcblx0XHR9XG5cblx0XHRwdWJsaWMgZ2V0IGhvc3QoKTogSG9zdCB7XG5cdFx0XHRyZXR1cm4gdGhpcy4jaG9zdDtcblx0XHR9XG5cdFx0cHJvdGVjdGVkIGdldCBhdHRycygpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkuYXR0cnM7XG5cdFx0fVxuXHRcdHByb3RlY3RlZCBzZXRBdHRyRGVmYXVsdCggYXR0cjogQXR0cnMsIHZhbHVlOiBzdHJpbmd8bnVsbCkge1xuXHRcdFx0cmV0dXJuICh0aGlzLiNob3N0IGFzIExIb3N0KS5zZXRBdHRyRGVmYXVsdChhdHRyLCB2YWx1ZSk7XG5cblx0XHR9XG5cdFx0cHJvdGVjdGVkIGdldCBwYXJhbXMoKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuI2hvc3QgYXMgTEhvc3QpLnBhcmFtcztcblx0XHR9XG5cdFx0cHJvdGVjdGVkIGdldCBjb250ZW50KCkge1xuXHRcdFx0cmV0dXJuICh0aGlzLiNob3N0IGFzIExIb3N0KS5jb250ZW50ITtcblx0XHR9XG5cblx0XHRzdGF0aWMgcmVhZG9ubHkgUGFyYW1ldGVycyA9IHtcblx0XHRcdGhvc3QsXG5cdFx0XHRkZXBlbmRlbmNpZXMsXG5cdFx0XHRhdHRyaWJ1dGVzLFxuXHRcdFx0cGFyYW1zLFxuXHRcdFx0Y29udGVudCxcblx0XHRcdHN0eWxlc2hlZXRzLFxuXHRcdFx0c2hhZG93LFxuXHRcdH07XG5cblx0XHRwcm90ZWN0ZWQgb25BdHRyQ2hhbmdlZChfbmFtZTogc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRcdF9vbGRWYWx1ZTogc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRcdF9uZXdWYWx1ZTogc3RyaW5nKTogdm9pZHxmYWxzZSB7fVxuXG5cdFx0cHJvdGVjdGVkIGdldCBpc0luRE9NKCkge1xuXHRcdFx0cmV0dXJuICh0aGlzLiNob3N0IGFzIExIb3N0KS5pc0luRE9NO1xuXHRcdH1cblx0XHRwcm90ZWN0ZWQgb25ET01Db25uZWN0ZWQoKSB7fVxuXHRcdHByb3RlY3RlZCBvbkRPTURpc2Nvbm5lY3RlZCgpIHt9XG5cdH1cblxuXHRyZXR1cm4gTElTU0Jhc2U7XG59XG5cbi8vVE9ETzogb3RoZXIgb3B0aW9ucy4uLlxuZnVuY3Rpb24gZXh0ZW5kc0xJU1M8RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdEF0dHJzMSAgIGV4dGVuZHMgc3RyaW5nLFxuXHRBdHRyczIgICBleHRlbmRzIHN0cmluZyxcblx0UGFyYW1zICBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pixcblx0VCBleHRlbmRzIExJU1NSZXR1cm5UeXBlPEV4dGVuZHMsIEhvc3QsIEF0dHJzMSwgUGFyYW1zPj4oTGlzczogVCwgcGFyYW1ldGVyczoge2F0dHJpYnV0ZXM6IHJlYWRvbmx5IEF0dHJzMltdfSkge1xuXG5cdC8vIFRPRE86IG90aGVyIG9wdGlvbnMuLi5cblx0Y29uc3QgYXR0cnMgPSBbLi4uTGlzcy5QYXJhbWV0ZXJzLmF0dHJpYnV0ZXMsIC4uLnBhcmFtZXRlcnMuYXR0cmlidXRlcyFdO1xuXHRjb25zdCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBMaXNzLlBhcmFtZXRlcnMsIHthdHRyaWJ1dGVzOiBhdHRyc30pO1xuXG5cdC8vIEB0cy1pZ25vcmUgOiBiZWNhdXNlIFRTIHN0dXBpZFxuXHRjbGFzcyBFeHRlbmRlZExJU1MgZXh0ZW5kcyBMaXNzIHtcblx0XHRjb25zdHJ1Y3RvciguLi50OiBhbnlbXSkge1xuXHRcdFx0Ly8gQHRzLWlnbm9yZSA6IGJlY2F1c2UgVFMgc3R1cGlkXG5cdFx0XHRzdXBlciguLi50KTtcblx0XHR9XG5cblx0XHRwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGF0dHJzKCkge1xuXHRcdFx0cmV0dXJuIHN1cGVyLmF0dHJzIGFzIFJlY29yZDxBdHRyczJ8QXR0cnMxLCBzdHJpbmd8bnVsbD47XG5cdFx0fVxuXG5cdFx0c3RhdGljIG92ZXJyaWRlIFBhcmFtZXRlcnMgPSBwYXJhbXM7XG5cdH1cblxuXHRyZXR1cm4gRXh0ZW5kZWRMSVNTO1xufVxuTElTUy5leHRlbmRzTElTUyA9IGV4dGVuZHNMSVNTO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIHR5cGUgaGVscGVycyA9PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnR5cGUgYnVpbGRMSVNTSG9zdFJldHVyblR5cGU8VD4gID0gVCBleHRlbmRzIExJU1NSZXR1cm5UeXBlPGluZmVyIEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluZmVyIEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluZmVyIEF0dHJzICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbmZlciBQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBSZXR1cm5UeXBlPHR5cGVvZiBidWlsZExJU1NIb3N0PEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXMsIFQ+PiA6IG5ldmVyO1xuXG5leHBvcnQgdHlwZSBMSVNTUmV0dXJuVHlwZTxcblx0RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdEF0dHJzICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4+ID0gUmV0dXJuVHlwZTx0eXBlb2YgTElTUzxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zPj47XG5leHBvcnQgdHlwZSBMSVNTQmFzZTxFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdFx0XHRcdFx0IEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHQgQXR0cnMgICBleHRlbmRzIHN0cmluZyxcblx0XHRcdFx0XHQgUGFyYW1zICBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pj4gPSBJbnN0YW5jZVR5cGU8TElTU1JldHVyblR5cGU8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcz4+O1xuZXhwb3J0IHR5cGUgTElTU0hvc3Q8TElTUyBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4gPiA9IEluc3RhbmNlVHlwZTxidWlsZExJU1NIb3N0UmV0dXJuVHlwZTxDb25zdHJ1Y3RvcjxMSVNTPiAmIHtQYXJhbWV0ZXJzOiBhbnl9Pj47XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1NIb3N0IGNsYXNzID09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxubGV0IGlkID0gMDtcblxuZnVuY3Rpb24gYnVpbGRMSVNTSG9zdDxFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdFx0XHRcdFx0ICAgSG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdCAgIEF0dHJzICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0ICAgUGFyYW1zICBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pixcblx0XHRcdFx0XHQgICBUIGV4dGVuZHMgTElTU1JldHVyblR5cGU8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcz4+KExpc3M6IFQsIF9wYXJhbXM6IFBhcnRpYWw8UGFyYW1zPiA9IHt9KSB7XG5cdGNvbnN0IHtcblx0XHRob3N0LFxuXHRcdGF0dHJpYnV0ZXMsXG5cdFx0Y29udGVudCxcblx0XHRzdHlsZXNoZWV0cyxcblx0XHRzaGFkb3csXG5cdH0gPSBMaXNzLlBhcmFtZXRlcnM7XG5cblx0Y29uc3QgYWxyZWFkeURlY2xhcmVkQ1NTID0gbmV3IFNldCgpO1xuXG5cdGNvbnN0IEdFVCA9IFN5bWJvbCgnZ2V0Jyk7XG5cdGNvbnN0IFNFVCA9IFN5bWJvbCgnc2V0Jyk7XG5cblx0Y29uc3QgcHJvcGVydGllcyA9IE9iamVjdC5mcm9tRW50cmllcyggYXR0cmlidXRlcy5tYXAobiA9PiBbbiwge1xuXG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uKCk6IHN0cmluZ3xudWxsICAgICAgeyByZXR1cm4gKHRoaXMgYXMgdW5rbm93biBhcyBBdHRyaWJ1dGVzKVtHRVRdKG4pOyB9LFxuXHRcdHNldDogZnVuY3Rpb24odmFsdWU6IHN0cmluZ3xudWxsKSB7IHJldHVybiAodGhpcyBhcyB1bmtub3duIGFzIEF0dHJpYnV0ZXMpW1NFVF0obiwgdmFsdWUpOyB9XG5cdH1dKSApO1xuXG5cdGNsYXNzIEF0dHJpYnV0ZXMge1xuICAgICAgICBbeDogc3RyaW5nXTogc3RyaW5nfG51bGw7XG5cbiAgICAgICAgI2RhdGEgICAgIDogUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD47XG4gICAgICAgICNkZWZhdWx0cyA6IFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuICAgICAgICAjc2V0dGVyICAgOiAobmFtZTogQXR0cnMsIHZhbHVlOiBzdHJpbmd8bnVsbCkgPT4gdm9pZDtcblxuICAgICAgICBbR0VUXShuYW1lOiBBdHRycykge1xuICAgICAgICBcdHJldHVybiB0aGlzLiNkYXRhW25hbWVdID8/IHRoaXMuI2RlZmF1bHRzW25hbWVdID8/IG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIFtTRVRdKG5hbWU6IEF0dHJzLCB2YWx1ZTogc3RyaW5nfG51bGwpe1xuICAgICAgICBcdHJldHVybiB0aGlzLiNzZXR0ZXIobmFtZSwgdmFsdWUpOyAvLyByZXF1aXJlZCB0byBnZXQgYSBjbGVhbiBvYmplY3Qgd2hlbiBkb2luZyB7Li4uYXR0cnN9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhICAgIDogUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD4sXG5cdFx0XHRcdFx0ZGVmYXVsdHM6IFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+LFxuICAgICAgICBcdFx0XHRzZXR0ZXIgIDogKG5hbWU6IEF0dHJzLCB2YWx1ZTogc3RyaW5nfG51bGwpID0+IHZvaWQpIHtcblxuICAgICAgICBcdHRoaXMuI2RhdGEgICAgID0gZGF0YTtcblx0XHRcdHRoaXMuI2RlZmF1bHRzID0gZGVmYXVsdHM7XG4gICAgICAgIFx0dGhpcy4jc2V0dGVyID0gc2V0dGVyO1xuXG4gICAgICAgIFx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywgcHJvcGVydGllcyk7XG4gICAgICAgIH1cblx0fVxuXG5cdC8vIEB0cy1pZ25vcmUgOiBiZWNhdXNlIFRTIGlzIHN0dXBpZC5cblx0Y2xhc3MgTElTU0hvc3RCYXNlIGV4dGVuZHMgaG9zdCB7XG5cblx0XHRyZWFkb25seSAjcGFyYW1zOiBQYXJhbXM7XG5cblx0XHRyZWFkb25seSAjaWQgPSArK2lkOyAvLyBmb3IgZGVidWdcblxuXHRcdGNvbnN0cnVjdG9yKHBhcmFtczogUGFydGlhbDxQYXJhbXM+ID0ge30pIHtcblx0XHRcdHN1cGVyKCk7XG5cdFx0XHR0aGlzLiNwYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBMaXNzLlBhcmFtZXRlcnMucGFyYW1zLCBfcGFyYW1zLCBwYXJhbXMpO1xuXG5cdFx0XHR0aGlzLiN3YWl0SW5pdCA9IG5ldyBQcm9taXNlKCAocmVzb2x2ZSkgPT4ge1xuXHRcdFx0XHRpZih0aGlzLmlzSW5pdClcblx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZSh0aGlzLiNBUEkhKTtcblx0XHRcdFx0dGhpcy4jcmVzb2x2ZSA9IHJlc29sdmU7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvKioqKiBwdWJsaWMgQVBJICoqKioqKioqKioqKiovXG5cblx0XHRnZXQgaXNJbml0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuI0FQSSAhPT0gbnVsbDtcblx0XHR9XG5cdFx0aW5pdGlhbGl6ZShwYXJhbXM6IFBhcnRpYWw8UGFyYW1zPiA9IHt9KSB7XG5cblx0XHRcdGlmKCB0aGlzLmlzSW5pdCApXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignRWxlbWVudCBhbHJlYWR5IGluaXRpYWxpemVkIScpO1xuXG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMuI3BhcmFtcywgcGFyYW1zKTtcblxuXHRcdFx0Y29uc3QgYXBpID0gdGhpcy5pbml0KCk7XG5cblx0XHRcdGlmKCB0aGlzLiNpc0luRE9NIClcblx0XHRcdFx0KGFwaSBhcyBhbnkpLm9uRE9NQ29ubmVjdGVkKCk7XG5cblx0XHRcdHJldHVybiBhcGk7XG5cdFx0fVxuXG5cdFx0Z2V0IExJU1NTeW5jKCkge1xuXHRcdFx0aWYoICEgdGhpcy5pc0luaXQgKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0FjY2Vzc2luZyBBUEkgYmVmb3JlIFdlYkNvbXBvbmVudCBpbml0aWFsaXphdGlvbiEnKTtcblx0XHRcdHJldHVybiB0aGlzLiNBUEkhO1xuXHRcdH1cblx0XHRnZXQgTElTUygpIHtcblx0XHRcdHJldHVybiB0aGlzLiN3YWl0SW5pdDtcblx0XHR9XG5cblx0XHQvKioqIGluaXQgKioqL1xuXHRcdCN3YWl0SW5pdDogUHJvbWlzZTxJbnN0YW5jZVR5cGU8VD4+O1xuXHRcdCNyZXNvbHZlOiAoKHU6IEluc3RhbmNlVHlwZTxUPikgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcblx0XHQjQVBJOiBJbnN0YW5jZVR5cGU8VD4gfCBudWxsID0gbnVsbDtcblxuXHRcdCNpc0luRE9NID0gZmFsc2U7XG5cdFx0Z2V0IGlzSW5ET00oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4jaXNJbkRPTTtcblx0XHR9XG5cblx0XHRkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHRcdHRoaXMuI2lzSW5ET00gPSBmYWxzZTtcblx0XHRcdCh0aGlzLiNBUEkhIGFzIGFueSkub25ET01EaXNjb25uZWN0ZWQoKTtcblx0XHR9XG5cblx0XHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblxuXHRcdFx0dGhpcy4jaXNJbkRPTSA9IHRydWU7XG5cdFxuXHRcdFx0aWYoICEgdGhpcy5pc0luaXQgKSB7XG5cdFx0XHRcdHRoaXMuaW5pdCgpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdCh0aGlzLiNBUEkhIGFzIGFueSkub25ET01Db25uZWN0ZWQoKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIGluaXQoKSB7XG5cdFx0XHRcblx0XHRcdGN1c3RvbUVsZW1lbnRzLnVwZ3JhZGUodGhpcyk7XG5cdFx0XHRcblx0XHRcdC8vIHNoYWRvd1xuXHRcdFx0dGhpcy4jY29udGVudCA9IHRoaXMgYXMgdW5rbm93biBhcyBIb3N0O1xuXHRcdFx0aWYoIHNoYWRvdyAhPT0gJ25vbmUnKSB7XG5cdFx0XHRcdHRoaXMuI2NvbnRlbnQgPSB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogc2hhZG93fSk7XG5cblx0XHRcdFx0Ly9AdHMtaWdub3JlXG5cdFx0XHRcdHRoaXMuI2NvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrRXZlbnQpO1xuXHRcdFx0XHQvL0B0cy1pZ25vcmVcblx0XHRcdFx0dGhpcy4jY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIG9uQ2xpY2tFdmVudCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGF0dHJzXG5cdFx0XHRmb3IobGV0IG9icyBvZiBhdHRyaWJ1dGVzISlcblx0XHRcdFx0dGhpcy4jYXR0cmlidXRlc1tvYnNdID0gdGhpcy5nZXRBdHRyaWJ1dGUob2JzKTtcblxuXHRcdFx0Ly8gY3NzXG5cdFx0XHRpZiggc2hhZG93ICE9PSAnbm9uZScpXG5cdFx0XHRcdCh0aGlzLiNjb250ZW50IGFzIFNoYWRvd1Jvb3QpLmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHNoYXJlZENTUyk7XG5cdFx0XHRpZiggc3R5bGVzaGVldHMubGVuZ3RoICkge1xuXG5cdFx0XHRcdGlmKCBzaGFkb3cgIT09ICdub25lJylcblx0XHRcdFx0XHQodGhpcy4jY29udGVudCBhcyBTaGFkb3dSb290KS5hZG9wdGVkU3R5bGVTaGVldHMucHVzaCguLi5zdHlsZXNoZWV0cyk7XG5cdFx0XHRcdGVsc2Uge1xuXG5cdFx0XHRcdFx0Y29uc3QgY3Nzc2VsZWN0b3IgPSB0aGlzLkNTU1NlbGVjdG9yO1xuXG5cdFx0XHRcdFx0Ly8gaWYgbm90IHlldCBpbnNlcnRlZCA6XG5cdFx0XHRcdFx0aWYoICEgYWxyZWFkeURlY2xhcmVkQ1NTLmhhcyhjc3NzZWxlY3RvcikgKSB7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cblx0XHRcdFx0XHRcdHN0eWxlLnNldEF0dHJpYnV0ZSgnZm9yJywgY3Nzc2VsZWN0b3IpO1xuXG5cdFx0XHRcdFx0XHRsZXQgaHRtbF9zdHlsZXNoZWV0cyA9IFwiXCI7XG5cblx0XHRcdFx0XHRcdGZvcihsZXQgc3R5bGUgb2Ygc3R5bGVzaGVldHMpXG5cdFx0XHRcdFx0XHRcdGZvcihsZXQgcnVsZSBvZiBzdHlsZS5jc3NSdWxlcylcblx0XHRcdFx0XHRcdFx0XHRodG1sX3N0eWxlc2hlZXRzICs9IHJ1bGUuY3NzVGV4dCArICdcXG4nO1xuXG5cdFx0XHRcdFx0XHRzdHlsZS5pbm5lckhUTUwgPSBodG1sX3N0eWxlc2hlZXRzLnJlcGxhY2UoJzpob3N0JywgYDppcygke2Nzc3NlbGVjdG9yfSlgKTtcblxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmQoc3R5bGUpO1xuXG5cdFx0XHRcdFx0XHRhbHJlYWR5RGVjbGFyZWRDU1MuYWRkKGNzc3NlbGVjdG9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gY29udGVudFxuXHRcdFx0aWYoIGNvbnRlbnQgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0bGV0IHRlbXBsYXRlX2VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXHRcdFx0XHRsZXQgc3RyID0gKGNvbnRlbnQgYXMgc3RyaW5nKS5yZXBsYWNlKC9cXCRcXHsoLis/KVxcfS9nLCAoXywgbWF0Y2gpID0+IHRoaXMuZ2V0QXR0cmlidXRlKG1hdGNoKT8/JycpXG5cdCAgICBcdFx0dGVtcGxhdGVfZWxlbS5pbm5lckhUTUwgPSBzdHI7XG5cdCAgICBcdFx0dGhpcy4jY29udGVudC5hcHBlbmQoLi4udGVtcGxhdGVfZWxlbS5jb250ZW50LmNoaWxkTm9kZXMpO1xuXHQgICAgXHR9XG5cblx0ICAgIFx0Ly8gYnVpbGRcblxuXHQgICAgXHQvLyBoNGNrLCBva2F5IGJlY2F1c2UgSlMgaXMgbW9ub3RocmVhZGVkLlxuXHRcdFx0X19jc3RyX2hvc3QgICA9IHRoaXM7XG5cblx0ICAgIFx0bGV0IG9iaiA9IG5ldyBMaXNzKCk7XG5cblx0ICAgIFx0LyppZiggb2JqIGluc3RhbmNlb2YgUHJvbWlzZSlcblx0ICAgIFx0XHRvYmogPSBhd2FpdCBvYmo7Ki9cblxuXHRcdFx0dGhpcy4jQVBJID0gb2JqIGFzIEluc3RhbmNlVHlwZTxUPjtcblxuXHRcdFx0Ly8gZGVmYXVsdCBzbG90XG5cdFx0XHRpZiggdGhpcy5oYXNTaGFkb3cgJiYgdGhpcy4jY29udGVudC5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCApXG5cdFx0XHRcdHRoaXMuI2NvbnRlbnQuYXBwZW5kKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbG90JykgKTtcblxuXHRcdFx0aWYoIHRoaXMuI3Jlc29sdmUgIT09IG51bGwpXG5cdFx0XHRcdHRoaXMuI3Jlc29sdmUodGhpcy4jQVBJKTtcblxuXHRcdFx0cmV0dXJuIHRoaXMuI0FQSTtcblx0XHR9XG5cblx0XHRnZXQgcGFyYW1zKCk6IFBhcmFtcyB7XG5cdFx0XHRyZXR1cm4gdGhpcy4jcGFyYW1zO1xuXHRcdH1cblxuXG5cdFx0LyoqKiBjb250ZW50ICoqKi9cblx0XHQjY29udGVudDogSG9zdHxTaGFkb3dSb290fG51bGwgPSBudWxsO1xuXG5cdFx0Z2V0IGNvbnRlbnQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4jY29udGVudDtcblx0XHR9XG5cblx0XHRnZXRQYXJ0KG5hbWU6IHN0cmluZykge1xuXHRcdFx0cmV0dXJuIHRoaXMuaGFzU2hhZG93XG5cdFx0XHRcdFx0PyB0aGlzLiNjb250ZW50Py5xdWVyeVNlbGVjdG9yKGA6OnBhcnQoJHtuYW1lfSlgKVxuXHRcdFx0XHRcdDogdGhpcy4jY29udGVudD8ucXVlcnlTZWxlY3RvcihgW3BhcnQ9XCIke25hbWV9XCJdYCk7XG5cdFx0fVxuXHRcdGdldFBhcnRzKG5hbWU6IHN0cmluZykge1xuXHRcdFx0cmV0dXJuIHRoaXMuaGFzU2hhZG93XG5cdFx0XHRcdFx0PyB0aGlzLiNjb250ZW50Py5xdWVyeVNlbGVjdG9yQWxsKGA6OnBhcnQoJHtuYW1lfSlgKVxuXHRcdFx0XHRcdDogdGhpcy4jY29udGVudD8ucXVlcnlTZWxlY3RvckFsbChgW3BhcnQ9XCIke25hbWV9XCJdYCk7XG5cdFx0fVxuXG5cdFx0cHJvdGVjdGVkIGdldCBoYXNTaGFkb3coKTogYm9vbGVhbiB7XG5cdFx0XHRyZXR1cm4gc2hhZG93ICE9PSAnbm9uZSc7XG5cdFx0fVxuXG5cdFx0LyoqKiBDU1MgKioqL1xuXG5cdFx0Z2V0IENTU1NlbGVjdG9yKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaGFzU2hhZG93XG5cdFx0XHRcdFx0PyB0aGlzLnRhZ05hbWVcblx0XHRcdFx0XHQ6IGAke3RoaXMudGFnTmFtZX1baXM9XCIke3RoaXMuZ2V0QXR0cmlidXRlKFwiaXNcIil9XCJdYDtcblx0XHR9XG5cblx0XHQvKioqIGF0dHJzICoqKi9cblx0XHQjYXR0cnNfZmxhZyA9IGZhbHNlO1xuXG5cdFx0I2F0dHJpYnV0ZXMgICAgICAgICA9IHt9IGFzIFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuXHRcdCNhdHRyaWJ1dGVzRGVmYXVsdHMgPSB7fSBhcyBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPjtcblx0XHQjYXR0cnMgPSBuZXcgQXR0cmlidXRlcyhcblx0XHRcdHRoaXMuI2F0dHJpYnV0ZXMsXG5cdFx0XHR0aGlzLiNhdHRyaWJ1dGVzRGVmYXVsdHMsXG5cdFx0XHQobmFtZTogQXR0cnMsIHZhbHVlOnN0cmluZ3xudWxsKSA9PiB7XG5cblx0XHRcdFx0dGhpcy4jYXR0cmlidXRlc1tuYW1lXSA9IHZhbHVlO1xuXG5cdFx0XHRcdHRoaXMuI2F0dHJzX2ZsYWcgPSB0cnVlOyAvLyBkbyBub3QgdHJpZ2dlciBvbkF0dHJzQ2hhbmdlZC5cblx0XHRcdFx0aWYoIHZhbHVlID09PSBudWxsKVxuXHRcdFx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXHRcdFx0fVxuXHRcdCkgYXMgdW5rbm93biBhcyBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPjtcblxuXHRcdHNldEF0dHJEZWZhdWx0KG5hbWU6IEF0dHJzLCB2YWx1ZTogc3RyaW5nfG51bGwpIHtcblx0XHRcdGlmKCB2YWx1ZSA9PT0gbnVsbClcblx0XHRcdFx0ZGVsZXRlIHRoaXMuI2F0dHJpYnV0ZXNEZWZhdWx0c1tuYW1lXTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0dGhpcy4jYXR0cmlidXRlc0RlZmF1bHRzW25hbWVdID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0Z2V0IGF0dHJzKCk6IFJlYWRvbmx5PFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+PiB7XG5cblx0XHRcdHJldHVybiB0aGlzLiNhdHRycztcblx0XHR9XG5cblx0XHRzdGF0aWMgb2JzZXJ2ZWRBdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcblx0XHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSAgICA6IEF0dHJzLFxuXHRcdFx0XHRcdFx0XHRcdCBvbGRWYWx1ZTogc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRcdCBuZXdWYWx1ZTogc3RyaW5nKSB7XG5cblx0XHRcdGlmKHRoaXMuI2F0dHJzX2ZsYWcpIHtcblx0XHRcdFx0dGhpcy4jYXR0cnNfZmxhZyA9IGZhbHNlO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuI2F0dHJpYnV0ZXNbbmFtZV0gPSBuZXdWYWx1ZTtcblx0XHRcdGlmKCAhIHRoaXMuaXNJbml0IClcblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRpZiggKHRoaXMuI0FQSSEgYXMgYW55KS5vbkF0dHJDaGFuZ2VkKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkgPT09IGZhbHNlKSB7XG5cdFx0XHRcdHRoaXMuI2F0dHJzW25hbWVdID0gb2xkVmFsdWU7IC8vIHJldmVydCB0aGUgY2hhbmdlLlxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gTElTU0hvc3RCYXNlO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIGRlZmluZSA9PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IF9ET01Db250ZW50TG9hZGVkID0gbmV3IFByb21pc2U8dm9pZD4oIChyZXNvbHZlKSA9PiB7XG5cblx0aWYoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJpbnRlcmFjdGl2ZVwiIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIilcblx0XHRyZXR1cm4gcmVzb2x2ZSgpO1xuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cdFx0cmVzb2x2ZSgpO1xuXHR9LCB0cnVlKTtcbn0pO1xuXG5MSVNTLmRlZmluZSA9IGFzeW5jIGZ1bmN0aW9uPEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0XHRcdFx0XHRcdFx0IEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHRcdCAgICAgQXR0cnMgICBleHRlbmRzIHN0cmluZyxcblx0XHRcdFx0XHRcdCAgICAgUGFyYW1zICBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pixcblx0XHRcdFx0XHRcdCAgIFx0IFQgZXh0ZW5kcyBMSVNTUmV0dXJuVHlwZTxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zPj4oXG5cdFx0XHRcdFx0XHQgICBcdHRhZ25hbWU6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0Q29tcG9uZW50Q2xhc3M6IFQsXG5cdFx0XHRcdFx0XHRcdHtkZXBlbmRlbmNpZXMsIHBhcmFtc306IHtwYXJhbXM/OiBQYXJ0aWFsPFBhcmFtcz4sIGRlcGVuZGVuY2llcz86IHJlYWRvbmx5IFByb21pc2U8c3RyaW5nPltdfSA9IHt9KSB7XG5cblx0ZGVwZW5kZW5jaWVzPz89W107XG5cdHBhcmFtcyAgICAgID8/PSB7fTtcblxuXHRjb25zdCBDbGFzcyA9IENvbXBvbmVudENsYXNzLlBhcmFtZXRlcnMuaG9zdDtcblx0bGV0IExJU1NCYXNlOiBhbnkgPSBDb21wb25lbnRDbGFzcztcblx0bGV0IGh0bWx0YWcgPSBfZWxlbWVudDJ0YWduYW1lKENsYXNzKT8/dW5kZWZpbmVkO1xuXG5cdGF3YWl0IFByb21pc2UuYWxsKFtfRE9NQ29udGVudExvYWRlZCwgLi4uZGVwZW5kZW5jaWVzLCAuLi5MSVNTQmFzZS5QYXJhbWV0ZXJzLmRlcGVuZGVuY2llc10pO1xuXG5cdGNvbnN0IExJU1NjbGFzcyA9IGJ1aWxkTElTU0hvc3Q8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcywgVD4oQ29tcG9uZW50Q2xhc3MsIHBhcmFtcyk7XG5cdFxuXHRjb25zdCBvcHRzID0gaHRtbHRhZyA9PT0gdW5kZWZpbmVkID8ge31cblx0XHRcdFx0XHRcdFx0XHRcdCAgIDoge2V4dGVuZHM6IGh0bWx0YWd9O1xuXHRcblx0Y3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ25hbWUsIExJU1NjbGFzcywgb3B0cyk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIFNoYWRvd1Jvb3QgdG9vbHMgPT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IHNoYXJlZENTUyA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG5kb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChzaGFyZWRDU1MpO1xuXG5MSVNTLmluc2VydEdsb2JhbENTU1J1bGVzID0gZnVuY3Rpb24oY3NzOiBzdHJpbmd8SFRNTFN0eWxlRWxlbWVudCkge1xuXG5cdGxldCBjc3Nfc3R5bGUhOiBDU1NTdHlsZVNoZWV0O1xuXG5cdGlmKCBjc3MgaW5zdGFuY2VvZiBIVE1MU3R5bGVFbGVtZW50IClcblx0XHRjc3Nfc3R5bGUgPSBjc3Muc2hlZXQhO1xuXHRpZiggdHlwZW9mIGNzcyA9PT0gXCJzdHJpbmdcIikge1xuXHRcdGNzc19zdHlsZSA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG5cdFx0Y3NzX3N0eWxlLnJlcGxhY2VTeW5jKGNzcyk7XG5cdH1cblxuXHRmb3IobGV0IHJ1bGUgb2YgY3NzX3N0eWxlLmNzc1J1bGVzKVxuXHRcdHNoYXJlZENTUy5pbnNlcnRSdWxlKHJ1bGUuY3NzVGV4dCk7XG59XG5cbnR5cGUgRGVsZWdhdGVkSGFuZGxlciA9IFtzdHJpbmcsIChldjogTW91c2VFdmVudCkgPT4gdm9pZF07XG5jb25zdCBERUxFR0FURURfRVZFTlRTID0ge1xuXHRcImNsaWNrXCI6IFtdIGFzIERlbGVnYXRlZEhhbmRsZXJbXSxcblx0XCJkYmxjbGlja1wiOiBbXSBhcyBEZWxlZ2F0ZWRIYW5kbGVyW11cbn07XG5cbmNvbnN0IEFMUkVBRFlfUFJPQ0VTU0VEID0gU3ltYm9sKCk7XG5cbmZ1bmN0aW9uIG9uQ2xpY2tFdmVudChldjogTW91c2VFdmVudCkge1xuXG5cdGlmKCAoZXYgYXMgYW55KVtBTFJFQURZX1BST0NFU1NFRF0gPT09IHRydWUgKVxuXHRcdHJldHVybjtcblx0KGV2IGFzIGFueSlbQUxSRUFEWV9QUk9DRVNTRURdID0gdHJ1ZTtcblxuXHRjb25zdCBoYW5kbGVycyA9IERFTEVHQVRFRF9FVkVOVFNbZXYudHlwZSBhcyBrZXlvZiB0eXBlb2YgREVMRUdBVEVEX0VWRU5UU107XG5cblx0Zm9yKGxldCBlbGVtIG9mIGV2LmNvbXBvc2VkUGF0aCgpICkge1xuXHRcblx0XHRpZiggZWxlbSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgfHwgZWxlbSA9PT0gZG9jdW1lbnQgfHwgZWxlbSA9PT0gd2luZG93IClcblx0XHRcdGNvbnRpbnVlO1xuXG5cdFx0dmFyIHRhcmdldCA9IGVsZW0gYXMgRWxlbWVudDtcblxuXHRcdGZvcihsZXQgW3NlbGVjdG9yLCBoYW5kbGVyXSBvZiBoYW5kbGVycykge1xuXHRcdFx0aWYoIHRhcmdldC5tYXRjaGVzKHNlbGVjdG9yKSApXG5cdFx0XHRcdGhhbmRsZXIoZXYpO1xuXHRcdH1cblx0fVxufVxuXG5MSVNTLmluc2VydEdsb2JhbERlbGVnYXRlZExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnRfbmFtZToga2V5b2YgdHlwZW9mIERFTEVHQVRFRF9FVkVOVFMsIHNlbGVjdG9yOiBzdHJpbmcsIGhhbmRsZXI6IChldjogTW91c2VFdmVudCkgPT4gdm9pZCApIHtcblx0REVMRUdBVEVEX0VWRU5UU1tldmVudF9uYW1lXS5wdXNoKFtzZWxlY3RvciwgaGFuZGxlcl0pXG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGlja0V2ZW50KTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgb25DbGlja0V2ZW50KTtcblxuTElTUy5jbG9zZXN0ID0gZnVuY3Rpb24gY2xvc2VzdDxFIGV4dGVuZHMgRWxlbWVudD4oc2VsZWN0b3I6IHN0cmluZywgZWxlbWVudDogRWxlbWVudCkge1xuXG5cdHdoaWxlKHRydWUpIHtcblx0XHR2YXIgcmVzdWx0ID0gZWxlbWVudC5jbG9zZXN0PEU+KHNlbGVjdG9yKTtcblxuXHRcdGlmKCByZXN1bHQgIT09IG51bGwpXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXG5cdFx0Y29uc3Qgcm9vdCA9IGVsZW1lbnQuZ2V0Um9vdE5vZGUoKTtcblx0XHRpZiggISAoXCJob3N0XCIgaW4gcm9vdCkgKVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHRlbGVtZW50ID0gKHJvb3QgYXMgU2hhZG93Um9vdCkuaG9zdDtcblx0fVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIGhlbHBlcnMgPT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnR5cGUgaW5mZXJQYXJhbXM8VD4gPSBUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksIGluZmVyIFAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4+ID8gUCA6IG5ldmVyO1xuXG50eXBlIEJVSUxEX09QVElPTlM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+ID0gUGFydGlhbDx7XG5cdFx0XHRcdFx0ICBcdHBhcmFtcyAgICA6IFBhcnRpYWw8aW5mZXJQYXJhbXM8VD4+LFxuXHRcdFx0XHRcdCAgXHRjb250ZW50XHQgIDogc3RyaW5nfE5vZGV8cmVhZG9ubHkgTm9kZVtdLFxuXHRcdFx0XHRcdFx0aWQgXHRcdCAgOiBzdHJpbmcsXG5cdFx0XHRcdFx0ICBcdGNsYXNzZXNcdCAgOiByZWFkb25seSBzdHJpbmdbXSxcblx0XHRcdFx0XHQgIFx0Y3NzdmFycyAgIDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4sXG5cdFx0XHRcdFx0ICBcdGF0dHJzIFx0ICA6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIHN0cmluZ3xib29sZWFuPj4sXG5cdFx0XHRcdFx0ICBcdGRhdGEgXHQgIDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgc3RyaW5nfGJvb2xlYW4+Pixcblx0XHRcdFx0XHQgIFx0bGlzdGVuZXJzIDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgKGV2OiBFdmVudCkgPT4gdm9pZD4+XG5cdFx0XHRcdFx0fT4gJiAoe1xuXHRcdFx0XHRcdFx0aW5pdGlhbGl6ZTogZmFsc2UsXG5cdFx0XHRcdFx0XHRwYXJlbnQ6IEVsZW1lbnRcblx0XHRcdFx0XHR9fHtcblx0XHRcdFx0XHRcdGluaXRpYWxpemU/OiB0cnVlLFxuXHRcdFx0XHRcdFx0cGFyZW50PzogRWxlbWVudFxuXHRcdFx0XHRcdH0pO1xuXG5hc3luYyBmdW5jdGlvbiBidWlsZDxUIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4odGFnbmFtZTogVCwgb3B0aW9ucz86IEJVSUxEX09QVElPTlM8Q29tcG9uZW50c1tUXT4pOiBQcm9taXNlPENvbXBvbmVudHNbVF0+O1xuYXN5bmMgZnVuY3Rpb24gYnVpbGQ8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHRhZ25hbWU6IHN0cmluZywgb3B0aW9ucz86IEJVSUxEX09QVElPTlM8VD4pOiBQcm9taXNlPFQ+O1xuYXN5bmMgZnVuY3Rpb24gYnVpbGQ8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHRhZ25hbWU6IHN0cmluZywge1xuXHRcdHBhcmFtcyAgICA9IHt9LFxuXHRcdGluaXRpYWxpemU9IHRydWUsXG5cdFx0Y29udGVudCAgID0gW10sXG5cdFx0cGFyZW50ICAgID0gdW5kZWZpbmVkLFxuXHRcdGlkIFx0XHQgID0gdW5kZWZpbmVkLFxuXHRcdGNsYXNzZXMgICA9IFtdLFxuXHRcdGNzc3ZhcnMgICA9IHt9LFxuXHRcdGF0dHJzICAgICA9IHt9LFxuXHRcdGRhdGEgXHQgID0ge30sXG5cdFx0bGlzdGVuZXJzID0ge31cblx0fTogQlVJTERfT1BUSU9OUzxUPiA9IHt9KTogUHJvbWlzZTxUPiB7XG5cblx0aWYoICEgaW5pdGlhbGl6ZSAmJiBwYXJlbnQgPT09IG51bGwpXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQSBwYXJlbnQgbXVzdCBiZSBnaXZlbiBpZiBpbml0aWFsaXplIGlzIGZhbHNlXCIpO1xuXG5cdGxldCBDdXN0b21DbGFzcyA9IGF3YWl0IGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKHRhZ25hbWUpO1xuXHRsZXQgZWxlbSA9IG5ldyBDdXN0b21DbGFzcyhwYXJhbXMpIGFzIExJU1NIb3N0PFQ+O1xuXG5cdC8vIEZpeCBpc3N1ZSAjMlxuXHRpZiggZWxlbS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09IHRhZ25hbWUgKVxuXHRcdGVsZW0uc2V0QXR0cmlidXRlKFwiaXNcIiwgdGFnbmFtZSk7XG5cblx0aWYoIGlkICE9PSB1bmRlZmluZWQgKVxuXHRcdGVsZW0uaWQgPSBpZDtcblxuXHRpZiggY2xhc3Nlcy5sZW5ndGggPiAwKVxuXHRcdGVsZW0uY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcblxuXHRmb3IobGV0IG5hbWUgaW4gY3NzdmFycylcblx0XHRlbGVtLnN0eWxlLnNldFByb3BlcnR5KGAtLSR7bmFtZX1gLCBjc3N2YXJzW25hbWVdKTtcblxuXHRmb3IobGV0IG5hbWUgaW4gYXR0cnMpIHtcblxuXHRcdGxldCB2YWx1ZSA9IGF0dHJzW25hbWVdO1xuXHRcdGlmKCB0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKVxuXHRcdFx0ZWxlbS50b2dnbGVBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXHRcdGVsc2Vcblx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0fVxuXG5cdGZvcihsZXQgbmFtZSBpbiBkYXRhKSB7XG5cblx0XHRsZXQgdmFsdWUgPSBkYXRhW25hbWVdO1xuXHRcdGlmKCB2YWx1ZSA9PT0gZmFsc2UpXG5cdFx0XHRkZWxldGUgZWxlbS5kYXRhc2V0W25hbWVdO1xuXHRcdGVsc2UgaWYodmFsdWUgPT09IHRydWUpXG5cdFx0XHRlbGVtLmRhdGFzZXRbbmFtZV0gPSBcIlwiO1xuXHRcdGVsc2Vcblx0XHRcdGVsZW0uZGF0YXNldFtuYW1lXSA9IHZhbHVlO1xuXHR9XG5cblx0aWYoICEgQXJyYXkuaXNBcnJheShjb250ZW50KSApXG5cdFx0Y29udGVudCA9IFtjb250ZW50IGFzIGFueV07XG5cdGVsZW0ucmVwbGFjZUNoaWxkcmVuKC4uLmNvbnRlbnQpO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBsaXN0ZW5lcnMpXG5cdFx0ZWxlbS5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGxpc3RlbmVyc1tuYW1lXSk7XG5cblx0aWYoIHBhcmVudCAhPT0gdW5kZWZpbmVkIClcblx0XHRwYXJlbnQuYXBwZW5kKGVsZW0pO1xuXG5cdGlmKCAhIGVsZW0uaXNJbml0ICYmIGluaXRpYWxpemUgKVxuXHRcdHJldHVybiBhd2FpdCBMSVNTLmluaXRpYWxpemUoZWxlbSk7XG5cblx0cmV0dXJuIGF3YWl0IExJU1MuZ2V0TElTUyhlbGVtKTtcbn1cbkxJU1MuYnVpbGQgPSBidWlsZDtcblxuXG5MSVNTLndoZW5EZWZpbmVkICAgID0gYXN5bmMgZnVuY3Rpb24odGFnbmFtZTogc3RyaW5nLCBjYWxsYmFjaz86ICgpID0+IHZvaWQgKSA6IFByb21pc2U8dm9pZD4ge1xuXG5cdGF3YWl0IGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKHRhZ25hbWUpO1xuXG5cdGlmKCBjYWxsYmFjayAhPT0gdW5kZWZpbmVkKVxuXHRcdGNhbGxiYWNrKCk7XG5cblx0cmV0dXJuO1xufVxuTElTUy53aGVuQWxsRGVmaW5lZCA9IGFzeW5jIGZ1bmN0aW9uKHRhZ25hbWVzOiByZWFkb25seSBzdHJpbmdbXSwgY2FsbGJhY2s/OiAoKSA9PiB2b2lkICkgOiBQcm9taXNlPHZvaWQ+IHtcblxuXHRhd2FpdCBQcm9taXNlLmFsbCggdGFnbmFtZXMubWFwKCB0ID0+IGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKHQpICkgKVxuXG5cdGlmKCBjYWxsYmFjayAhPT0gdW5kZWZpbmVkKVxuXHRcdGNhbGxiYWNrKCk7XG5cbn1cblxuTElTUy5pc0RlZmluZWQgPSBmdW5jdGlvbihuYW1lOiBzdHJpbmcpIHtcblx0cmV0dXJuIGN1c3RvbUVsZW1lbnRzLmdldChuYW1lKTtcbn1cblxuTElTUy5zZWxlY3RvciA9IGZ1bmN0aW9uKG5hbWU/OiBzdHJpbmcpIHtcblx0aWYobmFtZSA9PT0gdW5kZWZpbmVkKSAvLyBqdXN0IGFuIGg0Y2tcblx0XHRyZXR1cm4gXCJcIjtcblx0cmV0dXJuIGA6aXMoJHtuYW1lfSwgW2lzPVwiJHtuYW1lfVwiXSlgO1xufVxuXG5MSVNTLmdldExJU1MgICAgPSBhc3luYyBmdW5jdGlvbjxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oIGVsZW1lbnQ6IEVsZW1lbnQgKSB7XG5cblx0YXdhaXQgTElTUy53aGVuRGVmaW5lZCggTElTUy5nZXROYW1lKGVsZW1lbnQpICk7XG5cblx0cmV0dXJuIChlbGVtZW50IGFzIExJU1NIb3N0PFQ+KS5MSVNTOyAvLyBlbnN1cmUgaW5pdGlhbGl6ZWQuXG59XG5MSVNTLmdldExJU1NTeW5jPSBmdW5jdGlvbjxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oIGVsZW1lbnQ6IEVsZW1lbnQgKSB7XG5cblx0aWYoICEgTElTUy5pc0RlZmluZWQoIExJU1MuZ2V0TmFtZShlbGVtZW50KSApIClcblx0XHR0aHJvdyBuZXcgRXJyb3IoYCR7bmFtZX0gaGFzbid0IGJlZW4gZGVmaW5lZCB5ZXQuYCk7XG5cblx0bGV0IGhvc3QgPSBlbGVtZW50IGFzIExJU1NIb3N0PFQ+O1xuXG5cdGlmKCAhIGhvc3QuaXNJbml0IClcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnN0YW5jZSBoYXNuJ3QgYmVlbiBpbml0aWFsaXplZCB5ZXQuXCIpO1xuXG5cdHJldHVybiBob3N0LkxJU1NTeW5jO1xufVxuTElTUy5pbml0aWFsaXplID0gYXN5bmMgZnVuY3Rpb248VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KCBlbGVtZW50OiBFbGVtZW50KSB7XG5cblx0YXdhaXQgTElTUy53aGVuRGVmaW5lZCggTElTUy5nZXROYW1lKGVsZW1lbnQpICk7XG5cblx0cmV0dXJuIGF3YWl0IChlbGVtZW50IGFzIExJU1NIb3N0PFQ+KS5pbml0aWFsaXplKCk7IC8vIGVuc3VyZSBpbml0aWFsaXphdGlvbi5cbn1cblxuTElTUy5nZXROYW1lID0gZnVuY3Rpb24oIGVsZW1lbnQ6IEVsZW1lbnQgKTogc3RyaW5nIHtcblxuXHRjb25zdCBuYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lzJykgPz8gZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFxuXHRpZiggISBuYW1lLmluY2x1ZGVzKCctJykgKVxuXHRcdHRocm93IG5ldyBFcnJvcihgRWxlbWVudCAke25hbWV9IGlzIG5vdCBhIFdlYkNvbXBvbmVudGApO1xuXG5cdHJldHVybiBuYW1lO1xufVxuXG5mdW5jdGlvbiBfYnVpbGRRUyhzZWxlY3Rvcjogc3RyaW5nLCB0YWduYW1lX29yX3BhcmVudD86IHN0cmluZyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCwgcGFyZW50OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXHRcblx0aWYoIHRhZ25hbWVfb3JfcGFyZW50ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHRhZ25hbWVfb3JfcGFyZW50ICE9PSAnc3RyaW5nJykge1xuXHRcdHBhcmVudCA9IHRhZ25hbWVfb3JfcGFyZW50O1xuXHRcdHRhZ25hbWVfb3JfcGFyZW50ID0gdW5kZWZpbmVkO1xuXHR9XG5cblx0cmV0dXJuIFtgJHtzZWxlY3Rvcn0ke0xJU1Muc2VsZWN0b3IodGFnbmFtZV9vcl9wYXJlbnQgYXMgc3RyaW5nfHVuZGVmaW5lZCl9YCwgcGFyZW50XSBhcyBjb25zdDtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBRdWVyeVNlbGVjdG9ycyA9PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5hc3luYyBmdW5jdGlvbiBxczxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTxUPjtcbmFzeW5jIGZ1bmN0aW9uIHFzPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPCBDb21wb25lbnRzW05dID47XG5hc3luYyBmdW5jdGlvbiBxczxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LFxuXHRcdFx0XHRcdFx0cGFyZW50ICA6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cblx0W3NlbGVjdG9yLCBwYXJlbnRdID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBwYXJlbnQpO1xuXG5cdGxldCByZXN1bHQgPSBhd2FpdCBMSVNTLnFzbzxUPihzZWxlY3RvciwgcGFyZW50KTtcblx0aWYocmVzdWx0ID09PSBudWxsKVxuXHRcdHRocm93IG5ldyBFcnJvcihgRWxlbWVudCAke3NlbGVjdG9yfSBub3QgZm91bmRgKTtcblxuXHRyZXR1cm4gcmVzdWx0IVxufVxuTElTUy5xcyAgPSBxc1xuXG5hc3luYyBmdW5jdGlvbiBxc288VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8VD47XG5hc3luYyBmdW5jdGlvbiBxc288TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8IENvbXBvbmVudHNbTl0gPjtcbmFzeW5jIGZ1bmN0aW9uIHFzbzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LFxuXHRcdFx0XHRcdFx0cGFyZW50ICA6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cblx0W3NlbGVjdG9yLCBwYXJlbnRdID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBwYXJlbnQpO1xuXG5cdGNvbnN0IGVsZW1lbnQgPSBwYXJlbnQucXVlcnlTZWxlY3RvcjxMSVNTSG9zdDxUPj4oc2VsZWN0b3IpO1xuXHRpZiggZWxlbWVudCA9PT0gbnVsbCApXG5cdFx0cmV0dXJuIG51bGw7XG5cblx0cmV0dXJuIGF3YWl0IExJU1MuZ2V0TElTUyggZWxlbWVudCApO1xufVxuTElTUy5xc28gPSBxc29cblxuYXN5bmMgZnVuY3Rpb24gcXNhPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPFRbXT47XG5hc3luYyBmdW5jdGlvbiBxc2E8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8IENvbXBvbmVudHNbTl1bXSA+O1xuYXN5bmMgZnVuY3Rpb24gcXNhPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsXG5cdFx0XHRcdFx0XHRwYXJlbnQgIDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblxuXHRbc2VsZWN0b3IsIHBhcmVudF0gPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIHBhcmVudCk7XG5cblx0Y29uc3QgZWxlbWVudHMgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbDxMSVNTSG9zdDxUPj4oc2VsZWN0b3IpO1xuXG5cdGxldCBpZHggPSAwO1xuXHRjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPFQ+PiggZWxlbWVudHMubGVuZ3RoICk7XG5cdGZvcihsZXQgZWxlbWVudCBvZiBlbGVtZW50cylcblx0XHRwcm9taXNlc1tpZHgrK10gPSBMSVNTLmdldExJU1MoIGVsZW1lbnQgKTtcblxuXHRyZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufVxuTElTUy5xc2EgPSBxc2E7XG5cbmFzeW5jIGZ1bmN0aW9uIHFzYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdGVsZW1lbnQgIDogRWxlbWVudCk6IFByb21pc2U8VD47XG5hc3luYyBmdW5jdGlvbiBxc2M8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA6IEVsZW1lbnQpOiBQcm9taXNlPCBDb21wb25lbnRzW05dID47XG5hc3luYyBmdW5jdGlvbiBxc2M8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnQsXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA/OiBFbGVtZW50KSB7XG5cblx0Y29uc3QgcmVzID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBlbGVtZW50KTtcblx0XG5cdGNvbnN0IHJlc3VsdCA9IChyZXNbMV0gYXMgdW5rbm93biBhcyBFbGVtZW50KS5jbG9zZXN0PExJU1NIb3N0PFQ+PihyZXNbMF0pO1xuXHRpZihyZXN1bHQgPT09IG51bGwpXG5cdFx0cmV0dXJuIG51bGw7XG5cblx0cmV0dXJuIGF3YWl0IExJU1MuZ2V0TElTUyhyZXN1bHQpO1xufVxuTElTUy5xc2MgPSBxc2M7XG5cbmZ1bmN0aW9uIHFzU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogVDtcbmZ1bmN0aW9uIHFzU3luYzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogQ29tcG9uZW50c1tOXTtcbmZ1bmN0aW9uIHFzU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LFxuXHRcdFx0XHRcdFx0cGFyZW50ICA6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cblx0W3NlbGVjdG9yLCBwYXJlbnRdID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBwYXJlbnQpO1xuXG5cdGNvbnN0IGVsZW1lbnQgPSBwYXJlbnQucXVlcnlTZWxlY3RvcjxMSVNTSG9zdDxUPj4oc2VsZWN0b3IpO1xuXG5cdGlmKCBlbGVtZW50ID09PSBudWxsIClcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEVsZW1lbnQgJHtzZWxlY3Rvcn0gbm90IGZvdW5kYCk7XG5cblx0cmV0dXJuIExJU1MuZ2V0TElTU1N5bmMoIGVsZW1lbnQgKTtcbn1cbkxJU1MucXNTeW5jID0gcXNTeW5jO1xuXG5mdW5jdGlvbiBxc2FTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBUW107XG5mdW5jdGlvbiBxc2FTeW5jPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBDb21wb25lbnRzW05dW107XG5mdW5jdGlvbiBxc2FTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsXG5cdFx0XHRcdFx0XHRwYXJlbnQgIDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblxuXHRbc2VsZWN0b3IsIHBhcmVudF0gPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIHBhcmVudCk7XG5cblx0Y29uc3QgZWxlbWVudHMgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbDxMSVNTSG9zdDxUPj4oc2VsZWN0b3IpO1xuXG5cdGxldCBpZHggPSAwO1xuXHRjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8VD4oIGVsZW1lbnRzLmxlbmd0aCApO1xuXHRmb3IobGV0IGVsZW1lbnQgb2YgZWxlbWVudHMpXG5cdFx0cmVzdWx0W2lkeCsrXSA9IExJU1MuZ2V0TElTU1N5bmMoIGVsZW1lbnQgKTtcblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuTElTUy5xc2FTeW5jID0gcXNhU3luYztcblxuZnVuY3Rpb24gcXNjU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdGVsZW1lbnQgIDogRWxlbWVudCk6IFQ7XG5mdW5jdGlvbiBxc2NTeW5jPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgOiBFbGVtZW50KTogQ29tcG9uZW50c1tOXTtcbmZ1bmN0aW9uIHFzY1N5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnQsXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA/OiBFbGVtZW50KSB7XG5cblx0Y29uc3QgcmVzID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBlbGVtZW50KTtcblx0XG5cdGNvbnN0IHJlc3VsdCA9IChyZXNbMV0gYXMgdW5rbm93biBhcyBFbGVtZW50KS5jbG9zZXN0PExJU1NIb3N0PFQ+PihyZXNbMF0pO1xuXHRpZihyZXN1bHQgPT09IG51bGwpXG5cdFx0cmV0dXJuIG51bGw7XG5cblx0cmV0dXJuIExJU1MuZ2V0TElTU1N5bmMocmVzdWx0KTtcbn1cbkxJU1MucXNjU3luYyA9IHFzY1N5bmM7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgQXV0byA9PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGNsYXNzIExJU1NfQXV0byBleHRlbmRzIExJU1Moe2F0dHJpYnV0ZXM6IFtcInNyY1wiXX0pIHtcblxuXHRyZWFkb25seSAja25vd25fdGFnID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cdHJlYWRvbmx5ICNkaXJlY3Rvcnk6IHN0cmluZztcblx0cmVhZG9ubHkgI3N3OiBQcm9taXNlPHZvaWQ+O1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuI3N3ID0gbmV3IFByb21pc2UoIGFzeW5jIChyZXNvbHZlKSA9PiB7XG5cdFx0XHRcblx0XHRcdGF3YWl0IG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKGAuL3N3LmpzYCk7XG5cblx0XHRcdGlmKCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyIClcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXG5cdFx0XHRuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdjb250cm9sbGVyY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXG5cdFx0Y29uc3Qgc3JjID0gdGhpcy5hdHRycy5zcmM7XG5cdFx0aWYoc3JjID09PSBudWxsKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwic3JjIGF0dHJpYnV0ZSBpcyBtaXNzaW5nLlwiKTtcblx0XHR0aGlzLiNkaXJlY3RvcnkgPSBzcmNbMF0gPT09ICcuJ1xuXHRcdFx0XHRcdFx0XHRcdD8gYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfS8ke3NyY31gXG5cdFx0XHRcdFx0XHRcdFx0OiBzcmM7XG5cblx0XHRuZXcgTXV0YXRpb25PYnNlcnZlciggKG11dGF0aW9ucykgPT4ge1xuXG5cdFx0XHRmb3IobGV0IG11dGF0aW9uIG9mIG11dGF0aW9ucylcblx0XHRcdFx0Zm9yKGxldCBhZGRpdGlvbiBvZiBtdXRhdGlvbi5hZGRlZE5vZGVzKVxuXHRcdFx0XHRcdGlmKGFkZGl0aW9uIGluc3RhbmNlb2YgRWxlbWVudClcblx0XHRcdFx0XHRcdHRoaXMuI2FkZFRhZyhhZGRpdGlvbi50YWdOYW1lKVxuXG5cdFx0fSkub2JzZXJ2ZSggZG9jdW1lbnQsIHsgY2hpbGRMaXN0OnRydWUsIHN1YnRyZWU6dHJ1ZSB9KTtcblxuXG5cdFx0Zm9yKCBsZXQgZWxlbSBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKSApXG5cdFx0XHR0aGlzLiNhZGRUYWcoZWxlbS50YWdOYW1lKTtcblx0fVxuXG5cbiAgICBwcm90ZWN0ZWQgcmVzb3VyY2VzKCkge1xuXHRcdHJldHVybiBbXG5cdFx0XHRcImluZGV4LmpzXCIsXG5cdFx0XHRcImluZGV4Lmh0bWxcIixcblx0XHRcdFwiaW5kZXguY3NzXCJcblx0XHRdO1xuICAgIH1cblxuXHRwcm90ZWN0ZWQgZGVmaW5lV2ViQ29tcG9uZW50KHRhZ25hbWU6IHN0cmluZywgZmlsZXM6IFJlY29yZDxzdHJpbmcsIGFueT4sIG9wdHM6IFBhcnRpYWw8e2NvbnRlbnQ6IHN0cmluZywgY3NzOiBzdHJpbmd9Pikge1xuXG5cdFx0Y29uc3QganMgPSBmaWxlc1tcImluZGV4LmpzXCJdO1xuXHRcdGNvbnN0IGNvbnRlbnQgPSBmaWxlc1tcImluZGV4Lmh0bWxcIl07XG5cblx0XHRsZXQga2xhc3M6IG51bGx8IFJldHVyblR5cGU8dHlwZW9mIExJU1M+ID0gbnVsbDtcblx0XHRpZigganMgIT09IHVuZGVmaW5lZCApXG5cdFx0XHRrbGFzcyA9IGpzKG9wdHMpO1xuXHRcdGVsc2UgaWYoIGNvbnRlbnQgIT09IHVuZGVmaW5lZCApXG5cdFx0XHRrbGFzcyA9IGNsYXNzIFdlYkNvbXBvbmVudCBleHRlbmRzIExJU1Mob3B0cykge307XG5cblx0XHRpZihrbGFzcyA9PT0gbnVsbClcblx0XHRcdHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBmaWxlcyBmb3IgV2ViQ29tcG9uZW50ICR7dGFnbmFtZX0uYCk7XG5cblx0XHRyZXR1cm4gTElTUy5kZWZpbmUodGFnbmFtZSwga2xhc3MpO1xuXHR9XG5cblx0YXN5bmMgI2FkZFRhZyh0YWduYW1lOiBzdHJpbmcpIHtcblxuXHRcdHRhZ25hbWUgPSB0YWduYW1lLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRpZiggdGFnbmFtZSA9PT0gJ2xpc3MtYXV0bycgfHwgdGFnbmFtZSA9PT0gJ2JsaXNzLWF1dG8nIHx8ICEgdGFnbmFtZS5pbmNsdWRlcygnLScpIHx8IHRoaXMuI2tub3duX3RhZy5oYXMoIHRhZ25hbWUgKSApXG5cdFx0XHRyZXR1cm47XG5cblx0XHR0aGlzLiNrbm93bl90YWcuYWRkKHRhZ25hbWUpO1xuXG5cdFx0YXdhaXQgdGhpcy4jc3c7IC8vIGVuc3VyZSBTVyBpcyBpbnN0YWxsZWQuXG5cblx0XHRjb25zdCBmaWxlbmFtZXMgPSB0aGlzLnJlc291cmNlcygpO1xuXHRcdGNvbnN0IHJlc291cmNlcyA9IGF3YWl0IFByb21pc2UuYWxsKCBmaWxlbmFtZXMubWFwKCBmaWxlID0+IGZpbGUuZW5kc1dpdGgoJy5qcycpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gX2ltcG9ydCAgIChgJHt0aGlzLiNkaXJlY3Rvcnl9LyR7dGFnbmFtZX0vJHtmaWxlfWAsIHRydWUpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogX2ZldGNoVGV4dChgJHt0aGlzLiNkaXJlY3Rvcnl9LyR7dGFnbmFtZX0vJHtmaWxlfWAsIHRydWUpICkgKTtcblxuXHRcdGNvbnN0IGZpbGVzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGZpbGVuYW1lcy5sZW5ndGg7ICsraSlcblx0XHRcdGlmKCByZXNvdXJjZXNbaV0gIT09IHVuZGVmaW5lZClcblx0XHRcdFx0ZmlsZXNbZmlsZW5hbWVzW2ldXSA9IHJlc291cmNlc1tpXTtcblxuXHRcdGNvbnN0IGNvbnRlbnQgPSBmaWxlc1tcImluZGV4Lmh0bWxcIl07XG5cdFx0Y29uc3QgY3NzICAgICA9IGZpbGVzW1wiaW5kZXguY3NzXCJdO1xuXG5cdFx0Y29uc3Qgb3B0czogUGFydGlhbDx7Y29udGVudDogc3RyaW5nLCBjc3M6IHN0cmluZ30+ID0ge1xuXHRcdFx0Li4uY29udGVudCAhPT0gdW5kZWZpbmVkICYmIHtjb250ZW50fSxcblx0XHRcdC4uLmNzcyAgICAgIT09IHVuZGVmaW5lZCAmJiB7Y3NzfSxcblx0XHR9O1xuXG5cdFx0cmV0dXJuIHRoaXMuZGVmaW5lV2ViQ29tcG9uZW50KHRhZ25hbWUsIGZpbGVzLCBvcHRzKTtcblx0XHRcblx0fVxufVxuTElTUy5kZWZpbmUoXCJsaXNzLWF1dG9cIiwgTElTU19BdXRvKTtcblxuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRzIHtcblx0XCJsaXNzLWF1dG9cIjogTElTU19BdXRvXG59O1xuLypcbiAqIGRlY2xhcmUgbW9kdWxlICckTElTUycge1xuICogXHRcdGludGVyZmFjZSBDb21wb25lbnRzIHtcbiAqIFx0XHRcdFwibmFtZVwiOiBjbGFzc1xuICogXHRcdH1cbiAqIH1cbiAqL1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIEV2ZW50c1RhcmdldCA9PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnR5cGUgQ3N0RXZlbnQ8RXZlbnQgZXh0ZW5kcyBzdHJpbmcsIEFyZ3M+ID0gQ3VzdG9tRXZlbnQ8QXJncz4gJiB7dHlwZTogRXZlbnR9O1xuXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50c1RhcmdldDxFdmVudHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PntcblxuXHRhZGRFdmVudExpc3RlbmVyPEV2ZW50IGV4dGVuZHMgRXhjbHVkZTxrZXlvZiBFdmVudHMsIHN5bWJvbHxudW1iZXI+Pih0eXBlOiBFdmVudCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBsaXN0ZW5lcjogbnVsbHwgKChldjogQ3N0RXZlbnQ8RXZlbnQsIEV2ZW50c1tFdmVudF0+KSA9PiB2b2lkKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBvcHRpb25zPzogYm9vbGVhbnxBZGRFdmVudExpc3RlbmVyT3B0aW9ucyk6IHZvaWQ7XG5cblx0ZGlzcGF0Y2hFdmVudDxFdmVudCBleHRlbmRzIEV4Y2x1ZGU8a2V5b2YgRXZlbnRzLCBzeW1ib2x8bnVtYmVyPj4oZXZlbnQ6IENzdEV2ZW50PEV2ZW50LCBFdmVudHNbRXZlbnRdPik6IGJvb2xlYW47XG5cblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcjxFdmVudCBleHRlbmRzIEV4Y2x1ZGU8a2V5b2YgRXZlbnRzLCBzeW1ib2x8bnVtYmVyPj4odHlwZTogRXZlbnQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxpc3RlbmVyOiBudWxsfCAoKGV2OiBDc3RFdmVudDxFdmVudCwgRXZlbnRzW0V2ZW50XT4pID0+IHZvaWQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPzogYm9vbGVhbnxBZGRFdmVudExpc3RlbmVyT3B0aW9ucyk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBDc3RtRXZlbnQ8RXZlbnQgZXh0ZW5kcyBzdHJpbmcsIEFyZ3M+IGV4dGVuZHMgQ3VzdG9tRXZlbnQ8QXJncz4ge1xuXG5cdG92ZXJyaWRlIGdldCB0eXBlKCk6IEV2ZW50IHsgcmV0dXJuIHN1cGVyLnR5cGUgYXMgRXZlbnQ7IH1cblxuXHRjb25zdHJ1Y3Rvcih0eXBlOiBFdmVudCwgYXJnczogQXJncykge1xuXHRcdHN1cGVyKHR5cGUsIHtkZXRhaWw6IGFyZ3N9KTtcblx0fVxufVxuXG5leHBvcnQgdHlwZSBFdmVudHNUYXJnZXRDc3RyPEV2ZW50cyBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pj4gPSBDb25zdHJ1Y3RvcjxFdmVudHNUYXJnZXQ8RXZlbnRzPj47XG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBpbnRlcm5hbCB0b29scyA9PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFJlc291cmNlKHJlc291cmNlOiBSZXNvdXJjZXxQcm9taXNlPFJlc291cmNlPikge1xuXG5cdHJlc291cmNlID0gYXdhaXQgcmVzb3VyY2U7XG5cblx0aWYoICEgKHJlc291cmNlIGluc3RhbmNlb2YgUmVzcG9uc2UpIClcblx0XHRyZXNvdXJjZSA9IGF3YWl0IGZldGNoKHJlc291cmNlKTtcblxuXHRyZXR1cm4gYXdhaXQgcmVzb3VyY2UudGV4dCgpO1xufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIF9mZXRjaFRleHQodXJpOiBzdHJpbmd8VVJMLCBpc0xpc3NBdXRvOiBib29sZWFuID0gZmFsc2UpIHtcblxuXHRjb25zdCBvcHRpb25zID0gaXNMaXNzQXV0b1xuXHRcdFx0XHRcdFx0PyB7aGVhZGVyczp7XCJsaXNzLWF1dG9cIjogXCJ0cnVlXCJ9fVxuXHRcdFx0XHRcdFx0OiB7fTtcblxuXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJpLCBvcHRpb25zKTtcblx0aWYocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDAgKVxuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cblx0aWYoIGlzTGlzc0F1dG8gJiYgcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJzdGF0dXNcIikhID09PSBcIjQwNFwiIClcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXG5cdHJldHVybiBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG59XG5hc3luYyBmdW5jdGlvbiBfaW1wb3J0KHVyaTogc3RyaW5nLCBpc0xpc3NBdXRvOiBib29sZWFuID0gZmFsc2UpIHtcblxuXHQvLyB0ZXN0IGZvciB0aGUgbW9kdWxlIGV4aXN0YW5jZS5cblx0aWYoaXNMaXNzQXV0byAmJiBhd2FpdCBfZmV0Y2hUZXh0KHVyaSwgaXNMaXNzQXV0bykgPT09IHVuZGVmaW5lZCApXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblxuXHR0cnkge1xuXHRcdHJldHVybiAoYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tJZ25vcmU6IHRydWUgKi8gdXJpKSkuZGVmYXVsdDtcblx0fSBjYXRjaChlKSB7XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fVxufVxuXG4vLyBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzUxMDAwNDYxL2h0bWwtZWxlbWVudC10YWctbmFtZS1mcm9tLWNvbnN0cnVjdG9yXG5jb25zdCBIVE1MQ0xBU1NfUkVHRVggPSAgL0hUTUwoXFx3KylFbGVtZW50LztcbmNvbnN0IGVsZW1lbnROYW1lTG9va3VwVGFibGUgPSB7XG4gICAgJ1VMaXN0JzogJ3VsJyxcbiAgICAnVGFibGVDYXB0aW9uJzogJ2NhcHRpb24nLFxuICAgICdUYWJsZUNlbGwnOiAndGQnLCAvLyB0aFxuICAgICdUYWJsZUNvbCc6ICdjb2wnLCAgLy8nY29sZ3JvdXAnLFxuICAgICdUYWJsZVJvdyc6ICd0cicsXG4gICAgJ1RhYmxlU2VjdGlvbic6ICd0Ym9keScsIC8vWyd0aGVhZCcsICd0Ym9keScsICd0Zm9vdCddLFxuICAgICdRdW90ZSc6ICdxJyxcbiAgICAnUGFyYWdyYXBoJzogJ3AnLFxuICAgICdPTGlzdCc6ICdvbCcsXG4gICAgJ01vZCc6ICdpbnMnLCAvLywgJ2RlbCddLFxuICAgICdNZWRpYSc6ICd2aWRlbycsLy8gJ2F1ZGlvJ10sXG4gICAgJ0ltYWdlJzogJ2ltZycsXG4gICAgJ0hlYWRpbmcnOiAnaDEnLCAvLywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2J10sXG4gICAgJ0RpcmVjdG9yeSc6ICdkaXInLFxuICAgICdETGlzdCc6ICdkbCcsXG4gICAgJ0FuY2hvcic6ICdhJ1xuICB9O1xuZnVuY3Rpb24gX2VsZW1lbnQydGFnbmFtZShDbGFzczogdHlwZW9mIEhUTUxFbGVtZW50KTogc3RyaW5nfG51bGwge1xuXG5cdGlmKCBDbGFzcyA9PT0gSFRNTEVsZW1lbnQgKVxuXHRcdHJldHVybiBudWxsO1xuXHRcblx0bGV0IGh0bWx0YWcgPSBIVE1MQ0xBU1NfUkVHRVguZXhlYyhDbGFzcy5uYW1lKSFbMV07XG5cdHJldHVybiBlbGVtZW50TmFtZUxvb2t1cFRhYmxlW2h0bWx0YWcgYXMga2V5b2YgdHlwZW9mIGVsZW1lbnROYW1lTG9va3VwVGFibGVdID8/IGh0bWx0YWcudG9Mb3dlckNhc2UoKVxufSIsImltcG9ydCBMSVNTIGZyb20gXCJMSVNTXCI7XG5pbXBvcnQgXCJzdHJ1Y3QvbWVudS50c1wiO1xuXG5pbXBvcnQgXCJzdHJ1Y3QvY2FsYy9zaGVldC50c1wiO1xuaW1wb3J0IFwic3RydWN0L2NhbGMvdG9vbGJhci50c1wiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0IH0gZnJvbSBcInN0cnVjdC9jYWxjL3NoZWV0LnRzXCI7XG5pbXBvcnQgeyBDYWxjVG9vbGJhciB9IGZyb20gXCJzdHJ1Y3QvY2FsYy90b29sYmFyLnRzXCI7XG5pbXBvcnQgeyBGb3JtYXRzIH0gZnJvbSBcInN0cnVjdC9jYWxjL2Zvcm1hdC50c1wiO1xuXG5cbntcbiAgICBjb25zdCBzaGVldCA9IGF3YWl0IExJU1MucXM8Q2FsY1NoZWV0PignI3NoZWV0X3Rlc3QnKTtcblxuICAgIC8vYXdhaXQgbG9hZChzaGVldCwgXCJhc3NldHMvdGFibGV1ci90ZXN0Lm9kc1wiKTtcbn1cblxuY29uc3Qgc2hlZXRfZm9ybWF0X2NvbnRlbnQgPSBhd2FpdCBMSVNTLnFzPENhbGNTaGVldD4oJyNzaGVldF9mb3JtYXRfY29udGVudCcpO1xuXG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRSYW5nZShcIkExOkYxXCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFtcbiAgICBcIlRhaWxsZVwiLCBcIkdyYXNcIiwgXCJJdGFsaXF1ZVwiLCBcIlNvdWxpZ27DqVwiLCBcIkNvdWxldXIgdGV4dGVcIiwgXCJDb3VsZXVyIGZvbmRcIlxuXVxuXG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRSYW5nZShcIkEyOkYyXCIpLmZvcm1hdChcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gXCJBXCI7XG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRSYW5nZShcIkEyXCIpLmZvcm1hdCh7Zm9udF9zaXplOiAnMTVwdCd9KTtcbnNoZWV0X2Zvcm1hdF9jb250ZW50LmdldFJhbmdlKFwiQjJcIikuZm9ybWF0KCdib2xkJyk7XG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRSYW5nZShcIkMyXCIpLmZvcm1hdCgnaXRhbGljJyk7XG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRSYW5nZShcIkQyXCIpLmZvcm1hdCgndW5kZXJsaW5lJyk7XG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRSYW5nZShcIkUyXCIpLmZvcm1hdCh7Zm9yZWdyb3VuZF9jb2xvcjogJ2JsdWUnfSk7XG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRSYW5nZShcIkYyXCIpLmZvcm1hdCh7YmFja2dyb3VuZF9jb2xvcjogJ3llbGxvdyd9KTtcblxuY29uc3Qgc2hlZXRfdG9vbGJhcl9mb3JtYXRfY29udGVudCA9IGF3YWl0IExJU1MucXM8Q2FsY1Rvb2xiYXI+KCcjc2hlZXRfdG9vbGJhcl9mb3JtYXRfY29udGVudCcpO1xuc2hlZXRfdG9vbGJhcl9mb3JtYXRfY29udGVudC5zeW5jVG8oc2hlZXRfZm9ybWF0X2NvbnRlbnQpO1xuc2hlZXRfdG9vbGJhcl9mb3JtYXRfY29udGVudC5kaXNhYmxlQWxsRXhjZXB0KFwiZm9udF9zaXplXCIsIFwiYm9sZFwiLCBcIml0YWxpY1wiLCBcInVuZGVybGluZVwiLCBcImZvcmVncm91bmRfY29sb3JcIiwgXCJiYWNrZ3JvdW5kX2NvbG9yXCIpO1xuXG57XG4gICAgY29uc3Qgc2hlZXRfYWxpZ24gPSBhd2FpdCBMSVNTLnFzPENhbGNTaGVldD4oJyNzaGVldF9hbGlnbicpO1xuXG4gICAgc2hlZXRfYWxpZ24uZ2V0UmFuZ2UoXCJCMTpFMVwiKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpLmNvbnRlbnQgPSBbXG4gICAgICAgIFwiSGF1dFwiLCBcIk1pbGlldVwiLCBcIkJhc1wiLCBcIkFqdXN0ZXJcIlxuICAgIF1cblxuICAgIHNoZWV0X2FsaWduLmdldFJhbmdlKFwiQTI6QTRcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiLCBcInZhbGlnbl9taWRkbGVcIikuY29udGVudCA9IFtcbiAgICAgICAgXCJHYXVjaGVcIiwgXCJDZW50cmVcIiwgXCJEcm9pdFwiXG4gICAgXVxuXG4gICAgc2hlZXRfYWxpZ24uZ2V0UmFuZ2UoXCJCMjpENFwiKS5jb250ZW50ID0gXCJBXCI7XG4gICAgc2hlZXRfYWxpZ24uZ2V0UmFuZ2UoXCJCMjpFMlwiKS5mb3JtYXQoXCJhbGlnbl9sZWZ0XCIpO1xuICAgIHNoZWV0X2FsaWduLmdldFJhbmdlKFwiQjM6RTNcIikuZm9ybWF0KCdhbGlnbl9jZW50ZXInKTtcbiAgICBzaGVldF9hbGlnbi5nZXRSYW5nZShcIkI0OkU0XCIpLmZvcm1hdCgnYWxpZ25fcmlnaHQnKTtcbiAgICBzaGVldF9hbGlnbi5nZXRSYW5nZShcIkIyOkI0XCIpLmZvcm1hdCgndmFsaWduX3RvcCcpO1xuICAgIHNoZWV0X2FsaWduLmdldFJhbmdlKFwiQzI6QzRcIikuZm9ybWF0KCd2YWxpZ25fbWlkZGxlJyk7XG4gICAgc2hlZXRfYWxpZ24uZ2V0UmFuZ2UoXCJEMjpENFwiKS5mb3JtYXQoJ3ZhbGlnbl9ib3R0b20nKTtcblxuICAgIHNoZWV0X2FsaWduLmdldFJhbmdlKFwiRTI6RTRcIikuZm9ybWF0KFwiYWp1c3RlclwiKS5jb250ZW50ID0gYEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFgO1xuXG4gICAgY29uc3Qgc2hlZXRfdG9vbGJhcl9hbGlnbiA9IGF3YWl0IExJU1MucXM8Q2FsY1Rvb2xiYXI+KCcjc2hlZXRfdG9vbGJhcl9hbGlnbicpO1xuICAgIHNoZWV0X3Rvb2xiYXJfYWxpZ24uc3luY1RvKHNoZWV0X2FsaWduKTtcbiAgICBzaGVldF90b29sYmFyX2FsaWduLmRpc2FibGVBbGxFeGNlcHQoXCJhbGlnbl9sZWZ0XCIsIFwiYWxpZ25fY2VudGVyXCIsIFwiYWxpZ25fcmlnaHRcIiwgXCJ2YWxpZ25fdG9wXCIsIFwidmFsaWduX21pZGRsZVwiLCBcInZhbGlnbl9ib3R0b21cIiwgXCJhanVzdGVyXCIpO1xufVxuXG57XG4gICAgY29uc3Qgc2hlZXQgPSBhd2FpdCBMSVNTLnFzPENhbGNTaGVldD4oJyNzaGVldF9mb3JtYXQnKTtcblxuICAgIHNoZWV0LmdldFJhbmdlKFwiQTE6RTFcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gW1xuICAgICAgICAxLCBcIk1vbm5haWVcIiwgXCJQb3VyY2VudFwiLCBcIk5vbWJyZVwiLCBcIkRhdGVcIlxuICAgIF07XG5cbiAgICBzaGVldC5nZXRSYW5nZShcIkEyOkE0XCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFtcbiAgICAgICAgXCJOb3JtYWxcIiwgXCIrMSBkZWNpbWFsXCIsIFwiLTEgZGVjaW1hbFwiXG4gICAgXTtcblxuICAgIHNoZWV0LmdldFJhbmdlKFwiQjI6RTRcIikuY29udGVudCA9IFwiPSRBJDFcIjtcbiAgICBzaGVldC5nZXRSYW5nZShcIkIyOkI0XCIpLmZvcm1hdChGb3JtYXRzLmV1cm9zKTtcbiAgICBzaGVldC5nZXRSYW5nZShcIkMyOkM0XCIpLmZvcm1hdChGb3JtYXRzLnBvdXJjZW50KTtcbiAgICBzaGVldC5nZXRSYW5nZShcIkQyOkQ0XCIpLmZvcm1hdChGb3JtYXRzLm51bWJlcik7XG4gICAgc2hlZXQuZ2V0UmFuZ2UoXCJFMjpFNFwiKS5mb3JtYXQoRm9ybWF0cy5kYXRlKTtcblxuICAgIHNoZWV0LmdldFJhbmdlKFwiQjM6RTNcIikuZm9ybWF0KHtwcmVjaXNpb246IDN9KTtcbiAgICBzaGVldC5nZXRSYW5nZShcIkI0OkU0XCIpLmZvcm1hdCh7cHJlY2lzaW9uOiAxfSk7XG5cbiAgICBjb25zdCBzaGVldF90b29sYmFyID0gYXdhaXQgTElTUy5xczxDYWxjVG9vbGJhcj4oJyNzaGVldF90b29sYmFyX2Zvcm1hdCcpO1xuICAgIHNoZWV0X3Rvb2xiYXIuc3luY1RvKHNoZWV0KTtcbiAgICBzaGVldF90b29sYmFyLmRpc2FibGVBbGxFeGNlcHQoXCJmb3JtYXRfbW9ubmFpZVwiLCBcImZvcm1hdF9wb3VyY2VudFwiLCBcImZvcm1hdF9uYlwiLCBcImZvcm1hdF9kYXRlXCIsIFwiZm9ybWF0X3plcm9fcDFcIiwgXCJmb3JtYXRfemVyb19tMVwiKTtcbn1cblxue1xuICAgIGNvbnN0IHNoZWV0ID0gYXdhaXQgTElTUy5xczxDYWxjU2hlZXQ+KCcjc2hlZXRfYm9yZHVyZXMnKTtcblxuICAgIHNoZWV0LmdldFJhbmdlKCdCMicpLmZvcm1hdCh7XG4gICAgICAgIGJvcmRlcl90b3A6IHRydWUsXG4gICAgICAgIGJvcmRlcl9ib3R0b206IHRydWUsXG4gICAgICAgIGJvcmRlcl9sZWZ0OiB0cnVlLFxuICAgICAgICBib3JkZXJfcmlnaHQ6IHRydWUsXG4gICAgICAgIGJvcmRlcl9jb2xvcjogJ3JlZCcsXG4gICAgfSlcblxuICAgIGNvbnN0IHNoZWV0X3Rvb2xiYXIgPSBhd2FpdCBMSVNTLnFzPENhbGNUb29sYmFyPignI3NoZWV0X3Rvb2xiYXJfYm9yZHVyZXMnKTtcbiAgICBzaGVldF90b29sYmFyLnN5bmNUbyhzaGVldCk7XG4gICAgc2hlZXRfdG9vbGJhci5kaXNhYmxlQWxsRXhjZXB0KFwiYm9yZGVyXCIsIFwiYm9yZGVyX2NvbG9yXCIpO1xufVxuXG5cbntcbiAgICBjb25zdCBzaGVldCA9IGF3YWl0IExJU1MucXM8Q2FsY1NoZWV0PignI3NoZWV0X3JldHJhaXRzJyk7XG5cbiAgICBzaGVldC5nZXRSYW5nZShcIkExOkIxXCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFtcbiAgICAgICAgXCJHYXVjaGVcIiwgXCJEcm9pdGVcIlxuICAgIF07XG5cbiAgICBzaGVldC5nZXRSYW5nZSgnQTI6QjUnKS5jb250ZW50ID0gXCJBXCI7XG4gICAgc2hlZXQuZ2V0UmFuZ2UoJ0EyOkE1JykuZm9ybWF0KFwiYWxpZ25fbGVmdFwiKTtcbiAgICBzaGVldC5nZXRSYW5nZSgnQjI6QjUnKS5mb3JtYXQoXCJhbGlnbl9yaWdodFwiKTtcblxuICAgIHNoZWV0LmdldFJhbmdlKCdBMzpCMycpLmZvcm1hdCh7aW5kZW50OiAxfSk7XG4gICAgc2hlZXQuZ2V0UmFuZ2UoJ0E0OkI0JykuZm9ybWF0KHtpbmRlbnQ6IDJ9KTtcbiAgICBzaGVldC5nZXRSYW5nZSgnQTU6QjUnKS5mb3JtYXQoe2luZGVudDogM30pO1xuXG4gICAgY29uc3Qgc2hlZXRfdG9vbGJhciA9IGF3YWl0IExJU1MucXM8Q2FsY1Rvb2xiYXI+KCcjc2hlZXRfdG9vbGJhcl9yZXRyYWl0cycpO1xuICAgIHNoZWV0X3Rvb2xiYXIuc3luY1RvKHNoZWV0KTtcbiAgICBzaGVldF90b29sYmFyLmRpc2FibGVBbGxFeGNlcHQoXCJyZXRyYWl0X3AxXCIsIFwicmV0cmFpdF9tMVwiKTtcbn1cblxuXG57XG4gICAgY29uc3Qgc2hlZXQgPSBhd2FpdCBMSVNTLnFzPENhbGNTaGVldD4oJyNzaGVldF9mdXNpb24nKTtcblxuICAgIHNoZWV0LmdldFJhbmdlKCdCMicpLmZvcm1hdCh7XG4gICAgICAgIHNwYW46IFsyLDJdLFxuICAgICAgICBhbGlnbl9jZW50ZXI6IHRydWUsXG4gICAgICAgIHZhbGlnbl9taWRkbGU6IHRydWVcbiAgICB9KS5jb250ZW50ID0gXCJBXCI7XG5cbiAgICBjb25zdCBzaGVldF90b29sYmFyID0gYXdhaXQgTElTUy5xczxDYWxjVG9vbGJhcj4oJyNzaGVldF90b29sYmFyX2Z1c2lvbicpO1xuICAgIHNoZWV0X3Rvb2xiYXIuc3luY1RvKHNoZWV0KTtcbiAgICBzaGVldF90b29sYmFyLmRpc2FibGVBbGxFeGNlcHQoXCJtZXJnZV9jZW50ZXJcIiwgXCJtZXJnZVwiLCBcInVubWVyZ2VcIik7XG59IiwiaW1wb3J0IHsgc3RyMmh0bWwgfSBmcm9tIFwic3RydWN0L3V0aWxzL3N0cjJodG1sXCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGxMaXN0IH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuZXhwb3J0IGNsYXNzIFJhbmdlT3ZlcmxheSBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcblxuICAgICNzaGVldDogQ2FsY1NoZWV0O1xuICAgICNyYW5nZTogc3RyaW5nfG51bGwgPSBudWxsO1xuICAgIHByb3RlY3RlZCBvdmVybGF5OiBIVE1MRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKHNoZWV0OiBDYWxjU2hlZXQsIC4uLmNsYXNzbGlzdDogc3RyaW5nW10pIHtcblxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuI3NoZWV0ID0gc2hlZXQ7XG4gICAgICAgIHRoaXMuI3NoZWV0Lmhvc3QuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vdmVybGF5ID0gc3RyMmh0bWwoYDxkaXYgY2xhc3M9J292ZXJsYXknPjwvZGl2PmApO1xuICAgICAgICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2xpc3QpO1xuXG4gICAgICAgIHNoZWV0LmNvbnRlbnQuYXBwZW5kKCB0aGlzLm92ZXJsYXkgKTtcbiAgICB9XG5cbiAgICBzZXRSYW5nZShyYW5nZTogQ2VsbExpc3R8bnVsbCkge1xuICAgICAgICB0aGlzLiNyYW5nZSA9IHJhbmdlID09PSBudWxsID8gbnVsbCA6IHJhbmdlLnBsYWdlX25hbWUhO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRSZWN0KC4uLnJlY3Q6IHJlYWRvbmx5IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdKSB7XG4gICAgICAgIHJldHVybiByZWN0O1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcblxuICAgICAgICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiLCB0aGlzLiNyYW5nZSA9PT0gbnVsbCk7XG5cbiAgICAgICAgaWYoIHRoaXMuI3JhbmdlID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5nZXRSZWN0KCAuLi50aGlzLiNzaGVldC5nZXRSZWN0KCB0aGlzLiNzaGVldC5nZXRSYW5nZSh0aGlzLiNyYW5nZSkgKSApO1xuICAgICAgICB0aGlzLiNzaGVldC5zZXRSZWN0KHRoaXMub3ZlcmxheSwgcmVjdCApO1xuICAgIH1cblxuICAgIG92ZXJyaWRlIGFkZEV2ZW50TGlzdGVuZXIodHlwZTogc3RyaW5nLCBjYWxsYmFjazogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCB8IG51bGwsIG9wdGlvbnM/OiBBZGRFdmVudExpc3RlbmVyT3B0aW9ucyB8IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgb3ZlcnJpZGUgcmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlOiBzdHJpbmcsIGNhbGxiYWNrOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0IHwgbnVsbCwgb3B0aW9ucz86IEV2ZW50TGlzdGVuZXJPcHRpb25zIHwgYm9vbGVhbik6IHZvaWQge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMub3ZlcmxheS5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGb3JtdWxhUmVmIGV4dGVuZHMgUmFuZ2VPdmVybGF5IHtcblxuICAgIGNvbnN0cnVjdG9yKHNoZWV0OiBDYWxjU2hlZXQpIHtcbiAgICAgICAgc3VwZXIoc2hlZXQsIFwicmFuZ2VfaGlnaGxpZ2h0XCIpO1xuICAgIH1cblxuICAgICNjdXJfY29sb3IgPSAwO1xuICAgIHNldENvbG9yKGNvbG9yX2lkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoYGhpZ2hsaWdodF8ke3RoaXMuI2N1cl9jb2xvcn1gKTsgXG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKGBoaWdobGlnaHRfJHtjb2xvcl9pZH1gKTtcbiAgICAgICAgdGhpcy4jY3VyX2NvbG9yID0gY29sb3JfaWQ7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVjb3B5SGFuZGxlIGV4dGVuZHMgUmFuZ2VPdmVybGF5IHtcblxuICAgIGNvbnN0cnVjdG9yKHNoZWV0OiBDYWxjU2hlZXQpIHtcbiAgICAgICAgc3VwZXIoc2hlZXQsIFwicmVjb3B5XCIpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBnZXRSZWN0KHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gW3grdy0yLCB5K2gtMiwgNSwgNV0gYXMgY29uc3Q7XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgRm9ybXVsYSB9IGZyb20gXCIuL2Zvcm11bGFfcGFyc2VyXCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGwsIENlbGxMaXN0LCBSYXdDb250ZW50VHlwZSB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbmV4cG9ydCBjbGFzcyBGb3JtYXRNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBzaGVldC5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXY6IEtleWJvYXJkRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgaWYoICEgZXYuY3RybEtleSApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnYicpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KFwiYm9sZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdpJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJpdGFsaWNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAndScpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KFwidW5kZXJsaW5lXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ2wnKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcImFsaWduX2xlZnRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAncicpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KFwiYWxpZ25fcmlnaHRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnZScpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KFwiYWxpZ25fY2VudGVyXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJzQnICYmIGV2LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChGb3JtYXRzLmV1cm9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICc1JyAmJiBldi5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoRm9ybWF0cy5wb3VyY2VudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnMScgJiYgZXYuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KEZvcm1hdHMubnVtYmVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoY2hhbmdlZCkge1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICAgIC8qIFRPRE8gbGlzdGVuICovXG5cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbG9hdDJEYXRlKGZsb2F0OiBudW1iZXIpIHtcblxuICAgIGxldCBjb250ZW50ID0gbmV3IERhdGUoXCIxODk5LTEyLTMwXCIpO1xuXG4gICAgY29udGVudC5zZXREYXRlKCBjb250ZW50LmdldERhdGUoKSArIGZsb2F0KTtcblxuICAgIHJldHVybiBjb250ZW50O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRhdGUyRmxvYXQoZGF0ZTogRGF0ZSkge1xuICAgIGNvbnN0IGJlZyA9IG5ldyBEYXRlKFwiMTg5OS0xMi0zMFwiKTtcbiAgICByZXR1cm4gKygoZGF0ZS5nZXRUaW1lKCkgLSBiZWcuZ2V0VGltZSgpKSAvICgyNCozNjAwKjEwMDApKS50b0ZpeGVkKDcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UmF3KHB0aGlzOiBDZWxsLCB2YWx1ZSA9IHB0aGlzLnJhd0NvbnRlbnQpIHtcbiAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBGb3JtdWxhKVxuICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgICByZXR1cm4gRm9ybWF0cy5kZWZhdWx0LmNhbGwocHRoaXMsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGNvbnN0IEZvcm1hdHMgPSB7XG5cbiAgICBkZWZhdWx0OiBmdW5jdGlvbih0aGlzOiBDZWxsfG51bGwsIHZhbHVlID0gdGhpcz8ucmF3Q29udGVudCkge1xuXG4gICAgICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIEZvcm11bGEpXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmNhY2hlZFZhbHVlKCk7XG5cbiAgICAgICAgY29uc3QgcHJlYyA9ICsodGhpcz8uZ2V0QXR0cmlidXRlKCdwcmVjaXNpb24nKSA/PyAyKTtcblxuICAgICAgICBpZiggdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG5cbiAgICAgICAgICAgIGlmKCB0aGlzPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpID09PSBcInBvdXJjZW50XCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAkeysoICgrdmFsdWUpKjEwMCkudG9QcmVjaXNpb24oNyl9YC5yZXBsYWNlKCcuJywgJywnKSArIFwiJVwiO1xuXG4gICAgICAgICAgICByZXR1cm4gYCR7K3ZhbHVlLnRvUHJlY2lzaW9uKDcpfWAucmVwbGFjZSgnLicsICcsJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggdHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIilcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA/ICdWUkFJJyA6ICdGQVVYJztcblxuICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWUhO1xuICAgIH0sXG4gICAgbnVtYmVyOiBmdW5jdGlvbih0aGlzOkNlbGwsIHZhbHVlID0gdGhpcy5yYXdDb250ZW50KSB7XG5cbiAgICAgICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRm9ybXVsYSlcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuY2FjaGVkVmFsdWUoKTtcblxuICAgICAgICBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG5cbiAgICAgICAgaWYodmFsdWUgaW5zdGFuY2VvZiBEYXRlKVxuICAgICAgICAgICAgdmFsdWUgPSBkYXRlMkZsb2F0KHZhbHVlKTtcblxuICAgICAgICBpZiggdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIikgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIsIFwibnVtYmVyXCIpO1xuXG4gICAgICAgICAgICBpZiggISAodGhpcy5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSkgKVxuICAgICAgICAgICAgICAgIENhbGNTaGVldC5nZXRTaGVldEZyb21DZWxsKHRoaXMpLmdldFJhbmdlKHRoaXMpLmNvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZWMgPSArKHRoaXMuZ2V0QXR0cmlidXRlKCdwcmVjaXNpb24nKSA/PyAyKTtcblxuICAgICAgICByZXR1cm4gdmFsdWUudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XG4gICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHByZWMsXG4gICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNcbiAgICAgICAgICAgIH0pO1xuICAgIH0sXG4gICAgcG91cmNlbnQ6IGZ1bmN0aW9uKHRoaXM6Q2VsbCwgdmFsdWUgPSB0aGlzLnJhd0NvbnRlbnQpIHtcblxuICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBGb3JtdWxhKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5jYWNoZWRWYWx1ZSgpO1xuXG4gICAgICAgIGlmKHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgaWYodmFsdWUgaW5zdGFuY2VvZiBEYXRlKVxuICAgICAgICAgICAgdmFsdWUgPSBkYXRlMkZsb2F0KHZhbHVlKTtcblxuICAgICAgICBpZiggdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIikgIT09IFwicG91cmNlbnRcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIiwgXCJwb3VyY2VudFwiKTtcbiAgICAgICAgICAgIGlmKCAhICh0aGlzLnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBGb3JtdWxhKSApXG4gICAgICAgICAgICAgICAgQ2FsY1NoZWV0LmdldFNoZWV0RnJvbUNlbGwodGhpcykuZ2V0UmFuZ2UodGhpcykuY29udGVudCA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJlYyA9ICsodGhpcy5nZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicpID8/IDIpO1xuXG4gICAgICAgIHJldHVybiAodmFsdWUgKiAxMDApLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjLFxuICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjXG4gICAgICAgICAgICB9KSArICclJztcbiAgICB9LFxuICAgIGRhdGU6IGZ1bmN0aW9uKHRoaXM6Q2VsbCwgdmFsdWUgPSB0aGlzLnJhd0NvbnRlbnQpIHtcbiAgICAgICAgXG4gICAgICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIEZvcm11bGEpXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmNhY2hlZFZhbHVlKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgaWYodmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgaWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcblxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtdHlwZVwiLCBcImRhdGVcIik7XG5cbiAgICAgICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSApIHtcbiAgICAgICAgICAgIGxldCBkYXRlID0gdmFsdWUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIik7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5zbGljZSgwLCA2KSArIGRhdGUuc2xpY2UoOCk7XG4gICAgICAgIH0gaWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZmxvYXQyRGF0ZSh2YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmKCAhICh0aGlzLnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBGb3JtdWxhKSApXG4gICAgICAgICAgICAgICAgQ2FsY1NoZWV0LmdldFNoZWV0RnJvbUNlbGwodGhpcykuZ2V0UmFuZ2UoIHRoaXMgKS5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGRhdGUgPSBjb250ZW50LnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUZSXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUuc2xpY2UoMCwgNikgKyBkYXRlLnNsaWNlKDgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgZXVyb3M6IGZ1bmN0aW9uKHRoaXM6Q2VsbCwgdmFsdWUgPSB0aGlzLnJhd0NvbnRlbnQpIHtcblxuICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBGb3JtdWxhKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5jYWNoZWRWYWx1ZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgIGlmKHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcblxuICAgICAgICBpZih2YWx1ZSBpbnN0YW5jZW9mIERhdGUpXG4gICAgICAgICAgICB2YWx1ZSA9IGRhdGUyRmxvYXQodmFsdWUpO1xuXG4gICAgICAgIGlmKCB0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtdHlwZVwiKSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIiwgXCJudW1iZXJcIik7XG4gICAgICAgICAgICBpZiggISAodGhpcy5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSkgKVxuICAgICAgICAgICAgICAgIENhbGNTaGVldC5nZXRTaGVldEZyb21DZWxsKHRoaXMpLmdldFJhbmdlKHRoaXMpLmNvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZWMgPSArKHRoaXMuZ2V0QXR0cmlidXRlKCdwcmVjaXNpb24nKSA/PyAyKTtcblxuICAgICAgICByZXR1cm4gdmFsdWUudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XG4gICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHByZWMsXG4gICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNcbiAgICAgICAgICAgIH0pICsgJyDigqwnO1xuICAgIH0sXG59XG5cbmV4cG9ydCBjbGFzcyBGb3JtYXQge1xuXG4gICAgI2Zvcm1hdDogUmVjb3JkPHN0cmluZywgYW55PjtcblxuICAgIGNvbnN0cnVjdG9yKGZvcm1hdDogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgICAgICB0aGlzLiNmb3JtYXQgPSBmb3JtYXQ7XG4gICAgfVxuXG4gICAgYXBwbHlUbyhjZWxsOiBDZWxsfENlbGxMaXN0KSB7XG5cbiAgICAgICAgaWYoIGNlbGwgaW5zdGFuY2VvZiBDZWxsTGlzdCkge1xuXG4gICAgICAgICAgICBmb3IobGV0IGMgb2YgY2VsbC5jZWxscylcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5VG8oYyk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgbmFtZSBpbiB0aGlzLiNmb3JtYXQpIHtcbiAgICAgICAgICAgIGxldCB2YWwgPSB0aGlzLiNmb3JtYXRbbmFtZV07XG5cbiAgICAgICAgICAgIGlmKG5hbWUgPT09ICdmb3JtYXQnKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggdmFsID09PSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY2VsbC5mb3JtYXQgPSBGb3JtYXRzLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBjZWxsLmZvcm1hdCgpOyAvL1RPRE86IGlmIGZjdFxuICAgIFxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjZWxsLmZvcm1hdCA9IHZhbDtcbiAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gY2VsbC5mb3JtYXQoIGNlbGwucmF3Q29udGVudCk7IC8vVE9ETzogaWYgZmN0XG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYobmFtZSA9PT0gJ3ByZWNpc2lvbicpIHtcbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgncHJlY2lzaW9uJywgdmFsKTtcbiAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gY2VsbC5mb3JtYXQ/LiggY2VsbC5yYXdDb250ZW50KTsgLy9UT0RPOiBpZiBmY3RcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIG5hbWUgPT09ICdzcGFuJyApIHtcblxuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hlZXQgPSBDYWxjU2hlZXQuZ2V0U2hlZXRGcm9tQ2VsbChjZWxsKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiggdmFsWzBdID09PSAxICYmIHZhbFsxXSA9PT0gMSkgeyAvLyB1bm1lcmdlXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHIgPSArKGNlbGwuZ2V0QXR0cmlidXRlKCdyb3dzcGFuJykgPz8gMCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjID0gKyhjZWxsLmdldEF0dHJpYnV0ZSgnY29sc3BhbicpID8/IDApO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByOyArK2kpXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgYzsgKytqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gc2hlZXQucmVsYXRpdmVUbyhjZWxsLCBpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGFyZ2V0LmNlbGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgncm93c3BhbicpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgnY29sc3BhbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdyb3dzcGFuJywgYCR7dmFsWzBdfWApO1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgYCR7dmFsWzFdfWApO1xuXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHZhbFswXTsgKytpKVxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdmFsWzFdOyArK2opIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGkgPT09IDAgJiYgaiA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gc2hlZXQucmVsYXRpdmVUbyhjZWxsLCBpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jZWxsID0gY2VsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCB0eXBlb2YgdmFsID09PSBcImJvb2xlYW5cIikge1xuXG4gICAgICAgICAgICAgICAgaWYoIG5hbWUuc3RhcnRzV2l0aCgnYWxpZ25fJykgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYWxpZ25fbGVmdCcpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2FsaWduX2NlbnRlcicpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2FsaWduX3JpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCBuYW1lLnN0YXJ0c1dpdGgoJ3ZhbGlnbl8nKSApIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZ25fdG9wJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWduX21pZGRsZScpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlnbl9ib3R0b20nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUobmFtZSwgdmFsKTtcblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjZWxsLnN0eWxlLnNldFByb3BlcnR5KGAtLSR7bmFtZX1gLCB2YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UHJvcGVydHkobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNmb3JtYXRbbmFtZV07XG4gICAgfVxuICAgIGhhc1Byb3BlcnR5KG5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmFtZSBpbiB0aGlzLiNmb3JtYXQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGV4dHJhY3RGb3JtYXQoY2VsbDogQ2VsbHxDZWxsTGlzdCk6IEZvcm1hdCB7XG4gICAgICAgIFxuICAgICAgICBpZiggY2VsbCBpbnN0YW5jZW9mIENlbGxMaXN0KSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gY2VsbC5jZWxscztcblxuICAgICAgICAgICAgbGV0IGZvcm1hdCA9IEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzWzBdKTtcblxuICAgICAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IGNlbGxzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGYyID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHNbaV0pO1xuXG4gICAgICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gZm9ybWF0LiNmb3JtYXQpXG4gICAgICAgICAgICAgICAgICAgIGlmKCAhIChrZXkgaW4gZjIuI2Zvcm1hdCkgfHwgZjIuI2Zvcm1hdFtrZXldICE9PSBmb3JtYXQuI2Zvcm1hdFtrZXldIClcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBmb3JtYXQuI2Zvcm1hdFtrZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgZm9ybWF0ID0gT2JqZWN0LmZyb21FbnRyaWVzPGFueT4oIFsuLi5jZWxsLmNsYXNzTGlzdC52YWx1ZXMoKV0ubWFwKGUgPT4gW2UsIHRydWVdKSApO1xuICAgICAgICBcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNlbGwuc3R5bGUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBuYW1lID0gY2VsbC5zdHlsZS5pdGVtKGkpO1xuICAgICAgICAgICAgaWYoICEgbmFtZS5zdGFydHNXaXRoKCctLScpIClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIGZvcm1hdFtuYW1lLnNsaWNlKDIpXSA9IGNlbGwuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbHNwYW4gPSArKGNlbGwuZ2V0QXR0cmlidXRlKCdjb2xzcGFuJykgPz8gMSk7XG4gICAgICAgIGNvbnN0IHJvd3NwYW4gPSArKGNlbGwuZ2V0QXR0cmlidXRlKCdyb3dzcGFuJykgPz8gMSk7XG5cbiAgICAgICAgaWYoIGNvbHNwYW4gPiAxIHx8IHJvd3NwYW4gPiAxIClcbiAgICAgICAgICAgIGZvcm1hdC5zcGFuID0gWyByb3dzcGFuLCBjb2xzcGFuIF07XG5cbiAgICAgICAgaWYoICEgKFwiZm9udF9zaXplXCIgaW4gZm9ybWF0KSApXG4gICAgICAgICAgICBmb3JtYXRbJ2ZvbnRfc2l6ZSddID0gJzEwcHQnO1xuXG4gICAgICAgIGlmKCBcImZvcm1hdFwiIGluIGNlbGwpXG4gICAgICAgICAgICBmb3JtYXQuZm9ybWF0ID0gY2VsbC5mb3JtYXQ7XG5cbiAgICAgICAgaWYoIGNlbGwuaGFzQXR0cmlidXRlKCdwcmVjaXNpb24nKSApXG4gICAgICAgICAgICBmb3JtYXQucHJlY2lzaW9uID0gY2VsbC5nZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicpO1xuXG4gICAgICAgIHJldHVybiBuZXcgRm9ybWF0KGZvcm1hdCk7XG4gICAgfVxufSIsIi8vVE9ETzogd2VicGFjayBjb25maWcuLi5cbmltcG9ydCBMSVNTIGZyb20gXCIuLi8uLi8uLi9saWJzL0xJU1NcIjtcbmltcG9ydCB7IGZvcm1hdFJhdywgRm9ybWF0cyB9IGZyb20gXCIuL2Zvcm1hdFwiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0LCBDZWxsIH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuY29uc3QgY3NzID0gYFxuICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAmIHByZSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xuICAgICAgICAgICAgbWluLWhlaWdodDogY2FsYyggMXJlbSArIDhweCArIDJweCApO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB0O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMaWJlcmF0aW9uIFNhbnMnO1xuICAgICAgICB9XG4gICAgfVxuYDtcblxuXG5leHBvcnQgY2xhc3MgQ2FsY0Zvcm11bGEgZXh0ZW5kcyBMSVNTKHtcbiAgICBjc3Ncbn0pIHtcblxuICAgICNpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xuICAgICNzaGVldCAgITogQ2FsY1NoZWV0O1xuICAgICNjdXJfY2VsbDogQ2VsbHxudWxsID0gbnVsbDtcbiAgICAjb25JbnB1dDogKGV2OiBFdmVudCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoIHRoaXMuI2lucHV0ICk7XG5cbiAgICAgICAgdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmKCB0aGlzLiNjdXJfY2VsbCA9PT0gbnVsbCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAvL3RoaXMuI3NoZWV0LmN1cnNvci5jb250ZW50ID0gdGhpcy4jaW5wdXQudGV4dENvbnRlbnQhO1xuICAgICAgICAgICAgdGhpcy4jc2hlZXQuc3RhdGVzLmNlbGxfZWRpdC5zdGF0ZSA9IG51bGw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmKCB0aGlzLiNjdXJfY2VsbCA9PT0gbnVsbCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLiNzaGVldC5zdGF0ZXMuY2VsbF9lZGl0LnN0YXRlID0gdGhpcy4jY3VyX2NlbGw7XG4gICAgICAgICAgICAvL3RoaXMuI2N1cl9jZWxsIS50ZXh0Q29udGVudCA9IHRoaXMuI2lucHV0LnRleHRDb250ZW50ITtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiggdGhpcy4jY3VyX2NlbGwgPT09IG51bGwgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwhLnRleHRDb250ZW50ID0gZm9ybWF0UmF3KHRoaXMuI2N1cl9jZWxsLCB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCEgKTtcbiAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudCgnaW5wdXQnLCB7ZGV0YWlsOiB0cnVlfSkgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jb25JbnB1dCA9IChldjogRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBpZiggZXYuZGV0YWlsID09PSB0cnVlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gZm9ybWF0UmF3KCB0aGlzLiNjdXJfY2VsbCEsIHRoaXMuI2N1cl9jZWxsIS50ZXh0Q29udGVudCEgKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzeW5jVG8oc2hlZXQ6IENhbGNTaGVldCkge1xuXG4gICAgICAgIHRoaXMuI3NoZWV0ID0gc2hlZXQ7XG4gICAgICAgIGNvbnN0IGN1cnNvciA9IHRoaXMuI3NoZWV0LmN1cnNvcjtcblxuICAgICAgICBzaGVldC5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3VwZGF0ZScsICgpID0+IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gZm9ybWF0UmF3KGN1cnNvci5maXJzdENlbGwgKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjdXJzb3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IGN1cnNvci5jZWxscztcblxuICAgICAgICAgICAgdGhpcy4jaW5wdXQudG9nZ2xlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAhIHNoZWV0LmlzUk8gKTtcblxuICAgICAgICAgICAgaWYoIGNlbGxzLmxlbmd0aCA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgaWYoIHRoaXMuI2N1cl9jZWxsICE9PSBudWxsIClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLiNvbklucHV0KTtcbiAgICAgICAgICAgICAgICB0aGlzLiNjdXJfY2VsbCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiNjdXJfY2VsbCA9IGNlbGxzWzBdO1xuICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLiNvbklucHV0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy4jaW5wdXQudGV4dENvbnRlbnQgPSBmb3JtYXRSYXcoIHRoaXMuI2N1cl9jZWxsICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5MSVNTLmRlZmluZSgnY2FsYy1mb3JtdWxhJywgQ2FsY0Zvcm11bGEpOyIsImltcG9ydCB7IGRhdGUyRmxvYXQsIEZvcm1hdHMgfSBmcm9tIFwiLi9mb3JtYXRcIjtcbmltcG9ydCB7IENhbGNTaGVldCwgVmFsdWVUeXBlIH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuZXhwb3J0IGNsYXNzIEZvcm11bGEge1xuXG4gICAgI3N0cjogc3RyaW5nO1xuICAgICNleGVjOiAoc2hlZXQ6IENhbGNTaGVldCkgPT4gVmFsdWVUeXBlO1xuICAgICNyYW5nZXM6IFRva2VuW107XG5cbiAgICAjY2FjaGU6IFZhbHVlVHlwZXxudWxsID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHN0cjogc3RyaW5nLCBleGVjOiAoc2hlZXQ6IENhbGNTaGVldCkgPT4gVmFsdWVUeXBlLCByYW5nZXNfdG9rZW46IFRva2VuW10gPSBbXSkge1xuXG4gICAgICAgIHRoaXMuI3N0ciA9IHN0cjtcbiAgICAgICAgdGhpcy4jZXhlYyA9IGV4ZWM7XG4gICAgICAgIHRoaXMuI3JhbmdlcyA9IHJhbmdlc190b2tlbjtcbiAgICB9XG4gICAgXG4gICAgcmVsYXRpdmVUbyggc2hlZXQ6IENhbGNTaGVldCwgZHJvdzogbnVtYmVyLCBkY29sOiBudW1iZXIpIHtcbiAgICAgICAgXG4gICAgICAgIGxldCBuZXdfcmFuZ2VzID0gdGhpcy4jcmFuZ2VzLm1hcChyID0+IHtcblxuICAgICAgICAgICAgLy9UT0RPOiBpZiByYW5nZS4uLlxuICAgICAgICAgICAgbGV0IHBvcyA9IFsuLi5zaGVldC5jZWxsUG9zKCBzaGVldC5nZXRSYW5nZShyLnZhbHVlKS5maXJzdENlbGwgKV07XG4gICAgXG4gICAgICAgICAgICBpZiggci52YWx1ZS5sYXN0SW5kZXhPZignJCcpIDw9IDAgKVxuICAgICAgICAgICAgICAgIHBvc1swXSArPSBkcm93O1xuICAgICAgICAgICAgaWYoIHIudmFsdWVbMF0gIT09ICckJyApXG4gICAgICAgICAgICAgICAgcG9zWzFdICs9IGRjb2w7XG5cbiAgICAgICAgICAgIHJldHVybiBgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1K3Bvc1sxXS0xKX0ke3Bvc1swXX1gO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbmV3X2Zvcm11bGEgPSBcIlwiO1xuXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy4jcmFuZ2VzLmxlbmd0aDsgKytpKSB7XG5cbiAgICAgICAgICAgIG5ld19mb3JtdWxhICs9IHRoaXMuI3N0ci5zbGljZShvZmZzZXQsIHRoaXMuI3Jhbmdlc1tpXS5iZWcpO1xuICAgICAgICAgICAgbmV3X2Zvcm11bGEgKz0gbmV3X3Jhbmdlc1tpXTtcblxuICAgICAgICAgICAgb2Zmc2V0ID0gdGhpcy4jcmFuZ2VzW2ldLmVuZDtcbiAgICAgICAgfVxuICAgICAgICBuZXdfZm9ybXVsYSArPSB0aGlzLiNzdHIuc2xpY2Uob2Zmc2V0KTtcbiAgICAgICAgXG4gICAgICAgIC8vY2FuIGJlIG9wdGltaXplZC4uLlxuICAgICAgICByZXR1cm4gcGFyc2VfZm9ybXVsYSggbmV3X2Zvcm11bGEgKTtcbiAgICB9XG5cbiAgICBnZXQgcmFuZ2VzVG9rZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNyYW5nZXM7XG4gICAgfVxuXG4gICAgcmVzZXRDYWNoZSgpIHtcbiAgICAgICAgdGhpcy4jY2FjaGUgPSBudWxsO1xuICAgIH1cblxuICAgIGNhY2hlZFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY2FjaGUhO1xuICAgIH1cblxuICAgIGV4ZWMoc2hlZXQ6IENhbGNTaGVldCkge1xuXG4gICAgICAgIGlmKCB0aGlzLiNjYWNoZSAhPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiNjYWNoZTtcblxuICAgICAgICByZXR1cm4gdGhpcy4jY2FjaGUgPSB0aGlzLiNleGVjKHNoZWV0KTtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3N0cjtcbiAgICB9XG59XG5cbnR5cGUgVG9rZW4gPSB7XG4gICAgYmVnOiBudW1iZXIsXG4gICAgZW5kOiBudW1iZXIsXG4gICAgdmFsdWU6IHN0cmluZyxcbiAgICB0eXBlOiBcInN0cmluZ1wifFwibnVtYmVyXCJ8XCJjYWxsXCJ8XCJyYW5nZVwifFwib3BcIlxufVxuXG5cbmZ1bmN0aW9uIGV4dHJhY3RUb2tlbihzdHI6IHN0cmluZywgb2Zmc2V0OiBudW1iZXIpIHtcblxuICAgIHdoaWxlKCBbJyAnLCAnXFxuJywgJ1xcdCddLmluY2x1ZGVzKHN0cltvZmZzZXRdKSApIC8vIGlnbm9yZSB3aGl0ZXNwYWNlc1xuICAgICAgICArK29mZnNldDtcblxuICAgIGxldCB0b2tlbjogUGFydGlhbDxUb2tlbj4gPSB7XG4gICAgICAgIGJlZzogb2Zmc2V0XG4gICAgfTtcblxuICAgIGlmKHN0cltvZmZzZXRdID09PSAnXCInKSB7XG4gICAgICAgIHRva2VuLnR5cGUgPSBcInN0cmluZ1wiO1xuICAgICAgICB3aGlsZSggc3RyWysrb2Zmc2V0XSAhPT0gJ1wiJyAmJiBzdHJbb2Zmc2V0LTFdICE9PSAnXFxcXCcpIHtcbiAgICAgICAgICAgIGlmKG9mZnNldCsxID49IHN0ci5sZW5ndGggKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRm9ybXVsYSBwYXJzaW5nIGVycm9yJyk7XG4gICAgICAgIH1cbiAgICAgICAgKytvZmZzZXQ7XG4gICAgfSBlbHNlIGlmKCBzdHJbb2Zmc2V0XSA9PT0gJywnIHx8IChzdHJbb2Zmc2V0XSA+PSAnMCcgJiYgc3RyW29mZnNldF0gPD0gJzknKSApIHtcbiAgICAgICAgdG9rZW4udHlwZSA9IFwibnVtYmVyXCI7XG4gICAgICAgIGxldCBoYXNDb21tYSA9IGZhbHNlO1xuICAgICAgICB3aGlsZSggc3RyW29mZnNldF0gPT09ICcsJyB8fCBzdHJbb2Zmc2V0XSA+PSAnMCcgJiYgc3RyW29mZnNldF0gPD0gJzknICkge1xuXG4gICAgICAgICAgICBpZiggc3RyW29mZnNldF0gPT09ICcsJyApIHtcbiAgICAgICAgICAgICAgICBpZihoYXNDb21tYSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JtdWxhIHBhcnNpbmcgZXJyb3InKTtcbiAgICAgICAgICAgICAgICBoYXNDb21tYSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICsrb2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICB9IGVsc2UgaWYoIHN0cltvZmZzZXRdID09PSAnJCcgfHwgc3RyW29mZnNldF0gPj0gJ0EnICYmIHN0cltvZmZzZXRdIDw9ICdaJykgeyAvLyskXG4gICAgICAgIFxuICAgICAgICB3aGlsZSggb2Zmc2V0IDwgc3RyLmxlbmd0aFxuICAgICAgICAgICAgICAgICYmIChzdHJbb2Zmc2V0XSA9PT0gJyQnIHx8IHN0cltvZmZzZXRdID49ICdBJyAmJiBzdHJbb2Zmc2V0XSA8PSAnWidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBzdHJbb2Zmc2V0XSA+PSAnMCcgJiYgc3RyW29mZnNldF0gPD0gJzknXG4gICAgICAgICAgICAgICAgICAgICkgKVxuICAgICAgICAgICAgKytvZmZzZXQ7XG5cbiAgICAgICAgdG9rZW4udHlwZSA9IHN0cltvZmZzZXRdID09PSAnKCcgPyAnY2FsbCcgOiAncmFuZ2UnO1xuXG4gICAgICAgIGlmKCBzdHJbb2Zmc2V0XSA9PT0gJygnIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b2tlbi50eXBlID0gXCJvcFwiOyAvLyBvbmx5IG9uIGNoYXIgPz8/XG5cbiAgICAgICAgaWYoIHN0cltvZmZzZXQgKyAxXSA9PT0gJz0nKSAvLyA+PSAvIDw9XG4gICAgICAgICAgICArK29mZnNldDtcbiAgICAgICAgZWxzZSBpZiggc3RyW29mZnNldCArIDFdID09PSAnPicpIC8vIDw+XG4gICAgICAgICAgICArK29mZnNldDtcblxuICAgICAgICArK29mZnNldDtcbiAgICB9XG5cbiAgICB0b2tlbi5lbmQgPSBvZmZzZXQ7XG4gICAgdG9rZW4udmFsdWUgPSBzdHIuc2xpY2UodG9rZW4uYmVnLCB0b2tlbi5lbmQpO1xuXG4gICAgcmV0dXJuIHRva2VuIGFzIFJlcXVpcmVkPFRva2VuPjtcbn1cblxuY2xhc3MgTm9kZSB7XG5cbiAgICBjaGlsZHJlbjogTm9kZVtdO1xuICAgICNmY3Q6IChzaGVldDogQ2FsY1NoZWV0LCAuLi5hcmdzOihWYWx1ZVR5cGUpW10pID0+IFZhbHVlVHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKGZjdDogKHNoZWV0OiBDYWxjU2hlZXQsIC4uLmFyZ3M6KFZhbHVlVHlwZSlbXSkgPT4gVmFsdWVUeXBlLCAuLi5jaGlsZHJlbjogTm9kZVtdKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgaWYoY2hpbGRyZW4gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIldURlwiKTtcbiAgICAgICAgdGhpcy4jZmN0ID0gZmN0O1xuICAgIH1cblxuICAgIGV2YWwoc2hlZXQ6IENhbGNTaGVldCk6IFZhbHVlVHlwZSB7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSB0aGlzLmNoaWxkcmVuLm1hcCggYyA9PiBjLmV2YWwoc2hlZXQpICk7XG4gICAgICAgIHJldHVybiB0aGlzLiNmY3Qoc2hlZXQsIC4uLmFyZ3MgKTtcbiAgICB9XG4gICAgXG59XG5cbmZ1bmN0aW9uIHRvTnVtYmVyKGE6IHVua25vd24pOiBudW1iZXIge1xuXG4gICAgaWYoYSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gMDtcblxuICAgIGlmKCB0eXBlb2YgYSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgcmV0dXJuIE51bWJlcihhKTtcblxuICAgIGlmKCBhIGluc3RhbmNlb2YgRGF0ZSlcbiAgICAgICAgcmV0dXJuIGRhdGUyRmxvYXQoYSk7XG5cbiAgICByZXR1cm4gYSBhcyB1bmtub3duIGFzIG51bWJlcjtcbn1cblxuY29uc3Qgb3BfaW1wbCA9IHtcbiAgICAnJSc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24pID0+IHRvTnVtYmVyKGEpLzEwMCxcbiAgICAndS4rJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93bikgPT4gK3RvTnVtYmVyKGEpLFxuICAgICd1Li0nOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duKSA9PiAtdG9OdW1iZXIoYSksXG4gICAgJyonOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiB0b051bWJlcihhKSp0b051bWJlcihiKSxcbiAgICAnLyc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24sIGI6IHVua25vd24pID0+IHRvTnVtYmVyKGEpL3RvTnVtYmVyKGIpLFxuICAgICcrJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93biwgYjogdW5rbm93bikgPT4gdG9OdW1iZXIoYSkrdG9OdW1iZXIoYiksXG4gICAgJy0nOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiB0b051bWJlcihhKS10b051bWJlcihiKSxcbiAgICAnXic6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24sIGI6IHVua25vd24pID0+IE1hdGgucG93KHRvTnVtYmVyKGEpLHRvTnVtYmVyKGIpICksXG4gICAgJyYnOiAoXzogQ2FsY1NoZWV0LCBhOiBzdHJpbmcsIGI6IHN0cmluZykgPT4gYCR7Rm9ybWF0cy5kZWZhdWx0LmNhbGwobnVsbCwgYSl9JHtGb3JtYXRzLmRlZmF1bHQuY2FsbChudWxsLCBiKX1gLFxuICAgICc9JzogIChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhID09PSBiLFxuICAgICc8Pic6IChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhICE9PSBiLFxuICAgICc+JzogIChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhID4gYixcbiAgICAnPj0nOiAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSA+PSBiLFxuICAgICc8JzogIChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhIDwgYixcbiAgICAnPD0nOiAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSA8PSBiLFxufSBhcyBSZWNvcmQ8c3RyaW5nLCAoXzogQ2FsY1NoZWV0LCAuLi5hcmdzOlZhbHVlVHlwZVtdKSA9PiBWYWx1ZVR5cGU+O1xuXG4vLyBodHRwczovL2hlbHAubGlicmVvZmZpY2Uub3JnL2xhdGVzdC9lbi1VUy90ZXh0L3NjYWxjLzAxLzA0MDYwMTk5Lmh0bWxcbmNvbnN0IG9wX3ByaW8gPSBbXG4gICAgWyc6J10sIC8vIHJhbmdlXG4gICAgWychJ10sIC8vIHJhbmdlIGludGVyc2VjdGlvblxuICAgIFsnfiddLCAvLyByYW5nZSB1bmlvblxuICAgIFsndS4rJywgJ3UuLSddLCAvLyB1bmFyeSAtIGZyb20gcmlnaHQgdG8gbGVmdC4uLlxuICAgIFsnJSddLCAvLyBwb3N0Zml4LCAvMTAwXG4gICAgWydeJ10sIC8vIHBvd2VyXG4gICAgWycqJywgJy8nXSxcbiAgICBbJysnLCAnLSddLFxuICAgIFsnJiddLCAvLyBzdHJpbmcgY29uY2F0XG4gICAgWyc9JywgJzw+JywgJzwnLCAnPD0nLCAnPicsICc+PSddIC8vIGNvbXBhcmVcbl07XG5cbmxldCBvcHM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fTtcbmZvcihsZXQgaSA9IDA7IGkgPCBvcF9wcmlvLmxlbmd0aDsgKytpKVxuICAgIGZvcihsZXQgb3Agb2Ygb3BfcHJpb1tpXSApXG4gICAgICAgIG9wc1tvcF0gPSBpO1xuXG5mdW5jdGlvbiB0b2tlbmxpc3QyVHJlZSh0b2tlbnM6IFRva2VuW10pOiBOb2RlIHtcblxuICAgIGlmKCB0b2tlbnMubGVuZ3RoID09PSAxKSB7XG5cbiAgICAgICAgaWYoIHRva2Vuc1swXS50eXBlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBjb25zdCBuYiA9ICt0b2tlbnNbMF0udmFsdWUucmVwbGFjZSgnLCcsICcuJyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vZGUoICgpID0+IG5iKTtcbiAgICAgICAgfVxuICAgICAgICBpZiggdG9rZW5zWzBdLnR5cGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0ciA9IHRva2Vuc1swXS52YWx1ZS5zbGljZSgxLC0xKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTm9kZSggKCkgPT4gc3RyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiggdG9rZW5zWzBdLnR5cGUgPT09IFwicmFuZ2VcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBOb2RlKCAoc2hlZXQ6IENhbGNTaGVldCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IHJhdyA9IHNoZWV0LmdldFJhbmdlKHRva2Vuc1swXS52YWx1ZSkuZmlyc3RDZWxsLnJhd0NvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgICBpZiggcmF3IGluc3RhbmNlb2YgRm9ybXVsYSlcbiAgICAgICAgICAgICAgICAgICAgcmF3ID0gcmF3LmV4ZWMoc2hlZXQpOyAvLyBUT0RPOiBjYWNoZSByZXN1bHRcblxuICAgICAgICAgICAgICAgIHJldHVybiByYXcgYXMgVmFsdWVUeXBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiPz8/XCIpO1xuICAgIH1cblxuICAgIGlmKHRva2Vuc1swXS52YWx1ZSA9PT0gJygnICYmIHRva2Vuc1t0b2tlbnMubGVuZ3RoLTFdLnZhbHVlID09PSAnKScpXG4gICAgICAgIHJldHVybiB0b2tlbmxpc3QyVHJlZSh0b2tlbnMuc2xpY2UoMSwtMSkgKTtcblxuICAgIGxldCBjdXIgPSB7XG4gICAgICAgIHByaW9yaXR5OiBvcF9wcmlvLmxlbmd0aCxcbiAgICAgICAgaWR4ICAgICA6IC0xXG4gICAgfTtcblxuICAgIGZvcihsZXQgaSA9IHRva2Vucy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICBpZiggdG9rZW5zW2ldLnR5cGUgIT09IFwib3BcIiApIC8vIGNhbGwgbm90IGhhbmRsZWQgeWV0Li4uXG4gICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICBpZiggdG9rZW5zW2ldLnZhbHVlID09PSAnKScgKSB7IC8vIGdvIHRvIGZpcnN0ICcoJ1xuICAgICAgICAgICAgaSA9IHRva2Vucy5maW5kSW5kZXgoIHQgPT4gdC50eXBlID09PSAnb3AnICYmIHQudmFsdWUgPT09ICcoJyk7XG5cbiAgICAgICAgICAgIGlmKCBpID09PSAwKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLS1pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXNzZXJ0cyBpZiB1bmFyeSBvcC5cbiAgICAgICAgaWYoIHRva2Vuc1tpXS52YWx1ZSA9PT0gJy0nIHx8IHRva2Vuc1tpXS52YWx1ZSA9PT0gJysnICkge1xuXG4gICAgICAgICAgICBpZiggaSA9PT0gMCB8fCB0b2tlbnNbaS0xXS50eXBlID09PSBcIm9wXCIgKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB1X29wID0gYHUuJHt0b2tlbnNbaV0udmFsdWV9YDtcbiAgICAgICAgICAgICAgICB0b2tlbnNbaV0udmFsdWUgPSB1X29wO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gb3BzW3Vfb3BdO1xuXG4gICAgICAgICAgICAgICAgLy8gcHJpb3JpdHkgaXMgcmV2ZXJzZWQgKyBldmFsdWF0ZWQgZnJvbSByaWdodCB0byBsZWZ0LlxuICAgICAgICAgICAgICAgIGlmKCBwcmlvcml0eSA8PSBjdXIucHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VyLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgICAgIGN1ci5pZHggICAgICA9IGk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IG9wc1t0b2tlbnNbaV0udmFsdWVdO1xuXG4gICAgICAgIC8vIHByaW9yaXR5IGlzIHJldmVyc2VkLlxuICAgICAgICBpZiggcHJpb3JpdHkgPCBjdXIucHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGN1ci5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICAgICAgY3VyLmlkeCAgICAgID0gaTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKCBjdXIuaWR4ID09PSAtMSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCc/Pz8nKTtcblxuICAgIGxldCBvcF90b2tlbiA9IHRva2Vuc1tjdXIuaWR4XTtcbiAgICBpZiggb3BfdG9rZW4udmFsdWUgPT09ICclJyApIHtcbiAgICAgICAgY29uc3QgbGVmdCAgPSB0b2tlbnMuc2xpY2UoMCwgY3VyLmlkeCk7XG4gICAgICAgIGNvbnN0IG9wID0gb3BfaW1wbFtvcF90b2tlbi52YWx1ZSBhcyBrZXlvZiB0eXBlb2Ygb3BfaW1wbF07XG4gICAgICAgIHJldHVybiBuZXcgTm9kZShcbiAgICAgICAgICAgIG9wLFxuICAgICAgICAgICAgdG9rZW5saXN0MlRyZWUobGVmdClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiggb3BfdG9rZW4udmFsdWUgPT09ICd1Li0nIHx8ICBvcF90b2tlbi52YWx1ZSA9PT0gJ3UuKycgKSB7XG5cbiAgICAgICAgY29uc3QgcmlnaHQgID0gdG9rZW5zLnNsaWNlKGN1ci5pZHgrMSk7XG4gICAgICAgIGNvbnN0IG9wID0gb3BfaW1wbFtvcF90b2tlbi52YWx1ZSBhcyBrZXlvZiB0eXBlb2Ygb3BfaW1wbF07XG4gICAgICAgIHJldHVybiBuZXcgTm9kZShcbiAgICAgICAgICAgIG9wLFxuICAgICAgICAgICAgdG9rZW5saXN0MlRyZWUocmlnaHQpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgbGVmdCAgPSB0b2tlbnMuc2xpY2UoMCwgY3VyLmlkeCk7XG4gICAgY29uc3QgcmlnaHQgPSB0b2tlbnMuc2xpY2UoY3VyLmlkeCsxKTtcblxuICAgIGNvbnN0IG9wID0gb3BfaW1wbFtvcF90b2tlbi52YWx1ZSBhcyBrZXlvZiB0eXBlb2Ygb3BfaW1wbF07XG5cbiAgICByZXR1cm4gbmV3IE5vZGUoXG4gICAgICAgIG9wLFxuICAgICAgICB0b2tlbmxpc3QyVHJlZShsZWZ0KSxcbiAgICAgICAgdG9rZW5saXN0MlRyZWUocmlnaHQpXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlX2Zvcm11bGEoc3RyOnN0cmluZykge1xuXG4gICAgbGV0IG9mZnNldCA9IDE7XG4gICAgbGV0IHRva2VucyA9IG5ldyBBcnJheTxUb2tlbj4oKTtcblxuICAgIHdoaWxlKCBvZmZzZXQgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIGxldCBjdXJUb2tlbiA9IGV4dHJhY3RUb2tlbihzdHIsIG9mZnNldCk7XG4gICAgICAgIHRva2Vucy5wdXNoKCBjdXJUb2tlbiApO1xuICAgICAgICBvZmZzZXQgPSBjdXJUb2tlbi5lbmQ7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IHRva2VubGlzdDJUcmVlKHRva2VucykhO1xuXG4gICAgY29uc3QgcmFuZ2VzID0gdG9rZW5zLmZpbHRlcih0ID0+IHQudHlwZSA9PT0gXCJyYW5nZVwiICk7XG5cbiAgICByZXR1cm4gbmV3IEZvcm11bGEoc3RyLCAoc2hlZXQ6IENhbGNTaGVldCkgPT4gbm9kZS5ldmFsKHNoZWV0KSwgcmFuZ2VzICk7XG59IiwiLy9UT0RPOiB3ZWJwYWNrIGNvbmZpZy4uLlxuaW1wb3J0IExJU1MgZnJvbSBcIi4uLy4uLy4uL2xpYnMvTElTU1wiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0LCBDZWxsTGlzdCwgZGVmYXVsdEZvcm1hdCB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbi8vVE9ETzogc3ludGF4IGhpZ2hsaWdodCA7KVxuXG5jb25zdCBjc3MgPSBgXG4gICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYgcHJlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKCAxcmVtICsgOHB4ICsgMnB4ICk7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xpYmVyYXRpb24gU2Fucyc7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5leHBvcnQgY2xhc3MgUGxhZ2VGb3JtdWxhIGV4dGVuZHMgTElTUyh7XG4gICAgY3NzXG59KSB7XG5cbiAgICAjaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoIHRoaXMuI2lucHV0ICk7XG4gICAgICAgIHRoaXMuI2lucHV0LnRvZ2dsZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJyk7XG5cbiAgICAgICAgdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldikgPT4ge1xuICAgICAgICAgICAgaWYoZXYuY29kZSAhPT0gJ0VudGVyJylcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGV2LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLiNzaGVldC5nZXRDZWxscyh0aGlzLiNpbnB1dC50ZXh0Q29udGVudCEpLmNlbGxzO1xuXG4gICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5hZGQoIC4uLnNlbGVjdGVkICk7XG5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LmN1cnNvci5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy4jc2hlZXQuY3Vyc29yLmFkZCggc2VsZWN0ZWRbMF0gKTtcblxuICAgICAgICAgICAgdGhpcy4jaW5wdXQuYmx1cigpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vVE9ETy4uLi5cbiAgICAgICAgdGhpcy4jaW5wdXQudG9nZ2xlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAvKnRoaXMuI2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcblxuICAgICAgICB9KTsqL1xuICAgIH1cblxuICAgICNzaGVldCE6IENhbGNTaGVldDtcblxuICAgIHN5bmNUbyhzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcblxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBzaGVldC5zZWxlY3Rpb247XG5cbiAgICAgICAgc2VsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChfOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gc2VsZWN0aW9uLnBsYWdlX25hbWUgPz8gXCJcIjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5MSVNTLmRlZmluZSgnY2FsYy1wbGFnZScsIFBsYWdlRm9ybXVsYSk7IiwiaW1wb3J0IHsgUmFuZ2VPdmVybGF5IH0gZnJvbSBcIi4vUmFuZ2VPdmVybGF5XCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGwgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5leHBvcnQgY2xhc3MgUGxhZ2VTZWxlY3RvciB7XG5cbiAgICAjb3ZlcmxheXMgPSBuZXcgQXJyYXk8UmFuZ2VPdmVybGF5PigpO1xuICAgICNnZXRPdmVybGF5KGlkOiBudW1iZXIpIHtcbiAgICAgICAgd2hpbGUoaWQgPj0gdGhpcy4jb3ZlcmxheXMubGVuZ3RoKVxuICAgICAgICAgICAgdGhpcy4jb3ZlcmxheXMucHVzaCggbmV3IFJhbmdlT3ZlcmxheSh0aGlzLiNzaGVldCwgXCJzZWxlY3Rpb25faGlnaGxpZ2h0XCIpICk7XG4gICAgICAgIHJldHVybiB0aGlzLiNvdmVybGF5c1tpZF07XG4gICAgfVxuXG4gICAgI3VwZGF0ZVNlbGVjdGlvbigpIHtcblxuICAgICAgICBsZXQgc2VsZWN0ZWRfY2VsbHMgPSB0aGlzLiNzaGVldC5nZXRSYW5nZSggdGhpcy4jb3JpZ19wb3MsIHRoaXMuI2ZpbmFsX3BvcyApLmNlbGxzO1xuXG4gICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5jbGVhcigpOyAvLyB3ZSBhZGQgaXQuLi5cblxuICAgICAgICBpZiggdGhpcy4jaXNDdHJsICkge1xuXG4gICAgICAgICAgICAvLyByZXN0b3JlIGluaXRpYWwgc3RhdGUuLi5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5hZGQoLi4udGhpcy4jcHJldl9zZWxlY3Rpb24pO1xuXG4gICAgICAgICAgICAvL1RPRE8gb25seSBvcmlnX3RhcmdldC4uLlxuICAgICAgICAgICAgaWYodGhpcy4jc2hlZXQuc2VsZWN0aW9uLmhhcyggLi4uc2VsZWN0ZWRfY2VsbHMgKSApXG4gICAgICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLnJlbW92ZSggLi4uc2VsZWN0ZWRfY2VsbHMgKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uYWRkKCAuLi5zZWxlY3RlZF9jZWxscyApO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uYWRkKCAuLi5zZWxlY3RlZF9jZWxscyApO1xuXG4gICAgfVxuXG4gICAgI3VwZGF0ZVNlbGVjdGlvbkhpZ2hsaWdodCgpIHtcblxuICAgICAgICBjb25zdCBjZWxscyA9IHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5jZWxscztcbiAgICAgICAgZm9yKGxldCBvdmVybGF5IG9mIHRoaXMuI292ZXJsYXlzKVxuICAgICAgICAgICAgb3ZlcmxheS5zZXRSYW5nZShudWxsKTtcblxuICAgICAgICBpZiggY2VsbHMubGVuZ3RoID09PSAxICYmIHRoaXMuI3NoZWV0LmN1cnNvci5maXJzdENlbGwgPT09IGNlbGxzWzBdIClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICB0aGlzLiNnZXRPdmVybGF5KGkpLnNldFJhbmdlKCB0aGlzLiNzaGVldC5nZXRSYW5nZSggY2VsbHNbaV0gKSApO1xuICAgIH1cblxuICAgICNpc0N0cmwgICAgICAgICE6IGJvb2xlYW47XG4gICAgI3NoZWV0ICAgICAgICAgIDogQ2FsY1NoZWV0O1xuICAgICNvcmlnX3RhcmdldCAgICE6IEhUTUxFbGVtZW50O1xuICAgICNvcmlnX3BvcyAgICAgICE6IFtudW1iZXIsIG51bWJlcl07XG4gICAgI2ZpbmFsX3BvcyAgICAgITogW251bWJlciwgbnVtYmVyXTtcbiAgICAjcHJldl9zZWxlY3Rpb24hOiBDZWxsW107XG5cbiAgICAjZXYycG9zKGV2OiBNb3VzZUV2ZW50KTogW251bWJlcixudW1iZXJdIHtcblxuICAgICAgICBjb25zdCBjb2xzID0gWy4uLnRoaXMuI3NoZWV0LnRib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuXTtcbiAgICAgICAgbGV0IGNvbF9pZDtcbiAgICAgICAgZm9yKGNvbF9pZCA9IGNvbHMubGVuZ3RoLTE7IGNvbF9pZCA+PSAwOyAtLWNvbF9pZCkge1xuICAgICAgICAgICAgaWYoIGV2LmNsaWVudFggPj0gY29sc1tjb2xfaWRdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnggKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCByb3dzID0gWy4uLnRoaXMuI3NoZWV0LnRib2R5LmNoaWxkcmVuXS5tYXAoIGUgPT4gZS5jaGlsZHJlblswXSApO1xuICAgICAgICBsZXQgcm93X2lkO1xuICAgICAgICBmb3Iocm93X2lkID0gcm93cy5sZW5ndGgtMTsgcm93X2lkID49IDA7IC0tcm93X2lkKSB7XG4gICAgICAgICAgICBpZiggZXYuY2xpZW50WSA+PSByb3dzW3Jvd19pZF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSApXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW3Jvd19pZCwgY29sX2lkXTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcblxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpITtcblxuICAgICAgICBjb25zdCBvbl9tb3VzZV9tb3ZlID0gKGV2OiBNb3VzZUV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuI2ZpbmFsX3BvcyA9IHRoaXMuI2V2MnBvcyhldik7XG5cbiAgICAgICAgICAgIHRoaXMuI3VwZGF0ZVNlbGVjdGlvbigpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHNoZWV0LmN1cnNvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24ucmVwbGFjZUFsbCggc2hlZXQuZ2V0VmlzaWJsZUNlbGwoc2hlZXQuY3Vyc29yKSApO1xuICAgICAgICB9KTtcblxuICAgICAgICBzaGVldC5zZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jdXBkYXRlU2VsZWN0aW9uSGlnaGxpZ2h0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgc2hlZXQuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldjpNb3VzZUV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIGlmKCBzaGVldC5zdGF0ZXMuY2VsbF9lZGl0LnN0YXRlID09PSB0YXJnZXQgKSAgLy8gYSBjZWxsIGJlaW5nIGVkaXRlZC5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiggISBbXCJUSFwiLCBcIlREXCJdLmluY2x1ZGVzKCB0YXJnZXQudGFnTmFtZSApICkvLyAuLi5cbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSA9PT0gXCJUSFwiICYmIHRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJcIiApIHsgLy8gbW91c2Vtb3ZlIGRvZXMgbm90aGluZy5cblxuICAgICAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5jbGVhcigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZiA9IGBBMToke3RoaXMuI3NoZWV0LnBvczJyZWYodGhpcy4jc2hlZXQubmJSb3dzLCB0aGlzLiNzaGVldC5uYkNvbHMpfWA7XG4gICAgICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmFkZCggLi4udGhpcy4jc2hlZXQuZ2V0Q2VsbHMocmVmKS5jZWxscyApO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiNpc0N0cmwgICAgICAgICA9IGV2LmN0cmxLZXk7XG4gICAgICAgICAgICB0aGlzLiNvcmlnX3RhcmdldCAgICA9IHRhcmdldDtcbiAgICAgICAgICAgIHRoaXMuI29yaWdfcG9zICAgICAgID0gdGhpcy4jZXYycG9zKGV2KTsgLy8gQ2FuIGJlIFRILi4uXG4gICAgICAgICAgICB0aGlzLiNmaW5hbF9wb3MgICAgICA9IHRoaXMuI29yaWdfcG9zO1xuICAgICAgICAgICAgdGhpcy4jcHJldl9zZWxlY3Rpb24gPSBzaGVldC5zZWxlY3Rpb24uY2VsbHMuc2xpY2UoKTtcblxuICAgICAgICAgICAgdGhpcy4jdXBkYXRlU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uX21vdXNlX21vdmUpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1haW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25fbW91c2VfbW92ZSk7XG4gICAgICAgICAgICB9LCB7b25jZTogdHJ1ZX0pO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCIvL1RPRE86IHdlYnBhY2sgY29uZmlnLi4uXG5pbXBvcnQgTElTUyBmcm9tIFwiLi4vLi4vLi4vbGlicy9MSVNTXCI7XG5cbi8vQHRzLWlnbm9yZVxuaW1wb3J0IGNzcyBmcm9tIFwiISFyYXctbG9hZGVyIS4vaW5kZXguY3NzXCI7XG5cbmV4cG9ydCB0eXBlIFZhbHVlVHlwZSA9IHN0cmluZ3xudW1iZXJ8RGF0ZXxib29sZWFuO1xuZXhwb3J0IHR5cGUgUmF3Q29udGVudFR5cGUgPSBWYWx1ZVR5cGV8Rm9ybXVsYTtcblxuZXhwb3J0IHR5cGUgQ2VsbCA9IEhUTUxUYWJsZUNlbGxFbGVtZW50ICYge1xuICAgIHJhd0NvbnRlbnQ6IFJhd0NvbnRlbnRUeXBlLFxuICAgIGZvcm1hdDogKHRoaXM6IENlbGwsIHY/OiBudW1iZXJ8c3RyaW5nfERhdGUpID0+IHN0cmluZyxcbiAgICBpc19ybzogYm9vbGVhbixcbiAgICBjZWxsID86IENlbGxcbn07XG5cbmZ1bmN0aW9uIGlzQWN0aXZlKHRhcmdldDogSFRNTEVsZW1lbnQpIHtcblxuICAgIHJldHVybiB0YXJnZXQubWF0Y2hlcygnOmZvY3VzJyk7XG4vKlxuICAgIGxldCBhY3RpdmUgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgd2hpbGUoIGFjdGl2ZT8uc2hhZG93Um9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgKVxuICAgICAgICBhY3RpdmUgPSBhY3RpdmUuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50O1xuXG4gICAgcmV0dXJuIGFjdGl2ZSA9PT0gdGFyZ2V0OyovXG59XG5cbmZ1bmN0aW9uIG9uSW5wdXQoZXY6IEV2ZW50KSB7XG5cbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMTIzNDc0MS9wbGFjZS1jYXJldC1iYWNrLXdoZXJlLWl0LXdhcy1hZnRlci1jaGFuZ2luZy1pbm5lcmh0bWwtb2YtYS1jb250ZW50ZWRpdGFibGUtZWxlbVxuXG4gICAgbGV0IHJyYW5nZSA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSEuZ2V0UmFuZ2VBdCgwKTtcbiAgICBsZXQgYyA9IHJyYW5nZS5zdGFydE9mZnNldDtcblxuICAgIC8vbGV0IHRleHQgPSBcIlwiO1xuICAgIGxldCBsZW5ndGggPSAwO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXJnZXQuY2hpbGROb2Rlcy5sZW5ndGg7ICsraSkge1xuXG4gICAgICAgIGxldCBjaGlsZCA9IHRhcmdldC5jaGlsZE5vZGVzW2ldO1xuICAgICAgICBpZiggY2hpbGQubm9kZVR5cGUgIT09IE5vZGUuVEVYVF9OT0RFKVxuICAgICAgICAgICAgY2hpbGQgPSBjaGlsZC5jaGlsZE5vZGVzWzBdO1xuXG4gICAgICAgIGlmKCBycmFuZ2Uuc3RhcnRDb250YWluZXIgPT09IGNoaWxkICkge1xuICAgICAgICAgICAgLy90ZXh0ICs9IHAuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudCEuc2xpY2UoMCwgYyk7XG4gICAgICAgICAgICBsZW5ndGggKz0gYztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vdGV4dCArPSBwLmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQ7XG4gICAgICAgIGxlbmd0aCArPSB0YXJnZXQuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudCEubGVuZ3RoO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBpbm5lckhUTUxcbiAgICB0YXJnZXQudGV4dENvbnRlbnQgPSB0YXJnZXQudGV4dENvbnRlbnQ7XG5cbiAgICBsZXQgY2hpbGQhOiBDaGlsZE5vZGU7XG4gICAgbGV0IGk7XG4gICAgZm9yKGkgPSAwOyBpIDwgdGFyZ2V0LmNoaWxkTm9kZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYoIGxlbmd0aCA8PSB0YXJnZXQuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudCEubGVuZ3RoICkge1xuICAgICAgICAgICAgY2hpbGQgPSB0YXJnZXQuY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGxlbmd0aCAtPSB0YXJnZXQuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudCEubGVuZ3RoO1xuICAgIH1cblxuICAgIGlmKCBjaGlsZC5ub2RlVHlwZSAhPT0gTm9kZS5URVhUX05PREUpXG4gICAgICAgIGNoaWxkID0gY2hpbGQuY2hpbGROb2Rlc1swXTtcblxuICAgIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgdmFyIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSE7XG5cbiAgICByYW5nZS5zZXRTdGFydChjaGlsZCwgbGVuZ3RoKTtcbiAgICByYW5nZS5jb2xsYXBzZSh0cnVlKTtcbiAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgc2VsLmFkZFJhbmdlKHJhbmdlKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VJbnB1dCggc3RyOiBzdHJpbmcgKTogUmF3Q29udGVudFR5cGUge1xuXG4gICAgaWYoc3RyID09PSAnVlJBSScpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIGlmKHN0ciA9PT0gJ0ZBVVgnKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBpZihzdHIudHJpbSgpID09PSAnJylcbiAgICAgICAgcmV0dXJuIHN0cjtcblxuICAgIGlmKHN0clswXSA9PT0gXCI9XCIpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlX2Zvcm11bGEoc3RyKTtcbiAgICB9XG5cbiAgICBsZXQgdGVzdF9udW1iZXIgPSBOdW1iZXIoIHN0ci5yZXBsYWNlKCcsJywgJy4nKSApO1xuICAgIGlmKCAhIE51bWJlci5pc05hTiggdGVzdF9udW1iZXIgKSApXG4gICAgICAgIHJldHVybiB0ZXN0X251bWJlcjtcbiAgICBpZiggc3RyW3N0ci5sZW5ndGgtMV0gPT09IFwiJVwiIHx8IHN0cltzdHIubGVuZ3RoLTFdID09PSBcIuKCrFwiICkge1xuICAgICAgICB0ZXN0X251bWJlciA9IE51bWJlciggc3RyLnNsaWNlKDAsLTEpLnJlcGxhY2UoJywnLCAnLicpICk7XG4gICAgICAgIGlmKCAhIE51bWJlci5pc05hTiggdGVzdF9udW1iZXIgKSApIHtcbiAgICAgICAgICAgIGlmKCBzdHJbc3RyLmxlbmd0aC0xXSA9PT0gXCLigqxcIiApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlc3RfbnVtYmVyO1xuICAgICAgICAgICAgcmV0dXJuICsodGVzdF9udW1iZXIgLyAxMDApLnRvUHJlY2lzaW9uKDcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFydHMgPSBzdHIuc3BsaXQoJy8nKTtcbiAgICBpZihwYXJ0cy5sZW5ndGggPD0gMykge1xuXG4gICAgICAgIGxldCB0ZXN0X2RhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgICtwYXJ0c1syXSA/PyBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICArcGFydHNbMV0tMSxcbiAgICAgICAgICAgICtwYXJ0c1swXVxuICAgICAgICApO1xuXG4gICAgICAgIGlmKCB0ZXN0X2RhdGUudG9TdHJpbmcoKSAhPT0gXCJJbnZhbGlkIERhdGVcIiApXG4gICAgICAgICAgICByZXR1cm4gdGVzdF9kYXRlO1xuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG59XG5cbmNsYXNzIFN0YXRlPFQ+IHtcblxuICAgICNzdGF0ZSA6IFR8bnVsbCA9IG51bGw7XG4gICAgI3RhcmdldDogRXZlbnRUYXJnZXQ7XG4gICAgI25hbWUgIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IodGFyZ2V0OiBFdmVudFRhcmdldCwgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuI3RhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy4jbmFtZSAgID0gbmFtZTtcbiAgICB9XG5cbiAgICBnZXQgc3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzdGF0ZTtcbiAgICB9XG5cbiAgICBzZXQgc3RhdGUoc3RhdGU6IFR8bnVsbCkge1xuXG4gICAgICAgIGlmKCB0aGlzLiNzdGF0ZSA9PT0gc3RhdGUpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgbGV0IHByZXZfc3RhdGUgPSB0aGlzLiNzdGF0ZTtcbiAgICAgICAgdGhpcy4jc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgXG5cbiAgICAgICAgaWYoIHByZXZfc3RhdGUgIT09IG51bGwpXG4gICAgICAgICAgICB0aGlzLiN0YXJnZXQuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KGAke3RoaXMuI25hbWV9X2VuZGAsIHtkZXRhaWw6IHByZXZfc3RhdGV9KSApOyAgICAgICAgICAgIFxuXG4gICAgICAgIGlmKCBzdGF0ZSAhPT0gbnVsbCApXG4gICAgICAgICAgICB0aGlzLiN0YXJnZXQuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KGAke3RoaXMuICNuYW1lfV9zdGFydGAsIHtkZXRhaWw6IHN0YXRlfSkgKTtcbiAgICB9XG59XG5cbmNvbnN0IFN0YXRlcyA9IHtcbiAgICBcImNlbGxfZWRpdFwiOiBTdGF0ZTxDZWxsPixcbiAgICBcInJlY29weVwiICAgOiBTdGF0ZTxDZWxsTGlzdD5cbiB9IGFzIGNvbnN0O1xuXG5leHBvcnQgY2xhc3MgQ2FsY1NoZWV0IGV4dGVuZHMgTElTUyh7XG4gICAgY3NzLFxuICAgIGF0dHJpYnV0ZXM6IFtcImNvbHNcIiwgXCJyb3dzXCIsIFwicm9cIl1cbn0pIHtcblxuICAgIHN0YXRlcyA9IE9iamVjdC5mcm9tRW50cmllcyggT2JqZWN0LmVudHJpZXMoU3RhdGVzKS5tYXAoIChbbixzXSkgPT4gW24sIG5ldyBzKHRoaXMuaG9zdCwgbildIGFzIGNvbnN0ICkpO1xuXG5cbiAgICAvL1RPRE86IFJPIHByb3AgP1xuICAgICNjdXJzb3IgICAgPSBuZXcgQ2VsbExpc3QodGhpcywgW10pO1xuICAgICNzZWxlY3Rpb246IENlbGxMaXN0ID0gbmV3IENlbGxMaXN0KHRoaXMsIFtdKTtcbiAgICAjcGxhZ2Vfc2VsZWN0b3IgPSBuZXcgUGxhZ2VTZWxlY3Rvcih0aGlzKTtcblxuICAgICNmb3JtYXRfbW5nciA9IG5ldyBGb3JtYXRNYW5hZ2VyKHRoaXMpO1xuXG4gICAgc3RhdGljIGdldFNoZWV0RnJvbUNlbGwoY2VsbDogQ2VsbCkge1xuICAgICAgICByZXR1cm4gTElTUy5nZXRMSVNTU3luYzxDYWxjU2hlZXQ+KCAoY2VsbC5nZXRSb290Tm9kZSgpIGFzIFNoYWRvd1Jvb3QpLmhvc3QgKTtcbiAgICB9XG5cbiAgICBnZXQgY3Vyc29yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY3Vyc29yO1xuICAgIH1cbiAgICBnZXQgc2VsZWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jc2VsZWN0aW9uO1xuICAgIH1cblxuICAgIG92ZXJyaWRlIGdldCBjb250ZW50KCkge1xuICAgICAgICByZXR1cm4gc3VwZXIuY29udGVudDtcbiAgICB9XG5cbiAgICBzZXRSZWN0KHRhcmdldDogSFRNTEVsZW1lbnQsIFt4LHksdyxoXTogcmVhZG9ubHkgW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0pIHtcblxuICAgICAgICBjb25zdCB0Ymxfb2Zmc2V0ID0gdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJykhLm9mZnNldFRvcDtcblxuICAgICAgICB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcgICAsIGAke3RibF9vZmZzZXQgKyB5fXB4YCk7XG4gICAgICAgIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eSgnaGVpZ2h0JywgYCR7aH1weGApO1xuXG4gICAgICAgIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eSgnbGVmdCcgICAsIGAke3h9cHhgKTtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KCd3aWR0aCcsIGAke3d9cHhgKTtcblxuICAgIH1cblxuICAgIGdldFJlY3QoY2VsbHM6IENlbGxMaXN0fENlbGxbXSkge1xuXG4gICAgICAgIGNlbGxzID0gXCJjZWxsc1wiIGluIGNlbGxzID8gY2VsbHMuY2VsbHMgOiBjZWxscztcblxuICAgICAgICBjb25zdCBzdGFydCA9IGNlbGxzWzBdO1xuICAgICAgICBjb25zdCBlbmQgICA9IGNlbGxzW2NlbGxzLmxlbmd0aC0xXTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBzdGFydC5vZmZzZXRMZWZ0LFxuICAgICAgICAgICAgc3RhcnQub2Zmc2V0VG9wLFxuICAgICAgICAgICAgZW5kLm9mZnNldExlZnQgKyBlbmQuY2xpZW50V2lkdGggLSBzdGFydC5vZmZzZXRMZWZ0ICsgMSxcbiAgICAgICAgICAgIGVuZC5vZmZzZXRUb3AgKyBlbmQuY2xpZW50SGVpZ2h0IC0gc3RhcnQub2Zmc2V0VG9wICsgMVxuICAgICAgICBdIGFzIGNvbnN0O1xuICAgIH1cblxuICAgIHJlbGF0aXZlVG8oY2VsbDogQ2VsbCwgcm93X2RpZmY6IG51bWJlciwgY29sX2RpZmY6IG51bWJlcikge1xuICAgICAgICBcbiAgICAgICAgbGV0IFtyb3csIGNvbF0gPSB0aGlzLmNlbGxQb3MoY2VsbCk7XG5cbiAgICAgICAgcm93ICs9IHJvd19kaWZmO1xuICAgICAgICBjb2wgKz0gY29sX2RpZmY7XG5cbiAgICAgICAgLy8gZm9yIG5vcm1hbCA6IGdldCBzdHVjayBpbnNpZGUgZ3JpZC5cbiAgICAgICAgaWYoIHJvdyA8IDEpXG4gICAgICAgICAgICByb3cgPSAxO1xuICAgICAgICBpZiggcm93ID49IHRoaXMuI3Rib2R5LmNoaWxkcmVuLmxlbmd0aCApXG4gICAgICAgICAgICByb3cgPSB0aGlzLiN0Ym9keS5jaGlsZHJlbi5sZW5ndGggLSAxO1xuXG4gICAgICAgIGlmKCBjb2wgPCAxKVxuICAgICAgICAgICAgY29sID0gMTtcbiAgICAgICAgaWYoIGNvbCA+PSB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuLmxlbmd0aCApXG4gICAgICAgICAgICBjb2wgPSB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW5bY29sXSBhcyBDZWxsO1xuICAgIH1cblxuICAgIC8vVE9ETzogMkQuLi5cbiAgICAjcGFzdGViaW46IENlbGxMaXN0IHwgbnVsbCA9IG51bGw7XG5cbiAgICAjZm9ybXVsYV9yZWZzID0gbmV3IEFycmF5PEZvcm11bGFSZWY+KCk7XG4gICAgI2dldEZvcm11bGFSZWYoaTogbnVtYmVyKSB7XG4gICAgICAgIHdoaWxlKCBpID49IHRoaXMuI2Zvcm11bGFfcmVmcy5sZW5ndGgpXG4gICAgICAgICAgICB0aGlzLiNmb3JtdWxhX3JlZnMucHVzaCggbmV3IEZvcm11bGFSZWYodGhpcykgKTtcblxuICAgICAgICByZXR1cm4gdGhpcy4jZm9ybXVsYV9yZWZzW2ldO1xuICAgIH1cbiAgICAjY2xlYXJGb3JtdWxhUmVmcygpIHtcbiAgICAgICAgZm9yKGxldCByZWYgb2YgdGhpcy4jZm9ybXVsYV9yZWZzKVxuICAgICAgICAgICAgcmVmLnNldFJhbmdlKG51bGwpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGNvbnN0IGN1cnNvciA9IG5ldyBSYW5nZU92ZXJsYXkodGhpcywgXCJjdXJzb3JcIik7XG4gICAgICAgIGNvbnN0IHJlY29weSA9IG5ldyBSZWNvcHlIYW5kbGUodGhpcyk7XG4gICAgICAgIGNvbnN0IGNvcHkgICA9IG5ldyBSYW5nZU92ZXJsYXkodGhpcywgXCJjb3B5X2hpZ2hsaWdodFwiKTtcblxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikhO1xuXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdjZWxsX2VkaXRfZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jY2xlYXJGb3JtdWxhUmVmcygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbGFzdF9yZWNvcHlfdGFyZ2V0OiBDZWxsfG51bGwgPSBudWxsO1xuICAgICAgICBsZXQgbGFzdF9yZWNvcHlfZGlyICAgOiBbbnVtYmVyLCBudW1iZXJdfG51bGwgPSBudWxsXG5cbiAgICAgICAgY29uc3Qgb25fcmVjb3B5X21vdmUgPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgbGV0IGNlbGxzID0gKHRoaXMuc3RhdGVzLnJlY29weS5zdGF0ZSBhcyBDZWxsTGlzdCkuY2VsbHM7XG4gICAgICAgICAgICBjb25zdCBzcmMgPSBjZWxsc1tjZWxscy5sZW5ndGgtMV07XG5cbiAgICAgICAgICAgIGxldCBwb3MgPSBzcmMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAgIGxldCBkX3B4ID0gZXYuY2xpZW50WCAtIChwb3MueCArIHBvcy53aWR0aCAvMik7XG4gICAgICAgICAgICBsZXQgZF9weSA9IGV2LmNsaWVudFkgLSAocG9zLnkgKyBwb3MuaGVpZ2h0LzIpO1xuXG4gICAgICAgICAgICBsZXQgZF94ID0gMDtcbiAgICAgICAgICAgIGxldCBkX3kgPSBNYXRoLnNpZ24oZF9weSk7XG5cbiAgICAgICAgICAgIGlmKCBNYXRoLmFicyhkX3B4KSA+IE1hdGguYWJzKGRfcHkpICkge1xuICAgICAgICAgICAgICAgIGRfeCA9IE1hdGguc2lnbihkX3B4KTtcbiAgICAgICAgICAgICAgICBkX3kgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcHJldiA9IHNyYztcbiAgICAgICAgICAgIGxldCBjdXIgID0gc3JjO1xuXG4gICAgICAgICAgICBsZXQgZGlmZl94LCBkaWZmX3k7XG5cbiAgICAgICAgICAgIGRvIHtcblxuICAgICAgICAgICAgICAgIHByZXY9IGN1cjtcbiAgICAgICAgICAgICAgICBjdXIgPSB0aGlzLnJlbGF0aXZlVG8ocHJldiwgZF95LCBkX3gpO1xuXG4gICAgICAgICAgICAgICAgaWYoIGN1ciA9PT0gcHJldilcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBsZXQgcG9zX2N1ciA9IGN1ci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICBkaWZmX3ggPSBldi5jbGllbnRYIC0gKHBvc19jdXIueCArIHBvc19jdXIud2lkdGggLzIpO1xuICAgICAgICAgICAgICAgIGRpZmZfeSA9IGV2LmNsaWVudFkgLSAocG9zX2N1ci55ICsgcG9zX2N1ci5oZWlnaHQvMik7XG5cbiAgICAgICAgICAgIH0gd2hpbGUoIGRpZmZfeCAqIGRfeCArIGRpZmZfeSAqIGRfeSA+IDAgKTtcblxuICAgICAgICAgICAgbGFzdF9yZWNvcHlfdGFyZ2V0ID0gcHJldjtcbiAgICAgICAgICAgIGxhc3RfcmVjb3B5X2RpciAgICA9IFtkX3gsZF95XTtcblxuICAgICAgICAgICAgbGV0IGJlZyA9IHNyYztcbiAgICAgICAgICAgIGxldCBlbmQgPSBwcmV2O1xuICAgICAgICAgICAgaWYoIHNyYy5vZmZzZXRMZWZ0ID4gcHJldi5vZmZzZXRMZWZ0IHx8IHNyYy5vZmZzZXRUb3AgPiBwcmV2Lm9mZnNldFRvcCApXG4gICAgICAgICAgICAgICAgW2JlZywgZW5kXSA9IFtlbmQsIGJlZ107XG5cbiAgICAgICAgICAgIC8vVE9ETzogaGlnaGxpZ2h0Li4uXG4gICAgICAgICAgICB0aGlzLiNjbGVhckZvcm11bGFSZWZzKCk7XG4gICAgICAgICAgICB0aGlzLiNnZXRGb3JtdWxhUmVmKDEpLnNldFJhbmdlKCB0aGlzLmdldFJhbmdlKGJlZywgZW5kKSApO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlY29weS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldikgPT4ge1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdGhpcy5zdGF0ZXMucmVjb3B5LnN0YXRlID0gdGhpcy4jc2VsZWN0aW9uO1xuXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25fcmVjb3B5X21vdmUpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IFtkX3gsIGRfeV0gPSAgbGFzdF9yZWNvcHlfZGlyITtcblxuICAgICAgICAgICAgICAgIGxldCBjZWxscyA9ICh0aGlzLnN0YXRlcy5yZWNvcHkuc3RhdGUgYXMgQ2VsbExpc3QpLmNlbGxzO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IGNlbGxzW2NlbGxzLmxlbmd0aC0xXTtcblxuICAgICAgICAgICAgICAgIGxldCBuYiA9IDA7XG5cbiAgICAgICAgICAgICAgICBpZiggbGFzdF9yZWNvcHlfdGFyZ2V0ICE9PSBzcmMpIHsgLy8gY29weS4uLlxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXIgPSBzcmM7XG4gICAgICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICsrbmI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ciA9IHRoaXMucmVsYXRpdmVUbyhjdXIsIGRfeSwgZF94KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQ6IFJhd0NvbnRlbnRUeXBlfENlbGwgPSBzcmM7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggdHlwZW9mIGNvbnRlbnQucmF3Q29udGVudCA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gKHNyYy5yYXdDb250ZW50IGFzIG51bWJlcikgKyBuYiooZF94ICsgZF95KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoIGNvbnRlbnQucmF3Q29udGVudCBpbnN0YW5jZW9mIERhdGUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IG5ldyBEYXRlKHNyYy5yYXdDb250ZW50IGFzIERhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuc2V0RGF0ZSggY29udGVudC5nZXREYXRlKCkgKyBuYiooZF94ICsgZF95KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDZWxsTGlzdCh0aGlzLCBbY3VyXSkuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXIuY2xhc3NOYW1lID0gc3JjLmNsYXNzTmFtZTsgLy9UT0RPOiBmb3JtYXQuLi5cblxuXG4gICAgICAgICAgICAgICAgICAgIH0gd2hpbGUoIGN1ciE9PSBsYXN0X3JlY29weV90YXJnZXQgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLiNjbGVhckZvcm11bGFSZWZzKCk7IC8vIHJlY29weVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVzLnJlY29weS5zdGF0ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGFzdF9yZWNvcHlfdGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBsYXN0X3JlY29weV9kaXIgICAgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIG1haW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbl9yZWNvcHlfbW92ZSk7XG5cbiAgICAgICAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdyZWNvcHlfc3RhcnQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgncmVjb3B5Jyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcigncmVjb3B5X2VuZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QucmVtb3ZlKCdyZWNvcHknKTtcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLiNjdXJzb3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGlmKCB0aGlzLiNjdXJzb3IubGVuZ3RoICE9PSAxIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1cnNvciBoYXMgaW52YWxpZCBudW1iZXIgb2YgY2VsbHMnKTtcblxuICAgICAgICAgICAgY3Vyc29yLnNldFJhbmdlKCBuZXcgQ2VsbExpc3QodGhpcywgW3RoaXMuZ2V0VmlzaWJsZUNlbGwodGhpcy4jY3Vyc29yKV0pICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI3NlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXYpID0+IHtcblxuICAgICAgICAgICAgZm9yKCBsZXQgY2VsbCBvZiB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZ2hsaWdodCcpIClcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpO1xuXG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IHRoaXMuI3NlbGVjdGlvbi5jZWxscztcblxuICAgICAgICAgICAgaWYoIGNlbGxzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGZvciggbGV0IGNlbGwgb2YgY2VsbHMgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggY2VsbHMubGVuZ3RoICE9PSAxKVxuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSB0aGlzLiNjZWxsUG9zKGNlbGwpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3Rib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuW2NvbF0uY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlY29weS5zZXRSYW5nZSh0aGlzLiNzZWxlY3Rpb24pO1xuXG4gICAgICAgICAgICAvLyBvbmx5IGlmIHNpbXBsZS4uLlxuICAgICAgICAgICAgLy8gY29uc3QgbGFzdCA9IGNlbGxzW2NlbGxzLmxlbmd0aC0xXTtcbiAgICAgICAgICAgIC8vIHBvaW50ZXIuLi5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9UT0RPOiBtb3ZlIG91dCA/XG4gICAgICAgIGNvbnN0IGZvcm11bGFfYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm11bGFfYmFyLmNsYXNzTGlzdC5hZGQoJ3Rvb2xiYXInKTtcblxuICAgICAgICAoIGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgcGxhZ2UgPSBhd2FpdCBMSVNTLmJ1aWxkKFwiY2FsYy1wbGFnZVwiKTtcbiAgICAgICAgICAgIHBsYWdlLnN5bmNUbyh0aGlzKTtcbiAgICAgICAgICAgIGZvcm11bGFfYmFyLmFwcGVuZCggcGxhZ2UuaG9zdCApO1xuXG4gICAgICAgICAgICBjb25zdCBmb3JtdWxhID0gYXdhaXQgTElTUy5idWlsZChcImNhbGMtZm9ybXVsYVwiKTtcbiAgICAgICAgICAgIGZvcm11bGEuc3luY1RvKHRoaXMpO1xuICAgICAgICAgICAgZm9ybXVsYV9iYXIuYXBwZW5kKCBmb3JtdWxhLmhvc3QgKTtcblxuICAgICAgICB9KSgpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKGZvcm11bGFfYmFyKTtcblxuICAgICAgICB0aGlzLiNpbml0R3JpZCgrKHRoaXMuYXR0cnMucm93cyA/PyAxKSwgKyh0aGlzLmF0dHJzLmNvbHMgPz8gMSkgKTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXYpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgICAgICAvLyB0aGUgY2VsbCBpcyBiZWluZyBlZGl0ZWQuLi5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQuaGFzQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKSApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgPT09IFwiVERcIiApXG4gICAgICAgICAgICAgICAgdGhpcy4jY3Vyc29yLnJlcGxhY2VBbGwoIHRhcmdldCBhcyBDZWxsICk7XG5cbiAgICAgICAgICAgIC8vVE9ETzogbm90IGNvcnJlY3QuLi5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSA9PT0gXCJUSFwiICYmIHRhcmdldC50ZXh0Q29udGVudCAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdldFJhbmdlKHRhcmdldC50ZXh0Q29udGVudCEpLmZpcnN0Q2VsbDtcblxuICAgICAgICAgICAgICAgIHRoaXMuI2N1cnNvci5yZXBsYWNlQWxsKGNlbGwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSAhPT0gXCJURFwiKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgaWYoIHRoaXMuYXR0cnMucm8gIT09IFwidHJ1ZVwiICYmICh0YXJnZXQgYXMgQ2VsbCkuaXNfcm8gIT09IHRydWUgKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnRvZ2dsZUF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldjogS2V5Ym9hcmRFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICBpZiggZXYuY29kZS5zdGFydHNXaXRoKCdBcnJvdycpICkge1xuXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGN1ciA9IHRoaXMuY3Vyc29yLmNlbGxzO1xuICAgICAgICAgICAgICAgIGlmKCBjdXIubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBsZXQgZF9yb3cgPSAwO1xuICAgICAgICAgICAgICAgIGxldCBkX2NvbCA9IDA7XG5cbiAgICAgICAgICAgICAgICBpZiggZXYuY29kZSA9PT0gJ0Fycm93TGVmdCcpXG4gICAgICAgICAgICAgICAgICAgIC0tZF9jb2w7XG4gICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09ICdBcnJvd1JpZ2h0JylcbiAgICAgICAgICAgICAgICAgICAgKytkX2NvbDtcbiAgICAgICAgICAgICAgICBpZiggZXYuY29kZSA9PT0gJ0Fycm93VXAnKVxuICAgICAgICAgICAgICAgICAgICAtLWRfcm93O1xuICAgICAgICAgICAgICAgIGlmKCBldi5jb2RlID09PSAnQXJyb3dEb3duJylcbiAgICAgICAgICAgICAgICAgICAgKytkX3JvdztcblxuICAgICAgICAgICAgICAgIGxldCBuZXh0OiBDZWxsO1xuICAgICAgICAgICAgICAgIGlmKCBldi5jdHJsS2V5ICkge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmV2ICAgPSBjdXJbMF07XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJzb3IgPSB0aGlzLnJlbGF0aXZlVG8ocHJldiwgZF9yb3csIGRfY29sKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiggcHJldi5yYXdDb250ZW50ICE9PSB1bmRlZmluZWQgJiYgY3Vyc29yLnJhd0NvbnRlbnQgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSggcHJldiAhPT0gY3Vyc29yICYmIGN1cnNvci5yYXdDb250ZW50ICE9PSB1bmRlZmluZWQpIHsgLy8gd2UgcmVhY2hlZCB0aGUgZW5kLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXYgICA9IGN1cnNvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSB0aGlzLnJlbGF0aXZlVG8ocHJldiwgZF9yb3csIGRfY29sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvciA9IHByZXY7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSggcHJldiAhPT0gY3Vyc29yICYmIGN1cnNvci5yYXdDb250ZW50ID09PSB1bmRlZmluZWQpIHsgLy8gd2UgcmVhY2hlZCB0aGUgZW5kLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXYgICA9IGN1cnNvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSB0aGlzLnJlbGF0aXZlVG8ocHJldiwgZF9yb3csIGRfY29sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG5leHQgPSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICAgIG5leHQgPSB0aGlzLnJlbGF0aXZlVG8oIGN1clswXSwgZF9yb3csIGRfY29sKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLiN0Ym9keS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3Vyc29yLnJlcGxhY2VBbGwobmV4dCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG5vIGVkaXRpb24gYWxsb3dlZC4uLlxuICAgICAgICAgICAgaWYoIHRoaXMuYXR0cnMucm8gPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiggdGFyZ2V0ID09PSB0aGlzLiN0Ym9keSApIHtcbiAgICAgICAgICAgICAgICBpZiggZXYuY29kZSA9PT0gXCJLZXlWXCIgJiYgZXYuY3RybEtleSAmJiB0aGlzLiNwYXN0ZWJpbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy4jcGFzdGViaW4uY2VsbHM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3NlbGVjdGlvbi5jb250ZW50ID0gZGF0YTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjb3B5IGZvcm1hdC4uLiBUT0RPIHV0aWxpdHkgdGhpbmd5Li4uXG4gICAgICAgICAgICAgICAgICAgIGlmKCAhIGV2LnNoaWZ0S2V5IHx8ICEgZXYuYWx0S2V5ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3JjID0gdGhpcy4jcGFzdGViaW4uY2VsbHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkc3QgPSB0aGlzLiNzZWxlY3Rpb24uY2VsbHM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyArK2kgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHN0W2ldLmNsYXNzTmFtZSA9IHNyY1tpXS5jbGFzc05hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiBhZGQgZm9ybWF0Li4uXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoICggZXYua2V5ID09PSBcImNcIiB8fCBldi5rZXkgPT09IFwieFwiKSAmJiBldi5jdHJsS2V5ICkge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvcHkuc2V0UmFuZ2UodGhpcy4jc2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gV0hZID8/P1xuICAgICAgICAgICAgICAgICAgICAvL2guc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcgICAsIGAke3NlbGVjdGlvblswXS5vZmZzZXRUb3B9cHhgKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNwYXN0ZWJpbiA9IHRoaXMuI3NlbGVjdGlvbi5kZWVwQ2xvbmUoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiggZXYua2V5ID09PSBcInhcIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuI3NlbGVjdGlvbi5kZWxldGVGb3JtYXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuI3NlbGVjdGlvbi5kZWxldGVDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gXCJDb250cm9sXCIgfHwgZXYua2V5ID09PSBcIlNoaWZ0XCIgfHwgZXYua2V5ID09PSBcIkFsdFwiICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIGlnbm9yZVxuICAgICAgICAgICAgICAgIH0gaWYoIGV2LmNvZGUgPT09IFwiRGVsZXRlXCIgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uZGVsZXRlQ29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBpZiggZXYuY29kZSA9PT0gXCJFbnRlclwiICkge1xuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGVkIGVsc2V3aGVyZVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihldi5jdHJsS2V5KSB7IC8vIGlnbm9yZSBjdHJsXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7IC8vIHdlIHN0YXJ0IGVkaXRpbmcuLi5cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXIgPSB0aGlzLmN1cnNvci5jZWxscztcblxuICAgICAgICAgICAgICAgICAgICBpZiggY3VyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1clswXS5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJkYmxjbGlja1wiLCB7YnViYmxlczogdHJ1ZX0pICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJbMF0udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIHRhcmdldCAhPT0gdGhpcy4jdGJvZHkgJiYgZXYuY29kZSA9PT0gJ0VudGVyJyAmJiBldi5zaGlmdEtleSApXG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3IuXG5cbiAgICAgICAgICAgIGlmKGV2LmNvZGUgPT09IFwiRW50ZXJcIikgeyAvL1RPRE86IEVudGVyIGlzIGZvciBjdXJyZW50IHBsYWdlLi4uXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGN1ciA9IHRoaXMuY3Vyc29yLmNlbGxzO1xuICAgICAgICAgICAgICAgIGlmKCBjdXIubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBsZXQgW3Jvdyxjb2xdID0gdGhpcy5jZWxsUG9zKCBjdXJbMF0gKTtcblxuICAgICAgICAgICAgICAgICsrcm93O1xuICAgICAgICAgICAgICAgIGlmKCByb3cgPj0gdGhpcy4jdGJvZHkuY2hpbGRyZW4ubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICByb3cgPSAxO1xuICAgICAgICAgICAgICAgICAgICArK2NvbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoIGNvbCA+PSB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICAgICAgY29sID0gMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgbmV4dCA9IHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW5bY29sXSBhcyBDZWxsO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jdGJvZHkuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnNvci5yZXBsYWNlQWxsKG5leHQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgb25JbnB1dDIgPSAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNjbGVhckZvcm11bGFSZWZzKCk7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBpZihldi5kZXRhaWwgIT09IHRydWUpXG4gICAgICAgICAgICAgICAgb25JbnB1dChldik7XG4gICAgICAgIH1cblxuICAgICAgICAvL1RPRE86IGhlcmUuLi5cbiAgICAgICAgdGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCAoZXYpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgICAgICBjb3B5LnNldFJhbmdlKG51bGwpO1xuXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgIT09IFwiVERcIilcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGVzLmNlbGxfZWRpdC5zdGF0ZSA9IHRhcmdldCBhcyBDZWxsO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoXCJjZWxsX2VkaXRfc3RhcnRcIiwgKGV2OiBDdXN0b21FdmVudDxDZWxsPikgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LnRvZ2dsZShcImNlbGxfZWRpdFwiLCB0cnVlKTtcblxuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGV2LmRldGFpbDtcblxuICAgICAgICAgICAgaWYoY2VsbC5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSkge1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyID0gY2VsbC5yYXdDb250ZW50LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZ2VzID0gY2VsbC5yYXdDb250ZW50LnJhbmdlc1Rva2VuO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuOiAoc3RyaW5nfEhUTUxFbGVtZW50KVtdID0gW3N0cl07XG5cbiAgICAgICAgICAgICAgICBsZXQgcmFuZ2VzX2NvbG9yczogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHt9O1xuICAgICAgICAgICAgICAgIGxldCBjdXJfb2Zmc2V0ID0gMDtcblxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByYW5nZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0ciA9IGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aC0xXSBhcyBzdHJpbmc7XG5cbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoLTFdID0gc3RyLnNsaWNlKDAsIHJhbmdlc1tpXS5iZWcgLSBjdXJfb2Zmc2V0KTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5nZV9uYW1lID0gcmFuZ2VzW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiggISAocmFuZ2VfbmFtZSBpbiByYW5nZXNfY29sb3JzKSApXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZXNfY29sb3JzW3JhbmdlX25hbWVdID0gaSU4O1xuXG4gICAgICAgICAgICAgICAgICAgIHMuY2xhc3NMaXN0LmFkZCgnZm9ybXVsYV9oaWdobGlnaHQnLCBgaGlnaGxpZ2h0XyR7cmFuZ2VzX2NvbG9yc1tyYW5nZV9uYW1lXX1gKTsgLy9UT0RPLi4uXG4gICAgICAgICAgICAgICAgICAgIHMudGV4dENvbnRlbnQgPSByYW5nZXNbaV0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goIHMgKTsgLy8gcmFuZ2UuLi5cblxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKCBzdHIuc2xpY2UocmFuZ2VzW2ldLmVuZCAtIGN1cl9vZmZzZXQpICk7XG4gICAgICAgICAgICAgICAgICAgIGN1cl9vZmZzZXQgPSByYW5nZXNbaV0uZW5kO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNlbGwucmVwbGFjZUNoaWxkcmVuKCAuLi5jaGlsZHJlbiApO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZ2VzX25hbWVzID0gT2JqZWN0LmtleXMocmFuZ2VzX2NvbG9ycyk7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHJhbmdlc19uYW1lcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5nZSA9IHJhbmdlc19uYW1lc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVmID0gdGhpcy4jZ2V0Rm9ybXVsYVJlZihpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVmLnNldENvbG9yKCByYW5nZXNfY29sb3JzW3JhbmdlXSApO1xuICAgICAgICAgICAgICAgICAgICByZWYuc2V0UmFuZ2UoIHRoaXMuZ2V0UmFuZ2UocmFuZ2UpICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBvbklucHV0MiApOyAvLyByZW1vdmUgY29sb3JzLi4uXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBGb3JtYXRzLmRlZmF1bHQuY2FsbChjZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoXCJjZWxsX2VkaXRfZW5kXCIsIChldjogQ3VzdG9tRXZlbnQ8Q2VsbD4pID0+IHtcblxuICAgICAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC50b2dnbGUoXCJjZWxsX2VkaXRcIiwgZmFsc2UpO1xuXG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZXYuZGV0YWlsO1xuXG4gICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBvbklucHV0Mik7IC8vIHRvIGJlIHNhZmVcbiAgICAgICAgICAgIGNlbGwudG9nZ2xlQXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIGZhbHNlKTtcblxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwibGVhdmUgZWRpdFwiLCBjZWxsLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIG5ldyBDZWxsTGlzdCh0aGlzLCBbY2VsbF0pLmNvbnRlbnQgPSBjZWxsLnRleHRDb250ZW50ITtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICAgICAgICAgIC8vIGxlYXZlXG4gICAgICAgICAgICB0aGlzLiNzZWxlY3Rpb24uY2xlYXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBldiA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lICE9PSBcIlREXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPSBudWxsO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiggdGhpcy5uYlJvd3MgPj0gMSAmJiB0aGlzLm5iQ29scyA+PSAxKVxuICAgICAgICAgICAgdGhpcy5jdXJzb3IucmVwbGFjZUFsbCggdGhpcy5nZXRSYW5nZShcIkExXCIpICk7XG4gICAgfVxuXG4gICAgZ2V0VmlzaWJsZUNlbGwoYzogQ2VsbHxDZWxsTGlzdCk6IENlbGwge1xuICAgICAgICBpZihjIGluc3RhbmNlb2YgQ2VsbExpc3QpXG4gICAgICAgICAgICBjID0gYy5maXJzdENlbGw7XG5cbiAgICAgICAgcmV0dXJuIGMuY2VsbCA/PyBjO1xuICAgIH1cblxuICAgIGNlbGxQb3MoY2VsbDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NlbGxQb3MoY2VsbCk7XG4gICAgfVxuXG4gICAgI2NlbGxQb3MoY2VsbDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQpIHtcblxuICAgICAgICBpZiggXCJwb3NcIiBpbiBjZWxsKVxuICAgICAgICAgICAgcmV0dXJuIGNlbGwucG9zIGFzIFtudW1iZXIsIG51bWJlcl07XG5cbiAgICAgICAgY29uc3QgY29sID0gWy4uLmNlbGwucGFyZW50RWxlbWVudCEuY2hpbGRyZW5dLmZpbmRJbmRleCggYyA9PiBjID09PSBjZWxsKTtcbiAgICAgICAgY29uc3Qgcm93ID0gWy4uLmNlbGwucGFyZW50RWxlbWVudCEucGFyZW50RWxlbWVudCEuY2hpbGRyZW5dLmZpbmRJbmRleCggciA9PiByID09PSBjZWxsLnBhcmVudEVsZW1lbnQhKTtcblxuICAgICAgICByZXR1cm4gW3JvdywgY29sXSBhcyBjb25zdDtcbiAgICB9XG5cbiAgICAjdGJvZHkhOiBIVE1MVGFibGVTZWN0aW9uRWxlbWVudDtcbiAgICBnZXQgdGJvZHkoKSB7IHJldHVybiB0aGlzLiN0Ym9keTsgfVxuXG4gICAgcmVzaXplKG5icm93czogbnVtYmVyLCBuYmNvbHM6IG51bWJlcikge1xuXG4gICAgICAgIGNvbnN0IGNvbF9odG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgY29sX2h0bWwuYXBwZW5kKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpICk7XG5cbiAgICAgICAgY29uc3QgdGJvZHkgPSB0aGlzLiN0Ym9keTtcbiAgICAgICAgdGJvZHkucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICAgICAgZm9yKGxldCBjb2wgPSAwOyBjb2wgPCAgbmJjb2xzIDsgKytjb2wpIHtcbiAgICAgICAgICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICAgICAgICAgIHRoLnRleHRDb250ZW50ID0gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGNvbCk7XG4gICAgICAgICAgICBjb2xfaHRtbC5hcHBlbmQodGgpO1xuICAgICAgICB9XG4gICAgICAgIHRib2R5LmFwcGVuZChjb2xfaHRtbCk7XG5cbiAgICAgICAgZm9yKGxldCByb3cgPSAwOyByb3cgPCBuYnJvd3M7ICsrcm93KSB7XG4gICAgICAgICAgICBjb25zdCByb3dfaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgICAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICB0aC50ZXh0Q29udGVudCA9IGAke3JvdysxfWA7XG4gICAgICAgICAgICByb3dfaHRtbC5hcHBlbmQodGgpO1xuXG4gICAgICAgICAgICBmb3IobGV0IGNvbCA9IDA7IGNvbCA8ICBuYmNvbHMgOyArK2NvbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpIGFzIENlbGw7XG4gICAgICAgICAgICAgICAgLy9jZWxsLnRvZ2dsZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJyk7XG4gICAgICAgICAgICAgICAgY2VsbC5mb3JtYXQgPSBGb3JtYXRzLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgcm93X2h0bWwuYXBwZW5kKCBjZWxsICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ym9keS5hcHBlbmQocm93X2h0bWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2luaXRHcmlkKG5icm93czogbnVtYmVyLCBuYmNvbHM6IG51bWJlcikge1xuXG4gICAgICAgIGNvbnN0IGlzX3JvID0gdGhpcy5hdHRycy5ybyA9PT0gXCJ0cnVlXCI7XG5cbiAgICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgICAgICBjb25zdCB0Ym9keSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xuICAgICAgICB0aGlzLiN0Ym9keSA9IHRib2R5O1xuXG4gICAgICAgIGNvbnN0IHJlc2l6ZU9icyA9IG5ldyBSZXNpemVPYnNlcnZlciggKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ob3N0LmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudCgncmVzaXplJykgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc2l6ZU9icy5vYnNlcnZlKCB0aGlzLmhvc3QgKTtcblxuICAgICAgICB0aGlzLiN0Ym9keS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcblxuICAgICAgICB0aGlzLnJlc2l6ZShuYnJvd3MsIG5iY29scyk7XG5cbiAgICAgICAgdGFibGUuYXBwZW5kKHRib2R5KTtcbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCh0YWJsZSk7XG4gICAgfVxuXG4gICAgZ2V0UmFuZ2UoZnJvbTogQ2VsbHxzdHJpbmd8cmVhZG9ubHlbbnVtYmVyLG51bWJlcl0sIHRvOiBDZWxsfHN0cmluZ3xyZWFkb25seVtudW1iZXIsbnVtYmVyXSA9IGZyb20pOiBDZWxsTGlzdCB7XG5cbiAgICAgICAgLy8gcHJvY2VzcyByZWZzLi4uXG4gICAgICAgIGlmKCBmcm9tIGluc3RhbmNlb2YgSFRNTFRhYmxlQ2VsbEVsZW1lbnQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSYW5nZSggdGhpcy5jZWxsUG9zKGZyb20pLCB0byApO1xuICAgICAgICBpZiggdG8gaW5zdGFuY2VvZiBIVE1MVGFibGVDZWxsRWxlbWVudClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJhbmdlKCBmcm9tLCB0aGlzLmNlbGxQb3ModG8pICk7XG5cbiAgICAgICAgaWYoIHR5cGVvZiBmcm9tID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBpZiggZnJvbS5pbmNsdWRlcyhcIjpcIikgKVxuICAgICAgICAgICAgICAgIFtmcm9tLCB0b10gPSBmcm9tLnNwbGl0KCc6Jyk7XG5cbiAgICAgICAgICAgIGZyb20gPSB0aGlzLnJlZjJwb3MoZnJvbSwgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZ2UoIGZyb20sIHRvICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJhbmdlKCBmcm9tLCB0aGlzLnJlZjJwb3ModG8sIHRydWUpICk7XG5cbiAgICAgICAgLy8gZ2V0IHJhbmdlXG5cbiAgICAgICAgbGV0IGJlZ19yb3cgPSBmcm9tWzBdIHx8IDE7XG4gICAgICAgIGxldCBiZWdfY29sID0gZnJvbVsxXSB8fCAxO1xuXG4gICAgICAgIGxldCBlbmRfcm93ID0gZnJvbVswXSA9PT0gMCA/IHRoaXMubmJSb3dzIDogdG9bMF07XG4gICAgICAgIGxldCBlbmRfY29sID0gZnJvbVsxXSA9PT0gMCA/IHRoaXMubmJDb2xzIDogdG9bMV07XG5cbiAgICAgICAgaWYoIGVuZF9yb3cgPCBiZWdfcm93IClcbiAgICAgICAgICAgIFtiZWdfcm93LCBlbmRfcm93XSA9IFtlbmRfcm93LCBiZWdfcm93XTtcbiAgICAgICAgaWYoIGVuZF9jb2wgPCBiZWdfY29sIClcbiAgICAgICAgICAgIFtiZWdfY29sLCBlbmRfY29sXSA9IFtlbmRfY29sLCBiZWdfY29sXTtcblxuICAgICAgICBjb25zdCBjZWxscyA9IG5ldyBBcnJheTxDZWxsPiggKGVuZF9yb3cgLSBiZWdfcm93ICsgMSkgKiAoZW5kX2NvbCAtIGJlZ19jb2wgKyAxKSApO1xuXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBmb3IobGV0IGkgPSBiZWdfcm93OyBpIDw9IGVuZF9yb3c7ICsraSApXG4gICAgICAgICAgICBmb3IobGV0IGogPSBiZWdfY29sOyBqIDw9IGVuZF9jb2w7ICsraiApXG4gICAgICAgICAgICAgICAgY2VsbHNbb2Zmc2V0KytdID0gdGhpcy50Ym9keS5jaGlsZHJlbltpXS5jaGlsZHJlbltqXSBhcyBDZWxsO1xuXG4gICAgICAgIHJldHVybiBuZXcgQ2VsbExpc3QodGhpcywgY2VsbHMpO1xuICAgIH1cblxuICAgIHJlZjJwb3MocmVmOiBzdHJpbmcsIGVuZF9saW5lX2NvbCA9IHRydWUpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgICAgICAgXG4gICAgICAgIHJlZiA9IHJlZi5yZXBsYWNlQWxsKCckJywgJycpO1xuXG4gICAgICAgIGxldCBzZXAgPSByZWYuc2VhcmNoKC9bMC05XS8pO1xuXG4gICAgICAgIGlmKCBzZXAgPT09IDApICAvLyB0aGlzIGlzIGEgbGluZS4uLlxuICAgICAgICAgICAgcmV0dXJuIGVuZF9saW5lX2NvbCA/IHRoaXMucmVmMnBvcyhgQSR7cmVmfWApIDogW3RoaXMubmJDb2xzLCArcmVmXTtcbiAgICAgICAgaWYoIHNlcCA9PT0gLTEpIC8vIHRoaXMgaXMgYSBjb2wuLi5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZjJwb3MoYCR7cmVmfSR7ZW5kX2xpbmVfY29sID8gdGhpcy5uYlJvd3MgOiAxfWApO1xuXG4gICAgICAgIGNvbnN0IHJvdyA9ICtyZWYuc2xpY2Uoc2VwKTtcblxuICAgICAgICBsZXQgY29sID0gMDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNlcDsgKytpKSB7XG4gICAgICAgICAgICBjb2wgKj0gMjY7XG4gICAgICAgICAgICBjb2wgKz0gcmVmLmNoYXJDb2RlQXQoaSkgLSA2NTtcbiAgICAgICAgfVxuICAgICAgICArK2NvbDtcblxuICAgICAgICByZXR1cm4gW3JvdywgY29sXTtcbiAgICB9XG4gICAgcG9zMnJlZihyb3c6IG51bWJlciwgY29sOiBudW1iZXIpIHtcblxuICAgICAgICBsZXQgY29sX3N0ciA9IFwiXCI7XG4gICAgICAgIGRvIHtcblxuICAgICAgICAgICAgbGV0IGlkID0gKGNvbC0xKSAlIDI2O1xuXG4gICAgICAgICAgICBjb2xfc3RyID0gU3RyaW5nLmZyb21DaGFyQ29kZSg2NStpZCkgKyBjb2xfc3RyO1xuXG4gICAgICAgICAgICBjb2wgLT0gaWQgKyAxO1xuICAgICAgICAgICAgY29sIC89IDI2OyAvLyBzaG91bGQgYmUgaW50ZWdlciwgc28gb2suXG5cbiAgICAgICAgfSB3aGlsZSggY29sID4gMCApO1xuXG4gICAgICAgIHJldHVybiBgJHtjb2xfc3RyfSR7cm93fWA7XG4gICAgfVxuICAgIGdldCBuYlJvd3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0Ym9keS5jaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgIH1cbiAgICBnZXQgbmJDb2xzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jdGJvZHkuZmlyc3RFbGVtZW50Q2hpbGQhLmNoaWxkcmVuLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgI2lzVXBkYXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmKCB0aGlzLiNpc1VwZGF0aW5nID09PSB0cnVlIClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy4jaXNVcGRhdGluZyA9IHRydWU7XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IFsuLi50aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbDxDZWxsPigndGQnKV0uZmlsdGVyKCBlID0+IGUucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IobGV0IGNlbGwgb2YgY2VsbHMgKVxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBjZWxsLnJhd0NvbnRlbnQucmVzZXRDYWNoZSgpO1xuXG4gICAgICAgICAgICBmb3IobGV0IGNlbGwgb2YgY2VsbHMpIHtcblxuICAgICAgICAgICAgICAgIGlmKCBjZWxsLnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBGb3JtdWxhICkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBjZWxsLnJhd0NvbnRlbnQuZXhlYyh0aGlzKTsgLy9UT0RPLi4uXG5cbiAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiBmYWN0b3JpemUuLi5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGU6IHN0cmluZyA9IHR5cGVvZiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSApXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiO1xuXG4gICAgICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSAoY2VsbCBhcyBhbnkpLmZvcm1hdCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCB0eXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaG9zdC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoJ3VwZGF0ZScpICk7XG4gICAgICAgICAgICB0aGlzLiNpc1VwZGF0aW5nID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0IGlzUk8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJzLnJvID09PSBcInRydWVcIjtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDZWxsTGlzdCBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcblxuICAgICNzaGVldDogQ2FsY1NoZWV0O1xuICAgICNjZWxsczogQ2VsbFtdO1xuICAgIGNvbnN0cnVjdG9yKHNoZWV0OiBDYWxjU2hlZXQsIGNlbGxzOiBDZWxsW10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy4jY2VsbHMgPSBjZWxscztcbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcbiAgICB9XG5cbiAgICBnZXQgcGxhZ2VfbmFtZSgpIHtcblxuICAgICAgICBpZiggdGhpcy4jY2VsbHMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGlmKCB0aGlzLiNjZWxscy5sZW5ndGggPT09IDEgKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuI3NoZWV0LnBvczJyZWYoIC4uLnRoaXMuI3NoZWV0LmNlbGxQb3ModGhpcy4jY2VsbHNbMF0pICk7XG5cbiAgICAgICAgbGV0IGNlbGxzID0gdGhpcy4jY2VsbHMubWFwKCBjID0+IHRoaXMuI3NoZWV0LmNlbGxQb3MoYykgKS5zb3J0KCAoYSxiKSA9PiB7XG4gICAgICAgICAgICBpZiggYVswXSAhPT0gYlswXSApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFbMF0gLSBiWzBdO1xuICAgICAgICAgICAgcmV0dXJuIGFbMV0gLSBiWzFdO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbWluID0gY2VsbHNbMF07XG4gICAgICAgIGxldCBtYXggPSBjZWxsc1tjZWxscy5sZW5ndGggLSAxXTtcblxuICAgICAgICBsZXQgbmJfY29scyA9IG1heFsxXSAtIG1pblsxXSArIDE7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgaWYoIGNlbGxzW2ldWzBdICE9PSBNYXRoLmZsb29yKGkvbmJfY29scykrbWluWzBdICYmIGNlbGxzW2ldWzFdICE9PSAoaSVuYl9jb2xzKSsgbWluWzFdIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgcmV0dXJuIGAke3RoaXMuI3NoZWV0LnBvczJyZWYoLi4ubWluKX06JHt0aGlzLiNzaGVldC5wb3MycmVmKC4uLm1heCl9YDtcbiAgICB9XG5cbiAgICBnZXQgY2VsbHMoKTogQ2VsbFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NlbGxzO1xuICAgIH1cbiAgICBnZXQgc2hlZXQoKTogQ2FsY1NoZWV0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3NoZWV0O1xuICAgIH1cblxuICAgIHRvZ2dsZUZvcm1hdChuYW1lOiBzdHJpbmd8KCh2OiBhbnksIHByZWM6IG51bWJlcnxudWxsKSA9PiBzdHJpbmcpICkge1xuICAgICAgICBsZXQgZiA9IEZvcm1hdC5leHRyYWN0Rm9ybWF0KHRoaXMpO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgbmFtZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cbiAgICAgICAgICAgIGxldCBpc0Zvcm1hdCA9IGYuZ2V0UHJvcGVydHkoXCJmb3JtYXRcIikgPT09IG5hbWU7XG5cbiAgICAgICAgICAgIHRoaXMuZm9ybWF0KHtmb3JtYXQ6IGlzRm9ybWF0ID8gbnVsbCA6IG5hbWUgfSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZm9ybWF0KHtbbmFtZV06IGYuZ2V0UHJvcGVydHkobmFtZSkgIT09IHRydWV9KTtcbiAgICB9XG5cbiAgICBmb3JtYXQoLi4uZjogKCggKHY6IGFueSwgcHJlYzogbnVtYmVyfG51bGwpID0+IHN0cmluZyApfHN0cmluZ3xGb3JtYXR8UmVjb3JkPHN0cmluZywgYW55PilbXSkge1xuXG4gICAgICAgIGlmKCBmLmxlbmd0aCA+IDEgKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vVE9ETy4uLi5cbiAgICAgICAgICAgIGYgPSBPYmplY3QuZnJvbUVudHJpZXMoIGYubWFwKCBlID0+IFtlLCB0cnVlXSApICk7XG5cbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBmID0gZlswXTtcblxuICAgICAgICBpZiggdHlwZW9mIGYgPT09IFwiZnVuY3Rpb25cIiApXG4gICAgICAgICAgICBmID0ge1wiZm9ybWF0XCI6IGZ9O1xuXG4gICAgICAgIGlmKHR5cGVvZiBmID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIGYgPSB7W2ZdOiB0cnVlfTtcblxuICAgICAgICBpZiggISAoZiBpbnN0YW5jZW9mIEZvcm1hdCkgKVxuICAgICAgICAgICAgZiA9IG5ldyBGb3JtYXQoZik7XG5cbiAgICAgICAgZi5hcHBseVRvKHRoaXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldCBjb250ZW50KCk6IChSYXdDb250ZW50VHlwZSlbXSB7XG4gICAgICAgIGxldCBjb250ZW50ID0gbmV3IEFycmF5KHRoaXMuI2NlbGxzLmxlbmd0aCk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLiNjZWxscy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgIGNvbnRlbnRbaV0gPSB0aGlzLiNjZWxsc1tpXS5yYXdDb250ZW50ITtcblxuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICB9XG5cbiAgICBkZWxldGVGb3JtYXQoKSB7XG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiB0aGlzLiNjZWxscykgLy9UT0RPIGFkZCBob2MgZm9ybWF0Li4uXG4gICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9ICcnO1xuICAgIH1cblxuICAgIGRlbGV0ZUNvbnRlbnQoKSB7XG5cbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIHRoaXMuI2NlbGxzKSB7XG4gICAgICAgICAgICBjZWxsLnJhd0NvbnRlbnQgPSB1bmRlZmluZWQgYXMgYW55O1xuICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10eXBlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzaGVldC51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBzZXQgY29udGVudChjb250ZW50OiBDZWxsfFJhd0NvbnRlbnRUeXBlfChSYXdDb250ZW50VHlwZXxDZWxsKVtdKSB7XG5cbiAgICAgICAgaWYoIEFycmF5LmlzQXJyYXkoY29udGVudCkgKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICBuZXcgQ2VsbExpc3QodGhpcy4jc2hlZXQsIFt0aGlzLiNjZWxsc1tpXV0gKS5jb250ZW50ID0gY29udGVudFtpXTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuXG4gICAgICAgICAgICBsZXQgcmF3ID0gY29udGVudDtcbiAgICAgICAgICAgIGNvbnRlbnQgPSBwYXJzZUlucHV0KGNvbnRlbnQpO1xuICAgICAgICAgICAgaWYoIHR5cGVvZiBjb250ZW50ID09PSBcIm51bWJlclwiICYmIHJhd1tyYXcubGVuZ3RoLTFdID09PSBcIiVcIikge1xuICAgICAgICAgICAgICAgIGxldCBmID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYoICEgZi5oYXNQcm9wZXJ0eShcImZvcm1hdFwiKSB8fCBmLmdldFByb3BlcnR5KFwiZm9ybWF0XCIpID09PSBGb3JtYXRzLmRlZmF1bHQgKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1hdChGb3JtYXRzLnBvdXJjZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCB0eXBlb2YgY29udGVudCA9PT0gXCJudW1iZXJcIiAmJiByYXdbcmF3Lmxlbmd0aC0xXSA9PT0gXCLigqxcIikge1xuICAgICAgICAgICAgICAgIGxldCBmID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYoICEgZi5oYXNQcm9wZXJ0eShcImZvcm1hdFwiKSB8fCBmLmdldFByb3BlcnR5KFwiZm9ybWF0XCIpID09PSBGb3JtYXRzLmRlZmF1bHQgKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1hdChGb3JtYXRzLmV1cm9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByYXdfdmFsID0gY29udGVudCBpbnN0YW5jZW9mIEhUTUxUYWJsZUNlbGxFbGVtZW50ID8gY29udGVudC5yYXdDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY29udGVudDtcblxuICAgICAgICBmb3IobGV0IGNlbGwgb2YgdGhpcy4jY2VsbHMpIHtcblxuICAgICAgICAgICAgaWYoY29udGVudCBpbnN0YW5jZW9mIEhUTUxUYWJsZUNlbGxFbGVtZW50ICYmIGNvbnRlbnQucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEgKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgdiA9IGNvbnRlbnQucmF3Q29udGVudDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRzdCA9IHRoaXMuI3NoZWV0LmNlbGxQb3MoIGNlbGwgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzcmMgPSB0aGlzLiNzaGVldC5jZWxsUG9zKGNvbnRlbnQpXG5cbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmID0gWyBkc3RbMF0gLSBzcmNbMF0sIGRzdFsxXSAtIHNyY1sxXV0gYXMgY29uc3Q7XG5cbiAgICAgICAgICAgICAgICByYXdfdmFsID0gdi5yZWxhdGl2ZVRvKCB0aGlzLiNzaGVldCwgLi4uZGlmZiApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjZWxsLnJhd0NvbnRlbnQgPSByYXdfdmFsO1xuXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSByYXdfdmFsO1xuICAgICAgICAgICAgaWYoIHJhd192YWwgaW5zdGFuY2VvZiBGb3JtdWxhKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXRzID0gT2JqZWN0LnZhbHVlcyggRm9ybWF0cyApO1xuXG4gICAgICAgICAgICAgICAgLy9JZiBubyBudW1iZXIgZm9ybWF0LCBkZWR1Y2UgZm9ybWF0LlxuICAgICAgICAgICAgICAgIGlmKCBjZWxsLmZvcm1hdCA9PT0gdW5kZWZpbmVkIHx8IGNlbGwuZm9ybWF0ID09PSBGb3JtYXRzLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1hdCA9IEZvcm1hdHMuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5iX2RhdGVzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCByIG9mIHJhd192YWwucmFuZ2VzVG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQodGhpcy5zaGVldC5nZXRSYW5nZShyLnZhbHVlKSApLmdldFByb3BlcnR5KFwiZm9ybWF0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGZvcm1hdCAhPT0gZiAmJiBmb3JtYXRzLmluZGV4T2YoZikgPiBmb3JtYXRzLmluZGV4T2YoZm9ybWF0KSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0ID0gZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGYgPT09IEZvcm1hdHMuZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArK25iX2RhdGVzO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaDRja1xuICAgICAgICAgICAgICAgICAgICBpZiggZm9ybWF0ID09PSBGb3JtYXRzLmRhdGUgJiYgbmJfZGF0ZXMgPiAxIClcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdCA9IEZvcm1hdHMuZGVmYXVsdDtcblxuICAgICAgICAgICAgICAgICAgICBpZihmb3JtYXQgIT09IEZvcm1hdHMuZGVmYXVsdClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuZm9ybWF0ID0gZm9ybWF0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhbHVlID0gcmF3X3ZhbC5leGVjKHRoaXMuI3NoZWV0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHR5cGU6IHN0cmluZyA9IHR5cGVvZiB2YWx1ZTtcbiAgICAgICAgICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgKSB7XG4gICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIjtcbiAgICAgICAgICAgICAgICBjZWxsLmZvcm1hdCA9IEZvcm1hdHMuZGF0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGNlbGwuZm9ybWF0KHZhbHVlKTtcblxuICAgICAgICAgICAgaWYoIGNlbGwuZm9ybWF0ID09PSBGb3JtYXRzLmRhdGUpXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdkYXRlJztcbiAgICAgICAgICAgIGlmKCBjZWxsLmZvcm1hdCA9PT0gRm9ybWF0cy5wb3VyY2VudClcbiAgICAgICAgICAgICAgICB0eXBlID0gJ3BvdXJjZW50JztcbiAgICAgICAgICAgIGlmKCBjZWxsLmZvcm1hdCA9PT0gRm9ybWF0cy5ldXJvcyB8fCBjZWxsLmZvcm1hdCA9PT0gRm9ybWF0cy5udW1iZXIgKVxuICAgICAgICAgICAgICAgIHR5cGUgPSAnbnVtYmVyJztcblxuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHR5cGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2hlZXQudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgc2V0Uk8oaXNfcm86IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiB0aGlzLiNjZWxscylcbiAgICAgICAgICAgIGNlbGwuaXNfcm8gPSBpc19ybztcbiAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NlbGxzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBoYXMoLi4uY2VsbHM6IENlbGxbXSkge1xuICAgICAgICBmb3IobGV0IGNlbGwgb2YgY2VsbHMpXG4gICAgICAgICAgICBpZiggISB0aGlzLiNjZWxscy5pbmNsdWRlcyhjZWxsKSApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZW1vdmUoLi4uY2VsbHM6IENlbGxbXSkge1xuICAgICAgICB0aGlzLiNjZWxscyA9IHRoaXMuI2NlbGxzLmZpbHRlciggYyA9PiAhIGNlbGxzLmluY2x1ZGVzKGMpICk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpICk7XG4gICAgfVxuXG4gICAgcmVwbGFjZUFsbCguLi5jZWxsczogQ2VsbFtdfFtDZWxsTGlzdF0pIHtcbiAgICAgICAgdGhpcy4jY2VsbHMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5hZGQoLi4uY2VsbHMpO1xuICAgIH1cblxuICAgIGFkZCguLi5jZWxsczogQ2VsbFtdfFtDZWxsTGlzdF0pIHtcblxuICAgICAgICBpZiggY2VsbHNbMF0gaW5zdGFuY2VvZiBDZWxsTGlzdClcbiAgICAgICAgICAgIGNlbGxzID0gY2VsbHNbMF0uY2VsbHM7XG5cbiAgICAgICAgdGhpcy4jY2VsbHMucHVzaCguLi5jZWxscyBhcyBDZWxsW10pO1xuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpICk7XG4gICAgfVxuXG4gICAgZ2V0IGZpcnN0Q2VsbCgpIHtcbiAgICAgICAgaWYoIHRoaXMuI2NlbGxzLmxlbmd0aCA8IDEpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub3BlXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy4jY2VsbHNbMF07XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuI2NlbGxzLmxlbmd0aCA9IDA7XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcbiAgICB9XG5cblxuICAgIGRlZXBDbG9uZSgpIHtcblxuICAgICAgICBsZXQgY2VsbHMgPSB0aGlzLiNjZWxscy5tYXAoIGMgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xvbmUgPSBjLmNsb25lTm9kZSh0cnVlKSBhcyBDZWxsO1xuXG4gICAgICAgICAgICBjbG9uZS5yYXdDb250ZW50ID0gYy5yYXdDb250ZW50O1xuICAgICAgICAgICAgY2xvbmUuZm9ybWF0ICAgICA9IGMuZm9ybWF0O1xuICAgICAgICAgICAgKGNsb25lIGFzIGFueSkucG9zICAgICAgICA9IHRoaXMuI3NoZWV0LmNlbGxQb3MoYyk7XG5cbiAgICAgICAgICAgIHJldHVybiBjbG9uZTtcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gbmV3IENlbGxMaXN0KHRoaXMuI3NoZWV0LCBjZWxscyk7XG4gICAgfVxufVxuXG4vL1RPRE8uLi5cbmltcG9ydCBcIi4vZm9ybXVsYV9lZGl0b3JcIjtcbmltcG9ydCBcIi4vcGxhZ2VfZWRpdG9yXCI7XG5pbXBvcnQgeyBGb3JtdWxhLCBwYXJzZV9mb3JtdWxhIH0gZnJvbSBcIi4vZm9ybXVsYV9wYXJzZXJcIjtcbmltcG9ydCB7IFBsYWdlU2VsZWN0b3IgfSBmcm9tIFwiLi9wbGFnZV9zZWxlY3RvclwiO1xuaW1wb3J0IHsgRm9ybWF0LCBGb3JtYXRNYW5hZ2VyLCBGb3JtYXRzIH0gZnJvbSBcIi4vZm9ybWF0XCI7XG5pbXBvcnQgeyBGb3JtdWxhUmVmLCBSYW5nZU92ZXJsYXksIFJlY29weUhhbmRsZSB9IGZyb20gXCIuL1JhbmdlT3ZlcmxheVwiO1xuaW1wb3J0IHsgdGVzdCB9IGZyb20gXCJ0ZXN0L3dlYm9kZlwiO1xuXG5MSVNTLmRlZmluZSgnY2FsYy1zaGVldCcsIENhbGNTaGVldCk7IiwiaW1wb3J0IExJU1MgZnJvbSBcIi4uLy4uLy4uL2xpYnMvTElTU1wiO1xuaW1wb3J0IHsgRm9ybWF0LCBGb3JtYXRzIH0gZnJvbSBcIi4vZm9ybWF0XCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGxMaXN0IH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuY29uc3QgY29udGVudCA9IGBcbiAgICA8c2VsZWN0IGRpc2FibGVkIHRpdGxlPVwiTm9tIGRlIHBvbGljZVwiPjxvcHRpb24+TGliw6lyYXRpb24gU2Fuczwvb3B0aW9uPjwvc2VsZWN0PlxuICAgIDxzZWxlY3QgY2xhc3M9XCJmb250X3NpemVcIiB0aXRsZT1cIlRhaWxsZSBkZSBwb2xpY2VcIj48L3NlbGVjdD5cbiAgICA8c3BhbiBjbGFzcz0ndmJhcic+PC9zcGFuPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdib2xkJyB0aXRsZT1cIkdyYXMgKEN0cmwrQilcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdpdGFsaWMnIHRpdGxlPVwiSXRhbGlxdWUgKEN0cmwrSSlcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSd1bmRlcmxpbmUnIHRpdGxlPVwiU291bGlnbmFnZSAoQ3RybCtVKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gdmFsdWU9J2JsYWNrJyBuYW1lPSdmb3JlZ3JvdW5kX2NvbG9yJyB0aXRsZT1cIkNvdWxldXIgZGUgcG9saWNlXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gdmFsdWU9J3llbGxvdycgbmFtZT0nYmFja2dyb3VuZF9jb2xvcicgdGl0bGU9XCJDb3VsZXVyIGQnYXJyacOocmUtcGxhblwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nYWxpZ25fbGVmdCcgdGl0bGU9XCJBbGlnbmVyIMOgIGdhdWNoZSAoQ3RybCtMKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2FsaWduX2NlbnRlcicgdGl0bGU9XCJDZW50ZXIgKEN0cmwrRSlcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdhbGlnbl9yaWdodCcgdGl0bGU9XCJBbGlnbmVyIMOgIGRyb2l0ZSAoQ3RybCtSKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0ndmFsaWduX3RvcCcgdGl0bGU9XCJBbGlnbmVyIGVuIGhhdXRcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSd2YWxpZ25fbWlkZGxlJyB0aXRsZT1cIkNlbnRyZXIgdmVydGljYWxlbWVudFwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J3ZhbGlnbl9ib3R0b20nIHRpdGxlPVwiQWxpZ25lciBlbiBiYXNcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxzcGFuIGNsYXNzPSd2YmFyJz48L3NwYW4+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2FqdXN0ZXInIHRpdGxlPVwiQWp1c3RlciBsZSB0ZXh0ZVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nbWVyZ2VfY2VudGVyJyB0eXBlPSdmY3QnIHRpdGxlPVwiRnVzaW9ubmVyIGV0IGNlbnRyZXIgb3UgZMOpZnVzaW9ubmVyIGxlcyBjZWxsdWxlcyBlbiBpbnZlcnNhbnQgbGV1ciDDqXRhdCBhY3R1ZWxcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdtZXJnZScgdHlwZT0nZmN0JyB0aXRsZT1cIkZ1c2lvbm5lciBsZXMgY2VsbHVsZXNcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSd1bm1lcmdlJyB0eXBlPSdmY3QnIHRpdGxlPVwiRMOpZnVzaW9ubmVyIGxlcyBjZWxsdWxlc1wiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nZm9ybWF0X21vbm5haWUnIHR5cGU9J2ZjdCcgdGl0bGU9XCJBcHBsaXF1ZXIgbGUgZm9ybWF0IE1vbm5haWUgKE1haitDdHJsKzQpXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nZm9ybWF0X3BvdXJjZW50JyB0eXBlPSdmY3QnIHRpdGxlPVwiQXBwbGlxdWVyIGxlIGZvcm1hdCBQb3VyY2VudGFnZSAoTWFqK0N0cmwrNSlcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdmb3JtYXRfbmInIHR5cGU9J2ZjdCcgIHRpdGxlPVwiQXBwbGlxdWVyIGxlIGZvcm1hdCBOb21icmUgKE1haitDdHJsKzEpXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nZm9ybWF0X2RhdGUnIHR5cGU9J2ZjdCcgIHRpdGxlPVwiQXBwbGlxdWVyIGxlIGZvcm1hdCBEYXRlIChNYWorQ3RybCszKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nZm9ybWF0X3plcm9fcDEnIHR5cGU9J2ZjdCcgdGl0bGU9XCJBam91dGVyIHVuZSBkw6ljaW1hbGVcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdmb3JtYXRfemVyb19tMScgdHlwZT0nZmN0JyB0aXRsZT1cIlN1cHByaW1lciB1bmUgZMOpY2ltYWxlXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8c3BhbiBjbGFzcz0ndmJhcic+PC9zcGFuPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdyZXRyYWl0X3AxJyB0eXBlPSdmY3QnIHRpdGxlPVwiQXVnbWVudGVyIGxlIHJldHJhaXRcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdyZXRyYWl0X20xJyB0eXBlPSdmY3QnIHRpdGxlPVwiRGltaW51ZXIgbGUgcmV0cmFpdFwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nYm9yZGVyJyB0eXBlPSdmY3QnIHRpdGxlPVwiQm9yZHVyZXMgKE1haiBwb3VyIMOpY3Jhc2VyKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2JvcmRlcl9zdHlsZScgdHlwZT0nZmN0JyBkaXNhYmxlZCB0aXRsZT1cIlN0eWxlIGRlIGJvcmR1cmVcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSB2YWx1ZT0nYmxhY2snIG5hbWU9J2JvcmRlcl9jb2xvcicgdGl0bGU9XCJDb3VsZXVyIGRlIGJvcmR1cmVcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxzcGFuIGNsYXNzPSd2YmFyJz48L3NwYW4+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2Zvcm1hdF9jb25kJyB0eXBlPSdmY3QnIGRpc2FibGVkIHRpdGxlPVwiQ29uZGl0aW9ubmVsXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbmA7XG5cbmZ1bmN0aW9uIG1lcmdlKGNlbGxsaXN0OiBDZWxsTGlzdCwgaXNfYWxpZ24gPSBmYWxzZSkge1xuXG4gICAgY29uc3Qgc2hlZXQgPSBjZWxsbGlzdC5zaGVldDtcblxuICAgIGNvbnN0IFtiZWcsZW5kXSA9IGNlbGxsaXN0LnBsYWdlX25hbWUhLnNwbGl0KCc6JykubWFwKCBlID0+IHNoZWV0LnJlZjJwb3MoZSkgKTsgLy8gcGxhZ2UgY2FuJ3QgYmUgdW5kZWZpbmVkXG5cbiAgICBsZXQgcm93cyA9IGVuZFswXSAtIGJlZ1swXSArIDE7XG4gICAgbGV0IGNvbHMgPSBlbmRbMV0gLSBiZWdbMV0gKyAxO1xuXG4gICAgbGV0IGZvcm1hdDogUmVjb3JkPHN0cmluZyxhbnk+ID0ge1xuICAgICAgICBzcGFuOiBbIHJvd3MsIGNvbHMgXVxuICAgIH1cblxuICAgIGlmKCBpc19hbGlnbiApIHtcbiAgICAgICAgZm9ybWF0LnZhbGlnbl9taWRkbGUgPSB0cnVlO1xuICAgICAgICBmb3JtYXQuYWxpZ25fY2VudGVyICA9IHRydWU7XG4gICAgfVxuXG4gICAgc2hlZXQuZ2V0UmFuZ2UoYmVnKS5mb3JtYXQoZm9ybWF0KTtcbn1cblxuZnVuY3Rpb24gdW5tZXJnZShjZWxsbGlzdDogQ2VsbExpc3QpIHtcblxuICAgIGNlbGxsaXN0LmZvcm1hdCh7XG4gICAgICAgIHNwYW46IFsgMSwgMSBdXG4gICAgfSk7IC8vIHVubWVyZ2UuLi5cbn1cblxuZnVuY3Rpb24gcmV0cmFpdChjZWxsczogQ2VsbExpc3QsIGRlbHRhX2luZGVudDogbnVtYmVyKSB7XG4gICAgXG4gICAgZm9yKGxldCBjZWxsIG9mIGNlbGxzLmNlbGxzKSB7XG5cbiAgICAgICAgY29uc3QgZm9ybWF0ID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbCk7XG4gICAgICAgIGxldCBuZXdfZm9ybWF0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG4gICAgICAgIGlmKCAhIGZvcm1hdC5oYXNQcm9wZXJ0eShcImFsaWduX3JpZ2h0XCIpICYmICEgZm9ybWF0Lmhhc1Byb3BlcnR5KFwiYWxpZ25fbGVmdFwiKSApXG4gICAgICAgICAgICBuZXdfZm9ybWF0LmFsaWduX2xlZnQgPSB0cnVlO1xuXG4gICAgICAgIG5ld19mb3JtYXQuaW5kZW50ID0gKyhmb3JtYXQuZ2V0UHJvcGVydHkoXCJpbmRlbnRcIikgPz8gMCkgKyBkZWx0YV9pbmRlbnQ7XG4gICAgICAgIFxuICAgICAgICBpZiggbmV3X2Zvcm1hdC5pbmRlbnQgPCAwKVxuICAgICAgICAgICAgbmV3X2Zvcm1hdC5pbmRlbnQgPSAwO1xuXG4gICAgICAgIGNlbGxzLmZvcm1hdChuZXdfZm9ybWF0KTsgICAgIFxuICAgIH1cbn1cblxuZnVuY3Rpb24gcHJlY2lzaW9uKGNlbGxzOiBDZWxsTGlzdCwgZGVsdGFfcHJlYzogbnVtYmVyKSB7XG5cbiAgICBsZXQgcHJlY2lzaW9uID0gdW5kZWZpbmVkO1xuICAgIGZvcihsZXQgY2VsbCBvZiBjZWxscy5jZWxscykge1xuICAgICAgICBjb25zdCBwcmVjID0gKyhGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxsKS5nZXRQcm9wZXJ0eShcInByZWNpc2lvblwiKSA/PyAyKTtcbiAgICAgICAgaWYoIHByZWNpc2lvbiA9PT0gdW5kZWZpbmVkIHx8IHByZWMgPCBwcmVjaXNpb24gKVxuICAgICAgICAgICAgcHJlY2lzaW9uID0gcHJlYztcbiAgICB9XG5cbiAgICBwcmVjaXNpb24gPz89IDI7XG4gICAgcHJlY2lzaW9uICs9IGRlbHRhX3ByZWM7XG4gICAgaWYocHJlY2lzaW9uIDwgMClcbiAgICAgICAgcHJlY2lzaW9uID0gMDtcblxuICAgIGNlbGxzLmZvcm1hdCh7cHJlY2lzaW9ufSk7XG59XG5cbmNvbnN0IGZjdHM6IFJlY29yZDxzdHJpbmcsIHsgYWN0aW9uOiAoY2VsbHM6IENlbGxMaXN0KSA9PnZvaWQsIGVuYWJsZWQ/OiAoY2VsbHM6IENlbGxMaXN0KSA9PiBib29sZWFuIH0+ID0ge1xuICAgIFwiZm9ybWF0X3plcm9fcDFcIjoge1xuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuICAgICAgICAgICAgcHJlY2lzaW9uKGNlbGxzLCArMSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiZm9ybWF0X3plcm9fbTFcIjoge1xuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuICAgICAgICAgICAgcHJlY2lzaW9uKGNlbGxzLCAtMSk7XG4gICAgICAgIH1cbiAgICB9LFwiZm9ybWF0X3BvdXJjZW50XCI6IHtcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcblxuICAgICAgICAgICAgaWYoIEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzKS5nZXRQcm9wZXJ0eSgnZm9ybWF0JykgPT09IEZvcm1hdHMucG91cmNlbnQgKSB7XG4gICAgICAgICAgICAgICAgY2VsbHMuZm9ybWF0KEZvcm1hdHMubnVtYmVyKTsgLy8gaDRja1xuICAgICAgICAgICAgICAgIGNlbGxzLmZvcm1hdCh7Zm9ybWF0OiBudWxsfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2VsbHMuZm9ybWF0KEZvcm1hdHMucG91cmNlbnQpO1xuICAgICAgICB9LFxuICAgICAgICBlbmFibGVkOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcbiAgICAgICAgICAgIHJldHVybiBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxscykuZ2V0UHJvcGVydHkoJ2Zvcm1hdCcpID09PSBGb3JtYXRzLnBvdXJjZW50O1xuICAgICAgICB9XG4gICAgfSxcImZvcm1hdF9uYlwiOiB7XG4gICAgICAgIGFjdGlvbjogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG5cbiAgICAgICAgICAgIGlmKCBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxscykuZ2V0UHJvcGVydHkoJ2Zvcm1hdCcpID09PSBGb3JtYXRzLm51bWJlciApIHtcbiAgICAgICAgICAgICAgICBjZWxscy5mb3JtYXQoe2Zvcm1hdDogbnVsbH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNlbGxzLmZvcm1hdChGb3JtYXRzLm51bWJlcik7XG4gICAgICAgIH0sXG4gICAgICAgIGVuYWJsZWQ6IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzKS5nZXRQcm9wZXJ0eSgnZm9ybWF0JykgPT09IEZvcm1hdHMubnVtYmVyO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcImZvcm1hdF9tb25uYWllXCI6IHtcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcblxuICAgICAgICAgICAgaWYoIEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzKS5nZXRQcm9wZXJ0eSgnZm9ybWF0JykgPT09IEZvcm1hdHMuZXVyb3MgKSB7XG4gICAgICAgICAgICAgICAgY2VsbHMuZm9ybWF0KHtmb3JtYXQ6IG51bGx9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjZWxscy5mb3JtYXQoRm9ybWF0cy5ldXJvcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVuYWJsZWQ6IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzKS5nZXRQcm9wZXJ0eSgnZm9ybWF0JykgPT09IEZvcm1hdHMuZXVyb3M7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiZm9ybWF0X2RhdGVcIjoge1xuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuXG4gICAgICAgICAgICBpZiggRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHMpLmdldFByb3BlcnR5KCdmb3JtYXQnKSA9PT0gRm9ybWF0cy5kYXRlICkge1xuICAgICAgICAgICAgICAgIGNlbGxzLmZvcm1hdChGb3JtYXRzLm51bWJlcik7IC8vIGg0Y2tcbiAgICAgICAgICAgICAgICBjZWxscy5mb3JtYXQoe2Zvcm1hdDogbnVsbH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNlbGxzLmZvcm1hdChGb3JtYXRzLmRhdGUpO1xuICAgICAgICB9LFxuICAgICAgICBlbmFibGVkOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcbiAgICAgICAgICAgIHJldHVybiBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxscykuZ2V0UHJvcGVydHkoJ2Zvcm1hdCcpID09PSBGb3JtYXRzLmRhdGU7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwicmV0cmFpdF9tMVwiOiB7XG4gICAgICAgIGFjdGlvbjogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG4gICAgICAgICAgICByZXRyYWl0KGNlbGxzLCAtMSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwicmV0cmFpdF9wMVwiOiB7IC8vIFRPRE86IG0xLi4uXG4gICAgICAgIGFjdGlvbjogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG4gICAgICAgICAgICByZXRyYWl0KGNlbGxzLCArMSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiYm9yZGVyXCI6IHtcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcbiAgICAgICAgICAgIGNlbGxzLmZvcm1hdCh7XG4gICAgICAgICAgICAgICAgYm9yZGVyX3RvcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBib3JkZXJfYm90dG9tOiB0cnVlLFxuICAgICAgICAgICAgICAgIGJvcmRlcl9sZWZ0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGJvcmRlcl9yaWdodDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwidW5tZXJnZVwiOiB7XG4gICAgICAgIGFjdGlvbjogdW5tZXJnZVxuICAgIH0sXG4gICAgXCJtZXJnZVwiOiB7XG4gICAgICAgIGFjdGlvbjogbWVyZ2VcbiAgICB9LFxuICAgIFwibWVyZ2VfY2VudGVyXCI6IHtcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbihjZWxsbGlzdDogQ2VsbExpc3QpIHtcblxuICAgICAgICAgICAgbGV0IHVubWVyZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IHNoZWV0ID0gY2VsbGxpc3Quc2hlZXQ7XG5cbiAgICAgICAgICAgIGZvcihsZXQgY2VsbCBvZiBjZWxsbGlzdC5jZWxscylcbiAgICAgICAgICAgICAgICBpZiggRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbCkuaGFzUHJvcGVydHkoXCJzcGFuXCIpICkge1xuICAgICAgICAgICAgICAgICAgICB1bm1lcmdlKCBuZXcgQ2VsbExpc3Qoc2hlZXQsIFtjZWxsXSkgKTtcbiAgICAgICAgICAgICAgICAgICAgdW5tZXJnZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodW5tZXJnZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBtZXJnZShjZWxsbGlzdCwgdHJ1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVuYWJsZWQ6IGZ1bmN0aW9uKGNlbGxsaXN0OiBDZWxsTGlzdCkge1xuXG4gICAgICAgICAgICBmb3IobGV0IGNlbGwgb2YgY2VsbGxpc3QuY2VsbHMpXG4gICAgICAgICAgICAgICAgaWYoIEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGwpLmhhc1Byb3BlcnR5KFwic3BhblwiKSApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGNzcyA9IGBcbiAgICA6aG9zdCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XG5cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiAxLjVlbTtcbiAgICB9XG5cbiAgICA6aG9zdCAudmJhciB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FiYWJhYjtcbiAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgfVxuXG4gICAgOmhvc3Qgc2VsZWN0IHtcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG5gXG5cbmNvbnN0IGl0ZW1jc3MgPSBgXG5cbiAgICA6aG9zdCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICA6aG9zdChbZGlzYWJsZWRdKSB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuXG4gICAgOmhvc3QoW3ZhbHVlXSkge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICAgIH1cblxuICAgIDpob3N0LCA6aG9zdCA+IGRpdiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIDpob3N0IHtcbiAgICAgICAgcGFkZGluZzogMXB4O1xuICAgIH1cblxuICAgIDpob3N0ID4gZGl2IHtcbiAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgIGhlaWdodDogY2FsYyggMS4yZW0gLSAxcHggKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC0xcHg7XG4gICAgICAgIHJpZ2h0OiAtMXB4O1xuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogY2FsYyggKCAxLjJlbSAtIDFweCAtIDJweCApIC8gMiApO1xuICAgICAgICAgICAgcmlnaHQ6IDFweDtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICB3aWR0aDogMDsgXG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICAtLXNpemU6IDRweDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1zaXplKSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogdmFyKC0tc2l6ZSkgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJvcmRlci10b3A6IHZhcigtLXNpemUpIHNvbGlkIGJsYWNrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgOmhvc3QoOmhvdmVyOm5vdCguZW5hYmxlZCkpLCA6aG9zdCg6aG92ZXI6bm90KC5lbmFibGVkKSkgPiBkaXYge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTY5Njk2O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgfVxuXG4gICAgOmhvc3QoLmVuYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2I2YjZiNjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzliOWI5YjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIH1cbmA7XG5cbmV4cG9ydCBjbGFzcyBDYWxjVG9vbGJhckl0ZW0gZXh0ZW5kcyBMSVNTKHtcbiAgICBjc3M6IGl0ZW1jc3Ncbn0pIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbnRlbnQuc3JjID0gYC4uLy4uLy4uLy4uL2Fzc2V0cy90YWJsZXVyL2ltZy90b29sYmFyLyR7dGhpcy5ob3N0LmdldEF0dHJpYnV0ZSgnbmFtZScpfS5wbmdgO1xuXG4gICAgICAgIGlmKCAhIHRoaXMuaG9zdC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykgKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKCBjb250ZW50ICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgbGV0IGNvbG9yX3BpY2tlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W3R5cGU9XCJjb2xvclwiXScpO1xuICAgICAgICAgICAgaWYoIGNvbG9yX3BpY2tlciA9PT0gbnVsbCApIHtcbiAgICAgICAgICAgICAgICBjb2xvcl9waWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGNvbG9yX3BpY2tlci5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY29sb3JcIik7XG4gICAgICAgICAgICAgICAgY29sb3JfcGlja2VyLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBjb2xvcl9waWNrZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NhbmNlbCcpKTtcblxuICAgICAgICAgICAgbGV0IGNhbmNlbCA9IGZhbHNlO1xuICAgICAgICAgICAgY29sb3JfcGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbmNlbCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjYW5jZWwgPSB0cnVlO1xuICAgICAgICAgICAgfSwge29uY2U6IHRydWV9KTtcblxuICAgICAgICAgICAgY29sb3JfcGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldikgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCBjYW5jZWwgKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICB0aGlzLmhvc3Quc2V0QXR0cmlidXRlKCd2YWx1ZScsIGNvbG9yX3BpY2tlci52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3N0LmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChcImNsaWNrXCIsIHtidWJibGVzOiB0cnVlfSkgKTtcblxuICAgICAgICAgICAgfSwge29uY2U6IHRydWV9KTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY29sb3JfcGlja2VyKTtcbiAgICAgICAgICAgIGNvbG9yX3BpY2tlci5jbGljaygpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKCBjb250ZW50LCBzcGFuICk7XG4gICAgfVxufVxuXG5MSVNTLmRlZmluZSgnY2FsYy10b29sYmFyLWl0ZW0nLCBDYWxjVG9vbGJhckl0ZW0pO1xuXG5leHBvcnQgY2xhc3MgQ2FsY1Rvb2xiYXIgZXh0ZW5kcyBMSVNTKHtcbiAgICBjb250ZW50LFxuICAgIGNzc1xufSkge1xuXG4gICAgI2J0bnM6IFJlY29yZDxzdHJpbmcsIEhUTUxFbGVtZW50PiA9IHt9O1xuXG4gICAgZGlzYWJsZUFsbEV4Y2VwdCguLi5leGNlcHRpb246IHN0cmluZ1tdKSB7XG4gICAgICAgIGZvcihsZXQgYnRuX25hbWUgaW4gdGhpcy4jYnRucylcbiAgICAgICAgICAgIGlmKCAhIGV4Y2VwdGlvbi5pbmNsdWRlcyhidG5fbmFtZSkgKVxuICAgICAgICAgICAgICAgIHRoaXMuI2J0bnNbYnRuX25hbWVdLnRvZ2dsZUF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgXG4gICAgICAgIGlmKCAhIGV4Y2VwdGlvbi5pbmNsdWRlcyhcImZvbnRfc2l6ZVwiKSApXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvcjxIVE1MU2VsZWN0RWxlbWVudD4oJy5mb250X3NpemUnKSEudG9nZ2xlQXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGxldCBmb250X3NpemVzID0gW1xuICAgICAgICAgICAgNiwgNywgOCwgOSwgMTAsIDEwLjUsIDExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE4LCAyMCwgMjEsIDIyLCAyNCwgMjYsIDI4LCAzMiwgMzYsIDQwLCA0MiwgNDQsIDQ4LCA1NCwgNjAsIDY2LCA3MiwgODAsIDg4LCA5NlxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IGJ0bnMgPSB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJ2NhbGMtdG9vbGJhci1pdGVtJyk7XG4gICAgICAgIGZvcihsZXQgYnRuIG9mIGJ0bnMpXG4gICAgICAgICAgICB0aGlzLiNidG5zW2J0bi5nZXRBdHRyaWJ1dGUoJ25hbWUnKSFdID0gYnRuO1xuXG4gICAgICAgIGNvbnN0IGZvbnRfc2l6ZXNfc2VsZWN0ID0gdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNlbGVjdEVsZW1lbnQ+KCcuZm9udF9zaXplJykhO1xuICAgICAgICBmb3IobGV0IGZvbnRfc2l6ZSBvZiBmb250X3NpemVzKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBuZXcgT3B0aW9uKGAke2ZvbnRfc2l6ZS50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnLCcpfSBwdGAsIGAke2ZvbnRfc2l6ZX1wdGApO1xuICAgICAgICAgICAgZm9udF9zaXplc19zZWxlY3QuYXBwZW5kKG9wdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgZWxlbSA9IGV2LnRhcmdldCEgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiggZWxlbS50YWdOYW1lICE9PSAnQ0FMQy1UT09MQkFSLUlURU0nKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgY29uc3QgbiA9IGVsZW0uZ2V0QXR0cmlidXRlKCduYW1lJykhIGFzIGtleW9mIHR5cGVvZiBmY3RzO1xuICAgICAgICAgICAgaWYoIGVsZW0uZ2V0QXR0cmlidXRlKCd0eXBlJykgPT09ICdmY3QnKSB7XG5cbiAgICAgICAgICAgICAgICBmY3RzW25dLmFjdGlvbih0aGlzLiNzaGVldC5zZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMuI3VwZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICBlbGVtLmhhc0F0dHJpYnV0ZSgndmFsdWUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZWxlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgnZW5hYmxlZCcpO1xuXG4gICAgICAgICAgICBsZXQgZm9ybWF0ID0gbmV3IEZvcm1hdCh7W25dOiB2YWx1ZSB9KTtcbiAgICAgICAgICAgIGZvcm1hdC5hcHBseVRvKCB0aGlzLiNzaGVldC5zZWxlY3Rpb24gKTtcbiAgICAgICAgICAgIHRoaXMuI3VwZGF0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb250X3NpemVzX3NlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcblxuICAgICAgICAgICAgLy9UT0RPLi4uXG4gICAgICAgICAgICBsZXQgZm9ybWF0ID0gbmV3IEZvcm1hdCh7Zm9udF9zaXplOiBmb250X3NpemVzX3NlbGVjdC52YWx1ZX0pO1xuICAgICAgICAgICAgZm9ybWF0LmFwcGx5VG8oIHRoaXMuI3NoZWV0LnNlbGVjdGlvbiApO1xuICAgICAgICAgICAgdGhpcy4jdXBkYXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICNzaGVldCE6Q2FsY1NoZWV0O1xuXG5cbiAgICAjdXBkYXRlKCkge1xuXG4gICAgICAgIGlmKCB0aGlzLiNzaGVldC5zZWxlY3Rpb24uY2VsbHMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGZvcm1hdCA9IEZvcm1hdC5leHRyYWN0Rm9ybWF0KHRoaXMuI3NoZWV0LnNlbGVjdGlvbik7XG5cbiAgICAgICAgZm9yKGxldCBuYW1lIGluIHRoaXMuI2J0bnMpIHtcblxuICAgICAgICAgICAgbGV0IGVuYWJsZWQgPSBmb3JtYXQuZ2V0UHJvcGVydHkobmFtZSkgPT09IHRydWU7XG4gICAgICAgICAgICBpZihuYW1lIGluIGZjdHMpXG4gICAgICAgICAgICAgICAgZW5hYmxlZCA9IGZjdHNbbmFtZSBhcyBrZXlvZiB0eXBlb2YgZmN0c10uZW5hYmxlZD8uKHRoaXMuI3NoZWV0LnNlbGVjdGlvbikgPz8gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMuI2J0bnNbbmFtZV0uY2xhc3NMaXN0LnRvZ2dsZSgnZW5hYmxlZCcsIGVuYWJsZWQgKVxuICAgICAgICB9XG5cbiAgICAgICAgLy9UT0RPLi4uXG4gICAgICAgIGNvbnN0IGZvbnRfc2l6ZXNfc2VsZWN0ID0gdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNlbGVjdEVsZW1lbnQ+KCcuZm9udF9zaXplJykhO1xuICAgICAgICBmb250X3NpemVzX3NlbGVjdC52YWx1ZSA9IGZvcm1hdC5nZXRQcm9wZXJ0eSgnZm9udF9zaXplJyk7XG4gICAgICAgIC8vVE9ETzogdXBkYXRlLi4uXG4gICAgfVxuXG4gICAgc3luY1RvKHNoZWV0OiBDYWxjU2hlZXQpIHtcblxuICAgICAgICB0aGlzLiNzaGVldCA9IHNoZWV0O1xuXG5cbiAgICAgICAgc2hlZXQuc2VsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldikgPT4ge1xuICAgICAgICAgICAgdGhpcy4jdXBkYXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLiN1cGRhdGUoKTtcblxuICAgIH1cblxufVxuXG5MSVNTLmRlZmluZSgnY2FsYy10b29sYmFyJywgQ2FsY1Rvb2xiYXIpOyIsImV4cG9ydCBkZWZhdWx0IFtcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIlIgMS0wMSBUYWJsZXVyIGV0IFJlcG9ydGluZ1wiLFxuICAgICAgICBzbmFtZTogXCJSMS0wMSBUYWJsZXVyXCIsXG4gICAgICAgIHBhdGggOiBcIlIxLTAxXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJDTVwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiQ01cIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIkNNMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIkNNMlwiXG4gICAgICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiVFBcIixcbiAgICAgICAgICAgICAgICBwYXRoOiBcIlRQXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgXCJUUDFcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lIDogXCJSIDEtMDIgQmFzZXMgZGUgRG9ubsOpZXMgUmVsYXRpb25uZWxsZXMgMVwiLFxuICAgICAgICBzbmFtZTogXCJSMS0wMiBCRFIxXCIsXG4gICAgICAgIHBhdGggOiBcIlIxLTAyXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBcIkNNXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJUUFwiICxcbiAgICAgICAgICAgICAgICBwYXRoIDogXCJUUFwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiVFAxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFAyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFAzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFA0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVFA1XCJcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG5dO1xuXG5leHBvcnQgY29uc3Qgcm9vdF9wYXRoID0gW1wibG9jYWxob3N0XCIsIFwiMTI3LjAuMC4xXCJdLmluY2x1ZGVzKGxvY2F0aW9uLmhvc3RuYW1lKSA/IFwiL2Rpc3QvZGV2L3BhZ2VzL1wiIDogXCIvQ291cnMvZGlzdC9kZXYvcGFnZXMvXCI7IiwiXG5pbXBvcnQgcGFnZXMsIHtyb290X3BhdGh9IGZyb20gXCIuL2NvbnRlbnRcIjtcblxuLypcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmVwcmludCcsICgpID0+IHtcbiAgLy8uLi5cbn0pO1xuKi9cblxuLy9UT0RPOiBsaW5rcy4uLlxuY29uc3QgbWFpbiAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikhO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKSE7XG5cbmNvbnN0IHRpdGxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFwiaDEsIGgyLCBoMywgaDRcIik7XG5cbnR5cGUgTm9kZSA9IHtcbiAgICBodG1sICAgIDogSFRNTEVsZW1lbnQsXG4gICAgbGV2ZWwgICA6IG51bWJlcixcbiAgICBwYXJlbnQgIDogbnVsbHxOb2RlLFxuICAgIGNoaWxkcmVuOiBOb2RlW11cbn07XG5cbmNvbnN0IGh0cmVlOiBOb2RlID0ge1xuICAgIGh0bWwgICAgOiBtYWluLFxuICAgIGxldmVsICAgOiAwLFxuICAgIHBhcmVudCAgOiBudWxsLFxuICAgIGNoaWxkcmVuOiBbXSxcbn07XG5sZXQgaHRyZWVfY3Vyc29yID0gaHRyZWU7XG5mb3IobGV0IHRpdGxlIG9mIHRpdGxlcykge1xuICAgIGNvbnN0IGxldmVsID0gK3RpdGxlLnRhZ05hbWUuc2xpY2UoMSk7XG4gICAgXG4gICAgd2hpbGUoIGxldmVsIDw9IGh0cmVlX2N1cnNvci5sZXZlbCApXG4gICAgICAgIGh0cmVlX2N1cnNvciA9IGh0cmVlX2N1cnNvci5wYXJlbnQhO1xuXG4gICAgY29uc3QgZWxlbTogTm9kZSA9IHtcbiAgICAgICAgaHRtbDogdGl0bGUsXG4gICAgICAgIGxldmVsLFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgIHBhcmVudDogaHRyZWVfY3Vyc29yXG4gICAgfTtcblxuXG4gICAgaHRyZWVfY3Vyc29yLmNoaWxkcmVuLnB1c2goZWxlbSk7XG5cbiAgICBodHJlZV9jdXJzb3IgPSBlbGVtO1xufVxuXG5mdW5jdGlvbiBzZWFyY2hDdXJIZWFkZXIoaHRyZWU6IE5vZGUsIHBvc2l0aW9uOiBudW1iZXIpOiBudWxsIHwgTm9kZSB7XG5cbiAgICBjb25zdCBoZWFkZXJzID0gaHRyZWUuY2hpbGRyZW47XG5cbiAgICBmb3IobGV0IGkgPSBoZWFkZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKVxuICAgICAgICBpZiggaGVhZGVyc1tpXS5odG1sLm9mZnNldFRvcCA8PSBwb3NpdGlvbiArIDMyIClcbiAgICAgICAgICAgIHJldHVybiBzZWFyY2hDdXJIZWFkZXIoaGVhZGVyc1tpXSwgcG9zaXRpb24pID8/IGhlYWRlcnNbaV07XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuY29uc3QgaGlkID0gW1xuICAgIFtdLFxuICAgIFtcIklcIiwgXCJJSVwiLCBcIklJSVwiLCBcIklWXCJdLFxuICAgIFtcIjFcIiwgXCIyXCIsXCIzXCIsXCI1XCIsXCI2XCIsXCI3XCIsXCI4XCIsXCI5XCJdLFxuICAgIFtcImFcIiwgXCJiXCIsXCJjXCIsXCJkXCIsXCJlXCIsXCJmXCIsXCJnXCIsXCJoXCJdLFxuXVxuXG5mdW5jdGlvbiBnZXRUaXRsZVByZWZpeChzOiBOb2RlKSB7XG5cbiAgICBpZiggcy5sZXZlbCA+PSBoaWQubGVuZ3RoIClcbiAgICAgICAgcmV0dXJuIFwiXCI7XG5cbiAgICBjb25zdCBpZHggPSBzLnBhcmVudCEuY2hpbGRyZW4uaW5kZXhPZihzKTtcblxuICAgIGNvbnN0IG51bSA9IGhpZFtzLmxldmVsXVtpZHhdO1xuXG4gICAgcmV0dXJuIGAke251bX0uIGA7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTWVudShub2RlczogTm9kZVtdKSB7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuXG4gICAgbWVudS5hcHBlbmQoIC4uLiBub2Rlcy5tYXAoIChzLGlkeCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGl0ZW0udGV4dENvbnRlbnQ9IGAke2dldFRpdGxlUHJlZml4KHMpfSR7cy5odG1sLnRleHRDb250ZW50fWA7XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBgIyR7cy5odG1sLmlkfWApO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9KSApO1xuXG4gICAgcmV0dXJuIG1lbnU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUhlYWRlcigpIHtcblxuICAgIGNvbnN0IGxhc3QgPSBzZWFyY2hDdXJIZWFkZXIoIGh0cmVlLCBtYWluLnNjcm9sbFRvcCkhO1xuXG4gICAgbGV0IGhlYWRlcnMgPSBbXTtcbiAgICBsZXQgY3Vyc29yICA9IGxhc3Q7XG5cbiAgICB3aGlsZShjdXJzb3IuaHRtbCAhPT0gbWFpbikge1xuICAgICAgICBoZWFkZXJzLnB1c2goY3Vyc29yKTtcbiAgICAgICAgY3Vyc29yID0gY3Vyc29yLnBhcmVudCE7XG4gICAgfVxuXG4gICAgY29uc3QgaHRtbCA9IGhlYWRlcnMucmV2ZXJzZSgpLm1hcCggKGhub2RlLGkpID0+IHtcblxuICAgICAgICBjb25zdCBoID0gaG5vZGUuaHRtbDtcbiAgICAgICAgY29uc3QgaF9odG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gYCR7Z2V0VGl0bGVQcmVmaXgoaG5vZGUpfSR7aC50ZXh0Q29udGVudH1gO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGAjJHtoLmlkfWApO1xuXG4gICAgICAgIGNvbnN0IG1lbnUgPSBidWlsZE1lbnUoaG5vZGUucGFyZW50IS5jaGlsZHJlbik7XG4gICAgICAgIGhfaHRtbC5hcHBlbmQobGluaywgbWVudSk7XG5cbiAgICAgICAgcmV0dXJuIGhfaHRtbDtcbiAgICB9KTtcblxuICAgIGlmKCBsYXN0LmNoaWxkcmVuLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBjb25zdCBlbXB0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgICAgIGVtcHR5LmFwcGVuZCggYnVpbGRNZW51KGxhc3QuY2hpbGRyZW4pICk7XG5cbiAgICAgICAgaHRtbC5wdXNoKGVtcHR5KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VfcGFnZV9ocmVmKHBhdGhwcmVmaXg6IHN0cmluZywgcGF0aDogc3RyaW5nLCBkZXNjOiBhbnkpIHtcblxuICAgICAgICBsZXQgaHJlZiA9IGAke3BhdGhwcmVmaXh9JHtwYXRofS9gO1xuXG4gICAgICAgIHdoaWxlKGRlc2MuY2hpbGRyZW4/Lmxlbmd0aCkge1xuICAgICAgICAgICAgZGVzYyA9IGRlc2MuY2hpbGRyZW5bMF07XG4gICAgICAgICAgICBocmVmICs9IGAke2Rlc2MucGF0aCA/PyBkZXNjfS9gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGhyZWY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZV9wYWdlX21lbnUocGF0aHByZWZpeDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHBhZ2VzOiBhbnkpIHtcbiAgICAgICAgY29uc3QgZGVzYyA9IHBhZ2VzLmZpbmQoIChwYWdlOiBhbnkpID0+IHBhZ2UgPT09IHBhdGggfHwgcGFnZS5wYXRoID09PSBwYXRoICkhO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gZGVzYy5zbmFtZSA/PyBkZXNjLm5hbWUgPz8gZGVzYztcbiAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgbWFrZV9wYWdlX2hyZWYocGF0aHByZWZpeCwgcGF0aCwgZGVzYykgKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgICBcbiAgICAgICAgICAgIG1lbnUuYXBwZW5kKCAuLi4gcGFnZXMubWFwKCAocGFnZTphbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudD0gcGFnZS5uYW1lID8/IHBhZ2U7XG4gICAgICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIG1ha2VfcGFnZV9ocmVmKHBhdGhwcmVmaXgsIHBhZ2UucGF0aD8/cGFnZSwgcGFnZSkgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH0pICk7XG4gICAgXG4gICAgICAgICAgICBodG1sLmFwcGVuZChsaW5rLCBtZW51KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICBcbiAgICBsZXQgY3VycGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zbGljZShyb290X3BhdGgubGVuZ3RoKS5zcGxpdCgnLycpO1xuXG4gICAgY29uc3QgbW9kdWxlX2h0bWwgPSBtYWtlX3BhZ2VfbWVudShyb290X3BhdGgsIGN1cnBhZ2VbMF0sIHBhZ2VzKTtcblxuICAgIGNvbnN0IGRlc2MgPSBwYWdlcy5maW5kKCAocGFnZTogYW55KSA9PiBwYWdlLnBhdGggPT09IGN1cnBhZ2VbMF0gKSE7XG4gICAgY29uc3QgdHlwZV9odG1sICAgPSBtYWtlX3BhZ2VfbWVudShyb290X3BhdGggKyBjdXJwYWdlWzBdICsgXCIvXCIsIGN1cnBhZ2VbMV0sIGRlc2MuY2hpbGRyZW4pO1xuXG4gICAgY29uc3QgZGVzY190eXBlID0gZGVzYy5jaGlsZHJlbi5maW5kKCAocGFnZTogYW55KSA9PiAocGFnZT8ucGF0aCA/PyBwYWdlKSA9PT0gY3VycGFnZVsxXSApITtcbiAgICBpZiggdHlwZW9mIGRlc2NfdHlwZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAvLyB0aXRsZSBudW1cbiAgICAgICAgY29uc3QgZGVzYzJfaWR4ID0gZGVzY190eXBlLmNoaWxkcmVuLmZpbmRJbmRleCggKHBhZ2U6IGFueSkgPT4gcGFnZT8ucGF0aCA/PyBwYWdlID09PSBjdXJwYWdlWzJdICkhO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1oZWFkZXJfc3RhcnRfaWRcIiwgYCR7ZGVzYzJfaWR4fWApO1xuICAgICAgICAvLyBtZW51XG4gICAgICAgIGNvbnN0IHNlc3Npb25faHRtbCAgID0gbWFrZV9wYWdlX21lbnUocm9vdF9wYXRoICsgY3VycGFnZVswXSArIFwiL1wiKyBjdXJwYWdlWzFdICsgXCIvXCIsIGN1cnBhZ2VbMl0sIGRlc2NfdHlwZS5jaGlsZHJlbik7XG4gICAgICAgIGh0bWxbMF0gPSBzZXNzaW9uX2h0bWw7XG4gICAgfVxuXG4gICAgaGVhZGVyLnJlcGxhY2VDaGlsZHJlbihtb2R1bGVfaHRtbCwgdHlwZV9odG1sLCAuLi5odG1sKTtcbn1cblxubWFpbi5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGVIZWFkZXIpO1xudXBkYXRlSGVhZGVyKCk7IiwiLy9odHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80OTQxNDMvY3JlYXRpbmctYS1uZXctZG9tLWVsZW1lbnQtZnJvbS1hbi1odG1sLXN0cmluZy11c2luZy1idWlsdC1pbi1kb20tbWV0aG9kcy1vci1wcm9cbmV4cG9ydCBmdW5jdGlvbiBzdHIyaHRtbDxUIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KGh0bWw6IHN0cmluZyk6IFQge1xuICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgaHRtbCA9IGh0bWwudHJpbSgpOyAvLyBOZXZlciByZXR1cm4gYSB0ZXh0IG5vZGUgb2Ygd2hpdGVzcGFjZSBhcyB0aGUgcmVzdWx0XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZCEgYXMgVDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cjJERihodG1sOiBzdHJpbmcpOiBEb2N1bWVudEZyYWdtZW50IHtcbiAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIGh0bWwgPSBodG1sLnRyaW0oKTsgLy8gTmV2ZXIgcmV0dXJuIGEgdGV4dCBub2RlIG9mIHdoaXRlc3BhY2UgYXMgdGhlIHJlc3VsdFxuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQ7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsInZhciB3ZWJwYWNrUXVldWVzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBxdWV1ZXNcIikgOiBcIl9fd2VicGFja19xdWV1ZXNfX1wiO1xudmFyIHdlYnBhY2tFeHBvcnRzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBleHBvcnRzXCIpIDogXCJfX3dlYnBhY2tfZXhwb3J0c19fXCI7XG52YXIgd2VicGFja0Vycm9yID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBlcnJvclwiKSA6IFwiX193ZWJwYWNrX2Vycm9yX19cIjtcbnZhciByZXNvbHZlUXVldWUgPSAocXVldWUpID0+IHtcblx0aWYocXVldWUgJiYgcXVldWUuZCA8IDEpIHtcblx0XHRxdWV1ZS5kID0gMTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSkpO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tID8gZm4ucisrIDogZm4oKSkpO1xuXHR9XG59XG52YXIgd3JhcERlcHMgPSAoZGVwcykgPT4gKGRlcHMubWFwKChkZXApID0+IHtcblx0aWYoZGVwICE9PSBudWxsICYmIHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpIHtcblx0XHRpZihkZXBbd2VicGFja1F1ZXVlc10pIHJldHVybiBkZXA7XG5cdFx0aWYoZGVwLnRoZW4pIHtcblx0XHRcdHZhciBxdWV1ZSA9IFtdO1xuXHRcdFx0cXVldWUuZCA9IDA7XG5cdFx0XHRkZXAudGhlbigocikgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0V4cG9ydHNdID0gcjtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0sIChlKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXJyb3JdID0gZTtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0pO1xuXHRcdFx0dmFyIG9iaiA9IHt9O1xuXHRcdFx0b2JqW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAoZm4ocXVldWUpKTtcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHR9XG5cdHZhciByZXQgPSB7fTtcblx0cmV0W3dlYnBhY2tRdWV1ZXNdID0geCA9PiB7fTtcblx0cmV0W3dlYnBhY2tFeHBvcnRzXSA9IGRlcDtcblx0cmV0dXJuIHJldDtcbn0pKTtcbl9fd2VicGFja19yZXF1aXJlX18uYSA9IChtb2R1bGUsIGJvZHksIGhhc0F3YWl0KSA9PiB7XG5cdHZhciBxdWV1ZTtcblx0aGFzQXdhaXQgJiYgKChxdWV1ZSA9IFtdKS5kID0gLTEpO1xuXHR2YXIgZGVwUXVldWVzID0gbmV3IFNldCgpO1xuXHR2YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuXHR2YXIgY3VycmVudERlcHM7XG5cdHZhciBvdXRlclJlc29sdmU7XG5cdHZhciByZWplY3Q7XG5cdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlaikgPT4ge1xuXHRcdHJlamVjdCA9IHJlajtcblx0XHRvdXRlclJlc29sdmUgPSByZXNvbHZlO1xuXHR9KTtcblx0cHJvbWlzZVt3ZWJwYWNrRXhwb3J0c10gPSBleHBvcnRzO1xuXHRwcm9taXNlW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAocXVldWUgJiYgZm4ocXVldWUpLCBkZXBRdWV1ZXMuZm9yRWFjaChmbiksIHByb21pc2VbXCJjYXRjaFwiXSh4ID0+IHt9KSk7XG5cdG1vZHVsZS5leHBvcnRzID0gcHJvbWlzZTtcblx0Ym9keSgoZGVwcykgPT4ge1xuXHRcdGN1cnJlbnREZXBzID0gd3JhcERlcHMoZGVwcyk7XG5cdFx0dmFyIGZuO1xuXHRcdHZhciBnZXRSZXN1bHQgPSAoKSA9PiAoY3VycmVudERlcHMubWFwKChkKSA9PiB7XG5cdFx0XHRpZihkW3dlYnBhY2tFcnJvcl0pIHRocm93IGRbd2VicGFja0Vycm9yXTtcblx0XHRcdHJldHVybiBkW3dlYnBhY2tFeHBvcnRzXTtcblx0XHR9KSlcblx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRmbiA9ICgpID0+IChyZXNvbHZlKGdldFJlc3VsdCkpO1xuXHRcdFx0Zm4uciA9IDA7XG5cdFx0XHR2YXIgZm5RdWV1ZSA9IChxKSA9PiAocSAhPT0gcXVldWUgJiYgIWRlcFF1ZXVlcy5oYXMocSkgJiYgKGRlcFF1ZXVlcy5hZGQocSksIHEgJiYgIXEuZCAmJiAoZm4ucisrLCBxLnB1c2goZm4pKSkpO1xuXHRcdFx0Y3VycmVudERlcHMubWFwKChkZXApID0+IChkZXBbd2VicGFja1F1ZXVlc10oZm5RdWV1ZSkpKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZm4uciA/IHByb21pc2UgOiBnZXRSZXN1bHQoKTtcblx0fSwgKGVycikgPT4gKChlcnIgPyByZWplY3QocHJvbWlzZVt3ZWJwYWNrRXJyb3JdID0gZXJyKSA6IG91dGVyUmVzb2x2ZShleHBvcnRzKSksIHJlc29sdmVRdWV1ZShxdWV1ZSkpKTtcblx0cXVldWUgJiYgcXVldWUuZCA8IDAgJiYgKHF1ZXVlLmQgPSAwKTtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdtb2R1bGUnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTIvaW5kZXgudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00yL2luZGV4LmNzc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMi9pbmRleC5tZFwiKTtcbiIsIiJdLCJuYW1lcyI6WyJTaGFkb3dDZmciLCJfX2NzdHJfaG9zdCIsIkNBTl9IQVZFX1NIQURPVyIsIl9jYW5IYXNTaGFkb3ciLCJ0YWciLCJpbmNsdWRlcyIsIl9lbGVtZW50MnRhZ25hbWUiLCJMSVNTIiwiZXh0ZW5kcyIsInBfZXh0ZW5kcyIsImhvc3QiLCJwX2hvc3QiLCJkZXBlbmRlbmNpZXMiLCJwX2RlcHMiLCJhdHRyaWJ1dGVzIiwicF9hdHRycyIsInBhcmFtcyIsImNvbnRlbnQiLCJjc3MiLCJzaGFkb3ciLCJwX3NoYWRvdyIsIkhUTUxFbGVtZW50IiwiX2V4dGVuZHMiLCJPYmplY3QiLCJjYW5IYXNTaGFkb3ciLCJFcnJvciIsInVuZGVmaW5lZCIsInB1c2giLCJIVE1MVGVtcGxhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwidHJpbSIsIlJlc3BvbnNlIiwidGV4dCIsIkxJU1NCYXNlIiwiUGFyYW1ldGVycyIsInN0eWxlc2hlZXRzIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiZmV0Y2hfY3NzIiwiQ1NTU3R5bGVTaGVldCIsIkhUTUxTdHlsZUVsZW1lbnQiLCJzaGVldCIsInN0eWxlIiwicmVwbGFjZSIsIm1hcCIsImlkeCIsImNvbnN0cnVjdG9yIiwiYXR0cnMiLCJzZXRBdHRyRGVmYXVsdCIsImF0dHIiLCJ2YWx1ZSIsIm9uQXR0ckNoYW5nZWQiLCJfbmFtZSIsIl9vbGRWYWx1ZSIsIl9uZXdWYWx1ZSIsImlzSW5ET00iLCJvbkRPTUNvbm5lY3RlZCIsIm9uRE9NRGlzY29ubmVjdGVkIiwiZXh0ZW5kc0xJU1MiLCJMaXNzIiwicGFyYW1ldGVycyIsImFzc2lnbiIsIkV4dGVuZGVkTElTUyIsInQiLCJpZCIsImJ1aWxkTElTU0hvc3QiLCJfcGFyYW1zIiwiYWxyZWFkeURlY2xhcmVkQ1NTIiwiU2V0IiwiR0VUIiwiU3ltYm9sIiwiU0VUIiwicHJvcGVydGllcyIsImZyb21FbnRyaWVzIiwibiIsImVudW1lcmFibGUiLCJnZXQiLCJzZXQiLCJBdHRyaWJ1dGVzIiwibmFtZSIsImRhdGEiLCJkZWZhdWx0cyIsInNldHRlciIsImRlZmluZVByb3BlcnRpZXMiLCJMSVNTSG9zdEJhc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsImlzSW5pdCIsImluaXRpYWxpemUiLCJhcGkiLCJpbml0IiwiTElTU1N5bmMiLCJkaXNjb25uZWN0ZWRDYWxsYmFjayIsImNvbm5lY3RlZENhbGxiYWNrIiwiY3VzdG9tRWxlbWVudHMiLCJ1cGdyYWRlIiwiYXR0YWNoU2hhZG93IiwibW9kZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkNsaWNrRXZlbnQiLCJvYnMiLCJnZXRBdHRyaWJ1dGUiLCJhZG9wdGVkU3R5bGVTaGVldHMiLCJzaGFyZWRDU1MiLCJjc3NzZWxlY3RvciIsIkNTU1NlbGVjdG9yIiwiaGFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaHRtbF9zdHlsZXNoZWV0cyIsInJ1bGUiLCJjc3NSdWxlcyIsImNzc1RleHQiLCJoZWFkIiwiYXBwZW5kIiwiYWRkIiwidGVtcGxhdGVfZWxlbSIsInN0ciIsIl8iLCJtYXRjaCIsImNoaWxkTm9kZXMiLCJvYmoiLCJoYXNTaGFkb3ciLCJnZXRQYXJ0IiwicXVlcnlTZWxlY3RvciIsImdldFBhcnRzIiwicXVlcnlTZWxlY3RvckFsbCIsInRhZ05hbWUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJvYnNlcnZlZEF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2siLCJvbGRWYWx1ZSIsIm5ld1ZhbHVlIiwiX0RPTUNvbnRlbnRMb2FkZWQiLCJyZWFkeVN0YXRlIiwiZGVmaW5lIiwidGFnbmFtZSIsIkNvbXBvbmVudENsYXNzIiwiQ2xhc3MiLCJodG1sdGFnIiwiYWxsIiwiTElTU2NsYXNzIiwib3B0cyIsImluc2VydEdsb2JhbENTU1J1bGVzIiwiY3NzX3N0eWxlIiwicmVwbGFjZVN5bmMiLCJpbnNlcnRSdWxlIiwiREVMRUdBVEVEX0VWRU5UUyIsIkFMUkVBRFlfUFJPQ0VTU0VEIiwiZXYiLCJoYW5kbGVycyIsInR5cGUiLCJlbGVtIiwiY29tcG9zZWRQYXRoIiwiU2hhZG93Um9vdCIsIndpbmRvdyIsInRhcmdldCIsInNlbGVjdG9yIiwiaGFuZGxlciIsIm1hdGNoZXMiLCJpbnNlcnRHbG9iYWxEZWxlZ2F0ZWRMaXN0ZW5lciIsImV2ZW50X25hbWUiLCJjbG9zZXN0IiwiZWxlbWVudCIsInJlc3VsdCIsInJvb3QiLCJnZXRSb290Tm9kZSIsImJ1aWxkIiwicGFyZW50IiwiY2xhc3NlcyIsImNzc3ZhcnMiLCJsaXN0ZW5lcnMiLCJDdXN0b21DbGFzcyIsIndoZW5EZWZpbmVkIiwidG9Mb3dlckNhc2UiLCJjbGFzc0xpc3QiLCJzZXRQcm9wZXJ0eSIsInRvZ2dsZUF0dHJpYnV0ZSIsImRhdGFzZXQiLCJyZXBsYWNlQ2hpbGRyZW4iLCJnZXRMSVNTIiwiY2FsbGJhY2siLCJ3aGVuQWxsRGVmaW5lZCIsInRhZ25hbWVzIiwiaXNEZWZpbmVkIiwiZ2V0TmFtZSIsImdldExJU1NTeW5jIiwiX2J1aWxkUVMiLCJ0YWduYW1lX29yX3BhcmVudCIsInFzIiwicXNvIiwicXNhIiwiZWxlbWVudHMiLCJwcm9taXNlcyIsInFzYyIsInJlcyIsInFzU3luYyIsInFzYVN5bmMiLCJxc2NTeW5jIiwiTElTU19BdXRvIiwibmF2aWdhdG9yIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIiwiY29udHJvbGxlciIsInNyYyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwibXV0YXRpb24iLCJhZGRpdGlvbiIsImFkZGVkTm9kZXMiLCJFbGVtZW50Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJyZXNvdXJjZXMiLCJkZWZpbmVXZWJDb21wb25lbnQiLCJmaWxlcyIsImpzIiwia2xhc3MiLCJXZWJDb21wb25lbnQiLCJmaWxlbmFtZXMiLCJmaWxlIiwiZW5kc1dpdGgiLCJfaW1wb3J0IiwiX2ZldGNoVGV4dCIsImkiLCJDc3RtRXZlbnQiLCJDdXN0b21FdmVudCIsImFyZ3MiLCJkZXRhaWwiLCJmZXRjaFJlc291cmNlIiwicmVzb3VyY2UiLCJmZXRjaCIsInVyaSIsImlzTGlzc0F1dG8iLCJvcHRpb25zIiwiaGVhZGVycyIsInJlc3BvbnNlIiwic3RhdHVzIiwiZGVmYXVsdCIsImUiLCJjb25zb2xlIiwibG9nIiwiSFRNTENMQVNTX1JFR0VYIiwiZWxlbWVudE5hbWVMb29rdXBUYWJsZSIsImV4ZWMiLCJGb3JtYXRzIiwic2hlZXRfZm9ybWF0X2NvbnRlbnQiLCJnZXRSYW5nZSIsImZvcm1hdCIsImZvbnRfc2l6ZSIsImZvcmVncm91bmRfY29sb3IiLCJiYWNrZ3JvdW5kX2NvbG9yIiwic2hlZXRfdG9vbGJhcl9mb3JtYXRfY29udGVudCIsInN5bmNUbyIsImRpc2FibGVBbGxFeGNlcHQiLCJzaGVldF9hbGlnbiIsInNoZWV0X3Rvb2xiYXJfYWxpZ24iLCJldXJvcyIsInBvdXJjZW50IiwibnVtYmVyIiwiZGF0ZSIsInByZWNpc2lvbiIsInNoZWV0X3Rvb2xiYXIiLCJib3JkZXJfdG9wIiwiYm9yZGVyX2JvdHRvbSIsImJvcmRlcl9sZWZ0IiwiYm9yZGVyX3JpZ2h0IiwiYm9yZGVyX2NvbG9yIiwiaW5kZW50Iiwic3BhbiIsImFsaWduX2NlbnRlciIsInZhbGlnbl9taWRkbGUiLCJzdHIyaHRtbCIsIlJhbmdlT3ZlcmxheSIsIkV2ZW50VGFyZ2V0Iiwib3ZlcmxheSIsImNsYXNzbGlzdCIsInVwZGF0ZSIsInNldFJhbmdlIiwicmFuZ2UiLCJwbGFnZV9uYW1lIiwiZ2V0UmVjdCIsInJlY3QiLCJ0b2dnbGUiLCJzZXRSZWN0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkZvcm11bGFSZWYiLCJzZXRDb2xvciIsImNvbG9yX2lkIiwicmVtb3ZlIiwiUmVjb3B5SGFuZGxlIiwieCIsInkiLCJ3IiwiaCIsIkZvcm11bGEiLCJDYWxjU2hlZXQiLCJDZWxsTGlzdCIsIkZvcm1hdE1hbmFnZXIiLCJjdHJsS2V5IiwiY2hhbmdlZCIsImtleSIsInNlbGVjdGlvbiIsInRvZ2dsZUZvcm1hdCIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJkaXNwYXRjaEV2ZW50IiwiZmxvYXQyRGF0ZSIsImZsb2F0IiwiRGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwiZGF0ZTJGbG9hdCIsImJlZyIsImdldFRpbWUiLCJ0b0ZpeGVkIiwiZm9ybWF0UmF3IiwicHRoaXMiLCJyYXdDb250ZW50IiwidG9TdHJpbmciLCJjYWxsIiwiY2FjaGVkVmFsdWUiLCJwcmVjIiwidG9QcmVjaXNpb24iLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJnZXRTaGVldEZyb21DZWxsIiwidG9Mb2NhbGVTdHJpbmciLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJzbGljZSIsIkZvcm1hdCIsImFwcGx5VG8iLCJjZWxsIiwiYyIsImNlbGxzIiwidmFsIiwidGV4dENvbnRlbnQiLCJyIiwiaiIsInJlbGF0aXZlVG8iLCJzdGFydHNXaXRoIiwiZ2V0UHJvcGVydHkiLCJoYXNQcm9wZXJ0eSIsImV4dHJhY3RGb3JtYXQiLCJmMiIsInZhbHVlcyIsIml0ZW0iLCJnZXRQcm9wZXJ0eVZhbHVlIiwiY29sc3BhbiIsInJvd3NwYW4iLCJoYXNBdHRyaWJ1dGUiLCJDYWxjRm9ybXVsYSIsInN0YXRlcyIsImNlbGxfZWRpdCIsInN0YXRlIiwiY3Vyc29yIiwiZmlyc3RDZWxsIiwiaXNSTyIsInJhbmdlc190b2tlbiIsImRyb3ciLCJkY29sIiwibmV3X3JhbmdlcyIsInBvcyIsImNlbGxQb3MiLCJsYXN0SW5kZXhPZiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm5ld19mb3JtdWxhIiwib2Zmc2V0IiwiZW5kIiwicGFyc2VfZm9ybXVsYSIsInJhbmdlc1Rva2VuIiwicmVzZXRDYWNoZSIsImV4dHJhY3RUb2tlbiIsInRva2VuIiwiaGFzQ29tbWEiLCJOb2RlIiwiY2hpbGRyZW4iLCJmY3QiLCJldmFsIiwidG9OdW1iZXIiLCJhIiwiTnVtYmVyIiwib3BfaW1wbCIsImIiLCJNYXRoIiwicG93Iiwib3BfcHJpbyIsIm9wcyIsIm9wIiwidG9rZW5saXN0MlRyZWUiLCJ0b2tlbnMiLCJuYiIsInJhdyIsImN1ciIsInByaW9yaXR5IiwiZmluZEluZGV4IiwidV9vcCIsIm9wX3Rva2VuIiwibGVmdCIsInJpZ2h0IiwiY3VyVG9rZW4iLCJub2RlIiwicmFuZ2VzIiwiZmlsdGVyIiwiUGxhZ2VGb3JtdWxhIiwiY29kZSIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInNlbGVjdGVkIiwiZ2V0Q2VsbHMiLCJjbGVhciIsImJsdXIiLCJQbGFnZVNlbGVjdG9yIiwic2VsZWN0ZWRfY2VsbHMiLCJjb2xzIiwidGJvZHkiLCJjb2xfaWQiLCJjbGllbnRYIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwicm93cyIsInJvd19pZCIsImNsaWVudFkiLCJtYWluIiwib25fbW91c2VfbW92ZSIsInJlcGxhY2VBbGwiLCJnZXRWaXNpYmxlQ2VsbCIsInJlZiIsInBvczJyZWYiLCJuYlJvd3MiLCJuYkNvbHMiLCJvbmNlIiwiaXNBY3RpdmUiLCJvbklucHV0IiwicnJhbmdlIiwiZ2V0U2VsZWN0aW9uIiwiZ2V0UmFuZ2VBdCIsInN0YXJ0T2Zmc2V0IiwiY2hpbGQiLCJub2RlVHlwZSIsIlRFWFRfTk9ERSIsInN0YXJ0Q29udGFpbmVyIiwiY3JlYXRlUmFuZ2UiLCJzZWwiLCJzZXRTdGFydCIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJwYXJzZUlucHV0IiwidGVzdF9udW1iZXIiLCJpc05hTiIsInBhcnRzIiwic3BsaXQiLCJ0ZXN0X2RhdGUiLCJnZXRGdWxsWWVhciIsIlN0YXRlIiwicHJldl9zdGF0ZSIsIlN0YXRlcyIsImVudHJpZXMiLCJzIiwidGJsX29mZnNldCIsIm9mZnNldFRvcCIsInN0YXJ0Iiwib2Zmc2V0TGVmdCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0Iiwicm93X2RpZmYiLCJjb2xfZGlmZiIsInJvdyIsImNvbCIsInJlY29weSIsImNvcHkiLCJsYXN0X3JlY29weV90YXJnZXQiLCJsYXN0X3JlY29weV9kaXIiLCJvbl9yZWNvcHlfbW92ZSIsImRfcHgiLCJ3aWR0aCIsImRfcHkiLCJoZWlnaHQiLCJkX3giLCJkX3kiLCJzaWduIiwiYWJzIiwicHJldiIsImRpZmZfeCIsImRpZmZfeSIsInBvc19jdXIiLCJjbGFzc05hbWUiLCJmb3JtdWxhX2JhciIsInBsYWdlIiwiZm9ybXVsYSIsInJvIiwiaXNfcm8iLCJmb2N1cyIsImRfcm93IiwiZF9jb2wiLCJuZXh0IiwiYWx0S2V5IiwiZHN0IiwiZGVlcENsb25lIiwiZGVsZXRlRm9ybWF0IiwiZGVsZXRlQ29udGVudCIsImJ1YmJsZXMiLCJvbklucHV0MiIsInJhbmdlc19jb2xvcnMiLCJjdXJfb2Zmc2V0IiwicmFuZ2VfbmFtZSIsInJhbmdlc19uYW1lcyIsImtleXMiLCJ3YXJuIiwicGFyZW50RWxlbWVudCIsInJlc2l6ZSIsIm5icm93cyIsIm5iY29scyIsImNvbF9odG1sIiwidGgiLCJyb3dfaHRtbCIsInRhYmxlIiwicmVzaXplT2JzIiwiUmVzaXplT2JzZXJ2ZXIiLCJmcm9tIiwidG8iLCJIVE1MVGFibGVDZWxsRWxlbWVudCIsInJlZjJwb3MiLCJiZWdfcm93IiwiYmVnX2NvbCIsImVuZF9yb3ciLCJlbmRfY29sIiwiZW5kX2xpbmVfY29sIiwic2VwIiwic2VhcmNoIiwiY2hhckNvZGVBdCIsImNvbF9zdHIiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNvcnQiLCJtaW4iLCJtYXgiLCJuYl9jb2xzIiwiZmxvb3IiLCJmIiwiaXNGb3JtYXQiLCJyYXdfdmFsIiwidiIsImRpZmYiLCJmb3JtYXRzIiwibmJfZGF0ZXMiLCJpbmRleE9mIiwic2V0Uk8iLCJjbG9uZSIsImNsb25lTm9kZSIsIm1lcmdlIiwiY2VsbGxpc3QiLCJpc19hbGlnbiIsInVubWVyZ2UiLCJyZXRyYWl0IiwiZGVsdGFfaW5kZW50IiwibmV3X2Zvcm1hdCIsImFsaWduX2xlZnQiLCJkZWx0YV9wcmVjIiwiZmN0cyIsImFjdGlvbiIsImVuYWJsZWQiLCJ1bm1lcmdlZCIsIml0ZW1jc3MiLCJDYWxjVG9vbGJhckl0ZW0iLCJjb2xvcl9waWNrZXIiLCJjYW5jZWwiLCJib2R5IiwiY2xpY2siLCJDYWxjVG9vbGJhciIsImV4Y2VwdGlvbiIsImJ0bl9uYW1lIiwiZm9udF9zaXplcyIsImJ0bnMiLCJidG4iLCJmb250X3NpemVzX3NlbGVjdCIsIm9wdGlvbiIsIk9wdGlvbiIsInNuYW1lIiwicGF0aCIsInJvb3RfcGF0aCIsImhvc3RuYW1lIiwicGFnZXMiLCJoZWFkZXIiLCJ0aXRsZXMiLCJodHJlZSIsImh0bWwiLCJsZXZlbCIsImh0cmVlX2N1cnNvciIsInRpdGxlIiwic2VhcmNoQ3VySGVhZGVyIiwicG9zaXRpb24iLCJoaWQiLCJnZXRUaXRsZVByZWZpeCIsIm51bSIsImJ1aWxkTWVudSIsIm5vZGVzIiwibWVudSIsInVwZGF0ZUhlYWRlciIsImxhc3QiLCJzY3JvbGxUb3AiLCJyZXZlcnNlIiwiaG5vZGUiLCJoX2h0bWwiLCJsaW5rIiwiZW1wdHkiLCJtYWtlX3BhZ2VfaHJlZiIsInBhdGhwcmVmaXgiLCJkZXNjIiwiaHJlZiIsIm1ha2VfcGFnZV9tZW51IiwiZmluZCIsInBhZ2UiLCJjdXJwYWdlIiwibW9kdWxlX2h0bWwiLCJ0eXBlX2h0bWwiLCJkZXNjX3R5cGUiLCJkZXNjMl9pZHgiLCJzZXNzaW9uX2h0bWwiLCJ0ZW1wbGF0ZSIsInN0cjJERiJdLCJzb3VyY2VSb290IjoiIn0=