import LISS from "https://raw.githack.com/denis-migdal/LISS/main/index.js"


const content = `<span class="reset">[Reset]</span><span class="prev">[Prev]</span><span class="play">[Play/Pause]</span><span class="next">[Next]</span>`;

const css = `
`;

const styles = [...document.querySelectorAll('style')].map(s => {
    let style = new CSSStyleSheet();
    style.replaceSync(s.textContent);
    return style;
});

class AnimPlayer extends LISS({
    content,
    css: [css, ...styles],
    attributes: ["speed"]
}) {

    constructor() {
        super();

        this.id = null;
        this.stepID = 0;

        this.content.querySelector(".prev" ).addEventListener("click", () => this.prev());
        this.content.querySelector(".next" ).addEventListener("click", () => this.next());
        this.content.querySelector(".play" ).addEventListener("click", () => this.play());
        this.content.querySelector(".reset").addEventListener("click", () => this.reset());
    }

    nextStep() {
        ++this.stepID;
        this.host.dispatchEvent( new CustomEvent("step", {detail: this.stepID}) );
    }


    cancelAutoPlay() {

        if(this.id === null)
            return false;

        clearInterval(this.id);
        this.id = null;
        return true;
    }

    prev() {
        const newStepID = this.stepID - 1;
        this.reset();
        while(this.stepID !== newStepID)
            this.nextStep();
    }
    next() {
        this.cancelAutoPlay();
        this.nextStep();
    }
    reset() {
        this.cancelAutoPlay();
        this.stepID = 0;
        this.host.dispatchEvent( new CustomEvent("reset") );
    }
    play() {

        if( this.cancelAutoPlay() )
            return;
        this.id = setInterval( () => this.nextStep(), +(this.attrs.speed ?? 500) );
    }
}

LISS.define("anim-player", AnimPlayer)