// better : https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/downloads/download
// https://stackoverflow.com/questions/13405129/javascript-create-and-save-file

export function download(data: any, filename: string, type: string = "plain/text") {
    const file = new Blob([data], {type});
    const a   = document.createElement("a");
    const url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);  
    }, 0); 
}