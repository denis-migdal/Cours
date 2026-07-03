import {LISS, WithBare, WithContent, WithOutput, define, getInput } from "@LISS/libs/LISS";
import { setAnswerColor } from "@TPEngine/Questions/QText";

import {css as answer_css} from "../RText/";
import { MultiTextAnswer, MultiTextAnswerMeta } from "@TPEngine/Questions/QMultiText";

const html = __LOAD_FILE__("./index.html");
const css = __LOAD_FILE__("./index.css");

// cf RText
export default class RMultiText extends LISS({html, css: [css, answer_css]},
    WithBare, WithContent, WithOutput<MultiTextAnswerMeta>
) {

    readonly answers_html = this.content.querySelector<HTMLElement>     ('.answers')!;
    readonly comment_html = this.content.querySelector<HTMLInputElement>(".comment")!;

    readonly grades_html: HTMLInputElement[];

    constructor(question: MultiTextAnswer, count: number) {
        super();

        this.content.querySelector('.nb')!.textContent = `${count}`;

        const template = this.content.querySelector<HTMLTemplateElement>('.t_answer')!.content;

        // grades + answers

        const answers = question.answer ?? [];
        const grades  = question.meta?.grades ?? [];

        this.grades_html = new Array<HTMLInputElement>(answers.length);

        for(let i = 0; i < answers.length; ++i) {

            const answer_div = template.cloneNode(true) as DocumentFragment;

            const answer_text__div = answer_div.querySelector<HTMLElement>(".answer")!;

            getInput<string>(answer_text__div).value = answers![i];

            // not ideal...
            const grade_html = answer_div.querySelector<HTMLInputElement>(".grade"  )!;

            if( grades[i] !== undefined) {
                grade_html.value = `${grades[i]}`;
                setAnswerColor(answer_text__div, grades[i]);
            }

            grade_html.addEventListener('input', () => this.onChange() );

            this.answers_html.append( answer_div );
            this.grades_html[i] = grade_html;
        }

        if( question.meta?.comment !== undefined)
            this.comment_html.value = `${question.meta.comment!}`;

        this.comment_html.addEventListener('input', () => this.onChange() );
    }

    onChange() {

        let grade = 0;
        let grades = new Array(this.grades_html.length);

        for(let i = 0; i < this.grades_html.length; ++i) {
            const subgrade_html = this.grades_html[i];
            const subgrade = grades[i] = +subgrade_html.value;
            
            grade += subgrade;
            setAnswerColor(subgrade_html.nextElementSibling as HTMLElement,
                           subgrade);
        }

        const comment = this.comment_html.value;

        this._output.value = {
            grade,
            grades,
            comment,
            suspicious: false, //TODO...
        };
    }

    static print(target: HTMLElement,
                 questions: MultiTextAnswer[],
                 callback: (questions: MultiTextAnswer[]) => void ) {

        //TODO: sort/merge... (cf RText)

        let x = new Array<RMultiText>();
        for(let i = 0; i < questions.length; ++i) {
            x[i] = new RMultiText(questions[i], 1);
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

define("r-multitext", RMultiText);