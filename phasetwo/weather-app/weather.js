const got = require('got')

url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid=98f1ce8734c66f640f96b16baf607d11'

let weather_data = null;

got(url).then((response)=>{
  weather_data = JSON.parse(response.body)
  // console.log(weather_data);
  console.log({one: weather_data.main.temp, two: 'weather_data.weather[0].main'})
});

