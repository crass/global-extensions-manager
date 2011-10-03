
Global Extension Manager (GEM) manages global extensions (you don't say!).
The intent is that global extensions will be able to be managed for all
mozilla apps, but at first only Firefox will be supported.

*** NOTE: This project is unfinished and unuseable ***

Unfortunately, AddonRepository assumes that the product version and id to be
used to check for addon compatibility should be gotten from the app itself,
which would be GEM in this case.  However, we want to be able to specify at
runtime these values so we can search and download for many different apps
(Firefox, Thunderbird, Seamonkey, ...) and many different versions of each
(if we have multiple versions of Firefox for instance).  This necessitates
the modifying of AddonRepository.jsm.  It would be nice to be able to
override the path to that file, but manifest ovrrides are not allowed for
resource:// uris, loaded by extension.js.  So it seems the only other option
is to copy wholesale the extension.xul, extension.js, and AddonRepository.jsm,
which is how it is currently implemented.

Also, formatURL in Services.urlformatter (./toolkit/components/urlformatter/nsURLFormatter.js)
makes a similar assumption.  This is needed to set a custom version and not
use GEM's version.

TODO:
 * Code for detecting various mozilla installs, and thus their global extension
   path.
 * Modify AddonRepository to download extensions to specified directories.
