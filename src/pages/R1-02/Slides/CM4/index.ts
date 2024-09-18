import "struct/global_liss";

import "WebSlides/src/index";
import "struct/menu.ts";

//TODO: move 2 repo
import "struct/SQLWidgets";

import "struct/sql-interactive";
import "struct/sql-dym-table";
import "struct/anim-player";

const ROOT = ["localhost", "127.0.0.1"].includes(location.hostname) ? "/dist/dev/" : "/Cours/dist/dev/";
const bg = `url(${ROOT}assets/background.png)`;
document.body.style.setProperty("--webslide_background", bg);