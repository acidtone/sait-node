// See ../README.md for the details of this assignment

// Load currency module
const currency = require("./currency");

// Calculate amounts with CadToUsd() and UsdToCdn()
console.log(`50 Canadian dollars equals ${currency.CadToUsd(50)} US dollars.`); // output: 75 if rate is 1.5

console.log(`50 US dollars equals ${currency.UsdToCad(50)} Canadian dollars.`); // output: 25 if rate is 0.5

// Set a new exchange rate with setRate()
if (currency.setRate('CadToUsd', 5)) {
  console.log(`Changed currency rate.`); 
} else {
  console.log(`Couldn't change currency rate.`)
}

// Get a current exchange rate with getRate()
console.log(`The current exchange rate for Canadian --> US: ${currency.getRate('CadToUsd')}`);

// Confirm new rate
console.log(`50 Canadian dollars equals ${currency.CadToUsd(50)} US dollars.`); // output: 250 if rate is now 5