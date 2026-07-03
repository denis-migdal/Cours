import { upload } from "@TPEngine/utils/upload";
import { buffer2str, str2buffer } from "@TPEngine/utils/buffer";
import { download } from "@TPEngine/utils/download";
import Signal from "@LISS/src/signals/Signal";
import { Output } from "@LISS/src/extensions/WithOutput";
import { SyncedSignal } from "@LISS/src";

export type Converter<T> = {
    fromBuffer: (buffer: ArrayBuffer) => Promise<T>,
      toBuffer: (  data: T          ) => Promise<ArrayBuffer>
}

export type FileManagerOpts<T> = {
    readonly extension: string,
    readonly converter: Converter<T>,
    readonly localStorage_name: string,
    readonly export_filename  : string
}

type File<T> = {
    readonly filename: string|null,
    readonly content : Signal<T>
}

// content/file : RO ou RW ???
export default class FileManager<T> {

    #opts: FileManagerOpts<T>;
    #file    = new Signal<File<T>>();
    #content = new SyncedSignal<T>();

    constructor(opts: FileManagerOpts<T>) {

        this.#opts = opts;

        // Auto-save to localStorage...
        this.file_content.listen( () => {
            this.saveToLocalStorage(this.#opts.localStorage_name)
        });

        this.loadFromLocalStorage(this.#opts.localStorage_name);
    }

    get file(): Output<File<T>> {
        return this.#file;
    }

    get file_content(): SyncedSignal<T> {
        return this.#content;
    }

    async export() {

        const buffer = await this.saveToBuffer();
        if( buffer === null)
            return;

        // this is sync
        download( buffer, this.#opts.export_filename, this.#opts.extension);
    }
    async import() {
        //filename
        const file = (await upload(this.#opts.extension))!;

        if(file === null)
            return;

        await this.loadFromBuffer( await file.arrayBuffer(), file.name );
    }

    async saveToLocalStorage(_name: string) {

        const buffer = await this.saveToBuffer();
        if( buffer === null)
            return;

        localStorage.setItem( this.#opts.localStorage_name, buffer2str( buffer ) );      
    }
    async loadFromLocalStorage(name: string) {
        const data = localStorage.getItem(name);

        if( data === null) {
            const content = this.#content.source = new Signal();
            this.#file.value = {
                content,
                filename: ""
            };
            return;
        }

        await this.loadFromBuffer( str2buffer( data ), name );
    }


    async saveToBuffer() {

        const value = this.file_content.value;
        if( value === null)
            return null;

        return await this.#opts.converter.toBuffer(value);
    }
    async loadFromBuffer(buffer: ArrayBuffer, filename:string|null) {

        const content = new Signal<T>();
        content.value = await this.#opts.converter.fromBuffer( buffer );

        // sync issue (?)
        this.#content.source = content;
        this.#file.value = {content, filename};
    }
}