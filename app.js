/*
What is the difference between the sum of the squares of the first ten natural numbers,
and the square of the sum of the first ten natural numbers?
*/
var naturalNums = [1,2,3,4,5,6,7,8,9,10];

function getSumOfSquares() {
  var squareNums = naturalNums.map((num) => Math.pow(num,2));
  var sumNums = squareNums.reduce((pv, cv) => pv + cv);
  getSquareOfSums(sumNums);
}

function getSquareOfSums(sumOfSquares) {
  var sumOfNats;
  sumOfNats = naturalNums.reduce((pv, cv) => pv + cv);
  sumOfNats = sumOfNats * sumOfNats;
  var mainDifference = sumOfNats - sumOfSquares;
  console.log ("Difference between sum of squares and square of sums: ",mainDifference);
}

getSumOfSquares();

/*

Initial solution:

var naturalNums = [1,2,3,4,5,6,7,8,9,10];

function getSum(total, num) {
  return total + num;
}

function getSumOfSquares() {
  console.log("Natural numbers array: ",naturalNums);
  var squareNums = [];
  var sumNums;
  for (var i = 0; i < naturalNums.length; i++) {
    squareNums.push(Math.pow(naturalNums[i],2));
  }
  console.log("Squares of main array: ",squareNums);
  sumNums = squareNums.reduce(getSum);
  console.log("Sum of squares of main array: ",sumNums);
  getSquareOfSums(sumNums);
}

function getSquareOfSums(sumOfSquares) {
  console.log("Natural numbers array: ",naturalNums);
  var sumOfNats;
  sumOfNats = naturalNums.reduce(getSum);
  console.log("Sum of main array: ",sumOfNats);
  sumOfNats = sumOfNats * sumOfNats;
  console.log("Square of sums of main array: ",sumOfNats);
  var mainDifference = sumOfNats - sumOfSquares;
  console.log ("Difference between sum of squares and square of sums: ",mainDifference);
}
getSumOfSquares();

*/