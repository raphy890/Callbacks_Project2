/*******************************************************************************
Write a function `none` that accepts an array and a callback as arguments.
The function should call the callback for each element of the array, passing in
the element. The function should return true if all
elements of the array result to false when passed into the callback. Otherwise,
the method should return false.
*******************************************************************************/
/*Psuedo Code:
write a function => (array,cb)
iterate through the array
function calls cb for each element => cb(element)
if all (cb(element) === false) return true
if cb(element === true) return false
if all cb(element) === false   ===> function return true
if cb(element) === true return false
*/

//Solution 1: For Each Method
let none = (array,cb) => {
    let answer = true
    let counter = 0
    array.forEach(element => {
        if (cb(element) === true){
            answer = false
        }
    });
    return answer
};



Examples:

// let result1 = none(['ruby', 'topaz', 'opal'], function(w) {
//     return w.includes('e');
// });
// console.log(result1);   // true

// let result2 = none(['ruby', 'topaz', 'sapphire', 'opal'], function(w) {
//     return w.includes('e');
// });
// console.log(result2);   // false

// let result3 = none([4, 5, 7, 1], function(n) {
//     return n < 0;
// });
// console.log(result3);   // true

// let result4 = none([4, -5, 7, -1], function(n) {
//     return n < 0;
// });
// console.log(result4);   // false

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = none;
