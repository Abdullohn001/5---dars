// 1-masala
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(16, 13));

// 2-masala
// function toMinuts(a) {
//   return a * 60;
// }
// console.log(toMinuts(6));

// 3-masala
// function nextNumber(a) {
//   return a + 1;
// }
// console.log(nextNumber(10));

// 4-masala
// function BurchakYuzi(a, b) {
//   console.log(a * b / 2);
// }
// BurchakYuzi(3, 5);

// 5-masala
// function AgeToDay(a) {
//   console.log(a * 365);
// }
// AgeToDay(22);

// 6-masala
// function kub(a) {
//   console.log(a ** 3);
// }
// kub(3);

// 7-masala
// function FirstElement(array) {
//   return array[0];
// }
// console.log(firstElement([2, 4, 6]));

// 8-masala
// function Plass(a, b) {
//   console.log(a * b);
// }
// Plass(2, 3);

// 9-masala
// function toSecunds(a) {
//   console.log(a * 3600);
// }
// toSecunds(4);

// 10-masala
// function thirdside(a, b) {
//   console.log(a + b - 1);
// }
// thirdside(3, 4);

// 11-masala
// function remainder(a, b) {
//   console.log(a % b);
// }
// remainder(4, 3);

// 12-masala
// function surfaceRectangle(a, b) {
//   console.log(a * b);
// }
// surfaceRectangle(5, 9);

// 13-masala
// function addString(a) {
//   console.log(` ${a} something`);
// }
// addString("hello world");

// 14-masala
// let quater = function (a) {
//   console.log(a ** 2);
// };
// quater(5);

// 15-masala
// function boolean(a) {
//   if (a <= 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// boolean(0);

// 16-masala

// let multySide = (n) => {
//   console.log((n - 2) * 180);
// };

// multySide(9);

// 17-masala

// function basketBall(a, b) {
//   console.log(a * 2 + b * 3);
// }

// basketBall(2, 5);

// 18-masala

// function addEdabit(a) {
//   console.log(`${a}Edabit`);
// }
// addEdabit("hello");

// 19-masala

// let twoNumber = (a, b) => {
//   if (a + b < 100) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };

// twoNumber(59, 20);

// 20-masala
// let newArray = [];

// function printArray(a) {
//   for (let i = 1; i <= a; i++) {
//     newArray.push(i);
//   }
//   console.log(newArray);
// }
// printArray(7);
// printArray(29);

// 21-masala

// function ferma(a, b, c) {
//   console.log(a * 2 + b * 4 + c * 4);
// }

// ferma(2, 3, 5);

// 22-masala

// function and(a, b) {
//   if (a == true && b == true) {
//     console.log(true);
//   } else if (a == true && b == false) {
//     console.log(false);
//   } else if (a == false && b == true) {
//     console.log(false);
//   } else {
//     console.log(true);
//   }
// }

// and(true, true);
// and(true, false);
// and(false, true);
// and(false, false);

// 23-masala

// function equal(a, b) {
//   if (a == b) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// equal(3, 3);
// equal(3, 4);

// 24-masala

// function footBall(a, b, c) {
//   console.log(a * 3 + b * 1 + c * 0);
// }

// footBall(3, 4, 5);

// 25-masala

// function hourMinuts(a, b) {
//   console.log(a * 3600 + b * 60);
// }

// hourMinuts(4, 5);

// 26-masala

// let num = 0;

// function tub(a) {
//   for (let i = 1; i <= a; i++) {
//     if (a % i == 0) {
//       num += 1;
//     }
//   }
//   if (num == 2) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// tub(7);
// tub(8);

// 27-masala

// function type(a, b) {
//   if (a === b) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// type(1, 1);
// type(1, "1");

// 28-masala

// function changeType(bool) {
//   console.log(bool.toString());
// }
// changeType(true);
// changeType(false);

// console.log("boolean holati " , true);

// 29-masala

// let newArrow = (a) => {
//   console.log(a);
// };

// newArrow("Assalomu alaykum Nabiyev");

// 30-masala

// function fream(a, b) {
//   console.log(a * 60 * b);
// }

