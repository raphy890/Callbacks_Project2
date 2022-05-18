/*******************************************************************************
Write a function `myEvery` that accepts an array and a callback as arguments.
The function should return a boolean indicating whether or not all elements of
the array return true when passed into the callback.

Do not use the built in Array#every.

Examples:

pseudoCode: 
1.  function takes in arr, cb
2.  create variable = answer
3. forEach
4. if cb(el) === true
5. return true
*******************************************************************************/

let myEvery = function(arr, cb) {
    let answer = true
    arr.forEach((el) => {
        if(!cb(el)){
        answer = false
        }
    })
return answer
};

// solution #2
// let myEvery = (arr, cb) => {
//     for (let i = 0; i < arr.length; i++){
//         if (cb(arr[i]) === false) {
//             return false;
//         }
//     }
//     return true;
// }

let isEven = function (num) {
    return num % 2 === 0;
};

let hasO = function(string) {
    return string.includes('o');
};

console.log(myEvery([4, 8, 6, 10], isEven));            // true
console.log(myEvery([4, 7, 6, 10], isEven));            // false
console.log(myEvery(['book', 'door'], hasO));           // true
console.log(myEvery(['book', 'door', 'pen'], hasO));    // false

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myEvery;
