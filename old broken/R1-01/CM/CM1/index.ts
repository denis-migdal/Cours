import "@Cours/struct/menu";
import "@Cours/struct/calc/sheet";

// 1

import LISS from "../../../LISS/index";
import { Formats } from "@Cours/struct/calc/format";

const s_formula = await LISS.qs('#sheet_formula');

s_formula.getRange("A1:C1").format("bold", "align_center")
                           .content = [
                                "Quantité",
                                "Prix unitaire",
                                "Prix total"
                           ];

s_formula.getRange("A2:A4").content = [23  , 12, 44];
s_formula.getRange("B2:B4").format(Formats.euros).content = [0.2, 0.3, 0.4];

s_formula.getRange("C2:C4").format(Formats.euros).content = [
    "=A2*B2",
    "=A3*B3",
    "=A4*B4"
];

/**/


const s_complex_formula = await LISS.qs('#sheet_complex_formula');

s_complex_formula.getRange("A1:C1").format("bold", "align_center")
                           .content = [
                                "X",
                                "Y",
                                "Formule"
                           ];

s_complex_formula.getRange("A2:B4").content = [
    2, 4,
    1, 5,
    4, 6];

s_complex_formula.getRange("C2").content =
`= A2*B2
 +A3*B3
 +A4*B4`;

/**/

const s_types = await LISS.qs('#sheet_types');


s_types.getRange("A1:E1").format("bold", "align_center")
                         .content = [
                            "Texte",
                            "Nombre",
                            "Booléen",
                            "Date",
                            "Formule"
                         ];

s_types.getRange("A2:E2").content = [
    "Hello",
    2.3,
    true,
    new Date(),
    "=B2+2"
]


const s_cursor = await LISS.qs('#sheet_cursor');

s_cursor.getRange("A1:H1").format("bold", "align_center").content = "*";
s_cursor.getRange("A4:H4").format("bold", "align_center").content = "*";

s_cursor.getRange("D1:E4").format("bold", "align_center").content = "*";

s_cursor.getRange("A1:A4").format("bold", "align_center").content = "*";
s_cursor.getRange("H1:H4", true).format("bold", "align_center").content = "*";


const s_$formula = [
    await LISS.qs('#sheet____formula'),
    await LISS.qs('#sheet_x__formula'),
    await LISS.qs('#sheet__x_formula'),
    await LISS.qs('#sheet_xx_formula')
]

for(let i = 0; i < s_$formula.length; ++i) {
    const s_$form = s_$formula[i];

    s_$form.getRange("A1:D1").format("bold")
                             .content = [0, 1, 2, 3];

    s_$form.getRange("A2:A4").format("bold")
                             .content = [1, 2, 3];

    let ref = "=A1";
    if( i === 1)
        ref = "=$A1";
    if( i === 2)
        ref = "=A$1";
    if( i === 3)
        ref = "=$A$1";

    s_$form.getRange("B2").content = ref;

    s_$form.getRange("A1:D4").format("align_center")
}

const sheet_recopie_motivation = await LISS.qs('#sheet_recopie_motivation');

sheet_recopie_motivation.getRange("A1:D4").format("align_center").content = [
    "Conso/jour", "Crayons", "Gommes", "Total (jour)",
    "01/01"  , 2, 3, "=B2+C2", 
    "02/01"  , 4, 1, "=C3+C3", 
    "Total (prod)"  , "=B2+B3", "=C2+C3", "=D2+D3", 
];
sheet_recopie_motivation.getRange("A1:D1").format("bold");
sheet_recopie_motivation.getRange("A2:A4").format("bold");

const sheet_recopie_motivation_empty = await LISS.qs('#sheet_recopie_motivation_empty');

sheet_recopie_motivation_empty.getRange("A1:D4").format("align_center").content = [
    "Conso/jour", "Crayons", "Gommes", "Total (jour)",
    "01/01"  , 2, 3, undefined, 
    "02/01"  , 4, 1, undefined, 
    "Total (prod)"  , undefined, undefined, undefined
];
sheet_recopie_motivation_empty.getRange("A1:D1").format("bold");
sheet_recopie_motivation_empty.getRange("A2:A4").format("bold");

const sheet_recopie_incr = await LISS.qs('#sheet_recopie_incr');

sheet_recopie_incr.getRange('A1:A2').content = [ 1, new Date() ];


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