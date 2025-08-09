import "../../tp";

import "@Cours/components/WebCalc/CalcSheet";
import "@Cours/components/WebCalc/CalcToolbar";

import "@Cours/components/WebCalc/CalcSheetTP";
import "@Cours/components/WebCalc/CalcCellTP";
import { getInput, getOutput } from "@LISS/src";
import { File } from "@TPEngine/Questions/QFile";

const output = getOutput<File>(document.querySelector('q-file')!);
const sheets = [...document.querySelectorAll("tp-sheet")]
                    .map( e => getInput<string>(e) );

function onFileChange() {

    const value = output.value;

    if( value === null)
        return;

    for(let i = 0; i < sheets.length; ++i)
        sheets[i].value = value.content;
}

output.listen( onFileChange )
onFileChange();