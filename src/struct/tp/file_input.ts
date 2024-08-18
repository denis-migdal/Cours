import LISS from "LISS";
import { upload } from "struct/utils/upload";
import { RENDU } from "./rendu";

export class FileInput extends LISS({
    attributes: ["default"]
}) {

    constructor() {
        super();

        if( this.attrs.default !== null) {
            fetch(this.attrs.default).then( async (e) => {
                RENDU.updateFile("file", await e.arrayBuffer() );
            });
        }

        const btn = document.createElement("button");
        btn.textContent = "[upload]";
        this.content.append(btn);
        btn.addEventListener('click', async (ev) => {
            const file = await upload();

            if(file === null)
                return;

            RENDU.updateFile("file", await file.arrayBuffer() );
        });
    }

}


LISS.define('tp-file_input', FileInput);