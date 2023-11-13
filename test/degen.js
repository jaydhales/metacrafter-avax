const { expect } = require("chai");
const hre = require("hardhat");
const helpers = require("@nomicfoundation/hardhat-network-helpers");

describe("degen", function () {
  let degen;
  let owner;
  let user = "0x0000000000000000000000000000000000001234";
  let signedUser;
  const amount = 10000;
  beforeEach(async function () {
    [{ address: owner }] = await hre.ethers.getSigners();
    const Degen = await hre.ethers.getContractFactory("DegenToken");

    degen = await Degen.deploy();
    await degen.deployed();
    await degen.mint(owner, 10000);
    signedUser = await hre.ethers.getImpersonatedSigner(user);
    await helpers.setBalance(user, hre.ethers.utils.parseEther("2"));
  });

  it("should mint", async function () {
    await degen.mint(user, amount);
    expect(await degen.balanceOf(user)).to.equal(amount);
  });

  it("should burn", async function () {
    await degen.mint(user, amount);

    await degen.connect(signedUser).burn(2000);
    expect(await degen.balanceOf(user)).to.equal(8000);
  });

  it("should transfer", async function () {
    await degen.transfer(user, 5000);
    expect(await degen.balanceOf(user)).to.equal(5000);
  });

  it("should create item", async function () {
    await degen.createItem(1000);
    expect(
      Number(hre.ethers.utils.hexValue((await degen.items(0))[0]))
    ).to.equal(1000);
  });

  it("should redeem item", async function () {
    await degen.createItem(1000);
    await degen.mint(user, 1500);
    await degen.connect(signedUser).redeem(0);
    expect(await degen.balanceOf(user)).to.equal(500);
    expect((await degen.items(0))[1]).to.equal(user);
  });
});
