import LISS from "../../../../../libs/LISS";
import "../../../../struct/menu.ts";

import "../../../../struct/calc/sheet.ts";
import "../../../../struct/calc/toolbar.ts";
import { CalcSheet } from "struct/calc/sheet.ts";
import { CalcToolbar } from "../../../../struct/calc/toolbar.ts";
import { Formats } from "struct/calc/format.ts";
import { load } from "struct/calc/loader_ods.ts";


{
    const sheet = await LISS.qs<CalcSheet>('#sheet_test');

    await load(sheet, "../../../../assets/tableur/test.ods");
}

const sheet_format_content = await LISS.qs<CalcSheet>('#sheet_format_content');

sheet_format_content.getCells("A1:F1").format("bold", "align_center").content = [
    "Taille", "Gras", "Italique", "Souligné", "Couleur texte", "Couleur fond"
]

sheet_format_content.getCells("A2:F2").format("align_center").content = "A";
sheet_format_content.getCells("A2").format({font_size: '15pt'});
sheet_format_content.getCells("B2").format('bold');
sheet_format_content.getCells("C2").format('italic');
sheet_format_content.getCells("D2").format('underline');
sheet_format_content.getCells("E2").format({foreground_color: 'blue'});
sheet_format_content.getCells("F2").format({background_color: 'yellow'});

const sheet_toolbar_format_content = await LISS.qs<CalcToolbar>('#sheet_toolbar_format_content');
sheet_toolbar_format_content.syncTo(sheet_format_content);
sheet_toolbar_format_content.disableAllExcept("font_size", "bold", "italic", "underline", "foreground_color", "background_color");

{
    const sheet_align = await LISS.qs<CalcSheet>('#sheet_align');

    sheet_align.getCells("B1:E1").format("bold", "align_center").content = [
        "Haut", "Milieu", "Bas", "Ajuster"
    ]

    sheet_align.getCells("A2:A4").format("bold", "align_center", "valign_middle").content = [
        "Gauche", "Centre", "Droit"
    ]

    sheet_align.getCells("B2:D4").content = "A";
    sheet_align.getCells("B2:E2").format("align_left");
    sheet_align.getCells("B3:E3").format('align_center');
    sheet_align.getCells("B4:E4").format('align_right');
    sheet_align.getCells("B2:B4").format('valign_top');
    sheet_align.getCells("C2:C4").format('valign_middle');
    sheet_align.getCells("D2:D4").format('valign_bottom');

    sheet_align.getCells("E2:E4").format("ajuster").content = `AAAAAAAAAAAAAAAAAAAAAAAAAAAA`;

    const sheet_toolbar_align = await LISS.qs<CalcToolbar>('#sheet_toolbar_align');
    sheet_toolbar_align.syncTo(sheet_align);
    sheet_toolbar_align.disableAllExcept("align_left", "align_center", "align_right", "valign_top", "valign_middle", "valign_bottom", "ajuster");
}

{
    const sheet = await LISS.qs<CalcSheet>('#sheet_format');

    sheet.getCells("B1:D1").format("bold", "align_center").content = [
        "Monnaie", "Pourcent", "Nombre"
    ];

    sheet.getCells("A2:A4").format("bold", "align_center").content = [
        "Normal", "+1 decimal", "-1 decimal"
    ];

    sheet.getCells("B2:D4").content = 1;
    sheet.getCells("B2:B4").format(Formats.euros);
    sheet.getCells("C2:C4").format(Formats.pourcent);
    sheet.getCells("D2:D4").format(Formats.number);

    sheet.getCells("B3:D3").format({precision: 3});
    sheet.getCells("B4:D4").format({precision: 1});

    const sheet_toolbar = await LISS.qs<CalcToolbar>('#sheet_toolbar_format');
    sheet_toolbar.syncTo(sheet);
    sheet_toolbar.disableAllExcept("format_monnaie", "format_pourcent", "format_nb", "format_zero_p1", "format_zero_m1");
}

{
    const sheet = await LISS.qs<CalcSheet>('#sheet_bordures');

    sheet.getCells('B2').format({
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

    sheet.getCells("A1:B1").format("bold", "align_center").content = [
        "Gauche", "Droite"
    ];

    sheet.getCells('A2:B5').content = "A";
    sheet.getCells('A2:A5').format("align_left");
    sheet.getCells('B2:B5').format("align_right");

    sheet.getCells('A3:B3').format({indent: 1});
    sheet.getCells('A4:B4').format({indent: 2});
    sheet.getCells('A5:B5').format({indent: 3});

    const sheet_toolbar = await LISS.qs<CalcToolbar>('#sheet_toolbar_retraits');
    sheet_toolbar.syncTo(sheet);
    sheet_toolbar.disableAllExcept("retrait_p1", "retrait_m1");
}


{
    const sheet = await LISS.qs<CalcSheet>('#sheet_fusion');

    sheet.getCells('B2').format({
        span: [2,2],
        align_center: true,
        valign_middle: true
    }).content = "A";

    const sheet_toolbar = await LISS.qs<CalcToolbar>('#sheet_toolbar_fusion');
    sheet_toolbar.syncTo(sheet);
    sheet_toolbar.disableAllExcept("merge_center", "merge", "unmerge");
}