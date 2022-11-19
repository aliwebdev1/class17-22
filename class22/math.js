/* let number = -8;
let output = Math.abs(number);
console.log(output);
 */

/*
const number = 54.00001;
const output = Math.ceil(number)
console.log(output);
*/

/* const number = 54.457896;
const output = Math.floor(number)
console.log(output);
*/
/*
const number = 54.557896;
const output = Math.round(number)
console.log(output);
 */

/* const output = Math.random() * 6;
const random = Math.ceil(output)
console.log(random);
*/
// let first = 3;
// let second = 5;

// console.log(first, second);
/* system one
let temp = first;
first = second;
second = temp;
console.log(first, second);
 */

/*
 //second way by distructuring

[first, second] = [second, first];
console.log(first, second); */


/*
 const businessMan = 1000;
const ministar = 800;
const army = 900;

if (businessMan > ministar && businessMan > army) {
    console.log('Business is bigger');
} else if (ministar > businessMan && ministar > army) {
    console.log('minister is bigger');
} else {
    console.log('Army is bigger');
} 
*/

/* function largetNumber(number1, number2) {
    if (number1 > number2) {
        return number1;
    } else {
        return number2;
    }
}

const result = largetNumber(122, 22);
console.log(result); */


/* 
let sum = 0;
for (let i = 0; i < number.length; i++) {
    let element = number[i];
    sum = sum + element;

}
console.log(sum); */

/* 
function addAllNumber(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;

    }
    return sum;
}
let number = [12, 15, 10, 46, 31, 47, 58, 95, 100];
const result = addAllNumber(number)
console.log(result); 
*/


/* function largetNumberArray(numbers) {
    let largst = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largst) {
            largst = element;
        }
    }
    return largst
}
let number = [12, 15, 10, 46, 31, 200, 47, 58, 95, 100];
const result = largetNumberArray(number);
console.log(result); 
*/

/* 
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, .
6th = 5th + 4th;
n = (n - 1) + (n - 2);
i th = (i - 1) + (i - 2);
 */

const fibo = [0, 1];
for (let i = 2; i <= 100; i++) {
    //n = (n - 1) + (n - 2);
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);