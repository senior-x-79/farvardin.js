farvardin.js
======
With the help of this library, you will be able to convert the Gregorian date to solar or vice versa


کتابخانه جاوااسکریپت برای تبدیل تاریخ میلادی به شمسی و یا بلعکس
======
با کمک این کتابخانه قادر خواهید بود تاریخ میلادی را به شمسی تبدیل کنید یا بلعکس
برای اطلاعات بیشتر به [رپید کد](https://rapidcode.ir "رپید کد") مراجعه کنید .

## usage
#### Browser
```html
<script src="dist/farvardin.min.js"></script>
```
```javascript
console.log(farvardin.solarToGregorian(1399 , 1 , 25));  // [2020 , 4 , 13]
console.log(farvardin.solarToGregorian(1399 , 1 , 25 , "array")); // same as above

console.log(farvardin.gregorianToSolar(2020 , 4 , 13 , "string")); // 1399-01-25

console.log(farvardin.gregorianToSolar(2020 , 4 , 13 , "object")); // { year: 1399, month: 1, day: 25 }

console.log(farvardin.gregorianToSolar(2020 , 4 , 13 , "json")); // {"year":1399,"month":1,"day":25}
```
#### Node.JS (CommonJS)
`npm install farvardin --save`
```javascript
const farvardin = require("farvardin");

console.log(farvardin.solarToGregorian(1399 , 1 , 25));  // [2020 , 4 , 13]
console.log(farvardin.solarToGregorian(1399 , 1 , 25 , "array")); // same as above

console.log(farvardin.gregorianToSolar(2020 , 4 , 13 , "string")); // 1399-01-25

console.log(farvardin.gregorianToSolar(2020 , 4 , 13 , "object")); // { year: 1399, month: 1, day: 25 }

console.log(farvardin.gregorianToSolar(2020 , 4 , 13 , "json")); // {"year":1399,"month":1,"day":25}
```
