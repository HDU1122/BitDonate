const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",     // Ganache RPC server host
      port: 7545,            // Ganache RPC server port
      network_id: 5777,      // Ganache network ID
    },
  }
};
