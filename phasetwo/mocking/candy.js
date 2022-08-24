class Candy{
  constructor(name, price){
    this.price = price;
    this.name = name;
  }

  getName(){
    return this.name;
  }

  getPrice(){
    return this.price;
  }
}

module.exports = Candy;