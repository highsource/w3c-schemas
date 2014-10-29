var XSD_1_0_Brief_Module_Factory = function () {
  var XSD_1_0 = {
    n: 'XSD_1_0',
    dens: 'http:\/\/www.w3.org\/2001\/XMLSchema',
    tis: [{
        ln: 'Documentation',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            col: true,
            t: 'ae'
          }, {
            n: 'source',
            an: {
              lp: 'source'
            },
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
        ln: 'LocalSimpleType',
        bti: '.SimpleType'
      }, {
        ln: 'Selector',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'xpath',
            an: {
              lp: 'xpath'
            },
            t: 'a'
          }]
      }, {
        ln: 'NarrowMaxMin',
        bti: '.LocalElement'
      }, {
        ln: 'ExtensionType',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'group',
            ti: '.GroupRef'
          }, {
            n: 'all',
            ti: '.All'
          }, {
            n: 'choice',
            ti: '.ExplicitGroup'
          }, {
            n: 'sequence',
            ti: '.ExplicitGroup'
          }, {
            n: 'attributeOrAttributeGroup',
            col: true,
            etis: [{
                en: 'attribute',
                ti: '.Attribute'
              }, {
                en: 'attributeGroup',
                ti: '.AttributeGroupRef'
              }],
            t: 'es'
          }, {
            n: 'anyAttribute',
            ti: '.Wildcard'
          }, {
            n: 'base',
            ti: 'QName',
            an: {
              lp: 'base'
            },
            t: 'a'
          }]
      }, {
        ln: 'Import',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'namespace',
            an: {
              lp: 'namespace'
            },
            t: 'a'
          }, {
            n: 'schemaLocation',
            an: {
              lp: 'schemaLocation'
            },
            t: 'a'
          }]
      }, {
        ln: 'RealGroup',
        bti: '.Group'
      }, {
        ln: 'Redefine',
        bti: '.OpenAttrs',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'annotationOrSimpleTypeOrComplexType',
            col: true,
            etis: [{
                en: 'annotation',
                ti: '.Annotation'
              }, {
                en: 'simpleType',
                ti: '.TopLevelSimpleType'
              }, {
                en: 'complexType',
                ti: '.TopLevelComplexType'
              }, {
                en: 'group',
                ti: '.NamedGroup'
              }, {
                en: 'attributeGroup',
                ti: '.NamedAttributeGroup'
              }],
            t: 'es'
          }, {
            n: 'schemaLocation',
            an: {
              lp: 'schemaLocation'
            },
            t: 'a'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }]
      }, {
        ln: 'NoFixedFacet',
        bti: '.Facet'
      }, {
        ln: 'All',
        bti: '.ExplicitGroup'
      }, {
        ln: 'Include',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'schemaLocation',
            an: {
              lp: 'schemaLocation'
            },
            t: 'a'
          }]
      }, {
        ln: 'Wildcard',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'namespace',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'namespace'
            },
            t: 'a'
          }, {
            n: 'processContents',
            an: {
              lp: 'processContents'
            },
            t: 'a'
          }]
      }, {
        ln: 'NamedGroup',
        bti: '.RealGroup'
      }, {
        ln: 'TopLevelElement',
        bti: '.Element'
      }, {
        ln: 'NumFacet',
        bti: '.Facet'
      }, {
        ln: 'Union',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'simpleType',
            col: true,
            ti: '.LocalSimpleType'
          }, {
            n: 'memberTypes',
            ti: {
              t: 'l',
              bti: 'QName'
            },
            an: {
              lp: 'memberTypes'
            },
            t: 'a'
          }]
      }, {
        ln: 'ComplexType',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'simpleContent',
            ti: '.SimpleContent'
          }, {
            n: 'complexContent',
            ti: '.ComplexContent'
          }, {
            n: 'group',
            ti: '.GroupRef'
          }, {
            n: 'all',
            ti: '.All'
          }, {
            n: 'choice',
            ti: '.ExplicitGroup'
          }, {
            n: 'sequence',
            ti: '.ExplicitGroup'
          }, {
            n: 'attributeOrAttributeGroup',
            col: true,
            etis: [{
                en: 'attribute',
                ti: '.Attribute'
              }, {
                en: 'attributeGroup',
                ti: '.AttributeGroupRef'
              }],
            t: 'es'
          }, {
            n: 'anyAttribute',
            ti: '.Wildcard'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'mixed',
            ti: 'Boolean',
            an: {
              lp: 'mixed'
            },
            t: 'a'
          }, {
            n: '_abstract',
            ti: 'Boolean',
            an: {
              lp: 'abstract'
            },
            t: 'a'
          }, {
            n: '_final',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'final'
            },
            t: 'a'
          }, {
            n: 'block',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'block'
            },
            t: 'a'
          }]
      }, {
        ln: 'Attribute',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'simpleType',
            ti: '.LocalSimpleType'
          }, {
            n: 'type',
            ti: 'QName',
            an: {
              lp: 'type'
            },
            t: 'a'
          }, {
            n: 'use',
            an: {
              lp: 'use'
            },
            t: 'a'
          }, {
            n: '_default',
            an: {
              lp: 'default'
            },
            t: 'a'
          }, {
            n: 'fixed',
            an: {
              lp: 'fixed'
            },
            t: 'a'
          }, {
            n: 'form',
            an: {
              lp: 'form'
            },
            t: 'a'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'ref',
            ti: 'QName',
            an: {
              lp: 'ref'
            },
            t: 'a'
          }]
      }, {
        ln: 'Annotated',
        bti: '.OpenAttrs',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'annotation',
            ti: '.Annotation'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }]
      }, {
        ln: 'Keyref',
        bti: '.Keybase',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'refer',
            ti: 'QName',
            an: {
              lp: 'refer'
            },
            t: 'a'
          }]
      }, {
        ln: 'SimpleExtensionType',
        bti: '.ExtensionType'
      }, {
        ln: 'RestrictionType',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'group',
            ti: '.GroupRef'
          }, {
            n: 'all',
            ti: '.All'
          }, {
            n: 'choice',
            ti: '.ExplicitGroup'
          }, {
            n: 'sequence',
            ti: '.ExplicitGroup'
          }, {
            n: 'simpleType',
            ti: '.LocalSimpleType'
          }, {
            n: 'facets',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            etis: [{
                en: 'maxExclusive',
                ti: '.Facet'
              }, {
                en: 'enumeration',
                ti: '.NoFixedFacet'
              }, {
                en: 'minLength',
                ti: '.NumFacet'
              }, {
                en: 'minExclusive',
                ti: '.Facet'
              }, {
                en: 'totalDigits',
                ti: '.TotalDigits'
              }, {
                en: 'fractionDigits',
                ti: '.NumFacet'
              }, {
                en: 'pattern',
                ti: '.Pattern'
              }, {
                en: 'length',
                ti: '.NumFacet'
              }, {
                en: 'maxLength',
                ti: '.NumFacet'
              }, {
                en: 'whiteSpace',
                ti: '.WhiteSpace'
              }, {
                en: 'minInclusive',
                ti: '.Facet'
              }, {
                en: 'maxInclusive',
                ti: '.Facet'
              }],
            t: 'ers'
          }, {
            n: 'attributeOrAttributeGroup',
            col: true,
            etis: [{
                en: 'attribute',
                ti: '.Attribute'
              }, {
                en: 'attributeGroup',
                ti: '.AttributeGroupRef'
              }],
            t: 'es'
          }, {
            n: 'anyAttribute',
            ti: '.Wildcard'
          }, {
            n: 'base',
            ti: 'QName',
            an: {
              lp: 'base'
            },
            t: 'a'
          }]
      }, {
        ln: 'Annotation',
        bti: '.OpenAttrs',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'appinfoOrDocumentation',
            col: true,
            etis: [{
                en: 'appinfo',
                ti: '.Appinfo'
              }, {
                en: 'documentation',
                ti: '.Documentation'
              }],
            t: 'es'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }]
      }, {
        ln: 'Pattern',
        bti: '.NoFixedFacet'
      }, {
        ln: 'ExplicitGroup',
        bti: '.Group'
      }, {
        ln: 'SimpleType',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'restriction',
            ti: '.Restriction'
          }, {
            n: 'list',
            ti: '.List'
          }, {
            n: 'union',
            ti: '.Union'
          }, {
            n: '_final',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'final'
            },
            t: 'a'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'Appinfo',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            col: true,
            t: 'ae'
          }, {
            n: 'source',
            an: {
              lp: 'source'
            },
            t: 'a'
          }]
      }, {
        ln: 'TopLevelAttribute',
        bti: '.Attribute'
      }, {
        ln: 'Schema',
        bti: '.OpenAttrs',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'includeOrImportOrRedefine',
            col: true,
            etis: [{
                en: 'include',
                ti: '.Include'
              }, {
                en: 'import',
                ti: '.Import'
              }, {
                en: 'redefine',
                ti: '.Redefine'
              }, {
                en: 'annotation',
                ti: '.Annotation'
              }],
            t: 'es'
          }, {
            n: 'simpleTypeOrComplexTypeOrGroup',
            col: true,
            etis: [{
                en: 'simpleType',
                ti: '.TopLevelSimpleType'
              }, {
                en: 'complexType',
                ti: '.TopLevelComplexType'
              }, {
                en: 'group',
                ti: '.NamedGroup'
              }, {
                en: 'attributeGroup',
                ti: '.NamedAttributeGroup'
              }, {
                en: 'element',
                ti: '.TopLevelElement'
              }, {
                en: 'attribute',
                ti: '.TopLevelAttribute'
              }, {
                en: 'notation',
                ti: '.Notation'
              }, {
                en: 'annotation',
                ti: '.Annotation'
              }],
            t: 'es'
          }, {
            n: 'targetNamespace',
            an: {
              lp: 'targetNamespace'
            },
            t: 'a'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'finalDefault',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'finalDefault'
            },
            t: 'a'
          }, {
            n: 'blockDefault',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'blockDefault'
            },
            t: 'a'
          }, {
            n: 'attributeFormDefault',
            an: {
              lp: 'attributeFormDefault'
            },
            t: 'a'
          }, {
            n: 'elementFormDefault',
            an: {
              lp: 'elementFormDefault'
            },
            t: 'a'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
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
        ln: 'SimpleExplicitGroup',
        bti: '.ExplicitGroup'
      }, {
        ln: 'Element',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'simpleType',
            ti: '.LocalSimpleType'
          }, {
            n: 'complexType',
            ti: '.LocalComplexType'
          }, {
            n: 'identityConstraint',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            etis: [{
                en: 'keyref',
                ti: '.Keyref'
              }, {
                en: 'key',
                ti: '.Keybase'
              }, {
                en: 'unique',
                ti: '.Keybase'
              }],
            t: 'ers'
          }, {
            n: 'type',
            ti: 'QName',
            an: {
              lp: 'type'
            },
            t: 'a'
          }, {
            n: 'substitutionGroup',
            ti: 'QName',
            an: {
              lp: 'substitutionGroup'
            },
            t: 'a'
          }, {
            n: '_default',
            an: {
              lp: 'default'
            },
            t: 'a'
          }, {
            n: 'fixed',
            an: {
              lp: 'fixed'
            },
            t: 'a'
          }, {
            n: 'nillable',
            ti: 'Boolean',
            an: {
              lp: 'nillable'
            },
            t: 'a'
          }, {
            n: '_abstract',
            ti: 'Boolean',
            an: {
              lp: 'abstract'
            },
            t: 'a'
          }, {
            n: '_final',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'final'
            },
            t: 'a'
          }, {
            n: 'block',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'block'
            },
            t: 'a'
          }, {
            n: 'form',
            an: {
              lp: 'form'
            },
            t: 'a'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'ref',
            ti: 'QName',
            an: {
              lp: 'ref'
            },
            t: 'a'
          }, {
            n: 'minOccurs',
            ti: 'Integer',
            an: {
              lp: 'minOccurs'
            },
            t: 'a'
          }, {
            n: 'maxOccurs',
            an: {
              lp: 'maxOccurs'
            },
            t: 'a'
          }]
      }, {
        ln: 'WhiteSpace',
        bti: '.Facet'
      }, {
        ln: 'List',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'simpleType',
            ti: '.LocalSimpleType'
          }, {
            n: 'itemType',
            ti: 'QName',
            an: {
              lp: 'itemType'
            },
            t: 'a'
          }]
      }, {
        ln: 'Any',
        bti: '.Wildcard',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'minOccurs',
            ti: 'Integer',
            an: {
              lp: 'minOccurs'
            },
            t: 'a'
          }, {
            n: 'maxOccurs',
            an: {
              lp: 'maxOccurs'
            },
            t: 'a'
          }]
      }, {
        ln: 'OpenAttrs',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }]
      }, {
        ln: 'SimpleContent',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'restriction',
            ti: '.SimpleRestrictionType'
          }, {
            n: 'extension',
            ti: '.SimpleExtensionType'
          }]
      }, {
        ln: 'Notation',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: '_public',
            an: {
              lp: 'public'
            },
            t: 'a'
          }, {
            n: 'system',
            an: {
              lp: 'system'
            },
            t: 'a'
          }]
      }, {
        ln: 'TotalDigits',
        bti: '.NumFacet'
      }, {
        ln: 'Restriction',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'simpleType',
            ti: '.LocalSimpleType'
          }, {
            n: 'facets',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            etis: [{
                en: 'maxExclusive',
                ti: '.Facet'
              }, {
                en: 'enumeration',
                ti: '.NoFixedFacet'
              }, {
                en: 'minLength',
                ti: '.NumFacet'
              }, {
                en: 'minExclusive',
                ti: '.Facet'
              }, {
                en: 'totalDigits',
                ti: '.TotalDigits'
              }, {
                en: 'fractionDigits',
                ti: '.NumFacet'
              }, {
                en: 'pattern',
                ti: '.Pattern'
              }, {
                en: 'length',
                ti: '.NumFacet'
              }, {
                en: 'maxLength',
                ti: '.NumFacet'
              }, {
                en: 'whiteSpace',
                ti: '.WhiteSpace'
              }, {
                en: 'minInclusive',
                ti: '.Facet'
              }, {
                en: 'maxInclusive',
                ti: '.Facet'
              }],
            t: 'ers'
          }, {
            n: 'base',
            ti: 'QName',
            an: {
              lp: 'base'
            },
            t: 'a'
          }]
      }, {
        ln: 'LocalComplexType',
        bti: '.ComplexType'
      }, {
        ln: 'NamedAttributeGroup',
        bti: '.AttributeGroup'
      }, {
        ln: 'TopLevelComplexType',
        bti: '.ComplexType'
      }, {
        ln: 'Field',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'xpath',
            an: {
              lp: 'xpath'
            },
            t: 'a'
          }]
      }, {
        ln: 'Keybase',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'selector',
            ti: '.Selector'
          }, {
            n: 'field',
            col: true,
            ti: '.Field'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'LocalElement',
        bti: '.Element'
      }, {
        ln: 'ComplexRestrictionType',
        bti: '.RestrictionType'
      }, {
        ln: 'AttributeGroupRef',
        bti: '.AttributeGroup'
      }, {
        ln: 'TopLevelSimpleType',
        bti: '.SimpleType'
      }, {
        ln: 'Group',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'particle',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            etis: [{
                en: 'sequence',
                ti: '.ExplicitGroup'
              }, {
                en: 'element',
                ti: '.LocalElement'
              }, {
                en: 'group',
                ti: '.GroupRef'
              }, {
                en: 'choice',
                ti: '.ExplicitGroup'
              }, {
                en: 'all',
                ti: '.All'
              }, {
                en: 'any',
                ti: '.Any'
              }],
            t: 'ers'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'ref',
            ti: 'QName',
            an: {
              lp: 'ref'
            },
            t: 'a'
          }, {
            n: 'minOccurs',
            ti: 'Integer',
            an: {
              lp: 'minOccurs'
            },
            t: 'a'
          }, {
            n: 'maxOccurs',
            an: {
              lp: 'maxOccurs'
            },
            t: 'a'
          }]
      }, {
        ln: 'AttributeGroup',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'attributeOrAttributeGroup',
            col: true,
            etis: [{
                en: 'attribute',
                ti: '.Attribute'
              }, {
                en: 'attributeGroup',
                ti: '.AttributeGroupRef'
              }],
            t: 'es'
          }, {
            n: 'anyAttribute',
            ti: '.Wildcard'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'ref',
            ti: 'QName',
            an: {
              lp: 'ref'
            },
            t: 'a'
          }]
      }, {
        ln: 'GroupRef',
        bti: '.RealGroup'
      }, {
        ln: 'Facet',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'value',
            an: {
              lp: 'value'
            },
            t: 'a'
          }, {
            n: 'fixed',
            ti: 'Boolean',
            an: {
              lp: 'fixed'
            },
            t: 'a'
          }]
      }, {
        ln: 'SimpleRestrictionType',
        bti: '.RestrictionType'
      }, {
        ln: 'ComplexContent',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'restriction',
            ti: '.ComplexRestrictionType'
          }, {
            n: 'extension',
            ti: '.ExtensionType'
          }, {
            n: 'mixed',
            ti: 'Boolean',
            an: {
              lp: 'mixed'
            },
            t: 'a'
          }]
      }, {
        t: 'enum',
        ln: 'DerivationControl',
        vs: ['substitution', 'extension', 'restriction', 'list', 'union']
      }, {
        t: 'enum',
        ln: 'ReducedDerivationControl',
        vs: ['extension', 'restriction']
      }, {
        t: 'enum',
        ln: 'TypeDerivationControl',
        vs: ['extension', 'restriction', 'list', 'union']
      }, {
        t: 'enum',
        ln: 'FormChoice',
        vs: ['qualified', 'unqualified']
      }],
    eis: [{
        en: 'minExclusive',
        ti: '.Facet'
      }, {
        en: 'restriction',
        ti: '.Restriction'
      }, {
        en: 'redefine',
        ti: '.Redefine'
      }, {
        en: 'selector',
        ti: '.Selector'
      }, {
        en: 'any',
        ti: '.Any'
      }, {
        en: 'all',
        ti: '.All'
      }, {
        en: 'simpleContent',
        ti: '.SimpleContent'
      }, {
        en: 'attributeGroup',
        ti: '.NamedAttributeGroup'
      }, {
        en: 'group',
        ti: '.GroupRef',
        sc: '.Group'
      }, {
        en: 'keyref',
        ti: '.Keyref'
      }, {
        en: 'group',
        ti: '.NamedGroup'
      }, {
        en: 'length',
        ti: '.NumFacet'
      }, {
        en: 'complexType',
        ti: '.TopLevelComplexType'
      }, {
        en: 'choice',
        ti: '.ExplicitGroup'
      }, {
        en: 'fractionDigits',
        ti: '.NumFacet'
      }, {
        en: 'enumeration',
        ti: '.NoFixedFacet'
      }, {
        en: 'documentation',
        ti: '.Documentation'
      }, {
        en: 'totalDigits',
        ti: '.TotalDigits'
      }, {
        en: 'schema',
        ti: '.Schema'
      }, {
        en: 'list',
        ti: '.List'
      }, {
        en: 'appinfo',
        ti: '.Appinfo'
      }, {
        en: 'anyAttribute',
        ti: '.Wildcard'
      }, {
        en: 'minInclusive',
        ti: '.Facet'
      }, {
        en: 'element',
        ti: '.LocalElement',
        sc: '.Group'
      }, {
        en: 'include',
        ti: '.Include'
      }, {
        en: 'union',
        ti: '.Union'
      }, {
        en: 'annotation',
        ti: '.Annotation'
      }, {
        en: 'complexContent',
        ti: '.ComplexContent'
      }, {
        en: 'maxExclusive',
        ti: '.Facet'
      }, {
        en: 'maxInclusive',
        ti: '.Facet'
      }, {
        en: 'unique',
        ti: '.Keybase'
      }, {
        en: 'sequence',
        ti: '.ExplicitGroup'
      }, {
        en: 'field',
        ti: '.Field'
      }, {
        en: 'notation',
        ti: '.Notation'
      }, {
        en: 'pattern',
        ti: '.Pattern'
      }, {
        en: 'attribute',
        ti: '.TopLevelAttribute'
      }, {
        en: 'key',
        ti: '.Keybase'
      }, {
        en: 'maxLength',
        ti: '.NumFacet'
      }, {
        en: 'whiteSpace',
        ti: '.WhiteSpace'
      }, {
        en: 'import',
        ti: '.Import'
      }, {
        en: 'element',
        ti: '.TopLevelElement'
      }, {
        en: 'minLength',
        ti: '.NumFacet'
      }, {
        en: 'simpleType',
        ti: '.TopLevelSimpleType'
      }]
  };
  return {
    XSD_1_0: XSD_1_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], XSD_1_0_Brief_Module_Factory);
}
else {
  var XSD_1_0_Brief_Module = XSD_1_0_Brief_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.XSD_1_0 = XSD_1_0_Brief_Module.XSD_1_0;
  }
  else {
    var XSD_1_0 = XSD_1_0_Brief_Module.XSD_1_0;
  }
}