"use strict"

function parseCount(count) {
	let parsedCount = parseFloat(count);
	if (isNaN(parsedCount)) {
		throw new Error('Невалидное значение');
	}
	return parsedCount;
}

function validateCount(count) {
	try {
		return parseCount(count);
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		if ((a + b < c) || (a + c < b) || (c + b < a)) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}

	get perimeter() {
		return (this.a + this.b + this.c);
	}

	get area() {
		let semiP = this.perimeter / 2;
		return (+Math.sqrt(semiP * (semiP - this.a) * (semiP - this.b) * (semiP - this.c)).toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get area() {
				return "Ошибка! Треугольник не существует";
			},
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			}
		}
	}
}