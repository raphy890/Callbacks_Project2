/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.
*******************************************************************************/

/*
Psuedo Code
write a function => (sentence,object)
object => key= suffixes ; values = callbacks
callback = Object.value(object)
sufixes = Object.keys(object)
create a new sentence

if word ends with suffix => pass word into callback and push new word into new sentence
if word does not end with suffix keys, return word unmodifed and push into new sentence
return new sentence
*/

//Solution 1: For Each
let suffixCipher = (sentence,object) => {
    let newSentence = []

    let array= sentence.split(' ')

    array.map((word,i) => {

        for ( let suffix in object) {               //4. iterate through object
            //let callback = object[suffix]           //value = ojbect[key]

            if (word.endsWith(suffix)){
                newSentence.push(object[suffix](word))
                return      //if word does not include a suffix, it will break out of the for-loop
            }
        }
        newSentence.push(word)
    });
    return newSentence.join(' ')
};



//Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = suffixCipher;
