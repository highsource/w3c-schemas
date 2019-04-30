var XMLDSig_Core_1_1_Module_Factory = function () {
  var XMLDSig_Core_1_1 = {
    n: 'XMLDSig_Core_1_1',
    dens: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
    tis: [{
        ln: 'SignedInfoType',
        ps: [{
            n: 'canonicalizationMethod',
            rq: true,
            en: 'CanonicalizationMethod',
            ti: '.CanonicalizationMethodType'
          }, {
            n: 'signatureMethod',
            rq: true,
            en: 'SignatureMethod',
            ti: '.SignatureMethodType'
          }, {
            n: 'reference',
            rq: true,
            col: true,
            en: 'Reference',
            ti: '.ReferenceType'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'Id'
            },
            t: 'a'
          }]
      }, {
        ln: 'SignatureType',
        ps: [{
            n: 'signedInfo',
            rq: true,
            en: 'SignedInfo',
            ti: '.SignedInfoType'
          }, {
            n: 'signatureValue',
            rq: true,
            en: 'SignatureValue',
            ti: '.SignatureValueType'
          }, {
            n: 'keyInfo',
            en: 'KeyInfo',
            ti: '.KeyInfoType'
          }, {
            n: 'object',
            mno: 0,
            col: true,
            en: 'Object',
            ti: '.ObjectType'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'Id'
            },
            t: 'a'
          }]
      }, {
        ln: 'SignatureValueType',
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
        ln: 'X509DataType',
        ps: [{
            n: 'x509IssuerSerialOrX509SKIOrX509SubjectName',
            rq: true,
            col: true,
            mx: false,
            etis: [{
                en: 'X509SKI',
                ti: 'Base64Binary'
              }, {
                en: 'X509SubjectName'
              }, {
                en: 'X509CRL',
                ti: 'Base64Binary'
              }, {
                en: 'X509IssuerSerial',
                ti: '.X509IssuerSerialType'
              }, {
                en: 'X509Certificate',
                ti: 'Base64Binary'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'SPKIDataType',
        ps: [{
            n: 'spkiSexpAndAny',
            rq: true,
            col: true,
            mx: false,
            en: 'SPKISexp',
            ti: 'Base64Binary',
            t: 'er'
          }]
      }, {
        ln: 'DSAKeyValueType',
        ps: [{
            n: 'p',
            rq: true,
            en: 'P',
            ti: 'Base64Binary'
          }, {
            n: 'q',
            rq: true,
            en: 'Q',
            ti: 'Base64Binary'
          }, {
            n: 'g',
            en: 'G',
            ti: 'Base64Binary'
          }, {
            n: 'y',
            rq: true,
            en: 'Y',
            ti: 'Base64Binary'
          }, {
            n: 'j',
            en: 'J',
            ti: 'Base64Binary'
          }, {
            n: 'seed',
            rq: true,
            en: 'Seed',
            ti: 'Base64Binary'
          }, {
            n: 'pgenCounter',
            rq: true,
            en: 'PgenCounter',
            ti: 'Base64Binary'
          }]
      }, {
        ln: 'ObjectType',
        ps: [{
            n: 'content',
            col: true,
            t: 'ae'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'Id'
            },
            t: 'a'
          }, {
            n: 'mimeType',
            an: {
              lp: 'MimeType'
            },
            t: 'a'
          }, {
            n: 'encoding',
            an: {
              lp: 'Encoding'
            },
            t: 'a'
          }]
      }, {
        ln: 'SignaturePropertyType',
        ps: [{
            n: 'content',
            col: true,
            t: 'ae'
          }, {
            n: 'target',
            rq: true,
            an: {
              lp: 'Target'
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
        ln: 'SignaturePropertiesType',
        ps: [{
            n: 'signatureProperty',
            rq: true,
            col: true,
            en: 'SignatureProperty',
            ti: '.SignaturePropertyType'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'Id'
            },
            t: 'a'
          }]
      }, {
        ln: 'TransformsType',
        ps: [{
            n: 'transform',
            rq: true,
            col: true,
            en: 'Transform',
            ti: '.TransformType'
          }]
      }, {
        ln: 'ReferenceType',
        ps: [{
            n: 'transforms',
            en: 'Transforms',
            ti: '.TransformsType'
          }, {
            n: 'digestMethod',
            rq: true,
            en: 'DigestMethod',
            ti: '.DigestMethodType'
          }, {
            n: 'digestValue',
            rq: true,
            en: 'DigestValue',
            ti: 'Base64Binary'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'Id'
            },
            t: 'a'
          }, {
            n: 'uri',
            an: {
              lp: 'URI'
            },
            t: 'a'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }]
      }, {
        ln: 'SignatureMethodType',
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            en: 'HMACOutputLength',
            ti: 'Integer',
            t: 'er'
          }, {
            n: 'algorithm',
            rq: true,
            an: {
              lp: 'Algorithm'
            },
            t: 'a'
          }]
      }, {
        ln: 'RetrievalMethodType',
        ps: [{
            n: 'transforms',
            en: 'Transforms',
            ti: '.TransformsType'
          }, {
            n: 'uri',
            an: {
              lp: 'URI'
            },
            t: 'a'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }]
      }, {
        ln: 'TransformType',
        ps: [{
            n: 'content',
            col: true,
            en: 'XPath',
            t: 'er'
          }, {
            n: 'algorithm',
            rq: true,
            an: {
              lp: 'Algorithm'
            },
            t: 'a'
          }]
      }, {
        ln: 'CanonicalizationMethodType',
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            t: 'ae'
          }, {
            n: 'algorithm',
            rq: true,
            an: {
              lp: 'Algorithm'
            },
            t: 'a'
          }]
      }, {
        ln: 'DigestMethodType',
        ps: [{
            n: 'content',
            col: true,
            t: 'ae'
          }, {
            n: 'algorithm',
            rq: true,
            an: {
              lp: 'Algorithm'
            },
            t: 'a'
          }]
      }, {
        ln: 'KeyInfoType',
        ps: [{
            n: 'content',
            col: true,
            etis: [{
                en: 'X509Data',
                ti: '.X509DataType'
              }, {
                en: 'SPKIData',
                ti: '.SPKIDataType'
              }, {
                en: 'KeyValue',
                ti: '.KeyValueType'
              }, {
                en: 'RetrievalMethod',
                ti: '.RetrievalMethodType'
              }, {
                en: 'PGPData',
                ti: '.PGPDataType'
              }, {
                en: 'MgmtData'
              }, {
                en: 'KeyName'
              }],
            t: 'ers'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'Id'
            },
            t: 'a'
          }]
      }, {
        ln: 'PGPDataType',
        ps: [{
            n: 'content',
            rq: true,
            col: true,
            mx: false,
            etis: [{
                en: 'PGPKeyID',
                ti: 'Base64Binary'
              }, {
                en: 'PGPKeyPacket',
                ti: 'Base64Binary'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'X509IssuerSerialType',
        ps: [{
            n: 'x509IssuerName',
            rq: true,
            en: 'X509IssuerName'
          }, {
            n: 'x509SerialNumber',
            rq: true,
            en: 'X509SerialNumber',
            ti: 'Integer'
          }]
      }, {
        ln: 'KeyValueType',
        ps: [{
            n: 'content',
            col: true,
            etis: [{
                en: 'DSAKeyValue',
                ti: '.DSAKeyValueType'
              }, {
                en: 'RSAKeyValue',
                ti: '.RSAKeyValueType'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'RSAKeyValueType',
        ps: [{
            n: 'modulus',
            rq: true,
            en: 'Modulus',
            ti: 'Base64Binary'
          }, {
            n: 'exponent',
            rq: true,
            en: 'Exponent',
            ti: 'Base64Binary'
          }]
      }, {
        ln: 'ManifestType',
        ps: [{
            n: 'reference',
            rq: true,
            col: true,
            en: 'Reference',
            ti: '.ReferenceType'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'Id'
            },
            t: 'a'
          }]
      }],
    eis: [{
        en: 'PGPKeyID',
        ti: 'Base64Binary',
        sc: '.PGPDataType'
      }, {
        en: 'Manifest',
        ti: '.ManifestType'
      }, {
        en: 'Reference',
        ti: '.ReferenceType'
      }, {
        en: 'PGPKeyPacket',
        ti: 'Base64Binary',
        sc: '.PGPDataType'
      }, {
        en: 'CanonicalizationMethod',
        ti: '.CanonicalizationMethodType'
      }, {
        en: 'PGPData',
        ti: '.PGPDataType'
      }, {
        en: 'SignatureProperties',
        ti: '.SignaturePropertiesType'
      }, {
        en: 'X509SKI',
        ti: 'Base64Binary',
        sc: '.X509DataType'
      }, {
        en: 'Object',
        ti: '.ObjectType'
      }, {
        en: 'MgmtData'
      }, {
        en: 'SPKISexp',
        ti: 'Base64Binary',
        sc: '.SPKIDataType'
      }, {
        en: 'DigestValue',
        ti: 'Base64Binary'
      }, {
        en: 'X509CRL',
        ti: 'Base64Binary',
        sc: '.X509DataType'
      }, {
        en: 'SignatureProperty',
        ti: '.SignaturePropertyType'
      }, {
        en: 'DigestMethod',
        ti: '.DigestMethodType'
      }, {
        en: 'KeyInfo',
        ti: '.KeyInfoType'
      }, {
        en: 'SignatureValue',
        ti: '.SignatureValueType'
      }, {
        en: 'DSAKeyValue',
        ti: '.DSAKeyValueType'
      }, {
        en: 'X509IssuerSerial',
        ti: '.X509IssuerSerialType',
        sc: '.X509DataType'
      }, {
        en: 'X509Certificate',
        ti: 'Base64Binary',
        sc: '.X509DataType'
      }, {
        en: 'RetrievalMethod',
        ti: '.RetrievalMethodType'
      }, {
        en: 'SPKIData',
        ti: '.SPKIDataType'
      }, {
        en: 'SignatureMethod',
        ti: '.SignatureMethodType'
      }, {
        en: 'Transform',
        ti: '.TransformType'
      }, {
        en: 'KeyValue',
        ti: '.KeyValueType'
      }, {
        en: 'Signature',
        ti: '.SignatureType'
      }, {
        en: 'X509SubjectName',
        sc: '.X509DataType'
      }, {
        en: 'SignedInfo',
        ti: '.SignedInfoType'
      }, {
        en: 'KeyName'
      }, {
        en: 'Transforms',
        ti: '.TransformsType'
      }, {
        en: 'HMACOutputLength',
        ti: 'Integer',
        sc: '.SignatureMethodType'
      }, {
        en: 'RSAKeyValue',
        ti: '.RSAKeyValueType'
      }, {
        en: 'XPath',
        sc: '.TransformType'
      }, {
        en: 'X509Data',
        ti: '.X509DataType'
      }]
  };
  return {
    XMLDSig_Core_1_1: XMLDSig_Core_1_1
  };
};
if (typeof define === 'function' && define.amd) {
  define([], XMLDSig_Core_1_1_Module_Factory);
}
else {
  var XMLDSig_Core_1_1_Module = XMLDSig_Core_1_1_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.XMLDSig_Core_1_1 = XMLDSig_Core_1_1_Module.XMLDSig_Core_1_1;
  }
  else {
    var XMLDSig_Core_1_1 = XMLDSig_Core_1_1_Module.XMLDSig_Core_1_1;
  }
}