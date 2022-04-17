const path = require("path");
var HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim(); //.secret   Mnemonic Phrase
require('babel-register')

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {


  //   ropsten: {
  //     provider: () => new HDWalletProvider(mnemonic, "https://BitFund:1234aaAA@apis.ankr.com/c48d86d29d2e4e619a65e0fd75ac2942/8d7dca9bc7ae0272d841c0c2f35f8ea9/eth/fast/ropsten"),
  //     network_id: 3, // network's Chain id
  //     gas: 4612388, // Chain has a lower block limit than mainnet
  //     confirmations: 2, // # of confs to wait between deployments. (default: 0)
  //     networkCheckTimeout: 1000000,
  //     timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
  //     skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
  // },
    development: {
      host: "127.0.0.1",     // Ganache RPC server host
      port: 7545,            // Ganache RPC server port
      network_id: 5777,      // Ganache network ID
    },

  },
  compilers: {
    solc: {
      version: "0.8.13"
    }
  }
};
