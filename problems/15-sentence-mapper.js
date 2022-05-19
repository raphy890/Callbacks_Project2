/*******************************************************************************
Write a function `sentenceMapper` that accepts a sentence and a callback as arguments.
The function should return a new sentence where every word of the original sentence
becomes the result of passing the word to the callback.
*******************************************************************************/
/*Psuedo Code
write a function => (string,callback)
iterate through the string
pass each word into the callback & push into new sentence
return a new sentence
*/

//Solution1: For Loop
// sentenceMapper = (string,cb) => {
//     let array = string.split(' ')           //1.string -> array
//     let NewSentence= []                     //2.create a newarray
//     for(let i=0; i < array.length; i++){    //3.Iterate through the array
//         let word= array[i]                  //4.set each word to a variable
//         NewSentence.push(cb(word))          //5.pass each word into the callback + push the value into the new array
//     }
//     return NewSentence.join(' ')            //6.convert the new array -> string + return the string

// };

//Solution2: For Each
sentenceMapper = (string,cb) => {
    let array = string.split(' ')           //1.string -> array
    let NewSentence= []                     //2.create a newarray
    array.forEach(element => {              //3.Iterate through the array
        NewSentence.push(cb(element))          //5.pass each word into the callback + push the value into the new array
    });
    return NewSentence.join(' ')            //6.convert the new array -> string + return the string

};


//Examples:

let result1 = sentenceMapper("what is the answer?", function(word) {
    return word.toUpperCase() + "!";
});
console.log(result1); // 'WHAT! IS! THE! ANSWER?!'

let removeVowels = function(word) {
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!"aeiou".includes(char)) {
            newWord += char;
        }
    }
    return newWord;
};

let result2 = sentenceMapper("this is pretty cool right", removeVowels);
console.log(result2); // 'ths s prtty cl rght'


/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = sentenceMapper;
