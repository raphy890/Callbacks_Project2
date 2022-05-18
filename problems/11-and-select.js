/*******************************************************************************
Write a function `andSelect` that accepts an array and two callbacks. The function
should return a new array containing elements of the original array that result in
true when passed into both callbacks.

Examples:

1. create function accepts arr, cb1, cb2
2. create new Arr []
3. iterate
4. if cb1(el) && cb2(el)
5.push el into newArr
6. return newArr

*******************************************************************************/

// let andSelect = function(arr, cb1, cb2) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         let el = arr[i]
//         if(cb1(el) && cb2(el)){
//             newArr.push(el)
//         }
//     }
//     return newArr
// };

// alternative solution
// let andSelect = (arr, cb1, cb2) => {
//     let newArr = []
//     arr.forEach((el) => {
//      if(cb1(el) && cb2(el)){
//         newArr.push(el)
//         }
//     })
//     return newArr
// }
let andSelect = (arr, cb1, cb2) => {
    let newArr = []
    arr.filter((el) => {
        if(cb1(el) && cb2(el)){
        newArr.push(el)
        }
    })
    return newArr
}
    


let isEven = function (n) {
    return n % 2 === 0;
};

let isPositive = function (n) {
    return n > 0;
};

console.log(andSelect([-3, 8, 7, 11, 6, 12, -4], isEven, isPositive));
// [ 8, 6, 12 ]

let isUpperCase = function (s) {
    return s === s.toUpperCase();
};

let startsWithA = function (s) {
    return s[0].toUpperCase() === 'A';
}
console.log(andSelect(['ants', 'APPLES', 'ART', 'BACON', 'arm'], isUpperCase,  startsWithA));
// [ 'APPLES', 'ART' ]



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = andSelect;
