import { LISS, define } from "@LISS/libs/LISS";
import { cloneNode } from "@LISS/src/utils/DOM/createElement";
const plain_css = __LOAD_FILE__("../FrameUCAPlain/index.css");
const css = __LOAD_FILE__("./index.css");
const html = __LOAD_FILE__("./index.html");
// attributes: ["repeat", "slide"] /* TODO... */
export class FrameUCA extends LISS({
    css: [plain_css, css],
    html,
}) {
    constructor() {
        super();
        this.host.classList.add('ws-frame');
        for (let i = 0; i <= 2; ++i) {
            const prefix = "sub".repeat(i);
            const section = this.host.closest(`frame-${prefix}section`);
            if (section !== null)
                this.content.querySelector(`.${prefix}title`).textContent = section.getAttribute("name");
        }
        const onslides = this.host.querySelectorAll("[onslide]");
        //TODO: onslide.
        let slide = this.host.getAttribute("slide");
        if (slide === null) { // initial
            let max = 0;
            for (let onslide of onslides) {
                const m = +onslide.getAttribute('onslide');
                if (m > max)
                    max = m;
            }
            if (max === 0)
                return;
            const dupl = Array.from({ length: max }, (_, idx) => {
                // cloneNode upgrade too soon.
                this.host.setAttribute('slide', `${idx + 1}`);
                this.host.toggleAttribute("repeat", false); // ?
                const elem = cloneNode(this, true);
                // dirty h4ck
                //(elem as any).scripts = (this.host as any).scripts;
                return elem;
            });
            this.host.after(...dupl);
            this.host.setAttribute("slide", "0");
        }
        // TODO: improve onslide... (visibility hidden)
        const slide_id = +(slide ?? "0");
        for (let onslide of onslides) {
            const cond = onslide.getAttribute('onslide');
            const show = cond.split(",").map(p => p.split("-")).some((part) => {
                if (part.length === 1)
                    return slide_id === +part[0];
                if (slide_id < +part[0])
                    return false;
                if (part[1] === "")
                    return true;
                if (slide_id > +part[1])
                    return false;
                return true;
            });
            if (!show)
                onslide.classList.add('invisible');
            //  onslide.style.setProperty("display", "none");
            // ad hoc
            if (show && onslide.parentElement?.tagName === "SQL-INTERACTIVE") {
                const parent = onslide.parentElement;
                const idx = [...parent.children].indexOf(onslide);
                parent.setAttribute("option", `${idx}`);
            }
            // ad hoc
            if (show && onslide.matches("sql-option")) {
                const selector = onslide.closest(":is(sql-selector)");
                if (selector === null)
                    return;
                const id = [...selector.querySelectorAll("sql-option")]
                    .indexOf(onslide);
                selector.setAttribute("option", `${id}`);
            }
        }
    }
}
define("frame-uca", FrameUCA);
//# sourceMappingURL=index.js.map