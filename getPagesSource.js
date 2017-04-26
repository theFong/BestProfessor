function DOMtoString(document_root) {

    var search = document_root.getElementsByClassName("instr_alt1 col-xs-12 col-sm-12 col-md-1 col-lg-1");
    var names = ''
    console.log(search.length)
    for (var i = 0; i < search.length; i++) {
            if (!search[i].innerText.includes("Instructor:") && !(search[i].innerText == "")) {
                names += search[i].innerText+"\n";
            }
        }    
    return names;
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});