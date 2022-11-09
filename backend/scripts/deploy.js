
const hre = require("hardhat");

async function main() {
  
  const VehicleRegister = await hre.ethers.getContractFactory("vehicleRegister");
  const vehicleRegister = await VehicleRegister.deploy();

  await vehicleRegister.deployed();

  console.log(
    `deployed to ${vehicleRegister.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
