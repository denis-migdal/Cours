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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host table {\n    border-collapse: collapse;\n    border-top-color: transparent;\n\n    & > tbody {\n        outline: 0px solid transparent;\n    }\n\n    & > tbody > tr:first-child {\n        border-top-color: transparent;\n        \n        & > th {\n            border-top-color: transparent;\n        }\n    }\n}\n\n:host :is(tr,th,td) {\n    border:1px solid #c0c0c0;\n }\n\n:host tr {\n    height: 0.45cm;\n    line-height: 0.45cm;\n}\n\n\n:host :is(td, th):not([contenteditable]) {\n    user-select: none;\n}\n/*\n:host td[contenteditable] {\n    user-select: text;\n}*/\n\n:host :is(td, th) {\n    color: black;\n    width: 2.26cm;\n    height: 0.45cm;\n    font-size: 10pt;\n    box-sizing: border-box;\n    font-family: 'Liberation Sans';\n}\n\n:host tr > th:first-child {\n    width: calc( 2.26cm / 2.5) ;\n}\n\n:host {\n    display: inline-flex;\n    flex-direction: column;\n}\n\n:host div.toolbar {\n    background-color: #cecece;\n    display: flex;\n    gap: 5px;\n    padding: 4px;\n\n    & > *:not(:first-child) {\n        flex: 1 1 0;\n    }\n    & > *:first-child {\n        width: calc( 1.5 * 2.26cm );\n    }\n}\n\n:host th {\n    background-color: #cecece;\n    border-color: #8a8a8a;\n    font-weight: normal;\n\n    &.highlight {\n        background-color: #398ee7;\n        color: white;\n    }\n}\n\n:host(.cell_edit) .cursor {\n    display: none;\n}\n\n:host {\n\n    .cursor {\n        position: absolute;\n        padding: 0;\n        box-sizing: border-box;\n        background: none;\n        border: 2px solid #398ee7;\n        pointer-events: none;\n    }\n}\n\n:host td {\n    background-color: white;\n    white-space: pre;\n\n    &:is([data-type=\"number\"],[data-type=\"date\"], [data-type=\"boolean\"]) {\n        text-align: right;\n    }\n\n    &[contenteditable] {\n        outline: 0px solid transparent;\n    }\n\n    &.highlight {\n        background-color: #cde3f9;\n    }\n\n    /** style **/\n    &.italic {\n        font-style: italic;\n    }\n    &.bold {\n        font-weight: bold;\n    }\n    &.align-left {\n        text-align: left;\n    }\n    &.align-center {\n        text-align: center;\n    }\n    &.align-right {\n        text-align: right;\n    }\n}\n\n:host {\n    position: relative;\n}\n\n:host .range_highlight {\n    position: absolute;\n    padding: 0;\n    box-sizing: border-box;\n\n    background: none;\n    border: 2px solid red;\n\n    border-color: var(--highlight_color);\n}\n\n:host .formula_highlight {\n    color: var(--highlight_color);\n}\n\n:host .highlight_0 {\n    --highlight_color: #fa0c0c;\n}\n\n:host .highlight_1 {\n    --highlight_color: #fa0cfa;\n}\n\n:host .highlight_2 {\n    --highlight_color: #0c840c;\n}\n\n:host .highlight_3 {\n    --highlight_color: #010180;\n}\n\n:host .highlight_4 {\n    --highlight_color: #871717;\n}\n\n:host .highlight_5 {\n    --highlight_color: #871787;\n}\n\n:host .highlight_6 {\n    --highlight_color: #84840c;\n}\n\n:host .highlight_7 {\n    --highlight_color: #0c0cfa;\n}\n\n\n.copy_highlight {\n    position: absolute;\n    border: 1px dashed black;\n    background: none;\n    pointer-events: none;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* Tomorrow Theme */\n/* http://jmblog.github.com/color-themes-for-google-code-highlightjs */\n/* Original theme - https://github.com/chriskempson/tomorrow-theme */\n\n/* Tomorrow Comment */\n.hljs-comment,\n.hljs-quote {\n\tcolor: #8e908c;\n}\n\n/* Tomorrow Red */\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-regexp,\n.hljs-deletion {\n\tcolor: #c82829;\n}\n\n/* Tomorrow Orange */\n.hljs-number,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-literal,\n.hljs-type,\n.hljs-params,\n.hljs-meta,\n.hljs-link {\n\tcolor: #f5871f;\n}\n\n/* Tomorrow Yellow */\n.hljs-attribute {\n\tcolor: #eab700;\n}\n\n/* Tomorrow Green */\n.hljs-string,\n.hljs-symbol,\n.hljs-bullet,\n.hljs-addition {\n\tcolor: #718c00;\n}\n\n/* Tomorrow Blue */\n.hljs-title,\n.hljs-section {\n\tcolor: #4271ae;\n}\n\n/* Tomorrow Purple */\n.hljs-keyword,\n.hljs-selector-tag {\n\tcolor: #8959a8;\n}\n\n.hljs {\n\tdisplay: block;\n\toverflow-x: auto;\n\tcolor: #4d4d4c;\n\tpadding: 0.5em;\n}\n\n.hljs-emphasis {\n\tfont-style: italic;\n}\n\n.hljs-strong {\n\tfont-weight: bold;\n}");

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

/***/ "./src/pages/R1-01/CM/CM1/index.ts":
/*!*****************************************!*\
  !*** ./src/pages/R1-01/CM/CM1/index.ts ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _struct_menu_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../struct/menu.ts */ "./src/struct/menu.ts");
/* harmony import */ var _struct_calc_sheet_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../struct/calc/sheet.ts */ "./src/struct/calc/sheet.ts");
/* harmony import */ var _libs_LISS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/LISS */ "./libs/LISS/index.ts");


// 1

const s_formula = await _libs_LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_formula');
s_formula.getCells("A1:C1").toggleClass("bold").toggleClass("align-center").content = [
    "Quantité",
    "Prix unitaire",
    "Prix total"
];
function euros(value) {
    if (value === undefined) return '';
    return value.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }) + '€';