// fream(1, 1);
// fream(10, 1);
// fream(10, 25);

// 31-masala

// function calc(a) {
//   let numbers = a.split(/[\+\-\*\/]/);
//   let operators = a.match(/[\+\-\*\/]/)[0];

//   let number1 = +numbers[0];
//   let number2 = +numbers[1];

//   let result;
//   switch (operators) {
//     case "+":
//       result = number1 + number2;
//       break;
//     case "-":
//       result = number1 - number2;
//       break;
//     case "*":
//       result = number1 * number2;
//       break;
//     case "/":
//       result = number1 / number2;
//       break;
//   }
//   console.log(result);
// }

// calc("13+16");
// calc("16-13");
// calc("2*23");
// calc("14/7");

// 32-masala

// function equalTen(a, b) {
//   if (a == 10 || b == 10) {
//     console.log(true);
//   } else if (a + b == 10) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// equalTen(1, 9);
// equalTen(1, 10);
// equalTen(9, 9);

// 33-masala

// function litr(a) {
//   if (a >= 10) {
//     console.log(a * 10);
//   } else {
//     console.log(100);
//   }
// }

// litr(15);
// litr(23.5);
// litr(3);

// 34-masala

// function bigNumber(a, b) {
//   if (a > b) {
//     console.log(a);
//   } else {
//     console.log(b);
//   }
// }
// bigNumber(1, 9);
// bigNumber(1, 0);
// bigNumber(-1, 0);

// 35-masala

// function massiv(a, b) {
//   console.log([a, b]);
// }

// massiv(3, 6);

// 36-masala

// function stringEqual(a, b) {
//   if (a.length == b.length) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// stringEqual("AB", "CD");
// stringEqual("farhod", "nazarov");
// stringEqual("adfa", "fadsfdafdsfda");

// 37-masala

// function stringEqual(a) {
//   if (a.length == 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// stringEqual("");
// stringEqual("farhod");
// stringEqual("  ");

// 38-masala

// function devidedFifi(a) {
//   if (a % 5 == 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// devidedFifi(15);
// devidedFifi(3);
// devidedFifi(18);

// 39-masala

// function devidedFifi(a) {
//   if (a % 100 == 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// devidedFifi(400);
// devidedFifi(30);
// devidedFifi(180);

// 40-masala

// function uzunlik(a) {
//   let number = a.split("");
//   console.log(number);
// }

// uzunlik("farhod");
// DOMLA OZI BIZ BU MAVZUNI O'TMAGANMIZ SHUNAQA HOLATTA CHIQARIB QO'YDIM :).

// 41-masala

// let bolinsin = (a, b) => {
//   if (a > b && a % b == 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// MASHINI SHARTIDA HATOLIK BOR

// bolinsin(3, 12);
// bolinsin(3, 7);
// bolinsin(3, 15);

// 42-masala

// function numberToString(a) {
//   console.log(Number(a));
// }

// numberToString("4");

// 43-masala

// function fourRightAngles(a, b) {
//   if (a > 0 && b > 0) {
//     console.log(a * b);
//   } else {
//     console.log(-1);
//   }
// }

// fourRightAngles(4, 6);
// fourRightAngles(-1, 6);
// fourRightAngles(4, 0);

// 44-masala

// function nameSurname(a, b) {
//   console.log(`${a},  ${b}`);
// }

// nameSurname("Farhod", "Nazarov");

// 45-masala

// function bug(a) {
//   if (a == true) {
//     console.log("sad days");
//   } else if (a == false) {
//     console.log("It's a good day");
//   }
// }

// bug(false);
// bug(true);

// 46-masala

// function massive(a, b) {
//   for (let i = 1; i <= b; i++) {
//     a.shift();
//   }
//   console.log(a);
// }

// massive([1, 2, 3], 1);
// massive([1, 2, 3], 5);
// massive([1, 2, 3], 0);

//  47-masala

// BU MAVZUNI HAM OTMAGANMIZ BU OBYEKT MAVZUSI EKAN

//  48-masala

// let negative = function (a) {
//   console.log(-a);
// };

// negative(4);
// negative(-5);
// negative(7);
// negative(-2);
