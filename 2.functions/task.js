function getArrayParams(...arr) {
	let max = -Infinity;
	let min = Infinity;
	let avg = 0;
	let counter = 0;
	let sum = 0;
	for (let arg of arr) {
		sum += arg;
		counter = arr.length;
		avg = sum / counter;
		if (arg > max) {
			max = arg;
		}
		if (arg < min) {
			min = arg;
		}
	}
	return {
		min: min,
		max: max,
		avg: +avg.toFixed(2)
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sum = 0;
	for (let arg of arr) {
		sum += arg;
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let max = -Infinity;
	let min = Infinity;
	for (let arg of arr) {
		if (arg > max) {
			max = arg;
		}
		if (arg < min) {
			min = arg;
		}
	}
	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let sumOddElement = 0;
	let difference = 0;
	for (let arg of arr) {
		if (arg % 2 === 0) {
			sumEvenElement += arg;
		} else {
			sumOddElement += arg;
		}
	}
	difference = sumEvenElement - sumOddElement
	return difference;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	sumEvenElement = 0;
	countEvenElement = 0;
	averageEvenElement = 0;
	for (let arg of arr) {
		if (arg % 2 === 0) {
			sumEvenElement += arg;
			countEvenElement += 1;
		}
	}
	averageEvenElement = sumEvenElement / countEvenElement;
	return averageEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	let arr = [];
	for (let i = 0; i < arrOfArr.length; i++) {
		arr.push(func(...arrOfArr[i]));
		if (maxWorkerResult < arr[i]) {
			maxWorkerResult = arr[i];
		}
	}
	return maxWorkerResult;
}