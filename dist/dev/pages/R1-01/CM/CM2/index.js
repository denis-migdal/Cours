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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL0NvdXJzLy4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMi9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00yL2luZGV4Lm1kIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9Db3Vycy8uL2xpYnMvTElTUy9pbmRleC50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvUmFuZ2VPdmVybGF5LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL2Zvcm1hdC50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9mb3JtdWxhX2VkaXRvci50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9mb3JtdWxhX3BhcnNlci50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9wbGFnZV9lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvcGxhZ2Vfc2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvc2hlZXQudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvdG9vbGJhci50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY29udGVudC50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvbWVudS50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvdXRpbHMvc3RyMmh0bWwudHMiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL2FzeW5jIG1vZHVsZSIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicGFnZXMvUjEtMDEvQ00vQ00yL2luZGV4Lmh0bWxcIjsiLCJleHBvcnQgZGVmYXVsdCBcIjpob3N0IHRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICAgICYgPiB0Ym9keSB7XFxuICAgICAgICBvdXRsaW5lOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgJiA+IHRib2R5ID4gdHI6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBcXG4gICAgICAgICYgPiB0aCB7XFxuICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuOmhvc3QgOmlzKHRyLHRoLHRkKSB7XFxuICAgIGJvcmRlcjoxcHggc29saWQgI2MwYzBjMDtcXG4gfVxcblxcbjpob3N0IHRyIHtcXG4gICAgaGVpZ2h0OiAwLjQ1Y207XFxuICAgIGxpbmUtaGVpZ2h0OiAwLjQ1Y207XFxufVxcblxcblxcbjpob3N0IDppcyh0ZCwgdGgpOm5vdChbY29udGVudGVkaXRhYmxlXSkge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLypcXG46aG9zdCB0ZFtjb250ZW50ZWRpdGFibGVdIHtcXG4gICAgdXNlci1zZWxlY3Q6IHRleHQ7XFxufSovXFxuXFxuOmhvc3QgOmlzKHRkLCB0aCkge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiAyLjI2Y207XFxuICAgIGhlaWdodDogMC40NWNtO1xcblxcbiAgICBmb250LXNpemU6IDEwcHQ7XFxuXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGliZXJhdGlvbiBTYW5zJztcXG59XFxuXFxuOmhvc3QgdHIgPiB0aDpmaXJzdC1jaGlsZCB7XFxuICAgIHdpZHRoOiBjYWxjKCAyLjI2Y20gLyAyLjUpIDtcXG59XFxuXFxuOmhvc3Qge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuOmhvc3QgZGl2LnRvb2xiYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgcGFkZGluZzogNHB4O1xcblxcbiAgICAmID4gKjpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICAgICAgICBmbGV4OiAxIDEgMDtcXG4gICAgfVxcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICB3aWR0aDogY2FsYyggMS41ICogMi4yNmNtICk7XFxuICAgIH1cXG59XFxuXFxuOmhvc3QgdGgge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xcbiAgICBib3JkZXItY29sb3I6ICM4YThhOGE7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuXFxuICAgICYuaGlnaGxpZ2h0IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzOThlZTc7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgIH1cXG59XFxuXFxuOmhvc3QoLmNlbGxfZWRpdCkgLmN1cnNvciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbjpob3N0KC5yZWNvcHkpIHtcXG4gICAgY3Vyc29yOiBjZWxsO1xcbn1cXG5cXG46aG9zdCB7XFxuXFxuICAgIC5yZWNvcHkge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBjdXJzb3I6IGNlbGw7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk4ZWU3O1xcblxcbiAgICB9XFxuXFxuICAgIC5jdXJzb3Ige1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzM5OGVlNztcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB9XFxufVxcblxcbjpob3N0IC5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG46aG9zdCB0ZCB7XFxuXFxuICAgIC0tZm9udF9zaXplOiAxMHB0O1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRfc2l6ZSk7XFxuICAgIGxpbmUtaGVpZ2h0OiBjYWxjKCB2YXIoLS1mb250X3NpemUpICogMS4yICk7XFxuXFxuICAgIC0taW5kZW50OiAwO1xcblxcbiAgICAtLWJvcmRlcl9jb2xvcjogYmxhY2s7XFxuICAgIC0tYmFja2dyb3VuZF9jb2xvcjogd2hpdGU7XFxuICAgIC0tZm9yZWdyb3VuZF9jb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmRfY29sb3IpO1xcbiAgICBjb2xvciAgICAgICAgICAgOiB2YXIoLS1mb3JlZ3JvdW5kX2NvbG9yKTtcXG5cXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcXG5cXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG5cXG4gICAgJjppcyhbZGF0YS10eXBlPVxcXCJudW1iZXJcXFwiXSxbZGF0YS10eXBlPVxcXCJwb3VyY2VudFxcXCJdLFtkYXRhLXR5cGU9XFxcImRhdGVcXFwiXSwgW2RhdGEtdHlwZT1cXFwiYm9vbGVhblxcXCJdKSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgfVxcblxcbiAgICAmW2NvbnRlbnRlZGl0YWJsZV0ge1xcbiAgICAgICAgb3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICB9XFxuXFxuICAgICYuYWp1c3RlciB7XFxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgICB9XFxuXFxuICAgICYuaGlnaGxpZ2h0IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjZGUzZjk7XFxuICAgIH1cXG5cXG4gICAgLyoqIHN0eWxlICoqL1xcbiAgICAmLml0YWxpYyB7XFxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIH1cXG4gICAgJi5ib2xkIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB9XFxuICAgICYudW5kZXJsaW5lIHtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB9XFxuICAgICYuYWxpZ25fbGVmdCB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoIHZhcigtLWluZGVudCkgKiAxMHB4KTtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIH1cXG4gICAgJi5hbGlnbl9jZW50ZXIge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgICYuYWxpZ25fcmlnaHQge1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyggdmFyKC0taW5kZW50KSAqIDEwcHgpO1xcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIH1cXG4gICAgJi52YWxpZ25fdG9wIHtcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIH1cXG4gICAgJi52YWxpZ25fbWlkZGxlIHtcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIH1cXG4gICAgJi52YWxpZ25fYm90dG9tIHtcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICAgIH1cXG4gICAgLyogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTI0MTc1Ny9hcHBseWluZy1ib3JkZXJzLXRvLWEtc2luZ2xlLXRhYmxlLWNlbGwtd2hlbi11c2luZy1ib3JkZXItY29sbGFwc2UgKi9cXG4gICAgJi5ib3JkZXJfdG9wIHtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBkb3VibGUgdmFyKC0tYm9yZGVyX2NvbG9yKTtcXG4gICAgfVxcbiAgICAmLmJvcmRlcl9ib3R0b20ge1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdWJsZSB2YXIoLS1ib3JkZXJfY29sb3IpO1xcbiAgICB9XFxuICAgICYuYm9yZGVyX2xlZnQge1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBkb3VibGUgdmFyKC0tYm9yZGVyX2NvbG9yKTtcXG4gICAgfVxcbiAgICAmLmJvcmRlcl9yaWdodCB7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBkb3VibGUgdmFyKC0tYm9yZGVyX2NvbG9yKTtcXG4gICAgfVxcbn1cXG5cXG46aG9zdCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuOmhvc3QgLnJhbmdlX2hpZ2hsaWdodCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcblxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWhpZ2hsaWdodF9jb2xvcik7XFxufVxcblxcbjpob3N0IC5mb3JtdWxhX2hpZ2hsaWdodCB7XFxuICAgIGNvbG9yOiB2YXIoLS1oaWdobGlnaHRfY29sb3IpO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzAge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogI2ZhMGMwYztcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF8xIHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICNmYTBjZmE7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfMiB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjMGM4NDBjO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzMge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzAxMDE4MDtcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF80IHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICM4NzE3MTc7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfNSB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjODcxNzg3O1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzYge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzg0ODQwYztcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF83IHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICMwYzBjZmE7XFxufVxcblxcblxcbi5jb3B5X2hpZ2hsaWdodCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogVG9tb3Jyb3cgVGhlbWUgKi9cXG4vKiBodHRwOi8vam1ibG9nLmdpdGh1Yi5jb20vY29sb3ItdGhlbWVzLWZvci1nb29nbGUtY29kZS1oaWdobGlnaHRqcyAqL1xcbi8qIE9yaWdpbmFsIHRoZW1lIC0gaHR0cHM6Ly9naXRodWIuY29tL2Nocmlza2VtcHNvbi90b21vcnJvdy10aGVtZSAqL1xcblxcbi8qIFRvbW9ycm93IENvbW1lbnQgKi9cXG4uaGxqcy1jb21tZW50LFxcbi5obGpzLXF1b3RlIHtcXG5cXHRjb2xvcjogIzhlOTA4YztcXG59XFxuXFxuLyogVG9tb3Jyb3cgUmVkICovXFxuLmhsanMtdmFyaWFibGUsXFxuLmhsanMtdGVtcGxhdGUtdmFyaWFibGUsXFxuLmhsanMtdGFnLFxcbi5obGpzLW5hbWUsXFxuLmhsanMtc2VsZWN0b3ItaWQsXFxuLmhsanMtc2VsZWN0b3ItY2xhc3MsXFxuLmhsanMtcmVnZXhwLFxcbi5obGpzLWRlbGV0aW9uIHtcXG5cXHRjb2xvcjogI2M4MjgyOTtcXG59XFxuXFxuLyogVG9tb3Jyb3cgT3JhbmdlICovXFxuLmhsanMtbnVtYmVyLFxcbi5obGpzLWJ1aWx0X2luLFxcbi5obGpzLWJ1aWx0aW4tbmFtZSxcXG4uaGxqcy1saXRlcmFsLFxcbi5obGpzLXR5cGUsXFxuLmhsanMtcGFyYW1zLFxcbi5obGpzLW1ldGEsXFxuLmhsanMtbGluayB7XFxuXFx0Y29sb3I6ICNmNTg3MWY7XFxufVxcblxcbi8qIFRvbW9ycm93IFllbGxvdyAqL1xcbi5obGpzLWF0dHJpYnV0ZSB7XFxuXFx0Y29sb3I6ICNlYWI3MDA7XFxufVxcblxcbi8qIFRvbW9ycm93IEdyZWVuICovXFxuLmhsanMtc3RyaW5nLFxcbi5obGpzLXN5bWJvbCxcXG4uaGxqcy1idWxsZXQsXFxuLmhsanMtYWRkaXRpb24ge1xcblxcdGNvbG9yOiAjNzE4YzAwO1xcbn1cXG5cXG4vKiBUb21vcnJvdyBCbHVlICovXFxuLmhsanMtdGl0bGUsXFxuLmhsanMtc2VjdGlvbiB7XFxuXFx0Y29sb3I6ICM0MjcxYWU7XFxufVxcblxcbi8qIFRvbW9ycm93IFB1cnBsZSAqL1xcbi5obGpzLWtleXdvcmQsXFxuLmhsanMtc2VsZWN0b3ItdGFnIHtcXG5cXHRjb2xvcjogIzg5NTlhODtcXG59XFxuXFxuLmhsanMge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdG92ZXJmbG93LXg6IGF1dG87XFxuXFx0Y29sb3I6ICM0ZDRkNGM7XFxuXFx0cGFkZGluZzogMC41ZW07XFxufVxcblxcbi5obGpzLWVtcGhhc2lzIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5obGpzLXN0cm9uZyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiOyIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgZXhwb3J0ZWQgdHlwZXMgPT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgQ1NTX1Jlc291cmNlID0gc3RyaW5nfFJlc3BvbnNlfEhUTUxTdHlsZUVsZW1lbnR8Q1NTU3R5bGVTaGVldDtcbmV4cG9ydCB0eXBlIENTU19Tb3VyY2UgICA9IENTU19SZXNvdXJjZSB8IFByb21pc2U8Q1NTX1Jlc291cmNlPjtcblxuZXhwb3J0IHR5cGUgSFRNTF9SZXNvdXJjZSA9IHN0cmluZ3xSZXNwb25zZXxIVE1MVGVtcGxhdGVFbGVtZW50O1xuZXhwb3J0IHR5cGUgSFRNTF9Tb3VyY2UgICA9IEhUTUxfUmVzb3VyY2UgfCBQcm9taXNlPEhUTUxfUmVzb3VyY2U+O1xuXG5leHBvcnQgdHlwZSBMSVNTT3B0aW9uczxFeHRlbmRzICAgIGV4dGVuZHMgQ2xhc3MsXG5cdFx0XHRcdFx0XHRIb3N0ICAgICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0XHRBdHRycyAgICAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdFx0UGFyYW1ldGVycyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+ID0ge1xuXG5cdGV4dGVuZHM/OiBDb25zdHJ1Y3RvcjxFeHRlbmRzPixcblx0aG9zdCAgID86IENvbnN0cnVjdG9yPEhvc3Q+LFxuXG5cdGRlcGVuZGVuY2llcz86IHJlYWRvbmx5IFByb21pc2U8YW55PltdLFxuXHRhdHRyaWJ1dGVzICA/OiByZWFkb25seSBBdHRyc1tdLFxuXHRwYXJhbXMgICAgICA/OiBSZWFkb25seTxQYXJhbWV0ZXJzPixcblxuXHRjb250ZW50PzogSFRNTF9Tb3VyY2UsXG5cdGNzcyAgICA/OiAgQ1NTX1NvdXJjZSB8IHJlYWRvbmx5IENTU19Tb3VyY2VbXSxcblx0c2hhZG93ID86ICBTaGFkb3dDZmcsXG59O1xuXG5leHBvcnQgZW51bSBTaGFkb3dDZmcge1xuXHROT05FID0gJ25vbmUnLFxuXHRPUEVOID0gJ29wZW4nLCBcblx0Q0xPU0U9ICdjbG9zZWQnXG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIENsYXNzID09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmxldCBfX2NzdHJfaG9zdCAgOiBhbnkgPSBudWxsO1xuXG50eXBlIENvbnN0cnVjdG9yPFQ+ID0gbmV3ICgpID0+IFQ7XG5pbnRlcmZhY2UgQ2xhc3Mge31cblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvYXR0YWNoU2hhZG93XG5jb25zdCBDQU5fSEFWRV9TSEFET1cgPSBbXG5cdG51bGwsICdhcnRpY2xlJywgJ2FzaWRlJywgJ2Jsb2NrcXVvdGUnLCAnYm9keScsICdkaXYnLFxuXHQnZm9vdGVyJywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2hlYWRlcicsICdtYWluJyxcblx0J25hdicsICdwJywgJ3NlY3Rpb24nLCAnc3Bhbidcblx0XG5dO1xuZnVuY3Rpb24gX2Nhbkhhc1NoYWRvdyh0YWc6IHR5cGVvZiBIVE1MRWxlbWVudCkge1xuXHRyZXR1cm4gQ0FOX0hBVkVfU0hBRE9XLmluY2x1ZGVzKCBfZWxlbWVudDJ0YWduYW1lKHRhZykgKTtcbn1cblxudHlwZSBSZXNvdXJjZSA9IFVSTHxSZXNwb25zZTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMSVNTPEV4dGVuZHMgICAgZXh0ZW5kcyBDbGFzcyAgICAgICAgICAgICAgPSBDbGFzcyxcblx0XHRcdFx0XHRcdFx0IEhvc3QgICAgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCAgICAgICAgPSBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHRcdFx0IEF0dHJzICAgICAgZXh0ZW5kcyBzdHJpbmcgICAgICAgICAgICAgPSBuZXZlcixcblx0XHRcdFx0XHRcdFx0IFBhcmFtZXRlcnMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4gPSB7fT4oe1xuXHRcdFx0XHRcdFx0XHRcdGV4dGVuZHMgICAgIDogcF9leHRlbmRzLFxuXHRcdFx0XHRcdFx0XHRcdGhvc3QgICAgICAgIDogcF9ob3N0LFxuXHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY2llczogcF9kZXBzLFxuXHRcdFx0XHRcdFx0XHQgICAgYXR0cmlidXRlcyAgOiBwX2F0dHJzLFxuXHRcdFx0XHRcdFx0XHQgICAgcGFyYW1zLFxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQsXG5cdFx0XHRcdFx0XHRcdFx0Y3NzLFxuXHRcdFx0XHRcdFx0XHRcdHNoYWRvdyAgICAgIDogcF9zaGFkb3csXG5cdFx0XHRcdFx0XHRcdH06IExJU1NPcHRpb25zPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbWV0ZXJzPiA9IHt9KSB7XG5cblx0Ly9UT0RPIG1lcmdlIHByb3AgaWYgZXh0ZW5kcyBMSVNTLi4uXG5cblx0Y29uc3QgaG9zdCAgICAgICAgPSBwX2hvc3QgICAgPz8gSFRNTEVsZW1lbnQgYXMgQ29uc3RydWN0b3I8SG9zdD47XG5cdGNvbnN0IF9leHRlbmRzICAgID0gcF9leHRlbmRzID8/IE9iamVjdCAgICAgIGFzIHVua25vd24gYXMgQ29uc3RydWN0b3I8RXh0ZW5kcz47XG5cdGNvbnN0IGF0dHJpYnV0ZXMgID0gcF9hdHRycyAgID8/IFtdO1xuXHRjb25zdCBkZXBlbmRlbmNpZXM9IHBfZGVwcyAgICA/IFsuLi5wX2RlcHNdIDogW107XG5cdGNvbnN0IGNhbkhhc1NoYWRvdz0gX2Nhbkhhc1NoYWRvdyhob3N0KTtcblx0Y29uc3Qgc2hhZG93ICAgICAgPSBwX3NoYWRvdyAgPz8gKGNhbkhhc1NoYWRvdyA/IFNoYWRvd0NmZy5DTE9TRSA6IFNoYWRvd0NmZy5OT05FKTtcblxuXHRpZiggISBjYW5IYXNTaGFkb3cgJiYgc2hhZG93ICE9PSBTaGFkb3dDZmcuTk9ORSlcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEhvc3QgZWxlbWVudCAke19lbGVtZW50MnRhZ25hbWUoaG9zdCl9IGRvZXMgbm90IHN1cHBvcnQgU2hhZG93Um9vdGApO1xuXG5cdC8vIENPTlRFTlQgcHJvY2Vzc2luZ1xuXHRpZiggY29udGVudCAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0ZGVwZW5kZW5jaWVzLnB1c2goICggYXN5bmMgKCkgPT4ge1xuXG5cdFx0XHRjb250ZW50ID0gYXdhaXQgY29udGVudDtcblxuXHRcdFx0aWYoY29udGVudCBpbnN0YW5jZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQpXG5cdFx0XHRjb250ZW50ID0gY29udGVudC5pbm5lckhUTUw7XG5cblx0XHRcdGlmKCB0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikge1xuXG5cdFx0XHRcdGNvbnRlbnQgPSBjb250ZW50LnRyaW0oKTsgLy8gTmV2ZXIgcmV0dXJuIGEgdGV4dCBub2RlIG9mIHdoaXRlc3BhY2UgYXMgdGhlIHJlc3VsdFxuXHRcdFx0XHRpZihjb250ZW50ID09PSAnJylcblx0XHRcdFx0XHRjb250ZW50ID0gdW5kZWZpbmVkO1xuXG5cdFx0XHR9XG5cdFx0XHRpZiggY29udGVudCBpbnN0YW5jZW9mIFJlc3BvbnNlIClcblx0XHRcdFx0Y29udGVudCA9IGF3YWl0IGNvbnRlbnQudGV4dCgpO1xuXG5cdFx0XHRyZXR1cm4gTElTU0Jhc2UuUGFyYW1ldGVycy5jb250ZW50ID0gY29udGVudDtcblx0XHR9KSgpICk7XG5cdH1cblxuXHQvLyBDU1MgcHJvY2Vzc2luZ1xuXHRsZXQgc3R5bGVzaGVldHM6IHJlYWRvbmx5IENTU1N0eWxlU2hlZXRbXSA9IFtdO1xuXHRpZiggY3NzICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRpZiggISBBcnJheS5pc0FycmF5KGNzcykgKVxuXHRcdFx0Y3NzID0gW2NzcyBhcyBDU1NfU291cmNlXTtcblxuXHRcdHN0eWxlc2hlZXRzID0gbmV3IEFycmF5PENTU1N0eWxlU2hlZXQ+KGNzcy5sZW5ndGgpO1xuXG5cdFx0Y29uc3QgZmV0Y2hfY3NzID0gKGFzeW5jIChjc3M6IENTU19Tb3VyY2UpID0+IHtcblx0XHRcdGNzcyA9IGF3YWl0IGNzcztcblx0XHRcdGlmKGNzcyBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQpXG5cdFx0XHRcdHJldHVybiBjc3M7XG5cdFx0XHRpZiggY3NzIGluc3RhbmNlb2YgSFRNTFN0eWxlRWxlbWVudClcblx0XHRcdFx0cmV0dXJuIGNzcy5zaGVldCE7XG5cblx0XHRcdGxldCBzdHlsZSA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG5cdFx0XHRpZiggdHlwZW9mIGNzcyA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdFx0c3R5bGUucmVwbGFjZShjc3MpO1xuXHRcdFx0XHRyZXR1cm4gc3R5bGU7XG5cdFx0XHR9XG5cblx0XHRcdC8vaWYoIGNzcyBpbnN0YW5jZW9mIFJlc3BvbnNlIClcblx0XHRcdHN0eWxlLnJlcGxhY2UoYXdhaXQgY3NzLnRleHQoKSk7XG5cdFx0XHRyZXR1cm4gc3R5bGU7XG5cdFx0fSk7XG5cblx0XHRkZXBlbmRlbmNpZXMucHVzaCggLi4uY3NzLm1hcCggYXN5bmMgKGNzcywgaWR4KSA9PiAgKHN0eWxlc2hlZXRzIGFzIGFueSlbaWR4XSA9IGF3YWl0IGZldGNoX2Nzcyhjc3MpICkgKTtcblx0fVxuXG5cdHR5cGUgTEhvc3QgPSBMSVNTSG9zdDxMSVNTQmFzZT47XG5cblx0Ly8gQHRzLWlnbm9yZVxuXHRjbGFzcyBMSVNTQmFzZSBleHRlbmRzIF9leHRlbmRzIHtcblxuXHRcdHJlYWRvbmx5ICNob3N0OiBhbnk7IC8vIHByZXZlbnRzIGlzc3VlICMxLi4uXG5cblx0XHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdFx0c3VwZXIoKTtcblxuXHRcdFx0Ly8gaDRjaywgb2theSBiZWNhdXNlIEpTIGlzIG1vbm90aHJlYWRlZC5cblx0XHRcdGlmKCBfX2NzdHJfaG9zdCA9PT0gbnVsbCApXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBkbyBub3QgZGlyZWN0bHkgY2FsbCB0aGlzIGNvbnN0cnVjdG9yXCIpO1xuXHRcdFx0dGhpcy4jaG9zdCA9IF9fY3N0cl9ob3N0O1xuXHRcdFx0X19jc3RyX2hvc3QgPSBudWxsO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBnZXQgaG9zdCgpOiBIb3N0IHtcblx0XHRcdHJldHVybiB0aGlzLiNob3N0O1xuXHRcdH1cblx0XHRwcm90ZWN0ZWQgZ2V0IGF0dHJzKCkge1xuXHRcdFx0cmV0dXJuICh0aGlzLiNob3N0IGFzIExIb3N0KS5hdHRycztcblx0XHR9XG5cdFx0cHJvdGVjdGVkIHNldEF0dHJEZWZhdWx0KCBhdHRyOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuI2hvc3QgYXMgTEhvc3QpLnNldEF0dHJEZWZhdWx0KGF0dHIsIHZhbHVlKTtcblxuXHRcdH1cblx0XHRwcm90ZWN0ZWQgZ2V0IHBhcmFtcygpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkucGFyYW1zO1xuXHRcdH1cblx0XHRwcm90ZWN0ZWQgZ2V0IGNvbnRlbnQoKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuI2hvc3QgYXMgTEhvc3QpLmNvbnRlbnQhO1xuXHRcdH1cblxuXHRcdHN0YXRpYyByZWFkb25seSBQYXJhbWV0ZXJzID0ge1xuXHRcdFx0aG9zdCxcblx0XHRcdGRlcGVuZGVuY2llcyxcblx0XHRcdGF0dHJpYnV0ZXMsXG5cdFx0XHRwYXJhbXMsXG5cdFx0XHRjb250ZW50LFxuXHRcdFx0c3R5bGVzaGVldHMsXG5cdFx0XHRzaGFkb3csXG5cdFx0fTtcblxuXHRcdHByb3RlY3RlZCBvbkF0dHJDaGFuZ2VkKF9uYW1lOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdFx0X29sZFZhbHVlOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdFx0X25ld1ZhbHVlOiBzdHJpbmcpOiB2b2lkfGZhbHNlIHt9XG5cblx0XHRwcm90ZWN0ZWQgZ2V0IGlzSW5ET00oKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuI2hvc3QgYXMgTEhvc3QpLmlzSW5ET007XG5cdFx0fVxuXHRcdHByb3RlY3RlZCBvbkRPTUNvbm5lY3RlZCgpIHt9XG5cdFx0cHJvdGVjdGVkIG9uRE9NRGlzY29ubmVjdGVkKCkge31cblx0fVxuXG5cdHJldHVybiBMSVNTQmFzZTtcbn1cblxuLy9UT0RPOiBvdGhlciBvcHRpb25zLi4uXG5mdW5jdGlvbiBleHRlbmRzTElTUzxFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0QXR0cnMxICAgZXh0ZW5kcyBzdHJpbmcsXG5cdEF0dHJzMiAgIGV4dGVuZHMgc3RyaW5nLFxuXHRQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+LFxuXHRUIGV4dGVuZHMgTElTU1JldHVyblR5cGU8RXh0ZW5kcywgSG9zdCwgQXR0cnMxLCBQYXJhbXM+PihMaXNzOiBULCBwYXJhbWV0ZXJzOiB7YXR0cmlidXRlczogcmVhZG9ubHkgQXR0cnMyW119KSB7XG5cblx0Ly8gVE9ETzogb3RoZXIgb3B0aW9ucy4uLlxuXHRjb25zdCBhdHRycyA9IFsuLi5MaXNzLlBhcmFtZXRlcnMuYXR0cmlidXRlcywgLi4ucGFyYW1ldGVycy5hdHRyaWJ1dGVzIV07XG5cdGNvbnN0IHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIExpc3MuUGFyYW1ldGVycywge2F0dHJpYnV0ZXM6IGF0dHJzfSk7XG5cblx0Ly8gQHRzLWlnbm9yZSA6IGJlY2F1c2UgVFMgc3R1cGlkXG5cdGNsYXNzIEV4dGVuZGVkTElTUyBleHRlbmRzIExpc3Mge1xuXHRcdGNvbnN0cnVjdG9yKC4uLnQ6IGFueVtdKSB7XG5cdFx0XHQvLyBAdHMtaWdub3JlIDogYmVjYXVzZSBUUyBzdHVwaWRcblx0XHRcdHN1cGVyKC4uLnQpO1xuXHRcdH1cblxuXHRcdHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYXR0cnMoKSB7XG5cdFx0XHRyZXR1cm4gc3VwZXIuYXR0cnMgYXMgUmVjb3JkPEF0dHJzMnxBdHRyczEsIHN0cmluZ3xudWxsPjtcblx0XHR9XG5cblx0XHRzdGF0aWMgb3ZlcnJpZGUgUGFyYW1ldGVycyA9IHBhcmFtcztcblx0fVxuXG5cdHJldHVybiBFeHRlbmRlZExJU1M7XG59XG5MSVNTLmV4dGVuZHNMSVNTID0gZXh0ZW5kc0xJU1M7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgdHlwZSBoZWxwZXJzID09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBidWlsZExJU1NIb3N0UmV0dXJuVHlwZTxUPiAgPSBUIGV4dGVuZHMgTElTU1JldHVyblR5cGU8aW5mZXIgRXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5mZXIgSG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5mZXIgQXR0cnMgICBleHRlbmRzIHN0cmluZyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluZmVyIFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IFJldHVyblR5cGU8dHlwZW9mIGJ1aWxkTElTU0hvc3Q8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcywgVD4+IDogbmV2ZXI7XG5cbmV4cG9ydCB0eXBlIExJU1NSZXR1cm5UeXBlPFxuXHRFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0QXR0cnMgICBleHRlbmRzIHN0cmluZyxcblx0UGFyYW1zICBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pj4gPSBSZXR1cm5UeXBlPHR5cGVvZiBMSVNTPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXM+PjtcbmV4cG9ydCB0eXBlIExJU1NCYXNlPEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0XHRcdFx0XHQgSG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdCBBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdCBQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+PiA9IEluc3RhbmNlVHlwZTxMSVNTUmV0dXJuVHlwZTxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zPj47XG5leHBvcnQgdHlwZSBMSVNTSG9zdDxMSVNTIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55PiA+ID0gSW5zdGFuY2VUeXBlPGJ1aWxkTElTU0hvc3RSZXR1cm5UeXBlPENvbnN0cnVjdG9yPExJU1M+ICYge1BhcmFtZXRlcnM6IGFueX0+PjtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTU0hvc3QgY2xhc3MgPT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5sZXQgaWQgPSAwO1xuXG5mdW5jdGlvbiBidWlsZExJU1NIb3N0PEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0XHRcdFx0XHQgICBIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0ICAgQXR0cnMgICBleHRlbmRzIHN0cmluZyxcblx0XHRcdFx0XHQgICBQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+LFxuXHRcdFx0XHRcdCAgIFQgZXh0ZW5kcyBMSVNTUmV0dXJuVHlwZTxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zPj4oTGlzczogVCwgX3BhcmFtczogUGFydGlhbDxQYXJhbXM+ID0ge30pIHtcblx0Y29uc3Qge1xuXHRcdGhvc3QsXG5cdFx0YXR0cmlidXRlcyxcblx0XHRjb250ZW50LFxuXHRcdHN0eWxlc2hlZXRzLFxuXHRcdHNoYWRvdyxcblx0fSA9IExpc3MuUGFyYW1ldGVycztcblxuXHRjb25zdCBhbHJlYWR5RGVjbGFyZWRDU1MgPSBuZXcgU2V0KCk7XG5cblx0Y29uc3QgR0VUID0gU3ltYm9sKCdnZXQnKTtcblx0Y29uc3QgU0VUID0gU3ltYm9sKCdzZXQnKTtcblxuXHRjb25zdCBwcm9wZXJ0aWVzID0gT2JqZWN0LmZyb21FbnRyaWVzKCBhdHRyaWJ1dGVzLm1hcChuID0+IFtuLCB7XG5cblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24oKTogc3RyaW5nfG51bGwgICAgICB7IHJldHVybiAodGhpcyBhcyB1bmtub3duIGFzIEF0dHJpYnV0ZXMpW0dFVF0obik7IH0sXG5cdFx0c2V0OiBmdW5jdGlvbih2YWx1ZTogc3RyaW5nfG51bGwpIHsgcmV0dXJuICh0aGlzIGFzIHVua25vd24gYXMgQXR0cmlidXRlcylbU0VUXShuLCB2YWx1ZSk7IH1cblx0fV0pICk7XG5cblx0Y2xhc3MgQXR0cmlidXRlcyB7XG4gICAgICAgIFt4OiBzdHJpbmddOiBzdHJpbmd8bnVsbDtcblxuICAgICAgICAjZGF0YSAgICAgOiBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPjtcbiAgICAgICAgI2RlZmF1bHRzIDogUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD47XG4gICAgICAgICNzZXR0ZXIgICA6IChuYW1lOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKSA9PiB2b2lkO1xuXG4gICAgICAgIFtHRVRdKG5hbWU6IEF0dHJzKSB7XG4gICAgICAgIFx0cmV0dXJuIHRoaXMuI2RhdGFbbmFtZV0gPz8gdGhpcy4jZGVmYXVsdHNbbmFtZV0gPz8gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgW1NFVF0obmFtZTogQXR0cnMsIHZhbHVlOiBzdHJpbmd8bnVsbCl7XG4gICAgICAgIFx0cmV0dXJuIHRoaXMuI3NldHRlcihuYW1lLCB2YWx1ZSk7IC8vIHJlcXVpcmVkIHRvIGdldCBhIGNsZWFuIG9iamVjdCB3aGVuIGRvaW5nIHsuLi5hdHRyc31cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGEgICAgOiBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPixcblx0XHRcdFx0XHRkZWZhdWx0czogUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD4sXG4gICAgICAgIFx0XHRcdHNldHRlciAgOiAobmFtZTogQXR0cnMsIHZhbHVlOiBzdHJpbmd8bnVsbCkgPT4gdm9pZCkge1xuXG4gICAgICAgIFx0dGhpcy4jZGF0YSAgICAgPSBkYXRhO1xuXHRcdFx0dGhpcy4jZGVmYXVsdHMgPSBkZWZhdWx0cztcbiAgICAgICAgXHR0aGlzLiNzZXR0ZXIgPSBzZXR0ZXI7XG5cbiAgICAgICAgXHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCBwcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuXHR9XG5cblx0Ly8gQHRzLWlnbm9yZSA6IGJlY2F1c2UgVFMgaXMgc3R1cGlkLlxuXHRjbGFzcyBMSVNTSG9zdEJhc2UgZXh0ZW5kcyBob3N0IHtcblxuXHRcdHJlYWRvbmx5ICNwYXJhbXM6IFBhcmFtcztcblxuXHRcdHJlYWRvbmx5ICNpZCA9ICsraWQ7IC8vIGZvciBkZWJ1Z1xuXG5cdFx0Y29uc3RydWN0b3IocGFyYW1zOiBQYXJ0aWFsPFBhcmFtcz4gPSB7fSkge1xuXHRcdFx0c3VwZXIoKTtcblx0XHRcdHRoaXMuI3BhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIExpc3MuUGFyYW1ldGVycy5wYXJhbXMsIF9wYXJhbXMsIHBhcmFtcyk7XG5cblx0XHRcdHRoaXMuI3dhaXRJbml0ID0gbmV3IFByb21pc2UoIChyZXNvbHZlKSA9PiB7XG5cdFx0XHRcdGlmKHRoaXMuaXNJbml0KVxuXHRcdFx0XHRcdHJldHVybiByZXNvbHZlKHRoaXMuI0FQSSEpO1xuXHRcdFx0XHR0aGlzLiNyZXNvbHZlID0gcmVzb2x2ZTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKioqIHB1YmxpYyBBUEkgKioqKioqKioqKioqKi9cblxuXHRcdGdldCBpc0luaXQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4jQVBJICE9PSBudWxsO1xuXHRcdH1cblx0XHRpbml0aWFsaXplKHBhcmFtczogUGFydGlhbDxQYXJhbXM+ID0ge30pIHtcblxuXHRcdFx0aWYoIHRoaXMuaXNJbml0IClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFbGVtZW50IGFscmVhZHkgaW5pdGlhbGl6ZWQhJyk7XG5cblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcy4jcGFyYW1zLCBwYXJhbXMpO1xuXG5cdFx0XHRjb25zdCBhcGkgPSB0aGlzLmluaXQoKTtcblxuXHRcdFx0aWYoIHRoaXMuI2lzSW5ET00gKVxuXHRcdFx0XHQoYXBpIGFzIGFueSkub25ET01Db25uZWN0ZWQoKTtcblxuXHRcdFx0cmV0dXJuIGFwaTtcblx0XHR9XG5cblx0XHRnZXQgTElTU1N5bmMoKSB7XG5cdFx0XHRpZiggISB0aGlzLmlzSW5pdCApXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQWNjZXNzaW5nIEFQSSBiZWZvcmUgV2ViQ29tcG9uZW50IGluaXRpYWxpemF0aW9uIScpO1xuXHRcdFx0cmV0dXJuIHRoaXMuI0FQSSE7XG5cdFx0fVxuXHRcdGdldCBMSVNTKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuI3dhaXRJbml0O1xuXHRcdH1cblxuXHRcdC8qKiogaW5pdCAqKiovXG5cdFx0I3dhaXRJbml0OiBQcm9taXNlPEluc3RhbmNlVHlwZTxUPj47XG5cdFx0I3Jlc29sdmU6ICgodTogSW5zdGFuY2VUeXBlPFQ+KSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xuXHRcdCNBUEk6IEluc3RhbmNlVHlwZTxUPiB8IG51bGwgPSBudWxsO1xuXG5cdFx0I2lzSW5ET00gPSBmYWxzZTtcblx0XHRnZXQgaXNJbkRPTSgpIHtcblx0XHRcdHJldHVybiB0aGlzLiNpc0luRE9NO1xuXHRcdH1cblxuXHRcdGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuXHRcdFx0dGhpcy4jaXNJbkRPTSA9IGZhbHNlO1xuXHRcdFx0KHRoaXMuI0FQSSEgYXMgYW55KS5vbkRPTURpc2Nvbm5lY3RlZCgpO1xuXHRcdH1cblxuXHRcdGNvbm5lY3RlZENhbGxiYWNrKCkge1xuXG5cdFx0XHR0aGlzLiNpc0luRE9NID0gdHJ1ZTtcblx0XG5cdFx0XHRpZiggISB0aGlzLmlzSW5pdCApIHtcblx0XHRcdFx0dGhpcy5pbml0KCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0KHRoaXMuI0FQSSEgYXMgYW55KS5vbkRPTUNvbm5lY3RlZCgpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgaW5pdCgpIHtcblx0XHRcdFxuXHRcdFx0Y3VzdG9tRWxlbWVudHMudXBncmFkZSh0aGlzKTtcblx0XHRcdFxuXHRcdFx0Ly8gc2hhZG93XG5cdFx0XHR0aGlzLiNjb250ZW50ID0gdGhpcyBhcyB1bmtub3duIGFzIEhvc3Q7XG5cdFx0XHRpZiggc2hhZG93ICE9PSAnbm9uZScpIHtcblx0XHRcdFx0dGhpcy4jY29udGVudCA9IHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiBzaGFkb3d9KTtcblxuXHRcdFx0XHQvL0B0cy1pZ25vcmVcblx0XHRcdFx0dGhpcy4jY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tFdmVudCk7XG5cdFx0XHRcdC8vQHRzLWlnbm9yZVxuXHRcdFx0XHR0aGlzLiNjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgb25DbGlja0V2ZW50KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gYXR0cnNcblx0XHRcdGZvcihsZXQgb2JzIG9mIGF0dHJpYnV0ZXMhKVxuXHRcdFx0XHR0aGlzLiNhdHRyaWJ1dGVzW29ic10gPSB0aGlzLmdldEF0dHJpYnV0ZShvYnMpO1xuXG5cdFx0XHQvLyBjc3Ncblx0XHRcdGlmKCBzaGFkb3cgIT09ICdub25lJylcblx0XHRcdFx0KHRoaXMuI2NvbnRlbnQgYXMgU2hhZG93Um9vdCkuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc2hhcmVkQ1NTKTtcblx0XHRcdGlmKCBzdHlsZXNoZWV0cy5sZW5ndGggKSB7XG5cblx0XHRcdFx0aWYoIHNoYWRvdyAhPT0gJ25vbmUnKVxuXHRcdFx0XHRcdCh0aGlzLiNjb250ZW50IGFzIFNoYWRvd1Jvb3QpLmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKC4uLnN0eWxlc2hlZXRzKTtcblx0XHRcdFx0ZWxzZSB7XG5cblx0XHRcdFx0XHRjb25zdCBjc3NzZWxlY3RvciA9IHRoaXMuQ1NTU2VsZWN0b3I7XG5cblx0XHRcdFx0XHQvLyBpZiBub3QgeWV0IGluc2VydGVkIDpcblx0XHRcdFx0XHRpZiggISBhbHJlYWR5RGVjbGFyZWRDU1MuaGFzKGNzc3NlbGVjdG9yKSApIHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0bGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuXHRcdFx0XHRcdFx0c3R5bGUuc2V0QXR0cmlidXRlKCdmb3InLCBjc3NzZWxlY3Rvcik7XG5cblx0XHRcdFx0XHRcdGxldCBodG1sX3N0eWxlc2hlZXRzID0gXCJcIjtcblxuXHRcdFx0XHRcdFx0Zm9yKGxldCBzdHlsZSBvZiBzdHlsZXNoZWV0cylcblx0XHRcdFx0XHRcdFx0Zm9yKGxldCBydWxlIG9mIHN0eWxlLmNzc1J1bGVzKVxuXHRcdFx0XHRcdFx0XHRcdGh0bWxfc3R5bGVzaGVldHMgKz0gcnVsZS5jc3NUZXh0ICsgJ1xcbic7XG5cblx0XHRcdFx0XHRcdHN0eWxlLmlubmVySFRNTCA9IGh0bWxfc3R5bGVzaGVldHMucmVwbGFjZSgnOmhvc3QnLCBgOmlzKCR7Y3Nzc2VsZWN0b3J9KWApO1xuXG5cdFx0XHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZChzdHlsZSk7XG5cblx0XHRcdFx0XHRcdGFscmVhZHlEZWNsYXJlZENTUy5hZGQoY3Nzc2VsZWN0b3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBjb250ZW50XG5cdFx0XHRpZiggY29udGVudCAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRsZXQgdGVtcGxhdGVfZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cdFx0XHRcdGxldCBzdHIgPSAoY29udGVudCBhcyBzdHJpbmcpLnJlcGxhY2UoL1xcJFxceyguKz8pXFx9L2csIChfLCBtYXRjaCkgPT4gdGhpcy5nZXRBdHRyaWJ1dGUobWF0Y2gpPz8nJylcblx0ICAgIFx0XHR0ZW1wbGF0ZV9lbGVtLmlubmVySFRNTCA9IHN0cjtcblx0ICAgIFx0XHR0aGlzLiNjb250ZW50LmFwcGVuZCguLi50ZW1wbGF0ZV9lbGVtLmNvbnRlbnQuY2hpbGROb2Rlcyk7XG5cdCAgICBcdH1cblxuXHQgICAgXHQvLyBidWlsZFxuXG5cdCAgICBcdC8vIGg0Y2ssIG9rYXkgYmVjYXVzZSBKUyBpcyBtb25vdGhyZWFkZWQuXG5cdFx0XHRfX2NzdHJfaG9zdCAgID0gdGhpcztcblxuXHQgICAgXHRsZXQgb2JqID0gbmV3IExpc3MoKTtcblxuXHQgICAgXHQvKmlmKCBvYmogaW5zdGFuY2VvZiBQcm9taXNlKVxuXHQgICAgXHRcdG9iaiA9IGF3YWl0IG9iajsqL1xuXG5cdFx0XHR0aGlzLiNBUEkgPSBvYmogYXMgSW5zdGFuY2VUeXBlPFQ+O1xuXG5cdFx0XHQvLyBkZWZhdWx0IHNsb3Rcblx0XHRcdGlmKCB0aGlzLmhhc1NoYWRvdyAmJiB0aGlzLiNjb250ZW50LmNoaWxkTm9kZXMubGVuZ3RoID09PSAwIClcblx0XHRcdFx0dGhpcy4jY29udGVudC5hcHBlbmQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Nsb3QnKSApO1xuXG5cdFx0XHRpZiggdGhpcy4jcmVzb2x2ZSAhPT0gbnVsbClcblx0XHRcdFx0dGhpcy4jcmVzb2x2ZSh0aGlzLiNBUEkpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy4jQVBJO1xuXHRcdH1cblxuXHRcdGdldCBwYXJhbXMoKTogUGFyYW1zIHtcblx0XHRcdHJldHVybiB0aGlzLiNwYXJhbXM7XG5cdFx0fVxuXG5cblx0XHQvKioqIGNvbnRlbnQgKioqL1xuXHRcdCNjb250ZW50OiBIb3N0fFNoYWRvd1Jvb3R8bnVsbCA9IG51bGw7XG5cblx0XHRnZXQgY29udGVudCgpIHtcblx0XHRcdHJldHVybiB0aGlzLiNjb250ZW50O1xuXHRcdH1cblxuXHRcdGdldFBhcnQobmFtZTogc3RyaW5nKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5oYXNTaGFkb3dcblx0XHRcdFx0XHQ/IHRoaXMuI2NvbnRlbnQ/LnF1ZXJ5U2VsZWN0b3IoYDo6cGFydCgke25hbWV9KWApXG5cdFx0XHRcdFx0OiB0aGlzLiNjb250ZW50Py5xdWVyeVNlbGVjdG9yKGBbcGFydD1cIiR7bmFtZX1cIl1gKTtcblx0XHR9XG5cdFx0Z2V0UGFydHMobmFtZTogc3RyaW5nKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5oYXNTaGFkb3dcblx0XHRcdFx0XHQ/IHRoaXMuI2NvbnRlbnQ/LnF1ZXJ5U2VsZWN0b3JBbGwoYDo6cGFydCgke25hbWV9KWApXG5cdFx0XHRcdFx0OiB0aGlzLiNjb250ZW50Py5xdWVyeVNlbGVjdG9yQWxsKGBbcGFydD1cIiR7bmFtZX1cIl1gKTtcblx0XHR9XG5cblx0XHRwcm90ZWN0ZWQgZ2V0IGhhc1NoYWRvdygpOiBib29sZWFuIHtcblx0XHRcdHJldHVybiBzaGFkb3cgIT09ICdub25lJztcblx0XHR9XG5cblx0XHQvKioqIENTUyAqKiovXG5cblx0XHRnZXQgQ1NTU2VsZWN0b3IoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5oYXNTaGFkb3dcblx0XHRcdFx0XHQ/IHRoaXMudGFnTmFtZVxuXHRcdFx0XHRcdDogYCR7dGhpcy50YWdOYW1lfVtpcz1cIiR7dGhpcy5nZXRBdHRyaWJ1dGUoXCJpc1wiKX1cIl1gO1xuXHRcdH1cblxuXHRcdC8qKiogYXR0cnMgKioqL1xuXHRcdCNhdHRyc19mbGFnID0gZmFsc2U7XG5cblx0XHQjYXR0cmlidXRlcyAgICAgICAgID0ge30gYXMgUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD47XG5cdFx0I2F0dHJpYnV0ZXNEZWZhdWx0cyA9IHt9IGFzIFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuXHRcdCNhdHRycyA9IG5ldyBBdHRyaWJ1dGVzKFxuXHRcdFx0dGhpcy4jYXR0cmlidXRlcyxcblx0XHRcdHRoaXMuI2F0dHJpYnV0ZXNEZWZhdWx0cyxcblx0XHRcdChuYW1lOiBBdHRycywgdmFsdWU6c3RyaW5nfG51bGwpID0+IHtcblxuXHRcdFx0XHR0aGlzLiNhdHRyaWJ1dGVzW25hbWVdID0gdmFsdWU7XG5cblx0XHRcdFx0dGhpcy4jYXR0cnNfZmxhZyA9IHRydWU7IC8vIGRvIG5vdCB0cmlnZ2VyIG9uQXR0cnNDaGFuZ2VkLlxuXHRcdFx0XHRpZiggdmFsdWUgPT09IG51bGwpXG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHR0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0KSBhcyB1bmtub3duIGFzIFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuXG5cdFx0c2V0QXR0ckRlZmF1bHQobmFtZTogQXR0cnMsIHZhbHVlOiBzdHJpbmd8bnVsbCkge1xuXHRcdFx0aWYoIHZhbHVlID09PSBudWxsKVxuXHRcdFx0XHRkZWxldGUgdGhpcy4jYXR0cmlidXRlc0RlZmF1bHRzW25hbWVdO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHR0aGlzLiNhdHRyaWJ1dGVzRGVmYXVsdHNbbmFtZV0gPSB2YWx1ZTtcblx0XHR9XG5cblx0XHRnZXQgYXR0cnMoKTogUmVhZG9ubHk8UmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD4+IHtcblxuXHRcdFx0cmV0dXJuIHRoaXMuI2F0dHJzO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuXHRcdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lICAgIDogQXR0cnMsXG5cdFx0XHRcdFx0XHRcdFx0IG9sZFZhbHVlOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdFx0IG5ld1ZhbHVlOiBzdHJpbmcpIHtcblxuXHRcdFx0aWYodGhpcy4jYXR0cnNfZmxhZykge1xuXHRcdFx0XHR0aGlzLiNhdHRyc19mbGFnID0gZmFsc2U7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy4jYXR0cmlidXRlc1tuYW1lXSA9IG5ld1ZhbHVlO1xuXHRcdFx0aWYoICEgdGhpcy5pc0luaXQgKVxuXHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdGlmKCAodGhpcy4jQVBJISBhcyBhbnkpLm9uQXR0ckNoYW5nZWQobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0dGhpcy4jYXR0cnNbbmFtZV0gPSBvbGRWYWx1ZTsgLy8gcmV2ZXJ0IHRoZSBjaGFuZ2UuXG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiBMSVNTSG9zdEJhc2U7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgZGVmaW5lID09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgX0RPTUNvbnRlbnRMb2FkZWQgPSBuZXcgUHJvbWlzZTx2b2lkPiggKHJlc29sdmUpID0+IHtcblxuXHRpZihkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImludGVyYWN0aXZlXCIgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKVxuXHRcdHJldHVybiByZXNvbHZlKCk7XG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblx0XHRyZXNvbHZlKCk7XG5cdH0sIHRydWUpO1xufSk7XG5cbkxJU1MuZGVmaW5lID0gYXN5bmMgZnVuY3Rpb248RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdFx0XHQgSG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdFx0ICAgICBBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdFx0ICAgICBQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+LFxuXHRcdFx0XHRcdFx0ICAgXHQgVCBleHRlbmRzIExJU1NSZXR1cm5UeXBlPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXM+Pihcblx0XHRcdFx0XHRcdCAgIFx0dGFnbmFtZTogc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRDb21wb25lbnRDbGFzczogVCxcblx0XHRcdFx0XHRcdFx0e2RlcGVuZGVuY2llcywgcGFyYW1zfToge3BhcmFtcz86IFBhcnRpYWw8UGFyYW1zPiwgZGVwZW5kZW5jaWVzPzogcmVhZG9ubHkgUHJvbWlzZTxzdHJpbmc+W119ID0ge30pIHtcblxuXHRkZXBlbmRlbmNpZXM/Pz1bXTtcblx0cGFyYW1zICAgICAgPz89IHt9O1xuXG5cdGNvbnN0IENsYXNzID0gQ29tcG9uZW50Q2xhc3MuUGFyYW1ldGVycy5ob3N0O1xuXHRsZXQgTElTU0Jhc2U6IGFueSA9IENvbXBvbmVudENsYXNzO1xuXHRsZXQgaHRtbHRhZyA9IF9lbGVtZW50MnRhZ25hbWUoQ2xhc3MpPz91bmRlZmluZWQ7XG5cblx0YXdhaXQgUHJvbWlzZS5hbGwoW19ET01Db250ZW50TG9hZGVkLCAuLi5kZXBlbmRlbmNpZXMsIC4uLkxJU1NCYXNlLlBhcmFtZXRlcnMuZGVwZW5kZW5jaWVzXSk7XG5cblx0Y29uc3QgTElTU2NsYXNzID0gYnVpbGRMSVNTSG9zdDxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zLCBUPihDb21wb25lbnRDbGFzcywgcGFyYW1zKTtcblx0XG5cdGNvbnN0IG9wdHMgPSBodG1sdGFnID09PSB1bmRlZmluZWQgPyB7fVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgOiB7ZXh0ZW5kczogaHRtbHRhZ307XG5cdFxuXHRjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnbmFtZSwgTElTU2NsYXNzLCBvcHRzKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgU2hhZG93Um9vdCB0b29scyA9PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3Qgc2hhcmVkQ1NTID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbmRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHNoYXJlZENTUyk7XG5cbkxJU1MuaW5zZXJ0R2xvYmFsQ1NTUnVsZXMgPSBmdW5jdGlvbihjc3M6IHN0cmluZ3xIVE1MU3R5bGVFbGVtZW50KSB7XG5cblx0bGV0IGNzc19zdHlsZSE6IENTU1N0eWxlU2hlZXQ7XG5cblx0aWYoIGNzcyBpbnN0YW5jZW9mIEhUTUxTdHlsZUVsZW1lbnQgKVxuXHRcdGNzc19zdHlsZSA9IGNzcy5zaGVldCE7XG5cdGlmKCB0eXBlb2YgY3NzID09PSBcInN0cmluZ1wiKSB7XG5cdFx0Y3NzX3N0eWxlID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcblx0XHRjc3Nfc3R5bGUucmVwbGFjZVN5bmMoY3NzKTtcblx0fVxuXG5cdGZvcihsZXQgcnVsZSBvZiBjc3Nfc3R5bGUuY3NzUnVsZXMpXG5cdFx0c2hhcmVkQ1NTLmluc2VydFJ1bGUocnVsZS5jc3NUZXh0KTtcbn1cblxudHlwZSBEZWxlZ2F0ZWRIYW5kbGVyID0gW3N0cmluZywgKGV2OiBNb3VzZUV2ZW50KSA9PiB2b2lkXTtcbmNvbnN0IERFTEVHQVRFRF9FVkVOVFMgPSB7XG5cdFwiY2xpY2tcIjogW10gYXMgRGVsZWdhdGVkSGFuZGxlcltdLFxuXHRcImRibGNsaWNrXCI6IFtdIGFzIERlbGVnYXRlZEhhbmRsZXJbXVxufTtcblxuY29uc3QgQUxSRUFEWV9QUk9DRVNTRUQgPSBTeW1ib2woKTtcblxuZnVuY3Rpb24gb25DbGlja0V2ZW50KGV2OiBNb3VzZUV2ZW50KSB7XG5cblx0aWYoIChldiBhcyBhbnkpW0FMUkVBRFlfUFJPQ0VTU0VEXSA9PT0gdHJ1ZSApXG5cdFx0cmV0dXJuO1xuXHQoZXYgYXMgYW55KVtBTFJFQURZX1BST0NFU1NFRF0gPSB0cnVlO1xuXG5cdGNvbnN0IGhhbmRsZXJzID0gREVMRUdBVEVEX0VWRU5UU1tldi50eXBlIGFzIGtleW9mIHR5cGVvZiBERUxFR0FURURfRVZFTlRTXTtcblxuXHRmb3IobGV0IGVsZW0gb2YgZXYuY29tcG9zZWRQYXRoKCkgKSB7XG5cdFxuXHRcdGlmKCBlbGVtIGluc3RhbmNlb2YgU2hhZG93Um9vdCB8fCBlbGVtID09PSBkb2N1bWVudCB8fCBlbGVtID09PSB3aW5kb3cgKVxuXHRcdFx0Y29udGludWU7XG5cblx0XHR2YXIgdGFyZ2V0ID0gZWxlbSBhcyBFbGVtZW50O1xuXG5cdFx0Zm9yKGxldCBbc2VsZWN0b3IsIGhhbmRsZXJdIG9mIGhhbmRsZXJzKSB7XG5cdFx0XHRpZiggdGFyZ2V0Lm1hdGNoZXMoc2VsZWN0b3IpIClcblx0XHRcdFx0aGFuZGxlcihldik7XG5cdFx0fVxuXHR9XG59XG5cbkxJU1MuaW5zZXJ0R2xvYmFsRGVsZWdhdGVkTGlzdGVuZXIgPSBmdW5jdGlvbihldmVudF9uYW1lOiBrZXlvZiB0eXBlb2YgREVMRUdBVEVEX0VWRU5UUywgc2VsZWN0b3I6IHN0cmluZywgaGFuZGxlcjogKGV2OiBNb3VzZUV2ZW50KSA9PiB2b2lkICkge1xuXHRERUxFR0FURURfRVZFTlRTW2V2ZW50X25hbWVdLnB1c2goW3NlbGVjdG9yLCBoYW5kbGVyXSlcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrRXZlbnQpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBvbkNsaWNrRXZlbnQpO1xuXG5MSVNTLmNsb3Nlc3QgPSBmdW5jdGlvbiBjbG9zZXN0PEUgZXh0ZW5kcyBFbGVtZW50PihzZWxlY3Rvcjogc3RyaW5nLCBlbGVtZW50OiBFbGVtZW50KSB7XG5cblx0d2hpbGUodHJ1ZSkge1xuXHRcdHZhciByZXN1bHQgPSBlbGVtZW50LmNsb3Nlc3Q8RT4oc2VsZWN0b3IpO1xuXG5cdFx0aWYoIHJlc3VsdCAhPT0gbnVsbClcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cblx0XHRjb25zdCByb290ID0gZWxlbWVudC5nZXRSb290Tm9kZSgpO1xuXHRcdGlmKCAhIChcImhvc3RcIiBpbiByb290KSApXG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdGVsZW1lbnQgPSAocm9vdCBhcyBTaGFkb3dSb290KS5ob3N0O1xuXHR9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgaGVscGVycyA9PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBpbmZlclBhcmFtczxUPiA9IFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSwgaW5mZXIgUCBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pj4gPyBQIDogbmV2ZXI7XG5cbnR5cGUgQlVJTERfT1BUSU9OUzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4gPSBQYXJ0aWFsPHtcblx0XHRcdFx0XHQgIFx0cGFyYW1zICAgIDogUGFydGlhbDxpbmZlclBhcmFtczxUPj4sXG5cdFx0XHRcdFx0ICBcdGNvbnRlbnRcdCAgOiBzdHJpbmd8Tm9kZXxyZWFkb25seSBOb2RlW10sXG5cdFx0XHRcdFx0XHRpZCBcdFx0ICA6IHN0cmluZyxcblx0XHRcdFx0XHQgIFx0Y2xhc3Nlc1x0ICA6IHJlYWRvbmx5IHN0cmluZ1tdLFxuXHRcdFx0XHRcdCAgXHRjc3N2YXJzICAgOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+Pixcblx0XHRcdFx0XHQgIFx0YXR0cnMgXHQgIDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgc3RyaW5nfGJvb2xlYW4+Pixcblx0XHRcdFx0XHQgIFx0ZGF0YSBcdCAgOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmd8Ym9vbGVhbj4+LFxuXHRcdFx0XHRcdCAgXHRsaXN0ZW5lcnMgOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCAoZXY6IEV2ZW50KSA9PiB2b2lkPj5cblx0XHRcdFx0XHR9PiAmICh7XG5cdFx0XHRcdFx0XHRpbml0aWFsaXplOiBmYWxzZSxcblx0XHRcdFx0XHRcdHBhcmVudDogRWxlbWVudFxuXHRcdFx0XHRcdH18e1xuXHRcdFx0XHRcdFx0aW5pdGlhbGl6ZT86IHRydWUsXG5cdFx0XHRcdFx0XHRwYXJlbnQ/OiBFbGVtZW50XG5cdFx0XHRcdFx0fSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGJ1aWxkPFQgZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPih0YWduYW1lOiBULCBvcHRpb25zPzogQlVJTERfT1BUSU9OUzxDb21wb25lbnRzW1RdPik6IFByb21pc2U8Q29tcG9uZW50c1tUXT47XG5hc3luYyBmdW5jdGlvbiBidWlsZDxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4odGFnbmFtZTogc3RyaW5nLCBvcHRpb25zPzogQlVJTERfT1BUSU9OUzxUPik6IFByb21pc2U8VD47XG5hc3luYyBmdW5jdGlvbiBidWlsZDxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4odGFnbmFtZTogc3RyaW5nLCB7XG5cdFx0cGFyYW1zICAgID0ge30sXG5cdFx0aW5pdGlhbGl6ZT0gdHJ1ZSxcblx0XHRjb250ZW50ICAgPSBbXSxcblx0XHRwYXJlbnQgICAgPSB1bmRlZmluZWQsXG5cdFx0aWQgXHRcdCAgPSB1bmRlZmluZWQsXG5cdFx0Y2xhc3NlcyAgID0gW10sXG5cdFx0Y3NzdmFycyAgID0ge30sXG5cdFx0YXR0cnMgICAgID0ge30sXG5cdFx0ZGF0YSBcdCAgPSB7fSxcblx0XHRsaXN0ZW5lcnMgPSB7fVxuXHR9OiBCVUlMRF9PUFRJT05TPFQ+ID0ge30pOiBQcm9taXNlPFQ+IHtcblxuXHRpZiggISBpbml0aWFsaXplICYmIHBhcmVudCA9PT0gbnVsbClcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJBIHBhcmVudCBtdXN0IGJlIGdpdmVuIGlmIGluaXRpYWxpemUgaXMgZmFsc2VcIik7XG5cblx0bGV0IEN1c3RvbUNsYXNzID0gYXdhaXQgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQodGFnbmFtZSk7XG5cdGxldCBlbGVtID0gbmV3IEN1c3RvbUNsYXNzKHBhcmFtcykgYXMgTElTU0hvc3Q8VD47XG5cblx0Ly8gRml4IGlzc3VlICMyXG5cdGlmKCBlbGVtLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gdGFnbmFtZSApXG5cdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoXCJpc1wiLCB0YWduYW1lKTtcblxuXHRpZiggaWQgIT09IHVuZGVmaW5lZCApXG5cdFx0ZWxlbS5pZCA9IGlkO1xuXG5cdGlmKCBjbGFzc2VzLmxlbmd0aCA+IDApXG5cdFx0ZWxlbS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBjc3N2YXJzKVxuXHRcdGVsZW0uc3R5bGUuc2V0UHJvcGVydHkoYC0tJHtuYW1lfWAsIGNzc3ZhcnNbbmFtZV0pO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBhdHRycykge1xuXG5cdFx0bGV0IHZhbHVlID0gYXR0cnNbbmFtZV07XG5cdFx0aWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpXG5cdFx0XHRlbGVtLnRvZ2dsZUF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdFx0ZWxzZVxuXHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXHR9XG5cblx0Zm9yKGxldCBuYW1lIGluIGRhdGEpIHtcblxuXHRcdGxldCB2YWx1ZSA9IGRhdGFbbmFtZV07XG5cdFx0aWYoIHZhbHVlID09PSBmYWxzZSlcblx0XHRcdGRlbGV0ZSBlbGVtLmRhdGFzZXRbbmFtZV07XG5cdFx0ZWxzZSBpZih2YWx1ZSA9PT0gdHJ1ZSlcblx0XHRcdGVsZW0uZGF0YXNldFtuYW1lXSA9IFwiXCI7XG5cdFx0ZWxzZVxuXHRcdFx0ZWxlbS5kYXRhc2V0W25hbWVdID0gdmFsdWU7XG5cdH1cblxuXHRpZiggISBBcnJheS5pc0FycmF5KGNvbnRlbnQpIClcblx0XHRjb250ZW50ID0gW2NvbnRlbnQgYXMgYW55XTtcblx0ZWxlbS5yZXBsYWNlQ2hpbGRyZW4oLi4uY29udGVudCk7XG5cblx0Zm9yKGxldCBuYW1lIGluIGxpc3RlbmVycylcblx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgbGlzdGVuZXJzW25hbWVdKTtcblxuXHRpZiggcGFyZW50ICE9PSB1bmRlZmluZWQgKVxuXHRcdHBhcmVudC5hcHBlbmQoZWxlbSk7XG5cblx0aWYoICEgZWxlbS5pc0luaXQgJiYgaW5pdGlhbGl6ZSApXG5cdFx0cmV0dXJuIGF3YWl0IExJU1MuaW5pdGlhbGl6ZShlbGVtKTtcblxuXHRyZXR1cm4gYXdhaXQgTElTUy5nZXRMSVNTKGVsZW0pO1xufVxuTElTUy5idWlsZCA9IGJ1aWxkO1xuXG5cbkxJU1Mud2hlbkRlZmluZWQgICAgPSBhc3luYyBmdW5jdGlvbih0YWduYW1lOiBzdHJpbmcsIGNhbGxiYWNrPzogKCkgPT4gdm9pZCApIDogUHJvbWlzZTx2b2lkPiB7XG5cblx0YXdhaXQgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQodGFnbmFtZSk7XG5cblx0aWYoIGNhbGxiYWNrICE9PSB1bmRlZmluZWQpXG5cdFx0Y2FsbGJhY2soKTtcblxuXHRyZXR1cm47XG59XG5MSVNTLndoZW5BbGxEZWZpbmVkID0gYXN5bmMgZnVuY3Rpb24odGFnbmFtZXM6IHJlYWRvbmx5IHN0cmluZ1tdLCBjYWxsYmFjaz86ICgpID0+IHZvaWQgKSA6IFByb21pc2U8dm9pZD4ge1xuXG5cdGF3YWl0IFByb21pc2UuYWxsKCB0YWduYW1lcy5tYXAoIHQgPT4gY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQodCkgKSApXG5cblx0aWYoIGNhbGxiYWNrICE9PSB1bmRlZmluZWQpXG5cdFx0Y2FsbGJhY2soKTtcblxufVxuXG5MSVNTLmlzRGVmaW5lZCA9IGZ1bmN0aW9uKG5hbWU6IHN0cmluZykge1xuXHRyZXR1cm4gY3VzdG9tRWxlbWVudHMuZ2V0KG5hbWUpO1xufVxuXG5MSVNTLnNlbGVjdG9yID0gZnVuY3Rpb24obmFtZT86IHN0cmluZykge1xuXHRpZihuYW1lID09PSB1bmRlZmluZWQpIC8vIGp1c3QgYW4gaDRja1xuXHRcdHJldHVybiBcIlwiO1xuXHRyZXR1cm4gYDppcygke25hbWV9LCBbaXM9XCIke25hbWV9XCJdKWA7XG59XG5cbkxJU1MuZ2V0TElTUyAgICA9IGFzeW5jIGZ1bmN0aW9uPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PiggZWxlbWVudDogRWxlbWVudCApIHtcblxuXHRhd2FpdCBMSVNTLndoZW5EZWZpbmVkKCBMSVNTLmdldE5hbWUoZWxlbWVudCkgKTtcblxuXHRyZXR1cm4gKGVsZW1lbnQgYXMgTElTU0hvc3Q8VD4pLkxJU1M7IC8vIGVuc3VyZSBpbml0aWFsaXplZC5cbn1cbkxJU1MuZ2V0TElTU1N5bmM9IGZ1bmN0aW9uPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PiggZWxlbWVudDogRWxlbWVudCApIHtcblxuXHRpZiggISBMSVNTLmlzRGVmaW5lZCggTElTUy5nZXROYW1lKGVsZW1lbnQpICkgKVxuXHRcdHRocm93IG5ldyBFcnJvcihgJHtuYW1lfSBoYXNuJ3QgYmVlbiBkZWZpbmVkIHlldC5gKTtcblxuXHRsZXQgaG9zdCA9IGVsZW1lbnQgYXMgTElTU0hvc3Q8VD47XG5cblx0aWYoICEgaG9zdC5pc0luaXQgKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIkluc3RhbmNlIGhhc24ndCBiZWVuIGluaXRpYWxpemVkIHlldC5cIik7XG5cblx0cmV0dXJuIGhvc3QuTElTU1N5bmM7XG59XG5MSVNTLmluaXRpYWxpemUgPSBhc3luYyBmdW5jdGlvbjxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oIGVsZW1lbnQ6IEVsZW1lbnQpIHtcblxuXHRhd2FpdCBMSVNTLndoZW5EZWZpbmVkKCBMSVNTLmdldE5hbWUoZWxlbWVudCkgKTtcblxuXHRyZXR1cm4gYXdhaXQgKGVsZW1lbnQgYXMgTElTU0hvc3Q8VD4pLmluaXRpYWxpemUoKTsgLy8gZW5zdXJlIGluaXRpYWxpemF0aW9uLlxufVxuXG5MSVNTLmdldE5hbWUgPSBmdW5jdGlvbiggZWxlbWVudDogRWxlbWVudCApOiBzdHJpbmcge1xuXG5cdGNvbnN0IG5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaXMnKSA/PyBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblx0XG5cdGlmKCAhIG5hbWUuaW5jbHVkZXMoJy0nKSApXG5cdFx0dGhyb3cgbmV3IEVycm9yKGBFbGVtZW50ICR7bmFtZX0gaXMgbm90IGEgV2ViQ29tcG9uZW50YCk7XG5cblx0cmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIF9idWlsZFFTKHNlbGVjdG9yOiBzdHJpbmcsIHRhZ25hbWVfb3JfcGFyZW50Pzogc3RyaW5nIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LCBwYXJlbnQ6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cdFxuXHRpZiggdGFnbmFtZV9vcl9wYXJlbnQgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdGFnbmFtZV9vcl9wYXJlbnQgIT09ICdzdHJpbmcnKSB7XG5cdFx0cGFyZW50ID0gdGFnbmFtZV9vcl9wYXJlbnQ7XG5cdFx0dGFnbmFtZV9vcl9wYXJlbnQgPSB1bmRlZmluZWQ7XG5cdH1cblxuXHRyZXR1cm4gW2Ake3NlbGVjdG9yfSR7TElTUy5zZWxlY3Rvcih0YWduYW1lX29yX3BhcmVudCBhcyBzdHJpbmd8dW5kZWZpbmVkKX1gLCBwYXJlbnRdIGFzIGNvbnN0O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIFF1ZXJ5U2VsZWN0b3JzID09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmFzeW5jIGZ1bmN0aW9uIHFzPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPFQ+O1xuYXN5bmMgZnVuY3Rpb24gcXM8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8IENvbXBvbmVudHNbTl0gPjtcbmFzeW5jIGZ1bmN0aW9uIHFzPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsXG5cdFx0XHRcdFx0XHRwYXJlbnQgIDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblxuXHRbc2VsZWN0b3IsIHBhcmVudF0gPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIHBhcmVudCk7XG5cblx0bGV0IHJlc3VsdCA9IGF3YWl0IExJU1MucXNvPFQ+KHNlbGVjdG9yLCBwYXJlbnQpO1xuXHRpZihyZXN1bHQgPT09IG51bGwpXG5cdFx0dGhyb3cgbmV3IEVycm9yKGBFbGVtZW50ICR7c2VsZWN0b3J9IG5vdCBmb3VuZGApO1xuXG5cdHJldHVybiByZXN1bHQhXG59XG5MSVNTLnFzICA9IHFzXG5cbmFzeW5jIGZ1bmN0aW9uIHFzbzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTxUPjtcbmFzeW5jIGZ1bmN0aW9uIHFzbzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTwgQ29tcG9uZW50c1tOXSA+O1xuYXN5bmMgZnVuY3Rpb24gcXNvPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsXG5cdFx0XHRcdFx0XHRwYXJlbnQgIDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblxuXHRbc2VsZWN0b3IsIHBhcmVudF0gPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIHBhcmVudCk7XG5cblx0Y29uc3QgZWxlbWVudCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yPExJU1NIb3N0PFQ+PihzZWxlY3Rvcik7XG5cdGlmKCBlbGVtZW50ID09PSBudWxsIClcblx0XHRyZXR1cm4gbnVsbDtcblxuXHRyZXR1cm4gYXdhaXQgTElTUy5nZXRMSVNTKCBlbGVtZW50ICk7XG59XG5MSVNTLnFzbyA9IHFzb1xuXG5hc3luYyBmdW5jdGlvbiBxc2E8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8VFtdPjtcbmFzeW5jIGZ1bmN0aW9uIHFzYTxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTwgQ29tcG9uZW50c1tOXVtdID47XG5hc3luYyBmdW5jdGlvbiBxc2E8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRjb25zdCBlbGVtZW50cyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsPExJU1NIb3N0PFQ+PihzZWxlY3Rvcik7XG5cblx0bGV0IGlkeCA9IDA7XG5cdGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8VD4+KCBlbGVtZW50cy5sZW5ndGggKTtcblx0Zm9yKGxldCBlbGVtZW50IG9mIGVsZW1lbnRzKVxuXHRcdHByb21pc2VzW2lkeCsrXSA9IExJU1MuZ2V0TElTUyggZWxlbWVudCApO1xuXG5cdHJldHVybiBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59XG5MSVNTLnFzYSA9IHFzYTtcblxuYXN5bmMgZnVuY3Rpb24gcXNjPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgOiBFbGVtZW50KTogUHJvbWlzZTxUPjtcbmFzeW5jIGZ1bmN0aW9uIHFzYzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdGVsZW1lbnQgIDogRWxlbWVudCk6IFByb21pc2U8IENvbXBvbmVudHNbTl0gPjtcbmFzeW5jIGZ1bmN0aW9uIHFzYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudCxcblx0XHRcdFx0XHRcdGVsZW1lbnQgID86IEVsZW1lbnQpIHtcblxuXHRjb25zdCByZXMgPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIGVsZW1lbnQpO1xuXHRcblx0Y29uc3QgcmVzdWx0ID0gKHJlc1sxXSBhcyB1bmtub3duIGFzIEVsZW1lbnQpLmNsb3Nlc3Q8TElTU0hvc3Q8VD4+KHJlc1swXSk7XG5cdGlmKHJlc3VsdCA9PT0gbnVsbClcblx0XHRyZXR1cm4gbnVsbDtcblxuXHRyZXR1cm4gYXdhaXQgTElTUy5nZXRMSVNTKHJlc3VsdCk7XG59XG5MSVNTLnFzYyA9IHFzYztcblxuZnVuY3Rpb24gcXNTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBUO1xuZnVuY3Rpb24gcXNTeW5jPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBDb21wb25lbnRzW05dO1xuZnVuY3Rpb24gcXNTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsXG5cdFx0XHRcdFx0XHRwYXJlbnQgIDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblxuXHRbc2VsZWN0b3IsIHBhcmVudF0gPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIHBhcmVudCk7XG5cblx0Y29uc3QgZWxlbWVudCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yPExJU1NIb3N0PFQ+PihzZWxlY3Rvcik7XG5cblx0aWYoIGVsZW1lbnQgPT09IG51bGwgKVxuXHRcdHRocm93IG5ldyBFcnJvcihgRWxlbWVudCAke3NlbGVjdG9yfSBub3QgZm91bmRgKTtcblxuXHRyZXR1cm4gTElTUy5nZXRMSVNTU3luYyggZWxlbWVudCApO1xufVxuTElTUy5xc1N5bmMgPSBxc1N5bmM7XG5cbmZ1bmN0aW9uIHFzYVN5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFRbXTtcbmZ1bmN0aW9uIHFzYVN5bmM8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IENvbXBvbmVudHNbTl1bXTtcbmZ1bmN0aW9uIHFzYVN5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRjb25zdCBlbGVtZW50cyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsPExJU1NIb3N0PFQ+PihzZWxlY3Rvcik7XG5cblx0bGV0IGlkeCA9IDA7XG5cdGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxUPiggZWxlbWVudHMubGVuZ3RoICk7XG5cdGZvcihsZXQgZWxlbWVudCBvZiBlbGVtZW50cylcblx0XHRyZXN1bHRbaWR4KytdID0gTElTUy5nZXRMSVNTU3luYyggZWxlbWVudCApO1xuXG5cdHJldHVybiByZXN1bHQ7XG59XG5MSVNTLnFzYVN5bmMgPSBxc2FTeW5jO1xuXG5mdW5jdGlvbiBxc2NTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgOiBFbGVtZW50KTogVDtcbmZ1bmN0aW9uIHFzY1N5bmM8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA6IEVsZW1lbnQpOiBDb21wb25lbnRzW05dO1xuZnVuY3Rpb24gcXNjU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudCxcblx0XHRcdFx0XHRcdGVsZW1lbnQgID86IEVsZW1lbnQpIHtcblxuXHRjb25zdCByZXMgPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIGVsZW1lbnQpO1xuXHRcblx0Y29uc3QgcmVzdWx0ID0gKHJlc1sxXSBhcyB1bmtub3duIGFzIEVsZW1lbnQpLmNsb3Nlc3Q8TElTU0hvc3Q8VD4+KHJlc1swXSk7XG5cdGlmKHJlc3VsdCA9PT0gbnVsbClcblx0XHRyZXR1cm4gbnVsbDtcblxuXHRyZXR1cm4gTElTUy5nZXRMSVNTU3luYyhyZXN1bHQpO1xufVxuTElTUy5xc2NTeW5jID0gcXNjU3luYztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBBdXRvID09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgY2xhc3MgTElTU19BdXRvIGV4dGVuZHMgTElTUyh7YXR0cmlidXRlczogW1wic3JjXCJdfSkge1xuXG5cdHJlYWRvbmx5ICNrbm93bl90YWcgPSBuZXcgU2V0PHN0cmluZz4oKTtcblx0cmVhZG9ubHkgI2RpcmVjdG9yeTogc3RyaW5nO1xuXHRyZWFkb25seSAjc3c6IFByb21pc2U8dm9pZD47XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy4jc3cgPSBuZXcgUHJvbWlzZSggYXN5bmMgKHJlc29sdmUpID0+IHtcblx0XHRcdFxuXHRcdFx0YXdhaXQgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoYC4vc3cuanNgKTtcblxuXHRcdFx0aWYoIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXIgKVxuXHRcdFx0XHRyZXNvbHZlKCk7XG5cblx0XHRcdG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRyb2xsZXJjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cblx0XHRjb25zdCBzcmMgPSB0aGlzLmF0dHJzLnNyYztcblx0XHRpZihzcmMgPT09IG51bGwpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJzcmMgYXR0cmlidXRlIGlzIG1pc3NpbmcuXCIpO1xuXHRcdHRoaXMuI2RpcmVjdG9yeSA9IHNyY1swXSA9PT0gJy4nXG5cdFx0XHRcdFx0XHRcdFx0PyBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9LyR7c3JjfWBcblx0XHRcdFx0XHRcdFx0XHQ6IHNyYztcblxuXHRcdG5ldyBNdXRhdGlvbk9ic2VydmVyKCAobXV0YXRpb25zKSA9PiB7XG5cblx0XHRcdGZvcihsZXQgbXV0YXRpb24gb2YgbXV0YXRpb25zKVxuXHRcdFx0XHRmb3IobGV0IGFkZGl0aW9uIG9mIG11dGF0aW9uLmFkZGVkTm9kZXMpXG5cdFx0XHRcdFx0aWYoYWRkaXRpb24gaW5zdGFuY2VvZiBFbGVtZW50KVxuXHRcdFx0XHRcdFx0dGhpcy4jYWRkVGFnKGFkZGl0aW9uLnRhZ05hbWUpXG5cblx0XHR9KS5vYnNlcnZlKCBkb2N1bWVudCwgeyBjaGlsZExpc3Q6dHJ1ZSwgc3VidHJlZTp0cnVlIH0pO1xuXG5cblx0XHRmb3IoIGxldCBlbGVtIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpIClcblx0XHRcdHRoaXMuI2FkZFRhZyhlbGVtLnRhZ05hbWUpO1xuXHR9XG5cblxuICAgIHByb3RlY3RlZCByZXNvdXJjZXMoKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdFwiaW5kZXguanNcIixcblx0XHRcdFwiaW5kZXguaHRtbFwiLFxuXHRcdFx0XCJpbmRleC5jc3NcIlxuXHRcdF07XG4gICAgfVxuXG5cdHByb3RlY3RlZCBkZWZpbmVXZWJDb21wb25lbnQodGFnbmFtZTogc3RyaW5nLCBmaWxlczogUmVjb3JkPHN0cmluZywgYW55Piwgb3B0czogUGFydGlhbDx7Y29udGVudDogc3RyaW5nLCBjc3M6IHN0cmluZ30+KSB7XG5cblx0XHRjb25zdCBqcyA9IGZpbGVzW1wiaW5kZXguanNcIl07XG5cdFx0Y29uc3QgY29udGVudCA9IGZpbGVzW1wiaW5kZXguaHRtbFwiXTtcblxuXHRcdGxldCBrbGFzczogbnVsbHwgUmV0dXJuVHlwZTx0eXBlb2YgTElTUz4gPSBudWxsO1xuXHRcdGlmKCBqcyAhPT0gdW5kZWZpbmVkIClcblx0XHRcdGtsYXNzID0ganMob3B0cyk7XG5cdFx0ZWxzZSBpZiggY29udGVudCAhPT0gdW5kZWZpbmVkIClcblx0XHRcdGtsYXNzID0gY2xhc3MgV2ViQ29tcG9uZW50IGV4dGVuZHMgTElTUyhvcHRzKSB7fTtcblxuXHRcdGlmKGtsYXNzID09PSBudWxsKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIGZpbGVzIGZvciBXZWJDb21wb25lbnQgJHt0YWduYW1lfS5gKTtcblxuXHRcdHJldHVybiBMSVNTLmRlZmluZSh0YWduYW1lLCBrbGFzcyk7XG5cdH1cblxuXHRhc3luYyAjYWRkVGFnKHRhZ25hbWU6IHN0cmluZykge1xuXG5cdFx0dGFnbmFtZSA9IHRhZ25hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdGlmKCB0YWduYW1lID09PSAnbGlzcy1hdXRvJyB8fCB0YWduYW1lID09PSAnYmxpc3MtYXV0bycgfHwgISB0YWduYW1lLmluY2x1ZGVzKCctJykgfHwgdGhpcy4ja25vd25fdGFnLmhhcyggdGFnbmFtZSApIClcblx0XHRcdHJldHVybjtcblxuXHRcdHRoaXMuI2tub3duX3RhZy5hZGQodGFnbmFtZSk7XG5cblx0XHRhd2FpdCB0aGlzLiNzdzsgLy8gZW5zdXJlIFNXIGlzIGluc3RhbGxlZC5cblxuXHRcdGNvbnN0IGZpbGVuYW1lcyA9IHRoaXMucmVzb3VyY2VzKCk7XG5cdFx0Y29uc3QgcmVzb3VyY2VzID0gYXdhaXQgUHJvbWlzZS5hbGwoIGZpbGVuYW1lcy5tYXAoIGZpbGUgPT4gZmlsZS5lbmRzV2l0aCgnLmpzJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBfaW1wb3J0ICAgKGAke3RoaXMuI2RpcmVjdG9yeX0vJHt0YWduYW1lfS8ke2ZpbGV9YCwgdHJ1ZSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBfZmV0Y2hUZXh0KGAke3RoaXMuI2RpcmVjdG9yeX0vJHt0YWduYW1lfS8ke2ZpbGV9YCwgdHJ1ZSkgKSApO1xuXG5cdFx0Y29uc3QgZmlsZXM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgZmlsZW5hbWVzLmxlbmd0aDsgKytpKVxuXHRcdFx0aWYoIHJlc291cmNlc1tpXSAhPT0gdW5kZWZpbmVkKVxuXHRcdFx0XHRmaWxlc1tmaWxlbmFtZXNbaV1dID0gcmVzb3VyY2VzW2ldO1xuXG5cdFx0Y29uc3QgY29udGVudCA9IGZpbGVzW1wiaW5kZXguaHRtbFwiXTtcblx0XHRjb25zdCBjc3MgICAgID0gZmlsZXNbXCJpbmRleC5jc3NcIl07XG5cblx0XHRjb25zdCBvcHRzOiBQYXJ0aWFsPHtjb250ZW50OiBzdHJpbmcsIGNzczogc3RyaW5nfT4gPSB7XG5cdFx0XHQuLi5jb250ZW50ICE9PSB1bmRlZmluZWQgJiYge2NvbnRlbnR9LFxuXHRcdFx0Li4uY3NzICAgICAhPT0gdW5kZWZpbmVkICYmIHtjc3N9LFxuXHRcdH07XG5cblx0XHRyZXR1cm4gdGhpcy5kZWZpbmVXZWJDb21wb25lbnQodGFnbmFtZSwgZmlsZXMsIG9wdHMpO1xuXHRcdFxuXHR9XG59XG5MSVNTLmRlZmluZShcImxpc3MtYXV0b1wiLCBMSVNTX0F1dG8pO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudHMge1xuXHRcImxpc3MtYXV0b1wiOiBMSVNTX0F1dG9cbn07XG4vKlxuICogZGVjbGFyZSBtb2R1bGUgJyRMSVNTJyB7XG4gKiBcdFx0aW50ZXJmYWNlIENvbXBvbmVudHMge1xuICogXHRcdFx0XCJuYW1lXCI6IGNsYXNzXG4gKiBcdFx0fVxuICogfVxuICovXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgRXZlbnRzVGFyZ2V0ID09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBDc3RFdmVudDxFdmVudCBleHRlbmRzIHN0cmluZywgQXJncz4gPSBDdXN0b21FdmVudDxBcmdzPiAmIHt0eXBlOiBFdmVudH07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRzVGFyZ2V0PEV2ZW50cyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+e1xuXG5cdGFkZEV2ZW50TGlzdGVuZXI8RXZlbnQgZXh0ZW5kcyBFeGNsdWRlPGtleW9mIEV2ZW50cywgc3ltYm9sfG51bWJlcj4+KHR5cGU6IEV2ZW50LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGxpc3RlbmVyOiBudWxsfCAoKGV2OiBDc3RFdmVudDxFdmVudCwgRXZlbnRzW0V2ZW50XT4pID0+IHZvaWQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IG9wdGlvbnM/OiBib29sZWFufEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zKTogdm9pZDtcblxuXHRkaXNwYXRjaEV2ZW50PEV2ZW50IGV4dGVuZHMgRXhjbHVkZTxrZXlvZiBFdmVudHMsIHN5bWJvbHxudW1iZXI+PihldmVudDogQ3N0RXZlbnQ8RXZlbnQsIEV2ZW50c1tFdmVudF0+KTogYm9vbGVhbjtcblxuXHRyZW1vdmVFdmVudExpc3RlbmVyPEV2ZW50IGV4dGVuZHMgRXhjbHVkZTxrZXlvZiBFdmVudHMsIHN5bWJvbHxudW1iZXI+Pih0eXBlOiBFdmVudCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGlzdGVuZXI6IG51bGx8ICgoZXY6IENzdEV2ZW50PEV2ZW50LCBFdmVudHNbRXZlbnRdPikgPT4gdm9pZCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM/OiBib29sZWFufEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIENzdG1FdmVudDxFdmVudCBleHRlbmRzIHN0cmluZywgQXJncz4gZXh0ZW5kcyBDdXN0b21FdmVudDxBcmdzPiB7XG5cblx0b3ZlcnJpZGUgZ2V0IHR5cGUoKTogRXZlbnQgeyByZXR1cm4gc3VwZXIudHlwZSBhcyBFdmVudDsgfVxuXG5cdGNvbnN0cnVjdG9yKHR5cGU6IEV2ZW50LCBhcmdzOiBBcmdzKSB7XG5cdFx0c3VwZXIodHlwZSwge2RldGFpbDogYXJnc30pO1xuXHR9XG59XG5cbmV4cG9ydCB0eXBlIEV2ZW50c1RhcmdldENzdHI8RXZlbnRzIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+PiA9IENvbnN0cnVjdG9yPEV2ZW50c1RhcmdldDxFdmVudHM+PjtcblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIGludGVybmFsIHRvb2xzID09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoUmVzb3VyY2UocmVzb3VyY2U6IFJlc291cmNlfFByb21pc2U8UmVzb3VyY2U+KSB7XG5cblx0cmVzb3VyY2UgPSBhd2FpdCByZXNvdXJjZTtcblxuXHRpZiggISAocmVzb3VyY2UgaW5zdGFuY2VvZiBSZXNwb25zZSkgKVxuXHRcdHJlc291cmNlID0gYXdhaXQgZmV0Y2gocmVzb3VyY2UpO1xuXG5cdHJldHVybiBhd2FpdCByZXNvdXJjZS50ZXh0KCk7XG59XG5cblxuYXN5bmMgZnVuY3Rpb24gX2ZldGNoVGV4dCh1cmk6IHN0cmluZ3xVUkwsIGlzTGlzc0F1dG86IGJvb2xlYW4gPSBmYWxzZSkge1xuXG5cdGNvbnN0IG9wdGlvbnMgPSBpc0xpc3NBdXRvXG5cdFx0XHRcdFx0XHQ/IHtoZWFkZXJzOntcImxpc3MtYXV0b1wiOiBcInRydWVcIn19XG5cdFx0XHRcdFx0XHQ6IHt9O1xuXG5cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmksIG9wdGlvbnMpO1xuXHRpZihyZXNwb25zZS5zdGF0dXMgIT09IDIwMCApXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblxuXHRpZiggaXNMaXNzQXV0byAmJiByZXNwb25zZS5oZWFkZXJzLmdldChcInN0YXR1c1wiKSEgPT09IFwiNDA0XCIgKVxuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cblx0cmV0dXJuIGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIF9pbXBvcnQodXJpOiBzdHJpbmcsIGlzTGlzc0F1dG86IGJvb2xlYW4gPSBmYWxzZSkge1xuXG5cdC8vIHRlc3QgZm9yIHRoZSBtb2R1bGUgZXhpc3RhbmNlLlxuXHRpZihpc0xpc3NBdXRvICYmIGF3YWl0IF9mZXRjaFRleHQodXJpLCBpc0xpc3NBdXRvKSA9PT0gdW5kZWZpbmVkIClcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXG5cdHRyeSB7XG5cdFx0cmV0dXJuIChhd2FpdCBpbXBvcnQoLyogd2VicGFja0lnbm9yZTogdHJ1ZSAqLyB1cmkpKS5kZWZhdWx0O1xuXHR9IGNhdGNoKGUpIHtcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHR9XG59XG5cbi8vIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTEwMDA0NjEvaHRtbC1lbGVtZW50LXRhZy1uYW1lLWZyb20tY29uc3RydWN0b3JcbmNvbnN0IEhUTUxDTEFTU19SRUdFWCA9ICAvSFRNTChcXHcrKUVsZW1lbnQvO1xuY29uc3QgZWxlbWVudE5hbWVMb29rdXBUYWJsZSA9IHtcbiAgICAnVUxpc3QnOiAndWwnLFxuICAgICdUYWJsZUNhcHRpb24nOiAnY2FwdGlvbicsXG4gICAgJ1RhYmxlQ2VsbCc6ICd0ZCcsIC8vIHRoXG4gICAgJ1RhYmxlQ29sJzogJ2NvbCcsICAvLydjb2xncm91cCcsXG4gICAgJ1RhYmxlUm93JzogJ3RyJyxcbiAgICAnVGFibGVTZWN0aW9uJzogJ3Rib2R5JywgLy9bJ3RoZWFkJywgJ3Rib2R5JywgJ3Rmb290J10sXG4gICAgJ1F1b3RlJzogJ3EnLFxuICAgICdQYXJhZ3JhcGgnOiAncCcsXG4gICAgJ09MaXN0JzogJ29sJyxcbiAgICAnTW9kJzogJ2lucycsIC8vLCAnZGVsJ10sXG4gICAgJ01lZGlhJzogJ3ZpZGVvJywvLyAnYXVkaW8nXSxcbiAgICAnSW1hZ2UnOiAnaW1nJyxcbiAgICAnSGVhZGluZyc6ICdoMScsIC8vLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnXSxcbiAgICAnRGlyZWN0b3J5JzogJ2RpcicsXG4gICAgJ0RMaXN0JzogJ2RsJyxcbiAgICAnQW5jaG9yJzogJ2EnXG4gIH07XG5mdW5jdGlvbiBfZWxlbWVudDJ0YWduYW1lKENsYXNzOiB0eXBlb2YgSFRNTEVsZW1lbnQpOiBzdHJpbmd8bnVsbCB7XG5cblx0aWYoIENsYXNzID09PSBIVE1MRWxlbWVudCApXG5cdFx0cmV0dXJuIG51bGw7XG5cdFxuXHRsZXQgaHRtbHRhZyA9IEhUTUxDTEFTU19SRUdFWC5leGVjKENsYXNzLm5hbWUpIVsxXTtcblx0cmV0dXJuIGVsZW1lbnROYW1lTG9va3VwVGFibGVbaHRtbHRhZyBhcyBrZXlvZiB0eXBlb2YgZWxlbWVudE5hbWVMb29rdXBUYWJsZV0gPz8gaHRtbHRhZy50b0xvd2VyQ2FzZSgpXG59IiwiaW1wb3J0IExJU1MgZnJvbSBcIkxJU1NcIjtcbmltcG9ydCBcInN0cnVjdC9tZW51LnRzXCI7XG5cbmltcG9ydCBcInN0cnVjdC9jYWxjL3NoZWV0LnRzXCI7XG5pbXBvcnQgXCJzdHJ1Y3QvY2FsYy90b29sYmFyLnRzXCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQgfSBmcm9tIFwic3RydWN0L2NhbGMvc2hlZXQudHNcIjtcbmltcG9ydCB7IENhbGNUb29sYmFyIH0gZnJvbSBcInN0cnVjdC9jYWxjL3Rvb2xiYXIudHNcIjtcbmltcG9ydCB7IEZvcm1hdHMgfSBmcm9tIFwic3RydWN0L2NhbGMvZm9ybWF0LnRzXCI7XG5cblxue1xuICAgIGNvbnN0IHNoZWV0ID0gYXdhaXQgTElTUy5xczxDYWxjU2hlZXQ+KCcjc2hlZXRfdGVzdCcpO1xuXG4gICAgLy9hd2FpdCBsb2FkKHNoZWV0LCBcImFzc2V0cy90YWJsZXVyL3Rlc3Qub2RzXCIpO1xufVxuXG5jb25zdCBzaGVldF9mb3JtYXRfY29udGVudCA9IGF3YWl0IExJU1MucXM8Q2FsY1NoZWV0PignI3NoZWV0X2Zvcm1hdF9jb250ZW50Jyk7XG5cbnNoZWV0X2Zvcm1hdF9jb250ZW50LmdldENlbGxzKFwiQTE6RjFcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gW1xuICAgIFwiVGFpbGxlXCIsIFwiR3Jhc1wiLCBcIkl0YWxpcXVlXCIsIFwiU291bGlnbsOpXCIsIFwiQ291bGV1ciB0ZXh0ZVwiLCBcIkNvdWxldXIgZm9uZFwiXG5dXG5cbnNoZWV0X2Zvcm1hdF9jb250ZW50LmdldENlbGxzKFwiQTI6RjJcIikuZm9ybWF0KFwiYWxpZ25fY2VudGVyXCIpLmNvbnRlbnQgPSBcIkFcIjtcbnNoZWV0X2Zvcm1hdF9jb250ZW50LmdldENlbGxzKFwiQTJcIikuZm9ybWF0KHtmb250X3NpemU6ICcxNXB0J30pO1xuc2hlZXRfZm9ybWF0X2NvbnRlbnQuZ2V0Q2VsbHMoXCJCMlwiKS5mb3JtYXQoJ2JvbGQnKTtcbnNoZWV0X2Zvcm1hdF9jb250ZW50LmdldENlbGxzKFwiQzJcIikuZm9ybWF0KCdpdGFsaWMnKTtcbnNoZWV0X2Zvcm1hdF9jb250ZW50LmdldENlbGxzKFwiRDJcIikuZm9ybWF0KCd1bmRlcmxpbmUnKTtcbnNoZWV0X2Zvcm1hdF9jb250ZW50LmdldENlbGxzKFwiRTJcIikuZm9ybWF0KHtmb3JlZ3JvdW5kX2NvbG9yOiAnYmx1ZSd9KTtcbnNoZWV0X2Zvcm1hdF9jb250ZW50LmdldENlbGxzKFwiRjJcIikuZm9ybWF0KHtiYWNrZ3JvdW5kX2NvbG9yOiAneWVsbG93J30pO1xuXG5jb25zdCBzaGVldF90b29sYmFyX2Zvcm1hdF9jb250ZW50ID0gYXdhaXQgTElTUy5xczxDYWxjVG9vbGJhcj4oJyNzaGVldF90b29sYmFyX2Zvcm1hdF9jb250ZW50Jyk7XG5zaGVldF90b29sYmFyX2Zvcm1hdF9jb250ZW50LnN5bmNUbyhzaGVldF9mb3JtYXRfY29udGVudCk7XG5zaGVldF90b29sYmFyX2Zvcm1hdF9jb250ZW50LmRpc2FibGVBbGxFeGNlcHQoXCJmb250X3NpemVcIiwgXCJib2xkXCIsIFwiaXRhbGljXCIsIFwidW5kZXJsaW5lXCIsIFwiZm9yZWdyb3VuZF9jb2xvclwiLCBcImJhY2tncm91bmRfY29sb3JcIik7XG5cbntcbiAgICBjb25zdCBzaGVldF9hbGlnbiA9IGF3YWl0IExJU1MucXM8Q2FsY1NoZWV0PignI3NoZWV0X2FsaWduJyk7XG5cbiAgICBzaGVldF9hbGlnbi5nZXRDZWxscyhcIkIxOkUxXCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFtcbiAgICAgICAgXCJIYXV0XCIsIFwiTWlsaWV1XCIsIFwiQmFzXCIsIFwiQWp1c3RlclwiXG4gICAgXVxuXG4gICAgc2hlZXRfYWxpZ24uZ2V0Q2VsbHMoXCJBMjpBNFwiKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIsIFwidmFsaWduX21pZGRsZVwiKS5jb250ZW50ID0gW1xuICAgICAgICBcIkdhdWNoZVwiLCBcIkNlbnRyZVwiLCBcIkRyb2l0XCJcbiAgICBdXG5cbiAgICBzaGVldF9hbGlnbi5nZXRDZWxscyhcIkIyOkQ0XCIpLmNvbnRlbnQgPSBcIkFcIjtcbiAgICBzaGVldF9hbGlnbi5nZXRDZWxscyhcIkIyOkUyXCIpLmZvcm1hdChcImFsaWduX2xlZnRcIik7XG4gICAgc2hlZXRfYWxpZ24uZ2V0Q2VsbHMoXCJCMzpFM1wiKS5mb3JtYXQoJ2FsaWduX2NlbnRlcicpO1xuICAgIHNoZWV0X2FsaWduLmdldENlbGxzKFwiQjQ6RTRcIikuZm9ybWF0KCdhbGlnbl9yaWdodCcpO1xuICAgIHNoZWV0X2FsaWduLmdldENlbGxzKFwiQjI6QjRcIikuZm9ybWF0KCd2YWxpZ25fdG9wJyk7XG4gICAgc2hlZXRfYWxpZ24uZ2V0Q2VsbHMoXCJDMjpDNFwiKS5mb3JtYXQoJ3ZhbGlnbl9taWRkbGUnKTtcbiAgICBzaGVldF9hbGlnbi5nZXRDZWxscyhcIkQyOkQ0XCIpLmZvcm1hdCgndmFsaWduX2JvdHRvbScpO1xuXG4gICAgc2hlZXRfYWxpZ24uZ2V0Q2VsbHMoXCJFMjpFNFwiKS5mb3JtYXQoXCJhanVzdGVyXCIpLmNvbnRlbnQgPSBgQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWA7XG5cbiAgICBjb25zdCBzaGVldF90b29sYmFyX2FsaWduID0gYXdhaXQgTElTUy5xczxDYWxjVG9vbGJhcj4oJyNzaGVldF90b29sYmFyX2FsaWduJyk7XG4gICAgc2hlZXRfdG9vbGJhcl9hbGlnbi5zeW5jVG8oc2hlZXRfYWxpZ24pO1xuICAgIHNoZWV0X3Rvb2xiYXJfYWxpZ24uZGlzYWJsZUFsbEV4Y2VwdChcImFsaWduX2xlZnRcIiwgXCJhbGlnbl9jZW50ZXJcIiwgXCJhbGlnbl9yaWdodFwiLCBcInZhbGlnbl90b3BcIiwgXCJ2YWxpZ25fbWlkZGxlXCIsIFwidmFsaWduX2JvdHRvbVwiLCBcImFqdXN0ZXJcIik7XG59XG5cbntcbiAgICBjb25zdCBzaGVldCA9IGF3YWl0IExJU1MucXM8Q2FsY1NoZWV0PignI3NoZWV0X2Zvcm1hdCcpO1xuXG4gICAgc2hlZXQuZ2V0Q2VsbHMoXCJBMTpFMVwiKS5mb3JtYXQoXCJib2xkXCIsIFwiYWxpZ25fY2VudGVyXCIpLmNvbnRlbnQgPSBbXG4gICAgICAgIDEsIFwiTW9ubmFpZVwiLCBcIlBvdXJjZW50XCIsIFwiTm9tYnJlXCIsIFwiRGF0ZVwiXG4gICAgXTtcblxuICAgIHNoZWV0LmdldENlbGxzKFwiQTI6QTRcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gW1xuICAgICAgICBcIk5vcm1hbFwiLCBcIisxIGRlY2ltYWxcIiwgXCItMSBkZWNpbWFsXCJcbiAgICBdO1xuXG4gICAgc2hlZXQuZ2V0Q2VsbHMoXCJCMjpFNFwiKS5jb250ZW50ID0gXCI9JEEkMVwiO1xuICAgIHNoZWV0LmdldENlbGxzKFwiQjI6QjRcIikuZm9ybWF0KEZvcm1hdHMuZXVyb3MpO1xuICAgIHNoZWV0LmdldENlbGxzKFwiQzI6QzRcIikuZm9ybWF0KEZvcm1hdHMucG91cmNlbnQpO1xuICAgIHNoZWV0LmdldENlbGxzKFwiRDI6RDRcIikuZm9ybWF0KEZvcm1hdHMubnVtYmVyKTtcbiAgICBzaGVldC5nZXRDZWxscyhcIkUyOkU0XCIpLmZvcm1hdChGb3JtYXRzLmRhdGUpO1xuXG4gICAgc2hlZXQuZ2V0Q2VsbHMoXCJCMzpFM1wiKS5mb3JtYXQoe3ByZWNpc2lvbjogM30pO1xuICAgIHNoZWV0LmdldENlbGxzKFwiQjQ6RTRcIikuZm9ybWF0KHtwcmVjaXNpb246IDF9KTtcblxuICAgIGNvbnN0IHNoZWV0X3Rvb2xiYXIgPSBhd2FpdCBMSVNTLnFzPENhbGNUb29sYmFyPignI3NoZWV0X3Rvb2xiYXJfZm9ybWF0Jyk7XG4gICAgc2hlZXRfdG9vbGJhci5zeW5jVG8oc2hlZXQpO1xuICAgIHNoZWV0X3Rvb2xiYXIuZGlzYWJsZUFsbEV4Y2VwdChcImZvcm1hdF9tb25uYWllXCIsIFwiZm9ybWF0X3BvdXJjZW50XCIsIFwiZm9ybWF0X25iXCIsIFwiZm9ybWF0X2RhdGVcIiwgXCJmb3JtYXRfemVyb19wMVwiLCBcImZvcm1hdF96ZXJvX20xXCIpO1xufVxuXG57XG4gICAgY29uc3Qgc2hlZXQgPSBhd2FpdCBMSVNTLnFzPENhbGNTaGVldD4oJyNzaGVldF9ib3JkdXJlcycpO1xuXG4gICAgc2hlZXQuZ2V0Q2VsbHMoJ0IyJykuZm9ybWF0KHtcbiAgICAgICAgYm9yZGVyX3RvcDogdHJ1ZSxcbiAgICAgICAgYm9yZGVyX2JvdHRvbTogdHJ1ZSxcbiAgICAgICAgYm9yZGVyX2xlZnQ6IHRydWUsXG4gICAgICAgIGJvcmRlcl9yaWdodDogdHJ1ZSxcbiAgICAgICAgYm9yZGVyX2NvbG9yOiAncmVkJyxcbiAgICB9KVxuXG4gICAgY29uc3Qgc2hlZXRfdG9vbGJhciA9IGF3YWl0IExJU1MucXM8Q2FsY1Rvb2xiYXI+KCcjc2hlZXRfdG9vbGJhcl9ib3JkdXJlcycpO1xuICAgIHNoZWV0X3Rvb2xiYXIuc3luY1RvKHNoZWV0KTtcbiAgICBzaGVldF90b29sYmFyLmRpc2FibGVBbGxFeGNlcHQoXCJib3JkZXJcIiwgXCJib3JkZXJfY29sb3JcIik7XG59XG5cblxue1xuICAgIGNvbnN0IHNoZWV0ID0gYXdhaXQgTElTUy5xczxDYWxjU2hlZXQ+KCcjc2hlZXRfcmV0cmFpdHMnKTtcblxuICAgIHNoZWV0LmdldENlbGxzKFwiQTE6QjFcIikuZm9ybWF0KFwiYm9sZFwiLCBcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gW1xuICAgICAgICBcIkdhdWNoZVwiLCBcIkRyb2l0ZVwiXG4gICAgXTtcblxuICAgIHNoZWV0LmdldENlbGxzKCdBMjpCNScpLmNvbnRlbnQgPSBcIkFcIjtcbiAgICBzaGVldC5nZXRDZWxscygnQTI6QTUnKS5mb3JtYXQoXCJhbGlnbl9sZWZ0XCIpO1xuICAgIHNoZWV0LmdldENlbGxzKCdCMjpCNScpLmZvcm1hdChcImFsaWduX3JpZ2h0XCIpO1xuXG4gICAgc2hlZXQuZ2V0Q2VsbHMoJ0EzOkIzJykuZm9ybWF0KHtpbmRlbnQ6IDF9KTtcbiAgICBzaGVldC5nZXRDZWxscygnQTQ6QjQnKS5mb3JtYXQoe2luZGVudDogMn0pO1xuICAgIHNoZWV0LmdldENlbGxzKCdBNTpCNScpLmZvcm1hdCh7aW5kZW50OiAzfSk7XG5cbiAgICBjb25zdCBzaGVldF90b29sYmFyID0gYXdhaXQgTElTUy5xczxDYWxjVG9vbGJhcj4oJyNzaGVldF90b29sYmFyX3JldHJhaXRzJyk7XG4gICAgc2hlZXRfdG9vbGJhci5zeW5jVG8oc2hlZXQpO1xuICAgIHNoZWV0X3Rvb2xiYXIuZGlzYWJsZUFsbEV4Y2VwdChcInJldHJhaXRfcDFcIiwgXCJyZXRyYWl0X20xXCIpO1xufVxuXG5cbntcbiAgICBjb25zdCBzaGVldCA9IGF3YWl0IExJU1MucXM8Q2FsY1NoZWV0PignI3NoZWV0X2Z1c2lvbicpO1xuXG4gICAgc2hlZXQuZ2V0Q2VsbHMoJ0IyJykuZm9ybWF0KHtcbiAgICAgICAgc3BhbjogWzIsMl0sXG4gICAgICAgIGFsaWduX2NlbnRlcjogdHJ1ZSxcbiAgICAgICAgdmFsaWduX21pZGRsZTogdHJ1ZVxuICAgIH0pLmNvbnRlbnQgPSBcIkFcIjtcblxuICAgIGNvbnN0IHNoZWV0X3Rvb2xiYXIgPSBhd2FpdCBMSVNTLnFzPENhbGNUb29sYmFyPignI3NoZWV0X3Rvb2xiYXJfZnVzaW9uJyk7XG4gICAgc2hlZXRfdG9vbGJhci5zeW5jVG8oc2hlZXQpO1xuICAgIHNoZWV0X3Rvb2xiYXIuZGlzYWJsZUFsbEV4Y2VwdChcIm1lcmdlX2NlbnRlclwiLCBcIm1lcmdlXCIsIFwidW5tZXJnZVwiKTtcbn0iLCJpbXBvcnQgeyBzdHIyaHRtbCB9IGZyb20gXCJzdHJ1Y3QvdXRpbHMvc3RyMmh0bWxcIjtcbmltcG9ydCB7IENhbGNTaGVldCwgQ2VsbExpc3QgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5leHBvcnQgY2xhc3MgUmFuZ2VPdmVybGF5IGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuXG4gICAgI3NoZWV0OiBDYWxjU2hlZXQ7XG4gICAgI3JhbmdlOiBzdHJpbmd8bnVsbCA9IG51bGw7XG4gICAgcHJvdGVjdGVkIG92ZXJsYXk6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCwgLi4uY2xhc3NsaXN0OiBzdHJpbmdbXSkge1xuXG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcbiAgICAgICAgdGhpcy4jc2hlZXQuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm92ZXJsYXkgPSBzdHIyaHRtbChgPGRpdiBjbGFzcz0nb3ZlcmxheSc+PC9kaXY+YCk7XG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzbGlzdCk7XG5cbiAgICAgICAgc2hlZXQuY29udGVudC5hcHBlbmQoIHRoaXMub3ZlcmxheSApO1xuICAgIH1cblxuICAgIHNldFJhbmdlKHJhbmdlOiBDZWxsTGlzdHxudWxsKSB7XG4gICAgICAgIHRoaXMuI3JhbmdlID0gcmFuZ2UgPT09IG51bGwgPyBudWxsIDogcmFuZ2UucGxhZ2VfbmFtZSE7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFJlY3QoLi4ucmVjdDogcmVhZG9ubHkgW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0pIHtcbiAgICAgICAgcmV0dXJuIHJlY3Q7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuXG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIsIHRoaXMuI3JhbmdlID09PSBudWxsKTtcblxuICAgICAgICBpZiggdGhpcy4jcmFuZ2UgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmdldFJlY3QoIC4uLnRoaXMuI3NoZWV0LmdldFJlY3QoIHRoaXMuI3NoZWV0LmdldFJhbmdlKHRoaXMuI3JhbmdlKSApICk7XG4gICAgICAgIHRoaXMuI3NoZWV0LnNldFJlY3QodGhpcy5vdmVybGF5LCByZWN0ICk7XG4gICAgfVxuXG4gICAgb3ZlcnJpZGUgYWRkRXZlbnRMaXN0ZW5lcih0eXBlOiBzdHJpbmcsIGNhbGxiYWNrOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0IHwgbnVsbCwgb3B0aW9ucz86IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zIHwgYm9vbGVhbik6IHZvaWQge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBvdmVycmlkZSByZW1vdmVFdmVudExpc3RlbmVyKHR5cGU6IHN0cmluZywgY2FsbGJhY2s6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QgfCBudWxsLCBvcHRpb25zPzogRXZlbnRMaXN0ZW5lck9wdGlvbnMgfCBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5vdmVybGF5LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIG9wdGlvbnMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvcm11bGFSZWYgZXh0ZW5kcyBSYW5nZU92ZXJsYXkge1xuXG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCkge1xuICAgICAgICBzdXBlcihzaGVldCwgXCJyYW5nZV9oaWdobGlnaHRcIik7XG4gICAgfVxuXG4gICAgI2N1cl9jb2xvciA9IDA7XG4gICAgc2V0Q29sb3IoY29sb3JfaWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShgaGlnaGxpZ2h0XyR7dGhpcy4jY3VyX2NvbG9yfWApOyBcbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoYGhpZ2hsaWdodF8ke2NvbG9yX2lkfWApO1xuICAgICAgICB0aGlzLiNjdXJfY29sb3IgPSBjb2xvcl9pZDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWNvcHlIYW5kbGUgZXh0ZW5kcyBSYW5nZU92ZXJsYXkge1xuXG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCkge1xuICAgICAgICBzdXBlcihzaGVldCwgXCJyZWNvcHlcIik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldFJlY3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBbeCt3LTIsIHkraC0yLCA1LCA1XSBhcyBjb25zdDtcbiAgICB9XG5cbn0iLCJpbXBvcnQgTElTUyBmcm9tIFwiLi4vLi4vLi4vbGlicy9MSVNTXCI7XG5pbXBvcnQgeyBGb3JtdWxhIH0gZnJvbSBcIi4vZm9ybXVsYV9wYXJzZXJcIjtcbmltcG9ydCB7IENhbGNTaGVldCwgQ2VsbCwgQ2VsbExpc3QgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5leHBvcnQgY2xhc3MgRm9ybWF0TWFuYWdlciB7XG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCkge1xuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgc2hlZXQuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2OiBLZXlib2FyZEV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGlmKCAhIGV2LmN0cmxLZXkgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ2InKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcImJvbGRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnaScpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KFwiaXRhbGljXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ3UnKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcInVuZGVybGluZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdsJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJhbGlnbl9sZWZ0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ3InKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcImFsaWduX3JpZ2h0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ2UnKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcImFsaWduX2NlbnRlclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICc0JyAmJiBldi5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoRm9ybWF0cy5ldXJvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnNScgJiYgZXYuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KEZvcm1hdHMucG91cmNlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJzEnICYmIGV2LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChGb3JtYXRzLm51bWJlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgICAgICAvKiBUT0RPIGxpc3RlbiAqL1xuXG4gICAgfVxufVxuXG5mdW5jdGlvbiBmbG9hdDJEYXRlKGZsb2F0OiBudW1iZXIpIHtcblxuICAgIGxldCBjb250ZW50ID0gbmV3IERhdGUoXCIxODk5LTEyLTMwXCIpO1xuXG4gICAgY29udGVudC5zZXREYXRlKCBjb250ZW50LmdldERhdGUoKSArIGZsb2F0KTtcblxuICAgIHJldHVybiBjb250ZW50O1xufVxuZnVuY3Rpb24gZGF0ZTJGbG9hdChkYXRlOiBEYXRlKSB7XG4gICAgY29uc3QgYmVnID0gbmV3IERhdGUoXCIxODk5LTEyLTMwXCIpO1xuICAgIHJldHVybiArKChkYXRlLmdldFRpbWUoKSAtIGJlZy5nZXRUaW1lKCkpIC8gKDI0KjM2MDAqMTAwMCkpLnRvRml4ZWQoNyk7XG59XG5cbmV4cG9ydCBjb25zdCBGb3JtYXRzID0ge1xuXG4gICAgZGVmYXVsdDogZnVuY3Rpb24odGhpczogQ2VsbHxudWxsLCB2YWx1ZSA9IHRoaXM/LnJhd0NvbnRlbnQpIHtcblxuICAgICAgICBjb25zdCBwcmVjID0gKyh0aGlzPy5nZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicpID8/IDIpO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcblxuICAgICAgICAgICAgaWYoIHRoaXM/LmdldEF0dHJpYnV0ZSgndHlwZScpID09PSBcInBvdXJjZW50XCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAkeysoICgrdmFsdWUpKjEwMCkudG9QcmVjaXNpb24oNyl9YC5yZXBsYWNlKCcuJywgJywnKSArIFwiJVwiO1xuXG4gICAgICAgICAgICByZXR1cm4gYCR7K3ZhbHVlLnRvUHJlY2lzaW9uKDcpfWAucmVwbGFjZSgnLicsICcsJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggdHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIilcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA/ICdWUkFJJyA6ICdGQVVYJztcblxuICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBGb3JtdWxhKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIGV1cm9zOiBmdW5jdGlvbih0aGlzOkNlbGwsIHZhbHVlID0gdGhpcy5yYXdDb250ZW50KSB7XG5cbiAgICAgICAgaWYodmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuXG4gICAgICAgIGlmKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSlcbiAgICAgICAgICAgIHZhbHVlID0gZGF0ZTJGbG9hdCh2YWx1ZSk7XG5cbiAgICAgICAgaWYoIHRoaXMuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgQ2FsY1NoZWV0LmdldFNoZWV0RnJvbUNlbGwodGhpcykuZ2V0UmFuZ2UodGhpcykuY29udGVudCA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJlYyA9ICsodGhpcy5nZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicpID8/IDIpO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHtcbiAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogcHJlYyxcbiAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogcHJlY1xuICAgICAgICAgICAgfSkgKyAn4oKsJztcbiAgICAgICAgLy8udG9GaXhlZCgyKSArICfigqwnO1xuICAgIH0sXG4gICAgZGF0ZTogZnVuY3Rpb24odGhpczpDZWxsLCB2YWx1ZSA9IHRoaXMucmF3Q29udGVudCkge1xuICAgICAgICBcbiAgICAgICAgaWYodmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgaWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcblxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuXG4gICAgICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgKSB7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IHZhbHVlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUZSXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUuc2xpY2UoMCwgNikgKyBkYXRlLnNsaWNlKDgpO1xuICAgICAgICB9IGlmKCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGZsb2F0MkRhdGUodmFsdWUpO1xuXG4gICAgICAgICAgICBpZiggISAodGhpcy5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSkgKVxuICAgICAgICAgICAgICAgIENhbGNTaGVldC5nZXRTaGVldEZyb21DZWxsKHRoaXMpLmdldFJhbmdlKCB0aGlzICkuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBkYXRlID0gY29udGVudC50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRlLnNsaWNlKDAsIDYpICsgZGF0ZS5zbGljZSg4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIHBvdXJjZW50OiBmdW5jdGlvbih0aGlzOkNlbGwsIHZhbHVlID0gdGhpcy5yYXdDb250ZW50KSB7XG4gICAgICAgIGlmKHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgaWYodmFsdWUgaW5zdGFuY2VvZiBEYXRlKVxuICAgICAgICAgICAgdmFsdWUgPSBkYXRlMkZsb2F0KHZhbHVlKTtcblxuICAgICAgICBpZiggdGhpcy5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpICE9PSBcInBvdXJjZW50XCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInBvdXJjZW50XCIpO1xuICAgICAgICAgICAgQ2FsY1NoZWV0LmdldFNoZWV0RnJvbUNlbGwodGhpcykuZ2V0UmFuZ2UodGhpcykuY29udGVudCA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJlYyA9ICsodGhpcy5nZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicpID8/IDIpO1xuXG4gICAgICAgIHJldHVybiAodmFsdWUgKiAxMDApLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjLFxuICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjXG4gICAgICAgICAgICB9KSArICclJztcbiAgICB9LFxuICAgIG51bWJlcjogZnVuY3Rpb24odGhpczpDZWxsLCB2YWx1ZSA9IHRoaXMucmF3Q29udGVudCkge1xuICAgICAgICBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG5cbiAgICAgICAgaWYodmFsdWUgaW5zdGFuY2VvZiBEYXRlKVxuICAgICAgICAgICAgdmFsdWUgPSBkYXRlMkZsb2F0KHZhbHVlKTtcblxuICAgICAgICBpZiggdGhpcy5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJudW1iZXJcIik7XG4gICAgICAgICAgICBDYWxjU2hlZXQuZ2V0U2hlZXRGcm9tQ2VsbCh0aGlzKS5nZXRSYW5nZSh0aGlzKS5jb250ZW50ID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmVjID0gKyh0aGlzLmdldEF0dHJpYnV0ZSgncHJlY2lzaW9uJykgPz8gMik7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjLFxuICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjXG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGb3JtYXQge1xuXG4gICAgI2Zvcm1hdDogUmVjb3JkPHN0cmluZywgYW55PjtcblxuICAgIGNvbnN0cnVjdG9yKGZvcm1hdDogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgICAgICB0aGlzLiNmb3JtYXQgPSBmb3JtYXQ7XG4gICAgfVxuXG4gICAgYXBwbHlUbyhjZWxsOiBDZWxsfENlbGxMaXN0KSB7XG5cbiAgICAgICAgaWYoIGNlbGwgaW5zdGFuY2VvZiBDZWxsTGlzdCkge1xuXG4gICAgICAgICAgICBmb3IobGV0IGMgb2YgY2VsbC5jZWxscylcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5VG8oYyk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgbmFtZSBpbiB0aGlzLiNmb3JtYXQpIHtcbiAgICAgICAgICAgIGxldCB2YWwgPSB0aGlzLiNmb3JtYXRbbmFtZV07XG5cbiAgICAgICAgICAgIGlmKG5hbWUgPT09ICdmb3JtYXQnKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggdmFsID09PSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY2VsbC5mb3JtYXQgPSBGb3JtYXRzLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBjZWxsLmZvcm1hdCgpOyAvL1RPRE86IGlmIGZjdFxuICAgIFxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjZWxsLmZvcm1hdCA9IHZhbDtcbiAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gY2VsbC5mb3JtYXQoIGNlbGwucmF3Q29udGVudCk7IC8vVE9ETzogaWYgZmN0XG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYobmFtZSA9PT0gJ3ByZWNpc2lvbicpIHtcbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgncHJlY2lzaW9uJywgdmFsKTtcbiAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gY2VsbC5mb3JtYXQ/LiggY2VsbC5yYXdDb250ZW50KTsgLy9UT0RPOiBpZiBmY3RcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIG5hbWUgPT09ICdzcGFuJyApIHtcblxuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hlZXQgPSBDYWxjU2hlZXQuZ2V0U2hlZXRGcm9tQ2VsbChjZWxsKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiggdmFsWzBdID09PSAxICYmIHZhbFsxXSA9PT0gMSkgeyAvLyB1bm1lcmdlXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHIgPSArKGNlbGwuZ2V0QXR0cmlidXRlKCdyb3dzcGFuJykgPz8gMCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjID0gKyhjZWxsLmdldEF0dHJpYnV0ZSgnY29sc3BhbicpID8/IDApO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByOyArK2kpXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgYzsgKytqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gc2hlZXQucmVsYXRpdmVUbyhjZWxsLCBpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGFyZ2V0LmNlbGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgncm93c3BhbicpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgnY29sc3BhbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdyb3dzcGFuJywgYCR7dmFsWzBdfWApO1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgYCR7dmFsWzFdfWApO1xuXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHZhbFswXTsgKytpKVxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdmFsWzFdOyArK2opIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGkgPT09IDAgJiYgaiA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gc2hlZXQucmVsYXRpdmVUbyhjZWxsLCBpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jZWxsID0gY2VsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCB0eXBlb2YgdmFsID09PSBcImJvb2xlYW5cIikge1xuXG4gICAgICAgICAgICAgICAgaWYoIG5hbWUuc3RhcnRzV2l0aCgnYWxpZ25fJykgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYWxpZ25fbGVmdCcpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2FsaWduX2NlbnRlcicpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2FsaWduX3JpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCBuYW1lLnN0YXJ0c1dpdGgoJ3ZhbGlnbl8nKSApIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZ25fdG9wJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWduX21pZGRsZScpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlnbl9ib3R0b20nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUobmFtZSwgdmFsKTtcblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjZWxsLnN0eWxlLnNldFByb3BlcnR5KGAtLSR7bmFtZX1gLCB2YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UHJvcGVydHkobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNmb3JtYXRbbmFtZV07XG4gICAgfVxuICAgIGhhc1Byb3BlcnR5KG5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmFtZSBpbiB0aGlzLiNmb3JtYXQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGV4dHJhY3RGb3JtYXQoY2VsbDogQ2VsbHxDZWxsTGlzdCk6IEZvcm1hdCB7XG4gICAgICAgIFxuICAgICAgICBpZiggY2VsbCBpbnN0YW5jZW9mIENlbGxMaXN0KSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gY2VsbC5jZWxscztcblxuICAgICAgICAgICAgbGV0IGZvcm1hdCA9IEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzWzBdKTtcblxuICAgICAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IGNlbGxzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGYyID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHNbaV0pO1xuXG4gICAgICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gZm9ybWF0LiNmb3JtYXQpXG4gICAgICAgICAgICAgICAgICAgIGlmKCAhIChrZXkgaW4gZjIuI2Zvcm1hdCkgfHwgZjIuI2Zvcm1hdFtrZXldICE9PSBmb3JtYXQuI2Zvcm1hdFtrZXldIClcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBmb3JtYXQuI2Zvcm1hdFtrZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgZm9ybWF0ID0gT2JqZWN0LmZyb21FbnRyaWVzPGFueT4oIFsuLi5jZWxsLmNsYXNzTGlzdC52YWx1ZXMoKV0ubWFwKGUgPT4gW2UsIHRydWVdKSApO1xuICAgICAgICBcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNlbGwuc3R5bGUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBuYW1lID0gY2VsbC5zdHlsZS5pdGVtKGkpO1xuICAgICAgICAgICAgaWYoICEgbmFtZS5zdGFydHNXaXRoKCctLScpIClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIGZvcm1hdFtuYW1lLnNsaWNlKDIpXSA9IGNlbGwuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbHNwYW4gPSArKGNlbGwuZ2V0QXR0cmlidXRlKCdjb2xzcGFuJykgPz8gMSk7XG4gICAgICAgIGNvbnN0IHJvd3NwYW4gPSArKGNlbGwuZ2V0QXR0cmlidXRlKCdyb3dzcGFuJykgPz8gMSk7XG5cbiAgICAgICAgaWYoIGNvbHNwYW4gPiAxIHx8IHJvd3NwYW4gPiAxIClcbiAgICAgICAgICAgIGZvcm1hdC5zcGFuID0gWyByb3dzcGFuLCBjb2xzcGFuIF07XG5cbiAgICAgICAgaWYoICEgKFwiZm9udF9zaXplXCIgaW4gZm9ybWF0KSApXG4gICAgICAgICAgICBmb3JtYXRbJ2ZvbnRfc2l6ZSddID0gJzEwcHQnO1xuXG4gICAgICAgIGlmKCBcImZvcm1hdFwiIGluIGNlbGwpXG4gICAgICAgICAgICBmb3JtYXQuZm9ybWF0ID0gY2VsbC5mb3JtYXQ7XG5cbiAgICAgICAgaWYoIGNlbGwuaGFzQXR0cmlidXRlKCdwcmVjaXNpb24nKSApXG4gICAgICAgICAgICBmb3JtYXQucHJlY2lzaW9uID0gY2VsbC5nZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicpO1xuXG4gICAgICAgIHJldHVybiBuZXcgRm9ybWF0KGZvcm1hdCk7XG4gICAgfVxufSIsIi8vVE9ETzogd2VicGFjayBjb25maWcuLi5cbmltcG9ydCBMSVNTIGZyb20gXCIuLi8uLi8uLi9saWJzL0xJU1NcIjtcbmltcG9ydCB7IEZvcm1hdHMgfSBmcm9tIFwiLi9mb3JtYXRcIjtcbmltcG9ydCB7IENhbGNTaGVldCwgQ2VsbCB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbmNvbnN0IGNzcyA9IGBcbiAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgJiBwcmUge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoIDFyZW0gKyA4cHggKyAycHggKTtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGliZXJhdGlvbiBTYW5zJztcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cblxuZXhwb3J0IGNsYXNzIENhbGNGb3JtdWxhIGV4dGVuZHMgTElTUyh7XG4gICAgY3NzXG59KSB7XG5cbiAgICAjaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcbiAgICAjc2hlZXQgICE6IENhbGNTaGVldDtcbiAgICAjY3VyX2NlbGw6IENlbGx8bnVsbCA9IG51bGw7XG4gICAgI29uSW5wdXQ6IChldjogRXZlbnQpID0+IHZvaWQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKCB0aGlzLiNpbnB1dCApO1xuXG4gICAgICAgIHRoaXMuI2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiggdGhpcy4jY3VyX2NlbGwgPT09IG51bGwgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgLy90aGlzLiNzaGVldC5jdXJzb3IuY29udGVudCA9IHRoaXMuI2lucHV0LnRleHRDb250ZW50ITtcbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPSBudWxsO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiggdGhpcy4jY3VyX2NlbGwgPT09IG51bGwgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy4jc2hlZXQuc3RhdGVzLmNlbGxfZWRpdC5zdGF0ZSA9IHRoaXMuI2N1cl9jZWxsO1xuICAgICAgICAgICAgLy90aGlzLiNjdXJfY2VsbCEudGV4dENvbnRlbnQgPSB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgaWYoIHRoaXMuI2N1cl9jZWxsID09PSBudWxsIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsIS50ZXh0Q29udGVudCA9IEZvcm1hdHMuZGVmYXVsdC5jYWxsKHRoaXMuI2N1cl9jZWxsLCB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCEgKTtcbiAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudCgnaW5wdXQnLCB7ZGV0YWlsOiB0cnVlfSkgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jb25JbnB1dCA9IChldjogRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBpZiggZXYuZGV0YWlsID09PSB0cnVlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gRm9ybWF0cy5kZWZhdWx0LmNhbGwoIHRoaXMuI2N1cl9jZWxsISwgdGhpcy4jY3VyX2NlbGwhLnRleHRDb250ZW50ISApO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN5bmNUbyhzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcbiAgICAgICAgY29uc3QgY3Vyc29yID0gdGhpcy4jc2hlZXQuY3Vyc29yO1xuXG4gICAgICAgIHNoZWV0Lmhvc3QuYWRkRXZlbnRMaXN0ZW5lcigndXBkYXRlJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdGhpcy4jaW5wdXQudGV4dENvbnRlbnQgPSBGb3JtYXRzLmRlZmF1bHQuY2FsbChjdXJzb3IuZmlyc3RDZWxsICk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY3Vyc29yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgY2VsbHMgPSBjdXJzb3IuY2VsbHM7XG5cbiAgICAgICAgICAgIHRoaXMuI2lucHV0LnRvZ2dsZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgISBzaGVldC5pc1JPICk7XG5cbiAgICAgICAgICAgIGlmKCBjZWxscy5sZW5ndGggPT09IDApIHtcblxuICAgICAgICAgICAgICAgIGlmKCB0aGlzLiNjdXJfY2VsbCAhPT0gbnVsbCApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy4jb25JbnB1dCk7XG4gICAgICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jaW5wdXQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwgPSBjZWxsc1swXTtcbiAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy4jb25JbnB1dCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gRm9ybWF0cy5kZWZhdWx0LmNhbGwoIHRoaXMuI2N1cl9jZWxsICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5MSVNTLmRlZmluZSgnY2FsYy1mb3JtdWxhJywgQ2FsY0Zvcm11bGEpOyIsImltcG9ydCB7IEZvcm1hdHMgfSBmcm9tIFwiLi9mb3JtYXRcIjtcbmltcG9ydCB7IENhbGNTaGVldCwgVmFsdWVUeXBlIH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuZXhwb3J0IGNsYXNzIEZvcm11bGEge1xuXG4gICAgI3N0cjogc3RyaW5nO1xuICAgICNleGVjOiAoc2hlZXQ6IENhbGNTaGVldCkgPT4gVmFsdWVUeXBlO1xuICAgICNyYW5nZXM6IFRva2VuW107XG5cbiAgICBjb25zdHJ1Y3RvcihzdHI6IHN0cmluZywgZXhlYzogKHNoZWV0OiBDYWxjU2hlZXQpID0+IFZhbHVlVHlwZSwgcmFuZ2VzX3Rva2VuOiBUb2tlbltdID0gW10pIHtcblxuICAgICAgICB0aGlzLiNzdHIgPSBzdHI7XG4gICAgICAgIHRoaXMuI2V4ZWMgPSBleGVjO1xuICAgICAgICB0aGlzLiNyYW5nZXMgPSByYW5nZXNfdG9rZW47XG4gICAgfVxuICAgIFxuICAgIHJlbGF0aXZlVG8oIHNoZWV0OiBDYWxjU2hlZXQsIGRyb3c6IG51bWJlciwgZGNvbDogbnVtYmVyKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgbmV3X3JhbmdlcyA9IHRoaXMuI3Jhbmdlcy5tYXAociA9PiB7XG5cbiAgICAgICAgICAgIC8vVE9ETzogaWYgcmFuZ2UuLi5cbiAgICAgICAgICAgIGxldCBwb3MgPSBbLi4uc2hlZXQuY2VsbFBvcyggc2hlZXQuZ2V0Q2VsbHMoci52YWx1ZSkuY2VsbHNbMF0gKV07XG4gICAgXG4gICAgICAgICAgICBpZiggci52YWx1ZS5sYXN0SW5kZXhPZignJCcpIDw9IDAgKVxuICAgICAgICAgICAgICAgIHBvc1swXSArPSBkcm93O1xuICAgICAgICAgICAgaWYoIHIudmFsdWVbMF0gIT09ICckJyApXG4gICAgICAgICAgICAgICAgcG9zWzFdICs9IGRjb2w7XG5cbiAgICAgICAgICAgIHJldHVybiBgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1K3Bvc1sxXS0xKX0ke3Bvc1swXX1gO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbmV3X2Zvcm11bGEgPSBcIlwiO1xuXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy4jcmFuZ2VzLmxlbmd0aDsgKytpKSB7XG5cbiAgICAgICAgICAgIG5ld19mb3JtdWxhICs9IHRoaXMuI3N0ci5zbGljZShvZmZzZXQsIHRoaXMuI3Jhbmdlc1tpXS5iZWcpO1xuICAgICAgICAgICAgbmV3X2Zvcm11bGEgKz0gbmV3X3Jhbmdlc1tpXTtcblxuICAgICAgICAgICAgb2Zmc2V0ID0gdGhpcy4jcmFuZ2VzW2ldLmVuZDtcbiAgICAgICAgfVxuICAgICAgICBuZXdfZm9ybXVsYSArPSB0aGlzLiNzdHIuc2xpY2Uob2Zmc2V0KTtcbiAgICAgICAgXG4gICAgICAgIC8vY2FuIGJlIG9wdGltaXplZC4uLlxuICAgICAgICByZXR1cm4gcGFyc2VfZm9ybXVsYSggbmV3X2Zvcm11bGEgKTtcbiAgICB9XG5cbiAgICBnZXQgcmFuZ2VzVG9rZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNyYW5nZXM7XG4gICAgfVxuXG4gICAgZXhlYyhzaGVldDogQ2FsY1NoZWV0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNleGVjKHNoZWV0KTtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3N0cjtcbiAgICB9XG59XG5cbnR5cGUgVG9rZW4gPSB7XG4gICAgYmVnOiBudW1iZXIsXG4gICAgZW5kOiBudW1iZXIsXG4gICAgdmFsdWU6IHN0cmluZyxcbiAgICB0eXBlOiBcInN0cmluZ1wifFwibnVtYmVyXCJ8XCJjYWxsXCJ8XCJyYW5nZVwifFwib3BcIlxufVxuXG5cbmZ1bmN0aW9uIGV4dHJhY3RUb2tlbihzdHI6IHN0cmluZywgb2Zmc2V0OiBudW1iZXIpIHtcblxuICAgIHdoaWxlKCBbJyAnLCAnXFxuJywgJ1xcdCddLmluY2x1ZGVzKHN0cltvZmZzZXRdKSApIC8vIGlnbm9yZSB3aGl0ZXNwYWNlc1xuICAgICAgICArK29mZnNldDtcblxuICAgIGxldCB0b2tlbjogUGFydGlhbDxUb2tlbj4gPSB7XG4gICAgICAgIGJlZzogb2Zmc2V0XG4gICAgfTtcblxuICAgIGlmKHN0cltvZmZzZXRdID09PSAnXCInKSB7XG4gICAgICAgIHRva2VuLnR5cGUgPSBcInN0cmluZ1wiO1xuICAgICAgICB3aGlsZSggc3RyWysrb2Zmc2V0XSAhPT0gJ1wiJyAmJiBzdHJbb2Zmc2V0LTFdICE9PSAnXFxcXCcpIHtcbiAgICAgICAgICAgIGlmKG9mZnNldCsxID49IHN0ci5sZW5ndGggKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRm9ybXVsYSBwYXJzaW5nIGVycm9yJyk7XG4gICAgICAgIH1cbiAgICAgICAgKytvZmZzZXQ7XG4gICAgfSBlbHNlIGlmKCBzdHJbb2Zmc2V0XSA9PT0gJywnIHx8IChzdHJbb2Zmc2V0XSA+PSAnMCcgJiYgc3RyW29mZnNldF0gPD0gJzknKSApIHtcbiAgICAgICAgdG9rZW4udHlwZSA9IFwibnVtYmVyXCI7XG4gICAgICAgIGxldCBoYXNDb21tYSA9IGZhbHNlO1xuICAgICAgICB3aGlsZSggc3RyW29mZnNldF0gPT09ICcsJyB8fCBzdHJbb2Zmc2V0XSA+PSAnMCcgJiYgc3RyW29mZnNldF0gPD0gJzknICkge1xuXG4gICAgICAgICAgICBpZiggc3RyW29mZnNldF0gPT09ICcsJyApIHtcbiAgICAgICAgICAgICAgICBpZihoYXNDb21tYSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JtdWxhIHBhcnNpbmcgZXJyb3InKTtcbiAgICAgICAgICAgICAgICBoYXNDb21tYSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICsrb2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICB9IGVsc2UgaWYoIHN0cltvZmZzZXRdID09PSAnJCcgfHwgc3RyW29mZnNldF0gPj0gJ0EnICYmIHN0cltvZmZzZXRdIDw9ICdaJykgeyAvLyskXG4gICAgICAgIFxuICAgICAgICB3aGlsZSggb2Zmc2V0IDwgc3RyLmxlbmd0aFxuICAgICAgICAgICAgICAgICYmIChzdHJbb2Zmc2V0XSA9PT0gJyQnIHx8IHN0cltvZmZzZXRdID49ICdBJyAmJiBzdHJbb2Zmc2V0XSA8PSAnWidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBzdHJbb2Zmc2V0XSA+PSAnMCcgJiYgc3RyW29mZnNldF0gPD0gJzknXG4gICAgICAgICAgICAgICAgICAgICkgKVxuICAgICAgICAgICAgKytvZmZzZXQ7XG5cbiAgICAgICAgdG9rZW4udHlwZSA9IHN0cltvZmZzZXRdID09PSAnKCcgPyAnY2FsbCcgOiAncmFuZ2UnO1xuXG4gICAgICAgIGlmKCBzdHJbb2Zmc2V0XSA9PT0gJygnIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b2tlbi50eXBlID0gXCJvcFwiOyAvLyBvbmx5IG9uIGNoYXIgPz8/XG5cbiAgICAgICAgaWYoIHN0cltvZmZzZXQgKyAxXSA9PT0gJz0nKSAvLyA+PSAvIDw9XG4gICAgICAgICAgICArK29mZnNldDtcbiAgICAgICAgZWxzZSBpZiggc3RyW29mZnNldCArIDFdID09PSAnPicpIC8vIDw+XG4gICAgICAgICAgICArK29mZnNldDtcblxuICAgICAgICArK29mZnNldDtcbiAgICB9XG5cbiAgICB0b2tlbi5lbmQgPSBvZmZzZXQ7XG4gICAgdG9rZW4udmFsdWUgPSBzdHIuc2xpY2UodG9rZW4uYmVnLCB0b2tlbi5lbmQpO1xuXG4gICAgcmV0dXJuIHRva2VuIGFzIFJlcXVpcmVkPFRva2VuPjtcbn1cblxuY2xhc3MgTm9kZSB7XG5cbiAgICBjaGlsZHJlbjogTm9kZVtdO1xuICAgICNmY3Q6IChzaGVldDogQ2FsY1NoZWV0LCAuLi5hcmdzOihWYWx1ZVR5cGUpW10pID0+IFZhbHVlVHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKGZjdDogKHNoZWV0OiBDYWxjU2hlZXQsIC4uLmFyZ3M6KFZhbHVlVHlwZSlbXSkgPT4gVmFsdWVUeXBlLCAuLi5jaGlsZHJlbjogTm9kZVtdKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgaWYoY2hpbGRyZW4gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIldURlwiKTtcbiAgICAgICAgdGhpcy4jZmN0ID0gZmN0O1xuICAgIH1cblxuICAgIGV2YWwoc2hlZXQ6IENhbGNTaGVldCk6IFZhbHVlVHlwZSB7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSB0aGlzLmNoaWxkcmVuLm1hcCggYyA9PiBjLmV2YWwoc2hlZXQpICk7XG4gICAgICAgIHJldHVybiB0aGlzLiNmY3Qoc2hlZXQsIC4uLmFyZ3MgKTtcbiAgICB9XG4gICAgXG59XG5cbmZ1bmN0aW9uIHRvTnVtYmVyKGE6IHVua25vd24pOiBudW1iZXIge1xuXG4gICAgaWYoYSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gMDtcbiAgICByZXR1cm4gYSBhcyB1bmtub3duIGFzIG51bWJlcjtcbn1cblxuY29uc3Qgb3BfaW1wbCA9IHtcbiAgICAnJSc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24pID0+IHRvTnVtYmVyKGEpLzEwMCxcbiAgICAndS4rJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93bikgPT4gK3RvTnVtYmVyKGEpLFxuICAgICd1Li0nOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duKSA9PiAtdG9OdW1iZXIoYSksXG4gICAgJyonOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiB0b051bWJlcihhKSp0b051bWJlcihiKSxcbiAgICAnLyc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24sIGI6IHVua25vd24pID0+IHRvTnVtYmVyKGEpL3RvTnVtYmVyKGIpLFxuICAgICcrJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93biwgYjogdW5rbm93bikgPT4gdG9OdW1iZXIoYSkrdG9OdW1iZXIoYiksXG4gICAgJy0nOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiB0b051bWJlcihhKS10b051bWJlcihiKSxcbiAgICAnXic6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24sIGI6IHVua25vd24pID0+IE1hdGgucG93KHRvTnVtYmVyKGEpLHRvTnVtYmVyKGIpICksXG4gICAgJyYnOiAoXzogQ2FsY1NoZWV0LCBhOiBzdHJpbmcsIGI6IHN0cmluZykgPT4gYCR7Rm9ybWF0cy5kZWZhdWx0LmNhbGwobnVsbCwgYSl9JHtGb3JtYXRzLmRlZmF1bHQuY2FsbChudWxsLCBiKX1gLFxuICAgICc9JzogIChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhID09PSBiLFxuICAgICc8Pic6IChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhICE9PSBiLFxuICAgICc+JzogIChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhID4gYixcbiAgICAnPj0nOiAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSA+PSBiLFxuICAgICc8JzogIChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhIDwgYixcbiAgICAnPD0nOiAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSA8PSBiLFxufSBhcyBSZWNvcmQ8c3RyaW5nLCAoXzogQ2FsY1NoZWV0LCAuLi5hcmdzOlZhbHVlVHlwZVtdKSA9PiBWYWx1ZVR5cGU+O1xuXG4vLyBodHRwczovL2hlbHAubGlicmVvZmZpY2Uub3JnL2xhdGVzdC9lbi1VUy90ZXh0L3NjYWxjLzAxLzA0MDYwMTk5Lmh0bWxcbmNvbnN0IG9wX3ByaW8gPSBbXG4gICAgWyc6J10sIC8vIHJhbmdlXG4gICAgWychJ10sIC8vIHJhbmdlIGludGVyc2VjdGlvblxuICAgIFsnfiddLCAvLyByYW5nZSB1bmlvblxuICAgIFsndS4rJywgJ3UuLSddLCAvLyB1bmFyeSAtIGZyb20gcmlnaHQgdG8gbGVmdC4uLlxuICAgIFsnJSddLCAvLyBwb3N0Zml4LCAvMTAwXG4gICAgWydeJ10sIC8vIHBvd2VyXG4gICAgWycqJywgJy8nXSxcbiAgICBbJysnLCAnLSddLFxuICAgIFsnJiddLCAvLyBzdHJpbmcgY29uY2F0XG4gICAgWyc9JywgJzw+JywgJzwnLCAnPD0nLCAnPicsICc+PSddIC8vIGNvbXBhcmVcbl07XG5cbmxldCBvcHM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fTtcbmZvcihsZXQgaSA9IDA7IGkgPCBvcF9wcmlvLmxlbmd0aDsgKytpKVxuICAgIGZvcihsZXQgb3Agb2Ygb3BfcHJpb1tpXSApXG4gICAgICAgIG9wc1tvcF0gPSBpO1xuXG5mdW5jdGlvbiB0b2tlbmxpc3QyVHJlZSh0b2tlbnM6IFRva2VuW10pOiBOb2RlIHtcblxuICAgIGlmKCB0b2tlbnMubGVuZ3RoID09PSAxKSB7XG5cbiAgICAgICAgaWYoIHRva2Vuc1swXS50eXBlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBjb25zdCBuYiA9ICt0b2tlbnNbMF0udmFsdWUucmVwbGFjZSgnLCcsICcuJyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vZGUoICgpID0+IG5iKTtcbiAgICAgICAgfVxuICAgICAgICBpZiggdG9rZW5zWzBdLnR5cGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0ciA9IHRva2Vuc1swXS52YWx1ZS5zbGljZSgxLC0xKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTm9kZSggKCkgPT4gc3RyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiggdG9rZW5zWzBdLnR5cGUgPT09IFwicmFuZ2VcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBOb2RlKCAoc2hlZXQ6IENhbGNTaGVldCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IHJhdyA9IHNoZWV0LmdldENlbGxzKHRva2Vuc1swXS52YWx1ZSkuY2VsbHNbMF0ucmF3Q29udGVudDtcblxuICAgICAgICAgICAgICAgIGlmKCByYXcgaW5zdGFuY2VvZiBGb3JtdWxhKVxuICAgICAgICAgICAgICAgICAgICByYXcgPSByYXcuZXhlYyhzaGVldCk7IC8vIFRPRE86IGNhY2hlIHJlc3VsdFxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJhdyBhcyBWYWx1ZVR5cGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCI/Pz9cIik7XG4gICAgfVxuXG4gICAgaWYodG9rZW5zWzBdLnZhbHVlID09PSAnKCcgJiYgdG9rZW5zW3Rva2Vucy5sZW5ndGgtMV0udmFsdWUgPT09ICcpJylcbiAgICAgICAgcmV0dXJuIHRva2VubGlzdDJUcmVlKHRva2Vucy5zbGljZSgxLC0xKSApO1xuXG4gICAgbGV0IGN1ciA9IHtcbiAgICAgICAgcHJpb3JpdHk6IG9wX3ByaW8ubGVuZ3RoLFxuICAgICAgICBpZHggICAgIDogLTFcbiAgICB9O1xuXG4gICAgZm9yKGxldCBpID0gdG9rZW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIGlmKCB0b2tlbnNbaV0udHlwZSAhPT0gXCJvcFwiICkgLy8gY2FsbCBub3QgaGFuZGxlZCB5ZXQuLi5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgIGlmKCB0b2tlbnNbaV0udmFsdWUgPT09ICcpJyApIHsgLy8gZ28gdG8gZmlyc3QgJygnXG4gICAgICAgICAgICBpID0gdG9rZW5zLmZpbmRJbmRleCggdCA9PiB0LnR5cGUgPT09ICdvcCcgJiYgdC52YWx1ZSA9PT0gJygnKTtcblxuICAgICAgICAgICAgaWYoIGkgPT09IDApXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAtLWk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhc3NlcnRzIGlmIHVuYXJ5IG9wLlxuICAgICAgICBpZiggdG9rZW5zW2ldLnZhbHVlID09PSAnLScgfHwgdG9rZW5zW2ldLnZhbHVlID09PSAnKycgKSB7XG5cbiAgICAgICAgICAgIGlmKCBpID09PSAwIHx8IHRva2Vuc1tpLTFdLnR5cGUgPT09IFwib3BcIiApIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHVfb3AgPSBgdS4ke3Rva2Vuc1tpXS52YWx1ZX1gO1xuICAgICAgICAgICAgICAgIHRva2Vuc1tpXS52YWx1ZSA9IHVfb3A7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBvcHNbdV9vcF07XG5cbiAgICAgICAgICAgICAgICAvLyBwcmlvcml0eSBpcyByZXZlcnNlZCArIGV2YWx1YXRlZCBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gICAgICAgICAgICAgICAgaWYoIHByaW9yaXR5IDw9IGN1ci5wcmlvcml0eSkge1xuICAgICAgICAgICAgICAgICAgICBjdXIucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgICAgICAgICAgICAgY3VyLmlkeCAgICAgID0gaTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gb3BzW3Rva2Vuc1tpXS52YWx1ZV07XG5cbiAgICAgICAgLy8gcHJpb3JpdHkgaXMgcmV2ZXJzZWQuXG4gICAgICAgIGlmKCBwcmlvcml0eSA8IGN1ci5wcmlvcml0eSkge1xuICAgICAgICAgICAgY3VyLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgICAgICBjdXIuaWR4ICAgICAgPSBpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoIGN1ci5pZHggPT09IC0xKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJz8/PycpO1xuXG4gICAgbGV0IG9wX3Rva2VuID0gdG9rZW5zW2N1ci5pZHhdO1xuICAgIGlmKCBvcF90b2tlbi52YWx1ZSA9PT0gJyUnICkge1xuICAgICAgICBjb25zdCBsZWZ0ICA9IHRva2Vucy5zbGljZSgwLCBjdXIuaWR4KTtcbiAgICAgICAgY29uc3Qgb3AgPSBvcF9pbXBsW29wX3Rva2VuLnZhbHVlIGFzIGtleW9mIHR5cGVvZiBvcF9pbXBsXTtcbiAgICAgICAgcmV0dXJuIG5ldyBOb2RlKFxuICAgICAgICAgICAgb3AsXG4gICAgICAgICAgICB0b2tlbmxpc3QyVHJlZShsZWZ0KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlmKCBvcF90b2tlbi52YWx1ZSA9PT0gJ3UuLScgfHwgIG9wX3Rva2VuLnZhbHVlID09PSAndS4rJyApIHtcblxuICAgICAgICBjb25zdCByaWdodCAgPSB0b2tlbnMuc2xpY2UoY3VyLmlkeCsxKTtcbiAgICAgICAgY29uc3Qgb3AgPSBvcF9pbXBsW29wX3Rva2VuLnZhbHVlIGFzIGtleW9mIHR5cGVvZiBvcF9pbXBsXTtcbiAgICAgICAgcmV0dXJuIG5ldyBOb2RlKFxuICAgICAgICAgICAgb3AsXG4gICAgICAgICAgICB0b2tlbmxpc3QyVHJlZShyaWdodClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBsZWZ0ICA9IHRva2Vucy5zbGljZSgwLCBjdXIuaWR4KTtcbiAgICBjb25zdCByaWdodCA9IHRva2Vucy5zbGljZShjdXIuaWR4KzEpO1xuXG4gICAgY29uc3Qgb3AgPSBvcF9pbXBsW29wX3Rva2VuLnZhbHVlIGFzIGtleW9mIHR5cGVvZiBvcF9pbXBsXTtcblxuICAgIHJldHVybiBuZXcgTm9kZShcbiAgICAgICAgb3AsXG4gICAgICAgIHRva2VubGlzdDJUcmVlKGxlZnQpLFxuICAgICAgICB0b2tlbmxpc3QyVHJlZShyaWdodClcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VfZm9ybXVsYShzdHI6c3RyaW5nKSB7XG5cbiAgICBsZXQgb2Zmc2V0ID0gMTtcbiAgICBsZXQgdG9rZW5zID0gbmV3IEFycmF5PFRva2VuPigpO1xuXG4gICAgd2hpbGUoIG9mZnNldCA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGN1clRva2VuID0gZXh0cmFjdFRva2VuKHN0ciwgb2Zmc2V0KTtcbiAgICAgICAgdG9rZW5zLnB1c2goIGN1clRva2VuICk7XG4gICAgICAgIG9mZnNldCA9IGN1clRva2VuLmVuZDtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gdG9rZW5saXN0MlRyZWUodG9rZW5zKSE7XG5cbiAgICBjb25zdCByYW5nZXMgPSB0b2tlbnMuZmlsdGVyKHQgPT4gdC50eXBlID09PSBcInJhbmdlXCIgKTtcblxuICAgIHJldHVybiBuZXcgRm9ybXVsYShzdHIsIChzaGVldDogQ2FsY1NoZWV0KSA9PiBub2RlLmV2YWwoc2hlZXQpLCByYW5nZXMgKTtcbn0iLCIvL1RPRE86IHdlYnBhY2sgY29uZmlnLi4uXG5pbXBvcnQgTElTUyBmcm9tIFwiLi4vLi4vLi4vbGlicy9MSVNTXCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGxMaXN0LCBkZWZhdWx0Rm9ybWF0IH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuLy9UT0RPOiBzeW50YXggaGlnaGxpZ2h0IDspXG5cbmNvbnN0IGNzcyA9IGBcbiAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgJiBwcmUge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoIDFyZW0gKyA4cHggKyAycHggKTtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGliZXJhdGlvbiBTYW5zJztcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmV4cG9ydCBjbGFzcyBQbGFnZUZvcm11bGEgZXh0ZW5kcyBMSVNTKHtcbiAgICBjc3Ncbn0pIHtcblxuICAgICNpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCggdGhpcy4jaW5wdXQgKTtcbiAgICAgICAgdGhpcy4jaW5wdXQudG9nZ2xlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcblxuICAgICAgICB0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2KSA9PiB7XG4gICAgICAgICAgICBpZihldi5jb2RlICE9PSAnRW50ZXInKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgZXYuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuI3NoZWV0LmdldENlbGxzKHRoaXMuI2lucHV0LnRleHRDb250ZW50ISkuY2VsbHM7XG5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmFkZCggLi4uc2VsZWN0ZWQgKTtcblxuICAgICAgICAgICAgdGhpcy4jc2hlZXQuY3Vyc29yLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLiNzaGVldC5jdXJzb3IuYWRkKCBzZWxlY3RlZFswXSApO1xuXG4gICAgICAgICAgICB0aGlzLiNpbnB1dC5ibHVyKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy9UT0RPLi4uLlxuICAgICAgICB0aGlzLiNpbnB1dC50b2dnbGVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIC8qdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuXG4gICAgICAgIH0pOyovXG4gICAgfVxuXG4gICAgI3NoZWV0ITogQ2FsY1NoZWV0O1xuXG4gICAgc3luY1RvKHNoZWV0OiBDYWxjU2hlZXQpIHtcblxuICAgICAgICB0aGlzLiNzaGVldCA9IHNoZWV0O1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHNoZWV0LnNlbGVjdGlvbjtcblxuICAgICAgICBzZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKF86IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jaW5wdXQudGV4dENvbnRlbnQgPSBzZWxlY3Rpb24ucGxhZ2VfbmFtZSA/PyBcIlwiO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbkxJU1MuZGVmaW5lKCdjYWxjLXBsYWdlJywgUGxhZ2VGb3JtdWxhKTsiLCJpbXBvcnQgeyBDYWxjU2hlZXQsIENlbGwgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5leHBvcnQgY2xhc3MgUGxhZ2VTZWxlY3RvciB7XG5cbiAgICAjdXBkYXRlU2VsZWN0aW9uKCkge1xuXG4gICAgICAgIGxldCBzZWxlY3RlZF9jZWxscyA9IHRoaXMuI3NoZWV0LmdldFJhbmdlKCB0aGlzLiNvcmlnX3BvcywgdGhpcy4jZmluYWxfcG9zICkuY2VsbHM7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmNsZWFyKCk7IC8vIHdlIGFkZCBpdC4uLlxuXG4gICAgICAgIGlmKCB0aGlzLiNpc0N0cmwgKSB7XG5cbiAgICAgICAgICAgIC8vIHJlc3RvcmUgaW5pdGlhbCBzdGF0ZS4uLlxuICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmFkZCguLi50aGlzLiNwcmV2X3NlbGVjdGlvbik7XG5cbiAgICAgICAgICAgIC8vVE9ETyBvbmx5IG9yaWdfdGFyZ2V0Li4uXG4gICAgICAgICAgICBpZih0aGlzLiNzaGVldC5zZWxlY3Rpb24uaGFzKCAuLi5zZWxlY3RlZF9jZWxscyApIClcbiAgICAgICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24ucmVtb3ZlKCAuLi5zZWxlY3RlZF9jZWxscyApO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5hZGQoIC4uLnNlbGVjdGVkX2NlbGxzICk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5hZGQoIC4uLnNlbGVjdGVkX2NlbGxzICk7XG4gICAgfVxuXG4gICAgI2lzQ3RybCAgICAgICAgITogYm9vbGVhbjtcbiAgICAjc2hlZXQgICAgICAgICAgOiBDYWxjU2hlZXQ7XG4gICAgI29yaWdfdGFyZ2V0ICAgITogSFRNTEVsZW1lbnQ7XG4gICAgI29yaWdfcG9zICAgICAgITogW251bWJlciwgbnVtYmVyXTtcbiAgICAjZmluYWxfcG9zICAgICAhOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgICNwcmV2X3NlbGVjdGlvbiE6IENlbGxbXTtcblxuICAgICNldjJwb3MoZXY6IE1vdXNlRXZlbnQpOiBbbnVtYmVyLG51bWJlcl0ge1xuXG4gICAgICAgIGNvbnN0IGNvbHMgPSBbLi4udGhpcy4jc2hlZXQudGJvZHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5dO1xuICAgICAgICBsZXQgY29sX2lkO1xuICAgICAgICBmb3IoY29sX2lkID0gY29scy5sZW5ndGgtMTsgY29sX2lkID49IDA7IC0tY29sX2lkKSB7XG4gICAgICAgICAgICBpZiggZXYuY2xpZW50WCA+PSBjb2xzW2NvbF9pZF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueCApXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJvd3MgPSBbLi4udGhpcy4jc2hlZXQudGJvZHkuY2hpbGRyZW5dLm1hcCggZSA9PiBlLmNoaWxkcmVuWzBdICk7XG4gICAgICAgIGxldCByb3dfaWQ7XG4gICAgICAgIGZvcihyb3dfaWQgPSByb3dzLmxlbmd0aC0xOyByb3dfaWQgPj0gMDsgLS1yb3dfaWQpIHtcbiAgICAgICAgICAgIGlmKCBldi5jbGllbnRZID49IHJvd3Nbcm93X2lkXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55IClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbcm93X2lkLCBjb2xfaWRdO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHNoZWV0OiBDYWxjU2hlZXQpIHtcblxuICAgICAgICB0aGlzLiNzaGVldCA9IHNoZWV0O1xuXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykhO1xuXG4gICAgICAgIGNvbnN0IG9uX21vdXNlX21vdmUgPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgdGhpcy4jZmluYWxfcG9zID0gdGhpcy4jZXYycG9zKGV2KTtcblxuICAgICAgICAgICAgdGhpcy4jdXBkYXRlU2VsZWN0aW9uKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgc2hlZXQuY3Vyc29yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi5yZXBsYWNlQWxsKCBzaGVldC5nZXRWaXNpYmxlQ2VsbChzaGVldC5jdXJzb3IpICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgc2hlZXQuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldjpNb3VzZUV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIGlmKCBzaGVldC5zdGF0ZXMuY2VsbF9lZGl0LnN0YXRlID09PSB0YXJnZXQgKSAgLy8gYSBjZWxsIGJlaW5nIGVkaXRlZC5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiggISBbXCJUSFwiLCBcIlREXCJdLmluY2x1ZGVzKCB0YXJnZXQudGFnTmFtZSApICkvLyAuLi5cbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSA9PT0gXCJUSFwiICYmIHRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJcIiApIHsgLy8gbW91c2Vtb3ZlIGRvZXMgbm90aGluZy5cblxuICAgICAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5jbGVhcigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZiA9IGBBMToke3RoaXMuI3NoZWV0LnBvczJyZWYodGhpcy4jc2hlZXQubmJSb3dzLCB0aGlzLiNzaGVldC5uYkNvbHMpfWA7XG4gICAgICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmFkZCggLi4udGhpcy4jc2hlZXQuZ2V0Q2VsbHMocmVmKS5jZWxscyApO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiNpc0N0cmwgICAgICAgICA9IGV2LmN0cmxLZXk7XG4gICAgICAgICAgICB0aGlzLiNvcmlnX3RhcmdldCAgICA9IHRhcmdldDtcbiAgICAgICAgICAgIHRoaXMuI29yaWdfcG9zICAgICAgID0gdGhpcy4jZXYycG9zKGV2KTsgLy8gQ2FuIGJlIFRILi4uXG4gICAgICAgICAgICB0aGlzLiNmaW5hbF9wb3MgICAgICA9IHRoaXMuI29yaWdfcG9zO1xuICAgICAgICAgICAgdGhpcy4jcHJldl9zZWxlY3Rpb24gPSBzaGVldC5zZWxlY3Rpb24uY2VsbHMuc2xpY2UoKTtcblxuICAgICAgICAgICAgdGhpcy4jdXBkYXRlU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uX21vdXNlX21vdmUpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1haW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25fbW91c2VfbW92ZSk7XG4gICAgICAgICAgICB9LCB7b25jZTogdHJ1ZX0pO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCIvL1RPRE86IHdlYnBhY2sgY29uZmlnLi4uXG5pbXBvcnQgTElTUyBmcm9tIFwiLi4vLi4vLi4vbGlicy9MSVNTXCI7XG5cbi8vQHRzLWlnbm9yZVxuaW1wb3J0IGNzcyBmcm9tIFwiISFyYXctbG9hZGVyIS4vaW5kZXguY3NzXCI7XG5cbmV4cG9ydCB0eXBlIFZhbHVlVHlwZSA9IHN0cmluZ3xudW1iZXJ8RGF0ZXxib29sZWFuO1xuZXhwb3J0IHR5cGUgUmF3Q29udGVudFR5cGUgPSBWYWx1ZVR5cGV8Rm9ybXVsYTtcblxuZXhwb3J0IHR5cGUgQ2VsbCA9IEhUTUxUYWJsZUNlbGxFbGVtZW50ICYge1xuICAgIHJhd0NvbnRlbnQ6IFJhd0NvbnRlbnRUeXBlLFxuICAgIGZvcm1hdDogKHRoaXM6IENlbGwsIHY/OiBudW1iZXJ8c3RyaW5nfERhdGUpID0+IHN0cmluZyxcbiAgICBpc19ybzogYm9vbGVhblxufTtcblxuZnVuY3Rpb24gaXNBY3RpdmUodGFyZ2V0OiBIVE1MRWxlbWVudCkge1xuXG4gICAgcmV0dXJuIHRhcmdldC5tYXRjaGVzKCc6Zm9jdXMnKTtcbi8qXG4gICAgbGV0IGFjdGl2ZSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICB3aGlsZSggYWN0aXZlPy5zaGFkb3dSb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCApXG4gICAgICAgIGFjdGl2ZSA9IGFjdGl2ZS5zaGFkb3dSb290LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICByZXR1cm4gYWN0aXZlID09PSB0YXJnZXQ7Ki9cbn1cblxuZnVuY3Rpb24gb25JbnB1dChldjogRXZlbnQpIHtcblxuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIxMjM0NzQxL3BsYWNlLWNhcmV0LWJhY2std2hlcmUtaXQtd2FzLWFmdGVyLWNoYW5naW5nLWlubmVyaHRtbC1vZi1hLWNvbnRlbnRlZGl0YWJsZS1lbGVtXG5cbiAgICBsZXQgcnJhbmdlID0gd2luZG93LmdldFNlbGVjdGlvbigpIS5nZXRSYW5nZUF0KDApO1xuICAgIGxldCBjID0gcnJhbmdlLnN0YXJ0T2Zmc2V0O1xuXG4gICAgLy9sZXQgdGV4dCA9IFwiXCI7XG4gICAgbGV0IGxlbmd0aCA9IDA7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRhcmdldC5jaGlsZE5vZGVzLmxlbmd0aDsgKytpKSB7XG5cbiAgICAgICAgbGV0IGNoaWxkID0gdGFyZ2V0LmNoaWxkTm9kZXNbaV07XG4gICAgICAgIGlmKCBjaGlsZC5ub2RlVHlwZSAhPT0gTm9kZS5URVhUX05PREUpXG4gICAgICAgICAgICBjaGlsZCA9IGNoaWxkLmNoaWxkTm9kZXNbMF07XG5cbiAgICAgICAgaWYoIHJyYW5nZS5zdGFydENvbnRhaW5lciA9PT0gY2hpbGQgKSB7XG4gICAgICAgICAgICAvL3RleHQgKz0gcC5jaGlsZE5vZGVzW2ldLnRleHRDb250ZW50IS5zbGljZSgwLCBjKTtcbiAgICAgICAgICAgIGxlbmd0aCArPSBjO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy90ZXh0ICs9IHAuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudDtcbiAgICAgICAgbGVuZ3RoICs9IHRhcmdldC5jaGlsZE5vZGVzW2ldLnRleHRDb250ZW50IS5sZW5ndGg7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGlubmVySFRNTFxuICAgIHRhcmdldC50ZXh0Q29udGVudCA9IHRhcmdldC50ZXh0Q29udGVudDtcblxuICAgIGxldCBjaGlsZCE6IENoaWxkTm9kZTtcbiAgICBsZXQgaTtcbiAgICBmb3IoaSA9IDA7IGkgPCB0YXJnZXQuY2hpbGROb2Rlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiggbGVuZ3RoIDw9IHRhcmdldC5jaGlsZE5vZGVzW2ldLnRleHRDb250ZW50IS5sZW5ndGggKSB7XG4gICAgICAgICAgICBjaGlsZCA9IHRhcmdldC5jaGlsZE5vZGVzW2ldO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbGVuZ3RoIC09IHRhcmdldC5jaGlsZE5vZGVzW2ldLnRleHRDb250ZW50IS5sZW5ndGg7XG4gICAgfVxuXG4gICAgaWYoIGNoaWxkLm5vZGVUeXBlICE9PSBOb2RlLlRFWFRfTk9ERSlcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5jaGlsZE5vZGVzWzBdO1xuXG4gICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpITtcblxuICAgIHJhbmdlLnNldFN0YXJ0KGNoaWxkLCBsZW5ndGgpO1xuICAgIHJhbmdlLmNvbGxhcHNlKHRydWUpO1xuICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBzZWwuYWRkUmFuZ2UocmFuZ2UpO1xufVxuXG5mdW5jdGlvbiBwYXJzZUlucHV0KCBzdHI6IHN0cmluZyApOiBSYXdDb250ZW50VHlwZSB7XG5cbiAgICBpZihzdHIgPT09ICdWUkFJJylcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgaWYoc3RyID09PSAnRkFVWCcpXG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIGlmKHN0ci50cmltKCkgPT09ICcnKVxuICAgICAgICByZXR1cm4gc3RyO1xuXG4gICAgaWYoc3RyWzBdID09PSBcIj1cIikge1xuICAgICAgICByZXR1cm4gcGFyc2VfZm9ybXVsYShzdHIpO1xuICAgIH1cblxuICAgIGxldCB0ZXN0X251bWJlciA9IE51bWJlciggc3RyLnJlcGxhY2UoJywnLCAnLicpICk7XG4gICAgaWYoICEgTnVtYmVyLmlzTmFOKCB0ZXN0X251bWJlciApIClcbiAgICAgICAgcmV0dXJuIHRlc3RfbnVtYmVyO1xuICAgIGlmKCBzdHJbc3RyLmxlbmd0aC0xXSA9PT0gXCIlXCIpIHtcbiAgICAgICAgdGVzdF9udW1iZXIgPSBOdW1iZXIoIHN0ci5zbGljZSgwLC0xKS5yZXBsYWNlKCcsJywgJy4nKSApO1xuICAgICAgICBpZiggISBOdW1iZXIuaXNOYU4oIHRlc3RfbnVtYmVyICkgKVxuICAgICAgICAgICAgcmV0dXJuICsodGVzdF9udW1iZXIgLyAxMDApLnRvUHJlY2lzaW9uKDcpO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcnRzID0gc3RyLnNwbGl0KCcvJyk7XG4gICAgaWYocGFydHMubGVuZ3RoIDw9IDMpIHtcblxuICAgICAgICBsZXQgdGVzdF9kYXRlID0gbmV3IERhdGUoXG4gICAgICAgICAgICArcGFydHNbMl0gPz8gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgK3BhcnRzWzFdLTEsXG4gICAgICAgICAgICArcGFydHNbMF1cbiAgICAgICAgKTtcblxuICAgICAgICBpZiggdGVzdF9kYXRlLnRvU3RyaW5nKCkgIT09IFwiSW52YWxpZCBEYXRlXCIgKVxuICAgICAgICAgICAgcmV0dXJuIHRlc3RfZGF0ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xufVxuXG5jbGFzcyBTdGF0ZTxUPiB7XG5cbiAgICAjc3RhdGUgOiBUfG51bGwgPSBudWxsO1xuICAgICN0YXJnZXQ6IEV2ZW50VGFyZ2V0O1xuICAgICNuYW1lICA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHRhcmdldDogRXZlbnRUYXJnZXQsIG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLiN0YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMuI25hbWUgICA9IG5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IHN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jc3RhdGU7XG4gICAgfVxuXG4gICAgc2V0IHN0YXRlKHN0YXRlOiBUfG51bGwpIHtcblxuICAgICAgICBpZiggdGhpcy4jc3RhdGUgPT09IHN0YXRlKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGxldCBwcmV2X3N0YXRlID0gdGhpcy4jc3RhdGU7XG4gICAgICAgIHRoaXMuI3N0YXRlID0gc3RhdGU7XG4gICAgICAgIFxuXG4gICAgICAgIGlmKCBwcmV2X3N0YXRlICE9PSBudWxsKVxuICAgICAgICAgICAgdGhpcy4jdGFyZ2V0LmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChgJHt0aGlzLiNuYW1lfV9lbmRgLCB7ZGV0YWlsOiBwcmV2X3N0YXRlfSkgKTsgICAgICAgICAgICBcblxuICAgICAgICBpZiggc3RhdGUgIT09IG51bGwgKVxuICAgICAgICAgICAgdGhpcy4jdGFyZ2V0LmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChgJHt0aGlzLiAjbmFtZX1fc3RhcnRgLCB7ZGV0YWlsOiBzdGF0ZX0pICk7XG4gICAgfVxufVxuXG5jb25zdCBTdGF0ZXMgPSB7XG4gICAgXCJjZWxsX2VkaXRcIjogU3RhdGU8Q2VsbD4sXG4gICAgXCJyZWNvcHlcIiAgIDogU3RhdGU8Q2VsbExpc3Q+XG4gfSBhcyBjb25zdDtcblxuZXhwb3J0IGNsYXNzIENhbGNTaGVldCBleHRlbmRzIExJU1Moe1xuICAgIGNzcyxcbiAgICBhdHRyaWJ1dGVzOiBbXCJjb2xzXCIsIFwicm93c1wiLCBcInJvXCJdXG59KSB7XG5cbiAgICBzdGF0ZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoIE9iamVjdC5lbnRyaWVzKFN0YXRlcykubWFwKCAoW24sc10pID0+IFtuLCBuZXcgcyh0aGlzLmhvc3QsIG4pXSBhcyBjb25zdCApKTtcblxuXG4gICAgLy9UT0RPOiBSTyBwcm9wID9cbiAgICAjY3Vyc29yICAgID0gbmV3IENlbGxMaXN0KHRoaXMsIFtdKTtcbiAgICAjc2VsZWN0aW9uOiBDZWxsTGlzdCA9IG5ldyBDZWxsTGlzdCh0aGlzLCBbXSk7XG4gICAgI3BsYWdlX3NlbGVjdG9yID0gbmV3IFBsYWdlU2VsZWN0b3IodGhpcyk7XG5cbiAgICAjZm9ybWF0X21uZ3IgPSBuZXcgRm9ybWF0TWFuYWdlcih0aGlzKTtcblxuICAgIHN0YXRpYyBnZXRTaGVldEZyb21DZWxsKGNlbGw6IENlbGwpIHtcbiAgICAgICAgcmV0dXJuIExJU1MuZ2V0TElTU1N5bmM8Q2FsY1NoZWV0PiggKGNlbGwuZ2V0Um9vdE5vZGUoKSBhcyBTaGFkb3dSb290KS5ob3N0ICk7XG4gICAgfVxuXG4gICAgZ2V0IGN1cnNvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2N1cnNvcjtcbiAgICB9XG4gICAgZ2V0IHNlbGVjdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3NlbGVjdGlvbjtcbiAgICB9XG5cbiAgICBvdmVycmlkZSBnZXQgY29udGVudCgpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmNvbnRlbnQ7XG4gICAgfVxuXG4gICAgc2V0UmVjdCh0YXJnZXQ6IEhUTUxFbGVtZW50LCBbeCx5LHcsaF06IHJlYWRvbmx5IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdKSB7XG5cbiAgICAgICAgY29uc3QgdGJsX29mZnNldCA9IHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpIS5vZmZzZXRUb3A7XG5cbiAgICAgICAgdGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KCd0b3AnICAgLCBgJHt0Ymxfb2Zmc2V0ICsgeX1weGApO1xuICAgICAgICB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkoJ2hlaWdodCcsIGAke2h9cHhgKTtcblxuICAgICAgICB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkoJ2xlZnQnICAgLCBgJHt4fXB4YCk7XG4gICAgICAgIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eSgnd2lkdGgnLCBgJHt3fXB4YCk7XG5cbiAgICB9XG5cbiAgICBnZXRSZWN0KGNlbGxzOiBDZWxsTGlzdHxDZWxsW10pIHtcblxuICAgICAgICBjZWxscyA9IFwiY2VsbHNcIiBpbiBjZWxscyA/IGNlbGxzLmNlbGxzIDogY2VsbHM7XG5cbiAgICAgICAgY29uc3Qgc3RhcnQgPSBjZWxsc1swXTtcbiAgICAgICAgY29uc3QgZW5kICAgPSBjZWxsc1tjZWxscy5sZW5ndGgtMV07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgc3RhcnQub2Zmc2V0TGVmdCxcbiAgICAgICAgICAgIHN0YXJ0Lm9mZnNldFRvcCxcbiAgICAgICAgICAgIGVuZC5vZmZzZXRMZWZ0ICsgZW5kLmNsaWVudFdpZHRoIC0gc3RhcnQub2Zmc2V0TGVmdCxcbiAgICAgICAgICAgIGVuZC5vZmZzZXRUb3AgKyBlbmQuY2xpZW50SGVpZ2h0IC0gc3RhcnQub2Zmc2V0VG9wICsgMVxuICAgICAgICBdIGFzIGNvbnN0O1xuICAgIH1cblxuICAgIHJlbGF0aXZlVG8oY2VsbDogQ2VsbCwgcm93X2RpZmY6IG51bWJlciwgY29sX2RpZmY6IG51bWJlcikge1xuICAgICAgICBcbiAgICAgICAgbGV0IFtyb3csIGNvbF0gPSB0aGlzLmNlbGxQb3MoY2VsbCk7XG5cbiAgICAgICAgcm93ICs9IHJvd19kaWZmO1xuICAgICAgICBjb2wgKz0gY29sX2RpZmY7XG5cbiAgICAgICAgLy8gZm9yIG5vcm1hbCA6IGdldCBzdHVjayBpbnNpZGUgZ3JpZC5cbiAgICAgICAgaWYoIHJvdyA8IDEpXG4gICAgICAgICAgICByb3cgPSAxO1xuICAgICAgICBpZiggcm93ID49IHRoaXMuI3Rib2R5LmNoaWxkcmVuLmxlbmd0aCApXG4gICAgICAgICAgICByb3cgPSB0aGlzLiN0Ym9keS5jaGlsZHJlbi5sZW5ndGggLSAxO1xuXG4gICAgICAgIGlmKCBjb2wgPCAxKVxuICAgICAgICAgICAgY29sID0gMTtcbiAgICAgICAgaWYoIGNvbCA+PSB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuLmxlbmd0aCApXG4gICAgICAgICAgICBjb2wgPSB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW5bY29sXSBhcyBDZWxsO1xuICAgIH1cblxuICAgIC8vVE9ETzogMkQuLi5cbiAgICAjcGFzdGViaW46IENlbGxMaXN0IHwgbnVsbCA9IG51bGw7XG5cbiAgICAjZm9ybXVsYV9yZWZzID0gbmV3IEFycmF5PEZvcm11bGFSZWY+KCk7XG4gICAgI2dldEZvcm11bGFSZWYoaTogbnVtYmVyKSB7XG4gICAgICAgIHdoaWxlKCBpID49IHRoaXMuI2Zvcm11bGFfcmVmcy5sZW5ndGgpXG4gICAgICAgICAgICB0aGlzLiNmb3JtdWxhX3JlZnMucHVzaCggbmV3IEZvcm11bGFSZWYodGhpcykgKTtcblxuICAgICAgICByZXR1cm4gdGhpcy4jZm9ybXVsYV9yZWZzW2ldO1xuICAgIH1cbiAgICAjY2xlYXJGb3JtdWxhUmVmcygpIHtcbiAgICAgICAgZm9yKGxldCByZWYgb2YgdGhpcy4jZm9ybXVsYV9yZWZzKVxuICAgICAgICAgICAgcmVmLnNldFJhbmdlKG51bGwpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGNvbnN0IGN1cnNvciA9IG5ldyBSYW5nZU92ZXJsYXkodGhpcywgXCJjdXJzb3JcIik7XG4gICAgICAgIGNvbnN0IHJlY29weSA9IG5ldyBSZWNvcHlIYW5kbGUodGhpcyk7XG4gICAgICAgIGNvbnN0IGNvcHkgICA9IG5ldyBSYW5nZU92ZXJsYXkodGhpcywgXCJjb3B5X2hpZ2hsaWdodFwiKTtcblxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikhO1xuXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdjZWxsX2VkaXRfZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jY2xlYXJGb3JtdWxhUmVmcygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbGFzdF9yZWNvcHlfdGFyZ2V0OiBDZWxsfG51bGwgPSBudWxsO1xuICAgICAgICBsZXQgbGFzdF9yZWNvcHlfZGlyICAgOiBbbnVtYmVyLCBudW1iZXJdfG51bGwgPSBudWxsXG5cbiAgICAgICAgY29uc3Qgb25fcmVjb3B5X21vdmUgPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgbGV0IGNlbGxzID0gKHRoaXMuc3RhdGVzLnJlY29weS5zdGF0ZSBhcyBDZWxsTGlzdCkuY2VsbHM7XG4gICAgICAgICAgICBjb25zdCBzcmMgPSBjZWxsc1tjZWxscy5sZW5ndGgtMV07XG5cbiAgICAgICAgICAgIGxldCBwb3MgPSBzcmMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAgIGxldCBkX3B4ID0gZXYuY2xpZW50WCAtIChwb3MueCArIHBvcy53aWR0aCAvMik7XG4gICAgICAgICAgICBsZXQgZF9weSA9IGV2LmNsaWVudFkgLSAocG9zLnkgKyBwb3MuaGVpZ2h0LzIpO1xuXG4gICAgICAgICAgICBsZXQgZF94ID0gMDtcbiAgICAgICAgICAgIGxldCBkX3kgPSBNYXRoLnNpZ24oZF9weSk7XG5cbiAgICAgICAgICAgIGlmKCBNYXRoLmFicyhkX3B4KSA+IE1hdGguYWJzKGRfcHkpICkge1xuICAgICAgICAgICAgICAgIGRfeCA9IE1hdGguc2lnbihkX3B4KTtcbiAgICAgICAgICAgICAgICBkX3kgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcHJldiA9IHNyYztcbiAgICAgICAgICAgIGxldCBjdXIgID0gc3JjO1xuXG4gICAgICAgICAgICBsZXQgZGlmZl94LCBkaWZmX3k7XG5cbiAgICAgICAgICAgIGRvIHtcblxuICAgICAgICAgICAgICAgIHByZXY9IGN1cjtcbiAgICAgICAgICAgICAgICBjdXIgPSB0aGlzLnJlbGF0aXZlVG8ocHJldiwgZF95LCBkX3gpO1xuXG4gICAgICAgICAgICAgICAgaWYoIGN1ciA9PT0gcHJldilcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBsZXQgcG9zX2N1ciA9IGN1ci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICBkaWZmX3ggPSBldi5jbGllbnRYIC0gKHBvc19jdXIueCArIHBvc19jdXIud2lkdGggLzIpO1xuICAgICAgICAgICAgICAgIGRpZmZfeSA9IGV2LmNsaWVudFkgLSAocG9zX2N1ci55ICsgcG9zX2N1ci5oZWlnaHQvMik7XG5cbiAgICAgICAgICAgIH0gd2hpbGUoIGRpZmZfeCAqIGRfeCArIGRpZmZfeSAqIGRfeSA+IDAgKTtcblxuICAgICAgICAgICAgbGFzdF9yZWNvcHlfdGFyZ2V0ID0gcHJldjtcbiAgICAgICAgICAgIGxhc3RfcmVjb3B5X2RpciAgICA9IFtkX3gsZF95XTtcblxuICAgICAgICAgICAgbGV0IGJlZyA9IHNyYztcbiAgICAgICAgICAgIGxldCBlbmQgPSBwcmV2O1xuICAgICAgICAgICAgaWYoIHNyYy5vZmZzZXRMZWZ0ID4gcHJldi5vZmZzZXRMZWZ0IHx8IHNyYy5vZmZzZXRUb3AgPiBwcmV2Lm9mZnNldFRvcCApXG4gICAgICAgICAgICAgICAgW2JlZywgZW5kXSA9IFtlbmQsIGJlZ107XG5cbiAgICAgICAgICAgIC8vVE9ETzogaGlnaGxpZ2h0Li4uXG4gICAgICAgICAgICB0aGlzLiNjbGVhckZvcm11bGFSZWZzKCk7XG4gICAgICAgICAgICB0aGlzLiNnZXRGb3JtdWxhUmVmKDEpLnNldFJhbmdlKCB0aGlzLmdldFJhbmdlKGJlZywgZW5kKSApO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlY29weS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldikgPT4ge1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdGhpcy5zdGF0ZXMucmVjb3B5LnN0YXRlID0gdGhpcy4jc2VsZWN0aW9uO1xuXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25fcmVjb3B5X21vdmUpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IFtkX3gsIGRfeV0gPSAgbGFzdF9yZWNvcHlfZGlyITtcblxuICAgICAgICAgICAgICAgIGxldCBjZWxscyA9ICh0aGlzLnN0YXRlcy5yZWNvcHkuc3RhdGUgYXMgQ2VsbExpc3QpLmNlbGxzO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IGNlbGxzW2NlbGxzLmxlbmd0aC0xXTtcblxuICAgICAgICAgICAgICAgIGxldCBuYiA9IDA7XG5cbiAgICAgICAgICAgICAgICBpZiggbGFzdF9yZWNvcHlfdGFyZ2V0ICE9PSBzcmMpIHsgLy8gY29weS4uLlxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXIgPSBzcmM7XG4gICAgICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICsrbmI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ciA9IHRoaXMucmVsYXRpdmVUbyhjdXIsIGRfeSwgZF94KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQ6IFJhd0NvbnRlbnRUeXBlfENlbGwgPSBzcmM7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggdHlwZW9mIGNvbnRlbnQucmF3Q29udGVudCA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gKHNyYy5yYXdDb250ZW50IGFzIG51bWJlcikgKyBuYiooZF94ICsgZF95KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoIGNvbnRlbnQucmF3Q29udGVudCBpbnN0YW5jZW9mIERhdGUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IG5ldyBEYXRlKHNyYy5yYXdDb250ZW50IGFzIERhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuc2V0RGF0ZSggY29udGVudC5nZXREYXRlKCkgKyBuYiooZF94ICsgZF95KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDZWxsTGlzdCh0aGlzLCBbY3VyXSkuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXIuY2xhc3NOYW1lID0gc3JjLmNsYXNzTmFtZTsgLy9UT0RPOiBmb3JtYXQuLi5cblxuXG4gICAgICAgICAgICAgICAgICAgIH0gd2hpbGUoIGN1ciE9PSBsYXN0X3JlY29weV90YXJnZXQgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLiNjbGVhckZvcm11bGFSZWZzKCk7IC8vIHJlY29weVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVzLnJlY29weS5zdGF0ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGFzdF9yZWNvcHlfdGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBsYXN0X3JlY29weV9kaXIgICAgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIG1haW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbl9yZWNvcHlfbW92ZSk7XG5cbiAgICAgICAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdyZWNvcHlfc3RhcnQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgncmVjb3B5Jyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcigncmVjb3B5X2VuZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QucmVtb3ZlKCdyZWNvcHknKTtcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLiNjdXJzb3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGlmKCB0aGlzLiNjdXJzb3IubGVuZ3RoICE9PSAxIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1cnNvciBoYXMgaW52YWxpZCBudW1iZXIgb2YgY2VsbHMnKTtcblxuICAgICAgICAgICAgY3Vyc29yLnNldFJhbmdlKCBuZXcgQ2VsbExpc3QodGhpcywgW3RoaXMuZ2V0VmlzaWJsZUNlbGwodGhpcy4jY3Vyc29yKV0pICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI3NlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXYpID0+IHtcblxuICAgICAgICAgICAgZm9yKCBsZXQgY2VsbCBvZiB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZ2hsaWdodCcpIClcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpO1xuXG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IHRoaXMuI3NlbGVjdGlvbi5jZWxscztcblxuICAgICAgICAgICAgaWYoIGNlbGxzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGZvciggbGV0IGNlbGwgb2YgY2VsbHMgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggY2VsbHMubGVuZ3RoICE9PSAxKVxuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSB0aGlzLiNjZWxsUG9zKGNlbGwpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3Rib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuW2NvbF0uY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlY29weS5zZXRSYW5nZSh0aGlzLiNzZWxlY3Rpb24pO1xuXG4gICAgICAgICAgICAvLyBvbmx5IGlmIHNpbXBsZS4uLlxuICAgICAgICAgICAgLy8gY29uc3QgbGFzdCA9IGNlbGxzW2NlbGxzLmxlbmd0aC0xXTtcbiAgICAgICAgICAgIC8vIHBvaW50ZXIuLi5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9UT0RPOiBtb3ZlIG91dCA/XG4gICAgICAgIGNvbnN0IGZvcm11bGFfYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm11bGFfYmFyLmNsYXNzTGlzdC5hZGQoJ3Rvb2xiYXInKTtcblxuICAgICAgICAoIGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgcGxhZ2UgPSBhd2FpdCBMSVNTLmJ1aWxkKFwiY2FsYy1wbGFnZVwiKTtcbiAgICAgICAgICAgIHBsYWdlLnN5bmNUbyh0aGlzKTtcbiAgICAgICAgICAgIGZvcm11bGFfYmFyLmFwcGVuZCggcGxhZ2UuaG9zdCApO1xuXG4gICAgICAgICAgICBjb25zdCBmb3JtdWxhID0gYXdhaXQgTElTUy5idWlsZChcImNhbGMtZm9ybXVsYVwiKTtcbiAgICAgICAgICAgIGZvcm11bGEuc3luY1RvKHRoaXMpO1xuICAgICAgICAgICAgZm9ybXVsYV9iYXIuYXBwZW5kKCBmb3JtdWxhLmhvc3QgKTtcblxuICAgICAgICB9KSgpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKGZvcm11bGFfYmFyKTtcblxuICAgICAgICB0aGlzLiNpbml0R3JpZCgrdGhpcy5hdHRycy5yb3dzISwgK3RoaXMuYXR0cnMuY29scyEpO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldikgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIC8vIHRoZSBjZWxsIGlzIGJlaW5nIGVkaXRlZC4uLlxuICAgICAgICAgICAgaWYoIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSA9PT0gXCJURFwiIClcbiAgICAgICAgICAgICAgICB0aGlzLiNjdXJzb3IucmVwbGFjZUFsbCggdGFyZ2V0IGFzIENlbGwgKTtcblxuICAgICAgICAgICAgLy9UT0RPOiBub3QgY29ycmVjdC4uLlxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lID09PSBcIlRIXCIgJiYgdGFyZ2V0LnRleHRDb250ZW50ICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2V0Q2VsbHModGFyZ2V0LnRleHRDb250ZW50ISkuY2VsbHNbMF07XG5cbiAgICAgICAgICAgICAgICB0aGlzLiNjdXJzb3IucmVwbGFjZUFsbChjZWxsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIChldikgPT4ge1xuXG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgIT09IFwiVERcIilcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGlmKCB0aGlzLmF0dHJzLnJvICE9PSBcInRydWVcIiAmJiAodGFyZ2V0IGFzIENlbGwpLmlzX3JvICE9PSB0cnVlICkge1xuICAgICAgICAgICAgICAgIHRhcmdldC50b2dnbGVBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXY6IEtleWJvYXJkRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgaWYoIGV2LmNvZGUuc3RhcnRzV2l0aCgnQXJyb3cnKSApIHtcblxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjdXIgPSB0aGlzLmN1cnNvci5jZWxscztcbiAgICAgICAgICAgICAgICBpZiggY3VyLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgbGV0IGRfcm93ID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgZF9jb2wgPSAwO1xuXG4gICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09ICdBcnJvd0xlZnQnKVxuICAgICAgICAgICAgICAgICAgICAtLWRfY29sO1xuICAgICAgICAgICAgICAgIGlmKCBldi5jb2RlID09PSAnQXJyb3dSaWdodCcpXG4gICAgICAgICAgICAgICAgICAgICsrZF9jb2w7XG4gICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09ICdBcnJvd1VwJylcbiAgICAgICAgICAgICAgICAgICAgLS1kX3JvdztcbiAgICAgICAgICAgICAgICBpZiggZXYuY29kZSA9PT0gJ0Fycm93RG93bicpXG4gICAgICAgICAgICAgICAgICAgICsrZF9yb3c7XG5cbiAgICAgICAgICAgICAgICBsZXQgbmV4dDogQ2VsbDtcbiAgICAgICAgICAgICAgICBpZiggZXYuY3RybEtleSApIHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJldiAgID0gY3VyWzBdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3Vyc29yID0gdGhpcy5yZWxhdGl2ZVRvKHByZXYsIGRfcm93LCBkX2NvbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIHByZXYucmF3Q29udGVudCAhPT0gdW5kZWZpbmVkICYmIGN1cnNvci5yYXdDb250ZW50ICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUoIHByZXYgIT09IGN1cnNvciAmJiBjdXJzb3IucmF3Q29udGVudCAhPT0gdW5kZWZpbmVkKSB7IC8vIHdlIHJlYWNoZWQgdGhlIGVuZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2ICAgPSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gdGhpcy5yZWxhdGl2ZVRvKHByZXYsIGRfcm93LCBkX2NvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSBwcmV2O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUoIHByZXYgIT09IGN1cnNvciAmJiBjdXJzb3IucmF3Q29udGVudCA9PT0gdW5kZWZpbmVkKSB7IC8vIHdlIHJlYWNoZWQgdGhlIGVuZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2ICAgPSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gdGhpcy5yZWxhdGl2ZVRvKHByZXYsIGRfcm93LCBkX2NvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBuZXh0ID0gY3Vyc29yO1xuICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICBuZXh0ID0gdGhpcy5yZWxhdGl2ZVRvKCBjdXJbMF0sIGRfcm93LCBkX2NvbCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy4jdGJvZHkuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnNvci5yZXBsYWNlQWxsKG5leHQpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBubyBlZGl0aW9uIGFsbG93ZWQuLi5cbiAgICAgICAgICAgIGlmKCB0aGlzLmF0dHJzLnJvID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgaWYoIHRhcmdldCA9PT0gdGhpcy4jdGJvZHkgKSB7XG4gICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09IFwiS2V5VlwiICYmIGV2LmN0cmxLZXkgJiYgdGhpcy4jcGFzdGViaW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuI3Bhc3RlYmluLmNlbGxzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNzZWxlY3Rpb24uY29udGVudCA9IGRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29weSBmb3JtYXQuLi4gVE9ETyB1dGlsaXR5IHRoaW5neS4uLlxuICAgICAgICAgICAgICAgICAgICBpZiggISBldi5zaGlmdEtleSB8fCAhIGV2LmFsdEtleSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IHRoaXMuI3Bhc3RlYmluLmNlbGxzO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHN0ID0gdGhpcy4jc2VsZWN0aW9uLmNlbGxzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgKytpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRzdFtpXS5jbGFzc05hbWUgPSBzcmNbaV0uY2xhc3NOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVE9ETzogYWRkIGZvcm1hdC4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKCAoIGV2LmtleSA9PT0gXCJjXCIgfHwgZXYua2V5ID09PSBcInhcIikgJiYgZXYuY3RybEtleSApIHtcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICBjb3B5LnNldFJhbmdlKHRoaXMuI3NlbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdIWSA/Pz9cbiAgICAgICAgICAgICAgICAgICAgLy9oLnN0eWxlLnNldFByb3BlcnR5KCd0b3AnICAgLCBgJHtzZWxlY3Rpb25bMF0ub2Zmc2V0VG9wfXB4YCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jcGFzdGViaW4gPSB0aGlzLiNzZWxlY3Rpb24uZGVlcENsb25lKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gXCJ4XCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiNzZWxlY3Rpb24uZGVsZXRlRm9ybWF0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiNzZWxlY3Rpb24uZGVsZXRlQ29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKCBldi5rZXkgPT09IFwiQ29udHJvbFwiIHx8IGV2LmtleSA9PT0gXCJTaGlmdFwiIHx8IGV2LmtleSA9PT0gXCJBbHRcIiApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBpZ25vcmVcbiAgICAgICAgICAgICAgICB9IGlmKCBldi5jb2RlID09PSBcIkRlbGV0ZVwiICkge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmRlbGV0ZUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpICk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gaWYoIGV2LmNvZGUgPT09IFwiRW50ZXJcIiApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlZCBlbHNld2hlcmVcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZXYuY3RybEtleSkgeyAvLyBpZ25vcmUgY3RybFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgeyAvLyB3ZSBzdGFydCBlZGl0aW5nLi4uXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VyID0gdGhpcy5jdXJzb3IuY2VsbHM7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIGN1ci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJbMF0uZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiZGJsY2xpY2tcIiwge2J1YmJsZXM6IHRydWV9KSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyWzBdLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQgIT09IHRoaXMuI3Rib2R5ICYmIGV2LmNvZGUgPT09ICdFbnRlcicgJiYgZXYuc2hpZnRLZXkgKVxuICAgICAgICAgICAgICAgIHJldHVybjsgLy8gZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yLlxuXG4gICAgICAgICAgICBpZihldi5jb2RlID09PSBcIkVudGVyXCIpIHsgLy9UT0RPOiBFbnRlciBpcyBmb3IgY3VycmVudCBwbGFnZS4uLlxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjdXIgPSB0aGlzLmN1cnNvci5jZWxscztcbiAgICAgICAgICAgICAgICBpZiggY3VyLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgbGV0IFtyb3csY29sXSA9IHRoaXMuY2VsbFBvcyggY3VyWzBdICk7XG5cbiAgICAgICAgICAgICAgICArK3JvdztcbiAgICAgICAgICAgICAgICBpZiggcm93ID49IHRoaXMuI3Rib2R5LmNoaWxkcmVuLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICAgICAgcm93ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgKytjb2w7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCBjb2wgPj0gdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlbi5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbCA9IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IG5leHQgPSB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuW2NvbF0gYXMgQ2VsbDtcblxuICAgICAgICAgICAgICAgIHRoaXMuI3Rib2R5LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJzb3IucmVwbGFjZUFsbChuZXh0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG9uSW5wdXQyID0gKGV2OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jY2xlYXJGb3JtdWxhUmVmcygpO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgaWYoZXYuZGV0YWlsICE9PSB0cnVlKVxuICAgICAgICAgICAgICAgIG9uSW5wdXQoZXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9UT0RPOiBoZXJlLi4uXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICAgICAgY29weS5zZXRSYW5nZShudWxsKTtcblxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lICE9PSBcIlREXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPSB0YXJnZXQgYXMgQ2VsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKFwiY2VsbF9lZGl0X3N0YXJ0XCIsIChldjogQ3VzdG9tRXZlbnQ8Q2VsbD4pID0+IHtcblxuICAgICAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC50b2dnbGUoXCJjZWxsX2VkaXRcIiwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBldi5kZXRhaWw7XG5cbiAgICAgICAgICAgIGlmKGNlbGwucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHN0ciA9IGNlbGwucmF3Q29udGVudC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlcyA9IGNlbGwucmF3Q29udGVudC5yYW5nZXNUb2tlbjtcblxuICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlbjogKHN0cmluZ3xIVE1MRWxlbWVudClbXSA9IFtzdHJdO1xuXG4gICAgICAgICAgICAgICAgbGV0IHJhbmdlc19jb2xvcnM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fTtcbiAgICAgICAgICAgICAgICBsZXQgY3VyX29mZnNldCA9IDA7XG5cbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdHIgPSBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGgtMV0gYXMgc3RyaW5nO1xuXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aC0xXSA9IHN0ci5zbGljZSgwLCByYW5nZXNbaV0uYmVnIC0gY3VyX29mZnNldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2VfbmFtZSA9IHJhbmdlc1tpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYoICEgKHJhbmdlX25hbWUgaW4gcmFuZ2VzX2NvbG9ycykgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VzX2NvbG9yc1tyYW5nZV9uYW1lXSA9IGklODtcblxuICAgICAgICAgICAgICAgICAgICBzLmNsYXNzTGlzdC5hZGQoJ2Zvcm11bGFfaGlnaGxpZ2h0JywgYGhpZ2hsaWdodF8ke3Jhbmdlc19jb2xvcnNbcmFuZ2VfbmFtZV19YCk7IC8vVE9ETy4uLlxuICAgICAgICAgICAgICAgICAgICBzLnRleHRDb250ZW50ID0gcmFuZ2VzW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKCBzICk7IC8vIHJhbmdlLi4uXG5cbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW4ucHVzaCggc3RyLnNsaWNlKHJhbmdlc1tpXS5lbmQgLSBjdXJfb2Zmc2V0KSApO1xuICAgICAgICAgICAgICAgICAgICBjdXJfb2Zmc2V0ID0gcmFuZ2VzW2ldLmVuZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjZWxsLnJlcGxhY2VDaGlsZHJlbiggLi4uY2hpbGRyZW4gKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlc19uYW1lcyA9IE9iamVjdC5rZXlzKHJhbmdlc19jb2xvcnMpO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByYW5nZXNfbmFtZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSByYW5nZXNfbmFtZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZiA9IHRoaXMuI2dldEZvcm11bGFSZWYoaSk7XG4gICAgICAgICAgICAgICAgICAgIHJlZi5zZXRDb2xvciggcmFuZ2VzX2NvbG9yc1tyYW5nZV0gKTtcbiAgICAgICAgICAgICAgICAgICAgcmVmLnNldFJhbmdlKCB0aGlzLmdldENlbGxzKHJhbmdlKSApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgb25JbnB1dDIgKTsgLy8gcmVtb3ZlIGNvbG9ycy4uLlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gRm9ybWF0cy5kZWZhdWx0LmNhbGwoY2VsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKFwiY2VsbF9lZGl0X2VuZFwiLCAoZXY6IEN1c3RvbUV2ZW50PENlbGw+KSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QudG9nZ2xlKFwiY2VsbF9lZGl0XCIsIGZhbHNlKTtcblxuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGV2LmRldGFpbDtcblxuICAgICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgb25JbnB1dDIpOyAvLyB0byBiZSBzYWZlXG4gICAgICAgICAgICBjZWxsLnRvZ2dsZUF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcImxlYXZlIGVkaXRcIiwgY2VsbC50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICBuZXcgQ2VsbExpc3QodGhpcywgW2NlbGxdKS5jb250ZW50ID0gY2VsbC50ZXh0Q29udGVudCE7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICAgICAgICAvLyBsZWF2ZVxuICAgICAgICAgICAgdGhpcy4jc2VsZWN0aW9uLmNsZWFyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZXYgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSAhPT0gXCJURFwiKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5zdGF0ZXMuY2VsbF9lZGl0LnN0YXRlID0gbnVsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoIHRoaXMubmJSb3dzID49IDEgJiYgdGhpcy5uYkNvbHMgPj0gMSlcbiAgICAgICAgICAgIHRoaXMuY3Vyc29yLnJlcGxhY2VBbGwoIHRoaXMuZ2V0UmFuZ2UoXCJBMVwiKSApO1xuICAgIH1cblxuICAgIGdldFZpc2libGVDZWxsKGM6IENlbGx8Q2VsbExpc3QpOiBDZWxsIHtcbiAgICAgICAgaWYoYyBpbnN0YW5jZW9mIENlbGxMaXN0KVxuICAgICAgICAgICAgYyA9IGMuZmlyc3RDZWxsO1xuXG4gICAgICAgIHJldHVybiBjLmNlbGwgPz8gYztcbiAgICB9XG5cbiAgICBjZWxsUG9zKGNlbGw6IEhUTUxUYWJsZUNlbGxFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjZWxsUG9zKGNlbGwpO1xuICAgIH1cblxuICAgICNjZWxsUG9zKGNlbGw6IEhUTUxUYWJsZUNlbGxFbGVtZW50KSB7XG5cbiAgICAgICAgaWYoIFwicG9zXCIgaW4gY2VsbClcbiAgICAgICAgICAgIHJldHVybiBjZWxsLnBvcyBhcyBbbnVtYmVyLCBudW1iZXJdO1xuXG4gICAgICAgIGNvbnN0IGNvbCA9IFsuLi5jZWxsLnBhcmVudEVsZW1lbnQhLmNoaWxkcmVuXS5maW5kSW5kZXgoIGMgPT4gYyA9PT0gY2VsbCk7XG4gICAgICAgIGNvbnN0IHJvdyA9IFsuLi5jZWxsLnBhcmVudEVsZW1lbnQhLnBhcmVudEVsZW1lbnQhLmNoaWxkcmVuXS5maW5kSW5kZXgoIHIgPT4gciA9PT0gY2VsbC5wYXJlbnRFbGVtZW50ISk7XG5cbiAgICAgICAgcmV0dXJuIFtyb3csIGNvbF0gYXMgY29uc3Q7XG4gICAgfVxuXG4gICAgI3Rib2R5ITogSFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQ7XG4gICAgZ2V0IHRib2R5KCkgeyByZXR1cm4gdGhpcy4jdGJvZHk7IH1cblxuICAgIHJlc2l6ZShuYnJvd3M6IG51bWJlciwgbmJjb2xzOiBudW1iZXIpIHtcblxuICAgICAgICBjb25zdCBjb2xfaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgIGNvbF9odG1sLmFwcGVuZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKSApO1xuXG4gICAgICAgIGNvbnN0IHRib2R5ID0gdGhpcy4jdGJvZHk7XG4gICAgICAgIHRib2R5LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgICAgIGZvcihsZXQgY29sID0gMDsgY29sIDwgIG5iY29scyA7ICsrY29sKSB7XG4gICAgICAgICAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICB0aC50ZXh0Q29udGVudCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBjb2wpO1xuICAgICAgICAgICAgY29sX2h0bWwuYXBwZW5kKHRoKTtcbiAgICAgICAgfVxuICAgICAgICB0Ym9keS5hcHBlbmQoY29sX2h0bWwpO1xuXG4gICAgICAgIGZvcihsZXQgcm93ID0gMDsgcm93IDwgbmJyb3dzOyArK3Jvdykge1xuICAgICAgICAgICAgY29uc3Qgcm93X2h0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgICAgICAgdGgudGV4dENvbnRlbnQgPSBgJHtyb3crMX1gO1xuICAgICAgICAgICAgcm93X2h0bWwuYXBwZW5kKHRoKTtcblxuICAgICAgICAgICAgZm9yKGxldCBjb2wgPSAwOyBjb2wgPCAgbmJjb2xzIDsgKytjb2wpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKSBhcyBDZWxsO1xuICAgICAgICAgICAgICAgIC8vY2VsbC50b2dnbGVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuICAgICAgICAgICAgICAgIGNlbGwuZm9ybWF0ID0gRm9ybWF0cy5kZWZhdWx0O1xuICAgICAgICAgICAgICAgIHJvd19odG1sLmFwcGVuZCggY2VsbCApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGJvZHkuYXBwZW5kKHJvd19odG1sKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNpbml0R3JpZChuYnJvd3M6IG51bWJlciwgbmJjb2xzOiBudW1iZXIpIHtcblxuICAgICAgICBjb25zdCBpc19ybyA9IHRoaXMuYXR0cnMucm8gPT09IFwidHJ1ZVwiO1xuXG4gICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICAgICAgY29uc3QgdGJvZHkgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcbiAgICAgICAgdGhpcy4jdGJvZHkgPSB0Ym9keTtcblxuICAgICAgICBjb25zdCByZXNpemVPYnMgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaG9zdC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoJ3Jlc2l6ZScpICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXNpemVPYnMub2JzZXJ2ZSggdGhpcy5ob3N0ICk7XG5cbiAgICAgICAgdGhpcy4jdGJvZHkuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG5cbiAgICAgICAgdGhpcy5yZXNpemUobmJyb3dzLCBuYmNvbHMpO1xuXG4gICAgICAgIHRhYmxlLmFwcGVuZCh0Ym9keSk7XG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQodGFibGUpO1xuICAgIH1cblxuICAgIGdldFJhbmdlKGZyb206IENlbGx8c3RyaW5nfHJlYWRvbmx5W251bWJlcixudW1iZXJdLCB0bzogQ2VsbHxzdHJpbmd8cmVhZG9ubHlbbnVtYmVyLG51bWJlcl0gPSBmcm9tKTogQ2VsbExpc3Qge1xuXG4gICAgICAgIC8vIHByb2Nlc3MgcmVmcy4uLlxuICAgICAgICBpZiggZnJvbSBpbnN0YW5jZW9mIEhUTUxUYWJsZUNlbGxFbGVtZW50KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZ2UoIHRoaXMuY2VsbFBvcyhmcm9tKSwgdG8gKTtcbiAgICAgICAgaWYoIHRvIGluc3RhbmNlb2YgSFRNTFRhYmxlQ2VsbEVsZW1lbnQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSYW5nZSggZnJvbSwgdGhpcy5jZWxsUG9zKHRvKSApO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgZnJvbSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgaWYoIGZyb20uaW5jbHVkZXMoXCI6XCIpIClcbiAgICAgICAgICAgICAgICBbZnJvbSwgdG9dID0gZnJvbS5zcGxpdCgnOicpO1xuXG4gICAgICAgICAgICBmcm9tID0gdGhpcy5yZWYycG9zKGZyb20pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZ2UoIGZyb20sIHRvICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJhbmdlKCBmcm9tLCB0aGlzLnJlZjJwb3ModG8pICk7XG5cbiAgICAgICAgLy8gZ2V0IHJhbmdlXG5cbiAgICAgICAgbGV0IGJlZ19yb3cgPSBmcm9tWzBdIHx8IDE7XG4gICAgICAgIGxldCBiZWdfY29sID0gZnJvbVsxXSB8fCAxO1xuXG4gICAgICAgIGxldCBlbmRfcm93ID0gZnJvbVswXSA9PT0gMCA/IHRoaXMubmJSb3dzIDogdG9bMF07XG4gICAgICAgIGxldCBlbmRfY29sID0gZnJvbVsxXSA9PT0gMCA/IHRoaXMubmJDb2xzIDogdG9bMV07XG5cbiAgICAgICAgaWYoIGVuZF9yb3cgPCBiZWdfcm93IClcbiAgICAgICAgICAgIFtiZWdfcm93LCBlbmRfcm93XSA9IFtlbmRfcm93LCBiZWdfcm93XTtcbiAgICAgICAgaWYoIGVuZF9jb2wgPCBiZWdfY29sIClcbiAgICAgICAgICAgIFtiZWdfY29sLCBlbmRfY29sXSA9IFtlbmRfY29sLCBiZWdfY29sXTtcblxuICAgICAgICBjb25zdCBjZWxscyA9IG5ldyBBcnJheTxDZWxsPiggKGVuZF9yb3cgLSBiZWdfcm93ICsgMSkgKiAoZW5kX2NvbCAtIGJlZ19jb2wgKyAxKSApO1xuXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBmb3IobGV0IGkgPSBiZWdfcm93OyBpIDw9IGVuZF9yb3c7ICsraSApXG4gICAgICAgICAgICBmb3IobGV0IGogPSBiZWdfY29sOyBqIDw9IGVuZF9jb2w7ICsraiApXG4gICAgICAgICAgICAgICAgY2VsbHNbb2Zmc2V0KytdID0gdGhpcy50Ym9keS5jaGlsZHJlbltpXS5jaGlsZHJlbltqXSBhcyBDZWxsO1xuXG4gICAgICAgIHJldHVybiBuZXcgQ2VsbExpc3QodGhpcywgY2VsbHMpO1xuICAgIH1cblxuICAgIGdldENlbGxzKGNlbGw6IHN0cmluZyk6IENlbGxMaXN0O1xuICAgIGdldENlbGxzKHJvd19pZDogbnVtYmVyLCBjb2xfaWQ6IG51bWJlcik6IENlbGxMaXN0O1xuICAgIGdldENlbGxzKGNlbGxfb3Jfcm93aWQ6IG51bWJlcnxzdHJpbmcsIGNvbF9pZD86IG51bWJlcikge1xuXG4gICAgICAgIGxldCByb3dfaWQgPSBjZWxsX29yX3Jvd2lkO1xuICAgICAgICBpZiggdHlwZW9mIGNlbGxfb3Jfcm93aWQgPT09IFwic3RyaW5nXCIpIHtcblxuICAgICAgICAgICAgY2VsbF9vcl9yb3dpZCA9IGNlbGxfb3Jfcm93aWQucmVwbGFjZUFsbCgnJCcsICcnKTtcblxuICAgICAgICAgICAgaWYoIGNlbGxfb3Jfcm93aWQuaW5jbHVkZXMoJzonKSApIHsvLyByYW5nZVxuXG4gICAgICAgICAgICAgICAgbGV0IFtiZWcsIGVuZF0gPSBjZWxsX29yX3Jvd2lkLnNwbGl0KCc6Jyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBiX3Jvd19pZCA9ICtiZWdbMV07XG4gICAgICAgICAgICAgICAgY29uc3QgYl9jb2xfaWQgPSBiZWcuY2hhckNvZGVBdCgwKSArIDEgLSA2NTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGVfcm93X2lkID0gK2VuZFsxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBlX2NvbF9pZCA9IGVuZC5jaGFyQ29kZUF0KDApICsgMSAtIDY1O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbHMgPSBuZXcgQXJyYXkoIChlX2NvbF9pZC1iX2NvbF9pZCkgKiAoZV9yb3dfaWQgLSBiX3Jvd19pZCkgKTtcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgICAgICAgICBmb3IobGV0IHIgPSBiX3Jvd19pZDsgciA8PSAgZV9yb3dfaWQ7ICsrcilcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBjID0gYl9jb2xfaWQ7IGMgPD0gIGVfY29sX2lkOyArK2MpXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tvZmZzZXQrK10gPSB0aGlzLiN0Ym9keS5jaGlsZHJlbltyXS5jaGlsZHJlbltjXSBhcyBDZWxsO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDZWxsTGlzdCh0aGlzLCBjZWxscyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHRoaXMgaXMgYSBmdWxsIGxpbmUuLi5cbiAgICAgICAgICAgIGlmKCBjZWxsX29yX3Jvd2lkWzBdID49ICcwJyAmJiBjZWxsX29yX3Jvd2lkWzBdIDw9ICc5JyApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDZWxscyhgQSR7Y2VsbF9vcl9yb3dpZH06JHt0aGlzLnBvczJyZWYoK2NlbGxfb3Jfcm93aWQsIHRoaXMubmJDb2xzKX1gKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiggY2VsbF9vcl9yb3dpZFtjZWxsX29yX3Jvd2lkLmxlbmd0aC0xXSA8ICcwJyB8fCBjZWxsX29yX3Jvd2lkW2NlbGxfb3Jfcm93aWQubGVuZ3RoLTFdID4gJzknICkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybiggYCR7Y2VsbF9vcl9yb3dpZH0xOiR7Y2VsbF9vcl9yb3dpZH0ke3RoaXMubmJSb3dzfWAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDZWxscyhgJHtjZWxsX29yX3Jvd2lkfTE6JHtjZWxsX29yX3Jvd2lkfSR7dGhpcy5uYlJvd3N9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJvd19pZCA9ICtjZWxsX29yX3Jvd2lkWzFdO1xuICAgICAgICAgICAgY29sX2lkID0gY2VsbF9vcl9yb3dpZC5jaGFyQ29kZUF0KDApICsgMSAtIDY1O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuI3Rib2R5LmNoaWxkcmVuWytyb3dfaWRdLmNoaWxkcmVuW2NvbF9pZCFdIGFzIENlbGw7XG4gICAgICAgIHJldHVybiBuZXcgQ2VsbExpc3QodGhpcywgW2NlbGxdKTtcbiAgICB9XG5cbiAgICByZWYycG9zKHJlZjogc3RyaW5nKTogW251bWJlciwgbnVtYmVyXSB7XG4gICAgICAgIC8vVE9ETy4uLlxuICAgICAgICBjb25zdCByb3cgPSArcmVmW3JlZi5sZW5ndGggLSAxXTtcbiAgICAgICAgY29uc3QgY29sID0gcmVmLmNoYXJDb2RlQXQoMCkgLSA2NSArIDE7XG5cbiAgICAgICAgcmV0dXJuIFtyb3csIGNvbF07XG4gICAgfVxuICAgIHBvczJyZWYocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1K2NvbC0xKX0ke3Jvd31gO1xuICAgIH1cbiAgICBnZXQgbmJSb3dzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jdGJvZHkuY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgZ2V0IG5iQ29scygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Rib2R5LmZpcnN0RWxlbWVudENoaWxkIS5jaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgICNpc1VwZGF0aW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiggdGhpcy4jaXNVcGRhdGluZyA9PT0gdHJ1ZSApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuI2lzVXBkYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgY2VsbHMgPSB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbDxDZWxsPigndGQnKTtcbiAgICAgICAgICAgIGZvcihsZXQgY2VsbCBvZiBjZWxscykge1xuXG4gICAgICAgICAgICAgICAgaWYoIGNlbGwucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEgKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGNlbGwucmF3Q29udGVudC5leGVjKHRoaXMpOyAvL1RPRE8uLi5cblxuICAgICAgICAgICAgICAgICAgICAvL1RPRE86IGZhY3Rvcml6ZS4uLlxuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZTogc3RyaW5nID0gdHlwZW9mIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBEYXRlIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IChjZWxsIGFzIGFueSkuZm9ybWF0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5ob3N0LmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudCgndXBkYXRlJykgKTtcbiAgICAgICAgICAgIHRoaXMuI2lzVXBkYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXQgaXNSTygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cnMucm8gPT09IFwidHJ1ZVwiO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENlbGxMaXN0IGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuXG4gICAgI3NoZWV0OiBDYWxjU2hlZXQ7XG4gICAgI2NlbGxzOiBDZWxsW107XG4gICAgY29uc3RydWN0b3Ioc2hlZXQ6IENhbGNTaGVldCwgY2VsbHM6IENlbGxbXSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLiNjZWxscyA9IGNlbGxzO1xuICAgICAgICB0aGlzLiNzaGVldCA9IHNoZWV0O1xuICAgIH1cblxuICAgIGdldCBwbGFnZV9uYW1lKCkge1xuXG4gICAgICAgIGlmKCB0aGlzLiNjZWxscy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgaWYoIHRoaXMuI2NlbGxzLmxlbmd0aCA9PT0gMSApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4jc2hlZXQucG9zMnJlZiggLi4udGhpcy4jc2hlZXQuY2VsbFBvcyh0aGlzLiNjZWxsc1swXSkgKTtcblxuICAgICAgICBsZXQgY2VsbHMgPSB0aGlzLiNjZWxscy5tYXAoIGMgPT4gdGhpcy4jc2hlZXQuY2VsbFBvcyhjKSApLnNvcnQoIChhLGIpID0+IHtcbiAgICAgICAgICAgIGlmKCBhWzBdICE9PSBiWzBdIClcbiAgICAgICAgICAgICAgICByZXR1cm4gYVswXSAtIGJbMF07XG4gICAgICAgICAgICByZXR1cm4gYVsxXSAtIGJbMV07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtaW4gPSBjZWxsc1swXTtcbiAgICAgICAgbGV0IG1heCA9IGNlbGxzW2NlbGxzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIGxldCBuYl9jb2xzID0gbWF4WzFdIC0gbWluWzFdICsgMTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICBpZiggY2VsbHNbaV1bMF0gIT09IE1hdGguZmxvb3IoaS9uYl9jb2xzKSttaW5bMF0gJiYgY2VsbHNbaV1bMV0gIT09IChpJW5iX2NvbHMpKyBtaW5bMV0gKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICByZXR1cm4gYCR7dGhpcy4jc2hlZXQucG9zMnJlZiguLi5taW4pfToke3RoaXMuI3NoZWV0LnBvczJyZWYoLi4ubWF4KX1gO1xuICAgIH1cblxuICAgIGdldCBjZWxscygpOiBDZWxsW10ge1xuICAgICAgICByZXR1cm4gdGhpcy4jY2VsbHM7XG4gICAgfVxuICAgIGdldCBzaGVldCgpOiBDYWxjU2hlZXQge1xuICAgICAgICByZXR1cm4gdGhpcy4jc2hlZXQ7XG4gICAgfVxuXG4gICAgdG9nZ2xlRm9ybWF0KG5hbWU6IHN0cmluZ3woKHY6IGFueSwgcHJlYzogbnVtYmVyfG51bGwpID0+IHN0cmluZykgKSB7XG4gICAgICAgIGxldCBmID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQodGhpcyk7XG5cbiAgICAgICAgaWYoIHR5cGVvZiBuYW1lID09PSBcImZ1bmN0aW9uXCIpIHtcblxuICAgICAgICAgICAgbGV0IGlzRm9ybWF0ID0gZi5nZXRQcm9wZXJ0eShcImZvcm1hdFwiKSA9PT0gbmFtZTtcblxuICAgICAgICAgICAgdGhpcy5mb3JtYXQoe2Zvcm1hdDogaXNGb3JtYXQgPyBudWxsIDogbmFtZSB9KTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mb3JtYXQoe1tuYW1lXTogZi5nZXRQcm9wZXJ0eShuYW1lKSAhPT0gdHJ1ZX0pO1xuICAgIH1cblxuICAgIGZvcm1hdCguLi5mOiAoKCAodjogYW55LCBwcmVjOiBudW1iZXJ8bnVsbCkgPT4gc3RyaW5nICl8c3RyaW5nfEZvcm1hdHxSZWNvcmQ8c3RyaW5nLCBhbnk+KVtdKSB7XG5cbiAgICAgICAgaWYoIGYubGVuZ3RoID4gMSApIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9UT0RPLi4uLlxuICAgICAgICAgICAgZiA9IE9iamVjdC5mcm9tRW50cmllcyggZi5tYXAoIGUgPT4gW2UsIHRydWVdICkgKTtcblxuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIGYgPSBmWzBdO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgZiA9PT0gXCJmdW5jdGlvblwiIClcbiAgICAgICAgICAgIGYgPSB7XCJmb3JtYXRcIjogZn07XG5cbiAgICAgICAgaWYodHlwZW9mIGYgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgZiA9IHtbZl06IHRydWV9O1xuXG4gICAgICAgIGlmKCAhIChmIGluc3RhbmNlb2YgRm9ybWF0KSApXG4gICAgICAgICAgICBmID0gbmV3IEZvcm1hdChmKTtcblxuICAgICAgICBmLmFwcGx5VG8odGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0IGNvbnRlbnQoKTogKFJhd0NvbnRlbnRUeXBlKVtdIHtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBuZXcgQXJyYXkodGhpcy4jY2VsbHMubGVuZ3RoKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuI2NlbGxzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgY29udGVudFtpXSA9IHRoaXMuI2NlbGxzW2ldLnJhd0NvbnRlbnQhO1xuXG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH1cblxuICAgIGRlbGV0ZUZvcm1hdCgpIHtcbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIHRoaXMuI2NlbGxzKSAvL1RPRE8gYWRkIGhvYyBmb3JtYXQuLi5cbiAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gJyc7XG4gICAgfVxuXG4gICAgZGVsZXRlQ29udGVudCgpIHtcblxuICAgICAgICBmb3IobGV0IGNlbGwgb2YgdGhpcy4jY2VsbHMpIHtcbiAgICAgICAgICAgIGNlbGwucmF3Q29udGVudCA9IHVuZGVmaW5lZCBhcyBhbnk7XG4gICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXR5cGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NoZWV0LnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHNldCBjb250ZW50KGNvbnRlbnQ6IENlbGx8UmF3Q29udGVudFR5cGV8KFJhd0NvbnRlbnRUeXBlfENlbGwpW10pIHtcblxuICAgICAgICBpZiggQXJyYXkuaXNBcnJheShjb250ZW50KSApIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb250ZW50Lmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgIG5ldyBDZWxsTGlzdCh0aGlzLiNzaGVldCwgW3RoaXMuI2NlbGxzW2ldXSApLmNvbnRlbnQgPSBjb250ZW50W2ldO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiggdHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG5cbiAgICAgICAgICAgIGxldCByYXcgPSBjb250ZW50O1xuICAgICAgICAgICAgY29udGVudCA9IHBhcnNlSW5wdXQoY29udGVudCk7XG4gICAgICAgICAgICBpZiggdHlwZW9mIGNvbnRlbnQgPT09IFwibnVtYmVyXCIgJiYgcmF3W3Jhdy5sZW5ndGgtMV0gPT09IFwiJVwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGYgPSBGb3JtYXQuZXh0cmFjdEZvcm1hdCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiggISBmLmhhc1Byb3BlcnR5KFwiZm9ybWF0XCIpIClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtYXQoRm9ybWF0cy5wb3VyY2VudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBcblxuICAgICAgICBsZXQgcmF3X3ZhbCA9IGNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MVGFibGVDZWxsRWxlbWVudCA/IGNvbnRlbnQucmF3Q29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvbnRlbnQ7XG5cbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIHRoaXMuI2NlbGxzKSB7XG5cbiAgICAgICAgICAgIGlmKGNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MVGFibGVDZWxsRWxlbWVudCAmJiBjb250ZW50LnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBGb3JtdWxhICkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHYgPSBjb250ZW50LnJhd0NvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkc3QgPSB0aGlzLiNzaGVldC5jZWxsUG9zKCBjZWxsICk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3JjID0gdGhpcy4jc2hlZXQuY2VsbFBvcyhjb250ZW50KVxuXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZiA9IFsgZHN0WzBdIC0gc3JjWzBdLCBkc3RbMV0gLSBzcmNbMV1dIGFzIGNvbnN0O1xuXG4gICAgICAgICAgICAgICAgcmF3X3ZhbCA9IHYucmVsYXRpdmVUbyggdGhpcy4jc2hlZXQsIC4uLmRpZmYgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2VsbC5yYXdDb250ZW50ID0gcmF3X3ZhbDtcblxuICAgICAgICAgICAgbGV0IHZhbHVlID0gcmF3X3ZhbDtcbiAgICAgICAgICAgIGlmKCByYXdfdmFsIGluc3RhbmNlb2YgRm9ybXVsYSlcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHJhd192YWwuZXhlYyh0aGlzLiNzaGVldCk7IC8vVE9ETy4uLlxuXG4gICAgICAgICAgICBsZXQgdHlwZTogc3RyaW5nID0gdHlwZW9mIHZhbHVlO1xuICAgICAgICAgICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSApIHtcbiAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiO1xuICAgICAgICAgICAgICAgIGNlbGwuZm9ybWF0ID0gRm9ybWF0cy5kYXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gKGNlbGwgYXMgYW55KS5mb3JtYXQodmFsdWUpO1xuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHR5cGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2hlZXQudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgc2V0Uk8oaXNfcm86IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiB0aGlzLiNjZWxscylcbiAgICAgICAgICAgIGNlbGwuaXNfcm8gPSBpc19ybztcbiAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NlbGxzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBoYXMoLi4uY2VsbHM6IENlbGxbXSkge1xuICAgICAgICBmb3IobGV0IGNlbGwgb2YgY2VsbHMpXG4gICAgICAgICAgICBpZiggISB0aGlzLiNjZWxscy5pbmNsdWRlcyhjZWxsKSApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZW1vdmUoLi4uY2VsbHM6IENlbGxbXSkge1xuICAgICAgICB0aGlzLiNjZWxscyA9IHRoaXMuI2NlbGxzLmZpbHRlciggYyA9PiAhIGNlbGxzLmluY2x1ZGVzKGMpICk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpICk7XG4gICAgfVxuXG4gICAgcmVwbGFjZUFsbCguLi5jZWxsczogQ2VsbFtdfFtDZWxsTGlzdF0pIHtcbiAgICAgICAgdGhpcy4jY2VsbHMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5hZGQoLi4uY2VsbHMpO1xuICAgIH1cblxuICAgIGFkZCguLi5jZWxsczogQ2VsbFtdfFtDZWxsTGlzdF0pIHtcblxuICAgICAgICBpZiggY2VsbHNbMF0gaW5zdGFuY2VvZiBDZWxsTGlzdClcbiAgICAgICAgICAgIGNlbGxzID0gY2VsbHNbMF0uY2VsbHM7XG5cbiAgICAgICAgdGhpcy4jY2VsbHMucHVzaCguLi5jZWxscyBhcyBDZWxsW10pO1xuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpICk7XG4gICAgfVxuXG4gICAgZ2V0IGZpcnN0Q2VsbCgpIHtcbiAgICAgICAgaWYoIHRoaXMuI2NlbGxzLmxlbmd0aCA8IDEpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub3BlXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy4jY2VsbHNbMF07XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuI2NlbGxzLmxlbmd0aCA9IDA7XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcbiAgICB9XG5cblxuICAgIGRlZXBDbG9uZSgpIHtcblxuICAgICAgICBsZXQgY2VsbHMgPSB0aGlzLiNjZWxscy5tYXAoIGMgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xvbmUgPSBjLmNsb25lTm9kZSh0cnVlKSBhcyBDZWxsO1xuXG4gICAgICAgICAgICBjbG9uZS5yYXdDb250ZW50ID0gYy5yYXdDb250ZW50O1xuICAgICAgICAgICAgY2xvbmUuZm9ybWF0ICAgICA9IGMuZm9ybWF0O1xuICAgICAgICAgICAgKGNsb25lIGFzIGFueSkucG9zICAgICAgICA9IHRoaXMuI3NoZWV0LmNlbGxQb3MoYyk7XG5cbiAgICAgICAgICAgIHJldHVybiBjbG9uZTtcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gbmV3IENlbGxMaXN0KHRoaXMuI3NoZWV0LCBjZWxscyk7XG4gICAgfVxufVxuXG4vL1RPRE8uLi5cbmltcG9ydCBcIi4vZm9ybXVsYV9lZGl0b3JcIjtcbmltcG9ydCBcIi4vcGxhZ2VfZWRpdG9yXCI7XG5pbXBvcnQgeyBGb3JtdWxhLCBwYXJzZV9mb3JtdWxhIH0gZnJvbSBcIi4vZm9ybXVsYV9wYXJzZXJcIjtcbmltcG9ydCB7IFBsYWdlU2VsZWN0b3IgfSBmcm9tIFwiLi9wbGFnZV9zZWxlY3RvclwiO1xuaW1wb3J0IHsgRm9ybWF0LCBGb3JtYXRNYW5hZ2VyLCBGb3JtYXRzIH0gZnJvbSBcIi4vZm9ybWF0XCI7XG5pbXBvcnQgeyBGb3JtdWxhUmVmLCBSYW5nZU92ZXJsYXksIFJlY29weUhhbmRsZSB9IGZyb20gXCIuL1JhbmdlT3ZlcmxheVwiO1xuXG5MSVNTLmRlZmluZSgnY2FsYy1zaGVldCcsIENhbGNTaGVldCk7IiwiaW1wb3J0IExJU1MgZnJvbSBcIi4uLy4uLy4uL2xpYnMvTElTU1wiO1xuaW1wb3J0IHsgRm9ybWF0LCBGb3JtYXRzIH0gZnJvbSBcIi4vZm9ybWF0XCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGxMaXN0IH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuY29uc3QgY29udGVudCA9IGBcbiAgICA8c2VsZWN0IGRpc2FibGVkIHRpdGxlPVwiTm9tIGRlIHBvbGljZVwiPjxvcHRpb24+TGliw6lyYXRpb24gU2Fuczwvb3B0aW9uPjwvc2VsZWN0PlxuICAgIDxzZWxlY3QgY2xhc3M9XCJmb250X3NpemVcIiB0aXRsZT1cIlRhaWxsZSBkZSBwb2xpY2VcIj48L3NlbGVjdD5cbiAgICA8c3BhbiBjbGFzcz0ndmJhcic+PC9zcGFuPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdib2xkJyB0aXRsZT1cIkdyYXMgKEN0cmwrQilcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdpdGFsaWMnIHRpdGxlPVwiSXRhbGlxdWUgKEN0cmwrSSlcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSd1bmRlcmxpbmUnIHRpdGxlPVwiU291bGlnbmFnZSAoQ3RybCtVKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gdmFsdWU9J2JsYWNrJyBuYW1lPSdmb3JlZ3JvdW5kX2NvbG9yJyB0aXRsZT1cIkNvdWxldXIgZGUgcG9saWNlXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gdmFsdWU9J3llbGxvdycgbmFtZT0nYmFja2dyb3VuZF9jb2xvcicgdGl0bGU9XCJDb3VsZXVyIGQnYXJyacOocmUtcGxhblwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nYWxpZ25fbGVmdCcgdGl0bGU9XCJBbGlnbmVyIMOgIGdhdWNoZSAoQ3RybCtMKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2FsaWduX2NlbnRlcicgdGl0bGU9XCJDZW50ZXIgKEN0cmwrRSlcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdhbGlnbl9yaWdodCcgdGl0bGU9XCJBbGlnbmVyIMOgIGRyb2l0ZSAoQ3RybCtSKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0ndmFsaWduX3RvcCcgdGl0bGU9XCJBbGlnbmVyIGVuIGhhdXRcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSd2YWxpZ25fbWlkZGxlJyB0aXRsZT1cIkNlbnRyZXIgdmVydGljYWxlbWVudFwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J3ZhbGlnbl9ib3R0b20nIHRpdGxlPVwiQWxpZ25lciBlbiBiYXNcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxzcGFuIGNsYXNzPSd2YmFyJz48L3NwYW4+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2FqdXN0ZXInIHRpdGxlPVwiQWp1c3RlciBsZSB0ZXh0ZVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nbWVyZ2VfY2VudGVyJyB0eXBlPSdmY3QnIHRpdGxlPVwiRnVzaW9ubmVyIGV0IGNlbnRyZXIgb3UgZMOpZnVzaW9ubmVyIGxlcyBjZWxsdWxlcyBlbiBpbnZlcnNhbnQgbGV1ciDDqXRhdCBhY3R1ZWxcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdtZXJnZScgdHlwZT0nZmN0JyB0aXRsZT1cIkZ1c2lvbm5lciBsZXMgY2VsbHVsZXNcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSd1bm1lcmdlJyB0eXBlPSdmY3QnIHRpdGxlPVwiRMOpZnVzaW9ubmVyIGxlcyBjZWxsdWxlc1wiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nZm9ybWF0X21vbm5haWUnIHR5cGU9J2ZjdCcgdGl0bGU9XCJBcHBsaXF1ZXIgbGUgZm9ybWF0IE1vbm5haWUgKE1haitDdHJsKzQpXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nZm9ybWF0X3BvdXJjZW50JyB0eXBlPSdmY3QnIHRpdGxlPVwiQXBwbGlxdWVyIGxlIGZvcm1hdCBQb3VyY2VudGFnZSAoTWFqK0N0cmwrNSlcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdmb3JtYXRfbmInIHR5cGU9J2ZjdCcgIHRpdGxlPVwiQXBwbGlxdWVyIGxlIGZvcm1hdCBOb21icmUgKE1haitDdHJsKzEpXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nZm9ybWF0X2RhdGUnIHR5cGU9J2ZjdCcgIHRpdGxlPVwiQXBwbGlxdWVyIGxlIGZvcm1hdCBEYXRlIChNYWorQ3RybCszKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nZm9ybWF0X3plcm9fcDEnIHR5cGU9J2ZjdCcgdGl0bGU9XCJBam91dGVyIHVuZSBkw6ljaW1hbGVcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdmb3JtYXRfemVyb19tMScgdHlwZT0nZmN0JyB0aXRsZT1cIlN1cHByaW1lciB1bmUgZMOpY2ltYWxlXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8c3BhbiBjbGFzcz0ndmJhcic+PC9zcGFuPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdyZXRyYWl0X3AxJyB0eXBlPSdmY3QnIHRpdGxlPVwiQXVnbWVudGVyIGxlIHJldHJhaXRcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdyZXRyYWl0X20xJyB0eXBlPSdmY3QnIHRpdGxlPVwiRGltaW51ZXIgbGUgcmV0cmFpdFwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nYm9yZGVyJyB0eXBlPSdmY3QnIHRpdGxlPVwiQm9yZHVyZXMgKE1haiBwb3VyIMOpY3Jhc2VyKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2JvcmRlcl9zdHlsZScgdHlwZT0nZmN0JyBkaXNhYmxlZCB0aXRsZT1cIlN0eWxlIGRlIGJvcmR1cmVcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSB2YWx1ZT0nYmxhY2snIG5hbWU9J2JvcmRlcl9jb2xvcicgdGl0bGU9XCJDb3VsZXVyIGRlIGJvcmR1cmVcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxzcGFuIGNsYXNzPSd2YmFyJz48L3NwYW4+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2Zvcm1hdF9jb25kJyB0eXBlPSdmY3QnIGRpc2FibGVkIHRpdGxlPVwiQ29uZGl0aW9ubmVsXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbmA7XG5cbmZ1bmN0aW9uIG1lcmdlKGNlbGxsaXN0OiBDZWxsTGlzdCwgaXNfYWxpZ24gPSBmYWxzZSkge1xuXG4gICAgY29uc3Qgc2hlZXQgPSBjZWxsbGlzdC5zaGVldDtcblxuICAgIGNvbnN0IFtiZWcsZW5kXSA9IGNlbGxsaXN0LnBsYWdlX25hbWUhLnNwbGl0KCc6JykubWFwKCBlID0+IHNoZWV0LnJlZjJwb3MoZSkgKTsgLy8gcGxhZ2UgY2FuJ3QgYmUgdW5kZWZpbmVkXG5cbiAgICBsZXQgcm93cyA9IGVuZFswXSAtIGJlZ1swXSArIDE7XG4gICAgbGV0IGNvbHMgPSBlbmRbMV0gLSBiZWdbMV0gKyAxO1xuXG4gICAgbGV0IGZvcm1hdDogUmVjb3JkPHN0cmluZyxhbnk+ID0ge1xuICAgICAgICBzcGFuOiBbIHJvd3MsIGNvbHMgXVxuICAgIH1cblxuICAgIGlmKCBpc19hbGlnbiApIHtcbiAgICAgICAgZm9ybWF0LnZhbGlnbl9taWRkbGUgPSB0cnVlO1xuICAgICAgICBmb3JtYXQuYWxpZ25fY2VudGVyICA9IHRydWU7XG4gICAgfVxuXG4gICAgc2hlZXQuZ2V0UmFuZ2UoYmVnKS5mb3JtYXQoZm9ybWF0KTtcbn1cblxuZnVuY3Rpb24gdW5tZXJnZShjZWxsbGlzdDogQ2VsbExpc3QpIHtcblxuICAgIGNlbGxsaXN0LmZvcm1hdCh7XG4gICAgICAgIHNwYW46IFsgMSwgMSBdXG4gICAgfSk7IC8vIHVubWVyZ2UuLi5cbn1cblxuZnVuY3Rpb24gcmV0cmFpdChjZWxsczogQ2VsbExpc3QsIGRlbHRhX2luZGVudDogbnVtYmVyKSB7XG4gICAgXG4gICAgZm9yKGxldCBjZWxsIG9mIGNlbGxzLmNlbGxzKSB7XG5cbiAgICAgICAgY29uc3QgZm9ybWF0ID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbCk7XG4gICAgICAgIGxldCBuZXdfZm9ybWF0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG4gICAgICAgIGlmKCAhIGZvcm1hdC5oYXNQcm9wZXJ0eShcImFsaWduX3JpZ2h0XCIpICYmICEgZm9ybWF0Lmhhc1Byb3BlcnR5KFwiYWxpZ25fbGVmdFwiKSApXG4gICAgICAgICAgICBuZXdfZm9ybWF0LmFsaWduX2xlZnQgPSB0cnVlO1xuXG4gICAgICAgIG5ld19mb3JtYXQuaW5kZW50ID0gKyhmb3JtYXQuZ2V0UHJvcGVydHkoXCJpbmRlbnRcIikgPz8gMCkgKyBkZWx0YV9pbmRlbnQ7XG4gICAgICAgIFxuICAgICAgICBpZiggbmV3X2Zvcm1hdC5pbmRlbnQgPCAwKVxuICAgICAgICAgICAgbmV3X2Zvcm1hdC5pbmRlbnQgPSAwO1xuXG4gICAgICAgIGNlbGxzLmZvcm1hdChuZXdfZm9ybWF0KTsgICAgIFxuICAgIH1cbn1cblxuZnVuY3Rpb24gcHJlY2lzaW9uKGNlbGxzOiBDZWxsTGlzdCwgZGVsdGFfcHJlYzogbnVtYmVyKSB7XG5cbiAgICBsZXQgcHJlY2lzaW9uID0gdW5kZWZpbmVkO1xuICAgIGZvcihsZXQgY2VsbCBvZiBjZWxscy5jZWxscykge1xuICAgICAgICBjb25zdCBwcmVjID0gKyhGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxsKS5nZXRQcm9wZXJ0eShcInByZWNpc2lvblwiKSA/PyAyKTtcbiAgICAgICAgaWYoIHByZWNpc2lvbiA9PT0gdW5kZWZpbmVkIHx8IHByZWMgPCBwcmVjaXNpb24gKVxuICAgICAgICAgICAgcHJlY2lzaW9uID0gcHJlYztcbiAgICB9XG5cbiAgICBwcmVjaXNpb24gPz89IDI7XG4gICAgcHJlY2lzaW9uICs9IGRlbHRhX3ByZWM7XG4gICAgaWYocHJlY2lzaW9uIDwgMClcbiAgICAgICAgcHJlY2lzaW9uID0gMDtcblxuICAgIGNlbGxzLmZvcm1hdCh7cHJlY2lzaW9ufSk7XG59XG5cbmNvbnN0IGZjdHM6IFJlY29yZDxzdHJpbmcsIHsgYWN0aW9uOiAoY2VsbHM6IENlbGxMaXN0KSA9PnZvaWQsIGVuYWJsZWQ/OiAoY2VsbHM6IENlbGxMaXN0KSA9PiBib29sZWFuIH0+ID0ge1xuICAgIFwiZm9ybWF0X3plcm9fcDFcIjoge1xuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuICAgICAgICAgICAgcHJlY2lzaW9uKGNlbGxzLCArMSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiZm9ybWF0X3plcm9fbTFcIjoge1xuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuICAgICAgICAgICAgcHJlY2lzaW9uKGNlbGxzLCAtMSk7XG4gICAgICAgIH1cbiAgICB9LFwiZm9ybWF0X3BvdXJjZW50XCI6IHtcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcblxuICAgICAgICAgICAgaWYoIEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzKS5nZXRQcm9wZXJ0eSgnZm9ybWF0JykgPT09IEZvcm1hdHMucG91cmNlbnQgKSB7XG4gICAgICAgICAgICAgICAgY2VsbHMuZm9ybWF0KHtmb3JtYXQ6IG51bGx9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjZWxscy5mb3JtYXQoRm9ybWF0cy5wb3VyY2VudCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVuYWJsZWQ6IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzKS5nZXRQcm9wZXJ0eSgnZm9ybWF0JykgPT09IEZvcm1hdHMucG91cmNlbnQ7XG4gICAgICAgIH1cbiAgICB9LFwiZm9ybWF0X25iXCI6IHtcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcblxuICAgICAgICAgICAgaWYoIEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzKS5nZXRQcm9wZXJ0eSgnZm9ybWF0JykgPT09IEZvcm1hdHMubnVtYmVyICkge1xuICAgICAgICAgICAgICAgIGNlbGxzLmZvcm1hdCh7Zm9ybWF0OiBudWxsfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2VsbHMuZm9ybWF0KEZvcm1hdHMubnVtYmVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5hYmxlZDogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHMpLmdldFByb3BlcnR5KCdmb3JtYXQnKSA9PT0gRm9ybWF0cy5udW1iZXI7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiZm9ybWF0X21vbm5haWVcIjoge1xuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuXG4gICAgICAgICAgICBpZiggRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHMpLmdldFByb3BlcnR5KCdmb3JtYXQnKSA9PT0gRm9ybWF0cy5ldXJvcyApIHtcbiAgICAgICAgICAgICAgICBjZWxscy5mb3JtYXQoe2Zvcm1hdDogbnVsbH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNlbGxzLmZvcm1hdChGb3JtYXRzLmV1cm9zKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5hYmxlZDogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHMpLmdldFByb3BlcnR5KCdmb3JtYXQnKSA9PT0gRm9ybWF0cy5ldXJvcztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJmb3JtYXRfZGF0ZVwiOiB7XG4gICAgICAgIGFjdGlvbjogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG5cbiAgICAgICAgICAgIGlmKCBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxscykuZ2V0UHJvcGVydHkoJ2Zvcm1hdCcpID09PSBGb3JtYXRzLmRhdGUgKSB7XG4gICAgICAgICAgICAgICAgY2VsbHMuZm9ybWF0KHtmb3JtYXQ6IG51bGx9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjZWxscy5mb3JtYXQoRm9ybWF0cy5kYXRlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5hYmxlZDogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHMpLmdldFByb3BlcnR5KCdmb3JtYXQnKSA9PT0gRm9ybWF0cy5kYXRlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcInJldHJhaXRfbTFcIjoge1xuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuICAgICAgICAgICAgcmV0cmFpdChjZWxscywgLTEpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcInJldHJhaXRfcDFcIjogeyAvLyBUT0RPOiBtMS4uLlxuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuICAgICAgICAgICAgcmV0cmFpdChjZWxscywgKzEpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcImJvcmRlclwiOiB7XG4gICAgICAgIGFjdGlvbjogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG4gICAgICAgICAgICBjZWxscy5mb3JtYXQoe1xuICAgICAgICAgICAgICAgIGJvcmRlcl90b3A6IHRydWUsXG4gICAgICAgICAgICAgICAgYm9yZGVyX2JvdHRvbTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBib3JkZXJfbGVmdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBib3JkZXJfcmlnaHQ6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcInVubWVyZ2VcIjoge1xuICAgICAgICBhY3Rpb246IHVubWVyZ2VcbiAgICB9LFxuICAgIFwibWVyZ2VcIjoge1xuICAgICAgICBhY3Rpb246IG1lcmdlXG4gICAgfSxcbiAgICBcIm1lcmdlX2NlbnRlclwiOiB7XG4gICAgICAgIGFjdGlvbjogZnVuY3Rpb24oY2VsbGxpc3Q6IENlbGxMaXN0KSB7XG5cbiAgICAgICAgICAgIGxldCB1bm1lcmdlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCBzaGVldCA9IGNlbGxsaXN0LnNoZWV0O1xuXG4gICAgICAgICAgICBmb3IobGV0IGNlbGwgb2YgY2VsbGxpc3QuY2VsbHMpXG4gICAgICAgICAgICAgICAgaWYoIEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGwpLmhhc1Byb3BlcnR5KFwic3BhblwiKSApIHtcbiAgICAgICAgICAgICAgICAgICAgdW5tZXJnZSggbmV3IENlbGxMaXN0KHNoZWV0LCBbY2VsbF0pICk7XG4gICAgICAgICAgICAgICAgICAgIHVubWVyZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHVubWVyZ2VkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgbWVyZ2UoY2VsbGxpc3QsIHRydWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbmFibGVkOiBmdW5jdGlvbihjZWxsbGlzdDogQ2VsbExpc3QpIHtcblxuICAgICAgICAgICAgZm9yKGxldCBjZWxsIG9mIGNlbGxsaXN0LmNlbGxzKVxuICAgICAgICAgICAgICAgIGlmKCBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxsKS5oYXNQcm9wZXJ0eShcInNwYW5cIikgKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBjc3MgPSBgXG4gICAgOmhvc3Qge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xuXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogMS41ZW07XG4gICAgfVxuXG4gICAgOmhvc3QgLnZiYXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYmFiYWI7XG4gICAgICAgIGhlaWdodDogMWVtO1xuICAgIH1cblxuICAgIDpob3N0IHNlbGVjdCB7XG4gICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuYFxuXG5jb25zdCBpdGVtY3NzID0gYFxuXG4gICAgOmhvc3Qge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgOmhvc3QoW2Rpc2FibGVkXSkge1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cblxuICAgIDpob3N0KFt2YWx1ZV0pIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgICB9XG5cbiAgICA6aG9zdCwgOmhvc3QgPiBkaXYge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICA6aG9zdCB7XG4gICAgICAgIHBhZGRpbmc6IDFweDtcbiAgICB9XG5cbiAgICA6aG9zdCA+IGRpdiB7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IGNhbGMoIDEuMmVtIC0gMXB4ICk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtMXB4O1xuICAgICAgICByaWdodDogLTFweDtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IGNhbGMoICggMS4yZW0gLSAxcHggLSAycHggKSAvIDIgKTtcbiAgICAgICAgICAgIHJpZ2h0OiAxcHg7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgd2lkdGg6IDA7IFxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgLS1zaXplOiA0cHg7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogdmFyKC0tc2l6ZSkgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IHZhcigtLXNpemUpIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBib3JkZXItdG9wOiB2YXIoLS1zaXplKSBzb2xpZCBibGFjaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIDpob3N0KDpob3Zlcjpub3QoLmVuYWJsZWQpKSwgOmhvc3QoOmhvdmVyOm5vdCguZW5hYmxlZCkpID4gZGl2IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk2OTY5NjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIH1cblxuICAgIDpob3N0KC5lbmFibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiNmI2YjY7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjliOWI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB9XG5gO1xuXG5leHBvcnQgY2xhc3MgQ2FsY1Rvb2xiYXJJdGVtIGV4dGVuZHMgTElTUyh7XG4gICAgY3NzOiBpdGVtY3NzXG59KSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb250ZW50LnNyYyA9IGAuLi8uLi8uLi8uLi9hc3NldHMvdGFibGV1ci9pbWcvdG9vbGJhci8ke3RoaXMuaG9zdC5nZXRBdHRyaWJ1dGUoJ25hbWUnKX0ucG5nYDtcblxuICAgICAgICBpZiggISB0aGlzLmhvc3QuaGFzQXR0cmlidXRlKCd2YWx1ZScpICkge1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCggY29udGVudCApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGxldCBjb2xvcl9waWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFt0eXBlPVwiY29sb3JcIl0nKTtcbiAgICAgICAgICAgIGlmKCBjb2xvcl9waWNrZXIgPT09IG51bGwgKSB7XG4gICAgICAgICAgICAgICAgY29sb3JfcGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBjb2xvcl9waWNrZXIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNvbG9yXCIpO1xuICAgICAgICAgICAgICAgIGNvbG9yX3BpY2tlci5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgY29sb3JfcGlja2VyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjYW5jZWwnKSk7XG5cbiAgICAgICAgICAgIGxldCBjYW5jZWwgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbG9yX3BpY2tlci5hZGRFdmVudExpc3RlbmVyKCdjYW5jZWwnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FuY2VsID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG5cbiAgICAgICAgICAgIGNvbG9yX3BpY2tlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXYpID0+IHtcbiAgICAgICAgICAgICAgICBpZiggY2FuY2VsIClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5ob3N0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjb2xvcl9waWNrZXIudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJjbGlja1wiLCB7YnViYmxlczogdHJ1ZX0pICk7XG5cbiAgICAgICAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNvbG9yX3BpY2tlcik7XG4gICAgICAgICAgICBjb2xvcl9waWNrZXIuY2xpY2soKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCggY29udGVudCwgc3BhbiApO1xuICAgIH1cbn1cblxuTElTUy5kZWZpbmUoJ2NhbGMtdG9vbGJhci1pdGVtJywgQ2FsY1Rvb2xiYXJJdGVtKTtcblxuZXhwb3J0IGNsYXNzIENhbGNUb29sYmFyIGV4dGVuZHMgTElTUyh7XG4gICAgY29udGVudCxcbiAgICBjc3Ncbn0pIHtcblxuICAgICNidG5zOiBSZWNvcmQ8c3RyaW5nLCBIVE1MRWxlbWVudD4gPSB7fTtcblxuICAgIGRpc2FibGVBbGxFeGNlcHQoLi4uZXhjZXB0aW9uOiBzdHJpbmdbXSkge1xuICAgICAgICBmb3IobGV0IGJ0bl9uYW1lIGluIHRoaXMuI2J0bnMpXG4gICAgICAgICAgICBpZiggISBleGNlcHRpb24uaW5jbHVkZXMoYnRuX25hbWUpIClcbiAgICAgICAgICAgICAgICB0aGlzLiNidG5zW2J0bl9uYW1lXS50b2dnbGVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIFxuICAgICAgICBpZiggISBleGNlcHRpb24uaW5jbHVkZXMoXCJmb250X3NpemVcIikgKVxuICAgICAgICAgICAgdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNlbGVjdEVsZW1lbnQ+KCcuZm9udF9zaXplJykhLnRvZ2dsZUF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBsZXQgZm9udF9zaXplcyA9IFtcbiAgICAgICAgICAgIDYsIDcsIDgsIDksIDEwLCAxMC41LCAxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxOCwgMjAsIDIxLCAyMiwgMjQsIDI2LCAyOCwgMzIsIDM2LCA0MCwgNDIsIDQ0LCA0OCwgNTQsIDYwLCA2NiwgNzIsIDgwLCA4OCwgOTZcbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBidG5zID0gdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCdjYWxjLXRvb2xiYXItaXRlbScpO1xuICAgICAgICBmb3IobGV0IGJ0biBvZiBidG5zKVxuICAgICAgICAgICAgdGhpcy4jYnRuc1tidG4uZ2V0QXR0cmlidXRlKCduYW1lJykhXSA9IGJ0bjtcblxuICAgICAgICBjb25zdCBmb250X3NpemVzX3NlbGVjdCA9IHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yPEhUTUxTZWxlY3RFbGVtZW50PignLmZvbnRfc2l6ZScpITtcbiAgICAgICAgZm9yKGxldCBmb250X3NpemUgb2YgZm9udF9zaXplcykge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gbmV3IE9wdGlvbihgJHtmb250X3NpemUudG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgJywnKX0gcHRgLCBgJHtmb250X3NpemV9cHRgKTtcbiAgICAgICAgICAgIGZvbnRfc2l6ZXNfc2VsZWN0LmFwcGVuZChvcHRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGVsZW0gPSBldi50YXJnZXQhIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgaWYoIGVsZW0udGFnTmFtZSAhPT0gJ0NBTEMtVE9PTEJBUi1JVEVNJylcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGNvbnN0IG4gPSBlbGVtLmdldEF0dHJpYnV0ZSgnbmFtZScpISBhcyBrZXlvZiB0eXBlb2YgZmN0cztcbiAgICAgICAgICAgIGlmKCBlbGVtLmdldEF0dHJpYnV0ZSgndHlwZScpID09PSAnZmN0Jykge1xuXG4gICAgICAgICAgICAgICAgZmN0c1tuXS5hY3Rpb24odGhpcy4jc2hlZXQuc2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLiN1cGRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAgZWxlbS5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGVsZW0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlbGVtLmNsYXNzTGlzdC50b2dnbGUoJ2VuYWJsZWQnKTtcblxuICAgICAgICAgICAgbGV0IGZvcm1hdCA9IG5ldyBGb3JtYXQoe1tuXTogdmFsdWUgfSk7XG4gICAgICAgICAgICBmb3JtYXQuYXBwbHlUbyggdGhpcy4jc2hlZXQuc2VsZWN0aW9uICk7XG4gICAgICAgICAgICB0aGlzLiN1cGRhdGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9udF9zaXplc19zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIC8vVE9ETy4uLlxuICAgICAgICAgICAgbGV0IGZvcm1hdCA9IG5ldyBGb3JtYXQoe2ZvbnRfc2l6ZTogZm9udF9zaXplc19zZWxlY3QudmFsdWV9KTtcbiAgICAgICAgICAgIGZvcm1hdC5hcHBseVRvKCB0aGlzLiNzaGVldC5zZWxlY3Rpb24gKTtcbiAgICAgICAgICAgIHRoaXMuI3VwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAjc2hlZXQhOkNhbGNTaGVldDtcblxuXG4gICAgI3VwZGF0ZSgpIHtcblxuICAgICAgICBpZiggdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmNlbGxzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBjb25zdCBmb3JtYXQgPSBGb3JtYXQuZXh0cmFjdEZvcm1hdCh0aGlzLiNzaGVldC5zZWxlY3Rpb24pO1xuXG4gICAgICAgIGZvcihsZXQgbmFtZSBpbiB0aGlzLiNidG5zKSB7XG5cbiAgICAgICAgICAgIGxldCBlbmFibGVkID0gZm9ybWF0LmdldFByb3BlcnR5KG5hbWUpID09PSB0cnVlO1xuICAgICAgICAgICAgaWYobmFtZSBpbiBmY3RzKVxuICAgICAgICAgICAgICAgIGVuYWJsZWQgPSBmY3RzW25hbWUgYXMga2V5b2YgdHlwZW9mIGZjdHNdLmVuYWJsZWQ/Lih0aGlzLiNzaGVldC5zZWxlY3Rpb24pID8/IGZhbHNlO1xuXG4gICAgICAgICAgICB0aGlzLiNidG5zW25hbWVdLmNsYXNzTGlzdC50b2dnbGUoJ2VuYWJsZWQnLCBlbmFibGVkIClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vVE9ETy4uLlxuICAgICAgICBjb25zdCBmb250X3NpemVzX3NlbGVjdCA9IHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yPEhUTUxTZWxlY3RFbGVtZW50PignLmZvbnRfc2l6ZScpITtcbiAgICAgICAgZm9udF9zaXplc19zZWxlY3QudmFsdWUgPSBmb3JtYXQuZ2V0UHJvcGVydHkoJ2ZvbnRfc2l6ZScpO1xuICAgICAgICAvL1RPRE86IHVwZGF0ZS4uLlxuICAgIH1cblxuICAgIHN5bmNUbyhzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcblxuXG4gICAgICAgIHNoZWV0LnNlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXYpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI3VwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4jdXBkYXRlKCk7XG5cbiAgICB9XG5cbn1cblxuTElTUy5kZWZpbmUoJ2NhbGMtdG9vbGJhcicsIENhbGNUb29sYmFyKTsiLCJleHBvcnQgZGVmYXVsdCBbXG4gICAge1xuICAgICAgICBuYW1lIDogXCJSIDEtMDEgVGFibGV1ciBldCBSZXBvcnRpbmdcIixcbiAgICAgICAgc25hbWU6IFwiUjEtMDEgVGFibGV1clwiLFxuICAgICAgICBwYXRoIDogXCJSMS0wMVwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ01cIixcbiAgICAgICAgICAgICAgICBwYXRoOiBcIkNNXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgXCJDTTFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDTTJcIlxuICAgICAgICAgICAgICAgIF1cblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlRQXCIsXG4gICAgICAgICAgICAgICAgcGF0aDogXCJUUFwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiVFAxXCJcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiUiAxLTAyIEJhc2VzIGRlIERvbm7DqWVzIFJlbGF0aW9ubmVsbGVzIDFcIixcbiAgICAgICAgc25hbWU6IFwiUjEtMDIgQkRSMVwiLFxuICAgICAgICBwYXRoIDogXCJSMS0wMlwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgXCJDTVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiVFBcIiAsXG4gICAgICAgICAgICAgICAgcGF0aCA6IFwiVFBcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIlRQMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQMlwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQM1wiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQNFwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQNVwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IHJvb3RfcGF0aCA9IFtcImxvY2FsaG9zdFwiLCBcIjEyNy4wLjAuMVwiXS5pbmNsdWRlcyhsb2NhdGlvbi5ob3N0bmFtZSkgPyBcIi9kaXN0L2Rldi9wYWdlcy9cIiA6IFwiL0NvdXJzL2Rpc3QvZGV2L3BhZ2VzL1wiOyIsIlxuaW1wb3J0IHBhZ2VzLCB7cm9vdF9wYXRofSBmcm9tIFwiLi9jb250ZW50XCI7XG5cbi8qXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JlcHJpbnQnLCAoKSA9PiB7XG4gIC8vLi4uXG59KTtcbiovXG5cbi8vVE9ETzogbGlua3MuLi5cbmNvbnN0IG1haW4gICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpITtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIikhO1xuXG5jb25zdCB0aXRsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcImgxLCBoMiwgaDMsIGg0XCIpO1xuXG50eXBlIE5vZGUgPSB7XG4gICAgaHRtbCAgICA6IEhUTUxFbGVtZW50LFxuICAgIGxldmVsICAgOiBudW1iZXIsXG4gICAgcGFyZW50ICA6IG51bGx8Tm9kZSxcbiAgICBjaGlsZHJlbjogTm9kZVtdXG59O1xuXG5jb25zdCBodHJlZTogTm9kZSA9IHtcbiAgICBodG1sICAgIDogbWFpbixcbiAgICBsZXZlbCAgIDogMCxcbiAgICBwYXJlbnQgIDogbnVsbCxcbiAgICBjaGlsZHJlbjogW10sXG59O1xubGV0IGh0cmVlX2N1cnNvciA9IGh0cmVlO1xuZm9yKGxldCB0aXRsZSBvZiB0aXRsZXMpIHtcbiAgICBjb25zdCBsZXZlbCA9ICt0aXRsZS50YWdOYW1lLnNsaWNlKDEpO1xuICAgIFxuICAgIHdoaWxlKCBsZXZlbCA8PSBodHJlZV9jdXJzb3IubGV2ZWwgKVxuICAgICAgICBodHJlZV9jdXJzb3IgPSBodHJlZV9jdXJzb3IucGFyZW50ITtcblxuICAgIGNvbnN0IGVsZW06IE5vZGUgPSB7XG4gICAgICAgIGh0bWw6IHRpdGxlLFxuICAgICAgICBsZXZlbCxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICBwYXJlbnQ6IGh0cmVlX2N1cnNvclxuICAgIH07XG5cblxuICAgIGh0cmVlX2N1cnNvci5jaGlsZHJlbi5wdXNoKGVsZW0pO1xuXG4gICAgaHRyZWVfY3Vyc29yID0gZWxlbTtcbn1cblxuZnVuY3Rpb24gc2VhcmNoQ3VySGVhZGVyKGh0cmVlOiBOb2RlLCBwb3NpdGlvbjogbnVtYmVyKTogbnVsbCB8IE5vZGUge1xuXG4gICAgY29uc3QgaGVhZGVycyA9IGh0cmVlLmNoaWxkcmVuO1xuXG4gICAgZm9yKGxldCBpID0gaGVhZGVycy5sZW5ndGggLSAxOyBpID49IDA7IC0taSlcbiAgICAgICAgaWYoIGhlYWRlcnNbaV0uaHRtbC5vZmZzZXRUb3AgPD0gcG9zaXRpb24gKyAzMiApXG4gICAgICAgICAgICByZXR1cm4gc2VhcmNoQ3VySGVhZGVyKGhlYWRlcnNbaV0sIHBvc2l0aW9uKSA/PyBoZWFkZXJzW2ldO1xuXG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmNvbnN0IGhpZCA9IFtcbiAgICBbXSxcbiAgICBbXCJJXCIsIFwiSUlcIiwgXCJJSUlcIiwgXCJJVlwiXSxcbiAgICBbXCIxXCIsIFwiMlwiLFwiM1wiLFwiNVwiLFwiNlwiLFwiN1wiLFwiOFwiLFwiOVwiXSxcbiAgICBbXCJhXCIsIFwiYlwiLFwiY1wiLFwiZFwiLFwiZVwiLFwiZlwiLFwiZ1wiLFwiaFwiXSxcbl1cblxuZnVuY3Rpb24gZ2V0VGl0bGVQcmVmaXgoczogTm9kZSkge1xuXG4gICAgaWYoIHMubGV2ZWwgPj0gaGlkLmxlbmd0aCApXG4gICAgICAgIHJldHVybiBcIlwiO1xuXG4gICAgY29uc3QgaWR4ID0gcy5wYXJlbnQhLmNoaWxkcmVuLmluZGV4T2Yocyk7XG5cbiAgICBjb25zdCBudW0gPSBoaWRbcy5sZXZlbF1baWR4XTtcblxuICAgIHJldHVybiBgJHtudW19LiBgO1xufVxuXG5mdW5jdGlvbiBidWlsZE1lbnUobm9kZXM6IE5vZGVbXSkge1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICAgIG1lbnUuYXBwZW5kKCAuLi4gbm9kZXMubWFwKCAocyxpZHgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBpdGVtLnRleHRDb250ZW50PSBgJHtnZXRUaXRsZVByZWZpeChzKX0ke3MuaHRtbC50ZXh0Q29udGVudH1gO1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgYCMke3MuaHRtbC5pZH1gKTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSkgKTtcblxuICAgIHJldHVybiBtZW51O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVIZWFkZXIoKSB7XG5cbiAgICBjb25zdCBsYXN0ID0gc2VhcmNoQ3VySGVhZGVyKCBodHJlZSwgbWFpbi5zY3JvbGxUb3ApITtcblxuICAgIGxldCBoZWFkZXJzID0gW107XG4gICAgbGV0IGN1cnNvciAgPSBsYXN0O1xuXG4gICAgd2hpbGUoY3Vyc29yLmh0bWwgIT09IG1haW4pIHtcbiAgICAgICAgaGVhZGVycy5wdXNoKGN1cnNvcik7XG4gICAgICAgIGN1cnNvciA9IGN1cnNvci5wYXJlbnQhO1xuICAgIH1cblxuICAgIGNvbnN0IGh0bWwgPSBoZWFkZXJzLnJldmVyc2UoKS5tYXAoIChobm9kZSxpKSA9PiB7XG5cbiAgICAgICAgY29uc3QgaCA9IGhub2RlLmh0bWw7XG4gICAgICAgIGNvbnN0IGhfaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgbGluay50ZXh0Q29udGVudCA9IGAke2dldFRpdGxlUHJlZml4KGhub2RlKX0ke2gudGV4dENvbnRlbnR9YDtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgIyR7aC5pZH1gKTtcblxuICAgICAgICBjb25zdCBtZW51ID0gYnVpbGRNZW51KGhub2RlLnBhcmVudCEuY2hpbGRyZW4pO1xuICAgICAgICBoX2h0bWwuYXBwZW5kKGxpbmssIG1lbnUpO1xuXG4gICAgICAgIHJldHVybiBoX2h0bWw7XG4gICAgfSk7XG5cbiAgICBpZiggbGFzdC5jaGlsZHJlbi5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgZW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgICAgICBlbXB0eS5hcHBlbmQoIGJ1aWxkTWVudShsYXN0LmNoaWxkcmVuKSApO1xuXG4gICAgICAgIGh0bWwucHVzaChlbXB0eSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlX3BhZ2VfaHJlZihwYXRocHJlZml4OiBzdHJpbmcsIHBhdGg6IHN0cmluZywgZGVzYzogYW55KSB7XG5cbiAgICAgICAgbGV0IGhyZWYgPSBgJHtwYXRocHJlZml4fSR7cGF0aH0vYDtcblxuICAgICAgICB3aGlsZShkZXNjLmNoaWxkcmVuPy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRlc2MgPSBkZXNjLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgaHJlZiArPSBgJHtkZXNjLnBhdGggPz8gZGVzY30vYDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBocmVmO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VfcGFnZV9tZW51KHBhdGhwcmVmaXg6IHN0cmluZywgcGF0aDogc3RyaW5nLCBwYWdlczogYW55KSB7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBwYWdlcy5maW5kKCAocGFnZTogYW55KSA9PiBwYWdlID09PSBwYXRoIHx8IHBhZ2UucGF0aCA9PT0gcGF0aCApITtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgbGluay50ZXh0Q29udGVudCA9IGRlc2Muc25hbWUgPz8gZGVzYy5uYW1lID8/IGRlc2M7XG4gICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIG1ha2VfcGFnZV9ocmVmKHBhdGhwcmVmaXgsIHBhdGgsIGRlc2MpICk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gICAgXG4gICAgICAgICAgICBtZW51LmFwcGVuZCggLi4uIHBhZ2VzLm1hcCggKHBhZ2U6YW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQ9IHBhZ2UubmFtZSA/PyBwYWdlO1xuICAgICAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBtYWtlX3BhZ2VfaHJlZihwYXRocHJlZml4LCBwYWdlLnBhdGg/P3BhZ2UsIHBhZ2UpICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9KSApO1xuICAgIFxuICAgICAgICAgICAgaHRtbC5hcHBlbmQobGluaywgbWVudSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gICAgXG4gICAgbGV0IGN1cnBhZ2UgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc2xpY2Uocm9vdF9wYXRoLmxlbmd0aCkuc3BsaXQoJy8nKTtcblxuICAgIGNvbnN0IG1vZHVsZV9odG1sID0gbWFrZV9wYWdlX21lbnUocm9vdF9wYXRoLCBjdXJwYWdlWzBdLCBwYWdlcyk7XG5cbiAgICBjb25zdCBkZXNjID0gcGFnZXMuZmluZCggKHBhZ2U6IGFueSkgPT4gcGFnZS5wYXRoID09PSBjdXJwYWdlWzBdICkhO1xuICAgIGNvbnN0IHR5cGVfaHRtbCAgID0gbWFrZV9wYWdlX21lbnUocm9vdF9wYXRoICsgY3VycGFnZVswXSArIFwiL1wiLCBjdXJwYWdlWzFdLCBkZXNjLmNoaWxkcmVuKTtcblxuICAgIGNvbnN0IGRlc2NfdHlwZSA9IGRlc2MuY2hpbGRyZW4uZmluZCggKHBhZ2U6IGFueSkgPT4gKHBhZ2U/LnBhdGggPz8gcGFnZSkgPT09IGN1cnBhZ2VbMV0gKSE7XG4gICAgaWYoIHR5cGVvZiBkZXNjX3R5cGUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgLy8gdGl0bGUgbnVtXG4gICAgICAgIGNvbnN0IGRlc2MyX2lkeCA9IGRlc2NfdHlwZS5jaGlsZHJlbi5maW5kSW5kZXgoIChwYWdlOiBhbnkpID0+IHBhZ2U/LnBhdGggPz8gcGFnZSA9PT0gY3VycGFnZVsyXSApITtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taGVhZGVyX3N0YXJ0X2lkXCIsIGAke2Rlc2MyX2lkeH1gKTtcbiAgICAgICAgLy8gbWVudVxuICAgICAgICBjb25zdCBzZXNzaW9uX2h0bWwgICA9IG1ha2VfcGFnZV9tZW51KHJvb3RfcGF0aCArIGN1cnBhZ2VbMF0gKyBcIi9cIisgY3VycGFnZVsxXSArIFwiL1wiLCBjdXJwYWdlWzJdLCBkZXNjX3R5cGUuY2hpbGRyZW4pO1xuICAgICAgICBodG1sWzBdID0gc2Vzc2lvbl9odG1sO1xuICAgIH1cblxuICAgIGhlYWRlci5yZXBsYWNlQ2hpbGRyZW4obW9kdWxlX2h0bWwsIHR5cGVfaHRtbCwgLi4uaHRtbCk7XG59XG5cbm1haW4uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlSGVhZGVyKTtcbnVwZGF0ZUhlYWRlcigpOyIsIi8vaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDk0MTQzL2NyZWF0aW5nLWEtbmV3LWRvbS1lbGVtZW50LWZyb20tYW4taHRtbC1zdHJpbmctdXNpbmctYnVpbHQtaW4tZG9tLW1ldGhvZHMtb3ItcHJvXG5leHBvcnQgZnVuY3Rpb24gc3RyMmh0bWw8VCBleHRlbmRzIEhUTUxFbGVtZW50PihodG1sOiBzdHJpbmcpOiBUIHtcbiAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIGh0bWwgPSBodG1sLnRyaW0oKTsgLy8gTmV2ZXIgcmV0dXJuIGEgdGV4dCBub2RlIG9mIHdoaXRlc3BhY2UgYXMgdGhlIHJlc3VsdFxuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQhIGFzIFQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHIyREYoaHRtbDogc3RyaW5nKTogRG9jdW1lbnRGcmFnbWVudCB7XG4gICAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICBodG1sID0gaHRtbC50cmltKCk7IC8vIE5ldmVyIHJldHVybiBhIHRleHQgbm9kZSBvZiB3aGl0ZXNwYWNlIGFzIHRoZSByZXN1bHRcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJ2YXIgd2VicGFja1F1ZXVlcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgcXVldWVzXCIpIDogXCJfX3dlYnBhY2tfcXVldWVzX19cIjtcbnZhciB3ZWJwYWNrRXhwb3J0cyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgZXhwb3J0c1wiKSA6IFwiX193ZWJwYWNrX2V4cG9ydHNfX1wiO1xudmFyIHdlYnBhY2tFcnJvciA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgZXJyb3JcIikgOiBcIl9fd2VicGFja19lcnJvcl9fXCI7XG52YXIgcmVzb2x2ZVF1ZXVlID0gKHF1ZXVlKSA9PiB7XG5cdGlmKHF1ZXVlICYmIHF1ZXVlLmQgPCAxKSB7XG5cdFx0cXVldWUuZCA9IDE7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0pKTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSA/IGZuLnIrKyA6IGZuKCkpKTtcblx0fVxufVxudmFyIHdyYXBEZXBzID0gKGRlcHMpID0+IChkZXBzLm1hcCgoZGVwKSA9PiB7XG5cdGlmKGRlcCAhPT0gbnVsbCAmJiB0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKSB7XG5cdFx0aWYoZGVwW3dlYnBhY2tRdWV1ZXNdKSByZXR1cm4gZGVwO1xuXHRcdGlmKGRlcC50aGVuKSB7XG5cdFx0XHR2YXIgcXVldWUgPSBbXTtcblx0XHRcdHF1ZXVlLmQgPSAwO1xuXHRcdFx0ZGVwLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFeHBvcnRzXSA9IHI7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9LCAoZSkgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0Vycm9yXSA9IGU7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9KTtcblx0XHRcdHZhciBvYmogPSB7fTtcblx0XHRcdG9ialt3ZWJwYWNrUXVldWVzXSA9IChmbikgPT4gKGZuKHF1ZXVlKSk7XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0fVxuXHR2YXIgcmV0ID0ge307XG5cdHJldFt3ZWJwYWNrUXVldWVzXSA9IHggPT4ge307XG5cdHJldFt3ZWJwYWNrRXhwb3J0c10gPSBkZXA7XG5cdHJldHVybiByZXQ7XG59KSk7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmEgPSAobW9kdWxlLCBib2R5LCBoYXNBd2FpdCkgPT4ge1xuXHR2YXIgcXVldWU7XG5cdGhhc0F3YWl0ICYmICgocXVldWUgPSBbXSkuZCA9IC0xKTtcblx0dmFyIGRlcFF1ZXVlcyA9IG5ldyBTZXQoKTtcblx0dmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcblx0dmFyIGN1cnJlbnREZXBzO1xuXHR2YXIgb3V0ZXJSZXNvbHZlO1xuXHR2YXIgcmVqZWN0O1xuXHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWopID0+IHtcblx0XHRyZWplY3QgPSByZWo7XG5cdFx0b3V0ZXJSZXNvbHZlID0gcmVzb2x2ZTtcblx0fSk7XG5cdHByb21pc2Vbd2VicGFja0V4cG9ydHNdID0gZXhwb3J0cztcblx0cHJvbWlzZVt3ZWJwYWNrUXVldWVzXSA9IChmbikgPT4gKHF1ZXVlICYmIGZuKHF1ZXVlKSwgZGVwUXVldWVzLmZvckVhY2goZm4pLCBwcm9taXNlW1wiY2F0Y2hcIl0oeCA9PiB7fSkpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IHByb21pc2U7XG5cdGJvZHkoKGRlcHMpID0+IHtcblx0XHRjdXJyZW50RGVwcyA9IHdyYXBEZXBzKGRlcHMpO1xuXHRcdHZhciBmbjtcblx0XHR2YXIgZ2V0UmVzdWx0ID0gKCkgPT4gKGN1cnJlbnREZXBzLm1hcCgoZCkgPT4ge1xuXHRcdFx0aWYoZFt3ZWJwYWNrRXJyb3JdKSB0aHJvdyBkW3dlYnBhY2tFcnJvcl07XG5cdFx0XHRyZXR1cm4gZFt3ZWJwYWNrRXhwb3J0c107XG5cdFx0fSkpXG5cdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdFx0Zm4gPSAoKSA9PiAocmVzb2x2ZShnZXRSZXN1bHQpKTtcblx0XHRcdGZuLnIgPSAwO1xuXHRcdFx0dmFyIGZuUXVldWUgPSAocSkgPT4gKHEgIT09IHF1ZXVlICYmICFkZXBRdWV1ZXMuaGFzKHEpICYmIChkZXBRdWV1ZXMuYWRkKHEpLCBxICYmICFxLmQgJiYgKGZuLnIrKywgcS5wdXNoKGZuKSkpKTtcblx0XHRcdGN1cnJlbnREZXBzLm1hcCgoZGVwKSA9PiAoZGVwW3dlYnBhY2tRdWV1ZXNdKGZuUXVldWUpKSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGZuLnIgPyBwcm9taXNlIDogZ2V0UmVzdWx0KCk7XG5cdH0sIChlcnIpID0+ICgoZXJyID8gcmVqZWN0KHByb21pc2Vbd2VicGFja0Vycm9yXSA9IGVycikgOiBvdXRlclJlc29sdmUoZXhwb3J0cykpLCByZXNvbHZlUXVldWUocXVldWUpKSk7XG5cdHF1ZXVlICYmIHF1ZXVlLmQgPCAwICYmIChxdWV1ZS5kID0gMCk7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnbW9kdWxlJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00yL2luZGV4LnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMi9pbmRleC5jc3NcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTIvaW5kZXgubWRcIik7XG4iLCIiXSwibmFtZXMiOlsiU2hhZG93Q2ZnIiwiX19jc3RyX2hvc3QiLCJDQU5fSEFWRV9TSEFET1ciLCJfY2FuSGFzU2hhZG93IiwidGFnIiwiaW5jbHVkZXMiLCJfZWxlbWVudDJ0YWduYW1lIiwiTElTUyIsImV4dGVuZHMiLCJwX2V4dGVuZHMiLCJob3N0IiwicF9ob3N0IiwiZGVwZW5kZW5jaWVzIiwicF9kZXBzIiwiYXR0cmlidXRlcyIsInBfYXR0cnMiLCJwYXJhbXMiLCJjb250ZW50IiwiY3NzIiwic2hhZG93IiwicF9zaGFkb3ciLCJIVE1MRWxlbWVudCIsIl9leHRlbmRzIiwiT2JqZWN0IiwiY2FuSGFzU2hhZG93IiwiRXJyb3IiLCJ1bmRlZmluZWQiLCJwdXNoIiwiSFRNTFRlbXBsYXRlRWxlbWVudCIsImlubmVySFRNTCIsInRyaW0iLCJSZXNwb25zZSIsInRleHQiLCJMSVNTQmFzZSIsIlBhcmFtZXRlcnMiLCJzdHlsZXNoZWV0cyIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImZldGNoX2NzcyIsIkNTU1N0eWxlU2hlZXQiLCJIVE1MU3R5bGVFbGVtZW50Iiwic2hlZXQiLCJzdHlsZSIsInJlcGxhY2UiLCJtYXAiLCJpZHgiLCJjb25zdHJ1Y3RvciIsImF0dHJzIiwic2V0QXR0ckRlZmF1bHQiLCJhdHRyIiwidmFsdWUiLCJvbkF0dHJDaGFuZ2VkIiwiX25hbWUiLCJfb2xkVmFsdWUiLCJfbmV3VmFsdWUiLCJpc0luRE9NIiwib25ET01Db25uZWN0ZWQiLCJvbkRPTURpc2Nvbm5lY3RlZCIsImV4dGVuZHNMSVNTIiwiTGlzcyIsInBhcmFtZXRlcnMiLCJhc3NpZ24iLCJFeHRlbmRlZExJU1MiLCJ0IiwiaWQiLCJidWlsZExJU1NIb3N0IiwiX3BhcmFtcyIsImFscmVhZHlEZWNsYXJlZENTUyIsIlNldCIsIkdFVCIsIlN5bWJvbCIsIlNFVCIsInByb3BlcnRpZXMiLCJmcm9tRW50cmllcyIsIm4iLCJlbnVtZXJhYmxlIiwiZ2V0Iiwic2V0IiwiQXR0cmlidXRlcyIsIm5hbWUiLCJkYXRhIiwiZGVmYXVsdHMiLCJzZXR0ZXIiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiTElTU0hvc3RCYXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJpc0luaXQiLCJpbml0aWFsaXplIiwiYXBpIiwiaW5pdCIsIkxJU1NTeW5jIiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCJjb25uZWN0ZWRDYWxsYmFjayIsImN1c3RvbUVsZW1lbnRzIiwidXBncmFkZSIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwib25DbGlja0V2ZW50Iiwib2JzIiwiZ2V0QXR0cmlidXRlIiwiYWRvcHRlZFN0eWxlU2hlZXRzIiwic2hhcmVkQ1NTIiwiY3Nzc2VsZWN0b3IiLCJDU1NTZWxlY3RvciIsImhhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImh0bWxfc3R5bGVzaGVldHMiLCJydWxlIiwiY3NzUnVsZXMiLCJjc3NUZXh0IiwiaGVhZCIsImFwcGVuZCIsImFkZCIsInRlbXBsYXRlX2VsZW0iLCJzdHIiLCJfIiwibWF0Y2giLCJjaGlsZE5vZGVzIiwib2JqIiwiaGFzU2hhZG93IiwiZ2V0UGFydCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRQYXJ0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0YWdOYW1lIiwicmVtb3ZlQXR0cmlidXRlIiwib2JzZXJ2ZWRBdHRyaWJ1dGVzIiwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIiwib2xkVmFsdWUiLCJuZXdWYWx1ZSIsIl9ET01Db250ZW50TG9hZGVkIiwicmVhZHlTdGF0ZSIsImRlZmluZSIsInRhZ25hbWUiLCJDb21wb25lbnRDbGFzcyIsIkNsYXNzIiwiaHRtbHRhZyIsImFsbCIsIkxJU1NjbGFzcyIsIm9wdHMiLCJpbnNlcnRHbG9iYWxDU1NSdWxlcyIsImNzc19zdHlsZSIsInJlcGxhY2VTeW5jIiwiaW5zZXJ0UnVsZSIsIkRFTEVHQVRFRF9FVkVOVFMiLCJBTFJFQURZX1BST0NFU1NFRCIsImV2IiwiaGFuZGxlcnMiLCJ0eXBlIiwiZWxlbSIsImNvbXBvc2VkUGF0aCIsIlNoYWRvd1Jvb3QiLCJ3aW5kb3ciLCJ0YXJnZXQiLCJzZWxlY3RvciIsImhhbmRsZXIiLCJtYXRjaGVzIiwiaW5zZXJ0R2xvYmFsRGVsZWdhdGVkTGlzdGVuZXIiLCJldmVudF9uYW1lIiwiY2xvc2VzdCIsImVsZW1lbnQiLCJyZXN1bHQiLCJyb290IiwiZ2V0Um9vdE5vZGUiLCJidWlsZCIsInBhcmVudCIsImNsYXNzZXMiLCJjc3N2YXJzIiwibGlzdGVuZXJzIiwiQ3VzdG9tQ2xhc3MiLCJ3aGVuRGVmaW5lZCIsInRvTG93ZXJDYXNlIiwiY2xhc3NMaXN0Iiwic2V0UHJvcGVydHkiLCJ0b2dnbGVBdHRyaWJ1dGUiLCJkYXRhc2V0IiwicmVwbGFjZUNoaWxkcmVuIiwiZ2V0TElTUyIsImNhbGxiYWNrIiwid2hlbkFsbERlZmluZWQiLCJ0YWduYW1lcyIsImlzRGVmaW5lZCIsImdldE5hbWUiLCJnZXRMSVNTU3luYyIsIl9idWlsZFFTIiwidGFnbmFtZV9vcl9wYXJlbnQiLCJxcyIsInFzbyIsInFzYSIsImVsZW1lbnRzIiwicHJvbWlzZXMiLCJxc2MiLCJyZXMiLCJxc1N5bmMiLCJxc2FTeW5jIiwicXNjU3luYyIsIkxJU1NfQXV0byIsIm5hdmlnYXRvciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsImNvbnRyb2xsZXIiLCJzcmMiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm11dGF0aW9uIiwiYWRkaXRpb24iLCJhZGRlZE5vZGVzIiwiRWxlbWVudCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwicmVzb3VyY2VzIiwiZGVmaW5lV2ViQ29tcG9uZW50IiwiZmlsZXMiLCJqcyIsImtsYXNzIiwiV2ViQ29tcG9uZW50IiwiZmlsZW5hbWVzIiwiZmlsZSIsImVuZHNXaXRoIiwiX2ltcG9ydCIsIl9mZXRjaFRleHQiLCJpIiwiQ3N0bUV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJhcmdzIiwiZGV0YWlsIiwiZmV0Y2hSZXNvdXJjZSIsInJlc291cmNlIiwiZmV0Y2giLCJ1cmkiLCJpc0xpc3NBdXRvIiwib3B0aW9ucyIsImhlYWRlcnMiLCJyZXNwb25zZSIsInN0YXR1cyIsImRlZmF1bHQiLCJlIiwiY29uc29sZSIsImxvZyIsIkhUTUxDTEFTU19SRUdFWCIsImVsZW1lbnROYW1lTG9va3VwVGFibGUiLCJleGVjIiwiRm9ybWF0cyIsInNoZWV0X2Zvcm1hdF9jb250ZW50IiwiZ2V0Q2VsbHMiLCJmb3JtYXQiLCJmb250X3NpemUiLCJmb3JlZ3JvdW5kX2NvbG9yIiwiYmFja2dyb3VuZF9jb2xvciIsInNoZWV0X3Rvb2xiYXJfZm9ybWF0X2NvbnRlbnQiLCJzeW5jVG8iLCJkaXNhYmxlQWxsRXhjZXB0Iiwic2hlZXRfYWxpZ24iLCJzaGVldF90b29sYmFyX2FsaWduIiwiZXVyb3MiLCJwb3VyY2VudCIsIm51bWJlciIsImRhdGUiLCJwcmVjaXNpb24iLCJzaGVldF90b29sYmFyIiwiYm9yZGVyX3RvcCIsImJvcmRlcl9ib3R0b20iLCJib3JkZXJfbGVmdCIsImJvcmRlcl9yaWdodCIsImJvcmRlcl9jb2xvciIsImluZGVudCIsInNwYW4iLCJhbGlnbl9jZW50ZXIiLCJ2YWxpZ25fbWlkZGxlIiwic3RyMmh0bWwiLCJSYW5nZU92ZXJsYXkiLCJFdmVudFRhcmdldCIsIm92ZXJsYXkiLCJjbGFzc2xpc3QiLCJ1cGRhdGUiLCJzZXRSYW5nZSIsInJhbmdlIiwicGxhZ2VfbmFtZSIsImdldFJlY3QiLCJyZWN0IiwidG9nZ2xlIiwiZ2V0UmFuZ2UiLCJzZXRSZWN0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkZvcm11bGFSZWYiLCJzZXRDb2xvciIsImNvbG9yX2lkIiwicmVtb3ZlIiwiUmVjb3B5SGFuZGxlIiwieCIsInkiLCJ3IiwiaCIsIkZvcm11bGEiLCJDYWxjU2hlZXQiLCJDZWxsTGlzdCIsIkZvcm1hdE1hbmFnZXIiLCJjdHJsS2V5IiwiY2hhbmdlZCIsImtleSIsInNlbGVjdGlvbiIsInRvZ2dsZUZvcm1hdCIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJkaXNwYXRjaEV2ZW50IiwiZmxvYXQyRGF0ZSIsImZsb2F0IiwiRGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwiZGF0ZTJGbG9hdCIsImJlZyIsImdldFRpbWUiLCJ0b0ZpeGVkIiwicmF3Q29udGVudCIsInByZWMiLCJ0b1ByZWNpc2lvbiIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInRvU3RyaW5nIiwiZ2V0U2hlZXRGcm9tQ2VsbCIsInRvTG9jYWxlU3RyaW5nIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwic2xpY2UiLCJGb3JtYXQiLCJhcHBseVRvIiwiY2VsbCIsImMiLCJjZWxscyIsInZhbCIsInRleHRDb250ZW50IiwiciIsImoiLCJyZWxhdGl2ZVRvIiwic3RhcnRzV2l0aCIsImdldFByb3BlcnR5IiwiaGFzUHJvcGVydHkiLCJleHRyYWN0Rm9ybWF0IiwiZjIiLCJ2YWx1ZXMiLCJpdGVtIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImNvbHNwYW4iLCJyb3dzcGFuIiwiaGFzQXR0cmlidXRlIiwiQ2FsY0Zvcm11bGEiLCJzdGF0ZXMiLCJjZWxsX2VkaXQiLCJzdGF0ZSIsImNhbGwiLCJjdXJzb3IiLCJmaXJzdENlbGwiLCJpc1JPIiwicmFuZ2VzX3Rva2VuIiwiZHJvdyIsImRjb2wiLCJuZXdfcmFuZ2VzIiwicG9zIiwiY2VsbFBvcyIsImxhc3RJbmRleE9mIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwibmV3X2Zvcm11bGEiLCJvZmZzZXQiLCJlbmQiLCJwYXJzZV9mb3JtdWxhIiwicmFuZ2VzVG9rZW4iLCJleHRyYWN0VG9rZW4iLCJ0b2tlbiIsImhhc0NvbW1hIiwiTm9kZSIsImNoaWxkcmVuIiwiZmN0IiwiZXZhbCIsInRvTnVtYmVyIiwiYSIsIm9wX2ltcGwiLCJiIiwiTWF0aCIsInBvdyIsIm9wX3ByaW8iLCJvcHMiLCJvcCIsInRva2VubGlzdDJUcmVlIiwidG9rZW5zIiwibmIiLCJyYXciLCJjdXIiLCJwcmlvcml0eSIsImZpbmRJbmRleCIsInVfb3AiLCJvcF90b2tlbiIsImxlZnQiLCJyaWdodCIsImN1clRva2VuIiwibm9kZSIsInJhbmdlcyIsImZpbHRlciIsIlBsYWdlRm9ybXVsYSIsImNvZGUiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJzZWxlY3RlZCIsImNsZWFyIiwiYmx1ciIsIlBsYWdlU2VsZWN0b3IiLCJzZWxlY3RlZF9jZWxscyIsImNvbHMiLCJ0Ym9keSIsImNvbF9pZCIsImNsaWVudFgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyb3dzIiwicm93X2lkIiwiY2xpZW50WSIsIm1haW4iLCJvbl9tb3VzZV9tb3ZlIiwicmVwbGFjZUFsbCIsImdldFZpc2libGVDZWxsIiwicmVmIiwicG9zMnJlZiIsIm5iUm93cyIsIm5iQ29scyIsIm9uY2UiLCJpc0FjdGl2ZSIsIm9uSW5wdXQiLCJycmFuZ2UiLCJnZXRTZWxlY3Rpb24iLCJnZXRSYW5nZUF0Iiwic3RhcnRPZmZzZXQiLCJjaGlsZCIsIm5vZGVUeXBlIiwiVEVYVF9OT0RFIiwic3RhcnRDb250YWluZXIiLCJjcmVhdGVSYW5nZSIsInNlbCIsInNldFN0YXJ0IiwiY29sbGFwc2UiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsInBhcnNlSW5wdXQiLCJ0ZXN0X251bWJlciIsIk51bWJlciIsImlzTmFOIiwicGFydHMiLCJzcGxpdCIsInRlc3RfZGF0ZSIsImdldEZ1bGxZZWFyIiwiU3RhdGUiLCJwcmV2X3N0YXRlIiwiU3RhdGVzIiwiZW50cmllcyIsInMiLCJ0Ymxfb2Zmc2V0Iiwib2Zmc2V0VG9wIiwic3RhcnQiLCJvZmZzZXRMZWZ0IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJyb3dfZGlmZiIsImNvbF9kaWZmIiwicm93IiwiY29sIiwicmVjb3B5IiwiY29weSIsImxhc3RfcmVjb3B5X3RhcmdldCIsImxhc3RfcmVjb3B5X2RpciIsIm9uX3JlY29weV9tb3ZlIiwiZF9weCIsIndpZHRoIiwiZF9weSIsImhlaWdodCIsImRfeCIsImRfeSIsInNpZ24iLCJhYnMiLCJwcmV2IiwiZGlmZl94IiwiZGlmZl95IiwicG9zX2N1ciIsImNsYXNzTmFtZSIsImZvcm11bGFfYmFyIiwicGxhZ2UiLCJmb3JtdWxhIiwicm8iLCJpc19ybyIsImZvY3VzIiwiZF9yb3ciLCJkX2NvbCIsIm5leHQiLCJhbHRLZXkiLCJkc3QiLCJkZWVwQ2xvbmUiLCJkZWxldGVGb3JtYXQiLCJkZWxldGVDb250ZW50IiwiYnViYmxlcyIsIm9uSW5wdXQyIiwicmFuZ2VzX2NvbG9ycyIsImN1cl9vZmZzZXQiLCJyYW5nZV9uYW1lIiwicmFuZ2VzX25hbWVzIiwia2V5cyIsIndhcm4iLCJwYXJlbnRFbGVtZW50IiwicmVzaXplIiwibmJyb3dzIiwibmJjb2xzIiwiY29sX2h0bWwiLCJ0aCIsInJvd19odG1sIiwidGFibGUiLCJyZXNpemVPYnMiLCJSZXNpemVPYnNlcnZlciIsImZyb20iLCJ0byIsIkhUTUxUYWJsZUNlbGxFbGVtZW50IiwicmVmMnBvcyIsImJlZ19yb3ciLCJiZWdfY29sIiwiZW5kX3JvdyIsImVuZF9jb2wiLCJjZWxsX29yX3Jvd2lkIiwiYl9yb3dfaWQiLCJiX2NvbF9pZCIsImNoYXJDb2RlQXQiLCJlX3Jvd19pZCIsImVfY29sX2lkIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzb3J0IiwibWluIiwibWF4IiwibmJfY29scyIsImZsb29yIiwiZiIsImlzRm9ybWF0IiwicmF3X3ZhbCIsInYiLCJkaWZmIiwic2V0Uk8iLCJjbG9uZSIsImNsb25lTm9kZSIsIm1lcmdlIiwiY2VsbGxpc3QiLCJpc19hbGlnbiIsInVubWVyZ2UiLCJyZXRyYWl0IiwiZGVsdGFfaW5kZW50IiwibmV3X2Zvcm1hdCIsImFsaWduX2xlZnQiLCJkZWx0YV9wcmVjIiwiZmN0cyIsImFjdGlvbiIsImVuYWJsZWQiLCJ1bm1lcmdlZCIsIml0ZW1jc3MiLCJDYWxjVG9vbGJhckl0ZW0iLCJjb2xvcl9waWNrZXIiLCJjYW5jZWwiLCJib2R5IiwiY2xpY2siLCJDYWxjVG9vbGJhciIsImV4Y2VwdGlvbiIsImJ0bl9uYW1lIiwiZm9udF9zaXplcyIsImJ0bnMiLCJidG4iLCJmb250X3NpemVzX3NlbGVjdCIsIm9wdGlvbiIsIk9wdGlvbiIsInNuYW1lIiwicGF0aCIsInJvb3RfcGF0aCIsImhvc3RuYW1lIiwicGFnZXMiLCJoZWFkZXIiLCJ0aXRsZXMiLCJodHJlZSIsImh0bWwiLCJsZXZlbCIsImh0cmVlX2N1cnNvciIsInRpdGxlIiwic2VhcmNoQ3VySGVhZGVyIiwicG9zaXRpb24iLCJoaWQiLCJnZXRUaXRsZVByZWZpeCIsImluZGV4T2YiLCJudW0iLCJidWlsZE1lbnUiLCJub2RlcyIsIm1lbnUiLCJ1cGRhdGVIZWFkZXIiLCJsYXN0Iiwic2Nyb2xsVG9wIiwicmV2ZXJzZSIsImhub2RlIiwiaF9odG1sIiwibGluayIsImVtcHR5IiwibWFrZV9wYWdlX2hyZWYiLCJwYXRocHJlZml4IiwiZGVzYyIsImhyZWYiLCJtYWtlX3BhZ2VfbWVudSIsImZpbmQiLCJwYWdlIiwiY3VycGFnZSIsIm1vZHVsZV9odG1sIiwidHlwZV9odG1sIiwiZGVzY190eXBlIiwiZGVzYzJfaWR4Iiwic2Vzc2lvbl9odG1sIiwidGVtcGxhdGUiLCJzdHIyREYiXSwic291cmNlUm9vdCI6IiJ9