var schemas = [
	"XLink_1_0",
	"Atom_1_0",
	"XSD_1_0",
	"XSD_1_0_Brief"
];
for (var index = 0; index < schemas.length; index++)
{
	var schema = schemas[index];
	module.exports[schema] = require('./lib/' + schema)[schema];
}
