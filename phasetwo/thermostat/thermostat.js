class Thermostat{
  constructor(){
    this.temp = 20;
    this.psm = true;
  }

  up(){
    if (this.psm === true && this.temp >= 25){
      this.temp = 25;
    } else if(this.temp === 32){
      this.temp = 32;
    }else{
      this.temp += 1;
    }
  }

  reset(){
    this.temp = 20;
  }
  
  down(){
    if (this.temp === 10){
      this.temp = 10;
    }else{
      this.temp -= 1;
    }
  }

  getTemperature(){
    return this.temp;
  }

  setPowerSavingMode(boolean){
    if (boolean === true){
      this.psm = true;
    }else if(boolean === false){
      this.psm = false;
    }
  }
}

module.exports = Thermostat;