// 1) Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

const num1 = 5;
const num2 = 13;
const num3 = 7;
const num4 = 21;
const num5 = 48;

const AdditionOfNumbers = num1 + num2 + num3 + num4 + num5;
// console.log(`Total : ${AdditionOfNumbers}`);

// 2) Write a program to take a number input from user and determine whether the number is odd or even.
const isNumberOddOrEven = (number) => {
    return number % 2 === 0 ? `${number} IS EVEN` : `${number} IS ODD`;
}
const result = isNumberOddOrEven(5);
// console.log(result);

// 3) Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.
const findMinMax = (num1, num2) => {
    return num1 > num2 ? `${num1} is Greater & ${num2} is Smaller` : `${num2} is Greater & ${num1} is Smaller`;
}
const MinMax = findMinMax(129, 251);
// console.log(MinMax);

// 4) Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

const findMax = (num1, num2, num3) => {
     if (num1 > num2 && num3) {
        return(`${num1} is Greater`);
     } else if(num2 > num3 && num1) {
         return(`${num2} is Greater`);
     } else if(num3 > num1 && num2) {
         return(`${num3} is Greater`);
     } else {
         return(`All Are Equal`);
     }
}
// console.log(findMax(8, 23, 17));

// 5) Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.
const findMin = (num1, num2, num3) => {
    if(num1 < num2 && num3) {
        return(`Smaller Number Is ${num1}`);
    } else if (num2 < num3 && num1) {
        return(`Smaller Number is ${num2}`);
    } else if (num3 < num1 && num1) {
        return(`Smaller Number Is ${num3}`);
    } else {
        return(`All Are Equal!`);
    }
}
// console.log(findMin(35, 29, 46));

// 6) Write program to take a month as an input from the user and find out whether the month has 31 days or not.
const checkMonth = (enterMonth) => {
    const month = enterMonth.toLowerCase();
    const [january, march, may, august, october, december] = [31, 31, 31, 31, 31, 31];
    if(month === "january" || month === "march" || month === "may" || month === "august" || month === "october" || month === "december") {
        return (`YES ${month} has 31 days`);
    } else {
        return (`NO! ${month} doesn't has 31 days!`);
    }
}
// console.log(checkMonth("march"));



