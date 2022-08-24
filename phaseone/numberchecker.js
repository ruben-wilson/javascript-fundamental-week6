const checkLength = (number) =>{
  if(number.length <= 10){
    return true;
  }else{
    return false;
  }
}

const numberSorter = (numbers) =>{
 return numbers.filter(checkLength);
}

module.exports = checkLength;