const Api = require('./weatherApi');


class Weather{
  constructor(api){
    this.api = api;
    this.weather = null;
  }

  fetch(location){
    this.api.fetchWeatherData(location, (response)=>{
      // console.log(response.body);
      let weather_data = JSON.parse(response.body)
      this.weather = weather_data;
    });
  }

  async getWeatherData(){
    setTimeout(()=>{
      console.log(this.weather);
    }, 1000) 
  }
}

module.exports = Weather;


const api = new Api;
const weather = new Weather(api);
weather.fetch('London');
weather.getWeatherData();


// weather.fetchWeatherData('London', (response)=>{
//   let weather_data = JSON.parse(response.body)
//   console.log(weather_data);
// });