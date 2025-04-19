import "@LISS/pages/skeleton/base";
import "@LISS/components/playground/liss-playground/";
import { initMenu } from "@LISS/components/page/menu/";

console.warn(document.lastModified);

// @ts-ignore
import menu  from "!!raw-loader!/src/pages/content.txt";
initMenu(menu);