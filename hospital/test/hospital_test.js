var expect = require("chai").expect;

var Hospital = require("../hospital");
describe("#hospital", function(){
  it("If patient is not in the hospital return false.", function(){
    var hospital = new Hospital();
    var fname = "";
    var lname = "";
    expect(hospital.isPatient(fname, lname)).to.equal(false);
  });
  it("If patient is in the hospital return true.", function(){
    var hospital = new Hospital();
    var fname = "John";
    var lname = "Doe";
    hospital.addPatient(fname,lname);
    expect(hospital.isPatient(fname, lname)).to.equal(true);
  });
});
