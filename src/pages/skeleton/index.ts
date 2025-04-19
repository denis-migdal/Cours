import "@LISS/pages/skeleton/base";

const title = document.querySelector("h1");
if( title !== null) {

    const div = document.createElement('div');
    div.classList.add("lastmodified");
    div.textContent = "(dernière modification le " + new Date(document.lastModified).toLocaleDateString('fr-FR', { year:"numeric", month:"long", day:"numeric", hour:"2-digit", minute: "2-digit"}) + ")";

    title.after(div);
}

// @ts-ignore
import menu  from "!!raw-loader!/src/pages/content.txt";
import { initMenu } from "@LISS/components/page/menu/";

initMenu(menu);