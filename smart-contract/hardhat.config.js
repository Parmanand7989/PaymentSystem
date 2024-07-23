require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/c539920f520946e8a4aeb474ffc5ec36",
      accounts: [`dca094618d55e9767627f1b029f77044a6c5638a8f73040e3a282eb8ba261103`]
    },
    
    bscTestnet: {
      url: "https://go.getblock.io/c4feb2e91e544d918c4379b14ebbcef8",
      accounts: [`b048bc5f9189810403319908a17be5db7d57e20e662c4c0d2731287d626ce1c7`]
    }
  },
  etherscan: {
    apiKey: "AS63NJF2178I2VI2B3SVWRKFFEETMJB7FZ"
  }
};