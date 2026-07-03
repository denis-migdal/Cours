const JSZip = require("jszip");
import { Converter } from "./FileManager"
import { Answers, Answers2Buffer, Buffer2Answers } from "./Answers";

export type Rendu = {
    student_id: string,
    filename  : string,
    answers   : Answers,
};

export type Rendus = {
    sujet_url: string,
    corrige: Answers,
    rendus : Rendu[];
}


export async function Rendus2Buffer(data: Rendus) {

    const zip = new JSZip();

    zip.file("sujet.url", data.sujet_url );

    zip.file("corrige.answers", await Answers2Buffer(data.corrige) );

    for( let rendu of data.rendus )
        zip.file(rendu.filename, await Answers2Buffer(rendu.answers) );

    return await zip.generateAsync({type:"arraybuffer"}) as ArrayBuffer;
}

async function Buffer2Rendus(content: ArrayBuffer) {
    
    const zip = new JSZip();
    await zip.loadAsync(content);

    const data: Rendus = {
        sujet_url: "",
        corrige: [],
        rendus : []
    };
    
    for(let filename in zip.files) {

        if(filename === "sujet.url") {
            data.sujet_url = (await zip.file(filename).async("string")).trim();
            continue;
        }

        const answers = await Buffer2Answers(await zip.file(filename).async("arraybuffer") );

        if(filename === "corrige.answers") {
            data.corrige = answers;
            continue;
        }

        // TODO: from Moodle + verif RNG/IP.
        const student_id = filename.split('_')[2].slice(0,-8);

        data.rendus.push({
            filename,
            student_id,
            answers
        });
    }
    
    return data;
}

export const RendusConv = {
    toBuffer  : Rendus2Buffer,
    fromBuffer: Buffer2Rendus
} satisfies Converter<Rendus>
