var expect = require('chai').expect;
var determineUnique = require("../unique")

describe("determineUnique", function(){
  describe("#determineUnique",function(){
    it("if an empty string is passed true is returned.",function(){
      var empty = "";
      expect(determineUnique(empty)).to.equal(true);
    });
    it("if a string without unique characters is passed the false is returned",function(){
      var nonUnique = "hello";
      expect(determineUnique(nonUnique)).to.equal(false);
    });
  })
});
