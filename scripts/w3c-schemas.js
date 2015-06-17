(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(['exports',
			'./lib/Atom_1_0',
			'./lib/WS_Addr_1_0_Core',
			'./lib/XHTML_1_0_Strict',
			'./lib/XLink_1_0',
			'./lib/XSD_1_0'
		], factory);
	} else if (typeof module === 'object' && typeof exports === 'object') {
		factory(exports,
			require('./lib/Atom_1_0'        ).Atom_1_0,
			require('./lib/WS_Addr_1_0_Core').WS_Addr_1_0_Core,
			require('./lib/XHTML_1_0_Strict').XHTML_1_0_Strict,
			require('./lib/XLink_1_0'       ).XLink_1_0,
			require('./lib/XSD_1_0'         ).XSD_1_0);
	}
}(this,
function (exports, 
	Atom_1_0,
	WS_Addr_1_0_Core,
	XHTML_1_0_Strict,
	XLink_1_0,
	XSD_1_0)
{
	exports.Atom_1_0         = Atom_1_0        ;
	exports.WS_Addr_1_0_Core = WS_Addr_1_0_Core;
	exports.XHTML_1_0_Strict = XHTML_1_0_Strict;
	exports.XLink_1_0        = XLink_1_0       ;
	exports.XSD_1_0          = XSD_1_0         ;
}));

