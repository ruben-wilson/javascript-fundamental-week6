const got = require('got')

class GithubApi{
  fetchRepositoryData(target_repo, afunction){
    let target = 'https://api.github.com/repos/' + target_repo
    got(target).then(afunction);
  }
}

class Github{
  constructor(api){
    this.api = api;
    this.response = null
  }

  fetch(target_repo){
    this.api.fetchRepositoryData(target_repo, (response) =>{
      this.response = response.body;
    });
  }

  getRepoData(){
    if(this.response === null){
      setTimeout(()=>{
        const object = JSON.parse(this.response);
        console.log(object)
      }, 500);
    }
  
    
  }

}


const jsonToObject = (json) =>{
  const object = JSON.parse(json);
  return object;
};


const api = new GithubApi
const github = new Github(api);

github.fetch('sinatra/sinatra');
github.getRepoData();

module.exports = jsonToObject;
 