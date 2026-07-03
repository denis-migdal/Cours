import { Rendu, Rendus, RendusConv } from "../structs/Rendus";
import FileManager, { FileManagerOpts } from "../structs/FileManager";
import { download } from "../utils/download";
import Navigator from "./Navigator";
import SubjectViewer from "./SubjectViewer";
import Filter from "./Filter";
import { Answer, Answers } from "@TPEngine/structs/Answers";

const Responses = {
    "text"     : (await require("../Responses/RText/"     )).default,
    "multitext": (await require("../Responses/RMultiText/")).default
}

const answers_html = document.querySelector<HTMLElement>('#answers')!;

export class AnswersBrowser implements FileManagerOpts<Rendus> {

    readonly extension = ".zip";
    readonly converter = RendusConv;
    readonly localStorage_name = "sav";

    get export_filename(): string {
        return this.#filemanager.file.value?.filename!;
    }

    readonly navigator = new Navigator();

    readonly #filemanager   = new FileManager  (this);
    readonly #subjectViewer = new SubjectViewer(this);

    readonly #filter        = new Filter();

    constructor() {

        this.#filemanager.file.listen( async () => {

            const file = this.#filemanager.file.value;
            if( file === null )
                return; // dunno what to do...

            const content = file.content.value!;

            this.#filter.updateFilter(content.rendus.map( r => r.student_id ));

            const q = await this.#subjectViewer.update(content.sujet_url,
                                                       content.corrige);

            this.navigator.max   = content.corrige.length;
            this.navigator.value = 0;
        });

        //TODO...
        this.navigator.listen( () => this.#updatePage() );
        this.#filter  .listen( () => this.#updatePage() );
    }

    export() { this.#filemanager.export() }
    import() { this.#filemanager.import() }

    exportCSV() {

        let data = "";

        const rendus = this.#filemanager.file_content.value!.rendus;
        for(let i = 0; i < rendus.length; ++i) {
            const rendu = rendus[i];

            data += rendu.student_id;

            data += "\t"; //TODO: la somme

            for(let i = 0; i < rendu.answers.length; ++i)
                data += "\t" + (rendu.answers[i]?.meta?.grade ?? 0);

            data += "\n";
        }

        download(data, "notes.csv", ".csv");
    }

    #updatePage() {

        if(this.#filemanager.file_content.value === null)
            return;

        // get data
        const questions = this.#subjectViewer.questions!;
        const qid       = this.navigator.value!;

        const content  = this.#filemanager.file_content.value!
        const rendus   = content.rendus;
        const filtered = rendus.map( (rendu) => rendu.answers[qid] )
                               .filter( (_, idx) => this.#filter.includes(idx) )

        // print
        const Response = Responses[ questions[qid].type.toLowerCase() as keyof typeof Responses ];
        Response.print(answers_html, filtered, (value: Answer<unknown>[]) => {

            // When updated:
            const unfiltered = new Array<Rendu>(rendus.length);
            for(let i = 0; i < unfiltered.length; ++i) {
                if( ! this.#filter.includes( i ) ) { // wasn't printed
                    unfiltered[i] = rendus[i];
                    continue;
                }
                // not ideal, but well...
                unfiltered[i] = structuredClone(rendus[i]);
                unfiltered[i].answers[qid] = value[i];
            }
            
            this.#filemanager.file_content.value = {
                ...content,
                rendus: unfiltered
            }
        });
    }
}