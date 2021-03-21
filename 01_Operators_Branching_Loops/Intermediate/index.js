// 1) Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".
// Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....

const fizzBuzz = () => {
    const arr = [];
    for (let i = 1; i < 101; i++) {
        
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push("FizzBuzz");
        } else if (i % 3 === 0) {
            arr.push("Fizz");
        } else if (i % 5 === 0) {
            arr.push("Buzz");
        }  else {
            arr.push(i);
        }
    }
    console.log(arr);
}
// fizzBuzz();

// 2) Print the following star pattern :-
const printStars = (num) => {
    for(i = 1; i <= num; i ++){
        for(j = 1; j <= i; j++){
            console.log(i);
        }
    } console.log('\n');
}
// printStars(5);
// 3) Write a program to take a number input from user and print multiplication table 12 times for that number.

const EnterNumber = (number) => {
    for (let i = 1; i < 13; i++){
        console.log(number * i);
    }
    return (`Above are the multiples of ${number}`)
};
// console.log(EnterNumber(8));

// 4) Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....
    const fibonacciSeries = (number) => {
        let a = 0; b = 1;
        let c;
        for (let i = 0; i <= number; i++){
            console.log(a);
           c = a + b; // store sum of "a & b" in "c".
           a = b; // store b = in a
           b = c; // store c in b
        }
    }
    // console.log(fibonacciSeries(5));

// 5) Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

const findFactorial = (number) => {
    let factorial = 1;
    for(let i = number; i > 1; i--){
        factorial = factorial * i;
    }
    console.log(factorial);
}
// findFactorial(4);
// 6) Write a Program to take a number input from user and find if the number is Prime or not.
const isNumberPrime = number => number % 2 === 0 ? `Yes ${number} is a Prime Number` : `Yes ${number} is a Prime Number`;
// console.log(isNumberPrime(7));

// 7) Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.
const isWeekdayOrWeekend = (day) => {
    switch (day.toLowerCase()) {
        case 'monday' :
            return (`${day} is a weekday`);
        case 'tuesday' :
            return(`${day} is a weekday`);
        case 'wednesday' :
            return(`${day} is a weekday`);
        case 'thursday' : 
            return(`${day} is a weekday`);
        case 'friday' : 
            return(`${day} is a weekday`);
        case 'saturday' :
            return(`${day} is a weekend`);
        case 'sunday' :
            return(`${day} is a weekend`);
        default : 
            return(`Eenter The Correct day. You Have Entered ${day}`);

    }
}
console.log(isWeekdayOrWeekend('MONDAY'));