class ShoppingBasket {
  constructor() {
    this.discount = 0;
    this.candies = []
  }

  addItem(item){
    this.candies.push(item);
  }

  applyDiscount(discount) {
   this.discount = discount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.candies.forEach((candy) => {
      totalPrice += candy.getPrice();
    });
     const discount = this.discount/100
    return totalPrice * discount;
  }
}

module.exports = ShoppingBasket;