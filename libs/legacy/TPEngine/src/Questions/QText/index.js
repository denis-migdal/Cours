import { LISS, WithBare, WithContent, WithMeta, WithRWValue, define, getValue } from "@LISS/libs/LISS";
const html = __LOAD_FILE__("./index.html");
export const css = __LOAD_FILE__("./index.css");
class QText extends LISS({ html, css }, WithBare, WithContent, (WithRWValue), (WithMeta)) {
    #answer;
    constructor() {
        super();
        const pts = +this.host.getAttribute("pts");
        const input = this.content.querySelector(".answer");
        const span_grade = this.content.querySelector(".grade");
        const codeLang = this.host.getAttribute('code-lang');
        if (codeLang !== null)
            input.setAttribute('code-lang', codeLang);
        this.#answer = getValue(input);
        this._output.source = this.#answer;
        this.#answer.source = this._input;
        this._meta.listen(() => {
            const meta = this._meta.value;
            setGlobalGrade(span_grade, meta, pts, (grade) => grade * pts);
            setAnswerColor(input, meta?.grade);
            setComment(input, meta);
        });
    }
}
import "@LISS/components/code/code-editor";
define("q-text", QText);
// ========================================
// ============== helpers =================
// ========================================
export function setComment(target, meta) {
    const comment = meta === null ? "" : meta.comment;
    if (comment === "")
        target.removeAttribute("comment");
    else
        target.setAttribute("comment", comment);
}
export function setGlobalGrade(target, meta, max, pts) {
    if (max === 0)
        return;
    const score = meta === null ? "" : `${pts(meta.grade)}`;
    target.textContent = `[${score}/${max}]`;
}
export function setAnswerColor(target, grade) {
    if (grade == undefined) {
        target.removeAttribute('grade');
    }
    else if (grade === 0) {
        target.setAttribute('grade', "0");
    }
    else if (grade === 1) {
        target.setAttribute('grade', "1");
    }
    else if (grade <= 0.5) {
        target.setAttribute('grade', "<=.5");
    }
    else if (grade > 0.5) {
        target.setAttribute('grade', ">.5");
    }
}
//# sourceMappingURL=index.js.map