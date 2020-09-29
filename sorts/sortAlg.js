//冒泡排序
var bubbleSort = function(arr){
	for(let i = 0;i < arr.length;i++){
		for(let j = 0;j < arr.length - 1;j++){
			if(arr[j] > arr[j+1]){
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr;
};

//选择排序
var selectSort = function(arr){
	for(let i = 0;i < arr.length;i++){
		var k = i + 1;
		for(let j = i + 1;j < arr.length;j++){
			if(arr[k] > arr[j]){
				k = j;
			}
		}
		if(arr[i] > arr[k]){
			var temp = arr[i];
			arr[i] = arr[k];
			arr[k] = temp;
		}
	}
	return arr;
};

//插入排序
var insertSort = function(arr){
	let len = arr.length;
	var pre;
	var cur;
	for(let i = 1;i < arr.length;i++){
		pre = i - 1;
		cur = arr[i];
		while(pre >= 0 && arr[pre] > cur){
			arr[pre + 1] = arr[pre];
			pre--;
		}
		arr[pre + 1] = cur;
	}
	return arr;
}

//归并排序
var mergeSort = function(arr){
	var len = arr.length;
	if(len < 2) return arr;
	var mid = Math.floor(len/2);
	return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
};

function merge(left, right){
	let res = [];
	while(left.length && right.length){
		if(left[0] <= right[0]){
			res.push(left[0]);
			left.shift();
		}else{
			res.push(right[0]);
			right.shift();
		}
	}
	if(left.length){
		res = res.concat(left);
	}
	if(right.length){
		res = res.concat(right);
	}
	return res;
}

//快速排序
var quickSort = function(arr, left, right){
	if(left < right){
		let pivot = left;
		let index = pivot + 1;
		for(let i = index;i <= right;i++){
			if(arr[i] < arr[pivot]){
				var temp = arr[i];
				arr[i] = arr[index];
				arr[index] = temp;
				index++;
			}
		}
		var temp1 = arr[pivot];
		arr[pivot] = arr[index-1];
		arr[index-1] = temp1;
		pivot = index - 1;
		arr = quickSort(arr, left, pivot-1)
		arr = quickSort(arr, pivot+1, right);
	}
	return arr;
};

var heapLen;
//堆排序
function heapify(arr, i){
	let left = 2*i + 1;
	let right = 2*i + 2;
	let largest = i;
	if(left < heapLen && arr[left] > arr[largest]){
		largest = left;
	}
	if(right < heapLen && arr[right] > arr[largest]){
		largest = right;
	}
	if(largest != i){
		var temp = arr[largest];
		arr[largest] = arr[i];
		arr[i] = temp;
		arr = heapify(arr, largest);
	}
	return arr;
}

function buildMaxHeap(arr){
	heapLen = arr.length;
	for(let i = Math.floor(heapLen/2);i >= 0;i--){
		arr = heapify(arr, i);
	}
	return arr;
}

var heapSort = function(arr){
	arr = buildMaxHeap(arr);
	for(let i = arr.length-1;i > 0;i--){
		var temp = arr[i];
		arr[i] = arr[0];
		arr[0] = temp;
		heapLen--;
		arr = heapify(arr, 0);
	}
	return arr;
};

//基数排序
var radixSort = function(arr, maxDigit){
	let dev = 1;
	let mod = 10;
	let count = [];
	for(let i = 0;i < maxDigit;i++,dev *= 10, mod *= 10){
		for(let j = 0;j < arr.length;j++){
			var bucket = parseInt((arr[j]%mod)/dev);
			if(count[bucket] == null){
				count[bucket] = [];
			}
			count[bucket].push(arr[j]);
		}

		var pos = 0;
		for(let k = 0;k < count.length;k++){
			var val = null;
			if(count[k] != null){
				while((val = count[k].shift()) != null){
					arr[pos++] = val;
				}
			}
		}
	}
	return arr;
};