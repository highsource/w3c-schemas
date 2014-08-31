var Jsonix = require('jsonix').Jsonix;
var XLink_1_0 = require('../W3C-Schemas').XLink_1_0;
var roundtrip = require('./roundtrip').roundtrip;
var mappings = [XLink_1_0];
module.exports = {
	"Context": function(test) {
		var context = new Jsonix.Context(mappings);
		test.done();
        },
	"Example" : function(test) {
		var context =  new Jsonix.Context([XLink_1_0]);
		var unmarshaller = context.createUnmarshaller();
		unmarshaller.unmarshalFile("tests/locator-01.xml", function(result) {
			test.equal("label", result.value.label);
			test.done();
		});
	},
	"Roundtrips" : {
		"locator-01.xml" : function(test) {roundtrip(test, mappings, "tests/locator-01.xml");}
	}
};