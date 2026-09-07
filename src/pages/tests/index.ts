import { defineWidget, View } from "MWL@2026/exports/Widget";

const W = defineWidget("my-widget",
    View({
        content: "<div id='toto'></div>"
    })
)


document.body.append( new W(), new W() );

console.warn("?", document.getElementById("toto"));