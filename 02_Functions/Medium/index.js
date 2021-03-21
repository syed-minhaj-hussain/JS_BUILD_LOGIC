// Given an array, your function should return the length of the array.
// Example: Input: arrayLength([1,5,3,7,8]) ––> Output: 5

const arrayLength = arr => arr.length;
// console.log(arrayLength([1,5,3,7,8]));

// 2) Given an array and an item, your function should return the index at which the item is present.
// Example: Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2

const indexOfElementInAnArray = (arr, element) => arr.indexOf(element);
// console.log(indexOfElementInAnArray([1,6,3,5,8,9], 3));

// 3) Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example: Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]

const replaceElements = (arr, num1, num2) =>  {
   const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === num1){
            newArr.push(num2);
        } else {
            newArr.push(arr[i]);
        }
    }
    return(newArr);
}
// console.log(replaceElements([1,5,3,5,6,8], 5, 10));

// 4) Given two arrays, your function should return single merged array.
// Example: Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

const mergeArray = (arr1, arr2) => {
    const mergedArray = [];
    return mergedArray.concat(arr1, arr2);
}
// console.log(mergeArray([1,3,5],[2,4,6]));

// 5) Given a string and an index, your function should return the character present at that index in the string.
// Example: Input: charAt("neoGcamp", 4) ––> Output: c

const getCharAt = (str, num) => str.charAt(num);
// console.log(getCharAt("neoGcamp", 4))

// 6) Given two dates, your function should return which one comes before the other.
// Example: Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021

const returnMinDate = (date1, date2) => {
    const newDate1 = new Date(date1);
    const newDate2 = new Date(date2);
const result = newDate1 > newDate2 ? date1 : date2;
return result;
}
// console.log(returnMinDate('02/05/2021', '24/01/2021'));

