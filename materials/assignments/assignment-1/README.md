# Assignment #1 - Currency Module

### Details

In this assignment, we are going to create a node module that others can install to add a simple currency calculator to their apps.

### Instructions
- Create a new currency.js file in the same directory as code/app.js
- The module should export an object with the following methods
  - CadToUsd(amount)
    - initial exchange rate: 1.5
    - returns: amount * rate
  - UsdToCad(amount)
    - initial exchange rate: 0.5
    - returns: amount * rate
  - setRate(rateName, rateValue)
    - checks if rateName exists
    - returns true if rate is successfully changed
    - returns false if rate doesn't exist
  - getRate(rateName)
    - returns the current exhange rate for rateName
    - returns undefined if rateName doesn't exist
- Do not change app.js in any way. Build your module so that app.js runs without errors as written.

### Expected Output of app.js

```shell
50 Canadian dollars equals 75 US dollars.
50 US dollars equals 25 Canadian dollars.
Changed currency rate.
The current exchange rate for Canadian --> US: 5
50 Canadian dollars equals 250 US dollars.
```

## How will this be marked?
One point will be given for each of the following:
1. Can the module be successfully installed in app.js? NOTE: installation failure will result in a zero for this assignment.
2. Does CadToUsd() convert currencies correctly without error?
3. Does UsdToCad() convert currencies correctly without error?
4. Does setRate() operate as expected without error?
5. Does getRate() operate as expected without error?
