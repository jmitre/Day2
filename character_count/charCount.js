function charCount(str1, str2){
  var bigStr = (str1 + str2).split("");
  var result = {};
  for(var i = 0; i < bigStr.length; i++){
    result[bigStr[i]] = 0;
  }

  for(var i = 0; i < bigStr.length; i++){
    result[bigStr[i]]++;
  }

  return result;
}

module.exports = charCount;
