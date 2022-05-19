/*******************************************************************************
Write a function `mapMutator` that accepts an array and a callback as arguments.
The function should pass each element and index into the callback and use the result
to overwrite elements of the original array, mutating the array.
*******************************************************************************/

/*Psuedo Code
write a function => (array, cb)
use array.map() to mutate the array
pass each element & index in the callback => cb(ele,i)
return value from passing in cb(ele,i)
*/



//Solution1: For Each Method
// let mapMutator = (array,cb) => {

//   array.forEach((element,index) => {
//         array[index] = cb(element,index)
//     })
// };



//Solution2: For Loop
let mapMutator = (array,cb) => {
    for(let i =0; i < array.length; i++){
        let el= array[i]
        array[i] = cb(el,i)
    }
}


//Examples:

let arr1 = [4, 2, 6, 5];
mapMutator(arr1, function (el) {
    return el * 2;
});
console.log(arr1);  // [ 8, 4, 12, 10 ]

let arr2 = [8, 9, 10];
mapMutator(arr2, function (el, i) {
    return el * i;
});
console.log(arr2); // [ 0, 9, 20 ]


/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = mapMutator;
