const hre = require("hardhat");
module.exports = async ({getNamedAccounts, deployments}) => {
  const {deploy} = deployments;
  const {deployer} = await getNamedAccounts();
 // console.log("Deployer account:", deployer);
  const num= await deploy('Num1', {
    from: deployer,
    proxy: {
      owner: deployer,
      proxyContract: 'OpenZeppelinTransparentProxy',
      execute: {
        methodName: '',
        args: [],
      },
      upgradeIndex: 0,
}
  });

  console.log(
    "implementation address",
    await hre.upgrades.erc1967.getImplementationAddress(num.address)
  );
  console.log(
    "Admin address",
    await hre.upgrades.erc1967.getAdminAddress(num.address)
  );
  console.log(
    "Proxy address",
    await num.address
  );

};
module.exports.tags = ['Num1'];


// implementation address 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
// Admin address 0x5FbDB2315678afecb367f032d93F642f64180aa3
// Proxy address 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0