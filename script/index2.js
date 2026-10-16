
 // 1. Ask the user to enter a price
let priceInput = prompt("Enter a price tag ($55.99):");

// 2. Remove the dollar sign
let priceWithoutDollar = priceInput.replace("$", "");

// 3. Convert the input from a string to a number
let originalPrice = Number(priceWithoutDollar);

// 4. Calculate a 10% discount
let discount = originalPrice * 0.10;

// 5. Subtract the discount from the original price
let newPrice = originalPrice - discount;

// 6. Print the new price, rounded to two decimal places
console.log(`Your new price is: $${newPrice.toFixed(2)}`);
