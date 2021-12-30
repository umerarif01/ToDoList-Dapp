
const hre = require("hardhat");

async function main() {
  
  const TodoList = await hre.ethers.getContractFactory("TodoList");
  const tdl = await TodoList.deploy();

  await tdl.deployed();

  console.log("TodoList deployed to:", tdl.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
