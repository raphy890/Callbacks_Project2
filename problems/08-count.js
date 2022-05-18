/*******************************************************************************
Write a function `count` that accepts an array and a callback as arguments. The
function should return the number of elements of the array that return true when
passed to the callback.
*******************************************************************************/
/*Psuedo Code
write a function => (array,cb) as arguements
create a counter variable
iterate through the array
pass the element into the cb
if true, increment the variable
return counter
*/

//Solution1: For..Of + Counter
// let count = function(array,cb) {
//     let counter = 0
//     for (let element of array) {
//         if (cb(element)){
//             counter ++   //counter +=1
//         }
//     }
//     return counter
// };


//Solution2: For Each Method (use for true/false or to return a value)
let count = function(array,cb) {
    let counter = 0
    array.forEach(element => {
        if(cb(element)){
            counter ++
        }
    });
    return counter
}


//Examples:

let result1 = count([18, 5, 32, 7, 100], function (n) {
    return n % 2 === 0;
});
console.log(result1); // 3

let result2 = count([17, 5, 31, 7, 100], function (n) {
    return n % 2 === 0;
});
console.log(result2); // 1

let result3 = count(['follow', 'the', 'yellow', 'brick', 'road'], function (str) {
    return str.includes('o');
});
console.log(result3); // 3

let result4 = count(['follow', 'the', 'yellow', 'brick', 'road'], function (str) {
    return str.includes('x');
});
console.log(result4); // 0


/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = count;
