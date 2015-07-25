"user strict";
const SuperString = require('./SuperString.js');




var str1= "vu   minh  quy";
var str2 = "Nguyen    Ngoc    son";


console.log(SuperString.uncamelize(str2));

console.log(SuperString.longestword(str1));

console.log(SuperString.invert(str1));

console.log(SuperString.camelcase(str1));

console.log(SuperString.shortestword(str2));