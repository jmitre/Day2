var expect = require("chai").expect;
var distinct = require("../distinct");

describe("#distinct", function(){
  it("returns 1 if the array is empty.", function(){
    var setup = [];

    expect(distinct(setup)).to.equal(1);
  });
  it("Given an array in length greater than 1, it returns the missing value between n and n+1", function(){
    var setup = [1,2];

    expect(distinct(setup)).to.equal(3);
  });
  it("Given an array in length greater than 1, it returns the missing value between n and n+1", function(){
    var setup = [2,1,4];

    expect(distinct(setup)).to.equal(3);
  });
  it("Given an array in length greater than 1, it returns the missing value between n and n+1", function(){
    var setup = [5,4,2,6,1];

    expect(distinct(setup)).to.equal(3);
  });
});
