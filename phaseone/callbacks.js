const printHello = () => {
  console.log('Hello!');
}

const delay = (delay, afunction) =>{
  setTimeout(afunction, delay)
}

delay(2000, printHello);