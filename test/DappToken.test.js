const BN = require("bn.js");
const DappToken = artifacts.require("DappToken");

require("chai")
  .use(require("chai-bn")(BN))
  .should();

contract("DappToken", (accounts) => {
  const _name = "Dapp Token";
  const _symbol = "DAPP";
  const _decimals = new BN(18);

  beforeEach(async function() {
    this.token = await DappToken.new(_name, _symbol);
  });

  describe("token attributes", function() {
    it("has the correct name", async function() {
      const name = await this.token.name();
      name.should.equal(_name);
    });

    it("has the correct symbol", async function() {
      const symbol = await this.token.symbol();
      symbol.should.equal(_symbol);
    });

    it("has the correct decimals", async function() {
      const decimals = await this.token.decimals();
      decimals.should.be.bignumber.equal(_decimals);
    });
  });
});
