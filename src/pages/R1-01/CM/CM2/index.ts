import LISS from "../../../../../libs/LISS";
import "../../../../struct/menu.ts";

import "../../../../struct/calc/sheet.ts";
import "../../../../struct/calc/toolbar.ts";
import { CalcSheet } from "struct/calc/sheet.ts";
import { CalcToolbar } from "../../../../struct/calc/toolbar.ts";


const sheet_format_content = await LISS.qs<CalcSheet>('#sheet_format_content');

sheet_format_content.getCells("A1:F1").toggleClass("bold").toggleClass("align-center").content = [
    "Taille", "Gras", "Italique", "Souligné", "Couleur texte", "Couleur fond"
]

sheet_format_content.getCells("A2:F2").toggleClass("align-center").content = "A";
sheet_format_content.getCells("A2").format({font_size: '15pt'});
sheet_format_content.getCells("B2").format('bold');
sheet_format_content.getCells("C2").format('italic');
sheet_format_content.getCells("D2").format('underline');
sheet_format_content.getCells("E2").format({foreground_color: 'blue'});
sheet_format_content.getCells("F2").format({background_color: 'yellow'});

const sheet_toolbar_format_content = await LISS.qs<CalcToolbar>('#sheet_toolbar_format_content');
sheet_toolbar_format_content.syncTo(sheet_format_content);

