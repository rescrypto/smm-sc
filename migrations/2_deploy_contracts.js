var BigNumber = require('bignumber.js');
var initialDisbursement = new BigNumber(1500000000000000000000000);

var NumeraireBackend = artifacts.require("./contracts/tokens/SocialMediaToken.sol");
var NumeraireDelegate = artifacts.require("./contracts/SocialMediaMarket.sol")
var addresses = ['0xaea4787f275456a130937da4bace877fdfd107b1', '0x83d8d6d09f7db53fb09b57730b9090c618b85dcf'];

module.exports = function(deployer) {
  deployer.deploy(NumeraireBackend, addresses, 2, initialDisbursement);
  deployer.deploy(NumeraireDelegate, addresses, 1);
};
