import { Signal } from "@LISS/src";

export default class Navigator extends Signal<number> {

    max: number = 0;

    prev() {
        let cur = this.value;
        if( cur === null || cur === 0)
            return;

        this.value = --cur;
    }

    next() {
        let cur = this.value;
        if( cur === null || cur === this.max - 1)
            return;

        this.value = ++cur;
    }
}