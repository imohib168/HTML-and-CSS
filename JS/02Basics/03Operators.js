// + - / * %

var num1 = 7;
var num2 = 6;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);

var answer = num1 > num2;
// console.log(answer);

// Small program

// LP = Listing price 
// SP = Selling price
// var Discount = (((LP - SP) / LP) * 100)

var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;
// console.log("Discount Percent is: ", discountPercent);

var displayDiscountPercentage = Math.round(discountPercent);
// console.log("Discount Percent is: " + displayDiscountPercentage + "% off");
// console.log(`Discount is ${displayDiscountPercentage}% off`);


// Class 04

var result = listingPrice > sellingPrice;
console.log(typeof result);

// Operator Precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence