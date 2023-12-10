
const fs = require('fs');

const main = async() => {
  const contractFactory = await ethers.getContractFactory('LoanContract');
  const contract = await contractFactory.deploy(5);
  await contract.deployed();
  console.log("Contract deployed to: ", contract.address);

  fs.writeFileSync('./configlinea.js', `
  export const LoanContractAddress = "${contract.address}"
  export const AssetProofAddress = "${contract.address}"
`);
}

const runMain = async() => {
  try {
    await main();
    process.exit(0);
  } catch(error) {
    console.log(error);
    process.exit(1);
  }
}

runMain();
