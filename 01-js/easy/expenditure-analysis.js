/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {}; 
  transactions.forEach(transaction => {
    const { category, price } = transaction;    
    if (categoryTotals[category]) {
      categoryTotals[category] += price;
    } else {
      
      categoryTotals[category] = price;
    }
  });  
  const result = Object.keys(categoryTotals).map(category => ({
 
    [category]: categoryTotals[category],
  }));

  return result;
}
const transactions = [
  { itemName: 'Item1', category: 'Food', price: 20, timestamp: Date.now() },
  { itemName: 'Item2', category: 'Clothing', price: 50, timestamp: Date.now() },
  { itemName: 'Item3', category: 'Food', price: 30, timestamp: Date.now() },
  { itemName: 'Item4', category: 'Electronics', price: 100, timestamp: Date.now() },
  { itemName: 'Item4', category: 'Electronics', price: 150, timestamp: Date.now() },
 
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);


module.exports = calculateTotalSpentByCategory;
