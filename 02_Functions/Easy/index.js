// 1) Given a and b, your function should return the value of ab
// Example: Input: power(2,3) ––> Output: 8

const multiply = (a, b) => (a * b);
// console.log(multiply(4, 7));

// 2) Given length of a regular hexagon, your function should return area of the hexagon.
// Example: Input: areaOfHexagon(10) ––> Output: 259.80
const areaOfHexagon = a => {
    const area = (3 * Math.sqrt(3) / 2) * a*a;
    console.log(area);
}
// areaOfHexagon(10);

// 3) Given a sentence, your functions should return the number of words in the sentence.
// Example: Input: noOfWords(We are neoGrammers) ––> Output: 3

const noOfWords = words => (words.split(' ').length);
// console.log(noOfWords('We are neoGrammers'));

// 4) Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
            /* Example:
            Input: findMin(3,5) ––> Output: 3
            Input: findMin(3,5,9,1) ––> Output: 1
            (Hint: Lookup rest parameters in JavaScript) */

const findMin = (...values) => Math.min(...values);
// console.log(findMin(3, 5, 7, 55));

// 5) Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
           /* Example:
            Input: findMax(3,5) ––> Output: 5
            Input: findMax(3,5,9,1) ––> Output: 9
            (Hint: Lookup rest parameters in JavaScript) */

const findMax = (...values) => Math.max(...values);
// console.log(findMax(1, 2, 3, 5, 8));

// 6) Given three angles of a triange, your function should return if it is a scalen, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalen Triangle

const typeOfTriangle = (a, b, c) => {
    if((a === b && a === c) && (a + b + c === 180)) {
        console.log(`Equilateral Triangle`);
    } else if((a !== b && a !== c) && (a + b + c === 180)) {
        console.log(`Scalen Triangle`);
    } else if ((a === b || a === c || b === c) && (a + b + c === 180)) {
        console.log(`Isosceles Triangle`);
    } else {
        console.log(`Enter The Correct Angles`);
    }  
}
// typeOfTriangle(55, 70, 55);

