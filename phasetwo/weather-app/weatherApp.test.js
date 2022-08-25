const Weather = require('./weatherApp')

describe('weather', ()=>{
  it('fetches the data correctly and displays it', ()=>{
    const fakeApi = { 
      fetchWeatherData: (location, callback)=>{
        callback({
          "main": 'weather',
          "type": 'cloudy'
        });
      }
    }

    const weather = new Weather(fakeApi);
    weather.fetch('London')
    expect(weather.getWeatherData()).toEqual({main: 'weather',
          type: 'cloudy'})

  });
});