var WS_Addr_1_0_Core_Module_Factory = function () {
  var WS_Addr_1_0_Core = {
    n: 'WS_Addr_1_0_Core',
    dens: 'http:\/\/www.w3.org\/2005\/08\/addressing',
    tis: [{
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
        ln: 'AttributedURIType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'value',
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
        ln: 'AttributedAnyType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'any',
            mx: false,
            t: 'ae'
          }]
      }],
    eis: [{
        en: 'FaultTo',
        ti: '.EndpointReferenceType'
      }, {
        en: 'Action',
        ti: '.AttributedURIType'
      }, {
        en: 'ProblemIRI',
        ti: '.AttributedURIType'
      }, {
        en: 'ProblemAction',
        ti: '.ProblemActionType'
      }, {
        en: 'RetryAfter',
        ti: '.AttributedUnsignedLongType'
      }, {
        en: 'ProblemHeaderQName',
        ti: '.AttributedQNameType'
      }, {
        en: 'Metadata',
        ti: '.MetadataType'
      }, {
        en: 'EndpointReference',
        ti: '.EndpointReferenceType'
      }, {
        en: 'MessageID',
        ti: '.AttributedURIType'
      }, {
        en: 'RelatesTo',
        ti: '.RelatesToType'
      }, {
        en: 'From',
        ti: '.EndpointReferenceType'
      }, {
        en: 'ReplyTo',
        ti: '.EndpointReferenceType'
      }, {
        en: 'To',
        ti: '.AttributedURIType'
      }, {
        en: 'ProblemHeader',
        ti: '.AttributedAnyType'
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