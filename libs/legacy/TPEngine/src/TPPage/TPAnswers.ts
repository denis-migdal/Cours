import "@TPEngine/Questions/QText";
import "@TPEngine/Questions/QMultiText";
import "@TPEngine/Questions/QFile";
import FileManager, { FileManagerOpts } from "../structs/FileManager";
import { Answer, AnswerMeta, Answers, AnswersConv } from "../structs/Answers";
import { InputMerger, OutputMerger } from "@LISS/src/signals";
import { getInput, getMeta, getOutput } from "@LISS/src";

type TPAnswers_Opts = {
    export_filename: string;
}

export class TPAnswers implements FileManagerOpts<Answers> {

    readonly extension = ".answers";
    readonly converter = AnswersConv;
    readonly localStorage_name = location.pathname;

    readonly export_filename: string;

    // internal use only
    readonly filemanager = new FileManager(this);

    #input: InputMerger;
    #meta : InputMerger;

    constructor({export_filename}: TPAnswers_Opts, ...inputs: HTMLElement[]) {

        this.export_filename = export_filename;

        this.#input = new InputMerger (...inputs.map( i => getInput <unknown>(i) ));
        this.#meta  = new InputMerger (...inputs.map( i => getMeta  <AnswerMeta>(i) ));
        const out   = new OutputMerger(...inputs.map( i => getOutput<unknown>(i) ));

        out.listen( () => {
            const value = out.value;
            if( value === null )
                return; // should not occurs ?

            const initial = this.filemanager.file_content.value!;

            this.filemanager.file_content.value = value.map( (e,idx) => {
                const elem = {answer: e} as Answer<unknown>;
                const meta = initial?.[idx]?.meta;
                if( meta !== undefined )
                    elem.meta = meta;

                return elem;
            });
        })

        // do NOT listen to file_content.
        this.filemanager.file.listen( () => this.#updateFields() );
    }

    #updateFields() {
        const content = this.filemanager.file_content.value;

        if( content === null) {
            this.#input.value = null;
            return;
        }

        this.#input.value = content.map( e => e.answer!    as unknown );
        this.#meta.value  = content.map( e => e.meta??null as AnswerMeta|null );
    }

    import() { this.filemanager.import(); }
    export() { this.filemanager.export(); }

    load(buffer: ArrayBuffer, filename: string|null) {
        this.filemanager.loadFromBuffer( buffer, filename );
    }

}