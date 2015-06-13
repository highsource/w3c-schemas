var WS_Addr_1_0_Core_Module_Factory = function () {
  var WS_Addr_1_0_Core = {
    n: 'WS_Addr_1_0_Core',
    dens: 'http:\/\/www.w3.org\/2005\/08\/addressing',
    tis: [{
        ln: 'AttributedUnsignedLongType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'value',
            ti: 'Integer',
            t: 'v'
          }]
      }, {
        ln: 'ProblemActionType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'action',
            en: 'Action',
            ti: '.AttributedURIType'
          }, {
            n: 'soapAction',
            en: 'SoapAction'
          }]
      }, {
        ln: 'AttributedQNameType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'value',
            ti: 'QName',
            t: 'v'
          }]
      }, {
        ln: 'MetadataType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'any',
            col: true,
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'RelatesToType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'value',
            t: 'v'
          }, {
            n: 'relationshipType',
            an: {
              lp: 'RelationshipType'
            },
            t: 'a'
          }]
      }, {
        ln: 'ReferenceParametersType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'any',
            col: true,
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'AttributedURIType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'value',
            t: 'v'
          }]
      }, {
        ln: 'AttributedAnyType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'any',
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'EndpointReferenceType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'address',
            en: 'Address',
            ti: '.AttributedURIType'
          }, {
            n: 'referenceParameters',
            en: 'ReferenceParameters',
            ti: '.ReferenceParametersType'
          }, {
            n: 'metadata',
            en: 'Metadata',
            ti: '.MetadataType'
          }, {
            n: 'any',
            col: true,
            mx: false,
            t: 'ae'
          }]
      }],
    eis: [{
        en: 'From',
        ti: '.EndpointReferenceType'
      }, {
        en: 'ReplyTo',
        ti: '.EndpointReferenceType'
      }, {
        en: 'FaultTo',
        ti: '.EndpointReferenceType'
      }, {
        en: 'RelatesTo',
        ti: '.RelatesToType'
      }, {
        en: 'MessageID',
        ti: '.AttributedURIType'
      }, {
        en: 'RetryAfter',
        ti: '.AttributedUnsignedLongType'
      }, {
        en: 'ProblemAction',
        ti: '.ProblemActionType'
      }, {
        en: 'Action',
        ti: '.AttributedURIType'
      }, {
        en: 'Metadata',
        ti: '.MetadataType'
      }, {
        en: 'ProblemHeader',
        ti: '.AttributedAnyType'
      }, {
        en: 'ProblemIRI',
        ti: '.AttributedURIType'
      }, {
        en: 'ProblemHeaderQName',
        ti: '.AttributedQNameType'
      }, {
        en: 'To',
        ti: '.AttributedURIType'
      }, {
        en: 'EndpointReference',
        ti: '.EndpointReferenceType'
      }]
  };
  return {
    WS_Addr_1_0_Core: WS_Addr_1_0_Core
  };
};
if (typeof define === 'function' && define.amd) {
  define([], WS_Addr_1_0_Core_Module_Factory);
}
else {
  var WS_Addr_1_0_Core_Module = WS_Addr_1_0_Core_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.WS_Addr_1_0_Core = WS_Addr_1_0_Core_Module.WS_Addr_1_0_Core;
  }
  else {
    var WS_Addr_1_0_Core = WS_Addr_1_0_Core_Module.WS_Addr_1_0_Core;
  }
}