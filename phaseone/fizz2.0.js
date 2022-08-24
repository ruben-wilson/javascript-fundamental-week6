const fizzbuzzed = (target) => {
  var num = 1;
  while(num < target){
    if (num%15 === 0){
      console.log('fizzbuzz');
    }else if (num%3 === 0){
      console.log('fizz');
    }else if (num%5 === 0){
      console.log('buzz');
    }else{
      console.log(num)
    }
    num ++;

  }
}

module.exports = fizzbuzzed