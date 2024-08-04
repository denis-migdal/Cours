import "../../../../struct/menu.ts";

import "../../../../struct/calc/sheet.ts";

// 1

import LISS from "../../../../../libs/LISS";

const s_formula = await LISS.qs('#sheet_formula');

s_formula.getCells("A1:C1").toggleClass("bold")
                           .toggleClass("align-center")
                           .content = [
                                "Quantité",
                                "Prix unitaire",
                                "Prix total"
                           ];

function euros(value: number) {
    if(value === undefined)
        return '';
    return value.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }) + '€';
    //.toFixed(2) + '€';
}


s_formula.getCells("A2:A4").content = [23  , 12, 44];
s_formula.getCells("B2:B4").setFormat(euros).content = [0.2, 0.3, 0.4];

s_formula.getCells("C2:C4").content = [
    "=A2*B2",
    "=A3*B3",
    "=A4*B4"
];

/**/


const s_complex_formula = await LISS.qs('#sheet_complex_formula');

s_complex_formula.getCells("A1:C1").toggleClass("bold")
                           .toggleClass("align-center")
                           .content = [
                                "X",
                                "Y",
                                "Formule"
                           ];

s_complex_formula.getCells("A2:B4").content = [
    2, 4,
    1, 5,
    4, 6];

s_complex_formula.getCells("C2").content =
`= A2*B2
 +A3*B3
 +A4*B4`;

/**/

const s_types = await LISS.qs('#sheet_types');


s_types.getCells("A1:E1").toggleClass("bold")
                         .toggleClass("align-center")
                         .content = [
                            "Texte",
                            "Nombre",
                            "Booléen",
                            "Date",
                            "Formule"
                         ];

s_types.getCells("A2:E2").content = [
    "Hello",
    2.3,
    true,
    new Date(),
    "=B2+2"
]


const s_cursor = await LISS.qs('#sheet_cursor');

s_cursor.getCells("A1:H1").toggleClass("bold", true)
.toggleClass("align-center", true).content = "*";
s_cursor.getCells("A4:H4").toggleClass("bold", true)
.toggleClass("align-center", true).content = "*";

s_cursor.getCells("D1:E4").toggleClass("bold", true)
.toggleClass("align-center", true).content = "*";

s_cursor.getCells("A1:A4").toggleClass("bold", true)
.toggleClass("align-center", true).content = "*";
s_cursor.getCells("H1:H4", true).toggleClass("bold", true)
.toggleClass("align-center", true).content = "*";


// test
const c = `
<table id="un">
    <tbody>
        <tr><td>XXX</td></tr>
    </tbody>
</table>`;

const css = `
    td:not([contenteditable]) {
        user-select: none;
    }
`;

class X extends LISS({
    content: c, css
}) {
    constructor() {
        super();

        const td = this.content.querySelector<HTMLElement>('#un td')!;
        td.toggleAttribute('contenteditable');
        td.focus();
        td.textContent = "YYY";
    }
}

LISS.define('test-test', X);