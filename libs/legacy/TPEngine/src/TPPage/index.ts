import DOMContentLoaded from "@LISS/src/utils/FutureEvents/DOMContentLoaded";
import { TPAnswers } from "./TPAnswers";

// ===========================================
// ===== compute export filename
// ===========================================

const p = new URLSearchParams(location.search);

let student = p.get('nom');
let isDS = p.get('ds') !== null;

if( isDS && student === null ) {
    student = prompt('Entrez votre nom sous la forme "NOM Prénom"')!.toUpperCase();
    history.pushState({}, "", `${location.search}&nom=${student}`);
}

const export_filename = isDS ? `${location.pathname.slice(1,-1).replaceAll("/", "_")}.answers`
                             : `${location.hostname}_${student}.answers`;

// ===========================================
// ===== get fields + messages events ========
// ===========================================

// ensure the DOM is ready before searching for questions
await DOMContentLoaded;

const inputs  = [...document.querySelectorAll<HTMLElement>("*")]
                .filter( t => t.tagName.startsWith("Q-") )

addEventListener("message", (e) => {

    if( typeof e.data === "string" )
        return; // setImmediate junk.

    if( e.data.type === "corrige" ) {

        TPanswers.load(e.data.value, null);

        // replies with q types...
        window.parent.postMessage({
            type: "questions",
            value: inputs.map( e => {
                return {
                    type: e.tagName.toLocaleUpperCase().slice(2)
                }
            }
        )},"*");

        return;
    }
    if( e.data.type === "highlight" ) {
        highlight(e.data.value);
        return;
    }
})

function highlight(q_id: number) {

    document.querySelector(".answer_highlight")?.classList.remove("answer_highlight");

    const answer = inputs[q_id];
    answer.classList.add('answer_highlight');

    const vh = document.documentElement.clientHeight;
    const ah = answer.clientHeight;

    void vh;

    document.querySelector("main")!.scrollTo({
        top: answer.offsetTop - (document.documentElement.clientHeight / 2 + ah / 2),
        behavior: "instant"
    });
}

const TPanswers = new TPAnswers({export_filename}, ...inputs);

if( isDS ) {
    const fm = TPanswers.filemanager;

    fm.file_content.listen( async () => {

        const data = await fm.saveToBuffer();

        await fetch(`${location.origin}/save`, {
            method: "POST",
            headers: {
                "Content-Type": "application/octet-stream",
            },
            body: data
        });
    });
}

// ===========================================
// ===== create toolbar (import/export)
// ===========================================

const import_btn = document.createElement('span');
import_btn.textContent = "[import]";
import_btn.addEventListener('click', () => { TPanswers.import(); });

const export_btn = document.createElement('span');
export_btn.textContent = "[export]";
export_btn.addEventListener('click', async () => { TPanswers.export(); });

const submit_btn = document.createElement('span');
submit_btn.textContent = "[déposer]";
submit_btn.addEventListener('click', async () => {

    if( ! confirm(`${student}\nÊtes vous sur de vouloir rendre ?`) )
        return;

    const fm = TPanswers.filemanager;
    const data = await fm.saveToBuffer();

    await fetch(`${location.origin}/submit?name=${student}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/octet-stream",
        },
        body: data
    });

    alert("Rendu");
});

const toolbar = document.createElement("span");
toolbar.classList.add("toolbar");
toolbar.style.setProperty("position", "fixed");
toolbar.style.setProperty("bottom", "5px");
toolbar.style.setProperty("right", "5px");
toolbar.style.setProperty("cursor", "pointer");

toolbar.append(import_btn, isDS ? submit_btn : export_btn);
document.body.append(toolbar);