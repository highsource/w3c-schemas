var XMLDSig_1_1_Module_Factory = function () {
  var XMLDSig_1_1 = {
    n: 'XMLDSig_1_1',
    dens: 'http:\/\/www.w3.org\/2009\/xmldsig11#',
    tis: [{
        ln: 'FieldIDType',
        ps: [{
            n: 'prime',
            rq: true,
            en: 'Prime',
            ti: '.PrimeFieldParamsType'
          }, {
            n: 'tnB',
            rq: true,
            en: 'TnB',
            ti: '.TnBFieldParamsType'
          }, {
            n: 'pnB',
            rq: true,
            en: 'PnB',
            ti: '.PnBFieldParamsType'
          }, {
            n: 'gnB',
            rq: true,
            en: 'GnB',
            ti: '.CharTwoFieldParamsType'
          }, {
            n: 'any',
            rq: true,
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'X509DigestType',
        ps: [{
            n: 'value',
            ti: 'Base64Binary',
            t: 'v'
          }, {
            n: 'algorithm',
            rq: true,
            an: {
              lp: 'Algorithm'
            },
            t: 'a'
          }]
      }, {
        ln: 'ECKeyValueType',
        ps: [{
            n: 'ecParameters',
            rq: true,
            en: 'ECParameters',
            ti: '.ECParametersType'
          }, {
            n: 'namedCurve',
            rq: true,
            en: 'NamedCurve',
            ti: '.NamedCurveType'
          }, {
            n: 'publicKey',
            rq: true,
            en: 'PublicKey',
            ti: 'Base64Binary'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'Id'
            },
            t: 'a'
          }]
      }, {
        ln: 'NamedCurveType',
        ps: [{
            n: 'uri',
            rq: true,
            an: {
              lp: 'URI'
            },
            t: 'a'
          }]
      }, {
        ln: 'KeyInfoReferenceType',
        ps: [{
            n: 'uri',
            rq: true,
            an: {
              lp: 'URI'
            },
            t: 'a'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'Id'
            },
            t: 'a'
          }]
      }, {
        ln: 'PnBFieldParamsType',
        bti: '.CharTwoFieldParamsType',
        ps: [{
            n: 'k1',
            rq: true,
            en: 'K1',
            ti: 'PositiveInteger'
          }, {
            n: 'k2',
            rq: true,
            en: 'K2',
            ti: 'PositiveInteger'
          }, {
            n: 'k3',
            rq: true,
            en: 'K3',
            ti: 'PositiveInteger'
          }]
      }, {
        ln: 'CharTwoFieldParamsType',
        ps: [{
            n: 'm',
            rq: true,
            en: 'M',
            ti: 'PositiveInteger'
          }]
      }, {
        ln: 'TnBFieldParamsType',
        bti: '.CharTwoFieldParamsType',
        ps: [{
            n: 'k',
            rq: true,
            en: 'K',
            ti: 'PositiveInteger'
          }]
      }, {
        ln: 'CurveType',
        ps: [{
            n: 'a',
            rq: true,
            en: 'A',
            ti: 'Base64Binary'
          }, {
            n: 'b',
            rq: true,
            en: 'B',
            ti: 'Base64Binary'
          }]
      }, {
        ln: 'ECParametersType',
        ps: [{
            n: 'fieldID',
            rq: true,
            en: 'FieldID',
            ti: '.FieldIDType'
          }, {
            n: 'curve',
            rq: true,
            en: 'Curve',
            ti: '.CurveType'
          }, {
            n: 'base',
            rq: true,
            en: 'Base',
            ti: 'Base64Binary'
          }, {
            n: 'order',
            rq: true,
            en: 'Order',
            ti: 'Base64Binary'
          }, {
            n: 'coFactor',
            en: 'CoFactor',
            ti: 'Integer'
          }, {
            n: 'validationData',
            en: 'ValidationData',
            ti: '.ECValidationDataType'
          }]
      }, {
        ln: 'DEREncodedKeyValueType',
        ps: [{
            n: 'value',
            ti: 'Base64Binary',
            t: 'v'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'Id'
            },
            t: 'a'
          }]
      }, {
        ln: 'PrimeFieldParamsType',
        ps: [{
            n: 'p',
            rq: true,
            en: 'P',
            ti: 'Base64Binary'
          }]
      }, {
        ln: 'ECValidationDataType',
        ps: [{
            n: 'seed',
            rq: true,
            ti: 'Base64Binary'
          }, {
            n: 'hashAlgorithm',
            rq: true,
            an: {
              lp: 'hashAlgorithm'
            },
            t: 'a'
          }]
      }],
    eis: [{
        en: 'DEREncodedKeyValue',
        ti: '.DEREncodedKeyValueType'
      }, {
        en: 'Prime',
        ti: '.PrimeFieldParamsType'
      }, {
        en: 'ECKeyValue',
        ti: '.ECKeyValueType'
      }, {
        en: 'KeyInfoReference',
        ti: '.KeyInfoReferenceType'
      }, {
        en: 'X509Digest',
        ti: '.X509DigestType'
      }, {
        en: 'TnB',
        ti: '.TnBFieldParamsType'
      }, {
        en: 'PnB',
        ti: '.PnBFieldParamsType'
      }, {
        en: 'GnB',
        ti: '.CharTwoFieldParamsType'
      }]
  };
  return {
    XMLDSig_1_1: XMLDSig_1_1
  };
};
if (typeof define === 'function' && define.amd) {
  define([], XMLDSig_1_1_Module_Factory);
}
else {
  var XMLDSig_1_1_Module = XMLDSig_1_1_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.XMLDSig_1_1 = XMLDSig_1_1_Module.XMLDSig_1_1;
  }
  else {
    var XMLDSig_1_1 = XMLDSig_1_1_Module.XMLDSig_1_1;
  }
}