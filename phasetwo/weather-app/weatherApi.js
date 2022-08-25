const got = require('got');
const key = require('./keys');

const sid = key()

class WeatherApi{
  fetchWeatherData(location, afunction){
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${sid}`
    got(url).then(afunction);
  }
}


// const weather = new WeatherApi
// weather.fetchWeatherData('London', (response)=>{
//   let weather_data = JSON.parse(response.body)
//   console.log(weather_data);
// });

module.exports = WeatherApi