
/**
var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
**/

var EscrowSimple=artifacts.require("./EscrowSimple.sol");


module.exports = function(deployer) {

  /**
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  **/

  deployer.deploy(EscrowSimple);


};
