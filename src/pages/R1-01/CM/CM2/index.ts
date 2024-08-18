import LISS from "LISS";
import "struct/menu.ts";

import "struct/calc/sheet.ts";
import "struct/calc/toolbar.ts";
import { CalcSheet } from "struct/calc/sheet.ts";
import { CalcToolbar } from "struct/calc/toolbar.ts";
import { Formats } from "struct/calc/format.ts";

const sheet_format_content = await LISS.qs<CalcSheet>('#sheet_format_content');

sheet_format_content.getRange("A1:F1").format("bold", "align_center").content = [
    "Taille", "Gras", "Italique", "Souligné", "Couleur texte", "Couleur fond"
]

sheet_format_content.getRange("A2:F2").format("align_center").content = "A";
sheet_format_content.getRange("A2").format({font_size: '15pt'});
sheet_format_content.getRange("B2").format('bold');
sheet_format_content.getRange("C2").format('italic');
sheet_format_content.getRange("D2").format('underline');
sheet_format_content.getRange("E2").format({foreground_color: 'blue'});
sheet_format_content.getRange("F2").format({background_color: 'yellow'});

const sheet_toolbar_format_content = await LISS.qs<CalcToolbar>('#sheet_toolbar_format_content');
sheet_toolbar_format_content.syncTo(sheet_format_content);
sheet_toolbar_format_content.disableAllExcept("font_size", "bold", "italic", "underline", "foreground_color", "background_color");

{
    const sheet_align = await LISS.qs<CalcSheet>('#sheet_align');

    sheet_align.getRange("B1:E1").format("bold", "align_center").content = [
        "Haut", "Milieu", "Bas", "Ajuster"
    ]

    sheet_align.getRange("A2:A4").format("bold", "align_center", "valign_middle").content = [
        "Gauche", "Centre", "Droit"
    ]

    sheet_align.getRange("B2:D4").content = "A";
    sheet_align.getRange("B2:E2").format("align_left");
    sheet_align.getRange("B3:E3").format('align_center');
    sheet_align.getRange("B4:E4").format('align_right');
    sheet_align.getRange("B2:B4").format('valign_top');
    sheet_align.getRange("C2:C4").format('valign_middle');
    sheet_align.getRange("D2:D4").format('valign_bottom');

    sheet_align.getRange("E2:E4").format("ajuster").content = `AAAAAAAAAAAAAAAAAAAAAAAAAAAA`;

    const sheet_toolbar_align = await LISS.qs<CalcToolbar>('#sheet_toolbar_align');
    sheet_toolbar_align.syncTo(sheet_align);
    sheet_toolbar_align.disableAllExcept("align_left", "align_center", "align_right", "valign_top", "valign_middle", "valign_bottom", "ajuster");
}

{
    const sheet = await LISS.qs<CalcSheet>('#sheet_format');

    sheet.getRange("A1:E1").format("bold", "align_center").content = [
        1, "Monnaie", "Pourcent", "Nombre", "Date"
    ];

    sheet.getRange("A2:A4").format("bold", "align_center").content = [
        "Normal", "+1 decimal", "-1 decimal"
    ];

    sheet.getRange("B2:E4").content = "=$A$1";
    sheet.getRange("B2:B4").format(Formats.euros);
    sheet.getRange("C2:C4").format(Formats.pourcent);
    sheet.getRange("D2:D4").format(Formats.number);
    sheet.getRange("E2:E4").format(Formats.date);

    sheet.getRange("B3:E3").format({precision: 3});
    sheet.getRange("B4:E4").format({precision: 1});

    const sheet_toolbar = await LISS.qs<CalcToolbar>('#sheet_toolbar_format');
    sheet_toolbar.syncTo(sheet);
    sheet_toolbar.disableAllExcept("format_monnaie", "format_pourcent", "format_nb", "format_date", "format_zero_p1", "format_zero_m1");
}

{
    const sheet = await LISS.qs<CalcSheet>('#sheet_bordures');

    sheet.getRange('B2').format({
        border_top: true,
        border_bottom: true,
        border_left: true,
        border_right: true,
        border_color: 'red',
    })

    const sheet_toolbar = await LISS.qs<CalcToolbar>('#sheet_toolbar_bordures');
    sheet_toolbar.syncTo(sheet);
    sheet_toolbar.disableAllExcept("border", "border_color");
}


{
    const sheet = await LISS.qs<CalcSheet>('#sheet_retraits');

    sheet.getRange("A1:B1").format("bold", "align_center").content = [
        "Gauche", "Droite"
    ];

    sheet.getRange('A2:B5').content = "A";
    sheet.getRange('A2:A5').format("align_left");
    sheet.getRange('B2:B5').format("align_right");

    sheet.getRange('A3:B3').format({indent: 1});
    sheet.getRange('A4:B4').format({indent: 2});
    sheet.getRange('A5:B5').format({indent: 3});

    const sheet_toolbar = await LISS.qs<CalcToolbar>('#sheet_toolbar_retraits');
    sheet_toolbar.syncTo(sheet);
    sheet_toolbar.disableAllExcept("retrait_p1", "retrait_m1");
}


{
    const sheet = await LISS.qs<CalcSheet>('#sheet_fusion');

    sheet.getRange('B2').format({
        span: [2,2],
        align_center: true,
        valign_middle: true
    }).content = "A";

    const sheet_toolbar = await LISS.qs<CalcToolbar>('#sheet_toolbar_fusion');
    sheet_toolbar.syncTo(sheet);
    sheet_toolbar.disableAllExcept("merge_center", "merge", "unmerge");
}