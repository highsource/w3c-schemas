var XSD_1_0_Module_Factory = function () {
  var XSD_1_0 = {
    n: 'XSD_1_0',
    dens: 'http:\/\/www.w3.org\/2001\/XMLSchema',
    tis: [{
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
        ln: 'WhiteSpace',
        bti: '.Facet'
      }, {
        ln: 'NamedGroup',
        bti: '.RealGroup'
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
        ln: 'ExplicitGroup',
        bti: '.Group'
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
        ln: 'GroupRef',
        bti: '.RealGroup'
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
            n: 'key',
            col: true,
            ti: '.Keybase'
          }, {
            n: 'keyref',
            col: true,
            ti: '.Keyref'
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
            n: 'minLength',
            col: true,
            ti: '.NumFacet'
          }, {
            n: 'pattern',
            col: true,
            ti: '.Pattern'
          }, {
            n: 'maxExclusive',
            col: true,
            ti: '.Facet'
          }, {
            n: 'fractionDigits',
            col: true,
            ti: '.NumFacet'
          }, {
            n: 'maxLength',
            col: true,
            ti: '.NumFacet'
          }, {
            n: 'minExclusive',
            col: true,
            ti: '.Facet'
          }, {
            n: 'length',
            col: true,
            ti: '.NumFacet'
          }, {
            n: 'maxInclusive',
            col: true,
            ti: '.Facet'
          }, {
            n: 'enumeration',
            col: true,
            ti: '.NoFixedFacet'
          }, {
            n: 'whiteSpace',
            col: true,
            ti: '.WhiteSpace'
          }, {
            n: 'minInclusive',
            col: true,
            ti: '.Facet'
          }, {
            n: 'totalDigits',
            col: true,
            ti: '.TotalDigits'
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
        ln: 'OpenAttrs',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }]
      }, {
        ln: 'LocalSimpleType',
        bti: '.SimpleType'
      }, {
        ln: 'SimpleExplicitGroup',
        bti: '.ExplicitGroup'
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
        ln: 'AttributeGroupRef',
        bti: '.AttributeGroup'
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
        ln: 'All',
        bti: '.ExplicitGroup'
      }, {
        ln: 'TopLevelElement',
        bti: '.Element'
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
        ln: 'TotalDigits',
        bti: '.NumFacet'
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
        ln: 'TopLevelAttribute',
        bti: '.Attribute'
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
        ln: 'NumFacet',
        bti: '.Facet'
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
        ln: 'NamedAttributeGroup',
        bti: '.AttributeGroup'
      }, {
        ln: 'SimpleExtensionType',
        bti: '.ExtensionType'
      }, {
        ln: 'TopLevelComplexType',
        bti: '.ComplexType'
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
        ln: 'NoFixedFacet',
        bti: '.Facet'
      }, {
        ln: 'Pattern',
        bti: '.NoFixedFacet'
      }, {
        ln: 'ComplexRestrictionType',
        bti: '.RestrictionType'
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
        ln: 'LocalComplexType',
        bti: '.ComplexType'
      }, {
        ln: 'SimpleRestrictionType',
        bti: '.RestrictionType'
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
            n: 'minLength',
            col: true,
            ti: '.NumFacet'
          }, {
            n: 'pattern',
            col: true,
            ti: '.Pattern'
          }, {
            n: 'maxExclusive',
            col: true,
            ti: '.Facet'
          }, {
            n: 'fractionDigits',
            col: true,
            ti: '.NumFacet'
          }, {
            n: 'maxLength',
            col: true,
            ti: '.NumFacet'
          }, {
            n: 'minExclusive',
            col: true,
            ti: '.Facet'
          }, {
            n: 'length',
            col: true,
            ti: '.NumFacet'
          }, {
            n: 'maxInclusive',
            col: true,
            ti: '.Facet'
          }, {
            n: 'enumeration',
            col: true,
            ti: '.NoFixedFacet'
          }, {
            n: 'whiteSpace',
            col: true,
            ti: '.WhiteSpace'
          }, {
            n: 'minInclusive',
            col: true,
            ti: '.Facet'
          }, {
            n: 'totalDigits',
            col: true,
            ti: '.TotalDigits'
          }, {
            n: 'base',
            ti: 'QName',
            an: {
              lp: 'base'
            },
            t: 'a'
          }]
      }, {
        ln: 'TopLevelSimpleType',
        bti: '.SimpleType'
      }, {
        ln: 'RealGroup',
        bti: '.Group'
      }, {
        ln: 'NarrowMaxMin',
        bti: '.LocalElement'
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
            n: 'sequence',
            col: true,
            ti: '.ExplicitGroup'
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
        ln: 'LocalElement',
        bti: '.Element'
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
        t: 'enum',
        ln: 'FormChoice',
        vs: ['qualified', 'unqualified']
      }, {
        t: 'enum',
        ln: 'DerivationControl',
        vs: ['substitution', 'extension', 'restriction', 'list', 'union']
      }, {
        t: 'enum',
        ln: 'TypeDerivationControl',
        vs: ['extension', 'restriction', 'list', 'union']
      }, {
        t: 'enum',
        ln: 'ReducedDerivationControl',
        vs: ['extension', 'restriction']
      }],
    eis: [{
        en: 'include',
        ti: '.Include'
      }, {
        en: 'totalDigits',
        ti: '.TotalDigits'
      }, {
        en: 'maxExclusive',
        ti: '.Facet'
      }, {
        en: 'minInclusive',
        ti: '.Facet'
      }, {
        en: 'attributeGroup',
        ti: '.NamedAttributeGroup'
      }, {
        en: 'attribute',
        ti: '.TopLevelAttribute'
      }, {
        en: 'annotation',
        ti: '.Annotation'
      }, {
        en: 'keyref',
        ti: '.Keyref'
      }, {
        en: 'sequence',
        ti: '.ExplicitGroup'
      }, {
        en: 'enumeration',
        ti: '.NoFixedFacet'
      }, {
        en: 'group',
        ti: '.GroupRef',
        sc: '.Group'
      }, {
        en: 'list',
        ti: '.List'
      }, {
        en: 'choice',
        ti: '.ExplicitGroup'
      }, {
        en: 'all',
        ti: '.All'
      }, {
        en: 'key',
        ti: '.Keybase'
      }, {
        en: 'maxInclusive',
        ti: '.Facet'
      }, {
        en: 'simpleType',
        ti: '.TopLevelSimpleType'
      }, {
        en: 'complexContent',
        ti: '.ComplexContent'
      }, {
        en: 'maxLength',
        ti: '.NumFacet'
      }, {
        en: 'notation',
        ti: '.Notation'
      }, {
        en: 'appinfo',
        ti: '.Appinfo'
      }, {
        en: 'unique',
        ti: '.Keybase'
      }, {
        en: 'union',
        ti: '.Union'
      }, {
        en: 'restriction',
        ti: '.Restriction'
      }, {
        en: 'length',
        ti: '.NumFacet'
      }, {
        en: 'documentation',
        ti: '.Documentation'
      }, {
        en: 'redefine',
        ti: '.Redefine'
      }, {
        en: 'pattern',
        ti: '.Pattern'
      }, {
        en: 'whiteSpace',
        ti: '.WhiteSpace'
      }, {
        en: 'minLength',
        ti: '.NumFacet'
      }, {
        en: 'element',
        ti: '.TopLevelElement'
      }, {
        en: 'any',
        ti: '.Any'
      }, {
        en: 'anyAttribute',
        ti: '.Wildcard'
      }, {
        en: 'field',
        ti: '.Field'
      }, {
        en: 'group',
        ti: '.NamedGroup'
      }, {
        en: 'minExclusive',
        ti: '.Facet'
      }, {
        en: 'fractionDigits',
        ti: '.NumFacet'
      }, {
        en: 'element',
        ti: '.LocalElement',
        sc: '.Group'
      }, {
        en: 'selector',
        ti: '.Selector'
      }, {
        en: 'simpleContent',
        ti: '.SimpleContent'
      }, {
        en: 'import',
        ti: '.Import'
      }, {
        en: 'schema',
        ti: '.Schema'
      }, {
        en: 'complexType',
        ti: '.TopLevelComplexType'
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