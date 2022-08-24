class Basket{
  constructor(){
    this.candies = [];
  }

  addItem(item){
    this.candies.push(item);
  }

  getPrice(){
    let tot = 0;
    this.candies.forEach((candy) => tot += candy.getPrice);
    return tot;
  }
}

module.exports = Basket;