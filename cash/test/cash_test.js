var expect = require("chai").expect;
var Cashier = require("../cash");

describe("cash",function(){
  describe("#Cashier",function(){
    it("When 0 is passed for all paramaters, the till should be empty", function(){
      var cash = new Cashier(0,0,0,0,0,0);
      var expectedReg = {
        1:0,
        5:0,
        10:0,
        20:0,
        50:0,
        100:0
      };

      expect(cash.register.toString()).to.equal(expectedReg.toString());
    })
  })
});
