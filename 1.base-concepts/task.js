"use strict"

function solveEquation(a, b, c) {

	let arr = [];
	let d = Math.pow(2, b) - (4 * a * c);
	if (d == 0) {
		arr.push(-b / (2 * a));
	} else if (d > 0) {
		arr.push((-b + Math.sqrt(d)) / (2 * a));
		arr.push((-b - Math.sqrt(d)) / (2 * a));
	} else {
    arr = [];
  }

	return arr;
}
//console.log(solveEquation(1, 2, -3));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let P = (percent / 100) / 12;
	let S = amount - contribution;
	let monthlyPayment = S * (P + (P / (Math.pow((1 + P), countMonths) - 1)));
	let fullPay = (monthlyPayment * countMonths);
  
	return (fullPay.toFixed(2));
}
//console.log(calculateTotalMortgage(10, 0, 50000, 12));
// Math.pow(7, 2); // 49  (((1 + P)** countMonths) - 1) 