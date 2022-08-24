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

const SearchCandies = (prefix, max_price) =>{ 
  name_match = nameSearch(candies, prefix)
  full_match = name_match.filter( (candy) => candy.price < max_price);
  return full_match.map((candy)=> candy.name);
}

const checkName = (candy , search) => {
  return candy.name.startsWith(search)
  };

const nameSearch = (candies, search_term) => {
  return candies.filter( (candy) => checkName(candy, search_term));
};

// const startsWith = (prefix, word) =>{
//   if word[0,]
// }

module.exports = { SearchCandies, nameSearch };
