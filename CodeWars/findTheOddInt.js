function findOdd(array) {
	let obj = {};
	let res = 0;
	let max = 0;
	for (let i = 0; i < array.length; i++) {
		let char = array[i];
		if (char in obj) {
			obj[char] += 1;
		} else {
			obj[char] = 1;
		}
	}
	for(let num in obj) {
		if(obj[num] > max) {
			if(obj[num] % 2 != 0) {
				max = obj[num];
				res = num;
			}
		}
	}

	return Number(res);
}

let array = [1, 2, 1, 1, 2, 3];

console.log(findOdd(array));