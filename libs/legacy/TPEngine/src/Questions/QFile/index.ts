import {LISS, WithBare, WithContent, WithMeta, WithRWValue, define} from "@LISS/libs/LISS";
import { AnswerMeta } from "@TPEngine/structs/Answers";

const html = __LOAD_FILE__("./index.html");

const css = __LOAD_FILE__("./index.css");

import {css as answer_css, setAnswerColor, setComment, setGlobalGrade} from "../QText/";
import { upload } from "@TPEngine/utils/upload";

export type File = {content: string, type:string};

export class QFile extends LISS({html, css:[answer_css, css]},
                                WithBare,
                                WithContent,
                                WithRWValue<File>,
                                WithMeta<AnswerMeta>) {

    readonly pts        = +this.host.getAttribute("pts")!;
    readonly hasViewer  =  this.host.getAttribute("viewer")! !== "false";
    readonly accepts    =  this.host.getAttribute('type') ?? "";
    readonly default    =  this.host.getAttribute("default")!;

    readonly span_grade = this.content.querySelector<HTMLElement>('.grade')!;
    readonly answer     = this.content.querySelector<HTMLIFrameElement>('.answer')!;

    constructor() {
        super();
        
        // selected
        this.content.querySelector<HTMLElement>('.upload_btn')!.addEventListener('click', async () => {

            const file = (await upload(this.accepts))!;
            const data = URL.createObjectURL(file);

            if( this.hasViewer )
                this.answer.src = data;

            this._output.value = {
                type   : file.type,
                // @ts-ignore : bytes & toBase64 exists in FF.
                content: (await file.bytes()).toBase64()
            }
        });

        this.answer.addEventListener("load", () => {
            
            const body = this.answer.contentDocument!.body!;

            if( body !== null) {
                body.style.setProperty('height', '100vh')
                body.style.setProperty('width' , '100vw')
                body.style.setProperty('margin' , '0')
                body.style.setProperty('display', 'flex');
                body.style.setProperty('align-items', 'center');
                body.style.setProperty('justify-content', 'center');
            } else {
                const svg = this.answer.contentDocument!.documentElement;
                svg.style.setProperty("width", "100vw")
                svg.style.setProperty("height", "100vh")
            }

            /*
            const img = this.answer.contentDocument!.documentElement!
                                .querySelector('img');
            if(img !== null) {
                img.style.setProperty('margin', 'auto');
            }*/
        })


        this._input.listen( async () => {

            const value = this._input.value;

            let file   : Blob;
            let type   : string;
            let content: string;

            if( value === null) {
                if( this.default === null)
                    return;

                const rep  = await fetch(this.default);
                file = await rep.blob();

                type    = file.type;
                // @ts-ignore
                content = (await file.bytes()).toBase64();

            } else {
                ({type, content} = value);

                // @ts-ignore : fromBase64 should be added in Edge/Chrome soon.
                file = new Blob([Uint8Array.fromBase64(content)], {type});
            }

            const data = URL.createObjectURL(file);

            if( this.hasViewer )
                this.answer.src = data;

            this._output.value = { type, content }
        });

        this._meta.listen( () => {

            const meta = this._meta.value;

            setGlobalGrade(this.span_grade, meta, this.pts,
                            (grade) => grade * this.pts);
            setComment(this.answer!, meta);
            setAnswerColor(this.answer, meta?.grade);
        });
    }
}

define("q-file", QFile);