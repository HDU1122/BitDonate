// var SimpleStorage = artifacts.require("./SimpleStorage.sol");

// module.exports = function(deployer) {
//   deployer.deploy(SimpleStorage);
// };

var Donation = artifacts.require("./Donation.sol")

module.exports = function(deployer) {
deployer.deploy(Donation);
};