/*******************************************************************************
Write a function `myMap` that accepts an array and a callback as arguments.
The function return an array of new elements obtained by calling the callback on
each element of the array, passing in the element.

Do not use the built in Array#map

// Examples

pseudocode:
1. write function myMap accepts arr, cb
2.return newArr 
3. pass in el to Cb
4. return newArr



*******************************************************************************/
// solution #1
// let myMap = function(arr, cb) {
// let newArr = []
// for (let el of arr){
// newArr.push(cb(el))
// }
// return newArr
// };

// solution#2

myMap = (arr, cb) => {
let newArr = []
arr.forEach((el) =>  newArr.push(cb(el))) 
return newArr
} 




let result1 = myMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

let result2 = myMap(['run', 'Forrest'], function (el) {
    return el.toUpperCase() + '!';
});
console.log(result2);   // [ 'RUN!', 'FORREST!' ]


/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myMap;
