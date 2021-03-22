// 1) Write a program to input 2 numbers and display the sum of the numbers to the console.
                // Input Number 1: 20
                // Input Number 2: 40
                // Sum : 60
const sumOfTwoNumbers = (a, b) => a + b;
// console.log(sumOfTwoNumbers(20, 40));

// 2) Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest

                // Input: P=100, R=6%, T=2
                // Output: 12
const calculateSimpleInterest = (p, r, t) => {
     const SI = (p * r * t) / 100;
     return SI;
}
// console.log(calculateSimpleInterest(100, 6, 2));

// 3) Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.
                // Formula : 0.5 * m * v * v
const calculateKineticEnergy = (m , v) => {
    const KE = 0.5 * m * v * v;
    return KE;
}
// console.log(calculateKineticEnergy(2, 5));

// 4) Write a program to convert Fahrenheit to Celsius. For Celsius to Fahrenheit conversion use: T = 9*T/5 + 32 'T' is the temperature on the Celsius scale.

                // Input: 56
                // Output: 13.33333
const farenheitToCelcius = (farenheit) => {
    const celcius = ((farenheit-32)*5) / 9; 
    console.log(celcius);
}
// farenheitToCelcius(56);

// 5)Calculate the area, perimeter of a s1.re of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.

// Formula : Area: a*a; Perimeter: 4*a; Surface Area: 6*a*a; Volume: a*a*a

const calculateUnits = a => {
    const area = a * a;
    const perimeter = 4 * a;
    const surfaceArea = 6 * a * a;
    const volume = a * a * a;

    return (`
    Area : ${area} 
    Perimeter : ${perimeter}
    Surface Area : ${surfaceArea}
    Volume : ${volume}
    `);
}
// console.log(calculateUnits(4));

// 6) Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

                // Input: CP = 1500, SP = 2000
                // Output: 500 Profit

                // Input: CP = 3125, SP = 1125
                // Output: 2000 Loss
const calculateProfitOrLoss = (cp, sp) => {
    let profit;
    let loss;
    if(cp > sp) {
        return `Loss : ${loss = cp - sp}`;
    } else if(sp > cp) {
        return `Profit : ${profit = sp - cp}`;
    } else {
        return 'Enter The Correct CP & SP';
    }
}
// console.log(calculateProfitOrLoss(3125, 1125));

// 7) Write a program to calculate sum of N natural digits, as input by the users?
                 // Enter a positive integer: 100
                // Sum = 5050
const calculateSumOfnNaturalDigits = n => {
    let sum = 0;
    for (let i = 0; i <= n; i++)  {
        sum = sum + i;
    }
    return sum;
}
// console.log(calculateSumOfnNaturalDigits(100));

