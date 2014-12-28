var XLink_1_0_Module_Factory = function () {
  var XLink_1_0 = {
    n: 'XLink_1_0',
    dens: 'http:\/\/www.w3.org\/1999\/xlink',
    dans: 'http:\/\/www.w3.org\/1999\/xlink',
    tis: [{
        ln: 'Simple',
        ps: [{
            n: 'content',
            col: true,
            t: 'ae'
          }, {
            n: 'type',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            t: 'a'
          }, {
            n: 'actuate',
            t: 'a'
          }]
      }, {
        ln: 'ArcType',
        ps: [{
            n: 'locatorTitle',
            col: true,
            en: 'title',
            ti: '.TitleEltType'
          }, {
            n: 'type',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            t: 'a'
          }, {
            n: 'actuate',
            t: 'a'
          }, {
            n: 'from',
            t: 'a'
          }, {
            n: 'to',
            t: 'a'
          }]
      }, {
        ln: 'LocatorType',
        ps: [{
            n: 'locatorTitle',
            col: true,
            en: 'title',
            ti: '.TitleEltType'
          }, {
            n: 'type',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'label',
            t: 'a'
          }]
      }, {
        ln: 'TitleEltType',
        ps: [{
            n: 'content',
            col: true,
            t: 'ae'
          }, {
            n: 'type',
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'Extended',
        ps: [{
            n: 'extendedModel',
            col: true,
            etis: [{
                en: 'title',
                ti: '.TitleEltType'
              }, {
                en: 'resource',
                ti: '.ResourceType'
              }, {
                en: 'locator',
                ti: '.LocatorType'
              }, {
                en: 'arc',
                ti: '.ArcType'
              }],
            t: 'es'
          }, {
            n: 'type',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }]
      }, {
        ln: 'ResourceType',
        ps: [{
            n: 'content',
            col: true,
            t: 'ae'
          }, {
            n: 'type',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'label',
            t: 'a'
          }]
      }, {
        t: 'enum',
        ln: 'ActuateType',
        vs: ['onLoad', 'onRequest', 'other', 'none']
      }, {
        t: 'enum',
        ln: 'ShowType',
        vs: ['new', 'replace', 'embed', 'other', 'none']
      }, {
        t: 'enum',
        ln: 'TypeType',
        vs: ['simple', 'extended', 'title', 'resource', 'locator', 'arc']
      }],
    eis: [{
        en: 'locator',
        ti: '.LocatorType'
      }, {
        en: 'arc',
        ti: '.ArcType'
      }, {
        en: 'resource',
        ti: '.ResourceType'
      }, {
        en: 'title',
        ti: '.TitleEltType'
      }]
  };
  return {
    XLink_1_0: XLink_1_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], XLink_1_0_Module_Factory);
}
else {
  var XLink_1_0_Module = XLink_1_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.XLink_1_0 = XLink_1_0_Module.XLink_1_0;
  }
  else {
    var XLink_1_0 = XLink_1_0_Module.XLink_1_0;
  }
}