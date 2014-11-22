var schemas = [
	"Atom_1_0",
	"WS_Addr_1_0_Core",
	"XHTML_1_0_Strict",
	"XLink_1_0",
	"XSD_1_0"
];
for (var index = 0; index < schemas.length; index++)
{
	var schema = schemas[index];
	module.exports[schema] = require('./lib/' + schema)[schema];
}
