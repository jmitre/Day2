function compare_array(arr1, arr2){
  var result = [];

for(var i = 0; i < arr1.length; i++){
  if(!contained(arr1[i], arr2)) result.push(arr1[i]);
}

  if(result.length === 1) return result[0];

  return result;
}

function contained(num, arr){
  for(var i = 0; i < arr.length; i++){
    if(arr[i]===num) return true;
  }
  return false;
}

module.exports = compare_array;
