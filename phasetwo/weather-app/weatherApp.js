const Api = require('./weatherApi');


class Weather{
  constructor(api){
    this.api = api;
  }

  fetch(location){
    this.api.fetchWeatherData(location, (response)=>{
      console.log(response);
      // let weather_data = JSON.parse(response.body)
      // console.log(weather_data);
    });
  }

  async getWeatherData(){
    let weather_data = await this.fetch()
    // console.log(weather_data)
  }
}

module.exports = Weather;


const api = new Api
const weather = new Weather(api);
weather.fetch('London');
weather.getWeatherData();