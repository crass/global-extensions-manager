
Cu = Components.utils;

Cu.import("resource://gre/modules/Services.jsm");
Cu.import("resource://gre/modules/Services.jsm");


function mainInit() {
    var version = Services.prefs.getCharPref('globalextensionmanager.searchVersion');
    document.getElementById("app-version").value = version;
}

// *** We can't overwrite the import function to hook it.
//~ IMPORT_HOOKS = {};
//~ try {
    //~ IMPORT_HOOKS = {};
    //~ var _Components_utils_import = Components.utils.import;
    //~ Components.utils.import = function (url) {
        //~ for (source in IMPORT_HOOKS) {
            //~ if (source == url) {
                //~ arguments[0] = IMPORT_HOOKS[source];
            //~ }
        //~ }
        //~ return _Components_utils_import(arguments);
    //~ }
//~ } catch(e) {
    //~ alert("Caught this: "+e);
//~ }

//~ IMPORT_HOOKS["resource://gre/modules/AddonRepository.jsm"] = "chrome://globalextensionmanager/content/AddonRepository.jsm";

try {
Cu.import("resource://globalextensionmanager/AddonRepository.jsm");
//~ alert(Services.appinfo+" || "+Services.appinfo.OS);
AddonRepository._appinfo = {
    ID: "{ec8030f7-c20a-464f-9b0e-13a3a9e97384}",
    version: "6.0",
    OS: Services.appinfo.OS
}
//~ alert();
SuF = Services.urlFormatter;
Services.urlFormatter
} catch(e) { alert("Error: "+e); }

