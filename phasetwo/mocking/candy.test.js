const Candy = require('./candy');

const candy = new Candy('test_candy', 1.50);

describe('Candy', () => {
  it("it returns its name", () => {

    expect(candy.getName()).toBe('test_candy');
  });
  it("it returns its price", () => {

    expect(candy.getPrice()).toBe(1.50);
  });
});