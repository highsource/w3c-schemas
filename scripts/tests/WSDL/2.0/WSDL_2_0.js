var Jsonix = require('jsonix').Jsonix;
var WSDL_2_0 = require('../../../w3c-schemas').WSDL_2_0;
var XSD_1_0 = require('../../../w3c-schemas').XSD_1_0;
var roundtrips = require('../../roundtrip').roundtrips;
var mappings = [WSDL_2_0, XSD_1_0];
module.exports = {
	"Context": function(test) {
		var context = new Jsonix.Context(mappings);
		test.done();
        },
	"Example" : function(test) {
		var context =  new Jsonix.Context([WSDL_2_0, XSD_1_0]);
		var unmarshaller = context.createUnmarshaller();
		unmarshaller.unmarshalFile("tests/WSDL/2.0/wsdl-01.xml", function(result) {
		        // console.log(JSON.stringify(result, null, 2));
			test.equal("TicketAgent.xsd", result.value.types[0].any[0].value.schemaLocation);
			test.equal("xsTicketAgent:listFlightsRequest", result.value._interface[0].operation[0].input[0].element);
			test.done();
		});
	},
//	"Roundtrips" : roundtrips(mappings, __dirname)
};