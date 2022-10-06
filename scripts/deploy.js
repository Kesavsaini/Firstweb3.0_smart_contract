
const hre = require("hardhat");
//0x38Fc370CD49e475400c9e420CaC15B3a383bc263
const main=async ()=> {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = hre.ethers.utils.parseEther("1");

  const Transictions = await hre.ethers.getContractFactory("Transictions");
  const transictions = await Transictions.deploy();

  await transictions.deployed();

  console.log(
    `Transictions with 1 ETH and unlock timestamp ${unlockTime} deployed to ${transictions.address}`
  );
}

const runMain=async()=>{
  try{
    await main();
    process.exit(0);
  }catch(err){
     console.error(err);
     process.exit(1);
  }
}
runMain();
