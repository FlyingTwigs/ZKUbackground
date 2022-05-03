const {expect} = require("chai");
const {ethers} = require("hardhat");

describe("HelloWorld", function () {
  it("test initial value", async function () {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloworld = await HelloWorld.deploy();
    
    await helloworld.deployed();
    expect((await helloworld.retrieveNumber()).toNumber()).to.equal(0);
  });
   it("test updating and retrieving updated value", async function () {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloworld = await HelloWorld.deploy();
    await helloworld.deployed();
    const helloworld2 = await ethers.getContractAt("HelloWorld", helloworld.address);
    const setValue = await helloworld2.storeNumber(21);
    await setValue.wait();
    expect((await helloworld2.retrieveNumber()).toNumber()).to.equal(21);
  });
});
