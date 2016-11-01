var XInclude_1_0_Module_Factory = function () {
  var XInclude_1_0 = {
    n: 'XInclude_1_0',
    dens: 'http:\/\/www.w3.org\/2001\/XInclude',
    tis: [{
        ln: 'IncludeType',
        tn: 'includeType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            col: true,
            en: 'fallback',
            ti: '.FallbackType',
            t: 'er'
          }, {
            n: 'href',
            an: {
              lp: 'href'
            },
            t: 'a'
          }, {
            n: 'parse',
            ti: 'Token',
            an: {
              lp: 'parse'
            },
            t: 'a'
          }, {
            n: 'xpointer',
            an: {
              lp: 'xpointer'
            },
            t: 'a'
          }, {
            n: 'encoding',
            an: {
              lp: 'encoding'
            },
            t: 'a'
          }, {
            n: 'accept',
            an: {
              lp: 'accept'
            },
            t: 'a'
          }, {
            n: 'acceptLanguage',
            an: {
              lp: 'accept-language'
            },
            t: 'a'
          }]
      }, {
        ln: 'FallbackType',
        tn: 'fallbackType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            col: true,
            en: 'include',
            ti: '.IncludeType',
            t: 'er'
          }]
      }, {
        t: 'enum',
        ln: 'ParseType',
        bti: 'Token',
        vs: ['xml', 'text']
      }],
    eis: [{
        en: 'fallback',
        ti: '.FallbackType'
      }, {
        en: 'include',
        ti: '.IncludeType'
      }]
  };
  return {
    XInclude_1_0: XInclude_1_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], XInclude_1_0_Module_Factory);
}
else {
  var XInclude_1_0_Module = XInclude_1_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.XInclude_1_0 = XInclude_1_0_Module.XInclude_1_0;
  }
  else {
    var XInclude_1_0 = XInclude_1_0_Module.XInclude_1_0;
  }
}