var WSDL_SOAP_2_0_Module_Factory = function () {
  var WSDL_SOAP_2_0 = {
    n: 'WSDL_SOAP_2_0',
    dens: 'http:\/\/www.w3.org\/ns\/wsdl\/soap',
    deps: ['WSDL_2_0'],
    tis: [{
        ln: 'Module',
        tn: null,
        bti: 'WSDL_2_0.ExtensibleDocumentedType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'ref',
            rq: true,
            an: {
              lp: 'ref'
            },
            t: 'a'
          }, {
            n: 'required',
            ti: 'Boolean',
            an: {
              lp: 'required'
            },
            t: 'a'
          }]
      }, {
        ln: 'Header',
        tn: null,
        bti: 'WSDL_2_0.ExtensibleDocumentedType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'element',
            rq: true,
            ti: 'QName',
            an: {
              lp: 'element'
            },
            t: 'a'
          }, {
            n: 'mustUnderstand',
            ti: 'Boolean',
            an: {
              lp: 'mustUnderstand'
            },
            t: 'a'
          }, {
            n: 'required',
            ti: 'Boolean',
            an: {
              lp: 'required'
            },
            t: 'a'
          }]
      }, {
        t: 'enum',
        ln: 'TokenAny',
        bti: 'Token',
        vs: ['#any']
      }],
    eis: [{
        en: 'module',
        ti: '.Module'
      }, {
        en: 'header',
        ti: '.Header'
      }]
  };
  return {
    WSDL_SOAP_2_0: WSDL_SOAP_2_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], WSDL_SOAP_2_0_Module_Factory);
}
else {
  var WSDL_SOAP_2_0_Module = WSDL_SOAP_2_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.WSDL_SOAP_2_0 = WSDL_SOAP_2_0_Module.WSDL_SOAP_2_0;
  }
  else {
    var WSDL_SOAP_2_0 = WSDL_SOAP_2_0_Module.WSDL_SOAP_2_0;
  }
}