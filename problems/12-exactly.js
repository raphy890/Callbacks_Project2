/*******************************************************************************
Write a function `exactly` that accepts an array, a number, and a callback as
arguments. The function should return a boolean indicating whether or not there are
exactly `number` elements of the array that return true when passed into the callback.

*******************************************************************************/
/*Psudeo Code
write a function => (array,num,cb)
create variable = counter
Iterate through the array
if cb(el) === true, counter ++
return(counter === nuumber )
*/

//Solution 1: For..of Method
// let exactly = function(array,number,cb) {
//     let counter = 0
//     for(let el of array){
//         if (cb(el)) {
//             counter ++
//         }
//     }
//     return (counter === number)
// };

//Solution 2: Filter Method  (Can also be solved using Array.ForEach or Array.Map)
let exactly = function(array,number,cb) {
    let counter = 0
    array.filter((el) =>{
        if (cb(el)){
            counter ++
        }
    })
    return (counter === number)
}

//Examples:

let result1 = exactly([18, 5, 32, 7, 100], 3, function (n) {
    return n % 2 === 0;
});
console.log(result1); // true

let result2 = exactly([18, 5, 32, 7, 100], 2, function (n) {
    return n % 2 === 0;
});
console.log(result2); // false

let result3 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 1, function (str) {
    return str.includes('x');
});
console.log(result3); // false

let result4 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 0, function (str) {
    return str.includes('x');
});
console.log(result4); // true



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = exactly;
