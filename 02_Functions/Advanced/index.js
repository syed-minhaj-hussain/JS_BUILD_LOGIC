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