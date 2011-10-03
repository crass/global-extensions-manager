
const DEBUG = true;

function toOpenWindowByType(inType, uri) {
  var winopts = "chrome,extrachrome,menubar,resizable,scrollbars,status,toolbar";
  window.open(uri, "_blank", winopts);
}


function openVenkman() {
    //~ window.open("chrome://venkman/content/venkman.xul", "venkman", "chrome,width=600,height=500");
    //~ window.open("chrome://venkman/content", "venkman", "chrome,width=600,height=500");
    //~ window.openDialog("chrome://venkman/content");
    
    //~ window.open("chrome://venkman/content", "venkman", "chrome");
    start_venkman();
}


// open chrome list extension
function openChromeList() {
    startChromeList();
}

if (DEBUG)
    try {
        openVenkman();
        //~ openChromeList();
    } catch(e) { alert("Error: "+e); }
//~ sleep(10);
