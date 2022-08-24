class ShoppingBasket {
  constructor() {
    this.basket = [];
  }

  addItem(item){
    this.basket.push(item);
  }
  
  getTotalPrice(){
    let tot = 0;
    this.basket.forEach((item) => (tot += item.getPrice()))
    return tot;
  }

}

module.exports = ShoppingBasket;