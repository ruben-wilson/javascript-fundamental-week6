const Basket = require('./shoppingbasket');

describe('Basket', ()=>{
  it('applies correct discount', ()=>{
    const fakeCandy = { getPrice: () => 1.50 };
    const fakeCandy2 = { getPrice: () =>  1.50 };
    const basket = new Basket;
    basket.addItem(fakeCandy);
    basket.addItem(fakeCandy2);
    basket.applyDiscount(50);
    expect(basket.getTotalPrice()).toEqual(1.50);
  });
});