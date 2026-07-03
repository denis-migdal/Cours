import {LISS, WithBare, WithContent, WithOutput, define, getInput} from "@LISS/libs/LISS";
import { setAnswerColor } from "@TPEngine/Questions/QText";
import { Answer, AnswerMeta } from "@TPEngine/structs/Answers";

const html = __LOAD_FILE__("./index.html");

export const css = __LOAD_FILE__("./index.css");

// input is set at construction, no need for WithMeta/WithInput
// /!\ use AnswerMeta to ensure answer isn't modified.
export default class RText extends LISS({html, css},
        WithBare, WithContent, WithOutput<AnswerMeta>
) {

    readonly answer_html = this.content.querySelector<HTMLElement>     ('.answer' )!;
    readonly  grade_html = this.content.querySelector<HTMLInputElement>(".grade"  )!;
    readonly comment_html= this.content.querySelector<HTMLInputElement>(".comment")!;

    constructor(question: Answer<string>, count: number) {
        super();

        this.content.querySelector('.nb')!.textContent = `${count}`;
        
        getInput<string>( this.answer_html ).value = question.answer!;

        // grade
        const grade = question.meta?.grade
        if( grade !== undefined) {
            this.grade_html.value = `${grade}`;
            setAnswerColor(this.answer_html, grade);
        }

        this.grade_html.addEventListener('input', () => this.onChange());

        // comment
        if( question.meta?.comment !== undefined)
            this.comment_html.value = `${question.meta.comment!}`;
        
        this.comment_html.addEventListener('input', () => this.onChange() );
    }

    onChange() {

        const grade = +this.grade_html.value;
        setAnswerColor(this.answer_html, grade);

        const comment = this.comment_html.value;

        this._output.value = {
            grade,
            comment,
            suspicious: false, //TODO...
        };
    }

    // no needs for a signal.
    static print(target: HTMLElement,
                 questions: Answer<string>[],
                 callback: (questions: Answer<string>[]) => void
                ) {

        //TODO: sort/merge

        let x = new Array<RText>();
        for(let i = 0; i < questions.length; ++i) {
            x[i] = new RText(questions[i], 1);

            x[i].output.listen( () => {

                // TODO: unmerge/unsort

                questions = questions.slice();
                questions[i].meta = x[i].output.value!;
                callback(questions);
            });
        }

        target.replaceChildren( ...x );
    }
}

/*
    let answers: Record<string, StudentRendu[]> = {};
    for( let rendu of Object.values(this.#rendus!.data) )
        (answers[rendu.rendu.getAnswer(cur_q).text] ??= []).push( rendu );
    
    let sortedAnswers = Object.entries(answers).sort( (a,b) => a[0].localeCompare(b[0]) );
*/

define("r-text", RText);