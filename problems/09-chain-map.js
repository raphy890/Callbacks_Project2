/*******************************************************************************
Write a function `chainMap` that accepts a value and any number of callbacks as
arguments. The function should return the final result of passing the value through
all of the given callbacks. In other words, if three callbacks are given then:

- the value is given to the first callback
- the result of the first callback is given to the second callback
- the result of the second callback is given to the third callback
- the result of the third callback is the final result
*******************************************************************************/
/*Psudeo Code
write a function => (value,...cb)  => use the spread operator
iterate through all of the callback functions
value = (cb(value)
return final value from passing into each cb
*/

//Solution1: For...of
// let chainMap = function(value,...cb){
//     for (let callback of cb) {
//         value = callback(value)
//     }
//     return value

// };

//Soultion2: For Loop
// let chainMap = function(value,...cb){
//     for (let i = 0; i<cb.length; i++){
//         let callback = cb[i]
//         value = callback(value)
//     }
//     return value
// }

//Soultion3: ForEach Method
let chainMap = function(value,...cb){
    cb.forEach((callbacks) => {
        value = callbacks(value)
    })
    return value
}

//Examples:

let add5 = function(n) {
    return n + 5;
};

let half = function(n) {
    return n / 2;
};

let square = function(n) {
    return n * n;
};

console.log(chainMap(25, add5));                // 30
console.log(chainMap(25, add5, half));          // 15
console.log(chainMap(25, add5, half, square));  // 225
console.log(chainMap(4, square, half));         // 8
console.log(chainMap(4, half, square));         // 4





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = chainMap;
