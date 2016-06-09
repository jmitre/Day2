var expect = require("chai").expect;
var compare_array = require("../compare_array");

describe("#compare_array", function(){
  it("If array2 is empty then it will return array1.", function(){
    var myArr1 = [1,2]
    var myArr2 = []

    expect(compare_array(myArr1, myArr2).toString()).to.equal(myArr1.toString());
  });
  it("Returns the value(s) from the first array that are not in the second.", function(){
    var myArr1 = [1,2];
    var myArr2 = [1];

    expect(compare_array(myArr1, myArr2)).to.equal(2);
  });
  it("Returns the value(s) from the first array that are not in the second.", function(){
    var myArr1 = [1,2,3];
    var myArr2 = [1,3,6,8];

    expect(compare_array(myArr1, myArr2)).to.equal(2);
  });
  it("If array2 is empty and array1 is empty return an empty array.", function(){
    var myArr1 = []
    var myArr2 = []

    expect(compare_array(myArr1, myArr2).toString()).to.equal(myArr1.toString());
  });
});
