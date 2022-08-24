const Basket = require('./basket');

describe('Basket',()=>{
  it('add 1 item and shows correct price', () => {
    const fakeCandy = { getPrice: 1.50 };
    const basket = new Basket;
    basket.addItem(fakeCandy);
    expect(basket.getPrice()).toEqual(1.50);
  });
  it('add 2 items and shows correct price', () => {
    const fakeCandy = { getPrice: 1.50 };
    const fakeCandy2 = { getPrice: 1.50 };
    const basket = new Basket;
    basket.addItem(fakeCandy);
    basket.addItem(fakeCandy2);
    expect(basket.getPrice()).toEqual(3);
  });
});