/*******************************************************************************
Write a function `myFilter` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in
the element. The function should return a new array containing
the elements that result in true when passed to the callback.

Do not use the built in Array#filter.
*******************************************************************************/
/*Psueo Code:
create a function  => (array,cb)
create a new array
iterate through the array
pass in element through the cb and pus into new array
return array
*/

//Solution 1: For.. Of Method
myFilter = (array, cb) => {
    let NewArray = [];
    for (let el of array) {  // for( let i = 0; i < arr.length ; i ++)
        if (cb(el)) {
            NewArray.push(el)
        }
    }
    return NewArray
};

//Solution 2: Filter Method
// myFilter = (array, cb) => {

//     let NewArray = array.filter( (el) => {
//         return (cb(el))
//     })
//     return NewArray
// }


//Examples:

let result1 = myFilter([5, 7, 4, 3, 8], function (n) {
    return n % 2 === 0;
});
console.log(result1);       // [ 4, 8 ]

let result2 = myFilter(['choose', 'big', 'words', 'only'], function (s) {
    return s.length > 3;
});
console.log(result2);      // ['choose', 'words', 'only']


/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myFilter;
