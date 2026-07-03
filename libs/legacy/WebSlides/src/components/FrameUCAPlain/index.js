import { LISS, define } from "@LISS/libs/LISS";
const css = __LOAD_FILE__("./index.css");
class FrameUCAPlain extends LISS({
    css
}) {
    constructor() {
        super();
        this.host.classList.add('ws-frame');
    }
}
define("frame-uca-plain", FrameUCAPlain);
//# sourceMappingURL=index.js.map