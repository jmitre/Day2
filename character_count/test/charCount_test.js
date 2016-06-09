var expect = require("chai").expect;
var charCount = require("../charCount");

describe("#charCount", function(){
  it("if two empty strigs are returned, 0 should be returned",function(){
    var emptyStr = "";
    var emptySet = {};
    expect(charCount(emptyStr,emptyStr).toString()).to.equal(emptySet.toString());
  });
  it("if two strings are entered return a value pair", function(){
    var s1 = "abc";
    var s2 = "ebg";

    var expected = {
      "a":1,
      "b":2,
      "c":1,
      "e":1,
      "g":1

    };
    expect(charCount(s1, s2).toString()).to.equal(expected.toString());
  });
  it("if two strings are entered return a value pair", function(){
    var s1 = "aaa";
    var s2 = "bbbbb";

    var expected = {
      "a":3,
      "b":5
    };
    expect(charCount(s1, s2).toString()).to.equal(expected.toString());
  });
});
