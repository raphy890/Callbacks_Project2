/*******************************************************************************
Write a function `firstIndex` that accepts an array and a callback as arguments.
The function should return the index of the first element of the array that
results in true when passed into the callback. If no elements of the array
result in true, then the function should return -1.
*******************************************************************************/

//Solution1: For Loop
// let firstIndex = (array,cb) => {
//     let answer
//     for (let i = 0; i< array.length; i++){
//         let el = array[i]
//         if(cb(el)){
//             return answer = i
//         }
//     }
//     return answer = -1
// };

//Solution2: ForEach
let firstIndex = (array,cb) => {
    let answer

    array.forEach((el,i) => {
        if(cb(el) && answer === undefined){
             answer = i
        }
    });

    if (answer === undefined){
        answer =-1
    }
    
    return answer
};



//Examples:

let result1 = firstIndex([3, 7, 8, 10], function (n) {
    return n % 2 === 0;
});
console.log(result1); // 2

let result2 = firstIndex(['dog', 'cat', 'tree'], function (s) {
    return s.length === 3;
});
console.log(result2); // 0

let result3 = firstIndex(['canine', 'feline', 'tree'], function (s) {
    return s.length === 3;
});
console.log(result3); // -1


/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = firstIndex;
