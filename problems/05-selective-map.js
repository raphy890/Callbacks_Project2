/*******************************************************************************
Write a function `selectiveMap` that accepts an array and two callbacks as arguments.
The function should return a new array where elements are replaced with the results
of calling the second callback on the element only if calling the first callback
on the element results in true. If calling the first callback on an element results
in false, then the element should not be changed in the new array.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
    (optional if you already asked a question for this problem.)
- Explain how you are using both of the callbacks in the function.
- What do you expect each callback function to be returning?
- How many times are you calling each callback function?
*******************************************************************************/

/*Psuedo Code
write a function => pass in an (array, cb1, cb2)
create a new array
iterate through the array
if cb(element) === true, then push element into 2nd
if cb(element) === false, push only the element into the new array
return a new array
*/

//Solution 1: for... of Method
// let selectiveMap = (array,cb1,cb2) => {
//     let NewArray = []
//     for(let el of array){
//         if (cb1(el) ){
//             NewArray.push(cb2(el))
//         } else {
//             NewArray.push(el)
//         }
//     }
//     return NewArray
// }

//Solution 2: ForEach Method
let selectiveMap =(array,cb1,cb2) => {
    let NewArray = array.map((ele) => {
        if (cb1(ele)){
            return (cb2(ele))
        } else {
            return ele
        }
    })
    return NewArray
}


//Examples:

function isEven(n) {
    return n % 2 === 0;
}

function isPositive(n) {
    return n > 0;
}

function square(n) {
    return n * n;
}

function flipSign(n) {
    return n * -1;
}

console.log(selectiveMap([8, 5, 10, 4], isEven, square));
// [ 64, 5, 100, 16 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isEven, flipSign));
// [ 10, -4, 7, -6, 2, -9 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isPositive, square));
// [-10, 16, 49, 36, -2, -9]


/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = selectiveMap;
