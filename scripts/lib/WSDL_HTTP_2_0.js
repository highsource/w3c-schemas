var WSDL_HTTP_2_0_Module_Factory = function () {
  var WSDL_HTTP_2_0 = {
    n: 'WSDL_HTTP_2_0',
    dens: 'http:\/\/www.w3.org\/ns\/wsdl\/http',
    deps: ['WSDL_2_0'],
    tis: [{
        ln: 'Header',
        tn: null,
        bti: 'WSDL_2_0.ExtensibleDocumentedType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'type',
            rq: true,
            ti: 'QName',
            an: {
              lp: 'type'
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
      }],
    eis: [{
        en: 'header',
        ti: '.Header'
      }]
  };
  return {
    WSDL_HTTP_2_0: WSDL_HTTP_2_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], WSDL_HTTP_2_0_Module_Factory);
}
else {
  var WSDL_HTTP_2_0_Module = WSDL_HTTP_2_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.WSDL_HTTP_2_0 = WSDL_HTTP_2_0_Module.WSDL_HTTP_2_0;
  }
  else {
    var WSDL_HTTP_2_0 = WSDL_HTTP_2_0_Module.WSDL_HTTP_2_0;
  }
}