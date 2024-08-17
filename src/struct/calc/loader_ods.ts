import { CalcSheet } from "./sheet";

const JSZip = require("jszip");

export async function load(target: CalcSheet, file: string|ArrayBuffer, sheet: string = "Feuille1") {

    if( typeof file === "string")
        file = await (await fetch(file)).arrayBuffer();

    const zip = new JSZip();
    await zip.loadAsync(file);

    const parser = new DOMParser();
    const content = await zip.file("content.xml").async("string");

    const xml = parser.parseFromString(content, "text/xml");

    const tables = [...xml.querySelectorAll('table')];

    const table = tables.find( e => e.getAttribute("table:name") === sheet)!;
    let rows = table.querySelectorAll("table-row");

    let nb_cols = 1;
    for(let row of rows)
        if( row.children.length > nb_cols)
            nb_cols = row.children.length;

    target.resize(rows.length, nb_cols);
    
    for(let i = 0; i < rows.length; ++i)
        for(let j = 0; j < rows[i].children.length; ++j) {
            const cell = rows[i].children[j];
            let content: string|Date = cell.textContent!;
            if( cell.hasAttribute("table:formula")) {
                content = cell.getAttribute("table:formula")!;
                content = content.slice(3).replaceAll('[.', '').replaceAll(']', '');
            } else if( cell.getAttribute("office:value-type") === "date" ) {
                content = new Date( cell.getAttribute("office:date-value")! );
            }

            const range = target.getRange([i+1,j+1]);
            range.content = content;

            //TODO: handle styles...
            if( cell.hasAttribute('table:style-name') ) {
                const style = [...xml.querySelectorAll("style")].filter( (e) => e.getAttribute("style:name") === cell.getAttribute('table:style-name') )[0];
                
                if( style.hasAttribute('style:data-style-name') )
                    continue;

                let format: Record<string, any> = {};

                for(let prop of style.children ) {


                    if( prop.hasAttribute('fo:font-weight') )
                        format.bold = true;
                    if( prop.hasAttribute('fo:text-align') )
                        format[`align_${prop.getAttribute('fo:text-align')}`] = true;
                }

                range.format(format);
            }
        }

    /*
    "styles.xml"
    "content.xml"
    */
/*
    xmlDoc = parser.parseFromString(text,"text/xml");*/

}