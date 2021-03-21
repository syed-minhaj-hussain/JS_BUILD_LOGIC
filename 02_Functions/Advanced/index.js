// 1) Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
/* Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on. */

const encodeString = (str, num) => {
    let charCode = 0;
    let result = '';
    for(let i = 0; i < str.length; i++) {
        charCode = (str[i].charCodeAt()) + num;
        result += String.fromCharCode(charCode);
    }
    return(result);
}
// console.log(encodeString("neogcamp", 2));

// 2) Given a sentence, return a sentence with first letter of all words as capital.
// Example:Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers
const capitalize = (str) => {
    const strToArr = str.split(' ');
    const StrMap = strToArr.map(str => str.charAt(0).toUpperCase() + str.substring(1));
    const arrToStr = StrMap.join(' ');
    return arrToStr;
   
}
// console.log(capitalize('we are neoGrammers'));

// 3) Given an array of numbers, your function should return an array in the ascending order.
// Example: Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]
const sortNumbers = arr => arr.sort((x, y) => x - y);
console.log(sortNumbers([100,83,32,9,45,61]));

// 4) Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
// Example: Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen

const reverseCharactersOfWord = str => {
    strArray = str.split(' ');
    strArrayMap = strArray.map(str => str.split('').reverse().join('')).join(' ');
    return strArrayMap;  
};
// console.log(reverseCharactersOfWord('we are neoGrammers'));