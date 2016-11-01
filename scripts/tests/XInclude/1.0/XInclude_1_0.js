var Jsonix = require('jsonix').Jsonix;
var XInclude_1_0 = require('../../../w3c-schemas').XInclude_1_0;
var roundtrips = require('../../roundtrip').roundtrips;
var mappings = [XInclude_1_0];
module.exports = {
	"Context": function(test) {
		var context = new Jsonix.Context(mappings);
		test.done();
        },
	"Example" : function(test) {
		var context =  new Jsonix.Context([XInclude_1_0]);
		var unmarshaller = context.createUnmarshaller();
		unmarshaller.unmarshalFile("tests/XInclude/1.0/include-01.xml", function(result) {
			test.equal("something.xml", result.value.href);
			test.done();
		});
	},
	"Roundtrips" : roundtrips(mappings, __dirname)
};