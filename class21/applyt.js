// let nam = 40;
// nam = 45;
// console.log(nam);

// const name = "jihad";
// name = "ripon";

// var inch = 144;
// var feet = 144/12

/* function feetToInch(inch) {
    var totalFeet = inch / 12;
    return totalFeet;

}

var inches = 189;
var result = feetToInch(inches);

console.log(parseFloat(result.toFixed(1))); */

// console.log(11 % 2 == 0);

// is even
// let number = 78;

// function evenNumber(number) {
//     if (number % 2 == 0) {
//         return true;
//     }
//     return false;
// }

// let value = 47511;
// let result = evenNumber(value);
// console.log(result);


// odd number 

/* function oddNumber(number) {
    if (number % 2 == 1) {
        return "this numbe is odd number";
    }
    return "this number is even";
}
let value = 7845;

let result = oddNumber(value)
console.log(result); */
/* 3!
3 = 3 X 2 X 1;
4! = 4 X 3 X 2 X 1;
5! = 5 X 4 X 3 X 2 X 1; */

let factorial = 1;

for (let i = 1; i <= 7; i++) {
    // console.log(i);
    factorial = factorial * i;
    // console.log(factorial);
}

/* function factNumber(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;
}
let result = factNumber(5)
console.log(result); */

/* 
function getFactorial(number) {
    fact = 1;
    let i = 1;
    while (i <= number) {
        fact = fact * i;
        i++;

    }
    return fact;
}

let totalFactorial = getFactorial(7)
console.log(totalFactorial); 
*/

function getFactorial(number) {
    let fact = 1;
    for (i = number; i >= 1; i--) {
        fact = fact * i;
        console.log(fact);
    }
    return fact;
}

let totalFact = getFactorial(8);
// console.log(totalFact);