var Jsonix = require('jsonix').Jsonix;
var XMLDSig_Core_1_1 = require('../../../w3c-schemas').XMLDSig_Core_1_1;
var XMLDSig_1_1 = require('../../../w3c-schemas').XMLDSig_1_1;
var XMLDSig_2_0 = require('../../../w3c-schemas').XMLDSig_2_0;
var roundtrips = require('../../roundtrip').roundtrips;
var mappings = [XMLDSig_Core_1_1, XMLDSig_1_1, XMLDSig_2_0];
module.exports = {
	"Context": function(test) {
		var context = new Jsonix.Context(mappings);
		test.done();
        },
	"Example" : function(test) {
		var context =  new Jsonix.Context([XMLDSig_Core_1_1, XMLDSig_1_1, XMLDSig_2_0]);
		var unmarshaller = context.createUnmarshaller();
		unmarshaller.unmarshalFile("tests/XMLDSig/2.0/signature-example-rsa.xml", function(result) {
			test.equal(970849928, result.value.keyInfo.content[1].value.x509IssuerSerialOrX509SKIOrX509SubjectName[1].value.x509SerialNumber);
			// console.log(JSON.stringify(result.value.keyInfo, null, 3));
			test.done();
		});
	},
	"Roundtrips" : roundtrips(mappings, __dirname)
};