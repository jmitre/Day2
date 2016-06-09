var Hospital = function(){
  this.patientList = {};
};

Hospital.prototype.addPatient = function (fname, lname){
  var fullName = fname + lname;
  this.patientList[fullName] = true;
}

Hospital.prototype.isPatient = function(fname, lname){
  var fullName = fname + lname;
  if(this.patientList[fullName] === true)  return true;
  else {
    return false;
  }
}

module.exports = Hospital;
