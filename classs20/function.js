/* function addTwoNumber() {
    console.log(8);
}
console.log('somet text');
addTwoNumber();
console.log('somet text');
addTwoNumber(); */

function bringSinggara(taka) {
    var singraPrice = 10;
    var singraQuantity = taka / singraPrice;
    return singraQuantity;
}
var vaiyarTaka = 100;
var result = bringSinggara(vaiyarTaka);
// console.log(result);

/* function addTwoNumber(number1, number2, number3) {
    var result = number1 - number2;
    var z = result * number3;
    return z;
}

var first = 22;
var second = 21;
var third = 30;
var total = addTwoNumber(first, second, third);
console.log(total); */

var student = {
    name: 'Abdul Sabdul',
    age: 22,
    hair: 'lomba lomba',
    color: 'comalokko'
}
// student.age = 23;
// console.log(student);

// student['age'] = 24
// console.log(student);

var color = 'yellow';

/* if (color == 'green') {
    console.log("yeaa we are getting green color");
}
else if (color == 'red') {
    console.log("yeaa we are getting red color");
}
else if (color == 'blue') {
    console.log("yeaa we are getting blue color");
}
else if (color == 'gray') {
    console.log("yeaa we are getting gray color");
}
else if (color == 'sky') {
    console.log("yeaa we are getting sky color");
}
else if (color == 'yellow') {
    console.log("yeaa we are getting yellow color");
}

else {
    console.log("balck is best");
} */

/* 
switch (color) {
    case 'green':
        console.log("yeaa we are getting green color");
        break;
    case 'red':
        console.log("yeaa we are getting red color");
        break;
    case 'blue':
        console.log("yeaa we are getting blue color");
        break;
    case 'yellow':
        console.log("yeaa we are getting yellow  color");
        break;
    default:
        console.log("balck is best 82");
} */


var i = 0;
while (i <= 15) {
    // console.log(i);
    if (i == 5) {
        break
    }
    i++;
}

for (var i = 0; i <= 15; i++) {
    console.log(i);
    if (i == 10) {
        break
    }

}

var numbers = [10, 12, 15, 78, 96, 100, 45, 136, 57];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i]
    if (number >= 100) {
        continue
    }
    console.log(number);
}


var phones = ['iPhone', 'samsang', 'redmi', 'pixel', 'vibo', 'onePlus'];
if (phones.indexOf('samsang') == -1) {
    console.log('Amir khan ami toamr phne kinte parlam na sorry');
} if (phones.indexOf('iPhone') != -1) {
    console.log('iPhone kine pic tule futani marbo');
}