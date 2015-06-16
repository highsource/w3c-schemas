if (typeof module !== 'undefined' && module.exports) {
    module.exports.Atom_1_0         = require('./lib/Atom_1_0'        ).Atom_1_0        ;
    module.exports.WS_Addr_1_0_Core = require('./lib/WS_Addr_1_0_Core').WS_Addr_1_0_Core;
    module.exports.XHTML_1_0_Strict = require('./lib/XHTML_1_0_Strict').XHTML_1_0_Strict;
    module.exports.XLink_1_0        = require('./lib/XLink_1_0'       ).XLink_1_0       ;
    module.exports.XSD_1_0          = require('./lib/XSD_1_0'         ).XSD_1_0         ;
} else {
    // Browser context
    // You may include the modules by hand
    console.warn('w3c-schemas in a browser context, you may include the modules by hand');
}