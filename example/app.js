console.log(farvardin.solarToGregorian(1399 , 1 , 25));  // [2020 , 4 , 13]
console.log(farvardin.solarToGregorian(1399 , 1 , 25 , "array")); // same as above

console.log(farvardin.gregorianToSolar(2020 , 4 , 13 , "string")); // 1399-1-25

console.log(farvardin.gregorianToSolar(2020 , 4 , 13 , "object")); // { year: 1399, month: 1, day: 25 }

console.log(farvardin.gregorianToSolar(2020 , 4 , 13 , "json")); // {"year":1399,"month":1,"day":25}