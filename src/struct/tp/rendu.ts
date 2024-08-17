export type Answer = {

};

export type TPFile = {
    file: {
        arrayBuffer: () => Promise<ArrayBuffer>
    }
};

export class Rendu extends EventTarget {

    #answers: Answer[] = [];
    readonly files  : Record<string, TPFile> = {};

    updateFile(name: string, file: File|Response) {

        //TODO: update dependencies...
        this.files[name] = {
            file
        };

        this.dispatchEvent( new CustomEvent("change") );
    }

    static import() {

    }

    export() {

    }
}

export const RENDU = new Rendu();