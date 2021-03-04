// H/W 1

let number = +prompt("Number?");
let degree = +prompt("Degree?");
let number2 = number;
degree = !isNaN(degree) && degree != 0 ? degree : 2;
for (i = 1; i < degree; i++) {
  number2 = number2 * number;
}
alert(number2);

// H/W2

let quantity = +prompt("Quantity?");
let symbol1 = prompt("Symbol1?");
let symbol2 = prompt("Symbol2?");
quantity = !isNaN(quantity) && quantity != 0 ? quantity : 5;
for (let i = 0; i < quantity; i++) {
    symbol2 = symbol1 + symbol2;
    console.log(symbol2);
}

// H/W3

let name = prompt("Name?");
let age = +prompt("Age?");
let year = +prompt("Year?");
function old(year, age) {
    let years = year - age;
    return years
}
alert(name + ', you are ' + old(year, age) + ' years old.');  


// H/W4

function maths(num1, num2) {
    return Math.round(Math.random() * (num2 - num1) + num1)
}

let example = +prompt('Example?')
example = !isNaN(example) && example != 0 ? example : 1;

for (let i = 1; i < example; i++) {
    let nums = maths(num1 = 1, num2 = 11)
    let numz = maths(num1 = 1, num2 = 11)
    let examples = +prompt(nums + ' + ' + numz + ' =')
    let answer = (nums + numz) == examples ? 'Good job' : 'Incorrect'
    alert(nums + ' + ' + numz + ' = ' + (nums + numz) + '.' + ' Your answer ' + examples + '. ' + answer)
      
}   