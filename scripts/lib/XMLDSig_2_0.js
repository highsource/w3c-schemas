var XMLDSig_2_0_Module_Factory = function () {
  var XMLDSig_2_0 = {
    n: 'XMLDSig_2_0',
    dens: 'http:\/\/www.w3.org\/2010\/xmldsig2#',
    tis: [{
        ln: 'SelectionType',
        ps: [{
            n: 'any',
            mno: 0,
            col: true,
            mx: false,
            t: 'ae'
          }, {
            n: 'uri',
            rq: true,
            an: {
              lp: 'URI'
            },
            t: 'a'
          }, {
            n: 'algorithm',
            rq: true,
            an: {
              lp: 'Algorithm'
            },
            t: 'a'
          }]
      }, {
        ln: 'VerificationType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'anyOrQualifiedAttrOrUnqualifiedAttr',
            mno: 0,
            col: true,
            mx: false,
            etis: [{
                en: 'QualifiedAttr',
                ti: '.QualifiedAttrType'
              }, {
                en: 'UnqualifiedAttr',
                ti: '.UnqualifiedAttrType'
              }],
            t: 'ers'
          }, {
            n: 'type',
            rq: true,
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'digestDataLength',
            ti: 'NonNegativeInteger',
            an: {
              lp: 'DigestDataLength'
            },
            t: 'a'
          }, {
            n: 'positionAssertion',
            an: {
              lp: 'PositionAssertion'
            },
            t: 'a'
          }]
      }, {
        ln: 'UnqualifiedAttrType',
        ps: [{
            n: 'name',
            rq: true,
            ti: 'NCName',
            an: {
              lp: 'Name'
            },
            t: 'a'
          }, {
            n: 'parentName',
            rq: true,
            ti: 'NCName',
            an: {
              lp: 'ParentName'
            },
            t: 'a'
          }, {
            n: 'parentNS',
            an: {
              lp: 'ParentNS'
            },
            t: 'a'
          }]
      }, {
        ln: 'QualifiedAttrType',
        ps: [{
            n: 'name',
            rq: true,
            ti: 'NCName',
            an: {
              lp: 'Name'
            },
            t: 'a'
          }, {
            n: 'ns',
            rq: true,
            an: {
              lp: 'NS'
            },
            t: 'a'
          }]
      }, {
        ln: 'VerificationsType',
        ps: [{
            n: 'verification',
            rq: true,
            col: true,
            en: 'Verification',
            ti: '.VerificationType'
          }]
      }],
    eis: [{
        en: 'IncludedXPath'
      }, {
        en: 'UnqualifiedAttr',
        ti: '.UnqualifiedAttrType'
      }, {
        en: 'Verification',
        ti: '.VerificationType'
      }, {
        en: 'Selection',
        ti: '.SelectionType'
      }, {
        en: 'QualifiedAttr',
        ti: '.QualifiedAttrType'
      }, {
        en: 'ByteRange'
      }, {
        en: 'ExcludedXPath'
      }, {
        en: 'Verifications',
        ti: '.VerificationsType'
      }]
  };
  return {
    XMLDSig_2_0: XMLDSig_2_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], XMLDSig_2_0_Module_Factory);
}
else {
  var XMLDSig_2_0_Module = XMLDSig_2_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.XMLDSig_2_0 = XMLDSig_2_0_Module.XMLDSig_2_0;
  }
  else {
    var XMLDSig_2_0 = XMLDSig_2_0_Module.XMLDSig_2_0;
  }
}