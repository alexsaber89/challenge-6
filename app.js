// What is the difference between the sum of the squares of the first ten natural numbers,
// and the square of the sum of the first ten natural numbers?
var naturalNums = [1,2,3,4,5,6,7,8,9,10];

function getSum(total, num) {
  return total + num;
}

function getSumOfSquares() {
  var squareNums = [];
  var sumNums;
  for (var i = 0; i < naturalNums.length; i++) {
    squareNums.push(naturalNums[i] * naturalNums[i]);
  }
  sumNums = squareNums.reduce(getSum);
  console.log(squareNums);
  console.log(sumNums);
  getSquareOfSums(sumNums);
}

// function getSquareOfSums(sumOfSquares) {

// }