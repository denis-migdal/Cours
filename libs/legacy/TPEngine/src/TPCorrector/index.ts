import DOMContentLoaded from "@LISS/src/utils/FutureEvents/DOMContentLoaded";
import { AnswersBrowser } from "@TPEngine/TPCorrector/AnswersBrowser";


// ensure the DOM is ready before searching for questions
await DOMContentLoaded;

const answerBrowser = new AnswersBrowser();

// ===========================================
// ===== navigation ==========================
// ===========================================

const nav = answerBrowser.navigator;

// prev/next
document.querySelector('#q_prev')!.addEventListener("click", () => nav.prev() );
document.querySelector('#q_next')!.addEventListener("click", () => nav.next() );

const qid = document.querySelector('#q_id')!;
const qnb = document.querySelector('#q_nb')!;

nav.listen( () => {
    qnb.textContent = `${nav.max}`;
    qid.textContent = `${nav.value!+1}`;
});

// ===========================================
// ===== import/export =======================
// ===========================================

document.querySelector('#export_answers')!.addEventListener('click', () => {
    answerBrowser.export();
});
document.querySelector('#import_answers')!.addEventListener('click', () => {
    answerBrowser.import();
});
document.querySelector('#export_csv')!.addEventListener('click', () => {
    answerBrowser.exportCSV();
});