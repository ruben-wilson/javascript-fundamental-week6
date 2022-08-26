const express = require('express');
const Thermostat = require('../thermostat/thermostat');

const app = express();
const port = 9000;

const thermo = new Thermostat;


app.post('/up',(req, res)=>{
  thermo.up()
  res.redirect('/temperature');
});

app.get('/temperature',(req, res)=>{
  let temp = thermo.getTemperature()
  // JSON.stringify()
  res.send(temp.toString());
});

app.delete('/temperature',(req, res)=>{
  thermo.reset();
  res.redirect('/temperature');
});




console.log(`Server listening on localhost:${port}`);
app.listen(port)