
// pour rendus :
import Rendu   from "pages/TPEngine/Rendu.ts";
import {SUJET} from "pages/TPEngine/GUI/SujetTP.ts";

import { download } from "../../struct/utils/download.ts";

const toolbar = document.createElement("span");
toolbar.classList.add("toolbar");

const import_btn = document.createElement('span');
import_btn.textContent = "[import]";

const file_upload = document.createElement('input');
file_upload.setAttribute('type', 'file');
import_btn.addEventListener('click', () => {
    file_upload.click();
});

file_upload.addEventListener('change', async () => {
    SUJET.rendu = await Rendu.loadFromArrayBuffer( await file_upload.files![0].arrayBuffer() );
});


const export_btn = document.createElement('span');
export_btn.textContent = "[export]";
export_btn.addEventListener('click', async () => {
    download( await SUJET.rendu.toArrayBuffer(), SUJET.filename);
});

toolbar.append(import_btn, export_btn);

document.body.append(toolbar);

addEventListener("message", (e) => {

    if( typeof e.data !== "number")
        return;

    SUJET.highlight(e.data);
})