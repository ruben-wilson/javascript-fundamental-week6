const fizzbuzz = require('./fizzbuzz.js')

describe('fizzbuzz', () => {
  it('returns fizz for 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
  });
  it('returns buzz for 5', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
  });
  it('returns 8 for 8', () => {
    expect(fizzbuzz(8)).toBe(8);
  });
  it('returns fizzbuzz for 15', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
  });
  it('returns fizz for 18', () => {
    expect(fizzbuzz(18)).toBe('Fizz');
  });
  it('returns buzz for 20', () => {
    expect(fizzbuzz(20)).toBe('Buzz');
  });
});
