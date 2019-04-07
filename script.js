let arr = [3, 0, 1, 8, 7, 2, 5, 4, 6, 9];

function bubbleSort(arr) {
	function sort(end) {
		for (let i = 0; i < end; i++) {
			const el1 = arr[i],
				  el2 = arr[i + 1];
			if (el1 > el2) {
				arr.splice(i, 2, el2, el1);
			} else {
				continue;
			}
		}
		if (--end > 1) {	
			sort(end);
		}		
	}
	sort(arr.length - 1);
	return arr;
}

console.log(bubbleSort(arr));
