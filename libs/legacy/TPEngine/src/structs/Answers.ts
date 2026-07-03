const JSZip = require("jszip");
import { Converter } from "./FileManager"

export type AnswerMeta = {
    grade     : number,
    comment   : string
    suspicious: boolean,
}

export type Answer<T extends any = unknown> = {
    answer?: T,
    meta  ?: AnswerMeta
}

export type Answers = Answer[];

export async function Answers2Buffer(data: Answers) {
    const zip = new JSZip();
    zip.file("answers", JSON.stringify(data, null, '\t') );
    return await zip.generateAsync({type:"arraybuffer"}) as ArrayBuffer;
}

export async function Buffer2Answers(content: ArrayBuffer) {
    
    const zip = new JSZip();
    await zip.loadAsync(content);

    const file = zip.file("answers");

    //console.warn(file.date);

    return JSON.parse( await file.async("string") ) as Answers;
}

export const AnswersConv = {
    toBuffer  : Answers2Buffer,
    fromBuffer: Buffer2Answers
} satisfies Converter<Answers>