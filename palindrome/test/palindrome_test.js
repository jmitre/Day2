var expect = require("chai").expect
var palindrome = require("../palindrome")
describe("#palindrome", function(){
  it("returns true if the empty string is passed",function(){
    var empty = "";
    expect(palindrome(empty)).to.equal(true);
  });
  it("returns false if a non-palindrome word is passed", function(){
    var nonPal = "cat";
    expect(palindrome(nonPal)).to.equal(false);
  });
  it("returns true when palindrome's are entered", function(){
    var pal = "racecar";
    expect(palindrome(pal)).to.equal(true);
  });
  it("if a word of length 1 is entered then true is returned", function(){
    var len1 = "a";
    expect(palindrome(len1)).to.equal(true);
  });
});
