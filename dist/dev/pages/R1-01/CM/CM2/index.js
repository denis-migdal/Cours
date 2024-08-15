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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host table {\n    border-collapse: collapse;\n    border-top-color: transparent;\n\n    & > tbody {\n        outline: 0px solid transparent;\n    }\n\n    & > tbody > tr:first-child {\n        border-top-color: transparent;\n        \n        & > th {\n            border-top-color: transparent;\n        }\n    }\n}\n\n:host :is(tr,th,td) {\n    border:1px solid #c0c0c0;\n }\n\n:host tr {\n    height: 0.45cm;\n    line-height: 0.45cm;\n}\n\n\n:host :is(td, th):not([contenteditable]) {\n    user-select: none;\n}\n/*\n:host td[contenteditable] {\n    user-select: text;\n}*/\n\n:host :is(td, th) {\n    color: black;\n    width: 2.26cm;\n    height: 0.45cm;\n\n    font-size: 10pt;\n\n    box-sizing: border-box;\n    font-family: 'Liberation Sans';\n}\n\n:host tr > th:first-child {\n    width: calc( 2.26cm / 2.5) ;\n}\n\n:host {\n    display: inline-flex;\n    flex-direction: column;\n}\n\n:host div.toolbar {\n    background-color: #cecece;\n    display: flex;\n    gap: 5px;\n    padding: 4px;\n\n    & > *:not(:first-child) {\n        flex: 1 1 0;\n    }\n    & > *:first-child {\n        width: calc( 1.5 * 2.26cm );\n    }\n}\n\n:host th {\n    background-color: #cecece;\n    border-color: #8a8a8a;\n    font-weight: normal;\n\n    &.highlight {\n        background-color: #398ee7;\n        color: white;\n    }\n}\n\n:host(.cell_edit) .cursor {\n    display: none;\n}\n\n:host(.recopy) {\n    cursor: cell;\n}\n\n:host {\n\n    .recopy {\n        position: absolute;\n        padding: 0;\n        box-sizing: border-box;\n        cursor: cell;\n        background-color: #398ee7;\n\n    }\n\n    .cursor {\n        position: absolute;\n        padding: 0;\n        box-sizing: border-box;\n        background: none;\n        border: 2px solid #398ee7;\n        pointer-events: none;\n    }\n}\n\n:host td {\n\n    --font_size: 10pt;\n    font-size: var(--font_size);\n    line-height: calc( var(--font_size) * 1.2 );\n\n    --indent: 0;\n\n    --border_color: black;\n    --background_color: white;\n    --foreground_color: black;\n    background-color: var(--background_color);\n    color           : var(--foreground_color);\n\n    white-space: pre;\n\n    vertical-align: bottom;\n\n    &:is([data-type=\"number\"],[data-type=\"date\"], [data-type=\"boolean\"]) {\n        text-align: right;\n    }\n\n    &[contenteditable] {\n        outline: 0px solid transparent;\n    }\n\n    &.hidden {\n        display: none;\n    }\n\n    &.ajuster {\n        word-break: break-all;\n        white-space: normal;\n    }\n\n    &.highlight {\n        background-color: #cde3f9;\n    }\n\n    /** style **/\n    &.italic {\n        font-style: italic;\n    }\n    &.bold {\n        font-weight: bold;\n    }\n    &.underline {\n        text-decoration: underline;\n    }\n    &.align_left {\n        padding-left: calc( var(--indent) * 10px);\n        text-align: left;\n    }\n    &.align_center {\n        text-align: center;\n    }\n    &.align_right {\n        padding-right: calc( var(--indent) * 10px);\n        text-align: right;\n    }\n    &.valign_top {\n        vertical-align: top;\n    }\n    &.valign_middle {\n        vertical-align: middle;\n    }\n    &.valign_bottom {\n        vertical-align: bottom;\n    }\n    /* https://stackoverflow.com/questions/1241757/applying-borders-to-a-single-table-cell-when-using-border-collapse */\n    &.border_top {\n        border-top: 1px double var(--border_color);\n    }\n    &.border_bottom {\n        border-bottom: 1px double var(--border_color);\n    }\n    &.border_left {\n        border-left: 1px double var(--border_color);\n    }\n    &.border_right {\n        border-right: 1px double var(--border_color);\n    }\n}\n\n:host {\n    position: relative;\n}\n\n:host .range_highlight {\n    position: absolute;\n    padding: 0;\n    box-sizing: border-box;\n\n    background: none;\n    border: 2px solid red;\n\n    border-color: var(--highlight_color);\n}\n\n:host .formula_highlight {\n    color: var(--highlight_color);\n}\n\n:host .highlight_0 {\n    --highlight_color: #fa0c0c;\n}\n\n:host .highlight_1 {\n    --highlight_color: #fa0cfa;\n}\n\n:host .highlight_2 {\n    --highlight_color: #0c840c;\n}\n\n:host .highlight_3 {\n    --highlight_color: #010180;\n}\n\n:host .highlight_4 {\n    --highlight_color: #871717;\n}\n\n:host .highlight_5 {\n    --highlight_color: #871787;\n}\n\n:host .highlight_6 {\n    --highlight_color: #84840c;\n}\n\n:host .highlight_7 {\n    --highlight_color: #0c0cfa;\n}\n\n\n.copy_highlight {\n    position: absolute;\n    border: 1px dashed black;\n    background: none;\n    pointer-events: none;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* Tomorrow Theme */\n/* http://jmblog.github.com/color-themes-for-google-code-highlightjs */\n/* Original theme - https://github.com/chriskempson/tomorrow-theme */\n\n/* Tomorrow Comment */\n.hljs-comment,\n.hljs-quote {\n\tcolor: #8e908c;\n}\n\n/* Tomorrow Red */\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-regexp,\n.hljs-deletion {\n\tcolor: #c82829;\n}\n\n/* Tomorrow Orange */\n.hljs-number,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-literal,\n.hljs-type,\n.hljs-params,\n.hljs-meta,\n.hljs-link {\n\tcolor: #f5871f;\n}\n\n/* Tomorrow Yellow */\n.hljs-attribute {\n\tcolor: #eab700;\n}\n\n/* Tomorrow Green */\n.hljs-string,\n.hljs-symbol,\n.hljs-bullet,\n.hljs-addition {\n\tcolor: #718c00;\n}\n\n/* Tomorrow Blue */\n.hljs-title,\n.hljs-section {\n\tcolor: #4271ae;\n}\n\n/* Tomorrow Purple */\n.hljs-keyword,\n.hljs-selector-tag {\n\tcolor: #8959a8;\n}\n\n.hljs {\n\tdisplay: block;\n\toverflow-x: auto;\n\tcolor: #4d4d4c;\n\tpadding: 0.5em;\n}\n\n.hljs-emphasis {\n\tfont-style: italic;\n}\n\n.hljs-strong {\n\tfont-weight: bold;\n}");

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
function LISS({ extends: p_extends, host: p_host, dependancies: p_deps, attributes: p_attrs, params, content, css, shadow: p_shadow } = {}) {
    //TODO merge prop if extends LISS...
    const host = p_host ?? HTMLElement;
    const _extends = p_extends ?? Object;
    const attributes = p_attrs ?? [];
    const dependancies = p_deps ? [
        ...p_deps
    ] : [];
    const canHasShadow = _canHasShadow(host);
    const shadow = p_shadow ?? (canHasShadow ? "closed" : "none");
    if (!canHasShadow && shadow !== "none") throw new Error(`Host element ${_element2tagname(host)} does not support ShadowRoot`);
    // CONTENT processing
    if (content !== undefined) {
        dependancies.push((async ()=>{
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
        dependancies.push(...css.map(async (css, idx)=>stylesheets[idx] = await fetch_css(css)));
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
            dependancies,
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
LISS.define = async function(tagname, ComponentClass, { dependancies, params } = {}) {
    dependancies ??= [];
    params ??= {};
    const Class = ComponentClass.Parameters.host;
    let LISSBase = ComponentClass;
    let htmltag = _element2tagname(Class) ?? undefined;
    await Promise.all([
        _DOMContentLoaded,
        ...dependancies,
        ...LISSBase.Parameters.dependancies
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
/* harmony import */ var _libs_LISS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/LISS */ "./libs/LISS/index.ts");
/* harmony import */ var _struct_menu_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../struct/menu.ts */ "./src/struct/menu.ts");
/* harmony import */ var _struct_calc_sheet_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../struct/calc/sheet.ts */ "./src/struct/calc/sheet.ts");
/* harmony import */ var _struct_calc_toolbar_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../struct/calc/toolbar.ts */ "./src/struct/calc/toolbar.ts");




const sheet_format_content = await _libs_LISS__WEBPACK_IMPORTED_MODULE_0__["default"].qs('#sheet_format_content');
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
const sheet_toolbar_format_content = await _libs_LISS__WEBPACK_IMPORTED_MODULE_0__["default"].qs('#sheet_toolbar_format_content');
sheet_toolbar_format_content.syncTo(sheet_format_content);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

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
            this.#sheet.cursor.content = this.#input.textContent;
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
/* harmony import */ var _formula_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formula_editor */ "./src/struct/calc/formula_editor.ts");
/* harmony import */ var _plage_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plage_editor */ "./src/struct/calc/plage_editor.ts");
/* harmony import */ var _formula_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formula_parser */ "./src/struct/calc/formula_parser.ts");
/* harmony import */ var _plage_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plage_selector */ "./src/struct/calc/plage_selector.ts");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./format */ "./src/struct/calc/format.ts");
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
    /*
    if( ! isActive(target) ) {
        target.innerHTML = highlight(target.textContent!);
        return;
    }*/ // https://stackoverflow.com/questions/21234741/place-caret-back-where-it-was-after-changing-innerhtml-of-a-contenteditable-elem
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
    //target.innerHTML = highlight(target.textContent!);
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
    if (str === '') return str;
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
        console.warn("state", this.#state, state);
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
    #plage_selector = new _plage_selector__WEBPACK_IMPORTED_MODULE_3__.PlageSelector(this);
    //TODO: RO prop ?
    #selection = new CellList(this, []);
    #cursor = new CellList(this, []);
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
    removeHighlights() {
        for (let h of this.content.querySelectorAll('.range_highlight'))h.remove();
    }
    removeCopyHighlight() {
        for (let h of this.content.querySelectorAll('.copy_highlight'))h.remove();
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
    highlight(start, end, id_or_classlist) {
        const high = document.createElement('div');
        if (typeof id_or_classlist === "number") high.classList.add('range_highlight', `highlight_${id_or_classlist}`);
        else high.classList.add(...id_or_classlist);
        this.setRect(high, this.getRect([
            start,
            end
        ]));
        this.content.append(high);
        return high;
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
    constructor(){
        super();
        const cursor = document.createElement('div');
        cursor.classList.add("cursor");
        this.content.append(cursor);
        const recopy = document.createElement('div');
        recopy.classList.add("recopy");
        this.content.append(recopy);
        const main = document.querySelector("main");
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
            this.removeHighlights(); //TODO...
            this.highlight(beg, end, 1); //TODO class...
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
                            console.warn("is date", nb, d_x + d_y);
                            content = new Date(src.rawContent);
                            content.setDate(content.getDate() + nb * (d_x + d_y));
                        }
                        new CellList(this, [
                            cur
                        ]).content = content;
                        cur.className = src.className; //TODO: format...
                    }while (cur !== last_recopy_target)
                }
                this.removeHighlights(); //TODO...
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
            const cells = this.#cursor.cells;
            if (cells.length === 0) return;
            this.setRect(cursor, this.getRect(cells));
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
            const [x, y, w, h] = this.getRect(cells);
            this.setRect(recopy, [
                x + w - 2,
                y + h - 2,
                5,
                5
            ]);
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
        this.content.addEventListener('click', (ev)=>{
            const target = ev.target;
            this.removeHighlights(); //TODO: move...
            // the cell is being edited...
            if (target.hasAttribute('contenteditable')) return;
            if (target.tagName === "TD") {
                let cell = target;
                if ("cell" in cell) cell = cell.cell;
                //TODO: move...
                this.#cursor.clear();
                this.#cursor.add(cell);
            }
            if (target.tagName === "TH" && target.textContent !== "") {
                const cell = this.getCells(target.textContent).cells[0];
                this.#cursor.clear();
                this.#cursor.add(cell);
            }
        // this.#tbody.focus(); // ?
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
                    let selection = this.#selection.cells; //TODO: as array...
                    let h = this.highlight(selection[0], selection[selection.length - 1], [
                        'copy_highlight'
                    ]);
                    // WHY ???
                    h.style.setProperty('top', `${selection[0].offsetTop}px`);
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
                    next.click();
                //next.dispatchEvent( new CustomEvent('click', {bubbles: true}) );
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
                this.removeHighlights();
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
                next.click();
                //next.dispatchEvent( new CustomEvent('click', {bubbles: true}) );
                //target.blur();
                return;
            }
        });
        const onInput2 = (ev)=>{
            this.removeHighlights();
            // @ts-ignore
            if (ev.detail !== true) onInput(ev);
        };
        //TODO: here...
        this.content.addEventListener('focusin', (ev)=>{
            const target = ev.target;
            this.removeCopyHighlight(); // TODO: move to cell_edit_end ?
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
                for(let range in ranges_colors){
                    const cell = this.getCells(range).cells;
                    let beg = cell[0];
                    let end = cell[cell.length - 1];
                    this.highlight(beg, end, ranges_colors[range]);
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
            new CellList(this, [
                cell
            ]).content = cell.textContent;
            this.update();
            // leave
            this.#selection.clear();
            this.#cursor.clear();
        });
        this.content.addEventListener("focusout", (ev)=>{
            const target = ev.target;
            this.removeHighlights(); // TODO: only cell_edit ??
            if (target.tagName !== "TD") return;
            this.states.cell_edit.state = null;
        });
        let t = this.#tbody.querySelectorAll('td');
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
    #initGrid(nbrows, nbcols) {
        const is_ro = this.attrs.ro === "true";
        const table = document.createElement('table');
        const tbody = document.createElement('tbody');
        this.#tbody = tbody;
        this.#tbody.setAttribute('tabindex', '0');
        const col_html = document.createElement('tr');
        col_html.append(document.createElement('th'));
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
        table.append(tbody);
        this.content.append(table);
    }
    getRange(from, to = from) {
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
    has(...cells) {
        for (let cell of cells)if (!this.#cells.includes(cell)) return false;
        return true;
    }
    remove(...cells) {
        this.#cells = this.#cells.filter((c)=>!cells.includes(c));
        this.dispatchEvent(new CustomEvent("change"));
    }
    add(...cells) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ3RHO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsR0FBRztVQUNIO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxHQUFHO1VBQ0g7VUFDQSxFQUFFO1VBQ0Y7VUFDQTs7Ozs7VUNoRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQSx5Q0FBeUMsd0NBQXdDO1VBQ2pGO1VBQ0E7VUFDQTs7Ozs7VUNQQTs7Ozs7VUNBQTtVQUNBO1VBQ0E7VUFDQSx1REFBdUQsaUJBQWlCO1VBQ3hFO1VBQ0EsZ0RBQWdELGFBQWE7VUFDN0Q7Ozs7O1VDTkE7Ozs7O1NFQUE7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00yL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTIvaW5kZXgubWQiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvaW5kZXguY3NzIiwid2VicGFjazovL0NvdXJzLy4vbGlicy9MSVNTL2luZGV4LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMi9pbmRleC50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9mb3JtYXQudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvZm9ybXVsYV9lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvZm9ybXVsYV9wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvcGxhZ2VfZWRpdG9yLnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL3BsYWdlX3NlbGVjdG9yLnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL3NoZWV0LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3N0cnVjdC9jYWxjL3Rvb2xiYXIudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L21lbnUudHMiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL2FzeW5jIG1vZHVsZSIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicGFnZXMvUjEtMDEvQ00vQ00yL2luZGV4Lmh0bWxcIjsiLCJleHBvcnQgZGVmYXVsdCBcIjpob3N0IHRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICAgICYgPiB0Ym9keSB7XFxuICAgICAgICBvdXRsaW5lOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgJiA+IHRib2R5ID4gdHI6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBcXG4gICAgICAgICYgPiB0aCB7XFxuICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuOmhvc3QgOmlzKHRyLHRoLHRkKSB7XFxuICAgIGJvcmRlcjoxcHggc29saWQgI2MwYzBjMDtcXG4gfVxcblxcbjpob3N0IHRyIHtcXG4gICAgaGVpZ2h0OiAwLjQ1Y207XFxuICAgIGxpbmUtaGVpZ2h0OiAwLjQ1Y207XFxufVxcblxcblxcbjpob3N0IDppcyh0ZCwgdGgpOm5vdChbY29udGVudGVkaXRhYmxlXSkge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLypcXG46aG9zdCB0ZFtjb250ZW50ZWRpdGFibGVdIHtcXG4gICAgdXNlci1zZWxlY3Q6IHRleHQ7XFxufSovXFxuXFxuOmhvc3QgOmlzKHRkLCB0aCkge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiAyLjI2Y207XFxuICAgIGhlaWdodDogMC40NWNtO1xcblxcbiAgICBmb250LXNpemU6IDEwcHQ7XFxuXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGliZXJhdGlvbiBTYW5zJztcXG59XFxuXFxuOmhvc3QgdHIgPiB0aDpmaXJzdC1jaGlsZCB7XFxuICAgIHdpZHRoOiBjYWxjKCAyLjI2Y20gLyAyLjUpIDtcXG59XFxuXFxuOmhvc3Qge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuOmhvc3QgZGl2LnRvb2xiYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgcGFkZGluZzogNHB4O1xcblxcbiAgICAmID4gKjpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICAgICAgICBmbGV4OiAxIDEgMDtcXG4gICAgfVxcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICB3aWR0aDogY2FsYyggMS41ICogMi4yNmNtICk7XFxuICAgIH1cXG59XFxuXFxuOmhvc3QgdGgge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xcbiAgICBib3JkZXItY29sb3I6ICM4YThhOGE7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuXFxuICAgICYuaGlnaGxpZ2h0IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzOThlZTc7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgIH1cXG59XFxuXFxuOmhvc3QoLmNlbGxfZWRpdCkgLmN1cnNvciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbjpob3N0KC5yZWNvcHkpIHtcXG4gICAgY3Vyc29yOiBjZWxsO1xcbn1cXG5cXG46aG9zdCB7XFxuXFxuICAgIC5yZWNvcHkge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBjdXJzb3I6IGNlbGw7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk4ZWU3O1xcblxcbiAgICB9XFxuXFxuICAgIC5jdXJzb3Ige1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzM5OGVlNztcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB9XFxufVxcblxcbjpob3N0IHRkIHtcXG5cXG4gICAgLS1mb250X3NpemU6IDEwcHQ7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udF9zaXplKTtcXG4gICAgbGluZS1oZWlnaHQ6IGNhbGMoIHZhcigtLWZvbnRfc2l6ZSkgKiAxLjIgKTtcXG5cXG4gICAgLS1pbmRlbnQ6IDA7XFxuXFxuICAgIC0tYm9yZGVyX2NvbG9yOiBibGFjaztcXG4gICAgLS1iYWNrZ3JvdW5kX2NvbG9yOiB3aGl0ZTtcXG4gICAgLS1mb3JlZ3JvdW5kX2NvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZF9jb2xvcik7XFxuICAgIGNvbG9yICAgICAgICAgICA6IHZhcigtLWZvcmVncm91bmRfY29sb3IpO1xcblxcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xcblxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcblxcbiAgICAmOmlzKFtkYXRhLXR5cGU9XFxcIm51bWJlclxcXCJdLFtkYXRhLXR5cGU9XFxcImRhdGVcXFwiXSwgW2RhdGEtdHlwZT1cXFwiYm9vbGVhblxcXCJdKSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgfVxcblxcbiAgICAmW2NvbnRlbnRlZGl0YWJsZV0ge1xcbiAgICAgICAgb3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICB9XFxuXFxuICAgICYuaGlkZGVuIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgJi5hanVzdGVyIHtcXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIH1cXG5cXG4gICAgJi5oaWdobGlnaHQge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NkZTNmOTtcXG4gICAgfVxcblxcbiAgICAvKiogc3R5bGUgKiovXFxuICAgICYuaXRhbGljIHtcXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgfVxcbiAgICAmLmJvbGQge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIH1cXG4gICAgJi51bmRlcmxpbmUge1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIH1cXG4gICAgJi5hbGlnbl9sZWZ0IHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyggdmFyKC0taW5kZW50KSAqIDEwcHgpO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgfVxcbiAgICAmLmFsaWduX2NlbnRlciB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgJi5hbGlnbl9yaWdodCB7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKCB2YXIoLS1pbmRlbnQpICogMTBweCk7XFxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgfVxcbiAgICAmLnZhbGlnbl90b3Age1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgfVxcbiAgICAmLnZhbGlnbl9taWRkbGUge1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgfVxcbiAgICAmLnZhbGlnbl9ib3R0b20ge1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gICAgfVxcbiAgICAvKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMjQxNzU3L2FwcGx5aW5nLWJvcmRlcnMtdG8tYS1zaW5nbGUtdGFibGUtY2VsbC13aGVuLXVzaW5nLWJvcmRlci1jb2xsYXBzZSAqL1xcbiAgICAmLmJvcmRlcl90b3Age1xcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IGRvdWJsZSB2YXIoLS1ib3JkZXJfY29sb3IpO1xcbiAgICB9XFxuICAgICYuYm9yZGVyX2JvdHRvbSB7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZG91YmxlIHZhcigtLWJvcmRlcl9jb2xvcik7XFxuICAgIH1cXG4gICAgJi5ib3JkZXJfbGVmdCB7XFxuICAgICAgICBib3JkZXItbGVmdDogMXB4IGRvdWJsZSB2YXIoLS1ib3JkZXJfY29sb3IpO1xcbiAgICB9XFxuICAgICYuYm9yZGVyX3JpZ2h0IHtcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IGRvdWJsZSB2YXIoLS1ib3JkZXJfY29sb3IpO1xcbiAgICB9XFxufVxcblxcbjpob3N0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG46aG9zdCAucmFuZ2VfaGlnaGxpZ2h0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taGlnaGxpZ2h0X2NvbG9yKTtcXG59XFxuXFxuOmhvc3QgLmZvcm11bGFfaGlnaGxpZ2h0IHtcXG4gICAgY29sb3I6IHZhcigtLWhpZ2hsaWdodF9jb2xvcik7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfMCB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjZmEwYzBjO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzEge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogI2ZhMGNmYTtcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF8yIHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICMwYzg0MGM7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfMyB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjMDEwMTgwO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzQge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzg3MTcxNztcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF81IHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICM4NzE3ODc7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfNiB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjODQ4NDBjO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0Xzcge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzBjMGNmYTtcXG59XFxuXFxuXFxuLmNvcHlfaGlnaGxpZ2h0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBUb21vcnJvdyBUaGVtZSAqL1xcbi8qIGh0dHA6Ly9qbWJsb2cuZ2l0aHViLmNvbS9jb2xvci10aGVtZXMtZm9yLWdvb2dsZS1jb2RlLWhpZ2hsaWdodGpzICovXFxuLyogT3JpZ2luYWwgdGhlbWUgLSBodHRwczovL2dpdGh1Yi5jb20vY2hyaXNrZW1wc29uL3RvbW9ycm93LXRoZW1lICovXFxuXFxuLyogVG9tb3Jyb3cgQ29tbWVudCAqL1xcbi5obGpzLWNvbW1lbnQsXFxuLmhsanMtcXVvdGUge1xcblxcdGNvbG9yOiAjOGU5MDhjO1xcbn1cXG5cXG4vKiBUb21vcnJvdyBSZWQgKi9cXG4uaGxqcy12YXJpYWJsZSxcXG4uaGxqcy10ZW1wbGF0ZS12YXJpYWJsZSxcXG4uaGxqcy10YWcsXFxuLmhsanMtbmFtZSxcXG4uaGxqcy1zZWxlY3Rvci1pZCxcXG4uaGxqcy1zZWxlY3Rvci1jbGFzcyxcXG4uaGxqcy1yZWdleHAsXFxuLmhsanMtZGVsZXRpb24ge1xcblxcdGNvbG9yOiAjYzgyODI5O1xcbn1cXG5cXG4vKiBUb21vcnJvdyBPcmFuZ2UgKi9cXG4uaGxqcy1udW1iZXIsXFxuLmhsanMtYnVpbHRfaW4sXFxuLmhsanMtYnVpbHRpbi1uYW1lLFxcbi5obGpzLWxpdGVyYWwsXFxuLmhsanMtdHlwZSxcXG4uaGxqcy1wYXJhbXMsXFxuLmhsanMtbWV0YSxcXG4uaGxqcy1saW5rIHtcXG5cXHRjb2xvcjogI2Y1ODcxZjtcXG59XFxuXFxuLyogVG9tb3Jyb3cgWWVsbG93ICovXFxuLmhsanMtYXR0cmlidXRlIHtcXG5cXHRjb2xvcjogI2VhYjcwMDtcXG59XFxuXFxuLyogVG9tb3Jyb3cgR3JlZW4gKi9cXG4uaGxqcy1zdHJpbmcsXFxuLmhsanMtc3ltYm9sLFxcbi5obGpzLWJ1bGxldCxcXG4uaGxqcy1hZGRpdGlvbiB7XFxuXFx0Y29sb3I6ICM3MThjMDA7XFxufVxcblxcbi8qIFRvbW9ycm93IEJsdWUgKi9cXG4uaGxqcy10aXRsZSxcXG4uaGxqcy1zZWN0aW9uIHtcXG5cXHRjb2xvcjogIzQyNzFhZTtcXG59XFxuXFxuLyogVG9tb3Jyb3cgUHVycGxlICovXFxuLmhsanMta2V5d29yZCxcXG4uaGxqcy1zZWxlY3Rvci10YWcge1xcblxcdGNvbG9yOiAjODk1OWE4O1xcbn1cXG5cXG4uaGxqcyB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0b3ZlcmZsb3cteDogYXV0bztcXG5cXHRjb2xvcjogIzRkNGQ0YztcXG5cXHRwYWRkaW5nOiAwLjVlbTtcXG59XFxuXFxuLmhsanMtZW1waGFzaXMge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmhsanMtc3Ryb25nIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XCI7IiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBleHBvcnRlZCB0eXBlcyA9PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgdHlwZSBDU1NfUmVzb3VyY2UgPSBzdHJpbmd8UmVzcG9uc2V8SFRNTFN0eWxlRWxlbWVudHxDU1NTdHlsZVNoZWV0O1xuZXhwb3J0IHR5cGUgQ1NTX1NvdXJjZSAgID0gQ1NTX1Jlc291cmNlIHwgUHJvbWlzZTxDU1NfUmVzb3VyY2U+O1xuXG5leHBvcnQgdHlwZSBIVE1MX1Jlc291cmNlID0gc3RyaW5nfFJlc3BvbnNlfEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XG5leHBvcnQgdHlwZSBIVE1MX1NvdXJjZSAgID0gSFRNTF9SZXNvdXJjZSB8IFByb21pc2U8SFRNTF9SZXNvdXJjZT47XG5cbmV4cG9ydCB0eXBlIExJU1NPcHRpb25zPEV4dGVuZHMgICAgZXh0ZW5kcyBDbGFzcyxcblx0XHRcdFx0XHRcdEhvc3QgICAgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHRcdEF0dHJzICAgICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0XHRQYXJhbWV0ZXJzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4gPSB7XG5cblx0ZXh0ZW5kcz86IENvbnN0cnVjdG9yPEV4dGVuZHM+LFxuXHRob3N0ICAgPzogQ29uc3RydWN0b3I8SG9zdD4sXG5cblx0ZGVwZW5kYW5jaWVzPzogcmVhZG9ubHkgUHJvbWlzZTxhbnk+W10sXG5cdGF0dHJpYnV0ZXMgID86IHJlYWRvbmx5IEF0dHJzW10sXG5cdHBhcmFtcyAgICAgID86IFJlYWRvbmx5PFBhcmFtZXRlcnM+LFxuXG5cdGNvbnRlbnQ/OiBIVE1MX1NvdXJjZSxcblx0Y3NzICAgID86ICBDU1NfU291cmNlIHwgcmVhZG9ubHkgQ1NTX1NvdXJjZVtdLFxuXHRzaGFkb3cgPzogIFNoYWRvd0NmZyxcbn07XG5cbmV4cG9ydCBlbnVtIFNoYWRvd0NmZyB7XG5cdE5PTkUgPSAnbm9uZScsXG5cdE9QRU4gPSAnb3BlbicsIFxuXHRDTE9TRT0gJ2Nsb3NlZCdcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgQ2xhc3MgPT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxubGV0IF9fY3N0cl9ob3N0ICA6IGFueSA9IG51bGw7XG5cbnR5cGUgQ29uc3RydWN0b3I8VD4gPSBuZXcgKCkgPT4gVDtcbmludGVyZmFjZSBDbGFzcyB7fVxuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9hdHRhY2hTaGFkb3dcbmNvbnN0IENBTl9IQVZFX1NIQURPVyA9IFtcblx0bnVsbCwgJ2FydGljbGUnLCAnYXNpZGUnLCAnYmxvY2txdW90ZScsICdib2R5JywgJ2RpdicsXG5cdCdmb290ZXInLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnaGVhZGVyJywgJ21haW4nLFxuXHQnbmF2JywgJ3AnLCAnc2VjdGlvbicsICdzcGFuJ1xuXHRcbl07XG5mdW5jdGlvbiBfY2FuSGFzU2hhZG93KHRhZzogdHlwZW9mIEhUTUxFbGVtZW50KSB7XG5cdHJldHVybiBDQU5fSEFWRV9TSEFET1cuaW5jbHVkZXMoIF9lbGVtZW50MnRhZ25hbWUodGFnKSApO1xufVxuXG50eXBlIFJlc291cmNlID0gVVJMfFJlc3BvbnNlO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExJU1M8RXh0ZW5kcyAgICBleHRlbmRzIENsYXNzICAgICAgICAgICAgICA9IENsYXNzLFxuXHRcdFx0XHRcdFx0XHQgSG9zdCAgICAgICBleHRlbmRzIEhUTUxFbGVtZW50ICAgICAgICA9IEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdFx0XHQgQXR0cnMgICAgICBleHRlbmRzIHN0cmluZyAgICAgICAgICAgICA9IG5ldmVyLFxuXHRcdFx0XHRcdFx0XHQgUGFyYW1ldGVycyBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55PiA9IHt9Pih7XG5cdFx0XHRcdFx0XHRcdFx0ZXh0ZW5kcyAgICAgOiBwX2V4dGVuZHMsXG5cdFx0XHRcdFx0XHRcdFx0aG9zdCAgICAgICAgOiBwX2hvc3QsXG5cdFx0XHRcdFx0XHRcdFx0ZGVwZW5kYW5jaWVzOiBwX2RlcHMsXG5cdFx0XHRcdFx0XHRcdCAgICBhdHRyaWJ1dGVzICA6IHBfYXR0cnMsXG5cdFx0XHRcdFx0XHRcdCAgICBwYXJhbXMsXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudCxcblx0XHRcdFx0XHRcdFx0XHRjc3MsXG5cdFx0XHRcdFx0XHRcdFx0c2hhZG93ICAgICAgOiBwX3NoYWRvdyxcblx0XHRcdFx0XHRcdFx0fTogTElTU09wdGlvbnM8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtZXRlcnM+ID0ge30pIHtcblxuXHQvL1RPRE8gbWVyZ2UgcHJvcCBpZiBleHRlbmRzIExJU1MuLi5cblxuXHRjb25zdCBob3N0ICAgICAgICA9IHBfaG9zdCAgICA/PyBIVE1MRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxIb3N0Pjtcblx0Y29uc3QgX2V4dGVuZHMgICAgPSBwX2V4dGVuZHMgPz8gT2JqZWN0ICAgICAgYXMgdW5rbm93biBhcyBDb25zdHJ1Y3RvcjxFeHRlbmRzPjtcblx0Y29uc3QgYXR0cmlidXRlcyAgPSBwX2F0dHJzICAgPz8gW107XG5cdGNvbnN0IGRlcGVuZGFuY2llcz0gcF9kZXBzICAgID8gWy4uLnBfZGVwc10gOiBbXTtcblx0Y29uc3QgY2FuSGFzU2hhZG93PSBfY2FuSGFzU2hhZG93KGhvc3QpO1xuXHRjb25zdCBzaGFkb3cgICAgICA9IHBfc2hhZG93ICA/PyAoY2FuSGFzU2hhZG93ID8gU2hhZG93Q2ZnLkNMT1NFIDogU2hhZG93Q2ZnLk5PTkUpO1xuXG5cdGlmKCAhIGNhbkhhc1NoYWRvdyAmJiBzaGFkb3cgIT09IFNoYWRvd0NmZy5OT05FKVxuXHRcdHRocm93IG5ldyBFcnJvcihgSG9zdCBlbGVtZW50ICR7X2VsZW1lbnQydGFnbmFtZShob3N0KX0gZG9lcyBub3Qgc3VwcG9ydCBTaGFkb3dSb290YCk7XG5cblx0Ly8gQ09OVEVOVCBwcm9jZXNzaW5nXG5cdGlmKCBjb250ZW50ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRkZXBlbmRhbmNpZXMucHVzaCggKCBhc3luYyAoKSA9PiB7XG5cblx0XHRcdGNvbnRlbnQgPSBhd2FpdCBjb250ZW50O1xuXG5cdFx0XHRpZihjb250ZW50IGluc3RhbmNlb2YgSFRNTFRlbXBsYXRlRWxlbWVudClcblx0XHRcdGNvbnRlbnQgPSBjb250ZW50LmlubmVySFRNTDtcblxuXHRcdFx0aWYoIHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB7XG5cblx0XHRcdFx0Y29udGVudCA9IGNvbnRlbnQudHJpbSgpOyAvLyBOZXZlciByZXR1cm4gYSB0ZXh0IG5vZGUgb2Ygd2hpdGVzcGFjZSBhcyB0aGUgcmVzdWx0XG5cdFx0XHRcdGlmKGNvbnRlbnQgPT09ICcnKVxuXHRcdFx0XHRcdGNvbnRlbnQgPSB1bmRlZmluZWQ7XG5cblx0XHRcdH1cblx0XHRcdGlmKCBjb250ZW50IGluc3RhbmNlb2YgUmVzcG9uc2UgKVxuXHRcdFx0XHRjb250ZW50ID0gYXdhaXQgY29udGVudC50ZXh0KCk7XG5cblx0XHRcdHJldHVybiBMSVNTQmFzZS5QYXJhbWV0ZXJzLmNvbnRlbnQgPSBjb250ZW50O1xuXHRcdH0pKCkgKTtcblx0fVxuXG5cdC8vIENTUyBwcm9jZXNzaW5nXG5cdGxldCBzdHlsZXNoZWV0czogcmVhZG9ubHkgQ1NTU3R5bGVTaGVldFtdID0gW107XG5cdGlmKCBjc3MgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdGlmKCAhIEFycmF5LmlzQXJyYXkoY3NzKSApXG5cdFx0XHRjc3MgPSBbY3NzIGFzIENTU19Tb3VyY2VdO1xuXG5cdFx0c3R5bGVzaGVldHMgPSBuZXcgQXJyYXk8Q1NTU3R5bGVTaGVldD4oY3NzLmxlbmd0aCk7XG5cblx0XHRjb25zdCBmZXRjaF9jc3MgPSAoYXN5bmMgKGNzczogQ1NTX1NvdXJjZSkgPT4ge1xuXHRcdFx0Y3NzID0gYXdhaXQgY3NzO1xuXHRcdFx0aWYoY3NzIGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldClcblx0XHRcdFx0cmV0dXJuIGNzcztcblx0XHRcdGlmKCBjc3MgaW5zdGFuY2VvZiBIVE1MU3R5bGVFbGVtZW50KVxuXHRcdFx0XHRyZXR1cm4gY3NzLnNoZWV0ITtcblxuXHRcdFx0bGV0IHN0eWxlID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcblx0XHRcdGlmKCB0eXBlb2YgY3NzID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0XHRzdHlsZS5yZXBsYWNlKGNzcyk7XG5cdFx0XHRcdHJldHVybiBzdHlsZTtcblx0XHRcdH1cblxuXHRcdFx0Ly9pZiggY3NzIGluc3RhbmNlb2YgUmVzcG9uc2UgKVxuXHRcdFx0c3R5bGUucmVwbGFjZShhd2FpdCBjc3MudGV4dCgpKTtcblx0XHRcdHJldHVybiBzdHlsZTtcblx0XHR9KTtcblxuXHRcdGRlcGVuZGFuY2llcy5wdXNoKCAuLi5jc3MubWFwKCBhc3luYyAoY3NzLCBpZHgpID0+ICAoc3R5bGVzaGVldHMgYXMgYW55KVtpZHhdID0gYXdhaXQgZmV0Y2hfY3NzKGNzcykgKSApO1xuXHR9XG5cblx0dHlwZSBMSG9zdCA9IExJU1NIb3N0PExJU1NCYXNlPjtcblxuXHQvLyBAdHMtaWdub3JlXG5cdGNsYXNzIExJU1NCYXNlIGV4dGVuZHMgX2V4dGVuZHMge1xuXG5cdFx0cmVhZG9ubHkgI2hvc3Q6IGFueTsgLy8gcHJldmVudHMgaXNzdWUgIzEuLi5cblxuXHRcdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0XHRzdXBlcigpO1xuXG5cdFx0XHQvLyBoNGNrLCBva2F5IGJlY2F1c2UgSlMgaXMgbW9ub3RocmVhZGVkLlxuXHRcdFx0aWYoIF9fY3N0cl9ob3N0ID09PSBudWxsIClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGRvIG5vdCBkaXJlY3RseSBjYWxsIHRoaXMgY29uc3RydWN0b3JcIik7XG5cdFx0XHR0aGlzLiNob3N0ID0gX19jc3RyX2hvc3Q7XG5cdFx0XHRfX2NzdHJfaG9zdCA9IG51bGw7XG5cdFx0fVxuXG5cdFx0cHVibGljIGdldCBob3N0KCk6IEhvc3Qge1xuXHRcdFx0cmV0dXJuIHRoaXMuI2hvc3Q7XG5cdFx0fVxuXHRcdHByb3RlY3RlZCBnZXQgYXR0cnMoKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuI2hvc3QgYXMgTEhvc3QpLmF0dHJzO1xuXHRcdH1cblx0XHRwcm90ZWN0ZWQgc2V0QXR0ckRlZmF1bHQoIGF0dHI6IEF0dHJzLCB2YWx1ZTogc3RyaW5nfG51bGwpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkuc2V0QXR0ckRlZmF1bHQoYXR0ciwgdmFsdWUpO1xuXG5cdFx0fVxuXHRcdHByb3RlY3RlZCBnZXQgcGFyYW1zKCkge1xuXHRcdFx0cmV0dXJuICh0aGlzLiNob3N0IGFzIExIb3N0KS5wYXJhbXM7XG5cdFx0fVxuXHRcdHByb3RlY3RlZCBnZXQgY29udGVudCgpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkuY29udGVudCE7XG5cdFx0fVxuXG5cdFx0c3RhdGljIHJlYWRvbmx5IFBhcmFtZXRlcnMgPSB7XG5cdFx0XHRob3N0LFxuXHRcdFx0ZGVwZW5kYW5jaWVzLFxuXHRcdFx0YXR0cmlidXRlcyxcblx0XHRcdHBhcmFtcyxcblx0XHRcdGNvbnRlbnQsXG5cdFx0XHRzdHlsZXNoZWV0cyxcblx0XHRcdHNoYWRvdyxcblx0XHR9O1xuXG5cdFx0cHJvdGVjdGVkIG9uQXR0ckNoYW5nZWQoX25hbWU6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0XHRfb2xkVmFsdWU6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0XHRfbmV3VmFsdWU6IHN0cmluZyk6IHZvaWR8ZmFsc2Uge31cblxuXHRcdHByb3RlY3RlZCBnZXQgaXNJbkRPTSgpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkuaXNJbkRPTTtcblx0XHR9XG5cdFx0cHJvdGVjdGVkIG9uRE9NQ29ubmVjdGVkKCkge31cblx0XHRwcm90ZWN0ZWQgb25ET01EaXNjb25uZWN0ZWQoKSB7fVxuXHR9XG5cblx0cmV0dXJuIExJU1NCYXNlO1xufVxuXG4vL1RPRE86IG90aGVyIG9wdGlvbnMuLi5cbmZ1bmN0aW9uIGV4dGVuZHNMSVNTPEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0SG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRBdHRyczEgICBleHRlbmRzIHN0cmluZyxcblx0QXR0cnMyICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4sXG5cdFQgZXh0ZW5kcyBMSVNTUmV0dXJuVHlwZTxFeHRlbmRzLCBIb3N0LCBBdHRyczEsIFBhcmFtcz4+KExpc3M6IFQsIHBhcmFtZXRlcnM6IHthdHRyaWJ1dGVzOiByZWFkb25seSBBdHRyczJbXX0pIHtcblxuXHQvLyBUT0RPOiBvdGhlciBvcHRpb25zLi4uXG5cdGNvbnN0IGF0dHJzID0gWy4uLkxpc3MuUGFyYW1ldGVycy5hdHRyaWJ1dGVzLCAuLi5wYXJhbWV0ZXJzLmF0dHJpYnV0ZXMhXTtcblx0Y29uc3QgcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgTGlzcy5QYXJhbWV0ZXJzLCB7YXR0cmlidXRlczogYXR0cnN9KTtcblxuXHQvLyBAdHMtaWdub3JlIDogYmVjYXVzZSBUUyBzdHVwaWRcblx0Y2xhc3MgRXh0ZW5kZWRMSVNTIGV4dGVuZHMgTGlzcyB7XG5cdFx0Y29uc3RydWN0b3IoLi4udDogYW55W10pIHtcblx0XHRcdC8vIEB0cy1pZ25vcmUgOiBiZWNhdXNlIFRTIHN0dXBpZFxuXHRcdFx0c3VwZXIoLi4udCk7XG5cdFx0fVxuXG5cdFx0cHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhdHRycygpIHtcblx0XHRcdHJldHVybiBzdXBlci5hdHRycyBhcyBSZWNvcmQ8QXR0cnMyfEF0dHJzMSwgc3RyaW5nfG51bGw+O1xuXHRcdH1cblxuXHRcdHN0YXRpYyBvdmVycmlkZSBQYXJhbWV0ZXJzID0gcGFyYW1zO1xuXHR9XG5cblx0cmV0dXJuIEV4dGVuZGVkTElTUztcbn1cbkxJU1MuZXh0ZW5kc0xJU1MgPSBleHRlbmRzTElTUztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyB0eXBlIGhlbHBlcnMgPT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIGJ1aWxkTElTU0hvc3RSZXR1cm5UeXBlPFQ+ICA9IFQgZXh0ZW5kcyBMSVNTUmV0dXJuVHlwZTxpbmZlciBFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbmZlciBIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbmZlciBBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5mZXIgUGFyYW1zICBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gUmV0dXJuVHlwZTx0eXBlb2YgYnVpbGRMSVNTSG9zdDxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zLCBUPj4gOiBuZXZlcjtcblxuZXhwb3J0IHR5cGUgTElTU1JldHVyblR5cGU8XG5cdEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0SG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+PiA9IFJldHVyblR5cGU8dHlwZW9mIExJU1M8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcz4+O1xuZXhwb3J0IHR5cGUgTElTU0Jhc2U8RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdCBIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0IEF0dHJzICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0IFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4+ID0gSW5zdGFuY2VUeXBlPExJU1NSZXR1cm5UeXBlPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXM+PjtcbmV4cG9ydCB0eXBlIExJU1NIb3N0PExJU1MgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+ID4gPSBJbnN0YW5jZVR5cGU8YnVpbGRMSVNTSG9zdFJldHVyblR5cGU8Q29uc3RydWN0b3I8TElTUz4gJiB7UGFyYW1ldGVyczogYW55fT4+O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTSG9zdCBjbGFzcyA9PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmxldCBpZCA9IDA7XG5cbmZ1bmN0aW9uIGJ1aWxkTElTU0hvc3Q8RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdCAgIEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHQgICBBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdCAgIFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4sXG5cdFx0XHRcdFx0ICAgVCBleHRlbmRzIExJU1NSZXR1cm5UeXBlPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXM+PihMaXNzOiBULCBfcGFyYW1zOiBQYXJ0aWFsPFBhcmFtcz4gPSB7fSkge1xuXHRjb25zdCB7XG5cdFx0aG9zdCxcblx0XHRhdHRyaWJ1dGVzLFxuXHRcdGNvbnRlbnQsXG5cdFx0c3R5bGVzaGVldHMsXG5cdFx0c2hhZG93LFxuXHR9ID0gTGlzcy5QYXJhbWV0ZXJzO1xuXG5cdGNvbnN0IGFscmVhZHlEZWNsYXJlZENTUyA9IG5ldyBTZXQoKTtcblxuXHRjb25zdCBHRVQgPSBTeW1ib2woJ2dldCcpO1xuXHRjb25zdCBTRVQgPSBTeW1ib2woJ3NldCcpO1xuXG5cdGNvbnN0IHByb3BlcnRpZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoIGF0dHJpYnV0ZXMubWFwKG4gPT4gW24sIHtcblxuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbigpOiBzdHJpbmd8bnVsbCAgICAgIHsgcmV0dXJuICh0aGlzIGFzIHVua25vd24gYXMgQXR0cmlidXRlcylbR0VUXShuKTsgfSxcblx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlOiBzdHJpbmd8bnVsbCkgeyByZXR1cm4gKHRoaXMgYXMgdW5rbm93biBhcyBBdHRyaWJ1dGVzKVtTRVRdKG4sIHZhbHVlKTsgfVxuXHR9XSkgKTtcblxuXHRjbGFzcyBBdHRyaWJ1dGVzIHtcbiAgICAgICAgW3g6IHN0cmluZ106IHN0cmluZ3xudWxsO1xuXG4gICAgICAgICNkYXRhICAgICA6IFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuICAgICAgICAjZGVmYXVsdHMgOiBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPjtcbiAgICAgICAgI3NldHRlciAgIDogKG5hbWU6IEF0dHJzLCB2YWx1ZTogc3RyaW5nfG51bGwpID0+IHZvaWQ7XG5cbiAgICAgICAgW0dFVF0obmFtZTogQXR0cnMpIHtcbiAgICAgICAgXHRyZXR1cm4gdGhpcy4jZGF0YVtuYW1lXSA/PyB0aGlzLiNkZWZhdWx0c1tuYW1lXSA/PyBudWxsO1xuICAgICAgICB9O1xuICAgICAgICBbU0VUXShuYW1lOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKXtcbiAgICAgICAgXHRyZXR1cm4gdGhpcy4jc2V0dGVyKG5hbWUsIHZhbHVlKTsgLy8gcmVxdWlyZWQgdG8gZ2V0IGEgY2xlYW4gb2JqZWN0IHdoZW4gZG9pbmcgey4uLmF0dHJzfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YSAgICA6IFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+LFxuXHRcdFx0XHRcdGRlZmF1bHRzOiBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPixcbiAgICAgICAgXHRcdFx0c2V0dGVyICA6IChuYW1lOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKSA9PiB2b2lkKSB7XG5cbiAgICAgICAgXHR0aGlzLiNkYXRhICAgICA9IGRhdGE7XG5cdFx0XHR0aGlzLiNkZWZhdWx0cyA9IGRlZmF1bHRzO1xuICAgICAgICBcdHRoaXMuI3NldHRlciA9IHNldHRlcjtcblxuICAgICAgICBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHByb3BlcnRpZXMpO1xuICAgICAgICB9XG5cdH1cblxuXHQvLyBAdHMtaWdub3JlIDogYmVjYXVzZSBUUyBpcyBzdHVwaWQuXG5cdGNsYXNzIExJU1NIb3N0QmFzZSBleHRlbmRzIGhvc3Qge1xuXG5cdFx0cmVhZG9ubHkgI3BhcmFtczogUGFyYW1zO1xuXG5cdFx0cmVhZG9ubHkgI2lkID0gKytpZDsgLy8gZm9yIGRlYnVnXG5cblx0XHRjb25zdHJ1Y3RvcihwYXJhbXM6IFBhcnRpYWw8UGFyYW1zPiA9IHt9KSB7XG5cdFx0XHRzdXBlcigpO1xuXHRcdFx0dGhpcy4jcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgTGlzcy5QYXJhbWV0ZXJzLnBhcmFtcywgX3BhcmFtcywgcGFyYW1zKTtcblxuXHRcdFx0dGhpcy4jd2FpdEluaXQgPSBuZXcgUHJvbWlzZSggKHJlc29sdmUpID0+IHtcblx0XHRcdFx0aWYodGhpcy5pc0luaXQpXG5cdFx0XHRcdFx0cmV0dXJuIHJlc29sdmUodGhpcy4jQVBJISk7XG5cdFx0XHRcdHRoaXMuI3Jlc29sdmUgPSByZXNvbHZlO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqKiogcHVibGljIEFQSSAqKioqKioqKioqKioqL1xuXG5cdFx0Z2V0IGlzSW5pdCgpIHtcblx0XHRcdHJldHVybiB0aGlzLiNBUEkgIT09IG51bGw7XG5cdFx0fVxuXHRcdGluaXRpYWxpemUocGFyYW1zOiBQYXJ0aWFsPFBhcmFtcz4gPSB7fSkge1xuXG5cdFx0XHRpZiggdGhpcy5pc0luaXQgKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0VsZW1lbnQgYWxyZWFkeSBpbml0aWFsaXplZCEnKTtcblxuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLiNwYXJhbXMsIHBhcmFtcyk7XG5cblx0XHRcdGNvbnN0IGFwaSA9IHRoaXMuaW5pdCgpO1xuXG5cdFx0XHRpZiggdGhpcy4jaXNJbkRPTSApXG5cdFx0XHRcdChhcGkgYXMgYW55KS5vbkRPTUNvbm5lY3RlZCgpO1xuXG5cdFx0XHRyZXR1cm4gYXBpO1xuXHRcdH1cblxuXHRcdGdldCBMSVNTU3luYygpIHtcblx0XHRcdGlmKCAhIHRoaXMuaXNJbml0IClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdBY2Nlc3NpbmcgQVBJIGJlZm9yZSBXZWJDb21wb25lbnQgaW5pdGlhbGl6YXRpb24hJyk7XG5cdFx0XHRyZXR1cm4gdGhpcy4jQVBJITtcblx0XHR9XG5cdFx0Z2V0IExJU1MoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4jd2FpdEluaXQ7XG5cdFx0fVxuXG5cdFx0LyoqKiBpbml0ICoqKi9cblx0XHQjd2FpdEluaXQ6IFByb21pc2U8SW5zdGFuY2VUeXBlPFQ+Pjtcblx0XHQjcmVzb2x2ZTogKCh1OiBJbnN0YW5jZVR5cGU8VD4pID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG5cdFx0I0FQSTogSW5zdGFuY2VUeXBlPFQ+IHwgbnVsbCA9IG51bGw7XG5cblx0XHQjaXNJbkRPTSA9IGZhbHNlO1xuXHRcdGdldCBpc0luRE9NKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuI2lzSW5ET007XG5cdFx0fVxuXG5cdFx0ZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0XHR0aGlzLiNpc0luRE9NID0gZmFsc2U7XG5cdFx0XHQodGhpcy4jQVBJISBhcyBhbnkpLm9uRE9NRGlzY29ubmVjdGVkKCk7XG5cdFx0fVxuXG5cdFx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cblx0XHRcdHRoaXMuI2lzSW5ET00gPSB0cnVlO1xuXHRcblx0XHRcdGlmKCAhIHRoaXMuaXNJbml0ICkge1xuXHRcdFx0XHR0aGlzLmluaXQoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQodGhpcy4jQVBJISBhcyBhbnkpLm9uRE9NQ29ubmVjdGVkKCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBpbml0KCkge1xuXHRcdFx0XG5cdFx0XHRjdXN0b21FbGVtZW50cy51cGdyYWRlKHRoaXMpO1xuXHRcdFx0XG5cdFx0XHQvLyBzaGFkb3dcblx0XHRcdHRoaXMuI2NvbnRlbnQgPSB0aGlzIGFzIHVua25vd24gYXMgSG9zdDtcblx0XHRcdGlmKCBzaGFkb3cgIT09ICdub25lJykge1xuXHRcdFx0XHR0aGlzLiNjb250ZW50ID0gdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6IHNoYWRvd30pO1xuXG5cdFx0XHRcdC8vQHRzLWlnbm9yZVxuXHRcdFx0XHR0aGlzLiNjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGlja0V2ZW50KTtcblx0XHRcdFx0Ly9AdHMtaWdub3JlXG5cdFx0XHRcdHRoaXMuI2NvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBvbkNsaWNrRXZlbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBhdHRyc1xuXHRcdFx0Zm9yKGxldCBvYnMgb2YgYXR0cmlidXRlcyEpXG5cdFx0XHRcdHRoaXMuI2F0dHJpYnV0ZXNbb2JzXSA9IHRoaXMuZ2V0QXR0cmlidXRlKG9icyk7XG5cblx0XHRcdC8vIGNzc1xuXHRcdFx0aWYoIHNoYWRvdyAhPT0gJ25vbmUnKVxuXHRcdFx0XHQodGhpcy4jY29udGVudCBhcyBTaGFkb3dSb290KS5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChzaGFyZWRDU1MpO1xuXHRcdFx0aWYoIHN0eWxlc2hlZXRzLmxlbmd0aCApIHtcblxuXHRcdFx0XHRpZiggc2hhZG93ICE9PSAnbm9uZScpXG5cdFx0XHRcdFx0KHRoaXMuI2NvbnRlbnQgYXMgU2hhZG93Um9vdCkuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goLi4uc3R5bGVzaGVldHMpO1xuXHRcdFx0XHRlbHNlIHtcblxuXHRcdFx0XHRcdGNvbnN0IGNzc3NlbGVjdG9yID0gdGhpcy5DU1NTZWxlY3RvcjtcblxuXHRcdFx0XHRcdC8vIGlmIG5vdCB5ZXQgaW5zZXJ0ZWQgOlxuXHRcdFx0XHRcdGlmKCAhIGFscmVhZHlEZWNsYXJlZENTUy5oYXMoY3Nzc2VsZWN0b3IpICkge1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRsZXQgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG5cdFx0XHRcdFx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNzc3NlbGVjdG9yKTtcblxuXHRcdFx0XHRcdFx0bGV0IGh0bWxfc3R5bGVzaGVldHMgPSBcIlwiO1xuXG5cdFx0XHRcdFx0XHRmb3IobGV0IHN0eWxlIG9mIHN0eWxlc2hlZXRzKVxuXHRcdFx0XHRcdFx0XHRmb3IobGV0IHJ1bGUgb2Ygc3R5bGUuY3NzUnVsZXMpXG5cdFx0XHRcdFx0XHRcdFx0aHRtbF9zdHlsZXNoZWV0cyArPSBydWxlLmNzc1RleHQgKyAnXFxuJztcblxuXHRcdFx0XHRcdFx0c3R5bGUuaW5uZXJIVE1MID0gaHRtbF9zdHlsZXNoZWV0cy5yZXBsYWNlKCc6aG9zdCcsIGA6aXMoJHtjc3NzZWxlY3Rvcn0pYCk7XG5cblx0XHRcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kKHN0eWxlKTtcblxuXHRcdFx0XHRcdFx0YWxyZWFkeURlY2xhcmVkQ1NTLmFkZChjc3NzZWxlY3Rvcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNvbnRlbnRcblx0XHRcdGlmKCBjb250ZW50ICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdGxldCB0ZW1wbGF0ZV9lbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblx0XHRcdFx0bGV0IHN0ciA9IChjb250ZW50IGFzIHN0cmluZykucmVwbGFjZSgvXFwkXFx7KC4rPylcXH0vZywgKF8sIG1hdGNoKSA9PiB0aGlzLmdldEF0dHJpYnV0ZShtYXRjaCk/PycnKVxuXHQgICAgXHRcdHRlbXBsYXRlX2VsZW0uaW5uZXJIVE1MID0gc3RyO1xuXHQgICAgXHRcdHRoaXMuI2NvbnRlbnQuYXBwZW5kKC4uLnRlbXBsYXRlX2VsZW0uY29udGVudC5jaGlsZE5vZGVzKTtcblx0ICAgIFx0fVxuXG5cdCAgICBcdC8vIGJ1aWxkXG5cblx0ICAgIFx0Ly8gaDRjaywgb2theSBiZWNhdXNlIEpTIGlzIG1vbm90aHJlYWRlZC5cblx0XHRcdF9fY3N0cl9ob3N0ICAgPSB0aGlzO1xuXG5cdCAgICBcdGxldCBvYmogPSBuZXcgTGlzcygpO1xuXG5cdCAgICBcdC8qaWYoIG9iaiBpbnN0YW5jZW9mIFByb21pc2UpXG5cdCAgICBcdFx0b2JqID0gYXdhaXQgb2JqOyovXG5cblx0XHRcdHRoaXMuI0FQSSA9IG9iaiBhcyBJbnN0YW5jZVR5cGU8VD47XG5cblx0XHRcdC8vIGRlZmF1bHQgc2xvdFxuXHRcdFx0aWYoIHRoaXMuaGFzU2hhZG93ICYmIHRoaXMuI2NvbnRlbnQuY2hpbGROb2Rlcy5sZW5ndGggPT09IDAgKVxuXHRcdFx0XHR0aGlzLiNjb250ZW50LmFwcGVuZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2xvdCcpICk7XG5cblx0XHRcdGlmKCB0aGlzLiNyZXNvbHZlICE9PSBudWxsKVxuXHRcdFx0XHR0aGlzLiNyZXNvbHZlKHRoaXMuI0FQSSk7XG5cblx0XHRcdHJldHVybiB0aGlzLiNBUEk7XG5cdFx0fVxuXG5cdFx0Z2V0IHBhcmFtcygpOiBQYXJhbXMge1xuXHRcdFx0cmV0dXJuIHRoaXMuI3BhcmFtcztcblx0XHR9XG5cblxuXHRcdC8qKiogY29udGVudCAqKiovXG5cdFx0I2NvbnRlbnQ6IEhvc3R8U2hhZG93Um9vdHxudWxsID0gbnVsbDtcblxuXHRcdGdldCBjb250ZW50KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuI2NvbnRlbnQ7XG5cdFx0fVxuXG5cdFx0Z2V0UGFydChuYW1lOiBzdHJpbmcpIHtcblx0XHRcdHJldHVybiB0aGlzLmhhc1NoYWRvd1xuXHRcdFx0XHRcdD8gdGhpcy4jY29udGVudD8ucXVlcnlTZWxlY3RvcihgOjpwYXJ0KCR7bmFtZX0pYClcblx0XHRcdFx0XHQ6IHRoaXMuI2NvbnRlbnQ/LnF1ZXJ5U2VsZWN0b3IoYFtwYXJ0PVwiJHtuYW1lfVwiXWApO1xuXHRcdH1cblx0XHRnZXRQYXJ0cyhuYW1lOiBzdHJpbmcpIHtcblx0XHRcdHJldHVybiB0aGlzLmhhc1NoYWRvd1xuXHRcdFx0XHRcdD8gdGhpcy4jY29udGVudD8ucXVlcnlTZWxlY3RvckFsbChgOjpwYXJ0KCR7bmFtZX0pYClcblx0XHRcdFx0XHQ6IHRoaXMuI2NvbnRlbnQ/LnF1ZXJ5U2VsZWN0b3JBbGwoYFtwYXJ0PVwiJHtuYW1lfVwiXWApO1xuXHRcdH1cblxuXHRcdHByb3RlY3RlZCBnZXQgaGFzU2hhZG93KCk6IGJvb2xlYW4ge1xuXHRcdFx0cmV0dXJuIHNoYWRvdyAhPT0gJ25vbmUnO1xuXHRcdH1cblxuXHRcdC8qKiogQ1NTICoqKi9cblxuXHRcdGdldCBDU1NTZWxlY3RvcigpIHtcblx0XHRcdHJldHVybiB0aGlzLmhhc1NoYWRvd1xuXHRcdFx0XHRcdD8gdGhpcy50YWdOYW1lXG5cdFx0XHRcdFx0OiBgJHt0aGlzLnRhZ05hbWV9W2lzPVwiJHt0aGlzLmdldEF0dHJpYnV0ZShcImlzXCIpfVwiXWA7XG5cdFx0fVxuXG5cdFx0LyoqKiBhdHRycyAqKiovXG5cdFx0I2F0dHJzX2ZsYWcgPSBmYWxzZTtcblxuXHRcdCNhdHRyaWJ1dGVzICAgICAgICAgPSB7fSBhcyBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPjtcblx0XHQjYXR0cmlidXRlc0RlZmF1bHRzID0ge30gYXMgUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD47XG5cdFx0I2F0dHJzID0gbmV3IEF0dHJpYnV0ZXMoXG5cdFx0XHR0aGlzLiNhdHRyaWJ1dGVzLFxuXHRcdFx0dGhpcy4jYXR0cmlidXRlc0RlZmF1bHRzLFxuXHRcdFx0KG5hbWU6IEF0dHJzLCB2YWx1ZTpzdHJpbmd8bnVsbCkgPT4ge1xuXG5cdFx0XHRcdHRoaXMuI2F0dHJpYnV0ZXNbbmFtZV0gPSB2YWx1ZTtcblxuXHRcdFx0XHR0aGlzLiNhdHRyc19mbGFnID0gdHJ1ZTsgLy8gZG8gbm90IHRyaWdnZXIgb25BdHRyc0NoYW5nZWQuXG5cdFx0XHRcdGlmKCB2YWx1ZSA9PT0gbnVsbClcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0XHRcdH1cblx0XHQpIGFzIHVua25vd24gYXMgUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD47XG5cblx0XHRzZXRBdHRyRGVmYXVsdChuYW1lOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKSB7XG5cdFx0XHRpZiggdmFsdWUgPT09IG51bGwpXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLiNhdHRyaWJ1dGVzRGVmYXVsdHNbbmFtZV07XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHRoaXMuI2F0dHJpYnV0ZXNEZWZhdWx0c1tuYW1lXSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdGdldCBhdHRycygpOiBSZWFkb25seTxSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPj4ge1xuXG5cdFx0XHRyZXR1cm4gdGhpcy4jYXR0cnM7XG5cdFx0fVxuXG5cdFx0c3RhdGljIG9ic2VydmVkQXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG5cdFx0YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUgICAgOiBBdHRycyxcblx0XHRcdFx0XHRcdFx0XHQgb2xkVmFsdWU6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0XHQgbmV3VmFsdWU6IHN0cmluZykge1xuXG5cdFx0XHRpZih0aGlzLiNhdHRyc19mbGFnKSB7XG5cdFx0XHRcdHRoaXMuI2F0dHJzX2ZsYWcgPSBmYWxzZTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLiNhdHRyaWJ1dGVzW25hbWVdID0gbmV3VmFsdWU7XG5cdFx0XHRpZiggISB0aGlzLmlzSW5pdCApXG5cdFx0XHRcdHJldHVybjtcblxuXHRcdFx0aWYoICh0aGlzLiNBUEkhIGFzIGFueSkub25BdHRyQ2hhbmdlZChuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpID09PSBmYWxzZSkge1xuXHRcdFx0XHR0aGlzLiNhdHRyc1tuYW1lXSA9IG9sZFZhbHVlOyAvLyByZXZlcnQgdGhlIGNoYW5nZS5cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIExJU1NIb3N0QmFzZTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBkZWZpbmUgPT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBfRE9NQ29udGVudExvYWRlZCA9IG5ldyBQcm9taXNlPHZvaWQ+KCAocmVzb2x2ZSkgPT4ge1xuXG5cdGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiaW50ZXJhY3RpdmVcIiB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpXG5cdFx0cmV0dXJuIHJlc29sdmUoKTtcblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXHRcdHJlc29sdmUoKTtcblx0fSwgdHJ1ZSk7XG59KTtcblxuTElTUy5kZWZpbmUgPSBhc3luYyBmdW5jdGlvbjxFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdFx0XHRcdFx0XHRcdCBIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0XHQgICAgIEF0dHJzICAgZXh0ZW5kcyBzdHJpbmcsXG5cdFx0XHRcdFx0XHQgICAgIFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4sXG5cdFx0XHRcdFx0XHQgICBcdCBUIGV4dGVuZHMgTElTU1JldHVyblR5cGU8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcz4+KFxuXHRcdFx0XHRcdFx0ICAgXHR0YWduYW1lOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdENvbXBvbmVudENsYXNzOiBULFxuXHRcdFx0XHRcdFx0XHR7ZGVwZW5kYW5jaWVzLCBwYXJhbXN9OiB7cGFyYW1zPzogUGFydGlhbDxQYXJhbXM+LCBkZXBlbmRhbmNpZXM/OiByZWFkb25seSBQcm9taXNlPHN0cmluZz5bXX0gPSB7fSkge1xuXG5cdGRlcGVuZGFuY2llcz8/PVtdO1xuXHRwYXJhbXMgICAgICA/Pz0ge307XG5cblx0Y29uc3QgQ2xhc3MgPSBDb21wb25lbnRDbGFzcy5QYXJhbWV0ZXJzLmhvc3Q7XG5cdGxldCBMSVNTQmFzZTogYW55ID0gQ29tcG9uZW50Q2xhc3M7XG5cdGxldCBodG1sdGFnID0gX2VsZW1lbnQydGFnbmFtZShDbGFzcyk/P3VuZGVmaW5lZDtcblxuXHRhd2FpdCBQcm9taXNlLmFsbChbX0RPTUNvbnRlbnRMb2FkZWQsIC4uLmRlcGVuZGFuY2llcywgLi4uTElTU0Jhc2UuUGFyYW1ldGVycy5kZXBlbmRhbmNpZXNdKTtcblxuXHRjb25zdCBMSVNTY2xhc3MgPSBidWlsZExJU1NIb3N0PEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXMsIFQ+KENvbXBvbmVudENsYXNzLCBwYXJhbXMpO1xuXHRcblx0Y29uc3Qgb3B0cyA9IGh0bWx0YWcgPT09IHVuZGVmaW5lZCA/IHt9XG5cdFx0XHRcdFx0XHRcdFx0XHQgICA6IHtleHRlbmRzOiBodG1sdGFnfTtcblx0XG5cdGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWduYW1lLCBMSVNTY2xhc3MsIG9wdHMpO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBTaGFkb3dSb290IHRvb2xzID09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBzaGFyZWRDU1MgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc2hhcmVkQ1NTKTtcblxuTElTUy5pbnNlcnRHbG9iYWxDU1NSdWxlcyA9IGZ1bmN0aW9uKGNzczogc3RyaW5nfEhUTUxTdHlsZUVsZW1lbnQpIHtcblxuXHRsZXQgY3NzX3N0eWxlITogQ1NTU3R5bGVTaGVldDtcblxuXHRpZiggY3NzIGluc3RhbmNlb2YgSFRNTFN0eWxlRWxlbWVudCApXG5cdFx0Y3NzX3N0eWxlID0gY3NzLnNoZWV0ITtcblx0aWYoIHR5cGVvZiBjc3MgPT09IFwic3RyaW5nXCIpIHtcblx0XHRjc3Nfc3R5bGUgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuXHRcdGNzc19zdHlsZS5yZXBsYWNlU3luYyhjc3MpO1xuXHR9XG5cblx0Zm9yKGxldCBydWxlIG9mIGNzc19zdHlsZS5jc3NSdWxlcylcblx0XHRzaGFyZWRDU1MuaW5zZXJ0UnVsZShydWxlLmNzc1RleHQpO1xufVxuXG50eXBlIERlbGVnYXRlZEhhbmRsZXIgPSBbc3RyaW5nLCAoZXY6IE1vdXNlRXZlbnQpID0+IHZvaWRdO1xuY29uc3QgREVMRUdBVEVEX0VWRU5UUyA9IHtcblx0XCJjbGlja1wiOiBbXSBhcyBEZWxlZ2F0ZWRIYW5kbGVyW10sXG5cdFwiZGJsY2xpY2tcIjogW10gYXMgRGVsZWdhdGVkSGFuZGxlcltdXG59O1xuXG5jb25zdCBBTFJFQURZX1BST0NFU1NFRCA9IFN5bWJvbCgpO1xuXG5mdW5jdGlvbiBvbkNsaWNrRXZlbnQoZXY6IE1vdXNlRXZlbnQpIHtcblxuXHRpZiggKGV2IGFzIGFueSlbQUxSRUFEWV9QUk9DRVNTRURdID09PSB0cnVlIClcblx0XHRyZXR1cm47XG5cdChldiBhcyBhbnkpW0FMUkVBRFlfUFJPQ0VTU0VEXSA9IHRydWU7XG5cblx0Y29uc3QgaGFuZGxlcnMgPSBERUxFR0FURURfRVZFTlRTW2V2LnR5cGUgYXMga2V5b2YgdHlwZW9mIERFTEVHQVRFRF9FVkVOVFNdO1xuXG5cdGZvcihsZXQgZWxlbSBvZiBldi5jb21wb3NlZFBhdGgoKSApIHtcblx0XG5cdFx0aWYoIGVsZW0gaW5zdGFuY2VvZiBTaGFkb3dSb290IHx8IGVsZW0gPT09IGRvY3VtZW50IHx8IGVsZW0gPT09IHdpbmRvdyApXG5cdFx0XHRjb250aW51ZTtcblxuXHRcdHZhciB0YXJnZXQgPSBlbGVtIGFzIEVsZW1lbnQ7XG5cblx0XHRmb3IobGV0IFtzZWxlY3RvciwgaGFuZGxlcl0gb2YgaGFuZGxlcnMpIHtcblx0XHRcdGlmKCB0YXJnZXQubWF0Y2hlcyhzZWxlY3RvcikgKVxuXHRcdFx0XHRoYW5kbGVyKGV2KTtcblx0XHR9XG5cdH1cbn1cblxuTElTUy5pbnNlcnRHbG9iYWxEZWxlZ2F0ZWRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50X25hbWU6IGtleW9mIHR5cGVvZiBERUxFR0FURURfRVZFTlRTLCBzZWxlY3Rvcjogc3RyaW5nLCBoYW5kbGVyOiAoZXY6IE1vdXNlRXZlbnQpID0+IHZvaWQgKSB7XG5cdERFTEVHQVRFRF9FVkVOVFNbZXZlbnRfbmFtZV0ucHVzaChbc2VsZWN0b3IsIGhhbmRsZXJdKVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tFdmVudCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIG9uQ2xpY2tFdmVudCk7XG5cbkxJU1MuY2xvc2VzdCA9IGZ1bmN0aW9uIGNsb3Nlc3Q8RSBleHRlbmRzIEVsZW1lbnQ+KHNlbGVjdG9yOiBzdHJpbmcsIGVsZW1lbnQ6IEVsZW1lbnQpIHtcblxuXHR3aGlsZSh0cnVlKSB7XG5cdFx0dmFyIHJlc3VsdCA9IGVsZW1lbnQuY2xvc2VzdDxFPihzZWxlY3Rvcik7XG5cblx0XHRpZiggcmVzdWx0ICE9PSBudWxsKVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblxuXHRcdGNvbnN0IHJvb3QgPSBlbGVtZW50LmdldFJvb3ROb2RlKCk7XG5cdFx0aWYoICEgKFwiaG9zdFwiIGluIHJvb3QpIClcblx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0ZWxlbWVudCA9IChyb290IGFzIFNoYWRvd1Jvb3QpLmhvc3Q7XG5cdH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBoZWxwZXJzID09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIGluZmVyUGFyYW1zPFQ+ID0gVCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LCBpbmZlciBQIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+PiA/IFAgOiBuZXZlcjtcblxudHlwZSBCVUlMRF9PUFRJT05TPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PiA9IFBhcnRpYWw8e1xuXHRcdFx0XHRcdCAgXHRwYXJhbXMgICAgOiBQYXJ0aWFsPGluZmVyUGFyYW1zPFQ+Pixcblx0XHRcdFx0XHQgIFx0Y29udGVudFx0ICA6IHN0cmluZ3xOb2RlfHJlYWRvbmx5IE5vZGVbXSxcblx0XHRcdFx0XHRcdGlkIFx0XHQgIDogc3RyaW5nLFxuXHRcdFx0XHRcdCAgXHRjbGFzc2VzXHQgIDogcmVhZG9ubHkgc3RyaW5nW10sXG5cdFx0XHRcdFx0ICBcdGNzc3ZhcnMgICA6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIHN0cmluZz4+LFxuXHRcdFx0XHRcdCAgXHRhdHRycyBcdCAgOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmd8Ym9vbGVhbj4+LFxuXHRcdFx0XHRcdCAgXHRkYXRhIFx0ICA6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIHN0cmluZ3xib29sZWFuPj4sXG5cdFx0XHRcdFx0ICBcdGxpc3RlbmVycyA6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIChldjogRXZlbnQpID0+IHZvaWQ+PlxuXHRcdFx0XHRcdH0+ICYgKHtcblx0XHRcdFx0XHRcdGluaXRpYWxpemU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0cGFyZW50OiBFbGVtZW50XG5cdFx0XHRcdFx0fXx7XG5cdFx0XHRcdFx0XHRpbml0aWFsaXplPzogdHJ1ZSxcblx0XHRcdFx0XHRcdHBhcmVudD86IEVsZW1lbnRcblx0XHRcdFx0XHR9KTtcblxuYXN5bmMgZnVuY3Rpb24gYnVpbGQ8VCBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHRhZ25hbWU6IFQsIG9wdGlvbnM/OiBCVUlMRF9PUFRJT05TPENvbXBvbmVudHNbVF0+KTogUHJvbWlzZTxDb21wb25lbnRzW1RdPjtcbmFzeW5jIGZ1bmN0aW9uIGJ1aWxkPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+Pih0YWduYW1lOiBzdHJpbmcsIG9wdGlvbnM/OiBCVUlMRF9PUFRJT05TPFQ+KTogUHJvbWlzZTxUPjtcbmFzeW5jIGZ1bmN0aW9uIGJ1aWxkPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+Pih0YWduYW1lOiBzdHJpbmcsIHtcblx0XHRwYXJhbXMgICAgPSB7fSxcblx0XHRpbml0aWFsaXplPSB0cnVlLFxuXHRcdGNvbnRlbnQgICA9IFtdLFxuXHRcdHBhcmVudCAgICA9IHVuZGVmaW5lZCxcblx0XHRpZCBcdFx0ICA9IHVuZGVmaW5lZCxcblx0XHRjbGFzc2VzICAgPSBbXSxcblx0XHRjc3N2YXJzICAgPSB7fSxcblx0XHRhdHRycyAgICAgPSB7fSxcblx0XHRkYXRhIFx0ICA9IHt9LFxuXHRcdGxpc3RlbmVycyA9IHt9XG5cdH06IEJVSUxEX09QVElPTlM8VD4gPSB7fSk6IFByb21pc2U8VD4ge1xuXG5cdGlmKCAhIGluaXRpYWxpemUgJiYgcGFyZW50ID09PSBudWxsKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIkEgcGFyZW50IG11c3QgYmUgZ2l2ZW4gaWYgaW5pdGlhbGl6ZSBpcyBmYWxzZVwiKTtcblxuXHRsZXQgQ3VzdG9tQ2xhc3MgPSBhd2FpdCBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCh0YWduYW1lKTtcblx0bGV0IGVsZW0gPSBuZXcgQ3VzdG9tQ2xhc3MocGFyYW1zKSBhcyBMSVNTSG9zdDxUPjtcblxuXHQvLyBGaXggaXNzdWUgIzJcblx0aWYoIGVsZW0udGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSB0YWduYW1lIClcblx0XHRlbGVtLnNldEF0dHJpYnV0ZShcImlzXCIsIHRhZ25hbWUpO1xuXG5cdGlmKCBpZCAhPT0gdW5kZWZpbmVkIClcblx0XHRlbGVtLmlkID0gaWQ7XG5cblx0aWYoIGNsYXNzZXMubGVuZ3RoID4gMClcblx0XHRlbGVtLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG5cblx0Zm9yKGxldCBuYW1lIGluIGNzc3ZhcnMpXG5cdFx0ZWxlbS5zdHlsZS5zZXRQcm9wZXJ0eShgLS0ke25hbWV9YCwgY3NzdmFyc1tuYW1lXSk7XG5cblx0Zm9yKGxldCBuYW1lIGluIGF0dHJzKSB7XG5cblx0XHRsZXQgdmFsdWUgPSBhdHRyc1tuYW1lXTtcblx0XHRpZiggdHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIilcblx0XHRcdGVsZW0udG9nZ2xlQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0XHRlbHNlXG5cdFx0XHRlbGVtLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdH1cblxuXHRmb3IobGV0IG5hbWUgaW4gZGF0YSkge1xuXG5cdFx0bGV0IHZhbHVlID0gZGF0YVtuYW1lXTtcblx0XHRpZiggdmFsdWUgPT09IGZhbHNlKVxuXHRcdFx0ZGVsZXRlIGVsZW0uZGF0YXNldFtuYW1lXTtcblx0XHRlbHNlIGlmKHZhbHVlID09PSB0cnVlKVxuXHRcdFx0ZWxlbS5kYXRhc2V0W25hbWVdID0gXCJcIjtcblx0XHRlbHNlXG5cdFx0XHRlbGVtLmRhdGFzZXRbbmFtZV0gPSB2YWx1ZTtcblx0fVxuXG5cdGlmKCAhIEFycmF5LmlzQXJyYXkoY29udGVudCkgKVxuXHRcdGNvbnRlbnQgPSBbY29udGVudCBhcyBhbnldO1xuXHRlbGVtLnJlcGxhY2VDaGlsZHJlbiguLi5jb250ZW50KTtcblxuXHRmb3IobGV0IG5hbWUgaW4gbGlzdGVuZXJzKVxuXHRcdGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBsaXN0ZW5lcnNbbmFtZV0pO1xuXG5cdGlmKCBwYXJlbnQgIT09IHVuZGVmaW5lZCApXG5cdFx0cGFyZW50LmFwcGVuZChlbGVtKTtcblxuXHRpZiggISBlbGVtLmlzSW5pdCAmJiBpbml0aWFsaXplIClcblx0XHRyZXR1cm4gYXdhaXQgTElTUy5pbml0aWFsaXplKGVsZW0pO1xuXG5cdHJldHVybiBhd2FpdCBMSVNTLmdldExJU1MoZWxlbSk7XG59XG5MSVNTLmJ1aWxkID0gYnVpbGQ7XG5cblxuTElTUy53aGVuRGVmaW5lZCAgICA9IGFzeW5jIGZ1bmN0aW9uKHRhZ25hbWU6IHN0cmluZywgY2FsbGJhY2s/OiAoKSA9PiB2b2lkICkgOiBQcm9taXNlPHZvaWQ+IHtcblxuXHRhd2FpdCBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCh0YWduYW1lKTtcblxuXHRpZiggY2FsbGJhY2sgIT09IHVuZGVmaW5lZClcblx0XHRjYWxsYmFjaygpO1xuXG5cdHJldHVybjtcbn1cbkxJU1Mud2hlbkFsbERlZmluZWQgPSBhc3luYyBmdW5jdGlvbih0YWduYW1lczogcmVhZG9ubHkgc3RyaW5nW10sIGNhbGxiYWNrPzogKCkgPT4gdm9pZCApIDogUHJvbWlzZTx2b2lkPiB7XG5cblx0YXdhaXQgUHJvbWlzZS5hbGwoIHRhZ25hbWVzLm1hcCggdCA9PiBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCh0KSApIClcblxuXHRpZiggY2FsbGJhY2sgIT09IHVuZGVmaW5lZClcblx0XHRjYWxsYmFjaygpO1xuXG59XG5cbkxJU1MuaXNEZWZpbmVkID0gZnVuY3Rpb24obmFtZTogc3RyaW5nKSB7XG5cdHJldHVybiBjdXN0b21FbGVtZW50cy5nZXQobmFtZSk7XG59XG5cbkxJU1Muc2VsZWN0b3IgPSBmdW5jdGlvbihuYW1lPzogc3RyaW5nKSB7XG5cdGlmKG5hbWUgPT09IHVuZGVmaW5lZCkgLy8ganVzdCBhbiBoNGNrXG5cdFx0cmV0dXJuIFwiXCI7XG5cdHJldHVybiBgOmlzKCR7bmFtZX0sIFtpcz1cIiR7bmFtZX1cIl0pYDtcbn1cblxuTElTUy5nZXRMSVNTICAgID0gYXN5bmMgZnVuY3Rpb248VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KCBlbGVtZW50OiBFbGVtZW50ICkge1xuXG5cdGF3YWl0IExJU1Mud2hlbkRlZmluZWQoIExJU1MuZ2V0TmFtZShlbGVtZW50KSApO1xuXG5cdHJldHVybiAoZWxlbWVudCBhcyBMSVNTSG9zdDxUPikuTElTUzsgLy8gZW5zdXJlIGluaXRpYWxpemVkLlxufVxuTElTUy5nZXRMSVNTU3luYz0gZnVuY3Rpb248VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KCBlbGVtZW50OiBFbGVtZW50ICkge1xuXG5cdGlmKCAhIExJU1MuaXNEZWZpbmVkKCBMSVNTLmdldE5hbWUoZWxlbWVudCkgKSApXG5cdFx0dGhyb3cgbmV3IEVycm9yKGAke25hbWV9IGhhc24ndCBiZWVuIGRlZmluZWQgeWV0LmApO1xuXG5cdGxldCBob3N0ID0gZWxlbWVudCBhcyBMSVNTSG9zdDxUPjtcblxuXHRpZiggISBob3N0LmlzSW5pdCApXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW5zdGFuY2UgaGFzbid0IGJlZW4gaW5pdGlhbGl6ZWQgeWV0LlwiKTtcblxuXHRyZXR1cm4gaG9zdC5MSVNTU3luYztcbn1cbkxJU1MuaW5pdGlhbGl6ZSA9IGFzeW5jIGZ1bmN0aW9uPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PiggZWxlbWVudDogRWxlbWVudCkge1xuXG5cdGF3YWl0IExJU1Mud2hlbkRlZmluZWQoIExJU1MuZ2V0TmFtZShlbGVtZW50KSApO1xuXG5cdHJldHVybiBhd2FpdCAoZWxlbWVudCBhcyBMSVNTSG9zdDxUPikuaW5pdGlhbGl6ZSgpOyAvLyBlbnN1cmUgaW5pdGlhbGl6YXRpb24uXG59XG5cbkxJU1MuZ2V0TmFtZSA9IGZ1bmN0aW9uKCBlbGVtZW50OiBFbGVtZW50ICk6IHN0cmluZyB7XG5cblx0Y29uc3QgbmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpcycpID8/IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcblx0aWYoICEgbmFtZS5pbmNsdWRlcygnLScpIClcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEVsZW1lbnQgJHtuYW1lfSBpcyBub3QgYSBXZWJDb21wb25lbnRgKTtcblxuXHRyZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gX2J1aWxkUVMoc2VsZWN0b3I6IHN0cmluZywgdGFnbmFtZV9vcl9wYXJlbnQ/OiBzdHJpbmcgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsIHBhcmVudDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblx0XG5cdGlmKCB0YWduYW1lX29yX3BhcmVudCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB0YWduYW1lX29yX3BhcmVudCAhPT0gJ3N0cmluZycpIHtcblx0XHRwYXJlbnQgPSB0YWduYW1lX29yX3BhcmVudDtcblx0XHR0YWduYW1lX29yX3BhcmVudCA9IHVuZGVmaW5lZDtcblx0fVxuXG5cdHJldHVybiBbYCR7c2VsZWN0b3J9JHtMSVNTLnNlbGVjdG9yKHRhZ25hbWVfb3JfcGFyZW50IGFzIHN0cmluZ3x1bmRlZmluZWQpfWAsIHBhcmVudF0gYXMgY29uc3Q7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgUXVlcnlTZWxlY3RvcnMgPT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYXN5bmMgZnVuY3Rpb24gcXM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8VD47XG5hc3luYyBmdW5jdGlvbiBxczxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTwgQ29tcG9uZW50c1tOXSA+O1xuYXN5bmMgZnVuY3Rpb24gcXM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRsZXQgcmVzdWx0ID0gYXdhaXQgTElTUy5xc288VD4oc2VsZWN0b3IsIHBhcmVudCk7XG5cdGlmKHJlc3VsdCA9PT0gbnVsbClcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEVsZW1lbnQgJHtzZWxlY3Rvcn0gbm90IGZvdW5kYCk7XG5cblx0cmV0dXJuIHJlc3VsdCFcbn1cbkxJU1MucXMgID0gcXNcblxuYXN5bmMgZnVuY3Rpb24gcXNvPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPFQ+O1xuYXN5bmMgZnVuY3Rpb24gcXNvPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPCBDb21wb25lbnRzW05dID47XG5hc3luYyBmdW5jdGlvbiBxc288VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRjb25zdCBlbGVtZW50ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3I8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblx0aWYoIGVsZW1lbnQgPT09IG51bGwgKVxuXHRcdHJldHVybiBudWxsO1xuXG5cdHJldHVybiBhd2FpdCBMSVNTLmdldExJU1MoIGVsZW1lbnQgKTtcbn1cbkxJU1MucXNvID0gcXNvXG5cbmFzeW5jIGZ1bmN0aW9uIHFzYTxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTxUW10+O1xuYXN5bmMgZnVuY3Rpb24gcXNhPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPCBDb21wb25lbnRzW05dW10gPjtcbmFzeW5jIGZ1bmN0aW9uIHFzYTxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LFxuXHRcdFx0XHRcdFx0cGFyZW50ICA6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cblx0W3NlbGVjdG9yLCBwYXJlbnRdID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBwYXJlbnQpO1xuXG5cdGNvbnN0IGVsZW1lbnRzID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGw8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblxuXHRsZXQgaWR4ID0gMDtcblx0Y29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxUPj4oIGVsZW1lbnRzLmxlbmd0aCApO1xuXHRmb3IobGV0IGVsZW1lbnQgb2YgZWxlbWVudHMpXG5cdFx0cHJvbWlzZXNbaWR4KytdID0gTElTUy5nZXRMSVNTKCBlbGVtZW50ICk7XG5cblx0cmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbn1cbkxJU1MucXNhID0gcXNhO1xuXG5hc3luYyBmdW5jdGlvbiBxc2M8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA6IEVsZW1lbnQpOiBQcm9taXNlPFQ+O1xuYXN5bmMgZnVuY3Rpb24gcXNjPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgOiBFbGVtZW50KTogUHJvbWlzZTwgQ29tcG9uZW50c1tOXSA+O1xuYXN5bmMgZnVuY3Rpb24gcXNjPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50LFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgPzogRWxlbWVudCkge1xuXG5cdGNvbnN0IHJlcyA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgZWxlbWVudCk7XG5cdFxuXHRjb25zdCByZXN1bHQgPSAocmVzWzFdIGFzIHVua25vd24gYXMgRWxlbWVudCkuY2xvc2VzdDxMSVNTSG9zdDxUPj4ocmVzWzBdKTtcblx0aWYocmVzdWx0ID09PSBudWxsKVxuXHRcdHJldHVybiBudWxsO1xuXG5cdHJldHVybiBhd2FpdCBMSVNTLmdldExJU1MocmVzdWx0KTtcbn1cbkxJU1MucXNjID0gcXNjO1xuXG5mdW5jdGlvbiBxc1N5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFQ7XG5mdW5jdGlvbiBxc1N5bmM8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IENvbXBvbmVudHNbTl07XG5mdW5jdGlvbiBxc1N5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRjb25zdCBlbGVtZW50ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3I8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblxuXHRpZiggZWxlbWVudCA9PT0gbnVsbCApXG5cdFx0dGhyb3cgbmV3IEVycm9yKGBFbGVtZW50ICR7c2VsZWN0b3J9IG5vdCBmb3VuZGApO1xuXG5cdHJldHVybiBMSVNTLmdldExJU1NTeW5jKCBlbGVtZW50ICk7XG59XG5MSVNTLnFzU3luYyA9IHFzU3luYztcblxuZnVuY3Rpb24gcXNhU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogVFtdO1xuZnVuY3Rpb24gcXNhU3luYzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogQ29tcG9uZW50c1tOXVtdO1xuZnVuY3Rpb24gcXNhU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LFxuXHRcdFx0XHRcdFx0cGFyZW50ICA6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cblx0W3NlbGVjdG9yLCBwYXJlbnRdID0gX2J1aWxkUVMoc2VsZWN0b3IsIHRhZ25hbWVfb3JfcGFyZW50LCBwYXJlbnQpO1xuXG5cdGNvbnN0IGVsZW1lbnRzID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGw8TElTU0hvc3Q8VD4+KHNlbGVjdG9yKTtcblxuXHRsZXQgaWR4ID0gMDtcblx0Y29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PFQ+KCBlbGVtZW50cy5sZW5ndGggKTtcblx0Zm9yKGxldCBlbGVtZW50IG9mIGVsZW1lbnRzKVxuXHRcdHJlc3VsdFtpZHgrK10gPSBMSVNTLmdldExJU1NTeW5jKCBlbGVtZW50ICk7XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cbkxJU1MucXNhU3luYyA9IHFzYVN5bmM7XG5cbmZ1bmN0aW9uIHFzY1N5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA6IEVsZW1lbnQpOiBUO1xuZnVuY3Rpb24gcXNjU3luYzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdGVsZW1lbnQgIDogRWxlbWVudCk6IENvbXBvbmVudHNbTl07XG5mdW5jdGlvbiBxc2NTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50LFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgPzogRWxlbWVudCkge1xuXG5cdGNvbnN0IHJlcyA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgZWxlbWVudCk7XG5cdFxuXHRjb25zdCByZXN1bHQgPSAocmVzWzFdIGFzIHVua25vd24gYXMgRWxlbWVudCkuY2xvc2VzdDxMSVNTSG9zdDxUPj4ocmVzWzBdKTtcblx0aWYocmVzdWx0ID09PSBudWxsKVxuXHRcdHJldHVybiBudWxsO1xuXG5cdHJldHVybiBMSVNTLmdldExJU1NTeW5jKHJlc3VsdCk7XG59XG5MSVNTLnFzY1N5bmMgPSBxc2NTeW5jO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIEF1dG8gPT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBjbGFzcyBMSVNTX0F1dG8gZXh0ZW5kcyBMSVNTKHthdHRyaWJ1dGVzOiBbXCJzcmNcIl19KSB7XG5cblx0cmVhZG9ubHkgI2tub3duX3RhZyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXHRyZWFkb25seSAjZGlyZWN0b3J5OiBzdHJpbmc7XG5cdHJlYWRvbmx5ICNzdzogUHJvbWlzZTx2b2lkPjtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLiNzdyA9IG5ldyBQcm9taXNlKCBhc3luYyAocmVzb2x2ZSkgPT4ge1xuXHRcdFx0XG5cdFx0XHRhd2FpdCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihgLi9zdy5qc2ApO1xuXG5cdFx0XHRpZiggbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlciApXG5cdFx0XHRcdHJlc29sdmUoKTtcblxuXHRcdFx0bmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignY29udHJvbGxlcmNoYW5nZScsICgpID0+IHtcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblxuXHRcdGNvbnN0IHNyYyA9IHRoaXMuYXR0cnMuc3JjO1xuXHRcdGlmKHNyYyA9PT0gbnVsbClcblx0XHRcdHRocm93IG5ldyBFcnJvcihcInNyYyBhdHRyaWJ1dGUgaXMgbWlzc2luZy5cIik7XG5cdFx0dGhpcy4jZGlyZWN0b3J5ID0gc3JjWzBdID09PSAnLidcblx0XHRcdFx0XHRcdFx0XHQ/IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0vJHtzcmN9YFxuXHRcdFx0XHRcdFx0XHRcdDogc3JjO1xuXG5cdFx0bmV3IE11dGF0aW9uT2JzZXJ2ZXIoIChtdXRhdGlvbnMpID0+IHtcblxuXHRcdFx0Zm9yKGxldCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpXG5cdFx0XHRcdGZvcihsZXQgYWRkaXRpb24gb2YgbXV0YXRpb24uYWRkZWROb2Rlcylcblx0XHRcdFx0XHRpZihhZGRpdGlvbiBpbnN0YW5jZW9mIEVsZW1lbnQpXG5cdFx0XHRcdFx0XHR0aGlzLiNhZGRUYWcoYWRkaXRpb24udGFnTmFtZSlcblxuXHRcdH0pLm9ic2VydmUoIGRvY3VtZW50LCB7IGNoaWxkTGlzdDp0cnVlLCBzdWJ0cmVlOnRydWUgfSk7XG5cblxuXHRcdGZvciggbGV0IGVsZW0gb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIipcIikgKVxuXHRcdFx0dGhpcy4jYWRkVGFnKGVsZW0udGFnTmFtZSk7XG5cdH1cblxuXG4gICAgcHJvdGVjdGVkIHJlc291cmNlcygpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0XCJpbmRleC5qc1wiLFxuXHRcdFx0XCJpbmRleC5odG1sXCIsXG5cdFx0XHRcImluZGV4LmNzc1wiXG5cdFx0XTtcbiAgICB9XG5cblx0cHJvdGVjdGVkIGRlZmluZVdlYkNvbXBvbmVudCh0YWduYW1lOiBzdHJpbmcsIGZpbGVzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBvcHRzOiBQYXJ0aWFsPHtjb250ZW50OiBzdHJpbmcsIGNzczogc3RyaW5nfT4pIHtcblxuXHRcdGNvbnN0IGpzID0gZmlsZXNbXCJpbmRleC5qc1wiXTtcblx0XHRjb25zdCBjb250ZW50ID0gZmlsZXNbXCJpbmRleC5odG1sXCJdO1xuXG5cdFx0bGV0IGtsYXNzOiBudWxsfCBSZXR1cm5UeXBlPHR5cGVvZiBMSVNTPiA9IG51bGw7XG5cdFx0aWYoIGpzICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0a2xhc3MgPSBqcyhvcHRzKTtcblx0XHRlbHNlIGlmKCBjb250ZW50ICE9PSB1bmRlZmluZWQgKVxuXHRcdFx0a2xhc3MgPSBjbGFzcyBXZWJDb21wb25lbnQgZXh0ZW5kcyBMSVNTKG9wdHMpIHt9O1xuXG5cdFx0aWYoa2xhc3MgPT09IG51bGwpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgZmlsZXMgZm9yIFdlYkNvbXBvbmVudCAke3RhZ25hbWV9LmApO1xuXG5cdFx0cmV0dXJuIExJU1MuZGVmaW5lKHRhZ25hbWUsIGtsYXNzKTtcblx0fVxuXG5cdGFzeW5jICNhZGRUYWcodGFnbmFtZTogc3RyaW5nKSB7XG5cblx0XHR0YWduYW1lID0gdGFnbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0aWYoIHRhZ25hbWUgPT09ICdsaXNzLWF1dG8nIHx8IHRhZ25hbWUgPT09ICdibGlzcy1hdXRvJyB8fCAhIHRhZ25hbWUuaW5jbHVkZXMoJy0nKSB8fCB0aGlzLiNrbm93bl90YWcuaGFzKCB0YWduYW1lICkgKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0dGhpcy4ja25vd25fdGFnLmFkZCh0YWduYW1lKTtcblxuXHRcdGF3YWl0IHRoaXMuI3N3OyAvLyBlbnN1cmUgU1cgaXMgaW5zdGFsbGVkLlxuXG5cdFx0Y29uc3QgZmlsZW5hbWVzID0gdGhpcy5yZXNvdXJjZXMoKTtcblx0XHRjb25zdCByZXNvdXJjZXMgPSBhd2FpdCBQcm9taXNlLmFsbCggZmlsZW5hbWVzLm1hcCggZmlsZSA9PiBmaWxlLmVuZHNXaXRoKCcuanMnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IF9pbXBvcnQgICAoYCR7dGhpcy4jZGlyZWN0b3J5fS8ke3RhZ25hbWV9LyR7ZmlsZX1gLCB0cnVlKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IF9mZXRjaFRleHQoYCR7dGhpcy4jZGlyZWN0b3J5fS8ke3RhZ25hbWV9LyR7ZmlsZX1gLCB0cnVlKSApICk7XG5cblx0XHRjb25zdCBmaWxlczogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBmaWxlbmFtZXMubGVuZ3RoOyArK2kpXG5cdFx0XHRpZiggcmVzb3VyY2VzW2ldICE9PSB1bmRlZmluZWQpXG5cdFx0XHRcdGZpbGVzW2ZpbGVuYW1lc1tpXV0gPSByZXNvdXJjZXNbaV07XG5cblx0XHRjb25zdCBjb250ZW50ID0gZmlsZXNbXCJpbmRleC5odG1sXCJdO1xuXHRcdGNvbnN0IGNzcyAgICAgPSBmaWxlc1tcImluZGV4LmNzc1wiXTtcblxuXHRcdGNvbnN0IG9wdHM6IFBhcnRpYWw8e2NvbnRlbnQ6IHN0cmluZywgY3NzOiBzdHJpbmd9PiA9IHtcblx0XHRcdC4uLmNvbnRlbnQgIT09IHVuZGVmaW5lZCAmJiB7Y29udGVudH0sXG5cdFx0XHQuLi5jc3MgICAgICE9PSB1bmRlZmluZWQgJiYge2Nzc30sXG5cdFx0fTtcblxuXHRcdHJldHVybiB0aGlzLmRlZmluZVdlYkNvbXBvbmVudCh0YWduYW1lLCBmaWxlcywgb3B0cyk7XG5cdFx0XG5cdH1cbn1cbkxJU1MuZGVmaW5lKFwibGlzcy1hdXRvXCIsIExJU1NfQXV0byk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50cyB7XG5cdFwibGlzcy1hdXRvXCI6IExJU1NfQXV0b1xufTtcbi8qXG4gKiBkZWNsYXJlIG1vZHVsZSAnJExJU1MnIHtcbiAqIFx0XHRpbnRlcmZhY2UgQ29tcG9uZW50cyB7XG4gKiBcdFx0XHRcIm5hbWVcIjogY2xhc3NcbiAqIFx0XHR9XG4gKiB9XG4gKi9cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBFdmVudHNUYXJnZXQgPT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIENzdEV2ZW50PEV2ZW50IGV4dGVuZHMgc3RyaW5nLCBBcmdzPiA9IEN1c3RvbUV2ZW50PEFyZ3M+ICYge3R5cGU6IEV2ZW50fTtcblxuZXhwb3J0IGludGVyZmFjZSBFdmVudHNUYXJnZXQ8RXZlbnRzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj57XG5cblx0YWRkRXZlbnRMaXN0ZW5lcjxFdmVudCBleHRlbmRzIEV4Y2x1ZGU8a2V5b2YgRXZlbnRzLCBzeW1ib2x8bnVtYmVyPj4odHlwZTogRXZlbnQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgbGlzdGVuZXI6IG51bGx8ICgoZXY6IENzdEV2ZW50PEV2ZW50LCBFdmVudHNbRXZlbnRdPikgPT4gdm9pZCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgb3B0aW9ucz86IGJvb2xlYW58QWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMpOiB2b2lkO1xuXG5cdGRpc3BhdGNoRXZlbnQ8RXZlbnQgZXh0ZW5kcyBFeGNsdWRlPGtleW9mIEV2ZW50cywgc3ltYm9sfG51bWJlcj4+KGV2ZW50OiBDc3RFdmVudDxFdmVudCwgRXZlbnRzW0V2ZW50XT4pOiBib29sZWFuO1xuXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI8RXZlbnQgZXh0ZW5kcyBFeGNsdWRlPGtleW9mIEV2ZW50cywgc3ltYm9sfG51bWJlcj4+KHR5cGU6IEV2ZW50LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsaXN0ZW5lcjogbnVsbHwgKChldjogQ3N0RXZlbnQ8RXZlbnQsIEV2ZW50c1tFdmVudF0+KSA9PiB2b2lkKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz86IGJvb2xlYW58QWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMpOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgQ3N0bUV2ZW50PEV2ZW50IGV4dGVuZHMgc3RyaW5nLCBBcmdzPiBleHRlbmRzIEN1c3RvbUV2ZW50PEFyZ3M+IHtcblxuXHRvdmVycmlkZSBnZXQgdHlwZSgpOiBFdmVudCB7IHJldHVybiBzdXBlci50eXBlIGFzIEV2ZW50OyB9XG5cblx0Y29uc3RydWN0b3IodHlwZTogRXZlbnQsIGFyZ3M6IEFyZ3MpIHtcblx0XHRzdXBlcih0eXBlLCB7ZGV0YWlsOiBhcmdzfSk7XG5cdH1cbn1cblxuZXhwb3J0IHR5cGUgRXZlbnRzVGFyZ2V0Q3N0cjxFdmVudHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4+ID0gQ29uc3RydWN0b3I8RXZlbnRzVGFyZ2V0PEV2ZW50cz4+O1xuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgaW50ZXJuYWwgdG9vbHMgPT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hSZXNvdXJjZShyZXNvdXJjZTogUmVzb3VyY2V8UHJvbWlzZTxSZXNvdXJjZT4pIHtcblxuXHRyZXNvdXJjZSA9IGF3YWl0IHJlc291cmNlO1xuXG5cdGlmKCAhIChyZXNvdXJjZSBpbnN0YW5jZW9mIFJlc3BvbnNlKSApXG5cdFx0cmVzb3VyY2UgPSBhd2FpdCBmZXRjaChyZXNvdXJjZSk7XG5cblx0cmV0dXJuIGF3YWl0IHJlc291cmNlLnRleHQoKTtcbn1cblxuXG5hc3luYyBmdW5jdGlvbiBfZmV0Y2hUZXh0KHVyaTogc3RyaW5nfFVSTCwgaXNMaXNzQXV0bzogYm9vbGVhbiA9IGZhbHNlKSB7XG5cblx0Y29uc3Qgb3B0aW9ucyA9IGlzTGlzc0F1dG9cblx0XHRcdFx0XHRcdD8ge2hlYWRlcnM6e1wibGlzcy1hdXRvXCI6IFwidHJ1ZVwifX1cblx0XHRcdFx0XHRcdDoge307XG5cblxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVyaSwgb3B0aW9ucyk7XG5cdGlmKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwIClcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXG5cdGlmKCBpc0xpc3NBdXRvICYmIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwic3RhdHVzXCIpISA9PT0gXCI0MDRcIiApXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblxuXHRyZXR1cm4gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xufVxuYXN5bmMgZnVuY3Rpb24gX2ltcG9ydCh1cmk6IHN0cmluZywgaXNMaXNzQXV0bzogYm9vbGVhbiA9IGZhbHNlKSB7XG5cblx0Ly8gdGVzdCBmb3IgdGhlIG1vZHVsZSBleGlzdGFuY2UuXG5cdGlmKGlzTGlzc0F1dG8gJiYgYXdhaXQgX2ZldGNoVGV4dCh1cmksIGlzTGlzc0F1dG8pID09PSB1bmRlZmluZWQgKVxuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cblx0dHJ5IHtcblx0XHRyZXR1cm4gKGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrSWdub3JlOiB0cnVlICovIHVyaSkpLmRlZmF1bHQ7XG5cdH0gY2F0Y2goZSkge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH1cbn1cblxuLy8gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81MTAwMDQ2MS9odG1sLWVsZW1lbnQtdGFnLW5hbWUtZnJvbS1jb25zdHJ1Y3RvclxuY29uc3QgSFRNTENMQVNTX1JFR0VYID0gIC9IVE1MKFxcdyspRWxlbWVudC87XG5jb25zdCBlbGVtZW50TmFtZUxvb2t1cFRhYmxlID0ge1xuICAgICdVTGlzdCc6ICd1bCcsXG4gICAgJ1RhYmxlQ2FwdGlvbic6ICdjYXB0aW9uJyxcbiAgICAnVGFibGVDZWxsJzogJ3RkJywgLy8gdGhcbiAgICAnVGFibGVDb2wnOiAnY29sJywgIC8vJ2NvbGdyb3VwJyxcbiAgICAnVGFibGVSb3cnOiAndHInLFxuICAgICdUYWJsZVNlY3Rpb24nOiAndGJvZHknLCAvL1sndGhlYWQnLCAndGJvZHknLCAndGZvb3QnXSxcbiAgICAnUXVvdGUnOiAncScsXG4gICAgJ1BhcmFncmFwaCc6ICdwJyxcbiAgICAnT0xpc3QnOiAnb2wnLFxuICAgICdNb2QnOiAnaW5zJywgLy8sICdkZWwnXSxcbiAgICAnTWVkaWEnOiAndmlkZW8nLC8vICdhdWRpbyddLFxuICAgICdJbWFnZSc6ICdpbWcnLFxuICAgICdIZWFkaW5nJzogJ2gxJywgLy8sICdoMicsICdoMycsICdoNCcsICdoNScsICdoNiddLFxuICAgICdEaXJlY3RvcnknOiAnZGlyJyxcbiAgICAnRExpc3QnOiAnZGwnLFxuICAgICdBbmNob3InOiAnYSdcbiAgfTtcbmZ1bmN0aW9uIF9lbGVtZW50MnRhZ25hbWUoQ2xhc3M6IHR5cGVvZiBIVE1MRWxlbWVudCk6IHN0cmluZ3xudWxsIHtcblxuXHRpZiggQ2xhc3MgPT09IEhUTUxFbGVtZW50IClcblx0XHRyZXR1cm4gbnVsbDtcblx0XG5cdGxldCBodG1sdGFnID0gSFRNTENMQVNTX1JFR0VYLmV4ZWMoQ2xhc3MubmFtZSkhWzFdO1xuXHRyZXR1cm4gZWxlbWVudE5hbWVMb29rdXBUYWJsZVtodG1sdGFnIGFzIGtleW9mIHR5cGVvZiBlbGVtZW50TmFtZUxvb2t1cFRhYmxlXSA/PyBodG1sdGFnLnRvTG93ZXJDYXNlKClcbn0iLCJpbXBvcnQgTElTUyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbGlicy9MSVNTXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHJ1Y3QvbWVudS50c1wiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHJ1Y3QvY2FsYy9zaGVldC50c1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3RydWN0L2NhbGMvdG9vbGJhci50c1wiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0IH0gZnJvbSBcInN0cnVjdC9jYWxjL3NoZWV0LnRzXCI7XG5pbXBvcnQgeyBDYWxjVG9vbGJhciB9IGZyb20gXCIuLi8uLi8uLi8uLi9zdHJ1Y3QvY2FsYy90b29sYmFyLnRzXCI7XG5cblxuY29uc3Qgc2hlZXRfZm9ybWF0X2NvbnRlbnQgPSBhd2FpdCBMSVNTLnFzPENhbGNTaGVldD4oJyNzaGVldF9mb3JtYXRfY29udGVudCcpO1xuXG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRDZWxscyhcIkExOkYxXCIpLmZvcm1hdChcImJvbGRcIiwgXCJhbGlnbl9jZW50ZXJcIikuY29udGVudCA9IFtcbiAgICBcIlRhaWxsZVwiLCBcIkdyYXNcIiwgXCJJdGFsaXF1ZVwiLCBcIlNvdWxpZ27DqVwiLCBcIkNvdWxldXIgdGV4dGVcIiwgXCJDb3VsZXVyIGZvbmRcIlxuXVxuXG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRDZWxscyhcIkEyOkYyXCIpLmZvcm1hdChcImFsaWduX2NlbnRlclwiKS5jb250ZW50ID0gXCJBXCI7XG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRDZWxscyhcIkEyXCIpLmZvcm1hdCh7Zm9udF9zaXplOiAnMTVwdCd9KTtcbnNoZWV0X2Zvcm1hdF9jb250ZW50LmdldENlbGxzKFwiQjJcIikuZm9ybWF0KCdib2xkJyk7XG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRDZWxscyhcIkMyXCIpLmZvcm1hdCgnaXRhbGljJyk7XG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRDZWxscyhcIkQyXCIpLmZvcm1hdCgndW5kZXJsaW5lJyk7XG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRDZWxscyhcIkUyXCIpLmZvcm1hdCh7Zm9yZWdyb3VuZF9jb2xvcjogJ2JsdWUnfSk7XG5zaGVldF9mb3JtYXRfY29udGVudC5nZXRDZWxscyhcIkYyXCIpLmZvcm1hdCh7YmFja2dyb3VuZF9jb2xvcjogJ3llbGxvdyd9KTtcblxuY29uc3Qgc2hlZXRfdG9vbGJhcl9mb3JtYXRfY29udGVudCA9IGF3YWl0IExJU1MucXM8Q2FsY1Rvb2xiYXI+KCcjc2hlZXRfdG9vbGJhcl9mb3JtYXRfY29udGVudCcpO1xuc2hlZXRfdG9vbGJhcl9mb3JtYXRfY29udGVudC5zeW5jVG8oc2hlZXRfZm9ybWF0X2NvbnRlbnQpO1xuXG4iLCJpbXBvcnQgTElTUyBmcm9tIFwiLi4vLi4vLi4vbGlicy9MSVNTXCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGwsIENlbGxMaXN0LCBkZWZhdWx0Rm9ybWF0IH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuZXhwb3J0IGNsYXNzIEZvcm1hdE1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKHNoZWV0OiBDYWxjU2hlZXQpIHtcblxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHNoZWV0LmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldjogS2V5Ym9hcmRFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICBpZiggISBldi5jdHJsS2V5IClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdiJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJib2xkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJ2knKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChcIml0YWxpY1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICd1Jykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJ1bmRlcmxpbmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnbCcpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KFwiYWxpZ25fbGVmdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdyJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJhbGlnbl9yaWdodFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICdlJykge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoXCJhbGlnbl9jZW50ZXJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggZXYua2V5ID09PSAnNCcgJiYgZXYuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24udG9nZ2xlRm9ybWF0KEZvcm1hdHMuZXVyb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gJzUnICYmIGV2LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2hlZXQuc2VsZWN0aW9uLnRvZ2dsZUZvcm1hdChGb3JtYXRzLnBvdXJjZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBldi5rZXkgPT09ICcxJyAmJiBldi5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNoZWV0LnNlbGVjdGlvbi50b2dnbGVGb3JtYXQoRm9ybWF0cy5udW1iZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihjaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzaGVldC5zZWxlY3Rpb24uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICAgICAgLyogVE9ETyBsaXN0ZW4gKi9cblxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEZvcm1hdHMgPSB7XG4gICAgZXVyb3M6IGZ1bmN0aW9uKHRoaXM6Q2VsbCwgdmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuXG4gICAgICAgIGNvbnN0IHByZWMgPSArKHRoaXMuZ2V0QXR0cmlidXRlKCdwcmVjaXNpb24nKSA/PyAyKTtcblxuICAgICAgICByZXR1cm4gdmFsdWUudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XG4gICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHByZWMsXG4gICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNcbiAgICAgICAgICAgIH0pICsgJ+KCrCc7XG4gICAgICAgIC8vLnRvRml4ZWQoMikgKyAn4oKsJztcbiAgICB9LFxuICAgIHBvdXJjZW50OiBmdW5jdGlvbih0aGlzOkNlbGwsIHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYodmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiAnJztcblxuICAgICAgICBjb25zdCBwcmVjID0gKyh0aGlzLmdldEF0dHJpYnV0ZSgncHJlY2lzaW9uJykgPz8gMik7XG5cbiAgICAgICAgcmV0dXJuICh2YWx1ZSAqIDEwMCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XG4gICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHByZWMsXG4gICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNcbiAgICAgICAgICAgIH0pICsgJyUnO1xuICAgICAgICAvLy50b0ZpeGVkKDIpICsgJ+KCrCc7XG4gICAgfSxcbiAgICBudW1iZXI6IGZ1bmN0aW9uKHRoaXM6Q2VsbCwgdmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuXG4gICAgICAgIGNvbnN0IHByZWMgPSArKHRoaXMuZ2V0QXR0cmlidXRlKCdwcmVjaXNpb24nKSA/PyAyKTtcblxuICAgICAgICByZXR1cm4gdmFsdWUudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XG4gICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHByZWMsXG4gICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvcm1hdCB7XG5cbiAgICAjZm9ybWF0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoZm9ybWF0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgICAgIHRoaXMuI2Zvcm1hdCA9IGZvcm1hdDtcbiAgICB9XG5cbiAgICBhcHBseVRvKGNlbGw6IENlbGx8Q2VsbExpc3QpIHtcblxuICAgICAgICBpZiggY2VsbCBpbnN0YW5jZW9mIENlbGxMaXN0KSB7XG5cbiAgICAgICAgICAgIGZvcihsZXQgYyBvZiBjZWxsLmNlbGxzKVxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlUbyhjKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCBuYW1lIGluIHRoaXMuI2Zvcm1hdCkge1xuICAgICAgICAgICAgbGV0IHZhbCA9IHRoaXMuI2Zvcm1hdFtuYW1lXTtcblxuICAgICAgICAgICAgaWYobmFtZSA9PT0gJ2Zvcm1hdCcpIHtcblxuICAgICAgICAgICAgICAgIGlmKCB2YWwgPT09IG51bGwpIHtcblxuICAgICAgICAgICAgICAgICAgICBjZWxsLmZvcm1hdCA9IGRlZmF1bHRGb3JtYXQ7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBjZWxsLmZvcm1hdCggY2VsbC5yYXdDb250ZW50KTsgLy9UT0RPOiBpZiBmY3RcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2VsbC5mb3JtYXQgPSB2YWw7XG4gICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGNlbGwuZm9ybWF0KCBjZWxsLnJhd0NvbnRlbnQpOyAvL1RPRE86IGlmIGZjdFxuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKG5hbWUgPT09ICdwcmVjaXNpb24nKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicsIHZhbCk7XG4gICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGNlbGwuZm9ybWF0Py4oIGNlbGwucmF3Q29udGVudCk7IC8vVE9ETzogaWYgZmN0XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCBuYW1lID09PSAnc3BhbicgKSB7XG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHNoZWV0ID0gTElTUy5nZXRMSVNTU3luYyggKGNlbGwuZ2V0Um9vdE5vZGUoKSBhcyBTaGFkb3dSb290KS5ob3N0ICk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoIHZhbFswXSA9PT0gMSAmJiB2YWxbMV0gPT09IDEpIHsgLy8gdW5tZXJnZVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCByID0gK2NlbGwuZ2V0QXR0cmlidXRlKCdyb3dzcGFuJykgPz8gMDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGMgPSArY2VsbC5nZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nKSA/PyAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByOyArK2kpXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgYzsgKytqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gc2hlZXQucmVsYXRpdmVUbyhjZWxsLCBpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGFyZ2V0LmNlbGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgncm93c3BhbicpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgnY29sc3BhbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdyb3dzcGFuJywgYCR7dmFsWzBdfWApO1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgYCR7dmFsWzFdfWApO1xuXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHZhbFswXTsgKytpKVxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdmFsWzFdOyArK2opIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGkgPT09IDAgJiYgaiA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gc2hlZXQucmVsYXRpdmVUbyhjZWxsLCBpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jZWxsID0gY2VsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCB0eXBlb2YgdmFsID09PSBcImJvb2xlYW5cIikge1xuXG4gICAgICAgICAgICAgICAgaWYoIG5hbWUuc3RhcnRzV2l0aCgnYWxpZ25fJykgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYWxpZ25fbGVmdCcpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2FsaWduX2NlbnRlcicpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2FsaWduX3JpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCBuYW1lLnN0YXJ0c1dpdGgoJ3ZhbGlnbl8nKSApIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZ25fdG9wJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWduX21pZGRsZScpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlnbl9ib3R0b20nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUobmFtZSwgdmFsKTtcblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjZWxsLnN0eWxlLnNldFByb3BlcnR5KGAtLSR7bmFtZX1gLCB2YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UHJvcGVydHkobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNmb3JtYXRbbmFtZV07XG4gICAgfVxuICAgIGhhc1Byb3BlcnR5KG5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmFtZSBpbiB0aGlzLiNmb3JtYXQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGV4dHJhY3RGb3JtYXQoY2VsbDogQ2VsbHxDZWxsTGlzdCk6IEZvcm1hdCB7XG4gICAgICAgIFxuICAgICAgICBpZiggY2VsbCBpbnN0YW5jZW9mIENlbGxMaXN0KSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gY2VsbC5jZWxscztcblxuICAgICAgICAgICAgbGV0IGZvcm1hdCA9IEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzWzBdKTtcblxuICAgICAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IGNlbGxzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGYyID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHNbaV0pO1xuXG4gICAgICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gZm9ybWF0LiNmb3JtYXQpXG4gICAgICAgICAgICAgICAgICAgIGlmKCAhIChrZXkgaW4gZjIuI2Zvcm1hdCkgfHwgZjIuI2Zvcm1hdFtrZXldICE9PSBmb3JtYXQuI2Zvcm1hdFtrZXldIClcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBmb3JtYXQuI2Zvcm1hdFtrZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgZm9ybWF0ID0gT2JqZWN0LmZyb21FbnRyaWVzPGFueT4oIFsuLi5jZWxsLmNsYXNzTGlzdC52YWx1ZXMoKV0ubWFwKGUgPT4gW2UsIHRydWVdKSApO1xuICAgICAgICBcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNlbGwuc3R5bGUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBuYW1lID0gY2VsbC5zdHlsZS5pdGVtKGkpO1xuICAgICAgICAgICAgaWYoICEgbmFtZS5zdGFydHNXaXRoKCctLScpIClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIGZvcm1hdFtuYW1lLnNsaWNlKDIpXSA9IGNlbGwuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbHNwYW4gPSArKGNlbGwuZ2V0QXR0cmlidXRlKCdjb2xzcGFuJykgPz8gMSk7XG4gICAgICAgIGNvbnN0IHJvd3NwYW4gPSArKGNlbGwuZ2V0QXR0cmlidXRlKCdyb3dzcGFuJykgPz8gMSk7XG5cbiAgICAgICAgaWYoIGNvbHNwYW4gPiAxIHx8IHJvd3NwYW4gPiAxIClcbiAgICAgICAgICAgIGZvcm1hdC5zcGFuID0gWyByb3dzcGFuLCBjb2xzcGFuIF07XG5cbiAgICAgICAgaWYoICEgKFwiZm9udF9zaXplXCIgaW4gZm9ybWF0KSApXG4gICAgICAgICAgICBmb3JtYXRbJ2ZvbnRfc2l6ZSddID0gJzEwcHQnO1xuXG4gICAgICAgIGlmKCBcImZvcm1hdFwiIGluIGNlbGwpXG4gICAgICAgICAgICBmb3JtYXQuZm9ybWF0ID0gY2VsbC5mb3JtYXQ7XG5cbiAgICAgICAgaWYoIGNlbGwuaGFzQXR0cmlidXRlKCdwcmVjaXNpb24nKSApXG4gICAgICAgICAgICBmb3JtYXQucHJlY2lzaW9uID0gY2VsbC5nZXRBdHRyaWJ1dGUoJ3ByZWNpc2lvbicpO1xuXG4gICAgICAgIHJldHVybiBuZXcgRm9ybWF0KGZvcm1hdCk7XG4gICAgfVxufSIsIi8vVE9ETzogd2VicGFjayBjb25maWcuLi5cbmltcG9ydCBMSVNTIGZyb20gXCIuLi8uLi8uLi9saWJzL0xJU1NcIjtcbmltcG9ydCB7IENhbGNTaGVldCwgQ2VsbCwgQ2VsbExpc3QsIGRlZmF1bHRGb3JtYXQgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5jb25zdCBjc3MgPSBgXG4gICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYgcHJlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKCAxcmVtICsgOHB4ICsgMnB4ICk7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xpYmVyYXRpb24gU2Fucyc7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5cbmV4cG9ydCBjbGFzcyBDYWxjRm9ybXVsYSBleHRlbmRzIExJU1Moe1xuICAgIGNzc1xufSkge1xuXG4gICAgI2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XG4gICAgI3NoZWV0ICAhOiBDYWxjU2hlZXQ7XG4gICAgI2N1cl9jZWxsOiBDZWxsfG51bGwgPSBudWxsO1xuICAgICNvbklucHV0OiAoZXY6IEV2ZW50KSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCggdGhpcy4jaW5wdXQgKTtcblxuICAgICAgICB0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IHtcblxuICAgICAgICAgICAgaWYoIHRoaXMuI2N1cl9jZWxsID09PSBudWxsIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LmN1cnNvci5jb250ZW50ID0gdGhpcy4jaW5wdXQudGV4dENvbnRlbnQhO1xuICAgICAgICAgICAgdGhpcy4jc2hlZXQuc3RhdGVzLmNlbGxfZWRpdC5zdGF0ZSA9IG51bGw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmKCB0aGlzLiNjdXJfY2VsbCA9PT0gbnVsbCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLiNzaGVldC5zdGF0ZXMuY2VsbF9lZGl0LnN0YXRlID0gdGhpcy4jY3VyX2NlbGw7XG4gICAgICAgICAgICAvL3RoaXMuI2N1cl9jZWxsIS50ZXh0Q29udGVudCA9IHRoaXMuI2lucHV0LnRleHRDb250ZW50ITtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiggdGhpcy4jY3VyX2NlbGwgPT09IG51bGwgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwhLnRleHRDb250ZW50ID0gZGVmYXVsdEZvcm1hdCggdGhpcy4jaW5wdXQudGV4dENvbnRlbnQhICk7XG4gICAgICAgICAgICB0aGlzLiNjdXJfY2VsbC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoJ2lucHV0Jywge2RldGFpbDogdHJ1ZX0pICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI29uSW5wdXQgPSAoZXY6IEV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgaWYoIGV2LmRldGFpbCA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCA9IGRlZmF1bHRGb3JtYXQoIHRoaXMuI2N1cl9jZWxsIS50ZXh0Q29udGVudCEgKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzeW5jVG8oc2hlZXQ6IENhbGNTaGVldCkge1xuXG4gICAgICAgIHRoaXMuI3NoZWV0ID0gc2hlZXQ7XG4gICAgICAgIGNvbnN0IGN1cnNvciA9IHRoaXMuI3NoZWV0LmN1cnNvcjtcblxuICAgICAgICBjdXJzb3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKF86IGFueSkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IGN1cnNvci5jZWxscztcblxuICAgICAgICAgICAgdGhpcy4jaW5wdXQudG9nZ2xlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCBjZWxscy5sZW5ndGggIT09IDApO1xuXG4gICAgICAgICAgICBpZiggY2VsbHMubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggdGhpcy4jY3VyX2NlbGwgIT09IG51bGwgKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNjdXJfY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuI29uSW5wdXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsID0gY2VsbHNbMF07XG4gICAgICAgICAgICB0aGlzLiNjdXJfY2VsbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuI29uSW5wdXQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCA9IGRlZmF1bHRGb3JtYXQoIHRoaXMuI2N1cl9jZWxsLnJhd0NvbnRlbnQgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbkxJU1MuZGVmaW5lKCdjYWxjLWZvcm11bGEnLCBDYWxjRm9ybXVsYSk7IiwiaW1wb3J0IHsgQ2FsY1NoZWV0LCBkZWZhdWx0Rm9ybWF0LCBWYWx1ZVR5cGUgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5leHBvcnQgY2xhc3MgRm9ybXVsYSB7XG5cbiAgICAjc3RyOiBzdHJpbmc7XG4gICAgI2V4ZWM6IChzaGVldDogQ2FsY1NoZWV0KSA9PiBWYWx1ZVR5cGU7XG4gICAgI3JhbmdlczogVG9rZW5bXTtcblxuICAgIGNvbnN0cnVjdG9yKHN0cjogc3RyaW5nLCBleGVjOiAoc2hlZXQ6IENhbGNTaGVldCkgPT4gVmFsdWVUeXBlLCByYW5nZXNfdG9rZW46IFRva2VuW10gPSBbXSkge1xuXG4gICAgICAgIHRoaXMuI3N0ciA9IHN0cjtcbiAgICAgICAgdGhpcy4jZXhlYyA9IGV4ZWM7XG4gICAgICAgIHRoaXMuI3JhbmdlcyA9IHJhbmdlc190b2tlbjtcbiAgICB9XG4gICAgXG4gICAgcmVsYXRpdmVUbyggc2hlZXQ6IENhbGNTaGVldCwgZHJvdzogbnVtYmVyLCBkY29sOiBudW1iZXIpIHtcbiAgICAgICAgXG4gICAgICAgIGxldCBuZXdfcmFuZ2VzID0gdGhpcy4jcmFuZ2VzLm1hcChyID0+IHtcblxuICAgICAgICAgICAgLy9UT0RPOiBpZiByYW5nZS4uLlxuICAgICAgICAgICAgbGV0IHBvcyA9IFsuLi5zaGVldC5jZWxsUG9zKCBzaGVldC5nZXRDZWxscyhyLnZhbHVlKS5jZWxsc1swXSApXTtcbiAgICBcbiAgICAgICAgICAgIGlmKCByLnZhbHVlLmxhc3RJbmRleE9mKCckJykgPD0gMCApXG4gICAgICAgICAgICAgICAgcG9zWzBdICs9IGRyb3c7XG4gICAgICAgICAgICBpZiggci52YWx1ZVswXSAhPT0gJyQnIClcbiAgICAgICAgICAgICAgICBwb3NbMV0gKz0gZGNvbDtcblxuICAgICAgICAgICAgcmV0dXJuIGAke1N0cmluZy5mcm9tQ2hhckNvZGUoNjUrcG9zWzFdLTEpfSR7cG9zWzBdfWA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBuZXdfZm9ybXVsYSA9IFwiXCI7XG5cbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLiNyYW5nZXMubGVuZ3RoOyArK2kpIHtcblxuICAgICAgICAgICAgbmV3X2Zvcm11bGEgKz0gdGhpcy4jc3RyLnNsaWNlKG9mZnNldCwgdGhpcy4jcmFuZ2VzW2ldLmJlZyk7XG4gICAgICAgICAgICBuZXdfZm9ybXVsYSArPSBuZXdfcmFuZ2VzW2ldO1xuXG4gICAgICAgICAgICBvZmZzZXQgPSB0aGlzLiNyYW5nZXNbaV0uZW5kO1xuICAgICAgICB9XG4gICAgICAgIG5ld19mb3JtdWxhICs9IHRoaXMuI3N0ci5zbGljZShvZmZzZXQpO1xuICAgICAgICBcbiAgICAgICAgLy9jYW4gYmUgb3B0aW1pemVkLi4uXG4gICAgICAgIHJldHVybiBwYXJzZV9mb3JtdWxhKCBuZXdfZm9ybXVsYSApO1xuICAgIH1cblxuICAgIGdldCByYW5nZXNUb2tlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3JhbmdlcztcbiAgICB9XG5cbiAgICBleGVjKHNoZWV0OiBDYWxjU2hlZXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2V4ZWMoc2hlZXQpO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jc3RyO1xuICAgIH1cbn1cblxudHlwZSBUb2tlbiA9IHtcbiAgICBiZWc6IG51bWJlcixcbiAgICBlbmQ6IG51bWJlcixcbiAgICB2YWx1ZTogc3RyaW5nLFxuICAgIHR5cGU6IFwic3RyaW5nXCJ8XCJudW1iZXJcInxcImNhbGxcInxcInJhbmdlXCJ8XCJvcFwiXG59XG5cblxuZnVuY3Rpb24gZXh0cmFjdFRva2VuKHN0cjogc3RyaW5nLCBvZmZzZXQ6IG51bWJlcikge1xuXG4gICAgd2hpbGUoIFsnICcsICdcXG4nLCAnXFx0J10uaW5jbHVkZXMoc3RyW29mZnNldF0pICkgLy8gaWdub3JlIHdoaXRlc3BhY2VzXG4gICAgICAgICsrb2Zmc2V0O1xuXG4gICAgbGV0IHRva2VuOiBQYXJ0aWFsPFRva2VuPiA9IHtcbiAgICAgICAgYmVnOiBvZmZzZXRcbiAgICB9O1xuXG4gICAgaWYoc3RyW29mZnNldF0gPT09ICdcIicpIHtcbiAgICAgICAgdG9rZW4udHlwZSA9IFwic3RyaW5nXCI7XG4gICAgICAgIHdoaWxlKCBzdHJbKytvZmZzZXRdICE9PSAnXCInICYmIHN0cltvZmZzZXQtMV0gIT09ICdcXFxcJykge1xuICAgICAgICAgICAgaWYob2Zmc2V0KzEgPj0gc3RyLmxlbmd0aCApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JtdWxhIHBhcnNpbmcgZXJyb3InKTtcbiAgICAgICAgfVxuICAgICAgICArK29mZnNldDtcbiAgICB9IGVsc2UgaWYoIHN0cltvZmZzZXRdID09PSAnLCcgfHwgKHN0cltvZmZzZXRdID49ICcwJyAmJiBzdHJbb2Zmc2V0XSA8PSAnOScpICkge1xuICAgICAgICB0b2tlbi50eXBlID0gXCJudW1iZXJcIjtcbiAgICAgICAgbGV0IGhhc0NvbW1hID0gZmFsc2U7XG4gICAgICAgIHdoaWxlKCBzdHJbb2Zmc2V0XSA9PT0gJywnIHx8IHN0cltvZmZzZXRdID49ICcwJyAmJiBzdHJbb2Zmc2V0XSA8PSAnOScgKSB7XG5cbiAgICAgICAgICAgIGlmKCBzdHJbb2Zmc2V0XSA9PT0gJywnICkge1xuICAgICAgICAgICAgICAgIGlmKGhhc0NvbW1hID09PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Zvcm11bGEgcGFyc2luZyBlcnJvcicpO1xuICAgICAgICAgICAgICAgIGhhc0NvbW1hID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgKytvZmZzZXQ7XG4gICAgICAgIH1cblxuICAgIH0gZWxzZSBpZiggc3RyW29mZnNldF0gPT09ICckJyB8fCBzdHJbb2Zmc2V0XSA+PSAnQScgJiYgc3RyW29mZnNldF0gPD0gJ1onKSB7IC8vKyRcbiAgICAgICAgXG4gICAgICAgIHdoaWxlKCBvZmZzZXQgPCBzdHIubGVuZ3RoXG4gICAgICAgICAgICAgICAgJiYgKHN0cltvZmZzZXRdID09PSAnJCcgfHwgc3RyW29mZnNldF0gPj0gJ0EnICYmIHN0cltvZmZzZXRdIDw9ICdaJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHN0cltvZmZzZXRdID49ICcwJyAmJiBzdHJbb2Zmc2V0XSA8PSAnOSdcbiAgICAgICAgICAgICAgICAgICAgKSApXG4gICAgICAgICAgICArK29mZnNldDtcblxuICAgICAgICB0b2tlbi50eXBlID0gc3RyW29mZnNldF0gPT09ICcoJyA/ICdjYWxsJyA6ICdyYW5nZSc7XG5cbiAgICAgICAgaWYoIHN0cltvZmZzZXRdID09PSAnKCcgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3QgaW1wbGVtZW50ZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRva2VuLnR5cGUgPSBcIm9wXCI7IC8vIG9ubHkgb24gY2hhciA/Pz9cblxuICAgICAgICBpZiggc3RyW29mZnNldCArIDFdID09PSAnPScpIC8vID49IC8gPD1cbiAgICAgICAgICAgICsrb2Zmc2V0O1xuICAgICAgICBlbHNlIGlmKCBzdHJbb2Zmc2V0ICsgMV0gPT09ICc+JykgLy8gPD5cbiAgICAgICAgICAgICsrb2Zmc2V0O1xuXG4gICAgICAgICsrb2Zmc2V0O1xuICAgIH1cblxuICAgIHRva2VuLmVuZCA9IG9mZnNldDtcbiAgICB0b2tlbi52YWx1ZSA9IHN0ci5zbGljZSh0b2tlbi5iZWcsIHRva2VuLmVuZCk7XG5cbiAgICByZXR1cm4gdG9rZW4gYXMgUmVxdWlyZWQ8VG9rZW4+O1xufVxuXG5jbGFzcyBOb2RlIHtcblxuICAgIGNoaWxkcmVuOiBOb2RlW107XG4gICAgI2ZjdDogKHNoZWV0OiBDYWxjU2hlZXQsIC4uLmFyZ3M6KFZhbHVlVHlwZSlbXSkgPT4gVmFsdWVUeXBlO1xuXG4gICAgY29uc3RydWN0b3IoZmN0OiAoc2hlZXQ6IENhbGNTaGVldCwgLi4uYXJnczooVmFsdWVUeXBlKVtdKSA9PiBWYWx1ZVR5cGUsIC4uLmNoaWxkcmVuOiBOb2RlW10pIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgICBpZihjaGlsZHJlbiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV1RGXCIpO1xuICAgICAgICB0aGlzLiNmY3QgPSBmY3Q7XG4gICAgfVxuXG4gICAgZXZhbChzaGVldDogQ2FsY1NoZWV0KTogVmFsdWVUeXBlIHtcbiAgICAgICAgY29uc3QgYXJncyA9IHRoaXMuY2hpbGRyZW4ubWFwKCBjID0+IGMuZXZhbChzaGVldCkgKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2ZjdChzaGVldCwgLi4uYXJncyApO1xuICAgIH1cbiAgICBcbn1cblxuZnVuY3Rpb24gdG9OdW1iZXIoYTogdW5rbm93bik6IG51bWJlciB7XG5cbiAgICBpZihhID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiAwO1xuICAgIHJldHVybiBhIGFzIHVua25vd24gYXMgbnVtYmVyO1xufVxuXG5jb25zdCBvcF9pbXBsID0ge1xuICAgICclJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93bikgPT4gdG9OdW1iZXIoYSkvMTAwLFxuICAgICd1LisnOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duKSA9PiArdG9OdW1iZXIoYSksXG4gICAgJ3UuLSc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24pID0+IC10b051bWJlcihhKSxcbiAgICAnKic6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24sIGI6IHVua25vd24pID0+IHRvTnVtYmVyKGEpKnRvTnVtYmVyKGIpLFxuICAgICcvJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93biwgYjogdW5rbm93bikgPT4gdG9OdW1iZXIoYSkvdG9OdW1iZXIoYiksXG4gICAgJysnOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiB0b051bWJlcihhKSt0b051bWJlcihiKSxcbiAgICAnLSc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24sIGI6IHVua25vd24pID0+IHRvTnVtYmVyKGEpLXRvTnVtYmVyKGIpLFxuICAgICdeJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93biwgYjogdW5rbm93bikgPT4gTWF0aC5wb3codG9OdW1iZXIoYSksdG9OdW1iZXIoYikgKSxcbiAgICAnJic6IChfOiBDYWxjU2hlZXQsIGE6IHN0cmluZywgYjogc3RyaW5nKSA9PiBgJHtkZWZhdWx0Rm9ybWF0KGEpfSR7ZGVmYXVsdEZvcm1hdChiKX1gLFxuICAgICc9JzogIChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhID09PSBiLFxuICAgICc8Pic6IChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhICE9PSBiLFxuICAgICc+JzogIChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhID4gYixcbiAgICAnPj0nOiAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSA+PSBiLFxuICAgICc8JzogIChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhIDwgYixcbiAgICAnPD0nOiAoXzogQ2FsY1NoZWV0LCBhOiBhbnksIGI6IGFueSkgPT4gYSA8PSBiLFxufSBhcyBSZWNvcmQ8c3RyaW5nLCAoXzogQ2FsY1NoZWV0LCAuLi5hcmdzOlZhbHVlVHlwZVtdKSA9PiBWYWx1ZVR5cGU+O1xuXG4vLyBodHRwczovL2hlbHAubGlicmVvZmZpY2Uub3JnL2xhdGVzdC9lbi1VUy90ZXh0L3NjYWxjLzAxLzA0MDYwMTk5Lmh0bWxcbmNvbnN0IG9wX3ByaW8gPSBbXG4gICAgWyc6J10sIC8vIHJhbmdlXG4gICAgWychJ10sIC8vIHJhbmdlIGludGVyc2VjdGlvblxuICAgIFsnfiddLCAvLyByYW5nZSB1bmlvblxuICAgIFsndS4rJywgJ3UuLSddLCAvLyB1bmFyeSAtIGZyb20gcmlnaHQgdG8gbGVmdC4uLlxuICAgIFsnJSddLCAvLyBwb3N0Zml4LCAvMTAwXG4gICAgWydeJ10sIC8vIHBvd2VyXG4gICAgWycqJywgJy8nXSxcbiAgICBbJysnLCAnLSddLFxuICAgIFsnJiddLCAvLyBzdHJpbmcgY29uY2F0XG4gICAgWyc9JywgJzw+JywgJzwnLCAnPD0nLCAnPicsICc+PSddIC8vIGNvbXBhcmVcbl07XG5cbmxldCBvcHM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fTtcbmZvcihsZXQgaSA9IDA7IGkgPCBvcF9wcmlvLmxlbmd0aDsgKytpKVxuICAgIGZvcihsZXQgb3Agb2Ygb3BfcHJpb1tpXSApXG4gICAgICAgIG9wc1tvcF0gPSBpO1xuXG5mdW5jdGlvbiB0b2tlbmxpc3QyVHJlZSh0b2tlbnM6IFRva2VuW10pOiBOb2RlIHtcblxuICAgIGlmKCB0b2tlbnMubGVuZ3RoID09PSAxKSB7XG5cbiAgICAgICAgaWYoIHRva2Vuc1swXS50eXBlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBjb25zdCBuYiA9ICt0b2tlbnNbMF0udmFsdWUucmVwbGFjZSgnLCcsICcuJyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vZGUoICgpID0+IG5iKTtcbiAgICAgICAgfVxuICAgICAgICBpZiggdG9rZW5zWzBdLnR5cGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0ciA9IHRva2Vuc1swXS52YWx1ZS5zbGljZSgxLC0xKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTm9kZSggKCkgPT4gc3RyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiggdG9rZW5zWzBdLnR5cGUgPT09IFwicmFuZ2VcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBOb2RlKCAoc2hlZXQ6IENhbGNTaGVldCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IHJhdyA9IHNoZWV0LmdldENlbGxzKHRva2Vuc1swXS52YWx1ZSkuY2VsbHNbMF0ucmF3Q29udGVudDtcblxuICAgICAgICAgICAgICAgIGlmKCByYXcgaW5zdGFuY2VvZiBGb3JtdWxhKVxuICAgICAgICAgICAgICAgICAgICByYXcgPSByYXcuZXhlYyhzaGVldCk7IC8vIFRPRE86IGNhY2hlIHJlc3VsdFxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJhdyBhcyBWYWx1ZVR5cGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCI/Pz9cIik7XG4gICAgfVxuXG4gICAgaWYodG9rZW5zWzBdLnZhbHVlID09PSAnKCcgJiYgdG9rZW5zW3Rva2Vucy5sZW5ndGgtMV0udmFsdWUgPT09ICcpJylcbiAgICAgICAgcmV0dXJuIHRva2VubGlzdDJUcmVlKHRva2Vucy5zbGljZSgxLC0xKSApO1xuXG4gICAgbGV0IGN1ciA9IHtcbiAgICAgICAgcHJpb3JpdHk6IG9wX3ByaW8ubGVuZ3RoLFxuICAgICAgICBpZHggICAgIDogLTFcbiAgICB9O1xuXG4gICAgZm9yKGxldCBpID0gdG9rZW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIGlmKCB0b2tlbnNbaV0udHlwZSAhPT0gXCJvcFwiICkgLy8gY2FsbCBub3QgaGFuZGxlZCB5ZXQuLi5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgIGlmKCB0b2tlbnNbaV0udmFsdWUgPT09ICcpJyApIHsgLy8gZ28gdG8gZmlyc3QgJygnXG4gICAgICAgICAgICBpID0gdG9rZW5zLmZpbmRJbmRleCggdCA9PiB0LnR5cGUgPT09ICdvcCcgJiYgdC52YWx1ZSA9PT0gJygnKTtcblxuICAgICAgICAgICAgaWYoIGkgPT09IDApXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAtLWk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhc3NlcnRzIGlmIHVuYXJ5IG9wLlxuICAgICAgICBpZiggdG9rZW5zW2ldLnZhbHVlID09PSAnLScgfHwgdG9rZW5zW2ldLnZhbHVlID09PSAnKycgKSB7XG5cbiAgICAgICAgICAgIGlmKCBpID09PSAwIHx8IHRva2Vuc1tpLTFdLnR5cGUgPT09IFwib3BcIiApIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHVfb3AgPSBgdS4ke3Rva2Vuc1tpXS52YWx1ZX1gO1xuICAgICAgICAgICAgICAgIHRva2Vuc1tpXS52YWx1ZSA9IHVfb3A7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBvcHNbdV9vcF07XG5cbiAgICAgICAgICAgICAgICAvLyBwcmlvcml0eSBpcyByZXZlcnNlZCArIGV2YWx1YXRlZCBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gICAgICAgICAgICAgICAgaWYoIHByaW9yaXR5IDw9IGN1ci5wcmlvcml0eSkge1xuICAgICAgICAgICAgICAgICAgICBjdXIucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgICAgICAgICAgICAgY3VyLmlkeCAgICAgID0gaTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gb3BzW3Rva2Vuc1tpXS52YWx1ZV07XG5cbiAgICAgICAgLy8gcHJpb3JpdHkgaXMgcmV2ZXJzZWQuXG4gICAgICAgIGlmKCBwcmlvcml0eSA8IGN1ci5wcmlvcml0eSkge1xuICAgICAgICAgICAgY3VyLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgICAgICBjdXIuaWR4ICAgICAgPSBpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoIGN1ci5pZHggPT09IC0xKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJz8/PycpO1xuXG4gICAgbGV0IG9wX3Rva2VuID0gdG9rZW5zW2N1ci5pZHhdO1xuICAgIGlmKCBvcF90b2tlbi52YWx1ZSA9PT0gJyUnICkge1xuICAgICAgICBjb25zdCBsZWZ0ICA9IHRva2Vucy5zbGljZSgwLCBjdXIuaWR4KTtcbiAgICAgICAgY29uc3Qgb3AgPSBvcF9pbXBsW29wX3Rva2VuLnZhbHVlIGFzIGtleW9mIHR5cGVvZiBvcF9pbXBsXTtcbiAgICAgICAgcmV0dXJuIG5ldyBOb2RlKFxuICAgICAgICAgICAgb3AsXG4gICAgICAgICAgICB0b2tlbmxpc3QyVHJlZShsZWZ0KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlmKCBvcF90b2tlbi52YWx1ZSA9PT0gJ3UuLScgfHwgIG9wX3Rva2VuLnZhbHVlID09PSAndS4rJyApIHtcblxuICAgICAgICBjb25zdCByaWdodCAgPSB0b2tlbnMuc2xpY2UoY3VyLmlkeCsxKTtcbiAgICAgICAgY29uc3Qgb3AgPSBvcF9pbXBsW29wX3Rva2VuLnZhbHVlIGFzIGtleW9mIHR5cGVvZiBvcF9pbXBsXTtcbiAgICAgICAgcmV0dXJuIG5ldyBOb2RlKFxuICAgICAgICAgICAgb3AsXG4gICAgICAgICAgICB0b2tlbmxpc3QyVHJlZShyaWdodClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBsZWZ0ICA9IHRva2Vucy5zbGljZSgwLCBjdXIuaWR4KTtcbiAgICBjb25zdCByaWdodCA9IHRva2Vucy5zbGljZShjdXIuaWR4KzEpO1xuXG4gICAgY29uc3Qgb3AgPSBvcF9pbXBsW29wX3Rva2VuLnZhbHVlIGFzIGtleW9mIHR5cGVvZiBvcF9pbXBsXTtcblxuICAgIHJldHVybiBuZXcgTm9kZShcbiAgICAgICAgb3AsXG4gICAgICAgIHRva2VubGlzdDJUcmVlKGxlZnQpLFxuICAgICAgICB0b2tlbmxpc3QyVHJlZShyaWdodClcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VfZm9ybXVsYShzdHI6c3RyaW5nKSB7XG5cbiAgICBsZXQgb2Zmc2V0ID0gMTtcbiAgICBsZXQgdG9rZW5zID0gbmV3IEFycmF5PFRva2VuPigpO1xuXG4gICAgd2hpbGUoIG9mZnNldCA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGN1clRva2VuID0gZXh0cmFjdFRva2VuKHN0ciwgb2Zmc2V0KTtcbiAgICAgICAgdG9rZW5zLnB1c2goIGN1clRva2VuICk7XG4gICAgICAgIG9mZnNldCA9IGN1clRva2VuLmVuZDtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gdG9rZW5saXN0MlRyZWUodG9rZW5zKSE7XG5cbiAgICBjb25zdCByYW5nZXMgPSB0b2tlbnMuZmlsdGVyKHQgPT4gdC50eXBlID09PSBcInJhbmdlXCIgKTtcblxuICAgIHJldHVybiBuZXcgRm9ybXVsYShzdHIsIChzaGVldDogQ2FsY1NoZWV0KSA9PiBub2RlLmV2YWwoc2hlZXQpLCByYW5nZXMgKTtcbn0iLCIvL1RPRE86IHdlYnBhY2sgY29uZmlnLi4uXG5pbXBvcnQgTElTUyBmcm9tIFwiLi4vLi4vLi4vbGlicy9MSVNTXCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGxMaXN0LCBkZWZhdWx0Rm9ybWF0IH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuLy9UT0RPOiBzeW50YXggaGlnaGxpZ2h0IDspXG5cbmNvbnN0IGNzcyA9IGBcbiAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgJiBwcmUge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoIDFyZW0gKyA4cHggKyAycHggKTtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGliZXJhdGlvbiBTYW5zJztcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmV4cG9ydCBjbGFzcyBQbGFnZUZvcm11bGEgZXh0ZW5kcyBMSVNTKHtcbiAgICBjc3Ncbn0pIHtcblxuICAgICNpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCggdGhpcy4jaW5wdXQgKTtcbiAgICAgICAgdGhpcy4jaW5wdXQudG9nZ2xlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcblxuICAgICAgICB0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2KSA9PiB7XG4gICAgICAgICAgICBpZihldi5jb2RlICE9PSAnRW50ZXInKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgZXYuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuI3NoZWV0LmdldENlbGxzKHRoaXMuI2lucHV0LnRleHRDb250ZW50ISkuY2VsbHM7XG5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmFkZCggLi4uc2VsZWN0ZWQgKTtcblxuICAgICAgICAgICAgdGhpcy4jc2hlZXQuY3Vyc29yLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLiNzaGVldC5jdXJzb3IuYWRkKCBzZWxlY3RlZFswXSApO1xuXG4gICAgICAgICAgICB0aGlzLiNpbnB1dC5ibHVyKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy9UT0RPLi4uLlxuICAgICAgICB0aGlzLiNpbnB1dC50b2dnbGVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIC8qdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuXG4gICAgICAgIH0pOyovXG4gICAgfVxuXG4gICAgI3NoZWV0ITogQ2FsY1NoZWV0O1xuXG4gICAgc3luY1RvKHNoZWV0OiBDYWxjU2hlZXQpIHtcblxuICAgICAgICB0aGlzLiNzaGVldCA9IHNoZWV0O1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHNoZWV0LnNlbGVjdGlvbjtcblxuICAgICAgICBzZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKF86IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jaW5wdXQudGV4dENvbnRlbnQgPSBzZWxlY3Rpb24ucGxhZ2VfbmFtZSA/PyBcIlwiO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbkxJU1MuZGVmaW5lKCdjYWxjLXBsYWdlJywgUGxhZ2VGb3JtdWxhKTsiLCJpbXBvcnQgeyBDYWxjU2hlZXQsIENlbGwgfSBmcm9tIFwiLi9zaGVldFwiO1xuXG5leHBvcnQgY2xhc3MgUGxhZ2VTZWxlY3RvciB7XG5cbiAgICAjdXBkYXRlU2VsZWN0aW9uKCkge1xuXG4gICAgICAgIGxldCBzZWxlY3RlZF9jZWxscyA9IHRoaXMuI3NoZWV0LmdldFJhbmdlKCB0aGlzLiNvcmlnX3BvcywgdGhpcy4jZmluYWxfcG9zICkuY2VsbHM7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmNsZWFyKCk7IC8vIHdlIGFkZCBpdC4uLlxuXG4gICAgICAgIGlmKCB0aGlzLiNpc0N0cmwgKSB7XG5cbiAgICAgICAgICAgIC8vIHJlc3RvcmUgaW5pdGlhbCBzdGF0ZS4uLlxuICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmFkZCguLi50aGlzLiNwcmV2X3NlbGVjdGlvbik7XG5cbiAgICAgICAgICAgIC8vVE9ETyBvbmx5IG9yaWdfdGFyZ2V0Li4uXG4gICAgICAgICAgICBpZih0aGlzLiNzaGVldC5zZWxlY3Rpb24uaGFzKCAuLi5zZWxlY3RlZF9jZWxscyApIClcbiAgICAgICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24ucmVtb3ZlKCAuLi5zZWxlY3RlZF9jZWxscyApO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5hZGQoIC4uLnNlbGVjdGVkX2NlbGxzICk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5hZGQoIC4uLnNlbGVjdGVkX2NlbGxzICk7XG4gICAgfVxuXG4gICAgI2lzQ3RybCAgICAgICAgITogYm9vbGVhbjtcbiAgICAjc2hlZXQgICAgICAgICAgOiBDYWxjU2hlZXQ7XG4gICAgI29yaWdfdGFyZ2V0ICAgITogSFRNTEVsZW1lbnQ7XG4gICAgI29yaWdfcG9zICAgICAgITogW251bWJlciwgbnVtYmVyXTtcbiAgICAjZmluYWxfcG9zICAgICAhOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgICNwcmV2X3NlbGVjdGlvbiE6IENlbGxbXTtcblxuICAgICNldjJwb3MoZXY6IE1vdXNlRXZlbnQpOiBbbnVtYmVyLG51bWJlcl0ge1xuXG4gICAgICAgIGNvbnN0IGNvbHMgPSBbLi4udGhpcy4jc2hlZXQudGJvZHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5dO1xuICAgICAgICBsZXQgY29sX2lkO1xuICAgICAgICBmb3IoY29sX2lkID0gY29scy5sZW5ndGgtMTsgY29sX2lkID49IDA7IC0tY29sX2lkKSB7XG4gICAgICAgICAgICBpZiggZXYuY2xpZW50WCA+PSBjb2xzW2NvbF9pZF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueCApXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJvd3MgPSBbLi4udGhpcy4jc2hlZXQudGJvZHkuY2hpbGRyZW5dLm1hcCggZSA9PiBlLmNoaWxkcmVuWzBdICk7XG4gICAgICAgIGxldCByb3dfaWQ7XG4gICAgICAgIGZvcihyb3dfaWQgPSByb3dzLmxlbmd0aC0xOyByb3dfaWQgPj0gMDsgLS1yb3dfaWQpIHtcbiAgICAgICAgICAgIGlmKCBldi5jbGllbnRZID49IHJvd3Nbcm93X2lkXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55IClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbcm93X2lkLCBjb2xfaWRdO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHNoZWV0OiBDYWxjU2hlZXQpIHtcblxuICAgICAgICB0aGlzLiNzaGVldCA9IHNoZWV0O1xuXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykhO1xuXG4gICAgICAgIGNvbnN0IG9uX21vdXNlX21vdmUgPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgdGhpcy4jZmluYWxfcG9zID0gdGhpcy4jZXYycG9zKGV2KTtcblxuICAgICAgICAgICAgdGhpcy4jdXBkYXRlU2VsZWN0aW9uKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBzaGVldC5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2Ok1vdXNlRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgaWYoIHNoZWV0LnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPT09IHRhcmdldCApICAvLyBhIGNlbGwgYmVpbmcgZWRpdGVkLlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlmKCAhIFtcIlRIXCIsIFwiVERcIl0uaW5jbHVkZXMoIHRhcmdldC50YWdOYW1lICkgKS8vIC4uLlxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lID09PSBcIlRIXCIgJiYgdGFyZ2V0LnRleHRDb250ZW50ID09PSBcIlwiICkgeyAvLyBtb3VzZW1vdmUgZG9lcyBub3RoaW5nLlxuXG4gICAgICAgICAgICAgICAgdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVmID0gYEExOiR7dGhpcy4jc2hlZXQucG9zMnJlZih0aGlzLiNzaGVldC5uYlJvd3MsIHRoaXMuI3NoZWV0Lm5iQ29scyl9YDtcbiAgICAgICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uYWRkKCAuLi50aGlzLiNzaGVldC5nZXRDZWxscyhyZWYpLmNlbGxzICk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuI2lzQ3RybCAgICAgICAgID0gZXYuY3RybEtleTtcbiAgICAgICAgICAgIHRoaXMuI29yaWdfdGFyZ2V0ICAgID0gdGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy4jb3JpZ19wb3MgICAgICAgPSB0aGlzLiNldjJwb3MoZXYpOyAvLyBDYW4gYmUgVEguLi5cbiAgICAgICAgICAgIHRoaXMuI2ZpbmFsX3BvcyAgICAgID0gdGhpcy4jb3JpZ19wb3M7XG4gICAgICAgICAgICB0aGlzLiNwcmV2X3NlbGVjdGlvbiA9IHNoZWV0LnNlbGVjdGlvbi5jZWxscy5zbGljZSgpO1xuXG4gICAgICAgICAgICB0aGlzLiN1cGRhdGVTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25fbW91c2VfbW92ZSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWFpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbl9tb3VzZV9tb3ZlKTtcbiAgICAgICAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxufSIsIi8vVE9ETzogd2VicGFjayBjb25maWcuLi5cbmltcG9ydCBMSVNTIGZyb20gXCIuLi8uLi8uLi9saWJzL0xJU1NcIjtcblxuLy9AdHMtaWdub3JlXG5pbXBvcnQgY3NzIGZyb20gXCIhIXJhdy1sb2FkZXIhLi9pbmRleC5jc3NcIjtcblxuZXhwb3J0IHR5cGUgVmFsdWVUeXBlID0gc3RyaW5nfG51bWJlcnxEYXRlfGJvb2xlYW47XG5leHBvcnQgdHlwZSBSYXdDb250ZW50VHlwZSA9IFZhbHVlVHlwZXxGb3JtdWxhO1xuXG5leHBvcnQgdHlwZSBDZWxsID0gSFRNTFRhYmxlQ2VsbEVsZW1lbnQgJiB7XG4gICAgcmF3Q29udGVudDogUmF3Q29udGVudFR5cGUsXG4gICAgZm9ybWF0OiAodGhpczogQ2VsbCwgdjogc3RyaW5nfG51bWJlcikgPT4gc3RyaW5nLFxuICAgIGlzX3JvOiBib29sZWFuXG59O1xuXG5mdW5jdGlvbiBpc0FjdGl2ZSh0YXJnZXQ6IEhUTUxFbGVtZW50KSB7XG5cbiAgICByZXR1cm4gdGFyZ2V0Lm1hdGNoZXMoJzpmb2N1cycpO1xuLypcbiAgICBsZXQgYWN0aXZlID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgIHdoaWxlKCBhY3RpdmU/LnNoYWRvd1Jvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290IClcbiAgICAgICAgYWN0aXZlID0gYWN0aXZlLnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudDtcblxuICAgIHJldHVybiBhY3RpdmUgPT09IHRhcmdldDsqL1xufVxuXG5mdW5jdGlvbiBvbklucHV0KGV2OiBFdmVudCkge1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgLypcbiAgICBpZiggISBpc0FjdGl2ZSh0YXJnZXQpICkge1xuICAgICAgICB0YXJnZXQuaW5uZXJIVE1MID0gaGlnaGxpZ2h0KHRhcmdldC50ZXh0Q29udGVudCEpO1xuICAgICAgICByZXR1cm47XG4gICAgfSovXG5cbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMTIzNDc0MS9wbGFjZS1jYXJldC1iYWNrLXdoZXJlLWl0LXdhcy1hZnRlci1jaGFuZ2luZy1pbm5lcmh0bWwtb2YtYS1jb250ZW50ZWRpdGFibGUtZWxlbVxuXG4gICAgbGV0IHJyYW5nZSA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSEuZ2V0UmFuZ2VBdCgwKTtcbiAgICBsZXQgYyA9IHJyYW5nZS5zdGFydE9mZnNldDtcblxuICAgIC8vbGV0IHRleHQgPSBcIlwiO1xuICAgIGxldCBsZW5ndGggPSAwO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXJnZXQuY2hpbGROb2Rlcy5sZW5ndGg7ICsraSkge1xuXG4gICAgICAgIGxldCBjaGlsZCA9IHRhcmdldC5jaGlsZE5vZGVzW2ldO1xuICAgICAgICBpZiggY2hpbGQubm9kZVR5cGUgIT09IE5vZGUuVEVYVF9OT0RFKVxuICAgICAgICAgICAgY2hpbGQgPSBjaGlsZC5jaGlsZE5vZGVzWzBdO1xuXG4gICAgICAgIGlmKCBycmFuZ2Uuc3RhcnRDb250YWluZXIgPT09IGNoaWxkICkge1xuICAgICAgICAgICAgLy90ZXh0ICs9IHAuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudCEuc2xpY2UoMCwgYyk7XG4gICAgICAgICAgICBsZW5ndGggKz0gYztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vdGV4dCArPSBwLmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQ7XG4gICAgICAgIGxlbmd0aCArPSB0YXJnZXQuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudCEubGVuZ3RoO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBpbm5lckhUTUxcbiAgICAvL3RhcmdldC5pbm5lckhUTUwgPSBoaWdobGlnaHQodGFyZ2V0LnRleHRDb250ZW50ISk7XG4gICAgdGFyZ2V0LnRleHRDb250ZW50ID0gdGFyZ2V0LnRleHRDb250ZW50O1xuXG4gICAgbGV0IGNoaWxkITogQ2hpbGROb2RlO1xuICAgIGxldCBpO1xuICAgIGZvcihpID0gMDsgaSA8IHRhcmdldC5jaGlsZE5vZGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmKCBsZW5ndGggPD0gdGFyZ2V0LmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQhLmxlbmd0aCApIHtcbiAgICAgICAgICAgIGNoaWxkID0gdGFyZ2V0LmNoaWxkTm9kZXNbaV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBsZW5ndGggLT0gdGFyZ2V0LmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQhLmxlbmd0aDtcbiAgICB9XG5cbiAgICBpZiggY2hpbGQubm9kZVR5cGUgIT09IE5vZGUuVEVYVF9OT0RFKVxuICAgICAgICBjaGlsZCA9IGNoaWxkLmNoaWxkTm9kZXNbMF07XG5cbiAgICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkhO1xuXG4gICAgcmFuZ2Uuc2V0U3RhcnQoY2hpbGQsIGxlbmd0aCk7XG4gICAgcmFuZ2UuY29sbGFwc2UodHJ1ZSk7XG4gICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgIHNlbC5hZGRSYW5nZShyYW5nZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0Rm9ybWF0KHZhbHVlOiBSYXdDb250ZW50VHlwZSwgcHJlYzogbnVsbHxudW1iZXIgPSBudWxsKSB7XG5cbiAgICAvL1RPRE8uLi5cblxuICAgIGlmKCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpXG4gICAgICAgIHJldHVybiBgJHsrdmFsdWUudG9QcmVjaXNpb24oNyl9YC5yZXBsYWNlKCcuJywgJywnKTtcblxuICAgIGlmKCB0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKVxuICAgICAgICByZXR1cm4gdmFsdWUgPyAnVlJBSScgOiAnRkFVWCc7XG5cbiAgICBpZiggdmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiKTtcbiAgICB9XG4gICAgaWYoIHZhbHVlIGluc3RhbmNlb2YgRm9ybXVsYSkge1xuICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSW5wdXQoIHN0cjogc3RyaW5nICk6IFJhd0NvbnRlbnRUeXBlIHtcblxuICAgIGlmKHN0ciA9PT0gJ1ZSQUknKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBpZihzdHIgPT09ICdGQVVYJylcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYoc3RyID09PSAnJylcbiAgICAgICAgcmV0dXJuIHN0cjtcblxuICAgIGlmKHN0clswXSA9PT0gXCI9XCIpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlX2Zvcm11bGEoc3RyKTtcbiAgICB9XG5cbiAgICBsZXQgdGVzdF9udW1iZXIgPSBOdW1iZXIoIHN0ci5yZXBsYWNlKCcsJywgJy4nKSApO1xuICAgIGlmKCAhIE51bWJlci5pc05hTiggdGVzdF9udW1iZXIgKSApXG4gICAgICAgIHJldHVybiB0ZXN0X251bWJlcjtcblxuICAgIGNvbnN0IHBhcnRzID0gc3RyLnNwbGl0KCcvJyk7XG4gICAgaWYocGFydHMubGVuZ3RoIDw9IDMpIHtcblxuICAgICAgICBsZXQgdGVzdF9kYXRlID0gbmV3IERhdGUoXG4gICAgICAgICAgICArcGFydHNbMl0gPz8gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgK3BhcnRzWzFdLTEsXG4gICAgICAgICAgICArcGFydHNbMF1cbiAgICAgICAgKTtcblxuICAgICAgICBpZiggdGVzdF9kYXRlLnRvU3RyaW5nKCkgIT09IFwiSW52YWxpZCBEYXRlXCIgKVxuICAgICAgICAgICAgcmV0dXJuIHRlc3RfZGF0ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xufVxuXG5jbGFzcyBTdGF0ZTxUPiB7XG5cbiAgICAjc3RhdGUgOiBUfG51bGwgPSBudWxsO1xuICAgICN0YXJnZXQ6IEV2ZW50VGFyZ2V0O1xuICAgICNuYW1lICA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHRhcmdldDogRXZlbnRUYXJnZXQsIG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLiN0YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMuI25hbWUgICA9IG5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IHN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jc3RhdGU7XG4gICAgfVxuXG4gICAgc2V0IHN0YXRlKHN0YXRlOiBUfG51bGwpIHtcblxuICAgICAgICBjb25zb2xlLndhcm4oXCJzdGF0ZVwiLCB0aGlzLiNzdGF0ZSwgc3RhdGUpO1xuXG4gICAgICAgIGlmKCB0aGlzLiNzdGF0ZSA9PT0gc3RhdGUpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgbGV0IHByZXZfc3RhdGUgPSB0aGlzLiNzdGF0ZTtcbiAgICAgICAgdGhpcy4jc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgXG5cbiAgICAgICAgaWYoIHByZXZfc3RhdGUgIT09IG51bGwpXG4gICAgICAgICAgICB0aGlzLiN0YXJnZXQuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KGAke3RoaXMuI25hbWV9X2VuZGAsIHtkZXRhaWw6IHByZXZfc3RhdGV9KSApOyAgICAgICAgICAgIFxuXG4gICAgICAgIGlmKCBzdGF0ZSAhPT0gbnVsbCApXG4gICAgICAgICAgICB0aGlzLiN0YXJnZXQuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KGAke3RoaXMuICNuYW1lfV9zdGFydGAsIHtkZXRhaWw6IHN0YXRlfSkgKTtcbiAgICB9XG59XG5cbmNvbnN0IFN0YXRlcyA9IHtcbiAgICBcImNlbGxfZWRpdFwiOiBTdGF0ZTxDZWxsPixcbiAgICBcInJlY29weVwiICAgOiBTdGF0ZTxDZWxsTGlzdD5cbiB9IGFzIGNvbnN0O1xuXG5leHBvcnQgY2xhc3MgQ2FsY1NoZWV0IGV4dGVuZHMgTElTUyh7XG4gICAgY3NzLFxuICAgIGF0dHJpYnV0ZXM6IFtcImNvbHNcIiwgXCJyb3dzXCIsIFwicm9cIl1cbn0pIHtcblxuICAgIHN0YXRlcyA9IE9iamVjdC5mcm9tRW50cmllcyggT2JqZWN0LmVudHJpZXMoU3RhdGVzKS5tYXAoIChbbixzXSkgPT4gW24sIG5ldyBzKHRoaXMuaG9zdCwgbildIGFzIGNvbnN0ICkpO1xuXG4gICAgI3BsYWdlX3NlbGVjdG9yID0gbmV3IFBsYWdlU2VsZWN0b3IodGhpcyk7XG5cbiAgICAvL1RPRE86IFJPIHByb3AgP1xuICAgICNzZWxlY3Rpb24gPSBuZXcgQ2VsbExpc3QodGhpcywgW10pO1xuICAgICNjdXJzb3IgICAgPSBuZXcgQ2VsbExpc3QodGhpcywgW10pO1xuXG4gICAgI2Zvcm1hdF9tbmdyID0gbmV3IEZvcm1hdE1hbmFnZXIodGhpcyk7XG5cbiAgICBnZXQgY3Vyc29yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY3Vyc29yO1xuICAgIH1cbiAgICBnZXQgc2VsZWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jc2VsZWN0aW9uO1xuICAgIH1cblxuICAgIG92ZXJyaWRlIGdldCBjb250ZW50KCkge1xuICAgICAgICByZXR1cm4gc3VwZXIuY29udGVudDtcbiAgICB9XG5cbiAgICByZW1vdmVIaWdobGlnaHRzKCkge1xuICAgICAgICBmb3IobGV0IGggb2YgdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYW5nZV9oaWdobGlnaHQnKSApXG4gICAgICAgICAgICBoLnJlbW92ZSgpO1xuICAgIH1cbiAgICByZW1vdmVDb3B5SGlnaGxpZ2h0KCkge1xuICAgICAgICBmb3IobGV0IGggb2YgdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3B5X2hpZ2hsaWdodCcpIClcbiAgICAgICAgICAgIGgucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgc2V0UmVjdCh0YXJnZXQ6IEhUTUxFbGVtZW50LCBbeCx5LHcsaF06IHJlYWRvbmx5IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdKSB7XG5cbiAgICAgICAgY29uc3QgdGJsX29mZnNldCA9IHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpIS5vZmZzZXRUb3A7XG5cbiAgICAgICAgdGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KCd0b3AnICAgLCBgJHt0Ymxfb2Zmc2V0ICsgeX1weGApO1xuICAgICAgICB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkoJ2hlaWdodCcsIGAke2h9cHhgKTtcblxuICAgICAgICB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkoJ2xlZnQnICAgLCBgJHt4fXB4YCk7XG4gICAgICAgIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eSgnd2lkdGgnLCBgJHt3fXB4YCk7XG5cbiAgICB9XG5cbiAgICBnZXRSZWN0KGNlbGxzOiBDZWxsTGlzdHxDZWxsW10pIHtcblxuICAgICAgICBjZWxscyA9IFwiY2VsbHNcIiBpbiBjZWxscyA/IGNlbGxzLmNlbGxzIDogY2VsbHM7XG5cbiAgICAgICAgY29uc3Qgc3RhcnQgPSBjZWxsc1swXTtcbiAgICAgICAgY29uc3QgZW5kICAgPSBjZWxsc1tjZWxscy5sZW5ndGgtMV07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgc3RhcnQub2Zmc2V0TGVmdCxcbiAgICAgICAgICAgIHN0YXJ0Lm9mZnNldFRvcCxcbiAgICAgICAgICAgIGVuZC5vZmZzZXRMZWZ0ICsgZW5kLmNsaWVudFdpZHRoIC0gc3RhcnQub2Zmc2V0TGVmdCxcbiAgICAgICAgICAgIGVuZC5vZmZzZXRUb3AgKyBlbmQuY2xpZW50SGVpZ2h0IC0gc3RhcnQub2Zmc2V0VG9wICsgMVxuICAgICAgICBdIGFzIGNvbnN0O1xuICAgIH1cblxuICAgIGhpZ2hsaWdodChzdGFydDogQ2VsbCwgZW5kOiBDZWxsLCBpZF9vcl9jbGFzc2xpc3Q6IG51bWJlcnxzdHJpbmdbXSkge1xuICAgICAgICBjb25zdCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGlmKCB0eXBlb2YgaWRfb3JfY2xhc3NsaXN0ID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgaGlnaC5jbGFzc0xpc3QuYWRkKCdyYW5nZV9oaWdobGlnaHQnLCBgaGlnaGxpZ2h0XyR7aWRfb3JfY2xhc3NsaXN0fWApO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBoaWdoLmNsYXNzTGlzdC5hZGQoIC4uLmlkX29yX2NsYXNzbGlzdCApO1xuXG4gICAgICAgIHRoaXMuc2V0UmVjdChoaWdoLCB0aGlzLmdldFJlY3QoW3N0YXJ0LCBlbmRdKSApO1xuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKGhpZ2gpO1xuXG4gICAgICAgIHJldHVybiBoaWdoO1xuICAgIH1cblxuICAgIHJlbGF0aXZlVG8oY2VsbDogQ2VsbCwgcm93X2RpZmY6IG51bWJlciwgY29sX2RpZmY6IG51bWJlcikge1xuICAgICAgICBcbiAgICAgICAgbGV0IFtyb3csIGNvbF0gPSB0aGlzLmNlbGxQb3MoY2VsbCk7XG5cbiAgICAgICAgcm93ICs9IHJvd19kaWZmO1xuICAgICAgICBjb2wgKz0gY29sX2RpZmY7XG5cbiAgICAgICAgLy8gZm9yIG5vcm1hbCA6IGdldCBzdHVjayBpbnNpZGUgZ3JpZC5cbiAgICAgICAgaWYoIHJvdyA8IDEpXG4gICAgICAgICAgICByb3cgPSAxO1xuICAgICAgICBpZiggcm93ID49IHRoaXMuI3Rib2R5LmNoaWxkcmVuLmxlbmd0aCApXG4gICAgICAgICAgICByb3cgPSB0aGlzLiN0Ym9keS5jaGlsZHJlbi5sZW5ndGggLSAxO1xuXG4gICAgICAgIGlmKCBjb2wgPCAxKVxuICAgICAgICAgICAgY29sID0gMTtcbiAgICAgICAgaWYoIGNvbCA+PSB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuLmxlbmd0aCApXG4gICAgICAgICAgICBjb2wgPSB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW5bY29sXSBhcyBDZWxsO1xuICAgIH1cblxuICAgIC8vVE9ETzogMkQuLi5cbiAgICAjcGFzdGViaW46IENlbGxMaXN0IHwgbnVsbCA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBjb25zdCBjdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY3Vyc29yLmNsYXNzTGlzdC5hZGQoXCJjdXJzb3JcIik7XG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoY3Vyc29yKTtcblxuICAgICAgICBjb25zdCByZWNvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmVjb3B5LmNsYXNzTGlzdC5hZGQoXCJyZWNvcHlcIik7XG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQocmVjb3B5KTtcblxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikhOyAgXG5cbiAgICAgICAgbGV0IGxhc3RfcmVjb3B5X3RhcmdldDogQ2VsbHxudWxsID0gbnVsbDtcbiAgICAgICAgbGV0IGxhc3RfcmVjb3B5X2RpciAgIDogW251bWJlciwgbnVtYmVyXXxudWxsID0gbnVsbFxuXG4gICAgICAgIGNvbnN0IG9uX3JlY29weV9tb3ZlID0gKGV2OiBNb3VzZUV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBjZWxscyA9ICh0aGlzLnN0YXRlcy5yZWNvcHkuc3RhdGUgYXMgQ2VsbExpc3QpLmNlbGxzO1xuICAgICAgICAgICAgY29uc3Qgc3JjID0gY2VsbHNbY2VsbHMubGVuZ3RoLTFdO1xuXG4gICAgICAgICAgICBsZXQgcG9zID0gc3JjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICBsZXQgZF9weCA9IGV2LmNsaWVudFggLSAocG9zLnggKyBwb3Mud2lkdGggLzIpO1xuICAgICAgICAgICAgbGV0IGRfcHkgPSBldi5jbGllbnRZIC0gKHBvcy55ICsgcG9zLmhlaWdodC8yKTtcblxuICAgICAgICAgICAgbGV0IGRfeCA9IDA7XG4gICAgICAgICAgICBsZXQgZF95ID0gTWF0aC5zaWduKGRfcHkpO1xuXG4gICAgICAgICAgICBpZiggTWF0aC5hYnMoZF9weCkgPiBNYXRoLmFicyhkX3B5KSApIHtcbiAgICAgICAgICAgICAgICBkX3ggPSBNYXRoLnNpZ24oZF9weCk7XG4gICAgICAgICAgICAgICAgZF95ID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHByZXYgPSBzcmM7XG4gICAgICAgICAgICBsZXQgY3VyICA9IHNyYztcblxuICAgICAgICAgICAgbGV0IGRpZmZfeCwgZGlmZl95O1xuXG4gICAgICAgICAgICBkbyB7XG5cbiAgICAgICAgICAgICAgICBwcmV2PSBjdXI7XG4gICAgICAgICAgICAgICAgY3VyID0gdGhpcy5yZWxhdGl2ZVRvKHByZXYsIGRfeSwgZF94KTtcblxuICAgICAgICAgICAgICAgIGlmKCBjdXIgPT09IHByZXYpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgbGV0IHBvc19jdXIgPSBjdXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgZGlmZl94ID0gZXYuY2xpZW50WCAtIChwb3NfY3VyLnggKyBwb3NfY3VyLndpZHRoIC8yKTtcbiAgICAgICAgICAgICAgICBkaWZmX3kgPSBldi5jbGllbnRZIC0gKHBvc19jdXIueSArIHBvc19jdXIuaGVpZ2h0LzIpO1xuXG4gICAgICAgICAgICB9IHdoaWxlKCBkaWZmX3ggKiBkX3ggKyBkaWZmX3kgKiBkX3kgPiAwICk7XG5cbiAgICAgICAgICAgIGxhc3RfcmVjb3B5X3RhcmdldCA9IHByZXY7XG4gICAgICAgICAgICBsYXN0X3JlY29weV9kaXIgICAgPSBbZF94LGRfeV07XG5cbiAgICAgICAgICAgIGxldCBiZWcgPSBzcmM7XG4gICAgICAgICAgICBsZXQgZW5kID0gcHJldjtcbiAgICAgICAgICAgIGlmKCBzcmMub2Zmc2V0TGVmdCA+IHByZXYub2Zmc2V0TGVmdCB8fCBzcmMub2Zmc2V0VG9wID4gcHJldi5vZmZzZXRUb3AgKVxuICAgICAgICAgICAgICAgIFtiZWcsIGVuZF0gPSBbZW5kLCBiZWddO1xuXG4gICAgICAgICAgICAvL1RPRE86IGhpZ2hsaWdodC4uLlxuICAgICAgICAgICAgdGhpcy5yZW1vdmVIaWdobGlnaHRzKCkgICAgOyAvL1RPRE8uLi5cbiAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0KGJlZywgZW5kLCAxKTsgLy9UT0RPIGNsYXNzLi4uXG4gICAgICAgIH07XG5cbiAgICAgICAgcmVjb3B5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2KSA9PiB7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXRlcy5yZWNvcHkuc3RhdGUgPSB0aGlzLiNzZWxlY3Rpb247XG5cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbl9yZWNvcHlfbW92ZSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgW2RfeCwgZF95XSA9ICBsYXN0X3JlY29weV9kaXIhO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxzID0gKHRoaXMuc3RhdGVzLnJlY29weS5zdGF0ZSBhcyBDZWxsTGlzdCkuY2VsbHM7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3JjID0gY2VsbHNbY2VsbHMubGVuZ3RoLTFdO1xuXG4gICAgICAgICAgICAgICAgbGV0IG5iID0gMDtcblxuICAgICAgICAgICAgICAgIGlmKCBsYXN0X3JlY29weV90YXJnZXQgIT09IHNyYykgeyAvLyBjb3B5Li4uXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1ciA9IHNyYztcbiAgICAgICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgKytuYjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY3VyID0gdGhpcy5yZWxhdGl2ZVRvKGN1ciwgZF95LCBkX3gpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29udGVudDogUmF3Q29udGVudFR5cGV8Q2VsbCA9IHNyYztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCB0eXBlb2YgY29udGVudC5yYXdDb250ZW50ID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSAoc3JjLnJhd0NvbnRlbnQgYXMgbnVtYmVyKSArIG5iKihkX3ggKyBkX3kpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiggY29udGVudC5yYXdDb250ZW50IGluc3RhbmNlb2YgRGF0ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJpcyBkYXRlXCIsIG5iLCBkX3ggKyBkX3kpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBuZXcgRGF0ZShzcmMucmF3Q29udGVudCBhcyBEYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LnNldERhdGUoIGNvbnRlbnQuZ2V0RGF0ZSgpICsgbmIqKGRfeCArIGRfeSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ2VsbExpc3QodGhpcywgW2N1cl0pLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyLmNsYXNzTmFtZSA9IHNyYy5jbGFzc05hbWU7IC8vVE9ETzogZm9ybWF0Li4uXG5cblxuICAgICAgICAgICAgICAgICAgICB9IHdoaWxlKCBjdXIhPT0gbGFzdF9yZWNvcHlfdGFyZ2V0ICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVIaWdobGlnaHRzKCkgICAgOyAvL1RPRE8uLi5cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlcy5yZWNvcHkuc3RhdGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIGxhc3RfcmVjb3B5X3RhcmdldCA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGFzdF9yZWNvcHlfZGlyICAgID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBtYWluLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25fcmVjb3B5X21vdmUpO1xuXG4gICAgICAgICAgICB9LCB7b25jZTogdHJ1ZX0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcigncmVjb3B5X3N0YXJ0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ3JlY29weScpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3JlY29weV9lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LnJlbW92ZSgncmVjb3B5Jyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy4jY3Vyc29yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldikgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IHRoaXMuI2N1cnNvci5jZWxscztcbiAgICAgICAgICAgIGlmKCBjZWxscy5sZW5ndGggPT09IDAgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5zZXRSZWN0KGN1cnNvciwgdGhpcy5nZXRSZWN0KGNlbGxzKSApO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNzZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGZvciggbGV0IGNlbGwgb2YgdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaWdobGlnaHQnKSApXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKTtcblxuICAgICAgICAgICAgY29uc3QgY2VsbHMgPSB0aGlzLiNzZWxlY3Rpb24uY2VsbHM7XG5cbiAgICAgICAgICAgIGlmKCBjZWxscy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBmb3IoIGxldCBjZWxsIG9mIGNlbGxzICkge1xuXG4gICAgICAgICAgICAgICAgaWYoIGNlbGxzLmxlbmd0aCAhPT0gMSlcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gdGhpcy4jY2VsbFBvcyhjZWxsKTtcbiAgICAgICAgICAgICAgICB0aGlzLiN0Ym9keS5jaGlsZHJlblswXS5jaGlsZHJlbltjb2xdLmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XG4gICAgICAgICAgICAgICAgdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlblswXS5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBbeCx5LHcsaF0gPSB0aGlzLmdldFJlY3QoY2VsbHMpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFJlY3QocmVjb3B5LCBbeCt3LTIsIHkraC0yLCA1LCA1XSk7XG4gICAgICAgICAgICAvLyBvbmx5IGlmIHNpbXBsZS4uLlxuICAgICAgICAgICAgLy8gY29uc3QgbGFzdCA9IGNlbGxzW2NlbGxzLmxlbmd0aC0xXTtcbiAgICAgICAgICAgIC8vIHBvaW50ZXIuLi5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9UT0RPOiBtb3ZlIG91dCA/XG4gICAgICAgIGNvbnN0IGZvcm11bGFfYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm11bGFfYmFyLmNsYXNzTGlzdC5hZGQoJ3Rvb2xiYXInKTtcblxuICAgICAgICAoIGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgcGxhZ2UgPSBhd2FpdCBMSVNTLmJ1aWxkKFwiY2FsYy1wbGFnZVwiKTtcbiAgICAgICAgICAgIHBsYWdlLnN5bmNUbyh0aGlzKTtcbiAgICAgICAgICAgIGZvcm11bGFfYmFyLmFwcGVuZCggcGxhZ2UuaG9zdCApO1xuXG4gICAgICAgICAgICBjb25zdCBmb3JtdWxhID0gYXdhaXQgTElTUy5idWlsZChcImNhbGMtZm9ybXVsYVwiKTtcbiAgICAgICAgICAgIGZvcm11bGEuc3luY1RvKHRoaXMpO1xuICAgICAgICAgICAgZm9ybXVsYV9iYXIuYXBwZW5kKCBmb3JtdWxhLmhvc3QgKTtcblxuICAgICAgICB9KSgpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKGZvcm11bGFfYmFyKTtcblxuICAgICAgICB0aGlzLiNpbml0R3JpZCgrdGhpcy5hdHRycy5yb3dzISwgK3RoaXMuYXR0cnMuY29scyEpO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlSGlnaGxpZ2h0cygpOyAvL1RPRE86IG1vdmUuLi5cblxuICAgICAgICAgICAgLy8gdGhlIGNlbGwgaXMgYmVpbmcgZWRpdGVkLi4uXG4gICAgICAgICAgICBpZiggdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJykgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lID09PSBcIlREXCIgKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IHRhcmdldCBhcyBDZWxsO1xuXG4gICAgICAgICAgICAgICAgaWYoXCJjZWxsXCIgaW4gY2VsbCkgLy8gZm9yIG1lcmdlZCBjZWxscy4uLlxuICAgICAgICAgICAgICAgICAgICBjZWxsID0gY2VsbC5jZWxsIGFzIENlbGw7XG5cbiAgICAgICAgICAgICAgICAvL1RPRE86IG1vdmUuLi5cbiAgICAgICAgICAgICAgICB0aGlzLiNjdXJzb3IuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiNjdXJzb3IuYWRkKGNlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lID09PSBcIlRIXCIgJiYgdGFyZ2V0LnRleHRDb250ZW50ICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2V0Q2VsbHModGFyZ2V0LnRleHRDb250ZW50ISkuY2VsbHNbMF0gYXMgQ2VsbDtcblxuICAgICAgICAgICAgICAgIHRoaXMuI2N1cnNvci5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuI2N1cnNvci5hZGQoY2VsbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHRoaXMuI3Rib2R5LmZvY3VzKCk7IC8vID9cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCAoZXYpID0+IHtcblxuICAgICAgICAgICAgbGV0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lICE9PSBcIlREXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiggdGhpcy5hdHRycy5ybyAhPT0gXCJ0cnVlXCIgJiYgKHRhcmdldCBhcyBDZWxsKS5pc19ybyAhPT0gdHJ1ZSApIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQudG9nZ2xlQXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIHRhcmdldC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2OiBLZXlib2FyZEV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIGlmKCB0YXJnZXQgPT09IHRoaXMuI3Rib2R5ICkge1xuICAgICAgICAgICAgICAgIGlmKCBldi5jb2RlID09PSBcIktleVZcIiAmJiBldi5jdHJsS2V5ICYmIHRoaXMuI3Bhc3RlYmluICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLiNwYXN0ZWJpbi5jZWxscztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jc2VsZWN0aW9uLmNvbnRlbnQgPSBkYXRhO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvcHkgZm9ybWF0Li4uIFRPRE8gdXRpbGl0eSB0aGluZ3kuLi5cbiAgICAgICAgICAgICAgICAgICAgaWYoICEgZXYuc2hpZnRLZXkgfHwgISBldi5hbHRLZXkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcmMgPSB0aGlzLiNwYXN0ZWJpbi5jZWxscztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRzdCA9IHRoaXMuI3NlbGVjdGlvbi5jZWxscztcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7ICsraSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkc3RbaV0uY2xhc3NOYW1lID0gc3JjW2ldLmNsYXNzTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1RPRE86IGFkZCBmb3JtYXQuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiggKCBldi5rZXkgPT09IFwiY1wiIHx8IGV2LmtleSA9PT0gXCJ4XCIpICYmIGV2LmN0cmxLZXkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuI3NlbGVjdGlvbi5jZWxsczsgLy9UT0RPOiBhcyBhcnJheS4uLlxuICAgICAgICAgICAgICAgICAgICBsZXQgaCA9IHRoaXMuaGlnaGxpZ2h0KCBzZWxlY3Rpb25bMF0sIHNlbGVjdGlvbltzZWxlY3Rpb24ubGVuZ3RoLTFdLCBbJ2NvcHlfaGlnaGxpZ2h0J10gKTtcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gV0hZID8/P1xuICAgICAgICAgICAgICAgICAgICBoLnN0eWxlLnNldFByb3BlcnR5KCd0b3AnICAgLCBgJHtzZWxlY3Rpb25bMF0ub2Zmc2V0VG9wfXB4YCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jcGFzdGViaW4gPSB0aGlzLiNzZWxlY3Rpb24uZGVlcENsb25lKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIGV2LmtleSA9PT0gXCJ4XCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiNzZWxlY3Rpb24uZGVsZXRlRm9ybWF0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiNzZWxlY3Rpb24uZGVsZXRlQ29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKCBldi5rZXkgPT09IFwiQ29udHJvbFwiIHx8IGV2LmtleSA9PT0gXCJTaGlmdFwiIHx8IGV2LmtleSA9PT0gXCJBbHRcIiApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBpZ25vcmVcbiAgICAgICAgICAgICAgICB9IGlmKCBldi5jb2RlID09PSBcIkRlbGV0ZVwiICkge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmRlbGV0ZUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpICk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gaWYoIGV2LmNvZGUgPT09IFwiRW50ZXJcIiApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlZCBlbHNld2hlcmVcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoIGV2LmNvZGUuc3RhcnRzV2l0aCgnQXJyb3cnKSApIHtcblxuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1ciA9IHRoaXMuY3Vyc29yLmNlbGxzO1xuICAgICAgICAgICAgICAgICAgICBpZiggY3VyLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgZF9yb3cgPSAwO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZF9jb2wgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKCBldi5jb2RlID09PSAnQXJyb3dMZWZ0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tZF9jb2w7XG4gICAgICAgICAgICAgICAgICAgIGlmKCBldi5jb2RlID09PSAnQXJyb3dSaWdodCcpXG4gICAgICAgICAgICAgICAgICAgICAgICArK2RfY29sO1xuICAgICAgICAgICAgICAgICAgICBpZiggZXYuY29kZSA9PT0gJ0Fycm93VXAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLS1kX3JvdztcbiAgICAgICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09ICdBcnJvd0Rvd24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgKytkX3JvdztcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dDogQ2VsbDtcbiAgICAgICAgICAgICAgICAgICAgaWYoIGV2LmN0cmxLZXkgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmV2ICAgPSBjdXJbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3Vyc29yID0gdGhpcy5yZWxhdGl2ZVRvKHByZXYsIGRfcm93LCBkX2NvbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBwcmV2LnJhd0NvbnRlbnQgIT09IHVuZGVmaW5lZCAmJiBjdXJzb3IucmF3Q29udGVudCAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSggcHJldiAhPT0gY3Vyc29yICYmIGN1cnNvci5yYXdDb250ZW50ICE9PSB1bmRlZmluZWQpIHsgLy8gd2UgcmVhY2hlZCB0aGUgZW5kLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2ICAgPSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvciA9IHRoaXMucmVsYXRpdmVUbyhwcmV2LCBkX3JvdywgZF9jb2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSBwcmV2O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSggcHJldiAhPT0gY3Vyc29yICYmIGN1cnNvci5yYXdDb250ZW50ID09PSB1bmRlZmluZWQpIHsgLy8gd2UgcmVhY2hlZCB0aGUgZW5kLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2ICAgPSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvciA9IHRoaXMucmVsYXRpdmVUbyhwcmV2LCBkX3JvdywgZF9jb2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCA9IGN1cnNvcjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gdGhpcy5yZWxhdGl2ZVRvKCBjdXJbMF0sIGRfcm93LCBkX2NvbCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiN0Ym9keS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBuZXh0LmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vbmV4dC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoJ2NsaWNrJywge2J1YmJsZXM6IHRydWV9KSApO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGV2LmN0cmxLZXkpIHsgLy8gaWdub3JlIGN0cmxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHsgLy8gd2Ugc3RhcnQgZWRpdGluZy4uLlxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1ciA9IHRoaXMuY3Vyc29yLmNlbGxzO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKCBjdXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyWzBdLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChcImRibGNsaWNrXCIsIHtidWJibGVzOiB0cnVlfSkgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1clswXS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiggdGFyZ2V0ICE9PSB0aGlzLiN0Ym9keSAmJiBldi5jb2RlID09PSAnRW50ZXInICYmIGV2LnNoaWZ0S2V5IClcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvci5cblxuICAgICAgICAgICAgaWYoZXYuY29kZSA9PT0gXCJFbnRlclwiKSB7IC8vVE9ETzogRW50ZXIgaXMgZm9yIGN1cnJlbnQgcGxhZ2UuLi5cbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVIaWdobGlnaHRzKCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjdXIgPSB0aGlzLmN1cnNvci5jZWxscztcbiAgICAgICAgICAgICAgICBpZiggY3VyLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgbGV0IFtyb3csY29sXSA9IHRoaXMuY2VsbFBvcyggY3VyWzBdICk7XG5cbiAgICAgICAgICAgICAgICArK3JvdztcbiAgICAgICAgICAgICAgICBpZiggcm93ID49IHRoaXMuI3Rib2R5LmNoaWxkcmVuLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICAgICAgcm93ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgKytjb2w7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCBjb2wgPj0gdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlbi5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbCA9IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IG5leHQgPSAodGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlbltjb2xdIGFzIEhUTUxFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuI3Rib2R5LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgbmV4dC5jbGljaygpO1xuICAgICAgICAgICAgICAgIC8vbmV4dC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoJ2NsaWNrJywge2J1YmJsZXM6IHRydWV9KSApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vdGFyZ2V0LmJsdXIoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG9uSW5wdXQyID0gKGV2OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVIaWdobGlnaHRzKCk7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBpZihldi5kZXRhaWwgIT09IHRydWUpXG4gICAgICAgICAgICAgICAgb25JbnB1dChldik7XG4gICAgICAgIH1cblxuICAgICAgICAvL1RPRE86IGhlcmUuLi5cbiAgICAgICAgdGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCAoZXYpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNvcHlIaWdobGlnaHQoKTsgLy8gVE9ETzogbW92ZSB0byBjZWxsX2VkaXRfZW5kID9cblxuICAgICAgICAgICAgaWYoIHRhcmdldC50YWdOYW1lICE9PSBcIlREXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPSB0YXJnZXQgYXMgQ2VsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKFwiY2VsbF9lZGl0X3N0YXJ0XCIsIChldjogQ3VzdG9tRXZlbnQ8Q2VsbD4pID0+IHtcblxuICAgICAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC50b2dnbGUoXCJjZWxsX2VkaXRcIiwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBldi5kZXRhaWw7XG5cbiAgICAgICAgICAgIGlmKGNlbGwucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHN0ciA9IGNlbGwucmF3Q29udGVudC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlcyA9IGNlbGwucmF3Q29udGVudC5yYW5nZXNUb2tlbjtcblxuICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlbjogKHN0cmluZ3xIVE1MRWxlbWVudClbXSA9IFtzdHJdO1xuXG4gICAgICAgICAgICAgICAgbGV0IHJhbmdlc19jb2xvcnM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fTtcbiAgICAgICAgICAgICAgICBsZXQgY3VyX29mZnNldCA9IDA7XG5cbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdHIgPSBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGgtMV0gYXMgc3RyaW5nO1xuXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aC0xXSA9IHN0ci5zbGljZSgwLCByYW5nZXNbaV0uYmVnIC0gY3VyX29mZnNldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2VfbmFtZSA9IHJhbmdlc1tpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYoICEgKHJhbmdlX25hbWUgaW4gcmFuZ2VzX2NvbG9ycykgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VzX2NvbG9yc1tyYW5nZV9uYW1lXSA9IGklODtcblxuICAgICAgICAgICAgICAgICAgICBzLmNsYXNzTGlzdC5hZGQoJ2Zvcm11bGFfaGlnaGxpZ2h0JywgYGhpZ2hsaWdodF8ke3Jhbmdlc19jb2xvcnNbcmFuZ2VfbmFtZV19YCk7IC8vVE9ETy4uLlxuICAgICAgICAgICAgICAgICAgICBzLnRleHRDb250ZW50ID0gcmFuZ2VzW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKCBzICk7IC8vIHJhbmdlLi4uXG5cbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW4ucHVzaCggc3RyLnNsaWNlKHJhbmdlc1tpXS5lbmQgLSBjdXJfb2Zmc2V0KSApO1xuICAgICAgICAgICAgICAgICAgICBjdXJfb2Zmc2V0ID0gcmFuZ2VzW2ldLmVuZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjZWxsLnJlcGxhY2VDaGlsZHJlbiggLi4uY2hpbGRyZW4gKTtcblxuICAgICAgICAgICAgICAgIGZvcihsZXQgcmFuZ2UgaW4gcmFuZ2VzX2NvbG9ycyApIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5nZXRDZWxscyhyYW5nZSkuY2VsbHM7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGJlZyA9IGNlbGxbMF07XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmQgPSBjZWxsW2NlbGwubGVuZ3RoLTFdO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0KGJlZywgZW5kLCByYW5nZXNfY29sb3JzW3JhbmdlXSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIG9uSW5wdXQyICk7IC8vIHJlbW92ZSBjb2xvcnMuLi5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGRlZmF1bHRGb3JtYXQoY2VsbC5yYXdDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoXCJjZWxsX2VkaXRfZW5kXCIsIChldjogQ3VzdG9tRXZlbnQ8Q2VsbD4pID0+IHtcblxuICAgICAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC50b2dnbGUoXCJjZWxsX2VkaXRcIiwgZmFsc2UpO1xuXG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZXYuZGV0YWlsO1xuXG4gICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBvbklucHV0Mik7IC8vIHRvIGJlIHNhZmVcbiAgICAgICAgICAgIGNlbGwudG9nZ2xlQXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIGZhbHNlKTtcblxuICAgICAgICAgICAgbmV3IENlbGxMaXN0KHRoaXMsIFtjZWxsXSkuY29udGVudCA9IGNlbGwudGV4dENvbnRlbnQhO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgICAgICAgLy8gbGVhdmVcbiAgICAgICAgICAgIHRoaXMuI3NlbGVjdGlvbi5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy4jY3Vyc29yLmNsZWFyKCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBldiA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlSGlnaGxpZ2h0cygpOyAvLyBUT0RPOiBvbmx5IGNlbGxfZWRpdCA/P1xuXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgIT09IFwiVERcIilcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGVzLmNlbGxfZWRpdC5zdGF0ZSA9IG51bGw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB0ID0gdGhpcy4jdGJvZHkucXVlcnlTZWxlY3RvckFsbCgndGQnKTtcbiAgICB9XG5cbiAgICBjZWxsUG9zKGNlbGw6IEhUTUxUYWJsZUNlbGxFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjZWxsUG9zKGNlbGwpO1xuICAgIH1cblxuICAgICNjZWxsUG9zKGNlbGw6IEhUTUxUYWJsZUNlbGxFbGVtZW50KSB7XG5cbiAgICAgICAgaWYoIFwicG9zXCIgaW4gY2VsbClcbiAgICAgICAgICAgIHJldHVybiBjZWxsLnBvcyBhcyBbbnVtYmVyLCBudW1iZXJdO1xuXG4gICAgICAgIGNvbnN0IGNvbCA9IFsuLi5jZWxsLnBhcmVudEVsZW1lbnQhLmNoaWxkcmVuXS5maW5kSW5kZXgoIGMgPT4gYyA9PT0gY2VsbCk7XG4gICAgICAgIGNvbnN0IHJvdyA9IFsuLi5jZWxsLnBhcmVudEVsZW1lbnQhLnBhcmVudEVsZW1lbnQhLmNoaWxkcmVuXS5maW5kSW5kZXgoIHIgPT4gciA9PT0gY2VsbC5wYXJlbnRFbGVtZW50ISk7XG5cbiAgICAgICAgcmV0dXJuIFtyb3csIGNvbF0gYXMgY29uc3Q7XG4gICAgfVxuXG4gICAgI3Rib2R5ITogSFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQ7XG4gICAgZ2V0IHRib2R5KCkgeyByZXR1cm4gdGhpcy4jdGJvZHk7IH1cblxuICAgICNpbml0R3JpZChuYnJvd3M6IG51bWJlciwgbmJjb2xzOiBudW1iZXIpIHtcblxuICAgICAgICBjb25zdCBpc19ybyA9IHRoaXMuYXR0cnMucm8gPT09IFwidHJ1ZVwiO1xuXG4gICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICAgICAgY29uc3QgdGJvZHkgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcbiAgICAgICAgdGhpcy4jdGJvZHkgPSB0Ym9keTtcblxuICAgICAgICB0aGlzLiN0Ym9keS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcblxuICAgICAgICBjb25zdCBjb2xfaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgIGNvbF9odG1sLmFwcGVuZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKSApO1xuXG4gICAgICAgIGZvcihsZXQgY29sID0gMDsgY29sIDwgIG5iY29scyA7ICsrY29sKSB7XG4gICAgICAgICAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICB0aC50ZXh0Q29udGVudCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBjb2wpO1xuICAgICAgICAgICAgY29sX2h0bWwuYXBwZW5kKHRoKTtcbiAgICAgICAgfVxuICAgICAgICB0Ym9keS5hcHBlbmQoY29sX2h0bWwpO1xuXG4gICAgICAgIGZvcihsZXQgcm93ID0gMDsgcm93IDwgbmJyb3dzOyArK3Jvdykge1xuICAgICAgICAgICAgY29uc3Qgcm93X2h0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgICAgICAgdGgudGV4dENvbnRlbnQgPSBgJHtyb3crMX1gO1xuICAgICAgICAgICAgcm93X2h0bWwuYXBwZW5kKHRoKTtcblxuICAgICAgICAgICAgZm9yKGxldCBjb2wgPSAwOyBjb2wgPCAgbmJjb2xzIDsgKytjb2wpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKSBhcyBDZWxsO1xuICAgICAgICAgICAgICAgIC8vY2VsbC50b2dnbGVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuICAgICAgICAgICAgICAgIGNlbGwuZm9ybWF0ID0gZGVmYXVsdEZvcm1hdDtcbiAgICAgICAgICAgICAgICByb3dfaHRtbC5hcHBlbmQoIGNlbGwgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRib2R5LmFwcGVuZChyb3dfaHRtbCk7XG4gICAgICAgIH1cblxuICAgICAgICB0YWJsZS5hcHBlbmQodGJvZHkpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKHRhYmxlKTtcbiAgICB9XG5cbiAgICBnZXRSYW5nZShmcm9tOiByZWFkb25seVtudW1iZXIsbnVtYmVyXSwgdG86IHJlYWRvbmx5W251bWJlcixudW1iZXJdID0gZnJvbSk6IENlbGxMaXN0IHtcblxuICAgICAgICBsZXQgYmVnX3JvdyA9IGZyb21bMF0gfHwgMTtcbiAgICAgICAgbGV0IGJlZ19jb2wgPSBmcm9tWzFdIHx8IDE7XG5cbiAgICAgICAgbGV0IGVuZF9yb3cgPSBmcm9tWzBdID09PSAwID8gdGhpcy5uYlJvd3MgOiB0b1swXTtcbiAgICAgICAgbGV0IGVuZF9jb2wgPSBmcm9tWzFdID09PSAwID8gdGhpcy5uYkNvbHMgOiB0b1sxXTtcblxuICAgICAgICBpZiggZW5kX3JvdyA8IGJlZ19yb3cgKVxuICAgICAgICAgICAgW2JlZ19yb3csIGVuZF9yb3ddID0gW2VuZF9yb3csIGJlZ19yb3ddO1xuICAgICAgICBpZiggZW5kX2NvbCA8IGJlZ19jb2wgKVxuICAgICAgICAgICAgW2JlZ19jb2wsIGVuZF9jb2xdID0gW2VuZF9jb2wsIGJlZ19jb2xdO1xuXG4gICAgICAgIGNvbnN0IGNlbGxzID0gbmV3IEFycmF5PENlbGw+KCAoZW5kX3JvdyAtIGJlZ19yb3cgKyAxKSAqIChlbmRfY29sIC0gYmVnX2NvbCArIDEpICk7XG5cbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgIGZvcihsZXQgaSA9IGJlZ19yb3c7IGkgPD0gZW5kX3JvdzsgKytpIClcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IGJlZ19jb2w7IGogPD0gZW5kX2NvbDsgKytqIClcbiAgICAgICAgICAgICAgICBjZWxsc1tvZmZzZXQrK10gPSB0aGlzLnRib2R5LmNoaWxkcmVuW2ldLmNoaWxkcmVuW2pdIGFzIENlbGw7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBDZWxsTGlzdCh0aGlzLCBjZWxscyk7XG4gICAgfVxuXG4gICAgZ2V0Q2VsbHMoY2VsbDogc3RyaW5nKTogQ2VsbExpc3Q7XG4gICAgZ2V0Q2VsbHMocm93X2lkOiBudW1iZXIsIGNvbF9pZDogbnVtYmVyKTogQ2VsbExpc3Q7XG4gICAgZ2V0Q2VsbHMoY2VsbF9vcl9yb3dpZDogbnVtYmVyfHN0cmluZywgY29sX2lkPzogbnVtYmVyKSB7XG5cbiAgICAgICAgbGV0IHJvd19pZCA9IGNlbGxfb3Jfcm93aWQ7XG4gICAgICAgIGlmKCB0eXBlb2YgY2VsbF9vcl9yb3dpZCA9PT0gXCJzdHJpbmdcIikge1xuXG4gICAgICAgICAgICBjZWxsX29yX3Jvd2lkID0gY2VsbF9vcl9yb3dpZC5yZXBsYWNlQWxsKCckJywgJycpO1xuXG4gICAgICAgICAgICBpZiggY2VsbF9vcl9yb3dpZC5pbmNsdWRlcygnOicpICkgey8vIHJhbmdlXG5cbiAgICAgICAgICAgICAgICBsZXQgW2JlZywgZW5kXSA9IGNlbGxfb3Jfcm93aWQuc3BsaXQoJzonKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGJfcm93X2lkID0gK2JlZ1sxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBiX2NvbF9pZCA9IGJlZy5jaGFyQ29kZUF0KDApICsgMSAtIDY1O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZV9yb3dfaWQgPSArZW5kWzFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVfY29sX2lkID0gZW5kLmNoYXJDb2RlQXQoMCkgKyAxIC0gNjU7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjZWxscyA9IG5ldyBBcnJheSggKGVfY29sX2lkLWJfY29sX2lkKSAqIChlX3Jvd19pZCAtIGJfcm93X2lkKSApO1xuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgciA9IGJfcm93X2lkOyByIDw9ICBlX3Jvd19pZDsgKytyKVxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGMgPSBiX2NvbF9pZDsgYyA8PSAgZV9jb2xfaWQ7ICsrYylcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzW29mZnNldCsrXSA9IHRoaXMuI3Rib2R5LmNoaWxkcmVuW3JdLmNoaWxkcmVuW2NdIGFzIENlbGw7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENlbGxMaXN0KHRoaXMsIGNlbGxzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdGhpcyBpcyBhIGZ1bGwgbGluZS4uLlxuICAgICAgICAgICAgaWYoIGNlbGxfb3Jfcm93aWRbMF0gPj0gJzAnICYmIGNlbGxfb3Jfcm93aWRbMF0gPD0gJzknICkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENlbGxzKGBBJHtjZWxsX29yX3Jvd2lkfToke3RoaXMucG9zMnJlZigrY2VsbF9vcl9yb3dpZCwgdGhpcy5uYkNvbHMpfWApO1xuICAgICAgICAgICAgfSBlbHNlIGlmKCBjZWxsX29yX3Jvd2lkW2NlbGxfb3Jfcm93aWQubGVuZ3RoLTFdIDwgJzAnIHx8IGNlbGxfb3Jfcm93aWRbY2VsbF9vcl9yb3dpZC5sZW5ndGgtMV0gPiAnOScgKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCBgJHtjZWxsX29yX3Jvd2lkfTE6JHtjZWxsX29yX3Jvd2lkfSR7dGhpcy5uYlJvd3N9YCApO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENlbGxzKGAke2NlbGxfb3Jfcm93aWR9MToke2NlbGxfb3Jfcm93aWR9JHt0aGlzLm5iUm93c31gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcm93X2lkID0gK2NlbGxfb3Jfcm93aWRbMV07XG4gICAgICAgICAgICBjb2xfaWQgPSBjZWxsX29yX3Jvd2lkLmNoYXJDb2RlQXQoMCkgKyAxIC0gNjU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjZWxsID0gdGhpcy4jdGJvZHkuY2hpbGRyZW5bK3Jvd19pZF0uY2hpbGRyZW5bY29sX2lkIV0gYXMgQ2VsbDtcbiAgICAgICAgcmV0dXJuIG5ldyBDZWxsTGlzdCh0aGlzLCBbY2VsbF0pO1xuICAgIH1cblxuICAgIHJlZjJwb3MocmVmOiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgICAgICAgLy9UT0RPLi4uXG4gICAgICAgIGNvbnN0IHJvdyA9ICtyZWZbcmVmLmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCBjb2wgPSByZWYuY2hhckNvZGVBdCgwKSAtIDY1ICsgMTtcblxuICAgICAgICByZXR1cm4gW3JvdywgY29sXTtcbiAgICB9XG4gICAgcG9zMnJlZihyb3c6IG51bWJlciwgY29sOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGAke1N0cmluZy5mcm9tQ2hhckNvZGUoNjUrY29sLTEpfSR7cm93fWA7XG4gICAgfVxuICAgIGdldCBuYlJvd3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0Ym9keS5jaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgIH1cbiAgICBnZXQgbmJDb2xzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jdGJvZHkuZmlyc3RFbGVtZW50Q2hpbGQhLmNoaWxkcmVuLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgI2lzVXBkYXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmKCB0aGlzLiNpc1VwZGF0aW5nID09PSB0cnVlIClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy4jaXNVcGRhdGluZyA9IHRydWU7XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsPENlbGw+KCd0ZCcpO1xuICAgICAgICAgICAgZm9yKGxldCBjZWxsIG9mIGNlbGxzKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggY2VsbC5yYXdDb250ZW50IGluc3RhbmNlb2YgRm9ybXVsYSApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gY2VsbC5yYXdDb250ZW50LmV4ZWModGhpcyk7IC8vVE9ETy4uLlxuXG4gICAgICAgICAgICAgICAgICAgIC8vVE9ETzogZmFjdG9yaXplLi4uXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eXBlOiBzdHJpbmcgPSB0eXBlb2YgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmKCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIjtcblxuICAgICAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gKGNlbGwgYXMgYW55KS5mb3JtYXQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiNpc1VwZGF0aW5nID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2VsbExpc3QgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG5cbiAgICAjc2hlZXQ6IENhbGNTaGVldDtcbiAgICAjY2VsbHM6IENlbGxbXTtcbiAgICBjb25zdHJ1Y3RvcihzaGVldDogQ2FsY1NoZWV0LCBjZWxsczogQ2VsbFtdKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuI2NlbGxzID0gY2VsbHM7XG4gICAgICAgIHRoaXMuI3NoZWV0ID0gc2hlZXQ7XG4gICAgfVxuXG4gICAgZ2V0IHBsYWdlX25hbWUoKSB7XG5cbiAgICAgICAgaWYoIHRoaXMuI2NlbGxzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBpZiggdGhpcy4jY2VsbHMubGVuZ3RoID09PSAxIClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiNzaGVldC5wb3MycmVmKCAuLi50aGlzLiNzaGVldC5jZWxsUG9zKHRoaXMuI2NlbGxzWzBdKSApO1xuXG4gICAgICAgIGxldCBjZWxscyA9IHRoaXMuI2NlbGxzLm1hcCggYyA9PiB0aGlzLiNzaGVldC5jZWxsUG9zKGMpICkuc29ydCggKGEsYikgPT4ge1xuICAgICAgICAgICAgaWYoIGFbMF0gIT09IGJbMF0gKVxuICAgICAgICAgICAgICAgIHJldHVybiBhWzBdIC0gYlswXTtcbiAgICAgICAgICAgIHJldHVybiBhWzFdIC0gYlsxXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG1pbiA9IGNlbGxzWzBdO1xuICAgICAgICBsZXQgbWF4ID0gY2VsbHNbY2VsbHMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgbGV0IG5iX2NvbHMgPSBtYXhbMV0gLSBtaW5bMV0gKyAxO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgIGlmKCBjZWxsc1tpXVswXSAhPT0gTWF0aC5mbG9vcihpL25iX2NvbHMpK21pblswXSAmJiBjZWxsc1tpXVsxXSAhPT0gKGklbmJfY29scykrIG1pblsxXSApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHJldHVybiBgJHt0aGlzLiNzaGVldC5wb3MycmVmKC4uLm1pbil9OiR7dGhpcy4jc2hlZXQucG9zMnJlZiguLi5tYXgpfWA7XG4gICAgfVxuXG4gICAgZ2V0IGNlbGxzKCk6IENlbGxbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjZWxscztcbiAgICB9XG4gICAgZ2V0IHNoZWV0KCk6IENhbGNTaGVldCB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzaGVldDtcbiAgICB9XG5cbiAgICB0b2dnbGVGb3JtYXQobmFtZTogc3RyaW5nfCgodjogYW55LCBwcmVjOiBudW1iZXJ8bnVsbCkgPT4gc3RyaW5nKSApIHtcbiAgICAgICAgbGV0IGYgPSBGb3JtYXQuZXh0cmFjdEZvcm1hdCh0aGlzKTtcblxuICAgICAgICBpZiggdHlwZW9mIG5hbWUgPT09IFwiZnVuY3Rpb25cIikge1xuXG4gICAgICAgICAgICBsZXQgaXNGb3JtYXQgPSBmLmdldFByb3BlcnR5KFwiZm9ybWF0XCIpID09PSBuYW1lO1xuXG4gICAgICAgICAgICB0aGlzLmZvcm1hdCh7Zm9ybWF0OiBpc0Zvcm1hdCA/IG51bGwgOiBuYW1lIH0pO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZvcm1hdCh7W25hbWVdOiBmLmdldFByb3BlcnR5KG5hbWUpICE9PSB0cnVlfSk7XG4gICAgfVxuXG4gICAgZm9ybWF0KC4uLmY6ICgoICh2OiBhbnksIHByZWM6IG51bWJlcnxudWxsKSA9PiBzdHJpbmcgKXxzdHJpbmd8Rm9ybWF0fFJlY29yZDxzdHJpbmcsIGFueT4pW10pIHtcblxuICAgICAgICBpZiggZi5sZW5ndGggPiAxICkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL1RPRE8uLi4uXG4gICAgICAgICAgICBmID0gT2JqZWN0LmZyb21FbnRyaWVzKCBmLm1hcCggZSA9PiBbZSwgdHJ1ZV0gKSApO1xuXG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgZiA9IGZbMF07XG5cbiAgICAgICAgaWYoIHR5cGVvZiBmID09PSBcImZ1bmN0aW9uXCIgKVxuICAgICAgICAgICAgZiA9IHtcImZvcm1hdFwiOiBmfTtcblxuICAgICAgICBpZih0eXBlb2YgZiA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICBmID0ge1tmXTogdHJ1ZX07XG5cbiAgICAgICAgaWYoICEgKGYgaW5zdGFuY2VvZiBGb3JtYXQpIClcbiAgICAgICAgICAgIGYgPSBuZXcgRm9ybWF0KGYpO1xuXG4gICAgICAgIGYuYXBwbHlUbyh0aGlzKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQgY29udGVudCgpOiAoUmF3Q29udGVudFR5cGUpW10ge1xuICAgICAgICBsZXQgY29udGVudCA9IG5ldyBBcnJheSh0aGlzLiNjZWxscy5sZW5ndGgpO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy4jY2VsbHMubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICBjb250ZW50W2ldID0gdGhpcy4jY2VsbHNbaV0ucmF3Q29udGVudCE7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgZGVsZXRlRm9ybWF0KCkge1xuICAgICAgICBmb3IobGV0IGNlbGwgb2YgdGhpcy4jY2VsbHMpIC8vVE9ETyBhZGQgaG9jIGZvcm1hdC4uLlxuICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAnJztcbiAgICB9XG5cbiAgICBkZWxldGVDb250ZW50KCkge1xuXG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiB0aGlzLiNjZWxscykge1xuICAgICAgICAgICAgY2VsbC5yYXdDb250ZW50ID0gdW5kZWZpbmVkIGFzIGFueTtcbiAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2hlZXQudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgc2V0IGNvbnRlbnQoY29udGVudDogQ2VsbHxSYXdDb250ZW50VHlwZXwoUmF3Q29udGVudFR5cGV8Q2VsbClbXSkge1xuXG4gICAgICAgIGlmKCBBcnJheS5pc0FycmF5KGNvbnRlbnQpICkge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNvbnRlbnQubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgbmV3IENlbGxMaXN0KHRoaXMuI3NoZWV0LCBbdGhpcy4jY2VsbHNbaV1dICkuY29udGVudCA9IGNvbnRlbnRbaV07XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCB0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICBjb250ZW50ID0gcGFyc2VJbnB1dChjb250ZW50KTtcblxuICAgICAgICBsZXQgcmF3X3ZhbCA9IGNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MVGFibGVDZWxsRWxlbWVudCA/IGNvbnRlbnQucmF3Q29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvbnRlbnQ7XG5cbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIHRoaXMuI2NlbGxzKSB7XG5cbiAgICAgICAgICAgIGlmKGNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MVGFibGVDZWxsRWxlbWVudCAmJiBjb250ZW50LnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBGb3JtdWxhICkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHYgPSBjb250ZW50LnJhd0NvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkc3QgPSB0aGlzLiNzaGVldC5jZWxsUG9zKCBjZWxsICk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3JjID0gdGhpcy4jc2hlZXQuY2VsbFBvcyhjb250ZW50KVxuXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZiA9IFsgZHN0WzBdIC0gc3JjWzBdLCBkc3RbMV0gLSBzcmNbMV1dIGFzIGNvbnN0O1xuXG4gICAgICAgICAgICAgICAgcmF3X3ZhbCA9IHYucmVsYXRpdmVUbyggdGhpcy4jc2hlZXQsIC4uLmRpZmYgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2VsbC5yYXdDb250ZW50ID0gcmF3X3ZhbDtcblxuICAgICAgICAgICAgbGV0IHZhbHVlID0gcmF3X3ZhbDtcbiAgICAgICAgICAgIGlmKCByYXdfdmFsIGluc3RhbmNlb2YgRm9ybXVsYSlcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHJhd192YWwuZXhlYyh0aGlzLiNzaGVldCk7IC8vVE9ETy4uLlxuXG4gICAgICAgICAgICBsZXQgdHlwZTogc3RyaW5nID0gdHlwZW9mIHZhbHVlO1xuICAgICAgICAgICAgaWYoIHR5cGUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgaW5zdGFuY2VvZiBEYXRlIClcbiAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiO1xuXG4gICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gKGNlbGwgYXMgYW55KS5mb3JtYXQodmFsdWUpO1xuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHR5cGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2hlZXQudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgc2V0Uk8oaXNfcm86IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiB0aGlzLiNjZWxscylcbiAgICAgICAgICAgIGNlbGwuaXNfcm8gPSBpc19ybztcbiAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaGFzKC4uLmNlbGxzOiBDZWxsW10pIHtcbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIGNlbGxzKVxuICAgICAgICAgICAgaWYoICEgdGhpcy4jY2VsbHMuaW5jbHVkZXMoY2VsbCkgKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmVtb3ZlKC4uLmNlbGxzOiBDZWxsW10pIHtcbiAgICAgICAgdGhpcy4jY2VsbHMgPSB0aGlzLiNjZWxscy5maWx0ZXIoIGMgPT4gISBjZWxscy5pbmNsdWRlcyhjKSApO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSApO1xuICAgIH1cblxuICAgIGFkZCguLi5jZWxsczogQ2VsbFtdKSB7XG5cbiAgICAgICAgdGhpcy4jY2VsbHMucHVzaCguLi5jZWxscylcblxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSApO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLiNjZWxscy5sZW5ndGggPSAwO1xuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpICk7XG4gICAgfVxuXG5cbiAgICBkZWVwQ2xvbmUoKSB7XG5cbiAgICAgICAgbGV0IGNlbGxzID0gdGhpcy4jY2VsbHMubWFwKCBjID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNsb25lID0gYy5jbG9uZU5vZGUodHJ1ZSkgYXMgQ2VsbDtcblxuICAgICAgICAgICAgY2xvbmUucmF3Q29udGVudCA9IGMucmF3Q29udGVudDtcbiAgICAgICAgICAgIGNsb25lLmZvcm1hdCAgICAgPSBjLmZvcm1hdDtcbiAgICAgICAgICAgIChjbG9uZSBhcyBhbnkpLnBvcyAgICAgICAgPSB0aGlzLiNzaGVldC5jZWxsUG9zKGMpO1xuXG4gICAgICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIG5ldyBDZWxsTGlzdCh0aGlzLiNzaGVldCwgY2VsbHMpO1xuICAgIH1cbn1cblxuLy9UT0RPLi4uXG5pbXBvcnQgXCIuL2Zvcm11bGFfZWRpdG9yXCI7XG5pbXBvcnQgXCIuL3BsYWdlX2VkaXRvclwiO1xuaW1wb3J0IHsgRm9ybXVsYSwgcGFyc2VfZm9ybXVsYSB9IGZyb20gXCIuL2Zvcm11bGFfcGFyc2VyXCI7XG5pbXBvcnQgeyBQbGFnZVNlbGVjdG9yIH0gZnJvbSBcIi4vcGxhZ2Vfc2VsZWN0b3JcIjtcbmltcG9ydCB7IEZvcm1hdCwgRm9ybWF0TWFuYWdlciB9IGZyb20gXCIuL2Zvcm1hdFwiO1xuXG5MSVNTLmRlZmluZSgnY2FsYy1zaGVldCcsIENhbGNTaGVldCk7IiwiaW1wb3J0IExJU1MgZnJvbSBcIi4uLy4uLy4uL2xpYnMvTElTU1wiO1xuaW1wb3J0IHsgRm9ybWF0LCBGb3JtYXRzIH0gZnJvbSBcIi4vZm9ybWF0XCI7XG5pbXBvcnQgeyBDYWxjU2hlZXQsIENlbGxMaXN0IH0gZnJvbSBcIi4vc2hlZXRcIjtcblxuY29uc3QgY29udGVudCA9IGBcbiAgICA8c2VsZWN0IGRpc2FibGVkIHRpdGxlPVwiTm9tIGRlIHBvbGljZVwiPjxvcHRpb24+TGliw6lyYXRpb24gU2Fuczwvb3B0aW9uPjwvc2VsZWN0PlxuICAgIDxzZWxlY3QgY2xhc3M9XCJmb250X3NpemVcIiB0aXRsZT1cIlRhaWxsZSBkZSBwb2xpY2VcIj48L3NlbGVjdD5cbiAgICA8c3BhbiBjbGFzcz0ndmJhcic+PC9zcGFuPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdib2xkJyB0aXRsZT1cIkdyYXMgKEN0cmwrQilcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdpdGFsaWMnIHRpdGxlPVwiSXRhbGlxdWUgKEN0cmwrSSlcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSd1bmRlcmxpbmUnIHRpdGxlPVwiU291bGlnbmFnZSAoQ3RybCtVKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gdmFsdWU9J2JsYWNrJyBuYW1lPSdmb3JlZ3JvdW5kX2NvbG9yJyB0aXRsZT1cIkNvdWxldXIgZGUgcG9saWNlXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gdmFsdWU9J3llbGxvdycgbmFtZT0nYmFja2dyb3VuZF9jb2xvcicgdGl0bGU9XCJDb3VsZXVyIGQnYXJyacOocmUtcGxhblwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nYWxpZ25fbGVmdCcgdGl0bGU9XCJBbGlnbmVyIMOgIGdhdWNoZSAoQ3RybCtMKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2FsaWduX2NlbnRlcicgdGl0bGU9XCJDZW50ZXIgKEN0cmwrRSlcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdhbGlnbl9yaWdodCcgdGl0bGU9XCJBbGlnbmVyIMOgIGRyb2l0ZSAoQ3RybCtSKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0ndmFsaWduX3RvcCcgdGl0bGU9XCJBbGlnbmVyIGVuIGhhdXRcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSd2YWxpZ25fbWlkZGxlJyB0aXRsZT1cIkNlbnRyZXIgdmVydGljYWxlbWVudFwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J3ZhbGlnbl9ib3R0b20nIHRpdGxlPVwiQWxpZ25lciBlbiBiYXNcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxzcGFuIGNsYXNzPSd2YmFyJz48L3NwYW4+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2FqdXN0ZXInIHRpdGxlPVwiQWp1c3RlciBsZSB0ZXh0ZVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nbWVyZ2VfY2VudGVyJyB0eXBlPSdmY3QnIHRpdGxlPVwiRnVzaW9ubmVyIGV0IGNlbnRyZXIgb3UgZMOpZnVzaW9ubmVyIGxlcyBjZWxsdWxlcyBlbiBpbnZlcnNhbnQgbGV1ciDDqXRhdCBhY3R1ZWxcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdtZXJnZScgdHlwZT0nZmN0JyB0aXRsZT1cIkZ1c2lvbm5lciBsZXMgY2VsbHVsZXNcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSd1bm1lcmdlJyB0eXBlPSdmY3QnIHRpdGxlPVwiRMOpZnVzaW9ubmVyIGxlcyBjZWxsdWxlc1wiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nZm9ybWF0X21vbm5haWUnIHR5cGU9J2ZjdCcgdGl0bGU9XCJBcHBsaXF1ZXIgbGUgZm9ybWF0IE1vbm5haWUgKE1haitDdHJsKzQpXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nZm9ybWF0X3BvdXJjZW50JyB0eXBlPSdmY3QnIHRpdGxlPVwiQXBwbGlxdWVyIGxlIGZvcm1hdCBQb3VyY2VudGFnZSAoTWFqK0N0cmwrNSlcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdmb3JtYXRfbmInIHR5cGU9J2ZjdCcgIHRpdGxlPVwiQXBwbGlxdWVyIGxlIGZvcm1hdCBOb21icmUgKE1haitDdHJsKzEpXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nZm9ybWF0X2RhdGUnIHR5cGU9J2ZjdCcgZGlzYWJsZWQgIHRpdGxlPVwiQXBwbGlxdWVyIGxlIGZvcm1hdCBEYXRlIChNYWorQ3RybCszKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nZm9ybWF0X3plcm9fcDEnIHR5cGU9J2ZjdCcgdGl0bGU9XCJBam91dGVyIHVuZSBkw6ljaW1hbGVcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdmb3JtYXRfemVyb19tMScgdHlwZT0nZmN0JyB0aXRsZT1cIlN1cHByaW1lciB1bmUgZMOpY2ltYWxlXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbiAgICA8c3BhbiBjbGFzcz0ndmJhcic+PC9zcGFuPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdyZXRyYWl0X3AxJyB0eXBlPSdmY3QnIHRpdGxlPVwiQXVnbWVudGVyIGxlIHJldHJhaXRcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSBuYW1lPSdyZXRyYWl0X20xJyB0eXBlPSdmY3QnIHRpdGxlPVwiRGltaW51ZXIgbGUgcmV0cmFpdFwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPHNwYW4gY2xhc3M9J3ZiYXInPjwvc3Bhbj5cbiAgICA8Y2FsYy10b29sYmFyLWl0ZW0gbmFtZT0nYm9yZGVyJyB0eXBlPSdmY3QnIHRpdGxlPVwiQm9yZHVyZXMgKE1haiBwb3VyIMOpY3Jhc2VyKVwiPjwvY2FsYy10b29sYmFyLWl0ZW0+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2JvcmRlcl9zdHlsZScgdHlwZT0nZmN0JyBkaXNhYmxlZCB0aXRsZT1cIlN0eWxlIGRlIGJvcmR1cmVcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxjYWxjLXRvb2xiYXItaXRlbSB2YWx1ZT0nYmxhY2snIG5hbWU9J2JvcmRlcl9jb2xvcicgdGl0bGU9XCJDb3VsZXVyIGRlIGJvcmR1cmVcIj48L2NhbGMtdG9vbGJhci1pdGVtPlxuICAgIDxzcGFuIGNsYXNzPSd2YmFyJz48L3NwYW4+XG4gICAgPGNhbGMtdG9vbGJhci1pdGVtIG5hbWU9J2Zvcm1hdF9jb25kJyB0eXBlPSdmY3QnIGRpc2FibGVkIHRpdGxlPVwiQ29uZGl0aW9ubmVsXCI+PC9jYWxjLXRvb2xiYXItaXRlbT5cbmA7XG5cbmZ1bmN0aW9uIG1lcmdlKGNlbGxsaXN0OiBDZWxsTGlzdCwgaXNfYWxpZ24gPSBmYWxzZSkge1xuXG4gICAgY29uc3Qgc2hlZXQgPSBjZWxsbGlzdC5zaGVldDtcblxuICAgIGNvbnN0IFtiZWcsZW5kXSA9IGNlbGxsaXN0LnBsYWdlX25hbWUhLnNwbGl0KCc6JykubWFwKCBlID0+IHNoZWV0LnJlZjJwb3MoZSkgKTsgLy8gcGxhZ2UgY2FuJ3QgYmUgdW5kZWZpbmVkXG5cbiAgICBsZXQgcm93cyA9IGVuZFswXSAtIGJlZ1swXSArIDE7XG4gICAgbGV0IGNvbHMgPSBlbmRbMV0gLSBiZWdbMV0gKyAxO1xuXG4gICAgbGV0IGZvcm1hdDogUmVjb3JkPHN0cmluZyxhbnk+ID0ge1xuICAgICAgICBzcGFuOiBbIHJvd3MsIGNvbHMgXVxuICAgIH1cblxuICAgIGlmKCBpc19hbGlnbiApIHtcbiAgICAgICAgZm9ybWF0LnZhbGlnbl9taWRkbGUgPSB0cnVlO1xuICAgICAgICBmb3JtYXQuYWxpZ25fY2VudGVyICA9IHRydWU7XG4gICAgfVxuXG4gICAgc2hlZXQuZ2V0UmFuZ2UoYmVnKS5mb3JtYXQoZm9ybWF0KTtcbn1cblxuZnVuY3Rpb24gdW5tZXJnZShjZWxsbGlzdDogQ2VsbExpc3QpIHtcblxuICAgIGNlbGxsaXN0LmZvcm1hdCh7XG4gICAgICAgIHNwYW46IFsgMSwgMSBdXG4gICAgfSk7IC8vIHVubWVyZ2UuLi5cbn1cblxuZnVuY3Rpb24gcmV0cmFpdChjZWxsczogQ2VsbExpc3QsIGRlbHRhX2luZGVudDogbnVtYmVyKSB7XG4gICAgXG4gICAgZm9yKGxldCBjZWxsIG9mIGNlbGxzLmNlbGxzKSB7XG5cbiAgICAgICAgY29uc3QgZm9ybWF0ID0gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbCk7XG4gICAgICAgIGxldCBuZXdfZm9ybWF0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG4gICAgICAgIGlmKCAhIGZvcm1hdC5oYXNQcm9wZXJ0eShcImFsaWduX3JpZ2h0XCIpICYmICEgZm9ybWF0Lmhhc1Byb3BlcnR5KFwiYWxpZ25fbGVmdFwiKSApXG4gICAgICAgICAgICBuZXdfZm9ybWF0LmFsaWduX2xlZnQgPSB0cnVlO1xuXG4gICAgICAgIG5ld19mb3JtYXQuaW5kZW50ID0gKyhmb3JtYXQuZ2V0UHJvcGVydHkoXCJpbmRlbnRcIikgPz8gMCkgKyBkZWx0YV9pbmRlbnQ7XG4gICAgICAgIFxuICAgICAgICBpZiggbmV3X2Zvcm1hdC5pbmRlbnQgPCAwKVxuICAgICAgICAgICAgbmV3X2Zvcm1hdC5pbmRlbnQgPSAwO1xuXG4gICAgICAgIGNlbGxzLmZvcm1hdChuZXdfZm9ybWF0KTsgICAgIFxuICAgIH1cbn1cblxuZnVuY3Rpb24gcHJlY2lzaW9uKGNlbGxzOiBDZWxsTGlzdCwgZGVsdGFfcHJlYzogbnVtYmVyKSB7XG5cbiAgICBsZXQgcHJlY2lzaW9uID0gdW5kZWZpbmVkO1xuICAgIGZvcihsZXQgY2VsbCBvZiBjZWxscy5jZWxscykge1xuICAgICAgICBjb25zdCBwcmVjID0gKyhGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxsKS5nZXRQcm9wZXJ0eShcInByZWNpc2lvblwiKSA/PyAyKTtcbiAgICAgICAgaWYoIHByZWNpc2lvbiA9PT0gdW5kZWZpbmVkIHx8IHByZWMgPCBwcmVjaXNpb24gKVxuICAgICAgICAgICAgcHJlY2lzaW9uID0gcHJlYztcbiAgICB9XG5cbiAgICBwcmVjaXNpb24gPz89IDI7XG4gICAgcHJlY2lzaW9uICs9IGRlbHRhX3ByZWM7XG4gICAgaWYocHJlY2lzaW9uIDwgMClcbiAgICAgICAgcHJlY2lzaW9uID0gMDtcblxuICAgIGNlbGxzLmZvcm1hdCh7cHJlY2lzaW9ufSk7XG59XG5cbmNvbnN0IGZjdHM6IFJlY29yZDxzdHJpbmcsIHsgYWN0aW9uOiAoY2VsbHM6IENlbGxMaXN0KSA9PnZvaWQsIGVuYWJsZWQ/OiAoY2VsbHM6IENlbGxMaXN0KSA9PiBib29sZWFuIH0+ID0ge1xuICAgIFwiZm9ybWF0X3plcm9fcDFcIjoge1xuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuICAgICAgICAgICAgcHJlY2lzaW9uKGNlbGxzLCArMSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiZm9ybWF0X3plcm9fbTFcIjoge1xuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuICAgICAgICAgICAgcHJlY2lzaW9uKGNlbGxzLCAtMSk7XG4gICAgICAgIH1cbiAgICB9LFwiZm9ybWF0X3BvdXJjZW50XCI6IHtcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcblxuICAgICAgICAgICAgaWYoIEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzKS5nZXRQcm9wZXJ0eSgnZm9ybWF0JykgPT09IEZvcm1hdHMucG91cmNlbnQgKSB7XG4gICAgICAgICAgICAgICAgY2VsbHMuZm9ybWF0KHtmb3JtYXQ6IG51bGx9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjZWxscy5mb3JtYXQoRm9ybWF0cy5wb3VyY2VudCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVuYWJsZWQ6IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzKS5nZXRQcm9wZXJ0eSgnZm9ybWF0JykgPT09IEZvcm1hdHMucG91cmNlbnQ7XG4gICAgICAgIH1cbiAgICB9LFwiZm9ybWF0X25iXCI6IHtcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcblxuICAgICAgICAgICAgaWYoIEZvcm1hdC5leHRyYWN0Rm9ybWF0KGNlbGxzKS5nZXRQcm9wZXJ0eSgnZm9ybWF0JykgPT09IEZvcm1hdHMubnVtYmVyICkge1xuICAgICAgICAgICAgICAgIGNlbGxzLmZvcm1hdCh7Zm9ybWF0OiBudWxsfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2VsbHMuZm9ybWF0KEZvcm1hdHMubnVtYmVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5hYmxlZDogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHMpLmdldFByb3BlcnR5KCdmb3JtYXQnKSA9PT0gRm9ybWF0cy5udW1iZXI7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiZm9ybWF0X21vbm5haWVcIjoge1xuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuXG4gICAgICAgICAgICBpZiggRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHMpLmdldFByb3BlcnR5KCdmb3JtYXQnKSA9PT0gRm9ybWF0cy5ldXJvcyApIHtcbiAgICAgICAgICAgICAgICBjZWxscy5mb3JtYXQoe2Zvcm1hdDogbnVsbH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNlbGxzLmZvcm1hdChGb3JtYXRzLmV1cm9zKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5hYmxlZDogZnVuY3Rpb24oY2VsbHM6IENlbGxMaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbHMpLmdldFByb3BlcnR5KCdmb3JtYXQnKSA9PT0gRm9ybWF0cy5ldXJvcztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJyZXRyYWl0X20xXCI6IHtcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcbiAgICAgICAgICAgIHJldHJhaXQoY2VsbHMsIC0xKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJyZXRyYWl0X3AxXCI6IHsgLy8gVE9ETzogbTEuLi5cbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbihjZWxsczogQ2VsbExpc3QpIHtcbiAgICAgICAgICAgIHJldHJhaXQoY2VsbHMsICsxKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJib3JkZXJcIjoge1xuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxzOiBDZWxsTGlzdCkge1xuICAgICAgICAgICAgY2VsbHMuZm9ybWF0KHtcbiAgICAgICAgICAgICAgICBib3JkZXJfdG9wOiB0cnVlLFxuICAgICAgICAgICAgICAgIGJvcmRlcl9ib3R0b206IHRydWUsXG4gICAgICAgICAgICAgICAgYm9yZGVyX2xlZnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgYm9yZGVyX3JpZ2h0OiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJ1bm1lcmdlXCI6IHtcbiAgICAgICAgYWN0aW9uOiB1bm1lcmdlXG4gICAgfSxcbiAgICBcIm1lcmdlXCI6IHtcbiAgICAgICAgYWN0aW9uOiBtZXJnZVxuICAgIH0sXG4gICAgXCJtZXJnZV9jZW50ZXJcIjoge1xuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGNlbGxsaXN0OiBDZWxsTGlzdCkge1xuXG4gICAgICAgICAgICBsZXQgdW5tZXJnZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc3Qgc2hlZXQgPSBjZWxsbGlzdC5zaGVldDtcblxuICAgICAgICAgICAgZm9yKGxldCBjZWxsIG9mIGNlbGxsaXN0LmNlbGxzKVxuICAgICAgICAgICAgICAgIGlmKCBGb3JtYXQuZXh0cmFjdEZvcm1hdChjZWxsKS5oYXNQcm9wZXJ0eShcInNwYW5cIikgKSB7XG4gICAgICAgICAgICAgICAgICAgIHVubWVyZ2UoIG5ldyBDZWxsTGlzdChzaGVldCwgW2NlbGxdKSApO1xuICAgICAgICAgICAgICAgICAgICB1bm1lcmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih1bm1lcmdlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIG1lcmdlKGNlbGxsaXN0LCB0cnVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5hYmxlZDogZnVuY3Rpb24oY2VsbGxpc3Q6IENlbGxMaXN0KSB7XG5cbiAgICAgICAgICAgIGZvcihsZXQgY2VsbCBvZiBjZWxsbGlzdC5jZWxscylcbiAgICAgICAgICAgICAgICBpZiggRm9ybWF0LmV4dHJhY3RGb3JtYXQoY2VsbCkuaGFzUHJvcGVydHkoXCJzcGFuXCIpIClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgY3NzID0gYFxuICAgIDpob3N0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcblxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIH1cblxuICAgIDpob3N0IC52YmFyIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWJhYmFiO1xuICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICB9XG5cbiAgICA6aG9zdCBzZWxlY3Qge1xuICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cbmBcblxuY29uc3QgaXRlbWNzcyA9IGBcblxuICAgIDpob3N0IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIDpob3N0KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG5cbiAgICA6aG9zdChbdmFsdWVdKSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gICAgfVxuXG4gICAgOmhvc3QsIDpob3N0ID4gZGl2IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgOmhvc3Qge1xuICAgICAgICBwYWRkaW5nOiAxcHg7XG4gICAgfVxuXG4gICAgOmhvc3QgPiBkaXYge1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKCAxLjJlbSAtIDFweCApO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTFweDtcbiAgICAgICAgcmlnaHQ6IC0xcHg7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiBjYWxjKCAoIDEuMmVtIC0gMXB4IC0gMnB4ICkgLyAyICk7XG4gICAgICAgICAgICByaWdodDogMXB4O1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHdpZHRoOiAwOyBcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIC0tc2l6ZTogNHB4O1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IHZhcigtLXNpemUpIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1zaXplKSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYm9yZGVyLXRvcDogdmFyKC0tc2l6ZSkgc29saWQgYmxhY2s7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICA6aG9zdCg6aG92ZXI6bm90KC5lbmFibGVkKSksIDpob3N0KDpob3Zlcjpub3QoLmVuYWJsZWQpKSA+IGRpdiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5Njk2OTY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB9XG5cbiAgICA6aG9zdCguZW5hYmxlZCkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZiNmI2O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5YjliO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgfVxuYDtcblxuZXhwb3J0IGNsYXNzIENhbGNUb29sYmFySXRlbSBleHRlbmRzIExJU1Moe1xuICAgIGNzczogaXRlbWNzc1xufSkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY29udGVudC5zcmMgPSBgLi4vLi4vLi4vLi4vYXNzZXRzL3RhYmxldXIvaW1nL3Rvb2xiYXIvJHt0aGlzLmhvc3QuZ2V0QXR0cmlidXRlKCduYW1lJyl9LnBuZ2A7XG5cbiAgICAgICAgaWYoICEgdGhpcy5ob3N0Lmhhc0F0dHJpYnV0ZSgndmFsdWUnKSApIHtcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoIGNvbnRlbnQgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBsZXQgY29sb3JfcGlja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbdHlwZT1cImNvbG9yXCJdJyk7XG4gICAgICAgICAgICBpZiggY29sb3JfcGlja2VyID09PSBudWxsICkge1xuICAgICAgICAgICAgICAgIGNvbG9yX3BpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgY29sb3JfcGlja2VyLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjb2xvclwiKTtcbiAgICAgICAgICAgICAgICBjb2xvcl9waWNrZXIuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGNvbG9yX3BpY2tlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2FuY2VsJykpO1xuXG4gICAgICAgICAgICBsZXQgY2FuY2VsID0gZmFsc2U7XG4gICAgICAgICAgICBjb2xvcl9waWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2FuY2VsJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNhbmNlbCA9IHRydWU7XG4gICAgICAgICAgICB9LCB7b25jZTogdHJ1ZX0pO1xuXG4gICAgICAgICAgICBjb2xvcl9waWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoIGNhbmNlbCApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY29sb3JfcGlja2VyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhvc3QuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KFwiY2xpY2tcIiwge2J1YmJsZXM6IHRydWV9KSApO1xuXG4gICAgICAgICAgICB9LCB7b25jZTogdHJ1ZX0pO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChjb2xvcl9waWNrZXIpO1xuICAgICAgICAgICAgY29sb3JfcGlja2VyLmNsaWNrKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoIGNvbnRlbnQsIHNwYW4gKTtcbiAgICB9XG59XG5cbkxJU1MuZGVmaW5lKCdjYWxjLXRvb2xiYXItaXRlbScsIENhbGNUb29sYmFySXRlbSk7XG5cbmV4cG9ydCBjbGFzcyBDYWxjVG9vbGJhciBleHRlbmRzIExJU1Moe1xuICAgIGNvbnRlbnQsXG4gICAgY3NzXG59KSB7XG5cbiAgICAjYnRuczogUmVjb3JkPHN0cmluZywgSFRNTEVsZW1lbnQ+ID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBsZXQgZm9udF9zaXplcyA9IFtcbiAgICAgICAgICAgIDYsIDcsIDgsIDksIDEwLCAxMC41LCAxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxOCwgMjAsIDIxLCAyMiwgMjQsIDI2LCAyOCwgMzIsIDM2LCA0MCwgNDIsIDQ0LCA0OCwgNTQsIDYwLCA2NiwgNzIsIDgwLCA4OCwgOTZcbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBidG5zID0gdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCdjYWxjLXRvb2xiYXItaXRlbScpO1xuICAgICAgICBmb3IobGV0IGJ0biBvZiBidG5zKVxuICAgICAgICAgICAgdGhpcy4jYnRuc1tidG4uZ2V0QXR0cmlidXRlKCduYW1lJykhXSA9IGJ0bjtcblxuICAgICAgICBjb25zdCBmb250X3NpemVzX3NlbGVjdCA9IHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yPEhUTUxTZWxlY3RFbGVtZW50PignLmZvbnRfc2l6ZScpITtcbiAgICAgICAgZm9yKGxldCBmb250X3NpemUgb2YgZm9udF9zaXplcykge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gbmV3IE9wdGlvbihgJHtmb250X3NpemUudG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgJywnKX0gcHRgLCBgJHtmb250X3NpemV9cHRgKTtcbiAgICAgICAgICAgIGZvbnRfc2l6ZXNfc2VsZWN0LmFwcGVuZChvcHRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGVsZW0gPSBldi50YXJnZXQhIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgaWYoIGVsZW0udGFnTmFtZSAhPT0gJ0NBTEMtVE9PTEJBUi1JVEVNJylcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGNvbnN0IG4gPSBlbGVtLmdldEF0dHJpYnV0ZSgnbmFtZScpISBhcyBrZXlvZiB0eXBlb2YgZmN0cztcbiAgICAgICAgICAgIGlmKCBlbGVtLmdldEF0dHJpYnV0ZSgndHlwZScpID09PSAnZmN0Jykge1xuXG4gICAgICAgICAgICAgICAgZmN0c1tuXS5hY3Rpb24odGhpcy4jc2hlZXQuc2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLiN1cGRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAgZWxlbS5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGVsZW0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlbGVtLmNsYXNzTGlzdC50b2dnbGUoJ2VuYWJsZWQnKTtcblxuICAgICAgICAgICAgbGV0IGZvcm1hdCA9IG5ldyBGb3JtYXQoe1tuXTogdmFsdWUgfSk7XG4gICAgICAgICAgICBmb3JtYXQuYXBwbHlUbyggdGhpcy4jc2hlZXQuc2VsZWN0aW9uICk7XG4gICAgICAgICAgICB0aGlzLiN1cGRhdGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9udF9zaXplc19zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIC8vVE9ETy4uLlxuICAgICAgICAgICAgbGV0IGZvcm1hdCA9IG5ldyBGb3JtYXQoe2ZvbnRfc2l6ZTogZm9udF9zaXplc19zZWxlY3QudmFsdWV9KTtcbiAgICAgICAgICAgIGZvcm1hdC5hcHBseVRvKCB0aGlzLiNzaGVldC5zZWxlY3Rpb24gKTtcbiAgICAgICAgICAgIHRoaXMuI3VwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAjc2hlZXQhOkNhbGNTaGVldDtcblxuXG4gICAgI3VwZGF0ZSgpIHtcblxuICAgICAgICBpZiggdGhpcy4jc2hlZXQuc2VsZWN0aW9uLmNlbGxzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBjb25zdCBmb3JtYXQgPSBGb3JtYXQuZXh0cmFjdEZvcm1hdCh0aGlzLiNzaGVldC5zZWxlY3Rpb24pO1xuXG4gICAgICAgIGZvcihsZXQgbmFtZSBpbiB0aGlzLiNidG5zKSB7XG5cbiAgICAgICAgICAgIGxldCBlbmFibGVkID0gZm9ybWF0LmdldFByb3BlcnR5KG5hbWUpID09PSB0cnVlO1xuICAgICAgICAgICAgaWYobmFtZSBpbiBmY3RzKVxuICAgICAgICAgICAgICAgIGVuYWJsZWQgPSBmY3RzW25hbWUgYXMga2V5b2YgdHlwZW9mIGZjdHNdLmVuYWJsZWQ/Lih0aGlzLiNzaGVldC5zZWxlY3Rpb24pID8/IGZhbHNlO1xuXG4gICAgICAgICAgICB0aGlzLiNidG5zW25hbWVdLmNsYXNzTGlzdC50b2dnbGUoJ2VuYWJsZWQnLCBlbmFibGVkIClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vVE9ETy4uLlxuICAgICAgICBjb25zdCBmb250X3NpemVzX3NlbGVjdCA9IHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yPEhUTUxTZWxlY3RFbGVtZW50PignLmZvbnRfc2l6ZScpITtcbiAgICAgICAgZm9udF9zaXplc19zZWxlY3QudmFsdWUgPSBmb3JtYXQuZ2V0UHJvcGVydHkoJ2ZvbnRfc2l6ZScpO1xuICAgICAgICAvL1RPRE86IHVwZGF0ZS4uLlxuICAgIH1cblxuICAgIHN5bmNUbyhzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcblxuXG4gICAgICAgIHNoZWV0LnNlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXYpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI3VwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4jdXBkYXRlKCk7XG5cbiAgICB9XG5cbn1cblxuTElTUy5kZWZpbmUoJ2NhbGMtdG9vbGJhcicsIENhbGNUb29sYmFyKTsiLCJleHBvcnQgZGVmYXVsdCBbXG4gICAge1xuICAgICAgICBuYW1lIDogXCJSIDEtMDEgVGFibGV1ciBldCBSZXBvcnRpbmdcIixcbiAgICAgICAgc25hbWU6IFwiUjEtMDEgVGFibGV1clwiLFxuICAgICAgICBwYXRoIDogXCJSMS0wMVwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ01cIixcbiAgICAgICAgICAgICAgICBwYXRoOiBcIkNNXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgXCJDTTFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDTTJcIlxuICAgICAgICAgICAgICAgIF1cblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlRQXCIsXG4gICAgICAgICAgICAgICAgcGF0aDogXCJUUFwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiVFAxXCJcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiUiAxLTAyIEJhc2VzIGRlIERvbm7DqWVzIFJlbGF0aW9ubmVsbGVzIDFcIixcbiAgICAgICAgc25hbWU6IFwiUjEtMDIgQkRSMVwiLFxuICAgICAgICBwYXRoIDogXCJSMS0wMlwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgXCJDTVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiVFBcIiAsXG4gICAgICAgICAgICAgICAgcGF0aCA6IFwiVFBcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIlRQMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQMlwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQM1wiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQNFwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRQNVwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IHJvb3RfcGF0aCA9IFtcImxvY2FsaG9zdFwiLCBcIjEyNy4wLjAuMVwiXS5pbmNsdWRlcyhsb2NhdGlvbi5ob3N0bmFtZSkgPyBcIi9kaXN0L2Rldi9wYWdlcy9cIiA6IFwiL0NvdXJzL2Rpc3QvZGV2L3BhZ2VzL1wiOyIsIlxuaW1wb3J0IHBhZ2VzLCB7cm9vdF9wYXRofSBmcm9tIFwiLi9jb250ZW50XCI7XG5cbi8qXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JlcHJpbnQnLCAoKSA9PiB7XG4gIC8vLi4uXG59KTtcbiovXG5cbi8vVE9ETzogbGlua3MuLi5cbmNvbnN0IG1haW4gICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpITtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIikhO1xuXG5jb25zdCB0aXRsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcImgxLCBoMiwgaDMsIGg0XCIpO1xuXG50eXBlIE5vZGUgPSB7XG4gICAgaHRtbCAgICA6IEhUTUxFbGVtZW50LFxuICAgIGxldmVsICAgOiBudW1iZXIsXG4gICAgcGFyZW50ICA6IG51bGx8Tm9kZSxcbiAgICBjaGlsZHJlbjogTm9kZVtdXG59O1xuXG5jb25zdCBodHJlZTogTm9kZSA9IHtcbiAgICBodG1sICAgIDogbWFpbixcbiAgICBsZXZlbCAgIDogMCxcbiAgICBwYXJlbnQgIDogbnVsbCxcbiAgICBjaGlsZHJlbjogW10sXG59O1xubGV0IGh0cmVlX2N1cnNvciA9IGh0cmVlO1xuZm9yKGxldCB0aXRsZSBvZiB0aXRsZXMpIHtcbiAgICBjb25zdCBsZXZlbCA9ICt0aXRsZS50YWdOYW1lLnNsaWNlKDEpO1xuICAgIFxuICAgIHdoaWxlKCBsZXZlbCA8PSBodHJlZV9jdXJzb3IubGV2ZWwgKVxuICAgICAgICBodHJlZV9jdXJzb3IgPSBodHJlZV9jdXJzb3IucGFyZW50ITtcblxuICAgIGNvbnN0IGVsZW06IE5vZGUgPSB7XG4gICAgICAgIGh0bWw6IHRpdGxlLFxuICAgICAgICBsZXZlbCxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICBwYXJlbnQ6IGh0cmVlX2N1cnNvclxuICAgIH07XG5cblxuICAgIGh0cmVlX2N1cnNvci5jaGlsZHJlbi5wdXNoKGVsZW0pO1xuXG4gICAgaHRyZWVfY3Vyc29yID0gZWxlbTtcbn1cblxuZnVuY3Rpb24gc2VhcmNoQ3VySGVhZGVyKGh0cmVlOiBOb2RlLCBwb3NpdGlvbjogbnVtYmVyKTogbnVsbCB8IE5vZGUge1xuXG4gICAgY29uc3QgaGVhZGVycyA9IGh0cmVlLmNoaWxkcmVuO1xuXG4gICAgZm9yKGxldCBpID0gaGVhZGVycy5sZW5ndGggLSAxOyBpID49IDA7IC0taSlcbiAgICAgICAgaWYoIGhlYWRlcnNbaV0uaHRtbC5vZmZzZXRUb3AgPD0gcG9zaXRpb24gKyAzMiApXG4gICAgICAgICAgICByZXR1cm4gc2VhcmNoQ3VySGVhZGVyKGhlYWRlcnNbaV0sIHBvc2l0aW9uKSA/PyBoZWFkZXJzW2ldO1xuXG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmNvbnN0IGhpZCA9IFtcbiAgICBbXSxcbiAgICBbXCJJXCIsIFwiSUlcIiwgXCJJSUlcIiwgXCJJVlwiXSxcbiAgICBbXCIxXCIsIFwiMlwiLFwiM1wiLFwiNVwiLFwiNlwiLFwiN1wiLFwiOFwiLFwiOVwiXSxcbiAgICBbXCJhXCIsIFwiYlwiLFwiY1wiLFwiZFwiLFwiZVwiLFwiZlwiLFwiZ1wiLFwiaFwiXSxcbl1cblxuZnVuY3Rpb24gZ2V0VGl0bGVQcmVmaXgoczogTm9kZSkge1xuXG4gICAgaWYoIHMubGV2ZWwgPj0gaGlkLmxlbmd0aCApXG4gICAgICAgIHJldHVybiBcIlwiO1xuXG4gICAgY29uc3QgaWR4ID0gcy5wYXJlbnQhLmNoaWxkcmVuLmluZGV4T2Yocyk7XG5cbiAgICBjb25zdCBudW0gPSBoaWRbcy5sZXZlbF1baWR4XTtcblxuICAgIHJldHVybiBgJHtudW19LiBgO1xufVxuXG5mdW5jdGlvbiBidWlsZE1lbnUobm9kZXM6IE5vZGVbXSkge1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICAgIG1lbnUuYXBwZW5kKCAuLi4gbm9kZXMubWFwKCAocyxpZHgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBpdGVtLnRleHRDb250ZW50PSBgJHtnZXRUaXRsZVByZWZpeChzKX0ke3MuaHRtbC50ZXh0Q29udGVudH1gO1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgYCMke3MuaHRtbC5pZH1gKTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSkgKTtcblxuICAgIHJldHVybiBtZW51O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVIZWFkZXIoKSB7XG5cbiAgICBjb25zdCBsYXN0ID0gc2VhcmNoQ3VySGVhZGVyKCBodHJlZSwgbWFpbi5zY3JvbGxUb3ApITtcblxuICAgIGxldCBoZWFkZXJzID0gW107XG4gICAgbGV0IGN1cnNvciAgPSBsYXN0O1xuXG4gICAgd2hpbGUoY3Vyc29yLmh0bWwgIT09IG1haW4pIHtcbiAgICAgICAgaGVhZGVycy5wdXNoKGN1cnNvcik7XG4gICAgICAgIGN1cnNvciA9IGN1cnNvci5wYXJlbnQhO1xuICAgIH1cblxuICAgIGNvbnN0IGh0bWwgPSBoZWFkZXJzLnJldmVyc2UoKS5tYXAoIChobm9kZSxpKSA9PiB7XG5cbiAgICAgICAgY29uc3QgaCA9IGhub2RlLmh0bWw7XG4gICAgICAgIGNvbnN0IGhfaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgbGluay50ZXh0Q29udGVudCA9IGAke2dldFRpdGxlUHJlZml4KGhub2RlKX0ke2gudGV4dENvbnRlbnR9YDtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgIyR7aC5pZH1gKTtcblxuICAgICAgICBjb25zdCBtZW51ID0gYnVpbGRNZW51KGhub2RlLnBhcmVudCEuY2hpbGRyZW4pO1xuICAgICAgICBoX2h0bWwuYXBwZW5kKGxpbmssIG1lbnUpO1xuXG4gICAgICAgIHJldHVybiBoX2h0bWw7XG4gICAgfSk7XG5cbiAgICBpZiggbGFzdC5jaGlsZHJlbi5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgZW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgICAgICBlbXB0eS5hcHBlbmQoIGJ1aWxkTWVudShsYXN0LmNoaWxkcmVuKSApO1xuXG4gICAgICAgIGh0bWwucHVzaChlbXB0eSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlX3BhZ2VfaHJlZihwYXRocHJlZml4OiBzdHJpbmcsIHBhdGg6IHN0cmluZywgZGVzYzogYW55KSB7XG5cbiAgICAgICAgbGV0IGhyZWYgPSBgJHtwYXRocHJlZml4fSR7cGF0aH0vYDtcblxuICAgICAgICB3aGlsZShkZXNjLmNoaWxkcmVuPy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRlc2MgPSBkZXNjLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgaHJlZiArPSBgJHtkZXNjLnBhdGggPz8gZGVzY30vYDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBocmVmO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VfcGFnZV9tZW51KHBhdGhwcmVmaXg6IHN0cmluZywgcGF0aDogc3RyaW5nLCBwYWdlczogYW55KSB7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBwYWdlcy5maW5kKCAocGFnZTogYW55KSA9PiBwYWdlID09PSBwYXRoIHx8IHBhZ2UucGF0aCA9PT0gcGF0aCApITtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgbGluay50ZXh0Q29udGVudCA9IGRlc2Muc25hbWUgPz8gZGVzYy5uYW1lID8/IGRlc2M7XG4gICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIG1ha2VfcGFnZV9ocmVmKHBhdGhwcmVmaXgsIHBhdGgsIGRlc2MpICk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gICAgXG4gICAgICAgICAgICBtZW51LmFwcGVuZCggLi4uIHBhZ2VzLm1hcCggKHBhZ2U6YW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQ9IHBhZ2UubmFtZSA/PyBwYWdlO1xuICAgICAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBtYWtlX3BhZ2VfaHJlZihwYXRocHJlZml4LCBwYWdlLnBhdGg/P3BhZ2UsIHBhZ2UpICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9KSApO1xuICAgIFxuICAgICAgICAgICAgaHRtbC5hcHBlbmQobGluaywgbWVudSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gICAgXG4gICAgbGV0IGN1cnBhZ2UgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc2xpY2Uocm9vdF9wYXRoLmxlbmd0aCkuc3BsaXQoJy8nKTtcblxuICAgIGNvbnN0IG1vZHVsZV9odG1sID0gbWFrZV9wYWdlX21lbnUocm9vdF9wYXRoLCBjdXJwYWdlWzBdLCBwYWdlcyk7XG5cbiAgICBjb25zdCBkZXNjID0gcGFnZXMuZmluZCggKHBhZ2U6IGFueSkgPT4gcGFnZS5wYXRoID09PSBjdXJwYWdlWzBdICkhO1xuICAgIGNvbnN0IHR5cGVfaHRtbCAgID0gbWFrZV9wYWdlX21lbnUocm9vdF9wYXRoICsgY3VycGFnZVswXSArIFwiL1wiLCBjdXJwYWdlWzFdLCBkZXNjLmNoaWxkcmVuKTtcblxuICAgIGNvbnN0IGRlc2NfdHlwZSA9IGRlc2MuY2hpbGRyZW4uZmluZCggKHBhZ2U6IGFueSkgPT4gKHBhZ2U/LnBhdGggPz8gcGFnZSkgPT09IGN1cnBhZ2VbMV0gKSE7XG4gICAgaWYoIHR5cGVvZiBkZXNjX3R5cGUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgLy8gdGl0bGUgbnVtXG4gICAgICAgIGNvbnN0IGRlc2MyX2lkeCA9IGRlc2NfdHlwZS5jaGlsZHJlbi5maW5kSW5kZXgoIChwYWdlOiBhbnkpID0+IHBhZ2U/LnBhdGggPz8gcGFnZSA9PT0gY3VycGFnZVsyXSApITtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taGVhZGVyX3N0YXJ0X2lkXCIsIGAke2Rlc2MyX2lkeH1gKTtcbiAgICAgICAgLy8gbWVudVxuICAgICAgICBjb25zdCBzZXNzaW9uX2h0bWwgICA9IG1ha2VfcGFnZV9tZW51KHJvb3RfcGF0aCArIGN1cnBhZ2VbMF0gKyBcIi9cIisgY3VycGFnZVsxXSArIFwiL1wiLCBjdXJwYWdlWzJdLCBkZXNjX3R5cGUuY2hpbGRyZW4pO1xuICAgICAgICBodG1sWzBdID0gc2Vzc2lvbl9odG1sO1xuICAgIH1cblxuICAgIGhlYWRlci5yZXBsYWNlQ2hpbGRyZW4obW9kdWxlX2h0bWwsIHR5cGVfaHRtbCwgLi4uaHRtbCk7XG59XG5cbm1haW4uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlSGVhZGVyKTtcbnVwZGF0ZUhlYWRlcigpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJ2YXIgd2VicGFja1F1ZXVlcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgcXVldWVzXCIpIDogXCJfX3dlYnBhY2tfcXVldWVzX19cIjtcbnZhciB3ZWJwYWNrRXhwb3J0cyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgZXhwb3J0c1wiKSA6IFwiX193ZWJwYWNrX2V4cG9ydHNfX1wiO1xudmFyIHdlYnBhY2tFcnJvciA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgZXJyb3JcIikgOiBcIl9fd2VicGFja19lcnJvcl9fXCI7XG52YXIgcmVzb2x2ZVF1ZXVlID0gKHF1ZXVlKSA9PiB7XG5cdGlmKHF1ZXVlICYmIHF1ZXVlLmQgPCAxKSB7XG5cdFx0cXVldWUuZCA9IDE7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0pKTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSA/IGZuLnIrKyA6IGZuKCkpKTtcblx0fVxufVxudmFyIHdyYXBEZXBzID0gKGRlcHMpID0+IChkZXBzLm1hcCgoZGVwKSA9PiB7XG5cdGlmKGRlcCAhPT0gbnVsbCAmJiB0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKSB7XG5cdFx0aWYoZGVwW3dlYnBhY2tRdWV1ZXNdKSByZXR1cm4gZGVwO1xuXHRcdGlmKGRlcC50aGVuKSB7XG5cdFx0XHR2YXIgcXVldWUgPSBbXTtcblx0XHRcdHF1ZXVlLmQgPSAwO1xuXHRcdFx0ZGVwLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFeHBvcnRzXSA9IHI7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9LCAoZSkgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0Vycm9yXSA9IGU7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9KTtcblx0XHRcdHZhciBvYmogPSB7fTtcblx0XHRcdG9ialt3ZWJwYWNrUXVldWVzXSA9IChmbikgPT4gKGZuKHF1ZXVlKSk7XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0fVxuXHR2YXIgcmV0ID0ge307XG5cdHJldFt3ZWJwYWNrUXVldWVzXSA9IHggPT4ge307XG5cdHJldFt3ZWJwYWNrRXhwb3J0c10gPSBkZXA7XG5cdHJldHVybiByZXQ7XG59KSk7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmEgPSAobW9kdWxlLCBib2R5LCBoYXNBd2FpdCkgPT4ge1xuXHR2YXIgcXVldWU7XG5cdGhhc0F3YWl0ICYmICgocXVldWUgPSBbXSkuZCA9IC0xKTtcblx0dmFyIGRlcFF1ZXVlcyA9IG5ldyBTZXQoKTtcblx0dmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcblx0dmFyIGN1cnJlbnREZXBzO1xuXHR2YXIgb3V0ZXJSZXNvbHZlO1xuXHR2YXIgcmVqZWN0O1xuXHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWopID0+IHtcblx0XHRyZWplY3QgPSByZWo7XG5cdFx0b3V0ZXJSZXNvbHZlID0gcmVzb2x2ZTtcblx0fSk7XG5cdHByb21pc2Vbd2VicGFja0V4cG9ydHNdID0gZXhwb3J0cztcblx0cHJvbWlzZVt3ZWJwYWNrUXVldWVzXSA9IChmbikgPT4gKHF1ZXVlICYmIGZuKHF1ZXVlKSwgZGVwUXVldWVzLmZvckVhY2goZm4pLCBwcm9taXNlW1wiY2F0Y2hcIl0oeCA9PiB7fSkpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IHByb21pc2U7XG5cdGJvZHkoKGRlcHMpID0+IHtcblx0XHRjdXJyZW50RGVwcyA9IHdyYXBEZXBzKGRlcHMpO1xuXHRcdHZhciBmbjtcblx0XHR2YXIgZ2V0UmVzdWx0ID0gKCkgPT4gKGN1cnJlbnREZXBzLm1hcCgoZCkgPT4ge1xuXHRcdFx0aWYoZFt3ZWJwYWNrRXJyb3JdKSB0aHJvdyBkW3dlYnBhY2tFcnJvcl07XG5cdFx0XHRyZXR1cm4gZFt3ZWJwYWNrRXhwb3J0c107XG5cdFx0fSkpXG5cdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdFx0Zm4gPSAoKSA9PiAocmVzb2x2ZShnZXRSZXN1bHQpKTtcblx0XHRcdGZuLnIgPSAwO1xuXHRcdFx0dmFyIGZuUXVldWUgPSAocSkgPT4gKHEgIT09IHF1ZXVlICYmICFkZXBRdWV1ZXMuaGFzKHEpICYmIChkZXBRdWV1ZXMuYWRkKHEpLCBxICYmICFxLmQgJiYgKGZuLnIrKywgcS5wdXNoKGZuKSkpKTtcblx0XHRcdGN1cnJlbnREZXBzLm1hcCgoZGVwKSA9PiAoZGVwW3dlYnBhY2tRdWV1ZXNdKGZuUXVldWUpKSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGZuLnIgPyBwcm9taXNlIDogZ2V0UmVzdWx0KCk7XG5cdH0sIChlcnIpID0+ICgoZXJyID8gcmVqZWN0KHByb21pc2Vbd2VicGFja0Vycm9yXSA9IGVycikgOiBvdXRlclJlc29sdmUoZXhwb3J0cykpLCByZXNvbHZlUXVldWUocXVldWUpKSk7XG5cdHF1ZXVlICYmIHF1ZXVlLmQgPCAwICYmIChxdWV1ZS5kID0gMCk7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnbW9kdWxlJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00yL2luZGV4LnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMi9pbmRleC5jc3NcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTIvaW5kZXgubWRcIik7XG4iLCIiXSwibmFtZXMiOlsiU2hhZG93Q2ZnIiwiX19jc3RyX2hvc3QiLCJDQU5fSEFWRV9TSEFET1ciLCJfY2FuSGFzU2hhZG93IiwidGFnIiwiaW5jbHVkZXMiLCJfZWxlbWVudDJ0YWduYW1lIiwiTElTUyIsImV4dGVuZHMiLCJwX2V4dGVuZHMiLCJob3N0IiwicF9ob3N0IiwiZGVwZW5kYW5jaWVzIiwicF9kZXBzIiwiYXR0cmlidXRlcyIsInBfYXR0cnMiLCJwYXJhbXMiLCJjb250ZW50IiwiY3NzIiwic2hhZG93IiwicF9zaGFkb3ciLCJIVE1MRWxlbWVudCIsIl9leHRlbmRzIiwiT2JqZWN0IiwiY2FuSGFzU2hhZG93IiwiRXJyb3IiLCJ1bmRlZmluZWQiLCJwdXNoIiwiSFRNTFRlbXBsYXRlRWxlbWVudCIsImlubmVySFRNTCIsInRyaW0iLCJSZXNwb25zZSIsInRleHQiLCJMSVNTQmFzZSIsIlBhcmFtZXRlcnMiLCJzdHlsZXNoZWV0cyIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImZldGNoX2NzcyIsIkNTU1N0eWxlU2hlZXQiLCJIVE1MU3R5bGVFbGVtZW50Iiwic2hlZXQiLCJzdHlsZSIsInJlcGxhY2UiLCJtYXAiLCJpZHgiLCJjb25zdHJ1Y3RvciIsImF0dHJzIiwic2V0QXR0ckRlZmF1bHQiLCJhdHRyIiwidmFsdWUiLCJvbkF0dHJDaGFuZ2VkIiwiX25hbWUiLCJfb2xkVmFsdWUiLCJfbmV3VmFsdWUiLCJpc0luRE9NIiwib25ET01Db25uZWN0ZWQiLCJvbkRPTURpc2Nvbm5lY3RlZCIsImV4dGVuZHNMSVNTIiwiTGlzcyIsInBhcmFtZXRlcnMiLCJhc3NpZ24iLCJFeHRlbmRlZExJU1MiLCJ0IiwiaWQiLCJidWlsZExJU1NIb3N0IiwiX3BhcmFtcyIsImFscmVhZHlEZWNsYXJlZENTUyIsIlNldCIsIkdFVCIsIlN5bWJvbCIsIlNFVCIsInByb3BlcnRpZXMiLCJmcm9tRW50cmllcyIsIm4iLCJlbnVtZXJhYmxlIiwiZ2V0Iiwic2V0IiwiQXR0cmlidXRlcyIsIm5hbWUiLCJkYXRhIiwiZGVmYXVsdHMiLCJzZXR0ZXIiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiTElTU0hvc3RCYXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJpc0luaXQiLCJpbml0aWFsaXplIiwiYXBpIiwiaW5pdCIsIkxJU1NTeW5jIiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCJjb25uZWN0ZWRDYWxsYmFjayIsImN1c3RvbUVsZW1lbnRzIiwidXBncmFkZSIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwib25DbGlja0V2ZW50Iiwib2JzIiwiZ2V0QXR0cmlidXRlIiwiYWRvcHRlZFN0eWxlU2hlZXRzIiwic2hhcmVkQ1NTIiwiY3Nzc2VsZWN0b3IiLCJDU1NTZWxlY3RvciIsImhhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImh0bWxfc3R5bGVzaGVldHMiLCJydWxlIiwiY3NzUnVsZXMiLCJjc3NUZXh0IiwiaGVhZCIsImFwcGVuZCIsImFkZCIsInRlbXBsYXRlX2VsZW0iLCJzdHIiLCJfIiwibWF0Y2giLCJjaGlsZE5vZGVzIiwib2JqIiwiaGFzU2hhZG93IiwiZ2V0UGFydCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRQYXJ0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0YWdOYW1lIiwicmVtb3ZlQXR0cmlidXRlIiwib2JzZXJ2ZWRBdHRyaWJ1dGVzIiwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIiwib2xkVmFsdWUiLCJuZXdWYWx1ZSIsIl9ET01Db250ZW50TG9hZGVkIiwicmVhZHlTdGF0ZSIsImRlZmluZSIsInRhZ25hbWUiLCJDb21wb25lbnRDbGFzcyIsIkNsYXNzIiwiaHRtbHRhZyIsImFsbCIsIkxJU1NjbGFzcyIsIm9wdHMiLCJpbnNlcnRHbG9iYWxDU1NSdWxlcyIsImNzc19zdHlsZSIsInJlcGxhY2VTeW5jIiwiaW5zZXJ0UnVsZSIsIkRFTEVHQVRFRF9FVkVOVFMiLCJBTFJFQURZX1BST0NFU1NFRCIsImV2IiwiaGFuZGxlcnMiLCJ0eXBlIiwiZWxlbSIsImNvbXBvc2VkUGF0aCIsIlNoYWRvd1Jvb3QiLCJ3aW5kb3ciLCJ0YXJnZXQiLCJzZWxlY3RvciIsImhhbmRsZXIiLCJtYXRjaGVzIiwiaW5zZXJ0R2xvYmFsRGVsZWdhdGVkTGlzdGVuZXIiLCJldmVudF9uYW1lIiwiY2xvc2VzdCIsImVsZW1lbnQiLCJyZXN1bHQiLCJyb290IiwiZ2V0Um9vdE5vZGUiLCJidWlsZCIsInBhcmVudCIsImNsYXNzZXMiLCJjc3N2YXJzIiwibGlzdGVuZXJzIiwiQ3VzdG9tQ2xhc3MiLCJ3aGVuRGVmaW5lZCIsInRvTG93ZXJDYXNlIiwiY2xhc3NMaXN0Iiwic2V0UHJvcGVydHkiLCJ0b2dnbGVBdHRyaWJ1dGUiLCJkYXRhc2V0IiwicmVwbGFjZUNoaWxkcmVuIiwiZ2V0TElTUyIsImNhbGxiYWNrIiwid2hlbkFsbERlZmluZWQiLCJ0YWduYW1lcyIsImlzRGVmaW5lZCIsImdldE5hbWUiLCJnZXRMSVNTU3luYyIsIl9idWlsZFFTIiwidGFnbmFtZV9vcl9wYXJlbnQiLCJxcyIsInFzbyIsInFzYSIsImVsZW1lbnRzIiwicHJvbWlzZXMiLCJxc2MiLCJyZXMiLCJxc1N5bmMiLCJxc2FTeW5jIiwicXNjU3luYyIsIkxJU1NfQXV0byIsIm5hdmlnYXRvciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsImNvbnRyb2xsZXIiLCJzcmMiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm11dGF0aW9uIiwiYWRkaXRpb24iLCJhZGRlZE5vZGVzIiwiRWxlbWVudCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwicmVzb3VyY2VzIiwiZGVmaW5lV2ViQ29tcG9uZW50IiwiZmlsZXMiLCJqcyIsImtsYXNzIiwiV2ViQ29tcG9uZW50IiwiZmlsZW5hbWVzIiwiZmlsZSIsImVuZHNXaXRoIiwiX2ltcG9ydCIsIl9mZXRjaFRleHQiLCJpIiwiQ3N0bUV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJhcmdzIiwiZGV0YWlsIiwiZmV0Y2hSZXNvdXJjZSIsInJlc291cmNlIiwiZmV0Y2giLCJ1cmkiLCJpc0xpc3NBdXRvIiwib3B0aW9ucyIsImhlYWRlcnMiLCJyZXNwb25zZSIsInN0YXR1cyIsImRlZmF1bHQiLCJlIiwiY29uc29sZSIsImxvZyIsIkhUTUxDTEFTU19SRUdFWCIsImVsZW1lbnROYW1lTG9va3VwVGFibGUiLCJleGVjIiwic2hlZXRfZm9ybWF0X2NvbnRlbnQiLCJnZXRDZWxscyIsImZvcm1hdCIsImZvbnRfc2l6ZSIsImZvcmVncm91bmRfY29sb3IiLCJiYWNrZ3JvdW5kX2NvbG9yIiwic2hlZXRfdG9vbGJhcl9mb3JtYXRfY29udGVudCIsInN5bmNUbyIsIkNlbGxMaXN0IiwiZGVmYXVsdEZvcm1hdCIsIkZvcm1hdE1hbmFnZXIiLCJjdHJsS2V5IiwiY2hhbmdlZCIsImtleSIsInNlbGVjdGlvbiIsInRvZ2dsZUZvcm1hdCIsInNoaWZ0S2V5IiwiRm9ybWF0cyIsImV1cm9zIiwicG91cmNlbnQiLCJudW1iZXIiLCJwcmV2ZW50RGVmYXVsdCIsImRpc3BhdGNoRXZlbnQiLCJwcmVjIiwidG9Mb2NhbGVTdHJpbmciLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJGb3JtYXQiLCJhcHBseVRvIiwiY2VsbCIsImMiLCJjZWxscyIsInZhbCIsInRleHRDb250ZW50IiwicmF3Q29udGVudCIsInIiLCJqIiwicmVsYXRpdmVUbyIsInJlbW92ZSIsInN0YXJ0c1dpdGgiLCJ0b2dnbGUiLCJnZXRQcm9wZXJ0eSIsImhhc1Byb3BlcnR5IiwiZXh0cmFjdEZvcm1hdCIsImYyIiwidmFsdWVzIiwiaXRlbSIsInNsaWNlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImNvbHNwYW4iLCJyb3dzcGFuIiwic3BhbiIsImhhc0F0dHJpYnV0ZSIsInByZWNpc2lvbiIsIkNhbGNGb3JtdWxhIiwiY3Vyc29yIiwic3RhdGVzIiwiY2VsbF9lZGl0Iiwic3RhdGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiRm9ybXVsYSIsInJhbmdlc190b2tlbiIsImRyb3ciLCJkY29sIiwibmV3X3JhbmdlcyIsInBvcyIsImNlbGxQb3MiLCJsYXN0SW5kZXhPZiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm5ld19mb3JtdWxhIiwib2Zmc2V0IiwiYmVnIiwiZW5kIiwicGFyc2VfZm9ybXVsYSIsInJhbmdlc1Rva2VuIiwidG9TdHJpbmciLCJleHRyYWN0VG9rZW4iLCJ0b2tlbiIsImhhc0NvbW1hIiwiTm9kZSIsImNoaWxkcmVuIiwiZmN0IiwiZXZhbCIsInRvTnVtYmVyIiwiYSIsIm9wX2ltcGwiLCJiIiwiTWF0aCIsInBvdyIsIm9wX3ByaW8iLCJvcHMiLCJvcCIsInRva2VubGlzdDJUcmVlIiwidG9rZW5zIiwibmIiLCJyYXciLCJjdXIiLCJwcmlvcml0eSIsImZpbmRJbmRleCIsInVfb3AiLCJvcF90b2tlbiIsImxlZnQiLCJyaWdodCIsImN1clRva2VuIiwibm9kZSIsInJhbmdlcyIsImZpbHRlciIsIlBsYWdlRm9ybXVsYSIsImNvZGUiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJzZWxlY3RlZCIsImNsZWFyIiwiYmx1ciIsInBsYWdlX25hbWUiLCJQbGFnZVNlbGVjdG9yIiwic2VsZWN0ZWRfY2VsbHMiLCJnZXRSYW5nZSIsImNvbHMiLCJ0Ym9keSIsImNvbF9pZCIsImNsaWVudFgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ4Iiwicm93cyIsInJvd19pZCIsImNsaWVudFkiLCJ5IiwibWFpbiIsIm9uX21vdXNlX21vdmUiLCJyZWYiLCJwb3MycmVmIiwibmJSb3dzIiwibmJDb2xzIiwib25jZSIsImlzQWN0aXZlIiwib25JbnB1dCIsInJyYW5nZSIsImdldFNlbGVjdGlvbiIsImdldFJhbmdlQXQiLCJzdGFydE9mZnNldCIsImNoaWxkIiwibm9kZVR5cGUiLCJURVhUX05PREUiLCJzdGFydENvbnRhaW5lciIsInJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJzZWwiLCJzZXRTdGFydCIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJ0b1ByZWNpc2lvbiIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJwYXJzZUlucHV0IiwidGVzdF9udW1iZXIiLCJOdW1iZXIiLCJpc05hTiIsInBhcnRzIiwic3BsaXQiLCJ0ZXN0X2RhdGUiLCJnZXRGdWxsWWVhciIsIlN0YXRlIiwid2FybiIsInByZXZfc3RhdGUiLCJTdGF0ZXMiLCJDYWxjU2hlZXQiLCJlbnRyaWVzIiwicyIsInJlbW92ZUhpZ2hsaWdodHMiLCJoIiwicmVtb3ZlQ29weUhpZ2hsaWdodCIsInNldFJlY3QiLCJ3IiwidGJsX29mZnNldCIsIm9mZnNldFRvcCIsImdldFJlY3QiLCJzdGFydCIsIm9mZnNldExlZnQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImhpZ2hsaWdodCIsImlkX29yX2NsYXNzbGlzdCIsImhpZ2giLCJyb3dfZGlmZiIsImNvbF9kaWZmIiwicm93IiwiY29sIiwicmVjb3B5IiwibGFzdF9yZWNvcHlfdGFyZ2V0IiwibGFzdF9yZWNvcHlfZGlyIiwib25fcmVjb3B5X21vdmUiLCJkX3B4Iiwid2lkdGgiLCJkX3B5IiwiaGVpZ2h0IiwiZF94IiwiZF95Iiwic2lnbiIsImFicyIsInByZXYiLCJkaWZmX3giLCJkaWZmX3kiLCJwb3NfY3VyIiwic2V0RGF0ZSIsImdldERhdGUiLCJjbGFzc05hbWUiLCJmb3JtdWxhX2JhciIsInBsYWdlIiwiZm9ybXVsYSIsInJvIiwiaXNfcm8iLCJmb2N1cyIsImFsdEtleSIsImRzdCIsImRlZXBDbG9uZSIsImRlbGV0ZUZvcm1hdCIsImRlbGV0ZUNvbnRlbnQiLCJkX3JvdyIsImRfY29sIiwibmV4dCIsImNsaWNrIiwiYnViYmxlcyIsIm9uSW5wdXQyIiwicmFuZ2VzX2NvbG9ycyIsImN1cl9vZmZzZXQiLCJyYW5nZV9uYW1lIiwidXBkYXRlIiwicGFyZW50RWxlbWVudCIsIm5icm93cyIsIm5iY29scyIsInRhYmxlIiwiY29sX2h0bWwiLCJ0aCIsInJvd19odG1sIiwiZnJvbSIsInRvIiwiYmVnX3JvdyIsImJlZ19jb2wiLCJlbmRfcm93IiwiZW5kX2NvbCIsImNlbGxfb3Jfcm93aWQiLCJyZXBsYWNlQWxsIiwiYl9yb3dfaWQiLCJiX2NvbF9pZCIsImNoYXJDb2RlQXQiLCJlX3Jvd19pZCIsImVfY29sX2lkIiwicmVmMnBvcyIsImZpcnN0RWxlbWVudENoaWxkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiRXZlbnRUYXJnZXQiLCJzb3J0IiwibWluIiwibWF4IiwibmJfY29scyIsImZsb29yIiwiZiIsImlzRm9ybWF0IiwicmF3X3ZhbCIsIkhUTUxUYWJsZUNlbGxFbGVtZW50IiwidiIsImRpZmYiLCJzZXRSTyIsImNsb25lIiwiY2xvbmVOb2RlIiwibWVyZ2UiLCJjZWxsbGlzdCIsImlzX2FsaWduIiwidmFsaWduX21pZGRsZSIsImFsaWduX2NlbnRlciIsInVubWVyZ2UiLCJyZXRyYWl0IiwiZGVsdGFfaW5kZW50IiwibmV3X2Zvcm1hdCIsImFsaWduX2xlZnQiLCJpbmRlbnQiLCJkZWx0YV9wcmVjIiwiZmN0cyIsImFjdGlvbiIsImVuYWJsZWQiLCJib3JkZXJfdG9wIiwiYm9yZGVyX2JvdHRvbSIsImJvcmRlcl9sZWZ0IiwiYm9yZGVyX3JpZ2h0IiwidW5tZXJnZWQiLCJpdGVtY3NzIiwiQ2FsY1Rvb2xiYXJJdGVtIiwiY29sb3JfcGlja2VyIiwiY2FuY2VsIiwiYm9keSIsIkNhbGNUb29sYmFyIiwiZm9udF9zaXplcyIsImJ0bnMiLCJidG4iLCJmb250X3NpemVzX3NlbGVjdCIsIm9wdGlvbiIsIk9wdGlvbiIsInNuYW1lIiwicGF0aCIsInJvb3RfcGF0aCIsImhvc3RuYW1lIiwicGFnZXMiLCJoZWFkZXIiLCJ0aXRsZXMiLCJodHJlZSIsImh0bWwiLCJsZXZlbCIsImh0cmVlX2N1cnNvciIsInRpdGxlIiwic2VhcmNoQ3VySGVhZGVyIiwicG9zaXRpb24iLCJoaWQiLCJnZXRUaXRsZVByZWZpeCIsImluZGV4T2YiLCJudW0iLCJidWlsZE1lbnUiLCJub2RlcyIsIm1lbnUiLCJ1cGRhdGVIZWFkZXIiLCJsYXN0Iiwic2Nyb2xsVG9wIiwicmV2ZXJzZSIsImhub2RlIiwiaF9odG1sIiwibGluayIsImVtcHR5IiwibWFrZV9wYWdlX2hyZWYiLCJwYXRocHJlZml4IiwiZGVzYyIsImhyZWYiLCJtYWtlX3BhZ2VfbWVudSIsImZpbmQiLCJwYWdlIiwiY3VycGFnZSIsIm1vZHVsZV9odG1sIiwidHlwZV9odG1sIiwiZGVzY190eXBlIiwiZGVzYzJfaWR4Iiwic2Vzc2lvbl9odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==