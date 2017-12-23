const processor = [2,0,2,1,1];
const numbers = [13,42,117,10,93,40,101,90,104,28,58,16,30,107,97,79,45,71,70,55,35,27,72,50,78,66,7,25,17,52,27,115,66,66,16,114,42,33,82,34,64,25,30,104,40,31,23,34,100,116,87,90,58,94,5,62,13,15,103,67,89,105,56,116,113,39,39,81,98,103,84,94,27,107,58,64,45,46,92,106,53,23,35,52,15,41,47,25,55,1,28,48,75,80,6,15,52,89,23,97,83,114,25,89,20,95,45,88,11,45,115,38,24,40,14,107,93,3,30,102,35,15,74,40,88,90,103,49,20,96,49,91,70,100,25,95,78,33,37,72,64,102,58,107,37,27,88,7,50,10,26,28,98,47,29,73,27,85,81,44,88,66,5,43,65,63,96,105,31,104,4,82,18,112,98,96,31,40,56,64,91,71,96,46,27,114,7,114,51,52,13,75,18,64,74,84,49,72,74,70,35,97,79,12,83,24,102,48,1,105,51,64,50,19,102,4,1,94,103,7,10,102,52,39,57,113,35,61,77,69,29,116,111,31,24,109,40,27,44,94,30,86,15,24,53,89,44,15,112,48,56,108,100,66,64,71,83,43,105,55,77,89,74,37,9,115,11,41,98,104,46,83,66,36,99,26,72,78,116,18,68,23,26,2,107,89,82,56,88,81,116,34,10,68,89,97,115,109,36,58,51,116,79,59,34,42,79,50,116,61,38,115,103,11,101,63,87,42,116,33,7,92,55,101,111,47,56,62,111,96,26,58,110,97,38,1,32,109,31,98,103,115,56,37,81,102,7,17,52,65,57,87,21,24,114,110,59,83,91,110,102,101,105,13,80,27,77,42,76,60,47,78,82,47,56,68,79,31,42,75,75,1,33,25,59,6,107,50,55,59,116,31,12,112,30,96,113,15,69,58,33,53,115,42,105,49,71,60,85,25,21,86,112,111,20,91,9,44,93,1,95,19,27,17,45,97,96,102,36,78,97,12,67,19,7,34,32,6,19,39,80,112,116,116,71,69,74];

let zeroProc = [];
let oneProc = [];
let twoProc = [];
let indexResult = [];

let boolProcessor = {};

processor.forEach(function(proc, index) {
	boolProcessor[index] = false;
});


let counter = {};
for (var i = 0; i < numbers.length; i++) {
	console.log(boolProcessor);
	console.log(counter,'counter');
	if (numbers[i] % 13 === 0) {
		for (var j = 0; j < processor.length; j++) {
			if (counter[j] <= 0) {boolProcessor[j] = false;}
			if (processor[j] === 1) {
				if (boolProcessor[j] === false) {
					boolProcessor[j] = true;
					indexResult.push(j);
					counter[j] = numbers[i] / 13;
					break;
				} else {
					counter[j]--;
				}
			} else {
				if (boolProcessor[j] === false) {
					boolProcessor[j] = true;
					indexResult.push(j);
					counter[j] = numbers[i] / 13;
					break;
				} else {
					counter[j]--;
				}
			}
		}
	} else if (numbers[i] % 2 === 0) {
		for (var j = 0; j < processor.length; j++) {
			if (counter[j] <= 0) {boolProcessor[j] = false;}
			if (processor[j] === 2) {
				if (boolProcessor[j] === false) {
					boolProcessor[j] = true;
					indexResult.push(j);
					counter[j] = numbers[i] / 2;
					break;
				} else {
					counter[j]--;
				}
			} else {
				if (boolProcessor[j] === false) {
					boolProcessor[j] = true;
					indexResult.push(j);
					counter[j] = numbers[i] / 2;
					break;
				} else {
					counter[j]--;
				}
			}
		}
	} else {
		for (var j = 0; j < processor.length; j++) {
			if (processor[j] === 0) {
				if (counter[j] <= 0) {boolProcessor[j] = false;}
				if (processor[j] === 2) {
					if (boolProcessor[j] === false) {
						boolProcessor[j] = true;
						indexResult.push(j);
						counter[j] = numbers[i] / 1;
						break;
					} else {
						counter[j]--;
					}
				} else {
					if (boolProcessor[j] === false) {
						boolProcessor[j] = true;
						indexResult.push(j);
						counter[j] = numbers[i] / 1;
						break;
					} else {
						counter[j]--;
					}
				}
			}
		}
	}
}

console.log(indexResult);

console.log(numbers.length);