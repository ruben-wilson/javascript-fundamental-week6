const lowercase = (string) => {
  return string.toLowerCase();
}

const transform = (string, afunction) =>{
  console.log(afunction(string));
}


transform("WHY R U SHOUTING", lowercase);