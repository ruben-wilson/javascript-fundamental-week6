const multi = require('./multiply')

describe('multiply', () => {
  it('multiply 2 * 2 = 4',() => {
    expect(multi(2,2)).toBe(4);
  });
});