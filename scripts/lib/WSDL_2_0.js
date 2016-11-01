var WSDL_2_0_Module_Factory = function () {
  var WSDL_2_0 = {
    n: 'WSDL_2_0',
    dens: 'http:\/\/www.w3.org\/ns\/wsdl',
    tis: [{
        ln: 'ExtensibleDocumentedType',
        bti: '.DocumentedType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }]
      }, {
        ln: 'MessageRefFaultType',
        bti: '.ExtensibleDocumentedType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            mx: false,
            t: 'ae'
          }, {
            n: 'ref',
            rq: true,
            ti: 'QName',
            an: {
              lp: 'ref'
            },
            t: 'a'
          }, {
            n: 'messageLabel',
            ti: 'NCName',
            an: {
              lp: 'messageLabel'
            },
            t: 'a'
          }]
      }, {
        ln: 'BindingOperationType',
        bti: '.ExtensibleDocumentedType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'infault',
            col: true,
            ti: '.BindingOperationFaultType'
          }, {
            n: 'output',
            col: true,
            ti: '.BindingOperationMessageType'
          }, {
            n: 'input',
            col: true,
            ti: '.BindingOperationMessageType'
          }, {
            n: 'outfault',
            col: true,
            ti: '.BindingOperationFaultType'
          }, {
            n: 'ref',
            rq: true,
            ti: 'QName',
            an: {
              lp: 'ref'
            },
            t: 'a'
          }]
      }, {
        ln: 'MessageRefType',
        bti: '.ExtensibleDocumentedType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            mx: false,
            t: 'ae'
          }, {
            n: 'messageLabel',
            ti: 'NCName',
            an: {
              lp: 'messageLabel'
            },
            t: 'a'
          }, {
            n: 'element',
            an: {
              lp: 'element'
            },
            t: 'a'
          }]
      }, {
        ln: 'ImportType',
        bti: '.ExtensibleDocumentedType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            dom: false,
            mx: false,
            t: 'ae'
          }, {
            n: 'namespace',
            rq: true,
            an: {
              lp: 'namespace'
            },
            t: 'a'
          }, {
            n: 'location',
            an: {
              lp: 'location'
            },
            t: 'a'
          }]
      }, {
        ln: 'InterfaceFaultType',
        bti: '.ExtensibleDocumentedType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            mx: false,
            t: 'ae'
          }, {
            n: 'name',
            rq: true,
            ti: 'NCName',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'element',
            an: {
              lp: 'element'
            },
            t: 'a'
          }]
      }, {
        ln: 'BindingFaultType',
        bti: '.ExtensibleDocumentedType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            mx: false,
            t: 'ae'
          }, {
            n: 'ref',
            rq: true,
            ti: 'QName',
            an: {
              lp: 'ref'
            },
            t: 'a'
          }]
      }, {
        ln: 'BindingOperationMessageType',
        bti: '.ExtensibleDocumentedType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            mx: false,
            t: 'ae'
          }, {
            n: 'messageLabel',
            ti: 'NCName',
            an: {
              lp: 'messageLabel'
            },
            t: 'a'
          }]
      }, {
        ln: 'EndpointType',
        bti: '.ExtensibleDocumentedType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            mx: false,
            t: 'ae'
          }, {
            n: 'name',
            rq: true,
            ti: 'NCName',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'binding',
            rq: true,
            ti: 'QName',
            an: {
              lp: 'binding'
            },
            t: 'a'
          }, {
            n: 'address',
            an: {
              lp: 'address'
            },
            t: 'a'
          }]
      }, {
        ln: 'InterfaceType',
        bti: '.ExtensibleDocumentedType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'fault',
            col: true,
            ti: '.InterfaceFaultType'
          }, {
            n: 'operation',
            col: true,
            ti: '.InterfaceOperationType'
          }, {
            n: 'name',
            rq: true,
            ti: 'NCName',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: '_extends',
            ti: {
              t: 'l',
              bti: 'QName'
            },
            an: {
              lp: 'extends'
            },
            t: 'a'
          }, {
            n: 'styleDefault',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'styleDefault'
            },
            t: 'a'
          }]
      }, {
        ln: 'ExtensionElement',
        ps: [{
            n: 'required',
            ti: 'Boolean',
            an: {
              lp: 'required',
              ns: 'http:\/\/www.w3.org\/ns\/wsdl'
            },
            t: 'a'
          }]
      }, {
        ln: 'BindingType',
        bti: '.ExtensibleDocumentedType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'operation',
            col: true,
            ti: '.BindingOperationType'
          }, {
            n: 'fault',
            col: true,
            ti: '.BindingFaultType'
          }, {
            n: 'name',
            rq: true,
            ti: 'NCName',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'type',
            rq: true,
            an: {
              lp: 'type'
            },
            t: 'a'
          }, {
            n: '_interface',
            ti: 'QName',
            an: {
              lp: 'interface'
            },
            t: 'a'
          }]
      }, {
        ln: 'DescriptionType',
        bti: '.ExtensibleDocumentedType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'include',
            col: true,
            ti: '.IncludeType'
          }, {
            n: 'types',
            col: true,
            ti: '.TypesType'
          }, {
            n: 'binding',
            col: true,
            ti: '.BindingType'
          }, {
            n: '_import',
            col: true,
            en: 'import',
            ti: '.ImportType'
          }, {
            n: '_interface',
            col: true,
            en: 'interface',
            ti: '.InterfaceType'
          }, {
            n: 'service',
            col: true,
            ti: '.ServiceType'
          }, {
            n: 'targetNamespace',
            rq: true,
            an: {
              lp: 'targetNamespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'InterfaceOperationType',
        bti: '.ExtensibleDocumentedType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'outfault',
            col: true,
            ti: '.MessageRefFaultType'
          }, {
            n: 'input',
            col: true,
            ti: '.MessageRefType'
          }, {
            n: 'infault',
            col: true,
            ti: '.MessageRefFaultType'
          }, {
            n: 'output',
            col: true,
            ti: '.MessageRefType'
          }, {
            n: 'name',
            rq: true,
            ti: 'NCName',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'pattern',
            an: {
              lp: 'pattern'
            },
            t: 'a'
          }, {
            n: 'safe',
            ti: 'Boolean',
            an: {
              lp: 'safe'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }]
      }, {
        ln: 'DocumentedType',
        ps: [{
            n: 'documentation',
            mno: 0,
            col: true,
            ti: '.DocumentationType'
          }]
      }, {
        ln: 'IncludeType',
        bti: '.ExtensibleDocumentedType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            dom: false,
            mx: false,
            t: 'ae'
          }, {
            n: 'location',
            rq: true,
            an: {
              lp: 'location'
            },
            t: 'a'
          }]
      }, {
        ln: 'ServiceType',
        bti: '.ExtensibleDocumentedType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'endpointOrAny',
            rq: true,
            col: true,
            mx: false,
            en: 'endpoint',
            ti: '.EndpointType',
            t: 'er'
          }, {
            n: 'name',
            rq: true,
            ti: 'NCName',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: '_interface',
            rq: true,
            ti: 'QName',
            an: {
              lp: 'interface'
            },
            t: 'a'
          }]
      }, {
        ln: 'TypesType',
        bti: '.ExtensibleDocumentedType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            dom: false,
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'DocumentationType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            col: true,
            t: 'ae'
          }]
      }, {
        ln: 'BindingOperationFaultType',
        bti: '.ExtensibleDocumentedType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            mx: false,
            t: 'ae'
          }, {
            n: 'ref',
            rq: true,
            ti: 'QName',
            an: {
              lp: 'ref'
            },
            t: 'a'
          }, {
            n: 'messageLabel',
            ti: 'NCName',
            an: {
              lp: 'messageLabel'
            },
            t: 'a'
          }]
      }],
    eis: [{
        en: 'service',
        ti: '.ServiceType'
      }, {
        en: 'operation',
        ti: '.BindingOperationType',
        sc: '.BindingType'
      }, {
        en: 'description',
        ti: '.DescriptionType'
      }, {
        en: 'interface',
        ti: '.InterfaceType'
      }, {
        en: 'include',
        ti: '.IncludeType'
      }, {
        en: 'input',
        ti: '.BindingOperationMessageType',
        sc: '.BindingOperationType'
      }, {
        en: 'output',
        ti: '.BindingOperationMessageType',
        sc: '.BindingOperationType'
      }, {
        en: 'input',
        ti: '.MessageRefType',
        sc: '.InterfaceOperationType'
      }, {
        en: 'binding',
        ti: '.BindingType'
      }, {
        en: 'infault',
        ti: '.MessageRefFaultType',
        sc: '.InterfaceOperationType'
      }, {
        en: 'operation',
        ti: '.InterfaceOperationType',
        sc: '.InterfaceType'
      }, {
        en: 'infault',
        ti: '.BindingOperationFaultType',
        sc: '.BindingOperationType'
      }, {
        en: 'fault',
        ti: '.BindingFaultType',
        sc: '.BindingType'
      }, {
        en: 'outfault',
        ti: '.BindingOperationFaultType',
        sc: '.BindingOperationType'
      }, {
        en: 'import',
        ti: '.ImportType'
      }, {
        en: 'fault',
        ti: '.InterfaceFaultType',
        sc: '.InterfaceType'
      }, {
        en: 'endpoint',
        ti: '.EndpointType'
      }, {
        en: 'output',
        ti: '.MessageRefType',
        sc: '.InterfaceOperationType'
      }, {
        en: 'outfault',
        ti: '.MessageRefFaultType',
        sc: '.InterfaceOperationType'
      }, {
        en: 'documentation',
        ti: '.DocumentationType'
      }, {
        en: 'types',
        ti: '.TypesType'
      }]
  };
  return {
    WSDL_2_0: WSDL_2_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], WSDL_2_0_Module_Factory);
}
else {
  var WSDL_2_0_Module = WSDL_2_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.WSDL_2_0 = WSDL_2_0_Module.WSDL_2_0;
  }
  else {
    var WSDL_2_0 = WSDL_2_0_Module.WSDL_2_0;
  }
}