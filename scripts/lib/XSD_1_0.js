var XSD_1_0_Module_Factory = function () {
  var XSD_1_0 = {
    n: 'XSD_1_0',
    dens: 'http:\/\/www.w3.org\/2001\/XMLSchema',
    tis: [{
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
        ln: 'Restriction',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'simpleType',
            ti: '.LocalSimpleType'
          }, {
            n: 'minInclusive',
            col: true,
            ti: '.Facet'
          }, {
            n: 'maxLength',
            col: true,
            ti: '.NumFacet'
          }, {
            n: 'minLength',
            col: true,
            ti: '.NumFacet'
          }, {
            n: 'length',
            col: true,
            ti: '.NumFacet'
          }, {
            n: 'totalDigits',
            col: true,
            ti: '.TotalDigits'
          }, {
            n: 'enumeration',
            col: true,
            ti: '.NoFixedFacet'
          }, {
            n: 'pattern',
            col: true,
            ti: '.Pattern'
          }, {
            n: 'whiteSpace',
            col: true,
            ti: '.WhiteSpace'
          }, {
            n: 'maxExclusive',
            col: true,
            ti: '.Facet'
          }, {
            n: 'fractionDigits',
            col: true,
            ti: '.NumFacet'
          }, {
            n: 'maxInclusive',
            col: true,
            ti: '.Facet'
          }, {
            n: 'minExclusive',
            col: true,
            ti: '.Facet'
          }, {
            n: 'base',
            ti: 'QName',
            an: {
              lp: 'base'
            },
            t: 'a'
          }]
      }, {
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
        ln: 'TopLevelComplexType',
        bti: '.ComplexType'
      }, {
        ln: 'RealGroup',
        bti: '.Group'
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
        ln: 'Annotation',
        bti: '.OpenAttrs',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'appinfo',
            col: true,
            ti: '.Appinfo'
          }, {
            n: 'documentation',
            col: true,
            ti: '.Documentation'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }]
      }, {
        ln: 'TotalDigits',
        bti: '.NumFacet'
      }, {
        ln: 'NarrowMaxMin',
        bti: '.LocalElement'
      }, {
        ln: 'OpenAttrs',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
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
        ln: 'LocalComplexType',
        bti: '.ComplexType'
      }, {
        ln: 'AttributeGroupRef',
        bti: '.AttributeGroup'
      }, {
        ln: 'Group',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'choice',
            col: true,
            ti: '.ExplicitGroup'
          }, {
            n: 'group',
            col: true,
            ti: '.GroupRef'
          }, {
            n: 'any',
            col: true,
            ti: '.Any'
          }, {
            n: 'all',
            col: true,
            ti: '.All'
          }, {
            n: 'element',
            col: true,
            ti: '.LocalElement'
          }, {
            n: 'sequence',
            col: true,
            ti: '.ExplicitGroup'
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
        ln: 'TopLevelSimpleType',
        bti: '.SimpleType'
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
        ln: 'TopLevelAttribute',
        bti: '.Attribute'
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
            n: 'attribute',
            col: true,
            ti: '.Attribute'
          }, {
            n: 'attributeGroup',
            col: true,
            ti: '.AttributeGroupRef'
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
        ln: 'NamedAttributeGroup',
        bti: '.AttributeGroup'
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
        ln: 'Redefine',
        bti: '.OpenAttrs',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'annotation',
            col: true,
            ti: '.Annotation'
          }, {
            n: 'simpleType',
            col: true,
            ti: '.TopLevelSimpleType'
          }, {
            n: 'complexType',
            col: true,
            ti: '.TopLevelComplexType'
          }, {
            n: 'group',
            col: true,
            ti: '.NamedGroup'
          }, {
            n: 'attributeGroup',
            col: true,
            ti: '.NamedAttributeGroup'
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
        ln: 'ExplicitGroup',
        bti: '.Group'
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
        ln: 'AttributeGroup',
        bti: '.Annotated',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'attribute',
            col: true,
            ti: '.Attribute'
          }, {
            n: 'attributeGroup',
            col: true,
            ti: '.AttributeGroupRef'
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
        ln: 'Schema',
        bti: '.OpenAttrs',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'include',
            col: true,
            ti: '.Include'
          }, {
            n: '_import',
            col: true,
            en: 'import',
            ti: '.Import'
          }, {
            n: 'redefine',
            col: true,
            ti: '.Redefine'
          }, {
            n: 'simpleType',
            col: true,
            ti: '.TopLevelSimpleType'
          }, {
            n: 'complexType',
            col: true,
            ti: '.TopLevelComplexType'
          }, {
            n: 'group',
            col: true,
            ti: '.NamedGroup'
          }, {
            n: 'attributeGroup',
            col: true,
            ti: '.NamedAttributeGroup'
          }, {
            n: 'element',
            col: true,
            ti: '.TopLevelElement'
          }, {
            n: 'attribute',
            col: true,
            ti: '.TopLevelAttribute'
          }, {
            n: 'notation',
            col: true,
            ti: '.Notation'
          }, {
            n: 'annotation',
            col: true,
            ti: '.Annotation'
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
            n: 'minInclusive',
            col: true,
            ti: '.Facet'
          }, {
            n: 'maxLength',
            col: true,
            ti: '.NumFacet'
          }, {
            n: 'minLength',
            col: true,
            ti: '.NumFacet'
          }, {
            n: 'length',
            col: true,
            ti: '.NumFacet'
          }, {
            n: 'totalDigits',
            col: true,
            ti: '.TotalDigits'
          }, {
            n: 'enumeration',
            col: true,
            ti: '.NoFixedFacet'
          }, {
            n: 'pattern',
            col: true,
            ti: '.Pattern'
          }, {
            n: 'whiteSpace',
            col: true,
            ti: '.WhiteSpace'
          }, {
            n: 'maxExclusive',
            col: true,
            ti: '.Facet'
          }, {
            n: 'fractionDigits',
            col: true,
            ti: '.NumFacet'
          }, {
            n: 'maxInclusive',
            col: true,
            ti: '.Facet'
          }, {
            n: 'minExclusive',
            col: true,
            ti: '.Facet'
          }, {
            n: 'attribute',
            col: true,
            ti: '.Attribute'
          }, {
            n: 'attributeGroup',
            col: true,
            ti: '.AttributeGroupRef'
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
        ln: 'Pattern',
        bti: '.NoFixedFacet'
      }, {
        ln: 'SimpleExplicitGroup',
        bti: '.ExplicitGroup'
      }, {
        ln: 'WhiteSpace',
        bti: '.Facet'
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
            n: 'unique',
            col: true,
            ti: '.Keybase'
          }, {
            n: 'keyref',
            col: true,
            ti: '.Keyref'
          }, {
            n: 'key',
            col: true,
            ti: '.Keybase'
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
        ln: 'GroupRef',
        bti: '.RealGroup'
      }, {
        ln: 'LocalSimpleType',
        bti: '.SimpleType'
      }, {
        ln: 'All',
        bti: '.ExplicitGroup'
      }, {
        ln: 'NoFixedFacet',
        bti: '.Facet'
      }, {
        ln: 'NumFacet',
        bti: '.Facet'
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
            n: 'attribute',
            col: true,
            ti: '.Attribute'
          }, {
            n: 'attributeGroup',
            col: true,
            ti: '.AttributeGroupRef'
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
        ln: 'SimpleRestrictionType',
        bti: '.RestrictionType'
      }, {
        ln: 'TopLevelElement',
        bti: '.Element'
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
        ln: 'LocalElement',
        bti: '.Element'
      }, {
        ln: 'ComplexRestrictionType',
        bti: '.RestrictionType'
      }, {
        ln: 'NamedGroup',
        bti: '.RealGroup'
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
        ln: 'SimpleExtensionType',
        bti: '.ExtensionType'
      }, {
        t: 'enum',
        ln: 'ReducedDerivationControl',
        vs: ['extension', 'restriction']
      }, {
        t: 'enum',
        ln: 'FormChoice',
        vs: ['qualified', 'unqualified']
      }, {
        t: 'enum',
        ln: 'TypeDerivationControl',
        vs: ['extension', 'restriction', 'list', 'union']
      }, {
        t: 'enum',
        ln: 'DerivationControl',
        vs: ['substitution', 'extension', 'restriction', 'list', 'union']
      }],
    eis: [{
        en: 'import',
        ti: '.Import'
      }, {
        en: 'complexType',
        ti: '.TopLevelComplexType'
      }, {
        en: 'group',
        ti: '.GroupRef',
        sc: '.Group'
      }, {
        en: 'notation',
        ti: '.Notation'
      }, {
        en: 'list',
        ti: '.List'
      }, {
        en: 'maxExclusive',
        ti: '.Facet'
      }, {
        en: 'sequence',
        ti: '.ExplicitGroup'
      }, {
        en: 'attribute',
        ti: '.TopLevelAttribute'
      }, {
        en: 'minExclusive',
        ti: '.Facet'
      }, {
        en: 'attributeGroup',
        ti: '.NamedAttributeGroup'
      }, {
        en: 'enumeration',
        ti: '.NoFixedFacet'
      }, {
        en: 'maxInclusive',
        ti: '.Facet'
      }, {
        en: 'appinfo',
        ti: '.Appinfo'
      }, {
        en: 'element',
        ti: '.TopLevelElement'
      }, {
        en: 'redefine',
        ti: '.Redefine'
      }, {
        en: 'annotation',
        ti: '.Annotation'
      }, {
        en: 'selector',
        ti: '.Selector'
      }, {
        en: 'complexContent',
        ti: '.ComplexContent'
      }, {
        en: 'totalDigits',
        ti: '.TotalDigits'
      }, {
        en: 'all',
        ti: '.All'
      }, {
        en: 'maxLength',
        ti: '.NumFacet'
      }, {
        en: 'length',
        ti: '.NumFacet'
      }, {
        en: 'whiteSpace',
        ti: '.WhiteSpace'
      }, {
        en: 'unique',
        ti: '.Keybase'
      }, {
        en: 'anyAttribute',
        ti: '.Wildcard'
      }, {
        en: 'fractionDigits',
        ti: '.NumFacet'
      }, {
        en: 'schema',
        ti: '.Schema'
      }, {
        en: 'field',
        ti: '.Field'
      }, {
        en: 'group',
        ti: '.NamedGroup'
      }, {
        en: 'any',
        ti: '.Any'
      }, {
        en: 'key',
        ti: '.Keybase'
      }, {
        en: 'keyref',
        ti: '.Keyref'
      }, {
        en: 'minInclusive',
        ti: '.Facet'
      }, {
        en: 'element',
        ti: '.LocalElement',
        sc: '.Group'
      }, {
        en: 'pattern',
        ti: '.Pattern'
      }, {
        en: 'choice',
        ti: '.ExplicitGroup'
      }, {
        en: 'documentation',
        ti: '.Documentation'
      }, {
        en: 'restriction',
        ti: '.Restriction'
      }, {
        en: 'simpleContent',
        ti: '.SimpleContent'
      }, {
        en: 'minLength',
        ti: '.NumFacet'
      }, {
        en: 'union',
        ti: '.Union'
      }, {
        en: 'simpleType',
        ti: '.TopLevelSimpleType'
      }, {
        en: 'include',
        ti: '.Include'
      }]
  };
  return {
    XSD_1_0: XSD_1_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], XSD_1_0_Module_Factory);
}
else {
  var XSD_1_0_Module = XSD_1_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.XSD_1_0 = XSD_1_0_Module.XSD_1_0;
  }
  else {
    var XSD_1_0 = XSD_1_0_Module.XSD_1_0;
  }
}