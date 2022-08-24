const sign_finder = (num) => {
  if (num > 0){
    return 'positive'
  } else if (num < 0){
    return 'negative'
  } else {
    return 'zero'
  }
}

const isValidLength = (phoneNumber) => {
  const validLength = 10;
  if (phoneNumber.length === validLength) {
    return true;
  } else {
    return false;
  }
}


module.exports = isValidLength