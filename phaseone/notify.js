const notifyByemail = (email) => {
  return `Email sent to ${email}`;
}

const notifyBynumber = (number) =>{
  return `Text sent to ${number}`;
}

const notifier = (string, afunction) =>{
  console.log(afunction(string));
}

notifier("0077urmom", notifyBynumber);