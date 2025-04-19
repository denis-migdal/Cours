import { setHeightOffset } from "@WebSlides/lib";
setHeightOffset(24);

import "@LISS/components/page/color-switch";

// @ts-ignore
import menu  from "!!raw-loader!/src/pages/content.txt";
import { initMenu } from "@LISS/components/page/menu/";

initMenu(menu);