//.toFixed(2) + '€';
}
s_formula.getCells("A2:A4").content = [
    23,
    12,
    44
];
s_formula.getCells("B2:B4").setFormat(euros).content = [
    0.2,
    0.3,
    0.4
];
s_formula.getCells("C2:C4").content = [
    "=A2*B2",
    "=A3*B3",
    "=A4*B4"
];
/**/ const s_complex_formula = await _libs_LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_complex_formula');
s_complex_formula.getCells("A1:C1").toggleClass("bold").toggleClass("align-center").content = [
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
/**/ const s_types = await _libs_LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_types');
s_types.getCells("A1:E1").toggleClass("bold").toggleClass("align-center").content = [
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
const s_cursor = await _libs_LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_cursor');
s_cursor.getCells("A1:H1").toggleClass("bold", true).toggleClass("align-center", true).content = "*";
s_cursor.getCells("A4:H4").toggleClass("bold", true).toggleClass("align-center", true).content = "*";
s_cursor.getCells("D1:E4").toggleClass("bold", true).toggleClass("align-center", true).content = "*";
s_cursor.getCells("A1:A4").toggleClass("bold", true).toggleClass("align-center", true).content = "*";
s_cursor.getCells("H1:H4", true).toggleClass("bold", true).toggleClass("align-center", true).content = "*";
const s_$formula = [
    await _libs_LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet____formula'),
    await _libs_LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_x__formula'),
    await _libs_LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet__x_formula'),
    await _libs_LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_xx_formula')
];
for(let i = 0; i < s_$formula.length; ++i){
    const s_$form = s_$formula[i];
    s_$form.getCells("A1:D1").toggleClass("bold").content = [
        0,
        1,
        2,
        3
    ];
    s_$form.getCells("A2:A4").toggleClass("bold").content = [
        1,
        2,
        3
    ];
    let ref = "=A1";
    if (i === 1) ref = "=$A1";
    if (i === 2) ref = "=A$1";
    if (i === 3) ref = "=$A$1";
    s_$form.getCells("B2").content = ref;
    s_$form.getCells("A1:D4").toggleClass("align-center");
}
const sheet_recopie_motivation = await _libs_LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_recopie_motivation');
sheet_recopie_motivation.getCells("A1:D4").toggleClass("align-center").content = [
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
sheet_recopie_motivation.getCells("A1:D1").toggleClass("bold");
sheet_recopie_motivation.getCells("A2:A4").toggleClass("bold");
const sheet_recopie_motivation_empty = await _libs_LISS__WEBPACK_IMPORTED_MODULE_2__["default"].qs('#sheet_recopie_motivation_empty');
sheet_recopie_motivation_empty.getCells("A1:D4").toggleClass("align-center").content = [
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
sheet_recopie_motivation_empty.getCells("A1:D1").toggleClass("bold");
sheet_recopie_motivation_empty.getCells("A2:A4").toggleClass("bold");
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
class X extends (0,_libs_LISS__WEBPACK_IMPORTED_MODULE_2__["default"])({
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
_libs_LISS__WEBPACK_IMPORTED_MODULE_2__["default"].define('test-test', X);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

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
                this.#input.value = "";
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
    console.warn(op_token.value);
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
const fake_sheet = null;
console.warn('="22"', parse_formula('="22"').exec(fake_sheet));
console.warn('=22', parse_formula('=22').exec(fake_sheet));
console.warn('=22*2', parse_formula('=22*2').exec(fake_sheet));
console.warn('=2+(2*2)', parse_formula('=2+(2*2)').exec(fake_sheet));
console.warn('=2+2*2', parse_formula('=2+(2*2)').exec(fake_sheet));
console.warn('=2*2+2', parse_formula('=2+(2*2)').exec(fake_sheet)); //extractToken("=2*2", 1);


/***/ }),

/***/ "./src/struct/calc/plage_editor.ts":
/*!*****************************************!*\
  !*** ./src/struct/calc/plage_editor.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlageFormula: () => (/* binding */ PlageFormula),
/* harmony export */   cellpos2cellname: () => (/* binding */ cellpos2cellname)
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
            let cell = selection.cells;
            if (cell.length === 0) {
                this.#input.textContent = "";
                return;
            }
            if (cell.length === 1) {
                this.#input.textContent = cellpos2cellname(...sheet.cellPos(cell[0]));
                return;
            }
            //TODO...
            throw new Error('not implemented');
        });
    }
}
function cellpos2cellname(rowid, colid) {
    return `${String.fromCharCode(65 + colid - 1)}${rowid}`;
}
_libs_LISS__WEBPACK_IMPORTED_MODULE_0__["default"].define('calc-plage', PlageFormula);


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
/* harmony import */ var _formula_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formula_editor */ "./src/struct/calc/formula_editor.ts");
/* harmony import */ var _plage_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plage_editor */ "./src/struct/calc/plage_editor.ts");
/* harmony import */ var _formula_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formula_parser */ "./src/struct/calc/formula_parser.ts");
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
function defaultFormat(value) {
    if (typeof value === "number") return `${+value.toPrecision(7)}`.replace('.', ',');
    if (typeof value === "boolean") return value ? 'VRAI' : 'FAUX';
    if (typeof value === "object" && value instanceof Date) {
        return value.toLocaleDateString("fr-FR");
    }
    if (typeof value === "object" && value instanceof _formula_parser__WEBPACK_IMPORTED_MODULE_2__.Formula) {
        return value.toString(); //TODO...
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
    "cell_edit": State
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
    #selection = new CellList(this, []);
    #cursor = new CellList(this, []);
    get cursor() {
        return this.#cursor;
    }
    get selection() {
        return this.#selection;
    }
    removeHighlights() {
        for (let h of this.content.querySelectorAll('.range_highlight'))h.remove();
    }
    removeCopyHighlight() {
        for (let h of this.content.querySelectorAll('.copy_highlight'))h.remove();
    }
    highlight(start, end, id_or_classlist) {
        const high = document.createElement('div');
        if (typeof id_or_classlist === "number") high.classList.add('range_highlight', `highlight_${id_or_classlist}`);
        else high.classList.add(...id_or_classlist);
        const tbl_offset = this.content.querySelector('table').offsetTop;
        high.style.setProperty('top', `${tbl_offset + start.offsetTop}px`);
        high.style.setProperty('height', `${end.offsetTop + end.clientHeight - start.offsetTop + 1}px`);
        high.style.setProperty('left', `${start.offsetLeft}px`);
        high.style.setProperty('width', `${end.offsetLeft + end.clientWidth - start.offsetLeft}px`);
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
        this.#cursor.addEventListener('change', (ev)=>{
            //TODO: could be better...
            for (let cell of this.content.querySelectorAll('.cursor'))cell.remove();
            const cells = this.#cursor.cells;
            if (cells.length !== 0) this.highlight(cells[0], cells[cells.length - 1], [
                "cursor"
            ]);
        });
        this.#selection.addEventListener('change', (ev)=>{
            for (let cell of this.content.querySelectorAll('.highlight'))cell.classList.remove('highlight');
            for (let cell of this.#selection.cells){
                if (this.#selection.cells.length !== 1) cell.classList.add('highlight');
                const [row, col] = this.#cellPos(cell);
                this.#tbody.children[0].children[col].classList.add("highlight");
                this.#tbody.children[row].children[0].classList.add("highlight");
            }
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
            if (target.tagName === "TH") throw new Error('not implemented');
            // todo: shift key + super key + ?
            if (target.tagName !== "TD") return;
            this.removeHighlights();
            // the cell is being edited...
            if (target.hasAttribute('contenteditable')) return;
            const cell = target;
            this.#selection.clear();
            this.#selection.add(cell);
            this.#cursor.clear();
            this.#cursor.add(cell);
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
                    this.cursor.deleteContent();
                    this.#cursor.dispatchEvent(new CustomEvent("change"));
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
                    next.dispatchEvent(new CustomEvent('click', {
                        bubbles: true
                    }));
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
                next.dispatchEvent(new CustomEvent('click', {
                    bubbles: true
                }));
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
            console.warn("edit_end");
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
            console.log("f-out", ev);
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
            row_id = +cell_or_rowid[1];
            col_id = cell_or_rowid.charCodeAt(0) + 1 - 65;
        }
        const cell = this.#tbody.children[+row_id].children[col_id];
        return new CellList(this, [
            cell
        ]);
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
                    if (type === "object" && value instanceof Date) type = "date";
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
    get cells() {
        return this.#cells;
    }
    get sheet() {
        return this.#sheet;
    }
    toggleClass(css_class, enforce) {
        for (let cell of this.#cells)cell.classList.toggle(css_class, enforce);
        return this;
    }
    setFormat(format) {
        for (let cell of this.#cells){
            cell.format = format;
            cell.textContent = format(cell.rawContent);
        }
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
/******/ __webpack_require__("./src/pages/R1-01/CM/CM1/index.ts");
/******/ __webpack_require__("./src/pages/R1-01/CM/CM1/index.css");
/******/ var __webpack_exports__ = __webpack_require__("./src/pages/R1-01/CM/CM1/index.md");
/******/ var __webpack_exports__default = __webpack_exports__["default"];
/******/ export { __webpack_exports__default as default };
/******/ 

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBOztTQUVBO1NBQ0E7O1NBRUE7U0FDQTtTQUNBOzs7OztVQ3RCQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLElBQUk7VUFDSjtVQUNBO1VBQ0EsSUFBSTtVQUNKO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLENBQUM7VUFDRDtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsRUFBRTtVQUNGO1VBQ0Esc0dBQXNHO1VBQ3RHO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsR0FBRztVQUNIO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxHQUFHO1VBQ0g7VUFDQSxFQUFFO1VBQ0Y7VUFDQTs7Ozs7VUNoRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQSx5Q0FBeUMsd0NBQXdDO1VBQ2pGO1VBQ0E7VUFDQTs7Ozs7VUNQQTs7Ozs7VUNBQTtVQUNBO1VBQ0E7VUFDQSx1REFBdUQsaUJBQWlCO1VBQ3hFO1VBQ0EsZ0RBQWdELGFBQWE7VUFDN0Q7Ozs7O1VDTkE7Ozs7O1NFQUE7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00xL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTEvaW5kZXgubWQiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvaW5kZXguY3NzIiwid2VicGFjazovL0NvdXJzLy4vbGlicy9MSVNTL2luZGV4LnRzIiwid2VicGFjazovL0NvdXJzLy4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMS9pbmRleC50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9mb3JtdWxhX2VkaXRvci50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9mb3JtdWxhX3BhcnNlci50cyIsIndlYnBhY2s6Ly9Db3Vycy8uL3NyYy9zdHJ1Y3QvY2FsYy9wbGFnZV9lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NhbGMvc2hlZXQudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L2NvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vQ291cnMvLi9zcmMvc3RydWN0L21lbnUudHMiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL2FzeW5jIG1vZHVsZSIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Db3Vycy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vQ291cnMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL0NvdXJzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicGFnZXMvUjEtMDEvQ00vQ00xL2luZGV4Lmh0bWxcIjsiLCJleHBvcnQgZGVmYXVsdCBcIjpob3N0IHRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICAgICYgPiB0Ym9keSB7XFxuICAgICAgICBvdXRsaW5lOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgJiA+IHRib2R5ID4gdHI6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBcXG4gICAgICAgICYgPiB0aCB7XFxuICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuOmhvc3QgOmlzKHRyLHRoLHRkKSB7XFxuICAgIGJvcmRlcjoxcHggc29saWQgI2MwYzBjMDtcXG4gfVxcblxcbjpob3N0IHRyIHtcXG4gICAgaGVpZ2h0OiAwLjQ1Y207XFxuICAgIGxpbmUtaGVpZ2h0OiAwLjQ1Y207XFxufVxcblxcblxcbjpob3N0IDppcyh0ZCwgdGgpOm5vdChbY29udGVudGVkaXRhYmxlXSkge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLypcXG46aG9zdCB0ZFtjb250ZW50ZWRpdGFibGVdIHtcXG4gICAgdXNlci1zZWxlY3Q6IHRleHQ7XFxufSovXFxuXFxuOmhvc3QgOmlzKHRkLCB0aCkge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiAyLjI2Y207XFxuICAgIGhlaWdodDogMC40NWNtO1xcbiAgICBmb250LXNpemU6IDEwcHQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGliZXJhdGlvbiBTYW5zJztcXG59XFxuXFxuOmhvc3QgdHIgPiB0aDpmaXJzdC1jaGlsZCB7XFxuICAgIHdpZHRoOiBjYWxjKCAyLjI2Y20gLyAyLjUpIDtcXG59XFxuXFxuOmhvc3Qge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuOmhvc3QgZGl2LnRvb2xiYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgcGFkZGluZzogNHB4O1xcblxcbiAgICAmID4gKjpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICAgICAgICBmbGV4OiAxIDEgMDtcXG4gICAgfVxcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICB3aWR0aDogY2FsYyggMS41ICogMi4yNmNtICk7XFxuICAgIH1cXG59XFxuXFxuOmhvc3QgdGgge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xcbiAgICBib3JkZXItY29sb3I6ICM4YThhOGE7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuXFxuICAgICYuaGlnaGxpZ2h0IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzOThlZTc7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgIH1cXG59XFxuXFxuOmhvc3QoLmNlbGxfZWRpdCkgLmN1cnNvciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbjpob3N0IHtcXG5cXG4gICAgLmN1cnNvciB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMzk4ZWU3O1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIH1cXG59XFxuXFxuOmhvc3QgdGQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcXG5cXG4gICAgJjppcyhbZGF0YS10eXBlPVxcXCJudW1iZXJcXFwiXSxbZGF0YS10eXBlPVxcXCJkYXRlXFxcIl0sIFtkYXRhLXR5cGU9XFxcImJvb2xlYW5cXFwiXSkge1xcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIH1cXG5cXG4gICAgJltjb250ZW50ZWRpdGFibGVdIHtcXG4gICAgICAgIG91dGxpbmU6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgfVxcblxcbiAgICAmLmhpZ2hsaWdodCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RlM2Y5O1xcbiAgICB9XFxuXFxuICAgIC8qKiBzdHlsZSAqKi9cXG4gICAgJi5pdGFsaWMge1xcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICB9XFxuICAgICYuYm9sZCB7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcbiAgICAmLmFsaWduLWxlZnQge1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgfVxcbiAgICAmLmFsaWduLWNlbnRlciB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgJi5hbGlnbi1yaWdodCB7XFxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgfVxcbn1cXG5cXG46aG9zdCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuOmhvc3QgLnJhbmdlX2hpZ2hsaWdodCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcblxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWhpZ2hsaWdodF9jb2xvcik7XFxufVxcblxcbjpob3N0IC5mb3JtdWxhX2hpZ2hsaWdodCB7XFxuICAgIGNvbG9yOiB2YXIoLS1oaWdobGlnaHRfY29sb3IpO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzAge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogI2ZhMGMwYztcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF8xIHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICNmYTBjZmE7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfMiB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjMGM4NDBjO1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzMge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzAxMDE4MDtcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF80IHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICM4NzE3MTc7XFxufVxcblxcbjpob3N0IC5oaWdobGlnaHRfNSB7XFxuICAgIC0taGlnaGxpZ2h0X2NvbG9yOiAjODcxNzg3O1xcbn1cXG5cXG46aG9zdCAuaGlnaGxpZ2h0XzYge1xcbiAgICAtLWhpZ2hsaWdodF9jb2xvcjogIzg0ODQwYztcXG59XFxuXFxuOmhvc3QgLmhpZ2hsaWdodF83IHtcXG4gICAgLS1oaWdobGlnaHRfY29sb3I6ICMwYzBjZmE7XFxufVxcblxcblxcbi5jb3B5X2hpZ2hsaWdodCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogVG9tb3Jyb3cgVGhlbWUgKi9cXG4vKiBodHRwOi8vam1ibG9nLmdpdGh1Yi5jb20vY29sb3ItdGhlbWVzLWZvci1nb29nbGUtY29kZS1oaWdobGlnaHRqcyAqL1xcbi8qIE9yaWdpbmFsIHRoZW1lIC0gaHR0cHM6Ly9naXRodWIuY29tL2Nocmlza2VtcHNvbi90b21vcnJvdy10aGVtZSAqL1xcblxcbi8qIFRvbW9ycm93IENvbW1lbnQgKi9cXG4uaGxqcy1jb21tZW50LFxcbi5obGpzLXF1b3RlIHtcXG5cXHRjb2xvcjogIzhlOTA4YztcXG59XFxuXFxuLyogVG9tb3Jyb3cgUmVkICovXFxuLmhsanMtdmFyaWFibGUsXFxuLmhsanMtdGVtcGxhdGUtdmFyaWFibGUsXFxuLmhsanMtdGFnLFxcbi5obGpzLW5hbWUsXFxuLmhsanMtc2VsZWN0b3ItaWQsXFxuLmhsanMtc2VsZWN0b3ItY2xhc3MsXFxuLmhsanMtcmVnZXhwLFxcbi5obGpzLWRlbGV0aW9uIHtcXG5cXHRjb2xvcjogI2M4MjgyOTtcXG59XFxuXFxuLyogVG9tb3Jyb3cgT3JhbmdlICovXFxuLmhsanMtbnVtYmVyLFxcbi5obGpzLWJ1aWx0X2luLFxcbi5obGpzLWJ1aWx0aW4tbmFtZSxcXG4uaGxqcy1saXRlcmFsLFxcbi5obGpzLXR5cGUsXFxuLmhsanMtcGFyYW1zLFxcbi5obGpzLW1ldGEsXFxuLmhsanMtbGluayB7XFxuXFx0Y29sb3I6ICNmNTg3MWY7XFxufVxcblxcbi8qIFRvbW9ycm93IFllbGxvdyAqL1xcbi5obGpzLWF0dHJpYnV0ZSB7XFxuXFx0Y29sb3I6ICNlYWI3MDA7XFxufVxcblxcbi8qIFRvbW9ycm93IEdyZWVuICovXFxuLmhsanMtc3RyaW5nLFxcbi5obGpzLXN5bWJvbCxcXG4uaGxqcy1idWxsZXQsXFxuLmhsanMtYWRkaXRpb24ge1xcblxcdGNvbG9yOiAjNzE4YzAwO1xcbn1cXG5cXG4vKiBUb21vcnJvdyBCbHVlICovXFxuLmhsanMtdGl0bGUsXFxuLmhsanMtc2VjdGlvbiB7XFxuXFx0Y29sb3I6ICM0MjcxYWU7XFxufVxcblxcbi8qIFRvbW9ycm93IFB1cnBsZSAqL1xcbi5obGpzLWtleXdvcmQsXFxuLmhsanMtc2VsZWN0b3ItdGFnIHtcXG5cXHRjb2xvcjogIzg5NTlhODtcXG59XFxuXFxuLmhsanMge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdG92ZXJmbG93LXg6IGF1dG87XFxuXFx0Y29sb3I6ICM0ZDRkNGM7XFxuXFx0cGFkZGluZzogMC41ZW07XFxufVxcblxcbi5obGpzLWVtcGhhc2lzIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5obGpzLXN0cm9uZyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiOyIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgZXhwb3J0ZWQgdHlwZXMgPT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgQ1NTX1Jlc291cmNlID0gc3RyaW5nfFJlc3BvbnNlfEhUTUxTdHlsZUVsZW1lbnR8Q1NTU3R5bGVTaGVldDtcbmV4cG9ydCB0eXBlIENTU19Tb3VyY2UgICA9IENTU19SZXNvdXJjZSB8IFByb21pc2U8Q1NTX1Jlc291cmNlPjtcblxuZXhwb3J0IHR5cGUgSFRNTF9SZXNvdXJjZSA9IHN0cmluZ3xSZXNwb25zZXxIVE1MVGVtcGxhdGVFbGVtZW50O1xuZXhwb3J0IHR5cGUgSFRNTF9Tb3VyY2UgICA9IEhUTUxfUmVzb3VyY2UgfCBQcm9taXNlPEhUTUxfUmVzb3VyY2U+O1xuXG5leHBvcnQgdHlwZSBMSVNTT3B0aW9uczxFeHRlbmRzICAgIGV4dGVuZHMgQ2xhc3MsXG5cdFx0XHRcdFx0XHRIb3N0ICAgICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0XHRBdHRycyAgICAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdFx0UGFyYW1ldGVycyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+ID0ge1xuXG5cdGV4dGVuZHM/OiBDb25zdHJ1Y3RvcjxFeHRlbmRzPixcblx0aG9zdCAgID86IENvbnN0cnVjdG9yPEhvc3Q+LFxuXG5cdGRlcGVuZGFuY2llcz86IHJlYWRvbmx5IFByb21pc2U8YW55PltdLFxuXHRhdHRyaWJ1dGVzICA/OiByZWFkb25seSBBdHRyc1tdLFxuXHRwYXJhbXMgICAgICA/OiBSZWFkb25seTxQYXJhbWV0ZXJzPixcblxuXHRjb250ZW50PzogSFRNTF9Tb3VyY2UsXG5cdGNzcyAgICA/OiAgQ1NTX1NvdXJjZSB8IHJlYWRvbmx5IENTU19Tb3VyY2VbXSxcblx0c2hhZG93ID86ICBTaGFkb3dDZmcsXG59O1xuXG5leHBvcnQgZW51bSBTaGFkb3dDZmcge1xuXHROT05FID0gJ25vbmUnLFxuXHRPUEVOID0gJ29wZW4nLCBcblx0Q0xPU0U9ICdjbG9zZWQnXG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIENsYXNzID09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmxldCBfX2NzdHJfaG9zdCAgOiBhbnkgPSBudWxsO1xuXG50eXBlIENvbnN0cnVjdG9yPFQ+ID0gbmV3ICgpID0+IFQ7XG5pbnRlcmZhY2UgQ2xhc3Mge31cblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvYXR0YWNoU2hhZG93XG5jb25zdCBDQU5fSEFWRV9TSEFET1cgPSBbXG5cdG51bGwsICdhcnRpY2xlJywgJ2FzaWRlJywgJ2Jsb2NrcXVvdGUnLCAnYm9keScsICdkaXYnLFxuXHQnZm9vdGVyJywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2hlYWRlcicsICdtYWluJyxcblx0J25hdicsICdwJywgJ3NlY3Rpb24nLCAnc3Bhbidcblx0XG5dO1xuZnVuY3Rpb24gX2Nhbkhhc1NoYWRvdyh0YWc6IHR5cGVvZiBIVE1MRWxlbWVudCkge1xuXHRyZXR1cm4gQ0FOX0hBVkVfU0hBRE9XLmluY2x1ZGVzKCBfZWxlbWVudDJ0YWduYW1lKHRhZykgKTtcbn1cblxudHlwZSBSZXNvdXJjZSA9IFVSTHxSZXNwb25zZTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMSVNTPEV4dGVuZHMgICAgZXh0ZW5kcyBDbGFzcyAgICAgICAgICAgICAgPSBDbGFzcyxcblx0XHRcdFx0XHRcdFx0IEhvc3QgICAgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCAgICAgICAgPSBIVE1MRWxlbWVudCxcblx0XHRcdFx0XHRcdFx0IEF0dHJzICAgICAgZXh0ZW5kcyBzdHJpbmcgICAgICAgICAgICAgPSBuZXZlcixcblx0XHRcdFx0XHRcdFx0IFBhcmFtZXRlcnMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4gPSB7fT4oe1xuXHRcdFx0XHRcdFx0XHRcdGV4dGVuZHMgICAgIDogcF9leHRlbmRzLFxuXHRcdFx0XHRcdFx0XHRcdGhvc3QgICAgICAgIDogcF9ob3N0LFxuXHRcdFx0XHRcdFx0XHRcdGRlcGVuZGFuY2llczogcF9kZXBzLFxuXHRcdFx0XHRcdFx0XHQgICAgYXR0cmlidXRlcyAgOiBwX2F0dHJzLFxuXHRcdFx0XHRcdFx0XHQgICAgcGFyYW1zLFxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQsXG5cdFx0XHRcdFx0XHRcdFx0Y3NzLFxuXHRcdFx0XHRcdFx0XHRcdHNoYWRvdyAgICAgIDogcF9zaGFkb3csXG5cdFx0XHRcdFx0XHRcdH06IExJU1NPcHRpb25zPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbWV0ZXJzPiA9IHt9KSB7XG5cblx0Ly9UT0RPIG1lcmdlIHByb3AgaWYgZXh0ZW5kcyBMSVNTLi4uXG5cblx0Y29uc3QgaG9zdCAgICAgICAgPSBwX2hvc3QgICAgPz8gSFRNTEVsZW1lbnQgYXMgQ29uc3RydWN0b3I8SG9zdD47XG5cdGNvbnN0IF9leHRlbmRzICAgID0gcF9leHRlbmRzID8/IE9iamVjdCAgICAgIGFzIHVua25vd24gYXMgQ29uc3RydWN0b3I8RXh0ZW5kcz47XG5cdGNvbnN0IGF0dHJpYnV0ZXMgID0gcF9hdHRycyAgID8/IFtdO1xuXHRjb25zdCBkZXBlbmRhbmNpZXM9IHBfZGVwcyAgICA/IFsuLi5wX2RlcHNdIDogW107XG5cdGNvbnN0IGNhbkhhc1NoYWRvdz0gX2Nhbkhhc1NoYWRvdyhob3N0KTtcblx0Y29uc3Qgc2hhZG93ICAgICAgPSBwX3NoYWRvdyAgPz8gKGNhbkhhc1NoYWRvdyA/IFNoYWRvd0NmZy5DTE9TRSA6IFNoYWRvd0NmZy5OT05FKTtcblxuXHRpZiggISBjYW5IYXNTaGFkb3cgJiYgc2hhZG93ICE9PSBTaGFkb3dDZmcuTk9ORSlcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEhvc3QgZWxlbWVudCAke19lbGVtZW50MnRhZ25hbWUoaG9zdCl9IGRvZXMgbm90IHN1cHBvcnQgU2hhZG93Um9vdGApO1xuXG5cdC8vIENPTlRFTlQgcHJvY2Vzc2luZ1xuXHRpZiggY29udGVudCAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0ZGVwZW5kYW5jaWVzLnB1c2goICggYXN5bmMgKCkgPT4ge1xuXG5cdFx0XHRjb250ZW50ID0gYXdhaXQgY29udGVudDtcblxuXHRcdFx0aWYoY29udGVudCBpbnN0YW5jZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQpXG5cdFx0XHRjb250ZW50ID0gY29udGVudC5pbm5lckhUTUw7XG5cblx0XHRcdGlmKCB0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikge1xuXG5cdFx0XHRcdGNvbnRlbnQgPSBjb250ZW50LnRyaW0oKTsgLy8gTmV2ZXIgcmV0dXJuIGEgdGV4dCBub2RlIG9mIHdoaXRlc3BhY2UgYXMgdGhlIHJlc3VsdFxuXHRcdFx0XHRpZihjb250ZW50ID09PSAnJylcblx0XHRcdFx0XHRjb250ZW50ID0gdW5kZWZpbmVkO1xuXG5cdFx0XHR9XG5cdFx0XHRpZiggY29udGVudCBpbnN0YW5jZW9mIFJlc3BvbnNlIClcblx0XHRcdFx0Y29udGVudCA9IGF3YWl0IGNvbnRlbnQudGV4dCgpO1xuXG5cdFx0XHRyZXR1cm4gTElTU0Jhc2UuUGFyYW1ldGVycy5jb250ZW50ID0gY29udGVudDtcblx0XHR9KSgpICk7XG5cdH1cblxuXHQvLyBDU1MgcHJvY2Vzc2luZ1xuXHRsZXQgc3R5bGVzaGVldHM6IHJlYWRvbmx5IENTU1N0eWxlU2hlZXRbXSA9IFtdO1xuXHRpZiggY3NzICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRpZiggISBBcnJheS5pc0FycmF5KGNzcykgKVxuXHRcdFx0Y3NzID0gW2NzcyBhcyBDU1NfU291cmNlXTtcblxuXHRcdHN0eWxlc2hlZXRzID0gbmV3IEFycmF5PENTU1N0eWxlU2hlZXQ+KGNzcy5sZW5ndGgpO1xuXG5cdFx0Y29uc3QgZmV0Y2hfY3NzID0gKGFzeW5jIChjc3M6IENTU19Tb3VyY2UpID0+IHtcblx0XHRcdGNzcyA9IGF3YWl0IGNzcztcblx0XHRcdGlmKGNzcyBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQpXG5cdFx0XHRcdHJldHVybiBjc3M7XG5cdFx0XHRpZiggY3NzIGluc3RhbmNlb2YgSFRNTFN0eWxlRWxlbWVudClcblx0XHRcdFx0cmV0dXJuIGNzcy5zaGVldCE7XG5cblx0XHRcdGxldCBzdHlsZSA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG5cdFx0XHRpZiggdHlwZW9mIGNzcyA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdFx0c3R5bGUucmVwbGFjZShjc3MpO1xuXHRcdFx0XHRyZXR1cm4gc3R5bGU7XG5cdFx0XHR9XG5cblx0XHRcdC8vaWYoIGNzcyBpbnN0YW5jZW9mIFJlc3BvbnNlIClcblx0XHRcdHN0eWxlLnJlcGxhY2UoYXdhaXQgY3NzLnRleHQoKSk7XG5cdFx0XHRyZXR1cm4gc3R5bGU7XG5cdFx0fSk7XG5cblx0XHRkZXBlbmRhbmNpZXMucHVzaCggLi4uY3NzLm1hcCggYXN5bmMgKGNzcywgaWR4KSA9PiAgKHN0eWxlc2hlZXRzIGFzIGFueSlbaWR4XSA9IGF3YWl0IGZldGNoX2Nzcyhjc3MpICkgKTtcblx0fVxuXG5cdHR5cGUgTEhvc3QgPSBMSVNTSG9zdDxMSVNTQmFzZT47XG5cblx0Ly8gQHRzLWlnbm9yZVxuXHRjbGFzcyBMSVNTQmFzZSBleHRlbmRzIF9leHRlbmRzIHtcblxuXHRcdHJlYWRvbmx5ICNob3N0OiBhbnk7IC8vIHByZXZlbnRzIGlzc3VlICMxLi4uXG5cblx0XHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdFx0c3VwZXIoKTtcblxuXHRcdFx0Ly8gaDRjaywgb2theSBiZWNhdXNlIEpTIGlzIG1vbm90aHJlYWRlZC5cblx0XHRcdGlmKCBfX2NzdHJfaG9zdCA9PT0gbnVsbCApXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBkbyBub3QgZGlyZWN0bHkgY2FsbCB0aGlzIGNvbnN0cnVjdG9yXCIpO1xuXHRcdFx0dGhpcy4jaG9zdCA9IF9fY3N0cl9ob3N0O1xuXHRcdFx0X19jc3RyX2hvc3QgPSBudWxsO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBnZXQgaG9zdCgpOiBIb3N0IHtcblx0XHRcdHJldHVybiB0aGlzLiNob3N0O1xuXHRcdH1cblx0XHRwcm90ZWN0ZWQgZ2V0IGF0dHJzKCkge1xuXHRcdFx0cmV0dXJuICh0aGlzLiNob3N0IGFzIExIb3N0KS5hdHRycztcblx0XHR9XG5cdFx0cHJvdGVjdGVkIHNldEF0dHJEZWZhdWx0KCBhdHRyOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuI2hvc3QgYXMgTEhvc3QpLnNldEF0dHJEZWZhdWx0KGF0dHIsIHZhbHVlKTtcblxuXHRcdH1cblx0XHRwcm90ZWN0ZWQgZ2V0IHBhcmFtcygpIHtcblx0XHRcdHJldHVybiAodGhpcy4jaG9zdCBhcyBMSG9zdCkucGFyYW1zO1xuXHRcdH1cblx0XHRwcm90ZWN0ZWQgZ2V0IGNvbnRlbnQoKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuI2hvc3QgYXMgTEhvc3QpLmNvbnRlbnQhO1xuXHRcdH1cblxuXHRcdHN0YXRpYyByZWFkb25seSBQYXJhbWV0ZXJzID0ge1xuXHRcdFx0aG9zdCxcblx0XHRcdGRlcGVuZGFuY2llcyxcblx0XHRcdGF0dHJpYnV0ZXMsXG5cdFx0XHRwYXJhbXMsXG5cdFx0XHRjb250ZW50LFxuXHRcdFx0c3R5bGVzaGVldHMsXG5cdFx0XHRzaGFkb3csXG5cdFx0fTtcblxuXHRcdHByb3RlY3RlZCBvbkF0dHJDaGFuZ2VkKF9uYW1lOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdFx0X29sZFZhbHVlOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdFx0X25ld1ZhbHVlOiBzdHJpbmcpOiB2b2lkfGZhbHNlIHt9XG5cblx0XHRwcm90ZWN0ZWQgZ2V0IGlzSW5ET00oKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuI2hvc3QgYXMgTEhvc3QpLmlzSW5ET007XG5cdFx0fVxuXHRcdHByb3RlY3RlZCBvbkRPTUNvbm5lY3RlZCgpIHt9XG5cdFx0cHJvdGVjdGVkIG9uRE9NRGlzY29ubmVjdGVkKCkge31cblx0fVxuXG5cdHJldHVybiBMSVNTQmFzZTtcbn1cblxuLy9UT0RPOiBvdGhlciBvcHRpb25zLi4uXG5mdW5jdGlvbiBleHRlbmRzTElTUzxFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0QXR0cnMxICAgZXh0ZW5kcyBzdHJpbmcsXG5cdEF0dHJzMiAgIGV4dGVuZHMgc3RyaW5nLFxuXHRQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+LFxuXHRUIGV4dGVuZHMgTElTU1JldHVyblR5cGU8RXh0ZW5kcywgSG9zdCwgQXR0cnMxLCBQYXJhbXM+PihMaXNzOiBULCBwYXJhbWV0ZXJzOiB7YXR0cmlidXRlczogcmVhZG9ubHkgQXR0cnMyW119KSB7XG5cblx0Ly8gVE9ETzogb3RoZXIgb3B0aW9ucy4uLlxuXHRjb25zdCBhdHRycyA9IFsuLi5MaXNzLlBhcmFtZXRlcnMuYXR0cmlidXRlcywgLi4ucGFyYW1ldGVycy5hdHRyaWJ1dGVzIV07XG5cdGNvbnN0IHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIExpc3MuUGFyYW1ldGVycywge2F0dHJpYnV0ZXM6IGF0dHJzfSk7XG5cblx0Ly8gQHRzLWlnbm9yZSA6IGJlY2F1c2UgVFMgc3R1cGlkXG5cdGNsYXNzIEV4dGVuZGVkTElTUyBleHRlbmRzIExpc3Mge1xuXHRcdGNvbnN0cnVjdG9yKC4uLnQ6IGFueVtdKSB7XG5cdFx0XHQvLyBAdHMtaWdub3JlIDogYmVjYXVzZSBUUyBzdHVwaWRcblx0XHRcdHN1cGVyKC4uLnQpO1xuXHRcdH1cblxuXHRcdHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYXR0cnMoKSB7XG5cdFx0XHRyZXR1cm4gc3VwZXIuYXR0cnMgYXMgUmVjb3JkPEF0dHJzMnxBdHRyczEsIHN0cmluZ3xudWxsPjtcblx0XHR9XG5cblx0XHRzdGF0aWMgb3ZlcnJpZGUgUGFyYW1ldGVycyA9IHBhcmFtcztcblx0fVxuXG5cdHJldHVybiBFeHRlbmRlZExJU1M7XG59XG5MSVNTLmV4dGVuZHNMSVNTID0gZXh0ZW5kc0xJU1M7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgdHlwZSBoZWxwZXJzID09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBidWlsZExJU1NIb3N0UmV0dXJuVHlwZTxUPiAgPSBUIGV4dGVuZHMgTElTU1JldHVyblR5cGU8aW5mZXIgRXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5mZXIgSG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5mZXIgQXR0cnMgICBleHRlbmRzIHN0cmluZyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluZmVyIFBhcmFtcyAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLGFueT4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IFJldHVyblR5cGU8dHlwZW9mIGJ1aWxkTElTU0hvc3Q8RXh0ZW5kcywgSG9zdCwgQXR0cnMsIFBhcmFtcywgVD4+IDogbmV2ZXI7XG5cbmV4cG9ydCB0eXBlIExJU1NSZXR1cm5UeXBlPFxuXHRFeHRlbmRzIGV4dGVuZHMgQ2xhc3MsXG5cdEhvc3QgICAgZXh0ZW5kcyBIVE1MRWxlbWVudCxcblx0QXR0cnMgICBleHRlbmRzIHN0cmluZyxcblx0UGFyYW1zICBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pj4gPSBSZXR1cm5UeXBlPHR5cGVvZiBMSVNTPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXM+PjtcbmV4cG9ydCB0eXBlIExJU1NCYXNlPEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0XHRcdFx0XHQgSG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdCBBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdCBQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+PiA9IEluc3RhbmNlVHlwZTxMSVNTUmV0dXJuVHlwZTxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zPj47XG5leHBvcnQgdHlwZSBMSVNTSG9zdDxMSVNTIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55PiA+ID0gSW5zdGFuY2VUeXBlPGJ1aWxkTElTU0hvc3RSZXR1cm5UeXBlPENvbnN0cnVjdG9yPExJU1M+ICYge1BhcmFtZXRlcnM6IGFueX0+PjtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTU0hvc3QgY2xhc3MgPT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5sZXQgaWQgPSAwO1xuXG5mdW5jdGlvbiBidWlsZExJU1NIb3N0PEV4dGVuZHMgZXh0ZW5kcyBDbGFzcyxcblx0XHRcdFx0XHQgICBIb3N0ICAgIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdFx0ICAgQXR0cnMgICBleHRlbmRzIHN0cmluZyxcblx0XHRcdFx0XHQgICBQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+LFxuXHRcdFx0XHRcdCAgIFQgZXh0ZW5kcyBMSVNTUmV0dXJuVHlwZTxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zPj4oTGlzczogVCwgX3BhcmFtczogUGFydGlhbDxQYXJhbXM+ID0ge30pIHtcblx0Y29uc3Qge1xuXHRcdGhvc3QsXG5cdFx0YXR0cmlidXRlcyxcblx0XHRjb250ZW50LFxuXHRcdHN0eWxlc2hlZXRzLFxuXHRcdHNoYWRvdyxcblx0fSA9IExpc3MuUGFyYW1ldGVycztcblxuXHRjb25zdCBhbHJlYWR5RGVjbGFyZWRDU1MgPSBuZXcgU2V0KCk7XG5cblx0Y29uc3QgR0VUID0gU3ltYm9sKCdnZXQnKTtcblx0Y29uc3QgU0VUID0gU3ltYm9sKCdzZXQnKTtcblxuXHRjb25zdCBwcm9wZXJ0aWVzID0gT2JqZWN0LmZyb21FbnRyaWVzKCBhdHRyaWJ1dGVzLm1hcChuID0+IFtuLCB7XG5cblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24oKTogc3RyaW5nfG51bGwgICAgICB7IHJldHVybiAodGhpcyBhcyB1bmtub3duIGFzIEF0dHJpYnV0ZXMpW0dFVF0obik7IH0sXG5cdFx0c2V0OiBmdW5jdGlvbih2YWx1ZTogc3RyaW5nfG51bGwpIHsgcmV0dXJuICh0aGlzIGFzIHVua25vd24gYXMgQXR0cmlidXRlcylbU0VUXShuLCB2YWx1ZSk7IH1cblx0fV0pICk7XG5cblx0Y2xhc3MgQXR0cmlidXRlcyB7XG4gICAgICAgIFt4OiBzdHJpbmddOiBzdHJpbmd8bnVsbDtcblxuICAgICAgICAjZGF0YSAgICAgOiBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPjtcbiAgICAgICAgI2RlZmF1bHRzIDogUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD47XG4gICAgICAgICNzZXR0ZXIgICA6IChuYW1lOiBBdHRycywgdmFsdWU6IHN0cmluZ3xudWxsKSA9PiB2b2lkO1xuXG4gICAgICAgIFtHRVRdKG5hbWU6IEF0dHJzKSB7XG4gICAgICAgIFx0cmV0dXJuIHRoaXMuI2RhdGFbbmFtZV0gPz8gdGhpcy4jZGVmYXVsdHNbbmFtZV0gPz8gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgW1NFVF0obmFtZTogQXR0cnMsIHZhbHVlOiBzdHJpbmd8bnVsbCl7XG4gICAgICAgIFx0cmV0dXJuIHRoaXMuI3NldHRlcihuYW1lLCB2YWx1ZSk7IC8vIHJlcXVpcmVkIHRvIGdldCBhIGNsZWFuIG9iamVjdCB3aGVuIGRvaW5nIHsuLi5hdHRyc31cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGEgICAgOiBSZWNvcmQ8QXR0cnMsIHN0cmluZ3xudWxsPixcblx0XHRcdFx0XHRkZWZhdWx0czogUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD4sXG4gICAgICAgIFx0XHRcdHNldHRlciAgOiAobmFtZTogQXR0cnMsIHZhbHVlOiBzdHJpbmd8bnVsbCkgPT4gdm9pZCkge1xuXG4gICAgICAgIFx0dGhpcy4jZGF0YSAgICAgPSBkYXRhO1xuXHRcdFx0dGhpcy4jZGVmYXVsdHMgPSBkZWZhdWx0cztcbiAgICAgICAgXHR0aGlzLiNzZXR0ZXIgPSBzZXR0ZXI7XG5cbiAgICAgICAgXHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCBwcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuXHR9XG5cblx0Ly8gQHRzLWlnbm9yZSA6IGJlY2F1c2UgVFMgaXMgc3R1cGlkLlxuXHRjbGFzcyBMSVNTSG9zdEJhc2UgZXh0ZW5kcyBob3N0IHtcblxuXHRcdHJlYWRvbmx5ICNwYXJhbXM6IFBhcmFtcztcblxuXHRcdHJlYWRvbmx5ICNpZCA9ICsraWQ7IC8vIGZvciBkZWJ1Z1xuXG5cdFx0Y29uc3RydWN0b3IocGFyYW1zOiBQYXJ0aWFsPFBhcmFtcz4gPSB7fSkge1xuXHRcdFx0c3VwZXIoKTtcblx0XHRcdHRoaXMuI3BhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIExpc3MuUGFyYW1ldGVycy5wYXJhbXMsIF9wYXJhbXMsIHBhcmFtcyk7XG5cblx0XHRcdHRoaXMuI3dhaXRJbml0ID0gbmV3IFByb21pc2UoIChyZXNvbHZlKSA9PiB7XG5cdFx0XHRcdGlmKHRoaXMuaXNJbml0KVxuXHRcdFx0XHRcdHJldHVybiByZXNvbHZlKHRoaXMuI0FQSSEpO1xuXHRcdFx0XHR0aGlzLiNyZXNvbHZlID0gcmVzb2x2ZTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKioqIHB1YmxpYyBBUEkgKioqKioqKioqKioqKi9cblxuXHRcdGdldCBpc0luaXQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4jQVBJICE9PSBudWxsO1xuXHRcdH1cblx0XHRpbml0aWFsaXplKHBhcmFtczogUGFydGlhbDxQYXJhbXM+ID0ge30pIHtcblxuXHRcdFx0aWYoIHRoaXMuaXNJbml0IClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFbGVtZW50IGFscmVhZHkgaW5pdGlhbGl6ZWQhJyk7XG5cblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcy4jcGFyYW1zLCBwYXJhbXMpO1xuXG5cdFx0XHRjb25zdCBhcGkgPSB0aGlzLmluaXQoKTtcblxuXHRcdFx0aWYoIHRoaXMuI2lzSW5ET00gKVxuXHRcdFx0XHQoYXBpIGFzIGFueSkub25ET01Db25uZWN0ZWQoKTtcblxuXHRcdFx0cmV0dXJuIGFwaTtcblx0XHR9XG5cblx0XHRnZXQgTElTU1N5bmMoKSB7XG5cdFx0XHRpZiggISB0aGlzLmlzSW5pdCApXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQWNjZXNzaW5nIEFQSSBiZWZvcmUgV2ViQ29tcG9uZW50IGluaXRpYWxpemF0aW9uIScpO1xuXHRcdFx0cmV0dXJuIHRoaXMuI0FQSSE7XG5cdFx0fVxuXHRcdGdldCBMSVNTKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuI3dhaXRJbml0O1xuXHRcdH1cblxuXHRcdC8qKiogaW5pdCAqKiovXG5cdFx0I3dhaXRJbml0OiBQcm9taXNlPEluc3RhbmNlVHlwZTxUPj47XG5cdFx0I3Jlc29sdmU6ICgodTogSW5zdGFuY2VUeXBlPFQ+KSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xuXHRcdCNBUEk6IEluc3RhbmNlVHlwZTxUPiB8IG51bGwgPSBudWxsO1xuXG5cdFx0I2lzSW5ET00gPSBmYWxzZTtcblx0XHRnZXQgaXNJbkRPTSgpIHtcblx0XHRcdHJldHVybiB0aGlzLiNpc0luRE9NO1xuXHRcdH1cblxuXHRcdGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuXHRcdFx0dGhpcy4jaXNJbkRPTSA9IGZhbHNlO1xuXHRcdFx0KHRoaXMuI0FQSSEgYXMgYW55KS5vbkRPTURpc2Nvbm5lY3RlZCgpO1xuXHRcdH1cblxuXHRcdGNvbm5lY3RlZENhbGxiYWNrKCkge1xuXG5cdFx0XHR0aGlzLiNpc0luRE9NID0gdHJ1ZTtcblx0XG5cdFx0XHRpZiggISB0aGlzLmlzSW5pdCApIHtcblx0XHRcdFx0dGhpcy5pbml0KCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0KHRoaXMuI0FQSSEgYXMgYW55KS5vbkRPTUNvbm5lY3RlZCgpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgaW5pdCgpIHtcblx0XHRcdFxuXHRcdFx0Y3VzdG9tRWxlbWVudHMudXBncmFkZSh0aGlzKTtcblx0XHRcdFxuXHRcdFx0Ly8gc2hhZG93XG5cdFx0XHR0aGlzLiNjb250ZW50ID0gdGhpcyBhcyB1bmtub3duIGFzIEhvc3Q7XG5cdFx0XHRpZiggc2hhZG93ICE9PSAnbm9uZScpIHtcblx0XHRcdFx0dGhpcy4jY29udGVudCA9IHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiBzaGFkb3d9KTtcblxuXHRcdFx0XHQvL0B0cy1pZ25vcmVcblx0XHRcdFx0dGhpcy4jY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tFdmVudCk7XG5cdFx0XHRcdC8vQHRzLWlnbm9yZVxuXHRcdFx0XHR0aGlzLiNjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgb25DbGlja0V2ZW50KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gYXR0cnNcblx0XHRcdGZvcihsZXQgb2JzIG9mIGF0dHJpYnV0ZXMhKVxuXHRcdFx0XHR0aGlzLiNhdHRyaWJ1dGVzW29ic10gPSB0aGlzLmdldEF0dHJpYnV0ZShvYnMpO1xuXG5cdFx0XHQvLyBjc3Ncblx0XHRcdGlmKCBzaGFkb3cgIT09ICdub25lJylcblx0XHRcdFx0KHRoaXMuI2NvbnRlbnQgYXMgU2hhZG93Um9vdCkuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc2hhcmVkQ1NTKTtcblx0XHRcdGlmKCBzdHlsZXNoZWV0cy5sZW5ndGggKSB7XG5cblx0XHRcdFx0aWYoIHNoYWRvdyAhPT0gJ25vbmUnKVxuXHRcdFx0XHRcdCh0aGlzLiNjb250ZW50IGFzIFNoYWRvd1Jvb3QpLmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKC4uLnN0eWxlc2hlZXRzKTtcblx0XHRcdFx0ZWxzZSB7XG5cblx0XHRcdFx0XHRjb25zdCBjc3NzZWxlY3RvciA9IHRoaXMuQ1NTU2VsZWN0b3I7XG5cblx0XHRcdFx0XHQvLyBpZiBub3QgeWV0IGluc2VydGVkIDpcblx0XHRcdFx0XHRpZiggISBhbHJlYWR5RGVjbGFyZWRDU1MuaGFzKGNzc3NlbGVjdG9yKSApIHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0bGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuXHRcdFx0XHRcdFx0c3R5bGUuc2V0QXR0cmlidXRlKCdmb3InLCBjc3NzZWxlY3Rvcik7XG5cblx0XHRcdFx0XHRcdGxldCBodG1sX3N0eWxlc2hlZXRzID0gXCJcIjtcblxuXHRcdFx0XHRcdFx0Zm9yKGxldCBzdHlsZSBvZiBzdHlsZXNoZWV0cylcblx0XHRcdFx0XHRcdFx0Zm9yKGxldCBydWxlIG9mIHN0eWxlLmNzc1J1bGVzKVxuXHRcdFx0XHRcdFx0XHRcdGh0bWxfc3R5bGVzaGVldHMgKz0gcnVsZS5jc3NUZXh0ICsgJ1xcbic7XG5cblx0XHRcdFx0XHRcdHN0eWxlLmlubmVySFRNTCA9IGh0bWxfc3R5bGVzaGVldHMucmVwbGFjZSgnOmhvc3QnLCBgOmlzKCR7Y3Nzc2VsZWN0b3J9KWApO1xuXG5cdFx0XHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZChzdHlsZSk7XG5cblx0XHRcdFx0XHRcdGFscmVhZHlEZWNsYXJlZENTUy5hZGQoY3Nzc2VsZWN0b3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBjb250ZW50XG5cdFx0XHRpZiggY29udGVudCAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRsZXQgdGVtcGxhdGVfZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cdFx0XHRcdGxldCBzdHIgPSAoY29udGVudCBhcyBzdHJpbmcpLnJlcGxhY2UoL1xcJFxceyguKz8pXFx9L2csIChfLCBtYXRjaCkgPT4gdGhpcy5nZXRBdHRyaWJ1dGUobWF0Y2gpPz8nJylcblx0ICAgIFx0XHR0ZW1wbGF0ZV9lbGVtLmlubmVySFRNTCA9IHN0cjtcblx0ICAgIFx0XHR0aGlzLiNjb250ZW50LmFwcGVuZCguLi50ZW1wbGF0ZV9lbGVtLmNvbnRlbnQuY2hpbGROb2Rlcyk7XG5cdCAgICBcdH1cblxuXHQgICAgXHQvLyBidWlsZFxuXG5cdCAgICBcdC8vIGg0Y2ssIG9rYXkgYmVjYXVzZSBKUyBpcyBtb25vdGhyZWFkZWQuXG5cdFx0XHRfX2NzdHJfaG9zdCAgID0gdGhpcztcblxuXHQgICAgXHRsZXQgb2JqID0gbmV3IExpc3MoKTtcblxuXHQgICAgXHQvKmlmKCBvYmogaW5zdGFuY2VvZiBQcm9taXNlKVxuXHQgICAgXHRcdG9iaiA9IGF3YWl0IG9iajsqL1xuXG5cdFx0XHR0aGlzLiNBUEkgPSBvYmogYXMgSW5zdGFuY2VUeXBlPFQ+O1xuXG5cdFx0XHQvLyBkZWZhdWx0IHNsb3Rcblx0XHRcdGlmKCB0aGlzLmhhc1NoYWRvdyAmJiB0aGlzLiNjb250ZW50LmNoaWxkTm9kZXMubGVuZ3RoID09PSAwIClcblx0XHRcdFx0dGhpcy4jY29udGVudC5hcHBlbmQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Nsb3QnKSApO1xuXG5cdFx0XHRpZiggdGhpcy4jcmVzb2x2ZSAhPT0gbnVsbClcblx0XHRcdFx0dGhpcy4jcmVzb2x2ZSh0aGlzLiNBUEkpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy4jQVBJO1xuXHRcdH1cblxuXHRcdGdldCBwYXJhbXMoKTogUGFyYW1zIHtcblx0XHRcdHJldHVybiB0aGlzLiNwYXJhbXM7XG5cdFx0fVxuXG5cblx0XHQvKioqIGNvbnRlbnQgKioqL1xuXHRcdCNjb250ZW50OiBIb3N0fFNoYWRvd1Jvb3R8bnVsbCA9IG51bGw7XG5cblx0XHRnZXQgY29udGVudCgpIHtcblx0XHRcdHJldHVybiB0aGlzLiNjb250ZW50O1xuXHRcdH1cblxuXHRcdGdldFBhcnQobmFtZTogc3RyaW5nKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5oYXNTaGFkb3dcblx0XHRcdFx0XHQ/IHRoaXMuI2NvbnRlbnQ/LnF1ZXJ5U2VsZWN0b3IoYDo6cGFydCgke25hbWV9KWApXG5cdFx0XHRcdFx0OiB0aGlzLiNjb250ZW50Py5xdWVyeVNlbGVjdG9yKGBbcGFydD1cIiR7bmFtZX1cIl1gKTtcblx0XHR9XG5cdFx0Z2V0UGFydHMobmFtZTogc3RyaW5nKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5oYXNTaGFkb3dcblx0XHRcdFx0XHQ/IHRoaXMuI2NvbnRlbnQ/LnF1ZXJ5U2VsZWN0b3JBbGwoYDo6cGFydCgke25hbWV9KWApXG5cdFx0XHRcdFx0OiB0aGlzLiNjb250ZW50Py5xdWVyeVNlbGVjdG9yQWxsKGBbcGFydD1cIiR7bmFtZX1cIl1gKTtcblx0XHR9XG5cblx0XHRwcm90ZWN0ZWQgZ2V0IGhhc1NoYWRvdygpOiBib29sZWFuIHtcblx0XHRcdHJldHVybiBzaGFkb3cgIT09ICdub25lJztcblx0XHR9XG5cblx0XHQvKioqIENTUyAqKiovXG5cblx0XHRnZXQgQ1NTU2VsZWN0b3IoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5oYXNTaGFkb3dcblx0XHRcdFx0XHQ/IHRoaXMudGFnTmFtZVxuXHRcdFx0XHRcdDogYCR7dGhpcy50YWdOYW1lfVtpcz1cIiR7dGhpcy5nZXRBdHRyaWJ1dGUoXCJpc1wiKX1cIl1gO1xuXHRcdH1cblxuXHRcdC8qKiogYXR0cnMgKioqL1xuXHRcdCNhdHRyc19mbGFnID0gZmFsc2U7XG5cblx0XHQjYXR0cmlidXRlcyAgICAgICAgID0ge30gYXMgUmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD47XG5cdFx0I2F0dHJpYnV0ZXNEZWZhdWx0cyA9IHt9IGFzIFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuXHRcdCNhdHRycyA9IG5ldyBBdHRyaWJ1dGVzKFxuXHRcdFx0dGhpcy4jYXR0cmlidXRlcyxcblx0XHRcdHRoaXMuI2F0dHJpYnV0ZXNEZWZhdWx0cyxcblx0XHRcdChuYW1lOiBBdHRycywgdmFsdWU6c3RyaW5nfG51bGwpID0+IHtcblxuXHRcdFx0XHR0aGlzLiNhdHRyaWJ1dGVzW25hbWVdID0gdmFsdWU7XG5cblx0XHRcdFx0dGhpcy4jYXR0cnNfZmxhZyA9IHRydWU7IC8vIGRvIG5vdCB0cmlnZ2VyIG9uQXR0cnNDaGFuZ2VkLlxuXHRcdFx0XHRpZiggdmFsdWUgPT09IG51bGwpXG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHR0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0KSBhcyB1bmtub3duIGFzIFJlY29yZDxBdHRycywgc3RyaW5nfG51bGw+O1xuXG5cdFx0c2V0QXR0ckRlZmF1bHQobmFtZTogQXR0cnMsIHZhbHVlOiBzdHJpbmd8bnVsbCkge1xuXHRcdFx0aWYoIHZhbHVlID09PSBudWxsKVxuXHRcdFx0XHRkZWxldGUgdGhpcy4jYXR0cmlidXRlc0RlZmF1bHRzW25hbWVdO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHR0aGlzLiNhdHRyaWJ1dGVzRGVmYXVsdHNbbmFtZV0gPSB2YWx1ZTtcblx0XHR9XG5cblx0XHRnZXQgYXR0cnMoKTogUmVhZG9ubHk8UmVjb3JkPEF0dHJzLCBzdHJpbmd8bnVsbD4+IHtcblxuXHRcdFx0cmV0dXJuIHRoaXMuI2F0dHJzO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuXHRcdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lICAgIDogQXR0cnMsXG5cdFx0XHRcdFx0XHRcdFx0IG9sZFZhbHVlOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdFx0IG5ld1ZhbHVlOiBzdHJpbmcpIHtcblxuXHRcdFx0aWYodGhpcy4jYXR0cnNfZmxhZykge1xuXHRcdFx0XHR0aGlzLiNhdHRyc19mbGFnID0gZmFsc2U7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy4jYXR0cmlidXRlc1tuYW1lXSA9IG5ld1ZhbHVlO1xuXHRcdFx0aWYoICEgdGhpcy5pc0luaXQgKVxuXHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdGlmKCAodGhpcy4jQVBJISBhcyBhbnkpLm9uQXR0ckNoYW5nZWQobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0dGhpcy4jYXR0cnNbbmFtZV0gPSBvbGRWYWx1ZTsgLy8gcmV2ZXJ0IHRoZSBjaGFuZ2UuXG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiBMSVNTSG9zdEJhc2U7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgZGVmaW5lID09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgX0RPTUNvbnRlbnRMb2FkZWQgPSBuZXcgUHJvbWlzZTx2b2lkPiggKHJlc29sdmUpID0+IHtcblxuXHRpZihkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImludGVyYWN0aXZlXCIgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKVxuXHRcdHJldHVybiByZXNvbHZlKCk7XG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblx0XHRyZXNvbHZlKCk7XG5cdH0sIHRydWUpO1xufSk7XG5cbkxJU1MuZGVmaW5lID0gYXN5bmMgZnVuY3Rpb248RXh0ZW5kcyBleHRlbmRzIENsYXNzLFxuXHRcdFx0XHRcdFx0XHQgSG9zdCAgICBleHRlbmRzIEhUTUxFbGVtZW50LFxuXHRcdFx0XHRcdFx0ICAgICBBdHRycyAgIGV4dGVuZHMgc3RyaW5nLFxuXHRcdFx0XHRcdFx0ICAgICBQYXJhbXMgIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+LFxuXHRcdFx0XHRcdFx0ICAgXHQgVCBleHRlbmRzIExJU1NSZXR1cm5UeXBlPEV4dGVuZHMsIEhvc3QsIEF0dHJzLCBQYXJhbXM+Pihcblx0XHRcdFx0XHRcdCAgIFx0dGFnbmFtZTogc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRDb21wb25lbnRDbGFzczogVCxcblx0XHRcdFx0XHRcdFx0e2RlcGVuZGFuY2llcywgcGFyYW1zfToge3BhcmFtcz86IFBhcnRpYWw8UGFyYW1zPiwgZGVwZW5kYW5jaWVzPzogcmVhZG9ubHkgUHJvbWlzZTxzdHJpbmc+W119ID0ge30pIHtcblxuXHRkZXBlbmRhbmNpZXM/Pz1bXTtcblx0cGFyYW1zICAgICAgPz89IHt9O1xuXG5cdGNvbnN0IENsYXNzID0gQ29tcG9uZW50Q2xhc3MuUGFyYW1ldGVycy5ob3N0O1xuXHRsZXQgTElTU0Jhc2U6IGFueSA9IENvbXBvbmVudENsYXNzO1xuXHRsZXQgaHRtbHRhZyA9IF9lbGVtZW50MnRhZ25hbWUoQ2xhc3MpPz91bmRlZmluZWQ7XG5cblx0YXdhaXQgUHJvbWlzZS5hbGwoW19ET01Db250ZW50TG9hZGVkLCAuLi5kZXBlbmRhbmNpZXMsIC4uLkxJU1NCYXNlLlBhcmFtZXRlcnMuZGVwZW5kYW5jaWVzXSk7XG5cblx0Y29uc3QgTElTU2NsYXNzID0gYnVpbGRMSVNTSG9zdDxFeHRlbmRzLCBIb3N0LCBBdHRycywgUGFyYW1zLCBUPihDb21wb25lbnRDbGFzcywgcGFyYW1zKTtcblx0XG5cdGNvbnN0IG9wdHMgPSBodG1sdGFnID09PSB1bmRlZmluZWQgPyB7fVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgOiB7ZXh0ZW5kczogaHRtbHRhZ307XG5cdFxuXHRjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnbmFtZSwgTElTU2NsYXNzLCBvcHRzKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgU2hhZG93Um9vdCB0b29scyA9PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3Qgc2hhcmVkQ1NTID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbmRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHNoYXJlZENTUyk7XG5cbkxJU1MuaW5zZXJ0R2xvYmFsQ1NTUnVsZXMgPSBmdW5jdGlvbihjc3M6IHN0cmluZ3xIVE1MU3R5bGVFbGVtZW50KSB7XG5cblx0bGV0IGNzc19zdHlsZSE6IENTU1N0eWxlU2hlZXQ7XG5cblx0aWYoIGNzcyBpbnN0YW5jZW9mIEhUTUxTdHlsZUVsZW1lbnQgKVxuXHRcdGNzc19zdHlsZSA9IGNzcy5zaGVldCE7XG5cdGlmKCB0eXBlb2YgY3NzID09PSBcInN0cmluZ1wiKSB7XG5cdFx0Y3NzX3N0eWxlID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcblx0XHRjc3Nfc3R5bGUucmVwbGFjZVN5bmMoY3NzKTtcblx0fVxuXG5cdGZvcihsZXQgcnVsZSBvZiBjc3Nfc3R5bGUuY3NzUnVsZXMpXG5cdFx0c2hhcmVkQ1NTLmluc2VydFJ1bGUocnVsZS5jc3NUZXh0KTtcbn1cblxudHlwZSBEZWxlZ2F0ZWRIYW5kbGVyID0gW3N0cmluZywgKGV2OiBNb3VzZUV2ZW50KSA9PiB2b2lkXTtcbmNvbnN0IERFTEVHQVRFRF9FVkVOVFMgPSB7XG5cdFwiY2xpY2tcIjogW10gYXMgRGVsZWdhdGVkSGFuZGxlcltdLFxuXHRcImRibGNsaWNrXCI6IFtdIGFzIERlbGVnYXRlZEhhbmRsZXJbXVxufTtcblxuY29uc3QgQUxSRUFEWV9QUk9DRVNTRUQgPSBTeW1ib2woKTtcblxuZnVuY3Rpb24gb25DbGlja0V2ZW50KGV2OiBNb3VzZUV2ZW50KSB7XG5cblx0aWYoIChldiBhcyBhbnkpW0FMUkVBRFlfUFJPQ0VTU0VEXSA9PT0gdHJ1ZSApXG5cdFx0cmV0dXJuO1xuXHQoZXYgYXMgYW55KVtBTFJFQURZX1BST0NFU1NFRF0gPSB0cnVlO1xuXG5cdGNvbnN0IGhhbmRsZXJzID0gREVMRUdBVEVEX0VWRU5UU1tldi50eXBlIGFzIGtleW9mIHR5cGVvZiBERUxFR0FURURfRVZFTlRTXTtcblxuXHRmb3IobGV0IGVsZW0gb2YgZXYuY29tcG9zZWRQYXRoKCkgKSB7XG5cdFxuXHRcdGlmKCBlbGVtIGluc3RhbmNlb2YgU2hhZG93Um9vdCB8fCBlbGVtID09PSBkb2N1bWVudCB8fCBlbGVtID09PSB3aW5kb3cgKVxuXHRcdFx0Y29udGludWU7XG5cblx0XHR2YXIgdGFyZ2V0ID0gZWxlbSBhcyBFbGVtZW50O1xuXG5cdFx0Zm9yKGxldCBbc2VsZWN0b3IsIGhhbmRsZXJdIG9mIGhhbmRsZXJzKSB7XG5cdFx0XHRpZiggdGFyZ2V0Lm1hdGNoZXMoc2VsZWN0b3IpIClcblx0XHRcdFx0aGFuZGxlcihldik7XG5cdFx0fVxuXHR9XG59XG5cbkxJU1MuaW5zZXJ0R2xvYmFsRGVsZWdhdGVkTGlzdGVuZXIgPSBmdW5jdGlvbihldmVudF9uYW1lOiBrZXlvZiB0eXBlb2YgREVMRUdBVEVEX0VWRU5UUywgc2VsZWN0b3I6IHN0cmluZywgaGFuZGxlcjogKGV2OiBNb3VzZUV2ZW50KSA9PiB2b2lkICkge1xuXHRERUxFR0FURURfRVZFTlRTW2V2ZW50X25hbWVdLnB1c2goW3NlbGVjdG9yLCBoYW5kbGVyXSlcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrRXZlbnQpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBvbkNsaWNrRXZlbnQpO1xuXG5MSVNTLmNsb3Nlc3QgPSBmdW5jdGlvbiBjbG9zZXN0PEUgZXh0ZW5kcyBFbGVtZW50PihzZWxlY3Rvcjogc3RyaW5nLCBlbGVtZW50OiBFbGVtZW50KSB7XG5cblx0d2hpbGUodHJ1ZSkge1xuXHRcdHZhciByZXN1bHQgPSBlbGVtZW50LmNsb3Nlc3Q8RT4oc2VsZWN0b3IpO1xuXG5cdFx0aWYoIHJlc3VsdCAhPT0gbnVsbClcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cblx0XHRjb25zdCByb290ID0gZWxlbWVudC5nZXRSb290Tm9kZSgpO1xuXHRcdGlmKCAhIChcImhvc3RcIiBpbiByb290KSApXG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdGVsZW1lbnQgPSAocm9vdCBhcyBTaGFkb3dSb290KS5ob3N0O1xuXHR9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgaGVscGVycyA9PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBpbmZlclBhcmFtczxUPiA9IFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSwgaW5mZXIgUCBleHRlbmRzIFJlY29yZDxzdHJpbmcsYW55Pj4gPyBQIDogbmV2ZXI7XG5cbnR5cGUgQlVJTERfT1BUSU9OUzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4gPSBQYXJ0aWFsPHtcblx0XHRcdFx0XHQgIFx0cGFyYW1zICAgIDogUGFydGlhbDxpbmZlclBhcmFtczxUPj4sXG5cdFx0XHRcdFx0ICBcdGNvbnRlbnRcdCAgOiBzdHJpbmd8Tm9kZXxyZWFkb25seSBOb2RlW10sXG5cdFx0XHRcdFx0XHRpZCBcdFx0ICA6IHN0cmluZyxcblx0XHRcdFx0XHQgIFx0Y2xhc3Nlc1x0ICA6IHJlYWRvbmx5IHN0cmluZ1tdLFxuXHRcdFx0XHRcdCAgXHRjc3N2YXJzICAgOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+Pixcblx0XHRcdFx0XHQgIFx0YXR0cnMgXHQgIDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgc3RyaW5nfGJvb2xlYW4+Pixcblx0XHRcdFx0XHQgIFx0ZGF0YSBcdCAgOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmd8Ym9vbGVhbj4+LFxuXHRcdFx0XHRcdCAgXHRsaXN0ZW5lcnMgOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCAoZXY6IEV2ZW50KSA9PiB2b2lkPj5cblx0XHRcdFx0XHR9PiAmICh7XG5cdFx0XHRcdFx0XHRpbml0aWFsaXplOiBmYWxzZSxcblx0XHRcdFx0XHRcdHBhcmVudDogRWxlbWVudFxuXHRcdFx0XHRcdH18e1xuXHRcdFx0XHRcdFx0aW5pdGlhbGl6ZT86IHRydWUsXG5cdFx0XHRcdFx0XHRwYXJlbnQ/OiBFbGVtZW50XG5cdFx0XHRcdFx0fSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGJ1aWxkPFQgZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPih0YWduYW1lOiBULCBvcHRpb25zPzogQlVJTERfT1BUSU9OUzxDb21wb25lbnRzW1RdPik6IFByb21pc2U8Q29tcG9uZW50c1tUXT47XG5hc3luYyBmdW5jdGlvbiBidWlsZDxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4odGFnbmFtZTogc3RyaW5nLCBvcHRpb25zPzogQlVJTERfT1BUSU9OUzxUPik6IFByb21pc2U8VD47XG5hc3luYyBmdW5jdGlvbiBidWlsZDxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4odGFnbmFtZTogc3RyaW5nLCB7XG5cdFx0cGFyYW1zICAgID0ge30sXG5cdFx0aW5pdGlhbGl6ZT0gdHJ1ZSxcblx0XHRjb250ZW50ICAgPSBbXSxcblx0XHRwYXJlbnQgICAgPSB1bmRlZmluZWQsXG5cdFx0aWQgXHRcdCAgPSB1bmRlZmluZWQsXG5cdFx0Y2xhc3NlcyAgID0gW10sXG5cdFx0Y3NzdmFycyAgID0ge30sXG5cdFx0YXR0cnMgICAgID0ge30sXG5cdFx0ZGF0YSBcdCAgPSB7fSxcblx0XHRsaXN0ZW5lcnMgPSB7fVxuXHR9OiBCVUlMRF9PUFRJT05TPFQ+ID0ge30pOiBQcm9taXNlPFQ+IHtcblxuXHRpZiggISBpbml0aWFsaXplICYmIHBhcmVudCA9PT0gbnVsbClcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJBIHBhcmVudCBtdXN0IGJlIGdpdmVuIGlmIGluaXRpYWxpemUgaXMgZmFsc2VcIik7XG5cblx0bGV0IEN1c3RvbUNsYXNzID0gYXdhaXQgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQodGFnbmFtZSk7XG5cdGxldCBlbGVtID0gbmV3IEN1c3RvbUNsYXNzKHBhcmFtcykgYXMgTElTU0hvc3Q8VD47XG5cblx0Ly8gRml4IGlzc3VlICMyXG5cdGlmKCBlbGVtLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gdGFnbmFtZSApXG5cdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoXCJpc1wiLCB0YWduYW1lKTtcblxuXHRpZiggaWQgIT09IHVuZGVmaW5lZCApXG5cdFx0ZWxlbS5pZCA9IGlkO1xuXG5cdGlmKCBjbGFzc2VzLmxlbmd0aCA+IDApXG5cdFx0ZWxlbS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBjc3N2YXJzKVxuXHRcdGVsZW0uc3R5bGUuc2V0UHJvcGVydHkoYC0tJHtuYW1lfWAsIGNzc3ZhcnNbbmFtZV0pO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBhdHRycykge1xuXG5cdFx0bGV0IHZhbHVlID0gYXR0cnNbbmFtZV07XG5cdFx0aWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpXG5cdFx0XHRlbGVtLnRvZ2dsZUF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdFx0ZWxzZVxuXHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXHR9XG5cblx0Zm9yKGxldCBuYW1lIGluIGRhdGEpIHtcblxuXHRcdGxldCB2YWx1ZSA9IGRhdGFbbmFtZV07XG5cdFx0aWYoIHZhbHVlID09PSBmYWxzZSlcblx0XHRcdGRlbGV0ZSBlbGVtLmRhdGFzZXRbbmFtZV07XG5cdFx0ZWxzZSBpZih2YWx1ZSA9PT0gdHJ1ZSlcblx0XHRcdGVsZW0uZGF0YXNldFtuYW1lXSA9IFwiXCI7XG5cdFx0ZWxzZVxuXHRcdFx0ZWxlbS5kYXRhc2V0W25hbWVdID0gdmFsdWU7XG5cdH1cblxuXHRpZiggISBBcnJheS5pc0FycmF5KGNvbnRlbnQpIClcblx0XHRjb250ZW50ID0gW2NvbnRlbnQgYXMgYW55XTtcblx0ZWxlbS5yZXBsYWNlQ2hpbGRyZW4oLi4uY29udGVudCk7XG5cblx0Zm9yKGxldCBuYW1lIGluIGxpc3RlbmVycylcblx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgbGlzdGVuZXJzW25hbWVdKTtcblxuXHRpZiggcGFyZW50ICE9PSB1bmRlZmluZWQgKVxuXHRcdHBhcmVudC5hcHBlbmQoZWxlbSk7XG5cblx0aWYoICEgZWxlbS5pc0luaXQgJiYgaW5pdGlhbGl6ZSApXG5cdFx0cmV0dXJuIGF3YWl0IExJU1MuaW5pdGlhbGl6ZShlbGVtKTtcblxuXHRyZXR1cm4gYXdhaXQgTElTUy5nZXRMSVNTKGVsZW0pO1xufVxuTElTUy5idWlsZCA9IGJ1aWxkO1xuXG5cbkxJU1Mud2hlbkRlZmluZWQgICAgPSBhc3luYyBmdW5jdGlvbih0YWduYW1lOiBzdHJpbmcsIGNhbGxiYWNrPzogKCkgPT4gdm9pZCApIDogUHJvbWlzZTx2b2lkPiB7XG5cblx0YXdhaXQgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQodGFnbmFtZSk7XG5cblx0aWYoIGNhbGxiYWNrICE9PSB1bmRlZmluZWQpXG5cdFx0Y2FsbGJhY2soKTtcblxuXHRyZXR1cm47XG59XG5MSVNTLndoZW5BbGxEZWZpbmVkID0gYXN5bmMgZnVuY3Rpb24odGFnbmFtZXM6IHJlYWRvbmx5IHN0cmluZ1tdLCBjYWxsYmFjaz86ICgpID0+IHZvaWQgKSA6IFByb21pc2U8dm9pZD4ge1xuXG5cdGF3YWl0IFByb21pc2UuYWxsKCB0YWduYW1lcy5tYXAoIHQgPT4gY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQodCkgKSApXG5cblx0aWYoIGNhbGxiYWNrICE9PSB1bmRlZmluZWQpXG5cdFx0Y2FsbGJhY2soKTtcblxufVxuXG5MSVNTLmlzRGVmaW5lZCA9IGZ1bmN0aW9uKG5hbWU6IHN0cmluZykge1xuXHRyZXR1cm4gY3VzdG9tRWxlbWVudHMuZ2V0KG5hbWUpO1xufVxuXG5MSVNTLnNlbGVjdG9yID0gZnVuY3Rpb24obmFtZT86IHN0cmluZykge1xuXHRpZihuYW1lID09PSB1bmRlZmluZWQpIC8vIGp1c3QgYW4gaDRja1xuXHRcdHJldHVybiBcIlwiO1xuXHRyZXR1cm4gYDppcygke25hbWV9LCBbaXM9XCIke25hbWV9XCJdKWA7XG59XG5cbkxJU1MuZ2V0TElTUyAgICA9IGFzeW5jIGZ1bmN0aW9uPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PiggZWxlbWVudDogRWxlbWVudCApIHtcblxuXHRhd2FpdCBMSVNTLndoZW5EZWZpbmVkKCBMSVNTLmdldE5hbWUoZWxlbWVudCkgKTtcblxuXHRyZXR1cm4gKGVsZW1lbnQgYXMgTElTU0hvc3Q8VD4pLkxJU1M7IC8vIGVuc3VyZSBpbml0aWFsaXplZC5cbn1cbkxJU1MuZ2V0TElTU1N5bmM9IGZ1bmN0aW9uPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PiggZWxlbWVudDogRWxlbWVudCApIHtcblxuXHRpZiggISBMSVNTLmlzRGVmaW5lZCggTElTUy5nZXROYW1lKGVsZW1lbnQpICkgKVxuXHRcdHRocm93IG5ldyBFcnJvcihgJHtuYW1lfSBoYXNuJ3QgYmVlbiBkZWZpbmVkIHlldC5gKTtcblxuXHRsZXQgaG9zdCA9IGVsZW1lbnQgYXMgTElTU0hvc3Q8VD47XG5cblx0aWYoICEgaG9zdC5pc0luaXQgKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIkluc3RhbmNlIGhhc24ndCBiZWVuIGluaXRpYWxpemVkIHlldC5cIik7XG5cblx0cmV0dXJuIGhvc3QuTElTU1N5bmM7XG59XG5MSVNTLmluaXRpYWxpemUgPSBhc3luYyBmdW5jdGlvbjxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oIGVsZW1lbnQ6IEVsZW1lbnQpIHtcblxuXHRhd2FpdCBMSVNTLndoZW5EZWZpbmVkKCBMSVNTLmdldE5hbWUoZWxlbWVudCkgKTtcblxuXHRyZXR1cm4gYXdhaXQgKGVsZW1lbnQgYXMgTElTU0hvc3Q8VD4pLmluaXRpYWxpemUoKTsgLy8gZW5zdXJlIGluaXRpYWxpemF0aW9uLlxufVxuXG5MSVNTLmdldE5hbWUgPSBmdW5jdGlvbiggZWxlbWVudDogRWxlbWVudCApOiBzdHJpbmcge1xuXG5cdGNvbnN0IG5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaXMnKSA/PyBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblx0XG5cdGlmKCAhIG5hbWUuaW5jbHVkZXMoJy0nKSApXG5cdFx0dGhyb3cgbmV3IEVycm9yKGBFbGVtZW50ICR7bmFtZX0gaXMgbm90IGEgV2ViQ29tcG9uZW50YCk7XG5cblx0cmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIF9idWlsZFFTKHNlbGVjdG9yOiBzdHJpbmcsIHRhZ25hbWVfb3JfcGFyZW50Pzogc3RyaW5nIHwgRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50LCBwYXJlbnQ6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCA9IGRvY3VtZW50KSB7XG5cdFxuXHRpZiggdGFnbmFtZV9vcl9wYXJlbnQgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdGFnbmFtZV9vcl9wYXJlbnQgIT09ICdzdHJpbmcnKSB7XG5cdFx0cGFyZW50ID0gdGFnbmFtZV9vcl9wYXJlbnQ7XG5cdFx0dGFnbmFtZV9vcl9wYXJlbnQgPSB1bmRlZmluZWQ7XG5cdH1cblxuXHRyZXR1cm4gW2Ake3NlbGVjdG9yfSR7TElTUy5zZWxlY3Rvcih0YWduYW1lX29yX3BhcmVudCBhcyBzdHJpbmd8dW5kZWZpbmVkKX1gLCBwYXJlbnRdIGFzIGNvbnN0O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIFF1ZXJ5U2VsZWN0b3JzID09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmFzeW5jIGZ1bmN0aW9uIHFzPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBQcm9taXNlPFQ+O1xuYXN5bmMgZnVuY3Rpb24gcXM8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8IENvbXBvbmVudHNbTl0gPjtcbmFzeW5jIGZ1bmN0aW9uIHFzPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsXG5cdFx0XHRcdFx0XHRwYXJlbnQgIDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblxuXHRbc2VsZWN0b3IsIHBhcmVudF0gPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIHBhcmVudCk7XG5cblx0bGV0IHJlc3VsdCA9IGF3YWl0IExJU1MucXNvPFQ+KHNlbGVjdG9yLCBwYXJlbnQpO1xuXHRpZihyZXN1bHQgPT09IG51bGwpXG5cdFx0dGhyb3cgbmV3IEVycm9yKGBFbGVtZW50ICR7c2VsZWN0b3J9IG5vdCBmb3VuZGApO1xuXG5cdHJldHVybiByZXN1bHQhXG59XG5MSVNTLnFzICA9IHFzXG5cbmFzeW5jIGZ1bmN0aW9uIHFzbzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTxUPjtcbmFzeW5jIGZ1bmN0aW9uIHFzbzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTwgQ29tcG9uZW50c1tOXSA+O1xuYXN5bmMgZnVuY3Rpb24gcXNvPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsXG5cdFx0XHRcdFx0XHRwYXJlbnQgIDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblxuXHRbc2VsZWN0b3IsIHBhcmVudF0gPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIHBhcmVudCk7XG5cblx0Y29uc3QgZWxlbWVudCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yPExJU1NIb3N0PFQ+PihzZWxlY3Rvcik7XG5cdGlmKCBlbGVtZW50ID09PSBudWxsIClcblx0XHRyZXR1cm4gbnVsbDtcblxuXHRyZXR1cm4gYXdhaXQgTElTUy5nZXRMSVNTKCBlbGVtZW50ICk7XG59XG5MSVNTLnFzbyA9IHFzb1xuXG5hc3luYyBmdW5jdGlvbiBxc2E8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFByb21pc2U8VFtdPjtcbmFzeW5jIGZ1bmN0aW9uIHFzYTxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdHBhcmVudCAgPzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50KTogUHJvbWlzZTwgQ29tcG9uZW50c1tOXVtdID47XG5hc3luYyBmdW5jdGlvbiBxc2E8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRjb25zdCBlbGVtZW50cyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsPExJU1NIb3N0PFQ+PihzZWxlY3Rvcik7XG5cblx0bGV0IGlkeCA9IDA7XG5cdGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8VD4+KCBlbGVtZW50cy5sZW5ndGggKTtcblx0Zm9yKGxldCBlbGVtZW50IG9mIGVsZW1lbnRzKVxuXHRcdHByb21pc2VzW2lkeCsrXSA9IExJU1MuZ2V0TElTUyggZWxlbWVudCApO1xuXG5cdHJldHVybiBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59XG5MSVNTLnFzYSA9IHFzYTtcblxuYXN5bmMgZnVuY3Rpb24gcXNjPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgOiBFbGVtZW50KTogUHJvbWlzZTxUPjtcbmFzeW5jIGZ1bmN0aW9uIHFzYzxOIGV4dGVuZHMga2V5b2YgQ29tcG9uZW50cz4oc2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWUgIDogTixcblx0XHRcdFx0XHRcdGVsZW1lbnQgIDogRWxlbWVudCk6IFByb21pc2U8IENvbXBvbmVudHNbTl0gPjtcbmFzeW5jIGZ1bmN0aW9uIHFzYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudCxcblx0XHRcdFx0XHRcdGVsZW1lbnQgID86IEVsZW1lbnQpIHtcblxuXHRjb25zdCByZXMgPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIGVsZW1lbnQpO1xuXHRcblx0Y29uc3QgcmVzdWx0ID0gKHJlc1sxXSBhcyB1bmtub3duIGFzIEVsZW1lbnQpLmNsb3Nlc3Q8TElTU0hvc3Q8VD4+KHJlc1swXSk7XG5cdGlmKHJlc3VsdCA9PT0gbnVsbClcblx0XHRyZXR1cm4gbnVsbDtcblxuXHRyZXR1cm4gYXdhaXQgTElTUy5nZXRMSVNTKHJlc3VsdCk7XG59XG5MSVNTLnFzYyA9IHFzYztcblxuZnVuY3Rpb24gcXNTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBUO1xuZnVuY3Rpb24gcXNTeW5jPE4gZXh0ZW5kcyBrZXlvZiBDb21wb25lbnRzPihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZSAgOiBOLFxuXHRcdFx0XHRcdFx0cGFyZW50ICA/OiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQpOiBDb21wb25lbnRzW05dO1xuZnVuY3Rpb24gcXNTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihcdHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lX29yX3BhcmVudD86IGtleW9mIENvbXBvbmVudHMgfCBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQsXG5cdFx0XHRcdFx0XHRwYXJlbnQgIDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50fERvY3VtZW50ID0gZG9jdW1lbnQpIHtcblxuXHRbc2VsZWN0b3IsIHBhcmVudF0gPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIHBhcmVudCk7XG5cblx0Y29uc3QgZWxlbWVudCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yPExJU1NIb3N0PFQ+PihzZWxlY3Rvcik7XG5cblx0aWYoIGVsZW1lbnQgPT09IG51bGwgKVxuXHRcdHRocm93IG5ldyBFcnJvcihgRWxlbWVudCAke3NlbGVjdG9yfSBub3QgZm91bmRgKTtcblxuXHRyZXR1cm4gTElTUy5nZXRMSVNTU3luYyggZWxlbWVudCApO1xufVxuTElTUy5xc1N5bmMgPSBxc1N5bmM7XG5cbmZ1bmN0aW9uIHFzYVN5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IFRbXTtcbmZ1bmN0aW9uIHFzYVN5bmM8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRwYXJlbnQgID86IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCk6IENvbXBvbmVudHNbTl1bXTtcbmZ1bmN0aW9uIHFzYVN5bmM8VCBleHRlbmRzIExJU1NCYXNlPGFueSxhbnksYW55LGFueT4+KFx0c2VsZWN0b3I6IHN0cmluZyxcblx0XHRcdFx0XHRcdHRhZ25hbWVfb3JfcGFyZW50Pzoga2V5b2YgQ29tcG9uZW50cyB8IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxEb2N1bWVudCxcblx0XHRcdFx0XHRcdHBhcmVudCAgOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8RG9jdW1lbnQgPSBkb2N1bWVudCkge1xuXG5cdFtzZWxlY3RvciwgcGFyZW50XSA9IF9idWlsZFFTKHNlbGVjdG9yLCB0YWduYW1lX29yX3BhcmVudCwgcGFyZW50KTtcblxuXHRjb25zdCBlbGVtZW50cyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsPExJU1NIb3N0PFQ+PihzZWxlY3Rvcik7XG5cblx0bGV0IGlkeCA9IDA7XG5cdGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxUPiggZWxlbWVudHMubGVuZ3RoICk7XG5cdGZvcihsZXQgZWxlbWVudCBvZiBlbGVtZW50cylcblx0XHRyZXN1bHRbaWR4KytdID0gTElTUy5nZXRMSVNTU3luYyggZWxlbWVudCApO1xuXG5cdHJldHVybiByZXN1bHQ7XG59XG5MSVNTLnFzYVN5bmMgPSBxc2FTeW5jO1xuXG5mdW5jdGlvbiBxc2NTeW5jPFQgZXh0ZW5kcyBMSVNTQmFzZTxhbnksYW55LGFueSxhbnk+PihzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0ZWxlbWVudCAgOiBFbGVtZW50KTogVDtcbmZ1bmN0aW9uIHFzY1N5bmM8TiBleHRlbmRzIGtleW9mIENvbXBvbmVudHM+KHNlbGVjdG9yOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHR0YWduYW1lICA6IE4sXG5cdFx0XHRcdFx0XHRlbGVtZW50ICA6IEVsZW1lbnQpOiBDb21wb25lbnRzW05dO1xuZnVuY3Rpb24gcXNjU3luYzxUIGV4dGVuZHMgTElTU0Jhc2U8YW55LGFueSxhbnksYW55Pj4oXHRzZWxlY3Rvcjogc3RyaW5nLFxuXHRcdFx0XHRcdFx0dGFnbmFtZV9vcl9wYXJlbnQ/OiBrZXlvZiBDb21wb25lbnRzIHwgRWxlbWVudCxcblx0XHRcdFx0XHRcdGVsZW1lbnQgID86IEVsZW1lbnQpIHtcblxuXHRjb25zdCByZXMgPSBfYnVpbGRRUyhzZWxlY3RvciwgdGFnbmFtZV9vcl9wYXJlbnQsIGVsZW1lbnQpO1xuXHRcblx0Y29uc3QgcmVzdWx0ID0gKHJlc1sxXSBhcyB1bmtub3duIGFzIEVsZW1lbnQpLmNsb3Nlc3Q8TElTU0hvc3Q8VD4+KHJlc1swXSk7XG5cdGlmKHJlc3VsdCA9PT0gbnVsbClcblx0XHRyZXR1cm4gbnVsbDtcblxuXHRyZXR1cm4gTElTUy5nZXRMSVNTU3luYyhyZXN1bHQpO1xufVxuTElTUy5xc2NTeW5jID0gcXNjU3luYztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT0gTElTUyBBdXRvID09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgY2xhc3MgTElTU19BdXRvIGV4dGVuZHMgTElTUyh7YXR0cmlidXRlczogW1wic3JjXCJdfSkge1xuXG5cdHJlYWRvbmx5ICNrbm93bl90YWcgPSBuZXcgU2V0PHN0cmluZz4oKTtcblx0cmVhZG9ubHkgI2RpcmVjdG9yeTogc3RyaW5nO1xuXHRyZWFkb25seSAjc3c6IFByb21pc2U8dm9pZD47XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy4jc3cgPSBuZXcgUHJvbWlzZSggYXN5bmMgKHJlc29sdmUpID0+IHtcblx0XHRcdFxuXHRcdFx0YXdhaXQgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoYC4vc3cuanNgKTtcblxuXHRcdFx0aWYoIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXIgKVxuXHRcdFx0XHRyZXNvbHZlKCk7XG5cblx0XHRcdG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRyb2xsZXJjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cblx0XHRjb25zdCBzcmMgPSB0aGlzLmF0dHJzLnNyYztcblx0XHRpZihzcmMgPT09IG51bGwpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJzcmMgYXR0cmlidXRlIGlzIG1pc3NpbmcuXCIpO1xuXHRcdHRoaXMuI2RpcmVjdG9yeSA9IHNyY1swXSA9PT0gJy4nXG5cdFx0XHRcdFx0XHRcdFx0PyBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9LyR7c3JjfWBcblx0XHRcdFx0XHRcdFx0XHQ6IHNyYztcblxuXHRcdG5ldyBNdXRhdGlvbk9ic2VydmVyKCAobXV0YXRpb25zKSA9PiB7XG5cblx0XHRcdGZvcihsZXQgbXV0YXRpb24gb2YgbXV0YXRpb25zKVxuXHRcdFx0XHRmb3IobGV0IGFkZGl0aW9uIG9mIG11dGF0aW9uLmFkZGVkTm9kZXMpXG5cdFx0XHRcdFx0aWYoYWRkaXRpb24gaW5zdGFuY2VvZiBFbGVtZW50KVxuXHRcdFx0XHRcdFx0dGhpcy4jYWRkVGFnKGFkZGl0aW9uLnRhZ05hbWUpXG5cblx0XHR9KS5vYnNlcnZlKCBkb2N1bWVudCwgeyBjaGlsZExpc3Q6dHJ1ZSwgc3VidHJlZTp0cnVlIH0pO1xuXG5cblx0XHRmb3IoIGxldCBlbGVtIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpIClcblx0XHRcdHRoaXMuI2FkZFRhZyhlbGVtLnRhZ05hbWUpO1xuXHR9XG5cblxuICAgIHByb3RlY3RlZCByZXNvdXJjZXMoKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdFwiaW5kZXguanNcIixcblx0XHRcdFwiaW5kZXguaHRtbFwiLFxuXHRcdFx0XCJpbmRleC5jc3NcIlxuXHRcdF07XG4gICAgfVxuXG5cdHByb3RlY3RlZCBkZWZpbmVXZWJDb21wb25lbnQodGFnbmFtZTogc3RyaW5nLCBmaWxlczogUmVjb3JkPHN0cmluZywgYW55Piwgb3B0czogUGFydGlhbDx7Y29udGVudDogc3RyaW5nLCBjc3M6IHN0cmluZ30+KSB7XG5cblx0XHRjb25zdCBqcyA9IGZpbGVzW1wiaW5kZXguanNcIl07XG5cdFx0Y29uc3QgY29udGVudCA9IGZpbGVzW1wiaW5kZXguaHRtbFwiXTtcblxuXHRcdGxldCBrbGFzczogbnVsbHwgUmV0dXJuVHlwZTx0eXBlb2YgTElTUz4gPSBudWxsO1xuXHRcdGlmKCBqcyAhPT0gdW5kZWZpbmVkIClcblx0XHRcdGtsYXNzID0ganMob3B0cyk7XG5cdFx0ZWxzZSBpZiggY29udGVudCAhPT0gdW5kZWZpbmVkIClcblx0XHRcdGtsYXNzID0gY2xhc3MgV2ViQ29tcG9uZW50IGV4dGVuZHMgTElTUyhvcHRzKSB7fTtcblxuXHRcdGlmKGtsYXNzID09PSBudWxsKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIGZpbGVzIGZvciBXZWJDb21wb25lbnQgJHt0YWduYW1lfS5gKTtcblxuXHRcdHJldHVybiBMSVNTLmRlZmluZSh0YWduYW1lLCBrbGFzcyk7XG5cdH1cblxuXHRhc3luYyAjYWRkVGFnKHRhZ25hbWU6IHN0cmluZykge1xuXG5cdFx0dGFnbmFtZSA9IHRhZ25hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdGlmKCB0YWduYW1lID09PSAnbGlzcy1hdXRvJyB8fCB0YWduYW1lID09PSAnYmxpc3MtYXV0bycgfHwgISB0YWduYW1lLmluY2x1ZGVzKCctJykgfHwgdGhpcy4ja25vd25fdGFnLmhhcyggdGFnbmFtZSApIClcblx0XHRcdHJldHVybjtcblxuXHRcdHRoaXMuI2tub3duX3RhZy5hZGQodGFnbmFtZSk7XG5cblx0XHRhd2FpdCB0aGlzLiNzdzsgLy8gZW5zdXJlIFNXIGlzIGluc3RhbGxlZC5cblxuXHRcdGNvbnN0IGZpbGVuYW1lcyA9IHRoaXMucmVzb3VyY2VzKCk7XG5cdFx0Y29uc3QgcmVzb3VyY2VzID0gYXdhaXQgUHJvbWlzZS5hbGwoIGZpbGVuYW1lcy5tYXAoIGZpbGUgPT4gZmlsZS5lbmRzV2l0aCgnLmpzJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBfaW1wb3J0ICAgKGAke3RoaXMuI2RpcmVjdG9yeX0vJHt0YWduYW1lfS8ke2ZpbGV9YCwgdHJ1ZSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBfZmV0Y2hUZXh0KGAke3RoaXMuI2RpcmVjdG9yeX0vJHt0YWduYW1lfS8ke2ZpbGV9YCwgdHJ1ZSkgKSApO1xuXG5cdFx0Y29uc3QgZmlsZXM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgZmlsZW5hbWVzLmxlbmd0aDsgKytpKVxuXHRcdFx0aWYoIHJlc291cmNlc1tpXSAhPT0gdW5kZWZpbmVkKVxuXHRcdFx0XHRmaWxlc1tmaWxlbmFtZXNbaV1dID0gcmVzb3VyY2VzW2ldO1xuXG5cdFx0Y29uc3QgY29udGVudCA9IGZpbGVzW1wiaW5kZXguaHRtbFwiXTtcblx0XHRjb25zdCBjc3MgICAgID0gZmlsZXNbXCJpbmRleC5jc3NcIl07XG5cblx0XHRjb25zdCBvcHRzOiBQYXJ0aWFsPHtjb250ZW50OiBzdHJpbmcsIGNzczogc3RyaW5nfT4gPSB7XG5cdFx0XHQuLi5jb250ZW50ICE9PSB1bmRlZmluZWQgJiYge2NvbnRlbnR9LFxuXHRcdFx0Li4uY3NzICAgICAhPT0gdW5kZWZpbmVkICYmIHtjc3N9LFxuXHRcdH07XG5cblx0XHRyZXR1cm4gdGhpcy5kZWZpbmVXZWJDb21wb25lbnQodGFnbmFtZSwgZmlsZXMsIG9wdHMpO1xuXHRcdFxuXHR9XG59XG5MSVNTLmRlZmluZShcImxpc3MtYXV0b1wiLCBMSVNTX0F1dG8pO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudHMge1xuXHRcImxpc3MtYXV0b1wiOiBMSVNTX0F1dG9cbn07XG4vKlxuICogZGVjbGFyZSBtb2R1bGUgJyRMSVNTJyB7XG4gKiBcdFx0aW50ZXJmYWNlIENvbXBvbmVudHMge1xuICogXHRcdFx0XCJuYW1lXCI6IGNsYXNzXG4gKiBcdFx0fVxuICogfVxuICovXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09IExJU1MgRXZlbnRzVGFyZ2V0ID09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBDc3RFdmVudDxFdmVudCBleHRlbmRzIHN0cmluZywgQXJncz4gPSBDdXN0b21FdmVudDxBcmdzPiAmIHt0eXBlOiBFdmVudH07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRzVGFyZ2V0PEV2ZW50cyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+e1xuXG5cdGFkZEV2ZW50TGlzdGVuZXI8RXZlbnQgZXh0ZW5kcyBFeGNsdWRlPGtleW9mIEV2ZW50cywgc3ltYm9sfG51bWJlcj4+KHR5cGU6IEV2ZW50LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGxpc3RlbmVyOiBudWxsfCAoKGV2OiBDc3RFdmVudDxFdmVudCwgRXZlbnRzW0V2ZW50XT4pID0+IHZvaWQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IG9wdGlvbnM/OiBib29sZWFufEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zKTogdm9pZDtcblxuXHRkaXNwYXRjaEV2ZW50PEV2ZW50IGV4dGVuZHMgRXhjbHVkZTxrZXlvZiBFdmVudHMsIHN5bWJvbHxudW1iZXI+PihldmVudDogQ3N0RXZlbnQ8RXZlbnQsIEV2ZW50c1tFdmVudF0+KTogYm9vbGVhbjtcblxuXHRyZW1vdmVFdmVudExpc3RlbmVyPEV2ZW50IGV4dGVuZHMgRXhjbHVkZTxrZXlvZiBFdmVudHMsIHN5bWJvbHxudW1iZXI+Pih0eXBlOiBFdmVudCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGlzdGVuZXI6IG51bGx8ICgoZXY6IENzdEV2ZW50PEV2ZW50LCBFdmVudHNbRXZlbnRdPikgPT4gdm9pZCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM/OiBib29sZWFufEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIENzdG1FdmVudDxFdmVudCBleHRlbmRzIHN0cmluZywgQXJncz4gZXh0ZW5kcyBDdXN0b21FdmVudDxBcmdzPiB7XG5cblx0b3ZlcnJpZGUgZ2V0IHR5cGUoKTogRXZlbnQgeyByZXR1cm4gc3VwZXIudHlwZSBhcyBFdmVudDsgfVxuXG5cdGNvbnN0cnVjdG9yKHR5cGU6IEV2ZW50LCBhcmdzOiBBcmdzKSB7XG5cdFx0c3VwZXIodHlwZSwge2RldGFpbDogYXJnc30pO1xuXHR9XG59XG5cbmV4cG9ydCB0eXBlIEV2ZW50c1RhcmdldENzdHI8RXZlbnRzIGV4dGVuZHMgUmVjb3JkPHN0cmluZyxhbnk+PiA9IENvbnN0cnVjdG9yPEV2ZW50c1RhcmdldDxFdmVudHM+PjtcblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PSBMSVNTIGludGVybmFsIHRvb2xzID09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoUmVzb3VyY2UocmVzb3VyY2U6IFJlc291cmNlfFByb21pc2U8UmVzb3VyY2U+KSB7XG5cblx0cmVzb3VyY2UgPSBhd2FpdCByZXNvdXJjZTtcblxuXHRpZiggISAocmVzb3VyY2UgaW5zdGFuY2VvZiBSZXNwb25zZSkgKVxuXHRcdHJlc291cmNlID0gYXdhaXQgZmV0Y2gocmVzb3VyY2UpO1xuXG5cdHJldHVybiBhd2FpdCByZXNvdXJjZS50ZXh0KCk7XG59XG5cblxuYXN5bmMgZnVuY3Rpb24gX2ZldGNoVGV4dCh1cmk6IHN0cmluZ3xVUkwsIGlzTGlzc0F1dG86IGJvb2xlYW4gPSBmYWxzZSkge1xuXG5cdGNvbnN0IG9wdGlvbnMgPSBpc0xpc3NBdXRvXG5cdFx0XHRcdFx0XHQ/IHtoZWFkZXJzOntcImxpc3MtYXV0b1wiOiBcInRydWVcIn19XG5cdFx0XHRcdFx0XHQ6IHt9O1xuXG5cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmksIG9wdGlvbnMpO1xuXHRpZihyZXNwb25zZS5zdGF0dXMgIT09IDIwMCApXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblxuXHRpZiggaXNMaXNzQXV0byAmJiByZXNwb25zZS5oZWFkZXJzLmdldChcInN0YXR1c1wiKSEgPT09IFwiNDA0XCIgKVxuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cblx0cmV0dXJuIGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIF9pbXBvcnQodXJpOiBzdHJpbmcsIGlzTGlzc0F1dG86IGJvb2xlYW4gPSBmYWxzZSkge1xuXG5cdC8vIHRlc3QgZm9yIHRoZSBtb2R1bGUgZXhpc3RhbmNlLlxuXHRpZihpc0xpc3NBdXRvICYmIGF3YWl0IF9mZXRjaFRleHQodXJpLCBpc0xpc3NBdXRvKSA9PT0gdW5kZWZpbmVkIClcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXG5cdHRyeSB7XG5cdFx0cmV0dXJuIChhd2FpdCBpbXBvcnQoLyogd2VicGFja0lnbm9yZTogdHJ1ZSAqLyB1cmkpKS5kZWZhdWx0O1xuXHR9IGNhdGNoKGUpIHtcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHR9XG59XG5cbi8vIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTEwMDA0NjEvaHRtbC1lbGVtZW50LXRhZy1uYW1lLWZyb20tY29uc3RydWN0b3JcbmNvbnN0IEhUTUxDTEFTU19SRUdFWCA9ICAvSFRNTChcXHcrKUVsZW1lbnQvO1xuY29uc3QgZWxlbWVudE5hbWVMb29rdXBUYWJsZSA9IHtcbiAgICAnVUxpc3QnOiAndWwnLFxuICAgICdUYWJsZUNhcHRpb24nOiAnY2FwdGlvbicsXG4gICAgJ1RhYmxlQ2VsbCc6ICd0ZCcsIC8vIHRoXG4gICAgJ1RhYmxlQ29sJzogJ2NvbCcsICAvLydjb2xncm91cCcsXG4gICAgJ1RhYmxlUm93JzogJ3RyJyxcbiAgICAnVGFibGVTZWN0aW9uJzogJ3Rib2R5JywgLy9bJ3RoZWFkJywgJ3Rib2R5JywgJ3Rmb290J10sXG4gICAgJ1F1b3RlJzogJ3EnLFxuICAgICdQYXJhZ3JhcGgnOiAncCcsXG4gICAgJ09MaXN0JzogJ29sJyxcbiAgICAnTW9kJzogJ2lucycsIC8vLCAnZGVsJ10sXG4gICAgJ01lZGlhJzogJ3ZpZGVvJywvLyAnYXVkaW8nXSxcbiAgICAnSW1hZ2UnOiAnaW1nJyxcbiAgICAnSGVhZGluZyc6ICdoMScsIC8vLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnXSxcbiAgICAnRGlyZWN0b3J5JzogJ2RpcicsXG4gICAgJ0RMaXN0JzogJ2RsJyxcbiAgICAnQW5jaG9yJzogJ2EnXG4gIH07XG5mdW5jdGlvbiBfZWxlbWVudDJ0YWduYW1lKENsYXNzOiB0eXBlb2YgSFRNTEVsZW1lbnQpOiBzdHJpbmd8bnVsbCB7XG5cblx0aWYoIENsYXNzID09PSBIVE1MRWxlbWVudCApXG5cdFx0cmV0dXJuIG51bGw7XG5cdFxuXHRsZXQgaHRtbHRhZyA9IEhUTUxDTEFTU19SRUdFWC5leGVjKENsYXNzLm5hbWUpIVsxXTtcblx0cmV0dXJuIGVsZW1lbnROYW1lTG9va3VwVGFibGVbaHRtbHRhZyBhcyBrZXlvZiB0eXBlb2YgZWxlbWVudE5hbWVMb29rdXBUYWJsZV0gPz8gaHRtbHRhZy50b0xvd2VyQ2FzZSgpXG59IiwiaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3RydWN0L21lbnUudHNcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3RydWN0L2NhbGMvc2hlZXQudHNcIjtcblxuLy8gMVxuXG5pbXBvcnQgTElTUyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbGlicy9MSVNTXCI7XG5cbmNvbnN0IHNfZm9ybXVsYSA9IGF3YWl0IExJU1MucXMoJyNzaGVldF9mb3JtdWxhJyk7XG5cbnNfZm9ybXVsYS5nZXRDZWxscyhcIkExOkMxXCIpLnRvZ2dsZUNsYXNzKFwiYm9sZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvZ2dsZUNsYXNzKFwiYWxpZ24tY2VudGVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJRdWFudGl0w6lcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJQcml4IHVuaXRhaXJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUHJpeCB0b3RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuXG5mdW5jdGlvbiBldXJvcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYodmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIHJldHVybiB2YWx1ZS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHtcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDJcbiAgICAgIH0pICsgJ+KCrCc7XG4gICAgLy8udG9GaXhlZCgyKSArICfigqwnO1xufVxuXG5cbnNfZm9ybXVsYS5nZXRDZWxscyhcIkEyOkE0XCIpLmNvbnRlbnQgPSBbMjMgICwgMTIsIDQ0XTtcbnNfZm9ybXVsYS5nZXRDZWxscyhcIkIyOkI0XCIpLnNldEZvcm1hdChldXJvcykuY29udGVudCA9IFswLjIsIDAuMywgMC40XTtcblxuc19mb3JtdWxhLmdldENlbGxzKFwiQzI6QzRcIikuY29udGVudCA9IFtcbiAgICBcIj1BMipCMlwiLFxuICAgIFwiPUEzKkIzXCIsXG4gICAgXCI9QTQqQjRcIlxuXTtcblxuLyoqL1xuXG5cbmNvbnN0IHNfY29tcGxleF9mb3JtdWxhID0gYXdhaXQgTElTUy5xcygnI3NoZWV0X2NvbXBsZXhfZm9ybXVsYScpO1xuXG5zX2NvbXBsZXhfZm9ybXVsYS5nZXRDZWxscyhcIkExOkMxXCIpLnRvZ2dsZUNsYXNzKFwiYm9sZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvZ2dsZUNsYXNzKFwiYWxpZ24tY2VudGVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJYXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm11bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuc19jb21wbGV4X2Zvcm11bGEuZ2V0Q2VsbHMoXCJBMjpCNFwiKS5jb250ZW50ID0gW1xuICAgIDIsIDQsXG4gICAgMSwgNSxcbiAgICA0LCA2XTtcblxuc19jb21wbGV4X2Zvcm11bGEuZ2V0Q2VsbHMoXCJDMlwiKS5jb250ZW50ID1cbmA9IEEyKkIyXG4gK0EzKkIzXG4gK0E0KkI0YDtcblxuLyoqL1xuXG5jb25zdCBzX3R5cGVzID0gYXdhaXQgTElTUy5xcygnI3NoZWV0X3R5cGVzJyk7XG5cblxuc190eXBlcy5nZXRDZWxscyhcIkExOkUxXCIpLnRvZ2dsZUNsYXNzKFwiYm9sZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgIC50b2dnbGVDbGFzcyhcImFsaWduLWNlbnRlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW50ID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVGV4dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk5vbWJyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQm9vbMOpZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm11bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIF07XG5cbnNfdHlwZXMuZ2V0Q2VsbHMoXCJBMjpFMlwiKS5jb250ZW50ID0gW1xuICAgIFwiSGVsbG9cIixcbiAgICAyLjMsXG4gICAgdHJ1ZSxcbiAgICBuZXcgRGF0ZSgpLFxuICAgIFwiPUIyKzJcIlxuXVxuXG5cbmNvbnN0IHNfY3Vyc29yID0gYXdhaXQgTElTUy5xcygnI3NoZWV0X2N1cnNvcicpO1xuXG5zX2N1cnNvci5nZXRDZWxscyhcIkExOkgxXCIpLnRvZ2dsZUNsYXNzKFwiYm9sZFwiLCB0cnVlKVxuLnRvZ2dsZUNsYXNzKFwiYWxpZ24tY2VudGVyXCIsIHRydWUpLmNvbnRlbnQgPSBcIipcIjtcbnNfY3Vyc29yLmdldENlbGxzKFwiQTQ6SDRcIikudG9nZ2xlQ2xhc3MoXCJib2xkXCIsIHRydWUpXG4udG9nZ2xlQ2xhc3MoXCJhbGlnbi1jZW50ZXJcIiwgdHJ1ZSkuY29udGVudCA9IFwiKlwiO1xuXG5zX2N1cnNvci5nZXRDZWxscyhcIkQxOkU0XCIpLnRvZ2dsZUNsYXNzKFwiYm9sZFwiLCB0cnVlKVxuLnRvZ2dsZUNsYXNzKFwiYWxpZ24tY2VudGVyXCIsIHRydWUpLmNvbnRlbnQgPSBcIipcIjtcblxuc19jdXJzb3IuZ2V0Q2VsbHMoXCJBMTpBNFwiKS50b2dnbGVDbGFzcyhcImJvbGRcIiwgdHJ1ZSlcbi50b2dnbGVDbGFzcyhcImFsaWduLWNlbnRlclwiLCB0cnVlKS5jb250ZW50ID0gXCIqXCI7XG5zX2N1cnNvci5nZXRDZWxscyhcIkgxOkg0XCIsIHRydWUpLnRvZ2dsZUNsYXNzKFwiYm9sZFwiLCB0cnVlKVxuLnRvZ2dsZUNsYXNzKFwiYWxpZ24tY2VudGVyXCIsIHRydWUpLmNvbnRlbnQgPSBcIipcIjtcblxuXG5jb25zdCBzXyRmb3JtdWxhID0gW1xuICAgIGF3YWl0IExJU1MucXMoJyNzaGVldF9fX19mb3JtdWxhJyksXG4gICAgYXdhaXQgTElTUy5xcygnI3NoZWV0X3hfX2Zvcm11bGEnKSxcbiAgICBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfX3hfZm9ybXVsYScpLFxuICAgIGF3YWl0IExJU1MucXMoJyNzaGVldF94eF9mb3JtdWxhJylcbl1cblxuZm9yKGxldCBpID0gMDsgaSA8IHNfJGZvcm11bGEubGVuZ3RoOyArK2kpIHtcbiAgICBjb25zdCBzXyRmb3JtID0gc18kZm9ybXVsYVtpXTtcblxuICAgIHNfJGZvcm0uZ2V0Q2VsbHMoXCJBMTpEMVwiKS50b2dnbGVDbGFzcyhcImJvbGRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQgPSBbMCwgMSwgMiwgM107XG5cbiAgICBzXyRmb3JtLmdldENlbGxzKFwiQTI6QTRcIikudG9nZ2xlQ2xhc3MoXCJib2xkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW50ID0gWzEsIDIsIDNdO1xuXG4gICAgbGV0IHJlZiA9IFwiPUExXCI7XG4gICAgaWYoIGkgPT09IDEpXG4gICAgICAgIHJlZiA9IFwiPSRBMVwiO1xuICAgIGlmKCBpID09PSAyKVxuICAgICAgICByZWYgPSBcIj1BJDFcIjtcbiAgICBpZiggaSA9PT0gMylcbiAgICAgICAgcmVmID0gXCI9JEEkMVwiO1xuXG4gICAgc18kZm9ybS5nZXRDZWxscyhcIkIyXCIpLmNvbnRlbnQgPSByZWY7XG5cbiAgICBzXyRmb3JtLmdldENlbGxzKFwiQTE6RDRcIikudG9nZ2xlQ2xhc3MoXCJhbGlnbi1jZW50ZXJcIilcbn1cblxuY29uc3Qgc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uID0gYXdhaXQgTElTUy5xcygnI3NoZWV0X3JlY29waWVfbW90aXZhdGlvbicpO1xuXG5zaGVldF9yZWNvcGllX21vdGl2YXRpb24uZ2V0Q2VsbHMoXCJBMTpENFwiKS50b2dnbGVDbGFzcyhcImFsaWduLWNlbnRlclwiKS5jb250ZW50ID0gW1xuICAgIFwiQ29uc28vam91clwiLCBcIkNyYXlvbnNcIiwgXCJHb21tZXNcIiwgXCJUb3RhbCAoam91cilcIixcbiAgICBcIjAxLzAxXCIgICwgMiwgMywgXCI9QjIrQzJcIiwgXG4gICAgXCIwMi8wMVwiICAsIDQsIDEsIFwiPUMzK0MzXCIsIFxuICAgIFwiVG90YWwgKHByb2QpXCIgICwgXCI9QjIrQjNcIiwgXCI9QzIrQzNcIiwgXCI9RDIrRDNcIiwgXG5dO1xuc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uLmdldENlbGxzKFwiQTE6RDFcIikudG9nZ2xlQ2xhc3MoXCJib2xkXCIpO1xuc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uLmdldENlbGxzKFwiQTI6QTRcIikudG9nZ2xlQ2xhc3MoXCJib2xkXCIpO1xuXG5jb25zdCBzaGVldF9yZWNvcGllX21vdGl2YXRpb25fZW1wdHkgPSBhd2FpdCBMSVNTLnFzKCcjc2hlZXRfcmVjb3BpZV9tb3RpdmF0aW9uX2VtcHR5Jyk7XG5cbnNoZWV0X3JlY29waWVfbW90aXZhdGlvbl9lbXB0eS5nZXRDZWxscyhcIkExOkQ0XCIpLnRvZ2dsZUNsYXNzKFwiYWxpZ24tY2VudGVyXCIpLmNvbnRlbnQgPSBbXG4gICAgXCJDb25zby9qb3VyXCIsIFwiQ3JheW9uc1wiLCBcIkdvbW1lc1wiLCBcIlRvdGFsIChqb3VyKVwiLFxuICAgIFwiMDEvMDFcIiAgLCAyLCAzLCB1bmRlZmluZWQsIFxuICAgIFwiMDIvMDFcIiAgLCA0LCAxLCB1bmRlZmluZWQsIFxuICAgIFwiVG90YWwgKHByb2QpXCIgICwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZFxuXTtcbnNoZWV0X3JlY29waWVfbW90aXZhdGlvbl9lbXB0eS5nZXRDZWxscyhcIkExOkQxXCIpLnRvZ2dsZUNsYXNzKFwiYm9sZFwiKTtcbnNoZWV0X3JlY29waWVfbW90aXZhdGlvbl9lbXB0eS5nZXRDZWxscyhcIkEyOkE0XCIpLnRvZ2dsZUNsYXNzKFwiYm9sZFwiKTtcblxuLy8gdGVzdFxuY29uc3QgYyA9IGBcbjx0YWJsZSBpZD1cInVuXCI+XG4gICAgPHRib2R5PlxuICAgICAgICA8dHI+PHRkPlhYWDwvdGQ+PC90cj5cbiAgICA8L3Rib2R5PlxuPC90YWJsZT5gO1xuXG5jb25zdCBjc3MgPSBgXG4gICAgdGQ6bm90KFtjb250ZW50ZWRpdGFibGVdKSB7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIH1cbmA7XG5cbmNsYXNzIFggZXh0ZW5kcyBMSVNTKHtcbiAgICBjb250ZW50OiBjLCBjc3Ncbn0pIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBjb25zdCB0ZCA9IHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignI3VuIHRkJykhO1xuICAgICAgICB0ZC50b2dnbGVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuICAgICAgICB0ZC5mb2N1cygpO1xuICAgICAgICB0ZC50ZXh0Q29udGVudCA9IFwiWVlZXCI7XG4gICAgfVxufVxuXG5MSVNTLmRlZmluZSgndGVzdC10ZXN0JywgWCk7IiwiLy9UT0RPOiB3ZWJwYWNrIGNvbmZpZy4uLlxuaW1wb3J0IExJU1MgZnJvbSBcIi4uLy4uLy4uL2xpYnMvTElTU1wiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0LCBDZWxsLCBDZWxsTGlzdCwgZGVmYXVsdEZvcm1hdCB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbmNvbnN0IGNzcyA9IGBcbiAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgJiBwcmUge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoIDFyZW0gKyA4cHggKyAycHggKTtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGliZXJhdGlvbiBTYW5zJztcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cblxuZXhwb3J0IGNsYXNzIENhbGNGb3JtdWxhIGV4dGVuZHMgTElTUyh7XG4gICAgY3NzXG59KSB7XG5cbiAgICAjaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcbiAgICAjc2hlZXQgICE6IENhbGNTaGVldDtcbiAgICAjY3VyX2NlbGw6IENlbGx8bnVsbCA9IG51bGw7XG4gICAgI29uSW5wdXQ6IChldjogRXZlbnQpID0+IHZvaWQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKCB0aGlzLiNpbnB1dCApO1xuXG4gICAgICAgIHRoaXMuI2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiggdGhpcy4jY3VyX2NlbGwgPT09IG51bGwgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy4jc2hlZXQuY3Vyc29yLmNvbnRlbnQgPSB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCE7XG4gICAgICAgICAgICB0aGlzLiNzaGVldC5zdGF0ZXMuY2VsbF9lZGl0LnN0YXRlID0gbnVsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsICgpID0+IHtcblxuICAgICAgICAgICAgaWYoIHRoaXMuI2N1cl9jZWxsID09PSBudWxsIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnN0YXRlcy5jZWxsX2VkaXQuc3RhdGUgPSB0aGlzLiNjdXJfY2VsbDtcbiAgICAgICAgICAgIC8vdGhpcy4jY3VyX2NlbGwhLnRleHRDb250ZW50ID0gdGhpcy4jaW5wdXQudGV4dENvbnRlbnQhO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmKCB0aGlzLiNjdXJfY2VsbCA9PT0gbnVsbCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLiNjdXJfY2VsbCEudGV4dENvbnRlbnQgPSBkZWZhdWx0Rm9ybWF0KCB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCEgKTtcbiAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudCgnaW5wdXQnLCB7ZGV0YWlsOiB0cnVlfSkgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jb25JbnB1dCA9IChldjogRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBpZiggZXYuZGV0YWlsID09PSB0cnVlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gZGVmYXVsdEZvcm1hdCggdGhpcy4jY3VyX2NlbGwhLnRleHRDb250ZW50ISApO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN5bmNUbyhzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcbiAgICAgICAgY29uc3QgY3Vyc29yID0gdGhpcy4jc2hlZXQuY3Vyc29yO1xuXG4gICAgICAgIGN1cnNvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoXzogYW55KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gY3Vyc29yLmNlbGxzO1xuXG4gICAgICAgICAgICB0aGlzLiNpbnB1dC50b2dnbGVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIGNlbGxzLmxlbmd0aCAhPT0gMCk7XG5cbiAgICAgICAgICAgIGlmKCBjZWxscy5sZW5ndGggPT09IDApIHtcblxuICAgICAgICAgICAgICAgIGlmKCB0aGlzLiNjdXJfY2VsbCAhPT0gbnVsbCApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy4jb25JbnB1dCk7XG4gICAgICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4jY3VyX2NlbGwgPSBjZWxsc1swXTtcbiAgICAgICAgICAgIHRoaXMuI2N1cl9jZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy4jb25JbnB1dCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuI2lucHV0LnRleHRDb250ZW50ID0gZGVmYXVsdEZvcm1hdCggdGhpcy4jY3VyX2NlbGwucmF3Q29udGVudCApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuTElTUy5kZWZpbmUoJ2NhbGMtZm9ybXVsYScsIENhbGNGb3JtdWxhKTsiLCJpbXBvcnQgeyBDYWxjU2hlZXQsIGRlZmF1bHRGb3JtYXQsIFZhbHVlVHlwZSB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbmV4cG9ydCBjbGFzcyBGb3JtdWxhIHtcblxuICAgICNzdHI6IHN0cmluZztcbiAgICAjZXhlYzogKHNoZWV0OiBDYWxjU2hlZXQpID0+IFZhbHVlVHlwZTtcbiAgICAjcmFuZ2VzOiBUb2tlbltdO1xuXG4gICAgY29uc3RydWN0b3Ioc3RyOiBzdHJpbmcsIGV4ZWM6IChzaGVldDogQ2FsY1NoZWV0KSA9PiBWYWx1ZVR5cGUsIHJhbmdlc190b2tlbjogVG9rZW5bXSA9IFtdKSB7XG5cbiAgICAgICAgdGhpcy4jc3RyID0gc3RyO1xuICAgICAgICB0aGlzLiNleGVjID0gZXhlYztcbiAgICAgICAgdGhpcy4jcmFuZ2VzID0gcmFuZ2VzX3Rva2VuO1xuICAgIH1cbiAgICBcbiAgICByZWxhdGl2ZVRvKCBzaGVldDogQ2FsY1NoZWV0LCBkcm93OiBudW1iZXIsIGRjb2w6IG51bWJlcikge1xuICAgICAgICBcbiAgICAgICAgbGV0IG5ld19yYW5nZXMgPSB0aGlzLiNyYW5nZXMubWFwKHIgPT4ge1xuXG4gICAgICAgICAgICAvL1RPRE86IGlmIHJhbmdlLi4uXG4gICAgICAgICAgICBsZXQgcG9zID0gWy4uLnNoZWV0LmNlbGxQb3MoIHNoZWV0LmdldENlbGxzKHIudmFsdWUpLmNlbGxzWzBdICldO1xuICAgIFxuICAgICAgICAgICAgaWYoIHIudmFsdWUubGFzdEluZGV4T2YoJyQnKSA8PSAwIClcbiAgICAgICAgICAgICAgICBwb3NbMF0gKz0gZHJvdztcbiAgICAgICAgICAgIGlmKCByLnZhbHVlWzBdICE9PSAnJCcgKVxuICAgICAgICAgICAgICAgIHBvc1sxXSArPSBkY29sO1xuXG4gICAgICAgICAgICByZXR1cm4gYCR7U3RyaW5nLmZyb21DaGFyQ29kZSg2NStwb3NbMV0tMSl9JHtwb3NbMF19YDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG5ld19mb3JtdWxhID0gXCJcIjtcblxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuI3Jhbmdlcy5sZW5ndGg7ICsraSkge1xuXG4gICAgICAgICAgICBuZXdfZm9ybXVsYSArPSB0aGlzLiNzdHIuc2xpY2Uob2Zmc2V0LCB0aGlzLiNyYW5nZXNbaV0uYmVnKTtcbiAgICAgICAgICAgIG5ld19mb3JtdWxhICs9IG5ld19yYW5nZXNbaV07XG5cbiAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuI3Jhbmdlc1tpXS5lbmQ7XG4gICAgICAgIH1cbiAgICAgICAgbmV3X2Zvcm11bGEgKz0gdGhpcy4jc3RyLnNsaWNlKG9mZnNldCk7XG4gICAgICAgIFxuICAgICAgICAvL2NhbiBiZSBvcHRpbWl6ZWQuLi5cbiAgICAgICAgcmV0dXJuIHBhcnNlX2Zvcm11bGEoIG5ld19mb3JtdWxhICk7XG4gICAgfVxuXG4gICAgZ2V0IHJhbmdlc1Rva2VuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcmFuZ2VzO1xuICAgIH1cblxuICAgIGV4ZWMoc2hlZXQ6IENhbGNTaGVldCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jZXhlYyhzaGVldCk7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzdHI7XG4gICAgfVxufVxuXG50eXBlIFRva2VuID0ge1xuICAgIGJlZzogbnVtYmVyLFxuICAgIGVuZDogbnVtYmVyLFxuICAgIHZhbHVlOiBzdHJpbmcsXG4gICAgdHlwZTogXCJzdHJpbmdcInxcIm51bWJlclwifFwiY2FsbFwifFwicmFuZ2VcInxcIm9wXCJcbn1cblxuXG5mdW5jdGlvbiBleHRyYWN0VG9rZW4oc3RyOiBzdHJpbmcsIG9mZnNldDogbnVtYmVyKSB7XG5cbiAgICB3aGlsZSggWycgJywgJ1xcbicsICdcXHQnXS5pbmNsdWRlcyhzdHJbb2Zmc2V0XSkgKSAvLyBpZ25vcmUgd2hpdGVzcGFjZXNcbiAgICAgICAgKytvZmZzZXQ7XG5cbiAgICBsZXQgdG9rZW46IFBhcnRpYWw8VG9rZW4+ID0ge1xuICAgICAgICBiZWc6IG9mZnNldFxuICAgIH07XG5cbiAgICBpZihzdHJbb2Zmc2V0XSA9PT0gJ1wiJykge1xuICAgICAgICB0b2tlbi50eXBlID0gXCJzdHJpbmdcIjtcbiAgICAgICAgd2hpbGUoIHN0clsrK29mZnNldF0gIT09ICdcIicgJiYgc3RyW29mZnNldC0xXSAhPT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICBpZihvZmZzZXQrMSA+PSBzdHIubGVuZ3RoIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Zvcm11bGEgcGFyc2luZyBlcnJvcicpO1xuICAgICAgICB9XG4gICAgICAgICsrb2Zmc2V0O1xuICAgIH0gZWxzZSBpZiggc3RyW29mZnNldF0gPT09ICcsJyB8fCAoc3RyW29mZnNldF0gPj0gJzAnICYmIHN0cltvZmZzZXRdIDw9ICc5JykgKSB7XG4gICAgICAgIHRva2VuLnR5cGUgPSBcIm51bWJlclwiO1xuICAgICAgICBsZXQgaGFzQ29tbWEgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUoIHN0cltvZmZzZXRdID09PSAnLCcgfHwgc3RyW29mZnNldF0gPj0gJzAnICYmIHN0cltvZmZzZXRdIDw9ICc5JyApIHtcblxuICAgICAgICAgICAgaWYoIHN0cltvZmZzZXRdID09PSAnLCcgKSB7XG4gICAgICAgICAgICAgICAgaWYoaGFzQ29tbWEgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRm9ybXVsYSBwYXJzaW5nIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgaGFzQ29tbWEgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICArK29mZnNldDtcbiAgICAgICAgfVxuXG4gICAgfSBlbHNlIGlmKCBzdHJbb2Zmc2V0XSA9PT0gJyQnIHx8IHN0cltvZmZzZXRdID49ICdBJyAmJiBzdHJbb2Zmc2V0XSA8PSAnWicpIHsgLy8rJFxuICAgICAgICBcbiAgICAgICAgd2hpbGUoIG9mZnNldCA8IHN0ci5sZW5ndGhcbiAgICAgICAgICAgICAgICAmJiAoc3RyW29mZnNldF0gPT09ICckJyB8fCBzdHJbb2Zmc2V0XSA+PSAnQScgJiYgc3RyW29mZnNldF0gPD0gJ1onXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgc3RyW29mZnNldF0gPj0gJzAnICYmIHN0cltvZmZzZXRdIDw9ICc5J1xuICAgICAgICAgICAgICAgICAgICApIClcbiAgICAgICAgICAgICsrb2Zmc2V0O1xuXG4gICAgICAgIHRva2VuLnR5cGUgPSBzdHJbb2Zmc2V0XSA9PT0gJygnID8gJ2NhbGwnIDogJ3JhbmdlJztcblxuICAgICAgICBpZiggc3RyW29mZnNldF0gPT09ICcoJyApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdG9rZW4udHlwZSA9IFwib3BcIjsgLy8gb25seSBvbiBjaGFyID8/P1xuXG4gICAgICAgIGlmKCBzdHJbb2Zmc2V0ICsgMV0gPT09ICc9JykgLy8gPj0gLyA8PVxuICAgICAgICAgICAgKytvZmZzZXQ7XG4gICAgICAgIGVsc2UgaWYoIHN0cltvZmZzZXQgKyAxXSA9PT0gJz4nKSAvLyA8PlxuICAgICAgICAgICAgKytvZmZzZXQ7XG5cbiAgICAgICAgKytvZmZzZXQ7XG4gICAgfVxuXG4gICAgdG9rZW4uZW5kID0gb2Zmc2V0O1xuICAgIHRva2VuLnZhbHVlID0gc3RyLnNsaWNlKHRva2VuLmJlZywgdG9rZW4uZW5kKTtcblxuICAgIHJldHVybiB0b2tlbiBhcyBSZXF1aXJlZDxUb2tlbj47XG59XG5cbmNsYXNzIE5vZGUge1xuXG4gICAgY2hpbGRyZW46IE5vZGVbXTtcbiAgICAjZmN0OiAoc2hlZXQ6IENhbGNTaGVldCwgLi4uYXJnczooVmFsdWVUeXBlKVtdKSA9PiBWYWx1ZVR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihmY3Q6IChzaGVldDogQ2FsY1NoZWV0LCAuLi5hcmdzOihWYWx1ZVR5cGUpW10pID0+IFZhbHVlVHlwZSwgLi4uY2hpbGRyZW46IE5vZGVbXSkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgIGlmKGNoaWxkcmVuID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXVEZcIik7XG4gICAgICAgIHRoaXMuI2ZjdCA9IGZjdDtcbiAgICB9XG5cbiAgICBldmFsKHNoZWV0OiBDYWxjU2hlZXQpOiBWYWx1ZVR5cGUge1xuICAgICAgICBjb25zdCBhcmdzID0gdGhpcy5jaGlsZHJlbi5tYXAoIGMgPT4gYy5ldmFsKHNoZWV0KSApO1xuICAgICAgICByZXR1cm4gdGhpcy4jZmN0KHNoZWV0LCAuLi5hcmdzICk7XG4gICAgfVxuICAgIFxufVxuXG5mdW5jdGlvbiB0b051bWJlcihhOiB1bmtub3duKTogbnVtYmVyIHtcblxuICAgIGlmKGEgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgcmV0dXJuIGEgYXMgdW5rbm93biBhcyBudW1iZXI7XG59XG5cbmNvbnN0IG9wX2ltcGwgPSB7XG4gICAgJyUnOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duKSA9PiB0b051bWJlcihhKS8xMDAsXG4gICAgJ3UuKyc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24pID0+ICt0b051bWJlcihhKSxcbiAgICAndS4tJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93bikgPT4gLXRvTnVtYmVyKGEpLFxuICAgICcqJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93biwgYjogdW5rbm93bikgPT4gdG9OdW1iZXIoYSkqdG9OdW1iZXIoYiksXG4gICAgJy8nOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiB0b051bWJlcihhKS90b051bWJlcihiKSxcbiAgICAnKyc6IChfOiBDYWxjU2hlZXQsIGE6IHVua25vd24sIGI6IHVua25vd24pID0+IHRvTnVtYmVyKGEpK3RvTnVtYmVyKGIpLFxuICAgICctJzogKF86IENhbGNTaGVldCwgYTogdW5rbm93biwgYjogdW5rbm93bikgPT4gdG9OdW1iZXIoYSktdG9OdW1iZXIoYiksXG4gICAgJ14nOiAoXzogQ2FsY1NoZWV0LCBhOiB1bmtub3duLCBiOiB1bmtub3duKSA9PiBNYXRoLnBvdyh0b051bWJlcihhKSx0b051bWJlcihiKSApLFxuICAgICcmJzogKF86IENhbGNTaGVldCwgYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+IGAke2RlZmF1bHRGb3JtYXQoYSl9JHtkZWZhdWx0Rm9ybWF0KGIpfWAsXG4gICAgJz0nOiAgKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPT09IGIsXG4gICAgJzw+JzogKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgIT09IGIsXG4gICAgJz4nOiAgKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPiBiLFxuICAgICc+PSc6IChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhID49IGIsXG4gICAgJzwnOiAgKF86IENhbGNTaGVldCwgYTogYW55LCBiOiBhbnkpID0+IGEgPCBiLFxuICAgICc8PSc6IChfOiBDYWxjU2hlZXQsIGE6IGFueSwgYjogYW55KSA9PiBhIDw9IGIsXG59IGFzIFJlY29yZDxzdHJpbmcsIChfOiBDYWxjU2hlZXQsIC4uLmFyZ3M6VmFsdWVUeXBlW10pID0+IFZhbHVlVHlwZT47XG5cbi8vIGh0dHBzOi8vaGVscC5saWJyZW9mZmljZS5vcmcvbGF0ZXN0L2VuLVVTL3RleHQvc2NhbGMvMDEvMDQwNjAxOTkuaHRtbFxuY29uc3Qgb3BfcHJpbyA9IFtcbiAgICBbJzonXSwgLy8gcmFuZ2VcbiAgICBbJyEnXSwgLy8gcmFuZ2UgaW50ZXJzZWN0aW9uXG4gICAgWyd+J10sIC8vIHJhbmdlIHVuaW9uXG4gICAgWyd1LisnLCAndS4tJ10sIC8vIHVuYXJ5IC0gZnJvbSByaWdodCB0byBsZWZ0Li4uXG4gICAgWyclJ10sIC8vIHBvc3RmaXgsIC8xMDBcbiAgICBbJ14nXSwgLy8gcG93ZXJcbiAgICBbJyonLCAnLyddLFxuICAgIFsnKycsICctJ10sXG4gICAgWycmJ10sIC8vIHN0cmluZyBjb25jYXRcbiAgICBbJz0nLCAnPD4nLCAnPCcsICc8PScsICc+JywgJz49J10gLy8gY29tcGFyZVxuXTtcblxubGV0IG9wczogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHt9O1xuZm9yKGxldCBpID0gMDsgaSA8IG9wX3ByaW8ubGVuZ3RoOyArK2kpXG4gICAgZm9yKGxldCBvcCBvZiBvcF9wcmlvW2ldIClcbiAgICAgICAgb3BzW29wXSA9IGk7XG5cbmZ1bmN0aW9uIHRva2VubGlzdDJUcmVlKHRva2VuczogVG9rZW5bXSk6IE5vZGUge1xuXG4gICAgaWYoIHRva2Vucy5sZW5ndGggPT09IDEpIHtcblxuICAgICAgICBpZiggdG9rZW5zWzBdLnR5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IG5iID0gK3Rva2Vuc1swXS52YWx1ZS5yZXBsYWNlKCcsJywgJy4nKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTm9kZSggKCkgPT4gbmIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCB0b2tlbnNbMF0udHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgY29uc3Qgc3RyID0gdG9rZW5zWzBdLnZhbHVlLnNsaWNlKDEsLTEpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBOb2RlKCAoKSA9PiBzdHIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCB0b2tlbnNbMF0udHlwZSA9PT0gXCJyYW5nZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vZGUoIChzaGVldDogQ2FsY1NoZWV0KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsZXQgcmF3ID0gc2hlZXQuZ2V0Q2VsbHModG9rZW5zWzBdLnZhbHVlKS5jZWxsc1swXS5yYXdDb250ZW50O1xuXG4gICAgICAgICAgICAgICAgaWYoIHJhdyBpbnN0YW5jZW9mIEZvcm11bGEpXG4gICAgICAgICAgICAgICAgICAgIHJhdyA9IHJhdy5leGVjKHNoZWV0KTsgLy8gVE9ETzogY2FjaGUgcmVzdWx0XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmF3IGFzIFZhbHVlVHlwZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIj8/P1wiKTtcbiAgICB9XG5cbiAgICBpZih0b2tlbnNbMF0udmFsdWUgPT09ICcoJyAmJiB0b2tlbnNbdG9rZW5zLmxlbmd0aC0xXS52YWx1ZSA9PT0gJyknKVxuICAgICAgICByZXR1cm4gdG9rZW5saXN0MlRyZWUodG9rZW5zLnNsaWNlKDEsLTEpICk7XG5cbiAgICBsZXQgY3VyID0ge1xuICAgICAgICBwcmlvcml0eTogb3BfcHJpby5sZW5ndGgsXG4gICAgICAgIGlkeCAgICAgOiAtMVxuICAgIH07XG5cbiAgICBmb3IobGV0IGkgPSB0b2tlbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgaWYoIHRva2Vuc1tpXS50eXBlICE9PSBcIm9wXCIgKSAvLyBjYWxsIG5vdCBoYW5kbGVkIHlldC4uLlxuICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgaWYoIHRva2Vuc1tpXS52YWx1ZSA9PT0gJyknICkgeyAvLyBnbyB0byBmaXJzdCAnKCdcbiAgICAgICAgICAgIGkgPSB0b2tlbnMuZmluZEluZGV4KCB0ID0+IHQudHlwZSA9PT0gJ29wJyAmJiB0LnZhbHVlID09PSAnKCcpO1xuXG4gICAgICAgICAgICBpZiggaSA9PT0gMClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC0taTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFzc2VydHMgaWYgdW5hcnkgb3AuXG4gICAgICAgIGlmKCB0b2tlbnNbaV0udmFsdWUgPT09ICctJyB8fCB0b2tlbnNbaV0udmFsdWUgPT09ICcrJyApIHtcblxuICAgICAgICAgICAgaWYoIGkgPT09IDAgfHwgdG9rZW5zW2ktMV0udHlwZSA9PT0gXCJvcFwiICkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdV9vcCA9IGB1LiR7dG9rZW5zW2ldLnZhbHVlfWA7XG4gICAgICAgICAgICAgICAgdG9rZW5zW2ldLnZhbHVlID0gdV9vcDtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IG9wc1t1X29wXTtcblxuICAgICAgICAgICAgICAgIC8vIHByaW9yaXR5IGlzIHJldmVyc2VkICsgZXZhbHVhdGVkIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAgICAgICAgICAgICAgICBpZiggcHJpb3JpdHkgPD0gY3VyLnByaW9yaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGN1ci5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICAgICAgICAgICAgICBjdXIuaWR4ICAgICAgPSBpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBvcHNbdG9rZW5zW2ldLnZhbHVlXTtcblxuICAgICAgICAvLyBwcmlvcml0eSBpcyByZXZlcnNlZC5cbiAgICAgICAgaWYoIHByaW9yaXR5IDwgY3VyLnByaW9yaXR5KSB7XG4gICAgICAgICAgICBjdXIucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgICAgIGN1ci5pZHggICAgICA9IGk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiggY3VyLmlkeCA9PT0gLTEpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignPz8/Jyk7XG5cbiAgICBsZXQgb3BfdG9rZW4gPSB0b2tlbnNbY3VyLmlkeF07XG4gICAgaWYoIG9wX3Rva2VuLnZhbHVlID09PSAnJScgKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgID0gdG9rZW5zLnNsaWNlKDAsIGN1ci5pZHgpO1xuICAgICAgICBjb25zdCBvcCA9IG9wX2ltcGxbb3BfdG9rZW4udmFsdWUgYXMga2V5b2YgdHlwZW9mIG9wX2ltcGxdO1xuICAgICAgICByZXR1cm4gbmV3IE5vZGUoXG4gICAgICAgICAgICBvcCxcbiAgICAgICAgICAgIHRva2VubGlzdDJUcmVlKGxlZnQpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc29sZS53YXJuKG9wX3Rva2VuLnZhbHVlKTtcblxuICAgIGlmKCBvcF90b2tlbi52YWx1ZSA9PT0gJ3UuLScgfHwgIG9wX3Rva2VuLnZhbHVlID09PSAndS4rJyApIHtcblxuICAgICAgICBjb25zdCByaWdodCAgPSB0b2tlbnMuc2xpY2UoY3VyLmlkeCsxKTtcbiAgICAgICAgY29uc3Qgb3AgPSBvcF9pbXBsW29wX3Rva2VuLnZhbHVlIGFzIGtleW9mIHR5cGVvZiBvcF9pbXBsXTtcbiAgICAgICAgcmV0dXJuIG5ldyBOb2RlKFxuICAgICAgICAgICAgb3AsXG4gICAgICAgICAgICB0b2tlbmxpc3QyVHJlZShyaWdodClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBsZWZ0ICA9IHRva2Vucy5zbGljZSgwLCBjdXIuaWR4KTtcbiAgICBjb25zdCByaWdodCA9IHRva2Vucy5zbGljZShjdXIuaWR4KzEpO1xuXG4gICAgY29uc3Qgb3AgPSBvcF9pbXBsW29wX3Rva2VuLnZhbHVlIGFzIGtleW9mIHR5cGVvZiBvcF9pbXBsXTtcblxuICAgIHJldHVybiBuZXcgTm9kZShcbiAgICAgICAgb3AsXG4gICAgICAgIHRva2VubGlzdDJUcmVlKGxlZnQpLFxuICAgICAgICB0b2tlbmxpc3QyVHJlZShyaWdodClcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VfZm9ybXVsYShzdHI6c3RyaW5nKSB7XG5cbiAgICBsZXQgb2Zmc2V0ID0gMTtcbiAgICBsZXQgdG9rZW5zID0gbmV3IEFycmF5PFRva2VuPigpO1xuXG4gICAgd2hpbGUoIG9mZnNldCA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGN1clRva2VuID0gZXh0cmFjdFRva2VuKHN0ciwgb2Zmc2V0KTtcbiAgICAgICAgdG9rZW5zLnB1c2goIGN1clRva2VuICk7XG4gICAgICAgIG9mZnNldCA9IGN1clRva2VuLmVuZDtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gdG9rZW5saXN0MlRyZWUodG9rZW5zKSE7XG5cbiAgICBjb25zdCByYW5nZXMgPSB0b2tlbnMuZmlsdGVyKHQgPT4gdC50eXBlID09PSBcInJhbmdlXCIgKTtcblxuICAgIHJldHVybiBuZXcgRm9ybXVsYShzdHIsIChzaGVldDogQ2FsY1NoZWV0KSA9PiBub2RlLmV2YWwoc2hlZXQpLCByYW5nZXMgKTtcbn1cblxuY29uc3QgZmFrZV9zaGVldCA9IG51bGwgYXMgdW5rbm93biBhcyBDYWxjU2hlZXQ7XG5cbmNvbnNvbGUud2FybignPVwiMjJcIicgICAsIHBhcnNlX2Zvcm11bGEoJz1cIjIyXCInKS5leGVjKGZha2Vfc2hlZXQpICk7XG5jb25zb2xlLndhcm4oJz0yMicgICAgICwgcGFyc2VfZm9ybXVsYSgnPTIyJykuZXhlYyhmYWtlX3NoZWV0KSApO1xuY29uc29sZS53YXJuKCc9MjIqMicgICAsIHBhcnNlX2Zvcm11bGEoJz0yMioyJykuZXhlYyhmYWtlX3NoZWV0KSApO1xuY29uc29sZS53YXJuKCc9MisoMioyKScsIHBhcnNlX2Zvcm11bGEoJz0yKygyKjIpJykuZXhlYyhmYWtlX3NoZWV0KSApO1xuY29uc29sZS53YXJuKCc9MisyKjInICAsIHBhcnNlX2Zvcm11bGEoJz0yKygyKjIpJykuZXhlYyhmYWtlX3NoZWV0KSApO1xuY29uc29sZS53YXJuKCc9MioyKzInICAsIHBhcnNlX2Zvcm11bGEoJz0yKygyKjIpJykuZXhlYyhmYWtlX3NoZWV0KSApO1xuXG4vL2V4dHJhY3RUb2tlbihcIj0yKjJcIiwgMSk7IiwiLy9UT0RPOiB3ZWJwYWNrIGNvbmZpZy4uLlxuaW1wb3J0IExJU1MgZnJvbSBcIi4uLy4uLy4uL2xpYnMvTElTU1wiO1xuaW1wb3J0IHsgQ2FsY1NoZWV0LCBDZWxsTGlzdCwgZGVmYXVsdEZvcm1hdCB9IGZyb20gXCIuL3NoZWV0XCI7XG5cbi8vVE9ETzogc3ludGF4IGhpZ2hsaWdodCA7KVxuXG5jb25zdCBjc3MgPSBgXG4gICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYgcHJlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKCAxcmVtICsgOHB4ICsgMnB4ICk7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xpYmVyYXRpb24gU2Fucyc7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5leHBvcnQgY2xhc3MgUGxhZ2VGb3JtdWxhIGV4dGVuZHMgTElTUyh7XG4gICAgY3NzXG59KSB7XG5cbiAgICAjaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoIHRoaXMuI2lucHV0ICk7XG4gICAgICAgIHRoaXMuI2lucHV0LnRvZ2dsZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJyk7XG5cbiAgICAgICAgdGhpcy4jaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldikgPT4ge1xuICAgICAgICAgICAgaWYoZXYuY29kZSAhPT0gJ0VudGVyJylcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGV2LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLiNzaGVldC5nZXRDZWxscyh0aGlzLiNpbnB1dC50ZXh0Q29udGVudCEpLmNlbGxzO1xuXG4gICAgICAgICAgICB0aGlzLiNzaGVldC5zZWxlY3Rpb24uY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LnNlbGVjdGlvbi5hZGQoIC4uLnNlbGVjdGVkICk7XG5cbiAgICAgICAgICAgIHRoaXMuI3NoZWV0LmN1cnNvci5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy4jc2hlZXQuY3Vyc29yLmFkZCggc2VsZWN0ZWRbMF0gKTtcblxuICAgICAgICAgICAgdGhpcy4jaW5wdXQuYmx1cigpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vVE9ETy4uLi5cbiAgICAgICAgdGhpcy4jaW5wdXQudG9nZ2xlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAvKnRoaXMuI2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcblxuICAgICAgICB9KTsqL1xuICAgIH1cblxuICAgICNzaGVldCE6IENhbGNTaGVldDtcblxuICAgIHN5bmNUbyhzaGVldDogQ2FsY1NoZWV0KSB7XG5cbiAgICAgICAgdGhpcy4jc2hlZXQgPSBzaGVldDtcblxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBzaGVldC5zZWxlY3Rpb247XG5cbiAgICAgICAgc2VsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChfOiBhbnkpID0+IHtcblxuICAgICAgICAgICAgbGV0IGNlbGwgPSBzZWxlY3Rpb24uY2VsbHM7XG4gICAgICAgICAgICBpZiggY2VsbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLiNpbnB1dC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiggY2VsbC5sZW5ndGggPT09IDEgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jaW5wdXQudGV4dENvbnRlbnQgPSBjZWxscG9zMmNlbGxuYW1lKCAuLi5zaGVldC5jZWxsUG9zKGNlbGxbMF0pICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL1RPRE8uLi5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNlbGxwb3MyY2VsbG5hbWUocm93aWQ6IG51bWJlciwgY29saWQ6IG51bWJlcikge1xuICAgIHJldHVybiBgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1K2NvbGlkLTEpfSR7cm93aWR9YDtcbn1cblxuTElTUy5kZWZpbmUoJ2NhbGMtcGxhZ2UnLCBQbGFnZUZvcm11bGEpOyIsIi8vVE9ETzogd2VicGFjayBjb25maWcuLi5cbmltcG9ydCBMSVNTIGZyb20gXCIuLi8uLi8uLi9saWJzL0xJU1NcIjtcblxuLy9AdHMtaWdub3JlXG5pbXBvcnQgY3NzIGZyb20gXCIhIXJhdy1sb2FkZXIhLi9pbmRleC5jc3NcIjtcblxuZXhwb3J0IHR5cGUgVmFsdWVUeXBlID0gc3RyaW5nfG51bWJlcnxEYXRlfGJvb2xlYW47XG5leHBvcnQgdHlwZSBSYXdDb250ZW50VHlwZSA9IFZhbHVlVHlwZXxGb3JtdWxhO1xuXG5leHBvcnQgdHlwZSBDZWxsID0gSFRNTFRhYmxlQ2VsbEVsZW1lbnQgJiB7XG4gICAgcmF3Q29udGVudDogUmF3Q29udGVudFR5cGUsXG4gICAgZm9ybWF0OiAodjogc3RyaW5nfG51bWJlcikgPT4gc3RyaW5nLFxuICAgIGlzX3JvOiBib29sZWFuXG59O1xuXG5mdW5jdGlvbiBpc0FjdGl2ZSh0YXJnZXQ6IEhUTUxFbGVtZW50KSB7XG5cbiAgICByZXR1cm4gdGFyZ2V0Lm1hdGNoZXMoJzpmb2N1cycpO1xuLypcbiAgICBsZXQgYWN0aXZlID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgIHdoaWxlKCBhY3RpdmU/LnNoYWRvd1Jvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290IClcbiAgICAgICAgYWN0aXZlID0gYWN0aXZlLnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudDtcblxuICAgIHJldHVybiBhY3RpdmUgPT09IHRhcmdldDsqL1xufVxuXG5mdW5jdGlvbiBvbklucHV0KGV2OiBFdmVudCkge1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgLypcbiAgICBpZiggISBpc0FjdGl2ZSh0YXJnZXQpICkge1xuICAgICAgICB0YXJnZXQuaW5uZXJIVE1MID0gaGlnaGxpZ2h0KHRhcmdldC50ZXh0Q29udGVudCEpO1xuICAgICAgICByZXR1cm47XG4gICAgfSovXG5cbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMTIzNDc0MS9wbGFjZS1jYXJldC1iYWNrLXdoZXJlLWl0LXdhcy1hZnRlci1jaGFuZ2luZy1pbm5lcmh0bWwtb2YtYS1jb250ZW50ZWRpdGFibGUtZWxlbVxuXG4gICAgbGV0IHJyYW5nZSA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSEuZ2V0UmFuZ2VBdCgwKTtcbiAgICBsZXQgYyA9IHJyYW5nZS5zdGFydE9mZnNldDtcblxuICAgIC8vbGV0IHRleHQgPSBcIlwiO1xuICAgIGxldCBsZW5ndGggPSAwO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXJnZXQuY2hpbGROb2Rlcy5sZW5ndGg7ICsraSkge1xuXG4gICAgICAgIGxldCBjaGlsZCA9IHRhcmdldC5jaGlsZE5vZGVzW2ldO1xuICAgICAgICBpZiggY2hpbGQubm9kZVR5cGUgIT09IE5vZGUuVEVYVF9OT0RFKVxuICAgICAgICAgICAgY2hpbGQgPSBjaGlsZC5jaGlsZE5vZGVzWzBdO1xuXG4gICAgICAgIGlmKCBycmFuZ2Uuc3RhcnRDb250YWluZXIgPT09IGNoaWxkICkge1xuICAgICAgICAgICAgLy90ZXh0ICs9IHAuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudCEuc2xpY2UoMCwgYyk7XG4gICAgICAgICAgICBsZW5ndGggKz0gYztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vdGV4dCArPSBwLmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQ7XG4gICAgICAgIGxlbmd0aCArPSB0YXJnZXQuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudCEubGVuZ3RoO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBpbm5lckhUTUxcbiAgICAvL3RhcmdldC5pbm5lckhUTUwgPSBoaWdobGlnaHQodGFyZ2V0LnRleHRDb250ZW50ISk7XG4gICAgdGFyZ2V0LnRleHRDb250ZW50ID0gdGFyZ2V0LnRleHRDb250ZW50O1xuXG4gICAgbGV0IGNoaWxkITogQ2hpbGROb2RlO1xuICAgIGxldCBpO1xuICAgIGZvcihpID0gMDsgaSA8IHRhcmdldC5jaGlsZE5vZGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmKCBsZW5ndGggPD0gdGFyZ2V0LmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQhLmxlbmd0aCApIHtcbiAgICAgICAgICAgIGNoaWxkID0gdGFyZ2V0LmNoaWxkTm9kZXNbaV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBsZW5ndGggLT0gdGFyZ2V0LmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQhLmxlbmd0aDtcbiAgICB9XG5cbiAgICBpZiggY2hpbGQubm9kZVR5cGUgIT09IE5vZGUuVEVYVF9OT0RFKVxuICAgICAgICBjaGlsZCA9IGNoaWxkLmNoaWxkTm9kZXNbMF07XG5cbiAgICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkhO1xuXG4gICAgcmFuZ2Uuc2V0U3RhcnQoY2hpbGQsIGxlbmd0aCk7XG4gICAgcmFuZ2UuY29sbGFwc2UodHJ1ZSk7XG4gICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgIHNlbC5hZGRSYW5nZShyYW5nZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0Rm9ybWF0KHZhbHVlOiBSYXdDb250ZW50VHlwZSkge1xuXG4gICAgaWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgcmV0dXJuIGAkeyt2YWx1ZS50b1ByZWNpc2lvbig3KX1gLnJlcGxhY2UoJy4nLCAnLCcpO1xuXG4gICAgaWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpXG4gICAgICAgIHJldHVybiB2YWx1ZSA/ICdWUkFJJyA6ICdGQVVYJztcblxuICAgIGlmKCB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiKTtcbiAgICB9XG4gICAgXG4gICAgaWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSBpbnN0YW5jZW9mIEZvcm11bGEpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7IC8vVE9ETy4uLlxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gcGFyc2VJbnB1dCggc3RyOiBzdHJpbmcgKTogUmF3Q29udGVudFR5cGUge1xuXG4gICAgaWYoc3RyID09PSAnVlJBSScpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIGlmKHN0ciA9PT0gJ0ZBVVgnKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBpZihzdHIgPT09ICcnKVxuICAgICAgICByZXR1cm4gc3RyO1xuXG4gICAgaWYoc3RyWzBdID09PSBcIj1cIikge1xuICAgICAgICByZXR1cm4gcGFyc2VfZm9ybXVsYShzdHIpO1xuICAgIH1cblxuICAgIGxldCB0ZXN0X251bWJlciA9IE51bWJlciggc3RyLnJlcGxhY2UoJywnLCAnLicpICk7XG4gICAgaWYoICEgTnVtYmVyLmlzTmFOKCB0ZXN0X251bWJlciApIClcbiAgICAgICAgcmV0dXJuIHRlc3RfbnVtYmVyO1xuXG4gICAgY29uc3QgcGFydHMgPSBzdHIuc3BsaXQoJy8nKTtcbiAgICBpZihwYXJ0cy5sZW5ndGggPD0gMykge1xuXG4gICAgICAgIGxldCB0ZXN0X2RhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgICtwYXJ0c1syXSA/PyBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICArcGFydHNbMV0tMSxcbiAgICAgICAgICAgICtwYXJ0c1swXVxuICAgICAgICApO1xuXG4gICAgICAgIGlmKCB0ZXN0X2RhdGUudG9TdHJpbmcoKSAhPT0gXCJJbnZhbGlkIERhdGVcIiApXG4gICAgICAgICAgICByZXR1cm4gdGVzdF9kYXRlO1xuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG59XG5cbmNsYXNzIFN0YXRlPFQ+IHtcblxuICAgICNzdGF0ZSA6IFR8bnVsbCA9IG51bGw7XG4gICAgI3RhcmdldDogRXZlbnRUYXJnZXQ7XG4gICAgI25hbWUgIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IodGFyZ2V0OiBFdmVudFRhcmdldCwgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuI3RhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy4jbmFtZSAgID0gbmFtZTtcbiAgICB9XG5cbiAgICBnZXQgc3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzdGF0ZTtcbiAgICB9XG5cbiAgICBzZXQgc3RhdGUoc3RhdGU6IFR8bnVsbCkge1xuXG4gICAgICAgIGNvbnNvbGUud2FybihcInN0YXRlXCIsIHRoaXMuI3N0YXRlLCBzdGF0ZSk7XG5cbiAgICAgICAgaWYoIHRoaXMuI3N0YXRlID09PSBzdGF0ZSlcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBsZXQgcHJldl9zdGF0ZSA9IHRoaXMuI3N0YXRlO1xuICAgICAgICB0aGlzLiNzdGF0ZSA9IHN0YXRlO1xuICAgICAgICBcblxuICAgICAgICBpZiggcHJldl9zdGF0ZSAhPT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMuI3RhcmdldC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoYCR7dGhpcy4jbmFtZX1fZW5kYCwge2RldGFpbDogcHJldl9zdGF0ZX0pICk7ICAgICAgICAgICAgXG5cbiAgICAgICAgaWYoIHN0YXRlICE9PSBudWxsIClcbiAgICAgICAgICAgIHRoaXMuI3RhcmdldC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoYCR7dGhpcy4gI25hbWV9X3N0YXJ0YCwge2RldGFpbDogc3RhdGV9KSApO1xuICAgIH1cbn1cblxuY29uc3QgU3RhdGVzID0ge1xuICAgIFwiY2VsbF9lZGl0XCI6IFN0YXRlPENlbGw+XG4gfSBhcyBjb25zdDtcblxuZXhwb3J0IGNsYXNzIENhbGNTaGVldCBleHRlbmRzIExJU1Moe1xuICAgIGNzcyxcbiAgICBhdHRyaWJ1dGVzOiBbXCJjb2xzXCIsIFwicm93c1wiLCBcInJvXCJdXG59KSB7XG5cbiAgICBzdGF0ZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoIE9iamVjdC5lbnRyaWVzKFN0YXRlcykubWFwKCAoW24sc10pID0+IFtuLCBuZXcgcyh0aGlzLmhvc3QsIG4pXSBhcyBjb25zdCApKTtcblxuICAgICNzZWxlY3Rpb24gPSBuZXcgQ2VsbExpc3QodGhpcywgW10pO1xuICAgICNjdXJzb3IgICAgPSBuZXcgQ2VsbExpc3QodGhpcywgW10pO1xuXG4gICAgZ2V0IGN1cnNvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2N1cnNvcjtcbiAgICB9XG4gICAgZ2V0IHNlbGVjdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3NlbGVjdGlvbjtcbiAgICB9XG5cbiAgICByZW1vdmVIaWdobGlnaHRzKCkge1xuICAgICAgICBmb3IobGV0IGggb2YgdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYW5nZV9oaWdobGlnaHQnKSApXG4gICAgICAgICAgICBoLnJlbW92ZSgpO1xuICAgIH1cbiAgICByZW1vdmVDb3B5SGlnaGxpZ2h0KCkge1xuICAgICAgICBmb3IobGV0IGggb2YgdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3B5X2hpZ2hsaWdodCcpIClcbiAgICAgICAgICAgIGgucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaGlnaGxpZ2h0KHN0YXJ0OiBDZWxsLCBlbmQ6IENlbGwsIGlkX29yX2NsYXNzbGlzdDogbnVtYmVyfHN0cmluZ1tdKSB7XG4gICAgICAgIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaWYoIHR5cGVvZiBpZF9vcl9jbGFzc2xpc3QgPT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICBoaWdoLmNsYXNzTGlzdC5hZGQoJ3JhbmdlX2hpZ2hsaWdodCcsIGBoaWdobGlnaHRfJHtpZF9vcl9jbGFzc2xpc3R9YCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGhpZ2guY2xhc3NMaXN0LmFkZCggLi4uaWRfb3JfY2xhc3NsaXN0ICk7XG5cbiAgICAgICAgY29uc3QgdGJsX29mZnNldCA9IHRoaXMuY29udGVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpIS5vZmZzZXRUb3A7XG5cbiAgICAgICAgaGlnaC5zdHlsZS5zZXRQcm9wZXJ0eSgndG9wJyAgICwgYCR7dGJsX29mZnNldCArIHN0YXJ0Lm9mZnNldFRvcH1weGApO1xuICAgICAgICBoaWdoLnN0eWxlLnNldFByb3BlcnR5KCdoZWlnaHQnLCBgJHtlbmQub2Zmc2V0VG9wICsgZW5kLmNsaWVudEhlaWdodCAtIHN0YXJ0Lm9mZnNldFRvcCArIDF9cHhgKTtcblxuICAgICAgICBoaWdoLnN0eWxlLnNldFByb3BlcnR5KCdsZWZ0JyAgICwgYCR7c3RhcnQub2Zmc2V0TGVmdH1weGApO1xuICAgICAgICBoaWdoLnN0eWxlLnNldFByb3BlcnR5KCd3aWR0aCcsIGAke2VuZC5vZmZzZXRMZWZ0ICsgZW5kLmNsaWVudFdpZHRoIC0gc3RhcnQub2Zmc2V0TGVmdH1weGApO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQoaGlnaCk7XG5cbiAgICAgICAgcmV0dXJuIGhpZ2g7XG4gICAgfVxuXG4gICAgcmVsYXRpdmVUbyhjZWxsOiBDZWxsLCByb3dfZGlmZjogbnVtYmVyLCBjb2xfZGlmZjogbnVtYmVyKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgW3JvdywgY29sXSA9IHRoaXMuY2VsbFBvcyhjZWxsKTtcblxuICAgICAgICByb3cgKz0gcm93X2RpZmY7XG4gICAgICAgIGNvbCArPSBjb2xfZGlmZjtcblxuICAgICAgICAvLyBmb3Igbm9ybWFsIDogZ2V0IHN0dWNrIGluc2lkZSBncmlkLlxuICAgICAgICBpZiggcm93IDwgMSlcbiAgICAgICAgICAgIHJvdyA9IDE7XG4gICAgICAgIGlmKCByb3cgPj0gdGhpcy4jdGJvZHkuY2hpbGRyZW4ubGVuZ3RoIClcbiAgICAgICAgICAgIHJvdyA9IHRoaXMuI3Rib2R5LmNoaWxkcmVuLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgaWYoIGNvbCA8IDEpXG4gICAgICAgICAgICBjb2wgPSAxO1xuICAgICAgICBpZiggY29sID49IHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW4ubGVuZ3RoIClcbiAgICAgICAgICAgIGNvbCA9IHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW4ubGVuZ3RoIC0gMTtcblxuICAgICAgICByZXR1cm4gdGhpcy4jdGJvZHkuY2hpbGRyZW5bcm93XS5jaGlsZHJlbltjb2xdIGFzIENlbGw7XG4gICAgfVxuXG4gICAgLy9UT0RPOiAyRC4uLlxuICAgICNwYXN0ZWJpbjogQ2VsbExpc3QgfCBudWxsID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuI2N1cnNvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXYpID0+IHtcblxuICAgICAgICAgICAgLy9UT0RPOiBjb3VsZCBiZSBiZXR0ZXIuLi5cbiAgICAgICAgICAgIGZvciggbGV0IGNlbGwgb2YgdGhpcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXJzb3InKSApXG4gICAgICAgICAgICAgICAgY2VsbC5yZW1vdmUoKTtcblxuICAgICAgICAgICAgY29uc3QgY2VsbHMgPSB0aGlzLiNjdXJzb3IuY2VsbHM7XG4gICAgICAgICAgICBpZiggY2VsbHMubGVuZ3RoICE9PSAwKVxuICAgICAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0KGNlbGxzWzBdLCBjZWxsc1tjZWxscy5sZW5ndGgtMV0sIFtcImN1cnNvclwiXSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI3NlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXYpID0+IHtcblxuICAgICAgICAgICAgZm9yKCBsZXQgY2VsbCBvZiB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZ2hsaWdodCcpIClcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpO1xuXG4gICAgICAgICAgICBmb3IoIGxldCBjZWxsIG9mIHRoaXMuI3NlbGVjdGlvbi5jZWxscyApIHtcblxuICAgICAgICAgICAgICAgIGlmKCB0aGlzLiNzZWxlY3Rpb24uY2VsbHMubGVuZ3RoICE9PSAxKVxuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSB0aGlzLiNjZWxsUG9zKGNlbGwpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3Rib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuW2NvbF0uY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLiN0Ym9keS5jaGlsZHJlbltyb3ddLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vVE9ETzogbW92ZSBvdXQgP1xuICAgICAgICBjb25zdCBmb3JtdWxhX2JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtdWxhX2Jhci5jbGFzc0xpc3QuYWRkKCd0b29sYmFyJyk7XG5cbiAgICAgICAgKCBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHBsYWdlID0gYXdhaXQgTElTUy5idWlsZChcImNhbGMtcGxhZ2VcIik7XG4gICAgICAgICAgICBwbGFnZS5zeW5jVG8odGhpcyk7XG4gICAgICAgICAgICBmb3JtdWxhX2Jhci5hcHBlbmQoIHBsYWdlLmhvc3QgKTtcblxuICAgICAgICAgICAgY29uc3QgZm9ybXVsYSA9IGF3YWl0IExJU1MuYnVpbGQoXCJjYWxjLWZvcm11bGFcIik7XG4gICAgICAgICAgICBmb3JtdWxhLnN5bmNUbyh0aGlzKTtcbiAgICAgICAgICAgIGZvcm11bGFfYmFyLmFwcGVuZCggZm9ybXVsYS5ob3N0ICk7XG5cbiAgICAgICAgfSkoKTtcbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZChmb3JtdWxhX2Jhcik7XG5cbiAgICAgICAgdGhpcy4jaW5pdEdyaWQoK3RoaXMuYXR0cnMucm93cyEsICt0aGlzLmF0dHJzLmNvbHMhKTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgPT09IFwiVEhcIilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpO1xuXG4gICAgICAgICAgICAvLyB0b2RvOiBzaGlmdCBrZXkgKyBzdXBlciBrZXkgKyA/XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSAhPT0gXCJURFwiIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlSGlnaGxpZ2h0cygpO1xuXG4gICAgICAgICAgICAvLyB0aGUgY2VsbCBpcyBiZWluZyBlZGl0ZWQuLi5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQuaGFzQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKSApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb25zdCBjZWxsID0gdGFyZ2V0IGFzIENlbGw7XG5cbiAgICAgICAgICAgIHRoaXMuI3NlbGVjdGlvbi5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy4jc2VsZWN0aW9uLmFkZChjZWxsKTtcblxuICAgICAgICAgICAgdGhpcy4jY3Vyc29yLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLiNjdXJzb3IuYWRkKGNlbGwpO1xuXG4gICAgICAgICAgICAvLyB0aGlzLiN0Ym9keS5mb2N1cygpOyAvLyA/XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSAhPT0gXCJURFwiKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgaWYoIHRoaXMuYXR0cnMucm8gIT09IFwidHJ1ZVwiICYmICh0YXJnZXQgYXMgQ2VsbCkuaXNfcm8gIT09IHRydWUgKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnRvZ2dsZUF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldjogS2V5Ym9hcmRFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiggdGFyZ2V0ID09PSB0aGlzLiN0Ym9keSApIHtcbiAgICAgICAgICAgICAgICBpZiggZXYuY29kZSA9PT0gXCJLZXlWXCIgJiYgZXYuY3RybEtleSAmJiB0aGlzLiNwYXN0ZWJpbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy4jcGFzdGViaW4uY2VsbHM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3NlbGVjdGlvbi5jb250ZW50ID0gZGF0YTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjb3B5IGZvcm1hdC4uLiBUT0RPIHV0aWxpdHkgdGhpbmd5Li4uXG4gICAgICAgICAgICAgICAgICAgIGlmKCAhIGV2LnNoaWZ0S2V5IHx8ICEgZXYuYWx0S2V5ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3JjID0gdGhpcy4jcGFzdGViaW4uY2VsbHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkc3QgPSB0aGlzLiNzZWxlY3Rpb24uY2VsbHM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyArK2kgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHN0W2ldLmNsYXNzTmFtZSA9IHNyY1tpXS5jbGFzc05hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiBhZGQgZm9ybWF0Li4uXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoICggZXYua2V5ID09PSBcImNcIiB8fCBldi5rZXkgPT09IFwieFwiKSAmJiBldi5jdHJsS2V5ICkge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLiNzZWxlY3Rpb24uY2VsbHM7IC8vVE9ETzogYXMgYXJyYXkuLi5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGggPSB0aGlzLmhpZ2hsaWdodCggc2VsZWN0aW9uWzBdLCBzZWxlY3Rpb25bc2VsZWN0aW9uLmxlbmd0aC0xXSwgWydjb3B5X2hpZ2hsaWdodCddICk7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIFdIWSA/Pz9cbiAgICAgICAgICAgICAgICAgICAgaC5zdHlsZS5zZXRQcm9wZXJ0eSgndG9wJyAgICwgYCR7c2VsZWN0aW9uWzBdLm9mZnNldFRvcH1weGApO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3Bhc3RlYmluID0gdGhpcy4jc2VsZWN0aW9uLmRlZXBDbG9uZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKCBldi5rZXkgPT09IFwieFwiICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4jc2VsZWN0aW9uLmRlbGV0ZUZvcm1hdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4jc2VsZWN0aW9uLmRlbGV0ZUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiggZXYua2V5ID09PSBcIkNvbnRyb2xcIiB8fCBldi5rZXkgPT09IFwiU2hpZnRcIiB8fCBldi5rZXkgPT09IFwiQWx0XCIgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8gaWdub3JlXG4gICAgICAgICAgICAgICAgfSBpZiggZXYuY29kZSA9PT0gXCJEZWxldGVcIiApIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnNvci5kZWxldGVDb250ZW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jY3Vyc29yLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGlmKCBldi5jb2RlID09PSBcIkVudGVyXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZWQgZWxzZXdoZXJlXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKCBldi5jb2RlLnN0YXJ0c1dpdGgoJ0Fycm93JykgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXIgPSB0aGlzLmN1cnNvci5jZWxscztcbiAgICAgICAgICAgICAgICAgICAgaWYoIGN1ci5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGRfcm93ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRfY29sID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBpZiggZXYuY29kZSA9PT0gJ0Fycm93TGVmdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAtLWRfY29sO1xuICAgICAgICAgICAgICAgICAgICBpZiggZXYuY29kZSA9PT0gJ0Fycm93UmlnaHQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgKytkX2NvbDtcbiAgICAgICAgICAgICAgICAgICAgaWYoIGV2LmNvZGUgPT09ICdBcnJvd1VwJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tZF9yb3c7XG4gICAgICAgICAgICAgICAgICAgIGlmKCBldi5jb2RlID09PSAnQXJyb3dEb3duJylcbiAgICAgICAgICAgICAgICAgICAgICAgICsrZF9yb3c7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHQ6IENlbGw7XG4gICAgICAgICAgICAgICAgICAgIGlmKCBldi5jdHJsS2V5ICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJldiAgID0gY3VyWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnNvciA9IHRoaXMucmVsYXRpdmVUbyhwcmV2LCBkX3JvdywgZF9jb2wpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggcHJldi5yYXdDb250ZW50ICE9PSB1bmRlZmluZWQgJiYgY3Vyc29yLnJhd0NvbnRlbnQgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUoIHByZXYgIT09IGN1cnNvciAmJiBjdXJzb3IucmF3Q29udGVudCAhPT0gdW5kZWZpbmVkKSB7IC8vIHdlIHJlYWNoZWQgdGhlIGVuZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldiAgID0gY3Vyc29yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSB0aGlzLnJlbGF0aXZlVG8ocHJldiwgZF9yb3csIGRfY29sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gcHJldjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUoIHByZXYgIT09IGN1cnNvciAmJiBjdXJzb3IucmF3Q29udGVudCA9PT0gdW5kZWZpbmVkKSB7IC8vIHdlIHJlYWNoZWQgdGhlIGVuZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldiAgID0gY3Vyc29yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSB0aGlzLnJlbGF0aXZlVG8ocHJldiwgZF9yb3csIGRfY29sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCA9IHRoaXMucmVsYXRpdmVUbyggY3VyWzBdLCBkX3JvdywgZF9jb2wpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3Rib2R5LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIG5leHQuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KCdjbGljaycsIHtidWJibGVzOiB0cnVlfSkgKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIHdlIHN0YXJ0IGVkaXRpbmcuLi5cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXIgPSB0aGlzLmN1cnNvci5jZWxscztcblxuICAgICAgICAgICAgICAgICAgICBpZiggY3VyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1clswXS5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJkYmxjbGlja1wiLCB7YnViYmxlczogdHJ1ZX0pICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJbMF0udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIHRhcmdldCAhPT0gdGhpcy4jdGJvZHkgJiYgZXYuY29kZSA9PT0gJ0VudGVyJyAmJiBldi5zaGlmdEtleSApXG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3IuXG5cbiAgICAgICAgICAgIGlmKGV2LmNvZGUgPT09IFwiRW50ZXJcIikgeyAvL1RPRE86IEVudGVyIGlzIGZvciBjdXJyZW50IHBsYWdlLi4uXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSGlnaGxpZ2h0cygpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY3VyID0gdGhpcy5jdXJzb3IuY2VsbHM7XG4gICAgICAgICAgICAgICAgaWYoIGN1ci5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGxldCBbcm93LGNvbF0gPSB0aGlzLmNlbGxQb3MoIGN1clswXSApO1xuXG4gICAgICAgICAgICAgICAgKytyb3c7XG4gICAgICAgICAgICAgICAgaWYoIHJvdyA+PSB0aGlzLiN0Ym9keS5jaGlsZHJlbi5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICsrY29sO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiggY29sID49IHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW4ubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICBjb2wgPSAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gKHRoaXMuI3Rib2R5LmNoaWxkcmVuW3Jvd10uY2hpbGRyZW5bY29sXSBhcyBIVE1MRWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiN0Ym9keS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIG5leHQuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KCdjbGljaycsIHtidWJibGVzOiB0cnVlfSkgKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL3RhcmdldC5ibHVyKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBvbklucHV0MiA9IChldjogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlSGlnaGxpZ2h0cygpO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgaWYoZXYuZGV0YWlsICE9PSB0cnVlKVxuICAgICAgICAgICAgICAgIG9uSW5wdXQoZXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9UT0RPOiBoZXJlLi4uXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgKGV2KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICAgICAgdGhpcy5yZW1vdmVDb3B5SGlnaGxpZ2h0KCk7IC8vIFRPRE86IG1vdmUgdG8gY2VsbF9lZGl0X2VuZCA/XG5cbiAgICAgICAgICAgIGlmKCB0YXJnZXQudGFnTmFtZSAhPT0gXCJURFwiKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5zdGF0ZXMuY2VsbF9lZGl0LnN0YXRlID0gdGFyZ2V0IGFzIENlbGw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNlbGxfZWRpdF9zdGFydFwiLCAoZXY6IEN1c3RvbUV2ZW50PENlbGw+KSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QudG9nZ2xlKFwiY2VsbF9lZGl0XCIsIHRydWUpO1xuXG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZXYuZGV0YWlsO1xuXG4gICAgICAgICAgICBpZihjZWxsLnJhd0NvbnRlbnQgaW5zdGFuY2VvZiBGb3JtdWxhKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzdHIgPSBjZWxsLnJhd0NvbnRlbnQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBjb25zdCByYW5nZXMgPSBjZWxsLnJhd0NvbnRlbnQucmFuZ2VzVG9rZW47XG5cbiAgICAgICAgICAgICAgICBsZXQgY2hpbGRyZW46IChzdHJpbmd8SFRNTEVsZW1lbnQpW10gPSBbc3RyXTtcblxuICAgICAgICAgICAgICAgIGxldCByYW5nZXNfY29sb3JzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge307XG4gICAgICAgICAgICAgICAgbGV0IGN1cl9vZmZzZXQgPSAwO1xuXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHJhbmdlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3RyID0gY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoLTFdIGFzIHN0cmluZztcblxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGgtMV0gPSBzdHIuc2xpY2UoMCwgcmFuZ2VzW2ldLmJlZyAtIGN1cl9vZmZzZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlX25hbWUgPSByYW5nZXNbaV0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmKCAhIChyYW5nZV9uYW1lIGluIHJhbmdlc19jb2xvcnMpIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlc19jb2xvcnNbcmFuZ2VfbmFtZV0gPSBpJTg7XG5cbiAgICAgICAgICAgICAgICAgICAgcy5jbGFzc0xpc3QuYWRkKCdmb3JtdWxhX2hpZ2hsaWdodCcsIGBoaWdobGlnaHRfJHtyYW5nZXNfY29sb3JzW3JhbmdlX25hbWVdfWApOyAvL1RPRE8uLi5cbiAgICAgICAgICAgICAgICAgICAgcy50ZXh0Q29udGVudCA9IHJhbmdlc1tpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW4ucHVzaCggcyApOyAvLyByYW5nZS4uLlxuXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goIHN0ci5zbGljZShyYW5nZXNbaV0uZW5kIC0gY3VyX29mZnNldCkgKTtcbiAgICAgICAgICAgICAgICAgICAgY3VyX29mZnNldCA9IHJhbmdlc1tpXS5lbmQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2VsbC5yZXBsYWNlQ2hpbGRyZW4oIC4uLmNoaWxkcmVuICk7XG5cbiAgICAgICAgICAgICAgICBmb3IobGV0IHJhbmdlIGluIHJhbmdlc19jb2xvcnMgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2V0Q2VsbHMocmFuZ2UpLmNlbGxzO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBiZWcgPSBjZWxsWzBdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZW5kID0gY2VsbFtjZWxsLmxlbmd0aC0xXTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZ2hsaWdodChiZWcsIGVuZCwgcmFuZ2VzX2NvbG9yc1tyYW5nZV0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBvbklucHV0MiApOyAvLyByZW1vdmUgY29sb3JzLi4uXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBkZWZhdWx0Rm9ybWF0KGNlbGwucmF3Q29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKFwiY2VsbF9lZGl0X2VuZFwiLCAoZXY6IEN1c3RvbUV2ZW50PENlbGw+KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcImVkaXRfZW5kXCIpO1xuXG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LnRvZ2dsZShcImNlbGxfZWRpdFwiLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBldi5kZXRhaWw7XG5cbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIG9uSW5wdXQyKTsgLy8gdG8gYmUgc2FmZVxuICAgICAgICAgICAgY2VsbC50b2dnbGVBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgZmFsc2UpO1xuXG4gICAgICAgICAgICBuZXcgQ2VsbExpc3QodGhpcywgW2NlbGxdKS5jb250ZW50ID0gY2VsbC50ZXh0Q29udGVudCE7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICAgICAgICAvLyBsZWF2ZVxuICAgICAgICAgICAgdGhpcy4jc2VsZWN0aW9uLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLiNjdXJzb3IuY2xlYXIoKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGV2ID0+IHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmLW91dFwiLCBldik7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlSGlnaGxpZ2h0cygpOyAvLyBUT0RPOiBvbmx5IGNlbGxfZWRpdCA/P1xuXG4gICAgICAgICAgICBpZiggdGFyZ2V0LnRhZ05hbWUgIT09IFwiVERcIilcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGVzLmNlbGxfZWRpdC5zdGF0ZSA9IG51bGw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB0ID0gdGhpcy4jdGJvZHkucXVlcnlTZWxlY3RvckFsbCgndGQnKTtcbiAgICB9XG5cbiAgICBjZWxsUG9zKGNlbGw6IEhUTUxUYWJsZUNlbGxFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjZWxsUG9zKGNlbGwpO1xuICAgIH1cblxuICAgICNjZWxsUG9zKGNlbGw6IEhUTUxUYWJsZUNlbGxFbGVtZW50KSB7XG5cbiAgICAgICAgaWYoIFwicG9zXCIgaW4gY2VsbClcbiAgICAgICAgICAgIHJldHVybiBjZWxsLnBvcyBhcyBbbnVtYmVyLCBudW1iZXJdO1xuXG4gICAgICAgIGNvbnN0IGNvbCA9IFsuLi5jZWxsLnBhcmVudEVsZW1lbnQhLmNoaWxkcmVuXS5maW5kSW5kZXgoIGMgPT4gYyA9PT0gY2VsbCk7XG4gICAgICAgIGNvbnN0IHJvdyA9IFsuLi5jZWxsLnBhcmVudEVsZW1lbnQhLnBhcmVudEVsZW1lbnQhLmNoaWxkcmVuXS5maW5kSW5kZXgoIHIgPT4gciA9PT0gY2VsbC5wYXJlbnRFbGVtZW50ISk7XG5cbiAgICAgICAgcmV0dXJuIFtyb3csIGNvbF0gYXMgY29uc3Q7XG4gICAgfVxuXG4gICAgI3Rib2R5ITogSFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQ7XG5cbiAgICAjaW5pdEdyaWQobmJyb3dzOiBudW1iZXIsIG5iY29sczogbnVtYmVyKSB7XG5cbiAgICAgICAgY29uc3QgaXNfcm8gPSB0aGlzLmF0dHJzLnJvID09PSBcInRydWVcIjtcblxuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgICAgIGNvbnN0IHRib2R5ICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XG4gICAgICAgIHRoaXMuI3Rib2R5ID0gdGJvZHk7XG5cbiAgICAgICAgdGhpcy4jdGJvZHkuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG5cbiAgICAgICAgY29uc3QgY29sX2h0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBjb2xfaHRtbC5hcHBlbmQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJykgKTtcblxuICAgICAgICBmb3IobGV0IGNvbCA9IDA7IGNvbCA8ICBuYmNvbHMgOyArK2NvbCkge1xuICAgICAgICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgICAgICAgdGgudGV4dENvbnRlbnQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgY29sKTtcbiAgICAgICAgICAgIGNvbF9odG1sLmFwcGVuZCh0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdGJvZHkuYXBwZW5kKGNvbF9odG1sKTtcblxuICAgICAgICBmb3IobGV0IHJvdyA9IDA7IHJvdyA8IG5icm93czsgKytyb3cpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd19odG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICAgICAgICAgIHRoLnRleHRDb250ZW50ID0gYCR7cm93KzF9YDtcbiAgICAgICAgICAgIHJvd19odG1sLmFwcGVuZCh0aCk7XG5cbiAgICAgICAgICAgIGZvcihsZXQgY29sID0gMDsgY29sIDwgIG5iY29scyA7ICsrY29sKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJykgYXMgQ2VsbDtcbiAgICAgICAgICAgICAgICAvL2NlbGwudG9nZ2xlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcbiAgICAgICAgICAgICAgICBjZWxsLmZvcm1hdCA9IGRlZmF1bHRGb3JtYXQ7XG4gICAgICAgICAgICAgICAgcm93X2h0bWwuYXBwZW5kKCBjZWxsICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ym9keS5hcHBlbmQocm93X2h0bWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFibGUuYXBwZW5kKHRib2R5KTtcbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCh0YWJsZSk7XG4gICAgfVxuXG4gICAgZ2V0Q2VsbHMoY2VsbDogc3RyaW5nKTogQ2VsbExpc3Q7XG4gICAgZ2V0Q2VsbHMocm93X2lkOiBudW1iZXIsIGNvbF9pZDogbnVtYmVyKTogQ2VsbExpc3Q7XG4gICAgZ2V0Q2VsbHMoY2VsbF9vcl9yb3dpZDogbnVtYmVyfHN0cmluZywgY29sX2lkPzogbnVtYmVyKSB7XG5cbiAgICAgICAgbGV0IHJvd19pZCA9IGNlbGxfb3Jfcm93aWQ7XG4gICAgICAgIGlmKCB0eXBlb2YgY2VsbF9vcl9yb3dpZCA9PT0gXCJzdHJpbmdcIikge1xuXG4gICAgICAgICAgICBjZWxsX29yX3Jvd2lkID0gY2VsbF9vcl9yb3dpZC5yZXBsYWNlQWxsKCckJywgJycpO1xuXG4gICAgICAgICAgICBpZiggY2VsbF9vcl9yb3dpZC5pbmNsdWRlcygnOicpICkgey8vIHJhbmdlXG5cbiAgICAgICAgICAgICAgICBsZXQgW2JlZywgZW5kXSA9IGNlbGxfb3Jfcm93aWQuc3BsaXQoJzonKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGJfcm93X2lkID0gK2JlZ1sxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBiX2NvbF9pZCA9IGJlZy5jaGFyQ29kZUF0KDApICsgMSAtIDY1O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZV9yb3dfaWQgPSArZW5kWzFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVfY29sX2lkID0gZW5kLmNoYXJDb2RlQXQoMCkgKyAxIC0gNjU7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjZWxscyA9IG5ldyBBcnJheSggKGVfY29sX2lkLWJfY29sX2lkKSAqIChlX3Jvd19pZCAtIGJfcm93X2lkKSApO1xuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgciA9IGJfcm93X2lkOyByIDw9ICBlX3Jvd19pZDsgKytyKVxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGMgPSBiX2NvbF9pZDsgYyA8PSAgZV9jb2xfaWQ7ICsrYylcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzW29mZnNldCsrXSA9IHRoaXMuI3Rib2R5LmNoaWxkcmVuW3JdLmNoaWxkcmVuW2NdIGFzIENlbGw7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENlbGxMaXN0KHRoaXMsIGNlbGxzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcm93X2lkID0gK2NlbGxfb3Jfcm93aWRbMV07XG4gICAgICAgICAgICBjb2xfaWQgPSBjZWxsX29yX3Jvd2lkLmNoYXJDb2RlQXQoMCkgKyAxIC0gNjU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjZWxsID0gdGhpcy4jdGJvZHkuY2hpbGRyZW5bK3Jvd19pZF0uY2hpbGRyZW5bY29sX2lkIV0gYXMgQ2VsbDtcbiAgICAgICAgcmV0dXJuIG5ldyBDZWxsTGlzdCh0aGlzLCBbY2VsbF0pO1xuICAgIH1cblxuICAgICNpc1VwZGF0aW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiggdGhpcy4jaXNVcGRhdGluZyA9PT0gdHJ1ZSApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuI2lzVXBkYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgY2VsbHMgPSB0aGlzLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbDxDZWxsPigndGQnKTtcbiAgICAgICAgICAgIGZvcihsZXQgY2VsbCBvZiBjZWxscykge1xuXG4gICAgICAgICAgICAgICAgaWYoIGNlbGwucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEgKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGNlbGwucmF3Q29udGVudC5leGVjKHRoaXMpOyAvL1RPRE8uLi5cblxuICAgICAgICAgICAgICAgICAgICAvL1RPRE86IGZhY3Rvcml6ZS4uLlxuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZTogc3RyaW5nID0gdHlwZW9mIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiggdHlwZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIjtcblxuICAgICAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gKGNlbGwgYXMgYW55KS5mb3JtYXQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiNpc1VwZGF0aW5nID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2VsbExpc3QgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG5cbiAgICAjc2hlZXQ6IENhbGNTaGVldDtcbiAgICAjY2VsbHM6IENlbGxbXTtcbiAgICBjb25zdHJ1Y3RvcihzaGVldDogQ2FsY1NoZWV0LCBjZWxsczogQ2VsbFtdKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuI2NlbGxzID0gY2VsbHM7XG4gICAgICAgIHRoaXMuI3NoZWV0ID0gc2hlZXQ7XG4gICAgfVxuXG4gICAgZ2V0IGNlbGxzKCk6IENlbGxbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjZWxscztcbiAgICB9XG4gICAgZ2V0IHNoZWV0KCk6IENhbGNTaGVldCB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzaGVldDtcbiAgICB9XG5cbiAgICB0b2dnbGVDbGFzcyhjc3NfY2xhc3M6IHN0cmluZywgZW5mb3JjZT86Ym9vbGVhbikge1xuICAgICAgICBmb3IobGV0IGNlbGwgb2YgdGhpcy4jY2VsbHMpXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUoY3NzX2NsYXNzLCBlbmZvcmNlKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRGb3JtYXQoZm9ybWF0OiAocmF3OiBWYWx1ZVR5cGUpID0+IHN0cmluZykge1xuXG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiB0aGlzLiNjZWxscykge1xuICAgICAgICAgICAgY2VsbC5mb3JtYXQgPSBmb3JtYXQ7XG4gICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gZm9ybWF0KCBjZWxsLnJhd0NvbnRlbnQpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldCBjb250ZW50KCk6IChSYXdDb250ZW50VHlwZSlbXSB7XG4gICAgICAgIGxldCBjb250ZW50ID0gbmV3IEFycmF5KHRoaXMuI2NlbGxzLmxlbmd0aCk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLiNjZWxscy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgIGNvbnRlbnRbaV0gPSB0aGlzLiNjZWxsc1tpXS5yYXdDb250ZW50ITtcblxuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICB9XG5cbiAgICBkZWxldGVGb3JtYXQoKSB7XG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiB0aGlzLiNjZWxscykgLy9UT0RPIGFkZCBob2MgZm9ybWF0Li4uXG4gICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9ICcnO1xuICAgIH1cblxuICAgIGRlbGV0ZUNvbnRlbnQoKSB7XG5cbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIHRoaXMuI2NlbGxzKSB7XG4gICAgICAgICAgICBjZWxsLnJhd0NvbnRlbnQgPSB1bmRlZmluZWQgYXMgYW55O1xuICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10eXBlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzaGVldC51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBzZXQgY29udGVudChjb250ZW50OiBDZWxsfFJhd0NvbnRlbnRUeXBlfChSYXdDb250ZW50VHlwZXxDZWxsKVtdKSB7XG5cbiAgICAgICAgaWYoIEFycmF5LmlzQXJyYXkoY29udGVudCkgKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICBuZXcgQ2VsbExpc3QodGhpcy4jc2hlZXQsIFt0aGlzLiNjZWxsc1tpXV0gKS5jb250ZW50ID0gY29udGVudFtpXTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIGNvbnRlbnQgPSBwYXJzZUlucHV0KGNvbnRlbnQpO1xuXG4gICAgICAgIGxldCByYXdfdmFsID0gY29udGVudCBpbnN0YW5jZW9mIEhUTUxUYWJsZUNlbGxFbGVtZW50ID8gY29udGVudC5yYXdDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY29udGVudDtcblxuICAgICAgICBmb3IobGV0IGNlbGwgb2YgdGhpcy4jY2VsbHMpIHtcblxuICAgICAgICAgICAgaWYoY29udGVudCBpbnN0YW5jZW9mIEhUTUxUYWJsZUNlbGxFbGVtZW50ICYmIGNvbnRlbnQucmF3Q29udGVudCBpbnN0YW5jZW9mIEZvcm11bGEgKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgdiA9IGNvbnRlbnQucmF3Q29udGVudDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRzdCA9IHRoaXMuI3NoZWV0LmNlbGxQb3MoIGNlbGwgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzcmMgPSB0aGlzLiNzaGVldC5jZWxsUG9zKGNvbnRlbnQpXG5cbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmID0gWyBkc3RbMF0gLSBzcmNbMF0sIGRzdFsxXSAtIHNyY1sxXV0gYXMgY29uc3Q7XG5cbiAgICAgICAgICAgICAgICByYXdfdmFsID0gdi5yZWxhdGl2ZVRvKCB0aGlzLiNzaGVldCwgLi4uZGlmZiApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjZWxsLnJhd0NvbnRlbnQgPSByYXdfdmFsO1xuXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSByYXdfdmFsO1xuICAgICAgICAgICAgaWYoIHJhd192YWwgaW5zdGFuY2VvZiBGb3JtdWxhKVxuICAgICAgICAgICAgICAgIHZhbHVlID0gcmF3X3ZhbC5leGVjKHRoaXMuI3NoZWV0KTsgLy9UT0RPLi4uXG5cbiAgICAgICAgICAgIGxldCB0eXBlOiBzdHJpbmcgPSB0eXBlb2YgdmFsdWU7XG4gICAgICAgICAgICBpZiggdHlwZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgKVxuICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCI7XG5cbiAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSAoY2VsbCBhcyBhbnkpLmZvcm1hdCh2YWx1ZSk7XG4gICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdHlwZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzaGVldC51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBzZXRSTyhpc19ybzogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIHRoaXMuI2NlbGxzKVxuICAgICAgICAgICAgY2VsbC5pc19ybyA9IGlzX3JvO1xuICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhZGQoLi4uY2VsbHM6IENlbGxbXSkge1xuXG4gICAgICAgIHRoaXMuI2NlbGxzLnB1c2goLi4uY2VsbHMpXG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikgKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy4jY2VsbHMubGVuZ3RoID0gMDtcblxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSApO1xuICAgIH1cblxuXG4gICAgZGVlcENsb25lKCkge1xuXG4gICAgICAgIGxldCBjZWxscyA9IHRoaXMuI2NlbGxzLm1hcCggYyA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbG9uZSA9IGMuY2xvbmVOb2RlKHRydWUpIGFzIENlbGw7XG5cbiAgICAgICAgICAgIGNsb25lLnJhd0NvbnRlbnQgPSBjLnJhd0NvbnRlbnQ7XG4gICAgICAgICAgICBjbG9uZS5mb3JtYXQgICAgID0gYy5mb3JtYXQ7XG4gICAgICAgICAgICAoY2xvbmUgYXMgYW55KS5wb3MgICAgICAgID0gdGhpcy4jc2hlZXQuY2VsbFBvcyhjKTtcblxuICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBuZXcgQ2VsbExpc3QodGhpcy4jc2hlZXQsIGNlbGxzKTtcbiAgICB9XG59XG5cbi8vVE9ETy4uLlxuaW1wb3J0IFwiLi9mb3JtdWxhX2VkaXRvclwiO1xuaW1wb3J0IFwiLi9wbGFnZV9lZGl0b3JcIjtcbmltcG9ydCB7IEZvcm11bGEsIHBhcnNlX2Zvcm11bGEgfSBmcm9tIFwiLi9mb3JtdWxhX3BhcnNlclwiO1xuXG5MSVNTLmRlZmluZSgnY2FsYy1zaGVldCcsIENhbGNTaGVldCk7IiwiZXhwb3J0IGRlZmF1bHQgW1xuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiUiAxLTAxIFRhYmxldXIgZXQgUmVwb3J0aW5nXCIsXG4gICAgICAgIHNuYW1lOiBcIlIxLTAxIFRhYmxldXJcIixcbiAgICAgICAgcGF0aCA6IFwiUjEtMDFcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNNXCIsXG4gICAgICAgICAgICAgICAgcGF0aDogXCJDTVwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiQ00xXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQ00yXCJcbiAgICAgICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJUUFwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiVFBcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBcIlRQMVwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIlIgMS0wMiBCYXNlcyBkZSBEb25uw6llcyBSZWxhdGlvbm5lbGxlcyAxXCIsXG4gICAgICAgIHNuYW1lOiBcIlIxLTAyIEJEUjFcIixcbiAgICAgICAgcGF0aCA6IFwiUjEtMDJcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIFwiQ01cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlRQXCIgLFxuICAgICAgICAgICAgICAgIHBhdGggOiBcIlRQXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgXCJUUDFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJUUDJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJUUDNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJUUDRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJUUDVcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cbl07XG5cbmV4cG9ydCBjb25zdCByb290X3BhdGggPSBbXCJsb2NhbGhvc3RcIiwgXCIxMjcuMC4wLjFcIl0uaW5jbHVkZXMobG9jYXRpb24uaG9zdG5hbWUpID8gXCIvZGlzdC9kZXYvcGFnZXMvXCIgOiBcIi9Db3Vycy9kaXN0L2Rldi9wYWdlcy9cIjsiLCJcbmltcG9ydCBwYWdlcywge3Jvb3RfcGF0aH0gZnJvbSBcIi4vY29udGVudFwiO1xuXG4vKlxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXByaW50JywgKCkgPT4ge1xuICAvLy4uLlxufSk7XG4qL1xuXG4vL1RPRE86IGxpbmtzLi4uXG5jb25zdCBtYWluICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKSE7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpITtcblxuY29uc3QgdGl0bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCJoMSwgaDIsIGgzLCBoNFwiKTtcblxudHlwZSBOb2RlID0ge1xuICAgIGh0bWwgICAgOiBIVE1MRWxlbWVudCxcbiAgICBsZXZlbCAgIDogbnVtYmVyLFxuICAgIHBhcmVudCAgOiBudWxsfE5vZGUsXG4gICAgY2hpbGRyZW46IE5vZGVbXVxufTtcblxuY29uc3QgaHRyZWU6IE5vZGUgPSB7XG4gICAgaHRtbCAgICA6IG1haW4sXG4gICAgbGV2ZWwgICA6IDAsXG4gICAgcGFyZW50ICA6IG51bGwsXG4gICAgY2hpbGRyZW46IFtdLFxufTtcbmxldCBodHJlZV9jdXJzb3IgPSBodHJlZTtcbmZvcihsZXQgdGl0bGUgb2YgdGl0bGVzKSB7XG4gICAgY29uc3QgbGV2ZWwgPSArdGl0bGUudGFnTmFtZS5zbGljZSgxKTtcbiAgICBcbiAgICB3aGlsZSggbGV2ZWwgPD0gaHRyZWVfY3Vyc29yLmxldmVsIClcbiAgICAgICAgaHRyZWVfY3Vyc29yID0gaHRyZWVfY3Vyc29yLnBhcmVudCE7XG5cbiAgICBjb25zdCBlbGVtOiBOb2RlID0ge1xuICAgICAgICBodG1sOiB0aXRsZSxcbiAgICAgICAgbGV2ZWwsXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgcGFyZW50OiBodHJlZV9jdXJzb3JcbiAgICB9O1xuXG5cbiAgICBodHJlZV9jdXJzb3IuY2hpbGRyZW4ucHVzaChlbGVtKTtcblxuICAgIGh0cmVlX2N1cnNvciA9IGVsZW07XG59XG5cbmZ1bmN0aW9uIHNlYXJjaEN1ckhlYWRlcihodHJlZTogTm9kZSwgcG9zaXRpb246IG51bWJlcik6IG51bGwgfCBOb2RlIHtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBodHJlZS5jaGlsZHJlbjtcblxuICAgIGZvcihsZXQgaSA9IGhlYWRlcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpXG4gICAgICAgIGlmKCBoZWFkZXJzW2ldLmh0bWwub2Zmc2V0VG9wIDw9IHBvc2l0aW9uICsgMzIgKVxuICAgICAgICAgICAgcmV0dXJuIHNlYXJjaEN1ckhlYWRlcihoZWFkZXJzW2ldLCBwb3NpdGlvbikgPz8gaGVhZGVyc1tpXTtcblxuICAgIHJldHVybiBudWxsO1xufVxuXG5jb25zdCBoaWQgPSBbXG4gICAgW10sXG4gICAgW1wiSVwiLCBcIklJXCIsIFwiSUlJXCIsIFwiSVZcIl0sXG4gICAgW1wiMVwiLCBcIjJcIixcIjNcIixcIjVcIixcIjZcIixcIjdcIixcIjhcIixcIjlcIl0sXG4gICAgW1wiYVwiLCBcImJcIixcImNcIixcImRcIixcImVcIixcImZcIixcImdcIixcImhcIl0sXG5dXG5cbmZ1bmN0aW9uIGdldFRpdGxlUHJlZml4KHM6IE5vZGUpIHtcblxuICAgIGlmKCBzLmxldmVsID49IGhpZC5sZW5ndGggKVxuICAgICAgICByZXR1cm4gXCJcIjtcblxuICAgIGNvbnN0IGlkeCA9IHMucGFyZW50IS5jaGlsZHJlbi5pbmRleE9mKHMpO1xuXG4gICAgY29uc3QgbnVtID0gaGlkW3MubGV2ZWxdW2lkeF07XG5cbiAgICByZXR1cm4gYCR7bnVtfS4gYDtcbn1cblxuZnVuY3Rpb24gYnVpbGRNZW51KG5vZGVzOiBOb2RlW10pIHtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG5cbiAgICBtZW51LmFwcGVuZCggLi4uIG5vZGVzLm1hcCggKHMsaWR4KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgaXRlbS50ZXh0Q29udGVudD0gYCR7Z2V0VGl0bGVQcmVmaXgocyl9JHtzLmh0bWwudGV4dENvbnRlbnR9YDtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGAjJHtzLmh0bWwuaWR9YCk7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pICk7XG5cbiAgICByZXR1cm4gbWVudTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlSGVhZGVyKCkge1xuXG4gICAgY29uc3QgbGFzdCA9IHNlYXJjaEN1ckhlYWRlciggaHRyZWUsIG1haW4uc2Nyb2xsVG9wKSE7XG5cbiAgICBsZXQgaGVhZGVycyA9IFtdO1xuICAgIGxldCBjdXJzb3IgID0gbGFzdDtcblxuICAgIHdoaWxlKGN1cnNvci5odG1sICE9PSBtYWluKSB7XG4gICAgICAgIGhlYWRlcnMucHVzaChjdXJzb3IpO1xuICAgICAgICBjdXJzb3IgPSBjdXJzb3IucGFyZW50ITtcbiAgICB9XG5cbiAgICBjb25zdCBodG1sID0gaGVhZGVycy5yZXZlcnNlKCkubWFwKCAoaG5vZGUsaSkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGggPSBobm9kZS5odG1sO1xuICAgICAgICBjb25zdCBoX2h0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSBgJHtnZXRUaXRsZVByZWZpeChobm9kZSl9JHtoLnRleHRDb250ZW50fWA7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgYCMke2guaWR9YCk7XG5cbiAgICAgICAgY29uc3QgbWVudSA9IGJ1aWxkTWVudShobm9kZS5wYXJlbnQhLmNoaWxkcmVuKTtcbiAgICAgICAgaF9odG1sLmFwcGVuZChsaW5rLCBtZW51KTtcblxuICAgICAgICByZXR1cm4gaF9odG1sO1xuICAgIH0pO1xuXG4gICAgaWYoIGxhc3QuY2hpbGRyZW4ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IGVtcHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgICAgICAgZW1wdHkuYXBwZW5kKCBidWlsZE1lbnUobGFzdC5jaGlsZHJlbikgKTtcblxuICAgICAgICBodG1sLnB1c2goZW1wdHkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZV9wYWdlX2hyZWYocGF0aHByZWZpeDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIGRlc2M6IGFueSkge1xuXG4gICAgICAgIGxldCBocmVmID0gYCR7cGF0aHByZWZpeH0ke3BhdGh9L2A7XG5cbiAgICAgICAgd2hpbGUoZGVzYy5jaGlsZHJlbj8ubGVuZ3RoKSB7XG4gICAgICAgICAgICBkZXNjID0gZGVzYy5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIGhyZWYgKz0gYCR7ZGVzYy5wYXRoID8/IGRlc2N9L2A7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaHJlZjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlX3BhZ2VfbWVudShwYXRocHJlZml4OiBzdHJpbmcsIHBhdGg6IHN0cmluZywgcGFnZXM6IGFueSkge1xuICAgICAgICBjb25zdCBkZXNjID0gcGFnZXMuZmluZCggKHBhZ2U6IGFueSkgPT4gcGFnZSA9PT0gcGF0aCB8fCBwYWdlLnBhdGggPT09IHBhdGggKSE7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSBkZXNjLnNuYW1lID8/IGRlc2MubmFtZSA/PyBkZXNjO1xuICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBtYWtlX3BhZ2VfaHJlZihwYXRocHJlZml4LCBwYXRoLCBkZXNjKSApO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuICAgIFxuICAgICAgICAgICAgbWVudS5hcHBlbmQoIC4uLiBwYWdlcy5tYXAoIChwYWdlOmFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50PSBwYWdlLm5hbWUgPz8gcGFnZTtcbiAgICAgICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgbWFrZV9wYWdlX2hyZWYocGF0aHByZWZpeCwgcGFnZS5wYXRoPz9wYWdlLCBwYWdlKSApO1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfSkgKTtcbiAgICBcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kKGxpbmssIG1lbnUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICAgIFxuICAgIGxldCBjdXJwYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKHJvb3RfcGF0aC5sZW5ndGgpLnNwbGl0KCcvJyk7XG5cbiAgICBjb25zdCBtb2R1bGVfaHRtbCA9IG1ha2VfcGFnZV9tZW51KHJvb3RfcGF0aCwgY3VycGFnZVswXSwgcGFnZXMpO1xuXG4gICAgY29uc3QgZGVzYyA9IHBhZ2VzLmZpbmQoIChwYWdlOiBhbnkpID0+IHBhZ2UucGF0aCA9PT0gY3VycGFnZVswXSApITtcbiAgICBjb25zdCB0eXBlX2h0bWwgICA9IG1ha2VfcGFnZV9tZW51KHJvb3RfcGF0aCArIGN1cnBhZ2VbMF0gKyBcIi9cIiwgY3VycGFnZVsxXSwgZGVzYy5jaGlsZHJlbik7XG5cbiAgICBjb25zdCBkZXNjX3R5cGUgPSBkZXNjLmNoaWxkcmVuLmZpbmQoIChwYWdlOiBhbnkpID0+IChwYWdlPy5wYXRoID8/IHBhZ2UpID09PSBjdXJwYWdlWzFdICkhO1xuICAgIGlmKCB0eXBlb2YgZGVzY190eXBlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIC8vIHRpdGxlIG51bVxuICAgICAgICBjb25zdCBkZXNjMl9pZHggPSBkZXNjX3R5cGUuY2hpbGRyZW4uZmluZEluZGV4KCAocGFnZTogYW55KSA9PiBwYWdlPy5wYXRoID8/IHBhZ2UgPT09IGN1cnBhZ2VbMl0gKSE7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoXCItLWhlYWRlcl9zdGFydF9pZFwiLCBgJHtkZXNjMl9pZHh9YCk7XG4gICAgICAgIC8vIG1lbnVcbiAgICAgICAgY29uc3Qgc2Vzc2lvbl9odG1sICAgPSBtYWtlX3BhZ2VfbWVudShyb290X3BhdGggKyBjdXJwYWdlWzBdICsgXCIvXCIrIGN1cnBhZ2VbMV0gKyBcIi9cIiwgY3VycGFnZVsyXSwgZGVzY190eXBlLmNoaWxkcmVuKTtcbiAgICAgICAgaHRtbFswXSA9IHNlc3Npb25faHRtbDtcbiAgICB9XG5cbiAgICBoZWFkZXIucmVwbGFjZUNoaWxkcmVuKG1vZHVsZV9odG1sLCB0eXBlX2h0bWwsIC4uLmh0bWwpO1xufVxuXG5tYWluLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZUhlYWRlcik7XG51cGRhdGVIZWFkZXIoKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwidmFyIHdlYnBhY2tRdWV1ZXMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIHF1ZXVlc1wiKSA6IFwiX193ZWJwYWNrX3F1ZXVlc19fXCI7XG52YXIgd2VicGFja0V4cG9ydHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGV4cG9ydHNcIikgOiBcIl9fd2VicGFja19leHBvcnRzX19cIjtcbnZhciB3ZWJwYWNrRXJyb3IgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGVycm9yXCIpIDogXCJfX3dlYnBhY2tfZXJyb3JfX1wiO1xudmFyIHJlc29sdmVRdWV1ZSA9IChxdWV1ZSkgPT4ge1xuXHRpZihxdWV1ZSAmJiBxdWV1ZS5kIDwgMSkge1xuXHRcdHF1ZXVlLmQgPSAxO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tKSk7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0gPyBmbi5yKysgOiBmbigpKSk7XG5cdH1cbn1cbnZhciB3cmFwRGVwcyA9IChkZXBzKSA9PiAoZGVwcy5tYXAoKGRlcCkgPT4ge1xuXHRpZihkZXAgIT09IG51bGwgJiYgdHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIikge1xuXHRcdGlmKGRlcFt3ZWJwYWNrUXVldWVzXSkgcmV0dXJuIGRlcDtcblx0XHRpZihkZXAudGhlbikge1xuXHRcdFx0dmFyIHF1ZXVlID0gW107XG5cdFx0XHRxdWV1ZS5kID0gMDtcblx0XHRcdGRlcC50aGVuKChyKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXhwb3J0c10gPSByO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSwgKGUpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFcnJvcl0gPSBlO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgb2JqID0ge307XG5cdFx0XHRvYmpbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChmbihxdWV1ZSkpO1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdH1cblx0dmFyIHJldCA9IHt9O1xuXHRyZXRbd2VicGFja1F1ZXVlc10gPSB4ID0+IHt9O1xuXHRyZXRbd2VicGFja0V4cG9ydHNdID0gZGVwO1xuXHRyZXR1cm4gcmV0O1xufSkpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5hID0gKG1vZHVsZSwgYm9keSwgaGFzQXdhaXQpID0+IHtcblx0dmFyIHF1ZXVlO1xuXHRoYXNBd2FpdCAmJiAoKHF1ZXVlID0gW10pLmQgPSAtMSk7XG5cdHZhciBkZXBRdWV1ZXMgPSBuZXcgU2V0KCk7XG5cdHZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cdHZhciBjdXJyZW50RGVwcztcblx0dmFyIG91dGVyUmVzb2x2ZTtcblx0dmFyIHJlamVjdDtcblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqKSA9PiB7XG5cdFx0cmVqZWN0ID0gcmVqO1xuXHRcdG91dGVyUmVzb2x2ZSA9IHJlc29sdmU7XG5cdH0pO1xuXHRwcm9taXNlW3dlYnBhY2tFeHBvcnRzXSA9IGV4cG9ydHM7XG5cdHByb21pc2Vbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChxdWV1ZSAmJiBmbihxdWV1ZSksIGRlcFF1ZXVlcy5mb3JFYWNoKGZuKSwgcHJvbWlzZVtcImNhdGNoXCJdKHggPT4ge30pKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBwcm9taXNlO1xuXHRib2R5KChkZXBzKSA9PiB7XG5cdFx0Y3VycmVudERlcHMgPSB3cmFwRGVwcyhkZXBzKTtcblx0XHR2YXIgZm47XG5cdFx0dmFyIGdldFJlc3VsdCA9ICgpID0+IChjdXJyZW50RGVwcy5tYXAoKGQpID0+IHtcblx0XHRcdGlmKGRbd2VicGFja0Vycm9yXSkgdGhyb3cgZFt3ZWJwYWNrRXJyb3JdO1xuXHRcdFx0cmV0dXJuIGRbd2VicGFja0V4cG9ydHNdO1xuXHRcdH0pKVxuXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdGZuID0gKCkgPT4gKHJlc29sdmUoZ2V0UmVzdWx0KSk7XG5cdFx0XHRmbi5yID0gMDtcblx0XHRcdHZhciBmblF1ZXVlID0gKHEpID0+IChxICE9PSBxdWV1ZSAmJiAhZGVwUXVldWVzLmhhcyhxKSAmJiAoZGVwUXVldWVzLmFkZChxKSwgcSAmJiAhcS5kICYmIChmbi5yKyssIHEucHVzaChmbikpKSk7XG5cdFx0XHRjdXJyZW50RGVwcy5tYXAoKGRlcCkgPT4gKGRlcFt3ZWJwYWNrUXVldWVzXShmblF1ZXVlKSkpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBmbi5yID8gcHJvbWlzZSA6IGdldFJlc3VsdCgpO1xuXHR9LCAoZXJyKSA9PiAoKGVyciA/IHJlamVjdChwcm9taXNlW3dlYnBhY2tFcnJvcl0gPSBlcnIpIDogb3V0ZXJSZXNvbHZlKGV4cG9ydHMpKSwgcmVzb2x2ZVF1ZXVlKHF1ZXVlKSkpO1xuXHRxdWV1ZSAmJiBxdWV1ZS5kIDwgMCAmJiAocXVldWUuZCA9IDApO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ21vZHVsZScgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhZ2VzL1IxLTAxL0NNL0NNMS9pbmRleC50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYWdlcy9SMS0wMS9DTS9DTTEvaW5kZXguY3NzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvUjEtMDEvQ00vQ00xL2luZGV4Lm1kXCIpO1xuIiwiIl0sIm5hbWVzIjpbIlNoYWRvd0NmZyIsIl9fY3N0cl9ob3N0IiwiQ0FOX0hBVkVfU0hBRE9XIiwiX2Nhbkhhc1NoYWRvdyIsInRhZyIsImluY2x1ZGVzIiwiX2VsZW1lbnQydGFnbmFtZSIsIkxJU1MiLCJleHRlbmRzIiwicF9leHRlbmRzIiwiaG9zdCIsInBfaG9zdCIsImRlcGVuZGFuY2llcyIsInBfZGVwcyIsImF0dHJpYnV0ZXMiLCJwX2F0dHJzIiwicGFyYW1zIiwiY29udGVudCIsImNzcyIsInNoYWRvdyIsInBfc2hhZG93IiwiSFRNTEVsZW1lbnQiLCJfZXh0ZW5kcyIsIk9iamVjdCIsImNhbkhhc1NoYWRvdyIsIkVycm9yIiwidW5kZWZpbmVkIiwicHVzaCIsIkhUTUxUZW1wbGF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJ0cmltIiwiUmVzcG9uc2UiLCJ0ZXh0IiwiTElTU0Jhc2UiLCJQYXJhbWV0ZXJzIiwic3R5bGVzaGVldHMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJmZXRjaF9jc3MiLCJDU1NTdHlsZVNoZWV0IiwiSFRNTFN0eWxlRWxlbWVudCIsInNoZWV0Iiwic3R5bGUiLCJyZXBsYWNlIiwibWFwIiwiaWR4IiwiY29uc3RydWN0b3IiLCJhdHRycyIsInNldEF0dHJEZWZhdWx0IiwiYXR0ciIsInZhbHVlIiwib25BdHRyQ2hhbmdlZCIsIl9uYW1lIiwiX29sZFZhbHVlIiwiX25ld1ZhbHVlIiwiaXNJbkRPTSIsIm9uRE9NQ29ubmVjdGVkIiwib25ET01EaXNjb25uZWN0ZWQiLCJleHRlbmRzTElTUyIsIkxpc3MiLCJwYXJhbWV0ZXJzIiwiYXNzaWduIiwiRXh0ZW5kZWRMSVNTIiwidCIsImlkIiwiYnVpbGRMSVNTSG9zdCIsIl9wYXJhbXMiLCJhbHJlYWR5RGVjbGFyZWRDU1MiLCJTZXQiLCJHRVQiLCJTeW1ib2wiLCJTRVQiLCJwcm9wZXJ0aWVzIiwiZnJvbUVudHJpZXMiLCJuIiwiZW51bWVyYWJsZSIsImdldCIsInNldCIsIkF0dHJpYnV0ZXMiLCJuYW1lIiwiZGF0YSIsImRlZmF1bHRzIiwic2V0dGVyIiwiZGVmaW5lUHJvcGVydGllcyIsIkxJU1NIb3N0QmFzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiaXNJbml0IiwiaW5pdGlhbGl6ZSIsImFwaSIsImluaXQiLCJMSVNTU3luYyIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJjdXN0b21FbGVtZW50cyIsInVwZ3JhZGUiLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uQ2xpY2tFdmVudCIsIm9icyIsImdldEF0dHJpYnV0ZSIsImFkb3B0ZWRTdHlsZVNoZWV0cyIsInNoYXJlZENTUyIsImNzc3NlbGVjdG9yIiwiQ1NTU2VsZWN0b3IiLCJoYXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJodG1sX3N0eWxlc2hlZXRzIiwicnVsZSIsImNzc1J1bGVzIiwiY3NzVGV4dCIsImhlYWQiLCJhcHBlbmQiLCJhZGQiLCJ0ZW1wbGF0ZV9lbGVtIiwic3RyIiwiXyIsIm1hdGNoIiwiY2hpbGROb2RlcyIsIm9iaiIsImhhc1NoYWRvdyIsImdldFBhcnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0UGFydHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGFnTmFtZSIsInJlbW92ZUF0dHJpYnV0ZSIsIm9ic2VydmVkQXR0cmlidXRlcyIsImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayIsIm9sZFZhbHVlIiwibmV3VmFsdWUiLCJfRE9NQ29udGVudExvYWRlZCIsInJlYWR5U3RhdGUiLCJkZWZpbmUiLCJ0YWduYW1lIiwiQ29tcG9uZW50Q2xhc3MiLCJDbGFzcyIsImh0bWx0YWciLCJhbGwiLCJMSVNTY2xhc3MiLCJvcHRzIiwiaW5zZXJ0R2xvYmFsQ1NTUnVsZXMiLCJjc3Nfc3R5bGUiLCJyZXBsYWNlU3luYyIsImluc2VydFJ1bGUiLCJERUxFR0FURURfRVZFTlRTIiwiQUxSRUFEWV9QUk9DRVNTRUQiLCJldiIsImhhbmRsZXJzIiwidHlwZSIsImVsZW0iLCJjb21wb3NlZFBhdGgiLCJTaGFkb3dSb290Iiwid2luZG93IiwidGFyZ2V0Iiwic2VsZWN0b3IiLCJoYW5kbGVyIiwibWF0Y2hlcyIsImluc2VydEdsb2JhbERlbGVnYXRlZExpc3RlbmVyIiwiZXZlbnRfbmFtZSIsImNsb3Nlc3QiLCJlbGVtZW50IiwicmVzdWx0Iiwicm9vdCIsImdldFJvb3ROb2RlIiwiYnVpbGQiLCJwYXJlbnQiLCJjbGFzc2VzIiwiY3NzdmFycyIsImxpc3RlbmVycyIsIkN1c3RvbUNsYXNzIiwid2hlbkRlZmluZWQiLCJ0b0xvd2VyQ2FzZSIsImNsYXNzTGlzdCIsInNldFByb3BlcnR5IiwidG9nZ2xlQXR0cmlidXRlIiwiZGF0YXNldCIsInJlcGxhY2VDaGlsZHJlbiIsImdldExJU1MiLCJjYWxsYmFjayIsIndoZW5BbGxEZWZpbmVkIiwidGFnbmFtZXMiLCJpc0RlZmluZWQiLCJnZXROYW1lIiwiZ2V0TElTU1N5bmMiLCJfYnVpbGRRUyIsInRhZ25hbWVfb3JfcGFyZW50IiwicXMiLCJxc28iLCJxc2EiLCJlbGVtZW50cyIsInByb21pc2VzIiwicXNjIiwicmVzIiwicXNTeW5jIiwicXNhU3luYyIsInFzY1N5bmMiLCJMSVNTX0F1dG8iLCJuYXZpZ2F0b3IiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiLCJjb250cm9sbGVyIiwic3JjIiwibG9jYXRpb24iLCJwYXRobmFtZSIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJtdXRhdGlvbiIsImFkZGl0aW9uIiwiYWRkZWROb2RlcyIsIkVsZW1lbnQiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsInJlc291cmNlcyIsImRlZmluZVdlYkNvbXBvbmVudCIsImZpbGVzIiwianMiLCJrbGFzcyIsIldlYkNvbXBvbmVudCIsImZpbGVuYW1lcyIsImZpbGUiLCJlbmRzV2l0aCIsIl9pbXBvcnQiLCJfZmV0Y2hUZXh0IiwiaSIsIkNzdG1FdmVudCIsIkN1c3RvbUV2ZW50IiwiYXJncyIsImRldGFpbCIsImZldGNoUmVzb3VyY2UiLCJyZXNvdXJjZSIsImZldGNoIiwidXJpIiwiaXNMaXNzQXV0byIsIm9wdGlvbnMiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJkZWZhdWx0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJIVE1MQ0xBU1NfUkVHRVgiLCJlbGVtZW50TmFtZUxvb2t1cFRhYmxlIiwiZXhlYyIsInNfZm9ybXVsYSIsImdldENlbGxzIiwidG9nZ2xlQ2xhc3MiLCJldXJvcyIsInRvTG9jYWxlU3RyaW5nIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwic2V0Rm9ybWF0Iiwic19jb21wbGV4X2Zvcm11bGEiLCJzX3R5cGVzIiwiRGF0ZSIsInNfY3Vyc29yIiwic18kZm9ybXVsYSIsInNfJGZvcm0iLCJyZWYiLCJzaGVldF9yZWNvcGllX21vdGl2YXRpb24iLCJzaGVldF9yZWNvcGllX21vdGl2YXRpb25fZW1wdHkiLCJjIiwiWCIsInRkIiwiZm9jdXMiLCJ0ZXh0Q29udGVudCIsImRlZmF1bHRGb3JtYXQiLCJDYWxjRm9ybXVsYSIsImN1cnNvciIsInN0YXRlcyIsImNlbGxfZWRpdCIsInN0YXRlIiwiZGlzcGF0Y2hFdmVudCIsInN5bmNUbyIsImNlbGxzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJhd0NvbnRlbnQiLCJGb3JtdWxhIiwicmFuZ2VzX3Rva2VuIiwicmVsYXRpdmVUbyIsImRyb3ciLCJkY29sIiwibmV3X3JhbmdlcyIsInIiLCJwb3MiLCJjZWxsUG9zIiwibGFzdEluZGV4T2YiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJuZXdfZm9ybXVsYSIsIm9mZnNldCIsInNsaWNlIiwiYmVnIiwiZW5kIiwicGFyc2VfZm9ybXVsYSIsInJhbmdlc1Rva2VuIiwidG9TdHJpbmciLCJleHRyYWN0VG9rZW4iLCJ0b2tlbiIsImhhc0NvbW1hIiwiTm9kZSIsImNoaWxkcmVuIiwiZmN0IiwiZXZhbCIsInRvTnVtYmVyIiwiYSIsIm9wX2ltcGwiLCJiIiwiTWF0aCIsInBvdyIsIm9wX3ByaW8iLCJvcHMiLCJvcCIsInRva2VubGlzdDJUcmVlIiwidG9rZW5zIiwibmIiLCJyYXciLCJjdXIiLCJwcmlvcml0eSIsImZpbmRJbmRleCIsInVfb3AiLCJvcF90b2tlbiIsImxlZnQiLCJ3YXJuIiwicmlnaHQiLCJjdXJUb2tlbiIsIm5vZGUiLCJyYW5nZXMiLCJmaWx0ZXIiLCJmYWtlX3NoZWV0IiwiUGxhZ2VGb3JtdWxhIiwiY29kZSIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0Iiwic2VsZWN0ZWQiLCJzZWxlY3Rpb24iLCJjbGVhciIsImJsdXIiLCJjZWxsIiwiY2VsbHBvczJjZWxsbmFtZSIsInJvd2lkIiwiY29saWQiLCJpc0FjdGl2ZSIsIm9uSW5wdXQiLCJycmFuZ2UiLCJnZXRTZWxlY3Rpb24iLCJnZXRSYW5nZUF0Iiwic3RhcnRPZmZzZXQiLCJjaGlsZCIsIm5vZGVUeXBlIiwiVEVYVF9OT0RFIiwic3RhcnRDb250YWluZXIiLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwic2VsIiwic2V0U3RhcnQiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwidG9QcmVjaXNpb24iLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJwYXJzZUlucHV0IiwidGVzdF9udW1iZXIiLCJOdW1iZXIiLCJpc05hTiIsInBhcnRzIiwic3BsaXQiLCJ0ZXN0X2RhdGUiLCJnZXRGdWxsWWVhciIsIlN0YXRlIiwicHJldl9zdGF0ZSIsIlN0YXRlcyIsIkNhbGNTaGVldCIsImVudHJpZXMiLCJzIiwiQ2VsbExpc3QiLCJyZW1vdmVIaWdobGlnaHRzIiwiaCIsInJlbW92ZSIsInJlbW92ZUNvcHlIaWdobGlnaHQiLCJoaWdobGlnaHQiLCJzdGFydCIsImlkX29yX2NsYXNzbGlzdCIsImhpZ2giLCJ0Ymxfb2Zmc2V0Iiwib2Zmc2V0VG9wIiwiY2xpZW50SGVpZ2h0Iiwib2Zmc2V0TGVmdCIsImNsaWVudFdpZHRoIiwicm93X2RpZmYiLCJjb2xfZGlmZiIsInJvdyIsImNvbCIsImZvcm11bGFfYmFyIiwicGxhZ2UiLCJmb3JtdWxhIiwicm93cyIsImNvbHMiLCJoYXNBdHRyaWJ1dGUiLCJybyIsImlzX3JvIiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwiZHN0IiwiY2xhc3NOYW1lIiwia2V5IiwiZGVlcENsb25lIiwiZGVsZXRlRm9ybWF0IiwiZGVsZXRlQ29udGVudCIsInN0YXJ0c1dpdGgiLCJkX3JvdyIsImRfY29sIiwibmV4dCIsInByZXYiLCJidWJibGVzIiwib25JbnB1dDIiLCJ0b2dnbGUiLCJyYW5nZXNfY29sb3JzIiwiY3VyX29mZnNldCIsInJhbmdlX25hbWUiLCJ1cGRhdGUiLCJwYXJlbnRFbGVtZW50IiwibmJyb3dzIiwibmJjb2xzIiwidGFibGUiLCJ0Ym9keSIsImNvbF9odG1sIiwidGgiLCJyb3dfaHRtbCIsImZvcm1hdCIsImNlbGxfb3Jfcm93aWQiLCJjb2xfaWQiLCJyb3dfaWQiLCJyZXBsYWNlQWxsIiwiYl9yb3dfaWQiLCJiX2NvbF9pZCIsImNoYXJDb2RlQXQiLCJlX3Jvd19pZCIsImVfY29sX2lkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiRXZlbnRUYXJnZXQiLCJjc3NfY2xhc3MiLCJlbmZvcmNlIiwicmF3X3ZhbCIsIkhUTUxUYWJsZUNlbGxFbGVtZW50IiwidiIsImRpZmYiLCJzZXRSTyIsImNsb25lIiwiY2xvbmVOb2RlIiwic25hbWUiLCJwYXRoIiwicm9vdF9wYXRoIiwiaG9zdG5hbWUiLCJwYWdlcyIsIm1haW4iLCJoZWFkZXIiLCJ0aXRsZXMiLCJodHJlZSIsImh0bWwiLCJsZXZlbCIsImh0cmVlX2N1cnNvciIsInRpdGxlIiwic2VhcmNoQ3VySGVhZGVyIiwicG9zaXRpb24iLCJoaWQiLCJnZXRUaXRsZVByZWZpeCIsImluZGV4T2YiLCJudW0iLCJidWlsZE1lbnUiLCJub2RlcyIsIm1lbnUiLCJpdGVtIiwidXBkYXRlSGVhZGVyIiwibGFzdCIsInNjcm9sbFRvcCIsInJldmVyc2UiLCJobm9kZSIsImhfaHRtbCIsImxpbmsiLCJlbXB0eSIsIm1ha2VfcGFnZV9ocmVmIiwicGF0aHByZWZpeCIsImRlc2MiLCJocmVmIiwibWFrZV9wYWdlX21lbnUiLCJmaW5kIiwicGFnZSIsImN1cnBhZ2UiLCJtb2R1bGVfaHRtbCIsInR5cGVfaHRtbCIsImRlc2NfdHlwZSIsImRlc2MyX2lkeCIsImJvZHkiLCJzZXNzaW9uX2h0bWwiXSwic291cmNlUm9vdCI6IiJ9