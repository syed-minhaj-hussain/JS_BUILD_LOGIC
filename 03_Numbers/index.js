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