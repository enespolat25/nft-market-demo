require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey =
  fs.readFileSync(".secret").toString().trim() ||
  "834837043f3fed5a75877cf129b35feb1cbdd7829e761deeafe317b04f7af96b";
const infuraId =
  fs.readFileSync(".infuraid").toString().trim() ||
  "9d38b56d523e45bf836d2783ce0e98ef";

module.exports = {
  defaultNetwork: "mumbai",
  networks: {
    /*hardhat: {
      chainId: 1337
    },
    */
    mumbai: {
      // Infura
      url: `https://polygon-mumbai.infura.io/v3/${infuraId}`,
      //url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey],
    },
    /*matic: {
      // Infura
       url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      //url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey],
    },*/
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
