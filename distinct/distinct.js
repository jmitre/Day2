function distinct(numArray){
  checkList = [];

  for(var i = 0; i < numArray.length + 1; i++){
    checkList[i] = false;
  }
  console.log(checkList);

  for(var i = 0; i < numArray.length; i++){
    checkList[numArray[i] - 1] = true;
  }
  console.log(checkList);

  for(var i = 0; i < numArray.length + 1; i++){
    if( checkList[i] === false) return i + 1;
  }

  return 1;
}

module.exports = distinct;
