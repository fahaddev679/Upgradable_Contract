const {ethers, upgrades} = require('hardhat');

async function main(){
    const NUM2 = await ethers.getContractFactory('NUM2');
    console.log("Upgrading your smart contract, Please Wait...");

    await upgrades.upgradeProxy('0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0', NUM2);
    console.log("Your contract is succesfully upgraded");

}
main();