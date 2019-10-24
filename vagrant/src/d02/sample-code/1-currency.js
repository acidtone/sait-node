// Load currency module
const currency = require("./currency");

// Use functions from currency module
console.log(`50 Canadian dollars equals ${currency.canadianToUS(50)} US dollars.`);

console.log(`50 US dollars equals ${currency.USToCanadian(50)} Canadian dollars.`);