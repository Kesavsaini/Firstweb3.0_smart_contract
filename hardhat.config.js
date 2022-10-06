require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: '0.8.0',
  networks:{
    goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/alX8ckxgx9f_TjXnM0f98uNMAzuhAf3K',
      accounts:['f66613381363096b95b8fb75fd7e910282a20b7860981b7003afc9a6c61747a1']
    }
  }
};
