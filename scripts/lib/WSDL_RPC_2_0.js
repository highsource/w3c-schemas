var WSDL_RPC_2_0_Module_Factory = function () {
  var WSDL_RPC_2_0 = {
    n: 'WSDL_RPC_2_0',
    tis: [{
        t: 'enum',
        ln: 'DirectionToken',
        bti: 'Token',
        vs: ['#in', '#out', '#inout', '#return']
      }],
    eis: []
  };
  return {
    WSDL_RPC_2_0: WSDL_RPC_2_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], WSDL_RPC_2_0_Module_Factory);
}
else {
  var WSDL_RPC_2_0_Module = WSDL_RPC_2_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.WSDL_RPC_2_0 = WSDL_RPC_2_0_Module.WSDL_RPC_2_0;
  }
  else {
    var WSDL_RPC_2_0 = WSDL_RPC_2_0_Module.WSDL_RPC_2_0;
  }
}