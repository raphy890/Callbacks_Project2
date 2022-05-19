/*******************************************************************************
Write a function `xorSelect` that accepts an array and two callback as arguments.
The function should return a new array containing elements of the original array
that result in true when passed in one of the callbacks, but not both.
*******************************************************************************/

/*Psuedo Code
write a function ==> (array, cb1, cb2)
create new array
pass elements from array into cb1  & cb2
if cb1(ele) || cb2(ele) === true , pass original element into new array
return new array
*/

//Solution1: forEach => create new array => (true && false) => array.push => return new array
// let xorSelect = (array, cb1, cb2) => {
//   let NewArray = [];
//   array.forEach((element) => {
//     if (cb1(element) && !cb2(element)){
//       NewArray.push(element)
//     } else if (!cb1(element)&& cb2(element)) {
//       NewArray.push(element)
//     }
//   });
//   return NewArray
// };

//Solution2: for loop
let xorSelect = (array, cb1, cb2) => {
  let NewArray = [];
  for (let i = 0; i < array.length; i++){
    let element = array[i]
    if (cb1(element) && !cb2(element)){
      NewArray.push(element)
    } else if (!cb1(element)&& cb2(element)) {
      NewArray.push(element)
    }
  }
return NewArray
};





//Examples:

let isEven = function(n) {
  return n % 2 === 0;
};

let isPositive = function(n) {
  return n > 0;
};

console.log(xorSelect([-2, -1, 1, 2, 3, 4], isEven, isPositive));
// [ -2, 1, 3 ]


let longString = function(s) {
  return s.length > 4;
};

let startsA = function(s) {
  return s[0] === "a";
};

console.log(
  xorSelect(["art", "academy", "app", "cat", "buttery"], longString, startsA)
);
// [ 'art', 'app', 'buttery' ]


/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = xorSelect;
