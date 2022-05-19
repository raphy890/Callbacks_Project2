/*******************************************************************************
Write a function `greaterCallbackValue` that accepts a value and two callbacks
as arguments. The function should pass the value to both callbacks and return the
result of the callback that is greater.
*******************************************************************************/

/*Psudeo Code:
write a fucntion => (value,cb1, cb2)
pass value to both cb1 & cb2
return highest value betwen cb1(value) & cb2(value)
*/

//Solution1
greaterCallbackValue = (value,cb1,cb2) =>{
    let x = cb1(value)
    let y = cb2(value)
    if (x > y){
        return x
    }else return y
};



//Examples:

let doubler = function (n) {
    return 2 * n;
}

let squarer = function (n) {
    return n * n;
}

console.log(greaterCallbackValue(5, doubler, squarer));     // 25
console.log(greaterCallbackValue(1, doubler, squarer));     // 2
console.log(greaterCallbackValue(9, Math.sqrt, doubler));   // 18
/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = greaterCallbackValue;
