W3C Schemas
===========

Jsonix mappings for W3C Schemas:

* XLink_1_0

Usage:

````javascript

var XLink_1_0 = require('W3C-Schemas').XLink_1_0;

var context =  new Jsonix.Context([XLink_1_0]);
var unmarshaller = context.createUnmarshaller();
unmarshaller.unmarshalFile("tests/locator-01.xml", function(result) {
	test.equal("label", result.value.label);
	test.done();
});
````
