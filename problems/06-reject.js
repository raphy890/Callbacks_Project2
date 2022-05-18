/*******************************************************************************
Write a function `reject` that accepts an array and callback as arguments. The
function should call the callback for each element of the array, passing in the
element. The function should return a new array
containing elements of the original array that result in false when given to the
callback.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

Examples:

pseudoCode: 
1. create function passing in arr, cb
1.5 create new Arr
2. iterate through arr
3. passing into el into cb
4. if cb el === false push into newArr
5. return newArr



*******************************************************************************/

// let reject = function(arr, cb) {
// let newArr = []
// for (let el of arr){
//     if(!cb(el)){
//         newArr.push(el)
//     }
// }
// return newArr
// };
 
// alternateSolution

let reject = (arr, cb) => {
    let newArr = arr.filter((el) => {
        return (!cb(el))
    })
    return newArr
}

let isEven = function(n) {
    return n % 2 === 0;
};
console.log(reject([7, 8, 5, 6, 12, 11], isEven)); // [ 7, 5, 11 ]

let hasA = function(s) {
    return s.toLowerCase().includes('a');
};
console.log(reject(['breadth', 'GRAPH', 'depth', 'height'], hasA)); // [ 'depth', 'height' ]



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = reject;
