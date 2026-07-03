import { Answers, Answers2Buffer } from "@TPEngine/structs/Answers";
import Navigator from "./Navigator";

const iframe = document.querySelector('iframe')!;

type Question = {type: string};

export default class SubjectViewer {

    #promise: ReturnType<typeof Promise.withResolvers<Question[]>>|null = null;

    constructor(target : {navigator: Navigator}) {

        target.navigator.listen( () => {
            try {
                iframe.contentWindow?.postMessage({type: "highlight",
                                                   value: target.navigator.value},
                                                   "*");
            } catch(e) {
                console.warn(e);
            }
        });

        addEventListener('message', ev => {
    
            if(typeof ev.data === "string")
                return;

            if(ev.data.type === "questions" && this.#promise !== null)
                this.#promise.resolve(ev.data.value);
        })
    }

    get questions() {
        return this.#questions;
    }

    #questions: Question[]|null = null;
    async update(sujet_url: string, corrige: Answers) {

        this.#promise = Promise.withResolvers<{type: string}[]>();
        const buffer =  await Answers2Buffer(corrige);

        iframe.addEventListener("load", () => {
            iframe.contentWindow!.postMessage({
                type: "corrige",
                value: buffer }, "*");
        }, {once: true});

        iframe.src = sujet_url;

        this.#questions = await this.#promise.promise;
    }
}