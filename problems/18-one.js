/*******************************************************************************
Write a function `one` that accepts an array and a callback as arguments. The
function should call the callback for each element of the array, passing in the
element and its index. The function should return a boolean indicating whether
or not exactly one element of the array results in true when passed into the callback.
*******************************************************************************/
/*Psuedo Code
write a function ==> (array, callback)
iterate through the array
pass in each element & index into the callback
if element passed into cb is true, the function should return true
*/

// //Solution 1 - For Each

// let one = (array,cb) => {
//     let count = 0
//     array.forEach ((element, index) => {
//         if (cb(element,index)) {
//             count ++
//         }
//     })
//     if (count === 1) {
//         return true
//     } else return false
// }

//Solution 2 - For Loop
let one = (array,cb) => {
    let count = 0
    for ( let i = 0; i < array.length; i++) {
        let element = array[i]
        if (cb(element,i)) {
            count ++
        }
    }
    if (count === 1) {
        return true
    } else return false
}



//Examples:

let result1 = one(['x', 'y', 'z'], function(el) {
    return el === 'a';
});
console.log(result1);   // false

let result2 = one(['x', 'a', 'y', 'z'], function(el) {
    return el === 'a';
});
console.log(result2);   // true

let result3 = one(['x', 'a', 'y', 'a', 'z'], function(el) {
    return el === 'a';
});
console.log(result3);   // false

let result4 = one(['apple', 'dog'], function(el) {
    return el.length > 3;
});
console.log(result4);   // true

let result5 = one(['apple', 'dog', 'pear'], function(el) {
    return el.length > 3;
});
console.log(result5);   // false

let result6 = one(['apple', 'dog', 'food', 'cat'], function(el, idx) {
    return el.length === idx;
});
console.log(result6);   // true



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = one;
