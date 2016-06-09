function determineUnique(myString){
  //slice to remove
  //splice
  var token = ""
  for(var i = 0; i < myString.length; i++){
    token = myString.split("").splice(0);
    if (myString.includes(token)) return false;
    myString.split("").push(token);
  }
  return true;
}

module.exports = determineUnique;
