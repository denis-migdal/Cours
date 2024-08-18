export type Answer = {

};

export type TPFile = {
    content: ArrayBuffer
};

export class Rendu extends EventTarget {

    #answers: Answer[] = [];
    readonly files  : Record<string, TPFile> = {};

    updateFile(name: string, content: ArrayBuffer) {

        //TODO: update dependencies...
        this.files[name] = {
            content
        };

        this.dispatchEvent( new CustomEvent("change") );
    }

    static import() {

    }

    export() {

    }
}

export const RENDU = new Rendu();