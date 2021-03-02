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

