import LISS from "LISS";
import { upload } from "struct/utils/upload";
import { RENDU } from "./rendu";

export class FileInput extends LISS() {

    constructor() {
        super();

        const btn = document.createElement("button");
        btn.textContent = "[upload]";
        this.content.append(btn);
        btn.addEventListener('click', async (ev) => {
            const file = await upload();

            if(file === null)
                return;

            RENDU.updateFile("file", file);
        });
    }

}


LISS.define('tp-file_input', FileInput);