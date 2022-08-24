const SearchCandies = require('./searchCandies').SearchCandies
const nameSearch = require('./searchCandies').nameSearch

const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: 'Mars', price: 1.49 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 }
];

describe('searchcandies', () => {
  it('candies starting with "Ma" below price 10', () => {
    expect(SearchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ])
  });
  it('candies starting with "Ma" below price 2', () => {
    expect(SearchCandies('Ma', 2)).toEqual([ 'Mars' ])
  });
  it('candies starting with "S" below price 10', () => {
    expect(SearchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ])
  });
  it('candies starting with "S" below price 4', () => {
    expect(SearchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ])
  });
});

  // describe('nameSearch', () => {
  //   it('returns anything starting with S', () => {
  //     expect(nameSearch(candies, 'S')).toEqual([ 'Skitties', 'Skittles', 'Starburst' ])
  //   });
  // });
