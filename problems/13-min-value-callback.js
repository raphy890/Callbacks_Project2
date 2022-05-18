/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.


*******************************************************************************/
/*Psuedo Code
write a function => (array,cb)
use reduce method to find the smallest value
if cb === undefined) => return smallest value in the array
if cb !== undefined => pass in smallest value into cb()
return cb(smallestvalue)
*/

//Solution 1:
minValueCallback = (array, cb) => {

    let smallestValue = array.reduce((smallNum,currentNum) => {
        if (smallNum > currentNum){
            return currentNum
        }
        return smallNum
    },)

    if (cb !== undefined){
        return cb(smallestValue)
    }

    else return smallestValue
    return smallestValue
}
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

//Solution 2: For..of
// minValueCallback = (array, cb) => {
//     let minNum = null
//     for(let el of array){
//         if(el < minNum || minNum === null){
//             minNum = el
//         }
//     }
//     if (cb === undefined) {
//         return minNum
//     }else {
//         return cb(minNum)
//     }
// }



//Examples:

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
