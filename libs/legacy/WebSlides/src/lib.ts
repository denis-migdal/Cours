import "./components/FrameUCAPlain";
import "./components/FrameUCATitle";
import "./components/FrameUCA";

import "./components/menu";

const main = document.querySelector("main")!;

const p = new URLSearchParams(location.search);

const IS_IN_OVERVIEW = p.has("overview");

if( IS_IN_OVERVIEW ) {
    main.style.setProperty('--nb_frame', p.get("overview"));
    document.body.classList.add('overview');
}


let height_offset = 0;

export function setHeightOffset(off: number) {
    height_offset = off;
    updateRatio();
}

// fit page height
function updateRatio() {
    const mh = 420; // height: 148mm - cste fix in CSS

    const isFullScreen = window.screen.height === window.innerHeight;

    const offset = isFullScreen ? 0 : height_offset;

    const vh = document.documentElement.clientHeight - offset; // without scrollbar
    const vw = document.documentElement.clientWidth; // without scrollbar

    const scale = IS_IN_OVERVIEW ? vw/(mh*16/9) : Math.min( vh/mh, vw/(mh*16/9) );

    main.style.setProperty("--scale", `${scale}`);
}

window.addEventListener('resize', updateRatio);
updateRatio();

// change slide
let current = 0;

function getCode(ev: KeyboardEvent) {

    let code = ev.code;

    if( code === "ArrowLeft"  || code === "ArrowUp")
        code = "PageUp";
    if( code === "ArrowRight" || code === "ArrowDown")
        code = "PageDown";

    return code;
}
function isDownUp(code: string) {
    return ["PageUp", "PageDown"].includes(code);
}

document.addEventListener("keydown", (ev) => {

    const code = getCode(ev);

    if( isDownUp( code ) ) {
        ev.preventDefault();
        handleEvent( code );
    }

});

document.addEventListener("keypress", (ev) => {

    if( isDownUp( getCode(ev) ) )
        ev.preventDefault();
});

document.addEventListener("keyup", (ev) => {

    if( isDownUp( getCode(ev) ) )
        ev.preventDefault();
});

function handleEvent(code: string) {

    let sections = [...document.querySelectorAll<HTMLElement>(':is(section, .ws-frame)')];

    const pos = document.querySelector("main")!.scrollTop;

    // +1/-1 required due to round issues.

    if( code=== "PageUp" ) {

        let cur = sections.length - 1;
        while( cur != 0 && pos-1 <= sections[cur].offsetTop)
            --cur;

        current = cur;
    }
    if( code=== "PageDown" ) {

        let cur = 0;
        while( cur != sections.length - 1 && pos+1 >= sections[cur].offsetTop)
            ++cur;

        current = cur;
    }

    sections[current].scrollIntoView({behavior: "instant"});
    /*
    // avoid : offsetTop doesn't work with subpixels, produces jitters.
    main.scrollTo({
        top     : sections[current].offsetTop,
        behavior: "instant",
    });
    */
}