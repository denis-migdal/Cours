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

function add(row: number,col:number) {
    return s_formula.getCells(row, 1).content[0] + s_formula.getCells(row, 2).content[0];
}

add.toString = (row: number,col:number) => `=A${row}+B${row}`;

s_formula.getCells("C2:C4").setRO().formula = add;
//s_formula.getCells("C2").content = () => s_formula.getCells('A2').content + s_formula.getCells('B2').content;



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