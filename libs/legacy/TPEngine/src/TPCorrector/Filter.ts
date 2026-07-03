import { AbstractSignal } from "@LISS/src";

export default class Filter extends AbstractSignal<boolean[]> {

    #value: boolean[]|null = null;

    get value() {
        return this.#value;
    }

    includes(idx: number) {
        if( this.#value === null )
            return true;
        return this.#value[idx];
    }

    constructor() {

        super();

        // filter
        const updateFilter = () => {

            this.#value = [...document.querySelectorAll<HTMLInputElement>("#filter .students input")]
                    .map( e => e.checked);
            this.trigger();
        }

        const checkAll = document.querySelector<HTMLInputElement>("#filter > div > input")!;
        checkAll!.addEventListener('click', () => {
            for(let elem of document.querySelectorAll<HTMLInputElement>("#filter .students input") )
                elem.checked = checkAll.checked;

            updateFilter();
        });

        document.querySelector("#filter .students")!.addEventListener("click", (ev) => {
            const target = ev.target! as HTMLElement;
            if(target.tagName !== "INPUT")
                return;

            updateFilter();
        });
    }

    updateFilter(list: string[]) {

        const filter = document.querySelector('#filter .students')!;
        let options = [];
        for(let i = 0; i < list.length; ++i) {
            const label = list[i];

            const line = document.createElement('div');
            const check = document.createElement("input");
            (check as any).idx = i;
            check.setAttribute("type", "checkbox");
            check.checked = true;
            line.append(check, label);
            options.push(line);
        }
        
        filter.replaceChildren(...options);
    }
}