const Thermostat = require('./thermostat');

describe('Thermostat', ()=>{
  it('starts at 20 degrees', ()=>{
    const thermostat = new Thermostat;
    thermostat.setPowerSavingMode(false);
    expect(thermostat.getTemperature()).toEqual(20)
  });
  it('starts at 20 degrees and increase to 22', ()=>{
    const thermostat = new Thermostat;
    thermostat.setPowerSavingMode(false);
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(22)
  });
  it('starts at 20 degrees decrease down to 18', ()=>{
    const thermostat = new Thermostat;
    thermostat.setPowerSavingMode(false);
    thermostat.down();
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(18)
  });
  it("it doesn't go over max temp", ()=>{
    const thermostat = new Thermostat;
    thermostat.setPowerSavingMode(false);
    for(let i = 0; i < 20; i++) {
       thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(32)
  });
  it("it doesn't go below minium temp", ()=>{
    const thermostat = new Thermostat;
    thermostat.setPowerSavingMode(false);
    for(let i = 0; i < 20; i++) {
       thermostat.down();
    }
    expect(thermostat.getTemperature()).toEqual(10)
  });
  it("psm on, max temp is 25", ()=>{
    const thermostat = new Thermostat;
    thermostat.setPowerSavingMode(true);
    for(let i = 0; i < 20; i++) {
       thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(25)
  });
  it("psm off, should increase to 25 and reset to 20", ()=>{
    const thermostat = new Thermostat;
    thermostat.setPowerSavingMode(false);
    for(let i = 0; i < 20; i++) {
       thermostat.up();
    }
    thermostat.reset();
    expect(thermostat.getTemperature()).toEqual(20)
  });
  it("psm off, max temp is 25", ()=>{
    const thermostat = new Thermostat;
    thermostat.setPowerSavingMode(false);
    for(let i = 0; i < 20; i++) {
       thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(32)
  });
});


