function palindrome(myString) {
  var storageString = myString.split("");
  for(var i = 0; i < myString.length/2; i++){
    if(storageString[i] !== storageString[myString.length - 1 - i])
      return false;
  }
  return true;
}

function palindromRecursive(myString){
  if(myString.length <= 1) return true;
  if(myString.slice(0,1) == myString.slice(myString.length - 1))
    return palindrome(myString.slice(1, myString.length-1))
  else {
    console.log(myString.slice(0,1), "!=", myString.slice(myString.length - 1))
    return false;
  }

}

module.exports = palindromRecursive;
