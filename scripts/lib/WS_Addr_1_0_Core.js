var WS_Addr_1_0_Core_Module_Factory = function () {
  var WS_Addr_1_0_Core = {
    n: 'WS_Addr_1_0_Core',
    dens: 'http:\/\/www.w3.org\/2005\/08\/addressing',
    tis: [{
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
        ln: 'MetadataType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'any',
            mno: 0,
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
            rq: true,
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
            rq: true,
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
            mno: 0,
            col: true,
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'ReferenceParametersType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'any',
            mno: 0,
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
      }],
    eis: [{
        en: 'ProblemHeaderQName',
        ti: '.AttributedQNameType'
      }, {
        en: 'Action',
        ti: '.AttributedURIType'
      }, {
        en: 'ProblemHeader',
        ti: '.AttributedAnyType'
      }, {
        en: 'ProblemIRI',
        ti: '.AttributedURIType'
      }, {
        en: 'ReplyTo',
        ti: '.EndpointReferenceType'
      }, {
        en: 'Metadata',
        ti: '.MetadataType'
      }, {
        en: 'RetryAfter',
        ti: '.AttributedUnsignedLongType'
      }, {
        en: 'From',
        ti: '.EndpointReferenceType'
      }, {
        en: 'RelatesTo',
        ti: '.RelatesToType'
      }, {
        en: 'FaultTo',
        ti: '.EndpointReferenceType'
      }, {
        en: 'EndpointReference',
        ti: '.EndpointReferenceType'
      }, {
        en: 'To',
        ti: '.AttributedURIType'
      }, {
        en: 'ProblemAction',
        ti: '.ProblemActionType'
      }, {
        en: 'MessageID',
        ti: '.AttributedURIType'
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