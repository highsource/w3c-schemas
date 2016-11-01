# W3C Schemas

W3C Schemas project provides [JAXB](https://jaxb.java.net/) and [Jsonix](https://github.com/highsource/jsonix) bindings for some of the XML Schemas defined by W3C.

This allows converting between XML (conforming to one of these schemas) and Java objects in Java or JSON in JavaScript.

Supports the following schemas:

* `Atom_1_0`
* `WS_Addr_1_0_Core`
* `WSDL_2_0`
  * `WSDL_HTTP_2_0`
  * `WSDL_RPC_2_0`
  * `WSDL_SOAP_2_0`
* `XHTML_1_0_Strict`
* `XLink_1_0`
* `XSD_1_0`

# JavaScript Example

```javascript

var XLink_1_0 = require('w3c-schemas').XLink_1_0;

var context =  new Jsonix.Context([XLink_1_0]);
var unmarshaller = context.createUnmarshaller();
unmarshaller.unmarshalFile("tests/locator-01.xml", function(result) {
	test.equal("label", result.value.label);
	test.done();
});
```
