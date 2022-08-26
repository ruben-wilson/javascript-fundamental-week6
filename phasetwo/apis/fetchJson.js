const got = require('got');
const jsonToObject = require('./githubApi');

const fetchJson = (url, afunction) =>{
  got(url).then(afunction);
}

fetchJson('https://api.github.com/repos/sinatra/sinatra', jsonToObject);