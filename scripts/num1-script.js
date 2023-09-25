const { ethers, upgrades } = require('hardhat');

async function main() {
    const Num1 = await ethers.getContractFactory('NUM1');
    console.log("Num1 deploying");

    const num1 = await upgrades.deployProxy(Num1, [10], {
        initializer: 'update',
    });

    // Wait for the deployment transaction to be mined and get the receipt
    await num1.waitForDeployment();
    console.log(await num1.getAddress());
}

main();

//0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0
