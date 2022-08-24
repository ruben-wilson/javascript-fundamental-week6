const personalizedMessage = (object) =>{
  return `Hi ${object.name}! ${object.discount}% off our best candies for you today!`;
}

const messageMaker = (names) =>{
 return names.map(personalizedMessage);
}


module.exports = messageMaker