import "@Cours/struct/global_liss";

import "../../../WebSlides/src/index";
import "@Cours/struct/menu";

//TODO: move 2 repo
import "@Cours/struct/SQLWidgets";

import "@Cours/struct/sql-interactive";
import "../../../SQL/sql-dym-table";
import "../../../anim-player";

const ROOT = ["localhost", "127.0.0.1"].includes(location.hostname) ? "/dist/dev/" : "/Cours/dist/dev/";
const bg = `url(${ROOT}assets/background.png)`;
document.body.style.setProperty("--webslide_background", bg);